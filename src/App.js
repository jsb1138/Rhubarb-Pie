import "./App.css";

import { API } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import * as queries from "./graphql/queries";
import { useState, useEffect } from "react";
import SliceItem from "./components/SliceItem";
import PieItem from "./components/PieItem";

function App({ signOut, user }) {
  const [allPies, setAllPies] = useState([]);
  const [allSlices, setAllSlices] = useState([]);

  const userId = user.attributes.sub;

  const grabUser = async (userId) => {
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

  const grabPies = async () => {
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

  const grabSlice = async () => {
    try {
      const res = await API.graphql({
        query: queries.getSlice,
        variables: { id: "1R_1" },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      // const res = await API.graphql(graphqlOperation(getSlice, { id: "1R_1" }));
      const data = res.data;
      console.log("slice: ", data);
    } catch (err) {
      console.error("ERROR: ", err);
    }
  };

  const grabSlices = async () => {
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

  useEffect(() => {
    const dataFetch = [grabPies(), grabSlices()];
    Promise.all(dataFetch).then((result) => {
      setAllPies(result[0]);
      setAllSlices(result[1]);
    });
  }, []);

  return (
    <div className="App">
      {allPies.map((pie) => (
        <PieItem key={pie.id} pie={pie} />
      ))}
      {/* {allSlices
        // .filter((slice) => slice.id)
        .map((slice) => (
          <SliceItem key={slice.id} slice={slice} />
        ))} */}
      {allSlices
        .filter((slice) => allPies[0].slices.includes(slice.id))
        .map((slice) => (
          <SliceItem key={slice.id} slice={slice} />
        ))}
      <button onClick={() => grabUser(userId)}>User</button>
      <button onClick={() => console.log("pies:", allPies)}>Pie</button>
      <button onClick={grabSlice}>Slice</button>
      <button onClick={signOut}>SIGN OUT</button>
    </div>
  );
}

export default withAuthenticator(App);
