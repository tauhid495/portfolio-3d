import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";

const Computer = ({hover}) => {
  const computer = useGLTF("./computer/scene.gltf");

  const ref = useRef();

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 15;
    const y = (mouse.y * viewport.height) / 20;
    ref.current.lookAt(x, y, 1);
  });


  return (
    <mesh ref={ref}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} position={[30, 30, 50]} />
      <primitive
        object={computer.scene}
        scale={.2}
        position={[0, 0, 0]}
        rotation={[0.3, 0, 0]}
      />
    </mesh>
  );
};

const ComputerCanvas = ({ setSpean }) => {
  return (
    
      <Canvas
      // frameloop="demand"
      // shadows
      // camera={{ position: [20, -3, -5], fov: 30 }}
      // gl={{ preserveDrawingBuffer: true }}
      >
        {/* <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} /> */}
        <Suspense fallback={<CanvasLoader setSpean={setSpean} />}>
          {/* <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.2}
          maxAzimuthAngle={Math.PI / 1.5}
          minAzimuthAngle={Math.PI / 4.5}
          rotateSpeed={0.4}
          rotation={3}
        /> */}
          <Computer />
        </Suspense>
      </Canvas>
    
  );
};

export default ComputerCanvas;
