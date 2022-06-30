import React, { Component } from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import VideoPage from "../../pages/VideoPage/VideoPage";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { googleAPIKeyA } from "../../keys";
import { googleAPIKeyB } from "../../keys";

const SearchPage = () => {
    const [user, token] = useAuth();
    const [videoId, setVideoId] = useState();
    const [searchTerm, setSearchTerm] = useState();
    const [searchResults, setSearchResults] = useState([]);

    let navigate = useNavigate();

    async function searchForVid(searchTerm) {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${searchTerm}&key=${googleAPIKeyA}`
            );
            setSearchResults(response.data.items);
            console.log(searchResults);
        } catch (error) {
            console.log("Error in searchForVid");
        }
    }

    function handleOnClick(selectedVidValue) {
        // console.log(vidValue)

        return navigate(`/VideoPage/${selectedVidValue}`);
    }

    return (
        <div className="d-flex row">
            <div className="">
                <SearchBar searchForVid={searchForVid} />
            </div>
            <div className="d-flex">
                {searchResults.map((result, index) => {
                    return (
                        <div key={index}>
                            <a
                                href={""}
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

export default SearchPage;
