import React, { Fragment } from "react";

class Page extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="bg-neutral-50 scrollbar-hide">
                    <main className="w-full h-screen bg-center bg-no-repeat bg-cover">
                        <div className="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center" style={{ 'backgroundImage': "url('https://cdn.minimc.nl/wallpaper.png')" }}>
                            <div className="mx-auto transition-all w-[90%] lg:w-[60%] min-h-[30%] my-1 text-center text-white bg-black rounded-lg bg-opacity-60">
                                <div className="p-6 h-full">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </Fragment>
        )
    }
};

export default Page;