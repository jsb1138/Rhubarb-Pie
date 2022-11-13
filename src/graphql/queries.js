/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      favorites
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        favorites
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPie = /* GraphQL */ `
  query GetPie($id: ID!) {
    getPie(id: $id) {
      id
      type
      title
      slices
      createdAt
      updatedAt
    }
  }
`;
export const listPies = /* GraphQL */ `
  query ListPies(
    $filter: ModelPieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        title
        slices
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSlice = /* GraphQL */ `
  query GetSlice($id: ID!) {
    getSlice(id: $id) {
      id
      path
      title
      duration
      createdAt
      updatedAt
    }
  }
`;
export const listSlices = /* GraphQL */ `
  query ListSlices(
    $filter: ModelSliceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSlices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        path
        title
        duration
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
