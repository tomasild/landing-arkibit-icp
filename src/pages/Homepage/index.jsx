import React, { useState, useEffect } from "react";
import Hero from "../../components/Hero"

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-4">
      <Hero />
    </div>
  );
}
