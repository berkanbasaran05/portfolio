import { useState,useEffect } from "react";

const [loading, setLoading] = useState(false);
const [allPosts, setAllPosts] = useState(null);

const [searchText, setSearchText] = useState('');
const [searchTimeout, setSearchTimeout] = useState(null);
const [searchedResults, setSearchedResults] = useState(null);
const fetchPosts = async () => {
  setLoading(true);

  try {
    const response = await fetch('http://localhost:8080/api/skill', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const result = await response.json();
      setAllPosts(result.data.reverse());
    }
  } catch (err) {
    alert(err);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchPosts();
}, []);
