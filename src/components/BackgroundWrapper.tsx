import React from 'react';
import LightRays from './ui/LightRays';

import { RaysOrigin } from './ui/LightRays';

interface BackgroundWrapperProps {
  children: React.ReactNode;
  withLightRays?: boolean;
  raysOrigin?: RaysOrigin;
  className?: string;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({
  children,
  withLightRays = false,
  raysOrigin = 'top-center',
  className = ''
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      {withLightRays && (
        <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
          <LightRays
            raysOrigin={raysOrigin}
            raysColor="#ffffff"
            raysSpeed={1.4}
            lightSpread={0.4}
            rayLength={1}
            pulsating={false}
            fadeDistance={1.5}
            saturation={1.0}
            followMouse={true}
            mouseInfluence={0.0}
            noiseAmount={0.05}
            distortion={0.0}
            className="w-full h-full"
          />
        </div>
      )}
      
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;