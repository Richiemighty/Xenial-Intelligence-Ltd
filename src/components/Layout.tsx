"use client";

import React, { ReactNode } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-primary text-white">{children}</main>
      <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-12">
        &copy; {new Date().getFullYear()} Xenial Intelligence Ltd. All rights reserved.
      </footer>
    </>
  );
}
