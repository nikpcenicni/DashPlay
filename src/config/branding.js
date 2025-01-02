// src/config/branding.js

export const branding = {
    // Company/App Info
    company: {
      name: 'DashPlay',
      tagline: 'Your Entertainment Gateway',
      copyright: '© 2025 Pcenicni.dev. All rights reserved.',
      supportEmail: 'support@pcenicni.dev',
      website: "https://pcenicni.dev",
      sourceCode: "Github"
    },
  
    // Page Titles
    titles: {
      home: 'DashPlay',
      apps: 'Sources',
      settings: 'Settings'
    },
  
    // Navigation
    nav: {
      back: 'Go back',
      preview: 'Preview Available Apps',
      previewSubtext: 'See supported platforms',
      launch: "https://youtube.com/redirect?q=https://www.dashplay.app/apps"
    },
  
    // Buttons
    buttons: {
      launch: 'Launch',
      manage: {
        enter: 'Manage',
        exit: 'Exit Manage'
      },
      add: 'Add New',
      edit: 'Edit',
      remove: 'Remove',
      save: 'Save',
      cancel: 'Cancel',
      reset: 'Reset to defaults'
    },
  
 // Modals
 modals: {
    service: {
      addTitle: 'Add New Service',
      editTitle: 'Edit Service',
      fields: {
        name: 'Service Name',
        description: 'Description (Optional)',
        logo: 'Logo URL (Optional - will use site favicon if not provided)',
        link: 'Service URL',
        colorTheme: 'Color Theme'
      },
      colors: [
        { bg: 'bg-red-600', text: 'text-red-600', name: 'Red' },
        { bg: 'bg-blue-600', text: 'text-blue-600', name: 'Blue' },
        { bg: 'bg-green-500', text: 'text-green-500', name: 'Green' },
        { bg: 'bg-yellow-500', text: 'text-yellow-500', name: 'Yellow' },
        { bg: 'bg-purple-600', text: 'text-purple-600', name: 'Purple' },
        { bg: 'bg-green-600', text: 'text-green-600', name: 'Dark Green' }
      ],
      buttons: {
        close: 'Close modal',
        cancel: 'Cancel',
        add: 'Add Service',
        save: 'Save Changes'
      }
    },
    confirmDelete: {
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this service?'
    },
    confirmReset: {
      title: 'Confirm Reset',
      message: 'Are you sure you want to reset to default services?'
    }
  },
  
    // Loading States
    loading: {
      apps: 'Loading...',
      services: 'Loading services...'
    },
  
    // Error Messages
    errors: {
      required: 'This field is required',
      invalidUrl: 'Please enter a valid URL',
      loadFailed: 'Failed to load services',
      saveFailed: 'Failed to save changes'
    },
  
    // Success Messages
    success: {
      serviceSaved: 'Service saved successfully',
      serviceDeleted: 'Service deleted successfully',
      settingsUpdated: 'Settings updated successfully'
    }
  };
  
  // Optional: Export specific sections for more granular imports
  export const { company, titles, nav, buttons, modals, loading, footer, errors, success } = branding;