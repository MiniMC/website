import React from "react";

function Home() {
    return (
        <div className="bg-neutral-50 scrollbar-hide">
            <header className="w-full h-screen bg-center bg-no-repeat bg-cover">
                <div className="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center" style={{ 'backgroundImage': "url('https://cdn.minimc.nl/wallpaper.png')"}}>
                    <div className="mx-4 text-center text-white">
                        <img src="https://cdn.minimc.nl/banner-cropped.png" className="w-1/2 mx-auto"></img>
                        <div>
                            <a href="https://discord.gg/CAV4RQh2pU"><i className="fab fa-discord text-4xl mx-2"></i></a>
                            <a href="https://github.com/minimc"><i className="fab fa-github text-4xl mx-2"></i></a>
                            <button onClick={() => {alert('Use the IP: play.minimc.nl in Minecraft.')}}><i className="fas fa-gamepad text-4xl mx-2"></i></button>
                        </div>
                    </div>
                </div>
            </header>{/* 
            <main className="mx-auto w-[60%] pb-32">
                sadasd
            </main> */}
        </div>
    );
}

export default Home;