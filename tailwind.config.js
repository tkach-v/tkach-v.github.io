module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "teal-2": "#76A9AB",
        "dark-blue": "#202A54",
        "teal-7": "#113132",
        "teal-6": "#164143",
        "marine-4": "#226085",
        "pink-bright": "#FA00FF",
        "green-blue-6": "#244E5A",
        "green-blue-3": "#929EA3",
        "green-blue-2": "#93B4BD",
        "green-blue-1": "#B5CFD6",
        "marine-0.5": "#8AC7EC",
        "marine": "#99D6FB",
        "green-blue-0": "#D7EAEF",
        "green-blue-5": "#313C410D",
        "green-blue": "#4F7D8A",
        "coral-32": "#313C4152",
        "coral-9": "#101416",
        "coral-8": "#21282B",
        "coral-6": "#425056",
        "coral-4": "#728187",
        "coral-3": "#929EA3",
        "coral-9.5": "#080A0B",
        "coral": "#F1F4F5",
        "black": "#101416",
        "teal": "#B2E3E5",
        "white": "#FFFFFF",
      },
      backgroundImage: {
        "linear-custom": "linear-gradient(105.03deg, rgba(127, 0, 196, 0.4) -41.07%, rgba(45, 98, 113, 0.4) -38.5%, rgba(0, 175, 255, 0.4) 130.07%)",
        "fancy": "linear-gradient(100.64deg, #8AEBB3 0%, #7FC8F3 35.83%, #E6AAF0 100%), linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
        "linear-fancy": "linear-gradient(100.64deg, #8AEBB3 0%, #7FC8F3 35.83%, #E6AAF0 100%)",
        "radial-border": "radial-gradient(421.88% 421.88% at 50% 50%, #002135 0%, #96D1F6 100%)",
      },
      animation: {
        "gradient": "gradient 8s ease infinite",
      },
      boxShadow: {
        "sky-glow": "0px 0px 2px 0px #96D1F5",
        "inset-1": "inset 0px 0px 8px 0px #F1F4F50F",
        "inset-2": "inset 0px -4px 8px 0px #F1F4F50A",
        "glow-inset": "inset 0px -4px 8px 0px #99D6FB1A, 0px 0px 2px 0px #96D1F5",
        "inset-combo": "inset 0px 0px 8px 0px #F1F4F50F, inset 0px -4px 8px 0px #F1F4F50A",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};