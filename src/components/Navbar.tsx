import React,{useState,useEffect} from 'react';
import {Menu,X,FileText,Search,ArrowUpRight} from 'lucide-react';
import {PROFILE_INFO} from '../data/profileData';
import {useDialogFocus} from './useDialogFocus';
const links=[['Overview','overview'],['Summary','summary'],['Experience','experience'],['Manuals','technical-manuals'],['Research','publications'],['Projects','projects'],['Websites','websites'],['Skills','skills']];
export const Navbar:React.FC<{onOpenContact:()=>void;onOpenResume:()=>void;onOpenCommandPalette:()=>void}>=({onOpenContact,onOpenResume,onOpenCommandPalette})=>{
  const [open,setOpen]=useState(false);const ref=useDialogFocus(open,()=>setOpen(false));
  useEffect(()=>{const mq=window.matchMedia('(min-width:1280px)');const resize=()=>{if(mq.matches)setOpen(false);};mq.addEventListener('change',resize);return()=>mq.removeEventListener('change',resize);},[]);
  const navigate=(id:string)=>{setOpen(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'});};
  const action=(callback:()=>void)=>{setOpen(false);callback();};
  return <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
    {open&&<div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm xl:hidden" onClick={()=>setOpen(false)} aria-hidden="true"/>}
    <div className="relative max-w-[102.4rem] mx-auto"><div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-xl px-4 sm:px-6 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.07)]">
      <a href="#overview" onClick={e=>{e.preventDefault();navigate('overview');}} id="nav-brand-link" className="flex items-center gap-2.5 min-w-0"><span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-xl bg-slate-900 text-white font-heading font-bold text-sm">JK</span><span className="min-w-0"><span className="block font-heading font-bold text-sm text-slate-900">Jenrick Kibet</span><span className="hidden sm:block text-[11px] leading-tight text-slate-500 max-w-[240px]">{PROFILE_INFO.headline}</span></span></a>
      <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-0.5">{links.map(([label,id])=><button key={id} onClick={()=>navigate(id)} className="text-sm px-2.5 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-950">{label}</button>)}</nav>
      <div className="flex items-center gap-1.5"><button onClick={onOpenCommandPalette} aria-label="Search profile" className="hidden sm:block p-2.5 text-slate-600 hover:bg-slate-100 rounded-lg"><Search className="w-4 h-4"/></button><button onClick={onOpenResume} className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700"><FileText className="w-4 h-4"/>CV</button><button onClick={onOpenContact} className="px-3 sm:px-4 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold">Contact</button><button aria-expanded={open} aria-controls="mobile-navigation" aria-label={open?'Close navigation menu':'Open navigation menu'} onClick={()=>setOpen(!open)} className="xl:hidden p-2.5 rounded-lg text-slate-800 hover:bg-slate-100">{open?<X className="w-5 h-5"/>:<Menu className="w-5 h-5"/>}</button></div>
    </div>
    {open&&<div ref={ref} id="mobile-navigation" role="dialog" aria-modal="true" aria-labelledby="mobile-navigation-title" className="absolute inset-x-0 top-[calc(100%+0.75rem)] max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-2xl xl:hidden">
      <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-3"><h2 id="mobile-navigation-title" className="font-heading text-lg font-bold text-slate-900">Explore the profile</h2><button onClick={()=>setOpen(false)} aria-label="Close mobile menu" className="p-2 rounded-lg hover:bg-slate-100"><X className="w-5 h-5"/></button></div>
      <nav aria-label="Mobile navigation" className="grid grid-cols-2 gap-2">{links.map(([label,id])=><button key={id} onClick={()=>navigate(id)} className="flex items-center justify-between gap-2 text-left rounded-xl bg-slate-50 border border-slate-100 p-3.5 text-base font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-800">{label}<ArrowUpRight className="w-4 h-4 shrink-0"/></button>)}</nav>
      <div className="grid gap-2 mt-4 pt-4 border-t border-slate-100"><button onClick={()=>action(onOpenContact)} className="rounded-xl bg-blue-700 text-white px-4 py-3 text-base font-semibold">Request a Call / Contact</button><button onClick={()=>action(onOpenResume)} className="rounded-xl border border-slate-200 px-4 py-3 text-base font-semibold text-slate-700">View Curriculum Vitae</button><button onClick={()=>action(onOpenCommandPalette)} className="rounded-xl px-4 py-3 text-base text-slate-600">Search the Profile</button></div>
    </div>}
    </div>
  </header>;
};
