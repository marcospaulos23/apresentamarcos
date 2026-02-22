import { motion } from "framer-motion";

const DigitalProductSection = () => {
    return (
        <section className="relative w-full flex items-center justify-center min-h-screen bg-background">
            {/* Ambient Red Glows - Reduced Opacity */}
            <div className="red-glow-ambient red-glow-top-left opacity-20" />
            <div className="red-glow-ambient red-glow-bottom-right opacity-30" />
            {/* Fundo com grade estilo Nexus com degradê (máscara) - Restaurado para Dark */}
            <div className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px',
                    maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
                }}
            />

            {/* Overlays de Fade para transição suave */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

            {/* Central Glow Effect - Replicado da Hero */}
            <div className="hero-central-glow opacity-50" />


            <div className="relative z-10 flex flex-col items-center max-w-6xl w-full px-6 py-24 text-center">
                {/* Tag superior estilo "Próxima Geração" */}
                <motion.div
                    className="inline-flex items-center gap-2 border border-accent/20 bg-accent/5 text-accent px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Transformação Digital
                </motion.div>

                {/* Título Principal com estilo Future Standards */}
                <motion.h2
                    className="font-black text-5xl md:text-8xl mb-24 uppercase tracking-tighter leading-[0.9] text-foreground"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    Vamos construir<br />
                    <span className="text-muted-foreground">seu SaaS?</span>
                </motion.h2>

                {/* Texto descritivo com indicador lateral */}
                <motion.div
                    className="max-w-xl text-left mb-16 border-l-2 border-accent pl-6 mx-auto"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
                        Pronto para transformar sua ideia em um produto digital profissional?
                        Elevamos a sua interface ao estado da arte, criando experiências que dominam o mercado.
                    </p>
                </motion.div>

                {/* CTA principal - Trocado por Premium Button */}
                <motion.div
                    className="relative flex flex-col items-center perspective-1000"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <button className="premium-button cursor-pointer relative px-12 md:px-[50px] py-5 md:py-[22px] text-sm md:text-base text-nexus-gold font-extrabold tracking-[2.5px] uppercase rounded-xl transition-all duration-500 hover:text-background hover:translate-y-[-8px] hover:shadow-[0_10px_30px_-5px_rgba(184,134,11,0.4)] group overflow-hidden">
                        <span className="absolute inset-0 bg-gradient-to-b from-nexus-gold-light via-nexus-gold to-[hsl(38,60%,40%)] transform scale-0 transition-transform duration-[2500ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-150 rounded-xl" />
                        <span className="relative z-10">Entre em Contato</span>
                    </button>
                    <div className="w-full max-w-[200px] h-10 bg-gradient-to-b from-nexus-gold/20 to-transparent blur-lg mt-1 rounded-full opacity-40 transition-all duration-500 group-hover:opacity-70" />
                </motion.div>

                {/* Footer sutil de performance */}
                <motion.div
                    className="mt-24 pt-8 border-t border-white/5 w-full flex flex-wrap justify-center gap-x-12 gap-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 font-bold">High End Design</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 font-bold">Performance Core</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 font-bold">SaaS Excellence</span>
                </motion.div>
            </div>
        </section>
    );
};

export default DigitalProductSection;
