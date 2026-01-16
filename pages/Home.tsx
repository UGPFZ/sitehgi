
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Truck, ShieldCheck, MapPin, Clock, Users, Star } from 'lucide-react';

const Home: React.FC = () => {
  const whatsappUrl = "https://wa.me/5519993889342?text=Boa%20tarde%2C%20vim%20pelo%20site%20HGI%20Zambonini%2C%20gostaria%20de%20realizar%20um%20pedido.";

  return (
    <main>
      {/* HERO SECTION - Foto Real 1 */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <img 
            alt="Frota HGI Zambonini" 
            className="w-full h-full object-cover" 
            src="https://i.ibb.co/PGdp2gdm/Whats-App-Image-2021-05-08-at-10-42-43-1.webp" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-white px-4 py-2 rounded-full mb-8 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-widest">Revenda Autorizada Ultragaz</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
              HGI Zambonini <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Energia & Inovação</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-200 mb-10 leading-relaxed font-medium max-w-2xl">
              A energia que sustenta rotinas e operações. GLP em Indaiatuba com segurança e conformidade.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO TEXT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em]">Nossa Missão</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">A energia que sustenta rotinas e operações</h3>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Atuamos na revenda e distribuição de gás GLP, atendendo residências, comércios e atividades industriais com foco em segurança, conformidade e atendimento próximo.
              </p>
            </div>
            <div className="flex-1 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
              <p className="text-slate-600 font-medium leading-relaxed">
                Nosso compromisso é oferecer uma experiência simples: pedido fácil, orientação quando necessário e entrega dentro dos padrões exigidos.
              </p>
              <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <ShieldCheck size={18} /> Segurança
                </div>
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <Truck size={18} /> Agilidade
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION - Foto Real 3 */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] rotate-2"></div>
              <img 
                src="https://i.ibb.co/hRM8Hj0q/555d9c68-4dad-4d35-b54d-d399e22a66c4.jpg" 
                alt="Estoque de Botijões HGI" 
                className="relative rounded-[3rem] shadow-2xl z-10 border-4 border-white object-cover aspect-video lg:aspect-square"
              />
            </div>
            <div className="space-y-10 order-1 lg:order-2">
              <div>
                <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Linha de Produtos</h2>
                <h3 className="text-4xl font-extrabold text-slate-900 leading-tight mb-6">Diferentes volumes para diversas aplicações</h3>
                <p className="text-slate-500 font-medium text-lg">Atendemos desde o uso doméstico cotidiano até demandas operacionais específicas de empresas.</p>
              </div>
              
              <div className="space-y-8">
                <ProductItem 
                  title="P13 (Gás de Cozinha)" 
                  desc="Indicado para uso residencial, com praticidade no abastecimento e no uso cotidiano."
                />
                <ProductItem 
                  title="P20 (Gás para Empilhadeiras)" 
                  desc="Opção voltada à movimentação de cargas e operação logística em ambientes comerciais e industriais."
                />
                <ProductItem 
                  title="P45 (Gás Industrial e Comercial)" 
                  desc="Recomendado para consumidores de maior porte, como restaurantes, lavanderias, condomínios e operações industriais."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENTS SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Nossos Compromissos</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Padrões de excelência e confiança</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <CommitmentCard 
              icon={<ShieldCheck size={32} />}
              title="Segurança em primeiro lugar"
              desc="Atuação com cuidado no manuseio, transporte e entrega, seguindo todos os procedimentos do setor."
            />
            <CommitmentCard 
              icon={<MapPin size={32} />}
              title="Presença local"
              desc="Conhecimento da região de Indaiatuba para apoiar um atendimento mais eficiente."
            />
            <CommitmentCard 
              icon={<Users size={32} />}
              title="Respeito ao cliente"
              desc="Comunicação clara, cordialidade e foco em resolver suas necessidades com objetividade."
            />
            <CommitmentCard 
              icon={<Clock size={32} />}
              title="Logística e organização"
              desc="Planejamento de rotas para reduzir esperas e manter a previsibilidade das nossas entregas."
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#2b82c2] rounded-[3rem] p-12 lg:p-24 relative overflow-hidden flex flex-col items-center text-center text-white">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">
              Solicite Seu Gás
            </h2>
            <p className="text-blue-100 text-lg md:text-2xl mb-12 relative z-10 max-w-2xl font-medium">
              Fale com a equipe HGI Zambonini para entregas em domicílio ou cotações empresariais.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 relative z-10">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-12 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-xl flex items-center gap-3">
                 <MessageCircle size={20} /> Pedir pelo WhatsApp
              </a>
              <Link to="/contato" className="bg-slate-900 text-white px-12 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl">
                 Ver Contatos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const ProductItem = ({ title, desc }: { title: string, desc: string }) => (
  <div className="flex gap-5 group">
    <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex-shrink-0 self-start group-hover:bg-primary transition-all">
      <div className="w-6 h-6 rounded-full border-2 border-primary group-hover:border-white transition-colors" />
    </div>
    <div className="space-y-1">
      <h4 className="text-xl font-black text-slate-900 tracking-tight">{title}</h4>
      <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const CommitmentCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="space-y-6">
    <div className="text-primary">{icon}</div>
    <h4 className="text-lg font-black text-slate-900 leading-tight uppercase tracking-tight">{title}</h4>
    <p className="text-slate-500 text-sm font-medium leading-relaxed">{desc}</p>
  </div>
);

export default Home;
