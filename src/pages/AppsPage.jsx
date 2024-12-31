import { useState } from 'react';
import { MediaCard } from '../components/MediaCard';
import { ServiceModal } from '../components/ServiceModal';
import { Header } from '../components/Header';
import { useMediaServices } from '../hooks/useMediaServices';
import { modals, loading, company, footer } from '../config/branding';

export const AppsPage = () => {
  const { services, isLoading, addService, updateService, deleteService, resetToDefaults } = useMediaServices();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isManageMode, setIsManageMode] = useState(false);

  const handleAdd = () => {
    setEditingService(null);
    setEditingIndex(null);
    setIsModalOpen(true);
  };

  const handleEdit = (service, index) => {
    setEditingService(service);
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const handleSave = (serviceData) => {
    if (editingIndex !== null) {
      updateService(editingIndex, serviceData);
    } else {
      addService(serviceData);
    }
  };

  const handleDelete = (index) => {
    if (confirm(modals.confirmDelete.message)) {
      deleteService(index);
    }
  };

  const handleReset = () => {
      resetToDefaults();
      setIsManageMode(false);
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center dark:bg-gray-900 dark:text-gray-100">
      {loading.apps}
    </div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header 
        isManageMode={isManageMode}
        onManageToggle={() => setIsManageMode(!isManageMode)}
        onReset={handleReset}
        onAdd={handleAdd}
      />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <MediaCard
              key={index}
              service={service}
              isManageMode={isManageMode}
              onEdit={() => handleEdit(service, index)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
                <a href={company.website} className="hover:text-gray-700 dark:hover:text-gray-300"
                rel="noopener noreferrer">
                    {company.copyright}
                </a>
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                {footer.privacy}
              </a>
              <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                {footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <ServiceModal
          service={editingService}
          onSave={handleSave}
          onClose={() => {
            setIsModalOpen(false);
            setEditingService(null);
            setEditingIndex(null);
          }}
        />
      )}
    </div>
  );
};