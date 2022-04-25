import React from "react";

function Home() {
    return (
        <div class="bg-neutral-50 scrollbar-hide">
            <header class="w-full h-screen bg-center bg-no-repeat bg-cover">
                <div class="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center" style={{ 'backgroundImage': "url('https://minimc.nl/i/wallpaper.png')"}}>
                    <div class="mx-4 text-center text-white">
                        <img src="https://minimc.nl/i/banner-cropped.png" class="w-1/2 mx-auto"></img>
                        <div>
                            <a href="https://discord.gg/CAV4RQh2pU"><i class="fab fa-discord text-4xl mx-2"></i></a>
                            <a href="https://github.com/minimc"><i class="fab fa-github text-4xl mx-2"></i></a>
                            <button onClick={() => {alert('Use the IP: play.minimc.nl in Minecraft.')}}><i class="fas fa-gamepad text-4xl mx-2"></i></button>
                        </div>
                    </div>
                </div>
            </header>{/* 
            <main class="mx-auto w-[60%] pb-32">
                sadasd
            </main> */}
        </div>
    );
}

export default Home;