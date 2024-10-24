import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function Companies() {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const companiesSection = document.getElementById("companies");
      if (companiesSection) {
        const top = companiesSection.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          });
        }
      }

      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="companies"
      className="bg-primary px-4 md:px-16 flex flex-col gap-5 items-center overflow-x-hidden overflow-y-hidden mb-10"
    >
      <motion.h1
        className="text-[#70FF00] text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        {t("companies")}
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <motion.div
          className="bg-[#1b1d1d] grid gap-2 rounded-2xl p-4 w-full max-w-[500px] shadow-custom-gray"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex flex-col md:flex-row gap-4 text-center md:text-left items-center">
            <p className="text-white text-2xl md:text-3xl font-semibold">
              Lionsoft Inc.
            </p>
          </div>
          <p className="text-[#70FF00] text-lg md:text-2xl">
            {t("front_end_developer_jr")}
          </p>
          <p className="text-[#828282] font-semibold text-sm md:text-base">
            {t("october")} 2023 - {t("current")}
          </p>
        </motion.div>

        <motion.div
          className="bg-[#1b1d1d] grid gap-2 rounded-2xl p-4 w-full max-w-[500px] shadow-custom-gray"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex flex-col md:flex-row gap-4 text-center md:text-left items-center">
            <p className="text-white text-2xl md:text-3xl font-semibold">
              My Ava
            </p>
          </div>
          <p className="text-[#70FF00] text-lg md:text-2xl">
            {t("technical_support")}
          </p>
          <p className="text-[#828282] font-semibold text-sm md:text-base">
            {t("october")} 2022 - {t("october")} 2023
          </p>
        </motion.div>

        <motion.div
          className="bg-[#1b1d1d] grid gap-2 rounded-2xl p-4 w-full max-w-[500px] shadow-custom-gray mb-10 md:mb-0"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex flex-col md:flex-row gap-4 text-center md:text-left items-center">
            <p className="text-white text-2xl md:text-3xl font-semibold">
              Objetivo Sorocaba
            </p>
          </div>
          <p className="text-[#70FF00] text-lg md:text-2xl">
            {t("technical_support")}
          </p>
          <p className="text-[#828282] font-semibold text-sm md:text-base">
            {t("september")} 2021 - {t("october")} 2022
          </p>
        </motion.div>
      </motion.div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-[#70FF00] p-3 rounded-full shadow-lg hover:bg-[#5bcc00] transition-all"
        >
          <ArrowUp/>
        </button>
      )}
    </div>
  );
}
