export const HeroSection = () => {
  return (
    <section
      id="heroSection"
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 pt-32 text-center text-black dark:text-white"
    >
      {/* Grid background with subtle lines */}
      <div className="absolute inset-0 bg-grid-small bg-grid-white/[0.05] z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-sm text-blue-700 dark:text-blue-200 mb-4">
          Dynamic Web Magic with Next.js
        </p>

        <h1 className="text-[44px] sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-black dark:text-white">
          Transforming Concepts into <br />
          Seamless{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-500">
            User Experiences
          </span>
        </h1>

        <p className="text-xl sm:text-xl text-gray-800 dark:text-gray-300 mb-8">
          Hi! I'm mohit.
        </p>

        <a href="#about">
          <button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white dark:text-white border border-white rounded-2xl hover:bg-white hover:text-black transition duration-300">
            Show my work
            <span className="text-lg">↗</span>
          </button>
        </a>
      </div>
    </section>
  );
};
