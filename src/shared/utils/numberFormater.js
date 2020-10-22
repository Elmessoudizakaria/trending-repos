/*
 * File Created: Thursday, 22nd October 2020 4:55:42 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 22nd October 2020 4:55:42 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
/**
 * 
 * @param {number} num
 * format thousands into k 
 */
export const kFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(2) + "k"
    : Math.sign(num) * Math.abs(num);
};
