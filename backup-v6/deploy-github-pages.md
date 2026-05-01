# Slik legger du Markedsnotat på telefonen

Samme metode som Japan Journey – via GitHub Pages. Da får appen en ekte internettadresse og kan installeres på Android akkurat som en vanlig app.

Du trenger bare gjøre **første del én gang**. Deretter er det bare ett steg for å oppdatere appen hver uke.

---

## Del 1 – Første gangs oppsett (gjøres én gang)

**Steg 1 – Logg inn på GitHub**
Gå til github.com i nettleseren på Mac-en. Logg inn med brukeren du lagde til Japan Journey.

**Steg 2 – Lag et nytt prosjekt**
- Trykk på **+**-ikonet øverst til høyre
- Velg **New repository**
- Gi det navnet: `markedsnotat`
- Velg **Public**
- La alle avkrysningsbokser stå tomme
- Trykk **Create repository**

**Steg 3 – Last opp filene**
- På siden som dukker opp, trykk på **uploading an existing file**
- Åpne finans-mappen på skrivebordet ditt
- Marker alle filene (Cmd+A) og dra dem inn i GitHub-vinduet. Pass på at du drar **filene**, ikke selve mappen. Det skal være:
  - `index.html`
  - `manifest.json`
  - `service-worker.js`
  - `icons/`-mappen
- Scroll ned, skriv `Første opplasting` i meldingsfeltet
- Trykk **Commit changes**

**Steg 4 – Slå på GitHub Pages**
- Trykk på **Settings** i menyen øverst i prosjektet
- Trykk på **Pages** i venstremenyen
- Under «Source», velg **Deploy from a branch**
- Under «Branch», velg **main** og **(root)**
- Trykk **Save**

**Steg 5 – Finn adressen din**
Vent 1–2 minutter. Last siden på nytt. Du vil se:

> Your site is live at **https://DITTBRUKERNAVN.github.io/markedsnotat/**

Skriv ned denne adressen.

---

## Del 2 – Installer appen på Android (gjøres én gang)

1. Åpne **Chrome** på Android-telefonen
2. Gå til adressen du fant i steg 5 ovenfor
3. Trykk på de **tre prikkene** øverst til høyre i Chrome
4. Velg **«Installer app»** eller **«Legg til på startskjermen»**
5. Trykk **Installer**

Appen dukker nå opp på startskjermen – akkurat som Japan Journey.

---

## Del 3 – Slik oppdaterer du appen hver uke (NY RUTINE – fra mobil)

Etter at Claude har laget nytt ukesnotat:

### På mobil (anbefalt)
1. Be Claude: *«Lag ukentlig markedsnotat for uke X – levér som JSON for `current-note.json`»*
2. Kopier JSON-en Claude gir deg
3. Åpne **GitHub-appen** eller github.com i Chrome → gå til `Markedsnotat`-repoet
4. Trykk på filen `current-note.json`
5. Trykk på **blyant-ikonet** (Edit)
6. Marker alt innhold (Cmd/Ctrl+A) og lim inn den nye JSON-en
7. Trykk **Commit changes**

Appen på telefonen oppdaterer seg automatisk neste gang du åpner den.

### På Mac (alternativ)
Samme prosess på github.com i Chrome/Safari. Eller dra den nye `current-note.json` fra finans-mappen inn på prosjektsiden via «Add file → Upload files».

---

## Husk

- **Du redigerer kun `current-note.json`** – ikke `index.html`. Det er hele poenget med den nye strukturen.
- Service Worker bruker «network-first» for `current-note.json`, så oppdateringer slår inn umiddelbart.
- Hvis du noen gang endrer selve appen (`index.html`) – Claude bumper også `CACHE_VERSION` i `service-worker.js` så telefonen henter den nye versjonen automatisk.
