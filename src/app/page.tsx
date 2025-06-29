import Banner1 from "@/components/Banner1";
import Banner2 from "@/components/Banner2";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Section1 from "@/components/Section1";
import Section9 from "@/components/Section9";

import Section11 from "@/components/Section11";
import Faq from "@/components/Faq";
import Section10 from "@/components/Section10";
import Section6 from "@/components/Section6";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Mockup from "@/components/Mockup";
import Section8 from "@/components/Section8";
import Section7 from "@/components/Section7";
import Cta from "@/components/Cta";


export default function Home() {
  return (
   <>
    <HeroSection/>
    <Section1/>
    <Section2/>
    <Banner1/>
    <Section3/>
    <Section4/>
    <Banner2/>
    <Section5/>
    <Mockup/>
    <Section6/>
    <Section7/>
    <Section8/>
    <Section9/>
    <Section10/>
    <Section11/>
    <Faq/>

    <Cta/>
    <Footer/>
   </>
  );
}
