import React from 'react';
import Carousel from '@/app/ui/components/carousel';

const Ncnews: React.FC = () => {
  const images = [
    '/ui/pictures/Screenshot(149).png',  
    '/ui/pictures/Screenshot(150).png',
    '/ui/pictures/Screenshot(151).png',
    '/ui/pictures/Screenshot(152).png',
    '/ui/pictures/Screenshot(153).png',
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">NC News</h1>
      <p className="text-lg text-gray-800 mb-6">
        NC News was the first project completed as part of the NorthCoders bootcamp. The aim of this project was to create a fully functional news website that allows users to engage with content in a meaningful way.
      </p>

      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Features:</h2>
        <ul className="space-y-4 text-gray-800">
          <li><strong>Article Browsing and Sorting:</strong> Users can browse a series of articles, which can be sorted by date, number of upvotes and number of comments. Articles can also be filtered by topics such as technology, football and more.</li>
          <li><strong>Article Details:</strong> Each article includes a description, author, date of creation, and interactive features such as upvote and downvote buttons. Users can also add comments to articles, contributing to the discussion.</li>
          <li><strong>Comment Interaction:</strong> Within the comment section, users have the ability to like and dislike comments, adding another layer of interaction and engagement.</li>
          <li><strong>Homepage Design:</strong> The homepage features a main headline article, along with side articles to provide users with quick access to other interesting reads.</li>
          <li><strong>User Authentication:</strong> The website allows users to log in using an existing user account.</li>
        </ul>
      </section>

      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Tech Stack:</h2>
        <p className="text-lg text-gray-800 mb-6">
          The website was built using React, JavaScript, CSS, NodeJS with Express and PSQL.
        </p>
      </section>

      <div className="mt-8">
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default Ncnews;
