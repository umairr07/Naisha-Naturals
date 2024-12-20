import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <img
        src="https://media.istockphoto.com/id/1286378180/vector/website-information-concept.jpg?s=612x612&w=0&k=20&c=6v9Hcbp0zp5itIPIywobPQF13YsHIQ4j_srF5VbQusY="
        alt=""
        className="m-auto"
      />

      {/* About Us Section */}
      <div className="max-w-6xl mx-auto py-12 px-6 text-grayForPageHeading">
        <h2 className="text-4xl font-bold text-center mb-8">Who We Are?</h2>
        <p className="text-lg leading-relaxed text-center mb-12">
          Welcome to{" "}
          <span className="font-semibold text-green-600">Naisha Naturals</span>{" "}
          – your trusted destination for premium daily essentials and farming
          products. From fresh milk, pure ghee, and soft paneer to sustainable
          farming solutions, we are committed to delivering quality products
          that cater to your everyday needs. Our mission is to bridge the gap
          between nature and households by providing authentic, natural, and
          sustainable essentials.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Column 1 */}
          <div className="space-y-6">
            <div className="flex gap-4 p-5 rounded-xl items-center bg-green-400 text-white-400">
              <div className="bg-white-400 text-green-400 p-2 flex items-center justify-center rounded-full shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold ">Fresh & Pure</h3>
                <p className="">
                  We provide high-quality, fresh, and natural products to meet
                  your daily needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl items-center bg-green-400 text-white-400 p-5">
              <div className="bg-white-400 text-green-400 p-2 flex items-center justify-center rounded-full shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Sustainability</h3>
                <p className="">
                  Our farming solutions ensure eco-friendly and sustainable
                  practices for a better future.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <div className="flex gap-4 rounded-xl items-center bg-green-400 text-white-400 p-5">
              <div className="bg-white-400 text-green-400 p-2  flex items-center justify-center rounded-full shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h18M3 14h18"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold ">Wide Range</h3>
                <p className="">
                  From daily essentials to farming products, we have everything
                  you need in one place.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl items-center bg-green-400 text-white-400 p-5">
              <div className="bg-white-400 text-green-400 p-2 flex items-center justify-center rounded-full shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold ">Customer First</h3>
                <p className="">
                  We prioritize your satisfaction by delivering the best quality
                  and service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto text-center text-grayForPageHeading">
          <h2 className="text-4xl font-bold  mb-6">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white-400 p-6 flex flex-col justify-between shadow-lg rounded-lg">
              <p className=" italic text-green-400">
                “Naisha Naturals has transformed the way I shop for daily
                essentials. The quality of their products is unbeatable!”
              </p>
              <div className="mt-4  font-semibold">- Sarah L.</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white-400 p-6 flex flex-col justify-between shadow-lg rounded-lg">
              <p className=" italic text-green-400">
                “Their paneer and ghee are so fresh and pure, it reminds me of
                my childhood. Highly recommend them!”
              </p>
              <div className="mt-4  font-semibold">- Ravi K.</div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white-400 p-6  flex flex-col justify-between shadow-lg rounded-lg">
              <p className=" italic text-green-400">
                “I love their commitment to sustainability. Their farming
                products have helped me adopt eco-friendly practices.”
              </p>
              <div className="mt-4  font-semibold">- Priya D.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
