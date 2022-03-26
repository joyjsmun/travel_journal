import Main from "./components/Main";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const element = data.map(e => {
    return <Main data={e} />
  })
  return (
    <div>
      <Navbar />
      {element}
    </div>
  );
}

export default App;
