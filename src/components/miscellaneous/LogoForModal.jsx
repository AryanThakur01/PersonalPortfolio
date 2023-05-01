import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Model = ({ link }) => {
  const model = useGLTF(link);
  return (
    <mesh>
      {console.log(link)}
      <hemisphereLight intensity={0.2} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-10, 50, 10]}
        penumbra={1}
        castShadow
        intensity={1}
      />
      <primitive object={model.scene} scale={1.1} />
    </mesh>
  );
};

const LogoForModal = ({ link }) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [1.5, 0, -1.5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<></>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          autoRotate={true}
          autoRotateSpeed={8.2}
          enableDamping
        />
        <Model link={link} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default LogoForModal;
