const getFilteredOffersByCity = (offers, city) => {
  return offers.filter((offer) => {
    return offer.city === city.name;
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
    return b.rate - a.rate;
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
    return offer.city === getUpdatedOffer(offers, id).city;
  }).slice(0, 3);
};

const getCitiesListFromOffers = (offers) => {
  let cities = [];
  offers
    .filter((offer) => {
      return offer.status === `favorite`;
    })
    .forEach((offer) => {
      if (cities.includes(offer.city) !== true) {
        cities.push(offer.city);
      }
    });
  return cities;
};

export {getFilteredOffersByCity, getFilteredOffersById, getFilteredOffersByPriceIncrease, getFilteredOffersByPriceReduce, getFilteredOffersByRate, getUpdatedOffer, getFilteredReviewsByOffer, getThreeNeighboringOffers, getCitiesListFromOffers};
