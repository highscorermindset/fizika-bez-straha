/* Veze između lekcija: predznanje, niti (tokovi) i veliki obrasci */
window.VEZE={
/* pre[n] = lekcije na koje se lekcija n oslanja, sa razlogom */
pre:{
2:[[1,'jedinice $m$ i $s$ i preračunavanje $km/h$ u $m/s$']],
3:[[2,'ubrzanje je promena brzine koju smo upravo naučili']],
4:[[3,'slobodan pad je ubrzano kretanje sa $a = g$'],[2,'vodoravni deo hica je ravnomerno kretanje']],
5:[[2,'brzina = put / vreme, a ovde je put obim kruga'],[3,'i promena pravca brzine je ubrzanje']],
6:[[3,'$F = m·a$: sila je uzrok ubrzanja'],[1,'njutn je sastavljen od $kg$, $m$ i $s$']],
7:[[6,'sile se crtaju strelicama i sabiraju kao u Njutnovim zakonima'],[4,'$g$ iz slobodnog pada daje težinu $Q = mg$']],
8:[[7,'težina je gravitaciona sila Zemlje'],[5,'satelit kruži jer gravitacija daje silu ka centru']],
9:[[6,'impuls je povezan sa silom i promenom brzine'],[7,'treći zakon: u sudaru tela deluju jednakim suprotnim silama']],
10:[[6,'rad vrši sila'],[4,'pad sa visine: $E_p$ prelazi u $E_k$'],[9,'posle impulsa, drugi veliki zakon održanja']],
11:[[7,'potisak je sila koju poredimo sa težinom'],[1,'gustina u $kg/m³$ i preračunavanje jedinica']],
12:[[10,'temperatura je mera kinetičke energije molekula'],[1,'kelvin je osnovna SI jedinica']],
13:[[12,'pritisak gasa čine udarci molekula'],[11,'pojam pritiska $p = F/S$']],
14:[[12,'unutrašnja energija je energija molekula'],[10,'zakon održanja energije važi i za toplotu']],
15:[[14,'toplota $Q$ i unutrašnja energija'],[13,'gas u cilindru gura klip i vrši rad'],[10,'rad $A$ i koeficijent korisnog dejstva']],
16:[[14,'$Q = mcΔt$ važi pre i posle promene stanja'],[13,'tačka ključanja zavisi od pritiska']],
17:[[8,'Kulonov zakon ima isti oblik kao zakon gravitacije: $1/r²$'],[6,'sila se meri u njutnima']],
18:[[17,'polje je sila po jedinici naelektrisanja'],[10,'napon je rad po jedinici naelektrisanja']],
19:[[18,'polje između ploča $E = U/d$'],[10,'kondenzator čuva energiju']],
20:[[18,'napon „gura“ naelektrisanja kroz provodnik'],[17,'struja je kretanje naelektrisanja']],
21:[[20,'Omov zakon važi za svaki deo kola'],[10,'snaga $P = A/t$ postaje $P = UI$'],[14,'struja greje provodnik (Džulov zakon)']],
22:[[20,'struja stvara magnetno polje'],[18,'linije polja: posle električnih dolaze magnetne']],
23:[[22,'magnetno polje deluje silom'],[5,'čestica kruži zbog sile ka centru'],[6,'$F = m·a$ i za česticu']],
24:[[22,'magnetni fluks kroz kalem'],[23,'obrnuto od motora: kretanje daje struju'],[10,'Lencovo pravilo je održanje energije']],
25:[[24,'generator radi na indukciji'],[21,'snaga i gubici pri prenosu struje']],
26:[[7,'opruga i Hukov zakon'],[5,'period i frekvencija iz kružnog kretanja'],[10,'$E_p$ i $E_k$ se stalno smenjuju']],
27:[[26,'talas je oscilovanje koje se širi'],[2,'$v = s/t$ postaje $v = λ·f$']],
28:[[27,'zvuk je longitudinalni talas'],[2,'eho: put = brzina × vreme']],
29:[[27,'$v = λf$ postaje $c = λf$'],[24,'promenljiva polja stvaraju jedno drugo'],[25,'naizmenična struja je oscilovanje']],
30:[[29,'svetlost je elektromagnetni talas'],[27,'talas menja brzinu u drugoj sredini']],
31:[[30,'sočivo prelama svetlost na zakrivljenoj površini']],
32:[[27,'talasi se sabiraju'],[30,'svetlost kao talas'],[29,'talasna dužina vidljive svetlosti']],
33:[[2,'relativno kretanje (Galilej)'],[29,'brzina svetlosti $c$'],[10,'energija, sada i u obliku $E = mc²$']],
34:[[29,'frekvencija i talasna dužina svetlosti'],[18,'elektronvolt potiče od napona'],[10,'održanje energije u Ajnštajnovoj jednačini']],
35:[[32,'interferencija na dva proreza'],[34,'svetlost kao čestica (foton)'],[9,'impuls $p = mv$']],
36:[[34,'foton energije $hf$'],[17,'jezgro privlači elektron'],[29,'spektar svetlosti'],[35,'elektron kao talas objašnjava zašto postoje samo određeni nivoi']],
37:[[36,'jezgro u centru atoma'],[17,'protoni se električno odbijaju'],[33,'defekt mase i $E = mc²$']],
38:[[37,'nestabilna jezgra se raspadaju'],[29,'gama zraci su elektromagnetni talasi']],
39:[[37,'energija veze jezgra'],[38,'neutroni i raspad'],[33,'$E = Δm·c²$'],[15,'elektrana je toplotna mašina: toplota iz jezgra pravi paru za turbinu']],
40:[[37,'kvarkovi grade protone i neutrone'],[8,'gravitacija drži galaksije'],[29,'svetlost dalekih galaksija'],[39,'fuzija u zvezdama'],[28,'Doplerov efekat: svetlost galaksija koje beže pomerena je ka crvenom']]
},
/* niti: tokovi kroz kurs, redom kojim se ideja razvija */
niti:[
{id:'kretanje',t:'Od merenja do planeta',d:'Jedna ideja raste korak po korak: izmeriš put i vreme, dobiješ brzinu, pa ubrzanje, pa silu koja ga izaziva, i na kraju istu silu koja drži Mesec.',l:[1,2,3,4,5,6,7,8]},
{id:'energija',t:'Energija menja oblik',d:'Energija se nikad ne gubi, samo menja oblik: iz kretanja i visine u toplotu, iz toplote u rad motora, iz struje u svetlost, iz mase u zračenje Sunca.',l:[10,14,15,16,21,24,33,39]},
{id:'polja',t:'Sile na daljinu i polja',d:'Gravitacija, električna i magnetna sila deluju bez dodira. Svaki put koristimo istu sliku: polje i linije polja.',l:[8,17,18,19,22,23]},
{id:'struja',t:'Od naelektrisanja do utičnice',d:'Od iskre sa džempera do struje u zidu: naelektrisanje, napon, struja, magnetizam koji struja stvara, pa indukcija koja struju vraća.',l:[17,18,20,21,22,24,25]},
{id:'talasi',t:'Oscilacije i talasi',d:'Ljuljaška koja se njiše postaje talas koji putuje. Isti talas je zvuk, pa radio-talasi, pa svetlost.',l:[5,26,27,28,29,30,31,32]},
{id:'svetlost',t:'Šta je svetlost?',d:'Prvo zrak koji se odbija i prelama, zatim talas koji pravi pruge, i na kraju foton. Pitanje „talas ili čestica?“ otvara kvantnu fiziku.',l:[29,30,32,34,35,36]},
{id:'materija',t:'Od molekula do kvarkova',d:'Spuštamo se sve dublje: tečnosti i gasovi, molekuli, atom, jezgro, protoni i neutroni, kvarkovi. Na kraju se vraćamo do celog svemira.',l:[11,12,13,16,36,37,38,39,40]}
],
/* veliki obrasci: ideje koje se ponavljaju kroz razrede */
obrasci:[
{t:'Zakoni održanja',d:'Nešto se uvek „čuva“: impuls u sudaru, energija pri svakoj promeni, naelektrisanje pri trljanju. Ajnštajn je pokazao da se čuvaju zajedno masa i energija.',l:[9,10,14,15,17,24,33]},
{t:'Obrnuti kvadrat $1/r²$',d:'Gravitacija i električna sila slabe na isti način: dvostruko dalje znači četiri puta slabije. Kad naučiš jedan zakon, drugi već znaš.',l:[8,17,18]},
{t:'Period i frekvencija',d:'$f = 1/T$ se pojavljuje svuda gde se nešto ponavlja: krug, klatno, naizmenična struja, talas, svetlost.',l:[5,25,26,27,29]},
{t:'Formula $v = λ·f$',d:'Ista formula važi za talas na vodi, zvuk, radio-talase i svetlost. Menja se samo brzina.',l:[27,28,29,32]},
{t:'Talas ili čestica',d:'Svetlost pravi pruge kao talas, a izbija elektrone kao čestica. Elektroni rade i jedno i drugo.',l:[32,34,35,36]},
{t:'Masa je energija',d:'$E = mc²$ objašnjava zašto je jezgro lakše od svojih delova i odakle dolazi energija elektrana i Sunca.',l:[33,37,39,40]}
]};
