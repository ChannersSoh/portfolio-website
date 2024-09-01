export default function Home() {
  return (
    <main className="max-w-6xl mx-auto pt-9 pb-6 md:pt-11 lg:pt-13">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 md:p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Charnjeet's Portfolio</h1>
        <div className="flex flex-col md:flex-row md:gap-12 items-center">
          {/* Text Section */}
          <article className="md:w-2/3 p-4">
            <p className="text-gray-900 text-lg mb-6 font-semibold">
              Hello, and welcome to my portfolio! I'm a passionate Junior Software Developer with a strong background in science and a love for technology. I enjoy building dynamic and responsive web applications, blending creativity with technical expertise to create solutions that are both functional and user-friendly.
            </p>

            <p className="text-gray-900 text-lg mb-6 font-semibold">
              Feel free to explore my projects to see examples of my work, or visit the About Me page to learn more about my journey and the skills I bring to the table. Whether you're here to collaborate, recruit, or simply browse, I'm glad to have you!
            </p>
          </article>

          {/* Image Tiles Section */}
          <div className="md:w-1/2 grid grid-cols-4 gap-3">
            <div className="relative h-48 overflow-hidden transform -translate-y-6">
              <img
                src="/ui/pictures/1000005559.jpg"
                alt="In a suit at a wedding"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="relative h-48 overflow-hidden transform translate-y-6">
              <img
                src="/ui/pictures/1000005585.jpg"
                alt="At home in India"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="relative h-48 overflow-hidden transform -translate-y-6">
              <img
                src="/ui/pictures/1000005587.jpg"
                alt="Graduated post grad"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="relative h-48 overflow-hidden transform translate-y-6">
              <img
                src="/ui/pictures/1000005607.jpg"
                alt="In India walking towards an attraction"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}