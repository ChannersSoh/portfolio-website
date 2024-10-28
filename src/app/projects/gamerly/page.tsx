import React from 'react';

const Gamerly = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white text-sky-800 shadow-lg rounded-2xl text-center mt-12">
  
      <h1 className="text-4xl font-extrabold mb-4 drop-shadow-md">
        Gamerly
      </h1>

      <p className="text-lg mb-6">
        Gamerly is a dynamic social media platform tailored for gamers. The application allows users to register for an account, log in, and interact with a range of gaming-related features. Upon logging in, users are presented with a selection of popular games drawn from a comprehensive database. They can select 1-3 games of interest and are subsequently directed to a personalized homepage.
      </p>

      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-3xl font-semibold mb-4">Features</h2>
        <ul className="space-y-4">
          <li><strong>Game Selection and Recommendations:</strong> Users see recommendations for similar games, popular titles, and games sorted by genre based on their preferences.</li>
          <li><strong>Game Details:</strong> Each game has a dedicated page with a detailed description, release date, platforms, tags, genres, and a rating feature.</li>
          <li><strong>Search Functionality:</strong> A robust search feature for users to find specific games.</li>
          <li><strong>Navigation:</strong> Users can navigate between the homepage, friends tab, and profile tab seamlessly.</li>
          <li><strong>Friends Tab:</strong> Users can manage friends, engage in real-time chat, and view personal 'Wishlist' and 'My Games' libraries.</li>
          <li><strong>Game Libraries:</strong> Games can be added to or removed from 'Wishlist' and 'My Games' libraries through interactive game cards.</li>
        </ul>
      </section>

      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
        <p className="text-lg mb-6">
          Built with React Native, JavaScript, TypeScript, NodeJS with Express, Python Flask, and Firebase.
        </p>
      </section>

      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-3xl font-semibold mb-4">Challenges Faced</h2>
        <ul className="space-y-4">
          <li><strong>Data Storage and Sorting:</strong> Integrating Firebase for efficient data storage and sorting presented challenges in data consistency and performance.</li>
          <li><strong>Real-Time Chat Implementation:</strong> Ensuring reliable and instant message delivery for real-time chat using Firebase.</li>
          <li><strong>Recommendation System:</strong> Developing a recommendation engine with Python Flask involved machine learning techniques to ensure accurate, timely suggestions.</li>
        </ul>
      </section>

      <a
        href="https://github.com/ChannersSoh/gamerly"
        className="inline-block bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded-full hover:bg-blue-700 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>

      <div className="mt-8">
        <video className="mx-auto rounded-lg shadow-lg" controls width="600">
          <source src="/ui/pictures/gamerly.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Gamerly;
