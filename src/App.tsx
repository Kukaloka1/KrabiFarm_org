import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import AboutUs from "@/sections/AboutUs";
import ProblemSolution from "@/sections/ProblemSolution";
import Solution from "@/sections/Solution";
import Impact from "@/sections/Impact";
import TheTeam from "@/sections/TheTeam";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";

export default function App(){
  useEffect(()=>{
    if ("scrollRestoration" in history) (history as any).scrollRestoration = "manual";
    if (!window.location.hash) window.scrollTo(0, 0);
  },[]);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <ProblemSolution />
        <Solution />
        <Impact />
        <TheTeam />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
