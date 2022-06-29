import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import { Routes, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PrivateRoute from "../../utils/PrivateRoute";

const CommentList = ({ vidValue }) => {
    const [user, token] = useAuth();
    const [comments, setComments] = useState([]);
    console.log(token)

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
        console.log(comment);
        try {
            let response = await axios.post(
                `http://127.0.0.1:8000/api/ytclone/post/`, comment,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                },
                
            );
            getAllComments(vidValue);
        } catch (ex) {
            console.log("Error in creatNewComment API Call");
        }
    }

    return (
        <div>
            <h3>Comments</h3>
            <table>
                <thead>
                    <tr>
                        {/* <th>User</th> */}
                        <th>Text</th>
                        <th>Likes</th>
                        <th>Dislikes</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((comment, index) => {
                        return (
                            <tr key={index}>
                                {/* <th>{comment.user_id}</th> */}
                                <th>{comment.text}</th>
                                <th>{comment.likes}</th>
                                <th>{comment.dislikes}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <PrivateRoute>
                <CommentForm
                    vidValue={vidValue}
                    createNewComment={createNewComment}
                />
            </PrivateRoute>
        </div>
    );
};

export default CommentList;
