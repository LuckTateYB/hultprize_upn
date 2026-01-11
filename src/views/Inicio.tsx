import { ArrowRight, Globe, Award, Lightbulb, Users } from 'lucide-react';
import Carousel from '../components/Carousel';
import { useRouter } from '../context/useRouter';
import img1 from "../assets/11.webp";
import img2 from "../assets/22.webp";
import img3 from "../assets/33.webp";
import img4 from "../assets/44.webp";

export default function Inicio() {
  const { navigate } = useRouter();

  const hultPrizeFacts = [
    {
      icon: Globe,
      title: "Alcance Global",
      description: "Más de 500,000 estudiantes de 100+ países participan anualmente"
    },
    {
      icon: Award,
      title: "Premio Principal",
      description: "USD $1,000,000 para el equipo ganador de la competencia global"
    },
    {
      icon: Lightbulb,
      title: "Soluciones Reales",
      description: "Enfoque en resolver desafíos sociales urgentes mediante emprendimiento"
    },
    {
      icon: Users,
      title: "Red de Alumni",
      description: "Acceso a una comunidad global de emprendedores y líderes"
    }
  ];

  const carouselImages = [img1, img2, img3, img4];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <div className="relative">
        <Carousel autoPlay interval={10000}>
          {carouselImages.map((img, idx) => (
            <div
              key={idx}
              className="relative min-h-55 md:min-h-90 lg:min-h-130 bg-linear-to-br from-[#8a2890] to-[#2e3182] flex items-center justify-center overflow-hidden"
            >
              <img src={img} alt={`slide-${idx}`} className="w-full h-full object-cover block" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/10" />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2e3182] mb-4">Bienvenidos a Hult Prize UPN Lima</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una comunidad estudiantil pionera en UPN Lima, comprometida con la innovación social
            y el emprendimiento con impacto. Participamos por primera vez en el Hult Prize,
            la competencia global que desafía a estudiantes a resolver los problemas más urgentes del mundo.
          </p>
        </div>

        {/* Datos Interesantes */}
      <section className="bg-linear-to-br from-[#8a2890] to-[#2e3182] py-16 px-8 rounded-2xl mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-white font-bold">
            Datos Interesantes sobre Hult Prize
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {hultPrizeFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 flex gap-6 hover:shadow-2xl transition-all"
                >
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#8a2890] to-[#12b1e7] flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-3 text-[#8a2890]">{fact.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{fact.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

        <div className="text-center">
          <button
            onClick={() => navigate('cronograma')}
            className="group bg-linear-to-r from-[#8a2890] to-[#ec2088] hover:from-[#ec2088] hover:to-[#8a2890] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Conoce el Cronograma</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
