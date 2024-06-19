import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Faucet from './components/Faucet';
import Membership from './components/Membership';
import Governanace from './components/Governanace';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Faucet />} />
        <Route path="/nft" element={<Membership />} />
        <Route path="/vote" element={<Governanace />} />
      </Routes>
    </Router>
  );
}

export default App;
