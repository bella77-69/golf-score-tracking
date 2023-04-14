import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Navigation from "./components/Nav/Nav";
import Landing from "./pages/Landing/Landing";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
 <Router>
  {loading === false ? (
        <>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
        {/* <Footer /> */}
      </>
    ) : (
      <Loading />
    )}
  </Router>
);
}

export default App;
