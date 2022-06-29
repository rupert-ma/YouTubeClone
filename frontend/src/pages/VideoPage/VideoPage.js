import { useParams } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import CommentList from "../../components/CommentList/CommentList";

const VideoPage = () => {
    const { vidValue } = useParams();

    return (
        <div>
            <VideoPlayer vidValue={vidValue} />
            <RelatedVideos vidValue={vidValue} />
            <CommentList vidValue={vidValue} />
        </div>
    );
};

export default VideoPage;
