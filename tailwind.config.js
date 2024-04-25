/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'texto-primario': '#27424F', // Gris oscuro para el texto principal
        'texto-resaltado': '#2FA3A4', // Verde menta para encabezados y elementos destacados
        'fondo-primario': '#A9ADAE', // Gris claro para el fondo principal
        'fondo-secundario': '#53FFFC', // Azul celeste para elementos discretos
        'detalles': '#20747B', // Verde azulado oscuro para detalles y gráficos
      },
      backgroundImage: {
        'bg-hero': "url('/banner.jpg')", // Cambia 'background.jpg' por el nombre de tu imagen
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
