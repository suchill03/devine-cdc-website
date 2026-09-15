"use client";

import { useState } from "react";

export const programmes = [
  {title:"Early Intervention", age:"Under 3", text:"Support early development with a focused, play-led plan built around your child."},
  {title:"School Readiness", age:"3–6 years", text:"Build the communication, learning and independence skills that support a confident start to school."},
  {title:"Individualised Therapy Programmes", age:"Tailored support", text:"A coordinated plan shaped around your child’s strengths, needs and everyday goals."},
  {title:"Parent Training & Support", age:"For families", text:"Practical strategies and guidance that help progress carry into everyday life."},
];
export const therapies = [
  ["Speech & Language Therapy","Communication, language development and social interaction."],
  ["Occupational Therapy","Everyday skills, sensory regulation and greater independence."],
  ["ABA Therapy","Structured behavioural support shaped around meaningful goals."],
  ["Special Education","Individualised learning support for different developmental needs."],
  ["Psychological & Behavioural Intervention","Support for emotional well-being, behaviour and participation."],
  ["Physiotherapy","Support for movement, motor development and physical skills."],
];

export function Header(){
  const [open,setOpen]=useState(false);
  const links=[['About','/about'],['Programmes','/programmes'],['Therapies','/therapies'],['Resources','/resources'],['Contact','/contact']];
  return <header className="site-header"><div className="top-strip">Supporting Brighter Tomorrows <span>Personalised Care&nbsp; · &nbsp;Evidence-Based Practice&nbsp; · &nbsp;A More Inclusive Tomorrow</span></div><div className="nav-wrap"><a href="/" className="logo"><span className="logo-mark">✦</span><span><strong>Devine CDC</strong><small>Child Development Centre</small></span></a><nav className="nav-desktop"><a href="/">Home</a>{links.map(([t,h])=><a key={h} href={h}>{t}</a>)}</nav><a className="btn nav-cta" href="/consultation">Book a Consultation <span>→</span></a><button className="menu-btn" aria-label="Open menu" onClick={()=>setOpen(!open)}>{open?'×':'☰'}</button></div>{open&&<nav className="mobile-menu"><a href="/">Home</a>{links.map(([t,h])=><a key={h} href={h}>{t}</a>)}<a className="btn" href="/consultation">Book a Consultation →</a></nav>}</header>
}

export function Footer(){return <footer><div className="container footer-grid"><div><a href="/" className="logo footer-logo"><span className="logo-mark">✦</span><span><strong>Devine CDC</strong><small>Child Development Centre</small></span></a><p>Supporting brighter tomorrows through compassionate, evidence-based care.</p><div className="socials"><span>◎</span><span>f</span><span>in</span><span>▶</span></div></div><div><h4>Quick Links</h4><a href="/">Home</a><a href="/about">About</a><a href="/programmes">Programmes</a><a href="/therapies">Therapies</a><a href="/resources">Resources</a><a href="/contact">Contact</a></div><div><h4>Our Services</h4>{programmes.map(p=><a key={p.title} href="/programmes">{p.title}</a>)}</div><div><h4>Contact With Us</h4><p>+91 87440 97777</p><p>Devinechilddevelopmentcentre@gmail.com</p><p>Gurugram, Haryana</p><a href="/contact">View contact details →</a></div></div><div className="footer-bottom container"><span>© 2026 Devine CDC. All rights reserved.</span><span>Privacy Policy&nbsp; · &nbsp;Terms of Service</span><span>Supporting Brighter Tomorrows ♥</span></div></footer>}

export function PageHero({eyebrow,title,copy,imageLabel}:{eyebrow:string,title:string,copy:string,imageLabel?:string}){return <section className="inner-hero"><div className="container inner-hero-grid"><div><span className="eyebrow">{eyebrow}</span><h1 className="serif">{title}</h1><p>{copy}</p></div>{imageLabel&&<Visual label={imageLabel}/>}</div></section>}
export function Visual({label,className='' }:{label:string,className?:string}){return <div className={`visual ${className}`} role="img" aria-label={label}><div className="visual-sun">☼</div><div className="visual-shape one"/><div className="visual-shape two"/><div className="visual-person">●</div><span>{label}</span></div>}
export function SectionHeading({eyebrow,title,copy,center=false}:{eyebrow:string,title:string,copy?:string,center?:boolean}){return <div className={`section-heading ${center?'center':''}`}><span className="eyebrow">{eyebrow}</span><h2 className="serif">{title}</h2>{copy&&<p>{copy}</p>}</div>}
export function CTA(){return <section className="container cta"><div><span className="eyebrow">Ready for the next step?</span><h2 className="serif">Let’s discuss how we can support your child’s unique journey.</h2></div><a className="btn" href="/consultation">Book a Consultation →</a></section>}
export function ProgrammeCard({p}:{p:(typeof programmes)[number]}){return <a href="/programmes" className="photo-card"><Visual label={p.title}/><div><small>{p.age}</small><h3 className="serif">{p.title}</h3><p>{p.text}</p><b>→</b></div></a>}
export function TherapyRow({item,index}:{item:string[],index:number}){return <a className="therapy-row" href="/therapies"><span className="round-icon">{String(index+1).padStart(2,'0')}</span><div><h3 className="serif">{item[0]}</h3><p>{item[1]}</p><b>Learn More →</b></div></a>}
export function FAQList({items}:{items:string[]}){return <div className="faq-list">{items.map((q,i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>We’ll discuss your child’s needs, current strengths and what support may be useful. Bring any existing reports or information you already have.</p></details>)}</div>}
