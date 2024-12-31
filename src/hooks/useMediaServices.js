import { useState, useEffect } from 'react';
import { mediaServices as defaultServices } from '../data/mediaServices';

export const useMediaServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load services from localStorage or use defaults
    const loadServices = () => {
      const savedServices = localStorage.getItem('mediaServices');
      if (savedServices) {
        setServices(JSON.parse(savedServices));
      } else {
        setServices(defaultServices);
        localStorage.setItem('mediaServices', JSON.stringify(defaultServices));
      }
      setIsLoading(false);
    };

    loadServices();
  }, []);

  const addService = (newService) => {
    const updatedServices = [...services, newService];
    setServices(updatedServices);
    localStorage.setItem('mediaServices', JSON.stringify(updatedServices));
  };

  const updateService = (index, updatedService) => {
    const updatedServices = [...services];
    updatedServices[index] = updatedService;
    setServices(updatedServices);
    localStorage.setItem('mediaServices', JSON.stringify(updatedServices));
  };

  const deleteService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
    localStorage.setItem('mediaServices', JSON.stringify(updatedServices));
  };

  const resetToDefaults = () => {
    setServices(defaultServices);
    localStorage.setItem('mediaServices', JSON.stringify(defaultServices));
  };

  return {
    services,
    isLoading,
    addService,
    updateService,
    deleteService,
    resetToDefaults
  };
};