import { heroui } from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|divider).js"
  ],

  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        updown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
      },
      animation: {
        wave: 'wave 12s linear infinite',
        updown: 'updown 2s ease-in-out infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        jost: ['var(--font-jost)'],
      },
      backgroundImage: {
        'home': "url('/assets/back/universe.png')",
        'launchpad': "url('/assets/back/LaunchBack.png')",
        'default': "url('/assets/back/universe.png')",
      },
      fontSize: {
        'fluid': 'clamp(24px, calc(24px + (48 - 24) * ((100vw - 360px) / (1280 - 360))), 48px)',
        'fluid2': 'clamp(32px, calc(32px + (64 - 32) * ((100vw - 360px) / (1280 - 360))), 64px)',

        'fluid3': 'clamp(16px, calc(16px + (24 - 16) * ((100vw - 360px) / (720 - 360))), 24px)',
        'buttonfluid': 'clamp(16px, calc(16px + (20 - 16) * ((100vw - 360px) / (720 - 360))), 20px)',
        'introdescription': 'clamp(16px, calc(16px + (24 - 16) * ((100vw - 360px) / (720 - 360))), 24px)',


        'maintitle': 'clamp(30px, calc(30px + (40 - 30) * ((100vw - 360px) / (1250 - 360))), 40px)',
        'faqtitle': 'clamp(18px, calc(18px + (24 - 18) * ((100vw - 360px) / (967 - 360))), 24px)',
        'faqcontent': 'clamp(14px, calc(14px + (18 - 14) * ((100vw - 360px) / (967 - 360))), 18px)',
        'howwork': 'clamp(16px, calc(16px + (26 - 16) * ((100vw - 360px) / (860 - 360))), 26px)',
        'howworkdescription': 'clamp(14px, calc(14px + (18 - 14) * ((100vw - 360px) / (860 - 360))), 18px)',
      },
      screens: {
        'xs': '480px',
        'sm': '680px',
        'md': '720px',
        'lg': '870px',
        'lg2': '967px',
        'xl': '1280px',
        '2xl': '1250px',
        '3xl': '1415px',
      },
      width: {
        'livecardWidth': 'clamp(350px, calc(350px + (395 - 350) * ((100vw - 360px) / (480 - 360))), 395px)',
        'howworkwidth': 'clamp(150px, calc(150px + (200 - 150) * ((100vw - 360px) / (870 - 360))), 200px)',
        'moonwidth': 'clamp(135px, calc(135px + (346 - 135) * ((100vw - 360px) / (1280 - 360))), 346px)',
      },
      height: {
        'livecardcontent': 'clamp(16px, calc(16px + (20 - 16) * ((100vw - 360px) / (480 - 360))), 20px)',
        'moonheight': 'clamp(135px, calc(135px + (346 - 135) * ((100vw - 360px) / (1280 - 360))), 346px)',

      },
      margin: {
        'mainmargin': 'clamp(120px, calc(120px + (200 - 120) * ((100vw - 360px) / (1250 - 360))), 200px)',
      },
      padding: {

        'moonpadding': 'clamp(35px, calc(35px + (93 - 35) * ((100vw - 360px) / (1280 - 360))), 93px)',
      }
    },
  },
  plugins: [heroui()],
} satisfies Config;
