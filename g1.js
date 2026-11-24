/* 1. razred: mehanika */
window.LESSONS=window.LESSONS||[];
(function(L){
L({n:1,y:1,sim:'units',t:'Merenje i jedinice',s:'Fizika je jezik prirode, a jedinice su njena azbuka.',
hook:'Godine 1999. NASA je izgubila letelicu vrednu 125 miliona dolara na putu ka Marsu. Razlog nije bio kvar. Jedan tim je računao u funtama, a drugi u njutnima. Isti broj, druga jedinica, i letelica je izgorela u atmosferi. Zato fizičari uvek pišu i broj i jedinicu, kao što u rečenici pišeš i subjekat i predikat.',
parts:[
['Šta je fizička veličina?','<p>Fizička veličina je sve što možemo da <span class="hl">izmerimo</span>: dužina, vreme, masa, temperatura. Svaka veličina ima tri dela: <b>oznaku</b> (slovo), <b>brojnu vrednost</b> i <b>jedinicu</b>.</p><p class="note">Primer: $m = 55 kg$. Ovde je $m$ oznaka za masu, 55 je broj, a $kg$ je jedinica. Bez jedinice broj 55 ne znači ništa: 55 grama? 55 tona?</p>'],
['Međunarodni sistem jedinica (SI)','<p>Ceo svet se dogovorio oko istih osnovnih jedinica. Ovo je „rečnik“ koji ćeš stalno koristiti:</p><ul><li>dužina: metar, $m$</li><li>masa: kilogram, $kg$</li><li>vreme: sekunda, $s$</li><li>temperatura: kelvin, $K$</li><li>jačina električne struje: amper, $A$</li></ul><p>Sve ostale jedinice nastaju od ovih. Na primer, brzina je $m/s$ (metara u sekundi).</p>'],
['Prefiksi: kilo, mili, mikro','<p>Prefiksi su kao skraćenice. Umesto „hiljadu metara“ kažemo <b>kilo</b>metar.</p><ul><li>kilo ($k$) = hiljadu puta više: $1 km = 1000 m$</li><li>centi ($c$) = sto puta manje: $1 cm = 0,01 m$</li><li>mili ($m$) = hiljadu puta manje: $1 mm = 0,001 m$</li><li>mikro ($µ$) = milion puta manje</li></ul><p class="note"><b>Najvažnije preračunavanje:</b> iz $km/h$ u $m/s$ deliš sa 3,6. Iz $m/s$ u $km/h$ množiš sa 3,6. Primer: $72 km/h = 72 : 3,6 = 20 m/s$.</p>']],
simT:'Od atoma do Zemlje',simNote:'Pomeraj klizač i posmatraj kako se menja veličina i koji prefiks koristimo. Svaki podeok na skali znači 10 puta veće.',
f:[['$1 km = 1000 m$','Kilo znači hiljadu.'],['$v [m/s] = v [km/h] : 3,6$','Da pretvoriš brzinu iz kilometara na sat u metre u sekundi, podeli sa 3,6.'],['$1 h = 60 min = 3600 s$','Jedan sat ima 3600 sekundi.']],
ex:{q:'Automobil vozi brzinom 90 km/h. Kolika je to brzina u m/s?',s:['Znamo pravilo: iz $km/h$ u $m/s$ delimo sa 3,6.','Računamo: $90 : 3,6 = 25$.','Zašto 3,6? Jer $1 km/h = 1000 m / 3600 s$, a 3600 : 1000 = 3,6.'],a:'Odgovor: $90 km/h = 25 m/s$. Automobil svake sekunde pređe 25 metara.'},
mem:['Svaka fizička veličina = oznaka + broj + jedinica.','Osnovne SI jedinice: $m$, $kg$, $s$, $K$, $A$.','kilo = 1000, centi = 1/100, mili = 1/1000.','$km/h$ → $m/s$: deli sa 3,6.'],
yt:'fizika merne jedinice SI sistem prefiksi',
quiz:[
['Koja je osnovna SI jedinica za masu?',['gram','kilogram','tona','njutn'],1,'Osnovna jedinica mase je kilogram ($kg$). Gram je hiljadu puta manji.'],
['Koliko metara ima $2,5 km$?',['$25 m$','$250 m$','$2500 m$','$25 000 m$'],2,'kilo = 1000, pa je $2,5 · 1000 = 2500 m$.'],
['Koliko je $36 km/h$ u $m/s$?',['$10 m/s$','$36 m/s$','$129,6 m/s$','$3,6 m/s$'],0,'Delimo sa 3,6: $36 : 3,6 = 10 m/s$.'],
['Šta znači prefiks „mili“?',['hiljadu puta više','sto puta manje','hiljadu puta manje','milion puta manje'],2,'Mili znači hiljaditi deo, na primer $1 mm = 0,001 m$.'],
['Šta od navedenog NIJE fizička veličina?',['temperatura','vreme','lepota','masa'],2,'Lepotu ne možemo da izmerimo instrumentom i izrazimo jedinicom.'],
['Koliko sekundi ima 2 sata?',['$120 s$','$3600 s$','$7200 s$','$1200 s$'],2,'Jedan sat ima 3600 s, pa dva imaju $2 · 3600 = 7200 s$.']]});

L({n:2,y:1,sim:'uniform',t:'Kretanje i brzina',s:'Kako opisujemo da se nešto kreće i koliko brzo.',
hook:'Zamisli da sediš u vozu i gledaš kroz prozor. Drveće „juri“ unazad, a osoba preko puta tebe miruje. Da li se ti krećeš ili ne? Odgovor zavisi od toga u odnosu na šta posmatraš. Galileo Galilej je još pre 400 godina shvatio da je kretanje uvek <b>relativno</b>.',
parts:[
['Kretanje je uvek „u odnosu na nešto“','<p>Telo se kreće ako menja položaj u odnosu na neko drugo telo. To drugo telo zovemo <span class="hl">referentno telo</span>. U vozu se ne krećeš u odnosu na sedište, ali se krećeš u odnosu na stanicu.</p><p><b>Putanja</b> je linija kojom telo prolazi, kao trag aviona na nebu. <b>Pređeni put</b> ($s$) je dužina te linije.</p>'],
['Brzina','<p>Brzina govori koliki put telo pređe za jednu sekundu. Računamo je tako što pređeni put podelimo vremenom:</p><p class="note">$v = s / t$ &nbsp; Ako trčiš 100 m za 20 s, tvoja brzina je $100 : 20 = 5 m/s$.</p><p>Kad se brzina ne menja, kretanje je <span class="hl">ravnomerno pravolinijsko</span>: telo za svaku sekundu pređe isti put.</p>'],
['Grafik puta i vremena','<p>Ako nacrtamo kako put raste sa vremenom, kod ravnomernog kretanja dobijamo <b>pravu liniju</b>. Što je linija strmija, brzina je veća. U animaciji crveni auto ima strmiju liniju jer je brži.</p>']],
simT:'Trka dva automobila',simNote:'Podesi brzine dva auta. Posmatraj grafik: brži auto ima strmiju liniju. Probaj da im daš istu brzinu: linije će se poklopiti.',
f:[['$v = s / t$','Brzina je pređeni put podeljen vremenom.'],['$s = v · t$','Put je brzina pomnožena vremenom. Ako ideš 5 m/s tokom 10 s, pređeš 50 m.'],['$t = s / v$','Vreme je put podeljen brzinom.']],
ex:{q:'Biciklista vozi stalnom brzinom 6 m/s. Koliki put pređe za 2 minuta?',s:['Pretvorimo vreme u sekunde: $2 min = 120 s$.','Koristimo formulu $s = v · t$.','$s = 6 m/s · 120 s = 720 m$.'],a:'Odgovor: biciklista pređe 720 metara.'},
mem:['Kretanje je relativno: zavisi od referentnog tela.','Brzina = put / vreme, jedinica $m/s$.','Ravnomerno kretanje: brzina je stalna, grafik $s$-$t$ je prava linija.','Strmija linija na grafiku = veća brzina.'],
yt:'fizika ravnomerno pravolinijsko kretanje brzina',
quiz:[
['Putnik sedi u vozu koji vozi. U odnosu na šta on MIRUJE?',['u odnosu na stanicu','u odnosu na svoje sedište','u odnosu na drveće','u odnosu na šine'],1,'Putnik ne menja položaj u odnosu na sedište, pa u odnosu na njega miruje.'],
['Pas pretrči $60 m$ za $10 s$. Kolika mu je brzina?',['$6 m/s$','$600 m/s$','$0,6 m/s$','$70 m/s$'],0,'$v = s/t = 60 : 10 = 6 m/s$.'],
['Kako izgleda grafik puta u zavisnosti od vremena za ravnomerno kretanje?',['horizontalna linija','kriva linija','prava linija koja raste','kružnica'],2,'Put ravnomerno raste, pa je grafik kosa prava linija.'],
['Na grafiku $s$-$t$ dva tela, koje je brže?',['ono sa strmijom linijom','ono sa položenijom linijom','uvek su iste brzine','ne može da se zaključi'],0,'Strmija linija znači da put brže raste, dakle veća je brzina.'],
['Auto ide $20 m/s$. Koliki put pređe za $15 s$?',['$35 m$','$300 m$','$5 m$','$0,75 m$'],1,'$s = v · t = 20 · 15 = 300 m$.'],
['Koliko traje putovanje od $150 km$ brzinom $50 km/h$?',['2 sata','3 sata','5 sati','7500 sati'],1,'$t = s/v = 150 : 50 = 3 h$.']]});

L({n:3,y:1,sim:'accel',t:'Ubrzanje',s:'Kad se brzina menja: ubrzavanje i kočenje.',
hook:'Kada avion poleće, osetiš kako te nešto „lepi“ za sedište. To telo oseća <b>ubrzanje</b>, odnosno promenu brzine. Sportski automobili se reklamiraju podatkom „od 0 do 100 km/h za 3 sekunde“. To nije podatak o brzini, nego o tome koliko <i>brzo raste</i> brzina.',
parts:[
['Šta je ubrzanje?','<p>Ubrzanje pokazuje <span class="hl">koliko se brzina promeni za jednu sekundu</span>. Ako auto svake sekunde ide za 2 m/s brže, njegovo ubrzanje je $2 m/s²$.</p><p class="note">Jedinica $m/s²$ zvuči strašno, ali znači samo ovo: „za koliko $m/s$ se brzina promeni svake sekunde“.</p>'],
['Ubrzavanje i usporavanje','<p>Kad brzina raste, ubrzanje je pozitivno. Kad telo koči, brzina opada i kažemo da je ubrzanje <b>negativno</b> (usporavanje). Kretanje sa stalnim ubrzanjem zovemo <span class="hl">ravnomerno ubrzano</span>.</p>'],
['Grafik brzine','<p>Na grafiku brzine i vremena ($v$-$t$), ravnomerno ubrzano kretanje daje kosu pravu liniju. Što je linija strmija, ubrzanje je veće. Površina ispod te linije jednaka je pređenom putu.</p>']],
simT:'Auto koji ubrzava',simNote:'Podesi početnu brzinu i ubrzanje. Probaj negativno ubrzanje (kočenje) i posmatraj kako linija na grafiku pada dok auto ne stane.',
f:[['$a = (v - v₀) / t$','Ubrzanje je promena brzine podeljena vremenom.'],['$v = v₀ + a · t$','Konačna brzina = početna brzina + ono što si „dodala“ ubrzavanjem.'],['$s = v₀t + a·t²/2$','Put kod ubrzanog kretanja. Ako kreće iz mirovanja ($v₀ = 0$): $s = a·t²/2$.']],
ex:{q:'Auto kreće iz mirovanja i posle 5 s ima brzinu 20 m/s. Koliko je ubrzanje i koliki put je prešao?',s:['Početna brzina: $v₀ = 0$, konačna $v = 20 m/s$, vreme $t = 5 s$.','Ubrzanje: $a = (20 - 0) : 5 = 4 m/s²$.','Put: $s = a·t²/2 = 4 · 25 : 2 = 50 m$.'],a:'Odgovor: ubrzanje je $4 m/s²$, a auto je prešao 50 m.'},
mem:['Ubrzanje = promena brzine u jednoj sekundi.','Jedinica: $m/s²$.','Kočenje = negativno ubrzanje.','Na grafiku $v$-$t$ površina ispod linije = pređeni put.'],
yt:'fizika ubrzanje ravnomerno ubrzano kretanje',
quiz:[
['Šta pokazuje ubrzanje?',['koliki put telo pređe','koliko se brzina promeni u jednoj sekundi','koliko je telo teško','koliko dugo telo putuje'],1,'Ubrzanje je promena brzine u jedinici vremena.'],
['Motor ubrza od $0$ do $15 m/s$ za $3 s$. Ubrzanje je:',['$45 m/s²$','$5 m/s²$','$12 m/s²$','$0,2 m/s²$'],1,'$a = 15 : 3 = 5 m/s²$.'],
['Šta znači negativno ubrzanje?',['telo ide unazad','telo usporava','telo miruje','telo ide stalnom brzinom'],1,'Negativno ubrzanje znači da se brzina smanjuje, odnosno da telo koči.'],
['Kolika je brzina posle $4 s$ ako je $v₀ = 2 m/s$ i $a = 3 m/s²$?',['$14 m/s$','$12 m/s$','$9 m/s$','$5 m/s$'],0,'$v = v₀ + a·t = 2 + 3·4 = 14 m/s$.'],
['Kako izgleda grafik $v$-$t$ za ravnomerno ubrzano kretanje?',['horizontalna prava','kosa prava','kružnica','tačka'],1,'Brzina ravnomerno raste, pa je grafik kosa prava.'],
['Telo kreće iz mirovanja sa $a = 2 m/s²$. Koliki put pređe za $10 s$?',['$20 m$','$100 m$','$200 m$','$10 m$'],1,'$s = a·t²/2 = 2·100/2 = 100 m$.']]});

L({n:4,y:1,sim:'projectile',t:'Slobodan pad i hitac',s:'Zašto sve pada istom brzinom i kako leti bačena lopta.',
hook:'Priča kaže da je Galilej bacao kugle sa krivog tornja u Pizi. Hteo je da dokaže da teška i laka kugla padaju jednako brzo, iako je Aristotel 2000 godina ranije tvrdio suprotno. Godine 1971. astronaut Dejvid Skot je na Mesecu ispustio čekić i pero. Pali su u istom trenutku! Na Zemlji pero pada sporije samo zbog vazduha.',
parts:[
['Slobodan pad','<p>Kad telo pustiš da pada (bez otpora vazduha), ono pada sa stalnim ubrzanjem. To ubrzanje zovemo <span class="hl">ubrzanje Zemljine teže</span> i obeležavamo sa $g$.</p><p class="note">Na Zemlji je $g ≈ 9,81 m/s²$, a u zadacima se često zaokružuje na $10 m/s²$. Svake sekunde pada telo je za oko 10 m/s brže.</p><p>Masa ne utiče na padanje! Kamen i klikerka padaju jednako brzo.</p>'],
['Vertikalni hitac','<p>Ako baciš loptu uvis, ona usporava (gravitacija je vuče nadole), u najvišoj tački se na trenutak zaustavi, pa pada nazad. Penjanje traje tačno koliko i padanje.</p>'],
['Horizontalni i kosi hitac','<p>Lopta bačena ukoso radi dve stvari odjednom:</p><ul><li><b>vodoravno</b> ide stalnom brzinom (ništa je ne gura i ne koči napred),</li><li><b>uspravno</b> se ponaša kao telo bačeno uvis: usporava, pa pada.</li></ul><p>Zajedno to daje krivu liniju koju zovemo <span class="hl">parabola</span>. Najdalje se baca pod uglom od 45°.</p>']],
simT:'Baci loptu',simNote:'Menjaj ugao i brzinu. Prebaci na Mesec i vidi koliko dalje leti lopta. Zelena strelica (vodoravna brzina) se ne menja, a crvena (uspravna) se menja!',
f:[['$v = g · t$','Brzina pri padu raste svake sekunde za $g$.'],['$h = g · t² / 2$','Visina sa koje je telo palo za vreme $t$.'],['$v = √(2gh)$','Brzina kojom telo udari u tlo kad padne sa visine $h$.']],
ex:{q:'Kamen padne sa mosta i udari u vodu posle 3 s. Kolika je visina mosta? (uzmi $g = 10 m/s²$)',s:['Ovo je slobodan pad: $h = g · t² / 2$.','Ubacimo: $h = 10 · 3² / 2 = 10 · 9 / 2$.','$h = 45 m$.'],a:'Odgovor: most je visok oko 45 m.'},
mem:['Sva tela padaju sa istim ubrzanjem $g ≈ 10 m/s²$ (bez vazduha).','Masa ne utiče na brzinu padanja.','Kosi hitac = stalna vodoravna brzina + vertikalno usporavanje i padanje.','Najveći domet je pri uglu od 45°.'],
yt:'fizika slobodan pad horizontalni hitac kosi hitac',
quiz:[
['Bez otpora vazduha, šta pada brže: čekić ili pero?',['čekić','pero','padaju jednako','zavisi od visine'],2,'U vakuumu sva tela padaju sa istim ubrzanjem $g$, nezavisno od mase.'],
['Kolika je brzina tela posle $2 s$ slobodnog pada? ($g = 10 m/s²$)',['$5 m/s$','$20 m/s$','$40 m/s$','$12 m/s$'],1,'$v = g·t = 10·2 = 20 m/s$.'],
['Za koje vreme telo padne sa $20 m$? ($g = 10 m/s²$)',['$1 s$','$2 s$','$4 s$','$20 s$'],1,'$h = g t²/2$ → $20 = 5t²$ → $t² = 4$ → $t = 2 s$.'],
['Kod kosog hica, šta se NE menja tokom leta?',['vodoravna brzina','uspravna brzina','visina','ukupna brzina'],0,'Vodoravno ne deluje nijedna sila (bez vazduha), pa je vodoravna brzina stalna.'],
['Pod kojim uglom treba baciti loptu da ode najdalje?',['15°','30°','45°','90°'],2,'Najveći domet se dobija pri uglu od 45°.'],
['Kakvog je oblika putanja bačene lopte?',['prava linija','kružnica','parabola','cik-cak'],2,'Putanja kosog hica je parabola.']]});

L({n:5,y:1,sim:'circle',t:'Kružno kretanje',s:'Ringišpil, Mesec i centrifuga: kretanje u krug.',
hook:'Seti se vožnje na ringišpilu. Brzina ti je ista, a ipak osećaš kako te nešto „baca“ napolje. Na sličan način veš u centrifugi ostaje uz zid bubnja, a voda izleće kroz rupice. Ovde ćemo videti zašto je i kretanje stalnom brzinom u krug zapravo ubrzano.',
parts:[
['Period i frekvencija','<p><b>Period</b> ($T$) je vreme za koje telo napravi jedan ceo krug. <b>Frekvencija</b> ($f$) je broj krugova u jednoj sekundi.</p><p class="note">Ako ringišpil napravi jedan krug za 4 s, onda je $T = 4 s$, a $f = 1/4 = 0,25$ obrtaja u sekundi. Jedinica za frekvenciju je herc ($Hz$).</p>'],
['Brzina je tangenta','<p>U svakom trenutku brzina je usmerena <span class="hl">po tangenti</span>, to jest pravo napred i pod pravim uglom na konac. Zato kamen, kad se konac preseče, odleti pravo, a ne u krug. Probaj to u animaciji!</p>'],
['Centripetalno ubrzanje','<p>Iako je brzina po veličini ista, njen <b>pravac</b> se stalno menja. Promena pravca je takođe ubrzanje. Ono je uvek usmereno <span class="hl">ka centru kruga</span>, pa ga zovemo centripetalno (centripetalno = „koje teži ka centru“). Silu koja drži telo na krugu daje konac, trenje ili gravitacija.</p>']],
simT:'Kamen na koncu',simNote:'Menjaj poluprečnik i period. Plava strelica je brzina (tangenta), a crvena je ubrzanje (ka centru). Klikni „Preseci konac!“ i vidi kuda telo odlazi.',
f:[['$v = 2πr / T$','Brzina = obim kruga podeljen vremenom jednog kruga.'],['$f = 1 / T$','Frekvencija je obrnuto od perioda.'],['$a = v² / r$','Centripetalno ubrzanje: veće je što je brzina veća i krug manji.']],
ex:{q:'Dete na ringišpilu je 3 m od centra i napravi krug za 6 s. Kolika mu je brzina? ($π ≈ 3,14$)',s:['Obim kruga je $2πr = 2 · 3,14 · 3 = 18,84 m$.','To pređe za $T = 6 s$.','$v = 18,84 : 6 ≈ 3,14 m/s$.'],a:'Odgovor: brzina deteta je oko $3,1 m/s$.'},
mem:['Period $T$: vreme jednog kruga. Frekvencija $f = 1/T$, jedinica $Hz$.','Brzina je uvek po tangenti na krug.','Centripetalno ubrzanje je usmereno ka centru: $a = v²/r$.','Kad nestane sile koja ga drži, telo odlazi pravo.'],
yt:'fizika kružno kretanje centripetalno ubrzanje',
quiz:[
['Točak napravi 10 obrtaja za 2 s. Kolika mu je frekvencija?',['$5 Hz$','$20 Hz$','$0,2 Hz$','$12 Hz$'],0,'$f$ = broj obrtaja / vreme = $10 : 2 = 5 Hz$.'],
['Ako je period $T = 0,5 s$, frekvencija je:',['$0,5 Hz$','$2 Hz$','$5 Hz$','$1 Hz$'],1,'$f = 1/T = 1 : 0,5 = 2 Hz$.'],
['Kuda je usmereno centripetalno ubrzanje?',['po tangenti','ka centru kruga','od centra napolje','uvis'],1,'Centripetalno znači „ka centru“.'],
['Kamen na koncu kruži. Konac pukne. Kuda kamen odlazi?',['nastavlja u krug','pravo po tangenti','pravo od centra','pada u centar'],1,'Bez sile ka centru telo nastavlja pravo, u pravcu u kom je imalo brzinu, a to je tangenta.'],
['Kako se menja centripetalno ubrzanje ako se brzina udvostruči (krug isti)?',['ostaje isto','udvostruči se','učetvorostruči se','prepolovi se'],2,'$a = v²/r$: ako je $v$ dva puta veće, $v²$ je četiri puta veće.'],
['Da li telo koje kruži stalnom brzinom ima ubrzanje?',['ne, brzina je stalna','da, jer se menja pravac brzine','samo ako usporava','samo na Mesecu'],1,'Pravac brzine se stalno menja, a to je ubrzanje (centripetalno).']]});

L({n:6,y:1,sim:'newton',t:'Njutnovi zakoni',s:'Zašto se stvari pokreću, zaustavljaju i skreću.',
hook:'Isak Njutn je 1687. objavio knjigu „Matematički principi prirodne filozofije“. U njoj su tri rečenice koje objašnjavaju svako kretanje, od fudbalske lopte do planeta. Najlepše je to što su ti zakoni prosti kao poslovice. Danas ćemo upoznati prva dva.',
parts:[
['Prvi zakon: tromost (inercija)','<p><span class="hl">Telo miruje ili se kreće ravnomerno pravo sve dok ga neka sila ne natera da to promeni.</span></p><p>Zato te u autobusu „baci“ napred kad naglo zakoči: tvoje telo „želi“ da nastavi kretanje. Zato vezujemo pojas. Ta osobina tela da se opire promeni zove se <b>inercija</b>, a što je masa veća, inercija je veća.</p>'],
['Sila','<p>Sila je ono što menja kretanje tela: gura, vuče, koči, skreće. Meri se u <b>njutnima</b> ($N$). Sila ima i jačinu i smer, pa je crtamo <span class="hl">strelicom</span>. Ako na telo deluje više sila, sabiramo ih. Dve jednake suprotne sile se poništavaju.</p>'],
['Drugi zakon: F = m · a','<p><span class="hl">Što je sila veća, ubrzanje je veće. Što je masa veća, ubrzanje je manje.</span></p><p class="note">Lako je gurnuti prazna kolica u prodavnici, a puna mnogo teže. Ista sila, veća masa, manje ubrzanje.</p>']],
simT:'Gurni kutiju',simNote:'Menjaj silu i masu. Prebaci podlogu na led, pa na gumu. Kad je sila manja od trenja, kutija se ne pomera. Kad je veća, kutija ubrzava.',
f:[['$F = m · a$','Sila = masa × ubrzanje. Ovo je najvažnija formula mehanike.'],['$a = F / m$','Ubrzanje raste sa silom, a opada sa masom.'],['$1 N = 1 kg · m/s²$','Jedan njutn je sila koja telu mase 1 kg daje ubrzanje 1 m/s².']],
ex:{q:'Guraš kolica mase 20 kg silom od 50 N (bez trenja). Koliko je ubrzanje?',s:['Koristimo drugi Njutnov zakon: $a = F/m$.','$a = 50 N : 20 kg$.','$a = 2,5 m/s²$.'],a:'Odgovor: kolica ubrzavaju sa $2,5 m/s²$.'},
mem:['Prvi zakon (inercija): bez sile telo zadržava svoje kretanje.','Sila se meri u njutnima ($N$) i ima smer.','Drugi zakon: $F = m·a$.','Veća masa = teže je promeniti kretanje.'],
yt:'Njutnovi zakoni fizika prvi razred',
quiz:[
['Zašto te u autobusu baci napred kad naglo zakoči?',['zbog vetra','zbog inercije: tvoje telo nastavlja kretanje','jer te vozač gura','zbog gravitacije'],1,'Po prvom Njutnovom zakonu, telo nastavlja da se kreće dok ga sila ne zaustavi.'],
['Koja je jedinica za silu?',['kilogram','vat','njutn','džul'],2,'Sila se meri u njutnima ($N$).'],
['Sila od $30 N$ deluje na telo mase $6 kg$. Ubrzanje je:',['$5 m/s²$','$180 m/s²$','$0,2 m/s²$','$36 m/s²$'],0,'$a = F/m = 30 : 6 = 5 m/s²$.'],
['Koliku silu treba da daš telu mase $4 kg$ da bi ubrzavalo sa $3 m/s²$?',['$7 N$','$12 N$','$1,33 N$','$0,75 N$'],1,'$F = m·a = 4 · 3 = 12 N$.'],
['Na kutiju deluju sila $10 N$ udesno i $10 N$ ulevo. Šta se dešava?',['ubrzava udesno','ubrzava ulevo','sile se poništavaju, nema ubrzanja','kutija se raspada'],2,'Rezultujuća sila je nula, pa je i ubrzanje nula.'],
['Ista sila deluje na loptu za tenis i na kuglu za kuglanje. Koja dobija veće ubrzanje?',['kugla','teniska loptica','isto je','nijedna'],1,'Manja masa, veće ubrzanje ($a = F/m$).']]});

L({n:7,y:1,sim:'spring',t:'Sile oko nas',s:'Težina, trenje, elastična sila i treći Njutnov zakon.',
hook:'Zašto ne možeš da hodaš po savršeno glatkom ledu? Zato što hodanje radi samo ako guraš tlo unazad, a tlo tebe gura unapred. Na ledu nema trenja, pa noga samo klizi. Ovo je treći Njutnov zakon na delu: sile uvek dolaze u paru.',
parts:[
['Težina','<p>Zemlja privlači svako telo. Sila kojom Zemlja vuče telo nadole zove se <span class="hl">sila teže</span>, a sila kojom telo pritiska podlogu ili zateže konac je <b>težina</b>. Računa se kao $Q = m · g$.</p><p class="note">Pazi: <b>masa</b> ($kg$) je isto i na Mesecu i na Zemlji. <b>Težina</b> ($N$) zavisi od planete. Na Mesecu bi bila oko 6 puta manja!</p>'],
['Trenje i elastična sila','<p><b>Trenje</b> je sila koja se uvek protivi klizanju. Ono zavisi od podloge (led, drvo, guma) i od toga koliko jako telo pritiska podlogu.</p><p><b>Elastična sila</b> se javlja kad istegneš oprugu ili gumu. Što više istegneš, ona jače vuče nazad. Ovo je <span class="hl">Hukov zakon</span>: $F = k · x$.</p>'],
['Treći zakon: akcija i reakcija','<p><span class="hl">Ako telo A deluje silom na telo B, onda i B deluje na A istom silom, ali suprotnog smera.</span></p><p>Raketa izbacuje gasove nadole, a gasovi guraju raketu nagore. Plivač gura vodu unazad, a voda gura njega unapred.</p>']],
simT:'Teg na opruzi',simNote:'Menjaj masu tega i krutost opruge. Teža masa jače isteže oprugu. Krutija opruga se manje isteže. Kada se teg smiri, zelena i crvena strelica su jednake.',
f:[['$Q = m · g$','Težina = masa × 9,81. Telo od 50 kg ima težinu oko 490 N.'],['$F_el = k · x$','Elastična sila = krutost opruge × istezanje.'],['$F_tr = μ · N$','Trenje = koeficijent trenja (zavisi od podloge) × sila kojom telo pritiska podlogu.']],
ex:{q:'Opruga krutosti 200 N/m. Koliko će se istegnuti ako na nju okačiš teg od 2 kg? ($g = 10 m/s²$)',s:['Težina tega: $Q = m·g = 2 · 10 = 20 N$.','U ravnoteži je elastična sila jednaka težini: $k·x = 20 N$.','$x = 20 : 200 = 0,1 m = 10 cm$.'],a:'Odgovor: opruga se istegne 10 cm.'},
mem:['Težina $Q = m·g$ se meri u njutnima, a masa u kilogramima.','Trenje se uvek protivi klizanju.','Hukov zakon: $F = k·x$.','Treći zakon: sile su uvek u paru, jednake i suprotne.'],
yt:'sila trenja težina Hukov zakon treći Njutnov zakon',
quiz:[
['Koliko je teško telo mase $30 kg$ na Zemlji? ($g = 10 m/s²$)',['$30 N$','$3 N$','$300 N$','$40 N$'],2,'$Q = m·g = 30·10 = 300 N$.'],
['Šta se menja kad astronaut ode na Mesec?',['masa','težina','i masa i težina','ništa'],1,'Masa ostaje ista, a težina se smanjuje jer je gravitacija Meseca slabija.'],
['Opruga ($k = 100 N/m$) se istegne $5 cm$. Kolika je elastična sila?',['$500 N$','$5 N$','$20 N$','$0,05 N$'],1,'$x = 0,05 m$, pa je $F = k·x = 100 · 0,05 = 5 N$.'],
['Kako trenje utiče na kretanje?',['uvek ubrzava telo','protivi se klizanju','nema uticaja','podiže telo'],1,'Trenje je usmereno suprotno od klizanja i zato ga koči.'],
['Prema trećem zakonu, kad šutneš loptu:',['lopta ne deluje na tebe','lopta deluje na tvoju nogu istom silom, suprotnog smera','lopta deluje jačom silom','lopta deluje slabijom silom'],1,'Sile akcije i reakcije su uvek jednake po jačini, a suprotnog smera.'],
['Kako raketa leti u svemiru gde nema vazduha?',['odguruje se od vazduha','izbacuje gasove nazad, a gasovi guraju raketu napred','ne može da leti','zbog trenja'],1,'Akcija i reakcija: raketa gura gasove, a gasovi guraju raketu.']]});

L({n:8,y:1,sim:'orbit',t:'Gravitacija',s:'Sila koja drži Mesec, planete i tebe na zemlji.',
hook:'Legenda kaže da je Njutnu pala jabuka na glavu. Važnije je pitanje koje je zatim postavio: ako Zemlja privlači jabuku, da li privlači i Mesec? Zašto onda Mesec ne pada? Njutn je shvatio da Mesec stalno pada, ali tako brzo leti postrance da stalno „promašuje“ Zemlju.',
parts:[
['Opšti zakon gravitacije','<p><span class="hl">Svaka dva tela u svemiru se privlače.</span> Sila je veća što su mase veće, a slabija što su tela udaljenija.</p><p>Ti i tvoja klupa se takođe privlačite, ali je ta sila sitna jer su vam mase male. Tek ogromna tela, kao što je Zemlja, daju primetnu silu.</p>'],
['Udaljenost menja sve','<p>Ako se rastojanje udvostruči, sila postaje <b>četiri puta</b> slabija. Ako se utrostruči, devet puta slabija. To se zove zakon „obrnutog kvadrata“.</p>'],
['Sateliti i orbite','<p>Zamisli top na vrhu ogromne planine (Njutnov misaoni eksperiment). Sporo đule padne blizu. Brže padne dalje. Na brzini od oko $7,9 km/s$ đule pada tačno onoliko koliko se Zemlja „zakrivi“ ispod njega i nikada ne padne! To je <span class="hl">prva kosmička brzina</span>, brzina satelita. Na oko $11,2 km/s$ telo zauvek napušta Zemlju.</p>']],
simT:'Njutnov top',simNote:'Menjaj brzinu i klikni „Ispali“. Ispod 7 km/s đule pada. Oko 7,5 km/s kruži. Iznad 10,5 km/s odlazi u svemir.',
f:[['$F = G · m₁ · m₂ / r²$','Sila gravitacije: proizvod masa podeljen kvadratom rastojanja, puta konstanta $G$.'],['$G = 6,67 · 10⁻¹¹ N·m²/kg²$','Gravitaciona konstanta je jako mali broj. Zato je gravitacija između malih tela neprimetna.'],['$g = G · M / R²$','Odatle dolazi $g ≈ 9,81 m/s²$ na površini Zemlje.']],
ex:{q:'Dva tela se privlače silom od 36 N. Kolika će biti sila ako ih udaljimo na 3 puta veće rastojanje?',s:['Sila zavisi od $1/r²$.','Ako je $r$ tri puta veće, $r²$ je $3² = 9$ puta veće.','Sila je 9 puta manja: $36 : 9 = 4 N$.'],a:'Odgovor: sila je 4 N.'},
mem:['Svaka dva tela se privlače gravitacionom silom.','Sila raste sa masama, a opada sa kvadratom rastojanja.','Satelit stalno pada, ali leti dovoljno brzo da promašuje Zemlju.','Prva kosmička brzina je oko 7,9 km/s.'],
yt:'opšti zakon gravitacije Njutn sateliti kosmička brzina',
quiz:[
['Koja tela se privlače gravitacionom silom?',['samo planete','samo tela na Zemlji','svaka dva tela koja imaju masu','samo metalna tela'],2,'Gravitacija deluje između bilo koja dva tela sa masom.'],
['Ako se rastojanje između dva tela udvostruči, sila je:',['2 puta manja','4 puta manja','2 puta veća','ista'],1,'Sila zavisi od $1/r²$: $2² = 4$.'],
['Ako se masa jednog tela udvostruči, sila je:',['2 puta veća','4 puta veća','2 puta manja','ista'],0,'Sila je srazmerna masama, pa se udvostruči.'],
['Zašto Mesec ne padne na Zemlju?',['nema gravitacije u svemiru','stalno pada, ali brzo leti postrance pa promašuje Zemlju','drži ga Sunce','odbija ga magnetno polje'],1,'Mesec je u orbiti: pada ka Zemlji, ali se zbog bočne brzine kreće po krugu.'],
['Kolika je približno prva kosmička brzina?',['$340 m/s$','$7,9 km/s$','$300 000 km/s$','$100 km/h$'],1,'To je brzina potrebna da telo kruži oko Zemlje, oko $7,9 km/s$.'],
['Zašto ne osećamo privlačenje sa drugim ljudima?',['ne postoji','sila je premala jer su mase male','ljudi se odbijaju','zbog vazduha'],1,'Konstanta $G$ je sićušna, pa je sila između malih masa neprimetna.']]});

L({n:9,y:1,sim:'collision',t:'Impuls i sudari',s:'Zašto je teško zaustaviti kamion, a lako loptu.',
hook:'Na bilijaru, kad bela kugla udari drugu kuglu pravo, bela se često zaustavi, a druga nastavi njenom brzinom. Kao da je „predala“ svoje kretanje. Ta količina kretanja koja se predaje zove se <b>impuls</b>. U sudaru se ona nikada ne gubi, samo prelazi sa jednog tela na drugo.',
parts:[
['Šta je impuls?','<p>Impuls (ili količina kretanja) je masa pomnožena brzinom: $p = m·v$. Kamion i bicikl iste brzine nisu isto „opasni“: kamion ima mnogo veći impuls, pa ga je teže zaustaviti.</p>'],
['Zakon održanja impulsa','<p><span class="hl">U sudaru ukupan impuls pre sudara jednak je ukupnom impulsu posle sudara.</span> Impuls ne nestaje i ne nastaje ni iz čega, samo prelazi sa tela na telo.</p><p class="note">Zato puška „udari“ u rame kad opali: metak ide napred, a puška nazad. Ukupan impuls je bio nula pre pucnja i ostaje nula.</p>'],
['Elastičan i neelastičan sudar','<p><b>Elastičan</b>: tela se odbiju (bilijarske kugle). <b>Neelastičan</b>: tela se slepe i nastave zajedno (dva auta koja se zakače u udesu). Impuls je održan u oba slučaja!</p>']],
simT:'Sudar kolica',simNote:'Pokreni sudar. Uporedi stubiće impulsa pre i posle: ljubičasti (ukupni) je uvek isti! Probaj jednake mase pri elastičnom sudaru: plava kolica se zaustave.',
f:[['$p = m · v$','Impuls = masa × brzina, jedinica $kg·m/s$.'],['$m₁v₁ + m₂v₂ = m₁v₁\' + m₂v₂\'$','Zbir impulsa pre = zbir impulsa posle.'],['$v = (m₁v₁ + m₂v₂)/(m₁ + m₂)$','Zajednička brzina kad se tela slepe.']],
ex:{q:'Vagon od 2000 kg ide 3 m/s i udari u isti takav vagon koji miruje. Zakače se. Kojom brzinom nastavljaju?',s:['Impuls pre: $2000·3 + 2000·0 = 6000 kg·m/s$.','Posle se kreću zajedno, masa je $4000 kg$.','$v = 6000 : 4000 = 1,5 m/s$.'],a:'Odgovor: nastavljaju zajedno brzinom 1,5 m/s.'},
mem:['Impuls $p = m·v$.','U sudaru je ukupan impuls održan.','Elastičan sudar: tela se odbiju. Neelastičan: tela se slepe.','Trzaj puške i let rakete se objašnjavaju održanjem impulsa.'],
yt:'impuls zakon održanja impulsa sudari fizika',
quiz:[
['Koliki je impuls lopte mase $0,5 kg$ koja leti $10 m/s$?',['$5 kg·m/s$','$20 kg·m/s$','$10,5 kg·m/s$','$0,05 kg·m/s$'],0,'$p = m·v = 0,5 · 10 = 5 kg·m/s$.'],
['Šta važi u svakom sudaru (bez spoljnih sila)?',['brzina je održana','ukupan impuls je održan','masa se udvostruči','impuls nestaje'],1,'Zakon održanja impulsa važi za svaki sudar.'],
['Zašto puška udari u rame?',['zbog zvuka','metak ide napred, pa puška ide nazad (održanje impulsa)','zbog toplote','zbog trenja'],1,'Ukupan impuls pre je nula, pa metak i puška dobijaju jednake suprotne impulse.'],
['Telo $3 kg$ ide $4 m/s$ i slepi se sa telom $1 kg$ koje miruje. Zajednička brzina:',['$4 m/s$','$3 m/s$','$12 m/s$','$1 m/s$'],1,'$v = 3·4/(3+1) = 12/4 = 3 m/s$.'],
['Kamion i bicikl idu istom brzinom. Ko ima veći impuls?',['bicikl','kamion','isto','ne može da se zna'],1,'Kamion ima mnogo veću masu, pa i veći impuls.'],
['Kako se zove sudar u kom se tela slepe?',['elastičan','neelastičan','kružni','gravitacioni'],1,'Kad se tela slepe i nastave zajedno, sudar je neelastičan.']]});

L({n:10,y:1,sim:'energy',t:'Rad, energija i snaga',s:'Energija se ne gubi, samo menja oblik.',
hook:'Kad skejter krene sa vrha rampe, on brzo jurne nadole i popne se na drugu stranu skoro do iste visine. Kao da je „negde sačuvao“ visinu i vratio je. Fizičari kažu da je potencijalna energija prešla u kinetičku i nazad. Ovo je jedan od najvažnijih zakona prirode: energija se ne stvara i ne uništava.',
parts:[
['Rad','<p>U fizici „rad“ vršiš kad <span class="hl">silom pomeriš telo</span>. Ako guraš zid i on se ne pomeri, fizički nisi izvršila rad, koliko god da si umorna! Rad je sila puta pređeni put: $A = F·s$, jedinica džul ($J$).</p>'],
['Kinetička i potencijalna energija','<p>Energija je sposobnost da se izvrši rad.</p><ul><li><b>Kinetička</b> energija ($E_k$): energija kretanja. Što je telo brže, ima više energije.</li><li><b>Potencijalna</b> energija ($E_p$): energija položaja. Što je telo više podignuto, ima više energije.</li></ul>'],
['Zakon održanja energije i snaga','<p><span class="hl">Ukupna energija je stalna.</span> Ona samo prelazi iz jednog oblika u drugi. Kad postoji trenje, deo energije prelazi u toplotu, ali ukupan zbir ostaje isti.</p><p><b>Snaga</b> pokazuje koliko brzo se vrši rad: $P = A/t$, jedinica vat ($W$). Sijalica od 60 W troši 60 džula svake sekunde.</p>']],
simT:'Skejter na rampi',simNote:'Posmatraj stubiće: dok skejter pada, plavi (Ep) se smanjuje, a crveni (Ek) raste. Zbir je uvek isti! Uključi trenje i vidi kako narandžasti stubić Q (toplota) raste. Ljubičasti stubić E je ukupna energija.',
f:[['$A = F · s$','Rad = sila × put.'],['$E_k = m·v²/2$','Kinetička energija: zavisi od mase i kvadrata brzine.'],['$E_p = m·g·h$','Potencijalna energija: masa × g × visina.'],['$P = A / t$','Snaga = rad podeljen vremenom.']],
ex:{q:'Lopta mase 0,2 kg padne sa visine 5 m. Kolikom brzinom udari u tlo? ($g = 10 m/s²$, bez vazduha)',s:['Na vrhu: $E_p = m·g·h = 0,2·10·5 = 10 J$, a $E_k = 0$.','Pri dnu je sva energija kinetička: $m·v²/2 = 10 J$.','$0,1·v² = 10$ → $v² = 100$ → $v = 10 m/s$.'],a:'Odgovor: lopta udari brzinom 10 m/s.'},
mem:['Rad $A = F·s$, jedinica džul ($J$).','$E_k = mv²/2$ (kretanje), $E_p = mgh$ (visina).','Ukupna energija se ne menja, samo prelazi iz oblika u oblik.','Snaga $P = A/t$, jedinica vat ($W$).'],
yt:'kinetička potencijalna energija zakon održanja energije',
quiz:[
['Guraš zid sat vremena, ali se zid ne pomeri. Koliki rad si izvršila (u fizičkom smislu)?',['ogroman','nula','zavisi od sile','100 J'],1,'Rad je $F·s$, a put je nula, pa je i rad nula.'],
['Kolika je potencijalna energija tela $2 kg$ na visini $10 m$? ($g = 10 m/s²$)',['$20 J$','$200 J$','$12 J$','$2000 J$'],1,'$E_p = m·g·h = 2·10·10 = 200 J$.'],
['Kolika je kinetička energija tela $4 kg$ brzine $3 m/s$?',['$12 J$','$18 J$','$36 J$','$6 J$'],1,'$E_k = m·v²/2 = 4·9/2 = 18 J$.'],
['Šta se dešava sa energijom dok skejter pada niz rampu (bez trenja)?',['nestaje','potencijalna prelazi u kinetičku','kinetička prelazi u potencijalnu','obe rastu'],1,'Visina se smanjuje, a brzina raste.'],
['Motor izvrši rad od $3000 J$ za $10 s$. Snaga je:',['$300 W$','$30 000 W$','$3 W$','$0,003 W$'],0,'$P = A/t = 3000 : 10 = 300 W$.'],
['Kada postoji trenje, „izgubljena“ energija:',['nestaje zauvek','prelazi u toplotu','postaje masa','prelazi u svetlost Sunca'],1,'Energija se ne gubi, već prelazi u toplotu (unutrašnju energiju).']]});

L({n:11,y:1,sim:'buoyancy',t:'Pritisak i fluidi',s:'Zašto brod pluta, a ekser tone.',
hook:'Kralj Hijeron je posumnjao da mu je zlatar podmetnuo krunu sa srebrom umesto čistog zlata. Arhimed je dugo razmišljao kako to da proveri. Rešenje mu je palo na pamet u kadi, kad je video kako voda raste. Legenda kaže da je istrčao na ulicu vičući „Eureka!“ (Našao sam!).',
parts:[
['Pritisak','<p>Pritisak pokazuje koliko je sila „raspoređena“ po površini: $p = F/S$. Jedinica je paskal ($Pa$).</p><p class="note">Zato oštar nož lako seče (mala površina, veliki pritisak), a skije ne propadaju u sneg (velika površina, mali pritisak).</p>'],
['Pritisak u tečnosti','<p>Što si dublje u vodi, pritisak je veći jer te pritiska sve više vode iznad tebe: $p = ρ·g·h$. Zato ronioce bole uši na dnu bazena. <b>Paskalov zakon</b>: pritisak se u tečnosti prenosi podjednako na sve strane. Na tome rade hidraulične kočnice i dizalice.</p>'],
['Arhimedov zakon: potisak','<p><span class="hl">Na telo u tečnosti deluje sila potiska nagore, jednaka težini istisnute tečnosti.</span></p><ul><li>Ako je telo <b>ređe</b> od tečnosti (manja gustina), ono pluta.</li><li>Ako je <b>gušće</b>, tone.</li></ul><p>Čelični brod pluta jer je šupalj, pa je njegova prosečna gustina, zajedno sa vazduhom unutra, manja od gustine vode.</p>']],
simT:'Pluta ili tone?',simNote:'Menjaj gustinu tela i vrstu tečnosti. Probaj gvožđe ($7800 kg/m³$) u živi: pluta! Probaj led u vodi: oko 90% je pod vodom, baš kao santa leda.',
f:[['$p = F / S$','Pritisak = sila podeljena površinom.'],['$p = ρ · g · h$','Pritisak u tečnosti raste sa dubinom $h$ i gustinom tečnosti $ρ$.'],['$F_p = ρ_t · g · V$','Potisak = gustina tečnosti × g × zapremina potopljenog dela tela.']],
ex:{q:'Koliki je pritisak vode na dubini od 10 m? (gustina vode 1000 kg/m³, $g = 10 m/s²$)',s:['Koristimo $p = ρ·g·h$.','$p = 1000 · 10 · 10$.','$p = 100 000 Pa = 100 kPa$. To je kao još jedan atmosferski pritisak!'],a:'Odgovor: na 10 m dubine voda pritiska sa oko 100 000 Pa.'},
mem:['Pritisak $p = F/S$, jedinica paskal ($Pa$).','U tečnosti pritisak raste sa dubinom: $p = ρgh$.','Potisak = težina istisnute tečnosti (Arhimed).','Telo pluta ako mu je gustina manja od gustine tečnosti.'],
yt:'Arhimedov zakon potisak hidrostatički pritisak',
quiz:[
['Zašto oštar nož seče bolje od tupog?',['teži je','manja površina daje veći pritisak','veća površina daje veći pritisak','zbog trenja'],1,'$p = F/S$: kad je površina mala, pritisak je veliki.'],
['Sila od $200 N$ deluje na površinu $2 m²$. Pritisak je:',['$400 Pa$','$100 Pa$','$202 Pa$','$0,01 Pa$'],1,'$p = F/S = 200 : 2 = 100 Pa$.'],
['Kako se menja pritisak u vodi sa dubinom?',['opada','raste','ne menja se','prvo raste pa opada'],1,'$p = ρgh$, pa veća dubina daje veći pritisak.'],
['Drvo ($500 kg/m³$) stavimo u vodu ($1000 kg/m³$). Šta se dešava?',['tone','pluta','lebdi na pola dubine','rastvara se'],1,'Gustina drveta je manja od gustine vode, pa drvo pluta.'],
['Arhimedov zakon kaže da je potisak jednak:',['masi tela','težini istisnute tečnosti','zapremini posude','pritisku vazduha'],1,'Potisak je jednak težini tečnosti koju telo istisne.'],
['Zašto čelični brod pluta?',['čelik je lakši od vode','brod je šupalj, pa mu je prosečna gustina manja od vode','zbog motora','zbog soli'],1,'Vazduh u brodu smanjuje prosečnu gustinu ispod gustine vode.']]});
})(o=>window.LESSONS.push(o));
