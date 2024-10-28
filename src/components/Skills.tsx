import typescriptImage from "../assets/typescriptImage.png";
import javascriptImage from "../assets/javascriptImage.png";
import reactImage from "../assets/reactImage.png";
import nextImage from "../assets/nextjsImage.png";
import tailwind from "../assets/tailwind.svg";
import cssImage from "../assets/cssImage.png";
import htmlImage from "../assets/htmlImage.png";
import nodejsImage from "../assets/nodejsImage.png";
import bitbucket from "../assets/bitbucketImage.webp";
import jira from "../assets/jiraImage.webp";
import github from "../assets/githubImage.svg";
import figma from "../assets/figmaImage.webp";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function Skills() {
  const { t } = useTranslation();
  const controls = useAnimation();

  const handleScroll = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      const top = skillsSection.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeInOut" },
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="skills"
      className="bg-primary py-10 px-4 md:px-16 flex flex-col items-center"
    >
      <motion.h1
        className="text-[#70FF00] text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        {t("skills")}
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <img
          src={typescriptImage}
          alt="TypeScript"
          className="w-16 h-16 md:w-24 md:h-24"
        />
        <img
          src={javascriptImage}
          alt="JavaScript"
          className="w-16 h-16 md:w-24 md:h-24"
        />
        <img src={htmlImage} alt="HTML" className="w-16 h-16 md:w-24 md:h-24" />
        <img src={cssImage} alt="CSS" className="w-16 h-16 md:w-24 md:h-24" />
        <img
          src={reactImage}
          alt="ReactJS"
          className="w-16 h-16 md:w-24 md:h-24"
        />
        <img
          src={nextImage}
          alt="NextJS"
          className="w-16 h-16 md:w-24 md:h-24"
        />
        <img
          src={nodejsImage}
          alt="NodeJS"
          className="w-16 h-16 md:w-24 md:h-24"
        />
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <img
          src={tailwind}
          alt="TailwindCSS"
          className="w-16 h-16 md:w-24 md:h-24"
        />
        <img
          src={bitbucket}
          alt="Bitbucket"
          className="w-16 h-16 md:w-24 md:h-24"
        />
        <img src={jira} alt="Jira" className="w-16 h-16 md:w-24 md:h-24" />
        <img
          src={github}
          alt="GitHub"
          className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full"
        />
        <img src={figma} alt="Figma" className="w-16 h-16 md:w-24 md:h-24" />
      </motion.div>
    </div>
  );
}
