// src/components/About.tsx

export default function About() {
  return (
    <section className="container mx-auto px-4 py-12" id="o-mne">
      <h2 className="text-3xl font-bold mb-6">O mne</h2>

      {/* Príbeh */}
      <div className="mb-6">
        <p className="text-lg leading-relaxed">
          Som kreatívec s umeleckým aj technickým myslením. Pracujem precízne a s vášňou pre každý projekt –
          či už ide o dizajn interiérov, programovanie alebo grafiku. Mám skúsenosti s vedením tímu aj s vývojom moderných webových riešení.
        </p>
      </div>

      {/* Technické zručnosti */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Technické zručnosti</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 list-disc list-inside">
          <li>HTML / CSS</li>
          <li>Tailwind / Sass / Less</li>
          <li>React.js / React Native</li>
          <li>Next.js / Inertia.js</li>
          <li>Typescript</li>
          <li>Figma / Adobe balík / Photoshop</li>
          <li>Git, GitHub, GitLab</li>
          <li>SketchUp / Twinmotion / LayOut</li>
          <li>Webpack</li>
        </ul>
      </div>

      {/* Kontaktné údaje */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Kontakt</h3>
        <p><strong>Meno:</strong> Eduard Herák</p>
        <p><strong>Adresa:</strong> Halalovka 38, Trenčín 91108</p>
        <p><strong>Telefón:</strong> 0948 373 908</p>
        <p><strong>Email:</strong> <a href="mailto:eduard.herakk@gmail.com" className="text-cyan-700 underline">eduard.herakk@gmail.com</a></p>
        <p><strong>Portfólio:</strong> <a href="https://herak-portfolio.netlify.app" target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline">herak-portfolio.netlify.app</a></p>
      </div>

      {/* Pracovné skúsenosti */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Pracovné skúsenosti</h3>
        <ul className="list-disc list-inside">
          <li>PARADIGMA – React developer (2021 – 2024)</li>
          <li>For Best Clients s.r.o – React / Next developer</li>
          <li>ASKOLL SLOVAKIA s.r.o – Líder vo výrobe (2009 – 2023)</li>
        </ul>
      </div>

      {/* Referencie */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Referencie</h3>
        <ul className="list-disc list-inside text-cyan-700">
          <li><a href="https://sunizer.cz/" target="_blank" rel="noopener noreferrer">sunizer.cz</a></li>
          <li><a href="https://spin-robotics.com/" target="_blank" rel="noopener noreferrer">spin-robotics.com</a></li>
          <li><a href="https://serafinbyliny.cz/" target="_blank" rel="noopener noreferrer">serafinbyliny.cz</a></li>
          <li><a href="https://czechopes.cz/" target="_blank" rel="noopener noreferrer">czechopes.cz</a></li>
        </ul>
      </div>

      {/* Vzdelanie */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Vzdelanie</h3>
        <p>Stredné odborné učilište strojárensko-technologické<br />Mechanik opravár cestných motorových vozidiel (2009 – 2013)</p>
      </div>
    </section>
  );
}
