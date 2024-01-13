import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center, OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";

function Circle(props) {
  const ref = useRef();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={[0.5]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "darkblue"} />
    </mesh>
  );
}

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Circle position={[0, 1.2, 0]} />
        <Center position={[0, 0.2, 0]}>
          <Text3D
            font={"../fonts/Audiowide_Regular.json"}
            size={0.45}
            height={0.2}
            curveSegments={3}
          >
            Virtus Axis
            <meshNormalMaterial />
          </Text3D>

          <OrbitControls />
        </Center>
        <Center position={[0, -0.2, 0]}>
          <Text3D font={"../fonts/Audiowide_Regular.json"} size={0.15}>
            Porque Tu Negocio
          </Text3D>
        </Center>

        <Center position={[0, -0.4, 0]}>
          <Text3D font={"../fonts/Audiowide_Regular.json"} size={0.1}>
            Es un Reflejo de Quien Eres
          </Text3D>
        </Center>
      </Canvas>
    </>
  );
}

export default App;
