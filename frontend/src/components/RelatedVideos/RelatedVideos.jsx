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
        return navigate(`/VideoPage/${selectedVidValue}`);
    }

    return (
        <div className="">
            <h3> Related videos</h3>
            <div className="d-flex m-1">
                {relatedVideos.map((result, index) => {
                    return (
                        <div className=" card border-primary mb-3 m-1" key={index}>
                            <div className="card-header" >Related Video {index+1}</div>
                            <div className="card-body" >
                                <a
                                    href={""}
                                    onClick={() =>
                                        handleOnClick(result.id.videoId)
                                    }
                                    key={index}
                                >
                                    <img 
                                        key={index}
                                        style={{height:150 }}
                                        src={`https://i.ytimg.com/vi/${result.id.videoId}/default.jpg`}
                                    />
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RelatedVideos;
