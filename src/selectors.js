const getFilteredOffersById = (offers, id) => {
  return offers.find((offer) => {
    return offer.id === id;
  });
};

const getUpdatedOffer = (offers, id) => {
  return offers.find((offer) => {
    return offer.id === id;
  });
};

const getFilteredOffersByCity = (offers, city) => {
  return offers.filter((offer) => {
    return offer.city.name === city.name;
  });
};

const getFilteredOffersByPriceIncrease = (offers) => {
  return offers.sort((a, b) => {
    return a.price - b.price;
  });
};

const getFilteredOffersByPriceReduce = (offers) => {
  return offers.sort((a, b) => {
    return b.price - a.price;
  });
};

const getFilteredOffersByRate = (offers) => {
  return offers.sort((a, b) => {
    return b.rating - a.rating;
  });
};

const getCitiesFromOffers = (offers) => {
  let citiesList = [];
  offers
    .forEach((offer) => {
      if (citiesList.includes(offer.city.name) !== true) {
        citiesList.push(offer.city.name);
      }
    });
  return citiesList;
};

const getFavoriteOffersByCity = (offers, city) => {
  return offers.filter((offer) => {
    return offer.city.name === city && offer.isFavorite;
  });
};

export {getFilteredOffersByCity, getFilteredOffersById, getFilteredOffersByPriceIncrease, getFilteredOffersByPriceReduce, getFilteredOffersByRate, getUpdatedOffer, getCitiesFromOffers, getFavoriteOffersByCity};
