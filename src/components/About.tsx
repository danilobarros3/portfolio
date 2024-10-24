import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function About() {
  const { t } = useTranslation();
  const controls = useAnimation();

  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const top = aboutSection.getBoundingClientRect().top;
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        id="about"
        className="bg-primary flex flex-col items-center justify-between px-4 md:px-16 mt-20 gap-10 overflow-x-hidden overflow-y-hidden mb-10"
      >
        <motion.div
          className="w-full max-w-[600px] md:max-w-none md:w-[90%] lg:w-[900px] grid gap-10 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <h1 className="text-[#70FF00] text-3xl md:text-4xl font-bold grid md:justify-start justify-center">
            {t("about_me_heading")}
          </h1>
          <p className="text-white text-lg md:text-2xl mb-4 text-center md:text-left">
            {t("about_me_paragraph")}
          </p>
        </motion.div>

        <motion.div
          className="w-full md:max-w-[80%] lg:max-w-[500px] grid gap-4 md:gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <div className="bg-[#1b1d1d] grid gap-4 rounded-2xl p-4 shadow-custom-gray">
            <p className="text-white text-2xl md:text-3xl font-semibold text-center md:text-left">
              {t("front_end_developer_jr")}
            </p>
            <p
              className="text-[#70FF00] text-lg md:text-2xl underline cursor-pointer text-center md:text-left"
              onClick={() => scrollToSection("companies")}
            >
              {t("companies")}
            </p>
          </div>

          <div className="bg-[#1b1d1d] grid gap-4 rounded-2xl p-4 shadow-custom-gray">
            <p className="text-white text-2xl md:text-3xl font-semibold text-center md:text-left">
              {t("freelancer")}
            </p>
            <a
              href="https://wa.me/5515997944546/"
              className="text-[#70FF00] text-lg md:text-2xl underline text-center md:text-left"
            >
              {t("hire_me")}
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
