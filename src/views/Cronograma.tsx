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
    date: '15 de Marzo, 2025',
    description: 'Innovación social y oportunidades de negocio',
    link: 'https://luma.com/icsgur3w',
    color: '#8a2890',
    speakers: ['Dra. María González', 'Prof. Carlos Mendoza', 'Lic. Ana Ruiz'],
    schedule: [
      { time: '09:00', activity: 'Registro y bienvenida' },
      { time: '10:00', activity: 'Conferencia magistral: El futuro de la educación' },
      { time: '12:00', activity: 'Panel de expertos' },
      { time: '14:00', activity: 'Talleres paralelos' },
      { time: '16:00', activity: 'Networking y cierre' },
    ],
    virtualEvents: [
      { id: '1a', title: 'Taller 2', time: '18:00', link: 'https://luma.com/5dvfqvlh' },
      { id: '1b', title: 'Taller 3', time: '18:00', link: 'https://luma.com/u5bpgsyx' },
      { id: '1c', title: 'Taller 4', time: '18:00', link: 'https://luma.com/nvc32j2a' },
      { id: '1d', title: 'Taller 5', time: '18:00', link: 'https://luma.com/qcvhx50b' },
      { id: '1e', title: 'Taller 6', time: '18:00', link: 'https://luma.com/xxao8fwd' },
      { id: '1f', title: 'Taller 7', time: '18:00', link: 'https://luma.com/y7qizvdl' },
      { id: '1g', title: 'Taller 8', time: '18:00', link: 'https://luma.com/67qqa051' },
      { id: '1h', title: 'Taller 9', time: '18:00', link: 'https://luma.com/p3tje2x4' },
      { id: '1i', title: 'Taller 10', time: '18:00', link: 'https://luma.com/3r6dqk3e' },
      { id: '1j', title: 'Taller 11', time: '18:00', link: 'https://luma.com/5mf2hz0c' },
      { id: '1k', title: 'Taller 12', time: '18:00', link: 'https://luma.com/nj2fl35g' },
      { id: '1l', title: 'Taller 13', time: '18:00', link: 'https://luma.com/674gdc25' },

    ],
  },
  {
    id: '2',
    title: 'Taller 14 y 15',
    date: '22 de Abril, 2025',
    description: 'Marketing, Redes Sociales & Contenidos | Impact English II – Market & Business Model',
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
      { id: '2a', title: 'Taller 16', time: '17:00', link: 'https://luma.com/6ccg1iem' },
      { id: '2a', title: 'Taller 17', time: '17:00', link: 'https://luma.com/jyx1kp1z' },
      { id: '2a', title: 'Taller 18', time: '17:00', link: 'https://luma.com/x3e3wihk' },
      { id: '2a', title: 'Taller 19', time: '17:00', link: 'https://luma.com/so5vm785' },
      { id: '2a', title: 'Taller 20', time: '17:00', link: 'https://luma.com/myqzy07e' },
      { id: '2a', title: 'Taller 21', time: '17:00', link: 'https://luma.com/9rpklsmo' },
      { id: '2a', title: 'Taller 22', time: '17:00', link: 'https://luma.com/t5szf5mh' },
    ],
  },
  {
    id: '3',
    title: 'Taller 23 y 24',
    date: '10 de Mayo, 2025',
    description: 'Exposición de proyectos de emprendimiento social con oportunidades de financiamiento y mentoría para iniciativas innovadoras.',
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
      { id: '3a', title: 'Taller 25', time: '15:00', link: 'https://luma.com/1dkvsmsu' },
      { id: '3a', title: 'Taller 26', time: '15:00', link: 'https://luma.com/lsuwnops' },
    ],
  },
  {
    id: '4',
    title: 'Semifinal HP UPN',
    date: '8 de Junio, 2025',
    description: 'Encuentro de profesionales de salud y líderes comunitarios para abordar los desafíos de salud pública en poblaciones vulnerables.',
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
    title: 'Taller 27 y 28',
    date: '20 de Julio, 2025',
    description: 'Maratón de innovación de 48 horas donde equipos desarrollan soluciones tecnológicas para desafíos educativos reales.',
    link: 'https://luma.com/bc9wwy3x',
    color: '#12b1e7',
    speakers: ['Ing. Pablo Herrera', 'Lic. Mariana Cortés'],
    schedule: [
      { time: '18:00', activity: 'Presentación del reto' },
      { time: '19:00', activity: 'Formación de equipos' },
      { time: '20:00', activity: 'Inicio del hackathon' },
      { time: '08:00 (Día 2)', activity: 'Mentorías express' },
      { time: '18:00 (Día 2)', activity: 'Presentación de proyectos y premiación' },
    ],
    virtualEvents: [],
  },
  {
    id: '6',
    title: 'Final HP UPN',
    date: '25-02-2026',
    description: 'Evento culminante donde los equipos presentan sus proyectos ante un panel de jueces para competir por avanzar a la competencia regional.',
    link: 'https://luma.com/co8muh79',
    color: '#12b1e7',
    speakers: ['Ing. Pablo Herrera', 'Lic. Mariana Cortés'],
    schedule: [
      { time: '18:00', activity: 'Presentación del reto' },
      { time: '19:00', activity: 'Formación de equipos' },
      { time: '20:00', activity: 'Inicio del hackathon' },
      { time: '08:00 (Día 2)', activity: 'Mentorías express' },
      { time: '18:00 (Día 2)', activity: 'Presentación de proyectos y premiación' },
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
      <section className="py-20 bg-gradient-to-b from-[#2e3182] via-[#8a2890] to-[#12b1e7] text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-slide-up">
            <span className="text-[#12b1e7]">Cronograma</span> 2025
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in">
            Descubre todos los eventos y actividades que tenemos preparados
          </p>
        </div>
      </section>

      {/* Timeline Section (updated structure) */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8a2890] via-[#12b1e7] to-[#ec2088] transform -translate-x-1/2 hidden md:block"></div>

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
                    Acceder al evento virtual
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
                <div className="flex-shrink-0">
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
