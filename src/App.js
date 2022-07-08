import React, { useEffect, useState } from "react";
import Client from "./Client";

import Posts from "./components/Posts";

const App = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    Client.getEntries()
      .then((res) => {
        // console.log(res.items);

        setArticle(res.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="wrapper">
            <span>React and Contentfull</span>
          </div>
        </header>
        <main>
          <div className="wrapper">
            <Posts posts={article} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
