import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomePage = () => {
    const [user, token] = useAuth();
    const [videoId, setVideoId] = useState();
    const [searchTerm, setSearchTerm] = useState();

    async function searchForVid(searchTerm) {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?${searchTerm}&key=`
            );
            console.log(response);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <div>
            <div>
                <SearchBar searchForVid={searchForVid} />
            </div>
            <div>
                YT Vid
                <iframe src={`https://www.youtube.com/embed/${searchTerm}`}>
                    {" "}
                </iframe>
            </div>
            <div> Recommended vids </div>
            <div>Comments Section</div>
        </div>
    );
};

export default HomePage;
