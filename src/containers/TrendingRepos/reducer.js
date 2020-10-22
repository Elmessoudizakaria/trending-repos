/*
 * File Created: Thursday, 22nd October 2020 4:02:29 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 22nd October 2020 4:02:30 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */

import { LOAD_REPOS, LOAD_REPOS_FAILED, LOAD_REPOS_SUCCESS } from "./constants";

export const initialState = {
  repos    : []   ,
  page     : 0    ,
  isError  : false,
  isLoading: false,
};
export const trendingRepoReducer = (state = initialState,action) => {
  switch (action.type) {
    case LOAD_REPOS:
      return { 
        ...state    ,
           isLoading: true,
           isError  : false 
      };
    case LOAD_REPOS_SUCCESS:
      return {
        ...state                     ,
           isLoading: false          ,
           isError  : false          ,
           page     : state.page + 1 ,
           repos    : [...state.repos, ...action.value],
      };
    case LOAD_REPOS_FAILED:
      return { 
        ...state    ,
           isLoading: false,
           isError  : true 
      };
    default:
      return state;
  }
};