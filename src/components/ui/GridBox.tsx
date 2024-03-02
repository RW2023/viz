import { FC, ReactNode } from 'react';
import SubHeading from './SubHeading';
import LightSubHeading from './LightSubHeading';

interface Props {
  heading1: string;
  content1: ReactNode;
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
        {/* 'Light' components have dark text outline applied to make them stand out against light backgrounds */}
        <LightSubHeading title={heading1} />
        <div className="card-body">
          <div className="text-xl">{content1}</div>
        </div>
      </div>
      <div className="bg-highlight p-4 rounded shadow card-compact m-1">
        <LightSubHeading title={heading2} />
        <div className="card-body">
          <div className="text-xl">{content2}</div>
        </div>
      </div>
    </div>
  );
};

export default GridBox;
