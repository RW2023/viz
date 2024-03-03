import { FC, ReactNode } from 'react';
import LightSubHeading from './LightSubHeading';
import Link from 'next/link';

interface Props {
  heading1: string;
  content1: ReactNode;
  heading2: string;
  content2: ReactNode;
  buttonText1?: string;
  buttonText2?: string;
  href1?: string;
  href2?: string;
}

const GridBox: FC<Props> = ({
  heading1,
  heading2,
  content1,
  content2,
  buttonText1,
  buttonText2,
  href1,
  href2,
}): JSX.Element => {
  const renderButton = (buttonText?: string, href?: string) => {
    const button = (
      <button
        type="submit"
        className="btn bg-button text-buttonText hover:bg-buttonText hover:text-button hover:border-button"
      >
        {buttonText}
      </button>
    );

    // If href is provided, wrap the button in a Link, otherwise, return the button directly
    return href ? (
        href.startsWith('http') ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {button}
            </a>
        ) : (
            <Link href={href}>
                {button}
            </Link>
        )
    ) : (
        button
    );
  };

  return (
    <div className="grid md:grid-cols-2 gap-2 mt-4 bg-black text-secondary border border-1 p-2 rounded-md m-5 sm:w-full">
      <div className="bg-highlight p-4 rounded shadow card-compact m-1 sm:m-0">
        <LightSubHeading title={heading1} />
        <div className="card-body">
          <div className="text-lg">{content1}</div>
          {buttonText1 && renderButton(buttonText1, href1)}
        </div>
      </div>
      <div className="bg-highlight p-4 rounded shadow card-compact m-1 sm:m-0">
        <LightSubHeading title={heading2} />
        <div className="card-body">
          <div className="text-lg">{content2}</div>
          {buttonText2 && renderButton(buttonText2, href2)}
        </div>
      </div>
    </div>
  );
};

export default GridBox;
