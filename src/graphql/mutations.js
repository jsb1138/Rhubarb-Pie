/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      favorites
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      favorites
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      favorites
      createdAt
      updatedAt
    }
  }
`;
export const createPie = /* GraphQL */ `
  mutation CreatePie(
    $input: CreatePieInput!
    $condition: ModelPieConditionInput
  ) {
    createPie(input: $input, condition: $condition) {
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
export const updatePie = /* GraphQL */ `
  mutation UpdatePie(
    $input: UpdatePieInput!
    $condition: ModelPieConditionInput
  ) {
    updatePie(input: $input, condition: $condition) {
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
export const deletePie = /* GraphQL */ `
  mutation DeletePie(
    $input: DeletePieInput!
    $condition: ModelPieConditionInput
  ) {
    deletePie(input: $input, condition: $condition) {
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
export const createSlice = /* GraphQL */ `
  mutation CreateSlice(
    $input: CreateSliceInput!
    $condition: ModelSliceConditionInput
  ) {
    createSlice(input: $input, condition: $condition) {
      id
      path
      title
      duration
      createdAt
      updatedAt
    }
  }
`;
export const updateSlice = /* GraphQL */ `
  mutation UpdateSlice(
    $input: UpdateSliceInput!
    $condition: ModelSliceConditionInput
  ) {
    updateSlice(input: $input, condition: $condition) {
      id
      path
      title
      duration
      createdAt
      updatedAt
    }
  }
`;
export const deleteSlice = /* GraphQL */ `
  mutation DeleteSlice(
    $input: DeleteSliceInput!
    $condition: ModelSliceConditionInput
  ) {
    deleteSlice(input: $input, condition: $condition) {
      id
      path
      title
      duration
      createdAt
      updatedAt
    }
  }
`;
