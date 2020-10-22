/*
 * File Created: Thursday, 22nd October 2020 3:29:12 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 22nd October 2020 3:29:12 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import axios from "axios";
import moment from "moment";
import { kFormatter } from "../utils/numberFormater";

/**
 *
 * @param currentPage number
 * get github trending repos in last 30 days and map it into a functional object
 */
export const getTrendingRepos = (currentPage = 0) => {
  const startSearchDate = moment().subtract(30, "days").format("YYYY-MM-DD");
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
 * @param  repo Object
 *  map github repo to a functional repo object
 *  more détails about data comming from github search api
 * @link https://developer.github.com/v3/search/#search-repositories
 */
const trendingRepoMapper = (repo) => {
  return {
    name: repo.name,
    description: repo.description,
    stars: kFormatter(repo.stargazers_count),
    issues: repo.has_issues ? kFormatter(repo.open_issues) : 0,
    lastSubmittedTime: moment(repo.created_at).fromNow(),
    avatar: repo.owner?.avatar_url,
    login: repo.owner?.login,
  };
};
