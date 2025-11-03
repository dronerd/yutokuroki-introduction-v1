// app/ja/page.tsx
import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "../components/LanguageToggle"; // client component

export const metadata = {
  title: "黒木 勇人",
  description:
    "黒木勇人のプロフィールページ：Project Fluence 創設者/開発者および運営者、早稲田大学基幹理工学部（情報系）、ISEF（国際学生科学技術フェア）出場経験者",
  openGraph: {
    title: "黒木 勇人",
    description:
      "黒木勇人のプロフィールページ：Project Fluence 創設者/開発者および運営者、早稲田大学基幹理工学部（情報系）、ISEF（国際科学科学技術フェア）出場経験者",
    url: "https://yutokuroki.vercel.app/ja",
    images: [{ url: "https://yutokuroki.vercel.app/images/profile3.JPG", width: 1200, height: 630 }],
    locale: "ja_JP",
  },
  twitter: { card: "summary_large_image", images: ["https://yutokuroki.vercel.app/images/profile3.JPG"] },
};

export default function HomePageJa() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Sticky Banner */}
      <div className="w-full sticky top-0 z-50 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center relative md:pr-24 lg:pr-8 xl:pr-0">
          {/* ページトップ */}
          <a
            href="#top"
            className={
              "text-white font-medium hover:underline text-lg cursor-pointer select-none " +
              "text-left md:text-center " +
              "md:absolute md:left-1/2 md:-translate-x-1/2"
            }
            aria-label="ページトップへスクロール"
          >
            <span className="inline md:hidden">ページトップ</span>
            <span className="hidden md:inline">ページトップへ — 黒木勇人のプロファイル</span>
          </a>

          {/* 右側のボタン群 */}
          <div className="ml-auto flex items-center gap-3 lg:mr-6 xl:mr-12">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yuto-kuroki-a5b32b383/"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 text-sm md:text-base font-medium text-white bg-blue-900 rounded-full shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-105 whitespace-nowrap"
              aria-label="外部リンク: LinkedIn"
            >
              <span className="inline md:hidden">LinkedIn</span>
              <span className="hidden md:inline">LinkedInを見る</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/dronerd"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 text-sm md:text-base font-medium text-white bg-blue-900 rounded-full shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-105 whitespace-nowrap"
              aria-label="外部リンク: GitHub"
            >
              <span className="inline md:hidden">GitHub</span>
              <span className="hidden md:inline">GitHubを見る</span>
            </a>
          </div>
        </div>
      </div>

      <main id="top" className="w-full min-h-screen bg-neutral-100 px-4 sm:px-6 pt-4 pb-12">
        <div className="flex flex-col md:flex-row w-full relative">
          {/* LEFT COLUMN */}
          <aside className="w-full md:w-1/4 md:sticky top-10 self-start p-4 md:p-6 bg-white md:bg-transparent rounded-lg md:rounded-none shadow-sm md:shadow-none text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="mb-2 w-full flex justify-center md:justify-start">
                <LanguageToggle />
              </div>

              <h1 className="text-2xl sm:text-3xl font-semibold">黒木 勇人</h1>
              <p className="text-base sm:text-lg mt-1">
                <Link aria-label="Project Fluence" href="https://projectfluence.vercel.app" className="underline" target="_blank">
                  <strong>Project Fluence</strong>
                </Link>
                <br />
                創設者 / 開発・運営
              </p>

              {/* Profile image */}
              <div className="flex-shrink-0 h-28 w-28 sm:h-36 sm:w-36 rounded-full overflow-hidden bg-neutral-200 mx-auto md:mx-0">
                <Image
                  src="/images/profile3.JPG"
                  alt="黒木勇人のプロフィール画像"
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                  priority
                  quality={100}
                />
              </div>

              <p className="text-sm sm:text-base leading-relaxed px-2 md:px-0">
                <strong className="block">早稲田大学基幹理工学部1年(情報系)</strong>
                <span className="block mt-1">
                  ソフトウェア開発、機械学習、異文化コミュニケーションに強い関心を持つ。技術研究と国際経験の融合を目指す。
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
                <a href="https://www.linkedin.com/in/yuto-kuroki-a5b32b383/" target="_blank" rel="noopener noreferrer" className="underline">
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>

          {/* Vertical divider on md+ */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/4 w-px bg-gray-300"></div>

          {/* RIGHT COLUMN */}
          <section className="w-full md:w-3/4 md:ml-8 p-4 md:p-6 mt-6 md:mt-0">
            <section>
              <h2 className="text-xl font-medium">自己紹介</h2>
              <p className="mt-3 leading-7 text-neutral-800 text-sm sm:text-base">
                <strong>国際科学コンテスト、ソフトウェア開発、プレゼンテーション、国際交流プログラム</strong>などで経験を積んできました。
                <strong>ISEF</strong>やJugendkurs Deutsch plus Berufなどの国際イベントに日本代表として参加し、技術力と国際的なコミュニケーション能力を培いました。
              </p>

              <br />

              <h2 className="text-xl font-medium flex items-center gap-2">
                <strong>Project Fluence</strong>
                <Link href="https://projectfluence.vercel.app" aria-label="Project Fluence" target="_blank" className="ml-2">
                  <Image src="/images/logo.png" alt="Project Fluence ロゴ" width={80} height={80} className="rounded-md object-cover" />
                </Link>
              </h2>

              <p className="mt-3 leading-7 text-neutral-800 text-sm sm:text-base">
                英語と専門分野の力で夢を実現する人を増やすことを目指し、
                <Link aria-label="Project Fluence" href="https://projectfluence.vercel.app" className="underline" target="_blank">
                  <strong>Project Fluence</strong>
                </Link>
                を立ち上げ、開発・運営を個人で行っています。Noteでの解説や無料アプリ提供を通じて支援していきます。
              </p>

              <h2 className="mt-6 text-xl font-medium">進行中のプロジェクト</h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>
                  React + FastAPI — Project Fluenceの英語学習アプリ{" "}
                  <a className="underline" href="https://vocabstream.vercel.app" target="_blank" rel="noopener noreferrer">
                    <strong>VocabStream</strong>
                  </a>
                  の開発
                </li>
                <li>React + FastAPI + LLM API — SpeakwiseGPT の開発</li>
                <li>Raspberry Pi（Python） — 顔認識システム（WASEDAものづくりプログラム）</li>
              </ul>

              <h2 className="mt-6 text-xl font-medium">公開中のアプリ</h2>
              <p className="mt-2 text-neutral-900 text-sm sm:text-base">
                英単語学習アプリ{" "}
                <a className="underline" href="https://vocabstream.vercel.app" target="_blank" rel="noopener noreferrer">
                  <strong>VocabStream</strong>
                </a>
              </p>
              <Link href="https://vocabstream.vercel.app" target="_blank" className="inline-block ml-2">
                <Image src="/VocabStream.png" alt="VocabStream プレビュー" width={84} height={84} className="rounded-md object-cover" />
              </Link>
            </section>

            {/* Upcoming Activities */}
            <section className="mt-6">
              <h2 className="text-xl font-medium">今後の活動</h2>
              <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>
                  <strong>2025年11月23日：</strong>
                  Goethe Institut Tokyo開催のPASCH Treffenで登壇予定
                </li>
                <li>
                  <strong>2025年12月14日：</strong>
                  <a className="underline" href="https://manabu.asahi.com/jsec/" target="_blank" rel="noopener noreferrer">
                    JSEC2025（高校生・高専生科学技術チャレンジ）
                  </a>
                  最終選考会のサポート
                </li>
              </ul>

              {/* Latest Note articles */}
              <h2 className="mt-6 text-xl font-medium">最近執筆したNote記事</h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li key="Note Article1" className="py-0.5">
                    <a href="https://note.com/projectfluence/n/n05e8b127014f" className="underline" target="_blank" rel="noopener noreferrer">
                      大学生の自己紹介 ― 黒木勇人｜Project Fluence｜英語アプリ｜英検１級・TOEIC満点・TOEFL116/120・ドイツ語上級
                    </a>
                </li>
                <li key="Note Article2" className="py-0.5">
                    <a href="https://note.com/projectfluence/n/nd806d6fa00ec" className="underline" target="_blank" rel="noopener noreferrer">
                      日本にいながらネイティブ級へ─英語力を効果的に伸ばす学習方法｜英検１級・TOEIC満点・TOEFL116/120・ドイツ語上級
                    </a>
                </li>
                <li key="Note Article3" className="py-0.5">
                    <a href="https://note.com/projectfluence/n/n751ab984987a" className="underline" target="_blank" rel="noopener noreferrer">
                      英語学習にも応用できる！第２外国語（ドイツ語）から見えてきた効果的な言語学習法
                    </a>
                </li>  
              </ul>
            </section>

            {/* Academic Records */}
            <section className="mt-6">
              <h2 className="text-xl font-medium">早稲田大学での成績 (GPA)</h2>
              <p className="mt-2 text-base text-sm sm:text-base">
                US スケール (Unweighted, A・A+ = 4.0): <strong>4.0</strong> / 4.0
                <br />
                US スケール (Weighted, A+ = 4.3): <strong>4.27</strong> / 4.0
                <br />
                早稲田大学のスケール (A = 3, A+ = 4): <strong>3.89</strong> / 4.0
              </p>
            </section>

            {/* Research & Awards */}
            <section className="mt-6">
              <h2 className="text-xl font-medium">研究・受賞歴</h2>
              <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>
                  <a href="https://isef.net/project/robo024-novel-medical-drone-delivery-using-k-means-and-tsp" target="_blank" rel="noopener noreferrer" className="underline">
                    <strong>ISEF 2025 ファイナリスト</strong>
                  </a>
                  — コロンバス, オハイオ州（ロボット工学・知能機械部門）
                </li>
                <li>
                  <a href="https://manabu.asahi.com/jsec/2024/award/index.html" target="_blank" rel="noopener noreferrer" className="underline">
                    <strong>JSEC 2025 ファイナリスト &amp; ソニー賞（全国8位）</strong>
                  </a>
                  — ドローン配送最適化の研究
                </li>
                <li>
                  <a href="https://www.ciec.or.jp/special/entry-1484.html" target="_blank" rel="noopener noreferrer" className="underline">
                    2025 CIEC 春季カンファレンス U-18部門 最優秀賞
                  </a>
                  — 効率的なドローン配送の自動化の研究
                </li>
                <li>
                  <a href="https://www.ciec.or.jp/special/entry-1436.html" target="_blank" rel="noopener noreferrer" className="underline">
                    2024 CIEC 春季カンファレンス U-18部門 奨励賞
                  </a>
                  — 機械学習を活用した自動障害物回避システムの研究
                </li>
                <li>
                  <a href="https://www.goethe.de/resources/files/pdf315/japanheute_2024.pdf" target="_blank" rel="noopener noreferrer" className="underline">
                    Jugendkurs Deutsch plus Beruf
                  </a>
                  — 日本人初の奨学生（Dieter Schwarz財団）、ドイツの有名な工科大学・企業・AIセミナーへの訪問
                </li>
              </ul>

              <h2 className="mt-6 text-xl font-medium">受賞・栄誉</h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>
                  <a href="https://www.mext.go.jp/b_menu/houdou/2025/1416581_00001.htm" target="_blank" rel="noopener noreferrer" className="underline">
                    文部科学大臣特別賞
                  </a>
                </li>
                <li>加藤山崎奨学金表彰</li>
                <li>東京文連優良生徒賞</li>
                <li>早稲田大学高等学院学芸賞（485名中）</li>
              </ul>
            </section>

            {/* Skills & Languages */}
            <section className="mt-6 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-medium">技術スキル</h2>
                <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                  <li>Web・アプリ: React, FastAPI, Next.js (本ページはReact + Next.jsで作成)</li>
                  <li>プログラミング: Python, C++, TypeScript</li>
                  <li>ハードウェア・ロボ: ドローン制御, Raspberry Pi, Arduino, CAD</li>
                  <li>最適化・機械学習: TSP, クラスタリング</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-medium">語学スキル</h2>
                <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                  <li>
                    英語 — TOEFL iBT 116/120, TOEIC 990/990,
                    <br />
                    英検1級 (中学2年で上位1%合格),
                    <br />
                    SAT 1530/1600
                  </li>
                  <li>ドイツ語 — Goethe-Zertifikat C2 (CEFRC2) の読む・聞く・話す技能とC1の書く技能</li>
                  <li>その他 — 基礎のスウェーデン語</li>
                </ul>
              </div>
            </section>

            {/* Education & Experience */}
            <section className="mt-6">
              <h2 className="text-xl font-medium">学歴・国際経験</h2>
              <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>早稲田大学 基幹理工学部（在学中）</li>
                <li>早稲田大学高等学院・中学部</li>
                <li>Novi Middle School, Michigan, USA</li>
                <li>幼少期: シンガポール滞在（2011–2013）</li>
              </ul>

              <h2 className="mt-6 text-xl font-medium">過去の活動・発表</h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>Toshiba Youth Club Asia（チームリーダー）</li>
                <li>
                  <a href="https://spice.fsi.stanford.edu/fellowship/stanford-e-japan" target="_blank" rel="noopener noreferrer" className="underline">
                    Stanford E-Japan 2023 修了
                  </a>
                </li>
                <li>SAP Japan, Sony AI, ソニー株式会社, エアロセンス, Bosch Japanでのプレゼンテーション</li>
                <li>
                  <a href="https://www.hana.hs.kr/symposium/03_paper.html" target="_blank" rel="noopener noreferrer" className="underline">
                    Hana Academy Seoul 国際シンポジウム
                  </a>
                  — 発表者・モデレーター
                </li>
                <li>学校説明会での生徒代表スピーチ（1000名以上の聴衆）</li>
                <li>ゲーテ・インスティトゥート東京でのプレゼンテーション</li>
                <li>
                  JST主催{" "}
                  <a className="underline" href="https://www.jst.go.jp/sis/scienceagora/2025/" target="_blank" rel="noopener noreferrer">
                    サイエンスアゴラ
                  </a>
                  にてNPO法人NSSメンバーとしてドローン研究を発表（東京テレコムセンター）
                </li>
              </ul>
            </section>

            {/* Media & Hobbies */}
            <section className="mt-6">
              <h2 className="text-xl font-medium">メディア・リンク</h2>
              <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>朝日新聞2024年12月10日朝刊、12月22日朝刊</li>
                <li>
                  <a href="https://manabu.asahi.com/jsec/2024/actibook/?detailFlg=0&pNo=12" target="_blank" rel="noopener noreferrer" className="underline">
                    JSEC通信2025
                  </a>
                </li>
                <li>さぴあ2025年8月号「母校を語る」</li>
                <li>
                  <a href="https://www.youtube.com/watch?v=Vlgrx-uviHo" target="_blank" rel="noopener noreferrer" className="underline">
                    PASCH ゲーテ・インスティトゥート公式YouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.asahi.com/articles/ASSDK2FK0SDKPLBJ001M.html" target="_blank" rel="noopener noreferrer" className="underline">
                    朝日新聞デジタル
                  </a>
                </li>

                <li>
                  早稲田大学高等学院ホームページ：
                  <a href="https://www.waseda.jp/school/shs/news/2024/04/05/8235/" target="_blank" rel="noopener noreferrer" className="underline">
                    CIEC2024受賞
                  </a>{" "}
                  <a href="https://www.waseda.jp/school/shs/news/2025/04/25/9556/" target="_blank" rel="noopener noreferrer" className="underline">
                    CIEC2025受賞
                  </a>{" "}
                  <a href="https://www.waseda.jp/school/shs/news/2024/12/27/9173/" target="_blank" rel="noopener noreferrer" className="underline">
                    JSEC最終審査ソニー賞
                  </a>
                </li>
              </ul>

              <h2 className="mt-6 text-xl font-medium">その他のスキル・趣味</h2>
              <p className="mt-3 text-neutral-700 text-sm sm:text-base">
                プレゼンテーション、語学指導、イベント運営、テニス、難解ルービックキューブの解法、ジャグリング、料理、なわとび
              </p>
            </section>

            {/* Footer */}
            <footer className="mt-12 border-t pt-6 text-sm text-neutral-500 md:text-left">
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
