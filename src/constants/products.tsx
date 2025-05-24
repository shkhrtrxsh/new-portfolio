import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import devtinder from "public/images/Screenshot 2025-03-20 at 9.42.31 PM.png";
import sensai from "public/images/sensai.png";

export const products = [
  {
    href: "https://dev-tinder-web-five.vercel.app/",
    title: "DevTinder",
    description: "A dating app that helps you find your perfect match.",
    thumbnail: devtinder,
    images: [devtinder],
    stack: ["Reactjs", "Tailwindcss", "MongoDB", "Nodejs", "Express"],
    slug: "devtinder",
    content: (
      <div>
        <p>
          Designed and developed a full-stack matchmaking application using
          React.js, Node.js, Express, and MongoDB, ensuring a seamless user
          experience.
        </p>
        <p>
          Implemented authentication, real-time interactions, and matchmaking
          logic, optimizing backend performance and database queries for
          scalability.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://sensai-livid.vercel.app/",
    title: "Sensai",
    description: "An AI powered career guidance platform.",
    thumbnail: sensai,
    images: [sensai],
    stack: [
      "Nextjs",
      "Tailwindcss",
      "NeonDB",
      "Ingress",
      "Gemini AI",
      "NextAuth",
      "Prisma",
      "Clerk",
      "Shadcn UI",
    ],
    slug: "sensai",
    content: (
      <div>
        <p>
          Designed and developed a full-stack career guidance platform using
          Next.js, Tailwindcss, NeonDB, Ingress, Gemini AI, NextAuth, React
          Query, and Shadcn UI, ensuring a seamless user experience.
        </p>
        <p>
          Implemented clerk oauth authentication, real-time AI data fetching
          using Gemini API key, and career guidance logic, optimizing backend
          performance and database queries for scalability.
        </p>{" "}
      </div>
    ),
  },
];
