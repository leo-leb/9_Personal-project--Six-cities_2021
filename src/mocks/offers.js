const offers = [
  {
    id: 1,
    isPremium: true,
    isFavorite: false,
    location: {
      lat: 52.427956,
      lng: 4.897070,
      zoom: 8
    },
    maxAdults: 2,
    bedrooms: 2,
    price: 100,
    rating: 3,
    type: `apartment`,
    name: `Nice, cozy, warm big bed apartment`,
    description: `The building is green and from 18th century.`,
    goods: [`Wi-Fi`],
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`
    ],
    previewImage: `img/apartment-03.jpg`,
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: `Angelina`
    },
    city: {
      location: {
        lat: 52.377956,
        lng: 4.897070,
        zoom: 10
      },
      name: `Amsterdam`
    }
  },
  {
    id: 2,
    isPremium: true,
    isFavorite: true,
    location: {
      lat: 52.327956,
      lng: 4.897070,
      zoom: 8
    },
    maxAdults: 3,
    bedrooms: 1,
    price: 80,
    rating: 4,
    type: `private room`,
    name: `Wood and stone place`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    goods: [`Wi-Fi`, `Heating`, `Kitchen`],
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`
    ],
    previewImage: `img/apartment-02.jpg`,
    host: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 2,
      isPro: false,
      name: `Max`
    },
    city: {
      location: {
        lat: 52.377956,
        lng: 4.897070,
        zoom: 10
      },
      name: `Amsterdam`
    }
  },
  {
    id: 3,
    isPremium: true,
    isFavorite: false,
    location: {
      lat: 52.377956,
      lng: 4.827070,
      zoom: 8
    },
    maxAdults: 1,
    bedrooms: 5,
    price: 400,
    rating: 2,
    type: `apartment`,
    name: `Canal View Prinsengracht`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    goods: [`Wi-Fi`, `Heating`, `Kitchen`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`
    ],
    previewImage: `img/room.jpg`,
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    city: {
      location: {
        lat: 52.377956,
        lng: 4.897070,
        zoom: 10
      },
      name: `Amsterdam`
    }
  },
  {
    id: 4,
    isPremium: false,
    isFavorite: true,
    location: {
      lat: 52.377956,
      lng: 4.927070,
      zoom: 8
    },
    maxAdults: 3,
    bedrooms: 3,
    price: 177,
    rating: 5,
    type: `private room`,
    name: `Nice, cozy, warm big bed apartment`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    goods: [`Wi-Fi`, `Heating`, `Kitchen`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`
    ],
    previewImage: `img/apartment-01.jpg`,
    host: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 2,
      isPro: false,
      name: `Max`
    },
    city: {
      location: {
        lat: 52.377956,
        lng: 4.897070,
        zoom: 10
      },
      name: `Amsterdam`
    }
  },
  {
    id: 5,
    isPremium: false,
    isFavorite: false,
    location: {
      lat: 50.985173,
      lng: 6.953101,
      zoom: 8
    },
    maxAdults: 2,
    bedrooms: 1,
    price: 650,
    rating: 2,
    type: `apartment`,
    name: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Wi-Fi`],
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`
    ],
    previewImage: `img/apartment-01.jpg`,
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: `Angelina`
    },
    city: {
      location: {
        lat: 50.935173,
        lng: 6.953101,
        zoom: 10
      },
      name: `Cologne`
    }
  },
  {
    id: 6,
    isPremium: true,
    isFavorite: false,
    location: {
      lat: 48.804716,
      lng: 2.399014,
      zoom: 8
    },
    maxAdults: 9,
    bedrooms: 4,
    price: 77,
    rating: 4,
    type: `private room`,
    name: `Nice, cozy, warm big bed apartment`,
    description: `The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    goods: [`Wi-Fi`, `Heating`, `Kitchen`, `Washing machine`, `Baby seat`, `Cabel TV`],
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`
    ],
    previewImage: `img/apartment-03.jpg`,
    host: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 2,
      isPro: false,
      name: `Max`
    },
    city: {
      location: {
        lat: 48.864716,
        lng: 2.349014,
        zoom: 10
      },
      name: `Paris`
    }
  },
  {
    id: 7,
    isPremium: true,
    isFavorite: true,
    location: {
      lat: 50.885173,
      lng: 6.953101,
      zoom: 8
    },
    maxAdults: 3,
    bedrooms: 2,
    price: 105,
    rating: 1,
    type: `apartment`,
    name: `Nice, cozy, warm big bed apartment`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    goods: [`Wi-Fi`],
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`
    ],
    previewImage: `img/apartment-02.jpg`,
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: `Angelina`
    },
    city: {
      location: {
        lat: 50.935173,
        lng: 6.953101,
        zoom: 10
      },
      name: `Cologne`
    }
  },
  {
    id: 8,
    isPremium: false,
    isFavorite: true,
    location: {
      lat: 48.894716,
      lng: 2.369014,
      zoom: 8
    },
    maxAdults: 4,
    bedrooms: 3,
    price: 270,
    rating: 3,
    type: `private room`,
    name: `Canal View Prinsengracht`,
    description: `The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    goods: [`Wi-Fi`],
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`
    ],
    previewImage: `img/room.jpg`,
    host: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 2,
      isPro: false,
      name: `Max`
    },
    city: {
      location: {
        lat: 48.864716,
        lng: 2.349014,
        zoom: 10
      },
      name: `Paris`
    }
  },
  {
    id: 9,
    isPremium: false,
    isFavorite: false,
    location: {
      lat: 50.935173,
      lng: 6.903101,
      zoom: 8
    },
    maxAdults: 2,
    bedrooms: 1,
    price: 50,
    rating: 5,
    type: `apartment`,
    name: `Nice, cozy, warm big bed apartment`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    goods: [`Wi-Fi`, `Heating`, `Kitchen`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`
    ],
    previewImage: `img/apartment-03.jpg`,
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: `Angelina`
    },
    city: {
      location: {
        lat: 50.935173,
        lng: 6.953101,
        zoom: 10
      },
      name: `Cologne`
    }
  },
  {
    id: 10,
    isPremium: true,
    isFavorite: false,
    location: {
      lat: 48.864716,
      lng: 2.319014,
      zoom: 8
    },
    maxAdults: 4,
    bedrooms: 3,
    price: 200,
    rating: 5,
    type: `private room`,
    name: `Wood and stone place`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    goods: [`Wi-Fi`, `Heating`, `Kitchen`, `Towels`, `Baby seat`, `Cabel TV`],
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`
    ],
    previewImage: `img/apartment-02.jpg`,
    host: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 2,
      isPro: false,
      name: `Max`
    },
    city: {
      location: {
        lat: 48.864716,
        lng: 2.349014,
        zoom: 10
      },
      name: `Paris`
    }
  }
];

export default offers;
