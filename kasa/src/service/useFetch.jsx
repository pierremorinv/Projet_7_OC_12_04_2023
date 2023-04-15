import { useEffect, useState } from "react";
// import axios from "axios";

export function useFetch(url) {
  const [data, setData] = useState([]);

  const [isLoading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    setLoading(true);

    async function fetchData() {
      try {
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

    fetchData();
  }, [url]);

  return { isLoading, data, error };
}

//   // Le useEffect se joue lorsque le composant est monté
//   useEffect(() => {
//     axios.get("/assets/logements.json").then((res) => setData(res.data));
//   }, []);

export default useFetch;
