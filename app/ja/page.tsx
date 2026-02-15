// app/ja/page.tsx
import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "../components/LanguageToggle";

export const metadata = {
  title: "黒木 勇人",
  description:
    "黒木勇人のプロフィールページ｜早稲田大学基幹理工学部・ISEF Alumni・AI研究開発",
  openGraph: {
    title: "黒木 勇人",
    description:
      "黒木勇人のプロフィールページ｜早稲田大学基幹理工学部・ISEF Alumni・AI研究開発",
    url: "https://yutokuroki.vercel.app/ja",
    images: [
      { url: "https://yutokuroki.vercel.app/images/profile3.JPG", width: 1200, height: 630 },
    ],
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://yutokuroki.vercel.app/images/profile3.JPG"],
  },
};

export default function HomePageJa() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Sticky Banner */}
      <div className="w-full sticky top-0 z-50 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center relative md:pr-24 lg:pr-8 xl:pr-0">
          <a
            href="#top"
            className={
              "text-white font-medium hover:underline text-lg cursor-pointer select-none " +
              "text-left md:text-center md:absolute md:left-1/2 md:-translate-x-1/2"
            }
            aria-label="ページトップへ"
          >
            <span className="inline md:hidden">ページトップ</span>
            <span className="hidden md:inline">ページトップへ — 黒木勇人のプロフィール</span>
          </a>

          <div className="ml-auto flex items-center gap-3 lg:mr-6 xl:mr-12">
            <a
              href="https://www.linkedin.com/in/yutokuroki/"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 text-sm md:text-base font-medium text-white bg-blue-900 rounded-full shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-105 whitespace-nowrap"
            >
              <span className="inline md:hidden">LinkedIn</span>
              <span className="hidden md:inline">LinkedInを見る</span>
            </a>

            <a
              href="https://github.com/dronerd"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 text-sm md:text-base font-medium text-white bg-blue-900 rounded-full shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-105 whitespace-nowrap"
            >
              <span className="inline md:hidden">GitHub</span>
              <span className="hidden md:inline">GitHubを見る</span>
            </a>
          </div>
        </div>
      </div>

      <main id="top" className="w-full min-h-screen bg-neutral-100 px-4 sm:px-6 pt-4 pb-12">
        <div className="flex flex-col md:flex-row w-full relative">
          {/* LEFT */}
          <aside className="w-full md:w-1/4 md:sticky top-10 self-start p-4 md:p-6 bg-white md:bg-transparent rounded-lg md:rounded-none shadow-sm md:shadow-none text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="mb-2 w-full flex justify-center md:justify-start">
                <LanguageToggle />
              </div>

              <h1 className="text-2xl sm:text-3xl font-semibold">黒木 勇人</h1>
              <p className="text-base sm:text-lg mt-1">
                AI研究開発 ｜ ISEF Alumni
              </p>

              <div className="flex-shrink-0 h-28 w-28 sm:h-36 sm:w-36 rounded-full overflow-hidden bg-neutral-200 mx-auto md:mx-0">
                <Image
                  src="/images/profile3.JPG"
                  alt="黒木勇人のプロフィール"
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                  priority
                  quality={100}
                />
              </div>

              <p className="text-sm sm:text-base leading-snug px-2 md:px-0">
                <strong className="block text-base">
                  早稲田大学 基幹理工学部 1年
                </strong>
                <span className="block mt-1">
                  機械学習、LLM、Agentic AI、医療AIに関心があります
                </span>
              </p>

              <div className="mt-2 flex flex-col gap-1 text-base">
                <div>
                  <strong>Email:</strong>{" "}
                  <a className="underline break-words" href="mailto:yutokuroki.projectfluence@gmail.com">
                    yutokuroki.projectfluence@gmail.com
                  </a>
                </div>
                <a href="https://github.com/dronerd" target="_blank" rel="noopener noreferrer" className="underline">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/yutokuroki/" target="_blank" rel="noopener noreferrer" className="underline">
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>

          <div className="hidden md:block absolute top-0 bottom-0 left-1/4 w-px bg-gray-300"></div>

          {/* RIGHT */}
          <section className="w-full md:w-3/4 md:ml-8 p-4 md:p-6 mt-6 md:mt-0">
            <section>
              <h2 className="text-xl font-medium"><strong>自己紹介</strong></h2>
              <p className="mt-3 leading-7 text-neutral-800 text-sm sm:text-base">
                国際科学コンテスト、ソフトウェア開発、プレゼンテーション、異文化交流など幅広い経験を積んできました。
                日本代表としてISEFに出場し、現在は
                <strong>機械学習</strong>、<strong>大規模言語モデル</strong>、<strong>Agentic AI</strong>、
                <strong>医療分野へのAI応用</strong>に強い関心を持っています。
                技術で現実世界の課題を解決することを目標に活動しています。
              </p>

              <br />

              <h2 className="text-xl font-medium flex items-center gap-2">
                <strong>Project Fluence</strong>
                <Link href="https://projectfluence.vercel.app" target="_blank" className="ml-2">
                  <Image src="/images/logo.png" alt="Project Fluence ロゴ" width={80} height={80} className="rounded-md object-cover" />
                </Link>
              </h2>

              <p className="mt-3 leading-7 text-neutral-800 text-sm sm:text-base">
                英語力と専門性を活かして夢に挑戦できる人を増やすことを目標に、
                <Link href="https://projectfluence.vercel.app" className="underline" target="_blank">
                  <strong>Project Fluence</strong>
                </Link>
                を創設しました。AIを活用した英語学習アプリの開発やNote記事の執筆を行っています。
              </p>

              {/* Latest Apps */}
              <h2 className="mt-6 text-xl font-medium"><strong>最新アプリ</strong></h2>
              <p className="mt-2 text-neutral-900 text-sm sm:text-base">
                英単語学習アプリ{" "}
                <a className="underline" href="https://vocabstream.vercel.app" target="_blank" rel="noopener noreferrer">
                  <strong>VocabStream</strong>
                </a>
              </p>
              <Link href="https://vocabstream.vercel.app" target="_blank" className="inline-block ml-2">
                <Image src="/VocabStream.png" alt="VocabStream プレビュー" width={84} height={84} className="rounded-md object-cover" />
              </Link>

              {/* Ongoing */}
              <h2 className="mt-6 text-xl font-medium"><strong>現在の活動</strong></h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>
                  楽天にてデータサイエンティストインターンとして、Agentic AIシステムについて研究開発を行っています。
                </li>
                <li>
                  NSSスタッフとしてISEF2026日本代表の支援
                </li>
                <li>
                  React + FastAPI + OpenAI API によるProject Fluenceの英語学習アプリ開発
                </li>
              </ul>
            </section>

            {/* Upcoming */}
            <section className="mt-6">
              <h2 className="text-xl font-medium"><strong>今後の活動</strong></h2>
              <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>
                  <strong>2026年1月〜3月：</strong>
                  GTIE Student Entrepreneurship Program（ボストン）に選抜。
                  3月3日〜6日にCIC、MIT、ハーバード大学訪問および現地ネットワーキングを予定。
                </li>
              </ul>

              {/* Note */}
              <h2 className="mt-6 text-xl font-medium"><strong>最新のNote記事</strong></h2>
              {/* NOTE: articles kept same */}
              <ul className="mt-2 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li><a href="https://note.com/projectfluence/n/n05e8b127014f" className="underline" target="_blank">大学生の自己紹介 ― 黒木勇人</a></li>
                <li><a href="https://note.com/projectfluence/n/nd806d6fa00ec" className="underline" target="_blank">日本にいながらネイティブ級へ</a></li>
                <li><a href="https://note.com/projectfluence/n/n751ab984987a" className="underline" target="_blank">第２外国語から見えた学習法</a></li>
                <li><a href="https://note.com/projectfluence/n/nb5ee0137b415" className="underline" target="_blank">ケンブリッジ英検C2 合格</a></li>
                <li><a href="https://note.com/projectfluence/n/n71bd9003af29" className="underline" target="_blank">上級者向け英語強化法</a></li>
              </ul>
            </section>

            {/* GPA */}
            <section className="mt-6">
              <h2 className="text-xl font-medium"><strong>早稲田大学のGPA</strong></h2>
              <p className="mt-2 text-sm sm:text-base">
                US換算 (A・A+ = 4.0): <strong>4.0</strong> / 4.0
                <br />
                早稲田大学基準 (A=3, A+=4): <strong>3.89</strong> / 4.0
              </p>
            </section>

            {/* Skills */}
            <section className="mt-6 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-medium"><strong>技術スキル</strong></h2>
                <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                  <li>Programming: Python, C++, TypeScript</li>
                  <li>AI・ML: 最適化、LLMアプリ開発、Agentic AI開発</li>
                  <li>Web: React, FastAPI, Next.js</li>
                  <li>Hardware: ドローン制御, Raspberry Pi, Arduino</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-medium"><strong>語学スキル</strong></h2>
                <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                  <li>
                    英語 — TOEFL 116, TOEIC 990, 英検1級(14歳時に上位1%で合格), SAT 1530,
                    Cambridge C2 (R/L満点)
                  </li>
                  <li>ドイツ語 — Goethe-Zertifikat C2</li>
                  <li>その他 — 基礎のスウェーデン語</li>
                </ul>
              </div>
            </section>

            <footer className="mt-12 border-t pt-6 text-sm text-neutral-700 text-center md:text-left">
              All content © {currentYear} 黒木勇人
            </footer>

            <Link href="/privacy" target="_blank">
              Privacy Policy
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
