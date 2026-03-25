export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black py-8">
      <div className="mx-auto w-[794px] bg-white px-[42px] py-[34px] text-black shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-[30px] font-bold leading-none">Kyeongmo Kang</h1>
          <p className="mt-[6px] text-[14px] leading-none text-blue-500">
            austinkang7777@gmail.com | {" "}
            <a
              href="https://www.linkedin.com/in/austinswe"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              https://www.linkedin.com/in/austinswe
            </a>
          </p>
        </header>

        {/* Work Experience */}
        <section className="mt-[22px]">
          <h2 className="border-b border-black pb-[2px] text-[15px] font-bold uppercase leading-none tracking-[0.02em]">
            Work Experience
          </h2>

          {/* Rakuten */}
          <div className="mt-[10px]">
            <div className="flex items-baseline justify-between text-[14px] leading-[1.2]">
              <div className="font-bold">Rakuten</div>
              <div>Tokyo, Japan</div>
            </div>
            <div className="mt-[1px] flex items-baseline justify-between text-[14px] leading-[1.2]">
              <div className="italic font-bold underline">
                Software Application Engineer
              </div>
              <div>
                
              </div>
              <div>Mar 2026 - Present</div>
            </div>

            <ul className="mt-[4px] list-disc pl-[18px] text-[13px] leading-[1.38]">
              <li>
                Contribute to the development and maintenance of payment backend
                systems using <b>Java (Spring Boot)</b>, supporting high-throughput
                transaction processing and ensuring system reliability in
                production environments.
              </li>
              <li>
                Design and implement RESTful APIs and backend services, focusing
                on <b>scalability, fault tolerance, and clean architecture</b>.
              </li>
              <li>
                Collaborate with cross-functional teams (frontend,
                infrastructure, QA) to deliver stable payment solutions and
                improve system observability and performance.
              </li>
              <li>
                Analyze and troubleshoot production issues across distributed
                systems, leveraging prior experience in <b>SQL, system debugging,
                and root cause analysis</b> to minimize downtime.
              </li>
              <li>
                Optimize database interactions and transaction handling using <b>JPA
                and relational database principles</b>, reducing latency and
                improving consistency in financial data processing.
              </li>
              <li>
                Continuously improve code quality and maintainability through <b>refactoring, modular design, and adherence to backend best
                practices</b>.
              </li>
            </ul>
          </div>

          {/* Genus */}
          <div className="mt-[10px]">
            <div className="flex items-baseline justify-between text-[14px] leading-[1.2]">
              <div className="font-bold">Genus Technologies</div>
              <div>Minneapolis, Minnesota, USA</div>
            </div>
            <div className="mt-[1px] flex items-baseline justify-between text-[14px] leading-[1.2]">
              <div className="italic font-bold underline">
                Associate Support Engineer
              </div>
              <div>June 2025 – Jan 2026</div>
            </div>

            <ul className="mt-[4px] list-disc pl-[18px] text-[13px] leading-[1.38]">
              <li>
                Developed Python and Bash automation tools that reduced
                repetitive troubleshooting workloads by 25%, lowering human
                error and accelerating issue resolution across enterprise
                customer environments.
              </li>
              <li>
                Improved end-to-end system reliability by identifying root
                causes across application servers, databases, ODBC layers, and
                storage paths; implemented configuration fixes and collaborated
                with developers to deliver <b>production-ready stability
                improvements</b>.
              </li>
              <li>
                Conducted deep-dive SQL investigation on customer databases —
                diagnosing connection pool failures, dropped connections, faulty
                processes, and inconsistent records — and coordinated
                remediation to restore correct pipeline behavior.
              </li>
              <li>
                Refactored legacy operational and SQL/ODBC-driven scripts into
                modular, maintainable utilities, reducing long-term technical
                debt and improving the accuracy of mission-critical data
                workflows.
              </li>
            </ul>
          </div>

          {/* Iowa State */}
          <div className="mt-[10px]">
            <div className="flex items-baseline justify-between text-[14px] leading-[1.2]">
              <div className="font-bold">Iowa State University</div>
              <div>Ames, IA, USA</div>
            </div>
            <div className="mt-[1px] flex items-baseline justify-between text-[14px] leading-[1.2]">
              <div className="italic font-bold underline">Teaching Assistant</div>
              <div>Aug 2022 – Dec 2022</div>
            </div>

            <ul className="mt-[4px] list-disc pl-[18px] text-[13px] leading-[1.38]">
              <li>
                Supported academic instruction for computer science courses by <b>assisting students with programming concepts and assignments</b>.
              </li>
              <li>
                Enhanced student comprehension by <b>reviewing code submissions and</b>
                providing tailored feedback.
              </li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mt-[18px]">
          <h2 className="border-b border-black pb-[2px] text-[15px] font-bold uppercase leading-none tracking-[0.02em]">
            Technical Skills
          </h2>

          <div className="mt-[6px] space-y-[2px] text-[13px] leading-[1.38]">
            <p>
              <span className="font-bold">Languages &amp; Data Processing:</span>{" "}
              Python, SQL, PySpark, Java, JavaScript, TypeScript, C, OCaml, C++
            </p>
            <p>
              <span className="font-bold">Systems, DevOps &amp; Tools:</span>{" "}
              Docker, Jenkins, GitLab, GitHub, CI/CD, Bash, Linux/Unix, ODBC,
              AWS
            </p>
            <p>
              <span className="font-bold">Databases &amp; Frameworks:</span>{" "}
              Spring, PostgreSQL, MySQL, MongoDB, Node.js, Express.js, React.js
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mt-[18px]">
          <h2 className="border-b border-black pb-[2px] text-[15px] font-bold uppercase leading-none tracking-[0.02em]">
            Education
          </h2>

          <div className="mt-[10px]">
            <div className="flex items-baseline justify-between text-[14px] leading-[1.2]">
              <div className="font-bold">University of Minnesota - Twin Cities</div>
              <div>Minneapolis, MN</div>
            </div>
            <div className="mt-[1px] flex items-baseline justify-between text-[14px] leading-[1.2]">
              <div>Bachelor of Science: Computer Science</div>
              <div>May 2025</div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-[18px]">
          <h2 className="border-b border-black pb-[2px] text-[15px] font-bold uppercase leading-none tracking-[0.02em]">
            Projects
          </h2>

          <div className="mt-[10px]">
            <div className="grid grid-cols-[1fr_auto] gap-4 text-[14px] leading-[1.2]">
              <div className="font-bold">
                RAG-QA Search Bar Integration{" "}
                <span className="font-normal">
                  (Polymer, HTML, CSS, JavaScript, Node,js, Python, Docker)
                </span>
              </div>
              <div className="shrink-0 text-right">
                Sept 2024 – Dec 2024
              </div>
            </div>

            <ul className="mt-[4px] list-disc pl-[18px] text-[13px] leading-[1.38]">
              <li>
                Developed a search bar UI and connected it to a RAG system to
                enable dynamic user query handling.
              </li>
              <li>
                Enabled users to search and receive answers based on uploaded
                documents through real-time retrieval and generation.
              </li>
            </ul>
          </div>

          <div className="mt-[10px]">
            <div className="flex items-baseline justify-between text-[14px] leading-[1.2]">
              <div className="font-bold">
                Drone Delivery Project{" "}
                <span className="font-normal">
                  (JavaScript, HTML, CSS, Node.js)
                </span>
              </div>
              <div>Jan 2024 – May 2024</div>
            </div>

            <ul className="mt-[4px] list-disc pl-[18px] text-[13px] leading-[1.38]">
              <li>
                Simulated a drone delivery system with Node.js and real-time
                route tracking APIs in a full-stack web app.
              </li>
              <li>
                Modularized backend logic and UI for scalable delivery
                simulation and dynamic updates.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}