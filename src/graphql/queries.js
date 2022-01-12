/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRestaurants = /* GraphQL */ `
  query GetRestaurants($id: String!) {
    getRestaurants(id: $id) {
      id
      restaurantName
      maxCovers
      openForLunch
    }
  }
`;
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: TableRestaurantsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        restaurantName
        maxCovers
        openForLunch
      }
      nextToken
    }
  }
`;
