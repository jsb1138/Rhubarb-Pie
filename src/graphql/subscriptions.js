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
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePie = /* GraphQL */ `
  subscription OnCreatePie(
    $filter: ModelSubscriptionPieFilterInput
    $username: String
  ) {
    onCreatePie(filter: $filter, username: $username) {
      id
      type
      title
      slices {
        id
        path
        title
        duration
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      username
    }
  }
`;
export const onUpdatePie = /* GraphQL */ `
  subscription OnUpdatePie(
    $filter: ModelSubscriptionPieFilterInput
    $username: String
  ) {
    onUpdatePie(filter: $filter, username: $username) {
      id
      type
      title
      slices {
        id
        path
        title
        duration
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      username
    }
  }
`;
export const onDeletePie = /* GraphQL */ `
  subscription OnDeletePie(
    $filter: ModelSubscriptionPieFilterInput
    $username: String
  ) {
    onDeletePie(filter: $filter, username: $username) {
      id
      type
      title
      slices {
        id
        path
        title
        duration
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      username
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
