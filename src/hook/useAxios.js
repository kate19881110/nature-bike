import { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3000";

function useAxios() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    let res;
    try {
      res = await axios({
        url: requestConfig.url,
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        data: requestConfig.data ? requestConfig.data : null,
      });
    } catch (errorData) {
      setError(errorData.message || 'Something went wrong!');
      console.log("errorData.message", errorData.message);
      if (errorData.message.includes("404")) {
        navigate("/404");
      }
    } finally {
      if (res) {
        applyData(res.data);
      }
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    sendRequest
  };
}

export default useAxios;
