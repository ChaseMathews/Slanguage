import React, { useState, useEffect } from "react";
// import API from "../../utils/API";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);
  // const [audio, setAudio] = useState()
  // let [index, setIndex] = useState(0);

  // useEffect(() => {
  //   loadAudios()
  // }, [])

  // function loadAudios() {
  //   API.getPresData()
  //     .then(res => {
  //       setAudio(res.data[0].content)
  //       console.log(res.data[0].content)
  //     })

  //     .catch(err => console.log(err));
  // };

  // const handleAudioChange = () => {
  //   setIndex(prev => prev + 1)
  // }

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player;