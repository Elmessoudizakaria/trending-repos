/*
 * File Created: Thursday, 22nd October 2020 3:01:37 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 22nd October 2020 3:01:37 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React from 'react'

const TrendingRepoItem = (repo)=> {
    return (
       <li>
           <label>{repo.repo.name}</label>
       </li>
    )
}

export default TrendingRepoItem;