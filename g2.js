/* 2. razred: toplota i elektricitet */
window.LESSONS=window.LESSONS||[];
(function(L){
L({n:12,y:2,sim:'particles',t:'Molekuli i temperatura',s:'Sve je napravljeno od sićušnih čestica koje se stalno kreću.',
hook:'Botaničar Robert Braun je 1827. pod mikroskopom posmatrao zrnca polena u vodi. Zrnca su se tresla i skakutala, iako ih niko nije dirao. Tek je Ajnštajn 1905. objasnio zašto: u zrnca neprestano udaraju nevidljivi molekuli vode. Tako je dokazano da atomi i molekuli zaista postoje.',
parts:[
['Molekulsko-kinetička teorija','<p>Ova teorija ima tri prosta tvrđenja:</p><ul><li>sve supstance su sastavljene od <b>molekula</b> (i atoma),</li><li>molekuli se <span class="hl">neprestano i haotično kreću</span>,</li><li>između molekula deluju privlačne i odbojne sile.</li></ul>'],
['Šta je zapravo temperatura?','<p>Temperatura je mera toga <span class="hl">koliko se brzo kreću molekuli</span>. Topao čaj ima molekule koji jure brže od molekula hladne vode. Zato se šećer brže rastvara u toplom čaju.</p>'],
['Kelvinova skala','<p>Ako hladimo telo, molekuli usporavaju. Najniža moguća temperatura, kad bi se molekuli skoro potpuno umirili, je <b>apsolutna nula</b>: $-273 °C$. Od nje počinje Kelvinova skala.</p><p class="note">$T (K) = t (°C) + 273$. Sobna temperatura $20 °C$ je $293 K$. Korak od 1 K je isti kao korak od 1 °C.</p>']],
simT:'Molekuli u kutiji',simNote:'Pomeraj temperaturu: molekuli se ubrzavaju i postaju „crveniji“. Gledaj zeleno zrno polena: ono skakuće jer ga gađaju molekuli. To je Braunovo kretanje!',
f:[['$T = t + 273$','Temperatura u kelvinima = temperatura u celzijusima + 273.'],['$t = T - 273$','I obrnuto: iz kelvina u celzijuse oduzmi 273.'],['$E_k ~ T$','Prosečna kinetička energija molekula srazmerna je apsolutnoj temperaturi.']],
ex:{q:'Napolju je −13 °C. Kolika je to temperatura u kelvinima?',s:['Pravilo: $T = t + 273$.','$T = -13 + 273$.','$T = 260 K$.'],a:'Odgovor: −13 °C je 260 K. Kelvini nikada nisu negativni!'},
mem:['Sve je napravljeno od molekula koji se stalno kreću.','Temperatura = mera brzine kretanja molekula.','Braunovo kretanje dokazuje postojanje molekula.','$T(K) = t(°C) + 273$; apsolutna nula je $0 K = -273 °C$.'],
yt:'molekulsko kinetička teorija Braunovo kretanje temperatura',
quiz:[
['Šta je temperatura sa stanovišta molekula?',['broj molekula','mera brzine kretanja molekula','veličina molekula','boja molekula'],1,'Što se molekuli brže kreću, temperatura je viša.'],
['Koliko je $27 °C$ u kelvinima?',['$246 K$','$300 K$','$27 K$','$273 K$'],1,'$T = 27 + 273 = 300 K$.'],
['Koliko je $373 K$ u celzijusima?',['$100 °C$','$646 °C$','$73 °C$','$0 °C$'],0,'$t = 373 - 273 = 100 °C$, tačka ključanja vode.'],
['Šta je Braunovo kretanje?',['kretanje planeta','haotično kretanje sitnih čestica zbog udara molekula','kretanje struje','kretanje vetra'],1,'Sitna zrnca skakuću jer ih sa svih strana udaraju molekuli tečnosti.'],
['Kolika je apsolutna nula u celzijusima?',['$0 °C$','$-100 °C$','$-273 °C$','$-1000 °C$'],2,'Apsolutna nula je $0 K$, odnosno oko $-273 °C$.'],
['Zašto se šećer brže rastvara u toplom čaju?',['topla voda je slađa','molekuli se brže kreću','topla voda je gušća','zbog boje'],1,'Brži molekuli brže „razvlače“ molekule šećera.']]});

L({n:13,y:2,sim:'gas',t:'Gasni zakoni',s:'Kako su povezani pritisak, zapremina i temperatura gasa.',
hook:'Leti, kad ostaviš naduvanu loptu na suncu, ona postane tvrda i može da pukne. Zimi, iste gume na autu izgledaju malo „ispuštene“. Vazduh unutra je isti, promenila se samo temperatura. Gasovi se ponašaju po veoma jednostavnim pravilima, a otkrili su ih Bojl, Šarl i Gej-Lisak.',
parts:[
['Odakle dolazi pritisak gasa?','<p>Molekuli gasa neprestano udaraju u zidove posude. Milioni sitnih udaraca zajedno daju <span class="hl">pritisak</span>. Više udaraca ili jači udarci znače veći pritisak.</p>'],
['Tri gasna zakona','<ul><li><b>Bojl-Mariotov</b> (stalna temperatura): ako smanjiš zapreminu, pritisak raste. Pritisni klip šprica sa zatvorenim otvorom i osetićeš to.</li><li><b>Gej-Lisakov</b> (stalan pritisak): toplijem gasu treba veća zapremina, pa se balon na suncu širi.</li><li><b>Šarlov</b> (stalna zapremina): zagrejan gas ima veći pritisak, kao lopta na suncu.</li></ul>'],
['Jednačina stanja','<p>Sva tri zakona su delovi jedne formule: <span class="hl">$p·V/T$ je stalno</span> za datu količinu gasa. Važno: temperatura se uvek piše u <b>kelvinima</b>!</p>']],
simT:'Gas u cilindru',simNote:'Smanji zapreminu pa gledaj pritisak (Bojl). Zatim povećaj temperaturu (Šarl). Primeti da je broj $p·V/T$ uvek isti.',
f:[['$p · V = const.$','Bojl-Mariot: pri stalnoj temperaturi, manja zapremina daje veći pritisak.'],['$V / T = const.$','Gej-Lisak: pri stalnom pritisku, toplije znači veću zapreminu.'],['$p / T = const.$','Šarl: pri stalnoj zapremini, toplije znači veći pritisak.'],['$p·V = n·R·T$','Jednačina stanja idealnog gasa. $n$ je broj molova, a $R = 8,31 J/(mol·K)$.']],
ex:{q:'Gas je pod pritiskom 100 kPa i zauzima 6 L. Sabijemo ga na 2 L pri stalnoj temperaturi. Koliki je novi pritisak?',s:['Stalna temperatura, pa koristimo Bojla: $p₁V₁ = p₂V₂$.','$100 · 6 = p₂ · 2$.','$p₂ = 600 : 2 = 300 kPa$.'],a:'Odgovor: pritisak je 300 kPa. Zapremina je 3 puta manja, a pritisak 3 puta veći.'},
mem:['Pritisak gasa nastaje od udaraca molekula u zidove.','Bojl: $pV$ = const. Gej-Lisak: $V/T$ = const. Šarl: $p/T$ = const.','Zajedno: $pV/T$ = const.','Temperatura u gasnim zakonima uvek ide u kelvinima.'],
yt:'gasni zakoni Bojl Mariot Gej Lisak Šarl',
quiz:[
['Odakle potiče pritisak gasa?',['od boje gasa','od udaraca molekula u zidove posude','od težine posude','od svetlosti'],1,'Molekuli neprestano udaraju u zidove i tako stvaraju pritisak.'],
['Pri stalnoj temperaturi zapreminu gasa smanjimo 2 puta. Pritisak se:',['smanji 2 puta','poveća 2 puta','ne menja','poveća 4 puta'],1,'Bojl-Mariot: $pV$ = const, pa je pritisak 2 puta veći.'],
['Zašto lopta na suncu postane tvrđa?',['vazduh izađe','gas se zagreje, pa raste pritisak','lopta se skupi','sunce je pritiska'],1,'Pri stalnoj zapremini toplijem gasu raste pritisak (Šarlov zakon).'],
['U kojoj jedinici mora da bude temperatura u gasnim zakonima?',['°C','K','°F','bilo kojoj'],1,'Uvek u kelvinima, jer formule važe od apsolutne nule.'],
['Gas na $300 K$ ima zapreminu $3 L$. Na $600 K$ (stalan pritisak) zapremina je:',['$1,5 L$','$3 L$','$6 L$','$9 L$'],2,'$V/T$ = const: temperatura se udvostručila, pa i zapremina: $6 L$.'],
['Šta je stalno za datu količinu gasa?',['$p + V + T$','$p · V / T$','$p · T$','$V · T$'],1,'Jednačina stanja: $pV/T$ = const.']]});

L({n:14,y:2,sim:'mix',t:'Unutrašnja energija i toplota',s:'Kako se toplota prenosi i zašto se voda sporo greje.',
hook:'Leti na plaži pesak gori pod nogama, a more je osvežavajuće hladno, iako ih greje isto Sunce. Noću je obrnuto: pesak se ohladi, a more ostane mlako. Razlog je to što voda „pamti“ toplotu bolje od skoro svih supstanci. Zato su primorski gradovi blaži i zimi i leti.',
parts:[
['Unutrašnja energija i toplota','<p><b>Unutrašnja energija</b> je ukupna energija svih molekula tela. <b>Toplota</b> ($Q$) je deo te energije koji prelazi sa toplijeg tela na hladnije. Toplota uvek sama ide <span class="hl">od toplijeg ka hladnijem</span>, nikad obrnuto.</p>'],
['Specifična toplota','<p>Različitim supstancama treba različito mnogo toplote da se zagreju. Ta osobina je <span class="hl">specifična toplota</span> ($c$): koliko džula treba da se 1 kg zagreje za 1 °C.</p><p class="note">Za vodu je $c = 4186 J/(kg·°C)$, što je jako mnogo. Za gvožđe je samo oko 450. Zato se tiganj brzo zagreje, a voda u njemu sporo.</p>'],
['Kako se toplota prenosi','<ul><li><b>Provođenje</b>: kroz čvrsto telo, od molekula do molekula (vruća drška kašike u čaju).</li><li><b>Strujanje</b>: topao vazduh ili voda se dižu i nose toplotu (radijator greje sobu).</li><li><b>Zračenje</b>: toplota putuje kao nevidljivo infracrveno zračenje, čak i kroz prazan prostor (toplota Sunca, vatra).</li></ul>']],
simT:'Pomešaj vodu',simNote:'Podesi mase i temperature, pa klikni „Pomešaj“. Konačna temperatura je bliža temperaturi vode koje ima više. Toplota koju je topla voda predala jednaka je toploti koju je hladna primila.',
f:[['$Q = m · c · Δt$','Potrebna toplota = masa × specifična toplota × promena temperature.'],['$Q_predato = Q_primljeno$','Pri mešanju toplo telo predaje tačno onoliko toplote koliko hladno primi.'],['$t = (m₁t₁ + m₂t₂)/(m₁ + m₂)$','Temperatura smeše dve iste tečnosti.']],
ex:{q:'Koliko toplote treba da se 2 kg vode zagreje od 20 °C do 70 °C? ($c = 4200 J/(kg·°C)$)',s:['Promena temperature: $Δt = 70 - 20 = 50 °C$.','$Q = m·c·Δt = 2 · 4200 · 50$.','$Q = 420 000 J = 420 kJ$.'],a:'Odgovor: potrebno je 420 kJ toplote.'},
mem:['Toplota sama prelazi sa toplijeg na hladnije telo.','$Q = m·c·Δt$.','Voda ima veliku specifičnu toplotu: sporo se greje i sporo hladi.','Tri načina prenosa toplote: provođenje, strujanje, zračenje.'],
yt:'količina toplote specifična toplota prenošenje toplote',
quiz:[
['U kom smeru sama prelazi toplota?',['sa hladnijeg na toplije','sa toplijeg na hladnije','u oba smera podjednako','ne prelazi'],1,'Toplota spontano ide od toplijeg ka hladnijem telu.'],
['Kako Sunce greje Zemlju kroz prazan svemir?',['provođenjem','strujanjem','zračenjem','trenjem'],2,'U vakuumu nema čestica, pa toplota stiže samo zračenjem.'],
['Koliko toplote treba za $1 kg$ vode, od $10 °C$ do $20 °C$? ($c = 4200 J/(kg·°C)$)',['$4200 J$','$42 000 J$','$420 J$','$84 000 J$'],1,'$Q = 1 · 4200 · 10 = 42 000 J$.'],
['Pomešamo $1 kg$ vode od $20 °C$ i $1 kg$ vode od $60 °C$. Temperatura smeše je:',['$80 °C$','$40 °C$','$30 °C$','$20 °C$'],1,'Iste mase: aritmetička sredina, $(20 + 60)/2 = 40 °C$.'],
['Zašto je more noću toplije od peska?',['more ima veliku specifičnu toplotu, pa se sporo hladi','pesak je mokar','more je slano','zbog Meseca'],0,'Voda dugo „čuva“ toplotu zbog velike specifične toplote.'],
['Radijator greje sobu uglavnom:',['strujanjem vazduha','provođenjem kroz zid','zračenjem sa Sunca','trenjem'],0,'Topao vazduh se diže, hladan spušta, i tako kruži po sobi.']]});

L({n:15,y:2,sim:'engine',t:'Termodinamika i toplotne mašine',s:'Kako toplota pokreće automobile, lokomotive i elektrane.',
hook:'Džejms Vat je u 18. veku usavršio parnu mašinu i time pokrenuo industrijsku revoluciju. Fabrike, vozovi i brodovi počeli su da rade na toplotu. Ali inženjeri su primetili nešto čudno: nikako nisu mogli svu toplotu da pretvore u rad. Deo je uvek odlazio u okolinu. Fizika koja to objašnjava zove se termodinamika.',
parts:[
['Prvi zakon termodinamike','<p>Ovo je zakon održanja energije za toplotu: <span class="hl">toplota koju gas primi troši se na povećanje njegove unutrašnje energije i na rad koji gas izvrši.</span></p><p class="note">$Q = ΔU + A$. Kad zagreješ gas u cilindru, on se i ugreje (raste $U$) i pogura klip (vrši rad $A$).</p>'],
['Toplotna mašina','<p>Svaka toplotna mašina (motor auta, parna turbina) radi isto:</p><ol><li>uzima toplotu $Q₁$ od toplog izvora (gorivo, para),</li><li>deo pretvara u koristan rad $A$,</li><li>ostatak $Q₂$ predaje hladnijoj okolini (izduvni gasovi, hladnjak).</li></ol>'],
['Drugi zakon termodinamike','<p><span class="hl">Nijedna mašina ne može svu toplotu da pretvori u rad.</span> Uvek mora da postoji i hladno telo kome se predaje deo toplote. Koliki deo može da se iskoristi zavisi od razlike temperatura. Motori automobila iskoriste oko 25–35% energije goriva.</p>']],
simT:'Toplotna mašina',simNote:'Podigni temperaturu grejača ili spusti temperaturu hladnjaka. Gledaj kako zelena strela (rad) postaje deblja. Ali stopostotni koeficijent nikada ne dostigneš!',
f:[['$Q = ΔU + A$','Prvi zakon: dovedena toplota = promena unutrašnje energije + izvršeni rad.'],['$η = A / Q₁$','Koeficijent korisnog dejstva: koliki deo toplote je postao koristan rad.'],['$η_max = 1 - T₂ / T₁$','Najveći mogući koeficijent (Karnoov ciklus). Temperature su u kelvinima.']],
ex:{q:'Motor dobije 1000 J toplote i izvrši 300 J rada. Koliki je koeficijent korisnog dejstva i koliko toplote ode u okolinu?',s:['$η = A/Q₁ = 300 : 1000 = 0,3$.','To je 30%.','U okolinu ode: $Q₂ = Q₁ - A = 1000 - 300 = 700 J$.'],a:'Odgovor: koeficijent je 30%, a 700 J toplote ode u okolinu.'},
mem:['Prvi zakon: $Q = ΔU + A$ (energija se ne gubi).','Toplotna mašina: uzme $Q₁$, izvrši rad $A$, preda $Q₂$ okolini.','Drugi zakon: ne može se sva toplota pretvoriti u rad.','$η = A/Q₁$, uvek manje od 100%.'],
yt:'zakoni termodinamike toplotne mašine koeficijent korisnog dejstva',
quiz:[
['Prvi zakon termodinamike je u stvari:',['zakon gravitacije','zakon održanja energije','Omov zakon','zakon inercije'],1,'Govori da se toplota troši na unutrašnju energiju i rad, odnosno da se energija ne gubi.'],
['Motor primi $2000 J$ toplote i izvrši $500 J$ rada. Koeficijent korisnog dejstva je:',['$25 %$','$40 %$','$75 %$','$4 %$'],0,'$η = 500/2000 = 0,25 = 25 %$.'],
['Može li postojati mašina koja svu toplotu pretvara u rad?',['da, ako je dobro napravljena','ne, to zabranjuje drugi zakon termodinamike','da, na Mesecu','samo električna'],1,'Drugi zakon kaže da deo toplote uvek mora da ode hladnijem telu.'],
['Gas primi $100 J$ toplote i izvrši $40 J$ rada. Za koliko mu se povećala unutrašnja energija?',['$140 J$','$60 J$','$40 J$','$100 J$'],1,'$ΔU = Q - A = 100 - 40 = 60 J$.'],
['Šta je hladnjak u motoru automobila?',['gorivo','okolni vazduh i izduvni sistem koji primaju preostalu toplotu','točkovi','akumulator'],1,'Hladnije telo prima deo toplote koji nije pretvoren u rad.'],
['Kako se može povećati najveći mogući koeficijent mašine?',['povećati razliku temperatura grejača i hladnjaka','obojiti motor','smanjiti masu goriva','nikako'],0,'$η_max = 1 - T₂/T₁$: veći $T₁$ ili manji $T₂$ daju veći koeficijent.']]});

L({n:16,y:2,sim:'phase',t:'Agregatna stanja',s:'Led, voda, para: kako supstanca menja oblik.',
hook:'Kad staviš lonac sa ledom na ringlu, temperatura raste do 0 °C, a onda zastane. Ringla greje, a termometar „stoji“ dok se sav led ne istopi. Isto se dešava na 100 °C dok voda ključa. Gde ide sva ta toplota? Ona se troši na razbijanje veza između molekula.',
parts:[
['Tri agregatna stanja','<ul><li><b>Čvrsto</b>: molekuli su čvrsto vezani na svojim mestima i samo trepere. Telo ima stalan oblik.</li><li><b>Tečno</b>: molekuli su blizu, ali klize jedni preko drugih. Tečnost dobija oblik posude.</li><li><b>Gasovito</b>: molekuli su daleko jedni od drugih i jure na sve strane. Gas zauzima ceo prostor.</li></ul>'],
['Prelazi stanja','<p>Topljenje (čvrsto → tečno), očvršćavanje (tečno → čvrsto), isparavanje (tečno → gas), kondenzacija (gas → tečno), sublimacija (čvrsto → gas, kao kad suvi led „dimi“).</p><p class="note">Tokom topljenja i ključanja <span class="hl">temperatura se ne menja</span>, iako se toplota stalno dovodi. Ta toplota se zove <b>latentna</b> (skrivena) toplota.</p>'],
['Ključanje i pritisak','<p>Voda ključa na 100 °C samo pri normalnom pritisku. Na vrhu planine, gde je pritisak manji, voda ključa već na oko 90 °C, pa se pasulj sporije kuva. U ekspres loncu pritisak je veći, voda ključa na oko 120 °C i hrana se brže skuva.</p>']],
simT:'Od leda do pare',simNote:'Prati grafik. Na 0 °C i 100 °C linija postaje vodoravna: toplota se troši na promenu stanja, a ne na zagrevanje. Pojačaj grejač i ceo proces će biti brži.',
f:[['$Q = m · λ$','Toplota topljenja: masa × specifična toplota topljenja. Za led $λ = 334 kJ/kg$.'],['$Q = m · q_i$','Toplota isparavanja. Za vodu $q_i = 2260 kJ/kg$, što je skoro 7 puta više nego za topljenje!'],['$Q = m · c · Δt$','Dok se stanje ne menja, toplota zagreva telo.']],
ex:{q:'Koliko toplote treba da se istopi 2 kg leda na 0 °C? ($λ = 334 kJ/kg$)',s:['Temperatura se ne menja, pa koristimo $Q = m·λ$.','$Q = 2 · 334 kJ$.','$Q = 668 kJ$.'],a:'Odgovor: potrebno je 668 kJ, a sve to vreme temperatura ostaje 0 °C.'},
mem:['Tri stanja: čvrsto, tečno, gasovito. Razlikuju se po kretanju i rastojanju molekula.','Tokom topljenja i ključanja temperatura stoji.','Latentna toplota: $Q = mλ$ (topljenje), $Q = mq_i$ (isparavanje).','Tačka ključanja zavisi od pritiska.'],
yt:'agregatna stanja topljenje isparavanje latentna toplota',
quiz:[
['U kom stanju su molekuli najudaljeniji?',['čvrstom','tečnom','gasovitom','svima podjednako'],2,'U gasu molekuli su daleko jedni od drugih i slobodno jure.'],
['Šta se dešava sa temperaturom dok se led topi?',['raste','opada','ostaje $0 °C$','skače na $100 °C$'],2,'Tokom topljenja toplota razbija veze, a temperatura stoji.'],
['Kako se zove prelaz iz gasa u tečnost?',['topljenje','kondenzacija','sublimacija','ključanje'],1,'Kondenzacija, kao rosa na hladnoj čaši.'],
['Zašto se na planini hrana sporije kuva?',['manje je kiseonika','manji pritisak, pa voda ključa na nižoj temperaturi','hladnije je','voda je čistija'],1,'Pri manjem pritisku voda ključa ispod $100 °C$.'],
['Koliko toplote treba da se istopi $3 kg$ leda na $0 °C$? ($λ = 334 kJ/kg$)',['$334 kJ$','$1002 kJ$','$111 kJ$','$337 kJ$'],1,'$Q = m·λ = 3 · 334 = 1002 kJ$.'],
['Kad naftalin u ormanu nestaje bez topljenja, to je:',['isparavanje','sublimacija','kondenzacija','očvršćavanje'],1,'Prelaz iz čvrstog direktno u gas je sublimacija.']]});

L({n:17,y:2,sim:'coulomb',t:'Naelektrisanje i Kulonov zakon',s:'Zašto te kosa „prati“ kad skineš džemper.',
hook:'Stari Grci su primetili da ćilibar, kad se protrlja vunom, privlači sitne slamke. Grčka reč za ćilibar je „elektron“, i odatle potiče reč elektricitet. Kad zimi skineš džemper i čuješ pucketanje, ili te „strese“ kvaka, vidiš isti fenomen koji su videli Grci.',
parts:[
['Dve vrste naelektrisanja','<p>Postoje <b>pozitivno</b> (+) i <b>negativno</b> (−) naelektrisanje. Atomi imaju pozitivne protone u jezgru i negativne elektrone oko jezgra. Obično ih ima jednako i atom je neutralan.</p><p class="note"><span class="hl">Istoimena se odbijaju, raznoimena se privlače.</span> Isto kao kod magneta.</p>'],
['Naelektrisavanje trljanjem','<p>Kad trljaš balon o kosu, elektroni prelaze sa kose na balon. Balon postaje negativan, a kosa pozitivna, pa se privlače! Naelektrisanje se ne stvara, nego samo <b>prelazi</b> sa tela na telo. To je zakon održanja naelektrisanja. Jedinica za naelektrisanje je kulon ($C$).</p>'],
['Kulonov zakon','<p>Šarl Kulon je izmerio kolika je sila između naelektrisanja:</p><ul><li>što su naelektrisanja veća, sila je jača,</li><li>što su udaljenija, sila je slabija i to sa kvadratom rastojanja (kao kod gravitacije!).</li></ul>']],
simT:'Privlačenje i odbijanje',simNote:'Promeni znak naelektrisanja: ista se odbijaju, a različita privlače. Približi ih (smanji r) i gledaj kako sila naglo raste.',
f:[['$F = k · q₁ · q₂ / r²$','Kulonov zakon. $k = 9 · 10⁹ N·m²/C²$.'],['$e = 1,6 · 10⁻¹⁹ C$','Elementarno naelektrisanje: naelektrisanje jednog elektrona (sa minusom) ili protona.'],['$1 µC = 10⁻⁶ C$','Mikrokulon je milioniti deo kulona.']],
ex:{q:'Dva naelektrisanja se odbijaju silom od 8 N. Kolika će biti sila ako ih približimo na dvaput manje rastojanje?',s:['Sila zavisi od $1/r²$.','Ako je $r$ dva puta manje, $r²$ je 4 puta manje.','Sila je 4 puta veća: $8 · 4 = 32 N$.'],a:'Odgovor: sila je 32 N.'},
mem:['Istoimena naelektrisanja se odbijaju, raznoimena privlače.','Trljanjem elektroni prelaze sa tela na telo.','Kulonov zakon: $F = kq₁q₂/r²$.','Jedinica naelektrisanja je kulon ($C$).'],
yt:'naelektrisanje Kulonov zakon elektrostatika',
quiz:[
['Dva negativno naelektrisana balona:',['se privlače','se odbijaju','ne deluju jedan na drugi','se spoje'],1,'Istoimena naelektrisanja se odbijaju.'],
['Šta prelazi sa tela na telo kad ih trljamo?',['protoni','elektroni','neutroni','atomi'],1,'Elektroni su lako pokretljivi, pa prelaze sa jednog tela na drugo.'],
['Ako se rastojanje između dva naelektrisanja utrostruči, sila je:',['3 puta manja','9 puta manja','3 puta veća','ista'],1,'Sila zavisi od $1/r²$, a $3² = 9$.'],
['Ako se jedno naelektrisanje udvostruči, sila je:',['2 puta veća','4 puta veća','2 puta manja','ista'],0,'Sila je srazmerna proizvodu naelektrisanja.'],
['Koja je jedinica za naelektrisanje?',['amper','volt','kulon','njutn'],2,'Naelektrisanje se meri u kulonima ($C$).'],
['Kosa i balon se privlače posle trljanja jer:',['su istoimeno naelektrisani','su raznoimeno naelektrisani','su magnetni','su mokri'],1,'Elektroni su prešli sa kose na balon, pa je jedno pozitivno, a drugo negativno.']]});

L({n:18,y:2,sim:'field',t:'Električno polje i napon',s:'Nevidljivo „more“ sile oko naelektrisanja.',
hook:'Majkl Faradej je bio sin kovača, bez formalnog školovanja, i nije znao mnogo matematike. Zato je fiziku zamišljao u slikama. Oko naelektrisanja je zamislio nevidljive linije koje izlaze iz njega i pokazuju kuda bi se kretalo drugo naelektrisanje. Te „Faradejeve linije“ i danas crtamo u svakom udžbeniku.',
parts:[
['Električno polje','<p>Oko svakog naelektrisanja postoji <span class="hl">električno polje</span>: prostor u kome na drugo naelektrisanje deluje sila. Zamisli ga kao miris oko cveta. Ne vidiš ga, ali ga osetiš kad mu priđeš.</p><p>Jačina polja ($E$) pokazuje koliku silu bi osetilo malo pozitivno „probno“ naelektrisanje.</p>'],
['Linije polja','<p>Linije sile crtamo tako da:</p><ul><li><b>izlaze</b> iz pozitivnog, a <b>ulaze</b> u negativno naelektrisanje,</li><li>gde su linije gušće, polje je jače,</li><li>linije se nikada ne seku.</li></ul>'],
['Napon','<p>Napon ($U$) između dve tačke pokazuje koliko rada polje izvrši kad prenese naelektrisanje od 1 C između njih. Meri se u voltima ($V$).</p><p class="note">Napon je kao razlika visina kod vodopada: što je razlika veća, voda (struja) jače „pada“. Baterija ima napon 1,5 V, a utičnica 230 V.</p>']],
simT:'Linije električnog polja',simNote:'Izaberi raspored naelektrisanja. Narandžaste strelice pokazuju smer polja. Pređi mišem (ili prstom) preko slike i zelena strelica će ti pokazati polje u toj tački.',
f:[['$E = F / q$','Jačina polja = sila na probno naelektrisanje podeljena tim naelektrisanjem. Jedinica $N/C$ (ili $V/m$).'],['$E = k · q / r²$','Polje tačkastog naelektrisanja slabi sa kvadratom rastojanja.'],['$A = q · U$','Rad polja = naelektrisanje × napon.'],['$E = U / d$','U homogenom polju (između dve ploče), jačina polja = napon podeljen rastojanjem.']],
ex:{q:'Između dve ploče udaljene 2 cm je napon 100 V. Kolika je jačina polja između njih?',s:['Rastojanje u metrima: $d = 0,02 m$.','$E = U/d = 100 : 0,02$.','$E = 5000 V/m$.'],a:'Odgovor: jačina polja je 5000 V/m.'},
mem:['Električno polje je prostor oko naelektrisanja u kome deluje sila.','Linije izlaze iz + i ulaze u −. Gušće linije znače jače polje.','Napon $U$ se meri u voltima.','Rad pri prenosu naelektrisanja: $A = qU$.'],
yt:'električno polje linije sile napon potencijal',
quiz:[
['Linije električnog polja:',['izlaze iz negativnog naelektrisanja','izlaze iz pozitivnog i ulaze u negativno','idu u krug','ne postoje'],1,'Po dogovoru, linije počinju na + i završavaju se na −.'],
['Gde je polje najjače?',['gde su linije najređe','gde su linije najgušće','svuda je isto','van linija'],1,'Gustina linija pokazuje jačinu polja.'],
['Na naelektrisanje od $2 C$ deluje sila od $10 N$. Jačina polja je:',['$20 N/C$','$5 N/C$','$12 N/C$','$0,2 N/C$'],1,'$E = F/q = 10 : 2 = 5 N/C$.'],
['Koja je jedinica za napon?',['amper','om','volt','vat'],2,'Napon se meri u voltima ($V$).'],
['Koliki rad izvrši polje kad prenese $3 C$ preko napona $12 V$?',['$4 J$','$36 J$','$15 J$','$0,25 J$'],1,'$A = q·U = 3 · 12 = 36 J$.'],
['Mogu li se dve linije polja seći?',['da, uvek','ne, nikada','samo kod + i +','samo u vakuumu'],1,'U svakoj tački polje ima samo jedan smer, pa se linije ne seku.']]});

L({n:19,y:2,sim:'capacitor',t:'Kondenzatori',s:'Mali „rezervoari“ električnog naelektrisanja.',
hook:'Blic na fotoaparatu mora da bljesne jako, a baterija ne može tako brzo da da toliko energije. Zato se energija prvo polako skuplja u <b>kondenzatoru</b>, a onda se u deliću sekunde ispusti kroz lampicu. Isto radi i defibrilator koji lekari koriste za oživljavanje srca.',
parts:[
['Šta je kondenzator?','<p>Kondenzator čine <span class="hl">dve provodne ploče razdvojene izolatorom</span> (vazduhom, plastikom). Kad ga povežeš na bateriju, jedna ploča dobije + naelektrisanje, druga −. Između njih nastaje električno polje u kome je sačuvana energija.</p>'],
['Kapacitivnost','<p><b>Kapacitivnost</b> ($C$) pokazuje koliko naelektrisanja kondenzator primi na svaki volt napona. Meri se u faradima ($F$). Farad je ogromna jedinica, pa se koriste mikrofaradi ($µF$) i pikofaradi ($pF$).</p><p class="note">Veća površina ploča → veća kapacitivnost. Manji razmak između ploča → veća kapacitivnost.</p>'],
['Gde se koriste','<p>U svakom telefonu, računaru i punjaču postoje stotine sitnih kondenzatora. Ekran osetljiv na dodir radi tako što tvoj prst menja kapacitivnost na mestu gde dodirneš staklo!</p>']],
simT:'Pločasti kondenzator',simNote:'Povećaj površinu ploča ili ih približi: kapacitivnost i naelektrisanje rastu. Povećaj napon: naelektrisanje raste, a kapacitivnost ostaje ista!',
f:[['$C = Q / U$','Kapacitivnost = naelektrisanje podeljeno naponom.'],['$C = ε₀ · S / d$','Za pločasti kondenzator: zavisi od površine $S$ i razmaka $d$. $ε₀ = 8,85 · 10⁻¹² F/m$.'],['$W = C · U² / 2$','Energija sačuvana u kondenzatoru.']],
ex:{q:'Kondenzator kapacitivnosti 10 µF priključen je na 12 V. Koliko naelektrisanja ima na pločama?',s:['Iz $C = Q/U$ sledi $Q = C · U$.','$Q = 10 · 10⁻⁶ F · 12 V$.','$Q = 120 · 10⁻⁶ C = 120 µC$.'],a:'Odgovor: na pločama je 120 µC naelektrisanja.'},
mem:['Kondenzator = dve ploče + izolator između njih.','$C = Q/U$, jedinica farad ($F$).','Veća površina i manji razmak → veća kapacitivnost.','Kondenzator čuva energiju u električnom polju.'],
yt:'kondenzator kapacitivnost pločasti kondenzator',
quiz:[
['Od čega se sastoji kondenzator?',['od dve provodne ploče i izolatora između njih','od magneta i žice','od baterije i sijalice','od jednog provodnika'],0,'Dve ploče razdvojene izolatorom.'],
['Koja je jedinica za kapacitivnost?',['farad','henri','om','kulon'],0,'Kapacitivnost se meri u faradima.'],
['Kondenzator od $2 µF$ na naponu $5 V$ ima naelektrisanje:',['$10 µC$','$2,5 µC$','$7 µC$','$0,4 µC$'],0,'$Q = C·U = 2 · 5 = 10 µC$.'],
['Šta se dešava sa kapacitivnošću kad se ploče približe?',['raste','opada','ne menja se','postaje nula'],0,'$C = ε₀S/d$: manji razmak znači veću kapacitivnost.'],
['Ako se napon udvostruči, naelektrisanje na kondenzatoru:',['se udvostruči','ostane isto','se prepolovi','se učetvorostruči'],0,'$Q = CU$, a $C$ se ne menja.'],
['Gde je sačuvana energija kondenzatora?',['u žicama','u električnom polju između ploča','u izolatoru kao toplota','u bateriji'],1,'Energija je smeštena u polju između ploča.']]});

L({n:20,y:2,sim:'ohm',t:'Električna struja i Omov zakon',s:'Šta teče kroz žicu i od čega zavisi koliko teče.',
hook:'Georg Om je bio gimnazijski profesor u Nemačkoj. Kada je 1827. objavio zakon koji danas nosi njegovo ime, kolege su ga ismevale, pa je izgubio posao. Tek posle mnogo godina priznali su da je bio u pravu. Danas njegov zakon koristi svaki električar na svetu, a jedinica za otpor zove se „om“.',
parts:[
['Šta je električna struja?','<p>Električna struja je <span class="hl">usmereno kretanje naelektrisanja</span>, u metalima elektrona. Zamisli vodu u cevi: napon je kao pumpa koja gura vodu, a struja je koliko vode prođe u sekundi.</p><p><b>Jačina struje</b> ($I$) je naelektrisanje koje prođe kroz provodnik u jednoj sekundi. Meri se u amperima ($A$), ampermetrom.</p>'],
['Otpor','<p>Svaki provodnik se malo „opire“ prolasku struje. Taj <b>otpor</b> ($R$) meri se u omima ($Ω$). Duža i tanja žica ima veći otpor, kao što kroz dugu tanku slamku teže piješ sok.</p>'],
['Omov zakon','<p><span class="hl">Struja je veća što je napon veći, a manja što je otpor veći.</span></p><p class="note">$I = U / R$. Zapamti trougao: <b>U</b> na vrhu, <b>I</b> i <b>R</b> na dnu. Pokrij ono što tražiš i vidiš formulu.</p>']],
simT:'Strujno kolo',simNote:'Povećaj napon: elektroni (plave tačke) jure brže, a sijalica jače svetli. Povećaj otpor: struja slabi. Grafik desno pokazuje da je struja srazmerna naponu.',
f:[['$I = U / R$','Omov zakon: struja = napon podeljen otporom.'],['$U = I · R$','Napon = struja × otpor.'],['$R = U / I$','Otpor = napon podeljen strujom.'],['$I = q / t$','Jačina struje = naelektrisanje podeljeno vremenom.']],
ex:{q:'Sijalica otpora 460 Ω uključena je u utičnicu od 230 V. Kolika struja teče kroz nju?',s:['Omov zakon: $I = U/R$.','$I = 230 V : 460 Ω$.','$I = 0,5 A$.'],a:'Odgovor: kroz sijalicu teče struja od 0,5 A.'},
mem:['Struja = usmereno kretanje naelektrisanja, meri se u amperima.','Otpor se meri u omima ($Ω$).','Omov zakon: $I = U/R$.','Duža i tanja žica ima veći otpor.'],
yt:'električna struja Omov zakon otpor',
quiz:[
['Šta je električna struja?',['mirovanje elektrona','usmereno kretanje naelektrisanja','svetlost u žici','toplota'],1,'Struja je usmereno kretanje naelektrisanih čestica.'],
['Koliku struju daje baterija od $9 V$ kroz otpor od $3 Ω$?',['$27 A$','$3 A$','$12 A$','$0,33 A$'],1,'$I = U/R = 9 : 3 = 3 A$.'],
['Kroz otpor od $10 Ω$ teče $2 A$. Napon na njemu je:',['$5 V$','$20 V$','$12 V$','$0,2 V$'],1,'$U = I·R = 2 · 10 = 20 V$.'],
['Ako se otpor poveća, a napon ostane isti, struja:',['raste','opada','ostaje ista','menja smer'],1,'$I = U/R$: veći otpor daje manju struju.'],
['Koja žica ima najveći otpor (isti materijal)?',['kratka i debela','duga i tanka','kratka i tanka','duga i debela'],1,'Otpor raste sa dužinom i opada sa debljinom.'],
['Kojim instrumentom merimo jačinu struje?',['voltmetrom','ampermetrom','termometrom','barometrom'],1,'Struja se meri ampermetrom.']]});

L({n:21,y:2,sim:'circuits',t:'Električna kola i snaga struje',s:'Redna i paralelna veza, i koliko struja troši.',
hook:'Nekada su novogodišnje lampice bile vezane redno, u jednom nizu. Kad pregori jedna sijalica, ugasi se ceo lanac, a ti moraš da isprobavaš svaku da nađeš krivca! Kod kuće su uređaji vezani paralelno, pa kad isključiš frižider, televizor i dalje radi. Danas ćemo videti kakva je razlika.',
parts:[
['Redna veza','<p>Kod redne veze potrošači su u <span class="hl">jednom nizu</span>, kao vagoni voza. Ista struja prolazi kroz sve. Ukupan otpor je zbir: $R = R₁ + R₂$. Ako se jedan prekine, prekinuto je celo kolo.</p>'],
['Paralelna veza','<p>Kod paralelne veze svaki potrošač ima <span class="hl">svoju granu</span>, kao trake na autoputu. Svi imaju isti napon. Struja iz izvora se deli. Ukupan otpor je <b>manji</b> od svakog pojedinačnog. Ako se jedna grana prekine, ostale rade dalje.</p>'],
['Rad i snaga struje','<p>Struja vrši rad: greje, svetli, pokreće motore. <b>Snaga</b> pokazuje koliko energije se troši u sekundi: $P = U·I$.</p><p class="note">Račun za struju plaćamo po <b>kilovat-satima</b> ($kWh$). Grejalica od 2000 W koja radi 3 sata potroši $2 kW · 3 h = 6 kWh$. Prolaskom struje provodnik se greje: to je <b>Džulov zakon</b>.</p>']],
simT:'Redno ili paralelno?',simNote:'Prebacuj između redne i paralelne veze. Primeti: paralelno vezane sijalice svetle jače. Zatim klikni „Pregori sijalicu 1“ i vidi šta se dešava sa drugom u svakom slučaju.',
f:[['$R = R₁ + R₂$','Redna veza: otpori se sabiraju.'],['$1/R = 1/R₁ + 1/R₂$','Paralelna veza: sabiraju se recipročne vrednosti.'],['$P = U · I = I² · R$','Snaga struje, jedinica vat ($W$).'],['$A = P · t$','Utrošena energija = snaga × vreme.']],
ex:{q:'Dva otpornika od 6 Ω vezana su paralelno na 12 V. Koliki je ukupan otpor i ukupna struja?',s:['$1/R = 1/6 + 1/6 = 2/6 = 1/3$.','$R = 3 Ω$ (dva ista otpora paralelno daju pola otpora).','$I = U/R = 12 : 3 = 4 A$.'],a:'Odgovor: ukupan otpor je 3 Ω, a struja iz izvora 4 A (po 2 A kroz svaki).'},
mem:['Redna veza: ista struja kroz sve, otpori se sabiraju.','Paralelna veza: isti napon na svima, struja se deli.','Kod kuće su uređaji vezani paralelno.','Snaga $P = UI$; energija se plaća u $kWh$.'],
yt:'redna i paralelna veza otpornika snaga električne struje',
quiz:[
['Otpori od $4 Ω$ i $6 Ω$ vezani su redno. Ukupan otpor je:',['$10 Ω$','$2,4 Ω$','$24 Ω$','$2 Ω$'],0,'Redno: $R = 4 + 6 = 10 Ω$.'],
['Dva otpora od $10 Ω$ vezana paralelno daju ukupan otpor od:',['$20 Ω$','$5 Ω$','$10 Ω$','$100 Ω$'],1,'Dva ista otpora paralelno daju polovinu: $5 Ω$.'],
['Kod redne veze pregori jedna sijalica. Šta se dešava sa ostalima?',['nastave da svetle','sve se ugase','svetle jače','pregore'],1,'Kolo je prekinuto, pa struja više ne teče nigde.'],
['Kako su vezani uređaji u stanu?',['redno','paralelno','nisu vezani','kružno'],1,'Paralelno: svaki dobija 230 V i radi nezavisno.'],
['Fen radi na $230 V$ sa strujom od $5 A$. Snaga mu je:',['$46 W$','$1150 W$','$235 W$','$225 W$'],1,'$P = U·I = 230 · 5 = 1150 W$.'],
['Bojler od $2 kW$ radi 2 sata. Koliko energije potroši?',['$1 kWh$','$4 kWh$','$2 kWh$','$0,5 kWh$'],1,'$A = P·t = 2 kW · 2 h = 4 kWh$.']]});
})(o=>window.LESSONS.push(o));
