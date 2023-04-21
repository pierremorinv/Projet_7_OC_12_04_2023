import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);

  const [isLoading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(url);

      const data = await response.json();

      setData(data);
    } catch (err) {
      console.log(err);

      setError(true);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (!url) return;

    fetchData(url);
  }, [url]);

  return { isLoading, data, error };
}

export default useFetch;
