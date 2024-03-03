import GridBox from '@/components/ui/GridBox';
import Heading from '@/components/ui/LightHeading';
import { FC } from 'react';
import ArticleImage from '@/components/ui/ArticleImage';
import DataTable from '@/components/DataTable';

interface Props {}

const Page: FC<Props> = (props): JSX.Element => {
  const table = {
    columns: [
      {
        Header: 'Column 1',
        accessor: 'col1',
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
      {
        Header: 'Column 3',
        accessor: 'col3',
      },
    ],
    data: [
      {
        col1: 'Column 1, Row 1',
        col2: 'Column 2, Row 1',
        col3: 'Column 3, Row 1',
      },
      {
        col1: 'Column 1, Row 2',
        col2: 'Column 2, Row 2',
        col3: 'Column 3, Row 2',
      },
      {
        col1: 'Column 1, Row 3',
        col2: 'Column 2, Row 3',
        col3: 'Column 3, Row 3',
      },
      {
        col1: 'Column 1, Row 4',
        col2: 'Column 2, Row 4',
        col3: 'Column 3, Row 4',
      },
    ],
  };

  const content1 = (
    <div className="flex flex-1 flex-col justify-center items-center text-left">
      <ArticleImage src={'/csv.jpg'} alt={'data'} />
      {/* Pass the table object as props to DataTable */}
      <DataTable table={table} />
    </div>
  );

  const content2 = (
    <div className="flex flex-1 flex-col justify-center items-center text-left">
      <ArticleImage src={'/present.jpg'} alt={'presentation'} />
      <p>
        Here I will explore various data sets and the insights that can be
        gained
      </p>
    </div>
  );

  return (
    <div>
      <Heading title="The Stories" />
      <div className="w-full md:w-3/4 m-auto">
        <GridBox
          heading1="The Dataset"
          content1={content1}
          heading2="The Initial Inquiry"
          content2={content2}
          buttonText1="original data"
          buttonText2="notebook"
        />
      </div>
    </div>
  );
};

export default Page;
