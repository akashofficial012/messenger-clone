import React from 'react'
import clsx from 'clsx'
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputFormProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldError;
  required?: boolean;
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
}

export default function InputForm({
  register,
  errors,
  required,
  id,
  label,
  type = 'text',
  disabled = false,
}: InputFormProps) {
  return (
    <div>
      <label className='block text-sm font-medium leading-6 text-gray-900' htmlFor={id}>{label}</label>
      <div className='mt-2'>
        <input 
          className={clsx(
            'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-0 sm:text-sm',
            errors && 'ring-red-500',
            disabled && 'opacity-50 cursor-default'
          )}
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
        />

      </div>
    </div>
  )
}