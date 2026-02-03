import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isSubVisible, setIsSubVisible] = useState(false);
  const isLockedRef = useRef(true);
  const isSubVisibleRef = useRef(false);

  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = "hidden";

    const handleWheel = (e: WheelEvent) => {
      if (isLockedRef.current) {
        e.preventDefault();
        
        if (e.deltaY > 0 && !isSubVisibleRef.current) {
          isSubVisibleRef.current = true;
          setIsSubVisible(true);
          // Unlock after animation completes
          setTimeout(() => {
            isLockedRef.current = false;
            document.body.style.overflow = "auto";
          }, 800);
        }
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isLockedRef.current) {
        e.preventDefault();
        
        const touchEndY = e.touches[0].clientY;
        if (touchStartY - touchEndY > 30 && !isSubVisibleRef.current) {
          isSubVisibleRef.current = true;
          setIsSubVisible(true);
          setTimeout(() => {
            isLockedRef.current = false;
            document.body.style.overflow = "auto";
          }, 800);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-[#000000]">
      {/* Central Glow - Only in Hero Section */}
      <div className="hero-central-glow" />
      
      {/* Grid Mesh - Only in Hero Section */}
      <div className="hero-grid-mesh" />

      {/* Floating Navigation */}
      <nav className="floating-nav fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[1000px] h-16 rounded-[22px] flex items-center justify-between px-8 z-50">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center mr-3">
            <div className="w-4 h-4 bg-background rounded-sm rotate-45" />
          </div>
          <span className="font-black tracking-tighter text-xl italic text-foreground">NEXUS</span>
        </div>
        
        <div className="hidden md:flex items-center">
          <a href="#features" className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground mx-4 tracking-wide">
            SaaS Core
          </a>
          <a href="#process" className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground mx-4 tracking-wide">
            High End Design
          </a>
          <a href="#footer" className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground mx-4 tracking-wide">
            Performance
          </a>
        </div>
        
        <a 
          href="#process" 
          className="bg-foreground text-background px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:bg-accent hover:text-accent-foreground"
        >
          Escalar agora
        </a>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 h-full flex flex-col justify-center items-center px-8">
        {/* Static Title - No Animation */}
        <div className="flex flex-col items-center">
          <h1 className="shimmer-text text-[clamp(3rem,10vw,8.5rem)] font-black text-center leading-[0.95] tracking-[-0.06em] uppercase flex flex-col items-center">
            <span>FUTURE</span>
            <span>STANDARDS</span>
          </h1>
        </div>

        {/* Sub Headline - Static Red Line */}
        <motion.div 
          className="absolute bottom-16 left-8 md:left-16 max-w-[420px] border-l-2 border-accent pl-8 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isSubVisible ? 1 : 0, 
            y: isSubVisible ? 0 : 20 
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            A sua interface é a sua força de vendas silenciosa. Transformamos SaaS complexos em experiências desejáveis que dominam o mercado e reduzem o churn.
          </p>
        </motion.div>
      </main>
    </section>
  );
};

export default HeroSection;
