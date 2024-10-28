import Carousel from '@/app/ui/components/carousel';

const Ncnews = () => {
  const images = [
    '/ui/pictures/Screenshot(149).png',
    '/ui/pictures/Screenshot(150).png',
    '/ui/pictures/Screenshot(151).png',
    '/ui/pictures/Screenshot(152).png',
    '/ui/pictures/Screenshot(153).png',
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white text-sky-800 shadow-lg rounded-2xl text-center mt-12 ">
    
      <h1 className="text-4xl font-extrabold mb-4 drop-shadow-md">
        NC News
      </h1>

      <p className="text-lg  mb-6">
        NC News was the first project completed as part of the NorthCoders bootcamp. The aim of this project was to create a fully functional news website that allows users to engage with content in a meaningful way.
      </p>

      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-3xl font-semibold mb-4">Features</h2>
        <ul className="space-y-4 ">
          <li><strong>Article Browsing and Sorting:</strong> Users can browse a series of articles, which can be sorted by date, number of upvotes, and comments. Articles can be filtered by topics like technology, football, etc.</li>
          <li><strong>Article Details:</strong> Each article includes description, author, date, and interactive features such as upvotes and comments.</li>
          <li><strong>Comment Interaction:</strong> Users can like/dislike comments for additional engagement.</li>
          <li><strong>Homepage Design:</strong> The homepage features a main article and other highlighted reads.</li>
          <li><strong>User Authentication:</strong> Users can log in with an existing account.</li>
        </ul>
      </section>

      {/* Tech Stack Section */}
      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
        <p className="text-lg mb-6">
          Built with React, JavaScript, CSS, NodeJS with Express, and PSQL.
        </p>
      </section>

      <a
        href="https://github.com/ChannersSoh/nc-news"
        className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 mt-4 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>

      <div className="mt-8">
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default Ncnews;
