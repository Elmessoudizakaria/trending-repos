/*
 * File Created: Thursday, 22nd October 2020 3:01:37 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 22nd October 2020 3:01:37 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React from "react";

const TrendingRepoItem = (repo) => {
  return (
    <li className="list-group-item">
      <div className="item-card">
        <div className="row">
          <div className="col-md-2">
            <img
              src={repo.repo.avatar}
              alt="avatar"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-10">
            <div>
              <h3>{repo.repo.name}</h3>
              <p>{repo.repo.description}</p>
              <div>
                <label className="sm-box">Stars {repo.repo.stars}</label>
                <label className="sm-box">Issues {repo.repo.issues}</label>
                <label>Submitted {repo.repo.lastSubmittedTime}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TrendingRepoItem;