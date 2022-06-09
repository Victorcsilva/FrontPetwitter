import { postsget } from "../services/auth_posts";
import React from "react";

function postsfeed() {
    const handleSubmit = async (event) =>{
    try{ event.preventDefault();
        const formData = new FormData(event.target)
        const name =formData.get("name")
        const username =formData.get("username")
        const posts =formData.get("posts")
const data={
    name,
    username,
    posts
    }
    
    console.log(data);
    await postsget(data)
} catch (error){
    console.log(error.message)



    
}