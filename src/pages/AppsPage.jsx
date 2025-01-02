import { useState } from 'react';
import { MediaCard } from '../components/MediaCard';
import { ServiceModal } from '../components/ServiceModal';
import { Header } from '../components/Header';
import { useMediaServices } from '../hooks/useMediaServices';
import { modals, loading, company} from '../config/branding';
import Footer from '../components/Footer';

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
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-900 dark:text-gray-100">
        {loading.apps}
      </div>
    );
  }

  return (
    // Outer container with min-height
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Inner container for content that excludes footer */}
      <div className="pb-[footer-height]"> {/* Replace [footer-height] with your footer's actual height */}
        <Header
          isManageMode={isManageMode}
          onManageToggle={() => setIsManageMode(!isManageMode)}
          onReset={handleReset}
          onAdd={handleAdd}
        />
        
        {/* Main Content */}
        <main className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          </div>
        </main>
      </div>

      {/* Footer - absolutely positioned at bottom */}
      <div className='pt-4'>
        <Footer company={company} />
      </div>

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