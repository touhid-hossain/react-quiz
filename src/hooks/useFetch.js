import React, { useEffect, useState } from "react";

const useFetch = (url, method, headers) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function requestFetch() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(url, {
          method: method || "GET",
          headers: headers,
        });
        const data = await response.json();
        setLoading(false);
        setResult(data);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    }

    requestFetch();
  }, []);
 
  return {
    loading,
    error,
    result,
  };
};

export default useFetch;
