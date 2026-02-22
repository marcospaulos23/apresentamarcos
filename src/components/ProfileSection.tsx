import React from 'react';

const ProfileSection = () => {
    return (
        <section className="relative profile-dot-grid min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 bg-[#030303]">
            {/* Ambient Red Glows */}
            <div className="red-glow-ambient red-glow-top-left opacity-60" />
            <div className="red-glow-ambient red-glow-bottom-right opacity-40" />
            <div className="animated-border-container max-w-7xl w-full">
                <div className="inner-content p-6 md:p-12 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Lado Esquerdo: Foto */}
                    <div className="flex justify-center order-2 lg:order-1">
                        <div className="photo-square rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src="/profile-marcos.jpg"
                                alt="Perfil Profissional"
                                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 scale-[1.1] -translate-y-[4%]"
                                loading="lazy"
                                decoding="async"
                            />

                            {/* Overlay de Interface Técnica */}
                            <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-lg p-4 border border-white/10 rounded-lg text-[11px] code-font opacity-80">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-white/50">system.status:</span>
                                    <span className="text-green-400">"active"</span>
                                </div>
                                <span className="text-red-500">const</span> skills = [<span className="text-blue-300">"SaaS"</span>, <span className="text-blue-300">"FullStack"</span>];
                            </div>
                        </div>
                    </div>

                    {/* Lado Direito */}
                    <div className="space-y-8 order-1 lg:order-2 text-white">
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-1.5 rounded-md border border-red-500/20 bg-red-500/5 text-red-500 text-[10px] uppercase font-bold tracking-[0.2em] code-font">
                                Software Architect // SaaS Expert
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                                Construindo o futuro do <span className="text-gradient">mercado SaaS.</span>
                            </h1>

                            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                                Especializado em arquitetura de software de alta performance, focando em escalabilidade multitenant e experiências de usuário que reduzem o churn.
                            </p>
                        </div>

                        {/* Habilidades */}
                        <div className="grid grid-cols-1 gap-5">
                            <div className="skill-item py-3 pl-5">
                                <h4 className="text-sm font-semibold code-font flex items-center gap-2">
                                    <span className="text-red-500 opacity-50">01</span> Sites de Alta Performance
                                </h4>
                                <p className="text-xs text-gray-500 mt-1">Páginas rápidas que passam confiança e não deixam o seu cliente esperando.</p>
                            </div>

                            <div className="skill-item py-3 pl-5">
                                <h4 className="text-sm font-semibold code-font flex items-center gap-2">
                                    <span className="text-red-500 opacity-50">02</span> Design Sob Medida
                                </h4>
                                <p className="text-xs text-gray-500 mt-1">Soluções exclusivas para o seu negócio, fugindo de modelos prontos e genéricos.</p>
                            </div>

                            <div className="skill-item py-3 pl-5">
                                <h4 className="text-sm font-semibold code-font flex items-center gap-2">
                                    <span className="text-red-500 opacity-50">03</span> Tecnologia Escalável
                                </h4>
                                <p className="text-xs text-gray-500 mt-1">Sua estrutura pronta para crescer, suportando desde poucos acessos até grandes picos de tráfego.</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
