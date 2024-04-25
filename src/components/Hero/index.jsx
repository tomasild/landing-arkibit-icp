import React from "react";
import { Image } from "@nextui-org/react";

const Hero = () => {
  return (
    <section className="absolute top-[4rem] w-full h-[calc(100vh-4rem)] bg-bg-hero bg-cover bg-center">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-col w-full mb-12 text-center">
          <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl text-pretty">
            La nueva forma de invertir en activos inmobiliarios
          </h1>

          <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-fondo-primario">
            Conoce y aprende acerca de las posibilidades de invertir de forma
            fraccionada utilizando la tecnologia Blockchain.
          </p>

          <a
            className="mx-auto mt-8 text-sm font-semibold text-texto-resaltado hover:text-fondo-secundario"
            title="read more"
          >
            Leer mas acerca del proyecto »
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* 
import React from "react";
import { Image } from "@nextui-org/react";

const Hero = () => {
  return (
    <section className="absolute top-[4rem] w-full h-[calc(100vh-4rem)]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="./vid1.mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-col w-full mb-12 text-center">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mx-auto mb-5">
            <Image
              width={360}
              alt="Arkibit logo"
              src="./arkibit_logo.webp"
            />
          </div>

          <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
            Long headline to turn <br className="hidden lg:block" />
            your visitors into users
          </h1>

          <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-white">
            Free and Premium themes, UI Kit's, templates, and landing pages
            built with Tailwind CSS, HTML & Next.js.
          </p>

          <a
            className="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600"
            title="read more"
          >
            Read more about the offer »
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
 */
