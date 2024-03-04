import { FC } from 'react';
import Image from 'next/image';

interface Props {
    src: string;
    alt: string;
}

const ArticleImage: FC<Props> = ({ src, alt }): JSX.Element => {
  return (
    <div className="rounded-md bg-background p-2 shadow-lg border border-1 border-headline m-2">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
      />
    </div>
  );
};
export default ArticleImage;