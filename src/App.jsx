import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/Navbar';
import Carosal from './components/Carosal';
import YogaSection from './components/Welcome';
import Imagecard from './components/card';
import Why from './components/Why';
import SimpleForm from './components/Join';
import YogaCourses from './components/Yogacourse';
import Gallery from './components/gallery';
import Vyasa from './components/Vyasa';
import Yoga from './components/Class';
import Connection from './components/Contact';
import Footer from './components/Footer';
import TeacherList from './components/Tutor';

function HomePage() {
  return (
    <>
      <Carosal />
      <YogaSection />
      <Imagecard />
      <Why />
      <YogaCourses/>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<SimpleForm />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Vyasa" element={<Vyasa />} />
        <Route path="/Class" element={<Yoga />} />
        <Route path="/Contact" element={<Connection />} />
        <Route path="/Tutor" element={<TeacherList />} />
      </Routes>
    </Router>
  );
}

export default App;
