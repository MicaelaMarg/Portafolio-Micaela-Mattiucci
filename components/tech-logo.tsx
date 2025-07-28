"use client"

import { useState, useEffect } from "react"

export function TechLogo() {
  const [currentCode, setCurrentCode] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const codeSnippets = ["<MM/>", "{ }", "[ ]", "( )", "</>", "dev"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeSnippets.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative flex items-center justify-center w-12 h-10 md:w-16 md:h-12 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fondo con efecto de matriz tecnológica */}
      <div className="absolute inset-0 opacity-10 md:opacity-20">
        <svg viewBox="0 0 64 48" className="w-full h-full">
          <defs>
            <pattern id="tech-grid" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
              <path d="M0 3h6M3 0v6" stroke="currentColor" strokeWidth="0.3" className="text-green-400" opacity="0.4" />
              <circle cx="3" cy="3" r="0.5" fill="currentColor" className="text-green-400" opacity="0.6" />
            </pattern>
            <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ff41" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00cc33" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#39ff14" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <rect width="64" height="48" fill="url(#tech-grid)" />
        </svg>
      </div>

      {/* Contenedor principal con figura femenina 3D */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Avatar femenino 3D */}
        <div className="relative w-8 h-8 md:w-10 md:h-10 transform-gpu">
          <div
            className={`absolute inset-0 transform transition-all duration-1000 ease-in-out ${
              isHovered ? "scale-110 rotate-3" : "scale-100"
            }`}
            style={{
              transformStyle: "preserve-3d",
              animation: "gentle-float 4s ease-in-out infinite",
            }}
          >
            {/* Cabeza/Cara principal */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-green-300 via-green-400 to-green-500 border-2 border-green-200 flex items-center justify-center shadow-lg"
              style={{
                transform: "translateZ(4px)",
                background: "linear-gradient(135deg, #00ff41 0%, #00cc33 50%, #39ff14 100%)",
              }}
            >
              {/* Cara estilizada */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                {/* Cabello */}
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-3 md:w-7 md:h-4 rounded-t-full"
                  style={{
                    background: "linear-gradient(45deg, #1a1a1a 0%, #333 50%, #1a1a1a 100%)",
                    animation: "hair-sway 3s ease-in-out infinite",
                  }}
                />

                {/* Ojos */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                  <div className="w-1 h-1 bg-black rounded-full animate-pulse" />
                  <div className="w-1 h-1 bg-black rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                </div>

                {/* Sonrisa */}
                <div
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-1 border-b-2 border-black rounded-full"
                  style={{ animation: "smile 2s ease-in-out infinite" }}
                />
              </div>
            </div>

            {/* Cuerpo/Torso */}
            <div
              className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-3 md:w-5 md:h-4 rounded-lg bg-gradient-to-b from-green-600 to-green-800 border border-green-400"
              style={{ transform: "translateZ(2px)" }}
            >
              {/* Detalles del outfit tech */}
              <div className="absolute inset-1 bg-black rounded opacity-20" />
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-300 rounded-full animate-pulse" />
            </div>

            {/* Brazos */}
            <div
              className="absolute top-7 left-0 w-2 h-1 md:w-3 md:h-1 rounded-full bg-gradient-to-r from-green-500 to-green-600"
              style={{
                transform: "translateZ(1px) rotate(-20deg)",
                animation: "arm-wave 3s ease-in-out infinite",
              }}
            />
            <div
              className="absolute top-7 right-0 w-2 h-1 md:w-3 md:h-1 rounded-full bg-gradient-to-l from-green-500 to-green-600"
              style={{
                transform: "translateZ(1px) rotate(20deg)",
                animation: "arm-wave 3s ease-in-out infinite reverse",
              }}
            />
          </div>
        </div>

        {/* Partículas de código flotantes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 font-mono text-xs opacity-60 select-none"
              style={{
                left: `${15 + i * 20}%`,
                top: `${20 + (i % 2) * 50}%`,
                animation: `code-particle-${i % 2} ${3 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              {i % 2 === 0 ? "{}" : "</>"}
            </div>
          ))}
        </div>

        {/* Elementos tecnológicos adicionales */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Anillos orbitales */}
          <div
            className="absolute inset-0 border border-green-400 rounded-full opacity-30"
            style={{ animation: "orbit-ring 8s linear infinite" }}
          />
          <div
            className="absolute inset-1 border border-green-300 rounded-full opacity-20"
            style={{ animation: "orbit-ring 6s linear infinite reverse" }}
          />
        </div>
      </div>

      {/* Texto de código que cambia */}
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
        <span
          className="text-xs md:text-sm text-green-400 font-mono opacity-70 transition-all duration-500 select-none"
          style={{ animation: "code-glow 2s ease-in-out infinite" }}
        >
          {codeSnippets[currentCode]}
        </span>
      </div>

      {/* Efecto de hover - ondas expansivas */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
        <div
          className="absolute inset-0 border border-green-400 rounded-full"
          style={{ animation: "wave-expand 1.5s ease-out infinite" }}
        />
        <div
          className="absolute inset-0 border border-green-300 rounded-full"
          style={{ animation: "wave-expand 1.5s ease-out infinite 0.5s" }}
        />
      </div>

      {/* Efectos de luz ambiental */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full opacity-80"
          style={{ animation: "light-pulse 2s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-0 right-0 w-1 h-1 bg-green-300 rounded-full opacity-60"
          style={{ animation: "light-pulse 2.5s ease-in-out infinite 1s" }}
        />
      </div>

      <style jsx>{`
        @keyframes gentle-float {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
          }
          50% {
            transform: translateY(-3px) rotateX(2deg) rotateY(2deg);
          }
        }

        @keyframes hair-sway {
          0%, 100% {
            transform: translateX(-50%) rotate(0deg);
          }
          50% {
            transform: translateX(-50%) rotate(2deg);
          }
        }

        @keyframes smile {
          0%, 100% {
            transform: translateX(-50%) scaleX(1);
          }
          50% {
            transform: translateX(-50%) scaleX(1.1);
          }
        }

        @keyframes arm-wave {
          0%, 100% {
            transform: translateZ(1px) rotate(-20deg);
          }
          50% {
            transform: translateZ(1px) rotate(-10deg);
          }
        }

        @keyframes code-particle-0 {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-8px) translateX(3px) rotate(5deg);
            opacity: 0.8;
          }
        }

        @keyframes code-particle-1 {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-6px) translateX(-2px) rotate(-3deg);
            opacity: 0.7;
          }
        }

        @keyframes orbit-ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes code-glow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);
            transform: scale(1);
          }
          50% {
            text-shadow: 0 0 10px rgba(0, 255, 65, 0.8), 0 0 15px rgba(0, 204, 51, 0.4);
            transform: scale(1.05);
          }
        }

        @keyframes wave-expand {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        @keyframes light-pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          @keyframes gentle-float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-2px);
            }
          }
        }
      `}</style>
    </div>
  )
}
