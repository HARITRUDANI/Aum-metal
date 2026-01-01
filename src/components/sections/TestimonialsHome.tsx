import { CTAButton } from "../CTAButton";

export const TestimonialsHome = () => {
  return (
    <>
      {/* Section 1: Trusted Partner */}
      <section
        id="trust-home"
        className="relative min-h-screen lg:h-screen w-full flex items-center justify-center bg-white overflow-hidden"
      >
        <div className="w-full h-full px-4 sm:px-6 md:content-padding py-8 lg:py-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center lg:h-full">
              {/* Mobile/Tablet - Image First */}
              <div className="flex items-center justify-center lg:hidden order-1 w-full">
                <div className="relative w-full max-w-md">
                  <img
                    src="/src/assets/TrustRightHome.png"
                    alt="Precision brass rods"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Left Side - Content */}
              <div className="flex flex-col justify-center order-2 lg:order-1 lg:pr-12 text-left lg:max-w-2xl">
                {/* Main Heading */}
                <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] leading-tight mb-4 sm:mb-5 md:mb-6">
                  Your Trusted Partner for Precision Brass Rods, Ingots &
                  Billets
                </h2>

                {/* Description */}
                <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] xl:text-[20px] leading-relaxed mb-6 sm:mb-7 md:mb-8">
                  Looking for reliable brass materials with consistent quality
                  and precise specifications? Aum Metal Alloys delivers
                  high-performance brass rods, bars, and billets tailored to
                  your industrial and export requirements.
                </p>

                {/* CTA Button */}
                <div>
                  <CTAButton text="Contact now" />
                </div>
              </div>

              {/* Desktop - Image at Bottom Right (Absolute) */}
              <div className="hidden lg:flex items-end justify-end order-2 lg:absolute lg:right-0 lg:bottom-0 h-full">
                <div className="relative">
                  <img
                    src="/src/assets/TrustRightHome.png"
                    alt="Precision brass rods"
                    className="w-auto h-[450px] xl:h-[500px] 2xl:h-[550px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Client Testimonials */}
      <section
        id="testimonials-home"
        className="min-h-screen w-full flex items-center justify-center bg-[#FAFAFA] py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="w-full px-4 sm:px-6 md:content-padding">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-14 md:mb-16">
              <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px] mb-4 sm:mb-5 leading-none tracking-normal">
                Trusted by Our Clients
              </h2>
              <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] max-w-4xl mx-auto leading-relaxed tracking-normal">
                Hear from partners who trust our precision and manufacturing reliability.
              </p>
            </div>

            {/* Testimonial Card Layout */}
            <div className="relative max-w-6xl mx-auto mb-12">
              <div className="flex flex-col lg:flex-row items-stretch">
                {/* Left Card - Client Info */}
                <div className="relative z-0 lg:w-[35%] shrink-0">
                  <div className="bg-gradient-to-b from-[#FFE5EB] to-[#FFF5F7] border border-[#E5C4CC] p-8 lg:p-10 lg:pr-[25.7pc] h-auto flex flex-col justify-between min-h-[400px] lg:min-h-[450px] relative rounded-[20px] lg:rounded-l-[20px] lg:rounded-r-none">
                    {/* Image Notch - Desktop Only */}
                    <div className="hidden lg:block absolute -right-[2px] top-0 z-20">
                      <img
                        src="/src/assets/trustedHome.png"
                        alt=""
                        className="w-auto h-auto"
                      />
                    </div>

                    {/* Client Name & Position */}
                    <div className="mb-auto">
                      <h3 className="font-['DM_Sans'] font-bold text-[#98012E] text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-tight mb-2">
                        Ankit Mungra
                      </h3>
                      <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[14px] sm:text-[15px] md:text-[16px]">
                        -Procurement Head
                      </p>
                    </div>

                    {/* Bottom Section - Rating & Company */}
                    <div className="bg-[#FFB8CC] rounded-[15px] p-6 mt-8">
                      {/* Star Rating */}
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-[#98012E] text-[20px]">★</span>
                        ))}
                      </div>
                      {/* Company Name */}
                      <p className="font-['Sansation'] font-normal text-[#98012E] text-[14px] sm:text-[15px] md:text-[16px]">
                        -Parmeshwari Brass
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Card - Testimonial Content */}
                <div className="mt-6 lg:mt-0 lg:-ml-1 relative z-10 lg:flex-1">
                  <div className="bg-white border border-[#E5C4CC] mt-10 p-8 lg:p-12 lg:pl-14 min-h-[400px] lg:min-h-[450px] flex flex-col justify-center rounded-[20px] lg:rounded-r-[20px] lg:rounded-l-none">
                    {/* Quote Icon */}
                    <div className="mb-8">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#98012E] rounded-full flex items-center justify-center">
                        <span className="text-white text-[24px] sm:text-[28px] font-serif">"</span>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="font-['Sansation'] font-normal text-[#98012E] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-relaxed">
                      "Aum Metal Alloys consistently delivers high-quality brass rods and billets with precise dimensions. Their reliability and process discipline make them a trusted supplier for our production requirements."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3">
              <button 
                className="w-3 h-3 rounded-full bg-[#98012E] transition-all duration-300"
                aria-label="Testimonial 1"
              ></button>
              <button 
                className="w-3 h-3 rounded-full bg-[#E5C4CC] hover:bg-[#98012E] transition-all duration-300"
                aria-label="Testimonial 2"
              ></button>
              <button 
                className="w-3 h-3 rounded-full bg-[#E5C4CC] hover:bg-[#98012E] transition-all duration-300"
                aria-label="Testimonial 3"
              ></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
