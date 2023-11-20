import { useBeatsData } from './BeatsDataContext.js'
import React, { useState, useRef, useEffect } from 'react';


const Player = (props) => {
    var beats = props.beats;
    var currentBeat = props.currentBeat;
    var isPlaying = props.isPlaying;
    const setCurrentBeat = props.setCurrentBeat;
    const setSpotlight = props.setSpotlight;
    const setIsPlaying = props.setIsPlaying;
    const cheapestLicense = props.cheapestLicense;

    const audioRef = useRef(null);
    const coverRef = useRef(null)


    const [isPlayerDisplayed, setIsPlayerDisplayed] = useState('translateY(300px)');

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleBeatSwitch = (addend) => {
        var newBeat = null;
        setCurrentBeat((prevBeat) => {
            const newBeatIndex = (prevBeat.index + addend + beats.length) % beats.length;
            newBeat = beats[newBeatIndex];
            console.log(newBeat)
            return { ...newBeat };
        });
    };
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = currentBeat?.mp3_file || '';
            audioRef.current.play();
            setIsPlaying(true);
            setSpotlight(currentBeat);
            setIsPlayerDisplayed('');
        }
    }, [currentBeat]);
    const [isMuted, setIsMuted] = useState(false)
    const handleMute = () => {
        if (isMuted) {
            audioRef.current.muted = false;
        } else {
            audioRef.current.muted = true;
        }
        setIsMuted(!isMuted)
    }
    if (!beats[0]) {
        return <p>loading...</p>
    }
    return (
        <div className="fixed inset-x-0 bottom-0 transition-all" style={{ transform: isPlayerDisplayed }}>
            <audio ref={audioRef} className="hidden" controlsList="nodownload" controls>
                {beats?.map((beat, index) => (<source key={beat.id} src={beat.mp3_file} type="audio/mpeg" />))}
            </audio>
            <div className="bg-gray w-full h-[6px]"></div>
            <div className="bg-blue h-16 flex items-center justify-between">

                <div className="p-0 flex items-center w-[50%] md:w-[33.33%]">
                    <img src={currentBeat.artwork} ref={coverRef} alt="" className="w-16 h-16 hidden sm:flex"></img>
                    <div className="pl-2">
                        <span className="font-semibold text-white block">{currentBeat.title}</span>
                        <span className="font-thin text-gray text-sm block">Hadin</span>
                    </div>
                </div>

                <div className="flex items-center w-[50%] justify-end md:justify-center md:w-[33.33%]">
                    <button className="mx-2 hidden md:flex">
                        <img src="./static/repeat-1.svg" alt="" className="w-3"></img>
                    </button>
                    <button className="mx-2" onClick={() => handleBeatSwitch(-1)}>
                        <img src="./static/back.svg" alt="" className="w-5"></img>
                    </button>
                    <button className="mx-2" onClick={handlePlayPause}>
                        <img src={isPlaying ? './static/pause-white.svg' : './static/play-white.svg'}

                            alt="" className="w-10"></img>
                    </button>
                    <button className="mx-2" onClick={() => handleBeatSwitch(1)}>
                        <img src="./static/next.svg" alt="" className="w-5"></img>
                    </button>
                    <button className="mx-2 hidden md:flex">
                        <img src="./static/shuffle.svg" alt="" className="w-3"></img>
                    </button>
                </div>

                <div className="hidden md:flex justify-end pr-4 w-[33.33%]">

                    <button className="mr-8" onClick={handleMute}>
                        <img src={isMuted ? './static/volume-mute.svg' : './static/volume-down.svg'} alt="" className="w-7"></img>
                    </button>

                    <button className="px-3 py-1.5 text-black bg-white text-sm rounded-lg font-semibold flex items-center">
                        <img src="static/bag-fill-black.svg" alt=""></img>
                        <span className="pl-2">{cheapestLicense(currentBeat.licenses)}</span>
                    </button>

                </div>
            </div>
        </div>
    )

}

export default Player
