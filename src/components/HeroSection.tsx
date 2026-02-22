import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isSubVisible, setIsSubVisible] = useState(false);
  const isLockedRef = useRef(true);
  const isSubVisibleRef = useRef(false);

  useEffect(() => {
    // Trava o scroll no mount
    document.body.style.overflow = "hidden";

    const handleWheel = (e: WheelEvent) => {
      if (isLockedRef.current) {
        // Se estiver bloqueado, cancela o scroll padrão da página
        e.preventDefault();

        // Se scrollar para baixo e a sub ainda não apareceu
        if (e.deltaY > 10 && !isSubVisibleRef.current) {
          isSubVisibleRef.current = true;
          setIsSubVisible(true);

          // Libera o scroll mais rápido para evitar a sensação de "travado"
          setTimeout(() => {
            isLockedRef.current = false;
            document.body.style.overflow = "auto";
          }, 500);
        } else if (e.deltaY > 50 && isSubVisibleRef.current) {
          // Se o usuário insistir no scroll para baixo após a sub já estar visível, 
          // liberamos imediatamente para não frustrar.
          isLockedRef.current = false;
          document.body.style.overflow = "auto";
        }
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isLockedRef.current) {
        const touchEndY = e.touches[0].clientY;
        const deltaY = touchStartY - touchEndY;

        // Se scrollar para baixo via touch
        if (deltaY > 10) {
          e.preventDefault();
          if (!isSubVisibleRef.current) {
            isSubVisibleRef.current = true;
            setIsSubVisible(true);
            setTimeout(() => {
              isLockedRef.current = false;
              document.body.style.overflow = "auto";
            }, 1000);
          }
        }
      }
    };

    const handleScrollReset = () => {
      if (window.scrollY <= 5 && isSubVisibleRef.current && !isLockedRef.current) {
        setIsSubVisible(false);
        isSubVisibleRef.current = false;
        isLockedRef.current = true;
        document.body.style.overflow = "hidden";
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("scroll", handleScrollReset, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", handleScrollReset);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section className="relative h-screen bg-background">
      {/* Central Glow - Only in Hero Section */}
      <div className="hero-central-glow" />

      {/* Ambient Red Glow */}
      <div className="red-glow-ambient red-glow-bottom-right opacity-30" />

      {/* Grid Mesh - Only in Hero Section */}
      <div className="hero-grid-mesh" />

      {/* Bottom Fade Overlay for Smooth Section Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      {/* Floating Navigation */}
      <nav className="floating-nav fixed top-6 left-1/2 -translate-x-1/2 w-[60%] max-w-[1000px] h-16 rounded-[22px] flex items-center justify-between px-6 z-50">
        <div className="flex items-center">
          <span className="font-black tracking-tighter text-xl italic text-foreground uppercase">SaaS Studio</span>
        </div>

        <div className="hidden md:flex items-center">
          <a href="#" className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground mx-4 tracking-wide">
            Início
          </a>
          <a href="#process" className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground mx-4 tracking-wide">
            Como funciona
          </a>
          <a href="#projects" className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground mx-4 tracking-wide">
            Projetos
          </a>
        </div>

        <a
          href="#process"
          className="btn-fill-right bg-white/10 border border-white/5 text-foreground px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all"
        >
          Entre em Contato
        </a>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 h-full flex flex-col justify-center items-center px-8">
        {/* Static Title - No Animation */}
        <div className="flex flex-col items-center">
          <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-black text-center leading-[1] tracking-[-0.05em] uppercase text-foreground max-w-5xl">
            Criamos SaaS e sites que <span className="text-muted-foreground">convertem</span>
          </h1>
        </div>

        {/* Sub Headline - Red Line */}
        <motion.div
          className="absolute bottom-16 left-8 md:left-16 max-w-[420px] border-l-2 border-accent pl-8 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isSubVisible ? 1 : 0,
            y: isSubVisible ? 0 : 20
          }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Design estratégico, tecnologia moderna e performance para produtos digitais que querem crescer de verdade.
          </p>
        </motion.div>
      </main>
    </section>
  );
};

export default HeroSection;
