import React, { useState } from "react";

const SearchBar = ({ searchForVid }) => {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSubmit(event) {
        event.preventDefault(event);
        console.log(searchTerm);
        searchForVid(searchTerm);
        // setSearchTerm("");
    }

    return (
        <div className="searchbar-container">
            <form onSubmit={handleSubmit}>
                <label>Video Search Bar</label>
                <input
                    type="text"
                    placeholder="Enter a term to search by"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                ></input>
                <button type="submit" className="button">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
