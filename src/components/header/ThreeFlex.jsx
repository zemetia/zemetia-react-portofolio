import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, Stars } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

// 3D Reference
import Nama3d from '../../assets/3dObject/nama.obj'
import Perkenalkan3d from '../../assets/3dObject/perkenalkan.obj'
import Linkedin3d from '../../assets/3dObject/linkedin.stl'
import Instagram3d from '../../assets/3dObject/insta.obj'
import Github3d from '../../assets/3dObject/github.stl'
import LinkedinText3d from '../../assets/3dObject/openLinkedin.obj'
import InstagramText3d from '../../assets/3dObject/openInstagram.obj'
import GithubText3d from '../../assets/3dObject/myProjects.obj'
import Next3d from '../../assets/3dObject/next.obj'
import NextText3d from '../../assets/3dObject/gotoaboutme.obj'

function random(from, to){
    return Math.random() * (to - from) + from
}

function Model(props) {
    const object = useLoader(props.loader, props.src)
    return <primitive object={object} position={props.position} />
}


function Social3DLogo(props) {
    const logo = useRef()
    const [hovered, setHover] = useState(false)
    var speed = 0.01
    useFrame((state, delta) => {
        if(!hovered) logo.current.position.y += speed
        if ( logo.current.position.y > props.position[1] + 0.6 || logo.current.position.y < props.position[1] - 0.6)
            speed *= -1
    })

    return (
        <mesh
        ref={logo}
        scale={hovered? props.scale * 1.07 : props.scale}
        onClick={(event) => window.open(props.link)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        position={props.position}
        >
            <mesh 
                visible={hovered}
                scale={props.textScale? props.textScale : 0.01}
                position = {props.textPosition? props.textPosition : props.position}
            >
                <Model loader={OBJLoader} src={props.text} />
            </mesh>
            <Model loader={props.loader} src={props.src} />
        </mesh>
    )
}

function Box(props) {
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => {
        mesh.current.rotation.x += random(0.001, 0.02)
        mesh.current.rotation.y += random(0.001, 0.02)
        mesh.current.position.x += 0.01
        if(mesh.current.position.x > 30)
            mesh.current.position.x = -30
    })
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.2 : 0.5}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'blue' : 'red'} />
      </mesh>
    )
  }

function GenerateRandomBox(props){
    let boxes = []
    for (var i = 0; i < props.amount; i++) {
        //boxes.push(<Box position={[random(-14, 14), random(-8, 8), random(-10, 3)]} />)
        boxes.push(<Box key={i} position={[
            random(props.edge.x[0], props.edge.x[1]), 
            random(props.edge.y[0], props.edge.y[1]), 
            random(props.edge.z[0], props.edge.z[1]), 
            ]} />)
    }

    return (
        <group dispose={null}>
            {boxes}
        </group> 
        )
}

const Header = () => {
    //if (!props.data) return null;
    return (
        <div className='header_3dcanvas'>
            <Canvas>
                <PerspectiveCamera
                    makeDefault
                    position={[7, 13, 26]}
                    zoom={0.7}
                />
                <OrbitControls />
                <Stars />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <GenerateRandomBox amount={50} edge={{x:[-30, 30], y:[-18, 18], z:[-15, 15]}} />
                <mesh scale={0.01} position={[0, 0, 0]}><Model loader={OBJLoader} src={Nama3d} /></mesh>
                <mesh scale={0.009} position={[-2.8, 3, -1]}><Model loader={OBJLoader} src={Perkenalkan3d} /></mesh>

                <Social3DLogo 
                    loader={STLLoader} 
                    text={LinkedinText3d} 
                    textScale={0.018}
                    textPosition={[0, -4.6, 0]}
                    scale={0.38} 
                    src={Linkedin3d} 
                    link="https://linkedin.com/in/yoel-mountanus-sitorus/" 
                    position={[-3,-3, -0.3]} 
                />

                <Social3DLogo 
                    loader={OBJLoader} 
                    text={InstagramText3d} 
                    textScale={0.036}
                    textPosition={[-10.8, 3.4, 0]}
                    scale={0.18} 
                    src={Instagram3d} 
                    link="https://instagram.com/za_zymer" 
                    position={[3,-5.35, 0]} 
                />

                <Social3DLogo 
                    loader={STLLoader} 
                    text={GithubText3d} 
                    textScale={5}
                    textPosition={[1500, 3400, 200]}
                    scale={0.001} 
                    src={Github3d} 
                    link="https://github.com/zemetia" 
                    position={[6, 2, 0]} 
                />

                <mesh 
                    onClick={() => window.open("#about", "_self")}
                    scale={0.024} 
                    position={[10,-4, 0]}
                >
                    <Model loader={OBJLoader} src={Next3d} />
                </mesh>
            </Canvas>
        </div>
    )
}


export default Header