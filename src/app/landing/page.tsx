//src/app/landing/page.tsx
import GridBox from '@/components/ui/GridBox';
import Attribution from '@/components/ui/Attribution';
import ArticleImage from '@/components/ui/ArticleImage';
import Layout from '@/components/Layout';

const content1 = (
  <div className="flex flex-1 flex-col justify-center items-center text-left">
    <ArticleImage src={'/csv.jpg'} alt={'chart'} />
    <p>
      Here I will explore various data sets and the insights that can be gained
    </p>
  </div>
);

const content2 = (
  <div className="flex flex-1 flex-col justify-center items-center text-left">
    <ArticleImage src={'/present.jpg'} alt={'chart'} />
    <p>
      Data science is a powerful tool for gaining insights. I will analyze the
      data and tell the story
    </p>
  </div>
);

export default function page() {
  return (
    <Layout title='Landing Page' description='Landing Page'>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: 'url(/photo1Hero.jpg)',
          }}
        >
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="text-headline">
              <div>
                <GridBox
                  heading1="The Data"
                  heading2="The story"
                  content1={content1}
                  content2={content2}
                  buttonText1="Explore Data"
                  buttonText2="Explore Stories"
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
    </Layout>
  );
}
