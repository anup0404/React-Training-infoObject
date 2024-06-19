import React, { useRef, useState,  } from 'react';

type VideoPlayerProps = {
  src: string;
  isPlaying: boolean;
};

const SynchronizingWithEffect: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [text,setText]=useState<string>('')

  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={isPlaying}
      />
      
      <button onClick={()=>console.log("click")}>hello</button>
      <input type='text'
      
      onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value);
      }}/>
      {text}
    </>
  );
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, isPlaying }) => {
  const ref = useRef<HTMLVideoElement>(null);
 
    if (ref.current !==null) {
       
      if (isPlaying) {
         console.log("hello")
        ref.current.play();
      } else {
        console.log("not hello")
        ref.current.pause();
      }
    }


  return <video ref={ref} src={src} />;
};

export default SynchronizingWithEffect;
