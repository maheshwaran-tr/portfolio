import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiHackerrank, SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <h1 className="mx-2 font-extrabold">PORTFOLIO</h1>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-5 text-2xl">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/maheshwaran6380/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-[#0077b5]" /> {/* LinkedIn color */}
        </a>
        {/* GitHub Icon */}
        <a
          href="https://github.com/maheshwaran-tr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="text-[#ffffff]" /> {/* GitHub color */}
        </a>
        {/* Leetcode Icon */}
        <a
          href="https://leetcode.com/u/mahesh6380/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Leetcode"
        >
          <SiLeetcode className="text-[#FFA116]" /> {/* Leetcode color */}
        </a>
        {/* HackerRank Icon */}
        <a
          href="https://www.hackerrank.com/profile/maheswaran6380"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="HackerRank"
        >
          <SiHackerrank className="text-[#2EC866]" /> {/* HackerRank color */}
        </a>
        <a
          href="https://www.geeksforgeeks.org/user/maheshwaran6380/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="HackerRank"
        >
          <SiGeeksforgeeks className="text-[#19723a]" /> {/* HackerRank color */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;