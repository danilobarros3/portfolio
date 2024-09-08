export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-primary py-5 px-6 md:px-16 lg:px-24 flex items-center justify-center">
      <p className="text-[#828282] text-center text-sm md:text-base lg:text-lg">
        &copy; Danilo Barros | {currentYear}
      </p>
    </div>
  );
}
