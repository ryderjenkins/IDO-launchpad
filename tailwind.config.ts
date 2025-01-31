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
        '4xl': '1300px',
      },
      width: {
        'livecardWidth': 'clamp(350px, calc(350px + (395 - 350) * ((100vw - 360px) / (480 - 360))), 395px)',
        'howworkwidth': 'clamp(150px, calc(150px + (200 - 150) * ((100vw - 360px) / (870 - 360))), 200px)',
        'moonwidth': 'clamp(135px, calc(135px + (346 - 135) * ((100vw - 360px) / (1280 - 360))), 346px)',
        'launchpadbuttonwidth': 'clamp(144px, calc(144px + (300 - 144) * ((100vw - 360px) / (870 - 360))), 300px)',
        'launchpadintrolwidth': 'clamp(350px, calc(350px + (622 - 350) * ((100vw - 360px) / (680 - 360))), 622px)',
        'launchpadviewbutton': 'clamp(120px, calc(120px + (160 - 120) * ((100vw - 360px) / (680- 360))), 160px)',
        'launchpadlivecardview': 'calc(100vw - 30px)',
        'claimcardwidth': 'clamp(80px, calc(80px + (160 - 80) * ((100vw - 360px) / (870 - 360))), 160px)',
        'logowidth': 'clamp(100px, calc(100px + (180 - 100) * ((100vw - 360px) / (520 - 360))), 180px)',
        'walletbuttonwidth': 'clamp(120px, calc(120px + (230 - 120) * ((100vw - 360px) / (520 - 360))), 230px)',

      },
      height: {
        'livecardcontent': 'clamp(16px, calc(16px + (20 - 16) * ((100vw - 360px) / (480 - 360))), 20px)',
        'moonheight': 'clamp(135px, calc(135px + (346 - 135) * ((100vw - 360px) / (1280 - 360))), 346px)',
        'launchpadbuttonheight': 'clamp(25px, calc(25px + (50 - 25) * ((100vw - 360px) / (870 - 360))), 50px)',
        'launchpadheight': 'clamp(330px, calc(330px + (357 - 330) * ((100vw - 360px) / (480 - 360))), 357px)',
        'launchpadtable': 'clamp(30px, calc(30px + (50 - 30) * ((100vw - 360px) / (680 - 360))), 50px)',
        'claimcardheight': 'clamp(30px, calc(30px + (50 - 30) * ((100vw - 360px) / (870 - 360))), 50px)',
        'walletbuttonheight': 'clamp(25px, calc(25px + (40 - 25) * ((100vw - 360px) / (520 - 360))), 40px)',
        'sidebariconheight': 'clamp(20px, calc(20px + (35 - 20) * ((100vw - 360px) / (520 - 360))), 35px)',

      },
      margin: {
        'mainmargin': 'clamp(120px, calc(120px + (200 - 120) * ((100vw - 360px) / (1250 - 360))), 200px)',
        'launchpadmain': 'clamp(32px, calc(32px + (100 - 32) * ((100vw - 360px) / (480 - 360))), 100px)',
        'launchpadmain2': 'clamp(32px, calc(32px + (140 - 32) * ((100vw - 360px) / (480 - 360))), 140px)',
        'claimcardtablemargin': 'clamp(16px, calc(16px + (45 - 16) * ((100vw - 360px) / (870 - 360))), 45px)',
        'claimheadermargin': 'clamp(25px, calc(25px + (80 - 25) * ((100vw - 360px) / (480 - 360))), 80px)',
      },
      padding: {

        'moonpadding': 'clamp(35px, calc(35px + (93 - 35) * ((100vw - 360px) / (1280 - 360))), 93px)',
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
