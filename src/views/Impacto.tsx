import { Target, MapPin, Globe, Users, TrendingUp, Award, Heart } from "lucide-react";

export default function Impacto() {
  const nationalPresence = [
    "Universidad del Pacífico - Lima",
    "UCSUR - Lima",
    "UTP - Lima",
    "Universidad de Lima",
    "Universidad Nacional de Ingeniería",
  ];

  const internationalPresence = [
    { country: "Estados Unidos", universities: "150+" },
    { country: "Reino Unido", universities: "45+" },
    { country: "India", universities: "80+" },
    { country: "China", universities: "60+" },
    { country: "Brasil", universities: "35+" },
    { country: "México", universities: "40+" },
    { country: "Colombia", universities: "25+" },
    { country: "Chile", universities: "20+" }
  ];

  const initialMetrics = [
    { icon: Users, value: "100+", label: "Estudiantes interesados" },
    { icon: TrendingUp, value: "10+", label: "Equipos en formación" },
    { icon: Award, value: "20+", label: "Talleres planificados" },
    { icon: Heart, value: "100%", label: "Compromiso e ilusión" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#8a2890] via-[#2E3182] to-[#12B1E7] py-20 px-8 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Nuestro Impacto</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Somos una comunidad nueva con grandes aspiraciones. Conoce nuestra finalidad, 
            alcance y proyección en el mundo del emprendimiento social
          </p>
        </div>
      </section>

      {/* Nuestra Finalidad */}
      <section className="max-w-6xl mx-auto py-16 px-8">
        <div className="flex items-center gap-3 mb-8">
          <Target className="w-12 h-12 text-[#8a2890]" />
          <h2 className="text-4xl text-[#8a2890]">Nuestra Finalidad</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-10 border-l-4 border-[#8a2890]">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Hult Prize UPN Lima nace con el propósito de democratizar el acceso a oportunidades 
            de emprendimiento social de clase mundial. Queremos que cada estudiante de UPN Lima 
            tenga la posibilidad de desarrollar sus ideas, conectarse con mentores globales y 
            competir en el escenario internacional.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-linear-to-br from-[#8a2890] to-[#ec2088] text-white p-6 rounded-xl">
              <h3 className="text-xl mb-3">Innovación</h3>
              <p>Fomentar el pensamiento creativo y soluciones disruptivas</p>
            </div>
            <div className="bg-linear-to-br from-[#12b1e7] to-[#2e3182] text-white p-6 rounded-xl">
              <h3 className="text-xl mb-3">Liderazgo</h3>
              <p>Desarrollar líderes capaces de generar cambio positivo</p>
            </div>
            <div className="bg-linear-to-br from-[#ec2088] to-[#fb0000] text-white p-6 rounded-xl">
              <h3 className="text-xl mb-3">Impacto Social</h3>
              <p>Crear soluciones que transformen vidas realmente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Presencia Nacional */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-12 h-12 text-[#12b1e7]" />
            <h2 className="text-4xl text-[#12b1e7]">Presencia Nacional</h2>
          </div>
          <p className="text-lg text-gray-700 mb-8">
            Hult Prize Perú cuenta con capítulos en las principales universidades del país. 
            Al formar parte de esta red, UPN Lima se conecta con la comunidad de emprendedores 
            sociales más activa del Perú.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {nationalPresence.map((university, index) => (
              <div 
                key={index}
                className="bg-gray-50 border-2 border-[#12b1e7] rounded-xl p-4 text-center hover:bg-[#12b1e7] hover:text-white transition-all cursor-pointer"
              >
                <span>{university}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presencia Internacional */}
      <section className="bg-linear-to-r from-[#2e3182] to-[#8a2890] py-16 px-8 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-12 h-12 text-[#12b1e7]" />
            <h2 className="text-4xl">Presencia Internacional</h2>
          </div>
          <p className="text-lg mb-8 text-white/90">
            Hult Prize es una competencia verdaderamente global. Al participar, formamos parte 
            de un movimiento que abarca todos los continentes y conecta a estudiantes de las 
            mejores universidades del mundo.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {internationalPresence.map((location, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <h3 className="text-xl mb-2 text-[#12b1e7]">{location.country}</h3>
                <p className="text-3xl">{location.universities}</p>
                <p className="text-sm text-white/70 mt-1">universidades</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Métricas Iniciales */}
      <section className="max-w-6xl mx-auto py-16 px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-[#8a2890]">Nuestro Inicio en UPN Lima</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Como comunidad en formación, celebramos cada hito. Estos son nuestros primeros pasos:
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {initialMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-[#8a2890] hover:shadow-2xl transition-all"
              >
                <Icon className="w-16 h-16 mx-auto mb-4 text-[#8a2890]" />
                <h3 className="text-4xl mb-2 text-[#12b1e7]">{metric.value}</h3>
                <p className="text-gray-700">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-linear-to-r from-[#ec2088] to-[#fb0000] py-16 px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl mb-6">El Futuro Comienza Aquí</h2>
          <p className="text-xl mb-4">
            Estamos escribiendo la primera página de una historia que aspira a ser inspiradora. 
            UPN Lima tiene el talento, la pasión y el compromiso para destacar en Hult Prize.
          </p>
          <p className="text-2xl">
            ¿Te unes a nosotros en este viaje?
          </p>
        </div>
      </section>
    </div>
  );
}