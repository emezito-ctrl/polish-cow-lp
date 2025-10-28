import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/src/cow.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)

  useEffect(() => {
  actions[names[0]]?.play()
  }, );

  const { actions, names } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Cowfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Cilindro" position={[-10.099, 0, 0]} />
                <group name="CowRig" rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_8" position={[-10.099, 0, 0]} />
                    <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.material} skeleton={nodes.Object_9.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cow.gltf')