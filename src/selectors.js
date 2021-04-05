export const getOfferById = (offers, id) => {
  return offers.find((offer) => {
    return offer.id === id;
  });
};

export const getOffersByCity = (offers, city) => {
  return offers.filter((offer) => {
    return offer.city.name === city.name;
  });
};

export const getFavoriteOffersByCity = (offers, city) => {
  return offers.filter((offer) => {
    return offer.city.name === city && offer.isFavorite;
  });
};

export const getOffersByPriceIncrease = (offers) => {
  return offers.sort((firstItem, secondItem) => {
    return firstItem.price - secondItem.price;
  });
};

export const getOffersByPriceDecrease = (offers) => {
  return offers.sort((firstItem, secondItem) => {
    return secondItem.price - firstItem.price;
  });
};

export const getOffersByRate = (offers) => {
  return offers.sort((firstItem, secondItem) => {
    return secondItem.rating - firstItem.rating;
  });
};

export const getCitiesFromOffers = (offers) => {
  let citiesList = [];
  offers
    .forEach((offer) => {
      if (citiesList.includes(offer.city.name) !== true) {
        citiesList.push(offer.city.name);
      }
    });
  return citiesList;
};

export const getTenReviewsByDateDecrease = (array) => {
  return array.slice().sort((firstItem, secondItem) => {
    return new Date(secondItem.date) - new Date(firstItem.date);
  }).slice(0, 10);
};
