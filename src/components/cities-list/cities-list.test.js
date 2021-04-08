import React from 'react';
import {Router} from 'react-router-dom';
import Provider from 'react-redux';
import {render, screen} from '@testing-library/react';
import CitiesList from './cities-list';
import {renderHook, act} from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

const fakeCities = [
  {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10
    },
    name: `Paris`
  },
  {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10
    },
    name: `Cologne`
  }
];

it(`CitiesList should render correctly`, () => {
  const {getByText} = render(
      <CitiesList
        activeCity={fakeCities[0]}
        setActiveCity={jest.fn()}
      />
  );

  expect(getByText(`Paris`)).toBeInTheDocument();
});

it(`xxxxx`, () => {
  const handleCityClick = jest.fn();
  handleCityClick.mockImplementation(
      (city) => {
        result.current.activeCity = city;
      }
  );

  const {result} = renderHook(() => {
    return {
      activeCity: fakeCities[0],
      setActiveCity: handleCityClick
    };
  });

  // const {container} = render(
  //     <CitiesList
  //       activeCity={result.current.activeCity}
  //       setActiveCity={result.current.setActiveCity}
  //     />
  // );

  const {getByText} = render(
      <CitiesList
        activeCity={result.current.activeCity}
        setActiveCity={result.current.setActiveCity}
      />
);

  const {current} = result;

  // const label = container.querySelectorAll('');
  const button = getByText(`Cologne`);
  userEvent.click(button);
  expect(current.activeCity).toBe(fakeCities[1]);

  // userEvent.click(container.getByText(`Cologne`));
  // expect(current.activeCity).toBe(fakeCities[1]);
});
