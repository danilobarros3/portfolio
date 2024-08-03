import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import imageDanilo from "../assets/imageDanilo.jpeg";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import { Button } from "./ui/button";

export function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="bg-primary md:hidden flex items-center justify-start p-4">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger
              className="flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </MenubarTrigger>
            {isMenuOpen && (
              <MenubarContent className="top-16 bg-white shadow-lg rounded-b-3xl">
                <MenubarItem>{t("home")}</MenubarItem>
                <MenubarItem onClick={() => scrollToSection("about")}>
                  {t("about_me")}
                </MenubarItem>
                <MenubarItem onClick={() => scrollToSection("skills")}>
                  {t("skills")}
                </MenubarItem>
                <MenubarItem onClick={() => scrollToSection("projects")}>
                  {t("projects")}
                </MenubarItem>
                <hr />
                <MenubarItem>{t("linkedin")}</MenubarItem>
                <MenubarItem>{t("github")}</MenubarItem>
                <MenubarItem>{t("contact_me")}</MenubarItem>
                <hr />
                <MenubarItem
                  onClick={() => handleLanguageChange("pt")}
                  className="cursor-pointer hover:text-[#70ff00]"
                >
                  PT-BR
                </MenubarItem>
                <MenubarItem
                  onClick={() => handleLanguageChange("en")}
                  className="cursor-pointer hover:text-[#70f000]"
                >
                  EN
                </MenubarItem>
              </MenubarContent>
            )}
          </MenubarMenu>
        </Menubar>
      </div>

      <div className="bg-primary hidden md:flex items-center justify-between p-4">
        <div className="flex items-center">
          <h1 className="text-start text-2xl md:text-4xl font-bold text-gray-100">
            DANILO
          </h1>
          <h1 className="text-[#70FF00] text-2xl md:text-4xl font-bold">
            BARROS
          </h1>
        </div>

        <div className="hidden md:flex flex-grow justify-center gap-5 items-end">
          <p
            className="text-gray-100 text-lg cursor-pointer hover:text-[#70ff00]"
            onClick={() => scrollToSection("about")}
          >
            {t("about_me")}
          </p>
          <p
            className="text-gray-100 text-lg cursor-pointer hover:text-[#70ff00]"
            onClick={() => scrollToSection("skills")}
          >
            {t("skills")}
          </p>
          <p
            className="text-gray-100 text-lg cursor-pointer hover:text-[#70ff00]"
            onClick={() => scrollToSection("projects")}
          >
            {t("projects")}
          </p>
        </div>

        <div className="hidden md:flex gap-5 mr-10 ">
          <a
            href="https://www.linkedin.com/in/danilobarros3/"
            className="text-gray-100 text-lg flex gap-2 cursor-pointer hover:text-[#70ff00]"
          >
            <Linkedin /> {t("linkedin")}
          </a>
          <a
            href="https://github.com/danilobarros3"
            className="text-gray-100 text-lg flex gap-2 cursor-pointer hover:text-[#70ff00]"
          >
            <Github /> {t("github")}
          </a>
          <a
            href="mailto:danilobarros.dev@gmail.com"
            className="text-gray-100 text-lg flex gap-2 cursor-pointer hover:text-[#70ff00]"
          >
            <Mail /> {t("contact_me")}
          </a>
          <button
            onClick={() => handleLanguageChange("pt")}
            className="text-gray-100 text-lg cursor-pointer hover:text-[#70ff00]"
          >
            PT-BR
          </button>
          <button
            onClick={() => handleLanguageChange("en")}
            className="text-gray-100 text-lg cursor-pointer hover:text-[#70f000]"
          >
            EN
          </button>
        </div>
      </div>

      <div className="md:mt-20 md:p-8 flex flex-col md:flex-row items-center justify-between mx-auto max-w-7xl">
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-100 text-xl mb-5">{t("hello_i_am")}</p>
          <h1 className="text-[#70FF00] text-4xl md:text-6xl font-bold">
            &lt; D a n i l o
          </h1>
          <h1 className="text-[#70FF00] text-4xl md:text-6xl font-bold">
            B a r r o s /&gt;
          </h1>
          <h1 className="text-white mt-7 font-bold text-2xl md:text-3xl">
            {t("front_end_developer")}
          </h1>
          <div>
            <Button className="bg-[#70Ff00] mt-6 text-white rounded hover:text-[#70ff00] hover:bg-white font-semibold">
              Download CV
            </Button>
          </div>
          <div className="flex flex-col md:flex-row gap-10 mt-10 justify-center md:mr-[120px]">
            <div className="flex gap-3 text-[#828282]">
              <p className="text-4xl md:text-7xl">2</p>
              <p className="text-lg md:text-2xl">{t("years_of_experience")}</p>
            </div>
            <div className="flex gap-5 text-[#828282]">
              <p className="text-4xl md:text-7xl">10</p>
              <p className="text-lg md:text-2xl">{t("projects_completed")}</p>
            </div>
          </div>
        </div>
        <img
          src={imageDanilo}
          alt="Danilo Barros"
          className="w-40 md:w-[450px] rounded-full border-[#70ff00] border-4"
        />
      </div>
    </>
  );
}
