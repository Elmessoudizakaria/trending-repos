/*
 * File Created: Thursday, 22nd October 2020 3:29:12 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 22nd October 2020 3:29:12 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import   axios             from "axios"                  ;
import { diffDateFromNow } from "../utils/date.utils"    ;
import { kFormatter      } from "../utils/numberFormater";

/**
 *
 * @param {number} currentPage
 * get github trending repos in last 30 days and map it into a functional object
 */
export const getTrendingRepos = (currentPage = 0) => {
  let today = new Date();
  today.setDate(new Date().getDate()-30);
  const startSearchDate = today.toISOString().split('T')[0];

  return axios
    .get(
      `https://api.github.com/search/repositories?q=created:>${startSearchDate}&sort=stars&order=desc&page=${currentPage}`
    )
    .then((response) => {
      return response.data.items.map((item) => trendingRepoMapper(item));
    });
};

/**
 *
 * @param {Object} repo
 *  map github repo to a functional repo object
 *  more détails about data comming from github search api
 * @link https://developer.github.com/v3/search/#search-repositories
 */
const trendingRepoMapper = (repo) => {
  return {
    name             :            repo.name                                               ,
    description      :            repo.description                                        ,
    stars            : kFormatter(repo.stargazers_count)                                  ,
    issues           :            repo.has_issues       ? kFormatter(repo.open_issues) : 0,
    lastSubmittedTime: diffDateFromNow(new Date(repo.created_at))                         ,
    avatar           :            repo.owner.avatar_url                                   ,
    login            :            repo.owner.login                                        ,
  };
};
