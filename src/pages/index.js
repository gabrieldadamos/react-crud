import React from 'react';
import Navbar from '../components/Navbar'
import DataCards from '../components/Cards/data'
import Footer from '../components/Footer'
import Container from '@material-ui/core/Container';
import '../style/style.css';

export default function Index() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <DataCards />
      </Container>
      <Footer />
    </>
  );
}