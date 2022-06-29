import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { googleAPIKeyB } from "../../keys";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import CommentList from "../../components/CommentList/CommentList";
import CommentForm from "../../components/CommentForm/CommentForm";
import PrivateRoute from "../../utils/PrivateRoute";

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
