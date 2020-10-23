/*
 * File Created: Thursday, 22nd October 2020 5:12:58 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 22nd October 2020 5:12:58 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React            from "react"             ;
import TrendingRepoItem from "./TrendingRepoItem";

export default function List({ repos, lastRepoElementRef }) {
  return (
    <ul>
      {repos.map((repo, index) => {
        if (repos.length === index + 1) {
          return (
            <div key={index} ref={lastRepoElementRef}>
              <TrendingRepoItem {...repo} />
            </div>
          );
        } else {
          return <TrendingRepoItem {...repo} key={index} />;
        }
      })}
    </ul>
  );
}
