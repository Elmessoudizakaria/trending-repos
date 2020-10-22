/*
 * File Created: Thursday, 22nd October 2020 3:01:25 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 22nd October 2020 3:01:25 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React, { useEffect, useReducer } from "react";
import Loader from "../../components/Loader";
import { getTrendingRepos } from "../../shared/services/trendingRepo.service";
import TrendingRepoItem from "./components/TrendingRepoItem";
import { LOAD_REPOS, LOAD_REPOS_FAILED, LOAD_REPOS_SUCCESS } from "./constants";
import { initialState, trendingRepoReducer } from "./reducer";

const TrendingRepos = () => {
  const [state, dispatch] = useReducer(trendingRepoReducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_REPOS });
  }, []);

  // load next page data
  useEffect(() => {
    if (state.isLoading) {
      getTrendingRepos(state.page + 1)
        .then((response) => {
          dispatch({ type: LOAD_REPOS_SUCCESS, value: response });
        })
        .catch((err) => {
          dispatch({ type: LOAD_REPOS_FAILED });
        });
    }
  }, [state.isLoading]);
  return (
    <div>
      <h2>Repo Container</h2>
      <ul>
        {state.repos.map((repo, index) => (
          <TrendingRepoItem repo={repo} key={index} />
        ))}
      </ul>
      <Loader />
    </div>
  );
};

export default TrendingRepos;
