import "./App.css";
import Body from "./components/App-body.jsx";
import Footer from "./components/App-footer.jsx";
import Head from "./components/App-header.jsx";
import {getFullYear,getFullYear} from "../src/utils"

function App() {
  let isIndex = true;
  return (
    <div className="App">
      <Head />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
