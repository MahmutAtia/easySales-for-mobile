import axios from "axios";
import React from "react";

export const useFetch = (server) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
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

export const useFetchToday = (server) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
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

  const refresh = () => { 
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
  }

   // get the company names that CALLED TODAY
   const callTodayCompanyNames = data.map((item) => item.company);
   const emailShoulBeSend = data.filter((item) => item.result.includes("EMAIL"))
   .map((item) => item.company);


  return [data, error, loading,callTodayCompanyNames,emailShoulBeSend, refresh];
};