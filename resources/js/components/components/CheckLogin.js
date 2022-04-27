import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckLogin() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get('https://minimc.nl/api/linked')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isLoading) {
        console.log(data);
        if (data == "Minecraft Not Linked!") {
            return navigate('/link')
        }
    }
    return null;
}

export default CheckLogin;