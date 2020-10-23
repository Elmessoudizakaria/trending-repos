/*
 * File Created: Thursday, 22nd October 2020 3:01:37 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 22nd October 2020 3:01:37 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React  from "react"                     ;
import Avatar from "../../../components/avatar";

const TrendingRepoItem = (repo) => {
  return (
    <li className="list-group-item">
      <div className="item-card">
        <div className="row">
          <div className="col-md-2">
           <Avatar src={repo.avatar}/>
          </div>
          <div className="col-md-10">
            <div>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div>
                <label className="sm-box">Stars {repo.stars}</label>
                <label className="sm-box">Issues {repo.issues}</label>
                <label>Submitted {repo.lastSubmittedTime}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TrendingRepoItem;