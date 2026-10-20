import { useState, useEffect } from 'react';
import { mediaServices as defaultServices } from '../data/mediaServices';
import { isValidService } from '../lib/safeUrl';

export const useMediaServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load services from localStorage or use defaults
    const loadServices = () => {
      let savedServices = null;
      try {
        savedServices = JSON.parse(localStorage.getItem('mediaServices'));
      // eslint-disable-next-line no-unused-vars
      } catch (e) {
        savedServices = null;
      }
      if (Array.isArray(savedServices)) {
        // Drop any entries with unsafe or malformed URLs
        setServices(savedServices.filter(isValidService));
      } else {
        setServices(defaultServices);
        localStorage.setItem('mediaServices', JSON.stringify(defaultServices));
      }
      setIsLoading(false);
    };

    loadServices();
  }, []);

  const addService = (newService) => {
    if (!isValidService(newService)) return;
    const updatedServices = [...services, newService];
    setServices(updatedServices);
    localStorage.setItem('mediaServices', JSON.stringify(updatedServices));
  };

  const updateService = (index, updatedService) => {
    if (!isValidService(updatedService)) return;
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