
module.exports = function getLoveTrianglesCount(preferences = []) {
  let n = preferences.length;
  let count = 0;
  for (let i= 0; i < n; i++){
    const one = preferences[i];
    const two = preferences[one - 1];
    const three = preferences[two - 1];
    if (three - 1 === i){
      count++;
    }
  }
  return Math.floor(count/3);
};


