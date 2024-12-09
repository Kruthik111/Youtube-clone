import { useEffect, useRef, useState } from "react";

export const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(`${BASE_URL}/${url}`, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      // console.log(result.items);
      setData(result.items);
      setError(null);
    } catch (e) {
      setError(`${e}. Some Error Occured`);
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
}
