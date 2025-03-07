import reactLogo from "./assets/react.svg";
import profihostLogo from "./assets/profihost.svg"; 
// import './App.css'
import "./tutorial.css";
import { useState } from "react";

function AppTutorial() {
  const [step, setStep] = useState(1);

  const steps = [
    {
      title: "Node Version Manager (NVM) installieren",
      description:
        "NVM ermöglicht dir, verschiedene Node.js-Versionen zu verwalten.",
      code: `# Installiere NVM
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# Lade die Umgebungsvariablen neu
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"

# Installiere Node.js LTS
nvm install --lts`,
    },
    {
      title: "React Projekt erstellen",
      description: "Erstelle ein neues React-Projekt mit Vite.",
      code: `# Erstelle ein React Projekt
npm create vite@latest mein-react-app -- --template react-ts

# Wechsle ins Projektverzeichnis
cd mein-react-app

# Installiere Abhängigkeiten
npm install

# Starte den Entwicklungsserver
npm run dev`,
    },
    {
      title: "Service Daemon einrichten",
      description:
        "Erstelle einen Server für deine React-App und richte einen Daemon ein.",
      code: ` 
    # Lade eine vorkonfigurierte Daemon-Datei herunter & Passe die IP Adresse sowie Port an
    wget https://raw.githubusercontent.com/haupt-pascal/profihost-nuxt/main/daemon.sh 
    chmod +x daemon.sh 

    # Nach dem Erstellen der Daemon-Konfigurationsdatei:
    # 1. Logge dich in dein Profihost Kundencenter ein
    # 2. Navigiere zu deinem Server
    # 3. Suche nach der Option "Daemon" oder "Service Daemon"
    # 4. Lade die erstellte daemon.sh Datei auf den Speicherplatz
    # 5. Passe die Pfade innerhalb des Scripts an
    # 6. Hinterlege als Befehl / Script den Pfad zum Script
    # 7. Aktiviere den Daemon
    # Dein Nuxt-Dienst sollte nun automatisch starten und im Falle eines Absturzes neu gestartet werden.
`,
    },
    {
      title: ".htaccess als Reverse Proxy konfigurieren",
      description:
        "Richte einen Apache Reverse Proxy ein, um auf deine React-App zuzugreifen.",
      code: `# Erstelle .htaccess im Webroot
cat > .htaccess << 'EOL'
DirectoryIndex disabled

RewriteEngine On

#RewriteCond %{REQUEST_FILENAME} !-d
#RewriteCond %{REQUEST_FILENAME} !-f

RewriteRule (.*)  http://DAEMON_IP_ADDRESS:3000/$1 [P,L]
EOL`,
    },
  ];

  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Code in die Zwischenablage kopiert!");
    });
  };

  const currentStep = steps[step - 1];

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://profihost.com" target="_blank">
          <img
            src={profihostLogo}
            className="logo profihost"
            alt="Profihost logo"
          />
        </a>
      </div>
      <h1>React auf Profihost</h1>
      <div className="tutorial-nav">
        <button
          onClick={handlePrev}
          disabled={step === 1}
          className={step === 1 ? "disabled" : ""}
        >
          Zurück
        </button>
        <span className="step-indicator">
          Schritt {step} von {steps.length}
        </span>
        <button
          onClick={handleNext}
          disabled={step === steps.length}
          className={step === steps.length ? "disabled" : ""}
        >
          Weiter
        </button>
      </div>
      <div className="tutorial-content">
        <h2>{currentStep.title}</h2>
        <p>{currentStep.description}</p>
        <div className="code-block">
          <pre>{currentStep.code}</pre>
          <button
            className="copy-button"
            onClick={() => copyToClipboard(currentStep.code)}
          >
            Kopieren
          </button>
        </div>
      </div>
      <p className="read-the-docs">
        Entwickle moderne React-Anwendungen auf Profihost-Servern
      </p>
    </>
  );
}

export default AppTutorial;
