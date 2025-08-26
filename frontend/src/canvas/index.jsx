import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import NewBox from "../Box2.jsx";

const CanvasModel = () => {


    return (
        <div className="relative w-full h-screen shadow-brown-500 ">
            {/* Background Canvas */}
            <Canvas
                className="absolute top-0 left-0 w-full h-full -z-10"
                style={{ background: "#1a1a1a" }}
                camera={{ position: [-2,2,-4], fov: 50 }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.2}
                />
                <NewBox />
            </Canvas>
        </div>
    );
};

export default CanvasModel;
