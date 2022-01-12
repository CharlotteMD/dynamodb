/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRestaurants = /* GraphQL */ `
  subscription OnCreateRestaurants(
    $id: String
    $restaurantName: String
    $maxCovers: Int
    $openForLunch: Boolean
  ) {
    onCreateRestaurants(
      id: $id
      restaurantName: $restaurantName
      maxCovers: $maxCovers
      openForLunch: $openForLunch
    ) {
      id
      restaurantName
      maxCovers
      openForLunch
    }
  }
`;
export const onUpdateRestaurants = /* GraphQL */ `
  subscription OnUpdateRestaurants(
    $id: String
    $restaurantName: String
    $maxCovers: Int
    $openForLunch: Boolean
  ) {
    onUpdateRestaurants(
      id: $id
      restaurantName: $restaurantName
      maxCovers: $maxCovers
      openForLunch: $openForLunch
    ) {
      id
      restaurantName
      maxCovers
      openForLunch
    }
  }
`;
export const onDeleteRestaurants = /* GraphQL */ `
  subscription OnDeleteRestaurants(
    $id: String
    $restaurantName: String
    $maxCovers: Int
    $openForLunch: Boolean
  ) {
    onDeleteRestaurants(
      id: $id
      restaurantName: $restaurantName
      maxCovers: $maxCovers
      openForLunch: $openForLunch
    ) {
      id
      restaurantName
      maxCovers
      openForLunch
    }
  }
`;
