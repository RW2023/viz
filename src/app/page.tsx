//src/app/page.tsx

import GridBox from "@/components/ui/GridBox";
import LightHeading from "@/components/ui/LightHeading";
import LightSubheading from "@/components/ui/LightSubHeading"
import Link from "next/link";
import ArticleImage from "@/components/ui/ArticleImage";

export default function Home() {
  const content1 = (
    <div className="flex flex-1 flex-col justify-center items-center text-left">
      <ArticleImage src={'/data.webp'} alt={'data'} />
      <p>
        Here is where I will list the data sets i am working with and any
        relevant information about them.
      </p>
      <br />
      <p>
        Real world data isn&apos;t neat and tidy. I have come to understand the
        importance of data cleaning and preprocessing. I will share my
        experiences and the tools I use to clean and preprocess data.
      </p>
    </div>
  );

    const content2 = (
      <div className="flex flex-1 flex-col justify-center items-center text-left">
        <ArticleImage src={'/story.webp'} alt={'presentation'} />
        <p>
          Here I will explore various data sets and the insights that can be
          gained
        </p>
      </div>
    );
  
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: 'url(/question.webp)',
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-none w-full m-5 p-3 flex flex-1 flex-col justify-center items-center">
            <div className="bg-highlight border border-1 rounded w-full m-5 p-3 flex flex-1 flex-col justify-center items-center">
              <LightHeading title="Data Science" />
              <LightSubheading title="Analysis and Machine Learning" />
            </div>
            <Link href="/landing">
              <button
                className="btn hover:bg-button hover:text-buttonText bg-buttonText text-button rounded-lg p-3 border-headline"
                type="submit"
              >
                Explore
              </button>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-full md:w-10/12 m-auto">
        <GridBox
          heading1="Data"
          content1={content1}
          buttonText1="Explore Data"
          heading2="The story"
          content2={content2}
          buttonText2="Explore Stories"
        />
      </div>
    </>
  );
}
