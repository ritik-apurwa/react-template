"use client";
import React from "react";
import { IconType } from "react-icons/lib";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

interface SocialIconProps {
  id: number;
  title: string;
  icon: IconType;
  href: string;
}

const socialIcons: SocialIconProps[] = [
  { id: 1, title: "Facebook", icon: FaFacebook, href: "https://facebook.com" },
  { id: 2, title: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
  {
    id: 3,
    title: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com",
  },
  { id: 4, title: "YouTube", icon: FaYoutube, href: "https://youtube.com" },
];

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon: Icon, title }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="m-2">
      <a href={href} aria-label={title}>
        <Icon className="text-3xl text-yellow-400 hover:text-yellow-500" />
        <span className="sr-only">{title}</span>
      </a>
    </motion.div>
  );
};

const Blogs = () => {
  const blogNames = [
    "Blogs1",
    "Blogs2",
    "Blogs3",
    "Blogs4",
    "Blogs5",
    "Blogs6",
    "Blogs7",
    "Blogs8",
  ];

  return (
    <section className="p-4">
      <h3 className="text-xl font-semibold mb-2 text-yellow-400">Blogs</h3>
      <ul>
        {blogNames.map((item, index) => (
          <li
            key={index}
            className="mb-1 text-yellow-300 hover:text-yellow-500"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

const Games = () => {
  const gameNames = [
    "FRUIT SAMURAI",
    "SNAKES AND LADDERS",
    "POOL",
    "CARROM",
    "LUDO",
    "FANTASY CRICKET",
    "RUMMY",
    "CALL BREAK",
  ];

  return (
    <section className="p-4">
      <h3 className="text-xl font-semibold mb-2 text-yellow-400">Games</h3>
      <ul>
        {gameNames.map((item, index) => (
          <li
            key={index}
            className="mb-1 text-yellow-300 hover:text-yellow-500"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

const Policies = () => {
  const policies = [
    "T&C",
    "SUPERSTAR T&C",
    "PRIVACY POLICY",
    "RESPONSIBLE GAMING POLICY",
    "ANTI MONEY LAUNDERING POLICY",
    "CERTIFICATION",
    "FAIRPLAY POLICY",
    "COMMUNITY GUIDELINES",
  ];

  return (
    <section className="p-4">
      <h3 className="text-xl font-semibold mb-2 text-yellow-400">Policies</h3>
      <ul>
        {policies.map((item, index) => (
          <li
            key={index}
            className="mb-1 text-yellow-300 hover:text-yellow-500"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

const Disclaimer = () => {
  return (
    <section className="p-4">
      <h3 className="text-xl text-center font-semibold mb-2 text-yellow-400">
        Disclaimer
      </h3>
      <p className="lg:px-20 text-yellow-300">
        This game may be habit-forming or financially risky. Play responsibly.
        WinZO is the biggest social gaming app in India by number of games,
        languages, and exciting formats on the platform. WinZO is only available
        for people who are above 18 years of age. WinZO is available only in
        those Indian states where skill gaming is allowed by regulations. WinZO
        Games Pvt. Ltd. is the sole owner of and reserves the right to “WinZO”
        trademark, logos, assets, content, information, etc. used on the website
        except for the third-party content. WinZO Games Pvt. Ltd. does not
        acknowledge the accuracy or reliability of third-party content.
      </p>
    </section>
  );
};

const CopyRight = () => {
  return (
    <div className="p-4 text-center text-yellow-300">
      © 2024, WinZO All Rights Reserved | Contact Us - Privacy Policy - Terms &
      Conditions - Refund/Cancellation Policy
    </div>
  );
};

const FollowUs = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-2 text-yellow-400">Follow Us</h3>
      <div className="flex">
        {socialIcons.map((icon) => (
          <SocialIcon key={icon.id} {...icon} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className=" text-yellow-400">
      <div className="grid grid-cols-1 max-w-7xl mx-auto items-center md:grid-cols-2 lg:grid-cols-3">
        <div>
          <FollowUs />
        </div>
        <div className="flex flex-row justify-between px-10">
          <Blogs />
          <Games />
        </div>
        <div className="flex w-full justify-center">
          <Policies />
        </div>
      </div>

      <div className="flex flex-col max-w-7xl mx-auto">
        <Disclaimer />
        <CopyRight />
      </div>
    </footer>
  );
};

export default Footer;
