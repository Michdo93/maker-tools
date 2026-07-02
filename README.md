# 🔧 Maker Tools

Browserbasierte Werkzeuge für Maker, Elektronik-Enthusiasten und Sicherheitsbewusste – alles läuft lokal, kein Server, keine Datenübertragung.

**Live:** [https://Michdo93.github.io/maker-tools/](https://Michdo93.github.io/maker-tools/)

## Enthaltene Tools

### 🎨 Widerstand-Farbcode-Rechner
Elektrische Widerstände ablesen und berechnen.

- **4-Ring- und 5-Ring-Widerstände** (umschaltbar)
- Interaktive Farbauswahl per Klick auf farbige Kreise
- Visuelle Widerstandsdarstellung (Keramikkörper mit farbigen Ringen)
- Anzeige: Widerstandswert in Ω / kΩ / MΩ + Toleranz in %
- **Wert → Farbcode**: Ohm-Zahl eingeben → 4-Ring-Code anzeigen
- E12-Reihe als Schnellreferenz (10 Ω bis 1 MΩ)

**Unterstützte Farben:** Schwarz, Braun, Rot, Orange, Gelb, Grün, Blau, Violett, Grau, Weiß, Gold, Silber

### #️⃣ Kryptografischer Hash-Generator
Hashes lokal im Browser berechnen – kein Upload, keine externen Anfragen.

- **SHA-1, SHA-256, SHA-384, SHA-512** via WebCrypto API
- **Text hashen** mit Live-Berechnung
- **Datei hashen** – beliebige Dateigröße, komplett lokal
- **Hash vergleichen** – zwei Hashes auf Gleichheit prüfen (Integritätsprüfung)
- Ein-Klick-Kopieren für jeden Hash

> ⚠️ MD5 ist über die WebCrypto API nicht verfügbar (unsicher, nicht standardisiert). Für MD5 bitte ein CLI-Tool verwenden (`md5sum` / `md5`).

### 🔑 Passwort-Generator
Kryptografisch sichere Passwörter mit `crypto.getRandomValues()`.

**Einzel-Passwort:**
- Länge: 8–128 Zeichen (Slider)
- Optionen: Großbuchstaben / Kleinbuchstaben / Zahlen / Sonderzeichen
- Ähnliche Zeichen ausschließen (`0`, `O`, `l`, `1`, `I`)
- Aussprechbarer Modus (nur Buchstaben + Zahlen)
- Stärkeindikator (sehr schwach bis sehr stark)

**Batch-Modus:** 5 Passwörter auf einmal generieren, jedes einzeln kopierbar

**Passphrase (Diceware-Stil):** 3–8 zufällige deutsche Wörter, durch `-` getrennt, leicht merkbar und trotzdem sicher

## Warum lokal?

Alle Berechnungen finden ausschließlich im Browser statt:
- Kein Passwort, kein Hash, keine Eingabe verlässt das Gerät
- Keine externen Bibliotheken für kryptografische Operationen
- Funktioniert offline nach dem ersten Laden (außer Google Fonts)

## Technologie

- **Reines HTML/CSS/JavaScript** – kein Framework, kein npm
- **WebCrypto API** (`crypto.subtle.digest`) für SHA-Hashes
- **`crypto.getRandomValues()`** für kryptografisch sichere Zufallszahlen
- Responsive Design
- Google Fonts: Inter + Outfit + JetBrains Mono

## Deployment (GitHub Pages)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Michdo93/maker-tools.git
git push -u origin main
```

Repository → **Settings → Pages → Source: main / root** → Save

## Struktur

```
maker-tools/
├── index.html              ← Startseite / Übersicht
├── css/style.css           ← Design-System (Dunkelgrau + Gelb)
├── js/nav.js               ← Aktiver Navigationslink
└── pages/
    ├── widerstand.html
    ├── hash.html
    └── passwort.html
```
