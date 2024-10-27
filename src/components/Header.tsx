import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import imageDanilo from "../assets/imageDanilo.jpeg";
import { Button } from "./ui/button";
import "animate.css";

export function Header() {
  const { t, i18n } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1PGcybzn8G9xndMlMObEsA3SI5qtDqVuA/view?usp=sharing",
      "_blank"
    );
  };

  const currentLanguage = i18n.language;

  return (
    <>
      <motion.div
        className="bg-primary flex items-center justify-between p-4 md:mb-0 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-grow justify-center gap-5 items-center">
          <motion.p
            className="text-gray-100 md:text-lg text-base cursor-pointer hover:text-[#70ff00]"
            onClick={() => scrollToSection("about")}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {t("about_me")}
          </motion.p>
          <motion.p
            className="text-gray-100 md:text-lg text-base cursor-pointer hover:text-[#70ff00]"
            onClick={() => scrollToSection("skills")}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {t("skills")}
          </motion.p>
          <motion.p
            className="text-gray-100 md:text-lg text-base cursor-pointer hover:text-[#70ff00]"
            onClick={() => scrollToSection("projects")}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {t("projects")}
          </motion.p>
          <motion.button
            onClick={() => handleLanguageChange("pt")}
            className={`text-gray-100 md:text-lg text-base cursor-pointer hover:text-[#70ff00] ${
              currentLanguage === "pt" ? "font-bold text-[#70ff00]" : ""
            }`}
            whileHover={{ scale: 1.1 }}
          >
            PT
          </motion.button>
          <motion.button
            onClick={() => handleLanguageChange("en")}
            className={`text-gray-100 md:text-lg text-base cursor-pointer hover:text-[#70ff00] ${
              currentLanguage === "en" ? "font-bold text-[#70ff00]" : ""
            }`}
            whileHover={{ scale: 1.1 }}
          >
            EN
          </motion.button>
        </div>
      </motion.div>

      <div className="md:mt-20 md:p-8 flex flex-col md:flex-row items-center justify-between mx-auto max-w-7xl gap-10">
        <div className="flex-1 text-center md:text-left">
          <motion.p
            className="text-gray-100 text-xl mb-5"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {t("hello_i_am")}
          </motion.p>
          <motion.h1
            className="text-[#70FF00] text-3xl md:text-6xl font-bold animate__animated animate__zoomIn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            &lt; D a n i l o
          </motion.h1>
          <motion.h1
            className="text-[#70FF00] text-3xl md:text-6xl font-bold animate__animated animate__zoomIn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            B a r r o s /&gt;
          </motion.h1>
          <div className="text-white mt-7 font-bold text-xl md:text-3xl animate__animated animate__flip">
            {t("front_end_developer_jr")}
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Button
              onClick={handleResume}
              className="bg-[#70Ff00] mt-6 text-white rounded hover:text-[#70ff00] hover:bg-black font-semibold "
            >
              Download CV
            </Button>
          </motion.div>
          <motion.div
            className="flex gap-5 mt-10 text-center justify-center md:justify-start"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <a
              href="https://www.linkedin.com/in/danilobarros3/"
              className="text-gray-100 md:text-lg text-base flex gap-2 cursor-pointer hover:text-[#70ff00]"
            >
              <Linkedin /> {t("linkedin")}
            </a>
            <a
              href="https://github.com/danilobarros3"
              className="text-gray-100 md:text-lg text-base flex gap-2 cursor-pointer hover:text-[#70ff00]"
            >
              <Github /> {t("github")}
            </a>
            <a
              href="mailto:danilobarros.dev@gmail.com"
              className="text-gray-100 md:text-lg text-base flex gap-2 cursor-pointer hover:text-[#70ff00]"
            >
              <Mail /> {t("contact_me")}
            </a>
          </motion.div>
        </div>
        <motion.img
          src={imageDanilo}
          alt="Danilo Barros"
          className="md:w-[400px] w-[350px] rounded-full border-[#70ff00] border-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
      </div>
    </>
  );
}
