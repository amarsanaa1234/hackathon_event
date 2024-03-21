import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Event from "./components/event/Event";
<<<<<<< HEAD
import Sponser from "./components/sponser/Sponser";
=======
import HeaderWithTimer from "./components/header/HTimer";
import CustomizedTimeline from "./components/header/timeLine";
>>>>>>> d78aa3fc257e66b9b162b65baea6a0a6d6979313
function App() {
  const startDate = new Date(); // Start date
  const endDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000); // End Date
  return (
    <>
<<<<<<< HEAD
      {/* <Header />
      <Home />
      <Event /> */}
      <Sponser />
=======
      <Header />
      <Home />
      <HeaderWithTimer
        title="Hackathon дуустал:"
        startDate={startDate}
        endDate={endDate}
      />
      <div className="flex justify-center mt-40">
        <h1 className="text-5xl font-bold text-center customFont">Timeline</h1>
      </div>
      <div className="flex mt-10 mb-20">
        <CustomizedTimeline />
      </div>
      <Event />
>>>>>>> d78aa3fc257e66b9b162b65baea6a0a6d6979313
    </>
  );
}

export default App;
