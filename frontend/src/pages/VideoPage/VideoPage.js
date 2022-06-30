import { useParams } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import CommentList from "../../components/CommentList/CommentList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { googleAPIKeyA } from "../../keys";
import { googleAPIKeyB } from "../../keys";
import axios from "axios";
import { useState } from "react";

const VideoPage = () => {
    const { vidValue } = useParams();

    return (
        <div className=" ">
            <div className="grid">
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
