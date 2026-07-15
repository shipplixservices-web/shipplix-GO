import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

// Create assets directory if it doesn't exist
const assetsDir = path.join(process.cwd(), 'src', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const pdfPath = path.join(assetsDir, 'african-export-blueprint.pdf');
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 50, bottom: 50, left: 50, right: 50 }
});

const writeStream = fs.createWriteStream(pdfPath);
doc.pipe(writeStream);

// Helper to draw a horizontal rule
function drawHR() {
  doc.moveDown(0.5);
  doc.strokeColor('#CBD5E1').lineWidth(1).moveTo(50, doc.y).lineTo(doc.page.width - 50, doc.y).stroke();
  doc.moveDown(0.8);
}

// Helper to draw custom headers/footers
doc.on('pageAdded', () => {
  // We can draw a subtle header or footer here if needed, but pdfkit lets us do it inline easily.
});

// Title Page
doc.rect(40, 40, doc.page.width - 80, doc.page.height - 80).stroke('#1E3A8A');
doc.moveDown(4);
doc.fillColor('#1E3A8A').font('Helvetica-Bold').fontSize(36).text('THE AFRICAN EXPORT', { align: 'center' });
doc.fontSize(36).text('BLUEPRINT', { align: 'center' });
doc.moveDown(1.5);
doc.fillColor('#F59E0B').font('Helvetica-Bold').fontSize(18).text('A Step-by-Step Guide to Finding Overseas Buyers', { align: 'center' });
doc.text('& Building a Scaleable Export System', { align: 'center' });
doc.moveDown(3);
doc.fillColor('#475569').font('Helvetica').fontSize(13).text('Brought to you by', { align: 'center' });
doc.fillColor('#1E3A8A').font('Helvetica-Bold').fontSize(22).text('Shipplix Logistics', { align: 'center' });
doc.fillColor('#64748B').font('Helvetica-Oblique').fontSize(11).text('Your trusted freight partner from Nigeria to the World', { align: 'center' });
doc.moveDown(5);
doc.fillColor('#0F172A').font('Helvetica').fontSize(12).text('© 2026 Shipplix Services. All rights reserved.', { align: 'center' });
doc.fillColor('#3B82F6').font('Helvetica-Bold').fontSize(12).text('www.shipplix.com', { align: 'center', link: 'https://shipplix.com' });

// Add Pages
const pagesData = [
  {
    title: 'PHASE 1: Build an International Business That Overseas Customers Trust',
    sections: [
      {
        heading: 'Why Most Nigerian Businesses Never Get International Customers',
        content: [
          "Many business owners believe they don't have customers overseas because their products aren't good enough. That is rarely the real problem.",
          "Thousands of people abroad buy Nigerian products every single day — from food items and beverages to fashion, beauty products, herbs, spices, and cultural items.",
          "The businesses winning these customers are not always selling better products. They simply look more trustworthy.",
          "People in the US, UK, Canada, and Europe are sending money to someone they've never met. Before they pay, they subconsciously ask themselves:",
          "• Can I trust this business?",
          "• Will I receive my order?",
          "• Is this company professional?",
          "• Can I contact them if something goes wrong?",
          "If your business cannot answer those questions within a few seconds, many buyers will leave — even if they love your product.",
          "Trust is your first product. Your actual product comes second."
        ]
      }
    ]
  },
  {
    title: 'The International Sales Formula',
    sections: [
      {
        heading: 'The Five Pillars of Export Success',
        content: [
          "International sales are built on five key pillars:",
          "Product + Trust + Visibility + Follow-up + Reliable Delivery = International Customers",
          "Most businesses only focus on the product. Successful export businesses build all five."
        ]
      },
      {
        heading: 'What Products Sell Well Overseas?',
        content: [
          "Demand already exists for many Nigerian and African products. Examples include:",
          "• Kola nuts, Palm oil, Garri, Egusi, Ogbono",
          "• Crayfish, Stockfish, Dried pepper, Local spices",
          "• Honey, Herbal products, African beverages",
          "• Fashion, Ankara fabrics, Wigs, Skincare",
          "• African gifts, Handmade crafts and home decor",
          "The goal is not to sell everything. Choose one category and become known for it. Specialists build trust faster than general stores."
        ]
      }
    ]
  },
  {
    title: 'Targeting & Presentation',
    sections: [
      {
        heading: "Understand Who You're Selling To",
        content: [
          "Most first-time exporters make one mistake: they try to sell to everyone. Instead, choose one clear target audience:",
          "• Nigerians living abroad / African families overseas",
          "• African restaurants and grocery stores",
          "• Beauty stores and beauty practitioners",
          "• Church communities, students, or gift buyers",
          "• Small retailers looking for authentic imports",
          "The more specific your audience is, the easier it becomes to attract customers."
        ]
      },
      {
        heading: "Your Business Must Look International",
        content: [
          "Before running a single advertisement, make sure your business looks professional. Every serious export business should have:",
          "✔ A professional business name",
          "✔ A clean, high-resolution logo",
          "✔ A dedicated business email address (e.g., contact@yourbusiness.com instead of yourbusiness@gmail.com)",
          "A business email immediately increases credibility. It tells customers they are dealing with a real company instead of a random social media seller."
        ]
      }
    ]
  },
  {
    title: 'Establishing Your Digital Presence',
    sections: [
      {
        heading: 'Essential Channels You Should Have',
        content: [
          "To secure international trust, ensure your brand has:",
          "• A professional WhatsApp Business profile with updated info",
          "• An active Facebook Page & Instagram Business account",
          "• A simple, responsive website or online store",
          "• Consistent, high-quality business branding and visual assets",
          "People buy with their eyes before they buy with their wallets."
        ]
      },
      {
        heading: 'Action Steps (Phase 1 Checklist)',
        content: [
          "Before moving to Phase 2, complete this foundational checklist:",
          "☐ Choose one single product category.",
          "☐ Define your exact target customer.",
          "☐ Create a professional business email address.",
          "☐ Set up and configure your WhatsApp Business profile.",
          "☐ Create your Facebook and Instagram business pages.",
          "☐ Prepare clear, well-lit product photos and video clips.",
          "Do not skip this stage. Everything else becomes much easier when your business already looks trustworthy."
        ]
      }
    ]
  },
  {
    title: 'PHASE 2: How to Find Overseas Customers Every Month',
    sections: [
      {
        heading: 'Stop Looking for Customers. Position Yourself to Be Found.',
        content: [
          "A professional business without customers is like opening a beautiful shop in the middle of a forest — no one knows it exists.",
          "One of the biggest mistakes new exporters make is posting a product on WhatsApp and hoping someone will buy it. That approach rarely creates a predictable business.",
          "Successful exporters don't wait for customers. They build a system that consistently puts their products in front of the right people.",
          "Your goal is simple: Get your products in front of people who already have a reason to buy.",
          "We think of your export business as having four customer pipelines. The more pipelines you build, the more stable your sales become."
        ]
      }
    ]
  },
  {
    title: 'The Four Customer Pipelines',
    sections: [
      {
        heading: 'Pipeline 1: Meta Ads (Facebook & Instagram)',
        content: [
          "This is one of the fastest ways to reach buyers in countries such as the United States, United Kingdom, Canada, Germany, Ireland, France, and the Netherlands.",
          "Instead of advertising to everyone, target specific niches: Nigerians living abroad, Africans in the diaspora, people interested in African food/fashion/beauty, restaurant owners, and beauty store owners.",
          "When your ads reach the right audience, your inquiries increase significantly.",
          "Remember: You're not selling a product first. You're selling confidence that you can deliver what you promise."
        ]
      },
      {
        heading: 'Pipeline 2: Organic Content Marketing',
        content: [
          "People rarely buy the first time they see your business. They usually watch your content first. That's why successful exporters post consistently.",
          "Create authentic behind-the-scenes content like:",
          "• How your products are sourced locally",
          "• Hygienic packing and sorting behind the scenes",
          "• Quality and safety inspections before sealing",
          "• Video check-ins at the logistics warehouse"
        ]
      }
    ]
  },
  {
    title: 'Customer Pipelines & Marketing Psychology',
    sections: [
      {
        heading: 'Pipeline 3: Diaspora Communities',
        content: [
          "Millions of Africans living abroad actively participate in online communities (Facebook Groups, community forums, local association groups, church communities, cultural organizations).",
          "These communities are valuable customer sources if you provide genuine value instead of constantly spamming products. Focus on helping people first. Trust grows faster when you are seen as a helpful resources."
        ]
      },
      {
        heading: 'Pipeline 4: Customer Referrals',
        content: [
          "Satisfied customers are your best marketing assets. After every successful delivery:",
          "• Ask for an honest review and feedback",
          "• Request a photo or short video of the unboxing",
          "• Encourage them to tell their friends/family",
          "• Offer a small discount or reward for successful referrals"
        ]
      }
    ]
  },
  {
    title: 'Marketing Psychology & Content Planning',
    sections: [
      {
        heading: 'Marketing Psychology That Makes People Click',
        content: [
          "Many businesses advertise products. Few advertise outcomes.",
          "• Instead of saying: 'We sell palm oil.'",
          "• Say: 'Bring the authentic taste of home back to your kitchen.'",
          "• Instead of saying: 'We ship to the UK.'",
          "• Say: 'Receive your favorite Nigerian products at your doorstep without asking family members to carry them on flights.'",
          "People buy solutions, convenience, memories, emotions, and confidence — not just products."
        ]
      },
      {
        heading: 'The 80/20 Content Rule',
        content: [
          "Don't make every social media post a sales pitch. A simple, effective framework is:",
          "• 80%: Educate, inspire, entertain, answer common questions, show behind the scenes.",
          "• 20%: Promote your specific products or delivery services.",
          "When people trust your expertise, selling becomes much easier."
        ]
      }
    ]
  },
  {
    title: 'Ad Creatives & Action Steps',
    sections: [
      {
        heading: 'Your Creative Determines Your Results',
        content: [
          "Many businesses think their ads fail because of budget, but in reality, the creative (video/image) is often the issue.",
          "Your ad should immediately answer four simple questions:",
          "1. What is this?",
          "2. Why should I care?",
          "3. Why should I trust you?",
          "4. What should I do next?",
          "A strong advertisement combines high-quality images/videos, clear headlines, authentic storytelling, customer proof, and a clear call to action."
        ]
      },
      {
        heading: 'Action Steps (Phase 2 Checklist)',
        content: [
          "Before moving to Phase 3, complete these steps:",
          "☐ Define your ideal customer persona.",
          "☐ Create a monthly social media content calendar.",
          "☐ Produce at least 15 short, engaging videos.",
          "☐ Collect customer testimonials & reviews.",
          "☐ Join 5 diaspora communities related to your niche.",
          "☐ Launch your first targeted Meta Ads campaign."
        ]
      }
    ]
  },
  {
    title: 'PHASE 3: Build a Sales System That Works While You Sleep',
    sections: [
      {
        heading: 'Why Most Businesses Lose Customers',
        content: [
          "Imagine two businesses selling the exact same product.",
          "The first business posts a product on social media and tells people to 'send a DM.'",
          "The second business has a professional website, a dedicated business email, a WhatsApp Business account with automatic replies, a product catalog, customer reviews, a simple ordering process, secure payment options, and shipment tracking.",
          "Which business would you trust with your money? Most people choose the second one.",
          "The difference isn't the product — it's the buying experience."
        ]
      },
      {
        heading: 'Your Business Needs a Digital Storefront',
        content: [
          "Think of your website as your online office. Social media platforms can disappear, accounts can be suspended, and algorithms change. Your website is the one platform you truly control.",
          "A professional website should help customers learn about your business, browse your products, understand your shipping process, read customer reviews, ask questions, place an order, and contact you easily."
        ]
      }
    ]
  },
  {
    title: 'WhatsApp Automation & The Customer Journey',
    sections: [
      {
        heading: 'Turn WhatsApp Into a 24-Hour Sales Assistant',
        content: [
          "WhatsApp Business is more than a messaging app. It can become one of your most valuable sales tools.",
          "Set it up to welcome new inquiries automatically, answer frequently asked questions, share your product catalog, explain shipping timelines, and direct customers to the correct next step.",
          "When people receive fast, helpful responses, they're more likely to buy."
        ]
      },
      {
        heading: 'Create a Simple, Frictionless Customer Journey',
        content: [
          "Don't leave customers wondering what to do next. Guide them through a clear process:",
          "1. Customer sees your advertisement or organic video.",
          "2. They visit your professional website or WhatsApp Business.",
          "3. They browse your product catalog and learn details.",
          "4. They get instant automated answers to standard questions.",
          "5. They place an order via a clean ordering form.",
          "6. They receive prompt secure payment instructions.",
          "7. Their shipment is prepared (and you send a scale video!).",
          "8. They receive a clear tracking link from Shipplix.",
          "9. Their order is delivered safely to their doorstep.",
          "10. You follow up for feedback, a review, and referrals."
        ]
      }
    ]
  },
  {
    title: 'Building Resilience & Proof',
    sections: [
      {
        heading: 'Collect Reviews and Show Proof',
        content: [
          "Before buying, most international customers look for evidence that others have had a good experience. Make it easy for them to find:",
          "• Detailed customer testimonials",
          "• Photos of delivered orders in destination countries",
          "• Packing scale videos confirming exact weights",
          "• Screenshots of delivery confirmations and tracking status",
          "• High ratings on Google and social media",
          "Every successful delivery becomes marketing material for your next customer."
        ]
      },
      {
        heading: "Don't Rely on One Platform",
        content: [
          "A resilient business has multiple ways for customers to find and contact them. Aim to build a presence across:",
          "• Your professional website",
          "• WhatsApp Business & Email list",
          "• Facebook, Instagram, TikTok, & YouTube",
          "• LinkedIn (for wholesale and business-to-business buyers)",
          "• Google Business Profile"
        ]
      }
    ]
  },
  {
    title: 'PHASE 3 Action Steps & PHASE 4 Intro',
    sections: [
      {
        heading: 'Action Steps (Phase 3 Checklist)',
        content: [
          "Before moving to Phase 4, make sure you have:",
          "☐ A professional, high-converting website.",
          "☐ A custom business email (e.g. sales@yourbusiness.com).",
          "☐ WhatsApp Business automation fully configured.",
          "☐ A clear, step-by-step customer ordering process.",
          "☐ Testimonials and customer reviews easily accessible.",
          "☐ A simple follow-up process after every sale."
        ]
      },
      {
        heading: 'PHASE 4: Turn One Customer Into Ten',
        content: [
          "The most expensive sale is the first one. Many business owners think the sale is the finish line. It's actually the starting line.",
          "You've already spent time and money attracting that customer. The next goal is to keep them coming back and encourage them to tell others about your business.",
          "The businesses that grow the fastest don't always have the biggest advertising budgets. They have customers who trust them enough to buy again and recommend them to friends and family."
        ]
      }
    ]
  },
  {
    title: 'Customer Retention & Referrals',
    sections: [
      {
        heading: 'Deliver an Experience, Not Just a Package',
        content: [
          "People remember how you made them feel. A simple shipment can become a memorable experience if you:",
          "• Package products neatly, cleanly, and securely.",
          "• Communicate transparently throughout the shipping process.",
          "• Share tracking updates proactively.",
          "• Respond promptly to any shipping questions.",
          "• Deliver on or before the timeline you promised.",
          "Customers who feel informed and valued are highly likely to become repeat buyers."
        ]
      },
      {
        heading: 'Follow Up After Every Delivery',
        content: [
          "Don't disappear after the shipment is delivered. Within a few days, send a message asking:",
          "• Did your order arrive safely?",
          "• Are you happy with the quality of the products?",
          "• Is there anything we could do to improve?",
          "This shows immense professionalism and gives customers confidence that you care beyond just collecting their payment."
        ]
      }
    ]
  },
  {
    title: 'Reviews, Referrals & Branding',
    sections: [
      {
        heading: 'Ask for Reviews & Build a Referral Engine',
        content: [
          "Most happy customers won't leave a review unless you ask. A simple, polite request can go a long way. You can ask them to leave a written review, share a photo of their order, record a short video testimonial, or tag your brand on social media.",
          "Additionally, build a referral engine. One satisfied customer can introduce you to several more if you offer a small reward, such as:",
          "• A discount on their next order",
          "• Free packaging or custom wrapping",
          "• A shipping credit for their next shipment",
          "• A bonus popular product included in their next order",
          "People are much more likely to trust a recommendation from someone they already know."
        ]
      },
      {
        heading: 'Stay in Touch & Think Like a Brand',
        content: [
          "Not every customer is ready to buy again immediately. Keep your business in front of them by sharing useful content, including new arrivals, seasonal products, shipping updates, helpful tips, customer success stories, and special promotions.",
          "Customers don't stay loyal to businesses that only post products. They stay loyal to businesses that stand for something. Build your brand around: Reliability, Honesty, Consistency, Professionalism, and Customer Care."
        ]
      }
    ]
  },
  {
    title: 'PHASE 4 Checklist & PHASE 5 Intro',
    sections: [
      {
        heading: 'Action Steps (Phase 4 Checklist)',
        content: [
          "Before moving to the final phase:",
          "☐ Create a standard follow-up message template for every completed order.",
          "☐ Ask every satisfied customer for a review systematically.",
          "☐ Launch a simple referral program with attractive incentives.",
          "☐ Keep a clean record of your business performance (enquiries, orders, repeats).",
          "☐ Commit to consistent, regular communication with your audience."
        ]
      },
      {
        heading: 'PHASE 5: Build an Export Business That Can Scale',
        content: [
          "By now, you understand how to choose products with international demand, attract overseas customers, build a professional online presence, and turn first-time buyers into loyal customers.",
          "The final piece is bringing everything together into one complete, automated system.",
          "Successful export businesses combine marketing, technology, automation, and reliable logistics into a single engine that can grow consistently."
        ]
      }
    ]
  },
  {
    title: 'Building a Scaleable Export Engine',
    sections: [
      {
        heading: "Success Comes From a Complete System",
        content: [
          "Many business owners think they need one more app, one more social media platform, or one more advertisement to succeed. In reality, successful export businesses are built on systems that work together.",
          "Think of your business like a machine. Every part has a job:",
          "• Your organic content attracts initial attention.",
          "• Your targeted advertisements generate solid enquiries.",
          "• Your professional website builds credibility and trust.",
          "• Your WhatsApp Business automation answers FAQs instantly.",
          "• Your professional email handles transactions.",
          "• Your checkout system makes buying and payment easy.",
          "• Your shipping process (powered by Shipplix) fulfills orders smoothly.",
          "• Your proactive follow-up turns buyers into brand ambassadors."
        ]
      }
    ]
  },
  {
    title: 'The Modern Export Business Blueprint',
    sections: [
      {
        heading: 'The Full Scalable Architecture',
        content: [
          "A professional, scalable export business typically includes:",
          "1. Marketing: Meta Ads, TikTok content, Instagram Reels, Facebook Pages, Search Visibility, and Referral Marketing.",
          "2. Sales: A professional website, WhatsApp Business automation, digital product catalog, responsive landing pages, and a professional custom business email.",
          "3. Operations: Standardized order management, payment tracking, customer database (CRM), shipment tracking, delivery updates, and reliable customer support.",
          "4. Growth: Verified customer reviews, structured referral program, strategic email marketing, retargeting ads, and detailed performance reporting."
        ]
      }
    ]
  },
  {
    title: 'Automation, Pricing & The 90-Day Growth Plan',
    sections: [
      {
        heading: 'Work Smarter With Automation',
        content: [
          "As your business grows, manually replying to every message and tracking every order becomes impossible. That is where automation is valuable. Welcome new inquiries, answer common FAQs, share pricing, collect customer details, confirm orders, send payment links, and trigger delivery updates automatically.",
          "Automation doesn't replace personal service — it gives you more time to focus on growing your business."
        ]
      },
      {
        heading: "Don't Compete on Price Alone",
        content: [
          "Many businesses believe the cheapest seller always wins. That is rarely true. Customers gladly pay more for: Reliability, Fast and clear communication, Professional presentation, Secure and beautiful packaging, Clear tracking updates, and Peace of Mind."
        ]
      }
    ]
  },
  {
    title: 'The 90-Day Export Growth Plan',
    sections: [
      {
        heading: 'Your Step-by-Step Scaled Launch Timeline',
        content: [
          "Month 1 – Build Your Foundation:",
          "• Choose your exact niche and product category.",
          "• Create your branding and visual assets.",
          "• Set up your business email and WhatsApp Business profile.",
          "• Build your digital storefront website.",
          "• Prepare high-quality product photos and videos.",
          "Month 2 – Launch Your Marketing:",
          "• Start posting consistently on social channels.",
          "• Join targeted diaspora community groups.",
          "• Launch your first targeted Meta Ads campaign.",
          "• Collect testimonials from early customers.",
          "• Fine-tune your sales and check-out process.",
          "Month 3 – Optimize and Scale:",
          "• Review your ad performance and optimize creative.",
          "• Increase spend on highly successful ad campaigns.",
          "• Formally launch your customer referral program.",
          "• Automate repetitive operations and customer follow-ups.",
          "• Partner with Shipplix to expand into additional international markets."
        ]
      }
    ]
  },
  {
    title: 'Ready to Build Your Export System?',
    sections: [
      {
        heading: ' Shipplix is Your Ultimate Growth Partner',
        content: [
          "This guide has shown you WHAT to build. The next challenge is building it CORRECTLY.",
          "Many business owners understand the strategy but don't have the time or technical skills to set up a professional website, an online store, automated WhatsApp workflows, Meta Ads campaigns, AI-powered customer support, shipment tracking, or follow-up automation.",
          "That is where Shipplix can help. Instead of spending months learning multiple tools and fixing expensive mistakes, you can work with our dedicated team that helps you build a professional export business from the ground up.",
          "Whether you are shipping food items, fashion, beauty products, handmade crafts, or local agricultural commodities, our goal is the same: Help you create an international brand that customers trust, recommend, and return to — again and again.",
          "Let's get started today!"
        ]
      }
    ]
  },
  {
    title: 'BONUS: Free Export Business Checklist',
    sections: [
      {
        heading: 'Complete Pre-Launch Checklist',
        content: [
          "Use this comprehensive list to verify your business readiness before launching:",
          "☐ Chosen a highly profitable niche and product category.",
          "☐ Identified your ideal overseas target customer.",
          "☐ Created clean, professional branding and visual identity.",
          "☐ Registered a custom domain and a professional business email.",
          "☐ Built a responsive website or modern online store.",
          "☐ Fully configured your WhatsApp Business profile and catalog.",
          "☐ Prepared high-quality, professional product photos and videos.",
          "☐ Created a structured 30-day social media content calendar.",
          "☐ Launched your first targeted Meta Ads campaign.",
          "☐ Collected and published early customer reviews.",
          "☐ Established a clear, secure shipping process (powered by Shipplix).",
          "☐ Configured a post-delivery customer follow-up system.",
          "☐ Launched a customer referral program with attractive rewards.",
          "☐ Established tracking for your key business performance metrics."
        ]
      }
    ]
  }
];

// Loop over pages and render nicely
pagesData.forEach((page, index) => {
  doc.addPage();
  
  // Page Border
  doc.rect(40, 40, doc.page.width - 80, doc.page.height - 80).stroke('#E2E8F0');
  
  // Page Header
  doc.fillColor('#1E3A8A').font('Helvetica-Bold').fontSize(10).text('THE AFRICAN EXPORT BLUEPRINT  |  SHIPPLIX LOGISTICS', 50, 48, { align: 'left' });
  doc.strokeColor('#CBD5E1').lineWidth(0.5).moveTo(50, 62).lineTo(doc.page.width - 50, 62).stroke();
  
  doc.y = 80;
  
  // Page Main Title
  doc.fillColor('#1E3A8A').font('Helvetica-Bold').fontSize(16).text(page.title, { paragraphGap: 10 });
  drawHR();
  
  page.sections.forEach((section) => {
    doc.fillColor('#0F172A').font('Helvetica-Bold').fontSize(12).text(section.heading, { paragraphGap: 6 });
    
    section.content.forEach((paragraph) => {
      if (paragraph.startsWith('•') || paragraph.startsWith('☐') || paragraph.startsWith('✔') || paragraph.startsWith('☐')) {
        doc.fillColor('#334155').font('Helvetica').fontSize(10).text(paragraph, {
          indent: 15,
          paragraphGap: 4,
          lineGap: 2
        });
      } else if (paragraph.startsWith('Product +') || paragraph.startsWith('Month 1') || paragraph.startsWith('Month 2') || paragraph.startsWith('Month 3')) {
        doc.fillColor('#1E3A8A').font('Helvetica-Bold').fontSize(10.5).text(paragraph, {
          paragraphGap: 5,
          lineGap: 3
        });
      } else {
        doc.fillColor('#334155').font('Helvetica').fontSize(10).text(paragraph, {
          paragraphGap: 8,
          lineGap: 2
        });
      }
    });
    
    doc.moveDown(1);
  });
  
  // Page Footer
  doc.strokeColor('#CBD5E1').lineWidth(0.5).moveTo(50, doc.page.height - 62).lineTo(doc.page.width - 50, doc.page.height - 62).stroke();
  doc.fillColor('#64748B').font('Helvetica').fontSize(9).text(`Page ${index + 2} of ${pagesData.length + 1}`, 50, doc.page.height - 52, { align: 'right' });
  doc.text('Download your real copy at shipplix.com', 50, doc.page.height - 52, { align: 'left' });
});

doc.end();

writeStream.on('finish', () => {
  console.log('PDF generated successfully at', pdfPath);
  try {
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    const publicPdfPath = path.join(publicDir, 'african-export-blueprint.pdf');
    fs.copyFileSync(pdfPath, publicPdfPath);
    console.log('PDF copy created successfully at', publicPdfPath);
  } catch (copyErr) {
    console.error('Error copying PDF to public folder:', copyErr);
  }
});
writeStream.on('error', (err) => {
  console.error('Error generating PDF:', err);
});
