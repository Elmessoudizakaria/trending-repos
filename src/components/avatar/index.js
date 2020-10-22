/*
 * File Created: Thursday, 22nd October 2020 5:09:36 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 22nd October 2020 5:09:36 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React from 'react'

export default function Avatar({src}) {
    return (
        <div>
             <img
              src={src}
              alt="avatar"
             className="avatar"
            />
        </div>
    )
}
