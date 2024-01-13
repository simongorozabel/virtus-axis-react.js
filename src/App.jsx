import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Text3D, Center, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
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
