import axios from "axios";
import React from "react";

export const useFetch = (server) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    console.log("i am fetching todays data")
    setLoading(true);
    const endpoint = server;
    axios
      .get(endpoint)
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [server]);

  return [data, error, loading];
};

export const useFetchV2 = (url) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const endpoint = url;
    axios
      .get(endpoint)
      .then((response) => {
        setData(response.data.results);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return [data, error, loading];
};
