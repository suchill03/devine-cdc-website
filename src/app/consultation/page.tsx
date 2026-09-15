"use client";

import { FormEvent, useState } from "react";
import { Header, Footer, PageHero, CTA } from "@/components/site";

const validators: Record<string, (value: string) => true | string> = {
  name: (v) => v.trim().length >= 2 || "Please enter your name.",
  phone: (v) => /^[0-9+\-\s()]{7,15}$/.test(v.trim()) || "Enter a valid phone number.",
  email: (v) => v.trim() === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Enter a valid email address.",
  age: (v) => v.trim().length > 0 || "Please share your child's age.",
  help: (v) => v.trim().length >= 5 || "Tell us a little about how we can help.",
};

export default function Consultation() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validateField(field: HTMLInputElement | HTMLTextAreaElement) {
    const validator = validators[field.name];
    if (!validator) return true;
    const result = validator(field.value);
    setErrors((current) => {
      const next = { ...current };
      if (result === true) delete next[field.name];
      else next[field.name] = result;
      return next;
    });
    return result === true;
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea"));
    const results = fields.map((field) => ({ field, valid: validateField(field) }));
    if (results.some(({ valid }) => !valid)) {
      results.find(({ valid }) => !valid)?.field.focus();
      return;
    }
    setSent(true);
    form.reset();
    setErrors({});
  }

  return <><Header/><PageHero eyebrow="Consultation" title="Take the First Step" copy="Let’s discuss how we can support your child." imageLabel="Parent and child conversation"/><main><section className="section"><div className="container form-layout"><form className="form-card" onSubmit={submit} noValidate><h2 className="serif" style={{fontSize:30,marginTop:0}}>Book a Consultation</h2><Field id="name" label="Parent Name" required error={errors.name} onBlur={validateField}/><Field id="phone" label="Phone Number" type="tel" required error={errors.phone} onBlur={validateField}/><Field id="email" label="Email" type="email" error={errors.email} onBlur={validateField}/><Field id="age" label="Child’s Age" required error={errors.age} onBlur={validateField}/><Field id="help" label="How can we help?" multiline required error={errors.help} onBlur={validateField}/><button className="btn" type="submit">Submit Enquiry</button>{sent&&<p role="status" style={{color:'var(--teal)',fontSize:11,marginBottom:0}}>Thank you. Your enquiry has been noted for follow-up.</p>}</form><aside className="next-steps"><h2 className="serif" style={{fontSize:27,marginTop:0}}>What happens next?</h2>{['We’ll get in touch to understand what you need.','We’ll discuss your child’s needs and guide you on next steps.','Together, we’ll plan the right support for your child.'].map((x,i)=><div className="next-step" key={x}><i>{i+1}</i><p>{x}</p></div>)}<hr style={{border:0,borderTop:'1px solid #ffffff99',margin:'25px 0'}}/><strong style={{fontSize:11}}>Prefer to talk directly?</strong><p style={{fontSize:11,color:'var(--muted)',lineHeight:1.6}}>Call or WhatsApp us at +91 87440 97777.</p></aside></div></section><CTA/></main><Footer/></>;
}

function Field({ id, label, type = "text", required = false, multiline = false, error, onBlur }: { id: string; label: string; type?: string; required?: boolean; multiline?: boolean; error?: string; onBlur: (field: HTMLInputElement | HTMLTextAreaElement) => void }) {
  const common = { id, name: id, required, "aria-invalid": Boolean(error), "aria-describedby": error ? `${id}-error` : undefined, onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => onBlur(e.currentTarget) };
  return <div className="field" style={{marginBottom:18}}><label htmlFor={id}>{label}{required ? " *" : ""}</label>{multiline ? <textarea {...common} rows={4}/> : <input {...common} type={type}/>} {error&&<p id={`${id}-error`} role="alert" style={{fontSize:11,color:'#9b4b3f',margin:'6px 0 0'}}>{error}</p>}</div>;
}
