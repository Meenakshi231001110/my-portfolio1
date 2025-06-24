// src/components/ThreeBackground.jsx

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function ThreeBackground() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <Stars
        radius={100}  // Radius of the inner sphere (default=100)
        depth={50}    // Depth of area where stars will be scattered (default=50)
        count={5000}  // Number of stars (default=5000)
        factor={4}    // Size factor (default=4)
        saturation={0} // Star saturation 0-1 (default=0)
        fade={true}   // Faded stars at the edge (default=false)
      />
    </Canvas>
  );
}
