# Backup – v6 (utvidet ~87-instrumenters univers)

Dette er en frossen kopi av appen slik den var **2026-04-28** før omleggingen til skandinavisk-bare univers.

## Hvordan rulle tilbake

Hvis du vil gå tilbake til denne versjonen:

```bash
cd ~/Desktop/finans
cp backup-v6/index.html .
cp backup-v6/prompt.md .
cp backup-v6/service-worker.js .
cp backup-v6/manifest.json .
cp backup-v6/STATUS.md .
```

(eller bare slett de nye filene og kopier hele backup-v6/-innholdet ut igjen.)

## Hva v6 inneholdt

- 46 aksjer (Norge 12, Sverige 5, Danmark 4, Finland 2, USA 15, Europa 8)
- 26 UCITS-ETFer (brede, sektor, faktor, norden, renter, råvarer, dividend/ESG)
- 13 indekser (Norden, USA, Europa, Asia, Globalt)
- 2 krypto-ETPer

Service Worker: `espen-co-v6`

## Hvorfor frosset

Brukeren bestemte 2026-04-28 å begrense universet til kun skandinaviske instrumenter (Norge/Sverige/Danmark) for bedre fokus på markeder han kjenner og ASK-skattefordeler ved omposisjonering.
