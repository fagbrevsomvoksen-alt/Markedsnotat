# STATUS – Espen & Co Private Wealth Management
*Sist oppdatert: 2026-04-28 (skandinavisk univers + omposisjoneringsplan)*

**App-adresse:** https://fagbrevsomvoksen-alt.github.io/Markedsnotat/
**Repo:** https://github.com/fagbrevsomvoksen-alt/Markedsnotat

---

## Hva er dette prosjektet?

Et ukentlig, regelbasert markedsnotat i simuleringsformat under det fiktive firmanavnet **Espen & Co Private Wealth Management**. Ingen reell kapital, ingen NAV-tilknytning. Formålet er å øve på systematisk markedsanalyse med et fast univers av instrumenter og strenge beslutningsregler.

---

## Status nå

**Versjon:** v7 – skandinavisk-bare univers
**PWA:** Installert på Android-telefon
**Mobilredigering:** Aktiv – hele ukentlig oppdatering skjer i appens Publiser-fane (ingen GitHub-navigering)

### Hva som endret seg 2026-04-28
- Universet smalnet inn til **Norge, Sverige og Danmark** (Finland og Island er ute).
- Aksjer: 46 → ~45 (Norge utvidet til 20, Sverige 15, Danmark 10).
- ETF/indeksfond: 26 → 16 (rene skandinaviske ETFer + nordiske indeksfond på Nordnet).
- Indekser: 13 → 5 (kun OSEBX, OBX, OMXS30, OMXSPI, OMXC25).
- Krypto: behold 2 (XBT-trackerne notert på Stockholm).
- Service Worker: `espen-co-v7-skandinavisk` (bumpet fra v6).
- ASK-kontekst lagt til i Regler-fanen og prompt.md – brukeren handler primært via Aksjesparekonto.
- v6 er frosset i `backup-v6/` med tilbakeruller-instrukser.

### Brukerens portefølje (kjent 2026-04-28)
Total markedsverdi ~62 300 NOK fordelt over to Nordnet-kontoer:
- **Konto 29457330** (antatt ASK): 10 posisjoner, ~57 800 NOK. Tunge: AuAg Silver Bullet (33 %), Nordnet Norge Indeks (28 %), JPM Korea (+17,65 %).
- **Konto 37951043** (antatt VPS): 4 posisjoner, ~2 800 NOK. Alle i tap, mest Norwegian Block Exchange (-54,5 %).

Egen omposisjoneringsplan: `omposisjonering-2026-04-28.md`.

### Mål og rammer
- **Mål:** Egenkapital til bolig, tidshorisont 1,5–2 år.
- **Risikotoleranse:** Brukeren har eksplisitt valgt høy risiko – simuleringen skal speile det.
- **Konto-strategi:** Selg/kjøp innenfor ASK = skattefri rebalansering så lenge midlene blir på kontoen.

### Appen i v7
- Branding: **Espen & Co Private Wealth Management** (uendret)
- Typografi: IBM Plex Serif/Sans/Mono (uendret)
- Fargepalett: mørk blå + papirhvit + antikkgull (uendret)
- Data isolert i `current-note.json` – appen henter via `fetch()`
- Service Worker: network-first for JSON, cache-first for resten

### Seks faner
- **Notat** – fargekodede kort per kategori (KJØP/HOLD/SELG/AVSTÅ)
- **Univers** – skandinavisk fokus, ~68 instrumenter, med filterknapper
- **Regler** – beslutningsrammeverket inkl. UCITS- og ASK-blokk
- **Kilder** – alle datakilder Claude bruker
- **Om** – disclaimers og oppdateringsinstruksjoner
- **Publiser** – ett-trykk prompt-generator + JSON-publisering via GitHub API

---

## Fast univers (skandinavisk – 2026-04-28)

| Kategori | Antall | Detaljer |
|---|---|---|
| Aksjer | 45 | Norge 20, Sverige 15, Danmark 10 |
| ETF + indeksfond | 17 | XACT-ETFer, Nordnet indeksfond, KLP/DNB/Storebrand fond, ODIN, gearing – alle med verifiserte ISIN-er |
| Indekser | 5 | OSEBX, OBX, OMXS30, OMXSPI, OMXC25 |
| Krypto (ETP) | 2 | BITCOIN XBT, ETHEREUM XBT (Nasdaq Stockholm) |

**Totalt: 69 instrumenter.** Definert som JS-konstant `UNIVERSE` i `index.html` – brukes både til å rendre Univers-fanen og til å bygge prompten i Publiser-fanen.

---

## Nyeste notat

**Uke 17 · 2026-04-26 · Utgave 1** (basert på *gammelt* univers før omleggingen)

| Kategori | Instrument | Handling | Størrelse |
|---|---|---|---|
| Aksjer | NVDA | KJØP | 0,8 % |
| ETF | VUAA (UCITS) | KJØP | 0,5 % |
| Indeks | S&P 500 | HOLD | – |
| Krypto | BTC | AVSTÅ | 0 |

⚠️ **NB:** Disse instrumentene (NVDA, VUAA, SPX) er ikke lenger i universet. Neste ukentlige notat (uke 18) skal lages med **skandinavisk univers**.

---

## Ukentlig rutine (mobil-vennlig)

1. På mobilen: be Claude *«Lag ukentlig markedsnotat for uke X – levér som JSON for current-note.json»*
2. Claude søker opp markedsdata, anvender reglene mot **skandinavisk univers**, leverer ferdig JSON
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

- [ ] Lag ukentlig markedsnotat for **uke 18** med skandinavisk univers
- [ ] Vurder å erstatte `current-note.json` med et "uke 18 omstart"-notat når omposisjoneringen er gjennomført
- [ ] Vurder å legge til en **historikk-fane** som arkiverer tidligere ukers JSON-filer i `notater/`-mappen
- [ ] Eventuelt legge til Finland (Nokia, Kone) hvis "skandinavisk" skal utvides til "nordisk"

### Avsluttede oppgaver (2026-04-28)
- ✅ Backup av v6 til `backup-v6/` med README og tilbakeruller-instruksjoner
- ✅ UNIVERSE skrevet om til skandinavisk i `index.html`
- ✅ `prompt.md` oppdatert til skandinavisk univers + ASK-kontekst
- ✅ Service Worker bumpet til `espen-co-v7-skandinavisk`
- ✅ View-lede og UCITS-blokk i Regler-fanen oppdatert
- ✅ Omposisjoneringsnotat skrevet (`omposisjonering-2026-04-28.md`)
- ✅ Alle 17 ETF/fond verifisert mot Nasdaq Stockholm/Morningstar/DNB/Nordnet med korrekte ISIN-er

### Avsluttede oppgaver (siste sesjon, 2026-04-26)
- ✅ Verifisert IGLN, AGGG og BRK.B på norsk Nordnet (nå utenfor univers)
- ✅ Byttet VTI → VUAA (UCITS) i notat og app (nå utenfor univers)
- ✅ Skilt ut data til `current-note.json` for mobil-redigering
- ✅ Designløft til institusjonell stil (Espen & Co)
- ✅ Service Worker oppgradert med network-first for JSON
- ✅ PWA-manifest oppdatert med ny branding
- ✅ Bygget Publiser-fane med GitHub API + Personal Access Token
- ✅ Lagt til prompt-generator som kopierer ferdig prompt med ett trykk
- ✅ Bygget Kilder-fane med alle datakilder Claude bruker

---

## Filer i denne mappen

| Fil | Beskrivelse |
|---|---|
| `index.html` | Selve appen – nå skandinavisk univers |
| `current-note.json` | **Ukens notat** – det er denne du redigerer hver uke |
| `service-worker.js` | PWA-cache (versjon `espen-co-v7-skandinavisk`) |
| `manifest.json` | PWA-metadata med Espen & Co-branding |
| `prompt.md` | Markedsnotat-prompt for skandinavisk univers |
| `omposisjonering-2026-04-28.md` | Engangs-omposisjoneringsplan basert på Nordnet-portefølje |
| `notat-2026-04-26.md` | Uke 17-notat i markdown (gammelt univers, arkiv) |
| `deploy-github-pages.md` | Oppskrift for første gangs oppsett og ukentlig oppdatering |
| `STATUS.md` | Denne filen |
| `icons/` | App-ikoner for PWA |
| `backup-v6/` | Frossen kopi av v6-appen (rull tilbake hvis du angrer) |
