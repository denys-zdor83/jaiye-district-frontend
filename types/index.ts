export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  time: string;
  image: string;
  content: string;
  category: string;
}

export interface EventAgendaItem {
  time: string;
  item: string;
}

export interface EventDetail {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  capacity: string;
  bannerImage: string;
  agenda: EventAgendaItem[];
}

export interface HeroSlide {
  image: string;
  headline: string;
  subtext: string;
}

export interface DistrictItem {
  name: string;
  image: string;
}

export interface District {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  fillColor: string;
  glowColor: string;
  description: string;
  points: string;
  items: DistrictItem[];
}

export interface ModalState {
  open: boolean;
  type: "success" | "error" | null;
  context: "contact" | "event" | null;
}

export interface ContactFormData {
  name: string;
  surname: string;
  phone: string;
  email: string;
  message: string;
}

export interface EventRegistrationData {
  name: string;
  surname: string;
  phone: string;
  email: string;
}

export type Page = "home" | "posts" | "post-detail" | "events";
