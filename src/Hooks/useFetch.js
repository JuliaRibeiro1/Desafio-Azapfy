import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false)
    async function fetchData() {
    try {
      setError(null);
      setLoading(true);
      const response = await fetch("http://homologacao3.azapfy.com.br/api/ps/metahumans");
      const json = await response.json();

      if (response.ok === false) {
        throw new Error(json.message);
      }

      setData(json);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error
  };
};

export default useFetch;

