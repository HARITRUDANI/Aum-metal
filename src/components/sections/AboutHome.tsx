export const AboutHome = () => {
  const features = [
    {
      title: "Dimensional Accuracy",
      description: "Precision-controlled casting and finishing processes ensure tight tolerances, smooth surfaces, and consistent cross-sections across every rod, bar, and billet.",
      highlighted: true,
    },
    {
      title: "Metallurgical Consistency",
      description: "Optimized alloy composition and controlled cooling deliver uniform grain structure, strength, and performance throughout the material",
      highlighted: false,
    },
    {
      title: "Custom Sizes & Grades",
      description: "From standard stock to custom diameters, lengths, and alloy grades, we adapt production to meet specific engineering and application requirements.",
      highlighted: false,
    },
    {
      title: "Reliable Bulk Supply",
      description: "Consistent production capacity, and streamlined logistics enable us to fulfill bulk orders with dependable lead times and uniform quality across every batch",
      highlighted: false,
    },
  ];

  return (
    <section
      id="about-home"
      className="min-h-screen w-full flex items-center justify-center bg-white py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:content-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] mb-3 sm:mb-4 leading-tight">
              About Aum Metal Alloy
            </h2>
            <p className="font-['Sansation'] font-normal text-[#616161] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] max-w-3xl mx-auto leading-relaxed">
              How we transform raw brass into precision-engineered rods, bars & billets
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`
                  relative rounded-[20px] p-6 sm:p-7 md:p-8 flex flex-col items-start justify-between overflow-hidden
                  transition-all duration-300 hover:shadow-xl min-h-[320px] sm:min-h-[360px] md:min-h-[400px]
                  ${
                    feature.highlighted
                      ? "bg-[#98012E] text-white border-2 border-[#98012E]"
                      : "bg-[#FFF5F7] text-[#98012E] border-2 border-[#FFE5EB] hover:border-[#98012E]"
                  }
                `}
              >
                {/* Background Icon - Absolutely Positioned */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44">
                    <img
                      src="/src/assets/AboutHome.svg"
                      alt=""
                      className="w-full h-full object-contain"
                      style={{
                        filter: feature.highlighted 
                          ? "brightness(0) invert(1) opacity(2)" 
                          : "opacity(1)"
                      }}
                    />
                  </div>
                </div>

                {/* Content - Positioned above the icon */}
                <div className="relative z-10 flex flex-col h-full justify-between w-full">
                  {/* Title */}
                  <h3
                    className={`font-['DM_Sans'] font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mb-auto leading-tight ${
                      feature.highlighted ? "text-white" : "text-[#98012E]"
                    }`}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`font-['Sansation'] font-normal text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed mt-auto pt-4 ${
                      feature.highlighted ? "text-white" : "text-[#616161]"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

