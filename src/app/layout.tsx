'use client'

import { Inter } from 'next/font/google'
import x from "../style/app.module.css";
import Header from '@/componment/app.header';
import Footer from '@/componment/app.foorder';
import Container from "react-bootstrap/Container";

import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <Container>

        {children}
        </Container>
       <Footer></Footer>
      
      </body>
    </html>
  )
}
