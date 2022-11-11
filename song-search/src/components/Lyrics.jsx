function Lyrics({ title, lyrics }) {
  return (
    <div>
      <div className='font-semibold text-xl text-white'>{title}</div>
      <div className='rounded bg-slate-300'>
        <blockquote className='italic text-md whitespace-pre-wrap'>
          {lyrics}
        </blockquote>
      </div>
    </div>
  );
}

export default Lyrics;
