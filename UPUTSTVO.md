# Uputstvo: kako postaviti kurs na GitHub

Ne treba ti nikakav program. Sve se radi u pregledaču, za oko 15 minuta.

## 1. Nalog

1. Otvori **github.com** i napravi besplatan nalog (Sign up).
2. Ako želiš da ostaneš anonimna, izaberi neutralno korisničko ime, na primer `fizika-bez-straha`.
   Korisničko ime će biti deo adrese kursa.
   Za nalog koristi e-poštu koju ne smeta da GitHub zna. Javno se ona ne prikazuje.

## 2. Repozitorijum (mesto za fajlove)

1. Gore desno klikni **+** → **New repository**.
2. **Repository name:** `fizika-bez-straha`
3. Izaberi **Public**. GitHub Pages je besplatan samo za javne repozitorijume.
4. Ne uključuj ništa drugo (bez README i bez licence, jer su već u fajlovima). Klikni **Create repository**.

## 3. Postavljanje fajlova

1. Na stranici novog repozitorijuma klikni link **uploading an existing file**.
2. Otvori folder `fizika-bez-straha-github` na računaru, označi **sve** fajlove i folder `fonts`, pa ih prevuci u pregledač.
   - Proveri da je prebačen i folder `fonts` sa sadržajem.
   - Fajl `.nojekyll` je skriven. Ako ga ne vidiš, nije problem: kurs radi i bez njega.
3. Dole klikni **Commit changes** i sačekaj da se završi.

## 4. Uključivanje stranice

1. U repozitorijumu klikni **Settings** → u levom meniju **Pages**.
2. Pod **Build and deployment** → **Source** izaberi **Deploy from a branch**.
3. Pod **Branch** izaberi **main** i folder **/ (root)**, pa klikni **Save**.
4. Sačekaj 1–3 minuta i osveži stranicu. Gore će pisati adresa, na primer:
   `https://fizika-bez-straha.github.io/fizika-bez-straha/`

## 5. Upiši zvaničnu adresu

1. U repozitorijumu otvori fajl `config.js` i klikni olovku (Edit).
2. Između navodnika upiši adresu iz koraka 4:
   `window.KURS_ADRESA = 'https://fizika-bez-straha.github.io/fizika-bez-straha/';`
3. Klikni **Commit changes**.

## 6. Provera na telefonu

1. Otvori adresu na telefonu, u Chrome-u ili Safari-ju.
2. Otvori nekoliko lekcija, pomeri animacije i uradi jedan test.
3. Dodaj kurs na početni ekran:
   - **Android:** meni ⋮ → **Dodaj na početni ekran** ili **Instaliraj aplikaciju**.
   - **iPhone:** dugme za deljenje → **Dodaj na početni ekran**.
4. Uključi režim rada u avionu i otvori kurs sa početnog ekrana. Trebalo bi da radi i bez interneta.

## Kad treba ubaciti novu verziju

1. U repozitorijumu klikni **Add file** → **Upload files** i prevuci izmenjene fajlove. Isti nazivi se zamenjuju.
2. Fajl `config.js` ne prebacuj ponovo, jer bi se izbrisala adresa koju si upisala.
3. U fajlu `sw.js` promeni broj u prvom redu (na primer `0.9` → `1.0`). Tako telefoni koji imaju kurs na početnom ekranu dobijaju novu verziju.
4. Promene se vide posle 1–3 minuta.

## Kako ugasiti kurs

- **Privremeno:** Settings → Pages → **Unpublish site**. Adresa prestaje da radi, a fajlovi ostaju.
- **Trajno:** Settings → General → na dnu **Delete this repository**.
- Kopije koje su ljudi već sačuvali na telefonu ili USB-u ne mogu se izbrisati na daljinu.

## Pretraživači

U kursu stoji oznaka `noindex`, pa ga Google ne prikazuje u pretrazi. Kurs se otvara samo preko linka.
Kad se faza testiranja završi i želiš da se kurs može pronaći pretragom, u `index.html` obriši red:
`<meta name="robots" content="noindex">`
