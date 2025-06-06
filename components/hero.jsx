"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {Button} from "./ui/button";

const Hero = () =>{
const imageRef = useRef();

  useEffect(() =>{
    const imageElement = imageRef.current;

function handleScroll(){
  const scrollPosition = window.scrollY;
  const scrollThreshold = 100
  if(scrollPosition > scrollThreshold){
    imageElement.classList.add("scrolled");
  }else{
    imageElement.classList.remove("scrolled")
  }
}
    
    window.addEventListener("scroll",handleScroll)

    return () =>{
      window.removeEventListener("scroll",handleScroll)
    }
  })
  
  return <section className="pt-30 pb-20 px-4">
    <div className="container mx-auto text-center">
      <h1 className="text-6xl md:text-8xl lg:text-[105px] pb-5 mb-5 gredient-title">
        Manage Your Finances <br /> with Intelligence
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        An AI-powered financial management platform that helps you track,
        analyze, and optimize your spending with real-time insights.
      </p>
      <div className="flex justify-center space-x-4">
        <Link href="/dashboard">
          <Button size="lg" className="px-8">
            Get Started
          </Button>
        </Link>
        <Link href="https://www.youtube.com">
          <Button size="lg" variant="outline" className="px-8">
            Watch Demo
          </Button>
        </Link>
      </div>
      <div className="hero-image-wrapper mt-5 md:mt-0">
        <div ref={imageRef} className="hero-image">
          <Image 
            src="/banner.jpeg"
            width={1280}
            height={720}
            alt="Dashboard Preview"
            className="rounded-lg shadow-2xl border mx-auto"
            priority
          />
        </div>
      </div>
    </div>
  </section>
}

export default Hero