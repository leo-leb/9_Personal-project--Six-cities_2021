const getFilteredOffersByCity = (offers, city) => {
  return offers.filter((offer) => {
    return offer.city === city.name;
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

export {getFilteredOffersByCity, getUpdatedOffer, getFilteredReviewsByOffer, getThreeNeighboringOffers, getCitiesListFromOffers};
