export interface ProductSize {
  id: string;
  name: string;
  volume: string;
  mrp: number;
  image: string;
  badge?: string;
  description: string;
  bestFor: string;
}

export interface RetailPriceRow {
  id: string;
  size: string;
  basicPrice: number;
  gstAmount: number;
  retailerLanding: number;
  mrp: number;
}

export interface RetailPartner {
  name: string;
  logo: string;
  category: "supermarket" | "wholesale" | "online";
  description: string;
  url?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  avatarText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Product & Safety" | "Usage & Dilution" | "Orders & Dealership";
}

export const BRAND_CONFIG = {
  // Brand Identity
  name: "BIRMAL",
  fullName: "Birmal Concentrated Floor Cleaner",
  companyLegalName: "BIRRUMALAE PHARMA PRIVATE LIMITED",
  tagline: "Strong Concentrated Cleaner — Pine Fresh Formula",
  slogan: "Freshness In Every Clean",
  subheading:
    "Concentrated pine floor cleaner made in Hyderabad for everyday Indian homes. Two caps in a bucket lift grease, grime, and odours without leaving sticky residue or dulling marble.",

  // Corporate Identifiers & Standards
  cin: "U21001TS2026PTC215622",
  pan: "AAOCB7123Q",
  pinCode: "500076",
  motto: "Quality • Trust • Care",
  manufacturingPromise: "Manufacturers of Quality Cleaning & Hygiene Products | Made In India",

  // Contact Information
  contacts: {
    primaryPhone: "+91 6300670550",
    secondaryPhone: "+91 9912359793",
    whatsappNumber: "+91 6300670550",
    email: "info@birmal.in",
    corporateEmail: "birrumalaepharma@gmail.com",
    address: {
      line1: "Plot No: 49, 50 & 51, Shed No. 3",
      line2: "Bramahapuri Colony, Mallapur",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500076",
      country: "India",
      full: "Plot No: 49, 50 & 51, Shed No. 3, Bramahapuri Colony, Mallapur, Hyderabad, Telangana State, India - 500076",
    },
    hours: "Mon - Sat: 9:00 AM - 7:00 PM IST",
  },

  // E-commerce Marketplace Links
  marketplace: {
    amazonUrl: "https://www.amazon.in",
    flipkartUrl: "https://www.flipkart.com",
    whatsappOrderUrl:
      "https://wa.me/916300670550?text=Hi%2C%20I%20would%20like%20to%20order%20BIRMAL%20Floor%20Cleaner.",
    dealershipInquiryUrl: "/contact#dealership",
  },

  // Social Links
  social: {
    facebook: "https://facebook.com/birmalcleaner",
    instagram: "https://instagram.com/birmalcleaner",
    twitter: "https://twitter.com/birmalcleaner",
    linkedin: "https://linkedin.com/company/birrumalae-pharma",
    youtube: "https://youtube.com/@birmalcleaner",
  },

  // Key Product Specifications & USPs
  productStats: {
    dilutionPower: "1L makes 100+ Litres",
    germProtection: "99.9% Germ Protection",
    concentration: "2X Tough Stain Removal",
    fragrance: "Natural Pine Freshness",
    surfaceSafety: "pH Balanced — Safe on Marble & Granite",
  },

  // Official Retailer Price List (w.e.f. 09-Nov-2026)
  retailPriceList: {
    effectiveDate: "09-Nov-2026",
    gstRate: "18%",
    retailerDiscount: "20% on MRP",
    termsNote: "Prices are GST inclusive and subject to revision without prior notice.",
    rows: [
      {
        id: "200ml",
        size: "200 ml",
        basicPrice: 47.46,
        gstAmount: 8.54,
        retailerLanding: 56.0,
        mrp: 70.0,
      },
      {
        id: "500ml",
        size: "500 ml",
        basicPrice: 115.25,
        gstAmount: 20.75,
        retailerLanding: 136.0,
        mrp: 170.0,
      },
      {
        id: "1l",
        size: "1 Litre",
        basicPrice: 223.73,
        gstAmount: 40.27,
        retailerLanding: 264.0,
        mrp: 330.0,
      },
    ] as RetailPriceRow[],
  },

  // Products & SKUs
  products: [
    {
      id: "200ml",
      name: "Birmal Concentrated Cleaner 200ml",
      volume: "200ml",
      mrp: 70,
      image: "/images/products/bottle-200ml.webp",
      badge: "Trial Pack",
      description:
        "Handy size to try BIRMAL at home or pack for travel. Makes up to 20 litres of mop solution from a single bottle.",
      bestFor: "Small flats, bathrooms & first-time trial",
    },
    {
      id: "500ml",
      name: "Birmal Concentrated Cleaner 500ml",
      volume: "500ml",
      mrp: 170,
      image: "/images/products/bottle-500ml.webp",
      badge: "Popular Size",
      description:
        "Everyday household bottle for kitchens, living rooms, and balconies. Yields up to 50 litres of pine-fresh floor cleaner.",
      bestFor: "Daily mopping in 1–2 BHK homes",
    },
    {
      id: "1l",
      name: "Birmal Concentrated Cleaner 1 Litre",
      volume: "1 Litre",
      mrp: 330,
      image: "/images/products/bottle-1l.webp",
      badge: "Best Seller",
      description:
        "Best-value family pack with a dosing cap. Just 15–20 ml in 5 litres of water makes over 100 litres of finished solution.",
      bestFor: "3–4 BHK homes, villas & high-traffic floors",
    },
    {
      id: "5l",
      name: "Birmal Concentrated Cleaner 5 Litres",
      volume: "5 Litres",
      mrp: 1450,
      image: "/images/products/bottle-5l.webp",
      badge: "Commercial Pack",
      description:
        "Heavy-duty 5L jerry can with an easy-pour handle built for commercial housekeeping. Yields 500+ litres of cleaning solution.",
      bestFor: "Offices, hospitals, schools & large premises",
    },
  ] as ProductSize[],

  // 4 Interactive Benefit Tabs on Product Showcase
  benefitTabs: [
    {
      id: "economical",
      title: "More Washes Per Bottle",
      icon: "Coins",
      headline: "One Concentrated Bottle Replaces Four",
      description:
        "Use just 2 caps (15–20 ml) in a 5-litre bucket to mop an entire 1,500 sq.ft home. Because it isn't watered down like ordinary phenyl, a 1L bottle lasts up to 65 washes.",
      bulletPoints: [
        "1 Litre bottle yields 100+ litres of ready mop solution",
        "Costs about ₹5–₹6 per 5L bucket (₹3.30 per litre)",
        "Less plastic waste and fewer store refills",
      ],
      image: "/images/lifestyle/about-indoor.webp",
    },
    {
      id: "multipurpose",
      title: "Safe on Hard Floors",
      icon: "Layers",
      headline: "One Cleaner for Every Room & Stone",
      description:
        "Formulated at a neutral pH 7.0 with no harsh acid or caustic burn, so polished marble, granite, vitrified tiles, and sealed wood stay bright without chalky residue.",
      bulletPoints: [
        "Safe for Italian marble, granite, ceramic, and vitrified tiles",
        "Cuts kitchen grease, bathroom soap scum, and floor scuffs",
        "Dries clean with zero sticky film for bare feet",
      ],
      image: "/images/lifestyle/how-to-use-step3.webp",
    },
    {
      id: "trusted",
      title: "Made With Care",
      icon: "ShieldCheck",
      headline: "Formulated by Birrumalae Pharma in Hyderabad",
      description:
        "Manufactured under controlled pharmaceutical hygiene checks using distilled pine oil and biodegradable cleaners that clear bacteria without harsh chemical fumes.",
      bulletPoints: [
        "99.9% germ protection on sealed hard floors",
        "Safe around kids and pets once diluted and dried",
        "Natural pine oil helps keep flies away",
      ],
      image: "/images/lifestyle/about-balcony.webp",
    },
    {
      id: "easy-to-use",
      title: "Easy To Use",
      icon: "Sparkles",
      headline: "Dilute, Mop & Let Dry — No Second Rinse",
      description:
        "Designed for quick daily routines at home or in commercial facilities. Mix two caps in water, mop across the floor, and let air-dry in minutes.",
      bulletPoints: [
        "Fast-drying, non-slippery finish saves time",
        "No second plain-water rinse needed",
        "1 Litre pack comes with a calibrated dosing cap",
      ],
      image: "/images/lifestyle/how-to-use-step1.webp",
    },
  ],

  // Step-by-Step Directions
  usageSteps: [
    {
      step: 1,
      title: "Measure & Dilute",
      description:
        "Sweep away loose dust, then pour 2 caps (15–20 ml) of BIRMAL into a 5-litre bucket of clean water and stir lightly.",
      image: "/images/lifestyle/how-to-use-step1.webp",
      note: "For muddy entrances or greasy kitchen floors, add a third cap.",
    },
    {
      step: 2,
      title: "Mop Evenly",
      description:
        "Dip your mop, wring out excess water, and wipe across the floor. The pine surfactants lift cooking grease and footprints without heavy scrubbing.",
      image: "/images/lifestyle/how-to-use-step2.webp",
      note: "Safe on Italian marble, granite, ceramic tiles, and laminate wood.",
    },
    {
      step: 3,
      title: "Let Air-Dry",
      description:
        "Leave the floor to dry naturally—no second water rinse needed. Floors dry streak-free with a crisp pine scent.",
      image: "/images/lifestyle/how-to-use-step3.webp",
      note: "For stubborn bathroom stains or drain corners, apply undiluted for 10 minutes before rinsing.",
    },
  ],

  // Retail Partners (Our Reach)
  retailPartners: [
    {
      name: "Reliance SMART",
      logo: "/images/partners/reliance-mart.svg",
      category: "supermarket",
      description: "Available at modern retail supermarket shelves across India.",
    },
    {
      name: "DMart",
      logo: "/images/partners/dmart.svg",
      category: "supermarket",
      description: "Leading hypermarket partner offering everyday household value.",
    },
    {
      name: "Booker Wholesale",
      logo: "/images/partners/booker-wholesale.svg",
      category: "wholesale",
      description: "Cash and carry distributor for kirana and institutional buyers.",
    },
    {
      name: "METRO Cash & Carry",
      logo: "/images/partners/metro.svg",
      category: "wholesale",
      description: "Serving commercial, hospitality, and corporate bulk clients.",
    },
    {
      name: "Udaan",
      logo: "/images/partners/udaan.svg",
      category: "wholesale",
      description: "Pan-India B2B supply network connecting retail stores.",
    },
    {
      name: "Patel Retail",
      logo: "/images/partners/patel-retail.svg",
      category: "supermarket",
      description: "Regional supermarket chain stocking everyday home essentials.",
    },
    {
      name: "Apna Bazar",
      logo: "/images/partners/apna-bazar.svg",
      category: "supermarket",
      description: "Consumer store chain trusted by local neighbourhoods.",
    },
    {
      name: "RK Bazar",
      logo: "/images/partners/rk-bazar.svg",
      category: "supermarket",
      description: "Neighbourhood grocery stores for daily family shopping.",
    },
    {
      name: "Amazon India",
      logo: "/images/partners/amazon.svg",
      category: "online",
      description: "Home delivery across serviceable Indian pin codes.",
    },
    {
      name: "Flipkart",
      logo: "/images/partners/flipkart.svg",
      category: "online",
      description: "Order online with doorstep delivery across India.",
    },
  ] as RetailPartner[],

  // Testimonials
  testimonials: [
    {
      id: "1",
      name: "Manisha Bhandari",
      role: "Homemaker",
      location: "Hyderabad",
      rating: 5,
      quote:
        "I've tried plenty of floor cleaners, and BIRMAL stood out from day one. The pine smell stays fresh all afternoon without feeling harsh, and just two small caps clean the whole house.",
      avatarText: "MB",
    },
    {
      id: "2",
      name: "Pooja Sharma",
      role: "Apartment Resident",
      location: "Secunderabad",
      rating: 5,
      quote:
        "We've been using BIRMAL for months now. It clears kitchen oil splatters easily and leaves zero sticky marks on our tiles—one bottle lasts far longer than regular phenyl.",
      avatarText: "PS",
    },
    {
      id: "3",
      name: "Swati Joshi",
      role: "Mother of Two",
      location: "Bengaluru",
      rating: 5,
      quote:
        "With kids and a dog at home, I'm careful about strong chemical floors. Once diluted and dry, BIRMAL feels completely gentle underfoot and keeps the house smelling clean for hours.",
      avatarText: "SJ",
    },
    {
      id: "4",
      name: "Rajeshwar Rao",
      role: "Facility Manager",
      location: "Cyberabad",
      rating: 5,
      quote:
        "Switching our office maintenance to the 5L BIRMAL cans cut our monthly cleaner spend noticeably. Our staff uses half the dose to keep granite corridors clean and non-slippery.",
      avatarText: "RR",
    },
  ] as Testimonial[],

  // FAQs
  faqs: [
    {
      id: "safe-kids-pets",
      category: "Product & Safety",
      question: "Is BIRMAL Floor Cleaner safe for homes with children and pets?",
      answer:
        "Yes. When diluted as directed (2 caps in 5 litres of water) and left to dry, floors are safe for bare feet, toddlers, and pets. As with any concentrate, keep the sealed bottle out of reach of children.",
    },
    {
      id: "dilution-ratio",
      category: "Usage & Dilution",
      question: "What is the recommended dilution ratio for daily mopping?",
      answer:
        "Mix 2 full caps (15–20 ml) into half a bucket (5 litres) of water for everyday tile, marble, or granite floors. For stubborn bathroom grime or drain corners, apply a small amount undiluted for 10 minutes before rinsing.",
    },
    {
      id: "marble-granite-safe",
      category: "Product & Safety",
      question: "Can BIRMAL be used on Italian marble and granite?",
      answer:
        "Yes. Unlike acid-based cleaners that etch stone or leave yellow dullness, BIRMAL has a neutral pH 7.0 formula that cleans polished marble, granite, and vitrified tiles while preserving their natural shine.",
    },
    {
      id: "fragrance-duration",
      category: "Product & Safety",
      question: "How long does the pine fragrance last after mopping?",
      answer:
        "Our concentrated pine oil extract keeps rooms smelling clean and fresh for roughly 8 to 12 hours while helping neutralise kitchen grease, pet smells, and damp monsoon odours.",
    },
    {
      id: "bulk-dealership",
      category: "Orders & Dealership",
      question: "What are the pack prices and retailer margin terms?",
      answer:
        "Current GST-inclusive MRPs (effective 09-Nov-2026) are ₹70 for 200 ml, ₹170 for 500 ml, ₹330 for 1 Litre, and ₹1,450 for the 5 Litre bulk can. Registered retailers receive a 20% discount on MRP (landing rates: ₹56 for 200 ml, ₹136 for 500 ml, ₹264 for 1L, inclusive of 18% GST). Call +91 6300670550 or email birrumalaepharma@gmail.com for distributor orders.",
    },
    {
      id: "where-to-buy-online",
      category: "Orders & Dealership",
      question: "Where can I buy BIRMAL Floor Cleaner?",
      answer:
        "You can pick up BIRMAL at supermarkets and cash & carry outlets like Reliance SMART, DMart, METRO, and Udaan, order on Amazon or Flipkart, or order directly on WhatsApp at +91 6300670550.",
    },
  ] as FAQItem[],
};
