import React, { useEffect, useState } from 'react';
import { Menu, X, FileText, Search, ArrowUpRight, Code2 } from 'lucide-react';
import { useDialogFocus } from './useDialogFocus';

const links = [
  ['Overview','overview'],
  ['Expertise','skills'],
  ['Software','software'],
  ['Experience','experience'],
  ['Projects','projects'],
  ['Research','publications'],
  ['Websites','websites']
] as const;

export const Navbar: React.FC<{onOpenContact:()=>void;onOpenResume:()=>void;onOpenCommandPalette:()=>void}> = ({onOpenContact,onOpenResume,onOpenCommandPalette}) => {
  const [open,setOpen] = useState(false);
  const [active,setActive] = useState('overview');
  const ref = useDialogFocus(open, () => setOpen(false));

  useEffect(() => {
    const mq = window.matchMedia('(min-width:1280px)');
    const resize = () => { if (mq.matches) setOpen(false); };
    mq.addEventListener('change', resize);
    return () => mq.removeEventListener('change', resize);
  }, []);

  useEffect(() => {
    const sections = links.map(([,id]) => document.getElementById(id)).filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, {rootMargin:'-20% 0px -65% 0px', threshold:[0,.15,.3,.6]});
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navigate = (id:string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  };

  const action = (callback:()=>void) => { setOpen(false); callback(); };

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      {open && <div className="fixed inset-0 bg-slate-950/30 backdrop-blur-sm xl:hidden" onClick={() => setOpen(false)} aria-hidden="true"/>}
      <div className="relative max-w-[102.4rem] mx-auto">
        <div className="nav-shell flex items-center justify-between gap-3 px-4 sm:px-6 py-3">
          <a href="#overview" onClick={event => {event.preventDefault(); navigate('overview');}} className="flex items-center gap-2.5 min-w-0">
            <span className="brand-mark"><span>J</span><i>K</i></span>
            <span className="min-w-0">
              <strong className="block font-heading font-bold text-sm text-slate-950">Jenrick Kibet Kwambai</strong>
              <small className="hidden sm:block text-[10px] text-slate-500">Engineering · Technology · Delivery</small>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-0.5">
            {links.map(([label,id]) => (
              <button
                key={id}
                onClick={() => navigate(id)}
                aria-current={active === id ? 'page' : undefined}
                className={'nav-link ' + (active === id ? 'nav-link--active ' : '') + (id === 'software' ? 'nav-link--featured' : '')}
              >
                {id === 'software' && <Code2 className="h-3.5 w-3.5"/>}
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button onClick={onOpenCommandPalette} aria-label="Search profile" className="hidden sm:block p-2.5 text-slate-600 hover:bg-slate-100 rounded-lg"><Search className="w-4 h-4"/></button>
            <button onClick={onOpenResume} className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 hover:border-blue-300"><FileText className="w-4 h-4"/>CV</button>
            <button onClick={onOpenContact} className="contact-nav-btn">Contact</button>
            <button aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setOpen(!open)} className="xl:hidden p-2.5 rounded-lg text-slate-800 hover:bg-slate-100">{open ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}</button>
          </div>
        </div>

        {open && (
          <div ref={ref} id="mobile-navigation" role="dialog" aria-modal="true" aria-labelledby="mobile-navigation-title" className="absolute inset-x-0 top-[calc(100%+0.75rem)] max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-2xl xl:hidden">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-3">
              <h2 id="mobile-navigation-title" className="font-heading text-lg font-bold text-slate-900">Explore the profile</h2>
              <button onClick={() => setOpen(false)} aria-label="Close mobile menu" className="p-2 rounded-lg hover:bg-slate-100"><X className="w-5 h-5"/></button>
            </div>
            <nav aria-label="Mobile navigation" className="grid grid-cols-2 gap-2">
              {links.map(([label,id]) => (
                <button key={id} onClick={() => navigate(id)} className={'flex items-center justify-between gap-2 text-left rounded-xl border p-3.5 text-base font-medium ' + (active === id ? 'bg-blue-50 border-blue-200 text-blue-900' : 'bg-slate-50 border-slate-100 text-slate-800')}>
                  {label}<ArrowUpRight className="w-4 h-4 shrink-0"/>
                </button>
              ))}
            </nav>
            <div className="grid gap-2 mt-4 pt-4 border-t border-slate-100">
              <button onClick={() => action(onOpenContact)} className="rounded-xl bg-slate-950 text-white px-4 py-3 text-base font-semibold">Contact</button>
              <button onClick={() => action(onOpenResume)} className="rounded-xl border border-slate-200 px-4 py-3 text-base font-semibold text-slate-700">View CV</button>
              <button onClick={() => action(onOpenCommandPalette)} className="rounded-xl px-4 py-3 text-base text-slate-600">Search profile</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};