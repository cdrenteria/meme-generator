import React from "react"
import Memes from "./meme-data"

function handleButtonClick() {
    let data = Memes;
    let memesArray = data.data.memes;
    let newMeme = memesArray[Math.floor(Math.random() * 100)];
    return newMeme;
}

export default function Meme(){
    return(
        <div className="main-content">
            <form className="meme-form">
                <div className="meme-inputs">
                    <input/>
                    <input /> 
            </div>
            </form>
            <button className="new-img-btn" onClick={handleButtonClick}>Get new meme image</button>
        </div>
    )
}