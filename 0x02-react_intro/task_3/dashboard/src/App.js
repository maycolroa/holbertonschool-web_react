import "./App.css";
import Body from "./components/App-body.jsx";
import Footer from "./components/App-footer.jsx";
import Head from "./components/App-header.jsx";
import Notifications from "./components/Notifications";


function App() {
  
  return (
    <div className="App">
      <Notifications />
      <Head />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
