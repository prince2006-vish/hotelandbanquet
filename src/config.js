// Update hotel details here when the client confirms them.
// WhatsApp number must include country code, without +, spaces or dashes.
export const HOTEL = {
  name: "Meetha Pani",
  fullName: "Meetha Pani Hotel & Banquet",
  city: "Ghazipur, Uttar Pradesh",
  whatsapp: "918853260723",
  address: "Ghazipur, Uttar Pradesh, India",
  mapQuery: "Meetha Pani Hotel and Banquet, Ghazipur, Uttar Pradesh",
};

// Room rates and actual facilities are intentionally left for the hotel to confirm.
// Replace descriptions, prices and capacity estimates with verified property details.
export const ROOM_TYPES = [
  {
    id: "comfort",
    name: "Comfort Room",
    tagline: "A relaxed stay for solo travellers and couples",
    guests: "1–2 guests",
    bed: "Double bed (confirm with hotel)",
    amenities: [
      "Air conditioning (confirm)",
      "Wi-Fi (confirm)",
      "Attached bathroom (confirm)",
    ],
    price: "Price on enquiry",
    description:
      "A welcoming option for a short city visit. Contact the hotel to confirm room features, rate and availability.",
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    tagline: "A little extra comfort for a special stay",
    guests: "1–3 guests",
    bed: "Bed configuration on enquiry",
    amenities: [
      "Room amenities on enquiry",
      "Wi-Fi (confirm)",
      "Bathroom details on enquiry",
    ],
    price: "Price on enquiry",
    description:
      "A room option for guests looking for a more elevated stay. Ask the team about exact amenities, room size and rates.",
    images: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: "family",
    name: "Family Stay",
    tagline: "More room for family time together",
    guests: "3–4 guests (confirm)",
    bed: "Bed configuration on enquiry",
    amenities: [
      "Guest capacity to confirm",
      "Room layout on enquiry",
      "Facilities on enquiry",
    ],
    price: "Price on enquiry",
    description:
      "An option to enquire about when travelling with family. The hotel will confirm the suitable occupancy and room arrangement.",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=85",
    ],
  },
];

export const BANQUET_TYPES = [
  {
    id: "intimate",
    name: "Intimate Gatherings",
    tagline: "For close-knit celebrations and family moments",
    capacity: "Suggested range: 50–100 guests",
    capacityNote:
      "Indicative planning range only — confirm actual hall capacity with the hotel.",
    occasions: ["Engagement", "Birthday", "Anniversary", "Family function"],
    images: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
    ],
    description:
      "A suggested format for smaller celebrations. Ask about seating layouts, decoration options, catering and the confirmed guest limit.",
  },
  {
    id: "celebration",
    name: "Celebration Hall",
    tagline: "A flexible setting for milestone events",
    capacity: "Suggested range: 100–250 guests",
    capacityNote:
      "Indicative planning range only — confirm actual hall capacity with the hotel.",
    occasions: [
      "Wedding functions",
      "Engagement",
      "Reception",
      "Corporate event",
    ],
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?auto=format&fit=crop&w=1200&q=85",
    ],
    description:
      "Explore a flexible setup for larger gatherings. Ask the hotel to confirm hall size, seating plan, event packages and availability.",
  },
  {
    id: "grand",
    name: "Grand Celebration",
    tagline: "For bigger occasions and guest lists",
    capacity: "Suggested range: 250–500 guests",
    capacityNote:
      "Indicative planning range only — confirm actual hall capacity with the hotel.",
    occasions: [
      "Wedding",
      "Reception",
      "Large family function",
      "Corporate gathering",
    ],
    images: [
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
    ],
    description:
      "For events with a larger guest list, discuss the most suitable venue arrangement with the hotel before making plans.",
  },
];

export const GALLERY = [
  {
    title: "A welcoming stay",
    category: "Rooms",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Thoughtful details",
    category: "Interiors",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Celebrations in style",
    category: "Banquet",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "A beautiful setting",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Comfort and calm",
    category: "Rooms",
    image:
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Moments worth keeping",
    category: "Celebrations",
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Moments worth keeping",
    category: "Celebrations",
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Moments worth keeping",
    category: "Celebrations",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Moments worth keeping",
    category: "Celebrations",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
  },
];

// DEMO MENU ONLY: replace names, descriptions, photos and sample prices with the restaurant's approved menu before launch.
export const RESTAURANT_MENU = [
  {
    id: "paneer-tikka",
    name: "Paneer Tikka",
    category: "Starters",
    type: "Veg",
    price: 220,
    description: "A popular paneer starter with aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "veg-cutlet",
    name: "Veg Cutlet",
    category: "Starters",
    type: "Veg",
    price: 140,
    description: "Crisp vegetable patties served as a snack.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    category: "Main Course",
    type: "Veg",
    price: 260,
    description: "Paneer in a rich tomato and butter gravy.",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "dal-tadka",
    name: "Dal Tadka",
    category: "Main Course",
    type: "Veg",
    price: 180,
    description: "Comforting yellow lentils finished with tadka.",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "shahi-paneer",
    name: "Shahi Paneer",
    category: "Main Course",
    type: "Veg",
    price: 250,
    description: "A creamy paneer curry for a hearty meal.",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "veg-biryani",
    name: "Veg Biryani",
    category: "Rice & Biryani",
    type: "Veg",
    price: 190,
    description: "Fragrant rice with vegetables and spices.",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "jeera-rice",
    name: "Jeera Rice",
    category: "Rice & Biryani",
    type: "Veg",
    price: 130,
    description: "Steamed rice tempered with cumin.",
    image:
      "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "butter-naan",
    name: "Butter Naan",
    category: "Breads",
    type: "Veg",
    price: 45,
    description: "Soft naan finished with butter.",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tandoori-roti",
    name: "Tandoori Roti",
    category: "Breads",
    type: "Veg",
    price: 25,
    description: "Classic tandoor-baked Indian flatbread.",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "sweet-lassi",
    name: "Sweet Lassi",
    category: "Beverages",
    type: "Veg",
    price: 80,
    description: "A chilled yogurt drink.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "fresh-lime-soda",
    name: "Fresh Lime Soda",
    category: "Beverages",
    type: "Veg",
    price: 70,
    description: "A refreshing lime drink.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    category: "Desserts",
    type: "Veg",
    price: 90,
    description: "A classic Indian sweet served as dessert.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85",
  },
];
