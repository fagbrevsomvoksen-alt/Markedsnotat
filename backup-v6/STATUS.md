# STATUS – Espen & Co Private Wealth Management
*Sist oppdatert: 2026-04-26 (kveld – utvidet univers + Kilder-fane)*

**App-adresse:** https://fagbrevsomvoksen-alt.github.io/Markedsnotat/
**Repo:** https://github.com/fagbrevsomvoksen-alt/Markedsnotat

---

## Hva er dette prosjektet?

Et ukentlig, regelbasert markedsnotat i simuleringsformat under det fiktive firmanavnet **Espen & Co Private Wealth Management**. Ingen reell kapital, ingen NAV-tilknytning. Formålet er å øve på systematisk markedsanalyse med et fast univers av instrumenter og strenge beslutningsregler.

---

## Status nå

**Versjon:** v6 (utvidet univers, Kilder-fane, Publiser-fane med GitHub API + prompt-generator)
**PWA:** Installert på Android-telefon
**Mobilredigering:** Aktiv – hele ukentlig oppdatering skjer i appens Publiser-fane (ingen GitHub-navigering)

### Appen i v3
- Branding: **Espen & Co Private Wealth Management**
- Typografi: IBM Plex Serif/Sans/Mono via Google Fonts
- Masthead: stor seriff-tittel med italic ampersand i gull, metadata-rad med uke/dato/utgave
- Brødtekst: 14,5 px (opp fra 13)
- Fargepalett: mørk blå (#0F1B2D) + papirhvit (#F4F1EA) + antikkgull (#B89A4E)
- Data isolert i `current-note.json` – appen henter via `fetch()`
- Service Worker: network-first for JSON, cache-first for resten

### Seks faner
- **Notat** – fargekodede kort per kategori (KJØP/HOLD/SELG/AVSTÅ)
- **Univers** – kuratert utvalg fra Nordnet, ~85 instrumenter, med filterknapper
- **Regler** – beslutningsrammeverket inkl. UCITS-blokk
- **Kilder** – alle datakilder Claude bruker (markedsdata, makro, børser)
- **Om** – disclaimers og oppdateringsinstruksjoner
- **Publiser** – ett-trykk prompt-generator + JSON-publisering via GitHub API

---

## Fast univers (utvidet 2026-04-26)

| Kategori | Antall | Detaljer |
|---|---|---|
| Aksjer | 46 | Norge (12), Sverige (5), Danmark (4), Finland (2), USA (15), Europa (8) |
| ETF (UCITS) | 26 | Brede (6) + Sektor (6) + Faktor (4) + Norden (2) + Renter (4) + Råvarer (1) + Dividend/ESG (2) + IGLN |
| Indekser | 13 | Norden (3) + USA (4 m/VIX) + Europa (3) + Asia (2) + Globalt (1) |
| Krypto (ETP) | 2 | BITCOIN XBT, ETHEREUM XBT (CoinShares via Nordnet) |

**Totalt: ~87 instrumenter.** Definert som JS-konstant `UNIVERSE` i `index.html` – brukes både til å rendre Univers-fanen og til å bygge prompten i Publiser-fanen.

---

## Nyeste notat

**Uke 17 · 2026-04-26 · Utgave 1**

| Kategori | Instrument | Handling | Størrelse |
|---|---|---|---|
| Aksjer | NVDA | KJØP | 0,8 % |
| ETF | VUAA (UCITS) | KJØP | 0,5 % |
| Indeks | S&P 500 | HOLD | – |
| Krypto | BTC | AVSTÅ | 0 |

Regime: **Risiko-på** – S&P 500/NASDAQ på rekordnivå, VIX 18,7, US-Iran våpenhvile forlenget.

Lagret i: `current-note.json` (live) og `notat-2026-04-26.md` (arkiv)

---

## Ukentlig rutine (mobil-vennlig)

1. På mobilen: be Claude *«Lag ukentlig markedsnotat for uke X – levér som JSON for current-note.json»*
2. Claude søker opp markedsdata, anvender reglene, leverer ferdig JSON (~50 linjer)
3. Åpne GitHub-appen → `Markedsnotat`-repo → `current-note.json` → blyant/edit
4. Lim inn ny JSON → Commit
5. Telefon-appen oppdaterer seg automatisk neste gang du åpner den

Detaljerte steg i `deploy-github-pages.md`.

---

## Slik bruker du appen

**Primær:** https://fagbrevsomvoksen-alt.github.io/Markedsnotat/ i nettleser eller PWA på telefon.

**Lokalt på Mac:** Dobbelklikk `index.html` – men bruk **Safari**, ikke Chrome (Chrome blokkerer fetch av lokale JSON-filer).

---

## Åpne spørsmål / neste steg

- [ ] Lag ukentlig markedsnotat for **uke 18** (mandag 2026-04-27 og utover)
- [ ] Vurder å legge til en **historikk-fane** som arkiverer tidligere ukers JSON-filer i `notater/`-mappen
- [ ] Vurder å oppdatere PWA-ikoner med nytt **Espen & Co-monogram**
- [ ] Eventuelle videre design-justeringer etter at du har sett v3 i bruk en uke

### Avsluttede oppgaver (siste sesjon)
- ✅ Verifisert IGLN, AGGG og BRK.B på norsk Nordnet
- ✅ Byttet VTI → VUAA (UCITS) i notat og app
- ✅ Skilt ut data til `current-note.json` for mobil-redigering
- ✅ Designløft til institusjonell stil (Espen & Co)
- ✅ Service Worker oppgradert med network-first for JSON
- ✅ PWA-manifest oppdatert med ny branding
- ✅ Bygget Publiser-fane med GitHub API + Personal Access Token
- ✅ Lagt til prompt-generator som kopierer ferdig prompt med ett trykk
- ✅ Utvidet univers fra 20 til ~87 instrumenter (kuratert fra Nordnet)
- ✅ Lagt til filterknapper i Univers-fanen (Alle / Aksjer / ETF / Indekser / Krypto)
- ✅ Bygget Kilder-fane med alle datakilder Claude bruker
- ✅ Service Worker bumpet til v6

---

## Filer i denne mappen

| Fil | Beskrivelse |
|---|---|
| `index.html` | Selve appen – henter data fra `current-note.json` |
| `current-note.json` | **Ukens notat** – det er denne du redigerer hver uke |
| `service-worker.js` | PWA-cache (versjon `espen-co-v3`) |
| `manifest.json` | PWA-metadata med Espen & Co-branding |
| `prompt.md` | Markedsnotat-prompt med UCITS-krav |
| `notat-2026-04-26.md` | Uke 17-notat i markdown (arkivversjon) |
| `deploy-github-pages.md` | Oppskrift for første gangs oppsett og ukentlig oppdatering |
| `STATUS.md` | Denne filen |
| `icons/` | App-ikoner for PWA |
