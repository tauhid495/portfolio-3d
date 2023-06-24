import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
// import CanvasLoader from "./CanvasLoader";
import { OrbitControls, useGLTF } from "@react-three/drei";

const GlobeCanvas = () => {
  const earth = useGLTF("./earth_globe_physical_world_map/scene.gltf");
  return (
    <mesh>
      {/* <hemisphereLight intensity={0.5} groundColor="black" /> */}
      {/* <pointLight intensity={1} position={[50, 0, 40]} />
      <pointLight intensity={1} position={[-80, 0, -50]} /> */}
      <primitive
        object={earth.scene}
        scale={5}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      camera={{ position: [20, -3, -5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <GlobeCanvas />
      </Suspense>
    </Canvas>
  );
};
export default EarthCanvas;
