import { useState, useEffect, useRef } from "react";

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  type?: string;
}

export const FormField = ({ label, value, onChange, placeholder, required, multiline, type = "text" }: FormFieldProps) => (
  <div className="mb-8">
    <label className="block font-display text-xl md:text-2xl text-foreground mb-3">
      {label}
      {required && <span className="text-muted-foreground ml-1">*</span>}
    </label>
    {multiline ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="w-full bg-transparent border-b border-muted-foreground/30 text-foreground font-body text-base py-3 px-0 placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors resize-none"
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-muted-foreground/30 text-foreground font-body text-base py-3 px-0 placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors"
      />
    )}
  </div>
);

interface SingleSelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
  followUp?: { placeholder: string; required: boolean; value: string; onChange: (val: string) => void };
}

export const SingleSelect = ({ label, options, value, onChange, required, followUp }: SingleSelectProps) => (
  <div className="mb-8">
    <label className="block font-display text-xl md:text-2xl text-foreground mb-4">
      {label}
      {required && <span className="text-muted-foreground ml-1">*</span>}
    </label>
    <div className="space-y-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`block w-full text-left px-4 py-3 border transition-all font-body text-sm ${
            value === opt
              ? "border-accent text-foreground bg-muted"
              : "border-muted-foreground/20 text-muted-foreground hover:border-muted-foreground/40 hover:text-foreground"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
    {followUp && value && (
      <input
        type="text"
        value={followUp.value}
        onChange={(e) => followUp.onChange(e.target.value)}
        placeholder={followUp.placeholder}
        className="w-full bg-transparent border-b border-muted-foreground/30 text-foreground font-body text-sm py-3 px-0 placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors mt-4"
      />
    )}
  </div>
);

interface MultiSelectProps {
  label: string;
  options: string[];
  value: string[];
  onChange: (val: string[]) => void;
  required?: boolean;
  followUp?: { placeholder: string; required: boolean; value: string; onChange: (val: string) => void };
}

export const MultiSelect = ({ label, options, value, onChange, required, followUp }: MultiSelectProps) => {
  const toggle = (opt: string) => {
    onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]);
  };

  return (
    <div className="mb-8">
      <label className="block font-display text-xl md:text-2xl text-foreground mb-4">
        {label}
        {required && <span className="text-muted-foreground ml-1">*</span>}
      </label>
      <div className="space-y-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={`block w-full text-left px-4 py-3 border transition-all font-body text-sm ${
              value.includes(opt)
                ? "border-accent text-foreground bg-muted"
                : "border-muted-foreground/20 text-muted-foreground hover:border-muted-foreground/40 hover:text-foreground"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {followUp && value.length > 0 && (
        <input
          type="text"
          value={followUp.value}
          onChange={(e) => followUp.onChange(e.target.value)}
          placeholder={followUp.placeholder}
          className="w-full bg-transparent border-b border-muted-foreground/30 text-foreground font-body text-sm py-3 px-0 placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors mt-4"
        />
      )}
    </div>
  );
};
