import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SolutionsHub from '../components/solutions/SolutionsHub';

export default function ProductsPage() {
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    const targetId = id || window.location.hash.replace('#', '');
    if (targetId) {
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [id]);

  return (
    <div className="page-wrap bg-[#FAFAFC]">
      <SolutionsHub />
    </div>
  );
}

