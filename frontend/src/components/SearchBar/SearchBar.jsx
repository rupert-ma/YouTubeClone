import React, { useState } from "react";

const SearchBar = ({ searchForVid }) => {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSubmit(event) {
        event.preventDefault(event);
        console.log(searchTerm);
        searchForVid(searchTerm);
    }

    return (
        <div className="m-2">
            <form className="form-group" onSubmit={handleSubmit}>
                <label className="m-2">Search Bar</label>
                <input
                    className="m-1 p-1"
                    type="text"
                    placeholder="Enter a term to search by"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                ></input>
                <button type="submit" className="btn btn-primary">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
