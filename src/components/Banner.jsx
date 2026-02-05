const Banner = () => {
  return (
    <section
      className="h-[90vh] mt-1 mx-0 bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/YBpCmzns/3.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl ml-auto text-white">
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug mb-4">
            Would you like a Cup of Delicious Coffee?
          </h1>

          <p className="text-sm md:text-base text-gray-200 mb-6">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgic back for your companion of every moment. Enjoy the
            beautiful moments and make them memorable.
          </p>

          <button className="bg-[#E3B577] text-[#331A15] px-6 py-3 rounded hover:bg-[#d4a45f] transition font-medium">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
