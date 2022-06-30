import React, { useEffect, useState } from "react";

const CommentForm = ({ createNewComment, vidValue }) => {
    
    const [videoId, setVideoId] = useState(vidValue);
    const [text, setText] = useState("");
    const [likes, setLikes] = useState(0);
    const [dislikes, setdislikes] = useState(0);
    const [user_id, setUser_id] = useState(0);

    useEffect(() => {
        setUser_id(user_id);
    }, [vidValue]);

    function handleSubmit(event) {
        event.preventDefault();
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
        <div className="row m-2">
            <form className="form-group m-2" onSubmit={handleSubmit}>
                <h3>Add a new comment</h3>
                <div>
                    <label className="m-2">Comment</label>
                    <input className="m-2"
                        type="text"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </form>
        </div>
    );
};

export default CommentForm;
