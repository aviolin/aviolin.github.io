import React, { useState, useEffect } from 'react';

const useIntersectionObserver = (targetRef, callback, options=null) => {

  if (!options) 
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.0
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (targetRef.current) observer.observe(targetRef.current);
    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    }

  }, [targetRef, options]);
}

export default useIntersectionObserver;