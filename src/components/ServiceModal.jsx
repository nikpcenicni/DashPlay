import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { X } from 'lucide-react';
import { modals } from '../config/branding';

const { service: modalConfig } = modals;

const getFaviconUrl = (url) => {
  try {
    const urlObj = new URL(url);
    return `${urlObj.protocol}//${urlObj.hostname}/favicon.ico`;
  // eslint-disable-next-line no-unused-vars
  } catch (e) {
    return '';
  }
};

export const ServiceModal = ({ service, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    logo: '',
    link: '',
    color: 'bg-blue-500',
    textColor: 'text-blue-500',
    description: ''
  });

  useEffect(() => {
    if (service) {
      setFormData(service);
    }
  }, [service]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      logo: formData.logo || getFaviconUrl(formData.link)
    };
    onSave(submitData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {service ? modalConfig.editTitle : modalConfig.addTitle}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-500 dark:text-gray-400"
            aria-label={modalConfig.buttons.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {modalConfig.fields.name}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {modalConfig.fields.logo}
            </label>
            <input
              type="url"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {modalConfig.fields.link}
            </label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {modalConfig.fields.description}
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {modalConfig.fields.colorTheme}
            </label>
            <div className="flex gap-2 flex-wrap">
              {modalConfig.colors.map(({ bg, text, name }) => (
                <button
                  key={bg}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, color: bg, textColor: text }))}
                  className={`w-8 h-8 rounded-full ${bg} ${
                    formData.color === bg ? 'ring-2 ring-offset-2 ring-gray-500 dark:ring-gray-400 dark:ring-offset-gray-800' : ''
                  }`}
                  aria-label={`Select ${name} color theme`}
                  title={`Select ${name} color theme`}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              {modalConfig.buttons.cancel}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600"
            >
              {service ? modalConfig.buttons.save : modalConfig.buttons.add}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ServiceModal.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string,  // Made optional
    link: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }),
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};