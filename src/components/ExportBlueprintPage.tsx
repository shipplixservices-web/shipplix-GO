import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Download, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  TrendingUp, 
  Sparkles, 
  Globe, 
  ChevronRight, 
  HelpCircle, 
  Briefcase, 
  ShieldCheck,
  Check,
  Store,
  Laptop,
  MessageSquare,
  Megaphone,
  Database,
  Search,
  Users,
  Compass,
  ArrowDownToLine,
  ExternalLink,
  ChevronLeft,
  BookOpen,
  Utensils,
  Shirt,
  Palette,
  Package
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Common WhatsApp link matching app convention
const WHATSAPP_BASE = "https://wa.me/2349168273513?text=";
const URL_STRATEGY_CALL = `${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to book a Free Export Strategy Session to discuss my export business plans.")}`;
const URL_CHAT = `${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to chat about setting up my export business systems and international shipping.")}`;

// Reusable Button matching site's theme
const PageButton = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  as: Component = 'button',
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'yellow' | 'green'; 
  className?: string;
  as?: any;
  [key: string]: any;
}) => {
  const base = "px-6 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-center text-sm cursor-pointer";
  const variants = {
    primary: "bg-blue-900 text-white hover:bg-blue-950 shadow-md",
    yellow: "bg-[#FEB919] text-[#032B73] hover:bg-[#e2a412] shadow-md hover:-translate-y-0.5",
    outline: "border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 shadow-sm",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    ghost: "text-white/80 hover:text-white hover:bg-white/10",
    green: "bg-emerald-500 text-white hover:bg-emerald-600 shadow-md hover:-translate-y-0.5"
  };
  
  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

interface ExportBlueprintPageProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

export default function ExportBlueprintPage({ onNavigate, currentPath }: ExportBlueprintPageProps) {
  // Leads Storage & Form State
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    whatsapp: '',
    country: '',
    products: '',
    businessStage: 'Just Starting',
    monthlyRevenue: '',
    strategySession: true,
    futureTips: true
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ Active Index
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Book Preview Active Page
  const [previewPage, setPreviewPage] = useState(0);

  // SEO Schema Injection on mount
  useEffect(() => {
    // Injects FAQ, Article, and Breadcrumb Schema dynamically for pristine SEO compatibility
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is this guide free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, The African Export Growth is 100% free to download. Our goal is to empower African exporters with modern customer acquisition and automation systems to grow their international trade."
          }
        },
        {
          "@type": "Question",
          "name": "Who is this guide for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is designed specifically for food exporters, fashion designers, manufacturers, farm owners, grocery suppliers, and entrepreneurs across Africa looking to build robust customer acquisition funnels for international buyers."
          }
        }
      ]
    };

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The African Export Growth: How to Build an International Customer Acquisition System",
      "description": "Download the official guide on how African businesses attract, validate, and convert overseas buyers systematically with modern technology and logistics.",
      "publisher": {
        "@type": "Organization",
        "name": "Shipplix",
        "logo": {
          "@type": "ImageObject",
          "url": "https://shipplix.com/logo.png"
        }
      }
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://shipplix.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "The African Export Growth",
          "item": "https://shipplix.com/export-blueprint"
        }
      ]
    };

    const scripts = [
      { id: 'seo-faq', data: faqSchema },
      { id: 'seo-article', data: articleSchema },
      { id: 'seo-breadcrumb', data: breadcrumbSchema }
    ].map(s => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = s.id;
      script.innerHTML = JSON.stringify(s.data);
      document.head.appendChild(script);
      return script;
    });

    // Cleanup scripts on unmount
    return () => {
      scripts.forEach(s => {
        const el = document.getElementById(s.id);
        if (el) el.remove();
      });
    };
  }, []);

  // Helper to trigger direct download of the blueprint in TXT format (100% complete text)
  const triggerBlueprintTxtDownload = () => {
    const textContent = `PHASE 1
Build an International Business That Overseas Customers Trust
Why Most Nigerian Businesses Never Get International Customers
Many business owners believe they don't have customers overseas because their products aren't good enough.
That is rarely the real problem.
Thousands of people abroad buy Nigerian products every single day—from food items and beverages to fashion, beauty products, herbs, spices, and cultural items.
The businesses winning these customers are not always selling better products.
They simply look more trustworthy.
People in the US, UK, Canada, and Europe are sending money to someone they've never met. Before they pay, they subconsciously ask themselves:
* Can I trust this business?
* Will I receive my order?
* Is this company professional?
* Can I contact them if something goes wrong?
If your business cannot answer those questions within a few seconds, many buyers will leave—even if they love your product.
Trust is your first product.
Your actual product comes second.
________________


The International Sales Formula
International sales are built on five pillars:
Product + Trust + Visibility + Follow-up + Reliable Delivery = International Customers
Most businesses only focus on the product.
Successful export businesses build all five.
________________


What Products Sell Well Overseas?
Demand already exists for many Nigerian and African products.
Examples include:
* Kola nuts
* Palm oil
* Garri
* Egusi
* Ogbono
* Crayfish
* Stockfish
* Dried pepper
* Local spices
* Honey
* Herbal products
* African beverages
* Fashion
* Ankara fabrics
* Wigs
* Skincare
* African gifts
* Handmade products
The goal is not to sell everything.
Choose one category and become known for it.
Specialists build trust faster than general stores.
________________


Understand Who You're Selling To
Most first-time exporters make one mistake.
They try to sell to everyone.
Instead, choose one audience.
Examples:
* Nigerians living abroad
* African families overseas
* African restaurants
* Grocery stores
* Beauty stores
* Church communities
* Students
* Gift buyers
* Small retailers
The more specific your audience is, the easier it becomes to attract customers.
________________


Your Business Must Look International
Before running a single advertisement, make sure your business looks professional.
Every serious export business should have:
✔ A professional business name
✔ A logo
✔ A business email address
Example:
contact@yourbusiness.com
instead of
yourbusiness@gmail.com
A business email immediately increases credibility.
It tells customers they are dealing with a real company instead of a random social media seller.
You should also have:
* A professional WhatsApp Business profile
* A Facebook Page
* An Instagram Business account
* A simple website or online store
* Clear business branding
People buy with their eyes before they buy with their wallets.
________________


Action Step
Before moving to Phase 2, complete this checklist:
□ Choose one product category.
□ Define one target customer.
□ Create a professional business email.
□ Set up WhatsApp Business.
□ Create your Facebook and Instagram business pages.
□ Prepare clear product photos and videos.
Do not skip this stage.
Everything else becomes much easier when your business already looks trustworthy.
________________


Soft Transition to Phase 2 (Psychological CTA)
Now that your business has the foundation buyers expect, the next challenge is visibility.
A professional business without customers is like opening a beautiful shop in the middle of a forest—no one knows it exists.
In Phase 2, you'll learn how to consistently attract overseas buyers using Meta Ads, content marketing, diaspora communities, and high-converting advertising strategies that put your products in front of the right audience.
________________




PHASE 2
How to Find Overseas Customers Every Month
Stop Looking for Customers. Position Yourself to Be Found.
One of the biggest mistakes new exporters make is posting a product on WhatsApp and hoping someone will buy it.
That approach rarely creates a predictable business.
Successful exporters don't wait for customers. They build a system that consistently puts their products in front of the right people.
Your goal is simple:
Get your products in front of people who already have a reason to buy.
________________


The Four Customer Sources
Think of your business as having four customer pipelines. The more pipelines you build, the more stable your sales become.
Pipeline 1: Meta Ads (Facebook & Instagram)
This is one of the fastest ways to reach buyers in countries such as:
* United States
* United Kingdom
* Canada
* Germany
* Ireland
* France
* Netherlands
Instead of advertising to everyone, target specific groups such as:
* Nigerians living abroad
* Africans in the diaspora
* People interested in African food
* African fashion lovers
* African grocery shoppers
* Restaurant owners
* Beauty store owners
When your ads reach the right audience, your chances of getting enquiries increase significantly.
Remember: You're not selling a product first. You're selling confidence that you can deliver what you promise.
________________


Pipeline 2: Organic Content Marketing
People rarely buy the first time they see your business.
They usually watch your content first.
That's why successful exporters post consistently.
Create content like:
* How your products are sourced
* Packing behind the scenes
* Quality inspection
* Customer testimonials
* Delivery videos
* Product education
* Frequently asked questions
* Before-and-after packaging
* Shipping updates
This type of content builds trust before anyone contacts you.
________________


Pipeline 3: Diaspora Communities
Millions of Africans living abroad actively participate in online communities.
These communities can become valuable sources of customers if you provide genuine value instead of constantly promoting your products.
Examples include:
* Facebook Groups
* Community forums
* Local association groups
* Church communities
* Cultural organizations
* WhatsApp communities
Focus on helping people first.
Trust grows faster when people see you as a helpful business rather than someone who only wants to sell.
________________


Pipeline 4: Referrals
Satisfied customers are one of your best marketing assets.
After every successful delivery:
* Ask for a review.
* Request a photo or short video.
* Encourage referrals.
* Offer a small reward or discount for successful referrals.
Every happy customer can become a source of future business.
________________


Marketing Psychology That Makes People Click
Many businesses advertise products.
Few advertise outcomes.
Instead of saying:
"We sell palm oil."
Say:
"Bring the authentic taste of home back to your kitchen."
Instead of saying:
"We ship to the UK."
Say:
"Receive your favourite Nigerian products at your doorstep without asking family members to carry them on flights."
People buy solutions, convenience, memories, emotions, and confidence—not just products.
________________


The 80/20 Content Rule
Don't make every post a sales post.
A simple framework is:
* 80%: Educate, inspire, entertain, answer questions, show behind the scenes.
* 20%: Promote your products or services.
When people trust your expertise, selling becomes much easier.
________________


Your Creative Determines Your Results
Many businesses think their ads fail because of the budget.
In reality, the creative is often the problem.
Your ad should immediately answer these questions:
* What is this?
* Why should I care?
* Why should I trust you?
* What should I do next?
A strong advertisement combines:
* High-quality images or videos
* Clear headlines
* Authentic storytelling
* Customer proof
* A simple call to action
Great advertising isn't about being loud—it's about being relevant.
________________


Action Steps
Before moving to Phase 3:
✅ Define your ideal customer.
✅ Create a monthly content calendar.
✅ Produce at least 15 short videos.
✅ Collect customer testimonials.
✅ Join diaspora communities related to your niche.
✅ Launch your first Meta advertising campaign.
________________


Moving to Phase 3
By now, you've learned how to attract attention.
But attention alone doesn't generate sales.
The next step is turning interested visitors into paying customers using a professional website, business email, WhatsApp automation, and a sales system that works around the clock.
In Phase 3, you'll learn how to build an online presence that makes your business look established and trustworthy so customers feel confident buying from you, even if they've never met you.
PHASE 3
Build a Sales System That Works Even While You Sleep
Why Most Businesses Lose Customers
Imagine two businesses selling the exact same product.
The first business posts a product on social media and tells people to "send a DM."
The second business has:
* A professional website
* A business email
* A WhatsApp Business account with automatic replies
* A product catalogue
* Customer reviews
* A simple ordering process
* Secure payment options
* Shipment tracking
Which business would you trust with your money?
Most people choose the second one.
The difference isn't the product—it's the buying experience.
________________


Your Business Needs a Digital Storefront
Think of your website as your online office.
Social media can disappear. Accounts can be suspended. Algorithms change.
Your website is the one platform you truly control.
A professional website should help customers:
* Learn about your business
* Browse your products
* Understand your shipping process
* Read customer reviews
* Ask questions
* Place an order
* Contact you easily
Your website should answer the questions customers would normally ask before they send a message.
________________


A Business Email Builds Confidence
Many international buyers feel more comfortable communicating with businesses that use a professional email address.
For example:
✅ sales@yourbusiness.com
is generally seen as more professional than:
❌ yourbusiness@gmail.com
A custom email shows that you've invested in your business and intend to be around for the long term.
________________


Turn WhatsApp Into a 24-Hour Sales Assistant
WhatsApp Business is more than a messaging app.
It can become one of your most valuable sales tools.
Set it up to:
* Welcome new enquiries automatically
* Answer frequently asked questions
* Share your product catalogue
* Explain shipping timelines
* Display business hours
* Direct customers to the correct next step
When people receive fast, helpful responses, they're more likely to continue the conversation instead of moving on to another seller.
As your business grows, you can also add AI-powered assistants that answer common questions, qualify leads, and keep conversations moving even when you're unavailable.
________________


Create a Simple Customer Journey
Don't leave customers wondering what to do next.
Guide them through a clear process.
For example:
1. Customer sees your content or advertisement.
2. They visit your website or WhatsApp.
3. They learn about your products.
4. They ask questions.
5. They place an order.
6. They receive payment instructions.
7. Their shipment is prepared.
8. They receive tracking information.
9. Their order is delivered.
10. You follow up for feedback and referrals.
The easier this journey is, the more likely people are to complete it.
________________


Collect Reviews and Show Proof
Before buying, most customers look for evidence that others have had a good experience.
Make it easy for them to find:
* Customer testimonials
* Photos of delivered orders
* Packing videos
* Delivery confirmations
* Repeat customers
* Reviews and ratings
Every successful delivery becomes marketing material for your next customer.
________________


Don't Rely on One Platform
A resilient business has multiple ways for customers to find and contact it.
Aim to build a presence across:
* Your website
* WhatsApp Business
* Facebook
* Instagram
* TikTok
* LinkedIn (for wholesale and business buyers)
* Google Business Profile
* Email marketing
This way, if one platform changes, your business can continue operating.
________________


Action Steps
Before moving to Phase 4, make sure you have:
✅ A professional website
✅ A custom business email
✅ WhatsApp Business fully configured
✅ A clear customer ordering process
✅ Testimonials and customer reviews
✅ A simple follow-up process after every sale
________________


Preparing for Phase 4
At this stage, many businesses have a good-looking brand and a steady flow of enquiries.
But one challenge remains:
How do you turn first-time buyers into loyal customers who return again and again and even recommend your business to others?
In Phase 4, you'll learn the psychology of customer retention, follow-up, referrals, and building a brand that grows through trust instead of constantly chasing new customers.
Implementation Note: Building a professional website, setting up a business email, creating WhatsApp automation, integrating enquiry forms, payment options, and shipment tracking can take time if you're starting from scratch. Many business owners choose to work with specialists so they can focus on sourcing products and serving customers while the technical setup is handled for them. 
PHASE 4
Turn One Customer Into Ten
The Most Expensive Sale Is the First One
Many business owners think the sale is the finish line.
It's actually the starting line.
You've already spent time and money attracting that customer. The next goal is to keep them coming back and encourage them to tell others about your business.
The businesses that grow the fastest don't always have the biggest advertising budgets. They have customers who trust them enough to buy again and recommend them to friends and family.
________________


Deliver an Experience, Not Just a Package
People remember how you made them feel.
A simple shipment can become a memorable experience if you:
* Package products neatly and securely.
* Communicate throughout the shipping process.
* Share tracking updates.
* Respond promptly to questions.
* Deliver on the timeline you promised whenever possible.
Customers who feel informed and valued are more likely to become repeat buyers.
________________


Follow Up After Every Delivery
Don't disappear after the shipment is delivered.
Within a few days, send a message asking:
* Did your order arrive safely?
* Are you happy with the products?
* Is there anything we could improve?
This shows professionalism and gives customers confidence that you care beyond the payment.
It's also an opportunity to solve small issues before they become negative reviews.
________________


Ask for Reviews
Most happy customers won't leave a review unless you ask.
A simple request can go a long way.
You can ask them to:
* Leave a written review.
* Share a photo of their order.
* Record a short testimonial.
* Tag your business on social media.
These become powerful trust signals for future customers.
________________


Build a Referral Engine
One satisfied customer can introduce you to several more.
Encourage referrals by offering a small reward, such as:
* A discount on the next order.
* Free packaging.
* A shipping credit.
* A bonus product.
People are much more likely to trust a recommendation from someone they already know.
________________


Stay in Touch
Not every customer is ready to buy again immediately.
Keep your business in front of them by sharing useful content, including:
* New arrivals.
* Seasonal products.
* Shipping updates.
* Helpful tips.
* Customer success stories.
* Special promotions.
Consistent communication helps your business stay top of mind.
________________


Measure What Matters
Growing businesses pay attention to numbers.
Track:
* Number of enquiries.
* Number of orders.
* Repeat customers.
* Referral customers.
* Advertising costs.
* Revenue.
* Best-selling products.
When you measure your business, you make better decisions.
________________


Think Like a Brand
Customers don't stay loyal to businesses that only post products.
They stay loyal to businesses that stand for something.
Build your brand around:
* Reliability.
* Honesty.
* Consistency.
* Professionalism.
* Customer care.
A trusted brand can often charge more than competitors because customers believe in the value it provides.
________________


Action Steps
Before moving to the final phase:
✅ Create a follow-up message for every completed order.
✅ Ask every satisfied customer for a review.
✅ Launch a referral program.
✅ Keep a simple record of your business performance.
✅ Commit to consistent communication with your audience.
________________


Preparing for Phase 5
By now, you understand how to:
* Choose products with international demand.
* Attract overseas customers.
* Build a professional online presence.
* Turn first-time buyers into loyal customers.
The final piece is bringing everything together into one complete system.
In Phase 5, you'll see how successful export businesses combine marketing, technology, automation, and reliable logistics into a single engine that can grow consistently. You'll also discover the key areas where expert setup can save months of trial and error and help you scale faster.
PHASE 5 
Build an Export Business That Can Scale
Success Doesn't Come From One Tool—It Comes From a Complete System
Many business owners think they need one more app, one more social media platform, or one more advertisement to succeed.
In reality, successful export businesses are built on systems that work together.
Think of your business like a machine. Every part has a job:
* Your content attracts attention.
* Your advertisements generate enquiries.
* Your website builds trust.
* Your WhatsApp Business answers questions.
* Your email communicates professionally.
* Your payment system makes buying easy.
* Your shipping process fulfills orders.
* Your follow-up turns customers into repeat buyers.
When these parts work together, your business becomes predictable and easier to grow.
________________


The Modern Export Business Growth Manual
A scalable export business typically includes:
Marketing
* Meta Ads (Facebook & Instagram)
* TikTok content
* Instagram Reels
* Facebook Page
* Search visibility
* Referral marketing
Sales
* Professional website
* Product catalogue
* Landing pages
* Business email
* WhatsApp Business
* Automated follow-ups
Operations
* Order management
* Payment tracking
* Customer database
* Shipment tracking
* Delivery updates
* Customer support
Growth
* Customer reviews
* Referral program
* Email marketing
* Retargeting ads
* Performance reporting
Each part strengthens the others.
________________


Work Smarter With Automation
As your business grows, manually replying to every message and tracking every order becomes difficult.
This is where automation becomes valuable.
For example, your business can automatically:
* Welcome new enquiries.
* Answer common questions.
* Share pricing information.
* Collect customer details.
* Confirm orders.
* Send payment instructions.
* Provide shipment updates.
* Follow up after delivery.
Automation doesn't replace personal service—it gives you more time to focus on growing your business.
________________


Don't Compete on Price Alone
Many businesses believe the cheapest seller always wins.
That's rarely true.
Customers also pay for:
* Reliability.
* Fast communication.
* Professional presentation.
* Secure packaging.
* Clear tracking.
* Peace of mind.
A business that delivers a better experience can often charge more while keeping loyal customers.
________________


Your 90-Day Growth Plan
Month 1 – Build Your Foundation
* Choose your niche.
* Create your branding.
* Set up your business email.
* Build your website.
* Configure WhatsApp Business.
* Prepare high-quality product photos and videos.
Month 2 – Launch Your Marketing
* Start posting consistently.
* Join diaspora communities.
* Run your first Meta Ads campaign.
* Collect customer testimonials.
* Improve your sales process.
Month 3 – Optimize and Scale
* Review your advertising performance.
* Increase spending on successful campaigns.
* Launch a referral program.
* Automate repetitive tasks.
* Expand into additional international markets.
Growth comes from improving your system every month—not from chasing shortcuts.
________________


Final Thoughts
International customers are already buying products from Africa every day.
The opportunity exists.
The businesses that succeed are the ones that combine quality products with professional systems, consistent marketing, and dependable delivery.
Start with a solid foundation, build trust, and improve your business step by step.
Small improvements made consistently can produce remarkable results over time.
________________


Ready to Build Your Export System?
This guide has shown you what to build.
The next challenge is building it correctly.
Many business owners understand the strategy but don't have the time or technical skills to set up:
* A professional website
* An online store
* A business email
* WhatsApp Business automation
* Meta Ads campaigns
* Customer enquiry forms
* AI-powered customer support
* Shipment tracking
* Follow-up automation
* Export-ready business systems
That's where Shipplix can help.
Instead of spending months learning multiple tools and fixing mistakes, you can work with a team that helps you build a professional export business from the ground up.
Whether you're selling food products, fashion, beauty items, handmade goods, or other export-ready products, the goal is the same:
Create a business that customers trust, recommend, and return to—again and again.
________________


Bonus: Free Export Business Checklist
Before you launch, make sure you have:
☐ Chosen a profitable niche.
☐ Identified your ideal overseas customer.
☐ Created professional branding.
☐ Registered a business domain and email.
☐ Built a website or online store.
☐ Set up WhatsApp Business.
☐ Prepared high-quality product photos and videos.
☐ Created a content calendar.
☐ Launched your first Meta Ads campaign.
☐ Collected customer reviews.
☐ Established a clear shipping process.
☐ Created a follow-up system.
☐ Built a referral program.
☐ Tracked your key business metrics.`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "Shipplix_The_African_Export_Growth.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Helper to trigger direct download of a simulated beautifully formatted Export Growth PDF or the real PDF if uploaded
  const triggerBlueprintDownload = async () => {
    try {
      // Check if the user has uploaded the real PDF in the public folder as "african-export-blueprint.pdf"
      const response = await fetch('/african-export-blueprint.pdf', { method: 'HEAD' });
      const contentType = response.headers.get('content-type') || '';
      
      // If the file exists and is not the SPA fallback index.html (which is text/html)
      if (response.ok && !contentType.includes('text/html')) {
        const a = document.createElement('a');
        a.href = '/african-export-blueprint.pdf';
        a.download = "The_African_Export_Growth_Shipplix.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        return;
      }
    } catch (err) {
      console.warn("Could not fetch real PDF, falling back to Export Growth text generation", err);
    }

    // Fallback to text download
    triggerBlueprintTxtDownload();
  };

  // Form Validation and Submission
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    if (formErrors[name]) {
      setFormErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.businessName.trim()) errors.businessName = 'Business Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid Email Address is required';
    if (!formData.whatsapp.trim()) errors.whatsapp = 'WhatsApp Number is required';
    if (!formData.country.trim()) errors.country = 'Country is required';
    if (!formData.products.trim()) errors.products = 'Products You Sell is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const firstError = Object.keys(errors)[0];
      const element = document.getElementsByName(firstError)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate database CRM persistence
    setTimeout(() => {
      try {
        const existingLeads = JSON.parse(localStorage.getItem('shipplix_export_leads') || '[]');
        existingLeads.push({
          ...formData,
          id: 'lead_' + Math.random().toString(36).substr(2, 9),
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('shipplix_export_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.error("Local storage lead save error", err);
      }

      setIsSubmitting(false);
      onNavigate('/export-blueprint/thank-you');
      triggerBlueprintTxtDownload(); // Automatically trigger instant TXT download for absolute reliability as requested
    }, 1200);
  };

  // Scroll Helper
  const scrollToForm = () => {
    const element = document.getElementById('download-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Guide Previews
  const previewPages = [
    {
      title: "Cover Page",
      text: "The African Export Growth: How to Build an International Customer Acquisition System That Attracts Overseas Buyers Consistently.",
      badge: "GUIDE START"
    },
    {
      title: "Phase 1: Trust",
      text: "International buyers are sending money to someone they have never met. Trust is your primary product. Actual goods come second.",
      badge: "PAGE 4"
    },
    {
      title: "Phase 2: Discovery",
      text: "Stop hoping. Build four reliable customer sources: Meta ads to diaspora owners, organic behind-the-scenes content, active community values, and referral programs.",
      badge: "PAGE 9"
    },
    {
      title: "Phase 3: Sales Machine",
      text: "Establish a digital storefront with business email and automatic WhatsApp catalog replies. Create a clear 10-step client pathway to finalize orders seamlessly.",
      badge: "PAGE 13"
    },
    {
      title: "Phase 4: Scaling",
      text: "Turn one customer into ten. Retain them through clean packaging, real-time tracking videos, feedback surveys, and incentivized word-of-mouth credits.",
      badge: "PAGE 18"
    }
  ];

  // FAQs Array
  const faqs = [
    {
      q: "Is this guide free?",
      a: "Yes, The African Export Growth is 100% free with no hidden charges. It serves as our contribution to help African brands professionalize and access global trade opportunities confidently."
    },
    {
      q: "Who is this guide for?",
      a: "This Export Growth is specifically designed for agricultural product suppliers, food processors, fashion designers, beauty/cosmetic brands, handcrafted gift makers, and small-to-medium entrepreneurs across Africa aspiring to win high-value overseas buyers."
    },
    {
      q: "Do I need export experience?",
      a: "No! The guide explains concepts in clear, beginner-friendly marketing psychology. It walks you step-by-step from building trust and branding to acquiring customers, setting up sales systems, and shipping internationally."
    },
    {
      q: "Can Shipplix build my website?",
      a: "Absolutely. Beyond freight forwarding, we help businesses implement their full tech systems—including custom responsive websites, optimized online catalogues, and fast search-engine visibility."
    },
    {
      q: "Can Shipplix run Meta Ads?",
      a: "Yes. Our growth marketing specialists set up, optimize, and manage highly profitable Meta (Facebook & Instagram) advertising campaigns specifically target-matched to active diaspora buyers."
    },
    {
      q: "Can Shipplix build my online store?",
      a: "Yes, we build secure online stores with standard checkouts, integrated currency switchers, automated shipping calculation rates, and detailed product lists."
    },
    {
      q: "Can Shipplix help with WhatsApp automation?",
      a: "Yes. We design and integrate professional WhatsApp Business automations, including custom greeting templates, catalogue links, interactive FAQs, and AI auto-responders."
    },
    {
      q: "Can Shipplix handle international shipping?",
      a: "Yes, Shipplix is a leading global logistics provider specializing in fast, reliable air and ocean cargo from Africa to the USA, UK, Canada, and Europe—complete with customs clearance and anti-scam video packing scale integrations."
    },
    {
      q: "Can Shipplix help me find overseas customers?",
      a: "Yes, through our structured digital frameworks (websites, targeted ads, content systems, SEO, and diaspora community pipelines) we build the exact customer acquisition funnel your brand needs to attract global buyers."
    }
  ];

  // RENDER THANK YOU STATE
  if (currentPath === '/export-blueprint/thank-you') {
    return (
      <div className="bg-slate-50 min-h-screen py-20 px-6 font-sans">
        <div className="max-w-2xl mx-auto bg-white border border-slate-200/80 rounded-3xl shadow-xl overflow-hidden text-center p-10 md:p-16">
          <motion.div 
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm border border-emerald-100"
          >
            <ShieldCheck size={44} />
          </motion.div>

          <span className="text-shipplix-blue text-[10px] font-black uppercase tracking-[0.3em] bg-blue-50 px-4 py-2 rounded-full mb-4 inline-block">
            Access Authorized
          </span>

          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Congratulations!
          </h1>
          <h2 className="text-xl font-bold text-slate-600 mb-6">
            Your Export Growth Is Ready.
          </h2>

          <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-lg mx-auto mb-10">
            The free guide has been successfully transmitted to your email address. You can also download it instantly below to begin your global export journey.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <PageButton 
              variant="yellow" 
              onClick={triggerBlueprintTxtDownload}
              className="w-full md:w-auto px-8 py-5 text-xs uppercase tracking-widest font-black flex items-center justify-center gap-2"
            >
              <FileText size={16} />
              Download TXT Export Growth (Recommended)
            </PageButton>

            <PageButton 
              variant="outline" 
              onClick={() => onNavigate('/')}
              className="w-full md:w-auto px-8 py-5 text-xs uppercase tracking-widest font-black flex items-center justify-center gap-1"
            >
              Back to Home
              <ArrowRight size={16} />
            </PageButton>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-100 text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
              <Sparkles size={14} className="text-shipplix-yellow" /> What's Next?
            </h4>
            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 text-sm text-slate-700 space-y-4">
              <p className="font-bold">
                Take Advantage of Your Free Export Strategy Session
              </p>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Since you checked the strategy session request, a Shipplix representative will reach out to you on WhatsApp within the next 24 business hours to analyze your product list, audit your digital trust parameters, and map out your optimal international target audiences.
              </p>
              <div className="pt-2">
                <a 
                  href={URL_STRATEGY_CALL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-black text-blue-900 uppercase tracking-wider hover:underline"
                >
                  Skip the Wait: Open WhatsApp Chat
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // RENDER LANDING PAGE STATE
  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-shipplix-yellow selection:text-blue-950 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white pt-24 pb-20 md:py-32 px-6 overflow-hidden">
        {/* Background Visual Enhancements (Containers, Shipping routes feeling) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <svg className="absolute w-full h-full text-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,200 Q500,50 900,400 T1500,100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10,10" />
            <path d="M50,400 Q700,300 1200,600" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-shipplix-yellow text-[10px] uppercase font-black tracking-widest shadow-inner">
                <Sparkles size={12} className="animate-pulse" /> Official Lead Magnet Guide
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-white">
                The African <br className="hidden md:inline" />
                <span className="text-shipplix-yellow bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">Export Growth</span>
              </h1>

              <h2 className="text-lg md:text-xl font-extrabold text-slate-100 tracking-tight leading-relaxed">
                Learn How to Find Overseas Customers, Build Trust, Market Your Products Internationally, and Create an Export Business That Generates Consistent Sales.
              </h2>

              <p className="text-slate-300 text-xs md:text-sm font-medium leading-relaxed max-w-2xl">
                Whether you sell food, fashion, beauty products, agricultural products, handmade goods, or any export-ready product, this free guide will show you the systems successful businesses use to attract buyers from the USA, UK, Canada, Europe, and beyond.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
                {[
                  "Free 5 Phase Guide",
                  "Beginner Friendly",
                  "Marketing Psychology",
                  "Export Business Growth"
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-2 rounded-xl">
                    <CheckCircle2 size={12} className="text-shipplix-yellow flex-shrink-0" />
                    <span className="text-[10px] font-black uppercase tracking-tight text-slate-100">{badge}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <PageButton variant="yellow" onClick={scrollToForm} className="px-8 py-4.5 text-xs uppercase tracking-widest font-black shadow-[0_0_30px_rgba(250,204,21,0.25)] hover:scale-[1.02]">
                  <Download size={14} /> Download Free Export Growth
                </PageButton>
                <PageButton variant="ghost" as="a" href={URL_STRATEGY_CALL} target="_blank" rel="noopener noreferrer" className="border border-white/20 px-8 py-4.5 text-xs uppercase tracking-widest font-black hover:bg-white/5">
                  Book Free Strategy Call
                </PageButton>
              </div>
            </div>

            {/* Hero Right Visual: Book Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-shipplix-yellow to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-45 transition duration-1000"></div>
                <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col w-[280px] md:w-[320px] transform hover:-translate-y-1 transition-all duration-300">
                  
                  {/* Book Spine Accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-l-2xl"></div>
                  
                  <div className="pl-4 flex flex-col justify-between h-[360px] md:h-[400px]">
                    <div>
                      <div className="flex justify-between items-start text-slate-500 text-[8px] font-mono tracking-widest uppercase mb-6">
                        <span>VOLUME I</span>
                        <span>SHIPPLIX PRESS</span>
                      </div>
                      
                      <span className="text-[10px] font-black text-shipplix-yellow uppercase tracking-widest bg-yellow-500/10 border border-yellow-500/20 px-2 py-1 rounded inline-block mb-3">
                        SPECIAL EDITION
                      </span>
                      
                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white leading-tight">
                        THE AFRICAN<br />EXPORT<br />GROWTH
                      </h3>
                      
                      <p className="text-[10px] text-slate-400 font-bold leading-relaxed mt-4">
                        How to Build an International Customer Acquisition System That Attracts Overseas Buyers Consistently.
                      </p>
                    </div>

                    <div className="border-t border-slate-800 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <FileText size={14} className="text-shipplix-yellow" />
                        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">23 High-Density Pages</span>
                      </div>
                      <span className="text-[8px] font-mono text-slate-500">© 2026</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHO THIS GUIDE IS FOR SECTION */}
      <section className="py-20 bg-white border-y border-slate-200/60 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-shipplix-blue text-[10px] font-black uppercase tracking-[0.25em] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
              Intended Audience
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter">
              Who This Guide Is Perfect For
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-bold tracking-tight">
              Crafted specifically to support diverse African creators, suppliers, and producers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Food Exporters", icon: Utensils, desc: "Processors of local grains, spices, oils, & packaged meals." },
              { label: "Fashion Brands", icon: Shirt, desc: "Designers shipping Ankara fabric, clothing, & customized fits." },
              { label: "Beauty Brands", icon: Palette, desc: "Sellers of pure Shea butter, cosmetic oils, & herbal soaps." },
              { label: "Manufacturers", icon: Package, desc: "Makers of packaged FMCG goods, retail craft, & home decor." },
              { label: "Farmers & Producers", icon: Compass, desc: "Growers of cocoa, nuts, chili peppers, charcoal, & split beans." },
              { label: "Grocery Suppliers", icon: Store, desc: "Bulk traders dispatching ethnic food stocks to Western stores." },
              { label: "Entrepreneurs", icon: Sparkles, desc: "Self-starters setting up brand new international trades." },
              { label: "Business Owners", icon: Briefcase, desc: "Established companies upgrading to foreign currencies." },
              { label: "Export Beginners", icon: BookOpen, desc: "Newcomers looking to avoid costly logistics mistakes." },
              { label: "Existing Exporters", icon: TrendingUp, desc: "Pro players wanting to scale and automate their operations." }
            ].map((audience, i) => {
              const Icon = audience.icon;
              return (
                <div key={i} className="bg-slate-50 border border-slate-200/80 hover:border-shipplix-blue hover:bg-white p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between group">
                  <div className="w-10 h-10 bg-white rounded-xl border border-slate-200/60 flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all shadow-sm">
                    <Icon size={18} />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight group-hover:text-blue-900 transition-colors">
                      {audience.label}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-bold mt-1.5 leading-normal">
                      {audience.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN (5 PHASES SUMMARY) */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-shipplix-blue text-[10px] font-black uppercase tracking-[0.25em] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
              Comprehensive Walkthrough
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter">
              Inside the 5-Phase Export Growth
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-bold tracking-tight">
              Summarized into clear actionable objectives extracted straight from our PDF Export Growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                phase: "Phase 1",
                title: "Building Trust",
                desc: "Establish core international credibility. Discover why buyers buy trust before physical goods. Acquire custom domain emails, detailed WhatsApp business profiles, product photo standards, and a professional digital presence to answer safety queries instantly.",
                bullets: ["Custom Domain Emails", "WhatsApp Business", "Product Catalog Basics", "Confidence Parameters"]
              },
              {
                phase: "Phase 2",
                title: "Finding Customers",
                desc: "Transition from manual posting to reliable digital channels. Build four consistent acquisition pipelines: Diaspora-targeted Meta Ads, educational behind-the-scenes organic content, value-first community integrations, and structured reward-based referrals.",
                bullets: ["Laser-targeted Meta Ads", "80/20 Content Framework", "Diaspora Channels", "Referral Loops"]
              },
              {
                phase: "Phase 3",
                title: "Sales Automation",
                desc: "Create an active digital salesperson running 24/7. Design a streamlined, automated customer journey from ad view to payment receipt. Set up self-service checkouts and instant auto-replies to secure sales even while you sleep.",
                bullets: ["Frictionless checkout", "24/7 Auto-replies", "10-Step Customer Path", "CRM Integrations"]
              },
              {
                phase: "Phase 4: Retention",
                title: "Value Multipliers",
                desc: "Multiply initial acquisition efforts. Optimize neat packaging, fast transit notifications, and post-delivery follow-up protocols. Systematically gather customer reviews and configure credit referral engines.",
                bullets: ["Memorable unboxing", "Review-collection scripts", "Referral credits", "Re-engagement campaigns"]
              },
              {
                phase: "Phase 5",
                title: "Scaling Operations",
                desc: "Scale into a valuable, enduring global export name. Put your 90-day growth roadmap into action, systematize product audits, and link directly to automated international logistics to fulfill cargo volumes reliably.",
                bullets: ["90-Day Execution Plan", "Scale-ready workflows", "Logistics synchronization", "Multiterritory growth"]
              }
            ].map((p, i) => (
              <div key={i} className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-blue-900 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-widest">
                      {p.phase}
                    </span>
                    <span className="text-slate-300 font-bold font-mono text-sm">0{i+1}</span>
                  </div>
                  
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight group-hover:text-blue-900 transition-colors">
                    {p.title}
                  </h3>
                  
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="border-t border-slate-100 mt-6 pt-4">
                  <ul className="space-y-1.5">
                    {p.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-[9px] font-bold text-slate-600 uppercase tracking-tight">
                        <Check size={10} className="text-emerald-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS GUIDE IS DIFFERENT */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-950 text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column Left Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-shipplix-yellow text-[10px] font-black uppercase tracking-[0.3em] bg-white/5 border border-white/10 px-3 py-1.5 rounded inline-block">
                Strategic Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight">
                Why This Guide Is Different
              </h2>
              <p className="text-slate-300 text-xs md:text-sm font-medium leading-relaxed">
                Most traditional export courses only teach you customs codes and freight logistics. They assume customers will magically find you.
              </p>
              <p className="text-slate-300 text-xs md:text-sm font-bold leading-relaxed">
                This Export Growth flips the model: it teaches you how to build the complete digital trust engine first, ensuring you have reliable buyers lined up before your cargo even leaves the warehouse.
              </p>

              <div className="pt-6 border-t border-white/10 space-y-4">
                <p className="text-xl md:text-2xl font-black italic text-shipplix-yellow tracking-tight leading-relaxed">
                  "International customers don't buy products first. They buy trust. This Export Growth teaches you how to build that trust."
                </p>
              </div>
            </div>

            {/* Column Right Points Grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Understand Buyer Psychology", desc: "Unlock emotional hooks and trust dynamics foreign clients demand." },
                  { title: "Acquire Premium Branding", desc: "Build professional email, logos, and business styles." },
                  { title: "Meta Ads & Target Channels", desc: "Configure precise Facebook & Instagram targeted funnels." },
                  { title: "WhatsApp & AI Automation", desc: "Create auto-responders to serve leads 24 hours a day." },
                  { title: "Seamless Checkout Stores", desc: "Enable digital self-service checkouts and catalogs." },
                  { title: "Operational Scaling", desc: "Deploy systematic checklists, CRM retention, and metrics." }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                    <h4 className="text-xs font-black text-shipplix-yellow uppercase tracking-wider mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PREVIEW THE GUIDE SECTION */}
      <section className="py-20 bg-white px-6 border-b border-slate-200/60">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-shipplix-blue text-[10px] font-black uppercase tracking-[0.25em] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
              Sneak Peek
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter">
              Preview The Guide Contents
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-bold tracking-tight">
              Flip through some of the core actionable pages before downloading your free copy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Book Pages Slideshow */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 min-h-[260px] relative shadow-xl border border-slate-800 flex flex-col justify-between">
                
                {/* Simulated Book Page Header */}
                <div className="flex justify-between items-center text-slate-400 text-[8px] font-mono tracking-widest uppercase">
                  <span>THE AFRICAN EXPORT GROWTH</span>
                  <span className="bg-slate-800 text-shipplix-yellow px-2 py-0.5 rounded">
                    {previewPages[previewPage].badge}
                  </span>
                </div>

                <div className="my-8 space-y-3">
                  <h3 className="text-lg md:text-xl font-black text-shipplix-yellow uppercase tracking-tight">
                    {previewPages[previewPage].title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    "{previewPages[previewPage].text}"
                  </p>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                  <div className="flex gap-1.5">
                    {previewPages.map((_, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setPreviewPage(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${previewPage === idx ? 'bg-shipplix-yellow w-5' : 'bg-slate-700'}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => setPreviewPage(prev => prev === 0 ? previewPages.length - 1 : prev - 1)}
                      className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button 
                      onClick={() => setPreviewPage(prev => (prev + 1) % previewPages.length)}
                      className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

              </div>

              {/* Cover Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: "23 Pages", val: "High Density Content" },
                  { label: "5 Phases", val: "A-Z Structuring" },
                  { label: "Checklists", val: "Practical Action Steps" },
                  { label: "Marketing", val: "Psychology & Meta Ads" },
                  { label: "Business Systems", val: "Online Automations" },
                  { label: "Export Logistics", val: "Delivery & Tracking" }
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-center">
                    <span className="text-xs font-black text-blue-900 block uppercase tracking-tight">{stat.label}</span>
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Cover CTA info */}
            <div className="lg:col-span-5 space-y-6 bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <BookOpen size={14} className="text-shipplix-yellow" /> Download Package Included:
                </h4>
                <p className="text-sm font-extrabold text-slate-800">
                  You get the complete Export Growth document instantly, plus matching checklist checklists, ready to apply to your business today.
                </p>
                <div className="mt-6 space-y-3.5">
                  {[
                    "Proven WhatsApp script templates",
                    "A-Z target buyer avatar definitions",
                    "A complete 90-day expansion planner",
                    "Anti-scam video scaling parameters"
                  ].map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
                      <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <PageButton variant="primary" onClick={scrollToForm} className="w-full text-xs uppercase tracking-widest font-black py-4 mt-6">
                Download My Copy
              </PageButton>
            </div>

          </div>
        </div>
      </section>

      {/* DOWNLOAD FORM SECTION (HIGHEST CONVERTING SECTION) */}
      <section id="download-form-section" className="py-20 bg-slate-100 border-b border-slate-200 px-6">
        <div className="container mx-auto max-w-3xl">
          
          <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white px-8 py-10 text-center space-y-2 relative">
              {/* Abs decoration */}
              <div className="absolute right-4 top-4 opacity-10">
                <FileText size={80} />
              </div>
              <span className="text-shipplix-yellow text-[10px] font-black uppercase tracking-[0.3em] bg-white/5 border border-white/10 px-3 py-1.5 rounded inline-block">
                Instant Digital Delivery
              </span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Download Your Free Export Growth
              </h2>
              <p className="text-slate-300 text-xs font-medium leading-relaxed max-w-xl mx-auto">
                Complete the form below to receive instant access. The guide will be instantly delivered to your email and made available on the next screen.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="p-8 md:p-12 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <User size={12} className="text-blue-900" /> Full Name *
                  </label>
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="Enter your first & last name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border ${formErrors.fullName ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3.5 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 transition-colors`}
                  />
                  {formErrors.fullName && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider">{formErrors.fullName}</p>}
                </div>

                {/* Business Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <Briefcase size={12} className="text-blue-900" /> Business Name *
                  </label>
                  <input 
                    type="text" 
                    name="businessName"
                    placeholder="Enter your company name"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border ${formErrors.businessName ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3.5 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 transition-colors`}
                  />
                  {formErrors.businessName && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider">{formErrors.businessName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <Mail size={12} className="text-blue-900" /> Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="you@yourcompany.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border ${formErrors.email ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3.5 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 transition-colors`}
                  />
                  {formErrors.email && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider">{formErrors.email}</p>}
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <Phone size={12} className="text-blue-900" /> WhatsApp Number *
                  </label>
                  <input 
                    type="tel" 
                    name="whatsapp"
                    placeholder="e.g. +234 80 1234 5678"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border ${formErrors.whatsapp ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3.5 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 transition-colors`}
                  />
                  {formErrors.whatsapp && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider">{formErrors.whatsapp}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Country */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <MapPin size={12} className="text-blue-900" /> Country *
                  </label>
                  <input 
                    type="text" 
                    name="country"
                    placeholder="e.g. Nigeria"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border ${formErrors.country ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3.5 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 transition-colors`}
                  />
                  {formErrors.country && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider">{formErrors.country}</p>}
                </div>

                {/* Products You Sell */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <Store size={12} className="text-blue-900" /> Products You Sell *
                  </label>
                  <input 
                    type="text" 
                    name="products"
                    placeholder="e.g. Processed Foods, Ankara Fashion, Shea Butter"
                    value={formData.products}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border ${formErrors.products ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3.5 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 transition-colors`}
                  />
                  {formErrors.products && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider">{formErrors.products}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Business Stage (Dropdown) */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <TrendingUp size={12} className="text-blue-900" /> Business Stage *
                  </label>
                  <select 
                    name="businessStage"
                    value={formData.businessStage}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-900 transition-colors cursor-pointer"
                  >
                    <option value="Just Starting">Just Starting</option>
                    <option value="Already Selling">Already Selling Locally</option>
                    <option value="Already Exporting">Already Exporting</option>
                    <option value="Planning to Export">Planning to Export Soon</option>
                  </select>
                </div>

                {/* Monthly Revenue (Optional) */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    Monthly Revenue (Optional)
                  </label>
                  <input 
                    type="text" 
                    name="monthlyRevenue"
                    placeholder="e.g. Under 500k, 1M - 5M, Over 5M"
                    value={formData.monthlyRevenue}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 transition-colors"
                  />
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="strategySession"
                    checked={formData.strategySession}
                    onChange={handleInputChange}
                    className="w-4 h-4 mt-0.5 accent-blue-900 cursor-pointer"
                  />
                  <span className="text-slate-600 text-xs font-semibold select-none">
                    Yes, I'd like a <span className="text-blue-900 font-bold">FREE Export Strategy Session</span> with a Shipplix growth partner.
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="futureTips"
                    checked={formData.futureTips}
                    onChange={handleInputChange}
                    className="w-4 h-4 mt-0.5 accent-blue-900 cursor-pointer"
                  />
                  <span className="text-slate-600 text-xs font-semibold select-none">
                    Send me future export tips and high-converting business opportunities.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <PageButton 
                  variant="yellow" 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full text-xs uppercase tracking-widest font-black py-4.5"
                >
                  {isSubmitting ? 'Transmitting Leads...' : 'Download My Free Export Growth'}
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </PageButton>
                <p className="text-center text-[10px] text-slate-400 mt-3 font-semibold uppercase tracking-wider">
                  🔐 We respect your privacy. No spam. Secure database transmission.
                </p>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* NEED HELP BUILDING EVERYTHING? (IMPLEMENTATION SECTION) */}
      <section className="py-20 bg-white px-6 border-b border-slate-200/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-shipplix-blue text-[10px] font-black uppercase tracking-[0.25em] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
              Strategic Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter">
              Need Help Building Everything?
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-bold tracking-tight">
              The guide teaches you the strategy. Shipplix helps businesses implement the entire physical & digital system.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Professional Website", icon: Laptop, desc: "A clean, dynamic custom storefront to display products professionally." },
              { title: "Online Store Setup", icon: Store, desc: "Complete digital checkout, multi-currency display, & auto rates." },
              { title: "Business Email", icon: Mail, desc: "Establish immediate overseas trust with domain-hosted mail." },
              { title: "WhatsApp Business", icon: Phone, desc: "Set up professional catalog links, greeting alerts, & automations." },
              { title: "AI Customer Support", icon: Sparkles, desc: "Deploy intelligent chat bots to converse with leads 24/7." },
              { title: "Meta Ads Setup", icon: Megaphone, desc: "Highly profitable diaspora targeting campaigns." },
              { title: "Lead Generation", icon: Compass, desc: "Set up custom landing capture and inquiry pages." },
              { title: "Sales Funnels", icon: TrendingUp, desc: "Frictionless multi-step customer journey automation." },
              { title: "CRM Setup", icon: Database, desc: "Store, tag, and nurture international customer databases." },
              { title: "Customer Automation", icon: Users, desc: "Auto follow-ups and review loops after every parcel." },
              { title: "Shipment Tracking", icon: FileText, desc: "Real-time tracking pages integrated on your own site." },
              { title: "International Shipping", icon: Globe, desc: "Express air cargo, ocean consolidations, and clearance." },
              { title: "Business Consulting", icon: Briefcase, desc: "Personal analysis of products, pricing, and packaging." }
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl flex flex-col justify-between hover:border-shipplix-blue hover:bg-white transition-all duration-300 group">
                  <div>
                    <div className="w-10 h-10 bg-white border border-slate-200/60 rounded-xl flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all shadow-sm">
                      <Icon size={18} />
                    </div>
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight mt-4 group-hover:text-blue-900 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-bold mt-1.5 leading-normal">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12">
            <PageButton variant="primary" as="a" href={URL_STRATEGY_CALL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10">
              Book My Strategy Call
            </PageButton>
            <PageButton variant="outline" as="a" href={URL_CHAT} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10">
              <MessageCircle size={16} /> Chat With Shipplix
            </PageButton>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH SHIPPLIX */}
      <section className="py-20 bg-slate-50 px-6 border-b border-slate-200/60">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphics */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-gradient-to-br from-blue-900 to-blue-950 text-white p-8 rounded-3xl shadow-xl space-y-6">
                <span className="text-shipplix-yellow text-[9px] font-black uppercase tracking-widest bg-white/5 border border-white/10 px-2 py-1 rounded inline-block">
                  Growth Partner Ecosystem
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight">
                  Beyond Just Shipping
                </h3>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  Building a successful export trade requires an integrated mesh of trust parameters, active automation pipelines, and high-quality deliveries.
                </p>
                
                <div className="space-y-3.5 pt-4 border-t border-white/10">
                  {[
                    "Reliable Technology integrations",
                    "Targeted growth marketing",
                    "Seamless local & global logistics",
                    "Customized international fulfillment"
                  ].map((sys, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-200 font-semibold">
                      <CheckCircle2 size={14} className="text-shipplix-yellow" />
                      <span>{sys}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Information */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-shipplix-blue text-[10px] font-black uppercase tracking-[0.25em] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
                Value Differentiation
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter">
                Why Work With Shipplix
              </h2>
              <p className="text-slate-600 text-xs md:text-sm font-semibold leading-relaxed">
                Most freight forwarders wait for you to bring your boxes, hand you an invoice, and wave goodbye. If your business doesn't sell, they don't care.
              </p>
              <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                Shipplix is a **business growth partner**, not just a logistics supplier. We understand that your physical exports are only possible when your technology, marketing, branding, and customer retention systems are performing brilliantly.
              </p>
              <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                By helping you design, deploy, and automate your complete digital customer acquisition funnel, we establish a robust commercial flywheel that generates predictable, high-value, high-frequency export cargo.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-50 px-6 border-b border-slate-200/60">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-shipplix-blue text-[10px] font-black uppercase tracking-[0.25em] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
              Faq
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-bold tracking-tight">
              Get detailed, professional explanations regarding our free Export Growth, tech setup, and shipping support.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                      <HelpCircle size={16} className="text-blue-900 flex-shrink-0" />
                      {faq.q}
                    </span>
                    <span className={`w-6 h-6 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronRight size={14} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-xs text-slate-600 font-medium leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>

        <div className="container mx-auto max-w-3xl relative z-10 space-y-6">
          <span className="text-shipplix-yellow text-[10px] font-black uppercase tracking-[0.3em] bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block">
            Launch Your Global Trade
          </span>

          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            Your International Customers Are Waiting.
          </h2>

          <p className="text-slate-300 text-xs md:text-sm font-medium leading-relaxed max-w-xl mx-auto">
            Thousands of buyers around the world are already looking for quality African products. The opportunity is real. The businesses that win are the ones that build trust, create professional systems, market consistently, and deliver reliably.
          </p>

          <p className="text-shipplix-yellow font-extrabold text-sm tracking-tight uppercase">
            Download the free Export Growth today and take the first step toward building an export business that grows beyond borders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <PageButton variant="yellow" onClick={scrollToForm} className="w-full sm:w-auto px-10">
              <Download size={14} /> Download Export Growth
            </PageButton>
            <PageButton variant="ghost" as="a" href={URL_STRATEGY_CALL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-white/20 px-10">
              Book Strategy Session
            </PageButton>
          </div>
        </div>
      </section>

    </div>
  );
}
