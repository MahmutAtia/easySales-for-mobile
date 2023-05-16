import axios from "axios";
import React from "react";

export const useFetch = (url) => {

    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
  
    React.useEffect(() => {

        const endpoint = "https://f600-88-240-181-166.ngrok-free.app/mobile" + url;
        axios.get(endpoint).then((response) => {
            setData(response.data.results);
            setLoading(false);
        }).catch((error) => { 
            setError(error);
            setLoading(false);
        });     
        }, [url]);
    
    return { data, error, loading };
};