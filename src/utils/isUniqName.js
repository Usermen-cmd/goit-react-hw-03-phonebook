const isUniqueName = (name, names) => {
  let isUniq = true;
  names.forEach(el => {
    if (el.name === name) {
      isUniq = !isUniq;
    }
  });
  return isUniq;
};
export default isUniqueName;
