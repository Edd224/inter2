// src/components/Contact.tsx

export default function Contact() {
  return (
    <section className="container mx-auto px-4 py-12" id="kontakt">
      <h2 className="text-3xl font-bold mb-6">Kontaktujte ma</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Kontaktné údaje</h3>
        <p><strong>Meno:</strong> Eduard Herák</p>
        <p><strong>Adresa:</strong> Halalovka 38, Trenčín 91108</p>
        <p><strong>Telefón: </strong> 0948 373 908</p>
        <p><strong>Email: </strong> 
          <a href="mailto:eduard.herakk@gmail.com" className="text-cyan-700 underline">
            eduard.herakk@gmail.com
          </a>
        </p>
        <p><strong>Portfólio: </strong> 
          <a href="https://herak-portfolio.netlify.app" target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline">
            herak-portfolio.netlify.app
          </a>
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Sociálne siete</h3>
        <ul className="list-disc list-inside text-cyan-700">
          <li><a href="https://www.linkedin.com/in/eduard-herak/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/eduardherak" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Referencie</h3>
        <ul className="list-disc list-inside text-cyan-700">
          <li><a href="https://sunizer.cz/" target="_blank" rel="noopener noreferrer">sunizer.cz</a></li>
          <li><a href="https://spin-robotics.com/" target="_blank" rel="noopener noreferrer">spin-robotics.com</a></li>
          <li><a href="https://serafinbyliny.cz/" target="_blank" rel="noopener noreferrer">serafinbyliny.cz</a></li>
          <li><a href="https://czechopes.cz/" target="_blank" rel="noopener noreferrer">czechopes.cz</a></li>
        </ul>
      </div>

      {/* Ak chceš pridať formulár na kontakt, môžeš to jednoducho pridať sem. */}
    </section>
  );
}
