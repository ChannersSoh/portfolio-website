export default function Home() {
  return (
    <main className="bg-sky-800 text-white min-h-screen py-12">
    {/* Full-Viewport Welcome Section */}
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-110px)] text-center space-y-4">
      
      {/* Watermark Text with Offset */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -mt-32">
        <h1 className="text-[25vw] md:text-[18vw] lg:text-[15vw] font-bold text-white opacity-10 leading-none">
          Welcome
        </h1>
      </div>
  
      {/* Central Content Group */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-2 drop-shadow-lg">
          Charnjeet's Portfolio
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
          Welcome to my professional portfolio. Explore my journey, skills, and projects.
        </p>
      </div>
  
      {/* Learn More Button */}
      <a
        href="#about"
        className="mt-8 bg-white text-sky-800 font-semibold py-2 px-6 rounded-full hover:bg-sky-700 hover:text-white transition duration-300 shadow-lg hover:shadow-xl relative z-10"
      >
        Learn More
      </a>
    </section>
  
      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto mt-16 p-8 bg-white text-sky-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-6">
          Hello, and welcome to my portfolio! I'm a passionate Junior Software Developer with a strong background in
          science and a love for technology. I enjoy building dynamic and responsive web applications, blending
          creativity with technical expertise to create solutions that are both functional and user-friendly.
        </p>
        <p className="text-lg">
          Feel free to explore my projects to see examples of my work, or visit the About Me page to learn more about my
          journey and the skills I bring to the table. Whether you're here to collaborate, recruit, or simply browse, I'm
          glad to have you!
        </p>
      </section>
    </main>
  );
}
      {/* <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { src: "/ui/pictures/1000005559.jpg", alt: "In a suit at a wedding" },
          { src: "/ui/pictures/1000005585.jpg", alt: "At home in India" },
          { src: "/ui/pictures/1000005587.jpg", alt: "Graduated post grad" },
          { src: "/ui/pictures/1000005607.jpg", alt: "In India walking towards an attraction" },
        ].map((image, idx) => (
          <div key={idx} className="relative h-90 overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </section> */}
