/**
 * Google Sheets API Integration Service
 * Performs lightweight, robust HTTP calls directly to the Google REST endpoints.
 */

// Format timestamp into clean readable date/time
const formatTimestamp = (isoString: string): string => {
  try {
    return new Date(isoString).toLocaleString();
  } catch (err) {
    return isoString;
  }
};

/**
 * Creates a brand new Google Spreadsheet in the user's Google Drive.
 * Automatically initializes columns for lead metrics.
 */
export async function createSpreadsheet(accessToken: string, title: string = "Shipplix Export Blueprint Leads"): Promise<string> {
  const url = "https://sheets.googleapis.com/v4/spreadsheets";
  
  const headers = {
    "Authorization": `Bearer ${accessToken}`,
    "Content-Type": "application/json"
  };

  const payload = {
    properties: {
      title: title
    },
    sheets: [
      {
        properties: {
          title: "Leads"
        },
        data: [
          {
            startRow: 0,
            startColumn: 0,
            rowData: [
              {
                values: [
                  { userEnteredValue: { stringValue: "Submission Date & Time" }, userEnteredFormat: { textFormat: { bold: true } } },
                  { userEnteredValue: { stringValue: "Full Name" }, userEnteredFormat: { textFormat: { bold: true } } },
                  { userEnteredValue: { stringValue: "Business Name" }, userEnteredFormat: { textFormat: { bold: true } } },
                  { userEnteredValue: { stringValue: "Email Address" }, userEnteredFormat: { textFormat: { bold: true } } },
                  { userEnteredValue: { stringValue: "WhatsApp Number" }, userEnteredFormat: { textFormat: { bold: true } } },
                  { userEnteredValue: { stringValue: "Country" }, userEnteredFormat: { textFormat: { bold: true } } },
                  { userEnteredValue: { stringValue: "Products Sold" }, userEnteredFormat: { textFormat: { bold: true } } },
                  { userEnteredValue: { stringValue: "Business Stage" }, userEnteredFormat: { textFormat: { bold: true } } },
                  { userEnteredValue: { stringValue: "Monthly Revenue" }, userEnteredFormat: { textFormat: { bold: true } } },
                  { userEnteredValue: { stringValue: "Requested Strategy Session" }, userEnteredFormat: { textFormat: { bold: true } } },
                  { userEnteredValue: { stringValue: "Subscribed to Tips" }, userEnteredFormat: { textFormat: { bold: true } } }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorDetails = await response.text();
    throw new Error(`Failed to create spreadsheet: ${response.statusText} (${errorDetails})`);
  }

  const data = await response.json();
  if (!data.spreadsheetId) {
    throw new Error("Created spreadsheet response did not return a valid spreadsheetId.");
  }

  return data.spreadsheetId;
}

/**
 * Appends rows of collected lead records to an existing spreadsheet.
 */
export async function appendLeadsToSpreadsheet(accessToken: string, spreadsheetId: string, leads: any[]): Promise<boolean> {
  if (leads.length === 0) return true;

  const range = "Leads!A:K";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const headers = {
    "Authorization": `Bearer ${accessToken}`,
    "Content-Type": "application/json"
  };

  // Convert array of lead objects into simple rows
  const rows = leads.map(lead => [
    formatTimestamp(lead.timestamp),
    lead.fullName || "",
    lead.businessName || "",
    lead.email || "",
    lead.whatsapp || "",
    lead.country || "",
    lead.products || "",
    lead.businessStage || "",
    lead.monthlyRevenue || "Not Provided",
    lead.strategySession ? "YES" : "NO",
    lead.futureTips ? "YES" : "NO"
  ]);

  const payload = {
    values: rows
  };

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorDetails = await response.text();
    throw new Error(`Failed to append lead values to Google Sheet: ${response.statusText} (${errorDetails})`);
  }

  return true;
}

/**
 * Checks if a Google Sheet exists and we have permissions to edit it.
 */
export async function verifySpreadsheetExists(accessToken: string, spreadsheetId: string): Promise<boolean> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=spreadsheetId`;
  
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${accessToken}`
    }
  });

  return response.ok;
}
