import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';
export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(/hero.webp)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <Heading title='Welcome to the My Viz app' />
          <SubHeading title='I Create, share, and explore visualizations' />
          <button type='submit' className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
