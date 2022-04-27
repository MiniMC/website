import React from "react";

function Link() {
    return (
        <>
            <h1 className="text-6xl mb-6">Linking Minecraft</h1>
            <span>Connecting your Minecraft to your MiniMC account. To link your account join MiniMC and type '/link' in chat, then click on the message and open the link. 
                <br/>You may need to connect to Discord if you haven't used the website before. Once you have done all of that your account will be linked!</span>
            <img class="mt-8 mx-auto align-middle block h-full" src="https://cdn.minimc.nl/link.gif"></img>
        </>
    );
}

export default Link;