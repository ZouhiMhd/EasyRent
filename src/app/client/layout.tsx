import { ReactNode } from 'react';
import { Navbar } from './components/navvbar'
import { Footer } from './components/footer'
// import "./globals.css"
export const metadata = {
   // title = 'Rent a car',
    description:'Rent quickly and easily',
}


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
