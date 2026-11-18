import { useState } from 'react';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';

function Home() {

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Nav onSearch={setSearchQuery} />
      <Hero />
      <Card searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}

export default Home;