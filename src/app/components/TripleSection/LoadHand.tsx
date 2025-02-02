"use client";

import React, { useEffect, useState } from "react";

/**
 * LoadHand Component
 * 
 * Dynamically loads and renders the `hand.svg` file from the `/svgs/` directory.
 * 
 * This component fetches the SVG only once on mount and applies a fixed class for positioning.
 */
const LoadHand = () => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    /**
     * Fetches the `hand.svg` file and updates state with its content.
     */
    const loadSvg = async () => {
      try {
        const response = await fetch(`/svgs/hand.svg`); // Hardcoded filename
        if (!response.ok) throw new Error(`Failed to load SVG: hand.svg`);

        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };

    loadSvg();
  }, []); // Fetch only once on mount

  // Return null while loading
  if (!svgContent) return null;

  return (
    <div
      className="absolute top-[-17%]" // Hardcoded class for positioning
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default LoadHand;
