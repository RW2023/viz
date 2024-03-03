import { FC } from 'react';
import Image from 'next/image';

interface Props {
    src: string;
    alt: string;
}

const ArticleImage: FC<Props> = ({ src, alt }): JSX.Element => {
  return (
    <div className="rounded bg-background p-2 shadow-lg border border-1 border-headline m-2">
      <Image
        src={src}
        alt={alt}
        width={350}
        height={350}
      />
    </div>
  );
};
export default ArticleImage;