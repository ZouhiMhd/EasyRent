import type { Metadata } from "next";
import Script from 'next/Script';
import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from "next/font/google";
import 'boxicons/css/boxicons.css'
import ImportBsJS from "@/components/ImportBsJS";
import "../globals.css";
import {HeadDash} from "@/components"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>
        <HeadDash title="Drivers"/>
      
        {children}
      </main>
  );
}
