/* 4. razred: talasna optika, relativnost, kvantna, atomska i nuklearna fizika, svemir */
window.LESSONS=window.LESSONS||[];
(function(L){
L({n:32,y:4,sim:'slits',t:'Interferencija i difrakcija',s:'Dokaz da je svetlost talas: svetle i tamne pruge.',
hook:'Pogledaj mehur od sapunice ili poleđinu starog CD-a: prelivaju se u svim bojama duge, iako je sapunica bezbojna. Engleski lekar Tomas Jang je 1801. pustio svetlost kroz dva uska proreza i na zidu dobio niz svetlih i tamnih pruga. Tako je dokazao da je svetlost talas. Isti ogled radićeš i ti, u animaciji.',
parts:[
['Interferencija: talasi se sabiraju','<p>Kad se dva talasa sretnu, oni se <span class="hl">sabiraju</span>.</p><ul><li><b>breg + breg</b>: talas je jači i dobijamo svetlu prugu (pojačavanje),</li><li><b>breg + dol</b>: talasi se ponište i dobijamo tamnu prugu (slabljenje).</li></ul><p>Zato iza dva proreza dobijamo „zebru“ od svetlih i tamnih pruga. Svetlost + svetlost može da da tamu!</p>'],
['Difrakcija: talas „skreće“ oko prepreke','<p>Kad talas prolazi kroz uzan otvor ili pored ivice, on se širi i iza prepreke. To je <span class="hl">difrakcija</span>. Zvuk čuješ iza ugla jer je talasna dužina zvuka velika. Kod svetlosti difrakcija se vidi samo kod veoma uskih otvora, jer je njena talasna dužina sićušna, oko pola mikrometra.</p>'],
['Boje i polarizacija','<p>Kod tankih slojeva (sapunica, ulje na vodi) svaka boja se pojačava na drugom mestu, pa vidimo duginih boja. <b>Polarizacija</b> pokazuje da je svetlost <b>transverzalni</b> talas. Polarizacione naočare za sunce propuštaju samo talase koji osciluju u jednom pravcu, pa uklanjaju odsjaj sa vode i puta.</p>']],
simT:'Ogled sa dva proreza',simNote:'Promeni boju (talasnu dužinu): crvena svetlost daje šire pruge od plave. Povećaj razmak proreza: pruge postaju gušće. Prebaci na jedan prorez i vidi difrakciju.',
f:[['$d · sin θ = k · λ$','Svetla pruga nastaje gde je razlika puteva dva talasa ceo broj talasnih dužina.'],['$Δy = λ · L / d$','Razmak između svetlih pruga: $L$ je udaljenost do zaklona, $d$ razmak proreza.'],['$λ ≈ 400–750 nm$','Talasna dužina vidljive svetlosti, manje od hiljaditog dela milimetra.']],
ex:{q:'Zelena svetlost talasne dužine 500 nm pada na dva proreza razmaka 0,5 mm. Zaklon je udaljen 2 m. Koliki je razmak svetlih pruga?',s:['Pretvorimo u metre: $λ = 500 · 10⁻⁹ m$, $d = 0,5 · 10⁻³ m$, $L = 2 m$.','$Δy = λL/d = 500·10⁻⁹ · 2 / (0,5·10⁻³)$.','$Δy = 2 · 10⁻³ m = 2 mm$.'],a:'Odgovor: svetle pruge su razmaknute 2 mm.'},
mem:['Interferencija: talasi se sabiraju, pa nastaju svetle i tamne pruge.','Jangov ogled (1801) je dokazao da je svetlost talas.','Difrakcija: talas se savija oko prepreke i kroz uske otvore.','Polarizacija dokazuje da je svetlost transverzalni talas.'],
yt:'interferencija svetlosti Jangov ogled difrakcija',
quiz:[
['Šta nastaje kad se sretnu breg jednog i dol drugog talasa?',['pojačanje','poništavanje (tamna pruga)','novi talas duplo brži','ništa'],1,'Breg i dol se poništavaju.'],
['Šta je dokazao Jangov ogled sa dva proreza?',['da je svetlost talas','da je Zemlja okrugla','da postoje atomi','da je svetlost čestica'],0,'Pruge interferencije mogu da naprave samo talasi.'],
['Zašto zvuk čujemo iza ugla, a svetlost ne vidimo?',['zvuk je brži','zvuk ima mnogo veću talasnu dužinu, pa je difrakcija izraženija','svetlost ne postoji iza ugla','zbog vazduha'],1,'Difrakcija je jaka kad je talasna dužina slična veličini prepreke.'],
['Ako se razmak proreza poveća, pruge su:',['šire','gušće (bliže jedna drugoj)','iste','nestanu'],1,'$Δy = λL/d$: veće $d$ daje manji razmak pruga.'],
['Šta dokazuje polarizacija svetlosti?',['da je svetlost transverzalni talas','da je svetlost longitudinalna','da je svetlost spora','da svetlost ima masu'],0,'Samo transverzalni talasi mogu da se polarizuju.'],
['Zašto se mehur od sapunice preliva u bojama?',['obojen je','interferencija svetlosti u tankom sloju','zbog sapuna koji svetli','zbog toplote'],1,'Svetlost odbijena od dve površine tankog sloja interferira, a svaka boja se pojačava na drugom mestu.']]});

L({n:33,y:4,sim:'relativity',t:'Teorija relativnosti',s:'Kad se ide skoro brzinom svetlosti, vreme teče sporije.',
hook:'Albert Ajnštajn je 1905. radio kao službenik u patentnom zavodu u Bernu. Njegova prva supruga bila je Mileva Marić iz Titela, jedna od prvih žena koje su studirale fiziku u Cirihu. Te godine Ajnštajn je objavio teoriju koja tvrdi da vreme i prostor nisu isti za sve. Zvuči kao naučna fantastika, ali GPS u tvom telefonu ne bi radio bez nje.',
parts:[
['Dva Ajnštajnova postulata','<ol><li>Zakoni fizike su isti za sve posmatrače koji se kreću stalnom brzinom.</li><li><span class="hl">Brzina svetlosti je ista za sve posmatrače</span>, $c = 300 000 km/s$, bez obzira kako se kreće izvor.</li></ol><p>Iz ovog drugog, čudnog pravila sledi sve ostalo. Ništa ne može da ide brže od svetlosti.</p>'],
['Vreme se usporava, dužina skraćuje','<p><b>Dilatacija vremena</b>: sat koji se brzo kreće, gledan sa Zemlje, otkucava <span class="hl">sporije</span>. Astronaut bi se vratio sa brzog putovanja mlađi od svog brata blizanca. <b>Kontrakcija dužine</b>: telo koje juri izgleda kraće u pravcu kretanja. Ovo je izmereno: čestice mioni stižu do tla iz visoke atmosfere samo zato što im vreme teče sporije.</p>'],
['E = mc²','<p>Najpoznatija formula na svetu kaže da su <span class="hl">masa i energija dva oblika iste stvari</span>. Pošto je $c²$ ogroman broj, i sićušna masa sadrži ogromnu energiju. Jedan gram mase odgovara energiji koju potroši mali grad za nekoliko dana. Na tome rade Sunce i nuklearne elektrane.</p>']],
simT:'Svetlosni sat',simNote:'Levo je sat na Zemlji: svetlost se odbija gore-dole između ogledala. Desno je isti sat u brodu. Mi vidimo da njegova svetlost ide koso, dužim putem, pa sat kasni. Povećaj brzinu i gledaj kako brod postaje kraći, a sat sporiji.',
f:[['$γ = 1 / √(1 - v²/c²)$','Faktor gama: blizu 1 za male brzine, a ogroman kad se $v$ približi $c$.'],['$t = γ · t₀$','Vreme koje mi izmerimo duže je od vremena u brodu ($t₀$).'],['$l = l₀ / γ$','Dužina tela u pokretu je manja.'],['$E = m · c²$','Energija mirovanja tela mase $m$.']],
ex:{q:'Brod leti brzinom 0,8 c. Ako u brodu prođe 1 sat, koliko prođe na Zemlji?',s:['$v²/c² = 0,8² = 0,64$, pa je $1 - 0,64 = 0,36$.','$√0,36 = 0,6$, pa je $γ = 1/0,6 ≈ 1,67$.','$t = γ · t₀ = 1,67 · 1 h ≈ 1 h 40 min$.'],a:'Odgovor: na Zemlji prođe oko 1 sat i 40 minuta.'},
mem:['Brzina svetlosti je ista za sve i ne može se preći.','Sat u pokretu kasni: $t = γt₀$.','Telo u pokretu je kraće: $l = l₀/γ$.','Masa i energija su povezane: $E = mc²$.'],
yt:'specijalna teorija relativnosti dilatacija vremena Ajnštajn',
quiz:[
['Šta je posebno kod brzine svetlosti?',['ista je za sve posmatrače','zavisi od brzine izvora','sporija je u svemiru','beskonačna je'],0,'Drugi Ajnštajnov postulat: $c$ je ista za sve.'],
['Šta se dešava sa satom koji juri skoro brzinom svetlosti (gledano sa Zemlje)?',['ubrzava','usporava','staje','ide unazad'],1,'Dilatacija vremena: sat u pokretu otkucava sporije.'],
['Kako izgleda brod koji juri pored nas?',['duži','kraći u pravcu kretanja','isti','veći u svim pravcima'],1,'Kontrakcija dužine.'],
['Koliko energije odgovara masi od $1 kg$? ($c = 3·10⁸ m/s$)',['$3·10⁸ J$','$9·10¹⁶ J$','$1 J$','$9 J$'],1,'$E = mc² = 1 · 9·10¹⁶ J$.'],
['Za $v = 0,6c$ faktor $γ$ je:',['$1,25$','$0,6$','$1,67$','$2$'],0,'$√(1 - 0,36) = √0,64 = 0,8$, pa je $γ = 1/0,8 = 1,25$.'],
['Koji uređaj mora da uračuna relativnost da bi bio tačan?',['GPS','frižider','fen','sat na zidu'],0,'Sateliti GPS-a se brzo kreću, pa njihovi satovi moraju da se koriguju.']]});

L({n:34,y:4,sim:'photo',t:'Foton i fotoelektrični efekat',s:'Svetlost putuje u sićušnim paketićima energije.',
hook:'Ajnštajn nikada nije dobio Nobelovu nagradu za teoriju relativnosti. Dobio ju je 1921. za objašnjenje jedne naizgled male pojave: zašto svetlost može da izbije elektrone iz metala. Objašnjenje je pokazalo da svetlost nije samo talas, već i roj čestica, fotona. Tako je počela kvantna fizika.',
parts:[
['Kvanti i fotoni','<p>Maks Plank je 1900. pretpostavio da se energija svetlosti ne predaje u bilo kojoj količini, nego u <span class="hl">paketićima (kvantima)</span>. Paketić svetlosti zove se <b>foton</b>. Energija fotona zavisi od frekvencije: plavi foton nosi više energije od crvenog, a UV foton još više.</p>'],
['Fotoelektrični efekat','<p>Kad svetlost obasja metal, može da izbije elektrone iz njega. Ali čudno:</p><ul><li>crvena svetlost, ma koliko bila jaka, često <b>ne izbije nijedan</b> elektron,</li><li>slaba ljubičasta ili UV svetlost ih izbija odmah.</li></ul><p>Ajnštajn je objasnio: <span class="hl">jedan foton predaje energiju jednom elektronu</span>. Ako foton nema dovoljno energije da „oslobodi“ elektron (izlazni rad), ništa se ne dešava. Jača svetlost samo znači više fotona, a ne jače fotone.</p>'],
['Gde se koristi','<p>Solarni paneli, senzori u kameri telefona, automatska vrata i fotoćelije uličnih svetiljki rade na sličnom principu: svetlost se pretvara u električnu struju.</p>']],
simT:'Svetlost izbija elektrone',simNote:'Stavi crvenu svetlost (700 nm) i pojačaj jačinu do kraja: nema elektrona! Sada smanji talasnu dužinu ka plavoj i UV. Elektroni izleću, i to brže što je talasna dužina kraća. Probaj i metal cink.',
f:[['$E = h · f$','Energija fotona = Plankova konstanta × frekvencija. $h = 6,63 · 10⁻³⁴ J·s$.'],['$E = h · c / λ$','Kraća talasna dužina znači veću energiju fotona.'],['$h · f = A_i + E_k$','Ajnštajnova jednačina: energija fotona = izlazni rad + kinetička energija elektrona.'],['$1 eV = 1,6 · 10⁻¹⁹ J$','Elektronvolt je mala jedinica energije, zgodna za atome.']],
ex:{q:'Kolika je energija fotona plave svetlosti talasne dužine 500 nm?',s:['$E = hc/λ = 6,63·10⁻³⁴ · 3·10⁸ / (500·10⁻⁹)$.','$E ≈ 3,98 · 10⁻¹⁹ J$.','U elektronvoltima: $3,98·10⁻¹⁹ : 1,6·10⁻¹⁹ ≈ 2,5 eV$.'],a:'Odgovor: foton nosi oko $4·10⁻¹⁹ J$, to jest oko 2,5 eV.'},
mem:['Svetlost se sastoji od fotona, a energija fotona je $E = hf$.','Jedan foton izbija jedan elektron.','Efekat zavisi od frekvencije (boje), a ne od jačine svetlosti.','$hf = A_i + E_k$.'],
yt:'fotoelektrični efekat foton Ajnštajn Plank',
quiz:[
['Šta je foton?',['deo atoma','najmanji paketić (kvant) svetlosti','vrsta elektrona','zvučni talas'],1,'Foton je kvant elektromagnetnog zračenja.'],
['Koji foton nosi najviše energije?',['crveni','zeleni','plavi','ultraljubičasti'],3,'Veća frekvencija znači veću energiju, a UV ima najveću od navedenih.'],
['Crvena svetlost ne izbija elektrone iz metala. Šta će se desiti ako je pojačamo 10 puta?',['izbiće elektrone','i dalje ih neće izbiti','metal će se istopiti','pretvoriće se u plavu'],1,'Jača svetlost daje više fotona, ali svaki ima premalo energije.'],
['Za šta je Ajnštajn dobio Nobelovu nagradu?',['za teoriju relativnosti','za objašnjenje fotoelektričnog efekta','za atomsku bombu','za gravitaciju'],1,'Nobelova nagrada 1921. je dodeljena za fotoefekat.'],
['Foton ima $5 eV$, a izlazni rad metala je $2 eV$. Najveća kinetička energija elektrona je:',['$7 eV$','$3 eV$','$2,5 eV$','$10 eV$'],1,'$E_k = hf - A_i = 5 - 2 = 3 eV$.'],
['Šta radi solarni panel?',['pretvara svetlost u struju','pretvara struju u svetlost','greje vodu','meri temperaturu'],0,'Fotoni oslobađaju elektrone i tako nastaje struja.']]});

L({n:35,y:4,sim:'dual',t:'Talas ili čestica?',s:'U mikrosvetu sve je pomalo i talas i čestica.',
hook:'Francuski princ Luj de Brolj je studirao istoriju, pa tek onda prešao na fiziku. U doktorskoj tezi 1924. postavio je smelo pitanje: ako se svetlost (talas) ponaša kao čestica, da li se i čestice (elektroni) ponašaju kao talasi? Komisija nije znala šta da misli, pa je tezu poslala Ajnštajnu. On je odgovorio da je to „prvi slabi zrak svetlosti na najveću zagonetku fizike“.',
parts:[
['Dualnost','<p><span class="hl">Svetlost i čestice imaju dvojnu prirodu.</span> U nekim ogledima se ponašaju kao talasi (interferencija), a u drugim kao čestice (fotoefekat). To nije ili-ili, nego i-i.</p>'],
['Elektroni jedan po jedan','<p>Ako kroz dva proreza šaljemo elektrone <b>jedan po jedan</b>, svaki udari u jednu tačku, kao čestica. Ali kad ih skupi hiljade, tačke slože <b>pruge interferencije</b>, kao kod talasa! A ako postavimo detektor da vidimo kroz koji prorez prolazi elektron, pruge nestanu. <span class="hl">Samo merenje menja ponašanje.</span></p>'],
['De Broljeva talasna dužina i neodređenost','<p>Svako telo ima talasnu dužinu $λ = h/(mv)$. Za loptu je ona neizmerno mala, pa ne vidimo njeno talasno ponašanje. Za elektron je mala kao atom. Na tome radi <b>elektronski mikroskop</b>, koji vidi mnogo sitnije detalje od običnog. <b>Hajzenbergov princip neodređenosti</b> kaže da ne možemo istovremeno tačno znati i gde je čestica i koliko brzo ide.</p>']],
simT:'Elektroni kroz dva proreza',simNote:'Gledaj kako se tačke polako slažu u pruge. Zatim uključi „Merimo kroz koji prolazi“ i obriši ekran: pruge nestaju i ostaju samo dve mrlje.',
f:[['$λ = h / (m · v)$','De Broljeva talasna dužina: što je telo teže i brže, talasna dužina je kraća.'],['$p = m · v$','Impuls čestice.'],['$Δx · Δp ≥ h / (4π)$','Princip neodređenosti: što tačnije znamo položaj, manje tačno znamo impuls.']],
ex:{q:'Kolika je talasna dužina elektrona ($m = 9,1·10⁻³¹ kg$) koji leti brzinom $10⁶ m/s$?',s:['$λ = h/(mv) = 6,63·10⁻³⁴ / (9,1·10⁻³¹ · 10⁶)$.','Imenilac: $9,1·10⁻²⁵$.','$λ ≈ 7,3·10⁻¹⁰ m ≈ 0,7 nm$, otprilike veličina atoma.'],a:'Odgovor: oko 0,7 nanometara.'},
mem:['Svetlost i čestice su i talasi i čestice (dualnost).','Elektroni jedan po jedan grade interferentne pruge.','De Brolj: $λ = h/(mv)$.','Princip neodređenosti: položaj i impuls se ne mogu istovremeno tačno znati.'],
yt:'talasno čestični dualizam de Brolj elektron dva proreza',
quiz:[
['Šta znači dualnost čestica i talasa?',['čestice su ponekad talasi, a ponekad čestice','sve je samo talas','sve je samo čestica','postoje dve vrste svetlosti'],0,'U zavisnosti od ogleda pokazuje se talasna ili čestična priroda.'],
['Elektroni puštani jedan po jedan kroz dva proreza na kraju daju:',['jednu mrlju','pruge interferencije','ništa','krug'],1,'Pojedinačni udari se slažu u talasnu sliku.'],
['Šta se dešava sa prugama ako merimo kroz koji prorez prolazi elektron?',['postaju jače','nestaju','menjaju boju','udvostruče se'],1,'Merenje uništava interferenciju.'],
['Zašto ne primećujemo talasnu prirodu fudbalske lopte?',['nema je','talasna dužina joj je neizmerno mala','lopta je okrugla','zbog vazduha'],1,'Velika masa daje sićušnu talasnu dužinu $h/(mv)$.'],
['Na čemu radi elektronski mikroskop?',['na talasnoj prirodi elektrona','na zvuku','na toploti','na magnetima za frižider'],0,'Elektroni imaju vrlo kratku talasnu dužinu, pa „vide“ sitnije detalje.'],
['Šta kaže Hajzenbergov princip neodređenosti?',['ne možemo istovremeno tačno znati položaj i impuls čestice','sve je neodređeno','atomi ne postoje','svetlost je spora'],0,'Što tačnije znamo jedno, manje tačno znamo drugo.']]});

L({n:36,y:4,sim:'bohr',t:'Atom i spektri',s:'Kako izgleda atom i zašto svaki element svetli svojom bojom.',
hook:'Ernest Raderford je 1911. gađao tanak zlatni listić sićušnim alfa česticama. Većina je prošla kao kroz prazno, ali poneka se odbila nazad. Rekao je da je to kao da ispališ topovsko đule u papirnu maramicu, a ono ti se vrati. Zaključio je da je skoro sva masa atoma skupljena u sićušnom jezgru, a ostalo je uglavnom prazan prostor.',
parts:[
['Raderfordov model','<p>U centru atoma je malo, teško, pozitivno <b>jezgro</b>, a oko njega su <b>elektroni</b>. Ako bi jezgro bilo veliko kao zrno graška, ceo atom bio bi velik kao fudbalski stadion. <span class="hl">Atom je skoro potpuno prazan.</span></p>'],
['Borov model: nivoi energije','<p>Nils Bor je 1913. dodao važno pravilo: elektron može da bude samo na <span class="hl">određenim putanjama (nivoima energije)</span>, kao na stepenicama, a ne između njih.</p><ul><li>Kad atom primi energiju, elektron <b>skoči</b> na viši nivo.</li><li>Kad padne nazad, <b>izrači foton</b> tačno određene energije, odnosno boje.</li></ul>'],
['Spektri: otisak prsta elemenata','<p>Svaki element ima svoj niz boja (linija), kao <b>otisak prsta</b>. Zato neonske reklame imaju različite boje. Analizom svetlosti zvezda saznajemo od čega su napravljene. Helijum je otkriven <b>na Suncu</b> pre nego na Zemlji! <b>Laser</b> radi tako što mnogo atoma istovremeno izrači fotone iste boje i smera.</p>']],
simT:'Atom vodonika',simNote:'Atom povremeno primi energiju i elektron skoči na viši nivo. Zatim pada nazad i izrači foton. Prati spektar dole: skupljaju se samo četiri vidljive linije vodonika, crvena, plavozelena, plava i ljubičasta.',
f:[['$E_n = -13,6 eV / n²$','Energija elektrona na nivou $n$ u atomu vodonika.'],['$h · f = E_i - E_f$','Energija izračenog fotona jednaka je razlici nivoa.'],['$1/λ = R (1/n_f² - 1/n_i²)$','Ridbergova formula. $R = 1,097 · 10⁷ m⁻¹$.']],
ex:{q:'Elektron u atomu vodonika padne sa nivoa 3 na nivo 2. Kolika je energija i boja fotona?',s:['$E₃ = -13,6/9 = -1,51 eV$, $E₂ = -13,6/4 = -3,40 eV$.','$E = E₃ - E₂ = -1,51 - (-3,40) = 1,89 eV$.','$λ = 1240/1,89 ≈ 656 nm$: crvena svetlost.'],a:'Odgovor: foton ima 1,89 eV i talasnu dužinu 656 nm, crvenu liniju vodonika.'},
mem:['Atom: malo teško jezgro i elektroni oko njega; uglavnom je prazan.','Elektron je samo na određenim nivoima energije.','Skok naniže izrači foton: $hf = E_i - E_f$.','Svaki element ima svoj spektar, kao otisak prsta.'],
yt:'Borov model atoma linijski spektar vodonika',
quiz:[
['Šta je pokazao Raderfordov ogled sa zlatnim listićem?',['atom je pun kao kugla','atom ima malo teško jezgro i uglavnom je prazan','atom nema elektrone','zlato je mekano'],1,'Većina čestica prolazi, a retke se odbiju od sićušnog jezgra.'],
['Šta se dešava kad elektron padne na niži nivo?',['upije foton','izrači foton','nestane','udvostruči se'],1,'Razlika energija odlazi kao foton.'],
['Zašto svaki element ima svoj spektar?',['zbog boje atoma','jer su mu nivoi energije jedinstveni','zbog temperature','svi imaju isti'],1,'Različiti nivoi daju različite energije, pa i boje fotona.'],
['Elektron skoči sa nivoa energije $-1,5 eV$ na $-3,4 eV$. Energija fotona je:',['$4,9 eV$','$1,9 eV$','$-1,9 eV$','$5,1 eV$'],1,'$E = -1,5 - (-3,4) = 1,9 eV$.'],
['Koji element je prvo otkriven na Suncu?',['vodonik','helijum','kiseonik','gvožđe'],1,'Njegove spektralne linije uočene su u sunčevoj svetlosti 1868.'],
['Ako je jezgro zrno graška, atom je velik otprilike kao:',['jabuka','soba','fudbalski stadion','planeta'],2,'Atom je oko 100 000 puta veći od jezgra.']]});

L({n:37,y:4,sim:'nucleus',t:'Atomsko jezgro',s:'Protoni, neutroni i sila koja ih drži zajedno.',
hook:'Jezgro je 100 000 puta manje od atoma, a u njemu je skoro sva masa. Kad bi se napravila kašičica „čiste“ nuklearne materije, bila bi teška stotine miliona tona. Takva materija postoji u neutronskim zvezdama. Danas ćemo videti od čega je jezgro napravljeno i šta ga drži na okupu.',
parts:[
['Od čega je jezgro?','<p>Jezgro čine <b>protoni</b> (pozitivni) i <b>neutroni</b> (bez naelektrisanja). Zajedno ih zovemo <span class="hl">nukleoni</span>.</p><ul><li><b>Z</b>, redni broj, je broj protona. On određuje koji je element.</li><li><b>N</b> je broj neutrona.</li><li><b>A = Z + N</b> je maseni broj.</li></ul><p class="note">Zapis $<sup>12</sup><sub>6</sub>C$ znači: ugljenik sa 6 protona i ukupno 12 nukleona, dakle 6 neutrona.</p>'],
['Izotopi','<p>Atomi istog elementa sa različitim brojem neutrona su <span class="hl">izotopi</span>. Ugljenik-12 je stabilan, a ugljenik-14 je radioaktivan. Hemijski se ponašaju isto, ali jezgra im se razlikuju. Ako jezgro ima previše ili premalo neutrona, ono je nestabilno i raspada se.</p>'],
['Jaka nuklearna sila i energija veze','<p>Protoni se električno odbijaju, pa šta ih drži zajedno? <b>Jaka nuklearna sila</b>: najjača sila u prirodi, ali deluje samo na sićušnim rastojanjima, unutar jezgra. Zanimljivo je da jezgro ima <b>manju masu</b> od zbira svojih delova. Ta razlika (defekt mase) pretvorena je u energiju veze, po $E = mc²$.</p>']],
simT:'Sastavi jezgro',simNote:'Menjaj broj protona i dobićeš drugi element. Menjaj broj neutrona i dobićeš izotope istog elementa. Probaj ugljenik sa 8 neutrona: to je radioaktivni ugljenik-14.',
f:[['$A = Z + N$','Maseni broj = protoni + neutroni.'],['$<sup>A</sup><sub>Z</sub>X$','Oznaka jezgra: gore maseni broj, dole broj protona.'],['$E_v = Δm · c²$','Energija veze odgovara defektu mase.']],
ex:{q:'Koliko protona, neutrona i elektrona ima atom kiseonika $<sup>16</sup><sub>8</sub>O$?',s:['Donji broj je $Z = 8$: 8 protona.','Neutroni: $N = A - Z = 16 - 8 = 8$.','Neutralan atom ima isto elektrona koliko i protona: 8.'],a:'Odgovor: 8 protona, 8 neutrona i 8 elektrona.'},
mem:['Jezgro čine protoni i neutroni (nukleoni).','$Z$ = broj protona (određuje element), $A = Z + N$.','Izotopi: isti element, različit broj neutrona.','Jaka nuklearna sila drži jezgro, ali deluje samo na malim rastojanjima.'],
yt:'atomsko jezgro izotopi nuklearne sile energija veze',
quiz:[
['Šta određuje koji je element?',['broj neutrona','broj protona','broj elektrona u omotaču posle jonizacije','maseni broj'],1,'Redni broj $Z$, broj protona.'],
['Jezgro $<sup>23</sup><sub>11</sub>Na$ ima neutrona:',['11','23','12','34'],2,'$N = A - Z = 23 - 11 = 12$.'],
['Šta su izotopi?',['atomi istog elementa sa različitim brojem neutrona','različiti elementi iste mase','atomi bez elektrona','molekuli'],0,'Isti $Z$, različit $N$.'],
['Šta drži protone u jezgru uprkos odbijanju?',['gravitacija','jaka nuklearna sila','magnetna sila','trenje'],1,'Jaka nuklearna sila je jača od električnog odbijanja na malim rastojanjima.'],
['Kakva je masa jezgra u poređenju sa zbirom masa njegovih protona i neutrona?',['veća','manja (defekt mase)','ista','duplo veća'],1,'Deo mase je postao energija veze.'],
['Ugljenik-14 ima 6 protona. Koliko ima neutrona?',['6','8','14','20'],1,'$14 - 6 = 8$.']]});

L({n:38,y:4,sim:'decay',t:'Radioaktivnost',s:'Jezgra koja se sama raspadaju i sat koji meri hiljade godina.',
hook:'Anri Bekerel je 1896. ostavio uranijumovu so u fioci na zamotanoj fotografskoj ploči. Kad je razvio ploču, na njoj je bila senka! Uranijum je zračio sam od sebe. Marija Kiri je zatim otkrila nove radioaktivne elemente i jedan nazvala polonijum, po svojoj domovini Poljskoj. Ona je jedina osoba sa Nobelovim nagradama iz dve različite nauke, fizike i hemije.',
parts:[
['Tri vrste zračenja','<ul><li><b>Alfa (α)</b>: jezgra helijuma. Teške su i spore, pa ih zaustavlja list papira.</li><li><b>Beta (β)</b>: elektroni iz jezgra. Zaustavlja ih tanka aluminijumska ploča.</li><li><b>Gama (γ)</b>: fotoni ogromne energije. Za njih treba debeo sloj olova ili betona.</li></ul>'],
['Period poluraspada','<p>Ne može se znati kada će se raspasti <b>jedno</b> jezgro. Ali za veliki broj važi pravilo: posle vremena $T½$, <span class="hl">perioda poluraspada</span>, ostane tačno pola neraspadnutih jezgara. Posle još jednog perioda pola od pola, to jest četvrtina, i tako dalje. Neki izotopi imaju period od sekundi, a neki od milijardi godina.</p>'],
['Ugljenik-14: sat arheologa','<p>Živa bića stalno primaju ugljenik-14 iz vazduha. Kad umru, on se raspada, a $T½ = 5730$ godina. Merenjem koliko ga je ostalo u kosti, drvetu ili tkanini, arheolozi određuju <span class="hl">starost nalaza</span>, na primer egipatskih mumija ili Torinskog platna. Radioaktivnost se koristi i u medicini (lečenje raka, snimanje), ali od zračenja se moramo štititi.</p>']],
simT:'400 radioaktivnih jezgara',simNote:'Zelena jezgra su neraspadnuta. Gledaj crvenu krivu: posle svakog perioda poluraspada (ljubičaste linije) ostane otprilike pola. Pokreni više puta: ne raspadaju se uvek ista jezgra, ali kriva je uvek slična.',
f:[['$N = N₀ · (1/2)^(t/T½)$','Broj neraspadnutih jezgara posle vremena $t$.'],['$N = N₀ / 2ⁿ$','Posle $n$ perioda poluraspada ostaje $N₀$ podeljeno sa $2ⁿ$.']],
ex:{q:'Imamo 800 jezgara izotopa čiji je period poluraspada 5 dana. Koliko ih ostane posle 15 dana?',s:['Broj perioda: $n = 15 : 5 = 3$.','$N = 800 / 2³ = 800 / 8$.','$N = 100$.'],a:'Odgovor: ostane 100 neraspadnutih jezgara.'},
mem:['Alfa zaustavlja papir, beta aluminijum, gama olovo.','Period poluraspada: vreme za koje se raspadne pola jezgara.','$N = N₀/2ⁿ$, gde je $n$ broj proteklih perioda.','Ugljenik-14 ($T½ = 5730$ god.) služi za određivanje starosti nalaza.'],
yt:'radioaktivnost alfa beta gama period poluraspada',
quiz:[
['Koje zračenje zaustavlja list papira?',['alfa','beta','gama','sva'],0,'Alfa čestice su teške i lako se zaustave.'],
['Posle dva perioda poluraspada ostaje:',['pola','četvrtina','osmina','ništa'],1,'$1/2 · 1/2 = 1/4$.'],
['Izotop ima $T½ = 2 h$. Od $1000$ jezgara posle $6 h$ ostane:',['$500$','$250$','$125$','$0$'],2,'3 perioda: $1000/8 = 125$.'],
['U kosti je ostala četvrtina ugljenika-14. Koliko je kost stara? ($T½ = 5730$ god.)',['5730 god.','11 460 god.','2865 god.','22 920 god.'],1,'Četvrtina znači 2 perioda: $2 · 5730 = 11 460$ godina.'],
['Ko je otkrio radioaktivnost?',['Bekerel','Njutn','Faradej','Om'],0,'Anri Bekerel, 1896.'],
['Može li se predvideti kada će se raspasti jedno određeno jezgro?',['da, tačno','ne, raspad je slučajan; predvidljiv je samo za veliki broj jezgara','samo leti','samo za uranijum'],1,'Period poluraspada je statistički zakon.']]});

L({n:39,y:4,sim:'fission',t:'Fisija i fuzija',s:'Nuklearna energija: cepanje teških i spajanje lakih jezgara.',
hook:'Krajem 1938. austrijska fizičarka Lize Majtner šetala je po snegu sa sestrićem i razmišljala o čudnom rezultatu Ota Hana. Uranijum gađan neutronima davao je barijum, mnogo lakši element. Shvatila je da se jezgro <b>prepolovilo</b> i izračunala ogromnu energiju koja se pri tome oslobađa. Tako je otkrivena fisija.',
parts:[
['Fisija i lančana reakcija','<p>Kad neutron pogodi jezgro uranijuma-235, ono se <span class="hl">rascepi na dva manja jezgra</span>, oslobodi veliku energiju i izbaci 2–3 nova neutrona. Ti neutroni cepaju nova jezgra, pa nastaje <b>lančana reakcija</b>. Jedan kilogram uranijuma daje energiju kao oko 3000 tona uglja.</p>'],
['Nuklearna elektrana','<p>U elektrani se lančana reakcija drži <b>pod kontrolom</b>. <span class="hl">Kontrolne šipke</span> upijaju višak neutrona, tako da svaka fisija izazove tačno jednu novu. Toplota greje vodu, para okreće turbinu i generator. Kod atomske bombe reakcija je nekontrolisana. Problemi elektrana su radioaktivni otpad i opasnost od havarija, kao u Černobilju 1986.</p>'],
['Fuzija: energija zvezda','<p><b>Fuzija</b> je suprotan proces: <span class="hl">laka jezgra (vodonik) spajaju se u teža (helijum)</span>. Tako svetli Sunce: svake sekunde oko 4 miliona tona mase pretvara u energiju. Za fuziju su potrebne temperature od više miliona stepeni. Naučnici pokušavaju da je ostvare na Zemlji (projekat ITER), jer bi dala čistu energiju gotovo bez otpada.</p>']],
simT:'Lančana reakcija',simNote:'Bez kontrolnih šipki reakcija se širi kao lavina. Ubaci 2–4 šipke, klikni „Novo gorivo“ i gledaj kako šipke gutaju neutrone i usporavaju reakciju.',
f:[['$E = Δm · c²$','Energija nastaje od mase koja „nedostaje“ posle reakcije.'],['$≈ 200 MeV$','Energija jedne fisije uranijuma-235.'],['$<sup>235</sup>U + n → X + Y + 2–3 n$','Fisija uranijuma: dva nova jezgra (X i Y), 2–3 neutrona i energija.'],['$4 <sup>1</sup>H → <sup>4</sup>He$','Fuzija u Suncu: četiri jezgra vodonika daju helijum i energiju.']],
ex:{q:'U reakciji „nestane“ 1 g mase. Koliko energije se oslobodi?',s:['$Δm = 1 g = 0,001 kg$.','$E = Δm · c² = 0,001 · (3·10⁸)²$.','$E = 0,001 · 9·10¹⁶ = 9·10¹³ J$.'],a:'Odgovor: $9·10¹³ J$, otprilike kao eksplozija 20 000 tona TNT-a.'},
mem:['Fisija: teško jezgro se cepa i izbacuje nove neutrone.','Lančana reakcija se kontroliše kontrolnim šipkama.','Fuzija: laka jezgra se spajaju; tako svetle zvezde.','Energija dolazi iz defekta mase: $E = Δmc²$.'],
yt:'nuklearna fisija fuzija lančana reakcija nuklearna elektrana',
quiz:[
['Šta je fisija?',['spajanje lakih jezgara','cepanje teškog jezgra na dva manja','raspad elektrona','sagorevanje uglja'],1,'Fisija je cepanje jezgra, na primer uranijuma.'],
['Zašto je moguća lančana reakcija?',['jer svaka fisija oslobodi nove neutrone','jer uranijum gori','zbog gravitacije','zbog svetlosti'],0,'Novi neutroni izazivaju nove fisije.'],
['Čemu služe kontrolne šipke?',['upijaju neutrone i usporavaju reakciju','ubrzavaju reakciju','hlade vodu','proizvode struju'],0,'Upijanjem neutrona drže reakciju pod kontrolom.'],
['Kako nastaje energija Sunca?',['fisijom uranijuma','fuzijom vodonika u helijum','sagorevanjem gasa','trenjem'],1,'U Suncu se jezgra vodonika spajaju u helijum.'],
['Kolika energija odgovara masi od $2 g$? ($c² = 9·10¹⁶ m²/s²$)',['$1,8·10¹⁴ J$','$1,8·10¹⁷ J$','$4,5·10¹³ J$','$18 J$'],0,'$E = 0,002 · 9·10¹⁶ = 1,8·10¹⁴ J$.'],
['Zašto je fuziju teško ostvariti na Zemlji?',['potrebne su temperature od više miliona stepeni','nema vodonika','zabranjena je','proizvodi previše otpada'],0,'Jezgra se odbijaju, pa moraju da imaju ogromnu brzinu, to jest temperaturu.']]});

L({n:40,y:4,sim:'universe',t:'Čestice i svemir',s:'Od najmanjih kvarkova do Velikog praska.',
hook:'Edvin Habl je 1929. posmatrao daleke galaksije i otkrio da se skoro sve udaljavaju od nas, i to što su dalje, sve brže. Belgijski sveštenik i fizičar Žorž Lemetr je već ranije predložio objašnjenje: svemir se širi, a nekada je sav bio skupljen u jednoj tački. Tako je rođena ideja o Velikom prasku.',
parts:[
['Od čega je sve napravljeno?','<p>Proton i neutron nisu najmanji delovi. Oni su sastavljeni od <span class="hl">kvarkova</span>. Proton čine dva „gornja“ i jedan „donji“ kvark (uud), a neutron jedan gornji i dva donja (udd). Elektron i neutrino su zaista elementarni. Svaka čestica ima i svoju <b>antičesticu</b>: elektron ima pozitron.</p>'],
['Četiri osnovne sile','<ul><li><b>gravitaciona</b>: drži planete i galaksije,</li><li><b>elektromagnetna</b>: drži atome i molekule, daje svetlost,</li><li><b>jaka nuklearna</b>: drži kvarkove i jezgra,</li><li><b>slaba nuklearna</b>: odgovorna za beta raspad.</li></ul><p>Čestice se proučavaju u ubrzivačima, najveći je u CERN-u kod Ženeve. <span class="hl">Srbija je punopravna članica CERN-a od 2019. godine.</span></p>'],
['Veliki prasak','<p>Svemir se širi: daljina između galaksija stalno raste. To nije eksplozija u prostoru, nego <b>širenje samog prostora</b>, kao tačkice na balonu koji naduvavaš. Ako „premotamo film“ unazad, sve je bilo skupljeno pre oko <span class="hl">13,8 milijardi godina</span>. Dokaz je i slabo kosmičko pozadinsko zračenje, „odjek“ Velikog praska koji dolazi iz svih pravaca.</p>']],
simT:'Svemir koji se širi',simNote:'Gledaj strelice: dalje galaksije se udaljavaju brže. Prebaci na pogled iz druge galaksije. Slika je ista! Svemir nema centar: iz svake galaksije izgleda kao da svi beže od nje.',
f:[['$v = H₀ · d$','Hablov zakon: brzina udaljavanja galaksije srazmerna je njenoj udaljenosti.'],['$H₀ ≈ 70 (km/s)/Mpc$','Hablova konstanta: 70 km/s po megaparseku. Megaparsek je oko 3,26 miliona svetlosnih godina.'],['$p = uud, n = udd$','Kvarkovski sastav protona i neutrona.']],
ex:{q:'Galaksija je udaljena 100 megaparseka. Kojom brzinom se udaljava? ($H₀ = 70 km/s$ po Mpc)',s:['Hablov zakon: $v = H₀ · d$.','$v = 70 · 100$.','$v = 7000 km/s$.'],a:'Odgovor: galaksija se udaljava brzinom 7000 km/s.'},
mem:['Protoni i neutroni su sastavljeni od kvarkova.','Četiri sile: gravitaciona, elektromagnetna, jaka i slaba.','Svemir se širi: $v = H₀d$ (Hablov zakon).','Veliki prasak se desio pre oko 13,8 milijardi godina.'],
yt:'Veliki prasak širenje svemira Hablov zakon kvarkovi',
quiz:[
['Od čega je sastavljen proton?',['od elektrona','od tri kvarka','od neutrona','od fotona'],1,'Proton čine dva gornja i jedan donji kvark.'],
['Koja sila drži elektrone uz jezgro?',['gravitaciona','elektromagnetna','slaba nuklearna','trenje'],1,'Elektroni su negativni, a jezgro pozitivno.'],
['Šta je Habl otkrio?',['da se galaksije udaljavaju, brže što su dalje','da je Zemlja okrugla','da postoje kvarkovi','da je Sunce zvezda'],0,'To je Hablov zakon.'],
['Koliko je star svemir prema današnjim merenjima?',['6000 godina','4,5 milijardi godina','13,8 milijardi godina','beskonačno'],2,'Oko 13,8 milijardi godina. (4,5 milijardi je starost Zemlje.)'],
['Galaksija udaljena $50 Mpc$ udaljava se brzinom ($H₀ = 70 km/s$ po Mpc):',['$3500 km/s$','$120 km/s$','$1,4 km/s$','$70 km/s$'],0,'$v = 70 · 50 = 3500 km/s$.'],
['Šta je antičestica elektrona?',['proton','pozitron','neutron','foton'],1,'Pozitron ima istu masu kao elektron, ali pozitivno naelektrisanje.']]});
})(o=>window.LESSONS.push(o));
