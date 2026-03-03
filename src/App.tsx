/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Briefcase, 
  GraduationCap, 
  Languages, 
  ExternalLink,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Terminal,
  Cpu,
  Globe,
  Car,
  Sun,
  Moon
} from 'lucide-react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  icon: any;
  title: string;
  isDark: boolean;
}

const SectionHeader = ({ icon: Icon, title, isDark }: SectionHeaderProps) => (
  <div className={`flex items-center gap-3 mb-8 border-b pb-2 transition-colors duration-300 ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
    <Icon className="w-5 h-5 text-emerald-500" />
    <h2 className={`text-sm font-mono uppercase tracking-widest transition-colors duration-300 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{title}</h2>
  </div>
);

interface SkillBadgeProps {
  name: string;
  level?: string;
  isDark: boolean;
  key?: React.Key;
}

const SkillBadge = ({ name, level, isDark }: SkillBadgeProps) => (
  <div className={`group relative flex flex-col p-4 border rounded-lg transition-all duration-300 ${
    isDark 
      ? 'bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50' 
      : 'bg-white border-zinc-200 hover:border-emerald-500/50 shadow-sm'
  }`}>
    <div className="flex justify-between items-start mb-2">
      <span className={`font-medium transition-colors duration-300 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{name}</span>
      {level && (
        <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full transition-colors duration-300 ${
          isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-500'
        }`}>
          {level}
        </span>
      )}
    </div>
    <div className={`h-1 w-full rounded-full overflow-hidden transition-colors duration-300 ${isDark ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: level === 'Ekspert' ? '100%' : '65%' }}
        className="h-full bg-emerald-500/50"
      />
    </div>
  </div>
);

export default function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  const experiences = [
    {
      role: "Informatik Underviser",
      company: "ZBC - Zealand Business College",
      period: "August 2019 - Marts 2026",
      tasks: "Som underviser på ZBC har jeg undervist i Informatik på EUX Studieåret samt Digital markedsføring på hovedforløbet. Desuden har jeg arbejdet som AMU underviser i primært IT relaterede kurser, som fx. Office 365.",
      highlight: "Som underviser har jeg arbejdet tæt sammen med mit team af andre EUX-lærere, på tværs af fag. Det har været meget givende og har lært mig at værdsætte at få værdifulde indspark til min undervisning."
    },
    {
      role: "Ejer / Webudvikler",
      company: "Expoze",
      period: "Maj 2013 - Maj 2016",
      tasks: "Egen virksomhed med fokus på udvikling af special tilpasning af Joomla samt implementering af webservices."
    },
    {
      role: "IT Medarbejder - IT & AV",
      company: "Næstved Gymnasium og HF",
      period: "Maj 2007 - Maj 2008",
      tasks: "Primære arbejdsopgaver var opsætning og support af IT arbejdsstationer, support af AV-udstyr, printere og nøglesystem."
    },
    {
      role: "Pædagogmedhjælper",
      company: "Bo & Naboskab Præstø",
      period: "April 2006 - April 2007",
      tasks: "Pædagogmedhjælper på afdeling for borgere med forskellige grader af autisme og udad-reagerende adfærd."
    },
    {
      role: "Ejer/udvikler/webmaster",
      company: "Multimedion",
      period: "April 2003 - April 2006",
      tasks: "Multimedion leverede totale webløsninger til virksomheder baseret på Open Source Systemer."
    }
  ];

  const education = [
    {
      degree: "PBA i webudvikling",
      school: "Erhvervsakademiet Lillebælt Odense",
      period: "2014 - 2016",
      description: "Avancerede medie teknologier, mobiludvikling, middleware/backend (PHP/MySQL), design thinking, prototype development."
    },
    {
      degree: "Projektledelse med PRINCE2 Certificering",
      school: "Ledernes Kompetencecenter",
      period: "2012",
      description: "Certificeret PRINCE2"
    },
    {
      degree: "Multimedie Integrator",
      school: "Digital Media - Center for Medie og Kommunikation Roskilde",
      period: "2004 - 2006",
      description: "Webudvikling, applikationsudvikling, digital integration, UX/UI, grafisk produktion."
    }
  ];

  const itSkills = [
    { name: "Joomla CMS", level: "Ekspert" },
    { name: "PHP", level: "Øvet" },
    { name: "JavaScript", level: "Øvet" },
    { name: "MySQL", level: "Øvet" },
    { name: "Claude Code", level: "Øvet" },
    { name: "HTML & CSS", level: "Øvet" },
    { name: "Wordpress CMS", level: "Øvet" },
    { name: "Drupal CMS", level: "Øvet" },
    { name: "Git", level: "Øvet" },
    { name: "SEO optimering", level: "Øvet" },
    { name: "Moodle LMS", level: "Øvet" },
    { name: "Adobe Creative Cloud", level: "Øvet" },
    { name: "Microsoft 365", level: "Øvet" },
    { name: "React", level: "Øvet" },
    { name: "Tailwind CSS", level: "Øvet" },
    { name: "Visual code", level: "Øvet" },
    { name: "API Development", level: "Øvet" },
    { name: "NodeJs", level: "Øvet" },
    { name: "ExpressJs", level: "Øvet" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'up' | 'down') => {
    if (scrollRef.current) {
      const { scrollTop, clientHeight } = scrollRef.current;
      const scrollAmount = clientHeight / 2;
      scrollRef.current.scrollTo({
        top: direction === 'up' ? scrollTop - scrollAmount : scrollTop + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${
      isDark ? 'bg-[#0a0a0a] text-zinc-300 selection:bg-emerald-500/30' : 'bg-zinc-50 text-zinc-700 selection:bg-emerald-500/20'
    }`}>
      {/* Background Grid */}
      <div className={`fixed inset-0 pointer-events-none transition-opacity duration-500 ${
        isDark 
          ? 'bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]' 
          : 'bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]'
      } bg-[size:40px_40px]`} />
      
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full border transition-all duration-300 ${
          isDark 
            ? 'bg-zinc-900 border-zinc-800 text-emerald-500 hover:bg-zinc-800' 
            : 'bg-white border-zinc-200 text-emerald-600 hover:bg-zinc-50 shadow-lg'
        }`}
        aria-label="Toggle Theme"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      <div className="relative max-w-6xl mx-auto px-6 py-12 md:py-24">
        {/* Header */}
        <header className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <h1 className={`text-5xl md:text-7xl font-bold tracking-tighter mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}>
                Claus Hansen
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-emerald-500 font-mono text-sm uppercase tracking-widest">
                <span>IT Instructor</span>
                <span className={`w-1 h-1 rounded-full transition-colors duration-300 ${isDark ? 'bg-zinc-700' : 'bg-zinc-300'}`} />
                <span>Web Developer</span>
                <span className={`w-1 h-1 rounded-full transition-colors duration-300 ${isDark ? 'bg-zinc-700' : 'bg-zinc-300'}`} />
                <span>AI Specialist</span>
              </div>
            </div>
            
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm border-l pl-6 transition-colors duration-300 ${
              isDark ? 'border-zinc-800' : 'border-zinc-200'
            }`}>
              <a href="mailto:webkonsulent.claus.hansen@gmail.com" className={`flex items-center gap-2 transition-colors duration-300 ${
                isDark ? 'hover:text-emerald-400' : 'hover:text-emerald-600'
              }`}>
                <Mail className="w-4 h-4" /> webkonsulent.claus.hansen@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> 42611414
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Dalmose, 4261
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4" /> Kørekort: Almindelig bil (B)
              </div>
            </div>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <main className="lg:col-span-8 space-y-24">
            
            {/* Experience */}
            <section>
              <SectionHeader icon={Briefcase} title="Arbejdserfaring" isDark={isDark} />
              <div className="space-y-12">
                {experiences.map((exp, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`relative pl-8 border-l group transition-colors duration-300 ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}
                  >
                    <div className={`absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full transition-colors duration-300 ${
                      isDark ? 'bg-zinc-800 group-hover:bg-emerald-500' : 'bg-zinc-200 group-hover:bg-emerald-500'
                    }`} />
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                      <h3 className={`text-xl font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{exp.role}</h3>
                      <span className="text-xs font-mono text-zinc-500 uppercase">{exp.period}</span>
                    </div>
                    <p className="text-emerald-500/80 text-sm font-medium mb-4">{exp.company}</p>
                    <p className={`leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{exp.tasks}</p>
                    {exp.highlight && (
                      <div className={`border-l-2 p-4 rounded-r-lg transition-colors duration-300 ${
                        isDark ? 'bg-zinc-900/30 border-emerald-500/30' : 'bg-zinc-100 border-emerald-500/30'
                      }`}>
                        <p className={`text-sm italic leading-relaxed transition-colors duration-300 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                          "{exp.highlight}"
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <SectionHeader icon={GraduationCap} title="Uddannelse" isDark={isDark} />
              <div className="grid gap-8">
                {education.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`p-6 border rounded-xl transition-all duration-300 ${
                      isDark ? 'bg-zinc-900/30 border-zinc-800 hover:bg-zinc-900/50' : 'bg-white border-zinc-200 hover:bg-zinc-50 shadow-sm'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`text-lg font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{edu.degree}</h3>
                      <span className="text-xs font-mono text-zinc-500">{edu.period}</span>
                    </div>
                    <p className="text-emerald-500 text-sm mb-3">{edu.school}</p>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-24">
            
            {/* Skills */}
            <section className="relative">
              <SectionHeader icon={Terminal} title="IT-erfaring" isDark={isDark} />
              
              <div className="relative flex flex-col gap-2">
                {/* Scroll Up Arrow */}
                <button 
                  onClick={() => scroll('up')}
                  className={`flex items-center justify-center w-full py-1 rounded-t-lg border-t border-x transition-all duration-300 ${
                    isDark ? 'bg-zinc-900/50 border-zinc-800 text-emerald-500 hover:bg-zinc-800' : 'bg-white border-zinc-200 text-emerald-600 hover:bg-zinc-50'
                  }`}
                  aria-label="Scroll Up"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>

                <div 
                  ref={scrollRef}
                  className="grid grid-cols-1 gap-3 max-h-[600px] overflow-y-auto scrollbar-hide px-1 scroll-smooth"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {itSkills.map((skill, idx) => (
                    <SkillBadge key={idx} name={skill.name} level={skill.level} isDark={isDark} />
                  ))}
                </div>

                {/* Scroll Down Arrow */}
                <button 
                  onClick={() => scroll('down')}
                  className={`flex items-center justify-center w-full py-1 rounded-b-lg border-b border-x transition-all duration-300 ${
                    isDark ? 'bg-zinc-900/50 border-zinc-800 text-emerald-500 hover:bg-zinc-800' : 'bg-white border-zinc-200 text-emerald-600 hover:bg-zinc-50'
                  }`}
                  aria-label="Scroll Down"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </section>

            {/* Qualifications */}
            <section>
              <SectionHeader icon={Cpu} title="Kvalifikationer" isDark={isDark} />
              <ul className="space-y-3">
                {[
                  "Undervisning i AI",
                  "Webprogrammering",
                  "Udvikling af læringsforløb",
                  "Fagudvikling",
                  "Digital marketing",
                  "Digital formidling",
                  "Design og udvikling, webapplikationer"
                ].map((q, idx) => (
                  <li key={idx} className={`flex items-center gap-3 text-sm transition-colors duration-300 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    <ChevronRight className="w-4 h-4 text-emerald-500" />
                    {q}
                  </li>
                ))}
              </ul>
            </section>

            {/* Languages */}
            <section>
              <SectionHeader icon={Languages} title="Sprog" isDark={isDark} />
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={`transition-colors duration-300 ${isDark ? '' : 'text-zinc-900'}`}>Dansk</span>
                    <span className="text-emerald-500">Modersmål</span>
                  </div>
                  <div className={`h-1 w-full rounded-full transition-colors duration-300 ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`}>
                    <div className="h-full w-full bg-emerald-500/50" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={`transition-colors duration-300 ${isDark ? '' : 'text-zinc-900'}`}>Engelsk</span>
                    <span className="text-emerald-500">Flydende</span>
                  </div>
                  <div className={`h-1 w-full rounded-full transition-colors duration-300 ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`}>
                    <div className="h-full w-[85%] bg-emerald-500/50" />
                  </div>
                </div>
              </div>
            </section>

            {/* Links */}
            <section>
              <SectionHeader icon={Globe} title="Links" isDark={isDark} />
              <div className="space-y-3">
                <a 
                  href="https://github.com/claushansen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 border rounded-lg transition-all duration-300 group ${
                    isDark ? 'bg-zinc-900/50 border-zinc-800 hover:border-emerald-500' : 'bg-white border-zinc-200 hover:border-emerald-500 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Github className={`w-5 h-5 transition-colors duration-300 ${isDark ? '' : 'text-zinc-900'}`} />
                    <span className={`text-sm font-medium transition-colors duration-300 ${isDark ? '' : 'text-zinc-900'}`}>GitHub</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-emerald-500 transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/webkonsulentclaushansen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 border rounded-lg transition-all duration-300 group ${
                    isDark ? 'bg-zinc-900/50 border-zinc-800 hover:border-emerald-500' : 'bg-white border-zinc-200 hover:border-emerald-500 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className={`w-5 h-5 transition-colors duration-300 ${isDark ? '' : 'text-zinc-900'}`} />
                    <span className={`text-sm font-medium transition-colors duration-300 ${isDark ? '' : 'text-zinc-900'}`}>LinkedIn</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-emerald-500 transition-colors" />
                </a>
              </div>
            </section>

          </aside>
        </div>

        {/* Footer */}
        <footer className={`mt-24 pt-8 border-t text-center transition-colors duration-300 ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
          <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
            © 2026 Claus Hansen
          </p>
        </footer>
      </div>
    </div>
  );
}
