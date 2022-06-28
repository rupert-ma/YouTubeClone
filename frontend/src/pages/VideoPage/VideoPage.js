import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { googleAPIKeyB } from "../../keys";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";

const VideoPage = () => {
    const { vidValue } = useParams();

    return (
        <div>
            <VideoPlayer vidValue={vidValue} />
            <RelatedVideos vidValue={vidValue} />
        </div>
    );
};

export default VideoPage;
