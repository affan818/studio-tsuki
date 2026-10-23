"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  propertyType: "",
  budget: "",
  timeline: "",
  city: "",
  pincode: "",
  address: "",
  details: "",
};

const inputClass =
  "w-full border border-[#BFAE93]/25 bg-[#07131D]/60 px-4 py-3 text-sm text-[#F1EAE1] outline-none transition-colors placeholder:text-white/35 focus:border-[#D9CBB8]";

const labelClass =
  "mb-2 block text-[10px] tracking-[0.16em] text-[#D9CBB8] uppercase";

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content > *", {
        y: 24,
        opacity: 0,
        duration: 0.85,
        stagger: 0.13,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".cta-brand-panel", {
        x: 24,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-brand-panel",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".cta-bottom-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".cta-bottom-line",
          start: "top 95%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  function updateField(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Replace with your real WhatsApp number, including country code.
    const whatsappNumber = "919082028042";

    const message = [
      "Hello Studio Tsuki! I'd like to discuss an interior design project.",
      "",
      `Full Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Service: ${form.service}`,
      `Property Type: ${form.propertyType}`,
      `Budget: ${form.budget}`,
      `Timeline: ${form.timeline}`,
      `City: ${form.city}`,
      `PIN Code: ${form.pincode}`,
      `Address: ${form.address}`,
      `Project Details: ${form.details || "Not provided"}`,
    ].join("\n");

    if (whatsappNumber.includes("X")) {
      alert(
        "Please add Studio Tsuki's WhatsApp number in the ContactCTA component before submitting.",
      );
      return;
    }

    setSubmitted(true);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <>
      <section
        ref={sectionRef}
        id="contact"
        className="relative isolate overflow-hidden bg-[#07131D] text-[#F1EAE1]"
      >
        <div aria-hidden="true" className="absolute inset-0 -z-20">
          <Image
            src="/images/contact-cta.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#07131D]/95 via-[#07131D]/65 to-[#07131D]/20"
        />

        <div className="mx-auto grid min-h-[470px] max-w-[1600px] grid-cols-1 md:min-h-[500px] md:grid-cols-[1.15fr_0.85fr]">
          <div className="cta-content flex flex-col items-start justify-center px-5 py-16 sm:px-8 md:py-20 lg:px-16 xl:px-24">
            <p className="mb-5 flex items-center gap-3 text-[10px] tracking-[0.28em] text-[#D9CBB8] uppercase">
              <span className="h-px w-8 bg-[#BFAE93]" />
              YOUR SPACE, YOUR STORY
            </p>

            <h2 className="max-w-2xl text-4xl leading-[1.12] font-light tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Let's Create a Space
              <br />
              that feels{" "}
              <span className="font-serif italic text-[#D9CBB8]">
                like you.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
              Whether you are planning a new home, refreshing an apartment or
              shaping an environment for your business, Studio Tsuki brings a
              thoughtful approach to design, materials and functionality.
              <br /> <br />
              Tell us about your space, your ideas and how you want it to feel.
              Let's explore a design direction that brings your vision to life.
            </p>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setIsOpen(true);
              }}
              className="group mt-8 inline-flex min-h-11 items-center gap-5 bg-[#D9CBB8] px-6 py-3 text-[10px] font-medium tracking-[0.16em] text-[#101820] uppercase transition-colors duration-300 hover:bg-[#F1EAE1]"
            >
              Start a Project
              <ArrowRight
                size={16}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <p className="mt-5 text-[10px] tracking-wide text-white/50">
              Designing spaces that feel like home.
            </p>
          </div>

          <div className="cta-brand-panel relative flex min-h-[260px] items-end overflow-hidden border-t border-white/10 md:min-h-full md:border-t-0 md:border-l md:border-white/15">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#07131D]/90 via-[#07131D]/15 to-[#07131D]/20"
            />

            <div className="relative z-10 w-full px-6 py-8 sm:px-10 md:px-8 lg:px-12">
              <div className="ml-auto max-w-[230px] border-l border-[#D9CBB8]/40 pl-5">
                <p className="font-serif text-2xl tracking-[0.2em] text-[#F1EAE1]">
                  TSUKI
                </p>
                <p className="mt-1 text-[8px] tracking-[0.42em] text-[#D9CBB8] uppercase">
                  Studio
                </p>
                <div className="my-5 h-px w-10 bg-[#BFAE93]" />
                <p className="text-xs leading-6 text-white/65">
                  A quieter kind of luxury.
                  <br />A more personal way of living.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-bottom-line h-px w-full bg-gradient-to-r from-transparent via-[#BFAE93]/50 to-transparent" />
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#02080D]/80 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-form-title"
            className="relative max-h-[92dvh] w-full max-w-3xl overflow-y-auto border border-[#BFAE93]/30 bg-[#0B1620] text-[#F1EAE1] shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-white/10 bg-[#0B1620]/95 px-5 py-5 backdrop-blur sm:px-8">
              <div>
                <p className="mb-2 text-[9px] tracking-[0.28em] text-[#D9CBB8] uppercase">
                  Studio Tsuki · Project Enquiry
                </p>
                <h3
                  id="project-form-title"
                  className="font-serif text-2xl sm:text-3xl"
                >
                  {submitted
                    ? "Your enquiry is ready"
                    : "Tell us about your space."}
                </h3>
                <p className="mt-2 text-xs leading-5 text-white/55">
                  A few details will help us understand your vision.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close project enquiry form"
                className="ml-3 flex size-10 shrink-0 items-center justify-center border border-white/15 transition-colors hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>

            {submitted ? (
              <div className="px-6 py-14 text-center sm:px-10">
                <CheckCircle2
                  size={42}
                  strokeWidth={1.2}
                  className="mx-auto mb-5 text-[#D9CBB8]"
                />
                <p className="text-sm leading-7 text-white/70">
                  Your details have been prepared for WhatsApp. Complete sending
                  your message in the WhatsApp tab to contact Studio Tsuki.
                </p>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="mt-7 bg-[#D9CBB8] px-6 py-3 text-[10px] tracking-[0.16em] text-[#101820] uppercase hover:bg-[#F1EAE1]"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-7 px-5 py-6 sm:px-8 sm:py-8"
              >
                <div>
                  <p className="mb-4 text-[10px] tracking-[0.2em] text-[#D9CBB8] uppercase">
                    01 / Your Details
                  </p>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="fullName">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        value={form.fullName}
                        onChange={updateField}
                        className={inputClass}
                        placeholder="Your full name"
                        autoComplete="name"
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="phone">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={updateField}
                        className={inputClass}
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                        pattern="[+0-9 ()-]{8,20}"
                        title="Enter a valid phone number"
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass} htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={updateField}
                        className={inputClass}
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="mb-4 text-[10px] tracking-[0.2em] text-[#D9CBB8] uppercase">
                    02 / Your Project
                  </p>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="service">
                        Service Required *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={updateField}
                        className={inputClass}
                        required
                      >
                        <option value="" className="bg-[#0B1620]">
                          Select a service
                        </option>
                        <option className="bg-[#0B1620]">
                          Residential Interior Design
                        </option>
                        <option className="bg-[#0B1620]">
                          Commercial Interior Design
                        </option>
                        <option className="bg-[#0B1620]">
                          Full Home Design
                        </option>
                        <option className="bg-[#0B1620]">Room Makeover</option>
                        <option className="bg-[#0B1620]">
                          Renovation / Redesign
                        </option>
                        <option className="bg-[#0B1620]">
                          Consultation Only
                        </option>
                        <option className="bg-[#0B1620]">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="propertyType">
                        Property Type *
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={form.propertyType}
                        onChange={updateField}
                        className={inputClass}
                        required
                      >
                        <option value="" className="bg-[#0B1620]">
                          Select property type
                        </option>
                        <option className="bg-[#0B1620]">
                          Apartment / Flat
                        </option>
                        <option className="bg-[#0B1620]">
                          Villa / Independent House
                        </option>
                        <option className="bg-[#0B1620]">
                          Studio Apartment
                        </option>
                        <option className="bg-[#0B1620]">
                          Office / Workspace
                        </option>
                        <option className="bg-[#0B1620]">
                          Retail / Hospitality
                        </option>
                        <option className="bg-[#0B1620]">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="budget">
                        Estimated Budget *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={updateField}
                        className={inputClass}
                        required
                      >
                        <option value="" className="bg-[#0B1620]">
                          Choose your budget
                        </option>
                        <option className="bg-[#0B1620]">Below ₹5 lakh</option>
                        <option className="bg-[#0B1620]">₹5–10 lakh</option>
                        <option className="bg-[#0B1620]">₹10–20 lakh</option>
                        <option className="bg-[#0B1620]">₹20–40 lakh</option>
                        <option className="bg-[#0B1620]">
                          ₹40 lakh and above
                        </option>
                        <option className="bg-[#0B1620]">Need guidance</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="timeline">
                        When Would You Like to Start? *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={updateField}
                        className={inputClass}
                        required
                      >
                        <option value="" className="bg-[#0B1620]">
                          Select timeline
                        </option>
                        <option className="bg-[#0B1620]">
                          As soon as possible
                        </option>
                        <option className="bg-[#0B1620]">Within 1 month</option>
                        <option className="bg-[#0B1620]">
                          Within 1–3 months
                        </option>
                        <option className="bg-[#0B1620]">
                          Within 3–6 months
                        </option>
                        <option className="bg-[#0B1620]">Just exploring</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className={labelClass} htmlFor="details">
                        Tell Us About Your Vision
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        value={form.details}
                        onChange={updateField}
                        className={`${inputClass} min-h-24 resize-y`}
                        placeholder="Rooms, approximate area, preferred style or anything else you'd like us to know..."
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="mb-4 text-[10px] tracking-[0.2em] text-[#D9CBB8] uppercase">
                    03 / Project Location
                  </p>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="city">
                        City *
                      </label>
                      <input
                        id="city"
                        name="city"
                        value={form.city}
                        onChange={updateField}
                        className={inputClass}
                        placeholder="City / town"
                        autoComplete="address-level2"
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="pincode">
                        PIN Code *
                      </label>
                      <input
                        id="pincode"
                        name="pincode"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]{6}"
                        maxLength={6}
                        value={form.pincode}
                        onChange={updateField}
                        className={inputClass}
                        placeholder="6-digit PIN code"
                        autoComplete="postal-code"
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass} htmlFor="address">
                        Full Project Address *
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={form.address}
                        onChange={updateField}
                        className={`${inputClass} min-h-20 resize-y`}
                        placeholder="Area, locality, building name or address"
                        autoComplete="street-address"
                        rows={2}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <button
                    type="submit"
                    className="group flex min-h-12 w-full items-center justify-center gap-3 bg-[#D9CBB8] px-6 py-4 text-[10px] font-medium tracking-[0.18em] text-[#101820] uppercase transition-colors hover:bg-[#F1EAE1]"
                  >
                    Continue to WhatsApp
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                  <p className="mt-3 text-center text-[10px] leading-5 text-white/40">
                    Your enquiry details will be placed in a WhatsApp message
                    for you to send.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
