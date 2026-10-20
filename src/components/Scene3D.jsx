import { Canvas } from "@react-three/fiber";
import {
  Float,
  MeshTransmissionMaterial,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Suspense } from "react";

function Orb() {
  return (
    <>
      {/* <Float speed={1.15} rotationIntensity={0.45} floatIntensity={0.85}>
        <mesh rotation={[0.25, 0.4, 0.1]} scale={1.38}>
          <icosahedronGeometry args={[1, 2]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.28}
            chromaticAberration={0.04}
            anisotropy={0.15}
            distortion={0.18}
            distortionScale={0.25}
            temporalDistortion={0.12}
            color="#d6b878"
            roughness={0.14}
            metalness={0.18}
          />
        </mesh>
      </Float> */}
    </>
  );
}

export default function Scene3D() {
  return (
    <>
      {/* <div className="scene3d" aria-hidden="true">
        <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.5]}>
          <ambientLight intensity={1.2} />
          <directionalLight
            position={[3, 4, 4]}
            intensity={3}
            color="#ffe5a7"
          />
          <pointLight position={[-3, -1, 2]} intensity={2} color="#5b9c82" />
          <Suspense fallback={null}>
            <Orb />
            <Environment preset="city" />
            <ContactShadows
              position={[0, -1.9, 0]}
              opacity={0.25}
              scale={4}
              blur={2.5}
            />
          </Suspense>
        </Canvas>
      </div> */}
    </>
  );
}
