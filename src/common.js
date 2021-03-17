const formatObjectKeys = (oldKey, object) => {
  if (oldKey.split(``).includes(`_`)) {
    let wordsArray = oldKey.split(`_`);
    let newKey = wordsArray.map((word) => {
      if (word === wordsArray[1]) {
        const updatedWord = word.split(``).map((letter) => {
          if (letter === word[0]) {
            return letter.toUpperCase();
          } else {
            return letter;
          }
        });
        return updatedWord.join(``);
      } else {
        return word;
      }
    }).join(``);
    delete Object.assign(object, {[newKey]: object[oldKey]})[oldKey];
  }
};

const dataObjectAdapter = (object) => {
  for (let key in object) {
    if ({}.hasOwnProperty.call(object, key)) {
      formatObjectKeys(key, object);
      for (let keySub in object[key]) {
        if ({}.hasOwnProperty.call(object[key], keySub)) {
          formatObjectKeys(keySub, object[key]);
        }
      }
    }
  }
  return object;
};

const dataArrayAdapter = (array) => {
  return array.map((item) => dataObjectAdapter(item));
};

export {dataObjectAdapter, dataArrayAdapter};
