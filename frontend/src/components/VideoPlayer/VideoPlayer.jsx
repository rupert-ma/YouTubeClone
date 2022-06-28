import React, { useState } from "react";

const VideoPlayer = ({ vidValue }) => {
    return (
        <div>
            <h3>Hello From Video Player {vidValue}</h3>
            <iframe
                id="ytplayer"
                type="text/html"
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${vidValue}`}
                frameBorder="0"
            ></iframe>
            <div>Description here: </div>
        </div>
    );
};

export default VideoPlayer;
