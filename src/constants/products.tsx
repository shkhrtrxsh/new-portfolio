import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import devtinder from "public/images/Screenshot 2025-03-20 at 9.42.31 PM.png";

export const products = [
  {
    href: "http://3.109.55.105",
    title: "DevTinder",
    description: "A dating app that helps you find your perfect match.",
    thumbnail: devtinder,
    images: [devtinder],
    stack: ["Reactjs", "Tailwindcss", "MongoDB", "Nodejs", "Express"],
    slug: "aceternity",
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
];
