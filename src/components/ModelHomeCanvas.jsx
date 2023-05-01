import React, { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import SplashScreen from "./Loaders/SplashScreen";

const Model = () => {
  const model = useGLTF("/dream_computer_setup/scene.gltf");
  return (
    <mesh position={[-5, 3, 0]}>
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

const ModelHomeCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [60, 0, 30], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<SplashScreen />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        <Model />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ModelHomeCanvas;
