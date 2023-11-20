
const Catalog = (props) => {

  var beats = props.beats;
  const setCurrentBeat = props.setCurrentBeat;
  const cheapestLicense = props.cheapestLicense

  const selectBeat = (beatIndex) => {
    const selectedBeat = beats[beatIndex];
    setCurrentBeat(selectedBeat);
  };

  return (
    <div className="pb-[200px]">
      <div className="grid-cols-12 font-bold text-sm gap-1 px-32 hidden lg:grid">
        <div className="col-span-5 pr-2 pb-2 pt-2 pl-[82px]">TITLE</div>
        <div className="col-span-1 p-2">TIME</div>
        <div className="col-span-1 p-2">BPM</div>
        <div className="col-span-3 p-2">TAGS</div>
        <div className="col-span-2 p-2"></div>
      </div>

      {beats?.map((beat, index) => (
        <div key={index} className="grid grid-cols-12 gap-1 px-1 lg:px-32">
          <div className="lg:col-span-5 col-span-9 p-2 flex items-center cursor-pointer"
            onClick={() => selectBeat(index)}
          >
            <img src={beat.artwork_thumbnail} alt="error" className="w-[50px] h-[50px] rounded-lg"></img>
            <span className="lg:pl-6 pl-4 font-semibold">{beat.title}</span>
          </div>
          <div className="col-span-1 p-2 hidden lg:flex items-center "
            onClick={() => selectBeat(index)}
          >{beat.duration.slice(3)}</div>
          <div className="col-span-1 p-2 hidden lg:flex items-center cursor-pointer"
            onClick={() => selectBeat(index)}>{beat.bpm}</div>
          <div className="col-span-3 p-2  hidden lg:flex items-center cursor-pointer"
            onClick={() => selectBeat(index)}>{beat.tags}</div>
          <div className="lg:col-span-2 col-span-3 pr-2 flex items-center  place-content-end">
            <button className="hidden md:flex text-black bg-white p-2 mr-3 border-solid border-2 border-gray drop-shadow-sm text-sm rounded-lg font-semibold flex items-center">
              <img src="static/share-fill.svg" alt=""></img>
            </button>
            <button className="px-3 py-2 flex items-center text-white bg-blue text-sm rounded-lg font-semibold flex">
              <img src="static/bag-plus-fill.svg" alt=""></img>
              <span className="hidden sm:flex pl-2">{cheapestLicense(beat.licenses)}</span>
            </button>
          </div>
        </div>

      ))}

    </div>
  )
}

export default Catalog
