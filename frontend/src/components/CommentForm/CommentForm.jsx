import React, { useEffect, useState } from "react";

const CommentForm = ({ createNewComment, vidValue }) => {
    const [videoId, setVideoId] = useState("");
    const [text, setText] = useState("");
    const [likes, setLikes] = useState(0);
    const [dislikes, setdislikes] = useState(0);
    const [user_id, setUser_id] = useState(0);

    useEffect(() => {
        setVideoId(vidValue);
        setUser_id(user_id);
    }, [vidValue]);

    function handleSubmit(event) {
        event.prevent.default();
        let newComment = {
            video_id: videoId,
            text: text,
            likes: likes,
            dislikes: dislikes,
            user_id: user_id,
        };
        createNewComment(newComment);
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a new comment</h3>
            <div>
                <label>Comment</label>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
            </div>
            <button type="submit" className="button">
                Submit
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </form>
    );
};

export default CommentForm;
