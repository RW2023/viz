import { FC } from 'react';

interface Props {
    link: string;
    artist: string;
    artistAttribution: string;
}

const Attribution: FC<Props> = ({link, artist, artistAttribution}): JSX.Element => {
  return (
    <div>
      <p>Much love for the hero</p>{' '}
      <span>
        courtesy{' '}
        <a href={link}>
          {artist}
        </a>{' '}
        on{' '}
        <a href={artistAttribution}>
          Unsplash
        </a>
      </span>
    </div>
  );
};

export default Attribution;