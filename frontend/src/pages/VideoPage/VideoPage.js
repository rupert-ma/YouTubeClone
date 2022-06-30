import { useParams } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import CommentList from "../../components/CommentList/CommentList";
import SearchBar from "../../components/SearchBar/SearchBar";

const VideoPage = () => {
    const { vidValue } = useParams();

    return (
        <div className=" ">
            <SearchBar />
            <div className="d-flex">
                <div className="">
                    <VideoPlayer vidValue={vidValue} />
                </div>
                <div className="">
                    <RelatedVideos vidValue={vidValue} />
                </div>
            </div>

            <div className="">
                <div className="">
                    <CommentList vidValue={vidValue} />
                </div>
            </div>
        </div>
    );
};

export default VideoPage;
