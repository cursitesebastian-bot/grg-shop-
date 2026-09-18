import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/navbar"
import Hero from '@/components/hero'
import Item from '@/components/item'
export default function Home() {
   return ( 
   <> <Nav/> 
   <Hero />
   <Item/>
    </>
     );
    
  } 