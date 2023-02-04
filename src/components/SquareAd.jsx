import React from 'react'
import { useEffect } from 'react';

const SquareAd = () => {
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [].push({});
  }, []);
  
  return (
    <ins className="adsbygoogle block md:hidden m-4"
      data-ad-client="ca-pub-6569742810745943"
      data-ad-slot="7455174376"
      data-ad-format="auto"
      data-full-width-responsive="true">
    </ins>
  )
}

export default SquareAd