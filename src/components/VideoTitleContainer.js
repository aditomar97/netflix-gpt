function VideoTitleContainer({ title, overview }) {
  return (
    <div className="absolute py-16 w-video aspect-video px-10  bg-gradient-to-r from-black">
      <div className=" pt-44 flex flex-col gap-10 w-4/12">
        <p className="font-bold text-3xl text-white ">{title}</p>
        <p className="text-wrap text-white">{overview}</p>
        <div className="flex flex-row gap-4">
          <button className="  bg-white py-2 px-6 font-semibold flex  w-3/12 rounded-lg hover:opacity-75 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-play"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span>Play</span>
          </button>
          <button className="  bg-gray-400 py-2 px-4 font-bold flex flex-row gap-2  w-4/12 rounded-sm text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-info"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitleContainer;
