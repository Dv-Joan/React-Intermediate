import React from 'react';

function Artist({ artist }) {
  return (
    <div>
      <h2>{artist.strArtist}</h2>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <span className='text-semibold'>{artist.intBornYear}</span>
    </div>
  );
}

export default Artist;
