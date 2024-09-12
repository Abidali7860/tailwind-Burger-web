/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
   sm:'480px',
   md:'750px',
   lg:'1024px'
    },
    extend: {
      keyframes:{
        move:{
          '50%':{transform:'translateY(1rem)'}
        }
      },
      animation:{
        'movingY': 'move 2s linear infinite'
      }
    },
    container:{
      center: true,
      padding:{
        DEFAULT:'1rem',
        sm:'1.5rem'
      }
    }
  },
  plugins: [],
}

