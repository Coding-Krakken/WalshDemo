import {
  ClipboardList,
  HardHat,
  Recycle,
  ShieldCheck,
  ShieldAlert,
  Phone,
  Truck,
  Wrench,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export const COMPANY = {
  name: "Walsh's Demo & Debris Removal",
  shortName: "Walsh's Demo",
  phoneDisplay: "315-920-5857",
  phoneHref: "tel:+13159205857",
  area: "Central New York",
  email: "hello@walshsdemo.com"
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" }
];

export const IMAGES = {
  hero: "/images/Excavator.png",
  about: "/images/DumpTrailer.png",
  cta: "/images/ExcavatorBucketCloseup.png",
  before: "/images/Interior.png",
  after: "/images/AfterPicture.png",
  projects: [
    "/images/Interior2.png",
    "/images/Excavator2.png",
    "/images/DumpTrailer2.png",
    "/images/DebrisPile.png"
  ]
};

export const SERVICES = [
  {
    title: "Complete Demolition",
    description: "Interior and exterior demolition services.",
    Icon: HardHat
  },
  {
    title: "Debris Removal",
    description: "Efficient cleanup and hauling.",
    Icon: Truck
  },
  {
    title: "Eco-Friendly",
    description: "Responsible disposal and recycling.",
    Icon: Recycle
  },
  {
    title: "Safe & Insured",
    description: "Your property is in good hands.",
    Icon: ShieldCheck
  },
  {
    title: "Safety First",
    description: "Fully licensed, insured, and reliable.",
    Icon: ShieldAlert
  }
];

export const PROCESS_STEPS = [
  {
    title: "Contact Us",
    description: "Call or submit a form for a free estimate.",
    Icon: Phone
  },
  {
    title: "Get A Plan",
    description: "We assess your project and provide a clear plan.",
    Icon: ClipboardList
  },
  {
    title: "We Get To Work",
    description: "Our team handles the demo and debris removal.",
    Icon: Wrench
  },
  {
    title: "Clean & Clear",
    description: "We haul it away and leave your space clean.",
    Icon: Sparkles
  },
  {
    title: "You Move Forward",
    description: "Your space is ready for what is next.",
    Icon: CheckCircle2
  }
];

export const TESTIMONIALS = [
  {
    quote:
      "Walsh's Demo did an outstanding job on our home renovation. They were fast, professional, and cleaned everything perfectly.",
    name: "Sarah T.",
    location: "Syracuse, NY"
  },
  {
    quote:
      "I highly recommend Walsh's for any demo or debris removal needs. Great communication and very reliable.",
    name: "Mike R.",
    location: "Utica, NY"
  },
  {
    quote:
      "They made our whole project so much easier. The team was awesome and the pricing was very fair.",
    name: "Jennifer L.",
    location: "New Hartford, NY"
  }
];

export const STATS = [
  { label: "Projects Completed", value: 850 },
  { label: "Tons Removed", value: 2400 },
  { label: "Average Response", value: 24, suffix: "h" }
];