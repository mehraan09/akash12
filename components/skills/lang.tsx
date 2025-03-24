// Langs.tsx
import { ReactNode } from "react";
import { DiCss3, DiHtml5, DiJavascript1, DiSqllite, DiVisualstudio } from "react-icons/di";

interface Language {
  name: string;
  icon: ReactNode // Support single icon or array for HTML/CSS
}

const languages: Language[] = [
  { name: "C/C++", icon: <DiVisualstudio className="text-slate-900 w-6 h-6" /> },
  { name: "JavaScript", icon: <DiJavascript1 className="text-slate-900 w-6 h-6" /> },
  { name: "TypeScript", icon: <DiVisualstudio className="text-slate-900 w-6 h-6" /> },
  { name: "SQL", icon: <DiSqllite className="text-slate-900 w-6 h-6" /> },
  {
    name: "HTML/CSS",
    icon: (
      <div className="flex gap-1">
        <DiHtml5 className="text-slate-900 w-6 h-6" />
        <DiCss3 className="text-slate-900 w-6 h-6" />
      </div>
    ),
  },
];

// Main Langs constant
export const Langs = (
  <div className="flex flex-col gap-6">
    <h3 className="px-4 py-2 text-lg font-lora font-semibold text-slate-900 flex items-center gap-2">
      <span role="img" aria-label="computer">🖥️</span> Programming Languages
    </h3>
    {languages.map((lang) => (
      <div
        key={lang.name}
        className="flex justify-between items-center px-4 py-2 border-b border-slate-200 last:border-b-0"
      >
        <div className="flex items-center gap-2">
          {lang.icon}
          <span className="text-slate-900 font-bold text-sm md:text-base">
            {lang.name}
          </span>
        </div>
      </div>
    ))}
  </div>
);