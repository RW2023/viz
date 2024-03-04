import Tableau from '@/components/Tableau';
import Heading from '@/components/ui/Heading';
import { FC } from 'react';

interface Props {}

const page: FC<Props> = (props): JSX.Element => {
  return (
  <div className='w-full h-auto'>
      <Heading title="Grocery Inventory" />  
        <Tableau />
  </div>
  );
};

export default page;
