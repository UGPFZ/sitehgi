
import React from 'react';
import { ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header com Foto Real 2 */}
      <section className="bg-slate-950 py-32 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://i.ibb.co/j9v2psVB/2021-05-08.webp" 
            className="w-full h-full object-cover" 
            alt="Frota HGI Zambonini Lateral" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Sobre <span className="text-primary">Nós.</span></h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Uma empresa regional estruturada para atender diferentes perfis de consumo.
          </p>
        </div>
      </section>

      {/* Institucional Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900 leading-tight">Experiência e Atuação em Indaiatuba e Porto Feliz.</h2>
              <div className="text-slate-500 space-y-6 text-xl leading-relaxed font-medium">
                <p>
                  A <strong>HGI Zambonini</strong> é uma empresa regional estruturada para atender desde o uso doméstico até demandas de grandes empresas. Como <strong>Revendedor Autorizado Ultragaz</strong>, seguimos rigorosamente as práticas e normas do setor.
                </p>
                <p>
                  Nossa atuação prioriza a segurança em todas as etapas, desde o manuseio até a entrega final no endereço do cliente, garantindo tranquilidade para residências, comércios e indústrias.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6">Nossa Diferencial</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3 font-bold text-slate-700 text-sm">
                    <CheckCircle2 className="text-primary" /> <span>Equipe Treinada</span>
                  </div>
                  <div className="flex items-center gap-3 font-bold text-slate-700 text-sm">
                    <CheckCircle2 className="text-primary" /> <span>Frota Própria</span>
                  </div>
                  <div className="flex items-center gap-3 font-bold text-slate-700 text-sm">
                    <CheckCircle2 className="text-primary" /> <span>Padrões Ultragaz</span>
                  </div>
                  <div className="flex items-center gap-3 font-bold text-slate-700 text-sm">
                    <CheckCircle2 className="text-primary" /> <span>Atendimento Regional</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 border-8 border-white">
                <img 
                  src="https://i.ibb.co/4wqJdm4L/Whats-App-Image-2021-05-08-at-10-42-43-2.webp" 
                  className="w-full aspect-square object-cover" 
                  alt="Frota Própria HGI Zambonini" 
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary p-10 rounded-[2rem] shadow-2xl text-white">
                 <Truck size={48} />
                 <p className="mt-4 font-black text-xs uppercase tracking-widest leading-relaxed">Frota Própria &<br/>Equipe Treinada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frota Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-8">Frota HGI Zambonini</h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            Contamos com frota própria e equipe treinada para realizar entregas com cuidado, organização e atenção às boas práticas de transporte e manuseio de GLP.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
