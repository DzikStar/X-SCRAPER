"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["i18n/hr"],
    {
        777511: (a, e, i) => {
            var o = i(292426)._register("hr", {
                get emoji() {
                    return i.e("i18n/emoji-hr").then(i.t.bind(i, 100028, 23));
                },
            });
            function n(a, e, i, o) {
                switch (((n = String(a).split(".")), (t = n[0]), (r = n[1] || ""), (j = !n[1]), (u = t.slice(-1)), (d = t.slice(-2)), (s = r.slice(-1)), (v = r.slice(-2)), (j && 1 == u && 11 != d) || (1 == s && 11 != v) ? "one" : (j && u >= 2 && u <= 4 && (d < 12 || d > 14)) || (s >= 2 && s <= 4 && (v < 12 || v > 14)) ? "few" : "other")) {
                    case "few":
                        return e;
                    case "one":
                        return i;
                    default:
                        return o;
                }
                var n, t, r, j, u, d, s, v;
            }
            o("c39b0e24", "X"),
                o("jb38600c", "Nema"),
                o("f07eac34", "Račun za parodije"),
                o("a41b5c2e", "Račun za obožavatelje"),
                o("i428ea62", "Račun za komentare"),
                o("ac0d27be", "Nažalost, taj je račun privremeno blokiran."),
                o("bcee7444", "Ažuriranje računa nije uspjelo."),
                o("e0cbf77a", "Dodavanje telefona"),
                o("f377195c", "X je preopterećen. Pričekajte nekoliko minuta pa pokušajte ponovno."),
                o("d67f9456", "Ta vam je akcija onemogućena."),
                o("e0ece1b6", "Nije moguće priložiti medijski sadržaj, pokušajte ponoviti prijenos."),
                o("i82e8f04", "Da bismo naše korisnike zaštitili od neželjenog sadržaja i ostalih zlonamjernih aktivnosti, tom smo računu privremeno blokirali praćenje drugih računa. Pažljivo pročitajte pravila platforme X."),
                o("jf7be47a", "Da bismo naše korisnike zaštitili od neželjenog sadržaja i ostalih zlonamjernih aktivnosti, tom smo računu privremeno blokirali slanje objava. Pažljivo pročitajte pravila platforme X."),
                o("g75fec74", "Dosegli ste dnevno ograničenje za ovu radnju. Da biste uklonili ograničenje, dodajte telefonski broj svom računu."),
                o("abb8b6e0", "Telefonski je broj već registriran."),
                o("f30bd1fc", "Ne možemo poslati SMS na taj telefonski broj jer operater nije podržan."),
                o("i54e550c", "Ne možemo provjeriti taj telefonski broj."),
                o("h154702a", "Taj zahtjev ne možemo odobriti jer su tu poveznicu X ili njegovi partneri prepoznali kao potencijalno štetnu. Saznajte više u našem Centru za pomoć."),
                o("c8cb0b4c", "Unijeli ste netočnu lozinku."),
                o("b1b54f9e", "Medijski sadržaj koji ste pokušali prenijeti nije valjan."),
                o("i859a9d4", "Saznajte više"),
                o("d6e72ce1", function (a) {
                    return "Lozinka ne smije sadržavati više od sljedećeg broja znakova: " + a.count + ". Unesite kraću lozinku.";
                }),
                o("a34dccd7", function (a) {
                    return "Lozinka mora sadržavati najmanje sljedeći broj znakova: " + a.count + ". Unesite dulju lozinku.";
                }),
                o("jea2ff04", "Ta je lozinka prejednostavna. Promijenite je tako da bude jača."),
                o("ce482c36", "Neka polja nisu valjana. Provjerite što ste unijeli pa pokušajte ponovno."),
                o("db626d88", "Dodajte telefonski broj da biste završili s postavljanjem računa"),
                o("i3ee2550", "Ispunite sva potrebna polja."),
                o("cf18a258", "Čini se da je taj zahtjev automatiziran. Da bismo svoje korisnike zaštitili od neželjene pošte i ostalih zlonamjernih aktivnosti, trenutno ne možemo dovršiti ovu radnju. Pokušajte ponovno kasnije."),
                o("h7ffa648", "Premašeno je ograničenje provjera autentičnosti putem SMS-a."),
                o("b87ceb1c", "SMS pin za provjeru autentičnosti nije valjan."),
                o("f87e2faa", "Nažalost, nismo uspjeli pronaći tog korisnika."),
                o("cdaf8222", "Vaše je korištenje nažalost ograničeno. Pričekajte par trenutaka pa pokušajte ponovno."),
                o("c1b0e710", "Vaš je račun ukinut i onemogućena vam je ta akcija."),
                o("bfb22fae", "Nažalost, ta je objava izbrisana."),
                o("a23cd3ba", "X je onemogućio neke radnje na ovoj objavi."),
                o("bb558892", "Korisnik već ima provjereni telefonski broj."),
                o("hae1c934", "Došlo je do pogreške, ali ne brinite – niste vi krivi."),
                o("e784846c", "U tijeku je pregled vašeg profila. Tijekom razdoblja pregleda nije mogućno izmijeniti ime ni profilnu fotografiju."),
                o("h1cbdd30", "Osvježite stranicu pa pokušajte ponovno."),
                o("a5077d3e", "Osvježi"),
                o("b2648ba4", "Izvršavanje te radnje možda nije dopušteno s vašeg računa. Osvježite stranicu i pokušajte ponovno."),
                o("bcd6bb0e", "Član"),
                o("hd8c22d2", "Mod."),
                o("c3153100", "Admin"),
                o("fa9adac1", function (a) {
                    return 'Pretraži "' + a.query + '"';
                }),
                o("jcec6620", "Odgovor na objavu skriven je"),
                o("f75d1806", "Premium"),
                o("j4a7d9a6", "Osnovna"),
                o("hedf9d7c", "Premium+"),
                o("f5de898e", "Profilna slika šesterokutnog oblika"),
                o("fcc8734a", "Profilna slika kvadratnog oblika"),
                o("c64e46f8", "Taj je član uklonjen iz Zajednice, stoga su njegove/njezine objave skrivene."),
                o("b3f1cb42", "Moderator je sakrio tu objavu jer krši pravilo Zajednice."),
                o("cbd2dc9c", "Tu ste objavu prijavili."),
                o("cfbea177", function (a) {
                    return "Prostor korisnika/ce " + a.name;
                }),
                o("ab4fc8bc", "Prostor"),
                o("jd859c9c", "Uklonjeni ste iz tog Prostora."),
                o("c60ed9b0", "Nemate ovlaštenje za pridruživanje tom Prostoru."),
                o("d8227e16", "Nemate ovlaštenje za izradu tog Prostora"),
                o("f027fed8", "Slika-u-slici"),
                o("hd50e064", "Ne sada"),
                o("i76d640e", "Trebamo vašu dozvolu"),
                o("fdaa0be8", "Da biste govorili u ovom prostoru, morate platformi X dodijeliti dozvolu za pristup mikrofonu. Provjerite postavke preglednika. "),
                o("gea6cc1a", "Jeste li sigurni?"),
                o("hb568af4", "Onemogućite korisnika/cu"),
                o("f7c8617a", "Što su audioisječci?"),
                o("ecc7d2ec", "Audioisječci su snimljeni trenuci koje mogu izrađivati i dijeliti svi sudionici Prostora. Svi isječci istječu nakon 30 dana."),
                o("d575ee02", "Tko može stvoriti audioisječak?"),
                o("dbc477a4", "Isječke može stvoriti svatko (čak i slušatelji). Potrebno je samo biti prijavljen na X."),
                o("ed1d1cc0", "Svi govornici mogli bi se naći u audioisječku"),
                o("e5d193c8", "Ako govorite, mogli biste se naći u audioisječku. Ako do toga dođe, obavijestit ćemo vas."),
                o("e1547ec0", "Stvorite audioisječak trenutka u Prostoru"),
                o("i154245e", "Čuli ste nešto urnebesno smiješno ili fantastično? Stvorite audioisječak i podijelite to."),
                o("j24c37b2", "Shvaćam"),
                o("g1c6f16e", "Snimljeni Prostori"),
                o("e5609214", "Omogućite Prostor uživo"),
                o("g665514c", "Samo će govornici biti na snimci"),
                o("ja196c5a", "Gosti koji su govornici bit će na snimci. Snimanje je javno i svatko snimku može reproducirati."),
                o("dd317ed6", "Reprodukcija i dijeljenje s drugima"),
                o("jf03b37c", "Snimku poslušajte bilo kada. Možete je i podijeliti u objavi."),
                o("fd05976b", "Saznajte više"),
                o("b4f91a8a", "Snimanje je uključeno"),
                o("gb418012", "Dobro došli u Prostore"),
                o("fec3c1e0", "Mjesto gdje se održavaju audiorazgovori uživo"),
                o("j32eb4f8", "Dodajte najviše 10 govornika"),
                o("j4f133a6", "Bilo koga na platformi X možete pozvati kao govornika."),
                o("ed434ac6", "Prostori su javni – svi se mogu uključiti"),
                o("e0025688", "Vaš Prostor, vaša pravila"),
                o("c1bc6f86", "Kao voditelj kontrolirate kome je dopušteno govoriti. Osim toga, možete i ukloniti osobe koje ne želite u svom Prostoru."),
                o("b0bc8330", "Osobe u Prostoru možete blokirati i prijaviti."),
                o("cb17a0f3", "Saznajte više"),
                o("dcd77941", "Saznajte više"),
                o("cc724cb0", "Stvaranje audioisječka"),
                o("cfd2f35e", "Odustani"),
                o("c1df579e", "Sljedeće"),
                o("e3146662", "Za taj audioisječak nisu mogući titlovi."),
                o("f123fea8", "Prijavi taj Prostor"),
                o("d0aebc28", "Opišite problem"),
                o("g971a4e8", "Samoozljeđivanje"),
                o("b96e6682", "Nasilje"),
                o("e5bf9b3a", "Seksualni sadržaj"),
                o("d2a34320", "Sigurnost djece"),
                o("a9ba3e28", "Osobni podaci"),
                o("d5519f4a", "Zlonamjerno ponašanje"),
                o("eb55363c", "Taj je Prostor prijavljen"),
                o("i65de934", "Slušate anonimno"),
                o("b1037050", "Upravljajte Prostorom"),
                o("ic107434", "Uključi kameru"),
                o("d7e0329c", "Isključi kameru"),
                o("b772cd66", "Gotovo"),
                o("b3bd3e38", "Najprije najpopularnije objave"),
                o("d88cf16c", "Najprije najnovije objave"),
                o("bd4ad3ea", "Široko"),
                o("ca1180a0", "Srednje veliko"),
                o("c86ff1b0", "Suzi"),
                o("eed02406", "Malo"),
                o("cffb04d6", "Standardno"),
                o("af15cef8", "Objava s bilješkama"),
                o("ab28945c", "Profil suradnika"),
                o("e2462db4", "Najčešće dijeljeno u vašoj mreži · u zadnja 24 sata"),
                o("ad16f482", "Događaj"),
                o("c20aaf3e", "Pogreška"),
                o("edf7bc2e", "Aktualne teme"),
                o("fa884026", "Popis"),
                o("fa98627a", "Profil"),
                o("a9ae1e78", "Pretraživanje"),
                o("a2a3824a", "Tema"),
                o("a6d5b010", "Vremenska crta"),
                o("h5860a68", "Grok"),
                o("a990900c", "Biografija"),
                o("h02a6fe6", "Zajednice"),
                o("a15648a4", "Bilješke zajednice"),
                o("j359a2a9", function (a) {
                    return a.handle + " • " + a.itemName;
                }),
                o("j5ec9765", function (a) {
                    return a.handle + " • Mapa s knjižnim oznakama";
                }),
                o("ce5deee7", function (a) {
                    return a.handle + " • Poruke";
                }),
                o("d80c77dc", "Te ste odgovore sakrili"),
                o("ef939f4b", function (a) {
                    return "Odgovore je sakrio/la @" + a.screenName;
                }),
                o("g40ff2b4", "Promjena veličine medijskog sadržaja nije uspjela, sadržaj je prevelik za prijenos."),
                o("b8098028", "Najmanje jedna slika premašuje ograničenje veličine te se veličina slike ne može promijeniti."),
                o("b36f4170", "Datoteka je prazna."),
                o("hab3781e", "Najmanje jedna datoteka nije slika."),
                o("f6c4fb02", "GIF datoteku nije moguće obraditi. Pročitajte savjete za prijenos GIF datoteka."),
                o("g0af3dd2", "GIF datoteka nije kompatibilna. Pročitajte savjete za prijenos GIF datoteka."),
                o("b8c8b0be", "Videodatoteku nije moguće obraditi. Pročitajte savjete za prijenos videodatoteka."),
                o("ica6d718", "Videodatoteka nije kompatibilna. Pročitajte savjete za prijenos videodatoteka."),
                o("b28d44f7", function (a) {
                    return "GIF datoteka je prevelika. GIF-ovi moraju biti manji od " + a.limit + " MB";
                }),
                o("i1db7d13", function (a) {
                    return "Videodatoteka je prevelika. Videozapisi moraju biti manji od " + a.limit + " MB";
                }),
                o("baac0ed7", function (a) {
                    return "Videodatoteka je prevelika. Videozapisi moraju biti manji od " + a.limit + " GB";
                }),
                o("a22385bb", function (a) {
                    return "Videozapis je predugačak. Pokušajte ga skratiti na maksimalno " + a.limit + " s.";
                }),
                o("be0440bf", function (a) {
                    return "Videozapis je predugačak. Pokušajte ga skratiti na maksimalno " + a.limit + " min.";
                }),
                o("feeba512", "Slikovna se datoteka nije obradila. Pročitajte savjete za prijenos slika."),
                o("db123c02", "Slikovna datoteka nije kompatibilna. Pročitajte savjete za prijenos slika."),
                o("db6001e7", function (a) {
                    return "Slikovna datoteka je prevelika. Slike moraju biti manje od " + a.limit + " MB";
                }),
                o("eb96d952", "Slikovna datoteka nije dovoljno visoka i široka"),
                o("b3880588", "Sesija prijenosa istekla je."),
                o("ca058b68", "Neki se medijski sadržaji nisu uspjeli učitati."),
                o("id24379c", "Neki se multimedijski sadržaj nije prenio."),
                o("h4d7cbcc", "Medijski se sadržaji nisu uspjeli prenijeti. Pokušajte ponovno."),
                o("aaa798fc", "Nadogradnja"),
                o("f13bb672", "Pretplatite se na Premium"),
                o("ab0decc0", "Pretplata"),
                o("e4e92f35", function (a) {
                    return "Nadogradite na " + a.tier;
                }),
                o("c2831f07", function (a) {
                    return "Pretplatite se na " + a.tier;
                }),
                o("fd425414", "Preuzmite Radar"),
                o("g6320792", "Preuzmite analitiku pretplate Premium"),
                o("f09be7f8", "Provjereni račun"),
                o("j34ad558", "Nadogradite na Premium"),
                o("a73d39fb", function (a) {
                    return "Započnite besplatno " + a.numberOfDays + "-dnevno probno razdoblje";
                }),
                o("i4fb96c7", function (a) {
                    return "Ostvarite do " + a.percentage + " % popusta na X " + a.premiumTierName;
                }),
                o("c1c98165", function (a) {
                    return a.percentage + " % popusta";
                }),
                o("c5546038", "Uskoro istječe!"),
                o("e9a47564", "Posljednja prilika"),
                o("f65e7e91", function (a) {
                    return a.percentage + " % popusta na " + a.tier + " " + a.plan;
                }),
                o("a84a736e", "Ostvarite besplatni kredit za oglase"),
                o("a0713d76", "Nadogradite na Provjerene organizacije da biste dobili besplatni kredit za oglase i paket alata za rast poslovanja."),
                o("a07e13fc", "Postanite Premium autor sadržaja"),
                o("i1b4aea2", "Nadogradite za objavu dužih videozapisa"),
                o("efa90342", "Otključajte uređivanje objava uz X Premium"),
                o("cc528e28", "Samo pretplatnici na X Premium imaju pristup uređivanju objava. Nadogradite za nastavak."),
                o("h8a3525e", "Istaknuto na vašem profilu"),
                o("c0f7a722", "Da biste mogli isticati objave na svom profilu, morate biti pretplaćeni na Premium."),
                o("i3b31136", "Pišite članke na platformi X"),
                o("b6a41c5f", function (a) {
                    return "Za pisanje članaka na platformi X morate imati pretplatu na " + a.tier;
                }),
                o("ae2c4afc", "Želite li objaviti vlastiti članak?"),
                o("d300e29b", function (a) {
                    return "Nadogradite pretplatu na " + a.tier + " kako biste pisali dulje objave i članke.";
                }),
                o("f614e2bc", "Nadogradite pretplatu na Premium kako biste pisali dulje objave i primjenjivali oblikovanje, kao što su podebljani tekst i kurziv."),
                o("c9772e6e", "Nadogradite na Premium"),
                o("dc5575ac", "Želite imati oznaku potvrđenog identiteta na svom profilu?"),
                o("d154f46e", "Otključajte izradu Zajednica uz X Premium"),
                o("a0228c02", "Samo pretplatnici na X Premium imaju pristup izradi Zajednica. Nadogradite za nastavak."),
                o("d07f1d74", "Morate biti provjeren korisnik da biste dodali te korisnike u razgovor"),
                o("ebe38626", "Samo provjereni korisnici mogu u grupu dodati osobe koje ih ne prate. Nadogradite za nastavak."),
                o("e6eddae0", "Izvršite provjeru autentičnosti za izradu te grupe"),
                o("he27089e", "Samo provjereni korisnici mogu izraditi grupu s korisnicima koji ih ne prate. Nadogradite za nastavak."),
                o("d7bc1116", "Izvršite provjeru autentičnosti da biste poslali poruku tom korisniku"),
                o("f897074a", "Samo provjereni korisnici mogu slati zahtjeve za privatne poruke osobama koje ih ne prate. Nadogradite za nastavak."),
                o("c0cf5eae", "Izvršite provjeru autentičnosti za slanje više poruka"),
                o("h2da08fc", "Dosegnuli ste maksimalno ograničenje za privatne poruke u jednom danu. Nadogradite da biste nastavili slati poruke."),
                o("j503aee6", "Preuzimajte videozapise uz X Premium"),
                o("j4dd3bf4", "Samo pretplatnici na X Premium mogu preuzimati videozapise. Nadogradite za nastavak."),
                o("bc231a74", "Otključajte mape knjižnih oznaka uz X Premium"),
                o("ed534c78", "Samo pretplatnici na X Premium imaju pristup mapama knjižnih oznaka. Nadogradite za nastavak."),
                o("ed924940", "Uklonite sve oglase uz Premium+"),
                o("dccdb326", "Samo pretplatnici na Premium+ imaju iskustvo bez oglasa. Nadogradite za nastavak."),
                o("adf3410a", "Pretplatite se da biste otključali nove značajke i, ako ispunjavate uvjete, primali udio u prihodu."),
                o("d8661dd4", "Tijekom ograničenog vremena. Otključajte najbolje što platforma X pruža."),
                o("fe7fd234", "Besplatno isprobajte Premium Basic već danas"),
                o("a2f86dda", "Poboljšajte svoje iskustvo uz mape knjižnih oznaka, uređivanje objava, prilagođene ikone aplikacija i još puno toga pretplatom na Premium Basic."),
                o("d9593598", "Besplatno isprobajte Premium već danas"),
                o("d0d6b59c", "Nadogradite iskustvo s manje oglasa, snažnim alatama i još puno toga uz Premium."),
                o("g4bb7ea8", "Ostvarite do 50 % popusta na X Premium"),
                o("b748499c", "Ponuda je produljena!"),
                o("b81135bc", "Završava danas!"),
                o("a8b4b878", "Iskusite najbolje što pruža X ovog Dana zahvalnosti."),
                o("df7fb242", "Ponuda za Dan zahvalnosti"),
                o("aeaf14a6", "Ostvarite 40 % popusta na Premium. Uskoro istječe!"),
                o("ca8cbf78", "Ostvarite 40 % popusta na Premium i Premium+"),
                o("j88ba18e", "Iskoristite ponudu"),
                o("f4dc8ea3", function (a) {
                    return "Ostvarite " + a.percentage + " % popusta na X Premium. Otključajte najbolje što platforma X pruža.";
                }),
                o("db6a5d54", "Još niste provjerili svoju autentičnost"),
                o("edf7f57e", "Provjerite svoju autentičnost kako biste ostvarili istaknute odgovore, analitiku, pregledavanje bez oglasa i još puno toga. Nadogradite svoj profil već sada."),
                o("ba920d68", "Povećajte svoj utjecaj s provjerom autentičnosti"),
                o("ib79d0c2", "Otključajte VIP značajke: potvrdite svoj račun"),
                o("bebc5f12", "Oglašavate se na platformi X, ali nemate pretplatu za Provjerene organizacije"),
                o("d7836d1e", "Pretplatite se kako biste ostvarili do 12.000 USD besplatnih kredita za oglase, dobili zlatnu provjeru autentičnosti, VIP podršku i paket alata za razvoj."),
                o("f528e369", function (a) {
                    return "Pretplatite se na " + a.tier + " da biste pisali vlastite članke";
                }),
                o("c5a8022a", "Uz Članke možete objavljivati vlastite duge sadržaje s obogaćenim tekstom i umetnutim medijskim sadržajem izravno na platformi X."),
                o("d77899b6", "Pretplatite se na Premium da biste pisali dulje objave"),
                o("bd65482a", "Pišite dulje objave i primijenite oblikovanje teksta, kao što su podebljani tekst i kurziv."),
                o("bee20918", "Počnite zarađivati od objava"),
                o("gb699d52", "Volite objavljivati na platformi X? Pretplatite se na Premium i uključite se u naš program udjela u prihodu."),
                o("f69877c2", "Istaknite svoje objave uz Premium"),
                o("gba90d44", "Povećajte svoju vidljivost, istaknite se i budite uočljivi."),
                o("a6dbcd58", "Pretplatite se na Premium i podržite autore sadržaja"),
                o("c4f49130", "Do 25 % vaše naknade za pretplatu ide izravno autorima sadržaja."),
                o("ca8fa2c0", "Budite Provjereni s plavom kvačicom"),
                o("febffc1a", "Istaknite svoju vjerodostojnost, povećajte vidljivost i dajte svoje mišljenje."),
                o("j45a377a", "Nadogradnja na Premium+"),
                o("i7170016", "Uživajte u dodatnim prednostima, kao što su iskustvo bez oglasa i najveće prioritetno rangiranje odgovora."),
                o("ee87f95e", "Napredna analitika uz X Premium"),
                o("ac38dbc0", "Pogledajte analitiku svog profila, razumijte svoju publiku i drugo. Nadogradite za nastavak."),
                o("i6e73154", "Pregled značajke Analitika računa, uključujući trakaste grafikone i mjerne podatke"),
                o("b583e154", "Otključajte analitiku uz X Premium"),
                o("b7fb8c5e", "Potrošite 1000 USD, dobijte 1000 USD"),
                o("ca559b70", "Pretplatite se odmah"),
                o("d68773a4", "Vizualizirajte aktualne teme uz Radar"),
                o("f677fed6", "Pratite ključne riječi, vizualizirajte aktivnost aktualnih tema i filtrirajte razgovore. U stvarnom vremenu."),
                o("ha49eac2", "Želite li brzo rasti na platformi X?"),
                o("f27018b4", "Upotrijebite analitiku pretplate Premium za povećanje broja osoba koje vas prate uz pametne uvide u podatke."),
                o("dfea1f08", "Nemojte propustiti vrijedne uvide"),
                o("da8c5244", "Uz analitiku pretplate Premium možete otključati pametne uvide u podatke za povećanje broja osoba koje vas prate."),
                o("b081baea", "Propuštate uvide!"),
                o("d5effffc", "Dodaj značku"),
                o("c3653d44", "Potvrdite svoju tvrtku"),
                o("e8070e70", "Isprobajte Premium"),
                o("ec42820e", "Želite li da više ljudi vidi vaš odgovor?"),
                o("b0a95418", "Iskoristite značajku Isticanje odgovora s pretplatom Premium"),
                o("j8ee20aa", "Istaknite se u razgovoru uz Isticanje odgovora "),
                o("g13aa596", "Pretplatite se na Premium za isticanje odgovora"),
                o("cadd92be", "Pristupite analitici objava"),
                o("a7058228", "Otključajte naprednu analitiku uz X Premium"),
                o("gb7823ba", "Analitika računa"),
                o("i90f8e36", "Organizirajte knjižne oznake"),
                o("abc6e710", "Sortirajte svoje knjižne oznake u mape uz X Premium"),
                o("b7fa0cfe", "Najpopularniji članci"),
                o("bcc7e8c0", "Sve knjižne oznake"),
                o("i3145aa0", "Knjižne oznake"),
                o("e39b368e", "Prijenos uživo"),
                o("hbea78a8", "Novi stupac"),
                o("b5298d92", "Povezivanje"),
                o("d35d74e4", "Razgovor"),
                o("h5245afa", "Zajednica"),
                o("d4ebc798", "Skice"),
                o("fcf3e54c", "Istraži"),
                o("d806aa1a", "Skriveni odgovori"),
                o("ha8209bc", "Naslovnica"),
                o("a2f81050", "Poruke"),
                o("cf2d1048", "Zahtjevi za poruke"),
                o("e7172d70", "Dodatne poruke"),
                o("e1066d88", "Moj profil"),
                o("eb75875e", "Obavijesti"),
                o("j45978a8", "Citati"),
                o("fd6a3f30", "Zakazane objave"),
                o("aa4209e8", "Super korisnici"),
                o("d52a1caa", "Pretplatnici"),
                o("d7b51c68", "Pretplate"),
                o("c5f4befa", "Aktualne teme"),
                o("df34a454", "Objavi"),
                o("gfccba44", "Zahtjevi za članstvo"),
                o("e42dd8fa", "Zapisnik za moderiranje"),
                o("c2c191fc", "Prijavljene objave"),
                o("c63602d4", "Moje zajednice"),
                o("ddf0ba7e", "Kolekcija"),
                o("c64974fc", "Osobe koje vas prate"),
                o("i099d32e", "Osobe koje prate korisnika koje vi poznajete"),
                o("d960b55c", "Pratim"),
                o("b007440a", "Poslovi"),
                o("aa68dafc", "Podaci o obavijesti"),
                o("b8533bac", "Teme"),
                o("jf00ebf6", "Stupac nije dostupan"),
                o("jaaa8984", "Lokacija"),
                o("f345dcda", "Povijest uređivanja"),
                o("hea3f8ac", "Povezane objave"),
                o("c8ee31da", "Novosti"),
                o("d35c9eec", "Analitika računa"),
                o("b5b7fb94", "Grupiranje"),
                o("g755fcde", "Vi"),
                o("f6b1ff81", function (a) {
                    return a.name + " i vi";
                }),
                o("j652293d", function (a) {
                    return a.listOfParticipants + " i još " + a.count;
                }),
                o("fb4ee2f6", "Zahtjevi za poruke su izbrisani"),
                o("j607bf02", "Preuzmite aplikaciju X"),
                o("j49fd4e8", "Prijeđi na aplikaciju"),
                o("a565833e", "Registracija"),
                o("e919c3bc", "Prijava"),
                o("a17a75da", "X bolji putem aplikacije"),
                o("e7342ed4", "Nemojte propustiti nijednu objavu. Otvorite aplikaciju X da biste koristili potpuno sučelje."),
                o("b6a43e78", "Sve saznajte prvi"),
                o("b469e406", "Ostanite u tijeku s onime što vam je najvažnije. Koristite aplikaciju da biste dobivali automatske obavijesti o osobama, temama i događajima koje pratite."),
                o("b8505290", "Odgovorite da biste se uključili u razgovor."),
                o("ae8b0564", "Proslijedite objavu da biste prenijeli informacije."),
                o("f2adab0e", "Označite objavu oznakom „sviđa mi se” da biste ostalima dali do znanja da vam se sviđa."),
                o("b7821a74", "Prijavite se da ne biste propustili neku od njegovih/njezinih objava."),
                o("e6d43d06", "Počnite pratiti temu i otkrijte zanimljive objave"),
                o("ic848090", "Najprije se prijavite"),
                o("f9ebe066", "Možete se uključiti u razgovore u Zajednicama, samo se najprije prijavite."),
                o("je3d93e2", "Osobe koje upotrebljavaju X prve saznaju vijesti."),
                o("ea88ce2e", "Ostanite u tijeku sa svime što se događa"),
                o("d8817e36", "Accept all cookies"),
                o("b9288ee6", "Refuse non-essential cookies"),
                o("i1390ec2", "Did someone say … cookies?"),
                o("ga3121d5", "Centru za pomoć"),
                o("g482c949", "Prikaz više informacija o vašim odabirima."),
                o("b47e760e", "Da biste prikazali tipkovne prečace, pritisnite upitnik"),
                o("fd2c7b44", "Prikaz tipkovnih prečaca"),
                o("g7e2adf2", "Stvori novu ploču"),
                o("a6ba09e8", "Duplicirani stupac"),
                o("f5c9ccca", "Uredi trenutnu ploču"),
                o("bf42c578", "Gumb za fokusiranje na promjenu rasporeda"),
                o("j6fa64a6", "Idi na zadnji stupac"),
                o("b5545202", "Idi na zadnju prikvačenu ploču"),
                o("e0497acc", "Idi na upravljanje svim pločama"),
                o("beef7b14", "Idi na sljedeći stupac"),
                o("a5cb005e", "Idi na n-ti stupac"),
                o("f65391bc", "Idi na n-tu prikvačenu ploču"),
                o("h0bfdd20", "Dodaj stupac"),
                o("h770f6d4", "Idi na prethodni stupac"),
                o("b8b2b70c", "Izbriši stupac"),
                o("a3e2df76", "Poništi brisanje stupca"),
                o("g850aec4", "Otvori/zatvori postavke stupca"),
                o("d5696fcc", "Pomoć za prečace"),
                o("a83d4280", "Sljedeća objava"),
                o("g0048656", "Prethodna objava"),
                o("a690c4d0", "Stranica dolje"),
                o("e893811a", "Učitaj nove objave"),
                o("cdb53d7a", "Spominjanja"),
                o("d7b8ebaa", "Oznake „sviđa mi se”"),
                o("b0041756", "Popisi"),
                o("d4986f86", "Privatne poruke"),
                o("bb081ea2", "Postavke"),
                o("eee2ed92", "Prikaz korisnika..."),
                o("ee5ccf3e", "Postavke prikaza"),
                o("ab3d53f8", "Nova objava"),
                o("de94bda6", "Pošalji objavu"),
                o("e736990a", "Nova privatna poruka"),
                o("fe731016", 'Označi sa "sviđa mi se"'),
                o("d17df548", "Odgovori"),
                o("g062295e", "Proslijedi objavu"),
                o("h01621a4", "Podijeli objavu"),
                o("gb303814", "Dodaj u knjižne oznake"),
                o("c03b1126", "Onemogući račun"),
                o("ebd2abb2", "Blokiraj račun"),
                o("hc6c5510", "Otvori podatke o objavi"),
                o("eebdef38", "Proširi fotografiju"),
                o("b488758c", "Otvori/zatvori okno Poruke"),
                o("c82314e0", "Pauziraj/reproduciraj odabrani videozapis"),
                o("b881560e", "Onemogući odabrani videozapis"),
                o("a94f7302", "Idi u okno Zvukovnog prostora"),
                o("a7e604c6", "Reproduciraj/pauziraj okno Zvukovnog prostora"),
                o("f978c4fc", "Omogući/onemogući okno Zvukovnog prostora"),
                o("hc73f030", "Vaš račun"),
                o("f15bfdb4", "Informacije o računu"),
                o("a3841918", "E-pošta"),
                o("c21037d0", "Država"),
                o("ab1f7ee0", "Promijenite lozinku"),
                o("e731db5a", "Ponovno postavljanje lozinke"),
                o("f56af9cc", "Preuzmite arhivu svojih podataka"),
                o("hfb92b14", "Deaktivirajte svoj račun"),
                o("bf96fda4", "Dob"),
                o("d12d42dc", "Automatski"),
                o("fdb81456", "Oznaka parodije"),
                o("j9d10268", "Aktivnost računa"),
                o("i6b3f59a", "Povijest računa"),
                o("da202f9a", "Popis oglašavača"),
                o("hc36dbba", "Prijave na uređaje i u aplikacije"),
                o("a8d0108e", "Spol"),
                o("a03dacaa", "Jezik"),
                o("d9138166", "Prikaz mjesta koja ste posjetili"),
                o("b523ecc6", "Povijest pristupa računu"),
                o("abedd45c", "Zatražite svoje podatke"),
                o("h1f01a24", "Interesi"),
                o("j7ad754a", "Vaši podaci za X"),
                o("d299431c", "Monetizacija"),
                o("j087774e", "Novčići"),
                o("ff9ed474", "Ukupna zarada"),
                o("ec885836", "Udio u prihodu za autore sadržaja"),
                o("b431a5c6", "Udio u prihodu od oglasa"),
                o("b0e986ec", "Provjera identiteta za monetizaciju"),
                o("aca4d76a", "Postavljanje udjela u prihodu od oglasa"),
                o("ab1b837a", "Nadzorna ploča udjela u prihodu od oglasa"),
                o("a9c1a9cc", "Oglasi u videozapisima"),
                o("d4ab5c12", "Postavljanje oglasa u videozapisima"),
                o("c429e3ba", "Pretplate autora sadržaja"),
                o("fce877d6", "Poništi objavu"),
                o("dd0c889e", "Prilagodba profila"),
                o("ib35705e", "Upravljanje pretplatom"),
                o("cf131522", "Upravljanje oznakama povezanih računa"),
                o("cb165528", "Značajke i postavke novosti"),
                o("f8645654", "Sigurnost i pristup računu"),
                o("j95edf76", "Sigurnost"),
                o("afe4a358", "Provjera osobnog dokumenta"),
                o("dd703318", "Provjera autentičnosti u dva koraka"),
                o("b1686800", "Upravljanje sigurnosnim ključevima"),
                o("ae72d4c4", "Aplikacije i sesije"),
                o("a1e8e682", "Registrirani uređaji"),
                o("h1abfbce", "Povezani računi"),
                o("cad53944", "Zaštita privatnosti i sigurnost"),
                o("e908903a", "Ciljna skupina i označavanje"),
                o("b5c85d2c", "Zaštitite svoje objave"),
                o("f56d108e", "Označavanje fotografija"),
                o("c6f67e32", "Vaše objave"),
                o("f2bd9c48", "Sadržaj koji vidite"),
                o("cbd449a0", "Onemogućivanje i blokiranje"),
                o("daef29b8", "Onemogućeni računi"),
                o("i0dd9b9e", "Onemogućene riječi"),
                o("a5f32aa2", "Blokirani računi"),
                o("i58a274c", "Izravne poruke"),
                o("ded416b0", "Prostori"),
                o("fd4d9068", "Mogućnost pronalaženja i kontakti"),
                o("bbcafbda", "Upravljanje kontaktima"),
                o("aeddb28a", "Preference sadržaja"),
                o("d035a8d0", "Postavke oglasa"),
                o("d0b74a5a", "Cookie preferences"),
                o("h3909cd0", "Izvedeni identitet"),
                o("d84e63d2", "Aktivnost izvan platforme X"),
                o("h14ba864", "Dijeljenje podataka s poslovnim partnerima"),
                o("jabb9c9a", "Podaci o lokaciji"),
                o("fcb6a5b8", "Dodavanje podataka o lokaciji u objave"),
                o("h9f2da68", "Osjetljiv medijski sadržaj"),
                o("id6a8e1a", "Filtar za odgovore"),
                o("fc35f762", "Filtrirani odgovori"),
                o("gaac710a", "Centar za prijavu"),
                o("bcd81cac", "Postavke"),
                o("i647fb04", "Filtri"),
                o("hee41732", "Automatske obavijesti"),
                o("e75f25a8", "Obavijesti putem e-pošte"),
                o("cf9b166a", "Pristupačnost, prikaz i jezici"),
                o("e3719c16", "Pristupačnost"),
                o("a776eed8", "Automatska reprodukcija"),
                o("c4881c66", "Prikaz"),
                o("d495680e", "Jezici"),
                o("f953f53a", "Promijeni jezik prikaza"),
                o("eafe3288", "Potrošnja podataka"),
                o("b721eb38", "Informacije"),
                o("g9230d00", "Delegirani račun"),
                o("cb8ebf5c", "Članovi koje ste delegirali"),
                o("i95202f6", "Računi koji su vam delegirani"),
                o("afcad7f2", "Preuzmi aplikaciju"),
                o("e8f57e08", "Personalizacija i podaci"),
                o("gbde3534", "Podaci o interesima i oglasima"),
                o("a54826c6", "Interesi partnera"),
                o("a5cbc19a", "Vaša analitika"),
                o("i9028824", "Učitavanje"),
                o("f5090e28", "Čini se da više niste povezani. Pokušavat ćemo ponovno."),
                o("ba929da8", "Stranica nije pronađena"),
                o("d203e242", "Nije pronađeno"),
                o("e2eac0c4", "Osnovno"),
                o("i5aa4ce0", "Više stavki izbornika"),
                o("h63a5c3c", "Više"),
                o("a4fc1872", "Prošli tjedan"),
                o("e14bb1da", "Zadnji dan"),
                o("d86bbf0f", function (a) {
                    return "Nepročitano: " + a.count;
                }),
                o("h6beb5fb", function (a) {
                    return a.count + "+";
                }),
                o("i5f7b6b8", "Račun"),
                o("da4691aa", "Prikaži sve račune"),
                o("c7e55ccf", function (a) {
                    return "Prijelaz na račun @" + a.screenname;
                }),
                o("b20a3894", "Račun na koji se pokušavate prebaciti je izbrisan."),
                o("daffabde", "u ime korisnika/ce..."),
                o("eccbfa26", "Delegirani računi"),
                o("a1b7a904", "U ime"),
                o("g61ed8a4", "Došlo je do pogreške."),
                o("e520f166", "Prekoračili ste dnevno ograničenje za slanje objava."),
                o("c0554ca0", "Došlo je do pogreške. Pokušajte ponovno poslati objavu za koju minutu."),
                o("b25c5b2a", "Ajoj! To ste već rekli."),
                o("cef21114", "Vaš je račun obustavljen i nemate dozvolu za slanje objava."),
                o("cf369a0e", "Objava na koju pokušavate odgovoriti izbrisana je ili vam nije vidljiva."),
                o("cd86efa8", "U tekstu objave ima više @spomena nego što je dopušteno."),
                o("e002f424", "Tekst objave ima više URL-ova nego što je dopušteno."),
                o("c2b4ae8c", "Tekst objave ima više oznaka ljestvi nego što je dopušteno."),
                o("hf05f59e", "Tekst objave ima više oznaka za plaćanje nego što je dopušteno."),
                o("dffb84c6", "Tekst vaše objave sadrži oznaku ljestvi koja je dulja od dopuštenog."),
                o("d7b21bc8", "U objavi ima više vrsta privitaka nego što je dopušteno."),
                o("e4672ac2", "Ajoj! Čini se da URL u vašoj objavi vodi na neželjen ili nesiguran sadržaj."),
                o("he5ecf52", "Tekst objave premašuje maksimalnu dopuštenu veličinu."),
                o("ac78e602", "Sadržaj objave nije valjan."),
                o("i251c738", "Broj sličica po sekundi videozapisa koji ste pokušali prenijeti previsok je."),
                o("ed3ac7ef", function (a) {
                    return "Broj sličica po sekundi videozapisa koji ste pokušali prenijeti previsok je. Maksimalan broj sličica po sekundi: 60. Stvaran broj sličica po sekundi: " + a.frameRate + ".";
                }),
                o("e23fe0cc", "Razmjer proporcija videozapisa koji ste pokušali prenijeti prevelik je."),
                o("ca4514c0", "Razmjer proporcija videozapisa koji ste pokušali prenijeti premalen je."),
                o("fb4a459c", "Trajanje videozapisa koji ste pokušali prenijeti prekratko je."),
                o("ca1afa98", "Trajanje videozapisa koji ste pokušali prenijeti predugo je."),
                o("b2e94283", function (a) {
                    return "Izvor: @" + a.viaScreenName;
                }),
                o("ee69d769", function (a) {
                    return "Objavi" + a.verb;
                }),
                o("ge8e4a38", "Objavi sve"),
                o("h735a98e", "Zakaži"),
                o("h3701ffe", "Ažuriranje"),
                o("d9ef2842", "Nepročitane stavke"),
                o("cdf89b84", "Pretpregled brendiranih oznaka „sviđa mi se”"),
                o("i83d4f14", "Zahtjevi za praćenje"),
                o("aeede01a", "Otisak"),
                o("ae1bbb26", "Odjava"),
                o("fd442790", "Postavke i zaštita privatnosti"),
                o("da137d9a", "MStV Transparenzangaben"),
                o("e0cb0c72", "Oglasi"),
                o("e2eef3c2", "Provjerene organizacije"),
                o("b55d8a78", "Stvorite svoj Prostor"),
                o("e5323e36", "Go Live"),
                o("a5a30af0", "Članci"),
                o("d13d697c", "Novo"),
                o("j0e2cfa8", "Tvrtke"),
                o("h5e38204", "Čavrljanje"),
                o("h7d5d9fa", "Beta"),
                o("ga169e1b", function (a) {
                    return "Privatne poruke (nepročitano: " + a.count + " razgovor" + n(a.count, "a", "", "a") + ")";
                }),
                o("d83682ec", "Naslovnica (nove nepročitane objave)"),
                o("e1249849", function (a) {
                    return "Obavijesti (nepročitano: " + a.count + " obavijest" + n(a.count, "i", "", "i") + ")";
                }),
                o("c0b786ee", "Pretraživanje i istraživanje"),
                o("bb967f9e", "Videozapisi"),
                o("e04033be", "Dostupne su nove objave. Da biste ih pogledali, gurnite tipku za to razdoblje."),
                o("hec711c0", "Pogledajte nove objave"),
                o("j0a8da6e", "Dodavanje postojećeg računa"),
                o("c6f2bf00", "Upravljanje računima"),
                o("a58e0e51", function (a) {
                    return "Odjava korisnika/ce @" + a.screenName;
                }),
                o("j62f43a6", "Prikaz delegiranih računa"),
                o("d4c52015", function (a) {
                    return "Na čekanju imate " + a.count + " pozivnic" + n(a.count, "e", "u", "a") + " za delegirani račun";
                }),
                o("b8e1d524", "Računi"),
                o("gef27c4c", "Izbornik računa"),
                o("b7dc3885", function (a) {
                    return "Prijelaz na račun @" + a.screenName;
                }),
                o("c61eea74", "Osobni računi"),
                o("g6d42fea", "Promjena navigacije"),
                o("eb022176", "Stvori račun"),
                o("gcfef7b6", "Stvorite račun pomoću broja telefona ili adrese e-pošte"),
                o("e5b0e544", "Prijava"),
                o("gd93944e", "Upotreba aplikacije"),
                o("f2f787a0", "Uvjete korištenja"),
                o("e1099fd6", "Pravila o privatnosti"),
                o("c1df1ae0", "Korištenje kolačića"),
                o("cdc1bff7", function (a) {
                    return "Izbornik profila " + a.loggedInUserName;
                }),
                o("fd48249b", function (a) {
                    return "Broj osoba: " + a.count;
                }),
                o("b93ba92d", function (a) {
                    return a.peopleCount + " osob" + n(a.peopleCount, "e", "a", "a");
                }),
                o("ae2205d2", "Međusobno se pratite"),
                o("fd06b02f", function (a) {
                    return "@" + a.screenName + " je trenutno u aktivnom Prostoru. Kliknite da biste se uključili putem njegova/njezina profila";
                }),
                o("f2b3fe06", "Učitavanje rezultata"),
                o("fc9dd578", "Pretraživanje korisnika"),
                o("gdb7bc25", function (a) {
                    return a.name + " – odaberite da biste uklonili";
                }),
                o("f065ba8c", "Upit za pretraživanje"),
                o("hbc99b03", function (a) {
                    return "Idi na profil @" + a.screenName;
                }),
                o("a2c1b222", "Pokušajte tražiti osobe, popise ili ključne riječi"),
                o("f45c4250", "Želite li očistiti sva nedavna pretraživanja?"),
                o("caae4dda", "Ta se radnja ne može poništiti te ćete njome ukloniti sva nedavna pretraživanja."),
                o("dbd5d400", "Očisti"),
                o("a8d68f62", "Nedavno"),
                o("c6530778", "Spremljena pretraživanja"),
                o("e047b8fa", "Očisti sve"),
                o("aa6e3300", "Čini se da se prekinula veza. Provjerite je pa pokušajte ponovno."),
                o("e68b09b4", "Ukloni"),
                o("hffea05c", "Želite li izbrisati spremljeno pretraživanje?"),
                o("j037e374", "Ta se radnja ne može poništiti te ćete izgubiti spremljeno pretraživanje."),
                o("d96cf7ce", "Izbriši"),
                o("hbe4feb5", function (a) {
                    return "Zahtjev za praćenje poslan je korisniku/ci @" + a.screenName + " te čeka odobrenje.";
                }),
                o("df4c86b0", "Najprije ažurirajte svoj profil"),
                o("bba40ffa", "Ne možete pratiti ovaj račun"),
                o("f558829e", "Da biste mogli pratiti ovaj račun, na profil morate unijeti datum rođenja da biste potvrdili da zadovoljavate minimalnu dobnu granicu."),
                o("a6941096", "Praćenje ovog računa nije moguće u vašoj državi."),
                o("if8cd2a4", "Ne zadovoljavate minimalnu dobnu granicu za praćenje ovog računa."),
                o("b5972260", "Došlo je do pogreške. Pokušajte ponovnu otkazati zahtjev za tog korisnika za koju minutu."),
                o("j4292c24", "Na zahtjev ovog korisnika onemogućeno vam je njegovo praćenje."),
                o("a0ba5842", "Trenutno ne možete pratiti više osoba."),
                o("a5202b82", "Došlo je do pogreške. Pokušajte ponovno početi pratiti korisnika za koju minutu."),
                o("f8cbf714", "Korisnik kojeg pokušavate pratiti ne postoji."),
                o("f2e66452", "Vaš je račun privremeno blokiran i onemogućeno vam je praćenje korisnika."),
                o("ca96fe6e", "Nešto nije u redu. Pokušajte ponovno deblokirati tog korisnika za koju minutu."),
                o("e1a0aaca", "Došlo je do pogreške. Pokušajte prestati pratiti tog korisnika za koju minutu."),
                o("fd5208c6", "Idi u postavke"),
                o("c0d13570", "Povezani račun"),
                o("ba96929e", "Zapošljavanje"),
                o("gf62c116", "Podrška"),
                o("a4cf866e", "Oglašavanje"),
                o("g2fd3206", "Korisnici"),
                o("h70bdf0a", "Radar"),
                o("bf6b72ac", "Puni pristup"),
                o("e49537c2", "Hm...ta stranica ne postoji. Pokušajte tražiti nešto drugo."),
                o("fcbb540a", "Premašeno je ograničenje brzine prijenosa podataka"),
                o("d4f88600", "Potvrdi kontakt"),
                o("b192ccae", "Niste potvrdili način za kontakt."),
                o("a0487504", "Da biste zatražili provjeru autentičnosti, najprije potvrdite način za kontakt."),
                o("fff7d93c", "Dodaj Fotografiju"),
                o("g969bfae", "Nema profilne fotografije."),
                o("gb2f35e4", "Da biste zatražili potvrdu profila, najprije morate dodati profilnu fotografiju."),
                o("i33cf692", "Dodaj polje s URL-om"),
                o("b679ff6a", "URL nije valjan"),
                o("i79902b4", "Odaberite način provjere autentičnosti"),
                o("fb2fcb5c", "Tako nam olakšavate provjeru identiteta. Odaberite način koji je za vas najprikladniji."),
                o("e43425fa", "Službeni osobni dokument"),
                o("cb7c2e2e", "Fotografija vašeg službenog osobnog dokumenta."),
                o("a411926a", "Službena adresa e-pošte"),
                o("g253cdd0", "Službena adresa e-pošte s domenom relevantnom za kategoriju koju ste odabrali."),
                o("cf93bcb0", "Referenca na službeno web-mjesto"),
                o("gfb55fa8", "Službeno web-mjesto na kojem se izravno navodi vaš račun za X."),
                o("g40cd2c0", "Potvrđena referenca"),
                o("a7f1cff6", "Dodajte referencu na službeno web-mjesto"),
                o("a11cd524", "Unesite službeno web-mjesto na kojem se navodi vaš račun za X i s kojim je povezan vaš zahtjev za potvrdu."),
                o("ba656f26", "Je li vaš račun za X naveden na web-mjestu?"),
                o("ed751204", "Da bismo vas potvrdili, moramo provjeriti je li vaš račun autentičan. Ako vaš nadimak nije naveden na stranici koju ste naveli, da bi zahtjev bio valjan, morat ćete dokazati autentičnost."),
                o("fbc023b0", "Da"),
                o("e785ce06", "Koristit ću neku drugu mogućnost"),
                o("i8d58f3e", "Koristit ću službeni osobni dokument"),
                o("eb21ecaa", "Koristit ću adresu e-pošte"),
                o("f848a69e", "Da bismo potvrdili vaš račun, moramo provjeriti je li on autentičan. Ako vaš nadimak nije naveden na navedenom službenom web-mjestu, ne možemo provjeriti autentičnost računa."),
                o("d59b5366", "Da bismo potvrdili vaš račun, moramo provjeriti je li autentičan. Ako vaš nadimak nije referenciran na unesenoj poveznici, ne možemo pouzdano povezati vaš račun s istaknutim autorom sadržaja."),
                o("bfb01c62", "Ne, vrati se"),
                o("fa51040a", "Navedite poveznicu na službeno web-mjesto kvalificirane novinarske organizacije ili izdavačke kuće na kojem se spominje vaš račun za X."),
                o("d0460f12", "Navedite poveznicu koja vaš račun navodi kao službeni račun za X vaše organizacije. Referenca se mora nalaziti na službenom web-mjestu nekog Provjerenog entiteta."),
                o("h45b00d8", "Odaberite način na koji želite potvrditi da je vaš račun autentičan i da njime upravlja tvrtka koja nudi zabavne sadržaje povezana s ovim zahtjevom."),
                o("fc718708", "Službeno web-mjesto kvalificirane organizacije na kojem se spominje vaš račun za X."),
                o("g32c2900", "Odaberite način na koji želite potvrditi da je vaš račun autentičan i da njime upravlja organizacija za produkciju sadržaja povezana s ovim zahtjevom."),
                o("j5b1224c", "Navedite poveznicu koja vaš račun navodi kao službeni račun za X za sadržaj koji ste proizveli. Referenca se mora nalaziti na službenom web-mjestu nekog Provjerenog entiteta."),
                o("d090a5d4", "Službeno web-mjesto Provjerene organizacije ili izdavačke kuće na kojem se spominje vaš račun za X."),
                o("eb08a392", "Odaberite način na koji želite potvrditi da je vaš račun autentičan i da njime upravlja kandidat za dužnosnika u vladi povezan s tim zahtjevom."),
                o("h0de1396", "Navedite poveznicu koja vaš račun navodi kao službeni račun za X kandidata za dužnosnika povezan s tim zahtjevom. Referenca se mora nalaziti na službenom web-mjestu nekog Provjerenog entiteta."),
                o("dcc23262", "Odaberite način na koji želite potvrditi da je vaš račun autentičan i da njime upravlja aktivist ili organizator povezan s ovim zahtjevom."),
                o("c880e068", "Službeno web-mjesto interesne organizacije na kojem se spominje vaš račun za X."),
                o("e412d500", "Navedite poveznicu koja vas potvrđuje kao rukovoditelja u potvrđenoj interesnoj organizaciji i svoj račun za X. Referenca se mora nalaziti na službenom web-mjestu Provjerene organizacije."),
                o("dedf41f2", "Odaberite način na koji želite potvrditi da je vaš račun autentičan i da njime upravlja pojedinac influenser povezan s ovim zahtjevom."),
                o("b4aed9e0", "Službeno web-mjesto provjerene organizacije na kojem se spominjete vi i vaš račun za X."),
                o("b2069e40", "Navedite poveznicu u kojoj ste navedeni vi i vaš račun za X. Referenca se mora nalaziti na službenom web-mjestu neke Provjerene organizacije."),
                o("baf718c4", "Odaberite način na koji želite potvrditi da je vaš račun autentičan i da njime upravlja tvrtka, robna marka ili organizacija povezana s ovim zahtjevom."),
                o("c65bbbc2", "Odaberite način na koji želite potvrditi da je vaš račun autentičan i da njime upravlja viši rukovoditelj ili direktor koji podnosi taj zahtjev."),
                o("i31e3606", "Službena adresa e-pošte s domenom kvalificirane tvrtke, robne marke ili organizacije."),
                o("de70afe8", "Referenca na vas i vaš račun za X na službenom web-mjestu organizacije koja zadovoljava uvjete."),
                o("a3a523f2", "Navedite poveznicu koja vaš račun navodi kao službeni račun za X vaše tvrtke. Referenca se mora nalaziti na službenom web-mjestu nekog Provjerenog entiteta."),
                o("jf58899a", "Navedite poveznicu koja vas potvrđuje kao višeg voditelja u organizaciji i svoj račun za X. Referenca se mora nalaziti na službenom web-mjestu nekog Provjerenog entiteta."),
                o("f7afbaec", "Odaberite način na koji želite potvrditi da je vaš račun autentičan i da njime upravlja novinar kvalificirane novinske organizacije ili časopisa."),
                o("d4ab0056", "Odaberite način provjere autentičnosti računa te potvrde da njime upravlja poznati samozaposleni novinar."),
                o("d2a77622", "Službena adresa e-pošte s domenom kvalificirane novinske organizacije ili časopisa."),
                o("eec341da", "Službeno web-mjesto novinarske organizacije ili izdavačke kuće na kojem se spominje vaš račun za X."),
                o("b03ae068", "Odaberite način na koji želite potvrditi da je vaš račun autentičan i da njime upravlja novinska organizacija ili časopis povezan s ovim zahtjevom."),
                o("g0daba4a", "Odaberite način na koji želite potvrditi da je vaš račun autentičan i da njime upravlja profesionalni e-sportaš povezan s tim zahtjevom."),
                o("ab8e430c", "Navedite poveznicu koja vaš račun navodi kao službeni račun za X e-sportaša povezanog s tim zahtjevom. Referenca se mora nalaziti na službenom web-mjestu nekog Provjerenog entiteta."),
                o("cdcd9cd6", "Odaberite način na koji želite potvrditi da je vaš račun autentičan i da njime upravlja profesionalni sportaš povezan s tim zahtjevom."),
                o("gad25890", "Navedite poveznicu koja vaš račun navodi kao službeni račun za X profesionalnog sportskog entiteta povezanog s tim zahtjevom. Referenca se mora nalaziti na službenom web-mjestu nekog Provjerenog entiteta."),
                o("e6dc91b2", "Odaberite način na koji želite potvrditi da je vaš račun autentičan i da njime upravlja profesionalni sportaš povezan s tim zahtjevom."),
                o("i9aed706", "Navedite poveznicu koja vaš račun navodi kao službeni račun za X profesionalnog sportaša povezanog s tim zahtjevom. Referenca se mora nalaziti na službenom web-mjestu nekog Provjerenog entiteta."),
                o("abd587d2", "Dodaj drugu referencu"),
                o("i0bba81a", "Dodajte referencu koja dokazuje da ste zaposlenik"),
                o("a6a76e3c", "Odaberite način dokazivanja poznatosti"),
                o("ecd2abda", "Potvrdite da račun zadovoljava uvjete"),
                o("cb70b894", "Natrag"),
                o("g8b511fe", "Google trendovi"),
                o("c7d50c96", "Profil na Google trendovima s dokazom o nedavnoj aktivnosti pretraživanja vašeg imena."),
                o("a68b43ee", "Dodaj profil na Google trendove"),
                o("b5e30390", "Profil na Google trendovima"),
                o("h146703e", "Članak na Wikipediji"),
                o("ee38d0f0", "Članak na Wikipediji koji govori o vama i zadovoljava standarde pouzdanosti za članke o osobama."),
                o("cb97ee3e", "Dodaj članak na Wikipediji"),
                o("hc371f34", "Prisutnost u vijestima"),
                o("b9d0ad90", "Najmanje tri poveznice na uglednu novinarsku organizaciju koja vas je spominjala ili navela u proteklih šest mjeseci."),
                o("ge137dce", "Najmanje tri članka u proteklih šest mjeseci o vama u novinskim izdanjima koja zadovoljavaju uvjete."),
                o("h2b9a5fe", "Najmanje tri članka u proteklih šest mjeseci o tvrtki u novinskim izdanjima koja zadovoljavaju uvjete."),
                o("baccb708", "Dodaj potvrđeni članak iz vijesti"),
                o("feadd98c", "Dodajte potvrđene reference na novine"),
                o("j7ae97aa", "Potvrđene reference iz novina"),
                o("c368aa8e", "Najmanje tri članka iz potvrđenih novinskih izdanja u kojima je navedeno vaše ime."),
                o("ded0edad", function (a) {
                    return "Članak br. " + a.n;
                }),
                o("bebae55a", "Javna burza"),
                o("c5571610", "Poveznica koja dokazuje neprekinutu prisutnost na javnoj burzi."),
                o("e2d42628", "Dodaj referencu na burzu"),
                o("jc19b4e8", "Burzovna kotacija"),
                o("fc3ee696", "Referenca na rukovoditelje"),
                o("i3e65eb4", "Službeno web-mjesto potvrđene organizacije na kojem ste navedeni na nekom rukovodećem položaju."),
                o("jd014eba", "URL s poveznicama na stranicu s imenom osobe koja podnosi zahtjev."),
                o("a96901cc", "Dodaj referencu na rukovoditelje"),
                o("cc424a22", "Interesna referenca"),
                o("ibfc1a5a", "Ne ispunjavate uvjete za potvrdu u toj kategoriji."),
                o("e1c78796", "Službene web-stranice"),
                o("ff2ee0c2", "Aktivizam"),
                o("hc61adfc", "Industrija zabave"),
                o("e404203c", "Videoigre"),
                o("d2042392", "Državne ustanove"),
                o("c365dcc6", "Ostalo"),
                o("d27beb9e", "Sport"),
                o("cc4b66b6", "Odaberite kategoriju"),
                o("b37461a4", "Odaberite vrstu računa"),
                o("b27325f6", "Autor sadržaja"),
                o("a5a6affc", "Ugledni autori digitalnog sadržaja koji sustavno objavljuju zanimljiv i originalan sadržaj."),
                o("a15326de", "Najmanje tri članka iz kvalificiranih novinskih izdanja u kojima je navedeno vaše ime."),
                o("g704a93a", "Službeno web-mjesto povezano s poznatim interesnim radom na kojem se navodite kao osoba na rukovoditeljskom položaju."),
                o("c6bd60ec", "Aktivist ili organizator"),
                o("c92fdb06", "Poznati pojedinci koji koriste X da bi pridonijeli promjenama na socioekonomskom, političkom i kulturnom području."),
                o("a18c6dfc", "Novinar"),
                o("h0b46534", "Pojedinačni novinari zaposleni u provjerenim novinarskim organizacijama ili izdavačkim kućama."),
                o("ff929fec", "Ugledna organizacija ili podružnica"),
                o("jf537894", "Ugledne organizacije i sekundarni pridruženi računi, uključujući tvrtke, robne marke i neprofitne organizacije."),
                o("d2ea204a", "Drugi pojedinac influenser"),
                o("f875ec6e", "Osobe znatnog utjecaja na platformi X i izvan nje koje ne spadaju u ostale kategorije."),
                o("i3e6aaa6", "Viši rukovoditelj ili direktor"),
                o("bbcbb9e6", "Rukovoditelji i direktori poznatih tvrtki, robnih marki i neprofitnih organizacija."),
                o("j0bc23f4", "Potvrdio sam da je račun moje organizacije već potvrđen."),
                o("aa6228de", "Tvrtka koja nudi zabavne sadržaje"),
                o("d5b3cbca", "Velike tvrtke u industriji zabave, npr. TV mreže, filmski studiji i diskografske kuće."),
                o("b5a3e590", "Pojedinačni zabavljači"),
                o("e484f794", "Utjecajni pojedinci u zabavljačkoj industriji kao što su glumci, glazbenici, redatelji, scenaristi, komičari itd."),
                o("b8d8ea64", "Organizacija za produkciju sadržaja"),
                o("ff27db3c", "Službeni računi koji proizvode zabavne sadržaje, npr. filmove, događanja/festivale, TV emisije i ostalo."),
                o("c0e57cb2", "Dodajte svoj profil autora"),
                o("f3c605b6", "Profil autora"),
                o("h042d1a6", "Profil na IMDB-u"),
                o("d2310f0c", "Profil na IMDB-u s najmanje 50 autorskih radova u produkciji."),
                o("ba04b4c2", "Dodaj profil na IMDB-u"),
                o("i9b124b6", "Vladin dužnosnik"),
                o("f84a99ee", "Glavni dužnosnici, uključujući župane, izabrane dužnosnike, imenovane ministre te veleposlanike na lokalnoj odnosno državnoj razini."),
                o("j2cb5f50", "Kandidat za dužnosnika"),
                o("j2472894", "Službeni kandidati za javne dužnosnike na lokalnoj odnosno državnoj razini."),
                o("ha44c130", "Dužnosnik u vladi ili javnoj ustanovi"),
                o("j8ae9d40", "Vodeće dužnosti u vladi i javnim ustanovama, kao i javne usluge i servisi."),
                o("ef1d6176", "Jeste li kandidat za dužnosnika na lokalnoj odnosno državnoj razini?"),
                o("f54ba6e6", "Da bismo vas razmotrili za potvrdu u toj kategoriji, morate biti aktualni kandidat za dužnosnika na lokalnoj odnosno državnoj razini"),
                o("dd85d0a0", "Jeste li dužnosnik na lokalnoj odnosno državnoj razini?"),
                o("f0058c60", "Da bismo vas razmotrili za potvrdu u toj kategoriji, morate biti aktualni dužnosnik na lokalnoj odnosno državnoj razini."),
                o("f420a712", "Da, jesam"),
                o("fb97d22c", "Ne, nisam"),
                o("e16b1cc8", "Zadovoljava li vaš profil kriterije za kandidata?"),
                o("cf2ee92e", "Kandidati za dužnosnike moraju imati javni račun na kojem se navodi i dužnost za koju se kandidiraju i poveznice na službeno web-mjesto s kampanjom."),
                o("g544885e", "Zadovoljava li vaš profil kriterije za dužnosnika u vladi odnosno javnim ustanovama?"),
                o("bd0b4542", "Vladini uredi i javne ustanove moraju imati javni račun s poveznicama na službeno web-mjesto."),
                o("i45b224c", "Zadovoljava li vaš profil kriterije za dužnosnika?"),
                o("fba1dd66", "Vladini dužnosnici moraju imati javni račun iz kojega su vidljivi i trenutni položaj u vladi i poveznice na službeno web-mjesto za tu dužnost."),
                o("e95c44de", "Da, potpun je"),
                o("fa5e15e2", "Potrebno je ažuriranje"),
                o("jdf47e8e", "Web-mjesto s kampanjom"),
                o("eeec7316", "Dodaj web-mjesto s kampanjom"),
                o("b163b654", "Vladino web-mjesto"),
                o("d2378d34", "Dodaj referencu na vladino web-mjesto"),
                o("a05b8446", "Samozaposleni novinar"),
                o("hdad12b2", "Neovisni, samozaposleni novinari s istaknutim radom u provjerenim izdavačkim kućama."),
                o("d2d7af4c", "Novinarska organizacija ili izdavačka kuća"),
                o("d83e51dc", "Tiskana i digitalna izdanja, prijenosi, kabelske, satelitske i streaming TV i radijske novinarske mreže, postaje i programi, podcasti i slični mediji."),
                o("g708cbdc", "Zadovoljava li vaš profil preduvjete za potvrdu?"),
                o("b107ee5c", "Novinarske organizacije moraju imati javni račun s poveznicom na svoje službeno web-mjesto."),
                o("e8746826", "Potvrdio sam da je račun mog poslodavca već potvrđen."),
                o("jc09b420", "Zadovoljava li vaš profil kriterije za novinare?"),
                o("gfbd7e58", "Novinari moraju imati javni račun na kojem je navedeno i njihovo ime i poveznica na službeno web-mjesto potvrđene novinarske organizacije za koju rade."),
                o("h0ad4c9e", "Referenca ili reference na službenu novinarsku organizaciju"),
                o("a6553b50", "Službeno web-mjesto novinarske izdavačke kuće ili organizacije koja zadovoljava uvjete, a na čijim ste stranicama navedeni kao novinar."),
                o("a29b2988", "Autorski članci i radovi"),
                o("ab4eae60", "Najmanje tri autorska članka ili rada u proteklih šest mjeseci u izdanjima koja zadovoljavaju kriterije."),
                o("b3fac982", "URL na kojem se nalaze poveznice na određenu stranicu na kojoj se navodi moje ime."),
                o("e26dc9e2", "Dodajte rad koji se ističe"),
                o("e164df2e", "Ispunjavaju li navedeni članci kriterij poznatosti?"),
                o("i80ff05e", "Dokaz o poznatosti dobivaju samo članci izdani u provjerenim novinarskim organizacijama i izdavačkim kućama."),
                o("cf7482ec", "Da, ispunjavaju"),
                o("fcb96cfc", "Profesionalni sportaš"),
                o("ddc7d64a", "Profesionalni sportaši, treneri, menadžeri i sportaši sudionici globalnih sportskih natjecanja (npr. Olimpijskih i Paraolimpijskih igara itd.)."),
                o("c4e0d346", "Profesionalni sportski entitet"),
                o("e3ce81fa", "Profesionalne sportske lige, momčadi i globalna sportska natjecanja (npr. Olimpijske i Paraolimpijske igre itd.)"),
                o("b2808f48", "E-sportaš"),
                o("db7b3558", "Pojedinačni računi e-sportaša povezani s potvrđenim igraćim timovima i ligama."),
                o("bbd9a912", "Potvrdio sam da je momčad, liga, događaj ili organizacija povezana s mojim računom već potvrđena."),
                o("he9c5638", "Poveznica na službeno web-mjesto globalnog sportskog natjecanja ili sportske organizacije na kojem se nalazi vaše ime."),
                o("bf06e1d6", "Službeno web-mjesto povezano s profesionalnom sportskom organizacijom na kojem ste navedeni kao profesionalni sportaš, menadžer ili trener."),
                o("e241d35e", "Najmanje tri članka potvrđene novinarske organizacije ili izdavačke kuće u kojima ste navedeni kao profesionalni sportaš, menadžer ili trener."),
                o("ad456030", "Najmanje tri članka potvrđene novinarske organizacije ili izdavačke kuće u kojima ste navedeni kao e-sportaš."),
                o("hbe2e65c", "Službeno web-mjesto povezano s nekom potvrđenom e-sportskom ligom ili događajem na kojem ste navedeni kao e-sportaš."),
                o("j3da4dea", "Trenutno ne možete zatražiti potvrdu"),
                o("af39265e", "Tvrtke, robne marke i organizacije"),
                o("bb51cd7a", "Sportovi i igre"),
                o("c044a571", "Saznajte više"),
                o("a58cd1fb", "Saznajte više"),
                o("b47b0fd1", "Saznajte više"),
                o("db25263b", "Saznajte više"),
                o("b25b02c3", "Saznajte više"),
                o("j6ef6afb", "Saznajte više"),
                o("d42d162b", "Saznajte više"),
                o("ccadfc85", "Saznajte više"),
                o("ddb47f57", "Saznajte više"),
                o("bf9e181b", "Saznajte više"),
                o("e8e39f95", "Saznajte više"),
                o("e126dd3f", "Saznajte više"),
                o("i821844f", "Saznajte više"),
                o("b0abbb17", "Saznajte više"),
                o("e7e0d88b", "Saznajte više"),
                o("i560665f", "Saznajte više");
            o("f6e774d9", "Saznajte više"),
                o("h486f755", "Saznajte više"),
                o("bab41dab", "Saznajte više"),
                o("e0ebdb29", "Saznajte više"),
                o("f8493831", "Saznajte više"),
                o("icb5913f", "Saznajte više"),
                o("af819833", "Saznajte više"),
                o("d35525b1", "Saznajte više"),
                o("cb181ed1", "Saznajte više"),
                o("f6c3d3f1", "Saznajte više"),
                o("d4588ded", "Saznajte više"),
                o("a759bff9", "Saznajte više"),
                o("c64a59f7", "Saznajte više"),
                o("c054f433", "Saznajte više"),
                o("c1b7ad51", "Saznajte više"),
                o("f7998565", "Saznajte više"),
                o("c74a47ef", "Saznajte više"),
                o("gf9899bf", "Saznajte više"),
                o("d7a9185d", "Saznaj više"),
                o("c4b205e1", "Saznajte više"),
                o("c04b4b1d", "Saznajte više"),
                o("d26ccc67", "Saznajte više"),
                o("hdb3bc85", "Saznajte više"),
                o("b6cb494f", "Saznajte više"),
                o("abc132eb", "Saznajte više"),
                o("de1b28ad", "Saznajte više"),
                o("h04c272d", "Saznajte više"),
                o("j331c659", "Saznajte više"),
                o("h02fe64f", "Saznajte više"),
                o("a7df4b85", "Saznajte više"),
                o("e9b71903", "Saznajte više"),
                o("g961011f", "Saznajte više"),
                o("d5dedb7b", "Saznajte više"),
                o("gd396551", "Saznajte više"),
                o("dccc08bf", "Saznajte više"),
                o("f22a6d0d", "Saznajte više"),
                o("i78c9fd5", "Saznajte više"),
                o("f3e333a9", "Saznajte više"),
                o("i5fee6d3", "Saznajte više"),
                o("fe7420f5", "Saznajte više"),
                o("fcfad60d", "Saznajte više"),
                o("cc35a6b9", "Saznajte više"),
                o("d9bd3823", "Saznajte više"),
                o("a67f27bd", "Saznajte više"),
                o("b8be7adb", "Saznajte više"),
                o("gd663f41", "Saznajte više"),
                o("b436b101", "Saznajte više"),
                o("j97bce4a", "Nadimak na platformi X"),
                o("acd5ca14", "Pokušajte ponovno. Korisnička imena ne sadrže posebne znakove kao što su @, $, i #."),
                o("bbef41c2", "Pregledajte službenu adresu e-pošte povezanu sa zahtjevom za potvrdu na platformi X."),
                o("be03ecca", "Adresa e-pošte"),
                o("c69a40de", "Nemate potvrđenu adresu e-pošte."),
                o("c83a1662", "Nemate potvrđenu adresu e-pošte koja zadovoljava naše kriterije."),
                o("e1e878ee", "Postavke"),
                o("b9635182", "Postavke"),
                o("j163be32", "Započni zahtjev"),
                o("gaf821c8", "Zahtjev za provjeru autentičnosti"),
                o("e1ac0f9b", "Saznajte više"),
                o("h2d4ba56", "Provjera vašeg identifikacijskog dokumenta..."),
                o("i2051842", "Provjeravamo zadovoljava li vaš identifikacijski dokument naše standarde. Može potrajati 30 sekundi."),
                o("fc2a5c92", "Došlo je do pogreške"),
                o("jf4b6f70", "Pri prijenosu vašeg identifikacijskog dokumenta dogodila se pogreška. Pokušajte ga ponovno prenijeti."),
                o("d338f53e", "Pokušajte ponovno"),
                o("e43672a0", "Moramo prikupiti neke podatke o vašem službenom osobnom dokumentu."),
                o("b246aa5e", "Država u kojoj su dokumenti izdani"),
                o("d6fb5878", "Odaberite državu"),
                o("b72f97cc", "Vrsta osobnog dokumenta"),
                o("b2ab6008", "Odaberite vrstu osobnog dokumenta"),
                o("h9270b1c", "Pretražite države"),
                o("ff1d68f8", "Prenesite fotografiju osobnog dokumenta"),
                o("bdada5a6", "Prednja strana"),
                o("edfed0f6", "Prenesite prednju stranu osobnog dokumenta"),
                o("def5015d", function (a) {
                    return "Natrag" + a.back_of_document;
                }),
                o("b09aade6", "Prenesite poleđinu osobnog dokumenta"),
                o("b40ed190", "Dokument"),
                o("c6650b56", "Prenesi dokument"),
                o("d171ed16", "Pomažu nam pouzdane treće strane. One provjeravaju autentičnost vašeg identifikacijskog dokumenta te nam šalju ograničene podatke i platformu, omogućujući nam da vam dodijelimo status potvrđenog računa."),
                o("d20f76cb", "Saznajte više"),
                o("b8deb156", "pravilima o privatnosti"),
                o("b9960f32", "Dodaj fotografije ili videozapis"),
                o("gd80afba", "Uređivanje multimedijskih sadržaja"),
                o("j322caee", "Označite osjetljive medijske sadržaje"),
                o("abd845fe", "Uređivanje"),
                o("df1b0708", "Reproduciraj taj GIF"),
                o("cd959e5c", "Ukloni medijski sadržaj"),
                o("add55c98", "Medijski sadržaj"),
                o("f350cf46", "Povucite i ispustite medijski sadržaj"),
                o("gff1f69e", "Učitavanje slike"),
                o("a91bb144", "Pošalji"),
                o("affce770", "Mi i naše pouzdane treće strane koristit ćemo podatke vezane uz vaš račun i sve ostale podatke koje nam pošaljete radi provjere autentičnosti i ispunjavanja uvjeta za potvrdu."),
                o("i0864918", "Kategorija"),
                o("c7942074", "Vrsta računa"),
                o("b8121daa", "Reference za potvrdu poznatosti"),
                o("d247ca70", "U nastavku pogledajte detalje zahtjeva za potvrdu. Nakon potvrde odaberite Pošalji."),
                o("b51afbb2", "Način provjere autentičnosti"),
                o("cc87b01c", "Pregled i slanje"),
                o("ec6801cc", "Zahtjev je poslan!"),
                o("i6ef95ec", "upitnik"),
                o("j94e995e", "Vaš je zadnji zahtjev odbijen. Da biste poslali novi zahtjev, mora proći 30 dana od tog datuma."),
                o("da458d6c", "U proteklih 30 dana poslali ste zahtjev za potvrdom koji smo odbacili. Pokušajte ponovno."),
                o("j4ed9f0e", "Poslali ste zahtjev za potvrdu i mi ćemo vam se javiti čim donesemo odluku."),
                o("b1ade780", "Račun vam je sasvim nov. Pričekajte 7 dana pa pokušajte ponovno."),
                o("aab67626", "Vaš se zahtjev za potvrdu pregledava"),
                o("d3c1e25e", "Ne, niste sanjali. Zaista ste potvrđeni."),
                o("a8b4500e", "Pravila"),
                o("ef1b5cbc", "Odaberite obavijesti koje želite i koje ne želite vidjeti."),
                o("aaafffda", "Onemogućene obavijesti"),
                o("afdf29b8", "Filtar za kvalitetu"),
                o("da19d878", "Filtrirajte sadržaj kao što su duplicirane i automatizirane objave. To neće utjecati na obavijesti s računa koje pratite ili s kojima ste nedavno bili u interakciji."),
                o("i2209530", "Spremi"),
                o("da867c58", "Odaberite postavke prema vrsti obavijesti."),
                o("a2197726", "Upravljajte sigurnošću svog računa."),
                o("i36dcc3e", "Zaštitite račun od neovlaštenog pristupa zahtjevom za još jednu metodu provjere autentičnosti, uz lozinku za X. Možete odabrati SMS poruku, aplikaciju za provjeru autentičnosti ili sigurnosni ključ."),
                o("ead60eb8", "Dodatna zaštita putem lozinke"),
                o("gfaf9a4a", "Zaštita od ponovnog postavljanja lozinke"),
                o("h3cc8462", "Radi dodatne zaštite, prilikom ponovnog postavljanja lozinke za X morat ćete potvrditi adresu e-pošte ili telefonski broj."),
                o("b4bbdeb4", "Pristupni ključ"),
                o("aeb7dcdc", "Omogućite pristupne ključeve za dodatnu zaštitu koja može biti povezana s vašim biometrijskim podacima."),
                o("dc096238", "Prenesite neki odobreni dokaz identifikacije kako biste potvrdili autentičnost svoga računa. Vaši će se podaci upotrijebiti samo za provjeru identiteta i njima će se rukovati na siguran i zaštićen način."),
                o("a999cb72", "Spremanje promjena računa"),
                o("dec3c9b8", "Lozinka"),
                o("b929aa74", "Ponovno unesite lozinku za X da biste spremili promjene računa."),
                o("d1091f50", "Zaboravili ste lozinku?"),
                o("d97c07be", "Upravljanje pretplatama autora sadržaja"),
                o("efa291da", "Pregledajte svoje pretplate na autore sadržaja u nastavku i upravljajte njima putem usluge Stripe. Svim aktivnim pretplatama koje pokrenete na uređaju sa sustavom iOS ili Android možete upravljati putem aplikacije."),
                o("j7f5c6aa", "Još nemate pretplata"),
                o("ef4602ec", "Dogodila se pogreška. Pokušajte ponovno poslije."),
                o("b02df748", "Upravljajte sigurnošću računa te pratite njegovo korištenje, uključujući aplikacije koje ste povezali s računom."),
                o("g2841de4", "Pogledajte podatke o vremenu prijave na račun i u aplikacije koje ste povezali s računom."),
                o("hf45cca6", "Upravljajte računima za Google ili Apple koji su povezani s platformom X radi prijave."),
                o("a310511c", "Upravljajte dijeljenim računima."),
                o("jc02ae68", "Povezane aplikacije"),
                o("dd82312a", "Sesije"),
                o("e5e8a89a", "Učitavanje aplikacija"),
                o("hfa9a2c8", "Upravljajte povezanim aplikacijama u trenu"),
                o("dd1b86f9", function (a) {
                    return "autor: " + a.name;
                }),
                o("cf461930", "Aplikacije treće strane kojima dopustite da pristupe vašem računu za X prikazat će se ovdje."),
                o("b63b0b1d", "Saznajte više"),
                o("c2cb5560", "Trenutna aktivna sesija"),
                o("bca43fd0", "Odjava iz ostalih sesija"),
                o("ha6df2ca", "Sesije su uređaji koje koristite ili koje ste koristili na računu za X. To su sesije na koje vam je uređaj u tom trenutku prijavljen. Iz svake se sesije možete odjaviti."),
                o("b72d2904", "Na ovom ste uređaju prijavljeni na taj račun za X, a trenutačno ga ne koristite."),
                o("b850cbd0", "Na ovim ste uređajima prijavljeni na te račune, a trenutno ih ne koristite. "),
                o("cf3e3164", "Odjava iz svih ostalih sesija"),
                o("f810f27a", "Želite li prekinuti ostale sesije?"),
                o("gbb5cec5", function (a) {
                    return "Ako se odjavite, zatvorit ćete sljedeći broj aktivnih sesija na platformi X: " + a.num + ". S trenutnom se sesijom ništa neće dogoditi.";
                }),
                o("fcbd4904", "Time ćete završiti aktivnu sesiju na platformi X."),
                o("ab78d946", "Time ćete prekinuti i ostale aktivne sesije na platformi X te ćete se na tim uređajima morati ponovno prijaviti da biste započeli nove."),
                o("e186a3d6", function (a) {
                    return "" + a.learnMoreLabel;
                }),
                o("ed5ab16a", "Trenutno aktivno"),
                o("c9bc33fa", "Uređaji"),
                o("f95ed3e6", "Trenutni uređaj"),
                o("a787669a", "Registracije drugih uređaja"),
                o("gbefe730", "Registrirali ste se za šifrirane privatne poruke na tim drugim uređajima."),
                o("d7a9796e", "Učitavanje uređaja"),
                o("b5635e86", "Registrirajte taj uređaj"),
                o("bb4a95dc", "Želite li registrirati uređaj?"),
                o("a9538040", "Registriranje uređaja omogućit će vam započinjanje novih šifriranih razgovora s drugim registriranim korisnicima."),
                o("hd173c7a", "Registriraj"),
                o("hf4312a4", "Uređaj je registriran."),
                o("h7797d18", "Registriran"),
                o("hc48a042", "Poništi registraciju tog uređaja"),
                o("d5bafb20", "Želite li poništiti registraciju tog uređaja?"),
                o("i12dee70", "Poništavanje registracije uređaja znači da više nećete imati pristup šifriranim porukama na njemu."),
                o("d4b9db26", "Poništi registraciju"),
                o("c18b1b34", "Datum i vrijeme registracije"),
                o("e7c9d60a", "Poništena je registracija odabranog uređaja."),
                o("cd14c8fe", "Učitavanje informacija o uređaju"),
                o("j9db22f4", "Ne možemo pronaći taj uređaj"),
                o("c477d710", "Upravljajte podacima koje vidite i dijelite na platformi X."),
                o("b06f5d36", "Vaša aktivnost na platformi X"),
                o("fd807e78", "Ciljna skupina, medijski sadržaj i označavanje"),
                o("a9ff473c", "Upravljajte podacima koje drugi korisnici platforme X mogu vidjeti."),
                o("d0484606", "Upravljajte podacima povezanim sa svojim objavama."),
                o("c4afe0e6", "Odredite što će se na platformi X prikazati na temelju preferenci kao što su teme i interesi"),
                o("ab125232", "Upravljajte računima, tekstom i obavijestima koje ste onemogućili ili blokirali."),
                o("cc950d94", "Odredite tko vam može slati privatne poruke."),
                o("fe37f854", "Upravljajte vidljivošću svoje aktivnosti slušanja u Prostoru u odnosu na druge korisnike"),
                o("ab987f3c", "Upravljajte postavkama otkrivanja i uvezenim kontaktima."),
                o("db5fabb0", "Razmjena podataka i aktivnost izvan platforme X"),
                o("i83cab8a", "Dijeljenje podataka i personalizacija"),
                o("e338a794", "Upravljajte prikazom oglasa na platformi X."),
                o("c05e8024", "Upravljajte upotrebom kolačića na platformi X."),
                o("d29d59d0", "Upravljajte načinom na koji X upotrebljava vašu mrežnu aktivnost izvan platforme X, kao što su web-mjesta koja posjećujete, radi personalizacije iskustva."),
                o("c981a36c", "Omogućite platformi X personalizaciju vašeg sučelja na temelju izvedene aktivnosti, npr. aktivnosti na uređajima koje niste upotrebljavali za prijavu na X."),
                o("eb0cc786", "Dopustite dijeljenje dodatnih podataka s poslovnim partnerima platforme X."),
                o("dd533318", "Upravljajte podacima o lokaciji koje X upotrebljava za personalizaciju sučelja."),
                o("bd0646a0", "Saznajte više o zaštiti privatnosti na platformi X"),
                o("a607862a", "Pravila o privatnosti"),
                o("g5925628", "Javite nam se"),
                o("dd6012f8", "Centar za zaštitu privatnosti"),
                o("jdceda60", "Odgovori"),
                o("f644b748", "Upravljajte korisnicima koji mogu odgovarati na vaše odgovore i filtriranim odgovorima."),
                o("ff4b3818", "Grok i suradnici trećih strana"),
                o("i586f3e0", "Dopustite da se vaši javni podaci, kao i vaše interakcije, unosi i rezultati značajke Grok i usluge xAI upotrebljavaju u svrhe obuke i finog ugođavanja"),
                o("d8492604", "Kada to odaberete, vaše objave i drugi podaci o računu bit će vidljivi samo osobama koje vas prate."),
                o("if050fae", "Zaštitite svoje videozapise"),
                o("b7ed5f6e", "Ako to odaberete, videozapisi u vašim objavama neće se moći preuzimati prema zadanim postavkama. Ova se postavka primjenjuje na buduće objave i nije retroaktivna"),
                o("dbb51952", "Želite li zaštititi svoje objave?"),
                o("de735de6", "Moći će ih vidjeti samo osobe koje vas prate na platformi X."),
                o("c5d4192a", "Zaštiti"),
                o("d9ddba70", "Zajednice su javne, stoga ćete zaštićenim računom sakriti prethodne objave. Dok vam račun opet ne bude javan, nećete moći ni objavljivati u toj Zajednici."),
                o("f527b322", "Zaštiti moj račun"),
                o("d165c992", "Svi vas mogu označiti"),
                o("ea339390", "Mogu vas označiti samo osobe koje pratite"),
                o("e3a761ee", "Isključeno"),
                o("a61ed23a", "Označite medijske sadržaje koje objavljujete kao materijal koji može biti osjetljiv"),
                o("ae27c454", "Kada to omogućite, slike i videozapisi koje objavljujete u objavama bit će označeni kao osjetljivi za korisnike koji ne žele vidjeti osjetljiv sadržaj."),
                o("fc1d217c", "Prikazuj medije koji bi mogli sadržavati osjetljiv sadržaj"),
                o("j018f2a2", "Postavke kartice Istraživanje"),
                o("h1ef00dc", "Postavke pretraživanja"),
                o("b05b9398", "Kada se ta postavka omogući, X može personalizirati sadržaj Za vas ovisno o vašoj aktivnosti na platformi X."),
                o("a3c1324c", "Prikaži preporučeni sadržaj na vremenskoj crti Za vas"),
                o("ee4592ca", "Nitko"),
                o("da813d22", "Provjereni korisnici"),
                o("baffe39a", "Svi"),
                o("b3d8566e", "Filtriranje poruka loše kvalitete"),
                o("cfda8c44", "Sakrijte zahtjeve za poruke za koje se posumnja da imaju neželjen sadržaj ili da su loše kvalitete. Oni će se poslati u poseban pretinac ulazne pošte pri dnu zahtjeva za poruke. Ako želite, uvijek im možete pristupiti."),
                o("f4c91f40", "Omogući poruke od pretplatnika"),
                o("bf0c4336", "Vaši će vam pretplatnici uvijek moći slati poruke neovisno o drugim postavkama poruka."),
                o("e6c411d8", "Filtririraj eksplicitni medijski sadržaj"),
                o("g558101a", "Omogućite prikaz upozorenja preko poruka za koje se posumnja da sadrže eksplicitne medijske sadržaje (npr. golotinju, seksualni sadržaj ili nasilje). Ako želite, taj medijski sadržaj uvijek možete vidjeti."),
                o("d9172542", "Pokaži potvrde o pročitanim porukama"),
                o("bd557506", "Omogućite osobama s kojima razmjenjujete poruke da znaju kada ste pročitali njihove poruke. Potvrde o čitanju ne prikazuju se na zahtjevima za poruke."),
                o("f29080d0", "Omogući zahtjeve za poruke od sljedećih korisnika:"),
                o("j0adcc2d", "Saznajte više"),
                o("ib3357a6", "Personalizirani oglasi"),
                o("f2f9628e", "Svi oglasi na platformi X koji će vam se prikazivati bit će utemeljeni na vašoj aktivnosti na platformi X. Kada omogućite tu postavku, X može dodatno personalizirati oglase na platformi X i izvan nje kombiniranjem vaše aktivnosti na platformi X, drugih aktivnosti na internetu i informacija naših partnera."),
                o("b5fe50fc", "Kategorije oglasa"),
                o("c31a2ea6", "Omogućivanjem ovih postavki ispunjavate uvjete za prikaz oglasa u ovim kategorijama. Isključivanjem odaberite prikaz manje oglasa o ovim kategorijama."),
                o("if996630", "Kockanje"),
                o("a9ed7774", "Omogućite upotrebu web-mjesta na kojima se pojavljuje sadržaj s platforme X"),
                o("e2d61838", "Ta postavka omogućuje platformi X praćenje posjeta drugih web-mjesta na kojima se prikazuje sadržaj s platforme X, npr. na ugrađenim vremenskim crtama. Zahvaljujući tim podacima, X vam je korisniji, npr. nudi personalizirano okruženje. Povijest pregledavanja u web-pregledniku ne sprema se s vašim imenom, adresom e-pošte ni telefonskim brojem."),
                o("c966aaf4", "Posjeti web-stranicama u određenim se državama ne spremaju ni ne koriste."),
                o("e8313b32", "Jeste li sigurni? Ako isključite tu postavku, nećete je moći ponovno uključiti dok se nalazite u ovoj državi."),
                o("f1d46fd6", "Da, siguran/na sam"),
                o("f6c8ccc8", "Personalizacija na temelju izvedenog identiteta"),
                o("ed012c88", "X će uvijek personalizirati sučelje na temelju informacija koje nam pošaljete, kao i uređaja na kojima ste prijavljeni. Kada je ta postavka omogućena, X može personalizirati sadržaj i na temelju zaključaka o vašem identitetu, kao što su uređaji i preglednici koje niste koristili za prijavu na X ili adrese e-pošte i telefonski brojevi slični onima povezanima s računom za X."),
                o("d3c20d80", "Omogućite razmjenu dodatnih podataka s poslovnim partnerima"),
                o("f1c0d09c", "Radi razvoja i poboljšanja svojih proizvoda X uvijek razmjenjuje podatke s poslovnim partnerima. Kada omogućite tu opciju, X razmjenjuje dodatne podatke s onim partnerima koji su mu podrška u poslovanju, uključujući marketinške aktivnosti koje X provodi na drugim web-mjestima i u aplikacijama koje su za vas najrelevantnije."),
                o("dc20d918", "Personalizacija na temelju mjesta koja ste posjetili"),
                o("af7d89e6", "X uvijek upotrebljava neke podatke, npr. mjesto prijave i trenutačnu lokaciju, da bi vam prikazivao relevantniji sadržaj. Kada omogućite tu postavku, X može personalizirati vaše sučelje na temelju drugih mjesta koja ste posjetili."),
                o("f2b23062", "Pristupačnost, prikaz i jezici"),
                o("fa76d7dc", "Upravljajte načinom prikaza sadržaja na platformi X."),
                o("j7a15010", "Upravljajte aspektima sučelja platforme X, kao što je ograničenje kontrasta boje i pokret."),
                o("a257ecae", "Upravljajte veličinom fonta, bojom i pozadinom. Te postavke utječu na sve račune za X u tom pregledniku."),
                o("jc3fa0e2", "Odredite koji se jezici koriste za personalizaciju sučelja na platformi X."),
                o("cc2973a8", "Ograničite način na koji X upotrebljava vaše određene mrežne podatke na ovom uređaju."),
                o("h54e6138", "Tipkovni prečaci"),
                o("a4b69cbc", "Jezik prikaza"),
                o("c856bd00", "Odaberite željeni jezik za naslove, gumbe i drugi tekst na platformi X."),
                o("cab61d58", "Odabir dodatnih jezika"),
                o("dd93fafa", "Odaberite dodatne jezike za sadržaj koji želite vidjeti na platformi X."),
                o("bca1de4a", "Ostali jezici koje govorite"),
                o("c3aa76c4", "Jezici koje možda razumijete"),
                o("g099069c", "Upravljajte jezicima koje je X izveo na temelju vaše aktivnosti, kao što su računi koje pratite i objave u kojima sudjelujete."),
                o("cf9ce876", "Jezici aplikacije i objava"),
                o("d4372cf4", "English (US), 中文(简体), Español"),
                o("f8e46b90", "Ovo su računi za društvene mreže koje ste povezali s računom za X radi prijave. Pristup možete onemogućiti ovdje."),
                o("d84ed6b2", "Prekini vezu"),
                o("i51130d4", "Google"),
                o("e28901f2", "Apple"),
                o("cf8560be", "Povezani ste"),
                o("ad31b476", "Upravljajte automatiziranim računom."),
                o("a2981062", "Račun za upravljanje"),
                o("aff4540e", "Promjena računa za upravljanje"),
                o("b8b9d100", "Postavljanje automatskih postavki računa"),
                o("e0bc51f6", "Isključivanje automatskih postavki računa"),
                o("b92190c2", "Veza s računom za upravljanje je uspostavljena"),
                o("fb03b39a", "Veza s računom za upravljanje je prekinuta"),
                o("bd51ddfa", "Trenutačno ne možemo prekinuti vezu s vašim računom za upravljanje. Pokušajte ponovno poslije."),
                o("e91c15f6", "Želite li prekinuti vezu s računom za upravljanje?"),
                o("df035b80", "Ako prekinete vezu s računom za upravljanje, automatizirani račun izgubit će oznaku."),
                o("bd12cf34", "Da, prekini vezu"),
                o("f79acef3", "Saznajte više"),
                o("a57a341c", "Način za uštedu podataka"),
                o("ab6505a8", "Ako tako odaberete, X će koristiti manje mrežnih podataka."),
                o("a5d4fda0", "Došlo je do pogreške, ali ne brinite – pokušajmo još jednom."),
                o("g1888dc2", "Nikad"),
                o("f724d1aa", "Samo na Wi-Fi mreži"),
                o("cf6472c2", "Na mobilnoj ili Wi-Fi mreži"),
                o("b2ed92c4", "Zahtjev za arhivu"),
                o("ce5d2c46", "Trenutno nedostupno"),
                o("bed6a87c", "Veza na vaše podatke za X je istekla"),
                o("b24b4768", "Idite na Moji podaci za X"),
                o("a0c3f812", "Da biste dobili ažuriranu verziju, pošaljite novi zahtjev."),
                o("eea30bb5", function (a) {
                    return "Datum generiranja: " + a.date;
                }),
                o("f2cde471", function (a) {
                    return "Datum isteka: " + a.date;
                }),
                o("b7ce9dbf", function (a) {
                    return "Procijenjena veličina: " + a.size;
                }),
                o("d3de4c97", function (a) {
                    return "Podaci za X (" + a.currentIndex + " od " + a.count + ")";
                }),
                o("fc5bfd96", "Započnite s korištenjem"),
                o("gee8110e", "Preuzimanje arhive"),
                o("c326f156", "Arhiva je preuzeta"),
                o("c9fe9b56", "Preuzimanje arhive uskoro će započeti"),
                o("j54b679b", function (a) {
                    return "To će se otvoriti u nekom drugom prozoru i može malo potrajati. Kada se zadatak završi, preuzimanje će se nalaziti u ZIP datoteci veličine " + a.size + ".";
                }),
                o("ac63840d", function (a) {
                    return a.size + " KB";
                }),
                o("bcd9b0ed", function (a) {
                    return a.size + " MB";
                }),
                o("ce494bb4", "Veličina fonta"),
                o("c783d45e", "Boja"),
                o("h306a358", "Pozadina"),
                o("d8680056", "Vrlo malo"),
                o("j59f0b94", "Zadano"),
                o("b81aaad8", "Veliko"),
                o("c7044880", "Vrlo veliko"),
                o("e46dffa0", "Veličina teksta"),
                o("ce8a8116", "Mogućnosti pozadine"),
                o("d3d48f3a", "Svijetlo"),
                o("i76f67ee", "Zatamnjeno"),
                o("c8f85960", "Sasvim tamno"),
                o("aefc5b20", "Mogućnosti boja"),
                o("a52d0fde", "Plava"),
                o("d818cdd6", "Žuta"),
                o("fee1cd64", "Ružičasta"),
                o("cbed7fb2", "Ljubičasta"),
                o("g697ec02", "Narančasta"),
                o("a7c2204a", "Zelena"),
                o("gde8fdd7", function (a) {
                    return "Platformu X čine objave – kratke poruke poput ove. Mogu uključivati fotografije, videozapise, veze, tekst, oznake ljestvi i spominjanja kao što je @" + a.mention + ".";
                }),
                o("f277e94a", "Prikaz"),
                o("ee79367b", function (a) {
                    return "Razina " + a.conversationTreeDepth + ":";
                }),
                o("ec6907ba", "Oglas"),
                o("d9587114", "Pogledajte najnoviju objavu"),
                o("b7b86c3c", "Otvara novu verziju te objave"),
                o("a407814e", "Zadnja izmjena"),
                o("i46ee3f0", "Ovo je najnovija verzija te objave."),
                o("e18cb87c", "Objasnite ovu objavu"),
                o("ffe16626", "Uključen je filtar za odgovore."),
                o("jc81f6a7", function (a) {
                    return a.count + " prikaz" + n(a.count, "a", "", "a");
                }),
                o("g521abc6", "Grok, analiziraj!"),
                o("a09331e0", "Povezani članci"),
                o("e3eceda6", "Grokove radnje"),
                o("a653f08f", function (a) {
                    return "Pročitajte " + a.replyCount + " odgovor/a";
                }),
                o("dc0c8266", "Pitajte Groka"),
                o("i7ac410e", "Prikaži izvorno"),
                o("c67f09e8", "Prikaži prijevod"),
                o("f396c105", function (a) {
                    return "" + a.displayCount;
                }),
                o("aa037e65", function (a) {
                    return "prikaz" + n(a.count, "a", "", "a");
                }),
                o("b8f3500a", "Prikaži nit razgovora u alatu za čitanje"),
                o("fc7db594", "Sažetak profila"),
                o("c3f04d9c", "Razmišljam"),
                o("cbdddb0a", "Završeno"),
                o("b0d1e205", function (a) {
                    return 'Traži se **"' + a.query + '"**';
                }),
                o("acb9b845", function (a) {
                    return "Pregledava se " + a.url + ' za **"' + a.query + '"**';
                }),
                o("ef261d8d", function (a) {
                    return "Pretraživanje objava korisnika @" + a.username;
                }),
                o("bec7eb11", function (a) {
                    return "Pretraživanje objava korisnika @" + a.username + " za upit **„" + a.query + "”**";
                }),
                o("ead81122", "Nešto nije u redu. Osvježite za ponovno povezivanje ili pokušajte ponovno."),
                o("f808a13a", "Prekoračeno je ograničenje brzine. Pričekajte nekoliko minuta pa pokušajte ponovno."),
                o("e0481e5a", "Grok trenutno nije podržan u vašoj državi."),
                o("bc0a5b5a", "Grok je trenutno nedostupan, vratite se kasnije."),
                o("ef674976", "Nemate ovlaštenje za upotrebu te usluge."),
                o("c74e87e0", "Datoteka je prevelika. Odaberite manju datoteku."),
                o("bea50a2a", "Format datoteke nije podržan."),
                o("j77292b7", function (a) {
                    return "Odaberite najviše " + a.count + " datotek" + n(a.count, "e", "u", "a");
                }),
                o("d4d35bea", "Prevođenje..."),
                o("he9c9634", "Nije moguće dohvatiti prijevod"),
                o("j2198c98", "Sakrij prevedenu objavu"),
                o("i73a7d48", "Prevedeno pomoću Googlea"),
                o("eeadb767", function (a) {
                    return "Prevedeno pomoću Googlea sa sljedećeg jezika: " + a.originLanguage;
                }),
                o("be9b9fb8", "Preveo Grok"),
                o("d9c6f69d", function (a) {
                    return "Preveo Grok s jezika " + a.originLanguage;
                }),
                o("dc445f82", "Preveo Papago"),
                o("he9803d3", function (a) {
                    return "Preveo Papago s jezika: " + a.originLanguage;
                }),
                o("f8264fc0", "Prevela platforma X"),
                o("caa5ba3d", function (a) {
                    return "S jezika " + a.originLanguage + " prevela platforma X";
                }),
                o("e0f81ff3", "Prijevod:"),
                o("j2862695", function (a) {
                    return "Translated from " + a.originLanguage + " by";
                }),
                o("b7cb4fab", "Prevedeno pomoću servisa "),
                o("cbc8fed4", "Je li taj prijevod točan? Pošaljite nam povratne informacije kako bismo se mogli poboljšati:"),
                o("d56779a2", "lako razumljivo"),
                o("b6fe8a56", "zbunjujuće ili nejasno"),
                o("a66d80d0", "Prevedi objavu"),
                o("d4c339b9", function (a) {
                    return "Objava korisnika/ce " + a.fullName + " (@" + a.screenName + ")";
                }),
                o("db0cb64f", function (a) {
                    return a.fullName + " (@" + a.screenName + ") objavio/la je:\n" + a.tweet;
                }),
                o("h6f99ac4", "Dodano u vaše knjižne oznake"),
                o("g1c463f6", "Uklonjeno iz knjižnih oznaka"),
                o("a2e7377f", function (a) {
                    return "Uklonjeno iz mape " + a.bookmarkFolderName;
                }),
                o("i47ad24c", "Samo tako nastavite! Što više objava označite sa „sviđa mi se”, to će vaša vremenska crta biti bolja."),
                o("def4a37c", "Bravo! Vaša se vremenska crta poboljšava. Što više budete upotrebljavali oznake „sviđa mi se”, to će biti bolja vaša vremenska crta – nastavite označivati stvari koje vam se sviđaju sa „sviđa mi se”."),
                o("bcab06d2", "Objava je označena sa „sviđa mi se”"),
                o("i5efe23e", "Poništena je veza na objavu"),
                o("f5d17674", "Objava je proslijeđena"),
                o("d714acfa", "Poništeno je prosljeđivanje objave"),
                o("b18dff26", "Tu proslijeđenu objavu mogu vidjeti samo pretplatnici"),
                o("c2453318", "Dodaj u mapu"),
                o("f88553c8", "Kopirano u međuspremnik"),
                o("b5b36724", "Želite li umjesto toga odgovoriti?"),
                o("gce00a2a", "Želite li umjesto toga proslijediti objavu?"),
                o("g271f120", "Skica objave bit će odbačena prije nego uspijete odgovoriti."),
                o("gad04d1a", "Skica objave bit će odbačena prije nego uspijete citirati."),
                o("ibd021f2", "Želite li taj članak najprije pročitati?"),
                o("bbef69c4", "Želite podijeliti članak koji niste otvorili na platformi X."),
                o("g5092766", "Pročitajte članak"),
                o("a2d5c006", "Hvala što ste kliknuli vezu"),
                o("g37bb2d0", "Otvaranjem veza prije nego što ih podijelite potičete informiranu raspravu."),
                o("gc45a90a", "Proširi taj upit"),
                o("g7135e44", "Neka X bude mjesto za pouzdane informacije. Prije nego što tu objavu označite sa „sviđa mi se”, dobro se informirajte."),
                o("h9b6d468", "Neka X bude mjesto za pouzdane informacije. Prije nego što tu objavu označite sa „sviđa mi se”, dobro se informirajte."),
                o("af5cd00e", "Saznajte više"),
                o("e29c651e", "Hvala što se informirate"),
                o("ef504d80", "U knjižne oznake još ne možete dodati objave zaštićenih računa."),
                o("cef96d5a", "Objava je već dodana u vaše knjižne oznake"),
                o("b2542f56", "Došlo je do pogreške. Pokušajte ponovno dodati tu objavu u knjižne oznake za koju minutu."),
                o("fe3b9942", "Na zahtjev korisnika blokirano vam je označavanje njegovih objava oznakom „sviđa mi se”."),
                o("c2a6dc5c", "Došlo je do pogreške. Pokušajte ponovno označiti objavu oznakom „sviđa mi se” za koju minutu."),
                o("b57f01b8", "Objave zaštićenih korisnika koje ne pratite ne možete označiti oznakom „sviđa mi se”."),
                o("ba0b3cc0", "Na zahtjev korisnika blokirano vam je prosljeđivanje njegovih objava."),
                o("h32b1ac4", "Došlo je do pogreške. Pokušajte ponovno proslijediti objavu za koju minutu."),
                o("e50cea9e", "Proslijeđivanje objave nije dopušteno za tu objavu."),
                o("d8e56f40", "Žao nam je! Premašili ste ograničenje objava. Sutra ponovno pokušajte proslijediti objavu"),
                o("i14d7a46", "Došlo je do pogreške. Pokušajte ponovno ukloniti tu objavu iz knjižnih oznaka za koju minutu."),
                o("d4ebfeb0", 'Pokušajte ponovno ukloniti oznaku "sviđa mi se" s objave za minutu.'),
                o("e639775e", "Prosljeđivanje tweeta ponovno pokušajte poništiti za minutu."),
                o("fcad707a", "Na tu smo objavu stavili upozorenje zbog mogućeg osjetljivog sadržaja."),
                o("f1824804", "Žalba na ovo upozorenje"),
                o("f755f710", "U redu"),
                o("ced4abbe", "Pogledajte razgovor"),
                o("d00e1d2a", "Uključivanje u Zajednicu"),
                o("e6057014", "Zatraži uključenje"),
                o("ba352986", "Ne možete odgovoriti...još"),
                o("d09e76d8", "Zajednice su javne pa možete čitati objave, no za sudjelovanje se morate pridružiti."),
                o("cfa1f802", "Istražite Zajednicu"),
                o("af27a0f8", "Uklonjeni ste iz ove Zajednice"),
                o("id089506", "Obratite se moderatorima Zajednice da bi vas ponovno vratili."),
                o("cac4e916", "Ta je objava skrivena"),
                o("cb18be32", "To ne možete...još"),
                o("dbb5fd8e", "Objave u krugu ne mogu se proslijediti"),
                o("ae2c8a1e", "Zašto na to ne možete odgovoriti?"),
                o("afe7ba26", "Zašto to ne možete označiti oznakom „sviđa mi se”?"),
                o("df9e2356", "Zašto ne možete to dodati u knjižne oznake?"),
                o("jead3bc2", "Zašto to ne možete podijeliti?"),
                o("h2a668b8", "Zašto ne možete vidjeti analitičke podatke o objavi?"),
                o("bd85267e", "Zašto ne možete proslijediti tu objavu?"),
                o("dcc05a7e", "Prikaza"),
                o("e213fada", "Broj prikaza nije dostupan za tu objavu."),
                o("g0954ea6", "Mogu je vidjeti samo autor objave i moderatorski tim Zajednice, a sudjelovanje je onemogućeno."),
                o("e7969518", "Zajednice su javne pa objave možete čitati, ali sudjelovanje je trenutačno moguće samo onima s pozivnicom."),
                o("g2dc874a", "Zajednice su javne pa objave možete čitati, no samo članovi mogu stupati u interakciju s njima."),
                o("g562676f", "Saznajte više"),
                o("ee574c37", "Saznajte više"),
                o("de2d83d6", "Spremi u mapu s knjižnim oznakama"),
                o("f14df406", "Kopiraj vezu na oglas"),
                o("e05c00b4", "Kopiraj vezu"),
                o("f61c4bb0", "Pošalji u privatnoj poruci"),
                o("id35970e", "Objavi videozapis"),
                o("ff9348b8", "Podijeli oglas putem..."),
                o("d03241f8", "Podijelite objavu putem..."),
                o("j08dd2d4", "Uklanjanje iz knjižnih oznaka"),
                o("b7fde1ea", "Uklanjanje iz mape"),
                o("d9a2bd78", "Preuzmi videozapis"),
                o("fbfab656", "Podijeli u prostor"),
                o("e668112c", "Objava je podijeljena s Prostorom"),
                o("g5775e46", "Prikaži citate"),
                o("bb192c6b", function (a) {
                    return "" + a.displayCount;
                }),
                o("f23d99b0", function (a) {
                    return "Knjižn" + n(a.count, "e oznake", "a oznaka", "ih oznaka");
                }),
                o("e8866a55", function (a) {
                    return "" + a.displayCount;
                }),
                o("eb3abe45", function (a) {
                    return "oznak" + n(a.count, "e", "a", "a") + " „sviđa mi se”";
                }),
                o("eff958fb", function (a) {
                    return "" + a.displayCount;
                }),
                o("i5a8c515", function (a) {
                    return "citat" + n(a.count, "a", "", "a");
                }),
                o("dd77f9fb", function (a) {
                    return "" + a.displayCount;
                }),
                o("a755b81b", function (a) {
                    return "Proslije" + n(a.count, "đene objave", "di objavu", "đene objave");
                }),
                o("e9f1fbcc", "Ovdje nema ničega. Zasad."),
                o("a3b80be6", "Vratite se kasnije da biste pogledali objave o tome."),
                o("d93b360a", "Ovaj je stupac očišćen, više će se objava pojaviti iznad kada se izrade."),
                o("d6e2f9be", "Učitavanje vremenske crte"),
                o("afb4c24a", "Nema stavki"),
                o("e5b0063d", function (a) {
                    return "Vremenska crta: " + a.title;
                }),
                o("ib65b1c6", "Registracija putem Applea"),
                o("f55cebb8", "Prijava putem Applea"),
                o("dcc304d6", "Nastavi uz Apple"),
                o("e0870f26", "Registracija putem Googlea"),
                o("gfeffd6a", "Prijava putem Googlea"),
                o("gf5e9ea6", "Poništi"),
                o("e43138c5", function (a) {
                    return "Počni pratiti korisnika/cu " + a.name;
                }),
                o("be65f2e7", function (a) {
                    return "Prestani pratiti korisnika/cu " + a.name;
                }),
                o("a649d337", function (a) {
                    return "Ne zanima me " + a.name;
                }),
                o("e2f2b658", "Više vam nećemo predlagati tu temu."),
                o("b51f7edf", function (a) {
                    return "Prestali ste pratiti korisnika/cu " + a.name;
                }),
                o("gac366b3", function (a) {
                    return "Počeli ste pratiti korisnika/cu " + a.name;
                }),
                o("f9e45cfb", function (a) {
                    return "Želite li blokirati korisnika/cu @" + a.screenName + "?";
                }),
                o("fcd4d489", function (a) {
                    return "Blokiraj korisnika/cu @" + a.screenName;
                }),
                o("a6450e84", "Blokirajte korisnika/cu"),
                o("g353ad73", function (a) {
                    return "Neće vas moći pratiti ni vidjeti vaše objave, a vi nećete moći vidjeti objave ni primati obavijesti o korisniku/ci @" + a.screenName + ".";
                }),
                o("ad00a739", function (a) {
                    return "Moći će vidjeti vaše javne objave, ali neće više moći sudjelovati u njima. @" + a.screenName + " također vas neće moći pratiti ni slati vam poruke, a vi nećete moći vidjeti obavijesti tog računa.";
                }),
                o("a9fd20be", "Uspješno blokirano."),
                o("j546fb79", function (a) {
                    return "Želite li deblokirati korisnika/cu @" + a.screenName + "?";
                }),
                o("c9623eeb", function (a) {
                    return "Deblokiraj korisnika/cu @" + a.screenName;
                }),
                o("e133be4e", "Deblokiraj"),
                o("he43bca4", "Moći će vas pratiti i vidjeti vaše objave."),
                o("f5f01af6", "Moći će vas pratiti i sudjelovati u vašim javnim objavama."),
                o("b6878b0a", "Došlo je do pogreške. Pokušajte blokirati tog korisnika ponovno za koju minutu."),
                o("e40252de", "Nemoj prikazati te objave u odjeljku Za tebe"),
                o("ae225c26", "Prikaži te objave u odjeljku Za tebe"),
                o("a96d2628", "Nemoj prikazati ovaj Popis u odjeljku Za tebe"),
                o("d00abae0", "Najpopularnije objave s tog Popisa više se neće pojavljivati na vašoj vremenskoj crti Za tebe."),
                o("e566dd06", "Najpopularnije objave s tog Popisa više se neće pojavljivati u odjeljku Za tebe."),
                o("j3cc1526", "Prikaži ovaj Popis u odjeljku Za tebe"),
                o("h435716e", "Najpopularnije objave s tog Popisa mogu se pojaviti na vašoj vremenskoj crti Za tebe."),
                o("e8ba412e", "Najpopularnije objave s tog Popisa možda se neće pojavljivati u odjeljku Za tebe."),
                o("d66e95cc", "Želite li prikvačiti odgovor na objavu?"),
                o("i24ed0de", "Prikvači odgovor"),
                o("b1033082", "Pojavit će se pri vrhu odgovora na vašu objavu. Uvijek ga možete zamijeniti ili ukloniti s istaknutih objava."),
                o("e96a5962", "Želite otkvačiti taj odgovor?"),
                o("ec04e6fc", "Otkvači odgovor"),
                o("d05618f2", "Više se neće prikazivati pri vrhu odgovora na tu objavu."),
                o("j9aedfdc", "Prikvačivanje odgovora"),
                o("c034211a", "Otkvačivanje odgovora"),
                o("ie4538b4", "Odgovor je prikvačen na objavu"),
                o("ad135a24", "Odgovor je otkvačen s objave"),
                o("ee369efc", "Na tu objavu nije moguće prikvačiti odgovor"),
                o("c3e7f572", "S te objave nije moguće otkvačiti odgovor"),
                o("d058316c", "Hvala. X će to iskoristiti za poboljšanje vaše vremenske crte."),
                o("afb7e8f8", "Pročitajte članak"),
                o("jb0429b1", function (a) {
                    return "Autor: " + a.name + " @" + a.screenName;
                }),
                o("gfdad702", "18+"),
                o("c5d23126", "Prikvači"),
                o("j44ec610", "Otkvači"),
                o("ibd0106e", function (a) {
                    return "" + a.formattedCount;
                }),
                o("cface2d1", function (a) {
                    return "član" + n(a.count, "a", "", "ova");
                }),
                o("b5334780", "Na čekanju"),
                o("b171d7c4", "Uključi se"),
                o("aa7ae3f6", "Uključeni"),
                o("bb1d57b6", "Napusti"),
                o("h4fbfa58", "Prihvati i pridruži se"),
                o("ea8cfb1e", "Prihvati i zatraži uključenje"),
                o("dc1b14a1", function (a) {
                    return "Pogledajte i prihvatite pravila zajednice " + a.communityName;
                }),
                o("c966ac64", "Nije moguće poslati zahtjev za uključivanje u Zajednicu. Pokušajte ponovno poslije."),
                o("g690e07e", "Vaš odgovor (neobavezno)"),
                o("a5d21bf4", "Odgovor nije obavezan. Ali nemojte zaboraviti da može pridonijeti tome da moderatori prihvate vaš zahtjev."),
                o("h9526e03", "platforme X"),
                o("c00c234f", function (a) {
                    return "Pravila zajednice " + a.communityName;
                }),
                o("hafa07f2", "Sudjelovanje je ograničeno"),
                o("c15bee32", "Uklonjeni ste iz ove zajednice"),
                o("efa265fc", "Vaše su objave zaštićene"),
                o("f9cecf48", "Nažalost, trenutačno se ne možete pridružiti"),
                o("bf7bdb60", "Nije do vas, nego do nas (stvarno). Pokušajte ponovno poslije."),
                o("h27d6950", "Još uvijek ne možete otići"),
                o("b02360f6", "Posljednji administrator ili moderator ne može napustiti Zajednicu ako ona nije prazna."),
                o("fe832999", "postavite svoje objave na javni prikaz"),
                o("bc7a7af4", "Vaše objave u Zajednici bit će skrivene i nećete se moći ponovno pridružiti."),
                o("a0e0a52c", function (a) {
                    return "" + a.offendingRule;
                }),
                o("fe76cacc", "Prikaži više objava"),
                o("aebb6546", "Učitavanje više objava"),
                o("a3484d22", "neriješeno"),
                o("aab2efa9", function (a) {
                    return "pobjednik " + a.winner;
                }),
                o("ba21c289", function (a) {
                    return "Rezultati, " + a.gameCategory + ", " + a.gameState + ", " + a.accessibleGameClockPeriod + ", " + a.teamOneLabel + ", " + a.teamTwoLabel;
                }),
                o("f178e38c", "Nadolazeće"),
                o("b6da6b02", "Uživo"),
                o("i9f615c8", "Konačni rezultat"),
                o("f897267a", "Odgođeno"),
                o("f93c4b6a", "Odgođeno"),
                o("i79ab12a", "Prati temu"),
                o("c0f56044", "Prestani pratiti"),
                o("fcf51fe6", "Dodaj zvjezdicu"),
                o("e9a90d72", "Označeno zvjezdicom"),
                o("bf403716", "Poništi zvjezdicu"),
                o("c9f08e29", function (a) {
                    return "Želite ukloniti zvjezdicu za " + a.title + "?";
                }),
                o("hed4dcd0", "Čak i ako za tu temu uklonite zvjezdicu, ipak ćete možda vidjeti objave o njoj, ovisno o tome koje račune pratite."),
                o("cd876e02", "Spremi u favorite"),
                o("f2816e02", "Spremljeno u favorite"),
                o("f5b04fbc", "Ukloni iz favorita"),
                o("c481ae3f", function (a) {
                    return "Želite ukloniti iz favorita " + a.title + "?";
                }),
                o("c94116de", "Čak i ako tu temu uklonite iz favorita, ipak ćete možda vidjeti objave o njoj, ovisno o tome koje račune pratite."),
                o("e0e730b0", "Zanima me"),
                o("b1850062", "Ne zanima me"),
                o("gd3f996f", function (a) {
                    return "Ne zanima vas " + a.title + "?";
                }),
                o("jdd65aac", "Čak i ako vas ta tema ne zanima, ipak ćete možda vidjeti objave o njoj, ovisno o tome koje račune pratite."),
                o("f93bb3ee", "Učitaj sliku"),
                o("cc37768d", function (a) {
                    return a.mediaFileSize + " KB";
                }),
                o("f19d78d7", function (a) {
                    return a.mediaFileSize + " MB";
                }),
                o("c75bf00e", "Učitaj GIF"),
                o("d3ac405c", "Učitaj videozapis"),
                o("g97a046c", "Reprodukcija videozapisa"),
                o("ac4c73d8", "Ugrađeni videozapis"),
                o("f3bb10a6", "Reprodukcija videozapisa"),
                o("b87c0a72", "Omogućite automatske obavijesti da biste ostali u tijeku sa svime što se događa na platformi X"),
                o("e71e09ec", "Uključi obavijesti"),
                o("g4850f44", "Automatske su obavijesti omogućene"),
                o("dc397182", "Prilagodi"),
                o("ia5e7488", "Zatvori"),
                o("j681933e", "Privatni popis"),
                o("add55942", "Nešto je pošlo po krivu. Pokušajte se ponovno pretplatiti za minutu."),
                o("ib8f5f3c", "Nešto je pošlo po krivu. Pokušajte ponovno otkazati pretplatu za minutu."),
                o("e20fc756", "Ne možete dodati tog člana na popis."),
                o("d8a032a2", "Prije dodavanja nove prikvačene vremenske crte morat ćete ukloniti neku postojeću"),
                o("fa816a0a", "Preuredi popis"),
                o("ac832ae4", "Prikvači popis"),
                o("cdb33880", "Otkvači popis"),
                o("ca5d0a82", "Uređivanje popisa"),
                o("ec08efe4", function (a) {
                    return "" + a.formattedCount;
                }),
                o("h9f711f0", function (a) {
                    return "osob" + n(a.count, "e koje prate", "a koja prati", "a koje prate");
                }),
                o("jceadc3e", "Bez naslova"),
                o("a1d5303c", "Privatno"),
                o("cc8f8a80", "Nije na popisu"),
                o("c33a97d6", "Javno"),
                o("i73fff1b", function (a) {
                    return "Prikaži " + a.count + " nov" + n(a.count, "e objave", "u objavu", "ih objava");
                }),
                o("a682906d", function (a) {
                    return a.count + " oznak" + n(a.count, "e", "a", "a") + " „sviđa mi se” do početka";
                }),
                o("g566e973", function (a) {
                    return a.jobCount + " otvorena radna mjesta" + a.tcc_organization_open_job_count;
                }),
                o("ccc45ee7", function (a) {
                    return "Pobijedio je tim " + a.team;
                }),
                o("f81a95d7", function (a) {
                    return "" + a.date;
                }),
                o("ed4bea2e", "Danas"),
                o("j3e0ae78", function (a) {
                    return "・" + a.formattedTime;
                }),
                o("cabfdd06", "Sutra"),
                o("abd0f804", function (a) {
                    return "・" + a.formattedTime;
                }),
                o("df45f564", "Dodajte još jednu objavu"),
                o("i569ff3e", "Pokaži tu nit razgovora"),
                o("je5502eb", function (a) {
                    return "Obuhvaća rezultate za „" + a.suggestion + "”";
                }),
                o("bc4628a1", function (a) {
                    return "Prikazuju se rezultati za „" + a.suggestion + "”";
                }),
                o("a1979464", "Učitavanje videozapisa"),
                o("ic1e826e", "Reproduciraj"),
                o("c8b4bca0", "Kupite"),
                o("f5ea07ec", "Odmah kupujte"),
                o("b62956aa", "Rezerviraj"),
                o("i3ea806a", "Naručite"),
                o("fd00a76a", "Otvoreno"),
                o("e0aa5848", "Instaliraj"),
                o("g33f3050", "Web"),
                o("d3f6b1a6", "Pošaljite nam poruku"),
                o("b0e322cc", "Pošaljite nam privatnu poruku"),
                o("cb8bddc8", "Pošalji mi privatnu poruku"),
                o("cb8c547e", "Pošaljite privatnu poruku"),
                o("d980e29f", function (a) {
                    return "Započinje " + a.date;
                }),
                o("fdd81500", "Vrtuljak"),
                o("i0db46e6", "GIF"),
                o("faf745fa", "Golotinja"),
                o("e1b4e672", "Osjetljiv sadržaj"),
                o("acc48c15", function (a) {
                    return "Upozorenje: " + a.formattedWarningList;
                }),
                o("a0e81a2e", "Prikaži"),
                o("g034e6f1", function (a) {
                    return "U to izvješće možete dodati samo sljedeći broj objava: " + a.count + ".";
                }),
                o("i2e0d584", "Promovirana objava"),
                o("b52a940c", "Ta objava nije dostupna."),
                o("da59404c", "Trenutno vidite najnoviju verziju."),
                o("e267df68", "Odgovor je skriven"),
                o("d5f162b6", "Taj odgovor možete u svakom trenutku otkriti. Još nešto?"),
                o("f376e9d4", "Povratne informacije o objavi"),
                o("d7c93b6c", "Objava je skrivena"),
                o("b3abacee", "Prikazivat će se manje takvih objava. Imate li još povratnih informacija?"),
                o("a2411360", "Neki vam se odgovor svidio?"),
                o("e8a14626", "Sada na objavu možete prikvačiti odgovor putem izbornika radnji (s tri točkice na objavi (…))."),
                o("d41305a8", "Poruka s oblačićem i pribadačom"),
                o("eca84b72", "Poništi prosljeđivanje objave"),
                o("g6185a9e", "Tko može odgovoriti?"),
                o("i00051cc", "Odaberite tko može odgovoriti na tu objavu. Svi spomenuti mogu odgovoriti."),
                o("i9000126", "Računi koje pratite"),
                o("dcaede8a", "Samo računi koje spominjete"),
                o("ad85cd2e", "Vaši pretplatnici"),
                o("f19e4bfc", "Provjereni računi"),
                o("bf994ab2", "Samo vi"),
                o("e7b4b30a", "Samo računi koje ste spomenuli"),
                o("ca6500a8", "Onemogući vanjske veze u odgovorima"),
                o("e839db3a", "Odbaci"),
                o("c8a98928", "Promotivna slika"),
                o("f5b3dc1e", "Možda poslije"),
                o("ae0c5fbe", "Prilikom promjene postavke o korisnicima koji mogu odgovoriti dogodila se pogreška"),
                o("bae0cbc0", "Promijenite tko može odgovoriti"),
                o("d78131b9", function (a) {
                    return "Dodaj/ukloni korisnika/cu @" + a.screenName + " s popisa";
                }),
                o("fb4ee11c", "Zašto se taj oglas pojavljuje?"),
                o("ad50e7d9", function (a) {
                    return "Prikaz " + a.entity + " analitike";
                }),
                o("ef1042f8", "Pisanje zabilješke zajednice"),
                o("h3edf7a6", "Zatražite Bilješku zajednice"),
                o("bf8d98f4", "Odgovoriti mogu samo pretplatnici"),
                o("e69ada9e", "Odgovoriti mogu samo pretplatnici na Premium"),
                o("ae04c4dd", function (a) {
                    return "Želite li izbrisati " + a.entity + "?";
                }),
                o("d9442996", "Ta se radnja ne može poništiti te će se objava ukloniti s vašeg profila, vremenske crte svih računa koji vas prate i iz rezultata pretraživanja."),
                o("dad785a7", function (a) {
                    return "Time će se sve verzije " + a.entity + " ukloniti s vašeg profila, s vremenske crte svih računa koji vas prate i iz rezultata pretraživanja. Ta se radnja ne može poništiti.";
                }),
                o("jda253ab", function (a) {
                    return a.entity + " je izbrisan";
                }),
                o("j49c2f85", function (a) {
                    return "Došlo je do pogreške. Pokušajte ponovno izbrisati " + a.entity + " za koju minutu.";
                }),
                o("f9fa0390", "Vaš će se članak premjestiti u stanje skice i može se izbrisati sa stranice članaka."),
                o("dad450ec", "Uredi članak"),
                o("g9677c6e", "Potvrdi"),
                o("b57bfe70", "Želite li urediti članak?"),
                o("bd3da7be", "Ovaj će članak privremeno biti neobjavljen tijekom uređivanja i neće biti javno vidljiv. Sva ostala sudjelovanja će se očuvati i prenijeti kada ponovno objavite ažuriranu verziju."),
                o("j26481e6", "Objava vašeg članka je poništena, a članak je premješten u skice kako biste ga mogli urediti."),
                o("b360ac7c", "Navigacija sekcijom"),
                o("adc81042", "Pojedinosti o sekciji"),
                o("bede965c", function (a) {
                    return "" + a.count;
                }),
                o("g345246c", "Ovo je objavljeni članak, novi način pisanja na platformi X."),
                o("b14efa0a", "Naslovna slika članka"),
                o("afdccedb", function (a) {
                    return "Prikaži " + a.displayCount + " odgovor" + n(a.count, "a", "", "a");
                }),
                o("bdba3e1a", "Uključite obavijesti o objavama"),
                o("c4da7d28", "Isključite obavijesti o objavama"),
                o("j87c21f4", "Obavijesti me"),
                o("iebc30ca", "Isključi obavijesti"),
                o("dc740eb2", "Obavijesti o objavama s tog računa vidjet ćete na vremenskoj crti s obavijestima. Na uređaju možete i omogućiti automatske obavijesti da nikad ne propustite nijednu objavu."),
                o("dca669ad", function (a) {
                    return "Proslijeđene objave korisnika/ce " + a.name + " više se neće prikazivati na vašoj vremenskoj crti";
                }),
                o("ce6da5d7", function (a) {
                    return "Proslijeđene objave korisnika/ce " + a.name + " prikazivat će se na vašoj vremenskoj crti";
                }),
                o("c6ea308b", function (a) {
                    return a.fullName + " (@" + a.screenName + ")";
                }),
                o("a1fef729", function (a) {
                    return "Pogledajte korisnika/cu " + a.fullName + " na platformi X\n" + a.bio;
                }),
                o("c32a3d03", function (a) {
                    return "Korisnik/ca @" + a.screenName + " više vas ne prati";
                }),
                o("j7bb1a43", function (a) {
                    return "Prijavi korisnika/cu @" + a.screenName;
                }),
                o("hef5960c", "Podijeli profil putem..."),
                o("bb1cbeb6", "Omogući prikaz tweetova"),
                o("h2f62206", "Onemogućivanje korisnika"),
                o("e67b2d65", function (a) {
                    return "Onemogući korisnika/cu @" + a.screenName;
                }),
                o("f05597b3", function (a) {
                    return "Omogući prikaz tweetova korisnika/ce @" + a.screenName;
                }),
                o("h59f52ee", "Uspješno onemogućen prikaz tweetova."),
                o("eea0cbee", "Uspješno omogućen prikaz tweetova."),
                o("i29533b3", function (a) {
                    return "@" + a.screenName + " je onemogućen(a).";
                }),
                o("h129c3c3", function (a) {
                    return "@" + a.screenName + " je omogućen(a).";
                }),
                o("b3036480", "Ukloni osobu koja me prati"),
                o("h27b7407", function (a) {
                    return "@" + a.screenName + " vas više neće pratiti, a X mu neće poslati obavijest. U budućnosti vas može ponovno početi pratiti.";
                }),
                o("ibd0b842", "Kopiraj poveznicu na profil"),
                o("b9c26480", "Prikaz tema"),
                o("e922ce0c", "Uključite prosljeđivanje objava"),
                o("ge54bb8c", "Isključite prosljeđivanje objava"),
                o("h5ef9bc8", "Prikaz popisa"),
                o("e9eef4c6", "Prijavi sadržaj koji je nezakonit u EU-u"),
                o("e28ba0bb", function (a) {
                    return "Prijavi sadržaj koji nije zakonit u EU-u @" + a.screenName;
                }),
                o("a30b63da", "Došlo je do pogreške. Osobu koja vas prati pokušajte ponovno ukloniti malo kasnije."),
                o("gd11f228", "(Potreban je naslov)"),
                o("ced3c85a", "Uređeno"),
                o("b375ece0", "Samo vi možete vidjeti neobjavljeni članak."),
                o("edf9101f", "Nastavite čitati"),
                o("icf7f1a4", "Kopiraj u međuspremnik"),
                o("e1a292ec", "Dodaj multimedijski sadržaj"),
                o("ebfd8ac6", "Umetni"),
                o("ia3611ee", "Počnite pisati"),
                o("d794135c", "Odaberite datoteku i povucite je ovdje.\n\nSvaki blok može sadržavati skup GIF-ova, videozapisa ili fotografija (do 4 fotografije po skupu)."),
                o("e187f906", "GIF-ovi:"),
                o("fa4e68ca", "Objave"),
                o("c80940f4", "Markdown"),
                o("cfeb3f86", "Kod"),
                o("ad9e175c", "LaTeX"),
                o("c62a27e6", 'Označeno sa "sviđa mi se"'),
                o("g88b88a6", "Dodano u knjižne oznake"),
                o("i282583e", "Objave zaštićenih računa ne mogu se upotrijebiti"),
                o("eae4fe7a", "Citiranje objava se ne može upotrijebiti za izbrisane objave"),
                o("d2042fb6", "Povezane objave"),
                o("iad3e15c", "Objave dodane u knjižne oznake"),
                o("f1c63c34", "Zalijepi URL objave"),
                o("a78f6310", "URL objave nije valjan"),
                o("fe9ddab6", "Objava nije pronađena"),
                o("dd2c9034", "Spremite objave za kasnije"),
                o("cada17f8", "Dodajte objave u knjižne oznake da biste ih mogli ponovno pronaći."),
                o("j0179e90", "Sastavite objavu"),
                o("adad5408", "Nova mapa"),
                o("f44ddd2e", "Dodajte objave u knjižne oznake da biste ih spremili za kasnije"),
                o("c91d2c4c", "Treba vam više vremena da sastavite jasan odgovor ili samo želite spremiti objavu za kasnije? Dodajte je u knjižne oznake!"),
                o("j45c642e", "Mape se trenutno ne učitavaju"),
                o("b87ca51a", "Ukloni fotografiju"),
                o("eebff22c", "Izrezivanje fotografije"),
                o("hf6f2914", "Pretpregled"),
                o("be4a00c2", "Ovdje dodajte kod"),
                o("i3128619", function (a) {
                    return "Blokovi ne mogu imati više od " + a.count + " znaka/znakova";
                }),
                o("dbb02ec4", "Odaberite jezik za programiranje"),
                o("d942865e", "Traži jezik za programiranje"),
                o("e554f642", "Želite li odbaciti promjene?"),
                o("fa524058", "Zadrži"),
                o("d4ab68e2", "Odbaci"),
                o("a50ba822", "Traži GIF-ove"),
                o("c6f5ac52", "Kategorije – pretraživanje GIF-ova"),
                o("ab468379", function (a) {
                    return a.query + " – pretraživanje GIF-ova";
                }),
                o("j7fc4f9c", "Automatski reproduciraj GIF-ove"),
                o("a66b7760", "Neoznačeni GIF"),
                o("a723aefa", "Nismo pronašli GIF-ove"),
                o("a6ecfa0a", "Pokušajte potražiti nešto drugo."),
                o("f5ff0d6f", function (a) {
                    return a.category + " – pretraživanje GIF-ova";
                }),
                o("effe1ca6", "Dodajte LaTeX izraz ovdje"),
                o("c46c3c62", "Vaš izraz sadržava pogrešku. Pokušajte ponovno nakon što je otklonite."),
                o("d4a4842e", "Dodaj emoji"),
                o("fec16c1c", "Emoji"),
                o("idc01eb8", "Podebljano"),
                o("cd7c97c6", "Kurziv"),
                o("dab932be", "Podcrtano"),
                o("c5b6178a", "Precrtano"),
                o("c03d7fd6", "Umetnite vezu"),
                o("abfe2d36", "Popis s grafičkim oznakama"),
                o("da685a7c", "Numerirani popis"),
                o("g74d920c", "Citirani blok"),
                o("cda501c6", "Povećavanje veličine teksta"),
                o("a54fdc46", "Smanjivanje veličine teksta"),
                o("b340830e", "Prečaci u tekstu"),
                o("c1ea915e", "Unesite početak novog retka ili bloka, nakon kojeg slijedi razmak"),
                o("e8a4ef02", "Naslov"),
                o("dd71241a", "Podnaslov"),
                o("ja9ca202", "Prečaci za članke"),
                o("ef1649e2", "X – tipkovni prečaci"),
                o("aefd89c8", "Navigacija"),
                o("cafdefb2", "Akcije"),
                o("dda42cf2", "Stupci i ploče"),
                o("e8a12604", "Navedite naslov (neobavezno)"),
                o("eabf2209", function (a) {
                    return "GIF omogućuje " + a.providerName;
                }),
                o("a613e720", "Kopiraj vezu na GIF"),
                o("aeca1239", function (a) {
                    return "Podebljano" + a.ttc_rich_text_composer;
                }),
                o("i7dc66dd", function (a) {
                    return "Kurziv" + a.ttc_rich_text_composer;
                }),
                o("ad89b831", function (a) {
                    return "aktivno" + a.ttc_rich_text_composer;
                }),
                o("jcd5ee8a", "Uredi blok"),
                o("a8f09fb8", "Izbriši blok"),
                o("i89195ea", "Razdjelnik"),
                o("da8ac57c", "Uredi titlove"),
                o("a8fdd09c", "Objavi članak"),
                o("d8047cc8", "Objavi"),
                o("ff7ddca2", "Vaš će se članak prikazati kao objava nakon što ga objavite. Možete ga pronaći i na kartici Članci na svom profilu."),
                o("ef34d7be", "Kontrole za publiku i odgovor ne mogu se uređivati nakon objave članka."),
                o("e52d4998", "Odaberite publiku"),
                o("d7985b24", "Odaberite tko sve može odgovoriti na ovaj članak"),
                o("b5660338", "Pretpregled vremenske crte"),
                o("hff1b97a", "Odgovoriti mogu samo pretplatnici."),
                o("a330771e", "Kopirajte vezu u međuspremnik"),
                o("b6510e68", "Kopirajte URL svog članka kako biste ga mogli dijeliti."),
                o("e4a6e006", "Došlo je do pogreške. Pokušajte ponovno."),
                o("eff483e0", "Nakon što objavite, dobijte vezu za dijeljenje članka.");
            o("ca15dd4e", "Skica"),
                o("bb40bf66", "Objavljeno"),
                o("h107935c", "Zadnji put spremljeno upravo sad"),
                o("a753a870", "Primijeni"),
                o("afccc67e", "Kopiraj vezu na članak"),
                o("beb24e9e", "URL je kopiran u međuspremnik"),
                o("db9cc928", "Izbrisati članak?"),
                o("c4e28ba6", "Ta se radnja ne može poništiti, a članak će se izgubiti."),
                o("ff2982d0", "Vaš je članak izbrisan. To se ne može poništiti te će se objava ukloniti s vašeg profila, vremenske crte svih računa koji vas prate i iz rezultata pretraživanja."),
                o("ca17beec", "Vaš je članak izbrisan"),
                o("f5cbb31c", "Izbriši članak"),
                o("f0977f52", "Da, izbriši"),
                o("db419d4c", "Pregledajte svoju skicu"),
                o("a1bc8e6c", "Prikaži članak"),
                o("b6f72a22", "Objava ovog članka će se poništiti, a članak će se premjestiti u skice i neće biti javno vidljiv."),
                o("f558d2e0", "Makni iz objave u skice"),
                o("e9473589", function (a) {
                    return "" + a.articleTitle;
                }),
                o("ib067d6a", "Odaberite ili jedan GIF ili najviše četiri fotografije."),
                o("eb7ab862", "Odaberite najviše 4 fotografije, videozapisa ili GIF-ova."),
                o("ce9a9736", "Spremanje..."),
                o("dd63549e", "Uspjelo je! Vaš članak je objavljen"),
                o("a4d128bc", "Uspjelo je! Vaš članak je objavljen, a veza je kopirana u međuspremnik"),
                o("b4071e18", "Naslov članka"),
                o("f586b7fa", "Dodavanje naslova"),
                o("ab0fa9ba", "Za uređivanje vratite se na skice"),
                o("c5f35c98", "Prijenos medijskog sadržaja..."),
                o("d739d83e", "Otkaži prijenos"),
                o("a94efeda", "Spremanje medijskog sadržaja..."),
                o("gd79d45a", "Ostanite fokusirani na ono što pišete uključivanjem načina rada za fokusiranje"),
                o("g1866bb2", "Vratite se na uobičajeni alat za uređivanje izlaskom iz načina rada za fokusiranje"),
                o("a6a78df4", "Vaš članak treba naslov i sadržaj prije objave."),
                o("ia656f1c", "Vaš članak ima naslov, ali treba sadržaj prije objave."),
                o("d3855e36", "Vaš članak treba naslov prije objave."),
                o("f325958e", "Vaš naslov prelazi ograničenje broja znakova. Skratite ga, a zatim objavite."),
                o("ie5d9064", "Vaš članak ima više od maksimalnog broja znakova. Skratite tekst tijela, a zatim objavite."),
                o("e03487a0", "Vaš naslov prelazi ograničenje broja znakova, a članak prelazi ograničenje broja riječi. Skratite ih, a zatim objavite."),
                o("e938d562", "Vaš naslov prelazi ograničenje broja znakova. Skratite naslov, dodajte nešto u tijelo, a zatim objavite."),
                o("e449c546", "Vašem je članku potreban naslov i ima više od maksimalnog broja riječi. Dodajte naslov, skratite tekst tijela, a zatim objavite."),
                o("bd00e836", "Vaša najnovija skica nije spremljena jer prelazi ograničenje broja znakova."),
                o("ic110f68", "Vaša najnovija skica nije spremljena jer je predugačka."),
                o("ifea3114", "Dijeli"),
                o("b384f696", "Preporučujemo naslov duljine 50 – 70 znakova"),
                o("a7da0adb", function (a) {
                    return a.count + " riječ" + n(a.count, "i", "", "i");
                }),
                o("aea1d455", function (a) {
                    return a.count + " minut" + n(a.count, "e", "e", "a");
                }),
                o("df898d71", function (a) {
                    return "Vrijeme čitanja: " + a.readingTimeValue;
                }),
                o("i9aadf4a", "Ta veza možda nije točna. Kliknite na jedan od svojih članaka na lijevoj bočnoj traci za čitanje, uređivanje ili objavljivanje članka."),
                o("hfdce46e", "Poništena je objava vašeg članka"),
                o("df079228", "Način rada za fokusiranje"),
                o("f5037228", "Za najbolje rezultate preporučujemo format prikaza slike od 5 : 2."),
                o("f965e890", "Vaše se skice čuvaju ovdje"),
                o("c2756718", "Vaši objavljeni članci čuvaju se ovdje"),
                o("af65c854", "Uredite u načinu rada za fokusiranje"),
                o("e05e2336", "Poništi objavu i premjesti članak u skice"),
                o("d36447e0", "Ovdje ćete pisati"),
                o("ca0ed982", "Nastavite uređivati skicu ili izradite novi članak"),
                o("ee9e42aa", "Pisanje"),
                o("e9a50596", "Pojavila se pogreška tijekom izrade nove skice"),
                o("e070024a", "Uredi fotografiju"),
                o("i7d24b36", "Sljedeća slika"),
                o("f96a38a2", "Prethodna slika"),
                o("hac7c548", "Obreži medijski sadržaj"),
                o("e3dbfba4", "Uredite opis slike"),
                o("dd4a83a6", "Upozorenje o sadržaju"),
                o("ffe9ec3a", "Dodaj opise"),
                o("j063b262", "Na fotografije možete dodati opis, koji se naziva i zamjenskim tekstom, da bi one bile pristupačne još većem broju ljudi, uključujući slijepe i slabovidne osobe. Dobri su opisi sažeti, ali točno opisuju slike i omogućuju razumijevanje njihova konteksta."),
                o("e57144f0", "Da"),
                o("f9f9210c", "Ne, hvala"),
                o("feabf2a0", "Alternativni tekst"),
                o("e36287c6", "Opis"),
                o("cf565d08", "Što je zamjenski tekst?"),
                o("d9f7b32a", "Postavite upozorenje o sadržaju na tu objavu"),
                o("ead1b80a", "Odaberite kategoriju i na tu ćemo objavu postaviti upozorenje o sadržaju. Na taj je način korisnici koji ga ne žele vidjeti mogu izbjeći."),
                o("h2437f26", "Osjetljivo"),
                o("g5e1668a", "Dostupno za preuzimanje"),
                o("fdc6a52a", "Kada se omogući, videozapis će biti dostupan za preuzimanje."),
                o("fe09fde2", "Promijenite postavke"),
                o("cd5cba97", function (a) {
                    return "Upozorenje o sadržaju: " + a.formattedWarningList;
                }),
                o("h7215a76", "Autor objave za tu je objavu označio da ima osjetljiv sadržaj."),
                o("j32d345e", "Sljedeći sadržaji mogu sadržavati osjetljiv materijal"),
                o("f1d9930c", "Sakrij"),
                o("c91f83ae", "Uređivanje videozapisa"),
                o("icbec4ae", "Prenesi titlove"),
                o("e0342f98", "Titlovi"),
                o("e7048e74", "Obreži medijske sadržaje"),
                o("ga408160", "Sljedeći videozapis"),
                o("dc402134", "Prethodni videozapis"),
                o("bf4e9d7a", "Prenesi datoteku s titlovima (.srt)"),
                o("j435467e", "Titlove i opise u videozapis možete dodati tako da prenesete valjanu datoteku s titlovima. Datoteke moraju biti u SRT formatu. Promjene videozapisa neće utjecati na titlove i opise."),
                o("a6b267fa", "Ukloni opise"),
                o("a609edbe", "Sastavite novu objavu"),
                o("dc295bb0", "Objavljivanje u Zajednici"),
                o("e536de22", "Morate biti član da biste mogli objavljivati. Pridružite se ovoj zajednici da biste mogli sudjelovati!"),
                o("cb817dae", "Uređivanje objave"),
                o("bec9cff8", "Prijavite se za X"),
                o("c150ba68", "Dobro došli!"),
                o("f8e2163e", "Želite li se najprije prijaviti?"),
                o("a108c147", function (a) {
                    return "Želite li pratiti korisnika/cu @" + a.screenName + "?";
                }),
                o("c66afdc3", function (a) {
                    return "Počni pratiti korisnika/cu @" + a.screenName;
                }),
                o("feccfd6e", "Da biste nekoga počeli pratiti, morate se prijaviti."),
                o("dedce756", "Sada možete tu objavu označiti sa „sviđa mi se”."),
                o("ha5987e0", "Želite li označiti tu objavu sa „sviđa mi se”?"),
                o("f98f4e00", "Da biste tu objavu mogli označiti sa „sviđa mi se”, morate se prijaviti."),
                o("b459ba4c", "Da biste na tu objavu mogli odgovoriti, morate se prijaviti."),
                o("f3e1093a", "Sada to možete proslijediti."),
                o("i1d8723c", "Želite li proslijediti tu objavu?"),
                o("h19f38de", "Da biste to mogli objaviti, morate se prijaviti."),
                o("e289d950", "Da biste tu objavu mogli podijeliti, morate se prijaviti."),
                o("d28215f0", "Nažalost, ankete nisu dopuštene u zajednicama!"),
                o("ec2fc089", function (a) {
                    return "objav" + n(a.numOfTweets, "e poslane su", "a poslana je", "a poslano je") + " korisniku/ci " + a.communityName;
                }),
                o("c7152355", function (a) {
                    return "Nemojte zaboraviti omogućiti pristupačnost za slik" + n(a.numberOfImages, "e", "u", "a");
                }),
                o("ffa5562a", "Dobri opisi slika sažeti su, ali detaljni. Provjerite je li tekst dovoljno kratak ili u samu sliku upišite novi."),
                o("a2d3facd", function (a) {
                    return "opis" + n(a.numberOfImages, "a omogućuju", " omogućuje", "a omogućuju") + " pristupačnost platforme X osobama s invaliditetom i onima koji žele više konteksta.";
                }),
                o("cc6d0a48", "Taj podsjetnik možete isključiti u postavkama pristupačnosti."),
                o("j499fbcb", function (a) {
                    return "Dodaj opis" + n(a.numberOfImages, "a", "", "a");
                }),
                o("bb8170da", "Ne ovaj put"),
                o("h4dd544e", "Vaša je objava poslana."),
                o("ice925ce", "Vaša je objava uređena."),
                o("eae9e604", "Vaš je objava poslana. Uređivati je možete sljedećih 30 minuta."),
                o("gcdf3fd6", "Vaš je objava poslana. Uređivati je možete sljedećih sat vremena."),
                o("c7999d10", "Vaše su objave poslane."),
                o("b97f5eb2", "Slanje objave..."),
                o("g08523f0", "Slanje objave... Uređivati je možete prvih 30 minuta nakon objave."),
                o("fa53f95c", "Slanje objave... Uređivati je možete prvih sat vremena nakon objave."),
                o("a608b1b4", "Želite li odbaciti objavu?"),
                o("j890123a", "Želite li odbaciti nit razgovora?"),
                o("af4d0a80", "Želite odbaciti promjene?"),
                o("bb01231c", "Ta se radnja ne može poništiti te ćete izgubiti skicu."),
                o("if69307c", "Ako zatvorite stranicu, promjene se neće spremiti."),
                o("d2c271f6", "Želite li spremiti objavu?"),
                o("abb90544", "Sadržaj spremite u skice i pošaljite poslije."),
                o("d3bb6f30", "Napomena: računi označeni u medijima neće se spremiti u skicu."),
                o("bf9b89e4", "Skica je spremljena."),
                o("i63bfbf0", "Zadržite tu misao"),
                o("a6c55352", "Još uvijek prenosimo vaš videozapis. Želite li zaista odbaciti objavu? Izgubit ćete skicu i privitke."),
                o("c3d89aca", "Nastavi"),
                o("b983f9e0", "Pripremite se"),
                o("ed5c4342", "Treba imati na umu..."),
                o("abc4afcc", "Isteklo je vrijeme za uređivanje"),
                o("a9a471fa", "Objave se mogu uređivati samo prvih 30 minuta nakon objave."),
                o("a3483f1c", "Objave se mogu uređivati samo sat vremena nakon objave."),
                o("g4bcc5f4", "Ovo je zadnje uređivanje"),
                o("g922bf14", "Vaša se objava ne može ponovno urediti."),
                o("f58b5009", function (a) {
                    return "Vaša će se objava poslati " + a.scheduleDate + " u " + a.scheduleTime;
                }),
                o("fa97f508", "U tu nit razgovora možete dodati još objava nakon što pošaljete ove objave."),
                o("c091760c", "Te promjene nisu spremljene. Ponovno možete pokušati ažurirati ili promjene odbaciti i početi ispočetka."),
                o("d38504ad", function (a) {
                    return "Odaberite do " + a.maxMediaCap + " fotografija, videozapisa ili GIF-ova.";
                }),
                o("dd6734c2", "Pročitajte više"),
                o("g589c2e2", "1. mogućnost odabira"),
                o("a1e6c3a2", "2. mogućnost odabira"),
                o("a739e006", "3. mogućnost odabira (neobavezno)"),
                o("d89a5b92", "4. mogućnost odabira (neobavezno)"),
                o("c2a8118e", "Ukloni anketu"),
                o("a8ede1de", "Dodaj mogućnost odabira"),
                o("af40a8e0", "Dodaj"),
                o("caf8edc4", "Trajanje ankete"),
                o("g93586be", "Dani"),
                o("d073b644", "Sati"),
                o("a2f0728e", "Minute"),
                o("c9f5ae0a", "Spremljeno u skice"),
                o("f0afcc0e", "Dodaj anketu"),
                o("d39e3e78", "Zakaži objavu"),
                o("f6bab0da", "Tekst objave"),
                o("cc2b28fc", "Dopuštena je samo 1 vrsta privitka"),
                o("i6f7062c", "Dodaj objavu"),
                o("j1d5791c", "Dodaj odgovor"),
                o("e76f3776", "Ukloni objavu"),
                o("ec10ee02", "Anketa"),
                o("cce30dcc", "Označavanje lokacije"),
                o("ee016dd6", "Prijenos dugih videozapisa potrajat će neko vrijeme. Da se ne bi prekinuo, kartica preglednika mora ostati otvorena."),
                o("b7d8e3f1", function (a) {
                    return a.numberOfAltTextEntries + " slikovni(h) opis" + n(a.numberOfAltTextEntries, "a", "", "a");
                }),
                o("d1175c78", "Označi osobe"),
                o("b2943227", function (a) {
                    return "Prenesite datotek" + n(a.numberOfVideos, "e", "u", "a") + " s titlovima (.srt)";
                }),
                o("d0afbb37", function (a) {
                    return a.numberOfSubtitles + " datotek" + n(a.numberOfSubtitles, "e", "u", "a") + " s titlovima";
                }),
                o("e349147c", "Što se događa?"),
                o("b4481d6c", "Recite nam svoje mišljenje..."),
                o("fbd24526", "Dodajte drugi odgovor"),
                o("de4669e2", "Dodajte komentar"),
                o("ed1f39ec", "Objavite odgovor"),
                o("a402b908", "Postavite pitanje"),
                o("ic05a146", "Naslov"),
                o("d9c096f0", "Generiraj sliku"),
                o("d2553906", "Poboljšaj objavu"),
                o("b85f402a", "Poboljšajte objavu uz značajku Grok"),
                o("e815fc34", "Odabir publike"),
                o("cf44066a", "Krug"),
                o("c6992b94", "Ekskluzivno za Premium"),
                o("a5f7b700", function (a) {
                    return "" + a.formattedCount;
                }),
                o("a7daec1e", function (a) {
                    return "osob" + n(a.count, "e", "a", "a");
                }),
                o("f0598964", "Želite podijeliti s manjom grupom ljudi?"),
                o("e1ae1c0a", "Krug vam omogućuje slanje objava samo osobama koje odaberete."),
                o("eb969e30", "Kako krug funkcionira"),
                o("bb55e8ee", "Dodajte osobe"),
                o("f1aedb7c", "U svoj krug možete uključiti do 150 ljudi."),
                o("b659fba8", "Objavi samo tom popisu osoba"),
                o("c474be66", "Slobodno objavite što mislite. Vaše će objave vidjeti i na njih moći odgovoriti samo vaš krug."),
                o("h031847a", "Promijenite što želite kad god želite"),
                o("bd9db21f", "Saznajte više"),
                o("gfca5254", "Pravila"),
                o("f510c8b2", "Pravila zajednice"),
                o("g46f363e", "Prije uključivanja u razgovor pregledajte pravila zajednice"),
                o("f6fec9f6", "Ukloni pretpregled kartica"),
                o("b2df0574", "Također podijeli sa osobama koje me prate"),
                o("ccfc7453", function (a) {
                    return "Odgovoriti mogu sve osobe u krugu korisnika/ce @" + a.screenName + " koje vas prate";
                }),
                o("d4d17205", function (a) {
                    return "Odgovoriti mogu sve osobe u krugu korisnika/ce @" + a.screenName;
                }),
                o("df961844", "Odgovoriti može samo vaš krug koji vas prati"),
                o("ce958ec8", "Odgovoriti može samo vaš krug"),
                o("c7df589e", "Odgovoriti mogu sve osobe u krugu autora objave koje vas prate"),
                o("j65d7c72", "Odgovoriti mogu sve osobe u krugu autora objave"),
                o("i8ea6d4e", "Svatko može odgovoriti"),
                o("a176d0d8", "Računi koje pratite mogu odgovoriti"),
                o("gc7e52ca", "Odgovoriti mogu samo računi koje spominjete"),
                o("feb7560a", "Odgovoriti mogu samo pretplatnici"),
                o("h257006e", "Pregledajte i pridržavajte se pravila ove Zajednice"),
                o("ebe1d850", "Odgovoriti mogu samo vaši pretplatnici"),
                o("b121464a", "Samo provjereni računi mogu odgovoriti"),
                o("aa65a44a", "Vaš će odabir biti zapamćen na ovom uređaju"),
                o("a4993fa2", "Dodaj GIF"),
                o("bfb895b1", function (a) {
                    return "Poslat će se " + a.date + " u " + a.time;
                }),
                o("hb36f723", function (a) {
                    return "Na vremenskoj crti prikazat će se samo prvih " + a.count + " znakova.";
                }),
                o("d759c09e", "Isprobajte"),
                o("e4472565", function (a) {
                    return "Preneseno (" + a.percent + " %)";
                }),
                o("a06fa8fd", function (a) {
                    return "Obrada u tijeku (" + a.percent + " %)";
                }),
                o("h7f340e5", function (a) {
                    return "Prijenos u tijeku (" + a.percent + " %)";
                }),
                o("daad8822", "Prijenos nije uspio"),
                o("i8ff6261", function (a) {
                    return "Čini se da taj videozapis prelazi maksimalnu veličinu datoteke koja se može prenijeti (" + a.human_readable_max_size + " GB).";
                }),
                o("cba4fdde", "Prikaz u razlučivosti 1080p gledateljima na platformi X"),
                o("ef8f5d90", "Preporučujemo"),
                o("a7046fb0", "Rijetko potrebno"),
                o("acf3ecf4", "Dodaj medijski sadržaj"),
                o("bdbcdd94", "Dodavanje fotografija"),
                o("f2c8c04d", "postavite svoje objave na javni prikaz"),
                o("b50e199a", function (a) {
                    return "" + a.userName;
                }),
                o("c3033e8a", function (a) {
                    return a.replyUserName + " i " + a.otherUserName;
                }),
                o("e50dae2a", function (a) {
                    return a.userOneName + ", " + a.userTwoName + " i " + a.userThreeName;
                }),
                o("h758cd23", function (a) {
                    return a.userOneName + " " + a.userTwoName + " i još " + n(a.othersCount, "njima " + a.othersCount, "jednoj osobi", "njima " + a.othersCount);
                }),
                o("fba61ad6", function (a) {
                    return "" + a.userName;
                }),
                o("ce87c872", function (a) {
                    return a.replyUserName + " i " + a.otherUserName;
                }),
                o("b45fa506", function (a) {
                    return a.userOneName + " " + a.userTwoName + " i " + a.userThreeName;
                }),
                o("b8168f25", function (a) {
                    return a.userOneName + " " + a.userTwoName + " i još " + n(a.othersCount, "njih " + a.othersCount, "jednoj osobi", "njima " + a.othersCount);
                }),
                o("ab67a7ac", function (a) {
                    return "" + a.userName;
                }),
                o("g571ef41", "pretplatnici"),
                o("d48d6476", function (a) {
                    return a.replyUserName + " i " + a.otherUserName;
                }),
                o("i9451241", "pretplatnici"),
                o("hdf48104", function (a) {
                    return a.userOneName + " " + a.userTwoName + " i " + a.userThreeName;
                }),
                o("dcbb6a0b", "pretplatnici"),
                o("ba74e38b", function (a) {
                    return a.userOneName + " " + a.userTwoName + " i još " + n(a.othersCount, "njih " + a.othersCount, "jednoj osobi", "njih " + a.othersCount);
                }),
                o("c65916af", "pretplatnici"),
                o("g5c5ebb8", function (a) {
                    return "" + a.userName;
                }),
                o("b86ff336", function (a) {
                    return "" + a.userName;
                }),
                o("e0af5609", function (a) {
                    return a.userOneName + " i " + a.userTwoName;
                }),
                o("ae834d19", function (a) {
                    return "" + a.trustedFriendsTweetOwner;
                }),
                o("g3d6f043", function (a) {
                    return a.userOneName + " i " + a.userTwoName;
                }),
                o("ade845a5", function (a) {
                    return "" + a.trustedFriendsTweetOwner;
                }),
                o("ef5386dc", function (a) {
                    return a.userOneName + " " + a.userTwoName + " i " + a.userThreeName;
                }),
                o("acd17e4b", function (a) {
                    return "" + a.trustedFriendsTweetOwner;
                }),
                o("g1ee3d90", function (a) {
                    return a.userOneName + ", " + a.userTwoName + " i " + a.userThreeName;
                }),
                o("f6da070f", function (a) {
                    return "" + a.trustedFriendsTweetOwner;
                }),
                o("a035ba65", function (a) {
                    return a.userOneName + " " + a.userTwoName + " i još " + n(a.othersCount, "njih " + a.othersCount, "jednoj osobi", "njih " + a.othersCount);
                }),
                o("e4c52c45", function (a) {
                    return "" + a.trustedFriendsTweetOwner;
                }),
                o("baf2c639", function (a) {
                    return a.userOneName + " " + a.userTwoName + " i još " + n(a.othersCount, "njih " + a.othersCount, "jednoj osobi", "njih " + a.othersCount);
                }),
                o("j8e134e5", function (a) {
                    return "" + a.trustedFriendsTweetOwner;
                }),
                o("c14cdb18", "Sponzoriraj"),
                o("f11264ac", "Dodaj način plaćanja"),
                o("j619ec94", "Promoviraj objavu"),
                o("h1fcb36c", "Promovirajte objavu"),
                o("fd22cfe0", "Uvjete i odredbe za oglase."),
                o("i3656b52", "Koliko želite potrošiti?"),
                o("h7c29de6", "Procijenjeni doseg"),
                o("hd435bf1", function (a) {
                    return a.audienceLow + " – " + a.audienceHigh + " osoba";
                }),
                o("i976aff4", "Promijenite dnevni proračun u skladu s valutom u kojoj plaćate."),
                o("e1e912f2", "Vaša objava je objavljena ali je nismo uspjeli istaknuti. Nećemo vam to naplatiti."),
                o("fe26420a", "Dodaj ključne riječi"),
                o("aacfbe55", function (a) {
                    return "Objavljujete za korisnika/cu @" + a.screenName + ".";
                }),
                o("ga8627cd", function (a) {
                    return "Odgovarate u ime računa @" + a.screenName + ".";
                }),
                o("e6d2573f", function (a) {
                    return "Poruku šaljete u ime računa @" + a.screenName + ".";
                }),
                o("d37a3e15", function (a) {
                    return "Taj popis stvarate u ime računa @" + a.screenName + ".";
                }),
                o("ceb1ad26", "Predstavljamo videozapise koje je moguće preuzeti"),
                o("ea97bc08", "Budite aktivni izvan mreže ili upotrijebite remiks! Premium korisnici sada imaju mogućnost preuzimanja i redefiniranja vašeg sadržaja. Ako ne želite da se vaši videozapisi mogu preuzimati, dodirnite „Uredi” na svom videozapisu. Vaš sadržaj, vaša pravila."),
                o("e6042757", function (a) {
                    return "Za uređivanje objave preostalo je: " + a.minutes + " minut" + n(a.minutes, "e", "a", "a") + " i " + a.seconds + " sekund" + n(a.seconds, "e", "a", "i");
                }),
                o("a4e39717", function (a) {
                    return "Za uređivanje objave preostalo je " + a.minutes + " minut" + n(a.minutes, "e", "a", "a");
                }),
                o("c55eed72", "Odgovor korisniku/ci"),
                o("caca3102", "Ostali sudionici razgovora"),
                o("c6a6dc2f", function (a) {
                    return "Blokirali ste korisnika/cu @" + a.screenName + ", pa neće primiti obavijest kad odgovorite.";
                }),
                o("f5b426c2", "Učitavanje korisnika"),
                o("c20dc654", "Označiti možete samo deset osoba."),
                o("ae0831ab", function (a) {
                    return "Korisnika/cu @" + a.screenName + " ne možete označiti na fotografijama";
                }),
                o("cca7fa72", "Zakazane objave nije moguće izbrisati."),
                o("c5dd0190", "Vrijeme"),
                o("edeff232", "Datum"),
                o("fddf24b4", "Vremenska zona"),
                o("d39dc06e", "Slanje objave ne možete zakazati u prošlosti."),
                o("d024efe2", "Objavu ne možete zakazati više od 18 mjeseci u budućnosti."),
                o("d15af6da", "Neke neposlane objave nije moguće izbrisati."),
                o("a1e1b748", "Odabrane neposlane objave su izbrisane."),
                o("ce80fba0", "Učitavanje neposlanih objava"),
                o("i5d56b62", "Niste još spremni objaviti? Spremite objavu u skice ili je zakažite za poslije."),
                o("aef6257e", "Brisanje neposlanih objava"),
                o("dce0bc34", "Neposlane objave"),
                o("f8464692", "Zakazano"),
                o("e8bd47f2", "Odaberi sve"),
                o("j2b145d4", "Poništi sve odabire"),
                o("h6c79ac2", "Odbaci neposlane objave"),
                o("d0a4a03c", "Tu radnju ne možete poništiti, što znači da ćete izgubiti objave koje ne pošaljete."),
                o("f9f69d32", "Slanje nije uspjelo"),
                o("j74e5dd4", "Objava na koju pokušavate odgovoriti izbrisana je"),
                o("c5ceafc8", "Odgovor"),
                o("f501ba43", function (a) {
                    return "još " + a.count + " objav" + n(a.count, "e", "a", "a");
                }),
                o("b321d0cc", "Učitaj slike"),
                o("abd649ce", "Odbaci neposlanu objavu"),
                o("c7d42978", "Ta se radnja ne može poništiti te ćete izgubiti skicu objave."),
                o("e43a5528", "Došlo je do pogreške pa neposlana objava nije izbrisana."),
                o("e7c766ee", "Lokacijski su servisi onemogućeni"),
                o("ab68727a", "Možete ih uključiti u postavkama uređaja."),
                o("ae4057a2", "Nije moguće odrediti lokaciju"),
                o("bf2923a6", "Provjerite postavke uređaja."),
                o("d963d1b6", "Nije pronađeno nijedno mjesto"),
                o("a893d602", "U redu"),
                o("be6cc44e", "Pretraživanje lokacija"),
                o("d8ef3232", "Dohvaćanje lokacija nije uspjelo"),
                o("b01ed2db", function (a) {
                    return a.distance + " mi";
                }),
                o("i83e29e1", function (a) {
                    return a.distance + " ft";
                }),
                o("d4b7cff7", function (a) {
                    return a.distance + " km";
                }),
                o("b211849f", function (a) {
                    return a.distance + " m";
                }),
                o("fd391b9f", function (a) {
                    return "Ugradi " + a.entity;
                }),
                o("e1618e49", function (a) {
                    return "Počeli ste pratiti korisnika/cu @" + a.screenName;
                }),
                o("ge5067bc", "Sakrij odgovor"),
                o("j136c720", "Odgovor je skriven iz objave"),
                o("d66f0338", "Skrivanje odgovora na objave"),
                o("cfc8cb50", "Da bi imali više kontrole nad započetim razgovorima, autori objava mogu sakriti odgovore na svoje objave."),
                o("if8dc5f0", "Skriveni odgovori premještaju se na posebnu stranicu koju bilo tko može pogledati odabirom ikone skrivenog odgovora u objavi."),
                o("b2615c6d", function (a) {
                    return "Želite li blokirati i korisnika/cu @" + a.screenName + "?";
                }),
                o("i62a03aa", "Ne"),
                o("f9f27fa2", "Sakrij objavu"),
                o("ce87916a", "Dodaj na karticu / ukloni s kartice Istaknuto"),
                o("eaae42ce", "Dodati u Istaknuto?"),
                o("h032d096", "Ukloniti s kartice Istaknuto?"),
                o("be38d25e", "Ta će objava biti istaknuta na kartici Istaknuto na vašem profilu."),
                o("d2be9310", "Ta će objava biti uklonjena s kartice Istaknuto na vašem profilu."),
                o("jea6b076", "Uspješno dodano u Istaknuto."),
                o("ce6fd0ec", "Uspješno uklonjeno s kartice Istaknuto."),
                o("ha35a1d2", "Prikvačite na profil"),
                o("d04f95c0", "Objava je prikvačena na vaš profil."),
                o("i419d136", "Želite li objavu prikvačiti na profil?"),
                o("c1b9714a", "To će se prikazati na vrhu profila i zamijeniti sve prethodno prikvačene objave."),
                o("fe4d099a", "Istakni"),
                o("e8d4c1cc", "Isticanje objava pretplatnička je značajka. Izvršite provjeru autentičnosti kako biste otključali tu značajku i druge značajke."),
                o("b68c3784", "Provjeri autentičnost"),
                o("bb16cc76", "Zatvori taj razgovor"),
                o("de21174c", "Izašli ste iz tog razgovora"),
                o("j33c9fc6", "Nema veze, ostajem"),
                o("aed79c54", "Uklonit ćemo vas iz tog razgovora"),
                o("h12044a4", "Ponekad vam se ne da uključivati. Ako izađete iz razgovora..."),
                o("f100e566", "Uklonit će se oznaka s vašeg korisničkog imena"),
                o("a0d68f4e", "Vaše korisničko ime ostaje, ali će se ukloniti oznaka iz izvorne objave i svih odgovora."),
                o("b00255b6", "Više vas se neće spominjati"),
                o("geea29ee", "Korisnici vas više ne mogu spominjati u tom razgovoru."),
                o("c54678e8", "Više nećete primati obavijesti"),
                o("ga4fa180", "Nećete više primati obavijesti, ali možete vidjeti razgovor."),
                o("h8dde772", "Ako izađete iz razgovora, to nitko neće znati."),
                o("ee87e71c", "Ne možete onemogućiti sami sebe."),
                o("ed428a76", "Prikaz tweetova navedenog korisnika trenutno je omogućen."),
                o("e2d6c17e", "Isključi zvuk ovog razgovora"),
                o("cd1942f4", "Uključi zvuk ovog razgovora"),
                o("bbd8bed6", "Obavijesti za ovaj razgovor su onemogućene"),
                o("c13af432", "Obavijesti za ovaj razgovor su omogućene"),
                o("df744bda", "Onemogući"),
                o("j9552760", "Isključi zvuk razgovora"),
                o("d751694c", "Kada isključite zvuk razgovora, više nećete primati nove obavijesti o njemu."),
                o("a50c911e", "Vaša je objava prikvačena i dodana u istaknute objave."),
                o("d1c1e2c2", "Prikvači u Zajednicu"),
                o("j832cc34", "To će se pojaviti pri vrhu vaše Zajednice."),
                o("h7dbb2f2", "To će se pojaviti pri vrhu vaše Zajednice i zamijeniti prethodno prikvačenu objavu."),
                o("d8725596", "Prikvačili moderatori Zajednice"),
                o("f5cdcc2c", "Taj me oglas ne zanima"),
                o("c2e276e4", "Zabrani autoru pristup Zajednici"),
                o("a95f04ba", "Jeste li sigurni da želite ukloniti oznaku na fotografiji iz te objave?"),
                o("jfc76958", "Ukloni oznaku s fotografije"),
                o("j4e43d8b", function (a) {
                    return "Prijavi " + a.entity;
                }),
                o("e3fd237e", "Prijavi oglas"),
                o("d1e21610", "Prijavite kršenje njemačkog zakona NetzDG"),
                o("d7513755", function (a) {
                    return "Traži objave korisnika @" + a.screenName + " u ovoj zajednici";
                }),
                o("d7dbb71b", function (a) {
                    return a.followType + " na " + a.screenName;
                }),
                o("ja66a2b5", function (a) {
                    return "Prestani pratiti korisnika/cu @" + a.screenName;
                }),
                o("c2423b7b", function (a) {
                    return "Prestali ste pratiti korisnika/cu @" + a.screenName;
                }),
                o("i31dfa4c", "Otkrij odgovor"),
                o("j8e56ba2", "Odgovor je otkriven"),
                o("ic030338", "Otkvači s profila"),
                o("gfcea3f4", "Želite li otkvačiti objavu s profila?"),
                o("eb2d59f4", "To se više neće automatski prikazivati pri vrhu vašeg profila."),
                o("a2dd7414", "Objava je otkvačena s vašeg profila"),
                o("cac6a24a", "Ukloni prikvačenu objavu"),
                o("i642edc4", "Ta se objava više neće pojavljivati pri vrhu sažetka sadržaja Zajednice."),
                o("f9478972", "Prikaži skrivene odgovore"),
                o("c5491b5d", function (a) {
                    return "Prikaz " + a.entity + " sudjelovanja";
                }),
                o("haebcf52", "U ovom vas razgovoru korisnici više ne mogu spomenuti te nećete primati obavijesti."),
                o("c837fcaa", "Prikaži još odgovora"),
                o("d228a9a0", "Prikaži još"),
                o("g0b48670", "Razgovor sadrži previše odgovora, pa ih nije moguće sve prikazati."),
                o("d9b417c4", "Postavi kao „Ne zanima me”"),
                o("c29d6806", "Prestani preporučivati"),
                o("ge8f3043", function (a) {
                    return "Počni pratiti temu " + a.topicName;
                }),
                o("aa576cbf", function (a) {
                    return "Prestani pratiti temu " + a.topicName;
                }),
                o("i77347d1", function (a) {
                    return "Odbaci temu " + a.topicName;
                }),
                o("d69b2d90", "Ne zanima vas ta tema."),
                o("je808a17", function (a) {
                    return "Tema " + a.topicName;
                }),
                o("ic6aa5f4", "Autentičnost je provjerena."),
                o("c02e7e3c", "Učitavanje..."),
                o("c5453f28", "1/64 finala"),
                o("eb256a86", "1/32 finala"),
                o("g77adc66", "Sweet Sixteen"),
                o("a6d2520c", "Sweet 16"),
                o("g5b63eb6", "Elitnih osam"),
                o("d8bf2890", "Elitnih 8"),
                o("f9d3d6f2", "Četvrtfinale"),
                o("bda24f7c", "Četvrtfinale"),
                o("i5043440", "Državno prvenstvo"),
                o("fcb16026", "Prvenstvo"),
                o("e9c89ee8", "Istok"),
                o("h259fd86", "Zapad"),
                o("a7b2545a", "Jug"),
                o("fdf7819a", "Srednji zapad"),
                o("i899e9b0", "Pošaljite par"),
                o("c5b04394", "Prikaz odabira"),
                o("h836bbae", "Prikaz takmičenja"),
                o("e1059d6c", "1. krug"),
                o("b1602be4", "2. krug"),
                o("ef7bc2c0", "20. – 21. ožujka"),
                o("h726aaf2", "22. – 23. ožujka"),
                o("ee7cd198", "27. – 28. ožujka"),
                o("fed91402", "29. – 30. ožujka"),
                o("aba0a450", "5. travnja"),
                o("jdfba2dc", "7. travnja"),
                o("b7c6bc12", "TBD"),
                o("c373612c", "Odabir:"),
                o("e8b3cab9", function (a) {
                    return "" + a.winner;
                }),
                o("j5db9ddd", " umjesto "),
                o("a638617d", function (a) {
                    return "" + a.loser;
                }),
                o("j4c40da4", "Odmah pošalji"),
                o("b23688c8", "Poništi odbrojavanje"),
                o("cca5d499", function (a) {
                    return "Reci mi nešto o ovom u 1 ili 2 rečenice: " + a.selectedText + ".";
                }),
                o("d231a76a", "Osvojite 100.000 USD za najbolji par 🏀"),
                o("heaba5d8", "Osmislite svoj par u sveučilišnoj košarci na platformi X. Savršeni par osvaja putovanje na Mars!"),
                o("i57d3ea0", "Primjenjuju se pravila"),
                o("a0440af6", "Izradite par"),
                o("aaad27c8", "Autor"),
                o("eb748f7e", "Prikaži analitičke podatke za objavu"),
                o("b7cff250", function (a) {
                    return "" + a.displayCoins;
                }),
                o("g62dcfbc", function (a) {
                    return "Novčić" + n(a.count, "i", "", "i");
                }),
                o("be059f7e", "Dosegnite do 100.000 više korisnika već sada"),
                o("c34f845e", "Pokušajte istaknuti tu objavu!"),
                o("c37102aa", "Već danas dosegnite više od 100.000 korisnika koje će vjerojatno zanimati vaš sadržaj."),
                o("ac245c4c", "Istakni vidljivost odmah."),
                o("e4db6326", "Možda poslije"),
                o("g6237a1e", "Aktivno sponzorstvo"),
                o("d6b5949e", "Sponzorstvo je pauzirano"),
                o("ffd9cfe6", "Pogledajte više"),
                o("d172116a", "Otkrijte više"),
                o("be5df69e", "Više objava"),
                o("g11ebd34", "Još prijedloga"),
                o("g4a6901a", "Pregledaj"),
                o("h6453e74", "Pregledajte objave"),
                o("je506a60", "Promjena korisničkog imena"),
                o("c0fcb08a", "Promjena korisničkog imena uzrokovat će privremeno uklanjanje vaše kvačice i povezanih računa dok se ne pregledaju."),
                o("d1f6d336", "Korisničko ime"),
                o("de65c756", "Prijedlozi"),
                o("ebeeac1a", "Promijeni adresu e-pošte"),
                o("dc013356", "Trenutna"),
                o("ea28c7ce", "Učitavanje postavki e-pošte"),
                o("f3f66252", "Dodaj adresu e-pošte"),
                o("i5107de4", "Ažuriraj adresu e-pošte"),
                o("d19fd42a", "Ponovno pošalji poruku e-pošte za potvrdu"),
                o("g4da3246", "Poruka e-pošte je poslana. Provjerite ulaznu poštu u koju će vam uskoro stići veza za potvrdu."),
                o("h021352f", function (a) {
                    return "" + a.resendConfirmationLabel;
                }),
                o("d241169c", "Trenutačna lozinka"),
                o("a9bc3044", "Nova lozinka"),
                o("b8c03cfc", "Potvrdi lozinku"),
                o("b731d32c", "Lozinka je uspješno ažurirana."),
                o("d555d7e0", "Nova lozinka ne može biti jednaka kao postojeća."),
                o("fa8af9ae", "Lozinke nisu podudarne."),
                o("a03f5c73", function (a) {
                    return a.applicationCount + " aplikacij" + n(a.applicationCount, "e", "a", "a");
                }),
                o("j25601d9", "Saznajte više"),
                o("cb841d56", "Promijeni telefon"),
                o("ce37ea44", "Dodaj telefonski broj"),
                o("ibaf239e", "Ažuriraj telefonski broj"),
                o("j2636558", "Izbriši telefonski broj"),
                o("e49b16d4", "Želite li izbrisati telefonski broj?"),
                o("i931719e", "Time ćete taj broj ukloniti s računa te na njega više nećete moći primati obavijesti ni kodove za prijavu."),
                o("j841d1f4", "Telefon je uklonjen."),
                o("fe8b565a", "Time se s tog računa briše telefonski broj te više od platforme X nećete primati obavijesti u obliku SMS poruka. Uz to se na tom računu i isključuje dvostruka provjera autentičnosti."),
                o("hf45b8d4", "Time se s tog računa briše telefonski broj te više od platforme X nećete primati obavijesti u obliku SMS poruka. Uz to se na tom računu i isključuju SMS poruke kao način dvostruke provjere autentičnosti."),
                o("bc262c2e", "Dodatne metode"),
                o("hc1a91da", "Pričuvni kodovi"),
                o("e4fed8f0", "Preuzmite jednokratne sigurnosne kodove da biste se mogli prijaviti na X ako nemate pristup mogućnostima dvostruke provjere autentičnosti."),
                o("b39c7b14", "Želite li onemogućiti provjeru autentičnosti prijave?"),
                o("a923fce6", "Ako isključite provjeru autentičnosti u dva koraka, račun bi mogao biti ugrožen. Želite li je zaista isključiti?"),
                o("ff781e0a", "Želite li to isključiti?"),
                o("c557ac30", "Jeste li sigurni da želite isključiti tu metodu?"),
                o("d133464a", "Tim se isključivanjem s vašeg računa uklanja dvostruka provjera autentičnosti. Želite li zaista isključiti?"),
                o("ee3a7bfa", "Isključi"),
                o("aa9139cc", "Zahtjevi za potvrdu prijave"),
                o("jc22dd42", "Nakon prijave X će poslati automatsku obavijest aplikaciji X koju ćete morati odobriti da biste mogli pristupiti računu."),
                o("a219e218", "U redu"),
                o("e0d79de8", "S vašim računom povezan je samo jedan sigurnosni ključ. Da biste bili sigurni da se račun neće zaključati u slučaju da ključ izgubite, dodajte još jedan te spremite pričuvni kod za provjeru autentičnosti u dva koraka."),
                o("ja6bbfa0", "Učitavanje podataka o provjeri autentičnosti prijave"),
                o("c2570922", "Tekstna poruka"),
                o("fba9483c", "Na mobilni telefon primite SMS poruku s kodom za provjeru autentičnosti koji ćete unijeti prilikom prijave na X."),
                o("ab61b41a", "Aplikacija za provjeru autentičnosti"),
                o("a67c7d68", "U mobilnoj aplikaciji za provjeru autentičnosti primite kod za provjeru autentičnosti koji ćete unijeti prilikom svake prijave na X."),
                o("h6d0d89c", "Sigurnosni ključ"),
                o("b3e5c946", "Upotrijebite sigurnosni ključ koji se umeće u računalo ili sinkronizira s mobilnim uređajem prilikom prijave na X. Potreban vam je podržani mobilni uređaj ili web-preglednik."),
                o("cd195528", "Dodaj novi sigurnosni ključ"),
                o("a1860ee8", "Privremena lozinka"),
                o("j45a2856", "Stvorite jednokratnu privremenu lozinku za korištenje na servisima drugih proizvođača."),
                o("d8612d9c", "Najprije uključite SMS poruke ili aplikaciju za provjeru autentičnosti"),
                o("e13d4468", "Da biste mogli postaviti sigurnosni ključ, kao jednu od metoda dvostruke provjere autentičnosti najprije morate uključiti SMS poruke ili aplikaciju za provjeru autentičnosti."),
                o("c1d96d6a", "Dodali ste maksimalan broj ključeva"),
                o("gf91694e", "Da biste dodali drugi ključ, jedan ćete morati izbrisati."),
                o("j265ddb6", "Potvrdite adresu e-pošte"),
                o("a7cfdf1c", "Da biste uključili dvostruku provjeru autentičnosti, s ovim računom za X potrebno je povezati adresu e-pošte te je potvrditi da bismo znali da ste to zaista vi."),
                o("d7bfde1a", "Čini se da vam je račun trenutno blokiran. Dok vam je račun blokiran, ne možete uključiti dvostruku provjeru autentičnosti."),
                o("g268fbb8", "Za taj je račun potvrđen identitet."),
                o("f66d24be", "Centar za pomoć"),
                o("c8255462", "Sakrijte svoju oznaku potvrđenog identiteta"),
                o("c6e731ee", "Sakrijte svoju oznaku potvrđenog identiteta kako je drugi ne bi vidjlei kada dodirnu plavu kvačicu na stranici vašeg profila."),
                o("be582166", "Provjera osobnog dokumenta može vam pomoći da zaštitite svoj račun od lažnog predstavljanja i dodjeljuje vašem profilu oznaku provjerenog osobnog dokumenta."),
                o("b496bc94", "Pregledavamo vaš službeni osobni dokument. Obavještavat ćemo vas putem obavijesti!\n\nNakon odobrenja dobit ćete oznaku provjerenog službenog dokumenta na profilu kako bi drugi korisnici znali da je vaš račun provjeren putem službenog dokumenta."),
                o("d8f5cce4", "Prekoračili ste ograničenje zahtjeva za provjeru autentičnosti. Pričekajte 24 sata prije ponovnog pokušaja."),
                o("i8427a1e", "Ovaj račun ne ispunjava uvjete za provjeru osobnog dokumenta. Samo pojedinačni pretplatnici na Premium trenutno ispunjavaju uvjete za provjeru osobnog dokumenta."),
                o("cdc65e89", function (a) {
                    return a.title + " (neobavezno)";
                }),
                o("h05c1f28", "Potvrdite svoj račun slanjem osobne iskaznice. Postupak obično traje oko pet minuta."),
                o("j8cfcc62", "Pristajem na to da X i Au10tix upotrebljavaju slike moje osobne iskaznice i mog autoportreta, uključujući izvučene biometrijske podatke, kako bi potvrdili moj identitet, kao i u sigurnosne svrhe platforme X, uključujući sprečavanje lažnog predstavljanja. Au10tix može pohranjivati takve podatke do 30 dana."),
                o("c4930cb6", "Što vam je potrebno:"),
                o("ac7bb0fe", "Pripremite osobnu iskaznicu"),
                o("c12ce69c", "Provjerite je li kamera vašeg uređaja prekrivena i radi li"),
                o("c5bfe94a", "Pripremite se slikati autoportret i svoju osobnu iskaznicu"),
                o("e5b7dd84", "Početak"),
                o("abfaa528", "Preskoči"),
                o("e4fed511", "uslugu X Premium"),
                o("def518fa", "Pretplata na autora sadržaja"),
                o("f61cda83", "Udio u prihodu od oglasa"),
                o("g1952008", "Pretplata za autora sadržaja"),
                o("e5d0419c", "Udio u prihodu za autore sadržaja"),
                o("g3723480", "Pretplata na autora sadržaja"),
                o("c776f523", "Udio u prihodu od oglasa"),
                o("ab9f38f8", "Pretplata za autora sadržaja"),
                o("d5cab8b0", "Udio u prihodu za autore sadržaja"),
                o("deaf5b16", "Pokušaj ponovno"),
                o("g1a4a1b6", "Pogreška prilikom provjere osobnog dokumenta"),
                o("e24305e4", "Vaša sesija provjere identiteta bila je spora ili nevaljana, pokušajte ponovno."),
                o("f7954a0c", "Učitavanje podataka o sigurnosnim ključevima"),
                o("h69986c2", "Sigurnosne ključeve možete preimenovati ili izbrisati."),
                o("i5896ba2", "Dodaj još jedan ključ"),
                o("a8ef2b64", "Sigurnosni ključ bez naziva"),
                o("d4e220b4", "Naziv"),
                o("g6d0f0b6", "Upravljanje sigurnosnim ključem"),
                o("b894f68a", "Učitavanje podataka o sigurnosnom ključu"),
                o("g2601bb6", "Preimenuj ključ"),
                o("b464b726", "Želite izbrisati ključ?"),
                o("a4101e1b", function (a) {
                    return "Dodani datum: " + a.securityKeyAddedDate;
                }),
                o("i3bb3f78", "Pričuvni kod"),
                o("ec6a76e0", "Generiraj novi kod"),
                o("f2c3c31c", "Kopiraj kod"),
                o("e8016b64", "Učitavanje pričuvnog koda"),
                o("c4ca22bc", "Ako izgubite pristup svojem uređaju, pomoću koda možete potvrditi svoj identitet."),
                o("f20ff69f", "Saznajte više"),
                o("j2327f80", "Privremena lozinka"),
                o("fbfeaf8e", "Generiraj novu lozinku"),
                o("h4a8bd12", "Kopiraj lozinku"),
                o("g247dc1c", "Učitavanje privremene lozinke"),
                o("h3a32f52", "Upotrijebite tu privremenu lozinku (razmaci nisu obavezni) da biste se prijavili na X u aplikacijama i na uređajima."),
                o("d70fceac", "Lozinka će isteći za sat vremena."),
                o("j924d222", "Promijenite državu"),
                o("e9310157", "Saznajte više"),
                o("bd5ac12e", "Odaberite željeni jezik za prikaz naslova, gumba i drugog teksta na platformi X na ovom računu. Jezik sadržaja prikazanog na vremenskoj crti neće se promijeniti."),
                o("cef33711", function (a) {
                    return a.languageName + " (beta)";
                }),
                o("b033248c", "Mogućnost pronalaženja"),
                o("c69b4798", "Odredite mogu li vas korisnici koji imaju vašu adresu e-pošte ili telefonski broj pronaći i s vama se povezati na platformi X."),
                o("eca117e6", "Neka vas korisnici koji imaju vašu adresu e-pošte pronađu na platformi X."),
                o("acd36386", "Neka vas korisnici koji imaju vašu adresu e-pošte pronađu i s vama se povežu na platformi X."),
                o("gd8511ca", "Neka vas korisnici koji imaju vaš telefonski broj pronađu na platformi X"),
                o("eca935ec", "Neka vas korisnici koji imaju vaš telefonski broj pronađu i s vama se povežu na platformi X."),
                o("ac77c66c", "Kontakti"),
                o("jadf483e", "Upravljajte kontaktima koje ste uvezli s mobilnih uređaja."),
                o("b864be7a", "Ukloni sve kontakte"),
                o("g5fa1090", "Želite li ukloniti sve kontakte?"),
                o("h3e420fc", "Time ćete ukloniti sve kontakte koje ste prethodno prenijeli te na svim uređajima isključiti sinkronizaciju s platformom X. Imajte na umu da postupak traje neko vrijeme, da se ne može poništiti i da u međuvremenu i dalje možete vidjeti neke prijedloge na platformi X (na temelju kontakata)."),
                o("ca24589e", "Bez naziva"),
                o("d439b1c1", "Saznajte više"),
                o("fe36fe10", "Potvrdite svoju lozinku"),
                o("hccd9dbe", "Da biste došli do tog sadržaja, unesite lozinku."),
                o("df1ddda4", "Oznake lokacije koje ste dodali svojim objavama više neće biti vidljive na adresi X.com, kao ni u aplikaciji X za iOS ni X za Android. Da bi te promjene bile vidljive, može proći neko vrijeme."),
                o("ed7fa034", "Na ovom uređaju lokacijski servisi trenutno nisu omogućeni. Uključiti ih možete u postavkama uređaja."),
                o("e80e4288", "Ukloni sve podatke o lokaciji priložene objavama"),
                o("b0ee8ab6", "Želite li ukloniti sve podatke o lokaciji priložene objavama?"),
                o("e23b2991", "Saznajte više"),
                o("gd758534", "Omogućite korisnicima da vas označe na fotografijama te primite obavijest kada to učine."),
                o("a90af44e", "Sakrij osjetljivi sadržaj"),
                o("a25e2ec6", "Ukloni blokirane i onemogućene račune"),
                o("b827a058", "Ažurirane su postavke sigurnog pretraživanja."),
                o("b27c9852", "Prilikom ažuriranja postavki sigurnog pretraživanja došlo je do pogreške."),
                o("j3402d7e", "To sprječava prikaz objava s potencijalno osjetljivim sadržajem u rezultatima pretraživanja."),
                o("if05bca6", "Upotrijebite ovo za uklanjanje rezultata pretraživanja s računa koje ste blokirali ili onemogućili."),
                o("bc7fd990", "Učitavanje postavki aktualnih tema"),
                o("e2f16650", "Prikaži sadržaj na toj lokaciji"),
                o("e5e88f40", "Kada je ta funkcija uključena, vidjet ćete aktualne događaje u svojoj blizini."),
                o("i4d54b0e", "Aktualne teme za vas"),
                o("ad431584", "Prikaži mi zabavne Grok priče"),
                o("df9f03c8", "Personalizirajte aktualne teme na temelju svoje lokacije i osoba koje pratite."),
                o("c6cf5c7e", "Personalizirajte aktualne teme na temelju svoje lokacije i osoba koje pratite."),
                o("e09358ba", "Pregledajte najnovije priče u zabavnom načinu rada Groka"),
                o("a55db872", "Personalizacija"),
                o("a58170fc", "Grok priče"),
                o("h0b5152e", "Promjena lokacije"),
                o("dfeada5e", "Istraživanje lokacija"),
                o("ac854308", "Pravilnik"),
                o("d429c942", "Pravilnik o aktualnim temama o izborima u SAD-u"),
                o("ede134f2", "Odaberite hoće li se videozapisi i GIF-ovi na ovom uređaju reproducirati automatski."),
                o("b3aab6d4", "Lokacije"),
                o("e53e05e4", "Učitavanje lokacija"),
                o("d5c9174f", function (a) {
                    return a.location + ", " + a.country;
                }),
                o("b47d123d", function (a) {
                    return "UŠTEDI " + a.percentage + "%";
                }),
                o("c6614cc0", "s primjenjivim porezom"),
                o("f8d3b50a", "s porezom"),
                o("i2c32253", function (a) {
                    return a.price + " / mjesečno";
                }),
                o("c41e1023", function (a) {
                    return a.price + " godišnje";
                }),
                o("i57aeafb", function (a) {
                    return "Tijekom prv" + n(a.duration, "a " + a.duration + " mjeseca", "og mjeseca", "ih " + a.duration + " mjeseci") + ", zatim će se godišnje naplatiti " + a.standardPrice;
                }),
                o("ae3e3723", function (a) {
                    return "Tijekom prv" + n(a.duration, "e " + a.duration + " godine", "e godine", "ih " + a.duration + " godina") + ", zatim će se godišnje naplatiti " + a.standardPrice;
                }),
                o("ade4c757", function (a) {
                    return "Zatim " + a.price + " / mj.";
                }),
                o("f7798e11", function (a) {
                    return "Zatim " + a.price + " / g.";
                }),
                o("e0b39888", "Naplaćuje se na mjesečnoj razini"),
                o("b67c37de", "Naplaćuje se na godišnjoj razini"),
                o("a8363765", function (a) {
                    return a.price + " se naplaćuje na godišnjoj razini";
                }),
                o("df3ed1c8", function (a) {
                    return "" + a.standardPrice;
                }),
                o("g261b098", function (a) {
                    return "" + a.standardPrice;
                }),
                o("af66a072", "Prije nego što odete, razmislite o tome što ćete propustiti"),
                o("a092f1ba", "Nastavi otkazivanje"),
                o("g96c7f48", "Prebaci se na drugi plan"),
                o("iccac88e", "Vremenske crte Za tebe i Pratim s upola manjim brojem oglasa"),
                o("d7a124d8", "Bez oglasa"),
                o("d2d22c36", "Pristup značajci Grok"),
                o("j249b1d4", "Isticanje odgovora"),
                o("c4a37384", "Dulje objave"),
                o("fb656858", "Uređivanje objava"),
                o("faaec212", "Zarada od objava"),
                o("fb3c7168", "Mape s knjižnim oznakama"),
                o("b346bc12", "Kvačica"),
                o("je8143e1", function (a) {
                    return "Ostvarite " + a.percentage + " % popusta za X " + a.productName + " tijekom " + n(a.duration, a.duration + " mjeseci", "jednog mjeseca", a.duration + " mjeseci");
                }),
                o("j5847735", function (a) {
                    return "Ostvarite " + a.percentage + " % popusta za X " + a.productName + " tijekom " + n(a.duration, "" + a.duration, "jedne", "" + a.duration) + " godine";
                }),
                o("da3431f9", function (a) {
                    return "Poklanjamo vam mali popust ako biste željeli još malo zadržati X " + a.productName + "!";
                }),
                o("i6fbfc72", "Ekskluzivna jednokratna ponuda"),
                o("f1bc6309", function (a) {
                    return "Zadržite puni pristup svim značajkama platforme X " + a.productName;
                }),
                o("fdb7b52a", "Popust će se obračunati s početkom vašeg sljedećeg ciklusa plaćanja."),
                o("af283938", function (a) {
                    return "" + a.standardPrice;
                }),
                o("c284b365", function (a) {
                    return "" + a.discountedPrice;
                }),
                o("e2673372", function (a) {
                    return "" + a.standardPrice;
                }),
                o("jd2dc103", function (a) {
                    return "" + a.discountedPrice;
                }),
                o("c6150942", "Spremni ste"),
                o("a905eac6", "Istražite Premium uslugu"),
                o("j6083a1c", "Upravljajte svojom pretplatom"),
                o("b4fa4630", "Ažurirajte način plaćanja"),
                o("ef0dfa5a", "Ažurirajte podatke za naplatu"),
                o("f5b352ec", "Otkaži pretplatu"),
                o("j317d958", "Upozorenje – izgubit ćete popust koji je na čekanju"),
                o("a46e42d2", "Zadrži pretplatu"),
                o("e122fb3f", function (a) {
                    return "Vaše besplatno probno razdoblje završava " + a.endDate + ".";
                }),
                o("be103b84", "Aktivan"),
                o("ace43720", "Uskoro istječe"),
                o("c8f18aa4", "Pretplatu na Premium+ primate jer ste pretplatnik značajke Provjerene organizacije."),
                o("a341d1f7", function (a) {
                    return "Pretplatu na Premium+ primate jer je vaša organizacija pretplatnik značajke Provjerene organizacije putem organizacije @" + a.organization + ". Više pojedinosti zatražite od svoje organizacije.";
                }),
                o("e4aaf0f8", "Da biste otkazali besplatnu pretplatu na Premium, obratite se podršci"),
                o("e5170220", "Ovaj je račun dobio besšplatnu Premium pretplatu zbog trošenja na oglašavanje."),
                o("j6d6b66e", "Tom je računu poklonjena pretplata. Da biste otkazali pretplatu, obratite se podršci"),
                o("fae1751f", function (a) {
                    return "Čini se da ste tu pretplatu kupili u " + a.mobilePlatform + " aplikaciji X. Morat ćete njome upravljati ili je otkazati putem te aplikacije.";
                }),
                o("fecebd4c", "ovdje"),
                o("h201c4c2", "iOS"),
                o("i8385a2c", "Android"),
                o("h80834de", "još"),
                o("baf97716", "Vaše će značajke ostati dostupne do kraja razdoblja naplate."),
                o("ae864b69", function (a) {
                    return "Razina vaše pretplate promijenit će se na " + a.tierName + " počevši od sljedećeg ciklusa naplate na datum " + a.date;
                }),
                o("edbb700f", function (a) {
                    return "Započinje sa sljedećim ciklusom naplate " + a.date;
                }),
                o("e9884540", "Aktivan popust"),
                o("bfb879aa", "Popust na čekanju"),
                o("f8321d82", "Sve"),
                o("eb233866", "Uvezeno"),
                o("d23b0404", "Kada nekoga blokirate, ta vas osoba neće moći pratiti niti vam slati poruke te o njoj nećete primati obavijesti."),
                o("e0a7e9bc", "Blokirajte neželjene račune"),
                o("ef731b14", "Učitavanje blokiranih računa"),
                o("e554ba83", "Saznajte više"),
                o("if594962", "Blokirano"),
                o("i2b9632e", "Uspješno deblokirano."),
                o("g51a96de", "Kada nekoga blokirate, ta vas osoba neće moći pratiti niti vam slati poruke, a vi nećete vidjeti njezine obavijesti. Možete uvesti popis računa koje želite blokirati na platformi X."),
                o("j035733c", "Pokrećete postupak deaktivacije računa za X. Vaše zaslonsko ime, @korisničko_ime i javni profil više neće biti vidljivi na adresi X.com, kao ni u aplikacijama X za iOS ni X za Android."),
                o("j4a29d52", "Račun za X koji je slučajno ili neopravdano deaktiviran možete vratiti u roku od 30 dana nakon deaktivacije."),
                o("ea989810", "Deaktiviraj račun"),
                o("f6e73faa", "Deaktiviraj"),
                o("c3743328", "Time ćete deaktivirati svoj račun"),
                o("a20cd24e", "Što biste još morali znati"),
                o("e93b0ae0", "Da biste dovršili deaktivaciju, unesite lozinku povezanu sa svojim računom."),
                o("fc025d1d", "Saznajte više"),
                o("bb5e039c", "postavkama"),
                o("j37efff6", "promijenite ih"),
                o("ce5bfe12", "svoje podatke za X"),
                o("g7088266", "Uredi profil"),
                o("d9d293b8", "Web-mjesto"),
                o("cb469ff6", "Unesite ime"),
                o("g511f468", "Avatar se nije ažurirao jer se neki medijski sadržaji nisu uspjeli prenijeti"),
                o("ec3a116e", "Natpis se nije ažurirao jer se neki medijski sadržaji nisu uspjeli prenijeti."),
                o("j94599ec", "Dodaj fotografiju avatara"),
                o("df31d76a", "Dodaj fotografiju za banner"),
                o("c01a0e1a", "Želite li potvrditi datum rođenja?"),
                o("df2c469a", "Prijeđi na profesionalni profil"),
                o("e1f76978", "Uređivanje profesionalnog profila"),
                o("ic04a6f6", "Ta se radnja ne može poništiti te će se promjene izgubiti."),
                o("addbe8e8", "Razmislite o nazivu bez posebnih znakova da bi bio pristupačan još većem broju ljudi, uključujući slijepe i slabovidne osobe."),
                o("a46f80ab", function (a) {
                    return "Datum rođenja: " + a.birthdate;
                }),
                o("c7905f89", function (a) {
                    return "Godina rođenja: " + a.year;
                }),
                o("bfe8d1a2", "Uređivanje proširene biografije"),
                o("e1ec926e", "Izradi proširenu biografiju"),
                o("c119dee8", "Datum rođenja"),
                o("bbf0afc8", "Dodajte svoj datum rođenja"),
                o("f98d367e", "Želite li urediti datum rođenja?"),
                o("d3f43300", "To se može promijeniti samo nekoliko puta. Obavezno unesite dob osobe koja koristi račun."),
                o("g10411f0", "To mora biti datum rođenja osobe koja koristi račun, čak i ako stvarate račun za tvrtku, događaj ili mačku."),
                o("a0c5e370", "Tko to može vidjeti?"),
                o("i68fe54e", "Mjesec i dan"),
                o("b4e729b6", "Godina"),
                o("f3bb1b48", "Želite li ukloniti datum rođenja?"),
                o("c9cb9972", "Time ćete ga ukloniti iz profila."),
                o("a2bef112", "Ukloni datum rođenja"),
                o("c37622ec", "Unesite valjani datum"),
                o("f679d166", "Osobe koje vas prate"),
                o("af293dc2", "Osobe koje pratite"),
                o("h99b6d08", "Pravilima o privatnosti"),
                o("hce7a225", "Saznajte više"),
                o("e9603d88", "Prikaži oznaku za potvrđeni telefonski broj"),
                o("ada99498", "Tu će oznaku vidjeti samo korisnici u vašoj regiji."),
                o("a765e936", "Izbrišite proširenu biografiju"),
                o("d4d68e44", "Spremljeno"),
                o("ie4f57d2", "Obnovite pretplatu na Premium"),
                o("h293aa52", "Vaša pretplata na Premium istječe!"),
                o("j1923668", "Zadržite najbolje značajke platforme X."),
                o("ac7e97ee", "Obnovite pretplatu"),
                o("f70c69b4", "Isticanje odgovora, uređivanje objave, prilagodba, dulje objave i još puno toga."),
                o("f4cec4d2", "Plava kvačica, isticanje odgovora, povećana ograničenja za Grok i još puno toga."),
                o("b6de83a0", "Prostor samo za zaposlenike"),
                o("g3f251f2", "Privatni prijenos uživo"),
                o("d08666ba", "Privatni prostor"),
                o("eadb5a46", "Uključite se prvi"),
                o("f9629a8f", function (a) {
                    return "Prijenos uživo korisnika/ce " + a.hostName;
                }),
                o("ia3c0ab7", function (a) {
                    return "Prostor korisnika/ce " + a.hostName;
                }),
                o("hd552761", function (a) {
                    return "Vodi " + a.hostName;
                }),
                o("c3ea19a5", function (a) {
                    return a.index + " od " + a.total;
                }),
                o("a5235305", function (a) {
                    return "Sudionici: " + a.listOfPeople;
                }),
                o("df9f8243", function (a) {
                    return "Sluša " + a.name;
                }),
                o("g2445c2f", function (a) {
                    return "Govori " + a.name;
                }),
                o("fcfd5a67", function (a) {
                    return "Voditelj je " + a.name;
                }),
                o("f7882829", function (a) {
                    return "Suvoditelj je " + a.name;
                }),
                o("d961a4a0", "Uživo na platformi X"),
                o("g2c0144a", "Provjerene organizacije"),
                o("cd5cdec8", "Upravljajte kreditom za oglase"),
                o("f23b6a72", "Preostali kredit za oglase"),
                o("i969d5de", "Postavite reklamnu kampanju"),
                o("d0924f58", "Dobijte podršku u vezi s problemom"),
                o("j8d53b64", "Prikaz svih značajki"),
                o("jd26f2a6", "Dodajte povezane račune"),
                o("e0a492e6", "Upravljajte svojim poslovima"),
                o("d9cbd02c", "Vaša se prijava pregledava"),
                o("ed4759a6", "Bit ćete obaviješteni o rezultatu vašeg zahtjeva za nekoliko dana. Možemo od vas zatražiti dodatne podatke putem e-pošte."),
                o("dad69faa", "Ažurirajte način plaćanja"),
                o("daf3248a", "Zahtjev nije potpun"),
                o("eb71036f", function (a) {
                    return "Prenesite i potvrdite dokumente organizacije do " + a.date;
                }),
                o("a1d3f1f2", "Sklopili smo partnerstvo s tvrtkom Persona radi provjere vašeg identiteta i poslovnih dokumenata u svrhe sigurnosti na platformi X. Persona može pohranjivati vaše podatke do 30 dana."),
                o("ea8c295a", "Započnite provjeru dokumenata"),
                o("da1aa48f", function (a) {
                    return "Provjera autentičnosti poboljšava vašu vjerodostojnost i vidljivost, kao za korisnika @" + a.screenName + ".";
                }),
                o("e4a7a968", "Vaš račun još nije provjeren"),
                o("id9c1e82", "Taj je profil provjeren"),
                o("d43b0edc", "Priključite se krugu provjerenih korisnika"),
                o("d4ea0ed4", "Preuzmite svoju plavu značku"),
                o("cffeaeae", "Potvrdite svoj račun"),
                o("b8e930fe", "Trenutno aktualno"),
                o("ae05f268", "Aktualne teme nisu dostupne."),
                o("c6b51af8", "Novi ste na platformi X?"),
                o("ie8e1ffc", "Odmah se registrirajte i dobit ćete vlastitu personaliziranu vremensku crtu!"),
                o("fd6473fa", "Učitavanje preporuka za osobe koje biste mogli pratiti"),
                o("a526aa66", "Koga pratiti"),
                o("ef625010", "Moglo bi vam se svidjeti"),
                o("b7388a56", "Podnožje"),
                o("hdabc3fc", "Uvjeti pružanja usluge"),
                o("bc6efc72", "Pravila o privatnosti"),
                o("h3161192", "Pravilnik o korištenju kolačića"),
                o("a7de64de", "Informacije o oglasima"),
                o("jb0a4c36", "Blog"),
                o("ce6d095a", "Posao"),
                o("e0adec82", "Resursi za robne marke"),
                o("df1b7550", "Marketing"),
                o("he258678", "X za tvrtke"),
                o("c6f58084", "Razvojni inženjeri"),
                o("d83f18d2", "Direktorij"),
                o("hc5aa17c", "Preuzmite aplikaciju X"),
                o("j0693948", "Preuzmite aplikaciju Grok");
            o("fbf83158", "Upozorenje: plaćanje nije uspjelo"),
                o("jadeb4da", "Hitno ažurirajte način plaćanja prije nego što izgubite pogodnosti pretplate."),
                o("bce3726a", "Ažurirajte podatke za naplatu"),
                o("fce9ecce", "Preporučeni videozapisi"),
                o("efe6ef9e", "Prikaži objavu"),
                o("b3d183ce", "Objava s odgovorima"),
                o("c299a6c0", "Nit razgovora"),
                o("h3d5d79e", "Objava u zajednici"),
                o("cfe877ca", "Odaberite račune koje želite pratiti"),
                o("e06b864c", "Izgleda da vam se sviđa taj razgovor"),
                o("a078ff70", "Želite vidjeti još sadržaja korisnika s kojima ste razgovarali u toj niti? Otkrijte sadržaj na novim računima."),
                o("cb80300e", "Prijeđi na vremensku crtu naslovnice"),
                o("ea5cd098", "Prijeđi na aktualne teme"),
                o("c67e3fc2", "Vremenska crta na naslovnici"),
                o("d601fc20", "Najnovije"),
                o("j43f99be", "Važnost"),
                o("ad6e11ac", "Sortiraj odgovore"),
                o("b2311b70", "Ovaj vam sadržaj nije dostupan"),
                o("j88f27d8", "Relevantne osobe"),
                o("i31dcd22", "Članak"),
                o("e3de2f6f", function (a) {
                    return "Stavka " + a.entity + " dodana je u knjižne oznake";
                }),
                o("e64de8a9", function (a) {
                    return "Stavka " + a.entity + " uklonjena je iz knjižnih oznaka";
                }),
                o("d6d9aab6", "Dodaj knjižnu oznaku"),
                o("bb89cf46", "Ukloni knjižnu oznaku"),
                o("a739d4ba", "Dodaj u mapu s knjižnim oznakama"),
                o("d5270434", "Izlaz"),
                o("ac85c6b2", "Prilikom učitavanja slike došlo je do pogreške"),
                o("b327c12a", "Slika"),
                o("ic76bdf0", "Ponovno kreirajte pomoću značajke Grok"),
                o("a4d3eb67", function (a) {
                    return a.fullName + " na platformi X: „" + a.tweetText + "”";
                }),
                o("f0701753", function (a) {
                    return "Sakrij na ovoliko dana: " + a.number;
                }),
                o("j7d0e836", "Proširi"),
                o("d227d19e", "Sažmi"),
                o("h367e724", "Proširena biografija"),
                o("ea5928d4", "Vaše su vještine raznolike. A takav je i vaš profil.\nDodajte proširenu biografiju da biste više toga otkrili o sebi."),
                o("h7ef9dc8", "To može uključivati sljedeće:"),
                o("c04ba4b4", "projekte na kojima radite i koje želite predstaviti"),
                o("d7666008", "vaš legendarni recept za tjesteninu"),
                o("cb24ee16", "radno iskustvo i željeni razvoj karijere"),
                o("a1c93d74", "Izgleda da se prilikom spremanja promjena dogodio problem. Pokušajte ponovno poslije."),
                o("b956c04a", "Jeste li sigurni da želite izbrisati proširenu biografiju?"),
                o("ifb23caa", "Ako je obrišete, proširena biografija uklonit će se s profila."),
                o("c2333081", function (a) {
                    return a.count + " znak" + n(a.count, "a", "", "ova");
                }),
                o("a2b8c54c", "Izbrisano"),
                o("a9cc8f96", "Prekoračen je maksimalan broj znakova"),
                o("eb7710f1", function (a) {
                    return a.years + " godin" + n(a.years, "e", "a", "a");
                }),
                o("bfc38bb5", function (a) {
                    return a.months + " mjesec" + n(a.months, "a", "", "i");
                }),
                o("h6a724ac", "Jeste li sigurni da želite to izbrisati?"),
                o("f94aacae", "Brisanjem će se ukloniti s vašeg profila."),
                o("je07e266", "Skriveno"),
                o("a622dfcc", "Radno iskustvo"),
                o("a6ec7ff8", "biografija"),
                o("eeb6d22c", "iskustvo"),
                o("eba5a8ec", "Naziv radnog mjesta"),
                o("fd20adb8", "Trenutačno tu radim"),
                o("cd3059f2", "Datum početka"),
                o("b86019ae", "Datum završetka"),
                o("eedfd35c", "Tvrtka"),
                o("caa46e54", "Naziv tvrtke"),
                o("e893fe6e", "Izradi tvrtku"),
                o("j1c09ca4", "Web-mjesto tvrtke"),
                o("hd332c96", "Naziv radnog mjesta je obavezno polje"),
                o("d2fb1b80", "Tvrtka je obavezno polje"),
                o("b3590132", "Datum početka i završetka obavezna su polja"),
                o("debb6abe", "Datum početka ne može biti u budućnosti"),
                o("j7d08ada", "Datum završetka ne može biti u budućnosti"),
                o("a8c7d3fc", "Datum završetka mora biti nakon datuma početka"),
                o("b335d507", function (a) {
                    return "Prekoračili ste maksimalan broj znakova (" + a.maxChars + ")";
                }),
                o("j29ab120", "Onemogućivanje obavijesti sljedećih korisnika:"),
                o("jdfc82f6", "Korisnici koje ne pratite"),
                o("cfcda0e6", "Korisnici koji vas ne prate"),
                o("c75b9b2a", "Korisnici koji imaju novi račun"),
                o("f39b9c9e", "Korisnici koji imaju zadanu fotografiju profila"),
                o("d227f940", "Korisnici koji nisu potvrdili adresu e-pošte"),
                o("b210936e", "Korisnici koji nisu potvrdili broj telefona"),
                o("ed0df10b", "Saznajte više"),
                o("dcef34ac", "Uključi"),
                o("a39f706e", "Vaš preglednik ne podržava automatske obavijesti"),
                o("h4f20d0e", "Primajte automatske obavijesti da biste znali što se događa čak i kada niste na platformi X. Isključite ih kad god poželite."),
                o("cdce0394", "Taj se odabir odnosi na sve račune koje koristite u ovom pregledniku."),
                o("b39bcae2", "Uključi automatske obavijesti"),
                o("b50f6144", "Da biste primali obavijesti čim se nešto dogodi, uključite automatske obavijesti. Primat ćete ih i kad niste na platformi X, a isključiti ih možete kad god poželite."),
                o("fe11b3ea", "Nepodržani preglednik"),
                o("a1245d3a", "Čini se da vaš preglednik ne podržava automatske obavijesti."),
                o("f580c738", "Želite li uključiti obavijesti?"),
                o("i951fbcc", "Da biste dobivali obavijesti s platforme X, najprije ih morate omogućiti u postavkama preglednika."),
                o("ec7cb554", "Kada uključite obavijesti o objavama od osoba koje pratite, dobivat ćete automatske obavijesti o njihovim objavama i videozapisima uživo."),
                o("b68050dc", "Prikaz korisnika"),
                o("af045060", "Povezano s vama i vašim objavama"),
                o("cf378ff8", "Od platforme X"),
                o("f823bbbe", "Samo za provjerene račune"),
                o("a40e37f2", "Primajte poruke e-pošte da biste znali što se događa čak i kada niste na platformi X. Isključite ih kad god poželite."),
                o("e8eb54a0", "Tjedna izvješća za vaš račun"),
                o("ib80b0f2", "Nove obavijesti"),
                o("ba58e6b0", "Objave su vam poslane e-poštom"),
                o("fae2c81a", "Najpopularnije objave i priče"),
                o("f7b09bb4", "Obavijesti o rezultatima vaših objava"),
                o("d3978554", "Novosti o ažuriranjima proizvoda i značajki platforme X"),
                o("bdccb81c", "Savjeti za maksimalno iskorištavanje mogućnosti koje X pruža"),
                o("c3d47fe6", "Sadržaj koji ste propustili od posljednje prijave na X"),
                o("af8caf3e", "Novosti o platformi X na proizvodima partnera i drugim servisima trećih strana"),
                o("hc076ee4", "Sudjelovanje u istraživačkim anketama na platformi X"),
                o("ddfe3776", "Prijedlozi za preporučene račune"),
                o("d17ba8c2", "Prijedlozi utemeljeni na osobama koje ste nedavno počeli pratiti"),
                o("bcf50a1a", "Savjeti za poslovne proizvode platforme X"),
                o("fcad1e2e", "Svaki dan"),
                o("h9e0dfde", "Svaki tjedan"),
                o("e26d98ac", "Povremeno"),
                o("h0c94842", "Budite u toku"),
                o("c460d332", "Kada za neki račun uključite obavijesti o objavama, znat ćete kad objavi objavu, emitira uživo i vodi Prostor."),
                o("a820d092", "Učitavanje korisnika koje pratite"),
                o("ha45c9e4", "Obavijesti o objavama"),
                o("bdbf8f4e", "Unesite riječ ili izraz"),
                o("h43e2ea8", "Onemogućena riječ"),
                o("da8c0440", "Onemogući od"),
                o("defb4aaa", "Od svih korisnika"),
                o("e7d47b00", "Od korisnika koje ne pratite"),
                o("d9d6e10e", "Trajanje"),
                o("gfa5008e", "Produljivanje vremena onemogućivanja"),
                o("c5595dfe", "Promijeni vrijeme onemogućivanja"),
                o("he6804e0", "Dok ne omogućite riječ"),
                o("a268406c", "24 sata"),
                o("fc638aa2", "7 dana"),
                o("b8971cfa", "30 dana"),
                o("cc7bedfc", "Razdoblje tijekom kojeg će ova stavka biti onemogućena možete promijeniti. Ako ste prije odabrali „Zauvijek”, novo razdoblje koje odaberete započet će odmah."),
                o("d768049c", "Dodaj onemogućenu riječ"),
                o("c6203da8", "Mogućnosti za onemogućenu riječ"),
                o("e3f0d3db", function (a) {
                    return 'Riječ "' + a.keyword + '" onemogućena je';
                }),
                o("h5746cf7", function (a) {
                    return "Ključna riječ „" + a.keyword + "” ažurirana je";
                }),
                o("d2693eb8", "Onemogućeni izraz ne smije biti dulji od 140 znakova."),
                o("f8488024", "To je prilično česta riječ i pojavljuje se u mnogim objavama, no možete je onemogućiti ako želite."),
                o("deb4924d", "Saznajte više"),
                o("aa09e528", "Dodaj onemogućene riječi"),
                o("e506aa92", "Dodajte onemogućenu riječ ili izraz"),
                o("cbd04965", function (a) {
                    return 'Riječ "' + a.keyword + '" omogućena je';
                }),
                o("eb4e810a", "Isteklo"),
                o("cabeb6c2", "Zauvijek"),
                o("f9bce916", "Onemogućivanje riječi"),
                o("gfe0ee3b", "Saznajte više"),
                o("ba4aaa9e", "Želite li izraz onemogućiti?"),
                o("f837ed7e", "Taj će izraz odsad biti omogućen u obavijestima i na vremenskoj crti naslovnice."),
                o("a6194d10", "Učitavanje onemogućenih računa"),
                o("bcf6ad9a", "Objave s onemogućenih računa neće se prikazivati na vašoj vremenskoj crti naslovnice. Onemogućite račune izravno putem njihovih profila ili objava."),
                o("b8e49590", "Kada račune onemogućite, njihove poruke filtrirat će se i premjestiti na kraj popisa zahtjeva za poruke."),
                o("ec202165", "Saznajte više"),
                o("gde6b425", function (a) {
                    return a.name + " je onemogućen(a)";
                }),
                o("e308019b", function (a) {
                    return a.name + " je omogućen(a)";
                }),
                o("hfb77cf6", "Sigurnost"),
                o("f350f0c0", "Preporučeno"),
                o("fd3369a2", "Odaberite jezike na kojima želite primati preporučene objave, osobe i aktualne teme."),
                o("hfc86556", "Onemogućeno"),
                o("dae57a42", "Dopusti sve"),
                o("i7cbc154", "Dopusti neke"),
                o("d623aecc", "Dijelite račun s korisnicima koji imaju delegirane uloge."),
                o("f3029d5c", "Kada je ta postavka uključena, korisnici vam mogu slati pozivnicu za dijeljenje svog računa."),
                o("cd1305e8", "Omogućite ostalima da vam pošalju pozivnicu za svoj račun"),
                o("j339ef22", "Omogućite svima da vam šalju pozivnice"),
                o("g4b0c2dc", "Slanje pozivnica omogućite samo osobama koje vas prate"),
                o("d9aef256", "Vaša delegiranja"),
                o("afb3ccf6", "Nemoj dopustiti"),
                o("dfae5248", "Želite li drugim korisnicima onemogućiti da vam šalju pozivnice za svoj račun?"),
                o("b9c91524", "Više nećete dobivati pozivinice za druge delegacije. I dalje ćete moći pristupiti postojećim delegacijama."),
                o("c349b958", "Pošaljite pozivnicu članu"),
                o("e177f72a", "Pošaljite ostalima pozivnice da u vaše ime izvršavaju radnje za taj račun i upravljaju ulogama za račun. Članovi mogu slati privatne poruke, objavljivati objave i stvarati Popise, kao i pregledavati ih."),
                o("cd5c5e73", function (a) {
                    return "Možete imati najviše " + a.numDelegatesLabel + " delegiran" + n(a.numDelegates, "a računa", "i račun", "ih računa");
                }),
                o("efee0a50", "Pozovite člana na ovaj račun"),
                o("ja0a1aa6", "Pozovite suradnika na ovaj račun"),
                o("db4f623a", "Dodjela uloge tom članu"),
                o("be7350e3", function (a) {
                    return "Želite li dodijeliti ulogu administratora korisniku/ci @" + a.screenName + "?";
                }),
                o("b7aa7642", "Pozivnica je poslana"),
                o("edbca224", "Slanje pozivnice"),
                o("f4834ca6", "Pozovite još jednog člana"),
                o("cb04a824", "Suradnik"),
                o("d4b3abde", "Suradnici mogu slati privatne poruke, objavljivati i izrađivati popise. Suradnici mogu i prikazivati privatne poruke, objave i Popise računa."),
                o("b92e2700", "Administratori imaju iste dozvole kao suradnici. Mogu i slati pozivnice za suradnike za taj račun ili uklanjati suradnike s njega te vidjeti analitičke podatke o objavi."),
                o("hbbbf908", "Administratori mogu slati pozivnice drugim suradnicima za taj račun te vidjeti analitičke podatke o objavi. Ponovno provjerite dodjeljujete li ulogu odgovarajućoj osobi."),
                o("d8eda249", function (a) {
                    return "Kad @" + a.screenName + " prihvati pozivnicu, moći će surađivati na ovom računu sa svojim ažuriranim dozvolama.";
                }),
                o("b5faf216", "Član ne dopušta pozivnice za platformu za delegiranje uloga."),
                o("hcc3b4ce", "Taj je član blokiran na vašem računu."),
                o("ace0f0a4", "Član je ograničio tko ga može pozvati na platformu za delegiranje uloga."),
                o("c2e8f726", "Administratori"),
                o("fade0942", "Administratori mogu i slati pozivnice za suradnike za taj račun ili uklanjati suradnike s njega te vidjeti analitičke podatke o objavi."),
                o("b7d6e5d6", "Suradnici"),
                o("cd76a282", "Još niste dodali članove"),
                o("db25d796", "Promijenite ulogu ovoga člana"),
                o("e4133790", "Uloga je ažurirana"),
                o("a1a27c26", "Promjena uloge"),
                o("fd7b1b1c", "Natrag"),
                o("ec67d021", function (a) {
                    return "@" + a.screenName + " može djelovati u ime ovog računa sa svojim novim dozvolama.";
                }),
                o("h502484e", "Pozivnica na čekanju"),
                o("a171ca7c", "Povlačenje pozivnice za člana"),
                o("f68f079c", "Promijeni ulogu"),
                o("b2794e9e", "Ukloni iz grupe"),
                o("gca83d6a", "Više neće biti administrator za taj račun."),
                o("b8cac21c", "Više neće biti suradnik za taj račun."),
                o("hd67c2e8", "Povuci pozivnicu"),
                o("f0bd8ca9", function (a) {
                    return "Želite ukloniti korisnika/cu @" + a.screenName + "?";
                }),
                o("a33eba47", function (a) {
                    return "Želite li povući pozivnicu za korisnika/cu @" + a.screenName + "?";
                }),
                o("d472c9eb", function (a) {
                    return "Korisnik/ca @" + a.screenName + " uklonjen(a) je iz grupe";
                }),
                o("h5951997", function (a) {
                    return "Povučena je pozivnica za korisnika/cu @" + a.screenName;
                }),
                o("a44c6034", "Pozivnice na čekanju"),
                o("e39bc936", "Kao član možete slati privatne poruke, objavljivati i stvarati Popise te ih pregledavati. Administratori također mogu slati pozivnice za suradnike za taj račun ili uklanjati suradnike s njega te vidjeti analitičke podatke o objavama."),
                o("h0d3bddc", "Pristup za administratore"),
                o("c54aafb0", "Pristup za suradnike"),
                o("idc35f32", "Nije vam delegiran nijedan račun"),
                o("fab787b4", "Izađi s računa"),
                o("bfbe9620", "Prikaži članove"),
                o("d52a2b36", "Više nećete biti administrator za taj račun."),
                o("df515932", "Više nećete biti suradnik za taj račun."),
                o("cd00ea21", function (a) {
                    return "Želite izaći s računa @" + a.screenName + "?";
                }),
                o("efa88ab1", function (a) {
                    return "Izašli ste iz računa @" + a.screenName;
                }),
                o("c6dae164", "Prihvati pozivnicu"),
                o("f8376170", "Odbij pozivnicu"),
                o("a68c45e4", "Odbij"),
                o("aa35b48d", function (a) {
                    return "Želite odbiti pozivnicu korisnika/ce @" + a.screenName + "?";
                }),
                o("ed2a4b05", function (a) {
                    return "Odbili ste pozivnicu za račun @" + a.screenName;
                }),
                o("e73f9635", function (a) {
                    return "Prihvatili ste pozivnicu za račun @" + a.screenName;
                }),
                o("d2da668c", "Delegiranje članova"),
                o("ddf27b8e", "Pošalji pozivnicu za suradnika"),
                o("jba63182", "Pogledajte uloge članova za taj račun. Članovi mogu slati privatne poruke, objavljivati i stvarati Popise, kao i vidjeti ih."),
                o("af59527e", "Pogledajte uloge članova i pošaljite pozivnicu suradnicima za taj račun. Članovi mogu slati privatne poruke, objavljivati i stvarati Popise, kao i vidjeti ih."),
                o("eafcc76a", "Čemu ta aplikacija smije pristupiti..."),
                o("j3998a16", "Što ta aplikacija smije..."),
                o("a6845663", function (a) {
                    return "Te ste dozvole za aplikacije odobrili " + a.date;
                }),
                o("b2347f7c", "Učitavanje podataka aplikacije"),
                o("e1fda16e", "Niste povezali ovu aplikaciju"),
                o("b8f3ed46", "Kada s računom za X povežete aplikaciju treće strane, toj aplikaciji dajete pristup korištenju vašeg računa."),
                o("gb8d09ba", "Ima pristup vašoj adresi e-pošte"),
                o("g6dc09a0", "Dozvole"),
                o("a6e6e898", "Samo za čitanje"),
                o("cde3b9ae", "Čitanje i zapisivanje"),
                o("g0d7813a", "Čitanje, zapisivanje i privatne poruke"),
                o("c9b35b9e", "Pročitajte svoje podatke o oglašavanju"),
                o("e0191264", "Pročitajte i stvarajte svoje podatke o oglašavanju te upravljajte njima"),
                o("b73e1e8a", "Saznajte kako ukinuti pristup"),
                o("c174e46e", "Prikaži manje"),
                o("a39075ff", function (a) {
                    return "Još " + a.n;
                }),
                o("da6cdba8", "Ukini dozvole za aplikacije"),
                o("ef1d3dcc", "Prijavi aplikaciju"),
                o("d64e29c6", "Odjava s prikazanog uređaja"),
                o("idfa01cc", "Želite li se odjaviti s prikazanog uređaja?"),
                o("f400075e", "Time ćete završiti aktivnu sesiju na platformi X te ćete se morati ponovno prijaviti da biste započeli novu."),
                o("e04ba39c", "Datum i vrijeme"),
                o("eed75824", "Završili ste aktivnu sesiju na platformi X."),
                o("ddcd3d26", "Učitavanje podataka sesije"),
                o("d2f0f3fe", "Ne možemo pronaći tu sesiju"),
                o("ga05517a", "Niste stvorili nijednu prijavu"),
                o("ea1715c0", "Kad ih dodate, prikazat će se ovdje."),
                o("b70a2cde", "Takve osjetljive medijske sadržaje identificiramo pomoću tehnologije, pa ih možda nećemo pravilno prepoznati svaki put, iako se neprekidno poboljšavamo."),
                o("ee320a07", "pravilniku o osjetljivom medijskom sadržaju"),
                o("ffeb836a", "Postavke nisu dostupne"),
                o("f2fb9746", "Te postavke nisu dostupne jer se odnose na neobavezne kolačiće. Budući da ste već odlučili da ih nećete prihvatiti, koristimo samo kolačiće koji na vašem uređaju prikupljaju nužne podatke."),
                o("aa4342be", "Eksplicitno nasilje"),
                o("jfec3aa0", "Sadržaj za odrasle"),
                o("j6bacd6a", "Sakrijte medijski sadržaj s oznakom eksplicitnog nasilja dok ga ne odlučite pogledati. U aplikaciji X za iOS taj se medijski sadržaj uopće neće prikazati."),
                o("a73e66a8", "Sakrijte medijski sadržaj s oznakom sadržaja za odrasle dok ga ne odlučite pogledati. U aplikaciji X za iOS taj se medijski sadržaj uopće neće prikazati."),
                o("fef1b8dc", "Sakrijte medijski sadržaj s oznakom osjetljivog sadržaja dok ga ne odlučite pogledati. U aplikaciji X za iOS taj se medijski sadržaj uopće neće prikazati."),
                o("d0a5a1c0", "Upozorenje"),
                o("ga197e26", "Prikaži sve"),
                o("eb723386", "Nikad to nemoj prikazati"),
                o("ea31c622", "To obuhvaća medijski sadržaj koji eksplicitno prikazuje smrt, nasilje, teške tjelesne ozljede ili medicinske zahvate."),
                o("e40985c4", "To obuhvaća medijski sadržaj koji je proizveden i distribuiran s pristankom svih uključenih, s pornografskom svrhom odnosno svrhom izazivanja spolnog uzbuđenja."),
                o("h7e0672b", "postavkama medijskog sadržaja"),
                o("de9f111a", "Upravljanje postojećom pretplatom"),
                o("d5839f9e", "Pregledajte uvjete ili pretplatom upravljajte putem računa za Stripe."),
                o("a840c22c", "Upravljanje postojećom pretplatom na Premium"),
                o("e31456f8", "Promjena razine"),
                o("a7c4ecea", "Iskusite vremensku crtu Za vas bez oglasa, otključajte sve značajke i dobijte najveće isticanje odgovora."),
                o("h15cc518", "Istražite mogućnosti razina i odaberite mjesečni ili godišnji plan."),
                o("ce70c590", "Upravljajte oznakama povezanih računa"),
                o("a49e1b2a", "Sortirajte povezane račune"),
                o("e2daf93c", "Prva značka prikazat će se na svim objavama."),
                o("ab8089ea", "Promijeni redoslijed"),
                o("e0221c42", "Bolje okruženje za čitanje na platformi X i izvan nje."),
                o("adcaa214", "Pogledajte članke koje su osobe koje pratite najviše dijelile."),
                o("b62d6e4c", "Alat za čitanje"),
                o("acf63cd2", "Odaberite željenu veličinu teksta za čitanje niti razgovora. Uključite značajku alata za čitanje na bilo kojoj objavi u niti razgovora odabirom gumba na knjizi."),
                o("e5fff0c8", "Pretplata vam je aktivna."),
                o("ac057b4e", "Da biste otkazali besplatnu pretplatu za sudjelovanje na platformi X, obratite se podršci"),
                o("ib8ebf3b", function (a) {
                    return "Izgleda da ste tu pretplatu kupili na " + a.mobilePlatform + " uređaju, stoga putem te iste platforme pretplatom upravljate ili je otkazujete.";
                }),
                o("i8132774", "Bonus sadržaj za najvjernije korisnike koji vas prate"),
                o("a1222584", "Zaradite novac izravno od svog sadržaja"),
                o("df837dac", "Očekivana zarada / prag za isplate"),
                o("df29646e", "Prag za isplate"),
                o("b0ac642a", "Isplate na račun sjedaju u roku od 90 dana."),
                o("c747df1c", "Postavite podatke za isplatu"),
                o("ac814a76", "Još niste postavili podatke za isplatu."),
                o("f139168e", "Nadzorna ploča s prihodom"),
                o("ee0510c2", "Povijest isplata"),
                o("c9b82b4c", "Prijava je prihvaćena · Postavite svoju pretplatu"),
                o("ibb5e1c8", "Prijava je odbijena"),
                o("b255df58", "Prijava je poslana · Čeka pregled"),
                o("b3f834c8", "Prijava je stavljena na listu čekanja"),
                o("i14be2c6", "Očekivana zarada"),
                o("fd74390a", "Provjeren identifikacijski dokument autora sadržaja"),
                o("e8dc82e2", "Aktivni programi"),
                o("c12c5eb6", "Dostupni programi"),
                o("j53f5eb0", "Autori sadržaja koji ispunjavaju uvjete mogu se prijaviti za mjesečne pretplate i udio u prihodu od oglasa"),
                o("e9c1273a", "Autori sadržaja koji ispunjavaju uvjete mogu se prijaviti za mjesečne pretplate i udio u prihodu za autore sadržaja."),
                o("jd176c82", "Isplate nisu podržane u vašem području"),
                o("d6ff74ca", "Nažalost, naš pružatelj usluge plaćanja još ne podržava isplate u vašoj zemlji. Neki programi monetizacije nisu dostupni."),
                o("e89cdac0", "Upravljajte računom za isplatu"),
                o("dd7a54b4", "Postavite račun za Stripe"),
                o("jff3ab68", "Potvrda identiteta"),
                o("j2876824", "Potvrdite svoj identitet"),
                o("ebd06fb0", "Identifikacijski dokument je poslan"),
                o("f65b960c", "Pregledavamo vašu osobnu iskaznicu za program autora sadržaja."),
                o("i4a1e936", "Da biste primili isplatu, povežite ili izradite novi račun za Stripe"),
                o("f5931b6a", "Provjera identiteta obavezna je za sudjelovanje u programu autora sadržaja. Ako ste prethodno poslali identifikacijski dokument za program autora sadržaja, ne morate ga poslati ponovno."),
                o("c8798a95", "ovdje"),
                o("d809ac49", "ovdje"),
                o("bbe09d38", "Zahtjev je prihvaćen · Čeka se konfiguracija u trgovinama aplikacija"),
                o("efbc5066", "Provjera autentičnosti ID-ja na čekanju"),
                o("hc7631da", "Niste dovršili postavljanje računa za Stripe"),
                o("h72d71a2", "Ispunjavate uvjete"),
                o("e12b0b16", "Još ne ispunjavate uvjete"),
                o("a1e57106", "Nepotpuno"),
                o("i51b4e22", "Odbijeno"),
                o("h5bd7160", "Ovaj račun nije kvalificiran za provjeru osobnog dokumenta."),
                o("e32040c4", "Da biste primali isplate, morate dovršiti provjeru autentičnosti ID-ja."),
                o("j8769b42", "Pregledavamo vašu osobnu iskaznicu."),
                o("be955554", "Dijeljenje prihoda za autore sadržaja"),
                o("b03a3d62", "Udio u prihodu od oglasa"),
                o("cbbe29c2", "Na dobrom ste putu za isplate"),
                o("g97a2d6c", "Saznajte više"),
                o("f30774ea", "Ovdje saznajte više o našim programima i pravilima monetizacije."),
                o("aea0b11a", "Zarađujte na platformi X omogućavajući drugima da se pretplate na vaš mjesečni sadržaj."),
                o("bce47f48", "Ostvarujte prihod na platformi X od sudjelovanja korisnika u vašim objavama."),
                o("h7a68080", "Ostvarite dohodak od oglasa koji se prikazuju u odgovorima na vaše objave."),
                o("eefd091e", "Potrebna je potvrda identiteta"),
                o("cd616a5a", "Za sudjelovanje u programu za autore sadržaja potrebna je provjera identiteta."),
                o("cce8c40a", "Provjeri autentičnost ID-ja"),
                o("ja73ebac", "Prihod"),
                o("h16eeb42", "Upravljanje"),
                o("bc43a32e", "Zadnja aktivnost"),
                o("i4c3b046", "Trenutno nemate novih novčića."),
                o("ca516a66", "Pogledaj svu aktivnost"),
                o("ee9ea930", "Dijamanti"),
                o("cf3b535e", "Dijamanti se dobivaju za prikupljene novčiće za objave koje ispunjavaju uvjete. Novac zarađen od dijamanata dodaje se procijenjenoj zaradi."),
                o("fbb7764b", function (a) {
                    return a.count + " Novčić" + n(a.count, "i", "", "i");
                }),
                o("e70a07b2", "Anonimni"),
                o("c76972f0", "Od zadnje isplate"),
                o("c219a552", "Stalno"),
                o("f3ce76c0", "Još uvijek vam je potrebna pomoć?"),
                o("i8982e7e", "Ako imate pitanja, odgovor potražite u našem centru za pomoć ili nam se obratite."),
                o("fbbfe8aa", "Deaktiviraj novčiće"),
                o("e4f29140", "Deaktiviranjem ćemo vas ukloniti iz programa Novčići i više nećete moći primati novčiće."),
                o("e58e85d2", "Nastavi na deaktivaciju"),
                o("be8e87b4", "Deaktivirati novčiće?"),
                o("bee26fa8", "Da, deaktiviraj"),
                o("f0145c9a", "Novčići su deaktivirani"),
                o("a22f6808", "Cjelokupna aktivnost"),
                o("g1b8020c", "U zadnjih 30 dana"),
                o("jb13b840", "Cijelo vrijeme"),
                o("b4f24360", "Nemate novih novčića u posljednjih 30 dana."),
                o("d59dbf8a", "Sažetak"),
                o("g652fc4c", "Za ovaj mjesec nemate povijest isplata."),
                o("d55e017a", "Ovaj mjesec"),
                o("f883322d", function (a) {
                    return "ID transakcije " + a.transactionId;
                }),
                o("d978f43e", "Nove Pretplate"),
                o("d113fc10", "Trenutno nemate novih Pretplata."),
                o("h7a41c02", "Obnovljene pretplate"),
                o("eedf2eaa", "Trenutno nemate obnova."),
                o("d93308d8", "Pogledajte sve transakcije"),
                o("a23e724a", "Taj račun nije dostupan."),
                o("a384fda0", "Pregled pretplate"),
                o("i4313618", "Predstavite se i opišite što korisnici mogu očekivati ako vas počnu pratiti kao super korisnici."),
                o("c0348964", "Za početak"),
                o("g522fd30", "Pogodnosti za pretplatnike"),
                o("e85471c6", "Značka za pretplatnike"),
                o("fd75ca92", "Dobit ćete javnu značku za pretplatnike koja će vas učiniti vidljivijima te će vam olakšati čavrljanje i povezivanje."),
                o("ia9c37c4", "Cijene"),
                o("f5be83b2", "Uključivanje u Zajednicu"),
                o("e4ee8c6a", "Razmjenjujte ideje, potražite inspiraciju i povežite se s drugim autorima sadržaja u zajednici s povratnim informacijama autora sadržaja Pretplata."),
                o("i3a90dee", "Deaktiviraj Pretplate"),
                o("e261e6e6", "Deaktivacijom ćete biti uklonjeni iz programa Pretplata i izgubit ćete sve svoje pretplatnike."),
                o("ca5ca5ee", "Prikaži pretpregled"),
                o("a329ce88", "Dodajte opis..."),
                o("f0c99eff", function (a) {
                    return "- @" + a.screenName;
                }),
                o("g40b2b30", "Omogućavanje pretpregleda objava"),
                o("c1521804", "Pregledi vaših pretplatničkih objava prikazat će se korisnicima koji nemaju pretplatu."),
                o("jd0f1ac0", "Želite deaktivirati Pretplate?"),
                o("c6c27fc8", "Deaktivacija Pretplata ne može se poništiti. Bit ćete uklonjeni iz programa Pretplata. Da biste se vratili u program, morat ćete se ponovno prijaviti."),
                o("f82a23ec", "Pretplate su sada deaktivirane"),
                o("a4c6e458", "Mjesečnu pretplatu postavili ste na sljedeći iznos:"),
                o("be54a313", function (a) {
                    return a.price + " mjesečno";
                }),
                o("hadd463a", "Zatražite promjenu cijene"),
                o("b0728b5c", "Otkaži promjenu cijene"),
                o("aea9f79c", "Na čekanju imate promjenu cijene na:"),
                o("c701e5cc", "Izvršene promjene neće se spremiti."),
                o("a649778c", "Nastavi uređivati"),
                o("d1a683b8", "O autorima sadržaja Pretplata"),
                o("iba08a94", "Kako vam izgleda?"),
                o("a5f55bfa", "Ovo će vidjeti pretplatnici kada otvore vašu stranicu. U bilo kojem trenutku možete se vratiti i ažurirati opise."),
                o("b600eb88", "Pronađite korisnike koji će vas pratiti i budite prepoznatljivi"),
                o("da48ebf6", "Nakon registracije dobit ćete bonus sadržaj"),
                o("f324fb6c", "Pretplata"),
                o("c654a3aa", "Samo pretplatnici mogu vidjeti tu objavu"),
                o("d409ce3c", "Podržite omiljene ljude na platformi X radi bonus sadržaja i dodatnih pogodnosti."),
                o("a4ed9072", "Predstavite se..."),
                o("af5b098e", "Pogodnosti u okviru Pretplata"),
                o("gf32cca2", "Opišite pogodnosti koje ćete ponuditi"),
                o("j8ba99b4", "Otkrijte ljudima djelić onoga što ih očekuje svaki mjesec uz kratki sažetak bonus sadržaja koji ćete dijeliti."),
                o("j679dcda", "Pogledajte primjere"),
                o("j325331a", "Ukratko se predstavite"),
                o("e18e8da8", "Ostavite dobar prvi dojam kratkom uvodnom porukom za potencijalne pretplatnike."),
                o("fce14f56", "Nova cijena"),
                o("b0c58272", "Odaberite novu mjesečnu cijenu. Za obradu promjene cijene potrebno je 3 – 7 radnih dana. Zbog povećanja cijene postojeći će pretplatnici možda morati ponovno potvrditi svoje sudjelovanje."),
                o("d5737f0e", "Mjesečna pretplata"),
                o("edc014fb", "Saznajte više"),
                o("h810143c", "Detalji"),
                o("ga57b610", "Datum kupnje"),
                o("h3b68828", "Vrsta kupnje"),
                o("cc2aa67a", "Platforma na kojoj ste obavili kupnju"),
                o("b313bb24", "Uplata"),
                o("e5188502", "Prodane ulaznice ne mogu se vratiti"),
                o("bf364d62", "Sve transakcije"),
                o("ed3efef0", "U zadnjih 30 dana nemate novih Pretplata."),
                o("b5f9ec14", "U zadnjih 30 dana niste ništa obnovili."),
                o("d8eed490", "Upravljajte javnim prikazom profila."),
                o("e26dbcd0", "Sakrijte svoje Pretplate autora sadržaja"),
                o("aea7dda8", "Vaš popis Pretplata autora sadržaja na profilu bit će vidljiv samo vama."),
                o("j3d2cfc4", "Omogućite osobama koje vas prate da vide koje Prostore slušate"),
                o("d9588ae6", "Imajte na umu da ćete i uz isključenu postavku biti vidljivi svima kada ste u Prostoru. Osobe koje vas prate uvijek mogu vidjeti u kojim ste Prostorima voditelj ili suvoditelj odnosno u kojima govorite."),
                o("i84c5de8", "Uskoro će biti dostupne aplikacije za autore sadržaja"),
                o("b8922f7e", "Uskoro se vratite radi prijave za uključivanje u program Pretplata."),
                o("ad588be6", "Ispunjavate uvjete!"),
                o("f6443bd2", "Dobre vijesti! Ispunjavate naše uvjete za Pretplate. Jeste se spremni prijaviti?"),
                o("a3a20a10", "Provjerite ponovno poslije"),
                o("b8d29e4a", "Nažalost, zasad ne ispunjavate naše uvjete za Pretplate."),
                o("d92c1d0a", "Prijeđi u aplikaciju"),
                o("fde27650", "Uvjete za Pretplate"),
                o("c5f89b06", "Izvršite provjeru autentičnosti pretplatom na Premium"),
                o("ff9f4475", function (a) {
                    return "Broj provjerenih osoba koje prate: " + a.minFollowersCount;
                }),
                o("b747ce3a", "Aktivno u posljednjih 30 dana"),
                o("c27f57ac", "Morate imati barem 18 godina"),
                o("h63d2973", function (a) {
                    return "Broj organskih prikaza u posljednja 3 mjeseca: " + a.count;
                }),
                o("ef606fca", "Pretplate uz plaćanje za najvjernije korisnike koji vas prate"),
                o("e533715e", "Provjeri ispunjavam li kriterije"),
                o("d8671da2", "Zarađivanje na platformi X"),
                o("d126a504", "Ponudite omiljenim osobama koje vas prate dodatni sadržaj i ostvarite mjesečnu zaradu. "),
                o("d08d0bb2", "Bonus sadržaj"),
                o("ef29d2c2", "Podijelite spontane misli, ideje i mišljenja uz dodatne objave i osobne odgovore."),
                o("if12af7c", "Postavljanje pretplata"),
                o("cc4c1a14", "Postavljanje cijene"),
                o("e1453e45", "Saznajte više"),
                o("aa7e35ee", "Vaš račun nije odabran"),
                o("c984cc62", "Vaš račun ovaj put nije odabran. I dalje nas pratite radi budućih prilika za sudjelovanje."),
                o("gd115e64", "Prijava za Pretplate"),
                o("a9f08d5c", "Vaši odgovori na pitanja u nastavku služe za naš pregled i neće biti prikazani na vašem profilu."),
                o("c3f8d650", "Opišite svoj sadržaj"),
                o("j89dd344", "Navedite primjer sadržaja koji će biti dio vaše pretplate. Što detaljnije, to bolje."),
                o("d19cc490", "Dodajte primjer sadržaja"),
                o("c737c1b2", "Recite nam nešto o svom iskustvu"),
                o("f98e5fd4", "Stvarate li sadržaj koji se plaća na drugim platformama? Zašto smatrate da će se korisnici pretplatiti?"),
                o("c41b01be", "Dodajte ključne informacije"),
                o("e2aad0fe", "Neću za pretplatnike objavljivati grafički sadržaj ni sadržaj za odrasle"),
                o("d1b983ef", function (a) {
                    return "Mora sadržavati najviše ovoliko znakova: " + a.count;
                }),
                o("d3d6c52c", "Vaša je prijava poslana"),
                o("cb27c0ba", "Potvrdili smo vaše cijene. Razmotrit ćemo vašu prijavu i ako bude odobrena, poslat ćemo vam obavijest odmah nakon emitiranja uživo."),
                o("j274e6aa", "Na listi ste čekanja"),
                o("j006be54", "Naša se testna grupa za Pretplate brzo popunila, no dodali smo vas na popis čekanja te ćemo vas obavijestiti kada se otvori još mjesta."),
                o("d5cb1114", "Aktivirajte Pretplate"),
                o("j2f622ec", "Odabrani ste za našu testnu grupu! Odmah unesite podatke o pretplati, a mi ćemo vas obavijestiti kada se pretplata za super korisnike aktivira."),
                o("e2cd7000", "Još malo..."),
                o("b3629b92", "Još samo malo i vaša će pretplata biti postavljena."),
                o("f4619a62", "Prihvati i nastavi"),
                o("c5625f84", "Opišite pogodnosti u sklopu svoje pretplate"),
                o("c7289544", "Postavite cijenu pretplate"),
                o("aaf68c58", "Potvrdite podatke za isplatu"),
                o("b8a69fa0", "Uvjete za Pretplate"),
                o("ad4a92a2", "Značka"),
                o("d5aa8de0", "Pretplatnicima dodijelite značke"),
                o("j0bbda92", "Ovdje ništa ne možete promijeniti ni urediti. Svi vaši pretplatnici automatski dobivaju javnu značku kad se pretplate na vaš račun."),
                o("e18b7a72", "Pregled"),
                o("be76dc34", "Dodaj opis"),
                o("ef5406e4", "Predstavite se"),
                o("ea8a3d2e", "Postavke cijena"),
                o("f77bb179", function (a) {
                    return "Potvrdite svoj odabir: " + a.price;
                }),
                o("g2a6f160", "Još jednom provjerite i potvrdite cijenu pretplate. Nakon postavljanja više se nećete moći vratiti da biste je promijenili."),
                o("g767d1c9", "Napomena: nećete je moći promijeniti"),
                o("df057690", "Odaberite što će vaši pretplatnici plaćati"),
                o("g5923869", function (a) {
                    return a.price + " mjesečno";
                }),
                o("f025ab3a", "Stvorite veću i širu bazu korisnika"),
                o("c962df0e", "Rijetko objavljivanje i interakcija s pretplatnicima"),
                o("ib075804", "Proširite bazu korisnika i maksimizirajte prihode"),
                o("fc04f3a6", "Umjereno objavljivanje i interakcija s pretplatnicima"),
                o("c246656e", "Stvorite intimnu bazu pratitelja"),
                o("h0c5405c", "Redovito objavljivanje i interakcija s pretplatnicima"),
                o("f2d2153d", function (a) {
                    return "Većina kreatora naplaćuje, " + a.price + " ali možete odabrati bilo koju cijenu";
                }),
                o("f1cb36b8", "Postavljanje isplate"),
                o("e20f6662", "Spremni ste!"),
                o("g88e146c", "Your account is pending"),
                o("dfe973a6", "Thanks for providing your payout details. You’ll receive a notification with next steps as soon as Stripe has reviewed your information."),
                o("ja884230", "Unesite svoje podatke za isplatu"),
                o("a3f6a966", "Povežite račun za Stripe"),
                o("cb031e44", "Preusmjerit će vas se na uslugu Stripe za povezivanje računa. Ako imate postojeći račun za Stripe koji želite upotrijebiti, unesite adresu e-pošte tog računa kada vas usluga Stripe zatraži unos adrese e-pošte. Napomena: vaša adresa e-pošte za Stripe može se razlikovati od vaše adrese e-pošte za X."),
                o("ebfb897c", "Primjeri"),
                o("dc4feb1a", "Ne znate što reći?"),
                o("h9b9d486", "Vrsta sadržaja koju ćete nuditi pretplatnicima u potpunosti ovisi o vama. Evo nekih primjera za lakši početak."),
                o("ic130fd6", "Dobit ćete zanimljiv uvid u nastanak sadržaja, prve preglede mojih knjiga i drugih projekata te ću svakog mjeseca odgovarati na vaša pitanja."),
                o("dd913e24", "Čekaju vas moje nefiltrirane izjave, spontane misli i dodatni sadržaj."),
                o("b737ee66", "Pripremite se za vrhunski doživljaj. Na primjer, sadržaj samo za pretplatnike kao što su ankete, videozapisi i posebne ponude."),
                o("a0bb2076", "Neka predstavljanje bude kratko i slatko, sadržaj ćete moći opisati kasnije. Evo nekoliko primjera za lakši početak."),
                o("fe076612", "Pozdrav i dobro došli na moju stranicu Pretplata! Drago mi je što ste ovdje. Hvala vam što mi omogućujete da radim ono što volim."),
                o("g7f66daa", "Pozdrav, ekipo! Drago mi je da vas zanima moja pretplata. Sigurno će vam se svidjeti ono što imam za vas."),
                o("hbe4f99e", "Pozdrav! Jedva čekam s tobom podijeliti tajni sadržaj i bolje te upoznati :)"),
                o("fb278c82", "Što je ovaj pregled?"),
                o("j6cab6ec", "Ovo korisnici vide prije nego što se pretplate na vaš sadržaj. Prilagođavajte i uređujte opise dok ne budete u potpunosti zadovoljni."),
                o("i22beaa4", "Dijeljenje podataka"),
                o("e110a46c", "Izbriši povijest razgovora"),
                o("ebc4fda0", "Upravo ćete izbrisati povijesti razgovora značajke Grok. Više nećete moći pristupiti tim razgovorima."),
                o("c90fe716", "Želite li izbrisati svoje razgovore?"),
                o("a8d516a4", "X može s tvrtkom xAI podijeliti vaše javne podatke s platforme X, kao i vaše interakcije s korisnicima, unose i rezultate značajke Grok na platformi X u svrhe obuke i finog ugođavanja značajke Grok i drugih modela umjetne inteligencije koje je razvila tvrtka xAI. To nam pomaže da neprestano poboljšavamo vaše korisničko iskustvo."),
                o("a127886c", "Dopustite značajci Grok da zapamti povijest vaših razgovora"),
                o("f49b39b8", "Dopustite značajci Grok da zapamti pojedinosti iz prethodnih razgovora. Možete izbrisati pojedinačne razgovore kako bi Grok zaboravio povezane pojedinosti."),
                o("b7de9ad2", "Dopustite platformi X da personalizira vaš doživljaj Groka"),
                o("ed141096", "Dopustite da se vaše interakcije, unosi i rezultati značajke Grok upotrijebe za personaliziranje doživljaja Groka. X može s tvrtkom xAI podijeliti vaše podatke na platformi X, kao i vaše interakcije s korisnicima, unose i rezultate značajke Grok u svrhu personalizacije značajke Grok i drugih modela umjetne inteligencije koje je razvila tvrtka xAI. To nam pomaže da neprestano poboljšavamo vaše korisničko iskustvo. "),
                o("ecdbece0", "Uspješno ste se prijavili u program Novčići."),
                o("db3f0bbe", "Pomaganje autorima sadržaja da ostvare zaradu od svog sadržaja."),
                o("a1f40cf8", "Slažem se"),
                o("d604fb32", "uvjete za autora sadržaja"),
                o("d520d188", "Dobivanje novčića"),
                o("ea770766", "Novčići su virtualna vrijednost koja se može dobiti za objave koje ispunjavaju uvjete. Kada primite novčiće, oni se pretvaraju u dijamante, koji se mogu isplatiti."),
                o("d27f5ac6", "Pasivan prihod"),
                o("h1d66df0", "Zaradite novac jednostavnim objavljivanjem sjajnog sadržaja na platformi X. Osobe koje vas prate sada vas mogu nagraditi novčićima."),
                o("f85fb0a2", "Povežite se s publikom"),
                o("d1433e24", "Novčići su zabavan način na koji vas obožavatelji nagrađuju za sadržaj koji im se najviše dopao. To je prilika da se bolje povežete s osobama koje vas prate i obožavateljima."),
                o("e6ba42de", "Udio u prihodu od oglasa"),
                o("ebc16756", "Udio u prihodu za autore sadržaja"),
                o("da4cd6fa", "Nažalost, zasad ne ispunjavate naše uvjete za Udio u prihodu od oglasa. Za sudjelovanje morate zadovoljiti zahtjeve u naglasku:"),
                o("b2961492", "Nažalost, zasad ne ispunjavate naše uvjete za Udio u prihodu za autore sadržaja. Za sudjelovanje morate zadovoljiti zahtjeve u nastavku:"),
                o("d3789528", "Više o udjelu u prihodu od oglasa"),
                o("aa0ff456", "Više o udjelu u prihodu za autore sadržaja"),
                o("bf214f48", "U redu"),
                o("b2b4d592", "Pretplatite se na Premium ili Provjerene organizacije"),
                o("fbb03ba6", "500 osoba koje prate Premium"),
                o("hb4c5169", function (a) {
                    return "Najmanje " + a.impression_number + " milijuna prikaza objava u posljednja tri mjeseca";
                }),
                o("f91685ba", "Automatski ispunjavate uvjete da biste bili plaćeni za svoje objave!"),
                o("a9f0e0fa", "Kao pretplatnik na Premium ili Provjerene organizacije automatski ispunjavate uvjete za udio u prihodu od oglasa. Vaša se isplata temelji na broju provjerenih prikaza oglasa koji se prikazuju u odgovorima na vaše objave."),
                o("c694e3e4", "Kao korisnik pretplate Premium ili Provjerene organizacije, automatski ispunjavate uvjete za udio u prihodu za autore sadržaja."),
                o("acd1a1be", "Postavite podatke za isplatu sada da biste primili buduće isplate."),
                o("f7e11f70", "Pridružite se i potvrdite identitet"),
                o("c8169274", "Došlo je do problema prilikom spremanja vašeg zahtjeva. Pokušajte ponovno kasnije."),
                o("c3f93665", "Uvjete o udjelu u prihodu za autore sadržaja"),
                o("a249ce04", "Uvjete o udjelu u prihodu od oglasa"),
                o("d085a144", "Nadzorna ploča zarade autora sadržaja"),
                o("a5204850", "Ukupan prihod"),
                o("ada650cf", function (a) {
                    return "Razdoblje plaćanja: " + a.fromDate + " – " + a.toDate;
                }),
                o("aa732c0a", "Udio u prihodu od oglasa u videozapisima"),
                o("g88c1108", "Više o udjelu u prihodu od oglasa u videozapisima"),
                o("d4bb7e9c", "Uvjeti udjela u prihodu od oglasa u videozapisima"),
                o("dc535dbe", "Zaradite više za svoj sadržaj na platformi X prijavom u naš program udjela u prihodu od oglasa prije sadržaja videozapisa"),
                o("eb6d9270", "Ostvarite prihod od svog sadržaja"),
                o("a778472e", "Pojedinosti:"),
                o("bde8446e", "Da biste se prijavili za program udjela u prihodu od oglasa, odaberite „Slažem se i pošalji”."),
                o("a415fd3a", "Slažem se i pošalji"),
                o("fbba9725", "Pravila platforme X"),
                o("f3dd8c4a", "Uvjeta udjela u prihodu od oglasa i standarda monetizacije za autore sadržaja"),
                o("hd885ae0", "Pogledajte svoju statistiku"),
                o("je4ccd3a", "Centar za pomoć za članke bez oglasa"),
                o("i6cb493e", "Upravljajte načinom prikaza povezanih računa"),
                o("e4fde082", "Postavite odbrojavanje za poništenje poslanih objava te odaberite koje vrste objava želite poništiti."),
                o("dcfc6540", "Izvorne objave"),
                o("be077e8c", "Niti razgovora"),
                o("f3429f2c", "Ankete"),
                o("i647ba8a", "Razdoblje za poništavanje objave"),
                o("d195528e", "Odaberite koju vrstu objava želite poništiti prije nego što postanu javne te vrijeme dostupno za poništenje."),
                o("bcf3a9e6", "Upravljajte postavkama za ograničavanje neželjenih odgovora."),
                o("c048fd3a", "Filtrirajte potencijalno neželjene odgovore"),
                o("dab7dac4", "Odgovori na objave koji sadržavaju izraze koji mogu biti zlonamjerni ili uvredljivi filtrirat će se i pojaviti ovdje. Ostali i dalje mogu te odgovore vidjeti."),
                o("c4c53b86", "Imate na umu da takve odgovore prepoznajemo pomoću tehnologije, stoga možda nećemo uspjeti svaki put, iako se neprekidno poboljšavamo."),
                o("dca3d2ee", "Želite isključiti filtar za odgovore?"),
                o("fe440ff8", "Filtrirani odgovori na vaše objave neće biti vraćeni."),
                o("cedbb01c", "Pravne napomene"),
                o("b4f917d0", "Razno"),
                o("bdfa2b8c", "Dodatni resursi"),
                o("b8692262", "Korisne informacije potražite i na drugim mjestima da biste saznali više o proizvodima i servisima platforme X."),
                o("c0398892", "Napomene uz izdavanje"),
                o("b833bcde", "Upravljajte aspektima sučelja platforme X, kao što je ograničenje kontrasta boje i pokret. Te postavke utječu na sve račune za X u ovom pregledniku."),
                o("d5b646be", "Vizija"),
                o("jfe6a3a0", "Pokret"),
                o("e8c72272", "Povećaj kontrast boja"),
                o("dba2cdd2", "Poboljšava čitljivost povećanjem kontrasta između teksta i pozadinskih boja."),
                o("d070244e", "Smanjenje pokreta"),
                o("icfa5e8c", "Ograničava broj animacija u aplikaciji, uključujući brojače aktivnosti uživo."),
                o("ae41b002", "Ograničava broj animacija u aplikaciji, uključujući brojače aktivnosti uživo. Vaš sustav trenutno upozorava da je uključena značajka smanjenja pokreta. Ako pokret želite ponovno omogućiti, tu značajku najprije tamo onemogućite."),
                o("h9d1cfae", "Primajte podsjetnik za opise slika"),
                o("c878e9f8", "Omogućuje podsjetnik za dodavanje opisa slika prije slanja objave."),
                o("bbd1fc7c", "Saznajte više o pristupačnosti na platformi X"),
                o("ac865cf0", "Pristupačnost na platformi X"),
                o("d3a2bde8", "Pogledajte podatke o svom računu, preuzmite arhivu podataka ili saznajte više o mogućnostima deaktivacije računa"),
                o("idca4742", "Pogledajte podatke o računu, npr. telefonski broj i adresu e-pošte."),
                o("b6ded35e", "Promijenite lozinku kada god zaželite."),
                o("cce24bf4", "Steknite uvid u vrstu spremljenih podataka o računu."),
                o("i203df96", "Saznajte kako deaktivirati račun."),
                o("f70cd5ee", "Telefon"),
                o("ib6f1694", "Stvaranje računa"),
                o("de323650", "Žensko"),
                o("b6ab31be", "Muško"),
                o("h3290872", "Provjereno"),
                o("hbd12156", "Zatraži provjeru autentičnosti"),
                o("b7ec04f4", "Da"),
                o("f70d5780", "Da."),
                o("dc62d3c6", "Ne."),
                o("a67dbd0a", "Račun za parodije, komentare i obožavatelje"),
                o("a3db727e", "Upravljajte svojim računom za parodije, komentare i obožavatelje"),
                o("eacf1990", "Na profil dodajte datum rođenja."),
                o("a3bf1262", "Promijenite datum rođenja na profilu."),
                o("h530db16", "Zaštićene objave"),
                o("d6d80990", "Te se informacije odnose na preglednik ili uređaj ako se odjavite. Ne moraju vrijediti ako ste prijavljeni."),
                o("i0d81ddb", "postavkama personalizacije i podataka"),
                o("g2a9bd3e", "Oznake za automatizirani račun"),
                o("dd9b3aae", "Što je automatizirani račun?"),
                o("b80bdc40", "Automatizirani računi programirani su za određene radnje, koje se izvršavaju automatski putem API-ja za X. To su, na primjer, objave o lokalnoj vremenskoj prognozi. Njih stvaraju i njima upravljaju drugi korisnici platforme X."),
                o("a01ac9b6", "Oznake omogućuju da ostali korisnici znaju tko stoji iza nekog automatiziranog računa. Nakon što se vlasnik automatiziranog računa poveže s računom za upravljanje, na profilu automatiziranog računa i njegovim objavama pojavit će se oznaka."),
                o("b989e1fe", "Je li obavezno staviti oznaku na automatizirane račune?"),
                o("i2d599aa", "Kako se stavlja oznaka na automatizirane račune?"),
                o("gd5bed72", "Stvaranje računa za upravljanje"),
                o("g6d44432", "Račun za upravljanje vode ljudi, a putem njega se upravlja automatiziranim računom."),
                o("e20a69e8", "Povezivanje računa za upravljanje i automatiziranog računa"),
                o("d2f88358", "Povežite račune putem stranice Automatizacija u postavkama."),
                o("e427f632", "Vaš je račun dobio oznaku!"),
                o("a4d7cffa", "Nakon povezivanja računa na automatiziranom računu pojavit će se oznaka."),
                o("a18d6a7d", "novim pravilima"),
                o("e9965c14", "najčešćim pitanjima o automatiziranim računima"),
                o("ee78c192", "Što je račun PCF?"),
                o("c3f35e0c", "Račun PCF prikazuje drugu osobu, grupu ili organizaciju na profilu u svrhu rasprave, satire ili dijeljenja informacija o tom entitetu."),
                o("d019b5fa", "Je li obavezno staviti oznaku na račun za parodije, komentare i obožavatelje (PCF)?"),
                o("dd04f24e", "Da. Oznaka PCF osigurava da korisnici na platformi X neće biti zbunjeni vašim računom; obavještava ih da vaš račun nije povezan sa subjektom profila. Ako nije označen, vaš račun može kršiti pravila o autentičnom sadržaju."),
                o("hb0f8bbc", "Kako se stavlja oznaka na račun za parodije, komentare i obožavatelje (PCF)?"),
                o("g69acc5c", "Jednostavno kliknite „Razumijem” i preusmjerit ćemo vas na postavke profila kako biste postavili oznaku računa!"),
                o("d313d431", "Pravila o autentičnom sadržaju"),
                o("a3f22d8e", "Odaberite vrstu obavijesti koje primate o aktivnostima, zanimljivim temama i preporukama."),
                o("bc20979a", "X i njegovi partneri upotrebljavaju kolačiće da bi vam pružili bolju, sigurniju i bržu uslugu i radi podrške našem poslovanju. Neki su kolačići potrebni za upotrebu naših usluga, poboljšanje naših usluga i kako bismo osigurali da ispravno funkcioniraju."),
                o("ge06dadc", "Dopustite platformi X i njezinim partnerima da upotrebljavaju kolačiće i pružaju vam oglase i komunikacije prilagođene vašim interesima."),
                o("he20de3a", "Nemojte platformi X dopustiti upotrebu kolačića za prikupljanje dodatnih podataka za prilagođene oglase i komunikacije."),
                o("g0ec0bec", "Deaktivirano"),
                o("g89f4614", "Vaš je račun deaktiviran"),
                o("f1768324", "Upravljajte načinom na koji X personalizira sadržaj i prikuplja i dijeli određene podatke."),
                o("ja94f34e", "Ove se postavke odnose na preglednik ili uređaj dok ste odjavljeni te neće imati nikakvog učinka dok ste prijavljeni."),
                o("bd73f7e6", "Time ćete omogućiti ili onemogućiti sve postavke na ovoj stranici."),
                o("ddbc3288", "Podaci"),
                o("ae5339a0", "Pogledajte svoje podatke za X"),
                o("b934e0ea", "Želite li onemogućiti personalizaciju i podatke?"),
                o("i0317e0e", "Time će objave i oglasi koji vam se prikazuju biti manje relevantni."),
                o("a148acba", "Onemogući"),
                o("aa023546", "Personalizacija na temelju mjesta koja ste posjetili"),
                o("ced77194", "Omogućite upotrebu web-mjesta na kojima se pojavljuje sadržaj s platforme X"),
                o("fe1fc83e", "Ovo su dobni rasponi povezani s vama."),
                o("bf9c74d0", "Nemoj koristiti ove dobne raspone za personalizaciju."),
                o("cf0daa24", "Prikupljanje tih informacija moglo bi potrajati. Pokušajte ponovno kasnije."),
                o("ea522535", "Saznajte više"),
                o("hf5ca8f8", "na svoj profil"),
                o("d9cbe351", function (a) {
                    return a.count + " login događaj" + n(a.count, "a", "", "a") + " prijave";
                }),
                o("de90b04a", "Mjesta koja ste posjetili"),
                o("cbd2ef59", function (a) {
                    return a.count + " lokacij" + n(a.count, "e", "a", "a");
                }),
                o("a4441bb8", "Interesi platforme X"),
                o("e1c6b2d6", "Prilagođene skupine korisnika"),
                o("ed19d10d", function (a) {
                    return a.audienceCount + " ciljn" + n(a.audienceCount, "e skupine", "a skupina", "ih skupina") + " s lokacije " + a.advertiserCount + " oglašivača";
                }),
                o("f00d0d03", function (a) {
                    return a.count + " zanimljiv" + n(a.count, "e teme", "a tema", "ih tema");
                }),
                o("hf9c2caa", "Želite li zatražiti popis oglašivača?"),
                o("c29b7971", function (a) {
                    return "Ovo će biti poslano na adresu " + a.primaryEmail + ".";
                }),
                o("b9e1cf02", "Zatraži"),
                o("a8276fac", "Zatraži popis oglašavača"),
                o("g7912a84", "U redu. Popis će biti poslan putem e-pošte čim bude spreman."),
                o("d6104de0", "Oglašavanje utemeljeno na interesima možete onemogućiti u postavkama personalizacije i podataka. Time će se promijeniti oglasi koji vam se prikazuju na platformi X, ali nećete biti uklonjeni iz ciljnih skupina oglašavača."),
                o("ed8c03f5", "Saznajte više"),
                o("e1a4daac", function (a) {
                    return "sljedećeg broja ciljnih skupina: " + a.num_audiences;
                }),
                o("acb25e32", function (a) {
                    return "sljedećeg broja oglašavača: " + a.num_advertisers;
                }),
                o("j4fa776e", "Telefoni"),
                o("i7acdb36", "Tableti"),
                o("c112dfc8", "Stolno računalo"),
                o("jd8607ba", "Aktivirano"),
                o("ea4f6c9e", "Preglednici"),
                o("d750b93f", function (a) {
                    return a.count + " preglednik" + n(a.count, "a", "", "a");
                }),
                o("a9783602", "Mobilni uređaji"),
                o("j043aa31", function (a) {
                    return a.count + " mobiln" + n(a.count, "a uređaja", "i uređaj", "ih uređaja");
                }),
                o("ae415fd2", "Ta je postavka isključena."),
                o("a90be7b4", "Adrese e-pošte"),
                o("c0f6f911", "Aktivnost izvan platforme X"),
                o("adaafb3f", "izvedenog identiteta"),
                o("f0f72665", "izvedeni identitet"),
                o("d33b4e5b", "Aktivnost izvan platforme X"),
                o("c4668d4f", "Aktivnost izvan platforme X"),
                o("df3e137b", "Saznajte više"),
                o("d1597ccb", "Saznajte više"),
                o("c1b03a07", "Saznajte više"),
                o("b056d9dc", "Ovo je postavka primarnog jezika vašeg računa."),
                o("h68bc23c", "Ovi se dodatni jezici koriste za personalizaciju sučelja."),
                o("fbf0e61e", "Ako još niste naveli spol, naveli smo onaj koji je na temelju vašeg profila i aktivnosti povezan s vašim računom. Taj se podatak neće javno prikazati."),
                o("b4568a3a", "Dodajte spol"),
                o("c0be743e", "Spol je ažuriran"),
                o("c5abae66", "Ovo je spol koji je X najviše povezao s vama."),
                o("cdb0d3e6", "Nemoj koristiti ovaj spol za personalizaciju."),
                o("j31a1aa0", "Riječ je o mjestima koje X koristi za prikaz relevantnijeg sadržaja. Ako isključite mogućnost „Personalizacija na temelju mjesta koja ste posjetili”, više nećete vidjeti ovdje navedena mjesta."),
                o("ddefdd1c", "Želite li ukloniti mjesta koja ste posjetili?"),
                o("hea740ac", "Za to je potrebno vremena i tu radnju ne možete poništiti."),
                o("a26e0d52", "U redu. Ta će mjesta biti uklonjena."),
                o("he447966", "Zasad nije pronađeno nijedno mjesto."),
                o("b9d98dec", "postavke lokacije"),
                o("e27e4fce", "Nepoznata lokacija"),
                o("ib55eb6b", "Povezane aplikacije"),
                o("e5a4a539", "Saznajte više"),
                o("gc8f2e14", "Oglase utemeljene na interesima možete onemogućiti u postavkama personalizacije i podataka."),
                o("e6dbe66b", "Saznajte više"),
                o("d3310e49", function (a) {
                    return "Datoteka sa svim podacima u vezi s vašim računom bit će poslana na adresu " + a.primaryEmail + ".";
                }),
                o("ib03e8c8", "Želite li preuzeti datoteku sa svim informacijama povezanim s računom na ovom uređaju?"),
                o("g49741e8", "Preuzmi"),
                o("dc370a0c", "U redu. Podaci će biti poslani putem e-pošte čim budu spremni."),
                o("c07b4316", "Interesi"),
                o("e97196fe", "Karakteristike"),
                o("ja0f971c", "Ovo su neke od tema koje se poklapaju s vašim interesima na temelju profila, aktivnosti i tema koje pratite. Prema njima se na platformi X personalizira okruženje i reklamni oglasi koje vidite. Ako vam nešto ne odgovara, možete ih prilagoditi. Za primjenu promjena potrebno je neko vrijeme."),
                o("gd1ce494", "Mislimo da bi vas navedeno u nastavku moglo zanimati. Koristi se za prikaz više vašeg sadržaja korisnicima koje zanimaju ta područja. Ako vam nešto ne odgovara, možete ih prilagoditi. Za primjenu promjena potrebno je neko vrijeme."),
                o("a6b0b41a", "Preuzmite aplikaciju X na mobilnom telefonu. Besplatna je."),
                o("h3ed510e", "Podaci za X"),
                o("b708417c", "Možete zatražiti ZIP datoteku s arhivom podataka s računa te podacima o povijesti računa, aplikacija i uređaja, aktivnosti računa, interesima i oglasima. Kada arhiva bude spremna za preuzimanje, dobit ćete obavijest u aplikaciji."),
                o("jbf5843e", "Podaci na Periscopeu"),
                o("ea886c6e", "Možete izravno zatražiti arhivu podataka s Periscopea."),
                o("cdcc2ad4", "Preuzimanje nije uspjelo"),
                o("dbeff87a", "Zatraži arhivu"),
                o("hb02ed28", "Trenutno nije dostupna značajka preuzimanja podataka. Pokušajte ponovno nakon nekoliko dana."),
                o("c2254084", "Zaprimili smo vaš zahtjev. Radi zaštite vašeg računa podaci će biti spremni nakon barem 24 sata."),
                o("f62d1d9e", "Vaša je arhiva spremna za preuzimanje i prikaz u pregledniku stolnog računala. Imajte na umu da te podatke morate preuzeti prije nego isteknu za nekoliko dana."),
                o("b221ca4c", "Javit ćemo vam kada podaci budu spremni za preuzimanje"),
                o("db40dfcf", "popunite ovaj obrazac"),
                o("g1aced04", "Aplikacije, uređaji i informacije"),
                o("dbcf3a1a", "Dodajte oznaku profila"),
                o("cbb2367c", "Prikažite ili sakrijte oznaku profila računa namijenjenoga parodijama, komentarima i obožavateljima."),
                o("ge48855c", "Parodija"),
                o("hf019b20", "Ta oznaka osigurava da korisnici na platformi X neće biti zbunjeni vašim računom; obavještava ih da vaš račun nije povezan sa subjektom profila."),
                o("d048571e", "Želite li ukloniti oznaku parodije?"),
                o("g905134c", "Ako isključite tu oznaku, uklonit će se s vašeg profila i iz svih prethodnih objava. Provjerite pridržavate li se pravila o autentičnom sadržaju."),
                o("ce62c8c2", "Želite li ukloniti oznaku profila?"),
                o("a14080ce", "Želite li ažurirati oznaku profila?"),
                o("db6796f6", "Ako isključite tu oznaku, uklonit će se s vašeg profila i iz svih prethodnih objava. Provjerite pridržavate li se pravila o autentičnom sadržaju. Nakon što se ažurira, dodatna ažuriranja bit će zaključana 48 sati."),
                o("c700b6be", "Nakon što se ažurira, dodatna ažuriranja bit će zaključana 48 sati."),
                o("ff1739ae", "Oznaka profila"),
                o("h70c602c", "Nije moguće ažurirati oznaku profila"),
                o("c818c60c", "Analitika"),
                o("ha9f14b1", function (a) {
                    return "Vaš će prostor započeti " + a.scheduleDate + " u " + a.scheduleTime;
                }),
                o("jafbef80", "Nemate ovlaštenje za zakazivanje tog Prostora"),
                o("e5d26f84", "Omogućite obavijesti platforme X i saznajte sve aktualnosti. X će upotrijebiti državu i jezik vašeg uređaja da bi personalizirao vaše obavijesti."),
                o("f91f00ba", "Stvori audioisječak"),
                o("f9b2d343", function (a) {
                    return a.count + " nov" + n(a.count, "e objave", "u objavu", "ih objava");
                }),
                o("jcc8306e", "Zahtjev za mjesto govornika"),
                o("j41fd45a", "Zahtjev je poslan"),
                o("d5b2aae8", "Poslano je previše zahtjeva za govor. Pokušajte ponovno kasnije."),
                o("b9945b98", "Zahtjev za govor nije uspio. Ponovno se pridružite prostoru i pokušajte ponovno za nekoliko sekundi."),
                o("b2cc6a54", "Pridružite se kao govornik"),
                o("fb6c0bbc", "Anonimno slušanje"),
                o("e49a1f42", "Trenutačno slušate anonimno i nevidljivi ste voditelju i ostalim sudionicima."),
                o("jf01aea4", "Ako želite sudjelovati, morate napustiti sesiju i ponovno joj se pridružiti kao vidljivi slušatelj."),
                o("cac1482a", "Reagiraj"),
                o("fc0e94b7", function (a) {
                    return "Reagiraj emojijem " + a.emoji;
                }),
                o("jf9f3e54", "Preskoči 15 sekundi naprijed"),
                o("hdd1aba0", "Preskoči unatrag 15 sekundi"),
                o("b89c5a50", "Pauziraj"),
                o("e674c120", "Prikaži titlove"),
                o("f45bace4", "Sakrij titlove"),
                o("ce96f1dc", "Titlovi nisu dostupni"),
                o("e07f6e7d", function (a) {
                    return "Brzina " + a.rate + "x";
                }),
                o("jd04fc66", "Brzina 0,5x"),
                o("f03848b8", "Normalno"),
                o("j0e5c2ce", "Brzina 1,5x"),
                o("b3f2318e", "Brzina 2x"),
                o("f17bc95a", "Podijeli zaslon"),
                o("b11a74b2", "Prestani dijeliti"),
                o("e51c2372", "Gosti"),
                o("b08821f4", "Natrag"),
                o("fed1388a", "Postavke Prostora"),
                o("c63dd2cc", "Uključite se u razgovor uživo koji vodim!"),
                o("c958c6c8", "Objavi to"),
                o("if23a252", "Podijeli putem..."),
                o("c0530da6", "Izbornik dijeljenja"),
                o("gb5851d7", function (a) {
                    return a.prefix + " " + a.url;
                }),
                o("j78ad1ca", "Želite li zatvoriti Prostor?"),
                o("db684264", "Da, završi"),
                o("je23178a", "Time ćete za sve završiti razgovor."),
                o("c371fb9a", "Kraj"),
                o("c0ce822e", "Postavke mikrofona"),
                o("a2bf8b8a", "Prijeđi na slušanje"),
                o("caa8d928", "Uključivanje/isključivanje prigušivanja buke"),
                o("b5d88f0c", "Samo zaposlenici"),
                o("c855ab8e", "Samo za pretplatnike"),
                o("ddeb0a3c", "Evo te Zajednice. Sviđaju vam se korisnici? Pogledajte."),
                o("e111f531", function (a) {
                    return a.count + " slušatelj" + n(a.count, "a", "", "a");
                }),
                o("cbef820f", function (a) {
                    return a.screenName + " podijelio/la je prijenos!";
                }),
                o("e3275464", "Pošalji"),
                o("cededf2a", "Voditelj(ica)"),
                o("i2caef48", "Suvoditelji"),
                o("j245c654", "Govornici"),
                o("eda23a02", "Slušatelji"),
                o("b90eb348", "Pozovi govornika"),
                o("d9a63e82", "Ukloni s mjesta govornika"),
                o("bd917b26", "Pozovi na mjesto suvoditelja"),
                o("d7357e7e", "Ukloni s mjesta suvoditelja"),
                o("bf307fc0", "Blokiraj i ukloni"),
                o("ccf2f24e", "Prijava"),
                o("i22835de", "Odobri");
            o("cb59a0fe", "Odbij"),
                o("c2376960", "Zahtjevi za mjesto govornika"),
                o("aba7dcdd", function (a) {
                    return "Pozovite korisnika " + a.name;
                }),
                o("f5c7aaa7", function (a) {
                    return "voditelj" + n(a.count, "a", "", "a");
                }),
                o("fc56c8b1", function (a) {
                    return "suvoditelj" + n(a.count, "a", "", "a");
                }),
                o("iba0f45d", function (a) {
                    return "govornik" + n(a.count, "a", "", "a");
                }),
                o("dc066955", function (a) {
                    return "slušatelj" + n(a.count, "a", "", "a");
                }),
                o("b53ed9ab", function (a) {
                    return a.participantCount + " " + a.title + " · " + a.remainingCapacityCount + " otvoreno: mjest" + n(a.remainingCapacityCount, "a", "o", "a");
                }),
                o("c3b5b829", function (a) {
                    return a.count + " zahtjev" + n(a.count, "a", "", "a");
                }),
                o("fe7a1910", "Slanje pozivnica"),
                o("ic3c757e", "Pretražite korisnike"),
                o("cd133486", "Pozovi"),
                o("f2333850", "Podijeli s korisnicima izvan platforme X"),
                o("cddb8097", "Saznajte više"),
                o("f77997b0", "Suvoditelj"),
                o("i48f4ed8", "Govornik"),
                o("a77c8e02", "Slušatelj"),
                o("bdfa93eb", function (a) {
                    return "Podijelio/la " + a.name;
                }),
                o("d8cc6ada", "Tko može govoriti? To neće utjecati na trenutačne govornike. Može potrajati nekoliko sekundi da se promjene primijene."),
                o("e3a87142", "Samo osobe pozvane da govore"),
                o("db3de1d2", "Pridružite se kao govornik"),
                o("d7f4bc44", "Pridružite se kao suvoditelj"),
                o("edcf15e9", function (a) {
                    return "Zatraženo (" + a.count + ")";
                }),
                o("h13957aa", "Onemogući Prostor"),
                o("ge6372fa", "Omogući Prostor"),
                o("i7a42e1c", "Pomognite upravljati ovim Prostorom"),
                o("e0b8f112", "Dobili ste pozivnicu za suvoditelja!"),
                o("ee12263c", "Suvoditelji mogu biti govornici u Prostoru"),
                o("jee7002c", "Suvoditelji mogu pozivati, uklanjati i onemogućivati govornike"),
                o("i95225d2", "Suvoditelji ne mogu dijeliti ni uklanjati objave"),
                o("f07137fa", "Suvoditelji mogu uklanjati slušatelje iz Prostora"),
                o("j6cdf012", "Suvoditelji ne mogu slati pozivnice ni uklanjati druge suvoditelje"),
                o("c727d116", "Suvoditelji ne mogu zatvoriti Prostor"),
                o("g69084b8", "Prihvati pozivnicu za suvoditelja"),
                o("ee230734", "Prikaži još mogućnosti"),
                o("ic8c615e", "Mogućnost odabira i slanja brzog odgovora"),
                o("a04077c4", "Odaberite jednu fotografiju, videozapis ili GIF."),
                o("c07367d8", "Medijski sadržaji trenutačno nisu podržani za šifrirane poruke"),
                o("af71ef68", "Govor"),
                o("fc64990e", "Videozapis"),
                o("ca0ce0e4", "Počnite pisati novu poruku"),
                o("e18e6a63", function (a) {
                    return "Pretplatite se na X Premium za slanje poruke korisniku/ci @" + a.username;
                }),
                o("c3752568", "Došlo je do pogreške. Pokušajte ponovno poslati poruku za koju minutu."),
                o("f78aa3ea", "Neke vaše poruke trenutno nije moguće poslati. Pokušajte ponovno poslije."),
                o("f9690dc0", "Nažalost, ovom računu ne možete poslati poruku."),
                o("b1d35408", "Prekoračili ste dnevno ograničenje za slanje poruka."),
                o("g539cca6", "Vaš je račun privremeno blokiran i onemogućeno vam je slanje poruka."),
                o("bbac001a", "Poruka je predugačka."),
                o("a1d2a68e", "Taj vas korisnik ne prati. Poruke možete slati samo korisnicima koji vas prate."),
                o("ec2bb9d4", "Objava koju pokušavate poslati izbrisana je."),
                o("hf383be4", "Račun na koji pokušavate poslati poruku je izbrisan."),
                o("c4fdbd16", "Poruke ne možete poslati korisnicima koje ste blokirali."),
                o("hf3e7e38", "Poruka nije poslana."),
                o("dd8272fd", function (a) {
                    return "Novo: " + a.count + " poruk" + n(a.count, "e", "a", "a");
                }),
                o("e2cd3b7c", "Audiopoziv je završio"),
                o("f42f365a", "Videopoziv je završio"),
                o("a7570f2c", "Propušten audiopoziv"),
                o("jd9831b2", "Propušten videopoziv"),
                o("f0985268", "Audiopoziv"),
                o("ca397a48", "Videopoziv"),
                o("bb7e2143", function (a) {
                    return a.seconds + " s";
                }),
                o("c1d4ac84", "Promijenili ste fotografiju grupe"),
                o("abc7b032", "Fotografija grupe se promijenila"),
                o("i263b294", "Uključili ste se u razgovor"),
                o("i8d5e62b", function (a) {
                    return "sljedeći broj osoba: " + a.count;
                }),
                o("f7204380", "Taj je Fleet istekao"),
                o("d9de7b58", "Taj je medijski sadržaj skriven jer ga je objavio netko koga ne pratite."),
                o("f2879f4e", "Ta poruka može imati eksplicitan medijski sadržaj."),
                o("b518221e", "Otvori sliku"),
                o("eeaa9f90", "Otvori videozapis"),
                o("g2b43664", "Otvori GIF"),
                o("d99de549", function (a) {
                    return "Odgovaranje korisniku/ci " + a.name;
                }),
                o("f5a07f7c", "Privitak"),
                o("fd079470", "To je spam"),
                o("c7a92dca", "Poruka je u redu"),
                o("fb3ccb56", "Poruka je skrivena zbog sumnjivog sadržaja"),
                o("c94b7d8a", "Reproduciraj govornu poruku"),
                o("eb6f9582", "Pauziraj govornu poruku"),
                o("b6b4142e", "Ta je objava skrivena jer ju je objavio netko koga ne pratite."),
                o("fda60d78", "Ta objava može sadržavati eksplicitan medijski sadržaj."),
                o("b59a9004", "Otvori objavu"),
                o("daf6bf02", "Promijenite postavke"),
                o("ba60339a", "Izbriši za mene"),
                o("eb497e08", "Još akcija"),
                o("b170974a", "Dodaj reakciju"),
                o("i202bd22", "Prijavi poruku"),
                o("f2e5491a", "Kopiraj poruku"),
                o("bf2d08ca", "Više reakcija"),
                o("ca7a2215", function (a) {
                    return "Vaša trenutna reakcija: " + a.emoji;
                }),
                o("j4bfee22", "Žekite li izbrisati poruku?"),
                o("faddd3a2", "Tu ćete poruku izbrisati za sebe. Ostali sudionici u razgovoru i dalje će je moći vidjeti."),
                o("f58dff34", "Došlo je do pogreške i poruka nije izbrisana."),
                o("ad5a8e8e", "Žao nam je! Nemate dozvolu za brisanje te poruke."),
                o("fad48eea", "Slanje..."),
                o("ae7d7a24", "Slanje poruke nije uspjelo"),
                o("bbe74f3f", function (a) {
                    return "Jučer, " + a.time;
                }),
                o("h95f9e77", function (a) {
                    return a.reactionCount + " reakcij" + n(a.reactionCount, "e", "a", "a");
                }),
                o("c0098d4a", "Reakcije"),
                o("j85999ec", "Popis reakcija korisnika"),
                o("a2d48779", function (a) {
                    return "Uklonite svoju trenutačnu reakciju: " + a.emoji;
                }),
                o("icd0bf34", "Pogledano"),
                o("e8bd8fec", "Poslano"),
                o("b2d32fae", "Pogledali su svi korisnici"),
                o("a763d33f", function (a) {
                    return "Vidjela " + a.count + " osob" + n(a.count, "e", "a", "a");
                }),
                o("d84b485e", "Počeli ste pratiti ovaj račun"),
                o("be0c83d8", "Prihvatili ste zahtjev"),
                o("bcc13060", "Rani pristup"),
                o("e535cae9", function (a) {
                    return a.count + " osob" + n(a.count, "e koje prate", "a koja prati", "a koje prate");
                }),
                o("cf249089", function (a) {
                    return "Datum pridruživanja: " + a.joinDate;
                }),
                o("g1f972d7", "Saznajte više"),
                o("bb0e37c3", "Saznajte više"),
                o("a89e8ab3", "Saznajte više"),
                o("d98540eb", "Saznajte više"),
                o("j296badb", "Saznajte više"),
                o("e45d77f5", "Saznajte više"),
                o("h52ca4c4", "Nove poruke"),
                o("ffde2fdc", "Učitavanje razgovora"),
                o("da878dc0", "Prihvati"),
                o("hc52446c", "Želite li sudjelovati u toj grupi? Sudionici neće znati da ste vidjeli zahtjev dok ga ne prihvatite."),
                o("f7e1ad65", function (a) {
                    return "Dopuštate li korisniku/ci " + a.senderName + " da vam šalje poruke? On/ona neće znati da ste vidjeli poruku dok je ne prihvatite.";
                }),
                o("gdf4b790", "Želite li napustiti razgovor?"),
                o("bbf83d84", "Ta se radnja ne može poništiti te će povijest tog razgovora biti izbrisana iz ulazne pošte."),
                o("ib3fe8aa", "Blokiraj ili prijavi"),
                o("gbed8594", "Osoba koju blokirate više vam neće moći slati zahtjeve za poruke."),
                o("g9074da4", "Napusti razgovor"),
                o("ad63377e", "Izbriši razgovor"),
                o("h09b49f8", "Ovaj će se razgovor izbrisati iz ulazne pošte. Ostali sudionici u razgovoru i dalje će ga moći vidjeti."),
                o("i6b19b08", "Prijavi razgovor"),
                o("cdb1a05a", "Obavijestite X o neželjenom sadržaju ili zlonamjernom ponašanju da bismo druge zaštitili od računa kao što je ovaj."),
                o("d6b11d9c", "Privatna poruka nije poslana jer prijenos multimedijskog sadržaja nije uspio."),
                o("c64c1884", "Sastavljanje nove poruke"),
                o("cdcebd22", "Nova poruka"),
                o("a66ac766", "Učitavanje privatnih poruka"),
                o("a846382a", "Pretraživanje privatnih poruka"),
                o("h845f282", "Privatna poruka"),
                o("d7ad7414", "Poruka nije dostupna"),
                o("ga086a54", "Slika u privitku"),
                o("a9cc8cfe", "Poslan je GIF"),
                o("eb3d722e", "Poslali ste GIF"),
                o("e5bfe07e", "Poslao/la je vezu"),
                o("db53c018", "Poslali ste poveznicu"),
                o("bf584cd2", "Poslao/la je fotografiju"),
                o("f80629ba", "Poslali ste fotografiju"),
                o("e20b65b0", "Poslao/la je naljepnicu"),
                o("d30c2d40", "Poslali ste naljepnicu"),
                o("a876e58c", "Poslao/la je videozapis"),
                o("j7d8101a", "Poslali ste videozapis"),
                o("dedfd266", "Poslao/la je govornu poruku"),
                o("h7033cac", "Poslali ste govornu poruku"),
                o("i34ec422", "Podijelio/la je objavu"),
                o("a4939874", "Podijelili ste objavu"),
                o("a30a206e", "Shvaćam!"),
                o("ib4b1b86", "Prikvačeni razgovori"),
                o("bd3ca2ef", function (a) {
                    return "Na nekom razgovoru odaberite izbornik s akcijama da biste ga, radi lakšeg pristupa, prikvačili na vrh. Odjednom možete prikvačiti najviše " + a.count + " razgovor" + n(a.count, "a", "", "a") + ".";
                }),
                o("e1c9ec9c", "Prikvačivanje razgovora"),
                o("e3cfff7c", "Odgodi razgovor"),
                o("f398722e", "Razgovor je odgođen"),
                o("bdd91964", "Otkvačivanje razgovora"),
                o("a8ed0eca", "Poništi odgodu razgovora"),
                o("jac4eb1e", "Poništena je odgoda razgovora"),
                o("d88d0790", "Izbornik mogućnosti"),
                o("ce108dda", "Odaberite oznaku"),
                o("abf2d13c", "Odaberite"),
                o("e4b3f520", "Prikvačeni razgovori"),
                o("ae4d666a", "Svi razgovori"),
                o("d98e066c", "Razgovor je prikvačen."),
                o("j302dba8", "Razgovor je otkvačen."),
                o("cb367658", "Razgovor se nije uspio prikvačiti. Pokušajte ponovno."),
                o("ie9a7e48", "Razgovor se nije uspio prikvačiti. Provjerite vezu i pokušajte ponovno."),
                o("hd3927c6", "Razgovor se nije uspio otkvačiti. Pokušajte ponovno."),
                o("f1ac0968", "Razgovor se nije uspio otkvačiti. Provjerite vezu i pokušajte ponovno."),
                o("d571e4f9", function (a) {
                    return "Prikvačiti možete samo " + a.count + " razgovor" + n(a.count, "a", "", "a");
                }),
                o("a551bf7e", "Otkvačite neki razgovor da biste prikvačili drugi."),
                o("a676a876", "Dobro došli u poštanski sandučić!"),
                o("h52877aa", "Napišite nešto, podijelite objave i ostalo u privatnim razgovorima s ostalim korisnicima na platformi X. "),
                o("efe8fda0", "Pisanje poruke"),
                o("b9dae4f4", "Pokušajte koristiti neki drugi izraz za pretraživanje"),
                o("e7fb2028", "Nema više rezultata"),
                o("ae111c99", function (a) {
                    return "Nema rezultata za „" + a.query + "”";
                }),
                o("e8581cce", "Za riječ koju ste unijeli nema rezultata"),
                o("f08940ac", "Započni novu poruku"),
                o("i5d7593a", "Pokušajte pretražiti korisnike, grupe ili poruke"),
                o("c94ac69e", "Grupe"),
                o("fb3c8e74", "Nedavna pretraživanja"),
                o("fd6150fc", "Veća zaštita u razgovoru privatnim porukama"),
                o("c7e8a9ee", "Pravila o privatnosti"),
                o("bece84b4", "Nema zahtjeva za poruke"),
                o("e51be7c1", "Saznajte više"),
                o("f041be05", function (a) {
                    return a.stringCount + " pending request" + n(a.count, "s", "", "s");
                }),
                o("a2fad0f3", function (a) {
                    return a.stringCount + " new pe" + n(a.count, "ople", "rson", "ople") + " you may know";
                }),
                o("cbddf365", function (a) {
                    return a.stringCount + " pe" + n(a.count, "ople", "rson", "ople") + " you may know";
                }),
                o("fac945ad", function (a) {
                    return a.stringCount + " new request" + n(a.count, "s", "", "s");
                }),
                o("ed93de0c", "Analiza objave"),
                o("ba44f4ea", "Više detalja koje pruža Grok"),
                o("a6e89af8", "Otvori razgovor"),
                o("ica55d24", "Novo čavrljanje"),
                o("f794af9a", "Zabavni način rada"),
                o("eccf9fea", "Uobičajeni način rada"),
                o("g7b1c574", "Ponovno postavi na zadane postavke"),
                o("f388a7ec", "DeepSearch"),
                o("ab1eb384", "Odaberite željeni način pretraživanja"),
                o("i330e54c", "Napredno pretraživanje i rasuđivanje"),
                o("ac64b674", "Prošireno pretraživanje, više rasuđivanja"),
                o("j22655f2", "Pitajte bilo što"),
                o("h0681e3e", "Razgovarajte s Grokom, našim pomoćnikom umjetne inteligencije"),
                o("d593fd78", "Može odgovoriti na vaša pitanja, pretraživati X i generirati slike"),
                o("d0205a24", "Provjerite činjenice"),
                o("ed4177c4", "Grok može samouvjereno ponuditi pogrešne činjenične informacije, pogrešno sažeti informacije ili može propustiti određeni sadržaj. Preporučujemo da samostalno provjerite sve informacije."),
                o("c0ff98f8", "Obuka umjetne inteligencije i personalizacija"),
                o("f1a8218a", "Vaše podatke s platforme X, kao i vaše interakcije, unose i rezultate sa značajkom Grok možemo upotrebljavati za obuku modela, fino ugođavanje i personalizaciju vašeg iskustva sa značajkom Grok. Možete odustati od toga putem postavki za X. Da biste saznali više, posjetite naš Centar za pomoć."),
                o("bcbf5b6e", "Dijeljenje"),
                o("j7b5c844", "Vi ste odgovorni za razgovore koje javno dijelite. Izbjegavajte dijeljenje osjetljivih i povjerljivih podataka o sebi ili drugima u razgovorima sa značajkom Grok (pogledajte naš Centar za pomoć)."),
                o("c9f7c196", "Centar za pomoć"),
                o("b63d3d36", "Priloži"),
                o("c65f7308", "Poslužitelji trenutno rade punom parom"),
                o("f2a8655e", "Napredni alati značajke Grok trenutačno nisu dostupni."),
                o("c26b9b9c", "Datoteka"),
                o("g10600b0", "Izbornik"),
                o("j826e722", "Spremi sliku"),
                o("a9325f10", "Kopiraj sliku"),
                o("g0b12442", "Kopiranje slike nije uspjelo"),
                o("edd0c172", "Objavi sliku"),
                o("d1d3a41a", "Uredi sliku"),
                o("a2697040", "Opišite što želite promijeniti na slici"),
                o("ge1cefc4", "Alati"),
                o("e9b6d404", "Kojim alatima za pretraživanje Grok treba imati pristup?"),
                o("h15dce2e", "Napredne postavke"),
                o("ff9dc268", "Uredi upit"),
                o("e9fcdd0c", "Pitajte značajku Grok da agresivno pretraži web"),
                o("fc4e8aba", "Pitajte značajku Grok da navede razloge korak po korak"),
                o("e4ae6abe", "Pitajte Groka da preobrazi vašu sliku"),
                o("e8ade5e2", "Odaberite osobnost"),
                o("b5df32b0", "Grokajte nešto"),
                o("fb3b9776", "Rezultat Groka prilagodio je ovaj korisnik."),
                o("ca93f2ee", "Ta je poruka izbrisana."),
                o("b52484b6", "Pretraživanje..."),
                o("b8c06820", "Kopiraj tekst"),
                o("ca0f5894", "Ne sviđa mi se"),
                o("ja8d189e", "Želim odgovor u obliku teksta"),
                o("e951f04e", "Htio/htjela sam sliku"),
                o("c503b35e", "Htio/htjela sam drugu sliku"),
                o("d4371c92", "Kod je netočan"),
                o("dbe8586e", "Htio/htjela sam drugi kod"),
                o("e360eb4a", "Nisam htio/htjela kod"),
                o("a18657ca", "Pogrešna matematika"),
                o("b8b86300", "Nisam htio/htjela matematiku"),
                o("e4c34788", "Pogrešan odgovor"),
                o("b220a8c8", "Htio/htjela sam nešto drugo"),
                o("b115fd18", "Pristran odgovor"),
                o("dc637214", "Loš stil/ton"),
                o("f02e6d42", "Htio/htjela sam pretraživanje"),
                o("bbec6bba", "Loši rezultati pretraživanja"),
                o("b494d088", "Ne želim pretraživanje"),
                o("a44974f2", "Ne razumije sliku"),
                o("bd44a8a8", "Recite nam nešto više"),
                o("fcdbe764", "U čemu se Grok može poboljšati?"),
                o("bb6adb22", "Opišite problem"),
                o("h0fa15f2", "Hvala vam na povratnim informacijama!"),
                o("d700b268", "Razgovori na koje se upućuje"),
                o("cd7bdab2", "Zaboravljanjem razgovora neće ih se ukloniti iz povijesti"),
                o("f21b84de", "Upućivanje je zaboravljeno"),
                o("i52a9cb8", "Nema memorija za prikaz."),
                o("d9d36880", "Zaboravi"),
                o("g02dacc0", "Danas"),
                o("c6e845c0", "Jučer"),
                o("a5fa4a86", "Sij"),
                o("c51724a4", "Velj"),
                o("j244ceb2", "Ožu"),
                o("b22b12e0", "Tra"),
                o("h3023cac", "Svibanj"),
                o("b10dbffa", "Lip"),
                o("c81da1b6", "Srp"),
                o("d4e4d3ce", "Kol"),
                o("c3418f9a", "Ruj"),
                o("b64dada6", "Lis"),
                o("ad24ec20", "Stu"),
                o("c7902252", "Pro"),
                o("idf94bac", "Ponovno generiraj"),
                o("f7614f92", "Bez pretraživanja"),
                o("c5ade3ba", "S pretraživanjem"),
                o("c16e5b1a", "Bez generiranja slike"),
                o("i2ca65fa", "S generiranjem slike"),
                o("d3927f88", "Objavi vezu"),
                o("be37ecd4", "Kopiranje u međuspremnik nije uspjelo"),
                o("h708a4c0", "Podijeli razgovor"),
                o("g06a67e2", "Stranica za dijeljenje sadržavat će dosadašnje poruke"),
                o("a0428662", "Nije korisno"),
                o("fe4fd310", "Korisno"),
                o("bfd161bc", "Usporedi"),
                o("j5dcf1b2", "Ažurirano"),
                o("a50aaa10", "Prije stavljanja na tržište"),
                o("dd614d10", "Nakon radnog vremena"),
                o("d6b0b0d5", function (a) {
                    return "Početna cijena" + a.ttc_stock_details;
                }),
                o("e85f8b65", function (a) {
                    return "Tržišni udio" + a.ttc_stock_details;
                }),
                o("f92bf10f", function (a) {
                    return "Najveća godišnja vrijednost" + a.ttc_stock_details;
                }),
                o("d679b09f", function (a) {
                    return "Visoko" + a.ttc_stock_details;
                }),
                o("be7b9409", function (a) {
                    return "Omjer cijene i zarade" + a.ttc_stock_details;
                }),
                o("a81f5fb9", function (a) {
                    return "Najniža godišnja vrijednost" + a.ttc_stock_details;
                }),
                o("e68d4f21", function (a) {
                    return "Nisko" + a.ttc_stock_details;
                }),
                o("bc9c96f9", function (a) {
                    return "Najviše dosad" + a.ttc_stock_details;
                }),
                o("dd679fb1", function (a) {
                    return "Najmanje dosad" + a.ttc_stock_details;
                }),
                o("a22063d2", "Podijelite svoju lokaciju radi veće točnosti."),
                o("db3248a8", "Učitavanje lokacije"),
                o("ffe0e588", "Dijeljenje lokacije"),
                o("e41a0dc2", "Zatvoreno"),
                o("ieff24f4", "Puno radno vrijeme"),
                o("e2811afc", "Igre"),
                o("j081fa34", "Poredak"),
                o("i7c7f156", "Sutra"),
                o("b134ba52", "U tijeku"),
                o("j1361724", "Poluvrijeme"),
                o("fa0f1262", "Predah"),
                o("c2cac618", "Grok trenutačno podržava podatke za sljedeće: La Liga, Premier liga, Bundesliga, Serija A i Liga 1"),
                o("acae223d", function (a) {
                    return 'Results for "' + a.prompt + '"';
                }),
                o("bed99fe2", "Pogledaj manje"),
                o("f7b57ac0", "Statistika"),
                o("i7e3e446", "Utakmice"),
                o("d490977e", "Odmah"),
                o("e9f55db8", "Nedjelja"),
                o("e9cf3af8", "Ponedjeljak"),
                o("d5868a7e", "Utorak"),
                o("b5dfdb46", "Srijeda"),
                o("ab8095a2", "Četvrtak"),
                o("e298e6f2", "Petak"),
                o("ef519654", "Subota"),
                o("c609a1b4", "Ned"),
                o("j92274b0", "Pon"),
                o("ja482160", "Uto"),
                o("f4ad4cb0", "Sri"),
                o("d66bf142", "Čet"),
                o("dc17968a", "Pet"),
                o("j310a2d6", "Sub"),
                o("eaf55eb4", "Prikaži razmišljanje"),
                o("j1ab5f40", "Dodirnite za čitanje"),
                o("ee000b0d", function (a) {
                    return a.numSources + " izvora";
                }),
                o("b1ac6016", "DeepSearch pretraga je dovršena"),
                o("f766feca", "Dovršena je pretraga DeeperSearch"),
                o("e258000e", "Obavijest"),
                o("d591a772", "Obavijest nije dostupna"),
                o("bc49b728", "Obavijestit ćemo vas kad odgovor bude spreman"),
                o("d8aadeba", "Obavijest je isključena"),
                o("db832e38", "Omogućite obavijesti u postavkama preglednika"),
                o("a910cac6", "Pojavio se problem s omogućivanjem obavijesti"),
                o("g4b3a3e6", "Radnja DeepSearch dovršena je"),
                o("bf780b13", function (a) {
                    return a.minutes + "m " + a.seconds + "s";
                }),
                o("c2745fa4", "Prekinuto"),
                o("be30b6ee", "Nestabilna veza"),
                o("a4d9dbfa", "Misli"),
                o("d7cb5408", "Relevantne web-stranice"),
                o("aa7c96bb", function (a) {
                    return "Pogledajte još " + a.numResults;
                }),
                o("b58d2bd2", "Relevantne objave"),
                o("f5a2377e", "Razmišljanje "),
                o("g3ce0132", "Razmišljanje je trajalo"),
                o("f8007364", "Proširite za detalje"),
                o("ca53f780", "Sažmi detalje"),
                o("ha8fbe22", "Generirajte više slika uz Premium"),
                o("d95c232a", "Dosegnuli ste ograničenje. Nadogradite odmah da biste generirali više."),
                o("h2671312", "Više od značajke Grok uz Premium"),
                o("a1bb9c8a", "Više od značajke Grok uz Premium+"),
                o("b08ef3ae", "Nadogradite na X Premium da biste nastavili razgovor ili pokušajte ponovno kasnije."),
                o("jf9363b8", "Nadogradite na X Premium+ da biste nastavili razgovor ili pokušajte ponovno kasnije"),
                o("ef018bf6", "Analizirajte više slika uz Premium"),
                o("cdace6d2", "Nadogradi odmah"),
                o("a3186bff", function (a) {
                    return a.count + " web-stranic" + n(a.count, "e", "a", "a");
                }),
                o("f4146dda", "Koji odgovor preferirate?"),
                o("a2c2be32", "To će pomoći unaprijediti značajku Grok."),
                o("g01599b6", "Odgovor 1"),
                o("e02694e0", "Odgovor 2"),
                o("h6867fcc", "Preferiram ovaj odgovor"),
                o("b2175228", "Stigao je Grok za Android"),
                o("d2d8650c", "Najbolji doživljaj Groka u našoj novoj samostalnoj aplikaciji"),
                o("ia5bef3e", "Kako vam danas mogu pomoći?"),
                o("ge683598", "Pitajte Groka bilo što..."),
                o("fef25c88", "Besplatno isprobajte Grok odmah"),
                o("fb172aa8", "Besplatna razina značajke Grok sada je dostupna u vašoj regiji. Razgovarajte, generirajte slike i analizirajte fotografije. Primjenjuju se ograničenja."),
                o("d7af4f40", "Generirajte sliku galaksije"),
                o("gcb6c0be", "Grok može činiti pogreške. Provjerite njegove rezultate."),
                o("cb88fd82", "Upotrebljavate besplatnu verziju značajke Grok."),
                o("g27a5314", "Da biste počeli upotrebljavati značajku Grok, dodajte telefonski broj svom računu."),
                o("bdd84568", "Vaš je račun previše nov za upotrebu značajke Grok. Pokušajte ponovno kasnije."),
                o("a9109a94", "Solarpunk selo"),
                o("g986f7a4", "Generiraj sliku Solarpunk sela"),
                o("ad685264", "Planina Fuji"),
                o("hdb08284", "Izradite sliku planine Fiji u anime stilu"),
                o("a986ae84", "Leteća mačka"),
                o("a14b556a", "Generiraj sliku leteće mačke"),
                o("gc16b670", "Robot u polju cvijeća"),
                o("d5b8fa44", "Generiraj sliku robota u polju cvijeća"),
                o("da196ff6", "Astronaut na Marsu"),
                o("ae3979cc", "Izradite portret astronauta na Marsu"),
                o("a682460e", "Brzi Roadster"),
                o("e03e5514", "Izradite sliku automobila Tesla Roadster koji vozi kroz Shinjuku uz zamućenje pokreta"),
                o("e68eac68", "Divljenje polarnoj svjetlosti"),
                o("hc6e6754", "Izradite sliku osobe koja se divi polarnoj svjetlosti"),
                o("cf59f9f6", "Pomogni mi napisati motivacijsko pismo"),
                o("cd9aeac8", "Pokaži mi današnje naslove"),
                o("acf2f0be", "Preporučite RPG igru fantazije"),
                o("b9bd12e2", "Riješite problem dva zbroja u programu Python"),
                o("hf9afab0", "Omogućite DeepSearch za skeniranje interneta i platforme X, analizu informacija i pružanje detaljnih, dobro obrazloženih odgovora brzim i sistematičnim pretraživanjem."),
                o("ef3b3f04", 'Omogućite Think i uživajte u našem modelu rasuđivanja. Najbolje funkcionira u rješavanju matematičkih zadataka, znanstvenom promišljanju i pisanju koda. Također možete zamoliti Groka da "podrobnije razmisli uz Think" o bilo kojem pitanju koje bi moglo zahtijevati dublje promišljanje. '),
                o("b43636b8", "Stigao je Grok 3"),
                o("j376298c", "Grok 3 donosi dva nova načina za interakciju s našim najmoćnijim modelom: DeepSearch i Think."),
                o("e3584f8e", "Kojih 10 najuspješnijih strategija trgovanja opcijama koriste hedge fondovi"),
                o("d91b7b8a", "Koliko bi koštala izgradnja sveučilišta 1885. godine?"),
                o("e13591c0", "Primjer razgovora s Grokom"),
                o("c27ca452", "Korisnici pretplate Premium sada mogu na platformi X upotrebljavati Grok, našu najnapredniju umjetnu inteligenciju."),
                o("b6abc25a", "Stigao je Grok 2"),
                o("e1cdaf9e", "Naš najnoviji pomoćnik temeljen na umjetnoj inteligenciji kojega omogućuje X"),
                o("e6796748", "Postavite bilo koje pitanje"),
                o("db470fdc", "Grok vam pomaže u svakodnevnim zadacima, kao što je pisanje poruka e-pošte, odgovaranje na pitanja i pronalaženje recepata."),
                o("e9adc2d0", "Kodirajte bolje"),
                o("aaab6cdc", "Postavite pitanja o programiranju ili zatražite pomoć s učenjem novih koncepata."),
                o("jd08d606", "Budite kreativni"),
                o("he526d22", "Stvarajte nevjerojatne slike uz pomoć naših novih alata za generiranje slika."),
                o("i6932876", "Slika u stilu cyberpunka"),
                o("j7cdee8e", "Ostanite u toku"),
                o("f1f683c2", "Primajte ažurne informacije o najnovijim vijestima i zanimljivim temama, ekskluzivno iz servisa X."),
                o("h73b9cc0", "Vaša poruka nje poslana zato što trenutno niste povezani na čavrljanje"),
                o("b6c73662", "Pošaljite poruku"),
                o("h6070fdc", "Postavke čavrljanja"),
                o("d49326ba", "Sakrij avatare"),
                o("h79f3532", "Prikaži avatare"),
                o("a8c1e2f0", "Sakrij radnje moderatora"),
                o("jd83edd4", "Prikaži radnje moderatora"),
                o("ecca11ac", "Sakrij vremenske oznake"),
                o("e358a9f8", "Prikaži vremenske oznake"),
                o("fca62374", "Otvorite čavrljanje"),
                o("fe20f01b", function (a) {
                    return "Želite li onemogućiti korisnika/cu " + a.name + "?";
                }),
                o("f5dc372a", "Onemogućavanjem se uklanjaju sve poruke određenog korisnika/ce i sprječava mu/joj se razgovor do kraja emitiranja."),
                o("e91dd1fa", "Moderator je izbrisao poruku."),
                o("d1da3709", function (a) {
                    return "Odgovaranje korisniku " + a.username + ": " + a.body;
                }),
                o("fc82a896", "Ovo je emitiranje uživo završilo"),
                o("ea58dbd0", "Ovaj prijenos uživo još nije počeo"),
                o("cb5b6784", "Ograničio korisnik koji prenosi uživo"),
                o("eba27300", "Čavrljati mogu samo računi koje prati korisnik koji prenosi uživo"),
                o("f28984fb", function (a) {
                    return "Razgovarati mogu samo računi koje prati " + a.screenName;
                }),
                o("a3fec810", "Pretplatite se na Premium za čavrljanje"),
                o("dbf0b235", function (a) {
                    return "Pretplatite se na " + a.screenName + " za razgovor";
                }),
                o("ifbd8342", "Otvori zaslon prijenosa uživo"),
                o("f935d3ce", "Otvori razgovor"),
                o("abbe8212", "Zatvori razgovor"),
                o("hdf040dd", function (a) {
                    return "Dovršeno: " + a.percentage + " %";
                }),
                o("e4f6bd9e", "Ajoj, dogodila se pogreška. Pokušajte ponovno kasnije."),
                o("ac966f94", "Preglednik nije podržan"),
                o("ca86b62c", "ili"),
                o("d5568440", "Unesite jaču lozinku."),
                o("d0511fe6", "Taj se broj već koristi za druge račune. Upotrijebite neki drugi."),
                o("cd24fe60", "Unesite valjani telefonski broj."),
                o("gf8388fe", "Pozivni broj države"),
                o("c52be452", "Da, ukloni"),
                o("bcb388a0", "Time ćete ukloniti sve kontakte koje ste prethodno prenijeli te na svim uređajima isključiti sinkronizaciju adresara s platformom X. Imajte na umu da je za to potrebno neko vrijeme."),
                o("ec129eb6", "Uspješno ste uklonili kontakte."),
                o("f1b5048a", "Prilikom uklanjanja kontakata došlo je do pogreške."),
                o("hc72e1fc", "Unesite valjanu adresu e-pošte."),
                o("bc0ad88a", "Znak plus u adresama (adrese e-pošte sa simbolom „+”) nije dopušten. Unesite valjanu adresu e-pošte."),
                o("f134915f", function (a) {
                    return "Odabranih stavki: " + a.count;
                }),
                o("b8fb87e0", "Prikaži odabrane teme"),
                o("e854ad27", function (a) {
                    return "Tema: " + a.title;
                }),
                o("e4ff75aa", "Dogodila se pogreška. Provjerite vezu pa pokušajte ponovno."),
                o("b60eba9e", "Najprije nešto moramo provjeriti. Potvrdite da niste robot tako da točno odgovorite na upit servisa Google reCAPTCHA."),
                o("ba939778", "Jeste li robot?"),
                o("d44efc66", "Kako se zovete?"),
                o("b4867a18", "Vaše ime i prezime ne smije sadržavati riječ „Twitter”."),
                o("j1c3f4b9", function (a) {
                    return "Uredi datum rođenja " + a.birthdate;
                }),
                o("j231d352", "Prati sve"),
                o("c203db71", function (a) {
                    return "Učitavanje objava korisnika/ce @" + a.screenName;
                }),
                o("c9a1cb5e", "Taj račun ne postoji."),
                o("e7b201de", "Pokušajte pronaći neki drugi."),
                o("ica87fde", "Blokirani ste"),
                o("c7ec6faf", "Saznajte više"),
                o("e79ed125", function (a) {
                    return "@" + a.screenName + " je blokiran";
                }),
                o("gba95028", "Pogledajte objave"),
                o("a2216a79", "Saznajte više"),
                o("a2811f96", "Vremenske crte profila"),
                o("d25805fa", "Pretplate"),
                o("b05be0c8", "Istaknuto"),
                o("b9891db3", function (a) {
                    return "Objave s odgovorima korisnika/ce " + a.fullName + " (@" + a.screenName + ")";
                }),
                o("e1ab545d", function (a) {
                    return "Učitavanje objava u sklopu Pretplata korisnika/ce @" + a.screenName;
                }),
                o("ac3f4be9", function (a) {
                    return "Učitavanje kartice Istaknuto za korisnika @" + a.screenName;
                }),
                o("da38f955", function (a) {
                    return "Učitavanje članaka čiji je autor @" + a.screenName;
                }),
                o("b7363b66", "Slanje objave"),
                o("ce659062", "Nemojte svoje pretplatnike pustiti da čekaju"),
                o("f1e98cc2", "Pohvalite se najboljim objavama!"),
                o("d5c743c6", "Napišite članak"),
                o("d1e5e328", "Nakon toga pojavit će se ovdje."),
                o("hb26a1fe", "Hajde, počnite objavljivati o tom ekskluzivnom sadržaju. Sve vaše objave u sklopu Pretplata prikazat će se ovdje."),
                o("b7c3572e", "Za dodavanje značajke Istaknuto svojem profilu:\n\n1. Pronađite neku svoju objavu\n2. Dodirnite gumb izbornika „•••”\n3. Dodirnite „Dodaj na karticu / ukloni s kartice Istaknuto”"),
                o("i8123550", "Kada objavite članak, pojavit će se ovdje."),
                o("b786a77d", function (a) {
                    return "@" + a.screenName + " nema objava";
                }),
                o("j7b80397", function (a) {
                    return "@" + a.screenName + " još uvijek nije objavio/la nijednu objavu u sklopu Pretplata";
                }),
                o("jbae8c54", "Nema dostupnih istaknutih objava."),
                o("g8fb219e", "Nema dostupnih članaka."),
                o("f34dfc18", "Kada to učine, njihove će se objave prikazati ovdje."),
                o("h9346040", "Objave u sklopu Pretplata pojavit će se ovdje kada budu objavljene."),
                o("i4c3ddc6", "Članak će se pojaviti ovdje nakon što se objavi."),
                o("e0118142", "Objavi odmah"),
                o("e0c1d871", function (a) {
                    return "Objave korisnika/ce " + a.fullName;
                }),
                o("c575828f", function (a) {
                    return "Objave pretplate korisnika/ce " + a.fullName;
                }),
                o("e8300dbb", function (a) {
                    return "Istaknuto korisnika " + a.fullName;
                }),
                o("c46b420d", function (a) {
                    return "Članci čiji je autor " + a.fullName;
                }),
                o("h5a65db7", function (a) {
                    return "Objave pretplate korisnika/ce " + a.fullName + " (@" + a.screenName + ")";
                }),
                o("g7ccac9d", function (a) {
                    return "Istaknuto za korisnika " + a.fullName + " (@" + a.screenName + ")";
                }),
                o("ja6e5d35", function (a) {
                    return "Članci čiji je autor " + a.fullName + " (@" + a.screenName + ")";
                }),
                o("h088ae72", "Objave profila"),
                o("hbf64b75", function (a) {
                    return "Objave koje je korisnik/ca " + a.fullName + " (@" + a.screenName + ") označio/la sa „sviđa mi se”";
                }),
                o("a64da953", function (a) {
                    return 'Učitavanje oznaka "sviđa mi se" korisnika/ce @' + a.screenName;
                }),
                o("be3d5b9f", function (a) {
                    return "@" + a.screenName + " nije nijednu objavu označio/la sa „sviđa mi se”";
                }),
                o("d34b5306", "Kada to učine, te će se objave prikazati ovdje."),
                o("bb0e41bc", "Još nemate nijednu oznaku „sviđa mi se”"),
                o("d3d4a21c", "Dodirnite srce na nekoj objavi i pokažite da vam se sviđa. Kada to učinite, pojavit će se ovdje."),
                o("d95c3d31", function (a) {
                    return "Objave koje je " + a.fullName + " označio/la sa „sviđa mi se”";
                }),
                o("eeb7d696", "Vaše su oznake „sviđa mi se” privatne. Samo vi ih možete vidjeti."),
                o("h6e91bb1", function (a) {
                    return "Objave medijskog sadržaja korisnika/ce " + a.fullName + " (@" + a.screenName + ")";
                }),
                o("fe38901b", function (a) {
                    return "Učitavanje medijskog sadržaja čiji je autor @" + a.screenName;
                }),
                o("bc4223a3", function (a) {
                    return "@" + a.screenName + " nije objavio/la medijski sadržaj";
                }),
                o("ccc363f6", "Kada to učine, te će se objave prikazivati ovdje."),
                o("d1614228", "Svjetlo, kamera...privici!"),
                o("d7dc8d0a", "Kada objavite objave s fotografijama ili videozapisima, one će se pojaviti ovdje."),
                o("hf761abf", function (a) {
                    return "Medijski sadržaji korisnika " + a.fullName;
                }),
                o("je5311d3", function (a) {
                    return "Povezani računi " + a.fullName + " (@" + a.screenName + ")";
                }),
                o("fd0772eb", function (a) {
                    return "Učitavanje povezanih računa @" + a.screenName;
                }),
                o("ccf03833", function (a) {
                    return "Povezani računi korisnika " + a.fullName;
                }),
                o("ba5a88e4", "Prijedlozi"),
                o("ddee8ae2", "Prikaži sve poslove"),
                o("d2a04c68", "Zapošljavamo"),
                o("dc12a126", "Pogledajte upute"),
                o("e2acb642", "Kontakt"),
                o("ha9b8035", function (a) {
                    return "Poziv na " + a.phoneCode + " " + a.phoneNumber;
                }),
                o("g2244521", function (a) {
                    return "SMS na " + a.phoneCode + " " + a.phoneNumber;
                }),
                o("b44c0205", function (a) {
                    return a.day + " u " + a.time;
                }),
                o("de1123f5", function (a) {
                    return "u " + a.time;
                }),
                o("e2a5bd50", "Otvoreno 24 sata dnevno"),
                o("e0d7da6c", "Zatvara se"),
                o("i7059f56", "Otvara se"),
                o("a7391348", "Radno vrijeme nije dostupno"),
                o("c9eba532", "Ažurirano radno vrijeme"),
                o("b5fea270", "Vrtuljak s proizvodima"),
                o("h10bb33c", "Želite prijaviti proizvod?"),
                o("dda5d96a", "Prijavite proizvod"),
                o("fca46f40", "centru za pomoć"),
                o("c71a053b", "kliknite ovdje"),
                o("d7f8a117", function (a) {
                    return a.days + "-dnevna analitika";
                }),
                o("cae20e93", function (a) {
                    return a.days + " dana";
                }),
                o("gc767fda", "Vaše privatno"),
                o("c7c85e0c", "Otključajte analitiku"),
                o("b15df4b4", "Broj pregleda vaših objava na platformi X."),
                o("e5fe61e0", "Prikazi"),
                o("d1018321", function (a) {
                    return a.value + " prikaza na vašim objavama u zadnjih " + a.period;
                }),
                o("e623137c", "Stopa angažmana"),
                o("d9d34182", "Sudjelovanje u objavama podijeljeno s brojem prikaza."),
                o("aeee0182", "Posjeti profilu"),
                o("b2bde01a", "Broj prikaza profila putem vaših objava"),
                o("faf4c1f5", function (a) {
                    return a.value + " posjeta vašeg profila u zadnjih " + a.period;
                }),
                o("d5f1e554", "Klikovi na vezu"),
                o("cf573986", "Broj klikova na URL-ove u vašim objavama"),
                o("j761451e", "Nova praćenja"),
                o("e1a87d14", "Broj novih praćenja koje ste stekli (ne uključuje osobe koje su vas prestale pratiti)"),
                o("j590577e", "Broj odgovora na vaše objave"),
                o("ia1da622", "Broj oznaka „sviđa mi se” koje su vaše objave dobile"),
                o("cfd1036b", function (a) {
                    return a.value + " oznaka sviđanja na vašim objavama u zadnjih " + a.period;
                }),
                o("ja42739e", "Proslijeđene objave"),
                o("ca6e8de0", "Broj prosljeđivanja vaših objava"),
                o("b1b4d57e", "Prikazi videozapisa"),
                o("bdaf100e", "Broj pregleda videozapisa u vašim objavama"),
                o("ca826772", "Pregledi medijskog sadržaja"),
                o("j43b8f52", "Broj pregleda vaših medijskih sadržaja (GIF-ova, slika, videozapisa)"),
                o("d3969c06", "Postotak potpunih pregleda"),
                o("c58c3476", "Broj potpunih pregleda videozapisa podijeljen s brojem pregleda videozapisa"),
                o("c8aae62a", "Broj oznaka „sviđa mi se” koje su vaše objave dobile"),
                o("g70825e0", "dijeljenja"),
                o("c6fbefd4", "Broj dijeljenja koja su vaše objave dobile"),
                o("dbe9353e", "Angažmani"),
                o("a3a4e8f8", "Mjesečno"),
                o("eb2e0272", "Linija"),
                o("e298b08e", "Stupac"),
                o("bbc6e7c6", "Sjedinjene Američke Države"),
                o("h88ad664", "Kanada"),
                o("gd139910", "Ujedinjeno Kraljevstvo"),
                o("e08feda2", "Japan"),
                o("fad772ce", "Bliski istok i Sjeverna Afrika"),
                o("a396dd6c", "Azija-Pacifik"),
                o("j942b16c", "Europa i rastuća tržišta"),
                o("j3cc0c00", "Latinska Amerika"),
                o("fe90a642", "13 – 17"),
                o("a5c91a8e", "18 – 24"),
                o("cf30cdfa", "25 – 34"),
                o("gf672f7c", "35 – 44"),
                o("jf28b41c", "45 – 54"),
                o("ja78da94", "55 – 64"),
                o("g42ea0b0", "više od 65"),
                o("f21807e0", "Osobe koje vas ne prate"),
                o("d61b2bcc", "Objave u zajednici"),
                o("h3525cb8", "Nije određeno"),
                o("a3c544e8", "Države s najviše korisnika"),
                o("f30795d0", "Otvara fotografiju profila"),
                o("gd7acb84", "Postavi profil"),
                o("b7636014", "Poruka"),
                o("haad225c", "Poklonite pretplatu na Premium"),
                o("b63c46ed", function (a) {
                    return "Pretplatite se na sadržaj autora @" + a.screenName;
                }),
                o("j33d8902", "Uplatite donaciju"),
                o("a8ab3d08", "Pošalji putem usluge"),
                o("d740d2d9", function (a) {
                    return "Veza " + a.service + " kopirana je u međuspremnik";
                }),
                o("a7cf1e98", "Bandcamp"),
                o("d876e67e", "Adresa za bitcoin"),
                o("f85f6760", "Cash App"),
                o("a32a7c06", "Adresa za Ethereum"),
                o("cc1a3bc4", "GoFundMe"),
                o("d4d74bb4", "Patreon"),
                o("h14fbc52", "PayPal"),
                o("h1198dcc", "Venmo"),
                o("j4e0fd88", "Prikaži više"),
                o("df7cb6d4", "Profesionalne kategorije"),
                o("ec429e79", "Saznajte više."),
                o("j04c717a", "+ dodajte iskustvo"),
                o("a1ea2f12", "Sretan rođendan!"),
                o("g8191e78", "Danas slavi rođendan!"),
                o("c1b819ba", "Ovdje se danas prikazuju rođendanski baloni"),
                o("ad7a451e", "Prevedi biografiju"),
                o("f543dbf6", "Provjereni telefonski broj"),
                o("cef4e8cf", function (a) {
                    return "Želite li omogućiti korisnika/cu @" + a.screenName + "?";
                }),
                o("h03a094a", "Objave s tog računa sada će biti omogućene na vremenskoj crti naslovnice."),
                o("a6e94418", "Onemogućili ste objave s tog računa."),
                o("dd3d10f6", "Pregledava se"),
                o("i06d4712", "Našim tim provodi brzi pregled vašeg računa. Trebali biste ovdje vidjeti kvačicu u roku od nekoliko dana."),
                o("j354c438", "Oznaka „Pregledava se” vidljiva je samo vama."),
                o("e018b5fa", "Nadogradite da biste provjerili autentičnost"),
                o("b74bd6c6", "Taj je račun provjeren jer je poznat po sadržaju u kategoriji državnih ustanova, vijesti, zabave ili neke druge određene kategorije."),
                o("e1e0c916", "Taj je račun provjeren jer ima pretplatu na Premium."),
                o("eb5d72e4", "Taj račun ima zaštićene objave. Mogu ih čitati samo pratitelji."),
                o("g776ca50", "Potvrđeni račun"),
                o("ad465ee8", "Postavi primarno povezano"),
                o("d01612d3", function (a) {
                    return "Provjereno od " + a.date + ".";
                }),
                o("e14d8719", function (a) {
                    return a.year + " pr. n. e.";
                }),
                o("b7caffb7", function (a) {
                    return "" + a.name;
                }),
                o("ea8c425f", function (a) {
                    return "@" + a.viewerScreenName + ", još niste provjerili svoju autentičnost";
                }),
                o("b2d0c0f4", "Dobijte provjerenu oznaku „sviđa mi se” "),
                o("f464d54d", function (a) {
                    return "@" + a.profileScreenName;
                }),
                o("g47cdc0e", " kako biste se istaknuli i postigli bolji doseg odgovora."),
                o("d834ab9c", "Da, prikaži profil"),
                o("cb339f26", "Oprez: taj se račun neobično ponaša"),
                o("hf06085e", "Ovo vam se upozorenje prikazuje jer je otkrivena neuobičajena aktivnost tog računa. Želite li ga ipak pogledati?"),
                o("aa959f36", "Oprez: taj je račun privremeno ograničen"),
                o("jf604336", "Oprez: taj profil možda ima osjetljiv sadržaj"),
                o("c9bfda48", "Oprez: ovaj profil možda sadrži potencijalno osjetljiv sadržaj. Ovo vam se upozorenje prikazuje jer taj profil sadrži potencijalno uvredljive slike ili tekst. Želite li ga ipak pogledati?"),
                o("g29ebf26", "Ovo se upozorenje pojavljuje zbog objave potencijalno uvredljivih slika ili jezika. Želite li ipak pogledati?"),
                o("jcfb7fba", "Ovo vam se upozorenje prikazuje zato što je račun možda prekršio pravila platforme X. Želite li ipak pogledati?"),
                o("bd598c70", "Te su objave zaštićene"),
                o("e617164b", "Saznajte više"),
                o("g8475f82", "Račun je privremeno blokiran"),
                o("j5e1cf59", "pravila platforme X"),
                o("gbf342a4", "Račun je privremeno onemogućen"),
                o("defba9a4", "Dobro došli na X!"),
                o("d11934ec", "Primite obavijest"),
                o("a2cd2b0a", "Počnite pratiti i primite obavijest"),
                o("a70bae53", function (a) {
                    return "Sada ćete dobiti obavijest kad " + a.fullName + " nešto objavi.";
                }),
                o("f51a4c29", function (a) {
                    return "Sada možete pratiti korisnika/cu " + a.fullName + " i primiti obavijest svaki put kada objavi objavu.";
                }),
                o("cfa5e58d", function (a) {
                    return "Sada pratite korisnika/cu " + a.fullName + " te ćete dobiti obavijest kad objavi objavu.";
                }),
                o("be3a652d", function (a) {
                    return "Dobit ćete obavijest kad " + a.fullName + " objavi.";
                }),
                o("f089620c", "Vaša vremenska crta na naslovnici"),
                o("a1ab9c80", "U toj Zajednici još nema objava"),
                o("b32c4fb0", "Kada ih bude, vidjet ćete ih ovdje."),
                o("bf17deda", "Krenimo!"),
                o("c3fbf1da", "Ovo je najbolje mjesto da provjerite što se događa u vašem svijetu. Odmah pronađite osobe i teme koje želite pratiti."),
                o("a2515900", "Čekamo objave"),
                o("je23cdb2", "Ovdje će se pojaviti objave korisnika s tog Popisa."),
                o("e69b7e02", "Upravljanje računima"),
                o("b6bd6ae4", "Trenutni račun"),
                o("d577bccd", function (a) {
                    return "Ako imate više računa za X, možete ih jednostavno dodati i prebacivati s jednog računa na drugi. Možete dodati najviše sljedeći broj računa " + a.maxAccounts + ".";
                }),
                o("dc65b3e5", function (a) {
                    return "Dosegnuli ste ograničenje broja računa od " + a.maxAccounts + ".";
                }),
                o("b8045b33", function (a) {
                    return "Dosegnuli ste ograničenje broja računa od " + a.maxAccounts + ".";
                }),
                o("d075dc89", function (a) {
                    return "Dosegnuli ste ograničenje broja osobnih računa od " + a.maxAccounts + ".";
                }),
                o("bade139e", "Odjava sa svih računa"),
                o("ae33b982", "Želite li se odjaviti sa svih računa?"),
                o("fa07bf68", "To će se primijeniti na sve račune u svim karticama preglednika."),
                o("f7865ab6", "Nije vaš račun?"),
                o("a35248e4", "To nije moj račun"),
                o("f794a67c", "To je moj račun"),
                o("j79c0ff7", function (a) {
                    return "S ovog smo računa uklonili adresu e-pošte " + a.emailAddress;
                }),
                o("fb46383c", "Adresu e-pošte nije moguće ukloniti s vlastitog računa."),
                o("gcfdbc2b", function (a) {
                    return "Ova adresa e-pošte nije više povezana s računom za X " + a.screenName + ".";
                }),
                o("f351663c", function (a) {
                    return "@" + a.screenName;
                }),
                o("baaa89c4", function (a) {
                    return "" + a.emailAddress;
                }),
                o("h75b475c", function (a) {
                    return "@" + a.screenName;
                }),
                o("a8f0e157", "postavke obavijesti."),
                o("h1732cde", function (a) {
                    return "" + a.emailAddress;
                }),
                o("d374a600", function (a) {
                    return "@" + a.screenName;
                }),
                o("c1d75571", "Zašto je vaša adresa e-pošte povezana s računom za X koji nije vaš?"),
                o("ac71e82f", "Saznajte više"),
                o("b069d89c", "Ciljna skupina"),
                o("f5a61ae6", "Sadržaj"),
                o("a4df00c0", "Kartice Analitika računa"),
                o("ac248548", "Pregled računa"),
                o("je62f358", "Zadnjih 20 dana"),
                o("bc2f16a4", "Aktivna vremena"),
                o("d603209e", "Raščlamba aktivnosti"),
                o("ac3fb6de", "Prisutni u Prostoru"),
                o("ie181958", "Uvid u publiku"),
                o("j6f8d422", "Prosječno vrijeme gledanja vaših videozapisa."),
                o("e7479ce4", "Prosječno vrijeme gledanja"),
                o("g1dfa7d0", "Pros."),
                o("h7d28188", "Natrag na sadržaj"),
                o("if2704e4", "Back to Live Overview"),
                o("ea928ae4", "Natrag na Prostore"),
                o("e8c07c22", "broadcast"),
                o("a4ce6e68", "Broadcast Metrics"),
                o("b2214c74", "Total number of views for this broadcast"),
                o("d4fcf83a", "Total time viewers spent watching this broadcast"),
                o("a89b0322", "Otkazano"),
                o("j3cb12ea", "Istodobni slušatelji"),
                o("b93931ee", "Broj objava vašeg sadržaja."),
                o("a1814798", "Broj vaših odgovora na objavu."),
                o("addd5575", function (a) {
                    return "Pe" + a.date;
                }),
                o("a92e62bd", function (a) {
                    return "Po" + a.date;
                }),
                o("g7450c57", function (a) {
                    return "Su" + a.date;
                }),
                o("h08883e7", function (a) {
                    return "Ne" + a.date;
                }),
                o("ddb16777", function (a) {
                    return "Če" + a.date;
                }),
                o("h8f395b3", function (a) {
                    return "Ut" + a.date;
                }),
                o("b8710b43", function (a) {
                    return "Sr" + a.date;
                }),
                o("d9c70840", "Uređaj"),
                o("ba55e824", "Zatvoreno"),
                o("id276c42", "Broj interakcija s vašim sadržajem."),
                o("j033d090", "Procijenjeni prihod"),
                o("efd4d7d4", "Filtar za Prostore"),
                o("a1334290", "Prvih 48 sati"),
                o("gc10a3b0", "Osobe koje su vas počele pratiti tijekom vremena"),
                o("efa0f858", "Broj osoba koje su vas počele i prestale pratiti tijekom vremena. To ne utječe nužno na vaš broj osoba koje vas prate."),
                o("g2b06cc6", "Podaci o rodu možda su izvedeni"),
                o("b66b3baa", "sati"),
                o("cf8a0772", "Impression to Views"),
                o("g13d8010", "Last 48 Hours"),
                o("d5627596", "Last Hour"),
                o("baf120a6", "Najmanji angažman"),
                o("f2382014", "UŽIVO"),
                o("c4a7a6aa", "Live data"),
                o("a992032a", "Livestream Analytics"),
                o("ie45edda", "Pregled emitiranja uživo"),
                o("e30fc268", "Live Viewers"),
                o("bd37f68e", "Aktivnost u medijima"),
                o("fe074210", "min"),
                o("jd03a1b8", "Minutes Watched"),
                o("a20e91e8", "minutes watched"),
                o("ic2bebee", "Monetizirano"),
                o("a1d642c8", "Najveći angažman"),
                o("ifc4c1f8", "Broj novih osoba koje su vas počele pratiti zahvaljujući tom sadržaju."),
                o("fff1315a", "Za odabrani filtar nema dostupnih prijenosa uživo"),
                o("jbcb09a8", "Još nema dovoljno podataka"),
                o("df846d6c", "Nije pronađena nijedna objava za odabrani vremenski raspon."),
                o("g2ba40f6", "Za odabrani filtar nema dostupnih Prostora"),
                o("j44061a0", "Nije dostupno"),
                o("c4a93912", "Nije primjenjivo"),
                o("a6b78788", "No viewer data available"),
                o("b2438638", "od ukupno"),
                o("ic0399e0", "Organski pregledi"),
                o("ja5c444a", "Razdoblje plaćanja"),
                o("f04e025e", "Najveći broj istodobnih slušatelja"),
                o("d6d10662", "Peak Viewers: "),
                o("d147bea2", "Vratite se ponovno kasnije"),
                o("f0336d68", "Analiza objava"),
                o("g85fbd2e", "ID objave"),
                o("ice5c5b6", "Broj prikaza tog sadržaja korisnicima."),
                o("hf4f9bfe", "Objavi vezu"),
                o("bf5ebf5c", "Objave i odgovori"),
                o("b211652e", "Objave tijekom vremena"),
                o("f2efec0a", "Pre-Published"),
                o("i61e0302", "Prethodno"),
                o("e08a706a", "Promovirani pregledi"),
                o("cbc99192", "Datum objavljivanja"),
                o("a83c2a9a", "Realtime"),
                o("e9d72896", "Snimljeno"),
                o("gede4932", "Ponovno reproduciraj"),
                o("h0de359c", "Broj prosljeđivanja vašeg sadržaja."),
                o("e0568f2c", "Zakazano za: "),
                o("gd86baa8", "Zakazan početak"),
                o("fef3bfae", "Odaberite druge mjerne podatke"),
                o("g7e3d2a4", "Analitički podaci o Prostoru"),
                o("fbc79a40", "Pregled Prostora"),
                o("d077112a", "Statistika Prostora"),
                o("cf3709da", "Status"),
                o("e797dc32", "Stream time: "),
                o("b649d8cc", "Samo za pretplatnike"),
                o("j9282130", "Minijatura prijenosa uživo"),
                o("g629b8b0", "Timed Out"),
                o("eb87323c", "This shows analytics data for the selected time period since the livestream happened."),
                o("i6a75722", "Time Range"),
                o("c602f5b8", "Ukupno"),
                o("b35e68ae", "Ukupno sudionika"),
                o("h78ee79a", "Ukupno ponovno gledanje snimke"),
                o("e3efaed0", "Vrsta"),
                o("c37993e2", "Broj osoba koje su vas prestale pratiti"),
                o("b1ed35d0", "Unique Viewers"),
                o("bfad9306", "Nepoznato"),
                o("b5a58f36", "Untitled Broadcast"),
                o("i70f5278", "Preneseno:"),
                o("a98b58b6", "Provjerene osobe koje prate"),
                o("a5de67ca", "Broj provjerenih osoba koje prate koje su potvrdile svoj račun."),
                o("g3367ff4", "Dovršenost videozapisa"),
                o("a7b48b36", "Postotak potpuno odgledanih videozapisa."),
                o("a2580f2a", "Potpunih pregleda"),
                o("ff95a9cc", "ID videozapisa"),
                o("a97e358e", "Veza na videozapis");
            o("e10e8b46", "Prikazuju se samo videozapisi od proteklih 100 dana."),
                o("ba37f6da", "Pregled videozapisa"),
                o("f19846b2", "Sličica videozapisa"),
                o("ccd6f4a8", "Naslov videozapisa"),
                o("c8410542", "Broj pregleda vašeg videozapisa"),
                o("a532072a", "Gledatelji"),
                o("d9508ab0", "prikaza"),
                o("d9f9dec0", "Prikaži Prostor"),
                o("h0c1f37a", "Prikaži analitičke podatke o Prostoru"),
                o("e41fffbc", "Ukupno vrijeme gledanja vaših videozapisa."),
                o("if2909ba", "Vrijeme gledanja"),
                o("i0e5bf4c", "Vaši videozapisi"),
                o("ed99baea", "Rani pristup beta verziji"),
                o("gf898b70", "Napredno pretraživanje"),
                o("d2a43a7a", "sadrži i „ai” i „pokretanje”"),
                o("a8584698", "AI pokretanje"),
                o("jb6f9292", "sadrži točan izraz „ai pokretanje”"),
                o("j8ee77c4", "„ai pokretanje”"),
                o("d0480758", "sadrži ili „ai” ili „pokretanje” (ili oboje)"),
                o("f0048fa2", "ai ILI pokretanje"),
                o("da0df186", "sadrži „ai”, ali ne „pokretanje”"),
                o("f2f463ea", "ai-pokretanje"),
                o("a10a357e", "sadrži „ai” i ima najmanje 50 oznaka „sviđa mi se”"),
                o("ca8ed1e8", "ai min_faves:50"),
                o("i945a3f2", "sadrži „ai” i URL koji sadrži riječ „grok”"),
                o("a9348088", "ai url:grok"),
                o("b5c3cdbc", "spominjanje računa za X „grok”"),
                o("e2634592", "@grok"),
                o("i88ba038", "Upozorenje onemogućeno"),
                o("j2cb0214", "Upozorenje omogućeno"),
                o("ae852cd0", "Primajte obavijest svakog ponedjeljka sa sažetkom promjena u ovoj aktualnoj temi."),
                o("d1d8633e", "Upozorenja Radara"),
                o("g096d0cc", "Svi upiti"),
                o("e77035aa", "Izbriši traženje"),
                o("a895ec64", "Je ste li sigurni da želite obrisati taj upit?"),
                o("a4f5e431", function (a) {
                    return "„" + a.name + "” izbrisan";
                }),
                o("db28b535", function (a) {
                    return "Izbriši „" + a.name + "”";
                }),
                o("bcf89b8a", "Uredite upit"),
                o("f0002e72", "Istražite rezultate"),
                o("b0924d7a", "Izrada upita nije uspjela. Pokušajte ponovno."),
                o("cfd731ee", "Brisanje upita nije uspjelo. Pokušajte ponovno."),
                o("g08bff82", "Onemogućavanje upozorenja nije uspjelo. Pokušajte ponovno."),
                o("fa1fd798", "Omogućavanje upozorenja nije uspjelo. Pokušajte ponovno."),
                o("ia7dce48", "Generiranje upita nije uspjelo. Pokušajte ponovno."),
                o("d494d4aa", "Ažuriranje upita nije uspjelo. Pokušajte ponovno."),
                o("i4a49588", "Globalni gradski trg"),
                o("c0799860", "Dan"),
                o("b43679d2", "Sat"),
                o("f1fce85e", "Minuta"),
                o("ea3e0ec4", "Tržište"),
                o("d8d9aec2", "Dosegnuli ste maksimalni broj upita"),
                o("c9aa246e", "Novi upit"),
                o("b9b7a50e", "Prilagodite kriterije pretraživanja u bilo kojem trenutku kako biste ostali ažurni"),
                o("i9a09bb6", "Napišite upit, a Radar neka prati ažuriranja u stvarnom vremenu"),
                o("da20008c", "Nije dostupna nijedna aktualna tema. Pokušajte proširiti kriterije pretraživanja."),
                o("e78ca8c6", "Pokušajte ponovno kasnije"),
                o("ce3216ec", "Upit"),
                o("ef609bb8", "Što se događa na platformi X?"),
                o("a636a738", "Zatražite naknadno praćenje..."),
                o("d92ec304", "Upit nije pronađen"),
                o("bbf29e20", "Poništi odabir"),
                o("ie3321ea", "$NVDA (prodaj ILI kupi)"),
                o("cf223996", "Sažetak"),
                o("a27ccab8", "Aplikacija za sve"),
                o("i66136aa", "Najpopularnije"),
                o("e7c44382", "Jedinstveni korisnici"),
                o("d559e5b8", "Upit bez naslova"),
                o("i1d9be88", "Upotreba operatora naprednog pretraživanja"),
                o("ae9f604c", "Povezani račun"),
                o("a7d2d8f4", "Prikaži samo povezane račune"),
                o("je21ffbe", "Broj osoba koje vas prate"),
                o("i8d9797c", "Cijeli profil"),
                o("a36bebf2", "Maksimalno"),
                o("i5ef8b4a", "Maksimalan broj osoba koje vas prate"),
                o("fcf0ec1c", "Minimalno"),
                o("ccc0bbc6", "Minimalan broj osoba koje vas prate"),
                o("je1bd63a", "Otključajte moć platforme X za pronalazak talenata, potencijalnih klijenata za prodaju i strateških partnera"),
                o("i6766078", "Pretražite najbolje talente, izglede za prodaju i partnere"),
                o("d509bbd4", "Pronađite ljude na platformi X"),
                o("a5afaf54", "Ponovno postavi"),
                o("i9006fb0", "Ponovno postavi sve"),
                o("fa598a82", "Rezultati"),
                o("g3688a48", "Odaberite mogućnost"),
                o("ab5a91a4", "Korisnik"),
                o("cef20fd0", "Provjera autentičnosti"),
                o("a2b286b0", "Promovirajte poslove, vlastite proizvode i poruke."),
                o("e2895a38", "Do 12.000 USD u kreditima za oglašavanje"),
                o("becba496", "Krediti za oglašavanje dostupni su za ponudu ograničenog trajanja."),
                o("ded395ae", "Pristupite analitici svojeg poslovanja na jednom mjestu"),
                o("a47a20d4", "Napredna analitika"),
                o("b56d3ec6", "Sve organizacije i povezani računi dobivaju Premium+ s pristupom usluzi Grok 3"),
                o("ie663a1a", "Ostavrite brzu pomoć i eskalacije uz namjenski tim za korisničku podršku"),
                o("j7f75bec", "VIP podrška"),
                o("ebf5ec26", "Uskoro"),
                o("eeb424e2", "Kreirajte svoju priču."),
                o("ab62db18", "Stvorite svoju ciljnu skupinu."),
                o("j2c9bc4e", "Istaknite se zlatnom kvačicom i dodajte povezane račune da biste oglašavali svoju tvrtku na organski način."),
                o("e7930f82", "Istaknite se pred drugima"),
                o("e77ea57e", "Najmoćniji alati za poticanje prodaje, zapošljavanje najboljeg kadra i pristup ekskluzivnim uvidima u tržište."),
                o("a558a254", "Otključajte rast na platformi X uz Provjerene organizacije"),
                o("b099f256", "Tržišni trendovi i mišljenje javnosti na dodir gumba uz značajku Radar."),
                o("ecb7fa02", "Poslovna inteligencija"),
                o("cb5faa2a", "Pomoću svojih kredita za oglase pronađite najsposobnije osobe na svijetu."),
                o("c67b260c", "Promoviranje posla"),
                o("if48b5c2", "Prenesite i promovirajte poslove pred milijunima ljudi izravno na platformi X."),
                o("aa0d60aa", "mjesečno"),
                o("cebfdb52", "Organizacije"),
                o("i9b6fcbc", "Pomoću značajke Traženje osoba pronađite inženjere, potencijalne klijente za prodaju i autore sadržaja i kontaktirajte s njima. "),
                o("a6b5c3f0", "Pronađite najbolje ljude"),
                o("a51acce8", "Vrati se na Osnovni plan"),
                o("ie132f40", "Nadogradi i zadrži potpuni pristup"),
                o("b0d26232", "SPREMI"),
                o("f563b353", function (a) {
                    return "PONUDE ISTJEČU " + a.endDate;
                }),
                o("b29b2e69", function (a) {
                    return a.percentOff + " % popusta do " + a.endDate;
                }),
                o("j3cfae29", function (a) {
                    return a.discountedCost + " godišnje tijekom prve godine. Nakon toga " + a.baseCost + " godišnje.";
                }),
                o("jb74aea4", "Svaki dodatni povezani račun iznosi 50 USD po nadimku godišnje, a krediti za oglase podliježu ograničenjima."),
                o("fc9fc856", "Svaki dodatni povezani račun iznosi 600 USD po nadimku godišnje, a krediti za oglase podliježu ograničenjima."),
                o("fc785aec", "Uzmite Osnovnu pretplatu"),
                o("edf32072", "Sve u pretplati Premium i još:"),
                o("b3caf146", "Provjerena zlatna oznaka"),
                o("a1dbf70c", "200 USD besplatnih mjesečnih kredita za oglase"),
                o("i2a2286c", "2500 USD besplatnih kredita za oglase"),
                o("e8d0fd04", "Radar Basic"),
                o("cf038828", "Usluga namjenske podrške"),
                o("efd56302", "Dodajte povezane račune na svoju stranicu"),
                o("bc1bb6aa", "1000 USD besplatnih mjesečnih kredita za oglase"),
                o("e1669560", "12.000 USD besplatnih kredita za oglase"),
                o("hb973da4", "Puni pristup značajci Radar"),
                o("g444c82e", "Rani pristup Poslovnim značajkama"),
                o("a1bc0bcf", function (a) {
                    return a.cost + " se naplaćuje na godišnjoj razini";
                }),
                o("i0f58dac", "Sve tarife podliježu primjenjivim porezima i naknadama."),
                o("je182d8a", "Za tvrtke"),
                o("ge609bd6", "Obratite se prodaji"),
                o("je6d2aec", "Modularno određivanje cijena"),
                o("ed33b888", "Pretraživanje osoba"),
                o("ade522c4", "Uvidi"),
                o("h551f266", "Krediti za oglašavanje"),
                o("c74f7856", "Paketi za povezane račune"),
                o("b9b41f7a", "Optimizacija traženja"),
                o("b1f368ee", "Namjenska podrška"),
                o("j189c5b2", "Sve u pretplati Pro plus:"),
                o("i7f4b58e", "Prilagođeno"),
                o("h45fd8ae", "Uzmite Puni pristup"),
                o("f1c3b32c", "Sve u pretplati Osnovno plus:"),
                o("f4307806", "Popularno"),
                o("ce7c21de", "Godišnje"),
                o("a21a64f6", "„X za poslovne korisnike sjajna je stvar! Zaposlili smo izvrsne ljude uz pomoć alata za traženje talenata.”"),
                o("dbb3fc54", "Suosnivač i izvršni direktor"),
                o("c1600210", "„X za poslovne korisnike nije potrebno objašnjavati. Pomogao nam je pronaći klijente promatranjem tržišnih uvida.”"),
                o("fb3e127a", "Vremenski ograničena novogodišnja ponuda"),
                o("a5fee980", "Iskoristite 30 % popusta na godišnje planove i do 12.000 USD besplatnih kredita za oglase ako se pretplatite do"),
                o("c9051cac", "dana"),
                o("ie035790", "s"),
                o("cbd3dfaa", "Isprobajte beta verziju"),
                o("h260121e", "Istaknite svoja najbolja radna mjesta publici."),
                o("ae0ad604", "Stranice karijera"),
                o("cbd4ba6e", "Otkrijte najbolje talente i povežite se s njima"),
                o("b71927b2", "Neograničene objave poslova"),
                o("a0b5b7d4", "Otključajte ciljanje temeljeno na umjetnoj inteligenciji uz naš model oglašavanja performansi."),
                o("aa3f0e90", "Promoviranje poslova uz ciljanje temeljeno na umjetnoj inteligenciji"),
                o("hc67be9e", "Početak"),
                o("c9a67f9e", "Započnite zapošljavati"),
                o("jd937cda", "Dosegnite milijune relevantnih kandidata uz Zapošljavanje platforme X. Sinkronizirajte svoje poslove, izradite prilagođene stranice karijera i postavite promociju posla za prikaz ciljanih oglasa na vremenskoj crti."),
                o("d92d2632", "Najbolja platforma za zapošljavanje najboljih talenata"),
                o("c10bee94", "Mjesečne prijave"),
                o("ib69d218", "Više od 250.000"),
                o("i953576c", "Tvrtke koje zapošljavaju"),
                o("j395b846", "Više od 10.000"),
                o("g48a59c2", "Korisnici"),
                o("j228841a", "Više od 500 milijuna"),
                o("da570714", "Integracije ATS-a"),
                o("h25a3132", "Do 2400 USD u kreditima za oglase za pomociju posla"),
                o("f25a2004", "Pogodnosti pretplate Premium+"),
                o("c237b78e", "Povezani računi za vaš tim za zapošljavanje"),
                o("fc3d58fe", "Do 12.000 USD u kreditima za oglase za pomociju posla"),
                o("eb5f060c", "Počni pratiti"),
                o("a19cf46f", function (a) {
                    return "Želite li prestati pratiti @" + a.screenName + "?";
                }),
                o("e4c91b70", "Objave tog/te korisnika/ce više se neće pojavljivati na vremenskoj crti odjeljka Za vas. Njegov/njezin profil i dalje možete vidjeti, osim ako mu/joj objave nisu zaštićene."),
                o("j650c8dc", "Želite odbaciti zahtjev za praćenje?"),
                o("c02f8de1", function (a) {
                    return "To će poništiti vaš zahtjev za praćenje, a @" + a.screenName + " ga više neće vidjeti.";
                }),
                o("e2ee95a1", function (a) {
                    return "Datum pridruživanja: " + a.date;
                }),
                o("d64fef58", "Još niste objavili"),
                o("e2a098dc", "Sortiraj prema"),
                o("c5709148", "Prikazuje maksimalno 1000 objava"),
                o("ca5e57bd", function (a) {
                    return "Objava" + a.noun;
                }),
                o("d16c1ab6", "Najnovije"),
                o("f0a28956", "Najmanje najnovijih objava"),
                o("h06df79a", "Najviše prikaza"),
                o("c44744e6", "Najmanje prikaza"),
                o("j6b98664", "Najviše oznaka „sviđa mi se”"),
                o("a669f95c", "Najmanje oznaka „sviđa mi se”"),
                o("a0c66496", "Najviše odgovora"),
                o("h45174fe", "Najmanje odgovora"),
                o("ea20f92a", "Najviše proslijeđenih objava"),
                o("c9a63566", "Najmanje proslijeđenih objava"),
                o("b40d33e4", "Više detalja"),
                o("gedf636e", "Klikovi na URL"),
                o("bbc12690", "Klikovi na znak ljestvi"),
                o("g7ede992", "Klikovi na stalnu poveznicu"),
                o("f5210bae", "Veza"),
                o("b1f77a7c", "Izvoz podataka"),
                o("j62d2af4", "Pregled objave"),
                o("dc70a568", "Analiza objave"),
                o("j9f65603", function (a) {
                    return "00 h" + a.date;
                }),
                o("d6ad20d7", function (a) {
                    return "4 h" + a.date;
                }),
                o("d9bcb257", function (a) {
                    return "8 h" + a.date;
                }),
                o("b83b49f1", function (a) {
                    return "12 h" + a.date;
                }),
                o("h52ae229", function (a) {
                    return "16 h" + a.date;
                }),
                o("i07e47b9", function (a) {
                    return "20 h" + a.date;
                }),
                o("h7cd94fe", "Grafikon sa zamućenom crtom"),
                o("b10621d4", "Pogledajte cijelu statistiku"),
                o("c23def7a", "Broj sudjelovanja"),
                o("jc14a9e8", "Potrošnja"),
                o("d16b5a18", "Ukupna potrošnja na oglase"),
                o("g01559c6", "Metrika za proteklih 7 dana"),
                o("ddc8d458", "Pristupite starim podacima"),
                o("j74eab48", "Napredna analitika pruža se ekskluzivno korisnicima pretplate X Premium"),
                o("i02166f6", "Shvatite svoje ciljne skupine"),
                o("cef977e4", "Izvozite podatke"),
                o("f88e624e", "Razgovor je ažuriran"),
                o("e15e5637", function (a) {
                    return "U zadnjih " + n(a.count, a.count + " h", "jedan sat", a.count + " h");
                }),
                o("h5ab8b0e", "Korisnici koje oni prate"),
                o("a0f01bca", "Kliknite da biste promijenili razdoblje"),
                o("he30b16c", "Odjeljak „Korisnici koje oni prate” proširuje rezultate prikazom članaka koje su najviše dijelili korisnici koje vi pratite i korisnici koje oni prate."),
                o("b0589550", "Dohvati još novosti"),
                o("b60e4f78", "Pogledajte"),
                o("e950f6e0", "U vašoj mreži nema dijeljenih članaka."),
                o("e7dcfb81", "više računa"),
                o("h965157c", "Ta stranica nije podržana."),
                o("cd388852", "Posjetite profil autora na najnovijoj verziji platforme X kako biste vidjeli taj sadržaj."),
                o("abebdfae", "Analitičke podatke možete vidjeti samo za Prostore u kojima ste voditelj ili suvoditelj."),
                o("fcb205da", "Slušatelji uživo"),
                o("jb088200", "Snimanje reprodukcija"),
                o("if65328a", "Uključeni korisnici"),
                o("a1a0e6d8", "Počni pratiti voditelja"),
                o("a3c4e396", "Prestani pratiti voditelja"),
                o("j58e7b00", "Prikaz profila"),
                o("eca4e32a", "Prikaži pojedinosti"),
                o("hd908df2", "Prostori uživo"),
                o("c5d40fe2", "Bilo tko"),
                o("a8df1d34", "Omogući video"),
                o("if410292", "Upoznajte Prostore"),
                o("i43fdce9", function (a) {
                    return "Dodavanje tema (" + a.count + "/" + a.total + ")";
                }),
                o("e32e99ec", "O čemu želite razgovarati?"),
                o("e93f3c2a", "Snimanje Prostora"),
                o("b701d610", "Zakazani je prostor izbrisan"),
                o("b028792d", function (a) {
                    return "Upravljanje rezerviranim prostorima (" + a.count + ")";
                }),
                o("e9b73da8", "Zakažite Prostor"),
                o("cdf630be", "Odmah započni"),
                o("acd1bcb0", "Tko se može uključiti?"),
                o("h07146a2", "Tko može govoriti?"),
                o("h61d92b0", "Izbriši zakazani prostor"),
                o("a488f2eb", function (a) {
                    return "Odabrano: " + a.count + " od " + a.total;
                }),
                o("d2dfe80d", function (a) {
                    return "Vaš će Prostor započeti " + a.date + " u " + a.time;
                }),
                o("aef95393", function (a) {
                    return "Postojeći prostor zakazan je " + a.date + " u " + a.time;
                }),
                o("a7069f2e", "Uredi detalje"),
                o("a15f06fc", "Zakazani prostori"),
                o("f6cfa3fe", "Prostor ne možete zakazati u prošlosti."),
                o("a8f71a2b", function (a) {
                    return "Prostor ne možete zakazati više od " + a.days + " dana u budućnosti.";
                }),
                o("ae092f6c", "Brisanje zakazanog prostora nije bilo moguće."),
                o("jd7f0030", "Ažuriran je zakazani prostor"),
                o("a26da034", "Spremi promjene"),
                o("b3633046", "Odabir Zajednice"),
                o("ce447fcb", function (a) {
                    return a.count + " slušatelj" + n(a.count, "a", "", "a");
                }),
                o("ef7da97f", function (a) {
                    return "Slušatelja: " + a.count;
                }),
                o("a065e7e7", function (a) {
                    return "Upravo: " + a.spaceTitle;
                }),
                o("hd5e7b21", function (a) {
                    return a.date + ": " + a.spaceTitle;
                }),
                o("f651e375", function (a) {
                    return "Taj je Prostor zatvoren: " + a.spaceTitle;
                }),
                o("i8478ae7", function (a) {
                    return "Reproduciraj snimku: " + a.spaceTitle;
                }),
                o("b2a94e93", function (a) {
                    return a.hostSpace + " · " + a.descriptionListening + " · " + a.descriptionGeneric;
                }),
                o("f6432ce5", function (a) {
                    return a.hostSpace + " · " + a.descriptionGeneric;
                }),
                o("e4e811fc", "Povezivanje..."),
                o("aadbc747", function (a) {
                    return "Suvoditelj" + n(a.hostCount, "i", "", "i");
                }),
                o("hbd6035f", function (a) {
                    return "govornik" + n(a.speakerCount, "a", "", "a");
                }),
                o("if420852", "Reproduciraj snimku"),
                o("f7dc3b1c", "Taj je Prostor zatvoren"),
                o("c1d15dc0", "Izgleda da se taj Prostor zatvorio."),
                o("g3e2f3a6", "Slušajte anonimno"),
                o("cd64d43e", "Pridružite se izravno kao govornik"),
                o("jcdc32f0", "Počnite slušati"),
                o("a0cee16a", "Počnite govoriti"),
                o("bf3daa48", "Počnite slušati anonimno"),
                o("f9305f48", "Ponovno poveži"),
                o("e51df2e6", "Mikrofon će vam na početku biti isključen"),
                o("h114ff6c", "Ne možete se pridružiti ovom Prostoru jer se već nalazite u nekom drugom Prostoru."),
                o("d7fe2d7e", "Ne možete se ponovno povezati s ovim Prostorom jer se već nalazite u nekom Prostoru."),
                o("e61bdea4", "Voditelj je uključio snimanje za taj Prostor. U javno snimanje bit će uključeni svi govornici."),
                o("d0ebf4f7", "Saznajte više"),
                o("d782b808", "Pretplatom do pogodnosti"),
                o("i7f83b8d", "Saznajte više"),
                o("fc962610", "Traženje prema nazivu Prostora ili imenu voditelja"),
                o("e5b5f091", function (a) {
                    return "Nijedan Prostor ne odgovara upitu „" + a.searchQuery + "”";
                }),
                o("g5812140", "Zašto ga ne biste vi pokrenuli?"),
                o("e8fe1ecb", function (a) {
                    return "Nema Prostora " + a.section + " koji odgovaraju upitu „" + a.searchQuery + "”";
                }),
                o("c432d2b2", "Potražite Prostor"),
                o("d39e8b30", "Dodavanje napomena"),
                o("dc7a6625", function (a) {
                    return "Pišete kao " + a.displayAlias;
                }),
                o("g17e4064", "Vaša će se zabilješka objaviti pod pseudonimom za Zabilješke zajednice, koji nije povezan s profilom za X."),
                o("d9b09ee8", "Budite precizni — obavezno stavite poveznice na vanjske izvore."),
                o("b7476596", "Budite precizni te po mogućnosti stavite poveznice na vanjske izvore."),
                o("df6c8292", "Vaše objašnjenje"),
                o("ecb4d20c", "Vaša bilješka nije spremljena. Provjerite niste li već o toj objavi napisali bilješku pa pokušajte ponovno poslije."),
                o("eb5b4a12", "Pseudonimi za Bilješke zajednice"),
                o("ja0ee360", "Odaberite pseudonim"),
                o("f7b7c250", "Radi privatnosti odaberite neki pseudonim za Bilješke zajednice"),
                o("c6382384", "Zašto se u Zabilješkama zajednice koristi pseudonim?"),
                o("j48ab594", "Pridonosite uz zaštitu privatnosti"),
                o("bc2399a0", "Pišite i ocjenjujte bilješke bez otkrivanja svojeg identiteta na servisu X."),
                o("d939cf16", "Fokusirajte se na sadržaj"),
                o("a56f0c32", "Pseudonimi mogu pomoći smanjiti pristranost omogućujući suradnicima da se više usredotoče na sadržaj, a manje na autore."),
                o("d17c59e4", "Svatko odgovara za svoj sadržaj"),
                o("i719f8e2", "Možete vidjeti povijest suradnika te svatko odgovara za svoj sadržaj putem ocjena koje dobiva."),
                o("a96bb564", "Odaberite pseudonim za Bilješke zajednice"),
                o("afcdcf84", "Pri pisanju i ocjenjivanju bilješki zajednice prepoznavat će vas se po pseudonimu. On nije povezan s vašim profilom za X."),
                o("f83d0446", "Vaš je pseudonim spremljen."),
                o("ed0e6b2e", "Počnite ocjenjivati zabilješke"),
                o("if4c5e06", "Dobro došli u Zabilješke zajednice"),
                o("g880a78a", "Za početak zabilješke ocijenite"),
                o("d1be2236", "Bilješke zajednice potiču suradnike kao što ste vi da otkriju korisne bilješke i pokažu ih ostalim korisnicima."),
                o("af9f2b78", "Pratite utjecaj svojih ocjena"),
                o("af68afc8", "Kada pridonesete da neka zabilješka dobije status Korisno ili Nije korisno, povećava se utjecaj vaših ocjena."),
                o("fb5c5d42", "Otključajte funkciju pisanja zabilješki"),
                o("a1e58cdc", "Kada utjecaj vaših ocjena bude barem 5, moći ćete pisati bilješke zajednice."),
                o("j5f112b4", "Dvije od vaših novih zabilješki imaju status Nije korisno."),
                o("ac34c5e8", "Dovoljan se broj suradnika složio, uključujući one koji su se razilazili oko prethodnih ocjena, da dvije od vaših zabilješki nisu korisne. Evo njihova komentara:"),
                o("ib7886d0", "Pogledajte te zabilješke na svom profilu"),
                o("b0a7d360", "Može se dogoditi da vam se značajka pisanja zabilješki privremeno zaključa."),
                o("e473f876", "Suradnici koji imaju pet novih zabilješki sa statusom Korisno ili Nije korisno, od čega tri zabilješke sa statusom Nije korisno, privremeno ne mogu pisati zabilješke."),
                o("ef490ae8", "Izvori nisu navedeni ili nisu vjerodostojni"),
                o("bf3dc462", "Izvori nisu u skladu s napomenom"),
                o("heb35e12", "Netočne informacije"),
                o("ib117532", "Zlonamjerno ili neprihvatljivo"),
                o("a7bc3192", "Navode se visokokvalitetni izvori"),
                o("a26f8dc2", "Lako razumljivo"),
                o("cbdef06c", "Izravno se odnosi na tvrdnju iz objave"),
                o("faa5f9e8", "Daje važan kontekst"),
                o("gf3b38f4", "Neutralan ili nepristran rječnik"),
                o("a50327ea", "Bilješka nije potrebna za ovu objavu"),
                o("h7c59ea2", "Mišljenje ili nagađanje"),
                o("d60c0064", "Tipfeleri ili nejasno izražavanje"),
                o("e06416ca", "Promašene ključne točke ili nerelevantno"),
                o("cff1aa8c", "Svadljiv ili pristran rječnik"),
                o("c5d55592", "Sadrži jedinstvene informacije ili kontekst"),
                o("f3e6f0aa", "Informativno"),
                o("hc2b6a7e", "Nepristrano i/ili suosjećajno"),
                o("bbe8b4ac", "Neargumentirano mišljenje, nagađanje ili pristranost"),
                o("dd1f17ea", "Ne drži se teme"),
                o("if966b54", "Zastarjele informacije"),
                o("fdc2060a", "Da biste mogli pisati zabilješke, potreban je veći utjecaj ocjena."),
                o("edd80858", "Pogledajte svoj profil i rezultat"),
                o("eec24ff6", "Započnite ocjenjivanje"),
                o("eb9dc3ec", "Suradnici kao što ste vi zajednički pomažu prepoznati korisne bilješke da bi se prikazivale kao kontekst za objave i tako pridonijele informiranosti korisnika."),
                o("f2f61788", "Otključajte funkciju pisanja"),
                o("ca7e11e6", "Kada vaše uspjele ocjene budu barem 5, moći ćete pisati bilješke zajednice."),
                o("e7beb100", "Pogledajte svoj profil i komentare"),
                o("fd02e290", "Prikaži sva pravila"),
                o("ee7b8050", "Privremeno ne možete pisati nove zabilješke."),
                o("b8cc2e9a", "Vaše su nedavne zabilješke ocijenjene kao Nije korisno, zato je vaša mogućnost pisanja privremeno zaključana."),
                o("f6c8613e", "Komentari suradnika o vašim zabilješkama:"),
                o("fd5c2282", "Još savjeta o pisanju zabilješki"),
                o("c23e67ea", "Otključajte funkciju pisanja"),
                o("i0e66c5a", "Odaberite jedno"),
                o("j8e3e3be", "Odaberite barem jedno"),
                o("f1e851f0", "Unesite objašnjenje"),
                o("ff5dcac8", "Objašnjenje je predugačko"),
                o("b47b5a16", "Sva su polja obavezna. Provjerite jeste li odgovorili na sva pitanja."),
                o("g9cffe16", "Napomena ne sadrži izvor"),
                o("bfa9e276", "Prepravite bilješku tako da je korisna na svim objavama koje sadrže sliku ili pregledajte svoj odgovor na prvo pitanje u ovom obrascu"),
                o("ja36d83e", "Prepravite bilješku tako da je korisna na svim objavama koje sadrže videozapis ili pregledajte svoj odgovor na prvo pitanje u ovom obrascu"),
                o("i6488a04", "Prepravite bilješku tako da je korisna na svim objavama koje sadrže medijski sadržaj ili pregledajte svoj odgovor na prvo pitanje u ovom obrascu"),
                o("j6e12b24", "Sadrži digitalno izmijenjenu fotografiju ili videozapis"),
                o("eda68484", "Digitalno je izmijenjena"),
                o("e198eb8c", "Napišite zabilješku o kontekstu za koji smatrate da ga treba prikazati s videozapisom kako biste informirali ostale."),
                o("a9803d44", "Napišite zabilješku o kontekstu za koji smatrate da ga treba prikazati sa slikom kako biste informirali ostale."),
                o("j7ddf18a", "Napišite bilješku s kontekstom za koju smatrate da je treba prikazati u svim objavama s tom poveznicom kako bi i ostali bili informirani."),
                o("g3874520", "Napišite bilješku s kontekstom za koju smatrate da ju je potrebno prikazati s objavom da biste informirali ostale."),
                o("ac1141aa", "Napišite zabilješku kako bi ostali suradnici u Bilješkama zajednice lakše shvatili zašto smatrate da taj videozapis ne sadrži netočne informacije ili da mu nije potreban dodatni kontekst."),
                o("f99ebcfc", "Napišite zabilješku kako bi ostali suradnici u Bilješkama zajednice lakše shvatili zašto smatrate da ta slika ne sadrži netočne informacije ili da joj nije potreban dodatni kontekst."),
                o("h641949e", "Napišite bilješku kako bi ostali suradnici u Bilješkama zajednice lakše shvatili zašto smatrate da ta objava ne sadrži netočne informacije ili da joj nije potreban dodatni kontekst."),
                o("c926cff6", "Na temelju navedenog smatram da objava vjerojatno…"),
                o("e0ef7a2c", "Na temelju navedenog smatram da ta slika vjerojatno…"),
                o("g491d33a", "Na temelju navedenog smatram da taj videozapis vjerojatno…"),
                o("b253e462", "Na temelju navedenog smatram da povezana stranica vjerojatno…"),
                o("b1b2d004", "Potencijalno navodi na krivi zaključak i bilo bi dobro da mu se doda kontekst"),
                o("ha9655c2", "Ne sadrži netočne informacije"),
                o("ebd2de06", "Zašto smatrate da bi ta objava mogla biti netočna?"),
                o("i865abe8", "Zašto smatrate da bi slika mogla sadržavati netočne informacije?"),
                o("add096c6", "Zašto smatrate da bi videozapis mogao sadržavati netočne informacije?"),
                o("eb604e2e", "Zašto smatrate da povezana stranica sadrži netočne informacije?"),
                o("c33bc7d4", "Sadrži netočne podatke"),
                o("aadb676c", "Sadrži zastarjele informacije koje mogu biti netočne"),
                o("g21a0ef4", "Daje iskrivljenu sliku ili ne sadrži važan kontekst"),
                o("daf354de", "Navodi neprovjerene izjave"),
                o("d1d2ef84", "Šaljiv ili satiričan ton koji se može protumačiti pogrešno"),
                o("bfee6064", "Zašto smatrate da ta objava nije netočna?"),
                o("dfd1f7f0", "Zašto smatrate da slika ne sadrži netočne informacije?"),
                o("b8623176", "Zašto smatrate da videozapis ne sadrži netočne informacije?"),
                o("ec66e3fc", "Zašto smatrate da povezana stranica ne sadrži netočne informacije?"),
                o("g228df26", "Sadrži provjerene izjave"),
                o("h890a3f2", "Videozapis je bio točan u trenutku dijeljenja, ali sada je zastario"),
                o("hf607a0a", "Jasno je da je riječ o šaljivom/satiričnom tonu"),
                o("j6ac7742", "Izražava osobno mišljenje"),
                o("b1d82aae", "Jeste li stavili poveznicu na izvore koje većina ljudi smatra pouzdanima?"),
                o("ae859ee0", "Odnosi li se vaša bilješka na objavu ili na sliku?"),
                o("ba84e7f8", "Odnosi li se vaša bilješka na objavu ili na videozapis?"),
                o("ibb784c6", "Više o ovoj objavi"),
                o("a21ecb8c", "Informacije o slici u ovoj objavi, koje bi se morale prikazivati u svim objavama koje sadrže tu sliku"),
                o("he0ca8da", "Informacije o videozapisu u ovoj objavi, koje bi se morale prikazivati u svim objavama koje sadrže taj videozapis"),
                o("d0bf8d34", "Odnosi li se vaša napomena na objavu ili na poveznicu?"),
                o("db370b9a", "Odnosi li se vaša napomena na objavu, sliku ili poveznicu?"),
                o("c35bf10e", "Odnosi li se vaša napomena na objavu, videozapis ili poveznicu?"),
                o("d96ce0d2", "Ta je zabilješka napisana na način koji bi bio koristan na objavama koje sadrže tu sliku."),
                o("a1fb516c", "Ta je zabilješka napisana na način koji bi bio koristan na objavama koje sadrže taj videozapis."),
                o("be46a61e", "Ta je zabilješka napisana na način koji bi bio koristan na objavama koje sadrže taj medijski sadržaj."),
                o("ied1c2c2", "Ta se zabilješka donekle odnosi na ovu objavu, pa bi mogla biti nevažna na ostalim objavama."),
                o("gb2433df", function (a) {
                    return "" + a.noteMatchUrl;
                }),
                o("gdfbdd93", function (a) {
                    return "svim " + a.matchCount + " objavama";
                }),
                o("d7959c4d", function (a) {
                    return " svim " + a.matchCount + " objavama";
                }),
                o("ff5be16d", function (a) {
                    return " svim " + a.matchCount + " objavama";
                }),
                o("abdd8d0a", "Uredi napomenu"),
                o("c097608e", "Napomena ne sadrži objašnjenje"),
                o("ba25898c", "Vjerojatnije je korisnici ocijene korisnima napomene s objašnjenjem izvora."),
                o("e764d704", "Vjerojatnije je korisnici ocijene korisnima napomene s poveznicom na pouzdane izvore."),
                o("gb67e44c", "Pošalji bez objašnjenja"),
                o("d6b758a2", "Pošalji bez izvora"),
                o("dc1fa12c", "Računi za Bilješke zajednice moraju imati provjerene telefonske brojeve"),
                o("a1752fde", "Da biste i dalje surađivali u Bilješkama zajednice putem tog računa za X, morate potvrditi svoj telefonski broj."),
                o("hef02710", "Osim što broj mora biti provjeren, mora biti i od pouzdanog telefonskog operatera te ne smije biti povezan s nekim drugim računom za Bilješke zajednice."),
                o("dff9b6bc", "Potvrdite svoj telefonski broj"),
                o("f051e434", "Suradnici u Bilješkama zajednice moraju imati jedinstvene telefonske brojeve"),
                o("eaef2f72", "Čini se da je s tim telefonskim brojem povezano više računa za X suradnika u Bilješkama zajednice."),
                o("j78d41b4", "Da biste nastavili pridonositi putem tog računa, taj telefonski broj morate ukloniti s drugih računa za X."),
                o("a7c9a176", "Računi za Bilješke zajednice moraju imati provjerene telefonske brojeve od pouzdanog operatera"),
                o("ec853dfa", "Da bi se smanjio broj umjetno stvorenih ili virtualnih telefonskih brojeva, telefonski brojevi moraju biti od pouzdanog operatera."),
                o("j6e19c58", "Vrijednosti Bilješki zajednice"),
                o("ea580ee2", "Kratki podsjetnik na pravila Bilješki zajednice:"),
                o("eac7b6ac", "Pridonesite razumijevanju"),
                o("b0381cfc", "Budite dobronamjerni"),
                o("f0addddc", "Neka bude korisno i za one koji se s vama ne slažu"),
                o("h7c7b204", "Prije nego što napišite novu bilješku, ocijenite već postojeće"),
                o("i8cae552", "Svojim ocjenama pridonosite visokoj kvaliteti bilješki zajednice."),
                o("hd43a218", "Dosegnuli ste dnevno ograničenje broja zabilješki"),
                o("aaba8ed2", "U svrhu održavanja kvalitete zabilješki i sprječavanja spama, broj zabilješki koje suradnici mogu dnevno napisati ograničen je ovisno o njihovu utjecaju. Pokušajte ponovno poslije."),
                o("b98f077c", "Zatražite informacije o bilješci"),
                o("ee691104", "Zatražite Bilješku zajednice o ovoj objavi"),
                o("f8cbdf02", "Smatrate da je ova objava možda obmanjujuća? Zatražite Bilješku zajednice."),
                o("f132d1be", "Suradnici će vidjeti upozorenja na objavama koje prime dovoljan broj zahtjeva"),
                o("gf71296c", "Ako je napisana zabilješka i drugi su je suradnici ocijenili korisnom, to će se prikazati na objavi"),
                o("de0685b4", "X ne bira koje će bilješke prikazati – Bilješke zajednice su od ljudi, za ljude"),
                o("f8ac3c88", "Prihvati i zatraži zabilješku"),
                o("a8edd0ea", "Dodati izvor?"),
                o("a39a0de6", "Poveznica na objavu na platformi X"),
                o("j819c176", "Pomognite suradnicima Bilješki zajednice tako da svojoj objavi na platformi X dodate poveznicu koja objašnjava što je potencijalno obmanjujuće."),
                o("e15b3b44", "Poveznica mora biti ona objave na platformi X. Primjerice: x.com/user/status/..."),
                o("c81085a4", "Bilješke zajednice"),
                o("c363515c", "dostupni javnosti"),
                o("cb6b0138", "Hvala vam! Vaš je zahtjev poslan"),
                o("c196e8b8", "Ako se za napisanu bilješku označi da je bila korisna, vidjet ćete ovo na objavi."),
                o("a9491efa", "Poslan je zahtjev za Bilješku zajednice"),
                o("f060d1cc", "Izbriši zahtjev"),
                o("f499f824", "Izbrišite zahtjev"),
                o("hd1bc518", "Za mogućnost slanja novog zahtjeva za tu objavu može proći nekoliko minuta"),
                o("geb8d31d", "prijavite se."),
                o("gc399930", "Informacije o dnevnom ograničenju zahtjeva za zabilješke"),
                o("fee815e4", "Dosegnuli ste dnevno ograničenje zahtjeva za zabilješke"),
                o("i7eb7900", "Vaše će se dnevno ograničenje povećati ako pošaljete zahtjeve za objave koje uspješno dobiju potrebne bilješke."),
                o("d1a3817e", "To pomaže nagraditi osobe koje uspješno pronalaze potencijalno obmanjujuće objave kojima bi dobro došao dodatni kontekst."),
                o("c031c77a", "Vaše se dnevno ograničenje može smanjiti ako pošaljete previše zahtjeva za objave za koje drugi smatraju da im zabilješke nisu potrebne."),
                o("f87129d2", "To pomaže spriječiti spam i održati autore zabilješki fokusiranima na objave kojima bi dobro došle dodatne zabilješke."),
                o("jdd4a572", "Za vaš je račun potreban provjeren broj telefona"),
                o("i0f07c07", "Potvrdite svoj telefon"),
                o("i157c1a8", "Taj je zahtjev izbrisan."),
                o("a9f4ca9c", "Suradnici u Bilješkama zajednice sada mogu vidjeti vašu bilješku"),
                o("eb8f7c0c", "Ostali suradnici sada mogu ocijeniti vašu zabilješku"),
                o("h87c6bd6", "Ostali suradnici sada mogu vidjeti vašu zabilješku"),
                o("gc1a5bce", "Suradnici će ocijeniti je li korisna"),
                o("i0e950ca", "Ako za svoju bilješku dobijete status Korisno, počet će se prikazivati kao kontekst svima koji vide objavu"),
                o("a047e800", "Na temelju vaše zabilješke ostali suradnici dobivaju više konteksta koji koriste prilikom ocjene drugih zabilješki"),
                o("cec8a38c", "Ako za svoju zabilješku dobijete status Korisno, povećat će se utjecaj vaših napisanih zabilješki."),
                o("a377532e", "Ako je veći broj korisnika s različitih aspekata ocijeni korisnom, prikazivat će se kao kontekst svima koji vide objavu"),
                o("d790fa4e", "Na status zabilješki ne primjenjuje se pravilo većine"),
                o("e90cda68", "Da bi se istaknule zabilješke koje su korisne širokom krugu ljudi, složiti se moraju i suradnici koji se nisu uvijek slagali s prijašnjim ocjenama."),
                o("j5a1d85a", "Pogledajte svoju napomenu"),
                o("b25b64d6", "Napomena je poslana!"),
                o("g1428d70", "Zabilješka je poslana!"),
                o("a4ec7004", "Evo što dalje:"),
                o("c4093274", "Bilješke zajednice nakon slanja"),
                o("bc8746a6", "Ocijenite najmanje jednu zabilješku prije pisanja nove zabilješke."),
                o("ce3c80b8", "Bilješke zajednice ovise o vašim ocjenama kako bi zadržale kvalitetu."),
                o("fa6a075a", "Bilješke s predloženim kontekstom za prikaz uz objavu"),
                o("acb7ecae", "Napomene s objašnjenjem zašto dodatni kontekst nije potreban"),
                o("d9a5fc06", "Ocijenite objavu"),
                o("b73cebd2", "Ocjena objava i zabilješki"),
                o("ad8883f2", "Za ovu objavu nema bilježaka"),
                o("efd14e7a", "Učitavanje napomena"),
                o("e65b7186", "Korisnici su za tu objavu predložili bilješke u Bilješkama zajednice"),
                o("bcc14a68", "Bilješke zajednice program je u kojem dobrovoljni suradnici dodaju kontekst (tzv. bilješke) za objave za koje misle da sadrže netočne informacije. Bilješke suradnici mogu ocjenjivati, a ako ih ocijene korisnima, one će se pojaviti u objavi kao kontekst. Ako je bilješka u nekom trenutku ocijenjena korisnom, a vi tako ne mislite, možete zatražiti dodatni pregled, što znači da je mora pregledati veći broj suradnika te da se ocjena može promijeniti. "),
                o("c21313ba", "Napomene koje trenutno nisu ocijenjene korisnima"),
                o("c2c40120", "Prikaži sve napomene"),
                o("ia596d40", "Želite predložiti poboljšanja?"),
                o("deff0bde", "Napišite napomenu"),
                o("i8e85ef8", "Uključite se u Bilješke zajednice te pišite bilješke i koristite ostale značajke da biste pridonijeli boljoj općoj informiranosti"),
                o("af88892a", "Te su bilješke dodali suradnici u Bilješkama zajednice koji smatraju da ta objava možda sadrži netočne informacije te da bi dodatni kontekst mogao biti od pomoći."),
                o("cf8a40a6", "Bilješke se vide samo u Bilješkama zajednice sve dok ih dovoljan broj suradnika ne ocijeni korisnima."),
                o("g22c8c30", "Ako te bilješke dovoljan broj suradnika ocijeni korisnima, uključujući one koji se obično ne slažu oko ocjena, one će postati javno vidljive uz objavu kao dodatni kontekst."),
                o("jf04b084", "Te su bilješke dodali suradnici koji smatraju da ta objava ne sadrži netočne informacije te da nije potreban dodatni kontekst."),
                o("g5a72e98", "Vidljive su samo u Bilješkama zajednice kao dodatne informacije za ocjenjivače te se ne prikazuju kao dodatni kontekst uz objavu, čak i ako imaju status Korisno."),
                o("h53cb7de", "Što mislite o ovoj objavi?"),
                o("dc3bfc82", "Što vam se, ako išta, sviđa o ovoj objavi?"),
                o("b4704bf4", "Što vam se, ako išta, ne sviđa o ovoj objavi?"),
                o("ed5156fa", "Pri spremanju ocjene pojavila se pogreška. Pokušajte ponovno."),
                o("d5f9fb42", "Ocijenili ste to isticanje zajednice"),
                o("j6aa6172", "Želite izbrisati ocjenu?"),
                o("i4112750", "Ta se radnja ne može poništiti."),
                o("bd7eb888", "Pogledajte sve bilješke o ovoj objavi"),
                o("i97b83f6", "Pri slanju žalbe došlo je do pogreške. Pokušajte ponovno."),
                o("a038ab9a", "Prevedi zabilješku"),
                o("i606fc4c", "Žalbe u Bilješkama zajednice"),
                o("b664c554", "Zatraži da napomenu pregleda veći broj suradnika"),
                o("ab66e1f2", "Način funkcioniranja:"),
                o("e36d807c", "Još će suradnika Bilješki zajednice dobiti zahtjev za pregled i ocjenu te bilješke."),
                o("d8afb99c", "Ako se zbog ocjena suradnika status bilješke promijeni te ona više ne bude ocijenjena korisnom, neće se prikazati u objavi."),
                o("f9e1090c", "Preglede obavljaju suradnici, a ne X."),
                o("i80c8a84", "Zatražen je dodatni pregled."),
                o("f93d4391", "zatražiti da tu bilješku pregleda veći broj suradnika"),
                o("e457970a", "Detalji o napomeni"),
                o("df587b98", "ID napomene"),
                o("h201bdc8", "Autor napomene"),
                o("h74b96b0", "Zabilješka je poslana "),
                o("ge25848a", "Trenutačni status"),
                o("d6db34cc", "Potrebno je još ocjena"),
                o("ce8b505e", "Nije korisno"),
                o("e5be8156", "Status napomene izračunat je s pomoću algoritma otvorenog koda"),
                o("fca23c42", "Dovoljno suradnika različitih perspektiva usuglasilo se da je ta bilješka korisna, pa se prikazuje kao kontekst za objavu."),
                o("hef420c2", "Napomenu još nije ocijenilo dovoljno suradnika različitih perspektiva."),
                o("j3af43c4", "Dovoljno suradnika različitih perspektiva usuglasilo se da ta napomena nije korisna."),
                o("f79d812c", "Ocijenjeno kao korisno i prikazano u roku od jednog sata nakon objave"),
                o("cc02373e", "Ocijenjeno kao korisno i prikazano u roku od jednog sata nakon što je predloženo"),
                o("d9f72d90", "Pronađeno i prikazano u roku od jednog sata nakon objave"),
                o("fc6e4594", "Najbolje ocijenjene oznake"),
                o("f7427d6f", "ovoj objavi"),
                o("aa94541d", "ovoj objavi"),
                o("fe821ebb", "ovoj objavi"),
                o("c5cc74e5", function (a) {
                    return "" + a.urlNoteDisplayUrl;
                }),
                o("ff14b6b8", "drugoj objavu"),
                o("b5cc9c47", function (a) {
                    return "" + a.urlNoteDisplayUrl;
                }),
                o("hb90fe9a", function (a) {
                    return a.matches + " objavama";
                }),
                o("i23a64ea", function (a) {
                    return a.matches + " objavama";
                }),
                o("h6c5af52", function (a) {
                    return a.matches + " objavama";
                }),
                o("c2584f58", function (a) {
                    return a.matches + " objavama";
                }),
                o("a0dec723", "ovoj objavi"),
                o("f20fa57c", function (a) {
                    return "" + a.matches;
                }),
                o("bd60b152", function (a) {
                    return a.matches + " objavama";
                }),
                o("b95920ef", "ovoj objavi"),
                o("f8dcced2", function (a) {
                    return "" + a.matches;
                }),
                o("iaf626c0", function (a) {
                    return a.matches + " objavama";
                }),
                o("e3002eab", "ovoj objavi"),
                o("df3f2d52", function (a) {
                    return "" + a.matches;
                }),
                o("cd83d952", function (a) {
                    return a.matches + " objavama";
                }),
                o("ia35cd39", "ovoj objavi"),
                o("a499228a", function (a) {
                    return a.matches + " ";
                }),
                o("cf9ac658", function (a) {
                    return a.matches + " objavama";
                }),
                o("fa56f7cb", "ovoj objavi"),
                o("b826c19c", function (a) {
                    return "" + a.matches;
                }),
                o("c4618eb8", function (a) {
                    return a.matches + " objavama";
                }),
                o("i56af3fd", "ovoj objavi"),
                o("g1f275b6", function (a) {
                    return "" + a.matches;
                }),
                o("i2cac82c", function (a) {
                    return a.matches + " objave/a";
                }),
                o("a2ae91f1", function (a) {
                    return "" + a.urlNoteDisplayUrl;
                }),
                o("d3205ee4", function (a) {
                    return a.matches + " objave/a";
                }),
                o("daeff73b", function (a) {
                    return "" + a.urlNoteDisplayUrl;
                }),
                o("fc546c2e", function (a) {
                    return a.matches + " objavama";
                }),
                o("i1df5f5d", function (a) {
                    return "" + a.urlNoteDisplayUrl;
                }),
                o("g03f5337", "ovoj objavi"),
                o("f5b30b8a", function (a) {
                    return a.matches + " objavama";
                }),
                o("e0a49d5b", function (a) {
                    return "" + a.urlNoteDisplayUrl;
                }),
                o("e25f9fd4", function (a) {
                    return a.matches + " objavama";
                }),
                o("bae49ec3", function (a) {
                    return "" + a.urlNoteDisplayUrl;
                }),
                o("d595bffd", "ovoj objavi"),
                o("ef8a55a6", function (a) {
                    return a.matches + " objavama";
                }),
                o("a3aa3cb1", function (a) {
                    return "" + a.urlNoteDisplayUrl;
                }),
                o("d5061d00", "Ne prikazuje se na X-u"),
                o("e272836c", "Želite li izbrisati napomenu?"),
                o("da5a5d8c", "Ako tu bilješku izbrišete, ona će se trajno izbrisati iz Bilješki zajednice."),
                o("a804a8f4", "Trebamo vašu pomoć za još neke bilješke"),
                o("ib9628b8", "Da bi vaš utjecaj ocjena nastavio rasti, ocijenite još neke bilješke"),
                o("bf08be2e", "Odmah ocijenite još zabilješki"),
                o("i26425d8", "Donekle"),
                o("c6e683d0", "Pošalji i prihvati"),
                o("b3fcaac6", "Razmotrite otvaranje i pregledavanje izvora prije nego što ocijenite tu zabilješku"),
                o("e8a33850", "Otvorite i pregledajte izvore prije nego što ocijenite tu zabilješku"),
                o("ca6f04ec", "Pregledavanje izvora citiranih u zabilješkama pomaže u osiguravanju točnosti. "),
                o("a7338bc2", "Je li ta napomena korisna?"),
                o("bd0b6422", "Je li ovo objašnjenje o nepotrebnom kontekstu korisno?"),
                o("ac7f9746", "Zašto je korisno?"),
                o("c7751804", "Zašto nije korisno?"),
                o("dc9c823a", "Ta bi zabilješka bila korisna na svim objavama koje sadrže tu vezu."),
                o("da0bb868", "Ta bi zabilješka bila korisna na svim objavama koje sadrže taj videozapis."),
                o("e8694748", "Ta bi zabilješka bila korisna na svim objavama koje sadrže tu sliku."),
                o("b487e12e", "Ta bi zabilješka bila korisna na svim objavama koje sadrže taj medijski sadržaj."),
                o("hfdb963e", "Ta se zabilješka odnosi isključivo na ovu objavu, pa bi mogla biti irelevantna na ostalim objavama koje sadrže istu vezu."),
                o("bd6742c2", "Ta se zabilješka odnosi isključivo na ovu objavu, pa bi mogla biti nevažna na ostalim objavama koje sadrže isti videozapis."),
                o("ded3a8a2", "Ta se zabilješka odnosi isključivo na ovu objavu, pa bi mogla biti irelevantna na ostalim objavama koje sadrže istu sliku."),
                o("c1e42c92", "Ta se zabilješka odnosi isključivo na ovu objavu, pa bi mogla biti irelevantna na ostalim objavama koje sadrže isti medijski sadržaj."),
                o("af198630", "postaju dostupni javnosti"),
                o("d39720d3", "korisnom"),
                o("i7d91dc9", "donekle korisnom"),
                o("c75b7fb4", "ne smatrate korisnom"),
                o("d9025c46", function (a) {
                    return a.matches + " objavama";
                }),
                o("ce1c95d6", function (a) {
                    return "" + a.noteDisplayUrl;
                }),
                o("jd7c58d8", function (a) {
                    return a.matches + " objavama";
                }),
                o("ebb0b116", function (a) {
                    return a.matches + " objavama";
                }),
                o("f9005c24", function (a) {
                    return a.matches + " objavama";
                }),
                o("a4886e54", function (a) {
                    return "" + a.noteDisplayUrl;
                }),
                o("h8335712", "Vaša napomena"),
                o("b9f18eec", "Trenutno ocijenjeno korisnim"),
                o("j33f6520", "Trenutno ocijenjeno kao Nije korisno"),
                o("idc0e9fc", "Prijavite se za suradnika u Bilješkama zajednice"),
                o("a83cccfa", "Suradnici mogu pregledavati predložene zabilješke, pisati zabilješke, pratiti njihov utjecaj i još puno toga!"),
                o("c2a6ec00", "Želite se uključiti u Zabilješke zajednice?"),
                o("d2470b62", "Pridonesite boljoj informiranosti na X-u."),
                o("ab23a972", "Počnite pratiti razgovor"),
                o("c68f3bc0", "Saznajte više o našim vrijednostima"),
                o("dfb1f498", "Povratne informacije"),
                o("a584cfa7", "Pošaljite nam privatnu poruku na @bilješkezajednice"),
                o("e4d93012", "Više je osoba zatražilo Bilješke zajednice"),
                o("e55983c0", "Nijedan podnositelj zahtjeva još nije naveo vezu na izvor s objašnjenjem zašto je zabilješka potrebna"),
                o("h23be93e", "Podnositelji zahtjeva mogu uključiti objavu na platformi X kako bi objasnili zašto smatraju da bi zabilješka bila korisna. Uključili su objave navedene u nastavku"),
                o("ca6ae344", "Traka s karticom Bilješke zajednice"),
                o("fe27c1e2", "Bilješke"),
                o("ff692d64", "Vaš profil"),
                o("cb1adfa0", "Preuzimanje podataka"),
                o("jaf0d42c", "Vaše napomene"),
                o("fa9a644a", "Ako su tri od vaših pet najnovijih zabilješki sa statusom Korisno ili Nije korisno ocijenjene kao Nije korisno, privremeno nećete moći pisati zabilješke."),
                o("i4014342", "Pazite da vam se značajka pisanja ne zaključa. Evo komentara suradnika o vašim dvjema zabilješkama:"),
                o("j9897a7c", "Savjeti o pisanju zabilješki"),
                o("ac71a5a0", "Ocijenite zabilješke koje nemaju dovoljno ocjena"),
                o("h544e3c8", "Da bi otključali mogućnost pisanja bilješki, suradnici sada moraju imati učinak ocjena 5."),
                o("d88c63f6", "Novo: otključajte funkciju pisanja bilješki"),
                o("bd31adde", "Napustili ste program Bilješke zajednice."),
                o("a796c19c", "Ponovno pridruživanje"),
                o("h837a96c", "Ponovno ćete se pridružiti programu Bilješke zajednice."),
                o("a4d4bcb9", function (a) {
                    return "Ako se želite ponovno pridružiti, to ćete moći učiniti ovdje za " + a.numDaysToRejoin + " dan" + n(a.numDaysToRejoin, "a", "", "a") + ".";
                }),
                o("a490bc51", "Saznajte više"),
                o("c94ad3e8", "pošaljite komentar"),
                o("ee160790", "Izbrisane bilješke"),
                o("b3de4a42", "Utjecaj ocjena"),
                o("a7b0393c", "Utjecaj napisanih zabilješki"),
                o("id568acc", "Najbolji pisac"),
                o("e25f9ad6", "Ocjene koje su omogućile da zabilješka dobije status Korisno"),
                o("a0697fbc", "Odlično! Na temelju tih ocjena prikazivat će se korisne bilješke kao kontekst za objave te pridonositi informiranosti korisnika."),
                o("a3311a60", "Na temelju tih ocjena prepoznate su korisne bilješke koje će se prikazivati kao kontekst za objave te pridonositi informiranosti korisnika."),
                o("bbc44f5a", "Na temelju tih ocjena prepoznaju se korisne bilješke koje će se prikazivati kao kontekst za objave te pridonositi informiranosti korisnika."),
                o("b4f21858", "Ocjene koje su omogućile da zabilješka dobije status Nije korisno"),
                o("d46b6bc8", "Tim se ocjenama Zabilješke zajednice poboljšavaju jer se autorima zabilješki daje povratna informacija, a suradnicima omogućuje da se usmjere na najzanimljivije zabilješke."),
                o("a5e6ba6a", "Ocjene Korisno za zabilješke koje su na kraju dobile status Nije korisno"),
                o("a22929e4", "Ocjene Nije korisno za zabilješke koje su na kraju dobile status Korisno"),
                o("b76dd726", 'Te su ocjene česte i mogu uzrokovati promjenu statusa ako se dovoljno ljudi slaže da "Korisna" zabilješka nije dovoljno korisna.'),
                o("j29cc0f2", "Te se ocjene broje dvaput zato što često naznačuju podršku za zabilješke za koje drugi smatraju da su loše kvalitete."),
                o("cd4333d0", "Ne brinite, svi to povremeno dobiju. "),
                o("e9fa53ac", "Ocjene zabilješki koje trenutno nemaju ni status Korisno ni status Nije korisno."),
                o("fc664dee", "Ocjene dodijeljene zabilješci nakon što je dobila status"),
                o("f024ec64", "Tim se ocjenama status zabilješke može potvrditi ili promijeniti."),
                o("e1ee08e6", "Utjecaj napisanih zabilješki"),
                o("je3fc324", "Vaše zabilješke koje su dobile status Korisno"),
                o("f7358242", "Zabilješke koje su dobile status Korisno"),
                o("j8e9b514", "Izvrsno! Te se bilješke sada prikazuju svima koji vide objavu dajući im kontekst te pridonose informiranosti korisnika."),
                o("e9e57c5c", "Te se bilješke sada prikazuju svima koji vide objavu dajući im kontekst te pridonose informiranosti korisnika."),
                o("fee0d8a8", "Te se bilješke prikazuju na X-u dajući objavama kontekst te pridonose informiranosti korisnika."),
                o("iab44364", "Vaše zabilješke koje su dobile status Nije korisno"),
                o("d8c90438", "Zabilješke koje su dobile status Nije korisno"),
                o("accaa48e", "Ove je zabilješke dovoljan broj suradnika ocijenio statusom Nije korisno, uključujući one koji se nisu uvijek slagali s prijašnjim ocjenama. Te zabilješke i povratne informacije o njima možete vidjeti na svom profilu.\nStatusi zabilješki mogu se promijeniti ako ih ocijeni još više korisnika."),
                o("fa2156f6", "Ove je zabilješke dovoljan broj suradnika ocijenio statusom Nije korisno, uključujući one koji se nisu uvijek slagali s prijašnjim ocjenama.\nStatusi zabilješki mogu se promijeniti ako ih ocijeni još više korisnika."),
                o("d004c768", "Zabilješke koje nemaju dovoljno ocjena"),
                o("f3d6d6c0", "Zabilješke koje još nisu dobile ni status Korisno ni status Nije korisno."),
                o("d68a370c", "Zadnji put ažurirano: "),
                o("f10aaf3c", "Savjeti o ocjenjivanju napomena"),
                o("b9793c9a", "Još niste napisali nijednu zabilješku"),
                o("bed66f92", "Evo kako započeti:"),
                o("a3ca686a", "Pogledajte savjete kako napisati korisnu zabilješku"),
                o("ga8034c6", "Da biste napisali bilješku, na bilo kojoj objavi dodirnite izbornik •••"),
                o("h4109636", "Ako mislite da neka objava možda sadrži netočne informacije, napišite bilješku s kontekstom koji može biti koristan korisnicima koji će to čitati."),
                o("ec30e9ac", "Drugi suradnici ocijenit će je li vaša zabilješka korisna"),
                o("e0c42f80", "Ako dobije status Korisno, prikazivat će se kao kontekst svima koji vide objavu"),
                o("ife4baaa", "Bilješke zajednice ne zasnivaju se na pravilu većine. Da bi se istaknule bilješke koje su korisne širokom krugu ljudi, o statusu se moraju složiti i suradnici koji se nisu uvijek slagali s prijašnjim ocjenama. Na taj se način onemogućuju jednostrane ocjene."),
                o("a0c552ee", "Utjecaj vaših ocjena prikazat će se ovdje"),
                o("a4e5ea3c", "Još niste ocijenili nijednu zabilješku"),
                o("g9a28bde", "Pregledajte zabilješke koje nemaju dovoljno ocjena"),
                o("dc0046e2", "Pregledajte naslovnicu Bilješki zajednice"),
                o("fecae168", "Tamo ćete pronaći zabilješke za koje je potrebno više ocjena te upravo vaša ocjena može biti presudna."),
                o("h525e29e", "Pridonesite lakšem pronalaženju zabilješki koje bi mogle biti korisne širokom krugu ljudi"),
                o("f6db7706", "Najbolje bilješke zajednice odnose se na konkretnu tvrdnju u objavi, napisane su razumljivo i jasno te sadrže izvore koje većina korisnika smatra pouzdanima."),
                o("f636b582", "Pridonesite lakšem pronalaženju zabilješki koje nisu korisne"),
                o("f58f4f62", "Niskim ocjenama za loše bilješke poboljšava se kvaliteta Bilješki zajednice jer se autorima bilješki daje povratna informacija, a suradnicima omogućuje da se usmjere na najzanimljivije bilješke."),
                o("cf30af22", "Jeste li znali?"),
                o("d145b0fa", "Statusi zabilješki ne stječu se pravilom većine. Da bi se istaknule zabilješke koje su korisne širokom krugu ljudi, složiti se moraju i suradnici koji se nisu uvijek slagali s prijašnjim ocjenama. Na taj se način onemogućuju jednostrane ocjene."),
                o("c20a24cc", "Čestitamo!"),
                o("d01b8fc8", "Najbolji ste pisac za Bilješke zajednice."),
                o("jbe2ad46", "Pisci s velikim utjecajem napisanih zabilješki i velikom količinom zabilješki sa statusom „Korisno” imaju pristup sljedećem:"),
                o("d2dc3d4c", "Prioritet za upozorenja o zabilješkama"),
                o("heb73816", "Prijedlozi zabilješki najboljih pisaca vjerojatnije će aktivirati obavijesti za pridobivanje pažnje ocjenjivača."),
                o("b760d51a", "Značka na profilu pod pseudonimom"),
                o("ief63e50", "Najbolji pisci mogu se prepoznati po značci na profilu za Bilješke zajednice."),
                o("jd6b88ca", "Zabilješke o medijima"),
                o("c39bdf5a", "Najbolji pisci mogu pisati bilješke o medijima sadržanima u više objava i tako pridonijeti boljoj informiranosti većeg broja ljudi."),
                o("efb9a9e0", "Ovdje nema ničega"),
                o("a1529ce7", "Saznajte više"),
                o("f07ed596", "Suradnici kao što ste vi zajednički pomažu prepoznati korisne bilješke da bi se prikazivale kao kontekst na X-u i tako pridonijele informiranosti korisnika."),
                o("h2b5268a", "Odlično! Ocijenite više zabilješki da biste nastavili povećavati svoj utjecaj."),
                o("e86c87a0", "Ocijenite više zabilješki"),
                o("ad98f836", "Imate negativan utjecaj ocjena. Ne brinite!"),
                o("e2d7c914", "Nastavite ocjenjivati zabilješke"),
                o("a5427624", "Pregledajte naslovnicu Bilješki zajednice da biste pronašli bilješke koje mora ocijeniti još suradnika."),
                o("e227a7fa", "Statusi zabilješki uvijek se mogu promijeniti"),
                o("eda73c9c", "Vaše se ocjene katkad neće podudarati sa statusom zabilješke. Nema problema! Ako se više suradnika složi s vama, status se može promijeniti, a time i vaš utjecaj."),
                o("cfa3b664", "Sada možete pisati zabilješke zajednice!"),
                o("j44125ee", "Taj suradnik još nije napisao nijednu napomenu."),
                o("da55067c", "Taj Prostor provjerite poslije!"),
                o("f893c3b8", "Uključite se u Bilješke zajednice"),
                o("a701795c", "Još nema nijedne bilješke zajednice"),
                o("db08295e", "Želite se uključiti?"),
                o("ha275800", "Izgleda da ne sudjelujete u pilot-programu Bilješke zajednice. Uključite se te pomognite korisnicima X-a da se pouzdanije informiraju."),
                o("ce0a213a", "Da biste unijeli zabilješku, na izborniku objave odaberite ikonu za Bilješke zajednice. Zabilješke koje unesete pojavit će se ovdje."),
                o("c87f3cf8", "Napomena"),
                o("a5b19492", "Ta napomena ne postoji"),
                o("c21d1b2a", "Zabilješke dobivaju status Korisno ili Nije korisno čim tako odluči većina suradnika, pa i oni koji su prethodno dali drukčiju ocjenu. Na taj način zabilješke postaju korisne širokom krugu korisnika te se time sprječavaju jednostrane ocjene."),
                o("c7b59cde", "Postavke Bilješki zajednice"),
                o("c8be1d0d", "Saznajte više."),
                o("a5a2330c", "Objave s istim medijskim sadržajem"),
                o("ad071b5c", "Objave koje sadrže istu poveznicu"),
                o("b92967c0", "Ta zabilješka nije zabilješka o medijskom sadržaju"),
                o("i92fddce", "Zabilješka se automatski prikazuje na objava u nastavku ako se dovoljno ljudi složi oko toga."),
                o("f5ce7a00", "Ta objava medijskog sadržaja još se ne podudara niti s jednom drugom."),
                o("e1288bdc", "Upozorenja kada je potrebna pomoć za neku bilješku"),
                o("ca14eab4", "Primajte obavijesti kada treba ocijeniti bilješke zajednice."),
                o("gb2bc3d0", "Ja sam za &#x1f525;"),
                o("c35ebcd2", "Koliko god mogu pomoći – i do nekoliko puta dnevno"),
                o("ba165b3c", "Često"),
                o("g72e2a58", "Nekoliko upozorenja tjedno"),
                o("idd249e0", "Ponekad"),
                o("if2e01ee", "Nekoliko upozorenja mjesečno"),
                o("fdaeaab8", "Prilikom spremanja postavki pojavila se pogreška. Pokušajte ponovno."),
                o("db4e443a", "Vaše postavke su spremljene."),
                o("dc11636c", "Jezici koje govorite"),
                o("fae059c6", "Napustite program Bilješke zajednice"),
                o("ed37123a", "Napuštate program Bilješke zajednice"),
                o("c1a554a2", "Evo što trebate znati:"),
                o("j59355fe", "Nećete moći napisati nove Bilješke zajednice."),
                o("c23420ec", "Nećete primati obavijesti iz programa Bilješke zajednice, osim ako nisu povezane s vašom aktivnošću na platformi X."),
                o("c76031ee", "Vaš anonimni profil programa Bilješke zajednice i prethodno poslani sadržaji ostat će javno dostupni. I dalje ćete moći pregledavati i brisati svoje zabilješke."),
                o("be4f9106", "Ponovno se možete pridružiti nakon 90 dana."),
                o("hf68e810", "Bilješke zajednice program je koji je nastao radi bolje informiranosti korisnika. Zahvaljujući njemu, korisnici X-a mogu zajedno dodavati korisne bilješke za objave za koje smatraju da sadrže netočne informacije."),
                o("jdb52860", "Suradnici sastavljaju i ocjenjuju napomene"),
                o("c104025c", "Suradnici su korisnici X-a, baš kao vi, koji su se registrirali za pilot-program sastavljanja i ocjenjivanja bilježaka. Što više ljudi sudjeluje, program postaje bolji."),
                o("j7872b8c", "Na objavama će se prikazivati samo bilješke koje korisnici smatraju korisnima"),
                o("fb59415e", "Da bi se bilješka prikazivala javno kao kontekst za neku objavu, određeni je broj korisnika mora s različitih aspekata ocijeniti korisnom. Na taj se način sprječava pristranost i manipulacija te se lakše pronalaze bilješke koje su korisne velikom broju korisnika."),
                o("f9a44022", "Korisnici, a ne tvrtka X, određuju što će se prikazati"),
                o("gdf4fbb2", "Tvrtka X ne piše zabilješke, ne ocjenjuje ih ni ne moderira (osim ako krše pravila platforme X). Smatramo da je mogućnost koja je dana korisnicima da ih zajednički odabiru dobar i učinkovit način dodavanja informacija koje korisnicima omogućuju da budu informirani."),
                o("cc720e6a", "Bilješke zajednice temelje se na transparentnosti podataka"),
                o("j2fcd33a", "Podaci sadrže unose do"),
                o("d4a6b322", "Svi se podaci u Zabilješkama zajednice objavljuju svaki dan, stoga korisnici imaju pristup analizi podataka, prepoznavanju problema i uočavanju prilika kako Zabilješke zajednice poboljšati. Jedva čekamo da od vas nešto naučimo."),
                o("c359263a", "Saznajte kako koristiti i analizirati podatke u Bilješkama zajednice "),
                o("b8a27fe2", "u našem vodiču."),
                o("j1c99e00", "Podaci o napomenama"),
                o("i6f69314", "Podaci o ocjenama"),
                o("b7e4c114", "Podaci o povijesti statusa zabilješki"),
                o("d7f19114", "Podaci o statusu registracije korisnika"),
                o("b6008808", "Podaci o zahtjevu za zabilješku"),
                o("h786cd7a", "Podaci o napomenama još nisu dostupni"),
                o("d0fe8052", "Podaci o ocjenama još nisu dostupni"),
                o("c0427f94", "Podaci o povijesti statusa zabilješki još nisu dostupni"),
                o("g880d8c0", "Podaci o statusu registracije korisnika još nisu dostupni"),
                o("ab1b3d38", "Podaci o zahtjevu za zabilješku još nisu dostupni"),
                o("c43fb933", "X-ov ugovor i pravilnik za razvojne programere"),
                o("ed88e742", "Kopiraj poveznicu na temu"),
                o("h92fe1be", "Nažalost, Zabilješke zajednice trenutno vam nisu dostupne."),
                o("f0dc1434", "Bilješke zajednice zasad su dostupne samo u SAD-u"),
                o("f8fc0b48", "Stvaranje mape"),
                o("c14bcdde", "Pretraživanje knjižnih oznaka"),
                o("e9c65c4a", "Pretraživanje knjižnih oznaka"),
                o("b92a21d9", function (a) {
                    return "Za " + a.query + " nema rezultata";
                }),
                o("f191a2ba", "postavkama pretraživanja"),
                o("a068008a", "Mape se trenutno ne učitavaju"),
                o("f075b0e8", "Uređivanje mape"),
                o("beba2a0e", "Stvori novu mapu s knjižnim oznakama"),
                o("e41c9b4f", function (a) {
                    return "Saved to " + a.bookmarkFolderName;
                }),
                o("h18f86a4", "Izbriši mapu"),
                o("f4ea967a", "Mapa je izbrisana"),
                o("b670aa62", "Naziv mape"),
                o("aece5462", "Naziv mape uspješno je ažuriran"),
                o("e3299b94", "Došlo je do pogreške. Ponovno pokušajte tu mapu ažurirati za koju minutu."),
                o("c09ea714", "Došlo je do pogreške. Ponovno pokušajte tu mapu izbrisati za koju minutu."),
                o("gee78816", "Nazivi mapa s knjižnim oznakama ne smiju premašiti 25 znakova"),
                o("h9a5daa2", "Želite izbrisati mapu?"),
                o("ac9d5f56", "Vaše će se objave i dalje spremati u mapu „Sve knjižne oznake”"),
                o("i6e7e298", "Stvori"),
                o("a0ea2fa6", "Polje za naziv ne može ostati prazno"),
                o("eec37eac", "Mapa s knjižnim oznakama tog naziva već postoji"),
                o("fce0c59e", "Raščlanjivanje animirane JSON datoteke nije uspjelo. Provjerite format animirane JSON datoteke i pokušajte ponovno."),
                o("g0eea6c2", "Čitanje animirane JSON datoteke nije uspjelo. Datoteku pokušajte ponovno otvoriti.");
            o("ae58026a", "Otvorite .json datoteku brendirane oznake „sviđa mi se” koju želite pretpregledati"),
                o("hd0bc1eb", function (a) {
                    return a.name + " emitira uživo";
                }),
                o("bea1f26b", function (a) {
                    return a.name + " emitirao/la je uživo";
                }),
                o("ab3ee97f", function (a) {
                    return a.screenName + " ne emitira uživo";
                }),
                o("d39d46c4", "Naslov je ažuriran. Prikaz promjena može potrajati najviše 30 sekundi."),
                o("e44095a5", function (a) {
                    return "Započelo " + a.timestamp;
                }),
                o("j83f29dd", function (a) {
                    return "Završeno " + a.timestamp;
                }),
                o("daca8a2c", "Otvori u oknu"),
                o("e3aac82a", "Učitavanje prijenosa uživo"),
                o("i0ed3f4e", "Slika događaja"),
                o("cbae35fa", "Prijavi prijenos uživo"),
                o("fd12ab58", "Objave u Kolekciji"),
                o("a226497c", "Stvaranje nove zajednice"),
                o("d7346632", "Niste se uključili ni u jednu Zajednicu."),
                o("b732a4cc", "Kada to učinite, vidjet ćete njegove/njezine objave ovdje."),
                o("hff48914", "Trenutačno nije moguće pronaći nijednu objavu."),
                o("hb52cc4a", "Pokušajte ponovno kasnije."),
                o("e50e1bb0", "Dobro došli u Zajednice"),
                o("i6829daa", "Zajednice su moderirane grupe za raspravu u kojima se korisnici platforme X mogu povezivati i dijeliti sadržaj."),
                o("fc5c6914", "Upoznajte druge osobe koje dijele vaše interese"),
                o("aa1a9820", "Uključite se u Zajednice i povežite se s osobama koje dijele vaše interese."),
                o("edef4c82", "Objava izravno u Zajednicu"),
                o("a7640df6", "Vaše se objave dijele s članovima Zajednice i osobama koje vas prate."),
                o("h3bb8068", "Zatražite pojačanje kada vam je potrebno"),
                o("a709f8f8", "Administratori i moderatori mogu pomoći pri upravljanju zajednicama i održavati razgovor u okviru teme."),
                o("c8d33380", "Nove stavke"),
                o("cb6adb10", "Otkrijte zajednice"),
                o("df362964", "Pronađi Zajednice"),
                o("dfd5031f", function (a) {
                    return "Novo: " + a.newTweets + " nov" + n(a.newTweets, "e objave", "a objava", "ih objava");
                }),
                o("ha4bb8a9", function (a) {
                    return a.reportedTweets + " prijav" + n(a.reportedTweets, "e", "a", "a");
                }),
                o("caf003b3", function (a) {
                    return a.memberRequests + " zahtjev" + n(a.memberRequests, "a", "", "a");
                }),
                o("a2118086", "Sortiranje objava"),
                o("hb01fe46", "Kada to učinite, pronaći ćete ih ovdje."),
                o("c170a564", "Riječ koju ste unijeli nije dala rezultat. Pokušajte unijeti neki drugi izraz za pretraživanje."),
                o("cbd1aef8", "Pretraživanje Zajednica i Objava"),
                o("fbf01e52", "Pretraživanje Zajednica"),
                o("c8a6499c", "Rezultati pretraživanja Objava u zajednici"),
                o("af05a978", "Dok tipkate, ovdje će se pojaviti rezultati."),
                o("eb4d2cd0", "Nisu pronađene objave."),
                o("a8ecdb4c", "Rezultati pretraživanja najnovijih objava u Zajednici"),
                o("dc6ce7b4", "Članovi"),
                o("ga2aa43c", "Moderatori"),
                o("b139b54a", "Pozovite članove"),
                o("cf4898a0", "Potraži osobe"),
                o("g30bc699", function (a) {
                    return "Prikaži profil korisnika/ce @" + a.screenName;
                }),
                o("e585d844", "Dodaj u moderatorski tim"),
                o("cab7c6f8", "Želite dodati u moderatorski tim?"),
                o("e96d5255", function (a) {
                    return "Korisnik/ca @" + a.screenName + " sada je moderator.";
                }),
                o("f348a395", function (a) {
                    return "Trenutačno korisnika/cu @" + a.screenName + " ne možemo dodati u moderatorski tim. Pokušajte ponovno poslije.";
                }),
                o("c3a1aebe", "Ukloni iz moderatorskog tima"),
                o("c273c8a6", "Želite ukloniti iz moderatorskog tima?"),
                o("c0eb2a53", function (a) {
                    return "Korisnik/ca @" + a.screenName + " više nije moderator.";
                }),
                o("a5808125", function (a) {
                    return "Trenutačno korisnika/cu @" + a.screenName + " ne možemo ukloniti iz moderatorskog tima. Pokušajte ponovno poslije.";
                }),
                o("a51d671b", function (a) {
                    return "Zabrani korisniku/ci @" + a.screenName + " pristup Zajednici";
                }),
                o("cdd87524", "Ovdje još nema nikoga"),
                o("cca51910", "Kada se korisnici uključe u tu Zajednicu, pojavit će se ovdje."),
                o("c9d56b72", "Recite nam nešto o svojoj zajednici. Te pojedinosti poslije možete promijeniti."),
                o("c1ad5a12", "Izgleda da se prilikom stvaranja nove zajednice pojavio problem. Pokušajte ponovno poslije."),
                o("f713fbd2", "Članstvo"),
                o("d1fa71fc", "Pitanje za odobrenje (neobavezno)"),
                o("a0a16d38", "U Zajednicu se mogu svi uključiti i/ili biti pozvani."),
                o("ce0523a8", "Ograničeno"),
                o("i1aad6ec", "Korisnici moraju zatražiti uključenje, a moderatorski tim mora njihove zahtjeve odobriti. Korisnici kojima pozivnice pošalje moderatorski tim odobravaju se automatski."),
                o("c85960a0", "Omogući članovima da šalju pozivnice"),
                o("ca373cd2", "Korisnici kojima pozivnice pošalju postojeći članovi odobravaju se automatski."),
                o("dfdcc6b4", "Odredite tko se može uključiti u vašu Zajednicu. Imajte na umu da su sve Zajednice vidljive svim korisnicima platforme X."),
                o("h3e55b40", "Naziv Zajednice"),
                o("dd71d9c9", function (a) {
                    return "Ime mora imati od " + a.minCharacterCount + " do " + a.maxCharacterCount + " znak(ov)a te ne smije sadržavati oznake ljestvi ni @korisnička imena";
                }),
                o("cf65e56b", function (a) {
                    return "Naziv mora sadržavati sljedeći broj znakova: između " + a.minCharacterCount + " i " + a.maxCharacterCount;
                }),
                o("d936eeca", "Imena ne mogu sadržavati oznake ljestvi ni @korisničkaimena."),
                o("e2df7cf2", "Svrha Zajednice"),
                o("be9bb312", "Dobar opis svrhe Zajednice omogućuje korisnicima da znaju što očekivati"),
                o("e988475f", function (a) {
                    return "Svrha mora sadržavati sljedeći broj znakova: između " + a.minCharacterCount + " i " + a.maxCharacterCount;
                }),
                o("gcddfba8", "Pitanje za odobrenje"),
                o("hf86d862", "Kada korisnici zatraže pristup, mogu odgovoriti na to pitanje. Njihov će se odgovor prikazati sa zahtjevom. Pitanje možete ukloniti tako da ga ostavite praznim."),
                o("i88b7305", function (a) {
                    return "Pitanje mora imati manje od sljedećeg broja znakova: " + a.maxCharacterCount;
                }),
                o("dce5e1b4", "Administratorski alati"),
                o("c5d8c93e", "Moderatorski alati"),
                o("c8c7f9fc", "Potreban je pregled"),
                o("a87df2ee", "Upravljanje Zajednicom"),
                o("ee609174", "Opće postavke"),
                o("ab19cdaa", "Postavke za upravljanje spamom"),
                o("d755f47d", function (a) {
                    return a.count + " nov" + n(a.count, "e objave", "a objava", "ih objava") + " za pregled";
                }),
                o("efc26607", function (a) {
                    return a.memberCount + " član" + n(a.memberCount, "", "", "ov") + "a";
                }),
                o("adfcc3ce", "Dodavanje, brisanje i uređivanje pravila"),
                o("d0330d9c", "Prikaži pravila"),
                o("fd67f7c8", "Uređivanje naziva Zajednice, svrhe i ostalog"),
                o("e7e31264", "Prilagodite filtar za spam i alate za prijavu"),
                o("gc00d212", "Podrška i resursi"),
                o("g0cbfc50", "Praktičan vodič za moderiranje Zajednice"),
                o("h6ebcfca", "Prikažite tu Zajednicu na svom profilu"),
                o("c0fa0634", "Prikažite pojedinosti o svojoj Zajednici"),
                o("da035fd5", function (a) {
                    return "Novo" + a.ttc_c9s_spotlight_header;
                }),
                o("h41224f8", "Prikažite pojedinosti o svojoj Zajednici na profilu"),
                o("b18e94b2", "Prijeđite na profesionalni profil te prikažite neku Zajednicu na profilu, pristupite analitičkim podacima o publici itd. "),
                o("dc716b1c", "Popis Zajednice"),
                o("c3e2dda6", "Dodajte ili uklonite popis Zajednice"),
                o("a68bffdc", "Pogledajte mjerne podatke zajednice"),
                o("c6ea29a2", "Izađi iz uloge moderatora"),
                o("a6e13fac", "Jeste li sigurni da želite izaći iz moderatorskog tima?"),
                o("e538848c", "Više nećete imati pristup moderatorskim alatima. Ako se predomislite, ponovno morate dobiti pozivnicu za moderatora."),
                o("j49e6aa2", "Da, želim izaći"),
                o("dde5f323", function (a) {
                    return a.count + " nov" + n(a.count, "a zahtjeva", "i zahtjev", "ih zahtjeva") + " za članstvo za pregled";
                }),
                o("f5e0332a", "Sadržaj za odrasle (potencijalno neprikladan sadržaj)"),
                o("e983404a", "Prikvačeni hashtagovi"),
                o("j8af8eaa", "Vrsta članstva"),
                o("d5f01116", "Svrha"),
                o("c2ff3c9e", "Oznake za pretraživanje"),
                o("f4a98e9e", "Podaci o Zajednici"),
                o("a43bed28", "Morate omogućiti tu postavku ako vaša zajednica sadrži sadržaje primjerene samo za odrasle. Ako to ne učinite, sadržaj primjeren samo za odrasle će se automatski filtrirati unutar vaše zajednice."),
                o("ab1069de", "Izbriši Zajednicu"),
                o("bbc91896", "Ta se radnja ne može poništiti. Autori objava i dalje mogu vidjeti svoje objave."),
                o("i27eb0b7", function (a) {
                    return "" + a.communityName;
                }),
                o("a49f884e", "Baner zajednice"),
                o("ea965b82", "Uređivanje banera zajednice"),
                o("j35d3ad6", "Ukloni i zamijeni"),
                o("f1e8fb22", "Vaš će natpis biti uklonjen i zamijenjen zadanim natpisom."),
                o("e405ec22", "Izgleda da se prilikom spremanja slike natpisa pojavio problem. Pokušajte ponovno poslije."),
                o("b7fb6bda", "Obrezivanje slike"),
                o("e71cdf4e", "Obreži minijaturu"),
                o("ef199198", "Vaše postavke su spremljene"),
                o("ee10aa5a", "Vaše se postavke nisu mogle spremiti"),
                o("i307a7ca", "Uredi prikvačene hashtagove"),
                o("dc6eca54", "Hashtag je izbrisan"),
                o("d27de326", "Prikvačite hashtagove da biste organizirali objave svoje zajednice na zasebnim vremenskim crtama"),
                o("d84cc77a", "Unesite hashtag ovdje"),
                o("d22e4cba", "Hashtagovi trebaju biti jedinstveni"),
                o("ca72a540", "Dosegnuli ste maksimalni broj dopuštenih hashtagova"),
                o("bd96bf16", "Hashtagovi moraju sadržavati najmanje 1 znak i najviše 30 znakova"),
                o("j27623d4", "Hashtagovi ne smiju sadržavati razmake niti posebne znakove"),
                o("c5d1634e", "U redu, razumijem"),
                o("daedd9fa", "To će svima omogućiti pridruživanje zajednici. Svi zahtjevi na čekanju automatski će se odobriti."),
                o("h3c0f1a2", "Uređivanje naziva Zajednice"),
                o("cb5e6510", "Izgleda da se prilikom spremanja novog naziva pojavio problem. Pokušajte ponovno poslije."),
                o("a8955490", "Uređivanje svrhe"),
                o("ced2292a", "Izgleda da se prilikom spremanja opisa svrhe pojavio problem. Pokušajte ponovno poslije."),
                o("ba74c098", "Uređivanje odgovora"),
                o("bd3e0420", "Čini se da se prilikom spremanja pitanja pojavio problem. Pokušajte ponovno kasnije."),
                o("b57baa7a", "Uredite oznake za pretraživanje"),
                o("f8caab7a", "Dodajte oznake za pretraživanje za isticanje svoje zajednice u preporukama i rezultatima pretraživanja."),
                o("f35a667a", "Ovdje upišite oznaku za pretraživanje"),
                o("b057d5c6", "Oznake za pretraživanje moraju biti jedinstvene"),
                o("cc961258", "Dosegnuli ste maksimalni broj dopuštenih oznaka za pretraživanje"),
                o("df4aca88", "Oznake za pretraživanje moraju sadržavati najmanje 1 znak i najviše 30 znakova."),
                o("ie58fa58", "Oznake za pretraživanje ne smiju sadržavati razmake ni posebne znakove"),
                o("hd176a01", function (a) {
                    return "Tema je spremljena! Tema zajednice je sada " + a.newTopicName;
                }),
                o("i39a43cc", "Tema zajednice je uklonjena"),
                o("e81b196e", "Nova tema se nije mogla spremiti"),
                o("c1f97ad4", "Uređivanje teme"),
                o("g908eb0c", "Dodajte temu kako biste drugima olakšali otkrivanje vaše zajednice! Odaberite temu koja najbolje odgovara vašoj zajednici."),
                o("f18a8ca0", "Postavke za spam"),
                o("c8bd5d42", "Jačina filtra za spam"),
                o("gfeb40a2", "Filtri za spam mogu se prilagoditi na različite razine osjetljivosti radi upravljanja neželjenim objavama."),
                o("h766865c", "Automatska prijava platforme X"),
                o("fd1f413a", "Automatska prijava moderatorima s odabranim značajkama. Nakon što se objava odobri, X neće prijavljivati sljedeće objave istog autora."),
                o("b1ba5fb4", "Otkrivanje pošiljatelja spama"),
                o("ee195f28", "Ključne riječi za spam"),
                o("cf276a82", "Sakrijte objave koje prijavljuje X dok ih ne odobre moderatori"),
                o("a8c4c3fe", "Prijavite objave korisnika koji imaju povijest slanja spama"),
                o("j8de95ec", "Unesite ključne riječi koje će aktivirati automatske prijave"),
                o("ie873142", "Visoko"),
                o("a977afa2", "Nisko"),
                o("j715cb38", "Uređivanje ključnih riječi zabranjeno je"),
                o("b32ebbe8", "Dodajte ključne riječi koje će X automatski prijaviti moderatorima Zajednice"),
                o("acde5366", "Ovdje upišite ključnu riječ"),
                o("a5f66c34", "Ključne riječi moraju biti jedinstvene"),
                o("ea637914", "Dosegnuli ste maksimalni broj dopuštenih ključnih riječi"),
                o("fede6d3c", "Ključne riječi moraju sadržavati najmanje 1 znak i najviše 30 znakova"),
                o("cc06e200", "Ključne riječi ne smiju sadržavati razmake ni posebne znakove"),
                o("d94edeb4", "Vaša Zajednica može imati najviše deset pravila. Jasna pravila pridonose međusobnom uvažavanju sudionika i otežavaju skretanje s teme."),
                o("j560c8ea", "Dodaj pravilo"),
                o("a9ba79c0", "Dobra pravila čine Zajednice uspješnima"),
                o("h5482c7a", "Dobro promislite o pravilima svoje Zajednice. Ona je usmjeravaju te članovi znaju što se od njih očekuje."),
                o("d5033a7a", "Želite li, primjerice, da razgovori ne odstupaju od zadane teme? Je li dopuštena vlastita reklama? Što s uvredljivim izrazima?"),
                o("ee8c43a0", "Što jasnije postavite pravila na početku, to ćete imati manje moderiranja."),
                o("gaa3239a", "Izgleda da se prilikom spremanja novog pravila pojavio problem. Pokušajte ponovno poslije."),
                o("a67445d6", "Dostigli ste maksimalni broj pravila"),
                o("fcbe0993", function (a) {
                    return "Zajednice mogu imati maksimalno sljedeći broj pravila: " + a.maxRuleCount + ". Da biste dodali novo pravilo, morate izbrisati neko postojeće.";
                }),
                o("c66769a4", "Pravilo"),
                o("ef02695b", function (a) {
                    return "Nazivi pravila moraju sadržavati sljedeći broj znakova: između " + a.minCharacterCount + " i " + a.maxCharacterCount;
                }),
                o("c8242020", "Opis (neobavezno)"),
                o("d32cf5e7", function (a) {
                    return "Opisi mogu sadržavati sljedeći broj znakova: " + a.maxCharacterCount;
                }),
                o("f8fa00c7", function (a) {
                    return "Descriptions can’t exceed " + a.maxCharacterCount + " characters";
                }),
                o("d45ae5e0", "Ne zaboravite obavijestiti Zajednicu"),
                o("c1631260", "Obavijestite sve članove o promjenama pravila i tako gradite povjerenje."),
                o("d3190bde", "Spremi pravilo"),
                o("ifd6e91c", "Odustani i uredi pravilo"),
                o("h99020e0", "Uredi pravilo"),
                o("f74a5adc", "Zajednice moraju imati barem jedno pravilo. Možete urediti neko postojeće pravilo ili dodati novo te ovo potom izbrisati."),
                o("fbb0ed92", "Izbriši to pravilo"),
                o("hed35472", "Pravila se brišu trajno i ne mogu se vratiti."),
                o("c8677446", "Izbriši pravilo"),
                o("c3a0d44e", "Odustani i umjesto toga uredi pravilo"),
                o("d703ce9e", "Dodajte popis u svoju Zajednicu"),
                o("f21f023c", "Dodavanjem popisa u Zajednicu popunjavate sažetak relevantnim sadržajem kojeg sami birate. Odaberite jedan od svojim popisa u nastavku:"),
                o("gbc2cf50", "Vaši popisi"),
                o("ef9462fa", "Nemate relevantan popis?"),
                o("fcda89f4", "Izradite novi popis koji sadrži račune na platformi X, a koji objavljuju sadržaje relevantne za vašu Zajednicu. Neka vaš popis ostane javan kako bi ostao vidljiv Zajednici."),
                o("c09609d8", "Stvaranje popisa"),
                o("dfddd842", "Poslano kao privatna poruka"),
                o("a3b3939b", function (a) {
                    return "@" + a.screen_name + " već je pozvan/a";
                }),
                o("db4f0cc9", function (a) {
                    return "@" + a.screen_name + " već je u ovoj zajednici";
                }),
                o("h252ede6", "Iskoristili ste sve svoje pozivnice"),
                o("a5cd93f9", function (a) {
                    return "@" + a.screen_name + " ne može se trenutačno pozvati";
                }),
                o("i6568549", function (a) {
                    return "Preostalo: " + a.remaining_invite_count + " pozivnic" + n(a.remaining_invite_count, "e", "a", "a");
                }),
                o("b4f16d00", "Potražite osobe koje želite pozvati"),
                o("ja1387a8", "Rezultati pretraživanja obuhvatit će samo osobe koje vas prate i osobe koje su omogućile primanje privatnih poruka od svih korisnika."),
                o("ae85768c", "Rezultati pretraživanja obuhvaćaju samo osobe koje vas prate i osobe koje su omogućile primanje privatnih poruka od svih korisnika."),
                o("hb1e378e", "Pozvani"),
                o("d710b60c", "Analitika Zajednice"),
                o("c199e390", "Nove objave"),
                o("b4f51cd6", "Broj objava u prošlom tjednu"),
                o("g6f8325a", "Novi članovi"),
                o("b2bb7276", "Broj članova koji su se pridružili prošlog tjedna"),
                o("e2172c92", "Aktivni članovi"),
                o("fe1a9f68", "Broj članova koji su objavili u vašoj Zajednici"),
                o("e989927e", "Jedinstveni posteri"),
                o("d1386a90", "Broj članova koji su objavili objavu u vašoj zajednici"),
                o("abf609f2", "Ukupan broj članova"),
                o("h2081878", "Ukupan broj članova u vašoj Zajednici"),
                o("a3235cd6", "Jedinstveni posjeti"),
                o("g21e2a70", "Broj korisnika platforme X koji su posjetili vašu Zajednicu prethodnog tjedna"),
                o("ied6bac2", "Broj oznaka „sviđa mi se”"),
                o("ced8d39a", "Broj oznaka „sviđa mi se” u vašoj Zajednici proteklog tjedna"),
                o("fb4f859c", "Broj odgovora"),
                o("h5a41cce", "Broj odgovora u vašoj Zajednici proteklog tjedna"),
                o("i314218e", "Mjerni podaci za proteklih 7 dana. Ažurirano "),
                o("addbb11e", "Nema novih zahtjeva za članstvo"),
                o("c38131de", "Sve ste pogledali! Kada pristignu novi zahtjevi, pojavit će se ovdje."),
                o("d7f13fb9", function (a) {
                    return "Korisnik/ca @" + a.screenName + " je odobren(a) i sada je član vaše Zajednice";
                }),
                o("a340df67", function (a) {
                    return "Korisniku/ci @" + a.screenName + " pristup je odbijen te se ne može uključiti u Zajednicu";
                }),
                o("jd8aae9d", function (a) {
                    return "Izgleda da trenutno ne možemo odobriti korisnika/cu @" + a.screenName + ". Pokušajte ponovno poslije.";
                }),
                o("i580e149", function (a) {
                    return "Izgleda da trenutno ne možemo odbiti korisnika/cu @" + a.screenName + ". Pokušajte ponovno poslije.";
                }),
                o("b4a38e4e", "Tu ste osobu blokirali. Ako joj se odobri članstvo, morate je odblokirati da biste vidjeli njezine objave."),
                o("f0956736", "Tu ste osobu onemogućili. Ako joj se odobri članstvo, morate je omogućiti da biste vidjeli njezine objave."),
                o("b7f1e58a", "Prati vas"),
                o("dffb0774", "Trenutačno nema ničega za pregled"),
                o("ab512f26", "Nije zabilježen nikakav zapisnik radnje."),
                o("b8171558", "Zabranjeno"),
                o("e32e7e1a", "Moderator"),
                o("b53fb7c6", "Čini se da trenutačno ne možemo poništiti tu radnju. Pokušajte ponovno kasnije."),
                o("c546ba07", function (a) {
                    return "Prikaži profil korisnika/ce " + a.userName;
                }),
                o("h4516e4f", function (a) {
                    return "Pretražite objave korisnika/ce " + a.userName + " u ovoj Zajednici";
                }),
                o("j4d4a809", function (a) {
                    return "Moderator " + a.moderatorName + " sakrio je objavu";
                }),
                o("ja589ea5", function (a) {
                    return "Moderator " + a.revertedModeratorName + " poništio je skrivanje objave";
                }),
                o("c904a2ff", function (a) {
                    return "Moderator " + a.moderatorName + " prikvačio je objavu";
                }),
                o("b43358cf", function (a) {
                    return "Moderator " + a.moderatorName + " otkvačio je objavu";
                }),
                o("bb6299a7", function (a) {
                    return "" + a.moderatorName;
                }),
                o("f0347599", function (a) {
                    return "" + a.moderatorName;
                }),
                o("e33d133b", function (a) {
                    return "" + a.moderatorName;
                }),
                o("c29ec092", function (a) {
                    return "" + a.revertedModeratorName;
                }),
                o("f6530972", "Poništi skrivanje objave"),
                o("j68fc824", "Otkriveno"),
                o("j9541e18", "Pretražite objave"),
                o("j10903d7", function (a) {
                    return "Moderator " + a.moderatorName + " uklonio je člana";
                }),
                o("e38bf285", function (a) {
                    return "Moderator " + a.revertedModeratorName + " ponovno je vratio člana";
                }),
                o("dea0d437", function (a) {
                    return "Korisnik " + a.userName + " pridružio se ovoj zajednici";
                }),
                o("j10346f5", function (a) {
                    return "Korisnik " + a.userName + " napustio je ovu zajednicu";
                }),
                o("jb159607", function (a) {
                    return "Moderator " + a.moderatorName + " odobrio je zahtjev za članstvo";
                }),
                o("af7a63eb", function (a) {
                    return "Moderator " + a.moderatorName + " odbio je zahtjev za članstvo";
                }),
                o("i717dfc3", function (a) {
                    return "Moderator " + a.revertedModeratorName + " ponovno je odobrio zahtjev za članstvo";
                }),
                o("ce5ac32b", function (a) {
                    return "" + a.moderatorName;
                }),
                o("a7f869a4", function (a) {
                    return "" + a.revertedModeratorName;
                }),
                o("efad949a", function (a) {
                    return "" + a.userName;
                }),
                o("d0ae5998", function (a) {
                    return "" + a.userName;
                }),
                o("ef020751", function (a) {
                    return "" + a.moderatorName;
                }),
                o("a46c5a63", function (a) {
                    return "" + a.moderatorName;
                }),
                o("h55401a4", function (a) {
                    return "" + a.revertedModeratorName;
                }),
                o("d31e695c", "Ponovno odobri zahtjev"),
                o("i9a18ce0", "Ponovno odobreno"),
                o("i24de0fe", "Ponovno vrati člana"),
                o("b1c662f8", "Vraćeno"),
                o("j2e04b1e", "Moderatori su obradili sve prijavljene objave."),
                o("hb21cdb6", "Zabrani"),
                o("dc7a9436", "Prijavite objavu platformi X"),
                o("e2bc5db0", "@X"),
                o("d0a1b248", function (a) {
                    return "" + n(a.count, a.formattedCount + " članova", a.formattedCount + " član", "Članova: " + a.formattedCount);
                }),
                o("cd4d48d2", "@X"),
                o("ff0f742a", function (a) {
                    return a.formattedCount + " član" + n(a.count, "ova", "", "ova");
                }),
                o("dca19c06", "Sakrili ste tu objavu"),
                o("dd641764", "Zadržali ste tu objavu"),
                o("jf99d610", "Povratne informacije zajednice"),
                o("bbd69672", "Moderator je sakrio tu objavu jer krši pravilo Zajednice."),
                o("c730a21c", "Prekršeno je ovo pravilo:"),
                o("a5baa7d2", "Odvojite malo vremena i proučite pravila. Ona služe da bi razgovori bili sigurni i relevantni"),
                o("icc32e3d", function (a) {
                    return "Moderator vas je uklonio iz Zajednice " + a.communityName + " zbog kršenja ovog pravila:";
                }),
                o("d7d9be8a", "Otkrijte Zajednice i Objave"),
                o("cae9962e", "Trenutačno nije moguće pronaći nijednu Zajednicu."),
                o("c2117be6", "Vidite te stavke na navigacijskoj traci? 👀"),
                o("c2c4dad4", "Odaberite nešto i to će se pojaviti ovdje. Samo naprijed, mi ćemo pričekati."),
                o("b7218496", "Još nema oznaka ljestvi"),
                o("gc09bcfe", "Vaša Zajednica nema tweetova označenih ljestvama, no to možete promijeniti."),
                o("cf35a990", "Učitavanje objava Zajednice s oznakom ljestvi"),
                o("a1c41fe8", "Objave Zajednice s oznakom ljestvi"),
                o("f27a2232", "Pretražite Zajednicu"),
                o("ie2efe36", "Rezultati pretraživanja u Zajednici"),
                o("a7c2e06d", function (a) {
                    return "Zajednica " + a.communityName;
                }),
                o("a94092a2", "Sada možete koristiti moderatorske alate"),
                o("be6dfbae", "Kao moderator Zajednice možete dodavati i uklanjati članove."),
                o("b4f877be", "Zajednica nije pronađena"),
                o("e48fbb02", "Prijavi Zajednicu"),
                o("b1614c34", "Više o Zajednicama"),
                o("j1dcedde", "Pretražite objave"),
                o("cc683fba", "O Zajednici"),
                o("af7c11aa", "Podaci o Zajednici"),
                o("fb974b24", "Samo članovi mogu objavljivati."),
                o("fcef2922", "U tu se Zajednicu mogu svi uključiti."),
                o("c93dd2c8", "Da biste se uključili u tu Zajednicu, morate zatražiti pristup i on vam se mora odobriti."),
                o("gedb877d", "Sve su Zajednice javno vidljive."),
                o("bf359e0e", "O vašoj novoj Zajednici"),
                o("e8fcdd3a", "Na početku imate osnovne postavke, no postavke za Zajednicu možete i sasvim prilagoditi. To ćemo vam sada objasniti."),
                o("b37d580e", "Zajednica je ograničena"),
                o("c6d9c07c", "Sve su Zajednice vidljive svim korisnicima platforme X. Korisnici moraju zatražiti pridruživanje, a odobriti ih mora moderatorski tim ili (ako je tako omogućeno) postojeći članovi."),
                o("ea3b38fa", "Zajednica je otvorena"),
                o("i625c42e", "Sve su Zajednice vidljive svim korisnicima platforme X. U vašu Zajednicu mogu se svi uključiti i/ili biti pozvani."),
                o("ca7eeab0", "Vaša početna pravila Zajednice jesu"),
                o("acae4034", "Postavke se mogu promijeniti u odjeljku Administratorski alati"),
                o("e2186ee2", "Ne odgovara vam? Nema problema, jednostavno promijenite."),
                o("a0e3ece4", "Detalji o zajednici"),
                o("d11f73ea", "Sadržaj za odrasle"),
                o("hb9400dc", "Prikaži više"),
                o("b71a08a0", "Zajednica pretplatnika"),
                o("d0574662", "Postavi obavijesti"),
                o("fc16f13a", "Koje obavijesti želite?"),
                o("be341c46", "Prostori zajednice (audiorazgovori)"),
                o("fbe88a32", "Razgovori u zajednici porukama uživo"),
                o("b551cd1e", "Prikvačene objave"),
                o("i9f39962", "Prikvači Zajednicu"),
                o("bc7f90a0", "Prikaži pojedinosti o Zajednici na profilu"),
                o("j5a37508", "Prikvači Zajednicu na početni zaslon"),
                o("c7a4610a", "Otkvači Zajednicu s početnog zaslona"),
                o("bec3b8fa", "Dijeli Zajednicu"),
                o("cc7d5b88", "Pozovi putem privatne poruke"),
                o("c66b37fa", "Kontrolni popis Zajednice"),
                o("g2768d0e", "Samo još nekoliko sitnica i vaša Zajednica bit će spremna za svoj prvi nastup..."),
                o("b192b58c", "Odbaci kontrolni popis"),
                o("gd302780", "Pogledajte Zajednicu koju sam stvorio/la:"),
                o("h5890b1a", "Nedovršeno"),
                o("b4a6faca", "Pregledajte pravila"),
                o("a01e1a7c", "Personalizirajte Zajednicu"),
                o("f493480c", "Objavite svoju Zajednicu"),
                o("i9b7f6ba", "Učitavanje objava"),
                o("c22e8902", "Isprobajte"),
                o("a3466e1c", "Praćenje razgovora s oznakama ljestvi"),
                o("a524bb7e", "Oznake ljestvi olakšavaju stvaranje, pronalaženje i uključivanje u tematske razgovore u Zajednici."),
                o("he8db880", "Izgleda da ta Zajednica ne postoji"),
                o("cc684fbc", "Možda je izbrisana ili uopće ne postoji. Život je prepun tajni."),
                o("b4f8b518", "Autori sadržaja za vas"),
                o("f5c41e22", "Idi u postavke za delegiranje uloga"),
                o("b9226ec1", "Prijavljeni ste kao "),
                o("f47b48f6", "korisnik"),
                o("b2ca74aa", "Prebacit ćete se na delegirani račun"),
                o("ba77b438", "Promijeni račune"),
                o("g5261e91", function (a) {
                    return "Sada djelujete u ime korisnika @" + a.screenName + ".";
                }),
                o("cc15a3ea", "Imajte na umu da niste vlasnik tog računa. Kao administrator možete slati privatne poruke, objavljivati objave i stvarati Popise te ih pregledavati. Također možete slati pozivnice ili uklanjati suradnike za taj račun te vidjeti analitičke podatke o objavi."),
                o("e406250c", "Imajte na umu da niste vlasnik tog računa. Kao suradnik možete slati privatne poruke, objavljivati objave i stvarati Popise te ih pregledavati."),
                o("e6718a62", "Tu značajku može upotrebljavati samo vlasnik računa"),
                o("ba411b6f", "pošaljite povratne informacije"),
                o("f01ee14b", "pošaljite povratne informacije"),
                o("dbc85148", "Odaberite poruku"),
                o("a073658c", "Odaberite neki od postojećih razgovora, započnite novi ili samo i dalje pratite."),
                o("f325afc4", "Sastavi PP"),
                o("f5dc353c", "Sada se eksplicitni sadržaj filtrira"),
                o("daeda054", "Otvori postavke"),
                o("fe1eaa96", "Preko poruka za koje se posumnja da sadrže eksplicitni sadržaj (npr. golotinju, seksualni sadržaj ili nasilje) sada će se prikazivati upozorenja. Ako želite, uvijek ih možete isključiti u postavkama."),
                o("hc32acba", "Želite li izbrisati zahtjeve za poruke?"),
                o("f9048f58", "Ta se radnja ne može poništiti, a odabrani zahtjevi za poruke izbrisat će se iz vaše ulazne pošte."),
                o("a9d0d7f0", "Skupno uređivanje"),
                o("eb7de4aa", "Prikaz dodatnih poruka, uključujući one koje mogu sadržavati uvredljiv sadržaj."),
                o("ee8c0c8a", "Dolazne poruke ili grupne poruke osoba koje ne pratite pojavit će se ovdje te ćete ih moći prihvatiti ili izbrisati."),
                o("ff599112", "Stvaranje grupe"),
                o("c602600a", "Dodaj korisnike"),
                o("fa2033f6", "Šifrirano"),
                o("aa59bb6a", "Pošaljite objavu pojedinačno"),
                o("a2ccb2e8", "Privatna poruka je poslana."),
                o("f906f464", "Objava je podijeljena s grupom."),
                o("i8a99aae", "Objava je podijeljena pojedinačno."),
                o("hbbc401c", "Pošalji u grupu"),
                o("e1bde73f", function (a) {
                    return "Slanje poruke korisniku/ci @" + a.screenName + " nije moguće";
                }),
                o("f7289cd6", "Imate odabran grupni razgovor"),
                o("e6cced4e", "U grupu se mogu poslati samo razgovori „jedan na jedan”. Poruke možete poslati i zasebno."),
                o("e3e58b6e", "Informacije o razgovoru"),
                o("a9ddbb94", "Informacije o grupi"),
                o("dd4779a0", "Upravljanje oznakama"),
                o("ca9af866", "Oznake:"),
                o("e62d3c10", "Ne postoji račun pod tim imenom. Pokušajte ponovno."),
                o("h8403fb6", "Trenutno ih ne možete dodati u ovaj razgovor."),
                o("ja522ed4", "Neke od tih osoba trenutno ne možete dodati u ovaj razgovor."),
                o("d87bff5a", "Učitavaju se informacije o razgovoru."),
                o("cabb453e", "Naziv grupe"),
                o("eb1bb5a2", "Prikaži sve korisnike"),
                o("a70436ac", "Započni šifriranu poruku"),
                o("a7f20223", function (a) {
                    return "Odgodi obavijesti korisnika/ce " + a.name;
                }),
                o("g2f04a6b", function (a) {
                    return "Za korisnika/cu " + a.name + " uklonili ste odgodu";
                }),
                o("i453fedf", function (a) {
                    return "Odgođeno do " + a.expiration;
                }),
                o("b3dfd51a", "Odgodi spominjanja"),
                o("cc7c8ce6", "Onemogućite obavijesti kada vas osobe spomenu u ovom razgovoru."),
                o("hab58674", "Spominjanja su onemogućena"),
                o("e3c6e080", "Spominjanja su omogućena"),
                o("f33ef58a", "Prijavi razgovor kao nezakonit u EU-u "),
                o("d1a6dbe6", "Blokiraj sve"),
                o("f24af200", "Blokiraj privatne poruke"),
                o("a30e1677", function (a) {
                    return "Blokirajte korisnika/cu @" + a.screenName + "; @" + a.screenName + " više vas neće moći pratiti niti vam slati poruke te nećete primati obavijesti od korisnika/ce @" + a.screenName + ".";
                }),
                o("iae09949", function (a) {
                    return "Želite li blokirati privatne poruke korisnika @" + a.screenName + "?";
                }),
                o("e778e3d8", "Uspješno blokirane privatne poruke"),
                o("b7867912", "Deblokiraj sve"),
                o("gaddb872", "Deblokiraj privatne poruke"),
                o("d83414a1", function (a) {
                    return "Želite li odblokirati korisnika/cu @" + a.screenName + "? Moći će vas pratiti i vidjeti vaše objave.";
                }),
                o("a5bbfecd", function (a) {
                    return "Želite li odblokirati korisnika/cu @" + a.screenName + "? Moći će vas pratiti i sudjelovati u vašim javnim objavama.";
                }),
                o("cde6e1ff", function (a) {
                    return "Želite li deblokirati privatne poruke korisnika @" + a.screenName + "?";
                }),
                o("j37c4674", "1 sat"),
                o("je7e1fed", function (a) {
                    return "Za korisnika/cu " + a.name + " postavili ste odgodu na 1 sat";
                }),
                o("hf94a2d6", "Onemogućeno sljedećih 1 sat"),
                o("fb7a43c6", "8 sati"),
                o("e95c8f8b", function (a) {
                    return "Za korisnika/cu " + a.name + " postavili ste odgodu na 8 sati";
                }),
                o("bd54fad2", "Onemogućeno sljedećih 8 sati"),
                o("cb5bf56e", "1 tjedan"),
                o("gb7a130b", function (a) {
                    return "Za korisnika/cu " + a.name + " postavili ste odgodu na 1 tjedan";
                }),
                o("f6fce0fe", "Onemogućeno 1 tjedan"),
                o("i78153dd", function (a) {
                    return "Za korisnika/cu " + a.name + " postavili ste odgodu zauvijek";
                }),
                o("je9455da", "Poruke su šifrirane"),
                o("b5b0afa4", "Prilagodite prikaz"),
                o("ec5880e6", "Te postavke utječu na sve račune za X u tom pregledniku."),
                o("babfa32c", "Brzo prilagodite prikaz"),
                o("a2a2f98e", "Saznajte novosti"),
                o("b4a361c0", "Možete personalizirati boju i veličinu teksta, kao i odmah upravljati tamnim načinom. Te su postavke vidljive samo vama."),
                o("c797b44e", "Najnovije priče na platformi X ispričane pomoću objava."),
                o("a19ce060", "Istraživanje nije dostupno."),
                o("f7d1a8e0", "Aplikacija za Android"),
                o("aab2fae0", "Aplikacija za iOS"),
                o("a35d9c9a", "Resursi"),
                o("i6671128", "Otključali ste veći broj značajki na platformi X"),
                o("d5e4d0a6", "Možete se lakše uključiti u razgovor i povezati s drugim korisnicima. Sada možete sljedeće:"),
                o("a97bc07e", "Otključajte veći broj značajki na platformi X"),
                o("a72188d6", "Da bi X bio koristan za sve korisnike, želimo biti sigurni da taj račun pripada čovjeku. To nam dajte do znanja tako da se pozabavite svojom vremenskom crtom i povežete s drugim korisnicima. Kada budemo imali takav dokaz, moći ćete sljedeće:"),
                o("a4ee9572", "Neka vas vidi više ljudi"),
                o("e5f4eac0", "Vaš će sadržaj moći pronaći više ljudi, a vi ćete se pojavljivati u rezultatima pretraživanja i popularnim temama."),
                o("c7832a72", "Izravno se povežite s drugim korisnicima"),
                o("i1ccd17a", "Osobama koje vas ne prate šaljite privatne poruke koje se neće automatski filtrirati."),
                o("hc965308", "Zabava"),
                o("eb78b77e", "Zabavni način rada"),
                o("aa8ece10", "Isprobajte grok.com"),
                o("gb5fb7d0", "Način rada za fokusiranje"),
                o("g5665caa", "Izlaz iz načina rada za fokusiranje"),
                o("a372681e", "Kopiraj poveznicu za dijeljenje"),
                o("fbc79f6a", "Povijest čavrljanja"),
                o("b61ad410", "Povijest"),
                o("b3de2628", "Nema dostupne povijesti čavrljanja"),
                o("acfbfb28", "Ovdje će se pojaviti vaši budući razgovori."),
                o("i1147548", "Pretražite povijest usluge Grok"),
                o("ab437026", "Nisu pronađeni razgovori"),
                o("e12569ec", "Tražite nešto drugo."),
                o("d4eb0e26", "Promijeni naziv"),
                o("c64975ea", "Još nijedan razgovor niste označili omiljenim"),
                o("a3e3db6e", "Kliknite zvjezdicu da biste spremili razgovore kojima se često vraćate"),
                o("f4ae77ac", "Povijest slika nije dostupna"),
                o("d57d337e", "Generirane slike pojavit će se ovdje."),
                o("dab087ee", "Čavrljanja"),
                o("a911623c", "Slike"),
                o("ae9cdac6", "Povijest čavrljanja"),
                o("b198a392", "Razgovor putem značajke Grok"),
                o("d16329b4", "Kopiraj razgovor"),
                o("af6c4470", "Nešto nije u redu. Pokušajte ponovno."),
                o("gf43d270", "Nastavi s ovim razgovorom"),
                o("f4b5fae2", "Slanjem poruke taj će se razgovor kopirati u vašu povijest"),
                o("eb0d91ac", "Izradi sliku pomoću Groka"),
                o("c5a23514", "Nacrtaj me"),
                o("g1cb8096", "Iznenadi me"),
                o("a5a3df56", "Opišite sliku za generiranje"),
                o("gbb4e90a", "nasumičan psihodeličan izmišljeni svijet"),
                o("af21f92e", "blaženstvo"),
                o("e207cba2", "nasumično sportsko natjecanje"),
                o("b1323f10", "manekenka na pisti tijekom modne revije u Parizu"),
                o("g6a90174", "smiješna hipsterska životinja"),
                o("jdc4b66c", "svjetsko čudo"),
                o("ec601934", "Izmijeni"),
                o("f9ecd3ba", "Umetni kao objavu"),
                o("af652514", "Razlika"),
                o("j95bac7a", "Prilagodi Grok"),
                o("c5665922", "Što biste htjeli da Grok zna o vama?"),
                o("ff625c40", "Na koji biste način htjeli da Grok odgovara?"),
                o("e5c7d602", "Omogući za sve razgovore"),
                o("d5e03fbc", "Feed značajke Grok"),
                o("a294d0c6", "Izradite vlastitu verziju"),
                o("b38adba2", "X – aplikacija za sve"),
                o("d05ae004", "Utakmica NHL"),
                o("d35ad22c", "Prikaži posljednju utakmicu NHL"),
                o("e806daa2", "Nogometna utakmica"),
                o("cc2c2eca", "Prikaži posljednju nogometnu utakmicu"),
                o("bcdeae66", "Portal svjetskog prvenstva formule 1"),
                o("e30e4bea", "Pratite svjetskog prvenstvo na platformi X."),
                o("be548ecb", function (a) {
                    return a.teamName1 + " protiv " + a.teamName2;
                }),
                o("b23bb579", function (a) {
                    return a.teamName1 + " protiv " + a.teamName2 + " – novosti na platformi X";
                }),
                o("b72c924c", "Traženje posla"),
                o("f4da95a0", "Preporuke za poslove"),
                o("eedd808c", "Spremljeni poslovi"),
                o("e0ba641a", "Za tvrtke"),
                o("f9e6381a", "Pretražite poslove"),
                o("fb15ec28", "Dohvatite preporuke u vezi s poslovima"),
                o("ece910f0", "Pogledajte poslove na temelju svojih preferencija"),
                o("jd08bc14", "Preporuke se s vremenom poboljšavaju"),
                o("de0a4a72", "Upravljajte time gdje vam se prikazuju preporuke"),
                o("db8c4158", "Prijavite se odmah"),
                o("d9c8057a", "Kliknite ovdje"),
                o("a71d7584", "Istaknuto"),
                o("d2b8da2c", "Softversko inženjerstvo"),
                o("cd958040", "Podaci i analitika"),
                o("c5760ca2", "Proizvod"),
                o("d31b4a2a", "Dizajn"),
                o("f38959a6", "Prodaja"),
                o("bc78a26c", "Operacije"),
                o("ec28738e", "Ljudski resursi"),
                o("icb06308", "Financije i računovodstvo"),
                o("d0b978ec", "Zakonodavstvo i usklađenost"),
                o("af19cdc2", "Znanost i inženjerstvo"),
                o("e4a51fca", "Medicina"),
                o("e8ca78ae", "Građevinarstvo i građevinski obrti"),
                o("e25d75e4", "Stažist"),
                o("e89b3f04", "Početnički položaj"),
                o("h55825dc", "Niži"),
                o("cc537386", "Srednje razine"),
                o("jfc3cece", "Viši"),
                o("e1b683aa", "Vodeći"),
                o("c4627fda", "Upravitelj"),
                o("db75b47c", "Direktor"),
                o("i312f0ce", "Na lokaciji"),
                o("b4aff05e", "Hibridno"),
                o("c08b9138", "Na daljinu"),
                o("ia5d6422", "Obavezna je prisutnost na fizičkoj lokaciji"),
                o("h97c7f42", "Rad na lokaciji djelomično je uvjet"),
                o("ibed2d04", "Rad na lokaciji nije uvjet"),
                o("f508c49c", "Kopirajte vezu na zadatak"),
                o("d6825dce", "Dijeli putem privatne poruke"),
                o("b9613442", "Podijeli putem objave"),
                o("c2b3f0da", "Izdvoji na profilu"),
                o("c791d3fc", "Podijeli posao"),
                o("eb517058", "Tvrtke u sektoru umjetne inteligencije"),
                o("b677cb9b", function (a) {
                    return "Filtri tvrtke: " + a.count;
                }),
                o("ja04d37c", "Unesite nazive tvrtki"),
                o("a1876045", function (a) {
                    return "Filtri vrste zaposlenja: " + a.count;
                }),
                o("fb146dd2", "Vrsta zaposlenja"),
                o("a7090408", "Ključna riječ"),
                o("f16e9a15", function (a) {
                    return "Filtri vrste lokacije: " + a.count;
                }),
                o("fa7d455a", "Vrsta lokacije"),
                o("caa606db", function (a) {
                    return "Filtri radnog staža: " + a.count;
                }),
                o("jda06238", "Radni staž"),
                o("j595df68", "Ažurirajte svoje postavke u vezi s preporukama:"),
                o("a1227d5e", "Uključite preporuke"),
                o("bae2f5f0", "Dodajte ovaj posao u svoj profil"),
                o("cbcaaa1a", "U nastavku možete pogledati kako će to izgledati."),
                o("f58cf1ac", "Dodaj posao"),
                o("j4ae9960", "Došlo je do problema prilikom dodavanja ovog posla na vaš profil."),
                o("caa352f0", "Previše poslova"),
                o("i08bee0e", "Previše istaknutih poslova"),
                o("d7ccaea2", "Trenutačno možete imati do 3 aktivna posla."),
                o("h05e4a7a", "Ograničeni ste na 10 istaknutih poslova."),
                o("b518daae", "Otvorite nadzornu ploču za zapošljavanje"),
                o("f48e9c52", "Posao je uspješno dodan."),
                o("f6757978", "Možete ukloniti ovaj posao ili dodati druge poslove sa svoje nadzorne ploče za zapošljavanje."),
                o("i329c5a6", "Prikaži nadzornu ploču za zapošljavanje"),
                o("h39a5448", "Izdvojite svoje poslove uz X Hiring!"),
                o("d204515c", "Jednim klikom dodajte poslove na svoj profil."),
                o("ecb3df70", "Objave o događajima"),
                o("a01d5a7c", "Ovaj vam sadržaj nije dostupan jer ga je stvorila osoba koju ste blokirali"),
                o("cab51f93", function (a) {
                    return "Ovaj sadržaj ne možete pogledati zato što vas @" + a.screenName + " blokirao/la.";
                }),
                o("eaaca5dc", "Rezultat"),
                o("abdcd68a", "Učitavanje događaja"),
                o("cfb57adb", function (a) {
                    return "Objave o temi " + a.hashtag;
                }),
                o("b1037710", "Recite nam svoje mišljenje"),
                o("bb980db0", "Vremenska crta događaja"),
                o("ffd929c1", function (a) {
                    return "NOVO" + a.ttc_live_event;
                }),
                o("c9b302f8", "Vratite se poslije i pogledajte najnovije proizvode."),
                o("cfe836d1", function (a) {
                    return a.percent + " % popusta";
                }),
                o("efb132c3", function (a) {
                    return a.title + " – " + a.description + " po cijeni od " + a.price;
                }),
                o("f27deeea", "Pločica s proizvodima za prodaju"),
                o("e8166cee", function (a) {
                    return "" + a.formattedPrice;
                }),
                o("g66c8348", "REPRODUKCIJA"),
                o("j1d352d8", "Podsjetnik je postavljen"),
                o("d18909d4", "Postavi podsjetnik"),
                o("b0b38774", "Medijski sadržaj u zaglavlju"),
                o("a7a119ec", "Poništi sidrenje"),
                o("cfadb00e", "Slušanje"),
                o("db4620aa", "PROSTOR UŽIVO"),
                o("c958e692", "SNIMLJENI PROSTOR"),
                o("i2c2bfb7", function (a) {
                    return a.count + " slušatelj" + n(a.count, "a", "", "a");
                }),
                o("i3f7ff00", "Minijatura medijskog sadržaja"),
                o("h400d7c2", "UKLJUČITE SE U PROSTOR"),
                o("be6ef5b4", "USKORO"),
                o("ca25ebae", "Koeficijent"),
                o("e749753a", "Udio"),
                o("ea885dec", "Novac"),
                o("cde48000", "Imate problem s kockanjem? Nazovite 1-800-GAMBLER"),
                o("g53d5df6", "Fokusirano"),
                o("d1e0a75f", function (a) {
                    return "Za vas" + a.noun;
                }),
                o("dafd69e9", function (a) {
                    return "Praćenje" + a.noun;
                }),
                o("d80a1c37", function (a) {
                    return "Pretplaćeni" + a.noun;
                }),
                o("d3619250", "Najviše sviđanja"),
                o("f5edfbde", "Želite li se odjaviti s platforme X?"),
                o("f12b4db5", function (a) {
                    return "Želite li se odjaviti s računa @" + a.screenName + "?";
                }),
                o("ia5ff8b6", "Uvijek se možete ponovno prijaviti. Ako samo želite promijeniti račun, dodajte postojeći račun."),
                o("ea3750c4", "Te se postavke primjenjuju samo na ovaj račun, a ostat ćete prijavljeni na ostalim računima."),
                o("gc6866f8", "Odjava"),
                o("f8ad0092", "Nažalost, došlo je do pogreške. Pokušajte se ponovno prijaviti."),
                o("h2c7767e", "Vaša sesija više nije valjana. Pokušajte se ponovno prijaviti."),
                o("e83047c2", "Unijeli ste previše netočnih kodova. Pokušajte se ponovno prijaviti."),
                o("g4b108ee", "Generirali ste previše pričuvnih kodova. Morate se ponovno uključiti u provjeru autentičnosti prilikom prijave na svom telefonu."),
                o("a9be9b44", "Nastavi na X"),
                o("e55188f0", "Na taj ste račun prijavljeni putem preglednika"),
                o("d55d8fe2", "Želite li nastaviti s ovim računom?"),
                o("g806008e", "Prijavite se pomoću drugog računa"),
                o("c55f5c9a", "Došlo je do pogreške, no nema razloga za uzrujavanje jer niste vi krivi. Pokušajmo ponovno."),
                o("bfb6be8a", "Zaradite novac na platformi X"),
                o("ed6c6da2", "Provjera autentičnosti za X Premium prvi je korak prema monetizaciji."),
                o("h93b6580", "Zarađujte od dijeljenja visokokvalitetnog sadržaja. Što više komunicirate s korisnicima na platformi X, više zarađujete."),
                o("eea6d8f8", "Ispunjavanje uvjeta za udio u prihodu za autore sadržaja"),
                o("a0e8811e", "Izgradite skupinu obožavatelja"),
                o("e1a74ac0", "Ponudite ekskluzivan sadržaj korisnicima koji vas najviše podržavaju i zarađujte dosljedan prihod."),
                o("cd3a6f9a", "Ispunjavanje uvjeta za pretplatu"),
                o("c35e6144", "Stvarajte bolji sadržaj uz Premium alate"),
                o("b9dbeb34", "Otključajte dulje videozapise, Media Studio, Analitiku i prioritetnu podršku."),
                o("b2d41138", "Veći doseg = veća zarada"),
                o("defa7f12", "Uživajte u pogodnostima opcije Isticanje odgovora, koja vam pruža veću vidljivost za brži rast."),
                o("i3e4955d", "Ovdje"),
                o("cea1c00e", "Otključajte funkciju uključivanja"),
                o("f8e6a280", "Novi korisnici moraju platiti malu godišnju naknadu da bi mogli objavljivati objave, označavati oznakom „sviđa mi se”, dodavati u knjižne oznake i odgovarati. Razlog za to je smanjenje spama i poboljšanje iskustva svih korisnika. I dalje možete besplatno pratiti druge korisnike i pregledavati X."),
                o("h968efc6", "Novi korisnici moraju platiti malu naknadu da bi mogli objavljivati objave, označavati oznakom „sviđa mi se”, dodavati u knjižne oznake i odgovarati. Razlog za to je smanjenje spama i poboljšanje iskustva svih korisnika. I dalje možete besplatno pratiti druge korisnike i pregledavati X."),
                o("b66b62a4", "Uvjeti pružanja usluge za kupce"),
                o("e5b5faa6", "Uvjeti programa Nisam bot"),
                o("i61a221c", "Pretplati se i plati"),
                o("fce91ab4", "Hm...to nije pomoglo."),
                o("a235cb76", "Pojavio se problem prilikom provjere vaše pretplate na Nisam bot. Provjerite podatke o plaćanju i pokušajte ponovno."),
                o("a8eea654", "Uplata je uspjela."),
                o("bc8baa08", "Pretplaćen/na"),
                o("a98ba778", "Vremenske crte s obavijestima"),
                o("j887d006", "Ovdje ćete pronaći sve što vas zanima: od oznaka „sviđa mi se” do proslijeđenih objava i još mnogo toga."),
                o("c06d4306", "Kada vas netko spomene, ovdje ćete pronaći to spominjanje."),
                o("ge7c661a", "Oznake „sviđa mi se”, spominjanja, proslijeđene objave i još mnogo toga pronaći ćete ovdje – ako ih objave provjerene osobe."),
                o("d3de3b5c", "Ovdje ćete pronaći oznake „sviđa mi se”, spominjanja, proslijeđene objave i još mnogo toga – kada ih vaši pretplatnici objave."),
                o("e3f9838d", "Saznajte više"),
                o("eba8b1c8", "Upravljajte time u kojim se razgovorima spominjete"),
                o("j745b8a6", "Upotrijebite izbornik radnji (tri točkice na objavi) da biste sa sebe uklonili oznaku i izašli iz razgovora."),
                o("c380d684", "Vaša prijava"),
                o("da7cf0d8", "Označili smo te objave kao osjetljivi sadržaj"),
                o("a6da21a1", function (a) {
                    return a.appName + " želi pristupiti vašem računu za X";
                }),
                o("f4392d00", "Ovlasti aplikaciju"),
                o("ee4dca3c", "poništi poveznicu"),
                o("bb347bbc", "centru za pomoć"),
                o("be38d34e", "Da biste koristili tu aplikaciju, morate biti prijavljeni na X."),
                o("e087691a", "Toj aplikaciji niste uspjeli dati pristup. Vratite se i pokušajte se ponovno prijaviti."),
                o("e7dd62c4", "Ako kliknete gumb „Dopusti aplikaciju”, dopuštate tvrtki xAI da pristupi vašim podacima na platformi X, uključujući sljedeće:"),
                o("debbdc98", "Vaš korisnički profil na platformi X, podaci o računu, postavke za X i preferencije za X."),
                o("d9cf7c9c", "Vaše objave na platformi X koje se mogu pregledati na vašem računu za X, uključujući objave na sve račune i sa svih računa (javnih ili zaštićenih) koje možete pregledati."),
                o("cdf40068", "Povijest vaših razgovora za Grok na platformi X."),
                o("cea71014", "Učitavamo vaše kontakte..."),
                o("b5474bd2", "Hmmm... pojavio se problem."),
                o("ab4b970a", "Upotrijebite aplikaciju X da biste se vratili i zatražili novu poruku e-pošte za provjeru autentičnosti."),
                o("j6d103b8", "Registrirajte se i otvorite račun za X. Od udarnih vijesti i zabave do sporta i politike – saznajte sve uz komentare uživo."),
                o("ca042c78", "Prijavite se na X"),
                o("ff869362", "Prijavite se na X da biste vidjeli novosti. Pridružite se razgovorima, počnite pratite račune, pogledajte svoju vremensku crtu na naslovnici i pročitajte objave koje su nedavno objavile osobe koje poznajete."),
                o("f4a654a4", "Prikaži na servisu Foursquare"),
                o("c09de2d4", "Pretraživanje vremenske crte"),
                o("i1801686", "Taj upit za pretraživanje nije valjan. Isprobajte neki drugi."),
                o("a0b4541c", "Došlo je do pogreške – ali ne brinite, niste vi krivi."),
                o("d7eebb60", "Postavljanje pretplate"),
                o("a452ab68", "To bi moglo potrajati nekoliko sekundi."),
                o("b3bad3b2", "@premium"),
                o("accbcc78", "Uspješno ažurirano"),
                o("e957c20e", "Besplatno probno razdoblje s potpunim pristupom"),
                o("a1436e70", "Sada možete dodati poslove u svoj profil, što će ih učiniti vidljivima vašoj mreži. Nakon što se vaša prijava odobri, milijuni korisnika će moći pronaći vaše poslove u pretraživanju poslova."),
                o("f9c85cec", "Potrebno je poduzeti radnju: prenesite i potvrdite dokumente"),
                o("f178f393", function (a) {
                    return "Pošaljite potrebne dokumente do " + a.date + ". To obično traje oko 10 minuta.";
                }),
                o("f9fbeabc", "Dokumenti o osnivanju vaše organizacije"),
                o("b4c80f5c", "Osobna iskaznica"),
                o("f0915094", "Fotoaparat uređaja koji radi"),
                o("f259d3f3", function (a) {
                    return "Važno: potrebno je prenijeti dokumente do " + a.date + ", u suprotnom će vaš zahtjev biti odbijen bez povrata novca.";
                }),
                o("d35f645b", function (a) {
                    return "Otvoreno (" + a.count + ")";
                }),
                o("bf534b31", function (a) {
                    return "Istaknuto (" + a.count + ")";
                }),
                o("c35aded2", "Arhivirano"),
                o("b97e952a", "Čini se da još niste dodali nijedan posao."),
                o("cf1fa156", "Čini se da još niste istaknuli nijedan posao."),
                o("fa4a4f50", "Čini se da još niste arhivirali nijedan posao."),
                o("c5fb5a1a", "Nema poslova"),
                o("e9b91cde", "Dodajte posao"),
                o("c270ef3e", "Arhiviraj"),
                o("fe8872f4", "Uspjelo je"),
                o("d523cd74", "Želite li arhivirati taj posao?"),
                o("jfd0b34a", "Ako ga arhivirate, posao se uklanja s vašeg profila."),
                o("e2247e08", "Sustav za praćenje kandidata (ATS)"),
                o("b737c0b5", function (a) {
                    return "" + a.ats;
                }),
                o("e0ce628e", "Prilikom slanja pozivnice došlo je do problema. Pokušajte ponovno kasnije."),
                o("ddf35536", "Pojavio se problem s brisanjem pozivnice. Pokušajte ponovno poslije."),
                o("db7144b6", "Pojavio se problem prilikom promjene vrste povezanosti. Pokušajte ponovno poslije."),
                o("be78e5fa", "Pojavio se problem prilikom uklanjanja povezanog računa. Pokušajte ponovno poslije."),
                o("fa9709ba", "Došlo je do problema prilikom izrade zahtjeva. Pokušajte ponovno kasnije."),
                o("j62f13fc", "Došlo je do problema prilikom ažuriranja posla. Pokušajte ponovno kasnije."),
                o("ff5716fc", "Došlo je do problema prilikom izrade posla. Pokušajte ponovno kasnije."),
                o("fd059188", "Došlo je do problema prilikom sinkronizacije poslova. Pokušajte ponovno kasnije."),
                o("b82b5c00", "Nešto je pošlo po krivu tijekom aktivacije kredita za oglase. Pokušajte ponovno kasnije."),
                o("d74adc30", "Dodan je pogrešan račun za oglase"),
                o("e4323c36", "ID računa za oglase koji ste unijeli ne odgovara vašoj organizaciji ili s njom povezanim računima."),
                o("b3323ada", "Dodajte kreditnu karticu svome računu na ads.twitter.com"),
                o("ac325eb8", "Kako biste aktivirali kredit za oglase, morate računu za oglase na ads.twitter.com dodati kreditnu karticu."),
                o("j4e6e966", "Traži se pregled računa za oglase"),
                o("ef86e7f6", "Vaš račun označen je za pregled i zahtijeva odobrenje."),
                o("c9c8edae", "Za primjenu kredita za oglase pretplatite se na Provjerene organizacije"),
                o("b36c6278", "Našim kreditom za oglašavanje mogu se služiti samo korisnici s plaćenom pretplatom na Provjerene organizacije. Nadogradite odmah kako biste oglašavali putem povezanih računa."),
                o("c30f0168", "Otvori vanjsku vezu"),
                o("c49b7262", "Izdvoji posao"),
                o("i6ecf71a", "Poništi izdvajanje posla"),
                o("a37ef120", "Ponovno otvori posao"),
                o("i00355d0", "Poništi dijeljenje"),
                o("h0481bba", "Želite li poništiti dijeljenje tog posla?"),
                o("b9dfdc7a", "Poništavanje dijeljenja uklonit će posao iz vaših pojedinosti."),
                o("h4847fa2", function (a) {
                    return "" + a.userName;
                }),
                o("e46cd68e", "Poslovi koje ste podijelili"),
                o("ea7f1a42", "Vaši poslovi"),
                o("d1cbcb90", "Izvor"),
                o("gf66326c", "Posljednji put ažurirano"),
                o("b917fc28", "Promoviranje posla onemogućeno je"),
                o("g06035e6", "Vašem je računu za oglašavanje potrebno posvetiti pozornost kako biste omogućili promoviranje posla."),
                o("aa16581c", "Nemate pristup računu za oglašavanje promoviranja posla. Zatražite pomoć od administratora računa."),
                o("g7bb6f58", "Nije pronađen nijedan račun za oglašavanje."),
                o("jf1576ba", "Slanje nije uspjelo"),
                o("ff985a36", "Sinkronizacija u tijeku"),
                o("e5b8058c", "Nije sinkronizirano"),
                o("a86e335a", "Posljednja sinkronizacija "),
                o("c9838d68", "Poslovi koje ste dodali još nisu vidljivi"),
                o("df6835a6", "Omogućite poslove na svom profilu da biste istaknuli izdvojene poslove iznad objava i omogućili vezu na popis svih otvorenih radnih mjesta."),
                o("fc504ea0", "Počni prikazivati moje poslove"),
                o("a511934e", "Započnite zapošljavati putem X-a"),
                o("e68d2d16", "Prijavi se za beta-verziju"),
                o("f7a37e30", "Ako kliknete „Prijavi se za beta-verziju”, pristajete na to da se nakon odobrenja pristupa beta-verziji s vama stupi u kontakt putem e-pošte, odnosno putem poslovne adrese e-pošte povezane s ovim računom."),
                o("bfef82f0", "Zapošljavanje platforme X besplatna je značajka za provjerene organizacije koja im omogućuje objavu poslova, isticanje poslova na profilu tvrtke i privlačenje vrhunskih talenata za otvorena radna mjesta."),
                o("h4b890c2", "Zapošljavanje platforme X omogućuje vam da objavljujete poslove, istaknete ih na svom profilu i privučete najveće talente za otvorena radna mjesta."),
                o("c3f28126", "Doprite do ogromne ciljne skupine"),
                o("dec1601e", "X ima više od 528 milijuna korisnika. Od programskih inženjera do maloprodajnih trgovaca i vozača viljuškara, vaš se sljedeći zaposlenik nalazi ovdje."),
                o("be8393da", "Istaknite najvažnija radna mjesta"),
                o("i8c856ce", "Istaknite najviše tri posla na svom profilu. Svi korisnici vidjet će ta radna mjesta kada budu pregledavali vaš profil."),
                o("d8bc6eea", "Dodajte najviše pet poslova koji će se prikazivati u odjeljku Istaknuti poslovi na profilu vaše tvrtke. Svi korisnici vidjet će ta istaknuta radna mjesta kada pregledavaju profil vaše tvrtke."),
                o("a049efd4", "Brzo uvezite poslove"),
                o("d12be15a", "Povežite podržani sustav za praćenje kandidata ili XML sažetak sadržaja da biste svoje poslove dodali na X u nekoliko minuta."),
                o("d248d75e", "Zatražite podršku"),
                o("c49d8e42", "Trebate pomoć? Obratite nam se"),
                o("ib244b2e", "Kopiraj adresu e-pošte"),
                o("b450472c", "Uvezite poslove"),
                o("b36022d1", "xhiringsupport@x.com"),
                o("aeac3eb4", "Osvježi poslove"),
                o("aa4c37cc", "Prikaži poslove na mom profilu"),
                o("d4b82638", "Istaknite poslove na svom profilu"),
                o("e405b1c2", "Omogućite poslove na svom profilu da biste generirali veći broj kandidata za ključne uloge i dopustili im da vide sva vaša otvorena radna mjesta."),
                o("a85cda86", "Dodajte poslove da biste započeli"),
                o("c04b6472", "Uvezite ili dodajte poslove u nekoliko jednostavnih koraka da biste ostvarili veći broj kandidata. Poslove također možete podijeliti s pratiteljima i istaknuti ih na profilu tvrtke."),
                o("d14c02d0", "Ručno dodajte poslove"),
                o("b12424fc", "Novi posao"),
                o("ca8df1e2", "Izradite posao i dodajte ga na popis poslova. Svaki posao mora imati URL za prijavu putem kojeg kandidati mogu vidjeti više informacija o radnom mjestu i prijaviti se."),
                o("f4f4dd60", "Obavezno"),
                o("b2c213e0", "Prekoračen je broj znakova"),
                o("d84e9c2a", "Podijelite radnu obvezu koja se očekuje za to radno mjesto."),
                o("bc8b300c", "Funkcija na radnom mjestu"),
                o("d1eedb50", "Pružite kandidatima informacije o području obuhvaćenom ovim radnim mjestom."),
                o("eaf3ce64", "Tim"),
                o("b36cd50e", "Navedite glavni tim s kojim će kandidat surađivati nakon zapošljavanja."),
                o("d3a427ce", "Odaberite potrebnu razinu iskustva."),
                o("i7174442", "Opis posla"),
                o("fef0cf02", "Navedite detaljan opis posla. Istaknite ključne odgovornosti i kvalifikacije kako bi kandidati jasno razumjeli pojedinosti o radnom mjestu."),
                o("b7800bec", "Navedite ključne informacije o poslu u najviše 200 znakova. Taj će se opis prikazivati u objavama, preporukama i pretraživanju."),
                o("a5244ece", "URL za prijavu (obavezno)"),
                o("g2b553f6", "Unesite javni URL putem kojeg kandidati mogu slati prijave za taj posao."),
                o("c2e77608", "Naziv radnog mjesta (obavezno)"),
                o("cdf414d4", "Upotrebljava se za pretraživanje i preporuke. Pokušajte se služiti standardnim nazivima posla u industriji kako biste poboljšali rezultate."),
                o("cc59319a", "Upotrijebite standardne nazive radnih mjesta koji se upotrebljavaju u industriji i koje će većina kandidata prepoznati."),
                o("e7117ee4", "Lokacija (obavezno)"),
                o("c05176ec", "Ako je radno mjesto na lokaciji, unesite lokaciju (ili lokacije). Ako je riječ o radu na daljinu, opišite gdje se sve kandidati mogu nalaziti."),
                o("d70c24d4", "Upotrebljava se kako bi kandidati jednostavnije pretraživali vaš posao."),
                o("de1c4376", "Visina plaće"),
                o("hf352d42", "Dodajte opcionalan raspon plaće koji će biti vidljiv kandidatima. Ako odlučite da ga ne želite dodati, provjerite pridržavate li se svih zakona o transparentnosti plaća na lokaciji u kojoj zapošljavate."),
                o("ede7d0a2", "Valuta"),
                o("b925c18c", "Vrsta plaće"),
                o("j3d242ce", "Raspon nije valjan"),
                o("f4d07bd2", "Uključite neobavezne podatke kako biste kandidatima olakšali otkrivanje vaših radnih mjesta putem pretraživanja."),
                o("b8cbb51a", "Sažetak posla"),
                o("bda6881e", "Taj je posao uvezen iz vašeg sustava za praćenje kandidata (ATS). Imajte na umu da se samo određena polja mogu izmijeniti."),
                o("b075c68a", "Uredi posao"),
                o("d4b6a6e0", "Pojedinosti o profilu"),
                o("j2dd3686", "Istakni izdvojene poslove iznad mojih objava."),
                o("af1cfd46", "Integracija ATS-a"),
                o("d6fa2944", "Brisanjem integracije neće se izbrisati uvezeni poslovi."),
                o("h99f11fa", "Izbriši integraciju"),
                o("eef1ae76", "Trenutačno povezano"),
                o("a915f5c1", function (a) {
                    return a.ats + " – povezano";
                }),
                o("af7286b7", function (a) {
                    return a.percentage + " % popusta na godinu dana pretplate na Premium";
                }),
                o("c924ad84", "Neka se videozapisi nastave reproducirati"),
                o("de750a3c", "Uživajte u njima čak i kad je vaš telefon zaključan"),
                o("he5e87c4", "Istaknite svoje odgovore"),
                o("g64a60ba", "Ostvarite mali prioritet kada odgovarate na objave"),
                o("a7ee832a", "Ispravite pravopisne i druge pogreške u roku od najviše 60 minuta"),
                o("fdd77a34", "Pišite dulje objave"),
                o("j6d26a7a", "Pišite onoliko koliko želite podijeliti"),
                o("c4fd68da", "Prilagodba sučelja"),
                o("c0195168", "Promijenite ikonu aplikacije i opcije navigacije");
            o("b6b5dc94", "Provjerite svoju autentičnost"),
                o("b06db848", "Istaknite se među ostalima na platformi"),
                o("e3e3a97c", "Zarađujte udio u prihodu od objava"),
                o("f15bc24e", "Povećana ograničenja značajke Grok"),
                o("c4666e1c", "Veće mogućnosti upotrebe značajke Grok 3, našeg najnovijeg modela"),
                o("he74ae7a", "Najveća ograničenja upotrebe značajke Grok"),
                o("f5732cd4", "Plus, proširen pristup značajkama DeepSearch i Razmišljanje"),
                o("e0198956", "Ostvarite udio u prihodu koji se generira kroz sudjelovanje provjerenih računa u sadržaju koji objavljujete na platformi X."),
                o("iadf78e2", "Preuzimanje videozapisa"),
                o("ee54c3de", "Spremite videozapise izravno na svoj uređaj"),
                o("ae03594c", "Malo isticanje odgovora"),
                o("e6bb08c0", "Povećajte vidljivost odgovora"),
                o("bf2a6acc", "Veliko isticanje odgovora"),
                o("c2059276", "Neka vaši odgovori budu istaknuti."),
                o("b023ec20", "Maksimalno isticanje odgovora"),
                o("g337328e", "Ostvarite najveću vidljivost svojih odgovora."),
                o("fa006202", "Pozadinska reprodukcija videozapisa"),
                o("jf389778", "Gledajte dok pregledavate ili upotrebljavate druge aplikacije"),
                o("f2977d80", "Mape s knjižnim oznakama"),
                o("j1d3d910", "Neka vaše spremljene objave budu organizirane kako biste im mogli jednostavno pristupiti"),
                o("f0f48668", "Premium podrška"),
                o("c3148608", "Brže dobijte pomoć kada vam je potrebna"),
                o("b485ca6e", "Kartica Istaknuto"),
                o("d438955e", "Istaknite najpopularnije objave"),
                o("f373a352", "Šifrirane izravne poruke"),
                o("g7405aca", "Sigurno razgovarajte uz sveobuhvatno šifriranje"),
                o("j659fa0c", "Najbolje od značajke Grok 3"),
                o("ibff5694", "Otključajte najveća ograničenja upotrebe, DeepSearch i Razmišljanje, plus rani pristup novim značajkama"),
                o("i824f4da", "Manje oglasa"),
                o("bd17076c", "Prikazivat će vam se oko polovice oglasa na vremenskim crtama Za vas i Pratite."),
                o("cef2cac8", "Uživajte u iskustvu bez oglasa, uz povremeni brendirani sadržaj u manje čestim područjima."),
                o("c97920c0", "Izvanmrežni videozapisi"),
                o("i4379b18", "Spremite bilo koji videozapis za reprodukciju izvan mreže"),
                o("f94c6bae", "Kvačica provjerenog računa"),
                o("d72055d6", "Izgradite vjerodostojnost uz kvačicu provjerenog računa "),
                o("f54af178", "Pišite članke"),
                o("c5cd5d42", "Dijelite dugi sadržaj i uspostavite promišljeno vodstvo"),
                o("jbdb08cc", "Analizirajte mjerne podatke svog računa kako biste razumjeli performanse svog računa"),
                o("deaf7e0a", "Media Studio"),
                o("fd1a47b4", "Prenosite medijski sadržaj i upravljajte njime"),
                o("id067c96", "Pretraživanje značajke Radar"),
                o("jf991d48", "Budite korak ispred uz praćenje aktualnih tema u stvarnom vremenu"),
                o("c244210c", "X Pro"),
                o("a90f2e8a", "Moćan alat u stvarnom vremenu za osobe koje žive na platformi X. Pratite nekoliko vremenskih crta na jednom zaslonu (samo za web)"),
                o("b3e50ef2", "Stvaranje Zajednica"),
                o("bb1a4e44", "Stvorite vlastitu zajednicu"),
                o("j010228e", "Zaradite na udjelu u prihodu koji X zarađuje od najaktivnijih osoba koje vas prate i imaju mjesečne pretplate."),
                o("h0e1730e", "Prioritet odgovora"),
                o("jf7f743c", "Objavljivanje duljih videozapisa"),
                o("c0c25b6c", "Mape s knjižnim oznakama"),
                o("ab31c79e", "Prilagodba ikona aplikacija"),
                o("a8a702ae", "Prilagodba navigacije"),
                o("d5ab1b50", "Preuzmite značku provjerenog računa"),
                o("ac298984", "Veći prioritet odgovora"),
                o("g20df450", "Uklonite 50 % oglasa"),
                o("h8dfc4de", "Veća ograničenja upotrebe značajke Grok"),
                o("bf7614d4", "Pretplate autora sadržaja"),
                o("gadc9f4a", "Najveći prioritet odgovora"),
                o("c127c5c2", "Uklonite sve oglase"),
                o("c1e0f3c8", "Otključajte DeepSearch i Razmišljanje značajke Grok"),
                o("aac0bbb6", "Pristupite značajci Radar"),
                o("a6722922", "Oglasi su uklonjeni"),
                o("ba016532", "Isticanje odgovora"),
                o("a06f8a3e", "Grok 3"),
                o("b9e16610", "MAKS."),
                o("b1492c6c", "Najveće"),
                o("fb5e2c14", "Istaknite objave uz X Premium"),
                o("gd1f4cfa", "Istaknite svoje najbolje objave na profilu"),
                o("h59250bc", "Šifrirane poruke uz X Premium"),
                o("ed62d546", "Dulje objave uz X Premium"),
                o("ca447200", "Provjera autentičnosti putem SMS-a uz X Premium"),
                o("af2b99ea", "Uređujte objave uz X Premium"),
                o("ha265914", "Organizirajte knjižne oznake uz X Premium"),
                o("gda940ae", "Izradite Zajednicu uz X Premium"),
                o("c7e5ac54", "Vidite manji broj oglasa uz X Premium"),
                o("e03589ba", "Istaknite svoje objave uz X Premium"),
                o("f0f8c82a", "Pridružite se isključivo provjerenim razgovorima uz X Premium"),
                o("fecf5aaa", "Prenesite Full HD videozapis uz X Premium"),
                o("c00d2be2", "Uređujte videozapise uz X Premium"),
                o("cd360b86", "Pitajte Groka bilo što"),
                o("d2e1a7a2", "Dostupno uz X Premium"),
                o("e664abe2", "Videozapisi na platformi X. Maksimalno poboljšani."),
                o("e595a3e2", "Otključajte najbolje od videozapisa uz Premium"),
                o("i3c9329a", "Istaknite se s formatiranjem obogaćenog teksta"),
                o("cc9def68", "Samo uz X Premium"),
                o("hdef5966", "Preuzimanje videozapisa na svoj uređaj"),
                o("c748224a", "Otključajte uz Premium X"),
                o("ebfc88bc", "Pristupite ekskluzivnim značajkama"),
                o("f652e9ac", "Otključajte još više uz pretplatu Premium"),
                o("d67e94c0", "Propustit ćete sljedeće..."),
                o("j1d3098c", "Otključajte još više uz pretplatu Premium+"),
                o("gd573390", "I sve u pretplati Osnovno..."),
                o("ef94bbd4", "Nadogradite na Premium+"),
                o("dcd830ce", "I sve u pretplati Premium..."),
                o("b7dde622", "Sretan Dan zahvalnosti! Ponuda završava za:"),
                o("i0180ca1", function (a) {
                    return "Do " + a.date + ". Sretan Dan zahvalnosti!";
                }),
                o("hb9d0e00", "Naša ponuda za 2. godišnjicu, završava:"),
                o("d2b23e0d", function (a) {
                    return "Rođendan je pretplate Premium! Završava " + a.date + ".";
                }),
                o("bb4998fb", function (a) {
                    return "Do " + a.date;
                }),
                o("c0847ebc", "Sve nadogradnje osnovne pretplate plus..."),
                o("ed672bfa", "Sve nadogradnje osnovne i Premium pretplate plus..."),
                o("db63fa1c", "Odaberite Premium plan"),
                o("b128c6bc", "Preuzmite značku provjerenog računa i desetke drugih sjajnih povlastica i pogodnosti"),
                o("acfaf7a0", "Usporedba razina i značajki"),
                o("e1606e52", "Promijenite pretplatu"),
                o("d2f2b91a", "prijava se izvršava ovdje"),
                o("j4b4310e", "s"),
                o("af863ee9", "besplatnu probnu verziju"),
                o("f5705987", "Uvjete pružanja usluge za kupce"),
                o("h89dabac", "Možete otkazati u bilo kojem trenutku"),
                o("f36b8e14", "Nešto je pošlo po krivu prilikom dohvaćanja ovog proizvoda. Pokušajte ponovno učitati stranicu."),
                o("f1756574", "/ mjesečno"),
                o("i650ff14", "/ godišnje"),
                o("dbcd25db", function (a) {
                    return "prvih " + a.numberOfDays + " dana";
                }),
                o("bd40d5b5", function (a) {
                    return "Pretplatite se i platite za " + a.title;
                }),
                o("i36a0b6e", "Pretplatiti se možete samo putem aplikacije X za iOS (zasad).„"),
                o("c906ad94", "Smanji razinu"),
                o("db5c77e0", "Ovo je vaša aktivna pretplata"),
                o("h77ef73e", "Prebacite se na mjesečni plan"),
                o("d723d44a", "Prebacite se na godišnji plan"),
                o("i253b5c6", "Nadogradi i plati"),
                o("d2beeaaa", "Smanji razinu i plati"),
                o("acf719d4", "Prebaci se i plati"),
                o("ieafe1c6", "Potvrdite promjenu pretplate"),
                o("gf6b66b8", "Potvrdite promjenu pretplate koja stupa na snagu danas"),
                o("e83daf87", function (a) {
                    return "Potvrdite promjenu pretplate koja stupa na snagu " + a.date;
                }),
                o("f27022d6", "Trenutačna tarifa"),
                o("i9d5f4b6", "Nova tarifa"),
                o("ia390d8a", "Kako će smanjenje razine funkcionirati"),
                o("fd80b875", function (a) {
                    return "Vaš trenutačni plan ostaje aktivan do završetka vašeg ciklusa naplate. " + a.nextBillingDate + " prebacit ćete se na pretplatu " + a.newTierName + " i naplatit će vam se nova cijena.";
                }),
                o("c8fb177a", "Kako će se vaše plaćanje prilagoditi"),
                o("df776505", function (a) {
                    return "Nadograđujete pretplatu na " + a.newTierName + " s novom naplatom. Danas ćemo vam naplatiti novi plan, ali vaš preostali kredit smanjit će taj iznos. Prebacivanje stupa na snagu odmah, a vaša će se naplata prilagoditi u skladu s promjenom.";
                }),
                o("d7efb6ba", "Prebacujete se s mjesečne na godišnju naplatu. Danas će vam se naplatiti godišnji plan, a preostali mjesečni saldo proporcionalno će se preusmjeriti na ukupni iznos za naplatu. Promjena stupa na snagu odmah, a vaša će naplata odsad biti na godišnjoj razini."),
                o("a5f2cf70", "Prebacujete se s godišnje na mjesečnu naplatu. Vaš preostali godišnji kredit pokrivat će vaša mjesečna plaćanja sve dok se ne potroši. Prebacivanje stupa na snagu odmah, a vaša će naplata odsad biti na mjesečnoj razini."),
                o("ef1c0208", "Potvrdite promjenu plana"),
                o("c20806d5", "Uvjete pružanja usluge za kupce"),
                o("i10be4c9", "Uvjetima"),
                o("cdda96d6", "Otkažite u bilo kojem trenutku"),
                o("cc67158f", "Uvjete pružanja usluge za kupce"),
                o("eb420831", "Uvjetima"),
                o("c7d49608", "Otkažite u bilo kojem trenutku"),
                o("ab176bd1", "Uvjete pružanja usluge za kupce"),
                o("cea928a5", "Uvjetima"),
                o("e37c69e0", "Otkažite u bilo kojem trenutku"),
                o("ia08113f", "Uvjete pružanja usluge za kupce"),
                o("d2962b73", "Uvjetima"),
                o("b421795a", "Možete otkazati u bilo kojem trenutku"),
                o("f8d88ac7", "Uvjete pružanja usluge za kupce"),
                o("ca220fe9", "Uvjetima"),
                o("ab8beda0", "Možete ih otkazati u bilo kojem trenutku"),
                o("ife2636d", "Uvjete pružanja usluge za kupce"),
                o("fb57be65", "Uvjetima"),
                o("e468a6c2", "Možete otkazati u bilo kojem trenutku"),
                o("e9f4c89b", "Uvjete pružanja usluge za kupce"),
                o("hce73b41", "Uvjetima"),
                o("i4db5c92", "Možete otkazati u bilo kojem trenutku"),
                o("ae095fe8", "Umjetna inteligencija značajke Grok"),
                o("d4e60288", "Najveća ograničenja upotrebe"),
                o("abaa4274", "Otključajte DeepSearch i Razmišljanje"),
                o("e0d53864", "Rani pristup novim značajkama"),
                o("g1be3530", "BESPLATNO PROBNO RAZDOBLJE"),
                o("b10b4f1f", function (a) {
                    return "UŠTEDITE " + a.percentOff + " % PRIJE " + a.date;
                }),
                o("b8d0bd19", function (a) {
                    return "Besplatno isprobajte " + a.productName;
                }),
                o("f89dfa74", "Najbolja vrijednost"),
                o("b9a4d8c6", "Godišnje"),
                o("f5fb58b4", "Plus sve značajke pretplate X Premium"),
                o("i527045e", "Kvačica, više od značajke Grok, isticanje odgovora, analitika i još puno toga"),
                o("ga482a88", "Godišnji plan"),
                o("hc64d5b0", "Mjesečni plan"),
                o("de7db957", function (a) {
                    return a.price + " godišnje, naplaćuje se jednom godišnje";
                }),
                o("d8982437", function (a) {
                    return a.price + " godišnje, naplaćuje se jednom mjesečno";
                }),
                o("f0ad5cc8", "godišnje"),
                o("a0dc6e4c", "Trenutačno nedostupno"),
                o("jd8b2e66", "Pretplati se i plati"),
                o("aa5df29f", function (a) {
                    return "" + a.oldPrice;
                }),
                o("g1c4f7a1", function (a) {
                    return "" + a.oldPrice;
                }),
                o("i7fbacc4", "Prebacujte između dostupnih razina pretplate"),
                o("c9cc122b", function (a) {
                    return "Značajka " + a.feature + " uključena je u " + a.title;
                }),
                o("bff35771", function (a) {
                    return "Značajka " + a.feature + " nije dostupna za " + a.title;
                }),
                o("a69fd369", function (a) {
                    return "Počevši od " + a.price;
                }),
                o("e563a5d1", function (a) {
                    return "Pretplatite se za " + a.percentage + " % popusta (ograničeno vrijeme)";
                }),
                o("dfc5f972", "I još puno toga..."),
                o("fb8453c8", "Otključajte zahtjeve za DeepSearch i Think"),
                o("e45b3f30", "Otključajte zahtjeve za Istraživanje i Rasuđivanje"),
                o("aaebdc2e", "Izuzetno povećan pristup značajkama Grok 3 mini i Grok 3"),
                o("ddf8a412", "Pristupite novim značajkama prije drugih korisnika"),
                o("gfb04ef4", "Sve značajke Premium+ na platformi X"),
                o("b601cfbb", function (a) {
                    return "Isprobajte za " + a.price + " mjesečno";
                }),
                o("i3e90e20", "Trenutno nedostupno"),
                o("d9e9ce26", "Pretplatite se i platite:"),
                o("j1f5a580", "Pojavio se problem prilikom provjere vaše pretplate na Premium. Provjerite podatke o plaćanju i pokušajte ponovno."),
                o("ebc84442", "Registriranje pretplate na Premium"),
                o("cd9102d4", "Odabir kategorije"),
                o("eb551aea", "Prikaz kategorije na profilu"),
                o("f386777a", "Promijeni vrstu računa"),
                o("db483090", "Prešli ste na osobni račun"),
                o("c701200c", "Prešli ste na poslovni račun"),
                o("acd8da0a", "Prešli ste na račun autora sadržaja"),
                o("cb55ecce", "Prijeđi na osobni račun"),
                o("h4aeb984", "Prijeđi na osobni račun"),
                o("ada6073a", "Ne trebaju vam profesionalni alati?"),
                o("eb723d4c", "Osobni računi nemaju alate kao što su pojedinosti profila ili upravitelj kupnje. Ako želite natrag, morat ćete postaviti novi profesionalni račun."),
                o("hbb1af08", "Prijeđi na poslovni račun"),
                o("a9b5e3aa", "Ne, odustani"),
                o("ia49207a", "Da, prijeđi"),
                o("g3f74902", "Želite prijeći na poslovni račun?"),
                o("f3bcfac0", "Najprikladnije za robne marke, maloprodajne trgovine, davatelje usluga i tvrtke."),
                o("d0c3f02e", "Prijeđi na račun autora sadržaja"),
                o("a01e84e0", "Želite prijeći na račun autora sadržaja?"),
                o("e8af8ef4", "Prikladno za javne osobe, umjetnike i influensere."),
                o("e44eab74", "Trenutačno nisu svi moduli podržani na svim klijentima za X"),
                o("ce4185bc", "Više pojedinosti uskoro"),
                o("b5aed332", "Nema dostupnih pojedinosti "),
                o("g419ecf4", "Ostani na stranici"),
                o("d3a097a2", "Da, odbaci"),
                o("j1e1cd30", "Želite li odbaciti promjene?"),
                o("fc779c28", "Istakni pojedinosti"),
                o("ie85a7a8", "Želite li izbrisati podatke o tvrtki?"),
                o("b5348efc", "Bez radnog vremena"),
                o("db285564", "Uvijek otvoreno"),
                o("g7993eee", "Posebno radno vrijeme"),
                o("c9ee902a", "Prikaži kartu"),
                o("j224a074", "Ako uključite podatke o lokaciji, sve pojedinosti o lokaciji bit će javno dostupne. Telefonskom broju i adresi e-pošte može se pristupiti putem gumba za kontakt."),
                o("f448cbcc", "Neobavezno"),
                o("c16c9568", "Adresa"),
                o("i3a38711", "uvjete pružanja usluge za Google karte"),
                o("beb66f50", "Googleova pravila o privatnosti"),
                o("e0d47030", "Gdje vas korisnici mogu pronaći? Imajte na umu da će ti podaci biti javno objavljeni da bi korisnici mogli doći do vas. Uvijek ih možete ukloniti."),
                o("c7a4adb0", "Dodajte adresu"),
                o("cd39daf6", "Poštanski broj"),
                o("gc0df5a6", "Dodajte poštanski broj"),
                o("c6c16a52", "Grad"),
                o("aa8015be", "Dodajte grad"),
                o("b688f53a", "Savezna država / pokrajina / regija"),
                o("a67f5bbc", "Dodajte saveznu državu / pokrajinu / regiju"),
                o("if92b1b4", "Dodajte državu"),
                o("ffc5590e", "Grad nije valjan"),
                o("a8fd64d8", "Potražite države"),
                o("a0abe108", "Savezna država / pokrajina / regija nije valjana"),
                o("j163df8e", "Adresa nije valjana"),
                o("af9b9b78", "Poštanski broj nije valjan"),
                o("i373e022", "Unesite adresu e-pošte"),
                o("f91751f8", "To će biti javno vidljivo"),
                o("g33c0564", "Adresa e-pošte nije valjana"),
                o("ga71fbf4", "Radno vrijeme"),
                o("ca2ba204", "Uredite posebno radno vrijeme"),
                o("d7b7dbca", "Na vašem se profilu neće prikazati radno vrijeme"),
                o("a460e770", "npr. parkovi, plaže, internetske trgovine"),
                o("ddc88bf0", "Za svaki dan postavite posebno radno vrijeme"),
                o("j11df0ca", "Vrijeme se preklapa"),
                o("f9f911f4", "Pretražite vremenske zone"),
                o("d21a4252", "Unesite dodatno radno vrijeme"),
                o("ac6ce1c0", "Od"),
                o("c647aac8", "Do"),
                o("b926e64a", "Unesite web-mjesto"),
                o("i019c8b6", "Poziv"),
                o("eabc6906", "SMS"),
                o("h24d868c", "Pozivi i SMS"),
                o("fa64f1fc", "Odaberite pozivni broj za državu"),
                o("c7d3629a", "Telefonski broj"),
                o("ce48a958", "Na koji način s vama možemo stupiti u kontakt?"),
                o("b97705ce", "Imajte na umu da će taj telefonski broj biti javno objavljen da bi korisnici mogli doći do vas. Uvijek ga možete ukloniti."),
                o("f7ff19ec", "Dodajte šifru države"),
                o("bb7f177a", "Telefonski broj nije valjan"),
                o("b91d1394", "Dodajte aplikaciju"),
                o("d3cd1160", "Dodavanje aplikacija za iOS"),
                o("f2124008", "URL na App Store"),
                o("dc0d9d6a", "Dodavanje aplikacija za Android"),
                o("dd1605f0", "URL na Play Store"),
                o("g4098f78", "Gdje pronaći?"),
                o("b949cdc6", "Ukloni aplikaciju"),
                o("b4b8a486", "Odabir zajednice"),
                o("jfe04cf6", "Želite izbrisati odabir?"),
                o("a14aa8dc", "Time ćete tu Zajednicu izbrisati iz svojih pojedinosti."),
                o("cc4add98", "Odaberite neku Zajednicu da biste vidjeli kako izgleda na stranici s profilom"),
                o("jd3e9ea6", "Nemate nijednu Zajednicu"),
                o("daad9741", "stvoriti svoju Zajednicu"),
                o("c46cdabc", "Napredni alati"),
                o("f6a2233a", "Upravljajte dozvolama za različite račune"),
                o("ccb3ca48", "Postavke za poslovne korisnike"),
                o("b0ef3100", "Stvarajte obogaćene marketinške kampanje"),
                o("ff1c5e1a", "Platforma za profesionalne korisnike"),
                o("f53adc36", "Upravljajte ishodima u stvarnom svijetu"),
                o("hc4981d6", "Pojedinosti o profilu"),
                o("fbce8dbe", "Pronađite osobe koje biste mogli pratiti"),
                o("ae76c624", "Uspostavite više veza"),
                o("ae0383d4", "Povećajte sudjelovanje i doprite do većeg broja ljudi"),
                o("a1dbe746", "Potaknite sudjelovanje i doprite do većeg broja ljudi"),
                o("hbd124ae", "Istaknite objavu"),
                o("hd80bd3e", "Promovirajte objavu"),
                o("fe2b0008", "Saznajte kako upotrebljavati X"),
                o("h257d4aa", "Odaberite objavu za promoviranje"),
                o("d28a1d72", "Prvi uočite trendove pomoću značajke Radar"),
                o("fb70427a", "Uvodimo najmoćniji alat za pretraživanje na platformi X."),
                o("i54bf620", "Pratite ključne riječi"),
                o("e8bb09bc", "Pronađite bilo koju temu pomoću naprednog pretraživanja."),
                o("d4c9d5aa", "Vizualizirajte aktualne teme"),
                o("e78263fe", "Pratite razgovore uz grafikone dnevnih aktivnosti za posljednja 3 dana."),
                o("e3ed8220", "Mjerni podaci u stvarnom vremenu"),
                o("f4952956", "Dobivajte trenutačnu statistiku za broj objava putem upita."),
                o("cce3f116", "Objava je dodana u knjižne oznake"),
                o("b593b396", "Objava je uklonjena iz knjižnih oznaka"),
                o("af9c8a3e", "Otvori aplikaciju"),
                o("ef483238", "Stranica sa statusom objave"),
                o("jcf3ff56", "Veliki tekst"),
                o("f1252ac8", "Srednji tekst"),
                o("daa0da04", "Mali tekst"),
                o("ba5256b2", "Veličina teksta"),
                o("h030c24c", "Prijava problema"),
                o("b12ffee6", "Zabrani pristup Zajednici"),
                o("e37836f8", "Podaci o prijavi"),
                o("fb35e52a", "Prikaži pravilo"),
                o("e238c590", "Što dalje"),
                o("if218e60", "Vašu će prijavu pregledati naš tim. Ako utvrdimo da je prekršeno neko pravilo, obavijestit ćemo vas o mjerama koje ćemo poduzeti."),
                o("b6dc1984", "Opis našeg postupka"),
                o("b0a16894", "Bitan je kontekst. Prilikom primjene naših pravila razmatramo sljedeće čimbenike (popis nije potpun):"),
                o("d4716820", "Jesu li na udaru sadržaja koji prijavljujete osobe zbog svog identiteta?"),
                o("e899a534", "Koliko je težak taj prekršaj?"),
                o("d9c4e7ae", "Je li prijavu poslala ciljana osoba?"),
                o("afb51066", "Istu prijavu nije potrebno slati više puta jer se time ne ubrzava postupak."),
                o("b7ba712a", "Utvrđeno je kršenje pravila"),
                o("d90b8c04", "Nije utvrđeno kršenje pravila"),
                o("c2d0494a", "Naše sigurnosne preporuke"),
                o("be46e000", "Prijavi duplikate"),
                o("e846ae32", "Čak i ako je sadržaj izbrisan, netko ga je mogao kopirati ili snimiti isječak zaslona. Ako ga vidite na platformi X, prijavite ga da bismo ga mogli ukloniti."),
                o("e3647d08", "Obratite se policiji"),
                o("gad89c4a", "Ako mislite da ste u opasnosti, obratite se lokalnoj policiji. U slučaju nejasnoća dostupne su naše smjernice za policiju. "),
                o("h7fa9240", "SAD:"),
                o("fb2ff552", "Nacionalni centar za prevenciju samoubojstava, 988."),
                o("bb57e8c0", "Ostale države i regije:"),
                o("b9ce59ba", "Još jednom hvala što ste nas upozorili na tu situaciju."),
                o("d42899ad", "Međunarodno udruženje za prevenciju samoubojstava."),
                o("c9853de0", "Sadržaj je skriven"),
                o("c197728e", "Riješeno"),
                o("f4422d78", "Prijave"),
                o("i07c24fa", "Nema otvorenih prijava"),
                o("h542c98a", "Detaljniji prikaz"),
                o("e6e11d12", "Nema pregledanih prijava"),
                o("ibf33bae", "Prijavite duplikate da bismo ih mogli ukloniti"),
                o("a288ca36", "smjernice za policiju"),
                o("a62c9c34", "Pratite svoje interese."),
                o("cf39fca2", "Poslušajte o čemu drugi razgovaraju."),
                o("j86184fe", "Pridružite se razgovoru."),
                o("ac2035f2", "Pridružite se danas."),
                o("h0af9418", "Stvaranje računa"),
                o("eba1b198", "Aktualno"),
                o("fa811c30", "Već imate račun?"),
                o("b4bdfb3e", "Preuzmite aplikaciju Grok"),
                o("f991cfaa", "Preuzmite Grok"),
                o("a4298bc0", "X. U središtu zbivanja."),
                o("j3f49ff6", "Od udarnih vijesti i zabave do sporta i politike – saznajte cijelu priču uz sve komentare uživo."),
                o("d65555c2", "ILI"),
                o("e75df5c9", function (a) {
                    return a.query + " – pretraživanje";
                }),
                o("ac4fb0f4", "Fotografije"),
                o("aea62568", "Pretraživanje filtara"),
                o("gfcfbf8c", "Pretraživanje je spremljeno."),
                o("a4645d92", "Spremljeno je pretraživanje izbrisano."),
                o("b11805af", function (a) {
                    return "Pogledajte objave o temi " + a.query + " na platformi X. Pogledajte o čemu se priča i uključite se u razgovor.";
                }),
                o("d610e8c3", function (a) {
                    return "Najnovije objave o temi " + a.query + ". Pročitajte o čemu se priča i uključite se u razgovor.";
                }),
                o("j622effe", "Napredno pretraživanje"),
                o("i5045e74", "Bilo gdje"),
                o("h2388754", "U blizini"),
                o("a0cf4306", "Sažetak značajke Grok"),
                o("f97f7b46", "Sakrij sažetak Groka"),
                o("f9d35b98", "Možete imati samo 25 spremljenih pretraživanja. Da biste spremili novo pretraživanje, izbrišite neko staro."),
                o("ha925ad4", "Došlo je do pogreške. Za koju minutu to pretraživanje pokušajte spremiti."),
                o("h0a9931c", "Došlo je do pogreške. Za koju minutu to pretraživanje pokušajte izbrisati."),
                o("h4912b5e", "Spremi pretraživanje"),
                o("b9bc69ca", "Izbriši spremljeno pretraživanje"),
                o("eb63de70", "X – napredno pretraživanje"),
                o("d3938be8", "Riječi"),
                o("e0dded5e", "Sudjelovanje"),
                o("a097f7ba", "Datumi"),
                o("c03f15ca", "Bilo koji jezik"),
                o("cb334136", "Poveznice"),
                o("jf1cbcc2", "Uključi objave s poveznicama"),
                o("gede6f6e", "Prikaži samo objave s poveznicama"),
                o("bda44dd4", "Obuhvaća odgovore i izvorne objave"),
                o("ab870904", "Prikaži samo odgovore"),
                o("b6215680", "Sve riječi"),
                o("cceffa5e", "Primjer: što se događa · sadrži izraz „što” i „događa”"),
                o("f1c5faee", "Točno ovaj izraz"),
                o("ad10780e", "Primjer: happy hour · sadrži potpuni izraz „happy hour”"),
                o("a555a3f4", "Bilo koja od ovih riječi"),
                o("ee8a2b60", "Primjer: mačke psi · sadrži izraz „mačke” ili „psi” (ili oba)"),
                o("f51fe348", "Nijedna od ovih riječi"),
                o("hb657ad4", "Primjer: mačke psi · ne sadrži izraz „mačke” ni „psi”"),
                o("d10da5da", "Ovi znakovi ljestvi"),
                o("f0b52b50", "Primjer: #ThrowbackThursday · sadrži znak ljestvi #ThrowbackThursday"),
                o("e292598a", "Sa sljedećih računa"),
                o("hef790d8", "Primjer: @X · poslano s računa @X"),
                o("g2c27394", "Sljedećim računima"),
                o("d158d9d0", "Primjer: @X · poslao/la je odgovor korisniku/ci @X"),
                o("a10e3230", "Spominje sljedeće račune"),
                o("daaf2c72", "Primjer: @SFBART @Caltrain ·spominje @SFBART ili @Caltrain"),
                o("b18366ba", "Minimalni broj odgovora"),
                o("f481ba1c", "Primjer: 280 · objave s najmanje 280 odgovora"),
                o("ib3ddbd4", "Minimalni broj oznaka „sviđa mi se”"),
                o("ef994dac", "Primjer: 280 · objave s najmanje 280 oznaka „sviđa mi se”"),
                o("a504ca74", "Minimalan broj proslijeđenih objava"),
                o("jd9bd944", "Primjer: 280 · objave s najmanje 280 proslijeđenih objava"),
                o("e95b9448", "Općenito"),
                o("f458a3b2", "Zaštita privatnosti"),
                o("bdc6f5b8", "Vaš račun"),
                o("ea848de8", "Postavke za EarlyX"),
                o("df483b48", "Promjene značajki"),
                o("bd05add8", "Nisam bot"),
                o("d94f12b6", "Pokušajte pretražiti obavijesti, pravila o privatnosti itd."),
                o("ba8f6f82", "Pretražite postavke"),
                o("g931a6e5", function (a) {
                    return "Pratite temu " + a.topic;
                }),
                o("h3f9027a", "Objave o toj temi vidjet ćete na vremenskoj crti naslovnice. Ta vam tema omogućuje personalizaciju sučelja na platformi X."),
                o("e241095e", "Vaše teme"),
                o("f8bc75e2", "Teme"),
                o("ed827af6", "Tema nije dostupna."),
                o("d094c720", "Sve teme"),
                o("g3e87c61", function (a) {
                    return a.topicName + " | Teme";
                }),
                o("g02269ba", "Pratite teme na platformi X. Teme vam omogućuju da vidite najpopularnije objave niza računa koji pripadaju stručnjacima ili samo poklonicima kad su u pitanju različite teme na platformi X."),
                o("e80d2509", function (a) {
                    return "Pratite temu " + a.topicName + " na platformi X. Vidjet ćete najpopularnije objave niza računa koji pripadaju stručnjacima, poklonicima ili osobama koje samo vole razgovarati kad je u pitanju " + a.topicName + " na platformi X.";
                }),
                o("e44b4256", "Povijest priče"),
                o("a74af3f8", "Nije pronađena povijest za tu priču."),
                o("c3077694", "Objave u vezi s aktualnom temom"),
                o("a9042b6c", "Povijest aktualne teme"),
                o("ed54bc32", "Prijava aktualne teme"),
                o("f89bcc50", "Aktualna je tema prijavljena"),
                o("gde7b6b0", "Poništi spremanje"),
                o("i6212670", "Učitavanje aktualne teme"),
                o("c6a07c10", "Vremenska crta aktualne teme"),
                o("b0c91a92", "Prijavite se ili registrirajte da biste vidjeli mišljenja korisnika na platformi X o toj temi"),
                o("d7071084", "Gorkajte ovo"),
                o("ee2200f4", "Ova priča sažetak je objava na platformi X koje je napravio grok. Priča će se razvijati s vremenom."),
                o("dd225af8", "Nije pronađena nijedna osoba."),
                o("e1e5d552", "Uredite svoj krug"),
                o("ec13f9cc", "U vašem Krugu još nema nijedne osobe"),
                o("dab58e32", "Kada dodate korisnike, pojavit će se ovdje."),
                o("f43112a4", "Način rada"),
                o("a4d60c94", "Dogodila se pogreška. Trenutačno ih ne možemo dodati u vaš Krug."),
                o("a1ba3bd8", "Vaš Krug je pun. Dosegnuli ste maksimalan broj od 150 ljudi u Krugu."),
                o("ac3fd6e2", "Još nemate preporuka"),
                o("eeb4d3f0", "Ovdje ćemo predložiti osobe koje možete dodati u svoj Krug."),
                o("aea3c420", "Još nema citiranja"),
                o("b40a22c0", "Dodajte svoju perspektivu kad dijelite objavu drugog korisnika i to će se prikazati ovdje."),
                o("f08d8d08", "Istaknite objave koje vam se sviđaju"),
                o("f0ccff52", "Na svojoj vremenskoj crti podijelite nečiju objavu tako da je proslijedite. Kada to učinite, pojavit će se ovdje."),
                o("fc1acb54", "Još nema oznaka „sviđa mi se”"),
                o("e3527230", "Kada netko (čak i vi) dodirne znak srca da bi tu objavu označio oznakom „sviđa mi se”, to će se pojaviti ovdje."),
                o("i3e8b808", "Učitavanje korisnika koji su označili ovu objavu sa „sviđa mi se”"),
                o("c69fd704", "Učitavanje korisnika koji su proslijedili ovu objavu"),
                o("f12858d4", 'Korisnici koji su Tweet označili sa "sviđa mi se"'),
                o("fe62cfec", "Objavu je proslijedio/la korisnik/ca"),
                o("h1c5d6aa", "Što ste poslali vi"),
                o("h6d45054", "Što su poslali svi"),
                o("da68fff1", function (a) {
                    return a.count + " Novčić" + n(a.count, "i", "", "i") + " (vidljivo samo vama)";
                }),
                o("e35f2534", "Učitavanje sudjelovanja u objavi"),
                o("i60dfa72", "Sudjelovanja u objavi"),
                o("dc604dda", "Korisnici koji su označili ovu objavu sa „sviđa mi se”"),
                o("cdd4ef4a", "Korisnici koji su proslijedili tu objavu"),
                o("icc72234", "Citati te objave"),
                o("hc35b530", "Još nema oznaka „sviđa mi se”"),
                o("e0d6a246", "Još nema proslijeđenih objava"),
                o("i2a26cb4", "Kada netko dodirne znak srca da bi tu objavu označio oznakom „sviđa mi se”, to će se pojaviti ovdje."),
                o("i9b724e8", "Ovdje ćete pronaći popis svih korisnika koji su citirali tu objavu."),
                o("a5ab75ae", "Nije pronađena nijedna povezana objava."),
                o("ce637c0e", "Nije pronađen nijedan povezani članak."),
                o("fd67deaa", "Podijeli povezane objave"),
                o("f9183bb6", "Kopiraj vezu na povezane objave"),
                o("fc4e5d96", "Analitiku možete vidjeti samo za svoje objave."),
                o("ab0da59f", function (a) {
                    return a.entity + " – analitika";
                }),
                o("ae32e7de", "Ovo je sponzorirana objava. Broj prikaza te objave vidljiv je samo u privatnom načinu."),
                o("a10aa36c", "centru za pomoć"),
                o("d0740558", "centru za pomoć"),
                o("d2d76dca", "centru za pomoć"),
                o("b6414532", "Procijenjen broj osoba koje su vidjele vašu objavu"),
                o("c61c6624", "Sponzorirano"),
                o("d267afa2", "manje od 20"),
                o("db81cab0", "20 – 29"),
                o("f173716e", "30 – 39"),
                o("ada329e6", "40 – 49"),
                o("j2950694", "više od 50"),
                o("bcd9cf68", "više od 65"),
                o("f05f1838", "Ostalo / nije navedeno"),
                o("fa5be588", "Organski"),
                o("c69069e6", "Broj prikaza te objave na platformi X"),
                o("a0615bac", "Ukupan broj interakcija korisnika s određenom objavom. Podrazumijeva sve klikove na neko mjesto u objavi (npr. oznake ljestvi, poveznice, avatar, korisničko ime i pojedinosti o objavi), proslijeđene objave, odgovore, praćenja i oznake „sviđa mi se ”."),
                o("d8abdaa4", "Novi pratitelji"),
                o("c72f25a8", "Praćenja ostvarena izravno iz ove objave"),
                o("acc4cf12", "Broj prikaza profila putem ove objave"),
                o("c7d0d1c4", "Broj klikova na bilo koji URL u ovoj objavi"),
                o("a4da7724", "Koliko su puta korisnici pogledali pojedinosti o toj objavi"),
                o("c5d4d3a8", "Trošak po praćenju"),
                o("f56e24f2", "Ukupni trošak podijeljen s brojem osoba koje vas prate, uključujući zaradu. Plaćate samo kada netko prati vas"),
                o("g33fd6b1", function (a) {
                    return a.percentage + " od sponzorstva";
                }),
                o("b71059c3", function (a) {
                    return a.percentage + " od korisnika koji vas ne prate";
                }),
                o("h4cbba3e", "< 5 %"),
                o("h1cdac12", "< 5 % od promocije"),
                o("g884b2cc", "< 5 % od osoba koje vas ne prate"),
                o("b32334a0", "Dosegnuti računi"),
                o("h142a79c", "Broj jedinstvenih pregleda objave"),
                o("de4def4e", "Postotak svih promotivnih sadržaja do danas"),
                o("e3390c1e", "Prvih 48 sati"),
                o("aead0975", function (a) {
                    return "Ovime se prati koliko je puta ta objava pročitana u prvih 48 sati nakon objave. Maksimalna je vrijednost sljedeći broj prikaza: " + a.maxValue + ".";
                }),
                o("ib1f8491", function (a) {
                    return a.likeCount + " oznak" + n(a.likeCount, "e", "a", "a") + " „sviđa mi se”";
                }),
                o("dc0e7f37", function (a) {
                    return a.retweetCount + " proslijeđen" + n(a.retweetCount, "e objave", "a objava", "ih objava");
                }),
                o("d0eeb127", function (a) {
                    return a.replyCount + " odgovor" + n(a.replyCount, "a", "", "a");
                }),
                o("db6efeb8", "Sponzorstvo je aktivirano"),
                o("j6daea86", "Vaša je promocija pauzirana"),
                o("hf9ed10f", function (a) {
                    return a.endTimeString + " · " + a.endDateString;
                }),
                o("f42a198d", function (a) {
                    return "Potrošeno " + a.spentBudget + " od " + a.totalBudget;
                }),
                o("e8adeec8", "Ponovno sponzoriraj"),
                o("fbb5c37e", "Ponovno istakni"),
                o("ccffb487", function (a) {
                    return "Vaša objava dosad ima " + a.impressions + " nov" + n(a.impressions, "a prikaza", "i prikaz", "ih prikaza") + ". Prebacite se na profesionalni račun da biste doprijeli do veće publike.";
                }),
                o("ha13fd94", "Istaknite objavu"),
                o("jede3014", "U tijeku je pregled vašeg sponzorstva"),
                o("b823301e", "Nakon odobrenja vaša će promovirana objava stići do publike koju odaberete."),
                o("a2e48870", "Pročitajte pravila platforme X o oglasima"),
                o("ge538876", "Metrički podaci za videozapis koji ste podijelili"),
                o("ca7e10d8", "Jedinstvenih prikaza"),
                o("i611fc96", "Ukupan broj prikaza videozapisa u svim objavama"),
                o("a69cd868", "Broj jedinstvenih prikaza videozapisa"),
                o("f894a688", "Zadržavanje publike"),
                o("ad9d9204", "Postotak vremena koji gledatelji gledaju videozapis prije nego što ga napuste i koliki dio videozapisa pogledaju."),
                o("da4b7a70", "Postotak gledatelja koji su videozapis odgledali do kraja"),
                o("de2d89a2", "Pogledano 25 %"),
                o("i92754c2", "Pogledano 50 %"),
                o("be8ddcc2", "Pogledano 75 %"),
                o("b01410d6", "Pogledano 100 %"),
                o("gfb3d8af", function (a) {
                    return "Pogledano do " + a.timeLabel;
                }),
                o("fc6cbba2", "Ovdje nema ničega – zasad"),
                o("b80a53c8", "Ako prikupimo više podataka, tu ćete obavijest vidjeti ovdje."),
                o("d25dccb6", "Analitika nije dostupna za objave iz kruga."),
                o("g61ac32a", "Automatski ciljamo korisnike koji će najvjerojatnije komunicirati s vašim sadržajem."),
                o("e8702feb", function (a) {
                    return "Darujemo vam " + a.couponAmount + "!";
                }),
                o("e44dc579", function (a) {
                    return "Odmah započnite i iskoristite popust od " + a.couponAmount + " na svoj prvi sponzorirani sadržaj do " + a.date + ".";
                }),
                o("hd8df545", function (a) {
                    return "Odmah započnite i iskoristite popust od " + a.couponAmount + " na svoj sljedeći sponzorirani sadržaj do " + a.date + ".";
                }),
                o("f1d32e41", function (a) {
                    return "Potrošite " + a.spendAmount + " i za oglašavanje vam dajemo iznos od " + a.couponAmount + ".";
                }),
                o("c4d0434b", function (a) {
                    return a.dailyBudget + " dnevno za " + a.durationLabel;
                }),
                o("dc4a9413", function (a) {
                    return a.totalBudget + " u trajanju od " + a.durationLabel;
                }),
                o("bad70c09", function (a) {
                    return "lokacij" + n(a.numLocations, "e", "a", "a");
                }),
                o("c133a39b", function (a) {
                    return a.minAge + " – " + a.maxAge;
                }),
                o("ee5da8f5", function (a) {
                    return a.minAge + "+";
                }),
                o("g4bf9cb7", function (a) {
                    return a.durationDays + " dan" + n(a.durationDays, "a", "", "a");
                }),
                o("gc3ce5d9", function (a) {
                    return "Procijenjeni doseg: " + a.audienceLow + " – " + a.audienceHigh + " ljudi dnevno";
                }),
                o("c1778029", function (a) {
                    return a.locationsHeading + ": " + a.locations + a.newlinePlaceholder + "Raspon godina: " + a.formattedAge + a.newlinePlaceholder + "Spol: " + a.gender;
                }),
                o("a4ab12b9", function (a) {
                    return "Kada tijekom jedne ili više kampanja potrošite " + a.spendAmount + ", izravno na vaš račun za oglašavanje uplatit ćemo iznos od " + a.couponAmount + ". Taj iznos može biti vidljiv tek nakon nekoliko dana.";
                }),
                o("cb51c854", "Bilo koji spol"),
                o("bb7b39e2", "Muškarci"),
                o("eb9466d0", "Žene"),
                o("b07cc9f2", "Regija"),
                o("ce309bee", "Metro"),
                o("cc49d030", "Posštanski broj"),
                o("c3fca124", "Pojačaj angažman"),
                o("d4f57cce", "Povećajte broj osoba koje vas prate"),
                o("c6daa762", "Više klikova na poveznicu"),
                o("cc642518", "Pretraživanje lokacija"),
                o("i0e8c3c6", "Rezultati za lokaciju"),
                o("f69ad048", "Odabir lokacije"),
                o("d948b978", "Promovirati možete samo vlastite objave."),
                o("cfcdb4a2", "Došlo je do pogreške. Provjerite jesu li onemogućeni svi blokatori oglasa."),
                o("j7a2af7a", "Ne želite promovirati tu objavu?"),
                o("a78bce8e", "Ako sada izađete, ta se objava neće promovirati."),
                o("g8844150", "Nemoj sponzorirati"),
                o("e7eb3684", "Proračun po danu"),
                o("d9f6e3ce", "Kliznik za proračun po danu"),
                o("b3954eca", "Kliznik za trajanje u danima"),
                o("ce665a60", "Procijenjeni je doseg okviran. Stvaran doseg ne možemo jamčiti."),
                o("i0c3b95c", "Sad smo mi na redu!"),
                o("h8b6e32a", "Promovirali ste svoju objavu!"),
                o("ee8014a6", "Pogledajte analitiku objave u bilo kojem trenutku kako biste provjerili učinkovitost oglasa."),
                o("db841200", "Povećajte prisutnost, doprite do većeg broja ljudi i proširite informacije o svojoj stranici."),
                o("fcc839b6", "Koji vam je cilj?"),
                o("b679a538", "Vaša objava sadrži medijski sadržaj"),
                o("cb19a2f0", "Ostvarite više oznaka „sviđa mi se”, proslijeđenih objava itd."),
                o("a2d37164", "Više posjetitelja na vašem web-mjestu"),
                o("cefad302", "Dodajte poveznicu na svoju objavu"),
                o("b614fad0", "Provjerite sadrži li vaša objava poveznicu."),
                o("de43b660", "Načini plaćanja"),
                o("hb4773a0", "Dodaj novi način plaćanja"),
                o("aa2a3dd4", "Brisanje kartice"),
                o("b1c5b63c", "završava za"),
                o("affb5878", "Potvrdi brisanje"),
                o("db443ae2", "Izgleda li sve kako treba?"),
                o("a96f811e", "Cilj sponzorstva"),
                o("fbd44e96", "Vaš proračun"),
                o("e36bce64", "Način plaćanja"),
                o("ia83756c", "Podzbroj"),
                o("cc217a04", "Iznos na kuponu"),
                o("g4f2b588", "Ostatak iznosa na kuponu"),
                o("i41612da", "Stvori promotivni sadržaj"),
                o("cdae1af0", "Dodajte podatke o porezu"),
                o("ed8bb5a0", "Dodajte podatke o plaćanju"),
                o("fc640c20", "Dodajte podatke o plaćanju da biste zatražili kupon"),
                o("be2dc078", "Registrirajte se i dodajte podatke o plaćanju"),
                o("iaefd4de", "Registrirajte se i dodajte način plaćanja da biste zatražili kupon"),
                o("e5e42640", "Hm...kupon se nije učitao. Pokušajte ponovno poslije."),
                o("e85dfd66", "Već je stvorena kampanja za tu objavu."),
                o("a4db098c", "Čini se da ne možemo stvoriti sponzorirani sadržaj. Pokušajte ponovno poslije."),
                o("ef7e3916", "Došlo je do pogreške. Provjerite podatke o sponzoriranom sadržaju i pokušajte ponovno."),
                o("c1134966", "Uvjete korištenja i Upute za oglašavanje"),
                o("he45cc43", "Odredbe korištenja kupona"),
                o("c9439a82", "Uvjete korištenja i Upute za oglašavanje"),
                o("c672105a", "Što želite dohvatiti?"),
                o("e1efbeae", "Raspon godina"),
                o("c6ff7c10", "Minimalni raspon godina"),
                o("b555fb46", "Maksimalni raspon godina"),
                o("j2c03e12", "55 i više"),
                o("d4e01892", "pravilnikom platforme X o oglašavanju stambenih nekretnina, zajmova i radnih mjesta"),
                o("df8d4fa0", "Odabir spola"),
                o("i982d424", "Koliko želite uložiti?"),
                o("b9ff6cb0", "Nije odabran nijedan način plaćanja"),
                o("i8b90688", "Uvjete korištenja i Upute za oglašavanje"),
                o("a93bd26d", "Odredbe korištenja kupona"),
                o("d31dc460", "Uvjete korištenja i Upute za oglašavanje"),
                o("ga845597", function (a) {
                    return "Ukupno tijekom " + a.durationLabel;
                }),
                o("e1945a89", function (a) {
                    return a.audienceLow + " – " + a.audienceHigh;
                }),
                o("b21c2549", "Saznajte više"),
                o("j9f78b42", "U objavi nema označenih korisnika."),
                o("cb2054fa", "Učitavanje korisnika"),
                o("e4ad6bda", "Na ovoj fotografiji"),
                o("cdd4aafe", "Učitavanje osoba u razgovor"),
                o("aac3fad2", "Sudionici ovog razgovora"),
                o("a7f66562", "Učitavanje objave"),
                o("b7a898fa", "Idite na sljedeću objavu izravno odavde!"),
                o("e254fdd2", "Možete prijeći prstom izravno na sljedeću objavu!"),
                o("h59700fa", "ImmersiveMediaViewer"),
                o("i86c2940", "Kliznik"),
                o("h2fcc532", "Učitavanje povijesti"),
                o("a74821a0", "Čini se da plaćanje nije uspjelo ili da će uskoro isteći. Da biste zadržali svoju pretplatu na Premium, ažurirajte podatke za plaćanje."),
                o("bb55752e", "Novčićima podržavate autore sadržaja koji objavljuju kvalitetan sadržaj. Nepotrošeni novčići ostaju na vašem računu."),
                o("ea7ce65f", function (a) {
                    return "Priložen" + n(a.count, "a su " + a.count + " dodatna novčića", " je " + a.count + " dodatni novčić", "o je " + a.count + " dodatnih novčića") + ".";
                }),
                o("e557f9d2", "Dosegnuli ste ograničenje salda za Novčiće."),
                o("e2beba5e", "Najpopularnije"),
                o("gafeeb96", "Kupi novčiće"),
                o("bc42db1c", "Otkazati možete u bilo kojem trenutku. Svaki se mjesec automatski obnavlja."),
                o("f1561b06", "Uvjetima pružanja usluge za kupce"),
                o("fe93ed4a", "Kupnja je uspjela"),
                o("bcb90375", function (a) {
                    return "Vaš novi saldo u novčićima iznosi " + a.balance + ".";
                }),
                o("ia2eb0c0", "Kupnja nije uspjela!"),
                o("c7e11484", "Vaši su popisi prazni"),
                o("a96208ba", "Prije dodavanja novih osoba morate stvoriti popis."),
                o("d2826908", "Sastavljanje novog popisa"),
                o("he062e8a", "Odabir popisa"),
                o("c2fb1e94", "Na popis možete dodati samo 5000 računa."),
                o("f30edc68", "Označi kao privatno"),
                o("h51a2cf6", "Došlo je do pogreške. Baner pokušajte ponovno izbrisati za koju minutu."),
                o("bb10280e", "Došlo je do pogreške. Pokušajte ponovno spremiti popis za koju minutu."),
                o("h8885a22", "Naziv popisa ne smije premašiti 25 znakova"),
                o("f8132984", "Ako za popis postavite da bude privatan, samo ćete ga vi vidjeti."),
                o("h421e74c", "Predloženi popisi"),
                o("aa62dea8", "Dobro smo otvorili oči"),
                o("e5e4d3aa", "Popise koje vam predlažemo potražite poslije."),
                o("c4d7650c", "Upravljanje članovima"),
                o("h7f2418c", "Učitavanje podataka o popisu"),
                o("b18e5cd2", "Došlo je do pogreške. Pokušajte ponovno izbrisati taj popis za koju minutu."),
                o("cdd73e9c", "Izbriši popis"),
                o("def8ff62", "Želite li izbrisati popis?"),
                o("j8b9cde8", "Ta se radnja ne može poništiti te ćete izgubiti popis."),
                o("e9f3dec4", "Pretraživanje popisa"),
                o("b9192d55", function (a) {
                    return a.query + " – pretraživanje popisa";
                }),
                o("d6a23192", "Stvori novi popis"),
                o("ie256518", "Vremenska crta s pretraživanjem popisa"),
                o("j57a2568", "Pretraživanje popisa"),
                o("hc76e8cd", function (a) {
                    return "Nijedan popis ne podudara se s „" + a.query + "”";
                }),
                o("d872881a", "Zašto ga ne biste izradili?"),
                o("j177067a", "Pretraživanje popisa"),
                o("g13ea02c", "Pokušajte pretražiti popise"),
                o("d1461f1e", "To je jedini popis"),
                o("bcbd3416", "Ovdje će se pojaviti osobe koje prate taj popis."),
                o("b197a56c", "Osobe koje prate popis"),
                o("f0ab07f5", function (a) {
                    return "Članovi (" + a.memberCount + ")";
                }),
                o("h9ce3406", "Prikaz popisa članova"),
                o("dfeaeb26", "Dodajte na svoj popis"),
                o("a332103e", "Ovdje će se pojaviti korisnici koje ste dodali na taj popis."),
                o("e2f7dc62", "Traženje preporučenih članova"),
                o("gc23cc00", "Pokušajte potražiti neke račune da biste vidjeli preporuke o tome što možete dodati na taj popis."),
                o("e3deb126", "Prijedlozi u vezi s popisima"),
                o("eb7b54be", "Učitavnje popisa"),
                o("a9ca06d2", "Podaci"),
                o("a367dc9a", "Najnovije objave prikazuju se u stvarnom vremenu"),
                o("dd438748", "Najprije se prikazuju najpopularnije objave"),
                o("fe7e217c", "Pogledajte najnovije objave"),
                o("ce78b698", "Najprije se prikazuju najpopularnije objave. Najnovije objave prikazuju se u stvarnom vremenu."),
                o("i5a1628a", "Pogledajte najpopularnije objave"),
                o("f333a93e", "Najprije se prikazuju najnovije objave. Najpopularnije objave prikazuju vam najbolje objave."),
                o("c7294984", "Prijavi popis"),
                o("g6340998", "Nećete se automatski ponovno dodati na njegove/njezine popise."),
                o("i6da4f7a", "Podijeli popis"),
                o("a062ff80", "Kopiraj poveznicu na popis"),
                o("dcdc75a3", function (a) {
                    return "@" + a.screenName + "/" + a.listName;
                }),
                o("d2004da3", function (a) {
                    return "Ne pratite korisnika/cu @" + a.screenName;
                }),
                o("a64512a4", "Vremenska crta s popisima"),
                o("i0bcc456", "Kada počnete pratiti tu osobu, moći ćete vidjeti njezine popise."),
                o("d8315ca0", "Popisi na kojima se nalazite"),
                o("e74be9ac", "Popisi na kojima se nalazi"),
                o("c80cb4e4", "Novi popis"),
                o("bbcaa24b", function (a) {
                    return "Popisi koje je stvorio/la @" + a.screenName;
                }),
                o("b081cdf7", function (a) {
                    return "@" + a.screenName + " nije stvorio/la nijedan popis";
                }),
                o("f5978664", "Nakon toga pojavit će se ovdje."),
                o("h243711c", "Još niste stvorili nijedan popis"),
                o("b69e2f71", function (a) {
                    return "@" + a.screenName + " nije dodan/a ni na jedan popis";
                }),
                o("e05568cc", "Kada se dodaju na popis, pojavit će se ovdje."),
                o("b86a098a", "Niste još dodani ni na jedan popis"),
                o("h06e09a2", "Kada vas netko doda na popis, to ćete vidjeti ovdje."),
                o("gbaa5489", function (a) {
                    return "Članstva na listama za korisnika/cu @" + a.screenName;
                }),
                o("g6b54ff6", "Sve ste pogledali"),
                o("ec5fd35a", "Zahtjevi korisnika koji vas žele pratiti pojavit će se ovdje, pa ih možete prihvatiti ili odbiti."),
                o("ec2d8342", "Odbij"),
                o("j85d8d90", "Za tog korisnika nema zahtjeva za praćenjem na čekanju."),
                o("c3d23f10", "Izgleda da je došlo do manjih poteškoća u radu. Ne brinite, nije vaša greška. Kliknite ispod i pokušajte ponovno."),
                o("d2613123", function (a) {
                    return "Pretplatite se – " + a.price + " mjesečno";
                }),
                o("c4640fc0", "Dijeli profil Pretplata"),
                o("a72064a8", "Kopiraj vezu na profil Pretplata"),
                o("e6c72234", "Uvjete dijeljenja e-pošte"),
                o("b17f0c4b", function (a) {
                    return "Sada ste pretplaćeni na sadržaj autora @" + a.screenName;
                }),
                o("a5634d9a", "Prilikom obrade pretplate pojavio se problem. Odbacite taj upit i pokušajte ponovno."),
                o("fe9d3afa", "Učitavanje korisnika koji vas prate"),
                o("ab7fc3ef", function (a) {
                    return "Super korisnici koji prate korisnika/cu " + a.fullName + " (@" + a.screenName + ")";
                }),
                o("j0d17377", function (a) {
                    return "Vaši poznanici koji prate korisnika/cu " + a.fullName + " (@" + a.screenName + ")";
                }),
                o("fa9e827f", function (a) {
                    return "Osobe koje prati " + a.fullName + " (@" + a.screenName + ")";
                }),
                o("ha979be5", function (a) {
                    return "Osobe koje prati " + a.fullName + " (@" + a.screenName + ")";
                }),
                o("d28be573", function (a) {
                    return "Osobe s pretplatom za korisnika " + a.fullName + " (@" + a.screenName + ")";
                }),
                o("g9da3853", function (a) {
                    return "Osobe koje je pretplatio korisnik " + a.fullName + " (@" + a.screenName + ")";
                }),
                o("cfd952a1", function (a) {
                    return "Provjereni računi koji prate korisnika/cu " + a.fullName + " (@" + a.screenName + ")";
                }),
                o("fecc696e", "Provjerene osobe koje vas prate"),
                o("g0a2fbbe", "Još nemate nijednog pretplatnika"),
                o("g65f4bac", "Još vas nijedna osoba ne prati"),
                o("c36cfddc", "Tražite osobe koje vas prate?"),
                o("fd275c1a", "Još vas nijedna provjerena osoba ne prati"),
                o("e08bd098", "Ovdje ćete pronaći popis svih svojih pretplatnika."),
                o("j029a4dc", "Kada vas neka osoba počne pratiti, vidjet ćete ovdje."),
                o("b2b2c6ce", "Kada netko počne pratiti ovaj račun, prikazat će se ovdje. Objavljivanje i interakcija s drugim korisnicima pridonose povećanju broja osoba koje vas prate."),
                o("cb1a15c8", "Praćenjem računa jednostavno ćete održavati svoju vremensku crtu i biti u toku sa svime što se događa u vezi s temama i osobama za koje ste zainteresirani."),
                o("i967b954", "Ovdje ćete naći popis svih svojih pretplata."),
                o("a44e403e", "Kada vas provjereni račun počne pratiti, vidjet ćete ga ovdje."),
                o("d74ee2e3", function (a) {
                    return "@" + a.screenName + " još nema osoba koje ga/je prate";
                }),
                o("ae5749c7", function (a) {
                    return "@" + a.screenName + " nikoga ne prati";
                }),
                o("b5099e33", function (a) {
                    return "Korisnika/cu @" + a.screenName + " ne prati nijedna provjerena osoba.";
                }),
                o("ec251f36", "Kada ga/je neka osoba počne pratiti, bit će navedena ovdje."),
                o("f8af4f48", "Kad počnu pratiti račune, prikazat će se ovdje."),
                o("fd0aad94", "Kada provjereni korisnik počne pratiti taj račun, prikazat će se ovdje."),
                o("b84f6df1", function (a) {
                    return "Poklonite Premium na " + a.percentage + " % popusta tijekom ograničenog vremena";
                }),
                o("cfcac293", function (a) {
                    return "Poklonite i platite " + a.price;
                }),
                o("d7a73450", "Razina"),
                o("hbd2c24e", "Ovaj račun trenutačno ne ispunjava uvjete za poklone."),
                o("f3fddc98", "Uvjete za kupca"),
                o("cff9c889", "Saznajte više"),
                o("c65dda96", "Vaš poklon je poslan."),
                o("f6e2a407", function (a) {
                    return "Omogućite svima da prilikom odgovora na objave korisnika/ce @" + a.screenName + " vide vašu značku za pretplatnike";
                }),
                o("j8dedddd", function (a) {
                    return "Ako to isključite, @" + a.screenName + " i njegovi/njezini pretplatnici i dalje će vidjeti vašu značku kada odgovorite na neku objavu samo za pretplatnike korisnika/ce @" + a.screenName + ". @" + a.screenName + " uvijek će vidjeti vašu značku.";
                }),
                o("c8a513f6", "Otkaži pretplatu"),
                o("ea000ec8", "Već ste otkazali pretplatu?"),
                o("d7b8387e", "Ako ste već otkazali pretplatu, više ništa ne morate učiniti. Ona će automatski isteći po završetku ciklusa naplate."),
                o("f4166d9a", "Želite otkazati pretplatu?"),
                o("b74ff5fc", "Ako otkažete pretplatu, ona će automatski isteći po završetku ciklusa naplate."),
                o("ee9efbc8", "Nastavi na otkazivanje"),
                o("c5d9c77a", "Izgleda da je došlo do manjih poteškoća u radu. Ne brinite, nije vaša greška. Zatvorite taj prozor i pokušajte ponovno."),
                o("jda53c24", "Pretplatu možete otkazati putem servisa Apple App Store."),
                o("g0a7a53e", "Pretplatu možete otkazati putem servisa Google Play Store."),
                o("i5f14be7", function (a) {
                    return "Dobro došli natrag, " + a.displayName;
                }),
                o("a76d58ba", "Analitika oglasa"),
                o("g512ddcc", "Organska analitika"),
                o("eccd0e1a", "Analitika organizacije"),
                o("deea1708", "Želite li pregledati analitiku za sve vaše račune za X?"),
                o("eb603ffc", "Nadogradite da biste povezali račun svoje mreže i pregledali skupnu analitiku."),
                o("gf67aae4", "Nadogradi na puni pristup"),
                o("h75e3618", "Uključi organizaciju"),
                o("h24a8862", "Više o ovom potvrdnom okviru"),
                o("c29e3a88", "Odaberite povezane račune"),
                o("j8318d57", function (a) {
                    return a.number + " povezan" + n(a.number, "a računa", "i račun", "ih računa");
                }),
                o("bf809ec0", "Odaberite povezane račune"),
                o("b719e224", "Nema rezultata"),
                o("c9938100", "Rezultati pretraživanja"),
                o("d1a35ec6", "Dodaj račune"),
                o("b437adda", "Nadogradite da biste primali isplatu"),
                o("f1f6c88b", function (a) {
                    return "Računi (" + a.count + ")";
                }),
                o("b02156b8", "Pozivnice"),
                o("gd67d29b", function (a) {
                    return "Pozivnice (" + a.count + ")";
                }),
                o("daf646e6", "Imajte na umu: račune morate označiti na odgovarajući način."),
                o("i3895c32", "Vaš se račun pregledava jer ste promijenili @nadimak na X-u"),
                o("i5f8b628", "Svoje povezane račune ne možete mijenjati dok se vaš račun ne pregleda."),
                o("e9e663ac", "Vaše plaćanje kasni."),
                o("c3ddd22c", "uvjetima"),
                o("c9729d8a", "uvjetima"),
                o("cdcd1d2c", "Dodajte povezane račune svojoj organizaciji"),
                o("d30ea6f3", function (a) {
                    return "Želite li sigurno ukloniti korisnika @" + a.name + "?";
                }),
                o("c2dfbb86", "Da, nastavi"),
                o("ba047f76", "Uklanjanjem suradnika odmah se uklanja njegova kvačica i suradnička značka. Naplaćivat će vam se do kraja mjeseca."),
                o("j26dee0e", "Ukloni povezani račun"),
                o("e30cbdf0", "Ovaj povezani račun pretplatnik je značajke Provjerene organizacije i mora ostati organizacija. Ne može se promijeniti u pojedinca."),
                o("j3115ce8", "Pojedinac"),
                o("d8bb1d84", "Organizacija"),
                o("e970bdbd", function (a) {
                    return "Preostaje još ovoliko pozivnica: " + a.count + " ";
                }),
                o("id67d953", function (a) {
                    return "Došlo je do pogreške prilikom dohvaćanja podataka o odjavi za Stripe. Ako se problem nastavi pojavljivati, obratite se na" + a.supportEmail + ".";
                }),
                o("f323d314", "Ponovno pošalji"),
                o("ac645cde", "Uvijek ih možete ponovno dodati."),
                o("d12af2dd", function (a) {
                    return "Sigurno želite ukloniti pozivnicu za korisnika @" + a.screenName + "?";
                }),
                o("ib60b2d5", function (a) {
                    return "Sigurno želite ponovno poslati pozivnicu korisniku @" + a.screenName + "?";
                }),
                o("ec6e7d9a", "Vaš je Račun u načinu rada samo za čitanje dok se ne izvrši promjena razine koja je na čekanju. Otiđite na Stripe i provjerite svoju uplatu kako biste osigurali uspješnu promjenu razine."),
                o("b33d1518", "Sinkronizirajte radna mjesta iz podržane integracije ili prilagođenog XML sažetka sadržaja"),
                o("dd2db402", "1. korak: Prikupite potrebne informacije"),
                o("edb098c2", "2. korak: obratite se našem timu za podršku"),
                o("c4474460", "2. korak: Pošaljite poruku e-pošte našem timu za podršku");
            function t(a, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(
                            a,
                            ((n = o.key),
                            (t = void 0),
                            "symbol" ==
                            typeof (t = (function (a, e) {
                                if ("object" != typeof a || null === a) return a;
                                var i = a[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var o = i.call(a, e || "default");
                                    if ("object" != typeof o) return o;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(a);
                            })(n, "string"))
                                ? t
                                : String(t)),
                            o,
                        );
                }
                var n, t;
            }
            function r(a, e) {
                return (
                    (r = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (a, e) {
                              return (a.__proto__ = e), a;
                          }),
                    r(a, e)
                );
            }
            o("a08da0fa", "Što dalje?"),
                o("c127374e", "Pošaljite nam poruku"),
                o("b2cb2a0c", "Korisničko ime za vaš račun za Verified Org"),
                o("b8e64002", "Naziv vašeg sustava za praćenje kandidata"),
                o("acb99db6", "URL stranice za oglašavanje radnih mjesta na kojoj su navedena vaša radna mjesta"),
                o("a64a5b7a", "Pošaljite tražene podatke našem timu za podršku kako bismo započeli postupak integracije."),
                o("e3dffb4e", "Kopirajte našu adresu e-pošte za podršku u nastavku i pošaljite tražene podatke našem timu za podršku kako bismo započeli postupak integracije."),
                o("b4fef99e", "Nakon što naš tim za podršku primi vaš zahtjev, pregledat ćemo vaše podatke i pomoći ćemo vam konfigurirati vašu integraciju."),
                o("h37f2d96", "Imajte na umu da trenutačno nisu podržani svi sustavi za praćenje kandidata."),
                o("ce102a20", "Preusmjeravanje na uslugu Stripe"),
                o("ddfd6718", "Plaćanje nije uspjelo"),
                o("i90ea7d2", "Hitno ažurirajte podatke za naplatu da biste zadržali pogodnosti."),
                o("a62359e6", "Postavke provjerenih organizacija"),
                o("ge221b7c", "Nadogradite pretplatu za Provjerene organizacije kako biste dobili pristup povezanim računima i više kredita za oglase."),
                o("i4dccc18", "Naplata"),
                o("ec3cd6e4", "Upravljajte načinom plaćanja, ažurirajte podatke za naplatu i pregledajte fakture."),
                o("dac61c3c", "Postavke računa"),
                o("b6b5fd66", "Upravljajte svojim računom za X, uključujući mijenjanje korisničkog imena i lozinke."),
                o("hb9c4a1c", "Pitanja, izvješća o programskim pogreškama"),
                o("c674f5b4", "Postavljanje plaćanja računa"),
                o("i8237e66", "Prebacite se s plaćanja kreditnom karticom na plaćanja računa putem bankovnih transfera."),
                o("hebd348a", "Konfigurirajte način upotrebe oglasa za promoviranje poslova s portala Zapošljavanje."),
                o("ib5e6f90", "Promoviranje posla"),
                o("id720215", "Zapošljavanje"),
                o("dd59f146", "Račun za oglase i promoviranje posla"),
                o("e7e36818", "Računi za oglase ispunjavaju uvjete za promoviranje poslova kada su u potpunosti postavljeni i imaju izvor financiranja."),
                o("c28566e0", "Račun za oglase"),
                o("c80160d3", "Oglašavanje"),
                o("ff0edac0", "Sigurno želite otkazati pretplatu?"),
                o("h2ac0348", "Ne, vrati se"),
                o("dbf9667e", "Da"),
                o("j7592572", "Polukružni okret"),
                o("ee778942", "Semafor"),
                o("fdd57981", function (a) {
                    return "Želimo vam ponuditi besplatan jednokratan kredit za oglase u iznosu od " + a.totalAmount + " USD.";
                }),
                o("i032a231", function (a) {
                    return "Ostat ću i iskoristiti " + a.totalAmount + " kredita za oglase";
                }),
                o("hd7d278c", "Ne, hvala"),
                o("jf8a0dea", "Sjajno! Vaš novi besplatni kredit za oglase prikazat će se na vašem računu u sljedećem ciklusu naplate."),
                o("ebbb3154", "Zatvori i vrati se na X"),
                o("j1f68dda", "Posljednji korak: jeste li sigurni da želite otkazati?"),
                o("c9c3464c", "Otkazivanje pretplate je u tijeku"),
                o("dd3a293c", "Vaša je pretplata za Provjerene organizacije završila."),
                o("faa0f956", "Prilikom otkazivanja pretplate došlo je do pogreške."),
                o("b28289ea", "Hvala"),
                o("b36f74ae", "Više nećete imati pristup portalu osim ako se ponovno prijavite i ponovite aktivaciju."),
                o("b2297a4a", "Trebate pomoć pri rješavanju problema? Možete zakazati poziv s nama."),
                o("h3bdbc54", "Da, zakažimo poziv"),
                o("i135d64e", "Nastavi s otkazivanjem"),
                o("g275882d", function (a) {
                    return "Važno: imate " + a.creditAmount + " neiskorištenog besplatnog kredita za oglase";
                }),
                o("ib085ed6", "Ostat ću i iskoristiti kredit za oglase"),
                o("b5447710", "Korisnik nije pronađen"),
                o("h94755b8", "Korisnik je već odabran za pozivanje"),
                o("bfb5effe", "Korisnik je već povezani račun"),
                o("c4b9664e", "Povezani"),
                o("g0eadcf6", "Povezan s drugom organizacijom"),
                o("a8c81f88", "Račun organizacije"),
                o("e5abe772", "Korisnik već ima pozivnicu na čekanju"),
                o("e49b97e2", "Pretraživanje računa"),
                o("f002f1d6", "Pošalji pozivnicu"),
                o("g2a8bae4", "Dodaj račune za X"),
                o("af7293cc", "Pozovite račune na X-u da se pridruže vašoj organizaciji. Ako prihvate, dobit će kvačicu, a vaš će suradnički odnos biti prikazan na njihovim profilima."),
                o("ec0f203e", "Kada povezani račun prihvati poziv, obavezno ažurirajte njegovu kvačicu na ispravnu boju."),
                o("cec08784", "Dosegnuli ste ograničenje povezanih računa za ovu fakturu."),
                o("ab70828f", function (a) {
                    return "Dodaj korisnika/cu @" + a.screenName;
                }),
                o("d49b389f", "ovdje"),
                o("b9e4bf55", "Saznajte više"),
                o("hc4703a9", "Saznajte više"),
                o("fa0ffaeb", "Saznajte više"),
                o("jf351704", "Da biste nastavili, morate ažurirati ograničenje za povezane račune na ovom računu."),
                o("ia5a6a40", "Za početak rada morate dodati svoje podatke o plaćanju."),
                o("d40d1cc0", "Da biste nastavili, trebate platiti putem servisa Stripe."),
                o("c4a5f614", "Dodajte podatke o plaćanju"),
                o("fa2a280a", "Ažuriranje računa"),
                o("i7b2f08e", "Dobro došli u Provjerene organizacije"),
                o("g4e18b84", "Dosegli ste ograničenje za suradnike "),
                o("cbe23239", function (a) {
                    return "Za narudžbe više od " + a.affiliatesCount + " povezanih računa.";
                }),
                o("fc1f43d0", "Generiraj račun"),
                o("g8881c78", "Nastavi na plaćanje"),
                o("g59f8506", "Napomena: računima koje nije moguće provjeriti kao poslovne ili državne entitete neće se izdavati naknada."),
                o("a310e476", "Izravno"),
                o("fde6cf98", "Za trenutni pristup provjerenim organizacijama."),
                o("fdfbfcb0", "Naplata"),
                o("f45d02e8", "Došlo je do pogreške prilikom postavljanja pretplate. Pokušajte ponovno poslati iz poruke e-pošte za aktivaciju."),
                o("a1c566c0", "Došlo je do pogreške prilikom postavljanja pretplate. Ponovno pošaljite svoje podatke."),
                o("f5a1c6ac", "Pretplate nisu dostupne u vašoj regiji"),
                o("ef7ae9cd", "Saznajte više"),
                o("d3c6b8c9", "Saznajte više"),
                o("fafe5b9f", function (a) {
                    return "Pretplatite se· " + a.price + "/" + a.interval;
                }),
                o("f2ae1d63", "Uvjete pružanja usluge za kupce"),
                o("ie8759c5", "Uvjete pružanja usluge za kupce"),
                o("d842dd7b", function (a) {
                    return "Postignite brži rast na platformi X i ostvarite " + a.credit + " besplatnog kredita za oglase";
                }),
                o("fcfb696e", "⁺Vremenski ograničena ponuda kredita za oglase"),
                o("f5b98d62", function (a) {
                    return "svakih " + a.interval;
                }),
                o("ed7b9984", function (a) {
                    return "svakih " + a.interval;
                }),
                o("da11a2d7", function (a) {
                    return "Do " + a.creditAmount + " u kreditima za oglašavanje⁺";
                }),
                o("a6c45ede", "Obuhvaća:"),
                o("e9aa43dc", "Organsko oglašavanje poslova"),
                o("i1266238", "Mogućnosti promoviranja posla"),
                o("e8a4ea7a", "Prioritetna podrška"),
                o("j99e2f4d", function (a) {
                    return a.price + " / " + a.interval;
                }),
                o("bb21a170", "Promijeni pretplatu"),
                o("b0dcc4dc", "Vaš je račun već na čekanju za promjenu razine."),
                o("f3aef4ca", "Nije pronađena aktivna pretplata"),
                o("h802e65e", "Ažuriranje pretplate nije uspjelo. Pokušajte ponovno. Vaša postojeća pretplata nije se promijenila."),
                o("c5269eb0", "Ovo je vaša aktivna pretplata."),
                o("c578c4ca", "Trenutni plan"),
                o("i5d19147", "Nova tarifa"),
                o("b025ff5f", "ovdje"),
                o("d6b932d4", "U besplatnom probnom razdoblju"),
                o("b0efe690", "Nastavi s Osnovnim planom"),
                o("g5f9cdaa", "Potvrdite promjene plana"),
                o("j21911de", "Želite li prijeći na osnovni plan ili zadržati prednosti potpunog pristupa?"),
                o("b59dec9e", "Vraćate se s probnog razdoblja s potpunim pristupom na osnovi plan."),
                o("e5ff0e1e", "Kada se to promijeni:"),
                o("ca004c80", "Značajke probnog razdoblja s potpunim pristupom, uključujući povezane račune, više neće biti dostupne."),
                o("fae108ee", "Povezani računi koje ste dodali tijekom probnog razdoblja ostat će bez povlastica i podrške za Premium+."),
                o("d47c0c7c", "Tko ste vi?"),
                o("hbd31720", "Odaberite odgovarajuću pretplatu za vas:"),
                o("c75a9386", "Saznajte više"),
                o("b916b258", "i"),
                o("ic6012ea", "Pojedinac"),
                o("d8e618ce", "Za pojedince i autore sadržaja"),
                o("dcbccede", "Organizacija"),
                o("f44ce884", "Za poslovne tvrtke, državne agencije, neprofitne organizacije"),
                o("dece6c60", "Naziv organizacije"),
                o("c4c1b600", "Adresa e-pošte organizacije"),
                o("b1e0aec0", "@nadimak organizacije"),
                o("c42d5f4a", "Broj povezanih računa"),
                o("fca5f04b", function (a) {
                    return "Broj povezanih računa koje možete kupiti je " + a.affiliatesCount + ". Naplata će se izvršiti sukladno tome.";
                }),
                o("dca6b3ac", "Postavljanje naplate"),
                o("c97ad52a", "Ažuriranje računa"),
                o("b36f0fd4", "Odaberite koliko povezanih računa trebate za organizaciju."),
                o("b4871f4f", "ovdje"),
                o("b633d19e", "Hvala"),
                o("f713d3e2", "Vaša je prijava zaprimljena i sada se pregledava."),
                o("e11d5e1a", "Moći ćete koristiti sve prednosti koje pruža Premium ali vaša organizacija neće biti označena zlatnom ili sivom kvačicom i nećete moći dodati povezane račune sve dok ne odobrimo vaš račun."),
                o("d83617cc", "Vaš će se račun pregledati."),
                o("afb30564", "Možemo zatražiti dodatne informacije u svrhu odobravanja računa"),
                o("gdd3fa68", "Nakon pregleda i odobravanja vaš će račun automatski biti provjeren i moći ćete registrirati i dodati povezane račune."),
                o("e6389996", "Za račune bez odobrenja nije moguće ostvariti povrat."),
                o("a889b460", "Uspješno plaćanje"),
                o("d1c886dc", "Sljedeći korak: prijenos i potvrda dokumenata"),
                o("b13e9454", "Vaš zahtjev još nije potpun. Pošaljite potrebne dokumente. To obično traje oko 10 minuta."),
                o("e6b0965a", "Vaša narudžba"),
                o("a1b58798", "Pregledajte svoju narudžbu u nastavku"),
                o("b651c7d7", function (a) {
                    return "Povezan" + n(a.count, "a računa", "i račun", "ih računa") + " x " + a.count;
                }),
                o("ec5e9c54", "Osnovna pretplata"),
                o("e16093fc", "Ukupni iznos mjesečno"),
                o("ce4acef6", "Ukupno godišnje"),
                o("f4db2df0", "Vaša pretplata neće se aktivirati dok se račun ne podmiri."),
                o("b9e0d614", "Vaše ograničenje za povezane račune ažurirano je na računu."),
                o("a45c9596", "Vaša je faktura uspješno generirana."),
                o("e4e5532a", "Obračunat je popust"),
                o("b557f073", function (a) {
                    return "Došlo je do pogreške prilikom dohvaćanja podataka o fakturi za Stripe. Ako se problem nastavi pojavljivati, obratite se na " + a.supportEmail + ".";
                }),
                o("e8c366ce", "Uvjete za kupce na X-u"),
                o("ee86d380", "Podaci o organizaciji"),
                o("b9c9ccca", "Vaše ime i prezime"),
                o("c7e818de", "Vaša poslovna adresa e-pošte"),
                o("i60d7542", "Web-mjesto organizacije"),
                o("b92f9dee", "Vrsta organizacije"),
                o("f14d7866", function (a) {
                    return "" + a.screenName;
                }),
                o("e63bf39d", "Saznajte više"),
                o("f09630ff", "ovdje"),
                o("eb043b72", "Zahtjev je na čekanju"),
                o("a9ac4602", "Vaš zahtjev za pristup provjerenim organizacijama još se pregledava. Pokušajte ponovno kasnije."),
                o("c5af3e12", "Ponuda ograničenog trajanja. Krediti se ne zbrajaju."),
                o("e18d6fd6", "Vaš kredit za oglase"),
                o("if435d1a", "Iskoristili ste sav dostupan kredit ovog mjeseca. Sljedeći kredit bit će izdan nakon sljedećeg plaćanja pretplate"),
                o("af6704d7", "ovdje"),
                o("b293c6b4", "Premium podršci za provjerene korisnike"),
                o("e9e9ca58", "Dostupno"),
                o("cf2ba3a2", "ID računa za oglase"),
                o("gd7d051c", "Aktiviraj"),
                o("f391c800", "Potreban je ID računa za oglase"),
                o("ja116d2c", "ID računa za oglase nije valjan"),
                o("hf037537", function (a) {
                    return "Taj će kredit postati dostupan " + a.startDate;
                }),
                o("d0b58c01", function (a) {
                    return "" + a.days;
                }),
                o("e49cb8a7", function (a) {
                    return "" + a.remainingAmount;
                }),
                o("gd03b494", "Kako upotrijebiti svoj Kredit za oglase"),
                o("h1f36d3e", "Kako biste upotrijebili kredit za oglase za Provjerene organizacije morate pratiti korake u nastavku:"),
                o("a6519ffc", "Ako ste već prije oglašavali"),
                o("ibc9654a", "Ako ste novi oglašivač"),
                o("d3710c76", "Ako svoj kredit želite upotrijebiti na povezanom računu"),
                o("d60a8f14", "Izvrši oglase na platformi X"),
                o("fe66e4a8", "Upravitelj oglasa za X"),
                o("b3ca0108", "Neka se vaša poruka čuje nadaleko i naširoko uz oglase na platformi X."),
                o("g3754d57", "ovdje"),
                o("i615ad63", "Ovdje"),
                o("a3ba48b9", "ovdje"),
                o("ca3c633a", "Krediti za oglas"),
                o("ha843c96", "oglase"),
                o("dd0f3b08", "oglase"),
                o("c9fad534", "Nema kredita"),
                o("a211b11e", "Nema dostupnog kredita za aktivaciju"),
                o("f2011db1", function (a) {
                    return "Iskorišteno: " + a.usedAmount + " od " + a.couponAmount;
                }),
                o("ae37e25c", "nepoznata količina"),
                o("i1407e15", function (a) {
                    return "Iskorišteno na računu za oglase " + a.accountId;
                }),
                o("id4359bf", function (a) {
                    return "Isteklo " + a.when + " na računu za oglase " + a.accountId;
                }),
                o("f89af915", function (a) {
                    return "Isteklo " + a.when;
                }),
                o("c1b5e1ed", function (a) {
                    return "Ističe " + a.when + " na računu za oglase " + a.accountId;
                }),
                o("e8d8a2a9", function (a) {
                    return "Ističe " + a.when;
                }),
                o("i3884c1f", function (a) {
                    return "Dostupno " + a.when;
                }),
                o("b070acf4", "Uskoro dostupno"),
                o("ace946c4", "Aktiviraj kupon"),
                o("b0b02e37", function (a) {
                    return "Taj je kupon uspješno primijenjen na ID računa za oglase: " + a.accountId;
                }),
                o("f520ee22", "ID računa za oglase"),
                o("df96ca56", "Drugi račun"),
                o("b5566402", "ID sadrži samo slova i brojeve."),
                o("eb160d07", "biraču računa za upravljanje oglasima"),
                o("e016ad32", "Način Samo za čitanje"),
                o("d7ab194e", "Određene značajke provjerenog računa mogu biti u načinu samo za čitanje tijekom obrade promjene vaše pretplate."),
                o("g25d851e", "Računi za oglašavanje"),
                o("de7fef84", "Obratite se korisničkoj službi za pomoć s ovim računom"),
                o("ff1321b6", "Postavljanje je dovršeno, račun je aktivan"),
                o("c1205320", "Aktivirajte račun za oglase dodavanjem kreditne kartice"),
                o("c0343c0a", "Posljednje plaćanje nije uspjelo, provjerite način plaćanja u računu"),
                o("j56e34a4", "Obratite se korisničkoj službi za pomoć s pristupom računu"),
                o("gef920f2", "Za aktivaciju računa potrebno je početno postavljanje"),
                o("b68dd4d8", "Nemate pristup tom računu, zatražite pomoć administratora tima"),
                o("d637962c", "Nemate nijedan račun za oglašavanje"),
                o("dd087ae0", "Postavite jedan na adresi ads.x.com"),
                o("i3d7dd02", "Račun za oglase koji ispunjava uvjete spreman je za promoviranje poslova"),
                o("cc8f8516", "Izradite račun za oglase kako biste promovirali poslove"),
                o("b4f117b8", "Nemate pristup računu za oglase za promoviranje posla"),
                o("b7347cf4", "Postavite račun za oglase kako biste promovirali poslove"),
                o("h7d03a2a", "Dodajte posao putem nadzorne ploče za zapošljavanje"),
                o("cd5aeec6", "Izrada računa za oglase"),
                o("ged51d2e", "Izradite račun za oglase"),
                o("gcfa25e6", "Ne postoji nijedan račun za oglase koji se može upotrijebiti za vašu organizaciju. Posjetite ads.x.com da biste ga izradili."),
                o("g76fb922", "Novi račun"),
                o("db0a69e7", function (a) {
                    return "Vaš račun za oglase (ID: " + a.adAccountId + ") nov je. Dovršite početno postavljanje u Upravitelju oglasa da biste ga aktivirali.";
                }),
                o("c7bad5cc", "Postavite račun"),
                o("g8c563c0", "Potreban vam je pristup"),
                o("f6f29b17", function (a) {
                    return "Nemate pristup računu za oglase (ID: " + a.adAccountId + "). Zatražite od administratora tima da vas doda na račun putem Upravitelja oglasa.";
                }),
                o("a15bb840", "Potreban je način plaćanja"),
                o("j4e981d9", function (a) {
                    return "Vaš račun za oglase (ID: " + a.adAccountId + ") djelomično je postavljen. Da biste ga aktivirali, dodajte način plaćanja za račun. Svi krediti koje primijenite na taj račun iskoristit će se prije nego što vam se izvrši naplata.";
                }),
                o("af142910", "Plaćanje nije uspjelo"),
                o("a9635acf", function (a) {
                    return "Vaš račun za oglase (ID: " + a.adAccountId + ") aktivan je, ali posljednje plaćanje nije uspjelo. Da biste ga ponovno aktivirali, promijenite način plaćanja za taj račun.";
                }),
                o("d1cca474", "Promjena načina plaćanja"),
                o("fe8b969a", "Korisnička služba može pomoći"),
                o("i8aa0b91", function (a) {
                    return "Za taj je račun za oglase (ID: " + a.adAccountId + ") potrebna pomoć korisničke službe kako biste ga aktivirali. Obavezno u poruku uključite ID računa za oglase. Vaš će zahtjev imati prioritet.";
                }),
                o("d82c2074", "Zatražite podršku"),
                o("ad37d536", "Uvjeti za prijenos nadimka"),
                o("e760074a", "Preuzmite nadimak koji se ne upotrebljava ili zamijenite jedan od vlastitih"),
                o("j003ef92", "Kupite neaktivne nadimke od platforme X za sebe ili za povezane račune ili zamijenite nadimke koje već posjedujete."),
                o("d57a8e42", "Ta je usluga ekskluzivna za Provjerene organizacije i uključuje dodatan trošak po nadimku, počevši od 10.000 USD."),
                o("h9367bd6", "Pošaljite upit za nadimak"),
                o("a6a62e7e", "Započnite postupak tako da odgovorite na nekoliko pitanja putem našeg automatiziranog bota za podršku."),
                o("e5912290", "Pokreće se upit za nadimak"),
                o("c2e24f66", "Potražite poruku podrške u donjem kutu ovog zaslona."),
                o("c94f514e", "Pokrenut je upit za nadimak"),
                o("cf60d152", "Ispunite kratki upitnik u prozoru razgovora da biste poslali upit za nadimak."),
                o("f06b124e", "Česta pitanja"),
                o("h677fdcc", "Kako se određuje cijena nadimaka?"),
                o("a55b39aa", "Cijena se primarno temelji na broju znakova i učestalosti upotrebe riječi. Cijene počinju od 10.000 USD pa sve do iznad 500.000 USD."),
                o("d46bcb3a", "Kako mogu znati je li određeni nadimak dostupan za kupnju?"),
                o("c6bcf72c", "Pošaljite zahtjev putem gumba Početak rada i javit ćemo vam je li dostupan."),
                o("d478604c", "Mogu li kupiti nadimak u ime druge tvrtke?"),
                o("c09f8cd2", "Ne. Tvrtke mogu kupiti nadimke samo u ime svojih povezanih računa koji su zaista povezani s njihovim poslovanjem."),
                o("d814f020", "Od čega se sastoji postupak prodaje? Koliko dugo traje?"),
                o("f600b6f0", "Zatražite kupnju ili zamjenu nadimka pomoću gumba Početak rada. Odgovorit ćemo vam s informacijama o dostupnosti i cijeni u roku od 3 radna dana. Nakon što izvršite plaćanje, prenijet ćemo nadimak na račun koji ste odabrali u roku 1 – 2 dana. Ako želite, možemo premjestiti stari nadimak na neki drugi račun koji posjedujete."),
                o("i8debc4a", "Nudite li popuste za više nadimaka?"),
                o("c5199f3c", "Da, ovisno o broju nadimaka koje kupite i ukupnoj veličini ponude."),
                o("c20f923e", "Imam zaštitni znak – utječe li to na stvari?"),
                o("b2fd4c15", "Pravila o zaštitnim znakovima"),
                o("a690746e", "Zatražite prioritetnu podršku"),
                o("he2dc9b0", "Obratite nam se i pošaljite nam nadimak vaše organizacije i pojedinosti o zahtjevu."),
                o("e5e6479e", "Pošaljite nam poruku e-pošte i navedite nadimak vaše organizacije i pojedinosti upita kako biste dobili brzu podršku."),
                o("ica8392a", "Kada primimo vaš zahtjev, pregledat ćemo ga i dati mu prioritet prema redoslijedu primitka."),
                o("ed37e36e", "Važno: ako nedostaje nadimak vaše organizacije ili upotrebljavate privatnu adresu e-pošte, može doći do kašnjenja u obradi vašeg zahtjeva."),
                o("eb0d4fe2", "Izradi stupac"),
                o("e93d2f8a", "Prilagodite sučelje dodavanjem raznih stupaca, kao što su:"),
                o("e8203d1e", "Pretrage"),
                o("d82fd532", "Privatne poruke"),
                o("c87babee", "i drugo..."),
                o("f1990aa4", "Organizirajte stupce pomoću ploča"),
                o("ib9c9a54", "Zamislite da imate više radnih površina u alatu X Pro. Isključite sve što vam je nepotrebno i usredotočite se samo na teme i alate koji su vam potrebni i kad su vam potrebni."),
                o("fb5ac13e", "Premjesti stupac"),
                o("bd545b7e", "Kliknite ove točkice da biste povukli i ispustili stupac bilo gdje na ploči."),
                o("a98513b6", "Prilagodba stupaca"),
                o("c8759e44", "Prijeđite pokazivačem po vrhu stupca da biste pristupili mogućnostima kao što su:"),
                o("a93e96c8", "Sortiranje objava po najpopularnijima ili najnovijima"),
                o("df300378", "promjena veličine stupca"),
                o("aa263910", "korištenje alata za napredno traženje"),
                o("ab3915aa", "Savjeti i postavke"),
                o("ia03837a", "Ovdje možete:"),
                o("f0bd595c", "upravljati pločama"),
                o("a74e9464", "promijeniti postavke prikaza"),
                o("h254eb92", "otkrili tipkovne prečace"),
                o("j6e669a0", "pokreni obilazak"),
                o("c15802be", "Slanje objave..."),
                o("e5506950", "Ploče"),
                o("b1bd9a8a", "Nova ploča"),
                o("cf1a138f", function (a) {
                    return "Prelazak na ploču – " + a.title;
                }),
                o("g9c2da24", "Otvara se dijaloški okvir radi stvaranja nove ploče"),
                o("hcef6b72", "Otvara se dijaloški okvir radi upravljanja pločama"),
                o("a77dbc7a", "Uređivanje ploče"),
                o("a154a293", function (a) {
                    return "Odabrana ploča " + a.deckName;
                }),
                o("a77bbe9d", function (a) {
                    return "Neodabrana ploča " + a.deckName;
                }),
                o("ha2aae72", "Otvara se dijaloški okvir za upravljanje odabranom pločom"),
                o("hf59ffc8", "Navigacijska traka"),
                o("dd6142d7", "Pro"),
                o("d69fc67a", "Dodaj novi stupac"),
                o("ad61a830", "Sastavite objavu"),
                o("c44f5114", "Postavke poruka"),
                o("c71066fe", "Pokreni obilazak"),
                o("b452e6c2", "Kako ste?"),
                o("j7737bc2", "Hvala što koristite X Pro, kakav vam se dosad čini?"),
                o("e8038d64", "Vaše nam je mišljenje važno jer pridonosi stvaranju boljeg okruženja."),
                o("fce3c5ce", "Pošalji povratne informacije"),
                o("ha39df38", "Osobno"),
                o("ja7b7d1a", "Trenutno imamo problema s povezivanjem. Promjene koje učinite možda se neće spremiti."),
                o("ad5df1d7", function (a) {
                    return "Prelazak na stupac – " + a.title;
                }),
                o("ba7bd92e", "Postavke stupca"),
                o("cc4ff736", "Dijeljenje stupca"),
                o("g684a93a", "Sve promjene stupca vidjet će svi korisnici koji ga gledaju."),
                o("a6bbdc1c", "Samo prikaz"),
                o("f6e88162", "Laboratoriji"),
                o("e6df688c", "Mogućnosti"),
                o("e3f2b93a", "Prikažite ili sakrijte podatke o tom stupcu."),
                o("db257758", "Veličina pretpregleda medijskih sadržaja"),
                o("if2fbab8", "Odgovori – veličina pretpregleda medijskih sadržaja"),
                o("he517d52", "Preimenuj stupac"),
                o("f6eb2cfe", "Naziv stupca"),
                o("d6d39c84", "Stupci moraju imati naziv."),
                o("e5c06aee", "Širina stupca"),
                o("af6a4368", "Promijenite naziv razgovora i pogledajte tko u njemu sudjeluje."),
                o("cdeac5ee", "Postavke privatnih poruka"),
                o("fda7ee26", "Odredite tko vam može slati poruke."),
                o("c4ec8620", "Uvrsti"),
                o("d5f29cd4", "Izuzmi"),
                o("d01a62f8", "Vrijeme i lokacija"),
                o("d614afc8", "Oznake „sviđa mi se”, odgovori i proslijeđene objave"),
                o("fb2bbc7a", "Sadržaj objave"),
                o("a589add2", "Bilo koja od ovih riječi (ILI)"),
                o("d2f8dc8a", "Objave od nekoga"),
                o("e37201ec", "Odgovor nekoj osobi"),
                o("e035e056", "Spominjanje neke osobe"),
                o("ef2d4092", "Isključi riječi"),
                o("d59f395e", "Jezik prikaza"),
                o("g67cd3f2", "Odabir jezika"),
                o("c85f9b9c", "Promijeni jezik"),
                o("b5148188", "Više od"),
                o("hf369320", "Manje od"),
                o("f4dce7b6", "Broj"),
                o("ddafa9a2", "Prikaži mogućnosti"),
                o("c6be8432", "Stupanj angažiranosti"),
                o("e60b9fac", "Prikaži izvorne objave"),
                o("eb441fee", "Prikaži proslijeđene objave"),
                o("e920e6dc", "Prikaži citate"),
                o("g9580526", "Prikaži odgovore"),
                o("i73cbb5c", "U pretraživanje možete dodati samo jedan popis. Na ovo će se pretraživanje primijeniti samo prvi popis."),
                o("c765315d", function (a) {
                    return "Unesite " + a.listHandleListNameFormat + " ili ID popisa";
                }),
                o("a153fbf2", "Upotreba popisa pri pretraživanju"),
                o("bf0d5a7c", "Možete dodati samo jedan popis po pretraživanju."),
                o("c6e8759a", "Popis dodajte u ovom formatu:"),
                o("dd9daca8", "U nazivu popisa točke zamijenite znakom „-”."),
                o("cd71b264", "Saznajte više o popisima."),
                o("ca23d726", "Slike i videozapisi"),
                o("f1fa97a8", "Prijenosi uživo"),
                o("c0bab0ba", "Prikaži samo objave s medijskim sadržajem"),
                o("g9512656", "Prikaži samo potvrđene osobe"),
                o("b967e296", "Prikaži samo osobe koje pratite"),
                o("gc51a2ac", "Bilo kada"),
                o("d42a4916", "Nedavno"),
                o("a2229a06", "U određenom vremenu"),
                o("c1fe6156", "Vrijeme početka"),
                o("cbc02622", "Vrijeme završetka"),
                o("b666573c", "Potraži lokaciju"),
                o("cf260344", "Objave u"),
                o("j5805302", "Područje"),
                o("e592ab3c", "Za bolje rezultate u pretraživanju navedite lokaciju i županiju/državu."),
                o("e8843b5d", function (a) {
                    return a.meters + " m";
                }),
                o("g9e6a4e5", function (a) {
                    return a.kilometers + " km";
                }),
                o("ec688a09", function (a) {
                    return "@" + a.screenName + " vas neće moći dodati na svoje popise, uključujući ovaj.";
                }),
                o("iad54d54", "Ukloni knjižne oznake"),
                o("g4d581a2", "Ispraznite tu i sve mape s knjižnim oznakama"),
                o("fb14aebe", "Isprazni mapu s knjižnim oznakama"),
                o("jf748f40", "Želite li ukloniti sve knjižne oznake?"),
                o("d63a211a", "Ta se radnja ne može poništiti te ćete njome ukloniti sve objave koje ste dodali u knjižne oznake."),
                o("a16ebc1a", "Započnite novi razgovor"),
                o("a1ff1890", "Time će se izbrisati vaš trenutačni razgovor."),
                o("ab352ee0", "Prikaži najnovije objave"),
                o("c004c4d6", "Očisti objave"),
                o("fc702822", "Očistite objave i pregledavajte najnovije objave kako se pojavljuju."),
                o("a2c59056", "Prije nego očistite stupac..."),
                o("d31bdbbe", "Prijeđi na najnovije objave"),
                o("dec3722c", "najnovije objave"),
                o("g33b8c04", "Stvaranje kopije"),
                o("de2c3008", "Duplicirajte stupac."),
                o("a7c01ce0", "Promijeni ime ili izbriši mapu"),
                o("e52e4c82", "Promijenite lokaciju i mogućnosti personalizacije."),
                o("f4d052a4", "Grok (uobičajeni način)"),
                o("fa97c1c6", "Grok (zabavni način)"),
                o("efb37dec", "Način rada"),
                o("h0064892", "Uobičajeno"),
                o("ad86db50", "Izradite ploču"),
                o("hb70ef30", "Stvori ploču od ovog pretraživanja"),
                o("j8a945cc", "Najpopularnije objave"),
                o("f3a4a654", "Provjerene objave"),
                o("c8da0c42", "Fotografije i videozapisi"),
                o("d2cf6f74", "Premium partneri"),
                o("c9b39e70", "Premjesti"),
                o("b9ea5f7c", "Premjestite stupac na drugu ploču."),
                o("g8b6d450", "Mogućnosti obavijesti"),
                o("dd703fbd", function (a) {
                    return "Brisanje stupca – " + a.title;
                }),
                o("d9d11fc6", "Želite izbrisati javni stupac?"),
                o("h17ada6c", "Ako izbrišete javni stupac, sve osobe koje vas prate nepovratno će mu izgubiti pristup."),
                o("hb388fe8", "Izbriši stupac"),
                o("c1343ad6", "Pretvara ovo u stupac za pretraživanje."),
                o("e7a12d72", "Pretvoreno u stupac za pretraživanje."),
                o("f29424f0", "Poništi promjenu"),
                o("h5ff85a2", "Podijeli stupac"),
                o("d32058ba", "Učinite taj stupac javnim da biste omogućili dijeljenje."),
                o("c926a6ca", "Promjene koje učinite vidjet će svi koji prate taj stupac."),
                o("g0175ca2", "Alat za odabir stupaca"),
                o("a800727c", "Povratak na odabir stupaca"),
                o("f318bc40", "Stvori novu mapu"),
                o("e300a9f0", "Stvori mapu za knjižne oznake"),
                o("j341c67c", "Mape moraju imati naziv."),
                o("d00586a6", "Taj stupac nije moguće učitati. Pokušajte stvoriti novi stupac."),
                o("d0d8277e", "Vlasnik je stupac izbrisao ili ga označio privatnim."),
                o("j08fd6fe", "Vaše Zajednice"),
                o("b569a1fa", "Povratak na Zajednice"),
                o("i176bfd2", "Otkrijte popise"),
                o("a57c3292", "Otkrijte nove popise"),
                o("f59f87dc", "Pronađi popise ostalih korisnika"),
                o("a5d70676", "Popisi na kojima se nalazite"),
                o("e377790a", "Povratak na popise"),
                o("e952b8c3", function (a) {
                    return "Popisi korisnika/ce @" + a.userScreenName;
                }),
                o("bc24f834", "Vrati se na Pronađi popise ostalih korisnika"),
                o("ee11d084", "Pretraživanje profila"),
                o("c300f3bc", "Dodaj stupce"),
                o("bd744e9a", "Popuni rezultatom pretraživanja"),
                o("i10d4124", "Počni ispočetka"),
                o("jbff8606", "Slanje upita"),
                o("dbd8a566", "Neke se skice objava ne mogu izbrisati."),
                o("c82be5a8", "Odabrane skice objava izbrisane su."),
                o("ad84af68", "Učitavanje skica objava"),
                o("ef97fb3a", "Nemate nijednu skicu objave"),
                o("f26ece12", "Kada to učinite, pronaći ćete ih ovdje."),
                o("a4911812", "Brisanje skica objava"),
                o("b49be1ca", "Odbaci skice objava"),
                o("ca91dc76", "Ta se radnja ne može poništiti te ćete izgubiti skice objava."),
                o("b38b254a", "Neke zakazane objave nije moguće izbrisati."),
                o("he2e3cc4", "Odabrane zakazane objave izbrisane su."),
                o("jf9faee4", "Učitavanje zakazanih objava"),
                o("aa1cfd48", "Nemate zakazanih objava"),
                o("b2a70dbe", "Brisanje zakazanih objava"),
                o("a07bb1b0", "Odbaci zakazane objave"),
                o("id78e802", "Tu radnju ne možete poništiti, što znači da ćete izgubiti zakazane objave."),
                o("d9a75e16", "Odaberite jedno od toga"),
                o("aa030cd4", "Prikažite najprije preporučene objave."),
                o("c0d2d4aa", "Vremenska crta na naslovnici"),
                o("ecbbbb90", "Pogledajte svoje popise ili popise drugih korisnika."),
                o("c351229c", "Prikažite Zajednice čiji ste dio."),
                o("a2d1df82", "Pronađite što tražite."),
                o("d5387d8a", "Pratite svoje poruke."),
                o("e738198c", "Pogledajte što je aktualno na platformi X."),
                o("ifb8c91e", "Pronađite profil pa pogledajte o čemu se na njemu govori."),
                o("aa0525d0", "Profili"),
                o("cb7844a6", "Pratite svoje obavijesti i spominjanja."),
                o("e64da55e", "Pogledajte svoje zakazane objave."),
                o("h9659832", "Pogledajte svoje skice objava."),
                o("f1b6535e", "Skice objava"),
                o("a24add8a", "Prikažite objave dodane u knjižne oznake."),
                o("ic61c5fc", "Pomakni se prema gore"),
                o("gb19f215", function (a) {
                    return "Članak " + a.title;
                }),
                o("g7751b34", "Zatvori naslagano"),
                o("b94fa48c", "Očisti naslagano"),
                o("dd3dc3cc", "Natrag po naslaganom"),
                o("bc7acfd0", "Podijeljeni stupac"),
                o("a6587d95", function (a) {
                    return "Promjena redoslijeda stupaca – " + a.title;
                }),
                o("fb071dea", "Premjesti stupac"),
                o("c77a6327", function (a) {
                    return "Otvaranje mogućnosti za stupce – " + a.title;
                }),
                o("h53c41f0", "Mogućnosti stupca"),
                o("f7bbbb6d", function (a) {
                    return "Zatvaranje mogućnosti za stupce – " + a.title;
                }),
                o("eee9f83e", "Zatvori mogućnosti stupca"),
                o("a443bbc0", "Zatvori pretraživanje"),
                o("c8b12c8f", function (a) {
                    return "Postavljanje sadržaja stupca – " + a.title;
                }),
                o("fe048090", "Prikaži pregled"),
                o("e57560b4", "Sakrij pregled"),
                o("fb087db0", "Stvaranje zasebnog stupca"),
                o("aa128cd8", "Dodaj kao novi stupac"),
                o("aa4f00c6", "Dijeli ploču"),
                o("fdf97052", "Idi na mogućnosti ploče"),
                o("ed427868", "Želite da ploča bude javna?"),
                o("gecc71a2", "Da biste dijelili ploču, najprije morate postaviti da je javna."),
                o("f0653866", "Dijeljenje ploče"),
                o("b158400a", "Preskoči ovaj korak"),
                o("h15afbce", "Krenimo s postavljanjem"),
                o("ibe6be32", "Prilagodite izgled alata X Pro: odaberite širinu i boju stupca te veličinu teksta i medijskih sadržaja prema vlastitim željama."),
                o("e28eb008", "Otvori postavke prikaza"),
                o("dc8b86e0", "Sad ćemo dodati stupce"),
                o("ee28603e", "Uvezite svoje stupce"),
                o("dad15d22", "Uštedite vrijeme uvozom postojećih stupaca Traži, Popis i Profil. Kasnije ih nećete moći kopirati."),
                o("j85b4522", "Možete i sve ispočetka"),
                o("hfd5ca12", "Hm... nismo uspjeli uvesti vaše stupce."),
                o("b855852a", "Moguće je uvesti samo stupce pretraživanja, popisa i profila. Umjesto toga dodajte stupac naslovnice."),
                o("dc6c806e", "Uvoz vaših stupaca nije uspio"),
                o("a0dfe2f6", "X Pro je praktičan način za prikaz više stupaca na vremenskoj crti u jednom jednostavnom sučelju."),
                o("i8912d28", "Dodajmo malo stupaca..."),
                o("ce0c0f34", "Sad ćemo krenuti u razgledavanje"),
                o("h36d2aa2", "Saznajte praktične savjete za početak rada."),
                o("fbaf9442", "Dodavanje inicijalne ploče"),
                o("b354ea52", "Dodavanje inicijalne ploče..."),
                o("if195eb8", "Dodavanje stupaca..."),
                o("ea07517c", "Stupac je izbrisan."),
                o("habced9e", "da biste obnovili stupac."),
                o("g4fcb4f8", "Stupac je obnovljen."),
                o("d4429cba", "Hmm... ta ploča ne postoji. Pokušajte odabrati drugu."),
                o("g2c6e34a", "Upravljajte veličinom fonta, bojom i pozadinom."),
                o("bf2890a6", "Vizualno skaliranje"),
                o("h098a550", "Zadana širina stupca"),
                o("ab248726", "Zadani pretpregled za medijske sadržaje"),
                o("jdaf161c", "Kartica za poruke"),
                o("ge0fcfd0", "Infokartice"),
                o("e1cab6e8", "Želite li promjene primijeniti na postojeće stupce?"),
                o("ce2e487c", "Ako promijenite sve stupce, ažurirat će se svi stupci na svim vašim pločama. Ako odaberete Ne, nove postavke primijenit će se samo na stupce koje stvorite odsad pa nadalje."),
                o("fdbd90a6", "Da, promijeni sve stupce"),
                o("h8affe68", "Ne, samo na nove stupce"),
                o("f06885b6", "Mogućnosti veličine medijskih sadržaja u stupcima"),
                o("e4bab2d0", "Mogućnosti širine stupca"),
                o("f0e71094", "Prikaži karticu za poruke"),
                o("aa25a5a6", "Karticu za poruke koja se može sažeti naći ćete pri dnu zaslona."),
                o("g3da3c90", "Prikaži infokartice"),
                o("b08a8656", "Prikaži infokartice prilikom prelaska preko interaktivnih stavki"),
                o("g9df1984", "Dodaj ploču"),
                o("df77af70", "Odabir emojija za ploču"),
                o("ee7765ba", "Odabir emojija"),
                o("e0127c83", function (a) {
                    return "Promijeni emoji " + a.emoji;
                }),
                o("hb8b6254", "Svi mogu pristupiti javnoj ploči na vašem profilu. I vi možete podijeliti poveznice na nju. Ako se predomislite, ponovno je možete postaviti kao privatnu. Saznajte više"),
                o("gfbaf4e8", "Ta ploča ne može odmah biti javna"),
                o("ae04848a", "Ta ploča sadrži stupce povezane s vašim računom za X. Da biste ploču postavili tako da bude javna, morate ih ukloniti. Saznajte više"),
                o("d606207a", "Izbriši ploču"),
                o("h95cb00e", "Ta će se ploča trajno izbrisati. To nećete moći poništiti."),
                o("f50c9834", "Ta će se ploča trajno izbrisati. Kada je izbrišete, više je nećete moći dohvatiti."),
                o("cb861826", "Promijeni raspored ploče"),
                o("i5896b2b", function (a) {
                    return "Uređivanje ploče „" + a.title + "”";
                }),
                o("ef602cab", function (a) {
                    return "Izbriši ploču „" + a.title + "”";
                }),
                o("b44b9d83", function (a) {
                    return "Ukloni ploču „" + a.title + "” iz istaknutih";
                }),
                o("je4a847f", function (a) {
                    return "Istakni ploču „" + a.title + "”";
                }),
                o("ad41be88", "Premjesti stupac na ploču"),
                o("cb82860a", "Stupac nije pronađen"),
                o("icbecd02", "Dodaj stupac"),
                o("fdf1a2c6", "Dodaj ploču"),
                o("d25acc28", "Što je obuhvaćeno?"),
                o("fe5df266", "Želite da stupac bude privatni?"),
                o("i3206148", "Ako izbrišete javni stupac, sve osobe koje vas prate izgubit će mu pristup."),
                o("c65d210c", "Postavi privatni stupac"),
                o("j4d54f1e", "Napredni alat u stvarnom vremenu za osobe koje često koriste X."),
                o("je0526a0", "Na jednom zaslonu pratite više vremenskih crta. Pratite i organizirajte sadržaj te sa svojim zajednicama komunicirajte u stvarnom vremenu."),
                o("d128af54", "Prijavite se za X Premium"),
                o("bacd7195", function (a) {
                    return a.fullName + " (@" + a.screenName + ") na platformi X";
                }),
                o("e5b4aafa", "Vaša je internetska veza prekinuta."),
                o("g43c3b36", "Ponovno se spojite na internet za nastavak."),
                o("hafe83ec", "Pritisnite Zatvori za zatvaranje aplikacije."),
                o("b2ec74fe", "zatvori"),
                o("hf836e5f", function (a) {
                    return a.tweetText + " " + a.username + " " + a.screenName + " " + a.views + " pregleda " + a.timeAgo;
                }),
                o("a7a90902", "Pritisnite Odaberi za prikaz"),
                o("cb0a3b5e", "Ta objava može sadržavati osjetljivi medijski sadržaj. Jeste li sigurni da je želite prikazati?"),
                o("a4eb1304", "Uvijek se možete ponovno prijaviti."),
                o("b86c2e12", "Prijavite se kako biste pretražili sav sadržaj platforme X."),
                o("ia13bd7c", "tipkovnica"),
                o("f9fa40c8", "Iskusite najboje dijelove platforme X"),
                o("gb6a7f62", "Vaš je kod istekao. Ako želite pokušati ponovno, odaberite gumb u nastavku da biste dobili novi kod."),
                o("ge19602a", "Zatraži novi kod"),
                o("dd4ec2e8", "Prijavite se na X odlaskom na URL u nastavku na svom laptopu ili mobilnom uređaju te unosom koda prikazanog ovdje."),
                o("f4d7084c", "Prijavite se na X putem jedne od dviju opcija:"),
                o("ebc1accc", "Skenirajte ovaj QR kod"),
                o("a4742bc0", "Posjetite URL u nastavku na svom laptopu ili mobilnom uređaju i unesite kod prikazan ovdje."),
                o("f260dea2", "x.com/tvlogin"),
                o("h797e380", function (a) {
                    return "" + a.url;
                }),
                o("cf8eec84", function (a) {
                    return "" + a.url;
                }),
                o("g7ee7019", function (a) {
                    return "Prijavite se kako biste vidjeli videozapise korisnika " + a.name + ".";
                }),
                o("fb83778c", "Prijavite se kako biste vidjeli videozapise ovog korisnika."),
                o("dd4bbaea", "Nemate videozapisa za prikaz."),
                o("i71d6193", function (a) {
                    return "Od korisnika " + a.name + " nema videozapisa za prikaz.";
                }),
                o("adb512f0", "Nedavni videozapisi"),
                o("bef78294", function (a) {
                    return "" + a.formattedCount;
                }),
                o("hda3bb87", function (a) {
                    return "pratim";
                }),
                o("cd3f5206", "Slijedi:"),
                o("c930299f", function (a) {
                    return "Slijedi za " + a.count + ":";
                }),
                o("b2e9f19c", "Ponovno reproduciraj posljednji videozapis"),
                o("de906774", "Brzina"),
                o("caca839e", "Skriveni titlovi"),
                o("b049f56c", "Kvaliteta"),
                o("fa7169d8", "Da biste prijavili ovaj sadržaj, posjetite URL u nastavku na prijenosnom računalu ili mobilnom uređaju"),
                o("c973ec9c", "Korisničko ime računa"),
                o("e9670a81", function (a) {
                    return "@" + a.screenName;
                }),
                o("d0e1b720", "URL sadržaja"),
                o("a4ee9394", "Bijela"),
                o("a9f3474c", "Cijan"),
                o("i50b6538", "Magenta"),
                o("jffeb664", "Crvena"),
                o("e375c2d0", "Crna"),
                o("c2c5dea4", "Boja fonta"),
                o("ce71b3d0", "Obitelj fontova"),
                o("d2eb1582", "Zadano (Sans-serif)"),
                o("e684030e", "Arial (Sans-serif)"),
                o("jad3900c", "Times New Roman (Serif)"),
                o("e205f3a0", "Monospace (Sans-serif)"),
                o("d207d39a", "Neprozirnost teksta"),
                o("a562039c", "Boja pozadine"),
                o("h44e879e", "Neprozirnost pozadine"),
                o("b843ced4", "Automatski"),
                o("e30d2cea", "0,5x"),
                o("d030db62", "1,25x"),
                o("ga63a594", "1,5x"),
                o("f571bc5a", "1,75x"),
                o("d0284204", "2x"),
                o("b7d7f606", "Premotaj prema naprijed"),
                o("ee0f61ca", "Premotaj prema natrag"),
                o("i2d14148", "Poništi oznaku „sviđa mi se”"),
                o("a1eb471a", "Ukloni oznaku „ne sviđa mi se”"),
                o("e40051e8", "Ukloni knjižnu oznaku"),
                o("g9ecf0e8", "Prikaz odgovora"),
                o("aa97ae7e", "Kontrole televizora"),
                o("ed170a6a", "Klizač"),
                o("ee838ea0", "Ako uključite praćenje ove teme, lakše ćemo vam personalizirati vremensku crtu naslovnice i sučelje na cijeloj platformi X"),
                o("h85446ce", "Taj preglednik više nije podržan."),
                o("e24d1fa6", "Da biste i dalje koristili x.com, prijeđite na podržani preglednik. Popis podržanih preglednika pogledajte u našem centru za pomoć."),
                o("a138aeb2", "Nije dostupan JavaScript."),
                o("d8e122c2", "Otkrili smo da je u vašem pregledniku onemogućen JavaScript. Da biste i dalje koristili x.com, omogućite JavaScript ili prijeđite na podržani preglednik. Popis podržanih preglednika pogledajte u našem centru za pomoć."),
                o("f1a9e3a2", "Saznajte najnovije vijesti i svjetske novosti s područja politike, popularne glazbe, svjetskih događaja i sportskih rezultata u stvarnom vremenu, uz što manje preuzetih podataka."),
                o("bb402b62", "X Pro je prilagodljiva nadzorna ploča za praćenje aktualnih događaja."),
                o("ed617674", "360"),
                o("e23b20a0", "Odustani"),
                o("a620fcf0", "Učitavanje slike"),
                o("e9e2064c", "Došlo je do pogreške, ali ne brinite – niste vi krivi."),
                o("d7060c80", "Osvježi"),
                o("a0493514", "Pokušaj ponovno"),
                o("ff3dd27c", "Zadano"),
                o("b554fcf4", "Svijetlo"),
                o("j590b148", "Srednje svijetlo"),
                o("e7d4ee86", "Srednje veliko"),
                o("ia423ebc", "Srednje tamno"),
                o("a2cf0942", "Posve tamno"),
                o("j824dc06", "Pretraživanje emojija"),
                o("fffb3384", "Nisu pronađeni emotikoni"),
                o("j3d20752", "Pokušajte potražiti nešto drugo."),
                o("d67ad796", "Odaberite zadanu boju kože"),
                o("e6388bfa", "Očisti sve"),
                o("j7c67eca", "Nedavno"),
                o("da539d38", "Rezultati pretraživanja"),
                o("d95eb228", "Natrag"),
                o("af8fa2ae", "Zatvori"),
                o("ef8b2f54", "Pročitaj grafikon"),
                o("d567ceda", "vertikalno"),
                o("f7b30768", "naslagano"),
                o("hcd54328", "grupirano"),
                o("affbaf62", "Više informacija"),
                o("c388d026", "U redu"),
                o("ha20397c", "Značajke pristupačnosti"),
                o("baf7a43c", "Pristupačnost"),
                o("e8f674ab", function (a) {
                    return "Ovo je trakasti grafikon " + a.chartType + ". Naslov je grafikona " + a.chartTitle + ". Ukupni broj kategorija: " + a.noOfCategories + ". Minimalna je vrijednost " + a.minValue + ", a maksimalna " + a.maxValue + ". Grafikonom se pomičite pomoću navigacijskih kontrola.";
                }),
                o("d969327c", "Reproduciraj audioverziju"),
                o("d8cbbcd4", "Reproducirajte audiografikon. Pritisnite da biste reproducirali audioverziju grafikona ili pritisnite tipku „A” na svakoj pojedinoj podatkovnoj točki da biste dobili njezinu audioverziju"),
                o("dec1d7ef", function (a) {
                    return a.label + ", " + a.group + ", " + a.value;
                }),
                o("f765bead", function (a) {
                    return "podaci bez oznake, " + a.group + ", " + a.value;
                }),
                o("idea1817", function (a) {
                    return a.label + ", " + a.value;
                }),
                o("fe94be6b", function (a) {
                    return "podaci bez oznake, " + a.value;
                }),
                o("b15c0a18", "Želite odbaciti promjene?"),
                o("aebf81c8", "Izvršene promjene neće se spremiti."),
                o("aa744c1e", "Nastavi uređivati"),
                o("fe04d89a", "Odbaci"),
                o("bb5d8cd2", "Da"),
                o("dc33d78a", "Naslovna slika članka"),
                o("j190bf1a", "UŽIVO"),
                o("e3fcbdba", "Odbaci"),
                o("jc0b3a8c", "Opis slike"),
                o("ia1d2e58", "Autor označio oznakom „sviđa mi se”"),
                o("h81f3036", "Članak"),
                o("bed2945c", "pročitaj opis slike"),
                o("j2eea17a", "Sljedeći medijski sadržaji obuhvaćaju potencijalno osjetljiv sadržaj."),
                o("b05a39b2", "Prikaz"),
                o("a7cd5cf4", "Videozapis"),
                o("b6eb8f6a", "Prijenos uživo"),
                o("dcc2b9b3", function (a) {
                    return "Reproduciraj " + a.locVideoType;
                }),
                o("hf4ffd4d", function (a) {
                    return "Reproduciraj " + a.locVideoType + " uživo";
                }),
                o("f6e90cd7", function (a) {
                    return "Trajanje: " + a.hoursWord + " " + a.minutesWord + " " + a.secondsWord;
                }),
                o("e7d191ed", function (a) {
                    return "Započinje u " + a.hoursWord + " " + a.minutesWord + " " + a.secondsWord;
                }),
                o("daa73df1", function (a) {
                    return a.viewerCount + " prikaz" + n(a.viewerCount, "a", "", "a");
                }),
                o("b4f19b97", function (a) {
                    return a.listItem1 + " i " + a.listItem2;
                }),
                o("i0135403", function (a) {
                    return a.listItem1 + ", " + a.listItem2;
                }),
                o("f1574a4b", function (a) {
                    return a.listItem1 + " i " + a.listItem2;
                }),
                o("ec72e2f8", "Počni pratiti"),
                o("d9d2a865", function (a) {
                    return "Reproduciraj" + a.ttc_card_cta_play;
                }),
                o("a8422cd5", function (a) {
                    return "Trgovina" + a.ttc_card_cta_shop;
                }),
                o("ff1b8c17", function (a) {
                    return "Kupite odmah" + a.ttc_card_cta_shop_now;
                }),
                o("d04488ef", function (a) {
                    return "Rezerviraj" + a.ttc_card_cta_book;
                }),
                o("b0b0cfb7", function (a) {
                    return "Povezivanje" + a.ttc_card_cta_connect;
                }),
                o("ea5247d5", function (a) {
                    return "Narudžba" + a.ttc_card_cta_order;
                }),
                o("b7b58677", function (a) {
                    return "Otvoreno" + a.ttc_card_cta_open;
                }),
                o("g15f6870", "Saznajte više"),
                o("d1ff55d8", "Instaliraj"),
                o("g40f106c", "Pošaljite nam poruku"),
                o("j393e386", "Pošaljite nam privatnu poruku"),
                o("a771d32e", "Pošalji mi privatnu poruku"),
                o("d8e9c24c", "Pošaljite privatnu poruku"),
                o("h2f9258f", function (a) {
                    return a.appStarRating + "/5,0 zvjezdica – broj ocjena: " + a.appNumRatings;
                }),
                o("cc5508a9", function (a) {
                    return "Početak: " + a.timestampUTC;
                }),
                o("f4520a5d", function (a) {
                    return "Objava " + a.action;
                }),
                o("f17dfdb6", "Reproduciraj"),
                o("j836de8a", "Zaštićeni račun"),
                o("f4b8dc08", "Pretplaćeni račun"),
                o("f936caa6", "Račun za prevoditelje"),
                o("ac72ee4e", "Potvrđeni račun"),
                o("f49e0aac", "Daje podatke o potvrđenim računima."),
                o("f59bdb94", "Pruža pojedinosti o zaštićenim računima."),
                o("d7e50a66", "Saznajte više"),
                o("fc065ee4", "Saznajte više o Pretplatama"),
                o("e453f536", "Što su Pretplate?"),
                o("bd4cb7a0", "Kada se pretplatite na svoje omiljene autore sadržaja, dobivate bonus sadržaj, a oni zarade nešto novca."),
                o("g7099a02", "Dodatne informacije"),
                o("c2637ef6", "Shvaćam"),
                o("efb17190", "Prati vas"),
                o("g57b5f6c", "Vaš pretplatnik"),
                o("a77a27c0", "Pretplaćen/na"),
                o("gdd173da", "Odgovor omogućuje Grok u Zabavnom načinu rada"),
                o("dfd6eeac", "Odgovor omogućuje Grok"),
                o("deceb214", "Sliku omogućuje Grok"),
                o("j05496ce", "DeepSearch značajke Grok"),
                o("befddd48", "Prikaži"),
                o("hf3f8e3a", "Prikaži još"),
                o("h504ea5e", "Izradite svoju verziju uz značajku Grok"),
                o("eb722de2", "Sami pitajte Groka"),
                o("ib5110be", "Sami isprobajte DeepSearch značajke Grok"),
                o("bb5c5864", "Citat"),
                o("a8b58cf4", "Pokaži tu nit razgovora"),
                o("i5f742fe", "Prikaži tu anketu"),
                o("fc45ccc6", "Ugrađeni videozapis"),
                o("a9edea48", "Ponovno učitaj"),
                o("d26d8730", "Kopiraj adresu videozapisa"),
                o("f1b6bcec", "Kopiraj adresu GIF-a"),
                o("j25d7cca", "Sakrij titlove"),
                o("a858b25c", "Prikaži titlove"),
                o("faf9f484", "Oglas"),
                o("ae2ea9e7", function (a) {
                    return "Oglašivač: " + a.advertiserName;
                }),
                o("hea01798", "Kliznik tražila"),
                o("f8a09386", "Prikaz u aplikaciji Periscope"),
                o("gf2b6eee", "Slika-u-slici"),
                o("b3160a69", function (a) {
                    return a.volumePercent + " posto";
                }),
                o("fb236728", "Pauziraj"),
                o("e9bd453e", "Ponovno reproduciraj"),
                o("d46b00b0", "Preskoči na prijenos uživo"),
                o("ec8ab8b4", "Onemogućite korisnika/cu"),
                o("b8b6344a", "Omogući prikaz tweetova"),
                o("c9a642fa", "Kliznik za glasnoću"),
                o("c27e60b0", "Cijeli zaslon"),
                o("d2969f10", "Zatvori prikaz na cijelom zaslonu"),
                o("f06f2e53", function (a) {
                    return a.currentTime + " od " + a.durationTime;
                }),
                o("eeb64451", function (a) {
                    return "Gledajte " + a.advertiserName;
                }),
                o("f3c268a5", function (a) {
                    return "Kupujte u trgovini " + a.advertiserName;
                }),
                o("g60001bb", function (a) {
                    return "Pogledajte " + a.advertiserName;
                }),
                o("dff1ddd9", function (a) {
                    return "Idi na " + a.advertiserName;
                }),
                o("b0b22805", function (a) {
                    return "Posjetite " + a.advertiserName;
                }),
                o("c67e71aa", "Gledajte odmah"),
                o("a6ada13e", "Odmah kupujte"),
                o("j0f12222", "Pogledajte više"),
                o("f569f7c8", "Idi na web-mjesto"),
                o("j0c6772a", "Posjetite web-mjesto"),
                o("f73003aa", "Videozapis će se reproducirati nakon oglasa"),
                o("b3112b8a", "Preskoči"),
                o("h6333ad0", "Preskoči oglas"),
                o("c59da417", function (a) {
                    return "Preskoči oglas za " + a.seconds;
                }),
                o("c3c147cf", function (a) {
                    return "Preskoči " + a.seconds;
                }),
                o("h9b3104e", "Postavke videozapisa"),
                o("ha3efce4", "Automatski"),
                o("hd8d044d", function (a) {
                    return "Automatski (" + a.quality + ")";
                }),
                o("a7bf9962", "Preuzmi videozapis"),
                o("ccc97152", "Brzina reprodukcije"),
                o("h531ade0", "Kvaliteta videozapisa"),
                o("e8b5757c", "0,25x"),
                o("e7e954de", "0,5x"),
                o("g07ffe66", "0,75x"),
                o("d8bede9e", "1x"),
                o("j41845c8", "1,25x"),
                o("e9eeed9e", "1,5x"),
                o("fe45dc84", "1,75x"),
                o("e791190a", "2x"),
                o("dc5df829", function (a) {
                    return a.resolution + " p" + a.frameRate;
                }),
                o("c4d66d2e", "Ne primate najoptimalniju kvalitetu zbog odabira preglednika. Preporučujemo vam upotrebu preglednika koji podržava HEVC."),
                o("a681babd", function (a) {
                    return "Pogledajte odmah na " + a.trimmedHostname;
                }),
                o("db3cd325", function (a) {
                    return "Posjetite " + a.trimmedHostname;
                }),
                o("f1ad0df1", function (a) {
                    return "Oglas · " + a.timeRemaining;
                }),
                o("ef16ab2b", function (a) {
                    return "Oglašivač: " + a.advertiserName + " · " + a.timeRemaining;
                }),
                o("a15adf2c", "ovog obrasca"),
                o("c1658fc6", "Taj medijski sadržaj nije moguće reproducirati."),
                o("h519ae04", "Ti su medijski sadržaji onemogućeni zbog kršenja autorskih prava."),
                o("ce871584", "To je emitiranje uživo završilo."),
                o("c101eb96", "Taj prijenos uživo nije dostupan."),
                o("gb24a514", "Taj je medijski sadržaj onemogućen na temelju prijave vlasnika autorskih prava."),
                o("hcaf3e63", function (a) {
                    return "Ti su medijski sadržaji onemogućeni zbog kršenja autorskih prava čiji je vlasnik " + a.holder + ".";
                }),
                o("if05c038", "Taj prijenos uživo nije dostupan za vašu lokaciju."),
                o("d420171b", function (a) {
                    return "Videozapis nije dostupan zbog kršenja autorskih prava čiji je vlasnik " + a.holder;
                }),
                o("b1eb72fa", "Nažalost, taj je videozapis onemogućen za neka područja. Pričekajte nekoliko trenutaka dok ne dohvatimo vašu lokaciju. Omogućite postavke lokacije u pregledniku."),
                o("c057680c", "Taj videozapis nije moguće reproducirati u tom pregledniku. Pokušajte u nekom drugom web-pregledniku."),
                o("i5dfae6e", "Taj videozapis nije dostupan za vašu lokaciju."),
                o("c2388276", "Taj je videozapis izbrisan."),
                o("d2c96140", "Pokazatelj zvuka gosta");
            o("f6dc9146", "REPRODUKCIJA"),
                o("d30c74fe", "Glasnoća"),
                o("f2d4e6f2", "Pogledajte ponovno"),
                o("e9f1af3a", "Saznajte više"),
                o("f1881d86", "Na tu se objavu ne može odgovoriti i objava se ne može podijeliti ni označiti oznakom „sviđa mi se”."),
                o("j3d37222", "X ima zakonsku obvezu to napomenuti."),
                o("e461d0ee", "Saznajte najnovije vijesti"),
                o("d1386940", "Ostanite u toku"),
                o("ecda5f9e", "Sadrži netočne informacije"),
                o("a423473c", "Obavezna pravna napomena"),
                o("b3296688", "Vidljivost je ograničena"),
                o("ccd32094", "Odmah"),
                o("abfcce0d", function (a) {
                    return "Prije " + a.amountOfTime;
                }),
                o("ae408b76", "Proslijedili ste objavu"),
                o("j355f008", "Prikvačena objava"),
                o("habf9678", "Prikvačio autor"),
                o("db0798ed", function (a) {
                    return "Tema " + a.topicName;
                }),
                o("dc716ec9", function (a) {
                    return "Preporučena tema: " + a.topicName;
                }),
                o("fbc2003c", "Zatvoreno"),
                o("h5051dd8", "Otkazano"),
                o("bb5f91a3", function (a) {
                    return a.count + " u ovom Prostoru";
                }),
                o("c83eea99", function (a) {
                    return a.participant + " i još " + a.count + " slušatelj" + n(a.count, "a", "", "a");
                }),
                o("cdff6cd3", function (a) {
                    return "Govori " + a.speaker + ", a " + a.count + " sluša" + n(a.count, "ju", "", "ju");
                }),
                o("df006f4f", function (a) {
                    return a.count + " zainteresiran" + n(a.count, "a", "", "ih");
                }),
                o("c889af33", function (a) {
                    return a.count + " se uključi" + n(a.count, "lo", "o/la", "lo");
                }),
                o("d6f2056f", function (a) {
                    return a.count + " slušatelj" + n(a.count, "a", "", "a");
                }),
                o("jbc5f47a", "Okno Prostori"),
                o("gfe2830f", function (a) {
                    return "još " + n(a.count, "njih ", "", "njih ") + a.count;
                }),
                o("dbeae6cf", function (a) {
                    return "još " + a.count + " slušatelj" + n(a.count, "a", "", "a");
                }),
                o("d2543d97", function (a) {
                    return "+" + a.count;
                }),
                o("dc718e53", function (a) {
                    return "+još " + n(a.count, "njih ", "", "njih ") + a.count;
                }),
                o("d0e7b11b", function (a) {
                    return a.date + " u " + a.time;
                }),
                o("b4349cbc", function (a) {
                    return "" + a.relativeDay;
                }),
                o("ebe41367", function (a) {
                    return "Trajanje " + a.time;
                }),
                o("efce3d9b", function (a) {
                    return a.hours + " " + a.minutes + " " + a.seconds;
                }),
                o("d925a4f9", function (a) {
                    return "Preostal" + n(a.count, "e su još " + a.formattedCount + " minute", "a je još " + a.formattedCount + " minuta", "o je još " + a.formattedCount + " minuta");
                }),
                o("ib15cddb", function (a) {
                    return "Preosta" + n(a.count, "la su još " + a.formattedCount + " sata", "o je još " + a.formattedCount + " sat", "lo je još " + a.formattedCount + " sati");
                }),
                o("db9ed19f", function (a) {
                    return "Preosta" + n(a.count, "la su još " + a.formattedCount + " dana", "o je još " + a.formattedCount + " dan", "lo je još " + a.formattedCount + " dana");
                }),
                o("e1ebcecb", function (a) {
                    return a.formattedDays + " dan" + n(a.days, "a", "", "(a)") + " Preosta" + n(a.hours, "la su još " + a.formattedHours + " sata", "o je još " + a.formattedHours + " sat", "lo je još " + a.formattedHours + " sati");
                }),
                o("cc1da1fd", function (a) {
                    return a.formattedHours + " sat" + n(a.hours, "a", "", "i") + " Preostal" + n(a.mins, "e su još " + a.formattedMins + " minute", "a je još " + a.formattedMins + " minuta", "o je još " + a.formattedMins + " minuta");
                }),
                o("f89a5d60", "Voditelj(ica)"),
                o("ce2cfb36", "Samo za pretplatnike"),
                o("df06241c", "Zajednica"),
                o("b03e162a", "Slušaj uživo"),
                o("b3d828ee", "Uključeni"),
                o("g519ec2a", "Reproduciraj snimku"),
                o("c6000450", "Podsjetnik je postavljen"),
                o("db44ff5c", "Postavi podsjetnik"),
                o("f7b6346a", "Odmah započni"),
                o("cc1f75ac", "Prostori"),
                o("bd08d1b2", "Nema detaljnijih podataka"),
                o("j8b01b27", function (a) {
                    return "Prostor " + a.title + " koji je vodio/la " + a.host + " je otkazan";
                }),
                o("fda9f48c", "Prostor je otkazan"),
                o("jf7853f7", function (a) {
                    return "Prostor " + a.title + " koji je vodio/la " + a.host + " se zatvorio";
                }),
                o("i1a29920", "Prostor se zatvorio"),
                o("db467ffe", "Uključite se u Prostor"),
                o("i8dc3993", function (a) {
                    return "Voditelj: " + a.host;
                }),
                o("eb0b05b9", function (a) {
                    return "i još " + a.count + " korisnik" + n(a.count, "a", "", "a");
                }),
                o("d19b9f77", function (a) {
                    return a.action + " za " + a.title + ", s voditeljem/icom " + a.host + ", " + a.scheduledStart;
                }),
                o("e679d5d7", function (a) {
                    return "Pokretanje stavke " + a.title + " zakazano je za " + a.scheduledStart + " sada";
                }),
                o("ea4258b7", function (a) {
                    return a.action + " za prostor, " + a.scheduledStart;
                }),
                o("dcbcaa23", function (a) {
                    return "Reproduciraj snimku: " + a.title;
                }),
                o("gaeb997e", "Više"),
                o("f8b21226", "Uključi se"),
                o("e1b95ab0", "Zadnja izmjena"),
                o("i308d42c", "Postoji nova verzija te objave"),
                o("h092d520", "Postoji nova verzija te objave."),
                o("b74bf8b8", "Slika"),
                o("ha9ed08c", "Izrađeno uz"),
                o("bff61470", "Kliknite ovdje za uređivanje"),
                o("f4393d0f", function (a) {
                    return "Pripisano korisniku/ci " + a.name;
                }),
                o("f8e8e32e", "Vi"),
                o("df6703d3", "Vi"),
                o("c20f7e9f", function (a) {
                    return n(a.otherUsersCount, "još njih " + a.otherUsersCount, j.createElement(j.Fragment, null, "", a.secondName), "još njih " + a.otherUsersCount);
                }),
                o("he26f627", function (a) {
                    return n(a.otherUsersCount, "još njih " + a.otherUsersCount, j.createElement(j.Fragment, null, "", a.secondName), "još njih " + a.otherUsersCount);
                }),
                o("gea7aa3c", "Sljedeće"),
                o("b6462b32", "Prethodno"),
                o("caddb529", "i"),
                o("ff31714c", function (a) {
                    return " i još " + n(a.othersCount, "njima " + a.othersCount, "jednoj osobi", "njima " + a.othersCount);
                }),
                o("e06c99b7", "i"),
                o("i4e2f96c", function (a) {
                    return " i još " + n(a.othersCount, "njima " + a.othersCount, "jednoj osobi", "njima " + a.othersCount);
                }),
                o("ga629a8c", "Prikaz osoba u razgovoru"),
                o("d6f781e4", "Kada se pretplatite na svoje omiljene autore sadržaja na platformi X, dobivate bonus sadržaj, a oni zarade nešto novca."),
                o("dab106f8", "Član"),
                o("a46e92c2", "Mod."),
                o("f9633e62", "Admin"),
                o("a3dfd0cb", function (a) {
                    return "objava" + a.noun;
                }),
                o("d7580651", function (a) {
                    return "Objava" + a.noun;
                }),
                o("c68b6367", function (a) {
                    return "Članak" + a.noun;
                }),
                o("h13ffc88", "Govor"),
                o("c8c4600e", "Glasovna objava"),
                o("de8c5eb2", "Reproduciraj zvuk"),
                o("ec286028", "Pauziraj zvuk"),
                o("ad77feb6", "Titlovi nisu dostupni"),
                o("e82adfeb", function (a) {
                    return a.count + " web-stranic" + n(a.count, "e", "a", "a");
                }),
                o("cfb8c1f7", function (a) {
                    return a.count + " nov" + n(a.count, "e objave", "u objavu", "ih objava");
                }),
                o("g78032d5", function (a) {
                    return "Web-stranice i objave: " + a.count;
                }),
                o("j3de54a8", "BILJEŠKE"),
                o("a6a6ced4", "Napomena o čitanju"),
                o("dbc0c2f4", "Dodaj u knjižne oznake"),
                o("d6885d3e", "Prikaži Zajednicu"),
                o("d5a48014", "Naslov"),
                o("b92b6156", "Podnaslov"),
                o("ec5ed598", "Tijelo"),
                o("c69eb656", "Puno radno vrijeme"),
                o("g46ae43c", "Ugovor na puno radno vrijeme"),
                o("jf7d4cc6", "Pola radnog vremena"),
                o("b2214572", "Ugovor o zapošljavanju na određeno vrijeme"),
                o("f8337bd6", "godišnje"),
                o("i935bf88", "po satu"),
                o("b75b8ffd", function (a) {
                    return a.salary + " " + a.interval;
                }),
                o("c5954d30", "Popis"),
                o("fe64170c", "Odabir ne možete naknadno promijeniti"),
                o("g10ace38", "Mogućnosti ankete"),
                o("a3edf99a", "Konačni rezultati"),
                o("c2b81e9d", function (a) {
                    return a.formattedCount + " glas" + n(a.count, "a", "", "ova");
                }),
                o("e86732e4", "Odabrano"),
                o("a35a5b10", "Osobe koje prate korisnika koje vi poznajete"),
                o("fc8cd112", "Korisnika/cu ne prati nitko od korisnika/ca koje vi pratite"),
                o("df8cd2af", function (a) {
                    return "Slajd " + a.currentSlide + " od " + a.itemCount + " – vrtuljak. " + a.type + ". " + a.altText;
                }),
                o("d70740da", "Sljedeći slajd"),
                o("c4d53ba2", "Prethodni slajd"),
                o("h6405c17", function (a) {
                    return "Slajd " + a.currentSlide + " od " + a.itemCount + " – vrtuljak";
                }),
                o("a3efd2c4", "Tema"),
                o("b91c8e53", function (a) {
                    return "Kartica s temama za " + a.title + ".";
                }),
                o("b3826295", function (a) {
                    return "Kartica s temama za " + a.title + ", " + a.description + ".";
                }),
                o("c9bb65db", function (a) {
                    return "Kolekcija slika sa slajdovima duljine " + a.slidesLength + ". " + a.heroVanityContent + ". " + a.heroTitleContent;
                }),
                o("e1bddf52", "Povucite da biste zakrenuli"),
                o("f0e1fb48", "U ovom pregledniku nije moguć pretpregled tog oblika videozapisa. Videozapis možda ipak možete prenijeti"),
                o("c2fc878d", function (a) {
                    return "Ograničenje broja znakova premašili ste za " + a.count;
                }),
                o("db11b27f", function (a) {
                    return "Preostalo je: " + a.count + " znak" + n(a.count, "a", "", "ova");
                }),
                o("bb7b821a", "Možete odgovoriti"),
                o("fc41217b", function (a) {
                    return "Odgovoriti mogu računi koje korisnik/ca @" + a.screenName + " prati ili koje je spomenuo/la";
                }),
                o("e5dc76d0", "Na taj razgovor možete odgovoriti"),
                o("ab105904", "Tko može odgovoriti?"),
                o("fd1cda7a", "Ne možete odgovoriti na taj razgovor"),
                o("f064f477", function (a) {
                    return "Odgovoriti mogu računi koje korisnik/ca @" + a.screenName + " prati ili koje je spomenuo/la";
                }),
                o("ea9ac5c9", function (a) {
                    return "Odgovoriti mogu računi koje je korisnik/ca @" + a.screenName + " spomenuo/la";
                }),
                o("d2ae1499", function (a) {
                    return "Odgovoriti mogu računi koji su pretplaćeni na korisnika/cu @" + a.screenName + " ili koje korisnik/ca spomene";
                }),
                o("a4e254ff", function (a) {
                    return "Odgovoriti mogu provjereni računi ili računi koje je @" + a.screenName + " spomenuo/la";
                }),
                o("j1b02fd8", "Provjeri autentičnost"),
                o("daba4484", "Tu objavu mogu vidjeti samo autor i moderatori"),
                o("f956070a", "Sakrili su ga moderatori zbog kršenja pravila Zajednice."),
                o("cc17f408", "Kada se članovi uklone, njihove se objave skrivaju od ostalih članova Zajednice."),
                o("j620ce06", "Tko može vidjeti tu objavu?"),
                o("bd414b44", "Ekskluzivno za vaše pretplatnike"),
                o("dd0da5d9", function (a) {
                    return "@" + a.screenName + " i njegovi/njezini pretplatnici mogu vidjeti vašu objavu";
                }),
                o("g1c6a77e", "Gledate sadržaj u sklopu Pretplata"),
                o("d3b143d7", function (a) {
                    return "Ovo vidite i možete odgovoriti jer ste pretplaćeni na sadržaj autora @" + a.screenName;
                }),
                o("f6337117", function (a) {
                    return "Možete vidjeti tu objavu jer ste pretplaćeni na korisnika/cu @" + a.screenName;
                }),
                o("g766a06d", function (a) {
                    return "Tu objavu mogu vidjeti samo osobe u krugu korisnika/ce @" + a.screenName;
                }),
                o("j040a368", "Veze su onemogućene u odgovorima"),
                o("b31d0af7", function (a) {
                    return a.screenName + " ne dozvoljava veze u odgovorima na ovu objavu";
                }),
                o("eab0f780", "Ne možete objavljivati ni citirati vanjske veze u odgovorima na ovu objavu."),
                o("f17a1f54", "Ekskluzivno za Premium"),
                o("a0953370", "Pretplata"),
                o("d9687d23", function (a) {
                    return "Dolje za " + a.trendValueNegativePercent;
                }),
                o("ac73eb5a", "Bez promjene"),
                o("c5a9f921", function (a) {
                    return "Gore za " + a.trendValuePositivePercent;
                }),
                o("e3098e07", function (a) {
                    return "prije " + a.minutes + " minut" + n(a.minutes, "e", "e", "a");
                }),
                o("fea16a51", function (a) {
                    return "prije " + a.hours + " sat" + n(a.hours, "a", "a", "i");
                }),
                o("a4f2d94d", function (a) {
                    return "prije " + a.days + " dana";
                }),
                o("hf9bc787", function (a) {
                    return "prije " + a.weeks + " tjed" + n(a.weeks, "", "", "a") + "na";
                }),
                o("efcd5885", function (a) {
                    return "prije " + a.months + " mjesec" + n(a.months, "a", "a", "i");
                }),
                o("c37228b5", function (a) {
                    return "prije " + a.years + " godin" + n(a.years, "e", "e", "a");
                }),
                o("jf83d092", "Dan"),
                o("af4abf20", "Mjesec"),
                o("b871f280", "Godina"),
                o("hac89ab0", "Siječanj"),
                o("ef30b30a", "Veljača"),
                o("b56920fa", "Ožujak"),
                o("b1a0f1ec", "Travanj"),
                o("daf779c8", "Svibanj"),
                o("c6ad074e", "Lipanj"),
                o("f1db106c", "Srpanj"),
                o("i4e80b7a", "Kolovoz"),
                o("efa6cc1e", "Rujan"),
                o("f40a0cbe", "Listopad"),
                o("ac74a31c", "Studeni"),
                o("i6c1e4b2", "Prosinac"),
                o("de540c32", "Otkrij lozinku"),
                o("b4abfdb4", "Sakrij lozinku"),
                o("f06ae5d3", function (a) {
                    return a.standardTweetCount + " znak" + n(a.standardTweetCount, "a", "", "ova") + " – preostalo za standardnu objavu, " + a.totalCount + " znak" + n(a.totalCount, "a", "", "ova") + " – preostalo sveukupno";
                }),
                o("fee0a8bc", "Spremi"),
                o("ae7f7656", "Očisti"),
                o("gd769996", "Došlo je do pogreške. Pokušajte ponovno učitati."),
                o("i5450bec", "Medijski sadržaj"),
                o("f7432494", "Dodaj fotografiju"),
                o("a5f7ce12", "Počni pratiti"),
                o("c3befdbe", "Pratim"),
                o("d3029dbc", "Prestani pratiti"),
                o("aeb6f0a0", "Pretplata"),
                o("b4397192", "Upravljanje"),
                o("i8cfb6e6", "Blokirano"),
                o("ea100d6a", "Deblokiraj"),
                o("fe40537f", function (a) {
                    return "Želite li deblokirati korisnika/cu @" + a.screenName + "?";
                }),
                o("ab7c3460", "Moći će vas pratiti i vidjeti vaše objave."),
                o("i58d8718", "Moći će vas pratiti i sudjelovati u vašim javnim objavama."),
                o("cda66545", function (a) {
                    return "Kliknite da biste primijenili " + a.followType + " na " + a.screenName;
                }),
                o("ee05e96b", function (a) {
                    return "Kliknite da biste primijenili " + a.followType + " na " + a.screenName;
                }),
                o("a8d77a25", function (a) {
                    return "Kliknite da biste napustili " + a.screenName;
                }),
                o("d0f4f3d9", function (a) {
                    return a.followType + " " + a.screenName;
                }),
                o("f238ba1d", function (a) {
                    return a.followType + " na " + a.screenName;
                }),
                o("j6161cab", function (a) {
                    return "Želite li prestati pratiti @" + a.screenName + "?";
                }),
                o("i4bb9ef7", function (a) {
                    return "Želite prestati pratiti temu " + a.title + "?";
                }),
                o("ge753264", "Objave tog/te korisnika/ce više se neće pojavljivati na vremenskoj crti odjeljka Za vas. Njegov/njezin profil i dalje možete vidjeti, osim ako mu/joj objave nisu zaštićene."),
                o("b837c0e8", "Čak i ako prestanete pratiti temu, ipak ćete možda vidjeti objave o njoj, ovisno o tome koje račune pratite."),
                o("ddac1f1d", function (a) {
                    return "Jeste li sigurni da želite napustiti " + a.communityName + "?";
                }),
                o("j8e33c40", "Izgubit ćete pristup Zajednici i više nećete moći sudjelovati, ali vaše će prethodne objave i dalje biti vidljive."),
                o("f305840e", "Na čekanju"),
                o("i036327c", "Želite odbaciti zahtjev za praćenje?"),
                o("j95e3097", function (a) {
                    return "Time ćete poništiti svoj zahtjev na čekanju te ga @" + a.screenName + " više neće moći vidjeti.";
                }),
                o("d85bc1b8", "Povećajte ili smanjite prikaz slike."),
                o("f596ace8", "Razmjer proporcija: izvorno"),
                o("df031fca", "Razmjer proporcija: široko"),
                o("b40332c6", "Razmjer proporcija: kvadrat"),
                o("e547b368", "Izvorno"),
                o("f7571204", "Široko"),
                o("e6e16812", "Četvrtasto"),
                o("hdd29d51", function (a) {
                    return "" + a.sponsorshipOrganization;
                }),
                o("b97f7079", function (a) {
                    return "" + a.sponsorshipOrganization;
                }),
                o("b02627a9", function (a) {
                    return "" + a.sponsorshipOrganization;
                }),
                o("f1a1b791", function (a) {
                    return "Sponzorira " + a.fullName;
                }),
                o("if2bf8b4", "Sponzorirano"),
                o("f3624b5c", "Sponzorirano (za političku kampanju)"),
                o("b4b3b113", function (a) {
                    return "Sponzor (za političku kampanju): " + a.fullName;
                }),
                o("be222050", "Sponzorirano (za izbornu kampanju)"),
                o("hcbbe447", function (a) {
                    return "Sponzorira (za izbornu kampanju) " + a.fullName;
                }),
                o("jcf3e7a2", "Tijek sličica za Lottie animaciju"),
                o("a0af935c", 'Označeno sa "sviđa mi se"'),
                o("b8c465e2", "Objava je proslijeđena"),
                o("c7a989ce", "Dodano u knjižne oznake"),
                o("b03835c7", function (a) {
                    return a.replyCount + " odgovor" + n(a.replyCount, "a", "", "a");
                }),
                o("g4a195e7", function (a) {
                    return a.retweetCount + " proslijeđen" + n(a.retweetCount, "e objave", "a objava", "ih objava");
                }),
                o("e089b42d", function (a) {
                    return a.likeCount + " oznak" + n(a.likeCount, "e", "a", "a") + " „sviđa mi se”";
                }),
                o("e0a8fe39", function (a) {
                    return a.bookmarkCount + " knjižn" + n(a.bookmarkCount, "e oznake", "a oznaka", "ih oznaka");
                }),
                o("c58b2ab7", function (a) {
                    return a.viewCount + " prikaz" + n(a.viewCount, "a", "", "a");
                }),
                o("f2849136", "Analitika"),
                o("f206e970", "Prikaži analitičke podatke za objavu"),
                o("c7073f5b", function (a) {
                    return a.count + " prikaz" + n(a.count, "a", "", "a") + ". Prikaži analitičke podatke o objavi";
                }),
                o("hf417cf0", "Uklanjanje iz knjižnih oznaka"),
                o("febd30ed", function (a) {
                    return a.count + " Knjižn" + n(a.count, "e oznake", "a oznaka", "ih oznaka") + ". Knjižna oznaka";
                }),
                o("a8dc9587", function (a) {
                    return a.count + " Knjižn" + n(a.count, "e oznake", "a oznaka", "ih oznaka") + ". Dodano u knjižne oznake";
                }),
                o("d636ebc6", 'Označi sa "sviđa mi se"'),
                o("eb3a8b0c", "Poništi oznaku „sviđa mi se”"),
                o("j472ecfc", "Označi objavu sa „sviđa mi se”"),
                o("dac92b0d", function (a) {
                    return a.count + " oznak" + n(a.count, "e", "a", "a") + " „sviđa mi se”. Označi oznakom „sviđa mi se”";
                }),
                o("aa650427", function (a) {
                    return a.count + " oznak" + n(a.count, "e", "a", "a") + " „sviđa mi se”. Označeno oznakom „sviđa mi se”";
                }),
                o("hdf7226a", "Odgovori"),
                o("c9940955", function (a) {
                    return a.count + " odgovor" + n(a.count, "a", "", "a") + ". Odgovori";
                }),
                o("f2919fb8", "Proslijedi objavu"),
                o("fd1e5446", "Poništi prosljeđivanje objave"),
                o("dfad425d", function (a) {
                    return a.count + " proslijeđen" + n(a.count, "e objave", "a objava", "ih objava") + ". Proslijeđena objava";
                }),
                o("a386dc55", function (a) {
                    return a.count + " proslijeđen" + n(a.count, "e objave", "a objava", "ih objava") + ". Proslijeđeno";
                }),
                o("f65198c2", "Prikaži citate"),
                o("dc63da16", "Dijeli"),
                o("cee0585c", "Podijeli objavu"),
                o("ceb6841c", "Kada se članovi uklone, njihove se objave skrivaju od ostalih članova Zajednice."),
                o("cb731cae", "Uredi krug"),
                o("c33d3a84", "Sve što se dogodi u krugu, ostaje u krugu"),
                o("c4f10e71", "Saznajte više"),
                o("b09adb0c", "Pogledajte razgovor"),
                o("e4f1e6e4", function (a) {
                    return "" + a.formattedCount;
                }),
                o("daf8a75f", function (a) {
                    return "pratim";
                }),
                o("ef1f4fc6", function (a) {
                    return "" + a.formattedCount;
                }),
                o("ad9b5988", function (a) {
                    return "osob" + n(a.count, "e koje prate", "a koja prati", "a koje prate");
                }),
                o("a9980948", function (a) {
                    return "" + a.formattedCount;
                }),
                o("ce44a35c", function (a) {
                    return "pretplatnik" + n(a.count, "a", "", "a");
                }),
                o("id949f68", function (a) {
                    return "" + a.formattedCount;
                }),
                o("hb608cfc", function (a) {
                    return "Pretplat" + n(a.count, "e", "a", "e");
                }),
                o("ef633578", "Račun je privremeno blokiran"),
                o("a6a3d496", "Umetnite vezu"),
                o("acce6978", "Uredite vezu"),
                o("f5e8f526", "Uređivanje"),
                o("h517e8d8", "Ukloni"),
                o("a30ae58e", "Tekst za prikaz"),
                o("da38c958", "URL"),
                o("d5d57678", "Umetni"),
                o("ec822028", "Ispunite to polje"),
                o("ebc5d2cc", "Nešto nije u redu s ovim URL-om. Provjerite pravopis i formatiranje te veze."),
                o("h30a19bb", function (a) {
                    return "Ovo je tortni grafikon. Naslov je grafikona " + a.chartTitle + ". Ukupni broj kategorija: " + a.noOfCategories + ". Minimalna je vrijednost " + a.minValue + ", a maksimalna " + a.maxValue + ". Grafikonom se pomičite pomoću navigacijskih kontrola.";
                }),
                o("h39fbf33", function (a) {
                    return "Vodoravni trakasti grafikon s vrijednostima podataka od " + a.minValue + " do " + a.maxValue;
                }),
                o("gdd51574", "Povucite da biste osvježili"),
                o("e557ad8e", "Aktivan"),
                o("e3a58c28", "Proširi"),
                o("db355331", function (a) {
                    return "Pobijedio je tim " + a.team;
                }),
                o("a8428d5e", "Nadolazeće"),
                o("a7aad8ba", "Uživo"),
                o("e431f1aa", "Konačni rezultat"),
                o("a7391708", "Odgođeno"),
                o("d2dbfa92", "Odgođeno"),
                o("cd734f66", "Danas"),
                o("c8891d06", "Sutra"),
                o("d2414d31", function (a) {
                    return "Nepročitano: " + a.count;
                }),
                o("ce4e85ae", "Nepročitane stavke"),
                o("fb9f6f39", function (a) {
                    return a.count + "+";
                }),
                o("eb124f96", "prijepodne/popodne"),
                o("i7a6f114", "Sat"),
                o("ccc99ff2", "Minuta"),
                o("g5662c95", function (a) {
                    return "Razina " + a.conversationTreeDepth + ":";
                }),
                o("b3688156", "Taj je korisnik trenutačno u aktivnom Prostoru, kliknite za pridruživanje"),
                o("c0eb8825", function (a) {
                    return "@" + a.screenName + " je trenutačno u aktivnom Prostoru, kliknite za pridruživanje";
                }),
                o("d068dc6d", function (a) {
                    return "@" + a.screenName + " je trenutačno u aktivnom prijenosu uživo, kliknite za gledanje";
                }),
                o("d9fd5570", "Skriveni odgovori"),
                o("c566d3a6", "Sakrij"),
                o("a897c4d6", "Otvara se povijest izmjena"),
                o("e07a85a2", "Objava nije dostupna"),
                o("ffeb2fc6", "Sljedeće"),
                o("af2a65d9", function (a) {
                    return "Odabrano: " + a.timestamp;
                }),
                o("j3d49e93", function (a) {
                    return a.timestamp + " m";
                }),
                o("a394f905", function (a) {
                    return a.seconds + " s";
                }),
                o("f42c0c80", "Kraj odabranog odjeljka; odabir prilagodite tipkama sa strelicama"),
                o("i667afe8", "Početak odabranog odjeljka; odabir prilagodite tipkama sa strelicama"),
                o("gfaaead8", "Bez naslova"),
                o("cfd13f46", "Okno govornog zapisa"),
                o("eba2660a", "Plava"),
                o("hc196b78", "Boja šljive"),
                o("c8bc49d2", "Ljubičasta"),
                o("efff09ee", "Zelena"),
                o("fcb424ee", "Žuta"),
                o("ie2215aa", "Magenta"),
                o("f106ce44", "Narančasta"),
                o("acddd4d4", "Crvena"),
                o("cef9b062", "Plavozelena"),
                o("d9daefca", "Tamnosiva");
            var j = i(202784),
                u = [
                    function (a) {
                        return 0 === a ? 1 : 1 === a ? 0 : 2 === a ? 2 : void 0;
                    },
                    function (a) {
                        return 0 === a ? 1 : 1 === a ? 0 : 2 === a ? 2 : 3 === a ? 3 : void 0;
                    },
                ],
                d = { d764af97: 0, j55320df: 0, g1bf440b: 0, aee9e7fb: 0, d6998bab: 1, ec2cede5: 0 };
            function s(a) {
                return a;
            }
            var v = (function (a) {
                var e, i, o, v, p;
                function k() {
                    return a.apply(this, arguments) || this;
                }
                return (
                    (i = a),
                    ((e = k).prototype = Object.create(i.prototype)),
                    (e.prototype.constructor = e),
                    r(e, i),
                    (k.prototype.render = function () {
                        return j.createElement.apply(j, this[this.props.$i18n].reduce(this.templateReducer, [j.Fragment, null]));
                    }),
                    (o = k),
                    (v = [
                        {
                            key: "bb85c49d",
                            get: function () {
                                return ["X obavezno čuva kopiju Prostora radi pregleda. ", "."];
                            },
                        },
                        {
                            key: "c9af3ff7",
                            get: function () {
                                return ["Računi koje ste blokirali neće se moći uključiti. No slušati mogu i osobe koje nisu prijavljene na X. "];
                            },
                        },
                        {
                            key: "e60e51b3",
                            get: function () {
                                return ["X neko vrijeme čuva kopiju Prostora radi pregleda u vezi s neželjenim sadržajem i zloupotrebom. "];
                            },
                        },
                        {
                            key: "jd312ce9",
                            get: function () {
                                return ["Pretplatite se na Provjerene organizacije i dobijte 1000 USD kredita za oglase koje možete iskoristiti za bilo koji račun u svojoj organizaciji. "];
                            },
                        },
                        {
                            key: "e1a49407",
                            get: function () {
                                return ["Na objavu korisnika/ce ", " moći ćete odgovoriti nakon pridruživanja platformi X."];
                            },
                        },
                        {
                            key: "be54ed41",
                            get: function () {
                                return ["Objavu korisnika/ce ", " moći ćete podijeliti s osobama koje vas prate nakon pridruživanja platformi X."];
                            },
                        },
                        {
                            key: "jb19eb17",
                            get: function () {
                                return ["Odmah se pridružite platformi X i recite korisniku/ci ", " da vam se sviđa njegova/njezina objava."];
                            },
                        },
                        {
                            key: "bbfee611",
                            get: function () {
                                return ["Počnite pratiti korisnika/cu ", " da biste vidjeli što dijeli na platformi X."];
                            },
                        },
                        {
                            key: "af104f2b",
                            get: function () {
                                return ["Odmah s pridružite platformi X kako biste mogli privatno podijeliti objavu korisnika/ce ", "."];
                            },
                        },
                        {
                            key: "ccc1f303",
                            get: function () {
                                return ["Počnite pratiti ", " da biste vidjeli nadzirane objave"];
                            },
                        },
                        {
                            key: "ce02fabf",
                            get: function () {
                                return ["Odmah se pridružite platformi X da biste vidjeli prijenos korisničkih objava koji nadzire ", "."];
                            },
                        },
                        {
                            key: "a85608a7",
                            get: function () {
                                return ["Odmah se pridružite platformi X i otkrijte nove i zanimljive razgovore o stvarima koje vas zanimaju, npr. o temi ", "."];
                            },
                        },
                        {
                            key: "c76865b7",
                            get: function () {
                                return ["Pretražujte među objavama korisnika/ce ", " na platformi X."];
                            },
                        },
                        {
                            key: "e4af7661",
                            get: function () {
                                return ["X i njegovi partneri upotrebljavaju kolačiće da bi vam pružili bolju, sigurniju i bržu uslugu i radi podrške našem poslovanju. Neki su kolačići potrebni za upotrebu naših usluga, poboljšanje naših usluga i kako bismo osigurali da ispravno funkcioniraju. Ako kliknete „Prihvati sve kolačiće”, platformi X i njezinim partnerima također dopuštate upotrebu kolačića radi pružanja oglasa i komunikacija prilagođenih vašim interesima. Ako kliknete „Odbij sve kolačiće”, nećemo upotrebljavati kolačiće za prikupljanje dodatnih podataka za prilagođene oglase i komunikacije. Da biste saznali više, uključujući kako promijeniti svoj odabir, posjetite stranicu o kolačićima u našem ", "."];
                            },
                        },
                        {
                            key: "a268632b",
                            get: function () {
                                return ["X i njegovi partneri upotrebljavaju kolačiće da bi vam pružili bolju, sigurniju i bržu uslugu i radi podrške našem poslovanju. Neki su kolačići potrebni za upotrebu naših usluga, poboljšanje naših usluga i kako bismo osigurali da ispravno funkcioniraju. "];
                            },
                        },
                        {
                            key: "c4d3d079",
                            get: function () {
                                return ["Registracijom prihvaćate ", " i ", ", uključujući ", "."];
                            },
                        },
                        {
                            key: "j23c6259",
                            get: function () {
                                return ["Navedite poveznice na najmanje tri članka o sebi u kvalificiranim novinskim izdanjima koja su objavljena u proteklih šest mjeseci. "];
                            },
                        },
                        {
                            key: "gf887169",
                            get: function () {
                                return ["Morat ćete zadovoljiti određene kriterije ovisno o vrsti računa za X koji imate. "];
                            },
                        },
                        {
                            key: "d454b49f",
                            get: function () {
                                return ["Odaberite mogućnost koja najbolje opisuje vaš račun. "];
                            },
                        },
                        {
                            key: "hd977dd9",
                            get: function () {
                                return ["Odaberite način na koji ćete dokazati da vaš račun zadovoljava uvjete za potvrdu vas kao aktivista ili organizatora. "];
                            },
                        },
                        {
                            key: "e3432573",
                            get: function () {
                                return ["Niste dostigli prag minimalnog broja osoba koje vas prate ili spomena za svoju regiju koji je potreban da bismo vas mogli potvrditi kao aktivista. "];
                            },
                        },
                        {
                            key: "efd8f6e7",
                            get: function () {
                                return ["Unesite poveznicu na profil na Google trendovima s dokazom o nedavnoj aktivnosti pretraživanja vašeg imena."];
                            },
                        },
                        {
                            key: "fe54dcfd",
                            get: function () {
                                return ["Navedite poveznicu na Wikipedijinu stranicu o sebi s barem tri vanjske reference. "];
                            },
                        },
                        {
                            key: "ie26d72d",
                            get: function () {
                                return ["Navedite poveznicu koja vas potvrđuje kao rukovoditelja u potvrđenoj interesnoj organizaciji. Referenca se mora nalaziti na službenom web-mjestu potvrđene organizacije."];
                            },
                        },
                        {
                            key: "af3fe861",
                            get: function () {
                                return ["Odaberite način na koji ćete dokazati da vaš račun zadovoljava uvjete za potvrdu vas kao pojedinca influensera. "];
                            },
                        },
                        {
                            key: "a08d6af3",
                            get: function () {
                                return ["Niste dostigli prag minimalnog broja osoba koje vas prate ili spomena za svoju regiju koji je potreban da bismo vas mogli potvrditi kao autora sadržaja ili pojedinca influensera. "];
                            },
                        },
                        {
                            key: "f774e39d",
                            get: function () {
                                return ["Odaberite način na koji ćete dokazati da vaš račun zadovoljava uvjete za potvrdu vas kao poznate tvrtke, robne marke ili organizacije. "];
                            },
                        },
                        {
                            key: "d8510869",
                            get: function () {
                                return ["Unesite poveznicu na profil na Google trendovima s dokazom o nedavnoj aktivnosti pretraživanja vaše tvrtke, robne marke ili organizacije. "];
                            },
                        },
                        {
                            key: "h75e3641",
                            get: function () {
                                return ["Navedite poveznicu na Wikipedijinu stranicu o svojoj tvrtki, robnoj marci ili organizaciji s barem tri vanjske reference. "];
                            },
                        },
                        {
                            key: "de6d69a1",
                            get: function () {
                                return ["Navedite poveznicu koja dokazuje da je vaša tvrtka, robna marka ili organizacija uvrštena na javnu burzu. "];
                            },
                        },
                        {
                            key: "be0e8fdb",
                            get: function () {
                                return ["Navedite poveznice na najmanje tri članka o svojoj tvrtki u potvrđenim novinskim izdanjima u proteklih šest mjeseci. "];
                            },
                        },
                        {
                            key: "baed7213",
                            get: function () {
                                return ["Da biste zadovoljili uvjete za tu kategoriju, morate biti na položaju višeg rukovoditelja u nekoj potvrđenoj organizaciji. Da biste dokazali da zadovoljavate uvjete, dodajte račun te organizacije. "];
                            },
                        },
                        {
                            key: "c5d688cf",
                            get: function () {
                                return ["Odaberite način na koji ćete dokazati da vaš račun zadovoljava uvjete za potvrdu vas kao višeg rukovoditelja neke ugledne organizacije. "];
                            },
                        },
                        {
                            key: "fce3e22d",
                            get: function () {
                                return ["Navedite poveznice na najmanje tri članka koja su objavile potvrđene novinske organizacije u proteklih šest mjeseci, a u kojima ste navedeni kao viši rukovoditelj ili direktor neke organizacije. "];
                            },
                        },
                        {
                            key: "f1b276f1",
                            get: function () {
                                return ["Navedite poveznicu koja vas navodi kao višeg rukovoditelja u organizaciji. Referenca mora potjecati sa službenog web-mjesta potvrđene tvrtke, robne marke ili organizacije. "];
                            },
                        },
                        {
                            key: "e2465097",
                            get: function () {
                                return ["Navedite poveznicu na profil na Google trendovima s dokazom o nedavnoj aktivnosti pretraživanja sadržaja koji ste proizveli. "];
                            },
                        },
                        {
                            key: "g83bcecd",
                            get: function () {
                                return ["Navedite poveznice na najmanje tri članka o sadržaju koji ste proizveli u potvrđenim novinskim izdanjima u proteklih šest mjeseci. "];
                            },
                        },
                        {
                            key: "f3016c6f",
                            get: function () {
                                return ["Odaberite način na koji ćete dokazati da vaš račun zadovoljava uvjete za potvrdu kao službenog računa nekog većeg sadržaja koji ste proizveli. "];
                            },
                        },
                        {
                            key: "h74144bd",
                            get: function () {
                                return ["Navedite poveznicu koja dokazuje da je vaša organizacija za produkciju sadržaja uvrštena na javnu burzu. "];
                            },
                        },
                        {
                            key: "jef5dfc5",
                            get: function () {
                                return ["Navedite poveznicu na Wikipedijinu stranicu o sadržaju koji ste proizveli s barem tri vanjske reference. "];
                            },
                        },
                        {
                            key: "gf5a4309",
                            get: function () {
                                return ["Odaberite način na koji ćete dokazati da vaš račun zadovoljava uvjete za potvrdu vas kao poznate tvrtke u industriji zabave. "];
                            },
                        },
                        {
                            key: "g2e175b1",
                            get: function () {
                                return ["Unesite poveznicu na profil na Google trendovima s dokazom o nedavnoj aktivnosti pretraživanja vaše tvrtke u industriji zabave. "];
                            },
                        },
                        {
                            key: "efc369c3",
                            get: function () {
                                return ["Navedite poveznice na najmanje tri članka o svojoj tvrtki u potvrđenim novinskim izdanjima u proteklih šest mjeseci. "];
                            },
                        },
                        {
                            key: "ff03f07d",
                            get: function () {
                                return ["Navedite poveznicu koja dokazuje da je vaša tvrtka u industriji zabave uvrštena na javnu burzu. "];
                            },
                        },
                        {
                            key: "a3e9dde3",
                            get: function () {
                                return ["Navedite poveznicu na Wikipedijinu stranicu o svojoj tvrtki u industriji zabave s barem tri vanjske reference. "];
                            },
                        },
                        {
                            key: "c2b8fb3d",
                            get: function () {
                                return ["Odaberite način na koji ćete dokazati da vaš račun zadovoljava uvjete za potvrdu vas kao uglednog autora digitalnog sadržaja. "];
                            },
                        },
                        {
                            key: "fd33ce05",
                            get: function () {
                                return ["Unesite poveznicu na svoj profil autora sadržaja. Profil autora sadržaja može biti na bilo kojoj digitalnoj platformi, no mora navoditi vaš nadimak na platformi X. "];
                            },
                        },
                        {
                            key: "bb47d2b9",
                            get: function () {
                                return ["Navedite poveznicu na Wikipedijinu stranicu o sebi s barem tri vanjske reference. "];
                            },
                        },
                        {
                            key: "db930fb3",
                            get: function () {
                                return ["Odaberite način na koji ćete dokazati da vaš račun zadovoljava uvjete za potvrdu vas kao zaposlenika u zabavnoj industriji. "];
                            },
                        },
                        {
                            key: "dc263ec1",
                            get: function () {
                                return ["Unesite poveznicu na profil na IMDB-u s najmanje 50 autorskih radova u produkciji. "];
                            },
                        },
                        {
                            key: "d18a48d5",
                            get: function () {
                                return ["Navedite poveznicu koja vas navodi kao zaposlenika u zabavnoj industriji i svoj račun za X. Referenca se mora nalaziti na službenom web-mjestu nekog Provjerenog entiteta. "];
                            },
                        },
                        {
                            key: "i3b4217b",
                            get: function () {
                                return ["Odaberite kategoriju koja najbolje opisuje vaš račun u vladi. "];
                            },
                        },
                        {
                            key: "ja62479f",
                            get: function () {
                                return ["Navedite poveznice na najmanje pet članaka koje su objavile potvrđene novinske organizacije u proteklih šest mjeseci, a u kojima ste navedeni kao kandidat za dužnosnika koji zadovoljava kriterije. "];
                            },
                        },
                        {
                            key: "f28bbbb1",
                            get: function () {
                                return ["Navedite poveznice na najmanje pet članaka koje su objavile potvrđene novinske organizacije u proteklih šest mjeseci, a u kojima ste navedeni kao dužnosnik koji zadovoljava kriterije. "];
                            },
                        },
                        {
                            key: "b229f4b9",
                            get: function () {
                                return ["Navedite poveznice na najmanje pet članaka koje su objavile potvrđene novinske organizacije u proteklih šest mjeseci, a u kojima ste navedeni kao dužnosnik koji zadovoljava kriterije. "];
                            },
                        },
                        {
                            key: "e85178bd",
                            get: function () {
                                return ["Navedite poveznicu na službeno web-mjesto s kampanjom na kojem ste navedeni kao kandidat za dužnosnika na lokalnoj odnosno državnoj razini, kao i vaš račun za X. "];
                            },
                        },
                        {
                            key: "i499f8f7",
                            get: function () {
                                return ["Navedite poveznicu na službeno vladino web-mjesto na kojem se navodi vaša dužnost u vladi ili javnoj ustanovi te vaš račun za X. "];
                            },
                        },
                        {
                            key: "a394654f",
                            get: function () {
                                return ["Navedite poveznicu koja vas navodi kao vladinog dužnosnika ili dužnosnika organizacije povezane s vladom. Referenca mora potjecati sa službenog web-mjesta potvrđene organizacije povezane s vladom. "];
                            },
                        },
                        {
                            key: "dcb0da53",
                            get: function () {
                                return ["Novinari moraju biti zaposleni u potvrđenoj novinarskoj organizaciji ili izdavačkoj kući koju je potrebno potvrditi. Navedite poveznicu na račun poslodavca. "];
                            },
                        },
                        {
                            key: "d82a96af",
                            get: function () {
                                return ["Odaberite način na koji ćete dokazati da vaš račun zadovoljava uvjete za potvrdu vas kao poznatog novinara. "];
                            },
                        },
                        {
                            key: "d47b4101",
                            get: function () {
                                return ["Navedite poveznicu koja vas navodi kao novinara zaposlenog kod tog poslodavca. Referenca mora potjecati sa službenog web-mjesta potvrđene novinarske organizacije. "];
                            },
                        },
                        {
                            key: "a3540593",
                            get: function () {
                                return ["Navedite najmanje tri autorska članka i/ili rada u proteklih šest mjeseci u izdanjima koja zadovoljavaju kriterije. "];
                            },
                        },
                        {
                            key: "edb782e7",
                            get: function () {
                                return ["Odaberite način na koji ćete dokazati da vaš račun zadovoljava uvjete za potvrdu vas kao ugledne novinarske organizacije. "];
                            },
                        },
                        {
                            key: "cc16af2d",
                            get: function () {
                                return ["Unesite poveznicu na profil na Google trendovima s dokazom o nedavnoj aktivnosti pretraživanja vaše novinarske organizacije. "];
                            },
                        },
                        {
                            key: "b42b7001",
                            get: function () {
                                return ["Navedite poveznicu na Wikipedijinu stranicu o svojoj novinarskoj organizaciji s barem tri vanjske reference. "];
                            },
                        },
                        {
                            key: "fd2c6f63",
                            get: function () {
                                return ["Navedite poveznicu koja dokazuje da je vaša novinarska organizacija uvrštena na javnu burzu. "];
                            },
                        },
                        {
                            key: "ec7027cd",
                            get: function () {
                                return ["Navedite poveznice na najmanje tri članka o svojoj novinarskoj organizaciji u potvrđenim novinskim izdanjima u proteklih šest mjeseci. "];
                            },
                        },
                        {
                            key: "a0a9f835",
                            get: function () {
                                return ["Profesionalni se sportaši moraju natjecati u provjerenim sportskim ligama i sportskim događajima koji se mogu provjeriti. Navedite poveznicu na potvrđenu momčad, ligu, sportski događaj ili organizaciju povezanu s vašim računom."];
                            },
                        },
                        {
                            key: "iba551d5",
                            get: function () {
                                return ["Niste dostigli prag minimalnog broja osoba koje vas prate za svoju regiju koji je potreban da bismo vas mogli potvrditi kao pojedinca u kategoriji igara. "];
                            },
                        },
                        {
                            key: "h515e869",
                            get: function () {
                                return ["E-sportaši moraju se natjecati u provjerenim e-sportskim ligama te događajima koji se mogu provjeriti. Navedite poveznicu na potvrđenu momčad, ligu, događaj ili organizaciju povezanu s vašim računom."];
                            },
                        },
                        {
                            key: "d2cd7f89",
                            get: function () {
                                return ["Odaberite način na koji ćete dokazati da vaš račun zadovoljava uvjete za potvrdu vas kao poznate sportske lige, momčadi ili sudionika globalnog sportskog natjecanja. "];
                            },
                        },
                        {
                            key: "c68614a3",
                            get: function () {
                                return ["Unesite poveznicu na profil na Google trendovima s dokazom o nedavnoj aktivnosti pretraživanja vaše profesionalne sportske organizacije. "];
                            },
                        },
                        {
                            key: "b4ea622f",
                            get: function () {
                                return ["Navedite poveznicu na Wikipedijinu stranicu o svojoj profesionalnoj sportskoj organizaciji s barem tri vanjske reference. "];
                            },
                        },
                        {
                            key: "acab99f7",
                            get: function () {
                                return ["Navedite poveznicu koja dokazuje da je vaša profesionalna sportska organizacija uvrštena na javnu burzu. "];
                            },
                        },
                        {
                            key: "df0b2577",
                            get: function () {
                                return ["Unesite službeno web-mjesto globalnog sportskog natjecanja ili profesionalne sportske organizacije na kojem ste navedeni kao liga, momčad ili sudionik sportskog natjecanja. "];
                            },
                        },
                        {
                            key: "jfda4c29",
                            get: function () {
                                return ["Navedite poveznice na najmanje tri članka o svojoj organizaciji u potvrđenim novinskim izdanjima u proteklih šest mjeseci. "];
                            },
                        },
                        {
                            key: "g3299df1",
                            get: function () {
                                return ["Odaberite način na koji ćete dokazati da vaš račun zadovoljava uvjete za potvrdu vas kao profesionalnog sportaša. "];
                            },
                        },
                        {
                            key: "id6bbc01",
                            get: function () {
                                return ["Odaberite način na koji ćete dokazati da vaš račun zadovoljava uvjete za potvrdu vas kao e-sportaša. "];
                            },
                        },
                        {
                            key: "fbe119c5",
                            get: function () {
                                return ["Unesite službene web-mjesto nekog globalnog sportskog natjecanja ili profesionalne sportske organizacije na kojem ste navedeni kao profesionalni sportaš, menadžer ili trener. "];
                            },
                        },
                        {
                            key: "da0e7f33",
                            get: function () {
                                return ["Navedite poveznicu na službeno web-mjesto potvrđene e-sportske lige ili događaja na kojem ste navedeni kao član, trener ili menadžer. "];
                            },
                        },
                        {
                            key: "ca20e39f",
                            get: function () {
                                return ["Nažalost, trenutno ne možemo obraditi nove zahtjeve za provjeru autentičnosti. Vratite se poslije i pokušajte ponovno. "];
                            },
                        },
                        {
                            key: "jf9308af",
                            get: function () {
                                return ["Da bismo vaš identitet provjerili putem poruke e-pošte, morate imati već potvrđenu adresu. Da biste to učinili, idite u odjeljak ", "."];
                            },
                        },
                        {
                            key: "e9976a41",
                            get: function () {
                                return ["Da bismo vaš identitet provjerili putem poruke e-pošte, morate imati potvrđenu adresu e-pošte koja zadovoljava naše kriterije. Da biste to učinili, idite u odjeljak ", "."];
                            },
                        },
                        {
                            key: "e5b4cc43",
                            get: function () {
                                return ["Potvrda je namijenjena istaknutim osobama i grupama unutar neke kategorije. Ako ste to vi, pošaljite zahtjev za potvrdu. "];
                            },
                        },
                        {
                            key: "bfb355fb",
                            get: function () {
                                return ["Vaše lice i tekst na osobnom dokumentu moraju biti dobro vidljivi i čitki. Ako nije tako, dokument ćete morati ponovno poslati. X ne prima ni ne sprema kopije osobnih dokumenata. "];
                            },
                        },
                        {
                            key: "d65a41c3",
                            get: function () {
                                return ["Informacije o načinu pristupa poslanim podacima ili njihovu ispravku potražite u našim ", "."];
                            },
                        },
                        {
                            key: "a1c39f5b",
                            get: function () {
                                return ["Čim donesemo odluku, poslat ćemo vam obavijest. To može biti za " + this.props.days + " dan" + n(this.props.days, "a", "", "a") + "."];
                            },
                        },
                        {
                            key: "ja826537",
                            get: function () {
                                return ["Ispunite kratak ", " i pridonesite poboljšanju."];
                            },
                        },
                        {
                            key: "b7be91bf",
                            get: function () {
                                return ["Vaš je zadnji zahtjev odbijen " + this.props.date + ". Da biste poslali novi zahtjev, mora proći 30 dana od tog datuma."];
                            },
                        },
                        {
                            key: "jcb00a95",
                            get: function () {
                                return ["Zadnji ste zahtjev poslali " + this.props.date + ". Da biste poslali novi zahtjev, mora proći 30 dana od tog datuma."];
                            },
                        },
                        {
                            key: "j92ea4b9",
                            get: function () {
                                return ["Zadnji ste zahtjev poslali " + this.props.date + ". Javit ćemo vam se čim donesemo odluku."];
                            },
                        },
                        {
                            key: "jbcd22b1",
                            get: function () {
                                return ["Zabavite se i ne zaboravite na ", "."];
                            },
                        },
                        {
                            key: "hcecd237",
                            get: function () {
                                return ["Riječ je o aplikacijama koje ste povezali s računom. Podatke kojima te aplikacije imaju pristup možete pogledati te pristup uskratiti. "];
                            },
                        },
                        {
                            key: "i34eeb37",
                            get: function () {
                                return [this.props.infoText + " "];
                            },
                        },
                        {
                            key: "aa1b5fdd",
                            get: function () {
                                return ["Osobe koje pratite uvijek će vam moći slati poruke. "];
                            },
                        },
                        {
                            key: "d79b6b7b",
                            get: function () {
                                return ["Povežite račun za upravljanje da bi vaš automatizirani račun dobio oznaku automatiziranog računa. Svi automatizirani računi moraju biti povezani s računom za upravljanje. "];
                            },
                        },
                        {
                            key: "c1976bcf",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "cbb4db07",
                            get: function () {
                                return [""];
                            },
                        },
                        {
                            key: "be5322c7",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "c5f6ee1d",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "db79453f",
                            get: function () {
                                return ["Nastojimo da X bude mjesto konstruktivnih razgovora, stoga smo za tu objavu onemogućili većinu načina interakcije. Ako želite razgovarati o njoj, i dalje je možete je citirati. "];
                            },
                        },
                        {
                            key: "i2a606d1",
                            get: function () {
                                return ["Nastojimo da X bude mjesto konstruktivnih razgovora, stoga smo za tu objavu onemogućili većinu načina interakcije. "];
                            },
                        },
                        {
                            key: "fe93026b",
                            get: function () {
                                return ["Samo korisnik/ca @" + this.props.username + " i njegov/njezin krug mogu vidjeti te objave."];
                            },
                        },
                        {
                            key: "ef5d531f",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "e4eeeeff",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "c9174f1f",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "d794bc6d",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "b38e130b",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "j33cc663",
                            get: function () {
                                return ["Postavljaju ih i provode administratori Zajednice te se ona primjenjuju uz pravila ", "."];
                            },
                        },
                        {
                            key: "gb7eca21",
                            get: function () {
                                return ["Zajednice su javne pa se zaštićeni računi trenutačno ne mogu uključiti. Možete čitati objave, ali da biste sudjelovali, ", "."];
                            },
                        },
                        {
                            key: "jb124a07",
                            get: function () {
                                return ["Moderator vas je uklonio zbog kršenja ovog pravila zajednice: "];
                            },
                        },
                        {
                            key: "d6d818a1",
                            get: function () {
                                return ["Broj prikaza: " + this.props.viewerCount];
                            },
                        },
                        {
                            key: "d2924acb",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "a5d9d071",
                            get: function () {
                                return ["GIF korisnika/ce "];
                            },
                        },
                        {
                            key: "i9606e33",
                            get: function () {
                                return ["Videozapis korisnika/ce "];
                            },
                        },
                        {
                            key: "i1a64d47",
                            get: function () {
                                return ["Fotografija putem korisnika/ce "];
                            },
                        },
                        {
                            key: "h0d6f2c5",
                            get: function () {
                                return ["", ""];
                            },
                        },
                        {
                            key: "a492659f",
                            get: function () {
                                return ["", ""];
                            },
                        },
                        {
                            key: "h36fe5c9",
                            get: function () {
                                return ["Umjesto toga potražite „", "”"];
                            },
                        },
                        {
                            key: "hce48b8b",
                            get: function () {
                                return ["Mislili ste „", "”?"];
                            },
                        },
                        {
                            key: "f8ea2809",
                            get: function () {
                                return [this.props.selection + " sada može odgovoriti"];
                            },
                        },
                        {
                            key: "hb92c979",
                            get: function () {
                                return ["", "/" + this.props.maxLimit + " znakova"];
                            },
                        },
                        {
                            key: "a20c0721",
                            get: function () {
                                return ["Zadnja izmjena: "];
                            },
                        },
                        {
                            key: "a9ce2dd5",
                            get: function () {
                                return ["", " radi pomoći i savjeta."];
                            },
                        },
                        {
                            key: "e2e6ea0d",
                            get: function () {
                                return ["putem servisa "];
                            },
                        },
                        {
                            key: "bd7349bb",
                            get: function () {
                                return ["Zadnji put spremljeno "];
                            },
                        },
                        {
                            key: "hb16b207",
                            get: function () {
                                return ["Objava članka ", " će se poništiti, on će se premjestiti u skice i neće biti javno vidljiv."];
                            },
                        },
                        {
                            key: "dd5806bb",
                            get: function () {
                                return ["Sljedeći je medijski sadržaj potencijalno osjetljiv. "];
                            },
                        },
                        {
                            key: "d247a0b9",
                            get: function () {
                                return ["Funkcija uređivanja ograničena je na originalne objave i ne obuhvaća odgovore ni niti razgovora. ", " o tome što možete uređivati."];
                            },
                        },
                        {
                            key: "g8ffaf17",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "h3326073",
                            get: function () {
                                return ["Želite li urediti svoj krug? Samo naprijed. Uklonjene osobe neće dobiti obavijest o tome. ", "."];
                            },
                        },
                        {
                            key: "j0b75ce7",
                            get: function () {
                                return ["", " novi alat za sastavljanje članaka za nove mogućnosti oblikovanja."];
                            },
                        },
                        {
                            key: "dd964cf3",
                            get: function () {
                                return ["Zajednice su javne pa se zaštićeni računi ne mogu uključiti u razgovor. Objave možete čitati i označavati oznakom „sviđa mi se”, no za više mogućnosti ", "."];
                            },
                        },
                        {
                            key: "e34022a7",
                            get: function () {
                                return ["Odgovor za korisnika/cu "];
                            },
                        },
                        {
                            key: "bfd9c99b",
                            get: function () {
                                return ["Odgovor za korisnike/ce "];
                            },
                        },
                        {
                            key: "g7a1000f",
                            get: function () {
                                return ["Odgovor korisnicima "];
                            },
                        },
                        {
                            key: "i558c201",
                            get: function () {
                                return ["Odgovor "];
                            },
                        },
                        {
                            key: "j935bcdf",
                            get: function () {
                                return ["Odgovor korisniku/ci ", " u zajednici " + this.props.communityName];
                            },
                        },
                        {
                            key: "i7bd9c8f",
                            get: function () {
                                return ["Odgovor korisnicima/korisnicama ", " u zajednici " + this.props.communityName];
                            },
                        },
                        {
                            key: "cfa0049d",
                            get: function () {
                                return ["Odgovor korisnicima/korisnicama ", " u zajednici " + this.props.communityName];
                            },
                        },
                        {
                            key: "jfc8e4b5",
                            get: function () {
                                return ["Odgovor korisnicima/korisnicama ", " u zajednici " + this.props.communityName];
                            },
                        },
                        {
                            key: "fe06c9f5",
                            get: function () {
                                return ["Odgovarate korisniku/ci ", ". Vaš će odgovor moći vidjeti i njegovi/njezini ", "."];
                            },
                        },
                        {
                            key: "f7e12e15",
                            get: function () {
                                return ["Odgovarate korisnicima/ama ", ". Vaš će odgovor moći vidjeti i njihovi ", "."];
                            },
                        },
                        {
                            key: "eade6035",
                            get: function () {
                                return ["Odgovarate korisnicima/ama ", ". Vaš će odgovor moći vidjeti i njihovi ", "."];
                            },
                        },
                        {
                            key: "da018b37",
                            get: function () {
                                return ["Odgovarate korisnicima/ama ", ". Vaš će odgovor moći vidjeti i njihovi ", "."];
                            },
                        },
                        {
                            key: "e119d033",
                            get: function () {
                                return ["Odgovarate korisniku/ci ", ". Krug korisnika/ce " + this.props.trustedFriendsTweetOwner + " koji pratite također će moći vidjeti vaš odgovor."];
                            },
                        },
                        {
                            key: "d0c02e7b",
                            get: function () {
                                return ["Odgovarate korisniku/ci ", ". Krug korisnika/ce " + this.props.trustedFriendsTweetOwner + " također će moći vidjeti vaš odgovor."];
                            },
                        },
                        {
                            key: "bce67b49",
                            get: function () {
                                return ["Odgovarate korisnicima/korisnicama ", ". Krug korisnika/ce ", " koji vas prati također će moći vidjeti vaš odgovor."];
                            },
                        },
                        {
                            key: "e460ccf1",
                            get: function () {
                                return ["Odgovarate korisnicima/korisnicama ", ". Krug korisnika/ce ", " također će moći vidjeti vaš odgovor."];
                            },
                        },
                        {
                            key: "i421898b",
                            get: function () {
                                return ["Odgovarate korisnicima/korisnicama ", ". Krug korisnika/ce ", " koji vas prati također će moći vidjeti vaš odgovor."];
                            },
                        },
                        {
                            key: "c70a17eb",
                            get: function () {
                                return ["Odgovarate korisnicima/korisnicama ", ". Krug korisnika/ce ", " također će moći vidjeti vaš odgovor."];
                            },
                        },
                        {
                            key: "b0d6bca7",
                            get: function () {
                                return ["Odgovarate korisnicima/korisnicama ", ". Krug korisnika/ce ", " koji vas prati također će moći vidjeti vaš odgovor."];
                            },
                        },
                        {
                            key: "aacf46d1",
                            get: function () {
                                return ["Odgovarate korisnicima/korisnicama ", ". Krug korisnika/ce ", " također će moći vidjeti vaš odgovor."];
                            },
                        },
                        {
                            key: "ff2f533f",
                            get: function () {
                                return ["Ako kliknete Promoviraj objavu, prihvaćate "];
                            },
                        },
                        {
                            key: "b74b73ad",
                            get: function () {
                                return ["", " ", " ", "", ""];
                            },
                        },
                        {
                            key: "c5064c6f",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "f3c4e2c5",
                            get: function () {
                                return ["Vaša nova adresa e-pošte " + this.props.unverifiedEmail + " nije potvrđena. "];
                            },
                        },
                        {
                            key: "f05afae5",
                            get: function () {
                                return ["Promjenom lozinke odjavit ćete se iz svih aktivnih sesija na platformi X, osim one u kojoj se u tom trenutku nalazite. To se ne odnosi na ", " s pristupom vašem računu. "];
                            },
                        },
                        {
                            key: "d3543217",
                            get: function () {
                                return ["Slažem se da X i Persona upotrebljavaju slike mojeg ID-ja i autoportreta, uključujući izvučene biometrijske podatke, u svrhu provjere mojeg identiteta i povezane svrhe osiguranja sigurnosti i zaštite, sprječavanja prijevara i plaćanja na platformi X. Persona smije pohraniti te podatke do 30 dana. X smije pohraniti ime, adresu i sažetke mojeg ID broja dokumenta tijekom razdoblja moje pretplate na ", "."];
                            },
                        },
                        {
                            key: "j7963df1",
                            get: function () {
                                return ["Slažem se da X i Au10tix upotrebljavaju slike mojeg ID-ja i autoportreta, uključujući izvučene biometrijske podatke, u svrhu provjere mojeg identiteta i povezane svrhe osiguranja sigurnosti i zaštite, sprječavanja prijevara i plaćanja na platformi X. Au10tix smije pohraniti te podatke do 30 dana. X smije pohraniti ime, adresu i sažetke broja mojeg identifikacijskog dokumenta tijekom razdoblja mojeg sudjelovanja u programu ", " ili ", "."];
                            },
                        },
                        {
                            key: "f8f20041",
                            get: function () {
                                return ["Slažem se da X i Au10tix upotrebljavaju slike mojeg ID-ja i autoportreta, uključujući izvučene biometrijske podatke, u svrhu provjere mojeg identiteta i povezane svrhe osiguranja sigurnosti i zaštite, sprječavanja prijevara i plaćanja na platformi X. Au10tix smije pohraniti te podatke do 30 dana. X smije pohraniti ime, adresu i sažetke broja mojeg identifikacijskog dokumenta tijekom razdoblja mojeg sudjelovanja u programu ", " ili ", "."];
                            },
                        },
                        {
                            key: "dd49801f",
                            get: function () {
                                return ["Slažem se da X i Stripe upotrebljavaju slike mog identifikacijskog dokumenta i selfija, uključujući izdvojene biometrijske podatke, u svrhu provjere mojeg identiteta i povezane svrhe osiguranja sigurnosti i zaštite, sprječavanja prijevara i plaćanja na platformi X. Stripe i njegovi podizvođači smiju pohraniti te podatke do 30 dana i smiju ih upotrijebiti za obuku modela i ažuriranje baza podataka u svrhu otkrivanja prijevara. X smije pohraniti ime, adresu i sažetke broja mojeg identifikacijskog dokumenta za vrijeme mojeg sudjelovanja u programu ", " ili ", "."];
                            },
                        },
                        {
                            key: "c5cee667",
                            get: function () {
                                return ["Slažem se da X i Stripe upotrebljavaju slike mog identifikacijskog dokumenta i autoportreta, uključujući izdvojene biometrijske podatke, u svrhu provjere mojeg identiteta i povezane svrhe osiguranja sigurnosti i zaštite, sprječavanja prijevara i plaćanja na platformi X. Stripe i njegovi podizvođači smiju pohraniti te podatke do 30 dana i smiju ih upotrijebiti za obuku modela i ažuriranje baza podataka u svrhu otkrivanja prijevara. X smije pohraniti ime, adresu i sažetke broja mojeg identifikacijskog dokumenta za vrijeme mojeg sudjelovanja u programu ", " ili ", "."];
                            },
                        },
                        {
                            key: "a4455c05",
                            get: function () {
                                return ["Zapišite ga ili snimite zaslon na kojem je prikazan pa spremite na sigurno mjesto. Kod možete upotrijebiti samo jednom. "];
                            },
                        },
                        {
                            key: "cd68cf4b",
                            get: function () {
                                return ["Riječ je o državi koja je primarno povezana s vašim računom. U skladu s tim prilagođavamo sučelje za X. "];
                            },
                        },
                        {
                            key: "g66a254b",
                            get: function () {
                                return ["Riječ je o kontaktima koje ste uvezli s mobilnih uređaja. Ti se podaci koriste za personalizaciju sučelja na platformi X, npr. za prijedloge računa koje možete pratiti. Sve kontakte koje ste prethodno prenijeli možete ukloniti i na svim uređajima isključiti sinkronizaciju s platformom X. Imajte na umu da za to treba proći neko vrijeme. "];
                            },
                        },
                        {
                            key: "ffa48331",
                            get: function () {
                                return ["Ako ste to omogućili, objavama ćete moći priložiti podatke o lokaciji. "];
                            },
                        },
                        {
                            key: "a629c16f",
                            get: function () {
                                return ["", " " + this.props.discountedPrice + " naplaćuje se mjesečno tijekom " + n(this.props.duration, this.props.duration + " mjeseca", "jednog mjeseca", this.props.duration + " mjeseci")];
                            },
                        },
                        {
                            key: "c142e70f",
                            get: function () {
                                return ["", " " + this.props.discountedPrice + " se naplaćuje na godišnjoj razini tijekom " + n(this.props.duration, this.props.duration + " godine", "jedne godine", this.props.duration + " godina")];
                            },
                        },
                        {
                            key: "e9dc8a25",
                            get: function () {
                                return ["", " ", " tijekom " + n(this.props.duration, "" + this.props.duration, "jedne", "" + this.props.duration) + " godine"];
                            },
                        },
                        {
                            key: "f8a9cbb7",
                            get: function () {
                                return ["", " ", " tijekom " + n(this.props.duration, this.props.duration + " mjeseci", "jednog mjeseca", this.props.duration + " mjeseci")];
                            },
                        },
                        {
                            key: "ab3bf5a7",
                            get: function () {
                                return ["Kada nekoga blokirate, ta vas osoba neće moći pratiti niti vam slati poruke, a vi nećete vidjeti njezine obavijesti. "];
                            },
                        },
                        {
                            key: "g124fce9",
                            get: function () {
                                return ["Neki podaci o računu mogu i dalje biti dostupni putem tražilica kao što su Google i Bing. "];
                            },
                        },
                        {
                            key: "d9ef8fbb",
                            get: function () {
                                return ["Ako želite samo promijeniti svoje @korisničko_ime, ne morate deaktivirati račun – uredite @korisničko_ime u ", "."];
                            },
                        },
                        {
                            key: "b7a3adc1",
                            get: function () {
                                return ["Da biste trenutačno @korisničko_ime ili adresu e-pošte koristili s drugim računom za X, ", " prije deaktivacije ovog računa."];
                            },
                        },
                        {
                            key: "f3613d0b",
                            get: function () {
                                return ["Ako želite preuzeti ", ", prije deaktivacije računa morate poslati zahtjev i pokrenuti postupak preuzimanja. Poveznice za preuzimanje podataka ne mogu se slati deaktiviranim računima."];
                            },
                        },
                        {
                            key: "e9dec56f",
                            get: function () {
                                return ["Ovime potvrđujete da je datum rođenja ", " točan. Ako nije, odrazit će se na vaš račun."];
                            },
                        },
                        {
                            key: "cfd2909d",
                            get: function () {
                                return ["X na temelju vaše dobi prilagođava sučelje, uključujući oglase, kako je objašnjeno u našim ", "."];
                            },
                        },
                        {
                            key: "jea9c1cb",
                            get: function () {
                                return ["Možete odrediti tko na platformi X može vidjeti vaš rođendan. "];
                            },
                        },
                        {
                            key: "d80a7547",
                            get: function () {
                                return ["Voditelj je "];
                            },
                        },
                        {
                            key: "j7293d6b",
                            get: function () {
                                return ["Suvoditelj je "];
                            },
                        },
                        {
                            key: "df79977f",
                            get: function () {
                                return ["Govori "];
                            },
                        },
                        {
                            key: "ad960f39",
                            get: function () {
                                return ["Sluša "];
                            },
                        },
                        {
                            key: "bab4ce51",
                            get: function () {
                                return [this.props.start + " – " + this.props.end];
                            },
                        },
                        {
                            key: "a1b5887f",
                            get: function () {
                                return [this.props.action + " " + this.props.type];
                            },
                        },
                        {
                            key: "h8b54e37",
                            get: function () {
                                return ["Stvori "];
                            },
                        },
                        {
                            key: "ca584c31",
                            get: function () {
                                return ["Tvrtka s tim web-mjesotm već postoji. Jeste li mislili ", "?"];
                            },
                        },
                        {
                            key: "eb96a831",
                            get: function () {
                                return ["Ti filtri neće utjecati na obavijesti od osoba koje pratite. "];
                            },
                        },
                        {
                            key: "aba5a349",
                            get: function () {
                                return ["Odjednom možete onemogućiti samo jednu riječ, izraz, @korisničko_ime ili znak ljestvi. "];
                            },
                        },
                        {
                            key: "f03ea36d",
                            get: function () {
                                return ["Kada onemogućite neku riječ, više nećete primati obavijesti o objavama koje je sadrže niti ćete objave koje tu riječ sadrže vidjeti na svojoj vremenskoj crti naslovnice. "];
                            },
                        },
                        {
                            key: "b0b13519",
                            get: function () {
                                return ["Ovo su osobe koje ste onemogućili. Na taj ih popis možete dodati ili ukloniti s njega. "];
                            },
                        },
                        {
                            key: "e212a9ab",
                            get: function () {
                                return ["Upravljajte postavkama za prikaz osjetljivog medijskog sadržaja na platformi X. Saznajte više o našem ", "."];
                            },
                        },
                        {
                            key: "cbc4f32d",
                            get: function () {
                                return ["To obuhvaća ostali medijski sadržaj s oznakom osjetljivosti, npr. s računa koji su u svojim ", " označili da je osjetljiv."];
                            },
                        },
                        {
                            key: "a4fc317d",
                            get: function () {
                                return ["Vaš je račun označen i ne može sudjelovati u programu dijeljenja prihoda za autore sadržaja. Možete poslati žalbu prateći upute navedene ", ". Vaš udio prihoda i dalje će se obračunavati dok se žalba obrađuje."];
                            },
                        },
                        {
                            key: "a8e78be7",
                            get: function () {
                                return ["Vaš je račun označen i ne može sudjelovati u programu dijeljenja prihoda od oglasa. Možete poslati žalbu prateći upute navedene ", ". Vaš udio prihoda nastavit će rasti dok se žalba obrađuje."];
                            },
                        },
                        {
                            key: "ge990f4f",
                            get: function () {
                                return [""];
                            },
                        },
                        {
                            key: "e8e2dcd3",
                            get: function () {
                                return [""];
                            },
                        },
                        {
                            key: "g7970bc7",
                            get: function () {
                                return ["Pretplata na sadržaj autora", "" + this.props.name];
                            },
                        },
                        {
                            key: "ede65a59",
                            get: function () {
                                return ["Zanima vas koliko biste mogli zaraditi? "];
                            },
                        },
                        {
                            key: "a9c053c7",
                            get: function () {
                                return ["Prijavom prihvaćate "];
                            },
                        },
                        {
                            key: "geee69df",
                            get: function () {
                                return ["Odaberite mjesečnu cijenu koja ima smisla za vas i vašu publiku. Zanima vas koliko biste mogli zaraditi? "];
                            },
                        },
                        {
                            key: "fdf28443",
                            get: function () {
                                return ["Odabirom gumba za prihvaćanje i nastavak prihvaćate "];
                            },
                        },
                        {
                            key: "f43d68d7",
                            get: function () {
                                return ["Još jednom provjerite i potvrdite svoju cijenu pretplate.", " tijekom razdoblja testiranja pretplata."];
                            },
                        },
                        {
                            key: "h406634b",
                            get: function () {
                                return ["Potvrdili smo vaš račun za Stripe. Pretplate na vašem računu uskoro će postati aktivne. Poslat ćemo vam obavijest čim se to dogodi. Također možete posjetiti svoj profil kako biste provjerili jesu li pretplate omogućene."];
                            },
                        },
                        {
                            key: "d4b0b963",
                            get: function () {
                                return ["Dodirom na gumb u nastavku prihvaćate ", "."];
                            },
                        },
                        {
                            key: "j2d920f7",
                            get: function () {
                                return ["Ako odaberete „Pridruži se i potvrdi ID”, prihvaćate "];
                            },
                        },
                        {
                            key: "fde94f97",
                            get: function () {
                                return ["Ako odaberete „Pridruži se i potvrdi identifikacijski dokument”, pristajete na "];
                            },
                        },
                        {
                            key: "afbd47cb",
                            get: function () {
                                return ["Ostvarite prihod od oglasa koji se prikazuju u odgovorima na vaše objave. Da biste ispunili uvjete za program prihoda od oglasa, vaš se račun mora pridržavati ", ", ", "."];
                            },
                        },
                        {
                            key: "ce6f73c7",
                            get: function () {
                                return ["Upravljajte načinom na koji X personalizira sadržaj u "];
                            },
                        },
                        {
                            key: "j31f2f97",
                            get: function () {
                                return ["Da, svi automatizirani računi moraju imati oznaku. To je obavezno prema našim ", "."];
                            },
                        },
                        {
                            key: "ed8f77d3",
                            get: function () {
                                return ["Saznajte više na stranici s ", "."];
                            },
                        },
                        {
                            key: "dd040d67",
                            get: function () {
                                return ["Saznajte više na stranici ", "."];
                            },
                        },
                        {
                            key: "if2bb997",
                            get: function () {
                                return ["Žao nam je što odlazite. #Doviđenja"];
                            },
                        },
                        {
                            key: "i1e24825",
                            get: function () {
                                return ["Ako niste naveli datum rođenja, ponudili smo raspon na temelju profila i aktivnosti na platformi X. Podaci o dobi koriste se za personalizaciju sučelja. "];
                            },
                        },
                        {
                            key: "a200fc71",
                            get: function () {
                                return ["Nije točan? Datum rođenja možete dodati ", ", a da ga pritom ne podijelite javno."];
                            },
                        },
                        {
                            key: "a97ef88f",
                            get: function () {
                                return ["Prilagođene ciljne skupine obično se stvaraju na temelju popisa adresa e-pošte ili ponašanja povezanih s pregledavanjem weba. One oglašavačima omogućuju pristup potencijalnim klijentima ili korisnicima koji su već pokazali zanimanje za njihovu tvrtku. "];
                            },
                        },
                        {
                            key: "f451c521",
                            get: function () {
                                return ["Trenutno ste dio ", " "];
                            },
                        },
                        {
                            key: "f27cc8af",
                            get: function () {
                                return ["Da biste to omogućili, idite u postavke ", " te uključite mogućnost „Personalizacija na temelju izvedenog identiteta”."];
                            },
                        },
                        {
                            key: "h0085c59",
                            get: function () {
                                return ["Da biste to omogućili, idite u postavke ", " te uključite mogućnost „Personalizacija na temelju izvedenog identiteta”."];
                            },
                        },
                        {
                            key: "b78e30fd",
                            get: function () {
                                return ["Te podatke možete ukloniti tako da u postavkama za ", ' onemogućite postavku "Personalizacija na temelju izvedenog identiteta".'];
                            },
                        },
                        {
                            key: "bb593021",
                            get: function () {
                                return ["Te podatke možete ukloniti tako da onemogućite postavku „Personalizacija na temelju izvedenog identiteta” u postavkama za ", "."];
                            },
                        },
                        {
                            key: "h60f45ef",
                            get: function () {
                                return ["Riječ je o izvedenim raspršenim vrijednostima adresa e-pošte koje standardne komponente dijele s adresom e-pošte koju ste naveli na platformi X. Te podatke možete ukloniti tako da onemogućite postavku „Personalizacija na temelju izvedenog identiteta” u postavkama za ", "."];
                            },
                        },
                        {
                            key: "cbcb2413",
                            get: function () {
                                return ["Ovo su uređaji koje X koristi za poboljšanje i mjerenje sučelja u tom pregledniku. "];
                            },
                        },
                        {
                            key: "e21b623d",
                            get: function () {
                                return ["Ovo su preglednici i uređaji povezani s vama. "];
                            },
                        },
                        {
                            key: "i4d58f43",
                            get: function () {
                                return ["Riječ je o preglednicima, uređajima i informacijama koje X koristi za personalizaciju sučelja. To obuhvaća uređaje i preglednike koje niste koristili za prijavu na X, ali i adrese e-pošte i telefonske brojeve slične onima povezanima s računom za X. "];
                            },
                        },
                        {
                            key: "a1fdeb45",
                            get: function () {
                                return ["Da biste ga uključili, otvorite ", "."];
                            },
                        },
                        {
                            key: "hcb3ad67",
                            get: function () {
                                return ["Ako uočite sumnjive aktivnosti neke aplikacije, idite na ", " da biste joj onemogućili pristup. U nekim se slučajevima IP lokacija može razlikovati od vaše fizičke lokacije. "];
                            },
                        },
                        {
                            key: "adc26d49",
                            get: function () {
                                return ["Partneri platforme X stvaraju ciljne skupine na temelju odluka povezanih s kupnjom, životnog stila i drugih postupaka na mreži i izvan nje. "];
                            },
                        },
                        {
                            key: "efc1de65",
                            get: function () {
                                return ["Došlo je do pogreške zbog koje slanje vaših podataka za X nije uspjelo. Da biste zatražili svoje podatke, ", "."];
                            },
                        },
                        {
                            key: "f0e84609",
                            get: function () {
                                return ["prije "];
                            },
                        },
                        {
                            key: "b76d6eb7",
                            get: function () {
                                return ["Moguće je prikazati samo prvih 1000 gostiju. Neki korisnici možda slušaju anonimno ili nisu prijavljeni na X. ", "."];
                            },
                        },
                        {
                            key: "idcd199b",
                            get: function () {
                                return [this.props.minutes + "m" + this.props.seconds + "s"];
                            },
                        },
                        {
                            key: "ee530bbf",
                            get: function () {
                                return [this.props.hours + "h" + this.props.minutes + "m"];
                            },
                        },
                        {
                            key: "bff29c95",
                            get: function () {
                                return ["", " promijenio/la je fotografiju grupe"];
                            },
                        },
                        {
                            key: "b16e4d45",
                            get: function () {
                                return ["Naziv grupe promijenili ste u „", "”"];
                            },
                        },
                        {
                            key: "c5760699",
                            get: function () {
                                return ["", " promijenio/la je naziv grupe u „", "”"];
                            },
                        },
                        {
                            key: "a72730a1",
                            get: function () {
                                return ["Naziv grupe promijenio se u "];
                            },
                        },
                        {
                            key: "a4bc88c3",
                            get: function () {
                                return ["", " dodao/la je sljedeće sudionike: "];
                            },
                        },
                        {
                            key: "bfdff0c3",
                            get: function () {
                                return ["Dodani: "];
                            },
                        },
                        {
                            key: "fc10875f",
                            get: function () {
                                return ["", " je izašao/la"];
                            },
                        },
                        {
                            key: "fa95b019",
                            get: function () {
                                return ["", " vas je dodao/la"];
                            },
                        },
                        {
                            key: "e3534477",
                            get: function () {
                                return ["U ovoj je grupi još "];
                            },
                        },
                        {
                            key: "b6656851",
                            get: function () {
                                return ["U toj grupi " + n(this.props.count, "su", "je", "su") + " " + this.props.count + " još osob" + n(this.props.count, "e", "a", "a")];
                            },
                        },
                        {
                            key: "d6db6323",
                            get: function () {
                                return ["Sadržaj objave potencijalno je osjetljiv. "];
                            },
                        },
                        {
                            key: "c8b914d5",
                            get: function () {
                                return ["", " ·"];
                            },
                        },
                        {
                            key: "c51866e3",
                            get: function () {
                                return ["Poruke su šifrirane. "];
                            },
                        },
                        {
                            key: "af0bb3eb",
                            get: function () {
                                return ["Toj osobi ne možete slati šifrirane privatne poruke. "];
                            },
                        },
                        {
                            key: "b9f61623",
                            get: function () {
                                return ["Toj osobi više ne možete slati poruke. "];
                            },
                        },
                        {
                            key: "h27b1291",
                            get: function () {
                                return ["Ovaj šifrirani razgovor nije dostupan s trenutnog uređaja. Da biste mu pristupili, prijavite se putem prethodnog uređaja. "];
                            },
                        },
                        {
                            key: "bcabe3f5",
                            get: function () {
                                return ["Ne možete poslati poruku toj grupi jer vaša autentičnost nije provjerena. "];
                            },
                        },
                        {
                            key: "jdef4bc7",
                            get: function () {
                                return ["Ne možete poslati poruku tom korisniku jer vaša autentičnost nije provjerena. "];
                            },
                        },
                        {
                            key: "i005f1fd",
                            get: function () {
                                return ["Odgovorili ste na Fleet korisnika/ce ", ": "];
                            },
                        },
                        {
                            key: "b35cee41",
                            get: function () {
                                return ["Odgovorio/la na vaš Fleet: "];
                            },
                        },
                        {
                            key: "dc4b75a1",
                            get: function () {
                                return ["", " je poslao/la GIF"];
                            },
                        },
                        {
                            key: "hcbbbb35",
                            get: function () {
                                return ["", " poslao/la je vezu"];
                            },
                        },
                        {
                            key: "c1e1f849",
                            get: function () {
                                return ["", " je poslao/la fotografiju"];
                            },
                        },
                        {
                            key: "c7e2464f",
                            get: function () {
                                return ["", " poslao/la je naljepnicu"];
                            },
                        },
                        {
                            key: "eee2f121",
                            get: function () {
                                return ["", " poslao/la je videozapis"];
                            },
                        },
                        {
                            key: "be5a9617",
                            get: function () {
                                return ["", " poslao/la je govornu poruku"];
                            },
                        },
                        {
                            key: "e802e257",
                            get: function () {
                                return ["", " podijelio/la je objavu"];
                            },
                        },
                        {
                            key: "b3a2b11d",
                            get: function () {
                                return ["", ":"];
                            },
                        },
                        {
                            key: "d1f8bdd9",
                            get: function () {
                                return ["Na videozapis korisnika/ce @", " reagirali ste ovako: "];
                            },
                        },
                        {
                            key: "d764af97",
                            get: function () {
                                return ["Na videozapis korisnika/ce @", " ", " je reagirao/la ovako: "];
                            },
                        },
                        {
                            key: "ab1cdfe3",
                            get: function () {
                                return ["Na videozapis ste reagirali ovako: "];
                            },
                        },
                        {
                            key: "f0cf1699",
                            get: function () {
                                return ["Na videozapis je ", " reagirao/la ovako: "];
                            },
                        },
                        {
                            key: "hec0fd4d",
                            get: function () {
                                return ["Na fotografiju korisnika/ce @", " reagirali ste ovako: "];
                            },
                        },
                        {
                            key: "j55320df",
                            get: function () {
                                return ["Na fotografiju korisnika/ce @", " ", " je reagirao/la ovako: "];
                            },
                        },
                        {
                            key: "jf27606b",
                            get: function () {
                                return ["Na fotografiju ste reagirali ovako: "];
                            },
                        },
                        {
                            key: "cd110359",
                            get: function () {
                                return ["Na fotografiju je ", " reagirao/la ovako: "];
                            },
                        },
                        {
                            key: "e70dcc35",
                            get: function () {
                                return ["Na GIF korisnika/ce @", " reagirali ste ovako: "];
                            },
                        },
                        {
                            key: "g1bf440b",
                            get: function () {
                                return ["Na GIF korisnika/ce @", " ", " je reagirao/la ovako: "];
                            },
                        },
                        {
                            key: "b2da1bf9",
                            get: function () {
                                return ["Na GIF ste reagirali ovako: "];
                            },
                        },
                        {
                            key: "g84c0421",
                            get: function () {
                                return ["Na GIF je ", " reagirao/la ovako: "];
                            },
                        },
                        {
                            key: "hc1bd66d",
                            get: function () {
                                return ["Reagirali ste na objavu korisnika/ce @", " ovako: "];
                            },
                        },
                        {
                            key: "bd3edf13",
                            get: function () {
                                return ["", " reagirao/la je na objavu korisnika/ce @", " ovako: "];
                            },
                        },
                        {
                            key: "df2dc76f",
                            get: function () {
                                return ["Reagirali ste na objavu ovako: "];
                            },
                        },
                        {
                            key: "aba18aef",
                            get: function () {
                                return ["", " reagirao/la je na objavu ovako: "];
                            },
                        },
                        {
                            key: "cd2e7c19",
                            get: function () {
                                return ["Na poveznicu korisnika/ce @", " reagirali ste ovako: "];
                            },
                        },
                        {
                            key: "aee9e7fb",
                            get: function () {
                                return ["Na poveznicu korisnika/ce @", " ", " je reagirao/la ovako: "];
                            },
                        },
                        {
                            key: "f9fb1cf7",
                            get: function () {
                                return ["Na poveznicu ste reagirali ovako: "];
                            },
                        },
                        {
                            key: "f2bf910f",
                            get: function () {
                                return ["Na poveznicu je ", " reagirao/la ovako: "];
                            },
                        },
                        {
                            key: "i6cec545",
                            get: function () {
                                return ["Na poruku korisnika/ce @", " reagirali ste ovako ", ": "];
                            },
                        },
                        {
                            key: "d6998bab",
                            get: function () {
                                return ["Na poruku korisnika/ce ", " ", " je reagirao/la ovako: ", ": "];
                            },
                        },
                        {
                            key: "cec676f3",
                            get: function () {
                                return ["Reagirali ste ovako: ", ": "];
                            },
                        },
                        {
                            key: "a2706f9b",
                            get: function () {
                                return ["", " je reagirao/la ovako: ", ": "];
                            },
                        },
                        {
                            key: "ff973a65",
                            get: function () {
                                return ["Na govornu poruku korisnika/ce @", " reagirali ste ovako: "];
                            },
                        },
                        {
                            key: "ec2cede5",
                            get: function () {
                                return ["Na govornu poruku korisnika/ce @", " ", " je reagirao/la ovako: "];
                            },
                        },
                        {
                            key: "i1d08199",
                            get: function () {
                                return ["Na govornu poruku reagirali ste ovako: "];
                            },
                        },
                        {
                            key: "d424b45f",
                            get: function () {
                                return ["Korisnik/ca ", " na govornu poruku reagirao/la je ovako: "];
                            },
                        },
                        {
                            key: "d6b15bbf",
                            get: function () {
                                return ["Vi ste reagirali ovako: "];
                            },
                        },
                        {
                            key: "ac0d4bc7",
                            get: function () {
                                return ["", " je reagirao/la ovako: "];
                            },
                        },
                        {
                            key: "fa4f5b49",
                            get: function () {
                                return ["Sustavi platforme X pregledavaju dijeljene veze i medijske sadržaje radi mogućeg neželjenog, zlonamjernog ili zabranjenog sadržaja. Analiziramo i obrasce upotrebe radi otkrivanja sumnjivog ponašanja te radi poboljšanja sučelja. Moguć je i ručni pregled privatnih poruka radi istrage prijavljenih kršenja i zloupotreba našeg servisa ili radi usklađivanja s propisima ili službenim zahtjevima. Više o tome sadrže naša ", "."];
                            },
                        },
                        {
                            key: "a66142ad",
                            get: function () {
                                return ["Ovdje će se spremati zahtjevi za poruke od osoba koje ne pratite. Da biste odgovorili na njihove poruke, zahtjev morate prihvatiti. "];
                            },
                        },
                        {
                            key: "hc37d3bb",
                            get: function () {
                                return ["Kada počnete odgovarati, Google može početi prikupljati i koristiti podatke o vama, vašem uređaju i pregledniku. Pogledajte ", " za Google."];
                            },
                        },
                        {
                            key: "eea0a14f",
                            get: function () {
                                return [this.props.formattedCount + " oznak" + n(this.props.count, "e", "a", "a") + " „sviđa mi se”"];
                            },
                        },
                        {
                            key: "cca42d0b",
                            get: function () {
                                return [this.props.formattedCount + " fotografij" + n(this.props.count, "e i videozapisa", "a i videozapis", "a i videozapisa")];
                            },
                        },
                        {
                            key: "a0a3adf7",
                            get: function () {
                                return [this.props.formattedCount + " nov" + n(this.props.count, "e objave", "a objava", "ih objava")];
                            },
                        },
                        {
                            key: "e6264621",
                            get: function () {
                                return ["Ne možete pratiti ni vidjeti objave korisnika/ce @" + this.props.screenName + ". "];
                            },
                        },
                        {
                            key: "f98ecc47",
                            get: function () {
                                return ["Jeste li sigurni da želite vidjeti te objave? Prikazom objava nećete odblokirati korisnika/cu @" + this.props.screenName + ". "];
                            },
                        },
                        {
                            key: "i8197603",
                            get: function () {
                                return ["Povredu intelektualnog vlasništva prijavite u ", ". Da biste prijavili ostale probleme u vezi s tim proizvodom, otvorite aplikaciju za iOS ili Android."];
                            },
                        },
                        {
                            key: "a21f2f79",
                            get: function () {
                                return ["Da biste saznali više o kršenju pravila za proizvode, ", "."];
                            },
                        },
                        {
                            key: "ff60a139",
                            get: function () {
                                return ["Broj: "];
                            },
                        },
                        {
                            key: "f575f533",
                            get: function () {
                                return ["Kategorije se samostalno odabiru te ih X ne dodjeljuje, ne potvrđuje ni ne podržava. "];
                            },
                        },
                        {
                            key: "cebed305",
                            get: function () {
                                return ["Taj je račun povezan sa sljedećim: ", "."];
                            },
                        },
                        {
                            key: "i1824ce3",
                            get: function () {
                                return ["Samo odobrene osobe koje ga/je prate mogu vidjeti objave korisnika/ce @" + this.props.screenName + ". Da biste zatražili pristup, kliknite Prati. "];
                            },
                        },
                        {
                            key: "da9d52d7",
                            get: function () {
                                return ["X obustavlja račune koji krše "];
                            },
                        },
                        {
                            key: "b028aec5",
                            get: function () {
                                return ["Moramo znati je li račun za X ", " vaš. Ako nije, pristupit ćemo uklanjanju adrese e-pošte ", " s njega."];
                            },
                        },
                        {
                            key: "c43645ad",
                            get: function () {
                                return ["Ako je račun za X ", " vaš i želite otkazati pretplatu na obavijesti e-poštom, otvorite "];
                            },
                        },
                        {
                            key: "b8e3884f",
                            get: function () {
                                return ["Vašu smo adresu e-pošte ", " uklonili s računa za X ", ". Sada za taj račun nećete dobivati obavijesti."];
                            },
                        },
                        {
                            key: "b72bbe27",
                            get: function () {
                                return [""];
                            },
                        },
                        {
                            key: "iddf579b",
                            get: function () {
                                return ["Netko je možda nehotice unio vašu adresu e-pošte prilikom prijave na svoj račun za X. No netko ga je možda pokušao i zloupotrijebiti. Taj račun možete prijaviti te tako omogućiti identifikaciju i uklanjanje neželjenog sadržaja s platforme X. "];
                            },
                        },
                        {
                            key: "ad69fd83",
                            get: function () {
                                return ["", ": "];
                            },
                        },
                        {
                            key: "d9cb9d0b",
                            get: function () {
                                return ["Da biste najbolje iskoristili najpopularnije članke, pokušajte pratiti ", "."];
                            },
                        },
                        {
                            key: "dc3a6d2d",
                            get: function () {
                                return ["Počeli ste pratiti korisnika/cu @" + this.props.screenName + ". ", "."];
                            },
                        },
                        {
                            key: "j5668d8f",
                            get: function () {
                                return ["Dok slušate anonimno, nećete biti vidljivi i nećete moći sudjelovati. "];
                            },
                        },
                        {
                            key: "fafd5f6f",
                            get: function () {
                                return ["Jedna je od pretplatničkih pogodnosti ekskluzivan pristup Prostorima kao što je ovaj. U taj se Prostor mogu uključiti samo pretplatnici korisnika/ce @" + this.props.screenName + ". ", "."];
                            },
                        },
                        {
                            key: "b1e1d521",
                            get: function () {
                                return ["Povećajte utjecaj svojih ocjena na " + this.props.ratingImpactToEarnIn + " sa sadašnjih " + this.props.currentImpact + " i opet ćete moći pisati zabilješke."];
                            },
                        },
                        {
                            key: "e3a1e2a3",
                            get: function () {
                                return ["Na poveznicu u objavi (", ") i treba se pojaviti u svim objavama koje sadrže tu poveznicu"];
                            },
                        },
                        {
                            key: "eb0960b9",
                            get: function () {
                                return ["Jeste li sigurni da će ta zabilješka biti korisna na ", " s tom slikom, čak i ako su u tim objavama izrečene drukčije stvari?"];
                            },
                        },
                        {
                            key: "c14fcfe5",
                            get: function () {
                                return ["Jeste li sigurni da će ta zabilješka biti korisna na svim objavama s tom slikom, čak i ako su u tim objavama izrečene drukčije stvari?"];
                            },
                        },
                        {
                            key: "f8d04b49",
                            get: function () {
                                return ["Jeste li sigurni da će ta zabilješka biti korisna na ", " s tim videozapisom, čak i ako su u tim objavama izrečene drukčije stvari?"];
                            },
                        },
                        {
                            key: "ef94efc3",
                            get: function () {
                                return ["Jeste li sigurni da će ta zabilješka biti korisna na svim objavama s tim videozapisom, čak i ako su u tim objavama izrečene drukčije stvari?"];
                            },
                        },
                        {
                            key: "a89cdd31",
                            get: function () {
                                return ["Jeste li sigurni da će ta zabilješka biti korisna na ", " s tim medijskim sadržajem, čak i ako su u tim objavama izrečene drukčije stvari?"];
                            },
                        },
                        {
                            key: "f19fb541",
                            get: function () {
                                return ["Jeste li sigurni da će ta zabilješka biti korisna na svim objavama s tim medijskim sadržajem, čak i ako su u tim objavama izrečene drukčije stvari?"];
                            },
                        },
                        {
                            key: "i9e31fe5",
                            get: function () {
                                return ["Saznajte više o značajci "];
                            },
                        },
                        {
                            key: "h14bda75",
                            get: function () {
                                return ["Zahtjevi su anonimizirani i ", " radi transparentnosti"];
                            },
                        },
                        {
                            key: "c43ef159",
                            get: function () {
                                return ["Ako želite pomoći u pisanju u ocjenjivanju Bilješki zajednice, "];
                            },
                        },
                        {
                            key: "c815dfaf",
                            get: function () {
                                return ["Kako bi kvaliteta zahtjeva ostala visoka i kako bi se spriječio spam, računi moraju imati potvrđen broj telefona kako bi zatražili Bilješke zajednice. "];
                            },
                        },
                        {
                            key: "bd9cf141",
                            get: function () {
                                return ["Kao autor objave možete "];
                            },
                        },
                        {
                            key: "e837f62f",
                            get: function () {
                                return [this.props.impactDisplayNumber + " Utjecaj ocjena"];
                            },
                        },
                        {
                            key: "f2bad803",
                            get: function () {
                                return [this.props.impactDisplayNumber + " Utjecaj zabilješki"];
                            },
                        },
                        {
                            key: "g062ed0f",
                            get: function () {
                                return ["Zabilješka je izvorno dodana slici na objavi koja je u međuvremenu izbrisana te se može prikazivati na drugim objavama koje uključuju tu sliku"];
                            },
                        },
                        {
                            key: "j4f06e2f",
                            get: function () {
                                return ["Zabilješka je prvotno dodana slici na ", " i može se prikazati na drugim objavama koje sadrže tu sliku"];
                            },
                        },
                        {
                            key: "ida22561",
                            get: function () {
                                return ["Zabilješka je izvorno dodana videozapisu na objavi koja je u međuvremenu izbrisana te se može prikazivati na drugim objavama koje uključuju taj videozapis"];
                            },
                        },
                        {
                            key: "g68aa88d",
                            get: function () {
                                return ["Zabilješka je prvotno dodana videozapisu na ", " i može se prikazati na drugim objavama koje sadrže taj videozapis"];
                            },
                        },
                        {
                            key: "ia62f949",
                            get: function () {
                                return ["Zabilješka je izvorno dodana mediju na objavi koja je u međuvremenu izbrisana te se može prikazivati na drugim objavama koje uključuju taj medij"];
                            },
                        },
                        {
                            key: "c6eb7cbb",
                            get: function () {
                                return ["Zabilješka je prvotno dodana mediju na ", " i može se prikazati na drugim objavama koje sadrže taj medij"];
                            },
                        },
                        {
                            key: "f9b81033",
                            get: function () {
                                return ["Zabilješka je izvorno napisana na objavi koja je u međuvremenu izbrisana te se može prikazivati na drugim objavama koje uključuju vezu na "];
                            },
                        },
                        {
                            key: "de254823",
                            get: function () {
                                return ["Zabilješka je originalno zapisana na ", ". Može se prikazati na drugim objavama koje sadrže vezu na "];
                            },
                        },
                        {
                            key: "de5532bd",
                            get: function () {
                                return ["Može biti prikazana na ", " koje sadrže taj videozapis, ako se ljudi slažu oko toga."];
                            },
                        },
                        {
                            key: "ib6805bd",
                            get: function () {
                                return ["Može biti prikazana na objavama koje sadrže taj videozapis, ako se ljudi slažu oko toga."];
                            },
                        },
                        {
                            key: "g185d44d",
                            get: function () {
                                return ["Može biti prikazana na ", " koje sadrže tu sliku, ako se ljudi slažu oko toga."];
                            },
                        },
                        {
                            key: "aeebdd99",
                            get: function () {
                                return ["Može biti prikazana na objavama koje sadrže tu sliku, ako se ljudi slažu oko toga."];
                            },
                        },
                        {
                            key: "d54bfbd9",
                            get: function () {
                                return ["Može biti prikazana na ", " koje sadrže taj medijski sadržaj, ako se ljudi slažu oko toga."];
                            },
                        },
                        {
                            key: "a9efbf0f",
                            get: function () {
                                return ["Može biti prikazana na objavama koje sadrže taj medijski sadržaj, ako se ljudi slažu oko toga."];
                            },
                        },
                        {
                            key: "jef71e81",
                            get: function () {
                                return ["Zabilješka je izvorno dodana videozapisu na objavi koja je u međuvremenu izbrisana te se prikazuje na ", " koje uključuju taj videozapis"];
                            },
                        },
                        {
                            key: "ie594609",
                            get: function () {
                                return ["Zabilješka je izvorno dodana videozapisu na ", " i prikazuje se na sljedećem broju objava koje uključuju ovaj videozapis: "];
                            },
                        },
                        {
                            key: "a48e0b6b",
                            get: function () {
                                return ["Zabilješka je izvorno dodana videozapisu na objavi koja je u međuvremenu izbrisana te se može prikazivati na ", " koje uključuju taj videozapis"];
                            },
                        },
                        {
                            key: "a0e626a3",
                            get: function () {
                                return ["Zabilješka je izvorno dodana videozapisu na ", " te bi se mogla prikazati na sljedećem broju objava koje uključuju ovaj videozapis: "];
                            },
                        },
                        {
                            key: "fcd2eeeb",
                            get: function () {
                                return ["Zabilješka je izvorno dodana slici na objavi koja je u međuvremenu izbrisana te se prikazuje na ", " koje uključuju tu sliku"];
                            },
                        },
                        {
                            key: "j300ac63",
                            get: function () {
                                return ["Zabilješka je prvotno dodana slici na ", "i prikazuje se na sljedećem broju objava koje sadrže ovu sliku: "];
                            },
                        },
                        {
                            key: "bf532f23",
                            get: function () {
                                return ["Zabilješka je izvorno dodana slici na objavi koja je u međuvremenu izbrisana te se može prikazivati na ", " koje uključuju tu sliku"];
                            },
                        },
                        {
                            key: "bda86c55",
                            get: function () {
                                return ["Zabilješka je izvorno dodana slici na ", " i mogla bi se prikazati na sljedećem broju objava koje uključuju ovu sliku: "];
                            },
                        },
                        {
                            key: "a13701bd",
                            get: function () {
                                return ["Zabilješka je izvorno dodana mediju na objavi koja je u međuvremenu izbrisana te se prikazuje na ", " koje uključuju taj medij"];
                            },
                        },
                        {
                            key: "e2a0a791",
                            get: function () {
                                return ["Zabilješka je izvorno dodana medijskom sadržaju na ", " te se prikazuje na sljedećem broju objava koje uključuju ovaj medijski sadržaj: "];
                            },
                        },
                        {
                            key: "b8e4bb0b",
                            get: function () {
                                return ["Zabilješka je izvorno dodana mediju na objavi koja je u međuvremenu izbrisana te se može prikazivati na ", " koje uključuju taj medij"];
                            },
                        },
                        {
                            key: "hada7e59",
                            get: function () {
                                return ["Zabilješka je izvorno dodana medijskom sadržaju na ", " te bi se mogla prikazivati na sljedećem broju objava koje uključuju ovaj medijski sadržaj: ", " "];
                            },
                        },
                        {
                            key: "e8969de9",
                            get: function () {
                                return ["Prikazuje se na ", " koje sadrže vezu na "];
                            },
                        },
                        {
                            key: "a389fb7b",
                            get: function () {
                                return ["Može se prikazati na ", " koje sadrže vezu na "];
                            },
                        },
                        {
                            key: "gd8d8205",
                            get: function () {
                                return ["Zabilješka se izvorno nalazila na objavi koja je u međuvremenu izbrisana. Prikazuje se na ", " koje uključuju vezu na "];
                            },
                        },
                        {
                            key: "i981a661",
                            get: function () {
                                return ["Zabilješka se izvorno nalazila na ", ".Prikazuje se na ", " koje sadrže vezu na "];
                            },
                        },
                        {
                            key: "jceb2edb",
                            get: function () {
                                return ["Zabilješka se izvorno nalazila na objavi koja je u međuvremenu izbrisana. Može se prikazivati na ", " koje uključuju vezu na "];
                            },
                        },
                        {
                            key: "f20a22a1",
                            get: function () {
                                return ["Zabilješka se izvorno nalazila na ", ". Može se prikazati na ", " koje sadrže vezu na "];
                            },
                        },
                        {
                            key: "f43e2fdf",
                            get: function () {
                                return ["Prikazuje se maloj eksperimentalonoj grupi na platformi X · više od " + this.props.impressionTruncated + " prikaza"];
                            },
                        },
                        {
                            key: "j72bc9ab",
                            get: function () {
                                return ["Prikazuje se maloj eksperimentalonoj grupi na platformi X"];
                            },
                        },
                        {
                            key: "d60e4375",
                            get: function () {
                                return ["Prikazuje se na platformi X · više od " + this.props.impressionTruncated + " prikaza"];
                            },
                        },
                        {
                            key: "bf62daf1",
                            get: function () {
                                return ["Prikazuje se na X-u"];
                            },
                        },
                        {
                            key: "i8fa1313",
                            get: function () {
                                return ["Ocjene su anonimizirane i javno dostupne radi transparentnosti. Saznajte kako, zahvaljujući Bilješkama zajednice, podaci ", "."];
                            },
                        },
                        {
                            key: "had203a9",
                            get: function () {
                                return ["Tu ste napomenu ocijenili ", "."];
                            },
                        },
                        {
                            key: "h42a21df",
                            get: function () {
                                return ["Tu ste napomenu ocijenili ", "."];
                            },
                        },
                        {
                            key: "c3d1a1b1",
                            get: function () {
                                return ["Tu napomenu ", "."];
                            },
                        },
                        {
                            key: "c7f250eb",
                            get: function () {
                                return ["Treba li se ta zabilješka prikazati na ", " koje sadrže vezu na ", "?"];
                            },
                        },
                        {
                            key: "bc2fde51",
                            get: function () {
                                return ["Treba li se ta zabilješka prikazati na ", " koje sadrže taj isti videozapis?"];
                            },
                        },
                        {
                            key: "e80d1f67",
                            get: function () {
                                return ["Treba li se ta zabilješka prikazati na ", " koje sadrže tu istu sliku?"];
                            },
                        },
                        {
                            key: "c692f6b5",
                            get: function () {
                                return ["Treba li se ta zabilješka prikazati na ", " koje sadrže taj isti medijski sadržaj?"];
                            },
                        },
                        {
                            key: "g46e2949",
                            get: function () {
                                return ["Treba li se ta zabilješka prikazati na svim objavama koje sadrže vezu na ", "?"];
                            },
                        },
                        {
                            key: "c57661e9",
                            get: function () {
                                return ["Treba li se ta zabilješka prikazati na svim objavama koje sadrže taj isti videozapis?"];
                            },
                        },
                        {
                            key: "bb286921",
                            get: function () {
                                return ["Treba li se ta zabilješka prikazati na svim objavama koje sadrže tu istu sliku?"];
                            },
                        },
                        {
                            key: "df397f55",
                            get: function () {
                                return ["Treba li se ta zabilješka prikazati na svim objavama koje sadrže taj isti medijski sadržaj?"];
                            },
                        },
                        {
                            key: "b936a16b",
                            get: function () {
                                return ["Imate ideje ili prijedloge za poboljšanje Bilješki zajednice? "];
                            },
                        },
                        {
                            key: "e77dac87",
                            get: function () {
                                return ["Prikaži još " + this.props.remainingCount + " objav" + n(this.props.remainingCount, "e koje", "u koju", "a koje") + "  su podnositelji zahtjeva citirali"];
                            },
                        },
                        {
                            key: "if0d6dd7",
                            get: function () {
                                return ["Suradnici u Bilješkama zajednice koriste pseudonime · "];
                            },
                        },
                        {
                            key: "f49cbf83",
                            get: function () {
                                return ["Ta je značajka nova u Zabilješkama zajednice pa nam slobodno "];
                            },
                        },
                        {
                            key: "a94c6db7",
                            get: function () {
                                return ["Povećajte utjecaj svojih ocjena na " + this.props.requiredRatingImpact + " sa sadašnjih " + this.props.currentRatingImpact + "."];
                            },
                        },
                        {
                            key: "f52f0cbd",
                            get: function () {
                                return ["Broj izbrisanih bilješki: " + this.props.num];
                            },
                        },
                        {
                            key: "ccdfbd75",
                            get: function () {
                                return ["Da biste otključali funkciju pisanja zabilješki, rezultat povećajte na " + this.props.requiredRatingImpact];
                            },
                        },
                        {
                            key: "a32c38ad",
                            get: function () {
                                return ["Želite početi pisati zabilješke? Povećajte utjecaj svojih ocjena na minimalno " + this.props.requiredRatingImpact + "."];
                            },
                        },
                        {
                            key: "d458f69d",
                            get: function () {
                                return ["Bilješke zajednice čuvaju statuse izbrisanih bilješki radi točne dodjele reputacije autoru i ocjenjivačima bilješke. "];
                            },
                        },
                        {
                            key: "i42495ad",
                            get: function () {
                                return ["Kontekst pišu osobe koje koriste X, a pojavljuje se kad ga ostali korisnici ocijene korisnim. "];
                            },
                        },
                        {
                            key: "c475a5d3",
                            get: function () {
                                return ["Upotreba skupova podataka regulirana je X-ovim ugovorom i pravilnikom za razvojne programere. Klikom na ikonu za preuzimanje prihvaćate ", "."];
                            },
                        },
                        {
                            key: "g19fcc5b",
                            get: function () {
                                return ["Datoteka br. " + this.props.fileIndex + " od " + this.props.totalFiles];
                            },
                        },
                        {
                            key: "e7e44bab",
                            get: function () {
                                return ["Pokušajte potražiti nešto drugo ili u ", " provjerite je li postavljena zaštita od potencijalno osjetljivog sadržaja."];
                            },
                        },
                        {
                            key: "b3a3ce8d",
                            get: function () {
                                return ["Aktivnost prije "];
                            },
                        },
                        {
                            key: "d46c6e8f",
                            get: function () {
                                return ["Želite li korisnika/cu ", " zaista postaviti kao moderatora?"];
                            },
                        },
                        {
                            key: "c3a1f2bf",
                            get: function () {
                                return ["Želite li korisnika/cu ", " zaista ukloniti s mjesta moderatora?"];
                            },
                        },
                        {
                            key: "c2696cdf",
                            get: function () {
                                return ["Da biste nastavili, unesite "];
                            },
                        },
                        {
                            key: "b160df39",
                            get: function () {
                                return ["Moderator ", " sakrio je objavu"];
                            },
                        },
                        {
                            key: "h1513297",
                            get: function () {
                                return ["Moderator ", " prikvačio je objavu"];
                            },
                        },
                        {
                            key: "e523e9f1",
                            get: function () {
                                return ["Moderator ", " otkvačio je objavu"];
                            },
                        },
                        {
                            key: "g93119e7",
                            get: function () {
                                return ["Moderator ", " poništio je skrivanje objave"];
                            },
                        },
                        {
                            key: "c6e18a45",
                            get: function () {
                                return ["Moderator ", " uklonio je člana"];
                            },
                        },
                        {
                            key: "ef3b57ef",
                            get: function () {
                                return ["Moderator ", " ponovno je vratio člana"];
                            },
                        },
                        {
                            key: "e7878d67",
                            get: function () {
                                return ["Korisnik ", " pridružio se ovoj zajednici"];
                            },
                        },
                        {
                            key: "hd2489bb",
                            get: function () {
                                return ["Korisnik ", " napustio je ovu zajednicu"];
                            },
                        },
                        {
                            key: "b4aa9d7b",
                            get: function () {
                                return ["Moderator ", " odobrio je zahtjev za članstvo"];
                            },
                        },
                        {
                            key: "c5900395",
                            get: function () {
                                return ["Moderator ", " odbio je zahtjev za članstvo"];
                            },
                        },
                        {
                            key: "g561eb89",
                            get: function () {
                                return ["Moderator ", " ponovno je odobrio zahtjev za članstvo"];
                            },
                        },
                        {
                            key: "j5602f3b",
                            get: function () {
                                return ["To su prijavili ", " i "];
                            },
                        },
                        {
                            key: "dd132edd",
                            get: function () {
                                return ["Prijavio "];
                            },
                        },
                        {
                            key: "je0779b7",
                            get: function () {
                                return ["Prijavljeno: "];
                            },
                        },
                        {
                            key: "a0071f71",
                            get: function () {
                                return ["Sakrili ste objavu korisnika/ce @"];
                            },
                        },
                        {
                            key: "c4ec9d43",
                            get: function () {
                                return ["Zadržali ste objavu korisnika/ce @"];
                            },
                        },
                        {
                            key: "he99cc29",
                            get: function () {
                                return [""];
                            },
                        },
                        {
                            key: "a346641b",
                            get: function () {
                                return ["Stvoreno " + this.props.date + ", autor: "];
                            },
                        },
                        {
                            key: "a9ec3729",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "g0aa3be7",
                            get: function () {
                                return ["Da biste upotrebljavali tu značajku, prebacite se na račun čiji ste vlasnik.\n\nKao suradnik možete slati privatne poruke, objavljivati objave i stvarati popise te ih pregledavati.\n\nUvijek tražimo načine na koje možemo poboljšati platformu za delegiranje uloga. Slobodno nam ", "."];
                            },
                        },
                        {
                            key: "g29b68f9",
                            get: function () {
                                return ["Da biste upotrebljavali tu značajku, prebacite se na račun čiji ste vlasnik.\n\nKao administrator možete slati privatne poruke, objavljivati objave i stvarati popise te ih pregledavati. Možete slati i pozivnice za suradnike za taj račun ili uklanjati suradnike s njega te vidjeti analitičke podatke o objavama.\n\nUvijek tražimo načine na koje možemo poboljšati platformu za delegiranje uloga. Slobodno nam ", "."];
                            },
                        },
                        {
                            key: "c6dca173",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "e6979e4b",
                            get: function () {
                                return ["", " za prikaz više informacija o tom poslu"];
                            },
                        },
                        {
                            key: "ie9320f7",
                            get: function () {
                                return ["Omogućite prikazivanje poslova za ključnu riječ ", " ", " na svojoj vremenskoj crti"];
                            },
                        },
                        {
                            key: "c70aad4b",
                            get: function () {
                                return ["Prikazivanje poslova za ključnu riječ ", " "];
                            },
                        },
                        {
                            key: "cc70dc63",
                            get: function () {
                                return ["Prikazom objava nećete deblokirati korisnika/cu @" + this.props.screenName + ". "];
                            },
                        },
                        {
                            key: "d6c6deaf",
                            get: function () {
                                return ["Prednarudžba po cijeni od "];
                            },
                        },
                        {
                            key: "gbef9649",
                            get: function () {
                                return ["", " saznajte više o našim programima i pravilima monetizacije."];
                            },
                        },
                        {
                            key: "da2a091b",
                            get: function () {
                                return ["Kupnjom prihvaćate naše dokumente ", " i ", ". Pretplate se automatski obnavljaju dok ih ne otkažete, kao što je navedeno u Uvjetima. Otkažite u bilo kojem trenutku."];
                            },
                        },
                        {
                            key: "c23c08c9",
                            get: function () {
                                return ["Kupnjom prihvaćate naše dokumente ", " i ", "."];
                            },
                        },
                        {
                            key: "d39ad44d",
                            get: function () {
                                return ["Oznake „sviđa mi se”, spominjanja, proslijeđene objave i još mnogo toga pronaći ćete ovdje – ako ih objave provjereni računi. "];
                            },
                        },
                        {
                            key: "b004e8bf",
                            get: function () {
                                return ["Otvorite ", " i saznajte više o pristupu aplikacijama drugih proizvođača."];
                            },
                        },
                        {
                            key: "afd52f45",
                            get: function () {
                                return ["Autor: ", ". Pročitajte  ", " i ", " za " + this.props.orgName + "."];
                            },
                        },
                        {
                            key: "b88304a3",
                            get: function () {
                                return ["Za podršku pošaljite poruku na ", "."];
                            },
                        },
                        {
                            key: "j766b689",
                            get: function () {
                                return ["", " da biste započeli"];
                            },
                        },
                        {
                            key: "ef7ce733",
                            get: function () {
                                return ["Sinkronizirano iz usluge "];
                            },
                        },
                        {
                            key: "i958b2bd",
                            get: function () {
                                return ["Podijelio/la "];
                            },
                        },
                        {
                            key: "b2c03e03",
                            get: function () {
                                return ["Ako imate pitanja u vezi sa zapošljavanjem platforme X, pošaljite nam poruku e-pošte na adresu ", "."];
                            },
                        },
                        {
                            key: "c57cd3a3",
                            get: function () {
                                return ["(Za organizacije ", ")"];
                            },
                        },
                        {
                            key: "bec92f3b",
                            get: function () {
                                return ["Ako započnete ", " i pretplatite se, pristajete na naše ", ". Nakon " + this.props.numberOfDays + "-dnevne besplatne probne verzije, naplatit će vam se iznos godišnjeg ili mjesečnog plana koji odaberete prilikom prijave, osim ako otkažete unutar razdoblja " + this.props.numberOfDays + "-dnevne besplatne probne verzije. Pretplate se automatski obnavljaju do otkazivanja, kao što je opisano u Uvjetima ", ". Ako želite otkazati pretplatu, to učinite najmanje 24 sata prije obnove kako biste izbjegli dodatne naplate. Za pretplatu je potreban provjeren telefonski broj. Ako ste se pretplatili na nekoj drugoj platformi, pretplatom upravljajte na toj platformi."];
                            },
                        },
                        {
                            key: "ca87939f",
                            get: function () {
                                return ["Pretplatom pristajete na naše ", ". Pretplate se automatski obnavljaju do otkazivanja, kako je opisano u ", ". ", ". Ako želite otkazati pretplatu, to učinite najmanje 24 sata prije obnove kako biste izbjegli dodatne naplate. Kada nadograđujete na višu razinu, kredit ostatka prethodne pretplate prebacuje se na vaš račun i automatski upotrebljava za daljnja plaćanja. Vaša će nova pretplata odmah započeti. Za pretplatu je potreban provjeren telefonski broj."];
                            },
                        },
                        {
                            key: "ed2a6ba9",
                            get: function () {
                                return ["Pretplatom pristajete na naše ", ". Pretplate se automatski obnavljaju do otkazivanja, kao što je opisano u ", ". ", ". Ako želite otkazati pretplatu, to učinite najmanje 24 sata prije obnove kako biste izbjegli dodatne naplate. Kada prelazite na nižu razinu, vaša će se trenutna pretplata i povezane značajke odmah prebaciti na novu razinu pretplate. Nećete dobiti povrat sredstava ni za koji dio prethodne pretplate, osim ako to nije zakonski obvezno. Nadalje, odmah će vam se naplatiti cijena nove razine. Za pretplatu je potreban provjeren telefonski broj."];
                            },
                        },
                        {
                            key: "db638a21",
                            get: function () {
                                return ["Pretplatom pristajete na naše ", ". Pretplate se automatski obnavljaju do otkazivanja, kao što je opisano u ", ". ", ". Ako želite otkazati pretplatu, to učinite najmanje 24 sata prije obnove kako biste izbjegli dodatne naplate. Kada mijenjate plan, vaša će nova pretplata odmah započeti. Kredit ostatka prethodne pretplate prebacuje se na vaš račun i automatski upotrebljava za daljnja plaćanja. Za pretplatu je potreban provjeren telefonski broj."];
                            },
                        },
                        {
                            key: "b2138d0f",
                            get: function () {
                                return ["Ako se pretplatite, pristajete na naše ", ". Pretplate se automatski obnavljaju sve dok ih ne otkažete, kao što je opisano u ", ". ", ". Ako želite otkazati pretplatu, to učinite najmanje 24 sata prije obnove kako biste izbjegli dodatne naplate. Ako nadograđujete pretplatu, vaša trenutačna pretplata i povezane značajke odmah će se prebaciti na novu razinu pretplate. Odmah ćemo vam naplatiti cijenu nove razine, ali sav preostali saldo trenutačnog ciklusa naplate proporcionalno će se preusmjeriti za današnji ukupni iznos za plaćanje. Nećete dobiti povrat novca ni za koji dio prethodne pretplate, osim ako zakon nalaže drukčije."];
                            },
                        },
                        {
                            key: "c2255911",
                            get: function () {
                                return ["Ako se pretplatite, pristajete na naše ", ". Pretplate se automatski obnavljaju sve dok ih ne otkažete, kao što je opisano u ", ". ", ". Ako želite otkazati pretplatu, to učinite najmanje 24 sata prije obnove kako biste izbjegli dodatne naplate. Ako smanjujete razinu pretplate, vaša trenutačna pretplata ostaje aktivna do sljedećeg ciklusa naplate, kada će započeti vaša nova pretplata. Cijena nove razine naplatit će vam se na početku sljedećeg ciklusa naplate."];
                            },
                        },
                        {
                            key: "e647175f",
                            get: function () {
                                return ["Ako se pretplatite, pristajete na naše ", ". Pretplate se automatski obnavljaju sve dok ih ne otkažete, kao što je opisano u ", ". ", ". Ako želite otkazati pretplatu, to učinite najmanje 24 sata prije obnove kako biste izbjegli dodatne naplate. Ako mijenjate pretplatu, nastavit ćete uživati u značajkama povezanima s vašom razinom. Odmah ćemo vam naplatiti cijenu nove godišnje pretplate, a vaš preostali saldo za mjesečni ciklus naplate proporcionalno će se preusmjeriti za današnji ukupni iznos za naplatu."];
                            },
                        },
                        {
                            key: "eaccb9c9",
                            get: function () {
                                return ["Ako se pretplatite, pristajete na naše ", ". Pretplate se automatski obnavljaju sve dok ih ne otkažete, kao što je opisano u ", ". ", ". Ako želite otkazati pretplatu, to učinite najmanje 24 sata prije obnove kako biste izbjegli dodatne naplate. Ako mijenjate pretplatu, nastavit ćete uživati u značajkama povezanima s vašom razinom. Odmah ćemo vam naplatiti mjesečnu cijenu za razinu, ali vaš preostali kredit za godišnje plaćanje proporcionalno će se preusmjeriti za mjesečna plaćanja sve dok se ne potroši."];
                            },
                        },
                        {
                            key: "db11f87d",
                            get: function () {
                                return ["Pretplatite se po cijeni od ", " " + this.props.newPrice + "/" + this.props.interval];
                            },
                        },
                        {
                            key: "e4219e13",
                            get: function () {
                                return ["", " " + this.props.newPrice + "/" + this.props.interval + " naplaćuje se na godišnjoj razini"];
                            },
                        },
                        {
                            key: "eeb5fb11",
                            get: function () {
                                return ["Podaci o adresi šalju se Googleu. Da biste saznali više, pogledajte ", " i ", "."];
                            },
                        },
                        {
                            key: "f9b1387f",
                            get: function () {
                                return ["Samo administratori i moderatori Zajednica mogu ih postaviti u pojedinosti na svom profilu. Želite ", "?"];
                            },
                        },
                        {
                            key: "ef72b01b",
                            get: function () {
                                return ["Da biste pronašli krizni centar u svojoj blizini, posjetite "];
                            },
                        },
                        {
                            key: "e6c21d5b",
                            get: function () {
                                return ["Ako mislite da ste u opasnosti, obratite se lokalnoj policiji. U slučaju nejasnoća dostupne su naše ", "."];
                            },
                        },
                        {
                            key: "e1d95725",
                            get: function () {
                                return ["Uvijek je možete prestati pratiti u odjeljku ", "."];
                            },
                        },
                        {
                            key: "gd67df1d",
                            get: function () {
                                return ["Zadnji put ažurirano: "];
                            },
                        },
                        {
                            key: "e420d1ed",
                            get: function () {
                                return ["Ako uredite svoj Krug, korisnici neće dobiti obavijest o tome. Svi koje dodate moći će vidjeti vaše prethodne objave iz Kruga. "];
                            },
                        },
                        {
                            key: "gc31d3e9",
                            get: function () {
                                return ["Broj prikaza te objave. Više saznajte u ", "."];
                            },
                        },
                        {
                            key: "he0e6ed7",
                            get: function () {
                                return ["Broj prikaza te objave. Broj prikaza možda će se vidjeti tek za nekoliko minuta. Više saznajte u ", "."];
                            },
                        },
                        {
                            key: "c780f52b",
                            get: function () {
                                return ["Broj prikaza nije dostupan za tu objavu. Više saznajte u ", "."];
                            },
                        },
                        {
                            key: "fc2dfb3f",
                            get: function () {
                                return ["Klikom na Stvori promovirani sadržaj potvrđujete da ste pročitali i da prihvaćate ", " te ", "."];
                            },
                        },
                        {
                            key: "fcf4b2a5",
                            get: function () {
                                return ["Klikom na Stvori promovirani sadržaj potvrđujete da ste pročitali i da prihvaćate ", "."];
                            },
                        },
                        {
                            key: "f54ad505",
                            get: function () {
                                return ["Neke mogućnosti za ciljne primatelje nisu dostupne za taj račun za oglašavanje, u skladu s ", "."];
                            },
                        },
                        {
                            key: "b3816c8b",
                            get: function () {
                                return ["Klikom na Promoviraj objavu potvrđujete da ste pročitali i da prihvaćate ", " te ", "."];
                            },
                        },
                        {
                            key: "ee48f791",
                            get: function () {
                                return ["Klikom na Promoviraj objavu potvrđujete da ste pročitali i da prihvaćate ", "."];
                            },
                        },
                        {
                            key: "f5a533b1",
                            get: function () {
                                return ["U toj objavi nema skrivenih odgovora, no zaštićene su objave možda filtrirane. "];
                            },
                        },
                        {
                            key: "cd5e4a77",
                            get: function () {
                                return ["Ako kliknete u nastavku da biste izvršili kupnju, pristajete na obaveze propisane ", "."];
                            },
                        },
                        {
                            key: "aa4026bf",
                            get: function () {
                                return ["", " vas neće moći dodati na svoje popise, uključujući ovaj."];
                            },
                        },
                        {
                            key: "fca299bb",
                            get: function () {
                                return ["Podijelite poruku e-pošte s autorom " + this.props.creatorName + ". Ako prihvatite, dopuštate platformi X dijeljenje vaše adrese e-pošte s autorom sadržaja u svrhu komunikacije izvan platforme i prihvaćate ", "."];
                            },
                        },
                        {
                            key: "ccd45e5f",
                            get: function () {
                                return ["Darujte jednu godinu usluge " + this.props.tier + " korisniku @" + this.props.screenName + " za " + this.props.price + ". Nakon što izvršite uplatu, taj će korisnik dobiti obavijest da ste mu poslali poklon."];
                            },
                        },
                        {
                            key: "h7f3e309",
                            get: function () {
                                return ["Cijena poklonjene pretplate naplaćuje se pri kupnji i nije moguće ostvariti povrat novca. Jednokratna je, ne može se zamijeniti ni kombinirati i nema novčanu vrijednost. Započinje nakon što je X pregleda i dodijeli primatelju, koji mora prihvatiti naše ", " i pravila. Ako primatelj ne zadovolji bilo koji zahtjev za ispunjavanje uvjeta, otkaže pretplatu ili odbije naše uvjete i pravila, poklon se ne može iskoristiti i ne može se ostvariti povrat novca. Mogu se primjenjivati porezi. Uvjeti se mogu promijeniti. ", "."];
                            },
                        },
                        {
                            key: "j0a20bf1",
                            get: function () {
                                return ["Organizacije imaju zlatne oznake, a pojedinci plave. Neprimjerena uporaba rezultirat će otkazivanjem pretplate bez povrata novca u skladu s našim ", "."];
                            },
                        },
                        {
                            key: "j1b50481",
                            get: function () {
                                return ["Organizacije imaju četverokutne avatare, a pojedinci kružne. Neprimjerena uporaba rezultirat će otkazivanjem pretplate bez povrata novca u skladu s našim ", "."];
                            },
                        },
                        {
                            key: "ebebbb93",
                            get: function () {
                                return ["Konfigurirajte koji će se račun za oglase upotrebljavati za poslove kada se ti poslovi objave putem portala za ", "."];
                            },
                        },
                        {
                            key: "bd5a78a1",
                            get: function () {
                                return ["Nisu pronađeni računi koji ispunjavaju uvjete. Sljedeće korake potražite na stranici ", "."];
                            },
                        },
                        {
                            key: "b94bf5f5",
                            get: function () {
                                return ["Ako otkažete značajku Provjerene organizacije, vaša će organizacija odmah izgubiti zlatnu kvačicu."];
                            },
                        },
                        {
                            key: "d4109f93",
                            get: function () {
                                return ["Osim toga, svi suradnički računi odmah će se otkazati i izgubiti zlatne ili plave kvačice i suradničke značke. "];
                            },
                        },
                        {
                            key: "c5b26ddf",
                            get: function () {
                                return ["Ako otkažete, kvačice i sve plaćene značajke odmah će se ukloniti iz vaše organizacije i svih povezanih računa."];
                            },
                        },
                        {
                            key: "h06e7c87",
                            get: function () {
                                return ["Ako danas odlučite ostati, vašem ćemo portalu dodati besplatan kredit za oglase u iznosu od " + this.props.creditAmount + " USD svakih " + this.props.daysOfCouponInterval + " dana tijekom sljedećih " + this.props.totalDays + " dana. Kada preuzmete tu ponudu, naš će vam se tim za podršku obratiti kako biste dobili vrijednost tog kredita za vašu organizaciju."];
                            },
                        },
                        {
                            key: "b602e60f",
                            get: function () {
                                return ["Ako danas odlučite ostati, vašem ćemo portalu dodati besplatan kredit za oglase u iznosu od " + this.props.creditAmount + " USD tijekom sljedećih " + this.props.daysToWaitForFirstRedeemable + " dana. Kada preuzmete tu ponudu, naš će vam se tim za podršku obratiti kako biste dobili vrijednost tog kredita za vašu organizaciju."];
                            },
                        },
                        {
                            key: "fa5bbb59",
                            get: function () {
                                return ["Ovo je jednokratna ponuda i neće biti ponovno dostupna."];
                            },
                        },
                        {
                            key: "ceadabdd",
                            get: function () {
                                return ["I dalje se možete vratiti i iskoristiti jednokratnu ponudu, koja neće biti ponuđena ponovno. Za preostale dane u pretplati prije sljedećeg ciklusa naplate nećete dobiti povrat novca. Nakon toga više vam se neće naplaćivati."];
                            },
                        },
                        {
                            key: "e269f39d",
                            get: function () {
                                return ["Provjerene organizacije dobivaju prioritetnu podršku za X za sve probleme. Bez obzira na problem, možemo vam pomoći riješiti ga u što kraćem roku. Želite li zakazati poziv s članom tima za Provjerene organizacije i razgovarati s nekim tko vam može pomoći?"];
                            },
                        },
                        {
                            key: "e9565acf",
                            get: function () {
                                return ["Ako otkažete, odmah ćete izgubiti pristup besplatnom kreditu za oglase, kao i sav budući besplatni kredit za oglase koji je dio vaše pretplate. Budući da ste već platili tu povlasticu, preporučujemo da ostanete kako biste je iskoristili."];
                            },
                        },
                        {
                            key: "if6e211f",
                            get: function () {
                                return ["Da biste povećali ograničenje, obratite se Premium podršci za provjerene korisnike ", "."];
                            },
                        },
                        {
                            key: "a994ab9b",
                            get: function () {
                                return ["Troškovi za svaki dodatni povezani račun iznose ", "/"];
                            },
                        },
                        {
                            key: "j4f386b7",
                            get: function () {
                                return ["", " godišnje tijekom prve godine. Nakon toga ", " godišnje."];
                            },
                        },
                        {
                            key: "ce9e7f1b",
                            get: function () {
                                return ["Svaki dodatni povezani račun naplaćuje se ", " godišnje po nadimku. "];
                            },
                        },
                        {
                            key: "dc107867",
                            get: function () {
                                return ["", "/", " (", ") + ", " po nadimku ", " (", "). "];
                            },
                        },
                        {
                            key: "j02b65f7",
                            get: function () {
                                return ["", "/", " (", "). "];
                            },
                        },
                        {
                            key: "a75ca455",
                            get: function () {
                                return ["Iskoristite 30 % popusta na godišnje pretplate i do 12.000 USD besplatnih kredita za oglase ako se pretplatite do "];
                            },
                        },
                        {
                            key: "f5b357b5",
                            get: function () {
                                return ["Puni pristup iznosi ", "/", " (", "). Svaki dodatni povezani račun iznosi ", " po nadimku ", " (", "). "];
                            },
                        },
                        {
                            key: "i83d2543",
                            get: function () {
                                return ["Osnovni trošak je ", "/", " (", "). "];
                            },
                        },
                        {
                            key: "gc723de9",
                            get: function () {
                                return ["Klikom na Pretplati se prihvaćate naše ", ". Pretplate se automatski obnavljaju do otkazivanja. Svi registrirani računi moraju biti ručno odobreni."];
                            },
                        },
                        {
                            key: "ha873011",
                            get: function () {
                                return ["Klikom na Pretplati se prihvaćate naše ", ". Pretplate se automatski obnavljaju do otkazivanja. Registrirani računi pregledavaju se radi provjere autentičnosti. Ako se račun registrira, a nije organizacija, bit ćete odbijeni i nećete dobiti povrat novca."];
                            },
                        },
                        {
                            key: "d4918c71",
                            get: function () {
                                return ["+ U ograničenom vremenskom razdoblju kredit za oglašavanje u iznosu od ", " koji možete potrošiti na svoju organizaciju ili bilo koji od njenih povezanih računa s namjenskom potporom ", "."];
                            },
                        },
                        {
                            key: "a87b1795",
                            get: function () {
                                return ["+ U ograničenom vremenskom razdoblju kredit za oglašavanje u iznosu od ", " koji možete potrošiti na svoju organizaciju s namjenskom potporom ", "."];
                            },
                        },
                        {
                            key: "fb6fa495",
                            get: function () {
                                return ["", this.props.activeTierName + " na " + this.props.activePriceLabel];
                            },
                        },
                        {
                            key: "fcbe756d",
                            get: function () {
                                return ["", this.props.targetTierName + " po cijeni od " + this.props.targetPriceLabel];
                            },
                        },
                        {
                            key: "c9384b33",
                            get: function () {
                                return ["Ta izmjena pretplate nije ovdje podržana, obratite se podršci za pretplate Provjerene organizacije i Premium ", "."];
                            },
                        },
                        {
                            key: "af51185b",
                            get: function () {
                                return ["Ako trebate dodatne povezane račune obratite se prodajnoj službi za Provjerene organizacije ", "."];
                            },
                        },
                        {
                            key: "d9f35d6f",
                            get: function () {
                                return ["Klikom na „" + this.props.action + "” prihvaćate ", "."];
                            },
                        },
                        {
                            key: "g42a8521",
                            get: function () {
                                return ["Te ćemo podatke upotrijebiti za procjenu vašeg zahtjeva za ", ". ", "."];
                            },
                        },
                        {
                            key: "aacfbecd",
                            get: function () {
                                return ["Potvrdom ovog okvira potvrđujete da ste pročitali i pristali na uvjete i odredbe dostupne ", "."];
                            },
                        },
                        {
                            key: "feb950f3",
                            get: function () {
                                return ["Provjerene organizacije sada dobivaju kredit za oglase u iznosu od " + this.props.xtc_coupon_value + " (ili ekvivalentan iznos u lokalnoj valuti)*. Iznos možete primijeniti na svoju organizaciju ili bilo koji povezani račun. Jednostavno odaberite račun za oglase koji želite iskoristiti u nastavku."];
                            },
                        },
                        {
                            key: "h9629ab7",
                            get: function () {
                                return ["Provjerene organizacije sada imaju " + this.props.xtc_coupon_value + " kredita za oglase (ili ekvivalentan iznos u lokalnoj valuti)*. Svakih 30 dana dobit ćete " + this.props.xtc_coupon_value + " (ili ekvivalentan iznos u lokalnoj valuti), što možete u bilo kojem trenutku potrošiti na oglase. Iznos možete primijeniti na svoju organizaciju ili bilo koji povezani račun. Jednostavno odaberite račun za oglase koji želite iskoristiti u nastavku."];
                            },
                        },
                        {
                            key: "i3781135",
                            get: function () {
                                return ["Ako želite upravljati ID-jevima svojeg računa za oglase, učinite to ", "."];
                            },
                        },
                        {
                            key: "ff1cc953",
                            get: function () {
                                return ["Imate probleme? Ako imate pitanja, obratite se ", "."];
                            },
                        },
                        {
                            key: "g46e6cc5",
                            get: function () {
                                return ["Imate ", " dana za trošenje preostalih ", " kredita za ovaj oglas."];
                            },
                        },
                        {
                            key: "be64138f",
                            get: function () {
                                return ["Aktivirajte svoj kredit za oglase. Ako imate više računa za oglase, unos možete urediti u nastavku. Iskoristiti se može do " + this.props.expiresAt];
                            },
                        },
                        {
                            key: "a5f1d09f",
                            get: function () {
                                return ["Pronađite ID računa za oglase koji je povezan s vašim računom platforme X. Možete ga pronaći ", "."];
                            },
                        },
                        {
                            key: "e3a90717",
                            get: function () {
                                return ["Obavezno dodajte kreditnu karticu kao vrstu plaćanja u Upravitelju oglasa odabirom mogućnosti „Dodaj novu metodu plaćanja”. Ako nemate postavljenu kreditnu kraticu, vaš se kredit neće primijeniti, a oglas se neće objaviti."];
                            },
                        },
                        {
                            key: "b743c7b7",
                            get: function () {
                                return ["Kopirajte ID svog računa za oglase u polje za unos teksta na vrhu ove stranice. Kliknite aktiviraj."];
                            },
                        },
                        {
                            key: "d5128627",
                            get: function () {
                                return ["Pokrenite svoju kampanju."];
                            },
                        },
                        {
                            key: "ecd5d325",
                            get: function () {
                                return ["Obavezno dodajte kreditnu karticu kao vrstu plaćanja u Upravitelju oglasa odabirom mogućnosti „Dodaj novu metodu plaćanja”. Ako nemate postavljenu kreditnu karticu, vaš se kredit neće primijeniti, a oglas se neće objaviti."];
                            },
                        },
                        {
                            key: "d523367f",
                            get: function () {
                                return ["Primijenjeni kredit ćete vidjeti u stavci Naplata u Upravitelju oglasa."];
                            },
                        },
                        {
                            key: "c10a3649",
                            get: function () {
                                return ["Ako ste već objavljivali oglase na platformi X, možda imate više ID-jeva računa za oglase."];
                            },
                        },
                        {
                            key: "fab86f55",
                            get: function () {
                                return ["", " možete pronaći popis svih svojih ID-jeva računa za oglase."];
                            },
                        },
                        {
                            key: "h9fe1a6d",
                            get: function () {
                                return ["Obavezno odaberite točan ID računa za oglase kako biste se prijavili za kredit."];
                            },
                        },
                        {
                            key: "a4087047",
                            get: function () {
                                return ["Kao pretplatnik programa Provjerene organizacije s punim pristupom, svoj kredit možete primijeniti na bilo koji od svojih povezanih računa."];
                            },
                        },
                        {
                            key: "ca18299b",
                            get: function () {
                                return ["Da biste to učinili morate imati pristup ID-ju računa za oglase povezanog računa na kojem želite provesti kampanju."];
                            },
                        },
                        {
                            key: "b83bc371",
                            get: function () {
                                return ["To možete učiniti prijavom na povezani račun i pomicanjem ", "."];
                            },
                        },
                        {
                            key: "ba6442ef",
                            get: function () {
                                return ["Provjerene organizacije ispunjavaju uvjete za dobivanje kredita koje mogu upotrijebiti za ", " i promoviranje poslova. Dovršite ove korake da biste u potpunosti aktivirali mogućnosti oglašavanja."];
                            },
                        },
                        {
                            key: "e52e0c73",
                            get: function () {
                                return ["Provjerene organizacije ispunjavaju uvjete za dobivanje kredita koje mogu upotrijebiti za ", ". Dovršite ove korake da biste u potpunosti aktivirali mogućnosti oglašavanja."];
                            },
                        },
                        {
                            key: "d15a83b7",
                            get: function () {
                                return ["Aktiviraj kupon"];
                            },
                        },
                        {
                            key: "j5318247",
                            get: function () {
                                return ["Odaberite aktivan račun s dobrim rezultatima da biste dobili kredit od " + this.props.couponAmount + "."];
                            },
                        },
                        {
                            key: "e507417b",
                            get: function () {
                                return ["Popis ID-jeva računa možete pronaći u ", ". Primjer ID-ja: o8z6j"];
                            },
                        },
                        {
                            key: "b17ac597",
                            get: function () {
                                return ["Poslovni su spremni za promoviranje putem radnje "];
                            },
                        },
                        {
                            key: "ga44a2f9",
                            get: function () {
                                return ["Kada poslovi ispune uvjete, mogu se promovirati putem radnje "];
                            },
                        },
                        {
                            key: "dc53cac9",
                            get: function () {
                                return ["Istražujemo zahtjeve koje je poslao vlasnik zaštitnog znaka ili njegov ovlašteni zastupnik. Pogledajte naša ", " za pojedinosti."];
                            },
                        },
                        {
                            key: "ca610d5b",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "ifee99e7",
                            get: function () {
                                return ["Unesite nadimak vlasnika popisa i naziv popisa u sljedećem formatu: ", "."];
                            },
                        },
                        {
                            key: "aa36416b",
                            get: function () {
                                return ["Taj stupac možete očistiti samo ako se prebacite na ", "."];
                            },
                        },
                        {
                            key: "baed64e7",
                            get: function () {
                                return ["Pogledajte naša Pravila o privatnosti na adresi "];
                            },
                        },
                        {
                            key: "a982261d",
                            get: function () {
                                return ["Pogledajte naše Uvjete pružanja usluge na adresi "];
                            },
                        },
                        {
                            key: "ffe014fd",
                            get: function () {
                                return ["Platforma X i njezini partneri koriste kolačiće kako bi vam pružali bolju, sigurniju i bržu uslugu te radi podržavanja našeg poslovanja. Neki su kolačići nužni za upotrebu i poboljšanje naših usluga te za njihov pravilan rad. Ako kliknete „Prihvati sve kolačiće”, platformi X i njezinim partnerima dopustit ćete upotrebu kolačića i kako bi vam pružali oglase i obavijesti prema vašim interesima. Ako kliknete „Odbij kolačiće koji nisu nužni”, nećemo upotrebljavati kolačiće za prikupljanje dodatnih podataka za prilagođene oglase i obavijesti. Da biste saznali više o našem korištenju kolačića, posjetite našu stranicu centra za pomoć u vezi s kolačićima na web-mjestu "];
                            },
                        },
                        {
                            key: "a8f9642d",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "b9ad7ff5",
                            get: function () {
                                return ["Autor označio oznakom "];
                            },
                        },
                        {
                            key: "i0643a5b",
                            get: function () {
                                return ["Članak "];
                            },
                        },
                        {
                            key: "i6125da7",
                            get: function () {
                                return ["", " · "];
                            },
                        },
                        {
                            key: "c4f28ae1",
                            get: function () {
                                return ["", " · "];
                            },
                        },
                        {
                            key: "e570a97b",
                            get: function () {
                                return ["Ti su medijski sadržaji onemogućeni zbog kršenja autorskih prava čiji je vlasnik " + this.props.copyrightHolder + ". Ako želite podnijeti žalbu, učinite to putem ", "."];
                            },
                        },
                        {
                            key: "fcd931ed",
                            get: function () {
                                return ["", " je proslijedio/la objavu"];
                            },
                        },
                        {
                            key: "c2588611",
                            get: function () {
                                return ["", " u " + this.props.time];
                            },
                        },
                        {
                            key: "dbf19261",
                            get: function () {
                                return ["Od korisnika/ce "];
                            },
                        },
                        {
                            key: "d7b2c271",
                            get: function () {
                                return ["", " i "];
                            },
                        },
                        {
                            key: "b035fe73",
                            get: function () {
                                return ["", " i "];
                            },
                        },
                        {
                            key: "h5970807",
                            get: function () {
                                return ["Odgovor korisniku/ci "];
                            },
                        },
                        {
                            key: "ge01e6a3",
                            get: function () {
                                return ["Odgovor korisnicima/cama ", " ", " "];
                            },
                        },
                        {
                            key: "f5a069ab",
                            get: function () {
                                return ["Odgovor korisnicima/ama ", " "];
                            },
                        },
                        {
                            key: "hd7dd197",
                            get: function () {
                                return ["Odgovor korisnicima/cama ", " ", " ", " "];
                            },
                        },
                        {
                            key: "g4eb2847",
                            get: function () {
                                return ["Odgovor korisnicima/ama ", " ", " "];
                            },
                        },
                        {
                            key: "dfde726b",
                            get: function () {
                                return ["", " za čitanje"];
                            },
                        },
                        {
                            key: "gec4f969",
                            get: function () {
                                return ["Od "];
                            },
                        },
                        {
                            key: "d6b02329",
                            get: function () {
                                return [this.props.formattedCount + " član" + n(this.props.count, "a", "", "ova")];
                            },
                        },
                        {
                            key: "c9e6167d",
                            get: function () {
                                return ["Prati korisnik/ca "];
                            },
                        },
                        {
                            key: "ha91d1eb",
                            get: function () {
                                return ["Prate korisnici/ce ", " i "];
                            },
                        },
                        {
                            key: "f1069f9b",
                            get: function () {
                                return ["Prate ", ", ", " i "];
                            },
                        },
                        {
                            key: "e8404c1f",
                            get: function () {
                                return ["Prate ", ", ", " i još njih ", " koje i vi pratite"];
                            },
                        },
                        {
                            key: "bb2cd6d3",
                            get: function () {
                                return ["", " i još njih ", " pišu o toj temi"];
                            },
                        },
                        {
                            key: "e1e348dd",
                            get: function () {
                                return ["Pokrovitelj: "];
                            },
                        },
                        {
                            key: "c7dea0d1",
                            get: function () {
                                return ["Pokrovitelj: ", ". Nije odobrio kandidat ni kandidatov odbor."];
                            },
                        },
                        {
                            key: "b5c2371b",
                            get: function () {
                                return ["Pokrovitelj: ", " · Odobrio/la: " + this.props.sponsorshipCandidate];
                            },
                        },
                        {
                            key: "b6a393af",
                            get: function () {
                                return ["Samo vi i osobe u vašem krugu možete vidjeti ovu objavu. Prosljeđivanje objava, citiranje i dijeljenje nisu dostupni. "];
                            },
                        },
                        {
                            key: "g3ed1dd5",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "i06724fb",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "eb0084f3",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "fc1b8f67",
                            get: function () {
                                return ["", " "];
                            },
                        },
                        {
                            key: "fe7c309b",
                            get: function () {
                                return ["Aktualno: "];
                            },
                        },
                        {
                            key: "ea753bf5",
                            get: function () {
                                return ["Aktualno: ", ", "];
                            },
                        },
                        {
                            key: "ge9aefd5",
                            get: function () {
                                return ["", " s lokacije "];
                            },
                        },
                        {
                            key: "templateReducer",
                            get: function () {
                                var a,
                                    e = j.Children.toArray(this.props.children),
                                    i = ((a = this.props.$i18n), u[d[a]] || s);
                                return function (a, o, n) {
                                    return a.concat(o, e[i(n)]);
                                };
                            },
                        },
                    ]) && t(o.prototype, v),
                    p && t(o, p),
                    Object.defineProperty(o, "prototype", { writable: !1 }),
                    k
                );
            })(i(674132)._ActualI18NFormatMessage || j.Component);
            o("_ActualI18NFormatMessage", v),
                o("I18NFormatMessage", function (a) {
                    return j.createElement(v, a);
                });
            var p = i(495075);
            i(800694), i(556829), i(530152), i(658610), i(492344), i(663823);
            p._validateParameterTypeNumber, p._validateParameterPresence;
            var k = p._numberRound,
                c = (p._numberFormat, p._numberFormatterFn),
                l = p._pluralGeneratorFn,
                b = (p._currencyNameFormat, p._currencyFormatterFn),
                m = (p._validateParameterTypeDate, p._dateToPartsFormat, p._dateToPartsFormatterFn),
                f = (p._dateFormat, p._dateFormatterFn),
                z = p._relativeTimeFormatterFn,
                g = p._unitFormatterFn;
            (p.a1673306623 = c(["", , 1, 0, 1, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", k("truncate"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tis'.'", few: "0 tis'.'", other: "0 tis'.'" }, 4: { one: "00 tis'.'", few: "00 tis'.'", other: "00 tis'.'" }, 5: { one: "000 tis'.'", few: "000 tis'.'", other: "000 tis'.'" }, 6: { one: "0 mil'.'", few: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mlr'.'", few: "0 mlr'.'", other: "0 mlr'.'" }, 10: { one: "00 mlr'.'", few: "00 mlr'.'", other: "00 mlr'.'" }, 11: { one: "000 mlr'.'", few: "000 mlr'.'", other: "000 mlr'.'" }, 12: { one: "0 bil'.'", few: "0 bil'.'", other: "0 bil'.'" }, 13: { one: "00 bil'.'", few: "00 bil'.'", other: "00 bil'.'" }, 14: { one: "000 bil'.'", few: "000 bil'.'", other: "000 bil'.'" }, maxExponent: 14 }], p("hr").pluralGenerator({}))),
                (p.b378804789 = c(["", , 1, 0, 3, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1874145295 = c(["", , 1, 0, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", k("round"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b415659701 = c(["", , 1, 0, 0, , , , , , "", "0", "-0", "-", "", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b218135 = c(["", , 2, 0, 0, , , , , , "", "00", "-00", "-", "", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b583604384 = c(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", k("truncate"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tis'.'", few: "0 tis'.'", other: "0 tis'.'" }, 4: { one: "00 tis'.'", few: "00 tis'.'", other: "00 tis'.'" }, 5: { one: "000 tis'.'", few: "000 tis'.'", other: "000 tis'.'" }, 6: { one: "0 mil'.'", few: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mlr'.'", few: "0 mlr'.'", other: "0 mlr'.'" }, 10: { one: "00 mlr'.'", few: "00 mlr'.'", other: "00 mlr'.'" }, 11: { one: "000 mlr'.'", few: "000 mlr'.'", other: "000 mlr'.'" }, 12: { one: "0 bil'.'", few: "0 bil'.'", other: "0 bil'.'" }, 13: { one: "00 bil'.'", few: "00 bil'.'", other: "00 bil'.'" }, 14: { one: "000 bil'.'", few: "000 bil'.'", other: "000 bil'.'" }, maxExponent: 14 }], p("hr").pluralGenerator({}))),
                (p.b304867764 = c(["", , 1, 0, 1, , , , 3, , "%", "#,##0%", "-#,##0%%", "-", "%", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1821600953 = c(["", , 1, 0, 0, , , , 3, , "%", "#,##0%", "-#,##0%%", "-", "%", k("round"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b2143600582 = c(["", , 1, 0, 1, , , , 3, , "%", "#,##0%", "-#,##0%%", "-", "%", k("round"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1815786458 = c(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", k("truncate"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tis'.'", few: "0 tis'.'", other: "0 tis'.'" }, 4: { one: "00 tis'.'", few: "00 tis'.'", other: "00 tis'.'" }, 5: { one: "000 tis'.'", few: "000 tis'.'", other: "000 tis'.'" }, 6: { one: "0 mil'.'", few: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mlr'.'", few: "0 mlr'.'", other: "0 mlr'.'" }, 10: { one: "00 mlr'.'", few: "00 mlr'.'", other: "00 mlr'.'" }, 11: { one: "000 mlr'.'", few: "000 mlr'.'", other: "000 mlr'.'" }, 12: { one: "0 bil'.'", few: "0 bil'.'", other: "0 bil'.'" }, 13: { one: "00 bil'.'", few: "00 bil'.'", other: "00 bil'.'" }, 14: { one: "000 bil'.'", few: "000 bil'.'", other: "000 bil'.'" }, maxExponent: 14 }], p("hr").pluralGenerator({}))),
                (p.b1537136887 = c(["", , 1, 1, 1, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", k("truncate"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1689355143 = c(["", , 1, 2, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", k("truncate"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b35860779 = c(["", , 1, 0, 0, 1, 2, , 3, , "", "#,##0.###", "-#,##0.###", "-", "", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tis'.'", few: "0 tis'.'", other: "0 tis'.'" }, 4: { one: "00 tis'.'", few: "00 tis'.'", other: "00 tis'.'" }, 5: { one: "000 tis'.'", few: "000 tis'.'", other: "000 tis'.'" }, 6: { one: "0 mil'.'", few: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mlr'.'", few: "0 mlr'.'", other: "0 mlr'.'" }, 10: { one: "00 mlr'.'", few: "00 mlr'.'", other: "00 mlr'.'" }, 11: { one: "000 mlr'.'", few: "000 mlr'.'", other: "000 mlr'.'" }, 12: { one: "0 bil'.'", few: "0 bil'.'", other: "0 bil'.'" }, 13: { one: "00 bil'.'", few: "00 bil'.'", other: "00 bil'.'" }, 14: { one: "000 bil'.'", few: "000 bil'.'", other: "000 bil'.'" }, maxExponent: 14 }], p("hr").pluralGenerator({}))),
                (p.a1731287668 = c(["", , 1, 2, 2, , , 0, 3, , " 'AED'", "#,##0.00 'AED'", "-#,##0.00 'AED' 'AED'", "-", " 'AED'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1619520665 = c(["", , 1, 0, 0, , , , 3, , " 'ALL'", "#,##0 'ALL'", "-#,##0 'ALL' 'ALL'", "-", " 'ALL'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a2117319446 = c(["", , 1, 2, 2, , , 0, 3, , " 'ARS'", "#,##0.00 'ARS'", "-#,##0.00 'ARS' 'ARS'", "-", " 'ARS'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b2105613212 = c(["", , 1, 2, 2, , , 0, 3, , " 'AUD'", "#,##0.00 'AUD'", "-#,##0.00 'AUD' 'AUD'", "-", " 'AUD'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1782380862 = c(["", , 1, 2, 2, , , 0, 3, , " 'BAM'", "#,##0.00 'BAM'", "-#,##0.00 'BAM' 'BAM'", "-", " 'BAM'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1690028762 = c(["", , 1, 2, 2, , , 0, 3, , " 'BDT'", "#,##0.00 'BDT'", "-#,##0.00 'BDT' 'BDT'", "-", " 'BDT'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1609682435 = c(["", , 1, 2, 2, , , 0, 3, , " 'BGN'", "#,##0.00 'BGN'", "-#,##0.00 'BGN' 'BGN'", "-", " 'BGN'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1878217182 = c(["", , 1, 3, 3, , , 0, 3, , " 'BHD'", "#,##0.000 'BHD'", "-#,##0.000 'BHD' 'BHD'", "-", " 'BHD'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1296608816 = c(["", , 1, 2, 2, , , 0, 3, , " 'BRL'", "#,##0.00 'BRL'", "-#,##0.00 'BRL' 'BRL'", "-", " 'BRL'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b354296895 = c(["", , 1, 0, 0, , , , 3, , " 'BYR'", "#,##0 'BYR'", "-#,##0 'BYR' 'BYR'", "-", " 'BYR'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b903188870 = c(["", , 1, 2, 2, , , 0, 3, , " 'CAD'", "#,##0.00 'CAD'", "-#,##0.00 'CAD' 'CAD'", "-", " 'CAD'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b700937771 = c(["", , 1, 2, 2, , , 0, 3, , " 'CHF'", "#,##0.00 'CHF'", "-#,##0.00 'CHF' 'CHF'", "-", " 'CHF'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a159180781 = c(["", , 1, 0, 0, , , , 3, , " 'CLP'", "#,##0 'CLP'", "-#,##0 'CLP' 'CLP'", "-", " 'CLP'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b511615966 = c(["", , 1, 2, 2, , , 0, 3, , " 'CNY'", "#,##0.00 'CNY'", "-#,##0.00 'CNY' 'CNY'", "-", " 'CNY'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a245068234 = c(["", , 1, 0, 0, , , , 3, , " 'COP'", "#,##0 'COP'", "-#,##0 'COP' 'COP'", "-", " 'COP'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b180995448 = c(["", , 1, 2, 2, , , 0, 3, , " 'CZK'", "#,##0.00 'CZK'", "-#,##0.00 'CZK' 'CZK'", "-", " 'CZK'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a277070968 = c(["", , 1, 2, 2, , , 0, 3, , " 'DKK'", "#,##0.00 'DKK'", "-#,##0.00 'DKK' 'DKK'", "-", " 'DKK'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a700043586 = c(["", , 1, 2, 2, , , 0, 3, , " 'DZD'", "#,##0.00 'DZD'", "-#,##0.00 'DZD' 'DZD'", "-", " 'DZD'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1054675650 = c(["", , 1, 2, 2, , , 0, 3, , " 'EGP'", "#,##0.00 'EGP'", "-#,##0.00 'EGP' 'EGP'", "-", " 'EGP'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1457330806 = c(["", , 1, 2, 2, , , 0, 3, , " 'EUR'", "#,##0.00 'EUR'", "-#,##0.00 'EUR' 'EUR'", "-", " 'EUR'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1608430039 = c(["", , 1, 2, 2, , , 0, 3, , " 'GBP'", "#,##0.00 'GBP'", "-#,##0.00 'GBP' 'GBP'", "-", " 'GBP'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1433884570 = c(["", , 1, 2, 2, , , 0, 3, , " 'GHS'", "#,##0.00 'GHS'", "-#,##0.00 'GHS' 'GHS'", "-", " 'GHS'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1092181800 = c(["", , 1, 2, 2, , , 0, 3, , " 'GTQ'", "#,##0.00 'GTQ'", "-#,##0.00 'GTQ' 'GTQ'", "-", " 'GTQ'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b474346251 = c(["", , 1, 2, 2, , , 0, 3, , " 'HKD'", "#,##0.00 'HKD'", "-#,##0.00 'HKD' 'HKD'", "-", " 'HKD'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b267477547 = c(["", , 1, 2, 2, , , 0, 3, , " 'HRK'", "#,##0.00 'HRK'", "-#,##0.00 'HRK' 'HRK'", "-", " 'HRK'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b186207699 = c(["", , 1, 2, 2, , , 0, 3, , " 'HUF'", "#,##0.00 'HUF'", "-#,##0.00 'HUF' 'HUF'", "-", " 'HUF'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a962049405 = c(["", , 1, 0, 0, , , , 3, , " 'IDR'", "#,##0 'IDR'", "-#,##0 'IDR' 'IDR'", "-", " 'IDR'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a455639396 = c(["", , 1, 2, 2, , , 0, 3, , " 'ILS'", "#,##0.00 'ILS'", "-#,##0.00 'ILS' 'ILS'", "-", " 'ILS'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a511974177 = c(["", , 1, 2, 2, , , 0, 3, , " 'INR'", "#,##0.00 'INR'", "-#,##0.00 'INR' 'INR'", "-", " 'INR'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1321299074 = c(["", , 1, 0, 0, , , , 3, , " 'IQD'", "#,##0 'IQD'", "-#,##0 'IQD' 'IQD'", "-", " 'IQD'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1385022023 = c(["", , 1, 0, 0, , , , 3, , " 'ISK'", "#,##0 'ISK'", "-#,##0 'ISK' 'ISK'", "-", " 'ISK'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b2095399751 = c(["", , 1, 0, 0, , , , 3, , " 'JPY'", "#,##0 'JPY'", "-#,##0 'JPY' 'JPY'", "-", " 'JPY'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a2030242701 = c(["", , 1, 2, 2, , , 0, 3, , " 'KES'", "#,##0.00 'KES'", "-#,##0.00 'KES' 'KES'", "-", " 'KES'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1152484810 = c(["", , 1, 0, 0, , , , 3, , " 'KRW'", "#,##0 'KRW'", "-#,##0 'KRW' 'KRW'", "-", " 'KRW'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b2051181380 = c(["", , 1, 3, 3, , , 0, 3, , " 'KWD'", "#,##0.000 'KWD'", "-#,##0.000 'KWD' 'KWD'", "-", " 'KWD'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1662588903 = c(["", , 1, 2, 2, , , 0, 3, , " 'KZT'", "#,##0.00 'KZT'", "-#,##0.00 'KZT' 'KZT'", "-", " 'KZT'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b729512192 = c(["", , 1, 0, 0, , , , 3, , " 'LBP'", "#,##0 'LBP'", "-#,##0 'LBP' 'LBP'", "-", " 'LBP'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b618086652 = c(["", , 1, 2, 2, , , 0, 3, , " 'MAD'", "#,##0.00 'MAD'", "-#,##0.00 'MAD' 'MAD'", "-", " 'MAD'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b331795142 = c(["", , 1, 2, 2, , , 0, 3, , " 'MKD'", "#,##0.00 'MKD'", "-#,##0.00 'MKD' 'MKD'", "-", " 'MKD'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a49619031 = c(["", , 1, 2, 2, , , 0, 3, , " 'MXN'", "#,##0.00 'MXN'", "-#,##0.00 'MXN' 'MXN'", "-", " 'MXN'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a81942266 = c(["", , 1, 2, 2, , , 0, 3, , " 'MYR'", "#,##0.00 'MYR'", "-#,##0.00 'MYR' 'MYR'", "-", " 'MYR'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a450427145 = c(["", , 1, 2, 2, , , 0, 3, , " 'NGN'", "#,##0.00 'NGN'", "-#,##0.00 'NGN' 'NGN'", "-", " 'NGN'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a676689790 = c(["", , 1, 2, 2, , , 0, 3, , " 'NOK'", "#,##0.00 'NOK'", "-#,##0.00 'NOK' 'NOK'", "-", " 'NOK'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a985145804 = c(["", , 1, 2, 2, , , 0, 3, , " 'NZD'", "#,##0.00 'NZD'", "-#,##0.00 'NZD' 'NZD'", "-", " 'NZD'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b2126791091 = c(["", , 1, 2, 2, , , 0, 3, , " 'PEN'", "#,##0.00 'PEN'", "-#,##0.00 'PEN' 'PEN'", "-", " 'PEN'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b2039056596 = c(["", , 1, 2, 2, , , 0, 3, , " 'PHP'", "#,##0.00 'PHP'", "-#,##0.00 'PHP' 'PHP'", "-", " 'PHP'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1214955363 = c(["", , 1, 0, 0, , , , 3, , " 'PKR'", "#,##0 'PKR'", "-#,##0 'PKR' 'PKR'", "-", " 'PKR'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1926387034 = c(["", , 1, 2, 2, , , 0, 3, , " 'PLN'", "#,##0.00 'PLN'", "-#,##0.00 'PLN' 'PLN'", "-", " 'PLN'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1350109930 = c(["", , 1, 2, 2, , , 0, 3, , " 'QAR'", "#,##0.00 'QAR'", "-#,##0.00 'QAR' 'QAR'", "-", " 'QAR'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b65492219 = c(["", , 1, 2, 2, , , 0, 3, , " 'RON'", "#,##0.00 'RON'", "-#,##0.00 'RON' 'RON'", "-", " 'RON'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a776155913 = c(["", , 1, 0, 0, , , , 3, , " 'RSD'", "#,##0 'RSD'", "-#,##0 'RSD' 'RSD'", "-", " 'RSD'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a95200435 = c(["", , 1, 2, 2, , , 0, 3, , " 'RUB'", "#,##0.00 'RUB'", "-#,##0.00 'RUB' 'RUB'", "-", " 'RUB'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a424897432 = c(["", , 1, 2, 2, , , 0, 3, , " 'SAR'", "#,##0.00 'SAR'", "-#,##0.00 'SAR' 'SAR'", "-", " 'SAR'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a532949389 = c(["", , 1, 2, 2, , , 0, 3, , " 'SEK'", "#,##0.00 'SEK'", "-#,##0.00 'SEK' 'SEK'", "-", " 'SEK'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a583743044 = c(["", , 1, 2, 2, , , 0, 3, , " 'SGD'", "#,##0.00 'SGD'", "-#,##0.00 'SGD' 'SGD'", "-", " 'SGD'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1498028834 = c(["", , 1, 2, 2, , , 0, 3, , " 'THB'", "#,##0.00 'THB'", "-#,##0.00 'THB' 'THB'", "-", " 'THB'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1383722094 = c(["", , 1, 3, 3, , , 0, 3, , " 'TND'", "#,##0.000 'TND'", "-#,##0.000 'TND' 'TND'", "-", " 'TND'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1805561327 = c(["", , 1, 2, 2, , , 0, 3, , " 'TRY'", "#,##0.00 'TRY'", "-#,##0.00 'TRY' 'TRY'", "-", " 'TRY'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1929313141 = c(["", , 1, 2, 2, , , 0, 3, , " 'TWD'", "#,##0.00 'TWD'", "-#,##0.00 'TWD' 'TWD'", "-", " 'TWD'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1529547149 = c(["", , 1, 0, 0, , , , 3, , " 'TZS'", "#,##0 'TZS'", "-#,##0 'TZS' 'TZS'", "-", " 'TZS'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b2104297712 = c(["", , 1, 2, 2, , , 0, 3, , " 'UAH'", "#,##0.00 'UAH'", "-#,##0.00 'UAH' 'UAH'", "-", " 'UAH'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1181379732 = c(["", , 1, 0, 0, , , , 3, , " 'UGX'", "#,##0 'UGX'", "-#,##0 'UGX' 'UGX'", "-", " 'UGX'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1592667078 = c(["", , 1, 2, 2, , , 0, 3, , " 'USD'", "#,##0.00 'USD'", "-#,##0.00 'USD' 'USD'", "-", " 'USD'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1104124469 = c(["", , 1, 2, 2, , , 0, 3, , " 'VEF'", "#,##0.00 'VEF'", "-#,##0.00 'VEF' 'VEF'", "-", " 'VEF'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b111942414 = c(["", , 1, 0, 0, , , , 3, , " 'VND'", "#,##0 'VND'", "-#,##0 'VND' 'VND'", "-", " 'VND'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1952511393 = c(["", , 1, 2, 2, , , 0, 3, , " 'ZAR'", "#,##0.00 'ZAR'", "-#,##0.00 'ZAR' 'ZAR'", "-", " 'ZAR'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1604343976 = c(["", , 1, 2, 2, , , 0, 3, , " 'ZMW'", "#,##0.00 'ZMW'", "-#,##0.00 'ZMW' 'ZMW'", "-", " 'ZMW'", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1169375047 = c(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a165136106 = c(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tis'.'", few: "0 tis'.'", other: "0 tis'.'" }, 4: { one: "00 tis'.'", few: "00 tis'.'", other: "00 tis'.'" }, 5: { one: "000 tis'.'", few: "000 tis'.'", other: "000 tis'.'" }, 6: { one: "0 mil'.'", few: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mlr'.'", few: "0 mlr'.'", other: "0 mlr'.'" }, 10: { one: "00 mlr'.'", few: "00 mlr'.'", other: "00 mlr'.'" }, 11: { one: "000 mlr'.'", few: "000 mlr'.'", other: "000 mlr'.'" }, 12: { one: "0 bil'.'", few: "0 bil'.'", other: "0 bil'.'" }, 13: { one: "00 bil'.'", few: "00 bil'.'", other: "00 bil'.'" }, 14: { one: "000 bil'.'", few: "000 bil'.'", other: "000 bil'.'" }, maxExponent: 14 }], p("hr").pluralGenerator({}))),
                (p.b389595604 = c(["", , 1, 0, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", k(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tis'.'", few: "0 tis'.'", other: "0 tis'.'" }, 4: { one: "00 tis'.'", few: "00 tis'.'", other: "00 tis'.'" }, 5: { one: "000 tis'.'", few: "000 tis'.'", other: "000 tis'.'" }, 6: { one: "0 mil'.'", few: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mlr'.'", few: "0 mlr'.'", other: "0 mlr'.'" }, 10: { one: "00 mlr'.'", few: "00 mlr'.'", other: "00 mlr'.'" }, 11: { one: "000 mlr'.'", few: "000 mlr'.'", other: "000 mlr'.'" }, 12: { one: "0 bil'.'", few: "0 bil'.'", other: "0 bil'.'" }, 13: { one: "00 bil'.'", few: "00 bil'.'", other: "00 bil'.'" }, 14: { one: "000 bil'.'", few: "000 bil'.'", other: "000 bil'.'" }, maxExponent: 14 }], p("hr").pluralGenerator({}))),
                (p.b731878259 = c(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", k("round"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1751927673 = l(function (a) {
                    var e = String(a).split("."),
                        i = e[0],
                        o = e[1] || "",
                        n = !e[1],
                        t = i.slice(-1),
                        r = i.slice(-2),
                        j = o.slice(-1),
                        u = o.slice(-2);
                    return (n && 1 == t && 11 != r) || (1 == j && 11 != u) ? "one" : (n && t >= 2 && t <= 4 && (r < 12 || r > 14)) || (j >= 2 && j <= 4 && (u < 12 || u > 14)) ? "few" : "other";
                })),
                (p.a529544955 = b(p("hr").numberFormatter({ raw: "#,##0.00 'AED'" }))),
                (p.b1618830662 = b(p("hr").numberFormatter({ raw: "#,##0 'ALL'" }))),
                (p.b388371815 = b(p("hr").numberFormatter({ raw: "#,##0.00 'ARS'" }))),
                (p.a1844701963 = b(p("hr").numberFormatter({ raw: "#,##0.00 'AUD'" }))),
                (p.b1019997075 = b(p("hr").numberFormatter({ raw: "#,##0.00 'BAM'" }))),
                (p.a1842918025 = b(p("hr").numberFormatter({ raw: "#,##0.00 'BDT'" }))),
                (p.a38686866 = b(p("hr").numberFormatter({ raw: "#,##0.00 'BGN'" }))),
                (p.a639899037 = b(p("hr").numberFormatter({ raw: "#,##0.000 'BHD'" }))),
                (p.a1154034463 = b(p("hr").numberFormatter({ raw: "#,##0.00 'BRL'" }))),
                (p.b1051599456 = b(p("hr").numberFormatter({ raw: "#,##0 'BYR'" }))),
                (p.a465150901 = b(p("hr").numberFormatter({ raw: "#,##0.00 'CAD'" }))),
                (p.b1854999622 = b(p("hr").numberFormatter({ raw: "#,##0.00 'CHF'" }))),
                (p.a1981306612 = b(p("hr").numberFormatter({ raw: "#,##0 'CLP'" }))),
                (p.b280990963 = b(p("hr").numberFormatter({ raw: "#,##0.00 'CNY'" }))),
                (p.a348850359 = b(p("hr").numberFormatter({ raw: "#,##0 'COP'" }))),
                (p.a1378310503 = b(p("hr").numberFormatter({ raw: "#,##0.00 'CZK'" }))),
                (p.b1601499785 = b(p("hr").numberFormatter({ raw: "#,##0.00 'DKK'" }))),
                (p.b1374250515 = b(p("hr").numberFormatter({ raw: "#,##0.00 'DZD'" }))),
                (p.a1029408877 = b(p("hr").numberFormatter({ raw: "#,##0.00 'EGP'" }))),
                (p.a626816825 = b(p("hr").numberFormatter({ raw: "#,##0.00 'EUR'" }))),
                (p.a77511142 = b(p("hr").numberFormatter({ raw: "#,##0.00 'GBP'" }))),
                (p.a1193453385 = b(p("hr").numberFormatter({ raw: "#,##0.00 'GHS'" }))),
                (p.b1098662633 = b(p("hr").numberFormatter({ raw: "#,##0.00 'GTQ'" }))),
                (p.a874370202 = b(p("hr").numberFormatter({ raw: "#,##0.00 'HKD'" }))),
                (p.b1302634566 = b(p("hr").numberFormatter({ raw: "#,##0.00 'HRK'" }))),
                (p.a1216730722 = b(p("hr").numberFormatter({ raw: "#,##0.00 'HUF'" }))),
                (p.a1100430180 = b(p("hr").numberFormatter({ raw: "#,##0 'IDR'" }))),
                (p.b360845813 = b(p("hr").numberFormatter({ raw: "#,##0.00 'ILS'" }))),
                (p.a1385532398 = b(p("hr").numberFormatter({ raw: "#,##0.00 'INR'" }))),
                (p.b647731969 = b(p("hr").numberFormatter({ raw: "#,##0 'IQD'" }))),
                (p.a1327679450 = b(p("hr").numberFormatter({ raw: "#,##0 'ISK'" }))),
                (p.a808786856 = b(p("hr").numberFormatter({ raw: "#,##0 'JPY'" }))),
                (p.a1207216386 = b(p("hr").numberFormatter({ raw: "#,##0.00 'KES'" }))),
                (p.b25621045 = b(p("hr").numberFormatter({ raw: "#,##0 'KRW'" }))),
                (p.b427023805 = b(p("hr").numberFormatter({ raw: "#,##0.000 'KWD'" }))),
                (p.b1601413642 = b(p("hr").numberFormatter({ raw: "#,##0.00 'KZT'" }))),
                (p.a201628225 = b(p("hr").numberFormatter({ raw: "#,##0 'LBP'" }))),
                (p.a713385067 = b(p("hr").numberFormatter({ raw: "#,##0.00 'MAD'" }))),
                (p.a998487285 = b(p("hr").numberFormatter({ raw: "#,##0.00 'MKD'" }))),
                (p.b62575240 = b(p("hr").numberFormatter({ raw: "#,##0.00 'MXN'" }))),
                (p.a939445045 = b(p("hr").numberFormatter({ raw: "#,##0.00 'MYR'" }))),
                (p.b522425594 = b(p("hr").numberFormatter({ raw: "#,##0.00 'NGN'" }))),
                (p.b2098218191 = b(p("hr").numberFormatter({ raw: "#,##0.00 'NOK'" }))),
                (p.b1126016349 = b(p("hr").numberFormatter({ raw: "#,##0.00 'NZD'" }))),
                (p.a1188187714 = b(p("hr").numberFormatter({ raw: "#,##0.00 'PEN'" }))),
                (p.b387010237 = b(p("hr").numberFormatter({ raw: "#,##0.00 'PHP'" }))),
                (p.b1962208188 = b(p("hr").numberFormatter({ raw: "#,##0 'PKR'" }))),
                (p.b1189221111 = b(p("hr").numberFormatter({ raw: "#,##0.00 'PLN'" }))),
                (p.b504500071 = b(p("hr").numberFormatter({ raw: "#,##0.00 'QAR'" }))),
                (p.a663943306 = b(p("hr").numberFormatter({ raw: "#,##0.00 'RON'" }))),
                (p.b367300776 = b(p("hr").numberFormatter({ raw: "#,##0 'RSD'" }))),
                (p.a1350448284 = b(p("hr").numberFormatter({ raw: "#,##0.00 'RUB'" }))),
                (p.b1313846697 = b(p("hr").numberFormatter({ raw: "#,##0.00 'SAR'" }))),
                (p.a2035763970 = b(p("hr").numberFormatter({ raw: "#,##0.00 'SEK'" }))),
                (p.b684600021 = b(p("hr").numberFormatter({ raw: "#,##0.00 'SGD'" }))),
                (p.a1888455693 = b(p("hr").numberFormatter({ raw: "#,##0.00 'THB'" }))),
                (p.b1319198511 = b(p("hr").numberFormatter({ raw: "#,##0.000 'TND'" }))),
                (p.b1462938912 = b(p("hr").numberFormatter({ raw: "#,##0.00 'TRY'" }))),
                (p.b1921599974 = b(p("hr").numberFormatter({ raw: "#,##0.00 'TWD'" }))),
                (p.a1170348334 = b(p("hr").numberFormatter({ raw: "#,##0 'TZS'" }))),
                (p.a1885482463 = b(p("hr").numberFormatter({ raw: "#,##0.00 'UAH'" }))),
                (p.b921363627 = b(p("hr").numberFormatter({ raw: "#,##0 'UGX'" }))),
                (p.a566162933 = b(p("hr").numberFormatter({ raw: "#,##0.00 'USD'" }))),
                (p.b1468885372 = b(p("hr").numberFormatter({ raw: "#,##0.00 'VEF'" }))),
                (p.b2128545137 = b(p("hr").numberFormatter({ raw: "#,##0 'VND'" }))),
                (p.b1999076240 = b(p("hr").numberFormatter({ raw: "#,##0.00 'ZAR'" }))),
                (p.a204179095 = b(p("hr").numberFormatter({ raw: "#,##0.00 'ZMW'" }))),
                (p.a1146861939 = m({ 1: p("hr").numberFormatter({ raw: "0" }) }, { pattern: "d. MMM", timeSeparator: ":", months: { M: { 3: { 1: "sij", 2: "velj", 3: "ožu", 4: "tra", 5: "svi", 6: "lip", 7: "srp", 8: "kol", 9: "ruj", 10: "lis", 11: "stu", 12: "pro" } } } })),
                (p.a547864010 = m({ 1: p("hr").numberFormatter({ raw: "0" }) }, { pattern: "d. MMM y.", timeSeparator: ":", months: { M: { 3: { 1: "sij", 2: "velj", 3: "ožu", 4: "tra", 5: "svi", 6: "lip", 7: "srp", 8: "kol", 9: "ruj", 10: "lis", 11: "stu", 12: "pro" } } } })),
                (p.b1130499323 = m({ 2: p("hr").numberFormatter({ raw: "00" }) }, { pattern: "hh:mm a", timeSeparator: ":", dayPeriods: { am: "AM", pm: "PM" } })),
                (p.a1166232430 = m({ 1: p("hr").numberFormatter({ raw: "0" }) }, { pattern: "E, d. MMM", timeSeparator: ":", days: { E: { 1: { sun: "ned", mon: "pon", tue: "uto", wed: "sri", thu: "čet", fri: "pet", sat: "sub" } } }, months: { M: { 3: { 1: "sij", 2: "velj", 3: "ožu", 4: "tra", 5: "svi", 6: "lip", 7: "srp", 8: "kol", 9: "ruj", 10: "lis", 11: "stu", 12: "pro" } } } })),
                (p.b222834185 = m({ 1: p("hr").numberFormatter({ raw: "0" }) }, { pattern: "E, d. MMM y.", timeSeparator: ":", days: { E: { 1: { sun: "ned", mon: "pon", tue: "uto", wed: "sri", thu: "čet", fri: "pet", sat: "sub" } } }, months: { M: { 3: { 1: "sij", 2: "velj", 3: "ožu", 4: "tra", 5: "svi", 6: "lip", 7: "srp", 8: "kol", 9: "ruj", 10: "lis", 11: "stu", 12: "pro" } } } })),
                (p.a1173620598 = m({ 1: p("hr").numberFormatter({ raw: "0" }) }, { pattern: "d. MMMM", timeSeparator: ":", months: { M: { 4: { 1: "siječnja", 2: "veljače", 3: "ožujka", 4: "travnja", 5: "svibnja", 6: "lipnja", 7: "srpnja", 8: "kolovoza", 9: "rujna", 10: "listopada", 11: "studenoga", 12: "prosinca" } } } })),
                (p.b1719546715 = m({ 1: p("hr").numberFormatter({ raw: "0" }), 2: p("hr").numberFormatter({ raw: "00" }) }, { pattern: "d. MMM y. hh:mm a", timeSeparator: ":", months: { M: { 3: { 1: "sij", 2: "velj", 3: "ožu", 4: "tra", 5: "svi", 6: "lip", 7: "srp", 8: "kol", 9: "ruj", 10: "lis", 11: "stu", 12: "pro" } } }, dayPeriods: { am: "AM", pm: "PM" } })),
                (p.a1384467663 = m({ 1: p("hr").numberFormatter({ raw: "0" }) }, { pattern: "d. MMMM y.", timeSeparator: ":", months: { M: { 4: { 1: "siječnja", 2: "veljače", 3: "ožujka", 4: "travnja", 5: "svibnja", 6: "lipnja", 7: "srpnja", 8: "kolovoza", 9: "rujna", 10: "listopada", 11: "studenoga", 12: "prosinca" } } } })),
                (p.b1608154610 = m({ 1: p("hr").numberFormatter({ raw: "0" }), 2: p("hr").numberFormatter({ raw: "00" }) }, { pattern: "d. MMM hh:mm a", timeSeparator: ":", months: { M: { 3: { 1: "sij", 2: "velj", 3: "ožu", 4: "tra", 5: "svi", 6: "lip", 7: "srp", 8: "kol", 9: "ruj", 10: "lis", 11: "stu", 12: "pro" } } }, dayPeriods: { am: "AM", pm: "PM" } })),
                (p.a1702148253 = m({ 1: p("hr").numberFormatter({ raw: "0" }), 2: p("hr").numberFormatter({ raw: "00" }) }, { pattern: "dd. MM. y.", timeSeparator: ":" })),
                (p.b1005861887 = m({ 1: p("hr").numberFormatter({ raw: "0" }) }, { pattern: "y.", timeSeparator: ":" })),
                (p.a1541633046 = m({ 1: p("hr").numberFormatter({ raw: "0" }) }, { pattern: "LLL y.", timeSeparator: ":", months: { L: { 3: { 1: "sij", 2: "velj", 3: "ožu", 4: "tra", 5: "svi", 6: "lip", 7: "srp", 8: "kol", 9: "ruj", 10: "lis", 11: "stu", 12: "pro" } } } })),
                (p.a2099181801 = m({ 1: p("hr").numberFormatter({ raw: "0" }), 2: p("hr").numberFormatter({ raw: "00" }) }, { pattern: "EEEE, d. MMMM y. 'u' HH:mm:ss (zzzz)", timeSeparator: ":", days: { E: { 4: { sun: "nedjelja", mon: "ponedjeljak", tue: "utorak", wed: "srijeda", thu: "četvrtak", fri: "petak", sat: "subota" } } }, months: { M: { 4: { 1: "siječnja", 2: "veljače", 3: "ožujka", 4: "travnja", 5: "svibnja", 6: "lipnja", 7: "srpnja", 8: "kolovoza", 9: "rujna", 10: "listopada", 11: "studenoga", 12: "prosinca" } } }, gmtFormat: "GMT{0}", gmtZeroFormat: "GMT", hourFormat: "+HH:mm; -HH:mm" })),
                (p.b1723218749 = m({ 1: p("hr").numberFormatter({ raw: "0" }), 2: p("hr").numberFormatter({ raw: "00" }) }, { pattern: "d. MMM y. HH:mm:ss", timeSeparator: ":", months: { M: { 3: { 1: "sij", 2: "velj", 3: "ožu", 4: "tra", 5: "svi", 6: "lip", 7: "srp", 8: "kol", 9: "ruj", 10: "lis", 11: "stu", 12: "pro" } } } })),
                (p.a569104993 = m({ 1: p("hr").numberFormatter({ raw: "0" }), 2: p("hr").numberFormatter({ raw: "00" }) }, { pattern: "dd. MM. y.", timeSeparator: ":" })),
                (p.b1937474530 = m({ 2: p("hr").numberFormatter({ raw: "00" }) }, { pattern: "HH:mm", timeSeparator: ":" })),
                (p.b1690230576 = m({ 1: p("hr").numberFormatter({ raw: "0" }), 2: p("hr").numberFormatter({ raw: "00" }) }, { pattern: "E h:mm a", timeSeparator: ":", days: { E: { 1: { sun: "ned", mon: "pon", tue: "uto", wed: "sri", thu: "čet", fri: "pet", sat: "sub" } } }, dayPeriods: { am: "AM", pm: "PM" } })),
                (p.a547178817 = m({ 1: p("hr").numberFormatter({ raw: "0" }) }, { pattern: "LLLL y.", timeSeparator: ":", months: { L: { 4: { 1: "siječanj", 2: "veljača", 3: "ožujak", 4: "travanj", 5: "svibanj", 6: "lipanj", 7: "srpanj", 8: "kolovoz", 9: "rujan", 10: "listopad", 11: "studeni", 12: "prosinac" } } } })),
                (p.a1121119990 = m({ 1: p("hr").numberFormatter({ raw: "0" }) }, { pattern: "d. MMM y.", timeSeparator: ":", months: { M: { 3: { 1: "sij", 2: "velj", 3: "ožu", 4: "tra", 5: "svi", 6: "lip", 7: "srp", 8: "kol", 9: "ruj", 10: "lis", 11: "stu", 12: "pro" } } } })),
                (p.a1146176746 = m({}, { pattern: "LLLL", timeSeparator: ":", months: { L: { 4: { 1: "siječanj", 2: "veljača", 3: "ožujak", 4: "travanj", 5: "svibanj", 6: "lipanj", 7: "srpanj", 8: "kolovoz", 9: "rujan", 10: "listopad", 11: "studeni", 12: "prosinac" } } } })),
                (p.b1895545110 = m({}, { pattern: "cccc", timeSeparator: ":", days: { c: { 4: { sun: "nedjelja", mon: "ponedjeljak", tue: "utorak", wed: "srijeda", thu: "četvrtak", fri: "petak", sat: "subota" } } } })),
                (p.a755454858 = f(p("hr").dateToPartsFormatter({ skeleton: "MMMd" }))),
                (p.a1299146387 = f(p("hr").dateToPartsFormatter({ skeleton: "yMMMd" }))),
                (p.b1966659876 = f(p("hr").dateToPartsFormatter({ skeleton: "hm" }))),
                (p.a1917514807 = f(p("hr").dateToPartsFormatter({ skeleton: "MMMEd" }))),
                (p.a1592083022 = f(p("hr").dateToPartsFormatter({ skeleton: "yMMMEd" }))),
                (p.a1924902975 = f(p("hr").dateToPartsFormatter({ skeleton: "MMMMd" }))),
                (p.b1291688146 = f(p("hr").dateToPartsFormatter({ skeleton: "yMMMdhm" }))),
                (p.b2008577434 = f(p("hr").dateToPartsFormatter({ date: "long" }))),
                (p.a206762597 = f(p("hr").dateToPartsFormatter({ skeleton: "MMMdhm" }))),
                (p.b403034650 = f(p("hr").dateToPartsFormatter({ date: "short" }))),
                (p.a1183922506 = f(p("hr").dateToPartsFormatter({ skeleton: "y" }))),
                (p.a1150225965 = f(p("hr").dateToPartsFormatter({ skeleton: "yMMM" }))),
                (p.a1707774720 = f(p("hr").dateToPartsFormatter({ datetime: "full" }))),
                (p.a91698458 = f(p("hr").dateToPartsFormatter({ datetime: "medium" }))),
                (p.a1320387370 = f(p("hr").dateToPartsFormatter({ skeleton: "yMMdd" }))),
                (p.a252309863 = f(p("hr").dateToPartsFormatter({ time: "short" }))),
                (p.b1841403943 = f(p("hr").dateToPartsFormatter({ skeleton: "Ehm" }))),
                (p.a1298461194 = f(p("hr").dateToPartsFormatter({ skeleton: "yMMMM" }))),
                (p.a284959437 = f(p("hr").dateToPartsFormatter({ date: "medium" }))),
                (p.a754769665 = f(p("hr").dateToPartsFormatter({ skeleton: "MMMM" }))),
                (p.a2008015105 = f(p("hr").dateToPartsFormatter({ skeleton: "EEEE" }))),
                (p.a1102215895 = z(p("hr").numberFormatter({}), p("hr").pluralGenerator({}), { "relativeTime-type-future": { "relativeTimePattern-count-one": "za {0} dan", "relativeTimePattern-count-few": "za {0} dana", "relativeTimePattern-count-other": "za {0} dana" }, "relativeTime-type-past": { "relativeTimePattern-count-one": "prije {0} dan", "relativeTimePattern-count-few": "prije {0} dana", "relativeTimePattern-count-other": "prije {0} dana" }, "relative-type--2": "prekjučer", "relative-type--1": "jučer", "relative-type-0": "danas", "relative-type-1": "sutra", "relative-type-2": "prekosutra" })),
                (p.a897988796 = g(p("hr").numberFormatter({}), p("hr").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "sekunde", one: "{0} sekunda", few: "{0} sekunde", other: "{0} sekundi", perUnitPattern: "{0}/s" } })),
                (p.b988974500 = g(p("hr").numberFormatter({}), p("hr").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "minute", one: "{0} minuta", few: "{0} minute", other: "{0} minuta", perUnitPattern: "{0}/min" } })),
                (p.b1742809108 = g(p("hr").numberFormatter({}), p("hr").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "sati", one: "{0} sat", few: "{0} sata", other: "{0} sati", perUnitPattern: "{0}/h" } })),
                (p.a1370171645 = g(p("hr").numberFormatter({}), p("hr").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "s", one: "{0} s", few: "{0} s", other: "{0} s", perUnitPattern: "{0}/s" } })),
                (p.a474643101 = g(p("hr").numberFormatter({}), p("hr").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "min", one: "{0} m", few: "{0} m", other: "{0} m", perUnitPattern: "{0}/min" } })),
                (p.a1889057837 = g(p("hr").numberFormatter({}), p("hr").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "h", one: "{0} h", few: "{0} h", other: "{0} h", perUnitPattern: "{0}/h" } })),
                (p.a1876399191 = g(p("hr").numberFormatter({}), p("hr").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "d.", one: "{0} d.", few: "{0} d.", other: "{0} d.", perUnitPattern: "{0}/d." } })),
                (p.a246002326 = g(p("hr").numberFormatter({}), p("hr").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "dani", one: "{0} dan", few: "{0} dana", other: "{0} dana", perUnitPattern: "{0} dnevno" } })),
                (p.b1073804549 = g(p("hr").numberFormatter({}), p("hr").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "mj.", one: "{0} mj.", few: "{0} mj.", other: "{0} mj.", perUnitPattern: "{0}/mj." } })),
                (p.b221871558 = g(p("hr").numberFormatter({}), p("hr").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "mjeseci", one: "{0} mjesec", few: "{0} mjeseca", other: "{0} mjeseci", perUnitPattern: "{0} mjesečno" } })),
                (p.b1001347066 = g(p("hr").numberFormatter({}), p("hr").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "g.", one: "{0} g.", few: "{0} g.", other: "{0} g.", perUnitPattern: "{0}/g." } })),
                (p.b262019579 = g(p("hr").numberFormatter({}), p("hr").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "godine", one: "{0} godina", few: "{0} godine", other: "{0} godina", perUnitPattern: "{0} godišnje" } })),
                (p.b493794736 = g(p("hr").numberFormatter({}), p("hr").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "s", one: "{0} s", few: "{0} s", other: "{0} s", perUnitPattern: "{0}/s" } })),
                (p.a1139885232 = g(p("hr").numberFormatter({}), p("hr").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "min", one: "{0} min", few: "{0} min", other: "{0} min", perUnitPattern: "{0}/min" } })),
                (p.b754151136 = g(p("hr").numberFormatter({}), p("hr").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "h", one: "{0} h", few: "{0} h", other: "{0} h", perUnitPattern: "{0}/h" } })),
                (p.b2079324911 = g(p("hr").numberFormatter({ minimumFractionDigits: 1, maximumFractionDigits: 1, round: "truncate" }), p("hr").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "s", one: "{0} s", few: "{0} s", other: "{0} s", perUnitPattern: "{0}/s" } })),
                o("d58baa7f", p.a1673306623),
                o("ia24dc8d", p.b378804789),
                o("iab73d4b", p.a1874145295),
                o("i3b7a017", p.a897988796),
                o("ie5d110f", p.b988974500),
                o("df5f11b3", p.b1742809108),
                o("e8733ed9", p.a1370171645),
                o("be59d8c3", p.a474643101),
                o("i3d087db", p.a1889057837),
                o("ga8d18c9", p.a1876399191),
                o("a91e7d49", p.a246002326),
                o("id952a69", p.b1073804549),
                o("ga09ab65", p.b221871558),
                o("c83b901d", p.b1001347066),
                o("a55b9fed", p.b262019579),
                o("ccaa970f", p.a755454858),
                o("jade381b", p.a1299146387),
                o("d725a289", p.b1966659876),
                o("g08cbabb", p.b583604384),
                o("c333da63", p.a1102215895),
                o("h8054d91", p.a1917514807),
                o("i61fef37", p.b493794736),
                o("ba705e27", p.a1139885232),
                o("j86b0d8d", p.b754151136),
                o("f668e929", p.b304867764),
                o("i2785009", p.a1821600953),
                o("c778d80b", p.b2143600582),
                o("e8d93005", p.b1815786458),
                o("d46781af", p.b2079324911),
                o("ba316f05", p.b1537136887),
                o("c0bdd345", p.a1689355143),
                o("aa2aa1a1", p.a1592083022),
                o("da44942d", p.a1924902975),
                o("bfbc051d", p.b1291688146),
                o("ba2e82a1", p.b2008577434),
                o("fc209bb7", p.a206762597),
                o("cf8abf59", p.b35860779),
                o("a9f397f3", p.b403034650),
                o("d857e44d", p.a529544955),
                o("cb87e3db", p.b1618830662),
                o("a9d5ffd1", p.b388371815),
                o("a0e8371d", p.a1844701963),
                o("gcc50dc9", p.b1019997075),
                o("a6a43585", p.a1842918025),
                o("a0cc8f2d", p.a38686866),
                o("i31c32c5", p.a639899037),
                o("i7dc69e9", p.a1154034463),
                o("c14a6c03", p.b1051599456),
                o("jaa3d537", p.a465150901),
                o("a824080b", p.b1854999622),
                o("d9c0bedb", p.a1981306612),
                o("bf8c0613", p.b280990963),
                o("i8163625", p.a348850359),
                o("adb53ba1", p.a1378310503),
                o("iabf697d", p.b1601499785),
                o("a1a0555b", p.b1374250515),
                o("f266f3d9", p.a1029408877),
                o("a9a8652b", p.a626816825),
                o("dbf40761", p.a77511142),
                o("b0d993d9", p.a1193453385),
                o("ac1308e1", p.b1098662633),
                o("a7889ab3", p.a874370202),
                o("c614f5cd", p.b1302634566),
                o("i55d57e3", p.a1216730722),
                o("e4b6002b", p.a1100430180),
                o("d28e983b", p.b360845813),
                o("e8c9232d", p.a1385532398),
                o("c8994ae1", p.b647731969),
                o("f821c2a5", p.a1327679450),
                o("j348b9c9", p.a808786856),
                o("i6f93b9b", p.a1207216386),
                o("c6150bd5", p.b25621045),
                o("i8921e09", p.b427023805),
                o("ef239279", p.b1601413642),
                o("hecdb149", p.a201628225),
                o("fdd039b7", p.a713385067),
                o("f30c2c37", p.a998487285),
                o("d9ea7bff", p.b62575240),
                o("ea3df4b7", p.a939445045),
                o("jaac21bb", p.b522425594),
                o("hb435ced", p.b2098218191),
                o("ce699d81", p.b1126016349),
                o("bc56d3d7", p.a1188187714),
                o("f8561913", p.b387010237),
                o("g6485d53", p.b1962208188),
                o("ff561cc1", p.b1189221111),
                o("b42011d3", p.b504500071),
                o("a6660bcd", p.a663943306),
                o("f9b80449", p.b367300776),
                o("gdee4d5d", p.a1350448284),
                o("h36f2103", p.b1313846697),
                o("a19ad037", p.a2035763970),
                o("g713f699", p.b684600021),
                o("ff2e39af", p.a1888455693),
                o("be34316d", p.b1319198511),
                o("aef81b75", p.b1462938912),
                o("fcce70a5", p.b1921599974),
                o("jc9d352f", p.a1170348334),
                o("be1cb8c5", p.a1885482463),
                o("j9371501", p.b921363627),
                o("j7d4397d", p.a566162933),
                o("d61441dd", p.b1468885372),
                o("e2a99e97", p.b2128545137),
                o("f7ce19ab", p.b1999076240),
                o("b2a0213f", p.a204179095),
                o("d7d71245", p.a1183922506),
                o("a2f2faab", p.a1150225965),
                o("g8d1b99b", p.a1707774720),
                o("d0a77c9b", p.a91698458),
                o("e18e399b", p.a1320387370),
                o("b6ca7bcb", p.a252309863),
                o("h0e4cdf5", p.b1841403943),
                o("g727ddcf", p.a1298461194),
                o("h3629783", p.a284959437),
                o("a20c68af", p.a754769665),
                o("ja781451", p.a1169375047),
                o("cfa1a7b9", p.a165136106),
                o("f3b9b9a7", p.a2008015105),
                o("eefcd267", p.b389595604),
                o("fa8afc43", p.b731878259);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/i18n/hr.e811025a.js.map
