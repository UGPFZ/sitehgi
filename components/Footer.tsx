
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Company Branding & Legal Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-black uppercase tracking-tighter">HGI Zambonini</span>
            </div>
            
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed mb-10 font-medium">
              Revenda Autorizada Ultragaz. Atendimento em Indaiatuba com foco em segurança e compromisso técnico.
            </p>

            {/* Legal Information - Simple & Professional */}
            <div className="space-y-3 pt-6 border-t border-slate-900/50">
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] mb-1">Razão Social</span>
                <span className="text-xs font-bold text-slate-400">Hgi Comercio de Gas Ltda</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] mb-1">CNPJ</span>
                <span className="text-xs font-bold text-slate-400">36.927.385/0001-84</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="font-black text-white text-xs uppercase tracking-widest mb-8">Navegação</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="md:col-span-3">
            <h4 className="font-black text-white text-xs uppercase tracking-widest mb-8">Contatos</h4>
            <ul className="space-y-6 text-sm font-bold text-slate-400">
              <li className="flex items-start gap-4">
                <Phone className="text-primary size-4 shrink-0 mt-0.5" />
                <span>0800 772 5456</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-primary size-4 shrink-0 mt-0.5" />
                <span className="break-all">ultragaz.indaiatuba2@gmail.com</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="text-primary size-4 shrink-0 mt-0.5" />
                <span>Av. Francisco de Paula Leite, 3243, Indaiatuba - SP</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="md:col-span-2">
            <h4 className="font-black text-white text-xs uppercase tracking-widest mb-8">Horário</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li>Seg a sex: 07h30 as 19h00</li>
              <li>Sábado: 07h30 às 14h00</li>
              <li>Domingo: 07h30 as 13h00</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">
            © 2026 HGI Zambonini — Energia & Inovação. Todos os direitos reservados.
          </p>
          <span className="text-[10px] font-black text-slate-700 uppercase tracking-[0.2em]">
            Revenda Autorizada Ultragaz
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
