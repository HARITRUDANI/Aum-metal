export const HeroAbout = () => {
  return (
    <section className="relative min-h-[40vh] lg:h-[50vh] w-full flex items-center justify-center bg-gradient-to-br from-[#C41E3A] to-[#8B1129] overflow-hidden">
      <div className="w-full h-full px-4 sm:px-6 md:content-padding py-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full text-center">
          {/* Breadcrumb */}
          <div className="mb-6">
            <p className="font-['Sansation'] font-normal text-white/80 text-[14px] sm:text-[16px]">
              Home &gt; About
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="font-['DM_Sans'] font-black text-white text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-tight">
            About Aum Metal Alloy
          </h1>
        </div>
      </div>
    </section>
  );
};

