import { Link } from "react-router-dom";
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
    title: "About Us",
    url: "#about",
  },
  {
    id: "1",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
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
    link: "https://www.siqnl.com",
  },
  {
    id: "2",
    title: "Nartbouw",
    text: "We had the opportunity to build a sleek and functional website for Nartbouw, a ZZP company, featuring an easy-to-use interface designed to enhance the customer experience.",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap3,
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
    id: "basic",
    title: "basic.title",
    description: "basic.description",
    text: "basic.text",
    price: "180",
    features: [
      "basic.features.0",
      "basic.features.1",
      "basic.features.2"
    ],
  },
  {
    id: "premium",
    title: "premium.title",
    description: "premium.description",
    text: "premium.text",
    price: "230",
    features: [
      "premium.features.0",
      "premium.features.1",
      "premium.features.2"
    ],
  },
  {
    id: "enterprise",
    title: "enterprise.title",
    description: "enterprise.description",
    text: "enterprise.text",
    price: null,
    features: [],
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
    id: "5",
    title: "Improve everyday",
    text: "With just €15 per month, we’ll keep your website updated with the latest trends and security fixes.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "2",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/profile.php?id=61573555864439",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/craftywav/",
  },
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
];
