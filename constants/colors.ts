//
// Color palette
//

export default {
  // Primary: A vibrant, inviting orange (Reverted to the previous orange scale)
  primary: {
    DEFAULT: '#F76B1C', // A vibrant, inviting orange (e.g., tangerine, pumpkin)
    50: '#FFF0E5',
    100: '#FED8CC',
    200: '#FFC299',
    300: '#FFA366',
    400: '#F8A17E',
    500: '#F76B1C', // DEFAULT
    600: '#FE4700',
    700: '#DD5D15',
    800: '#C34F0E',
    900: '#8F3300',
  },

  // Secondary: A natural, refreshing green (from previous "Calm & Professional")
  secondary: {
    DEFAULT: '#10B981', // Tailwind's default emerald-500
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981', // DEFAULT
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',
  },

  // Accent: A confident, deep blue for contrast (from previous "Calm & Professional" primary)
  accent: {
    DEFAULT: '#3B82F6', // Tailwind's default blue-500, now as accent
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6', // DEFAULT
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
  },

  // Text Colors (unchanged)
  text: {
    DEFAULT: '#374151', // A dark gray for primary text (gray-700)
    light: '#6B7280', // A medium gray for secondary text (gray-500)
    dark: '#1F2937', // A very dark gray for headings (gray-800)
  },

  // Background Colors (unchanged)
  background: {
    DEFAULT: '#F9FAFB', // Very light off-white (gray-50) for main backgrounds
    dark: '#F3F4F6', // Slightly darker for subtle sectioning (gray-100)
  },

  // Border Colors (unchanged)
  border: {
    DEFAULT: '#D1D5DB', // A light gray for borders (gray-300)
  },

  // Direct Semantic Colors (Feedback - unchanged)
  success: '#22C55E', // Green for success (Tailwind's green-500)
  warning: '#FBBF24', // Yellow/Amber for warning (Tailwind's yellow-400 or amber-400)
  error: '#EF4444', // Red for errors (Tailwind's red-500)
  info: '#0EA5E9', // Light blue for informational messages (Tailwind's sky-500)

  // Grayscale Palette (Extensive for flexibility - unchanged)
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280', // Default medium gray
    600: '#4B5563',
    700: '#374151', // Dark gray (used for text.DEFAULT)
    800: '#1F2937', // Very dark gray (used for text.dark)
    900: '#111827', // Almost black
  },

  // Base Colors (unchanged)
  white: '#FFFFFF',
  black: '#000000',
};
