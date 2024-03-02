import { FC, ReactNode } from 'react';
import SubHeading from './SubHeading';
import LightSubHeading from './LightSubHeading';

interface Props {
  heading1: string;
  content1: ReactNode;
  buttonText: string;
  heading2: string;
  content2: ReactNode;
}

const GridBox: FC<Props> = ({
  heading1,
  heading2,
  content1,
  content2,
}): JSX.Element => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-4 bg-headline text-secondary border border-1 p-2 rounded-md text-xl">
      <div className="bg-highlight p-4 rounded shadow card-compact m-1">
        <LightSubHeading title={heading1} />
        {/* Assuming SubHeading renders an <h3> */}
        <div className="card-body">
          <p className="text-paragraph text-lg ">{content1}</p>
        </div>
      </div>
      <div className="bg-highlight p-4 rounded shadow card-compact m-1">
       <LightSubHeading title={heading2} />
        {/* Adjust according to SubHeading's render */}
        <div className="card-body">
          <p className="text-paragraph text-lg">{content2}</p>
        </div>
      </div>
    </div>
  );
};

export default GridBox;
