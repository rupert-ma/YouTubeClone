import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import { Routes, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PrivateRoute from "../../utils/PrivateRoute";

const CommentList = ({ vidValue }) => {
    const [user, token] = useAuth();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getAllComments(vidValue);
    }, [vidValue]);

    async function getAllComments(vidValue) {
        try {
            let response = await axios.get(
                `http://127.0.0.1:8000/api/ytclone/${vidValue}`
            );
            setComments(response.data);
            console.log(comments);
        } catch (ex) {
            console.log("Error in getAllSongs API Call!");
        }
    }

    async function createNewComment(comment) {
        try {
            let response = await axios.post(
                `http://127.0.0.1:8000/api/ytclone/post/`,
                comment,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            getAllComments(vidValue);
        } catch (ex) {
            console.log("Error in creatNewComment API Call");
        }
    }

    async function handleLike(comment, event) {
        event.preventDefault();
        comment.likes = comment.likes + 1;
        try {
            await axios.put(
                `http://127.0.0.1:8000/api/ytclone/put/${comment.id}`,
                comment,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            getAllComments(vidValue);
        } catch (ex) {
            console.log("Error in likeComment API Call");
        }
    }

    async function handleDislike(comment, event) {
        event.preventDefault();
        comment.dislikes = comment.dislikes + 1;

        try {
            await axios.put(
                `http://127.0.0.1:8000/api/ytclone/put/${comment.id}`,
                comment,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            getAllComments(vidValue);
        } catch (ex) {
            console.log("Error in likeComment API Call");
        }
    }

    return (
        <div className="d-flex row m-2">
            <h3>Comments</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        {/* <th>User</th> */}
                        <th>Text</th>
                        <th>Likes</th>
                        <th>Dislikes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((comment, index) => {
                        return (
                            <tr key={index}>
                                {/* <th>{comment.user_id}</th> */}
                                <td>{comment.text}</td>
                                <td>{comment.likes}</td>
                                <td>{comment.dislikes}</td>
                                {user ? (
                                    <td>
                                        <button
                                            className="btn btn-outline-primary btn-sm"
                                            value={index}
                                            onClick={(e) =>
                                                handleLike(comment, e)
                                            }
                                        >
                                            Like
                                        </button>
                                        <button
                                            className="btn btn-outline-danger btn-sm"
                                            value={index}
                                            onClick={(e) =>
                                                handleDislike(comment, e)
                                            }
                                        >
                                            Dislike
                                        </button>
                                    </td>
                                ) : (
                                    <td></td>
                                )}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {user ? (
                <CommentForm
                    vidValue={vidValue}
                    createNewComment={createNewComment}
                />
            ) : (
                <p>Login to post a comment</p>
            )}
        </div>
    );
};

export default CommentList;
