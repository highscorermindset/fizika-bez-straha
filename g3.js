/* 3. razred: magnetizam, oscilacije, talasi, svetlost */
window.LESSONS=window.LESSONS||[];
(function(L){
L({n:22,y:3,sim:'magnet',t:'Magnetno polje',s:'Magneti, kompas i otkriće da struja stvara magnetizam.',
hook:'Danski profesor Hans Kristijan Ersted je 1820. držao predavanje studentima. Slučajno je kompas stajao pored žice kroz koju je pustio struju, i igla se okrenula! To je bio jedan od najvažnijih slučajnih trenutaka u istoriji nauke. Pokazalo se da su elektricitet i magnetizam dve strane iste pojave.',
parts:[
['Magneti i polovi','<p>Svaki magnet ima dva pola: <b>severni (N)</b> i <b>južni (S)</b>. <span class="hl">Istoimeni polovi se odbijaju, raznoimeni privlače.</span> Ako prelomiš magnet, ne dobiješ odvojen N i S pol, nego dva nova mala magneta, svaki sa oba pola.</p><p class="note">I Zemlja je veliki magnet. Zato se igla kompasa okreće ka severu.</p>'],
['Magnetno polje','<p>Oko magneta postoji <span class="hl">magnetno polje</span>. Prikazujemo ga linijama koje izlaze iz severnog pola i ulaze u južni. Igla kompasa se uvek postavi duž linija polja. Jačina polja je <b>magnetna indukcija</b> ($B$), a jedinica je tesla ($T$), nazvana po Nikoli Tesli.</p>'],
['Struja stvara magnetno polje','<p>Oko provodnika kroz koji teče struja nastaje magnetno polje čije linije su <b>krugovi</b> oko žice. Smer određujemo <span class="hl">pravilom desne ruke</span>: palac pokazuje smer struje, a savijeni prsti smer linija polja. Ako žicu namotaš u kalem, dobijaš <b>elektromagnet</b>, koji se uključuje i isključuje strujom.</p>']],
simT:'Kompasi oko žice i magneta',simNote:'Pojačaj struju: igle se poređaju u krugove oko žice. Promeni smer struje (negativna vrednost) i igle se okrenu. Prebaci na šipkasti magnet i vidi njegove linije polja.',
f:[['$B = μ₀ · I / (2πr)$','Polje oko pravog provodnika: jače je uz veću struju, a slabi sa rastojanjem $r$.'],['$μ₀ = 4π · 10⁻⁷ T·m/A$','Magnetna permeabilnost vakuuma (konstanta).'],['$1 T$','Tesla je velika jedinica. Zemljino polje je oko $0,00005 T$.']],
ex:{q:'Kroz dugu pravu žicu teče struja 10 A. Kolika je magnetna indukcija na 2 cm od žice? ($μ₀ = 4π · 10⁻⁷$)',s:['$B = μ₀I/(2πr) = 4π·10⁻⁷ · 10 / (2π · 0,02)$.','$π$ se skrati: $B = 2·10⁻⁷ · 10 / 0,02$.','$B = 10⁻⁴ T = 0,0001 T$, dva puta jače od Zemljinog polja.'],a:'Odgovor: $B = 0,0001 T$.'},
mem:['Magnet ima severni i južni pol. Istoimeni se odbijaju.','Linije polja izlaze iz N i ulaze u S.','Struja stvara magnetno polje (Ersted). Linije oko žice su krugovi.','Jedinica magnetne indukcije je tesla ($T$).'],
yt:'magnetno polje Erstedov ogled pravilo desne ruke',
quiz:[
['Dva severna pola magneta:',['se privlače','se odbijaju','ne deluju','se spoje'],1,'Istoimeni polovi se odbijaju.'],
['Šta je Ersted otkrio 1820?',['da struja stvara magnetno polje','gravitaciju','elektron','radio-talase'],0,'Igla kompasa se pomerila pored žice sa strujom.'],
['Kakvog su oblika linije polja oko prave žice sa strujom?',['prave linije','krugovi oko žice','spirale ka žici','nema linija'],1,'Linije su koncentrični krugovi oko žice.'],
['Koja je jedinica magnetne indukcije i po kome nosi ime?',['volt, po Volti','tesla, po Nikoli Tesli','amper, po Amperu','om, po Omu'],1,'Jedinica je tesla ($T$).'],
['Šta se dobija kad prelomiš magnet na pola?',['jedan N i jedan S pol odvojeno','dva magneta, svaki sa N i S polom','dva nemagnetna komada','samo N polove'],1,'Magnetni polovi uvek dolaze u paru.'],
['Ako se struja kroz žicu udvostruči, polje na istom mestu je:',['dva puta jače','četiri puta jače','isto','dva puta slabije'],0,'$B$ je srazmerno struji $I$.']]});

L({n:23,y:3,sim:'lorentz',t:'Magnetna sila',s:'Kako magnetno polje gura struju i naelektrisane čestice.',
hook:'Polarna svetlost na nebu iznad Norveške i Islanda je jedan od najlepših prizora na Zemlji. Nastaje kada naelektrisane čestice sa Sunca uđu u Zemljino magnetno polje. Polje ih skrene i navede ka polovima. Tamo udaraju u vazduh i on zasvetli zeleno i ljubičasto.',
parts:[
['Sila na provodnik (Amperova sila)','<p>Ako žicu sa strujom staviš u magnetno polje, na nju deluje sila. Ona je najjača kad je žica normalna (pod pravim uglom) na linije polja. Na ovome rade <span class="hl">električni motori</span>: struja kroz kalem u magnetnom polju stvara silu koja ga okreće.</p>'],
['Sila na česticu (Lorencova sila)','<p>I jedna naelektrisana čestica koja leti kroz magnetno polje oseća silu. Ta sila je uvek <span class="hl">normalna na brzinu</span>, pa čestica ne usporava, nego <b>skreće</b>. U jednorodnom polju kruži po krugu!</p><p class="note">Proton i elektron skreću na suprotne strane jer imaju suprotna naelektrisanja.</p>'],
['Gde se to koristi','<p>Električni motori (u mikseru, vešu, električnom autu), zvučnici, ubrzivači čestica kao u CERN-u, a nekad i stari televizori sa „debelim“ ekranom.</p>']],
simT:'Čestica u magnetnom polju',simNote:'Promeni jačinu polja: jače polje daje manji krug. Povećaj brzinu: krug je veći. Promeni česticu i vidi da elektron kruži na drugu stranu.',
f:[['$F = B · I · l$','Amperova sila na žicu dužine $l$ sa strujom $I$, normalnu na polje.'],['$F = q · v · B$','Lorencova sila na česticu naelektrisanja $q$ i brzine $v$.'],['$r = m·v / (q·B)$','Poluprečnik kruga po kome čestica kruži.']],
ex:{q:'Žica dužine 0,5 m sa strujom 4 A nalazi se normalno na polje od 0,2 T. Kolika sila deluje na nju?',s:['Amperova sila: $F = B·I·l$.','$F = 0,2 · 4 · 0,5$.','$F = 0,4 N$.'],a:'Odgovor: na žicu deluje sila od 0,4 N.'},
mem:['Magnetno polje deluje silom na struju i na naelektrisanja u pokretu.','Amperova sila: $F = BIl$. Na njoj rade elektromotori.','Lorencova sila: $F = qvB$, normalna je na brzinu.','Čestica u magnetnom polju kruži.'],
yt:'Lorencova sila Amperova sila elektromotor',
quiz:[
['Na čemu rade električni motori?',['na sili magnetnog polja na struju','na gravitaciji','na trenju','na pritisku gasa'],0,'Struja u magnetnom polju trpi Amperovu silu koja okreće rotor.'],
['Kolika je sila na žicu: $B = 0,5 T$, $I = 2 A$, $l = 1 m$?',['$1 N$','$2,5 N$','$4 N$','$0,25 N$'],0,'$F = BIl = 0,5 · 2 · 1 = 1 N$.'],
['Kako je usmerena Lorencova sila u odnosu na brzinu čestice?',['u istom smeru','suprotno','normalno (pod pravim uglom)','pod 45°'],2,'Sila je normalna na brzinu, pa čestica skreće.'],
['Kakvu putanju ima naelektrisana čestica koja uleti normalno u homogeno magnetno polje?',['pravu liniju','krug','parabolu','cik-cak'],1,'Sila normalna na brzinu tera česticu da kruži.'],
['Da li magnetno polje deluje na naelektrisanje koje MIRUJE?',['da','ne','samo na proton','samo na elektron'],1,'$F = qvB$: kad je $v = 0$, sila je nula.'],
['Šta izaziva polarnu svetlost?',['odbijanje Meseca','čestice sa Sunca koje Zemljino magnetno polje usmerava ka polovima','vulkani','munje'],1,'Polje skreće naelektrisane čestice ka polovima, gde one pobuđuju vazduh da svetli.']]});

L({n:24,y:3,sim:'induction',t:'Elektromagnetna indukcija',s:'Kako magnet „proizvodi“ struju.',
hook:'Ako struja stvara magnetizam, može li magnet da stvori struju? To pitanje je mučilo Majkla Faradeja deset godina. Godine 1831. konačno je uspeo: kad gurne magnet u kalem, igla instrumenta zatrepere. Kad magnet stoji, ništa! Ovo otkriće je osnova svake elektrane na svetu.',
parts:[
['Faradejevo otkriće','<p><span class="hl">Struja se indukuje (stvara) u kalemu samo dok se magnetno polje kroz njega MENJA.</span> Pomeraj magnet: ima struje. Zaustavi ga: struje nema. Što brže pomeraš magnet, struja je jača.</p>'],
['Magnetni fluks','<p>Fluks ($Φ$) je mera „koliko linija polja prolazi kroz kalem“. Indukovani napon zavisi od toga <b>koliko brzo se fluks menja</b> i od <b>broja navojaka</b> kalema.</p>'],
['Lencovo pravilo','<p>Indukovana struja uvek ima takav smer da <span class="hl">se protivi promeni</span> koja ju je izazvala. Kad guraš magnet u kalem, kalem ga „odguruje“. Zato ne možeš besplatno da dobiješ energiju: moraš da vršiš rad da bi gurala magnet.</p><p class="note">Primeri: generator u elektrani, dinamo na biciklu, indukcione ploče za kuvanje i bežično punjenje telefona.</p>']],
simT:'Magnet i kalem',simNote:'Posmatraj galvanometar (G). Struja teče samo dok se magnet kreće. Postavi brzinu na nulu i vuci magnet sama. Povećaj broj navojaka i struja će biti jača.',
f:[['$Φ = B · S$','Magnetni fluks = indukcija × površina kroz koju polje prolazi. Jedinica veber ($Wb$).'],['$ε = -N · ΔΦ / Δt$','Faradejev zakon: indukovani napon = broj navojaka × brzina promene fluksa. Minus je Lencovo pravilo.']],
ex:{q:'Fluks kroz kalem od 100 navojaka promeni se za 0,02 Wb za 0,1 s. Koliki se napon indukuje?',s:['Brzina promene fluksa: $ΔΦ/Δt = 0,02 : 0,1 = 0,2 Wb/s$.','Pomnožimo brojem navojaka: $ε = 100 · 0,2$.','$ε = 20 V$.'],a:'Odgovor: indukuje se napon od 20 V.'},
mem:['Promenljivo magnetno polje indukuje struju (Faradej, 1831).','Kad nema promene, nema ni struje.','Indukovani napon je veći za bržu promenu i više navojaka.','Lencovo pravilo: indukovana struja se protivi promeni.'],
yt:'elektromagnetna indukcija Faradejev zakon Lencovo pravilo',
quiz:[
['Kada se u kalemu indukuje struja?',['kad magnet miruje u kalemu','kad se magnetno polje kroz kalem menja','uvek kad je magnet blizu','nikada'],1,'Potrebna je promena fluksa.'],
['Kako da dobiješ jaču indukovanu struju?',['sporije pomeraj magnet','brže pomeraj magnet i koristi više navojaka','koristi manje navojaka','zaustavi magnet'],1,'Veća brzina promene fluksa i više navojaka daju veći napon.'],
['Šta kaže Lencovo pravilo?',['indukovana struja pomaže promeni','indukovana struja se protivi promeni koja ju je izazvala','struja uvek teče u krug','magnet se pojačava'],1,'Smer indukovane struje je takav da se protivi uzroku.'],
['Kalem ima 50 navojaka, a fluks se menja $0,1 Wb/s$. Napon je:',['$5 V$','$500 V$','$0,002 V$','$50 V$'],0,'$ε = N·ΔΦ/Δt = 50 · 0,1 = 5 V$.'],
['Koji uređaj radi na principu elektromagnetne indukcije?',['generator u elektrani','sijalica','termometar','kondenzator'],0,'Generator okreće kalem u magnetnom polju i tako stvara struju.'],
['Ko je otkrio elektromagnetnu indukciju?',['Njutn','Faradej','Arhimed','Galilej'],1,'Majkl Faradej, 1831. godine.']]});

L({n:25,y:3,sim:'ac',t:'Naizmenična struja i transformator',s:'Struja iz utičnice i kako se napon menja.',
hook:'Krajem 19. veka vodio se „rat struja“. Edison je zagovarao jednosmernu struju, a Nikola Tesla naizmeničnu. Tesla je pobedio: 1895. hidroelektrana na Nijagarinim vodopadima, izgrađena po njegovim patentima, poslala je naizmeničnu struju do udaljenih gradova. Zato danas u svakoj utičnici imamo upravo Teslinu naizmeničnu struju.',
parts:[
['Šta je naizmenična struja?','<p>Kod <span class="hl">naizmenične struje</span> elektroni stalno menjaju smer: malo napred, malo nazad. U Srbiji i u Evropi smer se menja 50 puta u sekundi napred i nazad, to jest frekvencija je <b>50 Hz</b>. Grafik napona izgleda kao talas (sinusoida).</p>'],
['Generator','<p>Generator je kalem koji se okreće u magnetnom polju. Dok se okreće, fluks kroz njega se stalno menja, pa se indukuje napon, čas pozitivan, čas negativan. Vodu, paru ili vetar koristimo samo da bismo okretali generator.</p>'],
['Transformator','<p>Transformator čine dva kalema na istom gvozdenom jezgru. Naizmenična struja u prvom kalemu stvara promenljivo polje, a ono indukuje napon u drugom. <span class="hl">Napon se menja onoliko puta koliko se razlikuje broj navojaka.</span></p><p class="note">Elektrane podižu napon na 400 000 V da bi se struja preko dalekovoda prenela sa malo gubitaka. Pred tvojom kućom transformator ga spušta na 230 V. Punjač telefona ga spušta na oko 5 V.</p>']],
simT:'Generator i transformator',simNote:'U režimu „Generator“ gledaj kako okretanje kalema daje talasast napon. U režimu „Transformator“ menjaj broj navojaka i vidi kako se menja izlazni napon.',
f:[['$U₂ / U₁ = N₂ / N₁$','Odnos napona jednak je odnosu broja navojaka.'],['$f = 50 Hz$','Frekvencija mreže u Evropi.'],['$U_ef = U_max / √2$','Efektivni napon (230 V) je manji od najvećeg (oko 325 V).']],
ex:{q:'Transformator ima 1000 navojaka na primaru i 50 na sekundaru. Na primar je doveden napon od 230 V. Koliki je napon na sekundaru?',s:['$U₂ = U₁ · N₂/N₁$.','$U₂ = 230 · 50/1000 = 230 : 20$.','$U₂ = 11,5 V$.'],a:'Odgovor: na sekundaru je 11,5 V. Ovo je transformator koji smanjuje napon.'},
mem:['Naizmenična struja stalno menja smer; u mreži je 50 Hz i 230 V.','Generator: kalem se okreće u magnetnom polju.','Transformator radi samo sa naizmeničnom strujom.','$U₂/U₁ = N₂/N₁$.'],
yt:'naizmenična struja generator transformator Tesla',
quiz:[
['Kolika je frekvencija struje u gradskoj mreži u Srbiji?',['$50 Hz$','$60 Hz$','$230 Hz$','$1 Hz$'],0,'U Evropi je mrežna frekvencija $50 Hz$.'],
['Ko je zaslužan za uvođenje naizmenične struje?',['Edison','Nikola Tesla','Njutn','Kulon'],1,'Teslini patenti su omogućili prenos naizmenične struje na velike daljine.'],
['Primar ima 200, a sekundar 400 navojaka. Ulaz je $100 V$. Izlaz je:',['$50 V$','$200 V$','$400 V$','$100 V$'],1,'$U₂ = 100 · 400/200 = 200 V$.'],
['Zašto dalekovodi koriste veoma visok napon?',['da bi bili opasniji','da bi gubici pri prenosu bili manji','zbog izgleda','jer je jeftinije za kuće'],1,'Pri visokom naponu struja je mala, pa je manje zagrevanje žica.'],
['Da li transformator radi sa jednosmernom strujom iz baterije?',['da','ne, potrebno mu je promenljivo polje','samo ako je mali','samo leti'],1,'Indukcija traži promenu fluksa, a jednosmerna struja daje stalno polje.'],
['Šta je generator?',['kalem koji se okreće u magnetnom polju','baterija','kondenzator','otpornik'],0,'Okretanjem kalema u polju indukuje se naizmenični napon.']]});

L({n:26,y:3,sim:'osc',t:'Oscilacije',s:'Ljuljaška, klatno, opruga: kretanje „tamo-amo“.',
hook:'Galilej je kao mladić u katedrali u Pizi posmatrao luster koji se njihao. Brojao je otkucaje sopstvenog pulsa i otkrio nešto neverovatno. Bez obzira da li se luster njiše malo ili mnogo, jedan zamah traje isto. Na tome su kasnije napravljeni satovi sa klatnom, najprecizniji satovi 300 godina.',
parts:[
['Šta je oscilovanje?','<p>Oscilovanje je kretanje koje se <span class="hl">ponavlja oko ravnotežnog položaja</span>: ljuljaška, klatno sata, teg na opruzi, žica gitare. Telo se udaljava od ravnoteže, vraća se, prelazi na drugu stranu i tako stalno.</p>'],
['Važni pojmovi','<ul><li><b>Amplituda</b> ($A$): najveće udaljenje od ravnoteže.</li><li><b>Period</b> ($T$): vreme jedne cele oscilacije (tamo i nazad).</li><li><b>Frekvencija</b> ($f$): broj oscilacija u sekundi, $f = 1/T$, u hercima ($Hz$).</li></ul><p>Grafik položaja tokom vremena je talasasta linija (sinusoida).</p>'],
['Opruga i klatno','<p>Period <b>tega na opruzi</b> zavisi od mase i krutosti: teži teg osciluje sporije, a krutija opruga brže. Period <b>klatna</b> zavisi samo od dužine konca (i od $g$), a <span class="hl">ne zavisi od mase</span>. <b>Rezonancija</b>: ako ljuljašku guraš u pravom ritmu, svaki put ide sve više.</p>']],
simT:'Opruga i klatno',simNote:'Menjaj masu i krutost opruge i gledaj kako se menja period. Prebaci na klatno i produži konac: duže klatno se njiše sporije.',
f:[['$T = 2π √(m / k)$','Period tega na opruzi.'],['$T = 2π √(l / g)$','Period matematičkog klatna (za male uglove).'],['$f = 1 / T$','Frekvencija je obrnuta vrednost perioda.']],
ex:{q:'Kolika je dužina klatna čiji je period 2 s? (uzmi $g = π² ≈ 9,87 m/s²$)',s:['Iz $T = 2π√(l/g)$: $√(l/g) = T/(2π) = 2/(2π) = 1/π$.','Kvadriramo: $l/g = 1/π²$, pa je $l = g/π²$.','Pošto je $g ≈ π²$, sledi $l ≈ 1 m$.'],a:'Odgovor: klatno dugačko oko 1 m ima period 2 s (jedan zamah u jednu stranu traje 1 s).'},
mem:['Oscilovanje je ponavljanje kretanja oko ravnoteže.','Amplituda, period $T$, frekvencija $f = 1/T$.','Klatno: $T = 2π√(l/g)$, ne zavisi od mase.','Opruga: $T = 2π√(m/k)$.'],
yt:'mehaničke oscilacije matematičko klatno period frekvencija',
quiz:[
['Šta je amplituda?',['vreme jedne oscilacije','najveće udaljenje od ravnoteže','broj oscilacija u sekundi','masa tega'],1,'Amplituda je najveća udaljenost od ravnotežnog položaja.'],
['Klatno napravi 20 oscilacija za 10 s. Period je:',['$2 s$','$0,5 s$','$200 s$','$10 s$'],1,'$T = 10 : 20 = 0,5 s$.'],
['Ako je period $0,25 s$, frekvencija je:',['$4 Hz$','$0,25 Hz$','$25 Hz$','$2 Hz$'],0,'$f = 1/T = 1 : 0,25 = 4 Hz$.'],
['Od čega NE zavisi period klatna?',['od dužine','od mase tega','od ubrzanja $g$','od planete'],1,'Period klatna zavisi samo od $l$ i $g$, a ne od mase.'],
['Teg na opruzi zamenimo težim. Period je:',['manji','veći','isti','nula'],1,'$T = 2π√(m/k)$: veća masa daje veći period.'],
['Šta je rezonancija?',['zaustavljanje oscilacija','veliko povećanje amplitude kad se sila ponavlja u ritmu sopstvenih oscilacija','promena boje','vrsta trenja'],1,'Kao guranje ljuljaške u pravom trenutku.']]});

L({n:27,y:3,sim:'wave',t:'Mehanički talasi',s:'Kako se poremećaj širi, a materija ostaje u mestu.',
hook:'Na fudbalskoj utakmici navijači prave „meksički talas“. Talas obiđe ceo stadion, a nijedan navijač nije napustio svoje sedište. Svako je samo ustao i seo. Upravo tako rade svi talasi: <b>prenose energiju, a ne materiju</b>.',
parts:[
['Šta je talas?','<p>Talas je <span class="hl">širenje oscilovanja kroz sredinu</span>. Kad baciš kamen u jezero, krugovi se šire, ali patka na vodi samo se podiže i spušta u mestu. Talas nosi energiju sa jednog mesta na drugo.</p>'],
['Transverzalni i longitudinalni','<ul><li><b>Transverzalni</b> (poprečni): čestice osciluju normalno na smer širenja talasa. Primer: talas na konopcu.</li><li><b>Longitudinalni</b> (uzdužni): čestice osciluju u pravcu širenja i stvaraju zgušnjenja i razređenja. Primer: zvuk, „slinki“ opruga.</li></ul>'],
['Talasna dužina i brzina','<p><b>Talasna dužina</b> ($λ$, lambda) je rastojanje između dva susedna brega. Za jedan period talas pređe tačno jednu talasnu dužinu. Odatle sledi najvažnija formula o talasima:</p><p class="note">$v = λ · f$. Brzina = talasna dužina × frekvencija.</p>']],
simT:'Talas na konopcu i u opruzi',simNote:'Prati crvenu česticu: ona se samo pomera gore-dole (ili levo-desno), a talas putuje. Povećaj frekvenciju: talasna dužina postaje kraća.',
f:[['$v = λ · f$','Brzina talasa = talasna dužina × frekvencija.'],['$λ = v / f$','Veća frekvencija daje kraću talasnu dužinu.'],['$T = 1 / f$','Za jedan period talas pređe jednu talasnu dužinu.']],
ex:{q:'Talas na vodi ima frekvenciju 2 Hz i talasnu dužinu 1,5 m. Kolika mu je brzina?',s:['Koristimo $v = λ·f$.','$v = 1,5 m · 2 Hz$.','$v = 3 m/s$.'],a:'Odgovor: talas se širi brzinom 3 m/s.'},
mem:['Talas prenosi energiju, a ne materiju.','Transverzalni: oscilovanje normalno na smer širenja. Longitudinalni: u smeru širenja.','Talasna dužina $λ$ = rastojanje između dva brega.','$v = λ·f$.'],
yt:'mehanički talasi transverzalni longitudinalni talasna dužina',
quiz:[
['Šta talas prenosi?',['materiju','energiju','vodu','vazduh'],1,'Talas prenosi energiju; čestice ostaju u mestu i samo osciluju.'],
['Kod koje vrste talasa čestice osciluju normalno na smer širenja?',['longitudinalnog','transverzalnog','zvučnog','nijednog'],1,'Kod transverzalnog (poprečnog) talasa.'],
['Talas: $λ = 2 m$, $f = 5 Hz$. Brzina je:',['$10 m/s$','$2,5 m/s$','$7 m/s$','$0,4 m/s$'],0,'$v = λ·f = 2 · 5 = 10 m/s$.'],
['Zvuk u vazduhu je primer:',['transverzalnog talasa','longitudinalnog talasa','svetlosnog talasa','nije talas'],1,'Zvuk čine zgušnjenja i razređenja vazduha, pa je longitudinalan.'],
['Šta je talasna dužina?',['visina talasa','rastojanje između dva susedna brega','vreme jedne oscilacije','brzina talasa'],1,'Rastojanje između dve susedne tačke u istoj fazi, npr. dva brega.'],
['Ako se frekvencija poveća (brzina ista), talasna dužina:',['raste','opada','ne menja se','postaje nula'],1,'$λ = v/f$: veća frekvencija daje kraću talasnu dužinu.']]});

L({n:28,y:3,sim:'doppler',t:'Zvuk',s:'Talasi koje čujemo: visina tona, jačina i Doplerov efekat.',
hook:'Kad pored tebe prođe kola hitne pomoći, sirena prvo zvuči piskavo, a onda odjednom „padne“ u dublji ton. Sirena se nije promenila, promenilo se ono što ti čuješ. Ovu pojavu je 1842. objasnio austrijski fizičar Kristijan Dopler, a danas je koriste radari policije i lekari na ultrazvuku.',
parts:[
['Šta je zvuk?','<p>Zvuk je <span class="hl">longitudinalni mehanički talas</span>: zgušnjenja i razređenja vazduha koja putuju do našeg uha. Zvuku treba sredina (vazduh, voda, čvrsto telo). U vakuumu svemira nema zvuka! U vazduhu zvuk putuje oko $340 m/s$, a u vodi oko 4 puta brže.</p>'],
['Visina i jačina zvuka','<ul><li><b>Visina tona</b> zavisi od frekvencije: veća frekvencija daje viši (tanji) ton. Čovek čuje od oko 20 Hz do 20 000 Hz. Ispod toga je infrazvuk, a iznad ultrazvuk (slepi miševi, delfini, ultrazvučni pregled).</li><li><b>Jačina</b> zavisi od amplitude i meri se u decibelima ($dB$). Šapat je oko 20 dB, a rok koncert oko 110 dB.</li></ul>'],
['Doplerov efekat','<p>Kad se izvor zvuka <b>približava</b>, talasi se „zbijaju“ ispred njega, pa čujemo <span class="hl">viši ton</span>. Kad se <b>udaljava</b>, talasi se razvlače i ton je <b>niži</b>. Ako avion leti brže od zvuka, talasi se nagomilaju u udarni talas i čuje se zvučni prasak.</p>']],
simT:'Pokretni izvor zvuka',simNote:'Povećaj brzinu izvora. Ispred njega su krugovi gusto, a iza retko. Pomeri klizač iznad 1 (brže od zvuka) i vidi kako nastaje udarni talas.',
f:[['$v = λ · f$','Važi i za zvuk; u vazduhu $v ≈ 340 m/s$.'],['$s = v · t / 2$','Eho: zvuk ide do prepreke i nazad, pa se put deli sa 2.'],['$f\' = f · v / (v ∓ v_i)$','Doplerov efekat: minus kad se izvor približava (viši ton), plus kad se udaljava.']],
ex:{q:'Viknula si prema steni i čula eho posle 2 s. Koliko je stena daleko? ($v = 340 m/s$)',s:['Za 2 s zvuk je otišao do stene i vratio se.','Ukupan put: $340 · 2 = 680 m$.','Do stene je pola toga: $680 : 2 = 340 m$.'],a:'Odgovor: stena je 340 m daleko.'},
mem:['Zvuk je longitudinalni talas, a u vakuumu ne postoji.','Brzina zvuka u vazduhu je oko $340 m/s$.','Visina tona zavisi od frekvencije, a jačina od amplitude (dB).','Dopler: izvor se približava → viši ton; udaljava → niži.'],
yt:'zvuk Doplerov efekat ultrazvuk fizika',
quiz:[
['Može li se zvuk čuti u svemiru (vakuumu)?',['da','ne, zvuku je potrebna sredina','samo glasan zvuk','samo blizu planete'],1,'Zvuk je mehanički talas i ne može da se širi kroz vakuum.'],
['Od čega zavisi visina tona?',['od amplitude','od frekvencije','od brzine vetra','od temperature uha'],1,'Veća frekvencija daje viši ton.'],
['Šta je ultrazvuk?',['zvuk iznad 20 000 Hz','zvuk ispod 20 Hz','jako glasan zvuk','svetlost'],0,'Ultrazvuk ima frekvenciju veću od one koju čovek čuje.'],
['Kola hitne pomoći se PRIBLIŽAVAJU. Ton koji čuješ je:',['niži','viši','isti','ne čuje se'],1,'Talasi se zbijaju, pa je frekvencija koju čuješ veća.'],
['Eho se čuje posle $4 s$. Prepreka je udaljena ($v = 340 m/s$):',['$1360 m$','$680 m$','$340 m$','$85 m$'],1,'$s = v·t/2 = 340 · 4 / 2 = 680 m$.'],
['Šta je zvučni prasak?',['zvuk motora','udarni talas kad telo leti brže od zvuka','eho od planine','zvuk munje'],1,'Talasi se nagomilaju ispred tela koje je brže od zvuka.']]});

L({n:29,y:3,sim:'spectrum',t:'Elektromagnetni talasi',s:'Od radija do rendgena: svetlost je samo mali deo priče.',
hook:'Džejms Klark Maksvel je 1865. sabrao sve što se znalo o elektricitetu i magnetizmu u četiri jednačine. Iz njih je izračunao da promenljivo električno i magnetno polje mogu da putuju kroz prostor kao talas, i to brzinom svetlosti. Zaključio je da je svetlost elektromagnetni talas! Hajnrih Herc je 20 godina kasnije u laboratoriji napravio prve radio-talase.',
parts:[
['Šta je elektromagnetni talas?','<p>To su <span class="hl">električno i magnetno polje koji osciluju i jedno drugo „guraju“ napred</span>. Za razliku od zvuka, njima ne treba sredina, pa putuju i kroz prazan svemir. Zato do nas stiže svetlost Sunca i zvezda. Svi putuju istom brzinom, brzinom svetlosti: $c = 300 000 km/s$.</p>'],
['Spektar','<p>Svi EM talasi su ista pojava, samo različite talasne dužine. Od najdužih do najkraćih:</p><ul><li><b>radio-talasi</b>: radio, TV</li><li><b>mikrotalasi</b>: Wi-Fi, mobilni, mikrotalasna rerna</li><li><b>infracrveno</b>: toplota, daljinski upravljač</li><li><b>vidljiva svetlost</b>: od crvene do ljubičaste</li><li><b>ultraljubičasto</b>: preplanulost, opekotine od sunca</li><li><b>rendgenski (X) zraci</b>: snimanje kostiju</li><li><b>gama zraci</b>: radioaktivnost</li></ul>'],
['Energija i opasnost','<p>Što je talasna dužina <b>kraća</b> (frekvencija veća), talas nosi <span class="hl">više energije</span>. Zato UV zraci mogu da oštete kožu, a rendgen i gama zraci mogu da oštete ćelije. Radio-talasi su bezopasni.</p>']],
simT:'Putovanje kroz spektar',simNote:'Pomeraj klizač od gama zraka do radio-talasa. U vidljivom delu talas dobija pravu boju. Primeti kako talas postaje „gušći“ prema gama zracima.',
f:[['$c = λ · f$','Brzina svetlosti = talasna dužina × frekvencija.'],['$c = 3 · 10⁸ m/s$','Brzina svetlosti u vakuumu, najveća brzina u prirodi.'],['$λ = 380 – 750 nm$','Opseg vidljive svetlosti: od ljubičaste do crvene.']],
ex:{q:'Radio-stanica emituje na 100 MHz. Kolika je talasna dužina tih talasa?',s:['$f = 100 MHz = 100 · 10⁶ Hz = 10⁸ Hz$.','$λ = c/f = 3 · 10⁸ : 10⁸$.','$λ = 3 m$.'],a:'Odgovor: talasna dužina je 3 metra.'},
mem:['EM talasi su oscilacije električnog i magnetnog polja.','Ne treba im sredina, pa putuju i kroz vakuum.','Svi putuju brzinom $c = 3·10⁸ m/s$.','Kraća talasna dužina znači više energije (gama, X, UV su opasni).'],
yt:'elektromagnetni talasi spektar Maksvel',
quiz:[
['Po čemu se EM talasi razlikuju od zvuka?',['ne trebaju im sredina i putuju kroz vakuum','sporiji su','ne prenose energiju','ne postoje u prirodi'],0,'EM talasi putuju i kroz prazan prostor.'],
['Koji EM talasi imaju najkraću talasnu dužinu?',['radio','vidljiva svetlost','gama zraci','infracrveni'],2,'Gama zraci su na kraju spektra sa najkraćim talasima.'],
['Koja boja vidljive svetlosti ima najveću talasnu dužinu?',['ljubičasta','plava','crvena','zelena'],2,'Crvena svetlost ima oko 700 nm, a ljubičasta oko 400 nm.'],
['Šta koristi daljinski upravljač za televizor?',['infracrveno zračenje','gama zrake','zvuk','X zrake'],0,'Daljinski šalje infracrvene impulse.'],
['Talas ima frekvenciju $3·10⁸ Hz$. Talasna dužina je ($c = 3·10⁸ m/s$):',['$1 m$','$3 m$','$9 m$','$0,1 m$'],0,'$λ = c/f = 1 m$.'],
['Zašto su UV zraci opasniji od infracrvenih?',['kraća talasna dužina, pa više energije','duža talasna dužina','sporiji su','topliji su'],0,'Kraća talasna dužina znači veću energiju koja može da ošteti ćelije kože.']]});

L({n:30,y:3,sim:'refraction',t:'Odbijanje i prelamanje svetlosti',s:'Ogledala, kašika „slomljena“ u čaši i optička vlakna.',
hook:'Stavi kašiku u čašu vode i pogledaj sa strane: izgleda kao da je slomljena na površini! Ribari to znaju odavno. Riba nije tamo gde je vidiš, nego malo dublje. Svetlost menja pravac kad prelazi iz vode u vazduh. Ta pojava se zove prelamanje i na njoj rade naočare, kamere i internet preko optičkih vlakana.',
parts:[
['Zakon odbijanja','<p>Kad svetlost padne na ogledalo, odbija se tako da je <span class="hl">upadni ugao jednak odbojnom</span>. Uglove merimo od <b>normale</b>, zamišljene linije pod pravim uglom na površinu. Isto kao lopta koja se odbija od zida.</p>'],
['Prelamanje','<p>Kad svetlost prelazi iz jedne sredine u drugu (vazduh → voda), menja brzinu i zato <b>skreće</b>. Svaka sredina ima <span class="hl">indeks prelamanja</span> $n$: koliko puta je svetlost u njoj sporija nego u vakuumu. Vazduh 1, voda 1,33, staklo 1,5, dijamant 2,42.</p><p class="note">Pravilo: kad svetlost ulazi u gušću sredinu (veće $n$), skreće <b>ka normali</b>. Kad izlazi u ređu, skreće <b>od normale</b>.</p>'],
['Totalna refleksija','<p>Ako svetlost iz vode ili stakla ide ka vazduhu pod dovoljno velikim uglom, ona uopšte ne izlazi, nego se sva odbije nazad! Na tome rade <span class="hl">optička vlakna</span>: svetlost se odbija od zidova staklene niti i nosi internet ispod okeana. Zato i dijamant toliko blista.</p>']],
simT:'Zrak svetlosti na granici',simNote:'Menjaj upadni ugao i sredine. Iz vazduha u staklo zrak se lomi ka normali. Stavi staklo gore, vazduh dole i povećaj ugao preko 42°: dobijaš totalnu refleksiju!',
f:[['$α = α\'$','Zakon odbijanja: upadni ugao = odbojni ugao.'],['$n₁ · sin α = n₂ · sin β$','Snelijusov zakon prelamanja.'],['$n = c / v$','Indeks prelamanja: koliko puta je svetlost sporija u sredini.'],['$sin α_g = n₂ / n₁$','Granični ugao totalne refleksije.']],
ex:{q:'Kolika je brzina svetlosti u staklu indeksa prelamanja 1,5?',s:['Iz $n = c/v$ sledi $v = c/n$.','$v = 300 000 km/s : 1,5$.','$v = 200 000 km/s$.'],a:'Odgovor: u staklu svetlost putuje 200 000 km/s.'},
mem:['Odbijanje: upadni ugao = odbojni ugao (od normale).','Prelamanje: u gušćoj sredini zrak skreće ka normali.','Indeks prelamanja $n = c/v$.','Totalna refleksija: osnova optičkih vlakana.'],
yt:'zakon odbijanja prelamanje svetlosti totalna refleksija',
quiz:[
['Svetlost pada na ogledalo pod uglom od $30°$ prema normali. Odbojni ugao je:',['$60°$','$30°$','$90°$','$15°$'],1,'Upadni ugao je jednak odbojnom.'],
['Zašto kašika u vodi izgleda slomljeno?',['zbog odbijanja','zbog prelamanja svetlosti','zbog boje vode','zbog toplote'],1,'Svetlost menja pravac na granici voda-vazduh.'],
['Kad svetlost prelazi iz vazduha u vodu, ona skreće:',['ka normali','od normale','ne skreće','unazad'],0,'Voda je optički gušća, pa zrak skreće ka normali.'],
['Indeks prelamanja vode je 1,33. To znači da je svetlost u vodi:',['1,33 puta brža','1,33 puta sporija','ista','33 puta sporija'],1,'$n = c/v$: svetlost je $n$ puta sporija.'],
['Na čemu rade optička vlakna?',['na totalnoj refleksiji','na magnetizmu','na zvuku','na gravitaciji'],0,'Svetlost se potpuno odbija od zidova vlakna i ne izlazi.'],
['Kada je moguća totalna refleksija?',['kad svetlost ide iz ređe u gušću sredinu','kad svetlost ide iz gušće u ređu sredinu pod velikim uglom','uvek','nikad'],1,'Samo pri prelazu u optički ređu sredinu, iznad graničnog ugla.']]});

L({n:31,y:3,sim:'lens',t:'Sočiva i oko',s:'Lupa, naočare i kamera: kako sočiva stvaraju lik.',
hook:'Holandski trgovac tkaninama Antoni van Levenhuk brusio je sitna sočiva da bi proverio kvalitet niti. Kroz svoje mikroskope je 1676. prvi u istoriji ugledao bakterije i nazvao ih „životinjicama“. Jedno parče zakrivljenog stakla otvorilo je čitav nevidljivi svet.',
parts:[
['Sabirna i rasipna sočiva','<ul><li><b>Sabirno</b> (ispupčeno, deblje u sredini) skuplja paralelne zrake u jednu tačku, <span class="hl">žižu</span> (F). Lupa, objektiv kamere, naočare za dalekovide.</li><li><b>Rasipno</b> (udubljeno, tanje u sredini) rasipa zrake. Naočare za kratkovide.</li></ul><p><b>Žižna daljina</b> ($f$) je rastojanje od sočiva do žiže.</p>'],
['Kakav lik nastaje?','<p>Kod sabirnog sočiva sve zavisi od toga koliko je predmet daleko:</p><ul><li>predmet <b>dalje od žiže</b>: lik je <span class="hl">stvaran i obrnut</span>, može da se uhvati na zid (projektor, kamera, oko),</li><li>predmet <b>bliže od žiže</b>: lik je <span class="hl">imaginaran, uspravan i uvećan</span>, vidiš ga kroz sočivo (lupa).</li></ul>'],
['Oko','<p>Oko je prirodna kamera: očno sočivo pravi stvaran, obrnut i umanjen lik na mrežnjači. Mozak ga „okrene“. Kod <b>kratkovidih</b> se lik stvara ispred mrežnjače, pa nose rasipna sočiva. Kod <b>dalekovidih</b> se stvara iza, pa nose sabirna. Jačina naočara se izražava u <b>dioptrijama</b>: $D = 1/f$.</p>']],
simT:'Lik kroz sočivo',simNote:'Pomeraj predmet (zelena strelica). Dok je dalje od žiže, lik (crven) je obrnut sa druge strane. Kad ga primakneš bliže od žiže, lik postaje uspravan i uvećan, kao kod lupe.',
f:[['$1/f = 1/p + 1/l$','Jednačina sočiva: $p$ je udaljenost predmeta, $l$ udaljenost lika.'],['$u = l / p$','Uvećanje: koliko puta je lik veći od predmeta.'],['$D = 1 / f$','Optička moć u dioptrijama ($f$ u metrima).']],
ex:{q:'Predmet je 30 cm ispred sabirnog sočiva žižne daljine 10 cm. Gde se stvara lik i koliko je uvećanje?',s:['$1/l = 1/f - 1/p = 1/10 - 1/30 = 3/30 - 1/30 = 2/30$.','$l = 30/2 = 15 cm$ (iza sočiva, lik je stvaran).','Uvećanje: $u = l/p = 15/30 = 0,5$, pa je lik dvaput manji i obrnut.'],a:'Odgovor: lik je 15 cm iza sočiva, stvaran, obrnut i dvaput umanjen.'},
mem:['Sabirno sočivo skuplja zrake u žižu, a rasipno ih rasipa.','Predmet iza žiže daje stvaran, obrnut lik. Ispred žiže daje uspravan, uvećan, imaginaran lik.','$1/f = 1/p + 1/l$.','Kratkovidost se ispravlja rasipnim, a dalekovidost sabirnim sočivom.'],
yt:'sabirno rasipno sočivo konstrukcija lika oko',
quiz:[
['Kakvo je sočivo lupa?',['rasipno','sabirno','ravno ogledalo','prizma'],1,'Lupa je sabirno sočivo, a predmet je bliže od žiže.'],
['Šta je žiža sočiva?',['centar sočiva','tačka u kojoj se seku paralelni zraci posle prolaska kroz sabirno sočivo','ivica sočiva','boja sočiva'],1,'Paralelni zraci se posle sabirnog sočiva skupljaju u žiži.'],
['Kakav lik stvara očno sočivo na mrežnjači?',['uspravan i uvećan','stvaran, obrnut i umanjen','imaginaran','nikakav'],1,'Kao kamera: stvaran, obrnut, umanjen lik. Mozak ga ispravlja.'],
['Kratkovida osoba nosi naočare sa:',['sabirnim sočivima','rasipnim sočivima','ogledalima','prizmama'],1,'Rasipno sočivo pomera lik nazad na mrežnjaču.'],
['Sočivo ima žižnu daljinu $0,5 m$. Koliko dioptrija ima?',['$0,5 D$','$2 D$','$5 D$','$50 D$'],1,'$D = 1/f = 1/0,5 = 2 D$.'],
['Predmet je $20 cm$ ispred sabirnog sočiva $f = 10 cm$. Lik je udaljen:',['$10 cm$','$20 cm$','$30 cm$','$5 cm$'],1,'$1/l = 1/10 - 1/20 = 1/20$, pa je $l = 20 cm$ (predmet u dvostrukoj žiži daje lik iste veličine).']]});
})(o=>window.LESSONS.push(o));
