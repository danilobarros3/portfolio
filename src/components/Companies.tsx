import { useTranslation } from "react-i18next";

export function Companies() {
  const { t } = useTranslation();
  return (
    <div
      id="companies"
      className="bg-primary px-4 md:px-16 flex flex-col gap-5 items-center overflow-x-hidden"
    >
      <h1 className="text-[#70FF00] text-3xl md:text-4xl font-bold mb-6">
      {t("companies")}
      </h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center">
        <div className="bg-[#1b1d1d] grid gap-2 rounded-2xl p-4 w-full max-w-[500px] shadow-custom-gray">
          <div className="flex flex-col md:flex-row gap-4 text-center md:text-left items-center">
            <p className="text-white text-2xl md:text-3xl font-semibold">
              Lionsoft Inc.
            </p>
          </div>
          <p className="text-[#70FF00] text-lg md:text-2xl text-nowrap">
          {t("front_end_developer_jr")}
          </p>
            <p className="text-[#828282] font-semibold text-sm md:text-base">
            {t("october")} 2023 - {t("current")} 
            </p>
        </div>
        <div className="bg-[#1b1d1d] grid gap-2 rounded-2xl p-4 w-full max-w-[500px] shadow-custom-gray">
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
        </div>

        <div className="bg-[#1b1d1d] grid gap-2 rounded-2xl p-4 w-full max-w-[500px] shadow-custom-gray mb-10 md:mb-0">
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
        </div>
      </div>
    </div>
  );
}
