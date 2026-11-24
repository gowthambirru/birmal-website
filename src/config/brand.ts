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
  subheading: "Since inception, BIRMAL has been India's trusted choice for powerful concentrated home hygiene. Our active pine formula eliminates tough stains, germs, and bad odors from all surfaces, keeping your home sparkling and pine fresh.",

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

  // E-commerce Marketplace Links (Easy to configure)
  marketplace: {
    amazonUrl: "https://www.amazon.in",
    flipkartUrl: "https://www.flipkart.com",
    whatsappOrderUrl: "https://wa.me/916300670550?text=Hi%2C%20I%20would%20like%20to%20order%20BIRMAL%20Floor%20Cleaner.",
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
    fragrance: "Natural Pine Forest Freshness",
    surfaceSafety: "pH Balanced — Safe on Marble & Granite",
  },

  // Trust Badges for Top/Footer Banner
  trustBadges: [
    {
      title: "100% Quality Assurance",
      subtitle: "Laboratory tested & certified safe",
      icon: "ShieldCheck",
    },
    {
      title: "2X Concentrated Formula",
      subtitle: "1 Litre concentrate makes 100+ Litres",
      icon: "Sparkles",
    },
    {
      title: "100% Customer Satisfaction",
      subtitle: "Trusted by thousands of families",
      icon: "Smile",
    },
  ],

  // Products & SKUs
  products: [
    {
      id: "200ml",
      name: "Birmal Concentrated Cleaner 200ml",
      volume: "200ml",
      mrp: 75,
      image: "/images/products/bottle-200ml.webp",
      badge: "Trial Pack",
      description: "Compact trial pack ideal for small households or testing the long-lasting pine freshness. Formulated to make up to 20 litres of cleaning solution.",
      bestFor: "Small apartments & bathroom deep cleaning",
    },
    {
      id: "500ml",
      name: "Birmal Concentrated Cleaner 500ml",
      volume: "500ml",
      mrp: 175,
      image: "/images/products/bottle-500ml.webp",
      badge: "Popular Size",
      description: "Our everyday favorite for nuclear families. Delivers superior stain removal and streak-free shine on tile, marble, and granite.",
      bestFor: "Regular daily mopping for 1-2 BHK homes",
    },
    {
      id: "1l",
      name: "Birmal Concentrated Cleaner 1 Litre",
      volume: "1 Litre",
      mrp: 330,
      image: "/images/products/bottle-1l.webp",
      badge: "Best Seller",
      description: "Our flagship concentrate. Dilute 2 caps (15-20ml) in 5 litres of water to create up to 100 litres of high-performance cleaning solution with lasting pine aroma.",
      bestFor: "3-4 BHK homes, villas & daily high traffic areas",
    },
    {
      id: "5l",
      name: "Birmal Concentrated Cleaner 5 Litres",
      volume: "5 Litres",
      mrp: 1450,
      image: "/images/products/bottle-5l.webp",
      badge: "Value Pack",
      description: "Heavy-duty commercial and institution grade packaging with easy-pour green handle. Outstanding cost economy making up to 500+ litres of solution.",
      bestFor: "Offices, hospitals, schools, and large estates",
    },
  ] as ProductSize[],

  // 4 Interactive Benefit Tabs on Product Showcase
  benefitTabs: [
    {
      id: "economical",
      title: "Highly Economical",
      icon: "Coins",
      headline: "Maximum Cleaning Power with Minimal Drops",
      description: "Just 2 caps (15–20 ml) in 5 litres of water cleans an entire 1500 sq.ft home. One bottle of BIRMAL outlasts 4 ordinary phenyl bottles, saving you time, storage space, and monthly grocery expenses.",
      bulletPoints: [
        "1 Litre concentrate yields 100+ buckets of floor cleaning solution",
        "Less than ₹3 per bucket cleaning cost",
        "Concentrated formulation reduces plastic waste significantly",
      ],
      image: "/images/lifestyle/about-indoor.webp",
    },
    {
      id: "multipurpose",
      title: "Multipurpose",
      icon: "Layers",
      headline: "One Solution for Every Surface and Corner",
      description: "Engineered with a pH-neutral, non-corrosive balance that cleans gleaming marble, granite, ceramic tiles, bathroom floors, kitchen slabs, and sanitary ware without leaving chalky residues or yellow stains.",
      bulletPoints: [
        "100% safe on Italian marble, granite, and vitrified tiles",
        "Cleans bathroom sinks, tile grout, and shower cubicles",
        "Leaves zero sticky residue — safe for bare feet",
      ],
      image: "/images/lifestyle/how-to-use-step3.webp",
    },
    {
      id: "trusted",
      title: "Trusted & Reliable",
      icon: "ShieldCheck",
      headline: "Formulated by Birrumalae Pharma Hygiene Standards",
      description: "Backed by strict pharmaceutical-grade chemical formulation and quality audits. Eliminates 99.9% of bacteria, molds, and household allergens while enveloping rooms in refreshing natural pine essential oils.",
      bulletPoints: [
        "99.9% laboratory certified germ removal",
        "Safe around children and pets when used as diluted",
        "Natural pine aroma repels houseflies and mosquitoes naturally",
      ],
      image: "/images/lifestyle/about-balcony.webp",
    },
    {
      id: "easy-to-use",
      title: "Easy To Use",
      icon: "Sparkles",
      headline: "Quick Dilution — No Rinsing Required",
      description: "Simple, mess-free usage designed for modern homemakers and cleaning teams. Just add to water, mop across any hard floor, and let dry naturally in minutes for an instant mirror-like shine.",
      bulletPoints: [
        "Fast-drying streak-free formula saves mopping time",
        "No secondary water rinse required",
        "Measuring cap included for exact dilution control",
      ],
      image: "/images/lifestyle/how-to-use-step1.webp",
    },
  ],

  // Step-by-Step Directions
  usageSteps: [
    {
      step: 1,
      title: "Measure and Dilute",
      description: "Sweep or vacuum the floor to remove loose dirt. Pour 2 full caps (15–20 ml) of BIRMAL Concentrated Floor Cleaner into a bucket containing 5 litres of clean water.",
      image: "/images/lifestyle/how-to-use-step1.webp",
      note: "Tip: For extra shine or high-traffic muddy areas, use 3 caps.",
    },
    {
      step: 2,
      title: "Apply the Solution",
      description: "Dip your mop into the diluted BIRMAL solution, wring gently to remove excess water, and mop the floor evenly. The micro-active pine formulation lifts grime and grease effortlessly.",
      image: "/images/lifestyle/how-to-use-step2.webp",
      note: "Safe on all marble, granite, vitrified tile, and hardwood laminate.",
    },
    {
      step: 3,
      title: "Leave Surface to Dry",
      description: "Allow the floor to dry naturally under ceiling fans or fresh air. No second water rinse is required! Enjoy a streak-free spotless mirror finish and up to 12 hours of crisp pine freshness.",
      image: "/images/lifestyle/how-to-use-step3.webp",
      note: "For tough bathroom tiles or drain corners, apply undiluted for 10 minutes then rinse.",
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
      description: "Leading hypermarket partner offering unbeatable everyday value.",
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
      description: "Pan-India B2B e-commerce supply network connecting retail merchants.",
    },
    {
      name: "Patel Retail",
      logo: "/images/partners/patel-retail.svg",
      category: "supermarket",
      description: "Regional supermarket chain delivering quality household essentials.",
    },
    {
      name: "Apna Bazar",
      logo: "/images/partners/apna-bazar.svg",
      category: "supermarket",
      description: "Co-operative consumer store bringing community trust.",
    },
    {
      name: "RK Bazar",
      logo: "/images/partners/rk-bazar.svg",
      category: "supermarket",
      description: "Convenience grocery chain catering to everyday family needs.",
    },
    {
      name: "Amazon India",
      logo: "/images/partners/amazon.svg",
      category: "online",
      description: "Fast doorstep delivery across all Indian pin codes.",
    },
    {
      name: "Flipkart",
      logo: "/images/partners/flipkart.svg",
      category: "online",
      description: "Order online with verified seller warranty and bundle offers.",
    },
  ] as RetailPartner[],

  // Testimonials
  testimonials: [
    {
      id: "1",
      name: "Manisha Bhandari",
      role: "Young Homemaker",
      location: "Hyderabad",
      rating: 5,
      quote: "I tried many products before, but BIRMAL stands out instantly. The pine fragrance is amazing, fresh, and stays throughout the afternoon. Only a small cap amount is needed, which makes it very safe, effective, and convenient for daily use.",
      avatarText: "MB",
    },
    {
      id: "2",
      name: "Pooja Sharma",
      role: "Apartment Resident",
      location: "Secunderabad",
      rating: 5,
      quote: "I've been using BIRMAL for months now. It's very easy and user-friendly. The pine fragrance feels so fresh and stays for a long time. Even with a little quantity, it cleans greasy kitchen tiles wonderfully—highly recommended!",
      avatarText: "PS",
    },
    {
      id: "3",
      name: "Swati Joshi",
      role: "Mother of Two",
      location: "Bengaluru",
      rating: 5,
      quote: "With kids and pets at home, cleanliness and surface safety are most important. BIRMAL is fresh, safe, and very easy to use. Just a small quantity in water keeps the house smelling like a luxury resort for hours. I truly love it.",
      avatarText: "SJ",
    },
    {
      id: "4",
      name: "Rajeshwar Rao",
      role: "Facility Manager, Tech Park",
      location: "Cyberabad",
      rating: 5,
      quote: "We switched our commercial office floors to BIRMAL 5L concentrate cans. The cost economy is tremendous—our housekeeping team uses half the quantity previously needed, and the marble corridors maintain a pristine, non-slippery gloss.",
      avatarText: "RR",
    },
  ] as Testimonial[],

  // FAQs
  faqs: [
    {
      id: "safe-kids-pets",
      category: "Product & Safety",
      question: "Is BIRMAL Floor Cleaner safe for homes with children and pets?",
      answer: "Yes, BIRMAL Concentrated Floor Cleaner is formulated with surface-safe, balanced active ingredients. When diluted according to instructions (2 caps in 5 litres of water) and allowed to air-dry, floors are completely safe for bare feet, playing toddlers, and pets. Keep the concentrated bottle out of children's reach.",
    },
    {
      id: "dilution-ratio",
      category: "Usage & Dilution",
      question: "What is the recommended dilution ratio for daily mopping?",
      answer: "For regular mopping on tile, marble, or granite, add 2 full caps (approx. 15–20 ml) to a standard mop bucket of 5 litres of water. Stir gently to create an active cleaning solution. For tough greasy bathroom tiles, kitchen counters, or drain grime, you can apply a small amount directly, leave for 10 minutes, and wipe clean.",
    },
    {
      id: "marble-granite-safe",
      category: "Product & Safety",
      question: "Can BIRMAL be safely used on expensive Italian marble and granite?",
      answer: "Absolutely. Ordinary acid-based cleaners and low-quality phenyls can cause etching, dullness, or yellow stains on porous stone. BIRMAL is pH-neutral and streak-free, specifically engineered to protect polished marble, granite, vitrified tile, and ceramic finishes while maintaining high gloss.",
    },
    {
      id: "fragrance-duration",
      category: "Product & Safety",
      question: "How long does the pine fragrance linger after cleaning?",
      answer: "Unlike synthetic chemical perfumes that dissipate in minutes, BIRMAL uses concentrated pine oil extracts that keep rooms smelling revitalized and crisp for up to 8 to 12 hours. It also naturally neutralizes pet odors, food grease, and damp monsoon smells.",
    },
    {
      id: "bulk-dealership",
      category: "Orders & Dealership",
      question: "How can I become a distributor, dealer, or bulk buyer for BIRMAL?",
      answer: "We welcome regional distributors, retail store chains, supermarket partners, and corporate institutional buyers. Please visit our Contact Us page, select 'Dealership Inquiry' or 'Bulk Orders', or contact our sales team directly at +91 6300670550 / birrumalaepharma@gmail.com for competitive wholesale margins and distributor kits.",
    },
    {
      id: "where-to-buy-online",
      category: "Orders & Dealership",
      question: "Where can I buy BIRMAL Floor Cleaner online?",
      answer: "You can purchase authentic BIRMAL products directly on Amazon India, Flipkart, or by placing a fast WhatsApp order directly with our customer care desk at +91 6300670550.",
    },
  ] as FAQItem[],
};
