import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Dashboard = () => {
  const [movies, setMovies] = useState([]);
  const url = "https://hoblist.com/api/movieList";
  const fetchData = async () => {
    const result = await axios.post(url, {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    });
    setMovies(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(movies.result);
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Kannada Movies</h1>
      <Card movies={movies} />
    </div>
  );
};

export default Dashboard;
