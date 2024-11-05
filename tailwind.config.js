/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage:{
        'bannerImage': "url('/background.svg')",
        'backgroundImage': "url('/backgroundImage.svg')",
        'bgImage':"url('/image7.svg')",
        'bgImage1':"url('/image8.svg')",
        'bgImage2':"url('/image9.svg')",
        'bgFooter':"url('/image10.svg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
