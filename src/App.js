import React, { useState, useEffect } from 'react';
import { Amplify, API } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import { listRestaurants } from './graphql/queries';

Amplify.configure(awsExports);

function App({ signOut, user }) {

  console.log(user);

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  async function fetchAllRestaurants() {
    try {
      const restaurantListData = await API.graphql({ query: listRestaurants });
      setRestaurants(restaurantListData.data.listRestaurants.items)
      console.log(restaurantListData.data.listRestaurants.items)
    } catch (err) {
      console.log({ err })
      console.log(restaurants)
    }
  }


  

  return (
    <div className="App">
      <h1>Hello {user.attributes.email}</h1>
      <button onClick={signOut}>Sign out</button>
      {
        restaurants.map(i => (
          <div key={i.id}>
            <h3>{i.restaurantName}</h3>
            <p>Max covers: {i.maxCovers}</p>
          </div>
        ))
      }
    </div>
  );
}

export default withAuthenticator(App);