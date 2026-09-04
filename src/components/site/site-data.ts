// Central content for Triple One Hotel.
// Fields marked [To be provided] are placeholders pending client confirmation.

export const HOTEL = {
  name: "Triple One Hotel",
  slogan: "Cozy rooms for long and short stays",
  phone: "+233 (0)540 231 074",
  phoneHref: "+233540231074",
  email: "reservations@tripleonehotel.com",
  address: "Ghana — exact address to be provided",
  addressLine: "Ghana",
  currency: "GH\u20B5",
  social: {
    facebook: "#",
    instagram: "#",
    whatsapp: "https://wa.me/233540231074",
  },
} as const;

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Accommodations", href: "/accommodation" },
  { label: "Dinning", href: "/restaurant" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export type Room = {
  slug: string;
  name: string;
  price: number;
  image: string;
  description: string;
  beds: string;
  size: string;
};

export const ROOMS: Room[] = [
  {
    slug: "standard",
    name: "Standard Room",
    price: 250,
    image: "/images/room-standard.png",
    description:
      "A cozy, comfortable retreat with a queen bed, warm tones and everything you need for a restful night — ideal for solo travellers and short stays.",
    beds: "1 Queen Bed",
    size: "22 m\u00B2",
  },
  {
    slug: "deluxe",
    name: "Deluxe Room",
    price: 380,
    image: "/images/room-deluxe.png",
    description:
      "An elegant room with a plush king bed, garden-facing window and refined finishes in deep purple and cream tones for an elevated stay.",
    beds: "1 King Bed",
    size: "30 m\u00B2",
  },
  {
    slug: "executive",
    name: "Executive Room",
    price: 480,
    image: "/images/room-executive.png",
    description:
      "Designed for the modern traveller — sleek king bed, dedicated work desk and contemporary styling with a purple accent wall and city view.",
    beds: "1 King Bed",
    size: "34 m\u00B2",
  },
  {
    slug: "suite",
    name: "Triple One Suite",
    price: 650,
    image: "/images/room-suite.png",
    description:
      "Our spacious signature suite with a separate lounge, king bed and refined drapery — comfort and elegance blended into one tranquil space.",
    beds: "1 King Bed + Lounge",
    size: "48 m\u00B2",
  },
  {
    slug: "family",
    name: "Family Room",
    price: 520,
    image: "/images/room-family.png",
    description:
      "A welcoming room with two queen beds and a cheerful, child-friendly decor — space and comfort for the whole family to relax together.",
    beds: "2 Queen Beds",
    size: "40 m\u00B2",
  },
  {
    slug: "vip",
    name: "VIP Suite",
    price: 900,
    image: "/images/room-vip.png",
    description:
      "The pinnacle of Triple One hospitality — opulent king bed, dark wood furnishings, velvet headboard and gold accents with sweeping views.",
    beds: "1 King Bed",
    size: "56 m\u00B2",
  },
];

export type Service = {
  slug: string;
  name: string;
  image: string;
  description: string;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    slug: "event-garden",
    name: "Event Garden",
    image: "/images/event-garden.png",
    description:
      "A lush outdoor garden setting perfect for weddings, parties and open-air celebrations — complete with manicured lawns and fairy-lit evenings.",
    icon: "tree",
  },
  {
    slug: "conference-hall",
    name: "Conference Hall",
    image: "/images/conference-hall.png",
    description:
      "A modern, fully-equipped conference hall with professional AV, comfortable seating and adaptable layouts for meetings and corporate events.",
    icon: "presentation",
  },
  {
    slug: "internet",
    name: "High-Speed Internet",
    image: "/images/gallery-lobby.png",
    description:
      "Complimentary high-speed Wi-Fi throughout the hotel — stay connected for work or leisure from your room, the lounge or the garden.",
    icon: "wifi",
  },
  {
    slug: "restaurant",
    name: "Dining",
    image: "/images/restaurant.png",
    description:
      "An elegant on-site restaurant serving local Ghanaian favourites and continental dishes, prepared fresh by our chef every day.",
    icon: "utensils",
  },
  {
    slug: "laundry",
    name: "Laundry Service",
    image: "/images/gallery-courtyard.png",
    description:
      "Convenient same-day laundry and dry-cleaning service for our guests — fresh linens and garments delivered to your door.",
    icon: "shirt",
  },
  {
    slug: "shuttle",
    name: "Airport Shuttle",
    image: "/images/about-building.png",
    description:
      "Reliable airport pick-up and drop-off service. Schedule your transfer with our front desk for a smooth arrival and departure.",
    icon: "car",
  },
];

export type GalleryItem = {
  src: string;
  title: string;
  category: "Rooms" | "Event Garden" | "Conference Hall" | "Facilities";
};

export const GALLERY: GalleryItem[] = [
  { src: "/images/room-deluxe.png", title: "Deluxe Room", category: "Rooms" },
  { src: "/images/room-suite.png", title: "Triple One Suite", category: "Rooms" },
  { src: "/images/room-vip.png", title: "VIP Suite", category: "Rooms" },
  { src: "/images/room-standard.png", title: "Standard Room", category: "Rooms" },
  { src: "/images/event-garden.png", title: "Event Garden", category: "Event Garden" },
  { src: "/images/news-2.png", title: "Garden Reception", category: "Event Garden" },
  { src: "/images/conference-hall.png", title: "Conference Hall", category: "Conference Hall" },
  { src: "/images/news-3.png", title: "Corporate Event", category: "Conference Hall" },
  { src: "/images/gallery-lobby.png", title: "Hotel Lobby", category: "Facilities" },
  { src: "/images/gallery-courtyard.png", title: "Courtyard & Pool", category: "Facilities" },
  { src: "/images/restaurant.png", title: "Restaurant", category: "Facilities" },
  { src: "/images/hero-facade.png", title: "Hotel Facade", category: "Facilities" },
];

export const GALLERY_FILTERS = [
  "All",
  "Rooms",
  "Event Garden",
  "Conference Hall",
  "Facilities",
] as const;

export type Culinary = {
  name: string;
  image: string;
  description: string;
};

export const CULINARY: Culinary[] = [
  {
    name: "Local Ghanaian Cuisine",
    image: "/images/dish-local.png",
    description:
      "Savour authentic Ghanaian flavours — jollof rice, grilled chicken, fried plantain and rich stews, plated with a modern touch.",
  },
  {
    name: "Continental Favourites",
    image: "/images/dish-continental.png",
    description:
      "A continental selection from hearty breakfasts to light lunches — fresh pastries, eggs, fruits and aromatic coffee.",
  },
  {
    name: "Grill & Seafood",
    image: "/images/dish-grill.png",
    description:
      "Freshly grilled seafood and meats seasoned with herbs and lemon, served with elegant sides for a memorable dinner.",
  },
];

export type News = {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
};

export const NEWS: News[] = [
  {
    title: "Triple One Hotel Celebrates Its Grand Opening",
    date: "March 14, 2025",
    excerpt:
      "We opened our doors to guests with a ribbon-cutting ceremony, unveiling our refreshed rooms and garden — a new chapter of warm Ghanaian hospitality.",
    image: "/images/news-1.png",
    category: "Hotel News",
  },
  {
    title: "Say \u2018I Do\u2019 in Our Event Garden",
    date: "February 02, 2025",
    excerpt:
      "Our Event Garden is now booking for weddings and celebrations. Discover tailored packages for ceremonies and receptions under the stars.",
    image: "/images/news-2.png",
    category: "Events",
  },
  {
    title: "Host Your Next Conference at Triple One",
    date: "January 18, 2025",
    excerpt:
      "From corporate meetings to workshops, our Conference Hall offers professional AV, flexible layouts and attentive service for productive gatherings.",
    image: "/images/news-3.png",
    category: "Business",
  },
];

export const STATS = [
  { value: "6", label: "Room Categories" },
  { value: "3", label: "Floors of Comfort" },
  { value: "24/7", label: "Front Desk" },
  { value: "100%", label: "Warm Hospitality" },
];

export const FEATURES = [
  { title: "Event Garden", desc: "Outdoor celebrations & weddings", icon: "tree" },
  { title: "Conference Hall", desc: "Modern AV-equipped meeting space", icon: "presentation" },
  { title: "High-Speed Internet", desc: "Complimentary Wi-Fi everywhere", icon: "wifi" },
  { title: "On-Site Dining", desc: "Local & continental cuisine", icon: "utensils" },
  { title: "Laundry Service", desc: "Same-day fresh linens", icon: "shirt" },
  { title: "Airport Shuttle", desc: "Reliable transfers on request", icon: "car" },
];
