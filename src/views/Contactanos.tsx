import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, HandHeart, Users, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import imgParticipar from '../assets/participar.png';



export default function Contactanos() {


  const contactReasons = [
  {
    icon: <Users size={24} />,
    title: "Participar",
    description: "Únete a la competencia y presenta tu idea de emprendimiento social.",
    image: imgParticipar,
  },
  {
    icon: <HandHeart size={24} />,
    title: "Voluntariado",
    description: "Sé parte del equipo organizador y apoya en la realización de eventos.",
    image: imgParticipar,
  },
  {
    icon: <HelpCircle size={24} />,
    title: "Consultas",
    description: "Resuelve cualquier duda sobre Hult Prize o nuestra comunidad.",
    image: imgParticipar,
  },
];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hultprize@upn.edu.pe",
      link: "mailto:hultprize@upn.edu.pe"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+51 999 999 999",
      link: "tel:+51999999999"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Universidad Privada del Norte, Lima",
      link: "#"
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@hultprizeupnlima",
      link: "#",
      color: "#ec2088"
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "Hult Prize UPN Lima",
      link: "#",
      color: "#12b1e7"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "Hult Prize UPN Lima",
      link: "#",
      color: "#2e3182"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#8a2890] to-[#2e3182] py-20 px-8 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Únete al Movimiento</h2>
          <p className="text-xl text-[#12b1e7] max-w-3xl mx-auto">
            Estamos construyendo algo único en UPN Lima. Si tienes pasión por el emprendimiento social,
            quieres desarrollar tus habilidades de liderazgo y deseas ser parte de un movimiento global
            que busca cambiar el mundo, este es tu lugar.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-16 px-8">
        <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Reasons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 gap-6 max-w-3xl mx-auto mb-16"
          >
            {contactReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.08 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8a2890] to-[#ec2088] flex items-center justify-center text-white flex-shrink-0">
                  {reason.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-[#2e3182] mb-1">{reason.title}</h3>
                  <p className="text-sm text-gray-600">{reason.description}</p>
                  <img src={reason.image} alt={reason.title} className="mt-4 rounded-lg shadow-sm" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Información de Contacto y Redes Sociales */}
          <div>
            <h2 className="text-3xl mb-6 text-[#8a2890]">Información de Contacto</h2>
            <div className="space-y-4 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#8a2890] to-[#12b1e7] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-600 text-sm mb-1">{info.label}</h3>
                      <p className="text-gray-800">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <h2 className="text-3xl mb-6 text-[#8a2890]">Síguenos en Redes Sociales</h2>
            <div className="space-y-4 mb-12">
              {socialMedia.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group"
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: social.color }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-800">{social.name}</h3>
                      <p className="text-gray-600 text-sm">{social.handle}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Mensaje de Orientación */}
            <div className="bg-linear-to-br from-[#8a2890] to-[#2e3182] text-white p-8 rounded-2xl">
              <h3 className="text-2xl mb-4">¿Cómo Puedes Participar?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#12b1e7] mt-2"></div>
                  <span><strong>Estudiantes:</strong> Únete a la competencia y forma tu equipo</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ec2088] mt-2"></div>
                  <span><strong>Voluntarios:</strong> Ayúdanos a organizar eventos y talleres</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#12b1e7] mt-2"></div>
                  <span><strong>Patrocinadores:</strong> Apoya el talento estudiantil de UPN</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ec2088] mt-2"></div>
                  <span><strong>Mentores:</strong> Comparte tu experiencia con nuevos emprendedores</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <section className="bg-[#12b1e7] py-12 px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl mb-4">Estamos Listos para Escucharte</h2>
          <p className="text-lg">
            Cada mensaje, cada consulta y cada idea es importante para nosotros. 
            ¡No dudes en contactarnos!
          </p>
        </div>
      </section>
    </div>
  );
}
