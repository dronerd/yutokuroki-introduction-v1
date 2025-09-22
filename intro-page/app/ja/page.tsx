"use client";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import LanguageToggle from "../components/LanguageToggle";
import Banner from "../components/Banner";

export default function HomePageJa() {
  const currentYear = new Date().getFullYear();

  const noteArticles = [
    "...",
  ];

  return (
    <>
      <Head>
        <title>黒木 勇人 — 自己紹介</title>
        <meta
          name="description"
          content="国際科学コンテスト、ソフトウェア開発、プレゼンテーション、国際交流に関心。"
        />
      </Head>

      {/* Sticky Banner */}
      <div className="w-full sticky top-0 z-50 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 relative flex items-center">

          {/* Center text */}
          <div
            className="absolute left-1/2 -translate-x-1/2 text-white font-medium hover:underline text-xl cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
          ページトップへ - 黒木勇人のプロファイル
          </div>

          {/* Right follow button */}
          <a
            href="https://www.linkedin.com/in/yuto-kuroki-a5b32b383/"
            target="_blank"
            className="ml-auto px-4 py-2 text-base font-medium text-white bg-blue-900 rounded-full shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-105 whitespace-nowrap"
          >
            LinkedInを見る
          </a>
        </div>
      </div>

      

      <main className="w-full min-h-screen bg-neutral-100 px-6 pt-4 pb-12">
        <div className="flex w-full relative">

          {/* LEFT COLUMN */}
          <aside className="md:w-1/4 sticky top-10 self-start p-6">
            <div className="flex flex-col items-start gap-4">
              <div className="mb-6">
                <LanguageToggle />
              </div>

              <h1 className="text-4xl font-semibold">黒木 勇人</h1>
              <p className="text-lg mt-2">
                <Link
                  aria-label="Scroll to top"
                  href="/extra"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <strong>Project Fluence</strong>
                </Link>
                <br/>創設者 / 開発・運営 
              </p>

              <div className="relative h-30 w-30 sm:h-36 sm:w-36 rounded-full overflow-hidden bg-neutral-200">
                <Image
                  src="/images/profile2.JPG"
                  alt="黒木勇人 のプロフィール"
                  fill
                  sizes="(max-width: 640px) 10rem, 12rem"
                  className="object-cover"
                  priority
                  quality={100}
                />
              </div>
              
              <p>
                <strong className="block">早稲田大学基幹理工学部1年</strong>
                <span className="block mt-1">
                  ソフトウェア開発、機械学習、異文化コミュニケーションに強い関心を持つ。技術研究と国際経験の融合を目指す。
               </span>
              </p>

              <div className="mt-2 flex flex-col gap-1 text-base">
                <div><strong>Email:</strong> yutokuroki.projectfluence@gmail.com</div>
                <a href="https://github.com/dronerd" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>
                <a href="https://www.linkedin.com/in/yuto-kuroki-a5b32b383/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
              </div>
            </div>
          </aside>

          {/* FULL-SCREEN VERTICAL LINE */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/4 w-px bg-gray-300"></div>

          {/* RIGHT COLUMN */}
          <section className="md:w-3/4 md:ml-8 p-6">

            {/* About / Highlights */}
            <section>
              <h2 className="text-xl font-medium">自己紹介</h2>
              <p className="mt-3 leading-7 text-neutral-800">
                <strong>国際科学コンテスト、ソフトウェア開発、プレゼンテーション、国際交流プログラム</strong>など、幅広い経験を積んできました。
                <strong>ISEF</strong>やJugendkurs Deutsch plus Berufなどの国際イベントに日本代表として参加し、技術力と国際的なコミュニケーション能力を培いました。
              </p>
              <br/>

              <h2 className="text-xl font-medium flex items-center gap-2">
                {/* Title */}
                <strong>Project Fluence</strong>について

                {/* Clickable image */}
                <Link href="/extra" aria-label="Go to extra page" target="_blank">
                  <Image
                    src="/images/logo.png"
                    alt="Project Fluence logo"
                    rel="noopener noreferrer"
                    width={84} // adjust size
                    height={84} // adjust size
                    className="rounded-md object-cover"
                  />
                </Link>
              </h2>

              <p className="mt-3 leading-7 text-neutral-800">
              英語と専門分野の力で夢を実現する人を増やすことを目指し、
               <Link
                  aria-label="Scroll to top"
                  href="/extra"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <strong>Project Fluence</strong>
                </Link>
              を立ち上げ、開発・運営を個人で行っています。
              Project Fluenceでは、私が効果的な英語学習法をNoteで紹介するとともに、自ら開発した無料の英語学習アプリを提供していきます。
              </p>

              <h2 className="mt-6 text-xl font-medium">進行中のプロジェクト</h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800">
                <li>React + FastAPI — Project Fluenceの英語学習アプリ
                <a
                    className="underline"
                    href="https://vocabstream.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>VocabStream</strong>
                  </a>
                  の開発</li>
                <li>React + FastAPI + LLM API — Project Fluenceの英語学習アプリ<strong>SpeakwiseGPT</strong>の開発</li>
                <li>Raspberry Pi（Python） — 顔認識システム（WASEDAものづくりプログラム）</li>
              </ul>

              <h2 className="mt-6 text-xl font-medium">近日公開するアプリ</h2>
              <p className="mt-2 text-neutral-900">
                英単語学習アプリ
                <a
                    className="underline"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <strong>VocabStream</strong>
                </a>
                <Link href="https://vocabstream.com" target="_blank">
                  <Image
                    src="/VocabStream.png"
                    alt="Project Fluence logo"
                    rel="noopener noreferrer"
                    width={100} // adjust size
                    height={100} // adjust size
                    className="rounded-md object-cover"
                  />
                </Link>
              </p>
            </section>

            {/* Upcoming Activities & Articles */}
            <section className="mt-6">
              <h2 className="text-xl font-medium">今後の活動</h2>
              <ul className="mt-3 list-disc pl-6 text-neutral-800">

                <li>
                  <strong>2025年10月26日：</strong>
                  JST主催
                  <a
                    className="underline"
                    href="https://www.jst.go.jp/sis/scienceagora/2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    サイエンスアゴラ
                  </a>
                  にてNSSメンバーとしてドローン研究を発表（東京テレコムセンター）
                </li>
                <li>
                  <strong>2025年12月：</strong>
                  <a
                    className="underline"
                    href="https://manabu.asahi.com/jsec/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JSEC
                  </a>
                  最終選考会のサポート
                </li>
              </ul>

              <h2 className="mt-6 text-xl font-medium">最近執筆したNote記事</h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800">
                {noteArticles.map((title) => (
                  <li key={title} className="py-0.5">
                    近日公開
                    <a href="#" className="underline" target="_blank" rel="noopener noreferrer">{title}</a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Academic Records */}
            <section className="mt-6">
              <h2 className="text-xl text-xl font-medium">早稲田大学での成績(GPA)</h2> 
                <p className="mt-2 text-base">     
                  US スケール (Unweighted, A・A+=4.0): <strong>4.0 </strong>/ 4.0
                  <br/>
                  US スケール (Weighted, A+=4.3): <strong>4.27 </strong>/ 4.0
                  <br/>
                  早稲田大学のスケール (A=3, A+=4): <strong>3.89 </strong>/ 4.0
                </p> 
            </section>

            {/* Research & Awards */}
            <section className="mt-6">
              <h2 className="text-xl font-medium">研究・学術活動・受賞歴</h2>

              <ul className="mt-3 list-disc pl-6 text-neutral-800">
                <li>
                  <a
                    href="https://isef.net/project/robo024-novel-medical-drone-delivery-using-k-means-and-tsp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    <strong>ISEF 2025 ファイナリスト</strong>
                  </a>
                  — コロンバス, オハイオ州（ロボット工学・知能機械部門）
                </li>
                <li>
                  <a
                    href="https://manabu.asahi.com/jsec/2024/award/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    <strong>JSEC 2025 ファイナリスト & ソニー賞（全国8位）</strong>
                  </a>
                  — ドローン配送最適化の研究
                </li>
                <li>
                  <a
                    href="https://www.ciec.or.jp/special/entry-1484.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    2025 CIEC 春季カンファレンス U-18部門 最優秀賞(1位)
                  </a>
                   {" "}— 効率的なドローン配送の自動化の研究
                </li>
                <li>
                  <a
                    href="https://www.ciec.or.jp/special/entry-1436.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    2024 CIEC 春季カンファレンス U-18部門 奨励賞(3位)
                  </a>
                   {" "}— 自動障害物回避システムの研究
                </li>
                <li>
                  <a href="https://www.goethe.de/resources/files/pdf315/japanheute_2024.pdf" target="_blank" rel="noopener nopreferrer" className="underline">
                    Jugendkurs Deutsch plus Beruf (東アジア選考突破)
                  </a>
                  — 日本人初の奨学生（Dieter Schwarz財団）、ドイツの有名大学・企業・AIセミナーへの訪問
                </li>
              </ul>

              <h2 className="mt-6 text-xl font-medium">受賞・栄誉</h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800">
                <li>
                  <a href="https://www.mext.go.jp/b_menu/houdou/2025/1416581_00001.htm" target="_blank" rel="noopener noreferrer" className="underline">文部科学大臣特別賞</a>
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
                <ul className="mt-3 list-disc pl-6 text-neutral-800">
                  <li>Web・アプリ: React, FastAPI, Next.js (本ページはReact + Next.jsで作成)</li>
                  <li>プログラミング: Python, C++, TypeScript</li>
                  <li>ハードウェア・ロボ: ドローン制御, Raspberry Pi, Arduino, CAD</li>
                  <li>最適化・機械学習: TSP, クラスタリング</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-medium">語学スキル</h2>
                <ul className="mt-3 list-disc pl-6 text-neutral-800">
                  <li>英語 — TOEFL iBT 116/120, TOEIC 990/990, 
                    <br/>英検1級 (中学2年で受験者の上位1%合格),
                    <br/>SAT 1530/1600
                  </li>
                  <li>ドイツ語 — Goethe Zertifikat C1 (CEFR C1)</li>
                  <li>その他 — 基礎レベルのスウェーデン語</li>
                </ul>
              </div>
            </section>

            {/* Education & Experience */}
            <section className="mt-6">
              <h2 className="text-xl font-medium">学歴・国際経験</h2>
              <ul className="mt-3 list-disc pl-6 text-neutral-800">
                <li>早稲田大学 基幹理工学部（在学中）</li>
                <li>早稲田大学高等学院・中学部</li>
                <li>Novi Middle School, Michigan, USA</li>
                <li>幼少期: シンガポール滞在（2011–2013）</li>
              </ul>

              <h2 className="mt-6 text-xl font-medium">過去の活動・発表</h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800">
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
              </ul>
            </section>

            {/* Media & Hobbies */}
            <section className="mt-6">
              <h2 className="text-xl font-medium">メディア・リンク</h2>
              <ul className="mt-3 list-disc pl-6 text-neutral-800">
                <li>朝日新聞2024年12月10日朝刊、12月22日朝刊</li>
                <li>
                  <a href="https://manabu.asahi.com/jsec/2024/actibook/?detailFlg=0&pNo=12" target="_blank" rel="noopener noreferrer" className="underline">
                    JSEC通信2025
                  </a>
                </li>
                <li>さぴあ2025年8月号「母校を語る」
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=Vlgrx-uviHo" target="_blank" rel="noopener noreferrer" className="underline">
                    PASCH ゲーテ・インスティトゥート公式ページYouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.asahi.com/articles/ASSDK2FK0SDKPLBJ001M.html" target="_blank" rel="nonopener nonreferrer" className="underline">
                    朝日新聞デジタル
                  </a>
                </li>

                <li>
                  早稲田大学高等学院ホームページ：
                  <a
                    href="https://www.waseda.jp/school/shs/news/2024/04/05/8235/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    CIEC2024受賞
                  </a>{" "}
                  <a
                    href="https://www.waseda.jp/school/shs/news/2025/04/25/9556/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    CIEC2025受賞
                  </a>{" "}
                  <a
                    href="https://www.waseda.jp/school/shs/news/2024/12/27/9173/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    JSEC最終審査ソニー賞
                  </a>
                </li>
              </ul>
              <h2 className="mt-6 text-xl font-medium">その他のスキル・趣味</h2>
              <p className="mt-3 text-neutral-700">
                プレゼンテーション、語学指導、イベント運営、テニス、難解ルービックキューブの解法、ジャグリング、料理、なわとび
              </p>
            </section>

            {/* Footer */}
            <footer className="mt-12 border-t pt-6 text-sm text-neutral-500">
              © {currentYear} 黒木勇人
            </footer>
          </section>
        </div>
      </main>
    </>
  );
}
