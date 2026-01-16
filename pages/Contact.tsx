
import React from 'react';
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappUrl = "https://wa.me/5519993889342?text=Boa%20tarde%2C%20vim%20pelo%20site%20HGI%20Zambonini%2C%20gostaria%20de%20realizar%20um%20pedido.";

  return (
    <div className="bg-slate-50 min-h-screen pt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Fale com a <span className="text-primary">Equipe</span> HGI.</h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">Para solicitar gás ou tirar dúvidas, estamos à sua disposição em Indaiatuba.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Cards */}
          <div className="space-y-6">
            <ContactCard 
              icon={<Phone />} 
              title="Canais de Atendimento" 
              text="0800 772 5456" 
            />
            <ContactCard 
              icon={<Mail />} 
              title="E-mail" 
              text="ultragaz.indaiatuba2@gmail.com" 
            />
            <ContactCard 
              icon={<Clock />} 
              title="Horário de Funcionamento" 
              text="Seg a sex: 07h30 as 19h00" 
              subtext="Sab: 07h30 às 14h00 | Dom: 07h30 as 13h00" 
            />
            
            <a 
              href={whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white p-8 rounded-[2rem] shadow-lg hover:bg-green-600 transition-all font-black uppercase tracking-widest text-sm"
            >
              <MessageCircle size={24} /> Pedir pelo WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[3rem] shadow-2xl p-10 lg:p-16 border border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-10">Atendimento e Suporte</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input label="Nome Completo" placeholder="Digite seu nome" />
                <Input label="E-mail" placeholder="contato@seuemail.com" type="email" />
                <Input label="Telefone" placeholder="(00) 00000-0000" />
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Assunto</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none transition-all font-bold text-slate-700">
                    <option>Pedido de Gás Residencial</option>
                    <option>Atendimento para Empresas</option>
                    <option>Dúvidas e Suporte</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Mensagem</label>
                  <textarea rows={5} placeholder="Como podemos ajudar você hoje?" className="w-full px-6 py-4 rounded-3xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none transition-all font-bold text-slate-700"></textarea>
                </div>
                <button className="md:col-span-2 bg-[#2b82c2] text-white py-5 rounded-full font-black uppercase tracking-widest hover:bg-[#22689c] transition-all shadow-xl">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-24 rounded-[4rem] overflow-hidden shadow-2xl h-[500px] bg-slate-200 border-8 border-white relative">
          <iframe 
                src="https://www.google.com/maps?q=Av.+Francisco+de+Paula+Leite,+3243+-+Recreio+Campestre+Jóia,+Indaiatuba+-+SP,+13346-615&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Localização HGI Zambonini"
              ></iframe>
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, text, subtext }: { icon: React.ReactNode, title: string, text: string, subtext?: string }) => (
  <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex items-start gap-6">
    <div className="bg-primary text-white p-4 rounded-2xl shadow-lg shadow-primary/20">{icon}</div>
    <div>
      <h3 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-1">{title}</h3>
      <p className="text-slate-700 font-bold">{text}</p>
      {subtext && <p className="text-slate-500 text-sm font-medium">{subtext}</p>}
    </div>
  </div>
);

const Input = ({ label, ...props }: any) => (
  <div className="space-y-2">
    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{label}</label>
    <input className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none transition-all font-bold text-slate-700" {...props} />
  </div>
);

export default Contact;
