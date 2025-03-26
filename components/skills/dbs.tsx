// dbs.tsx
import { ReactNode } from "react";
import { SiMongodb, SiMysql, SiPostgresql, SiPrisma } from "react-icons/si";

// Define a type for database data
interface Database {
  name: string;
  icon: ReactNode
}

// Databases data as an array
const databases: Database[] = [
  { name: "MongoDB", icon: <SiMongodb className="text-slate-900 w-6 h-6" /> },
  { name: "MySQL", icon: <SiMysql className="text-slate-900 w-6 h-6" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-slate-900 w-6 h-6" /> },
  { name: "Prisma", icon: <SiPrisma className="text-slate-900 w-6 h-6" /> },
];

// Main dbs constant
export const dbs = (
  <div className="flex flex-col gap-6 m-0">
    <h3 className="px-4 py-2 text-lg font-lora font-semibold text-slate-900 flex items-center gap-2">
      <span role="img" aria-label="database">💾</span>  Databases
    </h3>
    {databases.map((db) => (
      <div
        key={db.name}
        className="flex justify-between items-center px-4 py-2 border-b border-slate-900 last:border-b-0"
      >
        <div className="flex items-center gap-2">
          {db.icon}
          <span className="text-slate-900 font-bold text-sm md:text-base">
            {db.name}
          </span>
        </div>
      </div>
    ))}
  </div>
);