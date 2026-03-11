"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type Persona = "pm" | "dev" | "neutral";

interface PersonaContextType {
  persona: Persona;
  setPersona: (p: Persona) => void; // Added manual control
}

const PersonaContext = createContext<PersonaContextType>({
  persona: "neutral",
  setPersona: () => {},
});

export const PersonaProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const [persona, setPersona] = useState<Persona>("neutral");
  const [mounted, setMounted] = useState(false);

  // Sync persona with the URL path
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    if (pathname.startsWith("/pm")) {
      setPersona("pm");
    } else if (pathname.startsWith("/dev")) {
      setPersona("dev");
    } else {
      setPersona("neutral");
    }
  }, [pathname]);

  return (
    <PersonaContext.Provider value={{ persona, setPersona }}>
      <div
        className={`min-h-screen transition-colors duration-700 ${
          mounted && persona === "pm"
            ? "theme-pm bg-alchemy-dark text-white"
            : mounted && persona === "dev"
              ? "theme-dev bg-alchemy-dark text-white"
              : "bg-alchemy-dark text-white"
        }`}
      >
        {children}
      </div>
    </PersonaContext.Provider>
  );
};

export const usePersona = () => useContext(PersonaContext);
