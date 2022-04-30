import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function NotFound() {

    useEffect(() => {
        var textArray = [
            'https://media4.giphy.com/media/xCwYFe19SldXLrJlwm/giphy.gif',
            'https://media2.giphy.com/media/Ta3v3I4GI1gH7Rqek6/giphy.gif',
            'https://media4.giphy.com/media/clupdT5vHL9GifMlnC/200w.webp',
            'https://media4.giphy.com/media/l2JhORT5IFnj6ioko/100.webp',
            'https://media2.giphy.com/media/VMHangSajZV6yiC9ZV/giphy.webp',
            'https://media1.giphy.com/media/3zDdFSPALuCe6C43nM/200w.webp',
            'https://media3.giphy.com/media/OQrx03s8VwOl7XmfiZ/200w.webp',
            'https://media4.giphy.com/media/5n26EW5p9lWGafPdbf/200w.webp'
        ];
        var randomGif = Math.floor(Math.random()*textArray.length);
        
        document.getElementById("image").setAttribute('src', textArray[randomGif]);
    }, []);


    return (
        <>
            <h1 className="text-6xl mb-6">404</h1>
            <span>Sorry, but we couldn't find that page. This page may not exits anymore or the url maybe misspelled.</span>
            <img src="" id="image" className="mx-auto rounded-lg my-8 w-[25%]"></img>
            <NavLink to='/' className="bg-transparent font-semibold py-2 px-4 border border-blue rounded mr-2">Return to home</NavLink>
        </>
    );
}

export default NotFound;