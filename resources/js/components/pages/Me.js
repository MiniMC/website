import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import CheckIfLinked from "../components/CheckIfLinked";

function Me() {
    CheckIfLinked(true);

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(app_url + '/api/user')
            .then(response => {
                setData(response.data);
                setLoading(false);
                document.getElementById("avatar").setAttribute('src', "https://crafatar.com/renders/body/" + response.data.player.uuid + "?overlay");
            })
            .catch(function (error) {
                console.log(error)
                window.location.href = "/login";
            })
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1 className="text-6xl mb-6">About me</h1>
            <div className="flex w-full">
                <img className="w-[10%] mx-12 hidden lg:block" id="avatar"></img>
                <div className="lg:flex text-left">
                    <div className="mr-16">
                        <h3 className="text-3xl">User Info</h3>
                        Discord: <b>{data.user.username + "#" + data.user.discriminator}</b><br />
                        Minecraft: <b>{data.player.username}</b><br />
                        First Joined: <b>{data.player.created_at.substring(0, data.player.created_at.indexOf('T'))}</b><br />
                    </div>
                    <div className="mr-16">
                        <h3 className="text-3xl">The Walls</h3>
                        Wins: <b>{data.thewalls.wins}</b><br />
                        Loses: <b>{data.thewalls.loses}</b><br />
                        XP: <b>{data.thewalls.xp}</b><br />
                        Kills: <b>{data.thewalls.kills}</b><br />
                        Deaths: <b>{data.thewalls.deaths}</b><br />
                        First Played: <b>{data.thewalls.created_at.substring(0, data.thewalls.created_at.indexOf('T'))}</b><br />
                    </div>
                </div>
            </div>
            <NavLink to='/' className="bg-transparent font-semibold py-2 px-4 border border-blue rounded mr-2 mt-4 lg:mt-auto">Return to home</NavLink>
        </>
    );
}

export default Me;