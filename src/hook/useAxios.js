import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

function useAxios(configParams) {
  const [res, setRes] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataUsingAxios = async () => {
    await axios
      .request(configParams)
      .then((response) => {
        setIsLoading(true);
        setRes(response);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    fetchDataUsingAxios(configParams);
  }, []);

  return {
    res,
    isLoading,
    error,
  };
}

export default useAxios;
