import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LaunchPage } from './pages/LaunchPage';
import { AppsPage } from './pages/AppsPage';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LaunchPage />} />
        <Route path="/apps" element={<AppsPage />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;