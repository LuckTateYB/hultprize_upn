import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { Video, Calendar, Clock, User, Link } from 'lucide-react';

interface VirtualEvent {
  id: string;
  title: string;
  time: string;
  link?: string;
}

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  link?: string;
  color: string;
  speakers: string[];
  schedule: { time: string; activity: string }[];
  virtualEvents: VirtualEvent[];
  subEvents?: { id: string; title: string }[];
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    title: 'Lanzamiento + Taller 1',
    date: '24 de Enero, 2026',
    description: 'Innovación social y oportunidades de negocio',
    link: 'https://luma.com/icsgur3w',
    color: '#8a2890',
    speakers: ['Angélica Pérez - Project Manager Inca Valley'],
    schedule: [
      { time: '09:00 - 9:30', activity: 'Registro y bienvenida' },
      { time: '09:35 - 10:00', activity: 'Dinámica: “Aqui estamos"' },
      { time: '10:00 - 11:10', activity: 'Taller "Innovación social y oportunidades de negocio"' },
      { time: '11:10 - 11:30', activity: 'Break' },
      { time: '11:30 - 12:10', activity: 'Bases del lanzamiento Hult Prize' },
      { time: '12:10 - 12:40', activity: 'MatchMaking' },
      { time: '12:45 - 13:00', activity: 'Cierre' },
    ],
    virtualEvents: [
      { id: '1a', title: 'Arquitectura de Procesos: Diseñando la Columna Vertebral de una Startup Social', time: '26-01-2026 11AM', link: '#' },
      { id: '1b', title: 'Agile y Kanban para emprendimientos', time: '26-01-2026 12PM', link: '#' },
      { id: '1c', title: 'Design Thinking & Lean Startup', time: '27-01-2026 4PM', link: '#' },
      { id: '1d', title: 'Impact English I – Problem & Solution', time: '28-01-2026 7PM', link: '#' },
      { id: '1e', title: 'Investigación de Mercados & Benchmarking', time: '29-01-2026 4:30PM', link: '#' },
      { id: '1f', title: 'Equipos de alto rendimiento', time: '29-01-2026 3PM', link: '#' },
      { id: '1g', title: 'Scrum para equipos ágiles', time: '30-01-2026', link: '#' },
      { id: '1h', title: 'TAM, SAM, SOM + Análisis de Mercado', time: '30-01-2026 10AM', link: '#' },
      { id: '1i', title: 'Buyer Persona + CJM', time: '02-02-2026 9AM', link: '#' },
      { id: '1j', title: 'No-Code & IA para MVP (Lovable, V0)', time: '03-02-2026 4PM', link: '#' },
      { id: '1k', title: 'Ventas & Gestión Comercial', time: '04-02-2026', link: '#' },
    ],
  },
  {
    id: '2',
    title: 'Primera Sesión de Talleres Presenciales',
    date: '05 de Febrero, 2026',
    description: 'Marketing, Redes Sociales & Contenidos          ||            Impact English II – Market & Business Model',
    link: 'https://luma.com/sve8cs9n',
    color: '#12b1e7',
    speakers: ['Ing. Roberto Silva', 'Mtra. Patricia López'],
    schedule: [
      { time: '09:00', activity: 'Introducción al liderazgo transformacional' },
      { time: '11:00', activity: 'Dinámicas de grupo' },
      { time: '13:00', activity: 'Almuerzo de networking' },
      { time: '15:00', activity: 'Taller práctico: Gestión de proyectos' },
    ],
    virtualEvents: [
      { id: '2a', title: 'Personal branding en startups', time: '06-02-2026 7PM', link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_MTIwNmM2ZTYtNDlmMy00NDY2LWFiYTYtZjU0MzljOTlkYmRm%40thread.v2/0?context=%7b%22Tid%22%3a%2248ba00e0-002e-4cb0-b501-07385d34ec34%22%2c%22Oid%22%3a%22003e0385-96f0-40d0-bfe4-8e3857d4f2d4%22%7d' },
      { id: '2b', title: 'Finanzas Básicas para Startups', time: '09-02-2026 7:30PM', link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_YTcxMmY2NWUtOWEyZi00MTNkLWE1OTgtOWYzOTdmZmM2OTAz%40thread.v2/0?context=%7b%22Tid%22%3a%2248ba00e0-002e-4cb0-b501-07385d34ec34%22%2c%22Oid%22%3a%22003e0385-96f0-40d0-bfe4-8e3857d4f2d4%22%7d' },
      { id: '2c', title: 'Elevator Pitch', time: '09-02-2026', link: 'https://luma.com/x3e3wihk' },
      { id: '2d', title: 'Go-To-Market & Growth Strategy', time: '10-02-2026 10AM', link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_Nzg3ZGUzYjEtZDg1Mi00MjI3LWFjZWUtMzhjYWJjNTVhMTI2%40thread.v2/0?context=%7b%22Tid%22%3a%2248ba00e0-002e-4cb0-b501-07385d34ec34%22%2c%22Oid%22%3a%22003e0385-96f0-40d0-bfe4-8e3857d4f2d4%22%7d' },
      { id: '2e', title: 'Impact English III – Full Pitch Revision + Q&A', time: '11-02-2026 3PM', link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzJlZjcyNTUtODgyOC00NDBmLTlmYzUtN2ZlMjMzNWUzYmFk%40thread.v2/0?context=%7b%22Tid%22%3a%2248ba00e0-002e-4cb0-b501-07385d34ec34%22%2c%22Oid%22%3a%22003e0385-96f0-40d0-bfe4-8e3857d4f2d4%22%7d' },
    ],
  },
  {
    id: '3',
    title: 'Segunda Sesión de Talleres Presenciales',
    date: '12 de Febrero, 2026',
    description: 'KPIs & Medición de Impacto (2030 mindset)         ||          Proyecciones Financieras & Metas de Ventas',
    link: 'https://luma.com/8l554ua2',
    color: '#ec2088',
    speakers: ['Lic. Fernando Torres', 'Dra. Laura Vega', 'Ing. Miguel Ángel Castro'],
    schedule: [
      { time: '08:00', activity: 'Montaje de stands' },
      { time: '10:00', activity: 'Inauguración oficial' },
      { time: '11:00', activity: 'Pitches de emprendedores' },
      { time: '14:00', activity: 'Rondas de networking' },
      { time: '17:00', activity: 'Premiación y cierre' },
    ],
    virtualEvents: [
      { id: '3a', title: 'Business Model Canvas', time: '13-02-2026', link: 'https://luma.com/1dkvsmsu' },
      { id: '3b', title: 'Sostenibilidad y Economía Circular: Construyendo Modelos Responsables alineados a los ODS', time: '13-02-2026', link: 'https://luma.com/lsuwnops' },
    ],
  },
  {
    id: '4',
    title: 'Semifinal HP UPN',
    date: '18 de Febrero,2026',
    description: 'Jornada intensiva de presentaciones y retroalimentación con jueces expertos para seleccionar a los equipos finalistas.',
    link: 'https://luma.com/rsg1u5by',
    color: '#2e3182',
    speakers: ['Dr. Alejandro Moreno', 'Dra. Sofía Ramírez', 'Enf. Carmen Delgado'],
    schedule: [
      { time: '08:30', activity: 'Café de bienvenida' },
      { time: '09:30', activity: 'Conferencia: Salud preventiva en comunidades' },
      { time: '11:30', activity: 'Casos de estudio' },
      { time: '14:00', activity: 'Mesas de trabajo temáticas' },
      { time: '16:30', activity: 'Conclusiones y compromisos' },
    ],
    virtualEvents: [],
  },
  {
    id: '5',
    title: 'Última Sesión de Talleres Presenciales',
    date: '19 de Febrero,2026',
    description: 'Panel Hult Expert (3 exHult y un moderador)         ||         Oportunidades para Emprendedores',
    link: 'https://luma.com/bc9wwy3x',
    color: '#12b1e7',
    speakers: ['Ing. Pablo Herrera', 'Lic. Mariana Cortés'],
    schedule: [
      { time: '10:00', activity: 'Presentación del reto' },
      { time: '12:00', activity: 'Formación de equipos' },
      { time: '14:00', activity: 'Inicio del hackathon' },
      { time: '16:00', activity: 'Mentorías express' },
      { time: '18:00', activity: 'Presentación de proyectos y premiación' },
    ],
    virtualEvents: [],
  },
  {
    id: '6',
    title: 'Final HP UPN',
    date: '25 de Febrero, 2026',
    description: 'Evento culminante donde los equipos presentan sus proyectos ante un panel de jueces para competir en la competencia regional.',
    link: 'https://luma.com/co8muh79',
    color: '#12b1e7',
    speakers: ['Ing. Pablo Herrera', 'Lic. Mariana Cortés'],
    schedule: [
      { time: '10:00', activity: 'Presentación del reto' },
      { time: '12:00', activity: 'Formación de equipos' },
      { time: '14:00', activity: 'Inicio del hackathon' },
      { time: '16:00', activity: 'Mentorías express' },
      { time: '18:00', activity: 'Presentación de proyectos y premiación' },
    ],
    virtualEvents: [],
  },
];

export default function Cronograma() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [selectedVirtuals, setSelectedVirtuals] = useState<VirtualEvent[] | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-linear-to-br from-[#8a2890] via-[#2E3182] to-[#8a2890] text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-slide-up">
            <span className="text-[#12b1e7]">Cronograma</span> 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in">
            Descubre todos los eventos y actividades que tenemos preparados
          </p>
        </div>
      </section>

      {/* Timeline Section (updated structure) */}
      <section className="py-20 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-[#8a2890] via-[#12b1e7] to-[#ec2088] transform -translate-x-1/2 hidden md:block"></div>

            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              const virtualCount = event.virtualEvents?.length ?? 0;

              return (
                <div key={event.id} className="relative mb-16 md:mb-24">
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 w-full md:w-auto">
                      <div
                        onClick={() => setSelectedEvent(event)}
                        className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border-t-4 group"
                        style={{ borderColor: event.color }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                            style={{ backgroundColor: event.color }}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-[#2e3182] group-hover:text-[#8a2890] transition-colors">
                              {event.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span>{event.date}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4">
                          {event.description}
                        </p>

                        <button
                          className="text-sm font-semibold hover:underline"
                          style={{ color: event.color }}
                        >
                          Ver detalles completos →
                        </button>
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <div
                        className="w-6 h-6 rounded-full border-4 border-white shadow-lg"
                        style={{ backgroundColor: event.color }}
                      ></div>
                    </div>

                    <div className="flex-1 w-full md:w-auto">
                      {virtualCount > 0 && (
                        <div className={`flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                          <div className="relative">
                            <div
                              role="button"
                              onClick={() => setSelectedVirtuals(event.virtualEvents)}
                              className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
                              style={{ backgroundColor: event.color }}
                              title="Ver eventos virtuales"
                            >
                              <Video className="w-6 h-6" />
                            </div>
                            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-xs font-semibold" style={{ color: event.color }}>
                              {virtualCount}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
          {selectedEvent && (
            <>
              <DialogHeader>
                <div className="-mx-6 -mt-6 mb-4 p-6 text-white rounded-t-lg" style={{ backgroundColor: selectedEvent.color }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{selectedEvent.date}</span>
                  </div>
                  <DialogTitle className="text-2xl font-heading font-bold">
                    {selectedEvent.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-base text-muted-foreground">
                  {selectedEvent.description}
                </DialogDescription>
              </DialogHeader>

              {/*Link */}
              {selectedEvent.link && (
                <div className="mt-4">
                  <a
                    href={selectedEvent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#8a2890] text-white rounded-lg hover:bg-[#8a2890]/90 transition-colors duration-300"
                  >
                    <Link className="w-4 h-4" />
                    Registrate al evento presencial
                  </a>
                </div>
              )}

              {/* Schedule */}
              <div className="mt-6">
                <h4 className="font-heading font-semibold text-lg text-gray-800 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#8a2890]" />
                  Agenda del Evento
                </h4>
                <div className="space-y-3">
                  {selectedEvent.schedule.map((item, index) => (
                    <div 
                      key={index}
                      className="flex gap-4 p-3 bg-white rounded-lg border border-gray-200"
                    >
                      <span className="font-mono font-semibold text-[#8a2890] min-w-15">
                        {item.time}
                      </span>
                      <span className="text-gray-800">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speakers */}
              <div className="mt-6">
                <h4 className="font-heading font-semibold text-lg text-gray-800 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#8a2890]" />
                  Ponentes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.speakers.map((speaker) => (
                    <span 
                      key={speaker}
                      className="px-4 py-2 bg-[#8a2890]/10 text-[#8a2890] rounded-full text-sm font-medium"
                    >
                      {speaker}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Virtual Events Modal (opens when clicking a sub-event video icon) */}
      <Dialog open={!!selectedVirtuals} onOpenChange={() => setSelectedVirtuals(null)}>
        <DialogContent className="max-w-xl max-h-[80vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-heading font-bold">Eventos Virtuales</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">Lista de eventos virtuales asociados al evento seleccionado.</DialogDescription>
          </DialogHeader>

          <div className="mt-4 grid gap-3">
            {selectedVirtuals?.map((ve) => (
              <div key={ve.id} className="flex items-center gap-4 p-3 bg-[#f8fafc] rounded-lg border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#12b1e7]/20 flex items-center justify-center">
                  <Video className="w-5 h-5 text-[#12b1e7]" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{ve.title}</p>
                  <p className="text-sm text-gray-600">{ve.time}</p>
                </div>
                <div className="shrink-0">
                  {ve.link ? (
                    <a
                      href={ve.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#12b1e7] text-white rounded-md text-sm hover:opacity-90"
                    >
                      Abrir
                    </a>
                  ) : (
                    <span className="text-sm text-gray-500">Sin enlace</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
