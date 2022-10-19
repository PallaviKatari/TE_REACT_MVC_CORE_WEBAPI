import React, { useEffect, useState } from "react";
import axios from "axios";

//Set a BaseURL
const productdetails=axios.create({
    baseURL:"https://fakestoreapi.com/products"
})
export default function AxiosAwaitAsync() {
    const [post, setPost] = useState('');

    useEffect(() => {
        async function getPost() {
            const response = await productdetails.get("/8");
            setPost(response.data)
        }
        getPost();
    }
    );

    return(
        <>
        <img src={post.image} style={{ height: 50, width: 50 }}></img>
        <p>{post.title}</p>
        </>
    )
}