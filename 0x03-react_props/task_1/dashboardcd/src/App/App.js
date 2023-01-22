import "../App/App.css";
import Head from "./components/App-header.jsx";
import Footer from "../Footer/App-footer.jsx";
import Notifications from "../components/Notifications";


function App() {
  
  return (
    <div className="App">
      <div className="App-header">
          <Head />
        </div>
        <div className="App-body">
          <Login />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
        <Notifications />
    </div>
  );
}

export default App;
