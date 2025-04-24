"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["i18n/fi"],
    {
        315355: (a, t, i) => {
            var e = i(292426)._register("fi", {
                get emoji() {
                    return i.e("i18n/emoji-fi").then(i.t.bind(i, 937732, 23));
                },
            });
            function n(a, t, i) {
                return "one" == ((e = a), (n = !String(e).split(".")[1]), 1 == e && n ? "one" : "other") ? t : i;
                var e, n;
            }
            e("c39b0e24", "X"),
                e("jb38600c", "Ei mitään"),
                e("f07eac34", "Parodiatili"),
                e("a41b5c2e", "Fanitili"),
                e("i428ea62", "Kommentaaritili"),
                e("ac0d27be", "Valitettavasti tämä tili on jäädytetty."),
                e("bcee7444", "Tilin päivitys epäonnistui."),
                e("e0cbf77a", "Lisää puhelin"),
                e("f377195c", "X on ruuhkautunut. Odota hetki ja yritä sitten uudelleen."),
                e("d67f9456", "Sinua on estetty suorittamasta tätä toimintoa."),
                e("e0ece1b6", "Median lisäys ei onnistu, yritä ladata uudelleen."),
                e("i82e8f04", "Suojellaksemme käyttäjiämme spämmäykseltä ja muulta haitalliselta toiminnalta tätä tiliä on väliaikaisesti estetty seuraamasta enempää tilejä. Varmista, että ymmärrät X:n säännöt."),
                e("jf7be47a", "Käyttäjien suojaamiseksi spämmäykseltä ja muulta haitalliselta toiminnalta tätä tiliä on väliaikaisesti estetty julkaisemasta. Varmista, että ymmärrät X:n säännöt."),
                e("g75fec74", "Olet saavuttanut tämän toiminnon päivittäisten enimmäiskäyttökertojen määrän. Voit poistaa rajoituksen lisäämällä tilillesi puhelimen."),
                e("abb8b6e0", "Tämä puhelinnumero on jo rekisteröity."),
                e("f30bd1fc", "Emme voi lähettää tekstiviestiä tähän puhelinnumeroon, sillä sen operaattoria ei tueta."),
                e("i54e550c", "Emme onnistuneet varmentamaan tätä puhelinnumeroa."),
                e("h154702a", "Pyyntöä ei voida täyttää, sillä X tai kumppanimme on todennut tämän linkin mahdollisesti haitalliseksi. Lue lisää ohjekeskuksesta."),
                e("c8cb0b4c", "Kirjoittamasi salasana on virheellinen."),
                e("b1b54f9e", "Media, jota yritit ladata, on virheellinen."),
                e("i859a9d4", "Lue lisää"),
                e("d6e72ce1", function (a) {
                    return "Salasanan on oltava alle " + a.count + " merkkiä. Syötä lyhyempi salasana.";
                }),
                e("a34dccd7", function (a) {
                    return "Salasanan on oltava vähintään " + a.count + " merkkiä. Syötä pidempi salasana.";
                }),
                e("jea2ff04", "Tuo salasana on liian helppo arvata. Valitse vahvempi salasana."),
                e("ce482c36", "Ainakin yksi kenttä on virheellinen. Tarkista kirjoittamasi ja yritä uudelleen."),
                e("db626d88", "Viimeistele tilin luominen lisäämällä puhelinnumerosi"),
                e("i3ee2550", "Täytä kaikki vaaditut kentät."),
                e("cf18a258", "Tämä pyyntö vaikuttaa automatisoidulta. Suojellaksemme käyttäjiämme roskapostilta ja muulta haitalliselta toiminnalta emme voi suorittaa toimintoa juuri nyt. Yritä myöhemmin uudelleen."),
                e("h7ffa648", "Tekstiviestivarmennuksen käyttörajoitus ylittyi."),
                e("b87ceb1c", "Virheellinen varmennuskoodi."),
                e("f87e2faa", "Valitettavasti emme löytäneet kyseistä käyttäjää."),
                e("cdaf8222", "Valitettavasti toimintojesi määrää on rajoitettu. Odota muutama hetki ja yritä sitten uudelleen."),
                e("c1b0e710", "Tilisi on jäädytetty eikä sillä voi suorittaa tätä toimintoa."),
                e("bfb22fae", "Pahoittelut, julkaisu on poistettu."),
                e("a23cd3ba", "X on poistanut käytöstä joitakin reagointivaihtoehtoja tähän julkaisuun."),
                e("bb558892", "Tällä käyttäjällä on jo varmennettu puhelinnumero."),
                e("hae1c934", "Jokin meni pieleen, mutta älä huoli – syy ei ole sinun."),
                e("e784846c", "Profiilisi on tarkistettavana. Et voi tehdä uusia muutoksia nimeen tai profiilikuvaan, ennen kuin tarkistus on suoritettu."),
                e("h1cbdd30", "Päivitä sivu ja yritä uudelleen."),
                e("a5077d3e", "Päivitä"),
                e("b2648ba4", "Tililläsi ei ehkä saa suorittaa tätä toimintoa. Päivitä sivu ja yritä uudelleen."),
                e("bcd6bb0e", "Jäsen"),
                e("hd8c22d2", "Mod"),
                e("c3153100", "Järj.valv."),
                e("fa9adac1", function (a) {
                    return 'Hae hakusanalla "' + a.query + '"';
                }),
                e("jcec6620", "Julkaisun vastaus piilotettu"),
                e("f75d1806", "Premium"),
                e("j4a7d9a6", "Basic"),
                e("hedf9d7c", "Premium+"),
                e("f5de898e", "Kuusikulmainen profiilikuva"),
                e("fcc8734a", "Neliskulmainen profiilikuva"),
                e("c64e46f8", "Tämä jäsen poistettiin Yhteisöstä, joten hänen julkaisunsa on piilotettu."),
                e("b3f1cb42", "Moderaattori piilotti tämän julkaisun, koska se rikkoo Yhteisön sääntöä."),
                e("cbd2dc9c", "Ilmiannoit tämän julkaisun."),
                e("cfbea177", function (a) {
                    return "Käyttäjän " + a.name + " huone";
                }),
                e("ab4fc8bc", "Tila"),
                e("jd859c9c", "Sinut on poistettu tästä Huoneesta."),
                e("c60ed9b0", "Sinulla ei ole valtuuksia liittyä tähän Huoneeseen."),
                e("d8227e16", "Sinulla ei ole valtuuksia tämän Huoneen luomiseen"),
                e("f027fed8", "Kuva kuvassa"),
                e("hd50e064", "Ei nyt"),
                e("i76d640e", "Tarvitsemme lupasi"),
                e("fdaa0be8", "Tässä Huoneessa puhuaksesi sinun on myönnettävä X:lle oikeus mikrofonisi käyttöön. Tarkista selaimesi asetukset. "),
                e("gea6cc1a", "Oletko varma?"),
                e("hb568af4", "Hiljennä"),
                e("f7c8617a", "Mitä klipit ovat?"),
                e("ecc7d2ec", "Klipit ovat hetkiä, joita kuka tahansa Huoneessasi voi luoda ja jakaa. Kaikki klipit vanhenevat 30 päivässä."),
                e("d575ee02", "Kuka voi luoda klipin?"),
                e("dbc477a4", "Kuka tahansa (kuuntelijatkin) voivat luoda klippejä. Täytyy vain olla kirjautuneena X:ään."),
                e("ed1d1cc0", "Kaikki puhujat voivat tallentua klipille"),
                e("e5d193c8", "Jos puhut, äänesi voi tallentua klipille. Kerromme sinulle, jos näin on."),
                e("e1547ec0", "Klippaa hetki Huoneesta"),
                e("i154245e", "Kuulitko jotain huvittavaa tai mahtavaa? Klippaa ja jaa se."),
                e("j24c37b2", "Selvä"),
                e("g1c6f16e", "Tallenteet Huoneista"),
                e("e5609214", "Jätä Huone kuultavaksi"),
                e("g665514c", "Vain puhujat tallennetaan"),
                e("ja196c5a", "Vieraiden puheet tallennetaan. Tallenne on julkinen, joten kuka tahansa voi kuunnella sitä."),
                e("dd317ed6", "Toista tai jaa kenelle tahansa"),
                e("jf03b37c", "Kuuntele tallenne milloin tahansa. Voit myös jakaa sen julkaisuna."),
                e("fd05976b", "Lue lisää"),
                e("b4f91a8a", "Tallennus käynnissä"),
                e("gb418012", "Tervetuloa Huoneisiin"),
                e("fec3c1e0", "Areena live-keskusteluille"),
                e("j32eb4f8", "Lisää jopa 10 puhujaa"),
                e("j4f133a6", "Voit kutsua kenet tahansa X:ssä puhumaan."),
                e("ed434ac6", "Huoneet ovat julkisia — kuka tahansa voi liittyä mukaan"),
                e("e0025688", "Huoneessasi sinä määräät"),
                e("c1bc6f86", "Hostina sinä määräät. Sinulla on myös oikeus poistaa ihmisiä, joita et halua huoneeseesi."),
                e("b0bc8330", "Voit myös estää ja ilmiantaa ihmisiä Huoneessa."),
                e("cb17a0f3", "Lue lisää"),
                e("dcd77941", "Lue lisää"),
                e("cc724cb0", "Luo klippi"),
                e("cfd2f35e", "Peruuta"),
                e("c1df579e", "Seuraava"),
                e("e3146662", "Tähän klippiin ei ollut mahdollista tehdä tekstitystä."),
                e("f123fea8", "Ilmianna tämä Huone"),
                e("d0aebc28", "Kuvaile ongelmaa"),
                e("g971a4e8", "Itsetuhoisuus"),
                e("b96e6682", "Väkivalta"),
                e("e5bf9b3a", "Seksuaalinen sisältö"),
                e("d2a34320", "Lapseen kohdistuva uhka"),
                e("a9ba3e28", "Yksityiset tiedot"),
                e("d5519f4a", "Häirintä"),
                e("eb55363c", "Tämä Huone on ilmiannettu."),
                e("i65de934", "Kuuntelet anonyymina"),
                e("b1037050", "Hallitse Huonetta"),
                e("ic107434", "Avaa kamera"),
                e("d7e0329c", "Sulje kamera"),
                e("b772cd66", "Valmis"),
                e("b3bd3e38", "Suosituimmat julkaisut ensin"),
                e("d88cf16c", "Uusimmat julkaisut ensin"),
                e("bd4ad3ea", "Laaja"),
                e("ca1180a0", "Keskikoko"),
                e("c86ff1b0", "Kapea"),
                e("eed02406", "Pieni"),
                e("cffb04d6", "Vakio"),
                e("af15cef8", "Julkaisu, johon on lisätty huomautuksia"),
                e("ab28945c", "Kirjoittajan profiili"),
                e("e2462db4", "Eniten jaetut verkostossasi · Viimeiset 24 h"),
                e("ad16f482", "Tapahtuma"),
                e("c20aaf3e", "Virhe"),
                e("edf7bc2e", "Suosittua"),
                e("fa884026", "Lista"),
                e("fa98627a", "Profiili"),
                e("a9ae1e78", "Hae"),
                e("a2a3824a", "Aihe"),
                e("a6d5b010", "Aikajana"),
                e("h5860a68", "Grok"),
                e("a990900c", "Kuvaus"),
                e("h02a6fe6", "Yhteisöt"),
                e("a15648a4", "Yhteisöhuomautukset"),
                e("j359a2a9", function (a) {
                    return a.handle + " • " + a.itemName;
                }),
                e("j5ec9765", function (a) {
                    return a.handle + " • Kirjanmerkkikansio";
                }),
                e("ce5deee7", function (a) {
                    return a.handle + " • Viestit";
                }),
                e("d80c77dc", "Piilotit nämä vastaukset"),
                e("ef939f4b", function (a) {
                    return "Käyttäjän @" + a.screenName + " piilottamat vastaukset";
                }),
                e("g40ff2b4", "Mediatiedoston koon pienennys epäonnistui, ja se on liian suuri ladattavaksi."),
                e("b8098028", "Yksi tai useampi kuva ylittää kokorajoituksen, eikä niiden kokoa voida muuttaa."),
                e("b36f4170", "Tiedosto on tyhjä."),
                e("hab3781e", "Vähintään yksi valituista tiedostoista ei ole kuva."),
                e("f6c4fb02", "GIF-tiedostoasi ei voitu käsitellä. Katso vinkkejä GIF-tiedostojen lataamiseen."),
                e("g0af3dd2", "GIF-tiedostosi ei ole yhteensopiva. Katso vinkkejä GIF-tiedostojen lataamiseen."),
                e("b8c8b0be", "Videotiedostoasi ei voitu käsitellä. Katso vinkit videoiden lataamiseen."),
                e("ica6d718", "Videotiedostosi ei ole yhteensopiva. Katso vinkit videoiden lataamiseen."),
                e("b28d44f7", function (a) {
                    return "GIF-tiedostosi on liian suuri. GIF-tiedostojen tulee olla alle " + a.limit + " Mt";
                }),
                e("i1db7d13", function (a) {
                    return "Videotiedostosi on liian suuri. Videoiden tulee olla alle " + a.limit + " Mt";
                }),
                e("baac0ed7", function (a) {
                    return "Videotiedostosi on liian suuri. Videoiden tulee olla alle " + a.limit + " Gt";
                }),
                e("a22385bb", function (a) {
                    return "Videosi on liian pitkä. Rajaa se enintään " + a.limit + " sekuntiin.";
                }),
                e("be0440bf", function (a) {
                    return "Videosi on liian pitkä. Rajaa se enintään " + a.limit + " minuuttiin.";
                }),
                e("feeba512", "Kuvaasi ei voitu käsitellä. Katso vinkkejä kuvien lataamiseen."),
                e("db123c02", "Kuvasi ei ole yhteensopiva. Katso vinkkejä kuvien lataamiseen."),
                e("db6001e7", function (a) {
                    return "Kuvatiedostosi on liian suuri. Kuvien tulee olla alle " + a.limit + " Mt";
                }),
                e("eb96d952", "Kuvatiedostostasi puuttuu korkeus ja leveys"),
                e("b3880588", "Latausistunto on vanhentunut."),
                e("ca058b68", "Jonkin mediasisältösi lataus epäonnistui."),
                e("id24379c", "Joidenkin mediatiedostojen lataus epäonnistui."),
                e("h4d7cbcc", "Median lataus ei onnistunut. Yritä uudelleen"),
                e("aaa798fc", "Upgreidaa"),
                e("f13bb672", "Tilaa Premium"),
                e("ab0decc0", "Tilaa"),
                e("e4e92f35", function (a) {
                    return "Päivitä " + a.tier + "-tasoon";
                }),
                e("c2831f07", function (a) {
                    return "Tilaa " + a.tier;
                }),
                e("fd425414", "Hanki Radar"),
                e("g6320792", "Hanki Premium-tilastot"),
                e("f09be7f8", "Varmenna tilisi"),
                e("j34ad558", "Hanki Premium"),
                e("a73d39fb", function (a) {
                    return "Aloita " + a.numberOfDays + " päivän kokeilu";
                }),
                e("i4fb96c7", function (a) {
                    return "X " + a.premiumTierName + " nyt jopa " + a.percentage + " %:n alennuksella ";
                }),
                e("c1c98165", function (a) {
                    return "Alennus" + a.percentage + " %";
                }),
                e("c5546038", "Umpeutuu pian!"),
                e("e9a47564", "Viimeinen mahdollisuus"),
                e("f65e7e91", function (a) {
                    return a.percentage + " %:n alennus: " + a.tier + " " + a.plan;
                }),
                e("a84a736e", "Mainossaldoa maksutta"),
                e("a0713d76", "Siirtymällä Varmennetut organisaatiot ‑tilaajaksi saat mainossaldoa maksutta ja työkaluja liiketoiminnan kasvuun."),
                e("a07e13fc", "Ryhdy Premium-sisällöntuottajaksi"),
                e("i1b4aea2", "Päivitä tilaus, niin voit julkaista pidempiä videoita"),
                e("efa90342", "X Premium antaa sinun muokata julkaisuja"),
                e("cc528e28", "Julkaisujen muokkaus on vain X Premium -tilaajien käytettävissä. Päivitä ylempään tasoon jatkaaksesi."),
                e("h8a3525e", "Lisää profiilin kohokohtiin"),
                e("c0f7a722", "Tilin on oltava Premiumin tilaaja, jotta voit lisätä julkaisuja profiilisi kohokohtiin."),
                e("i3b31136", "Kirjoita artikkeleita X:ssä"),
                e("b6a41c5f", function (a) {
                    return "Sinun on tilattava " + a.tier + " voidaksesi kirjoittaa artikkeleita X:ssä";
                }),
                e("ae2c4afc", "Haluatko julkaista oman artikkelisi?"),
                e("d300e29b", function (a) {
                    return "Päivitä " + a.tier + "-tasoon kirjoittaaksesi pidempiä julkaisuja ja artikkeleita.";
                }),
                e("f614e2bc", "Päivitä Premium-tiliin kirjoittaaksesi pidempiä julkaisuja ja käyttääksesi muotoilua, kuten lihavointia ja kursivointia."),
                e("c9772e6e", "Tilaa Premium"),
                e("dc5575ac", "Haluatko profiiliisi Tunnistautunut-merkinnän?"),
                e("d154f46e", "X Premium -tilaajana voit perustaa yhteisöjä"),
                e("a0228c02", "Vain X Premium -tilaajat voivat perustaa yhteisöjä. Päivitä tilaus voidaksesi jatkaa."),
                e("d07f1d74", "Sinun on oltava varmennettu voidaksesi lisätä nämä käyttäjät keskusteluun"),
                e("ebe38626", "Vain varmennetut käyttäjät voivat lisätä ryhmään ihmisiä, jotka eivät seuraa heitä. Päivitä tilaus voidaksesi jatkaa."),
                e("e6eddae0", "Hanki varmennettu tili, jotta voit luoda tämän ryhmän"),
                e("he27089e", "Vain varmennetut käyttäjät voivat luoda ryhmän käyttäjistä, jotka eivät seuraa heitä. Päivitä tilaus voidaksesi jatkaa."),
                e("d7bc1116", "Varmenna tili voidaksesi lähettää viestin tälle käyttäjälle"),
                e("f897074a", "Vain varmennetut käyttäjät voivat lähettää yksityisviestipyyntöjä käyttäjille, jotka eivät seuraa heitä. Päivitä tilaus voidaksesi jatkaa."),
                e("c0cf5eae", "Hanki varmennus, niin voit lähettää enemmän viestejä"),
                e("h2da08fc", "Yksityisviestien päiväraja on täyttynyt. Päivitä tilaus voidaksesi jatkaa viestittelyä."),
                e("j503aee6", "X Premiumilla voit ladata videoita"),
                e("j4dd3bf4", "Vain X Premium -tilaajat voivat ladata videoita palvelusta. Päivitä tilaus voidaksesi jatkaa."),
                e("bc231a74", "Saa käyttöösi kirjanmerkkikansiot X Premiumissa"),
                e("ed534c78", "Kirjanmerkkikansiot ovat vain X Premium -tilaajien käytettävissä. Päivitä ylempään tasoon jatkaaksesi."),
                e("ed924940", "Tilaa Premium+ välttääksesi mainokset"),
                e("dccdb326", "Vain Premium+-tilaajat eivät saa mainontaa. Päivitä tilaus voidaksesi jatkaa."),
                e("adf3410a", "Tilaamalla saat käyttöösi uusia ominaisuuksia. Jos kelpoisuusehdot täyttyvät, saat osuuden tuloista."),
                e("d8661dd4", "Rajoitetun ajan. X parhaimmillaan."),
                e("fe7fd234", "Ota Premium Basic maksutta kokeiluun"),
                e("a2f86dda", "Premium Basic tarjoaa paremman käyttäjäkokemuksen, johon sisältyvät kirjanmerkkikansiot, julkaisun muokkaus, kustomoidut sovelluskuvakkeet ym."),
                e("d9593598", "Ota Premium maksutta kokeiluun"),
                e("d0d6b59c", "Premium-tilaajana käyttö on mukavampaa, näet vähemmän mainoksia ja saat työkaluja käyttöösi."),
                e("g4bb7ea8", "Jopa 50 % alennusta X Premiumista"),
                e("b748499c", "Tarjousta jatkettu!"),
                e("b81135bc", "Päättyy tänään!"),
                e("a8b4b878", "Koe paras X-versio tänä kiitospäivänä."),
                e("df7fb242", "Kiitospäivän tarjous"),
                e("aeaf14a6", "40 % alennusta Premiumista. Tarjous päättyy pian!"),
                e("ca8cbf78", "Saat 40 %:n alennuksen Premium- ja Premium+-versioista"),
                e("j88ba18e", "Lunasta tarjous"),
                e("f4dc8ea3", function (a) {
                    return "Saa " + a.percentage + " % alennusta X Premiumista. X parhaimmillaan.";
                }),
                e("db6a5d54", "Tilisi ei vielä ole varmennettu"),
                e("edf7f57e", "Hankkimalla varmennetun tilin saat vastausten tehostuksen, tilastot, selailun ilman mainoksia ym. Päivitä profiilisi nyt."),
                e("ba920d68", "Lisää vaikuttavuuttasi varmentautumalla"),
                e("ib79d0c2", "Saa käyttöösi VIP-ominaisuudet: varmenna tilisi"),
                e("bebc5f12", "Mainostat X:ssä, mutta sinulla ei ole Varmennetut organisaatiot ‑tilausta"),
                e("d7836d1e", "Tilaamalla saat jopa 12 000 USD mainossaldoa, kultaisen varmennusmerkin, VIP-tuen ja työkaluja kasvuun."),
                e("f528e369", function (a) {
                    return "Tilaa " + a.tier + " kirjoittaaksesi omia artikkeleita";
                }),
                e("c5a8022a", "Artikkeleissa voit julkaista omia pitkiä kirjoituksiasi käyttäen tekstimuotoilua ja tekstiin sidottua mediaa suoraan X:ssä."),
                e("d77899b6", "Tilaa Premium kirjoittaaksesi pidempiä julkaisuja"),
                e("bd65482a", "Kirjoita pidempiä julkaisuja ja käytä muotoilua, kuten lihavointia ja kursivointia."),
                e("bee20918", "Julkaisuilla ansaitseminen"),
                e("gb699d52", "Julkaisetko mielelläsi X:ssä? Premium-tilaajana voit saada osuuden mainostuloista."),
                e("f69877c2", "Vastauksiesi tehostus Premiumilla."),
                e("gba90d44", "Saa lisää näkyvyyttä ja erotu massasta."),
                e("a6dbcd58", "Tue sisällöntuottajia tilaamalla Premium"),
                e("c4f49130", "Jopa 25 % tilausmaksusta menee suoraan sisällöntuottajille."),
                e("ca8fa2c0", "Hanki sininen varmennusmerkki"),
                e("febffc1a", "Tehosta uskottavuuttasi, kasvata näkyvyyttäsi ja saa äänesi kuuluviin."),
                e("j45a377a", "Päivitä Premium+-tiliin"),
                e("i7170016", "Nauti lisäetuuksista, kuten mainoksettomuudesta ja vastausten suurimmasta priorisoinnista."),
                e("ee87f95e", "Edistynyt tilastodata X Premium ‑tilaajille"),
                e("ac38dbc0", "Näe esimerkiksi profiilisi tilastot ja tunne yleisösi. Vaihda tilaus ylempään tasoon jatkaaksesi."),
                e("i6e73154", "Näytesivu tilin tilastoista pylväsgraafein ja mittarein"),
                e("b583e154", "X Premium tuo analytiikan hyppysiisi"),
                e("b7fb8c5e", "Käytä tonni, tienaa tonni"),
                e("ca559b70", "Tilaa nyt"),
                e("d68773a4", "Radar visualisoi trendit"),
                e("f677fed6", "Pidä silmällä hakusanoja, tee trendit näkyviksi ja suodata keskusteluja. Reaaliajassa."),
                e("ha49eac2", "Haluatko kasvattaa X-suosiotasi nopeasti?"),
                e("f27018b4", "Premium-tilastot auttavat kasvattamaan seuraajamääriä älykkään datan avulla."),
                e("dfea1f08", "Älä jää paitsi arvokkaasta datasta"),
                e("da8c5244", "Premium-tilastot antavat käyttöösi älykästä dataa seuraajamääräsi kasvattamista varten."),
                e("b081baea", "Jäät paitsi älykkäästä datasta!"),
                e("d5effffc", "Lisää merkki"),
                e("f1dd86b0", "Varmenna yrityksesi"),
                e("e8070e70", "Kokeile Premium"),
                e("ec42820e", "Haluatko, että useampi näkee vastauksesi?"),
                e("b0a95418", "Premium-käyttäjänä saat tehostuksen vastauksillesi"),
                e("j8ee20aa", "Vastausten tehostuksella erotut keskustelussa"),
                e("g13aa596", "Tilaa Premium, niin saat vastausten tehostuksen"),
                e("cadd92be", "Tutki julkaisun tilastoja"),
                e("a7058228", "X Premium tuo edistyneen analytiikan hyppysiisi"),
                e("gb7823ba", "Tilin tilastot"),
                e("i90f8e36", "Järjestä kirjanmerkkisi"),
                e("abc6e710", "Järjestä kirjanmerkit kansioihin X Premium"),
                e("b7fa0cfe", "Suosituimmat artikkelit"),
                e("bcc7e8c0", "Kaikki kirjanmerkit"),
                e("i3145aa0", "Kirjanmerkit"),
                e("e39b368e", "Lähetys"),
                e("hbea78a8", "Uusi sarake"),
                e("b5298d92", "Yhdistä"),
                e("d35d74e4", "Keskustelu"),
                e("h5245afa", "Yhteisö"),
                e("d4ebc798", "Luonnokset"),
                e("fcf3e54c", "Selaa"),
                e("d806aa1a", "Piilotetut vastaukset"),
                e("ha8209bc", "Etusivu"),
                e("a2f81050", "Viestit"),
                e("cf2d1048", "Viestipyynnöt"),
                e("e7172d70", "Lisää viestejä"),
                e("e1066d88", "Oma profiili"),
                e("eb75875e", "Ilmoitukset"),
                e("j45978a8", "Lainaukset"),
                e("fd6a3f30", "Ajastetut julkaisut"),
                e("aa4209e8", "Superseuraajaa"),
                e("d52a1caa", "Tilaajat"),
                e("d7b51c68", "Tilaukset"),
                e("c5f4befa", "Suositut puheenaiheet"),
                e("df34a454", "Julkaise"),
                e("gfccba44", "Jäsenpyynnöt"),
                e("e42dd8fa", "Moderointiloki"),
                e("c2c191fc", "Ilmiannetut julkaisut"),
                e("c63602d4", "Omat Yhteisöni"),
                e("ddf0ba7e", "Kokoelma"),
                e("c64974fc", "Seuraajat"),
                e("i099d32e", "Tuntemasi seuraajat"),
                e("d960b55c", "Seurataan"),
                e("b007440a", "Työpaikat"),
                e("aa68dafc", "Ilmoituksen tiedot"),
                e("b8533bac", "Aiheet"),
                e("jf00ebf6", "Sarake ei käytettävissä"),
                e("jaaa8984", "Sijainti"),
                e("f345dcda", "Muokkaushistoria"),
                e("hea3f8ac", "Aiheeseen liittyviä julkaisuja"),
                e("c8ee31da", "Uutiset"),
                e("d35c9eec", "Tilin tilastot"),
                e("b5b7fb94", "Ryhmä"),
                e("g755fcde", "Sinä"),
                e("f6b1ff81", function (a) {
                    return a.name + " ja sinä";
                }),
                e("j652293d", function (a) {
                    return a.listOfParticipants + " ja " + a.count + " muuta";
                }),
                e("fb4ee2f6", "Viestipyynnöt poistettu"),
                e("j607bf02", "Lataa X-sovellus"),
                e("j49fd4e8", "Vaihda sovellukseen"),
                e("a565833e", "Rekisteröidy"),
                e("e919c3bc", "Kirjaudu sisään"),
                e("a17a75da", "X on mukavampi sovelluksessa"),
                e("e7342ed4", "Älä jää yhdestäkään julkaisusta paitsi. Avaa tämä X-sovelluksessa saadaksesi täyden käyttäjäkokemuksen."),
                e("b6a43e78", "Näe ensimmäisten joukossa"),
                e("b469e406", "Pysy ajan tasalla itsellesi tärkeistä asioista. Vaihda sovellukseen saadaksesi push-ilmoituksia seuraamistasi käyttäjistä, aiheista ja tapahtumista."),
                e("b8505290", "Liity keskusteluun vastaamalla."),
                e("ae8b0564", "Levitä sanaa uudelleenjulkaisemalla"),
                e("f2adab0e", "Tykkäämällä julkaisusta voit ilahduttaa tekijää."),
                e("b7821a74", "Rekisteröitymällä näet hänen jokaisen julkaisunsa."),
                e("e6d43d06", "Seuraa aihetta, jotta näet itseäsi kiinnostavat julkaisut"),
                e("ic848090", "Kirjaudu ensin sisään"),
                e("f9ebe066", "Voit osallistua keskusteluun yhteisöissä –heti sisäänkirjautumisen jälkeen."),
                e("je3d93e2", "Tuoreimmat uutiset löytyvät X:stä."),
                e("ea88ce2e", "Älä jää paitsi tapahtumista"),
                e("d8817e36", "Accept all cookies"),
                e("b9288ee6", "Refuse non-essential cookies"),
                e("i1390ec2", "Did someone say … cookies?"),
                e("ga3121d5", "ohjekeskuksen"),
                e("g482c949", "Lue lisää vaihtoehdoista."),
                e("b47e760e", "Pikanäppäimet näet painamalla kysymysmerkkiä"),
                e("fd2c7b44", "Näytä pikanäppäimet"),
                e("g7e2adf2", "Luo uusi dekki"),
                e("a6ba09e8", "Kopiosarake"),
                e("f5c9ccca", "Muokkaa tätä dekkiä"),
                e("bf42c578", "Tarkenna järjestelypainikkeeseen"),
                e("j6fa64a6", "Siirry viimeiseen sarakkeeseen"),
                e("b5545202", "Siirry viimeiseen kiinnitettyyn dekkiin"),
                e("e0497acc", "Siirry kaikkien dekkien hallintaan"),
                e("beef7b14", "Siirry seuraavaan sarakkeeseen"),
                e("a5cb005e", "Siirry sarakkeeseen nro"),
                e("f65391bc", "Siirry kiinnitettyyn dekkiin nro"),
                e("h0bfdd20", "Lisää sarake"),
                e("h770f6d4", "Siirry edelliseen sarakkeeseen"),
                e("b8b2b70c", "Poista sarake"),
                e("a3e2df76", "Kumoa poista sarake"),
                e("g850aec4", "Avaa/sulje sarakkeen asetukset"),
                e("d5696fcc", "Pikanäppäinohje"),
                e("a83d4280", "Seuraava julkaisu"),
                e("g0048656", "Edellinen julkaisu"),
                e("a690c4d0", "Sivu alas"),
                e("e893811a", "Lataa uusia julkaisuja"),
                e("cdb53d7a", "Maininnat"),
                e("d7b8ebaa", "Tykkäykset"),
                e("b0041756", "Listat"),
                e("d4986f86", "Yksityisviestit"),
                e("bb081ea2", "Asetukset"),
                e("eee2ed92", "Siirry käyttäjään..."),
                e("ee5ccf3e", "Näyttöasetukset"),
                e("ab3d53f8", "Uusi julkaisu"),
                e("de94bda6", "Lähetä julkaisu"),
                e("e736990a", "Uusi yksityisviesti"),
                e("fe731016", "Tykkää"),
                e("d17df548", "Vastaa"),
                e("g062295e", "Uudelleenjulkaise"),
                e("h01621a4", "Jaa julkaisu"),
                e("gb303814", "Lisää kirjanmerkkeihin"),
                e("c03b1126", "Hiljennä tili"),
                e("ebd2abb2", "Estä tili"),
                e("hc6c5510", "Avaa julkaisun tiedot"),
                e("eebdef38", "Laajenna kuva"),
                e("b488758c", "Avaa/sulje Viestit-tehtäväpalkki"),
                e("c82314e0", "Keskeytä/toista valittu video"),
                e("b881560e", "Hiljennä valittu video"),
                e("a94f7302", "Siirry äänitelakkaan"),
                e("a7e604c6", "Toista ääntä / keskeytä ääntä"),
                e("f978c4fc", "Hiljennä äänitelakka / poista hiljennys"),
                e("hc73f030", "Tilisi"),
                e("f15bfdb4", "Tilitiedot"),
                e("a3841918", "Sähköposti"),
                e("c21037d0", "Maa"),
                e("ab1f7ee0", "Vaihda salasanasi"),
                e("e731db5a", "Salasanan nollaus"),
                e("f56af9cc", "Lataa arkistoidut tiedot itsestäsi"),
                e("hfb92b14", "Poista tilisi käytöstä"),
                e("bf96fda4", "Ikä"),
                e("d12d42dc", "Automaatio"),
                e("fdb81456", "Parodiamerkintä"),
                e("j9d10268", "Tilin toiminta"),
                e("i6b3f59a", "Tilin historia"),
                e("da202f9a", "Mainostajalistasi"),
                e("hc36dbba", "Kirjautuneet laitteet ja sovellukset"),
                e("a8d0108e", "Sukupuoli"),
                e("a03dacaa", "Kieli"),
                e("d9138166", "Näytä paikat, joissa olet ollut"),
                e("b523ecc6", "Tilinkäyttöhistoria"),
                e("abedd45c", "Pyydä tietojasi"),
                e("h1f01a24", "Kiinnostuksen kohteet"),
                e("j7ad754a", "X-tietosi"),
                e("d299431c", "Kaupallinen käyttö"),
                e("j087774e", "Kolikot"),
                e("ff9ed474", "Tulot yhteensä"),
                e("ec885836", "Sisällöntuottajien tulonjako"),
                e("b431a5c6", "Osuus mainostuloista"),
                e("b0e986ec", "Tunnistautuminen kaupallista käyttöä varten"),
                e("aca4d76a", "Osuus mainostuloista -asetukset"),
                e("ab1b837a", "Osuus mainostuloista -koontinäyttö"),
                e("a9c1a9cc", "Videomainokset"),
                e("d4ab5c12", "Videomainosten käyttöönotto"),
                e("c429e3ba", "Sisällöntuottajien tilaukset"),
                e("fce877d6", "Peru julkaisu"),
                e("dd0c889e", "Profiilin mukauttaminen"),
                e("ib35705e", "Hallitse tilausta"),
                e("cf131522", "Affiliaatin merkkien hallinta"),
                e("cb165528", "Uutisominaisuudet ja -asetukset"),
                e("f8645654", "Turvallisuus ja tilin käyttö"),
                e("j95edf76", "Turvallisuus"),
                e("afe4a358", "Tunnistautuminen"),
                e("dd703318", "Kaksivaiheinen tunnistus"),
                e("b1686800", "Hallitse suojausavaimia"),
                e("ae72d4c4", "Sovellukset ja istunnot"),
                e("a1e8e682", "Rekisteröidyt laitteet"),
                e("h1abfbce", "Liitetyt tilit"),
                e("cad53944", "Yksityisyys ja turvallisuus"),
                e("e908903a", "Yleisö ja merkitseminen"),
                e("b5c85d2c", "Suojaa julkaisusi"),
                e("f56d108e", "Kuviin merkintä"),
                e("c6f67e32", "Julkaisusi"),
                e("f2bd9c48", "Näkemäsi sisältö"),
                e("cbd449a0", "Hiljennä ja estä"),
                e("daef29b8", "Hiljennetyt tilit"),
                e("i0dd9b9e", "Hiljennetyt sanat"),
                e("a5f32aa2", "Estetyt tilit"),
                e("i58a274c", "Yksityisviestit"),
                e("ded416b0", "Huoneet"),
                e("fd4d9068", "Löydettävyys ja yhteystiedot"),
                e("bbcafbda", "Hallitse yhteystietoja"),
                e("aeddb28a", "Sisältövalinnat"),
                e("d035a8d0", "Mainonnan asetukset"),
                e("d0b74a5a", "Cookie preferences"),
                e("h3909cd0", "Päätelty identiteetti"),
                e("d84e63d2", "Toiminnat X:n ulkopuolella"),
                e("h14ba864", "Tietojen jako liikekumppaneille"),
                e("jabb9c9a", "Sijaintitiedot"),
                e("fcb6a5b8", "Lisää julkaisuihisi sijaintitieto"),
                e("h9f2da68", "Arkaluonteinen media"),
                e("id6a8e1a", "Vastaussuodatin"),
                e("fc35f762", "Suodatetut vastaukset"),
                e("gaac710a", "Raportointikeskus"),
                e("bcd81cac", "Valinnat"),
                e("i647fb04", "Suodattimet"),
                e("hee41732", "Push-ilmoitukset"),
                e("e75f25a8", "Sähköposti-ilmoitukset"),
                e("cf9b166a", "Käytettävyys, näyttö ja kielet"),
                e("e3719c16", "Esteettömyys"),
                e("a776eed8", "Automaattinen toisto"),
                e("c4881c66", "Näyttö"),
                e("d495680e", "Kielet"),
                e("f953f53a", "Vaihda näyttökieli"),
                e("eafe3288", "Datan käyttö"),
                e("b721eb38", "Tietoja"),
                e("g9230d00", "Delegointi"),
                e("cb8ebf5c", "Jäsenet, joille olet delegoinut rooleja"),
                e("i95202f6", "Sinulle delegoidut tilit"),
                e("afcad7f2", "Lataa sovellus"),
                e("e8f57e08", "Personointi ja data"),
                e("gbde3534", "Kiinnostuksen kohde- ja mainostiedot"),
                e("a54826c6", "Päätellyt kiinnostuksen kohteet kumppaneilta"),
                e("a5cbc19a", "Omat tilastosi"),
                e("i9028824", "Ladataan"),
                e("f5090e28", "Yhteytesi näyttää katkenneen. Yritämme uudelleen."),
                e("ba929da8", "Sivua ei löydy"),
                e("d203e242", "Ei löydy"),
                e("e2eac0c4", "Ensisijainen"),
                e("i5aa4ce0", "Lisää valikkokohtia"),
                e("h63a5c3c", "Lisää"),
                e("a4fc1872", "Viimeinen viikko"),
                e("e14bb1da", "Viimeinen päivä"),
                e("d86bbf0f", function (a) {
                    return a.count + " lukematonta kohdetta";
                }),
                e("h6beb5fb", function (a) {
                    return a.count + "+";
                }),
                e("i5f7b6b8", "Tili"),
                e("da4691aa", "Näytä kaikki tilit"),
                e("c7e55ccf", function (a) {
                    return "Vaihda tiliin @" + a.screenname;
                }),
                e("b20a3894", "Tili, johon yrität vaihtaa, on poistettu."),
                e("daffabde", "toimit käyttäjänä..."),
                e("eccbfa26", "Delegoi tilejä"),
                e("a1b7a904", "Toimi käyttäjänä"),
                e("g61ed8a4", "Jokin meni pieleen."),
                e("e520f166", "Olet ylittänyt päivittäisen julkaisujen lähetysrajan."),
                e("c0554ca0", "Jokin meni pieleen. Yritä lähettää julkaisu hetken kuluttua uudelleen."),
                e("b25c5b2a", "Hups! Sanoit tuon jo."),
                e("cef21114", "Tilisi on jäädytetty eikä saa lähettää julkaisuja."),
                e("cf369a0e", "Julkaisu, johon yrität vastata, on poistettu tai se ei ole sinulle näkyvä."),
                e("cd86efa8", "Julkaisussasi on liian monta @mainintaa."),
                e("e002f424", "Julkaisusi tekstissä on sallittua enemmän URL-osoitteita."),
                e("c2b4ae8c", "Julkaisussasi on liian monta asiasanaa."),
                e("hf05f59e", "Julkaisussasi on liian monta cashtagiä."),
                e("dffb84c6", "Julkaisusi tekstissä oleva avainsana on sallittua pidempi."),
                e("d7b21bc8", "Julkaisussa on liian on liian monen tyyppisiä liitteitä."),
                e("e4672ac2", "Hups! Julkaisussasi oleva URL-osoite näyttää olevan linkki sivulle, jolla on roskasisältöä tai epäluotettavaa sisältöä."),
                e("he5ecf52", "Julkaisussa on liian monta merkkiä."),
                e("ac78e602", "Julkaisusi sisältö ei kelpaa."),
                e("i251c738", "Videossa, jonka yritit ladata, on liian suuri kuvataajuus."),
                e("ed3ac7ef", function (a) {
                    return "Videossa, jonka yritit ladata, on liian suuri kuvataajuus. Enimmäiskuvataajuus: 60. Havaittu kuvataajuus: " + a.frameRate + ".";
                }),
                e("e23fe0cc", "Videossa, jonka yritit ladata, on liian suuri kuvasuhde."),
                e("ca4514c0", "Videossa, jonka yritit ladata, on liian pieni kuvasuhde."),
                e("fb4a459c", "Video, jonka yritit ladata, on liian lyhyt."),
                e("ca1afa98", "Video, jonka yritit ladata, on liian pitkä."),
                e("b2e94283", function (a) {
                    return "käyttäen @" + a.viaScreenName;
                }),
                e("ee69d769", function (a) {
                    return "Julkaise" + a.verb;
                }),
                e("ge8e4a38", "Julkaise kaikki"),
                e("h735a98e", "Ajasta"),
                e("h3701ffe", "Päivitä"),
                e("d9ef2842", "Lukemattomat"),
                e("cdf89b84", "Brändin tykkäysten esikatselu"),
                e("i83d4f14", "Seurauspyynnöt"),
                e("aeede01a", "Imprint"),
                e("ae1bbb26", "Kirjaudu ulos"),
                e("fd442790", "Asetukset ja yksityisyys"),
                e("da137d9a", "MStV Transparenzangaben"),
                e("e0cb0c72", "Mainokset"),
                e("e2eef3c2", "Varmennetut organisaatiot"),
                e("b55d8a78", "Perusta Huone"),
                e("a5a30af0", "Artikkelit"),
                e("d13d697c", "Uusi"),
                e("j0e2cfa8", "Yritys"),
                e("h5e38204", "Keskustelu"),
                e("h7d5d9fa", "Beta"),
                e("ga169e1b", function (a) {
                    return "Yksityisviestit (" + a.count + " lukematta keskustelu" + n(a.count, "", "a") + ")";
                }),
                e("d83682ec", "Etusivu (uusia lukemattomia julkaisuja)"),
                e("e1249849", function (a) {
                    return "Ilmoitukset (" + a.count + " lukematta ilmoitus" + n(a.count, "", "ta") + ")";
                }),
                e("c0b786ee", "Hae ja selaa"),
                e("bb967f9e", "Videot"),
                e("e04033be", "Uusia julkaisuja on saatavana. Voit siirtyä niihin pistenäppäimellä."),
                e("hec711c0", "Näytä uusia julkaisuja"),
                e("j0a8da6e", "Lisää olemassa oleva tili"),
                e("c6f2bf00", "Hallitse tilejä"),
                e("a58e0e51", function (a) {
                    return "Kirjaa ulos @" + a.screenName;
                }),
                e("j62f43a6", "Näytä delegoidut tilit"),
                e("d4c52015", function (a) {
                    return a.count + " delegointitilin odottava" + n(a.count, " kutsu", "a kutsua");
                }),
                e("b8e1d524", "Tilit"),
                e("gef27c4c", "Tilivalikko"),
                e("b7dc3885", function (a) {
                    return "Vaihda tiliin @" + a.screenName;
                }),
                e("c61eea74", "Henkilökohtaiset tilit"),
                e("g6d42fea", "Kytke navigointi"),
                e("eb022176", "Luo tili"),
                e("gcfef7b6", "Luo tili käyttäen puhelinnumeroa tai sähköpostia"),
                e("e5b0e544", "Kirjaudu sisään"),
                e("gd93944e", "Käytä sovellusta"),
                e("f2f787a0", "käyttöehdot"),
                e("e1099fd6", "yksityisyyskäytännön"),
                e("c1df1ae0", "evästeiden käytön"),
                e("cdc1bff7", function (a) {
                    return "Profiilivalikko " + a.loggedInUserName;
                }),
                e("fd48249b", function (a) {
                    return a.count + " henkilöä";
                }),
                e("b93ba92d", function (a) {
                    return a.peopleCount + " " + n(a.peopleCount, "muu henkilö", "henkilöä");
                }),
                e("ae2205d2", "Seuraatte toisianne"),
                e("fd06b02f", function (a) {
                    return "@" + a.screenName + " on paraikaa aktiivisessa Huoneessa. Liity napsauttamalla profiilista";
                }),
                e("f2b3fe06", "Ladataan tuloksia"),
                e("fc9dd578", "Hae henkilöitä"),
                e("gdb7bc25", function (a) {
                    return a.name + " - valitse poistaaksesi";
                }),
                e("f065ba8c", "Hakulauseke"),
                e("hbc99b03", function (a) {
                    return "Siirry käyttäjään @" + a.screenName;
                }),
                e("a2c1b222", "Kokeile hakea henkilöitä, listoja tai hakusanoja"),
                e("f45c4250", "Tyhjennetäänkö kaikki viimeaikaiset haut?"),
                e("caae4dda", "Tätä ei voi kumota, ja olet poistamassa kaikki viimeaikaiset haut."),
                e("dbd5d400", "Tyhjennä"),
                e("a8d68f62", "Uusimmat"),
                e("c6530778", "Tallennetut haut"),
                e("e047b8fa", "Tyhjennä kaikki"),
                e("aa6e3300", "Näyttää siltä, ​​ettei sinulla ole verkkoyhteyttä. Tarkista yhteys ja yritä uudelleen."),
                e("e68b09b4", "Poista"),
                e("hffea05c", "Poistetaanko tallennettu haku?"),
                e("j037e374", "Tätä ei voi peruuttaa. Menetät tallennetun haun."),
                e("d96cf7ce", "Poista"),
                e("hbe4feb5", function (a) {
                    return "Seurauspyyntö on lähetetty käyttäjälle @" + a.screenName + ", ja se odottaa hyväksyntää.";
                }),
                e("df4c86b0", "Päivitä profiilisi ensin"),
                e("bba40ffa", "Et voi seurata tätä tiliä"),
                e("f558829e", "Seurataksesi tätä tiliä sinun on lisättävä syntymäaika profiiliisi. Näin vahvistat täyttäväsi ikävaatimuksen."),
                e("a6941096", "Tätä tiliä ei voi seurata maastasi."),
                e("if8cd2a4", "Et ole riittävän vanha seurataksesi tätä tiliä."),
                e("b5972260", "Jokin meni pieleen. Yritä peruuttaa käyttäjälle lähetetty seuraamispyyntö hetken kuluttua uudelleen."),
                e("j4292c24", "Sinua on tämän käyttäjän pyynnöstä estetty seuraamasta häntä."),
                e("a0ba5842", "Et voi seurata lisää henkilöitä juuri nyt."),
                e("a5202b82", "Jokin meni pieleen. Yritä seurata käyttäjää hetken kuluttua uudelleen."),
                e("f8cbf714", "Yrität seurata käyttäjää, jota ei ole olemassa."),
                e("f2e66452", "Tilisi on jäädytetty eikä sillä voi seurata käyttäjiä."),
                e("ca96fe6e", "Jokin meni pieleen. Yritä poistaa käyttäjän esto hetken kuluttua uudelleen."),
                e("e1a0aaca", "Jokin meni pieleen. Yritä lopettaa käyttäjän seuraaminen hetken kuluttua uudelleen."),
                e("fd5208c6", "Siirry asetuksiin"),
                e("c0d13570", "Affiliaatit"),
                e("ba96929e", "Töitä tarjolla"),
                e("gf62c116", "Tuki"),
                e("a4cf866e", "Mainonta"),
                e("g2fd3206", "Henkilöt"),
                e("h70bdf0a", "Radar"),
                e("bf6b72ac", "Full Access"),
                e("e49537c2", "Hmm... tätä sivua ei ole olemassa. Kokeile muulla haulla."),
                e("fcbb540a", "Siirtonopeuden raja-arvo ylittyi"),
                e("d4f88600", "Vahvista yhteystieto"),
                e("b192ccae", "Sinulla ei ole vahvistettua yhteydenottotapaa."),
                e("a0487504", "Voidaksesi pyytää tilin varmennusta sinun on ensin vahvistettava yhteydenottotapa."),
                e("fff7d93c", "Lisää kuva"),
                e("g969bfae", "Sinulla ei ole profiilikuvaa."),
                e("gb2f35e4", "Voidaksesi pyytää tilisi varmennusta sinun on ensin lisättävä profiilikuva."),
                e("i33cf692", "Lisää URL-kenttä"),
                e("b679ff6a", "Virheellinen URL"),
                e("i79902b4", "Valitse todennustapa"),
                e("fb2fcb5c", "Tämä vaihe auttaa meitä tarkistamaan henkilöllisyytesi. Valitse parhaiten itsellesi sopiva tapa."),
                e("e43425fa", "Virallinen henkilöllisyystodistus"),
                e("cb7c2e2e", "Valokuva virallisesta henkilöllisyystodistuksesta."),
                e("a411926a", "Virallinen sähköpostiosoite"),
                e("g253cdd0", "Virallinen sähköposti, jonka verkkotunnus on relevantti valitsemasi luokan kannalta."),
                e("cf93bcb0", "Virallinen sivustoreferenssi"),
                e("gfb55fa8", "Viranomaissivusto, jolla on suora viittaus X-tiliisi."),
                e("g40cd2c0", "Varmennettu referenssi"),
                e("a7f1cff6", "Lisää virallinen verkkosivureferenssi"),
                e("a11cd524", "Anna viranomaissivusto, jolla X-tilisi mainitaan ja joka liittyy varmennuspyyntöösi."),
                e("ba656f26", "Onko sivustolla viittaus X-tiliisi?"),
                e("ed751204", "Meidän on tarkistettava tilisi autenttisuus, ennen kuin voimme varmentaa sen. Jos käyttäjätunnustasi ei ole mainittu linkittämälläsi sivulla, sinun on lähetettävä muu todiste tilisi autenttisuudesta ennen pyynnön lähettämistä."),
                e("fbc023b0", "Kyllä"),
                e("e785ce06", "Käytän muuta varmennustapaa"),
                e("i8d58f3e", "Käytän virallista henkilötodistusta"),
                e("eb21ecaa", "Käytän sähköpostiosoitetta"),
                e("f848a69e", "Voidaksemme varmentaa sinut meidän on tarkistettava, että tilisi on aito. Jos käyttäjätunnustasi ei mainita ilmoittamallasi virallisella sivustolla, emme voi varmistaa tilisi aitoutta."),
                e("d59b5366", "Meidän on varmistuttava tilisi aitoudesta voidaksemme varmentaa sinut. Jos linkittämälläsi sivulla ei ole viittausta käyttäjätunnukseesi, emme voi olla varmoja, että tilisi kuuluu merkittävälle sisällöntuottajalle."),
                e("bfb01c62", "Ei, palaa takaisin"),
                e("fa51040a", "Anna linkki kriteerit täyttävän uutisorganisaation tai julkaisun viralliselle sivustolle, jolla viitataan sinuun ja X-tiliisi."),
                e("d0460f12", "Anna linkki, jossa viitataan tiliisi organisaatiosi virallisena X-tilinä. Viittauksen on oltava varmennetun tahon virallisella sivustolla."),
                e("h45b00d8", "Valitse tapa, jolla osoitat, että tilisi on aito ja sitä hallinnoi pyynnössä mainittu viihdealan yritys."),
                e("fc718708", "Kriteerit täyttävän organisaation virallinen sivusto, jolla viitataan sinuun ja X-tiliisi."),
                e("g32c2900", "Valitse tapa, jolla osoitat, että tilisi on aito ja sitä hallinnoi pyynnössä mainittu tuotanto-organisaatio."),
                e("j5b1224c", "Anna linkki, jossa viitataan tiliisi tuotantosi virallisena X-tilinä. Viittauksen on oltava varmennetun tahon virallisella sivustolla."),
                e("d090a5d4", "Varmennetun organisaation tai julkaisun virallinen sivusto, jolla viitataan X-tiliisi."),
                e("eb08a392", "Valitse tapa, jolla osoitat, että tilisi on aito ja sitä hallinnoi pyynnössä mainittu virkaan ehdolla oleva ehdokas."),
                e("h0de1396", "Anna linkki, jossa tiliisi viitataan tähän pyyntöön liittyvän virkaan ehdolla olevan ehdokkaan virallisena X-tilinä. Viittauksen on oltava varmennetun tahon virallisella sivustolla."),
                e("dcc23262", "Valitse tapa, jolla osoitat, että tilisi on aito ja sitä hallinnoi pyynnössä mainittu aktivisti tai organisaattori."),
                e("c880e068", "Kriteerit täyttävän vaikuttamisorganisaation virallinen sivusto, jolla viitataan sinuun ja X-tiliisi."),
                e("e412d500", "Anna linkki, jossa sinuun ja X-tiliisi viitataan varmennetun lobbausorganisaation johtotehtävissä toimivana henkilönä. Viittauksen on oltava varmennetun organisaation virallisella sivustolla."),
                e("dedf41f2", "Valitse tapa, jolla osoitat, että tilisi on aito ja sitä hallinnoi pyynnössä mainittu vaikutusvaltainen henkilö."),
                e("b4aed9e0", "Varmennetun organisaation virallinen sivusto, jolla viitataan X-tiliisi."),
                e("b2069e40", "Anna linkki, jossa sinuun ja X-tiliisi viitataan. Viittauksen on oltava varmennetun tahon virallisella sivustolla."),
                e("baf718c4", "Valitse tapa, jolla osoitat, että tilisi on aito ja sitä hallinnoi pyynnössä mainittu yritys, brändi tai organisaatio."),
                e("c65bbbc2", "Valitse tapa, jolla osoitat, että tilisi on aito ja sitä hallinnoi pyynnössä mainittu johtotehtävissä toimiva henkilö."),
                e("i31e3606", "Virallinen sähköpostiosoite, jonka domain-osa kuuluu kriteerit täyttävälle yritykselle, brändille tai organisaatiolle."),
                e("de70afe8", "Viittaus sinuun ja X-tiliisi kriteerit täyttävän organisaation virallisella sivustolla."),
                e("a3a523f2", "Anna linkki, jossa viitataan tiliisi yrityksesi virallisena X-tilinä. Viittauksen on oltava varmennetun tahon virallisella sivustolla."),
                e("jf58899a", "Anna linkki, jossa sinuun ja X-tiliisi viitataan organisaatiosi johtotehtävissä toimivana henkilönä. Viittauksen on oltava varmennetun tahon virallisella sivustolla."),
                e("f7afbaec", "Valitse tapa, jolla osoitat, että tilisi on aito ja sitä hallinnoi kriteerit täyttävän uutisorganisaation tai julkaisun palveluksessa toimiva journalisti."),
                e("d4ab0056", "Valitse tapa, jolla todistat tilisi olevan aito ja kuuluvan merkittävälle freelance-journalistille."),
                e("d2a77622", "Virallinen sähköpostiosoite, jonka domain-osa kuuluu kriteerit täyttävälle uutisorganisaatiolle tai julkaisulle."),
                e("eec341da", "Kriteerit täyttävän uutisorganisaation tai julkaisun virallinen sivusto, jolla viitataan X-tiliisi."),
                e("b03ae068", "Valitse tapa, jolla osoitat, että tilisi on aito ja sitä hallinnoi pyynnössä mainittu uutisorganisaatio tai julkaisu."),
                e("g0daba4a", "Valitse tapa osoittaa, että tilisi on aito ja sitä hallinnoi pyynnössä mainittu pelialan ammattilainen."),
                e("ab8e430c", "Anna linkki, jossa tiliisi viitataan tähän pyyntöön liittyvän pelialan henkilön virallisena X-tilinä. Viittauksen on oltava varmennetun tahon virallisella sivustolla."),
                e("cdcd9cd6", "Valitse tapa osoittaa, että tilisi on aito ja sitä hallinnoi pyynnössä mainittu ammattilaisurheilutaho."),
                e("gad25890", "Anna linkki, jossa tiliisi viitataan tähän pyyntöön liittyvän ammattilaisurheilutahon virallisena X-tilinä. Viittauksen on oltava varmennetun tahon virallisella sivustolla."),
                e("e6dc91b2", "Valitse tapa osoittaa, että tilisi on aito ja sitä hallinnoi pyynnössä mainittu ammattilaisurheilun henkilö."),
                e("i9aed706", "Anna linkki, jossa tiliisi viitataan tähän pyyntöön liittyvän ammattilaisurheilun henkilön virallisena X-tilinä. Viittauksen on oltava varmennetun tahon virallisella sivustolla."),
                e("abd587d2", "Lisää muu lähde"),
                e("i0bba81a", "Lisää työsuhdereferenssi"),
                e("a6a76e3c", "Valitse merkittävyyden osoitustapa"),
                e("ecd2abda", "Vahvista, että tili täyttää kriteerit"),
                e("cb70b894", "Palaa takaisin"),
                e("g8b511fe", "Google Trends"),
                e("c7d50c96", "Profiili Google Trendsissä ja näyttöä sinua koskevasta tuoreesta hakuhistoriasta."),
                e("a68b43ee", "Lisää Google Trends -profiili"),
                e("b5e30390", "Google Trends -profiili"),
                e("h146703e", "Wikipedia-artikkeli"),
                e("ee38d0f0", "Wikipedia-artikkeli sinusta; sen on täytettävä Wikipedian henkilön merkittävyyttä koskevat standardit."),
                e("cb97ee3e", "Lisää Wikipedia-artikkeli"),
                e("hc371f34", "Uutisraportointi"),
                e("b9d0ad90", "Vähintään kolme linkkiä arvostetuille uutissivustoille, jotka ovat kirjoittaneet sinusta tai viitanneet sinuun viimeisten kuuden kuukauden aikana."),
                e("ge137dce", "Vähintään kolme uskottavissa uutisjulkaisuissa julkaistua artikkelia sinusta viimeisten kuuden kuukauden ajalta."),
                e("h2b9a5fe", "Vähintään kolme uskottavissa uutisjulkaisuissa julkaistua artikkelia yrityksestäsi viimeisten kuuden kuukauden ajalta."),
                e("baccb708", "Lisää varmennettu uutisjuttu"),
                e("feadd98c", "Lisää vahvistettuja uutisreferenssejä"),
                e("j7ae97aa", "Vahvistetut uutisreferenssit"),
                e("c368aa8e", "Vähintään kolme varmennettujen uutisjulkaisujen artikkelia, joissa sinuun viitataan."),
                e("ded0edad", function (a) {
                    return "Artikkeli #" + a.n;
                }),
                e("bebae55a", "Pörssi"),
                e("c5571610", "Linkki näytöksi läsnäolosta pörssissä."),
                e("e2d42628", "Pörssireferenssi"),
                e("jc19b4e8", "Pörssilistaus"),
                e("fc3ee696", "Referenssi johtajarooliin"),
                e("i3e65eb4", "Sinuun johtajaroolissa viittaavan varmennetun organisaation virallinen tili."),
                e("jd014eba", "Annettu URL vie suoraan sivulle, jossa hakija mainitaan."),
                e("a96901cc", "Lisää referenssi johtajarooliin"),
                e("cc424a22", "Lobbausviittaus"),
                e("ibfc1a5a", "Et vielä täytä tilin varmennuskriteerejä tässä luokassa."),
                e("e1c78796", "Viranomaissivusto"),
                e("ff2ee0c2", "Aktivismi"),
                e("hc61adfc", "Viihde"),
                e("e404203c", "Pelaaminen"),
                e("d2042392", "Valtionhallinto"),
                e("c365dcc6", "Muuta"),
                e("d27beb9e", "Urheilu"),
                e("cc4b66b6", "Valitse luokka"),
                e("b37461a4", "Valitse tilin tyyppi"),
                e("b27325f6", "Sisällöntuottaja"),
                e("a5a6affc", "Vaikutusvaltaiset digitaaliset sisällöntuottajat, jotka julkaisevat säännöllisesti omaa suosittua verkkosisältöään."),
                e("a15326de", "Vähintään kolme kriteerit täyttävien uutisjulkaisujen artikkelia, joissa sinuun viitataan."),
                e("g704a93a", "Virallinen sivusto, joka liittyy sellaiseen tunnettuun lobbaustyöhön, jossa sinut mainitaan johtavassa roolissa."),
                e("c6bd60ec", "Aktivisti tai organisaattori"),
                e("c92fdb06", "Merkittävät henkilöt, jotka käyttävät X:ää sosioekonomisen, poliittisen tai kulttuurisen muutoksen välineenä."),
                e("a18c6dfc", "Journalisti"),
                e("h0b46534", "Varmennetun uutisorganisaation tai julkaisun palveluksessa toimivat journalistit."),
                e("ff929fec", "Huomattava organisaatio tai sen tytäryhtiö"),
                e("jf537894", "Huomattavat organisaatiot ja niille kuuluvat tilit, kuten yritysten, brändien tai voittoa tavoittelemattomien organisaatioiden tilit."),
                e("d2ea204a", "Muu vaikutusvaltainen henkilö"),
                e("f875ec6e", "Merkittävän presenssin X:ssä tai sen ulkopuolella omaavat henkilöt, jotka eivät sovi muihin luokkiin."),
                e("i3e6aaa6", "Yritysjohtaja"),
                e("bbcbb9e6", "Merkittävien yritysten, brändien tai voittoa tavoittelemattomien järjestöjen huomattavissa johtotehtävissä toimivat."),
                e("j0bc23f4", "Olen vahvistanut, että organisaationi tili on jo varmennettu."),
                e("aa6228de", "Viihdeyritys"),
                e("d5b3cbca", "Merkittävät viihdeyritykset, kuten TV-yhtiöt, elokuvastudiot ja levymerkit."),
                e("b5a3e590", "Viihdealan henkilö"),
                e("e484f794", "Viihdealan vaikuttajat, kuten näyttelijät, muusikot, ohjaajat, käsikirjoittajat, koomikot ym."),
                e("b8d8ea64", "Tuotanto-organisaatio"),
                e("ff27db3c", "Viihdekokonaisuuksiin kuten elokuviin, tapahtumiin/festivaaleihin, TV-ohjelmiin tai vastaaviin liittyvien produktioiden viralliset sivut."),
                e("c0e57cb2", "Lisää sisällöntuottajaprofiilisi"),
                e("f3c605b6", "Kirjoittajaprofiili"),
                e("h042d1a6", "IMDB-profiili"),
                e("d2310f0c", "IMDB-profiili, jossa on ainakin 50 tuotantomeriittiä."),
                e("ba04b4c2", "Lisää IMDB-profiili"),
                e("i9b124b6", "Valtionhallinnon viranhaltija"),
                e("f84a99ee", "Keskeiset valtionhallinnon viranhaltijat, kuten valtionpäämiehet, (osavaltion tai valtion) vaalilla valitut virkamiehet, ministerit ja suurlähettiläät."),
                e("j2cb5f50", "Ehdokas virkaan"),
                e("j2472894", "Viralliset ehdokkaat osavaltion tai valtion virkaan."),
                e("ha44c130", "Valtionhallinnon virasto tai julkinen palvelu"),
                e("j8ae9d40", "Valtionhallinnon keskeiset virat ja viranomaistahot sekä julkiset huoltolaitokset ja palvelut."),
                e("ef1d6176", "Oletko ehdolla osavaltion tai valtion virkaan?"),
                e("f54ba6e6", "Sinun on oltava paraikaa ehdolla osavaltion tai valtion virkaan, jotta tilisi voidaan varmentaa tässä luokassa."),
                e("dd85d0a0", "Oletko osavaltion tai valtion viranhaltija?"),
                e("f0058c60", "Sinun on oltava paraikaa osavaltion tai valtion viranhaltija, jotta tilisi voidaan varmentaa tässä luokassa."),
                e("f420a712", "Kyllä olen"),
                e("fb97d22c", "En ole"),
                e("e16b1cc8", "Täyttääkö profiilisi ehdokkaalta vaaditut kriteerit?"),
                e("cf2ee92e", "Virkaan ehdolla olevilla on oltava julkinen tili, jossa kerrotaan, mihin virkaan henkilö on ehdolla. Tililtä on myös oltava linkki ehdokkaan viralliselle kampanjasivustolle."),
                e("g544885e", "Täyttääkö profiilisi valtionhallinnon viran tai viranomaistahon kriteerit?"),
                e("bd0b4542", "Valtionhallinnon viroilla ja viranomaistahoilla on oltava julkinen tili, josta on linkki näiden viralliselle sivustolle."),
                e("i45b224c", "Täyttääkö profiilisi viranhaltijalta vaaditut kriteerit?"),
                e("fba1dd66", "Valtionhallinnon viranhaltijoilla on oltava julkinen tili, joka ilmoittaa henkilön nykyisen viran. Tililtä on oltava linkki kyseisen viranhaltijan viralliselle sivustolle."),
                e("e95c44de", "Kyllä, valmista on"),
                e("fa5e15e2", "Haluan päivittää tietoja"),
                e("jdf47e8e", "Kampanjasivusto"),
                e("eeec7316", "Lisää kampanjasivusto"),
                e("b163b654", "Viranomaisreferenssi"),
                e("d2378d34", "Lisää viranomaisreferenssi"),
                e("a05b8446", "Freelance-journalisti"),
                e("hdad12b2", "Riippumattomat freelance-journalistit, joilta on julkaistu merkittäviä artikkeleita varmennetuissa julkaisuissa."),
                e("d2d7af4c", "Uutisorganisaatio tai -julkaisu"),
                e("d83e51dc", "Painetut ja digitaaliset julkaisut; perinteiset, kaapeli- tai satelliittiyhteydellä tai suoratoistona toteutetut TV- ja radioasemat ja ohjelmat; podcastit ja muu vastaava media."),
                e("g708cbdc", "Täyttääkö profiilisi varmennetun tilin vaatimukset?"),
                e("b107ee5c", "Uutisorganisaatioilla on oltava julkinen tili, jossa on linkki viralliselle sivustolle."),
                e("e8746826", "Olen vahvistanut, että työnantajani tili on jo varmennettu."),
                e("jc09b420", "Täyttääkö profiilisi journalisteilta vaaditut kriteerit?"),
                e("gfbd7e58", "Journalistin tilin on oltava julkinen, ja sen yhteydessä on ilmoitettava työllistävän varmennetun uutisorganisaation nimi ja annettava linkki työnantajan viralliselle sivustolle."),
                e("h0ad4c9e", "Virallisen uutisorganisaation referenssi(t)"),
                e("a6553b50", "Kriteerit täyttävän uutisjulkaisun tai -organisaation virallinen sivusto, jossa mainitaan sinut toimittajana."),
                e("a29b2988", "Artikkelin tekijätiedot"),
                e("ab4eae60", "Ilmoita vähintään kolme artikkelia, joita ehdot täyttävät julkaisut ovat julkaisseet viimeisten kuuden kuukauden aikana."),
                e("b3fac982", "Antamani URL vie suoraan sivulle, jossa minut mainitaan toimittajana."),
                e("e26dc9e2", "Lisää merkittävä artikkeli (tai työ)"),
                e("e164df2e", "Täyttävätkö linkittämäsi artikkelit merkittävyyskriteerimme?"),
                e("i80ff05e", "Vain varmennettujen uutisorganisaatioiden julkaisemat tai varmennetuissa julkaisuissa julkaistut artikkelit hyväksytään näytöksi."),
                e("cf7482ec", "Kyllä"),
                e("fcb96cfc", "Ammattilaisurheilun henkilö"),
                e("ddc7d64a", "Ammattilaisurheilijat, valmentajat ja managerit sekä muut kansainvälisiin kilpailuihin (kuten olympialaisiin, paralympialaisiin) osallistuvat urheilijat."),
                e("c4e0d346", "Ammattilaisurheilutaho"),
                e("e3ce81fa", "Ammattilaisurheiluliigat, -joukkueet ja kansainväliset kilpailut (kuten olympialaiset, paralympialaiset)."),
                e("b2808f48", "Pelialan henkilö"),
                e("db7b3558", "Yksittäiset tilit tai esports-urheilijat, joilla on sidos varmennettuun joukkueeseen tai liigaan."),
                e("bbd9a912", "Olen varmistanut, että tiliini liittyvä joukkue, liiga, tapahtuma tai organisaatio on jo varmennettu."),
                e("he9c5638", "Linkki kansainvälisen kilpailun tai urheiluorganisaation viralliselle sivustolle, jossa viitataan sinuun."),
                e("bf06e1d6", "Ammattilaisurheiluorganisaation virallinen sivusto, jolla viitataan sinuun ammattilaisurheilijana, managerina tai valmentajana."),
                e("e241d35e", "Vähintään kolme varmennettujen uutisorganisaatioiden tai -julkaisujen artikkelia, joissa sinuun viitataan ammattilaisurheilijana, managerina tai valmentajana."),
                e("ad456030", "Vähintään kolme varmennettujen uutisorganisaatioiden tai -julkaisujen artikkelia, joissa sinuun viitataan pelialan henkilönä."),
                e("hbe2e65c", "Varmennetun esports-liigan tai -tapahtuman virallinen sivusto, jolla sinuun viitataan pelialan henkilönä."),
                e("j3da4dea", "Et voi pyytää varmennusta juuri nyt"),
                e("af39265e", "Yritykset, brändit ja organisaatiot"),
                e("bb51cd7a", "Urheilu ja peliala"),
                e("c044a571", "Lue lisää"),
                e("a58cd1fb", "Lue lisää"),
                e("b47b0fd1", "Lue lisää"),
                e("db25263b", "Lue lisää"),
                e("b25b02c3", "Lue lisää"),
                e("j6ef6afb", "Lue lisää"),
                e("d42d162b", "Lue lisää"),
                e("ccadfc85", "Lue lisää"),
                e("ddb47f57", "Lue lisää"),
                e("bf9e181b", "Lue lisää"),
                e("e8e39f95", "Lue lisää"),
                e("e126dd3f", "Lue lisää"),
                e("i821844f", "Lue lisää"),
                e("b0abbb17", "Lue lisää"),
                e("e7e0d88b", "Lue lisää"),
                e("i560665f", "Lue lisää"),
                e("f6e774d9", "Lue lisää");
            e("h486f755", "Lue lisää"),
                e("bab41dab", "Lue lisää"),
                e("e0ebdb29", "Lue lisää"),
                e("f8493831", "Lue lisää"),
                e("icb5913f", "Lue lisää"),
                e("af819833", "Lue lisää"),
                e("d35525b1", "Lue lisää"),
                e("cb181ed1", "Lue lisää"),
                e("f6c3d3f1", "Lue lisää"),
                e("d4588ded", "Lue lisää"),
                e("a759bff9", "Lue lisää"),
                e("c64a59f7", "Lue lisää"),
                e("c054f433", "Lue lisää"),
                e("c1b7ad51", "Lue lisää"),
                e("f7998565", "Lue lisää"),
                e("c74a47ef", "Lue lisää"),
                e("gf9899bf", "Lue lisää"),
                e("d7a9185d", "Lue lisää"),
                e("c4b205e1", "Lue lisää"),
                e("c04b4b1d", "Lue lisää"),
                e("d26ccc67", "Lue lisää"),
                e("hdb3bc85", "Lue lisää"),
                e("b6cb494f", "Lue lisää"),
                e("abc132eb", "Lue lisää"),
                e("de1b28ad", "Lue lisää"),
                e("h04c272d", "Lue lisää"),
                e("j331c659", "Lue lisää"),
                e("h02fe64f", "Lue lisää"),
                e("a7df4b85", "Lue lisää"),
                e("e9b71903", "Lue lisää"),
                e("g961011f", "Lue lisää"),
                e("d5dedb7b", "Lue lisää"),
                e("gd396551", "Lue lisää"),
                e("dccc08bf", "Lue lisää"),
                e("f22a6d0d", "Lue lisää"),
                e("i78c9fd5", "Lue lisää"),
                e("f3e333a9", "Lue lisää"),
                e("i5fee6d3", "Lue lisää"),
                e("fe7420f5", "Lue lisää"),
                e("fcfad60d", "Lue lisää"),
                e("cc35a6b9", "Lue lisää"),
                e("d9bd3823", "Lue lisää"),
                e("a67f27bd", "Lue lisää"),
                e("b8be7adb", "Lue lisää"),
                e("gd663f41", "Lue lisää"),
                e("b436b101", "Lue lisää"),
                e("j97bce4a", "X-käyttäjätunnus"),
                e("acd5ca14", "Yritä uudelleen. Käyttäjätunnuksissa ei ole erityismerkkejä kuten @, $ tai #."),
                e("bbef41c2", "Tarkista virallinen sähköpostiosoite, joka on liitetty X-varmennuspyyntöösi."),
                e("be03ecca", "Sähköpostiosoite"),
                e("c69a40de", "Tililläsi ei ole varmennettua sähköpostiosoitetta."),
                e("c83a1662", "Tilillesi ei ole vahvistettu vaatimukset täyttävää sähköpostiosoitetta."),
                e("e1e878ee", "Asetuksista"),
                e("b9635182", "Asetuksista"),
                e("j163be32", "Aloita pyyntö"),
                e("gaf821c8", "Varmennuspyyntö"),
                e("e1ac0f9b", "Lue lisää"),
                e("h2d4ba56", "Tarkistamme henkilöllisyystodistustasi..."),
                e("i2051842", "Tarkistamme, että henkilöllisyystodistuksesi on vaatimusten mukainen. Tähän menee enintään 30 sekuntia."),
                e("fc2a5c92", "Jokin meni pieleen"),
                e("jf4b6f70", "Henkilöllisyystodistuksesi lataamisessa palveluun oli ongelmia. Yritä uudelleen."),
                e("d338f53e", "Yritä uudelleen"),
                e("e43672a0", "Tarvitsemme tietoja virallisesta henkilöllisyystodistuksestasi."),
                e("b246aa5e", "Asiakirjan myöntänyt maa"),
                e("d6fb5878", "Valitse maa"),
                e("b72f97cc", "Asiakirjan tyyppi"),
                e("b2ab6008", "Valitse asiakirjatyyppi"),
                e("h9270b1c", "Hae maa"),
                e("ff1d68f8", "Lataa kuva henkilöllisyystodistuksestasi"),
                e("bdada5a6", "Etupuoli"),
                e("edfed0f6", "Lataa asiakirjan etupuoli"),
                e("def5015d", function (a) {
                    return "Takaisin" + a.back_of_document;
                }),
                e("b09aade6", "Lataa asiakirjan taustapuoli"),
                e("b40ed190", "Asiakirja"),
                e("c6650b56", "Lataa asiakirja"),
                e("d171ed16", "Luotetut kumppanimme auttavat meitä. He tarkistavat henkilöllisyystodistuksesi aitouden ja antavat meille sitä koskevat suppeat tiedot ja alustan, jonka avulla arvioimme kelpoisuuttasi varmennetun tilin haltijaksi."),
                e("d20f76cb", "Lue lisää"),
                e("b8deb156", "yksityisyyskäytännön"),
                e("b9960f32", "Lisää kuvia tai video"),
                e("gd80afba", "Muokkaa mediaa"),
                e("j322caee", "Merkitse arkaluonteinen mediasisältö"),
                e("abd845fe", "Muokkaa"),
                e("df1b0708", "Toista tämä GIF"),
                e("cd959e5c", "Poista media"),
                e("add55c98", "Media"),
                e("f350cf46", "Vedä ja pudota mediaa"),
                e("gff1f69e", "Ladataan kuvaa"),
                e("a91bb144", "Lähetä"),
                e("affce770", "Me ja luotetut kolmannet osapuolet selvitämme tiliisi liittyvien tietojen ja meille antamiesi lisätietojen avulla, oletko se henkilö joka ilmoitat olevasi sekä täyttyvätkö varmennettavien tilien kriteerit kohdallasi."),
                e("i0864918", "Luokka"),
                e("c7942074", "Tilin tyyppi"),
                e("b8121daa", "Henkilön merkittävyydestä kertovat viitteet"),
                e("d247ca70", "Tarkista varmennuspyyntösi tiedot alta. Kun olet tarkistanut ne, klikkaa lähetä."),
                e("b51afbb2", "Todennustapa"),
                e("cc87b01c", "Tarkista ja lähetä"),
                e("ec6801cc", "Pyyntösi on lähetetty!"),
                e("i6ef95ec", "kysely"),
                e("j94e995e", "Edellinen pyyntösi evättiin. Sinun on odotettava hylkäyksestä 30 päivää ennen uuden pyynnön lähettämistä."),
                e("da458d6c", "Olet lähettänyt varmennuspyynnön, joka on hylätty viimeisten 30 päivän aikana. Yritä uudelleen."),
                e("j4ed9f0e", "Olet lähettänyt varmennuspyynnön ja sinuun ollaan yhteydessä heti, kun päätös on tehty."),
                e("b1ade780", "Tilisi on liian uusi. Odota, kunnes tilisi on vähintään 7 päivän ikäinen, ja yritä sitten uudelleen."),
                e("aab67626", "Varmennuspyyntöäsi käsitellään"),
                e("d3c1e25e", "Et nähnyt unta. Tilisi on todella varmennettu."),
                e("a8b4500e", "sääntöjä"),
                e("ef1b5cbc", "Valitse, mitä ilmoituksia haluat nähdä ja mitä et."),
                e("aaafffda", "Hiljennetyt ilmoitukset"),
                e("afdf29b8", "Laatusuodatin"),
                e("da19d878", "Suodata sisällöstä pois esimerkiksi identtiset tai automatisoidut julkaisut. Tämä ei koske ilmoituksia tileiltä, joita seuraat tai joiden kanssa olet vastikään ollut tekemisissä."),
                e("i2209530", "Tallenna"),
                e("da867c58", "Valitse haluamasi asetukset ilmoitustyypeittäin."),
                e("a2197726", "Hallitse tilisi tietoturvaa."),
                e("i36dcc3e", "Auttaa suojaamaan tiliäsi luvattomalta käytöltä vaatimalla toinen varmennustapa X-salasanan lisäksi. Voit valita tekstiviestin, varmennesovelluksen tai suojausavaimen."),
                e("ead60eb8", "Salasanan lisäsuojaus"),
                e("gfaf9a4a", "Salasanan nollauksen suojaus"),
                e("h3cc8462", "Suojauksen parantamiseksi sinun on vahvistettava sähköpostiosoitteesi tai puhelinnumerosi, jotta voit vaihtaa X-salasanasi."),
                e("b4bbdeb4", "Todentamisavain"),
                e("aeb7dcdc", "Salli lisäsuojaksi todentamisavaimet, joita voidaan linkittää biometriseen tunnisteeseesi."),
                e("dc096238", "Lataa henkilöllisyystodistus vahvistaaksesi tilisi aitouden. Tietojasi käytetään vain henkilöllisyytesi todentamiseen, ja niitä käsitellään tietoturvallisesti."),
                e("a999cb72", "Tallenna tilin muutokset"),
                e("dec3c9b8", "Salasana"),
                e("b929aa74", "Kirjoita X-salasanasi uudelleen tallentaaksesi tilisi muutokset."),
                e("d1091f50", "Unohditko salasanasi?"),
                e("d97c07be", "Hallitse sisällöntuottajien tilauksia"),
                e("efa291da", "Tarkastele ja hallitse alla olevia sisällöntuottajien tilauksia Stripessä. Aktiivisia tilauksia, jotka olet käynnistänyt iOS- tai Android-laitteella, voit hallita sovelluksessa."),
                e("j7f5c6aa", "Sinulla ei vielä ole Tilauksia"),
                e("ef4602ec", "Jokin meni pieleen. Yritä myöhemmin uudelleen."),
                e("b02df748", "Hallitse tilisi tietoturvaa ja pysy ajan tasalla tilisi käytöstä sekä siihen yhdistämistäsi sovelluksista."),
                e("g2841de4", "Tarkista tiedot siitä, milloin kirjauduit sisään tilillesi ja sovelluksiin, jotka on yhdistetty tiliisi."),
                e("hf45cca6", "Hallitse X:ään kirjautumista varten liitettyjä Google- tai Apple-tilejä."),
                e("a310511c", "Hallitse jaettuja tilejäsi."),
                e("jc02ae68", "Yhdistetyt sovellukset"),
                e("dd82312a", "Istunnot"),
                e("e5e8a89a", "Ladataan sovelluksia"),
                e("hfa9a2c8", "Hallitse yhdistettyjä tilejä vaivatta"),
                e("dd1b86f9", function (a) {
                    return "sovelluksen tarjoaa " + a.name;
                }),
                e("cf461930", "Täällä näet kolmansien osapuolten sovellukset, joille olet myöntänyt käyttöoikeuden X-tiliisi."),
                e("b63b0b1d", "Lue lisää"),
                e("c2cb5560", "Nykyinen istunto"),
                e("bca43fd0", "Päätä muut istunnot"),
                e("ha6df2ca", "Istunnot ovat laitteita, joilla käytät tai olet käyttänyt X-tiliäsi. Nämä ovat istuntoja, joissa tilisi on paraikaa kirjautuneena. Voit kirjautua ulos kustakin istunnosta."),
                e("b72d2904", "Olet kirjautunut tälle X-tilille tällä laitteella, jota paraikaa käytät."),
                e("b850cbd0", "Olet kirjautunut näille tileille näillä laitteilla, joita et juuri nyt käytä. "),
                e("cf3e3164", "Päätä kaikki muut istunnot"),
                e("f810f27a", "Haluatko päättää muut istuntosi?"),
                e("gbb5cec5", function (a) {
                    return "Uloskirjautuminen päättää " + a.num + " muuta käynnissä olevaa X-istuntoasi. Se ei vaikuta tähän istuntoon.";
                }),
                e("fcbd4904", "Tämä päättää aktiivisen X-istuntosi."),
                e("ab78d946", "Olet päättämässä muut käynnissä olevat X-istuntosi. Kun haluat aloittaa uuden istunnon, sinun on kirjauduttava noilla laitteilla uudelleen sisään."),
                e("e186a3d6", function (a) {
                    return "" + a.learnMoreLabel;
                }),
                e("ed5ab16a", "Aktiivinen nyt"),
                e("c9bc33fa", "Laitteet"),
                e("f95ed3e6", "Nykyinen laite"),
                e("a787669a", "Muun laitteen rekisteröinnit"),
                e("gbefe730", "Seuraavat laitteet on myös rekisteröity tilillesi salattuja yksityisviestejä varten."),
                e("d7a9796e", "Ladataan laitteita"),
                e("b5635e86", "Rekisteröi tämä laite"),
                e("bb4a95dc", "Rekisteröidäänkö laite?"),
                e("a9538040", "Tämän laitteen rekisteröimällä voit aloittaa uusia salattuja keskusteluja muiden rekisteröityjen käyttäjien kanssa"),
                e("hd173c7a", "Rekisteröi"),
                e("hf4312a4", "Laite on rekisteröity."),
                e("h7797d18", "Rekisteröity"),
                e("hc48a042", "Poista laitteen rekisteröinti"),
                e("d5bafb20", "Poistetaanko tämän laitteen rekisteröinti?"),
                e("i12dee70", "Jos poistat laitteen rekisteröinnin, et pääse sillä enää salattuihin viesteihin."),
                e("d4b9db26", "Poista rekisteröinti"),
                e("c18b1b34", "Rekisteröinnin päivämäärä ja aika"),
                e("e7c9d60a", "Valitun laitteen rekisteröinti on poistettu."),
                e("cd14c8fe", "Ladataan laitetietoja"),
                e("j9db22f4", "Emme löydä tätä laitetta"),
                e("c477d710", "Hallitse, mitä tietoja näet ja jaat X:ssä."),
                e("b06f5d36", "Aktiivisuutesi X:ssä"),
                e("fd807e78", "Yleisö, media ja merkitseminen"),
                e("a9ff473c", "Hallitse, mitä tietoja sallit muiden ihmisten nähdä X:ssä."),
                e("d0484606", "Hallitse julkaisuihisi liitettyjä tietoja."),
                e("c4afe0e6", "Päätä, mitä näet X:ssä käyttämällä Aiheita ja kiinnostuksen kohteita"),
                e("ab125232", "Hallitse tilejä, sanoja ja ilmoituksia, jotka olet hiljentänyt tai estänyt."),
                e("cc950d94", "Hallitse, kuka voi lähettää sinulle yksityisviestejä."),
                e("fe37f854", "Määritä, kuka näkee Huoneiden kuuntelusi"),
                e("ab987f3c", "Hallitse löydettävyysasetuksiasi ja tuomiasi yhteystietoja."),
                e("db5fabb0", "Datan jakaminen ja toiminta X:n ulkopuolella"),
                e("i83cab8a", "Datan jakaminen ja personointi"),
                e("e338a794", "Hallitse mainontakokemustasi X:ssä."),
                e("c05e8024", "Hallitse eväskokemustasi X:ssä."),
                e("d29d59d0", "Hallitse, miten X käyttää verkkotoimintaasi X:n ulkopuolella, kuten käyttämiäsi verkkosivustoja, käyttäjäkokemuksesi personointiin."),
                e("c981a36c", "Anna X:n personoida käyttäjäkokemustasi tekemällä päätelmiä toimistasi, esimerkiksi toimista laitteilla, joilla et ole kirjautunut X:ään."),
                e("eb0cc786", "Salli lisätietojen jakaminen X:n liikekumppaneille."),
                e("dd533318", "Hallitse sijaintitietoja, joita X käyttää käyttäjäkokemuksesi personointiin."),
                e("bd0646a0", "Lue lisää tietosuojasta X:ssä"),
                e("a607862a", "Yksityisyyskäytäntö"),
                e("g5925628", "Ota yhteyttä"),
                e("dd6012f8", "Tietosuojakeskus"),
                e("jdceda60", "Vastaukset"),
                e("f644b748", "Määritä, ketkä voivat vastata julkaisuihisi ja suodatettuihin vastauksiisi."),
                e("ff4b3818", "Grok ja kolmansien osapuolten yhteistyökumppanit"),
                e("i586f3e0", "Salli julkisten tietojesi sekä Grokin ja xAI:n kanssa käytyjen keskustelujen, syötteiden ja tulosten käyttö koulutukseen ja hienosäätöön"),
                e("d8492604", "Kun tämä on valittu, julkaisusi ja muut tilitietosi näkyvät vain sinua seuraaville."),
                e("if050fae", "Suojaa videoitasi"),
                e("b7ed5f6e", "Jos tämä on valittu, julkaisuihisi sisältyvät videot eivät oletusarvoisesti ole ladattavissa. Tämä asetus pätee julkaisuihin tästä eteenpäin, ei takautuvasti."),
                e("dbb51952", "Suojataanko julkaisusi?"),
                e("de735de6", "Tämä saa ne näkymään vain X-seuraajillesi."),
                e("c5d4192a", "Suojaa"),
                e("d9ddba70", "Yhteisöt ovat julkisia, joten suojaamalla tilisi piilotat aiemmat julkaisusi. Et myöskään voit julkaista Yhteisössä, ennen kuin tilisi on jälleen julkinen."),
                e("f527b322", "Suojaa tilini"),
                e("d165c992", "Kuka tahansa voi merkitä sinut"),
                e("ea339390", "Vain seuraamasi henkilöt voivat merkitä sinut"),
                e("e3a761ee", "Pois käytöstä"),
                e("a61ed23a", "Merkitse julkaisemasi mediasisältö mahdollisesti arkaluonteiseksi aineistoksi"),
                e("ae27c454", "Kun tämä on käytössä, julkaisemasi kuvat ja videot merkitään arkaluonteisiksi niitä käyttäjiä varten, jotka eivät halua nähdä arkaluonteista sisältöä."),
                e("fc1d217c", "Näytä nekin mediat, joiden sisältö voi olla arkaluonteista"),
                e("j018f2a2", "Selaa asetuksia"),
                e("h1ef00dc", "Hakuasetukset"),
                e("b05b9398", "Kun tämä asetus on valittu, X voi personoida Sinulle-aikajanan sisältöä sen perusteella, mitä olet aiemmin X:ssä tehnyt. "),
                e("a3c1324c", "Näytä Sinulle-aikajanalla ehdotuksia"),
                e("ee4592ca", "Ei keneltäkään"),
                e("da813d22", "Varmennetuilta käyttäjiltä"),
                e("baffe39a", "Kaikki"),
                e("b3d8566e", "Suodata heikkolaatuiset viestit"),
                e("cfda8c44", "Piilota viestipyynnöt, jotka ovat kenties roskapostia tai laadultaan heikkoja. Nämä ohjataan erilliseen kansioon saapuneiden viestipyyntöjen loppuun. Voit silti halutessasi avata ne."),
                e("f4c91f40", "Salli viestit tilaajiltani"),
                e("bf0c4336", "Tilaajasi voivat aina lähettää sinulle viestejä riippumatta muista viestiasetuksistasi."),
                e("e6c411d8", "Suodata sopimaton mediasisältö"),
                e("g558101a", "Näytä varoitus, kun viestin mediasisältö on mahdollisesti työpaikalle sopimatonta (kuten alastomuutta, seksuaalista sisältöä tai väkivaltaa). Voit silti halutessasi katsoa mediasisällön."),
                e("d9172542", "Näytä lukukuittaukset"),
                e("bd557506", "Anna viestittelyn toisen osapuolen tietää, kun olet nähnyt viestit. Viestipyynnöistä ei näytetä lukukuittauksia."),
                e("f29080d0", "Salli viestipyynnöt:"),
                e("j0adcc2d", "Lue lisää"),
                e("ib3357a6", "Personoi mainontaa"),
                e("f2f9628e", "Näet X:ssä aina mainoksia, jotka perustuvat toimiisi X:ssä. Kun tämä asetus on valittuna, X voi personoida X:n mainostajien mainoksia alustalla ja sen ulkopuolella myös yhdistelemällä X-toimintaasi, muuta toimintaasi verkossa ja kumppaneiltamme saatuja tietoja."),
                e("b5fe50fc", "Mainosluokat"),
                e("c31a2ea6", "Sallimalla asetuksen voit nähdä mainoksia näissä mainosluokissa. Jättämällä kohdan valitsematta näet vähemmän mainoksia näistä luokista."),
                e("if996630", "Uhkapelit"),
                e("a9ed7774", "Salli käyttää tietoa siitä, missä näet X-sisältöä verkossa"),
                e("e2d61838", "Tämän asetuksen avulla X seuraa käyntejäsi muilla sivustoilla, joihin on integroitu X:n sisältöä, kuten upotettuja aikajanoja. Näitä tietoja käyttämällä teemme X:stä sinulle mukavamman personoimalla käyttökokemuksestasi. Tätä selaushistoriaa ei koskaan tallenneta yhdessä nimesi, sähköpostiosoitteesi tai puhelinnumerosi kanssa."),
                e("c966aaf4", "Näitä verkkosivukäyntejä ei tallenneta tai käytetä silloin, kun olet tietyissä maissa."),
                e("e8313b32", "Oletko varma? Jos poistat tämän asetuksen käytöstä, et voi enää ottaa sitä käyttöön ollessasi tässä maassa."),
                e("f1d46fd6", "Kyllä, olen varma"),
                e("f6c8ccc8", "Personoi päätellyn henkilöllisyytesi perusteella"),
                e("ed012c88", "X personoi käyttäjäkokemustasi antamiesi tietojen perusteella sekä niiden laitteiden perusteella, joilla olet kirjautunut sisään. Kun tämä asetus on käytössä, X voi personoida käyttäjäkokemustasi muidenkin identiteetistäsi saatujen vihjeiden perusteella käyttäen myös laitteita ja selaimia, joilla et ole kirjautunut X:ään, sekä sähköpostiosoitteita ja puhelinnumeroita, jotka vastaavat X-tiliisi liitettyjä tietoja."),
                e("d3c20d80", "Salli muidenkin tietojen jakaminen liikekumppaneille"),
                e("f1c0d09c", "X jakaa tietoja liikekumppaneilleen tuotteiden toiminnan mahdollistamiseksi ja niitä kehittääkseen. Kun tämä on valittuna, X saa jakaa muitakin tietoja näille kumppaneille X:n liiketoiminnan tukemiseksi. Tähän lukeutuu se, että X:n markkinoinnista tehdään sinulle relevantimpaa muilla sivustoilla ja sovelluksissa."),
                e("dc20d918", "Personoi sen perusteella, missä olet ollut"),
                e("af7d89e6", "X käyttää aina joitain tietoja, kuten sisäänkirjautumispaikkaasi ja nykyistä sijaintiasi, jotta näet relevantimpaa sisältöä. Kun tämä asetus on käytössä, X voi personoida käyttäjäkokemustasi sen perusteella, missä muualla olet ollut."),
                e("f2b23062", "Käytettävyys, näyttö ja kielet"),
                e("fa76d7dc", "Hallitse, miten X-sisältö esitetään sinulle."),
                e("j7a15010", "Hallitse X-käyttäjäkokemuksesi yksityiskohtia, kuten värikontrastin ja animaation rajoittamista."),
                e("a257ecae", "Hallitse fonttikokoa, väriä ja taustaa. Nämä asetukset koskevat kaikkia X-tilejä tässä selaimessa."),
                e("jc3fa0e2", "Hallitse, millä kielillä X-käyttäjäkokemustasi personoidaan."),
                e("cc2973a8", "Rajoita sitä, miten X käyttää verkkodataasi tällä laitteella."),
                e("h54e6138", "Pikanäppäimet"),
                e("a4b69cbc", "Näyttökieli"),
                e("c856bd00", "Valitse kieli, jolla haluat nähdä otsikot, painikkeet ja muut X:n tekstit."),
                e("cab61d58", "Valitse muita kieliä"),
                e("dd93fafa", "Valitse lisää kieliä, joilla haluat nähdä sisältöä X:ssä."),
                e("bca1de4a", "Muut kielet, joita osaat"),
                e("c3aa76c4", "Kielet, joita saatat osata"),
                e("g099069c", "Hallitse kieliä, joita X on päätellyt sinun osaavan toimintasi, kuten seuraamiesi tilien ja sinut reagoimaan saaneiden julkaisujen perusteella."),
                e("cf9ce876", "Sovelluksen ja julkaisujen kieli"),
                e("d4372cf4", "English (US), 中文(简体), Español"),
                e("f8e46b90", "Nämä ovat X-tiliin liittämäsi sosiaaliset tilit. Voit poistaa käyttöoikeuden täällä."),
                e("d84ed6b2", "Poista yhteys"),
                e("i51130d4", "Google"),
                e("e28901f2", "Apple"),
                e("cf8560be", "Liitetty"),
                e("ad31b476", "Hallitse automatisoitua tiliäsi."),
                e("a2981062", "Hallinnointitili"),
                e("aff4540e", "Vaihda hallinnointitiliä"),
                e("b8b9d100", "Automatisoi tili"),
                e("e0bc51f6", "Kytke tilin automatisointi pois"),
                e("b92190c2", "Hallinnointitili yhdistetty"),
                e("fb03b39a", "Yhteys hallinnointitiliin poistettu"),
                e("bd51ddfa", "Emme kykene poistamaan yhteyttä hallinnointitiliisi juuri nyt. Yritä myöhemmin uudelleen. "),
                e("e91c15f6", "Poistetaanko yhteys hallintatiliin?"),
                e("df035b80", "Automatisoitu tilisi menettää tunnuksen, jos poistat yhteyden hallintatiliisi."),
                e("bd12cf34", "Kyllä, poista yhteys"),
                e("f79acef3", "Lue lisää"),
                e("a57a341c", "Datansäästö"),
                e("ab6505a8", "Jos tämä on valittu, X käyttää vähemmän verkkodataa."),
                e("a5d4fda0", "Jokin meni pieleen, mutta älä huoli – yritetään uudelleen."),
                e("g1888dc2", "Ei koskaan"),
                e("f724d1aa", "Vain Wi-Fi-verkossa"),
                e("cf6472c2", "Mobiili- ja Wi-Fi-verkossa"),
                e("b2ed92c4", "Arkistoa pyydetään"),
                e("ce5d2c46", "Tilapäisesti poissa käytöstä"),
                e("bed6a87c", "Linkki X-tietoihisi on vanhentunut"),
                e("b24b4768", "Siirry X-tietoihisi"),
                e("a0c3f812", "Tee uusi pyytö, jotta saat toimivan linkin."),
                e("eea30bb5", function (a) {
                    return "Muodostettu: " + a.date;
                }),
                e("f2cde471", function (a) {
                    return "Vanhentuu: " + a.date;
                }),
                e("b7ce9dbf", function (a) {
                    return "Arvioitu koko: " + a.size;
                }),
                e("d3de4c97", function (a) {
                    return "X-tiedot (" + a.currentIndex + "/" + a.count + ")";
                }),
                e("fc5bfd96", "Aloita"),
                e("gee8110e", "Ladataan arkistoa"),
                e("c326f156", "Arkisto ladattu"),
                e("c9fe9b56", "Arkistosi lataaminen alkaa pian"),
                e("j54b679b", function (a) {
                    return "Tämä avaa toisen ikkunan. Lataaminen voi kestää jonkin aikaa. Ladattava tiedosto on " + a.size + " ZIP-tiedosto.";
                }),
                e("ac63840d", function (a) {
                    return a.size + " kt";
                }),
                e("bcd9b0ed", function (a) {
                    return a.size + " Mt";
                }),
                e("ce494bb4", "Kirjasinkoko"),
                e("c783d45e", "Väri"),
                e("h306a358", "Tausta"),
                e("d8680056", "Hyvin pieni"),
                e("j59f0b94", "Oletus"),
                e("b81aaad8", "Suuri"),
                e("c7044880", "Hyvin suuri"),
                e("e46dffa0", "Tekstikoko"),
                e("ce8a8116", "Taustavaihtoehdot"),
                e("d3d48f3a", "Vaalea"),
                e("i76f67ee", "Hämärä"),
                e("c8f85960", "Valot pois"),
                e("aefc5b20", "Värivaihtoehdot"),
                e("a52d0fde", "Blue"),
                e("d818cdd6", "Keltainen"),
                e("fee1cd64", "Vaaleanpunainen"),
                e("cbed7fb2", "Violetti"),
                e("g697ec02", "Oranssi"),
                e("a7c2204a", "Vihreä"),
                e("gde8fdd7", function (a) {
                    return "X:n ydintä ovat lyhyet viestit, joita kutsutaan julkaisuiksi – kuten tämä tässä. Julkaisuissa voi olla muun muassa kuvia, videota, linkkejä, tekstiä, asiasanoja ja mainintoja, kuten @" + a.mention + ".";
                }),
                e("f277e94a", "Näytä"),
                e("ee79367b", function (a) {
                    return "Taso " + a.conversationTreeDepth + ":";
                }),
                e("ec6907ba", "Mainos"),
                e("d9587114", "Näytä uusin julkaisu"),
                e("b7b86c3c", "Avaa uuden version tästä julkaisusta"),
                e("a407814e", "Muokattu viimeksi"),
                e("i46ee3f0", "Tämä on uusin versio tästä julkaisusta."),
                e("e18cb87c", "Selitä tämä julkaisu"),
                e("ffe16626", "Vastaussuodatin on päällä."),
                e("jc81f6a7", function (a) {
                    return a.count + " näyttö" + n(a.count, "", "ä");
                }),
                e("g521abc6", "Grok, analysoi!"),
                e("a09331e0", "Aiheeseen liittyviä artikkeleita"),
                e("e3eceda6", "Grok-toiminnat"),
                e("a653f08f", function (a) {
                    return "Lue " + a.replyCount + " vastausta";
                }),
                e("dc0c8266", "Kysy Grokilta"),
                e("i7ac410e", "Näytä alkuperäinen"),
                e("c67f09e8", "Näytä käännös"),
                e("f396c105", function (a) {
                    return "" + a.displayCount;
                }),
                e("aa037e65", function (a) {
                    return "" + n(a.count, "Näyttö", "näyttöä");
                }),
                e("b8f3500a", "Lue ketju lukutilassa"),
                e("fc7db594", "Profiilin yhteenveto"),
                e("c3f04d9c", "Miettii"),
                e("cbdddb0a", "Valmis"),
                e("b0d1e205", function (a) {
                    return 'Haetaan haulla **"' + a.query + '"**';
                }),
                e("acb9b845", function (a) {
                    return "Selataan " + a.url + ' haulla **"' + a.query + '"** ';
                }),
                e("ef261d8d", function (a) {
                    return "Haetaan käyttäjän @" + a.username + " julkaisuista";
                }),
                e("bec7eb11", function (a) {
                    return "Haetaan käyttäjän @" + a.username + " julkaisuista hakusanalla **”" + a.query + "”**";
                }),
                e("ead81122", "Jokin meni pieleen. Muodosta yhteys uudelleen päivittämällä tai yritä uudelleen."),
                e("f808a13a", "Toimintojen määrää on rajoitettu. Odota muutama hetki ja yritä sitten uudelleen."),
                e("e0481e5a", "Grok ei tällä hetkellä ole tuettu ominaisuus maassasi."),
                e("bc0a5b5a", "Grok ei ole käytettävissä. Yritä myöhemmin uudelleen."),
                e("ef674976", "Sinulla ei ole valtuuksia tämän palvelun käyttöön."),
                e("c74e87e0", "Tämä tiedosto on liian suuri. Valitse pienempi tiedosto."),
                e("bea50a2a", "Tätä tiedostomuotoa ei tueta."),
                e("j77292b7", function (a) {
                    return "Valitse enintään " + a.count + " tiedosto" + n(a.count, "", "a");
                }),
                e("d4d35bea", "Käännetään..."),
                e("he9c9634", "Käännöstä ei voitu hakea"),
                e("j2198c98", "Piilota käännetty julkaisu"),
                e("i73a7d48", "Kääntänyt Google"),
                e("eeadb767", function (a) {
                    return "Kielestä " + a.originLanguage + " kääntänyt Google";
                }),
                e("be9b9fb8", "Kääntänyt Grok"),
                e("d9c6f69d", function (a) {
                    return "Kielestä " + a.originLanguage + " kääntänyt Grok";
                }),
                e("dc445f82", "Papagon käännös"),
                e("he9803d3", function (a) {
                    return "Papagon käännös kielestä " + a.originLanguage;
                }),
                e("f8264fc0", "Kääntänyt X"),
                e("caa5ba3d", function (a) {
                    return "Kielestä " + a.originLanguage + " kääntänyt X";
                }),
                e("e0f81ff3", "Käännös:"),
                e("j2862695", function (a) {
                    return "Kielestä " + a.originLanguage + " kääntänyt";
                }),
                e("b7cb4fab", "Kääntänyt"),
                e("cbc8fed4", "Vastaako käännös alkutekstiä? Anna palautetta, jotta laatu paranee:"),
                e("d56779a2", "helppo ymmärtää"),
                e("b6fe8a56", "sekava tai epäselvä"),
                e("a66d80d0", "Käännä julkaisu"),
                e("d4c339b9", function (a) {
                    return "Julkaisu käyttäjältä " + a.fullName + " (@" + a.screenName + ")";
                }),
                e("db0cb64f", function (a) {
                    return a.fullName + " (@" + a.screenName + ") julkaisi:\n" + a.tweet;
                }),
                e("h6f99ac4", "Lisätty kirjanmerkkeihisi"),
                e("g1c463f6", "Poistettu kirjanmerkeistä"),
                e("a2e7377f", function (a) {
                    return "Poistettu kansiosta " + a.bookmarkFolderName;
                }),
                e("i47ad24c", "Jatka samaan malliin. Mitä useammasta julkaisusta tykkäät, sitä parempi aikajanastasi tulee."),
                e("def4a37c", "Hyvin menee! Aikajanasi alkaa näyttää paremmalta. Mitä enemmän tykkäät, sitä paremman aikajanakokemuksen saat. Jatka tykkäilyä sinua kiinnostavista asioista."),
                e("bcab06d2", "Tykätty julkaisusta"),
                e("i5efe23e", "Tykkäys poistettu julkaisusta"),
                e("f5d17674", "Julkaisu uudelleenjulkaistu"),
                e("d714acfa", "Julkaisun uudelleenjulkaisu peruttu"),
                e("b18dff26", "Vain tilaajat näkevät tämän uudelleenjulkaisun"),
                e("c2453318", "Lisää kansioon"),
                e("f88553c8", "Kopioitu leikepöydälle"),
                e("b5b36724", "Vastataanko?"),
                e("gce00a2a", "Vai haluatko uudelleenjulkaista?"),
                e("g271f120", "Luonnostelemasi julkaisu poistetaan, ennen kuin voit vastata."),
                e("gad04d1a", "Luonnostelemasi twiitti poistetaan, ennen kuin lainaat."),
                e("ibd021f2", "Haluatko lukea artikkelin ensin?"),
                e("bbef69c4", "Olet jakamassa artikkelin, jota et ole avannut X:ssä."),
                e("g5092766", "Lue artikkeli"),
                e("a2d5c006", "Kiitos, kun seurasit linkkiä"),
                e("g37bb2d0", "Kun tarkistat linkin sisällön ennen jakamista, edistät asiapitoista keskustelua."),
                e("gc45a90a", "Laajenna ilmoitus"),
                e("g7135e44", "Pidetään X:ssä jaettu tieto luotettavana. Perehdy asiaan ennen julkaisusta tykkäämistä."),
                e("h9b6d468", "Pidetään X:ssä jaettu tieto luotettavana. Perehdy asiaan ennen julkaisun jakamista."),
                e("af5cd00e", "Lue lisää"),
                e("e29c651e", "Kiitos, kun luit lisää"),
                e("ef504d80", "Et voi lisätä kirjanmerkkeihin julkaisuja suojatuilta tileiltä – vielä."),
                e("cef96d5a", "Julkaisu on jo kirjanmerkeissäsi"),
                e("b2542f56", "Jokin meni pieleen. Yritä lisätä julkaisu kirjanmerkkeihin hetken kuluttua uudelleen."),
                e("fe3b9942", "Sinua on tämän käyttäjän pyynnöstä estetty tykkäämästä hänen julkaisuistaan."),
                e("c2a6dc5c", "Jokin meni pieleen. Kokeile tykätä julkaisusta hetken kuluttua uudelleen."),
                e("b57f01b8", "Et voi tykätä julkaisuista suojatuilta käyttäjiltä, joita et seuraa."),
                e("ba0b3cc0", "Sinua on tämän käyttäjän pyynnöstä estetty uudelleenjulkaisemasta hänen julkaisujaan."),
                e("h32b1ac4", "Jokin meni pieleen. Yritä uudelleenjulkaisua hetken kuluttua uudelleen."),
                e("e50cea9e", "Tätä julkaisua ei voi uudelleenjulkaista."),
                e("d8e56f40", "Pahoittelut! Julkaisumäärä on täyttynyt. Uudelleenjulkaise taas huomenna"),
                e("i14d7a46", "Jokin meni pieleen. Yritä poistaa julkaisu kirjanmerkeistä hetken kuluttua uudelleen."),
                e("d4ebfeb0", "Yritä poistaa julkaisusi tykkäys uudelleen hetken päästä."),
                e("e639775e", "Yritä kumota uudelleentwiittauksesi uudelleen hetken päästä."),
                e("fcad707a", "Laitoimme tähän julkaisuun varoituksen, koska sen sisältö voi olla arkaluonteista."),
                e("f1824804", "Hae muutosta tähän varoitukseen"),
                e("f755f710", "Selvä"),
                e("ced4abbe", "Näe keskustelu"),
                e("d00e1d2a", "Liity Yhteisöön"),
                e("e6057014", "Pyydä liittyä"),
                e("ba352986", "Et voi vastata… vielä"),
                e("d09e76d8", "Yhteisöt ovat julkisia, joten pääset lukemaan julkaisut — mutta jos haluat ottaa osaa, sinun on liityttävä jäseneksi."),
                e("cfa1f802", "Tutustu yhteisöön"),
                e("af27a0f8", "Sinut on poistettu tästä yhteisöstä"),
                e("id089506", "Pyydä Yhteisön moderaattoreilta paluuta yhteisöön."),
                e("cac4e916", "Tämä julkaisu on piilotettu"),
                e("cb18be32", "Et voi tehdä sitä… vielä"),
                e("dbb5fd8e", "Piirin julkaisuja ei voi uudelleenjulkaista"),
                e("ae2c8a1e", "Mikset voi vastata tähän?"),
                e("afe7ba26", "Mikset voi tykätä tästä?"),
                e("df9e2356", "Mikset voi lisätä tätä kirjanmerkkeihin?"),
                e("jead3bc2", "Mikset voi jakaa tätä?"),
                e("h2a668b8", "Mikset näe julkaisun tilastoja?"),
                e("bd85267e", "Mikset voi uudelleenjulkaista tätä?"),
                e("dcc05a7e", "Katselut"),
                e("e213fada", "Tälle julkaisulle ei ole saatavana näyttöjen lukumäärää."),
                e("g0954ea6", "Vain julkaisun kirjoittaja ja Yhteisön moderaattorit näkevät sen, ja reagointimahdollisuus on poistettu."),
                e("e7969518", "Yhteisöt ovat julkisia, joten voit lukea julkaisut— mutta osallistumaan pääsevät tällä hetkellä vain kutsutut."),
                e("g2dc874a", "Yhteisöt ovat julkisia, joten voit lukea julkaisut — mutta vain jäsenet voivat tällä hetkellä osallistua keskusteluun."),
                e("g562676f", "Lue lisää"),
                e("ee574c37", "Lue lisää"),
                e("de2d83d6", "Kirjanmerkki kansioon"),
                e("f14df406", "Kopioi linkki mainokseen"),
                e("e05c00b4", "Kopioi linkki"),
                e("f61c4bb0", "Jaa yksityisviestillä"),
                e("id35970e", "Julkaise video"),
                e("ff9348b8", "Jaa mainos palvelussa…"),
                e("d03241f8", "Jaa julkaisu alustalla..."),
                e("j08dd2d4", "Poista kirjanmerkeistä"),
                e("b7fde1ea", "Poista kansiosta"),
                e("d9a2bd78", "Lataa video"),
                e("fbfab656", "Jaa Huoneeseen"),
                e("e668112c", "Julkaisu jaettu Huoneeseen"),
                e("g5775e46", "Näytä lainaukset"),
                e("bb192c6b", function (a) {
                    return "" + a.displayCount;
                }),
                e("f23d99b0", function (a) {
                    return "kirjanmerkki" + n(a.count, "", "ä");
                }),
                e("e8866a55", function (a) {
                    return "" + a.displayCount;
                }),
                e("eb3abe45", function (a) {
                    return "tykkäys" + n(a.count, "", "tä");
                }),
                e("eff958fb", function (a) {
                    return "" + a.displayCount;
                }),
                e("i5a8c515", function (a) {
                    return "lainaus" + n(a.count, "", "ta");
                }),
                e("dd77f9fb", function (a) {
                    return "" + a.displayCount;
                }),
                e("a755b81b", function (a) {
                    return "uudelleenjulkaisu" + n(a.count, "", "a");
                }),
                e("e9f1fbcc", "Ei mitään nähtävää - vielä"),
                e("a3b80be6", "Palaa myöhemmin lukemaan julkaisuja aiheesta."),
                e("d93b360a", "Tämä sarake tyhjennettiin. Lisää julkaisuja ilmestyy tämän yläpuolelle, kun niitä laaditaan."),
                e("d6e2f9be", "Ladataan aikajanaa"),
                e("afb4c24a", "Ei kohteita"),
                e("e5b0063d", function (a) {
                    return "Aikajana: " + a.title;
                }),
                e("ib65b1c6", "Rekisteröidy Applen avulla"),
                e("f55cebb8", "Kirjaudu sisään Applen avulla"),
                e("dcc304d6", "Jatka Apple-tilillä"),
                e("e0870f26", "Rekisteröidy Google-tilin kautta"),
                e("gfeffd6a", "Kirjaudu sisään Google-tilin kautta"),
                e("gf5e9ea6", "Kumoa"),
                e("e43138c5", function (a) {
                    return "Seuraa käyttäjää " + a.name;
                }),
                e("be65f2e7", function (a) {
                    return "Älä seuraa käyttäjää " + a.name;
                }),
                e("a649d337", function (a) {
                    return a.name + " ei kiinnosta";
                }),
                e("e2f2b658", "Emme enää ehdota tätä aihetta."),
                e("b51f7edf", function (a) {
                    return "Lopetit käyttäjän " + a.name + " seuraamisen";
                }),
                e("gac366b3", function (a) {
                    return "Seuraat nyt käyttäjää " + a.name;
                }),
                e("f9e45cfb", function (a) {
                    return "Estetäänkö @" + a.screenName + "?";
                }),
                e("fcd4d489", function (a) {
                    return "Estä @" + a.screenName;
                }),
                e("a6450e84", "Estä"),
                e("g353ad73", function (a) {
                    return "Käyttäjä ei voi seurata sinua tai nähdä julkaisujasi. Et myöskään näe käyttäjän @" + a.screenName + " julkaisuja tai saa niistä ilmoituksia.";
                }),
                e("ad00a739", function (a) {
                    return "Hänen on mahdollista nähdä julkiset julkaisusi, mutta ei enää reagoida niihin. @" + a.screenName + " ei myöskään voi seurata sinua tai lähettää sinulle viestejä, etkä näe ilmoituksia häneltä.";
                }),
                e("a9fd20be", "Estäminen onnistui."),
                e("j546fb79", function (a) {
                    return "Poistetaanko käyttäjän @" + a.screenName + " esto?";
                }),
                e("c9623eeb", function (a) {
                    return "Poista käyttäjän @" + a.screenName + " esto";
                }),
                e("e133be4e", "Poista esto"),
                e("he43bca4", "Hän voi seurata sinua ja nähdä julkaisusi."),
                e("f5f01af6", "Hänen on mahdollista seurata sinua ja reagoida julkisiin julkaisuihisi."),
                e("b6878b0a", "Jokin meni pieleen. Yritä estää käyttäjä hetken kuluttua uudelleen."),
                e("e40252de", "Älä näytä näitä julkaisuja Sinulle-aikajanalla"),
                e("ae225c26", "Näytä näitä julkaisuja Sinulle-aikajanalla"),
                e("a96d2628", "Älä näytä tätä listaa Sinulle-aikajanalla"),
                e("d00abae0", "Tämän listan suosituimmat julkaisut eivät enää näy Sinulle-aikajanalla."),
                e("e566dd06", "Tämän listan suosituimmat julkaisut eivät enää näy Sinulle-aikajanalla."),
                e("j3cc1526", "Näytä tämä lista Sinulle-välilehdellä"),
                e("h435716e", "Tämän listan suosituimmat julkaisut saattavat näkyä Sinulle-aikajanalla."),
                e("e8ba412e", "Tämän listan suosituimmat julkaisut saattavat nyt näkyä Sinulle-aikajanalla."),
                e("d66e95cc", "Kiinnitetäänkö vastaus julkaisuusi?"),
                e("i24ed0de", "Kiinnitä vastaus"),
                e("b1033082", "Se näkyy julkaisuusi tulleiden vastausten kärjessä. Voit korvata tai irrottaa sen milloin tahansa."),
                e("e96a5962", "Irrotetaanko tämä vastaus?"),
                e("ec04e6fc", "Irrota vastaus"),
                e("d05618f2", "Vastaus ei enää näy ylimpänä tämän julkaisun vastauksissa."),
                e("j9aedfdc", "Kiinnitä vastaus"),
                e("c034211a", "Irrota vastaus"),
                e("ie4538b4", "Vastaus kiinnitetty julkaisuun"),
                e("ad135a24", "Vastaus irrotettu julkaisusta"),
                e("ee369efc", "Vastauksen kiinnittäminen julkaisuun ei onnistu"),
                e("c3e7f572", "Vastauksen irrottaminen julkaisusta ei onnistu"),
                e("d058316c", "Kiitos. Käytämme tätä aikajanasi parantamiseen."),
                e("afb7e8f8", "Lue artikkeli"),
                e("jb0429b1", function (a) {
                    return "Käyttäjältä " + a.name + " @" + a.screenName;
                }),
                e("gfdad702", "18+"),
                e("c5d23126", "Kiinnitä"),
                e("j44ec610", "Irrota"),
                e("ibd0106e", function (a) {
                    return "" + a.formattedCount;
                }),
                e("cface2d1", function (a) {
                    return "jäsen" + n(a.count, "", "tä");
                }),
                e("b5334780", "Odottaa"),
                e("b171d7c4", "Liity"),
                e("aa7ae3f6", "Liittynyt"),
                e("bb1d57b6", "Poistu"),
                e("h4fbfa58", "Hyväksy ja liity"),
                e("ea8cfb1e", "Hyväksy ja pyydä liittyä"),
                e("dc1b14a1", function (a) {
                    return "Lue ja hyväksy yhteisön " + a.communityName + " säännöt";
                }),
                e("c966ac64", "Yhteisöön liittymispyynnön lähetys ei onnistu. Yritä myöhemmin uudelleen."),
                e("g690e07e", "Vastauksesi (valinnainen)"),
                e("a5d21bf4", "Vastaaminen on vapaaehtoista. Muista kuitenkin, että se auttaa moderaattoreita pyyntösi hyväksymisessä."),
                e("h9526e03", "X:n sääntöjä"),
                e("c00c234f", function (a) {
                    return a.communityName + " -säännöt";
                }),
                e("hafa07f2", "Avoinna vain kutsutuille"),
                e("c15bee32", "Sinut on poistettu tästä Yhteisöstä"),
                e("efa265fc", "Julkaisusi ovat suojattuja"),
                e("f9cecf48", "Liittyminen ei onnistu juuri nyt"),
                e("bf7bdb60", "Vika ei ole sinussa, vaan meissä. Yritä myöhemmin uudelleen."),
                e("h27d6950", "Et voi poistua vielä"),
                e("b02360f6", "Viimeinen järjestelmänvalvoja tai moderaattori ei voi erota, ellei Yhteisö ole tyhjä."),
                e("fe832999", "tehtävä julkaisuistasi julkisia"),
                e("bc7a7af4", "Julkaisusi Yhteisössä piilotetaan, etkä voi palata Yhteisöön."),
                e("a0e0a52c", function (a) {
                    return "" + a.offendingRule;
                }),
                e("fe76cacc", "Näytä lisää julkaisuja"),
                e("aebb6546", "Ladataan lisää julkaisuja"),
                e("a3484d22", "tasapeli"),
                e("aab2efa9", function (a) {
                    return "voittaja " + a.winner;
                }),
                e("ba21c289", function (a) {
                    return "Tuloslista, " + a.gameCategory + ", " + a.gameState + ", " + a.accessibleGameClockPeriod + ", " + a.teamOneLabel + ", " + a.teamTwoLabel;
                }),
                e("f178e38c", "Tulossa"),
                e("b6da6b02", "Live"),
                e("i9f615c8", "Lopullinen"),
                e("f897267a", "Siirretty myöhemmäksi"),
                e("f93c4b6a", "Peruttu"),
                e("i79ab12a", "Seuraa aihetta"),
                e("c0f56044", "Älä seuraa"),
                e("fcf51fe6", "Merkitse tähdellä"),
                e("e9a90d72", "Tähdellä merkitty"),
                e("bf403716", "Poista tähti"),
                e("c9f08e29", function (a) {
                    return "Poistetaanko tähti aiheesta " + a.title + "?";
                }),
                e("hed4dcd0", "Vaikka poistat tähden aiheesta, saatat jatkossakin nähdä julkaisuja siitä seuraamiesi tilien perusteella."),
                e("cd876e02", "Suosikki"),
                e("f2816e02", "Lisätty suosikkeihin"),
                e("f5b04fbc", "Poista suosikeista"),
                e("c481ae3f", function (a) {
                    return "Poistetaanko " + a.title + " suosikeista?";
                }),
                e("c94116de", "Vaikka poistat aiheen suosikeistasi, saatat jatkossakin nähdä julkaisuja siitä seuraamiesi tilien perusteella."),
                e("e0e730b0", "Kiinnostunut"),
                e("b1850062", "Ei kiinnosta"),
                e("gd3f996f", function (a) {
                    return "Eikö " + a.title + " kiinnosta?";
                }),
                e("jdd65aac", "Vaikket ole kiinnostunut tästä aiheesta, saatat jatkossakin nähdä julkaisuja siitä sen perusteella, mitä tilejä seuraat."),
                e("f93bb3ee", "Lataa kuva"),
                e("cc37768d", function (a) {
                    return a.mediaFileSize + " Kt";
                }),
                e("f19d78d7", function (a) {
                    return a.mediaFileSize + " Mt";
                }),
                e("c75bf00e", "Lataa GIF"),
                e("d3ac405c", "Lataa video"),
                e("g97a046c", "Toista tämä video"),
                e("ac4c73d8", "Upotettu video"),
                e("f3bb10a6", "Videota toistetaan"),
                e("b87c0a72", "Salli push-ilmoitukset, niin tiedät aina, mitä X-alustalla tapahtuu"),
                e("e71e09ec", "Ota ilmoitukset käyttöön"),
                e("g4850f44", "Push-ilmoitukset käytössä"),
                e("dc397182", "Mukauta"),
                e("ia5e7488", "Sulje"),
                e("j681933e", "Yksityinen lista"),
                e("add55942", "Jokin meni pieleen. Yritä tilaamista uudelleen vähän ajan kuluttua."),
                e("ib8f5f3c", "Jokin meni pieleen. Yritä tilauksen perumista hetken kuluttua uudelleen."),
                e("e20fc756", "Sinulla ei ole oikeutta lisätä tätä henkilöä tälle listalle."),
                e("d8a032a2", "Sinun on poistettava yksi kiinnitetty aikajana ennen uuden lisäämistä"),
                e("fa816a0a", "Järjestä lista uudelleen"),
                e("ac832ae4", "Kiinnitä lista"),
                e("cdb33880", "Irrota lista"),
                e("ca5d0a82", "Muokkaa listaa"),
                e("ec08efe4", function (a) {
                    return "" + a.formattedCount;
                }),
                e("h9f711f0", function (a) {
                    return "seuraaja" + n(a.count, "", "a");
                }),
                e("jceadc3e", "Nimetön"),
                e("a1d5303c", "Yksityinen"),
                e("cc8f8a80", "Listaamaton"),
                e("c33a97d6", "Julkinen"),
                e("i73fff1b", function (a) {
                    return "Näytä " + a.count + " " + n(a.count, "julkaisu", "uutta julkaisua");
                }),
                e("a682906d", function (a) {
                    return a.count + " tykkäys" + n(a.count, "", "tä") + " vielä";
                }),
                e("g566e973", function (a) {
                    return a.jobCount + " avointa työpaikkaa" + a.tcc_organization_open_job_count;
                }),
                e("ccc45ee7", function (a) {
                    return a.team + " voitti";
                }),
                e("f81a95d7", function (a) {
                    return "" + a.date;
                }),
                e("ed4bea2e", "Tänään"),
                e("j3e0ae78", function (a) {
                    return "・" + a.formattedTime;
                }),
                e("cabfdd06", "Huomenna"),
                e("abd0f804", function (a) {
                    return "・" + a.formattedTime;
                }),
                e("df45f564", "Lisää toinen julkaisu"),
                e("i569ff3e", "Näytä tämä ketju"),
                e("je5502eb", function (a) {
                    return 'Näytetään myös tulokset haulle "' + a.suggestion + '"';
                }),
                e("bc4628a1", function (a) {
                    return 'Tulokset haulle "' + a.suggestion + '"';
                }),
                e("a1979464", "Videota ladataan"),
                e("ic1e826e", "Toista"),
                e("c8b4bca0", "Osta"),
                e("f5ea07ec", "Osta nyt"),
                e("b62956aa", "Varaa"),
                e("i3ea806a", "Tilaa"),
                e("fd00a76a", "Avoinna"),
                e("e0aa5848", "Asenna"),
                e("g33f3050", "Verkossa"),
                e("d3f6b1a6", "Lähetä meille viesti"),
                e("b0e322cc", "Lähetä meille yksityisviesti"),
                e("cb8bddc8", "Lähetä minulle yksityisviesti"),
                e("cb8c547e", "Lähetä yksityisviesti"),
                e("d980e29f", function (a) {
                    return "Alkaa " + a.date;
                }),
                e("fdd81500", "Karuselli"),
                e("i0db46e6", "GIF"),
                e("faf745fa", "Alastomuus"),
                e("e1b4e672", "Arkaluonteinen sisältö"),
                e("acc48c15", function (a) {
                    return "Varoitus: " + a.formattedWarningList;
                }),
                e("a0e81a2e", "Näytä"),
                e("g034e6f1", function (a) {
                    return "Voit liittää tähän ilmoitukseen enintään " + a.count + " julkaisua.";
                }),
                e("i2e0d584", "Mainostettu julkaisu"),
                e("b52a940c", "Tämä julkaisu ei ole saatavilla."),
                e("da59404c", "Näet parhaillaan uusimman version."),
                e("e267df68", "Vastaus piilotettu"),
                e("d5f162b6", "Poista vastauksen piilotus halutessasi. Oliko muuta?"),
                e("f376e9d4", "Julkaisun saama palaute"),
                e("d7c93b6c", "Julkaisu piilotettu"),
                e("b3abacee", "Näet vähemmän tällaisia julkaisuja. Haluatko antaa muuta palautetta?"),
                e("a2411360", "Löysitkö mieleisesi vastauksen?"),
                e("e8a14626", "Voit nyt kiinnittää vastauksen julkaisuusi toimintavalikon kautta – valitse julkaisussasi näkyvät kolme pistettä (...)."),
                e("d41305a8", "Puhekupla, jossa on nasta"),
                e("eca84b72", "Peru uudelleenjulkaisu"),
                e("g6185a9e", "Kuka voi vastata?"),
                e("i00051cc", "Valitse, ketkä voivat vastata tähän julkaisuun. Julkaisussa mainitut käyttäjät voivat vastata aina."),
                e("i9000126", "Seuraamasi tilit"),
                e("dcaede8a", "Vain mainitsemasi tilit"),
                e("ad85cd2e", "Tilaajasi"),
                e("f19e4bfc", "Varmennetut tilit"),
                e("bf994ab2", "Vain sinä"),
                e("e7b4b30a", "Vain mainitsemasi tilit"),
                e("ca6500a8", "Estä ulkoiset linkit vastauksissa"),
                e("e839db3a", "Hylkää"),
                e("c8a98928", "Promootiokuva"),
                e("f5b3dc1e", "Ehkä myöhemmin"),
                e("ae0c5fbe", "Virhe muutettaessa sitä, kuka voi vastata"),
                e("bae0cbc0", "Muuta, kuka voi vastata"),
                e("d78131b9", function (a) {
                    return "Lisää/poista @" + a.screenName + " listoihin/listoista";
                }),
                e("fb4ee11c", "Miksi tämä mainos?"),
                e("ad50e7d9", function (a) {
                    return "Näytä " + a.entity + "tilastot";
                }),
                e("ef1042f8", "Kirjoita Yhteisöhuomautus"),
                e("h3edf7a6", "Pyydä yhteisöhuomautusta"),
                e("bf8d98f4", "Vain Tilaajat voivat vastata"),
                e("e69ada9e", "Vain Premium-tilaajat voivat vastata"),
                e("ae04c4dd", function (a) {
                    return "Poistetaanko " + a.entity + "?";
                }),
                e("d9442996", "Tätä ei voi kumota. Se poistetaan profiilistasi, sinua seuraavien tilien aikajanalta ja X:n hakutuloksista."),
                e("dad785a7", function (a) {
                    return "Tämä poistaa kaikki tämän " + a.entity + " versiot profiilistasi, sinua seuraavien tilien aikajanoilta ja X:n hakutuloksista. Tätä ei voi kumota.";
                }),
                e("jda253ab", function (a) {
                    return a.entity + " poistettiin";
                }),
                e("j49c2f85", function (a) {
                    return "Jokin meni pieleen. Yritä poistaa " + a.entity + " hetken kuluttua uudelleen.";
                }),
                e("f9fa0390", "Artikkelisi siirretään luonnostilaan ja se voidaan poistaa Artikkelit-sivulta."),
                e("dad450ec", "Muokkaa artikkelia"),
                e("g9677c6e", "Vahvista"),
                e("b57bfe70", "Muokataanko artikkelia?"),
                e("bd3da7be", "Artikkelin julkaisu perutaan tilapäisesti muokkaamisen ajaksi, jolloin sitä ei voi tarkastella julkisesti. Kaikki olemassa olevat toiminnat säilytetään ja siirretään päivitettyyn versioon, jonka julkaiset."),
                e("j26481e6", "Artikkelisi julkaisu on poistettu. Artikkeli on siirretty luonnoksiin muokattavaksi."),
                e("b360ac7c", "Navigointi osiossa"),
                e("adc81042", "Osion tiedot"),
                e("bede965c", function (a) {
                    return "" + a.count;
                }),
                e("g345246c", "Tämä on julkaistu artikkeli, uusi tapa kirjoittaa X:ssä."),
                e("b14efa0a", "Artikkelin kansikuva"),
                e("afdccedb", function (a) {
                    return "Näytä " + a.displayCount + " vastaus" + n(a.count, "", "ta");
                }),
                e("bdba3e1a", "Ota julkaisuilmoitukset käyttöön"),
                e("c4da7d28", "Poista julkaisuilmoitukset käytöstä"),
                e("j87c21f4", "Ilmoita"),
                e("iebc30ca", "Poista ilmoitukset käytöstä"),
                e("dc740eb2", "Näet julkaisuilmoitukset tältä tililtä ilmoitusaikajanalla. Voit myös ottaa käyttöön push-ilmoitukset laitteella, jotta yksikään julkaisu ei mene sinulta ohi."),
                e("dca669ad", function (a) {
                    return "Uudelleenjulkaisut käyttäjältä " + a.name + " eivät enää näy aikajanallasi";
                }),
                e("ce6da5d7", function (a) {
                    return "Uudelleenjulkaisut käyttäjältä " + a.name + " näkyvät aikajanallasi";
                }),
                e("c6ea308b", function (a) {
                    return a.fullName + " (@" + a.screenName + ")";
                }),
                e("a1fef729", function (a) {
                    return "Tsekkaa " + a.fullName + " X:ssä.\n" + a.bio;
                }),
                e("c32a3d03", function (a) {
                    return "@" + a.screenName + " ei enää seuraa sinua";
                }),
                e("j7bb1a43", function (a) {
                    return "Ilmianna @" + a.screenName;
                }),
                e("hef5960c", "Jaa profiili käyttäen..."),
                e("bb1cbeb6", "Poista hiljennys"),
                e("h2f62206", "Käyttäjä hiljennetään"),
                e("e67b2d65", function (a) {
                    return "Hiljennä @" + a.screenName;
                }),
                e("f05597b3", function (a) {
                    return "Poista käyttäjän @" + a.screenName + " hiljennys";
                }),
                e("h59f52ee", "Hiljennys onnistui."),
                e("eea0cbee", "Hiljennyksen poisto onnistui."),
                e("i29533b3", function (a) {
                    return "@" + a.screenName + " on hiljennetty.";
                }),
                e("h129c3c3", function (a) {
                    return "Käyttäjän " + a.screenName + " hiljennys on poistettu.";
                }),
                e("b3036480", "Poista tämä seuraaja"),
                e("h27b7407", function (a) {
                    return "@" + a.screenName + " poistetaan seuraajistasi ilman, että hänelle ilmoitetaan asiasta. Hän voi alkaa seurata sinua uudestaan.";
                }),
                e("ibd0b842", "Kopioi linkki profiiliin"),
                e("b9c26480", "Näytä aiheet"),
                e("e922ce0c", "Ota uudelleenjulkaisut käyttöön"),
                e("ge54bb8c", "Poista uudelleenjulkaisut käytöstä"),
                e("h5ef9bc8", "Näytä listat"),
                e("e9eef4c6", "Ilmianna EU-alueella laiton sisältö"),
                e("e28ba0bb", function (a) {
                    return "Ilmianna @" + a.screenName + " EU-alueella laittomasta sisällöstä";
                }),
                e("a30b63da", "Jokin meni pieleen. Yritä poistaa seuraaja hetken kuluttua uudelleen."),
                e("gd11f228", "(lisää otsikko)"),
                e("ced3c85a", "Muokattu"),
                e("b375ece0", "Vain sinä näet tämän julkaisemattoman artikkelin."),
                e("edf9101f", "Jatka lukemista"),
                e("icf7f1a4", "Kopioi leikepöydälle"),
                e("e1a292ec", "Lisää mediasisältöä"),
                e("ebfd8ac6", "Lisää"),
                e("ia3611ee", "Ala kirjoittaa"),
                e("d794135c", "Valitse tiedosto tai vedä se tähän.\n\nKussakin lohkossa voi olla GIF, video tai kuvasarja (enintään 4 kuvaa per sarja)."),
                e("e187f906", "GIFit"),
                e("fa4e68ca", "Julkaisut"),
                e("c80940f4", "Markdown-koodi"),
                e("cfeb3f86", "Koodi"),
                e("ad9e175c", "LaTeX"),
                e("c62a27e6", "Tykätty"),
                e("g88b88a6", "Tallennettu kirjanmerkkeihin"),
                e("i282583e", "Julkaisuja suojatuilta tileiltä ei voi käyttää"),
                e("eae4fe7a", "Poistetun julkaisun lainaus ei ole käytettävissä"),
                e("d2042fb6", "Tykätyt julkaisut"),
                e("iad3e15c", "Kirjanmerkkeihin lisätyt julkaisut"),
                e("f1c63c34", "Liimaa julkaisun URL"),
                e("a78f6310", "Virheellinen julkaisun URL"),
                e("fe9ddab6", "Julkaisua ei löydy"),
                e("dd2c9034", "Ota julkaisuja talteen"),
                e("cada17f8", "Kirjanmerkkeihin lisäämällä saat julkaisut kätevästi talteen."),
                e("j0179e90", "Laadi julkaisu"),
                e("adad5408", "Uusi kansio"),
                e("f44ddd2e", "Lisää julkaisuja kirjanmerkkeihin myöhemmin luettaviksi"),
                e("c91d2c4c", "Tarvitsetko lisäaikaa nokkelan vastauksen keksimiseen tai haluatko muuten vain ottaa julkaisun talteen? Lisää se kirjanmerkkeihin!"),
                e("j45c642e", "Kansiot eivät nyt lataudu"),
                e("b87ca51a", "Poista kuva"),
                e("eebff22c", "Rajaa kuvaa"),
                e("hf6f2914", "Esikatselu"),
                e("be4a00c2", "Kirjoita haluamasi koodi tähän"),
                e("i3128619", function (a) {
                    return "Katkelma voi olla enintään " + a.count + " merkkiä pitkä";
                }),
                e("dbb02ec4", "Valitse ohjelmointikieli"),
                e("d942865e", "Hae ohjelmointikieliä"),
                e("e554f642", "Hylätäänkö muutokset?"),
                e("fa524058", "Pidä"),
                e("d4ab68e2", "Hylkää"),
                e("a50ba822", "Hae GIFejä"),
                e("c6f5ac52", "Luokat – GIF-haku"),
                e("ab468379", function (a) {
                    return a.query + " – GIF-haku";
                }),
                e("j7fc4f9c", "Toista GIFit automaattisesti"),
                e("a66b7760", "Nimetön GIF"),
                e("a723aefa", "GIFejä ei löydy"),
                e("a6ecfa0a", "Kokeile hakea jotakin muuta."),
                e("f5ff0d6f", function (a) {
                    return a.category + " – GIF-haku";
                }),
                e("effe1ca6", "Lisää tähän LaTeX-lauseke"),
                e("c46c3c62", "Lausekkeessa oli virhe. Yritä uudelleen, kun olet korjannut sen."),
                e("d4a4842e", "Lisää emoji"),
                e("fec16c1c", "Emoji"),
                e("idc01eb8", "Lihavointi"),
                e("cd7c97c6", "Kursivoi"),
                e("dab932be", "Alleviivaa"),
                e("c5b6178a", "Vedä yli"),
                e("c03d7fd6", "Syötä linkki"),
                e("abfe2d36", "Lista luetelmamerkeillä"),
                e("da685a7c", "Numeroitu lista"),
                e("g74d920c", "Lainaa katkelma"),
                e("cda501c6", "Suurenna tekstin kokoa"),
                e("a54fdc46", "Pienennä tekstin kokoa"),
                e("b340830e", "Tekstioikotiet"),
                e("c1ea915e", "Lisää uuden rivin tai katkelman alkuun, ja sen perään välilyönti"),
                e("e8a4ef02", "Otsikko"),
                e("dd71241a", "Alaotsikko"),
                e("ja9ca202", "Artikkelioikotiet"),
                e("ef1649e2", "X - Pikanäppäimet"),
                e("aefd89c8", "Navigointi"),
                e("cafdefb2", "Toiminnot"),
                e("dda42cf2", "Sarakkeet ja dekit"),
                e("e8a12604", "Lisää kuvateksti (valinnainen)"),
                e("eabf2209", function (a) {
                    return "GIF lähteestä " + a.providerName;
                }),
                e("a613e720", "Kopioi GIFin linkki"),
                e("aeca1239", function (a) {
                    return "Lihavointi" + a.ttc_rich_text_composer;
                }),
                e("i7dc66dd", function (a) {
                    return "Kursiivi" + a.ttc_rich_text_composer;
                }),
                e("ad89b831", function (a) {
                    return "aktiivinen" + a.ttc_rich_text_composer;
                }),
                e("jcd5ee8a", "Muokkaa katkelmaa"),
                e("a8f09fb8", "Poista katkelma"),
                e("i89195ea", "Jakaja"),
                e("da8ac57c", "Muokkaa kuvatekstiä"),
                e("a8fdd09c", "Julkaise artikkeli"),
                e("d8047cc8", "Julkaise"),
                e("ff7ddca2", "Artikkelisi ilmestyy julkaisuna, kun olet julkaissut sen. Löydät sen myös profiilisi Artikkelit-välilehdeltä."),
                e("ef34d7be", "Yleisö- ja vastausvalintoja ei voi muuttaa artikkelin julkaisun jälkeen."),
                e("e52d4998", "Valitse yleisösi"),
                e("d7985b24", "Valitse, ketkä voivat vastata tähän artikkeliin"),
                e("b5660338", "Aikajanan esikatselu"),
                e("hff1b97a", "Vain tilaajat voivat vastata."),
                e("a330771e", "Kopioi linkki leikepöydällesi"),
                e("b6510e68", "Kopioi artikkelin URL jakoa varten."),
                e("e4a6e006", "Jokin meni pieleen. Yritä uudelleen."),
                e("eff483e0", "Kun olet julkaissut, poimi artikkelin jakolinkki."),
                e("ca15dd4e", "Luonnos");
            e("bb40bf66", "Julkaistu"),
                e("h107935c", "Tallennettu viimeksi nyt"),
                e("a753a870", "Käytä"),
                e("afccc67e", "Kopioi linkki artikkeliin"),
                e("beb24e9e", "URL kopioitu leikepöydälle"),
                e("db9cc928", "Poistetaanko artikkeli?"),
                e("c4e28ba6", "Tätä ei voi peruuttaa. Menetät artikkelin."),
                e("ff2982d0", "Artikkelisi poistetaan. Tätä ei voi kumota. Se poistetaan profiilistasi, sinua seuraavien tilien aikajanalta ja X:n hakutuloksista."),
                e("ca17beec", "Artikkelisi on poistettu"),
                e("f5cbb31c", "Poista artikkeli"),
                e("f0977f52", "Kyllä, poista"),
                e("db419d4c", "Esikatsele luonnostasi"),
                e("a1bc8e6c", "Näytä artikkeli"),
                e("b6f72a22", "Artikkelin julkaisu perutaan, ja artikkeli siirretään luonnoksiisi eikä enää näy julkisesti."),
                e("f558d2e0", "Peru, siirrä luonnoksiin"),
                e("e9473589", function (a) {
                    return "" + a.articleTitle;
                }),
                e("ib067d6a", "Valitse joko 1 GIF-kuva tai enintään 4 tavallista kuvaa."),
                e("eb7ab862", "Valitse enintään 4 kuvaa, videota tai GIFiä."),
                e("ce9a9736", "Tallennetaan..."),
                e("dd63549e", "Onnistui! Artikkelisi on julkaistu"),
                e("a4d128bc", "Onnistui! Artikkelisi on julkaistu ja linkki kopioitu leikepöydällesi"),
                e("b4071e18", "Artikkelin otsikko"),
                e("f586b7fa", "Lisää otsikko"),
                e("ab0fa9ba", "Palaa luonnoksiin muokataksesi"),
                e("c5f35c98", "Mediaa ladataan..."),
                e("d739d83e", "Peru lataus"),
                e("a94efeda", "Mediaa tallennetaan..."),
                e("gd79d45a", "Ottamalla fokustilan käyttöön saat keskittyä rauhassa kirjoittamiseen"),
                e("g1866bb2", "Palaa normaaliin editoriin poistumalla fokustilasta"),
                e("a6a78df4", "Artikkelisi tarvitsee otsikon ja sisällön ennen julkaisua."),
                e("ia656f1c", "Artikkelillasi on otsikko, mutta se tarvitsee sisällön ennen julkaisua."),
                e("d3855e36", "Artikkelisi tarvitsee otsikon ennen julkaisua."),
                e("f325958e", "Otsikkosi ylittää merkkirajan. Lyhennä sitä ja julkaise sitten."),
                e("ie5d9064", "Artikkelisi ylittää merkkirajan. Lyhennä leipätekstiä ja julkaise sitten."),
                e("e03487a0", "Otsikkosi ylittää merkkirajan ja artikkelisi ylittää sanamäärän. Lyhennä molempia ja julkaise sitten."),
                e("e938d562", "Artikkelisi ylittää merkkirajan. Lyhennä leipätekstiä ja julkaise sitten."),
                e("e449c546", "Artikkelisi tarvitsee otsikon, ja sen sanamäärä ylittää sallitun. Lisää otsikko, lyhennä leipätekstiä ja julkaise sitten."),
                e("bd00e836", "Viimeisintä luonnosta ei tallennettu, koska se ylittää merkkirajan."),
                e("ic110f68", "Viimeisintä luonnostasi ei tallennettu, koska se on liian pitkä."),
                e("ifea3114", "Jaa"),
                e("b384f696", "Suosittelemme otsikon pituudeksi 50—70 merkkiä"),
                e("a7da0adb", function (a) {
                    return a.count + " sana" + n(a.count, "", "a");
                }),
                e("aea1d455", function (a) {
                    return a.count + " minuutti" + n(a.count, "", "a");
                }),
                e("df898d71", function (a) {
                    return "Lukuaika " + a.readingTimeValue;
                }),
                e("i9aadf4a", "Tämä linkki voi olla virheellinen. Napsauta yhtä artikkeleista vasemmalla olevassa palkissa, jotta voit lukea tai muokata artikkelia tai julkaista sen."),
                e("hfdce46e", "Artikkelisi julkaisu on peruttu"),
                e("df079228", "Fokustila"),
                e("f5037228", "Suosittelemme kuvaa kuvasuhteella 5:2, jotta saat parhaat tulokset."),
                e("f965e890", "Luonnoksesi ovat täällä"),
                e("c2756718", "Julkaissut artikkelisi löytyvät täältä"),
                e("af65c854", "Muokkaa fokustilassa"),
                e("e05e2336", "Peru julkaisu, siirrä artikkeli luonnoksiin"),
                e("d36447e0", "Tämä on kirjoitusalue"),
                e("ca0ed982", "Jatka luonnoksena tai laadi uusi artikkeli"),
                e("ee9e42aa", "Kirjoita"),
                e("e9a50596", "Uuden luonnoksen luomisessa tapahtui virhe"),
                e("e070024a", "Muokkaa kuvaa"),
                e("i7d24b36", "Seuraava kuva"),
                e("f96a38a2", "Edellinen kuva"),
                e("hac7c548", "Rajaa mediaa"),
                e("e3dbfba4", "Muokkaa kuvan kuvausta"),
                e("dd4a83a6", "Sisältövaroitus"),
                e("ffe9ec3a", "Lisää kuvauksia"),
                e("j063b262", "Voit lisätä kuvauksen (alt-text) kuviisi saattaaksesi ne myös näkövammaisten käyttäjien saataville. Hyvä kuvaus on lyhyt ja antaa riittävästi tietoa kuvasta ja kontekstista."),
                e("e57144f0", "Kyllä"),
                e("f9f9210c", "Ei kiitos"),
                e("feabf2a0", "Vaihtoehtoinen teksti"),
                e("e36287c6", "Kuvaus"),
                e("cf565d08", "Mikä vaihtoehtoinen teksti on?"),
                e("d9f7b32a", "Lisää tähän julkaisuun sisältövaroitus"),
                e("ead1b80a", "Valitse luokka, niin me lisäämme tähän julkaisuun sisältövaroituksen. Se auttaa ihmisiä välttämään sisältöä, jota he eivät halua nähdä."),
                e("h2437f26", "Arkaluonteinen"),
                e("g5e1668a", "Ladattavissa"),
                e("fdc6a52a", "Kun tämä asetus on käytössä, videosi voidaan ladata."),
                e("fe09fde2", "Muuta asetuksia"),
                e("cd5cba97", function (a) {
                    return "Sisältövaroitus: " + a.formattedWarningList;
                }),
                e("h7215a76", "Julkaisun kirjoittaja ilmoitti tämän julkaisun sisältävän arkaluonteista sisältöä."),
                e("j32d345e", "Seuraavissa saattaa olla arkaluonteista aineistoa"),
                e("f1d9930c", "Piilota"),
                e("c91f83ae", "Muokkaa videota"),
                e("icbec4ae", "Lataa tekstitykset palveluun"),
                e("e0342f98", "Tekstitys"),
                e("e7048e74", "Editoi mediaa"),
                e("ga408160", "Seuraava video"),
                e("dc402134", "Edellinen video"),
                e("bf4e9d7a", "Lataa tekstitystiedosto (.srt)"),
                e("j435467e", "Voit lisätä videoosi tekstityksen lataamalla yhteensopivan tekstitiedoston palveluun. Tiedostomuodon on oltava SRT. Videon muokkaaminen ei vaikuta tekstityksiin."),
                e("a6b267fa", "Poista tekstitys"),
                e("a609edbe", "Laadi uusi julkaisu"),
                e("dc295bb0", "Yhteisössä julkaiseminen"),
                e("e536de22", "Julkaistaksesi sinun on liityttävä jäseneksi. Liity yhteisöön voidaksesi osallistua!"),
                e("cb817dae", "Muokkaa julkaisua"),
                e("bec9cff8", "Rekisteröidy X:ään"),
                e("c150ba68", "Tervetuloa!"),
                e("f8e2163e", "Haluatko kirjautua ensin sisään?"),
                e("a108c147", function (a) {
                    return "Haluatko seurata käyttäjää @" + a.screenName + "?";
                }),
                e("c66afdc3", function (a) {
                    return "Seuraa käyttäjää @" + a.screenName;
                }),
                e("feccfd6e", "Sinun on kirjauduttava sisään, ennen kuin voit seurata ketään."),
                e("dedce756", "Nyt voit tykätä julkaisusta."),
                e("ha5987e0", "Haluatko tykätä tästä julkaisusta?"),
                e("f98f4e00", "Sinun on kirjauduttava sisään, ennen kuin voit tykätä julkaisusta."),
                e("b459ba4c", "Sinun on kirjauduttava sisään, ennen kuin voit vastata tähän julkaisuun."),
                e("f3e1093a", "Nyt voit uudelleenjulkaista sen."),
                e("i1d8723c", "Haluatko uudelleenjulkaista tämän julkaisun?"),
                e("h19f38de", "Sinun on kirjauduttava sisään, ennen kuin voit tykätä julkaisusta."),
                e("e289d950", "Sinun on kirjauduttava sisään, ennen kuin voit jakaa julkaisun."),
                e("d28215f0", "Pahoittelut! Yhteisöissä ei sallita kyselyitä."),
                e("ec2fc089", function (a) {
                    return "julkaisu" + n(a.numOfTweets, "", "a") + " lähetettiin yhteisöön " + a.communityName;
                }),
                e("c7152355", function (a) {
                    return "Muista tehdä kuvasta saavutettava";
                }),
                e("ffa5562a", "Hyvät kuvien kuvailut ovat ytimekkäitä, mutta seikkaperäisiä. Tiivistä tai kirjoita kokonaan myös kuvassa näkyvä teksti."),
                e("a2d3facd", function (a) {
                    return "kuvailu" + n(a.numberOfImages, "si tekee", "asi tekevät") + " X:stä saavutettavan näkövammaisille ja lisää kontekstia kaipaaville.";
                }),
                e("cc6d0a48", "Voit poistaa tämän muistutuksen käytöstä saavutettavuusasetuksista."),
                e("j499fbcb", function (a) {
                    return "Lisää kuvaus" + n(a.numberOfImages, "", "ta");
                }),
                e("bb8170da", "Ei tällä kertaa"),
                e("h4dd544e", "Julkaisusi lähetettiin."),
                e("ice925ce", "Julkaisuasi on muokattu."),
                e("eae9e604", "Julkaisusi lähetettiin. Sinulla on 30 minuuttia aikaa muokata sitä."),
                e("gcdf3fd6", "Julkaisusi lähetettiin. Sinulla on 1 tunti aikaa muokata sitä."),
                e("c7999d10", "Julkaisusi lähetettiin."),
                e("b97f5eb2", "Julkaisua lähetetään…"),
                e("g08523f0", "Julkaisua lähetetään... kun se on julkaistu, voit muokata sitä 30 minuutin ajan."),
                e("fa53f95c", "Julkaisua lähetetään... kun se on julkaistu, voit muokata sitä 1 tunnin ajan."),
                e("a608b1b4", "Hylätäänkö julkaisu?"),
                e("j890123a", "Hylätäänkö ketju?"),
                e("af4d0a80", "Hylätäänkö muutokset?"),
                e("bb01231c", "Tätä ei voi peruuttaa. Menetät luonnoksen."),
                e("if69307c", "Jos lähdet, tekemiäsi muutoksia ei tallenneta."),
                e("d2c271f6", "Tallennetaanko julkaisu?"),
                e("abb90544", "Voit tallentaa tämän luonnoksiin myöhemmin lähettämistä varten."),
                e("d3bb6f30", "Huomaa: mediaan merkityt tilit eivät tallennu luonnokseen."),
                e("bf9b89e4", "Luonnoksesi on tallennettu."),
                e("i63bfbf0", "Pidä kiinni ajatuksesta"),
                e("a6c55352", "Videosi lataus on kesken. Haluatko varmasti hylätä julkaisusi? Menetät luonnoksen ja liitteet."),
                e("c3d89aca", "Jatka"),
                e("b983f9e0", "Huomio"),
                e("ed5c4342", "Pari huomioitavaa seikkaa ..."),
                e("abc4afcc", "Muokkausaika umpeutui"),
                e("a9a471fa", "Julkaisuja voi muokata vain 30 minuutin ajan niiden julkaisusta."),
                e("a3483f1c", "Julkaisuja voi muokata vain ensimmäisen tunnin ajan niiden julkaisusta."),
                e("g4bcc5f4", "Tämä on viimeinen muokkauksesi"),
                e("g922bf14", "Julkaisuasi ei voi enää päivittää."),
                e("f58b5009", function (a) {
                    return "Julkaisusi lähetetään " + a.scheduleDate + " klo " + a.scheduleTime;
                }),
                e("fa97f508", "Voit lisätä ketjuun lisää julkaisuja nämä lähetettyäsi."),
                e("c091760c", "Tätä muokkausta ei tallennettu. Voit kokeilla päivittää uudelleen tai hylätä muokkauksen ja aloittaa alusta."),
                e("d38504ad", function (a) {
                    return "Valitse enintään " + a.maxMediaCap + " kuvaa, videota tai GIFiä.";
                }),
                e("dd6734c2", "Lue lisää"),
                e("g589c2e2", "Vaihtoehto 1"),
                e("a1e6c3a2", "Vaihtoehto 2"),
                e("a739e006", "Vaihtoehto 3 (valinnainen)"),
                e("d89a5b92", "Vaihtoehto 4 (valinnainen)"),
                e("c2a8118e", "Poista kysely"),
                e("a8ede1de", "Lisää vaihtoehto"),
                e("af40a8e0", "Lisää"),
                e("caf8edc4", "Kyselyn pituus"),
                e("g93586be", "Päivää"),
                e("d073b644", "Aukioloajat"),
                e("a2f0728e", "Minuuttia"),
                e("c9f5ae0a", "Tallennettu luonnoksiin"),
                e("f0afcc0e", "Lisää kysely"),
                e("d39e3e78", "Ajasta julkaisu"),
                e("f6bab0da", "Julkaisun teksti"),
                e("cc2b28fc", "Liitteiden on oltava yhtä tyyppiä"),
                e("i6f7062c", "Lisää julkaisu"),
                e("j1d5791c", "Lisää vastaus"),
                e("e76f3776", "Poista julkaisu"),
                e("ec10ee02", "Kysely"),
                e("cce30dcc", "Merkitse sijainti"),
                e("ee016dd6", "Pitkän videon lataaminen kestää tovin. Muista olla sulkematta selaimen välilehteä, ettei lataus keskeydy."),
                e("b7d8e3f1", function (a) {
                    return a.numberOfAltTextEntries + " kuvan kuvaus" + n(a.numberOfAltTextEntries, "", "ta");
                }),
                e("d1175c78", "Merkitse henkilöitä"),
                e("b2943227", function (a) {
                    return "Lataa tekstitystiedosto" + n(a.numberOfVideos, "", "t") + " (.srt)";
                }),
                e("d0afbb37", function (a) {
                    return a.numberOfSubtitles + " tekstitystiedosto" + n(a.numberOfSubtitles, "", "a");
                }),
                e("e349147c", "Mitä tapahtuu?"),
                e("b4481d6c", "Kerro, mitä mielessäsi liikkuu..."),
                e("fbd24526", "Lisää toinen vastaus"),
                e("de4669e2", "Lisää kommentti"),
                e("ed1f39ec", "Julkaise vastauksesi"),
                e("a402b908", "Esitä kysymys"),
                e("ic05a146", "Otsikko"),
                e("d9c096f0", "Muodosta kuva"),
                e("d2553906", "Parantele julkaisua"),
                e("b85f402a", "Parantele julkaisua Grokin avulla"),
                e("e815fc34", "Valitse yleisö"),
                e("cf44066a", "Piiri"),
                e("c6992b94", "Premium Exclusive"),
                e("a5f7b700", function (a) {
                    return "" + a.formattedCount;
                }),
                e("a7daec1e", function (a) {
                    return "henkilö" + n(a.count, "", "ä");
                }),
                e("f0598964", "Haluatko jakaa pienemmälle porukalle?"),
                e("e1ae1c0a", "Piiri mahdollistaa julkaisujen lähettämisen vain valitsemillesi henkilöille."),
                e("eb969e30", "Näin piiri toimii"),
                e("bb55e8ee", "Lisää henkilöitä"),
                e("f1aedb7c", "Voit valita enintään 150 henkeä piiriisi."),
                e("b659fba8", "Julkaise vain heille"),
                e("c474be66", "Siitä vain – kerro ajatuksesi. Vain piirisi näkee julkaisusi ja voi vastata."),
                e("h031847a", "Tee muutoksia milloin tahansa"),
                e("bd9db21f", "Lue lisää"),
                e("gfca5254", "Säännöt"),
                e("f510c8b2", "Yhteisön säännöt"),
                e("g46f363e", "Lue Yhteisön säännöt ennen keskusteluun osallistumista"),
                e("f6fec9f6", "Poista kortin esikatselu"),
                e("b2df0574", "Jaa myös seuraajille"),
                e("ccfc7453", function (a) {
                    return "Kaikki seuraajasi käyttäjän @" + a.screenName + " piirissä voivat vastata";
                }),
                e("d4d17205", function (a) {
                    return "Kaikki käyttäjän @" + a.screenName + " piirissä voivat vastata";
                }),
                e("df961844", "Vain seuraajasi piirissä voivat vastata"),
                e("ce958ec8", "Vain piirisi voi vastata"),
                e("c7df589e", "Kaikki seuraajasi julkaisun kirjoittajan piirissä voivat vastata"),
                e("j65d7c72", "Kaikki julkaisun kirjoittajan piirissä voivat vastata"),
                e("i8ea6d4e", "Kuka tahansa voi vastata"),
                e("a176d0d8", "Seuraamasi tilit voivat vastata"),
                e("gc7e52ca", "Vain mainitsemasi tilit voivat vastata"),
                e("feb7560a", "Vain Tilaajat voivat vastata"),
                e("h257006e", "Lue tämän Yhteisön säännöt"),
                e("ebe1d850", "Vain tilaajasi voivat vastata"),
                e("b121464a", "Vain varmennetut tilit voivat vastata"),
                e("aa65a44a", "Muistamme valintasi tällä laitteella"),
                e("a4993fa2", "Lisää GIF-kuva"),
                e("bfb895b1", function (a) {
                    return "Julkaistaan " + a.date + " " + a.time;
                }),
                e("hb36f723", function (a) {
                    return "Vain ensimmäiset " + a.count + " merkkiä näkyvät aikajanalla.";
                }),
                e("d759c09e", "Kokeile"),
                e("e4472565", function (a) {
                    return "Ladattu (" + a.percent + " %)";
                }),
                e("a06fa8fd", function (a) {
                    return "Käsitellään (" + a.percent + " %)";
                }),
                e("h7f340e5", function (a) {
                    return "Ladataan (" + a.percent + " %)";
                }),
                e("daad8822", "Lataaminen epäonnistui"),
                e("i8ff6261", function (a) {
                    return "Tämä video näyttäisi ylittävän suurimman sallitun tiedostokoon (" + a.human_readable_max_size + "Gt).";
                }),
                e("cba4fdde", "Julkaise X:n käyttäjille 1080p-resoluutioisena"),
                e("c92702a0", "Tämä MP4-tiedosto saattaa olla viallinen. Se yritetään ladata, mutta joudut ehkä käyttämään toista videotiedostoa, jos lataus ei onnistu."),
                e("ef8f5d90", "Suositellut"),
                e("a7046fb0", "Harvoin tarpeen"),
                e("acf3ecf4", "Lisää mediasisältöä"),
                e("bdbcdd94", "Lisää kuvia"),
                e("f2c8c04d", "tehtävä julkaisuistasi julkisia"),
                e("b50e199a", function (a) {
                    return "" + a.userName;
                }),
                e("c3033e8a", function (a) {
                    return a.replyUserName + " ja " + a.otherUserName;
                }),
                e("e50dae2a", function (a) {
                    return a.userOneName + ", " + a.userTwoName + " ja " + a.userThreeName;
                }),
                e("h758cd23", function (a) {
                    return a.userOneName + " " + a.userTwoName + " ja " + n(a.othersCount, "1", "" + a.othersCount) + " muulle";
                }),
                e("fba61ad6", function (a) {
                    return "" + a.userName;
                }),
                e("ce87c872", function (a) {
                    return a.replyUserName + " ja " + a.otherUserName;
                }),
                e("b45fa506", function (a) {
                    return a.userOneName + " " + a.userTwoName + " ja " + a.userThreeName;
                }),
                e("b8168f25", function (a) {
                    return a.userOneName + " " + a.userTwoName + " ja " + n(a.othersCount, "1", "" + a.othersCount) + " muulle";
                }),
                e("ab67a7ac", function (a) {
                    return "" + a.userName;
                }),
                e("g571ef41", "Tilaajilleen"),
                e("d48d6476", function (a) {
                    return a.replyUserName + " ja " + a.otherUserName;
                }),
                e("i9451241", "Tilaajilleen"),
                e("hdf48104", function (a) {
                    return "" + a.userOneName + a.userTwoName + " ja " + a.userThreeName;
                }),
                e("dcbb6a0b", "Tilaajilleen"),
                e("ba74e38b", function (a) {
                    return a.userOneName + " " + a.userTwoName + " ja " + n(a.othersCount, "1", "" + a.othersCount) + " muulle";
                }),
                e("c65916af", "Tilaajilleen"),
                e("g5c5ebb8", function (a) {
                    return "" + a.userName;
                }),
                e("b86ff336", function (a) {
                    return "" + a.userName;
                }),
                e("e0af5609", function (a) {
                    return a.userOneName + " ja " + a.userTwoName;
                }),
                e("ae834d19", function (a) {
                    return "" + a.trustedFriendsTweetOwner;
                }),
                e("g3d6f043", function (a) {
                    return a.userOneName + " ja " + a.userTwoName;
                }),
                e("ade845a5", function (a) {
                    return "" + a.trustedFriendsTweetOwner;
                }),
                e("ef5386dc", function (a) {
                    return a.userOneName + " " + a.userTwoName + " ja " + a.userThreeName;
                }),
                e("acd17e4b", function (a) {
                    return "" + a.trustedFriendsTweetOwner;
                }),
                e("g1ee3d90", function (a) {
                    return a.userOneName + " " + a.userTwoName + " ja " + a.userThreeName;
                }),
                e("f6da070f", function (a) {
                    return "" + a.trustedFriendsTweetOwner;
                }),
                e("a035ba65", function (a) {
                    return a.userOneName + " " + a.userTwoName + " ja " + n(a.othersCount, "1", "" + a.othersCount) + " muulle";
                }),
                e("e4c52c45", function (a) {
                    return "" + a.trustedFriendsTweetOwner;
                }),
                e("baf2c639", function (a) {
                    return a.userOneName + " " + a.userTwoName + " ja " + n(a.othersCount, "1", "" + a.othersCount) + " muulle";
                }),
                e("j8e134e5", function (a) {
                    return "" + a.trustedFriendsTweetOwner;
                }),
                e("c14cdb18", "Mainosta"),
                e("f11264ac", "Lisää maksutapa"),
                e("j619ec94", "Mainosta julkaisua"),
                e("h1fcb36c", "Mainosta julkaisuasi"),
                e("fd22cfe0", "mainosohjelman ehdot"),
                e("i3656b52", "Paljonko rahaa haluat käyttää?"),
                e("h7c29de6", "Arvioitu tavoittavuus"),
                e("hd435bf1", function (a) {
                    return a.audienceLow + "—" + a.audienceHigh + " ihmistä";
                }),
                e("i976aff4", "Päivitä päiväbudjetin tiedot vastaamaan laskutusvaluuttaa."),
                e("e1e912f2", "Julkaisusi on julkaistu, mutta emme kyenneet tehostamaan sitä. Sinua ei veloiteta."),
                e("fe26420a", "Lisää hakusanoja"),
                e("aacfbe55", function (a) {
                    return "Julkaiset tilin @" + a.screenName + " nimissä.";
                }),
                e("ga8627cd", function (a) {
                    return "Vastaat tilin @" + a.screenName + " nimissä.";
                }),
                e("e6d2573f", function (a) {
                    return "Lähetät viestiä tilin @" + a.screenName + " nimissä";
                }),
                e("d37a3e15", function (a) {
                    return "Luot tätä listaa tilin @" + a.screenName + " nimissä.";
                }),
                e("ceb1ad26", "Esittelyssä ladattavat videot"),
                e("ea97bc08", "Pidä omanasi tai salli versiointi! Premium-käyttäjillä on nyt mahdollisuus ladata ja uudentaa sisältöäsi. Jos et halua, että videosi ovat ladattavissa, napauta ”Muokkaa” videossasi. Määräät itse sisältösi saatavuuden."),
                e("e6042757", function (a) {
                    return a.minutes + " minuutti" + n(a.minutes, "", "a") + " ja " + a.seconds + " sekunti" + n(a.seconds, "", "a") + " jäljellä muokata julkaisua";
                }),
                e("a4e39717", function (a) {
                    return a.minutes + " minuutti" + n(a.minutes, "", "a") + " jäljellä muokata julkaisua";
                }),
                e("c55eed72", "Vastauksena käyttäjälle"),
                e("caca3102", "Muut tässä keskustelussa"),
                e("c6a6dc2f", function (a) {
                    return "Olet estänyt käyttäjän @" + a.screenName + ", joten hän ei saa ilmoitusta, kun vastaat.";
                }),
                e("f5b426c2", "Ladataan käyttäjiä"),
                e("c20dc654", "Voit merkitä enintään 10 ihmistä."),
                e("ae0831ab", function (a) {
                    return "Käyttäjää @" + a.screenName + " ei voi merkitä kuviin";
                }),
                e("cca7fa72", "Ajastetun julkaisun poisto ei onnistunut."),
                e("c5dd0190", "Aika"),
                e("edeff232", "Päivämäärä"),
                e("fddf24b4", "Aikavyöhyke"),
                e("d39dc06e", "Et voi ajastaa julkaisua julkaistavaksi menneisyydessä."),
                e("d024efe2", "Et voi ajastaa julkaisua julkaistavaksi yli 18 kuukauden kuluttua."),
                e("d15af6da", "Joidenkin lähettämättömien julkaisujen poisto ei onnistunut."),
                e("a1e1b748", "Valitsemasi lähettämättömät julkaisut poistettiin."),
                e("ce80fba0", "Ladataan lähettämättömiä julkaisuja"),
                e("i5d56b62", "Etkö ole valmis julkaisemaan ihan vielä? Tallenna julkaisu luonnoksiin tai ajasta se myöhemmälle."),
                e("aef6257e", "Poistetaan lähettämättömiä julkaisuja"),
                e("dce0bc34", "Lähettämättömät julkaisut"),
                e("f8464692", "Ajastettu"),
                e("e8bd47f2", "Valitse kaikki"),
                e("j2b145d4", "Poista kaikki valinnat"),
                e("h6c79ac2", "Hylkää lähettämättömät julkaisut"),
                e("d0a4a03c", "Tätä ei voi peruuttaa. Menetät lähettämättömät julkaisut."),
                e("f9f69d32", "Lähetys epäonnistui"),
                e("j74e5dd4", "Julkaisu, johon yrität vastata, on poistettu"),
                e("c5ceafc8", "Vastauksena"),
                e("f501ba43", function (a) {
                    return a.count + " julkaisu" + n(a.count, "", "a") + " lisää";
                }),
                e("b321d0cc", "Lataa kuvat"),
                e("abd649ce", "Hylkää lähettämätön julkaisu"),
                e("c7d42978", "Tätä ei voi peruuttaa. Menetät luonnosjulkaisun."),
                e("e43a5528", "Jokin meni pieleen, eikä lähettämättömän julkaisun poisto onnistunut."),
                e("e7c766ee", "Sijaintipalvelut on poistettu käytöstä"),
                e("ab68727a", "Voit ottaa ne käyttöön laitteesi asetuksista."),
                e("ae4057a2", "Sijainnin määritys ei onnistu"),
                e("bf2923a6", "Tarkista laitteesi asetukset."),
                e("d963d1b6", "Paikkoja ei löytynyt"),
                e("a893d602", "Ok"),
                e("be6cc44e", "Hae sijainteja"),
                e("d8ef3232", "Sijaintien nouto epäonnistui"),
                e("b01ed2db", function (a) {
                    return a.distance + " mi";
                }),
                e("i83e29e1", function (a) {
                    return a.distance + " ft";
                }),
                e("d4b7cff7", function (a) {
                    return a.distance + " km";
                }),
                e("b211849f", function (a) {
                    return a.distance + " m";
                }),
                e("fd391b9f", function (a) {
                    return "Upota " + a.entity;
                }),
                e("e1618e49", function (a) {
                    return "Seurasit käyttäjää @" + a.screenName;
                }),
                e("ge5067bc", "Piilota vastaus"),
                e("j136c720", "Vastaus piilotettu julkaisusta"),
                e("d66f0338", "Julkaisuihisi tulleiden vastausten piilottaminen"),
                e("cfc8cb50", "Jotta sinulla on enemmän valtaa hallita aloittamiasi keskusteluja, voit julkaisun kirjoittajana piilottaa julkaisuihisi tulleita vastauksia."),
                e("if8dc5f0", "Piilotetut vastaukset siirtyvät erilliselle sivulle, jota kuka tahansa voi katsella napauttamalla julkaisun piilotettu vastaus -kuvaketta."),
                e("b2615c6d", function (a) {
                    return "Estetäänkö @" + a.screenName + " myös?";
                }),
                e("i62a03aa", "Ei"),
                e("f9f27fa2", "Piilota julkaisu"),
                e("ce87916a", "Lisää kohokohtiin / poista kohokohdista"),
                e("eaae42ce", "Lisätäänkö kohokohtiin?"),
                e("h032d096", "Poistetaanko kohokohdista?"),
                e("be38d25e", "Tämä julkaisu näytettäisiin profiilisi Kohokohdat-välilehdellä."),
                e("d2be9310", "Tämä julkaisu poistettaisiin profiilisi Kohokohdat-välilehdeltä."),
                e("jea6b076", "Kohokohtiin lisääminen onnistui."),
                e("ce6fd0ec", "Kohokohdista poisto onnistui."),
                e("ha35a1d2", "Kiinnitä profiiliisi"),
                e("d04f95c0", "Julkaisusi kiinnitettiin profiiliisi."),
                e("i419d136", "Kiinnitetäänkö julkaisu profiiliisi?"),
                e("c1b9714a", "Tämä näkyy profiilisi yläosassa ja korvaa mahdollisen aiemmin kiinnitetyn julkaisun."),
                e("fe4d099a", "Kohokohtiin"),
                e("e8d4c1cc", "Julkaisujen lisääminen kohokohtiin on saatavana vain tilaajille. Hanki tilille varmennus saadaksesi tämän ja muita ominaisuuksia käyttöösi."),
                e("b68c3784", "Hanki varmennus"),
                e("bb16cc76", "Poistu keskustelusta"),
                e("de21174c", "Olet poistunut tästä keskustelusta"),
                e("j33c9fc6", "Jään sittenkin"),
                e("aed79c54", "Voit poistua keskustelusta"),
                e("h12044a4", "Aina ei tee mieli lähteä mukaan. Keskustelusta poistuminen..."),
                e("f100e566", "poistaa käyttäjätunnuksesi merkinnät"),
                e("a0d68f4e", "Käyttäjänimi jää näkyviin, mutta merkintä poistetaan alkuperäisestä julkaisusta ja kaikista vastauksista."),
                e("b00255b6", "lopettaa maininnat"),
                e("geea29ee", "Sinua ei enää voi mainita tässä keskustelussa."),
                e("c54678e8", "lopettaa ilmoitukset"),
                e("ga4fa180", "Et enää saa ilmoituksia, mutta näet keskustelun edelleen."),
                e("h8dde772", "Kenellekään ei ilmoiteta, jos poistut keskustelusta."),
                e("ee87e71c", "Et voi hiljentää itseäsi."),
                e("ed428a76", "Et ole hiljentänyt valittua käyttäjää."),
                e("e2d6c17e", "Hiljennä tämä keskustelu"),
                e("cd1942f4", "Poista tämän keskustelun hiljennys"),
                e("bbd8bed6", "Tämän keskustelun ilmoitukset on hiljennetty"),
                e("c13af432", "Tämän keskustelun ilmoitusten hiljennys on poistettu"),
                e("df744bda", "Hiljennä tämä"),
                e("j9552760", "Hiljennä keskustelu"),
                e("d751694c", "Kun hiljennät keskustelun, et saa siitä uusia ilmoituksia."),
                e("a50c911e", "Julkaisusi on kiinnitetty ja lisätty kohokohtiin."),
                e("d1c1e2c2", "Kiinnitä Yhteisössä"),
                e("j832cc34", "Tämä näkyy Yhteisön kärjessä."),
                e("h7dbb2f2", "Tämä näkyy Yhteisön kärjessä ja korvaa mahdollisen aiemmin kiinnitetyn julkaisun."),
                e("d8725596", "Yhteisön moderaattorien kiinnittämä"),
                e("f5cdcc2c", "Tämä mainos ei kiinnosta minua"),
                e("c2e276e4", "Aseta kirjoittajalle porttikielto Yhteisöön"),
                e("a95f04ba", "Haluatko varmasti poistaa kuvamerkinnän tästä julkaisusta?"),
                e("jfc76958", "Poista merkintä kuvasta"),
                e("j4e43d8b", function (a) {
                    return "Ilmianna " + a.entity;
                }),
                e("e3fd237e", "Ilmianna mainos"),
                e("d1e21610", "Ilmoita NetzDG-lain rikkomisesta"),
                e("d7513755", function (a) {
                    return "Hae käyttäjän @" + a.screenName + " julkaisuista tässä Yhteisössä";
                }),
                e("d7dbb71b", function (a) {
                    return a.followType + "–" + a.screenName;
                }),
                e("ja66a2b5", function (a) {
                    return "Lopeta käyttäjän @" + a.screenName + " seuraaminen";
                }),
                e("c2423b7b", function (a) {
                    return "Lopetit käyttäjän @" + a.screenName + " seuraamisen";
                }),
                e("i31dfa4c", "Peru vastauksen piilotus"),
                e("j8e56ba2", "Vastauksen piilotus peruttu"),
                e("ic030338", "Irrota profiilista"),
                e("gfcea3f4", "Irrotetaanko julkaisu profiilista?"),
                e("eb2d59f4", "Tämä ei enää näy automaattisesti profiilisi yläosassa."),
                e("a2dd7414", "Julkaisusi irrotettiin profiilistasi"),
                e("cac6a24a", "Poista kiinnitetty julkaisu"),
                e("i642edc4", "Tämä julkaisu ei enää näy Yhteisön syötteen kärjessä."),
                e("f9478972", "Näytä piilotetut vastaukset"),
                e("c5491b5d", function (a) {
                    return "Näytä " + a.entity + "toiminnat";
                }),
                e("haebcf52", "Sinua ei enää voi mainita tässä keskustelussa, etkä saa enempää ilmoituksia."),
                e("c837fcaa", "Näytä lisää vastauksia"),
                e("d228a9a0", "Näytä lisää"),
                e("g0b48670", "Tässä keskustelussa on niin paljon vastauksia, ettei kaikkia voida näyttää."),
                e("d9b417c4", 'Valitse asetus "ei kiinnosta"'),
                e("c29d6806", "Lakkaa suosittelemasta"),
                e("ge8f3043", function (a) {
                    return "Seuraa aihetta " + a.topicName;
                }),
                e("aa576cbf", function (a) {
                    return "Lopeta aiheen " + a.topicName + " seuraaminen";
                }),
                e("i77347d1", function (a) {
                    return "Hylkää aihe " + a.topicName;
                }),
                e("d69b2d90", "Tämä aihe ei kiinnosta sinua."),
                e("je808a17", function (a) {
                    return a.topicName + " aihe";
                }),
                e("ic6aa5f4", "Todennettu."),
                e("c02e7e3c", "Ladataan..."),
                e("c5453f28", "Round of 64"),
                e("eb256a86", "Round of 32"),
                e("g77adc66", "Sweet Sixteen"),
                e("a6d2520c", "Sweet 16"),
                e("g5b63eb6", "Elite Eight"),
                e("d8bf2890", "Elite 8"),
                e("f9d3d6f2", "Final Four"),
                e("bda24f7c", "Final 4"),
                e("i5043440", "Kansallinen mestaruus"),
                e("fcb16026", "Mestaruus"),
                e("e9c89ee8", "Itä"),
                e("h259fd86", "Länsi"),
                e("a7b2545a", "Etelä"),
                e("fdf7819a", "Keskilänsi"),
                e("i899e9b0", "Lähetä turnauskaavio"),
                e("c5b04394", "Näytä valinnat"),
                e("h836bbae", "Näytä turnaus"),
                e("e1059d6c", "1. kierros"),
                e("b1602be4", "2. kierros"),
                e("ef7bc2c0", "20.–21.3."),
                e("h726aaf2", "22.–23.3."),
                e("ee7cd198", "27.–28.3."),
                e("fed91402", "29.–30.3."),
                e("aba0a450", "5.4."),
                e("jdfba2dc", "7.4."),
                e("b7c6bc12", "Vahvistetaan myöhemmin"),
                e("c373612c", "Valinta:"),
                e("e8b3cab9", function (a) {
                    return "" + a.winner;
                }),
                e("j5db9ddd", " voittaa, "),
                e("a638617d", function (a) {
                    return "" + a.loser;
                }),
                e("j4c40da4", "Lähetä nyt"),
                e("b23688c8", "Twiitin kumoamisaika"),
                e("cca5d499", function (a) {
                    return "Kerro käyttäjästä " + a.selectedText + " lauseella tai parilla.";
                }),
                e("d231a76a", "Voita 100 000 USD parhaalla kaaviolla 🏀"),
                e("heaba5d8", "Suunnittele college-koripallon turnauskaaviosi X:ssä. Täysin oikealla kaaviolla voittaa matkan Marsiin!"),
                e("i57d3ea0", "Säännöt ovat voimassa"),
                e("a0440af6", "Luo turnauskaavio"),
                e("aaad27c8", "Tekijä"),
                e("eb748f7e", "Näytä julkaisukohtaiset tilastot"),
                e("b7cff250", function (a) {
                    return "" + a.displayCoins;
                }),
                e("g62dcfbc", function (a) {
                    return "kolikko" + n(a.count, "", "a");
                }),
                e("be059f7e", "Tavoita nyt jopa 100 000 käyttäjää enemmän"),
                e("c34f845e", "Kokeile julkaisun tehostusta!"),
                e("c37102aa", "Tavoita tänään yli 100 000 käyttäjää, joita sisältösi luultavasti kiinnostaisi."),
                e("ac245c4c", "Tehosta näkyvyyttä nyt"),
                e("e4db6326", "Ehkä myöhemmin"),
                e("g6237a1e", "Kampanja käynnissä"),
                e("d6b5949e", "Promootio keskeytetty"),
                e("ffd9cfe6", "Näe lisää"),
                e("d172116a", "Löydä uutta"),
                e("be5df69e", "Lisää julkaisuja"),
                e("g11ebd34", "Lisää ehdotuksia"),
                e("g4a6901a", "Selaa"),
                e("h6453e74", "Selaa julkaisuja"),
                e("je506a60", "Vaihda käyttäjätunnus"),
                e("c0fcb08a", "Jos muutat käyttäjätunnusta, väkänen ja affiliaattimerkinnät poistetaan väliaikaisesti, kunnes ne on tarkistettu."),
                e("d1f6d336", "Käyttäjätunnus"),
                e("de65c756", "Ehdotukset"),
                e("ebeeac1a", "Vaihda sähköpostiosoite"),
                e("dc013356", "Nykyinen"),
                e("ea28c7ce", "Ladataan sähköpostin asetuksia"),
                e("f3f66252", "Lisää sähköpostiosoite"),
                e("i5107de4", "Päivitä sähköpostiosoite"),
                e("d19fd42a", "Lähetä vahvistussähköposti uudelleen"),
                e("g4da3246", "Sähköposti lähetetty. Tarkista saapuneet-kansiostasi vahvistuslinkki."),
                e("h021352f", function (a) {
                    return "" + a.resendConfirmationLabel;
                }),
                e("d241169c", "Nykyinen salasana"),
                e("a9bc3044", "Uusi salasana"),
                e("b8c03cfc", "Vahvista salasana"),
                e("b731d32c", "Salasanan vaihto onnistui."),
                e("d555d7e0", "Uusi salasana ei voi olla sama kuin nykyinen salasanasi."),
                e("fa8af9ae", "Salasanat eivät täsmää."),
                e("a03f5c73", function (a) {
                    return a.applicationCount + " sovellus" + n(a.applicationCount, "", "ta");
                }),
                e("j25601d9", "Lue lisää"),
                e("cb841d56", "Vaihda puhelinta"),
                e("ce37ea44", "Lisää puhelinnumero"),
                e("ibaf239e", "Päivitä puhelinnumero"),
                e("j2636558", "Poista puhelinnumero"),
                e("e49b16d4", "Poistetaanko puhelinnumero?"),
                e("i931719e", "Tämä poistaa tämän numeron tilisi tiedoista, etkä enää voi saada siihen ilmoituksia tai kirjautumiskoodeja."),
                e("j841d1f4", "Puhelin on poistettu."),
                e("fe8b565a", "Tämä poistaa puhelinnumeron tältä tililtä, etkä enää saa ilmoituksia X:ltä tekstiviesteinä. Lisäksi tämä poistaa kaksivaiheisen todennuksen käytöstä tililtä."),
                e("hf45b8d4", "Tämä poistaa puhelinnumeron tältä tililtä, etkä enää saa ilmoituksia X:ltä tekstiviesteinä. Lisäksi tämä poistaa tekstiviestit käytöstä kaksivaiheisen todennuksen välineenä tältä tililtä."),
                e("bc262c2e", "Muut tavat"),
                e("hc1a91da", "Varakoodit"),
                e("e4fed8f0", "Saa kertakäyttöisiä varakoodeja, joilla voit kirjautua sisään X:ään, jos kaksivaiheisen tunnistuksen välineet eivät ole käytettävissäsi."),
                e("b39c7b14", "Poistetaanko kirjautumisen varmennus käytöstä?"),
                e("a923fce6", "Kaksivaiheisen tunnistuksen poistaminen käytöstä heikentää tilisi suojausta. Haluatko varmasti poistaa sen käytöstä?"),
                e("ff781e0a", "Poistetaanko tämä käytöstä?"),
                e("c557ac30", "Haluatko varmasti kytkeä tämän tavan pois käytöstä?"),
                e("d133464a", "Tämän kytkeminen pois käytöstä poistaa tämän kaksivaiheisen todennustavan tililtäsi. Haluatko kytkeä sen pois käytöstä?"),
                e("ee3a7bfa", "Poista käytöstä"),
                e("aa9139cc", "Varmenna sisäänkirjautumispyynnöt"),
                e("jc22dd42", "Kirjauduttuasi sisään X lähettää X-sovellukseen ilmoituksen, joka sinun tulee hyväksyä käyttääksesi tiliäsi."),
                e("a219e218", "OK"),
                e("e0d79de8", "Tiliisi on liitetty vain yksi suojausavain. Varmista, ettet jää ilman pääsyä tilille jos kadotat avaimen, lisäämällä toinen avain ja tallentamalla kaksivaiheisen tunnistuksen varmennuskoodi."),
                e("ja6bbfa0", "Ladataan sisäänkirjautumisen varmennusdataa"),
                e("c2570922", "Tekstiviesti"),
                e("fba9483c", "Vastaanota varmennuskoodi matkapuhelimeesi tekstiviestinä, kun kirjaudut X:ään."),
                e("ab61b41a", "Varmennesovellus"),
                e("a67c7d68", "Tuota varmennuskoodi mobiilivarmennesovelluksella joka kerta X:ään kirjautuessasi."),
                e("h6d0d89c", "Suojausavain"),
                e("b3e5c946", "Käytä suojausavainta, joka asetetaan tietokoneen liitäntään tai synkronoidaan mobiililaitteeseen, kun kirjaudut X:ään. Sinun on käytettävä tuettua mobiililaitetta tai verkkoselainta."),
                e("cd195528", "Lisää uusi suojausavain"),
                e("a1860ee8", "Tilapäinen salasana"),
                e("j45a2856", "Luo kertakäyttöinen salasana, jota voit käyttää kolmannen osapuolen palveluissa."),
                e("d8612d9c", "Ota tekstiviesti tai varmennesovellus ensin käyttöön"),
                e("e13d4468", "Ennen kuin voit ottaa suojausavaimen käyttöön, sinun on otettava käyttöön kaksivaiheinen todennus joko tekstiviestin tai varmennesovelluksen välityksellä."),
                e("c1d96d6a", "Olet lisännyt enimmäismäärän avaimia"),
                e("gf91694e", "Sinun on poistettava avain ennen uuden lisäämistä."),
                e("j265ddb6", "Vahvista sähköposti"),
                e("a7cfdf1c", "Ottaaksesi käyttöön kaksivaiheisen todennuksen sinun on liitettävä tähän X-tiliin sähköpostiosoite ja vahvistettava se, niin että tiedämme sen olevan varmasti sinun."),
                e("d7bfde1a", "Näyttää siltä, että tilisi on tällä hetkellä jäädytetty. Et voi ottaa kaksivaiheista tunnistusta käyttöön, kun tilisi on jäädytetty."),
                e("g268fbb8", "Tämä tili on varmennettu henkilötodistuksella."),
                e("f66d24be", "Ohjekeskus"),
                e("c8255462", "Piilota Tunnistautunut-merkintä"),
                e("c6e731ee", "Piilota Tunnistautunut-merkintä, jolloin muut käyttäjät eivät näe sitä napauttaessaan profiilisi varmennusmerkkiä."),
                e("be582166", "Tunnistautuminen henkilötodistuksella voi auttaa suojaamaan tiliäsi huijareilta ja sen myötä profiiliisi tulee Tunnistautunut-merkintä."),
                e("b496bc94", "Tarkistamme henkilöllisyystodistustasi. Saat ilmoituksen, kun meillä on kerrottavaa!\n\nKun se on hyväksytty, saat Tunnistautunut-merkinnän profiiliisi. Näin ihmiset tietävät, että henkilöllisyytesi tilin omistajana on tarkistettu."),
                e("d8f5cce4", "Tunnistautumispyyntöjen raja on ylitetty. Odota 24 tuntia, ennen kuin yrität uudelleen."),
                e("i8427a1e", "Tälle tilille ei voi saada tunnistautumista henkilötodistuksella. Se on tarjolla vain henkilökohtaisille Premium-tilaajille."),
                e("cdc65e89", function (a) {
                    return a.title + " (valinnainen)";
                }),
                e("h05c1f28", "Varmenna tilisi viranomaisen myöntämällä henkilötodistuksella. Tähän menee noin 5 minuuttia."),
                e("j8cfcc62", "Hyväksyn sen, että X ja Au10tix käyttävät kuvia henkilötodistuksestani ja selfietäni sekä niistä poimittuja biometrisiä tietoja henkilöllisyyteni tarkistamiseen sekä osana X:n turvatoimia, kuten toisena esiintymisen estämistä. Au10tix saattaa säilyttää näitä tietoja enintään 30 päivän ajan."),
                e("c4930cb6", "Tarvitset:"),
                e("ac7bb0fe", "Ota viranomaisen myöntämä henkilötodistus valmiiksi esiin"),
                e("c12ce69c", "Tarkista, että laitteesi kamera toimii eikä sitä ole peitetty"),
                e("c5bfe94a", "Ole valmis ottamaan selfie ja kuvaamaan henkilötodistuksesi"),
                e("e5b7dd84", "Alku"),
                e("abfaa528", "Ohita"),
                e("e4fed511", "X Premium ‑palvelun"),
                e("def518fa", "Sisällöntuottajien tilaukset"),
                e("f61cda83", "Osuus mainostuloista"),
                e("g1952008", "Sisällöntuottajien tilaukset"),
                e("e5d0419c", "Sisällöntuottajien tulonjako"),
                e("g3723480", "Sisällöntuottajien tilaukset"),
                e("c776f523", "Osuus mainostuloista"),
                e("ab9f38f8", "Sisällöntuottajien tilaukset"),
                e("d5cab8b0", "Sisällöntuottajien tulonjako"),
                e("deaf5b16", "Yritä uudelleen"),
                e("g1a4a1b6", "Tunnistautumisvirhe"),
                e("e24305e4", "Tunnistautumisistuntosi ehti vanheta tai se oli muuten virheellinen. Yritä uudelleen."),
                e("f7954a0c", "Ladataan suojausavaindataa"),
                e("h69986c2", "Voit nimetä suojausavaimia uudelleen tai poistaa niitä."),
                e("i5896ba2", "Lisää toinen avain"),
                e("a8ef2b64", "Nimetön suojausavain"),
                e("d4e220b4", "Nimi"),
                e("g6d0f0b6", "Hallitse suojausavainta"),
                e("b894f68a", "Ladataan suojausavaindataa"),
                e("g2601bb6", "Nimeä avain uudelleen"),
                e("b464b726", "Poista avain"),
                e("a4101e1b", function (a) {
                    return "Lisäyspäivä: " + a.securityKeyAddedDate;
                }),
                e("i3bb3f78", "Varmennuskoodi"),
                e("ec6a76e0", "Luo uusi varmennuskoodi"),
                e("f2c3c31c", "Kopioi koodi"),
                e("e8016b64", "Ladataan varmennuskoodia"),
                e("c4ca22bc", "Jos et syystä tai toisesta pääse laitteellesi, voit todistaa henkilöllisyytesi tällä koodilla."),
                e("f20ff69f", "Lue lisää"),
                e("j2327f80", "Tilapäinen salasana"),
                e("fbfeaf8e", "Luo uusi salasana"),
                e("h4a8bd12", "Kopioi salasana"),
                e("g247dc1c", "Ladataan tilapäistä salasanaa"),
                e("h3a32f52", "Käytä tätä tilapäistä salasanaa (välilyönnit valinnaisia) kirjautuaksesi X:ään sovelluksissa ja laitteilla."),
                e("d70fceac", "Tämä salasana umpeutuu tunnin kuluttua."),
                e("j924d222", "Vaihda maata"),
                e("e9310157", "Lue lisää"),
                e("bd5ac12e", "Valitse, millä kielellä haluat otsikoiden, painikkeiden ja muiden X:n tekstien näkyvän tällä tilillä. Tämä ei vaikuta siihen, minkä kielistä sisältöä näet aikajanallasi."),
                e("cef33711", function (a) {
                    return a.languageName + " (beta)";
                }),
                e("b033248c", "Löydettävyys"),
                e("c69b4798", "Päätä, saavatko ihmiset, joilla on sähköpostiosoitteesi tai puhelinnumerosi, löytää ja tavoittaa sinut X:ssä."),
                e("eca117e6", "Anna ihmisten, joilla on sähköpostiosoitteesi, löytää sinut X:ssä"),
                e("acd36386", "Anna ihmisten, joilla on sähköpostiosoitteesi, löytää ja tavoittaa sinut X:ssä."),
                e("gd8511ca", "Anna ihmisten, joilla on puhelinnumerosi, löytää sinut X:ssä"),
                e("eca935ec", "Anna ihmisten, joilla on puhelinnumerosi, löytää ja tavoittaa sinut X:ssä."),
                e("ac77c66c", "Yhteystiedot"),
                e("jadf483e", "Hallitse yhteystietoja, jotka olet tuonut mobiililaitteiltasi."),
                e("b864be7a", "Poista kaikki yhteystiedot"),
                e("g5fa1090", "Poistetaanko kaikki yhteystiedot?"),
                e("h3e420fc", "Tämä poistaa kaikki aiemmin lataamasi yhteystiedot ja poistaa synkronoinnin X:lle käytöstä kaikilla laitteilla. Huomaa, että tämä kestää jonkin aikaa, joten saatat nähdä vielä poistamisen aikana (yhteystietoihisi perustuvia) ehdotuksia X:stä."),
                e("ca24589e", "Ei nimeä"),
                e("d439b1c1", "Lue lisää"),
                e("fe36fe10", "Vahvista salasana"),
                e("hccd9dbe", "Kirjoita salasanasi saadaksesi tämän."),
                e("df1ddda4", "Julkaisuihisi lisäämäsi sijaintimerkinnät eivät enää näy X.comissa tai iOSin tai Androidin X-sovelluksissa. Näiden päivitysten voimaan tulemiseen voi mennä hetki."),
                e("ed7fa034", "Laitteesi sijaintipalvelut on poistettu käytöstä. Voit ottaa ne käyttöön laitteen asetuksista."),
                e("e80e4288", "Poista kaikki sijaintitiedot julkaisuistasi"),
                e("b0ee8ab6", "Poistetaanko kaikki sijaintitiedot julkaisuistasi?"),
                e("e23b2991", "Lue lisää"),
                e("gd758534", "Salli ihmisten merkitä sinut kuviinsa ja saa ilmoitukset merkinnöistä."),
                e("a90af44e", "Piilota arkaluonteinen sisältö"),
                e("a25e2ec6", "Poista estetyt ja hiljennetyt tilit"),
                e("b827a058", "Turvallisen haun asetukset on päivitetty."),
                e("b27c9852", "Jokin meni pieleen turvallisen haun asetusten päivittämisessä."),
                e("j3402d7e", "Tämä poistaa mahdollisesti arkaluonteista sisältöä sisältävät julkaisut hakutuloksistasi."),
                e("if05bca6", "Tällä voit poistaa hakutulokset tileiltä, jotka olet estänyt tai hiljentänyt."),
                e("bc7fd990", "Ladataan Suositut-asetuksia"),
                e("e2f16650", "Näytä sisältö tässä sijainnissa"),
                e("e5e88f40", "Kun tämä on käytössä, näet, mitä lähelläsi tapahtuu juuri nyt."),
                e("i4d54b0e", "Suosittuja aiheita"),
                e("ad431584", "Näytä minulle hauskoja Grokin tarinoita"),
                e("df9f03c8", "Personoi näkemäsi puheenaiheet sijaintisi ja seuraamiesi käyttäjien perusteella."),
                e("c6cf5c7e", "Voit räätälöidä suosittuja puheenaiheita sijaintisi ja seuraamiesi käyttäjien perusteella."),
                e("e09358ba", "Katso tuoreimmat tarinat X:stä Grokin hupailutilassa"),
                e("a55db872", "Personointi"),
                e("a58170fc", "Grokin tarinat"),
                e("h0b5152e", "Vaihda sijaintia"),
                e("dfeada5e", "Selaa sijainteja"),
                e("ac854308", "Käytäntö"),
                e("d429c942", "Suosittujen puheenaiheiden käytäntö Yhdysvaltain vaalien yhteydessä"),
                e("ede134f2", "Määritä, käynnistyvätkö videot ja GIF-kuvat automaattisesti tällä laitteella."),
                e("b3aab6d4", "Sijainnit"),
                e("e53e05e4", "Ladataan sijainteja"),
                e("d5c9174f", function (a) {
                    return a.location + ", " + a.country;
                }),
                e("b47d123d", function (a) {
                    return "SÄÄSTÄ " + a.percentage + " %";
                }),
                e("c6614cc0", "plus mahdollinen vero"),
                e("f8d3b50a", "sisältää verot"),
                e("i2c32253", function (a) {
                    return a.price + "/kuukausi";
                }),
                e("c41e1023", function (a) {
                    return a.price + " / vuosi";
                }),
                e("i57aeafb", function (a) {
                    return "Ensimmäis" + n(a.duration, "en", "ten " + a.duration) + " kuukauden ajan, sen jälkeen " + a.standardPrice + " kuukausittain";
                }),
                e("ae3e3723", function (a) {
                    return "Ensimmäis" + n(a.duration, "en", "ten " + a.duration) + " vuoden ajan, sen jälkeen " + a.standardPrice + " vuosittain";
                }),
                e("ade4c757", function (a) {
                    return "Sen jälkeen " + a.price + " / kk";
                }),
                e("f7798e11", function (a) {
                    return "Sen jälkeen " + a.price + " / vuosi";
                }),
                e("e0b39888", "Veloitus kuukausittain"),
                e("b67c37de", "Veloitus vuosittain"),
                e("a8363765", function (a) {
                    return a.price + ", veloitus vuosittain";
                }),
                e("df3ed1c8", function (a) {
                    return "" + a.standardPrice;
                }),
                e("g261b098", function (a) {
                    return "" + a.standardPrice;
                }),
                e("af66a072", "Ennen kuin menet, mieti vielä, mitä jäät kaipaamaan"),
                e("a092f1ba", "Peru silti"),
                e("g96c7f48", "Vaihda eri tasoon"),
                e("iccac88e", "Sinulle- ja Seurataan-aikajanat puolilla mainoksilla"),
                e("d7a124d8", "Ei mainoksia"),
                e("d2d22c36", "Grokin käyttö"),
                e("j249b1d4", "Vastausten tehostus"),
                e("c4a37384", "Pidemmät julkaisut"),
                e("fb656858", "Julkaisujen muokkaus"),
                e("faaec212", "Julkaisuilla ansaitseminen"),
                e("fb3c7168", "Kirjanmerkkikansiosi"),
                e("b346bc12", "Valintamerkki"),
                e("je8143e1", function (a) {
                    return "Saa " + a.percentage + " % alennusta tuotteesta X " + a.productName + " " + n(a.duration, "yhden", "" + a.duration) + " kuukauden ajan";
                }),
                e("j5847735", function (a) {
                    return "Saa " + a.percentage + " % alennusta tuotteesta X " + a.productName + " " + n(a.duration, "yhden", "" + a.duration) + " vuoden ajan";
                }),
                e("da3431f9", function (a) {
                    return "Tämä alennus on lahja sinulle, jos päätät jatkaa X " + a.productName + ":n käyttäjänä vähän kauemmin!";
                }),
                e("i6fbfc72", "Erikoistarjous"),
                e("f1bc6309", function (a) {
                    return "Säilytä täysi käyttöoikeus kaikkiin X " + a.productName + " ominaisuuksiin";
                }),
                e("fdb7b52a", "Saat alennuksen seuraavasta laskutusjaksosta alkaen."),
                e("af283938", function (a) {
                    return "" + a.standardPrice;
                }),
                e("c284b365", function (a) {
                    return "" + a.discountedPrice;
                }),
                e("e2673372", function (a) {
                    return "" + a.standardPrice;
                }),
                e("jd2dc103", function (a) {
                    return "" + a.discountedPrice;
                }),
                e("c6150942", "Valmista tuli"),
                e("a905eac6", "Tutustu Premium"),
                e("j6083a1c", "Hallitse tilaustasi"),
                e("b4fa4630", "Päivitä maksutapa"),
                e("ef0dfa5a", "Päivitä laskutustiedot"),
                e("f5b352ec", "Peru tilaus"),
                e("j317d958", "Huomaa – menetät tuloillaan olevan alennuksen"),
                e("a46e42d2", "Säilytä tilaus"),
                e("e122fb3f", function (a) {
                    return "Maksuton kokeilu päättyy " + a.endDate + ".";
                }),
                e("be103b84", "Aktiivinen"),
                e("ace43720", "Umpeutuu pian"),
                e("c8f18aa4", "Saat Premium+:n, koska olet Varmennetut organisaatiot -tilaaja."),
                e("a341d1f7", function (a) {
                    return "Saat Premium+:n, koska organisaatiosi on Varmennetut organisaatiot -tilaaja tilin @" + a.organization + " kautta. Kysy lisätietoja omalta organisaatioltasi.";
                }),
                e("e4aaf0f8", "Jos haluat perua sinulle myönnetyn Premium-ilmaistilauksen, ota yhteys tukeen"),
                e("e5170220", "Tälle tilille myönnettiin Premium-tilaus mainosten ostamisen perusteella."),
                e("j6d6b66e", "Tämä tili sai tilauksen lahjana. Ota yhteys tukeen tilauksen perumiseksi"),
                e("fae1751f", function (a) {
                    return "Näyttää siltä, että olet tehnyt tämän tilauksen X:n " + a.mobilePlatform + "-sovelluksessa. Tilausta voi muuttaa ja sen voi perua vain samassa sovelluksessa.";
                }),
                e("fecebd4c", "täällä"),
                e("h201c4c2", "iOS"),
                e("i8385a2c", "Android"),
                e("h80834de", "muu"),
                e("baf97716", "Toiminnallisuudet ovat käytettävissäsi jäljellä olevan laskutusjakson ajan."),
                e("ae864b69", function (a) {
                    return "Tilausmallisi on " + a.tierName + " alkaen seuraavasta laskutusjaksosta " + a.date;
                }),
                e("edbb700f", function (a) {
                    return "Alkaa seuraavasta laskutusjaksosta " + a.date;
                }),
                e("e9884540", "Alennus voimassa"),
                e("bfb879aa", "Tuleva alennus"),
                e("f8321d82", "Kaikki"),
                e("eb233866", "Tuotu"),
                e("d23b0404", "Kun estät jonkun, hän ei voi seurata sinua tai lähettää viestejä sinulle, etkä sinä saa ilmoituksia hänestä."),
                e("e0a7e9bc", "Estä ei-toivotut tilit"),
                e("ef731b14", "Ladataan estettyjä tilejä"),
                e("e554ba83", "Lue lisää"),
                e("if594962", "Estetty"),
                e("i2b9632e", "Eston poisto onnistui."),
                e("g51a96de", "Kun estät käyttäjän, hän ei enää voi seurata sinua tai lähettää sinulle viestejä, etkä näe ilmoituksia häneltä. Voit tuoda listan tileistä, jotka haluat estää X:ssä."),
                e("j035733c", "Olet aloittamassa X-tilisi deaktivoinnin. Näyttönimesi, @tunnuksesi ja julkinen profiilisi eivät enää näy X.comissa tai iOSin tai Androidin X-sovelluksissa."),
                e("j4a29d52", "Voit palauttaa X-tilisi käyttöön 30 päivän ajan tilin käytöstä poistamisesta, jos tili on poistettu erehdyksessä tai ilman lupaa."),
                e("ea989810", "Poista tili käytöstä"),
                e("f6e73faa", "Poista käytöstä"),
                e("c3743328", "Tämä poistaa tilisi käytöstä"),
                e("a20cd24e", "Mitä muuta on hyvä tietää"),
                e("e93b0ae0", "Viimeistele pyyntö tilin käytöstä poistamiseksi antamalla salasana."),
                e("fc025d1d", "Lue lisää"),
                e("bb5e039c", "asetuksissa"),
                e("j37efff6", "vaihda ne"),
                e("ce5bfe12", "X-tietosi"),
                e("g7088266", "Muokkaa profiilia"),
                e("d9d293b8", "Verkkosivusto"),
                e("cb469ff6", "Nimi ei voi olla tyhjä"),
                e("g511f468", "Käyttäjäkuvakkeesi ei päivittynyt, sillä osa mediasisällöstä ei latautunut"),
                e("ec3a116e", "Bannerisi ei päivittynyt, sillä osa mediasisällöstä ei latautunut."),
                e("j94599ec", "Lisää käyttäjäkuva"),
                e("df31d76a", "Lisää bannerikuva"),
                e("c01a0e1a", "Vahvistatko syntymäajan?"),
                e("df2c469a", "Vaihda ammattilaistiliin"),
                e("e1f76978", "Muokkaa ammattilaisprofiilia"),
                e("ic04a6f6", "Tätä ei voi peruuttaa. Menetät muutokset."),
                e("addbe8e8", "Kannattaa harkita nimeä, jossa ei ole erikoismerkkejä, jotta nimi on helpommin näkövammaistenkin ymmärrettävissä."),
                e("a46f80ab", function (a) {
                    return "Syntynyt " + a.birthdate;
                }),
                e("c7905f89", function (a) {
                    return "Syntynyt " + a.year;
                }),
                e("bfe8d1a2", "Muokkaa laajennettua kuvausta"),
                e("e1ec926e", "Laadi laajennettu kuvaus"),
                e("c119dee8", "Syntymäaika"),
                e("bbf0afc8", "Lisää syntymäaika"),
                e("f98d367e", "Muutetaanko syntymäaikaa?"),
                e("d3f43300", "Tätä voi muuttaa vain muutaman kerran. Annathan tiliä käyttävän henkilön iän."),
                e("g10411f0", "Tämän tulee olla tiliä käyttävän henkilön syntymäaika, vaikka kyseessä olisi yritystili, tapahtumatili tai tili kissallesi."),
                e("a0c5e370", "Kuka näkee tämän?"),
                e("i68fe54e", "Kuukausi ja päivä"),
                e("b4e729b6", "Vuosi"),
                e("f3bb1b48", "Poistetaanko syntymäaika?"),
                e("c9cb9972", "Tämä poistaa sen profiilistasi."),
                e("a2bef112", "Poista syntymäaika"),
                e("c37622ec", "Kirjoita kelvollinen päivämäärä"),
                e("f679d166", "Seuraajasi"),
                e("af293dc2", "Seuraamasi henkilöt"),
                e("h99b6d08", "tietosuojakäytäntömme"),
                e("hce7a225", "Lue lisää"),
                e("e9603d88", "Näytä vahvistetun puhelinnumeron merkki"),
                e("ada99498", "Tämä merkki näytetään vain oman alueesi käyttäjille."),
                e("a765e936", "Poista laajennettu kuvauksesi"),
                e("d4d68e44", "Tallennettu"),
                e("ie4f57d2", "Uusi Premium-tilauksesi"),
                e("h293aa52", "Premium-tilauksesi on umpeutumassa!"),
                e("j1923668", "Pidä X:n parhaat puolet."),
                e("ac7e97ee", "Uusi tilaus"),
                e("f70c69b4", "Vastausten tehostus, julkaisun muokkaus, kustomointi, pidemmät julkaisut ja paljon muuta."),
                e("f4cec4d2", "Sininen valintamerkki, vastausten tehostus, korkeampi Grokin käyttöraja ja paljon muuta."),
                e("b6de83a0", "Huone vain työntekijöille"),
                e("g3f251f2", "Yksityinen lähetys"),
                e("d08666ba", "Yksityinen Huone"),
                e("eadb5a46", "Liity ensimmäisenä"),
                e("f9629a8f", function (a) {
                    return "Käyttäjän " + a.hostName + " lähetys";
                }),
                e("ia3c0ab7", function (a) {
                    return "Käyttäjän " + a.hostName + " Huone";
                }),
                e("hd552761", function (a) {
                    return a.hostName + " juontaa";
                }),
                e("c3ea19a5", function (a) {
                    return a.index + "/" + a.total;
                }),
                e("a5235305", function (a) {
                    return a.listOfPeople + " liittyi";
                }),
                e("df9f8243", function (a) {
                    return a.name + " kuuntelee";
                }),
                e("g2445c2f", function (a) {
                    return a.name + " puhuu";
                }),
                e("fcfd5a67", function (a) {
                    return a.name + " juontaa Huonetta";
                }),
                e("f7882829", function (a) {
                    return a.name + " toimii co-hostina";
                }),
                e("d961a4a0", "Livenä X:ssä"),
                e("g2c0144a", "Varmennetut organisaatiot"),
                e("cd5cdec8", "Hallitse mainoskrediittejä"),
                e("f23b6a72", "Jäljellä mainoskrediittejä"),
                e("i969d5de", "Pane mainoskampanja pystyyn"),
                e("d0924f58", "Pyydä apua ongelmaan"),
                e("j8d53b64", "Näytä kaikki ominaisuudet"),
                e("jd26f2a6", "Lisää affiliaatteja"),
                e("e0a492e6", "Hallitse avoimia paikkoja"),
                e("d9cbd02c", "Hakemuksesi on käsittelyssä"),
                e("ed4759a6", "Saat kuulla ratkaisumme hakemukseesi muutaman päivän kuluessa. Saatamme pyytää lisätietoja sähköpostitse."),
                e("dad69faa", "Päivitä maksutapasi"),
                e("daf3248a", "Hakemus on kesken"),
                e("eb71036f", function (a) {
                    return "Lataa ja varmenna organisaatiosi dokumentit " + a.date + " mennessä";
                }),
                e("a1d3f1f2", "Yhteistyökumppanimme Persona tarkistaa henkilöllisyytesi ja yritysasiakirjasi X:n tietoturvatarkoituksiin. Persona säilyttää tietojasi enintään 30 päivän ajan."),
                e("ea8c295a", "Aloita dokumenttien varmennus"),
                e("da1aa48f", function (a) {
                    return "Varmennettu tili on ulospäin uskottavampi ja näkyvämpi, kuten käyttäjällä @" + a.screenName + ".";
                }),
                e("e4a7a968", "Tiliäsi ei ole varmennettu"),
                e("id9c1e82", "Tämä profiili on varmennettu"),
                e("d43b0edc", "Liity Varmennettujen piiriin"),
                e("d4ea0ed4", "Saa tilille sininen tunnus"),
                e("cffeaeae", "Hanki tilille varmennus"),
                e("b8e930fe", "Suosittua juuri nyt"),
                e("ae05f268", "Suositut puheenaiheet eivät ole saatavilla."),
                e("c6b51af8", "Onko X sinulle uusi?"),
                e("ie8e1ffc", "Rekisteröidy nyt, niin saat itsellesi räätälöidyn aikajanan"),
                e("fd6473fa", "Ladataan seuraamissuosituksia"),
                e("a526aa66", "Uusia seurattavia"),
                e("ef625010", "Saattaisit tykätä"),
                e("b7388a56", "Alatunniste"),
                e("hdabc3fc", "Käyttöehdot"),
                e("bc6efc72", "Yksityisyyskäytäntö"),
                e("h3161192", "Evästekäytäntö"),
                e("a7de64de", "Tietoa mainoksista"),
                e("jb0a4c36", "Blogi"),
                e("ce6d095a", "Työpaikat"),
                e("e0adec82", "Brändiresurssit"),
                e("df1b7550", "Markkinointi"),
                e("he258678", "X yrityksille"),
                e("c6f58084", "Kehittäjät"),
                e("d83f18d2", "Hakemisto"),
                e("hc5aa17c", "Hanki X-sovellus"),
                e("j0693948", "Hanki Grok-sovellus");
            e("fbf83158", "Varoitus: maksu epäonnistui"),
                e("jadeb4da", "Päivitä maksutapatietosi viipymättä, jotta et menetä tilausetujasi."),
                e("bce3726a", "Päivitä laskutustiedot"),
                e("fce9ecce", "Ehdotetut videot"),
                e("efe6ef9e", "Katso julkaisu"),
                e("b3d183ce", "Julkaisu vastauksineen"),
                e("c299a6c0", "Ketju"),
                e("h3d5d79e", "Yhteisöjulkaisu"),
                e("cfe877ca", "Valitse seurattavia"),
                e("e06b864c", "Tämä keskustelu näyttää olevan mieleesi"),
                e("a078ff70", "Haluatko nähdä enemmän sisältöä niiltä ihmisiltä, joiden kanssa keskustelit tässä ketjussa? Ala lukea sisältöä uusilta tileiltä."),
                e("cb80300e", "Siirry etusivun aikajanalle"),
                e("ea5cd098", "Siirry suosittuihin puheenaiheisiin"),
                e("c67e3fc2", "Etusivun aikajana"),
                e("d601fc20", "Uusimmat"),
                e("j43f99be", "Relevanssi"),
                e("ad6e11ac", "Vastausten lajittelutapa"),
                e("b2311b70", "Tätä sisältöä ei näytetä sinulle"),
                e("j88f27d8", "Merkityksellisiä henkilöitä"),
                e("i31dcd22", "Artikkeli"),
                e("e3de2f6f", function (a) {
                    return a.entity + " lisättiin kirjanmerkkeihisi";
                }),
                e("e64de8a9", function (a) {
                    return a.entity + " poistettiin kirjanmerkeistäsi";
                }),
                e("d6d9aab6", "Lisää fonttikoko"),
                e("bb89cf46", "Poista kirjanmerkki"),
                e("a739d4ba", "Lisää kirjanmerkkikansioon"),
                e("d5270434", "Poistu"),
                e("ac85c6b2", "Kuvaa ladattaessa tapahtui virhe"),
                e("b327c12a", "Kuva"),
                e("ic76bdf0", "Luo oma versio Grokin avulla"),
                e("a4d3eb67", function (a) {
                    return a.fullName + ' X:ssä: "' + a.tweetText + '"';
                }),
                e("f0701753", function (a) {
                    return "Piilota " + a.number + " päivän ajaksi";
                }),
                e("j7d0e836", "Laajenna"),
                e("d227d19e", "Pienennä"),
                e("h367e724", "Laajennettu kuvaus"),
                e("ea5928d4", "Sinussa on enemmän kuin yksi puoli. Niin myös profiilissasi.\nLisää laajennettu kuvaus profiiliisi kertoaksesi enemmän itsestäsi."),
                e("h7ef9dc8", "Tämä voi sisältää:"),
                e("c04ba4b4", "Asioita, joita olet työstänyt ja haluat esitellä"),
                e("d7666008", "Legendaarinen pastareseptisi"),
                e("cb24ee16", "Työkokemus ja ammatilliset toiveet"),
                e("a1c93d74", "Näyttää siltä, että muutostesi tallentamisessa on ongelmia. Yritä myöhemmin uudelleen."),
                e("b956c04a", "Haluatko varmasti poistaa laajennetun kuvauksesi?"),
                e("ifb23caa", "Laajennetun kuvauksen poistamalla poistat sen profiilistasi."),
                e("c2333081", function (a) {
                    return a.count + " merkki" + n(a.count, "", "ä");
                }),
                e("a2b8c54c", "Poistettu"),
                e("a9cc8f96", "Merkkimäärä ylittyi"),
                e("eb7710f1", function (a) {
                    return a.years + " v";
                }),
                e("bfc38bb5", function (a) {
                    return a.months + " kk";
                }),
                e("h6a724ac", "Haluatko varmasti poistaa tämän?"),
                e("f94aacae", "Jos poistat sen, se poistetaan profiilistasi."),
                e("je07e266", "Piilotettu"),
                e("a622dfcc", "Työhistoria"),
                e("a6ec7ff8", "kuvaus"),
                e("eeb6d22c", "kokemus"),
                e("eba5a8ec", "Työtehtävä"),
                e("fd20adb8", "Työskentelen täällä parhaillaan"),
                e("cd3059f2", "Alkamispäivä"),
                e("b86019ae", "Päättymispäivä"),
                e("eedfd35c", "Yritys"),
                e("caa46e54", "Yrityksen nimi"),
                e("e893fe6e", "Luo yritys"),
                e("j1c09ca4", "Yrityksen sivusto"),
                e("hd332c96", "Työtehtävä on pakollinen."),
                e("d2fb1b80", "Yritys on pakollinen"),
                e("b3590132", "Alkamis- ja päättymispäivät ovat pakolliset"),
                e("debb6abe", "Alkamispäivä ei voi olla tulevaisuudessa"),
                e("j7d08ada", "Päättymispäivä ei voi olla tulevaisuudessa"),
                e("a8c7d3fc", "Päättymispäivän on oltava alkamispäivän jälkeen"),
                e("b335d507", function (a) {
                    return "Enimmäismerkkipituus " + a.maxChars + " on ylittynyt";
                }),
                e("j29ab120", "Hiljennä ilmoitukset henkilöiltä:"),
                e("jdfc82f6", "Joita et seuraa"),
                e("cfcda0e6", "Jotka eivät seuraa sinua"),
                e("c75b9b2a", "Joilla on uusi tili"),
                e("f39b9c9e", "Joilla on oletusprofiilikuva"),
                e("d227f940", "Jotka eivät ole vahvistaneet sähköpostiosoitettaan"),
                e("b210936e", "Jotka eivät ole vahvistaneet puhelinnumeroaan"),
                e("ed0df10b", "Lue lisää"),
                e("dcef34ac", "Päälle"),
                e("a39f706e", "Selaimesi ei tue push-ilmoituksia"),
                e("h4f20d0e", "Vastaanota push-ilmoituksia nähdäksesi, mitä on tekeillä, kun et ole X:ssä. Voit poistaa ne käytöstä milloin tahansa."),
                e("cdce0394", "Tämä valinta on voimassa jokaiselle tässä selaimessa käyttämällesi tilille."),
                e("b39bcae2", "Ota push-ilmoitukset käyttöön"),
                e("b50f6144", "Vastaanota ilmoituksia välittömästi ottamalla käyttöön push-ilmoitukset. Saat niitä myös, kun et ole X:ssä. Voit poistaa ne käytöstä milloin tahansa."),
                e("fe11b3ea", "Ei-tuettu selain"),
                e("a1245d3a", "Näyttää siltä, ettei selaimesi tue push-ilmoituksia."),
                e("f580c738", "Otetaanko ilmoitukset käyttöön?"),
                e("i951fbcc", "Saadaksesi ilmoituksia X:ltä sinun on sallittava ne selaimesi asetuksista."),
                e("ec7cb554", "Ottamalla käyttöön julkaisuilmoitukset seuraamiltasi käyttäjiltä saat ilmoituksia heidän julkaisuistaan ja live-videoistaan."),
                e("b68050dc", "Näytä käyttäjät"),
                e("af045060", "Sinuun ja julkaisuihisi liittyvät"),
                e("cf378ff8", "X:ltä"),
                e("f823bbbe", "Vain varmennetuille tileille"),
                e("a40e37f2", "Tilaamalla sähköpostit pysyt ajan tasalla ollessasi poissa X:stä. Voit poistaa viestit käytöstä milloin tahansa."),
                e("e8eb54a0", "Viikkoraportit tilistäsi"),
                e("ib80b0f2", "Uudet ilmoitukset"),
                e("ba58e6b0", "Sinulle sähköpostilla lähetetyt julkaisut"),
                e("fae2c81a", "Suosituimmat julkaisut ja tarinat"),
                e("f7b09bb4", "Tietoa julkaisujesi tehosta"),
                e("d3978554", "Uutisia X:n tuotteiden ja ominaisuuksien päivityksistä"),
                e("bdccb81c", "Vinkkejä X:n hyödyntämiseen"),
                e("c3d47fe6", "Asioita, jotka ovat menneet sinulta ohi viime kirjautumisesi jälkeen"),
                e("af8caf3e", "Uutisia X:stä kumppanituotteissa ja muissa kolmannen osapuolen palveluissa"),
                e("hc076ee4", "Osallistuminen X-kyselytutkimuksiin"),
                e("ddfe3776", "Ehdotuksia suositelluista tileistä"),
                e("d17ba8c2", "Ehdotuksia vastikään seuraamiesi tilien perusteella"),
                e("bcf50a1a", "Vinkkejä X:n yrityskäyttöön"),
                e("fcad1e2e", "Päivittäin"),
                e("h9e0dfde", "Viikoittain"),
                e("e26d98ac", "Ajoittain"),
                e("h0c94842", "Ole perillä asioista"),
                e("c460d332", "Kun otat tilin julkaisuilmoitukset käyttöön, saat tietää, kun käyttäjä julkaisee, siirtyy Live-tilaan tai avaa Huoneen."),
                e("a820d092", "Ladataan seurattuja"),
                e("ha45c9e4", "Julkaisuilmoitukset"),
                e("bdbf8f4e", "Kirjoita sana tai lause"),
                e("h43e2ea8", "Hiljennetty sana"),
                e("da8c0440", "Hiljennä keneltä"),
                e("defb4aaa", "Keneltä tahansa"),
                e("e7d47b00", "Henkilöiltä, joita et seuraa"),
                e("d9d6e10e", "Kesto"),
                e("gfa5008e", "Pidennä hiljennysaikaa"),
                e("c5595dfe", "Muuta hiljennysaikaa"),
                e("he6804e0", "Kunnes poistat sanan hiljennyksen"),
                e("a268406c", "24 tuntia"),
                e("fc638aa2", "7 päivää"),
                e("b8971cfa", "30 päivää"),
                e("cc7bedfc", 'Voit muuttaa hiljennyksen kestoa. Jos olet aiemmin valinnut "Pysyvästi", uuden ajan mittaaminen alkaa heti.'),
                e("d768049c", "Lisää hiljennetty sana"),
                e("c6203da8", "Hiljennettyjen sanojen valinta"),
                e("e3f0d3db", function (a) {
                    return 'Hiljennetty "' + a.keyword + '"';
                }),
                e("h5746cf7", function (a) {
                    return 'Päivitetty "' + a.keyword + '"';
                }),
                e("d2693eb8", "Varmista, että hiljennetty ilmaus on enintään 140 merkkiä."),
                e("f8488024", "Tämä sana on melko yleinen ja esiintyy monissa julkaisuissa, mutta voit toki hiljentää sen halutessasi."),
                e("deb4924d", "Lue lisää"),
                e("aa09e528", "Lisää hiljennettäviä sanoja"),
                e("e506aa92", "Lisää hiljennetty sana tai lause"),
                e("cbd04965", function (a) {
                    return 'Poistetty ilmauksen "' + a.keyword + '" hiljennys';
                }),
                e("eb4e810a", "Vanhentunut"),
                e("cabeb6c2", "Pysyvästi"),
                e("f9bce916", "Hiljennä sanoja"),
                e("gfe0ee3b", "Lue lisää"),
                e("ba4aaa9e", "Poistetaanko ilmauksen hiljennys?"),
                e("f837ed7e", "Ilmaus on nyt sallittu saamissasi ilmoituksissa ja aikajanallasi."),
                e("a6194d10", "Ladataan hiljennettyjä tilejä"),
                e("bcf6ad9a", "Julkaisut hiljennetyiltä tileiltä eivät näy etusivun aikajanallasi. Voit hiljentää tilin suoraan käyttäjän profiilista tai julkaisusta."),
                e("b8e49590", "Kun hiljennät tilejä, kyseisen tilin viestit suodatetaan ja siirretään alimmaksi viestipyyntölistallasi."),
                e("ec202165", "Lue lisää"),
                e("gde6b425", function (a) {
                    return a.name + " on hiljennetty";
                }),
                e("e308019b", function (a) {
                    return "Käyttäjän " + a.name + " hiljennys on poistettu";
                }),
                e("hfb77cf6", "Turvallisuus"),
                e("f350f0c0", "Suositukset"),
                e("fd3369a2", "Valitse, millä kielillä haluat julkaisu-, käyttäjä- ja puheenaihesuosituksia."),
                e("hfc86556", "Hiljennetty"),
                e("dae57a42", "Salli kaikki"),
                e("i7cbc154", "Salli osa"),
                e("d623aecc", "Jaa tili toisten kanssa ja delegoi heille määrätyt roolit."),
                e("f3029d5c", "Kun tämä asetus on käytössä, ihmiset voivat kutsua sinut oman tilinsä käyttäjiksi."),
                e("cd1305e8", "Salli muiden kutsua sinut tililleen"),
                e("j339ef22", "Salli kenen tahansa kutsua sinut"),
                e("g4b0c2dc", "Salli vain seuraamiesi ihmisten kutsua sinut"),
                e("d9aef256", "Delegointisi"),
                e("afb3ccf6", "Älä salli"),
                e("dfae5248", "Älä salli muiden kutsua sinua tililleen?"),
                e("b9c91524", "Et jatkossa saa kutsuja muihin delegointeihin. Käyttöoikeutesi olemassa oleviin delegointeihin säilyy."),
                e("c349b958", "Kutsu jäsen"),
                e("e177f72a", "Kutsu muita ihmisiä toimimaan tilisi nimissä ja hallitsemaan tilin rooleja. Jäsenet voivat lähettää yksityisviestejä, julkaista julkaisuja ja laatia Listoja – sekä katsella niitä."),
                e("cd5c5e73", function (a) {
                    return "Sinulla voi olla enintään " + a.numDelegatesLabel + " delegaatti" + n(a.numDelegates, "", "a");
                }),
                e("efee0a50", "Kutsu jäsen tälle tilille"),
                e("ja0a1aa6", "Kutsu tekijä tälle tilille"),
                e("db4f623a", "Määrää rooli tälle jäsenelle"),
                e("be7350e3", function (a) {
                    return "Tehdäänkö käyttäjästä @" + a.screenName + " ylläpitäjä?";
                }),
                e("b7aa7642", "Kutsu lähetetty"),
                e("edbca224", "Lähetä kutsu"),
                e("f4834ca6", "Kutsu toinen jäsen"),
                e("cb04a824", "Tekijä"),
                e("d4b3abde", "Tekijät voivat lähettää yksityisviestejä, julkaista julkaisuja ja luoda Listoja. Tekijät voivat myös katsella tilin yksityisviestejä, julkaisuja ja Listoja."),
                e("b92e2700", "Ylläpitäjillä on samat käyttöoikeudet kuin tekijöillä. He voivat lisäksi kutsua tekijöitä ja poistaa heitä sekä tarkastella julkaisukohtaisia tilastoja."),
                e("hbbbf908", "Ylläpitäjät voivat kutsua tälle tilille muita tekijöitä ja tarkastella julkaisukohtaisia tilastoja. Tarkista, että olet määräämässä roolia oikealle henkilölle."),
                e("d8eda249", function (a) {
                    return "Kun @" + a.screenName + " hyväksyy kutsun, hän voi osallistua tämän tilin toimiin päivitettyjen käyttöoikeuksien rajoissa.";
                }),
                e("b5faf216", "Tämä jäsen ei salli delegointikutsuja."),
                e("hcc3b4ce", "Tämä jäsen on tilisi estämä."),
                e("ace0f0a4", "Tämä jäsen on rajoittanut, ketkä voivat kutsua hänet delegointitehtäviin."),
                e("c2e8f726", "Ylläpitäjät"),
                e("fade0942", "Ylläpitäjät voivat lisäksi kutsua tilille tekijöitä ja poistaa heitä sekä tarkastella julkaisukohtaisia tilastoja."),
                e("b7d6e5d6", "Tekijät"),
                e("cd76a282", "Jäseniä ei ole vielä lisätty"),
                e("db25d796", "Muuta tämän jäsenen roolia"),
                e("e4133790", "Rooli päivitetty"),
                e("a1a27c26", "Muuta roolia"),
                e("fd7b1b1c", "Palaa takaisin"),
                e("ec67d021", function (a) {
                    return "@" + a.screenName + " voi toimia tämän tilin edustajana uusia käyttöoikeuksiaan käyttäen.";
                }),
                e("h502484e", "Odottava kutsu"),
                e("a171ca7c", "Peru jäsenkutsu"),
                e("f68f079c", "Vaihda roolia"),
                e("b2794e9e", "Poista ryhmästä"),
                e("gca83d6a", "Käyttäjältä poistetaan ylläpitäjän rooli tällä tilillä."),
                e("b8cac21c", "Käyttäjältä poistetaan tekijän rooli tällä tilillä."),
                e("hd67c2e8", "Peru kutsu"),
                e("f0bd8ca9", function (a) {
                    return "Poistetaanko @" + a.screenName + "?";
                }),
                e("a33eba47", function (a) {
                    return "Peru käyttäjän @" + a.screenName + " kutsu?";
                }),
                e("d472c9eb", function (a) {
                    return "@" + a.screenName + " poistettu ryhmästä";
                }),
                e("h5951997", function (a) {
                    return "Käyttäjän @" + a.screenName + " kutsu peruttu";
                }),
                e("a44c6034", "Odottavat kutsut"),
                e("e39bc936", "Jäsenenä voit lähettää yksityisviestejä, julkaista julkaisuja ja laatia Listoja – sekä katsella niitä. Ylläpitäjät voivat lisäksi kutsua tilille tekijöitä ja poistaa heitä sekä tarkastella julkaisukohtaisia tilastoja."),
                e("h0d3bddc", "Ylläpidon käyttöoikeus"),
                e("c54aafb0", "Tekijän käyttöoikeus"),
                e("idc35f32", "Sinulle ei ole delegoitu yhtään roolia muiden tileillä"),
                e("fab787b4", "Jätä tili"),
                e("bfbe9620", "Näytä jäsenet"),
                e("d52a2b36", "Et enää ole ylläpitäjä tällä tilillä."),
                e("df515932", "Et enää ole tekijä tällä tilillä."),
                e("cd00ea21", function (a) {
                    return "Poistutaanko tililtä @" + a.screenName + "?";
                }),
                e("efa88ab1", function (a) {
                    return "Jätit tilin @" + a.screenName;
                }),
                e("c6dae164", "Hyväksy kutsu"),
                e("f8376170", "Torju kutsu"),
                e("a68c45e4", "Torju"),
                e("aa35b48d", function (a) {
                    return "Torjutaanko kutsu käyttäjältä @" + a.screenName + "?";
                }),
                e("ed2a4b05", function (a) {
                    return "Hylkäsit jäsenkutsun tilille @" + a.screenName;
                }),
                e("e73f9635", function (a) {
                    return "Hyväksyit jäsenkutsun tilille @" + a.screenName;
                }),
                e("d2da668c", "Delegoi rooleja"),
                e("ddf27b8e", "Kutsu tekijä"),
                e("jba63182", "Tarkastele tilin jäsenten rooleja. Jäsenet voivat lähettää yksityisviestejä, julkaista julkaisuja ja laatia Listoja – sekä katsella niitä."),
                e("af59527e", "Tarkastele tilin jäsenten rooleja ja kutsu tilille tekijöitä. Jäsenet voivat lähettää yksityisviestejä, julkaista julkaisuja ja laatia Listoja – sekä katsella niitä."),
                e("eafcc76a", "Tämä sovellus voi tarkastella..."),
                e("j3998a16", "Tämä sovellus voi tehdä..."),
                e("a6845663", function (a) {
                    return "Hyväksyit näiden sovellusten oikeudet " + a.date;
                }),
                e("b2347f7c", "Ladataan sovelluksen dataa"),
                e("e1fda16e", "Tätä sovellusta ei ole yhdistetty tiliisi"),
                e("b8f3ed46", "Kun yhdistät kolmannen osapuolen sovelluksen X-tiliisi, myönnät sovellukselle oikeudet tilisi käyttöön."),
                e("gb8d09ba", "Saa sähköpostiosoitteesi"),
                e("g6dc09a0", "Oikeudet"),
                e("a6e6e898", "Vain luku"),
                e("cde3b9ae", "Luku ja kirjoitus"),
                e("g0d7813a", "Luku, kirjoitus ja yksityisviestit"),
                e("c9b35b9e", "Lue mainostajatietosi"),
                e("e0191264", "Lue, laadi ja hallitse mainostajatietojasi"),
                e("b73e1e8a", "Lue käyttöoikeuden perumisesta"),
                e("c174e46e", "Näytä vähemmän"),
                e("a39075ff", function (a) {
                    return a.n + " muuta";
                }),
                e("da6cdba8", "Peru sovelluksen oikeudet"),
                e("ef1d3dcc", "Tee ilmoitus sovelluksesta"),
                e("d64e29c6", "Kirjaudu ulos näytetyllä laitteella"),
                e("idfa01cc", "Kirjaudutaanko ulos näytetyllä laitteella?"),
                e("f400075e", "Tämä päättää käynnissä olevan X-istuntosi. Kun haluat aloittaa uuden istunnon, sinun on kirjauduttava uudelleen sisään."),
                e("e04ba39c", "Pävämäärä ja aika"),
                e("eed75824", "Käynnissä ollut X-istuntosi on päättynyt."),
                e("ddcd3d26", "Istuntodataa ladataan"),
                e("d2f0f3fe", "Istuntoa ei löydy"),
                e("ga05517a", "Et ole laatinut yhtään raporttia"),
                e("ea1715c0", "Kun lisäät, ne näkyvät täällä."),
                e("b70a2cde", "Käytämme teknologiaa arkaluonteisen median tunnistamiseen, joten tunnistus voi välillä mennä pieleen, vaikka parantelemme sitä koko ajan."),
                e("ee320a07", "arkaluonteista mediaa koskevasta käytännöstämme"),
                e("ffeb836a", "Asetukset eivät ole käytettävissä"),
                e("f2fb9746", "Nämä asetukset eivät ole käytettävissä, koska ne koskevat ei-välttämättömiä evästeitä. Koska olet jo tehnyt valinnan, ettei niitä käytetä tililläsi, käytämme ainoastaan evästeitä, jotka keräävät välttämättömät tiedot laitteeltasi."),
                e("aa4342be", "Väkivaltakuvasto"),
                e("jfec3aa0", "Aikuissisältö"),
                e("j6bacd6a", "Piilota väkivaltasisällöksi merkitty media, kunnes nimenomaan teet valinnan nähdä sitä. X iOS:lle ei näytä tätä mediaa ollenkaan."),
                e("a73e66a8", "Piilota aikuissisällöksi merkitty media, kunnes nimenomaan teet valinnan nähdä sitä. X iOS:lle ei näytä tätä mediaa ollenkaan."),
                e("fef1b8dc", "Piilota sensitiiviseksi merkitty media, kunnes nimenomaan teet valinnan nähdä sitä. X iOS:lle ei näytä tätä mediaa ollenkaan."),
                e("d0a5a1c0", "Varoita"),
                e("ga197e26", "Näytä kaikki"),
                e("eb723386", "Älä koskaan näytä tätä"),
                e("ea31c622", "Tämä sisältää kuolemaa, väkivaltaa, vaikeaa fyysistä vammaa tai lääketieteellisiä toimenpiteitä lähikuvina näyttävän median."),
                e("e40985c4", "Tämä sisältää kuvatun suostumuksella tuotetun ja jaetun median, joka on pornografista tai tarkoitettu kiihottamaan seksuaalisesti."),
                e("h7e0672b", "media-asetuksissaan"),
                e("de9f111a", "Hallitse nykyistä tilaustasi"),
                e("d5839f9e", "Lue sopimusehdot tai hallitse tilaustasi Stripe-tilisi kautta."),
                e("a840c22c", "Hallinnoi olemassa olevaa Premium-tilausta"),
                e("e31456f8", "Vaihda tasoa"),
                e("a7c4ecea", "Koe Sinulle-aikajana ilman mainoksia, saa kaikki ominaisuudet käyttöösi ja suurin vastausten tehostus."),
                e("h15cc518", "Tutustu tasovaihtoehtoihin ja valitse kuukausi- tai vuositilaus."),
                e("ce70c590", "Affiliaatin merkkien hallinta"),
                e("a49e1b2a", "Lajittele affiliaatiosi"),
                e("e2daf93c", "Ensimmäinen merkki näkyy kaikissa julkaisuissa."),
                e("ab8089ea", "Järjestä uudelleen"),
                e("e0221c42", "Miellyttävämpi lukukokemus X:ssä ja sen ulkopuolella."),
                e("adcaa214", "Näe seuraamiesi ihmisten eniten jakamat artikkelit."),
                e("b62d6e4c", "Lukutila"),
                e("acf63cd2", "Valitse tekstikoko ketjujen lukemiseen. Ota lukutila käyttöön valitsemalla kirjapainike missä tahansa ketjun julkaisussa."),
                e("e5fff0c8", "Tilauksesi on voimassa."),
                e("ac057b4e", "Jos haluat perua sinulle myönnetyn X-ilmaistilauksen, ota yhteys tukeen."),
                e("ib8ebf3b", function (a) {
                    return "Olet tehnyt tämän tilauksen " + a.mobilePlatform + "-laitteella. Sinun on hallittava tilausta tai peruttava se samalla alustalla.";
                }),
                e("i8132774", "Bonussisältöä uskollisimmille seuraajillesi"),
                e("a1222584", "Ansaitse omalla sisällölläsi"),
                e("df837dac", "Ansainta-arvio / Tilityskynnys"),
                e("df29646e", "Maksukynnys"),
                e("b0ac642a", "Maksun saapumiseen tilillesi voi mennä enintään 90 päivää."),
                e("c747df1c", "Ilmoita tilitystiedot"),
                e("ac814a76", "Et ole vielä ilmoittanut tilitystietoja."),
                e("f139168e", "Tulot-koontinäyttö"),
                e("ee0510c2", "Maksuhistoria"),
                e("c9b82b4c", "Hakemus hyväksytty · Tuota sisältöä Tilaajille"),
                e("ibb5e1c8", "Hakemus evätty"),
                e("b255df58", "Hakemus lähetetty · Odotetaan arviota"),
                e("b3f834c8", "Hakemus odotuslistalla"),
                e("i14be2c6", "Arvio ansaituista tuloista"),
                e("fd74390a", "Tunnistautunut sisällöntuottaja"),
                e("e8dc82e2", "Aktiiviset ohjelmat"),
                e("c12c5eb6", "Avoimet ohjelmat"),
                e("j53f5eb0", "Ohjelmaan kelpoiset sisällöntuottajat voivat rekisteröidä kuukausitilauksen ja saada osan mainostuloista"),
                e("e9c1273a", "Ohjelmaan kelpoiset sisällöntuottajat voivat rekisteröityä kuukausitilausohjelmaan ja saada osan tuloista."),
                e("jd176c82", "Alueellasi ei makseta tilityksiä"),
                e("d6ff74ca", "Valitettavasti maksupalveluoperaattorimme ei vielä tue maksuja maassasi. Jotkin kaupallisen käytön ohjelmat eivät ole saatavilla."),
                e("e89cdac0", "Hallinnoi maksutiliä"),
                e("dd7a54b4", "Linkitä Stripe-tili"),
                e("jff3ab68", "Henkilöllisyyden varmennus"),
                e("j2876824", "Vahvista henkilöllisyys"),
                e("ebd06fb0", "Henkilötodistus toimitettu"),
                e("f65b960c", "Henkilötodistustasi tarkistetaan sisällöntuottajaohjelmaa varten."),
                e("i4a1e936", "Jotta voit saada maksuja, sinulla on oltava Stripe-tili. Perusta tili tai muodosta yhteys  Stripe-tiliisi."),
                e("f5931b6a", "Tunnistautuminen on pakollista, jotta voit osallistua sisällöntuottajaohjelmaan. Jos olet jo esittänyt henkilötodistuksen sisällöntuottajaohjelmaa varten, sitä ei tarvitse lähettää uudelleen."),
                e("c8798a95", "täällä"),
                e("d809ac49", "täällä"),
                e("bbe09d38", "Sovellus hyväksytty · Odottaa sovelluskauppojen konfigurointia"),
                e("efbc5066", "Odottaa tunnistautumista"),
                e("hc7631da", "Et ole antanut Stripe-tilisi tietoja"),
                e("h72d71a2", "Hakukelpoinen"),
                e("e12b0b16", "Ei kelpoisuutta"),
                e("a1e57106", "Kesken"),
                e("i51b4e22", "Hylätty"),
                e("h5bd7160", "Tämä tili ei ole tunnistautumiskelpoinen."),
                e("e32040c4", "Sinun on tunnistauduttava saadaksesi tilityksiä."),
                e("j8769b42", "Henkilötodistustasi tarkistetaan."),
                e("be955554", "Sisällöntuottajien tulonjako"),
                e("b03a3d62", "Osuus mainostuloista"),
                e("cbbe29c2", "Olet etenemässä maksujen tilitystä kohti"),
                e("g97a2d6c", "Lue lisää"),
                e("f30774ea", "Lue lisää kaupallisen käytön ohjelmistamme ja käytännöistämme täältä."),
                e("aea0b11a", "Ansaitse X:ssä antamalla käyttäjien tilata sisältöäsi kuukausimaksua vastaan."),
                e("bce47f48", "Ansaitse elantoa X:ltä julkaisujesi synnyttämästä toiminnasta."),
                e("h7a68080", "Ansaitse tuloja julkaisujesi vastauksissa näytetyistä mainoksista."),
                e("eefd091e", "Henkilöllisyys on varmennettava"),
                e("cd616a5a", "Sisällöntuottajaohjelmaan osallistuaksesi sinun on tunnistauduttava."),
                e("cce8c40a", "Tunnistaudu"),
                e("ja73ebac", "Liikevaihto"),
                e("h16eeb42", "Hallitse"),
                e("bc43a32e", "Viimeaikaiset toiminnot"),
                e("i4c3b046", "Sinulla ei ole uusia kolikoita."),
                e("ca516a66", "Näytä kaikki toiminnat"),
                e("ee9ea930", "Timantit"),
                e("cf3b535e", "Julkaisuista saamistasi kolikoista kertyy timantteja. Timantteina ansaittu raha lisätään ansainta-arvioosi."),
                e("fbb7764b", function (a) {
                    return a.count + " kolikko" + n(a.count, "", "a");
                }),
                e("e70a07b2", "Anonyymi"),
                e("c76972f0", "Edellisen maksun jälkeen"),
                e("c219a552", "Alusta asti"),
                e("f3ce76c0", "Tarvitsetko lisää apua?"),
                e("i8982e7e", "Jos sinulla on kysyttävää, käy ohjekeskuksessa tai ota yhteys meihin."),
                e("fbbfe8aa", "Poista kolikot käytöstä"),
                e("e4f29140", "Kun poistat kolikot käytöstä, sinut poistetaan Kolikot-ohjelmasta etkä enää voi saada kolikoita."),
                e("e58e85d2", "Jatka deaktivointiin"),
                e("be8e87b4", "Poistetaanko kolikot käytöstä?"),
                e("bee26fa8", "Kyllä, deaktivoi"),
                e("f0145c9a", "Kolikot on poistettu käytöstä"),
                e("a22f6808", "Kaikki toiminnat"),
                e("g1b8020c", "Viimeiset 30 päivää"),
                e("jb13b840", "Aina"),
                e("b4f24360", "Sinulla ei ole uusia kolikoita viimeisiltä 30 päivältä."),
                e("d59dbf8a", "Yhteenveto"),
                e("g652fc4c", "Sinulla ei ole maksuja tältä kuukaudelta."),
                e("d55e017a", "Tässä kuussa"),
                e("f883322d", function (a) {
                    return "Tapahtuman nro " + a.transactionId;
                }),
                e("d978f43e", "Uudet Tilaukset"),
                e("d113fc10", "Sinulla ei tällä hetkellä ole uusia Tilauksia."),
                e("h7a41c02", "Uusinnat"),
                e("eedf2eaa", "Sinulla ei tällä hetkellä ole uusittuja tilauksia."),
                e("d93308d8", "Näytä kaikki maksutapahtumat"),
                e("a23e724a", "Tämä tili ei ole saatavilla."),
                e("a384fda0", "Tietoa tilauksesta"),
                e("i4313618", "Esittele itsesi ja kerro, mitä ihmiset voivat odottaa ryhtyessään Superseuraajiksesi."),
                e("c0348964", "Johdanto"),
                e("g522fd30", "Edut tilaajille"),
                e("e85471c6", "Tilaajamerkki"),
                e("fd75ca92", "Saat julkisen tilaajamerkin, joka helpottaa huomatuksi tulemista, juttelua ja yhteydenpitoa."),
                e("ia9c37c4", "Hinnoittelu"),
                e("f5be83b2", "Liity Yhteisöön"),
                e("e4ee8c6a", "Jaa ideoita, inspiroidu ja tutustu toisiin sisällöntuottajiin Tilausten Creators Feedback -yhteisössä."),
                e("i3a90dee", "Deaktivoi Tilaukset-ohjelma"),
                e("e261e6e6", "Deaktivointi merkitsee, että sinut poistetaan Tilaukset-ohjelmasta ja menetät kaikki Tilaajasi."),
                e("ca5ca5ee", "Näe esikatselu"),
                e("a329ce88", "Lisää kuvaus…"),
                e("f0c99eff", function (a) {
                    return "- @" + a.screenName;
                }),
                e("g40b2b30", "Ota käyttöön julkaisujen esikatselu"),
                e("c1521804", "Esikatselukuvia tilaajille julkaisemistasi julkaisuista näytetään ei-tilaajille."),
                e("jd0f1ac0", "Deaktivoidaanko Tilaukset?"),
                e("c6c27fc8", "Tilausten deaktivointi on lopullinen. Sinut poistetaan Tilaukset-ohjelmasta. Sinun on haettava ohjelmaan uudelleen, jos haluat palata."),
                e("f82a23ec", "Tilaukset on nyt deaktivoitu"),
                e("a4c6e458", "Olet asettanut Tilauksen kuukausihinnaksi:"),
                e("be54a313", function (a) {
                    return a.price + "/kk";
                }),
                e("hadd463a", "Pyydä hintamuutosta"),
                e("b0728b5c", "Peru hintamuutos"),
                e("aea9f79c", "Olet tehnyt seuraavan hintamuutospyynnön:"),
                e("c701e5cc", "Tekemiäsi muutoksia ei tallenneta."),
                e("a649778c", "Jatka muokkaamista"),
                e("d1a683b8", "Tietoa Tilauksista sisällöntuottajille"),
                e("iba08a94", "Miltä näyttää?"),
                e("a5f55bfa", "Tulevat Tilaajat näkevät tämän tullessaan sivullesi. Voit palata muokkaamaan kuvauksia milloin tahansa."),
                e("b600eb88", "Löydä omat porukkasi ja tule nähdyksi"),
                e("da48ebf6", "Tilaamalla saat bonussisältöä"),
                e("f324fb6c", "Tilaus"),
                e("c654a3aa", "Vain tilaajat näkevät tämän julkaisun."),
                e("d409ce3c", "Tue X:ssä omia suosikkejasi ja saa vastineeksi bonussisältöä."),
                e("a4ed9072", "Lisää johdanto..."),
                e("af5b098e", "Tilaajaedut"),
                e("gf32cca2", "Kerro, mitä herkkuja on tarjolla"),
                e("j8ba99b4", "Anna esimakua tulevasta kirjoittamalla lyhyt yhteenveto joka kuukausi jakamastasi bonussisällöstä."),
                e("j679dcda", "Näytä esimerkkejä"),
                e("j325331a", "Käytä hetki tervehdyksen laatimiseen"),
                e("e18e8da8", "Tee hyvä ensivaikutelma pienellä johdantoviestillä potentiaalisille Tilaajillesi."),
                e("fce14f56", "Uusi hinta"),
                e("b0c58272", "Valitse uusi kuukausihinta. Hintamuutosten voimaantuloon menee 3–7 arkipäivää. Hinnankorotuksiin voidaan vaatia tilaajien suostumus."),
                e("d5737f0e", "Kuukausitilaus"),
                e("edc014fb", "Lue lisää"),
                e("h810143c", "Tiedot"),
                e("ga57b610", "Ostopäivä"),
                e("h3b68828", "Oston tyyppi"),
                e("cc2aa67a", "Ostoalusta"),
                e("b313bb24", "Maksu"),
                e("e5188502", "Maksua ei palauteta"),
                e("bf364d62", "Kaikki maksutapahtumat"),
                e("ed3efef0", "Sinulla ei ole uusia Tilauksia viimeisiltä 30 päivältä."),
                e("b5f9ec14", "Sinulla ei ole uusintoja viimeisiltä 30 päivältä."),
                e("d8eed490", "Hallitse yleisölle näkyvää profiilinäkymää."),
                e("e26dbcd0", "Piilota sisällöntuottajatilauksesi"),
                e("aea7dda8", "Sisällöntuottajatilaukset profiilissa näkyvät vain sinulle."),
                e("j3d2cfc4", "Anna seuraajien nähdä, mitä Huoneita kuuntelet"),
                e("d9588ae6", "Pidä mielessä, että vaikka tämä asetus on kytketty pois käytöstä, näyt kaikille Huoneessa olijoille. Seuraajasi näkevät aina, mitä Huoneita juonnat ja missä Huoneissa olet co-hostina tai puhujana."),
                e("i84c5de8", "Sisällöntuottajien hakemusvaihe on tulossa"),
                e("b8922f7e", "Tarkista tilanne pian uudelleen, jotta voit liittyä Tilaukset-ohjelmaan."),
                e("ad588be6", "Täytät kelpoisuuskriteerit!"),
                e("f6443bd2", "Hyviä uutisia – täytät Tilaukset-ohjelman kelpoisuusvaatimukset. Oletko valmis tekemään hakemuksen?"),
                e("a3a20a10", "Kokeile myöhemmin uudelleen"),
                e("b8d29e4a", "Valitettavasti et tällä hetkellä täytä Tilaukset-ohjelman kelpoisuusvaatimuksia."),
                e("d92c1d0a", "Jatka hakemuksen tekemiseen"),
                e("fde27650", "Tilausten ehtoihin"),
                e("c5f89b06", "Premium-tilaajana tilisi varmennetaan"),
                e("ff9f4475", function (a) {
                    return a.minFollowersCount + " varmennettua seuraajaa";
                }),
                e("b747ce3a", "Aktiivinen viimeisten 30 päivän aikana"),
                e("c27f57ac", "Olet vähintään 18-vuotias"),
                e("h63d2973", function (a) {
                    return a.count + " orgaanista näyttökertaa viimeksi kuluneiden 3 kuukauden aikana";
                }),
                e("ef606fca", "Maksullinen tilaus uskollisimmille seuraajillesi"),
                e("e533715e", "Tarkista kelpoisuutesi"),
                e("d8671da2", "Tienaa elantosi X:ssä"),
                e("d126a504", "Tarjoa suosikkiseuraajillesi vähän ekstraa ja ansaitse rahaa kuukausittain. "),
                e("d08d0bb2", "Bonussisältö"),
                e("ef29d2c2", "Jaa spontaaneja ajatuksia, ideoita ja mielipiteitä bonusjulkaisuissa ja vastauksissa."),
                e("if12af7c", "Tilausten määritys"),
                e("cc4c1a14", "Hinnan määritys"),
                e("e1453e45", "Lue lisää"),
                e("aa7e35ee", "Tiliäsi ei valittu"),
                e("c984cc62", "Tiliäsi ei valittu mukaan tällä kertaa. Odota tulevia osallistumismahdollisuuksia."),
                e("gd115e64", "Hae Tilaukset-ohjelmaan"),
                e("a9f08d5c", "Alla oleviin kysymyksiin antamasi vastaukset on tarkoitettu vain meille tarkistettavaksi, eikä niitä näytetä profiilissasi."),
                e("c3f8d650", "Kuvaile sisältöä"),
                e("j89dd344", "Anna esimerkki sisällöstä, jota tilaukseesi kuuluu. Mitä tarkempi kuvaus on, sitä parempi."),
                e("d19cc490", "Lisää esimerkkisisältöä"),
                e("c737c1b2", "Kerro meille kokemuksestasi"),
                e("f98e5fd4", "Luotko maksullista sisältöä muilla alustoilla? Miksi uskot, että käyttäjät tekevät tilauksen?"),
                e("c41b01be", "Lisää myyntipuhe"),
                e("e2aad0fe", "En julkaise väkivaltaa tai aikuisviihdesisältöä"),
                e("d1b983ef", function (a) {
                    return "On oltava vähintään " + a.count + " merkin pituinen";
                }),
                e("d3d6c52c", "Hakemuksesi on lähetetty"),
                e("cb27c0ba", "Olemme vahvistaneet hinnoittelusi. Hakemuksesi arvioidaan ja jos tulet hyväksytyksi, lähetämme sinulle ilmoituksen heti kun päätös on tehty."),
                e("j274e6aa", "Olet odotuslistalla"),
                e("j006be54", "Tilaukset-ohjelman testiryhmä tuli täyteen nopeasti, mutta olemme lisänneet sinut odotuslistalle ja ilmoitamme sinulle, kun lisää paikkoja avautuu."),
                e("d5cb1114", "Pääse alkuun Tilausten kanssa"),
                e("j2f622ec", "Sinut on valittu testiryhmään! Laita Tilausta koskevat tiedot kuntoon nyt, niin ilmoitamme, kun ominaisuus on käytettävissä."),
                e("e2cd7000", "Melkein valmista"),
                e("b3629b92", "Vielä muutama vaihe Tilauksesi määrittämiseksi."),
                e("f4619a62", "Hyväksy ja jatka"),
                e("c5625f84", "Kuvaile tilaajaetuja"),
                e("c7289544", "Määritä Tilauksen hinta"),
                e("aaf68c58", "Vahvista maksutietosi"),
                e("b8a69fa0", "Tilausten ehtoihin"),
                e("ad4a92a2", "Merkki"),
                e("d5aa8de0", "Anna Tilaajillesi merkki"),
                e("j0bbda92", "Täällä ei ole muokattavaa. Kaikki Tilaajasi saavat julkisen merkin ryhtyessään Tilaajiksi."),
                e("e18b7a72", "Tarkista"),
                e("be76dc34", "Lisää kuvaus"),
                e("ef5406e4", "Lisää johdanto"),
                e("ea8a3d2e", "Hinnoittelumallit"),
                e("f77bb179", function (a) {
                    return "Vahvista valintasi " + a.price;
                }),
                e("g2a6f160", "Tarkista Tilauksen hinta ja vahvista se. Et voi muuttaa hintaa asetettuasi sen."),
                e("g767d1c9", "Huomaa: et voi muuttaa sitä"),
                e("df057690", "Valitse, paljonko Tilaajat maksavat"),
                e("g5923869", function (a) {
                    return a.price + " kuukaudessa";
                }),
                e("f025ab3a", "Laajenna seuraajakuntaasi"),
                e("c962df0e", "Julkaiset ja vaihdat ajatuksia Tilaajien kanssa harvakseltaan"),
                e("ib075804", "Laajenna fanikuntaa tuotot maksimoiden"),
                e("fc04f3a6", "Julkaiset ja vaihdat ajatuksia Tilaajien kanssa kohtuullisen usein"),
                e("c246656e", "Kerää uskollinen seuraajakunta"),
                e("h0c5405c", "Julkaiset ja vaihdat ajatuksia Tilaajien kanssa säännöllisesti"),
                e("f2d2153d", function (a) {
                    return "Useimmat sisällöntuottajat veloittavat " + a.price + ", mutta voit valita minkä hinnan haluat";
                }),
                e("f1cb36b8", "Maksujen tuloutus"),
                e("e20f6662", "Valmista tuli!"),
                e("g88e146c", "Your account is pending"),
                e("dfe973a6", "Thanks for providing your payout details. You’ll receive a notification with next steps as soon as Stripe has reviewed your information."),
                e("ja884230", "Ilmoita tilitystietosi"),
                e("a3f6a966", "Yhdistä Stripe-tiliin"),
                e("cb031e44", "Siirryt Stripeen yhdistämään tilisi. Jos sinulla jo on Stripe-tili, jota haluat käyttää, anna siihen yhdistetty sähköpostiosoite, kun Stripe kysyy sähköpostia. Huomaa: Stripe-sähköpostin ei tarvitse olla sama kuin X-sähköpostisi."),
                e("ebfb897c", "Esimerkkejä"),
                e("dc4feb1a", "Emmitkö, mitä sanoisit?"),
                e("h9b9d486", "On kokonaan itsestäsi kiinni, millaista sisältöä tarjoat Tilaajillesi. Tässä muutama esimerkki, joista voi olla apua."),
                e("ic130fd6", "Kurkista kulissien taakse, näe miten kirjani ja muut projektini valmistuvat ja seuraa kuukausittaista kyselysessiota."),
                e("dd913e24", "Pääset kuulemaan spontaaneja kommenttejani, suodattamattomia ajatuksiani ja ekstrasisältöä."),
                e("b737ee66", "Valmistaudu VIP-kokemukseen. Laadi kyselyitä, videoita ja tarjouksia yksinoikeudella Tilaajille."),
                e("a0bb2076", "Pidä johdanto napakkana. Pääset kuvailemaan sisältöä myöhemmin. Alla on muutama esimerkki malliksi."),
                e("fe076612", "Hei, ja tervetuloa Tilaukset-sivulleni! Kiitos, kun tulit ja kiitos kun autat minua toteuttamaan unelmaani."),
                e("g7f66daa", "Miten menee? Kiitos, kun tulit käymään. Uskoisin, että pidät tänne suunnittelemistani jutuista."),
                e("hbe4f99e", "Heippa! Olisipa hauska päästä jakamaan salaisuuksiani sinulle ja tutustua paremmin :)"),
                e("fb278c82", "Mikä esittelyn idea on?"),
                e("j6cab6ec", "Ennen kuin ihmiset ryhtyvät Tilaajiksesi, he näkevät tämän. Tee muokkauksia kuvauksiin, kunnes ne tuntuvat omilta."),
                e("i22beaa4", "Datan hyödyntäminen"),
                e("e110a46c", "Poista keskusteluhistoria"),
                e("ebc4fda0", "Olet poistamassa Grok-keskusteluhistoriasi. Et tämän jälkeen pääse enää näihin keskusteluihin."),
                e("c90fe716", "Haluatko poistaa käymäsi keskustelut?"),
                e("a8d516a4", "X saattaa jakaa xAI:lle julkiset X-tietosi sekä käyttäjänä tekemäsi toiminnot, syötteet ja tulokset X:n Grokille, jotta Grokia ja muita xAI:n kehittämiä tekoälymalleja voidaan kouluttaa ja hienosäätää. Tämä auttaa meitä parantamaan käyttökokemustasi jatkuvasti."),
                e("a127886c", "Anna Grokille lupa muistaa keskusteluhistorianne"),
                e("f49b39b8", "Anna Grokille lupa muistaa tietoja aiemmista keskusteluista. Voit poistaa yksittäiset keskustelut, joihin liittyvät tiedot haluat Grokin unohtavan."),
                e("b7de9ad2", "Anna X:n yksilöidä Grok-käyttökokemuksesi"),
                e("ed141096", "Salli X-tietojesi sekä toimintasi Grokin kanssa, sille antamiesi syötteiden ja sen antamien tulosten käyttäminen Grok-käyttökokemuksesi yksilöimiseen. X voi jakaa X-tietojasi sekä tietoa toiminnastasi Grokin kanssa, sille antamiasi syötteitä ja siltä saamiasi tuloksia xAI:lle Grok-käyttökemuksesi sekä muiden xAI:n kehittämien tekoälymallien käyttökokemustesi yksilöimistä varten. Näin voimme parantaa käyttökokemustasi jatkuvasti. "),
                e("ecdbece0", "Sinut on nyt otettu mukaan Kolikot-ohjelmaan."),
                e("db3f0bbe", "Autamme sisällöntuottaja ansaitsemaan sisällöllään."),
                e("a1f40cf8", "Hyväksyn"),
                e("d604fb32", "Sisällöntuottajien ehdot"),
                e("d520d188", "Vastaanota kolikoita"),
                e("ea770766", "Kolikot ovat virtuaaliesineitä, joita tilit voivat saada julkaisuista. Kertyvät kolikot muunnetaan ”timanteiksi”, jotka on mahdollista nostaa valuuttana."),
                e("d27f5ac6", "Passiivista tuloa"),
                e("h1d66df0", "Ansaitse rahaa julkaisemalla X:ssä huippusisältöä. Seuraajasi voivat nyt palkita sinua antamalla kolikoita."),
                e("f85fb0a2", "Vahvista sidettä yleisöösi"),
                e("d1433e24", "Kolikot ovat faneille hauska tapa palkita sinua sisällöstä. Se antaa sinulle tilaisuuden vahvistaa sidettä faneihisi ja seuraajiisi."),
                e("e6ba42de", "Osuus mainostuloista"),
                e("ebc16756", "Sisällöntuottajien tulonjako"),
                e("da4cd6fa", "Valitettavasti et tällä hetkellä täytä Osuus mainostuloista -ohjelman vaatimuksia. Sinun on täytettävä seuraavat vaatimukset osallistuaksesi:"),
                e("b2961492", "Valitettavasti et tällä hetkellä täytä Sisällöntuottajien tulonjako ‑ohjelman vaatimuksia. Sinun on täytettävä seuraavat vaatimukset osallistuaksesi:"),
                e("d3789528", "Tietoa Osuus mainostuloista -ohjelmasta"),
                e("aa0ff456", "Tietoa sisällöntuottajien tulonjaosta"),
                e("bf214f48", "Ok"),
                e("b2b4d592", "Tilaa Premium tai Varmennetut organisaatiot"),
                e("fbb03ba6", "500 Premium-seuraajaa"),
                e("hb4c5169", function (a) {
                    return "Vähintään " + a.impression_number + " miljoonaa julkaisujen näyttökertaa viimeiseltä 3 kuukauden jaksolta";
                }),
                e("f91685ba", "Olet automaattisesti kelpoinen saamaan maksuja julkaisuistasi!"),
                e("a9f0e0fa", "Premium- tai Varmennetut organisaatiot -tilaajana olet automaattisesti kelpoinen saamaan osuuden mainostuloista. Tilitys perustuu julkaisuihisi tulleissa vastauksissa näytettyjen mainosten varmennettuihin näyttökertoihin."),
                e("c694e3e4", "Premium- tai Varmennetut organisaatiot ‑tilajaana olet automaattisesti kelpoinen sisällöntuottajien tulonjakoon."),
                e("acd1a1be", "Ilmoita maksutietosi nyt, jotta sinulle voidaan tulevaisuudessa tilittää maksuja."),
                e("f7e11f70", "Liity ja vahvista henkilöllisyys"),
                e("c8169274", "Hakemuksen tallennus ei onnistunut. Yritä myöhemmin uudelleen."),
                e("c3f93665", "Sisällöntuottajien tulonjako ‑ohjelman ehdot"),
                e("a249ce04", "osuus mainostuloista ‑ohjelman ehdot"),
                e("d085a144", "Sisällöntuottajan tulot -koontinäyttö"),
                e("a5204850", "Tulot yhteensä"),
                e("ada650cf", function (a) {
                    return "Maksukausi: " + a.fromDate + "—" + a.toDate;
                }),
                e("aa732c0a", "Osuus videomainostuloista"),
                e("g88c1108", "Tietoa Osuus videomainostuloista -järjestelystä"),
                e("d4bb7e9c", "Osuus videomainostuloista -ehdot"),
                e("dc535dbe", "Ansaitse enemmän sisällölläsi X:ssä hakemalla pre-roll-mainonnan Osuus mainostuloista -ohjelmaan."),
                e("eb6d9270", "Tienaa sisällölläsi"),
                e("a778472e", "Tarkemmin:"),
                e("bde8446e", 'Valitse "Hyväksy ja lähetä" hakeaksesi Osuus mainostuloista -ohjelmaan.'),
                e("a415fd3a", "Hyväksy ja lähetä"),
                e("fbba9725", "X:n sääntöjä"),
                e("f3dd8c4a", "Osuus mainostuloista -ohjelman sääntöjä ja Kaupallisen käytön standardeja sisällöntuottajille."),
                e("hd885ae0", "Näe, miten tilauksesi vaikuttaa"),
                e("je4ccd3a", "Ilman mainoksia näytettyjen artikkelien ohjekeskus"),
                e("i6cb493e", "Hallinnoi affiliaatioidesi näyttötapoja"),
                e("e4fde082", "Aseta ajastin lähteneen julkaisun perumiselle ja valitse, millaisia julkaisuja haluat perua."),
                e("dcfc6540", "Originaalijulkaisut"),
                e("be077e8c", "Ketjut"),
                e("f3429f2c", "Kyselyt"),
                e("i647ba8a", "Julkaisun perumisaika"),
                e("d195528e", "Valitse, minkä tyyppisiä julkaisuja haluat perua ennen julkaisua ja miten pitkä perumisaika on."),
                e("bcf3a9e6", "Hallinnoi epätoivottuja vastauksia rajoittavia asetuksia."),
                e("c048fd3a", "Suodata mahdollisesti epätoivotut vastaukset"),
                e("dab7dac4", "Julkaisuihisi tulleet vastaukset, joissa on mahdollisesti haitallista tai loukkaavaa kieltä, suodatetaan ja näytetään täällä. Muut näkevät edelleen nämä vastaukset."),
                e("c4c53b86", "Pidä mielessä, että käytämme tällaisten vastausten tunnistamiseen teknologiaa, jota kehitetään jatkuvasti, mutta emme välttämättä tunnista sisältöä aina oikein."),
                e("dca3d2ee", "Otetaanko vastaussuodatin käyttöön?"),
                e("fe440ff8", "Suodatettuja vastauksia ei palauteta julkaisuihisi."),
                e("cedbb01c", "Lakiasiaa"),
                e("b4f917d0", "Sekalaista"),
                e("bdfa2b8c", "Lisäresurssit"),
                e("b8692262", "Tarjoamme useita tietolähteitä, joista voit lukea lisää X:n tuotteista ja palveluista."),
                e("c0398892", "Versiokommentit"),
                e("b833bcde", "Hallitse X-käyttäjäkokemustasi esimerkiksi rajoittamalla värikontrastia ja animaatiota. Nämä asetukset koskevat kaikkia X-tilejä tässä selaimessa."),
                e("d5b646be", "Näkö"),
                e("jfe6a3a0", "Liike"),
                e("e8c72272", "Lisää värien kontrastia"),
                e("dba2cdd2", "Parantaa luettavuutta kasvattamalla tekstin ja taustavärien kontrastia."),
                e("d070244e", "Vähennä liikettä"),
                e("icfa5e8c", "Rajoittaa sovelluksen animointien, kuten reaaliaikaisesti päivittyvien laskurien, lukumäärää."),
                e("ae41b002", "Rajoittaa sovelluksen animointien, kuten reaaliaikaisesti päivittyvien laskurien, lukumäärää. Järjestelmäsi pyytää sovellusta vähentämään liikettä. Jos haluat sallia liikkeen, poista ensin tämä rajoituspyyntö käytöstä."),
                e("h9d1cfae", "Saa kuvailumuistutus"),
                e("c878e9f8", "Sallii muistutuksen kuvailun lisäämisestä ennen julkaisun lähettämistä."),
                e("bbd1fc7c", "Lue lisää saavutettavuudesta X:ssä"),
                e("ac865cf0", "Saavutettavuus X:ssä"),
                e("d3a2bde8", "Näe tietoja tilistäsi, lataa tiedoistasi koottu arkisto tai lue tilin käytöstä poistamisesta"),
                e("idca4742", "Näe tilitietosi, kuten puhelinnumerosi ja sähköpostiosoitteesi."),
                e("b6ded35e", "Vaihda salasanasi milloin tahansa."),
                e("cce24bf4", "Selvitä, millaisia tietoja tilistäsi on tallennettu."),
                e("i203df96", "Lue, miten voit poistaa tilisi käytöstä."),
                e("f70cd5ee", "Puhelin"),
                e("ib6f1694", "Tilin luonti"),
                e("de323650", "Nainen"),
                e("b6ab31be", "Mies"),
                e("h3290872", "Varmennetut"),
                e("hbd12156", "Pyydä tunnuksellesi varmennusta"),
                e("b7ec04f4", "Kyllä"),
                e("f70d5780", "Kyllä."),
                e("dc62d3c6", "Ei."),
                e("a67dbd0a", "Parodia-, kommentti- ja fanitili"),
                e("a3db727e", "Hallitse parodia-, kommentti- ja fanitiliäsi"),
                e("eacf1990", "Lisää syntymäpäiväsi profiiliisi."),
                e("a3bf1262", "Muuta profiilisi syntymäpäivää."),
                e("h530db16", "Suojatut julkaisut"),
                e("d6d80990", "Tämä tieto koskee selainta tai laitetta silloin, kun olet kirjautuneena ulos. Tilanne voi olla toinen, kun olet kirjautuneena sisään."),
                e("i0d81ddb", "personointi- ja data-asetuksista"),
                e("g2a9bd3e", "Automatisoitujen tilien tunnuslaput"),
                e("dd9b3aae", "Mitä ovat automatisoidut tilit?"),
                e("b80bdc40", "Automatisoidut tilit on ohjelmoitu suorittamaan tiettyjä toimintoja automaattisesti X:n rajapinnan kautta. Tällainen toiminto voi olla esimerkiksi alueen säätiedoista julkaisu. Nämä tilit ovat muiden X:n käyttäjien perustamia ja hallinnoimia."),
                e("a01ac9b6", "Tunnuslapuista yleisö tietää, kuka hallinnoi automatisoitua tiliä. Kun automatisoidun tilin omistaja on yhdistänyt siihen hallintatilinsä, automatisoidun tilin profiiliin ja julkaisuihin tulee näkyviin tunnuslappu."),
                e("b989e1fe", "Onko automatisoituihin tileihin pakko lisätä tunnuslappu?"),
                e("i2d599aa", "Miten saan tunnuslapun automatisoituun tiliini?"),
                e("gd5bed72", "Perusta hallintatili"),
                e("g6d44432", "Hallintatili on ihmisen hallinnassa oleva tili, jonka vastuulla automatisoitu tili on."),
                e("e20a69e8", "Yhdistä hallintatilisi automatisoituun tiliisi"),
                e("d2f88358", "Yhdistä tilisi omissa asetuksissa sivulta Automatisointi."),
                e("e427f632", "Tililläsi on tunnuslappu!"),
                e("a4d7cffa", "Kun tilit on yhdistetty, automatisoitu tili saa tunnuslapun."),
                e("a18d6a7d", "uusiin sääntöihimme"),
                e("e9965c14", "automatisoidun tilin tunnusten UKK"),
                e("ee78c192", "Mikä on PCF-tili?"),
                e("c3f35e0c", "Parodia-, kommentti- tai fanitilin profiilissa näkyy henkilö, ryhmä tai organisaatio, jota tili kommentoi tai satirisoi tai josta tili kertoo."),
                e("d019b5fa", "Tarvitseeko parodia-, kommentti- tai fanitilini merkinnän?"),
                e("dd04f24e", "Kyllä. PCF-merkintä parodia-, kommentti- ja fanitileissä takaa, etteivät muut X:ssä saa väärää käsitystä vaan tietävät, ettei tilisi oikeasti ole kytköksissä profiilin kohteeseen. Jos tiliä ei merkitä, se saattaa rikkoa autenttisuuskäytäntöä."),
                e("hb0f8bbc", "Miten merkitsen parodia-, kommentti- tai fanitilini?"),
                e("g69acc5c", "Napsauta Selvä, niin pääset profiilin asetuksiin asettamaan tilille merkinnän!"),
                e("d313d431", "Autenttisuuskäytäntö"),
                e("a3f22d8e", "Valitse, millaisia ilmoituksia saat toiminnastasi, kiinnostuksen kohteistasi ja suosituksista."),
                e("bc20979a", "X kumppaneineen käyttää evästeitä tarjotakseen sinulle paremman, turvallisemman ja nopeamman palvelun ja tukeakseen liiketoimintaamme. Osa evästeistä on välttämättömiä palveluittemme käyttöä varten, niiden parantamiseksi ja niiden asianmukaisen toiminnan takaamiseksi."),
                e("ge06dadc", "Salli X:n ja sen kumppanien käyttää evästeitä, jotta sinulle voidaan näyttää kiinnostuksen kohteisiisi perustuvia mainoksia ja viestintää."),
                e("he20de3a", "Älä anna X:n käyttää evästeitä lisätietojen keräämiseen räätälöityä mainontaa ja viestintää varten."),
                e("g0ec0bec", "Poistettu käytöstä"),
                e("g89f4614", "Tilisi on poistettu käytöstä"),
                e("f1768324", "Säätele, miten X voi personoida sisältöä ja kerätä ja jakaa eräitä tietoja."),
                e("ja94f34e", "Nämä asetukset koskevat tätä selainta tai laitetta silloin, kun olet kirjautuneena ulos. Niillä ei ole vaikutusta, kun olet kirjautuneena sisään."),
                e("bd73f7e6", "Tällä sallit tai poistat käytöstä kaikki tämän sivun asetukset."),
                e("ddbc3288", "Data"),
                e("ae5339a0", "Katso X-tietosi"),
                e("b934e0ea", "Poistetaanko personointi ja data käytöstä?"),
                e("i0317e0e", "Tämä voi johtaa siihen, että saat vähemmän kiinnostavia julkaisuja ja mainoksia."),
                e("a148acba", "Poista käytöstä"),
                e("aa023546", "Personoi sen perusteella, missä olet ollut"),
                e("ced77194", "Salli käyttää tietoa siitä, missä näet X-sisältöä verkossa"),
                e("fe1fc83e", "Nämä ikäryhmät on liitetty sinuun."),
                e("bf9c74d0", "Älä käytä näitä ikäryhmiä personointiin."),
                e("cf0daa24", "Näiden tietojen kerääminen voi kestää tovin. Yritä myöhemmin uudelleen."),
                e("ea522535", "Lue lisää"),
                e("hf5ca8f8", "profiiliisi"),
                e("d9cbe351", function (a) {
                    return a.count + " kirjautumistapahtuma" + n(a.count, "", "a");
                }),
                e("de90b04a", "Paikat, joissa olet ollut"),
                e("cbd2ef59", function (a) {
                    return a.count + " sijainti" + n(a.count, "", "a");
                }),
                e("a4441bb8", "Kiinnostuksen kohteet X:stä"),
                e("e1c6b2d6", "Räätälöidyt yleisöt"),
                e("ed19d10d", function (a) {
                    return a.audienceCount + " yleisö" + n(a.audienceCount, "", "ä") + " sijainnista " + a.advertiserCount + " mainostajalta";
                }),
                e("f00d0d03", function (a) {
                    return a.count + " kiinnostuksen kohde" + n(a.count, "", "tta");
                }),
                e("hf9c2caa", "Pyydetäänkö mainostajalistaa?"),
                e("c29b7971", function (a) {
                    return "Tämä lähetetään osoitteeseen " + a.primaryEmail + ".";
                }),
                e("b9e1cf02", "Pyydä"),
                e("a8276fac", "Pyydä mainostajalistaa."),
                e("g7912a84", "Selvä. Saat listan sähköpostitse, kun se on valmis."),
                e("d6104de0", "Voit kytkeä kiinnostuksen kohteisiin perustuvan mainonnan pois päältä personointi- ja data-asetuksista. Tämä muuttaa sitä, millaista mainontaa näet X:ssä. Se ei kuitenkaan poista sinua mainostajien yleisöistä."),
                e("ed8c03f5", "Lue lisää"),
                e("acb25e32", function (a) {
                    return a.num_advertisers + " mainostajan";
                }),
                e("e1a4daac", function (a) {
                    return a.num_audiences + " yleisössä";
                }),
                e("j4fa776e", "Puhelimet"),
                e("i7acdb36", "Tabletit"),
                e("c112dfc8", "Tietokone"),
                e("jd8607ba", "Aktivointipäivä"),
                e("ea4f6c9e", "Selaimet"),
                e("d750b93f", function (a) {
                    return a.count + " selain" + n(a.count, "", "ta");
                }),
                e("a9783602", "Mobiililaitteet"),
                e("j043aa31", function (a) {
                    return a.count + " mobiililaite" + n(a.count, "", "tta");
                }),
                e("ae415fd2", "Tämä on kytketty pois."),
                e("a90be7b4", "Sähköpostiosoitteet"),
                e("c0f6f911", "X:n ulkopuolista toimintaa"),
                e("adaafb3f", "Päätelty henkilöllisyys"),
                e("f0f72665", "Päätelty identiteetti"),
                e("d33b4e5b", "toimintaa X:n ulkopuolella"),
                e("c4668d4f", "toimintaa X:n ulkopuolella"),
                e("df3e137b", "Lue lisää"),
                e("d1597ccb", "Lue lisää"),
                e("c1b03a07", "Lue lisää"),
                e("b056d9dc", "Tämä on tilisi ensisijainen kieliasetus."),
                e("h68bc23c", "Näitä lisäkieliä käytetään käyttäjäkokemuksesi personointiin."),
                e("fbf0e61e", "Jos et ole vielä määrittänyt sukupuolta, sukupuoli on päätelty tilisi profiilin ja toimintasi perusteella. Tämä tieto ei näy julkisesti."),
                e("b4568a3a", "Lisää sukupuolesi"),
                e("c0be743e", "Sukupuoli päivitetty"),
                e("c5abae66", "Tämän sukupuolen X on yhdistänyt sinuun vahvimmin."),
                e("cdb0d3e6", "Älä käytä tätä sukupuolta personointiin."),
                e("j31a1aa0", "Näitä paikkoja X käyttää sinulle relevanttia sisältöä näyttääkseen. Tähän ei ole listattu paikkoja, jos olet kytkenyt valinnan ”Personoi sen perusteella, missä olet ollut” pois käytöstä."),
                e("ddefdd1c", "Poistetaanko paikat, joissa olet ollut?"),
                e("hea740ac", "Tähän kuluu hetki. Toimenpidettä ei voi kumota."),
                e("a26e0d52", "Selvä. Nämä sijainnit poistetaan."),
                e("he447966", "Sijainteja ei löytynyt."),
                e("b9d98dec", "sijaintiasetuksiisi"),
                e("e27e4fce", "Tuntematon sijainti"),
                e("ib55eb6b", "Yhdistetyt sovellukset"),
                e("e5a4a539", "Lue lisää"),
                e("gc8f2e14", "Voit poistaa kiinnostuksen kohteisiin perustuvan mainonnan käytöstä personointi ja data -asetuksista."),
                e("e6dbe66b", "Lue lisää"),
                e("d3310e49", function (a) {
                    return "Tiedosto, jossa näkyvät kaikki tiliisi yhdistetyt tiedot, lähetetään osoitteeseen " + a.primaryEmail + ".";
                }),
                e("ib03e8c8", "Haluatko ladata tiedoston, jossa näkyvät kaikki tiliisi yhdistetyt tiedot?"),
                e("g49741e8", "Lataa"),
                e("dc370a0c", "Selvä. Saat tietosi sähköpostitse, kun ne ovat valmiit."),
                e("c07b4316", "Mistä kiinnostunut"),
                e("e97196fe", "Mistä tunnetaan"),
                e("ja0f971c", "Nämä kiinnostuksen kohteet on liitetty sinuun profiilisi, toimintasi ja seuraamiesi aiheitten perusteella. Niitä käytetään käyttäjäkokemuksesi ja X:ssä näkemiesi mainosten personointiin. Voit muokata kiinnostuksen kohteitasi, jos jokin näyttää oudolta. Muutosten voimaantulo voi kestää vähän aikaa."),
                e("gd1ce494", "Uskomme, että sinut tunnetaan seuraavista kiinnostuksen kohteista. Näitä käytetään näyttämään enemmän sisältöäsi ihmisille, jotka ovat kiinnostuneet kyseisistä aihepiireistä. Voit muokata kiinnostuksen kohteita, jos jokin näyttää oudolta. Tekemiesi muutosten voimaantulo saattaa kestää vähän aikaa."),
                e("a6b0b41a", "Lataa X-sovellus puhelimeesi. Se ei maksa mitään."),
                e("h3ed510e", "X-tiedot"),
                e("b708417c", "Voit pyytää ZIP-tiedoston, johon on koottu tilitietosi, tilihistoriasi, sovellukset ja laitteet, tilin toiminta, kiinnostuksen kohteet ja mainontatiedot. Saat ilmoituksen sovelluksessa, kun arkisto on ladattavissa."),
                e("jbf5843e", "Periscope-tiedot"),
                e("ea886c6e", "Voit pyytää arkistoa Periscope-tiedoistasi suoraan Periscope-sovelluksessa."),
                e("cdcc2ad4", "Lataus epäonnistui"),
                e("dbeff87a", "Pyydä arkistoa"),
                e("hb02ed28", "Tietojesi laatamistoiminto ei ole tällä hetkellä saatavilla. Yritä myöhemmin uudelleen."),
                e("c2254084", "Olemme vastaanottaneet pyyntösi. Tietojen valmistumiseen voi mennä 24 tuntia tai kauemmin. Viiveellä suojataan tiliäsi."),
                e("f62d1d9e", "Arkistosi on nyt ladattavissa ja katseltavissa työpöytäselaimessa. Pidä mielessä, että sinun on ladattava tiedot omalle koneellesi ennen kuin ne vanhenevat muutaman päivän päästä."),
                e("b221ca4c", "Ilmoitamme, kun tietosi ovat valmiina ladattavaksi"),
                e("db40dfcf", "täyttämällä tämä lomake"),
                e("g1aced04", "Sovellukset, laitteet ja tiedot"),
                e("dbcf3a1a", "Lisää profiiliin merkintä"),
                e("cbb2367c", 'Näytä tai piilota profiilimerkintä "parodia-, kommentti- tai fanitili".'),
                e("ge48855c", "Parodia"),
                e("hf019b20", "Tämä merkintä takaa, etteivät muut X:ssä saa väärää käsitystä vaan tietävät, ettei tilisi oikeasti ole kytköksissä profiilin aiheeseen."),
                e("d048571e", "Poistetaanko parodiamerkintä?"),
                e("g905134c", "Kun poistat tämän merkinnän käytöstä, se jää pois profiilistasi ja aiemmista julkaisuista. Tarkista, noudattaako tilisi autenttisuuskäytäntöä."),
                e("ce62c8c2", "Poistetaanko profiilimerkintä?"),
                e("a14080ce", "Muutetaanko profiilimerkintä?"),
                e("db6796f6", "Kun poistat merkinnän, se jää pois profiilistasi ja kaikista aiemmista julkaisuistasi. Varmista, että tilisi noudattaa autenttisuuskäytäntöä. Kun teet muutoksen merkintään, se lukitaan 48 tunnin ajaksi."),
                e("c700b6be", "Merkintä lukitaan 48 tunniksi muutoksesta."),
                e("ff1739ae", "Profiilimerkintä"),
                e("h70c602c", "Profiilimerkinnän päivitys ei onnistu"),
                e("c818c60c", "Tilastot"),
                e("ha9f14b1", function (a) {
                    return "Huoneesi alkaa " + a.scheduleDate + " klo " + a.scheduleTime;
                }),
                e("jafbef80", "Sinulla ei ole valtuuksia tämän Huoneen ajastamiseen"),
                e("e5d26f84", "Pysy kärryillä siitä, mitä tapahtuu, sallimalla ilmoitukset. X saa laitteesi maa- ja kielitiedon ilmoitusten personointia varten."),
                e("f91f00ba", "Luo klippi"),
                e("f9b2d343", function (a) {
                    return a.count + " " + n(a.count, "julkaisu", "uutta julkaisua");
                }),
                e("jcc8306e", "Pyydä puheoikeutta"),
                e("j41fd45a", "Pyyntö lähetetty"),
                e("d5b2aae8", "Liian monta puhepyyntöä lähetetty. Yritä myöhemmin uudelleen."),
                e("b9945b98", "Puhepyyntö epäonnistui. Liity huoneeseen ja yritä uudelleen muutaman sekunnin kuluttua."),
                e("b2cc6a54", "Osallistu puhujana"),
                e("fb6c0bbc", "Kuunnellaan anonyymina"),
                e("e49a1f42", "Kuuntelet tällä hetkellä anonyymina. Olet näkymätön hostille ja muille osallistujille."),
                e("jf01aea4", "Osallistuaksesi sinun on poistuttava ja liityttävä uudelleen näkyvänä kuuntelijana."),
                e("cac1482a", "Lisää reaktio"),
                e("fc0e94b7", function (a) {
                    return "Lisäsit reaktion " + a.emoji;
                }),
                e("jf9f3e54", "Siirry 15 sekuntia eteenpäin"),
                e("hdd1aba0", "Takaisin 15 sekuntia"),
                e("b89c5a50", "Pysäytä"),
                e("e674c120", "Näytä tekstitys"),
                e("f45bace4", "Piilota tekstitys"),
                e("ce96f1dc", "Tekstityksiä ei ole saatavana"),
                e("e07f6e7d", function (a) {
                    return "Nopeus " + a.rate + "x";
                }),
                e("jd04fc66", "0,5 x nopeus"),
                e("f03848b8", "Normaali"),
                e("j0e5c2ce", "1,5 x nopeus"),
                e("b3f2318e", "2 x nopeus"),
                e("f17bc95a", "Jaa näyttö"),
                e("b11a74b2", "Lakkaa jakamasta"),
                e("e51c2372", "Vieraat"),
                e("b08821f4", "Takaisin"),
                e("fed1388a", "Huoneen asetukset"),
                e("c63dd2cc", "Tule mukaan live-keskusteluuni!"),
                e("c958c6c8", "Julkaise tämä"),
                e("if23a252", "Jaa palvelussa..."),
                e("c0530da6", "Jaa valikko"),
                e("gb5851d7", function (a) {
                    return a.prefix + " " + a.url;
                }),
                e("j78ad1ca", "Päätetäänkö Huone?"),
                e("db684264", "Kyllä, päätä"),
                e("je23178a", "Tämä päättää keskustelun kaikkien osalta."),
                e("c371fb9a", "Loppu"),
                e("c0ce822e", "Mikrofoniasetukset"),
                e("a2bf8b8a", "Vaihda kuunteluun"),
                e("caa8d928", "Säädä häiriönpoistoa"),
                e("b5d88f0c", "Vain työntekijät"),
                e("c855ab8e", "Vain Tilaajille"),
                e("ddeb0a3c", "Tässä on tämä Yhteisö. Pidätkö väestä? Katso ympärillesi."),
                e("e111f531", function (a) {
                    return a.count + " linjoille saapunut" + n(a.count, "", "ta");
                }),
                e("cbef820f", function (a) {
                    return a.screenName + " julkaisi striimin uudelleen!";
                }),
                e("e3275464", "Lähetä"),
                e("cededf2a", "Host"),
                e("i2caef48", "Co-hostit"),
                e("j245c654", "Puhujat"),
                e("eda23a02", "Kuuntelijat"),
                e("b90eb348", "Kutsu puhumaan"),
                e("d9a63e82", "Poista puhujista"),
                e("bd917b26", "Kutsu co-hostiksi"),
                e("d7357e7e", "Poista co-hosteista"),
                e("bf307fc0", "Estä ja poista"),
                e("ccf2f24e", "Ilmianto"),
                e("i22835de", "Hyväksy");
            e("cb59a0fe", "Epää"),
                e("c2376960", "Puhumispyynnöt"),
                e("aba7dcdd", function (a) {
                    return "Kutsu " + a.name;
                }),
                e("f5c7aaa7", function (a) {
                    return "host" + n(a.count, "", "ia");
                }),
                e("fc56c8b1", function (a) {
                    return "co-host" + n(a.count, "", "ia");
                }),
                e("iba0f45d", function (a) {
                    return "puhuja" + n(a.count, "", "a");
                }),
                e("dc066955", function (a) {
                    return "kuuntelija" + n(a.count, "", "a");
                }),
                e("b53ed9ab", function (a) {
                    return a.participantCount + " " + a.title + " · " + a.remainingCapacityCount + " avoinna paikka" + n(a.remainingCapacityCount, "", "a");
                }),
                e("c3b5b829", function (a) {
                    return a.count + " pyyntö" + n(a.count, "", "ä");
                }),
                e("fe7a1910", "Lähetä kutsuja"),
                e("ic3c757e", "Hae käyttäjiä"),
                e("cd133486", "Kutsu"),
                e("f2333850", "Jaa X:n ulkopuolelle"),
                e("cddb8097", "Lue lisää"),
                e("f77997b0", "Co-host"),
                e("i48f4ed8", "Puhuja"),
                e("a77c8e02", "Kuuntelija"),
                e("bdfa93eb", function (a) {
                    return "Käyttäjän " + a.name + " jakama";
                }),
                e("d8cc6ada", "Kuka saa puhua? Tämä ei vaikuta tämänhetkisiin puhujiin. Muutoksiin voi mennä muutama sekunti."),
                e("e3a87142", "Vain puhumaan kutsumasi henkilöt"),
                e("db3de1d2", "Osallistu puhujana"),
                e("d7f4bc44", "Osallistu co-hostina"),
                e("edcf15e9", function (a) {
                    return "Pyydetty (" + a.count + ")";
                }),
                e("h13957aa", "Hiljennä Huone"),
                e("ge6372fa", "Poista Huoneen hiljennys"),
                e("i7a42e1c", "Auta tämän Huoneen hallinnassa"),
                e("e0b8f112", "Sinut on kutsuttu co-hostiksi"),
                e("ee12263c", "Co-hostit voivat puhua Huoneessa"),
                e("jee7002c", "Co-hostit voivat kutsua, poistaa ja hiljentää puhujia"),
                e("i95225d2", "Co-hostit voivat jakaa ja poistaa julkaisuja"),
                e("f07137fa", "Co-hostit vovat poistaa kuuntelijoita Huoneesta"),
                e("j6cdf012", "Co-hostit eivät voi kutsua tai poistaa toisia co-hosteja"),
                e("c727d116", "Co-hostit eivät voi päättää Huonetta"),
                e("g69084b8", "Hyväksy co-host-kutsu"),
                e("ee230734", "Näytä lisää vaihtoehtoja"),
                e("ic8c615e", "Valitse ja lähetä pikavastausvaihtoehto"),
                e("a04077c4", "Valitse 1 kuva, video tai GIF."),
                e("c07367d8", "Salatut viestisi eivät voi sisältää mediaa"),
                e("af71ef68", "Ääni"),
                e("fc64990e", "Video"),
                e("ca0ce0e4", "Aloita uusi viesti"),
                e("e18e6a63", function (a) {
                    return "X Premiumilla voit viestiä käyttäjälle @" + a.username;
                }),
                e("c3752568", "Jokin meni pieleen. Yritä lähettää viesti hetken kuluttua uudelleen."),
                e("f78aa3ea", "Osaa viesteistäsi ei voitu lähettää juuri nyt. Yritä myöhemmin uudelleen."),
                e("f9690dc0", "Valitettavasti et voi lähettää viestejä tälle tilille."),
                e("b1d35408", "Olet ylittänyt päivittäisen viestien lähetysrajan."),
                e("g539cca6", "Tilisi on jäädytetty eikä sillä voi lähettää viestejä."),
                e("bbac001a", "Tämä viesti on liian pitkä."),
                e("a1d2a68e", "Tämä käyttäjä ei seuraa sinua. Voit lähettää viestejä vain henkilöille, jotka seuraavat sinua."),
                e("ec2bb9d4", "Julkaisu, jonka yrität lähettää, on poistettu."),
                e("hf383be4", "Tili, jolle yrität lähettää viestin, on poistettu."),
                e("c4fdbd16", "Et voi lähettää viestejä käyttäjille, jotka olet estänyt."),
                e("hf3e7e38", "Viestiäsi ei voitu lähettää."),
                e("dd8272fd", function (a) {
                    return a.count + " uusi uu" + n(a.count, "si viesti", "tta viestiä");
                }),
                e("e2cd3b7c", "Äänipuhelu päättyi"),
                e("f42f365a", "Videopuhelu päättyi"),
                e("a7570f2c", "Vastaamaton äänipuhelu"),
                e("jd9831b2", "Vastaamaton videopuhelu"),
                e("f0985268", "Äänipuhelu"),
                e("ca397a48", "Videopuhelu"),
                e("bb7e2143", function (a) {
                    return a.seconds + " s";
                }),
                e("c1d4ac84", "Vaihdoit ryhmän kuvan"),
                e("abc7b032", "Ryhmän kuva vaihdettiin"),
                e("i263b294", "Liityit keskusteluun"),
                e("i8d5e62b", function (a) {
                    return a.count + " muuta";
                }),
                e("f7204380", "Tämä Fleet ei ole enää saatavana"),
                e("d9de7b58", "Tämä media on piilotettu, koska se on henkilöltä, jota et seuraa."),
                e("f2879f4e", "Tämä viesti saattaa sisältää sopimatonta mediasisältöä."),
                e("b518221e", "Avaa kuva"),
                e("eeaa9f90", "Avaa video"),
                e("g2b43664", "Avaa GIF"),
                e("d99de549", function (a) {
                    return "Vastauksena käyttäjälle " + a.name;
                }),
                e("f5a07f7c", "Liite"),
                e("fd079470", "Tämä on roskapostia"),
                e("c7a92dca", "Viesti OK"),
                e("fb3ccb56", "Viesti piilotettu epäilyttävän sisällön vuoksi"),
                e("c94b7d8a", "Toista ääniviesti"),
                e("eb6f9582", "Keskeytä ääniviesti"),
                e("b6b4142e", "Tämä julkaisu on piilotettu, koska se on henkilöltä, jota et seuraa."),
                e("fda60d78", "Tämä julkaisu saattaa sisältää sopimatonta mediasisältöä."),
                e("b59a9004", "Avaa julkaisu"),
                e("daf6bf02", "Muuta asetuksia"),
                e("ba60339a", "Poista itseltäsi"),
                e("eb497e08", "Lisää toimintoja"),
                e("b170974a", "Lisää reaktio"),
                e("i202bd22", "Ilmianna viesti"),
                e("f2e5491a", "Kopioi viesti"),
                e("bf2d08ca", "Lisää reaktioita"),
                e("ca7a2215", function (a) {
                    return "Nykyinen reaktiosi: " + a.emoji;
                }),
                e("j4bfee22", "Poistetaanko viesti?"),
                e("faddd3a2", "Viesti poistetaan sinulta. Muut keskustelun osalliset voivat nähdä sen edelleen."),
                e("f58dff34", "Jokin meni pieleen, eikä viestin poisto onnistunut."),
                e("ad5a8e8e", "Pahoittelut! Sinulla ei ole lupaa poistaa tätä viestiä."),
                e("fad48eea", "Lähetetään..."),
                e("ae7d7a24", "Viestin lähettäminen epäonnistui"),
                e("bbe74f3f", function (a) {
                    return "Eilen klo " + a.time;
                }),
                e("h95f9e77", function (a) {
                    return a.reactionCount + " reaktio" + n(a.reactionCount, "", "ita");
                }),
                e("c0098d4a", "Reaktiot"),
                e("j85999ec", "Luettelo käyttäjien reaktioista"),
                e("a2d48779", function (a) {
                    return "Poista tämänhetkinen reaktiosi: " + a.emoji;
                }),
                e("icd0bf34", "Nähnyt"),
                e("e8bd8fec", "Lähetetty"),
                e("b2d32fae", "Nähneet kaikki"),
                e("a763d33f", function (a) {
                    return a.count + " henkilö" + n(a.count, "", "ä") + " nähnyt";
                }),
                e("d84b485e", "Seurasit tätä tiliä"),
                e("be0c83d8", "Hyväksyit pyynnön"),
                e("bcc13060", "Ennakkokäyttö"),
                e("e535cae9", function (a) {
                    return a.count + " seuraaja" + n(a.count, "", "a");
                }),
                e("cf249089", function (a) {
                    return "Liittyi " + a.joinDate;
                }),
                e("g1f972d7", "Lue lisää"),
                e("bb0e37c3", "Lue lisää"),
                e("a89e8ab3", "Lue lisää"),
                e("d98540eb", "Lue lisää"),
                e("j296badb", "Lue lisää"),
                e("e45d77f5", "Lue lisää"),
                e("h52ca4c4", "Uudet viestit"),
                e("ffde2fdc", "Ladataan keskustelua"),
                e("da878dc0", "Hyväksy"),
                e("hc52446c", "Haluatko osallistua tähän ryhmään? Ryhmän jäsenet eivät tiedä sinun nähneen pyyntöä, ennen kuin hyväksyt."),
                e("f7e1ad65", function (a) {
                    return "Haluatko antaa käyttäjän " + a.senderName + " lähettää sinulle viestejä? Hän ei tiedä sinun nähneen viestiä, ennen kuin hyväksyt.";
                }),
                e("gdf4b790", "Poistutaanko keskustelusta?"),
                e("bbf83d84", "Tätä ei voi peruuttaa, ja keskusteluhistoria poistetaan saapuneista viesteistäsi."),
                e("ib3fe8aa", "Estä tai ilmianna"),
                e("gbed8594", "Estämällä estät tätä henkilöä lähettämästä sinulle lisää viestipyyntöjä."),
                e("g9074da4", "Poistu keskustelusta"),
                e("ad63377e", "Poista keskustelu"),
                e("h09b49f8", "Keskustelu poistetaan saapuneista viesteistäsi. Muut keskustelun osapuolet voivat nähdä sen edelleen."),
                e("i6b19b08", "Ilmianna keskustelu"),
                e("cdb1a05a", "Kerro X:lle spämmäyksestä tai väärinkäytöstä, jotta voimme auttaa suojaamaan muita tällaisilta tileiltä."),
                e("d6b11d9c", "Yksityisviestisi lähettäminen epäonnistui, koska osa mediasisällöstä ei latautunut."),
                e("c64c1884", "Kirjoita uusi viesti"),
                e("cdcebd22", "Uusi viesti"),
                e("a66ac766", "Ladataan yksityisviestejä"),
                e("a846382a", "Hae yksityisviesteistä"),
                e("h845f282", "Yksityisviesti"),
                e("d7ad7414", "Viesti ei ole saatavilla"),
                e("ga086a54", "Kuvaliite"),
                e("a9cc8cfe", "Lähetti GIFin"),
                e("eb3d722e", "Lähetit GIF-kuvan"),
                e("e5bfe07e", "Lähetti linkin"),
                e("db53c018", "Lähetit linkin"),
                e("bf584cd2", "Lähetti kuvan"),
                e("f80629ba", "Lähetit kuvan"),
                e("e20b65b0", "Lähetti tarran"),
                e("d30c2d40", "Lähetit tarran"),
                e("a876e58c", "Lähetti videon"),
                e("j7d8101a", "Lähetit videon"),
                e("dedfd266", "Lähetti ääniviestin"),
                e("h7033cac", "Lähetit ääniviestin"),
                e("i34ec422", "Jakoi julkaisun"),
                e("a4939874", "Jaoit julkaisun"),
                e("a30a206e", "Selvä!"),
                e("ib4b1b86", "Esittelyssä kiinnitetyt keskustelut"),
                e("bd3ca2ef", function (a) {
                    return "Valitse toimintovalikko keskustelussa kiinnittääksesi keskustelun kärkeen helposti saataville. Voit kiinnittää enintään " + a.count + " keskustelu" + n(a.count, "n", "a") + " kerrallaan.";
                }),
                e("e1c9ec9c", "Kiinnitetty keskustelu"),
                e("e3cfff7c", "Vaienna keskustelu"),
                e("f398722e", "Keskustelu vaiennettu"),
                e("bdd91964", "Kiinnityksestä poistettu keskustelu"),
                e("a8ed0eca", "Poista keskustelun vaiennus"),
                e("jac4eb1e", "Keskustelun vaiennus lopetettu"),
                e("d88d0790", "Asetusvalikko"),
                e("ce108dda", "Valitse merkintä"),
                e("abf2d13c", "Valitse"),
                e("e4b3f520", "Kiinnitetyt keskustelut"),
                e("ae4d666a", "Kaikki keskustelut"),
                e("d98e066c", "Keskustelu kiinnitetty."),
                e("j302dba8", "Keskustelu irrotettu."),
                e("cb367658", "Keskustelun kiinnitys epäonnistui. Yritä uudelleen."),
                e("ie9a7e48", "Keskustelun kiinnitys epäonnistui. Tarkista yhteys ja yritä uudelleen."),
                e("hd3927c6", "Keskustelun irrotus epäonnistui. Yritä uudelleen."),
                e("f1ac0968", "Keskustelun irrotus epäonnistui. Tarkista yhteys ja yritä uudelleen."),
                e("d571e4f9", function (a) {
                    return "Voit kiinnittää vain " + a.count + " keskustelu" + n(a.count, "n", "a");
                }),
                e("a551bf7e", "Sinun on irrotettava yksi keskustelu voidaksesi kiinnittää uuden."),
                e("a676a876", "Tervetuloa omaan postilaatikkoosi."),
                e("h52877aa", "Kirjoita muutama sana, jaa julkaisuja tai jotain muuta yksityiskeskusteluissa toisten X-käyttäjien kanssa. "),
                e("efe8fda0", "Kirjoita viesti"),
                e("b9dae4f4", "Kokeile toisella hakusanalla"),
                e("e7fb2028", "Ei enempää tuloksia"),
                e("ae111c99", function (a) {
                    return "Ei tuloksia haulla ”" + a.query + "”";
                }),
                e("e8581cce", "Antamallasi hakusanalla ei löytynyt mitään"),
                e("f08940ac", "Aloita uusi viesti"),
                e("i5d7593a", "Kokeile hakea ihmistä, ryhmää tai viestiä"),
                e("c94ac69e", "Ryhmät"),
                e("fb3c8e74", "Viimeisimmät haut"),
                e("fd6150fc", "Yksityisviestien turvaaminen"),
                e("c7e8a9ee", "tietosuojakäytännöstä"),
                e("bece84b4", "Viestipyyntöjä ei ole"),
                e("e51be7c1", "Lue lisää"),
                e("f041be05", function (a) {
                    return a.stringCount + " pending request" + n(a.count, "", "s");
                }),
                e("a2fad0f3", function (a) {
                    return a.stringCount + " new pe" + n(a.count, "rson", "ople") + " you may know";
                }),
                e("cbddf365", function (a) {
                    return a.stringCount + " pe" + n(a.count, "rson", "ople") + " you may know";
                }),
                e("fac945ad", function (a) {
                    return a.stringCount + " new request" + n(a.count, "", "s");
                }),
                e("ed93de0c", "Julkaisua analysoidaan"),
                e("ba44f4ea", "Lisätietoa Grokilta"),
                e("a6e89af8", "Avoin keskustelu"),
                e("ica55d24", "Uusi keskustelu"),
                e("f794af9a", "Hupailutila"),
                e("eccf9fea", "Normaalitila"),
                e("g7b1c574", "Palauta oletusasetukset"),
                e("f388a7ec", "DeepSearch"),
                e("ab1eb384", "Valitse haluamasi hakumoodi"),
                e("i330e54c", "Edistynyt haku ja päättely"),
                e("ac64b674", "Laajennettu haku, enemmän päättelyä"),
                e("j22655f2", "Kysy mitä vain"),
                e("h0681e3e", "Juttele tekoälyapuri Grokin kanssa"),
                e("d593fd78", "Se voi vastata kysymyksiisi, tehdä hakuja X-alustalla ja muodostaa kuvia"),
                e("d0205a24", "Tarkista faktat"),
                e("ed4177c4", "Grok saattaa esittää faktoina asioita, jotka eivät pidä paikkaansa, tehdä virheellisiä yhteenvetoja ja jättää osan sisällöstä huomioimatta. Sinun tulee tarkistaa tiedot itsenäisesti."),
                e("c0ff98f8", "Tekoälyn koulutus ja personointi"),
                e("f1a8218a", "Tietojasi X:ssä sekä vuorovaikutustasi Grokin kanssa, Grokiin syöttämääsi tekstiä ja Grokin tuloksia voidaan käyttää tekoälymallin kouluttamiseen ja hienosäätämiseen sekä Grok-käyttökokemuksesi yksilöimiseen. Voit kieltää tämän X:n asetuksista. Lue lisää ohjekeskuksesta."),
                e("bcbf5b6e", "Jaetaan"),
                e("j7b5c844", "Olet itse vastuussa keskusteluista, jotka jaat julkisesti. Vältä kertomasta arkaluonteista ja luottamuksellista tietoa itsestäsi tai muista keskustellessasi Grokin kanssa (lisätietoa ohjekeskuksesta)."),
                e("c9f7c196", "Ohjekeskus"),
                e("b63d3d36", "Liitä"),
                e("c65f7308", "Palvelimilla pitää kiirettä"),
                e("f2a8655e", "Grokin edistynyt malli ei ole saatavilla juuri nyt."),
                e("c26b9b9c", "Tiedosto"),
                e("g10600b0", "Valikko"),
                e("j826e722", "Tallenna kuva"),
                e("a9325f10", "Kopioi kuva"),
                e("g0b12442", "Kuvan kopiointi ei onnistunut"),
                e("edd0c172", "Julkaise kuva"),
                e("d1d3a41a", "Muokkaa kuvaa"),
                e("a2697040", "Kuvaile, mitä kuvassa pitää muuttaa"),
                e("ge1cefc4", "Työkalut"),
                e("e9b6d404", "Mihin hakutyökaluihin Grokin pitäisi päästä?"),
                e("h15dce2e", "Lisäasetukset"),
                e("ff9dc268", "Muokkaa kehotetta"),
                e("e9fcdd0c", "Pyydä Grokia tekemään aggressiivinen verkkohaku"),
                e("fc4e8aba", "Pyydä Grokia päättelemään vaiheittaisesti"),
                e("e4ae6abe", "Pyydä Grokia muuntamaan kuvasi"),
                e("e8ade5e2", "Valitse persoona"),
                e("b5df32b0", "Grokkaa jotain"),
                e("fb3b9776", "Tämä käyttäjä on mukauttanut Grokin vastauksia."),
                e("ca93f2ee", "Tämä viesti on poistettu."),
                e("b52484b6", "Haetaan..."),
                e("b8c06820", "Kopioi teksti"),
                e("ca0f5894", "Älä tykkää"),
                e("ja8d189e", "Halusin vastauksen tekstinä"),
                e("e951f04e", "Halusin kuvan"),
                e("c503b35e", "Halusin erilaisen kuvan"),
                e("d4371c92", "Koodissa on virheitä"),
                e("dbe8586e", "Halusin erilaista koodia"),
                e("e360eb4a", "En halunnut koodia"),
                e("a18657ca", "Laskuvirhe"),
                e("b8b86300", "En halunnut laskutoimitusta"),
                e("e4c34788", "Väärä vastaus"),
                e("b220a8c8", "Halusin muuta"),
                e("b115fd18", "Puolueellinen vastaus"),
                e("dc637214", "Ikävä tyyli/sävy"),
                e("f02e6d42", "Halusin haun"),
                e("bbec6bba", "Huonoja hakutuloksia"),
                e("b494d088", "En halunnut hakua"),
                e("a44974f2", "Ei ymmärrä kuvaa"),
                e("bd44a8a8", "Kerro lisää"),
                e("fcdbe764", "Miten Grokin pitäisi kehittyä?"),
                e("bb6adb22", "Kuvaile, mikä meni pieleen"),
                e("h0fa15f2", "Kiitos palautteestasi!"),
                e("d700b268", "Hakulähteenä toimineet keskustelut"),
                e("cd7bdab2", "Keskustelujen unohtaminen ei pyyhi niitä keskusteluhistoriasta"),
                e("f21b84de", "Hakulähde unohdettu"),
                e("i52a9cb8", "Ei näytettäviä mainintoja."),
                e("d9d36880", "Unohda"),
                e("g02dacc0", "Tänään"),
                e("c6e845c0", "Eilen"),
                e("a5fa4a86", "tammi"),
                e("c51724a4", "helmi"),
                e("j244ceb2", "maalis"),
                e("b22b12e0", "huhti"),
                e("h3023cac", "toukokuu"),
                e("b10dbffa", "kesä"),
                e("c81da1b6", "heinä"),
                e("d4e4d3ce", "elo"),
                e("c3418f9a", "syys"),
                e("b64dada6", "loka"),
                e("ad24ec20", "marras"),
                e("c7902252", "joulu"),
                e("idf94bac", "Generoi uudelleen"),
                e("f7614f92", "Ilman hakua"),
                e("c5ade3ba", "Haun kanssa"),
                e("c16e5b1a", "Ilman tekoälykuvaa"),
                e("i2ca65fa", "Tekoälykuvan kanssa"),
                e("d3927f88", "Julkaise linkki"),
                e("be37ecd4", "Leikepöydälle kopiointi epäonnistui"),
                e("h708a4c0", "Jaa keskustelu"),
                e("g06a67e2", "Jakosivulla näkyvät viestit tähän asti"),
                e("a0428662", "Ei hyödyllinen"),
                e("fe4fd310", "hyödyllinen"),
                e("bfd161bc", "Vertaa"),
                e("j5dcf1b2", "Päivitetty"),
                e("a50aaa10", "Pre-market"),
                e("dd614d10", "Jälkipörssi"),
                e("d6b0b0d5", function (a) {
                    return "Avaushinta" + a.ttc_stock_details;
                }),
                e("e85f8b65", function (a) {
                    return "Markkina-arvo" + a.ttc_stock_details;
                }),
                e("f92bf10f", function (a) {
                    return "Vuoden ylin" + a.ttc_stock_details;
                }),
                e("d679b09f", function (a) {
                    return "Ylin" + a.ttc_stock_details;
                }),
                e("be7b9409", function (a) {
                    return "P/E-luku" + a.ttc_stock_details;
                }),
                e("a81f5fb9", function (a) {
                    return "Vuoden alin" + a.ttc_stock_details;
                }),
                e("e68d4f21", function (a) {
                    return "Alin" + a.ttc_stock_details;
                }),
                e("bc9c96f9", function (a) {
                    return "Kaikkien aikojen ylin" + a.ttc_stock_details;
                }),
                e("dd679fb1", function (a) {
                    return "Kaikkien aikojen alin" + a.ttc_stock_details;
                }),
                e("a22063d2", "Jakamalla sijaintisi saat tarkempia tuloksia."),
                e("db3248a8", "Ladataan sijaintia"),
                e("ffe0e588", "Jaa sijainti"),
                e("e41a0dc2", "Suljettu"),
                e("ieff24f4", "Kokoaikainen"),
                e("e2811afc", "Ottelut"),
                e("j081fa34", "Pistetaulukko"),
                e("i7c7f156", "Huomenna"),
                e("b134ba52", "Käynnissä"),
                e("j1361724", "Puoliaika"),
                e("fa0f1262", "Tauko"),
                e("c2cac618", "Grokin käytettävissä on tällä hetkellä La Ligan, Englannin valioliigan, Saksan Bundesliigan, Serie A:n ja Ranskan Ligue 1:n tiedot."),
                e("acae223d", function (a) {
                    return 'Results for "' + a.prompt + '"';
                }),
                e("bed99fe2", "Näytä vähemmän"),
                e("f7b57ac0", "Tilastot"),
                e("i7e3e446", "Ottelut"),
                e("d490977e", "Nyt"),
                e("e9f55db8", "sunnuntai"),
                e("e9cf3af8", "maanantai"),
                e("d5868a7e", "tiistai"),
                e("b5dfdb46", "keskiviikko"),
                e("ab8095a2", "torstai"),
                e("e298e6f2", "perjantai"),
                e("ef519654", "lauantai"),
                e("c609a1b4", "su"),
                e("j92274b0", "ma"),
                e("ja482160", "ti"),
                e("f4ad4cb0", "ke"),
                e("d66bf142", "to"),
                e("dc17968a", "pe"),
                e("j310a2d6", "la"),
                e("eaf55eb4", "Näytä miettiminen"),
                e("j1ab5f40", "Napauta lukeaksesi"),
                e("ee000b0d", function (a) {
                    return a.numSources + " lähdettä";
                }),
                e("b1ac6016", "DeepSearch valmis"),
                e("f766feca", "DeeperSearch valmis"),
                e("e258000e", "Ilmoitus"),
                e("d591a772", "Ilmoitus ei saatavilla"),
                e("bc49b728", "Saat ilmoituksen, kun vastaus on valmiina"),
                e("d8aadeba", "Ilmoitus kytketty pois"),
                e("db832e38", "Salli ilmoitukset selaimen asetuksista"),
                e("a910cac6", "Ilmoitusten käyttöönotossa oli ongelmia"),
                e("g4b3a3e6", "DeepSearch valmis"),
                e("bf780b13", function (a) {
                    return a.minutes + " min " + a.seconds + " s ajan";
                }),
                e("c2745fa4", "Keskeytyi"),
                e("be30b6ee", "Yhteys on epävakaa"),
                e("a4d9dbfa", "Mietteet"),
                e("d7cb5408", "Asiaan liittyvät verkkosivut"),
                e("aa7c96bb", function (a) {
                    return "Näytä " + a.numResults + " lisää";
                }),
                e("b58d2bd2", "Asiaan liittyvät julkaisut"),
                e("f5a2377e", "Miettii "),
                e("g3ce0132", "Mietti"),
                e("f8007364", "Laajenna nähdäksesi tiedot"),
                e("ca53f780", "Pienennä tiedot"),
                e("ha8fbe22", "Premium-tilaajana voit muodostaa enemmän kuvia"),
                e("d95c232a", "Raja tuli täyteen. Päivitä tilaus saadaksesi muodostaa lisää."),
                e("h2671312", "Premium-paketilla enemmän Grokia"),
                e("a1bb9c8a", "Premium+-paketilla enemmän Grokia"),
                e("b08ef3ae", "Päivitä X Premium-tilaukseen jatkaaksesi keskustelua tai yritä myöhemmin uudelleen"),
                e("jf9363b8", "Päivitä X Premium+-tilaukseen jatkaaksesi keskustelua tai yritä myöhemmin uudelleen"),
                e("ef018bf6", "Premium-tilaajana voit analysoida enemmän kuvia"),
                e("cdace6d2", "Päivitä nyt"),
                e("a3186bff", function (a) {
                    return a.count + " verkkosivu" + n(a.count, "", "a");
                }),
                e("f4146dda", "Kumpi vastaus on parempi?"),
                e("a2c2be32", "Tämä auttaa tekemään Grokista paremman."),
                e("g01599b6", "Vastaus 1"),
                e("e02694e0", "Vastaus 2"),
                e("h6867fcc", "Tämä vastaus on parempi"),
                e("b2175228", "Grokin Android-versio on täällä"),
                e("d2d8650c", "Hyödynnä Grokia tehokkaimmin uudessa erillisessä sovelluksessa"),
                e("ia5bef3e", "Miten voin olla avuksi?"),
                e("ge683598", "Kysy Grokilta mitä vain"),
                e("fef25c88", "Kokeile Grokia maksutta nyt"),
                e("fb172aa8", "Maksuton Grok-taso on nyt saatavilla alueellasi. Voit keskustella, muodostaa kuvia ja analysoida kuvia. Palveluun sovelletaan rajoituksia."),
                e("d7af4f40", "Muodosta kuva galaksista"),
                e("gcb6c0be", "Grok tekee virheitä. Tarkista itse sen tuottama teksti."),
                e("cb88fd82", "Käytät Grokin maksutonta versiota."),
                e("g27a5314", "Jos haluat aloittaa Grokin käytön, lisää puhelinnumero tilillesi."),
                e("bdd84568", "Tilisi on liian uusi, jotta voisit käyttää Grokia. Yritä myöhemmin uudelleen."),
                e("a9109a94", "Solarpunk-kylä"),
                e("g986f7a4", "Tuota kuva solarpunk-kylästä"),
                e("ad685264", "Fuji-vuori"),
                e("hdb08284", "Tee anime-kuva Fuji-vuoresta"),
                e("a986ae84", "Lentävä kissa"),
                e("a14b556a", "Tuota kuva lentävästä kissasta"),
                e("gc16b670", "Robotti kukkakedolla"),
                e("d5b8fa44", "Tuota kuva robotista kukkakedolla"),
                e("da196ff6", "Astronautti Marsissa"),
                e("ae3979cc", "Tee kuva astronautista Marsissa"),
                e("a682460e", "Avoauto vauhdissa"),
                e("e03e5514", "Tee kuva avo-Teslasta Shinjukussa, lisää vauhtisumeutta"),
                e("e68eac68", "Revontulten ihastelua"),
                e("hc6e6754", "Tee kuva, jossa joku ihastelee revontulia"),
                e("cf59f9f6", "Auta kirjoittamaan saatekirje"),
                e("cd9aeac8", "Kerro päivän uutisaiheet"),
                e("acf2f0be", "Suosittele fantasia-RPG-peliä"),
                e("b9bd12e2", "Ratkaise two-sum-tehtävä Pythonilla"),
                e("hf9afab0", "Anna DeepSearchin skannata internetiä ja X:ää, analysoida informaatiota ja tuottaa tarkkoja ja perusteltuja vastauksia nopealla toimijahaulla."),
                e("ef3b3f04", "Anna Grokin miettiä käyttäen päättelymalliamme. Se toimii parhaiten matematiikan, luonnontieteiden ja koodauksen kysymyksissä. Voit pyytää Grokia myös miettimään ankarammin kysymystä, joka vaatisi enemmän ajattelukapasiteettia. "),
                e("b43636b8", "Esittelyssä Grok 3"),
                e("j376298c", "Grok 3 sisältää kaksi uutta vuorovaikutusmoodia tehokkaaseen hakuun: DeepSearch ja Mieti."),
                e("e3584f8e", "Mitkä 10 optiokaupankäynnin strategiaa menestyvät parhaiten hedgerahastojen käytössä"),
                e("d91b7b8a", "Mitä maksaisi yliopiston rakentaminen vuonna 1885?|"),
                e("e13591c0", "Grok-esimerkkikeskustelu"),
                e("c27ca452", "Premium-tilaajat pääsevät käyttämään X:ssä edistyneintä tekoälyämme, Grokia."),
                e("b6abc25a", "Esittelyssä Grok 2"),
                e("e1cdaf9e", "X-alustan uusin AI-apuri"),
                e("e6796748", "Kysy mitä vain"),
                e("db470fdc", "Grok voi olla avuksi arjessa: se kirjoittaa sähköpostiviestejä, vastaa kysymyksiin ja ehdottaa reseptejä."),
                e("e9adc2d0", "Koodaa paremmin"),
                e("aaab6cdc", "Kysy vaikka ohjelmoinnista tai pyydä apua käsitteiden opetteluun."),
                e("jd08d606", "Ryhdy luovaksi"),
                e("he526d22", "Uusi tekoälytuettu kuvageneraattori luo huikeita teoksia."),
                e("i6932876", "Kyberpunk-kuva"),
                e("j7cdee8e", "Pysy ajan tasalla"),
                e("f1f683c2", "Saa ajantasaiset uutisotsikot ja puheenaiheet suoraan X:ssä."),
                e("h73b9cc0", "Viestiäsi ei lähetetty, koska et ole tällä hetkellä yhteydessä chattiin"),
                e("b6c73662", "Lähetä viesti"),
                e("h6070fdc", "Keskusteluasetukset"),
                e("d49326ba", "Piilota avatarit"),
                e("h79f3532", "Näytä avatarit"),
                e("a8c1e2f0", "Piilota moderointitoiminnot"),
                e("jd83edd4", "Näytä moderointitoiminnot"),
                e("ecca11ac", "Piilota aikaleimat"),
                e("e358a9f8", "Näytä aikaleimat"),
                e("fca62374", "Avaa keskustelu uuteen ruutuun"),
                e("fe20f01b", function (a) {
                    return "Hiljennetäänkö " + a.name + "?";
                }),
                e("f5dc372a", "Hiljentäminen poistaa kaikki käyttäjän kirjoittamat viestit ja estää keskusteluun osallistumisen häneltä loppulähetyksen ajan."),
                e("e91dd1fa", "Moderaattori poisti viestin."),
                e("d1da3709", function (a) {
                    return "Vastauksena käyttäjälle " + a.username + ": " + a.body;
                }),
                e("fc82a896", "Tämä lähetys on päättynyt"),
                e("ea58dbd0", "Tämä lähetys ei ole alkanut"),
                e("cb5b6784", "Lähettäjän rajoittama"),
                e("eba27300", "Vain lähettäjän seuraamat tilit voivat chattailla"),
                e("f28984fb", function (a) {
                    return "Vain käyttäjän " + a.screenName + " seuraamat tilit voivat chattailla";
                }),
                e("a3fec810", "Tilaa Premium saadaksesi chatin käyttöösi"),
                e("dbf0b235", function (a) {
                    return "Tilaa " + a.screenName + " voidaksesi chattailla";
                }),
                e("ifbd8342", "Avaa Live-näyttö"),
                e("f935d3ce", "Avaa chat"),
                e("abbe8212", "Sulje chat"),
                e("hdf040dd", function (a) {
                    return a.percentage + " % valmis";
                }),
                e("e4f6bd9e", "Hups, jokin meni pieleen. Yritä myöhemmin uudelleen."),
                e("ac966f94", "Selainta ei tueta"),
                e("ca86b62c", "tai"),
                e("d5568440", "Kirjoita vahvempi salasana."),
                e("d0511fe6", "Puhelinnumero on jo käytössä toisella tilillä. Käytä toista numeroa."),
                e("cd24fe60", "Kirjoita kelvollinen puhelinnumero."),
                e("gf8388fe", "Maatunnus"),
                e("c52be452", "Kyllä, poista"),
                e("bcb388a0", "Tämä poistaa kaikki aiemmin lataamasi yhteystiedot ja poistaa osoitekirjan synkronoinnin X:ään käytöstä kaikilta laitteilta. Huomaa, että tämä kestää jonkin aikaa."),
                e("ec129eb6", "Olet onnistuneesti poistanut yhteystietosi."),
                e("f1b5048a", "Yhteystietojesi poistamisessa tapahtui virhe."),
                e("hc72e1fc", "Kirjoita toimiva sähköpostiosoite."),
                e("bc0ad88a", "Plus-osoitteiden käyttöä (+-merkin lisääminen sähköpostiosoitteeseen) ei sallita. Anna kelvollinen sähköpostiosoite."),
                e("f134915f", function (a) {
                    return a.count + " valittua kohdetta";
                }),
                e("b8fb87e0", "Näytä valitut aiheet"),
                e("e854ad27", function (a) {
                    return "Aihe - " + a.title;
                }),
                e("e4ff75aa", "Jokin meni pieleen. Tarkista yhteytesi ja yritä uudelleen."),
                e("b60eba9e", "Tarkistetaan ensin yksi asia. Vahvista, ettet ole robotti, suorittamalla Google reCAPTCHA-tehtävä."),
                e("ba939778", "Oletko robotti?"),
                e("d44efc66", "Mikä on nimesi?"),
                e("b4867a18", 'Koko nimesi ei voi sisältää sanaa "Twitter".'),
                e("j1c3f4b9", function (a) {
                    return "Muuta syntymäaikaa " + a.birthdate;
                }),
                e("j231d352", "Seuraa kaikkia"),
                e("c203db71", function (a) {
                    return "Ladataan käyttäjän @" + a.screenName + " julkaisuja";
                }),
                e("c9a1cb5e", "Tätä tiliä ei ole olemassa"),
                e("e7b201de", "Kokeile muulla nimellä."),
                e("ica87fde", "Sinut on estetty"),
                e("c7ec6faf", "Lue lisää"),
                e("e79ed125", function (a) {
                    return "@" + a.screenName + " on estetty";
                }),
                e("gba95028", "Katso julkaisut"),
                e("a2216a79", "Lue lisää"),
                e("a2811f96", "Profiiliaikajanat"),
                e("d25805fa", "Tilaajille"),
                e("b05be0c8", "Kohokohdat"),
                e("b9891db3", function (a) {
                    return "Julkaisut, joihin " + a.fullName + " (@" + a.screenName + ") on vastannut";
                }),
                e("e1ab545d", function (a) {
                    return "Ladataan käyttäjän @" + a.screenName + " julkaisuja Tilaajille";
                }),
                e("ac3f4be9", function (a) {
                    return "Ladataan käyttäjän @" + a.screenName + " kohokohtia";
                }),
                e("da38f955", function (a) {
                    return "Ladataan kirjoittajan @" + a.screenName + " artikkeleita";
                }),
                e("b7363b66", "Lähetä julkaisu"),
                e("ce659062", "Tarjoa sisältöä Tilaajillesi"),
                e("f1e98cc2", "Esittele parhaat julkaisusi"),
                e("d5c743c6", "Kirjoita artikkeli"),
                e("d1e5e328", "Kun olet, se näkyy täällä."),
                e("hb26a1fe", "Siitä vain — ala julkaista bonussisältöä. Kaikki julkaisusi Tilaajille näkyvät täällä."),
                e("b7c3572e", "Näin lisäät kohokohdan profiiliisi:\n\n1. Mene mihin tahansa tekemääsi julkaisuun\n2. Napauta valikkopainiketta ”•••”\n3. Napauta ”Lisää kohokohtiin / poista kohokohdista”"),
                e("i8123550", "Kun julkaiset artikkelin, se näkyy täällä."),
                e("b786a77d", function (a) {
                    return "@" + a.screenName + " ei ole julkaissut";
                }),
                e("j7b80397", function (a) {
                    return "@" + a.screenName + " ei ole vielä julkaissut yhtään julkaisua Tilaajille";
                }),
                e("jbae8c54", "Saatavana ei ole kohokohtajulkaisuja."),
                e("g8fb219e", "Artikkeleita ei ole saatavana."),
                e("f34dfc18", "Kun julkaisee, julkaisut näkyvät täällä."),
                e("h9346040", "Julkaisut Tilaajille ilmestyvät tänne, kun niitä julkaistaan."),
                e("i4c3ddc6", "Julkaistut artikkelit näkyvät täällä."),
                e("e0118142", "Julkaise nyt"),
                e("e0c1d871", function (a) {
                    return "Käyttäjän " + a.fullName + " julkaisut";
                }),
                e("c575828f", function (a) {
                    return "Käyttäjän " + a.fullName + " julkaisut Tilaajille";
                }),
                e("e8300dbb", function (a) {
                    return "Käyttäjän " + a.fullName + " kohokohdat";
                }),
                e("c46b420d", function (a) {
                    return "Käyttäjän " + a.fullName + " artikkelit";
                }),
                e("h5a65db7", function (a) {
                    return "Käyttäjän " + a.fullName + " (@" + a.screenName + ") julkaisut Tilaajille";
                }),
                e("g7ccac9d", function (a) {
                    return "Käyttäjän " + a.fullName + " (@" + a.screenName + ") kohokohdat";
                }),
                e("ja6e5d35", function (a) {
                    return "Artikkelit kirjoittajalta " + a.fullName + " (@" + a.screenName + ")";
                }),
                e("h088ae72", "Profiilijulkaisut"),
                e("hbf64b75", function (a) {
                    return "Käyttäjän " + a.fullName + " (@" + a.screenName + ") tykkäämät julkaisut";
                }),
                e("a64da953", function (a) {
                    return "Ladataan käyttäjän @" + a.screenName + " tykkäyksiä";
                }),
                e("be3d5b9f", function (a) {
                    return "@" + a.screenName + " ei ole tykännyt yhdestäkään julkaisusta";
                }),
                e("d34b5306", "Kun tykkää, julkaisut näkyvät täällä."),
                e("bb0e41bc", "Sinulla ei vielä ole tykkäyksiä"),
                e("d3d4a21c", "Kerro pitäväsi julkaisusta napauttamalla sydäntä sen kohdalla. Tykkäyksesi näkyvät täällä."),
                e("d95c3d31", function (a) {
                    return "Käyttäjän " + a.fullName + " tykkäämät julkaisut";
                }),
                e("eeb7d696", "Tykkäyksesi ovat yksityisiä. Kukaan muu ei näe niitä."),
                e("h6e91bb1", function (a) {
                    return "Käyttäjän " + a.fullName + " (@" + a.screenName + ") mediajulkaisut";
                }),
                e("fe38901b", function (a) {
                    return "Ladataan käyttäjän @" + a.screenName + " mediasisältöä";
                }),
                e("bc4223a3", function (a) {
                    return "@" + a.screenName + " ei ole julkaissut mediaa";
                }),
                e("ccc363f6", "Kun on, julkaisut näkyvät täällä."),
                e("d1614228", "Valot, kamera... liitteet!"),
                e("d7dc8d0a", "Kun julkaiset kuvia tai videota, ne näkyvät täällä."),
                e("hf761abf", function (a) {
                    return "Käyttäjän " + a.fullName + " media";
                }),
                e("je5311d3", function (a) {
                    return "Tilin " + a.fullName + " (@" + a.screenName + ") affiliaatit";
                }),
                e("fd0772eb", function (a) {
                    return "Ladataan tilin @" + a.screenName + " affiliaatteja";
                }),
                e("ccf03833", function (a) {
                    return "Tilin " + a.fullName + " affiliaatit";
                }),
                e("ba5a88e4", "Ehdotettu"),
                e("ddee8ae2", "Näytä kaikki avoimet työpaikat"),
                e("d2a04c68", "Tule meille töihin"),
                e("dc12a126", "Pyydä reittiohje"),
                e("e2acb642", "Ota yhteyttä"),
                e("ha9b8035", function (a) {
                    return "Soita " + a.phoneCode + " " + a.phoneNumber;
                }),
                e("g2244521", function (a) {
                    return "Tekstaa " + a.phoneCode + " " + a.phoneNumber;
                }),
                e("b44c0205", function (a) {
                    return a.day + " klo " + a.time;
                }),
                e("de1123f5", function (a) {
                    return "klo " + a.time;
                }),
                e("e2a5bd50", "Avoinna 24 h"),
                e("e0d7da6c", "Suljetaan"),
                e("i7059f56", "Avataan"),
                e("a7391348", "Ei aukioloaikoja tiedossa"),
                e("c9eba532", "Aukioloajat päivitetty"),
                e("b5fea270", "Tuotekaruselli"),
                e("h10bb33c", "Ilmiannatko tuotteen?"),
                e("dda5d96a", "Ilmianna tuote"),
                e("fca46f40", "ohjekeskuksessa"),
                e("c71a053b", "saat täältä"),
                e("d7f8a117", function (a) {
                    return a.days + " päivän tilastot";
                }),
                e("cae20e93", function (a) {
                    return a.days + " päivän";
                }),
                e("gc767fda", "Vain sinulle"),
                e("c7c85e0c", "Saa tilastot käyttöösi"),
                e("b15df4b4", "Julkaisujesi yhteenlasketut näytöt X:ssä"),
                e("e5fe61e0", "Näyttökerrat"),
                e("d1018321", function (a) {
                    return a.value + " julkaisujesi näyttökertaa viimeisten " + a.period + " aikana";
                }),
                e("e623137c", "Toiminta-aste"),
                e("d9d34182", "Julkaisujen aikaansaamat toiminnat jaettuna näyttökerroilla."),
                e("aeee0182", "Profiilikäynnit"),
                e("b2bde01a", "Julkaisuistasi kertyneet profiilinäytöt"),
                e("faf4c1f5", function (a) {
                    return a.value + " käyntiä profiilissasi viimeisten " + a.period + " aikana";
                }),
                e("d5f1e554", "Linkin klikkaukset"),
                e("cf573986", "Julkaisujesi URL-osoitteiden klikkaukset"),
                e("j761451e", "Uudet seuraajat"),
                e("e1a87d14", "Saamiesi uusien seuraajien lukumäärä (luku ei sisällä seuraamisen lopettaneita)"),
                e("j590577e", "Julkaisuihin saamiesi vastausten määrä"),
                e("ia1da622", "Julkaisuihin saamiesi tykkäysten määrä"),
                e("cfd1036b", function (a) {
                    return a.value + " tykkäystä julkaisuihisi viimeisten " + a.period + " aikana";
                }),
                e("ja42739e", "Uudelleenjulkaisut"),
                e("ca6e8de0", "Julkaisujesi uudelleenjulkaisujen määrä"),
                e("b1b4d57e", "Videonäytöt"),
                e("bdaf100e", "Videonäyttöjen lukumäärä julkaisuissasi"),
                e("ca826772", "Medianäytöt"),
                e("j43b8f52", "Median (GIF, kuvat, videot) saamat näyttökerrat"),
                e("d3969c06", "Loppuunkatseluaste"),
                e("c58c3476", "Videoiden loppuukatselumäärä jaettuna videonäyttöjen määrällä"),
                e("c8aae62a", "Julkaisujesi kirjanmerkkeihin tallennusten määrä"),
                e("g70825e0", "Jaot"),
                e("c6fbefd4", "Julkaisujesi jakojen määrä"),
                e("dbe9353e", "Toiminnat"),
                e("a3a4e8f8", "Kuukausi"),
                e("eb2e0272", "Viiva"),
                e("e298b08e", "Pylväs"),
                e("bbc6e7c6", "Yhdysvallat"),
                e("h88ad664", "Kanada"),
                e("gd139910", "Yhdistynyt kuningaskunta"),
                e("e08feda2", "Japani"),
                e("fad772ce", "Lähi-itä ja Pohjois-Afrikka"),
                e("a396dd6c", "Aasia ja Tyynenmeren alue"),
                e("j942b16c", "Eurooppa ja kasvumarkkinat"),
                e("j3cc0c00", "Latinalainen Amerikka"),
                e("fe90a642", "13–17"),
                e("a5c91a8e", "18—24"),
                e("cf30cdfa", "25—34"),
                e("gf672f7c", "35—44"),
                e("jf28b41c", "45—54"),
                e("ja78da94", "55—64"),
                e("g42ea0b0", "65+"),
                e("f21807e0", "Päivittämällä Premiumiin näet vähemmän mainoksia ja saat käyttöösi käteviä työkaluja."),
                e("d61b2bcc", "Yhteisöjulkaisut"),
                e("h3525cb8", "Määrittämätön"),
                e("a3c544e8", "Kärkimaat"),
                e("f30795d0", "Avaa profiilikuvan"),
                e("gd7acb84", "Luo profiili"),
                e("b7636014", "Lähetä viesti"),
                e("haad225c", "Anna Premium lahjaksi"),
                e("b63c46ed", function (a) {
                    return "Tilaa @" + a.screenName;
                }),
                e("j33d8902", "Lähetä tippi"),
                e("a8ab3d08", "Lähetä käyttäjälle"),
                e("d740d2d9", function (a) {
                    return a.service + "-linkki kopioitu leikepöydälle";
                }),
                e("a7cf1e98", "Bandcamp"),
                e("d876e67e", "Bitcoin-osoite"),
                e("f85f6760", "Cash App"),
                e("a32a7c06", "Ethereum-osoite"),
                e("cc1a3bc4", "GoFundMe"),
                e("d4d74bb4", "Patreon"),
                e("h14fbc52", "PayPal"),
                e("h1198dcc", "Venmo"),
                e("j4e0fd88", "Näytä lisää"),
                e("df7cb6d4", "Toimialat"),
                e("ec429e79", "Lue lisää."),
                e("j04c717a", "+ Lisää kokemus"),
                e("a1ea2f12", "Paljon onnea!"),
                e("g8191e78", "Hänellä on tänään syntymäpäivä!"),
                e("c1b819ba", "Syntymäpäiväilmapallot näytetään tässä tänään"),
                e("ad7a451e", "Käännä kuvaus"),
                e("f543dbf6", "Varmennettu puhelinnumero"),
                e("cef4e8cf", function (a) {
                    return "Poistetaanko käyttäjän @" + a.screenName + " hiljennys?";
                }),
                e("h03a094a", "Tämän tilin julkaisut on nyt sallittu aikajanallasi."),
                e("a6e94418", "Olet hiljentänyt tämän tilin julkaisut."),
                e("dd3d10f6", "Arvioitavana"),
                e("i06d4712", "Tiimimme tarkistaa tilisi. Saat valintamerkin muutaman päivän kuluessa."),
                e("j354c438", "Arvioitavana-merkintä näkyy vain sinulle."),
                e("e018b5fa", "Hanki tilillesi varmennus"),
                e("b74bd6c6", "Tämä tili on varmennettu siksi, että se on merkittävä hallinnon, uutisvälityksen, viihteen tai muun nimetyn kategorian edustaja."),
                e("e1e0c916", "Tämä tili on varmennettu, koska se on Premiumin tilaaja."),
                e("eb5d72e4", "Tämä tili on suojannut julkaisunsa. Vain tilin seuraajat pääsevät lukemaan niitä."),
                e("g776ca50", "Varmennettu tili"),
                e("ad465ee8", "Ilmoita ensisijainen affiliaatio"),
                e("d01612d3", function (a) {
                    return "Varmennettu " + a.date + " lähtien.";
                }),
                e("e14d8719", function (a) {
                    return a.year + " eaa.";
                }),
                e("b7caffb7", function (a) {
                    return "" + a.name;
                }),
                e("ea8c425f", function (a) {
                    return "@" + a.viewerScreenName + ", tilisi ei ole vielä varmennettu";
                }),
                e("b2d0c0f4", "Varmenna tilisi kuten "),
                e("f464d54d", function (a) {
                    return "@" + a.profileScreenName;
                }),
                e("g47cdc0e", " niin erotut joukosta ja tavoittavuutesi paranee."),
                e("d834ab9c", "Kyllä, näytä profiili"),
                e("cb339f26", "Varoitus: Tämä tili on käyttäytynyt oudosti viime aikoina"),
                e("hf06085e", "Näet tämän varoituksen, koska tällä tilillä on ollut epätavallista toimintaa. Haluatko silti nähdä sisällön?"),
                e("aa959f36", "Varoitus: Tilin käyttöä on rajoitettu väliaikaisesti"),
                e("jf604336", "Varoitus: Profiilin sisältö voi olla arkaluonteista"),
                e("c9bfda48", "Varoitus: Tämä profiili saattaa sisältää arkaluonteista aineistoa. Saat tämän varoituksen, koska tili käyttää mahdollisesti loukkaavia kuvia tai kieltä. Haluatko silti nähdä sen?"),
                e("g29ebf26", "Näet tämän varoituksen, koska tili julkaisee mahdollisesti arkaluonteisia kuvia tai tekstejä. Haluatko silti nähdä sen?"),
                e("jcfb7fba", "Näet tämän varoituksen, koska tili on mahdollisesti rikkonut X:n sääntöjä. Haluatko silti nähdä sen?"),
                e("bd598c70", "Nämä julkaisut ovat suojattuja"),
                e("e617164b", "Lue lisää"),
                e("g8475f82", "Tili jäädytetty"),
                e("j5e1cf59", "X:n sääntöjä"),
                e("gbf342a4", "Tili rajoitettu"),
                e("defba9a4", "Tervetuloa X:ään!"),
                e("d11934ec", "Vastaanota ilmoituksia"),
                e("a2cd2b0a", "Seuraa ja vastaanota ilmoituksia"),
                e("a70bae53", function (a) {
                    return "Nyt saat ilmoituksen aina, kun " + a.fullName + " julkaisee.";
                }),
                e("f51a4c29", function (a) {
                    return "Nyt voit seurata tiliä " + a.fullName + " ja saada ilmoituksen aina, kun hän julkaisee.";
                }),
                e("cfa5e58d", function (a) {
                    return "Seuraat tiliä " + a.fullName + ", joten saat ilmoituksen aina, kun hän julkaisee.";
                }),
                e("be3a652d", function (a) {
                    return "Saat ilmoituksen aina, kun " + a.fullName + " julkaisee.";
                }),
                e("f089620c", "Kotiaikajanasi"),
                e("a1ab9c80", "Tässä Yhteisössä ei vielä ole julkaisuja"),
                e("b32c4fb0", "Kun on, näet ne täällä."),
                e("bf17deda", "Aloitetaan!"),
                e("c3fbf1da", "Täältä näet parhaiten, mitä maailmassasi tapahtuu. Löydä mieluisia seurattavia käyttäjiä ja aiheita."),
                e("a2515900", "Odotetaan julkaisuja"),
                e("je23cdb2", "Julkaisut tämän listan ihmisiltä näkyvät täällä."),
                e("e69b7e02", "Hallitse tilejä"),
                e("b6bd6ae4", "Nykyinen tili"),
                e("d577bccd", function (a) {
                    return "Jos sinulla on useampi kuin yksi X-tili, voit lisätä muut tilit ja vaihtaa helposti tilistä toiseen. Voit lisätä enintään " + a.maxAccounts + " tiliä.";
                }),
                e("dc65b3e5", function (a) {
                    return "Olet saavuttanut tilien enimmäisrajan " + a.maxAccounts + ".";
                }),
                e("b8045b33", function (a) {
                    return "Olet saavuttanut tilien enimmäisrajan " + a.maxAccounts + ".";
                }),
                e("d075dc89", function (a) {
                    return "Olet saavuttanut henkilökohtaisten tilien enimmäisrajan " + a.maxAccounts + ".";
                }),
                e("bade139e", "Kirjaudu ulos kaikilta tileiltä"),
                e("ae33b982", "Kirjaudutaanko ulos kaikilta tileiltä?"),
                e("fa07bf68", "Tämä koskee kaikkia tilejäsi selaimesi kaikilla välilehdillä."),
                e("f7865ab6", "Eikö tili ole sinun?"),
                e("a35248e4", "Tili ei ole minun"),
                e("f794a67c", "Tili on minun"),
                e("j79c0ff7", function (a) {
                    return "Olemme poistaneet osoitteen " + a.emailAddress + " tältä tililtä";
                }),
                e("fb46383c", "Et voi poistaa sähköpostiosoitetta omalta tililtäsi."),
                e("gcfdbc2b", function (a) {
                    return "Sähköpostiosoite ei ole enää liitetty X-tiliin " + a.screenName + ".";
                }),
                e("f351663c", function (a) {
                    return "@" + a.screenName;
                }),
                e("baaa89c4", function (a) {
                    return "" + a.emailAddress;
                }),
                e("h75b475c", function (a) {
                    return "@" + a.screenName;
                }),
                e("a8f0e157", "ilmoitusasetuksissa"),
                e("h1732cde", function (a) {
                    return "" + a.emailAddress;
                }),
                e("d374a600", function (a) {
                    return "@" + a.screenName;
                }),
                e("c1d75571", "Miksi sähköpostiosoitteesi oli liitetty X-tiliin, joka ei ole sinun?"),
                e("ac71e82f", "Lue lisää"),
                e("b069d89c", "Yleisö"),
                e("f5a61ae6", "Sisältö"),
                e("a4df00c0", "Tilin tilastovälilehdet"),
                e("ac248548", "Tilin yleiskuvaus"),
                e("je62f358", "Viimeiset 28 vrk"),
                e("bc2f16a4", "Aktiiviset ajat"),
                e("d603209e", "Toimintojen erittely"),
                e("ac3fb6de", "Paikalla huoneessa"),
                e("ie181958", "Yleisötiedot"),
                e("j6f8d422", "Videoittesi keskimääräinen katseluaika."),
                e("e7479ce4", "Katseluaika keskimäärin"),
                e("g1dfa7d0", "Keskiarvo"),
                e("h7d28188", "Takaisin sisältöön"),
                e("if2704e4", "Back to Live Overview"),
                e("ea928ae4", "Palaa huoneisiin"),
                e("e8c07c22", "broadcast"),
                e("a4ce6e68", "Broadcast Metrics"),
                e("b2214c74", "Total number of views for this broadcast"),
                e("d4fcf83a", "Total time viewers spent watching this broadcast"),
                e("a89b0322", "Peruttu"),
                e("j3cb12ea", "Samanaikaisia kuuntelijoita"),
                e("b93931ee", "Sisältösi julkaisukertojen määrä."),
                e("a1814798", "Vastauskertasi julkaisuun."),
                e("addd5575", function (a) {
                    return "pe" + a.date;
                }),
                e("a92e62bd", function (a) {
                    return "ma" + a.date;
                }),
                e("g7450c57", function (a) {
                    return "la" + a.date;
                }),
                e("h08883e7", function (a) {
                    return "su" + a.date;
                }),
                e("ddb16777", function (a) {
                    return "to" + a.date;
                }),
                e("h8f395b3", function (a) {
                    return "ti" + a.date;
                }),
                e("b8710b43", function (a) {
                    return "ke" + a.date;
                }),
                e("d9c70840", "Laite"),
                e("ba55e824", "Päättynyt"),
                e("id276c42", "Sisältösi käyttökertojen määrä."),
                e("j033d090", "Arvioitu tulo"),
                e("efd4d7d4", "Suodata huoneita"),
                e("a1334290", "Ensimmäiset 48 tuntia"),
                e("gc10a3b0", "Seuraamiset suhteessa aikaan"),
                e("efa0f858", "Seuraamisten ja seuraamisten lopettamisten määrä suhteessa aikaan. Tämä ei välttämättä korreloi seuraajamääräsi kanssa."),
                e("g2b06cc6", "Sukupuolitieto voi olla päätelty"),
                e("b66b3baa", "tuntia"),
                e("cf8a0772", "Impression to Views"),
                e("g13d8010", "Last 48 Hours"),
                e("d5627596", "Last Hour"),
                e("baf120a6", "Heikoin osallisuus"),
                e("f2382014", "LIVE"),
                e("c4a7a6aa", "Live data"),
                e("a992032a", "Livestream Analytics"),
                e("ie45edda", "Livestriimin yleiskuvaus"),
                e("e30fc268", "Live Viewers"),
                e("bd37f68e", "Mediatoiminnat"),
                e("jd03a1b8", "Minutes Watched"),
                e("a20e91e8", "minutes watched"),
                e("ic2bebee", "Kaupallisessa käytössä"),
                e("a1d642c8", "Vahvin osallisuus"),
                e("ifc4c1f8", "Tällä sisällöllä saatujen uusien seuraajien määrä."),
                e("fff1315a", "Valitulla suodattimella ei ole saatavana lähetyksiä"),
                e("jbcb09a8", "Tietoja ei ole vielä riittävästi"),
                e("df846d6c", "Valitulla aikavälillä ei löytynyt julkaisuja."),
                e("g2ba40f6", "Valitulla suodattimella ei ole saatavilla huoneita"),
                e("j44061a0", "Not available"),
                e("c4a93912", "N/A"),
                e("a6b78788", "No viewer data available"),
                e("b2438638", "kokonaismäärästä"),
                e("ic0399e0", "Orgaaniset näytöt"),
                e("ja5c444a", "Maksukausi"),
                e("f04e025e", "Samanaikaisia kuuntelijoita enimmillään"),
                e("d6d10662", "Peak Viewers: "),
                e("d147bea2", "Kokeile myöhemmin uudelleen"),
                e("f0336d68", "Julkaisukohtaiset tilastot"),
                e("g85fbd2e", "Julkaisun tunnus"),
                e("ice5c5b6", "Tämän sisällön käyttäjille näyttöjen määrä."),
                e("hf4f9bfe", "Julkaisun linkki"),
                e("bf5ebf5c", "Julkaisut ja vastaukset"),
                e("b211652e", "Julkaisut suhteessa aikaan"),
                e("f2efec0a", "Pre-Published"),
                e("i61e0302", "Edellinen"),
                e("e08a706a", "Mainostetut näytöt"),
                e("cbc99192", "Julkaisupäivä"),
                e("a83c2a9a", "Realtime"),
                e("e9d72896", "Tallenne"),
                e("gede4932", "Toista"),
                e("h0de359c", "Tämän sisällön uudelleenjulkaisujen määrä."),
                e("e0568f2c", "Ajoitettu: "),
                e("gd86baa8", "Ajoitettu alku"),
                e("fef3bfae", "Valitse toissijainen tilastotieto"),
                e("g7e3d2a4", "Huoneen tilastot"),
                e("fbc79a40", "Huoneiden yleiskatsaus"),
                e("d077112a", "Huoneen tilastot"),
                e("cf3709da", "Tila"),
                e("e797dc32", "Stream time: "),
                e("b649d8cc", "Vain tilaaja"),
                e("j9282130", "Broadcast thumbnail"),
                e("g629b8b0", "Timed Out"),
                e("eb87323c", "This shows analytics data for the selected time period since the livestream happened."),
                e("i6a75722", "Time Range"),
                e("c602f5b8", "Yhteensä"),
                e("b35e68ae", "Osallistujien kokonaismäärä"),
                e("h78ee79a", "Katsottu uusintana yhteensä"),
                e("e3efaed0", "Tyyppi"),
                e("c37993e2", "Seuraamisen lopettamiset"),
                e("b1ed35d0", "Unique Viewers"),
                e("bfad9306", "Tuntematon"),
                e("b5a58f36", "Untitled Broadcast"),
                e("i70f5278", "Ladattu:"),
                e("a98b58b6", "Varmennetut seuraajat"),
                e("a5de67ca", "Tilinsä varmentaneiden seuraajien määrä."),
                e("g3367ff4", "Videon katseluaste"),
                e("a7b48b36", "Loppuun saakka katsottujen videonäyttöjen osuus."),
                e("a2580f2a", "Loppuunkatseluaste"),
                e("ff95a9cc", "Videon tunnus"),
                e("a97e358e", "Videon linkki"),
                e("e10e8b46", "Näytetään videot viimeisten 100 päivän ajalta.");
            e("ba37f6da", "Yhteenveto videoista"),
                e("f19846b2", "Videon esikatselukuva"),
                e("ccd6f4a8", "Videon nimi"),
                e("c8410542", "Videosi katselumäärä."),
                e("a532072a", "Katsojat"),
                e("d9508ab0", "näyttöä"),
                e("d9f9dec0", "Näytä huone"),
                e("h0c1f37a", "Näytä huoneen tilastot"),
                e("e41fffbc", "Videoittesi katseluaika yhteensä."),
                e("if2909ba", "Katseluaika"),
                e("i0e5bf4c", "Videosi"),
                e("ed99baea", "Beta-ennakkokäyttö"),
                e("gf898b70", "Tarkennettu haku"),
                e("d2a43a7a", 'sisältää sekä termit "ai" että "startup"'),
                e("a8584698", "ai startup"),
                e("jb6f9292", 'sisältää koko fraasin "ai startup"'),
                e("j8ee77c4", '"ai startup"'),
                e("d0480758", 'sisältää joko termin "ai" tai "startup" (tai molemmat)'),
                e("f0048fa2", "ai OR startup"),
                e("da0df186", 'sisältää termin "ai", mutta ei termiä "startup"'),
                e("f2f463ea", "ai -startup"),
                e("a10a357e", 'sisältää termin "ai" ja on saanut ainakin 50 tykkäystä'),
                e("ca8ed1e8", "ai min_faves:50"),
                e("i945a3f2", 'sisältää termin "ai" ja URL-osoitteen, jossa esiintyy sana "grok"'),
                e("a9348088", "ai url:grok"),
                e("b5c3cdbc", 'mainitsee X-tilin "grok"'),
                e("e2634592", "@grok"),
                e("i88ba038", "Ilmoitukset poistettu käytöstä"),
                e("j2cb0214", "Ilmoitukset käytössä"),
                e("ae852cd0", "Saa joka maanantai ilmoituksena yhteenveto tämän puheenaiheen muutoksista."),
                e("d1d8633e", "Radar-ilmoitukset"),
                e("g096d0cc", "Kaikki kyselyt"),
                e("e77035aa", "Tyhjennä haku"),
                e("a895ec64", "Haluatko varmasti poistaa tämän kyselyn?"),
                e("a4f5e431", function (a) {
                    return "”" + a.name + "” poistettiin";
                }),
                e("db28b535", function (a) {
                    return "Poista ”" + a.name + "”";
                }),
                e("bcf89b8a", "Muokkaa kyselyä"),
                e("f0002e72", "Selaa tuloksia"),
                e("b0924d7a", "Kyselyn luonti epäonnistui. Yritä uudelleen."),
                e("cfd731ee", "Kyselyn poisto epäonnistui. Yritä uudelleen."),
                e("g08bff82", "Ilmoitusten käytöstä poisto ei onnistunut. Yritä uudelleen."),
                e("fa1fd798", "Ilmoitusten käyttöönotto ei onnistunut. Yritä uudelleen."),
                e("ia7dce48", "Kyselyn luonti epäonnistui. Yritä uudelleen."),
                e("d494d4aa", "Kyselyn päivitys epäonnistui. Yritä uudelleen."),
                e("i4a49588", "Global Town Square"),
                e("c0799860", "Päivä"),
                e("b43679d2", "tunnit"),
                e("f1fce85e", "minuutit"),
                e("ea3e0ec4", "Markkinointi"),
                e("d8d9aec2", "Kyselyiden enimmäismäärä täyttyi"),
                e("c9aa246e", "Uusi kysely"),
                e("b9b7a50e", "Säädä hakukriteereitä milloin tahansa pysyäksesi ajan tasalla"),
                e("i9a09bb6", "Laadi kysely ja anna Radarin seurata julkaisuja reaaliaikaisesti"),
                e("da20008c", "Suosittuja puheenaiheita ei ole saatavilla. Kokeile laajentaa hakukriteerejä."),
                e("e78ca8c6", "Yritä myöhemmin uudelleen"),
                e("ce3216ec", "Kysely"),
                e("ef609bb8", "Mitä X:ssä tapahtuu?"),
                e("a636a738", "Kysy jatkokysymys..."),
                e("d92ec304", "Kyselyä ei löydy"),
                e("bbf29e20", "Nollaa valinta"),
                e("ie3321ea", "$NVDA (sell OR buy)"),
                e("cf223996", "Yhteenveto"),
                e("a27ccab8", "The Everything App"),
                e("i66136aa", "Suosittu"),
                e("e7c44382", "Uniikit käyttäjät"),
                e("d559e5b8", "Nimetön kysely"),
                e("i1d9be88", "Haun rajaaminen operaattoreilla"),
                e("ae9f604c", "Affiliaatio"),
                e("a7d2d8f4", "Näytä vain affiliaattitilit"),
                e("je21ffbe", "Seuraajamäärä"),
                e("i8d9797c", "Koko profiili"),
                e("a36bebf2", "Enintään"),
                e("i5ef8b4a", "Suurin seuraajamäärä"),
                e("fcf0ec1c", "Vähintään"),
                e("ccc0bbc6", "Pienin seuraajamäärä"),
                e("je1bd63a", "Hyödynnä X:n tehoa osaajien, asiakkaiden ja strategisten kumppanien hakuun"),
                e("i6766078", "Hae osaajia, potentiaalisia asiakkaita ja kumppaneita"),
                e("d509bbd4", "Löydä käyttäjiä X:ssä"),
                e("a5afaf54", "Tyhjennä"),
                e("i9006fb0", "Nollaa kaikki"),
                e("fa598a82", "Tulokset"),
                e("g3688a48", "Valitse vaihtoehto"),
                e("ab5a91a4", "Käyttäjä"),
                e("cef20fd0", "Varmennus"),
                e("a2b286b0", "Ilmoita työpaikoista, mainosta tuotteitasi ja saa viestisi kuuluviin."),
                e("e2895a38", "Jopa 12 000 USD saldoa mainontaan"),
                e("becba496", "Mainossaldoa saatavana rajoitetun ajan."),
                e("ded395ae", "Saa yritystoimien tilastot käyttöösi yhdessä paikassa"),
                e("a47a20d4", "Edistynyt analytiikka"),
                e("b56d3ec6", "Premium+ ja Grok 3 kaikkien organisaatioiden ja affiliaattien käyttöön"),
                e("ie663a1a", "Saa nopeasti apua ja ratkaisuja pulmiisi omalta asiakastiimiltä"),
                e("j7f75bec", "VIP-tuki"),
                e("ebf5ec26", "Tulossa pian"),
                e("eeb424e2", "Kirjoita oma tarinasi."),
                e("ab62db18", "Kerrytä yleisöä."),
                e("j2c9bc4e", "Erotu massasta kultaisella valintamerkillä ja lisää affiliaatteja markkinoidaksesi yritystäsi orgaanisesti."),
                e("e7930f82", "Erotu massasta"),
                e("e77ea57e", "Tehokkaimmat työkalut myyntiin, parhaiden osaajien palkkaamiseen ja markkinatiedon lähteille pääsemiseen."),
                e("a558a254", "Varmennetut organisaatiot auttaa kasvuun X:ssä "),
                e("b099f256", "Radar antaa katsauksen markkinatrendeihin ja yleiseen mielipiteeseen yhdellä painalluksella."),
                e("ecb7fa02", "Business intelligence"),
                e("cb5faa2a", "Käytä mainoskrediittejä tavoittaaksesi planeetan fiksuimmat osaajat."),
                e("c67b260c", "Työpaikkailmoitus"),
                e("if48b5c2", "Lataa työpaikkailmoituksia miljoonien nähtäville suoraan X:ssä."),
                e("aa0d60aa", "kuukausi"),
                e("cebfdb52", "Organisaatiot"),
                e("i9b6fcbc", "Käytä hakua löytääksesi ja kontaktoidaksesi insinöörejä, tulevia asiakkaita ja sisällöntuottajia. "),
                e("a6b5c3f0", "Löydä parhaat osaajat"),
                e("a51acce8", "Vaihda Basic-tasoon"),
                e("ie132f40", "Vaihda tasoa ja pidä täydet käyttöoikeudet"),
                e("b0d26232", "TALLENNA"),
                e("f563b353", function (a) {
                    return "TARJOUKSET UMPEUTUVAT " + a.endDate;
                }),
                e("b29b2e69", function (a) {
                    return a.percentOff + " % pois " + a.endDate + " asti";
                }),
                e("j3cfae29", function (a) {
                    return a.discountedCost + " vuodessa ensimmäisen vuoden ajan. Sitten " + a.baseCost + " vuodessa.";
                }),
                e("jb74aea4", "Lisätyt affiliaattitilit maksavat 50 USD/kk per käyttäjätunnus. Mainoskrediitteihin sovelletaan rajoituksia."),
                e("fc9fc856", "Lisätyt affiliaattitilit maksavat 600 USD/vuosi per käyttäjätunnus. Mainoskrediitteihin sovelletaan rajoituksia."),
                e("fc785aec", "Tilaa Basic"),
                e("edf32072", "Kaikki Premium+-tilauksen edut sekä:"),
                e("b3caf146", "Kultainen varmennettu-merkki"),
                e("a1dbf70c", "200 USD mainossaldoa maksutta kuukaudessa"),
                e("i2a2286c", "2 500 USD mainossaldoa maksutta"),
                e("e8d0fd04", "Radar Basic"),
                e("cf038828", "Oma tukipalvelu"),
                e("efd56302", "Lisää affiliaatteja sivuusi"),
                e("bc1bb6aa", "1 000 USD mainossaldoa maksutta kuukaudessa"),
                e("e1669560", "12 000 USD mainossaldoa maksutta"),
                e("hb973da4", "Täysi käyttöoikeus Radariin"),
                e("g444c82e", "Enterprise-ominaisuudet ennakkoon"),
                e("a1bc0bcf", function (a) {
                    return a.cost + ", veloitus vuosittain";
                }),
                e("i0f58dac", "Maksettavaksi voivat tulla lisäksi sovellettavat verot ja maksut."),
                e("je182d8a", "Enterprise"),
                e("ge609bd6", "Ota yhteys myyntiin"),
                e("je6d2aec", "Modulaarinen hinnoittelu"),
                e("ed33b888", "Henkilöhaku"),
                e("ade522c4", "Yhteenveto"),
                e("h551f266", "Mainoskrediitit"),
                e("c74f7856", "Affiliaattipaketit"),
                e("b9b41f7a", "Haun optimointi"),
                e("b1f368ee", "Oma tuki"),
                e("j189c5b2", "Pro-tilaus plus:"),
                e("i7f4b58e", "Määritä"),
                e("h45fd8ae", "Tilaa täysi käyttöoikeus"),
                e("f1c3b32c", "Basic-tilaus plus:"),
                e("f4307806", "Suosittu"),
                e("ce7c21de", "Vuositilaus"),
                e("a21a64f6", "”X yrityksille on mahtava diili. Saimme hyviä osaajia taloon osaajahaun ansiosta.”"),
                e("dbb3fc54", "Perustajajäsen, CEO"),
                e("c1600210", "”X yrityksille oli meille helppo ratkaisu. Markkinadata auttoi meitä saamaan asiakkaita.”"),
                e("fb3e127a", "Uudenvuodentarjous rajoitetun ajan"),
                e("a5fee980", "30 %:n tarjous vuositilauksesta ja jopa 12 000 USD mainossaldoa kaupan päälle, kun tilaat ennen"),
                e("c9051cac", "päivää"),
                e("fe074210", "min"),
                e("ie035790", "s"),
                e("cbd3dfaa", "Kokeile betaa"),
                e("h260121e", "Esittele kiinnostavia työtilaisuuksia yleisöllesi."),
                e("ae0ad604", "Urasivut"),
                e("cbd4ba6e", "Löydä huippuosaajia"),
                e("b71927b2", "Rajattomasti työpaikkajulkaisuja"),
                e("a0b5b7d4", "Tehomarkkinointimalli tuo tekoälykohdennuksen käyttöösi."),
                e("aa3f0e90", "Hyödynnä tekoälyä työpaikkailmoitusten kohdennuksessa"),
                e("hc67be9e", "Näin pääset alkuun"),
                e("c9a67f9e", "Ala rekrytoida"),
                e("jd937cda", "Tavoita miljoonia potentiaalisia kandidaatteja X Hiring ‑alustalla. Synkronoi avoimet työpaikat, rakenna räätälöidyt rekrytointisivut ja laadi kampanja, joka markkinoi avoimia paikkoja kohdennetusti aikajanoilla."),
                e("d92d2632", "Paras alusta huippuosaajien rekrytointiin"),
                e("c10bee94", "Hakemuksia kuukaudessa"),
                e("ib69d218", "250k+"),
                e("i953576c", "Töitä tarjoavat yritykset"),
                e("j395b846", "10k+"),
                e("g48a59c2", "Käyttäjät"),
                e("j228841a", "500 milj.+"),
                e("da570714", "Hakemustenhallintajärjestelmien integroinnit"),
                e("h25a3132", "Jopa 2 400 USD mainoshyvityksinä työpaikkailmoituksia varten"),
                e("f25a2004", "Premium+-edut"),
                e("c237b78e", "Työhönottotiimisi yhdistämiset"),
                e("fc3d58fe", "Jopa 12 000 USD mainoshyvityksinä työpaikkailmoituksia varten"),
                e("eb5f060c", "Seuraa"),
                e("a19cf46f", function (a) {
                    return "Lopetetaanko käyttäjän @" + a.screenName + " seuraaminen?";
                }),
                e("e4c91b70", "Hänen julkaisunsa eivät enää näy Sinulle-aikajanallasi. Voit edelleen katsoa käyttäjän profiilia, paitsi jos hän on suojannut julkaisunsa."),
                e("j650c8dc", "Hylätäänkö seuraamispyyntö?"),
                e("c02f8de1", function (a) {
                    return "Tämä peruu seuraamispyyntösi, eikä @" + a.screenName + " näe sitä enää.";
                }),
                e("e2ee95a1", function (a) {
                    return "Liittynyt " + a.date;
                }),
                e("d64fef58", "Et ole julkaissut vielä"),
                e("e2a098dc", "Lajitteluperuste"),
                e("c5709148", "Näytetään enintään 1 000 julkaisua"),
                e("ca5e57bd", function (a) {
                    return "Julkaisu" + a.noun;
                }),
                e("d16c1ab6", "Uusimmat"),
                e("f0a28956", "Vanhimmat"),
                e("h06df79a", "Eniten näyttökertoja"),
                e("c44744e6", "Vähiten näyttökertoja"),
                e("j6b98664", "Eniten tykkäyksiä"),
                e("a669f95c", "Vähiten tykkäyksiä"),
                e("a0c66496", "Eniten vastauksia"),
                e("h45174fe", "Vähiten vastauksia"),
                e("ea20f92a", "Eniten uudelleenjulkaisuja"),
                e("c9a63566", "Vähiten uudelleenjulkaisuja"),
                e("b40d33e4", "Tietojen laajennukset"),
                e("gedf636e", "URLin klikkaukset"),
                e("bbc12690", "Avainsanaklikkaukset"),
                e("g7ede992", "Ikilinkin klikkaukset"),
                e("f5210bae", "Linkki"),
                e("b1f77a7c", "Vie dataa"),
                e("j62d2af4", "Tietoa julkaisusta"),
                e("dc70a568", "Julkaisun analytiikka"),
                e("j9f65603", function (a) {
                    return "12.00" + a.date;
                }),
                e("d6ad20d7", function (a) {
                    return "4.00" + a.date;
                }),
                e("d9bcb257", function (a) {
                    return "8.00" + a.date;
                }),
                e("b83b49f1", function (a) {
                    return "24.00" + a.date;
                }),
                e("h52ae229", function (a) {
                    return "16.00" + a.date;
                }),
                e("i07e47b9", function (a) {
                    return "20.00" + a.date;
                }),
                e("h7cd94fe", "Sumennettu kuvaaja"),
                e("b10621d4", "Näe kaikki tilastosi"),
                e("c23def7a", "Toimintamäärät"),
                e("jc14a9e8", "Kulutus"),
                e("d16b5a18", "Kokonaiskulutus mainoksiin"),
                e("g01559c6", "Tilastot näytetään viimeiseltä 7 päivältä"),
                e("ddc8d458", "Sukella historiadataan"),
                e("j74eab48", "Edistynyt analytiikka on vain X Premium ‑jäsenten käytettävissä"),
                e("i02166f6", "Ymmärrä yleisöäsi"),
                e("cef977e4", "Vie dataa"),
                e("f88e624e", "Keskustelu päivitetty"),
                e("e15e5637", function (a) {
                    return "Viimei" + n(a.count, "nen tunti", "set " + a.count + " tuntia");
                }),
                e("h5ab8b0e", "Heidän seuraamansa ihmiset"),
                e("a0f01bca", "Napsauta muuttaaksesi aikaväliä"),
                e("he30b16c", "”Heidän seuraamansa ihmiset” laajentaa tuloksiasi ja näyttää jaetuimmat artikkelit seuraamiltasi sekä heidän seuraamiltaan ihmisiltä."),
                e("b0589550", "Saa lisää uutisia"),
                e("b60e4f78", "Tutustu"),
                e("e950f6e0", "Verkostossasi ei ole jaettu artikkeleita."),
                e("e7dcfb81", "enemmän tilejä"),
                e("h965157c", "Tätä sivua ei tueta."),
                e("cd388852", "Käy kirjoittajan profiilissa X:n päivitetyssä versiossa lukemassa tämä sisältö."),
                e("abebdfae", "Voit katsella tilastoja vain Huoneista, joissa olet itse ollut Hostina tai Co-hostina."),
                e("fcb205da", "Live-kuulijoita"),
                e("jb088200", "Tallenteen toistot"),
                e("if65328a", "Langoilla"),
                e("a1a0e6d8", "Seuraa hostia"),
                e("a3c4e396", "Lopeta hostin seuraaminen"),
                e("j58e7b00", "Näytä profiili"),
                e("eca4e32a", "Näytä tiedot"),
                e("hd908df2", "Live-Huoneet"),
                e("c5d40fe2", "Kuka tahansa"),
                e("a8df1d34", "Salli video"),
                e("if410292", "Tutustu Huoneisiin"),
                e("i43fdce9", function (a) {
                    return "Lisää aiheita (" + a.count + "/" + a.total + ")";
                }),
                e("e32e99ec", "Mistä haluat keskustella?"),
                e("e93f3c2a", "Äänitä Huone"),
                e("b701d610", "Ajastettu huone poistettu"),
                e("b028792d", function (a) {
                    return "Hallitse ajastettuja Huoneita (" + a.count + ")";
                }),
                e("e9b73da8", "Ajasta Huone"),
                e("cdf630be", "Aloita nyt"),
                e("acd1bcb0", "Kuka voi tulla mukaan?"),
                e("h07146a2", "Kuka saa puhua?"),
                e("h61d92b0", "Poista ajastettu huone"),
                e("a488f2eb", function (a) {
                    return a.count + " valittu " + a.total + " aiheesta ";
                }),
                e("d2dfe80d", function (a) {
                    return "Huoneesi alkaa " + a.date + " klo " + a.time;
                }),
                e("aef95393", function (a) {
                    return "Olemassa olevan huoneen ajankohdaksi on ajastettu " + a.date + " klo " + a.time;
                }),
                e("a7069f2e", "Muokkaa tietoja"),
                e("a15f06fc", "Ajastetut huoneet"),
                e("f6cfa3fe", "Huonetta ei voi ajastaa menneisyyteen."),
                e("a8f71a2b", function (a) {
                    return "Huonetta ei voi ajastaa yli " + a.days + " päivän päähän.";
                }),
                e("ae092f6c", "Ajastetun huoneen poisto ei onnistunut."),
                e("jd7f0030", "Ajastettu huone päivitetty"),
                e("a26da034", "Tallenna muutokset"),
                e("b3633046", "Valitse Yhteisö"),
                e("ce447fcb", function (a) {
                    return a.count + " kuuntelija" + n(a.count, "", "a");
                }),
                e("ef7da97f", function (a) {
                    return a.count + " kuuntelee";
                }),
                e("a065e7e7", function (a) {
                    return "Käynnissä paraikaa: " + a.spaceTitle;
                }),
                e("hd5e7b21", function (a) {
                    return a.date + ": " + a.spaceTitle;
                }),
                e("f651e375", function (a) {
                    return "Tämä Huone on päättynyt: " + a.spaceTitle;
                }),
                e("i8478ae7", function (a) {
                    return "Toista tallenne: " + a.spaceTitle;
                }),
                e("b2a94e93", function (a) {
                    return a.hostSpace + " · " + a.descriptionListening + " · " + a.descriptionGeneric;
                }),
                e("f6432ce5", function (a) {
                    return a.hostSpace + " · " + a.descriptionGeneric;
                }),
                e("e4e811fc", "Yhdistetään..."),
                e("aadbc747", function (a) {
                    return "co-host" + n(a.hostCount, "", "ia");
                }),
                e("hbd6035f", function (a) {
                    return "puhuja" + n(a.speakerCount, "", "a");
                }),
                e("if420852", "Toista tallenne"),
                e("f7dc3b1c", "Tämä Huone on päättynyt"),
                e("c1d15dc0", "Näyttää siltä, että Huone on suljettu."),
                e("g3e2f3a6", "Kuuntele anonyymina"),
                e("cd64d43e", "Liity suoraan puhujana"),
                e("jcdc32f0", "Ala kuunnella"),
                e("a0cee16a", "Ala puhua"),
                e("bf3daa48", "Ala kuunnella anonyymina"),
                e("f9305f48", "Palauta yhteys"),
                e("e51df2e6", "Mikrofonisi on alkuun hiljennetty"),
                e("h114ff6c", "Et voi liittyä tähän huoneeseen, koska olet jo toisessa huoneessa."),
                e("d7fe2d7e", "Et voi liittyä uudelleen tähän huoneeseen, koska olet jo toisessa huoneessa."),
                e("e61bdea4", "Host nauhoittaa tämän Huoneen. Kaikki puheet tallentuvat julkiseen tallenteeseen."),
                e("d0ebf4f7", "Lue lisää"),
                e("d782b808", "Tilaamisesta on iloa"),
                e("i7f83b8d", "Lue lisää"),
                e("fc962610", "Hae Huoneen tai Hostin nimellä"),
                e("e5b5f091", function (a) {
                    return "Mikään Huone ei vastaa hakua ”" + a.searchQuery + "”";
                }),
                e("g5812140", "Mikset avaisi omaa Huonetta?"),
                e("e8fe1ecb", function (a) {
                    return "Mikään " + a.section + ' Huoneista ei vastaa hakua "' + a.searchQuery + '"';
                }),
                e("c432d2b2", "Hae Huonetta"),
                e("d39e8b30", "Lisää huomautus"),
                e("dc7a6625", function (a) {
                    return "Kirjoitat peitenimellä " + a.displayAlias;
                }),
                e("g17e4064", "Huomautus julkaistaan Yhteisöhuomautukset-nimimerkilläsi yhdistämättä sitä X-profiiliisi."),
                e("d9b09ee8", "Ole täsmällinen. Ulkopuolisiin lähteisiin on annettava linkki."),
                e("b7476596", "Ole täsmällinen. Kannustamme tarjoamaan linkkejä ulkopuolisiin lähteisiin."),
                e("df6c8292", "Selityksesi"),
                e("ecb4d20c", "Huomautustasi ei tallennettu. Tarkista, ettet ole jo kirjoittanut huomautusta samasta julkaisusta ja yritä myöhemmin uudelleen."),
                e("eb5b4a12", "Yhteisöhuomautusten nimimerkeistä"),
                e("ja0ee360", "Valitse peitenimesi"),
                e("f7b7c250", "Valitse nimimerkki Yhteisöhuomautuksiin pysytelläksesi anonyymina"),
                e("c6382384", "Miksi Yhteisöhuomautuksissa käytetään nimimerkkejä?"),
                e("j48ab594", "Osallistu anonyymisti"),
                e("bc2399a0", "Kirjoita huomautuksia ja arivoi toisten huomautuksia paljastamatta X-identiteettiäsi."),
                e("d939cf16", "Keskity sisältöön"),
                e("a56f0c32", "Peitenimet suojaavat ennakkoasenteilta. Jokainen voi keskittyä sisältöön ja jättää henkilön kyttäämisen vähemmälle."),
                e("d17c59e4", "Vastuu säilyy peitenimilläkin"),
                e("i719f8e2", "Näet kirjoittajien historian, ja vertaisarvioinnin kautta jokaisen maine muotoutuu ansioiden mukaan."),
                e("a96bb564", "Valitse nimimerkki Yhteisöhuomautuksiin"),
                e("afcdcf84", "Tämä nimimerkki on identiteettisi kirjoittaessasi Yhteisöhuomautuksia ja arvioidessasi niitä. Sitä ei ole kytketty X-profiiliisi."),
                e("f83d0446", "Peitenimesi on tallennettu."),
                e("ed0e6b2e", "Ala arvioida huomautuksia"),
                e("if4c5e06", "Tervetuloa Yhteisöhuomautuksiin!"),
                e("g880a78a", "Aloita arvioimalla huomautuksia"),
                e("d1be2236", "Yhteisöhuomautukset tukeutuu kaltaisiisi tekijöihin tunnistaakseen hyödylliset huomautukset, jotka on aihetta näyttää kaikille."),
                e("af9f2b78", "Seuraa arviointipisteitäsi"),
                e("af68afc8", "Saat pisteitä joka kerta, kun autat huomautusta saamaan statuksen hyödyllinen tai hyödytön."),
                e("fb5c5d42", "Ansaitse mahdollisuus kirjoittaa huomautuksia"),
                e("a1e58cdc", "Kun arviointipisteesi ovat 5 tai enemmän, saat oikeuden kirjoittaa Yhteisöhuomautuksia itse."),
                e("j5f112b4", "Kahden uusimman huomautuksesi tila on tällä hetkellä Ei hyödyllinen."),
                e("ac34c5e8", "Riittävä määrä tekijöitä, joihin sisältyy aiemmin ristiriitaisia arvosteluja antaneita tekijöitä, on yhtä mieltä siitä, että kaksi huomautuksistasi ei ole hyödyllisiä. Tässä on heidän palautteensa:"),
                e("ib7886d0", "Katso nämä huomautukset profiilissasi"),
                e("b0a7d360", "Huomautusten kirjoittamisoikeutesi on vaarassa tulla lukituksi tilapäisesti."),
                e("e473f876", "Jos tekijän viidestä uusimmasta hyödylliseksi tai ei hyödylliseksi luokitellusta huomautuksesta kolme on Ei hyödyllinen -tilassa, tekijän kirjoitusoikeus lukitaan tilapäisesti."),
                e("ef490ae8", "Lähteitä ei annettu tai ne eivät ole luotettavia"),
                e("bf3dc462", "Lähteet eivät tue huomautusta"),
                e("heb35e12", "Virheellistä tietoa"),
                e("ib117532", "Häirintä tai solvaus"),
                e("a7bc3192", "Lainaa luotettavia lähteitä"),
                e("a26f8dc2", "Helppo ymmärtää"),
                e("cbdef06c", "Ottaa suoraan kantaa julkaisun väittämään"),
                e("faa5f9e8", "Tarjoaa tärkeää kontekstia"),
                e("gf3b38f4", "Neutraali, puolueeton ilmaisu"),
                e("a50327ea", "Huomautus ei ole tarpeen tässä julkaisussa"),
                e("h7c59ea2", "Mielipide tai spekulointia"),
                e("d60c0064", "Lyöntivirheet tai epäselvä kieli"),
                e("e06416ca", "Menee ohi asian tai on merkityksetön"),
                e("cff1aa8c", "Ilmaisu riidanhaluista tai puolueellista"),
                e("c5d55592", "Tarjoaa uniikkia tietoa tai asettaa asian kontekstiinsa"),
                e("f3e6f0aa", "Informatiivinen"),
                e("hc2b6a7e", "Tuomitsematon ja/tai empaattinen"),
                e("bbe8b4ac", "Mielipide, spekulointia tai asenteellinen"),
                e("dd1f17ea", "Asian vierestä"),
                e("if966b54", "Vanhaa tietoa"),
                e("fdc2060a", "Tarvitset enemmän arviointipisteitä, jotta voit kirjoittaa huomautuksia."),
                e("edd80858", "Katso profiilisi ja pisteesi"),
                e("eec24ff6", "Ala arvioida"),
                e("eb9dc3ec", "Tekijät auttavat kollektiivisesti tunnistamaan hyödylliset huomautukset, jotka kertovat käyttäjille julkaisujen kontekstia."),
                e("f2f61788", "Ansaitse mahdollisuus kirjoittaa"),
                e("ca7e11e6", "Kun arviointipisteesi ovat 5 tai enemmän, saat oikeuden kirjoittaa Yhteisöhuomautuksia itse."),
                e("e7beb100", "Katso profiilisi ja palautteesi"),
                e("fd02e290", "Näytä kaikki säännöt"),
                e("ee7b8050", "Uusien huomautusten kirjoittamisoikeutesi on lukittu tilapäisesti."),
                e("b8cc2e9a", "Koska viimeaikaisia huomautuksiasi on arvioitu hyödyttömiksi, et toistaiseksi voi laatia uusia huomautuksia."),
                e("f6c8613e", "Tekijöiden palaute huomautuksistasi:"),
                e("fd5c2282", "Lisää vinkkejä huomautusten kirjoittamiseen"),
                e("c23e67ea", "Hanki mahdollisuus kirjoittaa"),
                e("i0e66c5a", "Valitse yksi"),
                e("j8e3e3be", "Valitse ainakin yksi"),
                e("f1e851f0", "Lisää selitys"),
                e("ff5dcac8", "Selityksesi on liian pitkä"),
                e("b47b5a16", "Kaikki kentät ovat pakollisia. Tarkista, että olet vastannut kaikkiin kysymyksiin."),
                e("g9cffe16", "Huomautuksesi ei sisällä lähdettä"),
                e("bfa9e276", "Muotoile huomautus uusiksi niin, että siitä on hyötyä kaikissa tämän kuvan sisältävissä julkaisuissa, tai tarkista vastauksesi lomakkeen ensimmäiseen kysymykseen"),
                e("ja36d83e", "Muotoile huomautus uusiksi niin, että siitä on hyötyä kaikissa tämän videon sisältävissä julkaisuissa, tai tarkista vastauksesi lomakkeen ensimmäiseen kysymykseen"),
                e("i6488a04", "Muotoile huomautus uusiksi niin, että siitä on hyötyä kaikissa tämän median sisältävissä julkaisuissa, tai tarkista vastauksesi lomakkeen ensimmäiseen kysymykseen"),
                e("j6e12b24", "Se sisältää digitaalisesti muokatun kuvan tai videon"),
                e("eda68484", "Sitä on muokattu digitaalisesti"),
                e("e198eb8c", "Kirjoita kontekstihuomautus, joka mielestäsi pitäisi näyttää videon yhteydessä, jotta muut ymmärtävät yhteyden."),
                e("a9803d44", "Kirjoita kontekstihuomautus, joka mielestäsi pitäisi näyttää kuvan yhteydessä, jotta muut ymmärtävät yhteyden."),
                e("j7ddf18a", "Kirjoita kontekstihuomautus, joka mielestäsi pitäisi näyttää kaikissa linkin sisältävissä julkaisuissa, jotta muilla on oikeaa tietoa."),
                e("g3874520", "Kirjoita kontekstihuomautus, joka mielestäsi pitäisi näyttää julkaisun yhteydessä, jotta muut ymmärtävät yhteyden."),
                e("ac1141aa", "Kirjoita huomautus, joka auttaa muita Yhteisöhuomautusten tekijöitä ymmärtämään, miksi tämä video ei ole harhaanjohtava tai ei kaipaa lisäkontekstia."),
                e("f99ebcfc", "Kirjoita huomautus, joka auttaa muita Yhteisöhuomautusten tekijöitä ymmärtämään, miksi tämä kuva ei ole harhaanjohtava tai ei kaipaa lisäkontekstia."),
                e("h641949e", "Kirjoita huomautus, joka auttaa muita Yhteisöhuomautusten tekijöitä ymmärtämään, miksi tämä julkaisu ei ole harhaanjohtava tai ei kaipaa lisäkontekstia."),
                e("c926cff6", "Nykytiedon valossa uskon tämän julkaisun olevan..."),
                e("e0ef7a2c", "Nykytiedon valossa uskon tämän kuvan olevan..."),
                e("g491d33a", "Nykytiedon valossa uskon tämän videon olevan..."),
                e("b253e462", "Nykytiedon valossa uskon linkitetyn sivun olevan..."),
                e("b1b2d004", "Mahdollisesti harhaanjohtava, ja se hyötyisi lisäkontekstista"),
                e("ha9655c2", "Ei harhaanjohtava"),
                e("ebd2de06", "Miksi uskot tämän julkaisun saattavan johtaa harhaan?"),
                e("i865abe8", "Miksi uskot tämän kuvan saattavan johtaa harhaan?"),
                e("add096c6", "Miksi uskot tämän videon saattavan johtaa harhaan?"),
                e("eb604e2e", "Miksi arvelet linkitettyä sivua harhaanjohtavaksi?"),
                e("c33bc7d4", "Se sisältää asiavirheen"),
                e("aadb676c", "Siinä on vanhentunutta tietoa, joka saattaa johtaa harhaan"),
                e("g21a0ef4", "Se esittää vääristelee asiaa tai sivuuttaa olennaista kontekstia"),
                e("daf354de", "Se esittää tarkistamattoman väitteen faktana"),
                e("d1d2ef84", "Se on vitsi tai satiiria, joka saatetaan ottaa todesta"),
                e("bfee6064", "Miksi et usko tämän julkaisun johtavan harhaan?"),
                e("dfd1f7f0", "Miksi et usko tämän kuvan johtavan harhaan?"),
                e("b8623176", "Miksi et usko tämän videon johtavan harhaan?"),
                e("ec66e3fc", "Miksi arvelet, että linkitetty sivu ei johda harhaan?"),
                e("g228df26", "Se esittämä väite on tosi"),
                e("h890a3f2", "Se oli jakoajankohtanaan paikkansapitävä, mutta on nyt vanhentunut"),
                e("hf607a0a", "Se on selvästi satiiria/vitsi"),
                e("j6ac7742", "Se ilmaisee henkilökohtaisen mielipiteen"),
                e("b1d82aae", "Linkititkö lähteisiin, joita uskot useimpien pitävän luotettavina?"),
                e("ae859ee0", "Koskeeko huomautuksesi julkaisua vai kuvaa?"),
                e("ba84e7f8", "Koskeeko huomautuksesi julkaisua vai videota?"),
                e("ibb784c6", "Tätä nimenomaista julkaisua"),
                e("a21ecb8c", "Tämän julkaisun kuvaa, ja sen pitäisi näkyä kaikissa julkaisuissa, joissa on tämä kuva"),
                e("he0ca8da", "Tämän julkaisun videota, ja sen pitäisi näkyä kaikissa julkaisuissa, joissa on tämä video"),
                e("d0bf8d34", "Koskeeko huomautuksesi julkaisua vai linkkiä?"),
                e("db370b9a", "Koskeeko huomautuksesi julkaisua, kuvaa vai linkkiä?"),
                e("c35bf10e", "Koskeeko huomautuksesi julkaisua, videota vai linkkiä?"),
                e("d96ce0d2", "Tämä huomautus on kirjoitettu tavalla, joka tekee siitä hyödyllisen kaikissa julkaisuissa, joissa kuva esiintyy."),
                e("a1fb516c", "Tämä huomautus on kirjoitettu tavalla, joka tekee siitä hyödyllisen kaikissa julkaisuissa, joissa video esiintyy."),
                e("be46a61e", "Tämä huomautus on kirjoitettu tavalla, joka tekee siitä hyödyllisen kaikissa julkaisuissa, joissa media esiintyy."),
                e("ied1c2c2", "Tämä huomautus liittyy nimenomaan tähän julkaisuun ja saattaa olla aiheeton muissa."),
                e("gb2433df", function (a) {
                    return "" + a.noteMatchUrl;
                }),
                e("gdfbdd93", function (a) {
                    return "apua kaikissa " + a.matchCount + " julkaisussa";
                }),
                e("d7959c4d", function (a) {
                    return "apua kaikissa " + a.matchCount + " julkaisussa";
                }),
                e("ff5be16d", function (a) {
                    return "apua kaikissa " + a.matchCount + " julkaisussa";
                }),
                e("abdd8d0a", "Muokkaa huomautusta"),
                e("c097608e", "Huomautuksesi ei sisällä selitystä"),
                e("ba25898c", "Huomautukset, joissa selitetään lähteen informaatio omin sanoin, koetaan useammin hyödyllisiksi."),
                e("e764d704", "Huomautukset, joissa on linkki luotettavaan lähteeseen, koetaan useammin hyödyllisiksi."),
                e("gb67e44c", "Lähetä ilman selitystä"),
                e("d6b758a2", "Lähetä ilman lähdettä"),
                e("dc1fa12c", "Yhteisöhuomautukset-tileillä on oltava varmennettu puhelinnumero"),
                e("a1752fde", "Voidaksesi jatkaa Yhteisöhuomautuksiin kirjoittamista tältä tililtä sinun on varmennettava puhelinnumerosi."),
                e("hef02710", "Paitsi että numerosi on oltava varmennettu, sen on oltava luotetun operaattorin numero. Se ei saa olla yhdistetty toiseen Yhteisöhuomautukset-tiliin."),
                e("dff9b6bc", "Varmenna puhelinnumero"),
                e("f051e434", "Yhteisöhuomautusten tekijöillä on oltava kullakin eri puhelinnumero"),
                e("eaef2f72", "Näyttää siltä, että tähän puhelinnumeroon on yhdistetty useamman kuin yhden Yhteisöhuomautusten tekijän X-tili."),
                e("j78d41b4", "Voidaksesi jatkaa kontribuutioita tältä tililtä sinun on poistettava tämä puhelinnumero muilta X-tileiltä."),
                e("a7c9a176", "Yhteisöhuomautukset-tileillä on oltava luotetun operaattorin varmennettu puhelinnumero"),
                e("ec853dfa", "Jotta voisimme välttää valenumerot ja virtuaalinumerot, puhelinnumeron on oltava luotetun operaattorin numero."),
                e("j6e19c58", "Yhteisöhuomautusten arvot"),
                e("ea580ee2", "Palautetaan mieliin Yhteisöhuomautusten arvot:"),
                e("eac7b6ac", "Tue asioihin perehtyneisyyttä"),
                e("b0381cfc", "Toimi vilpittömin mielin"),
                e("f0addddc", "Ole avuksi niillekin, jotka ovat kanssasi eri mieltä"),
                e("h7c7b204", "Auta arvioimaan muiden huomautuksia ennen uuden kirjoittamista"),
                e("i8cae552", "Arvioimalla tuet Yhteisöhuomautusten korkeaa laatua."),
                e("hd43a218", "Huomautusten kirjoittamisen päivärajasi on täyttynyt"),
                e("aaba8ed2", "Jotta saamme pidettyä laadun korkeana ja ehkäistyä massapostitusta, olemme rajanneet sitä, montako huomautusta tekijät voivat päivässä kirjoittaa. Raja perustuu kunkin tekijän kerryttämiin kirjoituspisteisiin. Yritä myöhemmin uudelleen."),
                e("b98f077c", "Pyydä huomautusta -info"),
                e("ee691104", "Pyydä Yhteisöhuomautusta tästä julkaisusta"),
                e("f8cbdf02", "Koetko tämän julkaisun potentiaalisesti harhaanjohtavaksi? Pyydä yhteisöhuomautusta."),
                e("f132d1be", "Tekijät näkevät ilmoituksen julkaisuissa, joihin tulee riittävästi pyyntöjä"),
                e("gf71296c", "Jos huomautus kirjoitetaan ja muut tekijät arvioivat sen hyödylliseksi, se näkyy julkaisun yhteydessä"),
                e("de0685b4", "X ei valikoi näytettäviä huomautuksia – Yhteisöhuomautukset ovat käyttäjien käyttäjille kirjoittamia"),
                e("f8ac3c88", "Hyväksy ja pyydä huomautusta"),
                e("a8edd0ea", "Lisätäänkö lähde?"),
                e("a39a0de6", "Linkki X-julkaisuun"),
                e("j819c176", "Auta Yhteisöhuomautusten tekijöitä antamalla linkki X-julkaisuun, jossa selitetään, mikä voi johtaa harhaan."),
                e("e15b3b44", "Link in on oltava X-julkaisuun. Esimerkiksi x.com/user/status/...."),
                e("c81085a4", "Yhteisöhuomautuksista"),
                e("c363515c", "julkaistaan"),
                e("cb6b0138", "Kiitos! Pyyntösi on lähetetty"),
                e("c196e8b8", "Jos aiheesta kirjoitetaan huomautus, joka arvioidaan hyödylliseksi, näet sen julkaisun yhteydessä."),
                e("a9491efa", "Yhteisöhuomautuspyyntösi on lähetetty"),
                e("f060d1cc", "Poista pyyntö"),
                e("f499f824", "Poista pyyntösi"),
                e("hd1bc518", "Tarvitaan ehkä muutama minuutti, ennen kuin voit tehdä uuden pyynnön samaan julkaisuun"),
                e("geb8d31d", "rekisteröidy"),
                e("gc399930", "Huomautuspyyntöjen päivärajasta"),
                e("fee815e4", "Huomautusten pyytämisen päivärajasi on täyttynyt"),
                e("i7eb7900", "Päivärajasi kasvaa, jos teet pyyntöjä julkaisuihin, joihin sitten kirjoitetaan hyödyllisiä huomautuksia."),
                e("d1a3817e", "Näin palkitaan niitä ihmisiä, joilla on taito löytää potentiaalisesti harhaanjohtavia julkaisuja, joissa lisäkontekstista olisi iloa."),
                e("c031c77a", "Päivärajaasi voidaan laskea, jos teet liian monta pyyntöä julkaisuihin, jotka eivät toisten mielestä kaipaa huomautusta."),
                e("f87129d2", "Näin ehkäistään hälyä ja pidetään huomautusten kirjoittajien huomion niissä julkaisuissa, joissa huomautuksista olisi iloa."),
                e("jdd4a572", "Tililläsi on oltava vahvistettu puhelinnumero"),
                e("i0f07c07", "Vahvista puhelinnumerosi"),
                e("i157c1a8", "Tämä pyyntö on poistettu."),
                e("a9f4ca9c", "Yhteisöhuomautusten laatijat voivat nyt nähdä huomautuksesi"),
                e("eb8f7c0c", "Muut tekijät voivat nyt arvioida huomautuksesi"),
                e("h87c6bd6", "Muut tekijät voivat nyt nähdä huomautuksesi"),
                e("gc1a5bce", "He arvioivat sen hyödyllisyyden"),
                e("i0e950ca", "Jos huomautuksesi saa statuksen hyödyllinen, se aletaan näyttää kontekstina kaikille julkaisun näkeville"),
                e("a047e800", "Huomautuksesi auttaa muita tekijöitä saamaan lisäkontekstia huomautusten arviointiin"),
                e("cec8a38c", "Jos huomautuksesi saa statuksen hyödyllinen, ansaitset kirjoituspisteitä."),
                e("a377532e", "Jos riittävän moni eri näkökantoja edustava ihminen arvioi sen hyödylliseksi, se näytetään kontekstina kaikille julkaisun näkeville"),
                e("d790fa4e", "Huomautusten status ei määräydy huutoäänestyksellä"),
                e("e90cda68", "Jotta laajaa lukijakuntaa hyödyttävät huomautukset kyetään tunnistamaan, huomautus saa statuksen vasta, kun arvioijilla, jotka eivät aina ole olleet yksimielisiä, on sen hyödystä yhteinen näkemys."),
                e("j5a1d85a", "Katso huomautuksesi"),
                e("b25b64d6", "Huomautuksesi on lähetetty!"),
                e("g1428d70", "Huomautuksesi on lähetetty!"),
                e("a4ec7004", "Seuraavaksi tapahtuu:"),
                e("c4093274", "Yhteisöhuomautuksista lähetyksen jälkeen"),
                e("bc8746a6", "Arvioi vähintään yksi huomautus ennen uuden laatimista."),
                e("ce3c80b8", "Yhteisöhuomautusten laatu on riippuvainen käyttäjien arvioista."),
                e("fa6a075a", "Julkaisun oheen lisättävää kontekstia ehdottavat huomautukset"),
                e("acb7ecae", "Lisäkontekstin tarpeettomaksi katsovat huomautukset"),
                e("d9a5fc06", "Arvioi julkaisu"),
                e("b73cebd2", "Arvioi julkaisuja ja huomautuksia"),
                e("ad8883f2", "Ei huomautuksia tähän julkaisuun"),
                e("efd14e7a", "Huomautuksia ladataan"),
                e("e65b7186", "Ihmiset ovat ehdottaneet Yhteisöhuomautuksia tähän julkaisuun"),
                e("bcc14a68", "Yhteisöhuomautukset on ohjelma, jonka puitteissa vapaaehtoiset lisäävät kontekstia (”huomautuksia”) julkaisuihin, joiden katsovat mahdollisesti johtavan harhaan. Osallistujat voivat arvioida alla olevia huomautuksia, ja jos ne arvioidaan hyödyllisiksi, ne näytetään julkaisun yhteydessä kontekstina. Jos huomautus on tällä hetkellä arvioitu hyödylliseksi ja olet asiasta eri mieltä, voit pyytää lisäharkintaa. Tällöin useampi tekijä arvioi huomautuksen, jolloin sen status saattaa muuttua. "),
                e("c21313ba", "Tällä hetkellä hyödyttömiksi arvioidut huomautukset"),
                e("c2c40120", "Näytä kaikki huomautukset"),
                e("ia596d40", "Näetkö jotain korjattavaa?"),
                e("deff0bde", "Kirjoita huomautus"),
                e("i8e85ef8", "Liittymällä Yhteisöhuomautuksiin pääset kirjoittamaan huomautuksia ja valistamaan ihmisiä"),
                e("af88892a", "Yhteisöhuomautusten tekijät lisäävät näitä huomautuksia ollessaan sitä mieltä, että julkaisu saattaa johtaa harhaan ja lisäkonteksti olisi paikallaan."),
                e("cf8a40a6", "Huomautus näkyy vain Yhteisöhuomautuksissa, kunnes riittävän moni tekijä on arvioinut sen hyödylliseksi"),
                e("g22c8c30", "Jos riittävän moni (myös aiemmissa arvioissaan keskenään erimielinen) tekijä arvioi nämä huomautukset hyödyllisiksi, ne aletaan näyttää kontekstina julkaisun ohessa."),
                e("jf04b084", "Tekijät lisäävät näitä huomautuksia katsoessaan, ettei julkaisu johda harhaan eikä kaipaa lisäkontekstia."),
                e("g5a72e98", "Nämä näytetään vain Yhteisöhuomautuksissa lisätietona arvioijille. Niitä ei näytetä julkaisun kontekstina, vaikka tekijät olisivat katsoneet ne hyödyllisiksi."),
                e("h53cb7de", "Mitä mieltä olet tästä julkaisusta?"),
                e("dc3bfc82", "Mistä mahdollisesti pidät tässä julkaisussa?"),
                e("b4704bf4", "Mitä mahdollisesti et pidä tässä julkaisussa?"),
                e("ed5156fa", "Arviosi tallentaminen ei onnistunut. Yritä uudelleen."),
                e("d5f9fb42", "Arvioit tämän yhteisötehostuksen"),
                e("j6aa6172", "Poistetaanko arvio?"),
                e("i4112750", "Tätä ei voi perua."),
                e("bd7eb888", "Näytä kaikki tämän julkaisun huomautukset"),
                e("i97b83f6", "Muutoshakemustasi lähetettäessä tapahtui virhe. Yritä uudelleen."),
                e("a038ab9a", "Käännä huomautus"),
                e("i606fc4c", "Yhteisöhuomautusten muutoksenhausta"),
                e("b664c554", "Pyydä lisäarvioita"),
                e("ab66e1f2", "Näin se toimii:"),
                e("e36d807c", "Useampi Yhteisöhuomautusten laatija saa pyynnön antaa oma arvionsa huomautuksesta."),
                e("d8afb99c", "Jos osallistujien arviot muuttavat huomautuksen kokonaisarvion niin etteivät useimmat koe sitä hyödylliseksi, sitä ei näytetä julkaisun yhteydessä."),
                e("f9e1090c", "Arviot ovat osallistujien, eivät X:n käsialaa."),
                e("i80c8a84", "Pyydetty lisäarvioita."),
                e("f93d4391", "pyytää tälle huomautukselle lisäarvioita"),
                e("e457970a", "Huomautuksen tiedot"),
                e("df587b98", "Huomautuksen tunnus"),
                e("h201bdc8", "Huomautuksen tekijä"),
                e("h74b96b0", "Huomautus lähetetty "),
                e("ge25848a", "Nykytila"),
                e("d6db34cc", "Lisää arvioita kaivataan"),
                e("ce8b505e", "Ei hyödyllinen"),
                e("e5be8156", "Huomautuksen tilan määritti avoimen lähdekoodin algoritmi"),
                e("fca23c42", "Riittävä lukumäärä eri näkökantoja edustavia tekijöitä on todennut tämän huomautuksen hyödylliseksi, joten se näytetään julkaisun kontekstina."),
                e("hef420c2", "Tällä huomautuksella ei vielä ole riittävää määrää arviointeja eri näkökantoja edustajilta käyttäjiltä."),
                e("j3af43c4", "Riittävä lukumäärä eri näkökantoja edustavia tekijöitä on todennut tämän huomautuksen hyödyttömäksi."),
                e("f79d812c", "Arvioitu hyödylliseksi ja näytetty tunnin kuluessa julkaisusta"),
                e("cc02373e", "Arvioitu hyödylliseksi ja näytetty tunnin kuluessa ehdotuksesta"),
                e("d9f72d90", "Vahvistettu ja näytetty tunnin kuluessa julkaisusta"),
                e("fc6e4594", "Yleisimmät arvostelijoiden valitsemat merkinnät"),
                e("f7427d6f", "tämän julkaisun"),
                e("aa94541d", "tämän julkaisun"),
                e("fe821ebb", "tämän julkaisun"),
                e("c5cc74e5", function (a) {
                    return "" + a.urlNoteDisplayUrl;
                }),
                e("ff14b6b8", "toiseen julkaisuun"),
                e("b5cc9c47", function (a) {
                    return "" + a.urlNoteDisplayUrl;
                }),
                e("hb90fe9a", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("i23a64ea", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("h6c5af52", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("c2584f58", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("a0dec723", "tämän julkaisun"),
                e("f20fa57c", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("bd60b152", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("b95920ef", "tämän julkaisun"),
                e("f8dcced2", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("iaf626c0", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("e3002eab", "tämän julkaisun"),
                e("df3f2d52", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("cd83d952", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("ia35cd39", "tämän julkaisun"),
                e("a499228a", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("cf9ac658", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("fa56f7cb", "tämän julkaisun"),
                e("b826c19c", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("c4618eb8", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("i56af3fd", "tämän julkaisun"),
                e("g1f275b6", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("i2cac82c", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("a2ae91f1", function (a) {
                    return "" + a.urlNoteDisplayUrl;
                }),
                e("d3205ee4", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("daeff73b", function (a) {
                    return "" + a.urlNoteDisplayUrl;
                }),
                e("fc546c2e", function (a) {
                    return a.matches + "julkaisussa";
                }),
                e("i1df5f5d", function (a) {
                    return "" + a.urlNoteDisplayUrl;
                }),
                e("g03f5337", "tässä julkaisussa"),
                e("f5b30b8a", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("e0a49d5b", function (a) {
                    return "" + a.urlNoteDisplayUrl;
                }),
                e("e25f9fd4", function (a) {
                    return a.matches + "julkaisussa";
                }),
                e("bae49ec3", function (a) {
                    return "" + a.urlNoteDisplayUrl;
                }),
                e("d595bffd", "tässä julkaisussa"),
                e("ef8a55a6", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("a3aa3cb1", function (a) {
                    return "" + a.urlNoteDisplayUrl;
                }),
                e("d5061d00", "Ei näytetä X:ssä"),
                e("e272836c", "Poistetaanko huomautus?"),
                e("da5a5d8c", "Kun poistat tämän huomautuksen, se poistuu Yhteisöhuomautuksista pysyvästi."),
                e("a804a8f4", "Lisää apuasi kaipaavia huomautuksia"),
                e("ib9628b8", "Arvioi lisää huomautuksia kerryttääksesi arviointipisteitä"),
                e("bf08be2e", "Arvioi lisää huomautuksia"),
                e("i26425d8", "Jossain määrin"),
                e("c6e683d0", "Lähetä ja hyväksy"),
                e("b3fcaac6", "Harkitse lähteiden avaamista ja lukemista ennen tämän huomautuksen arviointia"),
                e("e8a33850", "Avaa ja lue lähteet ennen tämän huomautuksen arviointia"),
                e("ca6f04ec", "Lukemalla huomautuksissa mainitut lähteet voit tarkistaa niiden todenperäisyyden. "),
                e("a7338bc2", "Onko tämä huomautus hyödyllinen?"),
                e("bd0b6422", "Onko tämä hyödyllinen selvitys siitä, miksei lisäkontekstia tarvita?"),
                e("ac7f9746", "Mikä siinä oli hyödyksi?"),
                e("c7751804", "Mikä siinä ei ollut hyödyksi?"),
                e("dc9c823a", "Tämä huomautus olisi hyödyllinen kaikissa julkaisuissa, joihin tämä linkki sisältyy."),
                e("da0bb868", "Tämä huomautus olisi hyödyllinen kaikissa julkaisuissa, joissa video esiintyy."),
                e("e8694748", "Tämä huomautus olisi hyödyllinen kaikissa julkaisuissa, joissa kuva esiintyy."),
                e("b487e12e", "Tämä huomautus olisi hyödyllinen kaikissa julkaisuissa, joissa media esiintyy."),
                e("hfdb963e", "Tämä huomautus liittyy nimenomaan tähän julkaisuun ja saattaa olla aiheeton muissa saman linkin sisältävissä julkaisuissa."),
                e("bd6742c2", "Tämä huomautus liittyy nimenomaan tähän julkaisuun ja saattaa olla aiheeton muissa julkaisuissa, joissa video esiintyy."),
                e("ded3a8a2", "Tämä huomautus liittyy nimenomaan tähän julkaisuun ja saattaa olla aiheeton muissa saman kuvan sisältävissä julkaisuissa."),
                e("c1e42c92", "Tämä huomautus liittyy nimenomaan tähän julkaisuun ja saattaa olla aiheeton muissa saman julkaisuissa, joissa media esiintyy."),
                e("af198630", "yleisön saataville"),
                e("d39720d3", "hyödylliseksi"),
                e("i7d91dc9", "jossain määrin hyödylliseksi"),
                e("c75b7fb4", "hyödyttömäksi"),
                e("d9025c46", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("ce1c95d6", function (a) {
                    return "" + a.noteDisplayUrl;
                }),
                e("jd7c58d8", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("ebb0b116", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("f9005c24", function (a) {
                    return a.matches + " julkaisussa";
                }),
                e("a4886e54", function (a) {
                    return "" + a.noteDisplayUrl;
                }),
                e("h8335712", "Huomautuksesi"),
                e("b9f18eec", "Arvioitu hyödylliseksi"),
                e("j33f6520", "Arvioitu hyödyttömäksi"),
                e("idc0e9fc", "Rekisteröidy Yhteisöhuomautusten tekijäksi"),
                e("a83cccfa", "Tekijät voivat tarkastella huomautusehdotuksia, kirjoittaa huomautuksia, seurata pisteitään ym."),
                e("c2a6ec00", "Haluatko liittyä Yhteisöhuomautuksiin?"),
                e("d2470b62", "Auta muita oikean tiedon lähteille."),
                e("ab23a972", "Seuraa keskustelua"),
                e("c68f3bc0", "Lue lisää arvoistamme"),
                e("dfb1f498", "Palaute"),
                e("a584cfa7", "Lähetä yv tilille @CommunityNotes"),
                e("e4d93012", "Useampi ihminen on pyytänyt yhteisöhuomautusta"),
                e("e55983c0", "Kukaan pyynnön tekijä ei ole vielä linkittänyt lähdettä, joka selittäisi, miksi huomautusta kaivataan."),
                e("h23be93e", "Pyynnön tekijät voivat liittää mukaan X-julkaisun selittääkseen huomautuksen tarvetta. Seuraava julkaisu on liitetty pyyntöön."),
                e("ca6ae344", "Yhteisöhuomautukset-välilehti"),
                e("fe27c1e2", "Huomautukset"),
                e("ff692d64", "Profiilisi"),
                e("cb1adfa0", "Lataa tiedot"),
                e("jaf0d42c", "Laatimasi huomautukset"),
                e("fa9a644a", "Jos viimeksi kirjoittamastasi ja arvioidusta 5 huomautuksesta 3 saa tilamerkinnän hyödytön, oikeutesi kirjoittaa huomautuksia poistetaan tilapäisesti."),
                e("i4014342", "Välty kirjoitusoikeutesi jäädyttämiseltä. Tässä on palautetta muilta tekijöiltä kahteen huomautukseesi:"),
                e("j9897a7c", "Saa vinkkejä huomautusten kirjoittamiseen"),
                e("ac71a5a0", "Arvioi ohjeita vaativia huomautuksia"),
                e("h544e3c8", "Tekijöiden on nyt ansaittava arviointipisteluku 5 saadakseen kirjoittaa huomautuksia."),
                e("d88c63f6", "Uutta: Ansaitse mahdollisuus kirjoittaa huomautuksia"),
                e("bd31adde", "Olet eronnut Yhteisöhuomautukset-ohjelmasta."),
                e("a796c19c", "Liity uudelleen"),
                e("h837a96c", "Liityt uudelleen Yhteisöhuomautukset-ohjelmaan."),
                e("a4d4bcb9", function (a) {
                    return "Jos haluat takaisin mukaan, se onnistuu täällä " + a.numDaysToRejoin + " päivän kuluttua.";
                }),
                e("a490bc51", "Lue lisää"),
                e("c94ad3e8", "Lähetä meille palautetta"),
                e("ee160790", "Poistetut huomautukset"),
                e("b3de4a42", "Arviointipisteet"),
                e("a7b0393c", "Kirjoituspisteet"),
                e("id568acc", "Huippukirjoittaja"),
                e("e25f9ad6", "Arviot, jotka auttoivat huomautusta saamaan statuksen Hyödyllinen"),
                e("a0697fbc", "Hienoa! Nämä arviot auttoivat tunnistamaan hyödyllisiä huomautuksia, jotka kertovat julkaisujen kontekstista ja valistavat käyttäjiä."),
                e("a3311a60", "Nämä arviot auttoivat tunnistamaan hyödyllisiä huomautuksia, jotka kertovat julkaisujen kontekstista ja valistavat käyttäjiä."),
                e("bbc44f5a", "Nämä arviot auttavat tunnistamaan hyödyllisiä huomautuksia, jotka kertovat julkaisujen kontekstista ja valistavat käyttäjiä."),
                e("b4f21858", "Arviot, jotka auttoivat huomautusta saamaan statuksen Hyödytön"),
                e("d46b6bc8", "Nämä arviot parantavat Yhteisöhuomautuksia antamalla palautetta huomautusten laatijoille, ja tekijät voivat keskittyä ansiokkaimpiin huomautuksiin."),
                e("a5e6ba6a", "Annetut hyödyllinen-arviot, kun huomautuksen statukseksi tuli hyödytön"),
                e("a22929e4", "Annetut hyödytön-arviot, kun huomautuksen statukseksi tuli hyödyllinen"),
                e("b76dd726", "Nämä arviot ovat yleisiä ja ne voivat johtaa statuksen muutokseen, jos riittävän moni on samaa mieltä siitä, ettei hyödylliseksi merkitty huomautus olekaan riittävän hyödyllinen."),
                e("j29cc0f2", "Näissä tapauksissa pisteet tuplataan, koska arviot indikoivat käyttäjän tukeneen toisten mielestä heikkolaatuisia huomautuksia."),
                e("cd4333d0", "Älä huoli, näitä osuu jokaiselle. "),
                e("e9fa53ac", "Arviot huomautuksiin, joilla ei vielä ole statusta Hyödyllinen tai Hyödytön."),
                e("fc664dee", "Statuksen määräytymisen jälkeen annetut arviot"),
                e("f024ec64", "Nämä arviot voivat vahvistaa huomautuksen statusta tai auttaa kumoamaan sen."),
                e("e1ee08e6", "Kirjoituspisteet"),
                e("je3fc324", "Huomautuksesi, joiden statukseksi tuli Hyödyllinen"),
                e("f7358242", "Huomautukset, joiden statukseksi tuli Hyödyllinen"),
                e("j8e9b514", "Hienoa! Nämä huomautukset näytetään nyt X:ssä; ne kertovat julkaisujen kontekstista ja valistavat käyttäjiä."),
                e("e9e57c5c", "Nämä huomautukset näytetään nyt kaikille; ne kertovat julkaisun kontekstista ja valistavat käyttäjiä."),
                e("fee0d8a8", "Nämä huomautukset näytetään X:ssä; ne kertovat julkaisujen kontekstista ja valistavat käyttäjiä."),
                e("iab44364", "Huomautuksesi, joiden statukseksi tuli Hyödytön"),
                e("d8c90438", "Huomautukset, joiden statukseksi tuli Hyödytön"),
                e("accaa48e", "Riittävän moni tekijä on arvioinut nämä huomautukset hyödyttömiksi, ja osa arvioijista on aiemmin ollut arvioissaan vastakkaisilla kannoilla. Nämä huomautukset ja niihin annettu palaute ovat nähtävissä profiilissasi.\nHuomautuksen status voi muuttua, kun useampi ihminen antaa arvionsa."),
                e("fa2156f6", "Riittävän moni tekijä on arvioinut nämä huomautukset hyödyttömiksi, ja osa arvioijista on aiemmin ollut arvioissaan vastakkaisilla kannoilla.\nHuomautuksen status voi muuttua, kun useampi ihminen antaa arvionsa."),
                e("d004c768", "Huomautukset, jotka tarvitsevat lisää arvosteluja"),
                e("f3d6d6c0", "Huomautukset, joilla ei vielä ole statusta Hyödyllinen tai Hyödytön."),
                e("d68a370c", "Viimeisin päivitys: "),
                e("f10aaf3c", "Vinkit huomautusten arviointiin"),
                e("b9793c9a", "Et ole vielä kirjoittanut huomautuksia"),
                e("bed66f92", "Näin voit aloittaa:"),
                e("a3ca686a", "Tutustu hyödyllisten huomautusten kirjoittamista koskeviin vinkkeihin"),
                e("ga8034c6", "Kirjoita huomautus napauttamalla minkä tahansa julkaisun valikkoa •••"),
                e("h4109636", "Jos pidät julkaisua mahdollisesti harhaanjohtavana, kirjoita huomautus, joka sisältää julkaisun näkeville ihmisille tarkoitettua hyödyllistä kontekstia."),
                e("ec30e9ac", "Muut tekijät arvioivat huomautuksesi hyödyllisyyden"),
                e("e0c42f80", "Jos se saa statuksen hyödyllinen, se aletaan näyttää kontekstina kaikille julkaisun näkeville"),
                e("ife4baaa", "Yhteisöhuomautukset ei toimi jyräämällä. Jotta laajaa lukijakuntaa hyödyttävät huomautukset kyetään tunnistamaan, status muodostuu vasta, kun eri kantoja edustaneilla arvioijilla on huomautuksen hyödystä yhteinen näkemys. Näin pyritään ehkäisemään yksipuolisia arvioita."),
                e("a0c552ee", "Vaikutuksesi näkyy tässä"),
                e("a4e5ea3c", "Et ole vielä arvioinut huomautuksia"),
                e("g9a28bde", "Selaa ohjeita vaativia huomautuksia"),
                e("dc0046e2", "Selaa Yhteisöhuomautusten etusivua"),
                e("fecae168", "Sieltä löydät enemmän arviointeja tarvitsevia huomautuksia ja tietoa siitä, mihin liittyen arviosi auttavat."),
                e("h525e29e", "Auta löytämään huomautuksia, jotka voivat olla hyödyllisiä monille ihmisille"),
                e("f6db7706", "Parhaat Yhteisöhuomautukset vastaavat suoraan julkaisun väittämiin, ne on kirjoitettu avuliaalla ja selkeällä kielellä ja ne perustuvat yleisesti luotettavina pidettyihin lähteisiin."),
                e("f636b582", "Auta löytämään huomautuksia, jotka eivät ole hyödyllisiä"),
                e("f58f4f62", "Heikkolaatuisten huomautusten arvioinnista on hyötyä Yhteisöhuomautuksille. Laatijat saavat palautetta työstään, ja muut tekijät voivat keskittyä ansiokkaimpiin huomautuksiin."),
                e("cf30af22", "Tiesitkö?"),
                e("d145b0fa", "Huomautuksen status ei muodostu jyräämällä. Jotta laajaa lukijakuntaa hyödyttävät huomautukset kyetään tunnistamaan, huomautus saa statuksen vasta, kun arvioijilla, jotka eivät aina ole olleet yksimielisiä, on sen hyödystä yhteinen näkemys. Näin pyritään ehkäisemään yksipuolisia arvioita."),
                e("c20a24cc", "Onnittelut!"),
                e("d01b8fc8", "Olet Yhteisöhuomautusten kirjoittajien huippua."),
                e("jbe2ad46", "Kirjoittajat, joilla on korkeat kirjoituspisteet ja joiden huomautuksista suuri osuus on arvioitu hyödyllisiksi, saavat seuraavat etuudet:"),
                e("d2dc3d4c", "Etusija huomautusten arvioinnissa"),
                e("heb73816", "Huippukirjoittajien ehdottamista huomautuksista lähtee herkemmin arviointipyyntö arvioijille."),
                e("b760d51a", "Tunnus profiilissa"),
                e("ief63e50", "Huippukirjoittajat tunnistaa Yhteisöhuomautukset-profiilissa olevasta tunnuksesta."),
                e("jd6b88ca", "Huomautukset mediaan"),
                e("c39bdf5a", "Huippukirjoittajat voivat kirjoittaa huomautuksia mediaan, joka esiintyy useissa julkaisuissa, jolloin tiedon saava yleisö on paljon suurempi."),
                e("efb9a9e0", "Ei mitään nähtävää"),
                e("a1529ce7", "Lue lisää"),
                e("f07ed596", "Tekijät auttavat kollektiivisesti tunnistamaan hyödylliset huomautukset, jotka kertovat käyttäjille julkaisun kontekstin."),
                e("h2b5268a", "Hyvä! Arvioi lisää huomautuksia kasvattaaksesi omaa vaikutustasi."),
                e("e86c87a0", "Arvioi lisää huomautuksia"),
                e("ad98f836", "Arviointivaikutuksesi meni miinukselle. Älä huoli!"),
                e("e2d7c914", "Jatka huomautusten arviointia"),
                e("a5427624", "Selaa Yhteisöhuomautusten etusivua löytääksesi huomautukset, jotka kaipaavat useamman tekijän arviota."),
                e("e227a7fa", "Huomautuksen tila voi aina muuttua"),
                e("eda73c9c", "Arviosi poikkeavat varmasti joskus huomautuksen tilasta. Se ei haittaa! Jos useampi tekijä on kanssasi samalla kannalla, huomautuksen tila voi muuttua ja vaikutuspisteesi muuttuvat."),
                e("cfa3b664", "Voit nyt kirjoittaa Yhteisöhuomautuksia!"),
                e("j44125ee", "Tämä kirjoittaja ei ole vielä kirjoittanut yhtään huomautusta."),
                e("da55067c", "Kurkista tänne myöhemmin!"),
                e("f893c3b8", "Liity Yhteisöhuomautuksiin"),
                e("a701795c", "Ei vielä Yhteisöhuomautuksia"),
                e("db08295e", "Haluatko mukaan?"),
                e("ha275800", "Näyttää siltä, ettet ole mukana Yhteisöhuomautukset-pilotissa. Liity mukaan auttaaksesi ihmisiä olemaan paremmin perillä asioista."),
                e("ce0a213a", "Pääset laatimaan huomautuksen valitsemalla Yhteisöhuomautukset-kuvakkeen julkaisun valikosta. Laatimasi huomautukset näkyvät täällä."),
                e("c87f3cf8", "Huomautus"),
                e("a5b19492", "Tätä kommenttia ei ole"),
                e("c21d1b2a", "Huomautukset saavat statuksen Hyödyllinen tai Ei hyödyllinen, kun riittävän moni tekijä on antanut arvionsa. Arvioita kerätään myös ihmisiltä, jotka ovat aiemmissa arvioissaan olleen erimielisiä. Näin pyritään takaamaan, että huomautukset ovat hyödyksi laajalle käyttäjäkunnalle, ja ehkäisemään yksipuolisia arvioita."),
                e("c7b59cde", "Yhteisöhuomautusten asetukset"),
                e("c8be1d0d", "Lue lisää."),
                e("a5a2330c", "Julkaisut, joissa on sama media"),
                e("ad071b5c", "Julkaisuja, joissa on jaettu sama linkki"),
                e("b92967c0", "Tämä huomautus ei ole mediahuomautus"),
                e("i92fddce", "Huomautus näkyy automaattisesti seuraavissa julkaisuissa, jos riittävän moni yhtyy näkemykseen."),
                e("f5ce7a00", "Tällä mediajulkaisulla ei vielä ole osumia."),
                e("e1288bdc", "Hälytykset huomiota kaipaavista huomautuksista"),
                e("ca14eab4", "Saa ilmoitus, kun yhteisöhuomautus kaipaa arviotasi."),
                e("gb2bc3d0", "Antaa palaa 🔥"),
                e("c35ebcd2", "Niin monta kuin suinkin – useita päivässä"),
                e("ba165b3c", "Usein"),
                e("g72e2a58", "Muutama hälytys viikossa"),
                e("idd249e0", "Toisinaan"),
                e("if2e01ee", "Muutama hälytys kuukaudessa"),
                e("fdaeaab8", "Asetustesi tallentamisessa tapahtui virhe. Yritä uudelleen."),
                e("db4e443a", "Asetuksesi on tallennettu."),
                e("dc11636c", "Puhumasi kielet"),
                e("fae059c6", "Eroa Yhteisöhuomautukset-ohjelmasta"),
                e("ed37123a", "Olet eroamassa Yhteisöhuomautukset-ohjelmasta"),
                e("c1a554a2", "Huomioi seuraavat asiat:"),
                e("j59355fe", "Et voi kirjoittaa uusia Yhteisöhuomautuksia."),
                e("c23420ec", "Et saa ilmoituksia Yhteisöhuomautuksista, jolleivät ne liity omaan toimintaasi X:ssä."),
                e("c76031ee", "Anonyymi Yhteisöhuomautukset-profiilisi ja aiemmin kirjoittamasi huomautukset säilyvät julkisesti saatavilla. Pääset edelleen katsomaan ja poistamaan omia huomautuksiasi."),
                e("be4f9106", "Voit liittyä uudelleen mukaan 90 päivän kuluttua."),
                e("hf68e810", "Yhteisöhuomautukset on ohjelma, joka pyrkii ihmisten valistamiseen. Se antaa X:n käyttäjille keinot lisätä yhteisvoimin hyödyllisiä huomautuksia julkaisuihin, jotka saattavat johtaa harhaan."),
                e("jdb52860", "Avustajat kirjoittavat ja arvioivat huomautuksia"),
                e("c104025c", "Avustajat ovat tavallisia X:n käyttäjiä, jotka osallistuvat pilottiin kirjoittaakseen ja arvioidakseen huomautuksia. Mitä useampi osallistuu, sitä paremmin ohjelma palvelee yleisöä."),
                e("j7872b8c", "Vain käyttäjien hyödyllisiksi arvioimat huomautukset näytetään julkaisun ohessa"),
                e("fb59415e", "Jotta huomautus näytetään julkisesti kontekstina julkaisuun, sen on oltava riittävän monen eri näkökantoja edustavan käyttäjän hyödylliseksi arvioima. Tällä lähestymistavalla pyritään välttämään puolueellisuus ja manipulointi ja löytämään huomautukset, jotka ovat hyödyksi monille."),
                e("f9a44022", "Näytettävää kontekstia ei valitse X (yhtiö), vaan sen tekevät käyttäjät"),
                e("gdf4fbb2", "X (yhtiö) ei kirjoita, arvioi eikä moderoi huomautuksia (paitsi jos ne rikkovat X:n sääntöjä). Uskomme siihen, että kun käyttäjät saavat tehdä nämä valinnat yhdessä, saavutetaan reilu ja tehokas tapa tuoda esiin informaatiota, jonka avulla yleisö on paremmin perillä asioista."),
                e("cc720e6a", "Yhteisöhuomautukset rakentuu tiedon läpinäkyvyydelle"),
                e("j2fcd33a", "Tietoihin sisältyvät kontribuutiot, joiden päiväys on viimeistään"),
                e("d4a6b322", "Kaikki Yhteisöhuomautusten data julkaistaan täällä päivittäin, jotta ihmiset voivat analysoida sitä, havaita mahdolliset ongelmat ja keksiä keinoja Yhteisöhuomautusten kehittämiseksi. Haluamme oppia yhdessä."),
                e("c359263a", "Opi käyttämään ja analysoimaan Yhteisöhuomautusten dataa "),
                e("b8a27fe2", "lukemalla oppaamme"),
                e("j1c99e00", "Huomautustiedot"),
                e("i6f69314", "Arviotiedot"),
                e("b7e4c114", "Huomautuksen tilan historiadata"),
                e("d7f19114", "Käyttäjän rekisteröinnin tilatieto"),
                e("b6008808", "Huomautuspyyntödata"),
                e("h786cd7a", "Huomautusdataa ei vielä ole saatavana"),
                e("d0fe8052", "Arviodataa ei vielä ole saatavana"),
                e("c0427f94", "Huomautuksen tilan historiadataa ei vielä ole saatavana"),
                e("g880d8c0", "Käyttäjän rekisteröinnin tilatietoa ei vielä ole saatavana"),
                e("ab1b3d38", "Huomautuspyyntödataa ei vielä ole saatavana"),
                e("c43fb933", "kehittäjäsopimusta ja -käytäntöä"),
                e("ed88e742", "Kopioi linkki aiheeseen"),
                e("h92fe1be", "Valitettavasti Yhteisöhuomautukset ei vielä ole käytettävissäsi."),
                e("f0dc1434", "Yhteisöhuomautukset on toistaiseksi käytettävissä vain Yhdysvalloissa."),
                e("f8fc0b48", "Luo kansio"),
                e("c14bcdde", "Hae kirjanmerkeistä"),
                e("e9c65c4a", "Haku kirjanmerkeistä"),
                e("b92a21d9", function (a) {
                    return "Ei tuloksia haulla " + a.query;
                }),
                e("f191a2ba", "Hakuasetuksesi"),
                e("a068008a", "Kansiot eivät nyt lataudu"),
                e("f075b0e8", "Muokkaa kansiota"),
                e("beba2a0e", "Luo uusi kirjanmerkkikansio"),
                e("e41c9b4f", function (a) {
                    return "Tallennettu kokoelmaan " + a.bookmarkFolderName;
                }),
                e("h18f86a4", "Poista kansio"),
                e("f4ea967a", "Kansio on poistettu"),
                e("b670aa62", "Kansion nimi"),
                e("aece5462", "Kansion nimen päivitys onnistui"),
                e("e3299b94", "Jokin meni pieleen. Yritä kansion päivittämistä hetken kuluttua uudelleen."),
                e("c09ea714", "Jokin meni pieleen. Yritä kansion poistamista hetken kuluttua uudelleen."),
                e("gee78816", "Kirjanmerkkikansion nimi ei saa ylittää 25 merkkiä"),
                e("h9a5daa2", "Poistetaanko kansio?"),
                e("ac9d5f56", "Julkaisusi tallennetaan edelleen kansioon ”Kaikki kirjanmerkit”"),
                e("i6e7e298", "Luo"),
                e("a0ea2fa6", "Nimikenttä ei voi olla tyhjä"),
                e("eec37eac", "Kirjanmerkkikansio tällä nimellä on jo olemassa"),
                e("fce0c59e", "JSON-animaatiokoodin jäsennys ei onnistunut. Tarkista animaatiotiedoston JSON-formaatti ja yritä uudelleen."),
                e("g0eea6c2", "JSON-animaatiotiedoston lukeminen ei onnistunut. Yritä avata tiedosto uudelleen.");
            e("ae58026a", "Avaa bränditykkäys-.json-tiedosto esikatselua varten"),
                e("hd0bc1eb", function (a) {
                    return a.name + " on live-tilassa";
                }),
                e("bea1f26b", function (a) {
                    return a.name + " oli live-tilassa";
                }),
                e("ab3ee97f", function (a) {
                    return a.screenName + " ei ole live-tilassa";
                }),
                e("d39d46c4", "Otsikko päivitetty. Muutosten päivittymiseen voi mennä 30 sekuntia."),
                e("e44095a5", function (a) {
                    return "Alkoi " + a.timestamp;
                }),
                e("j83f29dd", function (a) {
                    return "Päättyi " + a.timestamp;
                }),
                e("daca8a2c", "Avaa Dockissa"),
                e("e3aac82a", "Lähetystä ladataan"),
                e("i0ed3f4e", "Tapahtumakuva"),
                e("cbae35fa", "Ilmianna lähetys"),
                e("fd12ab58", "Kokoelman julkaisut"),
                e("a226497c", "Luo uusi Yhteisö"),
                e("d7346632", "Et ole liittynyt vielä yhteenkään Yhteisöön"),
                e("b732a4cc", "Kun teet sen, ne näkyvät täällä."),
                e("hff48914", "Julkaisuja ei löydy tällä hetkellä."),
                e("hb52cc4a", "Yritä myöhemmin uudelleen."),
                e("e50e1bb0", "Tervetuloa Yhteisöihin"),
                e("i6829daa", "Yhteisöt ovat moderoituja keskusteluryhmiä, joista X:n käyttäjät löytävät samanhenkistä väkeä."),
                e("fc5c6914", "Tapaa muita samoista asioista kiinnostuneita"),
                e("aa1a9820", "Liity yhteisöihin, niin voit pitää yhteyttä ihmisiin, jotka ovat kiinnostuneista samoista asioista kuin sinä."),
                e("edef4c82", "Julkaise suoraan Yhteisöön"),
                e("a7640df6", "Yhteisön jäsenet ja seuraajasi näkevät julkaisusi."),
                e("h3bb8068", "Löydä samanhenkistä väkeä"),
                e("a709f8f8", "Järjestelmänvalvojat ja moderaattorit auttavat hallitsemaan Yhteisöjä ja pitämään keskustelut raiteillaan."),
                e("c8d33380", "Uusia kohteita"),
                e("cb6adb10", "Löydä Yhteisöjä"),
                e("df362964", "Löydä Yhteisöjä"),
                e("dfd5031f", function (a) {
                    return a.newTweets + " uusi uu" + n(a.newTweets, "si julkaisu", "tta julkaisua");
                }),
                e("ha4bb8a9", function (a) {
                    return a.reportedTweets + " uu" + n(a.reportedTweets, "si ilmoitus", "tta ilmoitusta");
                }),
                e("caf003b3", function (a) {
                    return a.memberRequests + " uu" + n(a.memberRequests, "si pyyntö", "tta pyyntöä");
                }),
                e("a2118086", "Lajittele julkaisut"),
                e("hb01fe46", "Kun teet sen, ne näkyvät täällä."),
                e("c170a564", "Syöttämälläsi sanalla ei löytynyt mitään. Yritä myöhemmin uudelleen eri hakusanalla."),
                e("cbd1aef8", "Hae yhteisöjä ja julkaisuja"),
                e("fbf01e52", "Hae Yhteisöistä"),
                e("c8a6499c", "Yhteisöjulkaisuhaun tulokset"),
                e("af05a978", "Hakutuloksia tulee tähän kirjoittaessasi."),
                e("eb4d2cd0", "Julkaisuja ei löydy."),
                e("a8ecdb4c", "Uusimmat yhteisön julkaisut ‑hakutulokset"),
                e("dc6ce7b4", "Jäsenet"),
                e("ga2aa43c", "Moderaattorit"),
                e("b139b54a", "Kutsu jäseniä"),
                e("cf4898a0", "Hae henkilöitä"),
                e("g30bc699", function (a) {
                    return "Näytä käyttäjän @" + a.screenName + " profiili";
                }),
                e("e585d844", "Lisää moderointitiimiin"),
                e("cab7c6f8", "Lisätäänkö moderointitiimiin?"),
                e("e96d5255", function (a) {
                    return "@" + a.screenName + " on nyt moderaattori.";
                }),
                e("f348a395", function (a) {
                    return "Emme voi lisätä @" + a.screenName + " moderointitiimiin juuri nyt. Yritä myöhemmin uudelleen.";
                }),
                e("c3a1aebe", "Poista moderointitiimistä"),
                e("c273c8a6", "Poistetaanko moderointitiimistä?"),
                e("c0eb2a53", function (a) {
                    return "@" + a.screenName + " ei enää ole moderaattori.";
                }),
                e("a5808125", function (a) {
                    return "Emme voi poistaa @" + a.screenName + " moderointitiimistä juuri nyt. Yritä myöhemmin uudelleen.";
                }),
                e("a51d671b", function (a) {
                    return "Aseta käyttäjälle @" + a.screenName + " porttikielto Yhteisöön";
                }),
                e("cdd87524", "Täällä ei ole vielä ketään"),
                e("cca51910", "Kun Yhteisöön liittyy ihmisiä, näet heidät täällä."),
                e("c9d56b72", "Kerro meille vähän Yhteisöstäsi. Voit muuttaa näitä tietoja myöhemmin."),
                e("c1ad5a12", "Näyttää siltä, että uuden Yhteisösi luomisessa on ongelmia. Yritä myöhemmin uudelleen."),
                e("f713fbd2", "Jäsenyys"),
                e("d1fa71fc", "Kysymys yhteisöön liittyville (valinnainen)"),
                e("a0a16d38", "Kuka tahansa voi liittyä ja/tai saada kutsun Yhteisöön"),
                e("ce0523a8", "Rajattu"),
                e("i1aad6ec", "Liittymistä pitää pyytää, ja moderointitiimin pitää hyväksyä pyynnöt. Moderointitiimin kutsumat ihmiset hyväksytään automaattisesti."),
                e("c85960a0", "Salli jäsenten esittää kutsuja"),
                e("ca373cd2", "Nykyisten jäsenten kutsumat ihmiset hyväksytään automaattisesti."),
                e("dfdcc6b4", "Säätele, kuka voi liittyä Yhteisöösi. Muista, että Yhteisöt näkyvät kaikille X:ssä."),
                e("h3e55b40", "Yhteisön nimi"),
                e("dd71d9c9", function (a) {
                    return "Nimen on oltava " + a.minCharacterCount + "–" + a.maxCharacterCount + " merkkiä pitkiä. Siihen ei voi sisältyä hashtageja tai @käyttäjätunnuksia";
                }),
                e("cf65e56b", function (a) {
                    return "Nimen on oltava " + a.minCharacterCount + "–" + a.maxCharacterCount + " merkkiä pitkä";
                }),
                e("d936eeca", "Nimiin ei voi sisältyä hashtageja tai @käyttäjätunnuksia."),
                e("e2df7cf2", "Yhteisön tarkoitus"),
                e("be9bb312", "Hyvin muotoiltu tarkoitus kuvaa Yhteisöä ja kertoo, mitä siltä voi odottaa"),
                e("e988475f", function (a) {
                    return "Tarkoituksen on oltava " + a.minCharacterCount + "–" + a.maxCharacterCount + " merkkiä pitkä";
                }),
                e("gcddfba8", "Kysymys hakijoille"),
                e("hf86d862", "Kun käyttäjät pyytävät päästä mukaan, he voivat vastata tähän kysymykseen. Vastaus näytetään pyynnön yhteydessä. Voit poistaa kysymyksen jättämällä sen tyhjäksi."),
                e("i88b7305", function (a) {
                    return "Kysymyksen on oltava alle " + a.maxCharacterCount + " merkkiä";
                }),
                e("dce5e1b4", "Ylläpidon työkalut"),
                e("c5d8c93e", "Moderaattorin työkalut"),
                e("c8c7f9fc", "Arvioitava"),
                e("a87df2ee", "Yhteisön hallinta"),
                e("ee609174", "Yleiset asetukset"),
                e("ab19cdaa", "Roskapostiasetukset"),
                e("d755f47d", function (a) {
                    return a.count + " uu" + n(a.count, "si julkaisu", "tta julkaisua") + " tarkistettavaksi";
                }),
                e("efc26607", function (a) {
                    return a.memberCount + " jäsen" + n(a.memberCount, "", "tä");
                }),
                e("adfcc3ce", "Lisää, poista tai muokkaa sääntöjä"),
                e("d0330d9c", "Lue säännöt"),
                e("fd67f7c8", "Muokkaa Yhteisön nimeä, tarkoitusta ym."),
                e("e7e31264", "Säädä roskapostisuodatinta ja ilmoitustyökaluja"),
                e("gc00d212", "Tuki ja resurssit"),
                e("g0cbfc50", "Hyödyllinen opas Yhteisön moderointiin"),
                e("h6ebcfca", "Näytä tämä Yhteisö profiilissasi"),
                e("c0fa0634", "Näytä Yhteisösi valokeilassa"),
                e("da035fd5", function (a) {
                    return "Uutta" + a.ttc_c9s_spotlight_header;
                }),
                e("h41224f8", "Näytä Yhteisö profiilissasi"),
                e("b18e94b2", "Vaihda ammattilaisprofiiliin, niin voit muun muassa näyttää Yhteisön profiilissasi ja seurata yleisötilastoja."),
                e("dc716b1c", "Yhteisölista"),
                e("c3e2dda6", "Lisää tai poista Yhteisölista"),
                e("a68bffdc", "Katsele yhteisön tilastoja"),
                e("c6ea29a2", "Eroa moderointitiimistä"),
                e("a6e13fac", "Haluatko varmasti erota moderointitiimistä?"),
                e("e538848c", "Et enää pääse moderointityökaluihin. Jos muutat mielesi, sinun on saatava uusi kutsu moderaattoriksi."),
                e("j49e6aa2", "Kyllä, haluan luopua roolista"),
                e("dde5f323", function (a) {
                    return a.count + " jäsenpyyntö" + n(a.count, "", "ä") + " tarkistettavaksi";
                }),
                e("f5e0332a", "Aikuissisältö (NSFW)"),
                e("e983404a", "Kiinnitetyt asiasanat"),
                e("j8af8eaa", "Jäsenyystyyppi"),
                e("d5f01116", "Tarkoitus"),
                e("c2ff3c9e", "Aihetunnisteet"),
                e("f4a98e9e", "Tietoa Yhteisöstä"),
                e("a43bed28", "Sinun on otettava tämä asetus käyttöön, jos yhteisössäsi on alle 18-vuotiaille sopimatonta sisältöä. Jos tämä valinta jää tekemättä, yhteisössä näkyvistä suodatetaan automaattisesti kaikki aikuissisältö."),
                e("ab1069de", "Poista Yhteisö"),
                e("bbc91896", "Tätä ei voi kumota. Julkaisujen laatijat näkevät edelleen omat julkaisunsa."),
                e("i27eb0b7", function (a) {
                    return "" + a.communityName;
                }),
                e("a49f884e", "Yhteisön banneri"),
                e("ea965b82", "Muokkaa Yhteisön banneria"),
                e("j35d3ad6", "Poista ja korvaa"),
                e("f1e8fb22", "Bannerisi poistetaan ja korvataan oletusbannerilla."),
                e("e405ec22", "Näyttää siltä, että bannerikuvasi tallentamisessa on ongelmia. Yritä myöhemmin uudelleen."),
                e("b7fb6bda", "Rajaa kuvaa"),
                e("e71cdf4e", "Rajaa esikatselukuvaa"),
                e("ef199198", "Asetuksesi on tallennettu"),
                e("ee10aa5a", "Asetustesi tallennus ei onnistunut"),
                e("i307a7ca", "Muokkaa kiinnitettyjä asiasanoja"),
                e("dc6eca54", "Asiasana poistettu"),
                e("d27de326", "Kiinnitä asiasanoja järjestääksesi yhteisösi julkaisut eri aikajanoille"),
                e("d84cc77a", "Kirjoita asiasana tähän"),
                e("d22e4cba", "Asiasanojen tulee olla uniikkeja"),
                e("ca72a540", "Asiasanoja on jo sallittu enimmäismäärä"),
                e("bd96bf16", "Asiasanassa on oltava vähintään 1 merkki ja enintään 30 merkkiä"),
                e("j27623d4", "Asiasanassa ei saa olla välilyöntejä tai erikoismerkkejä"),
                e("c5d1634e", "Selvä, ymmärrän"),
                e("daedd9fa", "Tämä sallii kenen tahansa liittyä Yhteisöösi. Kaikki odottavat liittymispyynnöt hyväksytään automaattisesti."),
                e("h3c0f1a2", "Muokkaa Yhteisön nimeä"),
                e("cb5e6510", "Näyttää siltä, että uuden nimen tallentamisessa on ongelmia. Yritä myöhemmin uudelleen."),
                e("a8955490", "Muokkaa tarkoitusta"),
                e("ced2292a", "Näyttää siltä, että tarkoituksen kuvauksen tallentamisessa on ongelmia. Yritä myöhemmin uudelleen."),
                e("ba74c098", "Muokkaa kysymystä"),
                e("bd3e0420", "Näyttää siltä, että kysymyksen tallentamisessa on ongelmia. Yritä myöhemmin uudelleen."),
                e("b57baa7a", "Muokkaa aihetunnisteita"),
                e("f8caab7a", "Lisäämällä aihetunnisteita tehostat yhteisösi näkyvyyttä suosituksissa ja hakutuloksissa."),
                e("f35a667a", "Kirjoita aihetunniste tähän"),
                e("b057d5c6", "Aihetunnisteiden on oltava uniikkeja"),
                e("cc961258", "Aihetunnisteita on jo sallittu enimmäismäärä"),
                e("df4aca88", "Aihetunnisteen on oltava vähintään 1 merkki ja korkeintaan 30 merkkiä pitkä"),
                e("ie58fa58", "Aihetunnisteissa ei saa olla välilyöntejä tai erikoismerkkejä"),
                e("hd176a01", function (a) {
                    return "Aihe tallennettu! Yhteisön aihe on nyt " + a.newTopicName;
                }),
                e("i39a43cc", "Yhteisön aihe poistettu"),
                e("e81b196e", "Uuden aiheen tallennus ei onnistunut"),
                e("c1f97ad4", "Muokkaa aihetta"),
                e("g908eb0c", "Lisää aihe, jotta muut löytävät yhteisösi helpommin! Valitse aihe, joka vastaa yhteisöäsi parhaiten."),
                e("f18a8ca0", "Roskapostiasetukset"),
                e("c8bd5d42", "Spämmisuodattimen vahvuus"),
                e("gfeb40a2", "Spämmisuodattimia voi virittää eri herkkyystasoille ei-toivottujen julkaisujen hallintaa varten."),
                e("h766865c", "X:n automaattinen ilmianto"),
                e("fd1f413a", "Ilmianna automaattisesti moderaattoreille. Kun julkaisu on hyväksytty, X ei ilmianna seuraavia julkaisuja samalta kirjoittajalta."),
                e("b1ba5fb4", "Spämmisuodatus"),
                e("ee195f28", "Roskapostihakusanat"),
                e("cf276a82", "Piilota julkaisut, jotka X on ilmiantanut, kunnes moderaattorit hyväksyvät ne"),
                e("a8c4c3fe", "Ilmianna julkaisut käyttäjiltä, joilla on aiemmin ollut tapana spämmätä"),
                e("j8de95ec", "Syötä avainsanat, jotka laukaisevat automaattisen ilmiannon"),
                e("ie873142", "Vahva"),
                e("a977afa2", "Heikko"),
                e("j715cb38", "Muokkaa kiellettyjä avainsanoja"),
                e("b32ebbe8", "Lisää avainsanoja, jotka X automaattisesti ilmiantaa Yhteisön moderaattoreille"),
                e("acde5366", "Syötä avainsana tähän"),
                e("a5f66c34", "Avainsanan on oltava yksilöllinen"),
                e("ea637914", "Avainsanoja on jo sallittu enimmäismäärä"),
                e("fede6d3c", "Avainsanassa on oltava vähintään 1 merkki ja enintään 30 merkkiä"),
                e("cc06e200", "Avainsanassa ei saa olla välilyöntejä tai erikoismerkkejä"),
                e("d94edeb4", "Yhteisölläsi voi olla enintään 10 sääntöä. Selkeät säännöt ohjaavat osallistujia hyvään käytökseen ja auttavat pitämään keskustelut asiassa."),
                e("j560c8ea", "Lisää sääntö"),
                e("a9ba79c0", "Hyvillä säännöillä syntyy hyviä Yhteisöjä"),
                e("h5482c7a", "Harkitse huolella Yhteisösi sääntöjä. Ne määräävät keskustelun sävyn ja kertovat jäsenille, mitä heiltä odotetaan."),
                e("d5033a7a", "Haluatko esimerkiksi keskustelujen pysyvän tiukasti asiassa? Onko itsensä mainostaminen sallittu? Entä kiroilu?"),
                e("ee8c43a0", "Mitä selkeämmät säännöt laadit, sitä vähemmän joudut myöhemmin moderoimaan."),
                e("gaa3239a", "Näyttää siltä, että uuden sääntösi tallentamisessa on ongelmia. Yritä myöhemmin uudelleen."),
                e("a67445d6", "Kiintiö täyttyi"),
                e("fcbe0993", function (a) {
                    return "Yhteisöillä voi olla enintään " + a.maxRuleCount + " sääntöä. Voidaksesi lisätä uuden säännön sinun on ensin poistettava yksi vanhoista.";
                }),
                e("c66769a4", "Sääntö"),
                e("ef02695b", function (a) {
                    return "Sääntöjen nimien on oltava " + a.minCharacterCount + "–" + a.maxCharacterCount + " merkkiä";
                }),
                e("c8242020", "Kuvaus (valinnainen)"),
                e("d32cf5e7", function (a) {
                    return "Kuvailu voi olla enintään " + a.maxCharacterCount + " merkkiä";
                }),
                e("f8fa00c7", function (a) {
                    return "Descriptions can’t exceed " + a.maxCharacterCount + " characters";
                }),
                e("d45ae5e0", "Muista kertoa Yhteisölle"),
                e("c1631260", "Luottamus säilyy, kun tiedotat käyttäjille sääntömuutoksista."),
                e("d3190bde", "Tallenna sääntö"),
                e("ifd6e91c", "Peru, ja muokkaa sääntöä"),
                e("h99020e0", "Muokkaa sääntöä"),
                e("f74a5adc", "Yhteisöillä on oltava vähintään yksi sääntö. Voit muokata nykyistä sääntöä tai lisätä uuden säännön ja poistaa sitten tämän."),
                e("fbb0ed92", "Poista tämä sääntö"),
                e("hed35472", "Säännön poistaminen on lopullinen teko. Sitä ei voi kumota."),
                e("c8677446", "Poista sääntö"),
                e("c3a0d44e", "Peru, ja muokkaa sääntöä sen sijaan"),
                e("d703ce9e", "Lisää lista Yhteisöösi"),
                e("f21f023c", "Kun lisäät listan Yhteisöösi, syötteeseen tulee itse kuratoimaasi, relevanttia sisältöä. Valitse jokin alla olevista listoistasi:"),
                e("gbc2cf50", "Listasi"),
                e("ef9462fa", "Eikö sinulla ole tähän sopivaa listaa?"),
                e("fcda89f4", "Luo uusi lista, jolle lisäät sellaisia X-tilejä, jotka julkaisevat Yhteisöllesi relevanttia sisältöä. Pidä lista julkisena, jotta se näkyy Yhteisölle."),
                e("c09609d8", "Luo lista"),
                e("dfddd842", "Lähetetään yksityisviestinä"),
                e("a3b3939b", function (a) {
                    return "@" + a.screen_name + " on jo kutsuttu";
                }),
                e("db4f0cc9", function (a) {
                    return "@" + a.screen_name + " on jo tässä Yhteisössä";
                }),
                e("h252ede6", "Olet jo käyttänyt kaikki kutsusi."),
                e("a5cd93f9", function (a) {
                    return "Käyttäjää @" + a.screen_name + " ei voi kutsua juuri nyt";
                }),
                e("i6568549", function (a) {
                    return "Sinulla on " + a.remaining_invite_count + " kutsu" + n(a.remaining_invite_count, "", "a") + " jäljellä";
                }),
                e("b4f16d00", "Hae kutsuttavia ihmisiä"),
                e("ja1387a8", "Hakutuloksissa näkyvät vain omat seuraajasi ja käyttäjät, jotka ovat sallineet yksityisviestit kaikilta."),
                e("ae85768c", "Hakutuloksissa näkyvät vain omat seuraajasi ja käyttäjät, jotka ovat sallineet yksityisviestit kaikilta."),
                e("hb1e378e", "Kutsuttu"),
                e("d710b60c", "Yhteisön analytiikka"),
                e("c199e390", "Uusia julkaisuja"),
                e("b4f51cd6", "Edellisviikon julkaisujen lukumäärä"),
                e("g6f8325a", "Uudet jäsenet"),
                e("b2bb7276", "Tällä viikolla liittyneiden jäsenten lukumäärä"),
                e("e2172c92", "Aktiiviset jäsenet"),
                e("fe1a9f68", "Yhteisöösi julkaisseita jäseniä yhteensä"),
                e("e989927e", "Eri julkaisijoita"),
                e("d1386a90", "Yhteisöösi julkaisun tehneitä jäseniä yhteensä"),
                e("abf609f2", "Jäseniä yhteensä"),
                e("h2081878", "Yhteisösi jäsenmäärä"),
                e("a3235cd6", "Eri käyntejä"),
                e("g21e2a70", "Yhteisössäsi viimeisen viikon aikana käyneiden X:n käyttäjien määrä"),
                e("ied6bac2", "Tykkäysten lukumäärä"),
                e("ced8d39a", "Yhteisösi tykkäysten määrä viimeisen viikon aikana"),
                e("fb4f859c", "Vastausten lukumäärä"),
                e("h5a41cce", "Yhteisösi vastausten määrä viimeisen viikon aikana"),
                e("i314218e", "Tilastot näytetään viimeiseltä 7 päivältä. Päivitetty "),
                e("addbb11e", "Ei uusia jäsenyyspyyntöjä"),
                e("c38131de", "Olet ajan tasalla. Kun uusia pyyntöjä tulee, näet ne täällä."),
                e("d7f13fb9", function (a) {
                    return "@" + a.screenName + " hyväksyttiin, ja on nyt Yhteisösi jäsen";
                }),
                e("a340df67", function (a) {
                    return "Käyttäjältä @" + a.screenName + " evättiin jäsenyys, eikä hän voi liittyä Yhteisöösi";
                }),
                e("jd8aae9d", function (a) {
                    return "Näyttää siltä, ettei käyttäjän @" + a.screenName + " hyväksyminen onnistu juuri nyt. Yritä myöhemmin uudelleen.";
                }),
                e("i580e149", function (a) {
                    return "Näyttää siltä, ettei käyttäjän @" + a.screenName + " epääminen onnistu juuri nyt. Yritä myöhemmin uudelleen.";
                }),
                e("b4a38e4e", "Olet estänyt tämän henkilön. Jos hänen jäsenyytensä hyväksytään, sinun on poistettava esto nähdäksesi henkilön julkaisut."),
                e("f0956736", "Olet hiljentänyt tämän henkilön. Jos hänen jäsenyytensä hyväksytään, sinun on poistettava hiljennys nähdäksesi henkilön julkaisut."),
                e("b7f1e58a", "Seuraa sinua"),
                e("dffb0774", "Tarkistettavaa ei hetkellä ei ole"),
                e("ab512f26", "Toimintalokia ei ole tallennettu."),
                e("b8171558", "Porttikielto"),
                e("e32e7e1a", "Moderaattori"),
                e("b53fb7c6", "Näyttää siltä, ettemme juuri nyt voi kumota tätä toimenpidettä. Yritä myöhemmin uudelleen."),
                e("c546ba07", function (a) {
                    return "Näytä käyttäjän " + a.userName + " profiili";
                }),
                e("h4516e4f", function (a) {
                    return "Hae käyttäjän " + a.userName + " julkaisuista tässä Yhteisössä";
                }),
                e("j4d4a809", function (a) {
                    return a.moderatorName + " piilotti julkaisun";
                }),
                e("ja589ea5", function (a) {
                    return a.revertedModeratorName + " poisti julkaisun piilotuksen";
                }),
                e("c904a2ff", function (a) {
                    return a.moderatorName + " kiinnitti julkaisun";
                }),
                e("b43358cf", function (a) {
                    return a.moderatorName + " irrotti julkaisun kiinnityksen";
                }),
                e("bb6299a7", function (a) {
                    return "" + a.moderatorName;
                }),
                e("f0347599", function (a) {
                    return "" + a.moderatorName;
                }),
                e("e33d133b", function (a) {
                    return "" + a.moderatorName;
                }),
                e("c29ec092", function (a) {
                    return "" + a.revertedModeratorName;
                }),
                e("f6530972", "Poista julkaisun piilotus"),
                e("j68fc824", "Piilotus poistettu"),
                e("j9541e18", "Hae julkaisuista"),
                e("j10903d7", function (a) {
                    return a.moderatorName + " poisti jäsenen";
                }),
                e("e38bf285", function (a) {
                    return a.revertedModeratorName + " palautti jäsenen";
                }),
                e("dea0d437", function (a) {
                    return a.userName + " liittyi tähän yhteisöön";
                }),
                e("j10346f5", function (a) {
                    return a.userName + " poistui tästä yhteisöstä";
                }),
                e("jb159607", function (a) {
                    return a.moderatorName + " hyväksyi jäsenyyspyynnön";
                }),
                e("af7a63eb", function (a) {
                    return a.moderatorName + " torjui jäsenyyspyynnön";
                }),
                e("i717dfc3", function (a) {
                    return a.revertedModeratorName + " hyväksyi jäsenyyspyynnön uudelleen";
                }),
                e("ce5ac32b", function (a) {
                    return "" + a.moderatorName;
                }),
                e("a7f869a4", function (a) {
                    return "" + a.revertedModeratorName;
                }),
                e("efad949a", function (a) {
                    return "" + a.userName;
                }),
                e("d0ae5998", function (a) {
                    return "" + a.userName;
                }),
                e("ef020751", function (a) {
                    return "" + a.moderatorName;
                }),
                e("a46c5a63", function (a) {
                    return "" + a.moderatorName;
                }),
                e("h55401a4", function (a) {
                    return "" + a.revertedModeratorName;
                }),
                e("d31e695c", "Uudelleenhyväksymispyyntö"),
                e("i9a18ce0", "Uudelleen hyväksytty"),
                e("i24de0fe", "Palauta jäsen"),
                e("b1c662f8", "Palautettu"),
                e("j2e04b1e", "Moderaattorit ovat huolehtineet ilmiannetuista julkaisuista."),
                e("hb21cdb6", "Aseta porttikielto"),
                e("dc7a9436", "Ilmianna julkaisu X:lle"),
                e("e2bc5db0", "@X"),
                e("d0a1b248", function (a) {
                    return a.formattedCount + " jäsen" + n(a.count, "", "tä");
                }),
                e("cd4d48d2", "@X"),
                e("ff0f742a", function (a) {
                    return a.formattedCount + " jäsen" + n(a.count, "", "tä");
                }),
                e("dca19c06", "Piilotit tämän julkaisun"),
                e("dd641764", "Säilytit tämän julkaisun"),
                e("jf99d610", "Yhteisön palaute"),
                e("bbd69672", "Moderaattori piilotti tämän julkaisun, koska se rikkoo Yhteisön sääntöjä"),
                e("c730a21c", "Tätä sääntöä se rikkoi:"),
                e("a5baa7d2", "Käytä hetki sääntöjen lukemiseen. Ne auttavat pitämään keskustelut turvallisina ja raiteillaan"),
                e("icc32e3d", function (a) {
                    return "Moderaattori poisti sinut Yhteisöstä " + a.communityName + ", koska olit rikkonut tätä Yhteisön sääntöä:";
                }),
                e("d7d9be8a", "Löydä yhteisöjä ja julkaisuja"),
                e("cae9962e", "Yhteisöjä ei löydy tällä hetkellä."),
                e("c2117be6", "Huomaatko asioita valikossa? 👀"),
                e("c2c4dad4", "Valitse jotain, ja se näkyy täällä. Siitä vain! Me odotamme."),
                e("b7218496", "Ei avainsanoja... vielä"),
                e("gc09bcfe", "Yhteisössäsi ei ole avainsanakeskusteluja, mutta voit korjata asian."),
                e("cf35a990", "Ladataan Yhteisön asiasanajulkaisuja"),
                e("a1c41fe8", "Yhteisön asiasanajulkaisut"),
                e("f27a2232", "Hae Yhteisöstä"),
                e("ie2efe36", "Yhteisöhaun tulokset"),
                e("a7c2e06d", function (a) {
                    return a.communityName + " Yhteisö";
                }),
                e("a94092a2", "Moderointityökalut ovat nyt käytettävissäsi"),
                e("be6dfbae", "Yhteisön moderaattorina voit lisätä ja poistaa jäseniä."),
                e("b4f877be", "Yhteisöä ei löydy"),
                e("e48fbb02", "Ilmianna Yhteisö"),
                e("b1614c34", "Tietoa yhteisöistä"),
                e("j1dcedde", "Hae julkaisuja"),
                e("cc683fba", "Tietoa Yhteisöstä"),
                e("af7c11aa", "Yhteisön tiedot"),
                e("fb974b24", "Vain jäsenet voivat julkaista."),
                e("fcef2922", "Kuka tahansa voi liittyä tähän Yhteisöön."),
                e("c93dd2c8", "Tähän Yhteisöön liittyminen edellyttää pyyntöä ja pyynnön hyväksymistä."),
                e("gedb877d", "Kaikki Yhteisöt ovat julkisesti nähtävillä."),
                e("bf359e0e", "Tietoa uudesta Yhteisöstäsi"),
                e("e8fcdd3a", "Olemme laatineet sinulle aloitusasetukset, mutta Yhteisö on kaikin puolin räätälöitävissäsi. Lisää siitä seuraavaksi."),
                e("b37d580e", "Yhteisösi on Rajattu"),
                e("c6d9c07c", "Kaikki Yhteisöt näkyvät X:ssä kaikille. Ihmisten on lähetettävä pyyntö liittyä Yhteisöösi tai saatava kutsu moderointitiimiltä tai (jos tämä on sallittu) olemassa olevilta jäseniltä."),
                e("ea3b38fa", "Yhteisösi on Avoin"),
                e("i625c42e", "Kaikki Yhteisöt näkyvät X:ssä kaikille. Kuka tahansa voi liittyjä ja/tai saada kutsun Yhteisöösi."),
                e("ca7eeab0", "Yhteisösi säännöt ovat (ensi alkuun)"),
                e("acae4034", "Asetuksia voi muuttaa ylläpidon työkaluissa"),
                e("e2186ee2", "Eivätkö asetukset tunnu oikeilta? Ei hätää. Niitä on helppo muuttaa."),
                e("a0e3ece4", "Yhteisön tiedot"),
                e("d11f73ea", "Aikuissisältö"),
                e("hb9400dc", "Näytä lisää"),
                e("b71a08a0", "Tilaajayhteisö"),
                e("d0574662", "Ota ilmoitukset käyttöön"),
                e("fc16f13a", "Mitä ilmoituksia haluat?"),
                e("be341c46", "Yhteisöhuoneet (ääni-chatit)"),
                e("fbe88a32", "Yhteisön live-tekstichatit"),
                e("b551cd1e", "Kiinnitetyt julkaisut"),
                e("i9f39962", "Kiinnitä Yhteisö"),
                e("bc7f90a0", "Näytä yhteisö profiilissasi"),
                e("j5a37508", "Kiinnitä Yhteisö etusivulle"),
                e("c7a4610a", "Irrota Yhteisö etusivulta"),
                e("bec3b8fa", "Jaa Yhteisö"),
                e("cc7d5b88", "Kutsu yksityisviestillä"),
                e("c66b37fa", "Yhteisön muistilista"),
                e("g2768d0e", "Muutama asia, jotka auttavat laittamaan Yhteisösi kuntoon ennen sen avaamista..."),
                e("b192b58c", "Ohita muistilista"),
                e("gd302780", "Kurkista perustamaani Yhteisöön:"),
                e("h5890b1a", "Kesken"),
                e("b4a6faca", "Tarkista omat sääntösi"),
                e("a01e1a7c", "Personoi Yhteisösi"),
                e("f493480c", "Julkaise Yhteisöstäsi"),
                e("i9b7f6ba", "Ladataan julkaisuja"),
                e("c22e8902", "Kokeile"),
                e("a3466e1c", "Seuraa avainsanoin merkittyjä keskusteluja"),
                e("a524bb7e", "Avainsanat eli hashtagit helpottavat teemakeskustelujen luomista, löytämistä ja niihin liittymistä Yhteisössä."),
                e("he8db880", "Tätä Yhteisöä ei näyttäisi olevan olemassa"),
                e("cc684fbc", "Se on voitu poistaa, tai sitä ei ole ollutkaan. Elämä on mysteerejä täynnä."),
                e("b4f8b518", "Sisällöntuottajia sinulle"),
                e("f5c41e22", "Siirry Delegointi -asetuksiin"),
                e("b9226ec1", "Kirjautunut sisään "),
                e("f47b48f6", "käyttäjänä"),
                e("b2ca74aa", "Olet vaihtamassa delegaattitilille"),
                e("ba77b438", "Vaihda tiliä"),
                e("g5261e91", function (a) {
                    return "Toimit nyt käyttäjänä @" + a.screenName + ".";
                }),
                e("cc15a3ea", "Muista, ettei tämä tili kuulu sinulle. Ylläpitäjänä voit lähettää yksityisviestejä, julkaista julkaisuja ja luoda listoja – sekä katsella niitä. Voit myös kutsua tilille tekijöitä ja poistaa heitä sekä tarkastella julkaisukohtaisia tilastoja."),
                e("e406250c", "Muista, ettei tämä tili kuulu sinulle. Tekijänä voit lähettää yksityisviestejä, julkaista julkaisuja ja luoda listoja — sekä katsella niitä."),
                e("e6718a62", "Vain tilin haltija voi käyttää tätä ominaisuutta"),
                e("ba411b6f", "palautettasi"),
                e("f01ee14b", "palautettasi"),
                e("dbc85148", "Valitse viesti"),
                e("a073658c", "Valitse olemassa olevista keskusteluista, aloita uusi tai jatka selailua."),
                e("f325afc4", "Laadi viesti"),
                e("f5dc353c", "Suodatetaan sopimaton mediasisältö"),
                e("daeda054", "Siirry asetuksiin"),
                e("fe1eaa96", "Saat nyt varoituksen viesteistä, joissa on mahdollisesti työpaikalle sopimatonta sisältöä (kuten alastomuutta, seksuaalista sisältöä tai väkivaltaa). Voit poistaa varoitukset käytöstä asetuksissa."),
                e("hc32acba", "Poistetaanko viestipyynnöt?"),
                e("f9048f58", "Tätä ei voi perua. Valitut viestipyynnöt poistetaan saapuneet-kansiostasi."),
                e("a9d0d7f0", "Bulkkimuokkaus"),
                e("eb7de4aa", "Näytä lisää viestejä, myös mahdollisesti häiritsevää aineistoa sisältäviä viestejä."),
                e("ee8c0c8a", "Saapuvat viestit tai ryhmäviestit ihmisiltä, joita et seuraa, tulevat tänne. Voit hyväksyä tai poistaa ne."),
                e("ff599112", "Luo ryhmä"),
                e("c602600a", "Lisää ihmisiä"),
                e("fa2033f6", "Salattu"),
                e("aa59bb6a", "Lähetä julkaisu erikseen"),
                e("a2ccb2e8", "Yksityisviesti lähetetty."),
                e("f906f464", "Julkaisu jaettu ryhmälle."),
                e("i8a99aae", "Julkaisu jaettu erikseen."),
                e("hbbc401c", "Lähetä ryhmälle"),
                e("e1bde73f", function (a) {
                    return "Käyttäjälle @" + a.screenName + " ei voi lähettää viestiä";
                }),
                e("f7289cd6", "Olet valinnut ryhmäkeskustelun"),
                e("e6cced4e", 'Vain kahdenkeskisiä keskusteluja voi "lähettää ryhmälle". Voit silti lähettää oman viestisi erillisenä.'),
                e("e3e58b6e", "Keskustelun tiedot"),
                e("a9ddbb94", "Ryhmän tiedot"),
                e("dd4779a0", "Hallitse tunnisteita"),
                e("ca9af866", "Tunnisteet:"),
                e("e62d3c10", "Tämännimistä tiliä ei ole. Yritä uudelleen."),
                e("h8403fb6", "Et voi lisätä heitä tähän keskusteluun juuri nyt."),
                e("ja522ed4", "Et voi lisätä joitakin näistä henkilöistä tähän keskusteluun juuri nyt."),
                e("d87bff5a", "Keskustelun tietoja ladataan."),
                e("cabb453e", "Ryhmän nimi"),
                e("eb1bb5a2", "Näytä kaikki henkilöt"),
                e("a70436ac", "Aloita salattu viesti"),
                e("a7f20223", function (a) {
                    return "Hiljennä ilmoitukset käyttäjältä " + a.name;
                }),
                e("g2f04a6b", function (a) {
                    return "Olet poistanut käyttäjän " + a.name + " hiljennyksen";
                }),
                e("i453fedf", function (a) {
                    return "Torkulla " + a.expiration + " asti";
                }),
                e("b3dfd51a", "Hiljennä maininnat"),
                e("cc7c8ce6", "Poista käytöstä ilmoitukset, kun joku mainitsee sinut tässä keskustelussa."),
                e("hab58674", "Maininnat poissa käytöstä"),
                e("e3c6e080", "Maininnat käytössä"),
                e("f33ef58a", "Ilmianna keskustelu EU-alueella laittomana sisältönä "),
                e("d1a6dbe6", "Estä kaikki"),
                e("f24af200", "Estä yksityisviestit"),
                e("a30e1677", function (a) {
                    return "Estä @" + a.screenName + "; @" + a.screenName + " ei voi enää seurata sinua tai lähettää sinulle viestejä etkä näe ilmoituksia käyttäjältä @" + a.screenName;
                }),
                e("iae09949", function (a) {
                    return "Estetäänkö yksityisviestit käyttäjältä @" + a.screenName + "?";
                }),
                e("e778e3d8", "Yksityisviestien esto onnistui"),
                e("b7867912", "Poista esto kokonaan"),
                e("gaddb872", "Poista yksityisviestien esto"),
                e("d83414a1", function (a) {
                    return "Poistetaanko käyttäjän @" + a.screenName + " esto? Silloin hän voi seurata sinua ja nähdä julkaisusi.";
                }),
                e("a5bbfecd", function (a) {
                    return "Poistatko käyttäjän @" + a.screenName + " eston? Silloin hänen on mahdollista seurata sinua ja reagoida julkisiin julkaisuihisi.";
                }),
                e("cde6e1ff", function (a) {
                    return "Poistetaanko yksityisviestien esto käyttäjältä @" + a.screenName + "?";
                }),
                e("j37c4674", "1 tunti"),
                e("je7e1fed", function (a) {
                    return a.name + " on torkulla 1 tunnin ajan";
                }),
                e("hf94a2d6", "Hiljennetty 1 tunniksi"),
                e("fb7a43c6", "8 tuntia"),
                e("e95c8f8b", function (a) {
                    return a.name + " on torkulla 8 tunnin ajan";
                }),
                e("bd54fad2", "Hiljennetty 8 tunniksi"),
                e("cb5bf56e", "1 viikko"),
                e("gb7a130b", function (a) {
                    return a.name + " on torkulla 1 viikon ajan";
                }),
                e("f6fce0fe", "Hiljennetty 1 viikoksi"),
                e("i78153dd", function (a) {
                    return a.name + " on torkulla pysyvästi";
                }),
                e("je9455da", "Viestit on salattu"),
                e("b5b0afa4", "Mukauta näkymääsi"),
                e("ec5880e6", "Nämä asetukset vaikuttavat kaikkiin X-tileihin tässä selaimessa."),
                e("babfa32c", "Mukauta näkymääsi vaivattomasti"),
                e("a2a2f98e", "Katso, mikä on uutta"),
                e("b4a361c0", "Voit muuttaa tekstin väriä ja kokoa sekä ottaa käyttöön pimeätilan vaikka heti. Nämä asetukset näkyvät vain sinulle."),
                e("c797b44e", "Tuoreet tapahtumat X:n julkaisuissa."),
                e("a19ce060", "Selaa-toiminto ei ole käytettävissä."),
                e("f7d1a8e0", "Android-sovellus"),
                e("aab2fae0", "iOS-sovellus"),
                e("a35d9c9a", "Resurssit"),
                e("i6671128", "Saat nyt enemmän irti X:stä"),
                e("d5e4d0a6", "Voit liittyä keskusteluun ja pitää yhteyttä helpommin. Sinulla on nyt seuraavat:"),
                e("a97bc07e", "Saa enemmän irti X:stä"),
                e("a72188d6", "Jotta X olisi kaikille mukava paikka, haluamme varmistaa, että tämän tili kuuluu todelliselle ihmiselle. Asia selviää, kun vietät aikaa aikajanallasi ja muodostat yhteyksiä muihin. Kun varmuus on saatu, voit tehdä seuraavia:"),
                e("a4ee9572", "Mahdollisuus näkyä suuremmalle joukolle ihmisiä"),
                e("e5f4eac0", "Sisältösi on helpommin löydettävissä. Lisäksi näyt hakutuloksissa ja suosituissa puheenaiheissa."),
                e("c7832a72", "Tavoita muut yksityisviestillä"),
                e("i1ccd17a", "Lähetä yksityisviestejä ihmisille, jotka eivät seuraa sinua, ilman että viestisi suodatetaan automaattisesti."),
                e("hc965308", "Hupailu"),
                e("eb78b77e", "Hupailutila"),
                e("aa8ece10", "Kokeile grok.comia"),
                e("gb5fb7d0", "Keskittymistila"),
                e("g5665caa", "Poistu keskittymistilasta"),
                e("a372681e", "Kopioi jakolinkki"),
                e("fbc79f6a", "Keskusteluhistoria"),
                e("b61ad410", "Historia"),
                e("b3de2628", "Ei keskusteluhistoriaa saatavana"),
                e("acfbfb28", "Tulevat keskustelusi näkyvät täällä."),
                e("i1147548", "Hae Grok-historiasta"),
                e("ab437026", "Keskusteluja ei löytynyt"),
                e("e12569ec", "Kokeile hakea jotain muuta."),
                e("d4eb0e26", "Nimeä uudelleen"),
                e("c64975ea", "Et ole vielä merkinnyt yhtään keskustelua suosikiksi"),
                e("a3e3db6e", "Napsauttamalla tähteä voit tallentaa haluamasi keskustelut"),
                e("f4ae77ac", "Ei kuvahistoriaa saatavana"),
                e("d57d337e", "Muodostetut kuvat näkyvät täällä."),
                e("dab087ee", "Keskustelut"),
                e("a911623c", "Kuvat"),
                e("ae9cdac6", "Keskusteluhistoria"),
                e("b198a392", "Grok-keskustelu"),
                e("d16329b4", "Kopioi keskustelu"),
                e("af6c4470", "Jokin meni pieleen, yritä uudelleen."),
                e("gf43d270", "Jatka tätä keskustelua"),
                e("f4b5fae2", "Viestin lähettäminen kopioi tämän keskustelun historiaasi"),
                e("eb0d91ac", "Muodosta kuva Grokin avulla"),
                e("c5a23514", "Piirrä minut"),
                e("g1cb8096", "Yllätä minut"),
                e("a5a3df56", "Kuvaile, millaisen kuvan haluat"),
                e("gbb4e90a", "outo psykedeelinen unimaailma"),
                e("af21f92e", "autuus"),
                e("e207cba2", "satunnainen urheilukilpailu"),
                e("b1323f10", "malli muotinäytöksessä pariisin muotiviikolla"),
                e("g6a90174", "hassu hipsterieläin"),
                e("jdc4b66c", "maailman ihme"),
                e("ec601934", "Remiksaus"),
                e("f9ecd3ba", "Lisää julkaisuna"),
                e("af652514", "Ero"),
                e("j95bac7a", "Kustomoi Grok-persoona"),
                e("c5665922", "Mitä haluaisit Grokin tietävän sinusta?"),
                e("ff625c40", "Miten haluaisit Grokin vastaavan?"),
                e("e5c7d602", "Ota käyttöön kaikissa chateissa"),
                e("d5e03fbc", "Grok-syöte"),
                e("a294d0c6", "Laadi oma versio"),
                e("b38adba2", "X – Sovellus kaikkeen"),
                e("d05ae004", "NHL-ottelu"),
                e("d35ad22c", "Näytä viimeisin NHL-ottelu"),
                e("e806daa2", "Jalkapallo-ottelu"),
                e("cc2c2eca", "Näytä viimeisin jalkapallo-ottelu"),
                e("bcdeae66", "F1 Grand Prix -portaali"),
                e("e30e4bea", "Seuraa Grand Prix -kilpailua X:ssä."),
                e("be548ecb", function (a) {
                    return a.teamName1 + " vastaan " + a.teamName2;
                }),
                e("b23bb579", function (a) {
                    return a.teamName1 + " vastaan " + a.teamName2 + " -ottelun päivitykset X:ssä";
                }),
                e("b72c924c", "Työpaikkahaku"),
                e("f4da95a0", "Työpaikkasuositukset"),
                e("eedd808c", "Tallennetut työpaikat"),
                e("e0ba641a", "Yrityksille"),
                e("f9e6381a", "Hae työpaikkoja"),
                e("fb15ec28", "Näytä työpaikkasuosituksia"),
                e("ece910f0", "Näytä asetustesi mukaiset työpaikat"),
                e("jd08bc14", "Suositusten tarkkuus paranee ajan myötä"),
                e("de0a4a72", "Valitse, missä näet suosituksia"),
                e("db8c4158", "Hae nyt"),
                e("d9c8057a", "Napsauta tästä"),
                e("a71d7584", "Esittelyssä"),
                e("d2b8da2c", "Ohjelmistosuunnittelu"),
                e("cd958040", "Data ja analytiikka"),
                e("c5760ca2", "Tuote"),
                e("d31b4a2a", "Design"),
                e("f38959a6", "Myynti"),
                e("bc78a26c", "Operaatiot"),
                e("ec28738e", "Henkilöstö ja HR"),
                e("icb06308", "Rahoitus ja laskentatoimi"),
                e("d0b978ec", "Laki ja laillisuusvalvonta"),
                e("af19cdc2", "Luonnontieteet ja tekniikka"),
                e("e4a51fca", "Lääketiede"),
                e("e8ca78ae", "Rakennusala"),
                e("e25d75e4", "Harjoittelija"),
                e("e89b3f04", "Aloittava"),
                e("h55825dc", "Junior"),
                e("cc537386", "Keskitaso"),
                e("jfc3cece", "Senior"),
                e("e1b683aa", "Lead"),
                e("c4627fda", "Esimies"),
                e("db75b47c", "Yritysjohtaja"),
                e("i312f0ce", "Paikan päällä"),
                e("b4aff05e", "Hybridi"),
                e("c08b9138", "Etätyö"),
                e("ia5d6422", "Vaaditaan läsnäoloa toimipisteessä"),
                e("h97c7f42", "Osittainen läsnäolovaatimus"),
                e("ibed2d04", "Ei läsnäolovaatimusta"),
                e("f508c49c", "Kopioi linkki työpaikkaan"),
                e("d6825dce", "Jaa yksityisviestillä"),
                e("b9613442", "Jaa julkaisuna"),
                e("c2b3f0da", "Esittele profiilissa"),
                e("c791d3fc", "Jaa työpaikka"),
                e("eb517058", "Tekoäly-yhtiöt"),
                e("b677cb9b", function (a) {
                    return a.count + " yrityssuodatinta";
                }),
                e("ja04d37c", "Ilmoita yritysten nimet"),
                e("a1876045", function (a) {
                    return a.count + " työtehtävän tyypin suodatinta";
                }),
                e("fb146dd2", "Työtehtävän tyyppi"),
                e("a7090408", "Hakusana"),
                e("f16e9a15", function (a) {
                    return a.count + " sijaintisuodatinta";
                }),
                e("fa7d455a", "Sijainnin tyyppi"),
                e("caa606db", function (a) {
                    return a.count + " aikajärjestyssuodatinta";
                }),
                e("jda06238", "Palvelusvuodet"),
                e("j595df68", "Päivitä suositusasetuksesi:"),
                e("a1227d5e", "Ota suositukset käyttöön"),
                e("bae2f5f0", "Lisää tämä työpaikka profiiliisi"),
                e("cbcaaa1a", "Tässä näet, miltä ilmoitus näyttää."),
                e("f58cf1ac", "Lisää työpaikka"),
                e("j4ae9960", "Tämän lisäämisessä profiiliisi oli ongelmia."),
                e("caa352f0", "Liian monta työpaikkaa"),
                e("i08bee0e", "Liian monta työpaikkaa esittelyssä"),
                e("d7ccaea2", "Voit pitää esillä enintään 3 avointa työpaikkaa."),
                e("h05e4a7a", "Esittelyssä saa olla enintään 10 työpaikkaa."),
                e("b518daae", "Siirry työpaikkojen koontinäytölle"),
                e("f48e9c52", "Työpaikan lisääminen onnistui!"),
                e("f6757978", "Voit poistaa tämän työpaikan tai lisätä muita työpaikkoja Hiring-koontinäytössä."),
                e("i329c5a6", "Näytä työpaikkojen koontinäyttö"),
                e("h39a5448", "X Hiring on apunasi avointen työpaikkojen esittelyssä"),
                e("d204515c", "Lisää työpaikkoja profiiliisi yhdellä klikkauksella."),
                e("ecb3df70", "Tapahtumajulkaisut"),
                e("a01d5a7c", "Sisältö ei näy sinule, koska olet estänyt sen laatijan"),
                e("cab51f93", function (a) {
                    return "Et näe tätä, koska @" + a.screenName + " on estänyt sinut.";
                }),
                e("eaaca5dc", "Pistetilanne"),
                e("abdcd68a", "Tapahtumaa ladataan"),
                e("cfb57adb", function (a) {
                    return "Julkaise aiheesta " + a.hashtag;
                }),
                e("b1037710", "Kerro, mitä mielessäsi liikkuu"),
                e("bb980db0", "Tapahtuman aikajana"),
                e("ffd929c1", function (a) {
                    return "UUTTA" + a.ttc_live_event;
                }),
                e("c9b302f8", "Palaa myöhemmin takaisin nähdäksesi uusimmat tuotteet."),
                e("cfe836d1", function (a) {
                    return a.percent + " % pois";
                }),
                e("efb132c3", function (a) {
                    return a.title + " - " + a.description + " hintaan " + a.price;
                }),
                e("f27deeea", "Tuoteruutu"),
                e("e8166cee", function (a) {
                    return "" + a.formattedPrice;
                }),
                e("g66c8348", "UUSINTA"),
                e("j1d352d8", "Muistutus asetettu"),
                e("d18909d4", "Aseta muistutus"),
                e("b0b38774", "Otsakkeen media"),
                e("a7a119ec", "Poista telakointi"),
                e("cfadb00e", "Kuunnellaan"),
                e("db4620aa", "LIVE-HUONE"),
                e("c958e692", "TALLENNETTU HUONE"),
                e("i2c2bfb7", function (a) {
                    return a.count + " kuuntelee";
                }),
                e("i3f7ff00", "Median esikatselukuva"),
                e("h400d7c2", "ASTU HUONEESEEN"),
                e("be6ef5b4", "TULOSSA"),
                e("ca25ebae", "Kertoimet"),
                e("e749753a", "Spread"),
                e("ea885dec", "Raha"),
                e("cde48000", "Onko pelaaminen sinulle ongelma? Soita 1-800-GAMBLER"),
                e("g53d5df6", "Keskittymistila"),
                e("d1e0a75f", function (a) {
                    return "Sinulle" + a.noun;
                }),
                e("dafd69e9", function (a) {
                    return "Seurataan" + a.noun;
                }),
                e("d80a1c37", function (a) {
                    return "Tilatut" + a.noun;
                }),
                e("d3619250", "Tykätyimmät"),
                e("f5edfbde", "Kirjaudutaanko ulos X:stä?"),
                e("f12b4db5", function (a) {
                    return "Kirjataanko @" + a.screenName + " ulos?";
                }),
                e("ia5ff8b6", "Voit kirjautua takaisin sisään milloin vain. Jos haluat vain vaihtaa tiliä, voit tehdä sen lisäämällä olemassa olevan tilin."),
                e("ea3750c4", "Tämä koskee vain tätä tiliä; pysyt edelleen kirjautuneena muihin tileihisi."),
                e("gc6866f8", "Kirjaudutaan ulos"),
                e("f8ad0092", "Pahoittelut, tapahtui virhe. Yritä sisäänkirjautumista uudelleen."),
                e("h2c7767e", "Istunto on vanhentunut. Yritä kirjautua sisään uudelleen."),
                e("e83047c2", "Olet antanut liian monta virheellistä koodia. Yritä kirjautua sisään uudelleen."),
                e("g4b108ee", "Olet luonut liian monta varmennuskoodia. Sinun on rekisteröidyttävä uudelleen koodigeneraattorin käyttäjäksi puhelimellasi."),
                e("a9be9b44", "Jatka X:ään"),
                e("e55188f0", "Olet kirjautunut tälle tilille tällä selaimella"),
                e("d55d8fe2", "Haluatko jatkaa tällä tilillä?"),
                e("g806008e", "Kirjaudu eri tilille"),
                e("c55f5c9a", "Jokin meni pieleen, ja vika ei ole sinussa. Yritetään uudelleen."),
                e("bfb6be8a", "Ansaitse rahaa X:ssä"),
                e("ed6c6da2", "Ensi askel kaupalliseen käyttöön on varmentaa tilisi tilaamalla X Premium."),
                e("h93b6580", "Ansaitse jakamalla laadukasta sisältöä. Mitä enemmän aktivoit X:n käyttäjiä, sitä enemmän tienaat."),
                e("eea6d8f8", "Kelpoisuus osuuteen mainostuloista"),
                e("a0e8811e", "Kerrytä uskollisia faneja"),
                e("e1a74ac0", "Tarjoa suurimmille tukijoillesi sisältöä yksinoikeudella ansaitaksesi tuloja."),
                e("cd3a6f9a", "Kelpoisuus Tilaukset-ohjelmaan"),
                e("c35e6144", "Premium-työkaluilla saat parempaa jälkeä"),
                e("b9dbeb34", "Saa oikeus pidempiin julkaisuihin, Media Studion ja tilastojen käyttöön ja priority-tukeen."),
                e("b2d41138", "Suurempi tavoittavuus = enemmän tuloja"),
                e("defa7f12", "Ota vastausten tehostus käyttöön. Näkyvyytesi parantuessa saat seuraajia nopeammin."),
                e("i3e4955d", "täältä"),
                e("cea1c00e", "Hanki itsellesi oikeus osallistua"),
                e("f8e6a280", "Uusien tilien haltijoiden on suoritettava pieni vuosimaksu, ennen kuin voit julkaista, tykätä, lisätä kirjanmerkkeihin tai vastata. Tarkoituksena on karsia roskajulkaisuja ja tehdä käyttökokemuksesta kaikille parempi. Voit edelleen seurata tilejä ja selata X:ää maksutta."),
                e("h968efc6", "Uusien tilien haltijoiden on suoritettava pieni maksu, ennen kuin voit julkaista, tykätä, lisätä kirjanmerkkeihin tai vastata. Tarkoituksena on karsia roskajulkaisuja ja tehdä käyttökokemuksesta kaikille parempi. Voit edelleen seurata tilejä ja selata X:ää maksutta."),
                e("b66b62a4", "Palvelun ostoehdot"),
                e("e5b5faa6", "En ole botti -ohjelman ehdot"),
                e("i61a221c", "Tilaa ja maksa"),
                e("fce91ab4", "Hmmm — se ei toiminut."),
                e("a235cb76", "En ole botti -tilauksesi käsittelyssä tapahtui virhe. Tarkista maksutietosi ja yritä uudelleen."),
                e("a8eea654", "Ostosi onnistui."),
                e("bc8baa08", "Tilaaja"),
                e("a98ba778", "Ilmoitusaikajanat"),
                e("j887d006", "Tänne saat tiedon, kun julkaisuistasi esimerkiksi tykätään tai niitä uudelleenjulkaistaan."),
                e("c06d4306", "Kun joku mainitsee sinut, saat tiedon siitä tänne."),
                e("ge7c661a", "Toisten varmennettujen käyttäjien tykkäykset, maininnat, uudelleenjulkaisut ja muut toimet löytyvät täältä."),
                e("d3de3b5c", "Tykkäykset, maininnat, uudelleenjulkaisut ja muut tilaajiesi toimet löytyvät täältä."),
                e("e3f9838d", "Lue lisää"),
                e("eba8b1c8", "Päätä itse, missä keskusteluissa sinut mainitaan"),
                e("j745b8a6", "Toimintovalikosta kolmen pisteen takaa pääset poistamaan itseäsi koskevat merkinnät ja poistumaan keskustelusta."),
                e("c380d684", "Ilmoituksesi"),
                e("da7cf0d8", "Merkitsimme nämä julkaisut sisällöltään arkaluonteisiksi"),
                e("a6da21a1", function (a) {
                    return a.appName + " haluaa käyttöoikeuden X-tiliisi";
                }),
                e("f4392d00", "Salli sovellus"),
                e("ee4dca3c", "peruuta-linkki"),
                e("bb347bbc", "Ohjekeskus"),
                e("be38d34e", "Tätä sovellusta käyttääksesi sinun on oltava kirjautuneena X:ään."),
                e("e087691a", "Sinun ei ollut mahdollista antaa käyttöoikeutta sovellukselle. Palaa takaisin ja kokeile kirjautua sisään uudelleen."),
                e("e7dd62c4", "Valitsemalla ”Valtuuta sovellus” annat xAI:lle valtuudet käyttää X:stä peräisin olevia tietojasi, kuten:"),
                e("debbdc98", "X-käyttäjäprofiilisi, X-tilitietosi, asetuksesi ja valintasi X:ssä."),
                e("d9cf7c9c", "X-tililläsi näkyvät julkaisusi X:ssä eli julkaisut kaikille tileille ja kaikilta tileiltä (julkisilta ja suojatuilta), jotka näkyvät sinulle."),
                e("cdf40068", "Grok-keskusteluhistoriasi X-alustalla."),
                e("cea71014", "Lataamme yhteystietojasi..."),
                e("b5474bd2", "Hmm... Jokin meni pieleen."),
                e("ab4b970a", "Käytä X-sovellusta, palaa takaisin ja pyydä uusi varmennussähköposti."),
                e("j6d103b8", "Rekisteröidy X:n käyttäjäksi. Olipa kyse uutisista, viihteestä, urheilusta tai politiikasta, saat kuulla koko tarinan live-kommentein höystettynä."),
                e("ca042c78", "Kirjaudu X:ään"),
                e("ff869362", "Kirjaudu X:ään nähdäksesi uusimmat. Osallistu keskusteluun, seuraa tilejä, näe oma aikajanasi ja lue julkaisuja tuntemiltasi ihmisiltä."),
                e("f4a654a4", "Näytä Foursquaressa"),
                e("c09de2d4", "Hae aikajanalta"),
                e("i1801686", "Virheellinen haku. Kokeile muuttaa hakua."),
                e("a0b4541c", "Jokin meni pieleen, mutta älä huoli – syy ei ole sinun"),
                e("d7eebb60", "Tilaustasi vahvistetaan"),
                e("a452ab68", "Tähän voi mennä muutama sekunti."),
                e("b3bad3b2", "@premium"),
                e("accbcc78", "Päivitys onnistui"),
                e("e957c20e", "Maksuton Full Access ‑kokeilu"),
                e("a1436e70", "Nyt voit lisätä profiiliisi työpaikkoja, jolloin ne näkyvät verkostollesi. Kun hakemuksesi on hyväksytty, avoimet työpaikkasi ovat hakutoiminnon kautta miljoonien käyttäjien saatavilla."),
                e("f9c85cec", "Toimia tarvitaan: Toimita varmennettuja dokumentteja"),
                e("f178f393", function (a) {
                    return "Toimita vaaditut dokumentit " + a.date + " mennessä. Siihen menee vain 10 minuuttia.";
                }),
                e("f9fbeabc", "Organisaation perustamisasiakirjat"),
                e("b4c80f5c", "Henkilötodistus"),
                e("f0915094", "Toimiva kamera laitteella"),
                e("f259d3f3", function (a) {
                    return "Tärkeää: Dokumentit on toimitettava " + a.date + " mennessä tai hakemuksesi hylätään ilman maksun palautusta.";
                }),
                e("d35f645b", function (a) {
                    return "Avoimet (" + a.count + ")";
                }),
                e("bf534b31", function (a) {
                    return "Esitellyt (" + a.count + ")";
                }),
                e("c35aded2", "Arkistoitu"),
                e("b97e952a", "Et ole tainnut vielä lisätä yhtään työpaikkaa."),
                e("cf1fa156", "Et ole tainnut vielä esitellä yhtään työpaikkaa."),
                e("fa4a4f50", "Et ole nähtävästi vielä arkistoinut yhtään työpaikkaa."),
                e("c5fb5a1a", "Ei työpaikkoja"),
                e("e9b91cde", "Lisää työtehtävä"),
                e("c270ef3e", "Arkistoi"),
                e("fe8872f4", "Onnistui"),
                e("d523cd74", "Arkistoidaanko työpaikka?"),
                e("jfd0b34a", "Arkistointi poistaa työpaikan profiilistasi."),
                e("e2247e08", "ATS"),
                e("b737c0b5", function (a) {
                    return "" + a.ats;
                }),
                e("e0ce628e", "Kutsun lähettäminen ei onnistunut. Yritä myöhemmin uudelleen."),
                e("ddf35536", "Kutsun poisto ei onnistunut. Yritä myöhemmin uudelleen."),
                e("db7144b6", "Affiliaatiotyypin vaihtamisessa oli ongelmia. Yritä myöhemmin uudelleen."),
                e("be78e5fa", "Affiliaatin poistamisessa oli ongelmia. Yritä myöhemmin uudelleen."),
                e("fa9709ba", "Hakemuksen laatiminen ei onnistunut. Yritä myöhemmin uudelleen."),
                e("j62f13fc", "Tämän työpaikan päivittämisessä oli ongelma. Yritä myöhemmin uudelleen."),
                e("ff5716fc", "Tämän työpaikan luomisessa oli ongelma. Yritä myöhemmin uudelleen."),
                e("fd059188", "Työpaikkojen synkronoinnissa oli ongelma. Yritä myöhemmin uudelleen."),
                e("b82b5c00", "Jokin meni pieleen mainoskrediitin aktivoinnissa. Yritä myöhemmin uudelleen."),
                e("d74adc30", "Lisätty virheellinen mainostili"),
                e("e4323c36", "Mainostili, jonka tunnuksen ilmoitit, ei vastaa organisaatiotasi tai sen affiliaatteja."),
                e("b3323ada", "Lisää luottokortti ads.twitter.com-tiliisi"),
                e("ac325eb8", "Mainoskrediittien aktivoimiseksi tarvitset mainostilille osoitteessa ads.twitter.com rekisteröidyn luottokortin."),
                e("j4e6e966", "Mainostilisi on tarkastettava"),
                e("ef86e7f6", "Tilisi on merkitty tarkastettavaksi. Se tarvitsee hyväksynnän."),
                e("c9c8edae", "Tilaa Varmennetut organisaatiot saadaksesi mainoskrediitit käyttöön"),
                e("b36c6278", "Vain maksetut Varmennetut organisaatiot -tilaukset voivat käyttää mainoskrediittejä. Päivitä nyt voidaksesi mainostaa affiliaattiesi kanssa."),
                e("c30f0168", "Avaa ulkoinen linkki"),
                e("c49b7262", "Esittele työpaikkaa"),
                e("i6ecf71a", "Poista työpaikan esittely"),
                e("a37ef120", "Avaa työpaikka uudelleen"),
                e("i00355d0", "Poista jako"),
                e("h0481bba", "Poistetaanko paikan jako?"),
                e("b9dfdc7a", "Työpaikka ei enää ole valokeilassa, jos poistat jaon."),
                e("h4847fa2", function (a) {
                    return "" + a.userName;
                }),
                e("e46cd68e", "Jakamasi työpaikat"),
                e("ea7f1a42", "Työpaikkasi"),
                e("d1cbcb90", "Lähde"),
                e("gf66326c", "Viimeisin päivitys"),
                e("b917fc28", "Työpaikkailmoitukset eivät ole käytössä"),
                e("g06035e6", "Mainostilisi vaatii toimenpiteitä, jotta voit ilmoittaa avoimista työpaikoista."),
                e("aa16581c", "Sinulla ei ole käyttöoikeutta työpaikkailmoittamisen mainostiliin. Pyydä apua tilin ylläpitäjältä."),
                e("g7bb6f58", "Emme löytäneet mainostiliä."),
                e("jf1576ba", "Epäonnistui"),
                e("ff985a36", "Synkronoidaan"),
                e("e5b8058c", "Ei synkronoitu"),
                e("a86e335a", "Synkronoitu viimeksi "),
                e("c9838d68", "Lisäämäsi työpaikat eivät näy vielä"),
                e("df6835a6", "Salli työpaikat profiilissasi esitelläksesi työpaikkoja omien julkaisujesi yläpuolella ja linkitä kaikkien avointen paikkojesi listaukseen."),
                e("fc504ea0", "Ala näyttää työpaikkojani"),
                e("a511934e", "Ala rekrytoida X:ssä"),
                e("e68d2d16", "Hae beta-ohjelmaan"),
                e("f7a37e30", "Napsauttamalla Hae beta-ohjelmaan hyväksyt sen, että sinuun otetaan yhteyttä käyttäen tähän tiliin liitettyä työsähköpostia tilisi tullessa hyväksytyksi."),
                e("bfef82f0", "X Työpaikat on maksuton ominaisuus Varmennetuille organisaatioille työpaikkojen julkaisuun, niiden esittelyyn yrityksen profiilissa ja osaajien houkutteluun avoimiin tehtäviin."),
                e("h4b890c2", "X Hiring on tilaisuutesi julkaista avoimia työpaikkoja, esitellä niitä profiilissasi ja houkutella huippuosaajia tehtäviin."),
                e("c3f28126", "Tavoita massiivinen yleisö"),
                e("dec1601e", "X:llä on yli 528 miljoonaa käyttäjää. Hait sitten koodaajaa, myyjää tai trukkikuskia, seuraava työntekijäsi voi hyvinkin löytyä täältä."),
                e("be8393da", "Nosta esiin tärkeimmät työpaikat"),
                e("i8c856ce", "Esittele enintään 3 työpaikkaa profiilissasi. Kaikki käyttäjät näkevät ne profiilissasi."),
                e("d8bc6eea", "Lisää enintään 5 työpaikkaa esittelyyn yrityksen profiiliin. Kaikki käyttäjät näkevät esillä olevat työtehtävät katsellessaan yrityksesi profiilia."),
                e("a049efd4", "Työ avoimet työpaikat helposti"),
                e("d12be15a", "Yhdistä tuettuun Applicant Tracking Systemiin tai XML-syötteeseen lisätäksesi työpaikat X:ään muutamassa minuutissa."),
                e("d248d75e", "Pyydä tukea"),
                e("c49d8e42", "Tarvitsetko apua? Ota yhteyttä"),
                e("ib244b2e", "Kopioi sähköpostiosoite"),
                e("b450472c", "Tuo työpaikat"),
                e("b36022d1", "xhiringsupport@x.com"),
                e("aeac3eb4", "Päivitä työpaikat"),
                e("aa4c37cc", "Näytä työpaikat profiilissani"),
                e("d4b82638", "Esittele työpaikkoja profiilissasi"),
                e("e405b1c2", "Salli työpaikat profiilissasi, jotta saat enemmän hakijoita tärkeisiin tehtäviin ja hakijat näkevät kaikki avoimet paikat."),
                e("a85cda86", "Lisää työpaikkoja päästäksesi alkuun"),
                e("c04b6472", "Tuo tai lisää työpaikkoja suorittamalla muutama helppo vaihe saadaksesi enemmän hakijoita. Voit myös jakaa työpaikkoja seuraajillesi ja nostaa niitä esiin yrityksen profiilissa."),
                e("d14c02d0", "Lisää työpaikkoja manuaalisesti"),
                e("b12424fc", "Uusi työpaikka"),
                e("ca8df1e2", "Laadi työpaikka ja lisää se työpaikkalistaasi. Kullakin avoimella paikalla on oltava sovelluksen URL, josta hakijat löytävät lisätietoa työpaikasta ja jonka kautta paikkaa voi hakea."),
                e("f4f4dd60", "Pakollinen"),
                e("b2c213e0", "Merkkiraja ylittyi"),
                e("d84e9c2a", "Ilmoita, minkälaista sitoutumista hakijalta edellytetään."),
                e("bc8b300c", "Työrooli"),
                e("d1eedb50", "Tee hakijoille selkoa työtehtävän vastuualueesta."),
                e("eaf3ce64", "Tiimi"),
                e("b36cd50e", "Kuvaile ydintiimiä, jossa hakija työskentelee paikan saatuaan."),
                e("d3a427ce", "Valitse vaadittu työkokemuksen määrä."),
                e("i7174442", "Tehtävän kuvaus"),
                e("fef0cf02", "Laadi yksityiskohtainen tehtävän kuvaus. Ilmoita keskeiset vastuut ja hakuedellytykset, jotta hakijat saavat roolista hyvän käsityksen."),
                e("b7800bec", "Laadi roolista enintään 200 merkin mittainen pitch. Se näytetään julkaisuissa, suosituksissa ja haussa."),
                e("a5244ece", "Sovelluksen URL (pakollinen)"),
                e("g2b553f6", "Anna julkinen URL-osoite, jonka kautta tätä paikkaa voi hakea."),
                e("c2e77608", "Tehtävänimike (pakollinen)"),
                e("cdf414d4", "Käytetään hakuun ja suosituksiin. Pyri käyttämään alan vakiintuneita nimikkeitä tulosten optimoimiseksi."),
                e("cc59319a", "Käytä toimialan vakiintuneita tehtävänimikkeitä, jotka hakijan on helppo tunnistaa."),
                e("e7117ee4", "Sijainti (pakollinen)"),
                e("c05176ec", "Jos työtehtävä vaatii läsnäoloa, ilmoita työpaikan sijainti (sijainnit). Jos työtehtävä on etätyö, ilmoita missä hakijoiden toivotaan asuvan."),
                e("d70c24d4", "Auttaa hakijoita löytämään paikan hakutoiminnolla."),
                e("de1c4376", "Palkkahaitari"),
                e("hf352d42", "Lisää valinnainen palkkahaitari, joka näkyy hakijoille. Jos jätät palkan ilmoittamatta, huolehdi siitä, että täytät mahdolliset lakisääteiset palkkausta koskevat avoimuusvaatimukset."),
                e("ede7d0a2", "Valuutta"),
                e("b925c18c", "Palkkatyyppi"),
                e("j3d242ce", "Virheellinen väli"),
                e("f4d07bd2", "Lisää halutessasi yksityiskohtia, jotta hakijat löytävät helpommin avoimet paikkasi hakutoiminnolla."),
                e("b8cbb51a", "Tehtävän yhteenveto"),
                e("bda6881e", "Tämä työpaikka on tuotu hakijaseurantajärjestelmästäsi (Applicant Tracking System, ATS). Huomaathan, että vain osaa kentistä voi muokata."),
                e("b075c68a", "Muokkaa työpaikkaa"),
                e("d4b6a6e0", "Profiilivalokeila"),
                e("j2dd3686", "Esittele työpaikkoja julkaisujeni yläpuolella."),
                e("af1cfd46", "ATS-integraatio"),
                e("d6fa2944", "Integroinnin poistaminen ei poista jo tuotuja työpaikkoja."),
                e("h99f11fa", "Poista integraatio"),
                e("eef1ae76", "Yhdistetty nyt"),
                e("a915f5c1", function (a) {
                    return a.ats + " yhdistetty";
                }),
                e("af7286b7", function (a) {
                    return a.percentage + " %:n alennus Premium-vuositilauksesta";
                }),
                e("c924ad84", "Jatka videoiden toistoa"),
                e("de750a3c", "Nauti niistä silloinkin, kun puhelin on lukittu"),
                e("he5e87c4", "Tehosta vastauksiasi"),
                e("g64a60ba", "Saa vähän buustia kirjoittamillesi vastauksille"),
                e("a7ee832a", "Korjaa lyöntivirheitä ja erehdyksiä 60 minuutin ajan"),
                e("fdd77a34", "Laadi pidempiä julkaisuja"),
                e("j6d26a7a", "Kirjoita niin paljon kuin haluat"),
                e("c4fd68da", "Räätälöi käyttökokemuksesi"),
                e("c0195168", "Vaihda sovellusikonia ja navigointivalintoja");
            e("b6b5dc94", "Hanki varmennus"),
                e("b06db848", "Erotu massasta alustalla"),
                e("e3e3a97c", "Ansaitse osa julkaisujesi tuottamasta liikevaihdosta"),
                e("f15bc24e", "Suuremmat Grokin käyttörajat"),
                e("c4666e1c", "Enemmän uusimman mallin, Grok 3:n käyttöä"),
                e("he74ae7a", "Suurimmat Grokin käyttörajat"),
                e("f5732cd4", "Plus laajempi DeepSearch- ja Mieti-toimintojen käyttö"),
                e("e0198956", "Saat osuutesi tuloista, joita muodostuu varmennettujen tilien osallistuessa X-julkaisuihisi."),
                e("iadf78e2", "Videoiden lataus"),
                e("ee54c3de", "Tallenna videoita suoraan laitteellesi"),
                e("ae03594c", "Pieni vastausten tehostus"),
                e("e6bb08c0", "Kasvata vastaustesi näkyvyyttä"),
                e("bf2a6acc", "Suuri vastausten tehostus"),
                e("c2059276", "Vastaustesi tehostus."),
                e("b023ec20", "Suurin vastausten tehostus"),
                e("g337328e", "Saa vastauksillesi paras näkyvyys."),
                e("fa006202", "Videon toisto taustalla"),
                e("jf389778", "Katsele selatessasi tai käyttäessäsi muita sovelluksia"),
                e("f2977d80", "Kirjanmerkkikansiot"),
                e("j1d3d910", "Pidä tallennetut julkaisut helposti tallessa"),
                e("f0f48668", "Premium-tuki"),
                e("c3148608", "Saa apu nopeammin sitä tarvitessasi"),
                e("b485ca6e", "Kohokohdat-välilehti"),
                e("d438955e", "Nosta suosituimpia julkaisujasi"),
                e("f373a352", "Salatut yksityisviestit"),
                e("g7405aca", "Käy keskustelut täysin salattuina"),
                e("j659fa0c", "Grok 3:n parhaat tehot"),
                e("ibff5694", "Saa käyttöösi korkeimmat käyttörajat, DeepSearch ja Mieti sekä uudet ominaisuudet ennen muita"),
                e("i824f4da", "Vähemmän mainoksia"),
                e("bd17076c", "Sinulle- ja Seurataan-aikajanoillasi näytetään puolta vähemmän mainoksia."),
                e("cef2cac8", "Käyttö pääosin ilman mainoksia, näet kuitenkin brändättyä sisältöä paikoin."),
                e("c97920c0", "Offline-videot"),
                e("i4379b18", "Tallenna mikä tahansa video offlineen"),
                e("f94c6bae", "Varmennettu-valintamerkki"),
                e("d72055d6", "Saa uskottavuutta varmennusmerkillä "),
                e("f54af178", "Kirjoita artikkeleita"),
                e("c5cd5d42", "Julkaise pidempiä sisältöjä ja vakuuta lukijat"),
                e("jbdb08cc", "Selvitä tilisi tehokkuus sen tilastotietoja analysoimalla"),
                e("deaf7e0a", "Media Studio"),
                e("fd1a47b4", "Hallitse ja lataa mediaa"),
                e("id067c96", "Radar-haku"),
                e("jf991d48", "Pysy ajan hermolla reaaliaikaisella trendiseurannalla"),
                e("c244210c", "X Pro"),
                e("a90f2e8a", "Tehokas reaaliaikainen työkalu ihmisille, joille X on henki ja elämä. Seuraa useita aikajanoja samalla näytöllä (vain selaimessa)"),
                e("b3e50ef2", "Luo Yhteisöjä"),
                e("bb1a4e44", "Perusta oma yhteisö"),
                e("j010228e", "Saat osuuden tuloista, jonka X ansaitsee aktiivisimmilta seuraajiltasi kuukausitilauksilla."),
                e("h0e1730e", "Vastausten priorisointi"),
                e("jf7f743c", "Pidempien videoiden julkaisu"),
                e("c0c25b6c", "Kirjanmerkkikansiot"),
                e("ab31c79e", "Mukautettavat sovelluskuvakkeet"),
                e("a8a702ae", "Navigoinnin mukautus"),
                e("d5ab1b50", "Varmennusmerkki"),
                e("ac298984", "Korkeampi vastausprioriteetti"),
                e("g20df450", "50 % mainoksista pois"),
                e("h8dfc4de", "Suuremmat Grokin käyttörajat"),
                e("bf7614d4", "Sisällöntuottajien tilaukset"),
                e("gadc9f4a", "Korkein vastausprioriteetti"),
                e("c127c5c2", "Kaikki mainokset pois"),
                e("c1e0f3c8", "Grokin DeepSearch-  ja Mieti.-toiminnot"),
                e("aac0bbb6", "Radarin käyttöoikeus"),
                e("a6722922", "Ei mainoksia"),
                e("ba016532", "Vastausten tehostus"),
                e("a06f8a3e", "Grok 3"),
                e("b9e16610", "MAKS."),
                e("b1492c6c", "Korkein"),
                e("fb5e2c14", "Merkitse julkaisuja kohokohtiin X Premium ‑tilaajana"),
                e("gd1f4cfa", "Esittele profiilissa parhaita julkaisujasi"),
                e("h59250bc", "Salatut viestit X Premium ‑tilaajana"),
                e("ed62d546", "Pidempiä julkaisuja X Premium ‑tilaajana"),
                e("ca447200", "Tekstiviestitodennus X Premium‑ tilaajille"),
                e("af2b99ea", "Muokkaa julkaisuja X Premium ‑tilaajana"),
                e("ha265914", "Järjestele kirjanmerkkejä X Premium ‑tilaajana"),
                e("gda940ae", "Perusta Yhteisö X Premium ‑tilaajana"),
                e("c7e5ac54", "Näe vähemmän mainoksia X Premium ‑tilaajana"),
                e("e03589ba", "Tehosta julkaisujasi X Premium ‑tilaajana"),
                e("f0f8c82a", "Osallistu keskusteluihin vain varmennetuille tileille X Premium ‑tilaajana"),
                e("fecf5aaa", "Lataa verkkoon Full HD ‑videota X Premium ‑tilaajana"),
                e("c00d2be2", "Muokkaa videoita X Premium ‑tilaajana"),
                e("cd360b86", "Kysy Grokilta mitä vain"),
                e("d2e1a7a2", "Saatavana X Premium ‑tilaajille"),
                e("e664abe2", "X ja videot. Parempana kuin ikinä."),
                e("e595a3e2", "Saa nähtäväksi parhaat videot Premium"),
                e("i3c9329a", "Erotu massasta rich text ‑muotoilulla"),
                e("cc9def68", "Vain X Premium ‑tilaajille"),
                e("hdef5966", "Lataa videoita laitteellesi"),
                e("c748224a", "X Premium ‑käyttäjille"),
                e("ebfc88bc", "Saa edistyneet toiminnot käyttöösi"),
                e("f652e9ac", "Premium-tilaajana saat lisää etuja"),
                e("d67e94c0", "Jäät paitsi näistä"),
                e("j1d3098c", "Premium+-tilaajana saat lisää etuja"),
                e("gd573390", "sekä Basic-tilauksen edut..."),
                e("ef94bbd4", "Hanki Premium+"),
                e("dcd830ce", "sekä Premium-tilauksen edut..."),
                e("b7dde622", "Hyvää kiitospäivää! Tarjous voimassa vielä:"),
                e("i0180ca1", function (a) {
                    return a.date + " asti. Hyvää kiitospäivää!";
                }),
                e("hb9d0e00", "2-vuotistarjous voimassa vielä:"),
                e("d2b23e0d", function (a) {
                    return "Premium viettää synttäreitä! Päättyy " + a.date + ".";
                }),
                e("bb4998fb", function (a) {
                    return a.date + " asti";
                }),
                e("c0847ebc", "Kaikki Basicin päivitykset sekä..."),
                e("ed672bfa", "Kaikki Basicin ja Premiumin päivitykset sekä..."),
                e("db63fa1c", "Valitse premium-tílaus"),
                e("b128c6bc", "Hanki varmennetun tilin merkintä ja tusinoittain muita etuja"),
                e("acfaf7a0", "Vertaile tasoja ja ominaisuuksia"),
                e("e1606e52", "Muuta tilaustasi"),
                e("d2f2b91a", "rekisteröityä täällä"),
                e("j4b4310e", "Sekuntia"),
                e("af863ee9", "ilmaiskokeilun"),
                e("f5705987", "ostajien käyttöehtomme"),
                e("h89dabac", "Peruutuksen voi tehdä milloin tahansa"),
                e("f36b8e14", "Jokin meni vikaan tätä tuotetta noudettaessa. Yritä ladata uudelleen."),
                e("f1756574", "/ kuukausi"),
                e("i650ff14", "/ vuosi"),
                e("dbcd25db", function (a) {
                    return "ensimmäisten " + a.numberOfDays + " päivän ajaksi";
                }),
                e("bd40d5b5", function (a) {
                    return "Tilaa ja maksa " + a.title;
                }),
                e("i36a0b6e", "Toistaiseksi voit ryhtyä tilaajaksi vain X:n iOS -sovelluksessa."),
                e("c906ad94", "Valitse alempi taso"),
                e("db5c77e0", "Tämä on nykyinen tilauksesi"),
                e("h77ef73e", "Vaihda kuukausitilaukseen"),
                e("d723d44a", "Vaihda vuositilaukseen"),
                e("i253b5c6", "Valitse ylempi taso ja maksa"),
                e("d2beeaaa", "Valitse alempi taso ja maksa"),
                e("acf719d4", "Vaihda ja maksa"),
                e("ieafe1c6", "Vahvista tilauksesi muutos"),
                e("gf6b66b8", "Vahvista tilauksesi muutos alkaen tästä päivästä"),
                e("e83daf87", function (a) {
                    return "Vahvista tilauksesi muutos alkaen " + a.date;
                }),
                e("f27022d6", "Nykyinen tilaus"),
                e("i9d5f4b6", "Uusi tilaus"),
                e("ia390d8a", "Näin toimii alempaan tilaustasoon vaihto"),
                e("fd80b875", function (a) {
                    return "Nykyinen tilauksesi pysyy voimassa, kunnes laskutusjakso päättyy. Siirryt " + a.nextBillingDate + " tilausmalliin " + a.newTierName + " ja tulevat veloitukset tehdään sen mukaisesti.";
                }),
                e("c8fb177a", "Näin muutos vaikuttaa maksuun"),
                e("df776505", function (a) {
                    return "Olet vaihtamassa ylempään " + a.newTierName + "-tilaustasoon uudella laskutusmallilla. Sinulta veloitetaan uuden tilauksen hinta tänään, mutta aiemmin suoritettu maksu alentaa maksettavaa summaa. Tilaustason muutos tapahtuu välittömästi, ja veloitukset muuttuvat sen mukaisesti.";
                }),
                e("d7efb6ba", "Olet vaihtamassa kuukausiveloituksen vuosiveloitukseen. Sinulta veloitetaan vuositilaus tänään, ja jo suoritettu maksu alentaa maksettavaa summaa. Laskutusjakson muutos tapahtuu välittömästi, ja veloitukset tehdään tästedes vuosittain."),
                e("a5f2cf70", "Olet vaihtamassa vuosilaskutuksen kuukausilaskutukseen. Aiemmin suoritetusta vuosimaksusta käyttämättä jäänyt osuus kattaa kuukausimaksut, kunnes se on kokonaan käytetty. Laskutusjakson muutos tapahtuu välittömästi, ja veloitukset tehdään tästedes kuukausittain."),
                e("ef1c0208", "Vahvista tilauksen muutos"),
                e("c20806d5", "ostoehdot"),
                e("i10be4c9", "ehdoissa"),
                e("cdda96d6", "Peru milloin tahansa"),
                e("cc67158f", "ostoehdot"),
                e("eb420831", "ehdoissa"),
                e("c7d49608", "Peru milloin tahansa"),
                e("ab176bd1", "ostoehdot"),
                e("cea928a5", "ehdoissa"),
                e("e37c69e0", "Peru milloin tahansa"),
                e("ia08113f", "palvelun ostoehdot"),
                e("d2962b73", "ehdoissa"),
                e("b421795a", "Peru milloin tahansa"),
                e("f8d88ac7", "palvelun ostoehdot"),
                e("ca220fe9", "ehdoissa"),
                e("ab8beda0", "Peru milloin tahansa"),
                e("ife2636d", "palvelun ostoehdot"),
                e("fb57be65", "ehdoissa"),
                e("e468a6c2", "Peru milloin tahansa"),
                e("e9f4c89b", "palvelun ostoehdot"),
                e("hce73b41", "ehdoissa"),
                e("i4db5c92", "Peru milloin tahansa"),
                e("ae095fe8", "Grok-tekoäly"),
                e("d4e60288", "Korkeimmat käyttörajat"),
                e("abaa4274", "Saa käyttöösi DeepSearch ja Mieti"),
                e("e0d53864", "Uudet ominaisuudet käytössäsi ensimmäisenä"),
                e("g1be3530", "MAKSUTON KOKEILU"),
                e("b10b4f1f", function (a) {
                    return "SÄÄSTÄ " + a.percentOff + "% ENNEN " + a.date;
                }),
                e("b8d0bd19", function (a) {
                    return "Ota " + a.productName + " maksuttomaan kokeiluun";
                }),
                e("f89dfa74", "Halvin kappalehinta"),
                e("b9a4d8c6", "Vuosi"),
                e("f5fb58b4", "Plus kaikki X Premiumin ominaisuudet"),
                e("i527045e", "Valintamerkki, enemmän Grokin käyttöä, vastausten tehostus, tilastot ja paljon muuta"),
                e("ga482a88", "Vuositilaus"),
                e("hc64d5b0", "Kuukausitilaus"),
                e("de7db957", function (a) {
                    return a.price + " vuodessa, vuosiveloitus";
                }),
                e("d8982437", function (a) {
                    return a.price + " vuodessa, kuukausiveloitus";
                }),
                e("f0ad5cc8", "vuosi"),
                e("a0dc6e4c", "Ei saatavilla tällä hetkellä"),
                e("jd8b2e66", "Tilaa ja maksa"),
                e("aa5df29f", function (a) {
                    return "" + a.oldPrice;
                }),
                e("g1c4f7a1", function (a) {
                    return "" + a.oldPrice;
                }),
                e("i7fbacc4", "Vaihda tarjolla olevien tilaustasojen välillä"),
                e("c9cc122b", function (a) {
                    return a.feature + " sisältyy tilaukseen " + a.title;
                }),
                e("bff35771", function (a) {
                    return a.feature + " ei sisälly tilaukseen " + a.title;
                }),
                e("a69fd369", function (a) {
                    return "Alkaen " + a.price;
                }),
                e("e563a5d1", function (a) {
                    return "Tilaa " + a.percentage + " %:n alennuksella (voimassa rajoitetun ajan)";
                }),
                e("dfc5f972", "Ja paljon muuta..."),
                e("fb8453c8", "DeepSearch-ja Mieti-pyynnöt käyttöösi"),
                e("e45b3f30", "Hyödynnä Selvitä- ja Päättele-pyyntöjä"),
                e("aaebdc2e", "Merkittävästi enemmän Grok 3 minin ja Grok 3:n käyttöä"),
                e("ddf8a412", "Saat uudet ominaisuudet käyttöösi ennen muita"),
                e("gfb04ef4", "Kaikki X:n Premium+-ominaisuudet"),
                e("b601cfbb", function (a) {
                    return "Kokeile hintaan " + a.price + " kuukaudessa";
                }),
                e("i3e90e20", "Ei saatavilla tällä hetkellä"),
                e("d9e9ce26", "Tilaa ja maksa:"),
                e("j1f5a580", "Premium-tilauksesi käsittelyssä tapahtui virhe. Tarkista maksutietosi ja yritä uudelleen."),
                e("ebc84442", "Premium-tilauksen rekisteröinti"),
                e("cd9102d4", "Valitse luokka"),
                e("eb551aea", "Näytä luokka profiilissa"),
                e("f386777a", "Vaihda tilin tyyppiä"),
                e("db483090", "Vaihdettu yksityistiliksi"),
                e("c701200c", "Vaihdettu yritystiliksi"),
                e("acd8da0a", "Vaihdettu sisällöntuottajatiliksi"),
                e("cb55ecce", "Vaihda yksityistiliksi"),
                e("h4aeb984", "Vaihda yksityistiliksi"),
                e("ada6073a", "Etkö tarvitse ammattilaistyökaluja?"),
                e("eb723d4c", "Yksityistileillä ei ole työkaluja, kuten Profiilin valokeila tai Shopping Manager. Sinun on perustettava uusi ammattilaistili, jos haluat vaihtaa takaisin."),
                e("hbb1af08", "Vaihda yritystiliksi"),
                e("a9b5e3aa", "Ei, peruuta"),
                e("ia49207a", "Kyllä, vaihda"),
                e("g3f74902", "Vaihdetaanko yritystiliksi?"),
                e("f3bcfac0", "Tämä on paras brändeille, vähittäiskaupan toimijoille, palveluntuottajille ja organisaatioille."),
                e("d0c3f02e", "Vaihda sisällöntuottajatiliksi"),
                e("a01e84e0", "Vaihdetaanko sisällöntuottajatiliksi?"),
                e("e8af8ef4", "Tämä on paras julkisuuden henkilöille, taiteilijoille ja influenssereille."),
                e("e44eab74", "Kaikkia moduuleita ei vielä tueta kaikilla X-asiakkailla"),
                e("ce4185bc", "Valokeiloja on tulossa lisää"),
                e("b5aed332", "Ei valokeiloja saatavana"),
                e("g419ecf4", "Pysy sivulla"),
                e("d3a097a2", "Kyllä, hylkää"),
                e("j1e1cd30", "Hylätäänkö muutokset?"),
                e("fc779c28", "Esittele valokeilassa"),
                e("ie85a7a8", "Poistetaanko yritystietosi?"),
                e("b5348efc", "Ei aukioloaikoja"),
                e("db285564", "Aina avoinna"),
                e("g7993eee", "Ilmoita aukioloajat"),
                e("c9ee902a", "Näytä kartta"),
                e("j224a074", "Kaikki annetut sijaintitiedot ovat yleisön saatavilla, kun sijaintivalokeila on käytössä. Puhelinnumero ja sähköposti löytyvät Ota yhteyttä -painikkeen kautta."),
                e("f448cbcc", "Valinnainen"),
                e("c16c9568", "Osoite"),
                e("i3a38711", "Google Mapsin käyttöehdot"),
                e("beb66f50", "Googlen tietosuojakäytännön"),
                e("e0d47030", "Mistä asiakkaasi tavoittavat sinut? Muista, että tämä tieto tulee yleisön saataville asiakaskäyntejä varten. Voit poistaa sen milloin tahansa."),
                e("c7a4adb0", "Lisää osoite"),
                e("cd39daf6", "Postinumero"),
                e("gc0df5a6", "Lisää postinumero"),
                e("c6c16a52", "Kaupunki"),
                e("aa8015be", "Lisää kaupunki"),
                e("b688f53a", "Osavaltio / provinssi / alue"),
                e("a67f5bbc", "Lisää osavaltio / provinssi / alue"),
                e("if92b1b4", "Lisää maa"),
                e("ffc5590e", "Virheellinen kaupunki"),
                e("a8fd64d8", "Hae maata"),
                e("a0abe108", "Virheellinen osavaltio / provinssi / alue"),
                e("j163df8e", "Virheellinen osoite"),
                e("af9b9b78", "Virheellinen postinumero"),
                e("i373e022", "Anna sähköpostiosoite"),
                e("f91751f8", "Tämä näkyy yleisölle"),
                e("g33c0564", "Virheellinen sähköposti"),
                e("ga71fbf4", "Aukioloajat"),
                e("ca2ba204", "Muokkaa aukioloaikoja"),
                e("d7b7dbca", "Profiilissasi ei näytetä aukioloaikoja"),
                e("a460e770", "esim. puistot, uimarannat, verkkokaupat"),
                e("ddc88bf0", "Aseta aukioloajat kullekin päivälle"),
                e("j11df0ca", "Päällekkäiset tunnit"),
                e("f9f911f4", "Hae aikavyöhyke"),
                e("d21a4252", "Lisää aukioloaikoja"),
                e("ac6ce1c0", "Alkaen"),
                e("c647aac8", "Päättyen"),
                e("b926e64a", "Anna verkkosivusto"),
                e("i019c8b6", "Soitto"),
                e("eabc6906", "Tekstiviesti"),
                e("h24d868c", "Puhelu ja tekstiviesti"),
                e("fa64f1fc", "Valitse maatunnus"),
                e("c7d3629a", "Puhelinnumero"),
                e("ce48a958", "Miten sinuun saa parhaiten yhteyden?"),
                e("b97705ce", "Muista, että tämä puhelinnumero tulee yleisön saataville asiakastiedusteluja varten. Voit poistaa sen milloin tahansa."),
                e("f7ff19ec", "Lisää maatunnus"),
                e("bb7f177a", "Virheellinen puhelinnumero"),
                e("b91d1394", "Lisää sovellus"),
                e("d3cd1160", "Lisää iOS-sovellus"),
                e("f2124008", "App Storen URL"),
                e("dc0d9d6a", "Lisää Android-sovellus"),
                e("dd1605f0", "Play-kaupan URL"),
                e("g4098f78", "Mistä löydän tämän?"),
                e("b949cdc6", "Poista sovellus"),
                e("b4b8a486", "Valitse yhteisö"),
                e("jfe04cf6", "Tyhjennetäänkö valintasi?"),
                e("a14aa8dc", "Yhteisö poistetaan valokeilastasi."),
                e("cc4add98", "Valitse Yhteisö nähdäksesi, miten se näkyy profiilisivullasi"),
                e("jd3e9ea6", "Sinulla ei ole yhtään yhteisöä."),
                e("daad9741", "luoda oman yhteisön"),
                e("c46cdabc", "Edistyneet työkalut"),
                e("f6a2233a", "Hallitse tilien käyttöoikeuksia"),
                e("ccb3ca48", "Yritysasetukset"),
                e("b0ef3100", "Laadi interaktiivisia kampanjoita"),
                e("ff1c5e1a", "Ammattilaistoiminnot"),
                e("f53adc36", "Tee tulosta tosielämässä"),
                e("hc4981d6", "Profiilivalokeila"),
                e("fbce8dbe", "Löydä seurattavia henkilöitä"),
                e("ae76c624", "Luo lisää yhteyksiä"),
                e("ae0383d4", "Mainostamalla twiittiä tavoitat enemmän ihmisiä"),
                e("a1dbe746", "Tehostamalla twiittiä tavoitat enemmän ihmisiä"),
                e("hbd124ae", "Tehosta julkaisua"),
                e("hd80bd3e", "Mainosta julkaisua"),
                e("fe2b0008", "Opi X:n käyttäjäksi"),
                e("h257d4aa", "Valitse mainostettava julkaisu"),
                e("d28a1d72", "Hoksaa trendit ensimmäisenä Radarilla"),
                e("fb70427a", "Esittelyssä X:n tehokkain hakutyökalu."),
                e("i54bf620", "Pidä silmällä hakusanoja"),
                e("e8bb09bc", "Käytä edistynyttä hakua kyselyn rajaamiseen."),
                e("d4c9d5aa", "Trendit näkyviksi"),
                e("e78263fe", "Seuraa keskusteluja: kuvaaja näyttää esiintymät 3 vuorokaudelta."),
                e("e3ed8220", "Reaaliaikaiset tilastot"),
                e("f4952956", "Saa tilastot julkaisujen määrästä välittömästi käyttöösi."),
                e("cce3f116", "Julkaisu lisättiin kirjanmerkkeihisi"),
                e("b593b396", "Julkaisu poistettu kirjanmerkeistä"),
                e("af9c8a3e", "Avaa sovellus"),
                e("ef483238", "Julkaisun tilasivu"),
                e("jcf3ff56", "Suuri teksti"),
                e("f1252ac8", "Keskikokoinen fonttikoko"),
                e("daa0da04", "Pieni fonttikoko"),
                e("ba5256b2", "Fonttikoko"),
                e("h030c24c", "Ilmoita ongelmasta"),
                e("b12ffee6", "Aseta porttikielto Yhteisöön"),
                e("e37836f8", "Ilmiannon tiedot"),
                e("fb35e52a", "Lue sääntö"),
                e("e238c590", "Mitä seuraavaksi"),
                e("if218e60", "Tiimimme käy ilmiantosi läpi. Jos havaitsemme rikkomuksen, ilmoitamme sinulle, mihin toimiin ryhdymme."),
                e("b6dc1984", "Millainen prosessimme on?"),
                e("b0a16894", "Kontekstilla on väliä. Huomioimme seuraavat tekijät sääntöjä soveltaessamme (tämä ei ole kattava luettelo):"),
                e("d4716820", "Kohdistuuko ilmiannettu sisältö ihmisiin näiden identiteetin perusteella?"),
                e("e899a534", "Miten vakava tämä rikkomus on?"),
                e("d9c4e7ae", "Onko ilmiannon tehnyt henkilö, johon käytös kohdistuu?"),
                e("afb51066", "Useamman ilmiannon tekeminen samasta asiasta ei nopeuta käsittelyä."),
                e("b7ba712a", "Rikkomus havaittu"),
                e("d90b8c04", "Rikkomusta ei havaittu"),
                e("c2d0494a", "Turvallisuussuosituksemme"),
                e("be46e000", "Useampi ilmianto samasta asiasta"),
                e("e846ae32", "Vaikka sisältö on poistettu, joku on voinut ottaa siitä kopion tai ottaa näyttökuvia. Jos näet sisällön edelleen X:ssä, ilmoita meille, jotta voimme poistaa sen."),
                e("e3647d08", "Käänny poliisin puoleen"),
                e("gad89c4a", "Jos uskot olevasi vaarassa, suosittelemme, että soitat hätäkeskukseen. Poliisi voi lukea ohjeemme lainvalvontaviranomaisille, jos heillä on avoimia kysymyksiä. "),
                e("h7fa9240", "Yhdysvalloissa:"),
                e("fb2ff552", "National Suicide Prevention Lifeline, puh. 988."),
                e("bb57e8c0", "Muissa maissa:"),
                e("b9ce59ba", "Kiitos, että kiinnitit huomiomme asiaan."),
                e("d42899ad", "International Association for Suicide Prevention."),
                e("c9853de0", "Sisältö piilotettu"),
                e("c197728e", "Ratkaistu"),
                e("f4422d78", "Ilmiannot"),
                e("i07c24fa", "Sinulla ei ole avoimia ilmiantoja"),
                e("h542c98a", "Katso tiedot"),
                e("e6e11d12", "Sinulla ei ole ratkaistuja ilmiantoja"),
                e("ibf33bae", "Tee ilmoitus kaksoiskappaleista, jotta ne voidaan poistaa"),
                e("a288ca36", "ohjeemme lainvalvontaviranomaisille"),
                e("a62c9c34", "Seuraa mielenkiintosi kohteita."),
                e("cf39fca2", "Kuule, mikä puhuttaa."),
                e("j86184fe", "Osallistu keskusteluun"),
                e("ac2035f2", "Liity tänään."),
                e("h0af9418", "Luo tili"),
                e("eba1b198", "Maailmalla tapahtuu"),
                e("fa811c30", "Onko sinulla jo tili?"),
                e("b4bdfb3e", "Hanki Grok-sovellus"),
                e("f991cfaa", "Hanki Grok"),
                e("a4298bc0", "X. Ajan hermolla"),
                e("j3f49ff6", "Näe koko tarina live-kommentein höystettynä tuoreimmista uutisista ja viihteestä urheiluun ja politiikkaan."),
                e("d65555c2", "TAI"),
                e("e75df5c9", function (a) {
                    return a.query + " - Haku";
                }),
                e("ac4fb0f4", "Kuvat"),
                e("aea62568", "Hakusuodattimet"),
                e("gfcfbf8c", "Hakusi on tallennettu."),
                e("a4645d92", "Tallennettu hakusi on poistettu."),
                e("b11805af", function (a) {
                    return "Näe julkaisuja aiheesta " + a.query + " X:ssä. Katso, mitä muut sanovat ja osallistu keskusteluun.";
                }),
                e("d610e8c3", function (a) {
                    return "Viimeisimmät julkaisut aiheesta " + a.query + ". Lue mitä ihmiset sanovat ja liity keskusteluun.";
                }),
                e("j622effe", "Tarkennettu haku"),
                e("i5045e74", "Mistä tahansa"),
                e("h2388754", "Lähellä sinua"),
                e("a0cf4306", "Grokin yhteenveto"),
                e("f97f7b46", "Piilota Grok-yhteenveto"),
                e("f9d35b98", "Voit pitää tallessa vain 25 hakua kerralla. Poista jokin haku tallentaaksesi uuden."),
                e("ha925ad4", "Jokin meni pieleen. Yritä tallentaa haku hetken kuluttua uudelleen."),
                e("h0a9931c", "Jokin meni pieleen. Yritä poistaa haku hetken kuluttua uudelleen."),
                e("h4912b5e", "Tallenna haku"),
                e("b9bc69ca", "Poista tallennettu haku"),
                e("eb63de70", "X - Tarkennettu haku"),
                e("d3938be8", "Sanat"),
                e("e0dded5e", "Aktiivisuus"),
                e("a097f7ba", "Päivämäärät"),
                e("c03f15ca", "Mikä tahansa kieli"),
                e("cb334136", "Linkit"),
                e("jf1cbcc2", "Sisällytä julkaisut, joissa on linkki"),
                e("gede6f6e", "Näytä vain julkaisut, joissa on linkki"),
                e("bda44dd4", "Sisällytä vastaukset ja alkuperäisjulkaisut"),
                e("ab870904", "Näytä vain vastaukset"),
                e("b6215680", "Kaikki nämä sanat"),
                e("cceffa5e", "Esimerkki: mitä tapahtuu · sisältää sekä sanan ”mitä” että sanan ”tapahtuu”"),
                e("f1c5faee", "Täsmälleen tämä ilmaus"),
                e("ad10780e", "Esimerkki: happy hour · sisältää täsmälleen ilmauksen ”happy hour”"),
                e("a555a3f4", "Mikä tahansa näistä sanoista"),
                e("ee8a2b60", "Esimerkki: kissat koirat · sisältää joko sanan ”kissat” tai sanan ”koirat” (tai molemmat)"),
                e("f51fe348", "Ei näitä sanoja"),
                e("hb657ad4", "Esimerkki: kissat koirat · ei sisällä sanaa ”kissat” eikä sanaa ”koirat”"),
                e("d10da5da", "Nämä avainsanat"),
                e("f0b52b50", "Esimerkki: #ThrowbackThursday · sisältää avainsanan #ThrowbackThursday"),
                e("e292598a", "Näiltä tileiltä"),
                e("hef790d8", "Esimerkki: @X · lähettäjä @X"),
                e("g2c27394", "Näille tileille"),
                e("d158d9d0", "Esimerkki: @X · lähetetty vastauksena käyttäjälle @X"),
                e("a10e3230", "Mainitessa nämä tilit"),
                e("daaf2c72", "Esimerkki: @SFBART @Caltrain · mainitsee käyttäjän @SFBART tai käyttäjän @Caltrain"),
                e("b18366ba", "Vastauksia vähintään"),
                e("f481ba1c", "Esimerkki: 280 · julkaisut, joihin on ainakin 280 vastausta"),
                e("ib3ddbd4", "Tykkäyksiä vähintään"),
                e("ef994dac", "Esimerkki: 280 · julkaisut, joilla on ainakin 280 tykkäystä"),
                e("a504ca74", "Uudelleenjulkaisuja vähintään"),
                e("jd9bd944", "Esimerkki: 280 · julkaisut, jotka on uudelleenjulkaistu ainakin 280 kertaa"),
                e("e95b9448", "Yleinen"),
                e("f458a3b2", "Yksityisyys"),
                e("bdc6f5b8", "Oma tilisi"),
                e("ea848de8", "EarlyX-asetukset"),
                e("df483b48", "Ominaisuuksien katkaisimet"),
                e("bd05add8", "En ole botti"),
                e("d94f12b6", "Kokeile hakea ilmoituksista, tietosuojasta jne."),
                e("ba8f6f82", "Hae asetuksista"),
                e("g931a6e5", function (a) {
                    return "Seuraat aihetta " + a.topic;
                }),
                e("h3f9027a", "Näet julkaisuja tästä aiheesta etusivun aikajanalla. Tämä aihe auttaa personoimaan käyttäjäkokemustasi X:ssä."),
                e("e241095e", "Omat aiheet"),
                e("f8bc75e2", "omat aiheet"),
                e("ed827af6", "Aihe ei ole käytettävissä."),
                e("d094c720", "Kaikki aiheet"),
                e("g3e87c61", function (a) {
                    return a.topicName + " | Aiheet";
                }),
                e("g02269ba", "Seuraa aiheita X:ssä. Aiheissa näet julkaisuja eri tileiltä, jotka ovat aiheen asiantuntijoita tai joita aihe kiinnostaa X:ssä."),
                e("e80d2509", function (a) {
                    return "Seuraa aihetta " + a.topicName + " X:ssä. Näet suosituimmat julkaisut eri tileiltä, jotka ovat aiheen " + a.topicName + " asiantuntijoita, faneja tai muuten vain puhuvat siitä mielellään X:ssä.";
                }),
                e("e44b4256", "Tarinahistoria"),
                e("a74af3f8", "Tarinahistoriaa ei löydy."),
                e("c3077694", "Puheenaiheeseen liittyvät julkaisut"),
                e("a9042b6c", "Suositut puheenaiheet -historia"),
                e("ed54bc32", "Tee ilmianto suositusta puheenaiheesta"),
                e("f89bcc50", "Ilmianto tehty suositusta puheenaiheesta"),
                e("gde7b6b0", "Peruuta tallennus"),
                e("i6212670", "Ladataan puheenaihetta"),
                e("c6a07c10", "Suosittua-aikajana"),
                e("b0c91a92", "Kirjaudu sisään tai rekisteröidy käyttäjäksi, niin näet mitä X:ssä sanotaan"),
                e("d7071084", "Grokkaa tämä"),
                e("ee2200f4", "Tämä tarina on Grokin tekemä yhteenveto julkaisuista X:ssä. Se elää ajan mittaan."),
                e("dd225af8", "Ketään ei löydy."),
                e("e1e5d552", "Muokkaa piiriäsi"),
                e("ec13f9cc", "Piirissäsi ei ole ketään — vielä"),
                e("dab58e32", "Kun lisäät ihmisiä, he näkyvät täällä."),
                e("f43112a4", "Näin se toimii"),
                e("a4d60c94", "Jokin meni pieleen. Emme voi lisätä käyttäjää piiriisi juuri nyt."),
                e("a1ba3bd8", "Piirisi on täynnä. Piirissä on jo 150 hengen enimmäismäärä käyttäjiä."),
                e("ac3fd6e2", "Sinulle ei ole suosituksia — vielä"),
                e("eeb4d3f0", "Ehdotamme täällä piiriisi lisättäviä ihmisiä."),
                e("aea3c420", "Ei vielä lainauksia"),
                e("b40a22c0", "Kun lisäät oman kommenttisi samalla kun jaat jonkun toisen julkaisun, se näkyy täällä."),
                e("f08d8d08", "Näytä mieluisat julkaisut muillekin"),
                e("f0ccff52", "Jaa jonkun toisen julkaisu aikajanallasi uudelleenjulkaisemalla se. Kun teet näin, se näkyy täällä."),
                e("fc1acb54", "Ei vielä tykkäyksiä"),
                e("e3527230", "Kun joku (vaikka sinä itse) napauttaa sydäntä tämän julkaisun kohdalla, se näkyy täällä."),
                e("i3e8b808", "Ladataan käyttäjiä, jotka tykkäsivät tästä julkaisusta"),
                e("c69fd704", "Ladataan käyttäjiä, jotka uudelleenjulkaisivat tämän julkaisun"),
                e("f12858d4", "Tykännyt"),
                e("fe62cfec", "Uudelleenjulkaisseet"),
                e("h1c5d6aa", "Lähettämäsi"),
                e("h6d45054", "Kaikkien lähettämät"),
                e("da68fff1", function (a) {
                    return a.count + " kolikko" + n(a.count, "", "a") + " (näkyy vain sinulle)";
                }),
                e("e35f2534", "Ladataan julkaisun toimintaa"),
                e("i60dfa72", "Julkaisun aikaansaamat toiminnat"),
                e("dc604dda", "Käyttäjät, jotka tykkäsivät tästä julkaisusta"),
                e("cdd4ef4a", "Käyttäjät, jotka uudelleenjulkaisivat tämän julkaisun"),
                e("icc72234", "Tämän julkaisun lainaukset"),
                e("hc35b530", "Ei vielä tykkäyksiä"),
                e("e0d6a246", "Ei vielä uudelleenjulkaisuja"),
                e("i2a26cb4", "Kun joku napauttaa sydäntä tämän julkaisun kohdalla, se näkyy täällä."),
                e("i9b724e8", "Täällä on luettelo tätä julkaisua lainanneista."),
                e("a5ab75ae", "Tähän liittyviä julkaisuja ei löydy."),
                e("ce637c0e", "Tähän liittyviä artikkeleita ei löydy."),
                e("fd67deaa", "Jaa aiheeseen liittyviä julkaisuja"),
                e("f9183bb6", "Kopioi linkki tähän liittyviin julkaisuihin"),
                e("fc4e5d96", "Voit katsella vain omien julkaisujesi tilastoja."),
                e("ab0da59f", function (a) {
                    return a.entity + " Tilastot";
                }),
                e("ae32e7de", "Tämä on mainostettu julkaisu. Sen näyttökerrat eivät ole julkisia."),
                e("a10aa36c", "ohjekeskuksesta"),
                e("d0740558", "ohjekeskuksesta"),
                e("d2d76dca", "ohjekeskuksesta"),
                e("b6414532", "Julkaisusi nähneiden käyttäjien arvioitu jakauma"),
                e("c61c6624", "Mainostettu"),
                e("d267afa2", "Alle 20"),
                e("db81cab0", "20—29"),
                e("f173716e", "30—39"),
                e("ada329e6", "40—49"),
                e("j2950694", "Yli 50"),
                e("bcd9cf68", "Yli 65"),
                e("f05f1838", "Muu / Määrittämätön"),
                e("fa5be588", "Orgaaniset"),
                e("c69069e6", "Tämän julkaisun näyttökerrat X:ssä"),
                e("a0615bac", "Montako kertaa yhteensä käyttäjä on toiminut suhteessa julkaisuun. Tämä sisältää kaikki klikkaukset missä tahansa julkaisun alueella (kuten asiasanojen, linkkien, käyttäjäkuvan ja käyttäjätunnuksen klikkaukset ja julkaisun laajennukset), uudelleenjulkaisut, vastaukset, seuraamiset ja tykkäämiset."),
                e("d8abdaa4", "Uudet seuraajat"),
                e("c72f25a8", "Suoraan tästä julkaisusta kertyneet seuraajat"),
                e("acc4cf12", "Tästä julkaisusta kertyneet profiilinäytöt"),
                e("c7d0d1c4", "Julkaisun URL-osoitteiden klikkausten määrä"),
                e("a4da7724", "Montako kertaa ihmiset katsoivat julkaisun tiedot"),
                e("c5d4d3a8", "Seuraajakohtainen hinta"),
                e("f56e24f2", "Kokonaiskulut jaettuna seuraajien määrällä, ansaitsemasi mukaan lukien. Maksat vain, kun joku seuraa sinua"),
                e("g33fd6b1", function (a) {
                    return a.percentage + " kampanjalla";
                }),
                e("b71059c3", function (a) {
                    return a.percentage + " ei-seuraajilta";
                }),
                e("h4cbba3e", "< 5 %"),
                e("h1cdac12", "< 5 % kampanjasta"),
                e("g884b2cc", "< 5 % ei-seuraajilta"),
                e("b32334a0", "Tavoitetut tilit"),
                e("h142a79c", "Julkaisun nähneitä yhteensä"),
                e("de4def4e", "% kaikista promootioista tähän päivään asti"),
                e("e3390c1e", "Ensimmäiset 48 tuntia"),
                e("aead0975", function (a) {
                    return "Tämä seuraa julkaisun lukukertoja ensimmäisten 48 tunnin ajan julkaisusta. Enimmäismäärä on " + a.maxValue + " näyttökertaa.";
                }),
                e("ib1f8491", function (a) {
                    return a.likeCount + " tykkäys" + n(a.likeCount, "", "tä");
                }),
                e("dc0e7f37", function (a) {
                    return a.retweetCount + " uudelleenjulkaisu" + n(a.retweetCount, "", "a");
                }),
                e("d0eeb127", function (a) {
                    return a.replyCount + " vastaus" + n(a.replyCount, "", "ta");
                }),
                e("db6efeb8", "Kampanjasi on käynnissä"),
                e("j6daea86", "Promootiosi on tauolla"),
                e("hf9ed10f", function (a) {
                    return a.endTimeString + " · " + a.endDateString;
                }),
                e("f42a198d", function (a) {
                    return "Käytetty " + a.spentBudget + "/" + a.totalBudget;
                }),
                e("e8adeec8", "Mainosta jälleen"),
                e("fbb5c37e", "Buustaa uudelleen"),
                e("ccffb487", function (a) {
                    return "Julkaisusi on saanut tähän mennessä " + a.impressions + " uu" + n(a.impressions, "den näyttökerran", "tta näyttökertaa") + ". Vaihda ammattilaistiliin tavoittaaksesi enemmän käyttäjiä.";
                }),
                e("ha13fd94", "Tehosta julkaisua"),
                e("jede3014", "Kampanjasi on tarkastettavana"),
                e("b823301e", "Kun julkaisusi on hyväksytty, sitä mainostetaan valitsemallesi yleisölle."),
                e("a2e48870", "Lue X:n mainontakäytäntö"),
                e("ge538876", "Jakamasi videon tilastotiedot"),
                e("ca7e10d8", "Uniikit katselut"),
                e("i611fc96", "Tämän videon katseluiden yhteismäärä kaikissa julkaisuissa"),
                e("a69cd868", "Tämän videon uniikkien katseluiden lukumäärä"),
                e("f894a688", "Katselun kesto"),
                e("ad9d9204", "Videon prosentuaalinen osuus, jonka katsoja katsoi ennen poistumistaan."),
                e("da4b7a70", "Prosenttiosuus katsojista, jotka katsoivat videota tiettyyn kohtaan asti"),
                e("de2d89a2", "Katsoi 25 %"),
                e("i92754c2", "Katsoi 50 %"),
                e("be8ddcc2", "Katsoi 75 %"),
                e("b01410d6", "Katsoi 100 %"),
                e("gfb3d8af", function (a) {
                    return "Katsottu kohtaan " + a.timeLabel;
                }),
                e("fc6cbba2", "Ei mitään nähtävää - vielä"),
                e("b80a53c8", "Kun lisää dataa on kerätty, näet tiedot täällä."),
                e("d25dccb6", "Tilastoja ei ole saatavana piirin julkaisuille."),
                e("g61ac32a", "Kohdennamme automaattisesti käyttäjiin, jotka reagoivat sisältöihisi todennäköisimmin."),
                e("e8702feb", function (a) {
                    return a.couponAmount + " meidän piikkiin!";
                }),
                e("e44dc579", function (a) {
                    return "Aloita nyt, saat " + a.couponAmount + " alennusta ensimmäisestä mainoskampanjastasi ennen " + a.date + ".";
                }),
                e("hd8df545", function (a) {
                    return "Aloita nyt, saat " + a.couponAmount + " alennusta seuraavasta mainoskampanjastasi ennen " + a.date + ".";
                }),
                e("f1d32e41", function (a) {
                    return "Käytä " + a.spendAmount + ", niin saat " + a.couponAmount + " mainoskrediitteinä.";
                }),
                e("c4d0434b", function (a) {
                    return a.dailyBudget + " päivässä, kesto " + a.durationLabel;
                }),
                e("dc4a9413", function (a) {
                    return a.totalBudget + " yli " + a.durationLabel;
                }),
                e("bad70c09", function (a) {
                    return "Sijainti" + n(a.numLocations, "", "a");
                }),
                e("c133a39b", function (a) {
                    return a.minAge + "–" + a.maxAge;
                }),
                e("ee5da8f5", function (a) {
                    return a.minAge + "+";
                }),
                e("g4bf9cb7", function (a) {
                    return a.durationDays + " päivä" + n(a.durationDays, "", "ä");
                }),
                e("gc3ce5d9", function (a) {
                    return "Arvioitu tavoittavuus " + a.audienceLow + "–" + a.audienceHigh + " ihmistä päivässä";
                }),
                e("c1778029", function (a) {
                    return a.locationsHeading + ": " + a.locations + a.newlinePlaceholder + "Ikähaarukka: " + a.formattedAge + a.newlinePlaceholder + "Sukupuoli: " + a.gender;
                }),
                e("a4ab12b9", function (a) {
                    return "Kun olet käyttänyt yhteen tai useampaan luovaan kampanjaan " + a.spendAmount + ", lisäämme mainostilillesi " + a.couponAmount + " saldoa. Hyvityksen näkymiseen tilillä voi mennä useampi päivä.";
                }),
                e("cb51c854", "Kaikki sukupuolet"),
                e("bb7b39e2", "Miehet"),
                e("eb9466d0", "Naiset"),
                e("b07cc9f2", "Alue"),
                e("ce309bee", "Metro"),
                e("cc49d030", "Postinumero"),
                e("c3fca124", "Buustaa toimintaa"),
                e("d4f57cce", "Enemmän seuraajia"),
                e("c6daa762", "Saa lisää linkin klikkauksia"),
                e("cc642518", "Hae sijainteja"),
                e("i0e8c3c6", "Sijaintitulokset"),
                e("f69ad048", "Valitse sijainti"),
                e("d948b978", "Voit mainostaa vain omia julkaisujasi."),
                e("cfcdb4a2", "Jokin meni pieleen. Tarkista, ettei mainonnan esto ole käytössä."),
                e("j7a2af7a", "Etkö halua mainostaa tätä julkaisua?"),
                e("a78bce8e", "Jos poistut nyt, tätä julkaisua ei mainosteta."),
                e("g8844150", "Älä mainosta"),
                e("e7eb3684", "Päiväbudjetti"),
                e("d9f6e3ce", "Päiväbudjettivalitsin"),
                e("b3954eca", "Päiväkestovalitsin"),
                e("ce665a60", "Arvioitu tavoittavuus on pelkkä arvio. Ei voida taata, moniko todella tavoitetaan."),
                e("i0c3b95c", "Seuraava kierros meidän piikkiin!"),
                e("h8b6e32a", "Mainostit julkaisuasi!"),
                e("ee8014a6", "Mainoksesi tehon näet julkaisukohtaisista tilastoista."),
                e("db841200", "Buustaa toimintaa, tavoita enemmän ihmisiä ja levitä sanaa sivustasi."),
                e("fcc839b6", "Mikä on tavoitteesi?"),
                e("b679a538", "Julkaisusi sisältää mediaa"),
                e("cb19a2f0", "Saa enemmän tykkäyksiä, uudelleenjulkaisuja jne."),
                e("a2d37164", "Saa lisää kävijöitä sivustollesi"),
                e("cefad302", "Lisää linkki julkaisuusi"),
                e("b614fad0", "Huolehdi siitä, että julkaisussa on linkki."),
                e("de43b660", "Maksutavat"),
                e("hb4773a0", "Lisää uusi maksutapa"),
                e("aa2a3dd4", "Poista Kortti"),
                e("b1c5b63c", "päättyy"),
                e("affb5878", "Vahvista poisto"),
                e("db443ae2", "Näyttääkö kaikki olevan kunnossa?"),
                e("a96f811e", "Promootion tavoite"),
                e("fbd44e96", "Budjettisi"),
                e("e36bce64", "Maksutapa"),
                e("ia83756c", "Välisumma"),
                e("cc217a04", "Kuponkisaldo"),
                e("g4f2b588", "Kuponkisaldoa jäljellä"),
                e("i41612da", "Luo kampanja"),
                e("cdae1af0", "Lisää verotustiedot"),
                e("ed8bb5a0", "Lisää maksun tiedot"),
                e("fc640c20", "Lisää maksutiedot lunastaaksesi kupongin"),
                e("be2dc078", "Rekisteröidy ja lisää maksun tiedot"),
                e("iaefd4de", "Rekisteröidy ja lisää maksutiedot lunastaaksesi kupongin"),
                e("e5e42640", "Hmmm... kuponkisi ei latautunut.  Yritä myöhemmin uudelleen."),
                e("e85dfd66", "Tälle julkaisulle on jo luotu kampanja."),
                e("a4db098c", "Näyttää siltä, ettei kampanjasi luonti onnistunut. Yritä myöhemmin uudelleen."),
                e("ef7e3916", "Jokin meni pieleen. Tarkista kampanjan tiedot ja yritä uudelleen."),
                e("c1134966", "käyttöehdot ja mainonnan säännöt"),
                e("he45cc43", "kuponkeja koskevat ehdot"),
                e("c9439a82", "käyttöehdot ja mainonnan säännöt"),
                e("c672105a", "Keitä haluat tavoittaa?"),
                e("e1efbeae", "Ikäryhmä"),
                e("c6ff7c10", "Alin ikäryhmä"),
                e("b555fb46", "Korkein ikäryhmä"),
                e("j2c03e12", "55+"),
                e("d4e01892", "asunto-, rahoitus- ja työpaikkamainontaa koskevan käytäntömme"),
                e("df8d4fa0", "Valitse sukupuoli"),
                e("i982d424", "Paljonko haluat investoida?"),
                e("b9ff6cb0", "Maksutapaa ei ole valittu"),
                e("i8b90688", "käyttöehdot ja mainonnan säännöt"),
                e("a93bd26d", "kuponkeja koskevat ehdot"),
                e("d31dc460", "käyttöehdot ja mainonnan säännöt"),
                e("ga845597", function (a) {
                    return "Yhteensä jaksolla " + a.durationLabel;
                }),
                e("e1945a89", function (a) {
                    return a.audienceLow + "–" + a.audienceHigh;
                }),
                e("b21c2549", "Lue lisää"),
                e("j9f78b42", "Tässä julkaisussa ei ole merkittyjä käyttäjiä."),
                e("cb2054fa", "Ladataan käyttäjiä"),
                e("e4ad6bda", "Tässä kuvassa"),
                e("cdd4aafe", "Ladataan keskustelun osallistujia"),
                e("aac3fad2", "Tämän keskustelun henkilöt"),
                e("a7f66562", "Ladataan julkaisua"),
                e("b7a898fa", "Siirry seuraavaan julkaisuun suoraan tästä!"),
                e("e254fdd2", "Voit pyyhkäistä suoraan seuraavaan julkaisuun"),
                e("h59700fa", "ImmersiveMediaViewer"),
                e("i86c2940", "Etenemispalkki"),
                e("h2fcc532", "Ladataan historiaa"),
                e("a74821a0", "Näyttää siltä, ettei maksusi onnistunut tai maksuväline on umpeutumassa. Päivitä maksutietosi tiliasetuksissa pitääksesi Premium-tilauksesi voimassa."),
                e("bb55752e", "Kolikoilla voit tukea sisällöntuottajia, jotka julkaisevat arvokasta sisältöä. Käyttämättömät kolikot säilyvät saldossasi."),
                e("ea7ce65f", function (a) {
                    return "Sisältää " + a.count + " bonuskolik" + n(a.count, "on", "koa") + ".";
                }),
                e("e557f9d2", "Kolikoiden saldoraja tuli vastaan."),
                e("e2beba5e", "Suosituin"),
                e("gafeeb96", "Osta kolikoita"),
                e("bc42db1c", "Peru milloin vain. Uusiutuu automaattisesti kuukausittain."),
                e("f1561b06", "ostajien käyttöehdot"),
                e("fe93ed4a", "Osto onnistui"),
                e("bcb90375", function (a) {
                    return "Uusi kolikkosaldosi on " + a.balance;
                }),
                e("ia2eb0c0", "Osto epäonnistui!"),
                e("c7e11484", "Listasi ovat tyhjiä"),
                e("a96208ba", "Sinun on laadittava lista, ennen kuin voit lisätä jonkun."),
                e("d2826908", "Luo uusi lista"),
                e("he062e8a", "Valitse lista"),
                e("c2fb1e94", "Listaan voi lisätä vain 5 000 tiliä."),
                e("f30edc68", "Muuta yksityiseksi"),
                e("h51a2cf6", "Jokin meni pieleen. Yritä poistaa banneri hetken kuluttua uudelleen."),
                e("bb10280e", "Jokin meni pieleen. Yritä tallentaa lista hetken kuluttua uudelleen."),
                e("h8885a22", "Listan nimi ei saa ylittää 25 merkkiä"),
                e("f8132984", "Kun teet listasta yksityisen, vain sinä näet sen."),
                e("h421e74c", "Ehdotettuja listoja"),
                e("aa62dea8", "Haku on päällä"),
                e("e5e4d3aa", "Palaa myöhemmin katsomaan ehdotettuja listoja."),
                e("c4d7650c", "Hallitse jäseniä"),
                e("h7f2418c", "Ladataan listatietoja"),
                e("b18e5cd2", "Jokin meni pieleen. Yritä poistaa lista hetken kuluttua uudelleen."),
                e("cdd73e9c", "Poista lista"),
                e("def8ff62", "Poistetaanko lista?"),
                e("j8b9cde8", "Tätä ei voi peruuttaa. Menetät listan."),
                e("e9f3dec4", "Listahaku"),
                e("b9192d55", function (a) {
                    return a.query + " - Listahaku";
                }),
                e("d6a23192", "Luo uusi lista"),
                e("ie256518", "Listahaun aikajana"),
                e("j57a2568", "Listahaku"),
                e("hc76e8cd", function (a) {
                    return "Mikään lista ei vastaa hakua ”" + a.query + "”";
                }),
                e("d872881a", "Mikset loisi listaa itse?"),
                e("j177067a", "Hae listoja"),
                e("g13ea02c", "Kokeile hakea listoja"),
                e("d1461f1e", "Tämä Lista kumisee tyhjyyttään"),
                e("bcbd3416", "Tätä listaa seuraavat käyttäjät näkyvät täällä."),
                e("b197a56c", "Listan seuraajat"),
                e("f0ab07f5", function (a) {
                    return "Jäsenet (" + a.memberCount + ")";
                }),
                e("h9ce3406", "Listan jäsenet"),
                e("dfeaeb26", "Lisää listalle"),
                e("a332103e", "Tälle listalle lisätyt käyttäjät näkyvät täällä."),
                e("e2f7dc62", "Katso jäsenehdotukset"),
                e("gc23cc00", "Kokeile hakea tilejä saadaksesi ehdotuksia listalle lisättävistä tileistä."),
                e("e3deb126", "Listaehdotuksia"),
                e("eb7b54be", "Ladataan listoja"),
                e("a9ca06d2", "Tiedot"),
                e("a367dc9a", "Näet uusimmat julkaisut niiden ilmaantuessa"),
                e("dd438748", "Näet suosituimmat julkaisut ensin"),
                e("fe7e217c", "Näe uusimmat julkaisut"),
                e("ce78b698", "Näet suosituimmat julkaisut ensin. Uusimmat julkaisut-näkymässä näet julkaisut heti niiden ilmestyessä."),
                e("i5a1628a", "Näe suosituimmat julkaisut"),
                e("f333a93e", "Näet uusimmat julkaisut ensin. Valitsemalla Suosituimmat julkaisut saat parhaat julkaisut."),
                e("c7294984", "Ilmianna lista"),
                e("g6340998", "Tämä ei palauta sinua heidän listoilleen automaattisesti."),
                e("i6da4f7a", "Jaa lista"),
                e("a062ff80", "Kopioi linkki listaan"),
                e("dcdc75a3", function (a) {
                    return "@" + a.screenName + "/" + a.listName;
                }),
                e("d2004da3", function (a) {
                    return "Et seuraa käyttäjää @" + a.screenName;
                }),
                e("a64512a4", "Listat-aikajana"),
                e("i0bcc456", "Kun seuraat, näet hänen listansa."),
                e("d8315ca0", "Listat, joilla olet"),
                e("e74be9ac", "Listat, joilla henkilö on"),
                e("c80cb4e4", "Uusi lista"),
                e("bbcaa24b", function (a) {
                    return "Käyttäjän @" + a.screenName + " luomat listat";
                }),
                e("b081cdf7", function (a) {
                    return "@" + a.screenName + " ei ole luonut yhtään listaa";
                }),
                e("f5978664", "Kun on, ne näkyvät täällä."),
                e("h243711c", "Et ole luonut vielä yhtään listaa."),
                e("b69e2f71", function (a) {
                    return "Käyttäjää @" + a.screenName + " ei ole lisätty yhdellekään listalle";
                }),
                e("e05568cc", "Kun hänet lisätään listalle, se näkyy täällä."),
                e("b86a098a", "Sinua ei ole vielä lisätty yhdellekään listalle"),
                e("h06e09a2", "Kun joku lisää sinut listalle, se näkyy täällä."),
                e("gbaa5489", function (a) {
                    return "Listaa käyttäjän @" + a.screenName + " jäsenyydet";
                }),
                e("g6b54ff6", "Olet ajan tasalla"),
                e("ec5fd35a", "Kun joku pyytää saada seurata sinua, se näkyy täällä ja voit hyväksyä tai hylätä pyynnön."),
                e("ec2d8342", "Hylkää"),
                e("j85d8d90", "Ei odottavia seurauspyyntöjä tälle käyttäjälle."),
                e("c3d23f10", "Jossain oli jotain häikkää. Älä huoli, vika ei ole sinun. Napsauta alta yrittääksesi uudelleen."),
                e("d2613123", function (a) {
                    return "Tilaa - " + a.price + "/kk";
                }),
                e("c4640fc0", "Jaa Tilaukset-profiili"),
                e("a72064a8", "Kopioi linkki Tilaukset-profiiliin"),
                e("e6c72234", "Sähköpostiosoitteen luovutusehdot"),
                e("b17f0c4b", function (a) {
                    return "Olet nyt tilannut seuraavan: @" + a.screenName;
                }),
                e("a5634d9a", "Tilauksen käsittelyssä oli ongelma. Ohita tämä ilmoitus ja yritä uudelleen."),
                e("fe9d3afa", "Ladataan seuraajia"),
                e("ab7fc3ef", function (a) {
                    return "Käyttäjää " + a.fullName + " (@" + a.screenName + ") superseuraavat";
                }),
                e("j0d17377", function (a) {
                    return "Tuntemasi henkilöt, jotka seuraavat käyttäjää " + a.fullName + " (@" + a.screenName + ")";
                }),
                e("fa9e827f", function (a) {
                    return "Käyttäjän " + a.fullName + " (@" + a.screenName + ") seuraajat";
                }),
                e("ha979be5", function (a) {
                    return "Käyttäjän " + a.fullName + " (@" + a.screenName + ") seuraamat henkilöt";
                }),
                e("d28be573", function (a) {
                    return "Tilin " + a.fullName + " (@" + a.screenName + ") tilaajat";
                }),
                e("g9da3853", function (a) {
                    return "Tilin " + a.fullName + " (@" + a.screenName + ") tilaukset";
                }),
                e("cfd952a1", function (a) {
                    return "Varmennetut tilit, jotka seuraavat käyttäjää " + a.fullName + " (@" + a.screenName + ")";
                }),
                e("fecc696e", "Varmennetut seuraajat"),
                e("g0a2fbbe", "Sinulla ei vielä ole Tilaajia"),
                e("g65f4bac", "Sinulla ei ole vielä yhtään seuraajaa"),
                e("c36cfddc", "Kaipaatko seuraajia?"),
                e("fd275c1a", "Sinulla ei vielä ole varmennettuja seuraajia"),
                e("e08bd098", "Löydät luettelon kaikista Tilaajistasi täältä."),
                e("j029a4dc", "Kun joku seuraa sinua, näet seuraajan täällä."),
                e("b2b2c6ce", "Kun tätä tiliä seurataan, seuraajat näkyvät täällä. Julkaisemalla ja osallistumalla keskusteluihin voit saada enemmän seuraajia."),
                e("cb1a15c8", "Tilien seuraaminen on helppo tapa vaikuttaa aikajanasi sisältöön ja pysyä kärryillä sinua kiinnostavista aiheista ja ihmisistä."),
                e("i967b954", "Löydät listan kaikista Tilauksistasi täältä."),
                e("a44e403e", "Näet sinua seuraavat varmennetut tilit täällä."),
                e("d74ee2e3", function (a) {
                    return "Kukaan tuntemasi ei vielä seuraa käyttäjää @" + a.screenName;
                }),
                e("ae5749c7", function (a) {
                    return "@" + a.screenName + " ei seuraa ketään";
                }),
                e("b5099e33", function (a) {
                    return "Käyttäjällä @" + a.screenName + " ei ole yhtään varmennettua seuraajaa.";
                }),
                e("ec251f36", "Kun joku tuntemasi henkilö seuraa häntä, seuraajat näkyvät täällä."),
                e("f8af4f48", "Kun käyttäjä seuraa tilejä, ne näkyvät täällä."),
                e("fd0aad94", "Tiliä seuraavat varmennetut käyttäjät näkyvät täällä."),
                e("b84f6df1", function (a) {
                    return "Premium lahjaksi " + a.percentage + " %:n alennuksella, tarjous voimassa rajoitetun ajan";
                }),
                e("cfcac293", function (a) {
                    return "Anna lahjaksi ja maksa " + a.price;
                }),
                e("d7a73450", "Taso"),
                e("hbd2c24e", "Tilille ei voi antaa lahjaa tällä hetkellä."),
                e("f3fddc98", "ostajien käyttöehdot"),
                e("cff9c889", "Lue lisää"),
                e("c65dda96", "Lahjasi on lähetetty."),
                e("f6e2a407", function (a) {
                    return "Anna kenen tahansa nähdä Tilaaja-merkkisi, kun vastaat käyttäjän @" + a.screenName + " julkaisuihin";
                }),
                e("j8dedddd", function (a) {
                    return "Kun poistat tämän käytöstä, @" + a.screenName + " ja hänen Tilaajansa näkevät tunnuksesi edelleen, jos vastaat käyttäjän @" + a.screenName + " vain Tilaajille laatimiin julkaisuihin. @" + a.screenName + " näkee tunnuksesi aina.";
                }),
                e("c8a513f6", "Peru Tilaus"),
                e("ea000ec8", "Peruitko jo Tilauksesi?"),
                e("d7b8387e", "Jos olet jo perunut, sinun ei tarvitse tehdä muuta. Tilauksesi päättyy automaattisesti laskutuskauden päättyessä."),
                e("f4166d9a", "Haluatko perua Tilauksesi?"),
                e("b74ff5fc", "Jos perut, Tilauksesi päättyy automaattisesti laskutuskauden päättyessä."),
                e("ee9efbc8", "Jatka perumaan"),
                e("c5d9c77a", "Jossain oli jotain häikkää. Älä huoli, vika ei ole sinun. Sulje tämä ikkuna ja yritä uudelleen."),
                e("jda53c24", "Voit perua Tilauksesi Applen App Storen kautta."),
                e("g0a7a53e", "Voit perua Tilauksesi Googlen Play -kaupan kautta."),
                e("i5f14be7", function (a) {
                    return "Tervetuloa takaisin, " + a.displayName;
                }),
                e("a76d58ba", "Mainostilastot"),
                e("g512ddcc", "Orgaaniset tilastot"),
                e("eccd0e1a", "Organisaation analytiikka"),
                e("deea1708", "Haluatko tarkastella tilastoja kaikista X-tileistäsi?"),
                e("eb603ffc", "Päivittämällä saat oman verkostosi affilioitua ja näet kootut tilastot."),
                e("gf67aae4", "Päivitä tilaus täysiin käyttöoikeuksiin"),
                e("h75e3618", "Sisällytä organisaatio"),
                e("h24a8862", "Tästä valintaruudusta"),
                e("c29e3a88", "Valitse affiliaatit"),
                e("j8318d57", function (a) {
                    return a.number + " affiliaatti" + n(a.number, "", "a");
                }),
                e("bf809ec0", "Valitse affiliaatit"),
                e("b719e224", "Ei tuloksia"),
                e("c9938100", "Hakutulokset"),
                e("d1a35ec6", "Lisää tilejä"),
                e("b437adda", "Päivitä maksulliseen tiliin"),
                e("f1f6c88b", function (a) {
                    return "Tilit (" + a.count + ")";
                }),
                e("b02156b8", "Kutsut"),
                e("gd67d29b", function (a) {
                    return "Kutsut (" + a.count + ")";
                }),
                e("daf646e6", "Huomaa: sinun on merkittävä tilit totuudenmukaisesti."),
                e("i3895c32", "Tilisi on tarkastettavana, koska olet muuttanut X-@tunnustasi"),
                e("i5f8b628", "Et voi muuttaa affiliaatteja, ennen kuin tilisi on tarkastettu."),
                e("e9e663ac", "Maksusi on myöhässä."),
                e("c3ddd22c", "käyttöehdoissa"),
                e("c9729d8a", "käyttöehdoissa"),
                e("cdcd1d2c", "Lisää affiliaatteja organisaatioosi"),
                e("d30ea6f3", function (a) {
                    return "Haluatko varmasti poistaa kytköksen käyttäjään @" + a.name + "?";
                }),
                e("c2dfbb86", "Kyllä, poista"),
                e("ba047f76", "Kun poistat affiliaation, väkänen ja affiliaattitunnus poistuvat tililtä heti. Maksat kuun loppuun asti."),
                e("j26dee0e", "Poista affiliaatti"),
                e("e30cbdf0", "Tämä affiliaatti on Varmennetut organisaatiot -tilaaja ja sen on pysyttävä organisaationa. Tiliä ei voi muuttaa henkilön tiliksi."),
                e("j3115ce8", "Yksilöllinen"),
                e("d8bb1d84", "Organisaatio"),
                e("e970bdbd", function (a) {
                    return a.count + " kutsua jäljellä";
                }),
                e("id67d953", function (a) {
                    return "Jokin meni vikaan Stripe-maksutietojasi noudettaessa. Jos ongelma jatkuu, ota yhteys tukeen osoitteessa " + a.supportEmail + ".";
                }),
                e("f323d314", "Lähetä uudelleen"),
                e("ac645cde", "Voit lisätä tilin myöhemmin uudelleen."),
                e("d12af2dd", function (a) {
                    return "Haluatko varmasti perua kutsun käyttäjälle @" + a.screenName + "?";
                }),
                e("ib60b2d5", function (a) {
                    return "Haluatko varmasti lähettää uudelleen kutsun käyttäjälle @" + a.screenName + "?";
                }),
                e("ec6e7d9a", "Tilisi on vain luku -tilassa, kunnes odottava tason vaihto on tehty. Varmista tason vaihdon onnistuminen tarkistamalla Stripe-maksusi."),
                e("b33d1518", "Synkronoi työpaikat tuetusta integraatiosta tai XML-syötteestä"),
                e("dd2db402", "Vaihe 1: Kerää vaaditut tiedot"),
                e("edb098c2", "Vaihe 2: Ota yhteys tukeen"),
                e("c4474460", "Vaihe 2: Lähetä sähköposti tukitiimillemme");
            function s(a, t) {
                for (var i = 0; i < t.length; i++) {
                    var e = t[i];
                    (e.enumerable = e.enumerable || !1),
                        (e.configurable = !0),
                        "value" in e && (e.writable = !0),
                        Object.defineProperty(
                            a,
                            ((n = e.key),
                            (s = void 0),
                            "symbol" ==
                            typeof (s = (function (a, t) {
                                if ("object" != typeof a || null === a) return a;
                                var i = a[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var e = i.call(a, t || "default");
                                    if ("object" != typeof e) return e;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === t ? String : Number)(a);
                            })(n, "string"))
                                ? s
                                : String(s)),
                            e,
                        );
                }
                var n, s;
            }
            function u(a, t) {
                return (
                    (u = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (a, t) {
                              return (a.__proto__ = t), a;
                          }),
                    u(a, t)
                );
            }
            e("a08da0fa", "Mitä tapahtuu seuraavaksi?"),
                e("c127374e", "Lähetä meille viesti"),
                e("b2cb2a0c", "Varmennetut organisaatiot -tilisi käyttäjätunnus"),
                e("b8e64002", "Työnhakijoiden seurantajärjestelmäsi nimi"),
                e("acb99db6", "Työpaikkasivuston URL, josta työpaikkasi löytyvät"),
                e("a64a5b7a", "Lähetä pyydetyt tiedot tukitiimille aloittaaksesi integrointiprosessin."),
                e("e3dffb4e", "Kopioi tukisähköpostiosoitteemme alle ja lähetä pyydetyt tiedot tukitiimillemme aloittaaksesi integraation."),
                e("b4fef99e", "Kun tukitiimimme on saanut pyyntösi, käymme läpi tietosi ja autamme sinua integraation konfiguroinnissa."),
                e("h37f2d96", "Huomaa, ettei kaikkia työnhakijoiden seurantajärjestelmiä vielä tueta."),
                e("ce102a20", "Edelleenohjataan Stripeen"),
                e("ddfd6718", "Maksu epäonnistui"),
                e("i90ea7d2", "Päivitä laskutustietosi pian, jotta säilytät etusi."),
                e("a62359e6", "Varmennetut organisaatiot"),
                e("ge221b7c", "Päivitä varmennetun organisaation tilaukseen, niin saat käyttöösi affiliaatit ja enemmän mainoskrediittejä."),
                e("i4dccc18", "Laskutus"),
                e("ec3cd6e4", "Hallitse maksutapaa, päivitä laskutustiedot ja tarkastele laskujasi."),
                e("dac61c3c", "Tilin asetukset"),
                e("b6b5fd66", "X-tilisi hallinta, esimerkiksi käyttäjätunnuksen ja salasanan vaihto."),
                e("hb9c4a1c", "Kysymykset, bugi-ilmoitukset ja muu palaute"),
                e("c674f5b4", "Ota laskutus käyttöön"),
                e("i8237e66", "Vaihda luottokorttiveloitukset laskujen maksuun pankkitililtä."),
                e("hebd348a", "Määritä, kuinka työpaikkoja markkinoidaan mainosten avulla Hiring-portaalista."),
                e("ib5e6f90", "Työpaikkailmoitukset"),
                e("id720215", "Hiring"),
                e("dd59f146", "Mainostili työpaikkailmoituksia varten"),
                e("e7e36818", "Työpaikkailmoituksia voi hyödyntää mainostileillä, kun niiden rahoituslähde on kokonaan määritetty."),
                e("c28566e0", "Mainostili"),
                e("c80160d3", "mainontasivulta"),
                e("ff0edac0", "Haluatko varmasti perua tilauksesi?"),
                e("h2ac0348", "En, palaan takaisin"),
                e("dbf9667e", "Olen varma"),
                e("j7592572", "U-käännös"),
                e("ee778942", "Liikennevalot"),
                e("fdd57981", function (a) {
                    return "Saat meiltä " + a.totalAmount + " dollaria mainoskrediittiä.";
                }),
                e("i032a231", function (a) {
                    return "Jään ja otan vastaan " + a.totalAmount + " mainoskrediitin";
                }),
                e("hd7d278c", "Ei kiitos"),
                e("jf8a0dea", "Hienoa! Uusi maksuton mainoskrediitti ilmestyy tilillesi seuraavalla laskutusjaksolla."),
                e("ebbb3154", "Sulje ja palaa X:ään"),
                e("j1f68dda", "Viimeinen vaihe: Haluatko varmasti perua?"),
                e("c9c3464c", "Tilauksen peruminen käynnissä"),
                e("dd3a293c", "Varmennettu organisaatio -tilauksesi on päättynyt."),
                e("faa0f956", "Jotain meni vikaan tilauksesi perumisessa."),
                e("b28289ea", "Kiitos"),
                e("b36f74ae", "Portaali ei enää ole käytettävissäsi, ellet rekisteröidy ja aktivoi tilausta uudelleen."),
                e("b2297a4a", "Onko sinulla jokin pulma? Varaa puhelinaika, niin saat apua."),
                e("h3bdbc54", "Kyllä, varaan puhelinajan"),
                e("i135d64e", "Jatka perumista"),
                e("g275882d", function (a) {
                    return "Tärkeää: sinulla on " + a.creditAmount + " maksutonta mainoskrediittiä vastaanottamatta";
                }),
                e("ib085ed6", "Jään ja otan vastaan mainoskrediitin"),
                e("b5447710", "Käyttäjää ei löytynyt"),
                e("h94755b8", "Käyttäjä on jo valittu kutsuttavaksi"),
                e("bfb5effe", "Käyttäjä on jo affiliaattisi"),
                e("c4b9664e", "Affiliaatti"),
                e("g0eadcf6", "Toisen organisaation affiliaatti"),
                e("a8c81f88", "Organisaatiotili"),
                e("e5abe772", "Käyttäjä on jo kutsuttu"),
                e("e49b97e2", "Hae tileistä"),
                e("f002f1d6", "Lähetä kutsu"),
                e("g2a8bae4", "Lisää X-tilejä"),
                e("af7293cc", "Kutsu X-tilejä mukaan organisaatioosi. Jos tilin omistaja hyväksyy kutsun, tili saa tunnuksen ja affiliaatio näkyy käyttäjän profiilissa."),
                e("ec0f203e", "Kun affiliaatti on hyväksynyt kutsun, muista päivittää hänen valintamerkkinsä oikean väriseksi."),
                e("cec08784", "Tällä laskulla on jo enimmäismäärä affiliaatteja."),
                e("ab70828f", function (a) {
                    return "Lisää @" + a.screenName;
                }),
                e("d49b389f", "täällä"),
                e("b9e4bf55", "Lue lisää"),
                e("hc4703a9", "Lue lisää"),
                e("fa0ffaeb", "Lue lisää"),
                e("jf351704", "Jatkaaksesi sinun on päivitettävä affiliaattien enimmäismäärää laskulla."),
                e("ia5a6a40", "Pääset alkuun syöttämällä maksutietosi."),
                e("d40d1cc0", "Jatkaaksesi sinun on suoritettava maksu Stripen kautta."),
                e("c4a5f614", "Lisää maksutiedot"),
                e("fa2a280a", "Päivitä lasku"),
                e("i7b2f08e", "Tervetuloa Varmennettuihin organisaatioihin"),
                e("g4e18b84", "Affiliaattirajasi on täyttynyt"),
                e("cbe23239", function (a) {
                    return "Yli " + a.affiliatesCount + " affiliaatin ostotilauksille.";
                }),
                e("fc1f43d0", "Muodosta lasku"),
                e("g8881c78", "Siirry maksamaan"),
                e("g59f8506", "Huomaa: Tileille, joiden ei ole mahdollista saada varmennusta yrityksenä tai viranomaisena, ei palauteta maksua."),
                e("a310e476", "Suora"),
                e("fde6cf98", "Pääset heti Varmennetuksi organisaatioksi."),
                e("fdfbfcb0", "Laskutus"),
                e("f45d02e8", "Jotain meni vikaan tilauksesi vahvistuksessa. Yritä lähettää uudelleen aktivointisähköpostista käsin."),
                e("a1c566c0", "Jotain meni vikaan tilauksesi vahvistuksessa. Lähetä tietosi uudelleen."),
                e("f5a1c6ac", "Tilaukset eivät ole saatavana alueellasi"),
                e("ef7ae9cd", "Lue lisää"),
                e("d3c6b8c9", "Lue lisää"),
                e("fafe5b9f", function (a) {
                    return "Tilaa · " + a.price + " per " + a.interval;
                }),
                e("f2ae1d63", "ostajien käyttöehdot"),
                e("ie8759c5", "palvelun ostoehdot"),
                e("d842dd7b", function (a) {
                    return "Kasva nopeammin X:ssä ja hanki " + a.credit + " ilmainen mainoskrediitti";
                }),
                e("fcfb696e", "⁺ Mainoskrediitti tarjolla rajoitetun ajan."),
                e("f5b98d62", function (a) {
                    return "joka " + a.interval;
                }),
                e("ed7b9984", function (a) {
                    return "joka " + a.interval;
                }),
                e("da11a2d7", function (a) {
                    return "Jopa " + a.creditAmount + " saldoa mainontaan⁺";
                }),
                e("a6c45ede", "Sisältää:"),
                e("e9aa43dc", "Orgaaniset työpaikkailmoitukset"),
                e("i1266238", "Työpaikkailmoitukset"),
                e("e8a4ea7a", "Priority-tuki"),
                e("j99e2f4d", function (a) {
                    return a.price + " / " + a.interval;
                }),
                e("bb21a170", "Vaihda tilaus"),
                e("b0dcc4dc", "Tilisi odottaa jo nyt tason vaihtoa."),
                e("f3aef4ca", "Aktiivista tilausta ei löytynyt"),
                e("h802e65e", "Tilauksen päivitys epäonnistui. Yritä uudelleen. Tämä ei vaikuttanut nykyiseen tilaukseesi."),
                e("c5269eb0", "Tämä on aktiivinen tilauksesi."),
                e("c578c4ca", "Nykyinen tilaus"),
                e("i5d19147", "Uusi tilaus"),
                e("b025ff5f", "täällä"),
                e("d6b932d4", "Maksuton kokeilu käynnissä"),
                e("b0efe690", "Jatka Basic-tasolla"),
                e("g5f9cdaa", "Vahvista tason muutos"),
                e("j21911de", "Haluatko jatkaa Basic-tasolla vai säilyttää täydet käyttöoikeudet?"),
                e("b59dec9e", "Olet vaihtamassa maksuttoman Full Access ‑kokeilun Basic-tilaukseen."),
                e("e5ff0e1e", "Tämän muutoksen myötä:"),
                e("ca004c80", "Full Access ‑ominaisuudet, kuten affiliaatit, eivät enää ole käytettävissä."),
                e("fae108ee", "Kokeilun aikana lisäämäsi affiliaatit menettävät Premium+-etunsa ja tuen."),
                e("d47c0c7c", "Kuka olet?"),
                e("hbd31720", "Valitse itsellesi sopiva tilaus:"),
                e("c75a9386", "Lue lisää aiheesta"),
                e("b916b258", "ja"),
                e("ic6012ea", "Olen yksilö"),
                e("d8e618ce", "Yksilöille ja sisällöntuottajille"),
                e("dcbccede", "Edustan organisaatiota"),
                e("f44ce884", "Yrityksille, viranomaisille ja nonprofit-organisaatioille"),
                e("dece6c60", "Organisaation nimi"),
                e("c4c1b600", "Organisaation sähköpostiosoite"),
                e("b1e0aec0", "Organisaation @tunnus"),
                e("c42d5f4a", "Affiliaattien lukumäärä"),
                e("fca5f04b", function (a) {
                    return "Voit ostaa enintään " + a.affiliatesCount + " affiliaattia, ja tiliäsi veloitetaan lukumäärän mukaan.";
                }),
                e("dca6b3ac", "Anna laskutustiedot"),
                e("c97ad52a", "Päivitä lasku"),
                e("b36f0fd4", "Valitse, montako affiliaattia tarvitset organisaatiollesi."),
                e("b4871f4f", "tätä kautta"),
                e("b633d19e", "Kiitos"),
                e("f713d3e2", "Hakemuksesi on vastaanotettu ja se on nyt arvioitavana."),
                e("e11d5e1a", "Saat käyttöösi kaikki Premium-etuudet, mutta organisaatiosi ei saa kultaista tai harmaata varmennusmerkkiä etkä voi lisätä affiliaattitilejä, ennen kuin tili on hyväksytty."),
                e("d83617cc", "Tilisi tarkistetaan."),
                e("afb30564", "Saatamme pyytää sinulta lisätietoja ennen tilin hyväksymistä."),
                e("gdd3fa68", "Kun tilisi on tarkistettu ja hyväksytty, se merkitään heti varmennetuksi ja voit alkaa kutsua ja lisätä affiliaatteja."),
                e("e6389996", "Jos tili ei saa hyväksyntäämme, suorittamaasi maksua ei palauteta."),
                e("a889b460", "Maksu onnistui"),
                e("d1c886dc", "Seuraavaksi: Lataa ja varmenna dokumentit"),
                e("b13e9454", "Hakemuksesi ei vielä ole valmis. Toimita vaaditut dokumentit. Siihen menee vain 10 minuuttia."),
                e("e6b0965a", "Tilauksesi"),
                e("a1b58798", "Tarkista tilauksesi alla"),
                e("b651c7d7", function (a) {
                    return "Affiliaatti" + n(a.count, "", "a") + " x " + a.count;
                }),
                e("ec5e9c54", "Perustilaus"),
                e("e16093fc", "Yhteensä kuukaudessa"),
                e("ce4acef6", "Yhteensä vuodessa"),
                e("f4db2df0", "Tilauksesi ei tule aktiiviseksi ennen laskun maksamista."),
                e("b9e0d614", "Affiliaattien enimmäismäärä on päivitetty laskulle."),
                e("a45c9596", "Laskusi on muodostettu."),
                e("e4e5532a", "Alennus annettu"),
                e("b557f073", function (a) {
                    return "Jokin meni vikaan Stripe-laskutietojasi noudettaessa. Jos ongelma jatkuu, ota yhteys tukeen osoitteessa " + a.supportEmail + ".";
                }),
                e("e8c366ce", "X:n ostajien käyttöehtoihin"),
                e("ee86d380", "Organisaation tiedot"),
                e("b9c9ccca", "Koko nimesi."),
                e("c7e818de", "Työsähköpostiosoitteesi"),
                e("i60d7542", "Organisaation verkkosivusto"),
                e("b92f9dee", "Organisaation tyyppi"),
                e("f14d7866", function (a) {
                    return "" + a.screenName;
                }),
                e("e63bf39d", "Lue lisää"),
                e("f09630ff", "täältä"),
                e("eb043b72", "Hakemus käsiteltävänä"),
                e("a9ac4602", "Hakemuksesi Varmennettuihin organisaatioihin on yhä käsiteltävänä. Yritä myöhemmin uudelleen."),
                e("c5af3e12", "Tarjous voimassa rajoitetun ajan. Krediitit eivät siirry jaksolta toiselle."),
                e("e18d6fd6", "Mainoskrediittisi"),
                e("if435d1a", "Olet käyttänyt kaikki tässä kuussa käytettävissäsi olevat krediitit. Seuraava krediitti tulee tilillesi seuraavan tilausmaksusi yhteydessä"),
                e("af6704d7", "täällä"),
                e("b293c6b4", "Verified Premium Support"),
                e("e9e9ca58", "Käytettävissä"),
                e("cf2ba3a2", "Mainostilin tunnus"),
                e("gd7d051c", "Ota käyttöön"),
                e("f391c800", "Mainostilin tunnus on pakollinen"),
                e("ja116d2c", "Mainostilin tunnus ei kelpaa"),
                e("hf037537", function (a) {
                    return "Tämä krediitti tulee käyttöösi " + a.startDate;
                }),
                e("d0b58c01", function (a) {
                    return "" + a.days;
                }),
                e("e49cb8a7", function (a) {
                    return "" + a.remainingAmount;
                }),
                e("gd03b494", "Miten käytät mainoskrediittejä"),
                e("h1f36d3e", "Pääset käyttämään Varmennettujen organisaatioiden mainoskrediittiäsi suoritettuasi seuraavat vaiheet:"),
                e("a6519ffc", "Jos olet mainostanut ennen"),
                e("ibc9654a", "Jos olet uusi mainostaja"),
                e("d3710c76", "Jos haluat käyttää krediittiäsi affiliaattitiliin"),
                e("d60a8f14", "Mainosta X:ssä"),
                e("fe66e4a8", "X Ads Manager"),
                e("b3ca0108", "X Ads on apuna, kun haluat levittää sanomaasi laajalle."),
                e("g3754d57", "täältä"),
                e("i615ad63", "täältä"),
                e("a3ba48b9", "tänne"),
                e("ca3c633a", "Mainoskrediitit"),
                e("ha843c96", "mainontaa"),
                e("dd0f3b08", "mainontaa"),
                e("c9fad534", "Ei krediittejä"),
                e("a211b11e", "Aktivoitavia krediittejä ei ole saatavilla"),
                e("f2011db1", function (a) {
                    return a.couponAmount + " käytetty " + a.usedAmount + " kupongista";
                }),
                e("ae37e25c", "tuntematon summa"),
                e("i1407e15", function (a) {
                    return "Käytetty mainostilillä " + a.accountId;
                }),
                e("id4359bf", function (a) {
                    return "Vanhentui " + a.when + " mainostilillä " + a.accountId;
                }),
                e("f89af915", function (a) {
                    return "Vanhentui " + a.when;
                }),
                e("c1b5e1ed", function (a) {
                    return "Vanhentuu " + a.when + " mainostilillä " + a.accountId;
                }),
                e("e8d8a2a9", function (a) {
                    return "Vanhentuu " + a.when;
                }),
                e("i3884c1f", function (a) {
                    return "Käytettävissä " + a.when;
                }),
                e("b070acf4", "Käytettävissä pian"),
                e("ace946c4", "Aktivoi kuponki"),
                e("b0b02e37", function (a) {
                    return "Tämä kuponki käytettiin mainostiliin, jonka tunnus on " + a.accountId;
                }),
                e("f520ee22", "Mainostilin tunnus"),
                e("df96ca56", "Muu tili"),
                e("b5566402", "Tunnuksessa on vain kirjaimia ja numeroita."),
                e("eb160d07", "Ads Managerin tilinvalitsimesta"),
                e("e016ad32", "Vain luku -tila"),
                e("d7ab194e", "Osa varmennettujen tilien ominaisuuksista saattaa olla vain luku -tilassa sen aikaa, kunnes tilauksesi on päivittynyt."),
                e("g25d851e", "Mainostilit"),
                e("de7fef84", "Ota yhteys asiakastukeen saadaksesi apua tilin kanssa"),
                e("ff1321b6", "Määritykset on tehty ja tili on nyt aktiivinen"),
                e("c1205320", "Aktivoi mainostili lisäämällä tilille luottokortti"),
                e("c0343c0a", "Edellinen maksu epäonnistui. Tarkista tilin maksutapa"),
                e("j56e34a4", "Ota yhteys asiakastukeen saadaksesi apua tilille kirjautumiseen"),
                e("gef920f2", "Tilin aktivoimiseksi on ensin laitettava asetukset kuntoon"),
                e("b68dd4d8", "Sinulla ei ole käyttöoikeutta tähän tiliin. Pyydä apua ylläpitäjältä"),
                e("d637962c", "Sinulla ei ole mainostiliä"),
                e("dd087ae0", "Tee tilin määritykset osoitteessa ads.x.com"),
                e("i3d7dd02", "Mainostili on valmiina työpaikkailmoituksia varten"),
                e("cc8f8516", "Perusta mainostili työpaikkojen mainostamiseen"),
                e("b4f117b8", "Sinulla ei ole käyttöoikeutta työpaikkailmoitus-mainostiliin"),
                e("b7347cf4", "Perusta mainostili työpaikkojen mainostamiseen"),
                e("h7d03a2a", "Lisää avoin työpaikka rekrytoinnin hallintapaneelissa"),
                e("cd5aeec6", "Luo mainostili"),
                e("ged51d2e", "Luo mainostili"),
                e("gcfa25e6", "Organisaatiollasi ei ole käyttövalmiita mainostilejä. Perusta mainostili osoitteessa ads.x.com."),
                e("g76fb922", "Uusi tili"),
                e("db0a69e7", function (a) {
                    return "Mainostilisi (" + a.adAccountId + ") on uusi. Laita määritykset kuntoon Ads Managerissa aktivoidaksesi sen.";
                }),
                e("c7bad5cc", "Määritä tili"),
                e("g8c563c0", "Tarvitset käyttöoikeuden"),
                e("f6f29b17", function (a) {
                    return "Sinulla ei ole käyttöoikeutta mainostiliin (" + a.adAccountId + "). Pyydä ylläpitäjää lisäämään sinut tilille Ads Managerissa.";
                }),
                e("a15bb840", "Maksutapa tarvitaan"),
                e("j4e981d9", function (a) {
                    return "Mainostilisi (" + a.adAccountId + ") on melkein valmis käyttöön. Aktivoi se lisäämällä maksutapa tiliin. Tähän tiliin liittämäsi krediitit käytetään ensin, ennen kuin sinulta veloitetaan maksua.";
                }),
                e("af142910", "Maksu epäonnistui"),
                e("a9635acf", function (a) {
                    return "Mainostilisi (" + a.adAccountId + ") on ollut aktiivinen, mutta viimeisin maksu epäonnistui. Aktivoi se uudelleen vaihtamalla tämän tilin maksutapa.";
                }),
                e("d1cca474", "Muuta maksutapaa"),
                e("fe8b969a", "Asiakastuki auttaa"),
                e("i8aa0b91", function (a) {
                    return "Tämä mainostili (" + a.adAccountId + ") tarvitsee asiakastuen apua, jotta saat sen aktivoitua. Muista ilmoittaa mainostilin tunnus viestissäsi. Pyyntösi priorisoidaan.";
                }),
                e("d82c2074", "Pyydä apua"),
                e("ad37d536", "Käyttäjätunnuksen siirron ehdot"),
                e("e760074a", "Hanki uinuva käyttäjätunnus itsellesi tai vaihda omiasi"),
                e("j003ef92", "Osta X:ltä käyttämättömiä käyttäjätunnuksia itsellesi tai affiliaateillesi tai vaihda jo omistamiasi käyttäjätunnuksia."),
                e("d57a8e42", "Tämä palvelu on ainoastaan Varmennetuille organisaatioille ja siitä veloitetaan käyttäjätunnuskohtainen lisäveloitus alkaen 10 000 USD."),
                e("h9367bd6", "Tee käyttäjätunnustiedustelu"),
                e("a6a62e7e", "Käynnistä prosessi vastaamalla muutamaan tukirobotin esittämään kysymykseen."),
                e("e5912290", "Käyttäjätunnustiedustelu aloitetaan"),
                e("c2e24f66", "Lue tukiviestit näytön alakulmasta."),
                e("c94f514e", "Käyttäjätunnustiedustelu aloitettu"),
                e("cf60d152", "Täytä lyhyt kysely chat-ikkunassa käyttäjätunnustiedustelua varten."),
                e("f06b124e", "Usein kysyttyä"),
                e("h677fdcc", "Miten käyttäjätunnukset hinnoitellaan?"),
                e("a55b39aa", "Pääasiallisesti merkkimäärän ja sanan yleisyyden perusteella. Hinnat alkavat 10 000 Yhdysvaltain dollarista ja korkeimmat ovat yli 500 000 USD."),
                e("d46bcb3a", "Mistä tiedän, onko käyttäjätunnus ostettavissa?"),
                e("c6bcf72c", "Lähetä meille tiedustelu käyttäen Aloita tästä ‑painiketta, niin ilmoitamme, onko toivomasi tunnus saatavilla."),
                e("d478604c", "Voinko ostaa käyttäjätunnuksen toisen yrityksen nimissä?"),
                e("c09f8cd2", "Et. Yritykset voivat ostaa käyttäjätunnuksia vain yritykseen aidosti sidoksissa olevien affiliaattien nimissä."),
                e("d814f020", "Millainen myyntiprosessi on? Kauanko siihen menee?"),
                e("f600b6f0", "Pyydä käyttäjätunnuksen hankintaa tai omiesi vaihtamista valitsemalla Aloita tästä. Vastaamme kolmen työpäivän kuluessa kertomalla, onko tunnus saatavilla ja mikä sen hinta olisi. Maksun jälkeen siirrämme käyttäjätunnuksen valitsemallesi tilille 1–2 päivän kuluessa. Tai voimme siirtää vanhan käyttäjätunnuksen toiselle omistamallesi tilille."),
                e("i8debc4a", "Saanko alennusta ostaessani useamman käyttäjätunnuksen kerralla?"),
                e("c5199f3c", "Kyllä, riippuen ostettavien käyttäjätunnusten lukumäärästä ja sopimuksen kokonaisarvosta."),
                e("c20f923e", "Minulla on tavaramerkki – vaikuttaako se asiaan?"),
                e("b2fd4c15", "tavaramerkkikäytännöstämme"),
                e("a690746e", "Saa Priority-tukea"),
                e("he2dc9b0", "Ota meihin yhteyttä lähettämällä organisaation käyttäjätunnus ja pyynnön tiedot."),
                e("e5e6479e", "Lähetä meille sähköpostitse organisaatiosi käyttäjätunnus ja tiedustelusi saadaksesi avun nopeimmin."),
                e("ica8392a", "Kun saamme pyyntösi, arvioimme ja priorisoimme sen saapumisjärjestyksessä."),
                e("ed37e36e", "Tärkeää: Organisaatiosi käyttäjätunnuksen puuttuminen tai henkilökohtaisen sähköpostiosoitteen käyttö saattaa viivästyttää pyynnön käsittelyä."),
                e("eb0d4fe2", "Luo palsta"),
                e("e93d2f8a", "Räätälöi oma käyttökokemuksesi lisäämällä erilaisia palstoja, kuten:"),
                e("e8203d1e", "Haut"),
                e("d82fd532", "Yksityisviestit"),
                e("c87babee", "Ja paljon muuta"),
                e("f1990aa4", "Järjestä palstat dekkien avulla"),
                e("ib9c9a54", "X Pro mahdollistaa usean samanaikaisen työpöydän. Häivytä melu ja keskity niihin aiheisiin ja työkaluihin, joita kulloinkin tarvitset."),
                e("fb5ac13e", "Siirrä palstaa"),
                e("bd545b7e", "Napsauttamalla näitä pisteitä voit vetää ja pudottaa palstan mihin tahansa dekissä."),
                e("a98513b6", "Räätälöi palstoja"),
                e("c8759e44", "Viemällä hiiren palstan yläreunaan voit:"),
                e("a93e96c8", "Järjestää julkaisut (suosituin tai uusin ylimpänä)"),
                e("df300378", "Muuttaa palstan kokoa"),
                e("aa263910", "Käyttää edistynyttä hakua"),
                e("ab3915aa", "Vinkit ja asetukset"),
                e("ia03837a", "Täällä voit:"),
                e("f0bd595c", "Hallitse dekkejä"),
                e("a74e9464", "Muuta näytön asetuksia"),
                e("h254eb92", "Tutustu pikanäppäimiin"),
                e("j6e669a0", "Toista tutustumiskierros"),
                e("c15802be", "Julkaisuja lähetetään…"),
                e("e5506950", "Dekit"),
                e("b1bd9a8a", "Uusi dekki"),
                e("cf1a138f", function (a) {
                    return "Vaihdettu dekkiin - " + a.title;
                }),
                e("g9c2da24", "Avaa ikkunan uuden dekin luontia varten"),
                e("hcef6b72", "Avaa ikkunan dekkien hallintaa varten"),
                e("a77dbc7a", "Muokkaa dekkiä"),
                e("a154a293", function (a) {
                    return "Dekki " + a.deckName + " valittu";
                }),
                e("a77bbe9d", function (a) {
                    return "Valinta poistettu dekistä " + a.deckName;
                }),
                e("ha2aae72", "Avaa ikkunan valitun dekin hallintaa varten"),
                e("hf59ffc8", "Navigointipalkki"),
                e("dd6142d7", "Pro"),
                e("d69fc67a", "Lisää sarake"),
                e("ad61a830", "Laadi julkaisu"),
                e("c44f5114", "Viestiasetukset"),
                e("c71066fe", "Katso esittely"),
                e("b452e6c2", "Miten sinulla on sujunut?"),
                e("j7737bc2", "Kiitos, kun olet käyttänyt X Prota. Haluaisimme kuulla, miltä se on tähän mennessä tuntunut."),
                e("e8038d64", "Mielipiteesi on meille tärkeä. Se auttaa meitä parantamaan käyttäjäkokemusta."),
                e("fce3c5ce", "Anna palautetta"),
                e("ha39df38", "Henkilökohtainen"),
                e("ja7b7d1a", "Meillä on juuri nyt yhteysongelmia. Tekemäsi muutokset eivät ehkä tallennu."),
                e("ad5df1d7", function (a) {
                    return "Vaihdettu sarakkeeseen - " + a.title;
                }),
                e("ba7bd92e", "Sarakkeen asetukset"),
                e("cc4ff736", "Jaetaan sarake"),
                e("g684a93a", "Tähän sarakkeeseen tekemäsi muutokset näkyvät kaikille sitä katsoville."),
                e("a6bbdc1c", "Vain katselu"),
                e("f6e88162", "Labs"),
                e("e6df688c", "Vaihtoehdot"),
                e("e3f2b93a", "Näytä tai piilota tiedot sarakkeesta."),
                e("db257758", "Median esikatselukoko"),
                e("if2fbab8", "Vastausten median esikatselukoko"),
                e("he517d52", "Nimeä sarake uudelleen"),
                e("f6eb2cfe", "Sarakkeen nimi"),
                e("d6d39c84", "Sarakkeilla on oltava nimi."),
                e("e5c06aee", "Sarakkeen leveys"),
                e("af6a4368", "Nimeä tämä keskustelu uudelleen ja katso, keitä siinä on mukana."),
                e("cdeac5ee", "Yksityisviestien asetukset"),
                e("fda7ee26", "Hallitse, kuka voi lähettää sinulle viestejä."),
                e("c4ec8620", "Sisällytä"),
                e("d5f29cd4", "Sulje pois"),
                e("d01a62f8", "Aika ja paikka"),
                e("d614afc8", "Tykkäykset, vastaukset ja uudelleenjulkaisut"),
                e("fb2bbc7a", "Julkaisun sisältö"),
                e("a589add2", "Mikä tahansa näistä sanoista (OR)"),
                e("d2f8dc8a", "Julkaisut tietyltä henkilöltä"),
                e("e37201ec", "Henkilölle vastaaminen"),
                e("e035e056", "Henkilön maininta"),
                e("ef2d4092", "Sulje pois sanoja"),
                e("d59f395e", "Näyttökielesi"),
                e("g67cd3f2", "Valitse kielet"),
                e("c85f9b9c", "Vaihda kieltä"),
                e("b5148188", "Enemmän kuin"),
                e("hf369320", "Vähemmän kuin"),
                e("f4dce7b6", "Kuinka monta"),
                e("ddafa9a2", "Näytä vaihtoehtoja"),
                e("c6be8432", "Toiminnan taso"),
                e("e60b9fac", "Näytä alkuperäisjulkaisut"),
                e("eb441fee", "Näytä uudelleenjulkaisut"),
                e("e920e6dc", "Näytä lainaukset"),
                e("g9580526", "Näytä vastaukset"),
                e("i73cbb5c", "Voit lisätä hakuun vain yhden Listan. Tässä haussa käytetään vain ensimmäistä Listaa."),
                e("c765315d", function (a) {
                    return "Anna " + a.listHandleListNameFormat + " tai Listan tunnus";
                }),
                e("a153fbf2", "Listan käyttö haussa"),
                e("bf0d5a7c", "Voit lisätä hakuun yhden Listan."),
                e("c6e8759a", "Lisää Lista tässä muodossa:"),
                e("dd9daca8", "Korvaa Listan nimessä pisteet viivalla (-)."),
                e("cd71b264", "Lue lisää Listoista."),
                e("ca23d726", "Kuvat ja videot"),
                e("f1fa97a8", "Lähetykset"),
                e("c0bab0ba", "Näytä vain mediaa sisältävät julkaisut"),
                e("g9512656", "Näytä vain varmennettuja tilejä"),
                e("b967e296", "Näytä vain seuraamasi henkilöt"),
                e("gc51a2ac", "Milloin tahansa"),
                e("d42a4916", "Äskettäin"),
                e("a2229a06", "Aikavälillä"),
                e("c1fe6156", "Alkamisaika"),
                e("cbc02622", "Päättymisaika"),
                e("b666573c", "Hae sijaintia"),
                e("cf260344", "Julkaisut ryhmässä"),
                e("j5805302", "säteellä"),
                e("e592ab3c", "Saat parempia tuloksia, kun annat hakusijainnin ja maan tai osavaltion."),
                e("e8843b5d", function (a) {
                    return a.meters + " min";
                }),
                e("g9e6a4e5", function (a) {
                    return a.kilometers + " km";
                }),
                e("ec688a09", function (a) {
                    return "Tämä estää käyttäjää @" + a.screenName + " lisäämästä sinua millekään listalleen, tämä mukaan lukien.";
                }),
                e("iad54d54", "Tyhjennä kirjanmerkit"),
                e("g4d581a2", "Tyhjennä tämä ja kaikki kirjanmerkkikansiot"),
                e("fb14aebe", "Tyhjennä kirjanmerkit"),
                e("jf748f40", "Tyhjennetäänkö kaikki kirjanmerkit?"),
                e("d63a211a", "Tätä ei voi kumota, ja olet poistamassa kaikki kirjanmerkkeihin lisätyt julkaisut."),
                e("a16ebc1a", "Aloita uusi keskustelu"),
                e("a1ff1890", "Tämä tyhjentää nykyisen keskustelun."),
                e("ab352ee0", "Näytä uusimmat julkaisut"),
                e("c004c4d6", "Tyhjennä julkaisut"),
                e("fc702822", "Tyhjennä julkaisut ja näe uusimmat julkaisut niiden ilmestyessä."),
                e("a2c59056", "Ennen kuin tyhjennät sarakkeen..."),
                e("d31bdbbe", "Vaihda uusimpiin julkaisuihin"),
                e("dec3722c", "uusimpiin julkaisuihin"),
                e("g33b8c04", "Laadi kopio"),
                e("de2c3008", "Kopioi sarake."),
                e("a7c01ce0", "Muuta nimeä tai poista kansio"),
                e("e52e4c82", "Muuta sijainti- ja personointiasetuksia."),
                e("f4d052a4", "Grok (normaalitila)"),
                e("fa97c1c6", "Grok (hupailutila)"),
                e("efb37dec", "Tila"),
                e("h0064892", "Normaali"),
                e("ad86db50", "Luo dekki"),
                e("hb70ef30", "Luo tähän hakuun perustuva dekki"),
                e("j8a945cc", "Suosituimmat julkaisut"),
                e("f3a4a654", "Varmennetut julkaisut"),
                e("c8da0c42", "Kuvat ja videot"),
                e("d2cf6f74", "Premium-kumppanit"),
                e("c9b39e70", "Siirrä"),
                e("b9ea5f7c", "Siirrä sarake toiseen dekkiin."),
                e("g8b6d450", "Ilmoitusasetukset"),
                e("dd703fbd", function (a) {
                    return "Poista sarake - " + a.title;
                }),
                e("d9d11fc6", "Poistetaanko julkinen sarake?"),
                e("h17ada6c", "Julkisen sarakkeen poistaminen aiheuttaa sen, että seuraajat menettävät pääsyn sarakkeeseen."),
                e("hb388fe8", "Poista sarake"),
                e("c1343ad6", "Muunna tämä hakusarakkeeksi."),
                e("e7a12d72", "Muunnettu hakusarakkeeksi"),
                e("f29424f0", "Peru muutos"),
                e("h5ff85a2", "Jaa sarake"),
                e("d32058ba", "Tee sarakkeesta julkinen, jotta sen voi jakaa."),
                e("c926a6ca", "Tekemäsi muutokset näkyvät kaikille Sarakkeen seuraajille."),
                e("g0175ca2", "Sarakevalitsin"),
                e("a800727c", "Palaa sarakevalitsimeen"),
                e("f318bc40", "Luo uusi kansio"),
                e("e300a9f0", "Luo kirjanmerkkikansio"),
                e("j341c67c", "Kansioilla on oltava nimi."),
                e("d00586a6", "Tämän sarakkeen lataus ei onnistu. Kokeile luoda uusi sarake."),
                e("d0d8277e", "Sarakkeen omistaja poisti sarakkeen tai muutti sen yksityiseksi."),
                e("j08fd6fe", "Yhteisösi"),
                e("b569a1fa", "Palaa Yhteisöihin"),
                e("i176bfd2", "Tutustu listoihin"),
                e("a57c3292", "Löydä uusia listoja"),
                e("f59f87dc", "Löydä toisten käyttäjien listoja"),
                e("a5d70676", "Listat, joilla olet"),
                e("e377790a", "Palaa kohtaan Listat"),
                e("e952b8c3", function (a) {
                    return "Käyttäjän @" + a.userScreenName + " listat";
                }),
                e("bc24f834", "Palaa kohtaan Löydä toisten käyttäjien listoja"),
                e("ee11d084", "Hae profiileista"),
                e("c300f3bc", "Lisää sarakkeita"),
                e("bd744e9a", "Täytä haulla"),
                e("i10d4124", "Aloita tyhjästä"),
                e("jbff8606", "Lähetä tiedustelu"),
                e("dbd8a566", "Kaikkia julkaisuluonnoksia ei saatu poistettua."),
                e("c82be5a8", "Valitsemasi julkaisuluonnokset poistettiin."),
                e("ad84af68", "Ladataan julkaisuluonnoksia"),
                e("ef97fb3a", "Sinulla ei ole julkaisuluonnoksia"),
                e("f26ece12", "Kun niitä on, löydät ne täältä."),
                e("a4911812", "Julkaisuluonnoksia poistetaan"),
                e("b49be1ca", "Hylkää julkaisuluonnokset"),
                e("ca91dc76", "Tätä ei voi peruuttaa. Menetät julkaisuluonnokset."),
                e("b38b254a", "Joidenkin ajastettujen julkaisujen poisto ei onnistu."),
                e("he2e3cc4", "Valitsemasi ajastetut julkaisut poistettiin."),
                e("jf9faee4", "Ladataan ajastettuja julkaisuja"),
                e("aa1cfd48", "Sinulla ei ole ajastettuja julkaisuja"),
                e("b2a70dbe", "Poistetaan ajastetut julkaisut"),
                e("a07bb1b0", "Hylkää ajastetut julkaisut"),
                e("id78e802", "Tätä ei voi perua. Menetät ajastetut julkaisut."),
                e("d9a75e16", "Valitse yksi"),
                e("aa030cd4", "Näe suositellut julkaisut ensin."),
                e("c0d2d4aa", "Etusivun aikajana"),
                e("ecbbbb90", "Katsele omia listojasi tai muiden listoja."),
                e("c351229c", "Näytä Yhteisöt, joihin kuulut."),
                e("a2d1df82", "Löydä etsimäsi."),
                e("d5387d8a", "Pysy ajan tasalla omista viesteistäsi."),
                e("e738198c", "Katso, mikä puhuttaa X:ssä."),
                e("ifb8c91e", "Löydä profiili ja katso, mitä henkilö on viime aikoina tuuminut."),
                e("aa0525d0", "Profiilit"),
                e("cb7844a6", "Pysy kärryillä ilmoituksista ja maininnoista."),
                e("e64da55e", "Katso ajastetut julkaisusi."),
                e("h9659832", "Näe julkaisuluonnoksesi."),
                e("f1b6535e", "Julkaisuluonnokset"),
                e("a24add8a", "Näe kirjanmerkkeihin lisätyt julkaisut."),
                e("ic61c5fc", "Vieritä ylös"),
                e("gb19f215", function (a) {
                    return "Sarake - " + a.title;
                }),
                e("g7751b34", "Sulje pakka"),
                e("b94fa48c", "Tyhjennä pakka"),
                e("dd3dc3cc", "Palaa pakassa"),
                e("bc7acfd0", "Jaettu sarake"),
                e("a6587d95", function (a) {
                    return "Järjestä sarake uudelleen - " + a.title;
                }),
                e("fb071dea", "Siirrä saraketta"),
                e("c77a6327", function (a) {
                    return "Avaa sarakevaihtoehdot - " + a.title;
                }),
                e("h53c41f0", "Sarakevaihtoehdot"),
                e("f7bbbb6d", function (a) {
                    return "Sulje sarakevaihtoehdot - " + a.title;
                }),
                e("eee9f83e", "Sulje sarakevaihtoehdot"),
                e("a443bbc0", "Sulje haku"),
                e("c8b12c8f", function (a) {
                    return "Määritä sarakkeen sisältö - " + a.title;
                }),
                e("fe048090", "Näytä yhteenveto"),
                e("e57560b4", "Piilota yhteenveto"),
                e("fb087db0", "Luo erillinen sarake"),
                e("aa128cd8", "Lisää uutena sarakkeena"),
                e("aa4f00c6", "Jaa dekki"),
                e("fdf97052", "Siirry dekkivalintoihin"),
                e("ed427868", "Tehdäänkö dekistä julkinen?"),
                e("gecc71a2", "Jos haluat jakaa dekin, tee siitä ensin julkinen."),
                e("f0653866", "Jaetaan dekki"),
                e("b158400a", "Ohita tämä vaihe"),
                e("h15afbce", "Järjestä itsesi näköiseksi"),
                e("ibe6be32", "Kustomoi oma X Pro -käyttökokemuksesi: valitse sarakkeen leveys, väri, tekstin ja median koko mieltymystesi mukaan."),
                e("e28eb008", "Avaa näyttöasetukset"),
                e("dc8b86e0", "Lisätään seuraavaksi sarakkeita"),
                e("ee28603e", "Tuo omat sarakkeet"),
                e("dad15d22", "Säästä aikaa tuomalla olemassa olevat Haku-, Lista- ja Profiili-sarakkeesi. Et voi tuoda näitä enää myöhemmin."),
                e("j85b4522", "Tai aloita nollasta"),
                e("hfd5ca12", "Hmm... sarakkeittesi tuonti ei onnistunut"),
                e("b855852a", "Vain Haku-, Lista- ja Profiili-sarakkeita voi tuoda. Lisää etusivu-sarake tuonnin sijaan."),
                e("dc6c806e", "Sarakkeittesi tuonti ei onnistunut"),
                e("a0dfe2f6", "X Pro on mukava tapa seurata useampaa aikajanaa helpossa käyttöliittymässä."),
                e("i8912d28", "Lisätään sarakkeita..."),
                e("ce0c0f34", "Sitten tutustutaan paikkoihin"),
                e("h36d2aa2", "Opi muutama kätevä niksi, joilla pääset alkuun."),
                e("fbaf9442", "Lisää aloitusdekki"),
                e("b354ea52", "Lisätään aloitusdekkiä..."),
                e("if195eb8", "Sarakkeita lisätään..."),
                e("ea07517c", "Sarake poistettu."),
                e("habced9e", "palauttaaksesi sarakkeen."),
                e("g4fcb4f8", "Sarake palautettu."),
                e("d4429cba", "Hmm...tätä dekkiä ei ole olemassa. Kokeile valita toinen."),
                e("g2c6e34a", "Hallitse sisällön kokoa, väriä ja taustaa."),
                e("bf2890a6", "Visuaalinen asteikko"),
                e("h098a550", "Sarakkeen oletusleveys"),
                e("ab248726", "Median oletusesikatselu"),
                e("jdaf161c", "Viestit-välilehti"),
                e("ge0fcfd0", "Osoitinaktivointikortit"),
                e("e1cab6e8", "Sovelletaanko muutoksia aiempiin palstoihin?"),
                e("ce2e487c", "Jos muutat kaikki palstat, jokainen palsta päivitetään kaikissa dekeissäsi. Jos valitset Ei, uudet asetukset pätevät vain tämän jälkeen luomiisi palstoihin"),
                e("fdbd90a6", "Kyllä, kaikkiin"),
                e("h8affe68", "Ei, vain uusiin"),
                e("f06885b6", "Sarakemedian kokovaihtoehdot"),
                e("e4bab2d0", "Sarakkeen leveysvaihtoehdot"),
                e("f0e71094", "Näytä viestit-välilehti"),
                e("aa25a5a6", "Viestit-välilehti löytyy näytön alalaidasta"),
                e("g3da3c90", "Näytä osoitinaktivointikortit"),
                e("b08a8656", "Näytä osoitinaktivointikortit, kun osoitin viedään interaktiivisen elementin päälle "),
                e("g9df1984", "Lisää dekki"),
                e("df77af70", "Valitse dekkiisi emoji"),
                e("ee7765ba", "Valitse emoji"),
                e("e0127c83", function (a) {
                    return "Muuta emojia " + a.emoji;
                }),
                e("hb8b6254", "Kuka tahansa pääsee julkiseen dekkiisi profiilistasi. Voit myös jakaa linkin siihen. Jos muutat mieltäsi, voit muuttaa sen takaisin yksityiseksi. Lue lisää"),
                e("gfbaf4e8", "Tätä dekkiä ei voi nyt muuttaa julkiseksi"),
                e("ae04848a", "Tämä dekki sisältää sarakkeita, jotka liittyvät X-tiliisi. Ne on poistettava, jotta voit tehdä tästä dekistä julkisen. Lue lisää"),
                e("d606207a", "Poista dekki"),
                e("h95cb00e", "Tämä dekki poistetaan pysyvästi. Poistoa ei voi kumota."),
                e("f50c9834", "Tämä dekki poistetaan pysyvästi. Jos poistat dekin, et voi enää palauttaa sitä."),
                e("cb861826", "Vaihda dekin paikkaa"),
                e("i5896b2b", function (a) {
                    return 'Muokkaa dekkiä "' + a.title + '"';
                }),
                e("ef602cab", function (a) {
                    return 'Poista dekki "' + a.title + '"';
                }),
                e("b44b9d83", function (a) {
                    return 'Irrota dekki "' + a.title + '"';
                }),
                e("je4a847f", function (a) {
                    return 'Kiinnitä dekki "' + a.title + '"';
                }),
                e("ad41be88", "Siirrä sarake dekkiin"),
                e("cb82860a", "Saraketta ei löydy"),
                e("icbecd02", "Lisää sarake"),
                e("fdf1a2c6", "Lisää dekki"),
                e("d25acc28", "Mitä siinä on?"),
                e("fe5df266", "Tehdäänkö sarakkeesta yksityinen?"),
                e("i3206148", "Julkisen sarakkeen muuttaminen yksityiseksi aiheuttaa sen, että seuraajat menettävät pääsyn sarakkeeseen."),
                e("c65d210c", "Tee sarakkeesta yksityinen"),
                e("j4d54f1e", "Käyttökelpoinen, reaaliaikainen työkalu X:n vakioasukkaille."),
                e("je0526a0", "Seuraa useita aikajanoja yhdellä näytöllä. Seuraa ja organisoi sisältöä ja ole reaaliajassa kontaktissa yhteisöihisi."),
                e("d128af54", "Rekisteröidy X Premiumiin"),
                e("bacd7195", function (a) {
                    return a.fullName + " (@" + a.screenName + ") X:ssä";
                }),
                e("e5b4aafa", "Internet-yhteytesi on katkennut."),
                e("g43c3b36", "Muodosta internet-yhteys jatkaaksesi."),
                e("hafe83ec", "Lopeta sovellus painamalla Sulje."),
                e("b2ec74fe", "sulje"),
                e("hf836e5f", function (a) {
                    return a.tweetText + " " + a.username + " " + a.screenName + " " + a.views + " näyttöä " + a.timeAgo;
                }),
                e("a7a90902", "Näytä silti"),
                e("cb0a3b5e", "Tässä julkaisussa voi olla mediaa, joka ei sovi herkille. Haluatko näyttää sen silti?"),
                e("a4eb1304", "Voit kirjautua takaisin sisään milloin vain."),
                e("b86c2e12", "Kirjaudu sisään hakeaksesi kaikesta X:n sisällöstä."),
                e("ia13bd7c", "näppäimistö"),
                e("f9fa40c8", "Valikoi X:n parhaat palat"),
                e("gb6a7f62", "Koodisi on vanhentunut. Jos haluat yrittää uudelleen, napsauta alta saadaksesi uuden koodin."),
                e("ge19602a", "Pyydä uusi koodi"),
                e("dd4ec2e8", "Kirjaudu X:ään alla olevassa osoitteessa tietokoneella tai mobiililaitteella ja anna tässä näkyvä koodi."),
                e("f4d7084c", "Kirjaudu X:ään jommallakummalla tavalla:"),
                e("ebc1accc", "Skannaa tämä QR-koodi"),
                e("a4742bc0", "Siirry alla olevaan osoitteeseen tietokoneella tai mobiililaitteella ja anna tässä näkyvä koodi."),
                e("f260dea2", "x.com/tvlogin"),
                e("h797e380", function (a) {
                    return "" + a.url;
                }),
                e("cf8eec84", function (a) {
                    return "" + a.url;
                }),
                e("g7ee7019", function (a) {
                    return "Kirjaudu sisään nähdäksesi videoita käyttäjältä " + a.name + ".";
                }),
                e("fb83778c", "Kirjaudu sisään nähdäksesi videoita tältä käyttäjältä."),
                e("dd4bbaea", "Näytettäviä videoita ei ole."),
                e("i71d6193", function (a) {
                    return "Ei näytettäviä videoita käyttäjältä " + a.name + ".";
                }),
                e("adb512f0", "Viimeaikaisia videoita"),
                e("bef78294", function (a) {
                    return "" + a.formattedCount;
                }),
                e("hda3bb87", function (a) {
                    return "seurattu" + n(a.count, "", "a");
                }),
                e("cd3f5206", "Seuraavaksi:"),
                e("c930299f", function (a) {
                    return "Tulossa " + a.count + ":";
                }),
                e("b2e9f19c", "Toista edellinen video"),
                e("de906774", "Nopeus"),
                e("caca839e", "Tekstitys"),
                e("b049f56c", "Laatu"),
                e("fa7169d8", "Voit ilmiantaa tämän sisällön alla olevassa URL-osoitteessa kannettavalla tai mobiililaitteella"),
                e("c973ec9c", "Tilin käyttäjätunnus"),
                e("e9670a81", function (a) {
                    return "@" + a.screenName;
                }),
                e("d0e1b720", "Sisällön URL-osoite"),
                e("a4ee9394", "Valkoihoinen"),
                e("a9f3474c", "Syaani"),
                e("i50b6538", "Purppuranpunainen"),
                e("jffeb664", "Punainen"),
                e("e375c2d0", "Mustaihoinen"),
                e("c2c5dea4", "Fontin väri"),
                e("ce71b3d0", "Fontti"),
                e("d2eb1582", "Oletus (Sans-serif)"),
                e("e684030e", "Arial (Sans-serif)"),
                e("jad3900c", "Times New Roman (Serif)"),
                e("e205f3a0", "Monospace (Sans-serif)"),
                e("d207d39a", "Tekstin läpikuultavuus"),
                e("a562039c", "Taustaväri"),
                e("h44e879e", "Taustan läpikuultavuus"),
                e("b843ced4", "Automaatio"),
                e("e30d2cea", "0,5x"),
                e("d030db62", "1,25x"),
                e("ga63a594", "1,5x"),
                e("f571bc5a", "1,75x"),
                e("d0284204", "2x"),
                e("b7d7f606", "Eteenpäin"),
                e("ee0f61ca", "Taaksepäin"),
                e("i2d14148", "Poista tykkäys"),
                e("a1eb471a", "Poista paheksunta"),
                e("e40051e8", "Poista kirjanmerkki"),
                e("g9ecf0e8", "Näytä vastaukset"),
                e("aa97ae7e", "TV-toiston säädöt"),
                e("ed170a6a", "Liukusäädin"),
                e("ee838ea0", "Aihetta seuraamalla saat personoidumman aikajanan ja käyttäjäkokemuksen X:ssä"),
                e("h85446ce", "Tätä selainta ei enää tueta."),
                e("e24d1fa6", "Siirry käyttämään tuettua selainta, jotta voit jatkaa x.comin käyttöä. Löydät luettelon tuetuista selaimista ohjekeskuksesta."),
                e("a138aeb2", "JavaScript ei ole käytettävissä."),
                e("d8e122c2", "Havaitsimme, että JavaScriptin käyttö on estetty selaimessasi. Salli JavaScriptin käyttö tai siirry käyttämään tuettua selainta, jotta voit jatkaa x.comin käyttöä. Lista tuetuista selaimista löytyy ohjekeskuksesta."),
                e("f1a9e3a2", "Näe uutisotsikot, politiikan ja musiikin trendit, tapahtumat, urheilutulokset ja maailman kärkiuutiset tuoreeltaan vähemmällä datankäytöllä."),
                e("bb402b62", "X Pro on kustomoitava koontinäyttö, jolla pysyt ajan tasalla."),
                e("ed617674", "360"),
                e("e23b20a0", "Peruuta"),
                e("a620fcf0", "Ladataan kuvaa"),
                e("e9e2064c", "Jokin meni pieleen, mutta älä huoli – syy ei ole sinun."),
                e("d7060c80", "Päivitä"),
                e("a0493514", "Yritä uudelleen"),
                e("ff3dd27c", "Oletus"),
                e("b554fcf4", "Vaalea"),
                e("j590b148", "Keskivaalea"),
                e("e7d4ee86", "Keskikoko"),
                e("ia423ebc", "Keskitumma"),
                e("a2cf0942", "Tumma"),
                e("j824dc06", "Hae emojeista"),
                e("fffb3384", "Emojeita ei löydy"),
                e("j3d20752", "Kokeile hakea jotakin muuta."),
                e("d67ad796", "Valitse oletusihonvärisi"),
                e("e6388bfa", "Tyhjennä kaikki"),
                e("j7c67eca", "Uusimmat"),
                e("da539d38", "Hakutulokset"),
                e("d95eb228", "Takaisin"),
                e("af8fa2ae", "Sulje"),
                e("ef8b2f54", "Lue diagrammi"),
                e("d567ceda", "vertikaali"),
                e("f7b30768", "pinottu"),
                e("hcd54328", "ryhmitelty"),
                e("affbaf62", "Lisää informaatiota"),
                e("c388d026", "OK"),
                e("ha20397c", "Helppokäyttöominaisuudet"),
                e("baf7a43c", "Esteettömyys"),
                e("e8f674ab", function (a) {
                    return "Tämä on " + a.chartType + " pylväsdiagrammi. Diagrammin otsikko on " + a.chartTitle + ". Siinä on yhteensä " + a.noOfCategories + " kategoriaa. Vähimmäisarvo on " + a.minValue + " ja enimmäisarvo " + a.maxValue + ". Tutustu kaavioon navigointiohjainten avulla.";
                }),
                e("d969327c", "Toista ääniversio"),
                e("d8cbbcd4", "Kuuntele diagrammin sisältö. Paina graafin kohtaa ”Toista ääniversio” tai paina ”A” kunkin datapisteen kohdalla kuullaksesi sen ääniversion"),
                e("dec1d7ef", function (a) {
                    return a.label + ", " + a.group + ", " + a.value;
                }),
                e("f765bead", function (a) {
                    return "nimeämätön tieto, " + a.group + ", " + a.value;
                }),
                e("idea1817", function (a) {
                    return a.label + ", " + a.value;
                }),
                e("fe94be6b", function (a) {
                    return "nimeämätön tieto, " + a.value;
                }),
                e("b15c0a18", "Hylätäänkö muutokset?"),
                e("aebf81c8", "Tekemiäsi muutoksia ei tallenneta."),
                e("aa744c1e", "Jatka muokkaamista"),
                e("fe04d89a", "Hylkää"),
                e("bb5d8cd2", "Kyllä"),
                e("dc33d78a", "Artikkelin kansikuva"),
                e("j190bf1a", "LIVE"),
                e("e3fcbdba", "Hylkää"),
                e("jc0b3a8c", "Kuvan kuvaus"),
                e("ia1d2e58", "Kirjoittaja tykkäsi"),
                e("h81f3036", "Artikkeli"),
                e("bed2945c", "lue kuvan kuvaus"),
                e("j2eea17a", "Seuraavan median sisältö saattaa olla arkaluonteista."),
                e("b05a39b2", "Näytä"),
                e("a7cd5cf4", "Video"),
                e("b6eb8f6a", "Lähetys"),
                e("dcc2b9b3", function (a) {
                    return "Toista " + a.locVideoType;
                }),
                e("hf4ffd4d", function (a) {
                    return "Toista suora " + a.locVideoType;
                }),
                e("f6e90cd7", function (a) {
                    return "Pituus " + a.hoursWord + " " + a.minutesWord + " " + a.secondsWord;
                }),
                e("e7d191ed", function (a) {
                    return "Alkaa: " + a.hoursWord + " " + a.minutesWord + " " + a.secondsWord;
                }),
                e("daa73df1", function (a) {
                    return a.viewerCount + " näyttö" + n(a.viewerCount, "", "ä");
                }),
                e("b4f19b97", function (a) {
                    return a.listItem1 + " ja " + a.listItem2;
                }),
                e("i0135403", function (a) {
                    return a.listItem1 + ", " + a.listItem2;
                }),
                e("f1574a4b", function (a) {
                    return a.listItem1 + " ja " + a.listItem2;
                }),
                e("ec72e2f8", "Seuraa"),
                e("d9d2a865", function (a) {
                    return "Toista" + a.ttc_card_cta_play;
                }),
                e("a8422cd5", function (a) {
                    return "Shoppaa" + a.ttc_card_cta_shop;
                }),
                e("ff1b8c17", function (a) {
                    return "Osta nyt" + a.ttc_card_cta_shop_now;
                }),
                e("d04488ef", function (a) {
                    return "Varaa" + a.ttc_card_cta_book;
                }),
                e("b0b0cfb7", function (a) {
                    return "Yhdistä" + a.ttc_card_cta_connect;
                }),
                e("ea5247d5", function (a) {
                    return "Tilaa" + a.ttc_card_cta_order;
                }),
                e("b7b58677", function (a) {
                    return "Avaa" + a.ttc_card_cta_open;
                }),
                e("g15f6870", "Lue lisää"),
                e("d1ff55d8", "Asenna"),
                e("g40f106c", "Lähetä meille viesti"),
                e("j393e386", "Lähetä meille yksityisviesti"),
                e("a771d32e", "Lähetä minulle yksityisviesti"),
                e("d8e9c24c", "Lähetä yksityisviesti"),
                e("h2f9258f", function (a) {
                    return a.appStarRating + "/5.0 tähteä – " + a.appNumRatings + " arvostelua";
                }),
                e("cc5508a9", function (a) {
                    return "Alkaa " + a.timestampUTC;
                }),
                e("f4520a5d", function (a) {
                    return "Julkaise " + a.action;
                }),
                e("f17dfdb6", "Toista"),
                e("j836de8a", "Suojattu tili"),
                e("f4b8dc08", "Tilattu tili"),
                e("f936caa6", "Kääntäjän tili"),
                e("ac72ee4e", "Varmennettu tili"),
                e("f49e0aac", "Tarkempia tietoja varmennetuista tileistä."),
                e("f59bdb94", "Tarjoaa tietoja suojatuista tileistä."),
                e("d7e50a66", "Lue lisää"),
                e("fc065ee4", "Lue lisää Tilaukset-ohjelmasta"),
                e("e453f536", "Mikä on Tilaukset-ohjelma"),
                e("bd4cb7a0", "Kun Tilaat omia sisällöntuottajasuosikkejasi, saat ainutlaatuista sisältöä — ja he ansaitsevat hieman rahaa."),
                e("g7099a02", "Haluan kuulla lisää"),
                e("c2637ef6", "Selvä"),
                e("efb17190", "Seuraa sinua"),
                e("g57b5f6c", "Tilaajasi"),
                e("a77a27c0", "Tilaaja"),
                e("gdd173da", "Grokin vastaus hupailutilassa"),
                e("dfd6eeac", "Grokin vastaus"),
                e("deceb214", "Kuvan muodosti Grok"),
                e("j05496ce", "Grokin DeepSearch-haku"),
                e("befddd48", "Näytä"),
                e("hf3f8e3a", "Näytä lisää"),
                e("h504ea5e", "Laadi oma versio Grokin avulla"),
                e("eb722de2", "Kysy itse Grokilta"),
                e("ib5110be", "Kokeile Grokin DeepSearchia itse"),
                e("bb5c5864", "Lainaa"),
                e("a8b58cf4", "Näytä tämä ketju"),
                e("i5f742fe", "Näytä tämä kysely"),
                e("fc45ccc6", "Upotettu video"),
                e("a9edea48", "Lataa uudelleen"),
                e("d26d8730", "Kopioi videon osoite"),
                e("f1b6bcec", "Kopioi GIF-kuvan osoite"),
                e("j25d7cca", "Piilota tekstitys"),
                e("a858b25c", "Näytä tekstitys"),
                e("faf9f484", "Mainos"),
                e("ae2ea9e7", function (a) {
                    return "Mainostajalta " + a.advertiserName;
                }),
                e("hea01798", "Kelauksen liukusäädin"),
                e("f8a09386", "Näytä Periscopessa"),
                e("gf2b6eee", "Kuva kuvassa"),
                e("b3160a69", function (a) {
                    return a.volumePercent + " prosentti(a)";
                }),
                e("fb236728", "Pysäytä"),
                e("e9bd453e", "Toista"),
                e("d46b00b0", "Siirry liveen"),
                e("ec8ab8b4", "Hiljennä"),
                e("b8b6344a", "Poista hiljennys"),
                e("c9a642fa", "Äänenvoimakkuuden liukusäädin"),
                e("c27e60b0", "Koko näyttö"),
                e("d2969f10", "Poistu koko näytön tilasta"),
                e("f06f2e53", function (a) {
                    return a.currentTime + " / " + a.durationTime;
                }),
                e("eeb64451", function (a) {
                    return "Katso " + a.advertiserName;
                }),
                e("f3c268a5", function (a) {
                    return "Osta " + a.advertiserName;
                }),
                e("g60001bb", function (a) {
                    return "Näytä " + a.advertiserName;
                }),
                e("dff1ddd9", function (a) {
                    return "Siirry kohteeseen " + a.advertiserName;
                }),
                e("b0b22805", function (a) {
                    return "Käy paikassa " + a.advertiserName;
                }),
                e("c67e71aa", "Katso nyt"),
                e("a6ada13e", "Osta nyt"),
                e("j0f12222", "Näe lisää"),
                e("f569f7c8", "Siirry sivustolle"),
                e("j0c6772a", "Käy sivustolla"),
                e("f73003aa", "Video näytetään mainoksen jälkeen"),
                e("b3112b8a", "Ohita"),
                e("h6333ad0", "Ohita mainos"),
                e("c59da417", function (a) {
                    return "Ohita mainos " + a.seconds + " kuluttua";
                }),
                e("c3c147cf", function (a) {
                    return "Ohita " + a.seconds;
                }),
                e("h9b3104e", "Videoasetukset"),
                e("ha3efce4", "Automaatio"),
                e("hd8d044d", function (a) {
                    return "Autom. (" + a.quality + ")";
                }),
                e("a7bf9962", "Lataa video"),
                e("ccc97152", "Toistonopeus"),
                e("h531ade0", "Videon laatu"),
                e("e8b5757c", "0,25x"),
                e("e7e954de", "0,5x"),
                e("g07ffe66", "0,75x"),
                e("d8bede9e", "1x"),
                e("j41845c8", "1,25x"),
                e("e9eeed9e", "1,5x"),
                e("fe45dc84", "1,75x"),
                e("e791190a", "2x"),
                e("dc5df829", function (a) {
                    return a.resolution + "p" + a.frameRate;
                }),
                e("c4d66d2e", "Optimaalinen laatu ei ole käytettävissä käytetyn selaimen takia. Suosittelemme käyttämään HEVC-yhteensopivaa selainta."),
                e("a681babd", function (a) {
                    return "Katso nyt kohteessa " + a.trimmedHostname;
                }),
                e("db3cd325", function (a) {
                    return "Vieraile kohteessa " + a.trimmedHostname;
                }),
                e("f1ad0df1", function (a) {
                    return "Mainos · " + a.timeRemaining;
                }),
                e("ef16ab2b", function (a) {
                    return "Mainostajalta " + a.advertiserName + " · " + a.timeRemaining;
                }),
                e("a15adf2c", "tällä lomakkeella"),
                e("c1658fc6", "Mediaa ei voitu toistaa."),
                e("h519ae04", "Media on poistettu käytöstä tekijänoikeusvaatimuksen vuoksi."),
                e("ce871584", "Tämä lähetys on päättynyt."),
                e("c101eb96", "Tämä lähetys ei ole saatavilla."),
                e("gb24a514", "Tämä media on poistettu käytöstä tekijänoikeuden haltijan ilmoituksen vuoksi."),
                e("hcaf3e63", function (a) {
                    return "Tämä media on poistettu käytöstä käyttäjän " + a.holder + " tekemän tekijänoikeusvaatimuksen vuoksi.";
                }),
                e("if05c038", "Tämä lähetys ei ole saatavilla sijainnissasi."),
                e("d420171b", function (a) {
                    return "Video ei ole saatavana käyttäjän " + a.holder + " ilmoitettua omistavansa sen tekijänoikeudet";
                }),
                e("b1eb72fa", "Valitettavasti tätä videota on estetty näkymästä tietyissä maissa. Odota hetki, niin selvitämme sijaintisi. Varmista, että sijaintiasetukset ovat käytössä selaimessasi."),
                e("c057680c", "Videon toistaminen ei onnistu tässä selaimessa. Kokeile toista selainta."),
                e("i5dfae6e", "Tämä video ei ole saatavilla sijainnissasi."),
                e("c2388276", "Tämä video on poistettu."),
                e("d2c96140", "Vieraslähettäjän äänen merkki");
            e("f6dc9146", "UUSINTA"),
                e("d30c74fe", "Äänenvoimakkuus"),
                e("f2d4e6f2", "Katso uudelleen"),
                e("e9f1af3a", "Lue lisää"),
                e("f1881d86", "Tähän julkaisuun ei voi vastata, sitä ei voi jakaa eikä siitä voi tykätä."),
                e("j3d37222", "Laki edellyttää X:ltä tätä huomautusta."),
                e("e461d0ee", "Näe viimeisimmät"),
                e("d1386940", "Pysy ajan tasalla"),
                e("ecda5f9e", "Harhaanjohtava"),
                e("a423473c", "Lakisääteinen huomautus"),
                e("b3296688", "Näkyvyyttä rajattu"),
                e("ccd32094", "Nyt"),
                e("abfcce0d", function (a) {
                    return a.amountOfTime + " sitten";
                }),
                e("ae408b76", "Uudelleenjulkaisit"),
                e("j355f008", "Kiinnitetty julkaisu"),
                e("habf9678", "Tekijän kiinnittämä"),
                e("db0798ed", function (a) {
                    return a.topicName + " aihe";
                }),
                e("dc716ec9", function (a) {
                    return "Suositeltu aihe: " + a.topicName;
                }),
                e("fbc2003c", "Päättynyt"),
                e("h5051dd8", "Peruttu"),
                e("bb5f91a3", function (a) {
                    return a.count + " tässä Huoneessa";
                }),
                e("c83eea99", function (a) {
                    return a.participant + " + " + a.count + " kuuntelee";
                }),
                e("cdff6cd3", function (a) {
                    return a.speaker + " puhuu + " + a.count + " kuuntelee";
                }),
                e("df006f4f", function (a) {
                    return a.count + " kiinnostunut" + n(a.count, "", "ta");
                }),
                e("c889af33", function (a) {
                    return a.count + " liittynyt" + n(a.count, "", "tä");
                }),
                e("d6f2056f", function (a) {
                    return a.count + " linjoille saapunut" + n(a.count, "", "ta");
                }),
                e("jbc5f47a", "Huoneet-telakka"),
                e("gfe2830f", function (a) {
                    return a.count + " muu" + n(a.count, "", "ta");
                }),
                e("dbeae6cf", function (a) {
                    return a.count + " muu" + n(a.count, " kuuntelij", "ta kuuntelija") + "a";
                }),
                e("d2543d97", function (a) {
                    return "+" + a.count;
                }),
                e("dc718e53", function (a) {
                    return "+" + a.count + " muu" + n(a.count, "", "ta");
                }),
                e("d0e7b11b", function (a) {
                    return a.date + " klo " + a.time;
                }),
                e("b4349cbc", function (a) {
                    return "" + a.relativeDay;
                }),
                e("ebe41367", function (a) {
                    return "Aika " + a.time;
                }),
                e("efce3d9b", function (a) {
                    return a.hours + " " + a.minutes + " " + a.seconds;
                }),
                e("d925a4f9", function (a) {
                    return a.formattedCount + " minuutti" + n(a.count, "", "a") + " jäljellä";
                }),
                e("ib15cddb", function (a) {
                    return a.formattedCount + " tunti" + n(a.count, "", "a") + " jäljellä";
                }),
                e("db9ed19f", function (a) {
                    return a.formattedCount + " päivä" + n(a.count, "", "ä") + " jäljellä";
                }),
                e("e1ebcecb", function (a) {
                    return a.formattedDays + " päivä" + n(a.days, "", "ä") + " " + a.formattedHours + " tunti" + n(a.hours, "", "a") + " jäljellä";
                }),
                e("cc1da1fd", function (a) {
                    return a.formattedHours + " tunti" + n(a.hours, "", "a") + " " + a.formattedMins + " minuutti" + n(a.mins, "", "a") + " jäljellä";
                }),
                e("f89a5d60", "Host"),
                e("ce2cfb36", "Vain Tilaajille"),
                e("df06241c", "Yhteisö"),
                e("b03e162a", "Kuuntele livenä"),
                e("b3d828ee", "Liittynyt"),
                e("g519ec2a", "Toista tallenne"),
                e("c6000450", "Muistutus asetettu"),
                e("db44ff5c", "Aseta muistutus"),
                e("f7b6346a", "Aloita nyt"),
                e("cc1f75ac", "Huoneet"),
                e("bd08d1b2", "Ei tarkempia tietoja saatavana"),
                e("j8b01b27", function (a) {
                    return a.title + " isännöimä huone  " + a.host + "on peruttu";
                }),
                e("fda9f48c", "Tämä huone on peruttu"),
                e("jf7853f7", function (a) {
                    return a.host + " isännöimä huone " + a.title + " on päättynyt";
                }),
                e("i1a29920", "Huone on päättynyt"),
                e("db467ffe", "Astu huoneeseen"),
                e("i8dc3993", function (a) {
                    return a.host + " juontaa";
                }),
                e("eb0b05b9", function (a) {
                    return "käyttäjän " + a.count + " muu" + n(a.count, "", "ta") + " kanssa";
                }),
                e("d19b9f77", function (a) {
                    return a.action + " huoneesta " + a.title + ", Hostina " + a.host + ", " + a.scheduledStart;
                }),
                e("e679d5d7", function (a) {
                    return "Aloita " + a.title + ", jonka ajoitettu ajankohta " + a.scheduledStart + " on nyt";
                }),
                e("ea4258b7", function (a) {
                    return a.action + " huoneesta, " + a.scheduledStart;
                }),
                e("dcbcaa23", function (a) {
                    return "Toista tallenne Huoneesta " + a.title;
                }),
                e("gaeb997e", "Lisää"),
                e("f8b21226", "Liity"),
                e("e1b95ab0", "Muokattu viimeksi"),
                e("i308d42c", "Tästä julkaisusta on saatavana uusi versio"),
                e("h092d520", "Tästä julkaisusta on saatavana uusi versio."),
                e("b74bf8b8", "Kuva"),
                e("ha9ed08c", "Luotu työkalulla"),
                e("bff61470", "Siirry muokkaamaan tästä"),
                e("f4393d0f", function (a) {
                    return "Tekijänoikeuksien haltija " + a.name;
                }),
                e("f8e8e32e", "Sinä"),
                e("df6703d3", "Sinä"),
                e("c20f7e9f", function (a) {
                    return n(a.otherUsersCount, l.createElement(l.Fragment, null, "", a.secondName), a.otherUsersCount + " muuta");
                }),
                e("he26f627", function (a) {
                    return n(a.otherUsersCount, l.createElement(l.Fragment, null, "", a.secondName), a.otherUsersCount + " muuta");
                }),
                e("gea7aa3c", "Seuraava"),
                e("b6462b32", "Edellinen"),
                e("caddb529", "ja"),
                e("ff31714c", function (a) {
                    return " ja " + n(a.othersCount, "1", "" + a.othersCount) + " muulle";
                }),
                e("e06c99b7", "ja"),
                e("i4e2f96c", function (a) {
                    return " ja " + n(a.othersCount, "1", "" + a.othersCount) + " muulle";
                }),
                e("ga629a8c", "Näytä keskustelun henkilöt"),
                e("d6f781e4", "Kun Tilaat omia sisällöntuottajasuosikkejasi X:ssä, saat ainutlaatuista sisältöä — ja he ansaitsevat hieman rahaa."),
                e("dab106f8", "Jäsen"),
                e("a46e92c2", "Mod"),
                e("f9633e62", "Järj.valv."),
                e("a3dfd0cb", function (a) {
                    return "julkaisu" + a.noun;
                }),
                e("d7580651", function (a) {
                    return "Julkaisu" + a.noun;
                }),
                e("c68b6367", function (a) {
                    return "Artikkeli" + a.noun;
                }),
                e("h13ffc88", "Ääni"),
                e("c8c4600e", "Äänijulkaisu"),
                e("de8c5eb2", "Toista ääni"),
                e("ec286028", "Keskeytä ääni"),
                e("ad77feb6", "Tekstityksiä ei ole saatavana"),
                e("e82adfeb", function (a) {
                    return a.count + " verkkosivu" + n(a.count, "", "a");
                }),
                e("cfb8c1f7", function (a) {
                    return a.count + " " + n(a.count, "julkaisu", "uutta julkaisua");
                }),
                e("g78032d5", function (a) {
                    return a.count + " verkkosivua ja julkaisua";
                }),
                e("j3de54a8", "MUISTIINPANO"),
                e("a6a6ced4", "Lue huomautus"),
                e("dbc0c2f4", "Lisää kirjanmerkkeihin"),
                e("d6885d3e", "Katsele Yhteisöä"),
                e("d5a48014", "Otsikko"),
                e("b92b6156", "Alaotsikko"),
                e("ec5ed598", "Leipäteksti"),
                e("c69eb656", "Kokoaikainen"),
                e("g46ae43c", "Kokoaikainen työsopimus"),
                e("jf7d4cc6", "Osa-aikainen"),
                e("b2214572", "Koejakso"),
                e("f8337bd6", "vuodessa"),
                e("i935bf88", "tunnilta"),
                e("b75b8ffd", function (a) {
                    return a.salary + " " + a.interval;
                }),
                e("c5954d30", "Lista"),
                e("fe64170c", "Et voi muuttaa tekemääsi valintaa"),
                e("g10ace38", "Vastausvaihtoehdot"),
                e("a3edf99a", "Lopulliset tulokset"),
                e("c2b81e9d", function (a) {
                    return a.formattedCount + " ään" + n(a.count, "i", "tä");
                }),
                e("e86732e4", "Valittu"),
                e("a35a5b10", "Tuntemasi seuraajat"),
                e("fc8cd112", "Seuraajien joukossa ei ole ketään, jota seuraat"),
                e("df8cd2af", function (a) {
                    return "Karusellin dia " + a.currentSlide + "/" + a.itemCount + ". " + a.type + ". " + a.altText;
                }),
                e("d70740da", "Seuraava dia"),
                e("c4d53ba2", "Edellinen dia"),
                e("h6405c17", function (a) {
                    return "Karusellin dia " + a.currentSlide + "/" + a.itemCount;
                }),
                e("a3efd2c4", "Aihe"),
                e("b91c8e53", function (a) {
                    return "Aihekortti aiheesta " + a.title + ".";
                }),
                e("b3826295", function (a) {
                    return "Aihekortti aiheesta " + a.title + ", " + a.description + ".";
                }),
                e("c9bb65db", function (a) {
                    return a.slidesLength + " kuvan kokoelma. " + a.heroVanityContent + ". " + a.heroTitleContent;
                }),
                e("e1bddf52", "Pyöritä vetämällä"),
                e("f0e1fb48", "Esikatselun muodostaminen tästä videoformaatista ei onnistunut tässä selaimessa. Saatat silti onnistua lataamaan videon palveluun"),
                e("c2fc878d", function (a) {
                    return "Olet ylittänyt merkkirajan " + a.count + " merkillä";
                }),
                e("db11b27f", function (a) {
                    return a.count + " merkki" + n(a.count, "", "ä") + " jäljellä";
                }),
                e("bb7b821a", "Voit vastata"),
                e("fc41217b", function (a) {
                    return "Käyttäjän @" + a.screenName + " seuraamat ja mainitsemat tilit voivat vastata";
                }),
                e("e5dc76d0", "Voit vastata tähän keskusteluun"),
                e("ab105904", "Kuka voi vastata?"),
                e("fd1cda7a", "Et voi vastata tähän keskusteluun"),
                e("f064f477", function (a) {
                    return "Käyttäjän @" + a.screenName + " seuraamat ja mainitsemat tilit voivat vastata";
                }),
                e("ea9ac5c9", function (a) {
                    return "Käyttäjän @" + a.screenName + " mainitsemat tilit voivat vastata";
                }),
                e("d2ae1499", function (a) {
                    return "Käyttäjän @" + a.screenName + " tilaajat tai mainitsemat tilit voivat vastata";
                }),
                e("a4e254ff", function (a) {
                    return "Varmennetut tilit tai käyttäjän @" + a.screenName + " mainitsemat tilit voivat vastata";
                }),
                e("j1b02fd8", "Hanki varmennus"),
                e("daba4484", "Tämä julkaisu näkyy vain sen tekijälle ja moderaattoreille"),
                e("f956070a", "Moderaattorit piilottivat sen, koska se rikkoo yhteisön sääntöjä."),
                e("cc17f408", "Kun jäseniä poistetaan, heidän julkaisunsa piilotetaan muulta Yhteisöltä."),
                e("j620ce06", "Ketkä näkevät tämän julkaisun?"),
                e("bd414b44", "Vain tilaajillesi"),
                e("dd0da5d9", function (a) {
                    return "@" + a.screenName + " ja hänen tilaajansa näkevät julkaisusi";
                }),
                e("g1c6a77e", "Näet Tilaukset-sisällön"),
                e("d3b143d7", function (a) {
                    return "Näet tämän ja voit vastata, koska olet tilin @" + a.screenName + " Tilaaja";
                }),
                e("f6337117", function (a) {
                    return "Näet tämän julkaisun, koska olet käyttäjän @" + a.screenName + " tilaaja";
                }),
                e("g766a06d", function (a) {
                    return "Vain käyttäjän @" + a.screenName + " piiri näkee tämän julkaisun";
                }),
                e("j040a368", "Linkit estetty vastauksissa"),
                e("b31d0af7", function (a) {
                    return a.screenName + " ei salli linkkejä vastauksissa tähän julkaisuun";
                }),
                e("eab0f780", "Et voi julkaista tai lainata ulkoisia linkkejä vastauksissa tähän julkaisuun."),
                e("f17a1f54", "Premium Exclusive"),
                e("a0953370", "Tilaus"),
                e("d9687d23", function (a) {
                    return a.trendValueNegativePercent + " laskussa";
                }),
                e("ac73eb5a", "Ei muutosta"),
                e("c5a9f921", function (a) {
                    return a.trendValuePositivePercent + " nousussa";
                }),
                e("e3098e07", function (a) {
                    return a.minutes + " minuutti" + n(a.minutes, "", "a") + " sitten";
                }),
                e("fea16a51", function (a) {
                    return a.hours + " tunti" + n(a.hours, "", "a") + " sitten";
                }),
                e("a4f2d94d", function (a) {
                    return a.days + " päivä" + n(a.days, "", "ä") + " sitten";
                }),
                e("hf9bc787", function (a) {
                    return a.weeks + " viikko" + n(a.weeks, "", "a") + " sitten";
                }),
                e("efcd5885", function (a) {
                    return a.months + " kuukau" + n(a.months, "si", "tta") + " sitten";
                }),
                e("c37228b5", function (a) {
                    return a.years + " vuo" + n(a.years, "si", "tta") + " sitten";
                }),
                e("jf83d092", "Päivä"),
                e("af4abf20", "Kuukausi"),
                e("b871f280", "Vuosi"),
                e("hac89ab0", "tammikuu"),
                e("ef30b30a", "helmikuu"),
                e("b56920fa", "maaliskuu"),
                e("b1a0f1ec", "huhtikuu"),
                e("daf779c8", "toukokuu"),
                e("c6ad074e", "kesäkuu"),
                e("f1db106c", "heinäkuu"),
                e("i4e80b7a", "elokuu"),
                e("efa6cc1e", "syyskuu"),
                e("f40a0cbe", "lokakuu"),
                e("ac74a31c", "marraskuu"),
                e("i6c1e4b2", "joulukuu"),
                e("de540c32", "Näytä salasana"),
                e("b4abfdb4", "Piilota salasana"),
                e("f06ae5d3", function (a) {
                    return a.standardTweetCount + " merkki" + n(a.standardTweetCount, "", "ä") + " jäljellä standardijulkaisun merkkimäärästä, " + a.totalCount + " merkki" + n(a.totalCount, "", "ä") + " jäljellä yhteensä";
                }),
                e("fee0a8bc", "Tallenna"),
                e("ae7f7656", "Tyhjennä"),
                e("gd769996", "Jotain meni pieleen. Yritä uudelleenlatausta."),
                e("i5450bec", "Media"),
                e("f7432494", "Lisää kuva"),
                e("a5f7ce12", "Seuraa takaisin"),
                e("c3befdbe", "Seurataan"),
                e("d3029dbc", "Älä seuraa"),
                e("aeb6f0a0", "Tilaa"),
                e("b4397192", "Hallitse"),
                e("i8cfb6e6", "Estetty"),
                e("ea100d6a", "Poista esto"),
                e("fe40537f", function (a) {
                    return "Poistetaanko käyttäjän @" + a.screenName + " esto?";
                }),
                e("ab7c3460", "Hän voi seurata sinua ja nähdä julkaisusi."),
                e("i58d8718", "Hänen on mahdollista seurata sinua ja reagoida julkisiin julkaisuihisi."),
                e("cda66545", function (a) {
                    return a.followType + " napsauttamalla " + a.screenName;
                }),
                e("ee05e96b", function (a) {
                    return a.followType + " klikkaamalla " + a.screenName;
                }),
                e("a8d77a25", function (a) {
                    return "Jätä " + a.screenName + " napsauttamalla";
                }),
                e("d0f4f3d9", function (a) {
                    return a.followType + " " + a.screenName;
                }),
                e("f238ba1d", function (a) {
                    return a.followType + "–" + a.screenName;
                }),
                e("j6161cab", function (a) {
                    return "Lopetetaanko käyttäjän @" + a.screenName + " seuraaminen?";
                }),
                e("i4bb9ef7", function (a) {
                    return "Lopetetaanko aiheen " + a.title + " seuraaminen?";
                }),
                e("ge753264", "Hänen julkaisunsa eivät enää näy Sinulle-aikajanallasi. Voit edelleen katsoa käyttäjän profiilia, paitsi jos hän on suojannut julkaisunsa."),
                e("b837c0e8", "Vaikka lopetat aiheen seuraamisen, saatat jatkossakin nähdä julkaisuja aiheesta sen mukaan, mitä tilejä seuraat."),
                e("ddac1f1d", function (a) {
                    return "Haluatko varmasti erota Yhteisöstä " + a.communityName + "?";
                }),
                e("j8e33c40", "Menetät pääsyn Yhteisöön etkä enää voi osallistua, mutta aiemmat julkaisusi jäävät näkyville."),
                e("f305840e", "Odottaa"),
                e("i036327c", "Hylätäänkö seuraamispyyntö?"),
                e("j95e3097", function (a) {
                    return "Tämä peruu odottavan pyyntösi, eikä @" + a.screenName + " näe sitä enää.";
                }),
                e("d85bc1b8", "Lähennä tai loitonna kuvaasi."),
                e("f596ace8", "Kuvasuhde: alkuperäinen"),
                e("df031fca", "Kuvasuhde: leveä"),
                e("b40332c6", "Kuvasuhde: neliö"),
                e("e547b368", "Alkuperäinen"),
                e("f7571204", "Laaja"),
                e("e6e16812", "Neliö"),
                e("hdd29d51", function (a) {
                    return "" + a.sponsorshipOrganization;
                }),
                e("b97f7079", function (a) {
                    return "" + a.sponsorshipOrganization;
                }),
                e("b02627a9", function (a) {
                    return "" + a.sponsorshipOrganization;
                }),
                e("f1a1b791", function (a) {
                    return "Mainostajana " + a.fullName;
                }),
                e("if2bf8b4", "Mainostettu"),
                e("f3624b5c", "(Poliittinen) mainos"),
                e("b4b3b113", function (a) {
                    return "(Poliittinen) mainos käyttäjältä " + a.fullName;
                }),
                e("be222050", "Mainostettu (näkemys)"),
                e("hcbbe447", function (a) {
                    return "Mainostettu (näkemys) mainostajana " + a.fullName;
                }),
                e("jcf3e7a2", "Lottie-animaation ruutujen edistyminen"),
                e("a0af935c", "Tykätty"),
                e("b8c465e2", "Uudelleenjulkaistu"),
                e("c7a989ce", "Tallennettu kirjanmerkkeihin"),
                e("b03835c7", function (a) {
                    return a.replyCount + " vastaus" + n(a.replyCount, "", "ta");
                }),
                e("g4a195e7", function (a) {
                    return a.retweetCount + " uudelleenjulkaisu" + n(a.retweetCount, "", "a");
                }),
                e("e089b42d", function (a) {
                    return a.likeCount + " tykkäys" + n(a.likeCount, "", "tä");
                }),
                e("e0a8fe39", function (a) {
                    return a.bookmarkCount + " kirjanmerkki" + n(a.bookmarkCount, "", "ä");
                }),
                e("c58b2ab7", function (a) {
                    return a.viewCount + " näyttö" + n(a.viewCount, "", "ä");
                }),
                e("f2849136", "Tilastot"),
                e("f206e970", "Näytä julkaisukohtaiset tilastot"),
                e("c7073f5b", function (a) {
                    return a.count + " näyttö" + n(a.count, "", "ä") + ". Näytä julkaisukohtaiset tilastot";
                }),
                e("hf417cf0", "Poista kirjanmerkeistä"),
                e("febd30ed", function (a) {
                    return a.count + " kirjanmerkki" + n(a.count, "", "ä") + ". Lisää kirjanmerkkeihin";
                }),
                e("a8dc9587", function (a) {
                    return a.count + " kirjanmerkki" + n(a.count, "", "ä") + ". Lisätty kirjanmerkkeihin";
                }),
                e("d636ebc6", "Tykkää"),
                e("eb3a8b0c", "Poista tykkäys"),
                e("j472ecfc", "Tykkää tästä julkaisusta"),
                e("dac92b0d", function (a) {
                    return a.count + " tykkäys" + n(a.count, "", "tä") + ". Tykkää";
                }),
                e("aa650427", function (a) {
                    return a.count + " tykkäys" + n(a.count, "", "tä") + ". Tykätty";
                }),
                e("hdf7226a", "Vastaa"),
                e("c9940955", function (a) {
                    return a.count + " vastaus" + n(a.count, "", "ta") + ". Vastaa";
                }),
                e("f2919fb8", "Uudelleenjulkaise"),
                e("fd1e5446", "Peru uudelleenjulkaisu"),
                e("dfad425d", function (a) {
                    return a.count + " uudelleenjulkaisu" + n(a.count, "", "a") + ". Uudelleenjulkaise";
                }),
                e("a386dc55", function (a) {
                    return a.count + " uudelleenjulkaisu" + n(a.count, "", "a") + ". Uudelleenjulkaisi";
                }),
                e("f65198c2", "Näytä lainaukset"),
                e("dc63da16", "Jaa"),
                e("cee0585c", "Jaa julkaisu"),
                e("ceb6841c", "Kun jäseniä poistetaan, heidän julkaisunsa piilotetaan muulta Yhteisöltä."),
                e("cb731cae", "Muokkaa piiriä"),
                e("c33d3a84", "Mitä piirissä tapahtuu, se pysyy piirissä"),
                e("c4f10e71", "Lue lisää"),
                e("b09adb0c", "Näe keskustelu"),
                e("e4f1e6e4", function (a) {
                    return "" + a.formattedCount;
                }),
                e("daf8a75f", function (a) {
                    return "seurattu" + n(a.count, "", "a");
                }),
                e("ef1f4fc6", function (a) {
                    return "" + a.formattedCount;
                }),
                e("ad9b5988", function (a) {
                    return "seuraaja" + n(a.count, "", "a");
                }),
                e("a9980948", function (a) {
                    return "" + a.formattedCount;
                }),
                e("ce44a35c", function (a) {
                    return "tilaaj" + n(a.count, "", "i") + "a";
                }),
                e("id949f68", function (a) {
                    return "" + a.formattedCount;
                }),
                e("hb608cfc", function (a) {
                    return "tilaus" + n(a.count, "", "ta");
                }),
                e("ef633578", "Tili jäädytetty"),
                e("a6a3d496", "Syötä linkki"),
                e("acce6978", "Muokkaa linkkiä"),
                e("f5e8f526", "Muokkaa"),
                e("h517e8d8", "Poista"),
                e("a30ae58e", "Näytettävä teksti"),
                e("da38c958", "URL-osoite"),
                e("d5d57678", "Lisää"),
                e("ec822028", "Täytä tämä kenttä"),
                e("ebc5d2cc", "Tämä URL-osoite on viallinen. Tarkista oikeinkirjoitus ja linkin muotoilu."),
                e("h30a19bb", function (a) {
                    return "Tämä on ympyrädiagrammi. Diagrammin otsikko on " + a.chartTitle + ". Siinä on yhteensä " + a.noOfCategories + " kategoriaa. Vähimmäisarvo on " + a.minValue + " ja enimmäisarvo " + a.maxValue + ". Tutustu kaavioon navigointiohjainten avulla.";
                }),
                e("h39fbf33", function (a) {
                    return "Vaakapallki, jonka data-arvot ovat välillä " + a.minValue + "—" + a.maxValue;
                }),
                e("gdd51574", "Vedä päivittääksesi"),
                e("e557ad8e", "Aktiivinen"),
                e("e3a58c28", "Laajenna"),
                e("db355331", function (a) {
                    return a.team + " voitti";
                }),
                e("a8428d5e", "Tulossa"),
                e("a7aad8ba", "Live"),
                e("e431f1aa", "Lopullinen"),
                e("a7391708", "Siirretty myöhemmäksi"),
                e("d2dbfa92", "Peruttu"),
                e("cd734f66", "Tänään"),
                e("c8891d06", "Huomenna"),
                e("d2414d31", function (a) {
                    return a.count + " lukematonta kohdetta";
                }),
                e("ce4e85ae", "Lukemattomat"),
                e("fb9f6f39", function (a) {
                    return a.count + "+";
                }),
                e("eb124f96", "AM/PM"),
                e("i7a6f114", "tunnit"),
                e("ccc99ff2", "minuutit"),
                e("g5662c95", function (a) {
                    return "Taso " + a.conversationTreeDepth + ":";
                }),
                e("b3688156", "Tämä käyttäjä on paraikaa aktiivisessa Huoneessa; liity mukaan napsauttamalla"),
                e("c0eb8825", function (a) {
                    return "@" + a.screenName + " on paraikaa aktiivisessa Huoneessa; liity mukaan napsauttamalla";
                }),
                e("d068dc6d", function (a) {
                    return "@" + a.screenName + " on paraikaa Live-lähetyksessä; siirry katsomaan napsauttamalla";
                }),
                e("d9fd5570", "Piilotetut vastaukset"),
                e("c566d3a6", "Piilota"),
                e("a897c4d6", "Avaa muokkaushistorian"),
                e("e07a85a2", "Julkaisu ei saatavilla"),
                e("ffeb2fc6", "Tulossa"),
                e("af2a65d9", function (a) {
                    return a.timestamp + " valittu";
                }),
                e("j3d49e93", function (a) {
                    return a.timestamp + " m";
                }),
                e("a394f905", function (a) {
                    return a.seconds + " sekuntia";
                }),
                e("f42c0c80", "Valitun osion loppu, säädä halutuksi nuolilla"),
                e("i667afe8", "Valitun osion alku, säädä halutuksi nuolilla"),
                e("gfaaead8", "Nimetön"),
                e("cfd13f46", "Äänisäädöt"),
                e("eba2660a", "Blue"),
                e("hc196b78", "Luumunpunainen"),
                e("c8bc49d2", "Violetti"),
                e("efff09ee", "Vihreä"),
                e("fcb424ee", "Keltainen"),
                e("ie2215aa", "Purppuranpunainen"),
                e("f106ce44", "Oranssi"),
                e("acddd4d4", "Punainen"),
                e("cef9b062", "Sinivihreä"),
                e("d9daefca", "Tummanharmaa");
            var l = i(202784),
                o = [
                    function (a) {
                        return 0 === a ? 1 : 1 === a ? 0 : void 0;
                    },
                    function (a) {
                        return 0 === a ? 0 : 1 === a ? 2 : 2 === a ? 1 : void 0;
                    },
                    function (a) {
                        return 0 === a ? 1 : 1 === a ? 2 : 2 === a ? 0 : void 0;
                    },
                    function (a) {
                        return 0 === a ? 0 : 1 === a ? 2 : 2 === a ? 3 : 3 === a ? 1 : void 0;
                    },
                ],
                k = { f451c521: 0, d1f8bdd9: 0, d764af97: 1, hec0fd4d: 0, j55320df: 1, e70dcc35: 0, g1bf440b: 1, cd2e7c19: 0, aee9e7fb: 1, i6cec545: 2, d6998bab: 3 };
            function r(a) {
                return a;
            }
            var m = (function (a) {
                var t, i, e, m, d;
                function c() {
                    return a.apply(this, arguments) || this;
                }
                return (
                    (i = a),
                    ((t = c).prototype = Object.create(i.prototype)),
                    (t.prototype.constructor = t),
                    u(t, i),
                    (c.prototype.render = function () {
                        return l.createElement.apply(l, this[this.props.$i18n].reduce(this.templateReducer, [l.Fragment, null]));
                    }),
                    (e = c),
                    (m = [
                        {
                            key: "bb85c49d",
                            get: function () {
                                return ["X säilyttää kopion Huoneesta tarkistuksia varten. ", "."];
                            },
                        },
                        {
                            key: "c9af3ff7",
                            get: function () {
                                return ["Estämäsi tilit eivät voi liittyä Huoneeseen. X:ään kirjautumattomien voi kuitenkin olla mahdollista kuunnella. "];
                            },
                        },
                        {
                            key: "e60e51b3",
                            get: function () {
                                return ["X säilyttää kopiot Huoneista rajoitetun ajan spämmäys- ja häirintätarkistusta varten. "];
                            },
                        },
                        {
                            key: "jd312ce9",
                            get: function () {
                                return ["Tilaamalla Varmennetut organisaatiot saat 1 000 USD:n edestä mainoskrediittejä organisaatiosi minkä tahansa tilin käyttöön. "];
                            },
                        },
                        {
                            key: "e1a49407",
                            get: function () {
                                return ["Kun olet liittynyt X:ään, voit vastata käyttäjän ", " julkaisuun."];
                            },
                        },
                        {
                            key: "be54ed41",
                            get: function () {
                                return ["Kun olet liittynyt X:ään, voit jakaa käyttäjän ", " julkaisun seuraajillesi."];
                            },
                        },
                        {
                            key: "jb19eb17",
                            get: function () {
                                return ["Liity X:ään kertoaksesi käyttäjälle ", ", että julkaisu on mieleesi."];
                            },
                        },
                        {
                            key: "bbfee611",
                            get: function () {
                                return ["Seuraamalla käyttäjää ", " näet, mitä hän jakaa X:ssä."];
                            },
                        },
                        {
                            key: "af104f2b",
                            get: function () {
                                return ["Liity X:ään nyt, niin voit jakaa käyttäjän ", " julkaisun yksityisesti."];
                            },
                        },
                        {
                            key: "ccc1f303",
                            get: function () {
                                return ["Seuraa listaa ", " saadaksesi kuratoidut julkaisut"];
                            },
                        },
                        {
                            key: "ce02fabf",
                            get: function () {
                                return ["Liity X:ään nähdäksesi käyttäjän ", " kuratoiman käyttäjälistan julkaisut."];
                            },
                        },
                        {
                            key: "a85608a7",
                            get: function () {
                                return ["Liity X:ään löytääksesi uusia ja kiinnostavia keskusteluja itsellesi tärkeistä asioista, kuten ", "."];
                            },
                        },
                        {
                            key: "c76865b7",
                            get: function () {
                                return ["Haku käyttäjän ", " X-julkaisuista."];
                            },
                        },
                        {
                            key: "e4af7661",
                            get: function () {
                                return ["X kumppaneineen käyttää evästeitä tarjotakseen paremman, turvallisemman ja nopeamman palvelun ja tukeakseen liiketoimintaamme. Osa evästeistä on välttämättömiä, jotta voit käyttää palveluitamme, jotta voimme parantaa palveluita ja turvata niiden toiminnan. Jos hyväksyt kaikki evästeet, sallit X:n ja sen kumppaneiden käyttää evästeitä myös näkemiesi mainosten ja viestien räätälöintiin. Jos kiellät muut kuin välttämättömät evästeet, emme käytä evästeitä tiedon keräämiseen räätälöityä mainontaa ja viestejä varten. Lue lisää esimerkiksi siitä, miten voit muuttaa aiemmin tekemääsi valintaa, ", " evästesivulta."];
                            },
                        },
                        {
                            key: "a268632b",
                            get: function () {
                                return ["X kumppaneineen käyttää evästeitä tarjotakseen sinulle paremman, turvallisemman ja nopeamman palvelun ja tukeakseen liiketoimintaamme. Osa evästeistä on välttämättömiä palveluittemme käyttöä varten, niiden parantamiseksi ja niiden asianmukaisen toiminnan takaamiseksi. "];
                            },
                        },
                        {
                            key: "c4d3d079",
                            get: function () {
                                return ["Rekisteröitymällä hyväksyt ", " ja ", " sisältäen ", "."];
                            },
                        },
                        {
                            key: "j23c6259",
                            get: function () {
                                return ["Anna linkit vähintään kolmeen kriteerit täyttävissä uutisjulkaisuissa julkaistuun artikkeliin sinusta viimeisten kuuden kuukauden ajalta. "];
                            },
                        },
                        {
                            key: "gf887169",
                            get: function () {
                                return ["Sinun on täytettävä tietyt vaatimukset riippuen siitä, millainen X-tili sinulla on. "];
                            },
                        },
                        {
                            key: "d454b49f",
                            get: function () {
                                return ["Valitse vaihtoehto, joka parhaiten kuvaa tiliäsi. "];
                            },
                        },
                        {
                            key: "hd977dd9",
                            get: function () {
                                return ["Valitse yksi tapa osoittaa, että tilisi täyttää aktivistin tai organisaattorin tilin varmentamisen kriteerit. "];
                            },
                        },
                        {
                            key: "e3432573",
                            get: function () {
                                return ["Tilisi tämänhetkinen seuraajien tai mainintojen määrä ei riitä varmennetun aktivistin statukseen. "];
                            },
                        },
                        {
                            key: "efd8f6e7",
                            get: function () {
                                return ["Anna linkki Google Trends -profiiliin ja näyttöä sinua koskevasta tuoreesta hakuhistoriasta. "];
                            },
                        },
                        {
                            key: "fe54dcfd",
                            get: function () {
                                return ["Anna linkki sinusta kertovalle Wikipedia-sivulle, joka sisältää ainakin kolme ulkoista viittausta. "];
                            },
                        },
                        {
                            key: "ie26d72d",
                            get: function () {
                                return ["Anna linkki, jossa sinuun viitataan varmennetun lobbausorganisaation johtotehtävissä toimivana henkilönä. Referenssin on oltava varmennetun organisaation virallisella sivustolla."];
                            },
                        },
                        {
                            key: "af3fe861",
                            get: function () {
                                return ["Valitse yksi tapa osoittaa, että tilisi täyttää vaikutusvaltaisen henkilön tilin varmentamisen kriteerit. "];
                            },
                        },
                        {
                            key: "a08d6af3",
                            get: function () {
                                return ["Tilisi tämänhetkinen seuraajien tai mainintojen määrä ei riitä varmennetun sisällöntuottajan tai vaikuttajan statukseen. "];
                            },
                        },
                        {
                            key: "f774e39d",
                            get: function () {
                                return ["Valitse tapa, jolla osoitat, että tilisi täyttää edellytykset, joilla huomattavan yrityksen, brändin tai organisaation tili voidaan varmentaa. "];
                            },
                        },
                        {
                            key: "d8510869",
                            get: function () {
                                return ["Anna linkki Google Trends -profiiliin, joka osoittaa, että yritystäsi, brändiäsi tai organisaatiotasi on viime aikoina haettu. "];
                            },
                        },
                        {
                            key: "h75e3641",
                            get: function () {
                                return ["Anna linkki yrityksestäsi, brändistäsi tai organisaatiostasi kertovalle Wikipedia-sivulle, joka sisältää ainakin kolme ulkoista viittausta. "];
                            },
                        },
                        {
                            key: "de6d69a1",
                            get: function () {
                                return ["Anna linkki, joka osoittaa, että yrityksesi, brändisi tai organisaatiosi on listattu pörssiin. "];
                            },
                        },
                        {
                            key: "be0e8fdb",
                            get: function () {
                                return ["Anna linkit vähintään kolmeen varmennetuissa uutisjulkaisuissa julkaistuun artikkeliin yrityksestäsi viimeisten kuuden kuukauden ajalta. "];
                            },
                        },
                        {
                            key: "baed7213",
                            get: function () {
                                return ["Sinun on oltava johtotehtävissä varmennetussa organisaatiossa, jotta tilisi voidaan varmentaa tässä luokassa. Lisää organisaatiosi tili vahvistaaksesi, että täytät kriteerit. "];
                            },
                        },
                        {
                            key: "c5d688cf",
                            get: function () {
                                return ["Valitse tapa, jolla osoitat, että tilisi täyttää huomattavan organisaation johtotehtävissä toimivan henkilön varmentamisen kriteerit. "];
                            },
                        },
                        {
                            key: "fce3e22d",
                            get: function () {
                                return ["Anna linkit vähintään kolmeen varmennettujen uutisorganisaatioiden viimeisten kuuden kuukauden aikana julkaisemaan artikkeliin, joissa sinuun viitataan organisaatiosi johtotehtävissä toimivana. "];
                            },
                        },
                        {
                            key: "f1b276f1",
                            get: function () {
                                return ["Anna linkki, jossa sinut mainitaan organisaatiosi johtotehtävissä toimivana. Referenssin on oltava varmennetun yrityksen, brändin tai organisaation virallisella sivustolla. "];
                            },
                        },
                        {
                            key: "e2465097",
                            get: function () {
                                return ["Anna linkki Google Trends -profiiliin ja näyttöä tuotantoasi koskevasta tuoreesta hakuhistoriasta. "];
                            },
                        },
                        {
                            key: "g83bcecd",
                            get: function () {
                                return ["Anna linkit vähintään kolmeen uskottavissa uutisjulkaisuissa julkaistuun artikkeliin tuotannostasi viimeisten kuuden kuukauden ajalta. "];
                            },
                        },
                        {
                            key: "f3016c6f",
                            get: function () {
                                return ["Valitse tapa, jolla osoitat, että tilisi täyttää edellytykset, joilla huomattavan tuotannon virallinen tili voidaan varmentaa. "];
                            },
                        },
                        {
                            key: "h74144bd",
                            get: function () {
                                return ["Anna linkki, joka osoittaa, että tuotanto-organisaatiosi on listattu pörssiin. "];
                            },
                        },
                        {
                            key: "jef5dfc5",
                            get: function () {
                                return ["Anna linkki tuotannostasi kertovalle Wikipedia-sivulle, joka sisältää ainakin kolme ulkoista viittausta. "];
                            },
                        },
                        {
                            key: "gf5a4309",
                            get: function () {
                                return ["Valitse yksi tapa osoittaa, että tilisi täyttää edellytykset, joilla huomattavan viihdealan yrityksen tili voidaan varmentaa. "];
                            },
                        },
                        {
                            key: "g2e175b1",
                            get: function () {
                                return ["Anna linkki Google Trends -profiiliin ja näyttöä viihdealan yritystäsi koskevasta tuoreesta hakuhistoriasta. "];
                            },
                        },
                        {
                            key: "efc369c3",
                            get: function () {
                                return ["Anna linkit vähintään kolmeen uskottavissa uutisjulkaisuissa julkaistuun artikkeliin yrityksestäsi viimeisten kuuden kuukauden ajalta. "];
                            },
                        },
                        {
                            key: "ff03f07d",
                            get: function () {
                                return ["Anna linkki, joka osoittaa, että viihdeyrityksesi on listattu pörssiin. "];
                            },
                        },
                        {
                            key: "a3e9dde3",
                            get: function () {
                                return ["Anna linkki viihdealan yrityksestäsi kertovalle Wikipedia-sivulle, joka sisältää ainakin kolme ulkoista viittausta. "];
                            },
                        },
                        {
                            key: "c2b8fb3d",
                            get: function () {
                                return ["Valitse yksi tapa osoittaa, että tilisi täyttää vaikutusvaltaisen sisällöntuottajan varmentamiskriteerit. "];
                            },
                        },
                        {
                            key: "fd33ce05",
                            get: function () {
                                return ["Anna linkki sisällöntuottajaprofiiliisi. Sisällöntuottajaprofiilisi voi olla millä tahansa digialustalla, mutta sen yhteydessä on oltava viittaus X-käyttäjätunnukseesi. "];
                            },
                        },
                        {
                            key: "bb47d2b9",
                            get: function () {
                                return ["Anna linkki sinusta kertovalle Wikipedia-sivulle, joka sisältää ainakin kolme ulkoista viittausta. "];
                            },
                        },
                        {
                            key: "db930fb3",
                            get: function () {
                                return ["Valitse yksi tapa osoittaa, että tilisi täyttää edellytykset, joilla viihdealan henkilön tili voidaan varmentaa. "];
                            },
                        },
                        {
                            key: "dc263ec1",
                            get: function () {
                                return ['Anna linkki IMDB-profiiliisi, jossa on oltava vähintään viisikymmentä tuotantomeriittiä ("credits"). '];
                            },
                        },
                        {
                            key: "d18a48d5",
                            get: function () {
                                return ["Anna linkki, jossa sinuun viitataan viihdealan henkilönä ja jossa mainitaan myös X-tilisi. Viittauksen on oltava varmennetun tahon virallisella sivustolla. "];
                            },
                        },
                        {
                            key: "i3b4217b",
                            get: function () {
                                return ["Valitse luokka, joka parhaiten kuvaa viranomaistiliäsi. "];
                            },
                        },
                        {
                            key: "ja62479f",
                            get: function () {
                                return ["Anna linkit vähintään viiteen varmennettujen uutisorganisaatioiden viimeisten kuuden kuukauden aikana julkaisemaan artikkeliin, joissa sinuun viitataan virkaan ehdolla olevana ehdokkaana. "];
                            },
                        },
                        {
                            key: "f28bbbb1",
                            get: function () {
                                return ["Anna linkit vähintään viiteen varmennettujen uutisorganisaatioiden viimeisten kuuden kuukauden aikana julkaisemaan artikkeliin, joissa sinut nimetään kriteerit täyttävän viran haltijana. "];
                            },
                        },
                        {
                            key: "b229f4b9",
                            get: function () {
                                return ["Anna linkit vähintään viiteen varmennettujen uutisorganisaatioiden viimeisten kuuden kuukauden aikana julkaisemaan artikkeliin, joissa sinuun viitataan kriteerit täyttävänä viranhaltijana. "];
                            },
                        },
                        {
                            key: "e85178bd",
                            get: function () {
                                return ["Anna linkki viralliselle kampanjasivustollesi, jossa sinuun viitataan osavaltion tai valtion virkaan ehdolla olevana ehdokkaana ja jossa mainitaan myös X-tilisi. "];
                            },
                        },
                        {
                            key: "i499f8f7",
                            get: function () {
                                return ["Anna linkki viranomaissivustolle tai viranomaisiin sidoksissa olevalle sivustolle, jolla virkasi tai julkinen tehtäväsi ja X-tilisi on mainittu. "];
                            },
                        },
                        {
                            key: "a394654f",
                            get: function () {
                                return ["Anna linkki, jossa sinut mainitaan kriteerit täyttävänä valtionhallinnon viranhaltijana tai viranomaisiin sidoksissa olevana tahona. Referenssin on oltava varmennetun valtionhallinnon organisaation virallisella sivustolla. "];
                            },
                        },
                        {
                            key: "dcb0da53",
                            get: function () {
                                return ["Journalistien on oltava varmennetun uutisorganisaation tai julkaisun palveluksessa saadakseen itse varmennetun tilin. Anna linkki työnantajasi tiliin. "];
                            },
                        },
                        {
                            key: "d82a96af",
                            get: function () {
                                return ["Valitse yksi tapa osoittaa, että tilisi täyttää merkittävän journalistin tilin kriteerit. "];
                            },
                        },
                        {
                            key: "d47b4101",
                            get: function () {
                                return ["Anna linkki, jossa sinut mainitaan työnantajasi toimittajana. Referenssin on oltava varmennetun uutisorganisaation virallisella sivustolla. "];
                            },
                        },
                        {
                            key: "a3540593",
                            get: function () {
                                return ["Ilmoita vähintään kolme artikkelia, joita ehdot täyttävät julkaisut ovat julkaisseet viimeisten kuuden kuukauden aikana. "];
                            },
                        },
                        {
                            key: "edb782e7",
                            get: function () {
                                return ["Valitse tapa osoittaa, että tilisi täyttää merkittävän uutisorganisaatiotilin varmentamisen kriteerit. "];
                            },
                        },
                        {
                            key: "cc16af2d",
                            get: function () {
                                return ["Anna linkki Google Trends -profiiliin, joka osoittaa, että uutisorganisaatiota on viime aikoina haettu. "];
                            },
                        },
                        {
                            key: "b42b7001",
                            get: function () {
                                return ["Anna linkki uutisorganisaatiosta kertovalle Wikipedia-sivulle, joka sisältää ainakin kolme ulkoista viittausta. "];
                            },
                        },
                        {
                            key: "fd2c6f63",
                            get: function () {
                                return ["Anna linkki, joka osoittaa, että uutisorganisaatiosi on listattu pörssiin. "];
                            },
                        },
                        {
                            key: "ec7027cd",
                            get: function () {
                                return ["Anna linkit vähintään kolmeen varmennetuissa uutisjulkaisuissa julkaistuun artikkeliin uutisorganisaatiostasi viimeisten kuuden kuukauden ajalta. "];
                            },
                        },
                        {
                            key: "a0a9f835",
                            get: function () {
                                return ["Ammattilaisurheilun henkilöiden on kilpailtava varmennetuissa urheiluliigoissa ja tapahtumissa, jotta heidät voidaan varmentaa. Anna linkki tilisi kannalta relevanttiin varmennettuun joukkueeseen, liigaan, tapahtumaan tai organisaatioon."];
                            },
                        },
                        {
                            key: "iba551d5",
                            get: function () {
                                return ["Tilisi seuraajien määrä ei yllä oman alueesi pelialan ihmiseltä tilin varmentamiseen vaadittuun rajaan. "];
                            },
                        },
                        {
                            key: "h515e869",
                            get: function () {
                                return ["Pelialan henkilöiden on kilpailtava varmennetuissa esports-liigoissa ja tapahtumissa, jotta heidät voidaan varmentaa. Anna linkki tilisi kannalta relevanttiin varmennettuun joukkueeseen, liigaan, tapahtumaan tai organisaatioon."];
                            },
                        },
                        {
                            key: "d2cd7f89",
                            get: function () {
                                return ["Valitse tapa osoittaa, että tilisi täyttää merkittävän urheiluliigan, joukkueen tai kansainvälisen kilpailun tilin varmentamisen kriteerit. "];
                            },
                        },
                        {
                            key: "c68614a3",
                            get: function () {
                                return ["Anna linkki Google Trends -profiiliin, joka osoittaa, että ammattilaisurheiluorganisaatiotasi koskevia hakuja on tehty viime aikoina. "];
                            },
                        },
                        {
                            key: "b4ea622f",
                            get: function () {
                                return ["Anna linkki ammattilaisurheiluorganisaatiostasi kertovalle Wikipedia-sivulle, joka sisältää ainakin kolme ulkoista viittausta. "];
                            },
                        },
                        {
                            key: "acab99f7",
                            get: function () {
                                return ["Anna linkki, joka osoittaa, että ammattilaisurheiluorganisaatiosi on listattu pörssiin. "];
                            },
                        },
                        {
                            key: "df0b2577",
                            get: function () {
                                return ["Anna linkki kansainvälisen kilpailun tai ammattilaisurheiluorganisaation viralliselle sivustolle, jolla viitataan liigaasi, joukkueeseesi tai kilpailuusi. "];
                            },
                        },
                        {
                            key: "jfda4c29",
                            get: function () {
                                return ["Anna linkit vähintään kolmeen varmennetuissa uutisjulkaisuissa julkaistuun artikkeliin organisaatiostasi viimeisten kuuden kuukauden ajalta. "];
                            },
                        },
                        {
                            key: "g3299df1",
                            get: function () {
                                return ["Valitse tapa osoittaa, että tilisi täyttää ammattilaisurheilijatilin varmentamisen kriteerit. "];
                            },
                        },
                        {
                            key: "id6bbc01",
                            get: function () {
                                return ["Valitse tapa osoittaa, että tilisi täyttää pelialan henkilön tilin varmentamisen kriteerit. "];
                            },
                        },
                        {
                            key: "fbe119c5",
                            get: function () {
                                return ["Anna linkki kansainvälisen kilpailun tai ammattilaisurheiluorganisaation viralliselle sivustolle, jolla viitataan sinuun ammattilaisurheilijana, managerina tai valmentajana. "];
                            },
                        },
                        {
                            key: "da0e7f33",
                            get: function () {
                                return ["Anna linkki varmennetun esports-liigan tai -tapahtuman viralliselle sivustolle, jolla viitataan sinuun aktiivisena joukkueen jäsenenä, valmentajana tai managerina. "];
                            },
                        },
                        {
                            key: "ca20e39f",
                            get: function () {
                                return ["Emme valitettavasti tällä hetkellä kykene prosessoimaan uusia varmennuspyyntöjä. Palaa myöhemmin yrittämään uudelleen. "];
                            },
                        },
                        {
                            key: "jf9308af",
                            get: function () {
                                return ["Jotta voit todentaa henkilöllisyytesi sähköpostilla, sinulla on oltava entuudestaan varmennettu osoite. Pääset varmentamaan osoitteen ", "."];
                            },
                        },
                        {
                            key: "e9976a41",
                            get: function () {
                                return ["Jotta voit todentaa henkilöllisyytesi sähköpostilla, sinulla on oltava vaatimustemme mukainen varmennettu osoite. Pääset varmentamaan osoitteen ", "."];
                            },
                        },
                        {
                            key: "e5b4cc43",
                            get: function () {
                                return ["Varmennus on saatavana merkittävässä asemassa oleville tai tiettyihin luokkiin kuuluville henkilöille. Jos uskot kuuluvasi näihin, voit pyytää tilisi varmentamista. "];
                            },
                        },
                        {
                            key: "bfb355fb",
                            get: function () {
                                return ["Varmista, että kasvosi ja teksti näkyvät ja ovat luettavissa henkilöllisyystodistuksessa. Jos näin ei ole, voit joutua lähettämään kuvat uudelleen. X ei saa henkilöllisyystodistusta tai sen kopiota eikä tallenna niitä. "];
                            },
                        },
                        {
                            key: "d65a41c3",
                            get: function () {
                                return ["Tietoa siitä, miten pääset käsiksi antamiisi tietoihin tai voit korjata niitä, saat lukemalla ", "."];
                            },
                        },
                        {
                            key: "a1c39f5b",
                            get: function () {
                                return ["Sinuun ollaan yhteydessä heti, kun päätös on tehty. Tähän voi kulua enintään " + this.props.days + " päivä" + n(this.props.days, "", "ä") + "."];
                            },
                        },
                        {
                            key: "ja826537",
                            get: function () {
                                return ["Auta meitä kehittämään palvelua täyttämällä lyhyt ", "."];
                            },
                        },
                        {
                            key: "b7be91bf",
                            get: function () {
                                return ["Edellinen pyyntösi evättiin " + this.props.date + ". Sinun on odotettava hylkäyksestä 30 päivää ennen uuden pyynnön lähettämistä."];
                            },
                        },
                        {
                            key: "jcb00a95",
                            get: function () {
                                return ["Teit edellisen pyyntösi " + this.props.date + ". Sinun on odotettava hylkäyksestä 30 päivää ennen uuden pyynnön lähettämistä."];
                            },
                        },
                        {
                            key: "j92ea4b9",
                            get: function () {
                                return ["Teit edellisen pyyntösi " + this.props.date + ". Sinuun ollaan yhteydessä heti, kun päätös on tehty."];
                            },
                        },
                        {
                            key: "jbcd22b1",
                            get: function () {
                                return ["Mukavia hetkiä – ja muistathan noudattaa ", "."];
                            },
                        },
                        {
                            key: "hcecd237",
                            get: function () {
                                return ["Nämä sovellukset olet itse yhdistänyt tiliisi. Voit tarkistaa näiden sovellusten sinusta saamat tiedot ja kumota niiden käyttöoikeuden. "];
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
                                return ["Seuraamasi ihmiset voivat aina lähettää sinulle viestejä. "];
                            },
                        },
                        {
                            key: "d79b6b7b",
                            get: function () {
                                return ["Yhdistä hallinnointitili, jotta automatisoitu tilisi saa automatisoidun tilin tunnuksen. Kaikilla automatisoiduilla tileillä on oltava kytkentä hallintatiliin. "];
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
                                return ["Yritämme pitää X:n terveen keskustelun areenana, joten olemme poistaneet käytöstä valtaosan reagointitavoista tähän julkaisuun. Jos haluat puhua siitä, voit edelleen lainata julkaisua. "];
                            },
                        },
                        {
                            key: "i2a606d1",
                            get: function () {
                                return ["Yritämme pitää X:n terveen keskustelun areenana, joten olemme poistaneet käytöstä valtaosan reagointitavoista tähän julkaisuun. "];
                            },
                        },
                        {
                            key: "fe93026b",
                            get: function () {
                                return ["Vain @" + this.props.username + " ja hänen piirinsä näkevät nämä julkaisut."];
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
                                return ["Yhteisön ylläpito määrää omat sääntönsä ja valvoo niiden noudattamista. Näiden lisäksi sovelletaan ", "."];
                            },
                        },
                        {
                            key: "gb7eca21",
                            get: function () {
                                return ["Yhteisöt ovat julkisia, joten suojatut tilit eivät voi tässä vaiheessa liittyä niihin. Voit lukea julkaisuja, mutta osallistuaksesi itse sinun on ", "."];
                            },
                        },
                        {
                            key: "jb124a07",
                            get: function () {
                                return ["Moderaattori poisti sinut, koska olit rikkonut tätä Yhteisön sääntöä: "];
                            },
                        },
                        {
                            key: "d6d818a1",
                            get: function () {
                                return [this.props.viewerCount + " näyttöä"];
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
                                return ["GIF käyttäjältä "];
                            },
                        },
                        {
                            key: "i9606e33",
                            get: function () {
                                return ["Video käyttäjältä "];
                            },
                        },
                        {
                            key: "i1a64d47",
                            get: function () {
                                return ["Kuva käyttäjältä "];
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
                                return ['Hae kyselyllä "', '"'];
                            },
                        },
                        {
                            key: "hce48b8b",
                            get: function () {
                                return ['Tarkoititko "', '"?'];
                            },
                        },
                        {
                            key: "f8ea2809",
                            get: function () {
                                return [this.props.selection + " voi nyt vastata"];
                            },
                        },
                        {
                            key: "hb92c979",
                            get: function () {
                                return ["", "/" + this.props.maxLimit + " merkkiä"];
                            },
                        },
                        {
                            key: "a20c0721",
                            get: function () {
                                return ["Muokattu viimeksi: "];
                            },
                        },
                        {
                            key: "a9ce2dd5",
                            get: function () {
                                return ["", " saadaksesi lisätietoa."];
                            },
                        },
                        {
                            key: "e2e6ea0d",
                            get: function () {
                                return ["käyttäjältä "];
                            },
                        },
                        {
                            key: "bd7349bb",
                            get: function () {
                                return ["Tallennettu viimeksi "];
                            },
                        },
                        {
                            key: "hb16b207",
                            get: function () {
                                return ["", " julkaisu perutaan, ja artikkeli siirretään luonnoksiisi eikä enää näy julkisesti."];
                            },
                        },
                        {
                            key: "dd5806bb",
                            get: function () {
                                return ["Seuraavan median sisältö saattaa olla loukkaavaa. "];
                            },
                        },
                        {
                            key: "d247a0b9",
                            get: function () {
                                return ["Muokkaustoiminto on rajattu alkuperäisiin julkaisuihin. Esimerkiksi vastauksia tai ketjuja ei voi muokata. ", " muokkausmahdollisuuksista."];
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
                                return ["Haluatko muokata piiriäsi? Siitä vain. Henkilöille ei ilmoiteta näiden tullessa poistetuiksi. ", "."];
                            },
                        },
                        {
                            key: "j0b75ce7",
                            get: function () {
                                return ["", " uutta artikkelien laadintaikkunaa, jossa voit muokata ulkoasua."];
                            },
                        },
                        {
                            key: "dd964cf3",
                            get: function () {
                                return ["Yhteisöt ovat julkisia, joten suojatut tilit eivät voi osallistua keskusteluun. Voit lukea julkaisuja ja tykätä niistä, mutta voidaksesi tehdä muuta sinun on ", "."];
                            },
                        },
                        {
                            key: "e34022a7",
                            get: function () {
                                return ["Vastauksena käyttäjälle "];
                            },
                        },
                        {
                            key: "bfd9c99b",
                            get: function () {
                                return ["Vastauksena käyttäjille "];
                            },
                        },
                        {
                            key: "g7a1000f",
                            get: function () {
                                return ["Vastauksena käyttäjille "];
                            },
                        },
                        {
                            key: "i558c201",
                            get: function () {
                                return ["Vastauksena käyttäjille "];
                            },
                        },
                        {
                            key: "j935bcdf",
                            get: function () {
                                return ["Vastaus käyttäjälle ", " yhteisössä " + this.props.communityName];
                            },
                        },
                        {
                            key: "i7bd9c8f",
                            get: function () {
                                return ["Vastaus käyttäjille ", " yhteisössä " + this.props.communityName];
                            },
                        },
                        {
                            key: "cfa0049d",
                            get: function () {
                                return ["Vastaus käyttäjille ", " yhteisössä " + this.props.communityName];
                            },
                        },
                        {
                            key: "jfc8e4b5",
                            get: function () {
                                return ["Vastaus käyttäjille ", " yhteisössä " + this.props.communityName];
                            },
                        },
                        {
                            key: "fe06c9f5",
                            get: function () {
                                return ["Vastaus käyttäjälle ", ". Vastauksesi näkyy myös hänen ", "."];
                            },
                        },
                        {
                            key: "f7e12e15",
                            get: function () {
                                return ["Vastaus käyttäjälle ", ". Vastauksesi näkyy myös hänen ", "."];
                            },
                        },
                        {
                            key: "eade6035",
                            get: function () {
                                return ["Vastaus käyttäjälle ", ". Vastauksesi näkyy myös hänen ", "."];
                            },
                        },
                        {
                            key: "da018b37",
                            get: function () {
                                return ["Vastaus käyttäjälle ", ". Vastauksesi näkyy myös hänen ", "."];
                            },
                        },
                        {
                            key: "e119d033",
                            get: function () {
                                return ["Vastataan käyttäjälle ", ". Myös seuraajasi käyttäjän " + this.props.trustedFriendsTweetOwner + " piirissä näkevät vastauksesi."];
                            },
                        },
                        {
                            key: "d0c02e7b",
                            get: function () {
                                return ["Vastataan käyttäjälle ", ". Myös käyttäjän " + this.props.trustedFriendsTweetOwner + " piiri näkee vastauksesi."];
                            },
                        },
                        {
                            key: "bce67b49",
                            get: function () {
                                return ["Vastataan käyttäjille ", ". Myös seuraajasi käyttäjän ", " piirissä näkevät vastauksesi."];
                            },
                        },
                        {
                            key: "e460ccf1",
                            get: function () {
                                return ["Vastataan käyttäjille ", ". Myös käyttäjän ", " piiri näkee vastauksesi."];
                            },
                        },
                        {
                            key: "i421898b",
                            get: function () {
                                return ["Vastataan käyttäjille ", ". Myös seuraajasi käyttäjän ", " piirissä näkevät vastauksesi."];
                            },
                        },
                        {
                            key: "c70a17eb",
                            get: function () {
                                return ["Vastataan käyttäjille ", ". Myös käyttäjän ", " piiri näkee vastauksesi."];
                            },
                        },
                        {
                            key: "b0d6bca7",
                            get: function () {
                                return ["Vastataan käyttäjille ", ". Myös seuraajasi käyttäjän ", " piirissä näkevät vastauksesi."];
                            },
                        },
                        {
                            key: "aacf46d1",
                            get: function () {
                                return ["Vastataan käyttäjille ", ". Myös käyttäjän ", " piiri näkee vastauksesi."];
                            },
                        },
                        {
                            key: "ff2f533f",
                            get: function () {
                                return ["Napsauttamalla alla ”Mainosta julkaisua” hyväksyt ", "."];
                            },
                        },
                        {
                            key: "b74b73ad",
                            get: function () {
                                return ["", " ", " ", "", "", " häviää"];
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
                                return ["Et ole vahvistanut uutta sähköpostia " + this.props.unverifiedEmail + ". "];
                            },
                        },
                        {
                            key: "f05afae5",
                            get: function () {
                                return ["Salasanan vaihtaminen kirjaa sinut ulos kaikista käynnissä olevista X-istunnoista, paitsi nyt käytössä olevasta. ", ", joilla on pääsy tiliisi, eivät muutu. "];
                            },
                        },
                        {
                            key: "d3543217",
                            get: function () {
                                return ["Hyväksyn sen, että X ja Persona käyttävät kuvia henkilötodistuksestani ja selfie-kuviani sekä niistä kerättyjä biometrisia tietoja henkilöllisyyteni todentamiseen ja X:n tietoturvaan ja petosten ehkäisyyn sekä maksuliikenteeseen liittyviin tarkoituksiin. Persona voi säilyttää tällaisia tietoja enintään 30 päivän ajan. X  voi säilyttää koko nimeni, osoitteeni ja tiivisteen henkilötodistukseni numerosta niin kauan kuin olen ", " tilaaja."];
                            },
                        },
                        {
                            key: "j7963df1",
                            get: function () {
                                return ["Hyväksyn sen, että X ja Au10tix käyttävät kuvia henkilötodistuksestani ja selfie-kuviani sekä niistä kerättyjä biometrisiä tietoja henkilöllisyyteni todentamiseen ja X:n tietoturvaan ja petosten ehkäisyyn sekä maksuliikenteeseen liittyviin tarkoituksiin. Au10tix voi säilyttää tällaisia tietoja enintään 30 päivän ajan. X voi säilyttää koko nimeni, osoitteeni ja tiivisteen henkilötodistukseni numerosta niin kauan kuin osallistun ", "- tai ", " -ohjelmaan. "];
                            },
                        },
                        {
                            key: "f8f20041",
                            get: function () {
                                return ["Hyväksyn sen, että X ja Au10tix käyttävät kuvia henkilötodistuksestani ja selfie-kuviani sekä niistä kerättyjä biometrisiä tietoja henkilöllisyyteni todentamiseen ja X:n tietoturvaan ja petosten ehkäisyyn sekä maksuliikenteeseen liittyviin tarkoituksiin. Au10tix voi säilyttää tällaisia tietoja enintään 30 päivän ajan. X voi säilyttää koko nimeni, osoitteeni ja tiivisteen henkilötodistukseni numerosta niin kauan kuin osallistun ", "- tai ", " -ohjelmaan. "];
                            },
                        },
                        {
                            key: "dd49801f",
                            get: function () {
                                return ["Hyväksyn sen, että X ja Stripe käyttävät kuvia henkilötodistuksestani ja selfie-kuviani sekä niistä kerättyjä biometrisiä tietoja henkilöllisyyteni todentamiseen ja X:n tietoturvaan ja petosten ehkäisyyn sekä maksuliikenteeseen liittyviin tarkoituksiin. Stripe tai sen alihankkijat voivat säilyttää tällaisia tietoja enintään 30 päivän ajan ja käyttää niitä mallien valmentamiseen ja tietokantojen päivitykseen petostentorjuntaa varten. X voi säilyttää koko nimeni, osoitteeni ja tiivisteen henkilötodistukseni numerosta niin kauan kuin osallistun ", "- tai ", " -ohjelmaan. "];
                            },
                        },
                        {
                            key: "c5cee667",
                            get: function () {
                                return ["Hyväksyn sen, että X ja Stripe käyttävät kuvia henkilötodistuksestani ja selfie-kuviani sekä niistä kerättyjä biometrisiä tietoja henkilöllisyyteni todentamiseen ja X:n tietoturvaan ja petosten ehkäisyyn sekä maksuliikenteeseen liittyviin tarkoituksiin. Stripe tai sen alihankkijat voivat säilyttää tällaisia tietoja enintään 30 päivän ajan ja käyttää niitä mallien valmentamiseen ja tietokantojen päivitykseen petostentorjuntaa varten. X voi säilyttää koko nimeni, osoitteeni ja tiivisteen henkilötodistukseni numerosta niin kauan kuin osallistun ", "- tai ", " -ohjelmaan. "];
                            },
                        },
                        {
                            key: "a4455c05",
                            get: function () {
                                return ["Kirjoita koodi muistiin tai ota siitä näyttökuva ja pane talteen. Koodia voi käyttää vain kerran. "];
                            },
                        },
                        {
                            key: "cd68cf4b",
                            get: function () {
                                return ["Tämä on tiliisi liitetty ensisijainen maa. Maa auttaa meitä mukauttamaan X-käyttökokemustasi. "];
                            },
                        },
                        {
                            key: "g66a254b",
                            get: function () {
                                return ["Nämä ovat yhteystiedot, jotka olet itse tuonut mobiililaitteiltasi. Näitä tietoja käytetään X-käyttäjäkokemuksesi personointiin, kuten seurattavien tilien ehdottamiseen. Voit poistaa aiemmin tuotuja yhteystietoja ja poistaa synkronoinnin X:ään käytöstä kaikilta laitteilta. Huomaa, että tähän kuluu vähän aikaa. "];
                            },
                        },
                        {
                            key: "ffa48331",
                            get: function () {
                                return ["Kun valinta on käytössä, voit liittää julkaisuihisi sijaintitiedon. "];
                            },
                        },
                        {
                            key: "a629c16f",
                            get: function () {
                                return ["", " " + this.props.discountedPrice + " laskutettuna kuukausittain " + n(this.props.duration, "", this.props.duration + " ") + "kuukauden ajan"];
                            },
                        },
                        {
                            key: "c142e70f",
                            get: function () {
                                return ["", " " + this.props.discountedPrice + " laskutettuna vuosittain " + n(this.props.duration, "", this.props.duration + " ") + "vuoden ajan"];
                            },
                        },
                        {
                            key: "e9dc8a25",
                            get: function () {
                                return ["", " ", " " + n(this.props.duration, "yhden", "" + this.props.duration) + " vuoden ajan"];
                            },
                        },
                        {
                            key: "f8a9cbb7",
                            get: function () {
                                return ["", " ", " " + n(this.props.duration, "yhden", "" + this.props.duration) + " kuukauden ajan"];
                            },
                        },
                        {
                            key: "ab3bf5a7",
                            get: function () {
                                return ["Kun estät käyttäjän, hän ei enää voi seurata sinua tai lähettää sinulle viestejä, etkä näe ilmoituksia häneltä. "];
                            },
                        },
                        {
                            key: "g124fce9",
                            get: function () {
                                return ["Joitakin tilitietoja saattaa yhä löytyä hakukoneilla, kuten Googlella tai Bingillä. "];
                            },
                        },
                        {
                            key: "d9ef8fbb",
                            get: function () {
                                return ["Jos haluat vain vaihtaa @tunnuksen, sinun ei tarvitse poistaa tiliäsi käytöstä – vaihda tunnus ", "."];
                            },
                        },
                        {
                            key: "b7a3adc1",
                            get: function () {
                                return ["Jos haluat käyttää nykyistä @tunnustasi tai sähköpostiosoitettasi toisella X-tilillä, ", " ennen tämän tilin käytöstä poistamista."];
                            },
                        },
                        {
                            key: "f3613d0b",
                            get: function () {
                                return ["Jos haluat ladata ", ", sinun on jätettävä tietopyyntö ja ladattava tiedot ennen tilisi käytöstä poistoa. Linkkiä tietojen lataukseen ei voida lähettää tilille, joka on poistettu käytöstä."];
                            },
                        },
                        {
                            key: "e9dec56f",
                            get: function () {
                                return ["Vahvistat, että antamasi syntymäpäivä ", " on totuudenmukainen. Jos ilmoitat virheellisen syntymäpäivän, sillä voi olla vaikutuksia tiliisi."];
                            },
                        },
                        {
                            key: "cfd2909d",
                            get: function () {
                                return ["X käyttää ikääsi käyttäjäkokemuksesi mukauttamiseen, mainonta mukaan lukien, ", " mukaisesti."];
                            },
                        },
                        {
                            key: "jea9c1cb",
                            get: function () {
                                return ["Voit valita, kuka näkee syntymäpäiväsi X:ssä. "];
                            },
                        },
                        {
                            key: "d80a7547",
                            get: function () {
                                return ["", " juontaa Huonetta"];
                            },
                        },
                        {
                            key: "j7293d6b",
                            get: function () {
                                return ["", " toimii co-hostina"];
                            },
                        },
                        {
                            key: "df79977f",
                            get: function () {
                                return ["", " puhuu"];
                            },
                        },
                        {
                            key: "ad960f39",
                            get: function () {
                                return ["", " kuuntelee"];
                            },
                        },
                        {
                            key: "bab4ce51",
                            get: function () {
                                return [this.props.start + "–" + this.props.end];
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
                                return ["Luo "];
                            },
                        },
                        {
                            key: "ca584c31",
                            get: function () {
                                return ["Tämä verkkosivusto on jo toisen yrityksen käytössä. Tarkoititko ", "?"];
                            },
                        },
                        {
                            key: "eb96a831",
                            get: function () {
                                return ["Nämä suodattimet eivät vaikuta ilmoituksiin seuraamiltasi henkilöiltä. "];
                            },
                        },
                        {
                            key: "aba5a349",
                            get: function () {
                                return ["Voit hiljentää yhden sanan, lauseen, @käyttäjätunnuksen tai avainsanan kerrallaan. "];
                            },
                        },
                        {
                            key: "f03ea36d",
                            get: function () {
                                return ["Kun hiljennät sanoja, et saa uusia ilmoituksia niitä sisältävistä julkaisuista etkä näe etusivullasi julkaisuja, joissa niitä on käytetty. "];
                            },
                        },
                        {
                            key: "b0b13519",
                            get: function () {
                                return ["Tässä ovat hiljentämäsi käyttäjät. Voit lisätä tai poistaa käyttäjiä tästä listasta. "];
                            },
                        },
                        {
                            key: "e212a9ab",
                            get: function () {
                                return ["Määrää itse, näetkö arkaluonteista mediaa X:ssä. Lue lisää ", "."];
                            },
                        },
                        {
                            key: "cbc4f32d",
                            get: function () {
                                return ["Tämä sisältää muun arkaluonteiseksi merkityn median, esimerkiksi kun tilit ovat omissa ", " merkinneet sisältönsä arkaluonteiseksi."];
                            },
                        },
                        {
                            key: "a4fc317d",
                            get: function () {
                                return ["Tilisi on ilmiannettu, eikä se voi osallistua Sisällöntuottajien tulonjako ‑ohjelmaan. Voit hakea muutosta noudattamalla ", " annettuja ohjeita. Osuutesi tuloista kertyy muutoksenhakusi käsittelyn ajan."];
                            },
                        },
                        {
                            key: "a8e78be7",
                            get: function () {
                                return ["Tilisi on ilmiannettu, eikä se voi osallistua Osuus mainostuloista -ohjelmaan. Voit hakea muutosta noudattamalla ", " annettuja ohjeita. Osuutesi mainostuloista kertyy muutoksenhakusi käsittelyn ajan."];
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
                                return ["Tilaa", "" + this.props.name];
                            },
                        },
                        {
                            key: "ede65a59",
                            get: function () {
                                return ["Mietitkö, paljonko voisit tienata? "];
                            },
                        },
                        {
                            key: "a9c053c7",
                            get: function () {
                                return ["Hakemalla sitoudut "];
                            },
                        },
                        {
                            key: "geee69df",
                            get: function () {
                                return ["Valitse kuukausihinta, joka sopii sinulle ja yleisöllesi. Mietitkö, paljonko mahdat ansaita? "];
                            },
                        },
                        {
                            key: "fdf28443",
                            get: function () {
                                return ["Hyväksymällä ja jatkamalla sitoudut "];
                            },
                        },
                        {
                            key: "f43d68d7",
                            get: function () {
                                return ["Tarkista ja vahvista tilaushintasi. ", " niin kauan kuin Tilaukset on testausvaiheessa."];
                            },
                        },
                        {
                            key: "h406634b",
                            get: function () {
                                return ["Olemme varmistaneet Stripe-tilisi. Tilisi tilaukset tulevat voimaan pian. Lähetämme sinulle ilmoituksen, kun tilaus on voimassa. Näet myös omasta profiilistasi, ovatko tilaukset käytössä."];
                            },
                        },
                        {
                            key: "d4b0b963",
                            get: function () {
                                return ["Napauttamalla alta ilmaiset hyväksyväsi "];
                            },
                        },
                        {
                            key: "j2d920f7",
                            get: function () {
                                return ['Valitsemalla "Liity ja tunnistaudu" hyväksyt '];
                            },
                        },
                        {
                            key: "fde94f97",
                            get: function () {
                                return ['Valitsemalla "Liity ja tunnistaudu" hyväksyt '];
                            },
                        },
                        {
                            key: "afbd47cb",
                            get: function () {
                                return ["Ansaitse tuloja mainoksista, joita näytetään vastauksissa julkaisuihisi. Tullakseen hyväksytyksi Osuus mainostuloista -ohjelmaan tilisi on noudatettava ", " sekä "];
                            },
                        },
                        {
                            key: "ce6f73c7",
                            get: function () {
                                return ["Määrää, miten X kustomoi käyttäjäkokemustasi "];
                            },
                        },
                        {
                            key: "j31f2f97",
                            get: function () {
                                return ["Kyllä, kaikkiin automatisoituihin tileihin on lisättävä tunnuslappu. Tämä vaatimus on lisätty ", "."];
                            },
                        },
                        {
                            key: "ed8f77d3",
                            get: function () {
                                return ["Lue lisää ", " -sivulta."];
                            },
                        },
                        {
                            key: "dd040d67",
                            get: function () {
                                return ["Lue lisää ", "-sivulta."];
                            },
                        },
                        {
                            key: "if2bb997",
                            get: function () {
                                return ["Ikävää, että jätät meidät. #GoodBye"];
                            },
                        },
                        {
                            key: "i1e24825",
                            get: function () {
                                return ["Jos et ole antanut syntymäaikaasi, olemme muodostaneet X-profiiliisi ja toimintaasi perustuvan ikähaarukan. Ikätietoa käytetään käyttäjäkokemuksesi personointiin. "];
                            },
                        },
                        {
                            key: "a200fc71",
                            get: function () {
                                return ["Väärä päivä? Voit lisätä syntymäpäivän ", " jakamatta sitä julkisesti."];
                            },
                        },
                        {
                            key: "a97ef88f",
                            get: function () {
                                return ["Räätälöidyt yleisöt kootaan usein sähköpostilistasta tai selausmieltymysten perusteella. Ne auttavat mainostajia tavoittamaan potentiaalisia asiakkaita tai ihmisiä, jotka ovat jo ilmaisseet kiinnostuksensa mainostajaa kohtaan. "];
                            },
                        },
                        {
                            key: "f451c521",
                            get: function () {
                                return ["Olet tällä hetkellä mukana ", " "];
                            },
                        },
                        {
                            key: "f27cc8af",
                            get: function () {
                                return ["Ottaaksesi tämän käyttöön siirry ", " koskeviin asetuksiin ja ota käyttöön ”Personoi päätellyn henkilöllisyytesi perusteella”."];
                            },
                        },
                        {
                            key: "h0085c59",
                            get: function () {
                                return ["Ottaaksesi tämän käyttöön siirry ", " -asetuksiisi ja ota käyttöön ”Personoi päätellyn henkilöllisyytesi perusteella”."];
                            },
                        },
                        {
                            key: "b78e30fd",
                            get: function () {
                                return ["Voit poistaa nämä tiedot kytkemällä pois käytöstä valinnan ”Personoi päätellyn henkilöllisyytesi perusteella” ", " -asetuksista."];
                            },
                        },
                        {
                            key: "bb593021",
                            get: function () {
                                return ["Voit poistaa nämä tiedot kytkemällä pois käytöstä valinnan ”Personoi päätellyn henkilöllisyytesi perusteella” ", " koskevista asetuksista."];
                            },
                        },
                        {
                            key: "h60f45ef",
                            get: function () {
                                return ["Nämä ovat pääteltyjä tiivisteitä sähköpostiosoitteista, joilla on yhteisiä komponentteja X:lle antamasi sähköpostiosoitteen kanssa. Voit poistaa nämä tiedot kytkemällä pois käytöstä valinnan ”Personoi päätellyn henkilöllisyytesi perusteella” ", " koskevista asetuksista."];
                            },
                        },
                        {
                            key: "cbcb2413",
                            get: function () {
                                return ["Näitä laitteita X käyttää parantaakseen ja mitatakseen käyttäjäkokemustasi tässä selaimessa. "];
                            },
                        },
                        {
                            key: "e21b623d",
                            get: function () {
                                return ["Nämä selaimet ja laitteet on yhdistetty sinuun. "];
                            },
                        },
                        {
                            key: "i4d58f43",
                            get: function () {
                                return ["Näitä selaimia, laitteita ja tietoja X käyttää käyttäjäkokemuksesi personointiin. Näihin sisältyy laitteita ja selaimia, joilla et ole kirjautunut sisään X:ään, sekä sähköpostiosoitteita ja puhelinnumeroita, jotka on liitetty X-tiliisi. "];
                            },
                        },
                        {
                            key: "a1fdeb45",
                            get: function () {
                                return ["Mene ", " kytkeäksesi sen päälle."];
                            },
                        },
                        {
                            key: "hcb3ad67",
                            get: function () {
                                return ["Jos näet sovelluksen toimivan epäilyttävästi, siirry ", " -välilehdelle ja poista sovelluksen käyttöoikeudet. Joissakin tapauksissa IP-sijainti voi erota fyysisestä sijainnistasi. "];
                            },
                        },
                        {
                            key: "adc26d49",
                            get: function () {
                                return ["X:n mainontakumppanit kokoavat yleisöjä ostopäätösten, elämäntapojen sekä muun verkossa ja sen ulkopuolella tapahtuvan toiminnan perusteella. "];
                            },
                        },
                        {
                            key: "efc1de65",
                            get: function () {
                                return ["Jokin meni pieleen, eikä X-tietojesi lähetys onnistunut. Pyydä tietojasi ", "."];
                            },
                        },
                        {
                            key: "f0e84609",
                            get: function () {
                                return ["", " sitten"];
                            },
                        },
                        {
                            key: "b76d6eb7",
                            get: function () {
                                return ["Vain ensimmäiset 1 000 vierasta voidaan näyttää. Huoneella saattaa olla myös anonyymeja kuuntelijoita tai kuulijoita, jotka eivät ole kirjautuneena X:ään. "];
                            },
                        },
                        {
                            key: "idcd199b",
                            get: function () {
                                return [this.props.minutes + " min " + this.props.seconds + " s"];
                            },
                        },
                        {
                            key: "ee530bbf",
                            get: function () {
                                return [this.props.hours + " h " + this.props.minutes + " min"];
                            },
                        },
                        {
                            key: "bff29c95",
                            get: function () {
                                return ["", " vaihtoi ryhmän kuvan"];
                            },
                        },
                        {
                            key: "b16e4d45",
                            get: function () {
                                return ["Vaihdoit ryhmän nimeksi "];
                            },
                        },
                        {
                            key: "c5760699",
                            get: function () {
                                return ["", " vaihtoi ryhmän nimeksi "];
                            },
                        },
                        {
                            key: "a72730a1",
                            get: function () {
                                return ["Ryhmän nimeksi vaihdettiin "];
                            },
                        },
                        {
                            key: "a4bc88c3",
                            get: function () {
                                return ["", " lisäsi "];
                            },
                        },
                        {
                            key: "bfdff0c3",
                            get: function () {
                                return ["", " lisätty"];
                            },
                        },
                        {
                            key: "fc10875f",
                            get: function () {
                                return ["", " lähti"];
                            },
                        },
                        {
                            key: "fa95b019",
                            get: function () {
                                return ["", " lisäsi sinut"];
                            },
                        },
                        {
                            key: "e3534477",
                            get: function () {
                                return ["Tässä ryhmässä on "];
                            },
                        },
                        {
                            key: "b6656851",
                            get: function () {
                                return ["Tässä ryhmässä on " + this.props.count + " muu" + n(this.props.count, " henkilö", "ta henkilöä")];
                            },
                        },
                        {
                            key: "d6db6323",
                            get: function () {
                                return ["Tämä julkaisu saattaa sisältää arkaluonteista sisältöä. "];
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
                                return ["Viestit on salattu. "];
                            },
                        },
                        {
                            key: "af0bb3eb",
                            get: function () {
                                return ["Et voi lähettää salattuja yksityisviestejä tälle henkilölle. "];
                            },
                        },
                        {
                            key: "b9f61623",
                            get: function () {
                                return ["Et voi enää lähettää viestejä tälle henkilölle. ", "."];
                            },
                        },
                        {
                            key: "h27b1291",
                            get: function () {
                                return ["Tämä salattu keskustelu ei ole käytettävissä nykyisellä laitteellasi. Keskusteluun päästäksesi sinun on kirjauduttava sisään edellisellä laitteella. "];
                            },
                        },
                        {
                            key: "bcabe3f5",
                            get: function () {
                                return ["Et voi lähettää viestejä tälle ryhmälle, koska tiliäsi ei ole varmennettu. "];
                            },
                        },
                        {
                            key: "jdef4bc7",
                            get: function () {
                                return ["Et voi lähettää viestejä tälle käyttäjälle, koska tiliäsi ei ole varmennettu. "];
                            },
                        },
                        {
                            key: "i005f1fd",
                            get: function () {
                                return ["Vastasit käyttäjän ", " Fleet-julkaisuun: "];
                            },
                        },
                        {
                            key: "b35cee41",
                            get: function () {
                                return ["Vastasi Fleet-julkaisuusi: "];
                            },
                        },
                        {
                            key: "dc4b75a1",
                            get: function () {
                                return ["", " lähetti GIFin"];
                            },
                        },
                        {
                            key: "hcbbbb35",
                            get: function () {
                                return ["", " lähetti linkin"];
                            },
                        },
                        {
                            key: "c1e1f849",
                            get: function () {
                                return ["", " lähetti kuvan"];
                            },
                        },
                        {
                            key: "c7e2464f",
                            get: function () {
                                return ["", " lähetti tarran"];
                            },
                        },
                        {
                            key: "eee2f121",
                            get: function () {
                                return ["", " lähetti videon"];
                            },
                        },
                        {
                            key: "be5a9617",
                            get: function () {
                                return ["", " lähetti ääniviestin"];
                            },
                        },
                        {
                            key: "e802e257",
                            get: function () {
                                return ["", " jakoi julkaisun"];
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
                                return ["Lisäsit reaktion ", " käyttäjän @", " videoon"];
                            },
                        },
                        {
                            key: "d764af97",
                            get: function () {
                                return ["", " lisäsi reaktion ", " käyttäjän @", " videoon"];
                            },
                        },
                        {
                            key: "ab1cdfe3",
                            get: function () {
                                return ["Lisäsit reaktion ", " videoon"];
                            },
                        },
                        {
                            key: "f0cf1699",
                            get: function () {
                                return ["", " lisäsi reaktion ", " videoon"];
                            },
                        },
                        {
                            key: "hec0fd4d",
                            get: function () {
                                return ["Lisäsit reaktion ", " käyttäjän @", " kuvaan"];
                            },
                        },
                        {
                            key: "j55320df",
                            get: function () {
                                return ["", " lisäsi reaktion ", " käyttäjän @", " kuvaan"];
                            },
                        },
                        {
                            key: "jf27606b",
                            get: function () {
                                return ["Lisäsit reaktion ", " kuvaan"];
                            },
                        },
                        {
                            key: "cd110359",
                            get: function () {
                                return ["", " lisäsi reaktion ", " kuvaan"];
                            },
                        },
                        {
                            key: "e70dcc35",
                            get: function () {
                                return ["Lisäsit reaktion ", " käyttäjän @", " GIFiin"];
                            },
                        },
                        {
                            key: "g1bf440b",
                            get: function () {
                                return ["", " lisäsi reaktion ", " käyttäjän @", " GIFiin"];
                            },
                        },
                        {
                            key: "b2da1bf9",
                            get: function () {
                                return ["Lisäsit reaktion ", " GIFiin"];
                            },
                        },
                        {
                            key: "g84c0421",
                            get: function () {
                                return ["", " lisäsi reaktion ", " GIFiin"];
                            },
                        },
                        {
                            key: "hc1bd66d",
                            get: function () {
                                return ["Reagoit käyttäjän @", " julkaisuun emojilla "];
                            },
                        },
                        {
                            key: "bd3edf13",
                            get: function () {
                                return ["", " reagoi käyttäjän @", " julkaisuun emojilla "];
                            },
                        },
                        {
                            key: "df2dc76f",
                            get: function () {
                                return ["Reagoit julkaisuun emojilla "];
                            },
                        },
                        {
                            key: "aba18aef",
                            get: function () {
                                return ["", " reagoi julkaisuun emojilla "];
                            },
                        },
                        {
                            key: "cd2e7c19",
                            get: function () {
                                return ["Lisäsit reaktion ", " käyttäjän @", " linkkiin"];
                            },
                        },
                        {
                            key: "aee9e7fb",
                            get: function () {
                                return ["", " lisäsi reaktion ", " käyttäjän @", " linkkiin"];
                            },
                        },
                        {
                            key: "f9fb1cf7",
                            get: function () {
                                return ["Lisäsit reaktion ", " linkkiin"];
                            },
                        },
                        {
                            key: "f2bf910f",
                            get: function () {
                                return ["", " lisäsi reaktion ", " linkkiin"];
                            },
                        },
                        {
                            key: "i6cec545",
                            get: function () {
                                return ["Lisäsit reaktion ", ": ", "käyttäjän @", " viestiin"];
                            },
                        },
                        {
                            key: "d6998bab",
                            get: function () {
                                return ["", " lisäsi reaktion ", ": ", " käyttäjän @", " viestiin"];
                            },
                        },
                        {
                            key: "cec676f3",
                            get: function () {
                                return ["Lisäsit reaktion ", ": "];
                            },
                        },
                        {
                            key: "a2706f9b",
                            get: function () {
                                return ["", " lisäsi reaktion ", ": "];
                            },
                        },
                        {
                            key: "ff973a65",
                            get: function () {
                                return ["Lisäsit käyttäjän @", " ääniviestiin reaktion "];
                            },
                        },
                        {
                            key: "ec2cede5",
                            get: function () {
                                return ["", " lisäsi käyttäjän @", " ääniviestiin reaktion "];
                            },
                        },
                        {
                            key: "i1d08199",
                            get: function () {
                                return ["Lisäsit ääniviestiin reaktion "];
                            },
                        },
                        {
                            key: "d424b45f",
                            get: function () {
                                return ["", " lisäsi ääniviestiin reaktion "];
                            },
                        },
                        {
                            key: "d6b15bbf",
                            get: function () {
                                return ["Lisäsit reaktion "];
                            },
                        },
                        {
                            key: "ac0d4bc7",
                            get: function () {
                                return ["", " lisäsi reaktion "];
                            },
                        },
                        {
                            key: "fa4f5b49",
                            get: function () {
                                return ["X:n järjestelmät kykenevät skannaamaan jaetut linkit ja jaetun median roskapostin, häirinnän ja kielletyn sisällön havaitsemiseksi. Analysoimme myös käyttötottumuksiasi voidaksemme havaita epäilyttävän toiminnan ja parantaaksemme käyttökokemustasi. Saatamme tarkistaa yksityisviestejä manuaalisesti selvittäessämme ilmoitettuja rikkomuksia ja palvelun väärinkäyttöä sekä lain tai viranomaispyynnön sitä edellyttäessä. Lisätietoja saat ", "."];
                            },
                        },
                        {
                            key: "a66142ad",
                            get: function () {
                                return ["Viestipyynnöt ihmisiltä, joita et seuraa, tulevat tänne. Voit vastata heiltä tulleisiin viesteihin hyväksyttyäsi pyynnön. "];
                            },
                        },
                        {
                            key: "hc37d3bb",
                            get: function () {
                                return ["Kun aloitat tehtävän, Google voi kerätä ja käyttää tietoa sinusta, laitteestasi ja selaimestasi. Lue Googlen ", "."];
                            },
                        },
                        {
                            key: "eea0a14f",
                            get: function () {
                                return [this.props.formattedCount + " tykkäys" + n(this.props.count, "", "tä")];
                            },
                        },
                        {
                            key: "cca42d0b",
                            get: function () {
                                return [this.props.formattedCount + " kuvaa ja videota"];
                            },
                        },
                        {
                            key: "a0a3adf7",
                            get: function () {
                                return [this.props.formattedCount + " julkaisu" + n(this.props.count, "", "a")];
                            },
                        },
                        {
                            key: "e6264621",
                            get: function () {
                                return ["Et voi seurata tai nähdä käyttäjän @" + this.props.screenName + " julkaisuja. "];
                            },
                        },
                        {
                            key: "f98ecc47",
                            get: function () {
                                return ["Haluatko varmasti nähdä nämä julkaisut? Julkaisujen näyttäminen ei poista käyttäjän @" + this.props.screenName + " estoa. "];
                            },
                        },
                        {
                            key: "i8197603",
                            get: function () {
                                return ["Voit tehdä ilmoituksen immateriaaliomaisuuden loukkauksesta ", ". Muista tämän tuotteen ongelmista voit ilmoittaa iOS- tai Android-sovelluksesta."];
                            },
                        },
                        {
                            key: "a21f2f79",
                            get: function () {
                                return ["Lisätietoa tuoterikkomuksista ", "."];
                            },
                        },
                        {
                            key: "ff60a139",
                            get: function () {
                                return ["Määrä: "];
                            },
                        },
                        {
                            key: "f575f533",
                            get: function () {
                                return ["Toimialat ovat käyttäjän itsensä valitsemia. X ei määrää, varmenna tai vahvista niitä. "];
                            },
                        },
                        {
                            key: "cebed305",
                            get: function () {
                                return ["Tämä tili on tilin ", " affiliaatti."];
                            },
                        },
                        {
                            key: "i1824ce3",
                            get: function () {
                                return ["Vain hyväksytyt seuraajat näkevät käyttäjän @" + this.props.screenName + " julkaisut. Voit pyytää lukuoikeutta valitsemalla Seuraa. "];
                            },
                        },
                        {
                            key: "da9d52d7",
                            get: function () {
                                return ["X jäädyttää tilit, jotka rikkovat ", "."];
                            },
                        },
                        {
                            key: "b028aec5",
                            get: function () {
                                return ["Tarvitsemme tiedon siitä, onko X-tili ", " sinun. Jos ei ole, poistamme osoitteen ", " sen tiedoista."];
                            },
                        },
                        {
                            key: "c43645ad",
                            get: function () {
                                return ["Jos X-tili ", " on sinun ja haluat perua tulevat sähköposti-ilmoitukset, tee se ", "."];
                            },
                        },
                        {
                            key: "b8e3884f",
                            get: function () {
                                return ["Poistimme sähköpostiosoitteesi ", " X-tililtä ", ". Et enää saa tilille tarkoitettuja ilmoituksia."];
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
                                return ["Joku on ehkä vahingossa antanut sähköpostiosoitteesi rekisteröityessään X-tililleen. Vaihtoehtoisesti kyse saattaa olla kiusanteosta. Voit ilmiantaa tilin, jotta X.ää saadaan puhdistettua epärehellisistä toimijoista. "];
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
                                return ["Kokeile ottaa ", " seurantaan, jotta suosituimpia artikkeleita alkaa tulla tarjolle."];
                            },
                        },
                        {
                            key: "dc3a6d2d",
                            get: function () {
                                return ["Seurattiin käyttäjää @" + this.props.screenName + ". ", "."];
                            },
                        },
                        {
                            key: "j5668d8f",
                            get: function () {
                                return ["Kun kuuntelet anonyymina, et näy muille etkä voi osallistua. "];
                            },
                        },
                        {
                            key: "fafd5f6f",
                            get: function () {
                                return ["Tilaajaetuihin kuuluu pääsy yksinoikeudella tällaisiin Huoneisiin. Vain tilin @" + this.props.screenName + " Tilaajat voivat liittyä tähän Huoneeseen. ", "."];
                            },
                        },
                        {
                            key: "b1e1d521",
                            get: function () {
                                return ["Nouse arviointipisteissä tasolle " + this.props.ratingImpactToEarnIn + " nykytasolta " + this.props.currentImpact + ", niin saat jälleen kirjoittaa huomautuksia."];
                            },
                        },
                        {
                            key: "e3a1e2a3",
                            get: function () {
                                return ["Se koskee linkkiä tässä julkaisussa (", ") ja pitäisi liittää kaikkiin julkaisuihin, joihin linkki sisältyy"];
                            },
                        },
                        {
                            key: "eb0960b9",
                            get: function () {
                                return ["Oletko varma, että tästä huomautuksesta on ", ", joissa kuva esiintyy, vaikka julkaisujen teksti eroaisi?"];
                            },
                        },
                        {
                            key: "c14fcfe5",
                            get: function () {
                                return ["Oletko varma, että tästä huomautuksesta on apua kaikissa julkaisuissa, joissa kuva esiintyy, vaikka julkaisujen teksti eroaisi?"];
                            },
                        },
                        {
                            key: "f8d04b49",
                            get: function () {
                                return ["Oletko varma, että tästä huomautuksesta on ", ", joissa video esiintyy, vaikka julkaisujen teksti eroaisi?"];
                            },
                        },
                        {
                            key: "ef94efc3",
                            get: function () {
                                return ["Oletko varma, että tästä huomautuksesta on apua kaikissa julkaisussa, joissa video esiintyy, vaikka julkaisujen teksti eroaisi?"];
                            },
                        },
                        {
                            key: "a89cdd31",
                            get: function () {
                                return ["Oletko varma, että tästä huomautuksesta on ", ", joissa media esiintyy, vaikka julkaisujen teksti eroaisi?"];
                            },
                        },
                        {
                            key: "f19fb541",
                            get: function () {
                                return ["Oletko varma, että tästä huomautuksesta on apua kaikissa julkaisuissa, joissa media esiintyy, vaikka julkaisujen teksti eroaisi?"];
                            },
                        },
                        {
                            key: "i9e31fe5",
                            get: function () {
                                return ["Lue lisää "];
                            },
                        },
                        {
                            key: "h14bda75",
                            get: function () {
                                return ["Pyynnöt anonymisoidaan ja ", " avoimuuden nimissä"];
                            },
                        },
                        {
                            key: "c43ef159",
                            get: function () {
                                return ["Jos haluat auttaa kirjoittamaan ja arvioimaan Yhteisöhuomautuksia, ", "."];
                            },
                        },
                        {
                            key: "c815dfaf",
                            get: function () {
                                return ["Jotta pyyntöjen laatu pysyy hyvänä ja voimme estää roskaviestit, tileille on vahvistettava puhelinnumero, jotta niillä voidaan tehdä yhteisöhuomautuspyyntöjä. "];
                            },
                        },
                        {
                            key: "bd9cf141",
                            get: function () {
                                return ["Julkaisun kirjoittajana voit "];
                            },
                        },
                        {
                            key: "e837f62f",
                            get: function () {
                                return [this.props.impactDisplayNumber + " arviointipisteet"];
                            },
                        },
                        {
                            key: "f2bad803",
                            get: function () {
                                return [this.props.impactDisplayNumber + " kirjoituspisteet"];
                            },
                        },
                        {
                            key: "g062ed0f",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty sittemmin poistetun julkaisun kuvaan, ja se voidaan näyttää muissa julkaisuissa, joihin kuva sisältyy"];
                            },
                        },
                        {
                            key: "j4f06e2f",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty ", " kuvaan, ja se voidaan näyttää muissa julkaisuissa, joihin kuva sisältyy"];
                            },
                        },
                        {
                            key: "ida22561",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty sittemmin poistetun julkaisun videoon, ja se voidaan näyttää muissa julkaisuissa, joihin video sisältyy"];
                            },
                        },
                        {
                            key: "g68aa88d",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty ", " videoon, ja se voidaan näyttää muissa julkaisuissa, joihin video sisältyy"];
                            },
                        },
                        {
                            key: "ia62f949",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty sittemmin poistetun julkaisun mediaan, ja se voidaan näyttää muissa julkaisuissa, joihin media sisältyy"];
                            },
                        },
                        {
                            key: "c6eb7cbb",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty ", " mediaan, ja se voidaan näyttää muissa julkaisuissa, joihin media sisältyy"];
                            },
                        },
                        {
                            key: "f9b81033",
                            get: function () {
                                return ["Huomautus on alkujaan kirjoitettu sittemmin poistettuun julkaisuun. Se voidaan näyttää muissa julkaisuissa, joissa on linkki kohteeseen "];
                            },
                        },
                        {
                            key: "de254823",
                            get: function () {
                                return ["Huomautus on alkujaan kirjoitettu ", ". Se voidaan näyttää muissa julkaisuissa, joissa on linkki kohteeseen "];
                            },
                        },
                        {
                            key: "de5532bd",
                            get: function () {
                                return ["Voitaisiin näyttää ", ", joihin tämä video sisältyy, jos käyttäjät yhtyvät näkemykseen."];
                            },
                        },
                        {
                            key: "ib6805bd",
                            get: function () {
                                return ["Voitaisiin näyttää julkaisuissa, joihin tämä video sisältyy, jos käyttäjät yhtyvät näkemykseen."];
                            },
                        },
                        {
                            key: "g185d44d",
                            get: function () {
                                return ["Voitaisiin näyttää ", ", joihin tämä kuva sisältyy, jos käyttäjät yhtyvät näkemykseen."];
                            },
                        },
                        {
                            key: "aeebdd99",
                            get: function () {
                                return ["Voitaisiin näyttää julkaisuissa, joihin tämä kuva sisältyy, jos käyttäjät yhtyvät näkemykseen."];
                            },
                        },
                        {
                            key: "d54bfbd9",
                            get: function () {
                                return ["Voitaisiin näyttää ", ", joihin tämä media sisältyy, jos käyttäjät yhtyvät näkemykseen."];
                            },
                        },
                        {
                            key: "a9efbf0f",
                            get: function () {
                                return ["Voitaisiin näyttää julkaisuissa, joihin tämä media sisältyy, jos käyttäjät yhtyvät näkemykseen."];
                            },
                        },
                        {
                            key: "jef71e81",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty sittemmin poistetun julkaisun videoon, ja se näytetään ", ", joihin video sisältyy"];
                            },
                        },
                        {
                            key: "ie594609",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty ", " videoon, ja se näytetään ", ", joihin video sisältyy"];
                            },
                        },
                        {
                            key: "a48e0b6b",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty sittemmin poistetun julkaisun videoon, ja se voidaan näyttää ", ", joihin video sisältyy"];
                            },
                        },
                        {
                            key: "a0e626a3",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty ", " videoon, ja se voidaan näyttää ", ", joihin video sisältyy"];
                            },
                        },
                        {
                            key: "fcd2eeeb",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty sittemmin poistetun julkaisun kuvaan, ja se näytetään ", ", joihin kuva sisältyy"];
                            },
                        },
                        {
                            key: "j300ac63",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty ", " kuvaan, ja se näytetään ", ", joihin kuva sisältyy"];
                            },
                        },
                        {
                            key: "bf532f23",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty sittemmin poistetun julkaisun kuvaan, ja se voidaan näyttää ", ", joihin kuva sisältyy"];
                            },
                        },
                        {
                            key: "bda86c55",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty ", " kuvaan, ja se voidaan näyttää  ", ", joihin kuva sisältyy"];
                            },
                        },
                        {
                            key: "a13701bd",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty sittemmin poistetun julkaisun mediaan, ja se näytetään ", ", joihin media sisältyy"];
                            },
                        },
                        {
                            key: "e2a0a791",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty ", " mediaan, ja se näytetään ", ", joihin media sisältyy"];
                            },
                        },
                        {
                            key: "b8e4bb0b",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty sittemmin poistetun julkaisun mediaan, ja se voidaan näyttää ", ", joihin media sisältyy"];
                            },
                        },
                        {
                            key: "hada7e59",
                            get: function () {
                                return ["Huomautus on alkujaan lisätty ", " mediaan, ja se voidaan näyttää  ", ", joihin media sisältyy"];
                            },
                        },
                        {
                            key: "e8969de9",
                            get: function () {
                                return ["Näytetään ", ", joissa on linkki kohteeseen "];
                            },
                        },
                        {
                            key: "a389fb7b",
                            get: function () {
                                return ["Voitaisiin näyttää ", ", joissa on linkki kohteeseen "];
                            },
                        },
                        {
                            key: "gd8d8205",
                            get: function () {
                                return ["Huomautus on alkujaan kirjoitettu sittemmin poistettuun julkaisuun. Se näytetään ", ", joissa on linkki kohteeseen "];
                            },
                        },
                        {
                            key: "i981a661",
                            get: function () {
                                return ["Huomautus on alkujaan ", ". Se näytetään ", ", joissa on linkki kohteeseen "];
                            },
                        },
                        {
                            key: "jceb2edb",
                            get: function () {
                                return ["Huomautus on alkujaan kirjoitettu sittemmin poistettuun julkaisuun. Se voidaan näyttää ", ", joissa on linkki kohteeseen "];
                            },
                        },
                        {
                            key: "f20a22a1",
                            get: function () {
                                return ["Huomautus on alkujaan ", ". Se voidaan näyttää ", ", joissa on linkki kohteeseen "];
                            },
                        },
                        {
                            key: "f43e2fdf",
                            get: function () {
                                return ["Näytä pienelle koeyleisölle X:ssä · " + this.props.impressionTruncated + "+ näyttöä"];
                            },
                        },
                        {
                            key: "j72bc9ab",
                            get: function () {
                                return ["Näytä pienelle koeyleisölle X:ssä"];
                            },
                        },
                        {
                            key: "d60e4375",
                            get: function () {
                                return ["Näytetty X:ssä · " + this.props.impressionTruncated + "+ näyttöä"];
                            },
                        },
                        {
                            key: "bf62daf1",
                            get: function () {
                                return ["Näytetään X:ssä"];
                            },
                        },
                        {
                            key: "i8fa1313",
                            get: function () {
                                return ["Arviot anonymisoidaan ja julkaistaan läpinäkyvyyden nimissä. Lue, miten Yhteisöhuomautukset tuo datan ", "."];
                            },
                        },
                        {
                            key: "had203a9",
                            get: function () {
                                return ["Arvioit tämän huomautuksen ", "."];
                            },
                        },
                        {
                            key: "h42a21df",
                            get: function () {
                                return ["Arvioit tämän huomautuksen ", "."];
                            },
                        },
                        {
                            key: "c3d1a1b1",
                            get: function () {
                                return ["Arvioit tämän huomautuksen ", "."];
                            },
                        },
                        {
                            key: "c7f250eb",
                            get: function () {
                                return ["Pitäisikö tämä huomautus näyttää ", ", joissa on linkki kohteeseen ", "?"];
                            },
                        },
                        {
                            key: "bc2fde51",
                            get: function () {
                                return ["Pitäisikö tämä huomautus näyttää ", ", joissa tämä video esiintyy?"];
                            },
                        },
                        {
                            key: "e80d1f67",
                            get: function () {
                                return ["Pitäisikö tämä huomautus näyttää ", ", joissa tämä kuva esiintyy?"];
                            },
                        },
                        {
                            key: "c692f6b5",
                            get: function () {
                                return ["Pitäisikö tämä huomautus näyttää ", ", joissa tämä media esiintyy?"];
                            },
                        },
                        {
                            key: "g46e2949",
                            get: function () {
                                return ["Pitäisikö tämä huomautus näyttää kaikissa julkaisuissa, joissa on linkki sivulle ", "?"];
                            },
                        },
                        {
                            key: "c57661e9",
                            get: function () {
                                return ["Pitäisikö tämä huomautus näyttää kaikissa julkaisussa, joissa tämä video esiintyy?"];
                            },
                        },
                        {
                            key: "bb286921",
                            get: function () {
                                return ["Pitäisikö tämä huomautus näyttää kaikissa julkaisussa, joissa tämä kuva esiintyy?"];
                            },
                        },
                        {
                            key: "df397f55",
                            get: function () {
                                return ["Pitäisikö tämä huomautus näyttää kaikissa julkaisussa, joissa tämä media esiintyy?"];
                            },
                        },
                        {
                            key: "b936a16b",
                            get: function () {
                                return ["Onko sinulla ideoita Yhteisöhuomautusten parantamiseksi? "];
                            },
                        },
                        {
                            key: "e77dac87",
                            get: function () {
                                return ["Näytä " + this.props.remainingCount + " muuta pyytäjien mainitsemaa julkaisu" + n(this.props.remainingCount, "", "a")];
                            },
                        },
                        {
                            key: "if0d6dd7",
                            get: function () {
                                return ["Yhteisöhuomautusten laatijat käyttävät nimimerkkejä · "];
                            },
                        },
                        {
                            key: "f49cbf83",
                            get: function () {
                                return ["Tämä on Yhteisöhuomautusten uusi ominaisuus. ", "."];
                            },
                        },
                        {
                            key: "a94c6db7",
                            get: function () {
                                return ["Nosta arviosi vaikutus arvoon " + this.props.requiredRatingImpact + ". Nykyinen arvo on " + this.props.currentRatingImpact + "."];
                            },
                        },
                        {
                            key: "f52f0cbd",
                            get: function () {
                                return [this.props.num + " poistettua huomautusta"];
                            },
                        },
                        {
                            key: "ccdfbd75",
                            get: function () {
                                return ["Saat kirjoitusoikeuden, kun nostat tämän pisteen arvoon " + this.props.requiredRatingImpact];
                            },
                        },
                        {
                            key: "a32c38ad",
                            get: function () {
                                return ["Haluatko alkaa kirjoittaa huomautuksia? Saavuta arviointipisteissä " + this.props.requiredRatingImpact + " tai yli."];
                            },
                        },
                        {
                            key: "d458f69d",
                            get: function () {
                                return ["Yhteisöhuomautukset säilyttää poistettujen huomautusten statuksen, jotta mainepisteet tulevat oikein jaetuiksi huomautuksen laatijalle ja arvioijille. "];
                            },
                        },
                        {
                            key: "i42495ad",
                            get: function () {
                                return ["Kontekstihuomautukset ovat X:n käyttäjien kirjoittamia. Konteksti näytetään, kun muut ovat katsoneet sen olevan hyödyksi. "];
                            },
                        },
                        {
                            key: "c475a5d3",
                            get: function () {
                                return ["Tietoaineistojen käytön rajoitukset on kirjattu X:n kehittäjäsopimukseen ja -käytäntöön. Napsauttamalla Lataa-painiketta sitoudut noudattamaan ", "."];
                            },
                        },
                        {
                            key: "g19fcc5b",
                            get: function () {
                                return ["Tiedosto nro " + this.props.fileIndex + "/" + this.props.totalFiles];
                            },
                        },
                        {
                            key: "e7e44bab",
                            get: function () {
                                return ["Kokeile hakea jotain muuta tai tarkista ", " nähdäksesi, suojaavatko ne sinua mahdolliselta arkaluonteiselta sisällöltä."];
                            },
                        },
                        {
                            key: "b3a3ce8d",
                            get: function () {
                                return ["Aktiivinen ", " sitten"];
                            },
                        },
                        {
                            key: "d46c6e8f",
                            get: function () {
                                return ["Haluatko varmasti, että ", " ryhtyy moderaattoriksi?"];
                            },
                        },
                        {
                            key: "c3a1f2bf",
                            get: function () {
                                return ["Haluatko varmasti poistaa käyttäjän ", " moderaattoreista?"];
                            },
                        },
                        {
                            key: "c2696cdf",
                            get: function () {
                                return ["Anna ", " jatkaaksesi"];
                            },
                        },
                        {
                            key: "b160df39",
                            get: function () {
                                return ["", " piilotti julkaisun"];
                            },
                        },
                        {
                            key: "h1513297",
                            get: function () {
                                return ["", " kiinnitti julkaisun"];
                            },
                        },
                        {
                            key: "e523e9f1",
                            get: function () {
                                return ["", " irrotti julkaisun kiinnityksen"];
                            },
                        },
                        {
                            key: "g93119e7",
                            get: function () {
                                return ["", " poisti julkaisun piilotuksen"];
                            },
                        },
                        {
                            key: "c6e18a45",
                            get: function () {
                                return ["", " poisti jäsenen"];
                            },
                        },
                        {
                            key: "ef3b57ef",
                            get: function () {
                                return ["", " palautti jäsenen"];
                            },
                        },
                        {
                            key: "e7878d67",
                            get: function () {
                                return ["", " liittyi tähän yhteisöön"];
                            },
                        },
                        {
                            key: "hd2489bb",
                            get: function () {
                                return ["", " poistui tästä yhteisöstä"];
                            },
                        },
                        {
                            key: "b4aa9d7b",
                            get: function () {
                                return ["", " hyväksyi jäsenyyspyynnön"];
                            },
                        },
                        {
                            key: "c5900395",
                            get: function () {
                                return ["", " torjui jäsenyyspyynnön"];
                            },
                        },
                        {
                            key: "g561eb89",
                            get: function () {
                                return ["", " hyväksyi jäsenyyspyynnön uudelleen"];
                            },
                        },
                        {
                            key: "j5602f3b",
                            get: function () {
                                return ["Ilmiantoi ", " ja "];
                            },
                        },
                        {
                            key: "dd132edd",
                            get: function () {
                                return ["Ilmiantoi "];
                            },
                        },
                        {
                            key: "je0779b7",
                            get: function () {
                                return ["", " ilmiantoi"];
                            },
                        },
                        {
                            key: "a0071f71",
                            get: function () {
                                return ["Pidit käyttäjän @", " julkaisun"];
                            },
                        },
                        {
                            key: "c4ec9d43",
                            get: function () {
                                return ["Säilytit käyttäjän @", " julkaisun"];
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
                                return ["", " perustanut " + this.props.date];
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
                                return ["Käyttääksesi tätä ominaisuutta vaihda tiliin, joka on omasi.\n\nTekijänä voit lähettää yksityisviestejä, julkaista julkaisuja ja luoda listoja — sekä tarkastella niitä.\n\nPyrimme jatkuvasti parantamaan Delegointia. Kuulemme mieluusti ", "."];
                            },
                        },
                        {
                            key: "g29b68f9",
                            get: function () {
                                return ["Käyttääksesi tätä ominaisuutta vaihda tiliin, joka on omasi.\n\nYlläpitäjänä voit lähettää yksityisviestejä, julkaista julkaisuja ja laatia Listoja – sekä katsella niitä. Voit myös kutsua tilille tekijöitä ja poistaa heitä sekä tarkastella julkaisukohtaisia tilastoja.\n\nPyrimme jatkuvasti parantamaan Delegointia. Kuulemme mieluusti ", "."];
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
                                return ["", " nähdäksesi lisätietoja työpaikasta"];
                            },
                        },
                        {
                            key: "ie9320f7",
                            get: function () {
                                return ['Aloita haun"', " ", '" mukaisten työpaikkojen näyttäminen aikajanallasi'];
                            },
                        },
                        {
                            key: "c70aad4b",
                            get: function () {
                                return ['Näytetään haun "', " ", '" mukaiset työpaikat'];
                            },
                        },
                        {
                            key: "cc70dc63",
                            get: function () {
                                return ["Julkaisujen katselu ei poista käyttäjän @" + this.props.screenName + " estoa. "];
                            },
                        },
                        {
                            key: "d6c6deaf",
                            get: function () {
                                return ["Tilaa ennakkoon hintaan "];
                            },
                        },
                        {
                            key: "gbef9649",
                            get: function () {
                                return ["Lue lisää kaupallisen käytön ohjelmistamme ja käytännöistämme ", "."];
                            },
                        },
                        {
                            key: "da2a091b",
                            get: function () {
                                return ["Ostamalla hyväksyt ", " ja ", ". Tilaus uusiutuu automaattisesti, kunnes se perutaan, kuten ehtoihin on kirjattu. Peru milloin tahansa."];
                            },
                        },
                        {
                            key: "c23c08c9",
                            get: function () {
                                return ["Ostamalla hyväksyt ", " ja ", "."];
                            },
                        },
                        {
                            key: "d39ad44d",
                            get: function () {
                                return ["Varmennettujen tilien tykkäykset, maininnat, uudelleenjulkaisut ja muut toimet löytyvät täältä. "];
                            },
                        },
                        {
                            key: "b004e8bf",
                            get: function () {
                                return ["", " kertoo ulkopuolisille sovelluksille annettavista oikeuksista."];
                            },
                        },
                        {
                            key: "afd52f45",
                            get: function () {
                                return ["Laatinut ", ". Lue organisaation " + this.props.orgName + " ", " ja ", "."];
                            },
                        },
                        {
                            key: "b88304a3",
                            get: function () {
                                return ["Pyydä apua tililtä "];
                            },
                        },
                        {
                            key: "j766b689",
                            get: function () {
                                return ["", " päästäksesi alkuun."];
                            },
                        },
                        {
                            key: "ef7ce733",
                            get: function () {
                                return ["Synkronoitu alustalta "];
                            },
                        },
                        {
                            key: "i958b2bd",
                            get: function () {
                                return ["Jaettu alustalta "];
                            },
                        },
                        {
                            key: "b2c03e03",
                            get: function () {
                                return ["Jos sinulla on kysyttävää X Hiring -palvelusta, lähetä sähköpostia osoitteeseen ", "."];
                            },
                        },
                        {
                            key: "c57cd3a3",
                            get: function () {
                                return ["(Organisaatiot voivat ", ")"];
                            },
                        },
                        {
                            key: "bec92f3b",
                            get: function () {
                                return ["Aloittamalla ", " ja tilauksen vahvistat hyväksyväsi ", ". Kun " + this.props.numberOfDays + " päivän ilmaiskokeilusi päättyy, sinulta veloitetaan rekisteröitymisen yhteydessä valitsemasi vuosi- tai kuukausitilauksen mukainen maksu, ellet peruuta tilausta " + this.props.numberOfDays + " päivän pituisen ilmaiskokeilujakson aikana. Tilaukset uusiutuvat automaattisesti, kunnes ne perutaan ehtojen mukaisesti. ", ". Tilaus on peruttava viimeistään 24 tuntia ennen uusiutumisaikaa, jotta vältyt lisäveloituksilta. Tilauksen tekemiseen tarvitaan vahvistettu puhelinnumero. Jos tilaus on tehty jossakin toisessa palvelussa, tilauksen hallinta tapahtuu kyseisen palvelun kautta."];
                            },
                        },
                        {
                            key: "ca87939f",
                            get: function () {
                                return ["Tilaamalla hyväksyt ", ". Tilaukset uusitaan automaattisesti niin kauan kunnes ne perutaan, kuten ", " on kuvattu. ", ". Peru viimeistään 24 tuntia ennen seuraavaa laskutusta välttyäksesi lisämaksuilta. Kun vaihdat tilaustason kalliimpaan, aiemmalta tilaukselta jäänyt summa siirretään tilillesi ja käytetään automaattisesti tuleviin maksuihin. Uusi tilauksesi alkaa välittömästi. Tilaajilla on oltava varmennettu puhelinnumero."];
                            },
                        },
                        {
                            key: "ed2a6ba9",
                            get: function () {
                                return ["Tilaamalla hyväksyt ", ". Tilaukset uusitaan automaattisesti niin kauan kunnes ne perutaan, kuten ", " on kuvattu. ", ". Peru viimeistään 24 tuntia ennen seuraavaa laskutusta välttyäksesi lisämaksuilta. Kun vaihdat tilaustason alempaan, nykyinen tilauksesi ja siihen liittyvät ominaisuudet vaihtuvat uuden tilauksen mukaisiin välittömästi. Et saa palautusta edellisen tilauksen käyttämättä jääneestä ajasta, ellei laki siihen pakota. Sinulta veloitetaan myös uuden tason hinta välittömästi. Tilaajilla on oltava varmennettu puhelinnumero."];
                            },
                        },
                        {
                            key: "db638a21",
                            get: function () {
                                return ["Tilaamalla hyväksyt ", ". Tilaukset uusitaan automaattisesti niin kauan kunnes ne perutaan, kuten ", " on kuvattu. ", ". Peru viimeistään 24 tuntia ennen seuraavaa laskutusta välttyäksesi lisämaksuilta. Kun vaihdat tilaustasoa, uusi tilauksesi alkaa välittömästi. Aiemmalta tilaukselta jäänyt summa siirretään tilillesi ja käytetään automaattisesti tuleviin maksuihin. Tilaajilla on oltava varmennettu puhelinnumero."];
                            },
                        },
                        {
                            key: "b2138d0f",
                            get: function () {
                                return ["Tilauksen tekemällä hyväksyt ", ". Tilaukset uusiutuvat automaattisesti siihen asti, kunnes ne perutaan, kuten ", " on ilmoitettu. ", ". Peru viimeistään 24 tuntia ennen tilauksen uusimista välttääksesi veloituksen. Kun vaihdat ylempään tilaustasoon, nykyinen tilauksesi ja siihen liittyvät ominaisuudet vaihtuvat uuden tilauksen mukaisiin välittömästi. Sinulta veloitetaan uuden tilauksen hinta välittömästi, mutta nykyisestä tilausjaksosta suoritetusta maksusta käyttämättä jäänyt osuus vähennetään tänään veloitettavasta summasta. Et saa palautusta edellisen tilauksen käyttämättä jääneestä ajasta, paitsi jos laki velvoittaa maksun palautukseen."];
                            },
                        },
                        {
                            key: "c2255911",
                            get: function () {
                                return ["Tilaamalla hyväksyt ", ". Tilaukset uusiutuvat automaattisesti siihen asti, kunnes ne perutaan, kuten ", " on ilmoitettu. ", ". Peru viimeistään 24 tuntia ennen tilauksen uusimista välttääksesi veloituksen. Kun vaihdat alempaan tilaustasoon, nykyinen tilauksesi pysyy voimassa seuraavaan laskutusjaksoon asti, jolloin uusi tilauksesi alkaa. Sinulta veloitetaan uuden tason mukainen hinta seuraavan laskutusjakson alkaessa."];
                            },
                        },
                        {
                            key: "e647175f",
                            get: function () {
                                return ["Tilauksen tekemällä hyväksyt ", ". Tilaukset uusiutuvat automaattisesti siihen asti, kunnes ne perutaan, kuten ", " on ilmoitettu. ", ". Peru viimeistään 24 tuntia ennen tilauksen uusimista välttääksesi veloituksen. Kun vaihdat tilausmallia, uuden tilaustason mukaiset ominaisuudet pysyvät käytössäsi. Sinulta veloitetaan uuden vuositilauksen hinta välittömästi, ja aiemmin suoritetusta kuukausimaksusta käyttämättä jäänyt osuus vähennetään tänään veloitettavasta summasta."];
                            },
                        },
                        {
                            key: "eaccb9c9",
                            get: function () {
                                return ["Tilauksen tekemällä hyväksyt ", ". Tilaukset uusiutuvat automaattisesti siihen asti, kunnes ne perutaan, kuten ", " on ilmoitettu. ", ". Peru viimeistään 24 tuntia ennen tilauksen uusimista välttääksesi veloituksen. Kun vaihdat tilausmallia, saat uuden tilaustason mukaiset ominaisuudet käyttöösi. Sinulta veloitetaan tilaustason mukainen kuukausihinta heti, mutta aiemmin suoritetusta vuosimaksusta hyödyntämättä jäänyt osuus käytetään tuleviin kuukausimaksuihin, kunnes jo suorittamasi summa on kokonaan käytetty."];
                            },
                        },
                        {
                            key: "db11f87d",
                            get: function () {
                                return ["Tilaa hintaan ", " " + this.props.newPrice + "/" + this.props.interval];
                            },
                        },
                        {
                            key: "e4219e13",
                            get: function () {
                                return ["", " " + this.props.newPrice + "/" + this.props.interval + ", veloitus vuosittain"];
                            },
                        },
                        {
                            key: "eeb5fb11",
                            get: function () {
                                return ["Osoitetiedot välitetään Googlelle. Lisätietoa saat lukemalla ", " ja ", "."];
                            },
                        },
                        {
                            key: "f9b1387f",
                            get: function () {
                                return ["Vain yhteisöjen ylläpitäjät ja moderaattorit voivat lisätä yhteisön valokeilaan profiileissaan. Haluatko ", "?"];
                            },
                        },
                        {
                            key: "ef72b01b",
                            get: function () {
                                return ["Löydät itseäsi lähellä olevan kriisipuhelimen sivustolta "];
                            },
                        },
                        {
                            key: "e6c21d5b",
                            get: function () {
                                return ["Jos uskot olevasi vaarassa, suosittelemme, että soitat hätäkeskukseen. Poliisi voi lukea ", ", jos heillä on avoimia kysymyksiä."];
                            },
                        },
                        {
                            key: "e1d95725",
                            get: function () {
                                return ["Voit milloin tahansa lakata seuraamasta kohdasta ", "."];
                            },
                        },
                        {
                            key: "gd67df1d",
                            get: function () {
                                return ["Päivitetty viimeksi "];
                            },
                        },
                        {
                            key: "e420d1ed",
                            get: function () {
                                return ["Ihmiset eivät saa ilmoitusta piiriisi tekemistäsi muutoksista. Kaikki lisäämäsi ihmiset näkevät myös aiemmat julkaisusi piirille. "];
                            },
                        },
                        {
                            key: "gc31d3e9",
                            get: function () {
                                return ["Tämän julkaisun näyttökerrat. Lisätietoa saat ", "."];
                            },
                        },
                        {
                            key: "he0e6ed7",
                            get: function () {
                                return ["Tämän julkaisun näyttökerrat. Näyttökertojen näkymisessä voi olla muutaman minuutin viive. Lisätietoa saat ", "."];
                            },
                        },
                        {
                            key: "c780f52b",
                            get: function () {
                                return ["Tälle julkaisulle ei ole saatavana näyttökertoja. Lisätietoa saat ", "."];
                            },
                        },
                        {
                            key: "fc2dfb3f",
                            get: function () {
                                return ["Napsauttamalla ”Luo kampanja” ilmaiset lukeneesi ja hyväksyväsi ", " sekä ", "."];
                            },
                        },
                        {
                            key: "fcf4b2a5",
                            get: function () {
                                return ["Napsauttamalla ”Luo kampanja” ilmaiset lukeneesi ja hyväksyväsi ", "."];
                            },
                        },
                        {
                            key: "f54ad505",
                            get: function () {
                                return ["Osa kohdennusvaihtoehdoista ei ole käytettävissä tällä mainostilillä ", " mukaisesti."];
                            },
                        },
                        {
                            key: "b3816c8b",
                            get: function () {
                                return ["Napsauttamalla ”Mainosta julkaisua” ilmaiset lukeneesi ja hyväksyväsi ", " sekä ", "."];
                            },
                        },
                        {
                            key: "ee48f791",
                            get: function () {
                                return ["Napsauttamalla ”Mainosta julkaisua” ilmaiset lukeneesi ja hyväksyväsi ", "."];
                            },
                        },
                        {
                            key: "f5a533b1",
                            get: function () {
                                return ["Tähän julkaisuun ei ole piilotettuja vastauksia, mutta suojatut julkaisut on saatettu suodattaa pois. "];
                            },
                        },
                        {
                            key: "cd5e4a77",
                            get: function () {
                                return ["Napsauttamalla alta oston vahvistamiseksi hyväksyt ", " ja sitoudut noudattamaan niitä."];
                            },
                        },
                        {
                            key: "aa4026bf",
                            get: function () {
                                return ["Tämä estää käyttäjää ", " lisäämästä sinua millekään listalleen, tämä mukaan lukien."];
                            },
                        },
                        {
                            key: "fca299bb",
                            get: function () {
                                return ["Kerro sähköpostiosoitteesi tilille " + this.props.creatorName + ". Hyväksymällä annat X:lle luvan jakaa sähköpostiosoitteen sisällöntuottajalle alustan ulkopuolista viestintää varten ja hyväksyt ", "."];
                            },
                        },
                        {
                            key: "ccd45e5f",
                            get: function () {
                                return ["Anna " + this.props.tier + " vuodeksi lahjaksi käyttäjälle @" + this.props.screenName + " hintaan " + this.props.price + ". Kun olet suorittanut maksun, lahjansaaja saa ilmoituksen lähettämästäsi lahjasta."];
                            },
                        },
                        {
                            key: "h7f3e309",
                            get: function () {
                                return ["Lahjatilauksen hinta veloitetaan ostohetkellä. Maksua ei palauteta. Lahja on kertakäyttöinen, ei vaihdettavissa eikä yhdistettävissä, eikä sillä ole käteisarvoa. Lahjajakso käynnistyy, kun X on tarkistanut saajan tilin; saajan on hyväksyttävä ", " ja käytäntömme. Jos saaja ei täytä kelpoisuusvaatimuksia, peruu tilauksen tai kieltäytyy hyväksymästä ehtoja tai käytäntöjämme, lahjaa ei voi palauttaa eikä maksua palauteta. Osto saattaa aiheuttaa veroseuraamuksia. Ehtoihin voi tulla muutoksia. ", "."];
                            },
                        },
                        {
                            key: "j0a20bf1",
                            get: function () {
                                return ["Organisaatioilla on kultaiset väkäset, henkilöillä siniset. Asiaton käyttö johtaa tilauksesi perumiseen ilman maksun palautusta ", " kuvatusti."];
                            },
                        },
                        {
                            key: "j1b50481",
                            get: function () {
                                return ["Organisaatioilla on neliskulmaiset kuvakkeet, henkilöillä pyöreät. Asiaton käyttö johtaa tilauksesi perumiseen ilman maksun palautusta ", " kuvatusti."];
                            },
                        },
                        {
                            key: "ebebbb93",
                            get: function () {
                                return ["Määritä, mitä mainostiliä käytetään työpaikkailmoituksiin, kun niitä mainostetaan ", "-portaalin kautta."];
                            },
                        },
                        {
                            key: "bd5a78a1",
                            get: function () {
                                return ["Ehdot täyttäviä tilejä ei löytynyt. Seuraavat vaiheet löydät ", "."];
                            },
                        },
                        {
                            key: "b94bf5f5",
                            get: function () {
                                return ["Jos perut Varmennetut organisaatiot -tilauksen, organisaatio menettää kultaisen väkäsen välittömästi."];
                            },
                        },
                        {
                            key: "d4109f93",
                            get: function () {
                                return ["Myös kaikki sen affiliaattikytkennät perutaan välittömästi ja affiliaattitilit menettävät kultaisen tai sinisen väkäsen ja affiliaattitunnuksensa."];
                            },
                        },
                        {
                            key: "c5b26ddf",
                            get: function () {
                                return ["Jos perut, organisaatiosi ja sen affiliaatit menettävät välittömästi sekä valintamerkit että maksulliset ominaisuudet."];
                            },
                        },
                        {
                            key: "h06e7c87",
                            get: function () {
                                return ["Jos tänään päätät jäädä, lisäämme ylimääräisen " + this.props.creditAmount + " dollarin mainoskrediitin portaaliisi " + this.props.daysOfCouponInterval + " päivän välein seuraavien " + this.props.totalDays + " päivän ajan. Kun otat tämän tarjouksen vastaan, tukitiimimme on sinuun yhteydessä ja auttaa käyttämään krediitin organisaatiosi hyväksi."];
                            },
                        },
                        {
                            key: "b602e60f",
                            get: function () {
                                return ["Jos tänään päätät jäädä, lisäämme ylimääräisen " + this.props.creditAmount + " dollarin mainoskrediitin portaaliisi " + this.props.daysToWaitForFirstRedeemable + " päivän kuluessa. Kun otat tämän tarjouksen vastaan, tukitiimimme on sinuun yhteydessä ja auttaa käyttämään krediitin organisaatiosi hyväksi."];
                            },
                        },
                        {
                            key: "fa5bbb59",
                            get: function () {
                                return ["Tämä tarjous on saatavana vain kerran. Sitä ei tarjota uudelleen."];
                            },
                        },
                        {
                            key: "ceadabdd",
                            get: function () {
                                return ["Voit vielä palata hyödyntämään tarjouksen, joka ei toistu. Maksua ei palauteta päivistä, joita tilauksesta on jäljellä ennen seuraavaa laskutuskautta. Sinua ei enää laskuteta."];
                            },
                        },
                        {
                            key: "e269f39d",
                            get: function () {
                                return ["Varmennetut organisaatiot saavat X:ssä kaikkiin pulmiinsa priorisoidun tuen. Mikä mieltäsi askarruttaakin, autamme sinua ongelman kanssa ensi tilassa. Haluaisitko varata puhelinajan Varmennetut organisaatiot -tiimille?"];
                            },
                        },
                        {
                            key: "e9565acf",
                            get: function () {
                                return ["Jos perut, menetät välittömästi käyttöoikeuden maksuttomaan mainoskrediittiin ja muihin tilauksen oheen luvattuihin maksuttomiin mainoskrediitteihin. Koska olet jo maksanut tästä etuudesta, suosituksemme on, että jäät hyödyntämään sen."];
                            },
                        },
                        {
                            key: "if6e211f",
                            get: function () {
                                return ["Jos haluat nostaa lukumäärää, ota yhteys Varmennettujen premium-tukeen ", "."];
                            },
                        },
                        {
                            key: "a994ab9b",
                            get: function () {
                                return ["Jokainen ylimääräinen affiliaatti maksaa ", "/"];
                            },
                        },
                        {
                            key: "j4f386b7",
                            get: function () {
                                return ["", " vuodessa ensimmäisen vuoden ajan. Sitten ", " vuodessa."];
                            },
                        },
                        {
                            key: "ce9e7f1b",
                            get: function () {
                                return ["Jokainen lisätty affiliaattitili on ", " per tunnus per vuosi. "];
                            },
                        },
                        {
                            key: "dc107867",
                            get: function () {
                                return ["", "/", " (", ") + ", " per tunnus per ", " (", "). "];
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
                                return ["30 %:n alennus vuositilauksesta ja jopa 12 000 USD mainossaldoa kaupan päälle, kun tilaat ennen "];
                            },
                        },
                        {
                            key: "f5b357b5",
                            get: function () {
                                return ["Full Access on ", "/", " (", "). Jokainen lisätty affiliaattitili on ", " per tunnus per ", " (", "). "];
                            },
                        },
                        {
                            key: "i83d2543",
                            get: function () {
                                return ["Basic on ", "/", " (", "). "];
                            },
                        },
                        {
                            key: "gc723de9",
                            get: function () {
                                return ["Napsauttamalla Tilaa hyväksyt ", ". Tilaus uusitaan automaattisesti, kunnes perut sen. Kaikkien rekisteröityvien tilien on käytävä läpi manuaalinen hyväksyntä."];
                            },
                        },
                        {
                            key: "ha873011",
                            get: function () {
                                return ["Napsauttamalla Tilaa hyväksyt ", ". Tilaukset uusiutuvat automaattisesti, kunnes ne perutaan. Rekisteröityvien tilien aitous tarkistetaan. Jos tili rekisteröityy olematta organisaatio, se hylätään, ja suoritettua maksua ei palauteta."];
                            },
                        },
                        {
                            key: "d4918c71",
                            get: function () {
                                return ["+ Rajoitetun ajan ", " mainoskrediittinä organisaatiosi tai sen affiliaattien käyttöön ", " sekä erillistuki."];
                            },
                        },
                        {
                            key: "a87b1795",
                            get: function () {
                                return ["+ Rajoitetun ajan ", " mainoskrediittinä organisaatiosi käyttöön ", " sekä erillistuki."];
                            },
                        },
                        {
                            key: "fb6fa495",
                            get: function () {
                                return ["", this.props.activeTierName + " hintaan " + this.props.activePriceLabel];
                            },
                        },
                        {
                            key: "fcbe756d",
                            get: function () {
                                return ["", this.props.targetTierName + " hintaan " + this.props.targetPriceLabel];
                            },
                        },
                        {
                            key: "c9384b33",
                            get: function () {
                                return ["Tätä muutosta tilaukseen ei voi tehdä täällä. Ota yhteyttä Varmennettujen Premium-tilausten tukeemme ", "."];
                            },
                        },
                        {
                            key: "af51185b",
                            get: function () {
                                return ["Jos haluat enemmän affiliaatteja, ota yhteys Verified Sales -tiimiin ", "."];
                            },
                        },
                        {
                            key: "d9f35d6f",
                            get: function () {
                                return ["Napsauttamalla " + this.props.action + " sitoudut ", "."];
                            },
                        },
                        {
                            key: "g42a8521",
                            get: function () {
                                return ["Käytämme näitä tietoja tilin ", " hakemuksen arviointiin. ", "."];
                            },
                        },
                        {
                            key: "aacfbecd",
                            get: function () {
                                return ["Tämän ruudun valitsemalla ilmaiset, että olet lukenut ", " löytyvät käyttöehdot ja sitoudut niihin."];
                            },
                        },
                        {
                            key: "feb950f3",
                            get: function () {
                                return ["Varmennetut organisaatiot sisältää nyt mainoskrediittejä, joiden arvo on " + this.props.xtc_coupon_value + " (tai vastaava summa paikallisessa valuutassa)*. Voit käyttää sen organisaatiosi tai minkä tahansa affiliaatin mainontaan. Valitse alta mainostili, jolle haluat krediitin."];
                            },
                        },
                        {
                            key: "h9629ab7",
                            get: function () {
                                return ["Varmennetut organisaatiot sisältää nyt mainoskrediittejä, joiden arvo on " + this.props.xtc_coupon_value + " (tai vastaava summa paikallisessa valuutassa)*. Saat aina 30 päivän välein " + this.props.xtc_coupon_value + " (tai vastaavan summan paikallisessa valuutassa) käyttöösi mainontaan. Voit käyttää sen organisaatiosi tai minkä tahansa affiliaatin mainontaan. Valitse alta mainostili, jolle haluat krediitin."];
                            },
                        },
                        {
                            key: "i3781135",
                            get: function () {
                                return ["Hallitse mainostiliesi tunnuksia ", "."];
                            },
                        },
                        {
                            key: "ff1cc953",
                            get: function () {
                                return ["Onko sinulla ongelmia? ", " on apuna tarvittaessa."];
                            },
                        },
                        {
                            key: "g46e6cc5",
                            get: function () {
                                return ["Sinulla on ", " päivää aikaa käyttää tästä mainoskrediitistä jäljellä olevat ", "."];
                            },
                        },
                        {
                            key: "be64138f",
                            get: function () {
                                return ["Aktivoi mainoskrediittisi. Jos sinulla on useita mainostilejä, voit muokata syötettä alla. Lunastettavissa " + this.props.expiresAt + " asti"];
                            },
                        },
                        {
                            key: "a5f1d09f",
                            get: function () {
                                return ["Kaiva esiin X-tiliisi liitetyn mainostilin tunnus. Löydät sen ", "."];
                            },
                        },
                        {
                            key: "e3a90717",
                            get: function () {
                                return ["Varmista, että lisäät maksutavaksi luottokortin Ads Managerissa valitsemalla ”Lisää uusi maksutapa”. Jos et ole lisännyt tilillesi luottokorttia, et saa krediittiä hyödynnettyä eikä mainoskampanjasi käynnisty."];
                            },
                        },
                        {
                            key: "b743c7b7",
                            get: function () {
                                return ["Kopioi mainostilisi tunnus sivun ylälaidassa olevaan tekstikenttään. Aktivoi napsauttamalla."];
                            },
                        },
                        {
                            key: "d5128627",
                            get: function () {
                                return ["Käynnistä kampanjasi."];
                            },
                        },
                        {
                            key: "ecd5d325",
                            get: function () {
                                return ["Varmista, että lisäät maksutavaksi luottokortin Ads Managerissa valitsemalla ”Lisää uusi maksutapa”. Jos et ole lisännyt tilillesi luottokorttia, mainoskampanjasi ei käynnisty."];
                            },
                        },
                        {
                            key: "d523367f",
                            get: function () {
                                return ["Näet krediittisi Ads Managerin kohdassa Laskutus."];
                            },
                        },
                        {
                            key: "c10a3649",
                            get: function () {
                                return ["Jos olet jo mainostanut X:ssä aiemmin, sinulla saattaa olla useampi mainostilin tunnus."];
                            },
                        },
                        {
                            key: "fab86f55",
                            get: function () {
                                return ["Löydät luettelon mainostilitunnuksistasi ", "."];
                            },
                        },
                        {
                            key: "h9fe1a6d",
                            get: function () {
                                return ["Tarkista, että käytät oikeaa mainostilitunnusta, jotta saat hyödynnettyä krediitin."];
                            },
                        },
                        {
                            key: "a4087047",
                            get: function () {
                                return ["Kun olet Varmennettujen organisaatioiden Full Access -tilaaja, voit käyttää saamaasi krediittiä mihin tahansa affiliaattitiliin."];
                            },
                        },
                        {
                            key: "ca18299b",
                            get: function () {
                                return ["Tätä varten sinulla on oltava pääsy sen affiliaattitilin mainostilitunnukseen, jolla haluat kampanjan toteuttaa."];
                            },
                        },
                        {
                            key: "b83bc371",
                            get: function () {
                                return ["Löydät sen kirjautumalla sisään affiliaattitilille ja siirtymällä ", "."];
                            },
                        },
                        {
                            key: "ba6442ef",
                            get: function () {
                                return ["Varmennetut organisaatiot voivat saada krediittejä ", " ja työpaikkailmoituksia varten. Suorita nämä vaiheet saadaksesi kaikki mainontavälineet käyttöösi."];
                            },
                        },
                        {
                            key: "e52e0c73",
                            get: function () {
                                return ["Varmennetut organisaatiot voivat saada krediittejä ", " varten. Suorita nämä vaiheet saadaksesi kaikki mainontavälineet käyttöösi."];
                            },
                        },
                        {
                            key: "d15a83b7",
                            get: function () {
                                return ["Aktivoi kuponki"];
                            },
                        },
                        {
                            key: "j5318247",
                            get: function () {
                                return ["Valitse aktiivinen tili, johon ei ole kohdistettu sanktioita, saadaksesi tämän " + this.props.couponAmount + " krediitin."];
                            },
                        },
                        {
                            key: "e507417b",
                            get: function () {
                                return ["Löydät luettelon tilien tunnuksista ", ". Esimerkki: o8z6j"];
                            },
                        },
                        {
                            key: "b17ac597",
                            get: function () {
                                return ["Nyt voit ilmoittaa työpaikkoja ", "-toiminnolla"];
                            },
                        },
                        {
                            key: "ga44a2f9",
                            get: function () {
                                return ["Kun tili on kunnossa, voit ilmoittaa työpaikkoja valitsemalla "];
                            },
                        },
                        {
                            key: "dc53cac9",
                            get: function () {
                                return ["Tutkimme tavaramerkin haltijan tai hänen valtuuttamansa edustajan tekemät pyynnöt. Lue lisätietoa ", "."];
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
                                return ["Anna Listan haltijan käyttäjätunnus ja Listan nimi seuraavassa muodossa: ", "."];
                            },
                        },
                        {
                            key: "aa36416b",
                            get: function () {
                                return ["Voit tyhjentää tämän sarakkeen vain vaihtaessasi ", "."];
                            },
                        },
                        {
                            key: "baed64e7",
                            get: function () {
                                return ["Lue tietosuojakäytäntömme sivulla "];
                            },
                        },
                        {
                            key: "a982261d",
                            get: function () {
                                return ["Lue käyttöehtomme sivulla "];
                            },
                        },
                        {
                            key: "ffe014fd",
                            get: function () {
                                return ["X kumppaneineen käyttää evästeitä tarjotakseen paremman, turvallisemman ja nopeamman palvelun ja tukeakseen liiketoimintaamme. Osa evästeistä on välttämättömiä, jotta sinä voit käyttää palveluitamme ja jotta me voimme parantaa palveluita ja turvata niiden oikean toiminnan. Jos hyväksyt kaikki evästeet, sallit X:n ja sen kumppaneiden käyttää evästeitä myös näkemiesi mainosten ja viestinnän räätälöintiin kiinnostuksen kohteidesi mukaiseksi. Jos kiellät muut kuin välttämättömät evästeet, emme käytä evästeitä tiedon keräämiseen räätälöityä mainontaa ja viestintää varten. Jos haluat lisätietoja evästekäytännöistämme, katso ohjekeskuksemme evästeitä käsittelevä sivu osoitteessa "];
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
                                return ["", " kirjoittajalta"];
                            },
                        },
                        {
                            key: "i0643a5b",
                            get: function () {
                                return ["", " artikkeli"];
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
                                return ["Tämä media on poistettu käytöstä käyttäjän " + this.props.copyrightHolder + " tekemän tekijänoikeusvaatimuksen vuoksi. Kiistä vaatimus halutessasi ", "."];
                            },
                        },
                        {
                            key: "fcd931ed",
                            get: function () {
                                return ["", " uudelleenjulkaisi"];
                            },
                        },
                        {
                            key: "c2588611",
                            get: function () {
                                return ["", " klo " + this.props.time];
                            },
                        },
                        {
                            key: "dbf19261",
                            get: function () {
                                return ["Käyttäjältä "];
                            },
                        },
                        {
                            key: "d7b2c271",
                            get: function () {
                                return ["", " ja "];
                            },
                        },
                        {
                            key: "b035fe73",
                            get: function () {
                                return ["", " ja "];
                            },
                        },
                        {
                            key: "h5970807",
                            get: function () {
                                return ["Vastauksena käyttäjälle "];
                            },
                        },
                        {
                            key: "ge01e6a3",
                            get: function () {
                                return ["Vastauksena käyttäjille ", " ", " "];
                            },
                        },
                        {
                            key: "f5a069ab",
                            get: function () {
                                return ["Vastauksena käyttäjille ", " "];
                            },
                        },
                        {
                            key: "hd7dd197",
                            get: function () {
                                return ["Vastauksena käyttäjille ", " ", " ", " "];
                            },
                        },
                        {
                            key: "g4eb2847",
                            get: function () {
                                return ["Vastauksena käyttäjille ", " ", " "];
                            },
                        },
                        {
                            key: "dfde726b",
                            get: function () {
                                return ["Lukuaika "];
                            },
                        },
                        {
                            key: "gec4f969",
                            get: function () {
                                return ["Lähteestä "];
                            },
                        },
                        {
                            key: "d6b02329",
                            get: function () {
                                return [this.props.formattedCount + " jäsen" + n(this.props.count, "", "iä")];
                            },
                        },
                        {
                            key: "c9e6167d",
                            get: function () {
                                return ["Seuraajana "];
                            },
                        },
                        {
                            key: "ha91d1eb",
                            get: function () {
                                return ["Seuraajina ", " ja "];
                            },
                        },
                        {
                            key: "f1069f9b",
                            get: function () {
                                return ["Seuraajina ", ", ", " ja "];
                            },
                        },
                        {
                            key: "e8404c1f",
                            get: function () {
                                return ["Seuraajina ", ", ", " ja ", " muuta, joita seuraat"];
                            },
                        },
                        {
                            key: "bb2cd6d3",
                            get: function () {
                                return ["", " ja ", " muuta puhuttavat tässä aiheessa"];
                            },
                        },
                        {
                            key: "e1e348dd",
                            get: function () {
                                return ["Maksaja "];
                            },
                        },
                        {
                            key: "c7dea0d1",
                            get: function () {
                                return ["Maksaja ", "; viestiä ei ole valtuuttanut kukaan ehdokas tai ehdokkaan tukiryhmä."];
                            },
                        },
                        {
                            key: "b5c2371b",
                            get: function () {
                                return ["Maksaja ", " · Valtuuttaja " + this.props.sponsorshipCandidate];
                            },
                        },
                        {
                            key: "b6a393af",
                            get: function () {
                                return ["Vain sinä ja piiriisi kuuluvat näkevät tämän julkaisun. Sen uudelleenjulkaisu, lainaaminen tai jakaminen ei ole mahdollista. "];
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
                                return ["Muuta suosittua: "];
                            },
                        },
                        {
                            key: "ea753bf5",
                            get: function () {
                                return ["Muita suosittuja aiheita: ", ", "];
                            },
                        },
                        {
                            key: "ge9aefd5",
                            get: function () {
                                return ["", " paikasta "];
                            },
                        },
                        {
                            key: "templateReducer",
                            get: function () {
                                var a,
                                    t = l.Children.toArray(this.props.children),
                                    i = ((a = this.props.$i18n), o[k[a]] || r);
                                return function (a, e, n) {
                                    return a.concat(e, t[i(n)]);
                                };
                            },
                        },
                    ]) && s(e.prototype, m),
                    d && s(e, d),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    c
                );
            })(i(674132)._ActualI18NFormatMessage || l.Component);
            e("_ActualI18NFormatMessage", m),
                e("I18NFormatMessage", function (a) {
                    return l.createElement(m, a);
                });
            var d = i(495075);
            i(800694), i(556829), i(530152), i(658610), i(492344), i(663823);
            d._validateParameterTypeNumber, d._validateParameterPresence;
            var c = d._numberRound,
                y = (d._numberFormat, d._numberFormatterFn),
                f = d._pluralGeneratorFn,
                j = (d._currencyNameFormat, d._currencyFormatterFn),
                v = (d._validateParameterTypeDate, d._dateToPartsFormat, d._dateToPartsFormatterFn),
                h = (d._dateFormat, d._dateFormatterFn),
                b = d._relativeTimeFormatterFn,
                p = d._unitFormatterFn;
            (d.a1897090936 = y(["", , 1, 0, 1, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", c("truncate"), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }, , { 3: { one: "0 t'.'", other: "0 t'.'" }, 4: { one: "00 t'.'", other: "00 t'.'" }, 5: { one: "000 t'.'", other: "000 t'.'" }, 6: { one: "0 milj'.'", other: "0 milj'.'" }, 7: { one: "00 milj'.'", other: "00 milj'.'" }, 8: { one: "000 milj'.'", other: "000 milj'.'" }, 9: { one: "0 mrd'.'", other: "0 mrd'.'" }, 10: { one: "00 mrd'.'", other: "00 mrd'.'" }, 11: { one: "000 mrd'.'", other: "000 mrd'.'" }, 12: { one: "0 bilj'.'", other: "0 bilj'.'" }, 13: { one: "00 bilj'.'", other: "00 bilj'.'" }, 14: { one: "000 bilj'.'", other: "000 bilj'.'" }, maxExponent: 14 }], d("fi").pluralGenerator({}))),
                (d.b444374780 = y(["", , 1, 0, 3, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b7542538 = y(["", , 1, 0, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", c("round"), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a1119264306 = y(["", , 1, 0, 0, , , , , , "", "0", "-0", "-", "", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a337785826 = y(["", , 2, 0, 0, , , , , , "", "00", "-00", "-", "", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b359820071 = y(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", c("truncate"), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }, , { 3: { one: "0 t'.'", other: "0 t'.'" }, 4: { one: "00 t'.'", other: "00 t'.'" }, 5: { one: "000 t'.'", other: "000 t'.'" }, 6: { one: "0 milj'.'", other: "0 milj'.'" }, 7: { one: "00 milj'.'", other: "00 milj'.'" }, 8: { one: "000 milj'.'", other: "000 milj'.'" }, 9: { one: "0 mrd'.'", other: "0 mrd'.'" }, 10: { one: "00 mrd'.'", other: "00 mrd'.'" }, 11: { one: "000 mrd'.'", other: "000 mrd'.'" }, 12: { one: "0 bilj'.'", other: "0 bilj'.'" }, 13: { one: "00 bilj'.'", other: "00 bilj'.'" }, 14: { one: "000 bilj'.'", other: "000 bilj'.'" }, maxExponent: 14 }], d("fi").pluralGenerator({}))),
                (d.b1736507725 = y(["", , 1, 0, 1, , , , 3, , " %", "#,##0 %", "-#,##0 % %", "-", " %", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a1605065184 = y(["", , 1, 0, 0, , , , 3, , " %", "#,##0 %", "-#,##0 % %", "-", " %", c("round"), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a1934830945 = y(["", , 1, 0, 1, , , , 3, , " %", "#,##0 %", "-#,##0 % %", "-", " %", c("round"), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1822859553 = y(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", c("truncate"), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }, , { 3: { one: "0 t'.'", other: "0 t'.'" }, 4: { one: "00 t'.'", other: "00 t'.'" }, 5: { one: "000 t'.'", other: "000 t'.'" }, 6: { one: "0 milj'.'", other: "0 milj'.'" }, 7: { one: "00 milj'.'", other: "00 milj'.'" }, 8: { one: "000 milj'.'", other: "000 milj'.'" }, 9: { one: "0 mrd'.'", other: "0 mrd'.'" }, 10: { one: "00 mrd'.'", other: "00 mrd'.'" }, 11: { one: "000 mrd'.'", other: "000 mrd'.'" }, 12: { one: "0 bilj'.'", other: "0 bilj'.'" }, 13: { one: "00 bilj'.'", other: "00 bilj'.'" }, 14: { one: "000 bilj'.'", other: "000 bilj'.'" }, maxExponent: 14 }], d("fi").pluralGenerator({}))),
                (d.a1326664578 = y(["", , 1, 1, 1, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", c("truncate"), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a258189312 = y(["", , 1, 2, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", c("truncate"), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1699014532 = y(["", , 1, 0, 0, 1, 2, , 3, , "", "#,##0.###", "-#,##0.###", "-", "", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }, , { 3: { one: "0 t'.'", other: "0 t'.'" }, 4: { one: "00 t'.'", other: "00 t'.'" }, 5: { one: "000 t'.'", other: "000 t'.'" }, 6: { one: "0 milj'.'", other: "0 milj'.'" }, 7: { one: "00 milj'.'", other: "00 milj'.'" }, 8: { one: "000 milj'.'", other: "000 milj'.'" }, 9: { one: "0 mrd'.'", other: "0 mrd'.'" }, 10: { one: "00 mrd'.'", other: "00 mrd'.'" }, 11: { one: "000 mrd'.'", other: "000 mrd'.'" }, 12: { one: "0 bilj'.'", other: "0 bilj'.'" }, 13: { one: "00 bilj'.'", other: "00 bilj'.'" }, 14: { one: "000 bilj'.'", other: "000 bilj'.'" }, maxExponent: 14 }], d("fi").pluralGenerator({}))),
                (d.b2118798099 = y(["", , 1, 2, 2, , , 0, 3, , " 'AED'", "#,##0.00 'AED'", "-#,##0.00 'AED' 'AED'", "-", " 'AED'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1157008498 = y(["", , 1, 0, 0, , , , 3, , " 'ALL'", "#,##0 'ALL'", "-#,##0 'ALL' 'ALL'", "-", " 'ALL'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1732766321 = y(["", , 1, 2, 2, , , 0, 3, , " 'ARS'", "#,##0.00 'ARS'", "-#,##0.00 'ARS' 'ARS'", "-", " 'ARS'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1660731683 = y(["", , 1, 2, 2, , , 0, 3, , " 'AUD'", "#,##0.00 'AUD'", "-#,##0.00 'AUD' 'AUD'", "-", " 'AUD'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1337499333 = y(["", , 1, 2, 2, , , 0, 3, , " 'BAM'", "#,##0.00 'BAM'", "-#,##0.00 'BAM' 'BAM'", "-", " 'BAM'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1245147233 = y(["", , 1, 2, 2, , , 0, 3, , " 'BDT'", "#,##0.00 'BDT'", "-#,##0.00 'BDT' 'BDT'", "-", " 'BDT'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1164800906 = y(["", , 1, 2, 2, , , 0, 3, , " 'BGN'", "#,##0.00 'BGN'", "-#,##0.00 'BGN' 'BGN'", "-", " 'BGN'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b971791671 = y(["", , 1, 3, 3, , , 0, 3, , " 'BHD'", "#,##0.000 'BHD'", "-#,##0.000 'BHD' 'BHD'", "-", " 'BHD'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b851727287 = y(["", , 1, 2, 2, , , 0, 3, , " 'BRL'", "#,##0.00 'BRL'", "-#,##0.00 'BRL' 'BRL'", "-", " 'BRL'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a108215272 = y(["", , 1, 0, 0, , , , 3, , " 'BYR'", "#,##0 'BYR'", "-#,##0 'BYR' 'BYR'", "-", " 'BYR'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b458307341 = y(["", , 1, 2, 2, , , 0, 3, , " 'CAD'", "#,##0.00 'CAD'", "-#,##0.00 'CAD' 'CAD'", "-", " 'CAD'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b256056242 = y(["", , 1, 2, 2, , , 0, 3, , " 'CHF'", "#,##0.00 'CHF'", "-#,##0.00 'CHF' 'CHF'", "-", " 'CHF'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a621692948 = y(["", , 1, 0, 0, , , , 3, , " 'CLP'", "#,##0 'CLP'", "-#,##0 'CLP' 'CLP'", "-", " 'CLP'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b66734437 = y(["", , 1, 2, 2, , , 0, 3, , " 'CNY'", "#,##0.00 'CNY'", "-#,##0.00 'CNY' 'CNY'", "-", " 'CNY'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a707580401 = y(["", , 1, 0, 0, , , , 3, , " 'COP'", "#,##0 'COP'", "-#,##0 'COP' 'COP'", "-", " 'COP'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a263886081 = y(["", , 1, 2, 2, , , 0, 3, , " 'CZK'", "#,##0.00 'CZK'", "-#,##0.00 'CZK' 'CZK'", "-", " 'CZK'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a721952497 = y(["", , 1, 2, 2, , , 0, 3, , " 'DKK'", "#,##0.00 'DKK'", "-#,##0.00 'DKK' 'DKK'", "-", " 'DKK'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a1144925115 = y(["", , 1, 2, 2, , , 0, 3, , " 'DZD'", "#,##0.00 'DZD'", "-#,##0.00 'DZD' 'DZD'", "-", " 'DZD'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a1499557179 = y(["", , 1, 2, 2, , , 0, 3, , " 'EGP'", "#,##0.00 'EGP'", "-#,##0.00 'EGP' 'EGP'", "-", " 'EGP'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a344979321 = y(["", , 1, 2, 2, , , 0, 3, , " '€'", "#,##0.00 '€'", "-#,##0.00 '€' '€'", "-", " '€'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a1361118192 = y(["", , 1, 2, 2, , , 0, 3, , " '£'", "#,##0.00 '£'", "-#,##0.00 '£' '£'", "-", " '£'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b989003041 = y(["", , 1, 2, 2, , , 0, 3, , " 'GHS'", "#,##0.00 'GHS'", "-#,##0.00 'GHS' 'GHS'", "-", " 'GHS'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b647300271 = y(["", , 1, 2, 2, , , 0, 3, , " 'GTQ'", "#,##0.00 'GTQ'", "-#,##0.00 'GTQ' 'GTQ'", "-", " 'GTQ'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b29464722 = y(["", , 1, 2, 2, , , 0, 3, , " 'HKD'", "#,##0.00 'HKD'", "-#,##0.00 'HKD' 'HKD'", "-", " 'HKD'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a177403982 = y(["", , 1, 2, 2, , , 0, 3, , " 'HRK'", "#,##0.00 'HRK'", "-#,##0.00 'HRK' 'HRK'", "-", " 'HRK'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a258673830 = y(["", , 1, 2, 2, , , 0, 3, , " 'HUF'", "#,##0.00 'HUF'", "-#,##0.00 'HUF' 'HUF'", "-", " 'HUF'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a1424561572 = y(["", , 1, 0, 0, , , , 3, , " 'IDR'", "#,##0 'IDR'", "-#,##0 'IDR' 'IDR'", "-", " 'IDR'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a900520925 = y(["", , 1, 2, 2, , , 0, 3, , " 'ILS'", "#,##0.00 'ILS'", "-#,##0.00 'ILS' 'ILS'", "-", " 'ILS'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a956855706 = y(["", , 1, 2, 2, , , 0, 3, , " 'INR'", "#,##0.00 'INR'", "-#,##0.00 'INR' 'INR'", "-", " 'INR'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a1783811241 = y(["", , 1, 0, 0, , , , 3, , " 'IQD'", "#,##0 'IQD'", "-#,##0 'IQD' 'IQD'", "-", " 'IQD'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a1847534190 = y(["", , 1, 0, 0, , , , 3, , " 'ISK'", "#,##0 'ISK'", "-#,##0 'ISK' 'ISK'", "-", " 'ISK'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a671013170 = y(["", , 1, 0, 0, , , , 3, , " '¥'", "#,##0 '¥'", "-#,##0 '¥' '¥'", "-", " '¥'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1819843066 = y(["", , 1, 2, 2, , , 0, 3, , " 'KES'", "#,##0.00 'KES'", "-#,##0.00 'KES' 'KES'", "-", " 'KES'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b689972643 = y(["", , 1, 0, 0, , , , 3, , " 'KRW'", "#,##0 'KRW'", "-#,##0 'KRW' 'KRW'", "-", " 'KRW'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1144755869 = y(["", , 1, 3, 3, , , 0, 3, , " 'KWD'", "#,##0.000 'KWD'", "-#,##0.000 'KWD' 'KWD'", "-", " 'KWD'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1217707374 = y(["", , 1, 2, 2, , , 0, 3, , " 'KZT'", "#,##0.00 'KZT'", "-#,##0.00 'KZT' 'KZT'", "-", " 'KZT'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b267000025 = y(["", , 1, 0, 0, , , , 3, , " 'LBP'", "#,##0 'LBP'", "-#,##0 'LBP' 'LBP'", "-", " 'LBP'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b173205123 = y(["", , 1, 2, 2, , , 0, 3, , " 'MAD'", "#,##0.00 'MAD'", "-#,##0.00 'MAD' 'MAD'", "-", " 'MAD'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a113086387 = y(["", , 1, 2, 2, , , 0, 3, , " 'MKD'", "#,##0.00 'MKD'", "-#,##0.00 'MKD' 'MKD'", "-", " 'MKD'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a494500560 = y(["", , 1, 2, 2, , , 0, 3, , " 'MXN'", "#,##0.00 'MXN'", "-#,##0.00 'MXN' 'MXN'", "-", " 'MXN'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a526823795 = y(["", , 1, 2, 2, , , 0, 3, , " 'MYR'", "#,##0.00 'MYR'", "-#,##0.00 'MYR' 'MYR'", "-", " 'MYR'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a895308674 = y(["", , 1, 2, 2, , , 0, 3, , " 'NGN'", "#,##0.00 'NGN'", "-#,##0.00 'NGN' 'NGN'", "-", " 'NGN'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a1121571319 = y(["", , 1, 2, 2, , , 0, 3, , " 'NOK'", "#,##0.00 'NOK'", "-#,##0.00 'NOK' 'NOK'", "-", " 'NOK'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a1430027333 = y(["", , 1, 2, 2, , , 0, 3, , " 'NZD'", "#,##0.00 'NZD'", "-#,##0.00 'NZD' 'NZD'", "-", " 'NZD'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1681909562 = y(["", , 1, 2, 2, , , 0, 3, , " 'PEN'", "#,##0.00 'PEN'", "-#,##0.00 'PEN' 'PEN'", "-", " 'PEN'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1594175067 = y(["", , 1, 2, 2, , , 0, 3, , " 'PHP'", "#,##0.00 'PHP'", "-#,##0.00 'PHP' 'PHP'", "-", " 'PHP'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b752443196 = y(["", , 1, 0, 0, , , , 3, , " 'PKR'", "#,##0 'PKR'", "-#,##0 'PKR' 'PKR'", "-", " 'PKR'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1481505505 = y(["", , 1, 2, 2, , , 0, 3, , " 'PLN'", "#,##0.00 'PLN'", "-#,##0.00 'PLN' 'PLN'", "-", " 'PLN'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b905228401 = y(["", , 1, 2, 2, , , 0, 3, , " 'QAR'", "#,##0.00 'QAR'", "-#,##0.00 'QAR' 'QAR'", "-", " 'QAR'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a379389310 = y(["", , 1, 2, 2, , , 0, 3, , " 'RON'", "#,##0.00 'RON'", "-#,##0.00 'RON' 'RON'", "-", " 'RON'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a1238668080 = y(["", , 1, 0, 0, , , , 3, , " 'RSD'", "#,##0 'RSD'", "-#,##0 'RSD' 'RSD'", "-", " 'RSD'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a540081964 = y(["", , 1, 2, 2, , , 0, 3, , " 'RUB'", "#,##0.00 'RUB'", "-#,##0.00 'RUB' 'RUB'", "-", " 'RUB'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a869778961 = y(["", , 1, 2, 2, , , 0, 3, , " 'SAR'", "#,##0.00 'SAR'", "-#,##0.00 'SAR' 'SAR'", "-", " 'SAR'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a977830918 = y(["", , 1, 2, 2, , , 0, 3, , " 'SEK'", "#,##0.00 'SEK'", "-#,##0.00 'SEK' 'SEK'", "-", " 'SEK'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a1028624573 = y(["", , 1, 2, 2, , , 0, 3, , " 'SGD'", "#,##0.00 'SGD'", "-#,##0.00 'SGD' 'SGD'", "-", " 'SGD'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a1942910363 = y(["", , 1, 2, 2, , , 0, 3, , " 'THB'", "#,##0.00 'THB'", "-#,##0.00 'THB' 'THB'", "-", " 'THB'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b2004819691 = y(["", , 1, 3, 3, , , 0, 3, , " 'TND'", "#,##0.000 'TND'", "-#,##0.000 'TND' 'TND'", "-", " 'TND'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b2044524440 = y(["", , 1, 2, 2, , , 0, 3, , " 'TRY'", "#,##0.00 'TRY'", "-#,##0.00 'TRY' 'TRY'", "-", " 'TRY'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1920772626 = y(["", , 1, 2, 2, , , 0, 3, , " 'TWD'", "#,##0.00 'TWD'", "-#,##0.00 'TWD' 'TWD'", "-", " 'TWD'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1067034982 = y(["", , 1, 0, 0, , , , 3, , " 'TZS'", "#,##0 'TZS'", "-#,##0 'TZS' 'TZS'", "-", " 'TZS'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1659416183 = y(["", , 1, 2, 2, , , 0, 3, , " 'UAH'", "#,##0.00 'UAH'", "-#,##0.00 'UAH' 'UAH'", "-", " 'UAH'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b718867565 = y(["", , 1, 0, 0, , , , 3, , " 'UGX'", "#,##0 'UGX'", "-#,##0 'UGX' 'UGX'", "-", " 'UGX'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a1243831025 = y(["", , 1, 2, 2, , , 0, 3, , " '$'", "#,##0.00 '$'", "-#,##0.00 '$' '$'", "-", " '$'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b659242940 = y(["", , 1, 2, 2, , , 0, 3, , " 'VEF'", "#,##0.00 'VEF'", "-#,##0.00 'VEF' 'VEF'", "-", " 'VEF'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a350569753 = y(["", , 1, 0, 0, , , , 3, , " 'VND'", "#,##0 'VND'", "-#,##0 'VND' 'VND'", "-", " 'VND'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1507629864 = y(["", , 1, 2, 2, , , 0, 3, , " 'ZAR'", "#,##0.00 'ZAR'", "-#,##0.00 'ZAR' 'ZAR'", "-", " 'ZAR'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.b1159462447 = y(["", , 1, 2, 2, , , 0, 3, , " 'ZMW'", "#,##0.00 'ZMW'", "-#,##0.00 'ZMW' 'ZMW'", "-", " 'ZMW'", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a365930030 = y(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a44360209 = y(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }, , { 3: { one: "0 t'.'", other: "0 t'.'" }, 4: { one: "00 t'.'", other: "00 t'.'" }, 5: { one: "000 t'.'", other: "000 t'.'" }, 6: { one: "0 milj'.'", other: "0 milj'.'" }, 7: { one: "00 milj'.'", other: "00 milj'.'" }, 8: { one: "000 milj'.'", other: "000 milj'.'" }, 9: { one: "0 mrd'.'", other: "0 mrd'.'" }, 10: { one: "00 mrd'.'", other: "00 mrd'.'" }, 11: { one: "000 mrd'.'", other: "000 mrd'.'" }, 12: { one: "0 bilj'.'", other: "0 bilj'.'" }, 13: { one: "00 bilj'.'", other: "00 bilj'.'" }, 14: { one: "000 bilj'.'", other: "000 bilj'.'" }, maxExponent: 14 }], d("fi").pluralGenerator({}))),
                (d.b510371501 = y(["", , 1, 0, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", c(), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }, , { 3: { one: "0 t'.'", other: "0 t'.'" }, 4: { one: "00 t'.'", other: "00 t'.'" }, 5: { one: "000 t'.'", other: "000 t'.'" }, 6: { one: "0 milj'.'", other: "0 milj'.'" }, 7: { one: "00 milj'.'", other: "00 milj'.'" }, 8: { one: "000 milj'.'", other: "000 milj'.'" }, 9: { one: "0 mrd'.'", other: "0 mrd'.'" }, 10: { one: "00 mrd'.'", other: "00 mrd'.'" }, 11: { one: "000 mrd'.'", other: "000 mrd'.'" }, 12: { one: "0 bilj'.'", other: "0 bilj'.'" }, 13: { one: "00 bilj'.'", other: "00 bilj'.'" }, 14: { one: "000 bilj'.'", other: "000 bilj'.'" }, maxExponent: 14 }], d("fi").pluralGenerator({}))),
                (d.a1681401204 = y(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", c("round"), "∞", "epäluku", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "−", E: "E", "‰": "‰" }])),
                (d.a1686357682 = f(function (a) {
                    var t = !String(a).split(".")[1];
                    return 1 == a && t ? "one" : "other";
                })),
                (d.b735927436 = j(d("fi").numberFormatter({ raw: "#,##0.00 'AED'" }))),
                (d.a1410664243 = j(d("fi").numberFormatter({ raw: "#,##0 'ALL'" }))),
                (d.b1653844206 = j(d("fi").numberFormatter({ raw: "#,##0.00 'ARS'" }))),
                (d.a579229572 = j(d("fi").numberFormatter({ raw: "#,##0.00 'AUD'" }))),
                (d.a2009497830 = j(d("fi").numberFormatter({ raw: "#,##0.00 'BAM'" }))),
                (d.a577445634 = j(d("fi").numberFormatter({ raw: "#,##0.00 'BDT'" }))),
                (d.b1226785525 = j(d("fi").numberFormatter({ raw: "#,##0.00 'BGN'" }))),
                (d.b625573354 = j(d("fi").numberFormatter({ raw: "#,##0.000 'BHD'" }))),
                (d.b111437928 = j(d("fi").numberFormatter({ raw: "#,##0.00 'BRL'" }))),
                (d.a1977895449 = j(d("fi").numberFormatter({ raw: "#,##0 'BYR'" }))),
                (d.b800321490 = j(d("fi").numberFormatter({ raw: "#,##0.00 'CAD'" }))),
                (d.a1174495283 = j(d("fi").numberFormatter({ raw: "#,##0.00 'CHF'" }))),
                (d.a715834221 = j(d("fi").numberFormatter({ raw: "#,##0 'CLP'" }))),
                (d.b1546463354 = j(d("fi").numberFormatter({ raw: "#,##0.00 'CNY'" }))),
                (d.b916622032 = j(d("fi").numberFormatter({ raw: "#,##0 'COP'" }))),
                (d.a112838112 = j(d("fi").numberFormatter({ raw: "#,##0.00 'CZK'" }))),
                (d.a1427995120 = j(d("fi").numberFormatter({ raw: "#,##0.00 'DKK'" }))),
                (d.a1655244390 = j(d("fi").numberFormatter({ raw: "#,##0.00 'DZD'" }))),
                (d.b236063514 = j(d("fi").numberFormatter({ raw: "#,##0.00 'EGP'" }))),
                (d.b638655566 = j(d("fi").numberFormatter({ raw: "#,##0.00 '€'" }))),
                (d.b1187961249 = j(d("fi").numberFormatter({ raw: "#,##0.00 '£'" }))),
                (d.b72019006 = j(d("fi").numberFormatter({ raw: "#,##0.00 'GHS'" }))),
                (d.a1930832272 = j(d("fi").numberFormatter({ raw: "#,##0.00 'GTQ'" }))),
                (d.b391102189 = j(d("fi").numberFormatter({ raw: "#,##0.00 'HKD'" }))),
                (d.a1726860339 = j(d("fi").numberFormatter({ raw: "#,##0.00 'HRK'" }))),
                (d.b48741669 = j(d("fi").numberFormatter({ raw: "#,##0.00 'HUF'" }))),
                (d.b165042211 = j(d("fi").numberFormatter({ raw: "#,##0 'IDR'" }))),
                (d.b1626318204 = j(d("fi").numberFormatter({ raw: "#,##0.00 'ILS'" }))),
                (d.a120060007 = j(d("fi").numberFormatter({ raw: "#,##0.00 'INR'" }))),
                (d.b1913204360 = j(d("fi").numberFormatter({ raw: "#,##0 'IQD'" }))),
                (d.a62207059 = j(d("fi").numberFormatter({ raw: "#,##0 'ISK'" }))),
                (d.b456685535 = j(d("fi").numberFormatter({ raw: "#,##0 '¥'" }))),
                (d.b58256005 = j(d("fi").numberFormatter({ raw: "#,##0.00 'KES'" }))),
                (d.b1291093436 = j(d("fi").numberFormatter({ raw: "#,##0 'KRW'" }))),
                (d.b1692496196 = j(d("fi").numberFormatter({ raw: "#,##0.000 'KWD'" }))),
                (d.a1428081263 = j(d("fi").numberFormatter({ raw: "#,##0.00 'KZT'" }))),
                (d.b1063844166 = j(d("fi").numberFormatter({ raw: "#,##0 'LBP'" }))),
                (d.b552087324 = j(d("fi").numberFormatter({ raw: "#,##0.00 'MAD'" }))),
                (d.b266985106 = j(d("fi").numberFormatter({ raw: "#,##0.00 'MKD'" }))),
                (d.b1328047631 = j(d("fi").numberFormatter({ raw: "#,##0.00 'MXN'" }))),
                (d.b326027346 = j(d("fi").numberFormatter({ raw: "#,##0.00 'MYR'" }))),
                (d.b1787897985 = j(d("fi").numberFormatter({ raw: "#,##0.00 'NGN'" }))),
                (d.a931276714 = j(d("fi").numberFormatter({ raw: "#,##0.00 'NOK'" }))),
                (d.a1903478556 = j(d("fi").numberFormatter({ raw: "#,##0.00 'NZD'" }))),
                (d.b77284677 = j(d("fi").numberFormatter({ raw: "#,##0.00 'PEN'" }))),
                (d.b1652482628 = j(d("fi").numberFormatter({ raw: "#,##0.00 'PHP'" }))),
                (d.a1067286717 = j(d("fi").numberFormatter({ raw: "#,##0 'PKR'" }))),
                (d.a1840273794 = j(d("fi").numberFormatter({ raw: "#,##0.00 'PLN'" }))),
                (d.b1769972462 = j(d("fi").numberFormatter({ raw: "#,##0.00 'QAR'" }))),
                (d.b601529085 = j(d("fi").numberFormatter({ raw: "#,##0.00 'RON'" }))),
                (d.b1632773167 = j(d("fi").numberFormatter({ raw: "#,##0 'RSD'" }))),
                (d.a84975893 = j(d("fi").numberFormatter({ raw: "#,##0.00 'RUB'" }))),
                (d.a1715648208 = j(d("fi").numberFormatter({ raw: "#,##0.00 'SAR'" }))),
                (d.a770291579 = j(d("fi").numberFormatter({ raw: "#,##0.00 'SEK'" }))),
                (d.b1950072412 = j(d("fi").numberFormatter({ raw: "#,##0.00 'SGD'" }))),
                (d.a622983302 = j(d("fi").numberFormatter({ raw: "#,##0.00 'THB'" }))),
                (d.a1710296394 = j(d("fi").numberFormatter({ raw: "#,##0.000 'TND'" }))),
                (d.a1566555993 = j(d("fi").numberFormatter({ raw: "#,##0.00 'TRY'" }))),
                (d.a1107894931 = j(d("fi").numberFormatter({ raw: "#,##0.00 'TWD'" }))),
                (d.b95124057 = j(d("fi").numberFormatter({ raw: "#,##0 'TZS'" }))),
                (d.a620010072 = j(d("fi").numberFormatter({ raw: "#,##0.00 'UAH'" }))),
                (d.a2108131278 = j(d("fi").numberFormatter({ raw: "#,##0 'UGX'" }))),
                (d.b699309458 = j(d("fi").numberFormatter({ raw: "#,##0.00 '$'" }))),
                (d.a1560609533 = j(d("fi").numberFormatter({ raw: "#,##0.00 'VEF'" }))),
                (d.a900949768 = j(d("fi").numberFormatter({ raw: "#,##0 'VND'" }))),
                (d.a1030418665 = j(d("fi").numberFormatter({ raw: "#,##0.00 'ZAR'" }))),
                (d.b1061293296 = j(d("fi").numberFormatter({ raw: "#,##0.00 'ZMW'" }))),
                (d.b180029606 = v({ 1: d("fi").numberFormatter({ raw: "0" }) }, { pattern: "d. MMM", timeSeparator: ".", months: { M: { 3: { 1: "tammik.", 2: "helmik.", 3: "maalisk.", 4: "huhtik.", 5: "toukok.", 6: "kesäk.", 7: "heinäk.", 8: "elok.", 9: "syysk.", 10: "lokak.", 11: "marrask.", 12: "jouluk." } } } })),
                (d.b1931068221 = v({ 1: d("fi").numberFormatter({ raw: "0" }) }, { pattern: "d. MMM y", timeSeparator: ".", months: { M: { 3: { 1: "tammik.", 2: "helmik.", 3: "maalisk.", 4: "huhtik.", 5: "toukok.", 6: "kesäk.", 7: "heinäk.", 8: "elok.", 9: "syysk.", 10: "lokak.", 11: "marrask.", 12: "jouluk." } } } })),
                (d.a2126216876 = v({ 1: d("fi").numberFormatter({ raw: "0" }), 2: d("fi").numberFormatter({ raw: "00" }) }, { pattern: "h.mm a", timeSeparator: ".", dayPeriods: { am: "ap.", pm: "ip." } })),
                (d.b1312699801 = v({ 1: d("fi").numberFormatter({ raw: "0" }) }, { pattern: "ccc d. MMM", timeSeparator: ".", days: { c: { 3: { sun: "su", mon: "ma", tue: "ti", wed: "ke", thu: "to", fri: "pe", sat: "la" } } }, months: { M: { 3: { 1: "tammik.", 2: "helmik.", 3: "maalisk.", 4: "huhtik.", 5: "toukok.", 6: "kesäk.", 7: "heinäk.", 8: "elok.", 9: "syysk.", 10: "lokak.", 11: "marrask.", 12: "jouluk." } } } })),
                (d.a239677982 = v({ 1: d("fi").numberFormatter({ raw: "0" }) }, { pattern: "E d. MMM y", timeSeparator: ".", days: { E: { 1: { sun: "su", mon: "ma", tue: "ti", wed: "ke", thu: "to", fri: "pe", sat: "la" } } }, months: { M: { 3: { 1: "tammik.", 2: "helmik.", 3: "maalisk.", 4: "huhtik.", 5: "toukok.", 6: "kesäk.", 7: "heinäk.", 8: "elok.", 9: "syysk.", 10: "lokak.", 11: "marrask.", 12: "jouluk." } } } })),
                (d.b1305311633 = v({ 1: d("fi").numberFormatter({ raw: "0" }) }, { pattern: "d. MMMM", timeSeparator: ".", months: { M: { 4: { 1: "tammikuuta", 2: "helmikuuta", 3: "maaliskuuta", 4: "huhtikuuta", 5: "toukokuuta", 6: "kesäkuuta", 7: "heinäkuuta", 8: "elokuuta", 9: "syyskuuta", 10: "lokakuuta", 11: "marraskuuta", 12: "joulukuuta" } } } })),
                (d.b266571426 = v({ 1: d("fi").numberFormatter({ raw: "0" }), 2: d("fi").numberFormatter({ raw: "00" }) }, { pattern: "d. MMM y 'klo' h.mm a", timeSeparator: ".", months: { M: { 3: { 1: "tammik.", 2: "helmik.", 3: "maalisk.", 4: "huhtik.", 5: "toukok.", 6: "kesäk.", 7: "heinäk.", 8: "elok.", 9: "syysk.", 10: "lokak.", 11: "marrask.", 12: "jouluk." } } }, dayPeriods: { am: "ap.", pm: "ip." } })),
                (d.b837839306 = v({ 1: d("fi").numberFormatter({ raw: "0" }) }, { pattern: "d. MMMM y", timeSeparator: ".", months: { M: { 4: { 1: "tammikuuta", 2: "helmikuuta", 3: "maaliskuuta", 4: "huhtikuuta", 5: "toukokuuta", 6: "kesäkuuta", 7: "heinäkuuta", 8: "elokuuta", 9: "syyskuuta", 10: "lokakuuta", 11: "marraskuuta", 12: "joulukuuta" } } } })),
                (d.b1145642443 = v({ 1: d("fi").numberFormatter({ raw: "0" }), 2: d("fi").numberFormatter({ raw: "00" }) }, { pattern: "d. MMM 'klo' h.mm a", timeSeparator: ".", months: { M: { 3: { 1: "tammik.", 2: "helmik.", 3: "maalisk.", 4: "huhtik.", 5: "toukok.", 6: "kesäk.", 7: "heinäk.", 8: "elok.", 9: "syysk.", 10: "lokak.", 11: "marrask.", 12: "jouluk." } } }, dayPeriods: { am: "ap.", pm: "ip." } })),
                (d.a1530108950 = v({ 1: d("fi").numberFormatter({ raw: "0" }) }, { pattern: "d.M.y", timeSeparator: "." })),
                (d.b1177901190 = v({ 1: d("fi").numberFormatter({ raw: "0" }) }, { pattern: "y", timeSeparator: "." })),
                (d.a214741501 = v({ 1: d("fi").numberFormatter({ raw: "0" }) }, { pattern: "LLL y", timeSeparator: ".", months: { L: { 3: { 1: "tammi", 2: "helmi", 3: "maalis", 4: "huhti", 5: "touko", 6: "kesä", 7: "heinä", 8: "elo", 9: "syys", 10: "loka", 11: "marras", 12: "joulu" } } } })),
                (d.a772290256 = v({ 1: d("fi").numberFormatter({ raw: "0" }), 2: d("fi").numberFormatter({ raw: "00" }) }, { pattern: "cccc d. MMMM y 'klo' H.mm.ss zzzz", timeSeparator: ".", days: { c: { 4: { sun: "sunnuntai", mon: "maanantai", tue: "tiistai", wed: "keskiviikko", thu: "torstai", fri: "perjantai", sat: "lauantai" } } }, months: { M: { 4: { 1: "tammikuuta", 2: "helmikuuta", 3: "maaliskuuta", 4: "huhtikuuta", 5: "toukokuuta", 6: "kesäkuuta", 7: "heinäkuuta", 8: "elokuuta", 9: "syyskuuta", 10: "lokakuuta", 11: "marraskuuta", 12: "joulukuuta" } } }, gmtFormat: "UTC{0}", gmtZeroFormat: "UTC", hourFormat: "+HH.mm;-HH.mm" })),
                (d.b1260706582 = v({ 1: d("fi").numberFormatter({ raw: "0" }), 2: d("fi").numberFormatter({ raw: "00" }) }, { pattern: "d.M.y 'klo' H.mm.ss", timeSeparator: "." })),
                (d.b1909827238 = v({ 1: d("fi").numberFormatter({ raw: "0" }), 2: d("fi").numberFormatter({ raw: "00" }) }, { pattern: "dd.MM.y", timeSeparator: "." })),
                (d.b2109513833 = v({ 1: d("fi").numberFormatter({ raw: "0" }), 2: d("fi").numberFormatter({ raw: "00" }) }, { pattern: "H.mm", timeSeparator: "." })),
                (d.a483723785 = v({ 1: d("fi").numberFormatter({ raw: "0" }), 2: d("fi").numberFormatter({ raw: "00" }) }, { pattern: "E h.mm a", timeSeparator: ".", days: { E: { 1: { sun: "su", mon: "ma", tue: "ti", wed: "ke", thu: "to", fri: "pe", sat: "la" } } }, dayPeriods: { am: "ap.", pm: "ip." } })),
                (d.b1931753414 = v({ 1: d("fi").numberFormatter({ raw: "0" }) }, { pattern: "LLLL y", timeSeparator: ".", months: { L: { 4: { 1: "tammikuu", 2: "helmikuu", 3: "maaliskuu", 4: "huhtikuu", 5: "toukokuu", 6: "kesäkuu", 7: "heinäkuu", 8: "elokuu", 9: "syyskuu", 10: "lokakuu", 11: "marraskuu", 12: "joulukuu" } } } })),
                (d.a82868893 = v({ 1: d("fi").numberFormatter({ raw: "0" }) }, { pattern: "d.M.y", timeSeparator: "." })),
                (d.b180714799 = v({}, { pattern: "LLLL", timeSeparator: ".", months: { L: { 4: { 1: "tammikuu", 2: "helmikuu", 3: "maaliskuu", 4: "huhtikuu", 5: "toukokuu", 6: "kesäkuu", 7: "heinäkuu", 8: "elokuu", 9: "syyskuu", 10: "lokakuu", 11: "marraskuu", 12: "joulukuu" } } } })),
                (d.a1072530641 = v({}, { pattern: "cccc", timeSeparator: ".", days: { c: { 4: { sun: "sunnuntai", mon: "maanantai", tue: "tiistai", wed: "keskiviikko", thu: "torstai", fri: "perjantai", sat: "lauantai" } } } })),
                (d.b571436687 = h(d("fi").dateToPartsFormatter({ skeleton: "MMMd" }))),
                (d.b1179785844 = h(d("fi").dateToPartsFormatter({ skeleton: "yMMMd" }))),
                (d.a1290056323 = h(d("fi").dateToPartsFormatter({ skeleton: "hm" }))),
                (d.b561417424 = h(d("fi").dateToPartsFormatter({ skeleton: "MMMEd" }))),
                (d.a2054595189 = h(d("fi").dateToPartsFormatter({ skeleton: "yMMMEd" }))),
                (d.b554029256 = h(d("fi").dateToPartsFormatter({ skeleton: "MMMMd" }))),
                (d.a161287143 = h(d("fi").dateToPartsFormatter({ skeleton: "yMMMdhm" }))),
                (d.a64082893 = h(d("fi").dateToPartsFormatter({ date: "long" }))),
                (d.a669274764 = h(d("fi").dateToPartsFormatter({ skeleton: "MMMdhm" }))),
                (d.b575073953 = h(d("fi").dateToPartsFormatter({ date: "short" }))),
                (d.a1011883203 = h(d("fi").dateToPartsFormatter({ skeleton: "y" }))),
                (d.b176665580 = h(d("fi").dateToPartsFormatter({ skeleton: "yMMM" }))),
                (d.a380883175 = h(d("fi").dateToPartsFormatter({ datetime: "full" }))),
                (d.a554210625 = h(d("fi").dateToPartsFormatter({ datetime: "medium" }))),
                (d.b1158544861 = h(d("fi").dateToPartsFormatter({ skeleton: "yMMdd" }))),
                (d.a80270560 = h(d("fi").dateToPartsFormatter({ time: "short" }))),
                (d.a332550418 = h(d("fi").dateToPartsFormatter({ skeleton: "Ehm" }))),
                (d.b1180471037 = h(d("fi").dateToPartsFormatter({ skeleton: "yMMMM" }))),
                (d.b753291660 = h(d("fi").dateToPartsFormatter({ date: "medium" }))),
                (d.b572121880 = h(d("fi").dateToPartsFormatter({ skeleton: "MMMM" }))),
                (d.a681123560 = h(d("fi").dateToPartsFormatter({ skeleton: "EEEE" }))),
                (d.b163256496 = b(d("fi").numberFormatter({}), d("fi").pluralGenerator({}), { "relativeTime-type-future": { "relativeTimePattern-count-one": "{0} päivän päästä", "relativeTimePattern-count-other": "{0} päivän päästä" }, "relativeTime-type-past": { "relativeTimePattern-count-one": "{0} päivä sitten", "relativeTimePattern-count-other": "{0} päivää sitten" }, "relative-type--2": "toissa päivänä", "relative-type--1": "eilen", "relative-type-0": "tänään", "relative-type-1": "huomenna", "relative-type-2": "ylihuomenna" })),
                (d.a1342870325 = p(d("fi").numberFormatter({}), d("fi").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "sekunnit", one: "{0} sekunti", other: "{0} sekuntia", perUnitPattern: "{0} / sekunti" } })),
                (d.b544092971 = p(d("fi").numberFormatter({}), d("fi").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "minuutit", one: "{0} minuutti", other: "{0} minuuttia", perUnitPattern: "{0} / minuutti" } })),
                (d.b289833819 = p(d("fi").numberFormatter({}), d("fi").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "tunnit", one: "{0} tunti", other: "{0} tuntia", perUnitPattern: "{0} / tunti" } })),
                (d.b595408586 = p(d("fi").numberFormatter({}), d("fi").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "s", one: "{0}s", other: "{0}s", perUnitPattern: "{0}/s" } })),
                (d.b1490937130 = p(d("fi").numberFormatter({}), d("fi").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "min", one: "{0}min", other: "{0}min", perUnitPattern: "{0}/min" } })),
                (d.b1961027930 = p(d("fi").numberFormatter({}), d("fi").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "t", one: "{0}t", other: "{0}t", perUnitPattern: "{0}/t" } })),
                (d.b326007106 = p(d("fi").numberFormatter({}), d("fi").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "pv", one: "{0}pv", other: "{0}pv", perUnitPattern: "{0}/pv" } })),
                (d.a708514493 = p(d("fi").numberFormatter({}), d("fi").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "päivät", one: "{0} päivä", other: "{0} päivää", perUnitPattern: "{0} / päivä" } })),
                (d.b167379038 = p(d("fi").numberFormatter({}), d("fi").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "kk", one: "{0}kk", other: "{0}kk", perUnitPattern: "{0}/kk" } })),
                (d.a1870689441 = p(d("fi").numberFormatter({}), d("fi").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "kuukaudet", one: "{0} kuukausi", other: "{0} kuukautta", perUnitPattern: "{0} / kuukausi" } })),
                (d.b556465537 = p(d("fi").numberFormatter({}), d("fi").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "v", one: "{0}v", other: "{0}v", perUnitPattern: "{0}/v" } })),
                (d.a1190955710 = p(d("fi").numberFormatter({}), d("fi").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "vuodet", one: "{0} vuosi", other: "{0} vuotta", perUnitPattern: "{0} / vuosi" } })),
                (d.a412630775 = p(d("fi").numberFormatter({}), d("fi").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "sek", one: "{0} s", other: "{0} s", perUnitPattern: "{0}/s" } })),
                (d.a2046310743 = p(d("fi").numberFormatter({}), d("fi").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "min", one: "{0} min", other: "{0} min", perUnitPattern: "{0}/min" } })),
                (d.a1338409863 = p(d("fi").numberFormatter({}), d("fi").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "t", one: "{0} t", other: "{0} t", perUnitPattern: "{0}/t" } })),
                (d.a16930606 = p(d("fi").numberFormatter({ minimumFractionDigits: 1, maximumFractionDigits: 1, round: "truncate" }), d("fi").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "s", one: "{0}s", other: "{0}s", perUnitPattern: "{0}/s" } })),
                e("d58baa7f", d.a1897090936),
                e("ia24dc8d", d.b444374780),
                e("iab73d4b", d.b7542538),
                e("i3b7a017", d.a1342870325),
                e("ie5d110f", d.b544092971),
                e("df5f11b3", d.b289833819),
                e("e8733ed9", d.b595408586),
                e("be59d8c3", d.b1490937130),
                e("i3d087db", d.b1961027930),
                e("ga8d18c9", d.b326007106),
                e("a91e7d49", d.a708514493),
                e("id952a69", d.b167379038),
                e("ga09ab65", d.a1870689441),
                e("c83b901d", d.b556465537),
                e("a55b9fed", d.a1190955710),
                e("ccaa970f", d.b571436687),
                e("jade381b", d.b1179785844),
                e("d725a289", d.a1290056323),
                e("g08cbabb", d.b359820071),
                e("c333da63", d.b163256496),
                e("h8054d91", d.b561417424),
                e("i61fef37", d.a412630775),
                e("ba705e27", d.a2046310743),
                e("j86b0d8d", d.a1338409863),
                e("f668e929", d.b1736507725),
                e("i2785009", d.a1605065184),
                e("c778d80b", d.a1934830945),
                e("e8d93005", d.b1822859553),
                e("d46781af", d.a16930606),
                e("ba316f05", d.a1326664578),
                e("c0bdd345", d.a258189312),
                e("aa2aa1a1", d.a2054595189),
                e("da44942d", d.b554029256),
                e("bfbc051d", d.a161287143),
                e("ba2e82a1", d.a64082893),
                e("fc209bb7", d.a669274764),
                e("cf8abf59", d.b1699014532),
                e("a9f397f3", d.b575073953),
                e("d857e44d", d.b735927436),
                e("cb87e3db", d.a1410664243),
                e("a9d5ffd1", d.b1653844206),
                e("a0e8371d", d.a579229572),
                e("gcc50dc9", d.a2009497830),
                e("a6a43585", d.a577445634),
                e("a0cc8f2d", d.b1226785525),
                e("i31c32c5", d.b625573354),
                e("i7dc69e9", d.b111437928),
                e("c14a6c03", d.a1977895449),
                e("jaa3d537", d.b800321490),
                e("a824080b", d.a1174495283),
                e("d9c0bedb", d.a715834221),
                e("bf8c0613", d.b1546463354),
                e("i8163625", d.b916622032),
                e("adb53ba1", d.a112838112),
                e("iabf697d", d.a1427995120),
                e("a1a0555b", d.a1655244390),
                e("f266f3d9", d.b236063514),
                e("a9a8652b", d.b638655566),
                e("dbf40761", d.b1187961249),
                e("b0d993d9", d.b72019006),
                e("ac1308e1", d.a1930832272),
                e("a7889ab3", d.b391102189),
                e("c614f5cd", d.a1726860339),
                e("i55d57e3", d.b48741669),
                e("e4b6002b", d.b165042211),
                e("d28e983b", d.b1626318204),
                e("e8c9232d", d.a120060007),
                e("c8994ae1", d.b1913204360),
                e("f821c2a5", d.a62207059),
                e("j348b9c9", d.b456685535),
                e("i6f93b9b", d.b58256005),
                e("c6150bd5", d.b1291093436),
                e("i8921e09", d.b1692496196),
                e("ef239279", d.a1428081263),
                e("hecdb149", d.b1063844166),
                e("fdd039b7", d.b552087324),
                e("f30c2c37", d.b266985106),
                e("d9ea7bff", d.b1328047631),
                e("ea3df4b7", d.b326027346),
                e("jaac21bb", d.b1787897985),
                e("hb435ced", d.a931276714),
                e("ce699d81", d.a1903478556),
                e("bc56d3d7", d.b77284677),
                e("f8561913", d.b1652482628),
                e("g6485d53", d.a1067286717),
                e("ff561cc1", d.a1840273794),
                e("b42011d3", d.b1769972462),
                e("a6660bcd", d.b601529085),
                e("f9b80449", d.b1632773167),
                e("gdee4d5d", d.a84975893),
                e("h36f2103", d.a1715648208),
                e("a19ad037", d.a770291579),
                e("g713f699", d.b1950072412),
                e("ff2e39af", d.a622983302),
                e("be34316d", d.a1710296394),
                e("aef81b75", d.a1566555993),
                e("fcce70a5", d.a1107894931),
                e("jc9d352f", d.b95124057),
                e("be1cb8c5", d.a620010072),
                e("j9371501", d.a2108131278),
                e("j7d4397d", d.b699309458),
                e("d61441dd", d.a1560609533),
                e("e2a99e97", d.a900949768),
                e("f7ce19ab", d.a1030418665),
                e("b2a0213f", d.b1061293296),
                e("d7d71245", d.a1011883203),
                e("a2f2faab", d.b176665580),
                e("g8d1b99b", d.a380883175),
                e("d0a77c9b", d.a554210625),
                e("e18e399b", d.b1158544861),
                e("b6ca7bcb", d.a80270560),
                e("h0e4cdf5", d.a332550418),
                e("g727ddcf", d.b1180471037),
                e("h3629783", d.b753291660),
                e("a20c68af", d.b572121880),
                e("ja781451", d.a365930030),
                e("cfa1a7b9", d.a44360209),
                e("f3b9b9a7", d.a681123560),
                e("eefcd267", d.b510371501),
                e("fa8afc43", d.a1681401204);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/i18n/fi.c0aacafa.js.map
