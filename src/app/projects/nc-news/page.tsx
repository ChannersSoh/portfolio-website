import Carousel from '@/app/ui/components/carousel';

export default function Ncnews() {
  const images = [
    '/ui/pictures/Screenshot(149).png',  
    '/ui/pictures/Screenshot(150).png',
    '/ui/pictures/Screenshot(151).png',
    '/ui/pictures/Screenshot(152).png',
    '/ui/pictures/Screenshot(152).png',
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold">NC News</h1>
      <p className="text-gray-700">Details about Project 1...</p>
      <Carousel images={images} />
    </div>
  );
}