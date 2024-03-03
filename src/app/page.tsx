//src/app/page.tsx

import LightHeading from "@/components/ui/LightHeading";
import LightSubheading from "@/components/ui/LightSubHeading"
import Link from "next/link";

export default function Home() {
  
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url(/data.webp)',
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md bg-base-300 border border-1 rounded-md w-full m-5 p-3 flex flex-1 flex-col justify-center items-center">
          <div className="bg-highlight border border-1 rounded w-full m-5 p-3 flex flex-1 flex-col justify-center items-center">
            <LightHeading title="Data Science" />
            <LightSubheading title="Analysis and Machine Learning" />
          </div>
          <Link href="/landing">
            <button className="btn btn-primary" type="submit">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
