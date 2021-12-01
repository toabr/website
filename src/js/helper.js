export const handleLocalStore = ({ key, value }) => {
  if (typeof (Storage) === "undefined") return;

  if (key && value) localStorage.setItem(key, value);
  return localStorage.getItem(key);
}

export const formatUTC = (date) => {
  if(!date) return
  const formated = new Date(date)
  return formated.toLocaleDateString()
}

export const orderByTitle = arr => {
  return arr.sort(function (a, b) {
    var nameA = a.title.toUpperCase(); // ignore upper and lowercase
    var nameB = b.title.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
}


/**
 * throttle events
 * @param {Function} fn function to run
 * @param {Number} delay in ms
 * @returns 
 * TODO: return a promise
 */
export const throttle = (fn, delay) => {
  let allowSample = true;

  return (e) => {
    if (allowSample) {
      allowSample = false;
      setTimeout(function () { allowSample = true; }, delay);
      fn(e);
    }
  }
}


/**
 * difference between date1 and date2 in days (date2 - date1)
 * @param {Date} date1 
 * @param {Date} date2 
 * @returns {Number} of Days
 */
function diffDays(date1, date2 = new Date()) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  // Discard the time and time-zone information.
  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

/**
 * calculate years month and days from days
 * @param {Number} numberOfDays 
 * @returns {String} of years month and days
 */
function diffDaysDisplay(numberOfDays) {
  const years = Math.floor(numberOfDays / 365);
  const months = Math.floor(numberOfDays % 365 / 30);
  const days = Math.floor(numberOfDays % 365 % 30);

  const yearsDisplay = years > 0 ? years + (years == 1 ? " year, " : " years, ") : "";
  const monthsDisplay = months > 0 ? months + (months == 1 ? " month, " : " months, ") : "";
  const daysDisplay = days > 0 ? days + (days == 1 ? " day" : " days") : "";
  
  let display = ''
  display += years > 0 ? yearsDisplay : ''
  display += months > 0 ? monthsDisplay : ''
  display += days > 0 ? daysDisplay : ''

  return display
}

/**
 * calculate years month and days from dates
 * @param {Date} date2 
 * @param {Date} date1 
 * @returns {String} of years month and days
 */
export const timeAgo = (date2, date1) => diffDaysDisplay(diffDays(date2, date1))
