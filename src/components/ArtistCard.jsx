import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col h-[250px] w-[250px] my-6 p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-full cursor-pointer"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img
        alt="artist"
        src={track?.images?.coverart}
        className="w-full justify-center items-center rounded-full "
      />
      <p className="font-semibold text-lg text-center text-white mt-5">{track?.subtitle}</p>
    </div>
  );
};

export default ArtistCard;
