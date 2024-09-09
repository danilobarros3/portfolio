import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail } from "lucide-react";
import imageDanilo from "../assets/imageDanilo.jpeg";
import { Button } from "./ui/button";

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
      "https://drive.google.com/file/d/1PGcybzn8G9xndMlMObEsA3SI5qtDqVuA/view?usp=sharing"
    );
  };

  const currentLanguage = i18n.language;

  return (
    <>
      <div className="bg-primary flex items-center justify-between p-4 md:mb-0 mb-10">
        <div className="flex flex-grow justify-center gap-5 items-center">
          <p
            className="text-gray-100 md:text-lg text-base cursor-pointer hover:text-[#70ff00]"
            onClick={() => scrollToSection("about")}
          >
            {t("about_me")}
          </p>
          <p
            className="text-gray-100 md:text-lg text-base cursor-pointer hover:text-[#70ff00]"
            onClick={() => scrollToSection("skills")}
          >
            {t("skills")}
          </p>
          <p
            className="text-gray-100 md:text-lg text-base cursor-pointer hover:text-[#70ff00]"
            onClick={() => scrollToSection("projects")}
          >
            {t("projects")}
          </p>
          <button
            onClick={() => handleLanguageChange("pt")}
            className={`text-gray-100 md:text-lg text-base cursor-pointer hover:text-[#70ff00] ${
              currentLanguage === "pt" ? "font-bold text-[#70ff00]" : ""
            }`}
          >
            PT
          </button>
          <button
            onClick={() => handleLanguageChange("en")}
            className={`text-gray-100 md:text-lg text-base cursor-pointer hover:text-[#70ff00] ${
              currentLanguage === "en" ? "font-bold text-[#70ff00]" : ""
            }`}
          >
            EN
          </button>
        </div>
      </div>

      <div className="md:mt-20 md:p-8 flex flex-col md:flex-row items-center justify-between mx-auto max-w-7xl gap-10">
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-100 text-xl mb-5">{t("hello_i_am")}</p>
          <h1 className="text-[#70FF00] text-3xl md:text-6xl font-bold">
            &lt; D a n i l o
          </h1>
          <h1 className="text-[#70FF00] text-3xl md:text-6xl font-bold">
            B a r r o s /&gt;
          </h1>
          <h1 className="text-white mt-7 font-bold text-xl md:text-3xl">
            {t("front_end_developer_jr")}
          </h1>
          <div>
            <Button
              onClick={handleResume}
              className="bg-[#70Ff00] mt-6 text-white rounded hover:text-[#70ff00] hover:bg-white font-semibold "
            >
              Download CV
            </Button>
          </div>
          <div className="flex gap-5 mt-10 text-center justify-center md:justify-start">
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
          </div>
        </div>
        <img
          src={imageDanilo}
          alt="Danilo Barros"
          className="md:w-[400px] w-[350px] rounded-full border-[#70ff00] border-4"
        />
      </div>
    </>
  );
}
