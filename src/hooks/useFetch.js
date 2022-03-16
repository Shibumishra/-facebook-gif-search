import { useEffect, useState } from 'react';

import { apiKey, CHANGE_ME_STRING } from '../components/apiKey';
import { searchURI } from '../components/constants';

export default function useGiphy(query) {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(`useEffect called with query => '${query}'`);

    async function searchGiphy() {
      setIsLoading(true);
      try {
        const response = await fetch(`${searchURI}&q=${query}`);
        const json = await response.json();
        setResults(
          json.data.map(item => {
            return item.images.preview.mp4;
          })
        );
      } catch (error) {
        if (apiKey === CHANGE_ME_STRING) {
          setError(
            new Error(
              'Giphy API key is not set. Please set it before using the search function.'
            )
          );
        } else {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query !== '') {
      searchGiphy();
    }
  }, [query]);

  return [results, error, isLoading];
}