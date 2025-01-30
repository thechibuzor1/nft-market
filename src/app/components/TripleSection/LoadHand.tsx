'use client';

import React, { useEffect, useState } from 'react';

const LoadHand = ({ fileName, className }: { fileName: string; className?: string }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch(`/svgs/${fileName}`);
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error('Error loading SVG:', error);
      }
    };

    loadSvg();
  }, [fileName]);

  if (!svgContent) return null;

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default LoadHand;