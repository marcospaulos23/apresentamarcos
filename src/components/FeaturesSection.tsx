import { motion } from "framer-motion";
import { Box, Star, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Box,
    title: "Retenção",
    subtitle: "Estratégica",
    description: "Redução de atrito em fluxos críticos de conversão.",
  },
  {
    icon: Star,
    title: "Design",
    subtitle: "Escalável",
    description: "Sistemas que crescem sem perder a essência visual.",
  },
  {
    icon: Zap,
    title: "Máxima",
    subtitle: "Velocidade",
    description: "Performance otimizada para Core Web Vitals.",
  },
  {
    icon: Shield,
    title: "Segurança",
    subtitle: "Dedicada",
    description: "Proteção de dados com criptografia de ponta.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 px-8 md:px-16 bg-[#000000] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* Left Side: Text */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-accent uppercase border border-accent/20 rounded-full bg-accent/5">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Próxima Geração
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
            Tecnologia que <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground">
              escala com você.
            </span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
            Nossa infraestrutura utiliza princípios de design atômico para garantir que sua interface seja rápida, fluida e visualmente impecável.
          </p>
          
          <div className="pt-6">
            <a 
              href="#process"
              className="inline-block px-8 py-4 bg-foreground text-background font-bold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform active:scale-95 shadow-xl shadow-foreground/5"
            >
              Começar Projeto
            </a>
          </div>
        </motion.div>

        {/* Right Side: Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-card p-8 md:p-9 rounded-[2.8rem] flex flex-col justify-between h-72 md:h-80 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-foreground rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-xl">
                  <feature.icon className="w-6 h-6 text-background" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold flex items-center tracking-tight text-foreground mb-1">
                  <span className="text-accent mr-2 text-3xl font-light">|</span> 
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-bold mb-3 md:mb-4 text-sm uppercase tracking-wide">
                  {feature.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
                  {feature.description}
                </p>
              </div>
              <div className="relative z-10 flex items-center text-[11px] font-black tracking-widest text-nexus-gray-200 group cursor-pointer hover:text-accent transition-colors">
                DETALHES 
                <span className="mx-3 w-6 h-[1px] bg-muted transition-all group-hover:w-10 group-hover:bg-accent" />
                →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
