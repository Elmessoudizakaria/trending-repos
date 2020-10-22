/*
 * File Created: Thursday, 22nd October 2020 3:01:25 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 22nd October 2020 3:01:25 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React, { useCallback, useEffect, useReducer, useRef } from "react";
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
  //   check if last element is visible
  const observer = useRef();
  const lastRepoElementRef = useCallback(
    (node) => {
      if (state.isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(handleObserver);
      if (node) observer.current.observe(node);
    },
    [state.isLoading]
  );
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      if (!state.isError) {
        dispatch({ type: LOAD_REPOS });
      } else {
        bouncerRetry();
      }
    }
  };

  const bouncerRetry = () => {
    setTimeout(() => {
      dispatch({ type: LOAD_REPOS });
    }, 3000);
  };
  return (
    <div>
      <h2>Repo Container</h2>
      <ul>
        {state.repos.map((repo, index) => {
          if (state.repos.length === index + 1) {
            return (
              <div key={index} ref={lastRepoElementRef}>
                <TrendingRepoItem repo={repo} />
              </div>
            );
          } else {
            return <TrendingRepoItem repo={repo} key={index} />;
          }
        })}
      </ul>
      {state.isLoading && <Loader />}
      {state.isError && <h3>Rate limit exceeded</h3>}
    </div>
  );
};

export default TrendingRepos;
