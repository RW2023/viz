//src/app/page.tsx
import GridBox from '@/components/ui/GridBox';
import LightHeading from '@/components/ui/LightHeading';
import LightSubHeading from '@/components/ui/LightSubHeading';
import Attribution from '@/components/ui/Attribution';
import Image from 'next/image';

const content1 = (
  <div className="flex flex-1 flex-col justify-center items-center text-left">
    <Image
      src={'/chart2.jpg'}
      alt={'Data Visualizer'}
      width={400}
      height={400}
      className="rounded bg-background p-2 shadow-lg border border-1 border-headline m-4"
    />
    <p>
      Here I will explore the world of data science and the stories that can be told through data.
    </p>
    <br />
    <p>
      I will Examine various novel data sets and create visualizations to help
      tell the story hidden in the numbers. I will also explore the stories of others and
      learn from their visualizations.
    </p>
    <br />
 <ul className='border border-1 p-3 bg-background m-4 rounded-md'>
  <li>Machine Learning</li>
  <li>Statistics</li>
  <li>Data Visualization</li>
  <li>Google Colab</li>
 </ul>
  </div>
);

const content2 = (
  <div className="flex flex-1 flex-col justify-center items-center text-left">
    <Image
      src={'/chart.jpg'}
      alt={'Data Visualizer'}
      width={400}
      height={400}
      className="rounded bg-background p-2 shadow-lg border border-1 border-headline m-4"
    />
    <p>
      Data science is a powerful tool for gaining insights. It is through the
      lens of data science that we can gain a deeper understanding of the world
      around us.
    </p>
  </div>
);


export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url(/photo1Hero.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="text-headline">
          <LightHeading title="Tales of data" />
          <LightSubHeading title="let the numbers tell a story" />
          <button
            type="submit"
            className="btn bg-button text-buttonText hover:bg-buttonText hover:text-button hover:border-button"
          >
            Explore Data
          </button>
          <div className="w-full">
            <GridBox
              heading1="The Data"
              heading2="The story"
              content1={content1}
              content2={content2}
              buttonText1='Explore Data'
              buttonText2='Explore Stories'
            />
            <Attribution
              link="https://unsplash.com/@dawson2406?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              artist="Stephen Dawson"
              artistAttribution="https://unsplash.com/photos/turned-on-monitoring-screen-qwtCeJ5cLYs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
