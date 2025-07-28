"use client"

import { useState, useEffect } from "react"
import { Star, Menu, X, Mail, Phone, MapPin, ExternalLink, Code, Database, Server, Globe } from "lucide-react"
import { Github, Linkedin, TrendingUp, BarChart3, PieChart } from "lucide-react"
import React from "react"
import { TechLogo } from "../components/tech-logo"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  // Datos de recomendaciones simuladas
  const recommendations = [
    {
      id: 1,
      name: "Carlos Mendez",
      position: "Ingeniero en Bases de Datos - UTN",
      rating: 5,
      comment:
        "Micaela demostró excelentes habilidades técnicas y capacidad de adaptación. Su trabajo en el desarrollo de aplicaciones web fue excepcional.",
      avatar: "/placeholder.svg?height=60&width=60&text=CM",
    },
    {
      id: 2,
      name: "Ana Rodriguez",
      position: "Team Lead - Desarrollo Frontend",
      rating: 5,
      comment:
        "Trabajar con Micaela fue una experiencia muy positiva. Su conocimiento en React y Vue.js es sólido y siempre está dispuesta a aprender nuevas tecnologías.",
      avatar: "/placeholder.svg?height=60&width=60&text=AR",
    },
    {
      id: 3,
      name: "Luis Martinez",
      position: "Senior Developer - Full Stack",
      rating: 4,
      comment:
        "Micaela tiene una base técnica muy sólida y gran potencial. Su capacidad para resolver problemas complejos es impresionante para su nivel de experiencia.",
      avatar: "/placeholder.svg?height=60&width=60&text=LM",
    },
  ]

  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Bootstrap", "jQuery"] },
    { category: "Backend", items: ["Python", "PHP", "Java (JSP)", "C++"] },
    { category: "Bases de Datos", items: ["SQL", "MySQL", "Informix"] },
    { category: "Herramientas", items: ["Git", "Apache Tomcat", "PowerShell", "NetBeans", "VS Code", "Docker"] },
  ]

  const certifications = [
    "React – Codo a Codo",
    "Full Stack Python – Codo a Codo",
    "Introducción a Java – Educación IT",
    "Instituto Hilet (Desarrollo web)",
    "Fundamentos de Bases de Datos – UTN BA",
    "Data Analytics – Google",
    "Fundamentos PowerShell – Codo a Codo",
    "PHP y MySQL - UTN BA",
  ]

  const programmingLanguages = [
    {
      name: "JavaScript",
      level: 90,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
    },
    {
      name: "HTML",
      level: 95,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
    },
    {
      name: "CSS",
      level: 90,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
    },
    {
      name: "React",
      level: 85,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "Vue.js",
      level: 80,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      color: "#4FC08D",
    },
    {
      name: "Python",
      level: 75,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB",
    },
    {
      name: "PHP",
      level: 70,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      color: "#777BB4",
    },
    {
      name: "SQL",
      level: 85,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#4479A1",
    },
    {
      name: "Java",
      level: 65,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "#ED8B00",
    },
    {
      name: "C++",
      level: 60,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      color: "#00599C",
    },
  ]

const githubProjects = [
  {
    id: 1,
    name: "Rick and Morty",
    description: "App que muestra personajes de Rick and Morty usando su API pública.",
    technologies: ["React", "Node.js", "CSS Modules"],
    stars: 5,
    forks: 2,
    language: "JavaScript",
    updated: "2024-01-20",
    url: "https://github.com/MicaelaMarg/rick-and-morty",
    image: "/images/rick-and-morty-cover.png"
  },
   {
    id: 2,
    name: "Paralives React",
    description: "Recreación del estilo de Paralives con React. Contiene diseño responsivo, componentes reutilizables y animaciones.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    stars: 1,
    forks: 0,
    language: "JavaScript",
    updated: "2025-07-20", // usá la fecha real si querés
    url: "https://github.com/MicaelaMarg/paralives-react",
     image: "/images/rick-and-morty-cover.png"
  }
];


  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = [
            "inicio",
            "sobre-mi",
            "experiencia",
            "habilidades",
            "lenguajes",
            "proyectos",
            "educacion",
            "recomendaciones",
            "contacto",
          ]
          const current = sections.find((section) => {
            const element = document.getElementById(section)
            if (element) {
              const rect = element.getBoundingClientRect()
              return rect.top <= 100 && rect.bottom >= 100
            }
            return false
          })
          if (current && current !== activeSection) {
            setActiveSection(current)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-green-400 text-green-400" : "text-gray-600"}`} />
    ))
  }

  const CircularProgress = React.memo(
    ({ percentage, color, size = 120 }: { percentage: number; color: string; size?: number }) => {
      const radius = (size - 10) / 2
      const circumference = 2 * Math.PI * radius
      const strokeDasharray = circumference
      const strokeDashoffset = circumference - (percentage / 100) * circumference

      return (
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="transform -rotate-90">
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-gray-700"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={color}
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-700 ease-out"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-white">{percentage}%</span>
          </div>
        </div>
      )
    },
  )

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-green-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <TechLogo />

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "sobre-mi", label: "Sobre Mí" },
                { id: "experiencia", label: "Experiencia" },
                { id: "habilidades", label: "Habilidades" },
                { id: "lenguajes", label: "Lenguajes" },
                { id: "proyectos", label: "Proyectos" },
                { id: "educacion", label: "Educación" },
                { id: "recomendaciones", label: "Recomendaciones" },
                { id: "contacto", label: "Contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-green-400 transition-colors ${
                    activeSection === item.id ? "text-green-400" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-green-500/20">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "sobre-mi", label: "Sobre Mí" },
                { id: "experiencia", label: "Experiencia" },
                { id: "habilidades", label: "Habilidades" },
                { id: "lenguajes", label: "Lenguajes" },
                { id: "proyectos", label: "Proyectos" },
                { id: "educacion", label: "Educación" },
                { id: "recomendaciones", label: "Recomendaciones" },
                { id: "contacto", label: "Contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 hover:text-green-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Hola, soy</span>
                <br />
                <span className="text-green-400">Micaela Mattiucci</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">Junior Developer</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Ingeniera en Sistemas y Desarrolladora Full Stack especializada en desarrollo web, bases de datos y
                mantenimiento de sistemas. Apasionada por crear soluciones eficientes y escalables.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contáctame
                </button>
                <a
                  href="https://www.linkedin.com/in/micaela-margarita-mattiucci-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
                >
                  LinkedIn <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full border-4 border-green-500 p-2">
                  <img
                    src="/images/profile.jpeg"
                    alt="Micaela Mattiucci"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-green-400">Perfil</span> Profesional
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/50 rounded-lg p-8 border border-green-500/20">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Ingeniera en Sistemas y Desarrolladora Full Stack con experiencia en desarrollo web, bases de datos y
                mantenimiento de sistemas. Trabajo con tecnologías como HTML, CSS, JavaScript, React, Python, PHP, SQL,
                MySQL, JSP y Java.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Experiencia práctica en servidores Apache Tomcat, consumo de APIs JSON y estructuras backend escalables.
                En HPC, formo parte del área de Tecnología, desarrollando soluciones internas con foco en eficiencia,
                calidad de código y experiencia de usuario.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Code className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                  <p className="text-gray-400">React, Vue.js, JavaScript</p>
                </div>
                <div className="text-center">
                  <Server className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Backend</h3>
                  <p className="text-gray-400">Python, PHP, Java</p>
                </div>
                <div className="text-center">
                  <Database className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Bases de Datos</h3>
                  <p className="text-gray-400">MySQL, SQL, Informix</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Experiencia <span className="text-green-400">Profesional</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Junior Developer */}
              <div className="bg-black/50 rounded-lg p-8 border border-green-500/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=40&width=40&text=HPC"
                        alt="HPC Logo"
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-400">Junior Developer</h3>
                      <p className="text-gray-400">Fundación Médica de Mar del Plata (HPC)</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2023 - Presente</span>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Colaboración en la gestión y desarrollo de proyectos de software institucionales</li>
                  <li>• Soporte técnico a usuarios en escenarios cotidianos y críticos</li>
                  <li>
                    • Desarrollo de aplicaciones web utilizando HTML, JavaScript, Vue.js, Bootstrap, jQuery y Java (JSP)
                  </li>
                  <li>• Trabajo con servidores Apache Tomcat</li>
                </ul>
              </div>

              {/* Hospital Experience */}
              <div className="bg-black/50 rounded-lg p-8 border border-green-500/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=40&width=40&text=HPC"
                        alt="Hospital Privado Logo"
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-400">Orientación y Control</h3>
                      <p className="text-gray-400">Hospital Privado de la Comunidad</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2022 - 2023</span>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Optimización de procesos administrativos utilizando software de gestión hospitalaria</li>
                  <li>• Orientación de habitaciones y asignación de recursos para internaciones</li>
                  <li>• Gestión de turnos médicos, recetas y coordinación con departamentos especializados</li>
                  <li>• Supervisión de traslados internos y externos de pacientes</li>
                </ul>
              </div>

              {/* Hotel Experience */}
              <div className="bg-black/50 rounded-lg p-8 border border-green-500/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=40&width=40&text=UTHGRA"
                        alt="UTHGRA Logo"
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-400">Atención al Cliente</h3>
                      <p className="text-gray-400">Hotel UTHGRA SASSO</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2021 - 2022</span>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Supervisión del acceso de contingentes y manejo de planillas operativas</li>
                  <li>• Optimización de la entrada y salida de huéspedes</li>
                  <li>• Implementación de sistemas digitales para la gestión de registros diarios</li>
                </ul>
              </div>

              {/* Horror Fest Experience */}
              <div className="bg-black/50 rounded-lg p-8 border border-green-500/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=40&width=40&text=HF"
                        alt="Horror Fest Logo"
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-400">Cajera y Atención en Boletería</h3>
                      <p className="text-gray-400">Horror Fest Normandina</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2020 - 2021</span>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Gestión de ventas y transacciones en eventos</li>
                  <li>• Asegurar precisión en los procesos de venta y distribución de entradas</li>
                  <li>• Atención al cliente en eventos masivos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Habilidades <span className="text-green-400">Técnicas</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-black/50 rounded-lg p-6 border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programming Languages Section */}
      <section id="lenguajes" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Dominio de <span className="text-green-400">Lenguajes</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {programmingLanguages.map((lang, index) => (
              <div
                key={index}
                className="bg-black/50 rounded-lg p-6 border border-green-500/20 text-center hover:border-green-400/50 transition-colors"
              >
                <div className="mb-4">
                  <img
                    src={lang.logo || "/placeholder.svg"}
                    alt={lang.name}
                    className="w-10 h-10 mx-auto mb-3"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=40&width=40&text=" + lang.name.charAt(0)
                    }}
                  />
                  <h3 className="text-lg font-semibold text-white mb-4">{lang.name}</h3>
                </div>
                <CircularProgress percentage={lang.level} color={lang.color} size={100} />
              </div>
            ))}
          </div>

          {/* Skills Chart Summary */}
          <div className="mt-16 bg-black/50 rounded-lg p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-green-400 mb-8 text-center">Resumen de Competencias</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Frontend</h4>
                <p className="text-3xl font-bold text-green-400">88%</p>
                <p className="text-gray-400">Promedio</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Backend</h4>
                <p className="text-3xl font-bold text-green-400">70%</p>
                <p className="text-gray-400">Promedio</p>
              </div>
              <div className="text-center">
                <PieChart className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Bases de Datos</h4>
                <p className="text-3xl font-bold text-green-400">85%</p>
                <p className="text-gray-400">Promedio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Mis <span className="text-green-400">Proyectos</span>
          </h2>
          <div className="text-center mb-16">
            <a
              href="https://github.com/MicaelaMarg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <Github className="w-6 h-6" />
              Ver todos mis proyectos en GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {githubProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {githubProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-black/50 rounded-lg p-6 border border-green-500/20 hover:border-green-400/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      {project.language}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <Github className="w-4 h-4" />
                        {project.forks}
                      </span>
                    </div>
                    <span>Actualizado: {new Date(project.updated).toLocaleDateString("es-ES")}</span>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
                  >
                    Ver proyecto <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-black/50 rounded-lg p-12 border border-green-500/20 max-w-2xl mx-auto">
                <Github className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Proyectos en Desarrollo</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Actualmente estoy trabajando en varios proyectos emocionantes. Pronto estarán disponibles aquí.
                  Mientras tanto, puedes ver mi actividad en GitHub.
                </p>
                <div className="space-y-4">
                  <p className="text-green-400 font-semibold">Próximamente:</p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Sistema de gestión hospitalaria con Vue.js</li>
                    <li>• Dashboard de analytics con React</li>
                    <li>• API REST para turismo con Python</li>
                    <li>• Aplicaciones web con Java y JSP</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <a
              href="https://github.com/MicaelaMarg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              Ver más en GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="educacion" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Educación y <span className="text-green-400">Certificaciones</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Education */}
              <div className="bg-black/50 rounded-lg p-8 border border-green-500/20">
                <h3 className="text-2xl font-bold text-green-400 mb-6">Educación</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">Tecnicatura en Programación</h4>
                    <p className="text-gray-400">Universidad Tecnológica Nacional (UTN)</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Licenciatura en Turismo</h4>
                    <p className="text-gray-400">Universidad Nacional de Mar del Plata (UNMDP)</p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-black/50 rounded-lg p-8 border border-green-500/20">
                <h3 className="text-2xl font-bold text-green-400 mb-6">Idiomas</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Español</span>
                    <span className="text-gray-400">Nativo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Inglés</span>
                    <span className="text-gray-400">Nivel B2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-black/50 rounded-lg p-8 border border-green-500/20">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Certificaciones</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section id="recomendaciones" className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-green-400">Recomendaciones</span> Profesionales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((rec) => (
              <div key={rec.id} className="bg-black/50 rounded-lg p-6 border border-green-500/20">
                <div className="flex items-center mb-4">
                  <img
                    src={rec.avatar || "/placeholder.svg"}
                    alt={rec.name}
                    className="w-10 h-10 rounded-full mr-3"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{rec.name}</h4>
                    <p className="text-sm text-gray-400">{rec.position}</p>
                  </div>
                </div>
                <div className="flex mb-4">{renderStars(rec.rating)}</div>
                <p className="text-gray-300 italic">"{rec.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-green-400">Contacto</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-black/50 rounded-lg p-8 border border-green-500/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-green-400 mr-4" />
                    <div>
                      <p className="text-gray-400">Email</p>
                      <a href="mailto:mattiuccimicaelammm@gmail.com" className="text-white hover:text-green-400">
                        mattiuccimicaelammm@gmail.com
                      </a>
                    </div>
                  </div>
                
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-green-400 mr-4" />
                    <div>
                      <p className="text-gray-400">Ubicación</p>
                      <p className="text-white">Mar del Plata, Argentina</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-6 h-6 text-green-400 mr-4" />
                    <div>
                      <p className="text-gray-400">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/micaela-margarita-mattiucci-/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-green-400"
                      >
                        /in/micaela-margarita-mattiucci-/
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">¡Trabajemos juntos!</h3>
                  <p className="text-gray-300 mb-6">
                    Estoy disponible para nuevas oportunidades y proyectos desafiantes. No dudes en contactarme para
                    discutir cómo puedo contribuir a tu equipo.
                  </p>
                  <a
                    href="mailto:mattiuccimicaelammm@gmail.com"
                    className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
                  >
                    Enviar Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-6 bg-gray-800/50 rounded-lg border border-green-500/10">
          <h4 className="text-lg font-semibold text-green-400 mb-4">Conectemos en las redes</h4>
          <div className="flex gap-4">
            <a
              href="https://github.com/MicaelaMarg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/micaela-margarita-mattiucci-/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-green-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2024 Micaela Mattiucci. Desarrollado con React y Next.js</p>
            <p className="text-green-400 mt-2">{"<Código limpio, soluciones eficientes />"}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
