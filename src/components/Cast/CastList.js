import { getPoster } from 'services/getPoster';

export const CastList = ({ movieCast }) => {
  return (
    <div>
      <ul>
        {movieCast.cast.map(cast => (
          <li key={cast.id}>
            <img src={getPoster(cast.profile_path)} alt={cast.name} />
            <h2>{cast.name}</h2>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
