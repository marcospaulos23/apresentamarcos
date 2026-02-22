import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    label: "O Início",
    title: "Passo 1 – Validação",
    description: "Analisamos sua ideia de micro-SaaS ou SaaS, público-alvo e modelo de receita para garantir que o produto tenha demanda real. Definimos as funcionalidades essenciais do MVP e a melhor experiência para atrair os primeiros usuários.",
    tag: "Diagnóstico",
    color: "red",
  },
  {
    number: "02",
    label: "A Ponte",
    title: "Passo 2 – Desenvolvimento",
    description: "Construímos seu produto digital com tecnologia moderna, arquitetura escalável e foco em performance. Criamos sistemas de login, pagamentos, automações e dashboards prontos para crescimento contínuo.",
    tag: "Automação",
    color: "blue",
  },
  {
    number: "03",
    label: "O Objetivo",
    title: "Passo 3 – Escala e Crescimento",
    description: "Seu SaaS entra no mercado pronto para adquirir usuários e gerar receita recorrente. Com métricas claras e infraestrutura preparada, seu produto cresce de forma estável e previsível.",
    tag: "Liberdade",
    color: "emerald",
  },
];

const colorClasses = {
  red: {
    border: "border-nexus-red",
    text: "text-nexus-red",
    bg: "bg-nexus-red/10",
    borderLight: "border-nexus-red/20",
  },
  blue: {
    border: "border-nexus-blue",
    text: "text-nexus-blue",
    bg: "bg-nexus-blue/10",
    borderLight: "border-nexus-blue/20",
  },
  emerald: {
    border: "border-nexus-emerald",
    text: "text-nexus-emerald",
    bg: "bg-nexus-emerald/10",
    borderLight: "border-nexus-emerald/20",
  },
};

const StepItem = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const colors = colorClasses[step.color as keyof typeof colorClasses];
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="step-item relative z-10 mb-32 md:mb-48 flex items-center justify-center w-full"
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Step Number */}
      <motion.div
        className={`absolute left-1/2 -translate-x-1/2 w-14 h-14 md:w-[60px] md:h-[60px] bg-background border-[3px] ${colors.border} rounded-full flex items-center justify-center font-extrabold ${colors.text} z-20 text-sm md:text-base`}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {step.number}
      </motion.div>

      {/* Content */}
      <div className={`step-content w-full md:w-[45%] ${isLeft ? 'md:mr-auto md:text-right md:pr-14' : 'md:ml-auto md:text-left md:pl-14'} pl-20 md:pl-0`}>
        <span className={`${colors.text} font-semibold text-sm uppercase tracking-widest opacity-80`}>
          {step.label}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 whitespace-nowrap">
          {step.title}
        </h3>
        <p className="text-muted-foreground mt-4 leading-relaxed text-base md:text-lg">
          {step.description}
        </p>
        <div className={`mt-6 flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
          <span className={`${colors.bg} ${colors.text} ${colors.borderLight} border px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-tighter`}>
            {step.tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  return (
    <section id="process" className="relative py-24 md:py-32 px-6 bg-background">
      {/* Ambient Red Glows */}
      <div className="red-glow-ambient red-glow-center opacity-30 scale-150" />
      <div className="red-glow-ambient red-glow-top-left opacity-20" />


      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-24 md:mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tighter">
            Como funciona?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light italic">
            A jornada para a eficiência máxima em três etapas claras e poderosas.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="timeline-container relative">
          {/* Timeline Line */}
          <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 w-[2px] h-full timeline-line opacity-20 z-0" />

          {steps.map((step, index) => (
            <StepItem key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* CTA principal - Trocado por Botão Azul */}
        <motion.div
          className="mt-16 md:mt-24 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="#"
            className="group flex items-center gap-3 bg-gradient-to-br from-blue-600 to-blue-900 px-10 py-5 rounded-full text-white font-bold text-sm md:text-base uppercase tracking-widest shadow-[0_4px_25px_rgba(37,99,235,0.4)] transition-all hover:scale-105 hover:shadow-[0_8px_35px_rgba(37,99,235,0.6)] hover:brightness-110 active:scale-95"
          >
            👉 Falar sobre meu projeto
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
