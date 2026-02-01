import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import AddBootstrap from './AddBootstrap';
import { LanguageProvider } from './context/LanguajeContext';
import { CustomHeader } from "./componentes/header";
import NAVARRA from "./componentes/navbar";
import Footer from "./componentes/footer";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <AddBootstrap />
          <CustomHeader />
          <div className="container">
            <NAVARRA />
            <main style={{ minHeight: '60vh' }}>
              {children}
            </main>
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}