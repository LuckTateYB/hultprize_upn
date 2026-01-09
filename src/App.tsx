import { useRouter } from './context/useRouter';
import Header from './components/Header';
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';
import Cronograma from './views/Cronograma';
import Impacto from './views/Impacto';
import Contacto from './views/Contactanos';

function App() {
  const { currentRoute } = useRouter();

  const renderView = () => {
    switch (currentRoute) {
      case 'inicio':
        return <Inicio />;
      case 'nosotros':
        return <Nosotros />;
      case 'cronograma':
        return <Cronograma />;
      case 'impacto':
        return <Impacto />;
      case 'contacto':
        return <Contacto />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{renderView()}</main>
    </div>
  );
}

export default App;
