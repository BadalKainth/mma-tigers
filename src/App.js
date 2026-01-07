import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Mma from "./pages/Mma";
import Kickboxing from "./pages/Kickboxing";
import Boxing from "./pages/Boxing";
import Gymnastics from "./pages/Gymnastics";
import Karate from "./pages/Karate";
import Jiujitsu from "./pages/Jiujitsu";
import GalleryPage from "./pages/GalleryPage";
import Taekwondo from "./pages/Taekwondo";
import WeightLossPage from "./pages/Weightloss";
import KungFu from "./pages/Kungfu";
import SelfDefense from "./pages/Selfdefence";
import AboutUs from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogById from "./pages/BlogById";
import ContactUs from "./pages/ContactUs";
import PersonalTraining from "./pages/PersonalTraining";
import KidsMma from "./pages/KidsMMA";
import HomeTraining from "./pages/HomeTraining";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="training-programs/1" element={<Mma />} />
          <Route path="training-programs/2" element={<Boxing />} />
          <Route path="training-programs/3" element={<Jiujitsu />} />
          <Route path="training-programs/4" element={<Gymnastics />} />
          <Route path="training-programs/5" element={<Kickboxing />} />
          <Route path="training-programs/6" element={<Karate />} />
          <Route path="training-programs/7" element={<Taekwondo />} />
          <Route path="training-programs/8" element={<KungFu />} />
          <Route path="training-programs/9" element={<WeightLossPage />} />
          <Route path="training-programs/10" element={<SelfDefense />} />
          <Route path="training-programs/11" element={<PersonalTraining />} />
          <Route path="training-programs/12" element={<KidsMma />} />
          <Route path="training-programs/13" element={<HomeTraining />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogById />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/personal-training" element={<PersonalTraining />} />
          <Route path="/kids-mma" element={<KidsMma />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
