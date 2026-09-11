import React, {useState} from 'react';
import {X,ArrowUpRight,Mail} from 'lucide-react';
import {PROFILE_INFO} from '../data/profileData';
import {useDialogFocus} from './useDialogFocus';
export const ContactModal:React.FC<{isOpen:boolean;onClose:()=>void}>=({isOpen,onClose})=>{
  const [name,setName]=useState(''),[email,setEmail]=useState(''),[organisation,setOrganisation]=useState(''),[reason,setReason]=useState(''),[availability,setAvailability]=useState('');
  const [topic,setTopic]=useState('Request a Call'),[draftOpened,setDraftOpened]=useState(false);
  const ref=useDialogFocus(isOpen,onClose);
  if(!isOpen)return null;
  const submit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();if(!name.trim()||!reason.trim())return;
    const subject=encodeURIComponent(`${topic} — ${name.trim()}`);
    const body=encodeURIComponent(`Hello Jenrick,\n\n${reason.trim()}\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nOrganisation: ${organisation.trim()||'Not supplied'}\nPreferred availability and time zone: ${availability.trim()||'To be agreed'}\n\nPlease review my details and reply by email to discuss the next steps.`);
    window.location.href=`mailto:${PROFILE_INFO.email}?subject=${subject}&body=${body}`;setDraftOpened(true);
  };
  const field='w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-900 focus:border-blue-600 focus:outline-2 focus:outline-blue-200';
  return <div className="fixed inset-0 z-[70] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6" onMouseDown={e=>{if(e.target===e.currentTarget)onClose();}}><div ref={ref} role="dialog" aria-modal="true" aria-labelledby="contact-title" className="bg-white w-full max-w-2xl max-h-[92dvh] rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden">
    <div className="flex items-center justify-between gap-4 px-6 py-4 bg-slate-900 text-white shrink-0"><span className="text-sm font-mono tracking-wide">LET’S CONNECT</span><button onClick={onClose} aria-label="Close contact form" className="p-2 rounded-lg hover:bg-white/10"><X className="w-5 h-5"/></button></div>
    <div className="p-6 sm:p-8 overflow-y-auto overscroll-contain"><h2 id="contact-title" className="font-heading text-3xl font-bold text-slate-900">Start a conversation</h2><p className="text-base text-slate-600 leading-relaxed mt-3">Introduce yourself and tell me what you have in mind. For a call, I review your details first and arrange the next steps by email.</p>
      <form onSubmit={submit} className="space-y-5 mt-7">
        <div><label htmlFor="request-topic" className="block text-sm font-semibold text-slate-700 mb-2">I would like to</label><select id="request-topic" className={field} value={topic} onChange={e=>{setTopic(e.target.value);setDraftOpened(false);}}>{['Request a Call','Discuss an Engineering Project','Discuss Software or Website Development','Discuss Research or Training','General Enquiry'].map(t=><option key={t}>{t}</option>)}</select></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label htmlFor="request-name" className="block text-sm font-semibold text-slate-700 mb-2">Full name *</label><input id="request-name" autoComplete="name" required minLength={2} maxLength={120} value={name} onChange={e=>setName(e.target.value)} className={field}/></div><div><label htmlFor="request-email" className="block text-sm font-semibold text-slate-700 mb-2">Email address *</label><input id="request-email" type="email" autoComplete="email" required maxLength={254} value={email} onChange={e=>setEmail(e.target.value)} className={field}/></div></div>
        <div><label htmlFor="request-organisation" className="block text-sm font-semibold text-slate-700 mb-2">Organisation / professional profile</label><input id="request-organisation" autoComplete="organization" maxLength={300} value={organisation} onChange={e=>setOrganisation(e.target.value)} className={field} placeholder="Company, role, or professional profile link"/></div>
        <div><label htmlFor="request-reason" className="block text-sm font-semibold text-slate-700 mb-2">Reason for your request *</label><textarea id="request-reason" required minLength={10} maxLength={3000} rows={4} value={reason} onChange={e=>setReason(e.target.value)} className={field} placeholder="Briefly describe the project, opportunity, or topic you would like to discuss."/></div>
        {topic==='Request a Call'&&<div><label htmlFor="request-availability" className="block text-sm font-semibold text-slate-700 mb-2">Preferred availability & time zone</label><input id="request-availability" maxLength={200} value={availability} onChange={e=>setAvailability(e.target.value)} className={field} placeholder="For example: weekdays after 14:00 EAT"/></div>}
        <p className="text-sm text-slate-500 leading-relaxed">This opens a prepared message in your email app. Send it there to submit your request. Your details are used to review and respond to your enquiry.</p>
        <button type="submit" className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-base font-semibold px-5 py-3.5"><Mail className="h-5 w-5"/>Open Email Request</button>
        {draftOpened&&<p role="status" className="rounded-xl bg-blue-50 border border-blue-100 p-4 text-sm text-blue-900">Your email draft has been requested. Complete and send it in your email app. If no app opened, email {PROFILE_INFO.email} with your name, email address, and reason for contacting me.</p>}
      </form>
      <div className="flex flex-wrap gap-5 text-sm font-semibold mt-7 pt-5 border-t border-slate-200"><a href={PROFILE_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-700">LinkedIn<ArrowUpRight className="h-4 w-4"/></a><a href={PROFILE_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-slate-700">GitHub<ArrowUpRight className="h-4 w-4"/></a></div>
    </div>
  </div></div>;
};
