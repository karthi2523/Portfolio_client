// layout.js
import './globals.css';
import { DarkModeProvider } from './components/DarkModeContext';

export const metadata = {
  title: 'Deekshithaa K Portfolio',
  description: 'Deekshithaa K Portfolio styled with Funnel Display',
  icons: "/icons8-d-16.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
