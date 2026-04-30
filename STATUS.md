# STATUS – Espen & Co Private Wealth Management
*Sist oppdatert: 2026-04-30 (omlegging mot egenkapital-sparing, 3–4 års horisont)*

**App-adresse:** https://fagbrevsomvoksen-alt.github.io/Markedsnotat/
**Repo:** https://github.com/fagbrevsomvoksen-alt/Markedsnotat

---

## Hva er dette prosjektet?

Et ukentlig, regelbasert markedsnotat i simuleringsformat under det fiktive firmanavnet **Espen & Co Private Wealth Management**. Ingen reell kapital, ingen NAV-tilknytning. Formålet er å øve på systematisk markedsanalyse og sparedisiplin for et konkret kortsiktig mål: **egenkapital til bolig**.

---

## Status nå

**Versjon:** v8 – egenkapital-sparing (kortsiktig horisont)
**PWA:** Installert på Android-telefon
**Mobilredigering:** Aktiv – hele ukentlig oppdatering skjer i appens Publiser-fane (ingen GitHub-navigering)

### Hva som endret seg 2026-04-30
- **Vinkling lagt om fra "hva jeg eier" til "sparemål-progresjon".** Egenkapital-mål, spart-så-langt og månedlig sparetempo vises øverst på Notat-fanen.
- **Risikoprofil senket fra "høy" til "lav-til-moderat"** – matcher 3–4 års horisont og kapitalbevaring som førsteprioritet.
- **Tidshorisont oppdatert fra 1,5–2 år til 3–4 år** (mål-dato: april 2030).
- **Kategoristruktur omorganisert** fra instrumenttype (Aksjer/ETF/Indeks/Krypto) til rolle (Likviditet/Rente/Aksjer/Tematisk).
- **Univers byttet ut** men holdt på ~69 instrumenter: krypto fjernet, enkelt-aksjer kraftig redusert (kun 5 defensive utbytteaksjer beholdt under Tematisk), rentefond og pengemarkedsfond lagt til som hovedvekt.
- **Glidebane** lagt til som regel: aksjeandel trappes ned mot mål-datoen.
- **Drawdown-tak** på 8 % av samlet kapital lagt inn som hard regel.
- **Service Worker:** `espen-co-v8-egenkapital` (bumpet fra v7).
- **`omposisjonering-2026-04-28.md` arkivert** til `arkiv/`.
- v6 og v7-tenking ligger i `backup-v6/` for historikk.

### Mål og rammer
- **Mål:** Egenkapital til bolig – **200 000 kr**.
- **Tidshorisont:** 3–4 år. **Mål-dato: april 2030.**
- **Spart hittil:** 60 000 kr.
- **Månedlig sparing:** 12 000 kr.
- **Risikoprofil:** Lav-til-moderat. Kapitalbevaring veier tyngre enn avkastningsmaksimering.
- **Drawdown-tak:** Maks 8 % på samlet portefølje før reglene tvinger nedtrapping av risiko.
- **Plattform:** Nordnet brukes for handel og sparing. ASK brukes for aksje- og ETF-delen (skatteeffektiv reallokering så lenge midlene blir på kontoen). Rentefond, pengemarkedsfond og høyrentekonto plasseres der vilkårene er best.

### Glidebane (anbefalt allokering over tid)

| Tid til mål | Aksjer | Rente | Likviditet | Tematisk |
|---|---:|---:|---:|---:|
| 4 år (nå) | 25 % | 35 % | 35 % | 5 % |
| 3 år | 20 % | 35 % | 40 % | 5 % |
| 2 år | 12 % | 35 % | 50 % | 3 % |
| 1 år | 5 % | 25 % | 70 % | 0 % |
| 6 mnd | 0 % | 10 % | 90 % | 0 % |

### Appen i v8
- Branding: **Espen & Co Private Wealth Management** (uendret)
- Typografi: IBM Plex Serif/Sans/Mono (uendret)
- Fargepalett: mørk blå + papirhvit + antikkgull (uendret)
- Data isolert i `current-note.json` – appen henter via `fetch()`
- Service Worker: network-first for JSON, cache-first for resten
- **Mål-progresjonsblokk** øverst på Notat-fanen (mål, spart, prosent, måneder igjen)

### Seks faner
- **Notat** – mål-progresjon + fargekodede kort per kategori (KJØP/HOLD/SELG/AVSTÅ + AVSETT)
- **Univers** – ny rolle-basert inndeling, ~69 instrumenter, med filterknapper (Likviditet/Rente/Aksjer/Tematisk)
- **Regler** – beslutningsrammeverk inkl. UCITS, ASK på Nordnet, glidebane og drawdown-tak
- **Kilder** – alle datakilder Claude bruker
- **Om** – disclaimers og oppdateringsinstruksjoner
- **Publiser** – ett-trykk prompt-generator + JSON-publisering via GitHub API

---

## Fast univers (rolle-basert · 2026-04-30)

| Kategori | Antall | Detaljer |
|---|---|---|
| Likviditet | 15 | 7 høyrentekontoer + 8 pengemarkedsfond – kapitalbevaring og full likviditet |
| Rente | 20 | Norske/nordiske obligasjonsfond (kort & mellomlang) + UCITS-rente-ETFer + realrente + HY |
| Aksjer | 20 | Globale UCITS-ETFer + skandinaviske ETFer + lavkost indeksfond på Nordnet |
| Tematisk / Defensiv | 14 | Lavbeta- og utbyttefond, defensive nordiske utbytteaksjer, edelmetall-ETCer |

**Totalt: 69 instrumenter.** Definert som JS-konstant `UNIVERSE` i `index.html` – brukes både til å rendre Univers-fanen og til å bygge prompten i Publiser-fanen. Alle valgt slik at de er tilgjengelige via Nordnet.

---

## Nyeste notat

**Uke 18 · 2026-04-30 · Utgave 2** (første notat etter omleggingen)

| Kategori | Instrument | Handling |
|---|---|---|
| Likviditet | Bank Norwegian Sparekonto | AVSETT |
| Rente | KLP Obligasjon 1 år | KJØP |
| Aksjer | Nordnet Indeksfond Global | HOLD |
| Tematisk | iShares Physical Gold ETC | AVSTÅ |

---

## Ukentlig rutine (mobil-vennlig)

1. På mobilen: be Claude *«Lag ukentlig markedsnotat for uke X – levér som JSON for current-note.json»*
2. Claude søker opp markedsdata, anvender reglene mot universet og glidebanen, leverer ferdig JSON med oppdatert `goal`-blokk
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

- [ ] Følge opp glidebanen kvartalsvis – juster aksjeandel når neste milepæl nærmer seg.
- [ ] Vurder å legge til en **historikk-fane** som arkiverer tidligere ukers JSON-filer.
- [ ] Vurder å vise sparetempo-justering ("for å nå mål må månedlig sparing være ≥ X kr").
- [ ] På sikt: integrer Finansportalen-data for sparekonto-renter (oppdateres ukentlig).

### Avsluttede oppgaver (2026-04-30)
- ✅ STATUS.md ryddet for "hva-jeg-eier"-fokus, oppdatert med nytt mål og horisont
- ✅ omposisjonering-2026-04-28.md flyttet til `arkiv/`
- ✅ prompt.md skrevet om: ny risikoprofil, sparemål, glidebane, drawdown-tak, nytt univers, "Effekt på sparemål"-felt
- ✅ index.html: nye kategorinavn, ny universliste (69 instr.), mål-progresjonsblokk øverst på Notat-fanen, oppdaterte regler/om-tekster
- ✅ current-note.json: skrevet om for uke 18 med ny kategoristruktur og `goal`-blokk
- ✅ Service Worker bumpet til `espen-co-v8-egenkapital`

### Avsluttede oppgaver (2026-04-28)
- ✅ Backup av v6 til `backup-v6/`
- ✅ Skandinavisk omlegging av univers (nå erstattet av rolle-basert struktur)
- ✅ Service Worker bumpet til v7
- ✅ Regler-fane og UCITS-blokk oppdatert

### Avsluttede oppgaver (2026-04-26)
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
| `index.html` | Selve appen – v8, rolle-basert univers og mål-progresjon |
| `current-note.json` | **Ukens notat** – det er denne du redigerer hver uke |
| `service-worker.js` | PWA-cache (versjon `espen-co-v8-egenkapital`) |
| `manifest.json` | PWA-metadata med Espen & Co-branding |
| `prompt.md` | Markedsnotat-prompt for v8-universet med glidebane og drawdown-tak |
| `notat-2026-04-26.md` | Uke 17-notat i markdown (gammelt univers, arkiv) |
| `deploy-github-pages.md` | Oppskrift for første gangs oppsett og ukentlig oppdatering |
| `STATUS.md` | Denne filen |
| `icons/` | App-ikoner for PWA |
| `backup-v6/` | Frossen kopi av v6-appen (rull tilbake hvis du angrer) |
| `arkiv/` | Arkiverte notater (omposisjoneringsplaner og lignende historikk) |
