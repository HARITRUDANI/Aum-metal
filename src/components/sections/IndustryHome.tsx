export const IndustryHome = () => {
  const industries = [
    {
      name: "Electrical & Electronics",
      icon: "/src/assets/Electrical & Electronics.svg",
    },
    { name: "Auto mobile", icon: "/src/assets/Auto mobile.svg" },
    { name: "Plumbing", icon: "/src/assets/Plumbing.svg" },
    { name: "Sanitaryware", icon: "/src/assets/Sanitaryware.svg" },
    { name: "Construction", icon: "/src/assets/Construction.svg" },
    { name: "OEM Manufacturing", icon: "/src/assets/OEM Manufacturing.svg" },
    { name: "Auto Components", icon: "/src/assets/Auto Components.svg" },
    { name: "Infrastructure", icon: "/src/assets/Infrastructure.svg" },
    {
      name: "Hardware Manufacturing",
      icon: "/src/assets/Hardware Manufacturing.svg",
    },
    {
      name: "Global Trade Industries",
      icon: "/src/assets/Global Trade Industries.svg",
    },
    { name: "Energy Equipment", icon: "/src/assets/Energy Equipment.svg" },
    {
      name: "Renewable Components",
      icon: "/src/assets/Renewable Components.svg",
    },
  ];

  return (
    <section
      id="industry-home"
      className="relative min-h-screen w-full flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/Industry Image.svg"
          alt=""
          className="w-[50vw] h-80vh md:h-full  object-cover opacity-100"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:content-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[82px] mb-3 sm:mb-4 leading-none tracking-normal">
              Industry we serve
            </h2>
            <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] max-w-4xl mx-auto leading-[32px] tracking-[0.01em]">
              Supplying Precision Brass Solutions Across Diverse Sectors
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-6 justify-items-center">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="relative bg-white rounded-[20px] border border-[#98012E] w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:w-[280px] xl:w-[300px] 2xl:w-[320px] h-auto sm:h-[130px] md:h-[140px] lg:h-[146px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl"
                style={{
                  paddingTop: "31px",
                  paddingBottom: "31px",
                  paddingLeft: "21px",
                  paddingRight: "21px",
                }}
              >
                {/* Icon */}
                <div className="mb-2.5 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                  <img
                    src={industry.icon}
                    alt={industry.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Industry Name */}
                <h3 className="font-['DM_Sans'] font-medium text-[#1A1A1A] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-tight">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
