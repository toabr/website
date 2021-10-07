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