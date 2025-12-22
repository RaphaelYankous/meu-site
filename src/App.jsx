import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { 
  Terminal, 
  Cpu, 
  Rocket, 
  Github, 
  Linkedin, 
  MessageCircle, 
  ExternalLink, 
  Monitor, 
  Smartphone, 
  Zap
} from 'lucide-react';

// --- SEUS PROJETOS ---
const projects = [
  {
    title: "Mattheus Tubertini",
    category: "Finanças & Investimentos",
    tech: ["React", "Particles", "Tailwind"],
    desc: "Plataforma de alta conversão para assessor de investimentos, com design premium dark/gold.",
    link: "#" 
  },
  {
    title: "Luísa Química",
    category: "Educação & Vestibulares",
    tech: ["Framer Motion", "Vite", "UX Design"],
    desc: "Landing Page educacional com gamificação visual e elementos interativos para público jovem.",
    link: "#"
  },
  {
    title: "RDP Engenharia",
    category: "Engenharia Mecânica",
    tech: ["React", "SEO", "Performance"],
    desc: "Site corporativo industrial focado em credibilidade técnica e captação de orçamentos B2B.",
    link: "#"
  },
  {
    title: "Eng. Matheus Ribeiro",
    category: "Infraestrutura",
    tech: ["Automation", "BIM Integration", "React"],
    desc: "Portfolio técnico para engenharia civil com animações de scroll e apresentação de grandes obras.",
    link: "#"
  }
];

const App = () => {
  // Configuração das Partículas (Estilo Cyberpunk/Tech)
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: { onHover: { enable: true, mode: "bubble" }, resize: true },
      modes: { bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8, color: "#00f2ff" } },
    },
    particles: {
      color: { value: ["#00f2ff", "#bd00ff"] }, // Ciano e Roxo Neon
      links: { color: "#2b2b2b", distance: 150, enable: true, opacity: 0.4, width: 1 },
      move: { enable: true, speed: 1.5, direction: "none", outModes: { default: "bounce" } },
      number: { density: { enable: true, area: 800 }, value: 60 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-[#00f2ff] selection:text-black overflow-x-hidden relative">
      
      {/* BACKGROUND TECH */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] z-0"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 top-0 py-4 px-6 backdrop-blur-md border-b border-white/5 bg-[#050505]/70">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
            <Terminal size={20} className="text-[#00f2ff]" />
            <span>Raphael<span className="text-[#00f2ff]">Yankous</span></span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
            <a href="#projects" className="hover:text-[#00f2ff] transition-colors">Projetos</a>
            <a href="#skills" className="hover:text-[#bd00ff] transition-colors">Stack</a>
            <a href="#contact" className="hover:text-white transition-colors">Contato</a>
          </div>
          <a 
            href="https://wa.me/5531993790633" 
            className="border border-[#00f2ff]/30 text-[#00f2ff] hover:bg-[#00f2ff] hover:text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_10px_rgba(0,242,255,0.1)] hover:shadow-[0_0_20px_rgba(0,242,255,0.5)]"
          >
            Contratar
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 z-10">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-[#bd00ff]/30 rounded bg-[#bd00ff]/5 text-[#bd00ff] text-xs font-bold tracking-[0.2em] uppercase">
              <Cpu size={14} /> Full Stack Developer
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
              Eu construo <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#bd00ff]">
                <Typewriter
                  options={{
                    strings: ['Autoridade Digital.', 'Sistemas Complexos.', 'Sites de Elite.'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl border-l-2 border-[#00f2ff] pl-6">
              Transformo profissionais liberais e empresas em referências digitais através de design futurista e engenharia de software de alta performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="bg-white text-black font-bold py-4 px-8 rounded-sm inline-flex items-center justify-center gap-2 hover:bg-[#00f2ff] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]"
              >
                Ver Portfólio <Rocket size={18} />
              </a>
              <div className="flex gap-4 items-center justify-center sm:justify-start px-4">
                <a href="https://github.com/RaphaelYankous" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-125"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/raphael-yankous-machado-clemente-7bb750191/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-transform hover:scale-125"><Linkedin size={24} /></a>
              </div>
            </div>
          </motion.div>

          {/* Elemento Visual Tech (Card Flutuante 3D effect) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00f2ff]/20 to-[#bd00ff]/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-gray-500">portfolio.jsx</span>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex gap-2">
                  <span className="text-[#bd00ff]">const</span>
                  <span className="text-[#00f2ff]">developer</span>
                  <span className="text-white">=</span>
                  <span className="text-yellow-400">{"{"}</span>
                </div>
                <div className="pl-6 text-gray-300">
                  name: <span className="text-green-400">"Raphael Yankous"</span>,<br/>
                  skills: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Node"</span>, <span className="text-green-400">"Next.js"</span>],<br/>
                  mission: <span className="text-green-400">"Criação de sites Ultra Tecnológicos"</span>
                </div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* STACK / SERVICES */}
      <section id="skills" className="py-20 border-y border-white/5 bg-[#080808] relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Monitor size={32} />, title: "Web Design Premium", desc: "Interfaces imersivas, dark mode nativo e foco total na experiência do usuário (UX/UI)." },
              { icon: <Smartphone size={32} />, title: "Responsividade Total", desc: "Seu site perfeito em qualquer dispositivo. Mobile-first development como padrão." },
              { icon: <Zap size={32} />, title: "Performance Extrema", desc: "Códigos otimizados, SEO técnico avançado e carregamento instantâneo." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 p-8 rounded-xl border border-white/5 hover:border-[#00f2ff]/50 hover:bg-[#00f2ff]/5 transition-all duration-300 group"
              >
                <div className="text-gray-400 group-hover:text-[#00f2ff] mb-4 transition-colors">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="projects" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#00f2ff] font-bold tracking-widest uppercase text-xs">Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Projetos Recentes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 hover:border-[#bd00ff]/50 transition-all duration-500"
              >
                {/* Efeito de Glow no Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#bd00ff]/0 to-[#bd00ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="p-8 relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-white/5 px-3 py-1 rounded text-[10px] uppercase tracking-wider font-bold text-gray-400 border border-white/5">
                      {project.category}
                    </div>
                    <ExternalLink size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#bd00ff] transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono text-[#00f2ff] opacity-80">#{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTATO */}
      <footer id="contact" className="py-24 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00f2ff]/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Pronto para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#bd00ff]">Próximo Nível?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            Não desperdice tráfego com um site amador. Vamos construir uma plataforma que converte visitantes em clientes fiéis.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/5531993790633" 
              className="group relative bg-[#25D366] text-white px-8 py-4 rounded font-bold uppercase tracking-widest flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <MessageCircle size={20} className="relative z-10" />
              <span className="relative z-10">Iniciar Projeto via WhatsApp</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/raphael-yankous-machado-clemente-7bb750191/" 
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white flex items-center gap-2 font-medium transition-colors border-b border-transparent hover:border-white"
            >
              <Linkedin size={18} /> Conectar no LinkedIn
            </a>
          </div>

          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
            <p>© {new Date().getFullYear()} Raphael Yankous. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
               <a href="https://github.com/RaphaelYankous" target="_blank" rel="noreferrer" className="hover:text-[#00f2ff] transition-colors">GITHUB</a>
               <a href="https://www.linkedin.com/in/raphael-yankous-machado-clemente-7bb750191/" target="_blank" rel="noreferrer" className="hover:text-[#00f2ff] transition-colors">LINKEDIN</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;