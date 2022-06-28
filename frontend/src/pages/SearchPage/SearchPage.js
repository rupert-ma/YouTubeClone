import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomePage = () => {
    const [user, token] = useAuth();
    // const [videoId, setVideoId] = useState();
    const [searchTerm, setSearchTerm] = useState();
    const [searchResults, setSearchResults] = useState([]);

    async function searchForVid(searchTerm) {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${searchTerm}&key=`
            );
            setSearchResults(response.data.items);
            console.log(searchResults)
        } catch (error) {
            console.log("Error in searchForVid");
        }
    }

    return (
        
        <div>
            <div>
                <SearchBar searchForVid={searchForVid} />
            </div>
            <div>
                Search Results
                {searchResults.map((result, index) => {
                    console.log(result.id)
                    let vidId = result.id
                    return (
                        <iframe key={index}
                            src={`https://www.youtube.com/embed/${result.id.videoId}`}
                        ></iframe>
                    );
                })} 
                {/* <iframe src={`https://www.youtube.com/embed/${searchResults.data.items[0].id.videoId}`}>
                
                </iframe> */}
            </div>
        </div>
    );
};

export default HomePage;
