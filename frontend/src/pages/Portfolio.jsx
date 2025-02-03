// import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'Business Landing Page', description: 'A professional landing page for a business to showcase its services, team, and contact details.', client: 'USA', img: 'https://via.placeholder.com/300x200' },
    { title: 'Restaurant Website', description: 'A beautiful and functional website for a restaurant, including online menu, booking, and contact features.', client: 'India', img: 'https://via.placeholder.com/300x200' },
    { title: 'E-Commerce Website', description: 'An online store with integrated payment systems and an intuitive user interface for a seamless shopping experience.', client: 'USA', img: 'https://via.placeholder.com/300x200' },
    { title: 'Digital Marketing Dashboard', description: 'A custom-built dashboard to track marketing campaigns and analyze user data for better decision-making.', client: 'India', img: 'https://via.placeholder.com/300x200' },
    { title: 'Portfolio Website', description: 'A clean and modern personal website to showcase projects, blog, and contact information for a professional freelancer.', client: 'USA', img: 'https://via.placeholder.com/300x200' },
    { title: 'Event Management Site', description: 'A web platform for event management, including event creation, registration, and ticketing features.', client: 'India', img: 'https://via.placeholder.com/300x200' },
  ];

  return (
    <div className="min-h-screen bg-[#edf2f4] flex flex-col justify-center items-center text-center px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 mt-10">
        Our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-extrabold text-5xl md:text-7xl">Portfolio</span>
      </h1>

      {/* Description */}
      <p className="max-w-3xl text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
        We’ve delivered exceptional projects for clients across India and the USA. Here’s a glimpse of our work in web development, app design, and digital marketing.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105 overflow-hidden"
          >
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <span
                className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${project.client === 'USA'
                  ? 'bg-blue-500 text-white'
                  : 'bg-green-500 text-white'
                  }`}
              >
                {project.client} Client
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <button className="mt-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:from-orange-500 hover:to-yellow-400 transition duration-300 ease-in-out transform hover:scale-110">
        Let’s Build Your Project 🚀
      </button>
    </div>
  );
};

export default Portfolio;
