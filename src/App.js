import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main>
        <section className="container">
          <Navbar />
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
