const compareObj = (obj1, obj2) => {
  const objKeys = Object.keys(obj1);
  const result = false;

  if (obj1['name'] === obj2['name']) {
    return !result;
  }

  return result;
};

export const checkObjExest = (obj, arrObj) => {
  for (let pokeObj of arrObj) {
    if (compareObj(obj, pokeObj)) {
      return true;
    }
  }
  return false;
};
