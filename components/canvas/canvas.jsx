import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Human from '../../models/human/Human';
import Robot from '../../models/robot/Robot';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Ruin from '../../models/ruin/Ruin';
// import Ruin from '../../models/ruin/Ruin';

function CharacterCanvas() {
  /**
   * healt - plus
   * armor - shield
   * energy - lightning
   * strength - muscle / dumbell
   * agylity - running
   * intellect - book
   */
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[1, 4, 9]} />
      <ambientLight />
      {/* <Ruin /> */}
      <Human />
      <OrbitControls />
    </Canvas>
  );
}

export default CharacterCanvas;
