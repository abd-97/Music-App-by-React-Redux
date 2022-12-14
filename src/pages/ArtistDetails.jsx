import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Loader, Error, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails) return;
    <Loader title="Searching song details" />;

    if (error) return;
      <Error />;

      // eslint-disable-next-line consistent-return
      return (
        <div className="flex flex-col">
          <DetailsHeader
            artistId={artistId}
            artistData={artistData}
          />

          <RelatedSongs
            data={Object.values(artistData?.songs)}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
      );
};
export default ArtistDetails;
