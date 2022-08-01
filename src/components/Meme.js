import '../style/Meme.css'
import React from 'react'

export default function Meme(){
    const [Meme, setMeme] = React.useState({
        topText: "One doess not simply", 
        bottomText: "Walk into Mordor", 
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })
    
    const [allMemeData, setAllMemeData] = React.useState([])
    
    React.useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemeData(data.data.memes))
        console.log('Api fetched')
    }, [])

    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    function randomUrl(){
        const randomNumber = Math.floor(Math.random() * allMemeData.length)
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: allMemeData[randomNumber].url
            } 
        })
    }
    

    return(
        <div className='meme'>
            <div className='form--container'>
                <div className='input--container'>
                    <input 
                        type='text' 
                        className='form-input' 
                        placeholder='Upper-text'
                        value={Meme.topText}
                        name="topText"
                        onChange={handleChange}
                    />
                    <input 
                        type='text' 
                        className='form-input' 
                        placeholder='Bottom-text'
                        value={Meme.bottomText}
                        name="bottomText"
                        onChange={handleChange}
                    />
                </div>
                <button 
                    className='form-button'
                    onClick = {randomUrl}
                >
                    Get a new image
                </button>
            </div>
            <div className='meme-container'>
                <img className='meme--img' src={Meme.randomImage} alt=''/>
                <h2 className="meme--text top">{Meme.topText}</h2>
                <h2 className="meme--text bottom">{Meme.bottomText}</h2>
            </div>
        </div>
    ) 
}