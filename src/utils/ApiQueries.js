import { API } from "aws-amplify";
import * as queries from "../graphql/queries";

export const grabUser = async (userId) => {
  try {
    const res = await API.graphql({
      query: queries.listUsers,
      // variables: { id: userId },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    const data = res.data.listUsers.items;
    // console.log("user faves:", data);
    // console.log("DATA", data[0]);
    return data[0];
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
