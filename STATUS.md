# STATUS – Finans-prosjektet
*Sist oppdatert: 2026-04-26*

---

## Hva er dette prosjektet?

Et ukentlig, regelbasert markedsnotat i simuleringsformat. Ingen reell kapital, ingen NAV-tilknytning. Formålet er å øve på systematisk markedsanalyse med et fast univers av instrumenter og strenge beslutningsregler.

---

## Hva er gjort

### Prompt
- Opprinnelig prompt mottatt og analysert
- Lagt til **UCITS-klausul** fordi brukeren er europeisk investor via Nordnet
- US-ETFer (VTI, VT, VEA, VWO, BND, GLD) er byttet ut med UCITS-godkjente ekvivalenter
- Krypto omdefinert til CoinShares XBT Provider ETPs på Nasdaq Stockholm
- Ferdig prompt lagret i: `prompt.md`

### Appen (index.html)
- Bygget som single-file HTML – samme konsept som Gumroad 01-prosjektet
- Åpnes direkte i nettleser, ingen server eller internett nødvendig
- Fire faner:
  - **Ukentlig notat** – viser gjeldende ukes notat med fargekodede kort per kategori
  - **Univers** – alle instrumenter med UCITS-merknad og Nordnet-tilgjengelighet
  - **Regler** – beslutningsrammeverket inkl. ny UCITS-blokk
  - **Om** – disclaimers, forklaring og brukerveiledning
- Oppdateres ukentlig ved å endre `const NOTE = { ... }` øverst i skriptet

### Første ekte notat
- Dato: 2026-04-26 (uke 17)
- Markedsdata hentet via nettsøk (CNBC, Yahoo Finance, CoinDesk m.fl.)
- Regime: **Risiko-på** – S&P 500 og NASDAQ på rekordnivå, VIX 18,7
- Resultat: NVDA KJØP (0,8 %), VUAA KJØP (0,5 %), S&P 500 HOLD, BTC XBT AVSTÅ
- Lagret i: `notat-2026-04-26.md`

---

## Fast univers (gjeldende)

| Kategori | Instrumenter |
|---|---|
| Aksjer | MSFT, AAPL, NVDA, AMZN, GOOGL, META, BRK.B, JNJ |
| ETF (UCITS) | VWCE, VUAA, EUNL, IEMA, AGGG, IGLN |
| Indekser | S&P 500, NASDAQ 100, MSCI World, STOXX Europe 600 |
| Krypto (ETP) | BITCOIN XBT, ETHEREUM XBT (CoinShares via Nordnet) |

---

## Ukentlig rutine

1. Si til Claude: *"Lag ukentlig markedsnotat for uke X"*
2. Claude søker opp faktiske markedsdata for uken
3. Anvender beslutningsreglene fra prompten
4. Oppdaterer `index.html` og skriver nytt `notat-ÅÅÅÅ-MM-DD.md`

---

## Slik bruker du appen

### På Mac-en
Gå til skrivebordet, åpne mappen **finans**, og dobbelklikk på **index.html**. Den åpner seg automatisk i nettleseren (Safari eller Chrome).

### På Android-telefonen – første gang

**Steg 1 – Last opp til Google Drive på Mac:**
Åpne drive.google.com i nettleseren. Logg inn med Google-kontoen din. Dra filen `index.html` fra finans-mappen rett inn i nettleservinduet.

**Steg 2 – Åpne på telefonen:**
Åpne Google Drive-appen på Android. Finn filen `index.html` og trykk på den. Den åpner seg i Chrome.

**Steg 3 – Legg til som app på startskjermen:**
I Chrome, trykk på de **tre prikkene** øverst til høyre. Velg **«Legg til på startskjermen»**. Trykk **Legg til**. Nå ligger appen som et ikon på startskjermen – akkurat som en vanlig app.

### Slik oppdaterer du appen på telefonen etter nytt ukesnotat
Når Claude har laget nytt notat og oppdatert `index.html`, last opp den nye filen til Google Drive og erstatt den gamle. Åpne filen på nytt i Chrome på telefonen – da er appen oppdatert.

---

## Åpne spørsmål / neste steg

- [ ] Verifiser at **IGLN** og **AGGG** faktisk er tilgjengelige på norsk Nordnet (ikke bare dansk/svensk)
- [ ] Vurder om ETF-valget i notatet bør oppdateres fra VTI → VUAA (UCITS) i neste notat
- [ ] Vurder å legge til en **historikk-fane** i appen som arkiverer tidligere ukers notater
- [ ] Vurder om BRK.B er tilgjengelig via Nordnet (noen norske meglere har begrenset tilgang til B-aksjen)

---

## Filer i denne mappen

| Fil | Beskrivelse |
|---|---|
| `index.html` | Selve appen – åpnes i nettleser |
| `prompt.md` | Oppdatert prompt med UCITS-krav |
| `notat-2026-04-26.md` | Første ekte notat (uke 17) |
| `STATUS.md` | Denne filen |
