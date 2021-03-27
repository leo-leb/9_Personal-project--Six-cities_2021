export const getFilteredOffersById = (offers, id) => {
  return offers.find((offer) => {
    return offer.id === id;
  });
};

export const getUpdatedOffer = (offers, id) => {
  return offers.find((offer) => {
    return offer.id === id;
  });
};

export const getFilteredOffersByCity = (offers, city) => {
  return offers.filter((offer) => {
    return offer.city.name === city.name;
  });
};

export const getFilteredOffersByPriceIncrease = (offers) => {
  return offers.sort((a, b) => {
    return a.price - b.price;
  });
};

export const getFilteredOffersByPriceReduce = (offers) => {
  return offers.sort((a, b) => {
    return b.price - a.price;
  });
};

export const getFilteredOffersByRate = (offers) => {
  return offers.sort((a, b) => {
    return b.rating - a.rating;
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

export const getFavoriteOffersByCity = (offers, city) => {
  return offers.filter((offer) => {
    return offer.city.name === city && offer.isFavorite;
  });
};

export const getFilteredReviews = (array) => {
  return array.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  }).slice(0, 10);
};
