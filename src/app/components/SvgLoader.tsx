'use client';

/**
 * SvgLoader Component
 * -------------------
 * This component loads an SVG from the `public/svgs/` directory using Next.js Image optimization.
 *
 * Props:
 * - `fileName` (string)   : The SVG filename (e.g., "icon.svg").
 * - `className` (string?) : Optional CSS classes for styling.
 * - `width` (number?)     : Width of the SVG (default: 50).
 * - `height` (number?)    : Height of the SVG (default: 50).
 *
 * Usage:
 * <SvgLoader fileName="logo.svg" className="w-6 h-6" width={24} height={24} />
 */

import Image from 'next/image';

const SvgLoader = ({
  fileName,
  className,
  width = 50,
  height = 50,
}: {
  fileName: string;
  className?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Image
      src={`/svgs/${fileName}`} // Loads from `public/svgs/`
      alt={fileName.replace('.svg', '')} // Removes `.svg` for better alt text
      width={width}
      height={height}
      className={className} // Apply custom styles
    />
  );
};

export default SvgLoader;
