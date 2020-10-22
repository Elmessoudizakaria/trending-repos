/*
 * File Created: Thursday, 22nd October 2020 3:01:25 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 22nd October 2020 3:01:25 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React from "react";
import Loader from "../../components/Loader";
import TrendingRepoItem from "./components/TrendingRepoItem";

const TrendingRepos = () => {
  return (
    <div>
      <h2>Repo Container</h2>
      <TrendingRepoItem />
      <Loader/>
    </div>
  );
};

export default TrendingRepos;
