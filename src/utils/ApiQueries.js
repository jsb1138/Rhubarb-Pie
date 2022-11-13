import { API } from "aws-amplify";
import * as queries from "../graphql/queries";

export const grabUser = async (userId) => {
  try {
    const res = await API.graphql({
      query: queries.listUsers,
      // variables: { id: userId },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    const data = res.data;
    // console.log("user faves:", data.listUsers.items[0].favorites);
    console.log("user: ", data);
  } catch (err) {
    console.error("ERROR: ", err);
  }
};

export const grabPies = async () => {
  try {
    const res = await API.graphql({
      query: queries.listPies,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    const data = await res.data.listPies.items;
    // setAllPies(data);
    return data;
  } catch (err) {
    console.error("ERROR: ", err);
  }
};

export const grabSlice = async () => {
  try {
    const res = await API.graphql({
      query: queries.getSlice,
      variables: { id: "1R_5" },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    // const res = await API.graphql(graphqlOperation(getSlice, { id: "1R_1" }));
    const data = res.data;
    console.log("slice: ", data);
  } catch (err) {
    console.error("ERROR: ", err);
  }
};

export const grabSlices = async () => {
  try {
    const res = await API.graphql({
      query: queries.listSlices,
      // variables: { id: userId },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    // const res = await API.graphql(graphqlOperation(listSlices));
    const data = await res.data.listSlices.items;
    // setAllSlices(data);
    return data;
  } catch (err) {
    console.error("ERROR: ", err);
  }
};
