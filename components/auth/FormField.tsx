"use client";

import { useState } from "react";

type FormFieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
};

export default function FormField({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  required = true,
}: FormFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative mt-1.5">
        <input
          id={id}
          name={id}
          type={inputType}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 pr-12 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:border-lavender focus:outline-none focus:ring-2 focus:ring-lavender/20"
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-lavender"
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        )}
      </div>
    </div>
  );
}