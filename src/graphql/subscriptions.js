/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onCreateUser(filter: $filter, username: $username) {
      id
      username
      email
      favorites
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onUpdateUser(filter: $filter, username: $username) {
      id
      username
      email
      favorites
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onDeleteUser(filter: $filter, username: $username) {
      id
      username
      email
      favorites
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePie = /* GraphQL */ `
  subscription OnCreatePie($filter: ModelSubscriptionPieFilterInput) {
    onCreatePie(filter: $filter) {
      id
      type
      title
      slices
      createdAt
      updatedAt
      tagline
      art
    }
  }
`;
export const onUpdatePie = /* GraphQL */ `
  subscription OnUpdatePie($filter: ModelSubscriptionPieFilterInput) {
    onUpdatePie(filter: $filter) {
      id
      type
      title
      slices
      createdAt
      updatedAt
      tagline
      art
    }
  }
`;
export const onDeletePie = /* GraphQL */ `
  subscription OnDeletePie($filter: ModelSubscriptionPieFilterInput) {
    onDeletePie(filter: $filter) {
      id
      type
      title
      slices
      createdAt
      updatedAt
      tagline
      art
    }
  }
`;
export const onCreateSlice = /* GraphQL */ `
  subscription OnCreateSlice($filter: ModelSubscriptionSliceFilterInput) {
    onCreateSlice(filter: $filter) {
      id
      path
      title
      duration
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSlice = /* GraphQL */ `
  subscription OnUpdateSlice($filter: ModelSubscriptionSliceFilterInput) {
    onUpdateSlice(filter: $filter) {
      id
      path
      title
      duration
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSlice = /* GraphQL */ `
  subscription OnDeleteSlice($filter: ModelSubscriptionSliceFilterInput) {
    onDeleteSlice(filter: $filter) {
      id
      path
      title
      duration
      createdAt
      updatedAt
    }
  }
`;
