/*
 * File Created: Thursday, 22nd October 2020 6:21:15 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 22nd October 2020 6:21:15 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */

export const diffDateFromNow = (date) => {
  const today = new Date();
  const diffDay = Math.round((today - date) / (1000 * 60 * 60 * 24));
  return `${diffDay} days ago`;
};
