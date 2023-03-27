import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/src/vanta.waves';

const WaveBackground = () => {
  const myRef = useRef(null);

  useEffect(() => {
    if (!myRef.current) return;

    const vantaEffect = WAVES({
      el: myRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x0,
      shininess: 20.0,
      waveHeight: 15.0,
      waveSpeed: 0.5,
      zoom: 0.5,
    });

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={myRef}
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: -2,
      }}
    />
  );
};

export default WaveBackground;
