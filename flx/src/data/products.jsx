const products = [
  {
    id: 1,
    name: "Luxury 2BHK Apartment",
    category: "Flats & Apartments",
    price: "₹45,00,000",
    location: "Kochi, Kerala",
    date: "Today",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"
    ]
  },

  {
    id: 2,
    name: "Hyundai Creta 2022",
    category: "Cars",
    price: "₹12,50,000",
    location: "Thrissur, Kerala",
    date: "Yesterday",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800"
    ]
  },

  {
    id: 3,
    name: "Royal Enfield Classic 350",
    category: "Bikes",
    price: "₹1,65,000",
    location: "Calicut, Kerala",
    date: "Today",
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&sat=-20"
    ]
  },

  {
    id: 4,
    name: "Toyota Innova Crysta",
    category: "Travellers",
    price: "₹18,00,000",
    location: "Kochi, Kerala",
    date: "2 days ago",
    images: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800"
    ]
  },

  {
    id: 5,
    name: "iPhone 15 Pro Max",
    category: "Mobiles",
    price: "₹85,000",
    location: "Malappuram, Kerala",
    date: "Today",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
      "https://images.unsplash.com/photo-1695048133123-5e7b7a1e5c1e?w=800",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800"
    ]
  },

  {
    id: 6,
    name: "MacBook Pro M3",
    category: "Laptops",
    price: "₹1,25,000",
    location: "Kochi, Kerala",
    date: "Yesterday",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
      "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?w=800",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800"
    ]
  },

  {
    id: 7,
    name: "Modern Luxury Sofa",
    category: "Furniture",
    price: "₹32,000",
    location: "Palakkad, Kerala",
    date: "Today",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800",
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800"
    ]
  },

  {
    id: 8,
    name: "Premium Smart Watch",
    category: "Watches",
    price: "₹8,500",
    location: "Kannur, Kerala",
    date: "3 days ago",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800"
    ]
  },

  {
    id: 9,
    name: "Canon DSLR Camera",
    category: "Cameras",
    price: "₹48,000",
    location: "Kozhikode, Kerala",
    date: "Today",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800",
      "https://images.unsplash.com/photo-1510127034890-1e5892e3f2f4?w=800",
      "https://images.unsplash.com/photo-1519183071298-a2962be96f83?w=800"
    ]
  },

  {
    id: 10,
    name: "Double Door Refrigerator",
    category: "Appliances",
    price: "₹28,000",
    location: "Ernakulam, Kerala",
    date: "Yesterday",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800",
      "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?w=800",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800"
    ]
  },

  {
    id: 11,
    name: "Modern Gaming Setup",
    category: "Gaming",
    price: "₹65,000",
    location: "Kochi, Kerala",
    date: "Today",
    images: [
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800",
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800",
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800",
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800"
    ]
  },

  {
    id: 12,
    name: "Luxury Dining Table",
    category: "Furniture",
    price: "₹25,000",
    location: "Thrissur, Kerala",
    date: "Yesterday",
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"
    ]
  }
];

export default products;