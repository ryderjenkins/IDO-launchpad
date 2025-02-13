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
      fontWeight: {
        100: '100',
        150: '150',
        300: '300',
        350: '350',
        200: '200',
        400: '400',
        500: '500',
        550: '550',
      },
      letterSpacing: {
        1: '0.6px',
        2: '0.2px',
        3: '0.7px',
        4: '0.5px',
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
      backgroundPosition: {
        'docview': 'center -120px',
        'centertop': 'center top',
      },
      backgroundImage: {
        'home': "url('/assets/back/main.gif')",
        'launchpad': "url('/assets/back/LaunchBack.png')",
        'default': "url('/assets/back/main.gif')",
      },
      fontSize: {
        'fluid': 'clamp(24px, calc(24px + (48 - 24) * ((100vw - 360px) / (1280 - 360))), 48px)',
        'fluid2': 'clamp(32px, calc(32px + (64 - 32) * ((100vw - 360px) / (1280 - 360))), 64px)',

        'fluid3': 'clamp(16px, calc(16px + (24 - 16) * ((100vw - 360px) / (720 - 360))), 24px)',
        'buttonfluid': 'clamp(16px, calc(16px + (20 - 16) * ((100vw - 360px) / (720 - 360))), 20px)',
        'introdescription': 'clamp(16px, calc(16px + (24 - 16) * ((100vw - 360px) / (720 - 360))), 24px)',


        'maintitle': 'clamp(20px, calc(20px + (40 - 20) * ((100vw - 360px) / (1250 - 360))), 40px)',
        'faqtitle': 'clamp(18px, calc(18px + (24 - 18) * ((100vw - 360px) / (967 - 360))), 24px)',
        'faqcontent': 'clamp(14px, calc(14px + (18 - 14) * ((100vw - 360px) / (967 - 360))), 18px)',
        'howwork': 'clamp(12px, calc(12px + (26 - 12) * ((100vw - 360px) / (860 - 360))), 26px)',
        'howworkdescription': 'clamp(8px, calc(8px + (18 - 8) * ((100vw - 360px) / (860 - 360))), 18px)',

        // launchpad font
        'launchpadfluid': 'clamp(18px, calc(18px + (32 - 18) * ((100vw - 360px) / (870 - 360))), 32px)',
        'launchpadfluid2': 'clamp(26px, calc(26px + (48 - 26) * ((100vw - 360px) / (870 - 360))), 48px)',
        'launchpadfluid3': 'clamp(14px, calc(14px + (16 - 14) * ((100vw - 360px) / (870 - 360))), 16px)',
        'launchpadbutton': 'clamp(14px, calc(14px + (24 - 14) * ((100vw - 360px) / (870 - 360))), 24px)',
        'launchpadbtntext': 'clamp(14px, calc(14px + (16 - 14) * ((100vw - 360px) / (870 - 360))), 16px)',
        'launchpadsearch': 'clamp(16px, calc(16px + (24 - 16) * ((100vw - 360px) / (680 - 360))), 24px)',
        'launchpadtablehead': 'clamp(16px, calc(16px + (20 - 16) * ((100vw - 360px) / (680 - 360))), 20px)',
        'claimcardfluid': 'clamp(16px, calc(16px + (24 - 16) * ((100vw - 360px) / (870 - 360))), 24px)',
        'claimcardfluid2': 'clamp(14px, calc(14px + (18 - 14) * ((100vw - 360px) / (870 - 360))), 18px)',
        'claimcardfluid3': 'clamp(12px, calc(12px + (24 - 12) * ((100vw - 360px) / (870 - 360))), 24px)',
        'claimsearchfluid': 'clamp(16px, calc(16px + (24 - 16) * ((100vw - 360px) / (480 - 360))), 24px)',
        'claimtitle': 'clamp(16px, calc(16px + (20 - 16) * ((100vw - 360px) / (480 - 360))), 20px)',
        'headerwallet': 'clamp(10px, calc(10px + (20 - 10) * ((100vw - 360px) / (520 - 360))), 20px)',
      },

      screens: {
        'xs': '480px',
        'xs2': '520px',
        'sm': '680px',
        'md': '720px',
        'lg': '870px',
        'lg2': '967px',
        'xl': '1280px',
        '2xl': '1250px',
        '3xl': '1415px',
        '3xl2': '1440px',
        '4xl': '1300px',
      },
      width: {
        'livecardWidth': 'clamp(350px, calc(350px + (395 - 350) * ((100vw - 360px) / (480 - 360))), 395px)',
        'howworkwidth': 'clamp(80px, calc(80px + (178 - 80) * ((100vw - 360px) / (870 - 360))), 178px)',
        'moonwidth': 'clamp(204px, calc(204px + (532 - 204) * ((100vw - 390px) / (1280 - 390))), 532px)',
        'launchpadbuttonwidth': 'clamp(144px, calc(144px + (300 - 144) * ((100vw - 360px) / (870 - 360))), 300px)',
        'launchpadintrolwidth': 'clamp(350px, calc(350px + (622 - 350) * ((100vw - 360px) / (680 - 360))), 622px)',
        'launchpadviewbutton': 'clamp(120px, calc(120px + (160 - 120) * ((100vw - 360px) / (680- 360))), 160px)',
        'launchpadlivecardview': 'calc(100vw - 30px)',
        'claimcardwidth': 'clamp(80px, calc(80px + (160 - 80) * ((100vw - 360px) / (870 - 360))), 160px)',
        'logowidth': 'clamp(100px, calc(100px + (180 - 100) * ((100vw - 360px) / (520 - 360))), 180px)',
        'walletbuttonwidth': 'clamp(120px, calc(120px + (230 - 120) * ((100vw - 360px) / (520 - 360))), 230px)',
        'footerlogo': 'clamp(200px, calc(200px + (260 - 200) * ((100vw - 360px) / (680 - 360))), 260px)',
        'docsocialbuttonwidth': 'clamp(333px, calc(333px + (400 - 333) * ((100vw - 390px) / (520 - 390))), 400px)',

      },
      height: {
        'livecardcontent': 'clamp(16px, calc(16px + (20 - 16) * ((100vw - 360px) / (480 - 360))), 20px)',
        'moonheight': 'clamp(204px, calc(204px + (532 - 204) * ((100vw - 390px) / (1280 - 390))), 532px)',
        'launchpadbuttonheight': 'clamp(25px, calc(25px + (50 - 25) * ((100vw - 360px) / (870 - 360))), 50px)',
        'launchpadtable': 'clamp(30px, calc(30px + (50 - 30) * ((100vw - 360px) / (680 - 360))), 50px)',
        'claimcardheight': 'clamp(30px, calc(30px + (50 - 30) * ((100vw - 360px) / (870 - 360))), 50px)',
        'walletbuttonheight': 'clamp(25px, calc(25px + (40 - 25) * ((100vw - 360px) / (520 - 360))), 40px)',
        'sidebariconheight': 'clamp(20px, calc(20px + (35 - 20) * ((100vw - 360px) / (520 - 360))), 35px)',
        'docsocialbuttonheight': 'clamp(100px, calc(100px + (120 - 100) * ((100vw - 390px) / (520 - 390))), 120px)',
        'doccardheight': 'clamp(187px, calc(187px + (702 - 187) * ((100vw - 390px) / (1280 - 390))), 702px)',
        'doccardiconheight': 'clamp(18px, calc(18px + (70 - 18) * ((100vw - 390px) / (1280 - 390))), 70px)',

      },
      margin: {
        'mainmargin': 'clamp(120px, calc(120px + (200 - 120) * ((100vw - 360px) / (1250 - 360))), 200px)',
        'launchpadmain': 'clamp(32px, calc(32px + (100 - 32) * ((100vw - 360px) / (480 - 360))), 100px)',
        'launchpadmain2': 'clamp(32px, calc(32px + (140 - 32) * ((100vw - 360px) / (480 - 360))), 140px)',
        'claimcardtablemargin': 'clamp(16px, calc(16px + (45 - 16) * ((100vw - 360px) / (870 - 360))), 45px)',
        'claimheadermargin': 'clamp(25px, calc(25px + (70 - 25) * ((100vw - 360px) / (480 - 360))), 70px)',
        'doc': 'clamp(25px, calc(25px + (70 - 25) * ((100vw - 360px) / (480 - 360))), 70px)',
      },
      padding: {
        'moonpadding': 'clamp(35px, calc(35px + (93 - 35) * ((100vw - 360px) / (1280 - 360))), 93px)',
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
