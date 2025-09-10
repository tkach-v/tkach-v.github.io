module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'red': '#98033c',
        'teal': '#B2E3E5',
        'teal-2': '#76A9AB',
        'teal-6': '#164143',
        'teal-7': '#113132',
        'dark-blue': '#202A54',

        'marine': '#99D6FB',
        'marine-0.5': '#8AC7EC',
        'marine-4': '#226085',

        'green-blue': '#4F7D8A',
        'green-blue-0': '#D7EAEF',
        'green-blue-1': '#B5CFD6',
        'green-blue-2': '#93B4BD',
        'green-blue-3': '#929EA3',
        'green-blue-5': '#313C410D',
        'green-blue-6': '#244E5A',

        'coral': '#F1F4F5',
        'coral-2': '#B1BABE',
        'coral-3': '#929EA3',
        'coral-4': '#728187',
        'coral-6': '#425056',
        'coral-8': '#21282B',
        'coral-9': '#101416',
        'coral-9.5': '#080A0B',
        'coral-32': '#313C4152',

        'dark':'#020202',
        'gray': '#8E8E93',
        'light-gray': '#9CA3AF',
        'light-green': '#B0FF92',
        'green': '#A6CD6F',
        'neon-green': '#91F800',
        'dark-gray': '#1D1D21',
        'black': '#101416',
        'white': '#FFFFFF',
        'pink-bright': '#FA00FF',
      },
      backgroundImage: {
        'linear-custom': 'linear-gradient(105.03deg, rgba(127, 0, 196, 0.4) -41.07%, rgba(45, 98, 113, 0.4) -38.5%, rgba(0, 175, 255, 0.4) 130.07%)',
        'fancy': 'linear-gradient(100.64deg, #8AEBB3 0%, #7FC8F3 35.83%, #E6AAF0 100%), linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4))',
        'linear-fancy': 'linear-gradient(100.64deg, #8AEBB3 0%, #7FC8F3 35.83%, #E6AAF0 100%)',
        'radial-border': 'radial-gradient(421.88% 421.88% at 50% 50%, #002135 0%, #96D1F6 100%)',
        'radial-fancy': 'radial-gradient(421.88% 421.88% at 50% 50%, #002135 0%, #96D1F6 100%),linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1))',

        'black_gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 41.36%, #0D0C0F 96.96%)',
        'pink-purple-gradient': 'linear-gradient(95.1deg, #BE8AFF -0.55%, #FA00FF 106.01%)',
        'purple-light-gradient': 'linear-gradient(94.59deg, #AD52F9 0%, #CD8CFF 100%)',
        'linear-dark': 'linear-gradient(180deg, #565460 0%, #353644 100%)',
        'linear-dark-overlay': 'linear-gradient(317.83deg, rgba(53, 54, 68, 0.66) -7.3%, rgba(20, 19, 24, 0.66) 107.21%)',
        'radial-green': 'radial-gradient(421.88% 421.88% at 50% 50%, #002135 0%, #91F800 100%)',
        'radial-gradient': 'radial-gradient(174.07% 174.07% at 50% 50%, #002135 0%, #FA00FF 100%)',
        'purple-gradient': 'linear-gradient(94.59deg, #AD52F9 0%, #CD8CFF 100%)',
        'purple-strong': 'linear-gradient(94.59deg, #6615AA 0%, #BF7BF3 100%)',
        'purple-overlay': 'linear-gradient(94.59deg, #6615AA 0%, #BF7BF3 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',
        'green-gradient': 'linear-gradient(94.59deg, #A6CD6F 0%, #95FF00 100%)',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
      },
      boxShadow: {
        'sky-glow': '0px 0px 2px 0px #96D1F5',
        'inset-2': 'inset 0px -4px 8px 0px #F1F4F50A',
        'inset-combo': 'inset 0px 0px 8px 0px #F1F4F50F, inset 0px -4px 8px 0px #F1F4F50A',

        'inset-top': '0px -4px 8px 0px #99FBA01A inset',
        'glow-small': '0px 0px 2px 0px #96F5A4',
        'inset-1': '0px -4px 8px 0px #99FBA01A inset',
        'glow-1': '0px 0px 2px 0px #96F5A4',
        'glow-inset': 'inset 0px -4px 8px 0px #99D6FB1A, 0px 0px 2px 0px #96D1F5',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};