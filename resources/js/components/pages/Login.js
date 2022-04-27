import React from "react";

function Login() {
    return (
        <div className="bg-neutral-50 scrollbar-hide">
            <main className="w-full h-screen bg-center bg-no-repeat bg-cover">
                <div className="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center" style={{ 'backgroundImage': "url('https://cdn.minimc.nl/wallpaper.png')"}}>
                    <div class="mx-auto w-[60%] min-h-[50%] my-1 text-center bg-white rounded-lg bg-opacity-60">
                        <div class="p-4">
                            <h1 className="text-6xl">Buy VIP</h1>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Login;