import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Navigation from "./components/Nav/Nav";
import Landing from "./pages/Landing/Landing";
import LoginPage from "./pages/Login/LoginPage";
import Courses from "./pages/Courses/Courses";
import Scores from "./components/Scores/Scores";
import Dashboard from "./pages/Dashboard/Dashboard";

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
          <Route path="/login" exact component={LoginPage} />
          <Route path='/courses' exact component={Courses} />
          <Route path='/scores' exact component={Scores} />
          <Route path='/dashboard' exact component={Dashboard} />
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
