import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MagicText } from "@/components/ui/magic-text";

function AnimatedWhiteGreenBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Fullscreen Fixed Animated White & Green Combo Background Canvas */}
      <div className="fixed inset-0 z-[-10] pointer-events-none overflow-hidden bg-gradient-to-br from-white via-emerald-50/70 to-emerald-100/40 animate-mesh-bg">
        
        {/* Subtle Geometric Eco-Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.08]" 
          style={{
            backgroundImage: `radial-gradient(#059669 1.2px, transparent 1.2px), radial-gradient(#10b981 1.2px, #f8fafc 1.2px)`,
            backgroundSize: '48px 48px',
            backgroundPosition: '0 0, 24px 24px'
          }}
        />

        {/* Floating Glowing Orb 1: Top-Left Vibrant Emerald */}
        <div
          className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-emerald-400/40 via-teal-300/35 to-green-500/20 blur-3xl animate-float-slow"
          style={{
            transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`
          }}
        />

        {/* Floating Glowing Orb 2: Top-Right Fresh Mint & White Light */}
        <div
          className="absolute top-1/4 -right-20 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-green-300/45 via-emerald-200/40 to-lime-200/25 blur-3xl animate-float-reverse"
          style={{
            transform: `translate(${-mousePos.x * 0.6}px, ${-mousePos.y * 0.6}px)`
          }}
        />

        {/* Floating Glowing Orb 3: Bottom-Left Pure Emerald Wave */}
        <div
          className="absolute -bottom-32 left-10 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-emerald-300/35 via-teal-200/40 to-emerald-400/20 blur-3xl animate-float-slow"
          style={{
            transform: `translate(${mousePos.x * 0.5}px, ${-mousePos.y * 0.5}px)`
          }}
        />

        {/* Floating Center Orb: Pulsing Pure White & Eco Green Light */}
        <div
          className="absolute top-1/2 left-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-white/90 via-emerald-300/30 to-teal-100/40 blur-3xl animate-float-center animate-pulse-glow"
        />

        {/* Bottom Right Glowing Eco Wave */}
        <div
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-emerald-500/30 via-green-300/30 to-white/60 blur-3xl animate-float-reverse"
        />

        {/* --- ANIMATED COMPANY LOGO BACKGROUND WATERMARKS & ORBS --- */}

        {/* Top-Right Ambient Floating Logo Badge */}
        <div 
          className="absolute top-[12%] right-[8%] w-36 h-36 sm:w-48 sm:h-48 rounded-3xl bg-white/30 backdrop-blur-md p-3 border border-emerald-300/30 shadow-xl opacity-25 animate-float-slow transform rotate-6"
          style={{
            transform: `translate(${-mousePos.x * 0.4}px, ${mousePos.y * 0.4}px) rotate(6deg)`
          }}
        >
          <img src="/logo.jpg" alt="WasteGoGH Logo Watermark" className="w-full h-full object-contain rounded-2xl mix-blend-multiply" />
        </div>

        {/* Center-Left Ambient Floating Logo Badge */}
        <div 
          className="absolute top-[48%] left-[4%] w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-emerald-200/20 to-teal-100/20 backdrop-blur-md p-4 border border-emerald-400/30 shadow-2xl opacity-20 animate-float-reverse transform -rotate-12"
          style={{
            transform: `translate(${mousePos.x * 0.6}px, ${-mousePos.y * 0.6}px) rotate(-12deg)`
          }}
        >
          <img src="/logo.jpg" alt="WasteGoGH Logo Watermark" className="w-full h-full object-contain rounded-full mix-blend-multiply" />
        </div>

        {/* Bottom-Right Large Watermark Logo */}
        <div 
          className="absolute bottom-[10%] right-[12%] w-56 h-56 sm:w-72 sm:h-72 rounded-3xl bg-emerald-50/20 backdrop-blur-sm p-6 border border-emerald-300/20 opacity-15 animate-pulse-subtle transform rotate-3"
          style={{
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px) rotate(3deg)`
          }}
        >
          <img src="/logo.jpg" alt="WasteGoGH Logo Watermark" className="w-full h-full object-contain rounded-2xl mix-blend-multiply" />
        </div>

        {/* Soft Ambient Overlay for Light Uniformity */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
      </div>


    </>
  );
}

export default function App() {
  const [aboutContainer, setAboutContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("about-magic-text-root");
    if (el) {
      setAboutContainer(el);
    }
  }, []);

  return (
    <>
      <AnimatedWhiteGreenBackground />
      {aboutContainer &&
        createPortal(
          <MagicText text="WasteGoGH is built to connect Ghanaian households, estates, commercial businesses, and markets directly with reliable, verified waste collectors. By pairing real-time logistics, location intelligent dispatching, and digital mobile money payments, we eliminate irregular pickups and make waste disposal effortless and accountable." />,
          aboutContainer
        )}
    </>
  );
}
