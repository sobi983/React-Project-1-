import { useEffect, useState } from 'react';
import memesData from '../memeData'

export default function Memes(props) {
    let [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg",
    })

    let [memesData, setMemesData] = useState([])

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setMemesData(data.data.memes))
    }, [])

    let allMemesImages = memesData
    let randomNumber = Math.floor(Math.random() * 100)
    function getMemeImages() {
        setMeme(prevMeme => ({
            ...prevMeme, randomImage: allMemesImages[randomNumber].url
        }))
    }

    function imgText(event) {
        const { name, value } = event.target
        setMeme(prevMeme => {
            return { ...prevMeme, [name]: value }
        })
    }

    return (
        <div className='overflow-hidden'>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8 px-11">
                <input type="text" placeholder="Shut up" className="border border-fuchsia-200 rounded-md w-56 pl placeholder:italic indent-1" name="topText" value={meme.topText} onChange={imgText} />
                <input type="text" placeholder="Take money" className=" border border-fuchsia-200 rounded-md w-56 placeholder:italic indent-1" name="bottomText" value={meme.bottomText} onChange={imgText} />
                <button onClick={getMemeImages} type="submit" className="w-96 mx-10  text-white rounded-full border p-1 col-span-2 bg-gradient-to-r from-orange-400 from-10% via-pink-600 via-30% to-blue-800 via-50%">Get a new meme image  🖼</button>
            </div>


            <div className="flex justify-center mt-5 w-00 h-80">
                <img src={meme.randomImage} alt="" className=' relative max-w-full' />
                <h1 className="absolute mt-10 text-4xl text-black uppercase font-bold tracking-wide bg-white rounded-md " >{meme.topText}</h1>
                <h1 className="absolute mt-60 text-4xl text-black uppercase font-bold tracking-wide bg-white rounded-md " >{meme.bottomText}</h1>
            </div>
        </div>
    )
}