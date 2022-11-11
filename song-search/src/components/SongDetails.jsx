import Artist from './Artist';
import Lyrics from './Lyrics';

function SongDetails({ search, lyrics, bio }) {
  if (!lyrics || !bio) return null;
  return (
    <div>
      <h2 className='text-xl font-bold tracking-widest '>
        - - - - - - - - - - - - - - - Track Details - - - - - - - - - - - - - -
        - - -
      </h2>
      {lyrics.err || lyrics.name === 'AbortError' ? (
        <div className='text-red-200 text-xl italic px-5 py-2 my-5 rounded-lg bg-red-500'>
          No existe tal cancion
        </div>
      ) : (
        <Lyrics title={search.song} lyrics={lyrics.lyrics} />
      )}
      {bio.artists ? (
        <Artist artist={bio.artist[0]} />
      ) : (
        <div className='text-slate-700 text-xl font-semibold px-5 py-2 rounded-lg bg-yellow-400'>
          Error en la obtencion de la biografia del Artista
        </div>
      )}
    </div>
  );
}

export default SongDetails;
