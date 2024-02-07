"use client"
import Image from "next/image";
import React from 'react';
import  {motion } from 'framer-motion';
import Link from "next/link";
import Nav from "../components/Nav";
import Banner from "@/components/Banner";
import Welcome from "@/components/Welcome";
import PopularDishes from "@/components/PopularDishes";

export default function Home() {
  return (
    <main className="bg-[#FFF8EE] w-full text-black">
      <div className="">
      <Nav/>
      </div>
      <Banner/>
      <Welcome/>
      <PopularDishes/>
      
      
    
    </main>
  );
};

