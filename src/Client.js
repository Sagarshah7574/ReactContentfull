import * as contentful from "contentful";

const Client = contentful.createClient({
  // space: "tz02nw95fxhh",
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACESS_TOKEN,
});

export default Client;
