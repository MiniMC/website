import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Linked() {

    useEffect(() => {
        var textArray = [
            'https://c.tenor.com/7Ypq9_9najcAAAAd/thumbs-up-double-thumbs-up.gif',
            'https://c.tenor.com/83thdVyblF8AAAAd/thumbs-up-borat.gif',
            'https://c.tenor.com/QcrcBpXx3qYAAAAC/boy-kid.gif',
            'https://c.tenor.com/yvYyh_aS9esAAAAC/grilla-yes.gif',
            'https://c.tenor.com/Ptsoxt4w3uoAAAAC/good-yeah.gif',
            'https://c.tenor.com/1FEH1LPiJpYAAAAd/joey-joey-tribiani.gif',
            'https://c.tenor.com/3fTBWkv9OskAAAAC/thumbs-up-jim-carrey.gif',
            'https://c.tenor.com/svY_jCbqS7EAAAAC/gif.gif'
        ];
        var randomGif = Math.floor(Math.random()*textArray.length);
        
        document.getElementById("image").setAttribute('src', textArray[randomGif]);
    }, []);

    

    return (
        <>
            <h1 className="text-6xl mb-6">Success!</h1>
            <span>You have now successfully linked your Minecraft account!</span>
            <img src="" id="image" className="mx-auto rounded-lg my-8 max-w-[25%]"></img>
            <NavLink to='/' className="bg-transparent font-semibold py-2 px-4 border border-blue rounded mr-2">Return to home</NavLink>
        </>
    );
}

export default Linked;