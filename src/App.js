import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './assets/css/swap.css';
import './assets/css/bootstrap.min.css';
import './assets/css/slick.css';
import './assets/css/style.css';
import './assets/css/media-query.css';
import Home from './page/Home';
import PageLoader from './component/PageLoader'
import SliderForm from './page/SliderForm'


function App() {
  return (
    <>
      <PageLoader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SliderForm" element={<SliderForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
