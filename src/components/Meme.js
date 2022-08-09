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

    function handleChange(event){
        const {name, value, type} = event.target
        setMeme(prevState => {
            return{
                ...prevState,
                [name]:value
            }
        })
    }
    console.log(meme)
    return(
        <div className="main-content">
            <form className="meme-form">
                <div className="meme-inputs">
                    <input name="topText" value={meme.topText} onChange={handleChange}/>
                    <input name="bottomText" value={meme.bottomText} onChange={handleChange}/> 
            </div>
            </form>
            <button className="new-img-btn" onClick={getMemeImage}>Get new meme image</button>
            <div className="meme">
                <img className="meme-img" src={meme.randomImage} />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}
