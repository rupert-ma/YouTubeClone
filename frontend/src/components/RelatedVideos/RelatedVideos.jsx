import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { googleAPIKeyB } from "../../keys";

const RelatedVideos = ({ vidValue }) => {
    const [relatedVideos, setRelatedVideos] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        getRelatedVideos(vidValue);
    }, [vidValue]);

    async function getRelatedVideos(vidValue) {
        // console.log(vidValue);
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${vidValue}&type=video&key=${googleAPIKeyB}`
            );
            setRelatedVideos(response.data.items);
        } catch (error) {
            console.log("Error in getRelatedVideos");
        }
    }

    function handleOnClick(selectedVidValue) {
        // console.log(vidValue)

        return navigate(`/VideoPage/${selectedVidValue}`);
    }

    return (
        <div>
            <div> Related videos sends to new video page</div>
            <div>
                {relatedVideos.map((result, index) => {
                    // console.log(result.id)
                    return (
                        <div key={index}>
                            <a
                                href={"#"}
                                onClick={() => handleOnClick(result.id.videoId)}
                                key={index}
                            >
                                <img
                                    key={index}
                                    style={{ margin: 5 }}
                                    src={`https://i.ytimg.com/vi/${result.id.videoId}/default.jpg`}
                                />
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RelatedVideos;