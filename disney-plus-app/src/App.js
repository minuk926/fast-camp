import './App.css';
import Nav from "./components/Nav";
import Category from "./components/Category";
import Banner from "./components/Banner";
import requests from "./api/request";
import Row from "./components/Row";

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Category />
      <Row title='Trending Now' id='TN' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated Movies' id='TR' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' id='AM' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' id='CM' fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default App;
