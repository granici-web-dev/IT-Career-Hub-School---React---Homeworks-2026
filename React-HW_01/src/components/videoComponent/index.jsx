import video from '../../assets/videos/mcdonalds_logo.mp4';
ç
function VideoComponent() {
  return (
    <div>
      <video width={320} height={240}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoComponent;
