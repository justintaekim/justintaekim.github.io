import { useEffect, useState } from "react";

const useFetchFact = () => {
  const [fact, setFact] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFact = async () => {
      try {
        const res = await fetch(
          "https://uselessfacts.jsph.pl/api/v2/facts/today?language=en",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch fact");
        }
        const data = await res.json();
        setFact(data.text);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFact();
  }, []);

  return { fact, error, loading };
};

export default useFetchFact;
