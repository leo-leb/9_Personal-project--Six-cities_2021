const getFilteredOffersByCity = (offers, city) => {
  return offers.filter((offer) => {
    return offer.city.name === city.name;
  });
};

const getFilteredOffersById = (offers, id) => {
  return offers.find((offer) => {
    return offer.id === id;
  });
};

const getFilteredOffersByPriceIncrease = (offers, city) => {
  return getFilteredOffersByCity(offers, city).sort((a, b) => {
    return a.price - b.price;
  });
};

const getFilteredOffersByPriceReduce = (offers, city) => {
  return getFilteredOffersByCity(offers, city).sort((a, b) => {
    return b.price - a.price;
  });
};

const getFilteredOffersByRate = (offers, city) => {
  return getFilteredOffersByCity(offers, city).sort((a, b) => {
    return b.rating - a.rating;
  });
};

const getUpdatedOffer = (offers, id) => {
  return offers.find((offer) => {
    return offer.id === id;
  });
};

const getFilteredReviewsByOffer = (reviews, id) => {
  return reviews.filter((review) => {
    return review.forId === id;
  });
};

const getThreeNeighboringOffers = (offers, id) => {
  return offers.filter((offer) => {
    return offer.city.name === getUpdatedOffer(offers, id).city.name;
  }).slice(0, 3);
};

export {getFilteredOffersByCity, getFilteredOffersById, getFilteredOffersByPriceIncrease, getFilteredOffersByPriceReduce, getFilteredOffersByRate, getUpdatedOffer, getFilteredReviewsByOffer, getThreeNeighboringOffers};
