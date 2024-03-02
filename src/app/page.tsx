import SubHeading from '@/components/ui/SubHeading';
import GridBox from '@/components/ui/GridBox';
import LightHeading from '@/components/ui/LightHeading';
import LightSubHeading from '@/components/ui/LightSubHeading';

const content1 = (
  <div>
    <p>
      Data has a story to tell. It is up to us to discover the tales hidden within. My Viz app is a platform for creating, sharing, and exploring data stories.
    </p>
  </div>
);

const content2 = (
  <div>
    <p>
      Data science is a powerful tool for gaining insights. It is through the lens of data science that we can gain a deeper understanding of the world around us.
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
              content1= {content1}
              content2= {content2}
            />
            <div>
              <p>Much love for the hero</p>{' '}
              <span>
                courtesy{' '}
                <a href="https://unsplash.com/@dawson2406?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                  Stephen Dawson
                </a>{' '}
                on{' '}
                <a href="https://unsplash.com/photos/turned-on-monitoring-screen-qwtCeJ5cLYs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                  Unsplash
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
