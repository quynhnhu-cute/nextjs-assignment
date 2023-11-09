import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

import BlogList from './components/BlogList';
import Header from './components/Header';

const HomePage = () => {
  return (
    <>
      <NavBar/>
      <Header/>
      <BlogList/>
      <Footer/>
    </>
  );
};
export default HomePage;
