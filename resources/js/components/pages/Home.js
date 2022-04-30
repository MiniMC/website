import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div className="bg-neutral-50 scrollbar-hide">
            <main className="w-full h-screen bg-center bg-no-repeat bg-cover">
                <div className="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center bg-center" style={{ 'backgroundImage': "url('https://cdn.minimc.nl/wallpaper.png')"}}>
                    <div className="mx-4 text-center text-white">
                        <img src="https://cdn.minimc.nl/banner-cropped.png" className="transition-all w-3/4 md:w-1/2 mx-auto"></img>
                        <div>
                            <a href="https://discord.gg/CAV4RQh2pU"><i className="fab fa-discord text-4xl mx-2"></i></a>
                            <button onClick={() => {alert('Use the IP: play.minimc.nl in Minecraft.')}}><i className="fas fa-gamepad text-4xl mx-2"></i></button>
                            {/* <NavLink to='/store'><i className="fas fa-basket-shopping text-4xl mx-2"></i></NavLink> */}
                            <NavLink to="/me"><i className="fas fa-user text-4xl mx-2"></i></NavLink>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;