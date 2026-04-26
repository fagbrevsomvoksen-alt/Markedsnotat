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

## Del 3 – Slik oppdaterer du appen hver uke

Etter at Claude har laget nytt ukesnotat og oppdatert `index.html`:

1. Gå til github.com og åpne `markedsnotat`-prosjektet
2. Trykk på **`index.html`** i fillisten
3. Trykk på **blyant-ikonet** (Edit this file) øverst til høyre
4. Trykk på de tre prikkene (···) → velg **Upload file**

*(Alternativt: gå tilbake til prosjektsiden og dra den nye `index.html` rett inn)*

5. Dra den oppdaterte `index.html` fra finans-mappen inn
6. Trykk **Commit changes**

Appen på telefonen oppdaterer seg automatisk neste gang du åpner den.

---

## Husk

Hver gang du oppdaterer appen bytter Claude også ut `CACHE_VERSION` i `service-worker.js` så telefonen henter den nye versjonen automatisk. Du trenger ikke tenke på det selv.
