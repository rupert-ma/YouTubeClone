import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import VideoPage from "../../pages/VideoPage/VideoPage";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [user, token] = useAuth();
    const [videoId, setVideoId] = useState();
    const [searchTerm, setSearchTerm] = useState();
    const [searchResults, setSearchResults] = useState([]);

    let navigate = useNavigate();

    async function searchForVid(searchTerm) {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${searchTerm}&key=AIzaSyBcAfDdEbALrXHRcvT-GqoEyND9RK30RdI`
            );
            setSearchResults(response.data.items);
            console.log(searchResults);
        } catch (error) {
            console.log("Error in searchForVid");
        }
    }

    function handleOnClick(vidValue) {
        // console.log(vidValue)

        return navigate(`/VideoPage/${vidValue}`);
    }

    return (
        <div>
            <div>
                <SearchBar searchForVid={searchForVid} />
            </div>
            <div>
                Search Results
                {searchResults.map((result, index) => {
                    // console.log(result.id)
                    return (
                        // <iframe key={index}  id="ytplayer" type="text/html" width="640" height="360"
                        //     src={`https://www.youtube.com/embed/${result.id.videoId}`} frameBorder="0"
                        // ></iframe>
                        <div>
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

export default HomePage;
