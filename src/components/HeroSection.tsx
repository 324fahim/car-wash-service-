import { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshReflectorMaterial, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

// ─── 3D CAR ─────────────────────────────────────────────────────────────────
function LuxuryCar({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.PointLight>(null);
  const wheelRefs = useRef<(THREE.Group | null)[]>([null, null, null, null]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouseX * 0.4 + Math.sin(t * 0.25) * 0.08,
      0.04
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouseY * 0.12,
      0.04
    );
    groupRef.current.position.y = -0.2 + Math.sin(t * 0.6) * 0.04;

    if (glowRef.current) {
      glowRef.current.intensity = 2.5 + Math.sin(t * 1.8) * 0.8;
      glowRef.current.position.x = Math.sin(t * 0.7) * 2;
    }

    // Spin wheels
    wheelRefs.current.forEach((w) => {
      if (w) w.rotation.x = t * 1.5;
    });
  });

  const bodyMat = { color: '#080808', metalness: 1, roughness: 0.04, envMapIntensity: 2.5 };
  const glassMat = { color: '#001828', metalness: 0.05, roughness: 0, transparent: true, opacity: 0.65, envMapIntensity: 4 };
  const neonMat = (col: string) => ({ color: col, emissive: col, emissiveIntensity: 1.2, metalness: 0.8, roughness: 0.3 });

  return (
    <group ref={groupRef} position={[0.3, -0.2, 0]}>
      <Float speed={1.2} rotationIntensity={0} floatIntensity={0.25}>
        <group>
          {/* ── Body ── */}
          <mesh position={[0, 0, 0]} castShadow>
            <boxGeometry args={[4.4, 0.52, 1.85]} />
            <meshStandardMaterial {...bodyMat} />
          </mesh>

          {/* Cabin */}
          <mesh position={[-0.15, 0.57, 0]}>
            <boxGeometry args={[2.3, 0.72, 1.62]} />
            <meshStandardMaterial {...bodyMat} />
          </mesh>

          {/* Front glass */}
          <mesh position={[0.9, 0.57, 0]} rotation={[0, 0, -0.48]}>
            <boxGeometry args={[0.85, 0.68, 1.55]} />
            <meshStandardMaterial {...glassMat} />
          </mesh>

          {/* Rear glass */}
          <mesh position={[-1.15, 0.52, 0]} rotation={[0, 0, 0.58]}>
            <boxGeometry args={[0.72, 0.62, 1.55]} />
            <meshStandardMaterial {...glassMat} />
          </mesh>

          {/* Hood */}
          <mesh position={[2.0, 0.18, 0]} rotation={[0, 0, -0.22]}>
            <boxGeometry args={[1.25, 0.38, 1.8]} />
            <meshStandardMaterial {...bodyMat} />
          </mesh>

          {/* Trunk */}
          <mesh position={[-1.9, 0.22, 0]} rotation={[0, 0, 0.18]}>
            <boxGeometry args={[0.95, 0.42, 1.8]} />
            <meshStandardMaterial {...bodyMat} />
          </mesh>

          {/* Side skirts – neon blue */}
          {[1, -1].map((side, i) => (
            <mesh key={i} position={[0, -0.29, side * 0.96]}>
              <boxGeometry args={[4.1, 0.14, 0.09]} />
              <meshStandardMaterial {...neonMat('#00d4ff')} />
            </mesh>
          ))}

          {/* Spoiler post */}
          <mesh position={[-2.05, 0.56, 0]}>
            <boxGeometry args={[0.1, 0.22, 1.82]} />
            <meshStandardMaterial {...bodyMat} />
          </mesh>
          {/* Spoiler blade */}
          <mesh position={[-2.05, 0.68, 0]}>
            <boxGeometry args={[0.42, 0.045, 1.92]} />
            <meshStandardMaterial {...bodyMat} roughness={0.02} />
          </mesh>

          {/* ── Wheels ── */}
          {([
            [1.55, -0.45, 1.02],
            [1.55, -0.45, -1.02],
            [-1.35, -0.45, 1.02],
            [-1.35, -0.45, -1.02],
          ] as [number, number, number][]).map((pos, i) => (
            <group key={i} ref={(el) => { wheelRefs.current[i] = el; }} position={pos} rotation={[0, 0, 0]}>
              {/* Tire */}
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.37, 0.135, 20, 40]} />
                <meshStandardMaterial color="#0d0d0d" metalness={0.15} roughness={0.92} />
              </mesh>
              {/* Rim face */}
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.27, 0.27, 0.13, 20]} />
                <meshStandardMaterial color="#151525" metalness={0.98} roughness={0.08} envMapIntensity={4} />
              </mesh>
              {/* 5 spokes */}
              {Array.from({ length: 5 }).map((_, j) => (
                <mesh key={j} rotation={[Math.PI / 2, (j * Math.PI * 2) / 5, 0]}>
                  <boxGeometry args={[0.038, 0.44, 0.055]} />
                  <meshStandardMaterial color="#aaaaaa" metalness={1} roughness={0.08} />
                </mesh>
              ))}
              {/* Hub cap */}
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.055, 0.055, 0.15, 8]} />
                <meshStandardMaterial {...neonMat('#00d4ff')} emissiveIntensity={1.5} />
              </mesh>
            </group>
          ))}

          {/* ── Lights ── */}
          {/* Headlights */}
          {[0.72, -0.72].map((z, i) => (
            <mesh key={i} position={[2.18, 0.06, z]}>
              <boxGeometry args={[0.1, 0.1, 0.38]} />
              <meshStandardMaterial color="#ffffff" emissive="#00d4ff" emissiveIntensity={4} transparent opacity={0.92} />
            </mesh>
          ))}
          {/* Tail lights */}
          {[0.72, -0.72].map((z, i) => (
            <mesh key={i} position={[-2.18, 0.06, z]}>
              <boxGeometry args={[0.1, 0.1, 0.48]} />
              <meshStandardMaterial color="#ff1100" emissive="#ff1100" emissiveIntensity={2.5} transparent opacity={0.9} />
            </mesh>
          ))}

          {/* Door accent lines */}
          {[1.03, -1.03].map((z, i) => (
            <mesh key={i} position={[0.2, 0.12, z]}>
              <boxGeometry args={[1.8, 0.018, 0.008]} />
              <meshStandardMaterial {...neonMat('#00d4ff')} emissiveIntensity={0.6} />
            </mesh>
          ))}

          {/* Grille */}
          <mesh position={[2.18, -0.1, 0]}>
            <boxGeometry args={[0.1, 0.26, 1.22]} />
            <meshStandardMaterial color="#040404" metalness={0.85} roughness={0.28} />
          </mesh>
        </group>
      </Float>

      {/* ── Ground ── */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.76, 0]}>
        <planeGeometry args={[22, 22]} />
        <MeshReflectorMaterial
          blur={[400, 120]}
          resolution={512}
          mixBlur={0.85}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#04050d"
          metalness={0.85}
          mirror={0}
        />
      </mesh>

      {/* ── Scene lighting ── */}
      <pointLight ref={glowRef} color="#00d4ff" intensity={2.5} position={[3, 2, 0]} distance={12} />
      <pointLight color="#0033cc" intensity={1.2} position={[-3, 1.5, 2.5]} distance={10} />
      <pointLight color="#00d4ff" intensity={0.6} position={[0, -0.4, 0]} distance={5} />
      <spotLight color="#ffffff" intensity={4} position={[0, 6, 4]} angle={0.28} penumbra={0.6} castShadow />
      <spotLight color="#00aaff" intensity={1.5} position={[-4, 3, -3]} angle={0.4} penumbra={0.8} />
    </group>
  );
}

// ─── PARTICLES ────────────────────────────────────────────────────────────────
function SceneParticles() {
  const positions = useMemo(() => {
    const arr = new Float32Array(120 * 3);
    for (let i = 0; i < 120; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.getElapsedTime() * 0.025;
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.035} color="#00d4ff" transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

// ─── CAMERA RIG ───────────────────────────────────────────────────────────────
function CameraRig({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouseX * 0.6, 0.025);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 0.6 + mouseY * 0.35, 0.025);
    state.camera.lookAt(0.3, 0, 0);
  });
  return null;
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouseX((e.clientX / window.innerWidth - 0.5) * 2);
      setMouseY(-(e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black" id="hero">
      {/* Scan line */}
      <div className="scanline" />

      {/* ── 3D Canvas ── */}
      <div className="absolute inset-0 z-0">
        <Canvas
          shadows
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        >
          <PerspectiveCamera makeDefault position={[0, 1.4, 6.5]} fov={52} />
          <CameraRig mouseX={mouseX} mouseY={mouseY} />
          <color attach="background" args={['#010409']} />
          <fog attach="fog" args={['#010409', 9, 22]} />
          <ambientLight intensity={0.35} />
          <Environment preset="night" />
          <Stars radius={55} depth={35} count={4000} factor={2} saturation={0} fade speed={0.4} />
          <LuxuryCar mouseX={mouseX} mouseY={mouseY} />
          <SceneParticles />
        </Canvas>
      </div>

      {/* ── Gradient overlays ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/15 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 grid-bg opacity-10 pointer-events-none" />

      {/* ── Hero Content ── */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-14 lg:px-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex items-center gap-3 mb-7"
            >
              <div className="h-px w-10 bg-[#00d4ff]" />
              <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-full border border-[#00d4ff]/20">
                <div className="w-1.5 h-1.5 rounded-full bg-[#25d366] animate-pulse" />
                <span className="font-rajdhani text-white/70 text-xs tracking-[0.25em] uppercase">
                  Al Quoz 3, Dubai — Accepting Bookings
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
              className="font-orbitron font-black leading-[1.05] mb-7"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.85 }}
                className="block text-[2.8rem] md:text-[3.8rem] lg:text-[4.5rem] text-white"
              >
                Dubai's Premier
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="block text-[2.8rem] md:text-[3.8rem] lg:text-[4.5rem] gradient-text"
              >
                Car Detailing &
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.15 }}
                className="block text-[2.8rem] md:text-[3.8rem] lg:text-[4.5rem] text-white"
              >
                Protection Experts
              </motion.span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.25 }}
              className="font-rajdhani text-lg md:text-xl text-white/55 mb-10 max-w-xl leading-relaxed tracking-wide"
            >
              Luxury Ceramic Coating · Paint Protection Film · Window Tinting<br />
              <span className="text-white/35">Premium Car Care Services in Dubai</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <button
                onClick={() => scrollTo('#booking')}
                className="btn-primary px-8 py-4 rounded text-sm inline-flex items-center gap-3 justify-center"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Get Free Quote
              </button>
              <button
                onClick={() => scrollTo('#booking')}
                className="btn-outline px-8 py-4 rounded text-sm inline-flex items-center gap-3 justify-center"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </button>
              <a
                href="tel:0526888889"
                className="flex items-center justify-center gap-2 font-rajdhani font-600 text-sm text-white/50 hover:text-white transition-colors tracking-wider"
              >
                <svg className="w-4 h-4 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                052 688 8889
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
              className="flex items-center gap-0"
            >
              {[
                { value: '1000+', label: 'Cars Detailed' },
                { value: '98%', label: 'Satisfaction' },
                { value: '5+ Yrs', label: 'Experience' },
                { value: '50+', label: 'Brands Served' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  {i > 0 && <div className="w-px h-8 bg-white/10 mx-5" />}
                  <div className="flex flex-col">
                    <span className="font-orbitron font-bold text-lg md:text-xl text-[#00d4ff] leading-tight">
                      {stat.value}
                    </span>
                    <span className="font-rajdhani text-white/35 text-xs tracking-wider uppercase">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        onClick={() => scrollTo('#services')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group"
      >
        <span className="font-rajdhani text-white/25 text-[10px] tracking-[0.4em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-white/15 group-hover:border-[#00d4ff]/40 rounded-full flex items-start justify-center pt-1.5 transition-colors"
        >
          <div className="w-1 h-2 bg-[#00d4ff] rounded-full" />
        </motion.div>
      </motion.button>

      {/* ── Right social strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4"
      >
        <div className="h-20 w-px bg-gradient-to-b from-transparent via-[#00d4ff]/30 to-transparent" />
        {[
          { label: 'IG', href: 'https://instagram.com' },
          { label: 'FB', href: 'https://facebook.com' },
          { label: 'WA', href: 'https://wa.me/9710526888889' },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border border-white/10 rounded flex items-center justify-center text-white/25 hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all text-[10px] font-orbitron font-bold"
          >
            {s.label}
          </a>
        ))}
        <div className="h-20 w-px bg-gradient-to-b from-transparent via-[#00d4ff]/30 to-transparent" />
      </motion.div>
    </section>
  );
}
