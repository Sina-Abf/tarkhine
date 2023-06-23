'use client';
import { LeftArrowIcon } from '@/public/icons';
import { useEffect, useRef, useState } from 'react';

const useDynamicScroll = (buttonsPosition = 10) => {
  // Pass this to the container ref
  const sliderRef = useRef<HTMLUListElement>(null);
  const [scrollPosition, setScrollPosition] = useState(buttonsPosition);

  const handleScroll = () => {
    if (sliderRef.current) {
      setScrollPosition(sliderRef.current.scrollLeft);
      // Check if the current scroll position is at the end of the row
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (sliderRef.current)
        sliderRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 500;
    }
  };
  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 500;
    }
  };
  return {
    sliderRef,
    slideLeft,
    slideRight,
    scrollPosition,
  };
};
export default useDynamicScroll;
