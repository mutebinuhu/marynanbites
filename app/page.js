"use client"
import Image from "next/image";
import React from 'react';
import  {motion } from 'framer-motion';
import Link from "next/link";
import Nav from "../components/Nav";
import Banner from "@/components/Banner";
import Welcome from "@/components/Welcome";
import PopularDishes from "@/components/PopularDishes";
import KindsOfFood from "@/components/KindsOfFood";

export default function Home() {
  return (
    <main className="bg-[#FFF8EE] w-full text-black">
      
      <Banner/>
      <Welcome/>
      <PopularDishes/>
      <KindsOfFood/>
      
    </main>
  );
};

