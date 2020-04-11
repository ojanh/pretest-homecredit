import React from 'react';
import { render } from '@testing-library/react';
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


function withRouter(ui,
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) {
  return (<LocationProvider history={history}>{ui}</LocationProvider>)
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
}

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




test('When Click Detail, browser should be to URL Detail', () => {
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
  

  const {    } = render(
    <Provider store={store}>
      {withRouter(<App />)}
    </Provider>
  )

  const button = container.
 
  
});


