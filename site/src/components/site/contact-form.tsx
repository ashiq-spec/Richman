"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { SERVICES } from "@/lib/services";
import { wa } from "@/lib/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please tell us your name"),
  phone: z
    .string()
    .trim()
    .regex(
      /^(\+91[\s-]?)?[0]?[6-9]\d{4}[\s-]?\d{5}$/,
      "Enter a valid 10-digit mobile number",
    ),
  service: z.string().min(1, "Pick a service"),
  date: z.string().trim().optional(),
  notes: z.string().trim().max(500, "Keep notes under 500 characters").optional(),
});

type FormValues = z.infer<typeof schema>;

const inputClasses =
  "w-full rounded-xl border border-gold/20 bg-ink/60 px-4 py-3 text-sm text-silk placeholder:text-mist/50 transition-colors focus:border-gold focus:outline-none";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { service: "" },
  });

  const onSubmit = (values: FormValues) => {
    const lines = [
      "Hi Richman Suits! I'd like to book a consultation.",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Service: ${values.service}`,
      values.date ? `Occasion/date: ${values.date}` : "",
      values.notes ? `Notes: ${values.notes}` : "",
    ].filter(Boolean);
    window.open(wa(lines.join("\n")), "_blank", "noopener");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-gold/15 bg-card p-7"
    >
      <h2 className="font-serif text-2xl text-silk">Request a Consultation</h2>
      <p className="mt-1.5 text-sm text-mist">
        Sends your details to us on WhatsApp — we reply within business hours,
        usually in minutes.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="cf-name"
            className="mb-1.5 block text-xs font-semibold tracking-wide text-champagne uppercase"
          >
            Full name *
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            placeholder="Arjun Kumar"
            aria-invalid={!!errors.name}
            className={cn(inputClasses, errors.name && "border-red-400/60")}
            {...register("name")}
          />
          {errors.name ? (
            <p role="alert" className="mt-1.5 text-xs text-red-300">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="cf-phone"
            className="mb-1.5 block text-xs font-semibold tracking-wide text-champagne uppercase"
          >
            Phone number *
          </label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            aria-invalid={!!errors.phone}
            className={cn(inputClasses, errors.phone && "border-red-400/60")}
            {...register("phone")}
          />
          {errors.phone ? (
            <p role="alert" className="mt-1.5 text-xs text-red-300">
              {errors.phone.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="cf-service"
          className="mb-1.5 block text-xs font-semibold tracking-wide text-champagne uppercase"
        >
          Service required *
        </label>
        <select
          id="cf-service"
          aria-invalid={!!errors.service}
          className={cn(
            inputClasses,
            "appearance-none",
            errors.service && "border-red-400/60",
          )}
          {...register("service")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Just browsing / consultation">
            Just browsing / consultation
          </option>
        </select>
        {errors.service ? (
          <p role="alert" className="mt-1.5 text-xs text-red-300">
            {errors.service.message}
          </p>
        ) : null}
      </div>

      <div className="mt-5">
        <label
          htmlFor="cf-date"
          className="mb-1.5 block text-xs font-semibold tracking-wide text-champagne uppercase"
        >
          Occasion / event date
        </label>
        <input
          id="cf-date"
          type="text"
          placeholder="e.g., Wedding on 15 Dec 2026"
          className={inputClasses}
          {...register("date")}
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="cf-notes"
          className="mb-1.5 block text-xs font-semibold tracking-wide text-champagne uppercase"
        >
          Notes
        </label>
        <textarea
          id="cf-notes"
          rows={3}
          placeholder="Style, fabric preference, budget range…"
          className={cn(inputClasses, "resize-none")}
          {...register("notes")}
        />
        {errors.notes ? (
          <p role="alert" className="mt-1.5 text-xs text-red-300">
            {errors.notes.message}
          </p>
        ) : null}
      </div>

      <Button type="submit" size="xl" className="mt-7 w-full">
        <WhatsAppIcon size={17} />
        Send via WhatsApp
      </Button>
    </form>
  );
}
