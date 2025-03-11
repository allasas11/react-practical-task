import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import Header from './components/Header';
import Footer from './components/Footer';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer />
    </Router>
  );
}
 export default App