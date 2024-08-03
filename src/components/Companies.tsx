export function Companies() {
  return (
    <div
      id="companies"
      className="bg-primary py-10 px-4 md:px-16 flex flex-col gap-10 items-center overflow-x-hidden"
    >
      <h1 className="text-[#70FF00] text-3xl md:text-4xl font-bold mb-6">
        companies( )
      </h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center">
        <div className="bg-[#1b1d1d] grid gap-2 rounded-2xl p-4 w-full max-w-[500px] shadow-custom-gray">
          <div className="flex flex-col md:flex-row gap-4 text-center md:text-left items-center">
            <p className="text-white text-2xl md:text-3xl font-semibold">
              Lionsoft Inc.
            </p>
          </div>
          <p className="text-[#70FF00] text-lg md:text-2xl text-nowrap">
            Desenvolvedor Front-end Jr
          </p>
            <p className="text-[#828282] font-semibold text-sm md:text-base">
              Outubro 2023 - Atual
            </p>
        </div>
        <div className="bg-[#1b1d1d] grid gap-2 rounded-2xl p-4 w-full max-w-[500px] shadow-custom-gray">
          <div className="flex flex-col md:flex-row gap-4 text-center md:text-left items-center">
            <p className="text-white text-2xl md:text-3xl font-semibold">
              My Ava
            </p>
          </div>
          <p className="text-[#70FF00] text-lg md:text-2xl">
            Suporte Técnico - Estágio
          </p>
            <p className="text-[#828282] font-semibold text-sm md:text-base">
              Outubro 2022 - Outubro 2023
            </p>
        </div>

        <div className="bg-[#1b1d1d] grid gap-2 rounded-2xl p-4 w-full max-w-[500px] shadow-custom-gray">
          <div className="flex flex-col md:flex-row gap-4 text-center md:text-left items-center">
            <p className="text-white text-2xl md:text-3xl font-semibold">
              Objetivo Sorocaba
            </p>
          </div>
          <p className="text-[#70FF00] text-lg md:text-2xl">
            Suporte Técnico - Estágio
          </p>
            <p className="text-[#828282] font-semibold text-sm md:text-base">
              Setembro 2021 - Outubro 2022
            </p>
        </div>
      </div>
    </div>
  );
}
