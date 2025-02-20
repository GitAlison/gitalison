export interface Project {
  folder: string;
  title: string;
  files: string[];
  tools?: string[];
}

export const projects_data: Project[] = [
  {
    folder: "meu_predio_smart",
    title: "meu predio smart",
    files: Array(34)
      .fill(1)
      .map((_, i) => `meu_predio_smart${i + 1}.png`),
    tools: [
      "webpack",
      "ts",
      "html",
      "js",
      "rabbitmq",
      "postgres",
      "redis",
      "nodejs",
      "python",
      "django",
      "scss",
      "angular",
    ],
  },
  {
    folder: "goldpescados",
    title: "Gold Pescados",
    files: Array(34)
      .fill(1)
      .map((_, i) => `gols-pescados${i + 1}.png`),
    tools: ["python", "django", "html", "css", "js", "postgres"],
  },
  {
    folder: "ecommerce_de_joias_com_afiliados",
    title: "Ecommerce de Joias",
    files: Array(41)
      .fill(1)
      .map((_, i) => `lazuli-boss${i + 1}.png`),
    tools: [
      "webpack",
      "ts",
      "js",
      "postgres",
      "python",
      "django",
      "nodejs",
      "scss",
      "angular",
    ],
  },
  {
    folder: "tube_chat",
    title: "Tube Chat",
    files: [
      "tube_chat_app1.gif",
      ...Array(6)
        .fill(1)
        .map((_, i) => `tube_chat_app${i + 2}.png`),
    ],
    tools: ["css", "scss", "js", "postgres", "nodejs", "nestjs", "angular"],
  },
  {
    folder: "alcool_or_gas",
    title: "Alcool Or gas",
    files: [
      "alcool_or_gas1.png",
      "alcool_or_gas2.png",
      "alcool_or_gas3.gif",
      "alcool_or_gas4.png",
      "alcool_or_gas5.png",
    ],
    tools: ["flutter", "figma"],
  },

  {
    folder: "barber_app",
    title: "Barber App",
    files: Array(8)
      .fill(1)
      .map((_, i) => `barber_app${i + 1}.jpg`),
    tools: ["flutter", "figma"],
  },
  {
    folder: "fofok_app",
    title: "Fofoka APp",
    files: Array(12)
      .fill(1)
      .map((_, i) => `fofok_app${i + 1}.jpg`),
    tools: ["flutter", "python", "django"],
  },

  {
    folder: "marcenaria",
    title: "Marcenaria",
    files: Array(14)
      .fill(1)
      .map((_, i) => `marcenaria${i + 1}.png`),
    tools: ["js", "postgres", "python", "django"],
  },

  {
    folder: "prontuario_posto_de_saude",
    title: "Prontuario",
    files: Array(13)
      .fill(1)
      .map((_, i) => `sistema_prontuario${i + 1}.png`),
    tools: ["html", "css", "js", "postgres", "python", "django"],
  },
  {
    folder: "reactapp_layout",
    title: "React app Layout",
    files: ["react_app.gif"],
    tools: ["react", "nodejs"],
  },
  {
    folder: "sistema_de_pdv",
    title: "Sistema PDV",
    files: Array(13)
      .fill(1)
      .map((_, i) => `sistema_pdv${i + 1}.png`),
    tools: ["html", "css", "js", "postgres", "python", "django"],
  },
  {
    folder: "sizzon",
    title: "Sizzon Site institucional",
    files: Array(5)
      .fill(1)
      .map((_, i) => `sizzon${i + 1}.png`),
    tools: ["html", "css", "js", "python", "django"],
  },
  {
    folder: "toolfit",
    title: "Toolfit",
    files: Array(4)
      .fill(1)
      .map((_, i) => `toolfit${i + 1}.png`),
    tools: ["html", "css", "js", "python", "django"],
  },

];


export const tech_stack: string[] = [
  "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
  "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
  "https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray",
  "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
  "https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white",
  "https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101",
  "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
  "https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white",
  "https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white",
  "https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D",
  "https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF",
  "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
  "https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white",
  "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
  "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
  "https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white",
  "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
  "https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white",
  "https://img.shields.io/badge/Ionic-%233880FF.svg?style=for-the-badge&logo=Ionic&logoColor=white",
  "https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white",
  "https://img.shields.io/badge/nx-143055?style=for-the-badge&logo=nx&logoColor=white",
  "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
  "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
  "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white",
  "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
  "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
  "https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white",
  "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white",
  "https://img.shields.io/badge/aws-%23FF9900.svg?style=for-the-badge&logo=amazonwebservices&logoColor=white",
  "https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white",
  "https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white",
]