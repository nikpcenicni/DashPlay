import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import PropTypes from 'prop-types';

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = ({ className, children, ...props }) => (
    <AlertDialogPrimitive.Portal className={`${className}`} {...props}>
      <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
        {children}
      </div>
    </AlertDialogPrimitive.Portal>
  );
AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName;
AlertDialogPortal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Overlay
      ref={ref}
      className={`${className} fixed inset-0 z-50 bg-black/50 dark:bg-white/20 backdrop-blur-sm transition-opacity animate-in fade-in`}
      {...props}
    />
  ));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
AlertDialogOverlay.propTypes = {
  className: PropTypes.string,
};

const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        ref={ref}
        className={`${className} fixed z-50 grid w-full max-w-lg scale-100 gap-4 bg-white dark:bg-gray-800 p-6 opacity-100 animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full`}
        {...props}
      />
    </AlertDialogPortal>
  ));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
AlertDialogContent.propTypes = {
  className: PropTypes.string,
};

const AlertDialogHeader = ({ className, ...props }) => (
  <div className={`${className} flex flex-col space-y-2 text-center sm:text-left`} {...props} />
);
AlertDialogHeader.displayName = 'AlertDialogHeader';
AlertDialogHeader.propTypes = {
  className: PropTypes.string,
};

const AlertDialogFooter = ({ className, ...props }) => (
  <div className={`${className} flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2`} {...props} />
);
AlertDialogFooter.displayName = 'AlertDialogFooter';
AlertDialogFooter.propTypes = {
  className: PropTypes.string,
};

const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Title
      ref={ref}
      className={`${className} text-lg font-semibold text-gray-900 dark:text-gray-100`}
      {...props}
    />
  ));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
AlertDialogTitle.propTypes = {
  className: PropTypes.string,
};

const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Description
      ref={ref}
      className={`${className} text-sm text-gray-500 dark:text-gray-400`}
      {...props}
    />
  ));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
AlertDialogDescription.propTypes = {
  className: PropTypes.string,
};

const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Action
      ref={ref}
      className={`${className} inline-flex h-10 items-center justify-center rounded-md bg-blue-600 dark:bg-blue-500 py-2 px-4 text-sm font-semibold text-white transition-colors hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:cursor-not-allowed disabled:opacity-50`}
      {...props}
    />
  ));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
AlertDialogAction.propTypes = {
  className: PropTypes.string,
};

const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Cancel
      ref={ref}
      className={`${className} mt-2 inline-flex h-10 items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-gray-700 py-2 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:cursor-not-allowed disabled:opacity-50 sm:mt-0`}
      {...props}
    />
  ));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
AlertDialogCancel.propTypes = {
  className: PropTypes.string,
};

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};