import { FC, ReactNode } from 'react';
import LightSubHeading from './LightSubHeading';

interface Props {
  heading1: string;
  content1: ReactNode;
  heading2: string;
  content2: ReactNode;
  buttonText1?: string;
  buttonText2?: string;
}

const GridBox: FC<Props> = ({
  heading1,
  heading2,
  content1,
  content2,
  buttonText1,
  buttonText2,
}): JSX.Element => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-4 bg-headline text-secondary border border-1 p-2 rounded-md text-xl">
      <div className="bg-highlight p-4 rounded shadow card-compact m-1">
        {/* 'Light' components have dark text outline applied to make them stand out against light backgrounds */}
        <LightSubHeading title={heading1} />
        <div className="card-body">
          <div className="text-xl">{content1}</div>
          <button
            type="submit"
            className="btn bg-button text-buttonText hover:bg-buttonText hover:text-button hover:border-button"
          >
            {buttonText1}
          </button>
        </div>
      </div>
      <div className="bg-highlight p-4 rounded shadow card-compact m-1">
        <LightSubHeading title={heading2} />
        <div className="card-body">
          <div className="text-xl">{content2}</div>
          <button
            type="submit"
            className="btn bg-button text-buttonText hover:bg-buttonText hover:text-button hover:border-button"
          >
            {buttonText2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridBox;
