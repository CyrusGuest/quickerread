import React from 'react'
import { useEffect } from 'react';

const VerticalAd = () => {
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [].push({});
  }, []);
  
  return (
    <ins className="adsbygoogle md:block hidden m-4"
      data-ad-client="ca-pub-6569742810745943"
      data-ad-slot="9601749194"
      data-ad-format="auto"
      data-full-width-responsive="true">
    </ins>
  )
}

export default VerticalAd