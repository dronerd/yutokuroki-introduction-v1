// app/ja/page.tsx
import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "../components/LanguageToggle"; // client component

export const metadata = {
  title: "黒木 勇人",
  description: "黒木勇人のプロフィールページ：早稲田大学情報理工学科２年、AI研究・ソフトウェア開発、ISEF2025日本代表",
  openGraph: {
    locale: "ja_JP",
    url: "https://yutokuroki.vercel.app/ja",
  },
};

export default function HomePageJa() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* Sticky Banner */}
      <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
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
            <span className="inline lg:hidden">ページトップ</span>
            <span className="hidden lg:inline">ページトップへ — 黒木勇人のプロファイル</span>
          </a>

          {/* 右側のボタン群 */}
          <div className="ml-auto flex items-center gap-3 lg:mr-6 xl:mr-12">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yutokuroki/"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 text-sm md:text-base font-medium text-white bg-blue-900 rounded-full shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-105 whitespace-nowrap"
              aria-label="外部リンク: LinkedIn"
            >
              <span className="inline lg:hidden">LinkedIn</span>
              <span className="hidden lg:inline">LinkedInを見る</span>
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
                AI研究・ソフトウェア開発 <br/> ISEF2025日本代表
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
                />
              </div>

              <p className="text-sm sm:text-base leading-relaxed px-2 md:px-0">
                <strong className="block">早稲田大学情報理工学科2年</strong>
                <span className="block mt-1">
                  機械学習、LLM、Agentic AI、ソフトウェア開発に関心があります。
                </span>
              </p>

              <div className="mt-2 flex flex-col gap-1 text-base">
                <a href="https://note.com/projectfluence" target="_blank" rel="noopener noreferrer" className="underline">
                  note
                </a>
                <a href="https://github.com/dronerd" target="_blank" rel="noopener noreferrer" className="underline">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/yutokuroki/" target="_blank" rel="noopener noreferrer" className="underline">
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
                <strong>国際科学コンテスト、ソフトウェア開発、異文化交流</strong>
                を経験してきました。
                日本代表として<strong>ISEF2025</strong>に出場し、現在は
                <strong>機械学習</strong>、<strong>大規模言語モデル（LLM）</strong>、
                <strong>Agentic AI</strong>、<strong>医療分野へのAI応用</strong>
                に強い関心を持っています。
                テクノロジーによって世界の課題を解決することに情熱を持ち、
                国際的な交流活動にも積極的に取り組んでいます。
              </p>
              <br />

              <h2 className="text-xl font-medium flex items-center gap-2">
                <strong>Project Fluence</strong>
                <Link href="https://projectfluence.vercel.app" aria-label="Project Fluence" target="_blank" className="ml-2">
                  <Image src="/images/logo.png" alt="Project Fluence ロゴ" width={80} height={80} className="rounded-md object-cover" />
                </Link>
              </h2>

              <p className="mt-3 leading-7 text-neutral-800 text-sm sm:text-base">
                <Link aria-label="Project Fluence" href="https://projectfluence.vercel.app" className="underline" target="_blank">
                  <strong>Project Fluence</strong>
                </Link>
                は私の英語学習ノウハウを活用したAIアプリが連携して学習体験を最適化する、英語学習のエコシステムです。
                英語力とそれぞれの専門性を活かし、日本から世界へ挑戦する人を増やすことを目指しています。
                AI英語学習アプリの開発や、noteでの記事執筆を行っています。
                ぜひご覧ください!
              </p>

              {/* Latest activities */}
              <h2 className="mt-6 text-xl font-medium">現在の活動</h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>
                  NSSスタッフとして{" "}
                  <a className="underline" href="https://www.societyforscience.org/isef/" target="_blank" rel="noopener noreferrer">
                    ISEF2026
                  </a>
                  日本代表のサポート
                </li>
                <li>
                  Project Fluence の英語学習アプリ開発
                </li>
              </ul>
            </section>

            {/* Upcoming Activities */}
            <section className="mt-6">
              <h2 className="text-xl font-medium">今後の活動</h2>
              <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>
                  2026年8月9日〜9月27日： 中谷財団のNakatani RIESプログラムに選抜され、<strong>ジョージア工科大学のEPIC Lab</strong>にて<strong>研究インターンシップ</strong>予定。
                </li>
                <li>
                  2026年10月13日：　<strong>TEDx WUSHS Youth Event</strong>にて登壇予定。
                </li>
              </ul>

              {/* Latest note articles */}
              <h2 className="mt-6 text-xl font-medium">最近執筆したnote記事</h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li key="note Article1" className="py-0.5">
                    <a href="https://note.com/projectfluence/n/n05e8b127014f" className="underline" target="_blank" rel="noopener noreferrer">
                      大学生の自己紹介 ― 黒木勇人｜Project Fluence｜英語アプリ｜英検１級・TOEIC満点・TOEFL116/120・ドイツ語上級
                    </a>
                </li>
                <li key="note Article2" className="py-0.5">
                    <a href="https://note.com/projectfluence/n/nd806d6fa00ec" className="underline" target="_blank" rel="noopener noreferrer">
                      日本にいながらネイティブ級へ─英語力を効果的に伸ばす学習方法｜英検１級・TOEIC満点・TOEFL116/120・ドイツ語上級
                    </a>
                </li>
                <li key="note Article3" className="py-0.5">
                    <a href="https://note.com/projectfluence/n/n751ab984987a" className="underline" target="_blank" rel="noopener noreferrer">
                      英語学習にも応用できる！第２外国語（ドイツ語）から見えてきた効果的な言語学習法
                    </a>
                </li>  
                <li key="note Article4" className="py-0.5">
                    <a href="https://note.com/projectfluence/n/nb5ee0137b415" className="underline" target="_blank" rel="noopener noreferrer">
                      世界最難関の英語検定試験：ケンブリッジ英検C2 Proficiency（CPE）に合格しました！（リーディング・リスニング満点）
                    </a>
                </li> 
                <li key ="note Article5" className="py-0.5">
                    <a href="https://note.com/projectfluence/n/n71bd9003af29" className="underline" target="_blank" rel="noopener noreferrer">
                    （上級者向け）日本にいながら英語力をさらに高める効果的な方法
                    </a>
                </li>
              </ul>
            </section>

            {/* Academic Records */}
            <section className="mt-6">
              <h2 className="text-xl font-medium">
                大学の成績
              </h2>
              <div className="mt-2 text-base sm:text-base">
                <h3 className="mt-4 font-semibold">GPA (早稲田大学スケール, A = 3, A+ = 4)</h3>
                <p className="mt-1">
                  第1セメスター: <strong>3.89</strong> / 4.00<br />
                  第2セメスター: <strong>3.97</strong> / 4.00<br />
                  累積GPA: <strong>3.94</strong> / 4.00
                </p>
              </div>
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
                    <strong>JSEC 2025 ファイナリスト &amp; ソニー賞 </strong>
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
                    <strong>文部科学大臣特別賞</strong>
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
                  <li>プログラミング: Python, C++, TypeScript</li>
                  <li>AI・ML: 最適化、LLMアプリケーション開発、Agentic AI開発、AIセキュリティ</li>
                  <li>Web・アプリ: React, FastAPI, Next.js（本ページは Next.js で作成）</li>
                  <li>ハードウェア・ロボティクス: ドローンプログラミング、Raspberry Pi、Arduino</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-medium">語学スキル</h2>
                <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                  <li>
                    英語 — TOEFL iBT 116/120, TOEIC 990/990,
                    <br />
                    英検1級 (14歳で上位1%合格),
                    <br />
                    SAT 1530/1600
                    <br />
                    ケンブリッジ英検C2 (CPE) 合格 (リーディング・リスニング満点)
                  </li>
                  <li>ドイツ語 — 世界最難関のドイツ語検定試験Goethe-Zertifikat C2 (CEFRC2) の読む・聞く・話す技能とC1の書く技能</li>
                </ul>
              </div>
            </section>

            {/* Education & Experience */}
            <section className="mt-6">
              <h2 className="text-xl font-medium">学歴・国際経験</h2>
              <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li><strong>早稲田大学 情報理工学科（在学中）</strong></li>
                <li>早稲田大学高等学院・中学部</li>
                <li>Novi Middle School, Michigan, USA</li>
                <li>幼少期: シンガポール滞在（2011–2013）</li>
              </ul>

              <h2 className="mt-6 text-xl font-medium">
                <strong>職歴</strong>
              </h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>
                  <strong>データサイエンティストインターン（楽天AI for Business）</strong>
                  （2026年2月3日〜2026年3月31日）— エージェント型AIの安全性に関する研究を実施し、AIエージェントの評価実験の設計・実行を担当。成果をチーム全体に向けて発表。英語を主言語とする国際的な環境で協働した。
                </li>

                <li>
                  <strong>スタッフ（</strong>
                  <a
                    className="underline"
                    href="https://nss.or.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>NPO法人 日本サイエンスサービス（NSS）</strong>
                  </a>
                  <strong>）</strong>
                  （2025年7月〜現在）— 高校生の研究発表支援、科学アウトリーチ活動
                  <a
                    className="underline"
                    href="https://www.jst.go.jp/sis/scienceagora/2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    サイエンスアゴラ2025
                  </a>
                  での展示参加、
                  <a
                    className="underline"
                    href="https://manabu.asahi.com/jsec/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JSEC 2025
                  </a>
                  最終審査の運営補助、およびISEF 2026に出場する日本代表生徒の支援を担当。
                </li>

                <li>
                  <strong>編集者（Redakteur）ゲーテ・インスティトゥート学生新聞</strong>
                  （2025年9月〜2025年11月）— 有償編集者として学生記事の編集を担当。巻末の総括（Schlusswort）を執筆し、ゲーテ・インスティトゥート東京にてプレゼンテーションを行った。
                </li>
              </ul>

              <h2 className="mt-6 text-xl font-medium">過去の活動・発表</h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>
                  2026年1月〜3月 <strong>GTIE Student Entrepreneurship Program</strong>参加  
                  早稲田大学および文部科学省による全額支援のもと選抜参加者として採択され、Cambridge Innovation Center、MIT、Harvard University等におけるネットワーキング
                </li>
                <li>早稲田大学高等学院 硬式テニス部</li>
                <li>Toshiba Youth Club Asia（チームリーダー）</li>
                <li>
                  <a href="https://spice.fsi.stanford.edu/fellowship/stanford-e-japan" target="_blank" rel="noopener noreferrer" className="underline">
                    <strong>Stanford E-Japan 2023 修了</strong>
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
                <li>
                  ゲーテ・インスティトゥート東京でのプレゼンテーション (&quot;Jugendkurs Deutsch plus Beruf&quot;, &quot;Der Wert des Deutschlernens, ein Rückblick&quot;)
                </li>
                <li>
                  早稲田大学政治経済学部のドイツ語スピーチコンテストにて特別ゲストスピーチ
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
                  </a>{", "}
                  <a href="https://www.waseda.jp/school/shs/news/2025/04/25/9556/" target="_blank" rel="noopener noreferrer" className="underline">
                    CIEC2025受賞 
                  </a>{", "}
                  <a href="https://www.waseda.jp/school/shs/news/2024/12/27/9173/" target="_blank" rel="noopener noreferrer" className="underline">
                    JSEC最終審査ソニー賞 
                  </a>{", "}
                  <a href="https://www.waseda.jp/school/shs/news/2025/10/01/10001/" target="_blank" rel="noopener noreferrer" className="underline">
                    Goethe Zertifikat C1 合格 
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
