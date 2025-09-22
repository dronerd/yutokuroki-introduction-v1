"use client";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import LanguageToggle from "./components/LanguageToggle";
import Banner from "./components/Banner";

export default function HomePageEn() {
  const currentYear = new Date().getFullYear();

  const noteArticles = [
    "...",
  ];

  return (
    <>
      <Head>
        <title>Yuto Kuroki — Introduction</title>
        <meta
          name="description"
          content="Yuto Kuroki — Freshman at Waseda University interested in autonomous systems, machine learning, and languages."
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
          Scroll to top - Yuto Kuroki's Profile
          </div>

          {/* Right follow button */}
          <a
            href="https://www.linkedin.com/in/yuto-kuroki-a5b32b383/"
            target="_blank"
            className="ml-auto px-4 py-2 text-base font-medium text-white bg-blue-900 rounded-full shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-105 whitespace-nowrap"
          >
            See LinkedIn
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


              <h1 className="text-4xl font-semibold">Yuto Kuroki</h1>
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
                <br/>Founder / Developer & Operator
              </p>

       
              <div className="relative h-30 w-30 sm:h-36 sm:w-36 rounded-full overflow-hidden bg-neutral-200">
                <Image
                  src="/images/profile2.JPG"
                  alt="Profile of Yuto Kuroki"
                  fill
                  sizes="(max-width: 640px) 12rem, 12rem"
                  className="object-cover"
                  priority
                  quality={100}
                />
              </div>

              <p className="text-sm">
                <strong className="block text-base">Freshman at Waseda University School of Fundamental Science and Engineering</strong>
                <span className="block mt-1">
                  I have a strong interest in software engineering, machine learning, and cross-cultural communication. I combine technical research with international experience to bridge innovation and global collaboration.
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
              <h2 className="text-xl font-medium"><strong>About Me</strong></h2>
              <p className="mt-3 leading-7 text-neutral-800">
                My experiences span <strong>international science competitions, software development, 
                  public speaking, and cross-cultural programs. {" "}</strong> 
                  I have represented Japan at global events such as <strong>ISEF</strong> and Jugendkurs Deutsch plus Beruf, 
                  merging technical expertise with international communication skills.
              </p>

              <br />

              <h2 className="text-xl font-medium flex items-center gap-2">
              {/* Title */}
              <strong>Project Fluence</strong>

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
              I founded {" "}
               <Link
                  aria-label="Scroll to top"
                  href="/extra"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <strong>Project Fluence</strong>
                </Link>
              {" "}to help more people in Japan achieve their dreams through English skills and their areas of expertise.
              I personally handle its development and operations.
              At Project Fluence, I will share effective English learning methods on Note and also provide free English learning apps that I developed myself.
              </p>

              {/* Latest activities */}
              <h2 className="mt-6 text-xl font-medium"><strong>Ongoing Projects</strong></h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800">
                <li>React + FastAPI — Development of Project Fluence’s English learning app {" "}
                  <a
                    className="underline"
                    href="https://vocabstream.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>VocabStream</strong>
                  </a>
                </li>
                <li>React + FastAPI + LLM API — Development of Project Fluence’s English learning app <strong>SpeakwiseGPT</strong>
                </li>
                <li>Raspberry Pi（Python） — Facial Recognition System （WASEDAものづくりProgram）</li>
              </ul>

              <h2 className="mt-6 text-xl font-medium"><strong>Latest Apps coming soon</strong></h2>
              <p className="mt-2 text-neutral-900">
                English vocabulary learning app{" "}
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

             {/* Academic Records */}
            <section className="mt-6">
              <h2 className="text-xl font-medium"><strong>GPA at Waseda University</strong></h2> 
                <p className="mt-2 text-base">     
                US Scale (Unweighted A・A+ =4.0): <strong>4.0 </strong>/ 4.0
                <br/>
                US Scale (Weighted, A+=4.3): <strong>4.27 </strong>/ 4.0
                <br/>
                Waseda University Scale (A=3, A+=4): <strong>3.89 </strong>/ 4.0
                </p> 
            </section>

            {/* Upcoming Activities & Articles */}
            <section className="mt-6">
              <h2 className="text-xl font-medium"><strong>Upcoming Activities</strong></h2>
              <ul className="mt-3 list-disc pl-6 text-neutral-800">
                <li>
                  <strong>Oct 26, 2025:{" "}</strong>
                  Presenting drone research as an NSS member at{" "}
                  <a
                    className="underline"
                    href="https://www.jst.go.jp/sis/scienceagora/2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Science Agora
                  </a>
                  {" "}by JST — Tokyo Telecom Center
                </li>
                <li>
                  <strong>Dec 2025:{" "}</strong>
                  Supporting the final round of {" "}
                  <a
                    className="underline"
                    href="https://manabu.asahi.com/jsec/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JSEC
                  </a>
                </li>
              </ul>

              <h2 className="mt-6 text-xl font-medium"><strong>Latest Note Articles</strong></h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800">
                {noteArticles.map((title) => (
                  <li key={title} className="py-0.5">
                    coming soon
                    <a href="#" className="underline" target="_blank" rel="noopener noreferrer">{title}</a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Research & Awards */}
            <section className="mt-6">
              <h2 className="text-xl font-medium"><strong>Research & Awards</strong></h2>

              <ul className="mt-3 list-disc pl-6 text-neutral-800">
                <li>
                  <a
                    href="https://isef.net/project/robo024-novel-medical-drone-delivery-using-k-means-and-tsp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    <strong>ISEF 2025 Finalist</strong>
                  </a>
                  — Columbus, Ohio (Robotics & Intelligent Machines Category)
                </li>
                <li>
                  <a
                    href="https://manabu.asahi.com/jsec/2024/award/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    <strong>JSEC 2025 Finalist & Sony Award (8th nationally)</strong>
                  </a>
                  — Research on drone delivery optimization
                </li>
                <li>
                  <a
                    href="https://www.ciec.or.jp/special/entry-1484.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    2025 CIEC Spring Conference 1st Place (U-18)
                  </a>
                  — Research on efficient autonomous drone deliveries
                </li>
                <li>
                  <a
                    href="https://www.ciec.or.jp/special/entry-1436.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    2024 CIEC Spring Conference 3rd Place (U-18)
                  </a>
                  — Research on autonomous obstacle avoidance system 
                </li>
                <li>
                  <a href="https://www.goethe.de/resources/files/pdf315/japanheute_2024.pdf" target="_blank" rel="noopener noreferrer" className="underline">
                    Jugendkurs Deutsch plus Beruf
                  </a>
                  — First Japansese scholarship recipient (Dieter Schwarz Foundation), visits to leading universities, companies, and AI seminars in Germany
                </li>
              </ul>


              <h2 className="mt-6 text-xl font-medium"><strong>Honors</strong></h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800">
                <li>
                  <a href="https://www.mext.go.jp/b_menu/houdou/2025/1416581_00001.htm" target="_blank" rel="noopener noreferrer" className="underline">Minister of Education, Culture, Sports, Science and Technology Special Award</a>
                </li>

                <li>Kato Yamazaki Scholarship Honor Recipient (with Special Commendation)</li>
                <li>Tokyo Metropolitan Government Outstanding Cultural Activities Award</li>
                <li>Waseda University Senior High School Academic Excellence Award (1st among 485 students)</li>
              </ul>
            </section>

            {/* Skills & Languages */}
            <section className="mt-6 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-medium"><strong>Technical Skills</strong></h2>
                <ul className="mt-3 list-disc pl-6 text-neutral-800">
                  <li>Web & App: React, FastAPI, Next.js (This page was created with React + Next.js)</li>
                  <li>Programming: Python, C++, TypeScript</li>
                  <li>Hardware & Robotics: Drone programming, Raspberry Pi, Arduino, CAD</li>
                  <li>Optimization・ML: TSP, clustering</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-medium"><strong>Language Skills</strong></h2>
                <ul className="mt-3 list-disc pl-6 text-neutral-800">
                  <li>English — TOEFL iBT 116/120, TOEIC 990/990, 
                    <br/>Eiken Grade 1 (top 1% score at 14 years old),
                    <br/>SAT 1530/1600
                  </li>
                  <li>German — Goethe Zertifikat C1 (CEFR C1)</li>
                  <li>Others — Basic Swedish </li>
                </ul>
              </div>
            </section>

            {/* Education & Experience */}
            <section className="mt-6">
              <h2 className="text-xl font-medium"><strong>Education & International Experience</strong></h2>
              <ul className="mt-3 list-disc pl-6 text-neutral-800">
                <li>Waseda University (Current) — School of Fundamental Science and Engineering
                </li>
                <li>Waseda University Senior & Junior High School</li>
                <li>Novi Middle School, Michigan, USA</li>
                <li>Childhood in Singapore (2011–2013)</li>
              </ul>

              <h2 className="mt-6 text-xl font-medium"><strong>Past Activities & Presentations</strong></h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800">
                <li>Toshiba Youth Club Asia (Team Leader)</li>
                <li>
                  <a href="https://spice.fsi.stanford.edu/fellowship/stanford-e-japan" target="_blank" rel="noopener noreferrer" className="underline">
                    Stanford E-Japan 2023 graduate
                  </a>
                </li>
                <li>Presentations at SAP Japan, Sony AI, Sony Corporation, Aerosense, Bosch Japan</li>
                <li>
                  <a href="https://www.hana.hs.kr/symposium/03_paper.html" target="_blank" rel="noopener noreferrer" className="underline">
                    Hana Academy Seoul International Symposium
                  </a>
                  — Presenter & Moderator
                </li>
                <li>School representative speech to 1000+ prospective students and families</li>
                <li>Presentation at Goethe Institut Tokyo</li>
              </ul>
            </section>

            {/* Media & Links */}
            <section className="mt-6">
              <h2 className="text-xl font-medium"><strong>Media & Links</strong></h2>
              <ul className="mt-3 list-disc pl-6 text-neutral-800">
                <li>Asahi Newspaper, Morning Edition, December 10, 2024 and December 22, 2024</li>
                <li>
                  <a href="https://manabu.asahi.com/jsec/2024/actibook/?detailFlg=0&pNo=12" target="_blank" rel="noopener noreferrer" className="underline">
                    JSEC 2025 Newsletter
                  </a>
                </li>
                <li>August 2025 さぴあ magazine</li>
                <li>
                  <a href="https://www.youtube.com/watch?v=Vlgrx-uviHo" target="_blank" rel="noopener noreferrer" className="underline">
                    PASCH Goethe Institut official YouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.asahi.com/articles/ASSDK2FK0SDKPLBJ001M.html" target="_blank" rel="noopener noreferrer" className="underline">
                    Asahi Newspaper Digital
                  </a>
                </li>

                <li>
                  Waseda University Senior High School website:{" "}
                  <a
                    href="https://www.waseda.jp/school/shs/news/2024/04/05/8235/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline mr-4"
                  >
                    CIEC2024 award
                  </a>
                  <a
                    href="https://www.waseda.jp/school/shs/news/2025/04/25/9556/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline mr-4"
                  >
                    CIEC2025 award
                  </a>
                  <a
                    href="https://www.waseda.jp/school/shs/news/2024/12/27/9173/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    JSEC Finalist Sony Award
                  </a>
                </li>
              </ul>
              <h2 className="mt-6 text-xl font-medium"><strong>Other Skills & Hobbies</strong></h2>
              <p className="mt-3 text-neutral-800">
                Public speaking, language teaching, event organization, tennis, solving complex Rubik's cubes, juggling, cooking, jump rope
              </p>
            </section>

            {/* Footer */}
            <footer className="mt-12 border-t pt-6 text-sm text-neutral-700">
              © {currentYear} Yuto Kuroki
            </footer>
          </section>
        </div>
      </main>
    </>
  );
}
