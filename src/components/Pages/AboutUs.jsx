import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen text-grayForPageHeading">
      {/* Hero Section */}
      <div className="text-grayForPageHeading py-16">
        <div className="container mx-auto text-center">
          <h1 className="lg:text-4xl sm:text-3xl font-bold mb-4">
            About <span className="text-green-400 italic">Naisha Naturals</span>
          </h1>
          <p className="lg:text-lg sm:text-[14px] font-medium">
            Your trusted source for daily essentials and sustainable products.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto lg:py-5 px-4 space-y-12 flex flex-col justify-center items-center">
        {/* Who We Are */}
        <div className="border lg:w-[60%] bg-gray-100 rounded-lg px-5 py-10">
          <h2 className="lg:text-3xl sm:text-2xl font-bold mb-4 text-center">
            Who We Are?
          </h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            At Naisha Naturals, we are dedicated to providing fresh, natural,
            and high-quality daily essentials like milk, ghee, paneer, and
            farming products. We believe in promoting a healthier lifestyle
            through sustainable and eco-friendly practices, ensuring that our
            products are not only good for you but also for the planet.
          </p>
        </div>

        {/* Our Vision */}
        <div className="border lg:w-[60%] bg-gray-100  rounded-lg px-5 py-10">
          <h2 className="lg:text-3xl sm:text-2xl font-bold mb-4 text-center">
            Our Vision
          </h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            To become a household name for fresh, natural, and sustainable
            products, while fostering a community that values health, quality,
            and environmental stewardship.
          </p>
        </div>

        {/* Our Mission */}
        <div className="border lg:w-[60%] bg-gray-100  rounded-lg px-5 py-10">
          <h2 className="lg:text-3xl sm:text-2xl font-bold mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            Our mission is to deliver premium-quality products that enrich daily
            lives, support sustainable farming, and build trust through
            exceptional service. We aim to connect people with nature, ensuring
            that every product reflects our commitment to quality and care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
