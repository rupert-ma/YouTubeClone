import { useParams } from "react-router-dom";

const VideoPage = () => {
    const { vidValue } = useParams();
    console.log(vidValue);

    return (
        <div>
            <h3>Hello From Video Page {vidValue}</h3>
            <iframe
                id="ytplayer"
                type="text/html"
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${vidValue}`}
                frameBorder="0"
            ></iframe>
        </div>
    );
};

export default VideoPage;
