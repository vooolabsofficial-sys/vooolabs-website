import React, { useEffect } from 'react';
import SolutionsHub from '../components/solutions/SolutionsHub';

export default function ProductsPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="page-wrap bg-[#FAFAFC]">
      <SolutionsHub />
    </div>
  );
}

