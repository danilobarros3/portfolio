import { useTranslation } from "react-i18next";

export function About() {
  const { t, i18n } = useTranslation();

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
        className="bg-primary flex flex-col md:flex-row items-center justify-between px-4 md:px-16 mt-20 gap-10"
      >
        <div className="md:w-[900px] grid gap-10">
          <h1 className="text-[#70FF00] text-3xl md:text-4xl font-bold grid md:justify-start justify-center">
            {t("about_me_heading")}
          </h1>
          <p className="text-white text-lg md:text-2xl mb-4">
            {t("about_me_paragraph")}
          </p>
        </div>
        <div className=" md:w-[500px] grid gap-4 md:gap-6">
          <div className="bg-[#1b1d1d] grid gap-4 rounded-2xl p-4 shadow-custom-gray">
            <p className="text-white text-2xl md:text-3xl font-semibold">
              {t("front_end_developer")}
            </p>
            <p
              className="text-[#70FF00] text-lg md:text-2xl underline cursor-pointer"
              onClick={() => scrollToSection("companies")}
            >
              {t("companies")}
            </p>
          </div>
          <div className="bg-[#1b1d1d] grid gap-4 rounded-2xl p-4 shadow-custom-gray">
            <p className="text-white text-2xl md:text-3xl font-semibold">
              {t("freelancer")}
            </p>
            <a
              href="https://wa.me/5515997944546/"
              className="text-[#70FF00] text-lg md:text-2xl underline"
            >
              {t("hire_me")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
