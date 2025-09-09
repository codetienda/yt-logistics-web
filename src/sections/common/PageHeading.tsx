import React from "react";
import clsx from "clsx";
import Tagline from "../../components/Tagline";

type PageHeadingProps = {
  pageTitle: string;
  pageDescription: string;
  slogan: string;
  backgroundImage?: string;
};

const PageHeading: React.FC<PageHeadingProps> = ({
  pageTitle,
  pageDescription,
  slogan,
  backgroundImage,
}) => {
  return (
    <section
      className={clsx(
        "relative text-white px-6",
        backgroundImage ? "bg-cover bg-center min-h-[400px]" : "bg-white text-gray-900"
      )}
      style={
        backgroundImage
          ? { backgroundImage: `url('${backgroundImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }
          : {}
      }
    >
      {/* Gradient Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#011E62] to-black/30 z-0" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center text-center min-h-[400px]">
        <h1 className="text-4xl font-bold mb-2">{pageTitle}</h1>
        <p className="mb-6 max-w-2xl">{pageDescription}</p>
        <Tagline label={slogan} />
      </div>
    </section>
  );
};

export default PageHeading;
