import SearchBox from "../components/home/SearchBox.jsx";
import Tours from "../components/home/tours.jsx";
import Header from "../components/layout/Header";

const Home = () => {
  return (
    <div className="pt">
      <Header />
      <SearchBox />
      <Tours />
      {/* <PopularDestinations />
      <Services />
      <Newsletter /> */}
    </div>
  );
};

export default Home;
