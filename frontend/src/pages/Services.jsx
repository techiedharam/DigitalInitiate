// import React from 'react';

const Services = () => {
  const services = [
    { title: '🔍 Search Engine Optimization (SEO)', description: 'Improving website visibility on search engines like Google to attract organic traffic.' },
    { title: '💰 Pay-Per-Click Advertising (PPC)', description: 'Managing paid campaigns on platforms like Google Ads and Bing Ads to drive targeted traffic.' },
    { title: '📱 Social Media Marketing (SMM)', description: 'Creating and managing campaigns on Facebook, Instagram, Twitter, LinkedIn, and TikTok.' },
    { title: '✍️ Content Marketing', description: 'Developing blogs, articles, videos, and infographics to engage target audiences.' },
    { title: '✉️ Email Marketing', description: 'Designing and sending targeted email campaigns to nurture leads and retain customers.' },
    { title: '🤝 Affiliate Marketing', description: 'Partnering with affiliates to promote products and paying commissions for generated leads.' },
    { title: '⭐ Influencer Marketing', description: 'Collaborating with influencers to promote products to their followers.' },
    { title: '🛡️ Online Reputation Management (ORM)', description: 'Monitoring and managing a brand\'s online reputation via reviews and social platforms.' },
    { title: '💻 Web Design & Development', description: 'Creating and optimizing websites for better user experience and conversions.' },
    { title: '🛒 E-commerce Marketing', description: 'Strategies for online stores, including product listings, shopping ads, and optimization.' },
    { title: '🎥 Video Marketing', description: 'Creating and distributing video content on YouTube, Vimeo, and social platforms.' },
    { title: '📲 Mobile Marketing', description: 'Optimizing marketing for mobile devices, SMS marketing, and mobile apps.' },
    { title: '📊 Analytics & Reporting', description: 'Tracking digital marketing performance to make data-driven decisions.' },
    { title: '⚡ Conversion Rate Optimization (CRO)', description: 'Improving website elements to boost visitor-to-customer conversion rates.' },
    { title: '🤖 Marketing Automation', description: 'Using software to automate email campaigns, social media posting, and ad management.' },
    { title: '📍 Local SEO', description: 'Optimizing for local search results to attract customers from specific areas.' },
    { title: '🧠 Programmatic Advertising', description: 'Using AI to automate ad buying and targeting specific audiences in real-time.' },
    { title: '🎙️ Voice Search Optimization', description: 'Optimizing content for voice search queries on smart devices and assistants.' },
    { title: '💬 Chatbot Marketing', description: 'Implementing chatbots for instant customer support on websites and social media.' },
    { title: '📈 Data Analysis & Insights', description: 'Leveraging data to understand customer behavior and refine strategies.' },
  ];

  return (
    <div className="min-h-screen bg-[#edf2f4] flex flex-col justify-center items-center text-center px-6 py-12">
      {/* Gradient Circle with Blur Effect */}
      <div className="absolute top-80 left-20 w-[520px] h-[400px] z-1 rounded-full bg-[#eb26fd] blur-[150px] opacity-70 shadow-2xl animate-pulse">
      </div>
      {/* Gradient Circle with Blur Effect */}
      <div className="absolute top-80 right-20 w-[520px] h-[400px] rounded-full bg-[#ffbd00] blur-[150px] opacity-70 shadow-2xl animate-pulse">
      </div>
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 mt-10">
        Powering Your Growth with <br />
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-extrabold text-5xl md:text-7xl">
          Digital Marketing Solutions
        </span>
      </h1>

      {/* Description */}
      <p className="max-w-3xl text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
        We offer a full spectrum of digital marketing services to help businesses thrive online. From SEO to automation, we craft strategies that deliver real results.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <button className="mt-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:from-orange-500 hover:to-yellow-400 transition duration-300 ease-in-out transform hover:scale-110">
        Let’s Get Started 🚀
      </button>
    </div>
  );
};

export default Services;
