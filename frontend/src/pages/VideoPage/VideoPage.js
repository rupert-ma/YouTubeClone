import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"; 
import { googleAPIKeyB } from "../../keys";


const VideoPage = () => {
    const { vidValue } = useParams();

    async function searchForVid(vidValue) {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${vidValue}&key=${googleAPIKeyB}`
            );
        } catch (error) {
            console.log("Error in searchForVid");
        }
    }

    return (
         <VideoPlayer vidValue={vidValue} />
         
    )
};

export default VideoPage;
