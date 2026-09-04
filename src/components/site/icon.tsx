import {
  FaWifi,
  FaTree,
  FaUtensils,
  FaCarSide,
  FaTshirt,
  FaChalkboardTeacher,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaBars,
  FaTimes,
  FaPlay,
  FaStar,
  FaQuoteLeft,
  FaChevronRight,
  FaAngleRight,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

const MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  wifi: FaWifi,
  tree: FaTree,
  utensils: FaUtensils,
  car: FaCarSide,
  shirt: FaTshirt,
  presentation: FaChalkboardTeacher,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  phone: FaPhone,
  envelope: FaEnvelope,
  location: FaMapMarkerAlt,
  arrowUp: FaArrowUp,
  bars: FaBars,
  times: FaTimes,
  play: FaPlay,
  star: FaStar,
  quote: FaQuoteLeft,
  chevronRight: FaChevronRight,
  angleRight: FaAngleRight,
  calendar: FaCalendarAlt,
  clock: FaClock,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = MAP[name] ?? FaStar;
  return <Cmp className={className} />;
}

export {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaBars,
  FaTimes,
  FaPlay,
  FaStar,
  FaQuoteLeft,
  FaChevronRight,
  FaAngleRight,
  FaCalendarAlt,
  FaClock,
};
