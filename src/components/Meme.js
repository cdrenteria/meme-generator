import React from "react"
import Memes from "./meme-data"

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemeImages, setAllMemeImages] = React.useState(Memes)

    function getMemeImage() {
        let memesArray = allMemeImages.data.memes;
        let newMeme = memesArray[Math.floor(Math.random() * 100)];
        setMeme(prevMeme => {
            return{
                ...prevMeme, 
                randomImage: newMeme.url
            }
        })
    }

    return(
        <div className="main-content">
            <form className="meme-form">
                <div className="meme-inputs">
                    <input/>
                    <input /> 
            </div>
            </form>
            <button className="new-img-btn" onClick={getMemeImage}>Get new meme image</button>
            <img className="meme-img" src={meme.randomImage} />
        </div>
    )
}
