import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useState, useEffect } from "react";
import SliceItem from "./components/SliceItem";
import PieItem from "./components/PieItem";
import * as DynamoAPI from "./utils/ApiQueries";

function App({ signOut, user }) {
  const [allPies, setAllPies] = useState([]);
  const [allSlices, setAllSlices] = useState([]);

  const userId = user.attributes.sub;

  useEffect(() => {
    const dataFetch = [DynamoAPI.grabPies(), DynamoAPI.grabSlices()];
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
      {allSlices
        .filter((slice) => allPies[0].slices.includes(slice.id))
        .map((slice) => (
          <SliceItem key={slice.id} slice={slice} />
        ))}
      <button onClick={() => DynamoAPI.grabUser(userId)}>User</button>
      <button onClick={() => console.log("pies:", allPies)}>Pie</button>
      <button onClick={DynamoAPI.grabSlice}>Slice</button>
      <button onClick={signOut}>SIGN OUT</button>
    </div>
  );
}

export default withAuthenticator(App);
