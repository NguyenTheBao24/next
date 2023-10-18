"use client";

import { Inter } from "next/font/google";
import Header from "@/componment/app.header";
import Footer from "@/componment/app.foorder";
import Container from "react-bootstrap/Container";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <Header></Header>
          <Container>{children}</Container>
          <Footer></Footer>
        </body>
      </html>
    </Provider>
  );
}
