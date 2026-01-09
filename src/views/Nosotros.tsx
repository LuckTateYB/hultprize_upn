import { useState, useRef, useEffect } from 'react';
import { Linkedin, Target, Eye, Flag, BookOpen } from 'lucide-react';
import type { Leader } from '../types';
import Yoder from '../assets/Miguel.jpg'
import OscarCastro from '../assets/Oscar Castro.jpeg'
import Gina from "../assets/Gina Janampa - Deputy Campus.jpeg";
import Valery from "../assets/Valery Yataco Solis.jpg";
import Jeniffer from "../assets/Jeniffer Paniora.jpeg";
import Anggela from "../assets/Anggela Huapaya - Head of Experts and Judges Support Team.jpeg";
import Joselin from "../assets/Joselin Brigitte Rodriguez Ruiz.png";
import Fernanda from "../assets/Fernanda.jpg";
import Jorge from "../assets/Jorge.png";


const leaders: Leader[] = [
  {
    id: 1,
    name: 'Yoder Soto',
    role: 'Campus Director',
    career: 'Administración y Negocios Internacionales',
    image: Yoder,
    linkedinUrl: 'https://www.linkedin.com/in/yoder-soto-alvarado/',
  },
  {
    id: 2,
    name: 'Oscar Castro',
    role: 'Deputy Campus Director',
    career: 'Ingeniería de Sistemas',
    image: OscarCastro,
    linkedinUrl: 'https://www.linkedin.com/in/oscar-castros/',
  },
  {
    id: 3,
    name: 'Gina Janampa',
    role: 'Deputy Campus Director',
    career: 'Administración y Negocios Internacionales',
    image: Gina,
    linkedinUrl: 'https://www.linkedin.com/in/gina-janampa/',
  },
  {
    id: 4,
    name: 'Jeniffer Paniora',
    role: 'Coordinator of Marketing and Communications',
    career: 'Administración y Marketing',
    image: Jeniffer,
    linkedinUrl: 'https://www.linkedin.com/in/jenifferpaniora/',
  },
  {
    id: 5,
    name: 'Valery Yataco',
    role: 'Co-coordinator of Marketing and Communications',
    career: 'Administración y Marketing',
    image: Valery,
    linkedinUrl: 'https://www.linkedin.com/in/valery-nicolle-yataco-159287306/',
  },
  {
    id: 6,
    name: 'Jorge Huanaco',
    role: 'Director de Tecnología',
    career: 'Comunicación y Audiovisuales',
    image: Jorge,
    linkedinUrl: 'https://www.linkedin.com/in/jorge-huanaco/',
  },
  {
    id: 7,
    name: 'Anggela Huapaya',
    role: 'Head of Experts and Judges Support Team',
    career: 'Administración',
    image: Anggela,
    linkedinUrl: 'https://www.linkedin.com/in/anggie-hn/',
  },
  {
    id: 8,
    name: 'Joselin Rodriguez',
    role: 'Partnerships and Collaborations',
    career: 'Ingeniería Industrial',
    image: Joselin,
    linkedinUrl: 'https://www.linkedin.com/in/joselin-brigitte-rodriguez-ruiz-07a092265/',
  },
  {
    id: 9,
    name: 'Fernanda Gahona',
    role: 'Head of Startups Community Team',
    career: 'Administración y Marketing',
    image: Fernanda,
    linkedinUrl: 'https://www.linkedin.com/in/maria-fernanda-gahona-delgado-931578366/',
  },
];

export default function Nosotros() {
  const [currentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [cardMinWidth, setCardMinWidth] = useState<string>('calc(33.333% - 1rem)');
  const [scrollStep, setScrollStep] = useState<number>(0);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .filter(Boolean)
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  useEffect(() => {
    const updateSizes = () => {
      const w = window.innerWidth;
      let minW = 'calc(33.333% - 1rem)';
      if (w >= 1024) minW = 'calc(33.333% - 1rem)';
      else if (w >= 768) minW = 'calc(50% - 1rem)';
      else minW = '85%';
      setCardMinWidth(minW);

      // compute scroll step (card width + gap)
      requestAnimationFrame(() => {
        if (!cardRef.current || !trackRef.current) return;
        const cardRect = cardRef.current.getBoundingClientRect();
        const gap = parseFloat(getComputedStyle(trackRef.current).gap || '24');
        setScrollStep(cardRect.width + gap);
      });
    };

    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  // scroll programmatically when currentIndex changes
  useEffect(() => {
    if (!trackRef.current || !scrollStep) return;
    const left = currentIndex * scrollStep;
    trackRef.current.scrollTo({ left, behavior: 'smooth' });
  }, [currentIndex, scrollStep]);

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#2e3182] mb-4">Nuestros Líderes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce al equipo apasionado que está liderando la primera edición de Hult Prize en UPN Lima
          </p>
        </div>

        <div className="relative mb-20">
          <div className="overflow-x-auto" ref={trackRef}>
              <div
                ref={trackRef}
                className="flex gap-6"
              >
                {leaders.map((leader, idx) => (
                  <div
                    key={leader.id}
                    ref={idx === 0 ? cardRef : null}
                    style={{ minWidth: cardMinWidth }}
                    className="cursor-pointer group shrink-0"
                    onClick={() => window.open(leader.linkedinUrl, '_blank')}
                  >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative h-80 overflow-hidden bg-linear-to-br from-[#8a2890] to-[#2e3182]">
                      {leader.image ? (
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-white">
                          <div className="w-28 h-28 rounded-full bg-[#f3f4f6] flex items-center justify-center">
                            <span className="text-2xl font-semibold text-[#2e3182]">{getInitials(leader.name)}</span>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 right-4 bg-[#12b1e7] p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Linkedin className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#2e3182] mb-2">{leader.name}</h3>
                      <p className="text-[#8a2890] font-semibold mb-1">{leader.role}</p>
                      <p className="text-gray-600">{leader.career}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#8a2890]">
            <Target className="w-12 h-12 text-[#8a2890] mb-4" />
            <h3 className="text-2xl font-bold text-[#2e3182] mb-4">Misión</h3>
            <p className="text-gray-700 leading-relaxed">
              Inspirar y empoderar a los estudiantes de UPN Lima para que desarrollen soluciones innovadoras
              a problemáticas sociales mediante el emprendimiento con propósito. Buscamos crear un ecosistema
              donde las ideas se transformen en proyectos de impacto real que beneficien a nuestras comunidades.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#12b1e7]">
            <Eye className="w-12 h-12 text-[#12b1e7] mb-4" />
            <h3 className="text-2xl font-bold text-[#2e3182] mb-4">Visión</h3>
            <p className="text-gray-700 leading-relaxed">
              Ser la comunidad estudiantil de emprendimiento social más influyente y activa de UPN Lima,
              reconocida por formar líderes innovadores capaces de generar cambios significativos y sostenibles
              que trasciendan las fronteras de nuestra universidad.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#ec2088]">
            <Flag className="w-12 h-12 text-[#ec2088] mb-4" />
            <h3 className="text-2xl font-bold text-[#2e3182] mb-4">Objetivo</h3>
            <p className="text-gray-700 leading-relaxed">
              Desarrollar capacidades de liderazgo, innovación y emprendimiento social en estudiantes de UPN Lima,
              proporcionando herramientas, mentorías y espacios de aprendizaje que les permitan competir a nivel
              nacional e internacional en el Hult Prize.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-r from-[#8a2890] via-[#ec2088] to-[#12b1e7] rounded-2xl shadow-xl p-10 mb-16">
          <div className="flex items-start space-x-4">
            <BookOpen className="w-10 h-10 text-white shrink-0 mt-1" />
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Nuestra Historia</h3>
              <p className="text-lg text-white leading-relaxed mb-4">
                En 2025, un grupo de estudiantes de la Universidad Privada del Norte – sede Lima, decidió asumir un reto ambicioso: traer a la universidad el programa de emprendimiento social más grande del mundo, Hult Prize.
                Impulsados por la convicción de que las ideas jóvenes pueden transformar realidades, nació Hult Prize at UPN Lima como una comunidad que conecta a estudiantes de distintas disciplinas con un propósito común: crear soluciones innovadoras con impacto social real.
                Desde entonces, estamos construyendo una plataforma que fomenta el liderazgo, la colaboración y la acción. Un espacio donde las ideas audaces se convierten en proyectos, y los estudiantes descubren su potencial como agentes de cambio capaces de generar impacto local y global.
                Este no es solo un programa. Es un punto de partida para quienes creen que emprender también es transformar el mundo. 🌍🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
