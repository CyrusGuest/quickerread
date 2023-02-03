import React from 'react'
import { useEffect } from 'react';

const VerticalAd = () => {
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [].push({});
  }, []);
  
  return (
    <ins className="adsbygoogle block"
      data-ad-client="ca-pub-1252459049912505"
      data-ad-slot="7625127970"
      data-ad-format="auto"
      data-full-width-responsive="true">
    </ins>
  )
}

export default VerticalAd