import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";

export default function RandomObject() {
    let [shape, setShape] = useState("circle");
    let [x, setX] = useState(0);
    let [z, setZ] = useState(0);
    const lastUpdateRef = useRef(0);

    function coords(state) {
        setX(Math.random() * 5 + state.customObject?.z);
        setZ(Math.random() * 4 - 20 + state.customObject?.z);

        // Randomly select a shape
        const shapes = ["circle", "square", "cube", "triangle", "pyramid", "rectangle"];
        setShape(shapes[Math.floor(Math.random() * shapes.length)]);
    }

    useFrame((state) => {
        const now = performance.now();
        const timeElapsed = now - lastUpdateRef.current;

        if (timeElapsed > 4000) {
            coords(state);
            lastUpdateRef.current = now;
        }
    });

    return (
        <>
            {shape === "circle" && <Circle z={z} x={x} />}
            {shape === "square" && <Square z={z} x={x} />}
            {shape === "cube" && <Cube z={z} x={x} />}
            {shape === "triangle" && <Triangle z={z} x={x} />}
            {shape === "pyramid" && <Pyramid z={z} x={x} />}
            {shape === "rectangle" && <Rectangle z={z} x={x} />}
        </>
    );
}

function Circle({ z, x }) {
    return (
        <RigidBody
            type="dynamic"
            position={[x || 0, 9 + Math.random() * 5, z || 0]}
            colliders="ball"
            restitution={0.6}
        >
            <mesh>
                <cylinderGeometry args={[4, 4, 2, 32]} /> {/* Increased radius and height */}
                <meshBasicMaterial color="orange" />
            </mesh>
        </RigidBody>
    );
}

function Square({ z, x }) {
    return (
        <RigidBody
            type="dynamic"
            position={[x || 0, 9 + Math.random() * 5, z || 0]}
        >
            <mesh>
                <boxGeometry args={[2, 2, 20]} /> {/* Increased dimensions */}
                <meshBasicMaterial color="green" />
            </mesh>
        </RigidBody>
    );
}

function Cube({ z, x }) {
    return (
        <RigidBody
            type="dynamic"
            position={[x || 0, 9 + Math.random() * 5, z || 0]}
        >
            <mesh>
                <boxGeometry args={[4, 4, 4]} /> {/* Increased dimensions */}
                <meshBasicMaterial color="blue" />
            </mesh>
        </RigidBody>
    );
}

function Triangle({ z, x }) {
    return (
        <RigidBody
            type="dynamic"
            position={[x || 0, 9 + Math.random() * 5, z || 0]}
        >
            <mesh>
                <coneGeometry args={[2, 2, 3]} /> {/* Increased radius and height */}
                <meshBasicMaterial color="red" />
            </mesh>
        </RigidBody>
    );
}

function Pyramid({ z, x }) {
    return (
        <RigidBody
            type="dynamic"
            position={[x || 0, 9 + Math.random() * 5, z || 0]}
        >
            <mesh>
                <coneGeometry args={[2, 4, 4]} /> {/* Increased radius and height */}
                <meshBasicMaterial color="purple" />
            </mesh>
        </RigidBody>
    );
}

function Rectangle({ z, x }) {
    return (
        <RigidBody
            type="dynamic"
            position={[x || 0, 9 + Math.random() * 5, z || 0]}
        >
            <mesh>
                <boxGeometry args={[4, 1, 10]} /> {/* Increased width and depth */}
                <meshBasicMaterial color="cyan" />
            </mesh>
        </RigidBody>
    );
}
