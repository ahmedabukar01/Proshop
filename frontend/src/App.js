import Footer from "./components/Footer";
import Header from "./components/Header";
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <h2>Proshop</h2>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
