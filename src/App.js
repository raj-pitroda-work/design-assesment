import "./App.css";
import HomeOwnerShip from "./components/homeOwnerShip/HomeOwnerShip";
import MainBanner from "./components/mainBanner/MainBanner";
import PartnerWith from "./components/partnerWith/PartnerWith";

function App() {
  return (
    <div className="dashboardWrapper">
      <MainBanner />
      <PartnerWith />
      <HomeOwnerShip />
    </div>
  );
}

export default App;
