
const SearchBar = (props) => {
    const getBeats = props.getBeats
    return (
        <div className="w-full mt-16 px-2  mb-12 flex justify-center">

            <input type="text" className="bg-gray px-4 py-3 mr-0 rounded-l-lg w-full lg:w-1/2" placeholder="What are you looking for?"
                onKeyUp={(event) => { getBeats('http://127.0.0.1:8000/api/beats/?s=' + String(event.target.value)) }}
            >
            </input>

            <div className="bg-gray rounded-r-lg flex items-center pr-2">
                <button className="bg-blue rounded p-1.5 text-white font-semibold text-sm">SEARCH</button>
            </div>

        </div>

    )
}

export default SearchBar
