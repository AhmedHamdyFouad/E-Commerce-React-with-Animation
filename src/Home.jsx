import React from "react";
import Header from "./Compentes/HeaderImg/HeaderImg";
import HeaderContent from "./Compentes/Hedaer/Header";
import SliderHome from "./Compentes/Slider/Slider";
import AccordionSlider from "./Compentes/accordion/Accordion";
import HomeContentApp from "./HomeContent/HomeContentApp";
import HomeTwo from "./Compentes/HomeTwo/HomeTwo";
import HomeOne from "./Compentes/HomeOne/HomeOne";
import HomeTwoSlider from "./Compentes/HomeTwo/HomeTwoSlider";
import SliderFour from "./Compentes/SliiderFour/SliderFour";
import SliderEight from "./Compentes/SliderEight/SliderEight";
import SliderLast from "./Compentes/lastSlider/SliderLastOne";
import FinichSlideOne from "./Compentes/Finich/FinichSlideOne";
import FinichSliderTwo from "./Compentes/Finich/finishSliderTwo";
import Footer from "./Compentes/Footer/Footer";


const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <HeaderContent />
      <SliderHome />
      <AccordionSlider />
      <HomeContentApp />
      <HomeOne />
      <HomeTwo />
      <HomeTwoSlider />
      <SliderFour />
      <SliderEight />
      <SliderLast />
      <FinichSlideOne />
      <FinichSliderTwo />
      <Footer />
     
    </div>
  );
};

export default Home;
