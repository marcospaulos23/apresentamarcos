import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="footer" className="bg-background border-t border-border px-5 md:px-8 py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Logo/About Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-semibold text-2xl tracking-tight text-foreground mb-5">
              NEXUS.STUDIO
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Criando experiências digitais com foco em minimalismo e eficiência técnica.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-foreground font-medium mb-5 uppercase text-xs tracking-[0.1em]">
              Navegação
            </h4>
            <ul className="space-y-3">
              {["Início", "Projetos", "Serviços", "Sobre Nós"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-foreground font-medium mb-5 uppercase text-xs tracking-[0.1em]">
              Suporte
            </h4>
            <ul className="space-y-3">
              {["FAQ", "Privacidade", "Termos de Uso", "Contato"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="text-foreground font-medium mb-5 uppercase text-xs tracking-[0.1em]">
              Conecte-se
            </h4>
            <div className="flex gap-4 mt-2">
              {/* WhatsApp */}
              <a 
                href="#" 
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:border-foreground hover:text-foreground hover:bg-secondary transition-all"
                title="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z" />
                  <path d="M15.05 13.52c-.14-.07-.84-.41-.97-.46-.13-.05-.23-.07-.33.07-.1.14-.38.46-.47.55-.08.1-.17.11-.31.04-.14-.07-.6-.22-1.14-.7-.42-.37-.7-.84-.79-.98-.08-.14 0-.21.07-.28.06-.06.14-.17.21-.25.07-.09.1-.15.14-.24.05-.1.02-.18-.01-.25-.04-.07-.32-.78-.44-1.07-.12-.28-.24-.24-.33-.24-.08 0-.18 0-.28 0-.1 0-.25.04-.38.18-.13.14-.5.49-.5 1.19s.51 1.38.58 1.48c.07.1 1 1.54 2.43 2.15.34.14.6.23.81.3.34.11.66.1.91.06.28-.04.84-.34.96-.67.12-.33.12-.62.08-.67-.03-.06-.12-.09-.26-.16z" />
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="#" 
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:border-foreground hover:text-foreground hover:bg-secondary transition-all"
                title="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              
              {/* TikTok */}
              <a 
                href="#" 
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:border-foreground hover:text-foreground hover:bg-secondary transition-all"
                title="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Disponível de Segunda a Sexta das 9h às 18h.
            </p>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2024 Nexus Studio. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <span>Brasil</span>
            <span>Português (BR)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
