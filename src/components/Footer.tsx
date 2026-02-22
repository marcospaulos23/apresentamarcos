import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="footer" className="relative bg-background border-t border-border px-5 md:px-8 py-12 md:py-16 overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Logo/About Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-semibold text-2xl tracking-tight text-foreground mb-5 uppercase">
              SaaS Studio
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
                className="w-10 h-10 border border-[#25D366]/30 rounded-full flex items-center justify-center text-[#25D366] hover:border-[#25D366] hover:text-white hover:bg-[#25D366] transition-all duration-300 shadow-[0_0_10px_rgba(37,211,102,0.1)] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                title="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/omarcopauloml?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#E4405F]/30 rounded-full flex items-center justify-center text-[#E4405F] hover:border-transparent hover:text-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] transition-all duration-300 shadow-[0_0_10px_rgba(228,64,95,0.1)] hover:shadow-[0_0_20px_rgba(228,64,95,0.4)]"
                title="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center bg-black text-white hover:border-white/30 transition-all duration-300 group relative overflow-hidden"
                title="TikTok"
              >
                {/* Glow effect for TikTok */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#00f2ea] blur-[15px] -ml-2" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#ff0050] blur-[15px] ml-2" />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" className="relative z-10 filter drop-shadow-[1px_0_0_#ff0050] drop-shadow-[-1px_0_0_#00f2ea]" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          <p>© 2024 SaaS Studio. Todos os direitos reservados.</p>
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
