/*
 * File Created: Thursday, 22nd October 2020 3:01:25 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 22nd October 2020 3:01:25 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { getTrendingRepos } from "../../shared/services/trendingRepo.service";
import TrendingRepoItem from "./components/TrendingRepoItem";

const TrendingRepos = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    getTrendingRepos(1)
      .then((response) => setRepos((prevRepos) => [...prevRepos, ...response]))
      .catch();
  }, []);
  return (
    <div>
      <h2>Repo Container</h2>
      <ul>
        {repos.map((repo,index) => (
          <TrendingRepoItem repo={repo} key={index}/>
        ))}
      </ul>
      <Loader />
    </div>
  );
};

export default TrendingRepos;
