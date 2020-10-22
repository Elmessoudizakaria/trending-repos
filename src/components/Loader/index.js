/*
 * File Created: Thursday, 22nd October 2020 2:58:41 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 22nd October 2020 2:58:41 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React from "react";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center py-4">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
export default Loader;
