/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'primary-50': '#F9FAFB',
        'primary-100': '#F3F4F6',
        'primary-200': '#E5E7EB',
        'primary-300': '#D1D5DB',
        'primary-400': '#9CA3AF',
        'primary-500': '#6B7280',
        'primary-600': '#4B5563',
        'primary-700': '#374151',
        'primary-800': '#1F2937',
        'primary-900': '#111827',

        // Accent colors
        'accent-50': '#F9FAFB',
        'accent-100': '#F3F4F6',
        'accent-200': '#E5E7EB',
        'accent-300': '#D1D5DB',
        'accent-400': '#9CA3AF',
        'accent-500': '#6B7280',
        'accent-600': '#4B5563',
        'accent-700': '#374151',
        'accent-800': '#1F2937',
        'accent-900': '#111827',

        // Success colors
        'success-50': '#F0FFF4',
        'success-100': '#C6F6D5',
        'success-200': '#9AE6B4',
        'success-300': '#68D391',
        'success-400': '#48BB78',
        'success-500': '#38A169',
        'success-600': '#2F855A',
        'success-700': '#276749',
        'success-800': '#22543D',
        'success-900': '#1C4532',

        // Warning colors
        'warning-50': '#FFFBEB',
        'warning-100': '#FEF3C7',
        'warning-200': '#FDE68A',
        'warning-300': '#FCD34D',
        'warning-400': '#FBBF24',
        'warning-500': '#F59E0B',
        'warning-600': '#D97706',
        'warning-700': '#B45309',
        'warning-800': '#92400E',
        'warning-900': '#78350F',

        // Danger colors
        'danger-50': '#FFF5F5',
        'danger-100': '#FED7D7',
        'danger-200': '#FEB2B2',
        'danger-300': '#FC8181',
        'danger-400': '#F56565',
        'danger-500': '#E53E3E',
        'danger-600': '#C53030',
        'danger-700': '#9B2C2C',
        'danger-800': '#822727',
        'danger-900': '#63171B',

        // Gray colors
        'gray-50': '#F9FAFB',
        'gray-100': '#F3F4F6',
        'gray-200': '#E5E7EB',
        'gray-300': '#D1D5DB',
        'gray-400': '#9CA3AF',
        'gray-500': '#6B7280',
        'gray-600': '#4B5563',
        'gray-700': '#374151',
        'gray-800': '#1F2937',
        'gray-900': '#111827',

        // Cool gray colors
        'cool-gray-50': '#F9FAFB',
        'cool-gray-100': '#F3F4F6',
        'cool-gray-200': '#E5E7EB',
        'cool-gray-300': '#D1D5DB',
        'cool-gray-400': '#9CA3AF',
        'cool-gray-500': '#6B7280',
        'cool-gray-600': '#4B5563',
        'cool-gray-700': '#374151',
        'cool-gray-800': '#1F2937',
        'cool-gray-900': '#111827',

        // Blue gray colors
        'blue-gray-50': '#F8FAFC',
        'blue-gray-100': '#F1F5F9',
        'blue-gray-200': '#E2E8F0',
        'blue-gray-300': '#CBD5E1',
        'blue-gray-400': '#94A3B8',
        'blue-gray-500': '#64748B',
        'blue-gray-600': '#475569',
        'blue-gray-700': '#334155',
        'blue-gray-800': '#1E293B',
        'blue-gray-900': '#0F172A',


        // Neutral colors
        'neutral-50': '#F9FAFB',
        'neutral-100': '#F3F4F6',
        'neutral-200': '#E5E7EB',
        'neutral-300': '#D1D5DB',
        'neutral-400': '#9CA3AF',
        'neutral-500': '#6B7280',
        'neutral-600': '#4B5563',
        'neutral-700': '#374151',
        'neutral-800': '#1F2937',
        'neutral-900': '#111827',
      },
    },
  },
  plugins: [],
};

module.exports = config;
