// import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#f0f8ff] flex flex-col justify-center items-center text-center px-6 py-12">
      {/* Gradient Circle with Blur Effect */}
      <div className="absolute top-80 left-20 w-[520px] h-[400px] z-1 rounded-full bg-[#eb26fd] blur-[90px] opacity-70 shadow-2xl animate-pulse">
      </div>
      {/* Gradient Circle with Blur Effect */}
      <div className="absolute top-80 right-20 w-[520px] h-[400px] rounded-full bg-[#ffbd00] blur-[90px] opacity-70 shadow-2xl animate-pulse">
      </div>
      {/* About Section */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Who <span className="text-orange-500">We</span> Are
      </h1>

      <p className="max-w-3xl text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
        We are a passionate team dedicated to transforming your digital journey.
        With innovative strategies and creative solutions, we help businesses
        stand out in the dynamic world of technology.
      </p>

      {/* Mission and Vision Section */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-4xl">
        {/* Mission Card */}
        <div className="bg-white shadow-xl p-6 rounded-xl border-t-4 border-yellow-400 hover:shadow-2xl transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            Empowering brands to achieve their digital goals through creativity,
            strategy, and technology-driven solutions.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white shadow-xl p-6 rounded-xl border-t-4 border-orange-500 hover:shadow-2xl transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To be the leading force in shaping the future of digital experiences,
            inspiring growth and innovation globally.
          </p>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <button className="mt-10 bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:from-yellow-500 hover:to-orange-400 transition duration-300 ease-in-out transform hover:scale-110">
        Learn More About Us
      </button>
    </div>
  );
};

export default About;
