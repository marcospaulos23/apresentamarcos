import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Configuração de Física para transições suaves
 */
const BASE_SPRING: any = {
    type: "spring",
    stiffness: 100,
    damping: 22,
    mass: 1,
    restDelta: 0.001
};

const CONTENT_ANIMATION: any = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
};

interface Item {
    id: string;
    titlePart1: string;
    titlePart2: string;
    meta: string;
    description: string;
    imageSrc: string;
}

const FocusRail = ({ items }: { items: Item[] }) => {
    const [active, setActive] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const lastWheelTime = useRef(0);
    const count = items.length;

    const activeItem = items[active];

    const handlePrev = useCallback(() => {
        setActive((p) => Math.max(0, p - 1));
    }, []);

    const handleNext = useCallback(() => {
        setActive((p) => Math.min(count - 1, p + 1));
    }, [count]);

    // Efeito para interceptar o scroll e travar o usuário sem criar espaço extra na página
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheelManual = (e: WheelEvent) => {
            const rect = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const containerCenter = rect.top + rect.height / 2;
            const viewportCenter = viewportHeight / 2;

            // Só ativa a lógica se o carrossel estiver centralizado (margem de 100px)
            const isCentered = Math.abs(containerCenter - viewportCenter) < 100;

            const now = Date.now();
            const isScrollingDown = e.deltaY > 0;
            const isScrollingUp = e.deltaY < 0;

            // Condição para travar: Estar centralizado E ter cards para rodar na direção do scroll
            const canRotateDown = isScrollingDown && active < count - 1;
            const canRotateUp = isScrollingUp && active > 0;
            const shouldLock = isCentered && (canRotateDown || canRotateUp);

            if (shouldLock) {
                e.preventDefault();
                if (now - lastWheelTime.current > 700 && Math.abs(e.deltaY) > 15) {
                    if (isScrollingDown) handleNext();
                    else handlePrev();
                    lastWheelTime.current = now;
                }
            }
        };

        container.addEventListener("wheel", handleWheelManual, { passive: false });
        return () => container.removeEventListener("wheel", handleWheelManual);
    }, [active, count, handleNext, handlePrev]);

    const visibleOffsets = [-2, -1, 0, 1, 2];

    return (
        /* h-screen para ocupar a tela toda sem criar "vazio" embaixo */
        <div
            id="projects"
            ref={containerRef}
            className="relative h-screen w-full flex flex-col overflow-hidden select-none outline-none bg-background"
        >


            <div className="relative z-10 flex flex-1 flex-col items-center justify-center max-w-[1200px] mx-auto w-full px-6">

                {/* Título unificado e bold conforme pedido */}
                <div className="absolute top-12 text-center z-20">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tighter uppercase">
                        PROJETOS FEITOS
                    </h2>
                    <div className="w-16 h-[3px] bg-red-600 mx-auto -mt-2 opacity-80" />
                </div>

                {/* Carrossel Visual */}
                <div className="relative w-full flex h-[350px] md:h-[400px] items-center justify-center -mt-10 transition-all duration-700">
                    <motion.div
                        className="relative flex w-full h-full items-center justify-center"
                        style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
                    >
                        {visibleOffsets.map((offset) => {
                            const itemIndex = active + offset;

                            if (itemIndex < 0 || itemIndex >= count) return null;

                            const item = items[itemIndex];
                            const isCenter = offset === 0;
                            const dist = Math.abs(offset);

                            const xOffset = offset * 380;
                            const zOffset = isCenter ? 150 : -250 - (dist * 100);
                            const rotateY = offset * -35;
                            const scale = isCenter ? 1 : 0.75;

                            const opacity = isCenter ? 1 : 0.6 / (dist * 0.8);

                            return (
                                <motion.div
                                    key={itemIndex}
                                    className={`absolute aspect-video w-[220px] sm:w-[340px] md:w-[480px] rounded-[22px] bg-white overflow-hidden border border-black/5 shadow-2xl ${isCenter ? "z-30 cursor-default" : "z-10"
                                        }`}
                                    animate={{ x: xOffset, z: zOffset, rotateY, scale, opacity }}
                                    transition={BASE_SPRING}
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <img
                                        src={item.imageSrc}
                                        alt={item.titlePart1}
                                        className={`h-full w-full object-cover transition-all duration-1000 ${isCenter ? 'opacity-100 grayscale-0' : 'opacity-80 grayscale-[20%]'}`}
                                    />
                                    {!isCenter && <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />}
                                    {isCenter && <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent z-20" />}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Rodapé Interno do Carrossel */}
                <div className="absolute bottom-16 left-0 right-0 px-8 md:px-20 flex flex-col md:flex-row items-end justify-between w-full">

                    <div className="flex flex-col items-start text-left max-w-md">
                        <AnimatePresence mode="wait">
                            <motion.div key={activeItem.id} {...CONTENT_ANIMATION} className="space-y-0">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,1)]" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">
                                        {activeItem.meta}
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-foreground">
                                    {activeItem.titlePart1} <span className="text-muted-foreground">{activeItem.titlePart2}</span>
                                </h2>
                                <p className="text-muted-foreground text-[13px] md:text-base font-light leading-relaxed mt-4 max-w-[300px]">
                                    {activeItem.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-5 mt-8 md:mt-0">
                        <div className="flex items-center gap-5">
                            <button
                                onClick={handlePrev}
                                disabled={active === 0}
                                className={`flex items-center justify-center w-11 h-11 rounded-full border border-black/10 bg-white/50 text-foreground transition-all active:scale-90 ${active === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-red-600 hover:text-white'}`}
                            >
                                <ChevronLeft size={18} strokeWidth={2.5} />
                            </button>

                            <div className="flex items-center gap-2">
                                {items.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-[3px] rounded-full transition-all duration-500 ease-out ${i === active ? "w-7 bg-red-600" : "w-1.5 bg-zinc-800"
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={handleNext}
                                disabled={active === count - 1}
                                className={`flex items-center justify-center w-11 h-11 rounded-full border border-black/10 bg-white/50 text-foreground transition-all active:scale-90 ${active === count - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-red-600 hover:text-white'}`}
                            >
                                <ChevronRight size={18} strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function FocusRailSection() {
    const items: Item[] = [
        { id: "1", titlePart1: "iPad", titlePart2: "Pro", meta: "CHIP M4", description: "O dispositivo mais potente da categoria, desenhado para criatividade sem limites.", imageSrc: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1200" },
        { id: "2", titlePart1: "Vision", titlePart2: "OS", meta: "UX ESPACIAL", description: "Exploração de fluxos imersivos em ambientes de realidade mista e espacial.", imageSrc: "https://images.unsplash.com/photo-1711234978644-32087593c200?auto=format&fit=crop&q=80&w=1200" },
        { id: "3", titlePart1: "iPhone", titlePart2: "Pro", meta: "TITÂNIO", description: "Leveza aeroespacial e resistência extrema num design icónico e intemporal.", imageSrc: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=1200" },
        { id: "4", titlePart1: "MacBook", titlePart2: "Air", meta: "CHIP M3", description: "Potência incrível e portabilidade extrema num design ultrafino de última geração.", imageSrc: "https://images.unsplash.com/photo-1517336714460-457229b49339?auto=format&fit=crop&q=80&w=1200" },
        { id: "5", titlePart1: "Watch", titlePart2: "Ultra", meta: "ROBUSTEZ", description: "O relógio de aventura mais capaz e resistente de sempre para ambientes extremos.", imageSrc: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&q=80&w=1200" },
        { id: "6", titlePart1: "AirPods", titlePart2: "Max", meta: "ÁUDIO HIFI", description: "A combinação perfeita entre áudio de alta fidelidade e a magia intuitiva dos AirPods.", imageSrc: "https://images.unsplash.com/photo-1613040819284-93fa7f03387a?auto=format&fit=crop&q=80&w=1200" }
    ];

    return <FocusRail items={items} />;
}
