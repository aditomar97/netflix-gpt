import useFindTrailer from "../customHook/useFindTrailer";
function VideoBackGround({ id }) {
  const { movie ,loading} = useFindTrailer(id);
  const trailer = movie?.results?.filter((item) => item.type === "Trailer");
  const key = trailer?.length ? trailer[0]?.key : movie?.results[0]?.key;
  if(loading)return <h1>Loader</h1>
  return (
    <div>
      <iframe
      className="aspect-video w-screen"
        src= {`https://www.youtube.com/embed/L4DrolmDxmw?si=${key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="autoplay"
        referrerPolicy="strict-origin-when-cross-origin"
     
      ></iframe>
    </div>
  );
}

export default VideoBackGround;
