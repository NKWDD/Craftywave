import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Contact",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Siqnl",
    text: "We recently built an amazing webshop for Siqnl, complete with a full admin panel and a user-friendly design that makes shopping a breeze for their customers.",
    date: "Sep 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Brouwwereld",
    text: "We’re currently crafting a full-page website for Brouwwereld, featuring an informative customer section and an integrated webshop. The site includes a powerful admin panel with exclusive settings, giving them full control over their online presence.",
    date: "Feb 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Dierenkliniek",
    text: "Another project delivered! We had the opportunity to design and build a stunning homepage for Dierenkliniek, helping them showcase their services and connect with pet owners in a clean, professional, and user-friendly way.",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "A Mobile App for Architecture Students",
    text: "Project in progress! We’re currently building a mobile application designed to help architecture students find freelance work opportunities. Stay tuned for this innovative solution!",
    date: "Jan 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "";

export const collabContent = [
  {
    id: "0",
    title: "Students",
    text: "At Craftywave, we’re a team of passionate student web designers and developers dedicated to bringing your ideas to life.",
  },
  {
    id: "1",
    title: "Knowledge",
    text: "As students, we combine the latest tech knowledge with a fresh perspective to create stunning, high-performance websites tailored to your needs.",
  },
  {
    id: "2",
    title: "Your Business",
    text:"Whether you’re a small business, startup, or established brand, we’re here to help you stand out online and grow your business all at a price that works for you."
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Custom websites with lifetime updates and support!",
    text: "From:",
    price: "180",
    features: [
      "Custom website based on your needs, for lifetime",
      "24/7 support and updates for only €15/month",
      "Domain name and hosting included!",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Perfect for Startups. Personalized logo and business Email",
    text: "From:",
    price: "230",
    features: [
      "Everything in the Basic plan",
      "Personalized logo and business email",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Need a smartphone app, or a unique solution?",
    text: "We’ve got you covered! Let’s bring your ideas to life",
    price: null,
    features: [
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Custom Website Development",
    text: "We craft stunning websites tailored to your brand and business needs",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "SEO & Visibility Boost",
    text: "Designed to rank higher on search engines and attract more visitors.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Mobile-Responsive Design",
    text: "Your website will look perfect on any device, from desktops to smartphones",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "We reply to your requests instantly – no delays, no long waits.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Need changes or updates? We’re here to make your website better, anytime.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "With just €15 per month, we’ll keep your website updated with the latest trends and security fixes.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
