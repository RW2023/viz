import { FC } from 'react';
import SubHeading from './SubHeading';

interface Props {
  heading1: string;
  content1: string;
  buttonText: string;
  heading2: string;
  content2: string;
}

const GridBox: FC<Props> = ({
  heading1,
  heading2,
  content1,
  content2,
  buttonText,
}): JSX.Element => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-4 bg-highlight text-secondary border border-1 p-2 rounded-md text-3xl">
      <div className="bg-background p-4 rounded shadow card-compact m-1">
        <h3 className="text-headline">{heading1}</h3>{' '}
        {/* Assuming SubHeading renders an <h3> */}
        <div className="card-body">
          <p className="text-paragraph text-lg ">{content1}</p>
        </div>
      </div>
      <div className="bg-background p-4 rounded shadow card-compact m-1">
        <h3 className="text-headline">{heading2}</h3>{' '}
        {/* Adjust according to SubHeading's render */}
        <div className="card-body">
          <p className="text-paragraph text-lg">{content2}</p>
        </div>
      </div>
    </div>
  );
};

export default GridBox;
