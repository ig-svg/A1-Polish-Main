import React from "react";
import {
  Book,
  ChevronRight,
  GraduationCap,
  Star,
  ArrowRight,
  Layout,
  Database,
  Clock,
  Users,
  Hash,
  Check,
} from "lucide-react";

/**
 * ⚙️ НАЛАШТУВАННЯ ПОСИЛАНЬ
 * Замініть "#" на реальні посилання на ваші додатки.
 */
const LINKS = {
  TOPIC_1: "https://fqy8tr.csb.app/", // Rzeczownik
  TOPIC_2: "https://mzrvkk.csb.app/", // Mianownik
  TOPIC_3: "https://n55hzm.csb.app/", // Narzędnik
  TOPIC_4: "https://9nlm8d.csb.app/", // Biernik
  TOPIC_5: "https://8kcpp4.csb.app/", // Dopełniacz
  TOPIC_6: "https://yrmrkg.csb.app/", // Miejscownik
  TOPIC_7: "https://5qhf3m.csb.app/", // Czasownik
  TOPIC_8: "https://lzvk7k.csb.app/", // Modalne
  TOPIC_9: "https://xpgp94.csb.app/", // Przeszły
  TOPIC_10: "https://z6n88z.csb.app/", // Przyszły
  TOPIC_11: "https://ph94cd.csb.app/", // Przymiotnik
  TOPIC_12: "https://w9y6l3.csb.app/", // Zaimek
  TOPIC_13: "https://lv3dll.csb.app/", // Liczebnik
  LEVEL_A2: "#", // Заглушка (поки не зробимо А2)
};

const TOPICS = [
  {
    id: 1,
    title: "Rzeczownik",
    desc: "Рід іменника: Чоловічий, Жіночий, Середній.",
    icon: <Database size={20} />,
    url: LINKS.TOPIC_1,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Mianownik",
    desc: "Kto? Co? (Називний відмінок). Основа речення.",
    icon: <Layout size={20} />,
    url: LINKS.TOPIC_2,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    id: 3,
    title: "Narzędnik",
    desc: "Kim? Czym? (Орудний). Професії та інструменти.",
    icon: <Users size={20} />,
    url: LINKS.TOPIC_3,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Biernik",
    desc: "Kogo? Co? (Знахідний). Люблю, бачу, маю.",
    icon: <Star size={20} />,
    url: LINKS.TOPIC_4,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 5,
    title: "Dopełniacz",
    desc: "Kogo? Czego? (Родовий). Немає, багато, від кого.",
    icon: <Book size={20} />,
    url: LINKS.TOPIC_5,
    color: "bg-red-100 text-red-600",
  },
  {
    id: 6,
    title: "Miejscownik",
    desc: "Gdzie? (Місцевий). В будинку, на столі.",
    icon: <Layout size={20} />,
    url: LINKS.TOPIC_6,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 7,
    title: "Czasownik",
    desc: "Теперішній час. Групи відмінювання.",
    icon: <Clock size={20} />,
    url: LINKS.TOPIC_7,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 8,
    title: "Modalne",
    desc: "Хотіти, могти, мусити. (Chcieć, Móc, Musieć).",
    icon: <Check size={20} />,
    url: LINKS.TOPIC_8,
    color: "bg-lime-100 text-lime-600",
  },
  {
    id: 9,
    title: "Czas Przeszły",
    desc: "Минулий час. Робив / Робила.",
    icon: <Clock size={20} />,
    url: LINKS.TOPIC_9,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 10,
    title: "Czas Przyszły",
    desc: "Майбутній час. Буду робити.",
    icon: <ArrowRight size={20} />,
    url: LINKS.TOPIC_10,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: 11,
    title: "Przymiotnik",
    desc: "Який? Яка? Яке? Узгодження прикметників.",
    icon: <Star size={20} />,
    url: LINKS.TOPIC_11,
    color: "bg-teal-100 text-teal-600",
  },
  {
    id: 12,
    title: "Zaimek",
    desc: "Мій, твій, його. Вказівні займенники.",
    icon: <Users size={20} />,
    url: LINKS.TOPIC_12,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    id: 13,
    title: "Liczebnik",
    desc: "Числа 0-100. Котрий по порядку?",
    icon: <Hash size={20} />,
    url: LINKS.TOPIC_13,
    color: "bg-sky-100 text-sky-600",
  },
];

const PolishMenuA1 = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* HEADER */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 h-20 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                PL
              </span>
              <span className="text-slate-400 text-xs font-bold tracking-wider uppercase">
                Курс Польської
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">
              Рівень A1: Основи
            </h1>
          </div>
          <div className="bg-slate-100 p-2 rounded-full">
            <GraduationCap className="text-slate-600" size={28} />
          </div>
        </div>
      </div>

      <main className="max-w-2xl mx-auto p-4 md:p-6 pb-24">
        {/* PROGRESS INFO */}
        <div className="bg-blue-600 text-white rounded-2xl p-6 mb-8 shadow-lg shadow-blue-200">
          <h2 className="text-lg font-bold mb-2">Ваш шлях до А2</h2>
          <p className="text-blue-100 text-sm mb-4">
            Пройдіть усі 13 тем, щоб засвоїти базу польської граматики.
          </p>
          <div className="flex gap-2">
            <div className="h-2 flex-1 bg-blue-400/30 rounded-full overflow-hidden">
              <div className="h-full bg-white w-0"></div>{" "}
              {/* Прогрес бар (поки 0) */}
            </div>
            <span className="text-xs font-bold">0/13</span>
          </div>
        </div>

        {/* TOPICS LIST */}
        <div className="space-y-3">
          {TOPICS.map((topic) => (
            <a
              key={topic.id}
              href={topic.url}
              className={`block bg-white border border-slate-200 rounded-xl p-4 transition-all hover:shadow-md hover:border-blue-300 active:scale-[0.99] group ${
                topic.url === "#" ? "opacity-75" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl shrink-0 ${topic.color}`}>
                  {topic.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                      {topic.id}. {topic.title}
                    </h3>
                    {topic.url === "#" && (
                      <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                        Скоро
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 leading-snug">
                    {topic.desc}
                  </p>
                </div>
                <ChevronRight
                  className="text-slate-300 group-hover:text-blue-500 self-center"
                  size={20}
                />
              </div>
            </a>
          ))}
        </div>

        {/* NEXT LEVEL BUTTON */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-4">Відчуваєте впевненість?</p>
          <a
            href={LINKS.LEVEL_A2}
            className={`inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-slate-800 shadow-xl ${
              LINKS.LEVEL_A2 === "#"
                ? "opacity-50 cursor-not-allowed"
                : "hover:-translate-y-1"
            }`}
          >
            Перейти до Рівня А2 <ArrowRight size={20} />
          </a>
        </div>
      </main>
    </div>
  );
};

export default PolishMenuA1;
