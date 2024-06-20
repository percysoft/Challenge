import { useState } from 'react';

const useAsyncState = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const executeAsyncFunction = async (asyncFunction: () => Promise<void>) => {
    setLoading(true);
    try {
      await asyncFunction();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {loading, error, executeAsyncFunction};
};

export default useAsyncState;
