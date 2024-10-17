"use client"

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { OrbitControls, shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { Vector3 } from 'three'

const NodeMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.2, 0.5, 1),
    mousePosition: new THREE.Vector3(0, 0, 0),
  },
  // Vertex shader
  `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float time;
  void main() {
    vUv = uv;
    vPosition = position;
    vec3 pos = position;
    pos.y += sin(time * 0.5 + position.x * 2.0) * 0.05;
    pos.x += cos(time * 0.5 + position.z * 2.0) * 0.05;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
  `,
  // Fragment shader
  `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform vec3 color;
  uniform vec3 mousePosition;
  uniform float time;
  void main() {
    float dist = length(vPosition - mousePosition);
    float glow = 1.0 - smoothstep(0.0, 1.0, dist);
    vec3 finalColor = mix(color, vec3(1.0), glow * 0.6);
    float alpha = smoothstep(0.3, 0.4, 1.0 - length(vUv - 0.5));
    gl_FragColor = vec4(finalColor, alpha);
  }
  `
)

extend({ NodeMaterial })

function Nodes({ count = 50, mousePosition }) {
  const mesh = useRef()
  const light = useRef()

  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      new Vector3(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      ).toArray(positions, i * 3)
      sizes[i] = Math.random() * 0.2 + 0.1
    }
    return [positions, sizes]
  }, [count])

  useFrame(({ clock }) => {
    mesh.current.material.uniforms.time.value = clock.getElapsedTime()
    mesh.current.material.uniforms.mousePosition.value = mousePosition
    light.current.position.set(
      mousePosition.x * 2,
      mousePosition.y * 2,
      mousePosition.z * 2
    )
  })

  return (
    <>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attachObject={['attributes', 'position']}
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attachObject={['attributes', 'size']}
            count={sizes.length}
            array={sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <nodeMaterial
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <pointLight ref={light} distance={20} intensity={1.5} color="#ffffff" />
    </>
  )
}

function Scene() {
  const { mouse, viewport } = useThree()
  const mousePosition = useMemo(() => new THREE.Vector3(), [])

  useFrame(({ camera }) => {
    mousePosition.set(
      (mouse.x * viewport.width) / 2,
      (mouse.y * viewport.height) / 2,
      0
    )
    mousePosition.unproject(camera)
  })

  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <Nodes mousePosition={mousePosition} />
    </>
  )
}

export default function CompactNetworkAnimation() {
  return (
    <div className="w-[300px] h-[300px] border border-primary rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60, near: 0.1, far: 1000 }}
        style={{
          background: 'var(--background)',
        }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}