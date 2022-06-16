interface IYoutubeProps {
  width?: number;
  height?: number;
  embedId: string;
  frameBorder?: number;
  title?: string;
}

const YoutubeEmbed = (props: IYoutubeProps) => (
  <div className="video-responsive">
    <iframe
      width={props.width ? props.width : 320}
      height={props.height ? props.height : 180}
      src={`https://www.youtube.com/embed/${props.embedId}?autoplay=1`}
      frameBorder={props.frameBorder ? props.frameBorder : "0"}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={props.title ? props.title : "Video"}
    />
  </div>
);

export default YoutubeEmbed;
