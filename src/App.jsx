import React, { useCallback, useState } from 'react';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { motion } from 'framer-motion';
import { 
  Terminal, Cpu, Rocket, Github, Linkedin, MessageCircle, 
  ExternalLink, Monitor, Smartphone, Zap, Menu, X, Code2 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- CONFIGURAÇÃO DAS PARTÍCULAS ---
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false }, 
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: { onHover: { enable: true, mode: "bubble" }, resize: true },
      modes: { bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8, color: "#00f2ff" } },
    },
    particles: {
      color: { value: ["#00f2ff", "#bd00ff"] },
      links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
      move: { enable: true, speed: 1.5, direction: "none", outModes: { default: "bounce" } },
      number: { density: { enable: true, area: 800 }, value: 60 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  // --- DADOS DOS PROJETOS (Arquivos Locais) ---
  const projects = [
    { 
      title: "Eng. Matheus Ribeiro", 
      category: "Engenharia Civil", 
      stack: "React + BIM", 
      desc: "Portfolio corporativo com foco em infraestrutura e grandes obras.", 
      link: "#",
      image: "/projeto1.jpg",      
      gif: "/projeto1.gif"         
    },
    { 
      title: "Luísa Química", 
      category: "Educação", 
      stack: "Gamificação + Motion", 
      desc: "Plataforma interativa para pré-vestibular com alta retenção.", 
      link: "#",
      image: "/projeto2.jpg",
      gif: "/projeto2.gif"
    },
    { 
      title: "RDP Engenharia", 
      category: "Industrial", 
      stack: "Institucional B2B", 
      desc: "Site focado em captação de orçamentos e credibilidade técnica.", 
      link: "#",
      image: "/projeto3.jpg",
      gif: "/projeto3.gif"
    },
    { 
      title: "Mattheus Tubertini", 
      category: "Finanças", 
      stack: "High Performance", 
      desc: "Landing page de alta conversão para consultoria de investimentos.", 
      link: "#",
      image: "/projeto4.jpg",
      gif: "/projeto4.gif"
    },
  ];

  return (
    <div className="font-sans text-gray-200 bg-brand-dark selection:bg-brand-primary selection:text-black overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 top-0 py-4 px-6 backdrop-blur-md border-b border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
            <Code2 size={24} className="text-brand-primary" />
            <span>DEV<span className="text-brand-primary">STUDIO</span></span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
            {['Projetos', 'Soluções', 'Contato'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-primary transition-colors">{item}</a>
            ))}
          </div>

          <a 
            href="https://wa.me/5531993790633" 
            className="hidden md:flex border border-brand-primary/50 text-brand-primary hover:bg-brand-primary hover:text-black px-6 py-2 rounded text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(0,242,255,0.1)] hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]"
          >
            Orçamento
          </a>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white hover:text-brand-primary transition-colors">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 p-6 flex flex-col gap-4 text-center"
          >
            {['Projetos', 'Soluções', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-brand-primary py-2"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* --- HERO SECTION (EMPRESA + CARD DE CÓDIGO) --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/80 to-brand-dark z-0"></div>
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Lado Esquerdo: Texto de Autoridade */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-brand-secondary/30 rounded bg-brand-secondary/10 text-brand-secondary text-xs font-bold tracking-[0.2em] uppercase">
              <Code2 size={14} /> Full Stack Studio
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
              Sistemas que <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Geram Resultado.
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl border-l-2 border-brand-primary pl-6">
              Transformo sua presença digital com engenharia de software de ponta. Design futurista, performance extrema e foco em conversão.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projetos" className="bg-white text-black font-bold py-4 px-8 rounded-sm inline-flex items-center justify-center gap-2 hover:bg-brand-primary transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]">
                Ver Projetos <Rocket size={18} />
              </a>
              <div className="flex gap-4 items-center justify-center sm:justify-start px-4">
                <a href="https://github.com/RaphaelYankous" target="_blank" className="text-gray-400 hover:text-white transition-transform hover:scale-125"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/raphael-yankous-machado-clemente-7bb750191/" target="_blank" className="text-gray-400 hover:text-[#0077b5] transition-transform hover:scale-125"><Linkedin size={24} /></a>
              </div>
            </div>
          </motion.div>

          {/* Lado Direito: O CARD 3D COM SUAS INFORMAÇÕES */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Glow de fundo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20 rounded-full blur-[100px] animate-pulse"></div>
            
            {/* Card Flutuante simulando IDE */}
            <div className="relative bg-[#111]/90 backdrop-blur-xl border border-white/10 p-8 rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 group hover:border-brand-primary/30">
              
              {/* Barra de título do card */}
              <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 group-hover:animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 group-hover:animate-pulse delay-75"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 group-hover:animate-pulse delay-150"></div>
                </div>
                <span className="text-xs font-mono text-gray-500">profile.tsx</span>
              </div>

              {/* O CÓDIGO COM SUAS INFORMAÇÕES */}
              <div className="space-y-3 font-mono text-sm leading-relaxed">
                <div className="flex gap-2">
                  <span className="text-brand-secondary">const</span>
                  <span className="text-brand-primary">developer</span>
                  <span className="text-white">=</span>
                  <span className="text-yellow-400">{"{"}</span>
                </div>
                
                <div className="pl-6 text-gray-400">
                  name: <span className="text-green-400">"Raphael Yankous"</span>,<br/>
                  role: <span className="text-green-400">"Full Stack Engineer"</span>,<br/>
                  skills: [<br/>
                  &nbsp;&nbsp;<span className="text-orange-400">"React"</span>, <span className="text-orange-400">"Next.js"</span>,<br/>
                  &nbsp;&nbsp;<span className="text-orange-400">"Tailwind"</span>, <span className="text-orange-400">"Node"</span><br/>
                  ],<br/>
                  focus: <span className="text-brand-primary">"High Performance"</span>
                </div>
                
                <div className="text-yellow-400">{"}"}</div>
                <br/>
                <div className="text-gray-500 flex items-center gap-2">
                   // Building the future... <span className="w-2 h-4 bg-brand-primary animate-pulse"></span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- SERVICES / STACK --- */}
      <section id="soluções" className="py-20 border-y border-white/5 bg-[#080808] relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Monitor size={32} />, title: "Web Design Premium", desc: "Interfaces imersivas com dark mode nativo e foco total na experiência do usuário (UX/UI)." },
              { icon: <Smartphone size={32} />, title: "Responsividade Total", desc: "Seu site perfeito em qualquer dispositivo. Mobile-first development como padrão." },
              { icon: <Zap size={32} />, title: "Performance Extrema", desc: "Códigos otimizados, SEO técnico avançado e carregamento instantâneo." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 p-8 rounded-xl border border-white/5 hover:border-brand-primary/50 hover:bg-brand-primary/5 transition-all duration-300 group"
              >
                <div className="text-gray-400 group-hover:text-brand-primary mb-4 transition-colors">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="projetos" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Case Studies</span>
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
                className="group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 hover:border-brand-primary/50 transition-all duration-500 flex flex-col"
              >
                <div className="h-64 overflow-hidden relative bg-gray-900 cursor-pointer">
                  {/* Overlay Dark */}
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-all duration-500 z-20 pointer-events-none"></div>

                  {/* IMAGEM PRINCIPAL */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 z-10"
                    onError={(e) => {e.target.style.display='none'}} 
                  />

                  {/* GIF (Se existir) */}
                  {project.gif && (
                    <img 
                      src={project.gif} 
                      alt={`${project.title} preview`} 
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                    />
                  )}

                  {/* Link Icon */}
                  <div className="absolute top-4 right-4 z-30 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10 group-hover:bg-brand-primary group-hover:text-black transition-colors duration-300">
                    <ExternalLink size={16} />
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col relative z-10 bg-[#0a0a0a]">
                  <div className="mb-4">
                    <span className="text-brand-primary text-[10px] uppercase tracking-widest font-bold border border-brand-primary/20 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="mt-auto border-t border-white/5 pt-4">
                    <span className="text-xs font-mono text-gray-500">
                      <span className="text-brand-primary">Stack:</span> {project.stack}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER / CONTATO --- */}
      <footer id="contato" className="py-24 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Pronto para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Próximo Nível?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            Solicite um orçamento e vamos construir uma plataforma que converte visitantes em clientes fiéis.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/5531993790633" 
              className="group relative bg-[#25D366] text-white px-8 py-4 rounded font-bold uppercase tracking-widest flex items-center gap-3 overflow-hidden shadow-lg shadow-green-900/20 hover:scale-105 transition-transform"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <MessageCircle size={20} className="relative z-10" />
              <span className="relative z-10">Iniciar Projeto via WhatsApp</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/raphael-yankous-machado-clemente-7bb750191/" 
              target="_blank"
              className="text-gray-300 hover:text-white flex items-center gap-2 font-medium transition-colors border-b border-transparent hover:border-white"
            >
              <Linkedin size={18} /> Conectar no LinkedIn
            </a>
          </div>

          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
               {/* FOTO PEQUENA NO RODAPÉ */}
               <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                 <img src="/perfil.png" alt="Raphael" className="w-full h-full object-cover" onError={(e) => {e.target.style.display='none'}} />
               </div>
               <p>© {new Date().getFullYear()} Raphael Yankous. Todos os direitos reservados.</p>
            </div>
            
            <div className="flex gap-4">
               <a href="https://github.com/RaphaelYankous" target="_blank" className="hover:text-brand-primary transition-colors">GITHUB</a>
               <a href="https://www.linkedin.com/in/raphael-yankous-machado-clemente-7bb750191/" target="_blank" className="hover:text-brand-primary transition-colors">LINKEDIN</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;