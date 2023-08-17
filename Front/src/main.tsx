import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './MainPage';
import App from './App';
import Profile from './Profile';
import './Main.css';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {NextUIProvider} from "@nextui-org/react";

function AppWrapper() {
  const [theme, setTheme] = useState("dark");

  const handleThemeChange = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  return (
    <main className={`text-foreground bg-background ${theme}`}>
    <BrowserRouter>
    <NextUIProvider>      
        <Routes>
          <Route path='/' element={<MainPage onThemeChange={handleThemeChange} />} />
          <Route path='/app' element={<App />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </NextUIProvider>
    </BrowserRouter>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<AppWrapper />);