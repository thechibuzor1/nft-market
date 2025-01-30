'use client';

import React, { useEffect, useState } from 'react';

const SvgLoader = ({ fileName, className }: { fileName: string; className?: string }) => {
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

  // Inject the className into the SVG element
  const svgWithClass = svgContent.replace('<svg', `<svg class="${className}"`);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: svgWithClass }}
    />
  );
};

export default SvgLoader;