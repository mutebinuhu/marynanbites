"use client"
import Image from "next/image";
import React from 'react';
import  {motion } from 'framer-motion';
import Link from "next/link";
import Nav from "../components/Nav";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="bg-[#FFF8EE] w-full">
      <div className="">
      <Nav/>
      </div>
      <Banner/>
      
      
    
    </main>
  );
};

