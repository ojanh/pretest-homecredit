import React from 'react';
import { render, queryByAttribute, getByTitle } from '@testing-library/react';
import { shallow, configure } from "enzyme";
import { Provider } from 'react-redux';
import App from './App';
import Home from './features/home/Home';
import { Router, LocationProvider, createHistory, createMemorySource } from '@reach/router';
import  configureStore from "redux-mock-store";
import  Adapter from "enzyme-adapter-react-16";
import Detail from './features/detail/Detail';
import  renderer from "react-test-renderer";

const mockStore = configureStore([]);
configure({adapter: new Adapter()});

test('It should be rendered bulbasaur in Home Page', () => {
  const store = mockStore({
    home: {
      pokeApi: {
          results: [{
          name: 'bulbasaur',
          url: 'http://pokeapi/v2/0/'
        }]
      },
    }
  })
  store.dispatch = jest.fn();

  const { getByText } = render(
    <Provider store={store} >
      <LocationProvider >
        <Home />
      </LocationProvider>
    </Provider>
  );


  expect(getByText(/bulb/)).toBeTruthy();
});




test('When Click button, it should be response', () => {
  const store = mockStore({
    home: {
      pokeApi: {
          results: [{
          name: 'bulbasaur',
          url: 'http://pokeapi/v2/0/'
        }]
      },
      detail: {
        pokeDetail: {
          name: 'bulbasaur',
          types: [
            {
              type: {
                name: "poison",
                url: "https://pokeapi.co/api/v2/type/4/"
              }
            }
          ]
        }
      }
    }
  })
  const mockLocation = {
    pathname: '/'
  }
  store.dispatch = jest.fn();
  

  const {container} = render(
    <Provider store={store}>
      <LocationProvider >
        <Home />
      </LocationProvider>
    </Provider>
  )
  
  const response = jest.fn();
  const elemButton = container.getElementsByTagName('button').item(0);

  elemButton.addEventListener('click', response);
  elemButton.click();

  expect(response.mock.calls.length).toEqual(1);
});


