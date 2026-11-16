import type { ImageMetadata } from "astro";
import headAjay from "../assets/site/head-ajay.jpg";
import headShalini from "../assets/site/head-shalini.jpg";
import headJayesha from "../assets/site/head-jayesha.jpg";
import headAbhinav from "../assets/site/head-abhinav.jpg";
import headDevank from "../assets/site/head-devank.jpg";
import headRajeev from "../assets/site/head-rajeev.jpg";
import headAtul from "../assets/site/head-atul.jpg";

export interface Person {
  name: string;
  title: string;
  bio: string;
  photo: ImageMetadata;
}

export const FOUNDERS: Person[] = [
  {
    name: "Ajay Sharma",
    title: "Co-Founder & Inventor",
    bio: "Ajay invented Resonara to automate the sound of Himalayan singing bowls, so a centuries-old practice can be part of everyday life. He has spent 25 years in Asian capital markets at Morgan Stanley, CLSA and Edelweiss, where he is President, and is a serial entrepreneur and the bestselling author of G2G: Good to Great to Gone. He studied at IIT Varanasi and IIM Ahmedabad.",
    photo: headAjay,
  },
  {
    name: "Dr. Shalini Sharma",
    title: "Co-Founder",
    bio: "A trained yoga and sound therapist who designs Resonara's programs. She has a PhD in Pharmaceutical Science and more than 19 years of teaching experience.",
    photo: headShalini,
  },
  {
    name: "Jayesha Sharma",
    title: "Co-Founder",
    bio: "A certified yoga instructor who was there in Singapore the evening Resonara began. She now studies Computer Science and Cognitive Science at Cornell University, where she brings ancient practice and modern science together as a student-founder.",
    photo: headJayesha,
  },
  {
    name: "Abhinav Kushwaha",
    title: "Co-Founder & Chief Technology Officer",
    bio: "Abhinav designed the Resonara instrument end to end: the device and all of its electronics, the firmware that shapes every strike, and the app and integrations venues use to run their sessions. His engineering is why a session sounds the same from the first user to the thousandth. He studied Computer Science at IIT Varanasi.",
    photo: headAbhinav,
  },
  {
    name: "Devank Mishra",
    title: "Co-Founder & General Manager, India",
    bio: "Devank oversees product, technology and operations at Resonara. He has spent the last decade building products and businesses across healthcare and consumer technology.",
    photo: headDevank,
  },
  {
    name: "Rajeev Bala",
    title: "Co-Founder & Chief Growth Officer",
    bio: "Rajeev leads partnerships, go-to-market and regional sales expansion for Resonara. He has over 30 years of experience in analytics and marketing for the enterprise.",
    photo: headRajeev,
  },
  {
    name: "Atul Duggal",
    title: "Co-Founder & General Manager, Americas",
    bio: "Atul leads Resonara's business in the Americas. He has spent more than 20 years building and scaling partnerships for telecom (Airtel and Singtel) and tech (Facebook and Netflix) companies.",
    photo: headAtul,
  },
];
