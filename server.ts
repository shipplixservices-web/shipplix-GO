import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const PORT = 3000;
const DB_DIR = path.join(process.cwd(), "src", "db");
const LEADS_FILE = path.join(DB_DIR, "leads.json");
const CONFIG_FILE = path.join(DB_DIR, "config.json");

// Ensure database directory and files exist
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}
if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
}
if (!fs.existsSync(CONFIG_FILE)) {
  fs.writeFileSync(CONFIG_FILE, JSON.stringify({ spreadsheetId: "" }, null, 2));
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API Route: Save Lead Submission
  app.post("/api/leads", (req, res) => {
    try {
      const { 
        fullName, 
        businessName, 
        email, 
        whatsapp, 
        country, 
        products, 
        businessStage, 
        monthlyRevenue,
        strategySession,
        futureTips
      } = req.body;

      if (!fullName || !businessName || !email || !whatsapp || !country || !products) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const fileData = fs.readFileSync(LEADS_FILE, "utf-8");
      const leads = JSON.parse(fileData);

      const newLead = {
        id: "lead_" + Math.random().toString(36).substring(2, 11),
        fullName,
        businessName,
        email,
        whatsapp,
        country,
        products,
        businessStage,
        monthlyRevenue: monthlyRevenue || "Not Provided",
        strategySession: strategySession !== false,
        futureTips: futureTips !== false,
        timestamp: new Date().toISOString(),
        synced: false // Track if this lead has been written to Google Sheets
      };

      leads.push(newLead);
      fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));

      console.log(`Lead successfully collected for: ${fullName} (${businessName})`);
      res.status(201).json({ success: true, lead: newLead });
    } catch (err: any) {
      console.error("Error saving lead server-side:", err);
      res.status(500).json({ error: "Failed to save lead submission" });
    }
  });

  // API Route: Retrieve all Leads (for Admin Page)
  app.get("/api/leads", (req, res) => {
    try {
      const fileData = fs.readFileSync(LEADS_FILE, "utf-8");
      const leads = JSON.parse(fileData);
      res.json(leads);
    } catch (err: any) {
      console.error("Error reading leads server-side:", err);
      res.status(500).json({ error: "Failed to load leads list" });
    }
  });

  // API Route: Update Sync Status of Leads after Google Sheet save
  app.post("/api/leads/sync", (req, res) => {
    try {
      const { leadIds } = req.body;
      if (!Array.isArray(leadIds)) {
        return res.status(400).json({ error: "leadIds must be an array" });
      }

      const fileData = fs.readFileSync(LEADS_FILE, "utf-8");
      const leads = JSON.parse(fileData);

      const updatedLeads = leads.map((lead: any) => {
        if (leadIds.includes(lead.id)) {
          return { ...lead, synced: true };
        }
        return lead;
      });

      fs.writeFileSync(LEADS_FILE, JSON.stringify(updatedLeads, null, 2));
      res.json({ success: true, message: `Synced status updated for ${leadIds.length} lead(s).` });
    } catch (err: any) {
      console.error("Error updating lead sync states:", err);
      res.status(500).json({ error: "Failed to update lead sync states" });
    }
  });

  // API Route: Get Config
  app.get("/api/admin/config", (req, res) => {
    try {
      const fileData = fs.readFileSync(CONFIG_FILE, "utf-8");
      res.json(JSON.parse(fileData));
    } catch (err: any) {
      res.json({ spreadsheetId: "" });
    }
  });

  // API Route: Save Config
  app.post("/api/admin/config", (req, res) => {
    try {
      const { spreadsheetId } = req.body;
      fs.writeFileSync(CONFIG_FILE, JSON.stringify({ spreadsheetId: spreadsheetId || "" }, null, 2));
      res.json({ success: true, spreadsheetId });
    } catch (err: any) {
      console.error("Error writing config:", err);
      res.status(500).json({ error: "Failed to save configuration" });
    }
  });

  // Vite middleware setup for Development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in Production
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT} [ENV: ${process.env.NODE_ENV || 'development'}]`);
  });
}

startServer();
