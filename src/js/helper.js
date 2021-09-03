export const handleLocalStore = ({ key, value }) => {
  if (typeof (Storage) === "undefined") return;

  if(key && value) localStorage.setItem(key, value);
  return localStorage.getItem(key);
}

export const formatUTC = (date) => {
  const formated = new Date(date)
  return formated.toLocaleDateString()
} 

export const toLocalDate = (timeStamp) => {
  const date = new Date(timeStamp * 1000);
  // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // return (`${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`);
  return date.toLocaleString()
} 

export const stripTags = string => {
  return string.split(', ').map(tag => {
      return {
          tid: tag.split(':')[0],
          title: tag.split(':')[1],
      }
  });
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

// add tag titles to node element
export const addTagTitles = (fieldTags, tagList) => fieldTags.map(tag => {
  // find corresponding id in tag list
  const match = tagList.find(ele => ele.tid == tag.target_id)
  return {...tag, title: match.title}
})