

const Spotlight = (props) => {
  var spotlight = props.spotlight;
  var setCurrentBeat = props.setCurrentBeat;
  var isPlaying = props.isPlaying
  const cheapestLicense = props.cheapestLicense
  function tags2title(tags) {
    if (tags) {
      return tags.replace(/,/g, ' x')
    }
    return ''
  }
  function formattedDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="w-full flex px-1 lg:px-10 mt-10">
      <div className="relative">
        <img src={spotlight.artwork} alt="" className="rounded-lg z-0 w-[120px] lg:w-[220px] lg:h-[220px] h-[120px]" ></img>
        <img src={!isPlaying ? "./static/play-white-border.svg" : "" } alt="" className="z-10 lg:hidden absolute bottom-9 left-7"
          onClick={() => { setCurrentBeat(spotlight) }}
        ></img>
      </div>
      <div className="ml-3 lg:ml-6">

        <span className="text-xl font-semibold flex">
          <img src="./static/play-black.svg" className="mr-2 hidden lg:block cursor-pointer" width="28px" alt=""
            onClick={() => { setCurrentBeat(spotlight) }}
          ></img>
          <span className="hidden lg:block whitespace-pre">{tags2title(spotlight.tags)} Type Beat - </span>
          <span>{spotlight.title}</span>
        </span>


        <span className="text-sm flex mt-3">
          <img src="./static/calendar-event-fill.svg" className="mr-2" width="12px" alt=""></img>
          {formattedDate(spotlight.date)}
        </span>


        <div className="flex mt-8">
          <button className="px-3 flex items-center mr-4 text-white bg-blue text-sm rounded-lg font-semibold flex">
            <img src="static/bag-plus-fill.svg" alt=""></img>
            <span className="pl-2">{cheapestLicense(spotlight.licenses)}</span>
          </button>
          <button className="px-3 py-1.5 text-black bg-white border-solid border-2 border-gray text-sm rounded-lg font-semibold flex items-center">
            <img src="static/share-fill.svg" alt=""></img>
            <span className="pl-2 hidden lg:block">Share</span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Spotlight
