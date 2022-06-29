import React, { useEffect, useState } from "react";
import axios from "axios";
import { googleAPIKeyB } from "../../keys";

const VideoPlayer = ({ vidValue }) => {
    let [videoData, setVideoData]=useState([])

    useEffect(()=>{
        searchForVid(vidValue)
    }, [vidValue])

    async function searchForVid(vidValue) {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=1&type=video&id=${vidValue}&key=${googleAPIKeyB}`
            );
            setVideoData(response.data.items[0].snippet);
        } catch (error) {
            console.log(error.response.data);
        }
    }
    console.log(videoData);
    console.log(videoData);

    return (
        <div>
            <iframe
                id="ytplayer"
                type="text/html"
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${vidValue}`}
                frameBorder="0"
            ></iframe>
            <h3>Title: {videoData.title}</h3>
            <div>Description:{videoData.description} </div>
        </div>
    );
};

export default VideoPlayer;
