import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckIfLinked(redirect) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(app_url + '/api/linked')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                return navigate('/login')
            })
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isLoading) {
        if (data == "Minecraft Not Linked!" && redirect) {
            return navigate('/link')
        }
    }
    return null;
}

export default CheckIfLinked;