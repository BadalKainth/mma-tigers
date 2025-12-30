import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Mma from "./Pages/Mma";
import Kickboxing from "./Pages/Kickboxing";
import Boxing from "./Pages/Boxing";
import Gymnastics from "./Pages/Gymnastics";
import Karate from "./Pages/Karate";
import Jiujitsu from "./Pages/Jiujitsu";
import GalleryPage from "./Pages/GalleryPage";
import Taekwondo from "./Pages/Taekwondo";
import WeightLossPage from "./Pages/Weightloss";
import KungFu from "./Pages/Kungfu";
import SelfDefense from "./Pages/Selfdefence";
import AboutUs from "./Pages/About";
import Blogs from "./Pages/Blogs";
import BlogById from "./Pages/BlogById";
import ContactUs from "./Pages/ContactUs";

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
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogById />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
