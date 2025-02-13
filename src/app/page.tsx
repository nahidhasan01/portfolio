"use client";
import Banner from "@/components/Banner/Banner";
import MyStats from "@/components/MyStats/MyStats";
import SelectedProjects from "@/components/SelectedProjects.tsx/SelectedProjects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  });

  return (
    <>
      <div className="w-11/12 max-w-7xl mx-auto">
        <Banner />
        <MyStats />
        <SelectedProjects />
      </div>
    </>
  );
}
