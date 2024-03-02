import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';
import GridBox from '@/components/ui/GridBox';
import LightHeading from '@/components/ui/LightHeading';
import LightSubHeading from '@/components/ui/LightSubHeading';


export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url(/hero.webp)',
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="text-headline">
          <LightHeading title="Welcome to the My Viz app" />
          <LightSubHeading title="I Create, share, and explore Data Stories" />
          <button
            type="submit"
            className="btn bg-button text-buttonText hover:bg-buttonText hover:text-button hover:border-button"
          >
            Explore Data
          </button>
          <div className="w-full">
            <GridBox
              heading1="Stories"
              heading2="Insights"
              content1="Discover the stories locked in Data"
              content2="Through data science we will discover the tales data has to tell"
              buttonText="Continue"
            />
          </div>
        </div>
      </div>
    </div>
  );
}