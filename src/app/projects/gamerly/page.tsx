import React from 'react';

const Gamerly: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Gamerly</h1>
      <p className="text-gray-800 mb-6">
        Gamerly is a dynamic social media platform tailored for gamers. The application allows users to register for an account, log in, and interact with a range of gaming-related features. Upon logging in, users are presented with a selection of popular games drawn from a comprehensive database. They can select 1-3 games of interest and are subsequently directed to a personalized homepage.
      </p>

      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Features</h2>
        <ul className="space-y-4 text-gray-800">
          <li><strong>Game Selection and Recommendations:</strong> After selecting their preferred games, users are shown recommendations for similar games, along with current popular titles and games sorted by genre.</li>
          <li><strong>Game Details:</strong> Each game has a dedicated page that includes a detailed description, release date, available platforms, tags, genres, and a rating feature.</li>
          <li><strong>Search Functionality:</strong> Users can search for specific games using a robust search feature.</li>
          <li><strong>Navigation:</strong> Users can easily navigate between the homepage, a friends tab, and their profile tab.</li>
          <li><strong>Friends Tab:</strong> Users can manage their friend list, including adding and removing friends. They can also engage in real-time chat with friends and view their personal 'Wishlist' and 'My Games' libraries.</li>
          <li><strong>Game Libraries:</strong> Users can add or remove games from their 'Wishlist' and 'My Games' libraries by interacting with game cards.</li>
        </ul>
      </section>

      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Tech Stack</h2>
        <p className="text-gray-800">
          The website was built using React Native, JavaScript, TypeScript, NodeJS with Express, Python, Python Flask, and Firebase.
        </p>
      </section>

      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Challenges Faced</h2>
        <ul className="space-y-4 text-gray-800">
          <li><strong>Data Storage and Sorting:</strong> Integrating Firebase to efficiently store and sort data from an external API presented some challenges. Ensuring data consistency and optimizing query performance were key hurdles.</li>
          <li><strong>Real-Time Chat Implementation:</strong> Developing a real-time chat feature using Firebase required handling complex synchronization and ensuring that messages were delivered instantly and accurately.</li>
          <li><strong>Recommendation System:</strong> Implementing a recommendation engine with Python Flask required developing an effective algorithm to analyze user preferences and provide relevant game suggestions. This involved integrating machine learning techniques and ensuring the recommendations were accurate and timely.</li>
        </ul>
      </section>

      <a
        href="https://github.com/ChannersSoh/nc-news"
        className="text-blue-500 hover:text-blue-700 mt-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github Repository
      </a>

      <div className="mt-8 text-center">
        <video className="mx-auto rounded-lg shadow-lg" controls width="600">
          <source src="/ui/pictures/gamerly.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Gamerly;