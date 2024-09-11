import "./index.css";
import {
  OrbitControls,
  Environment,
  PivotControls,
  Html,
} from "@react-three/drei";

import { useControls } from "leva";

function App() {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <Environment preset="city" />

      {/* <Html position={[0, 0, 0]}>Olá</Html>
      <Html position={[0, 0, 0]}>你好</Html>
      <Html position={[0, 0, 0]}>こんにちは</Html>
      <Html position={[0, 0, 0]}>안녕하세요</Html>
      <Html position={[0, 0, 0]}>مرحبا</Html>   */}

      <mesh position={[-2, 0, -2]}>
        <boxGeometry />
        <meshStandardMaterial color="blue" />
        <Html wrapperClass="text" position={[-0.6, -1.05, 0]}>
          파란색
        </Html>
      </mesh>

      <mesh position={[1, 2, -6]}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
        <Html position={[-0.9, -1.05, 0]} wrapperClass="text">
          빨간색
        </Html>
      </mesh>

      <mesh position={[1, -3, -3]}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
        <Html position={[-0.65, -1.2, 0]} wrapperClass="text">
          주황색
        </Html>
      </mesh>

      <mesh position={[-4, -4, -5]}>
        <boxGeometry />
        <meshStandardMaterial color="green" />
        <Html position={[-1, -1.15, 0]} wrapperClass="text">
          초록색
        </Html>
      </mesh>

      <mesh position={[5, -2, -6]}>
        <boxGeometry />
        <meshStandardMaterial color="purple" />
        <Html position={[-0.8, -1.05, 0]} wrapperClass="text">
          보라색
        </Html>
      </mesh>

      <mesh position={[-5, 4, -5]}>
        <boxGeometry />
        <meshStandardMaterial color="silver" />
        <Html position={[-0.5, -1.05, 0]} wrapperClass="text">
          회색
        </Html>
      </mesh>

      <mesh position={[5, 4, -5]}>
        <boxGeometry />
        <meshStandardMaterial color="pink" />
        <Html position={[-1, -1.05, 0]} wrapperClass="text">
          분홍색
        </Html>
      </mesh>

      <mesh position={[, 0, -2]}>
        <boxGeometry />
        <meshStandardMaterial color="blue" />
        <Html wrapperClass="main">안녕하세요</Html>
      </mesh>
    </>
  );
}

export default App;
