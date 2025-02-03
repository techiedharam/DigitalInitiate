// import React from 'react';

const Faq = () => {
  const faqList = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a wide range of services including SEO, social media marketing, website design and development, email marketing, video editing, and more.'
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'The timeline depends on the complexity of the website. On average, a basic website can take 4-6 weeks, while more complex websites may take 8-12 weeks.'
    },
    {
      question: 'Do you provide ongoing support after the project is complete?',
      answer: 'Yes, we offer ongoing maintenance and support packages to ensure your website or marketing campaign continues to run smoothly.'
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our prices vary depending on the project’s scope and requirements. We offer custom pricing based on your needs. Contact us for a free consultation.'
    },
    {
      question: 'Can you help with content creation for my website?',
      answer: 'Yes, we have expert content creators who can help with writing blogs, articles, product descriptions, and more for your website.'
    },
    {
      question: 'What is SEO and why is it important?',
      answer: 'SEO stands for Search Engine Optimization. It helps improve the visibility of your website on search engines like Google, which in turn drives organic traffic and increases your online presence.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#edf2f4] flex flex-col justify-center items-center text-center px-4 py-12">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 mt-10">
        Frequently Asked <br />
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-extrabold text-5xl md:text-7xl">Questions</span>
      </h1>

      {/* Description */}
      <p className="max-w-3xl text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
        Here are some of the most common questions we receive. If you have any other questions, feel free to reach out to us.
      </p>

      {/* FAQ List */}
      <div className="w-full max-w-4xl space-y-6">
        {faqList.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:from-orange-500 hover:to-yellow-400 transition duration-300 ease-in-out transform hover:scale-105 mt-12">
        Get Started
      </button>
    </div>
  );
};

export default Faq;
