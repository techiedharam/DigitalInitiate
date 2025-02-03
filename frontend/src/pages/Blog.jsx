// import React from 'react';

const Blog = () => {
  const blogPosts = [
    { title: 'How SEO Can Boost Your Business', description: 'Learn the importance of SEO and how it can improve your website’s visibility on search engines.', date: 'Feb 2, 2025', link: '/blog/seo-boost' },
    { title: 'The Power of Social Media Marketing', description: 'Discover how social media marketing can help you build brand awareness and engage your target audience.', date: 'Jan 15, 2025', link: '/blog/social-media-marketing' },
    { title: 'Email Marketing Tips for Success', description: 'Master the art of email marketing with proven strategies that increase open rates and conversions.', date: 'Jan 10, 2025', link: '/blog/email-marketing-tips' },
    { title: 'Why Web Design Matters', description: 'Find out why having a professional website design is crucial for the success of your business.', date: 'Dec 30, 2024', link: '/blog/importance-of-web-design' },
  ];

  return (
    <div className="min-h-screen bg-[#edf2f4] flex flex-col justify-center items-center text-center px-4 py-12">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 mt-10">
        Our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-extrabold text-5xl md:text-7xl">Blog</span>
      </h1>

      {/* Description */}
      <p className="max-w-3xl text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
        Stay up to date with the latest trends, tips, and insights in digital marketing, web development, and more.
      </p>

      {/* Blog Posts List */}
      <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <p className="text-sm text-gray-400">{post.date}</p>
            <a href={post.link} className="text-yellow-500 hover:text-orange-500 font-semibold mt-4 inline-block">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
