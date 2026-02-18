import { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  children: ReactNode;
  required?: boolean;
}

export const FormField = ({ label, children, required }: FormFieldProps) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-black/80 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  );
};
