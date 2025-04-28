"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["i18n/da"],
    {
        154736: (e, r, n) => {
            var t = n(292426)._register("da", {
                get emoji() {
                    return n.e("i18n/emoji-da").then(n.t.bind(n, 397896, 23));
                },
            });
            function i(e, r, n) {
                return "one" == ((t = e), (i = String(t).split(".")), (d = i[0]), (a = Number(i[0]) == t), 1 != t && (a || (0 != d && 1 != d)) ? "other" : "one") ? r : n;
                var t, i, d, a;
            }
            t("c39b0e24", "X"),
                t("jb38600c", "Ingen"),
                t("f07eac34", "Parodi-konto"),
                t("a41b5c2e", "Fan-konto"),
                t("i428ea62", "Kommentar-konto"),
                t("ac0d27be", "Beklager, denne konto er blevet suspenderet."),
                t("bcee7444", "Kontoopdatering fejlede."),
                t("e0cbf77a", "Tilføj telefon"),
                t("f377195c", "X er overbelastet. Vent et øjeblik, og prøv igen."),
                t("d67f9456", "Du er blevet blokeret fra at kunne udføre denne handling."),
                t("e0ece1b6", "Kan ikke vedhæfte medier. Prøv at uploade igen."),
                t("i82e8f04", "Denne konto er midlertidigt blokeret fra at følge flere konti for at beskytte brugerne mod spam og andre skadelige aktiviteter. Du bør sikre dig, at du forstår X-reglerne."),
                t("jf7be47a", "Denne konto er midlertidigt blokeret fra at sende posts for at beskytte brugerne mod spam og andre skadelige aktiviteter. Du bør sikre dig, at du forstår X-reglerne."),
                t("g75fec74", "Du har nået din daglige grænse for denne handling. Tilføj en telefon til din konto for at fjerne grænsen."),
                t("abb8b6e0", "Dette telefonnummer er allerede registreret."),
                t("f30bd1fc", "Vi kan ikke sende en sms-besked til dette telefonnummer, da operatøren ikke er understøttet."),
                t("i54e550c", "Vi kan ikke bekræfte dette telefonnummer."),
                t("h154702a", "Vi kan ikke færdiggøre din anmodning, fordi dette link er blevet identificeret af X eller vores partnere som værende potentielt skadeligt. Besøg vores hjælpecenter for at læse mere."),
                t("c8cb0b4c", "Adgangskoden, du indtastede, var forkert."),
                t("b1b54f9e", "De medier, du forsøgte at uploade, er ugyldige."),
                t("i859a9d4", "Læs mere"),
                t("d6e72ce1", function (e) {
                    return "Din adgangskode skal være på mindre end " + e.count + " tegn. Indtast en kortere kode.";
                }),
                t("a34dccd7", function (e) {
                    return "Din adgangskode skal mindst være på " + e.count + " tegn. Indtast en længere kode.";
                }),
                t("jea2ff04", "Den adgangskode er for let at gætte. Vælg venligst en stærkere adgangskode."),
                t("ce482c36", "Et eller flere felter er ugyldige. Tjek venligst dine indtastninger og prøv igen."),
                t("db626d88", "Tilføj dit telefonnummer for at færdiggøre konfigurationen af din konto"),
                t("i3ee2550", "Udfyld alle obligatoriske felter."),
                t("cf18a258", "Denne anmodning ser ud til at være automatiseret. For at beskytte vores brugere mod spam og anden ondsindet aktivitet kan vi ikke fuldføre denne handling lige nu. Prøv igen senere."),
                t("h7ffa648", "Sms-bekræftelsesgrænsen er overskredet."),
                t("b87ceb1c", "Sms-bekræftelseskode er ugyldig."),
                t("f87e2faa", "Vi kunne desværre ikke finde den pågældende bruger."),
                t("cdaf8222", "Beklager, men du er underlagt en begrænsning. Vent et øjeblik, og prøv igen."),
                t("c1b0e710", "Din konto er suspenderet og har ikke tilladelse til at udføre denne handling."),
                t("bfb22fae", "Beklager, den post er blevet slettet."),
                t("a23cd3ba", "X har deaktiveret visse handlinger i denne post."),
                t("bb558892", "Denne bruger har allerede et bekræftet telefonnummer."),
                t("hae1c934", "Noget gik galt, men bare rolig – det er ikke din skyld."),
                t("e784846c", "Vi er i gang med at gennemgå din profil. Det er ikke muligt at ændre dit navn eller profilbillede under gennemgangsperioden"),
                t("h1cbdd30", "Opdater venligst siden og prøv igen."),
                t("a5077d3e", "Opdater"),
                t("b2648ba4", "Din konto har muligvis ikke den nødvendige tilladelse til at udføre denne handling. Opdater siden, og prøv igen."),
                t("bcd6bb0e", "Medlem"),
                t("hd8c22d2", "Mod."),
                t("c3153100", "Admin"),
                t("fa9adac1", function (e) {
                    return 'Søg efter "' + e.query + '"';
                }),
                t("jcec6620", "Post-svar skjult"),
                t("f75d1806", "Premium"),
                t("j4a7d9a6", "Basis"),
                t("hedf9d7c", "Premium+"),
                t("f5de898e", "Sekskantet profilbillede"),
                t("fcc8734a", "Kvadratisk profilbillede"),
                t("c64e46f8", "Dette medlem blev fjernet fra Fællesskabet, så vedkommendes posts er skjult."),
                t("b3f1cb42", "En moderator skjulte denne post, fordi den overtræder en Fællesskabsregel."),
                t("cbd2dc9c", "Du indberettede denne post."),
                t("cfbea177", function (e) {
                    return e.name + "s Rum";
                }),
                t("ab4fc8bc", "Rum"),
                t("jd859c9c", "Du er blevet fjernet fra dette Rum."),
                t("c60ed9b0", "Du har ikke tilladelse til at deltage i dette Rum."),
                t("d8227e16", "Du har ikke tilladelse til at oprette dette Rum"),
                t("f027fed8", "Billede-i-billede"),
                t("hd50e064", "Ikke nu"),
                t("i76d640e", "Vi har brug for din tilladelse"),
                t("fdaa0be8", "Hvis du vil tale i dette Rum, skal du give X adgang til din mikrofon. Tjek dine browserindstillinger. "),
                t("gea6cc1a", "Er du sikker?"),
                t("hb568af4", "Skjul"),
                t("f7c8617a", "Hvad er klip?"),
                t("ecc7d2ec", "Klip er optagne øjeblikke, som alle i dit Rum kan oprette og dele. Alle klip udløber efter 30 dage."),
                t("d575ee02", "Hvem kan oprette et klip?"),
                t("dbc477a4", "Alle (endda lyttere) kan oprette klip. Det eneste krav er, at du skal være logget ind på X."),
                t("ed1d1cc0", "Alle, der taler, kan komme med i et klip"),
                t("e5d193c8", "Hvis du taler, kan du komme med i et klip. Vi giver dig besked, hvis det sker."),
                t("e1547ec0", "Klip et øjeblik ud af Rummet"),
                t("i154245e", "Har du hørt noget latterligt eller fantastisk? Opret et klip, og del det."),
                t("j24c37b2", "Modtaget"),
                t("g1c6f16e", "Optagede Rum"),
                t("e5609214", "Lad Rummet leve videre"),
                t("g665514c", "Kun talere bliver optaget"),
                t("ja196c5a", "Gæster, der taler, bliver optaget. Optagelsen er offentlig, så alle kan afspille den."),
                t("dd317ed6", "Afspil eller del med alle"),
                t("jf03b37c", "Lyt til optagelsen, når du ønsker det. Du kan også dele den i en post."),
                t("fd05976b", "Læs mere"),
                t("b4f91a8a", "Optagelse aktiv"),
                t("gb418012", "Velkommen til Rum"),
                t("fec3c1e0", "Stedet til direkte lydsamtaler"),
                t("j32eb4f8", "Tilføj op til 10 talere"),
                t("j4f133a6", "Du kan invitere alle på X til at tale."),
                t("ed434ac6", "Rum er offentlige – alle kan deltage"),
                t("e0025688", "Dit Rum, dine regler"),
                t("c1bc6f86", "Som vært styrer du, hvem der må tale. Du kan også fjerne personer, som du ikke ønsker i dit Rum."),
                t("b0bc8330", "Du kan også blokere og indberette folk i et Rum."),
                t("cb17a0f3", "Læs mere"),
                t("dcd77941", "Læs mere"),
                t("cc724cb0", "Opret klip"),
                t("cfd2f35e", "Annuller"),
                t("c1df579e", "Næste"),
                t("e3146662", "Der kunne ikke oprettes billedtekster til dette klip."),
                t("f123fea8", "Indberet dette Rum"),
                t("d0aebc28", "Beskriv problemet"),
                t("g971a4e8", "Selvskade"),
                t("b96e6682", "Vold"),
                t("e5bf9b3a", "Seksuelt indhold"),
                t("d2a34320", "Børnesikkerhed"),
                t("a9ba3e28", "Private oplysninger"),
                t("d5519f4a", "Krænkende adfærd"),
                t("eb55363c", "Dette Rum er blevet indberettet"),
                t("i65de934", "Du lytter anonymt"),
                t("b1037050", "Administrer Rum"),
                t("ic107434", "Tænd kameraet"),
                t("d7e0329c", "Sluk kameraet"),
                t("b772cd66", "Færdig"),
                t("b3bd3e38", "Top-posts først"),
                t("d88cf16c", "Seneste posts først"),
                t("bd4ad3ea", "Bred"),
                t("ca1180a0", "Medium"),
                t("c86ff1b0", "Smal"),
                t("eed02406", "Lille"),
                t("cffb04d6", "Standard"),
                t("af15cef8", "Post med notater"),
                t("ab28945c", "Bidragyderprofil"),
                t("e2462db4", "Mest delt i dit netværk · Sidste 24 timer"),
                t("ad16f482", "Begivenhed"),
                t("c20aaf3e", "Fejl"),
                t("edf7bc2e", "Trender"),
                t("fa884026", "Liste"),
                t("fa98627a", "Profil"),
                t("a9ae1e78", "Søg"),
                t("a2a3824a", "Emne"),
                t("a6d5b010", "Tidslinje"),
                t("h5860a68", "Grok"),
                t("a990900c", "Bio"),
                t("h02a6fe6", "Fællesskaber"),
                t("a15648a4", "Fællesskabsnoter"),
                t("j359a2a9", function (e) {
                    return e.handle + " • " + e.itemName;
                }),
                t("j5ec9765", function (e) {
                    return e.handle + " • Bogmærkemappe";
                }),
                t("ce5deee7", function (e) {
                    return e.handle + " • Beskeder";
                }),
                t("d80c77dc", "Du kan skjule disse svar"),
                t("ef939f4b", function (e) {
                    return "Svar skjult af @" + e.screenName;
                }),
                t("g40ff2b4", "Dit medie kunne ikke få ændret størrelse og er for stort til at uploade."),
                t("b8098028", "Et eller flere billeder overskrider størrelsesgrænsen og kan ikke tilpasses."),
                t("b36f4170", "Filen er tom."),
                t("hab3781e", "En eller flere af de angivne filer er ikke billeder."),
                t("f6c4fb02", "Din GIF-fil kunne ikke behandles. Se venligst tips om uploading af GIFs."),
                t("g0af3dd2", "Din GIF-fil er ikke kompatibel. Se venligst tips om uploading af GIFs."),
                t("b8c8b0be", "Videofilen kunne ikke behandles. Se tip til upload af videoer."),
                t("ica6d718", "Videofilen er ikke kompatibel. Se tip til upload af videoer."),
                t("b28d44f7", function (e) {
                    return "Din GIF-fil er for stor. GIF-filer må ikke fylde mere end " + e.limit + " MB";
                }),
                t("i1db7d13", function (e) {
                    return "Din videofil er for stor. Videoer må ikke fylde mere end " + e.limit + " MB";
                }),
                t("baac0ed7", function (e) {
                    return "Din videofil er for stor. Videoer må ikke fylde mere end " + e.limit + " GB";
                }),
                t("a22385bb", function (e) {
                    return "Din video er for lang. Prøv at begrænse den til " + e.limit + " sekunder eller mindre.";
                }),
                t("be0440bf", function (e) {
                    return "Din video er for lang. Prøv at begrænse den til " + e.limit + " minutter eller mindre.";
                }),
                t("feeba512", "Din billedfil kunne ikke behandles. Se venligst tips om uploading af billeder."),
                t("db123c02", "Din billedfil er ikke kompatibel. Se venligst tips om uploading af billeder."),
                t("db6001e7", function (e) {
                    return "Din billedfil er for stor. Billeder må ikke fylde mere end " + e.limit + " MB";
                }),
                t("eb96d952", "Din billedfil mangler højde og bredde"),
                t("b3880588", "Upload-sessionen er udløbet."),
                t("ca058b68", "Nogle af dine medier kunne ikke indlæses."),
                t("id24379c", "Nogle af dine medier kunne ikke blive uploadet."),
                t("h4d7cbcc", "Mediet kunne ikke uploades. Prøv igen."),
                t("aaa798fc", "Opgrader"),
                t("f13bb672", "Abonner på Premium"),
                t("ab0decc0", "Abonnér"),
                t("e4e92f35", function (e) {
                    return "Opgrader til " + e.tier;
                }),
                t("c2831f07", function (e) {
                    return "Abonner på " + e.tier;
                }),
                t("fd425414", "Få Radar"),
                t("g6320792", "Få Premium-statistik"),
                t("f09be7f8", "Bliv verificeret"),
                t("j34ad558", "Få Premium"),
                t("a73d39fb", function (e) {
                    return "Start gratis prøveperiode på " + e.numberOfDays + " dage";
                }),
                t("i4fb96c7", function (e) {
                    return "Få op til " + e.percentage + " % i rabat på X " + e.premiumTierName;
                }),
                t("c1c98165", function (e) {
                    return e.percentage + "% rabat";
                }),
                t("c5546038", "Udløber snart!"),
                t("e9a47564", "Sidste chance"),
                t("f65e7e91", function (e) {
                    return e.percentage + " % rabat " + e.tier + " " + e.plan;
                }),
                t("a84a736e", "Få gratis annoncekredit"),
                t("a0713d76", "Opgrader til Verificerede organisationer for at få gratis annoncekredit og en pakke med virksomhedsfunktioner til at skabe vækst."),
                t("a07e13fc", "Bliv en Premium-skaber"),
                t("i1b4aea2", "Opgrader for at udgive længere videoer"),
                t("efa90342", "Lås op for redigering af posts med X Premium"),
                t("cc528e28", "Kun X Premium-abonnenter har adgang til at redigere posts. Opgrader for at fortsætte."),
                t("h8a3525e", "Føj til Højdepunkter på din profil"),
                t("c0f7a722", "Du skal abonnere på Premium for at føje posts til Højdepunkter på din profil."),
                t("i3b31136", "Skriv Artikler på X"),
                t("b6a41c5f", function (e) {
                    return "Du skal abonnere på " + e.tier + " for at skrive Artikler på X";
                }),
                t("ae2c4afc", "Vil du udgive din egen Artikel?"),
                t("d300e29b", function (e) {
                    return "Opgrader til " + e.tier + " for at skrive længere posts og Artikler.";
                }),
                t("f614e2bc", "Opgrader til Premium for at skrive længere posts og anvende formatering som fed og kursiv."),
                t("c9772e6e", "Opgrader til Premium"),
                t("dc5575ac", "Vil du have en id-verificeret-etiket på din profil?"),
                t("d154f46e", "Lås op for oprettelse af Fællesskaber med X Premium"),
                t("a0228c02", "Kun X Premium-abonnenter har adgang til at oprette Fællesskaber. Opgrader for at fortsætte."),
                t("d07f1d74", "Du skal være verificeret for at føje disse brugere til samtalen"),
                t("ebe38626", "Kun verificerede brugere kan føje personer, der ikke følger dem, til en gruppe. Opgrader for at fortsætte."),
                t("e6eddae0", "Bliv verificeret for at oprette denne gruppe"),
                t("he27089e", "Kun verificerede brugere kan oprette en gruppe med brugere, der ikke følger dem. Opgrader for at fortsætte."),
                t("d7bc1116", "Bliv verificeret for at sende en besked til denne bruger"),
                t("f897074a", "Kun verificerede brugere kan sende direkte besked-anmodninger til personer, der ikke følger dem. Opgrader for at fortsætte."),
                t("c0cf5eae", "Bliv verificeret for at sende flere beskeder"),
                t("h2da08fc", "Du har nået den maksimale grænse for direkte beskeder på en enkelt dag. Opgrader for at fortsætte med at sende beskeder."),
                t("j503aee6", "Download videoer med X Premium"),
                t("j4dd3bf4", "Kun X Premium-abonnenter kan downloade videoer. Opgrader for at fortsætte."),
                t("bc231a74", "Lås op for bogmærkemapper med X Premium"),
                t("ed534c78", "Kun X Premium-abonnenter har adgang til bogmærkemapper. Opgrader for at fortsætte."),
                t("ed924940", "Fjern alle annoncer med Premium+"),
                t("dccdb326", "Kun abonnenter på Premium+ ser ingen annoncer. Opgrader for at fortsætte."),
                t("adf3410a", "Abonner for at låse op for nye funktioner, og få en andel af indtægterne, hvis du er kvalificeret."),
                t("d8661dd4", "I en begrænset periode. Lås op for det bedste på X."),
                t("fe7fd234", "Prøv Premium Basis gratis i dag"),
                t("a2f86dda", "Gør din oplevelse bedre med bogmærkemapper, redigering af posts, brugerdefinerede  appikoner og meget mere med Premium Basis."),
                t("d9593598", "Prøv Premium gratis i dag"),
                t("d0d6b59c", "Opgrader din oplevelse med færre annoncer, stærke værktøjer og meget mere med Premium."),
                t("g4bb7ea8", "Få op til 50 % i rabat på X Premium"),
                t("b748499c", "Tilbuddet er forlænget!"),
                t("b81135bc", "Slutter i dag!"),
                t("a8b4b878", "Oplev det bedste fra X denne thanksgiving."),
                t("df7fb242", "Thanksgiving-tilbud"),
                t("aeaf14a6", "Få 40 % rabat på Premium. Udløber snart!"),
                t("ca8cbf78", "Få 40 % rabat på Premium og Premium+"),
                t("j88ba18e", "Benyt tilbud"),
                t("f4dc8ea3", function (e) {
                    return "Få " + e.percentage + " % rabat på X Premium. Lås op for det bedste på X.";
                }),
                t("db6a5d54", "Du er ikke verificeret endnu"),
                t("edf7f57e", "Bliv verificeret for at få boostede svar, statistik, annoncefri browsing og meget mere. Opgrader din profil nu."),
                t("ba920d68", "Boost din indflydelse med verifikation"),
                t("ib79d0c2", "Lås op for VIP-funktioner: Verificer din konto"),
                t("bebc5f12", "Du annoncerer på X, men har ikke et abonnement på Verificerede organisationer"),
                t("d7836d1e", "Abonner for at få op til $12.000 i gratis annoncekredit, guldverifikation, VIP-support og en række værktøjer til at skabe vækst."),
                t("f528e369", function (e) {
                    return "Abonner på " + e.tier + " for at skrive dine egne Artikler";
                }),
                t("c5a8022a", "Med Artikler kan du udgive dit eget længere indhold med formateret tekst og indlejrede medier direkte på X."),
                t("d77899b6", "Abonner på Premium for at skrive dine egne længere posts"),
                t("bd65482a", "Skriv længere posts, og anvend formatering som fed og kursiv."),
                t("bee20918", "Få penge for at poste"),
                t("gb699d52", "Kan du lide at poste på X? Abonner på Premium for at deltage i vores program til indtægtsdeling."),
                t("f69877c2", "Boost dine svar med X Premium"),
                t("gba90d44", "Få mere synlighed, skil dig ud og bliv set."),
                t("a6dbcd58", "Støt skaberne ved at abonnere på Premium"),
                t("c4f49130", "Op til 25 % af dit abonnementsgebyr går direkte til skaberne."),
                t("ca8fa2c0", "Bliv verificeret med et blåt flueben"),
                t("febffc1a", "Boost din troværdighed, øg din synlighed, og lad din stemme blive hørt."),
                t("j45a377a", "Opgrader til Premium+"),
                t("i7170016", "Få flere fordele, nul annoncer og den højeste svarprioritering."),
                t("ee87f95e", "Avanceret statistik med X Premium"),
                t("ac38dbc0", "Se statistik for din profil, forstå din målgruppe og meget mere. Opgrader for at fortsætte."),
                t("i6e73154", "Forhåndsvisning af funktionen Kontostatistik, herunder søjlediagrammer og nøgletal"),
                t("b583e154", "Lås op for statistik med X Premium"),
                t("b7fb8c5e", "Brug $1k, få $1k"),
                t("ca559b70", "Abonner nu"),
                t("d68773a4", "Visualiser trends med Radar"),
                t("f677fed6", "Overvåg keywords, visualiser trendaktivitet og filtrer samtaler – i realtid."),
                t("ha49eac2", "Vil du vokse hurtigt på X?"),
                t("f27018b4", "Brug Premium-statistik til at få flere følgere med smart dataindsigt."),
                t("dfea1f08", "Gå ikke glip af værdifuld indsigt"),
                t("da8c5244", "Med Premium-statistik kan du låse op for smart dataindsigt for at få flere følgere."),
                t("b081baea", "Du går glip af indsigt!"),
                t("d5effffc", "Tilføj badge"),
                t("c3653d44", "Verificer din virksomhed"),
                t("e8070e70", "Prøv Premium"),
                t("ec42820e", "Ønsker du, at flere skal se dit svar?"),
                t("b0a95418", "Få svar-boost med Premium"),
                t("j8ee20aa", "Skil dig ud i samtalen med et svar-boost"),
                t("g13aa596", "Abonner på Premium for at få dine svar boostet"),
                t("cadd92be", "Få adgang til din post-statistik"),
                t("a7058228", "Lås op for avanceret statistik med X Premium"),
                t("gb7823ba", "Kontostatistik"),
                t("i90f8e36", "Organiser dine bogmærker"),
                t("abc6e710", "Sortér dine bogmærker i mapper med X Premium"),
                t("b7fa0cfe", "Top-artikler"),
                t("bcc7e8c0", "Alle bogmærker"),
                t("i3145aa0", "Bogmærker"),
                t("e39b368e", "Udsendelse"),
                t("hbea78a8", "Ny kolonne"),
                t("b5298d92", "Forbind"),
                t("d35d74e4", "Samtale"),
                t("h5245afa", "Fællesskab"),
                t("d4ebc798", "Udkast"),
                t("fcf3e54c", "Udforsk"),
                t("d806aa1a", "Skjulte svar"),
                t("ha8209bc", "Forside"),
                t("a2f81050", "Beskeder"),
                t("cf2d1048", "Beskedanmodninger"),
                t("e7172d70", "Yderligere beskeder"),
                t("e1066d88", "Min profil"),
                t("eb75875e", "Meddelelser"),
                t("j45978a8", "Citater"),
                t("fd6a3f30", "Planlagte posts"),
                t("aa4209e8", "Super-følgere"),
                t("d52a1caa", "Abonnenter"),
                t("d7b51c68", "Abonnementer"),
                t("c5f4befa", "Trends"),
                t("df34a454", "Post"),
                t("gfccba44", "Medlemsanmodninger"),
                t("e42dd8fa", "Moderationslog"),
                t("c2c191fc", "Indberettede posts"),
                t("c63602d4", "Mine Fællesskaber"),
                t("ddf0ba7e", "Samling"),
                t("c64974fc", "Følgere"),
                t("i099d32e", "Følgere, du kender"),
                t("d960b55c", "Følger"),
                t("b007440a", "Job"),
                t("aa68dafc", "Meddelelsesdetaljer"),
                t("b8533bac", "Emner"),
                t("jf00ebf6", "Kolonnen er ikke tilgængelig"),
                t("jaaa8984", "Lokalitet"),
                t("f345dcda", "Redigeringshistorik"),
                t("hea3f8ac", "Relaterede posts"),
                t("c8ee31da", "Nyheder"),
                t("d35c9eec", "Kontostatistik"),
                t("b5b7fb94", "Gruppe"),
                t("g755fcde", "Dig"),
                t("f6b1ff81", function (e) {
                    return e.name + " og dig";
                }),
                t("j652293d", function (e) {
                    return e.listOfParticipants + " og " + e.count + " flere";
                }),
                t("fb4ee2f6", "Beskedanmodninger slettet"),
                t("j607bf02", "Download X-appen"),
                t("j49fd4e8", "Skift til appen"),
                t("a565833e", "Tilmeld dig"),
                t("e919c3bc", "Log ind"),
                t("a17a75da", "X er bedre i appen"),
                t("e7342ed4", "Gå aldrig glip af en post. Åbn denne i X-appen for at få den fulde oplevelse."),
                t("b6a43e78", "Vær den første, der er informeret"),
                t("b469e406", "Hold dig opdateret om det, der er vigtigt for dig. Skift til appen for at få pushmeddelelser om personer, emner og begivenheder, som du følger."),
                t("b8505290", "Svar for at deltage i samtalen."),
                t("ae8b0564", "Repost for at sprede budskabet."),
                t("f2adab0e", "Like en post for at udtrykke din påskønnelse."),
                t("b7821a74", "Tilmeld dig, så du aldrig går glip af vedkommendes posts."),
                t("e6d43d06", "Følg et emne for at opdage fantastiske posts"),
                t("ic848090", "Log ind først"),
                t("f9ebe066", "Du kan deltage i samtalen i Fællesskaber – lige efter du har logget ind."),
                t("je3d93e2", "Folk på X er de første, der ved det."),
                t("ea88ce2e", "Gå ikke glip af det, der sker"),
                t("d8817e36", "Accept all cookies"),
                t("b9288ee6", "Refuse non-essential cookies"),
                t("i1390ec2", "Did someone say … cookies?"),
                t("ga3121d5", "hjælpecenter"),
                t("g482c949", "Vis mere om dine valg."),
                t("b47e760e", "Tryk på spørgsmålstegnet for at se tastaturgenveje"),
                t("fd2c7b44", "Vis tastaturgenveje"),
                t("g7e2adf2", "Opret nyt Dæk"),
                t("a6ba09e8", "Dupliker kolonne"),
                t("f5c9ccca", "Rediger aktuelt Dæk"),
                t("bf42c578", "Fokus på omarrangerknap"),
                t("j6fa64a6", "Gå til sidste kolonne"),
                t("b5545202", "Gå til sidste fastgjorte Dæk"),
                t("e0497acc", "Gå til Administrer alle Dæk"),
                t("beef7b14", "Gå til næste kolonne"),
                t("a5cb005e", "Gå til kolonne nr."),
                t("f65391bc", "Gå til fastgjort Dæk nr."),
                t("h0bfdd20", "Tilføj kolonne"),
                t("h770f6d4", "Gå til forrige kolonne"),
                t("b8b2b70c", "Slet kolonne"),
                t("a3e2df76", "Fortryd sletning af kolonne"),
                t("g850aec4", "Åbn/luk kolonneindstillinger"),
                t("d5696fcc", "Hjælp til genveje"),
                t("a83d4280", "Næste post"),
                t("g0048656", "Tidligere post"),
                t("a690c4d0", "Side ned"),
                t("e893811a", "Indlæs nye posts"),
                t("cdb53d7a", "Omtaler"),
                t("d7b8ebaa", "Likes"),
                t("b0041756", "Lister"),
                t("d4986f86", "Direkte beskeder"),
                t("bb081ea2", "Indstillinger"),
                t("eee2ed92", "Gå til bruger ..."),
                t("ee5ccf3e", "Visningsindstillinger"),
                t("ab3d53f8", "Ny post"),
                t("de94bda6", "Send post"),
                t("e736990a", "Ny direkte besked"),
                t("fe731016", "Like"),
                t("d17df548", "Svar"),
                t("g062295e", "Repost"),
                t("h01621a4", "Del post"),
                t("gb303814", "Føj til bogmærker"),
                t("c03b1126", "Skjul kontoen"),
                t("ebd2abb2", "Bloker kontoen"),
                t("hc6c5510", "Åbn post-oplysninger"),
                t("eebdef38", "Udvid billedet"),
                t("b488758c", "Åbn/luk Beskeder-dock"),
                t("c82314e0", "Paus/Afspil valgt video"),
                t("b881560e", "Sæt valgte video på lydløs"),
                t("a94f7302", "Gå til Lyd i Dock"),
                t("a7e604c6", "Afspil Lyd i Dock eller sæt på pause"),
                t("f978c4fc", "Slå Lyd i Dock til/fra"),
                t("hc73f030", "Din konto"),
                t("f15bfdb4", "Kontooplysninger"),
                t("a3841918", "E-mail"),
                t("c21037d0", "Land"),
                t("ab1f7ee0", "Skift din adgangskode"),
                t("e731db5a", "Nulstilling af adgangskode"),
                t("f56af9cc", "Download et arkiv med dine data"),
                t("hfb92b14", "Deaktiver din konto"),
                t("bf96fda4", "Alder"),
                t("d12d42dc", "Automatisering"),
                t("fdb81456", "Parodi-etiket"),
                t("j9d10268", "Kontoaktivitet"),
                t("i6b3f59a", "Kontohistorik"),
                t("da202f9a", "Din annoncørliste"),
                t("hc36dbba", "Indloggede enheder og apps"),
                t("a8d0108e", "Køn"),
                t("a03dacaa", "Sprog"),
                t("d9138166", "Se steder, du har været"),
                t("b523ecc6", "Adgangshistorik for konto"),
                t("abedd45c", "Anmod om dine data"),
                t("h1f01a24", "Interesser"),
                t("j7ad754a", "Dine X-data"),
                t("d299431c", "Indtægtsgenerering"),
                t("j087774e", "Mønter"),
                t("ff9ed474", "Indtjening i alt"),
                t("ec885836", "Indt.del. for skabere"),
                t("b431a5c6", "Andel af annonceindtægter"),
                t("b0e986ec", "Indtægtsgenererings-IDV"),
                t("aca4d76a", "Opsætning af Andel af annonceindtægter"),
                t("ab1b837a", "Kontrolpanel for Andel af annonceindtægter"),
                t("a9c1a9cc", "Videoannoncer"),
                t("d4ab5c12", "Indstillinger for videoannoncer"),
                t("c429e3ba", "Skaber-abonnementer"),
                t("fce877d6", "Fortryd post"),
                t("dd0c889e", "Tilpasning af profil"),
                t("ib35705e", "Administrér abonnement"),
                t("cf131522", "Administrer tilknytningsbadges"),
                t("cb165528", "Nyhedsfunktioner og indstillinger"),
                t("f8645654", "Sikkerhed og kontoadgang"),
                t("j95edf76", "Sikkerhed"),
                t("afe4a358", "Id-verifikation"),
                t("dd703318", "Godkendelse med to faktorer"),
                t("b1686800", "Administrer sikkerhedsnøgler"),
                t("ae72d4c4", "Apps og sessioner"),
                t("a1e8e682", "Registrerede enheder"),
                t("h1abfbce", "Forbundne konti"),
                t("cad53944", "Privatliv og sikkerhed"),
                t("e908903a", "Målgruppe og tagging"),
                t("b5c85d2c", "Beskyt dine posts"),
                t("f56d108e", "Billedtagging"),
                t("c6f67e32", "Dine posts"),
                t("f2bd9c48", "Indhold du kan se"),
                t("cbd449a0", "Skjul og bloker"),
                t("daef29b8", "Skjulte konti"),
                t("i0dd9b9e", "Skjulte ord"),
                t("a5f32aa2", "Blokerede konti"),
                t("i58a274c", "Direkte beskeder"),
                t("ded416b0", "Rum"),
                t("fd4d9068", "Synlighed og kontakter"),
                t("bbcafbda", "Administrer kontakter"),
                t("aeddb28a", "Indholdspræferencer"),
                t("d035a8d0", "Annoncepræferencer"),
                t("d0b74a5a", "Cookie preferences"),
                t("h3909cd0", "Udledt identitet"),
                t("d84e63d2", "Aktivitet uden for X"),
                t("h14ba864", "Deling af data med forretningspartnere"),
                t("jabb9c9a", "Lokalitetsoplysninger"),
                t("fcb6a5b8", "Føj lokalitetsoplysninger til dine posts"),
                t("h9f2da68", "Ømtåleligt indhold"),
                t("id6a8e1a", "Svarfilter"),
                t("fc35f762", "Filtrerede svar"),
                t("gaac710a", "Indberetningscenter"),
                t("bcd81cac", "Præferencer"),
                t("i647fb04", "Filtre"),
                t("hee41732", "Pushmeddelelser"),
                t("e75f25a8", "E-mailmeddelelser"),
                t("cf9b166a", "Tilgængelighed, visning og sprog"),
                t("e3719c16", "Tilgængelighed"),
                t("a776eed8", "Automatisk afspilning"),
                t("c4881c66", "Skærm"),
                t("d495680e", "Sprog"),
                t("f953f53a", "Skift visningssprog"),
                t("eafe3288", "Dataforbrug"),
                t("b721eb38", "Om"),
                t("g9230d00", "Delegate"),
                t("cb8ebf5c", "Medlemmer du har uddelegeret til"),
                t("i95202f6", "Konti, der er uddelegeret til dig"),
                t("afcad7f2", "Download appen"),
                t("e8f57e08", "Personlig tilpasning og data"),
                t("gbde3534", "Oplysninger om interesser og annoncer"),
                t("a54826c6", "Afledte interesser fra partnere"),
                t("a5cbc19a", "Din statistik"),
                t("i9028824", "Indlæser"),
                t("f5090e28", "Det ser ud til, at du har mistet forbindelsen. Vi prøver igen."),
                t("ba929da8", "Siden blev ikke fundet"),
                t("d203e242", "Ikke fundet"),
                t("e2eac0c4", "Primær"),
                t("i5aa4ce0", "Flere menupunkter"),
                t("h63a5c3c", "Mere"),
                t("a4fc1872", "Sidste uge"),
                t("e14bb1da", "Sidste dag"),
                t("d86bbf0f", function (e) {
                    return e.count + " ulæste elementer";
                }),
                t("h6beb5fb", function (e) {
                    return e.count + "+";
                }),
                t("i5f7b6b8", "Konto"),
                t("da4691aa", "Vis alle konti"),
                t("c7e55ccf", function (e) {
                    return "Skift til @" + e.screenname;
                }),
                t("b20a3894", "Den konto, du forsøger at skifte til, er blevet slettet."),
                t("daffabde", "fungerer som..."),
                t("eccbfa26", "Uddelegerede konti"),
                t("a1b7a904", "Fungerer som"),
                t("g61ed8a4", "Noget gik galt."),
                t("e520f166", "Du har overskredet den daglige grænse for afsendelse af posts."),
                t("c0554ca0", "Noget gik galt. Prøv at sende din post igen om et øjeblik."),
                t("b25c5b2a", "Hovsa! Det har du allerede sagt."),
                t("cef21114", "Din konto er suspenderet, og der kan ikke postes fra den."),
                t("cf369a0e", "Den post, du forsøger at svare på, er blevet slettet eller er ikke synlig for dig."),
                t("cd86efa8", "Teksten i din post overskrider det tilladte antal @omtaler."),
                t("e002f424", "Teksten i din post overskrider det tilladte antal URL-adresser."),
                t("c2b4ae8c", "Teksten i din post indeholder for mange hashtags."),
                t("hf05f59e", "Teksten i din post indeholder for mange cashtags."),
                t("dffb84c6", "Teksten i din post indeholder et hashtag, der overskrider den tilladte længde."),
                t("d7b21bc8", "Posten overskrider antallet af tilladte vedhæftningstyper."),
                t("e4672ac2", "Hovsa! En URL i din post ser ud til at linke til en side med spam eller usikkert indhold."),
                t("he5ecf52", "Teksten i din post overskrider den maksimalt tilladte grænse."),
                t("ac78e602", "Indholdet i din post er ugyldigt."),
                t("i251c738", "Billedhastigheden på den video, du forsøgte at uploade, var for høj."),
                t("ed3ac7ef", function (e) {
                    return "Billedhastigheden på den video, du forsøgte at uploade, var for høj. Maks. billedhastighed: 60. Faktisk billedhastighed: " + e.frameRate + ".";
                }),
                t("e23fe0cc", "Billedformatet på den video, du forsøgte at uploade, var for stort."),
                t("ca4514c0", "Billedformatet på den video, du forsøgte at uploade, var for lille."),
                t("fb4a459c", "Den video, du forsøgte at uploade, var for kort."),
                t("ca1afa98", "Den video, du forsøgte at uploade, var for lang."),
                t("b2e94283", function (e) {
                    return "via @" + e.viaScreenName;
                }),
                t("ee69d769", function (e) {
                    return "Post" + e.verb;
                }),
                t("ge8e4a38", "Post alle"),
                t("h735a98e", "Planlæg"),
                t("h3701ffe", "Opdater"),
                t("d9ef2842", "Ulæste elementer"),
                t("cdf89b84", "Forhåndsvisning af Brandede likes"),
                t("i83d4f14", "Følgeanmodninger"),
                t("aeede01a", "Aftryk"),
                t("ae1bbb26", "Log ud"),
                t("fd442790", "Indstillinger og privatliv"),
                t("da137d9a", "MStV Transparenzangaben"),
                t("e0cb0c72", "Annoncer"),
                t("e2eef3c2", "Verificerede org."),
                t("b55d8a78", "Opret dit Rum"),
                t("a5a30af0", "Artikler"),
                t("d13d697c", "Nye"),
                t("j0e2cfa8", "Erhverv"),
                t("h5e38204", "Chat"),
                t("h7d5d9fa", "Beta"),
                t("ga169e1b", function (e) {
                    return "Direkte beskeder (" + e.count + " ulæst samtale" + i(e.count, "", "r") + ")";
                }),
                t("d83682ec", "Forside (nye ulæste posts)"),
                t("e1249849", function (e) {
                    return "Meddelelser (" + e.count + " ulæst meddelelse" + i(e.count, "", "r") + ")";
                }),
                t("c0b786ee", "Søg og udforsk"),
                t("bb967f9e", "Videoer"),
                t("e04033be", "Nye posts er tilgængelige. Tryk på punktumstasten for at se dem."),
                t("hec711c0", "Se nye posts"),
                t("j0a8da6e", "Tilføj en eksisterende konto"),
                t("c6f2bf00", "Administrer konti"),
                t("a58e0e51", function (e) {
                    return "Log @" + e.screenName + " ud";
                }),
                t("j62f43a6", "Vis uddelegerede konti"),
                t("d4c52015", function (e) {
                    return e.count + " ventende uddelegeret konto invitation" + i(e.count, "", "er");
                }),
                t("b8e1d524", "Konti"),
                t("gef27c4c", "Kontomenu"),
                t("b7dc3885", function (e) {
                    return "Skift til @" + e.screenName;
                }),
                t("c61eea74", "Personlige konti"),
                t("g6d42fea", "Slå navigation til/fra"),
                t("eb022176", "Opret konto"),
                t("gcfef7b6", "Opret konto med telefon eller e-mail"),
                t("e5b0e544", "Log ind"),
                t("gd93944e", "Brug app"),
                t("f2f787a0", "vilkår for anvendelse"),
                t("e1099fd6", "privatlivspolitik"),
                t("c1df1ae0", "brug af cookies"),
                t("cdc1bff7", function (e) {
                    return "Profilmenu " + e.loggedInUserName;
                }),
                t("fd48249b", function (e) {
                    return e.count + " personer";
                }),
                t("b93ba92d", function (e) {
                    return e.peopleCount + " person" + i(e.peopleCount, "", "er");
                }),
                t("ae2205d2", "I følger hinanden"),
                t("fd06b02f", function (e) {
                    return "@" + e.screenName + " er i øjeblikket i et aktivt Rum, klik for at deltage via vedkommendes profil";
                }),
                t("f2b3fe06", "Indlæser resultater"),
                t("fc9dd578", "Søg efter personer"),
                t("gdb7bc25", function (e) {
                    return e.name + " - vælg for at fjerne";
                }),
                t("f065ba8c", "Søgeforespørgsel"),
                t("hbc99b03", function (e) {
                    return "Gå til @" + e.screenName;
                }),
                t("a2c1b222", "Prøv at søge efter personer, Lister eller keywords"),
                t("f45c4250", "Vil du rydde alle seneste søgninger?"),
                t("caae4dda", "Denne handling kan ikke fortrydes, og alle dine seneste søgninger fjernes."),
                t("dbd5d400", "Ryd"),
                t("a8d68f62", "Nye"),
                t("c6530778", "Gemte søgninger"),
                t("e047b8fa", "Ryd alle"),
                t("aa6e3300", "Det ser ud til, at forbindelsen er røget. Tjek den, og prøv igen."),
                t("e68b09b4", "Fjern"),
                t("hffea05c", "Vil du slette gemt søgning?"),
                t("j037e374", "Denne handling kan ikke fortrydes, og din gemte søgning går tabt."),
                t("d96cf7ce", "Slet"),
                t("hbe4feb5", function (e) {
                    return "En følgeanmodning er blevet sendt til @" + e.screenName + " og afventer vedkommendes godkendelse.";
                }),
                t("df4c86b0", "Opdater først din profil"),
                t("bba40ffa", "Du kan ikke følge denne konto"),
                t("f558829e", "Hvis du vil følge denne konto, skal du føje din fødselsdato til din profil. Dette sikrer, at du opfylder alderskravet."),
                t("a6941096", "Denne konto kan ikke følges fra dit land."),
                t("if8cd2a4", "Du er ikke gammel nok til at følge denne konto."),
                t("b5972260", "Noget gik galt. Prøv at annullere følgeanmodningen til brugeren igen om et øjeblik."),
                t("j4292c24", "Den pågældende bruger har blokeret dig fra at følge sig."),
                t("a0ba5842", "Du kan ikke følge flere personer på nuværende tidspunkt."),
                t("a5202b82", "Noget gik galt. Prøv at følge brugeren igen om et øjeblik."),
                t("f8cbf714", "Du prøver at følge en bruger, der ikke findes."),
                t("f2e66452", "Din konto er suspenderet og har ikke tilladelse til at følge brugere."),
                t("ca96fe6e", "Noget gik galt. Prøv at fjerne blokeringen af brugeren igen om et øjeblik."),
                t("e1a0aaca", "Noget gik galt. Prøv at vælge ikke at følge brugeren igen om et øjeblik."),
                t("fd5208c6", "Gå til indstillinger"),
                t("c0d13570", "Tilknytninger"),
                t("ba96929e", "Ansættelse"),
                t("gf62c116", "Support"),
                t("a4cf866e", "Annoncering"),
                t("g2fd3206", "Personer"),
                t("h70bdf0a", "Radar"),
                t("bf6b72ac", "Fuld adgang"),
                t("e49537c2", "Hmm ... denne side findes ikke. Prøv at søge efter noget andet."),
                t("fcbb540a", "Begrænsning overskredet"),
                t("d4f88600", "Verificer kontakt"),
                t("b192ccae", "Du har ikke en bekræftet kontaktmetode."),
                t("a0487504", "For at anmode om verificering, skal du først bekræfte en kontaktmetode."),
                t("fff7d93c", "Tilføj billede"),
                t("g969bfae", "Du mangler et profilbillede."),
                t("gb2f35e4", "Hvis du vil anmode om verifikation, skal du først tilføje et profilbillede."),
                t("i33cf692", "Tilføj URL-felt"),
                t("b679ff6a", "Ugyldig URL-adresse"),
                t("i79902b4", "Vælg godkendelsesmetode"),
                t("fb2fcb5c", "Dette trin hjælper os med at bekræfte din identitet. Vælg den metode, der fungerer bedst for dig."),
                t("e43425fa", "Statsligt udstedt id"),
                t("cb7c2e2e", "Et billede af dit statsligt udstedte id."),
                t("a411926a", "Officiel e-mailadresse"),
                t("g253cdd0", "En officiel e-mail med et domæne, der er relevant for den kategori, du har valgt."),
                t("cf93bcb0", "Henvisning til officielt websted"),
                t("gfb55fa8", "Et officielt websted, der henviser direkte til din X-konto."),
                t("g40cd2c0", "Verified reference"),
                t("a7f1cff6", "Tilføj henvisning på officielt websted"),
                t("a11cd524", "Angiv et officielt websted, der henviser til din X-konto, og som har en tilknytning til din verifikationsanmodning."),
                t("ba656f26", "Henvises der til din X-konto på webstedet?"),
                t("ed751204", "Ægtheden af din konto skal bekræftes, før vi kan verificere dig. Hvis der ikke henvises til dit brugernavn på den side, du linkede til, skal du indsende dokumentation for ægtheden, før du fuldfører din anmodning."),
                t("fbc023b0", "Ja, det gør der"),
                t("e785ce06", "Jeg vil bruge en anden mulighed"),
                t("i8d58f3e", "Jeg vil bruge et statsligt id"),
                t("eb21ecaa", "Jeg vil bruge en e-mailadresse"),
                t("f848a69e", "Ægtheden af din konto skal bekræftes, før vi kan verificere dig. Hvis der ikke henvises til dit brugernavn på det officielle websted, du har angivet, kan vi ikke bekræfte ægtheden af din konto."),
                t("d59b5366", "Ægtheden af din konto skal bekræftes, før vi kan verificere dig. Hvis der ikke henvises til dit brugernavn på den side, du linkede til, kan vi ikke pålideligt forbinde din konto med en bemærkelsesværdig indholdsskaber."),
                t("bfb01c62", "Nej, gå tilbage"),
                t("fa51040a", "Angiv et link til det officielle websted for en kvalificerende nyhedsorganisation eller -publikation, der henviser til dig og din X-konto."),
                t("d0460f12", "Angiv et link, der henviser til din konto som den officielle X-konto for din organisation. Henvisningen skal komme fra det officielle websted for en verificeret enhed."),
                t("h45b00d8", "Vælg en metode til at vise, at din konto er ægte og administreres af den underholdningsvirksomhed, der er angivet i denne anmodning."),
                t("fc718708", "Et officielt websted for en kvalificeret organisation, der henviser til dig og din X-konto."),
                t("g32c2900", "Vælg en metode for at vise, at din konto er ægte og administreres af den produktionsorganisation, der er angivet i denne anmodning."),
                t("j5b1224c", "Angiv et link, der henviser til din konto som den officielle X-konto for din produktion. Henvisningen skal komme fra det officielle websted for en verificeret enhed."),
                t("d090a5d4", "Et officielt websted for en verificeret organisation eller publikation, der henviser til din X-konto."),
                t("eb08a392", "Vælg en metode til at vise, at din konto er ægte og administreres af kandidaten til det offentlige embede, som denne anmodning vedrører."),
                t("h0de1396", "Angiv et link, der henviser til din konto som den officielle X-konto for den kandidat, som denne anmodning vedrører. Henvisningen skal komme fra det officielle websted for en verificeret enhed."),
                t("dcc23262", "Vælg en metode for at vise, at din konto er ægte og administreres af den aktivist eller arrangør, der er angivet i denne anmodning."),
                t("c880e068", "Et officielt websted for en interesseorganisation, der henviser til dig og din X-konto."),
                t("e412d500", "Angiv et link, der henviser til dig i en ledende stilling i en verificeret interesseorganisation og din X-konto. Henvisningen skal komme fra det officielle websted for en verificeret organisation."),
                t("dedf41f2", "Vælg en metode for at vise, at din konto er ægte og administreres af den indflydelsesrige person, der er angivet i denne anmodning."),
                t("b4aed9e0", "Et officielt websted for en verificeret organisation, der henviser til dig og din X-konto."),
                t("b2069e40", "Angiv et link, der henviser til dig og din X-konto. Referencen skal komme fra det officielle websted for en verificeret organisation."),
                t("baf718c4", "Vælg en metode for at vise, at din konto er ægte og administreres af den virksomhed, det brand eller den organisation, der er angivet i denne anmodning."),
                t("c65bbbc2", "Select a method to show that your account is authentic and managed by the senior leader or executive related to this request."),
                t("i31e3606", "En officiel e-mailadresse med domænet fra en virksomhed, et brand eller en organisation, der er kvalificeret."),
                t("de70afe8", "Et officielt websted for en kvalificeret organisation, der henviser til dig og din X-konto."),
                t("a3a523f2", "Angiv et link, der henviser til din konto som den officielle X-konto for din virksomhed. Henvisningen skal komme fra det officielle websted for en verificeret enhed."),
                t("jf58899a", "Angiv et link, der henviser til dig som seniorleder i din organisation og din X-konto. Henvisningen skal komme fra det officielle websted for en verificeret enhed."),
                t("f7afbaec", "Vælg en metode til at vise, at din konto er ægte og administreres af en journalist fra en kvalificeret nyhedsorganisation eller -publikation."),
                t("d4ab0056", "Vælg en metode for at vise, at din konto er ægte og administreres af en bemærkelsesværdig freelancejournalist."),
                t("d2a77622", "En officiel e-mailadresse med domænet fra en kvalificeret nyhedsorganisation eller -publikation."),
                t("eec341da", "Et officielt websted for en nyhedsorganisation eller -publikation, der henviser til din X-konto."),
                t("b03ae068", "Vælg en metode til at vise, at din konto er ægte og administreres af den nyhedsorganisation eller -publikation, der er angivet i denne anmodning."),
                t("g0daba4a", "Vælg en metode for at vise, at din konto er ægte og administreres af den professionelle e-sportsudøver, der er angivet i denne anmodning."),
                t("ab8e430c", "Angiv et link, der henviser til din konto som den officielle X-konto for den person inden for gaming, som denne anmodning vedrører. Henvisningen skal komme fra det officielle websted for en verificeret enhed."),
                t("cdcd9cd6", "Vælg en metode for at vise, at din konto er ægte og administreres af den professionelle sportsorganisation, der er angivet i denne anmodning."),
                t("gad25890", "Angiv et link, der henviser til din konto som den officielle X-konto for den professionelle sportsorganisation, som denne anmodning vedrører. Henvisningen skal komme fra det officielle websted for en verificeret enhed."),
                t("e6dc91b2", "Vælg en metode for at vise, at din konto er ægte og administreres af den professionelle sportsudøver, der er angivet i denne anmodning."),
                t("i9aed706", "Angiv et link, der henviser til din konto som den officielle X-konto for den professionelle sportsudøver, som denne anmodning vedrører. Henvisningen skal komme fra det officielle websted for en verificeret enhed."),
                t("abd587d2", "Tilføj endnu en henvisning"),
                t("i0bba81a", "Tilføj henvisning om ansættelse"),
                t("a6a76e3c", "Vælg metode til at dokumentere bemærkelsesværdighed"),
                t("ecd2abda", "Bekræft kontokvalifikation"),
                t("cb70b894", "Gå tilbage"),
                t("g8b511fe", "Google Trends"),
                t("c7d50c96", "En profil på Google Trends med dokumentation for aktuel søgeaktivitet om dig."),
                t("a68b43ee", "Tilføj Google Trends-profil"),
                t("b5e30390", "Google Trends profile"),
                t("h146703e", "Wikipedia-artikel"),
                t("ee38d0f0", "En Wikipedia-artikel om dig, som overholder notabilitetsstandarderne for personer."),
                t("cb97ee3e", "Tilføj Wikipedia-artikel"),
                t("hc371f34", "Nyhedsdækning"),
                t("b9d0ad90", "Mindst tre links fra velrenommerede nyhedsorganisationer, der har dækket eller henvist til dig inden for det sidste halve år."),
                t("ge137dce", "Mindst tre artikler om dig fra kvalificerende nyhedspublikationer inden for det sidste halve år."),
                t("h2b9a5fe", "At least three articles about your company from qualifying news publications in the last six months."),
                t("baccb708", "Tilføj verificeret nyhedsdækning"),
                t("feadd98c", "Add verified news references"),
                t("j7ae97aa", "Verified news references"),
                t("c368aa8e", "At least three articles from verified news publications that reference you."),
                t("ded0edad", function (e) {
                    return "Artikel nr. " + e.n;
                }),
                t("bebae55a", "Offentlig børsnotering"),
                t("c5571610", "Et link, der dokumenterer en betydelig tilstedeværelse på en offentlig børs."),
                t("e2d42628", "Tilføj henvisning om børsnotering"),
                t("jc19b4e8", "Børsnotering"),
                t("fc3ee696", "Leadership reference"),
                t("i3e65eb4", "The official site of a verified organization that references you in a leadership position."),
                t("jd014eba", "The URL provided links to the specific page referencing applicant."),
                t("a96901cc", "Tilføj ledelsesrelateret henvisning"),
                t("cc424a22", "Henvisning til interesseorganisation"),
                t("ibfc1a5a", "Du er ikke kvalificeret til at blive verificeret i denne kategori."),
                t("e1c78796", "Officielt websted"),
                t("ff2ee0c2", "Aktivisme"),
                t("hc61adfc", "Underholdning"),
                t("e404203c", "Gaming"),
                t("d2042392", "Det offentlige"),
                t("c365dcc6", "Andet"),
                t("d27beb9e", "Sport"),
                t("cc4b66b6", "Vælg en kategori"),
                t("b37461a4", "Vælg en kontotype"),
                t("b27325f6", "Indholdsskaber"),
                t("a5a6affc", "Indflydelsesrige skabere af digitalt indhold, der løbende udgiver engagerende, originalt indhold."),
                t("a15326de", "Mindst tre artikler fra kvalificerede nyhedspublikationer, der henviser til dig."),
                t("g704a93a", "Et officielt websted, der forbindes med en kendt interesseorganisation, der henviser til dig i en ledende stilling."),
                t("c6bd60ec", "Aktivist eller arrangør"),
                t("c92fdb06", "Bemærkelsesværdige personer, der bruger X til at skabe socioøkonomiske, politiske eller kulturelle forandringer."),
                t("a18c6dfc", "Journalist"),
                t("h0b46534", "Individuelle journalister, der er ansat af verificerede nyhedsorganisationer eller publikationer."),
                t("ff929fec", "Prominent organization or affiliate"),
                t("jf537894", "Prominent organizations, and secondary affiliated accounts, including companies, brands, and non-profit organizations."),
                t("d2ea204a", "Anden indflydelsesrig person"),
                t("f875ec6e", "Personer med en betydelig tilstedeværelse på og uden for X-platformen, som ikke falder ind under andre kategorier."),
                t("i3e6aaa6", "Senior leader or executive"),
                t("bbcbb9e6", "Leaders and other prominent executives of notable companies, brands, and non-profit organizations."),
                t("j0bc23f4", "I have confirmed that my organization’s account is already verified."),
                t("aa6228de", "Underholdningsvirksomhed"),
                t("d5b3cbca", "Store underholdningsvirksomheder som tv-netværk, filmselskaber og pladeselskaber."),
                t("b5a3e590", "Person i underholdningsbranchen"),
                t("e484f794", "Indflydelsesrige personer i underholdningsbranchen såsom skuespillere, musikere, instruktører, manuskriptforfattere, komikere med flere."),
                t("b8d8ea64", "Produktionsorganisation"),
                t("ff27db3c", "Officielle produktionsorganisationer, der er tilknyttet underholdningsproduktioner såsom film, events/festivaler, tv-udsendelser med mere."),
                t("c0e57cb2", "Tilføj din profil som indholdsskaber"),
                t("f3c605b6", "Profil som indholdsskaber"),
                t("h042d1a6", "Profil på IMDb"),
                t("d2310f0c", "En profil på IMDb, der indeholder mindst 50 produktionskrediteringer."),
                t("ba04b4c2", "Tilføj profil på IMDb"),
                t("i9b124b6", "Statsembedsmand"),
                t("f84a99ee", "Højerestående statsembedsmænd, herunder statsoverhoveder, folkevalgte, udpegede ministre og ambassadører."),
                t("j2cb5f50", "Kandidat til offentligt embede"),
                t("j2472894", "Officielle kandidater til offentlige embeder på statsligt eller nationalt niveau."),
                t("ha44c130", "Offentlig myndighed eller tjeneste"),
                t("j8ae9d40", "Vigtige offentlige myndigheder og institutioner samt offentlige forsyningsselskaber og tjenester."),
                t("ef1d6176", "Er du kandidat til et offentlig embede på statsligt eller nationalt niveau?"),
                t("f54ba6e6", "Du skal være nuværende kandidat til et offentligt embede på statsligt eller nationalt niveau for at kvalificere dig til verifikation i denne kategori."),
                t("dd85d0a0", "Er du embedsmand på statsligt eller nationalt niveau?"),
                t("f0058c60", "Du skal være fungerende embedsmand på statsligt eller nationalt niveau for at kvalificere dig til verifikation i denne kategori."),
                t("f420a712", "Ja, det er jeg"),
                t("fb97d22c", "Nej, det er jeg ikke"),
                t("e16b1cc8", "Opfylder din profil kriterierne for en kandidat?"),
                t("cf2ee92e", "Kandidater til et offentligt embede skal have en offentlig konto, der både henviser til det embede, de stiller op til, og linker til deres officielle kampagnewebsted."),
                t("g544885e", "Opfylder din profil kriterierne for en offentlig myndighed eller institution?"),
                t("bd0b4542", "Offentlige myndigheder og institutioner skal have en offentlig konto, der henviser til deres officielle websted."),
                t("i45b224c", "Opfylder din profil kriterierne for en embedsmand?"),
                t("fba1dd66", "Statsembedsmænd skal have en offentlig konto, der både henviser til deres nuværende stilling og linker til embedets officielle websted."),
                t("e95c44de", "Ja, den er færdig"),
                t("fa5e15e2", "Den skal opdateres"),
                t("jdf47e8e", "Kampagnewebsted"),
                t("eeec7316", "Tilføj kampagnewebsted"),
                t("b163b654", "Henvisning fra det offentlige"),
                t("d2378d34", "Tilføj henvisning fra det offentlige"),
                t("a05b8446", "Freelancejournalist"),
                t("hdad12b2", "Uafhængige, freelancejournalister med bemærkelsesværdigt arbejde i verificerede publikationer."),
                t("d2d7af4c", "Nyhedsorganisation eller -publikation"),
                t("d83e51dc", "Trykte og digitale publikationer; tv- og radionyhedsnetværk, -stationer og -programmer, der sender via antenne, kabel, satellit og streaming; podcasts; og andre lignende medier."),
                t("g708cbdc", "Opfylder din profil verifikationskravene?"),
                t("b107ee5c", "Nyhedsorganisationer skal have en offentlig konto, der linker til deres officielle websted."),
                t("e8746826", "Jeg har kontrolleret, at min arbejdsgivers konto allerede er verificeret."),
                t("jc09b420", "Opfylder din profil kriterierne for en journalist?"),
                t("gfbd7e58", "Journalister skal have en offentlig konto, der både henviser til navnet på den verificerede nyhedsorganisation, som de arbejder for, og linker til dens officielle websted."),
                t("h0ad4c9e", "Henvisninger fra officiel nyhedsorganisation"),
                t("a6553b50", "Det officielle websted for en kvalificerende nyhedspublikation eller -organisation, der henviser til dig som journalist."),
                t("a29b2988", "Bylines og krediteringer i artikler"),
                t("ab4eae60", "Mindst tre bylines eller krediteringer i kvalificerende publikationer inden for det sidste halve år."),
                t("b3fac982", "Den angivne URL-adresse linker til den specifikke side, der henviser til mig."),
                t("e26dc9e2", "Tilføj bemærkelsesværdigt arbejde"),
                t("e164df2e", "Opfylder de angivne artikler kriterierne for bemærkelsesværdighed?"),
                t("i80ff05e", "Kun artikler, der er udgivet af verificerede nyhedsorganisationer og -publikationer, betragtes som bevis for bemærkelsesværdighed."),
                t("cf7482ec", "Ja, det gør de"),
                t("fcb96cfc", "Person inden for professionel sport"),
                t("ddc7d64a", "Professionelle sportsudøvere, trænere, ledere samt atleter, der deltager i globale konkurrencer (f.eks. De Olympiske Lege, De Paralympiske Lege osv.)."),
                t("c4e0d346", "Professionel sportsorganisation"),
                t("e3ce81fa", "Professionelle sportsligaer, sportshold og globale konkurrencer (f.eks. De Olympiske Lege, De Paralympiske Lege osv.)."),
                t("b2808f48", "Person inden for e-sport/gaming"),
                t("db7b3558", "Individuelle konti for e-sportsudøvere, der er tilknyttet verificerede hold eller ligaer."),
                t("bbd9a912", "Jeg har kontrolleret, at det hold, den liga, den begivenhed eller den organisation, der er knyttet til min konto, allerede er verificeret."),
                t("he9c5638", "Et link til det officielle websted for en global konkurrence eller sportsorganisation, der henviser til dig."),
                t("bf06e1d6", "Et officielt websted tilknyttet en professionel sportsorganisation, der henviser til dig som en professionel sportsudøver, leder eller træner."),
                t("e241d35e", "Mindst tre artikler fra verificerede nyhedsorganisationer eller -publikationer, der henviser til dig som professionel sportsudøver, leder eller træner."),
                t("ad456030", "Mindst tre artikler fra verificerede nyhedsorganisationer eller publikationer, der henviser til dig som person inden for e-sport/gaming."),
                t("hbe2e65c", "Et officielt websted tilknyttet en verificeret e-sportsliga eller  -begivenhed, der henviser til dig som en person inden for e-sport/gaming."),
                t("j3da4dea", "Du kan ikke anmode om verifikation lige nu"),
                t("af39265e", "Virksomheder, brands og organisationer"),
                t("bb51cd7a", "Sport og gaming"),
                t("c044a571", "Lær mere"),
                t("a58cd1fb", "Læs mere"),
                t("b47b0fd1", "Lær mere"),
                t("db25263b", "Lær mere"),
                t("b25b02c3", "Lær mere"),
                t("j6ef6afb", "Lær mere"),
                t("d42d162b", "Lær mere"),
                t("ccadfc85", "Lær mere"),
                t("ddb47f57", "Lær mere"),
                t("bf9e181b", "Lær mere"),
                t("e8e39f95", "Learn more"),
                t("e126dd3f", "Learn more"),
                t("i821844f", "Learn more"),
                t("b0abbb17", "Learn more"),
                t("e7e0d88b", "Learn more"),
                t("i560665f", "Learn more"),
                t("f6e774d9", "Learn more");
            t("h486f755", "Learn more"),
                t("bab41dab", "Learn more"),
                t("e0ebdb29", "Lær mere"),
                t("f8493831", "Lær mere"),
                t("icb5913f", "Lær mere"),
                t("af819833", "Lær mere"),
                t("d35525b1", "Lær mere"),
                t("cb181ed1", "Lær mere"),
                t("f6c3d3f1", "Lær mere"),
                t("d4588ded", "Lær mere"),
                t("a759bff9", "Lær mere"),
                t("c64a59f7", "Lær mere"),
                t("c054f433", "Lær mere"),
                t("c1b7ad51", "Læs mere"),
                t("f7998565", "Lær mere"),
                t("c74a47ef", "Lær mere"),
                t("gf9899bf", "Lær mere"),
                t("d7a9185d", "Læs mere"),
                t("c4b205e1", "Lær mere"),
                t("c04b4b1d", "Lær mere"),
                t("d26ccc67", "Lær mere"),
                t("hdb3bc85", "Lær mere"),
                t("b6cb494f", "Læs mere"),
                t("abc132eb", "Læs mere"),
                t("de1b28ad", "Lær mere"),
                t("h04c272d", "Lær mere"),
                t("j331c659", "Lær mere"),
                t("h02fe64f", "Lær mere"),
                t("a7df4b85", "Lær mere"),
                t("e9b71903", "Lær mere"),
                t("g961011f", "Lær mere"),
                t("d5dedb7b", "Lær mere"),
                t("gd396551", "Lær mere"),
                t("dccc08bf", "Lær mere"),
                t("f22a6d0d", "Lær mere"),
                t("i78c9fd5", "Lær mere"),
                t("f3e333a9", "Lær mere"),
                t("i5fee6d3", "Lær mere"),
                t("fe7420f5", "Lær mere"),
                t("fcfad60d", "Lær mere"),
                t("cc35a6b9", "Lær mere"),
                t("d9bd3823", "Lær mere"),
                t("a67f27bd", "Lær mere"),
                t("b8be7adb", "Lær mere"),
                t("gd663f41", "Lær mere"),
                t("b436b101", "Lær mere"),
                t("j97bce4a", "X-brugernavn"),
                t("acd5ca14", "Prøv igen. Brugernavne indeholder ikke specialtegn som @, $ eller #."),
                t("bbef41c2", "Tjek den officielle e-mailadresse, der er tilknyttet din verifikationsanmodning på X."),
                t("be03ecca", "E-mailadresse"),
                t("c69a40de", "Du har ikke en eksisterende verificeret e-mailadresse."),
                t("c83a1662", "Du har ikke en kvalificeret e-mailadresse, der er verificeret."),
                t("e1e878ee", "Indstillinger"),
                t("b9635182", "Indstillinger"),
                t("j163be32", "Start anmodning"),
                t("gaf821c8", "Verifikationsanmodning"),
                t("e1ac0f9b", "Lær mere"),
                t("h2d4ba56", "Kontrollerer dit id ..."),
                t("i2051842", "Vi sørger for, at dit id overholder vores standarder. Det kan tage op til 30 sekunder."),
                t("fc2a5c92", "Noget gik galt"),
                t("jf4b6f70", "Der opstod et problem under upload af dit id. Prøv at uploade det igen."),
                t("d338f53e", "Prøv igen"),
                t("e43672a0", "Vi har brug for nogle oplysninger om dit statsligt udstedte id."),
                t("b246aa5e", "Udstedelsesland"),
                t("d6fb5878", "Vælg land"),
                t("b72f97cc", "Id-type"),
                t("b2ab6008", "Vælg id-type"),
                t("h9270b1c", "Søg efter lande"),
                t("ff1d68f8", "Upload et billede af dit id"),
                t("bdada5a6", "Forside"),
                t("edfed0f6", "Upload forside af id"),
                t("def5015d", function (e) {
                    return "Tilbage" + e.back_of_document;
                }),
                t("b09aade6", "Upload bagsiden af id'et"),
                t("b40ed190", "Dokument"),
                t("c6650b56", "Upload dokument"),
                t("d171ed16", "Vi bruger betroede tredjeparter til at hjælpe os. Disse parter verificerer ægtheden af dit id og giver os begrænsede oplysninger og en platform, hvor vi kan se, om din konto er kvalificeret til at blive verificeret."),
                t("d20f76cb", "Læs mere"),
                t("b8deb156", "privatlivspolitik"),
                t("b9960f32", "Tilføj billeder eller video"),
                t("gd80afba", "Rediger medier"),
                t("j322caee", "Markér ømtåleligt medie"),
                t("abd845fe", "Rediger"),
                t("df1b0708", "Afspil denne GIF"),
                t("cd959e5c", "Fjern mediet"),
                t("add55c98", "Medier"),
                t("f350cf46", "Træk og slip medier"),
                t("gff1f69e", "Indlæser billede"),
                t("a91bb144", "Indsend"),
                t("affce770", "Vi og vores betroede tredjeparter bruger oplysningerne om din konto og andre oplysninger, som du giver os, til at fastslå din identitet og finde ud af, om du er berettiget til at blive verificeret."),
                t("i0864918", "Kategori"),
                t("c7942074", "Kontotype"),
                t("b8121daa", "Henvisninger om notabilitet"),
                t("d247ca70", "Gennemgå oplysningerne i din verifikationsanmodning nedenfor. Tryk på indsend, når du har kontrolleret dem."),
                t("b51afbb2", "Godkendelsesmetode"),
                t("cc87b01c", "Gennemgå og indsend"),
                t("ec6801cc", "Din anmodning blev sendt!"),
                t("i6ef95ec", "undersøgelse"),
                t("j94e995e", "Din sidste anmodning blev afvist. Du skal vente i 30 dage fra den dato, før du indsender en ny anmodning."),
                t("da458d6c", "Du har indsendt en anmodning om verifikation, og er du blevet afvist inden for de sidste 30 dage. Prøv igen."),
                t("j4ed9f0e", "Du har indsendt en verifikationsanmodning og vil blive kontaktet, så snart der er truffet en beslutning."),
                t("b1ade780", "Din konto er for ny. Vent, indtil din konto er mindst syv dage gammel, og prøv så igen."),
                t("aab67626", "Din verifikationsanmodning er ved at blive gennemgået"),
                t("d3c1e25e", "Nej, det var ikke en drøm. Ja, du er virkelig verificeret."),
                t("a8b4500e", "reglerne"),
                t("ef1b5cbc", "Vælg de meddelelser, du gerne vil se – og dem, du ikke vil se."),
                t("aaafffda", "Skjulte meddelelser"),
                t("afdf29b8", "Kvalitetsfilter"),
                t("da19d878", "Vælg at bortfiltrere indhold, f.eks. gentagne eller automatiske posts. Dette gælder ikke meddelelser fra konti, du følger eller har interageret med for nylig."),
                t("i2209530", "Gem"),
                t("da867c58", "Vælg dine præferencer efter meddelelsestype."),
                t("a2197726", "Administrer din kontos sikkerhed."),
                t("i36dcc3e", "Hjælp med at beskytte din konto mod uautoriseret adgang ved at kræve en ekstra godkendelsesmetode ud over din X-adgangskode. Du kan vælge sms-besked, godkendelsesapp eller sikkerhedsnøgle."),
                t("ead60eb8", "Ekstra beskyttelse med adgangskode"),
                t("gfaf9a4a", "Beskyt nulstil adgangskode"),
                t("h3cc8462", "Som en ekstra beskyttelse skal du bekræfte din e-mailadresse eller dit telefonnummer for at nulstille din X-adgangskode."),
                t("b4bbdeb4", "Adgangskode"),
                t("aeb7dcdc", "Aktivér adgangskoder for ekstra beskyttelse, der kan være knyttet til din biometri."),
                t("dc096238", "Upload en godkendt form for identifikation for at bekræfte ægtheden af din konto. Dine oplysninger vil kun blive brugt til at bekræfte din identitet og vil blive håndteret sikkert og trygt."),
                t("a999cb72", "Gem kontoændringer"),
                t("dec3c9b8", "Adgangskode"),
                t("b929aa74", "Indtast din X-adgangskode igen for at gemme ændringerne i din konto."),
                t("d1091f50", "Glemt adgangskode?"),
                t("d97c07be", "Administrer skaber-abonnementer"),
                t("efa291da", "Få vist og administrer dine abonnementer på skabere nedenfor ved hjælp af Stripe. Alle aktive abonnementer, du har påbegyndt på iOS eller Android, kan administreres i appen."),
                t("j7f5c6aa", "Du har ingen abonnementer endnu"),
                t("ef4602ec", "Noget gik galt. Prøv igen senere."),
                t("b02df748", "Administrer din kontos sikkerhed, og hold styr på kontoens forbrug, inklusive apps, som du har tilknyttet din konto."),
                t("g2841de4", "Se oplysninger om, hvornår du loggede ind på din konto, og apps, du har oprettet forbindelse til på din konto."),
                t("hf45cca6", "Administrer Google- eller Apple-konti, der er tilknyttet X for at logge ind."),
                t("a310511c", "Administrer dine delte konti."),
                t("jc02ae68", "Forbundne apps"),
                t("dd82312a", "Sessioner"),
                t("e5e8a89a", "Indlæser apps"),
                t("hfa9a2c8", "Kontroller hurtigt forbundne apps"),
                t("dd1b86f9", function (e) {
                    return "efter " + e.name;
                }),
                t("cf461930", "Tredjeparts-apps, som du giver adgang til din X-konto, vises her."),
                t("b63b0b1d", "Lær mere"),
                t("c2cb5560", "Aktuel aktiv session"),
                t("bca43fd0", "Log ud af andre sessioner"),
                t("ha6df2ca", "Sessioner er de enheder, du bruger, eller som har brugt din X-konto. Det er de sessioner, hvor din konto er logget ind i øjeblikket. Du kan logge ud af hver session."),
                t("b72d2904", "Du er logget ind på denne X-konto på denne enhed, og du bruger den i øjeblikket."),
                t("b850cbd0", "Du er logget ind på disse konti på disse enheder, og du bruger dem ikke i øjeblikket. "),
                t("cf3e3164", "Log ud af alle andre sessioner"),
                t("f810f27a", "Vil du afslutte dine øvrige sessioner?"),
                t("gbb5cec5", function (e) {
                    return "Hvis du logger ud, afsluttes " + e.num + " af dine andre aktive X-sessioner. Den aktuelle session påvirkes ikke.";
                }),
                t("fcbd4904", "Dette gør, at den aktive X-session afsluttes."),
                t("ab78d946", "Du er ved at afslutte dine øvrige aktive X-sessioner. Du skal logge ind igen på disse enheder for at starte nye sessioner."),
                t("e186a3d6", function (e) {
                    return "" + e.learnMoreLabel;
                }),
                t("ed5ab16a", "Aktiv nu"),
                t("c9bc33fa", "Enheder"),
                t("f95ed3e6", "Aktuel enhed"),
                t("a787669a", "Registreringer af andre enheder"),
                t("gbefe730", "Du er registreret til krypterede direkte beskeder på disse andre enheder."),
                t("d7a9796e", "Indlæser enheder"),
                t("b5635e86", "Registrer denne enhed"),
                t("bb4a95dc", "Registrer din enhed?"),
                t("a9538040", "Når du registrerer denne enhed, kan du starte nye krypterede samtaler med andre registrerede brugere"),
                t("hd173c7a", "Registrer"),
                t("hf4312a4", "Enheden er blevet registreret."),
                t("h7797d18", "Registreret"),
                t("hc48a042", "Fjern registrering af denne enhed"),
                t("d5bafb20", "Fjern registrering af denne enhed?"),
                t("i12dee70", "Hvis du fjerner registreringen af en enhed, har du ikke længere adgang til krypterede beskeder på den."),
                t("d4b9db26", "Fjern registrering"),
                t("c18b1b34", "Dato og klokkeslæt for registrering"),
                t("e7c9d60a", "Registreringen af den valgte enhed er blevet fjernet."),
                t("cd14c8fe", "Indlæser info om enhed"),
                t("j9db22f4", "Vi kan ikke finde denne enhed"),
                t("c477d710", "Administrer, hvilke oplysninger der vises og deles på X."),
                t("b06f5d36", "Din X-aktivitet"),
                t("fd807e78", "Målgruppe, medier og tagging"),
                t("a9ff473c", "Administrer, hvilke oplysninger andre personer på X må se."),
                t("d0484606", "Administrer de oplysninger, der er tilknyttet dine posts."),
                t("c4afe0e6", "Vælg, hvad du vil se på X ud fra dine præferencer, f.eks. emner og interesser"),
                t("ab125232", "Administrer de konti, ord og meddelelser, som du har skjult eller blokeret."),
                t("cc950d94", "Administrer, hvem der kan sende dig beskeder direkte."),
                t("fe37f854", "Administrer, hvem der kan se din lytteaktivitet i Rum"),
                t("ab987f3c", "Kontrollér dine synlighedsindstillinger, og administrer de kontakter, du har importeret."),
                t("db5fabb0", "Datadeling og aktivitet uden for X"),
                t("i83cab8a", "Datadeling og personliggørelse"),
                t("e338a794", "Administrer din annonceoplevelse på X."),
                t("c05e8024", "Administrer din cookieoplevelse på X."),
                t("d29d59d0", "Administrer, hvordan X bruger din onlineaktivitet uden for X, f.eks. de websteder du besøger, til at tilpasse oplevelsen for dig."),
                t("c981a36c", "Lad X tilpasse din oplevelse med din udledte aktivitet, f.eks. aktivitet på enheder, du ikke har brugt til at logge ind på X."),
                t("eb0cc786", "Tillad deling af yderligere oplysninger med X's forretningspartnere."),
                t("dd533318", "Administrer de lokalitetsoplysninger, som X bruger til at tilpasse din oplevelse."),
                t("bd0646a0", "Læs mere om privatliv på X"),
                t("a607862a", "Privatlivspolitik"),
                t("g5925628", "Kontakt os"),
                t("dd6012f8", "Privatlivscenter"),
                t("jdceda60", "Svar"),
                t("f644b748", "Administrer, hvem der kan svare på dine posts og dine filtrerede svar."),
                t("ff4b3818", "Grok og tredjeparters samarbejdspartnere"),
                t("i586f3e0", "Giv tilladelse til, at dine offentlige data samt dine interaktioner, input og resultater med Grok og xAI må bruges til træning og finjustering"),
                t("d8492604", "Når denne er valgt, kan dine posts og andre kontooplysninger kun ses af personer, der følger dig."),
                t("if050fae", "Beskyt dine videoer"),
                t("b7ed5f6e", "Hvis denne indstilling er valgt, vil videoer i dine posts ikke kunne downloades som standard. Denne indstilling gælder fremadrettet for posts og har ikke tilbagevirkende kraft"),
                t("dbb51952", "Beskyt dine posts?"),
                t("de735de6", "Dette gør, at de kun kan ses af dine X-følgere."),
                t("c5d4192a", "Beskyt"),
                t("d9ddba70", "Fællesskaber er offentlige, så hvis du beskytter din konto, skjuler du dine tidligere posts. Du kan heller ikke poste i Fællesskabet, før din konto er offentlig igen."),
                t("f527b322", "Beskyt min konto"),
                t("d165c992", "Alle kan tagge dig"),
                t("ea339390", "Kun personer, du følger, kan tagge dig"),
                t("e3a761ee", "Fra"),
                t("a61ed23a", "Markér medier, du poster, som potentielt ømtåleligt materiale"),
                t("ae27c454", "Når denne funktion er slået til, bliver de billeder og videoer, du poster, markeret som ømtåleligt indhold for personer, der ikke ønsker at se ømtåleligt indhold."),
                t("fc1d217c", "Vis medier, der kan indeholde ømtåleligt indhold"),
                t("j018f2a2", "Udforsk indstillinger"),
                t("h1ef00dc", "Søgeindstillinger"),
                t("b05b9398", "Når denne indstilling er aktiveret, kan X tilpasse Til dig-indholdet baseret på din aktivitet på X."),
                t("a3c1324c", "Vis anbefalet indhold på tidslinjen Til dig"),
                t("ee4592ca", "Ingen"),
                t("da813d22", "Verificerede brugere"),
                t("baffe39a", "Alle"),
                t("b3d8566e", "Filtrer beskeder af lav kvalitet"),
                t("cfda8c44", "Skjul beskedanmodninger, hvor indholdet potentielt er spam eller er af lav kvalitet. De vil blive vist i en separat indbakke nederst i dine beskedanmodninger. Du kan stadig få adgang til dem, hvis du ønsker det."),
                t("f4c91f40", "Tillad beskeder fra mine abonnenter"),
                t("bf0c4336", "Dine abonnenter vil altid kunne sende dig beskeder uafhængigt af andre beskedindstillinger."),
                t("e6c411d8", "Filtrer eksplicitte medier"),
                t("g558101a", "Vis advarsler over beskeder, der potentielt indeholder eksplicitte medier (f.eks. nøgenhed, seksuelt indhold eller vold). Du kan altid få vist indholdet, hvis du ønsker det."),
                t("d9172542", "Vis kvitteringer for læsning"),
                t("bd557506", "Lad de personer, som du modtager beskeder fra, vide, at du har set deres beskeder. Kvitteringer for læsning vises ikke i beskedanmodninger."),
                t("f29080d0", "Tillad beskedanmodninger fra:"),
                t("j0adcc2d", "Læs mere"),
                t("ib3357a6", "Tilpassede annoncer"),
                t("f2f9628e", "De annoncer, du ser på X, er altid baseret på din X-aktivitet. Hvis du aktiverer denne indstilling, kan X yderligere tilpasse annoncer fra X-annoncører på og uden for X ved at kombinere din X-aktivitet med anden onlineaktivitet og oplysninger fra vores partnere."),
                t("b5fe50fc", "Annoncekategorier"),
                t("c31a2ea6", "Ved at aktivere disse indstillinger bliver du kvalificeret til at få vist annoncer i disse kategorier. Du kan vælge at få vist færre annoncer om disse kategorier ved at fravælge dem."),
                t("if996630", "Hasardspil"),
                t("a9ed7774", "Tillad brug af, hvor du ser X-indhold på nettet"),
                t("e2d61838", "Denne indstilling lader X holde styr på dine besøg på andre websteder, der integrerer X-indhold, f.eks. integrerede tidslinjer. Disse oplysninger gør X bedre, f.eks. ved at tilpasse din oplevelse. Disse browserdata bliver ikke gemt med dit navn, din e-mailadresse eller dit telefonnummer."),
                t("c966aaf4", "Disse webstedsbesøg bliver ikke lagret eller anvendt, når du er i visse lande."),
                t("e8313b32", "Er du sikker? Hvis du slår dette fra, kan du ikke slå det til igen, mens du er i dette land."),
                t("f1d46fd6", "Ja, jeg er sikker"),
                t("f6c8ccc8", "Tilpas efter din udledte identitet"),
                t("ed012c88", "X tilpasses altid ud fra de oplysninger, du har angivet, samt de enheder, du har brugt til at logge ind. Når denne indstilling er aktiveret, tilpasses X muligvis også ud fra andre udledninger om din identitet, såsom enheder og browsere, du ikke har brugt til at logge ind på X, eller e-mailadresser og telefonnumre, som minder om dem, der er knyttet til din X-konto."),
                t("d3c20d80", "Tillad yderligere informationsdeling med forretningspartnere"),
                t("f1c0d09c", "X deler altid oplysninger med sine forretningspartnere for at kunne drive og forbedre sine produkter. Når dette er aktiveret, giver det X mulighed for at dele yderligere oplysninger med disse partnere for at hjælpe med at drive X's forretning, herunder gøre X's marketingaktiviteter på andre websteder og apps mere relevante for dig."),
                t("dc20d918", "Tilpas efter steder, du har været"),
                t("af7d89e6", "X bruger altid visse oplysninger, såsom hvor du har tilmeldt dig og din aktuelle lokalitet, til at vise dig mere relevant indhold. Hvis du aktiverer denne indstilling, kan X også foretage tilpasning baseret på andre steder, du har været."),
                t("f2b23062", "Tilgængelighed, visning og sprog"),
                t("fa76d7dc", "Administrer, hvordan X-indhold vises for dig."),
                t("j7a15010", "Administrer aspekter ved din X-oplevelse, f.eks. begrænsning af farvekontrast og bevægelse."),
                t("a257ecae", "Administrer din skriftstørrelse, farve og baggrund. Disse indstillinger påvirker alle X-konti i denne browser."),
                t("jc3fa0e2", "Administrer, hvilke sprog der bruges til at tilpasse din X-oplevelse."),
                t("cc2973a8", "Begræns, hvordan X bruger nogle af dine netværksdata på denne enhed."),
                t("h54e6138", "Tastaturgenveje"),
                t("a4b69cbc", "Visningssprog"),
                t("c856bd00", "Vælg dit foretrukne sprog for overskrifter, knapper og anden tekst fra X."),
                t("cab61d58", "Vælg yderligere sprog"),
                t("dd93fafa", "Vælg flere sprog for det indhold, du vil se på X."),
                t("bca1de4a", "Flere sprog som du taler"),
                t("c3aa76c4", "Sprog du måske kender"),
                t("g099069c", "Administrer de sprog, som X har udledt baseret på din aktivitet, f.eks. de konti, du følger og de posts, du interagerer med."),
                t("cf9ce876", "App- og post-sprog"),
                t("d4372cf4", "English (US), 中文(简体), Español"),
                t("f8e46b90", "Du har knyttet disse sociale konti til din X-konto for at logge ind. Du kan deaktivere adgangen her."),
                t("d84ed6b2", "Afbryd forbindelse"),
                t("i51130d4", "Google"),
                t("e28901f2", "Apple"),
                t("cf8560be", "Forbundet"),
                t("ad31b476", "Administrer din automatiserede konto."),
                t("a2981062", "Administrerer konto"),
                t("aff4540e", "Skift administrationskonto"),
                t("b8b9d100", "Konfigurer kontoautomatisering"),
                t("e0bc51f6", "Slå kontoautomatisering fra"),
                t("b92190c2", "Administrationskonto tilknyttet"),
                t("fb03b39a", "Tilknytning af administrationskonto fjernet"),
                t("bd51ddfa", "Vi kan ikke fjerne tilknytningen af din administrationskonto på nuværende tidspunkt. Prøv igen senere."),
                t("e91c15f6", "Fjern tilknytning af administrationskonto?"),
                t("df035b80", "Din automatiserede konto mister sit mærke, hvis du fjerner tilknytningen til administrationskontoen."),
                t("bd12cf34", "Ja, fjern tilknytning"),
                t("f79acef3", "Lær mere"),
                t("a57a341c", "Databesparende"),
                t("ab6505a8", "Hvis du vælger dette, bruger X mindre netværksdata."),
                t("a5d4fda0", "Noget gik galt, men bare rolig – lad os prøve igen."),
                t("g1888dc2", "Aldrig"),
                t("f724d1aa", "Kun på Wi-Fi"),
                t("cf6472c2", "På mobilnetværk eller Wi-Fi"),
                t("b2ed92c4", "Anmoder om arkiv"),
                t("ce5d2c46", "Midlertidigt utilgængelig"),
                t("bed6a87c", "Linket til dine X-data er udløbet"),
                t("b24b4768", "Gå til mine X-data"),
                t("a0c3f812", "Du skal sende en ny anmodning for at få et nyt."),
                t("eea30bb5", function (e) {
                    return "Genereret den: " + e.date;
                }),
                t("f2cde471", function (e) {
                    return "Udløber den: " + e.date;
                }),
                t("b7ce9dbf", function (e) {
                    return "Anslået størrelse: " + e.size;
                }),
                t("d3de4c97", function (e) {
                    return "X-data (" + e.currentIndex + " af " + e.count + ")";
                }),
                t("fc5bfd96", "Kom i gang"),
                t("gee8110e", "Download arkiv"),
                t("c326f156", "Arkiv downloadet"),
                t("c9fe9b56", "Dit arkiv downloades om lidt"),
                t("j54b679b", function (e) {
                    return "Der åbnes et nyt vindue, og processen kan tage noget tid. Den downloadede fil vil være en zip-fil på " + e.size + ".";
                }),
                t("ac63840d", function (e) {
                    return e.size + " KB";
                }),
                t("bcd9b0ed", function (e) {
                    return e.size + " MB";
                }),
                t("ce494bb4", "Skriftstørrelse"),
                t("c783d45e", "Farve"),
                t("h306a358", "Baggrund"),
                t("d8680056", "Ekstra lille"),
                t("j59f0b94", "Standard"),
                t("b81aaad8", "Stor"),
                t("c7044880", "Ekstra stor"),
                t("e46dffa0", "Tekststørrelse"),
                t("ce8a8116", "Baggrundsvalgmuligheder"),
                t("d3d48f3a", "Lyst"),
                t("i76f67ee", "Dæmpet"),
                t("c8f85960", "Sluk lyset"),
                t("aefc5b20", "Farvevalgmuligheder"),
                t("a52d0fde", "Blå"),
                t("d818cdd6", "Gul"),
                t("fee1cd64", "Pink"),
                t("cbed7fb2", "Lilla"),
                t("g697ec02", "Orange"),
                t("a7c2204a", "Grøn"),
                t("gde8fdd7", function (e) {
                    return "Livsnerven i X er korte beskeder, der kaldes posts – præcis som den her – som kan indeholde billeder, videoer, links, tekst, hashtags og omtaler såsom @" + e.mention + ".";
                }),
                t("f277e94a", "Vis"),
                t("ee79367b", function (e) {
                    return "Niveau " + e.conversationTreeDepth + ":";
                }),
                t("ec6907ba", "Annonce"),
                t("d9587114", "Se den seneste post"),
                t("b7b86c3c", "Åbner den nye version af denne post"),
                t("a407814e", "Sidst redigeret"),
                t("i46ee3f0", "Dette er den nyeste version af denne post."),
                t("e18cb87c", "Forklar denne post"),
                t("ffe16626", "Svarfilter er slået til."),
                t("jc81f6a7", function (e) {
                    return e.count + " visning" + i(e.count, "", "er");
                }),
                t("g521abc6", "Grok, analyse!"),
                t("a09331e0", "Relaterede artikler"),
                t("e3eceda6", "Grok-handlinger"),
                t("a653f08f", function (e) {
                    return "Læs " + e.replyCount + " svar";
                }),
                t("dc0c8266", "Spørg Grok"),
                t("i7ac410e", "Vis original"),
                t("c67f09e8", "Vis oversættelse"),
                t("f396c105", function (e) {
                    return "" + e.displayCount;
                }),
                t("aa037e65", function (e) {
                    return "Vis" + i(e.count, "", "ninger");
                }),
                t("b8f3500a", "Vis tråd i Læser"),
                t("fc7db594", "Profilresumé"),
                t("c3f04d9c", "Tænker"),
                t("cbdddb0a", "Fuldført"),
                t("b0d1e205", function (e) {
                    return 'Søger efter **"' + e.query + '"**';
                }),
                t("acb9b845", function (e) {
                    return "Gennemser " + e.url + ' for **"' + e.query + '"**';
                }),
                t("ef261d8d", function (e) {
                    return "Søger i posts af @" + e.username;
                }),
                t("bec7eb11", function (e) {
                    return "Søger i posts af @" + e.username + ' efter **"' + e.query + '"**';
                }),
                t("ead81122", "Noget gik galt, opdater venligst for at genoprette forbindelsen eller prøv igen. "),
                t("f808a13a", "Begrænsning overskredet. Vent et øjeblik, og prøv igen."),
                t("e0481e5a", "Grok understøttes ikke i dit land i øjeblikket."),
                t("bc0a5b5a", "Grok er ikke tilgængelig i øjeblikket. Kom tilbage senere."),
                t("ef674976", "Du er ikke godkendt til at bruge denne tjeneste."),
                t("c74e87e0", "Denne fil er for stor. Vælg en mindre fil."),
                t("bea50a2a", "Dette filformat understøttes ikke."),
                t("j77292b7", function (e) {
                    return "Vælg kun op til " + e.count + " fil" + i(e.count, "", "er");
                }),
                t("d4d35bea", "Oversætter ..."),
                t("he9c9634", "Oversættelsen kunne ikke hentes"),
                t("j2198c98", "Skjul oversat post"),
                t("i73a7d48", "Oversat af Google"),
                t("eeadb767", function (e) {
                    return "Oversat fra " + e.originLanguage + " af Google";
                }),
                t("be9b9fb8", "Oversat af Grok"),
                t("d9c6f69d", function (e) {
                    return "Oversat fra " + e.originLanguage + " af Grok";
                }),
                t("dc445f82", "Oversat af Papago"),
                t("he9803d3", function (e) {
                    return "Oversat fra " + e.originLanguage + " af Papago";
                }),
                t("f8264fc0", "Oversat af X"),
                t("caa5ba3d", function (e) {
                    return "Oversat fra " + e.originLanguage + " af X";
                }),
                t("e0f81ff3", "Oversættelse:"),
                t("j2862695", function (e) {
                    return "Oversat fra " + e.originLanguage + " af";
                }),
                t("b7cb4fab", "Oversat af"),
                t("cbc8fed4", "Var denne oversættelse korrekt? Giv os feedback, så vi kan blive bedre:"),
                t("d56779a2", "nem at forstå"),
                t("b6fe8a56", "forvirrende eller uklar"),
                t("a66d80d0", "Oversæt post"),
                t("d4c339b9", function (e) {
                    return "Post fra " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("db0cb64f", function (e) {
                    return e.fullName + " (@" + e.screenName + ") postede:\n" + e.tweet;
                }),
                t("h6f99ac4", "Føjet til dine bogmærker"),
                t("g1c463f6", "Fjernet fra dine bogmærker"),
                t("a2e7377f", function (e) {
                    return "Fjernet fra " + e.bookmarkFolderName;
                }),
                t("i47ad24c", "Fortsæt det gode arbejde! Jo flere posts du liker, jo bedre bliver din tidslinje."),
                t("def4a37c", "Flot arbejde! Din tidslinje bliver bedre. Jo mere du liker, jo bedre bliver din tidslinje – fortsæt med at like de ting, der interesserer dig."),
                t("bcab06d2", "Post liket"),
                t("i5efe23e", "Like fjernet fra post"),
                t("f5d17674", "Posten blev repostet"),
                t("d714acfa", "Posten blev afrepostet"),
                t("b18dff26", "Kun abonnenter kan se denne repost"),
                t("c2453318", "Føj til mappe"),
                t("f88553c8", "Kopieret til udklipsholder"),
                t("b5b36724", "Svar i stedet for?"),
                t("gce00a2a", "Repost i stedet?"),
                t("g271f120", "Dit udkast til en post bliver slettet, før du svarer."),
                t("gad04d1a", "Dit udkast til en post bliver slettet, før du citerer."),
                t("ibd021f2", "Vil du læse artiklen først?"),
                t("bbef69c4", "Du er ved at dele en artikel, som du ikke har åbnet på X."),
                t("g5092766", "Læs artikel"),
                t("a2d5c006", "Tak, fordi du besøgte linket"),
                t("g37bb2d0", "Ved at besøge links, før du deler dem, er du med til at skabe grundlaget for en informeret debat."),
                t("gc45a90a", "Udvid denne tekst"),
                t("g7135e44", "Hjælp os, så X kan blive ved med at være et sted med pålidelige oplysninger. Få mere at vide, før du liker denne post."),
                t("h9b6d468", "Hjælp os, så X kan blive ved med at være et sted med pålidelige oplysninger. Få mere at vide, før du deler denne post."),
                t("af5cd00e", "Få mere at vide"),
                t("e29c651e", "Tak, fordi du valgte at få mere at vide"),
                t("ef504d80", "Du kan ikke føje posts fra beskyttede konti til dine bogmærker – endnu."),
                t("cef96d5a", "Post findes allerede i dine bogmærker"),
                t("b2542f56", "Noget gik galt. Prøv at føje posten til dine bogmærker igen om et øjeblik."),
                t("fe3b9942", "Denne bruger har blokeret dig fra at like sine posts."),
                t("c2a6dc5c", "Noget gik galt. Prøv at like din post igen om et øjeblik."),
                t("b57f01b8", "Posts fra beskyttede brugere, som du ikke følger, kan ikke likes."),
                t("ba0b3cc0", "Denne bruger har blokeret dig fra at reposte sine posts."),
                t("h32b1ac4", "Noget gik galt. Prøv at reposte igen om et øjeblik."),
                t("e50cea9e", "Det er ikke tilladt at reposte denne post."),
                t("d8e56f40", "Beklager! Du har overskredet din post-grænse. Prøv at reposte igen i morgen"),
                t("i14d7a46", "Noget gik galt. Prøv at fjerne posten fra dine bogmærker igen om et øjeblik."),
                t("d4ebfeb0", "Prøv at fjerne et like fra din post igen om lidt."),
                t("e639775e", "Prøv at annullere dit Retweet igen om et øjeblik."),
                t("fcad707a", "Vi har markeret denne post med en advarsel, fordi den kan indeholde ømtåleligt indhold."),
                t("f1824804", "Appellér denne advarsel"),
                t("f755f710", "Forstået"),
                t("ced4abbe", "Se samtale"),
                t("d00e1d2a", "Deltag i Fællesskab"),
                t("e6057014", "Anmod om at deltage"),
                t("ba352986", "Du kan ikke svare... endnu"),
                t("d09e76d8", "Fællesskaber er offentlige, så du kan læse posts – men du skal tilmelde dig for at deltage."),
                t("cfa1f802", "Udforsk Fællesskab"),
                t("af27a0f8", "Du er blevet fjernet fra dette Fællesskab"),
                t("id089506", "Kontakt Fællesskabets moderatorer for at blive genindsat."),
                t("cac4e916", "Denne post er skjult"),
                t("cb18be32", "Du kan ikke gøre dette... endnu"),
                t("dbb5fd8e", "Cirkel-posts kan ikke repostes"),
                t("ae2c8a1e", "Hvorfor kan du ikke svare på dette?"),
                t("afe7ba26", "Hvorfor kan du ikke like dette?"),
                t("df9e2356", "Hvorfor kan dette ikke føjes til Bogmærker?"),
                t("jead3bc2", "Hvorfor kan du ikke dele dette?"),
                t("h2a668b8", "Hvorfor kan du ikke få vist post-statistik?"),
                t("bd85267e", "Hvorfor kan du ikke reposte denne?"),
                t("dcc05a7e", "Visninger"),
                t("e213fada", "Antallet af visninger for denne post er ikke tilgængeligt."),
                t("g0954ea6", "Den kan kun ses af post-forfatteren og Fællesskabets moderatorteam, og engagementer er deaktiveret."),
                t("e7969518", "Fællesskaber er offentlige, så du kan læse postsene – men lige nu er deltagelse kun for inviterede."),
                t("g2dc874a", "Fællesskaber er offentlige, så du kan læse posts – men det er kun medlemmer, der kan interagere med dem."),
                t("g562676f", "Læs mere"),
                t("ee574c37", "Læs mere"),
                t("de2d83d6", "Føj til mappe med bogmærker"),
                t("f14df406", "Kopiér link til annonce"),
                t("e05c00b4", "Kopier link"),
                t("f61c4bb0", "Send via direkte besked"),
                t("id35970e", "Post video"),
                t("ff9348b8", "Del annoncen via …"),
                t("d03241f8", "Del post via …"),
                t("j08dd2d4", "Fjern fra bogmærker"),
                t("b7fde1ea", "Fjern fra mappe"),
                t("d9a2bd78", "Download video"),
                t("fbfab656", "Del i Rum"),
                t("e668112c", "Post delt med Rum"),
                t("g5775e46", "Vis citater"),
                t("bb192c6b", function (e) {
                    return "" + e.displayCount;
                }),
                t("f23d99b0", function (e) {
                    return "Bogmærke" + i(e.count, "", "r");
                }),
                t("e8866a55", function (e) {
                    return "" + e.displayCount;
                }),
                t("eb3abe45", function (e) {
                    return "Like" + i(e.count, "", "s");
                }),
                t("eff958fb", function (e) {
                    return "" + e.displayCount;
                }),
                t("i5a8c515", function (e) {
                    return "Citat" + i(e.count, "", "er");
                }),
                t("dd77f9fb", function (e) {
                    return "" + e.displayCount;
                }),
                t("a755b81b", function (e) {
                    return "Repost" + i(e.count, "", "s");
                }),
                t("e9f1fbcc", "Intet at se her – endnu"),
                t("a3b80be6", "Vend tilbage senere for at se posts om dette."),
                t("d93b360a", "Denne kolonne blev ryddet. Der vil blive vist flere posts ovenfor, efterhånden som de bliver oprettet."),
                t("d6e2f9be", "Indlæser tidslinje"),
                t("afb4c24a", "Ingen emner"),
                t("e5b0063d", function (e) {
                    return "Tidslinje: " + e.title;
                }),
                t("ib65b1c6", "Tilmed dig med Apple"),
                t("f55cebb8", "Log ind med Apple"),
                t("dcc304d6", "Fortsæt med Apple"),
                t("e0870f26", "Tilmeld med Google"),
                t("gfeffd6a", "Log ind med Google"),
                t("gf5e9ea6", "Fortryd"),
                t("e43138c5", function (e) {
                    return "Følg " + e.name;
                }),
                t("be65f2e7", function (e) {
                    return "Følg ikke længere " + e.name;
                }),
                t("a649d337", function (e) {
                    return "Ikke interesseret i " + e.name;
                }),
                t("e2f2b658", "Vi foreslår ikke dette emne mere."),
                t("b51f7edf", function (e) {
                    return "Du følger ikke længere " + e.name;
                }),
                t("gac366b3", function (e) {
                    return "Du fulgte " + e.name;
                }),
                t("f9e45cfb", function (e) {
                    return "Vil du blokere @" + e.screenName + "?";
                }),
                t("fcd4d489", function (e) {
                    return "Bloker @" + e.screenName;
                }),
                t("a6450e84", "Bloker"),
                t("g353ad73", function (e) {
                    return "Vedkommende kan hverken følge dig eller se dine posts, og du ser heller ikke posts eller meddelelser fra @" + e.screenName + ".";
                }),
                t("ad00a739", function (e) {
                    return "Vedkommende vil kunne se dine offentlige posts, men vil ikke længere kunne interagere med dem. @" + e.screenName + " vil heller ikke kunne følge dig eller sende dig beskeder, og du vil ikke kunne se meddelelser fra vedkommende.";
                }),
                t("a9fd20be", "Korrekt blokeret."),
                t("j546fb79", function (e) {
                    return "Vil du fjerne blokeringen af @" + e.screenName + "?";
                }),
                t("c9623eeb", function (e) {
                    return "Fjern blokering af @" + e.screenName;
                }),
                t("e133be4e", "Fjern blokering"),
                t("he43bca4", "Vedkommende vil kunne følge dig og se dine posts."),
                t("f5f01af6", "Vedkommende vil kunne følge dig og interagere med dine offentlige posts."),
                t("b6878b0a", "Noget gik galt. Prøv at blokere brugeren igen om et øjeblik."),
                t("e40252de", "Vis ikke disse posts i Til dig"),
                t("ae225c26", "Vis disse posts i Til dig"),
                t("a96d2628", "Vis ikke denne Liste i Til dig"),
                t("d00abae0", "Top-posts fra denne Liste bliver ikke længere vist på din Til dig-tidslinje."),
                t("e566dd06", "Top-posts fra denne Liste bliver ikke længere vist i Til dig."),
                t("j3cc1526", "Vis denne Liste i Til dig"),
                t("h435716e", "Top-posts fra denne Liste kan blive vist på din Til dig-tidslinje."),
                t("e8ba412e", "Top-posts fra denne Liste kan nu blive vist i Til dig."),
                t("d66e95cc", "Fastgør svar til din post?"),
                t("i24ed0de", "Fastgør svar"),
                t("b1033082", "Det vises øverst i svarene på din post. Du kan altid erstatte eller frigøre det."),
                t("e96a5962", "Frigør dette svar?"),
                t("ec04e6fc", "Frigør svar"),
                t("d05618f2", "Det bliver ikke længere vist øverst i svarene på denne post."),
                t("j9aedfdc", "Fastgør svar"),
                t("c034211a", "Frigør svar"),
                t("ie4538b4", "Svar fastgjort til post"),
                t("ad135a24", "Svar frigjort fra post"),
                t("ee369efc", "Kan ikke fastgøre svar til post"),
                t("c3e7f572", "Kan ikke frigøre svar fra post"),
                t("d058316c", "Tak. X bruger dette til at forbedre din tidslinje."),
                t("afb7e8f8", "Læs artikel"),
                t("jb0429b1", function (e) {
                    return "Af " + e.name + " @" + e.screenName;
                }),
                t("gfdad702", "18+"),
                t("c5d23126", "Fastgør"),
                t("j44ec610", "Frigør"),
                t("ibd0106e", function (e) {
                    return "" + e.formattedCount;
                }),
                t("cface2d1", function (e) {
                    return "medlem" + i(e.count, "", "mer");
                }),
                t("b5334780", "Afventer"),
                t("b171d7c4", "Tilmeld"),
                t("aa7ae3f6", "Deltager"),
                t("bb1d57b6", "Forlad"),
                t("h4fbfa58", "Acceptér og deltag"),
                t("ea8cfb1e", "Acceptér, og bed om at deltage"),
                t("dc1b14a1", function (e) {
                    return "Gennemgå og acceptér reglerne for " + e.communityName;
                }),
                t("c966ac64", "Kunne ikke anmode om at deltage i fællesskabet. Prøv igen senere."),
                t("g690e07e", "Dit svar (valgfrit)"),
                t("a5d21bf4", "Det er valgfrit at svare. Men husk, at det hjælper moderatorerne med at acceptere din anmodning."),
                t("h9526e03", "X's regler"),
                t("c00c234f", function (e) {
                    return "Regler for " + e.communityName;
                }),
                t("hafa07f2", "Deltagelse er begrænset"),
                t("c15bee32", "Du er blevet fjernet fra dette Fællesskab"),
                t("efa265fc", "Dine posts er beskyttede"),
                t("f9cecf48", "Du kan desværre ikke deltage lige nu"),
                t("bf7bdb60", "Det er ikke dig, det er os (virkelig). Prøv igen senere."),
                t("h27d6950", "Du kan ikke forlade os endnu"),
                t("b02360f6", "Den sidste admin eller moderator kan kun forlade Fællesskabet, hvis det er tomt."),
                t("fe832999", "skal du gøre dine posts offentlige"),
                t("bc7a7af4", "Dine posts i Fællesskabet bliver skjult, og du kan ikke deltage igen."),
                t("a0e0a52c", function (e) {
                    return "" + e.offendingRule;
                }),
                t("fe76cacc", "Vis flere posts"),
                t("aebb6546", "Indlæser flere posts"),
                t("a3484d22", "uafgjort"),
                t("aab2efa9", function (e) {
                    return "vinder " + e.winner;
                }),
                t("ba21c289", function (e) {
                    return "Scorekort, " + e.gameCategory + ", " + e.gameState + ", " + e.accessibleGameClockPeriod + ", " + e.teamOneLabel + ", " + e.teamTwoLabel;
                }),
                t("f178e38c", "Kommende"),
                t("b6da6b02", "Direkte"),
                t("i9f615c8", "Sidste"),
                t("f897267a", "Udskudt"),
                t("f93c4b6a", "Annulleret"),
                t("i79ab12a", "Følg emne"),
                t("c0f56044", "Følg ikke længere"),
                t("fcf51fe6", "Tilføj stjerne"),
                t("e9a90d72", "Stjernemarket"),
                t("bf403716", "Fjern stjerne"),
                t("c9f08e29", function (e) {
                    return "Vil du fjerne stjernen fra " + e.title + "?";
                }),
                t("hed4dcd0", "Selvom du fjerner stjernen fra dette emne, får du muligvis stadig vist posts om det, afhængigt af hvilke konti du følger."),
                t("cd876e02", "Foretrukken"),
                t("f2816e02", "Foretrukket"),
                t("f5b04fbc", "Fjern fra foretrukne"),
                t("c481ae3f", function (e) {
                    return "Vil du fjerne " + e.title + " fra foretrukne?";
                }),
                t("c94116de", "Selvom du fjerner dette emne fra foretrukne, får du muligvis stadig vist posts om det, afhængigt af hvilke konti du følger."),
                t("e0e730b0", "Interesseret"),
                t("b1850062", "Ikke interesseret"),
                t("gd3f996f", function (e) {
                    return "Ikke interesseret i " + e.title + "?";
                }),
                t("jdd65aac", "Selvom du ikke er interesseret i dette emne, får du muligvis stadig vist posts om det, afhængigt af hvilke konti du følger."),
                t("f93bb3ee", "Indlæs billede"),
                t("cc37768d", function (e) {
                    return e.mediaFileSize + " KB";
                }),
                t("f19d78d7", function (e) {
                    return e.mediaFileSize + " MB";
                }),
                t("c75bf00e", "Indlæs GIF"),
                t("d3ac405c", "Indlæs video"),
                t("g97a046c", "Afspil denne video"),
                t("ac4c73d8", "Indlejret video"),
                t("f3bb10a6", "Afspiller video"),
                t("b87c0a72", "Slå pushmeddelelser til, og gå aldrig glip af det, der sker på X"),
                t("e71e09ec", "Slå meddelelser til"),
                t("g4850f44", "Pushmeddelelser er slået til"),
                t("dc397182", "Tilpas"),
                t("ia5e7488", "Luk"),
                t("j681933e", "Privat liste"),
                t("add55942", "Noget gik galt. Prøv at tilmelde igen om et øjeblik."),
                t("ib8f5f3c", "Noget gik galt. Prøv at afmelde igen om et øjeblik."),
                t("e20fc756", "Du har ikke tilladelse til at føje dette medlem til denne liste."),
                t("d8a032a2", "Du skal fjerne én fastgjort tidslinje, før du kan tilføje en anden"),
                t("fa816a0a", "Omarranger liste"),
                t("ac832ae4", "Fastgør liste"),
                t("cdb33880", "Fastgør ikke længere liste"),
                t("ca5d0a82", "Rediger listen"),
                t("ec08efe4", function (e) {
                    return "" + e.formattedCount;
                }),
                t("h9f711f0", function (e) {
                    return "Følger" + i(e.count, "", "e");
                }),
                t("jceadc3e", "Unavngivet"),
                t("a1d5303c", "Privat"),
                t("cc8f8a80", "Ikke listet"),
                t("c33a97d6", "Offentlig"),
                t("i73fff1b", function (e) {
                    return "Vis " + e.count + " post" + i(e.count, "", "s");
                }),
                t("a682906d", function (e) {
                    return e.count + " like" + i(e.count, "", "s") + " tilbage";
                }),
                t("g566e973", function (e) {
                    return e.jobCount + " ledige stillinger" + e.tcc_organization_open_job_count;
                }),
                t("ccc45ee7", function (e) {
                    return e.team + " vandt";
                }),
                t("f81a95d7", function (e) {
                    return "" + e.date;
                }),
                t("ed4bea2e", "I dag"),
                t("j3e0ae78", function (e) {
                    return "・" + e.formattedTime;
                }),
                t("cabfdd06", "I morgen"),
                t("abd0f804", function (e) {
                    return "・" + e.formattedTime;
                }),
                t("df45f564", "Tilføj en ny post"),
                t("i569ff3e", "Vis denne tråd"),
                t("je5502eb", function (e) {
                    return 'Indeholder resultater for "' + e.suggestion + '"';
                }),
                t("bc4628a1", function (e) {
                    return 'Viser resultater for "' + e.suggestion + '"';
                }),
                t("a1979464", "Indlæser video"),
                t("ic1e826e", "Afspil"),
                t("c8b4bca0", "Handl"),
                t("f5ea07ec", "Køb nu"),
                t("b62956aa", "Book"),
                t("i3ea806a", "Bestil"),
                t("fd00a76a", "Åbn"),
                t("e0aa5848", "Installér"),
                t("g33f3050", "Web"),
                t("d3f6b1a6", "Send os en besked"),
                t("b0e322cc", "Send os en privat besked"),
                t("cb8bddc8", "Send mig en privat besked"),
                t("cb8c547e", "Send en privat besked"),
                t("d980e29f", function (e) {
                    return "Starter den " + e.date;
                }),
                t("fdd81500", "Karrusel"),
                t("i0db46e6", "GIF"),
                t("faf745fa", "Nøgenhed"),
                t("e1b4e672", "Ømtåleligt indhold"),
                t("acc48c15", function (e) {
                    return "Advarsel: " + e.formattedWarningList;
                }),
                t("a0e81a2e", "Vis"),
                t("g034e6f1", function (e) {
                    return "Du kan kun vedhæfte op til " + e.count + " posts til denne indberetning.";
                }),
                t("i2e0d584", "Promoveret post"),
                t("b52a940c", "Denne post er ikke tilgængelig."),
                t("da59404c", "Du ser i øjeblikket den seneste version."),
                t("e267df68", "Svar skjult"),
                t("d5f162b6", "Du kan altid vise dette svar igen. Ellers andet?"),
                t("f376e9d4", "Post feedback"),
                t("d7c93b6c", "Post skjult"),
                t("b3abacee", "Du vil se færre posts som denne. Anden feedback?"),
                t("a2411360", "Har du set et svar, du synes godt om?"),
                t("e8a14626", "Nu kan du fastgøre et svar til din post ved hjælp af handlingsmenuen – de tre små prikker i en post (...)."),
                t("d41305a8", "Beskebboble med tegnestift"),
                t("eca84b72", "Fortryd repost"),
                t("g6185a9e", "Hvem kan svare?"),
                t("i00051cc", "Vælg, hvem der kan svare på denne post. Alle, der omtales, kan altid svare."),
                t("i9000126", "Konti, du følger"),
                t("dcaede8a", "Kun konti, du omtaler"),
                t("ad85cd2e", "Dine abonnenter"),
                t("f19e4bfc", "Verificerede konti"),
                t("bf994ab2", "Kun dig"),
                t("e7b4b30a", "Kun konti, du har omtalt"),
                t("ca6500a8", "Deaktiver eksterne links i svar"),
                t("e839db3a", "Afvis"),
                t("c8a98928", "Salgsfremmende billede"),
                t("f5b3dc1e", "Måske senere"),
                t("ae0c5fbe", "Fejl under ændring af, hvem der kan svare"),
                t("bae0cbc0", "Rediger, hvem der kan svare"),
                t("d78131b9", function (e) {
                    return "Tilføj/fjern @" + e.screenName + " fra Lister";
                }),
                t("fb4ee11c", "Hvorfor vises denne annonce?"),
                t("ad50e7d9", function (e) {
                    return "Vis statistik for " + e.entity;
                }),
                t("ef1042f8", "Skriv et notat i Fællesskaber"),
                t("h3edf7a6", "Anmod om Fællesskabsnote"),
                t("bf8d98f4", "Kun abonnenter kan svare"),
                t("e69ada9e", "Kun Premium-abonnenter kan svare"),
                t("ae04c4dd", function (e) {
                    return "Slet " + e.entity + "?";
                }),
                t("d9442996", "Denne handling kan ikke fortrydes, og den fjernes fra din profil, fra tidslinjen på alle konti, der følger dig, og fra søgeresultaterne."),
                t("dad785a7", function (e) {
                    return "Denne handling sletter alle versioner af denne " + e.entity + " fra din profil, på tidslinjen for alle konti, der følger dig, og fra søgeresultaterne. Dette kan ikke fortrydes.";
                }),
                t("jda253ab", function (e) {
                    return e.entity + " blev slettet";
                }),
                t("j49c2f85", function (e) {
                    return "Noget gik galt. Prøv at slette " + e.entity + " igen om et øjeblik.";
                }),
                t("f9fa0390", "Din Artikel vil blive flyttet til en udkasttilstand og kan slettes på siden Artikler."),
                t("dad450ec", "Rediger artikel"),
                t("g9677c6e", "Bekræft"),
                t("b57bfe70", "Rediger artikel?"),
                t("bd3da7be", "Artiklen vil være midlertidigt ikke-udgivet, mens du redigerer, og den vil ikke være synlig for offentligheden. Alle eksisterende engagementer vil blive bevaret og overført, når du udgiver den opdaterede version."),
                t("j26481e6", "Din Artikel er ikke blevet udgivet og er blevet flyttet til dine udkast til redigering."),
                t("b360ac7c", "Sektionsnavigation"),
                t("adc81042", "Sektionsoplysninger"),
                t("bede965c", function (e) {
                    return "" + e.count;
                }),
                t("g345246c", "Dette er en udgivet Artikel – en ny måde, hvorpå du kan skrive på X."),
                t("b14efa0a", "Forsidebillede til Artikel"),
                t("afdccedb", function (e) {
                    return "Vis " + e.displayCount + " svar";
                }),
                t("bdba3e1a", "Slå post-meddelelser til"),
                t("c4da7d28", "Slå post-meddelelser fra"),
                t("j87c21f4", "Giv besked"),
                t("iebc30ca", "Slå meddelelser fra"),
                t("dc740eb2", "Du får vist post-meddelelser fra denne konto på meddelelsestidslinjen. Du kan også slå pushmeddelelser til på din enhed, så du aldrig går glip af en post."),
                t("dca669ad", function (e) {
                    return "Reposts fra " + e.name + " bliver ikke længere vist på din tidslinje";
                }),
                t("ce6da5d7", function (e) {
                    return "Reposts fra " + e.name + " bliver vist på din tidslinje";
                }),
                t("c6ea308b", function (e) {
                    return e.fullName + " (@" + e.screenName + ")";
                }),
                t("a1fef729", function (e) {
                    return "Tjek " + e.fullName + " på X.\n" + e.bio;
                }),
                t("c32a3d03", function (e) {
                    return "@" + e.screenName + " følger dig ikke mere";
                }),
                t("j7bb1a43", function (e) {
                    return "Indberet @" + e.screenName;
                }),
                t("hef5960c", "Del profil via..."),
                t("bb1cbeb6", "Vis"),
                t("h2f62206", "Skjul bruger"),
                t("e67b2d65", function (e) {
                    return "Skjul @" + e.screenName;
                }),
                t("f05597b3", function (e) {
                    return "Vis @" + e.screenName;
                }),
                t("h59f52ee", "Skjult."),
                t("eea0cbee", "Vises."),
                t("i29533b3", function (e) {
                    return "@" + e.screenName + " skjules.";
                }),
                t("h129c3c3", function (e) {
                    return "@" + e.screenName + " vises igen.";
                }),
                t("b3036480", "Fjern denne følger"),
                t("h27b7407", function (e) {
                    return "@" + e.screenName + " vil blive fjernet fra dine følgere og vil ikke blive underrettet af X. Vedkommende kan følge dig igen i fremtiden.";
                }),
                t("ibd0b842", "Kopiér linket til profilen"),
                t("b9c26480", "Vis emner"),
                t("e922ce0c", "Slå reposts til"),
                t("ge54bb8c", "Slå reposts fra"),
                t("h5ef9bc8", "Vis lister"),
                t("e9eef4c6", "Indberet ulovligt indhold i EU"),
                t("e28ba0bb", function (e) {
                    return "Indberet @" + e.screenName + " for ulovligt indhold i EU";
                }),
                t("a30b63da", "Noget gik galt. Prøv at fjerne følgeren igen om lidt."),
                t("gd11f228", "(Mangler overskrift)"),
                t("ced3c85a", "Redigeret"),
                t("b375ece0", "Kun du kan se denne ikke-udgivne Artikel."),
                t("edf9101f", "Læs videre"),
                t("icf7f1a4", "Kopiér til udklipsholder"),
                t("e1a292ec", "Tilføj medie"),
                t("ebfd8ac6", "Indsæt"),
                t("ia3611ee", "Begynd at skrive"),
                t("d794135c", "Vælg en fil, eller træk den hertil.\n\nHver blok kan indeholde en GIF, en video eller et billedsæt (op til 4 billeder pr. sæt)."),
                t("e187f906", "GIF'er"),
                t("fa4e68ca", "Posts"),
                t("c80940f4", "Markdown"),
                t("cfeb3f86", "Kode"),
                t("ad9e175c", "LaTeX"),
                t("c62a27e6", "Liket"),
                t("g88b88a6", "Gemt som bogmærke"),
                t("i282583e", "Posts fra beskyttede konti kan ikke bruges"),
                t("eae4fe7a", "Citat-posts af en slettet post kan ikke bruges"),
                t("d2042fb6", "Likede posts"),
                t("iad3e15c", "Bogmærkede posts"),
                t("f1c63c34", "Indsæt postens URL"),
                t("a78f6310", "Ugyldig post-URL"),
                t("fe9ddab6", "Post ikke fundet"),
                t("dd2c9034", "Gem posts til senere"),
                t("cada17f8", "Føj posts til Bogmærker, så du nemt kan finde dem igen."),
                t("j0179e90", "Skriv en post"),
                t("adad5408", "Ny mappe"),
                t("f44ddd2e", "Føj posts til Bogmærker for at gemme dem til senere"),
                t("c91d2c4c", "Har du brug for mere tid til at skrive et klogt svar, eller vil du bare gemme en post til senere? Føj den til Bogmærker!"),
                t("j45c642e", "Mapper indlæses ikke lige nu"),
                t("b87ca51a", "Fjern billede"),
                t("eebff22c", "Beskær billede"),
                t("hf6f2914", "Eksempel"),
                t("be4a00c2", "Tilføj kode her"),
                t("i3128619", function (e) {
                    return "Blokke kan ikke have mere end " + e.count + " tegn";
                }),
                t("dbb02ec4", "Vælg et programmeringssprog"),
                t("d942865e", "Søg i programmeringssprog"),
                t("e554f642", "Vil du slette ændringerne?"),
                t("fa524058", "Behold"),
                t("d4ab68e2", "Slet"),
                t("a50ba822", "Søg efter GIFs"),
                t("c6f5ac52", "Kategorier – GIF-søgning"),
                t("ab468379", function (e) {
                    return e.query + " – GIF-søgning";
                }),
                t("j7fc4f9c", "Afspil GIF'er automatisk"),
                t("a66b7760", "GIF uden mærkning"),
                t("a723aefa", "Ingen GIF'er fundet"),
                t("a6ecfa0a", "Prøv at søge efter noget andet i stedet."),
                t("f5ff0d6f", function (e) {
                    return e.category + " – GIF-søgning";
                }),
                t("effe1ca6", "Tilføj et LaTeX-udtryk her"),
                t("c46c3c62", "Der var en fejl i dit udtryk. Prøv igen, når du har rettet den."),
                t("d4a4842e", "Tilføj emoji"),
                t("fec16c1c", "Emoji"),
                t("idc01eb8", "Fed"),
                t("cd7c97c6", "Kursivér"),
                t("dab932be", "Understregning"),
                t("c5b6178a", "Gennemstregning"),
                t("c03d7fd6", "Indsæt link"),
                t("abfe2d36", "Punktopstilling"),
                t("da685a7c", "Nummereret liste"),
                t("g74d920c", "Citatblok"),
                t("cda501c6", "Forøg tekststørrelsen"),
                t("a54fdc46", "Formindsk tekststørrelsen"),
                t("b340830e", "Genveje i teksten"),
                t("c1ea915e", "Indsæt i starten af en ny linje eller blok, efterfulgt af et mellemrum"),
                t("e8a4ef02", "Overskrift"),
                t("dd71241a", "Underoverskrift"),
                t("ja9ca202", "Artikelgenveje"),
                t("ef1649e2", "X – tastaturgenveje"),
                t("aefd89c8", "Navigation"),
                t("cafdefb2", "Handlinger"),
                t("dda42cf2", "Kolonner og Dæk"),
                t("e8a12604", "Angiv en billedtekst (valgfrit)"),
                t("eabf2209", function (e) {
                    return "GIF leveret af " + e.providerName;
                }),
                t("a613e720", "Kopier link til GIF"),
                t("aeca1239", function (e) {
                    return "Fed" + e.ttc_rich_text_composer;
                }),
                t("i7dc66dd", function (e) {
                    return "Kursiv" + e.ttc_rich_text_composer;
                }),
                t("ad89b831", function (e) {
                    return "aktiv" + e.ttc_rich_text_composer;
                }),
                t("jcd5ee8a", "Rediger blok"),
                t("a8f09fb8", "Slet blok"),
                t("i89195ea", "Skillelinje"),
                t("da8ac57c", "Rediger billedtekst"),
                t("a8fdd09c", "Udgiv Artikel"),
                t("d8047cc8", "Udgiv"),
                t("ff7ddca2", "Din Artikel vil blive vist som en post, når du udgiver den. Du kan også finde den på fanen Artikler på din profil."),
                t("ef34d7be", "Indstillingerne for målgruppe og svar kan ikke ændres, når en Artikel er blevet udgivet."),
                t("e52d4998", "Vælg din målgruppe"),
                t("d7985b24", "Vælg, hvem der kan svare på denne artikel"),
                t("b5660338", "Forhåndsvisning af tidslinje"),
                t("hff1b97a", "Kun abonnenter kan svare."),
                t("a330771e", "Kopier linket til din udklipsholder"),
                t("b6510e68", "Kopier din Artikels URL-adresse, så du kan dele den."),
                t("e4a6e006", "Noget gik galt. Prøv igen."),
                t("eff483e0", "Når du har udgivet Artiklen, får du et link til at dele den."),
                t("ca15dd4e", "Udkast");
            t("bb40bf66", "Udgivet"),
                t("h107935c", "Sidst gemt lige nu"),
                t("a753a870", "Anvend"),
                t("afccc67e", "Kopier link til Artikel"),
                t("beb24e9e", "URL-adresse kopieret til udklipsholder"),
                t("db9cc928", "Slet Artikel?"),
                t("c4e28ba6", "Denne handling kan ikke fortrydes, og din Artikel går tabt."),
                t("ff2982d0", "Din Artikel bliver slettet. Denne handling kan ikke fortrydes, og den fjernes fra din profil, fra tidslinjen på alle konti, der følger dig, og fra søgeresultaterne."),
                t("ca17beec", "Din Artikel blev slettet"),
                t("f5cbb31c", "Slet Artikel"),
                t("f0977f52", "Ja, slet"),
                t("db419d4c", "Forhåndsvis dit udkast"),
                t("a1bc8e6c", "Vis Artikel"),
                t("b6f72a22", "Udgivelsen af Artiklen vil blive annulleret, den vil blive flyttet til dine udkast og vil ikke være synlig for offentligheden."),
                t("f558d2e0", "Gør privat, flyt til udkast"),
                t("e9473589", function (e) {
                    return "" + e.articleTitle;
                }),
                t("ib067d6a", "Vælg venligst enten 1 GIF eller op til 4 billeder."),
                t("eb7ab862", "Vælg venligst op til 4 billeder, videoer eller GIFs."),
                t("ce9a9736", "Gemmer ..."),
                t("dd63549e", "Fuldført! Din Artikel er blevet udgivet"),
                t("a4d128bc", "Fuldført! Din Artikel er blevet udgivet, og linket er kopieret til udklipsholderen"),
                t("b4071e18", "Overskrift på Artikel"),
                t("f586b7fa", "Tilføj en titel"),
                t("ab0fa9ba", "Hvis du vil redigere, skal du vende tilbage til udkast"),
                t("c5f35c98", "Uploader medier ..."),
                t("d739d83e", "Annuller upload"),
                t("a94efeda", "Gemmer medier ..."),
                t("gd79d45a", "Hold fokus på din skrivning ved at slå fokustilstand til"),
                t("g1866bb2", "Vend tilbage til den almindelige editor ved at forlade fokustilstand"),
                t("a6a78df4", "Din Artikel skal have en overskrift og indhold, før du udgiver den."),
                t("ia656f1c", "Din Artikel har en overskrift, men mangler indhold, før den kan udgives."),
                t("d3855e36", "Din Artikel skal have en overskrift, før du udgiver den."),
                t("f325958e", "Din overskrift er over tegngrænsen. Forkort den, og udgiv den."),
                t("ie5d9064", "Din Artikel er over tegngrænsen. Forkort brødteksten, og udgiv den."),
                t("e03487a0", "Din overskrift er over tegngrænsen, og din Artikel er over ordgrænsen. Forkort begge dele, og udgiv den derefter."),
                t("e938d562", "Din overskrift er over tegngrænsen. Forkort titlen, tilføj noget til brødteksten, og udgiv den derefter."),
                t("e449c546", "Din Artikel mangler en overskrift, og den overskrider antallet af ord. Tilføj en overskrift, forkort brødteksten, og udgiv den."),
                t("bd00e836", "Dit seneste udkast bliver ikke gemt, fordi det overskrider tegngrænsen."),
                t("ic110f68", "Dit seneste udkast bliver ikke gemt, fordi det er for langt."),
                t("ifea3114", "Del"),
                t("b384f696", "Vi anbefaler en overskrift på mellem 50 og 70 tegn"),
                t("a7da0adb", function (e) {
                    return e.count + " ord";
                }),
                t("aea1d455", function (e) {
                    return e.count + " minut" + i(e.count, "", "ter");
                }),
                t("df898d71", function (e) {
                    return e.readingTimeValue + " læsetid";
                }),
                t("i9aadf4a", "Dette link kan være forkert. Klik på en af dine Artikler i venstre sidepanel for at læse, redigere eller udgive en Artikel."),
                t("hfdce46e", "Din Artikel er ikke blevet udgivet"),
                t("df079228", "Fokustilstand"),
                t("f5037228", "Vi anbefaler et billede med højde-bredde-forholdet 5:2 for at opnå det bedste resultat."),
                t("f965e890", "Dine udkast kan ses her"),
                t("c2756718", "Dine udgivne Artikler kan ses her"),
                t("af65c854", "Rediger i fokustilstand"),
                t("e05e2336", "Annuller udgivelsen, flyt Artiklen til udkast"),
                t("d36447e0", "Det er her, du skriver"),
                t("ca0ed982", "Fortsæt på et udkast, eller opret en ny Artikel"),
                t("ee9e42aa", "Skriv"),
                t("e9a50596", "Der opstod en fejl under oprettelsen af et nyt udkast"),
                t("e070024a", "Rediger billede"),
                t("i7d24b36", "Næste billede"),
                t("f96a38a2", "Forrige billede"),
                t("hac7c548", "Beskær medier"),
                t("e3dbfba4", "Rediger billedbeskrivelse"),
                t("dd4a83a6", "Indholdsadvarsel"),
                t("ffe9ec3a", "Tilføj beskrivelser"),
                t("j063b262", "Du kan føje en beskrivelse (kaldes også alternativ tekst) til dine billeder, så de bliver tilgængelige for endnu flere mennesker, også blinde og svagtseende. Gode beskrivelser er korte og beskriver det, der er på billederne, nøjagtigt nok til, at man forstår sammenhængen."),
                t("e57144f0", "Godkendt"),
                t("f9f9210c", "Nej tak"),
                t("feabf2a0", "Alt tekst"),
                t("e36287c6", "Beskrivelse"),
                t("cf565d08", "Hvad er alternativ tekst?"),
                t("d9f7b32a", "Markér denne post med en indholdsadvarsel"),
                t("ead1b80a", "Vælg en kategori, så markerer vi denne post med en indholdsadvarsel. Dette hjælper folk med at undgå indhold, de ikke ønsker at se."),
                t("h2437f26", "Ømtåleligt"),
                t("g5e1668a", "Kan downloades"),
                t("fdc6a52a", "Når denne funktion er slået til, kan din video downloades."),
                t("fe09fde2", "Skift indstillinger"),
                t("cd5cba97", function (e) {
                    return "Indholdsadvarsel: " + e.formattedWarningList;
                }),
                t("h7215a76", "Post-forfatteren markerede denne post som ømtåleligt indhold."),
                t("j32d345e", "Det følgende kan indeholde ømtåleligt materiale."),
                t("f1d9930c", "Skjul"),
                t("c91f83ae", "Rediger video"),
                t("icbec4ae", "Upload undertekster"),
                t("e0342f98", "Undertekster"),
                t("e7048e74", "Beskær medie"),
                t("ga408160", "Næste video"),
                t("dc402134", "Forrige video"),
                t("bf4e9d7a", "Upload en fil med undertekster (.srt)"),
                t("j435467e", "Undertekster kan føjes til din video ved at uploade en gyldig undertekstfil. Filerne skal være i SRT-format. Undertekster påvirkes ikke af videoredigering."),
                t("a6b267fa", "Fjern undertekster"),
                t("a609edbe", "Skriv ny post"),
                t("dc295bb0", "Posting i et Fællesskab"),
                t("e536de22", "Hvis du vil poste, skal du først blive medlem. Bliv medlem af dette Fællesskab for at deltage!"),
                t("cb817dae", "Rediger post"),
                t("bec9cff8", "Tilmeld dig X"),
                t("c150ba68", "Velkommen!"),
                t("f8e2163e", "Vil du logge ind først?"),
                t("a108c147", function (e) {
                    return "Vil du følge @" + e.screenName + "?";
                }),
                t("c66afdc3", function (e) {
                    return "Følg @" + e.screenName;
                }),
                t("feccfd6e", "Du skal logge ind for at følge nogen."),
                t("dedce756", "Nu kan du like den post."),
                t("ha5987e0", "Vil du like denne post?"),
                t("f98f4e00", "Du skal logge ind, før du kan like posten."),
                t("b459ba4c", "Du skal logge ind, før du kan svare på denne post."),
                t("f3e1093a", "Nu kan du reposte den."),
                t("i1d8723c", "Vil du reposte denne post?"),
                t("h19f38de", "Du skal logge ind, før du kan poste det."),
                t("e289d950", "Du skal logge ind for at kunne dele posten."),
                t("d28215f0", "Afstemninger er desværre ikke tilladt i Fællesskaber!"),
                t("ec2fc089", function (e) {
                    return "Din/dine post" + i(e.numOfTweets, "", "s") + " blev sendt til " + e.communityName;
                }),
                t("c7152355", function (e) {
                    return "Husk at gøre dit/dine billede" + i(e.numberOfImages, "", "r") + " tilgængeligt/tilgængelige";
                }),
                t("ffa5562a", "Gode billedbeskrivelser er kortfattede, men alligevel detaljerede. Sørg for at opsummere eller skrive tekst i selve billedet."),
                t("a2d3facd", function (e) {
                    return "Din/dine beskrivelse" + i(e.numberOfImages, "", "r") + " gør X tilgængelig for personer med handicap og alle, der ønsker mere kontekst.";
                }),
                t("cc6d0a48", "Du kan slå denne påmindelse fra i Tilgængelighedsindstillinger."),
                t("j499fbcb", function (e) {
                    return "Tilføj beskrivelse" + i(e.numberOfImages, "", "r");
                }),
                t("bb8170da", "Ikke denne gang"),
                t("h4dd544e", "Din post blev sendt."),
                t("ice925ce", "Dit post er blevet redigeret."),
                t("eae9e604", "Din post blev sendt. Du har 30 minutter til at redigere den."),
                t("gcdf3fd6", "Din post blev sendt. Du har 1 time til at redigere den."),
                t("c7999d10", "Dine posts blev sendt."),
                t("b97f5eb2", "Sender post ..."),
                t("g08523f0", "Sender post ... når den er udgivet, har du 30 minutter til at foretage eventuelle redigeringer."),
                t("fa53f95c", "Sender post ... når den er udgivet, har du 1 time til at foretage eventuelle redigeringer."),
                t("a608b1b4", "Slet post?"),
                t("j890123a", "Vil du fjerne tråden?"),
                t("af4d0a80", "Kassér ændringer?"),
                t("bb01231c", "Denne handling kan ikke fortrydes, og dit udkast går tabt."),
                t("if69307c", "Hvis du afslutter, bliver dine ændringer ikke gemt."),
                t("d2c271f6", "Gem post?"),
                t("abb90544", "Du kan gemme dette og sende det senere fra udkast."),
                t("d3bb6f30", "Bemærk: Konti, der er tagget i medier, bliver ikke gemt i kladden."),
                t("bf9b89e4", "Dit udkast blev arkiveret."),
                t("i63bfbf0", "Vent et øjeblik"),
                t("a6c55352", "Vi uploader stadig din video. Er du sikker på, at du vil kassere din post? Dit udkast og dine vedhæftede filer går tabt."),
                t("c3d89aca", "Fortsæt"),
                t("b983f9e0", "Bemærk"),
                t("ed5c4342", "Et par ting at huske på ..."),
                t("abc4afcc", "Din redigeringstid er udløbet"),
                t("a9a471fa", "Posts kan kun redigeres inden for de første 30 minutter, efter at de er udgivet."),
                t("a3483f1c", "Posts kan kun redigeres inden for den første time, efter at de er udgivet."),
                t("g4bcc5f4", "Dette er din sidste redigering"),
                t("g922bf14", "Din post kan ikke opdateres igen."),
                t("f58b5009", function (e) {
                    return "Din post bliver sendt den " + e.scheduleDate + " kl. " + e.scheduleTime;
                }),
                t("fa97f508", "Du kan føje flere posts til denne tråd, efter at du har sendt disse."),
                t("c091760c", "Denne redigering blev ikke gemt. Du kan prøve at gentage opdateringen eller kassere den og starte forfra."),
                t("d38504ad", function (e) {
                    return "Vælg venligst op til " + e.maxMediaCap + " billeder, videoer eller GIFs.";
                }),
                t("dd6734c2", "Læs mere"),
                t("g589c2e2", "Valg 1"),
                t("a1e6c3a2", "Valg 2"),
                t("a739e006", "Valg 3 (valgfrit)"),
                t("d89a5b92", "Valg 4 (valgfrit)"),
                t("c2a8118e", "Fjern afstemning"),
                t("a8ede1de", "Tilføj et valg"),
                t("af40a8e0", "Tilføj"),
                t("caf8edc4", "Afstemningens varighed"),
                t("g93586be", "Dage"),
                t("d073b644", "Åbningstimer"),
                t("a2f0728e", "Minutter"),
                t("c9f5ae0a", "Gem i udkast"),
                t("f0afcc0e", "Tilføj afstemning"),
                t("d39e3e78", "Planlæg post"),
                t("f6bab0da", "Post tekst"),
                t("cc2b28fc", "Du må kun bruge 1 type vedhæftet fil"),
                t("i6f7062c", "Tilføj post"),
                t("j1d5791c", "Tilføj svar"),
                t("e76f3776", "Fjern post"),
                t("ec10ee02", "Afstemning"),
                t("cce30dcc", "Føj tag til lokalitet"),
                t("ee016dd6", "Det tager et stykke tid at uploade lange videoer. Sørg for at holde din browserfane åben for at undgå upload-afbrydelser."),
                t("b7d8e3f1", function (e) {
                    return e.numberOfAltTextEntries + " billede beskrivelse" + i(e.numberOfAltTextEntries, "", "r");
                }),
                t("d1175c78", "Tilføj persontags"),
                t("b2943227", function (e) {
                    return "Upload undertekster fil" + i(e.numberOfVideos, "", "er") + " (.srt)";
                }),
                t("d0afbb37", function (e) {
                    return e.numberOfSubtitles + " undertekster fil" + i(e.numberOfSubtitles, "", "er");
                }),
                t("e349147c", "Hvad sker der?"),
                t("b4481d6c", "Del dine tanker ..."),
                t("fbd24526", "Tilføj endnu et svar"),
                t("de4669e2", "Tilføj en kommentar"),
                t("ed1f39ec", "Post dit svar"),
                t("a402b908", "Stil et spørgsmål"),
                t("ic05a146", "Titel"),
                t("d9c096f0", "Generér billede"),
                t("d2553906", "Gør din post bedre"),
                t("b85f402a", "Gør din post bedre med Grok"),
                t("e815fc34", "Vælg målgruppe"),
                t("cf44066a", "Cirkel"),
                t("c6992b94", "Kun Premium"),
                t("a5f7b700", function (e) {
                    return "" + e.formattedCount;
                }),
                t("a7daec1e", function (e) {
                    return "person" + i(e.count, "", "er");
                }),
                t("f0598964", "Vil du dele med en mindre skare?"),
                t("e1ae1c0a", "Cirkel gør det muligt kun at sende posts til de personer, du vælger."),
                t("eb969e30", "Sådan fungerer Cirkel"),
                t("bb55e8ee", "Tilføj personer"),
                t("f1aedb7c", "Du kan vælge op til 150, som du vil inkludere i din cirkel."),
                t("b659fba8", "Post kun til dem"),
                t("c474be66", "Begynd at dele dine tanker. Det er kun din cirkel, der kan se og svare på dem."),
                t("h031847a", "Du kan altid lave om på tingene"),
                t("bd9db21f", "Læs mere"),
                t("gfca5254", "Regler"),
                t("f510c8b2", "Fællesskabsregler"),
                t("g46f363e", "Læs Fællesskabsreglerne, før du deltager i samtalen"),
                t("f6fec9f6", "Fjern forhåndsvisning af kort"),
                t("b2df0574", "Del også med følgere"),
                t("ccfc7453", function (e) {
                    return "Alle i @" + e.screenName + "s cirkel, som følger dig, kan svare";
                }),
                t("d4d17205", function (e) {
                    return "Alle i @" + e.screenName + "s cirkel kan svare";
                }),
                t("df961844", "Kun din cirkel, der følger dig, kan svare"),
                t("ce958ec8", "Kun din cirkel kan svare"),
                t("c7df589e", "Alle i post-forfatterens cirkel, som følger dig, kan svare"),
                t("j65d7c72", "Alle i post-forfatterens cirkel kan svare"),
                t("i8ea6d4e", "Alle kan svare"),
                t("a176d0d8", "Konti, du følger, kan svare"),
                t("gc7e52ca", "Kun konti, du omtaler, kan svare"),
                t("feb7560a", "Kun abonnenter kan svare"),
                t("h257006e", "Gennemgå reglerne for dette Fællesskab"),
                t("ebe1d850", "Kun dine abonnenter kan svare"),
                t("b121464a", "Kun verificerede konti kan svare"),
                t("aa65a44a", "Vi husker dit valg på denne enhed"),
                t("a4993fa2", "Tilføj en GIF"),
                t("bfb895b1", function (e) {
                    return "Bliver sendt " + e.date + " kl. " + e.time;
                }),
                t("hb36f723", function (e) {
                    return "Kun de første " + e.count + " tegn vil være synlige på tidslinjen.";
                }),
                t("d759c09e", "Prøv"),
                t("e4472565", function (e) {
                    return "Uploadet (" + e.percent + " %)";
                }),
                t("a06fa8fd", function (e) {
                    return "Behandler (" + e.percent + " %)";
                }),
                t("h7f340e5", function (e) {
                    return "Uploader (" + e.percent + " %)";
                }),
                t("daad8822", "Upload mislykkedes"),
                t("i8ff6261", function (e) {
                    return "Det ser ud til, at denne video overskrider den maksimale filstørrelse, der kan uploades (" + e.human_readable_max_size + "GB).";
                }),
                t("cba4fdde", "Udgiv i 1080p til seere på X"),
                t("ef8f5d90", "Anbefalet"),
                t("a7046fb0", "Sjældent nødvendigt"),
                t("acf3ecf4", "Tilføj medier"),
                t("bdbcdd94", "Tilføj billeder"),
                t("f2c8c04d", "skal du gøre dine posts offentlige"),
                t("b50e199a", function (e) {
                    return "" + e.userName;
                }),
                t("c3033e8a", function (e) {
                    return e.replyUserName + " og " + e.otherUserName;
                }),
                t("e50dae2a", function (e) {
                    return e.userOneName + " " + e.userTwoName + " og " + e.userThreeName;
                }),
                t("h758cd23", function (e) {
                    return e.userOneName + " " + e.userTwoName + " og " + i(e.othersCount, "1 anden", e.othersCount + " andre");
                }),
                t("fba61ad6", function (e) {
                    return "" + e.userName;
                }),
                t("ce87c872", function (e) {
                    return e.replyUserName + " og " + e.otherUserName;
                }),
                t("b45fa506", function (e) {
                    return e.userOneName + " " + e.userTwoName + " og " + e.userThreeName;
                }),
                t("b8168f25", function (e) {
                    return e.userOneName + " " + e.userTwoName + " og " + i(e.othersCount, "1 anden", e.othersCount + " andre");
                }),
                t("ab67a7ac", function (e) {
                    return "" + e.userName;
                }),
                t("g571ef41", "abonnenter"),
                t("d48d6476", function (e) {
                    return e.replyUserName + " og " + e.otherUserName;
                }),
                t("i9451241", "abonnenter"),
                t("hdf48104", function (e) {
                    return e.userOneName + " " + e.userTwoName + " og " + e.userThreeName;
                }),
                t("dcbb6a0b", "abonnenter"),
                t("ba74e38b", function (e) {
                    return e.userOneName + " " + e.userTwoName + " og " + i(e.othersCount, "1 anden", e.othersCount + " andre");
                }),
                t("c65916af", "abonnenter"),
                t("g5c5ebb8", function (e) {
                    return "" + e.userName;
                }),
                t("b86ff336", function (e) {
                    return "" + e.userName;
                }),
                t("e0af5609", function (e) {
                    return e.userOneName + " og " + e.userTwoName;
                }),
                t("ae834d19", function (e) {
                    return e.trustedFriendsTweetOwner + "s";
                }),
                t("g3d6f043", function (e) {
                    return e.userOneName + " og " + e.userTwoName;
                }),
                t("ade845a5", function (e) {
                    return e.trustedFriendsTweetOwner + "s";
                }),
                t("ef5386dc", function (e) {
                    return e.userOneName + " " + e.userTwoName + " og " + e.userThreeName;
                }),
                t("acd17e4b", function (e) {
                    return e.trustedFriendsTweetOwner + "s";
                }),
                t("g1ee3d90", function (e) {
                    return e.userOneName + " " + e.userTwoName + " og " + e.userThreeName;
                }),
                t("f6da070f", function (e) {
                    return e.trustedFriendsTweetOwner + "s";
                }),
                t("a035ba65", function (e) {
                    return e.userOneName + " " + e.userTwoName + " og " + i(e.othersCount, "1 anden", e.othersCount + " andre");
                }),
                t("e4c52c45", function (e) {
                    return e.trustedFriendsTweetOwner + "s";
                }),
                t("baf2c639", function (e) {
                    return e.userOneName + " " + e.userTwoName + " og " + i(e.othersCount, "1 anden", e.othersCount + " andre");
                }),
                t("j8e134e5", function (e) {
                    return e.trustedFriendsTweetOwner + "s";
                }),
                t("c14cdb18", "Promover"),
                t("f11264ac", "Tilføj betalingsmetode"),
                t("j619ec94", "Promover post"),
                t("h1fcb36c", "Promover din post"),
                t("fd22cfe0", "vilkårene og betingelserne for annoncer."),
                t("i3656b52", "Hvor meget vil du bruge?"),
                t("h7c29de6", "Anslået rækkevidde"),
                t("hd435bf1", function (e) {
                    return e.audienceLow + "-" + e.audienceHigh + " personer";
                }),
                t("i976aff4", "Opdater oplysningerne om dit budget pr. dag, så det passer til din faktureringsvaluta."),
                t("e1e912f2", "Din post blev udgivet, men vi kunne ikke booste den. Du vil ikke blive faktureret."),
                t("fe26420a", "Tilføj keywords"),
                t("aacfbe55", function (e) {
                    return "Du poster for @" + e.screenName;
                }),
                t("ga8627cd", function (e) {
                    return "Du svarer for @" + e.screenName + ".";
                }),
                t("e6d2573f", function (e) {
                    return "Du skriver en besked for @" + e.screenName + ".";
                }),
                t("d37a3e15", function (e) {
                    return "Du opretter denne Liste for @" + e.screenName + ".";
                }),
                t("ceb1ad26", "Vi introducerer downloadbare videoer"),
                t("ea97bc08", 'Gå offline, eller remix! Premium-brugere har nu mulighed for at downloade og forandre dit indhold. Hvis du ikke ønsker, at dine videoer skal kunne downloades, skal du trykke på "Rediger" på din video. Du bestemmer reglerne for dit indhold.'),
                t("e6042757", function (e) {
                    return e.minutes + " minut" + i(e.minutes, "", "ter") + " og " + e.seconds + " sekund" + i(e.seconds, "", "er") + " tilbage til at redigere post";
                }),
                t("a4e39717", function (e) {
                    return e.minutes + " minut" + i(e.minutes, "", "ter") + " tilbage til at redigere post";
                }),
                t("c55eed72", "Svarer"),
                t("caca3102", "Andre i denne samtale"),
                t("c6a6dc2f", function (e) {
                    return "Da du har blokeret @" + e.screenName + ", får vedkommende ikke besked, når du svarer.";
                }),
                t("f5b426c2", "Indlæser brugere"),
                t("c20dc654", "Du kan kun tagge 10 personer."),
                t("ae0831ab", function (e) {
                    return "@" + e.screenName + " kan ikke tagges i billeder";
                }),
                t("cca7fa72", "Planlagt post kunne ikke slettes."),
                t("c5dd0190", "Tid"),
                t("edeff232", "Dato"),
                t("fddf24b4", "Tidszone"),
                t("d39dc06e", "Du kan ikke planlægge afsendelse af en post i fortiden."),
                t("d024efe2", "Du kan ikke planlægge en post mere end 18 måneder ud i fremtiden."),
                t("d15af6da", "Nogle usendte posts kunne ikke slettes."),
                t("a1e1b748", "Dine valgte usendte posts blev slettet."),
                t("ce80fba0", "Indlæser usendte posts"),
                t("i5d56b62", "Er du ikke klar til at poste endnu? Gem den i dine udkast, eller planlæg den til senere."),
                t("aef6257e", "Sletter usendte posts"),
                t("dce0bc34", "Usendte posts"),
                t("f8464692", "Planlagt"),
                t("e8bd47f2", "Vælg alle"),
                t("j2b145d4", "Fravælg alle"),
                t("h6c79ac2", "Fjern usendte posts"),
                t("d0a4a03c", "Denne handling kan ikke fortrydes, og de usendte posts går tabt."),
                t("f9f69d32", "Afsendelse mislykkedes"),
                t("j74e5dd4", "Den post, du forsøger at svare på, er blevet slettet"),
                t("c5ceafc8", "Svarer"),
                t("f501ba43", function (e) {
                    return e.count + " post" + i(e.count, "", "s") + " mere";
                }),
                t("b321d0cc", "Indlæs billeder"),
                t("abd649ce", "Slet usendt post"),
                t("c7d42978", "Denne handling kan ikke fortrydes, og dit post-udkast går tabt."),
                t("e43a5528", "Noget gik galt, og den usendte post blev ikke slettet."),
                t("e7c766ee", "Lokalitetstjenester er slået fra"),
                t("ab68727a", "Du kan slå dem til i enhedens indstillinger."),
                t("ae4057a2", "Lokalitet kunne ikke bestemmes"),
                t("bf2923a6", "Tjek din enheds indstillinger."),
                t("d963d1b6", "Ingen steder blev fundet"),
                t("a893d602", "OK"),
                t("be6cc44e", "Søg efter lokaliteter"),
                t("d8ef3232", "Kunne ikke hente lokaliteter"),
                t("b01ed2db", function (e) {
                    return e.distance + " mil";
                }),
                t("i83e29e1", function (e) {
                    return e.distance + " fod";
                }),
                t("d4b7cff7", function (e) {
                    return e.distance + " km";
                }),
                t("b211849f", function (e) {
                    return e.distance + " min";
                }),
                t("fd391b9f", function (e) {
                    return "Indlejr " + e.entity;
                }),
                t("e1618e49", function (e) {
                    return "Du begyndte at følge @" + e.screenName;
                }),
                t("ge5067bc", "Skjul svar"),
                t("j136c720", "Svar skjult fra post"),
                t("d66f0338", "Skjuler svar på dine posts"),
                t("cfc8cb50", "For at give dig større kontrol over de samtaler, du starter, kan du som post-forfatter skjule svar på dine posts."),
                t("if8dc5f0", "Skjulte svar flyttes til en separat side, og alle kan se dem ved at vælge ikonet for skjulte svar i posten."),
                t("b2615c6d", function (e) {
                    return "Bloker også @" + e.screenName + "?";
                }),
                t("i62a03aa", "Nej"),
                t("f9f27fa2", "Skjul post"),
                t("ce87916a", "Tilføj/fjern fra Højdepunkter"),
                t("eaae42ce", "Føj til Højdepunkter?"),
                t("h032d096", "Fjern fra Højdepunkter?"),
                t("be38d25e", "Denne post vil blive vist på fanen Højdepunkter på din profil."),
                t("d2be9310", "Denne post vil blive fjernet fra fanen Højdepunkter på din profil."),
                t("jea6b076", "Er føjet til Højdepunkter."),
                t("ce6fd0ec", "Blev fjernet fra Højdepunkter."),
                t("ha35a1d2", "Fastgør til din profil"),
                t("d04f95c0", "Din post blev fastgjort til din profil."),
                t("i419d136", "Fastgør post til profil?"),
                t("c1b9714a", "Den vises øverst i din profil og erstatter en eventuelt tidligere fastgjort post."),
                t("fe4d099a", "Føj til Højdepunkter"),
                t("e8d4c1cc", "Højdepunkter er en abonnementsfunktion. Bliv verificeret for at låse op for denne og andre funktioner."),
                t("b68c3784", "Bliv verificeret"),
                t("bb16cc76", "Forlad denne samtale"),
                t("de21174c", "Du har forladt denne samtale"),
                t("j33c9fc6", "Lige meget, jeg bliver"),
                t("aed79c54", "Lad os få dig ud af denne samtale"),
                t("h12044a4", "Sommetider har du bare ikke lyst til at deltage. Hvis du forlader en samtale …"),
                t("f100e566", "Fjernes tagget med dit brugernavn"),
                t("a0d68f4e", "Dit brugernavn bliver stående, men dit tag bliver fjernet fra den oprindelige post og alle svar."),
                t("b00255b6", "Stopper fremtidige omtaler"),
                t("geea29ee", "Folk kan ikke omtale dig igen i denne samtale."),
                t("c54678e8", "Stopper meddelelser"),
                t("ga4fa180", "Du modtager ikke flere meddelelser, men du kan stadig se samtalen."),
                t("h8dde772", "Ingen får besked, hvis du forlader en samtale."),
                t("ee87e71c", "Du kan ikke skjule dig selv."),
                t("ed428a76", "Du skjuler ikke den angivne bruger."),
                t("e2d6c17e", "Skjul denne samtale"),
                t("cd1942f4", "Vis denne samtale igen"),
                t("bbd8bed6", "Meddelelser skjules for denne samtale"),
                t("c13af432", "Meddelelser vises for denne samtale"),
                t("df744bda", "Skjul dette"),
                t("j9552760", "Skjul samtale"),
                t("d751694c", "Når du skjuler en samtale, får du ikke længere meddelelser om den."),
                t("a50c911e", "Din post er blevet fastgjort og tilføjet til højdepunkter."),
                t("d1c1e2c2", "Fastgør i Fællesskab"),
                t("j832cc34", "Dette vises øverst i dit Fællesskab."),
                t("h7dbb2f2", "Dette vises øverst i dit Fællesskab og erstatter en evt. tidligere fastgjort post."),
                t("d8725596", "Fastgjort af moderatorer for et Fællesskab"),
                t("f5cdcc2c", "Ikke interesseret i denne annonce"),
                t("c2e276e4", "Udeluk forfatter fra Fællesskab"),
                t("a95f04ba", "Er du sikker på, at du vil fjerne billedtagget fra denne post?"),
                t("jfc76958", "Fjern tagget fra billedet"),
                t("j4e43d8b", function (e) {
                    return "Indberet " + e.entity;
                }),
                t("e3fd237e", "Indberet annoncen"),
                t("d1e21610", "Indberet overtrædelse af NetzDG"),
                t("d7513755", function (e) {
                    return "Søg efter @" + e.screenName + "s posts i dette Fællesskab";
                }),
                t("d7dbb71b", function (e) {
                    return e.followType + " til " + e.screenName;
                }),
                t("ja66a2b5", function (e) {
                    return "Følg ikke @" + e.screenName + " længere";
                }),
                t("c2423b7b", function (e) {
                    return "Du stoppede med at følge @" + e.screenName;
                }),
                t("i31dfa4c", "Vis svar"),
                t("j8e56ba2", "Svar blev vist"),
                t("ic030338", "Frigør fra profil"),
                t("gfcea3f4", "Frigør post fra profil?"),
                t("eb2d59f4", "Det vises ikke længere automatisk øverst i din profil."),
                t("a2dd7414", "Din post blev frigjort fra din profil"),
                t("cac6a24a", "Fjern fastgjort post"),
                t("i642edc4", "Denne post vises ikke længere øverst i Fællesskabets feed."),
                t("f9478972", "Vis skjulte svar"),
                t("c5491b5d", function (e) {
                    return "Vis engagementer for " + e.entity;
                }),
                t("haebcf52", "Folk kan ikke omtale dig igen i denne samtale, og du modtager ikke flere meddelelser."),
                t("c837fcaa", "Vis flere svar"),
                t("d228a9a0", "Vis mere"),
                t("g0b48670", "Denne samtale indeholder for mange svar til, at de alle kan vises."),
                t("d9b417c4", "Angiv som ikke interesseret"),
                t("c29d6806", "Stop med at anbefale"),
                t("ge8f3043", function (e) {
                    return "Følg emnet " + e.topicName;
                }),
                t("aa576cbf", function (e) {
                    return "Følg ikke længere emnet " + e.topicName;
                }),
                t("i77347d1", function (e) {
                    return "Afvis emnet " + e.topicName;
                }),
                t("d69b2d90", "Du er ikke interesseret i dette emne."),
                t("je808a17", function (e) {
                    return e.topicName + " Emne";
                }),
                t("ic6aa5f4", "Godkendt"),
                t("c02e7e3c", "Indlæser …"),
                t("c5453f28", "Runde af 64"),
                t("eb256a86", "Runde af 32"),
                t("g77adc66", "Sweet Sixteen"),
                t("a6d2520c", "Sweet 16"),
                t("g5b63eb6", "Elite Eight"),
                t("d8bf2890", "Elite 8"),
                t("f9d3d6f2", "Final Four"),
                t("bda24f7c", "Final 4"),
                t("i5043440", "Nationalt mesterskab"),
                t("fcb16026", "Mesterskab"),
                t("e9c89ee8", "Øst"),
                t("h259fd86", "Vest"),
                t("a7b2545a", "Syd"),
                t("fdf7819a", "Midtvesten"),
                t("i899e9b0", "Indsend turneringsplan"),
                t("c5b04394", "Vis valg"),
                t("h836bbae", "Vis turnering"),
                t("e1059d6c", "1. runde"),
                t("b1602be4", "2. runde"),
                t("ef7bc2c0", "20-21 mar."),
                t("h726aaf2", "22-23 mar."),
                t("ee7cd198", "27-28 mar."),
                t("fed91402", "29-30 mar."),
                t("aba0a450", "5. apr."),
                t("jdfba2dc", "7. apr."),
                t("b7c6bc12", "TBD"),
                t("c373612c", "Vælg:"),
                t("e8b3cab9", function (e) {
                    return "" + e.winner;
                }),
                t("j5db9ddd", " over "),
                t("a638617d", function (e) {
                    return "" + e.loser;
                }),
                t("j4c40da4", "Send nu"),
                t("b23688c8", "Fortryd tidtagning"),
                t("cca5d499", function (e) {
                    return "Fortæl mig om " + e.selectedText + " med 1 eller 2 sætninger.";
                }),
                t("d231a76a", "Vind $100.000 for den bedste turneringsplan 🏀"),
                t("heaba5d8", "Design din turneringsplan til college-basketball på X. Den perfekte turneringsplan vinder en tur til Mars!"),
                t("i57d3ea0", "Regler gælder"),
                t("a0440af6", "Opret en turneringsplan"),
                t("aaad27c8", "Forfatter"),
                t("eb748f7e", "Vis post-statistik"),
                t("b7cff250", function (e) {
                    return "" + e.displayCoins;
                }),
                t("g62dcfbc", function (e) {
                    return "Mønt" + i(e.count, "", "er");
                }),
                t("be059f7e", "Nå ud til op til 100.000 flere brugere nu"),
                t("c34f845e", "Prøv at Booste dette opslag!"),
                t("c37102aa", "Nå ud til mere end 100.000 brugere i dag, som sandsynligvis vil være interesserede i dit indhold."),
                t("ac245c4c", "Booste synlighed nu"),
                t("e4db6326", "Måske senere"),
                t("g6237a1e", "Promovering kører"),
                t("d6b5949e", "Promovering på pause"),
                t("ffd9cfe6", "Se mere"),
                t("d172116a", "Opdag mere"),
                t("be5df69e", "Flere posts"),
                t("g11ebd34", "Flere forslag"),
                t("g4a6901a", "Gennemse"),
                t("h6453e74", "Gennemse posts"),
                t("je506a60", "Skift brugernavn"),
                t("c0fcb08a", "Hvis du ændrer dit brugernavn, bliver dit flueben og din tilknytning fjernet midlertidigt, indtil de er blevet gennemgået."),
                t("d1f6d336", "Brugernavn"),
                t("de65c756", "Forslag"),
                t("ebeeac1a", "Skift e-mail"),
                t("dc013356", "Nuværende"),
                t("ea28c7ce", "Indlæser e-mailindstillinger"),
                t("f3f66252", "Tilføj e-mailadresse"),
                t("i5107de4", "Opdater e-mailadresse"),
                t("d19fd42a", "Send bekræftelses-e-mail igen"),
                t("g4da3246", "E-mail afsendt. Tjek venligst din indbakke om lidt for et bekræftelses-link."),
                t("h021352f", function (e) {
                    return "" + e.resendConfirmationLabel;
                }),
                t("d241169c", "Nuværende adgangskode"),
                t("a9bc3044", "Ny adgangskode"),
                t("b8c03cfc", "Bekræft adgangskode"),
                t("b731d32c", "\ufeffDin adgangskode er blevet opdateret."),
                t("d555d7e0", "Ny adgangskode må ikke være den samme som din eksisterende adgangskode."),
                t("fa8af9ae", "Adgangskoder matcher ikke."),
                t("a03f5c73", function (e) {
                    return e.applicationCount + " applikation" + i(e.applicationCount, "", "er");
                }),
                t("j25601d9", "Læs mere"),
                t("cb841d56", "Skift telefon"),
                t("ce37ea44", "Tilføj telefonnummer"),
                t("ibaf239e", "Opdater telefonnummer"),
                t("j2636558", "Slet telefonnummer"),
                t("e49b16d4", "Vil du slette telefonnummeret?"),
                t("i931719e", "Dette gør, at nummeret fjernes fra kontoen og ikke længere kan bruges til modtagelse af meddelelser eller loginkoder."),
                t("j841d1f4", "Telefon er fjernet."),
                t("fe8b565a", "Dette gør, at telefonnummeret slettes fra denne konto, og du får ikke længere meddelelser via sms fra X. Desuden deaktiveres tofaktorgodkendelse på denne konto."),
                t("hf45b8d4", "Dette gør, at telefonnummeret slettes fra denne konto, og du får ikke længere meddelelser via sms fra X. Desuden deaktiveres tofaktorgodkendelse via sms på denne konto."),
                t("bc262c2e", "Yderligere metoder"),
                t("hc1a91da", "Backup-koder"),
                t("e4fed8f0", "Få backup-koder til engangsbrug, så du kan logge ind på X, hvis du ikke har adgang til dine indstillinger for tofaktorgodkendelse."),
                t("b39c7b14", "Vil du deaktivere loginverifikation?"),
                t("a923fce6", "Hvis du slår godkendelse med to faktorer fra, kan din konto være mere sårbar over for kompromittering. Er du sikker på, at du vil slå den fra?"),
                t("ff781e0a", "Vil du slå denne funktion fra?"),
                t("c557ac30", "Er du sikker på, at du vil slå denne metode fra?"),
                t("d133464a", "Hvis du slår dette fra, fjernes denne metode til tofaktorgodkendelse fra din konto. Er du sikker på, at du vil slå det fra?"),
                t("ee3a7bfa", "Slå fra"),
                t("aa9139cc", "Verificer loginanmodninger"),
                t("jc22dd42", "Når du har logget ind, sender X en pushmeddelelse til X-appen, som du skal godkende for at få adgang til din konto."),
                t("a219e218", "OK"),
                t("e0d79de8", "Der er kun knyttet én sikkerhedsnøgle til din konto. Hvis du vil undgå at blive låst ude, hvis du mister den, skal du tilføje en ny nøgle og gemme en tofaktorgodkendelseskode som backup."),
                t("ja6bbfa0", "Indlæser data for loginverifikation"),
                t("c2570922", "Sms-besked"),
                t("fba9483c", "Brug din mobiltelefon til at modtage en sms-besked med en godkendelseskode, som skal indtastes, når du logger ind på X."),
                t("ab61b41a", "Godkendelsesapp"),
                t("a67c7d68", "Brug en mobilgodkendelsesapp til at modtage en verifikationskode, som skal indtastes, hver gang du logger ind på X."),
                t("h6d0d89c", "Sikkerhedsnøgle"),
                t("b3e5c946", "Brug en sikkerhedsnøgle, som sættes i din computer eller synkroniseres til din mobilenhed, når du logger ind på X. Du skal bruge en understøttet mobilenhed eller webbrowser."),
                t("cd195528", "Tilføj ny sikkerhedsnøgle"),
                t("a1860ee8", "Midlertidig adgangskode"),
                t("j45a2856", "Opret en midlertidig engangsadgangskode til brug sammen med tjenester fra tredjepart."),
                t("d8612d9c", "Aktivér først SMS-besked eller Godkendelsesapp"),
                t("e13d4468", "Før du kan konfigurere en sikkerhedsnøgle, skal du aktivere enten SMS-besked eller Godkendelsesapp som en af dine metoder til tofaktorgodkendelse."),
                t("c1d96d6a", "Du har tilføjet det maksimale antal nøgler"),
                t("gf91694e", "Du skal slette en nøgle, før du kan tilføje en ny."),
                t("j265ddb6", "Bekræft din e-mail"),
                t("a7cfdf1c", "Hvis du vil slå tofaktorgodkendelse til, skal du knytte en e-mailadresse til denne X-konto og derefter bekræfte den, så vi er sikre på, at det er din adresse."),
                t("d7bfde1a", "Det ser ud til, at din konto aktuelt er suspenderet. Du kan ikke slå tofaktorgodkendelse til, mens kontoen er suspenderet."),
                t("g268fbb8", "Denne konto er id-verificeret."),
                t("f66d24be", "Hjælpecenter"),
                t("c8255462", "Skjul din id-verificeret-etiket"),
                t("c6e731ee", "Skjul din id-verificeret-etiket, så folk ikke kan se den, når de trykker på det blå flueben på din profilside."),
                t("be582166", "Id-verifikation kan hjælpe med at beskytte din konto mod imitation og giver din profil en id-verificeret-etiket."),
                t("b496bc94", "Vi er ved at gennemgå dit myndighedsudstedte id. Vi holder dig opdateret via meddelelser!\n\nNår du er godkendt, får du en id-verificeret-etiket på din profil, så folk ved, at din konto er id-verificeret."),
                t("d8f5cce4", "Du har overskredet grænsen for verifikationsanmodninger. Vent 24 timer, før du prøver igen."),
                t("i8427a1e", "Denne konto er ikke kvalificeret til id-verifikation. Kun individuelle Premium-abonnenter er i øjeblikket kvalificeret til id-verifikation."),
                t("cdc65e89", function (e) {
                    return e.title + " (valgfri)";
                }),
                t("h05c1f28", "Verificer din konto ved hjælp af et myndighedsudstedt id. Det tager ca. 5 minutter."),
                t("j8cfcc62", "Jeg giver samtykke til, at X og Au10tix må bruge billeder af mit id og min selfie, herunder ekstraherede biometriske data, til at bekræfte min identitet og til X's relaterede sikkerhedsformål, herunder at forhindre imitation. Au10tix gemmer muligvis sådanne data i op til 30 dage."),
                t("c4930cb6", "Du får brug for følgende:"),
                t("ac7bb0fe", "Gør et myndighedsudstedt id klar"),
                t("c12ce69c", "Tjek, om kameraet på din enhed er utildækket og virker"),
                t("c5bfe94a", "Vær klar til at tage en selfie og billeder af dit id."),
                t("e5b7dd84", "Start"),
                t("abfaa528", "Spring over"),
                t("e4fed511", "X Premium tjeneste"),
                t("def518fa", "Skaberabonnement"),
                t("f61cda83", "Andel af annonceindtægter"),
                t("g1952008", "Skaberabonnement"),
                t("e5d0419c", "Indtægtsdeling for skabere"),
                t("g3723480", "Skaberabonnement"),
                t("c776f523", "Andel af annonceindtægter"),
                t("ab9f38f8", "Skaberabonnement"),
                t("d5cab8b0", "Indtægtsdeling for skabere"),
                t("deaf5b16", "Prøv igen"),
                t("g1a4a1b6", "Fejl ved id-verifikation"),
                t("e24305e4", "Din identitetsverifikationssession var forældet eller ugyldig, prøv igen."),
                t("f7954a0c", "Indlæser data fra sikkerhedsnøgler"),
                t("h69986c2", "Du kan omdøbe eller slette dine sikkerhedsnøgler."),
                t("i5896ba2", "Tilføj endnu en nøgle"),
                t("a8ef2b64", "Ikke-navngivet sikkerhedsnøgle"),
                t("d4e220b4", "Navn"),
                t("g6d0f0b6", "Administrer sikkerhedsnøgle"),
                t("b894f68a", "Indlæser data fra sikkerhedsnøgle"),
                t("g2601bb6", "Omdøb nøgle"),
                t("b464b726", "Slet nøgle"),
                t("a4101e1b", function (e) {
                    return "Tilføjelsesdato: " + e.securityKeyAddedDate;
                }),
                t("i3bb3f78", "Backup-kode"),
                t("ec6a76e0", "Generer en ny kode"),
                t("f2c3c31c", "Kopiér koden"),
                t("e8016b64", "Indlæser backup-kode"),
                t("c4ca22bc", "Hvis du mister adgangen til din enhed, kan du bruge denne kode til at verificere din identitet."),
                t("f20ff69f", "Lær mere"),
                t("j2327f80", "Midlertidig adgangskode"),
                t("fbfeaf8e", "Generer en ny adgangskode"),
                t("h4a8bd12", "Kopiér adgangskoden"),
                t("g247dc1c", "Indlæser midlertidig adgangskode"),
                t("h3a32f52", "Brug denne midlertidige adgangskode (mellemrum kan udelades) til at logge ind på X i apps og på enheder."),
                t("d70fceac", "Denne adgangskode udløber om en time."),
                t("j924d222", "Skift land"),
                t("e9310157", "Læs mere"),
                t("bd5ac12e", "Vælg dit foretrukne sprog til overskrifter, knapper og anden tekst fra X på denne konto. Dette ændrer ikke sproget for det indhold, du ser på din tidslinje."),
                t("cef33711", function (e) {
                    return e.languageName + " (beta)";
                }),
                t("b033248c", "Synlighed"),
                t("c69b4798", "Vælg, om personer, der har din e-mailadresse eller dit telefonnummer, kan finde og få kontakt til dig på X."),
                t("eca117e6", "Giv personer, der har din e-mailadresse, mulighed for at finde dig på X"),
                t("acd36386", "Giv personer, der har din e-mailadresse, mulighed for at finde og få kontakt til dig på X."),
                t("gd8511ca", "Giv personer, der har dit telefonnummer, mulighed for at finde dig på X"),
                t("eca935ec", "Giv personer, der har dit telefonnummer, mulighed for at finde og få kontakt til dig på X."),
                t("ac77c66c", "Kontakter"),
                t("jadf483e", "Administrer kontakter, som du har importeret fra dine mobilenheder."),
                t("b864be7a", "Fjern alle kontakter"),
                t("g5fa1090", "Vil du fjerne alle kontakter?"),
                t("h3e420fc", "Alle kontakter, du tidligere har uploadet, fjernes, og synkronisering med X deaktiveres på alle enheder. Bemærk, at processen tager noget tid og ikke kan fortrydes. Desuden kan du stadig opleve at få forslag på X (baseret på dine kontakter) i mellemtiden."),
                t("ca24589e", "Intet navn"),
                t("d439b1c1", "Læs mere"),
                t("fe36fe10", "Bekræft adgangskoden"),
                t("hccd9dbe", "Angiv din adgangskode for at få disse."),
                t("df1ddda4", "De lokalitetsmærker, som du har føjet til dine posts, vil ikke længere være synlige på X.com, X til iOS og X til Android. Der kan gå lidt tid, inden disse opdateringer træder i kraft."),
                t("ed7fa034", "Lokalitetstjenester er ikke aktiveret på denne enhed. Du kan slå dem til under enhedens indstillinger."),
                t("e80e4288", "Fjern alle lokalitetsoplysninger, der er føjet til dine posts"),
                t("b0ee8ab6", "Fjern alle lokalitetsoplysninger, der er føjet til dine posts?"),
                t("e23b2991", "Læs mere"),
                t("gd758534", "Tillad personer at tagge dig i deres billeder, og få meddelelser, når de gør det."),
                t("a90af44e", "Skjul ømtåleligt indhold"),
                t("a25e2ec6", "Fjern blokerede og skjulte konti"),
                t("b827a058", "Indstillingerne for sikker søgning blev opdateret."),
                t("b27c9852", "Noget gik galt under opdatering af indstillingerne for sikker søgning."),
                t("j3402d7e", "Dette forhindrer, at posts med potentielt ømtåleligt indhold vises i dine søgeresultater."),
                t("if05bca6", "Brug dette til at udelade søgeresultater fra konti, du har blokeret eller skjult."),
                t("bc7fd990", "Indlæser indstillinger for trends"),
                t("e2f16650", "Vis indholdet af denne lokalitet"),
                t("e5e88f40", "Når denne funktion er slået til, kan du se, hvad der sker omkring dig lige nu."),
                t("i4d54b0e", "Trends til dig"),
                t("ad431584", "Vis mig sjove Grok-historier"),
                t("df9f03c8", "Tilpas trends ud fra din lokalitet, og hvem du følger."),
                t("c6cf5c7e", "Du kan tilpasse trends baseret på din lokalitet, og hvem du følger."),
                t("e09358ba", "Se de seneste historier på X i Grok-tilstanden Sjov."),
                t("a55db872", "Personlig tilpasning"),
                t("a58170fc", "Grok-historier"),
                t("h0b5152e", "Skift lokalitet"),
                t("dfeada5e", "Udforsk lokaliteter"),
                t("ac854308", "Politik"),
                t("d429c942", "Politik for Trends under valget i USA"),
                t("ede134f2", "Vælg, om videoer og GIF-filer skal afspilles automatisk på denne enhed."),
                t("b3aab6d4", "Lokaliteter"),
                t("e53e05e4", "Indlæser lokaliteter"),
                t("d5c9174f", function (e) {
                    return e.location + ", " + e.country;
                }),
                t("b47d123d", function (e) {
                    return "SPAR " + e.percentage + " %";
                }),
                t("c6614cc0", "plus eventuel moms"),
                t("f8d3b50a", "inklusive moms"),
                t("i2c32253", function (e) {
                    return e.price + " pr. måned";
                }),
                t("c41e1023", function (e) {
                    return e.price + "/år";
                }),
                t("i57aeafb", function (e) {
                    return "For de" + i(e.duration, "n første måned", " første " + e.duration + " måneder") + " derefter " + e.standardPrice + ", som faktureres månedligt";
                }),
                t("ae3e3723", function (e) {
                    return "For de" + i(e.duration, "t første", " første " + e.duration) + " år derefter " + e.standardPrice + ", som faktureres årligt";
                }),
                t("ade4c757", function (e) {
                    return "Derefter " + e.price + " pr. måned";
                }),
                t("f7798e11", function (e) {
                    return "Derefter " + e.price + " pr. år";
                }),
                t("e0b39888", "Faktureres månedligt"),
                t("b67c37de", "Faktureres årligt"),
                t("a8363765", function (e) {
                    return e.price + " faktureres årligt";
                }),
                t("df3ed1c8", function (e) {
                    return "" + e.standardPrice;
                }),
                t("g261b098", function (e) {
                    return "" + e.standardPrice;
                }),
                t("af66a072", "Før du beslutter dig, her er det, du vil gå glip af"),
                t("a092f1ba", "Fortsæt med annullering"),
                t("g96c7f48", "Vælg et andet abonnement"),
                t("iccac88e", "Halvannoncer på Til dig- og Følger-tidslinjerne"),
                t("d7a124d8", "Nul annoncer"),
                t("d2d22c36", "Adgang til Grok"),
                t("j249b1d4", "Svar-boosting"),
                t("c4a37384", "Længere posts"),
                t("fb656858", "Rediger posts"),
                t("faaec212", "Betaling for at poste"),
                t("fb3c7168", "Dine bogmærkemapper"),
                t("b346bc12", "Flueben"),
                t("je8143e1", function (e) {
                    return "Få " + e.percentage + " % rabat på X " + e.productName + " i " + i(e.duration, "én måned", e.duration + " måneder");
                }),
                t("j5847735", function (e) {
                    return "Få " + e.percentage + " % rabat på X " + e.productName + " i " + i(e.duration, "ét", "" + e.duration) + " år";
                }),
                t("da3431f9", function (e) {
                    return "Denne rabat er en lille gave fra os, hvis du gerne vil beholde X " + e.productName + " et stykke tid endnu!";
                }),
                t("i6fbfc72", "Eksklusivt engangstilbud"),
                t("f1bc6309", function (e) {
                    return "Behold fuld adgang til alle X " + e.productName + "-funktioner";
                }),
                t("fdb7b52a", "Rabatten vil blive anvendt fra din næste faktureringsperiode."),
                t("af283938", function (e) {
                    return "" + e.standardPrice;
                }),
                t("c284b365", function (e) {
                    return "" + e.discountedPrice;
                }),
                t("e2673372", function (e) {
                    return "" + e.standardPrice;
                }),
                t("jd2dc103", function (e) {
                    return "" + e.discountedPrice;
                }),
                t("c6150942", "Nu er du klar"),
                t("a905eac6", "Udforsk Premium"),
                t("j6083a1c", "Administrer dit abonnement"),
                t("b4fa4630", "Opdater betalingsmetode"),
                t("ef0dfa5a", "Opdater faktureringsmetode"),
                t("f5b352ec", "Annuller abonnement"),
                t("j317d958", "Pas på - du mister din igangværende rabat"),
                t("a46e42d2", "Behold mit abonnement"),
                t("e122fb3f", function (e) {
                    return "Din gratis prøveperiode slutter " + e.endDate + ".";
                }),
                t("be103b84", "Aktiv"),
                t("ace43720", "Udløber snart"),
                t("c8f18aa4", "Du får Premium+, fordi du er abonnent på Verificerede organisationer. "),
                t("a341d1f7", function (e) {
                    return "Du får Premium+, fordi din organisation er abonnent på Verificerede organisationer via @" + e.organization + ". Kontakt din organisation for at få flere oplysninger.";
                }),
                t("e4aaf0f8", "Hvis du vil opsige dit gratis abonnement på Premium, skal du kontakte support"),
                t("e5170220", "Denne konto modtog et gratis Premium-abonnement via annonceudgifter."),
                t("j6d6b66e", "Denne konto fik et abonnement i gave. Kontakt Support for at opsige dit abonnement"),
                t("fae1751f", function (e) {
                    return "Det ser ud til, at du har købt dette abonnement i X " + e.mobilePlatform + "-appen. Du skal administrere eller opsige dit abonnement derfra.";
                }),
                t("fecebd4c", "her"),
                t("h201c4c2", "iOS"),
                t("i8385a2c", "Android"),
                t("h80834de", "anden"),
                t("baf97716", "Dine funktioner er tilgængelige i resten af faktureringsperioden."),
                t("ae864b69", function (e) {
                    return "Dit abonnementsniveau er planlagt til at blive ændret til " + e.tierName + " fra den næste faktureringsperiode den " + e.date;
                }),
                t("edbb700f", function (e) {
                    return "Starter fra næste faktureringsperiode den " + e.date;
                }),
                t("e9884540", "Aktiv rabat"),
                t("bfb879aa", "Afventende rabat"),
                t("f8321d82", "Alle"),
                t("eb233866", "Importeret"),
                t("d23b0404", "Når du blokerer en person, kan vedkommende ikke følge dig eller sende dig beskeder, og du får ikke vist meddelelser fra vedkommende."),
                t("e0a7e9bc", "Blokér uønskede konti"),
                t("ef731b14", "Indlæser blokerede konti"),
                t("e554ba83", "Lær mere"),
                t("if594962", "Blokeret"),
                t("i2b9632e", "Blokeringen blev fjernet."),
                t("g51a96de", "Når du blokerer en person, kan vedkommende ikke følge dig eller sende dig beskeder, og du får ikke vist meddelelser fra vedkommende. Du kan importere en liste over konti, du vil blokere på X."),
                t("j035733c", "Du er ved at påbegynde deaktiveringsproceduren for din X-konto. Efter deaktiveringen kan dit visningsnavn, brugernavn og din offentlige profil ikke længere ses på X.com, X til iOS eller X til Android."),
                t("j4a29d52", "Hvis din X-konto er blevet deaktiveret ved en fejl, kan du gendanne den i op til 30 dage efter deaktiveringen."),
                t("ea989810", "Deaktiver konto"),
                t("f6e73faa", "Deaktiver"),
                t("c3743328", "Dette medfører, at din konto deaktiveres"),
                t("a20cd24e", "Andet du skal være opmærksom på"),
                t("e93b0ae0", "Fuldfør din anmodning om deaktivering ved at angive den adgangskode, der er knyttet til kontoen."),
                t("fc025d1d", "Lær mere"),
                t("bb5e039c", "indstillingerne"),
                t("j37efff6", "ændre dem"),
                t("ce5bfe12", "dine X-data"),
                t("g7088266", "Rediger profil"),
                t("d9d293b8", "Hjemmeside"),
                t("cb469ff6", "Navn skal udfyldes"),
                t("g511f468", "Dit profilbillede kunne ikke opdateres, fordi visse medier ikke blev uploadet"),
                t("ec3a116e", "Dit banner kunne ikke opdateres, fordi visse medier ikke blev uploadet."),
                t("j94599ec", "Tilføj et profilbillede"),
                t("df31d76a", "Tilføj et bannerbillede"),
                t("c01a0e1a", "Vil du bekræfte fødselsdatoen?"),
                t("df2c469a", "Skift til professionel"),
                t("e1f76978", "Rediger professionel profil"),
                t("ic04a6f6", "Denne handling kan ikke fortrydes, og dine ændringer går tabt."),
                t("addbe8e8", "Overvej at bruge et navn uden specialtegn, så det er tilgængeligt for endnu flere mennesker – også blinde og svagtseende."),
                t("a46f80ab", function (e) {
                    return "Født " + e.birthdate;
                }),
                t("c7905f89", function (e) {
                    return "Født " + e.year;
                }),
                t("bfe8d1a2", "Rediger udvidet bio"),
                t("e1ec926e", "Opret udvidet bio"),
                t("c119dee8", "Fødselsdato"),
                t("bbf0afc8", "Tilføj din fødselsdato"),
                t("f98d367e", "Vil du ændre fødselsdatoen?"),
                t("d3f43300", "Dette kan kun ændres nogle få gange. Sørg for at indtaste alderen på den person, der bruger kontoen."),
                t("g10411f0", "Dette skal være fødselsdatoen for den person, der bruger kontoen. Også selvom du opretter en konto til din virksomhed, en begivenhed eller din kat."),
                t("a0c5e370", "Hvem kan se dette?"),
                t("i68fe54e", "Måned og dag"),
                t("b4e729b6", "År"),
                t("f3bb1b48", "Vil du fjerne fødselsdatoen?"),
                t("c9cb9972", "Dette gør, at den fjernes fra profilen."),
                t("a2bef112", "Fjern fødselsdatoen"),
                t("c37622ec", "Angiv en gyldig dato"),
                t("f679d166", "Dine følgere"),
                t("af293dc2", "Personer, du følger"),
                t("h99b6d08", "privatlivspolitik"),
                t("hce7a225", "Læs mere"),
                t("e9603d88", "Vis markering for bekræftet telefonnummer"),
                t("ada99498", "Denne markering vil kun blive vist til andre i din region."),
                t("a765e936", "Slet din udvidede bio"),
                t("d4d68e44", "Gemte"),
                t("ie4f57d2", "Forny dit Premium-abonnement"),
                t("h293aa52", "Dit Premium-abonnement udløber!"),
                t("j1923668", "Behold det bedste i X."),
                t("ac7e97ee", "Forny abonnement"),
                t("f70c69b4", "Svar-boost, redigering af posts, brugertilpasning, længere posts og meget mere."),
                t("f4cec4d2", "Blåt flueben, svar-boost, højere grænser i Grok og meget mere."),
                t("b6de83a0", "Rum kun for medarbejdere"),
                t("g3f251f2", "Privat udsendelse"),
                t("d08666ba", "Privat Rum"),
                t("eadb5a46", "Vær den første til at deltage"),
                t("f9629a8f", function (e) {
                    return e.hostName + "s udsendelse";
                }),
                t("ia3c0ab7", function (e) {
                    return e.hostName + "s Rum";
                }),
                t("hd552761", function (e) {
                    return "Vært " + e.hostName;
                }),
                t("c3ea19a5", function (e) {
                    return e.index + " af " + e.total;
                }),
                t("a5235305", function (e) {
                    return e.listOfPeople + " deltager";
                }),
                t("df9f8243", function (e) {
                    return e.name + " lytter";
                }),
                t("g2445c2f", function (e) {
                    return e.name + " taler";
                }),
                t("fcfd5a67", function (e) {
                    return e.name + " er vært";
                }),
                t("f7882829", function (e) {
                    return e.name + " er medvært";
                }),
                t("d961a4a0", "Direkte på X"),
                t("g2c0144a", "Verificerede organisationer"),
                t("cd5cdec8", "Administrer din annoncekredit"),
                t("f23b6a72", "Resterende annoncekredit"),
                t("i969d5de", "Opret en annoncekampagne"),
                t("d0924f58", "Få hjælp til et problem"),
                t("j8d53b64", "Vis alle funktioner"),
                t("jd26f2a6", "Tilføj tilknytninger"),
                t("e0a492e6", "Administrer dine stillinger"),
                t("d9cbd02c", "Din ansøgning er under behandling"),
                t("ed4759a6", "Du vil få besked om resultatet af din ansøgning i løbet af et par dage. Vi kan kontakte dig via e-mail for at få yderligere oplysninger."),
                t("dad69faa", "Opdater din betalingsmetode"),
                t("daf3248a", "Ansøgning ufuldstændig"),
                t("eb71036f", function (e) {
                    return "Upload og verificer din organisations dokumenter senest den " + e.date;
                }),
                t("a1d3f1f2", "Vi samarbejder med Persona om at verificere din identitet og dine forretningsdokumenter af hensyn til sikkerhed af X. Persona kan gemme dine data i op til 30 dage."),
                t("ea8c295a", "Begynd verifikation af dokumenter"),
                t("da1aa48f", function (e) {
                    return "Du kan blive verificeret ligesom @" + e.screenName + ".";
                }),
                t("e4a7a968", "Du er ikke verificeret endnu"),
                t("id9c1e82", "Denne profil er verificeret"),
                t("d43b0edc", "Bliv en del af den verificerede cirkel"),
                t("d4ea0ed4", "Få dit eget blå badge"),
                t("cffeaeae", "Bliv verificeret"),
                t("b8e930fe", "Trender nu"),
                t("ae05f268", "Trends er ikke tilgængelige."),
                t("c6b51af8", "Ny på X?"),
                t("ie8e1ffc", "Tilmeld dig nu, og få din egen, helt personlige tidslinje!"),
                t("fd6473fa", "Indlæser anbefalinger til brugere du kan følge"),
                t("a526aa66", "Hvem kan følges"),
                t("ef625010", "Du vil måske synes om"),
                t("b7388a56", "Sidefod"),
                t("hdabc3fc", "Vilkår for anvendelse"),
                t("bc6efc72", "Privatlivspolitik"),
                t("h3161192", "Cookiepolitik"),
                t("a7de64de", "Annonceinfo"),
                t("jb0a4c36", "Blog"),
                t("ce6d095a", "Karrierer"),
                t("e0adec82", "Brandressourcer"),
                t("df1b7550", "Marketing"),
                t("he258678", "X til virksomheder"),
                t("c6f58084", "Udviklere"),
                t("d83f18d2", "Oversigt"),
                t("hc5aa17c", "Hent X-appen"),
                t("j0693948", "Hent Grok-appen"),
                t("fbf83158", "Advarsel: Betalingen mislykkedes");
            t("jadeb4da", "Opdater snarest muligt din betalingsmetode, før du mister dine abonnementsfordele."),
                t("bce3726a", "Opdater fakturering"),
                t("fce9ecce", "Foreslåede videoer"),
                t("efe6ef9e", "Vis post"),
                t("b3d183ce", "Post med svar"),
                t("c299a6c0", "Tråd"),
                t("h3d5d79e", "Fællesskabspost"),
                t("cfe877ca", "Vælg, hvem du vil følge"),
                t("e06b864c", "Det ser ud til, at du synes om denne samtale"),
                t("a078ff70", "Har du lyst til at se mere indhold fra de folk, du snakkede i denne tråd? Gå på opdagelse i indhold fra nye kontoer."),
                t("cb80300e", "Spring til forsidetidslinje"),
                t("ea5cd098", "Spring til Trender"),
                t("c67e3fc2", "Forsidetidslinje"),
                t("d601fc20", "Seneste"),
                t("j43f99be", "Relevans"),
                t("ad6e11ac", "Sortér svar efter"),
                t("b2311b70", "Dette er ikke tilgængeligt for dig"),
                t("j88f27d8", "Relevante personer"),
                t("i31dcd22", "Artikel"),
                t("e3de2f6f", function (e) {
                    return e.entity + " blev føjet til dine bogmærker";
                }),
                t("e64de8a9", function (e) {
                    return e.entity + " blev fjernet fra dine bogmærker";
                }),
                t("d6d9aab6", "Tilføj bogmærke"),
                t("bb89cf46", "Fjern bogmærke"),
                t("a739d4ba", "Føj til mappe med bogmærker"),
                t("d5270434", "Afslut"),
                t("ac85c6b2", "Der opstod en fejl under indlæsning af dette billede"),
                t("b327c12a", "Billede"),
                t("ic76bdf0", "Genskab dette med Grok"),
                t("a4d3eb67", function (e) {
                    return e.fullName + ' på X: "' + e.tweetText + '"';
                }),
                t("f0701753", function (e) {
                    return "Skjul i " + e.number + " dage";
                }),
                t("j7d0e836", "Vis detaljer"),
                t("d227d19e", "Skjul detaljer"),
                t("h367e724", "Udvidet bio"),
                t("ea5928d4", "Du har mange facetter. Det bør din profil også have.\nTilføj en udvidet bio for at fortælle mere om dig selv."),
                t("h7ef9dc8", "Dette kan være:"),
                t("c04ba4b4", "Ting, du har arbejdet på og gerne vil vise frem"),
                t("d7666008", "Din legendariske pastaopskrift"),
                t("cb24ee16", "Arbejdserfaring og karrierepræferencer"),
                t("a1c93d74", "Det ser ud til, at vi har problemer med at gemme dine ændringer. Prøv igen senere."),
                t("b956c04a", "Er du sikker på, at du vil slette din udvidede bio?"),
                t("ifb23caa", "Hvis du sletter din udvidede bio, bliver den fjernet fra din profil."),
                t("c2333081", function (e) {
                    return e.count + " tegn";
                }),
                t("a2b8c54c", "Slettet"),
                t("a9cc8f96", "Maks. antal tegn overskredet"),
                t("eb7710f1", function (e) {
                    return e.years + " år";
                }),
                t("bfc38bb5", function (e) {
                    return e.months + " md" + i(e.months, "", "r") + ".";
                }),
                t("h6a724ac", "Er du sikker på, at du vil slette denne?"),
                t("f94aacae", "Hvis du sletter den, bliver den fjernet fra din profil."),
                t("je07e266", "Skjult"),
                t("a622dfcc", "Arbejdshistorik"),
                t("a6ec7ff8", "bio"),
                t("eeb6d22c", "erfaring"),
                t("eba5a8ec", "Stillingbetegnelse"),
                t("fd20adb8", "Jeg arbejder her i øjeblikket"),
                t("cd3059f2", "Startdato"),
                t("b86019ae", "Slutdato"),
                t("eedfd35c", "Virksomhed"),
                t("caa46e54", "Virksomhedens navn"),
                t("e893fe6e", "Opret virksomhed"),
                t("j1c09ca4", "Virksomhedens websted"),
                t("hd332c96", "Stillingsbetegnelse er påkrævet"),
                t("d2fb1b80", "Virksomhed er påkrævet"),
                t("b3590132", "Start- og slutdato er påkrævet"),
                t("debb6abe", "Startdatoen må ikke være i fremtiden"),
                t("j7d08ada", "Slutdatoen må ikke være i fremtiden"),
                t("a8c7d3fc", "Slutdatoen skal være efter startdatoen"),
                t("b335d507", function (e) {
                    return "Overskredet maksimal tegnlængde på " + e.maxChars;
                }),
                t("j29ab120", "Skjul meddelelser fra personer:"),
                t("jdfc82f6", "Du ikke følger"),
                t("cfcda0e6", "Som ikke følger dig"),
                t("c75b9b2a", "Med en ny konto"),
                t("f39b9c9e", "Som har et standardprofilbillede"),
                t("d227f940", "Som ikke har bekræftet deres e-mail"),
                t("b210936e", "Som ikke har bekræftet deres telefonnummer"),
                t("ed0df10b", "Lær mere"),
                t("dcef34ac", "Slå til"),
                t("a39f706e", "Din browser understøtter ikke pushmeddelelser"),
                t("h4f20d0e", "Få pushmeddelelser for at finde ud af, hvad der sker, når du ikke er på X. Du kan slå dem fra når som helst."),
                t("cdce0394", "Dette valg gælder for alle konti, mens du bruger det i denne browser."),
                t("b39bcae2", "Slå pushmeddelelser til"),
                t("b50f6144", "Slå pushmeddelelser til for at få meddelelser med det samme. Du får dem også, når du ikke er på X. Du kan til enhver tid slå dem fra."),
                t("fe11b3ea", "Browser understøttes ikke"),
                t("a1245d3a", "Det ser ud til, at din browser ikke understøtter pushmeddelelser."),
                t("f580c738", "Slå meddelelser til?"),
                t("i951fbcc", "Hvis du vil modtage meddelelser fra X, skal du først tillade dem i dine browserindstillinger."),
                t("ec7cb554", "Når du aktiverer post-meddelelser fra personer, du følger, får du pushmeddelelser om deres posts eller direkte videoer."),
                t("b68050dc", "Vis brugere"),
                t("af045060", "Relateret til dig og dine posts"),
                t("cf378ff8", "Fra X"),
                t("f823bbbe", "Kun for verificerede konti"),
                t("a40e37f2", "Få e-mails for at finde ud af, hvad der sker, når du ikke er på X. Du kan slå dem fra når som helst."),
                t("e8eb54a0", "Ugentlige rapporter om din konto"),
                t("ib80b0f2", "Nye meddelelser"),
                t("ba58e6b0", "Posts modtaget via e-mail"),
                t("fae2c81a", "Top-posts og historier"),
                t("f7b09bb4", "Opdateringer om effekten af dine posts"),
                t("d3978554", "Nyheder om X-produkt- og funktionsopdateringer"),
                t("bdccb81c", "Tips til at få mere ud af X"),
                t("c3d47fe6", "Ting, du er gået glip af, siden du sidst loggede ind på X"),
                t("af8caf3e", "Nyheder om X i partnerprodukter og andre tredjepartstjenester"),
                t("hc076ee4", "Deltagelse i X's forskningsundersøgelser"),
                t("ddfe3776", "Forslag til anbefalede konti"),
                t("d17ba8c2", "Forslag baseret på dem, du senest er begyndt at følge"),
                t("bcf50a1a", "Tip om X's produkter til virksomheder"),
                t("fcad1e2e", "Dagligt"),
                t("h9e0dfde", "Ugentligt"),
                t("e26d98ac", "Periodisk"),
                t("h0c94842", "Vær informeret"),
                t("c460d332", "Når du slår post-meddelelser til for en konto, får du besked, når vedkommende poster, går på direkte og er vært for et Rum."),
                t("a820d092", "Indlæser følger"),
                t("ha45c9e4", "Post-meddelelser"),
                t("bdbf8f4e", "Indtast ord eller sætning"),
                t("h43e2ea8", "Skjult ord"),
                t("da8c0440", "Skjul fra"),
                t("defb4aaa", "Fra enhver"),
                t("e7d47b00", "Fra personer, du ikke følger"),
                t("d9d6e10e", "Varighed"),
                t("gfa5008e", "Forlæng skjult tid"),
                t("c5595dfe", "Skift skjult tid"),
                t("he6804e0", "Indtil du viser ordet"),
                t("a268406c", "24 timer"),
                t("fc638aa2", "7 dage"),
                t("b8971cfa", "30 dage"),
                t("cc7bedfc", "Du kan ændre mængden af tid dette er skjult. Hvis du tidligere har valgt “For altid” vil din ændrede tid starte med det samme."),
                t("d768049c", "Tilføj skjult ord"),
                t("c6203da8", "Valgmuligheder for skjult ord"),
                t("e3f0d3db", function (e) {
                    return 'Skjulte "' + e.keyword + '"';
                }),
                t("h5746cf7", function (e) {
                    return 'Opdaterede "' + e.keyword + '"';
                }),
                t("d2693eb8", "Sørg venligst for at din skjulte sætning ikke er længere end 140 tegn."),
                t("f8488024", "Dette er et ret almindeligt ord, som vises i mange posts, men du kan skjule det, hvis du vil."),
                t("deb4924d", "Lær mere"),
                t("aa09e528", "Tilføj skjulte ord"),
                t("e506aa92", "Tilføj skjult ord eller sætning"),
                t("cbd04965", function (e) {
                    return 'Vis "' + e.keyword + '" igen';
                }),
                t("eb4e810a", "Udløbet"),
                t("cabeb6c2", "For altid"),
                t("f9bce916", "Skjul ord"),
                t("gfe0ee3b", "Læs mere"),
                t("ba4aaa9e", "Vis sætning?"),
                t("f837ed7e", "Denne sætning er nu tilladt i dine meddelelser op på forsidetidslinjen."),
                t("a6194d10", "Indlæser skjulte konti"),
                t("bcf6ad9a", "Posts fra skjulte konti bliver ikke vist på din forsidetidslinje. Skjul konti direkte via kontoens profil eller post."),
                t("b8e49590", "Når du skjuler konti, bliver beskederne filtreret og vist nederst på listen over beskedanmodninger."),
                t("ec202165", "Lær mere"),
                t("gde6b425", function (e) {
                    return e.name + " skjules";
                }),
                t("e308019b", function (e) {
                    return e.name + " vises igen";
                }),
                t("hfb77cf6", "Sikkerhed"),
                t("f350f0c0", "Anbefalinger"),
                t("fd3369a2", "Vælg, hvilke sprog, som anbefalinger til posts, personer og trends skal omfatte."),
                t("hfc86556", "Skjult"),
                t("dae57a42", "Tillad alle"),
                t("i7cbc154", "Tillad nogle"),
                t("d623aecc", "Del en konto med personer, der har uddelegerede roller."),
                t("f3029d5c", "Når denne indstilling er slået til, kan folk invitere dig til at dele deres konto."),
                t("cd1305e8", "Tillad, at andre inviterer dig til deres konto"),
                t("j339ef22", "Tillad, at alle kan invitere dig"),
                t("g4b0c2dc", "Tillad kun invitationer fra personer, du følger"),
                t("d9aef256", "Dine uddelegeringer"),
                t("afb3ccf6", "Tillad ikke"),
                t("dfae5248", "Tillad ikke, at andre inviterer dig til deres konto"),
                t("b9c91524", "Fremover modtager du ikke invitationer til andre uddelegeringer. Du vil stadig kunne få adgang til eksisterende uddelegeringer."),
                t("c349b958", "Inviter et medlem"),
                t("e177f72a", "Inviter andre til at handle på vegne af din konto og administrere kontoroller. Medlemmer kan sende direkte beskeder, udgive posts og oprette Lister – samt få dem vist."),
                t("cd5c5e73", function (e) {
                    return "Du må kun have " + e.numDelegatesLabel + " uddeleger" + i(e.numDelegates, "et", "inger");
                }),
                t("efee0a50", "Inviter et medlem til denne konto"),
                t("ja0a1aa6", "Inviter en bidragyder til denne konto"),
                t("db4f623a", "Tildel en rolle til dette medlem"),
                t("be7350e3", function (e) {
                    return "Tildel @" + e.screenName + " som admin?";
                }),
                t("b7aa7642", "Invitation sendt"),
                t("edbca224", "Send invitation"),
                t("f4834ca6", "Inviter et nyt medlem"),
                t("cb04a824", "Bidragyder"),
                t("d4b3abde", "Bidragydere kan sende direkte beskeder, udgive posts og oprette Lister. Bidragydere kan også se kontoens direkte beskeder, posts og Lister."),
                t("b92e2700", "Administratorer har de samme tilladelser som bidragydere. De kan også invitere eller fjerne bidragydere og se post-statistik."),
                t("hbbbf908", "Administratorer kan invitere andre bidragydere til denne konto og se post-statistik. Dobbelttjek, at du tildeler rollen til den rigtige person."),
                t("d8eda249", function (e) {
                    return "Når @" + e.screenName + " accepterer invitationen, kan vedkommende bidrage til denne konto med de opdaterede tilladelser.";
                }),
                t("b5faf216", "Dette medlem tillader ikke invitationer til uddelegering."),
                t("hcc3b4ce", "Dette medlem blokeres af din konto."),
                t("ace0f0a4", "Dette medlem begrænser, hvem der kan invitere vedkommende til uddelegering."),
                t("c2e8f726", "Administratorer"),
                t("fade0942", "Administratorer kan også invitere eller fjerne bidragydere til kontoen og se post-statistik."),
                t("b7d6e5d6", "Bidragydere"),
                t("cd76a282", "Ingen medlemmer er tilføjet endnu"),
                t("db25d796", "Skift rolle for dette medlem"),
                t("e4133790", "Rolle opdateret"),
                t("a1a27c26", "Skift rolle"),
                t("fd7b1b1c", "Gå tilbage"),
                t("ec67d021", function (e) {
                    return "@" + e.screenName + " kan handle på vegne af denne konto med vedkommendes nye tilladelser.";
                }),
                t("h502484e", "Ventende invitation"),
                t("a171ca7c", "Annuller invitation af medlem"),
                t("f68f079c", "Skift rolle"),
                t("b2794e9e", "Fjern fra gruppe"),
                t("gca83d6a", "Vedkommende vil ikke længere være admin på denne konto."),
                t("b8cac21c", "Vedkommende vil ikke længere være bidragyder på denne konto."),
                t("hd67c2e8", "Annuller invitation"),
                t("f0bd8ca9", function (e) {
                    return "Fjern @" + e.screenName + "?";
                }),
                t("a33eba47", function (e) {
                    return "Annuller invitation af @" + e.screenName + "?";
                }),
                t("d472c9eb", function (e) {
                    return "@" + e.screenName + " blev fjernet fra gruppen";
                }),
                t("h5951997", function (e) {
                    return "@" + e.screenName + " ikke inviteret";
                }),
                t("a44c6034", "Ventende invitationer"),
                t("e39bc936", "Som medlem kan du sende direkte beskeder, udgive posts og oprette Lister – samt få dem vist. Administratorer kan også invitere eller fjerne bidragydere til kontoen og se post-statistik."),
                t("h0d3bddc", "Administratoradgang"),
                t("c54aafb0", "Bidragyderadgang"),
                t("idc35f32", "Ingen konti er blevet uddelegeret til dig"),
                t("fab787b4", "Forlad konto"),
                t("bfbe9620", "Vis medlemmer"),
                t("d52a2b36", "Du vil ikke længere være admin på denne konto."),
                t("df515932", "Du vil ikke længere være bidragyder på denne konto."),
                t("cd00ea21", function (e) {
                    return "Forlad @" + e.screenName + "?";
                }),
                t("efa88ab1", function (e) {
                    return "@" + e.screenName + " tilbage";
                }),
                t("c6dae164", "Accepter invitation"),
                t("f8376170", "Afvis invitation"),
                t("a68c45e4", "Afvis"),
                t("aa35b48d", function (e) {
                    return "Afvis invitation fra @" + e.screenName + "?";
                }),
                t("ed2a4b05", function (e) {
                    return "Afviste medlemsinvitation til @" + e.screenName;
                }),
                t("e73f9635", function (e) {
                    return "Accepterede medlemsinvitation til @" + e.screenName;
                }),
                t("d2da668c", "Uddelegerede medlemmer"),
                t("ddf27b8e", "Inviter en bidragyder"),
                t("jba63182", "Vis medlemsroller på kontoen. Medlemmer kan sende direkte beskeder, udgive posts og oprette Lister – samt få dem vist."),
                t("af59527e", "Vis medlemsroller, og inviter bidragydere til kontoen. Medlemmer kan sende direkte beskeder, udgive posts og oprette Lister – samt få dem vist."),
                t("eafcc76a", "Ting denne app kan vise ..."),
                t("j3998a16", "Ting denne app kan gøre ..."),
                t("a6845663", function (e) {
                    return "Du godkendte disse apptilladelser den " + e.date;
                }),
                t("b2347f7c", "Indlæser applikationsdata"),
                t("e1fda16e", "Du har ikke forbundet denne app"),
                t("b8f3ed46", "Når du forbinder et tredjepartsprogram med din X-konto, giver du programmet tilladelse til at bruge din konto."),
                t("gb8d09ba", "Har adgang til din e-mailadresse"),
                t("g6dc09a0", "Tilladelser"),
                t("a6e6e898", "Skrivebeskyttet"),
                t("cde3b9ae", "Læse og skrive"),
                t("g0d7813a", "Læse, skrive og direkte beskeder"),
                t("c9b35b9e", "Læse dine annonceringsdata"),
                t("e0191264", "Læse, oprette og administrere dine annonceringsdata"),
                t("b73e1e8a", "Find ud af, hvordan du tilbagekalder adgang"),
                t("c174e46e", "Vis mindre"),
                t("a39075ff", function (e) {
                    return e.n + " mere";
                }),
                t("da6cdba8", "Tilbagekald apptilladelser"),
                t("ef1d3dcc", "Indberet applikation"),
                t("d64e29c6", "Log den viste enhed ud"),
                t("idfa01cc", "Vil du logge den viste enhed ud?"),
                t("f400075e", "Dette gør, at den aktive X-session afsluttes. Du skal logge ind igen for at starte en ny."),
                t("e04ba39c", "Dato og klokkeslæt"),
                t("eed75824", "Du har afsluttet din aktive X-session."),
                t("ddcd3d26", "Indlæser sessionsdata"),
                t("d2f0f3fe", "Vi kan ikke finde denne session"),
                t("ga05517a", "Du har ikke oprettet nogen indberetninger"),
                t("ea1715c0", "Når du gør det, vises de her."),
                t("b70a2cde", "Vi bruger teknologi til at hjælpe os med at identificere ømtåleligt indhold, og selvom vi hele tiden bliver bedre, laver vi også sommetider fejl."),
                t("ee320a07", "politik for ømtåleligt indhold"),
                t("ffeb836a", "Indstillinger er ikke tilgængelige"),
                t("f2fb9746", "Disse indstillinger er ikke tilgængelige, fordi de gælder for unødvendige cookies. Da du allerede har fravalgt dem, bruger vi kun cookies, der indsamler nødvendige data fra din enhed."),
                t("aa4342be", "Eksplicit vold"),
                t("jfec3aa0", "Voksenindhold"),
                t("j6bacd6a", "Skjul indhold, der er markeret som eksplicit vold, indtil du vælger at se det. På X til iOS bliver dette medie slet ikke vist."),
                t("a73e66a8", "Skjul indhold, der er markeret som voksenindhold, indtil du vælger at se det. På X til iOS bliver dette medie slet ikke vist."),
                t("fef1b8dc", "Skjul indhold, der er markeret som ømtåleligt, indtil du vælger at se det. På X til iOS bliver dette indhold slet ikke vist."),
                t("d0a5a1c0", "Advar"),
                t("ga197e26", "Vis alle"),
                t("eb723386", "Vis aldrig dette"),
                t("ea31c622", "Dette inkluderer alt indhold, der viser dødsfald, vold, alvorlig fysisk skade eller medicinske indgreb i eksplicitte detaljer."),
                t("e40985c4", "Dette omfatter indhold, der oprettes og deles med samtykke, og som er pornografisk eller har til formål at forårsage seksuel ophidselse."),
                t("h7e0672b", "medieindstillinger"),
                t("de9f111a", "Administrer dit nuværende abonnement"),
                t("d5839f9e", "Gennemgå vilkår, eller administrer dit abonnement fra din Stripe-konto."),
                t("a840c22c", "Administrer eksisterende Premium-abonnement"),
                t("e31456f8", "Skift niveau"),
                t("a7c4ecea", "Oplev en annoncefri Til dig-tidslinje, lås op for alle funktioner, og få det største svar-boost."),
                t("h15cc518", "Undersøg de forskellige niveaumuligheder, og vælg mellem et måneds- eller årsabonnement."),
                t("ce70c590", "Administrer tilknytningsbadges"),
                t("a49e1b2a", "Sortér dine tilknytninger"),
                t("e2daf93c", "Det første badge bliver vist på alle posts."),
                t("ab8089ea", "Omroker"),
                t("e0221c42", "En bedre læseoplevelse på og uden for X."),
                t("adcaa214", "Se de mest delte artikler fra personer, du følger."),
                t("b62d6e4c", "Læser"),
                t("acf63cd2", "Vælg den tekststørrelse, du foretrækker til læsning af tråde. Slå Læser-funktionen til ved at vælge bogknappen fra en post i en tråd."),
                t("e5fff0c8", "Dit abonnement er aktivt."),
                t("ac057b4e", "Hvis du vil opsige dit gratis abonnement på at interagere på X, skal du kontakte support"),
                t("ib8ebf3b", function (e) {
                    return "Det ser ud til, at du har købt dette abonnement på en " + e.mobilePlatform + " enhed. Du skal administrere eller annullere dit abonnement fra denne platform.";
                }),
                t("i8132774", "Bonusindhold til dine mest engagerede følgere"),
                t("a1222584", "Tjen penge direkte på dit indhold"),
                t("df837dac", "Estimeret tjent indtægt/grænse for udbetaling"),
                t("df29646e", "Udbetalingsgrænse"),
                t("b0ac642a", "Der kan gå op til 90 dage, før udbetalinger bliver overført til din konto."),
                t("c747df1c", "Opret udbetalingsoplysninger"),
                t("ac814a76", "Du har endnu ikke oprettet udbetalingsoplysninger."),
                t("f139168e", "Kontrolpanel for indtjening"),
                t("ee0510c2", "Udbetalingshistorik"),
                t("c9b82b4c", "Ansøgning godkendt · Opret dit abonnement"),
                t("ibb5e1c8", "Ansøgning afvist"),
                t("b255df58", "Ansøgning sendt · Venter på at blive gennemgået"),
                t("b3f834c8", "Ansøgningen er på venteliste"),
                t("i14be2c6", "Anslået indtjening"),
                t("fd74390a", "Skaber-id verificeret"),
                t("e8dc82e2", "Aktive programmer"),
                t("c12c5eb6", "Tilgængelige programmer"),
                t("j53f5eb0", "Kvalificerede skabere kan tilmelde sig månedlige abonnementer og deling af annonceindtægter."),
                t("e9c1273a", "Kvalificerede skabere kan tilmelde sig månedlige abonnementer og indtægtsdeling for skabere."),
                t("jd176c82", "Udbetalinger understøttes ikke i dit område"),
                t("d6ff74ca", "Desværre understøtter vores betalingsudbyder endnu ikke udbetalinger i dit land. Nogle indtægtsgenereringsprogrammer er ikke tilgængelige."),
                t("e89cdac0", "Administrer udbetalingskonto"),
                t("dd7a54b4", "Opsætning af din Stripe-konto"),
                t("jff3ab68", "Identitetsverifikation"),
                t("j2876824", "Verificer identitet"),
                t("ebd06fb0", "Id indsendt"),
                t("f65b960c", "Vi gennemgår dit myndighedsudstedte id for programmet for skabere."),
                t("i4a1e936", "For at få udbetalinger skal du sørge for enten at linke en Stripe-konto eller oprette en ny"),
                t("f5931b6a", "Identitetsverifikation er påkrævet for at deltage i programmet for skabere. Hvis du tidligere har indsendt dit id til programmet for skabere, behøver du ikke at indsende det igen."),
                t("c8798a95", "her"),
                t("d809ac49", "her"),
                t("bbe09d38", "Ansøgning godkendt · Afventer konfiguration i app stores"),
                t("efbc5066", "Afventer id-verifikation"),
                t("hc7631da", "Du har ikke afsluttet opsætningen af din Stripe-konto"),
                t("h72d71a2", "Kvalificeret"),
                t("e12b0b16", "Endnu ikke kvalificeret"),
                t("a1e57106", "Ikke udfyldt"),
                t("i51b4e22", "Afvist"),
                t("h5bd7160", "Denne konto er ikke kvalificeret til id-verificering."),
                t("e32040c4", "Du skal gennemføre id-verifikationen, hvis du vil modtage udbetalinger."),
                t("j8769b42", "Vi gennemgår dit myndighedsudstedte id."),
                t("be955554", "Indtægtsdeling for skabere"),
                t("b03a3d62", "Deling af annonceindtægter"),
                t("cbbe29c2", "Du er på rette vej til udbetalinger"),
                t("g97a2d6c", "Lær mere"),
                t("f30774ea", "Lær mere om vores programmer og politikker for indtægtsgenerering her."),
                t("aea0b11a", "Tjen penge på X ved at lade alle abonnere på dit månedlige indhold."),
                t("bce47f48", "Tjen penge på interaktioner med dine posts på X."),
                t("h7a68080", "Tjen penge på de annoncer, der vises i svarene på dine indlæg."),
                t("eefd091e", "Identitetsverifikation påkrævet"),
                t("cd616a5a", "Identitetsverifikation er påkrævet for at deltage i programmet for skabere."),
                t("cce8c40a", "Verificer id"),
                t("ja73ebac", "Indtægter"),
                t("h16eeb42", "Administrer"),
                t("bc43a32e", "Seneste aktivitet"),
                t("i4c3b046", "Du har ingen nye mønter på nuværende tidspunkt."),
                t("ca516a66", "Se al aktivitet"),
                t("ee9ea930", "Diamanter"),
                t("cf3b535e", "Diamanter akkumuleres ved at modtage mønter fra kvalificerede posts. Penge tjent i form af diamanter føjes til din anslåede indtjening."),
                t("fbb7764b", function (e) {
                    return e.count + " Mønt" + i(e.count, "", "er");
                }),
                t("e70a07b2", "Anonym"),
                t("c76972f0", "Siden sidste udbetaling"),
                t("c219a552", "Hele perioden"),
                t("f3ce76c0", "Har du brug for mere hjælp?"),
                t("i8982e7e", "Hvis du har spørgsmål, kan du besøge vores hjælpecenter eller kontakte os."),
                t("fbbfe8aa", "Deaktiver Mønter"),
                t("e4f29140", "Ved at deaktivere bliver du fjernet fra Mønter-programmet og er ikke længere kvalificeret til at modtage mønter."),
                t("e58e85d2", "Fortsæt til deaktivering"),
                t("be8e87b4", "Deaktiver Mønter?"),
                t("bee26fa8", "Ja, deaktiver"),
                t("f0145c9a", "Mønter er nu deaktiveret"),
                t("a22f6808", "Al aktivitet"),
                t("g1b8020c", "Sidste 30 dage"),
                t("jb13b840", "Hele perioden"),
                t("b4f24360", "Du har ingen nye mønter inden for de sidste 30 dage."),
                t("d59dbf8a", "Sammendrag"),
                t("g652fc4c", "Du har ingen udbetalingshistorik i denne måned."),
                t("d55e017a", "Denne måned"),
                t("f883322d", function (e) {
                    return "Transaktions-id " + e.transactionId;
                }),
                t("d978f43e", "Nye abonnementer"),
                t("d113fc10", "Du har ingen nye abonnementer i øjeblikket."),
                t("h7a41c02", "Fornyelser"),
                t("eedf2eaa", "Du har ingen fornyelser i øjeblikket."),
                t("d93308d8", "Se alle transaktioner"),
                t("a23e724a", "Denne konto er ikke tilgængelig."),
                t("a384fda0", "Abonnementsoversigt"),
                t("i4313618", "Præsentér dig selv, og beskriv, hvad folk kan forvente, når de Super-følger dig."),
                t("c0348964", "Introduktion"),
                t("g522fd30", "Frynsegoder for abonnenter"),
                t("e85471c6", "Abonnerer-badge"),
                t("fd75ca92", "Du får et offentligt abonnerer-badge, der gør det nemmere at blive bemærket, chatte og komme i kontakt med folk."),
                t("ia9c37c4", "Pris"),
                t("f5be83b2", "Deltag i Fællesskabet"),
                t("e4ee8c6a", "Del idéer, få inspiration og kom i kontakt med andre skabere i feedback-Fællesskabet for skabere i Abonnementer."),
                t("i3a90dee", "Deaktiverer abonnementer"),
                t("e261e6e6", "Ved at deaktivere bliver du fjernet fra Abonnementer-programmet, og du mister alle dine abonnenter."),
                t("ca5ca5ee", "Se forhåndsvisning"),
                t("a329ce88", "Tilføj en beskrivelse …"),
                t("f0c99eff", function (e) {
                    return "– @" + e.screenName;
                }),
                t("g40b2b30", "Aktivér forhåndsvisning af post"),
                t("c1521804", "Forhåndsvisninger af dine posts til abonnenter bliver vist til ikke-abonnenter."),
                t("jd0f1ac0", "Deaktiver abonnementer?"),
                t("c6c27fc8", "Deaktivering af abonnementer er permanent. Du vil blive fjernet fra abonnementsprogrammet. Hvis du vil vende tilbage til programmet, skal du ansøge igen."),
                t("f82a23ec", "Abonnementer er nu deaktiveret"),
                t("a4c6e458", "Du har sat din månedlige abonnementspris til:"),
                t("be54a313", function (e) {
                    return e.price + "/md.";
                }),
                t("hadd463a", "Anmod om prisændring"),
                t("b0728b5c", "Annuller prisændring"),
                t("aea9f79c", "Du har en afventende prisændring til:"),
                t("c701e5cc", "De ændringer, du har foretaget, bliver ikke gemt."),
                t("a649778c", "Fortsæt med at redigere"),
                t("d1a683b8", "Læs mere om abonnement-skabere"),
                t("iba08a94", "Hvordan ser det hele ud?"),
                t("a5f55bfa", "Dette er, hvad potentielle abonnenter ser, når de besøger din side. Du kan altid vende tilbage og opdatere dine beskrivelser."),
                t("b600eb88", "Find din flok, og bliv genkendt"),
                t("da48ebf6", "Få bonusindhold, når du tilmelder dig"),
                t("f324fb6c", "Abonnement"),
                t("c654a3aa", "Kun abonnenter kan se denne post"),
                t("d409ce3c", "Støt dine foretrukne personer på X for at få bonusindhold og ekstra frynsegoder."),
                t("a4ed9072", "Tilføj en introduktion …"),
                t("af5b098e", "Frynsegoder for abonnementer"),
                t("gf32cca2", "Beskriv de frynsegoder, du tilbyder"),
                t("j8ba99b4", "Giv folk en forsmag på, hvad der venter dem hver måned, med et hurtigt resumé af det bonusindhold, du deler."),
                t("j679dcda", "Se eksempler"),
                t("j325331a", "Tag dig tid til at sige hej"),
                t("e18e8da8", "Giv et godt førstehåndsindtryk med en kort introduktionsbesked til dine potentielle abonnenter."),
                t("fce14f56", "Ny pris"),
                t("b0c58272", "Vælg en ny månedlig pris. Det tager 3-7 hverdage at behandle prisændringer. Prisstigninger kan kræve, at eksisterende abonnenter skal tilmelde sig."),
                t("d5737f0e", "Månedligt abonnement"),
                t("edc014fb", "Læs mere"),
                t("h810143c", "Detaljer"),
                t("ga57b610", "Købsdato"),
                t("h3b68828", "Købstype"),
                t("cc2aa67a", "Købsplatform"),
                t("b313bb24", "Betaling"),
                t("e5188502", "Køb kan ikke fortrydes"),
                t("bf364d62", "Alle transaktioner"),
                t("ed3efef0", "Du har ingen nye abonnementer inden for de sidste 30 dage."),
                t("b5f9ec14", "Du har ingen fornyelser inden for de sidste 30 dage."),
                t("d8eed490", "Administrer udseendet af din offentlige profil."),
                t("e26dbcd0", "Skjul dine skaber-abonnementer"),
                t("aea7dda8", "Din liste over skaber-abonnementer på din profil kan kun ses af dig."),
                t("j3d2cfc4", "Lad følgere se, hvilke Rum du lytter til"),
                t("d9588ae6", "Husk, at selvom denne indstilling er slået fra, er du synlig for alle, når du er i et Rum. Dine følgere kan altid se, hvilke Rum du er vært for, medvært for eller taler i."),
                t("i84c5de8", "Skaberansøgninger kommer snart"),
                t("b8922f7e", "Vend snart tilbage, for at få muligheden for at ansøge om at deltage i abonnement-programmet."),
                t("ad588be6", "Du er kvalificeret!"),
                t("f6443bd2", "Godt nyt - du opfylder vores kvalifikationskrav for at kunne deltage i abonnementer. Er du klar til at ansøge?"),
                t("a3a20a10", "Kom tilbage senere."),
                t("b8d29e4a", "Desværre opfylder du ikke vores kvalifikationskrav til abonnementer på nuværende tidspunkt."),
                t("d92c1d0a", "Fortsæt til appen"),
                t("fde27650", "vilkårene for abonnementer"),
                t("c5f89b06", "Bliv verificeret ved at abonnere på Premium"),
                t("ff9f4475", function (e) {
                    return e.minFollowersCount + " verificerede følgere";
                }),
                t("b747ce3a", "Aktiv i de sidste 30 dage"),
                t("c27f57ac", "Være mindst 18 år gammel"),
                t("h63d2973", function (e) {
                    return e.count + " organiske eksponeringer i de seneste 3 måneder";
                }),
                t("ef606fca", "Betalte abonnementer til dine mest engagerede følgere"),
                t("e533715e", "Tjek kvalificering"),
                t("d8671da2", "Gør X til din levevej"),
                t("d126a504", "Giv dine foretrukne følgere lidt ekstra, og tjen penge hver måned. "),
                t("d08d0bb2", "Bonusindhold"),
                t("ef29d2c2", "Del sporadiske tanker, idéer og holdninger med ekstra posts og personlige svar."),
                t("if12af7c", "Konfiguration af abonnementer"),
                t("cc4c1a14", "Konfiguration af pris"),
                t("e1453e45", "Lær mere"),
                t("aa7e35ee", "Din konto blev ikke valgt"),
                t("c984cc62", "Din konto blev ikke valgt denne gang. Hold øje med fremtidige muligheder for at deltage."),
                t("gd115e64", "Ansøg om abonnementer"),
                t("a9f08d5c", "Dine svar på nedenstående spørgsmål er til vores gennemgang og vil ikke blive vist på din profil."),
                t("c3f8d650", "Beskriv dit indhold"),
                t("j89dd344", "Giv et eksempel på det indhold, der skal indgå i dit abonnement – jo mere specifikt, jo bedre."),
                t("d19cc490", "Tilføj et eksempel på indholdet"),
                t("c737c1b2", "Fortæl os om din oplevelse"),
                t("f98e5fd4", "Skaber du betalt indhold på andre platforme? Hvorfor tror du, at brugerne vil abonnere?"),
                t("c41b01be", "Tilføj en salgstale"),
                t("e2aad0fe", "Jeg vil ikke sende eksplicit eller voksenindhold til abonnenter"),
                t("d1b983ef", function (e) {
                    return "Skal være på mindst " + e.count + " tegn";
                }),
                t("d3d6c52c", "Din ansøgning er blevet sendt"),
                t("cb27c0ba", "Vi har bekræftet din pris. Din ansøgning vil blive gennemgået, og hvis du bliver godkendt, sender vi dig en meddelelse, så snart den er på direkte."),
                t("j274e6aa", "Du er på venteliste"),
                t("j006be54", "Vores abonnementer-testgruppe er allerede fuld, men vi har tilføjet dig til ventelisten og vi vender tilbage, så snart der er ledige pladser igen."),
                t("d5cb1114", "Kom i gang med Abonnementer"),
                t("j2f622ec", "Du er blevet udvalgt til vores testgruppe! Hvis du opretter dine abonnementsoplysninger nu, giver vi dig besked, når det er på direkte."),
                t("e2cd7000", "Du er næsten klar ..."),
                t("b3629b92", "Du mangler kun nogle få trin for at afslutte opsætningen af dit abonnement."),
                t("f4619a62", "Accepter og fortsæt"),
                t("c5625f84", "Beskriv dine frynsegoder for abonnementer"),
                t("c7289544", "Angiv en abonnementspris"),
                t("aaf68c58", "Bekræft dine udbetalingsoplysninger"),
                t("b8a69fa0", "vilkårene for abonnementer"),
                t("ad4a92a2", "Badge"),
                t("d5aa8de0", "Giv dine abonnenter badges"),
                t("j0bbda92", "Der er ikke noget at ændre eller redigere her. Alle dine abonnenter får et offentligt badge, når de abonnerer på din konto."),
                t("e18b7a72", "Gennemgå"),
                t("be76dc34", "Tilføj en beskrivelse"),
                t("ef5406e4", "Tilføj introduktion"),
                t("ea8a3d2e", "Prismodel"),
                t("f77bb179", function (e) {
                    return "Bekræft dit " + e.price + " valg";
                }),
                t("g2a6f160", "Dobbelttjek og bekræft din abonnementspris. Når du har angivet prisen, kan du ikke vende tilbage og ændre den senere."),
                t("g767d1c9", "Bemærk: Du kan ikke ændre det"),
                t("df057690", "Vælg, hvor meget dine abonnenter skal betale"),
                t("g5923869", function (e) {
                    return e.price + " pr. måned";
                }),
                t("f025ab3a", "Opbyg en større og bredere følgerskare"),
                t("c962df0e", "Lavt niveau af udgivelser og interaktion med abonnenter"),
                t("ib075804", "Udvid din følgerskare, og maksimer dine indtægter"),
                t("fc04f3a6", "Moderat niveau af udgivelser og interaktion med abonnenter"),
                t("c246656e", "Opbyg en følgerskare med nære relationer"),
                t("h0c5405c", "Højt niveau af udgivelser og interaktion med abonnenter"),
                t("f2d2153d", function (e) {
                    return "De fleste skabere tager " + e.price + ", men du kan vælge den pris, du ønsker";
                }),
                t("f1cb36b8", "Opsætning af udbetaling"),
                t("e20f6662", "Nu er du klar!"),
                t("g88e146c", "Your account is pending"),
                t("dfe973a6", "Thanks for providing your payout details. You’ll receive a notification with next steps as soon as Stripe has reviewed your information."),
                t("ja884230", "Opret dine udbetalingsoplysninger"),
                t("a3f6a966", "Tilknyt Stripe-konto"),
                t("cb031e44", "Du vil blive sendt til Stripe for at tilknytte din konto. Hvis du har en eksisterende Stripe-konto, du gerne vil bruge, skal du indtaste e-mailadressen på den konto, når Stripe beder dig om en e-mail. Bemærk: E-mailadressen til din Stripe-konto kan være en anden end e-mailadressen til din X-konto."),
                t("ebfb897c", "Eksempler"),
                t("dc4feb1a", "Ved du ikke, hvad du skal sige?"),
                t("h9b9d486", "Hvilken slags indhold, du tilbyder dine abonnenter, er helt op til dig. Her er nogle eksempler, der kan hjælpe dig med at komme i gang."),
                t("ic130fd6", 'Du får fedt indhold fra bag kulisserne, smugkig på mine bøger og andre projekter og månedlige "spørg mig om alt"-sessioner.'),
                t("dd913e24", "Du er klar til uforbeholdne meninger, sporadiske tanker og ekstra indhold fra undertegnede."),
                t("b737ee66", "Gør dig klar til en VIP-oplevelse. Tænk: indhold kun for abonnenter såsom afstemninger, videoer og tilbud."),
                t("a0bb2076", "Gør din intro kort og venlig, du kan beskrive dit indhold senere. Her er et par eksempler, der kan hjælpe dig i gang."),
                t("fe076612", "Hej og velkommen til min abonnementsside! Jeg er meget glad for at se dig her. Tak, fordi du giver mig muligheden for at gøre det jeg elsker."),
                t("g7f66daa", "Hvad så alle sammen? Tak, fordi du tjekkede mit abonnement ud. Jeg er helt sikker på, at du bliver vild med det, som jeg kan tilbyde."),
                t("hbe4f99e", "Hejsa! Jeg glæder mig til at dele noget tophemmeligt indhold og lære jer endnu bedre at kende :)"),
                t("fb278c82", "Hvad er denne forhåndsvisning?"),
                t("j6cab6ec", "Dette er hvad folk kan se inden din abonner på dig. Tilpas og redigerer din beskrivelse indtil den er perfekt."),
                t("i22beaa4", "Deling af data"),
                t("e110a46c", "Slet samtalehistorik"),
                t("ebc4fda0", "Du er ved at slette din Grok-samtalehistorik. Du vil ikke kunne få adgang til disse samtaler igen."),
                t("c90fe716", "Vil du slette dine samtaler?"),
                t("a8d516a4", "X må dele dine offentlige data på X med xAI samt dine brugerinteraktioner, input og resultater med Grok på X til træning og finjustering af Grok og andre AI-modeller, der er udviklet af xAI. Dette hjælper os med løbende at forbedre brugeroplevelsen."),
                t("a127886c", "Lad Grok huske din samtalehistorik"),
                t("f49b39b8", "Lad Grok huske oplysninger fra dine tidligere samtaler. Du kan slette individuelle samtaler for at glemme de tilknyttede oplysninger."),
                t("b7de9ad2", "Tillad X at personliggøre din oplevelse med Grok"),
                t("ed141096", "Tillad, at dine X-data samt dine interaktioner, input og resultater med Grok bruges til at personliggøre din Grok-oplevelse. X deler muligvis dine X-data med xAI såvel som dine brugerinteraktioner, input og resultater med Grok for at personliggøre din oplevelse med Grok og andre AI-modeller udviklet af xAI. Dette hjælper os med løbende at forbedre din brugeroplevelse. "),
                t("ecdbece0", "Du er blevet tilmeldt Mønter-programmet."),
                t("db3f0bbe", "Hjælper skabere med at tjene penge på deres indhold."),
                t("a1f40cf8", "Enig"),
                t("d604fb32", "vilkårene for skabere"),
                t("d520d188", "Modtag mønter"),
                t("ea770766", "Mønter er virtuelle varer, der kan modtages for kvalificerede posts. Når du modtager mønter, akkumuleres de til diamanter, som kan udbetales."),
                t("d27f5ac6", "Passiv indkomst"),
                t("h1d66df0", "Tjen penge blot ved at udgive fantastisk indhold på X. Dine følgere kan nu belønne dig ved at give dig mønter."),
                t("f85fb0a2", "Forbind med din målgruppe"),
                t("d1433e24", "Mønter er en sjov måde, hvorpå fans kan belønne dig for at lave det indhold, de nyder mest. Det er din mulighed for at blive tættere forbundet med dine følgere og fans."),
                t("e6ba42de", "Andel af annonceindtægter"),
                t("ebc16756", "Indtægtsdel. for skabere"),
                t("da4cd6fa", "Desværre er du endnu ikke berettiget til Andel af annonceindtægter. Du skal opfylde nedenstående krav for at deltage:"),
                t("b2961492", "Desværre er du endnu ikke berettiget til indtægtsdeling for skabere. Du skal opfylde nedenstående krav for at deltage:"),
                t("d3789528", "Om Andel af annonceindtægter"),
                t("aa0ff456", "Om Indtægtsdeling for skabere"),
                t("bf214f48", "OK"),
                t("b2b4d592", "Abonner på Premium eller Verificerede organisationer"),
                t("fbb03ba6", "500 Premium-følgere"),
                t("hb4c5169", function (e) {
                    return "Have haft mindst " + e.impression_number + " mio. eksponeringer af dine posts inden for de sidste 3 måneder";
                }),
                t("f91685ba", "Du er automatisk kvalificeret til at få betaling for dine indlæg!"),
                t("a9f0e0fa", "Som abonnent på Premium eller Verificerede organisationer er du automatisk kvalificeret til deling af annonceindtægter. Din udbetaling er baseret på antallet af verificerede eksponeringer af annoncer, der vises i svarene på dine posts."),
                t("c694e3e4", "Som abonnent på Premium eller Verificerede organisationer er du automatisk kvalificeret til Indtægtsdeling for skabere."),
                t("acd1a1be", "Opret dine udbetalingsoplysninger nu for at modtage fremtidige udbetalinger."),
                t("f7e11f70", "Deltag og verificer id"),
                t("c8169274", "Der opstod et problem med at gemme din ansøgning. Prøv igen senere."),
                t("c3f93665", "vilkårene for Indtægtsdeling for skabere"),
                t("a249ce04", "vilkårene for Andel af annonceindtægter"),
                t("d085a144", "Kontrolpanel for skaberindtjening"),
                t("a5204850", "Indtægter i alt"),
                t("ada650cf", function (e) {
                    return "Betalingsperiode: " + e.fromDate + " - " + e.toDate;
                }),
                t("aa732c0a", "Deling af indtægter fra videoannoncer"),
                t("g88c1108", "Om deling af indtægter fra videoannoncer"),
                t("d4bb7e9c", "Vilkår for deling af indtægter fra videoannoncer"),
                t("dc535dbe", "Tjen mere på dit indhold på X ved at tilmelde dig vores program for deling af pre-roll annonceindtægter."),
                t("eb6d9270", "Få penge for dit indhold"),
                t("a778472e", "Detaljer:"),
                t("bde8446e", 'Vælg "Accepterer og indsæt" for at tilmelde dig programmet Andel af annonceindtægter.'),
                t("a415fd3a", "Acceptér og indsend"),
                t("fbba9725", "X-reglerne"),
                t("f3dd8c4a", "vilkårene for deling af annonceindtægter og standarderne for indtægtsgenerering for skabere"),
                t("hd885ae0", "Se din indflydelse"),
                t("je4ccd3a", "Hjælpecenter til reklamefrie artikler"),
                t("i6cb493e", "Administrer, hvordan dine tilknytninger vises"),
                t("e4fde082", "Indstil en timer for fortrydelse af sendte posts, og vælg, hvilken slags posts du vil fortryde."),
                t("dcfc6540", "Originale posts"),
                t("be077e8c", "Tråde"),
                t("f3429f2c", "Afstemninger"),
                t("i647ba8a", "Fortrydelsesperiode for post"),
                t("d195528e", "Vælg, hvilken slags posts du vil fortryde, før de offentliggøres, samt din fortrydelsesperiode."),
                t("bcf3a9e6", "Administrer indstillinger, der hjælper med at begrænse uønskede svar."),
                t("c048fd3a", "Filtrer potentielt uønskede svar fra"),
                t("dab7dac4", "Svar på dine posts, der indeholder potentielt skadeligt eller krænkende sprog, bliver filtreret fra og vist her. Andre kan stadig se disse svar."),
                t("c4c53b86", "Husk, at vi bruger teknologi til at hjælpe os med at identificere sådanne svar, og selvom vi hele tiden bliver bedre, laver vi også sommetider fejl."),
                t("dca3d2ee", "Slå svarfilter fra?"),
                t("fe440ff8", "Filtrerede svar vil ikke blive gendannet til dine posts."),
                t("cedbb01c", "Juridisk"),
                t("b4f917d0", "Diverse"),
                t("bdfa2b8c", "Yderligere ressourcer"),
                t("b8692262", "Tjek andre steder for at finde nyttige oplysninger og få mere at vide om X's produkter og tjenester."),
                t("c0398892", "Produktbemærkninger"),
                t("b833bcde", "Administrer aspekter ved din X-oplevelse, f.eks. begrænsning af farvekontrast og bevægelse. Disse indstillinger påvirker alle X-konti på denne browser."),
                t("d5b646be", "Syn"),
                t("jfe6a3a0", "Bevægelse"),
                t("e8c72272", "Øg farvekontrasten"),
                t("dba2cdd2", "Forbedrer læseligheden ved at øge kontrasten mellem tekst- og baggrundsfarver."),
                t("d070244e", "Reducer bevægelse"),
                t("icfa5e8c", "Begrænser antallet af animationer i appen, herunder engagementsantal i realtid."),
                t("ae41b002", "Begrænser antallet af animationer i appen, herunder engagementsantal i realtid. Dit system signalerer i øjeblikket, at der er behov for at reducere bevægelse. Hvis du vil genaktivere bevægelse, skal du først deaktivere det der."),
                t("h9d1cfae", "Modtag påmindelse om billedbeskrivelse"),
                t("c878e9f8", "Aktiverer en påmindelse om at tilføje billedbeskrivelser, før en post kan sendes."),
                t("bbd1fc7c", "Læs mere om tilgængelighed på X"),
                t("ac865cf0", "Tilgængelighed på X"),
                t("d3a2bde8", "Se oplysninger om din konto, download et arkiv med dine data, eller lær om muligheder for at deaktivere kontoen"),
                t("idca4742", "Se dine kontooplysninger, f.eks. dit telefonnummer og din e-mailadresse."),
                t("b6ded35e", "Skift adgangskode, når du ønsker det."),
                t("cce24bf4", "Få indsigt i, hvilken type af oplysninger, der gemmes om din konto."),
                t("i203df96", "Find ud af, hvordan du deaktiverer din konto."),
                t("f70cd5ee", "Telefon"),
                t("ib6f1694", "Kontooprettelse"),
                t("de323650", "Kvinde"),
                t("b6ab31be", "Mand"),
                t("h3290872", "Verificeret"),
                t("hbd12156", "Anmod om verifikation"),
                t("b7ec04f4", "Ja"),
                t("f70d5780", "Ja."),
                t("dc62d3c6", "Nej."),
                t("a67dbd0a", "Parodi-, kommentar- og fan-konto (PCF)"),
                t("a3db727e", "Administrer din parodi-, kommentar- og fan-konto"),
                t("eacf1990", "Føj din fødselsdato til din profil."),
                t("a3bf1262", "Ændr din fødselsdato på din profil."),
                t("h530db16", "Beskyttede posts"),
                t("d6d80990", "Disse oplysninger gælder for din browser eller enhed, når du er logget ud. Der kan gælde andre oplysninger, når du er logget ind."),
                t("i0d81ddb", " indstillingerne for personlig tilpasning og data"),
                t("g2a9bd3e", "Mærker til automatiseret konto"),
                t("dd9b3aae", "Hvad er en automatiseret konto?"),
                t("b80bdc40", "Automatiserede konti er programmeret til at udføre bestemte handlinger automatisk via X's API. For eksempel at poste vejret for et område. De oprettes og administreres af andre personer på X."),
                t("a01ac9b6", "Mærker fortæller, hvem der administrerer den automatiserede konto. Når ejeren af en automatiseret konto har tilknyttet sin administrationskonto, vises der et mærke på profilen til og posts fra den automatiserede konto."),
                t("b989e1fe", "Skal jeg markere mine automatiserede konti?"),
                t("i2d599aa", "Hvordan markerer jeg mine automatiserede konti?"),
                t("gd5bed72", "Opret en administrationskonto"),
                t("g6d44432", "En administrationskonto er en manuelt administreret konto, der er ansvarlig for en automatiseret konto."),
                t("e20a69e8", "Tilknyt administrationskonto til automatiseret konto"),
                t("d2f88358", "Tilknyt dine konti fra Automatiseringssiden i dine indstillinger."),
                t("e427f632", "Din konto er markeret!"),
                t("a4d7cffa", "Når kontiene er tilknyttet, vises den automatiserede konto med et mærke."),
                t("a18d6a7d", "nye regler"),
                t("e9965c14", "ofte stillede spørgsmål om mærke til automatiseret konto"),
                t("ee78c192", "Hvad er en PCF-konto?"),
                t("c3f35e0c", "En PCF-konto afbilder en anden person, gruppe eller organisation i dens profil for at diskutere, lave satire over eller dele oplysninger om vedkommende."),
                t("d019b5fa", "Skal jeg give min PCF-konto en etiket?"),
                t("dd04f24e", "Ja. PCF-etiketten sørger for, at din konto ikke forvirrer folk på X, da den fortæller dem, at kontoen ikke er tilknyttet profilens emne. Hvis din konto ikke er mærket, kan den være i strid med vores autenticitetspolitik."),
                t("hb0f8bbc", "Hvordan giver jeg min PCF-konto en etiket?"),
                t("g69acc5c", 'Bare klik på "Forstået", så kommer du videre til dine profilindstillinger, hvor du kan oprette en kontoetiket!'),
                t("d313d431", "autenticitetspolitik"),
                t("a3f22d8e", "Vælg den type meddelelser, du får om dine aktiviteter, interesser og anbefalinger."),
                t("bc20979a", "X og dets partnere bruger cookies til at give dig en bedre, sikrere og hurtigere tjeneste og til at understøtte vores forretning. Nogle cookies er nødvendige for at bruge vores tjenester, forbedre vores tjenester og sikre, at de fungerer korrekt."),
                t("ge06dadc", "Tillad X og dets partnere at bruge cookies til at give dig annoncer og kommunikation, der er skræddersyet til dine interesser."),
                t("he20de3a", "Giv ikke X tilladelse til at bruge cookies til at indsamle yderligere oplysninger til skræddersyede annoncer og kommunikation."),
                t("g0ec0bec", "Deaktiveret"),
                t("g89f4614", "Din konto er deaktiveret"),
                t("f1768324", "Bestem, hvordan X personliggør indhold og indsamler og deler visse data."),
                t("ja94f34e", "Disse indstillinger gælder for denne browser eller enhed, når du er logget ud. De har ingen virkning, når du er logget ind."),
                t("bd73f7e6", "Dette aktiverer eller deaktiverer alle indstillingerne på denne side."),
                t("ddbc3288", "Data"),
                t("ae5339a0", "Se dine X-data"),
                t("b934e0ea", "Vil du deaktivere personlig tilpasning og data?"),
                t("i0317e0e", "Dette kan bevirke, at du får vist mindre relevante posts og annoncer."),
                t("a148acba", "Deaktiver"),
                t("aa023546", "Tilpas ud fra de steder, du har været"),
                t("ced77194", "Tillad brug af, hvor du ser X-indhold på nettet"),
                t("fe1fc83e", "Dette er de aldersintervaller, der er knyttet til dig."),
                t("bf9c74d0", "Brug ikke disse aldersintervaller til personlig tilpasning."),
                t("cf0daa24", "Det kan tage noget tid at indsamle disse oplysninger. Prøv igen senere."),
                t("ea522535", "Læs mere"),
                t("hf5ca8f8", "din profil"),
                t("d9cbe351", function (e) {
                    return e.count + " log ind hændelse" + i(e.count, "", "r");
                }),
                t("de90b04a", "Steder, du har været"),
                t("cbd2ef59", function (e) {
                    return e.count + " lokalitet" + i(e.count, "", "er");
                }),
                t("a4441bb8", "Interesser fra X"),
                t("e1c6b2d6", "Skræddersyede målgrupper"),
                t("ed19d10d", function (e) {
                    return e.audienceCount + " målgruppe" + i(e.audienceCount, "", "r") + "fra " + e.advertiserCount + " annoncør" + i(e.advertiserCount, "", "er");
                }),
                t("f00d0d03", function (e) {
                    return e.count + " interesse" + i(e.count, "", "r");
                }),
                t("hf9c2caa", "Vil du anmode om en annoncørliste?"),
                t("c29b7971", function (e) {
                    return "Dette sendes til " + e.primaryEmail + ".";
                }),
                t("b9e1cf02", "Anmod"),
                t("a8276fac", "Anmod om annoncørliste"),
                t("g7912a84", "Forstået. Vi sender din liste pr. mail, når den er klar."),
                t("d6104de0", "Du kan fravælge interessebaseret annoncering i indstilingerne for personlig tilpasning og data. Dette vil få betydning for, hvilke annoncer du ser på X, men du fjernes ikke fra annoncørernes målgrupper."),
                t("ed8c03f5", "Lær mere"),
                t("e1a4daac", function (e) {
                    return e.num_audiences + " målgrupper";
                }),
                t("acb25e32", function (e) {
                    return e.num_advertisers + " annoncører";
                }),
                t("j4fa776e", "Telefoner"),
                t("i7acdb36", "Tablets"),
                t("c112dfc8", "Computer"),
                t("jd8607ba", "Aktiveret den"),
                t("ea4f6c9e", "Browsere"),
                t("d750b93f", function (e) {
                    return e.count + " browser" + i(e.count, "", "e");
                }),
                t("a9783602", "Mobilenheder"),
                t("j043aa31", function (e) {
                    return e.count + " mobilenhed" + i(e.count, "", "er");
                }),
                t("ae415fd2", "Denne indstilling er slået fra."),
                t("a90be7b4", "E-mailadresser"),
                t("c0f6f911", "Aktivitet uden for X"),
                t("adaafb3f", "udledte identitet"),
                t("f0f72665", "Udledt identitet"),
                t("d33b4e5b", "Aktivitet uden for X"),
                t("c4668d4f", "Aktivitet uden for X"),
                t("df3e137b", "Læs mere"),
                t("d1597ccb", "Lær mere"),
                t("c1b03a07", "Læs mere"),
                t("b056d9dc", "Dette er din kontos primære sprogindstilling."),
                t("h68bc23c", "Disse ekstra sprog bruges til at personliggøre din oplevelse."),
                t("fbf0e61e", "Hvis du ikke allerede har tilføjet et køn, er dette det køn, som vi har knyttet til din konto ud fra din profil og aktivitet. Disse oplysninger vises ikke offentligt."),
                t("b4568a3a", "Tilføj dit køn"),
                t("c0be743e", "Køn opdateret"),
                t("c5abae66", "Dette er det køn, som X har knyttet til dig."),
                t("cdb0d3e6", "Brug ikke dette køn til personlig tilpasning."),
                t("j31a1aa0", 'Dette er de steder, som X bruger til at vise dig mere relevant indhold. De steder, der er anført her, vises ikke, hvis du har slået "Tilpas efter steder, du har været" fra.'),
                t("ddefdd1c", "Vil du fjerne de steder, du har været?"),
                t("hea740ac", "Dette tager noget tid og kan ikke fortrydes."),
                t("a26e0d52", "Modtaget. Disse steder fjernes."),
                t("he447966", "Ingen steder fundet i øjeblikket."),
                t("b9d98dec", "lokalitetsindstillinger"),
                t("e27e4fce", "Ukendt lokalitet"),
                t("ib55eb6b", "Forbundne apps"),
                t("e5a4a539", "Lær mere"),
                t("gc8f2e14", "Du kan fravælge interessebaseret annoncering i indstillingerne for personlig tilpasning og data."),
                t("e6dbe66b", "Læs mere"),
                t("d3310e49", function (e) {
                    return "Vi sender en fil med alle de oplysninger, der er knyttet til din konto, til " + e.primaryEmail + ".";
                }),
                t("ib03e8c8", "Vil du downloade en fil med alle de oplysninger, der er knyttet til din konto, til denne enhed?"),
                t("g49741e8", "Download"),
                t("dc370a0c", "Forstået. Vi sender dine data pr. e-mail, når de er klar."),
                t("c07b4316", "Interesseret i"),
                t("e97196fe", "Kendt for"),
                t("ja0f971c", "Dette er nogle af de interesser, der matcher dig, baseret på din profil, aktivitet og de emner, du følger. De bruges til at tilpasse din oplevelse på X, herunder de annoncer, du ser. Du kan tilpasse dine interesser, hvis noget ser forkert ud. Foretager du ændringer, kan der gå lidt tid, før de træder i kraft."),
                t("gd1ce494", "Vi tror, at du er kendt for nedenstående interesser. Disse bruges til at vise mere af dit indhold til personer, der er interesseret i disse områder. Du kan justere dem, hvis noget ikke ser rigtigt ud. Der kan gå lidt tid, før eventuelle ændringer træder i kraft."),
                t("a6b0b41a", "Hent X-appen til din mobiltelefon. Den er gratis."),
                t("h3ed510e", "X-data"),
                t("b708417c", "Du kan anmode om en ZIP-fil med et arkiv med dine kontooplysninger, -historik, apps og enheder, kontoaktivitet, interesser og annoncedata. Du får en meddelelse i appen, når arkivet med dine data er klar til at blive downloadet."),
                t("jbf5843e", "Periscope-data"),
                t("ea886c6e", "Du kan anmode om et arkiv med dine Periscope-data direkte på Periscope."),
                t("cdcc2ad4", "Download mislykkedes"),
                t("dbeff87a", "Anmod om arkiv"),
                t("hb02ed28", "Funktionen Download dine data er ikke tilgængelig i øjeblikket. Prøv igen senere."),
                t("c2254084", "Vi har modtaget din anmodning. For at beskytte din konto kan det tage 24 timer eller længere, før dine data er klar."),
                t("f62d1d9e", "Dit arkiv er klar til at blive downloadet og vist i browseren på din computer. Husk, at du skal downloade disse data, inden de udløber om et par dage."),
                t("b221ca4c", "Vi giver dig besked, når dine data er klar til at blive downloadet"),
                t("db40dfcf", "Udfyld denne formular"),
                t("g1aced04", "Apps, enheder og oplysninger"),
                t("dbcf3a1a", "Tilføj profiletiket"),
                t("cbb2367c", "Vis eller skjul en profiletiket på en parodi-, kommentar- og fankonto."),
                t("ge48855c", "Parodi"),
                t("hf019b20", "Denne etiket sørger for, at din konto ikke forvirrer folk på X, da den fortæller dem, at kontoen ikke er tilknyttet profilens emne."),
                t("d048571e", "Fjern parodi-etiket?"),
                t("g905134c", "Hvis du slår denne etiket fra, fjernes den fra din profil og alle tidligere posts. Tjek venligst, at du overholder vores autenticitetspolitik."),
                t("ce62c8c2", "Fjern profiletiket?"),
                t("a14080ce", "Opdater profiletiket?"),
                t("db6796f6", "Hvis du slår denne etiket fra, fjernes den fra din profil og alle tidligere posts. Tjek, at du overholder vores autenticitetspolitik. Når den er opdateret, vil yderligere opdateringer være låst i 48 timer."),
                t("c700b6be", "Når den er opdateret, vil yderligere opdateringer være låst i 48 timer."),
                t("ff1739ae", "Profiletiket"),
                t("h70c602c", "Det er ikke muligt at opdatere profilets etiket"),
                t("c818c60c", "Statistik"),
                t("ha9f14b1", function (e) {
                    return "Dit Rum starter den " + e.scheduleDate + " kl. " + e.scheduleTime;
                }),
                t("jafbef80", "Du har ikke tilladelse til at planlægge dette Rum"),
                t("e5d26f84", "Gå aldrig glip af, hvad der sker, ved at aktivere meddelelser. X modtager din enheds land og sprog, så vi kan tilpasse meddelelserne til dig."),
                t("f91f00ba", "Opret klip"),
                t("f9b2d343", function (e) {
                    return e.count + " post" + i(e.count, "", "s");
                }),
                t("jcc8306e", "Anmod om at tale"),
                t("j41fd45a", "Anmodning sendt"),
                t("d5b2aae8", "Der er blevet sendt for mange anmodninger om at tale. Prøv igen senere."),
                t("b9945b98", "Anmodningen om at tale mislykkedes. Deltag i Rummet igen, og prøv igen om et par sekunder."),
                t("b2cc6a54", "Deltag som taler"),
                t("fb6c0bbc", "Anonym lytning"),
                t("e49a1f42", "Du lytter i øjeblikket anonymt og er ikke synlig for værten og de andre deltagere."),
                t("jf01aea4", "Hvis du vil deltage, skal du forlade Rummet og deltage igen som en synlig lytter."),
                t("cac1482a", "Reager"),
                t("fc0e94b7", function (e) {
                    return "Reager med " + e.emoji;
                }),
                t("jf9f3e54", "Spring 15 sekunder fremad"),
                t("hdd1aba0", "Spring 15 sekunder tilbage"),
                t("b89c5a50", "Pause"),
                t("e674c120", "Vis billedtekster"),
                t("f45bace4", "Skjul billedtekster"),
                t("ce96f1dc", "Undertekster ikke tilgængelige"),
                t("e07f6e7d", function (e) {
                    return "Hastighed " + e.rate + "x";
                }),
                t("jd04fc66", "0,5 x hastighed"),
                t("f03848b8", "Normal"),
                t("j0e5c2ce", "1,5 x hastighed"),
                t("b3f2318e", "2 x hastighed"),
                t("f17bc95a", "Del skærm"),
                t("b11a74b2", "Stop deling"),
                t("e51c2372", "Gæster"),
                t("b08821f4", "Tilbage"),
                t("fed1388a", "Indstillinger for Rum"),
                t("c63dd2cc", "Deltag i denne direkte samtale med mig!"),
                t("c958c6c8", "Post dette"),
                t("if23a252", "Del via..."),
                t("c0530da6", "Del menu"),
                t("gb5851d7", function (e) {
                    return e.prefix + " " + e.url;
                }),
                t("j78ad1ca", "Afslut Rum?"),
                t("db684264", "Ja, afslut"),
                t("je23178a", "Dette afslutter samtalen for alle."),
                t("c371fb9a", "Slutningen"),
                t("c0ce822e", "Mikrofonindstillinger"),
                t("a2bf8b8a", "Skift til at lytte"),
                t("caa8d928", "Slå støjdæmpning til og fra"),
                t("b5d88f0c", "Kun medarbejdere"),
                t("c855ab8e", "Kun for abonnenter"),
                t("ddeb0a3c", "Her er Fællesskabet. Synes du om personerne? Tag et kig."),
                t("e111f531", function (e) {
                    return e.count + " følger med";
                }),
                t("cbef820f", function (e) {
                    return e.screenName + " repostede streamingen!";
                }),
                t("e3275464", "Send"),
                t("cededf2a", "Vært"),
                t("i2caef48", "Medværter"),
                t("j245c654", "Talere"),
                t("eda23a02", "Lyttere"),
                t("b90eb348", "Inviter til at tale"),
                t("d9a63e82", "Fjern fra talere"),
                t("bd917b26", "Inviter som medvært"),
                t("d7357e7e", "Fjern fra medværter"),
                t("bf307fc0", "Bloker og fjern"),
                t("ccf2f24e", "Indberetning"),
                t("i22835de", "Godkend"),
                t("cb59a0fe", "Afvis");
            t("c2376960", "Anmoder om at tale"),
                t("aba7dcdd", function (e) {
                    return "Inviter " + e.name;
                }),
                t("f5c7aaa7", function (e) {
                    return "vært" + i(e.count, "", "er");
                }),
                t("fc56c8b1", function (e) {
                    return "medvært" + i(e.count, "", "er");
                }),
                t("iba0f45d", function (e) {
                    return "taler" + i(e.count, "", "e");
                }),
                t("dc066955", function (e) {
                    return "lytter" + i(e.count, "", "e");
                }),
                t("b53ed9ab", function (e) {
                    return e.participantCount + " " + e.title + " · " + e.remainingCapacityCount + " åbn plads" + i(e.remainingCapacityCount, "", "er");
                }),
                t("c3b5b829", function (e) {
                    return e.count + " anmodning" + i(e.count, "", "er");
                }),
                t("fe7a1910", "Send invitationer"),
                t("ic3c757e", "Søg efter brugere"),
                t("cd133486", "Inviter"),
                t("f2333850", "Del med personer uden for X"),
                t("cddb8097", "Læs mere"),
                t("f77997b0", "Medvært"),
                t("i48f4ed8", "Taler"),
                t("a77c8e02", "Lytter"),
                t("bdfa93eb", function (e) {
                    return "Delt af " + e.name;
                }),
                t("d8cc6ada", "Hvem kan tale? Aktuelle talere påvirkes ikke. Ændringer kan tage et par sekunder."),
                t("e3a87142", "Kun personer, du inviterer til at tale"),
                t("db3de1d2", "Deltag som taler"),
                t("d7f4bc44", "Deltag som medvært"),
                t("edcf15e9", function (e) {
                    return "Har anmodet (" + e.count + ")";
                }),
                t("h13957aa", "Slå lyd fra i Rum"),
                t("ge6372fa", "Slå lyd til i Rum"),
                t("i7a42e1c", "Hjælp med at administrere dette Rum"),
                t("e0b8f112", "Du er blevet inviteret til at være medvært"),
                t("ee12263c", "Medværter kan tale i Rummet"),
                t("jee7002c", "Medværter kan invitere, fjerne og slå lyden fra for talere"),
                t("i95225d2", "Medværter kan dele og fjerne posts"),
                t("f07137fa", "Medværter kan fjerne lyttere fra Rummet"),
                t("j6cdf012", "Medværter kan ikke invitere eller fjerne andre medværter"),
                t("c727d116", "Medværter kan ikke afslutte Rummet"),
                t("g69084b8", "Acceptér medværtsinvitation"),
                t("ee230734", "Vis flere indstillinger"),
                t("ic8c615e", "Vælg og send et hurtigt svar"),
                t("a04077c4", "Vælg et billede, en video eller en GIF."),
                t("c07367d8", "Mediet understøttes ikke i øjeblikket for krypterede beskeder"),
                t("af71ef68", "Tale"),
                t("fc64990e", "Video"),
                t("ca0ce0e4", "Start en ny besked."),
                t("e18e6a63", function (e) {
                    return "Få X Premium for at skrive til @" + e.username;
                }),
                t("c3752568", "Noget gik galt. Prøv at sende din besked igen om et øjeblik"),
                t("f78aa3ea", "Nogle af dine beskeder kunne ikke sendes lige nu. Prøv igen senere."),
                t("f9690dc0", "Beklager! Du kan ikke sende en besked til denne konto."),
                t("b1d35408", "Du har overskredet den daglige besked-grænse."),
                t("g539cca6", "Din konto er blevet suspenderet og har ikke tilladelse til at sende beskeder."),
                t("bbac001a", "Denne besked er for lang."),
                t("a1d2a68e", "Denne bruger følger ikke dig. Du kan kun sende beskeder til brugere, der følger dig."),
                t("ec2bb9d4", "Den post, du forsøger at sende, er blevet slettet."),
                t("hf383be4", "Kontoen, du forsøger at sende en besked til, er blevet slettet."),
                t("c4fdbd16", "Du kan ikke sende beskeder til brugere, som du har blokeret."),
                t("hf3e7e38", "Din besked kunne ikke sendes."),
                t("dd8272fd", function (e) {
                    return e.count + " nyt besked" + i(e.count, "", "er");
                }),
                t("e2cd3b7c", "Lydopkald afsluttet"),
                t("f42f365a", "Videoopkald afsluttet"),
                t("a7570f2c", "Ubesvaret lydopkald"),
                t("jd9831b2", "Ubesvaret videoopkald"),
                t("f0985268", "Lydopkald"),
                t("ca397a48", "Videoopkald"),
                t("bb7e2143", function (e) {
                    return e.seconds + " s";
                }),
                t("c1d4ac84", "Du ændrede gruppebilledet"),
                t("abc7b032", "Gruppebilledet er ændret"),
                t("i263b294", "Du blev deltager i samtalen"),
                t("i8d5e62b", function (e) {
                    return e.count + " andre personer";
                }),
                t("f7204380", "Dette Fleet er udløbet"),
                t("d9de7b58", "Dette medie er skjult, fordi det kommer fra en person, du ikke følger."),
                t("f2879f4e", "Denne besked kan indeholde eksplicitte medier."),
                t("b518221e", "Åbn billede"),
                t("eeaa9f90", "Åbn video"),
                t("g2b43664", "Åbn GIF"),
                t("d99de549", function (e) {
                    return "Svarer " + e.name;
                }),
                t("f5a07f7c", "Vedhæftning"),
                t("fd079470", "Dette er spam"),
                t("c7a92dca", "Besked er OK"),
                t("fb3ccb56", "Besked er skjult grundet mistænkeligt indhold"),
                t("c94b7d8a", "Afspil talebesked"),
                t("eb6f9582", "Sæt talebesked på pause"),
                t("b6b4142e", "Denne post er skjult, fordi den kommer fra en person, du ikke følger."),
                t("fda60d78", "Denne post kan indeholde eksplicitte medier."),
                t("b59a9004", "Åbn post"),
                t("daf6bf02", "Skift indstillinger"),
                t("ba60339a", "Slet for dig"),
                t("eb497e08", "Flere handlinger"),
                t("b170974a", "Tilføj reaktion"),
                t("i202bd22", "Indberet besked"),
                t("f2e5491a", "Kopiér beskeden"),
                t("bf2d08ca", "Flere reaktioner"),
                t("ca7a2215", function (e) {
                    return "Din nuværende reaktion: " + e.emoji;
                }),
                t("j4bfee22", "Slet besked?"),
                t("faddd3a2", "Denne besked bliver slettet for dig. De øvrige deltagere i samtalen kan stadig se den."),
                t("f58dff34", "Noget gik galt, og beskeden blev ikke slettet."),
                t("ad5a8e8e", "Beklager! Du har ikke tilladelse til at slette denne besked."),
                t("fad48eea", "Sender..."),
                t("ae7d7a24", "Besked kunne ikke sendes"),
                t("bbe74f3f", function (e) {
                    return "I går kl. " + e.time;
                }),
                t("h95f9e77", function (e) {
                    return e.reactionCount + " reaktion" + i(e.reactionCount, "", "er");
                }),
                t("c0098d4a", "Reaktioner"),
                t("j85999ec", "Liste over brugerreaktioner"),
                t("a2d48779", function (e) {
                    return "Fjern din nuværende reaktion: " + e.emoji;
                }),
                t("icd0bf34", "Set"),
                t("e8bd8fec", "Sendt"),
                t("b2d32fae", "Set af alle"),
                t("a763d33f", function (e) {
                    return "Set af " + e.count + " person" + i(e.count, "", "er");
                }),
                t("d84b485e", "Du fulgte denne konto"),
                t("be0c83d8", "Du accepterede anmodningen"),
                t("bcc13060", "Tidlig adgang"),
                t("e535cae9", function (e) {
                    return e.count + " Følger" + i(e.count, "", "e");
                }),
                t("cf249089", function (e) {
                    return "Medlem siden " + e.joinDate;
                }),
                t("g1f972d7", "Læs mere"),
                t("bb0e37c3", "Læs mere"),
                t("a89e8ab3", "Læs mere"),
                t("d98540eb", "Læs mere"),
                t("j296badb", "Læs mere"),
                t("e45d77f5", "Læs mere"),
                t("h52ca4c4", "Nye beskeder"),
                t("ffde2fdc", "Indlæser samtale"),
                t("da878dc0", "Accepter"),
                t("hc52446c", "Vil du deltage i denne gruppe? Brugeren får ikke at vide, at du har set anmodningen, før du accepterer den."),
                t("f7e1ad65", function (e) {
                    return "Skal " + e.senderName + " kunne sende dig beskeder? Brugeren kan ikke se, at du har set beskeden, før du accepterer.";
                }),
                t("gdf4b790", "Vil du forlade samtalen?"),
                t("bbf83d84", "Denne handling kan ikke fortrydes, og samtalehistorikken slettes fra din indbakke."),
                t("ib3fe8aa", "Bloker eller indberet"),
                t("gbed8594", "Blokering forhindrer denne person i at sende dig beskedanmodninger fremover."),
                t("g9074da4", "Forlad samtale"),
                t("ad63377e", "Slet samtalen"),
                t("h09b49f8", "Denne samtale bliver slettet i din indbakke. De øvrige deltagere i samtalen kan stadig se den."),
                t("i6b19b08", "Indberet samtale"),
                t("cdb1a05a", "Fortæl X om spam eller misbrug, så vi kan hjælpe med at beskytte andre fra konti som denne."),
                t("d6b11d9c", "Din direkte besked kunne ikke sendes, fordi nogle medier ikke blev uploadet."),
                t("c64c1884", "Skriv ny besked"),
                t("cdcebd22", "Ny besked"),
                t("a66ac766", "Indlæser direkte beskeder"),
                t("a846382a", "Søg i direkte beskeder"),
                t("h845f282", "Direkte besked"),
                t("d7ad7414", "Besked ikke tilgængelig"),
                t("ga086a54", "Billedvedhæftning"),
                t("a9cc8cfe", "Sendte en GIF"),
                t("eb3d722e", "Du sendte en GIF"),
                t("e5bfe07e", "Sendte et link"),
                t("db53c018", "Du sendte et link"),
                t("bf584cd2", "Sendte et billede"),
                t("f80629ba", "Du sendte et billede"),
                t("e20b65b0", "Sendte en sticker"),
                t("d30c2d40", "Du sendte en sticker"),
                t("a876e58c", "Sendte en video"),
                t("j7d8101a", "Du sendte en video"),
                t("dedfd266", "Sendte en talebesked"),
                t("h7033cac", "Du sendte en talebesked"),
                t("i34ec422", "Delte en post"),
                t("a4939874", "Du delte en post"),
                t("a30a206e", "Modtaget!"),
                t("ib4b1b86", "Vi introducerer fastgjorte samtaler"),
                t("bd3ca2ef", function (e) {
                    return "Vælg handlingsmenuen i en samtale for at fastgøre den til toppen for nem adgang. Du kan fastgøre op til " + e.count + " samtale" + i(e.count, "", "r") + " ad gangen.";
                }),
                t("e1c9ec9c", "Fastgør samtalen"),
                t("e3cfff7c", "Udskyd samtale"),
                t("f398722e", "Samtale udskudt"),
                t("bdd91964", "Fastgør ikke længere samtalen"),
                t("a8ed0eca", "Fjern udskydelse af samtale"),
                t("jac4eb1e", "Udskydelse af samtale fjernet"),
                t("d88d0790", "Indstillingsmenu"),
                t("ce108dda", "Vælg etiket"),
                t("abf2d13c", "Vælg"),
                t("e4b3f520", "Fastgjorte samtaler"),
                t("ae4d666a", "Alle samtaler"),
                t("d98e066c", "Samtale fastgjort."),
                t("j302dba8", "Samtale frigjort."),
                t("cb367658", "Samtale kunne ikke fastgøres. Prøv igen."),
                t("ie9a7e48", "Samtale kunne ikke fastgøres. Tjek din forbindelse, og prøv igen."),
                t("hd3927c6", "Samtale kunne ikke frigøres. Prøv igen."),
                t("f1ac0968", "Samtale kunne ikke frigøres. Tjek din forbindelse, og prøv igen."),
                t("d571e4f9", function (e) {
                    return "Du kan kun fastgøre " + e.count + " samtale" + i(e.count, "", "r");
                }),
                t("a551bf7e", "Du skal frigøre én samtale for at fastgøre en anden."),
                t("a676a876", "Velkommen til din indbakke!"),
                t("h52877aa", "Skriv en hilsen, del posts og mere med private samtaler mellem dig og andre på X. "),
                t("efe8fda0", "Skriv en besked"),
                t("b9dae4f4", "Prøv et andet søgeudtryk"),
                t("e7fb2028", "Ikke flere resultater"),
                t("ae111c99", function (e) {
                    return 'Ingen resultater for "' + e.query + '"';
                }),
                t("e8581cce", "Det indtastede søgeudtryk gav ingen resultater."),
                t("f08940ac", "Opret ny besked"),
                t("i5d7593a", "Prøv at søge efter personer, grupper eller beskeder"),
                t("c94ac69e", "Grupper"),
                t("fb3c8e74", "Seneste søgninger"),
                t("fd6150fc", "Gør direkte beskeder mere sikre"),
                t("c7e8a9ee", "privatlivspolitik"),
                t("bece84b4", "Der er ingen beskedanmodninger"),
                t("e51be7c1", "Lær mere"),
                t("f041be05", function (e) {
                    return e.stringCount + " pending request" + i(e.count, "", "s");
                }),
                t("a2fad0f3", function (e) {
                    return e.stringCount + " new pe" + i(e.count, "rson", "ople") + " you may know";
                }),
                t("cbddf365", function (e) {
                    return e.stringCount + " pe" + i(e.count, "rson", "ople") + " you may know";
                }),
                t("fac945ad", function (e) {
                    return e.stringCount + " new request" + i(e.count, "", "s");
                }),
                t("ed93de0c", "Analyserer post"),
                t("ba44f4ea", "Flere oplysninger fra Grok"),
                t("a6e89af8", "Åben samtale"),
                t("ica55d24", "Ny chat"),
                t("f794af9a", "Tilstanden Sjov"),
                t("eccf9fea", "Tilstanden Almindelig"),
                t("g7b1c574", "Nulstil til standard"),
                t("f388a7ec", "DeepSearch"),
                t("ab1eb384", "Vælg den ønskede søgetilstand"),
                t("i330e54c", "Avanceret søgning og begrundelse"),
                t("ac64b674", "Udvidet søgning, yderligere begrundelse"),
                t("j22655f2", "Spørg om hvad som helst"),
                t("h0681e3e", "Tal med Grok, vores AI-assistent"),
                t("d593fd78", "Den kan besvare dine spørgsmål, søge i X og generere billeder"),
                t("d0205a24", "Tjek fakta"),
                t("ed4177c4", "Grok giver muligvis faktuelt forkerte oplysninger på en overbevisende måde, opsummerer forkert eller mangler kontekst. Du bør selv verificere alle oplysninger."),
                t("c0ff98f8", "AI-træning og -tilpasning"),
                t("f1a8218a", "Vi kan bruge dine X-data samt dine interaktioner, input og resultater med Grok til træning af modeller, finjustering og til at tilpasse din Grok-oplevelse. Du kan fravælge dette ved hjælp af dine X-indstillinger. Besøg vores hjælpecenter for at læse mere."),
                t("bcbf5b6e", "Deling"),
                t("j7b5c844", "Du er ansvarlig for de samtaler, du deler offentligt. Undgå at dele følsomme og fortrolige oplysninger om dig selv eller andre i dine samtaler med Grok (se vores hjælpecenter)."),
                t("c9f7c196", "Hjælpecenter"),
                t("b63d3d36", "Vedhæft"),
                t("c65f7308", "Serverne koger lige nu "),
                t("f2a8655e", "Groks avancerede værktøjer er ikke tilgængelige i øjeblikket. "),
                t("c26b9b9c", "Fil"),
                t("g10600b0", "Menu"),
                t("j826e722", "Gem billede"),
                t("a9325f10", "Kopier billede"),
                t("g0b12442", "Kunne ikke kopiere billedet"),
                t("edd0c172", "Post billede"),
                t("d1d3a41a", "Rediger billede"),
                t("a2697040", "Beskriv, hvad der skal ændres på billedet"),
                t("ge1cefc4", "Værktøjer"),
                t("e9b6d404", "Hvilke søgeværktøjer skal Grok have adgang til?"),
                t("h15dce2e", "Avancerede indstillinger"),
                t("ff9dc268", "Rediger prompt"),
                t("e9fcdd0c", "Bed Grok om at søge aggressivt på nettet"),
                t("fc4e8aba", "Bed Grok om at ræsonnere trin for trin"),
                t("e4ae6abe", "Bed Grok om at forandre dit billede"),
                t("e8ade5e2", "Vælg personlighed"),
                t("b5df32b0", "Grok om noget"),
                t("fb3b9776", "Groks output er blevet tilpasset af denne bruger."),
                t("ca93f2ee", "Denne besked er blevet slettet."),
                t("b52484b6", "Søger..."),
                t("b8c06820", "Kopiér teksten"),
                t("ca0f5894", "Synes ikke om"),
                t("ja8d189e", "Ønskede tekstsvar"),
                t("e951f04e", "Ønsket et billede"),
                t("c503b35e", "Ønskede et andet billede"),
                t("d4371c92", "Koden er forkert"),
                t("dbe8586e", "Ønskede en anden kode"),
                t("e360eb4a", "Ønskede ikke koden"),
                t("a18657ca", "Udregningen er forkert"),
                t("b8b86300", "Ønskede ikke udregning"),
                t("e4c34788", "Forkert svar"),
                t("b220a8c8", "Ønskede noget andet"),
                t("b115fd18", "Forudindtaget svar"),
                t("dc637214", "Dårlig stil/tone"),
                t("f02e6d42", "Ønskede søgning"),
                t("bbec6bba", "Dårlige søgeresultater"),
                t("b494d088", "Ønskede ikke søgning"),
                t("a44974f2", "Jeg forstår ikke billedet"),
                t("bd44a8a8", "Fortæl os mere"),
                t("fcdbe764", "Hvad kan Grok gøre bedre?"),
                t("bb6adb22", "Beskriv, hvad der gik galt"),
                t("h0fa15f2", "Tak for din feedback!"),
                t("d700b268", "Chat-henvisninger"),
                t("cd7bdab2", "Samtaler, der glemmes, slettes ikke fra historikken"),
                t("f21b84de", "Henvisning glemt"),
                t("i52a9cb8", "Der er ingen minder at vise."),
                t("d9d36880", "Glem"),
                t("g02dacc0", "I dag"),
                t("c6e845c0", "I går"),
                t("a5fa4a86", "jan"),
                t("c51724a4", "feb"),
                t("j244ceb2", "mar"),
                t("b22b12e0", "apr"),
                t("h3023cac", "Maj"),
                t("b10dbffa", "jun"),
                t("c81da1b6", "jul"),
                t("d4e4d3ce", "aug"),
                t("c3418f9a", "sep"),
                t("b64dada6", "okt"),
                t("ad24ec20", "nov"),
                t("c7902252", "dec"),
                t("idf94bac", "Regenerér"),
                t("f7614f92", "Uden søgning"),
                t("c5ade3ba", "Med søgning"),
                t("c16e5b1a", "Uden billedgenerering"),
                t("i2ca65fa", "Med billedgenerering"),
                t("d3927f88", "Post link"),
                t("be37ecd4", "Kunne ikke kopiere til udklipsholder"),
                t("h708a4c0", "Del samtale"),
                t("g06a67e2", "Delingssiden indeholder beskeder til og med dette tidspunkt"),
                t("a0428662", "Ikke nyttig"),
                t("fe4fd310", "Nyttig"),
                t("bfd161bc", "Sammenlign"),
                t("j5dcf1b2", "Opdateret"),
                t("a50aaa10", "Formarked"),
                t("dd614d10", "Efter åbningstid"),
                t("d6b0b0d5", function (e) {
                    return "Åbning" + e.ttc_stock_details;
                }),
                t("e85f8b65", function (e) {
                    return "Markedsværdi" + e.ttc_stock_details;
                }),
                t("f92bf10f", function (e) {
                    return "Årets top" + e.ttc_stock_details;
                }),
                t("d679b09f", function (e) {
                    return "Høj" + e.ttc_stock_details;
                }),
                t("be7b9409", function (e) {
                    return "P/E-forhold" + e.ttc_stock_details;
                }),
                t("a81f5fb9", function (e) {
                    return "Årets bund" + e.ttc_stock_details;
                }),
                t("e68d4f21", function (e) {
                    return "Lav" + e.ttc_stock_details;
                }),
                t("bc9c96f9", function (e) {
                    return "Højeste niveau nogensinde" + e.ttc_stock_details;
                }),
                t("dd679fb1", function (e) {
                    return "Laveste niveau nogensinde" + e.ttc_stock_details;
                }),
                t("a22063d2", "Del din lokalitet for bedre nøjagtighed."),
                t("db3248a8", "Indlæser lokalitet"),
                t("ffe0e588", "Del lokalitet"),
                t("e41a0dc2", "Lukket"),
                t("ieff24f4", "Fuld tid"),
                t("e2811afc", "Spil"),
                t("j081fa34", "Stillinger"),
                t("i7c7f156", "I morgen"),
                t("b134ba52", "I gang"),
                t("j1361724", "Pause"),
                t("fa0f1262", "Pause"),
                t("c2cac618", "Grok understøtter i øjeblikket data fra La Liga, Premier League, Bundesliga, Serie A og Ligue 1."),
                t("acae223d", function (e) {
                    return 'Results for "' + e.prompt + '"';
                }),
                t("bed99fe2", "Se færre"),
                t("f7b57ac0", "Statistik"),
                t("i7e3e446", "Kampe"),
                t("d490977e", "Nu"),
                t("e9f55db8", "Søndag"),
                t("e9cf3af8", "Mandag"),
                t("d5868a7e", "Tirsdag"),
                t("b5dfdb46", "Onsdag"),
                t("ab8095a2", "Torsdag"),
                t("e298e6f2", "Fredag"),
                t("ef519654", "Lørdag"),
                t("c609a1b4", "søn"),
                t("j92274b0", "man"),
                t("ja482160", "tir"),
                t("f4ad4cb0", "ons"),
                t("d66bf142", "tor"),
                t("dc17968a", "fre"),
                t("j310a2d6", "lør"),
                t("eaf55eb4", "Der tænkes"),
                t("j1ab5f40", "Tryk for at læse"),
                t("ee000b0d", function (e) {
                    return e.numSources + " kilder";
                }),
                t("b1ac6016", "Fuldførte DeepSearch"),
                t("f766feca", "DeeperSearch fuldført"),
                t("e258000e", "Meddelelse"),
                t("d591a772", "Meddelelse er ikke tilgængelig"),
                t("bc49b728", "Du får besked, når svaret er klar"),
                t("d8aadeba", "Meddelelse er slået fra"),
                t("db832e38", "Aktiver meddelelser i browserindstillingerne"),
                t("a910cac6", "Der opstod et problem ved aktivering af meddelelser"),
                t("g4b3a3e6", "DeepSearch er fuldført"),
                t("bf780b13", function (e) {
                    return e.minutes + "m " + e.seconds + "s";
                }),
                t("c2745fa4", "Afbrudt"),
                t("be30b6ee", "Ustabil forbindelse"),
                t("a4d9dbfa", "Tanker"),
                t("d7cb5408", "Relevante websider"),
                t("aa7c96bb", function (e) {
                    return "Se " + e.numResults + " mere";
                }),
                t("b58d2bd2", "Relevante posts"),
                t("f5a2377e", "Tænker i "),
                t("g3ce0132", "Tænkte i"),
                t("f8007364", "Udvid for detaljer"),
                t("ca53f780", "Skjul detaljer"),
                t("ha8fbe22", "Generér flere billeder med Premium"),
                t("d95c232a", "Du har nået grænsen. Opgrader nu for at generere mere."),
                t("h2671312", "Mere Grok med Premium"),
                t("a1bb9c8a", "Mere Grok med Premium+"),
                t("b08ef3ae", "Opgrader til X Premium for at fortsætte samtalen, eller prøv igen senere."),
                t("jf9363b8", "Opgrader til X Premium+ for at fortsætte samtalen, eller prøv igen senere"),
                t("ef018bf6", "Analysér flere billeder med Premium"),
                t("cdace6d2", "Opgrader nu"),
                t("a3186bff", function (e) {
                    return e.count + " webside" + i(e.count, "", "r");
                }),
                t("f4146dda", "Hvilket svar foretrækker du?"),
                t("a2c2be32", "Dette hjælper med at gøre Grok bedre."),
                t("g01599b6", "Svar 1"),
                t("e02694e0", "Svar 2"),
                t("h6867fcc", "Jeg foretrækker dette svar"),
                t("b2175228", "Grok til Android er her"),
                t("d2d8650c", "Få den bedste Grok-oplevelse i vores nye selvstændige app"),
                t("ia5bef3e", "Hvordan kan jeg hjælpe dig i dag?"),
                t("ge683598", "Spørg Grok om alt ..."),
                t("fef25c88", "Prøv Grok gratis nu"),
                t("fb172aa8", "Et gratis niveau af Grok er nu tilgængeligt i dit område. Chat, generér og analysér billeder. Begrænsninger gælder."),
                t("d7af4f40", "Generér et billede af en galakse"),
                t("gcb6c0be", "Grok kan lave fejl. Verificer dens output."),
                t("cb88fd82", "Du bruger en gratis version af Grok."),
                t("g27a5314", "Hvis du vil begynde at bruge Grok, skal du føje et telefonnummer til din konto."),
                t("bdd84568", "Din konto er for ny til at bruge Grok. Prøv igen senere."),
                t("a9109a94", "En solarpunk-by"),
                t("g986f7a4", "Generer et billede af en solarpunk-by"),
                t("ad685264", "Fuji-bjerget"),
                t("hdb08284", "Lav et billede af Fuji-bjerget i anime-stil"),
                t("a986ae84", "En flyvende kat"),
                t("a14b556a", "Generer et billede af en flyvende kat"),
                t("gc16b670", "En robot på en blomstermark"),
                t("d5b8fa44", "Generer et billede af en robot på en blomstermark"),
                t("da196ff6", "Astronaut på Mars"),
                t("ae3979cc", "Lav et portræt af en astronaut på Mars"),
                t("a682460e", "En roadster i høj fart"),
                t("e03e5514", "Lav et billede af en Tesla Roadster, der kører gennem Shinjuku-distriktet i Tokyo med bevægelsessløring"),
                t("e68eac68", "Beundrer nordlyset"),
                t("hc6e6754", "Lav et billede af en person, der beundrer nordlyset"),
                t("cf59f9f6", "Hjælp mig med at skrive en ansøgning"),
                t("cd9aeac8", "Fortæl mig dagens overskrifter"),
                t("acf2f0be", "Anbefal et fantasy-rollespil"),
                t("b9bd12e2", "Løs problemet med to summer i Python"),
                t("hf9afab0", "Gør det muligt for DeepSearch at scanne internettet og X, analysere oplysninger og levere detaljerede, velbegrundede svar med hurtig, agentbaseret søgning."),
                t("ef3b3f04", 'Gør det muligt for Tænk at bruge vores ræsonneringsmodel. Det er bedst til matematik, videnskab og kodning. Du kan også bede Grok om at "tænke dybere" i forbindelse med spørgsmål, der kræver lidt mere hjernekraft. '),
                t("b43636b8", "Vi introducerer Grok 3"),
                t("j376298c", "Grok 3 introducerer to nye tilstande til at interagere med vores mest effektive model: DeepSearch og Tænk."),
                t("e3584f8e", "Hvad er de 10 mest succesfulde strategier for optionshandel, der bruges af hedgefonde"),
                t("d91b7b8a", "Hvad ville det koste at bygge et universitet i 1885?"),
                t("e13591c0", "Eksempel på Grok-samtale"),
                t("c27ca452", "Brugere, der abonnerer på Premium, kan nu bruge vores mest avancerede AI, Grok, på X."),
                t("b6abc25a", "Vi introducerer Grok 2"),
                t("e1cdaf9e", "Vores nyeste AI-assistent, drevet af X"),
                t("e6796748", "Spørg om alt"),
                t("db470fdc", "Grok kan hjælpe med daglige opgaver såsom at skrive e-mails, svare på spørgsmål og skrive opskrifter."),
                t("e9adc2d0", "Bliv bedre til at kode"),
                t("aaab6cdc", "Stil spørgsmål om programmering, eller få hjælp til at lære nye begreber."),
                t("jd08d606", "Bliv kreativ"),
                t("he526d22", "Skab fantastiske billeder med vores nye billedgenereringsfunktioner."),
                t("i6932876", "Et cyberpunk-billede"),
                t("j7cdee8e", "Hold dig orienteret"),
                t("f1f683c2", "Få opdaterede oplysninger om de seneste nyheder og emner, der trender, udelukkende fra X."),
                t("h73b9cc0", "Din besked blev ikke sendt, fordi du ikke er forbundet til chatten i øjeblikket"),
                t("b6c73662", "Send en besked"),
                t("h6070fdc", "Chat-indstillinger"),
                t("d49326ba", "Skjul profilbilleder"),
                t("h79f3532", "Vis profilbilleder"),
                t("a8c1e2f0", "Skjul moderatorhandlinger"),
                t("jd83edd4", "Vis moderatorhandlinger"),
                t("ecca11ac", "Skjul tidsstempler"),
                t("e358a9f8", "Vis tidsstempler"),
                t("fca62374", "Pop ud-chat"),
                t("fe20f01b", function (e) {
                    return "Vil du skjule " + e.name + "?";
                }),
                t("f5dc372a", "Ved at skjule fjernes alle beskeder fra en bruger, og vedkommende kan ikke chatte under resten af udsendelsen."),
                t("e91dd1fa", "Beskeden blev slettet af en moderator."),
                t("d1da3709", function (e) {
                    return "Svarer " + e.username + ": " + e.body;
                }),
                t("fc82a896", "Denne udsendelse er afsluttet"),
                t("ea58dbd0", "Denne udsendelse er ikke startet"),
                t("cb5b6784", "Begrænset af vært"),
                t("eba27300", "Kun konti, som værten følger, kan chatte"),
                t("f28984fb", function (e) {
                    return "Kun konti, som " + e.screenName + " følger, kan chatte";
                }),
                t("a3fec810", "Abonner på Premium for at chatte"),
                t("dbf0b235", function (e) {
                    return "Abonner på " + e.screenName + " for at chatte";
                }),
                t("ifbd8342", "Åbn direkte skærm"),
                t("f935d3ce", "Åbn chat"),
                t("abbe8212", "Luk chat"),
                t("hdf040dd", function (e) {
                    return e.percentage + "% fuldført";
                }),
                t("e4f6bd9e", "Ups, noget gik galt. Prøv igen senere."),
                t("ac966f94", "Browser understøttes ikke"),
                t("ca86b62c", "eller"),
                t("d5568440", "Angiv en stærkere adgangskode."),
                t("d0511fe6", "Dette nummer bruges allerede af andre konti. Brug et andet."),
                t("cd24fe60", "Angiv et gyldigt telefonnummer."),
                t("gf8388fe", "Landekode"),
                t("c52be452", "Ja, fjern"),
                t("bcb388a0", "Dette fjerner alle kontakter, du tidligere har uploadet, og deaktiverer synkronisering af adressebogen med X på alle enheder. Vær opmærksom på, at dette tager noget tid."),
                t("ec129eb6", "Du har nu fjernet dine kontakter."),
                t("f1b5048a", "Der opstod en fejl under fjernelsen af dine kontakter."),
                t("hc72e1fc", "Angiv en gyldig e-mail."),
                t("bc0ad88a", "Plus-adressering (e-mails med symbolet '+') er ikke tilladt. Angiv en gyldig e-mail."),
                t("f134915f", function (e) {
                    return e.count + " valgte elementer";
                }),
                t("b8fb87e0", "Vis valgte emner"),
                t("e854ad27", function (e) {
                    return "Emne – " + e.title;
                }),
                t("e4ff75aa", "Noget gik galt. Tjek forbindelsen, og prøv igen."),
                t("b60eba9e", "Du skal først lige gennemføre Googles reCAPTCHA-udfordring for at bekræfte, at du ikke er en robot."),
                t("ba939778", "Er du en robot?"),
                t("d44efc66", "Hvad hedder du?"),
                t("b4867a18", 'Dit fulde navn må ikke indeholde ordet "Twitter".'),
                t("j1c3f4b9", function (e) {
                    return "Rediger fødselsdatoen " + e.birthdate;
                }),
                t("j231d352", "Følg alle"),
                t("c203db71", function (e) {
                    return "Indlæser posts af @" + e.screenName;
                }),
                t("c9a1cb5e", "Denne konto findes ikke"),
                t("e7b201de", "Prøv at søge efter en anden."),
                t("ica87fde", "Du er blokeret"),
                t("c7ec6faf", "Læs mere"),
                t("e79ed125", function (e) {
                    return "@" + e.screenName + " er blokeret";
                }),
                t("gba95028", "Vis posts"),
                t("a2216a79", "Læs mere"),
                t("a2811f96", "Profiltidslinjer"),
                t("d25805fa", "Abon'er"),
                t("b05be0c8", "Højdepunkter"),
                t("b9891db3", function (e) {
                    return "Posts med svar af " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("e1ab545d", function (e) {
                    return "Indlæser abonnement-posts af @" + e.screenName;
                }),
                t("ac3f4be9", function (e) {
                    return "Indlæser højdepunkter fra @" + e.screenName;
                }),
                t("da38f955", function (e) {
                    return "Indlæser Artikler af @" + e.screenName;
                }),
                t("b7363b66", "Send en post"),
                t("ce659062", "Lad ikke dine abonnenter vente"),
                t("f1e98cc2", "Vis dine bedste indlæg frem!"),
                t("d5c743c6", "Skriv en Artikel"),
                t("d1e5e328", "Når du gør det, vises det her."),
                t("hb26a1fe", "Begynd at poste det eksklusive indhold. Alle dine abonnement-posts bliver vist her."),
                t("b7c3572e", "Sådan føjer du højdepunkter til din profil:\n\n1. Find en post, som du har oprettet\n2. Tryk på menuen “•••”\n3. Tryk på “Tilføj/fjern fra Højdepunkter”"),
                t("i8123550", "Når du udgiver en Artikel, bliver den vist her."),
                t("b786a77d", function (e) {
                    return "@" + e.screenName + " har ikke postet";
                }),
                t("j7b80397", function (e) {
                    return "@" + e.screenName + " har ikke postet nogen abonnement-posts endnu";
                }),
                t("jbae8c54", "Der er ingen tilgængelige posts i Højdepunkter."),
                t("g8fb219e", "Der er ingen tilgængelige Artikler."),
                t("f34dfc18", "Når vedkommende gør det, bliver vedkommendes posts vist her."),
                t("h9346040", "Abonnement-posts bliver vist her, når de er blevet postet."),
                t("i4c3ddc6", "Artikler bliver vist her, når de udgives."),
                t("e0118142", "Post nu"),
                t("e0c1d871", function (e) {
                    return e.fullName + "s posts";
                }),
                t("c575828f", function (e) {
                    return e.fullName + "s abonnement-posts";
                }),
                t("e8300dbb", function (e) {
                    return e.fullName + "s højdepunkter";
                }),
                t("c46b420d", function (e) {
                    return e.fullName + "s Artikler";
                }),
                t("h5a65db7", function (e) {
                    return "Abonnement-posts af " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("g7ccac9d", function (e) {
                    return "Højdepunkter fra " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("ja6e5d35", function (e) {
                    return "Artikler af " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("h088ae72", "Profil-posts"),
                t("hbf64b75", function (e) {
                    return "Posts liket af " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("a64da953", function (e) {
                    return "Indlæser likes af @" + e.screenName;
                }),
                t("be3d5b9f", function (e) {
                    return "@" + e.screenName + " har ikke liket nogen posts";
                }),
                t("d34b5306", "Når vedkommende gør det, bliver disse posts vist her."),
                t("bb0e41bc", "Du har endnu ingen likes"),
                t("d3d4a21c", "Tryk på hjertet på en post for at vise, at du synes om den. Når du har gjort det, vises det her."),
                t("d95c3d31", function (e) {
                    return e.fullName + "s likede posts";
                }),
                t("eeb7d696", "Dine likes er private. Det er kun dig, der kan se dem."),
                t("h6e91bb1", function (e) {
                    return "Medie-posts af " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("fe38901b", function (e) {
                    return "Indlæser medier af @" + e.screenName;
                }),
                t("bc4223a3", function (e) {
                    return "@" + e.screenName + " har ikke postet medier";
                }),
                t("ccc363f6", "Når vedkommende gør det, bliver disse posts vist her."),
                t("d1614228", "Lys, kamera ... vedhæftninger!"),
                t("d7dc8d0a", "Når du poster billeder eller videoer, bliver de vist her."),
                t("hf761abf", function (e) {
                    return e.fullName + "s medier";
                }),
                t("je5311d3", function (e) {
                    return "Tilknytninger til " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("fd0772eb", function (e) {
                    return "Indlæser tilknytninger til @" + e.screenName;
                }),
                t("ccf03833", function (e) {
                    return "Tilknytninger til " + e.fullName;
                }),
                t("ba5a88e4", "Foreslået"),
                t("ddee8ae2", "Se alle stillinger"),
                t("d2a04c68", "Vi ansætter folk"),
                t("dc12a126", "Vis vej"),
                t("e2acb642", "Kontakt"),
                t("ha9b8035", function (e) {
                    return "Ring " + e.phoneCode + " " + e.phoneNumber;
                }),
                t("g2244521", function (e) {
                    return "Sms " + e.phoneCode + " " + e.phoneNumber;
                }),
                t("b44c0205", function (e) {
                    return e.day + " kl. " + e.time;
                }),
                t("de1123f5", function (e) {
                    return "kl. " + e.time;
                }),
                t("e2a5bd50", "Åben 24 timer"),
                t("e0d7da6c", "Lukker"),
                t("i7059f56", "Åbner"),
                t("a7391348", "Ingen tilgængelige timer"),
                t("c9eba532", "Opdaterede tider"),
                t("b5fea270", "Produktkarrusel"),
                t("h10bb33c", "Indberet produkt?"),
                t("dda5d96a", "Indberet produkt"),
                t("fca46f40", "hjælpecentret"),
                t("c71a053b", "Klik her"),
                t("d7f8a117", function (e) {
                    return e.days + " dages statistik";
                }),
                t("cae20e93", function (e) {
                    return e.days + " dage";
                }),
                t("gc767fda", "Privat for dig"),
                t("c7c85e0c", "Lås op for statistik"),
                t("b15df4b4", "Gange dine posts blev set på X"),
                t("e5fe61e0", "Eksponeringer"),
                t("d1018321", function (e) {
                    return "Dine posts har fået " + e.value + " eksponeringer de sidste " + e.period;
                }),
                t("e623137c", "Engagementsfrekvens"),
                t("d9d34182", "Post-engagementer opdelt efter eksponeringer."),
                t("aeee0182", "Profilbesøg"),
                t("b2bde01a", "Antal profilvisninger fra dine posts"),
                t("faf4c1f5", function (e) {
                    return "Din profil har fået " + e.value + " besøg de sidste " + e.period;
                }),
                t("d5f1e554", "Klik på links"),
                t("cf573986", "Antal klik på en URL-adresse i dine posts"),
                t("j761451e", "Nye følgere"),
                t("e1a87d14", "Antal nye følgere, du har fået (eksklusive dem, der ikke følger dig mere)"),
                t("j590577e", "Antal svar, du har fået på dine posts"),
                t("ia1da622", "Antal likes, du har fået på dine posts"),
                t("cfd1036b", function (e) {
                    return "Dine posts har fået " + e.value + " likes de sidste " + e.period;
                }),
                t("ja42739e", "Reposts"),
                t("ca6e8de0", "Antal gange dine posts er blevet repostet"),
                t("b1b4d57e", "Videovisninger"),
                t("bdaf100e", "Antal videovisninger i dine posts"),
                t("ca826772", "Medievisninger"),
                t("j43b8f52", "Antal visninger, som dine medier (GIF'er, billeder, videoer) fik"),
                t("d3969c06", "Gennemførelsesprocent"),
                t("c58c3476", "Gennemførte videoer divideret med videovisninger"),
                t("c8aae62a", "Antal tilføjelser til bogmærker, du har fået på dine posts"),
                t("g70825e0", "Delinger"),
                t("c6fbefd4", "Antal delinger, du har fået på dine posts"),
                t("dbe9353e", "Engagementer"),
                t("a3a4e8f8", "Månedligt"),
                t("eb2e0272", "Linje"),
                t("e298b08e", "Søjle"),
                t("bbc6e7c6", "USA"),
                t("h88ad664", "Canada"),
                t("gd139910", "Storbritannien"),
                t("e08feda2", "Japan"),
                t("fad772ce", "Mellemøsten og Nordafrika"),
                t("a396dd6c", "Asien og Stillehavsområdet"),
                t("j942b16c", "Europa og vækstmarkeder"),
                t("j3cc0c00", "Latinamerika"),
                t("fe90a642", "13-17"),
                t("a5c91a8e", "18-24"),
                t("cf30cdfa", "25-34"),
                t("gf672f7c", "35-44"),
                t("jf28b41c", "45-54"),
                t("ja78da94", "55-64"),
                t("g42ea0b0", "65+"),
                t("f21807e0", "Ikke-følgere"),
                t("d61b2bcc", "Fællesskabsposts"),
                t("h3525cb8", "Ikke angivet"),
                t("a3c544e8", "Toplande"),
                t("f30795d0", "Åbner profilbillede"),
                t("gd7acb84", "Konfigurer profil"),
                t("b7636014", "Besked"),
                t("haad225c", "Giv Premium i gave"),
                t("b63c46ed", function (e) {
                    return "Abonner på @" + e.screenName;
                }),
                t("j33d8902", "Send en donation"),
                t("a8ab3d08", "Send til"),
                t("d740d2d9", function (e) {
                    return e.service + " link kopieret til udklipsholder";
                }),
                t("a7cf1e98", "Bandcamp"),
                t("d876e67e", "Bitcoin-adresse"),
                t("f85f6760", "Cash App"),
                t("a32a7c06", "Ethereum-adresse"),
                t("cc1a3bc4", "GoFundMe"),
                t("d4d74bb4", "Patreon"),
                t("h14fbc52", "PayPal"),
                t("h1198dcc", "Venmo"),
                t("j4e0fd88", "Vis mere"),
                t("df7cb6d4", "Professionelle kategorier"),
                t("ec429e79", "Læs mere."),
                t("j04c717a", "+ Tilføj erfaring"),
                t("a1ea2f12", "Tillykke med fødselsdagen!"),
                t("g8191e78", "Har fødselsdag i dag!"),
                t("c1b819ba", "Her vises der fødselsdagsballoner i dag"),
                t("ad7a451e", "Oversæt bio"),
                t("f543dbf6", "Verificeret telefonnummer"),
                t("cef4e8cf", function (e) {
                    return "Vis @" + e.screenName + "?";
                }),
                t("h03a094a", "Posts fra denne konto er nu tilladt på din forsidetidslinje."),
                t("a6e94418", "Du har skjult posts fra denne konto."),
                t("dd3d10f6", "Under gennemgang"),
                t("i06d4712", "Vores team foretager en hurtig gennemgang af din konto. Du bør kunne se dit flueben om få dage."),
                t("j354c438", 'Teksten "Under gennemgang" er kun synlig for dig.'),
                t("e018b5fa", "Opgrader for at blive verificeret"),
                t("b74bd6c6", "Denne konto er verificeret, fordi den er relevant inden for offentlige myndigheder, nyheder, underholdning eller en anden bestemt kategori."),
                t("e1e0c916", "Denne konto er verificeret, fordi den abonnerer på Premium."),
                t("eb5d72e4", "Denne kontos posts er beskyttede. Kun vedkommendes følgere kan læse dem."),
                t("g776ca50", "Verificeret konto"),
                t("ad465ee8", "Angiv primær tilknytning"),
                t("d01612d3", function (e) {
                    return "Verificeret siden " + e.date + ".";
                }),
                t("e14d8719", function (e) {
                    return e.year + " f.Kr.";
                }),
                t("b7caffb7", function (e) {
                    return "" + e.name;
                }),
                t("ea8c425f", function (e) {
                    return "@" + e.viewerScreenName + ", du er ikke verificeret endnu";
                }),
                t("b2d0c0f4", "Bliv verificeret som "),
                t("f464d54d", function (e) {
                    return "@" + e.profileScreenName;
                }),
                t("g47cdc0e", " for at skille dig ud og få boostet rækkevidden af dine svar."),
                t("d834ab9c", "Ja, vis profil"),
                t("cb339f26", "Advarsel: Denne konto har haft unormal aktivitet"),
                t("hf06085e", "Du ser denne advarsel, fordi der har været usædvanlig aktivitet fra denne konto. Vil du stadig se den?"),
                t("aa959f36", "Advarsel: Denne konto er midlertidigt begrænset"),
                t("jf604336", "Advarsel: Denne profil kan have potentielt ømtåleligt indhold"),
                t("c9bfda48", "Advarsel: Denne profil kan have ømtåleligt indhold. Du ser denne advarsel, fordi vedkommendes ordvalg eller billeder kan være af ømtålelig karakter. Vil du stadig se den?"),
                t("g29ebf26", "Du ser denne advarsel, fordi vedkommende poster potentielt ømtålelige billeder eller sprog. Vil du stadig se den?"),
                t("jcfb7fba", "Du ser denne advarsel, fordi vedkommende potentielt kan have overtrådt X-reglerne. Vil du stadig se den?"),
                t("bd598c70", "Disse posts er beskyttede"),
                t("e617164b", "Læs mere"),
                t("g8475f82", "Konto suspenderet"),
                t("j5e1cf59", "X-reglerne"),
                t("gbf342a4", "Kontoen tilbageholdes"),
                t("defba9a4", "Velkommen til X!"),
                t("d11934ec", "Få besked"),
                t("a2cd2b0a", "Følg og få besked"),
                t("a70bae53", function (e) {
                    return "Nu kan du få besked hver gang " + e.fullName + " poster.";
                }),
                t("f51a4c29", function (e) {
                    return "Nu kan du følge " + e.fullName + " og få besked, hver gang vedkommende poster.";
                }),
                t("cfa5e58d", function (e) {
                    return "Du følger " + e.fullName + " og får besked, når vedkommende poster.";
                }),
                t("be3a652d", function (e) {
                    return "Du får besked, hver gang " + e.fullName + " poster.";
                }),
                t("f089620c", "Din forsidetidslinje"),
                t("a1ab9c80", "Der er ingen posts i dette Fællesskab endnu"),
                t("b32c4fb0", "Når der er, bliver de vist her."),
                t("bf17deda", "Lad os komme i gang!"),
                t("c3fbf1da", "Dette er det bedste sted at se, hvad der sker i din verden. Find nogle personer og emner at følge nu."),
                t("a2515900", "Venter på posts"),
                t("je23cdb2", "Posts fra personer på denne Liste bliver vist her."),
                t("e69b7e02", "Administrer konti"),
                t("b6bd6ae4", "Aktuel konto"),
                t("d577bccd", function (e) {
                    return "Hvis du har flere X-konti, kan du tilføje dem og nemt skifte mellem dem. Du kan tilføje op til " + e.maxAccounts + " konti.";
                }),
                t("dc65b3e5", function (e) {
                    return "Du har nået grænsen på " + e.maxAccounts + " konti.";
                }),
                t("b8045b33", function (e) {
                    return "Du har nået grænsen på " + e.maxAccounts + " konti.";
                }),
                t("d075dc89", function (e) {
                    return "Du har nået grænsen på " + e.maxAccounts + " personlige konti.";
                }),
                t("bade139e", "Log ud af alle konti"),
                t("ae33b982", "Vil du logge ud af alle konti?"),
                t("fa07bf68", "Dette vil gælde for alle dine konti i alle browserfaner."),
                t("f7865ab6", "Ikke din konto?"),
                t("a35248e4", "Dette er ikke min konto"),
                t("f794a67c", "Dette er min konto"),
                t("j79c0ff7", function (e) {
                    return "Vi har fjernet " + e.emailAddress + " fra denne konto";
                }),
                t("fb46383c", "Du kan ikke fjerne e-mailadressen fra din egen konto."),
                t("gcfdbc2b", function (e) {
                    return "E-mailadressen er ikke længere tilknyttet X-kontoen " + e.screenName + ".";
                }),
                t("f351663c", function (e) {
                    return "@" + e.screenName;
                }),
                t("baaa89c4", function (e) {
                    return "" + e.emailAddress;
                }),
                t("h75b475c", function (e) {
                    return "@" + e.screenName;
                }),
                t("a8f0e157", "Meddelelsesindstillinger."),
                t("h1732cde", function (e) {
                    return "" + e.emailAddress;
                }),
                t("d374a600", function (e) {
                    return "@" + e.screenName;
                }),
                t("c1d75571", "Hvorfor var din e-mailadresse tilknyttet en X-konto, som ikke er din?"),
                t("ac71e82f", "Læs mere"),
                t("b069d89c", "Målgruppe"),
                t("f5a61ae6", "Indhold"),
                t("a4df00c0", "Kontostatistik-faner"),
                t("ac248548", "Kontooversigt"),
                t("je62f358", "Sidste 28 dage"),
                t("bc2f16a4", "Aktive tidspunkter"),
                t("d603209e", "Gennemgang af aktiviteter"),
                t("ac3fb6de", " Rum til deltagelse"),
                t("ie181958", "Indsigter fra målgruppen"),
                t("j6f8d422", "Den gennemsnitlige visningstid for dine videoer."),
                t("e7479ce4", "Gennemsnitlig visningstid"),
                t("g1dfa7d0", "Gns."),
                t("h7d28188", "Tilbage til indhold "),
                t("if2704e4", "Back to Live Overview"),
                t("ea928ae4", "Tilbage til rummene"),
                t("e8c07c22", "broadcast"),
                t("a4ce6e68", "Broadcast Metrics"),
                t("b2214c74", "Total number of views for this broadcast"),
                t("d4fcf83a", "Total time viewers spent watching this broadcast"),
                t("a89b0322", "Annulleret"),
                t("j3cb12ea", "Samtidige lyttere"),
                t("b93931ee", "Det antal gange, dit indhold er blevet postet."),
                t("a1814798", "Antallet af gange, du har svaret på en post."),
                t("addd5575", function (e) {
                    return "Fre" + e.date;
                }),
                t("a92e62bd", function (e) {
                    return "Man" + e.date;
                }),
                t("g7450c57", function (e) {
                    return "Lør" + e.date;
                }),
                t("h08883e7", function (e) {
                    return "Søn" + e.date;
                }),
                t("ddb16777", function (e) {
                    return "Tor" + e.date;
                }),
                t("h8f395b3", function (e) {
                    return "Tir" + e.date;
                }),
                t("b8710b43", function (e) {
                    return "Ons" + e.date;
                }),
                t("d9c70840", "Enhed"),
                t("ba55e824", "Afsluttet"),
                t("id276c42", "Det antal gange, der blev interageret med dit indhold."),
                t("j033d090", "Anslået indtægt"),
                t("efd4d7d4", "Filtrer rum"),
                t("a1334290", "Første 48 timer"),
                t("gc10a3b0", "Følger over tid"),
                t("efa0f858", "Antal følger og følger ikke over tid. Dette afspejler ikke nødvendigvis dit antal følgere."),
                t("g2b06cc6", "Kønsdata bliver muligvis udledt"),
                t("b66b3baa", "timer"),
                t("cf8a0772", "Impression to Views"),
                t("g13d8010", "Last 48 Hours"),
                t("d5627596", "Last Hour"),
                t("baf120a6", "Mindst engageret"),
                t("f2382014", "DIREKTE"),
                t("c4a7a6aa", "Live data"),
                t("a992032a", "Livestream Analytics"),
                t("ie45edda", "Oversigt over livestream"),
                t("e30fc268", "Live Viewers"),
                t("bd37f68e", "Medieaktivitet"),
                t("fe074210", "minutter"),
                t("jd03a1b8", "Minutes Watched"),
                t("a20e91e8", "minutes watched"),
                t("ic2bebee", "Indtægtsgivende"),
                t("a1d642c8", "Mest engageret"),
                t("ifc4c1f8", "Antallet af nye følgere, som dette indhold har tiltrukket."),
                t("fff1315a", "Ingen udsendelser tilgængelige med det valgte filter"),
                t("jbcb09a8", "Ikke nok data endnu"),
                t("df846d6c", "Der blev ikke fundet nogen posts i det valgte tidsrum."),
                t("g2ba40f6", "Ingen ledige pladser til det valgte filter"),
                t("j44061a0", "Not available"),
                t("c4a93912", "N/A"),
                t("a6b78788", "No viewer data available"),
                t("b2438638", "af det samlede antal"),
                t("ic0399e0", "Organiske visninger"),
                t("ja5c444a", "Betalingsperiode"),
                t("f04e025e", "Højeste antal samtidige lyttere"),
                t("d6d10662", "Peak Viewers: "),
                t("d147bea2", "Kom tilbage senere"),
                t("f0336d68", "Post-statistik"),
                t("g85fbd2e", "Post-id"),
                t("ice5c5b6", "Antallet af gange dette indhold blev vist til brugerne."),
                t("hf4f9bfe", "Post-link"),
                t("bf5ebf5c", "Indlæg og svar"),
                t("b211652e", "Posts over tid"),
                t("f2efec0a", "Pre-Published"),
                t("i61e0302", "Forrige"),
                t("e08a706a", "Promoverede visninger"),
                t("cbc99192", "Udgivelsesdato"),
                t("a83c2a9a", "Realtime"),
                t("e9d72896", "Optaget"),
                t("gede4932", "Afspil igen"),
                t("h0de359c", "Antallet af gange dette indhold er blevet repostet."),
                t("e0568f2c", "Planlagt til: "),
                t("gd86baa8", "Planlagt start"),
                t("fef3bfae", "Vælg et andet nøgletal"),
                t("g7e3d2a4", "Statistik for Rum"),
                t("fbc79a40", "Oversigt over rum"),
                t("d077112a", "Rumstatistik"),
                t("cf3709da", "Status"),
                t("e797dc32", "Stream time: "),
                t("b649d8cc", "Kun for abonnenter"),
                t("j9282130", "Broadcast thumbnail"),
                t("g629b8b0", "Timed Out"),
                t("eb87323c", "This shows analytics data for the selected time period since the livestream happened."),
                t("i6a75722", "Time Range"),
                t("c602f5b8", "I alt"),
                t("b35e68ae", "Samlet antal deltagere"),
                t("h78ee79a", "Samlet antal sete afspilninger"),
                t("e3efaed0", "Type"),
                t("c37993e2", "Følger ikke længere"),
                t("b1ed35d0", "Unique Viewers"),
                t("bfad9306", "Ukendt"),
                t("b5a58f36", "Untitled Broadcast"),
                t("i70f5278", "Uploadet den:"),
                t("a98b58b6", "Verificerede følgere"),
                t("a5de67ca", "Antallet af følgere, der har verificeret deres konto."),
                t("g3367ff4", "Videofuldførelse"),
                t("a7b48b36", "Procentdelen af videovisninger, der blev gennemført."),
                t("a2580f2a", "Gennemførelsesprocent"),
                t("ff95a9cc", "Video-id"),
                t("a97e358e", "Video-link"),
                t("e10e8b46", "Viser kun videoer fra de sidste 100 dage.");
            t("ba37f6da", "Videooversigt"),
                t("f19846b2", "Videominiaturebillede"),
                t("ccd6f4a8", "Video-titel"),
                t("c8410542", "Antallet af gange, din video er blevet vist."),
                t("a532072a", "Seere"),
                t("d9508ab0", "visninger"),
                t("d9f9dec0", "Se Rum"),
                t("h0c1f37a", "Se rumanalysen"),
                t("e41fffbc", "Den samlede visningstid for dine videoer."),
                t("if2909ba", "Visningstid"),
                t("i0e5bf4c", "Dine videoer"),
                t("ed99baea", "Tidlig beta-adgang"),
                t("gf898b70", "Avanceret søgning"),
                t("d2a43a7a", 'indeholder både "ai" og "startup"'),
                t("a8584698", "ai startup"),
                t("jb6f9292", 'indeholder den eksakte sætning "ai startup"'),
                t("j8ee77c4", '"ai startup"'),
                t("d0480758", 'indeholder enten "ai" eller "startup" (eller begge dele)'),
                t("f0048fa2", "ai OR startup"),
                t("da0df186", 'indeholder "ai", men ikke "startup"'),
                t("f2f463ea", "ai -startup"),
                t("a10a357e", 'indeholder "ai" og har mindst 50 likes'),
                t("ca8ed1e8", "ai min_faves:50"),
                t("i945a3f2", 'indeholder "ai" og en URL med ordet "grok"'),
                t("a9348088", "ai url:grok"),
                t("b5c3cdbc", 'omtaler X-kontoen "grok"'),
                t("e2634592", "@grok"),
                t("i88ba038", "Underretning deaktiveret"),
                t("j2cb0214", "Underretning aktiveret"),
                t("ae852cd0", "Modtag en meddelelse hver mandag med en oversigt over ændringer i denne trend."),
                t("d1d8633e", "Radar-underretninger"),
                t("g096d0cc", "Alle søgninger"),
                t("e77035aa", "Ryd søgning"),
                t("a895ec64", "Er du sikker på, at du vil slette denne forespørgsel?"),
                t("a4f5e431", function (e) {
                    return "Slettet ’" + e.name + "’";
                }),
                t("db28b535", function (e) {
                    return "Slet ’" + e.name + "’";
                }),
                t("bcf89b8a", "Rediger din forespørgsel"),
                t("f0002e72", "Udforsk resultater"),
                t("b0924d7a", "Det lykkedes ikke at oprette en søgning. Prøv igen."),
                t("cfd731ee", "Kunne ikke slette forespørgsel. Prøv igen."),
                t("g08bff82", "Det lykkedes ikke at deaktivere underretning. Prøv igen."),
                t("fa1fd798", "Det lykkedes ikke at aktivere underretning. Prøv igen."),
                t("ia7dce48", "Det lykkedes ikke at generere en forespørgsel. Prøv igen."),
                t("d494d4aa", "Det lykkedes ikke at opdatere forespørgslen. Prøv igen."),
                t("i4a49588", "Globalt mødested"),
                t("c0799860", "Dag"),
                t("b43679d2", "Time"),
                t("f1fce85e", "Minut"),
                t("ea3e0ec4", "Marked"),
                t("d8d9aec2", "Du har nået det maksimale antal søgninger"),
                t("c9aa246e", "Ny søgning"),
                t("b9b7a50e", "Tilpas dine søgekriterier når som helst for at holde dig opdateret"),
                t("i9a09bb6", "Opret en forespørgsel, og lad Radar følge opdateringer i realtid"),
                t("da20008c", "Ingen trends tilgængelige. Prøv at udvide dine søgekriterier."),
                t("e78ca8c6", "Prøv igen senere"),
                t("ce3216ec", "Søgning"),
                t("ef609bb8", "Hvad sker der på X?"),
                t("a636a738", "Bed om en opfølgning ..."),
                t("d92ec304", "Forespørgsel ikke fundet"),
                t("bbf29e20", "Nulstil valg"),
                t("ie3321ea", "$NVDA (sell OR buy)"),
                t("cf223996", "Oversigt"),
                t("a27ccab8", "Appen til alting"),
                t("i66136aa", "Top"),
                t("e7c44382", "Unikke brugere"),
                t("d559e5b8", "Ikke-navngivet forespørgsel"),
                t("i1d9be88", "Brug af avancerede søgeoperatorer"),
                t("ae9f604c", "Tilknytning"),
                t("a7d2d8f4", "Vis kun tilknyttede konti"),
                t("je21ffbe", "Antal følgere"),
                t("i8d9797c", "Hele profilen"),
                t("a36bebf2", "Maks."),
                t("i5ef8b4a", "Maks. antal følgere"),
                t("fcf0ec1c", "Min."),
                t("ccc0bbc6", "Min. antal følgere"),
                t("je1bd63a", "Lås op for styrken i X til at finde talenter, salgsmuligheder og strategiske partnere"),
                t("i6766078", "Søg efter toptalenter, salgsmuligheder og partnere"),
                t("d509bbd4", "Opdag mennesker på X"),
                t("a5afaf54", "Nulstil"),
                t("i9006fb0", "Nulstil alle"),
                t("fa598a82", "Resultater"),
                t("g3688a48", "Vælg en mulighed"),
                t("ab5a91a4", "Bruger"),
                t("cef20fd0", "Verifikation"),
                t("a2b286b0", "Promover stillinger, dine produkter og dit budskab."),
                t("e2895a38", "Op til $12k i annoncekreditter"),
                t("becba496", "Annoncekreditter er tilgængelige i en begrænset periode."),
                t("ded395ae", "Få adgang til statistik for din virksomhed på ét sted"),
                t("a47a20d4", "Avanceret statistik"),
                t("b56d3ec6", "Alle organisationer og tilknytninger får Premium+ med adgang til Grok 3."),
                t("ie663a1a", "Få hurtig hjælp og eskalering med et dedikeret kundeteam"),
                t("j7f75bec", "VIP-support"),
                t("ebf5ec26", "Kommer snart"),
                t("eeb424e2", "Skab din historie."),
                t("ab62db18", "Opbyg din målgruppe."),
                t("j2c9bc4e", "Skil dig ud med et guldflueben, og tilføj tilknytninger for at markedsføre din virksomhed organisk."),
                t("e7930f82", "Skil dig ud fra mængden"),
                t("e77ea57e", "De mest effektive værktøjer til at øge salget, ansætte de bedste medarbejdere og få adgang til eksklusiv markedsindsigt."),
                t("a558a254", "Lås op for vækst på X med Verificerede organisationer"),
                t("b099f256", "Markedstrends og offentlig opinion med et tryk på en knap med Radar."),
                t("ecb7fa02", "Virksomhedsdata"),
                t("cb5faa2a", "Brug dine annoncekreditter til at nå ud til de klogeste hoveder i verden."),
                t("c67b260c", "Promovering af stilling"),
                t("if48b5c2", "Upload og promover stillinger til millioner af mennesker direkte på X."),
                t("aa0d60aa", "måned"),
                t("cebfdb52", "Organisationer"),
                t("i9b6fcbc", "Brug Søg efter personer til at finde og kontakte teknikere, salgsemner og skabere. "),
                t("a6b5c3f0", "Find de bedste personer"),
                t("a51acce8", "Nedgrader til Basis"),
                t("ie132f40", "Opgrader for at beholde fuld adgang"),
                t("b0d26232", "SPAR"),
                t("f563b353", function (e) {
                    return "TILBUD, DER UDLØBER " + e.endDate;
                }),
                t("b29b2e69", function (e) {
                    return e.percentOff + " % rabat indtil " + e.endDate;
                }),
                t("j3cfae29", function (e) {
                    return e.discountedCost + " for det første år. Derefter " + e.baseCost + " pr. år.";
                }),
                t("jb74aea4", "Hver ekstra tilknyttet konto koster $50 pr. brugernavn pr. måned, og annoncekreditter er underlagt begrænsninger."),
                t("fc9fc856", "Hver ekstra tilknyttet konto koster $600 pr. brugernavn pr. år, og annoncekreditter er underlagt begrænsninger."),
                t("fc785aec", "Få Basis"),
                t("edf32072", "Alt i Premium+ plus:"),
                t("b3caf146", "Verificeret guld-badge"),
                t("a1dbf70c", "$200 gratis månedlig annoncekredit"),
                t("i2a2286c", "$2.500 i gratis annoncekredit"),
                t("e8d0fd04", "Radar Basis"),
                t("cf038828", "Dedikeret supportservice"),
                t("efd56302", "Føj tilknytninger til din side"),
                t("bc1bb6aa", "$1.000 gratis månedlig annoncekredit"),
                t("e1669560", "$12.000 i gratis annoncekredit"),
                t("hb973da4", "Fuld adgang til Radar"),
                t("g444c82e", "Tidlig adgang til virksomhedsfunktioner"),
                t("a1bc0bcf", function (e) {
                    return e.cost + " faktureres årligt";
                }),
                t("i0f58dac", "Alle abonnementer er underlagt gældende skatter og afgifter."),
                t("je182d8a", "Virksomhed"),
                t("ge609bd6", "Kontakt salg"),
                t("je6d2aec", "Modulbaseret prissætning"),
                t("ed33b888", "Søg efter personer"),
                t("ade522c4", "Indsigt"),
                t("h551f266", "Annoncekredit"),
                t("c74f7856", "Tilknytningspakker"),
                t("b9b41f7a", "Søgeoptimering"),
                t("b1f368ee", "Dedikeret support"),
                t("j189c5b2", "Alt i Pro plus:"),
                t("i7f4b58e", "Brugerdefineret"),
                t("h45fd8ae", "Få fuld adgang"),
                t("f1c3b32c", "Alt i Basis plus:"),
                t("f4307806", "Populært"),
                t("ce7c21de", "Årligt"),
                t("a21a64f6", '"X til virksomheder er et fantastisk godt tilbud! Vi har ansat dygtige folk ved hjælp af talentsøgningsværktøjet."'),
                t("dbb3fc54", "Medstifter og CEO"),
                t("c1600210", "\"X til virksomheder er en 'no-brainer'. Det hjalp os med at få kunder ved hjælp af markedsindsigt.\""),
                t("fb3e127a", "Tidsbegrænset nytårstilbud"),
                t("a5fee980", "Få 30 % rabat på årsabonnementer og op til $12.000 i gratis annoncekredit, når du abonnerer før"),
                t("c9051cac", "dage"),
                t("ie035790", "sek."),
                t("cbd3dfaa", "Prøv betaversionen"),
                t("h260121e", "Vis dine bedste stillinger frem for din målgruppe."),
                t("ae0ad604", "Jobsider"),
                t("cbd4ba6e", "Find og kom i kontakt med de bedste talenter"),
                t("b71927b2", "Ubegrænsede stillingsopslag"),
                t("a0b5b7d4", "Lås op for AI-målretning med vores model for resultatbaseret annoncering."),
                t("aa3f0e90", "Promover stillinger med AI-målretning"),
                t("hc67be9e", "Kom i gang"),
                t("c9a67f9e", "Begynd at ansætte"),
                t("jd937cda", "Nå ud til millioner af relevante kandidater med X Hiring. Synkroniser dine stillinger, opbyg tilpassede jobsider, og indstil stillingspromovering til at køre målrettede annoncer på tidslinjen."),
                t("d92d2632", "Den bedste platform til at ansætte de bedste talenter"),
                t("c10bee94", "Månedlige ansøgninger"),
                t("ib69d218", "250K+"),
                t("i953576c", "Virksomheder, der ansætter"),
                t("j395b846", "10K+"),
                t("g48a59c2", "Brugere"),
                t("j228841a", "500M+"),
                t("da570714", "ATS-integrationer"),
                t("h25a3132", "Op til $2.400 i annoncekredit til promovering af stilling"),
                t("f25a2004", "Fordele ved Premium+"),
                t("c237b78e", "Tilknytninger til dit ansættelsesteam"),
                t("fc3d58fe", "Op til $12.000 i annoncekredit til promovering af stilling"),
                t("eb5f060c", "Følg"),
                t("a19cf46f", function (e) {
                    return "Vil du ikke længere følge @" + e.screenName + "?";
                }),
                t("e4c91b70", "Vedkommendes posts vises ikke længere på din Til dig-tidslinjen. Du kan stadig se vedkommendes profil, medmindre vedkommende har beskyttet sine posts."),
                t("j650c8dc", "Fjern følgeanmodning?"),
                t("c02f8de1", function (e) {
                    return "Dette annullerer din følgeanmodning, og @" + e.screenName + " vil ikke kunne se den mere.";
                }),
                t("e2ee95a1", function (e) {
                    return "Medlem siden " + e.date;
                }),
                t("d64fef58", "Du har ikke postet endnu"),
                t("e2a098dc", "Sorter efter"),
                t("c5709148", "Der vises maksimalt 1000 posts"),
                t("ca5e57bd", function (e) {
                    return "Post" + e.noun;
                }),
                t("d16c1ab6", "Nyeste"),
                t("f0a28956", "Færrest nye"),
                t("h06df79a", "Flest eksponeringer"),
                t("c44744e6", "Færrest eksponeringer"),
                t("j6b98664", "Flest likes"),
                t("a669f95c", "Færrest likes"),
                t("a0c66496", "Flest svar"),
                t("h45174fe", "Færrest svar"),
                t("ea20f92a", "Flest reposts"),
                t("c9a63566", "Færrest reposts"),
                t("b40d33e4", "Detaljevisninger"),
                t("gedf636e", "Klik på URL-adresse"),
                t("bbc12690", "Klik på hashtag"),
                t("g7ede992", "Klik på permanent link"),
                t("f5210bae", "Tilknyt"),
                t("b1f77a7c", "Eksportér data"),
                t("j62d2af4", "Oversigt over posts"),
                t("dc70a568", "Analyse af post"),
                t("j9f65603", function (e) {
                    return "24.00" + e.date;
                }),
                t("d6ad20d7", function (e) {
                    return "04.00" + e.date;
                }),
                t("d9bcb257", function (e) {
                    return "8.00" + e.date;
                }),
                t("b83b49f1", function (e) {
                    return "12.00" + e.date;
                }),
                t("h52ae229", function (e) {
                    return "16.00" + e.date;
                }),
                t("i07e47b9", function (e) {
                    return "20.00" + e.date;
                }),
                t("h7cd94fe", "En sløret linjediagram"),
                t("b10621d4", "Se al din statistik"),
                t("c23def7a", "Antal engagementer"),
                t("jc14a9e8", "Udgifter"),
                t("d16b5a18", "Samlede udgifter"),
                t("g01559c6", "Nøgletal vist for de seneste 7 dage"),
                t("ddc8d458", "Lås op for historiske data"),
                t("j74eab48", "Avanceret statistik er kun for X Premium-medlemmer"),
                t("i02166f6", "Forstå din målgruppe"),
                t("cef977e4", "Eksportér dine data"),
                t("f88e624e", "Samtale opdateret"),
                t("e15e5637", function (e) {
                    return "Seneste " + i(e.count, "time", e.count + " timer");
                }),
                t("h5ab8b0e", "Personer de følger"),
                t("a0f01bca", "Klik for at ændre tidsramme"),
                t("he30b16c", '"Personer de følger" udvider dine resultater og viser de mest delte artikler fra de personer, du følger, plus de personer, vedkommende følger.'),
                t("b0589550", "Få flere nyheder"),
                t("b60e4f78", "Tjek det ud"),
                t("e950f6e0", "Ingen artikler er blevet delt i dit netværk."),
                t("e7dcfb81", "flere konti"),
                t("h965157c", "Denne side understøttes ikke."),
                t("cd388852", "Besøg forfatterens profil på den seneste version af X for at se dette indhold."),
                t("abebdfae", "Du kan kun se analyser for Rum, som du har været vært eller medvært for."),
                t("fcb205da", "Direkte lyttere"),
                t("jb088200", "Afspilninger af optagelse"),
                t("if65328a", "Følger med"),
                t("a1a0e6d8", "Følg vært"),
                t("a3c4e396", "Følg ikke længere vært"),
                t("j58e7b00", "Vis profil"),
                t("eca4e32a", "Vis detaljer"),
                t("hd908df2", "Direkte Rum"),
                t("c5d40fe2", "Enhver"),
                t("a8df1d34", "Aktivér video"),
                t("if410292", "Lær Rum at kende"),
                t("i43fdce9", function (e) {
                    return "Tilføj emner (" + e.count + "/" + e.total + ")";
                }),
                t("e32e99ec", "Hvad vil du snakke om?"),
                t("e93f3c2a", "Optagerum"),
                t("b701d610", "Planlagt Rum slettet"),
                t("b028792d", function (e) {
                    return "Administrer planlagte Rum (" + e.count + ")";
                }),
                t("e9b73da8", "Planlæg Rum"),
                t("cdf630be", "Start nu"),
                t("acd1bcb0", "Hvem kan deltage?"),
                t("h07146a2", "Hvem kan tale?"),
                t("h61d92b0", "Slet planlagt Rum"),
                t("a488f2eb", function (e) {
                    return e.count + " af " + e.total + " er valgt";
                }),
                t("d2dfe80d", function (e) {
                    return "Rummet starter den " + e.date + " kl. " + e.time;
                }),
                t("aef95393", function (e) {
                    return "Eksisterende Rum planlagt til den " + e.date + " kl. " + e.time;
                }),
                t("a7069f2e", "Rediger detaljer"),
                t("a15f06fc", "Planlagte Rum"),
                t("f6cfa3fe", "Du kan ikke planlægge et Rum i fortiden."),
                t("a8f71a2b", function (e) {
                    return "Du kan ikke planlægge et Rum mere end " + e.days + " dage ud i fremtiden.";
                }),
                t("ae092f6c", "Planlagt Rum kunne ikke slettes."),
                t("jd7f0030", "Planlagt Rum opdateret"),
                t("a26da034", "Gem ændringer"),
                t("b3633046", "Vælg Fællesskab"),
                t("ce447fcb", function (e) {
                    return e.count + " lytter" + i(e.count, "", "e");
                }),
                t("ef7da97f", function (e) {
                    return e.count + " lytter";
                }),
                t("a065e7e7", function (e) {
                    return "Lige nu: " + e.spaceTitle;
                }),
                t("hd5e7b21", function (e) {
                    return e.date + ": " + e.spaceTitle;
                }),
                t("f651e375", function (e) {
                    return "Dette Rum er afsluttet: " + e.spaceTitle;
                }),
                t("i8478ae7", function (e) {
                    return "Afspil optagelse: " + e.spaceTitle;
                }),
                t("b2a94e93", function (e) {
                    return e.hostSpace + " · " + e.descriptionListening + " · " + e.descriptionGeneric;
                }),
                t("f6432ce5", function (e) {
                    return e.hostSpace + " · " + e.descriptionGeneric;
                }),
                t("e4e811fc", "Opretter forbindelse ..."),
                t("aadbc747", function (e) {
                    return "Medvært" + i(e.hostCount, "", "er");
                }),
                t("hbd6035f", function (e) {
                    return "Taler" + i(e.speakerCount, "", "e");
                }),
                t("if420852", "Afspil optagelse"),
                t("f7dc3b1c", "Dette Rum er afsluttet"),
                t("c1d15dc0", "Det ser ud til, at dette Rum er lukket."),
                t("g3e2f3a6", "Lyt anonymt"),
                t("cd64d43e", "Deltag som taler direkte"),
                t("jcdc32f0", "Begynd at lytte"),
                t("a0cee16a", "Begynd at tale"),
                t("bf3daa48", "Begynd at lytte anonymt"),
                t("f9305f48", "Forbind igen"),
                t("e51df2e6", "Din mikrofon er slået fra, når samtalen starter"),
                t("h114ff6c", "Du kan ikke deltage i dette Rum, fordi du allerede er i et Rum."),
                t("d7fe2d7e", "Du kan ikke genoprette forbindelsen til dette Rum, da du allerede er i et Rum."),
                t("e61bdea4", "Dette Rum bliver optaget af værten. Alle, der taler, kommer med på den offentlige optagelse."),
                t("d0ebf4f7", "Læs mere"),
                t("d782b808", "Der er visse frynsegoder ved at abonnere"),
                t("i7f83b8d", "Læs mere"),
                t("fc962610", "Søg efter navnet på et Rum eller en vært"),
                t("e5b5f091", function (e) {
                    return "Ingen Rum matcher “" + e.searchQuery + "”";
                }),
                t("g5812140", "Hvorfor ikke starte et?"),
                t("e8fe1ecb", function (e) {
                    return "Der er ingen " + e.section + ' Rum, der matcher "' + e.searchQuery + '"';
                }),
                t("c432d2b2", "Søg efter et Rum"),
                t("d39e8b30", "Tilføj en note"),
                t("dc7a6625", function (e) {
                    return "Skriver som " + e.displayAlias;
                }),
                t("g17e4064", "Dit notat bliver udgivet via dit alias i Fællesskabsnoter uden forbindelse til din X-profil."),
                t("d9b09ee8", "Vær præcis – det er påkrævet at angive links til eksterne kilder."),
                t("b7476596", "Vær præcis – det anbefales at bruge links til eksterne kilder."),
                t("df6c8292", "Din forklaring"),
                t("ecb4d20c", "Dit notat blev ikke gemt. Sørg for, at du ikke tidligere har skrevet et notat om denne post, og prøv igen senere."),
                t("eb5b4a12", "Om aliasser i Fællesskabsnoter"),
                t("ja0ee360", "Vælg dit alias"),
                t("f7b7c250", "Vælg et alias for Fællesskabsnoter for at forblive privat"),
                t("c6382384", "Hvorfor bruger Notater i Fællesskaber aliasser?"),
                t("j48ab594", "Bidrag privat"),
                t("bc2399a0", "Skriv og bedøm notater uden at dele din X-identitet."),
                t("d939cf16", "Fokus på indholdet"),
                t("a56f0c32", "Aliasser kan hjælpe med at reducere partiskhed ved at hjælpe bidragydere med at fokusere mere på indhold og mindre på forfattere."),
                t("d17c59e4", "Alle forbliver ansvarlige"),
                t("i719f8e2", "Du kan se historik for bidragydere, og alle er ansvarlige via de bedømmelser, de får."),
                t("a96bb564", "Vælg dit alias for Fællesskabsnoter"),
                t("afcdcf84", "Dette alias er din identitet, når du skriver og bedømmer Fællesskabsnoter. Det er ikke tilknyttet din X-profil."),
                t("f83d0446", "Dit alias er blevet gemt."),
                t("ed0e6b2e", "Begynd at bedømme notater"),
                t("if4c5e06", "Velkommen til Notater i Fællesskaber!"),
                t("g880a78a", "Start med at bedømme noter"),
                t("d1be2236", "Fællesskabsnoter bruger bidragydere som dig til at hjælpe med at identificere nyttige notater, der skal vises til alle."),
                t("af9f2b78", "Spor din bedømmelsespåvirkning"),
                t("af68afc8", "Din påvirkning stiger, hver gang du hjælper en note med at få statussen Nyttig eller Ikke nyttig."),
                t("fb5c5d42", "Lås op for muligheden for at skrive noter"),
                t("a1e58cdc", "Når din bedømmelsespåvirkning når op på 5 eller højere, låser du op for muligheden for at skrive dine egne Fællesskabsnoter."),
                t("j5f112b4", "To af dine seneste noter har i øjeblikket statussen Ikke nyttige."),
                t("ac34c5e8", "Nok bidragydere, inklusive dem, der har været uenige med hinanden i deres tidligere bedømmelser, var enige om, at 2 af dine noter ikke er nyttige. Her er deres feedback:"),
                t("ib7886d0", "Se disse noter på din profil"),
                t("b0a7d360", "Du risikerer midlertidigt at blive udelukket fra at skrive noter."),
                t("e473f876", "Bidragydere, hvis 5 seneste nyttige eller ikke nyttige noter inkluderer 3 noter med statussen Ikke nyttig, bliver midlertidigt udelukket fra at skrive."),
                t("ef490ae8", "Kilder ikke inkluderet, eller upålidelige"),
                t("bf3dc462", "Kilder understøtte ikke noten"),
                t("heb35e12", "Forkerte oplysninger"),
                t("ib117532", "Chikane eller misbrug"),
                t("a7bc3192", "Citerer kilder af høj kvalitet"),
                t("a26f8dc2", "Nem at forstå"),
                t("cbdef06c", "Adresserer direkte påstanden i posten"),
                t("faa5f9e8", "Giver vigtig kontekst"),
                t("gf3b38f4", "Neutralt eller upartisk sprog"),
                t("a50327ea", "Notat ikke nødvendigt i denne post"),
                t("h7c59ea2", "Holdning eller spekulation"),
                t("d60c0064", "Tastefejl eller uklart sprog"),
                t("e06416ca", "Mangler centrale punkter eller er irrelevant"),
                t("cff1aa8c", "Argumenterende eller forudindtaget sprog"),
                t("c5d55592", "Giver unikke oplysninger eller kontekst"),
                t("f3e6f0aa", "Informativ"),
                t("hc2b6a7e", "Ikke-dømmende og/eller empatisk"),
                t("bbe8b4ac", "Mening, spekulation eller partisk"),
                t("dd1f17ea", "Ikke emnerelateret"),
                t("if966b54", "Forældede oplysninger"),
                t("fdc2060a", "Du skal have en højere påvirkningsscore for at kunne skrive notater."),
                t("edd80858", "Se din profil og score"),
                t("eec24ff6", "Begynd at bedømme"),
                t("eb9dc3ec", "Bidragydere som dig hjælper i fællesskab med at identificere nyttige notater, der skal vises som kontekst i posts for at holde folk informeret."),
                t("f2f61788", "Lås op for muligheden for at skrive"),
                t("ca7e11e6", "Når din score for vellykkede bedømmelser har nået 5 eller højere, låser du op for muligheden for at skrive dine egne Fællesskabsnoter."),
                t("e7beb100", "Se din profil og feedback"),
                t("fd02e290", "Vis alle regler"),
                t("ee7b8050", "Du er midlertidigt udelukket fra at skrive nye noter."),
                t("b8cc2e9a", "Fordi dine seneste notater er blevet vurderet som ikke nyttige, er din skriveadgang blevet midlertidigt låst."),
                t("f6c8613e", "Feedback fra bidragydere på dine noter:"),
                t("fd5c2282", "Få flere gode råd om at skrive notater"),
                t("c23e67ea", "Lås op for din evne til at skrive"),
                t("i0e66c5a", "Vælg én"),
                t("j8e3e3be", "Vælg mindst én"),
                t("f1e851f0", "Angiv en forklaring"),
                t("ff5dcac8", "Din forklaring er for lang"),
                t("b47b5a16", "Alle felter skal udfyldes. Sørg for, at du har besvaret alle spørgsmål."),
                t("g9cffe16", "Din note indeholder ikke en kilde"),
                t("bfa9e276", "Skriv notatet om, så det er nyttigt i alle posts, der indeholder billedet, eller gennemgå dit svar på det første spørgsmål i denne formular"),
                t("ja36d83e", "Skriv notatet om, så det er nyttigt i alle posts, der indeholder videoen, eller gennemgå dit svar på det første spørgsmål i denne formular"),
                t("i6488a04", "Skriv notatet om, så det er nyttigt i alle posts, der indeholder mediet, eller gennemgå dit svar på det første spørgsmål i denne formular"),
                t("j6e12b24", "Det indeholder et billede eller en video, der er digitalt redigeret"),
                t("eda68484", "Det er digitalt redigeret"),
                t("e198eb8c", "Skriv et notat med kontekst, som du mener bør vises sammen med videoen for at informere andre."),
                t("a9803d44", "Skriv et notat med kontekst, som du mener bør vises sammen med Tweetet for at informere andre."),
                t("j7ddf18a", "Skriv et notat med kontekst, som du mener bør vises på alle posts med linket for at holde andre informeret."),
                t("g3874520", "Skriv et notat med kontekst, som du mener bør vises sammen med posten for at holde andre informeret."),
                t("ac1141aa", "Skriv et notat for at hjælpe andre bidragydere i Fællesskabsnoter med at forstå, hvorfor denne video ikke er vildledende eller ikke behøver mere kontekst."),
                t("f99ebcfc", "Skriv et notat for at hjælpe andre bidragydere i Fællesskabsnoter med at forstå, hvorfor dette billede ikke er vildledende eller ikke behøver mere kontekst."),
                t("h641949e", "Skriv et notat for at hjælpe andre bidragydere i Fællesskabsnoter med at forstå, hvorfor denne post ikke er vildledende eller ikke behøver mere kontekst."),
                t("c926cff6", "I lyset af den aktuelle dokumentation, mener jeg, at denne post sandsynligvis er ..."),
                t("e0ef7a2c", "I lyset af den aktuelle dokumentation, mener jeg, at dette billede sandsynligvis er ..."),
                t("g491d33a", "I lyset af den aktuelle dokumentation, mener jeg, at denne video sandsynligvis er ..."),
                t("b253e462", "I lyset af den aktuelle dokumentation, mener jeg, at den side, der linkes til, sandsynligvis er ..."),
                t("b1b2d004", "Potentielt vildledende og vil have gavn af mere kontekst"),
                t("ha9655c2", "Ikke vildledende"),
                t("ebd2de06", "Hvorfor mener du, at denne post kan være vildledende?"),
                t("i865abe8", "Hvorfor mener du, at dette billede kan være vildledende?"),
                t("add096c6", "Hvorfor mener du, at denne video kan være vildledende?"),
                t("eb604e2e", "Hvorfor mener du, at den side, der linkes til, kan være vildledende?"),
                t("c33bc7d4", "Det indeholder en faktuel fejl"),
                t("aadb676c", "Det indeholder forældede oplysninger, der kan være vildledende"),
                t("g21a0ef4", "Det er en fejlagtig fremstilling eller mangler vigtig kontekst"),
                t("daf354de", "Det angiver en ubekræftet påstand som fakta"),
                t("d1d2ef84", "Det er en vittighed eller satire, der kan misforstås som fakta"),
                t("bfee6064", "Hvorfor mener du ikke, at denne post er vildledende?"),
                t("dfd1f7f0", "Hvorfor mener du ikke, at dette billede er vildledende?"),
                t("b8623176", "Hvorfor mener du ikke, at denne video er vildledende?"),
                t("ec66e3fc", "Hvorfor mener du, at den side, der linkes til, ikke er vildledende?"),
                t("g228df26", "Det udtrykker en faktuelt korrekt påstand"),
                t("h890a3f2", "Det var korrekt, da det blev delt, men er nu forældet"),
                t("hf607a0a", "Det er tydeligvis satirisk/laver sjov"),
                t("j6ac7742", "Det giver udtryk for en personlig mening"),
                t("b1d82aae", "Har du linket til kilder, du tror, de fleste mennesker ville betragte som troværdige?"),
                t("ae859ee0", "Handler dit notat om posten eller billedet?"),
                t("ba84e7f8", "Handler dit notat om posten eller videoen?"),
                t("ibb784c6", "Om denne specifikke post"),
                t("a21ecb8c", "Om billedet i denne post, og skal vises i alle posts, der indeholder dette billede"),
                t("he0ca8da", "Om videoen i denne post, og skal vises i alle posts, der indeholder denne video"),
                t("d0bf8d34", "Handler dit notat om posten eller linket?"),
                t("db370b9a", "Handler dit notat om posten, billedet eller linket?"),
                t("c35bf10e", "Handler dit notat om posten, videoen eller linket?"),
                t("d96ce0d2", "Dette notat er skrevet på en sådan måde, at det vil være nyttigt i alle posts, der indeholder dette billede."),
                t("a1fb516c", "Dette notat er skrevet på en sådan måde, at det vil være nyttigt i alle posts, der indeholder denne video."),
                t("be46a61e", "Dette notat er skrevet på en sådan måde, at det vil være nyttigt i alle posts, der indeholder dette medie."),
                t("ied1c2c2", "Dette notat er i nogen grad specifikt for denne post og kan være irrelevant for andre."),
                t("gb2433df", function (e) {
                    return "" + e.noteMatchUrl;
                }),
                t("gdfbdd93", function (e) {
                    return "alle " + e.matchCount + " posts";
                }),
                t("d7959c4d", function (e) {
                    return " alle " + e.matchCount + " posts";
                }),
                t("ff5be16d", function (e) {
                    return " alle " + e.matchCount + " posts";
                }),
                t("abdd8d0a", "Rediger note"),
                t("c097608e", "Din note har ingen forklaring"),
                t("ba25898c", "Noter, der forklarer deres kilder, har større chance for at blive bedømt som nyttige."),
                t("e764d704", "Noter, der linker til troværdige kilder, har større chance for at blive bedømt som nyttige."),
                t("gb67e44c", "Indsend uden forklaring"),
                t("d6b758a2", "Indsend uden kilde"),
                t("dc1fa12c", "Konti i Fællesskabsnoter skal have verificerede telefonnumre"),
                t("a1752fde", "Hvis du vil fortsætte med at bidrage til Fællesskabsnoter fra denne konto, skal du verificere dit telefonnummer."),
                t("hef02710", "Ud over at være verificeret skal dit nummer være fra et betroet teleselskab, og det må ikke være tilknyttet en anden konto i Fællesskabsnoter."),
                t("dff9b6bc", "Verificer din telefon"),
                t("f051e434", "Bidragydere i Fællesskabsnoter skal have unikke telefonnumre"),
                t("eaef2f72", "Det ser ud til, at flere bidragydere i Fællesskabsnoter har X-konti, som er tilknyttet dette telefonnummer."),
                t("j78d41b4", "Hvis du vil fortsætte med at bidrage fra denne konto, skal du fjerne dette telefonnummer fra andre X-konti."),
                t("a7c9a176", "Konti i Fællesskabsnoter skal have verificerede telefonnumre fra et betroet teleselskab"),
                t("ec853dfa", "For at reducere brugen af kunstigt oprettede eller virtuelle telefonnumre skal telefonnumre være fra et betroet teleselskab."),
                t("j6e19c58", "Værdier i Fællesskabsnoter"),
                t("ea580ee2", "En hurtig påmindelse om værdierne i Fællesskabsnoter:"),
                t("eac7b6ac", "Bidrage for at skabe forståelse"),
                t("b0381cfc", "Bidrage i god tro"),
                t("f0addddc", "Være hjælpsom – også over for dem, som er uenige"),
                t("h7c7b204", "Hjælp med at bedømme eksisterende notater, før du skriver et nyt"),
                t("i8cae552", "Ved at bedømme hjælper du med at højne kvaliteten af Fællesskabsnoter."),
                t("hd43a218", "Du har nået din daglige grænse for skrivning af notater"),
                t("aaba8ed2", "For at opretholde en høj kvalitet af notater og forhindre spam er der en grænse for, hvor mange notater bidragydere kan skrive hver dag, baseret på deres skrivepåvirkning. Prøv igen senere."),
                t("b98f077c", "Anmod om note-info"),
                t("ee691104", "Anmod om en Fællesskabsnote om denne post"),
                t("f8cbdf02", "Synes du, at denne post er potentielt vildledende? Anmod om en Fællesskabsnote."),
                t("f132d1be", "Bidragydere vil se advarsler i posts, der får nok anmodninger"),
                t("gf71296c", "Hvis der skrives en note, og den bedømmes som nyttig af andre bidragydere, vil den blive vist i posten"),
                t("de0685b4", "X vælger ikke, hvilke noter der vises – Fællesskabsnoter er skrevet af folket, til folket"),
                t("f8ac3c88", "Acceptér, og anmod om en note"),
                t("a8edd0ea", "Tilføj en kilde?"),
                t("a39a0de6", "Link til en X-post"),
                t("j819c176", "Hjælp bidragydere i Fællesskabsnoter ved at inkludere et link til en X-post, der forklarer, hvad der muligvis er vildledende."),
                t("e15b3b44", "Linket skal være til en X-post. Eksempel: x.com/user/status/...."),
                t("c81085a4", "Fællesskabsnoter"),
                t("c363515c", "tilgængelige for offentligheden"),
                t("cb6b0138", "Tak! Din anmodning blev sendt"),
                t("c196e8b8", "Hvis der skrives et notat, og det bedømmes som nyttigt, vil du kunne se det i posten."),
                t("a9491efa", "Anmodning om Fællesskabsnote sendt"),
                t("f060d1cc", "Slet anmodning"),
                t("f499f824", "Slet din anmodning"),
                t("hd1bc518", "Der kan gå et par minutter, før du kan foretage en ny anmodning i denne post"),
                t("geb8d31d", "tilmelde dig."),
                t("gc399930", "Anmodning om info om daglig grænse"),
                t("fee815e4", "Du har nået din daglige grænse for notatanmodninger"),
                t("i7eb7900", "Din daglige grænse øges, hvis du laver anmodninger til posts, der får nyttige notater."),
                t("d1a3817e", "Dette hjælper med at belønne personer, der finder potentielt vildledende posts, som kan have gavn af mere kontekst."),
                t("c031c77a", "Din daglige grænse kan blive reduceret, hvis du laver for mange anmodninger til posts, som folk ikke er enige i behøver et notat."),
                t("f87129d2", "Det hjælper med at forhindre spam og holder notatskriverne fokuseret på posts, der kan have gavn af nyttige notater."),
                t("jdd4a572", "Din konto skal have et verificeret telefonnummer"),
                t("i0f07c07", "Verificer din telefon"),
                t("i157c1a8", "Denne anmodning er blevet slettet."),
                t("a9f4ca9c", "Bidragydere i Fællesskabsnoter kan nu se dit notat "),
                t("eb8f7c0c", "Andre bidragydere kan nu bedømme din note"),
                t("h87c6bd6", "Andre bidragydere kan nu se din note"),
                t("gc1a5bce", "De bedømmer, om den er nyttig"),
                t("i0e950ca", "Hvis dit notat opnår statussen Nyttigt, begynder det at blive vist som kontekst til alle, som ser posten"),
                t("a047e800", "Din note hjælper andre bidragydere med at få mere kontekst, når de bedømmer noter"),
                t("cec8a38c", "Hvis din note får statussen Nyttig, optjener du skrivepåvirkning."),
                t("a377532e", "Hvis nok personer med forskellige synspunkter bedømmer det som nyttigt, bliver det vist som kontekst til alle, som ser posten"),
                t("d790fa4e", "Notestatusser defineres ikke af flertalsregler"),
                t("e90cda68", "For at identificere noter, der er nyttige for en lang række mennesker, kræver notestatusser enighed mellem bidragydere, som nogle gange har været uenige i deres tidligere bedømmelser."),
                t("j5a1d85a", "Se din note"),
                t("b25b64d6", "Din note blev indsendt!"),
                t("g1428d70", "Din note blev indsendt!"),
                t("a4ec7004", "Der sker nu følgende:"),
                t("c4093274", "Om Fællesskabsnoter efter indsendelse"),
                t("bc8746a6", "Bedøm mindst ét notat, før du skriver et nyt notat."),
                t("ce3c80b8", "Community Notes har brug for dine vurderinger for at holde kvaliteten høj. "),
                t("fa6a075a", "Notater, der foreslår kontekst, som skal vises sammen med posten"),
                t("acb7ecae", "Notater, der forklarer, hvorfor tilføjet kontekst ikke er nødvendig"),
                t("d9a5fc06", "Bedøm opslag"),
                t("b73cebd2", "Bedøm post og notater"),
                t("ad8883f2", "Ingen notater i denne post"),
                t("efd14e7a", "Indlæser noter"),
                t("e65b7186", "Folk har foreslået Fællesskabsnoter om denne post"),
                t("bcc14a68", 'Fællesskabsnoter er et program, hvor frivillige bidragydere tilføjer kontekst (kaldet "notater") til posts, som de mener kan være vildledende. Notater nedenfor kan bedømmes af bidragydere, og hvis de bliver bedømt som nyttige i øjeblikket, vil de blive vist som kontekst i posten. Hvis et notat bliver bedømt som nyttigt i øjeblikket, og du er uenig, kan du anmode om en yderligere gennemgang – hvilket betyder, at flere bidragydere vil gennemgå notatet, og bedømmelsen kan ændre sig. '),
                t("c21313ba", "Noter, der i øjeblikket bedømmes som ikke nyttige "),
                t("c2c40120", "Vis alle noter"),
                t("ia596d40", "Ser du noget, som du kunne tænke dig at forbedre?"),
                t("deff0bde", "Skriv en note"),
                t("i8e85ef8", "Tilmeld dig Fællesskabsnoter, og få adgang til notatskrivning og andre funktioner, der kan hjælpe med at skabe en verden, der er bedre informeret"),
                t("af88892a", "Disse notater er tilføjet af bidragydere i Fællesskabsnoter, som mener, at posten er potentielt vildledende og vil have gavn af yderligere kontekst."),
                t("cf8a40a6", "Notater er kun synlige i Fællesskabsnoter, indtil de bliver bedømt som nyttige af nok bidragydere."),
                t("g22c8c30", "Hvis disse notater bliver bedømt som nyttige af nok bidragydere, inklusive dem, der plejer at være uenige i deres tidligere bedømmelser, begynder de at blive vist offentligt sammen med posten som tilføjet kontekst."),
                t("jf04b084", "Disse notater er tilføjet af bidragydere, der mener, at posten ikke er vildledende og ikke har brug for yderligere kontekst."),
                t("g5a72e98", "Disse notater er kun synlige i Fællesskabsnoter som yderligere oplysninger til bedømmere og bliver ikke vist som kontekst til posten, selvom de opnår status som nyttige."),
                t("h53cb7de", "Hvad synes du om opslaget?"),
                t("dc3bfc82", "Hvad, hvis noget, kan du lide ved opslaget?"),
                t("b4704bf4", "Hvad, hvis noget, kan du ikke lide ved opslaget?"),
                t("ed5156fa", "Der opstod en fejl under lagring af din bedømmelse. Prøv igen."),
                t("d5f9fb42", "Du har bedømt dette Fællesskabs-boost"),
                t("j6aa6172", "Slet bedømmelse?"),
                t("i4112750", "Dette kan ikke fortrydes."),
                t("bd7eb888", "Se alle notater i denne post"),
                t("i97b83f6", "Der opstod en fejl under afsendelse af din appel. Prøv igen."),
                t("a038ab9a", "Oversæt notat"),
                t("i606fc4c", "Om appeller i Fællesskabsnoter"),
                t("b664c554", "Anmod om yderligere bidragydergennemgang"),
                t("ab66e1f2", "Sådan virker det:"),
                t("e36d807c", "Flere bidragydere i Fællesskabsnoter vil modtage en anmodning om at gennemgå og bedømme dette notat."),
                t("d8afb99c", "Hvis bidragydernes bedømmelser ændrer notatets status, så det ikke længere er nyttigt i øjeblikket, bliver notatet ikke længere vist i posten."),
                t("f9e1090c", "Bedømmelserne laves af bidragydere, ikke af X."),
                t("i80c8a84", "Yderligere gennemgang anmodet."),
                t("f93d4391", "anmode om yderligere bidragydergennemgang af dette notat"),
                t("e457970a", "Oplysninger om note"),
                t("df587b98", "Note-id"),
                t("h201bdc8", "Forfatter af note"),
                t("h74b96b0", "Notat indsendt "),
                t("ge25848a", "Aktuel status"),
                t("d6db34cc", "Kræver flere bedømmelser"),
                t("ce8b505e", "Ikke nyttig"),
                t("e5be8156", "Notatets status beregnet ved hjælp af en algoritme med åben kildekode"),
                t("fca23c42", "Nok bidragydere med forskellige synspunkter var enige om, at dette notat er nyttigt, så det bliver vist som kontekst i posten."),
                t("hef420c2", "Denne note er endnu ikke blevet bedømt af nok bidragydere med forskellige synspunkter."),
                t("j3af43c4", "Nok bidragydere med forskellige synspunkter var enige om, at denne note ikke er nyttig."),
                t("f79d812c", "Bedømt som nyttigt og vises inden for én time efter det blev postet"),
                t("cc02373e", "Bedømt som nyttigt og vises inden for én time efter det blev foreslået"),
                t("d9f72d90", "Matchet og vises inden for én time efter det blev postet"),
                t("fc6e4594", "Top-tags udvalgt efter bedømmere"),
                t("f7427d6f", "denne post"),
                t("aa94541d", "denne post"),
                t("fe821ebb", "denne post"),
                t("c5cc74e5", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                t("ff14b6b8", "en anden post"),
                t("b5cc9c47", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                t("hb90fe9a", function (e) {
                    return e.matches + " posts";
                }),
                t("i23a64ea", function (e) {
                    return e.matches + " posts";
                }),
                t("h6c5af52", function (e) {
                    return e.matches + " posts";
                }),
                t("c2584f58", function (e) {
                    return e.matches + " posts";
                }),
                t("a0dec723", "denne post"),
                t("f20fa57c", function (e) {
                    return e.matches + " posts";
                }),
                t("bd60b152", function (e) {
                    return e.matches + " posts";
                }),
                t("b95920ef", "denne post"),
                t("f8dcced2", function (e) {
                    return e.matches + " posts";
                }),
                t("iaf626c0", function (e) {
                    return e.matches + " posts";
                }),
                t("e3002eab", "denne post"),
                t("df3f2d52", function (e) {
                    return e.matches + " posts";
                }),
                t("cd83d952", function (e) {
                    return e.matches + " posts";
                }),
                t("ia35cd39", "denne post"),
                t("a499228a", function (e) {
                    return e.matches + " posts";
                }),
                t("cf9ac658", function (e) {
                    return e.matches + " posts";
                }),
                t("fa56f7cb", "denne post"),
                t("b826c19c", function (e) {
                    return e.matches + " posts";
                }),
                t("c4618eb8", function (e) {
                    return e.matches + " posts";
                }),
                t("i56af3fd", "denne post"),
                t("g1f275b6", function (e) {
                    return e.matches + " posts";
                }),
                t("i2cac82c", function (e) {
                    return e.matches + " posts";
                }),
                t("a2ae91f1", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                t("d3205ee4", function (e) {
                    return e.matches + " posts";
                }),
                t("daeff73b", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                t("fc546c2e", function (e) {
                    return e.matches + " posts";
                }),
                t("i1df5f5d", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                t("g03f5337", "denne post"),
                t("f5b30b8a", function (e) {
                    return e.matches + " posts";
                }),
                t("e0a49d5b", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                t("e25f9fd4", function (e) {
                    return e.matches + " posts";
                }),
                t("bae49ec3", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                t("d595bffd", "denne post"),
                t("ef8a55a6", function (e) {
                    return e.matches + " posts";
                }),
                t("a3aa3cb1", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                t("d5061d00", "Vises ikke på X"),
                t("e272836c", "Slet note?"),
                t("da5a5d8c", "Når du har slettet dette notat, bliver det fjernet permanent fra Fællesskabsnoter."),
                t("a804a8f4", "Flere notater har brug for din hjælp"),
                t("ib9628b8", "Bedøm flere notater for at forøge din bedømmelsespåvirkning"),
                t("bf08be2e", "Bedøm flere notater nu"),
                t("i26425d8", "Nogenlunde"),
                t("c6e683d0", "Send og acceptér"),
                t("b3fcaac6", "Overvej at åbne og gennemgå kilderne, før du bedømmer dette notat"),
                t("e8a33850", "Åbn og gennemgå kilderne, før du bedømmer dette notat"),
                t("ca6f04ec", "At gennemgå de kilder, der er citeret i notaterne, hjælper med at sikre, at de er korrekte. "),
                t("a7338bc2", "Er denne note nyttig?"),
                t("bd0b6422", "Er dette en nyttig forklaring på, hvorfor tilføjet kontekst ikke er nødvendig?"),
                t("ac7f9746", "Hvad fandt du nyttigt ved den?"),
                t("c7751804", "Hvad var ubehjælpsomt ved den?"),
                t("dc9c823a", "Dette notat vil være nyttigt i alle posts, der indeholder linket."),
                t("da0bb868", "Dette notat vil være nyttigt i alle posts, der indeholder videoen."),
                t("e8694748", "Dette notat vil være nyttigt i alle posts, der indeholder billedet."),
                t("b487e12e", "Dette notat vil være nyttigt i alle posts, der indeholder mediet."),
                t("hfdb963e", "Dette notat er for specifikt for denne post og kan være irrelevant for andre posts, der indeholder det samme link."),
                t("bd6742c2", "Dette notat er for specifikt for denne post og kan være irrelevant for andre posts, der indeholder den samme video."),
                t("ded3a8a2", "Dette notat er for specifikt for denne post og kan være irrelevant for andre posts, der indeholder det samme billede."),
                t("c1e42c92", "Dette notat er for specifikt for denne post og kan være irrelevant for andre posts, der indeholder det samme medie."),
                t("af198630", "tilgængelige for offentligheden"),
                t("d39720d3", "Nyttig"),
                t("i7d91dc9", "Nogenlunde nyttig"),
                t("c75b7fb4", "Ikke nyttig"),
                t("d9025c46", function (e) {
                    return e.matches + " posts";
                }),
                t("ce1c95d6", function (e) {
                    return "" + e.noteDisplayUrl;
                }),
                t("jd7c58d8", function (e) {
                    return e.matches + " posts";
                }),
                t("ebb0b116", function (e) {
                    return e.matches + " posts";
                }),
                t("f9005c24", function (e) {
                    return e.matches + " posts";
                }),
                t("a4886e54", function (e) {
                    return "" + e.noteDisplayUrl;
                }),
                t("h8335712", "Din note"),
                t("b9f18eec", "Bedømt som nyttigt i øjeblikket"),
                t("j33f6520", "I øjeblikket vurderet som ikke nyttigt"),
                t("idc0e9fc", "Tilmeld dig som bidragyder til Fællesskabsnoter"),
                t("a83cccfa", "Bidragydere kan gennemgå forslag til notater, skrive notater, spore deres effekt og meget mere!"),
                t("c2a6ec00", "Vil du tilmelde dig Notater i Fællesskaber?"),
                t("d2470b62", "Hjælp folk med at holde sig bedre informeret."),
                t("ab23a972", "Følg samtalen"),
                t("c68f3bc0", "Lær mere om vores værdier"),
                t("dfb1f498", "Feedback"),
                t("a584cfa7", "Send os en direkte besked @CommunityNotes"),
                t("e4d93012", "Flere har anmodet om en Fællesskabsnote."),
                t("e55983c0", "Ingen anmodere har endnu angivet et link til en kilde, som forklarer, hvorfor en note er nødvendig"),
                t("h23be93e", "Anmodere kan inkludere en X-post for at hjælpe med at forklare, hvorfor de mener, at et notat ville være nyttigt. De inkluderede nedenstående posts"),
                t("ca6ae344", "Fanelinje i Fællesskabsnoter"),
                t("fe27c1e2", "Noter"),
                t("ff692d64", "Din profil"),
                t("cb1adfa0", "Download data"),
                t("jaf0d42c", "Dine noter"),
                t("fa9a644a", "Hvis 3 af dine 5 seneste notater med statussen Nyttige eller Ikke nyttige vurderes som Ikke nyttige, bliver din mulighed for at skrive notater midlertidigt låst."),
                t("i4014342", "Undgå at blive udelukket fra at skrive. Her kan du læse feedback fra bidragydere om dine to notater."),
                t("j9897a7c", "Få gode råd om at skrive notater"),
                t("ac71a5a0", "Bedøm noter, der har brug for hjælp"),
                t("h544e3c8", "Nu skal bidragydere låse op for muligheden for at skrive notater ved at opnå en bedømmelsespåvirkning på 5."),
                t("d88c63f6", "Nyhed: Lås op for muligheden for at skrive notater"),
                t("bd31adde", "Du har forladt programmet Fællesskabsnoter."),
                t("a796c19c", "Deltag igen"),
                t("h837a96c", "Du vil deltage i programmet Fællesskabsnoter igen."),
                t("a4d4bcb9", function (e) {
                    return "Hvis du vil deltage igen, kan du gøre det her om " + e.numDaysToRejoin + " dag" + i(e.numDaysToRejoin, "", "e") + ".";
                }),
                t("a490bc51", "Læs mere"),
                t("c94ad3e8", "send os gerne feedback"),
                t("ee160790", "Slettede noter"),
                t("b3de4a42", "Bedømmelsespåvirkning"),
                t("a7b0393c", "Skrivepåvirkning"),
                t("id568acc", "Topforfatter"),
                t("e25f9ad6", "Bedømmelser, der hjalp et notat med at opnå status som nyttigt"),
                t("a0697fbc", "Flot arbejde! Disse bedømmelser identificerede nyttige notater, der bliver vist i posts og hjælper med at holde folk informeret."),
                t("a3311a60", "Disse bedømmelser identificerede nyttige notater, der bliver vist som kontekst i posts og hjælper med at holde folk informeret."),
                t("bbc44f5a", "Disse bedømmelser identificerer nyttige notater, der bliver vist som kontekst i posts og hjælper med at holde folk informeret."),
                t("b4f21858", "Bedømmelser, der hjalp en note med at opnå statussen Ikke nyttig"),
                t("d46b6bc8", "Disse bedømmelser forbedrer Notater i Fællesskaber ved at give feedback til notatforfattere og give bidragydere mulighed for at fokusere på de mest lovende notater."),
                t("a5e6ba6a", "Bedømmelser af notater som nyttige, der ender med en status som ikke nyttige"),
                t("a22929e4", "Bedømmelser af notater som ikke nyttige, der ender med en status som nyttige"),
                t("b76dd726", 'Disse bedømmelser er almindelige og kan føre til statusændringer, hvis nok personer er enige om, at et " nyttigt" notat ikke er tilstrækkeligt nyttigt.'),
                t("j29cc0f2", "Disse bedømmelser tæller to gange, fordi de ofte indikerer støtte til notater, som andre anså for at være af lav kvalitet."),
                t("cd4333d0", "Bare rolig, det sker for alle! "),
                t("e9fa53ac", "Bedømmelser af noter, der i øjeblikket ikke har statussen Nyttig eller Ikke nyttig."),
                t("fc664dee", "Bedømmelser foretaget efter en status er nået"),
                t("f024ec64", "Disse bedømmelser kan styrke en notes status eller hjælpe med at omstøde den."),
                t("e1ee08e6", "Skrivepåvirkning"),
                t("je3fc324", "Dine noter, der fik statussen Nyttig"),
                t("f7358242", "Noter, der fik statussen Nyttig"),
                t("j8e9b514", "Godt klaret! Disse notater bliver nu vist til alle, der ser posten, hvor de giver kontekst og hjælper med at holde folk informeret."),
                t("e9e57c5c", "Disse notater bliver nu vist til alle, der ser posten, hvor de giver kontekst og hjælper med at holde folk informeret."),
                t("fee0d8a8", "Disse notater bliver vist på X, hvor de giver kontekst til posts og hjælper med at holde folk informeret."),
                t("iab44364", "Dine noter, der fik statussen Ikke nyttig"),
                t("d8c90438", "Noter, der fik statussen Ikke nyttig"),
                t("accaa48e", "Disse noter er blevet vurderet som Ikke nyttige af nok bidragydere, inklusive dem, der nogle gange er uenige i deres tidligere bedømmelser. Du kan se disse noter og den feedback, de har fået, på din profil.\nStatussen for en note kan ændre sig, efterhånden som den bliver bedømt af flere personer."),
                t("fa2156f6", "Disse noter er blevet bedømt som Ikke nyttige af nok bidragydere, inklusive dem, der nogle gange er uenige i deres tidligere bedømmelser.\nStatussen for en note kan ændre sig, efterhånden som den bliver bedømt af flere personer."),
                t("d004c768", "Noter, der kræver flere bedømmelser"),
                t("f3d6d6c0", "Noter, der endnu ikke har statussen Nyttig eller Ikke nyttig."),
                t("d68a370c", "Seneste opdatering: "),
                t("f10aaf3c", "Tips til bedømmelse af noter"),
                t("b9793c9a", "Du har ikke skrevet nogen noter endnu"),
                t("bed66f92", "Sådan starter du:"),
                t("a3ca686a", "Se tips til at skrive nyttige noter"),
                t("ga8034c6", "Tryk på menuen ••• i en post for at skrive et notat"),
                t("h4109636", "Hvis du mener, at en post er potentielt vildledende, så skriv et notat, der tilføjer nyttig kontekst til folk, der støder på den."),
                t("ec30e9ac", "Andre bidragydere vil vurdere hjælpsomheden af din note"),
                t("e0c42f80", "Hvis det opnår statussen Nyttigt, bliver det vist som kontekst til alle, som ser posten"),
                t("ife4baaa", "Fællesskabsnoter fungerer ikke efter flertalsregler. For at identificere notater, der er nyttige for en lang række mennesker, kræver statusser enighed mellem bidragydere, som nogle gange har været uenige i deres tidligere bedømmelser. Dette hjælper med at forhindre ensidige bedømmelser."),
                t("a0c552ee", "Din indflydelse vil blive vist her"),
                t("a4e5ea3c", "Du har ikke bedømt nogen noter endnu"),
                t("g9a28bde", "Gennemse noter, der har brug for hjælp"),
                t("dc0046e2", "Gennemse forsiden i Fællesskabsnoter"),
                t("fecae168", "Der finder du noter, der har brug for flere vurderinger, og hvor din vurdering specifikt kan hjælpe."),
                t("h525e29e", "Hjælp med at finde noter, der kan være nyttige for mange mennesker"),
                t("f6db7706", "De bedste Fællesskabsnoter adresserer postens påstand direkte, er skrevet i et nyttigt og klart sprog og tilføjer kilder, der anses for at være pålidelige af en bred vifte af mennesker."),
                t("f636b582", "Hjælp med at finde noter, der ikke er nyttige"),
                t("f58f4f62", "Bedømmelse af notater af lav kvalitet forbedrer Fællesskabsnoter ved at give feedback til notatforfattere og give bidragydere mulighed for at fokusere på de mest lovende notater."),
                t("cf30af22", "Vidste du det?"),
                t("d145b0fa", "Notestatusser nås ikke efter flertalsregler. For at identificere noter, der er nyttige for en lang række mennesker, kræver notestatusser enighed mellem bidragydere, som nogle gange har været uenige i deres tidligere bedømmelser. Dette hjælper med at forhindre ensidige bedømmelser."),
                t("c20a24cc", "Tillykke!"),
                t("d01b8fc8", "Du er topforfatter inden for Fællesskabsnoter."),
                t("jbe2ad46", 'Forfattere med en høj skrivepåvirkning og en høj andel af notater med statussen "nyttig" får adgang til:'),
                t("d2dc3d4c", "Prioritet for notatadvarsler"),
                t("heb73816", "Notatforslag fra topforfattere er mere tilbøjelige til at udløse meddelelser for at få bedømmerens opmærksomhed."),
                t("b760d51a", "Badge i aliasprofil"),
                t("ief63e50", "Topforfattere kan identificeres på et badge i deres profil i Fællesskabsnoter."),
                t("jd6b88ca", "Notater om medier"),
                t("c39bdf5a", "Topforfattere kan skrive notater om medier, der er vist i flere posts, og dermed holde mange flere mennesker bedre informeret."),
                t("efb9a9e0", "Intet at se her"),
                t("a1529ce7", "Læs mere"),
                t("f07ed596", "Bidragydere som dig hjælper tilsammen med at identificere nyttige notater, der skal vises som kontekst på X, og holder folk orienteret."),
                t("h2b5268a", "Godt klaret! Bedøm flere notater for at fortsætte med at øge din påvirkning."),
                t("e86c87a0", "Læs flere notater"),
                t("ad98f836", "Din bedømmelsespåvirkning er blevet negativ. Bare rolig!"),
                t("e2d7c914", "Fortsæt med at bedømme notater"),
                t("a5427624", "Gennemse forsiden i Fællesskabsnoter for at finde notater, der har brug for bedømmelser fra flere bidragydere."),
                t("e227a7fa", "Statussen for et notat kan altid ændre sig"),
                t("eda73c9c", "Nogle gange kan dine bedømmelser være i modstrid med statussen for et notat. Det er ikke et problem! Hvis flere bidragydere er enige med dig, kan statussen blive omstødt, og din påvirkning vil ændre sig."),
                t("cfa3b664", "Nu kan du skrive notater i Fællesskaber!"),
                t("j44125ee", "Bidragyderen har ikke skrevet nogen noter endnu."),
                t("da55067c", "Tjek dette område senere!"),
                t("f893c3b8", "Tilmeld dig Fællesskabsnoter"),
                t("a701795c", "Ingen Fællesskabsnoter endnu"),
                t("db08295e", "Vil du deltage?"),
                t("ha275800", "Det ser ud til, at du ikke er en del af pilotprogrammet Fællesskabsnoter. Tilmeld dig nu for at hjælpe folk med at holde sig bedre informeret."),
                t("ce0a213a", "Hvis du vil oprette et notat, skal du vælge ikonet for Notater i Fællesskaber i menuen i en post. De notater, du opretter, vises her."),
                t("c87f3cf8", "Note"),
                t("a5b19492", "Denne note findes ikke"),
                t("c21d1b2a", "Noter får statussen Nyttig eller Ikke nyttig, når tilstrækkeligt mange bidragydere er enige, inklusive personer, der sommetider har været uenige i deres tidligere bedømmelser. Dette hjælper med at sikre, at noter er nyttige for et bredt udvalg af mennesker, og forhindrer ensidige bedømmelser."),
                t("c7b59cde", "Indstillinger for Fællesskabsnoter"),
                t("c8be1d0d", "Få mere at vide."),
                t("a5a2330c", "Posts med samme medie"),
                t("ad071b5c", "Posts med samme link"),
                t("b92967c0", "Dette notat er ikke et medienotat"),
                t("i92fddce", "Notatet vises automatisk i nedenstående posts, hvis nok personer synes, det bør vises."),
                t("f5ce7a00", "Denne medie-post har endnu ingen matches."),
                t("e1288bdc", "Underretninger når et notat har brug for hjælp"),
                t("ca14eab4", "Modtag meddelelser, når en fællesskabsnote har brug for din bedømmelse."),
                t("gb2bc3d0", "Jeg er på 🔥"),
                t("c35ebcd2", "Så mange som jeg kan hjælpe med – op til nogle få stykker om dagen"),
                t("ba165b3c", "Ofte"),
                t("g72e2a58", "Nogle få underretninger om ugen"),
                t("idd249e0", "Sommetider"),
                t("if2e01ee", "Nogle få underretninger om måneden"),
                t("fdaeaab8", "Der opstod en fejl under lagringen af dine indstillinger. Prøv igen."),
                t("db4e443a", "Dine indstillinger er blevet gemt."),
                t("dc11636c", "Sprog som du taler"),
                t("fae059c6", "Forlad programmet Fællesskabsnoter"),
                t("ed37123a", "Du forlader programmet Fællesskabsnoter"),
                t("c1a554a2", "Her er noget, du skal vide:"),
                t("j59355fe", "Du vil ikke kunne skrive nye Fællesskabsnoter."),
                t("c23420ec", "Du modtager ikke meddelelser fra Fællesskabsnoter, medmindre de er relateret til din aktivitet på X."),
                t("c76031ee", "Din anonyme profil i Fællesskabsnoter og dine tidligere bidrag vil fortsat være offentligt tilgængelige. Du vil stadig kunne se og slette dine noter."),
                t("be4f9106", "Du kan deltage igen efter 90 dage."),
                t("hf68e810", "Fællesskabsnoter er et program, der har til formål at skabe en verden, der er bedre informeret. Det giver folk på X mulighed for i fællesskab at føje nyttige notater til posts, der kan være vildledende."),
                t("jdb52860", "Bidragydere skriver og bedømmer noter"),
                t("c104025c", "Bidragydere er personer som dig på X, der har valgt at tilmelde sig pilotprogrammet for at skrive og bedømme notater. Jo flere der deltager, jo bedre bliver programmet."),
                t("j7872b8c", "Kun notater, som folk finder nyttige, bliver vist i en post"),
                t("fb59415e", "For at blive vist offentligt som kontekst i posten skal et notat være bedømt som nyttigt af nok personer med forskellige synspunkter. Denne tilgang hjælper med at undgå partiskhed og manipulation og hjælper med at finde notater, der er nyttige for mange mennesker."),
                t("f9a44022", "Det er ikke virksomheden X, men folk, der bestemmer, hvad der bliver vist"),
                t("gdf4fbb2", "Virksomheden X hverken skriver, bedømmer eller modererer notater (det ville være et brud på X-reglerne). At give folk en stemme til at træffe disse valg sammen mener vi er en retfærdig og effektiv måde at tilføje oplysninger på, der hjælper folk med at holde sig bedre informeret."),
                t("cc720e6a", "Fællesskabsnoter bygger på datatransparens"),
                t("j2fcd33a", "Data inkluderer bidrag indtil"),
                t("d4a6b322", "Alle data i Notater i Fællesskaber udgives her hver dag, så folk har fri adgang til at analysere dem, finde problemer og spotte muligheder for at gøre Notater i Fællesskaber bedre. Vi glæder os til at blive klogere sammen med dig."),
                t("c359263a", "Lær, hvordan du bruger og analyserer data i Fællesskabsnoter "),
                t("b8a27fe2", "i vores guide"),
                t("j1c99e00", "Data for noter"),
                t("i6f69314", "Data for bedømmelser"),
                t("b7e4c114", "Notatets statushistorikdata"),
                t("d7f19114", "Statusdata for brugertilmelding"),
                t("b6008808", "Data om notatanmodning"),
                t("h786cd7a", "Data for noter er ikke tilgængelige endnu"),
                t("d0fe8052", "Data for bedømmelser er ikke tilgængelige endnu"),
                t("c0427f94", "Notatets statushistorikdata er ikke tilgængelige endnu"),
                t("g880d8c0", "Statusdata for brugertilmelding er endnu ikke tilgængelige"),
                t("ab1b3d38", "Data om notatanmodning er ikke tilgængelige endnu"),
                t("c43fb933", "X's udvikleraftale og -politik"),
                t("ed88e742", "Kopiér link til emne"),
                t("h92fe1be", "Notater i Fællesskaber er desværre ikke tilgængelig for dig i øjeblikket."),
                t("f0dc1434", "Fællesskabsnoter er i øjeblikket kun tilgængeligt i USA."),
                t("f8fc0b48", "Opret en mappe"),
                t("c14bcdde", "Søg i bogmærker"),
                t("e9c65c4a", "Søg i bogmærker"),
                t("b92a21d9", function (e) {
                    return "Ingen resultater for " + e.query;
                }),
                t("f191a2ba", "søgeindstillinger"),
                t("a068008a", "Mapper indlæses ikke lige nu"),
                t("f075b0e8", "Rediger mappe"),
                t("beba2a0e", "Opret en ny mappe til bogmærker"),
                t("e41c9b4f", function (e) {
                    return "Saved to " + e.bookmarkFolderName;
                }),
                t("h18f86a4", "Slet mappe"),
                t("f4ea967a", "Mappen er blevet slettet"),
                t("b670aa62", "Mappenavn"),
                t("aece5462", "Mappenavnet er blevet opdateret"),
                t("e3299b94", "Noget gik galt. Prøv at opdatere mappen igen om et øjeblik."),
                t("c09ea714", "Noget gik galt. Prøv at slette mappen igen om et øjeblik."),
                t("gee78816", "Navne på bogmærkemapper må ikke være længere end 25 tegn"),
                t("h9a5daa2", "Slet mappe?"),
                t("ac9d5f56", 'Dine posts bliver stadig gemt i mappen "Alle bogmærker"'),
                t("i6e7e298", "Opret"),
                t("a0ea2fa6", "Feltet Navn skal udfyldes"),
                t("eec37eac", "Der findes allerede en bogmærkemappe med det navn"),
                t("fce0c59e", "Kunne ikke parse animations-JSON. Tjek JSON-formatet i animationsfilen, og prøv igen."),
                t("g0eea6c2", "Kunne ikke læse animations-JSON-filen. Prøv at åbne filen igen."),
                t("ae58026a", "Åbn en Branded Like .json-fil for at forhåndsvise");
            t("hd0bc1eb", function (e) {
                return e.name + " sender direkte";
            }),
                t("bea1f26b", function (e) {
                    return e.name + " sendte direkte";
                }),
                t("ab3ee97f", function (e) {
                    return e.screenName + " er ikke på direkte";
                }),
                t("d39d46c4", "Titlen blev opdateret. Det kan tage op til 30 sekunder, før ændringerne vises."),
                t("e44095a5", function (e) {
                    return "Startede " + e.timestamp;
                }),
                t("j83f29dd", function (e) {
                    return "Afsluttet " + e.timestamp;
                }),
                t("daca8a2c", "Åbn i Dock"),
                t("e3aac82a", "Indlæser udsendelse"),
                t("i0ed3f4e", "Begivenhedsbillede"),
                t("cbae35fa", "Indberet udsendelse"),
                t("fd12ab58", "Samlings-posts"),
                t("a226497c", "Opret et nyt Fællesskab"),
                t("d7346632", "Du har ikke deltaget i nogen Fællesskaber endnu"),
                t("b732a4cc", "Når du har, vises deres posts her."),
                t("hff48914", "Ingen posts blev fundet på dette tidspunkt."),
                t("hb52cc4a", "Prøv igen senere."),
                t("e50e1bb0", "Velkommen til Fællesskaber"),
                t("i6829daa", "Fællesskaber er modererede diskussionsgrupper, hvor folk på X kan komme i kontakt og dele."),
                t("fc5c6914", "Mød andre med dine interesser"),
                t("aa1a9820", "Deltag i Fællesskaber for at få kontakt med folk, som deler dine interesser."),
                t("edef4c82", "Post direkte til et Fællesskab"),
                t("a7640df6", "Dine posts deles med medlemmer af Fællesskabet og dine følgere."),
                t("h3bb8068", "Få hjælp, når du har brug for det"),
                t("a709f8f8", "Administratorer og moderatorer hjælper med at administrere Fællesskaber og holder samtalen på sporet."),
                t("c8d33380", "Nye elementer"),
                t("cb6adb10", "Opdag Fællesskaber"),
                t("df362964", "Find Fællesskaber"),
                t("dfd5031f", function (e) {
                    return e.newTweets + " ny(e) post" + i(e.newTweets, "", "s");
                }),
                t("ha4bb8a9", function (e) {
                    return e.reportedTweets + " indberetning" + i(e.reportedTweets, "", "er");
                }),
                t("caf003b3", function (e) {
                    return e.memberRequests + " anmodning" + i(e.memberRequests, "", "er");
                }),
                t("a2118086", "Sortér posts"),
                t("hb01fe46", "Når du har, vises de her."),
                t("c170a564", "Den indtastede søgeterm gav ingen resultater. Prøv en anden søgeterm."),
                t("cbd1aef8", "Søg efter Fællesskaber og posts"),
                t("fbf01e52", "Søg i Fællesskaber"),
                t("c8a6499c", "Søgeresultater for posts i Fællesskaber"),
                t("af05a978", "Søgeresultater vises her, mens du skriver."),
                t("eb4d2cd0", "Ingen posts fundet."),
                t("a8ecdb4c", "Søgeresultater for seneste posts i Fællesskaber"),
                t("dc6ce7b4", "Medlemmer"),
                t("ga2aa43c", "Moderatorer"),
                t("b139b54a", "Inviter medlemmer"),
                t("cf4898a0", "Søg efter personer"),
                t("g30bc699", function (e) {
                    return "Vis profilen @" + e.screenName;
                }),
                t("e585d844", "Føj til moderatorteam"),
                t("cab7c6f8", "Føj til moderatorteam?"),
                t("e96d5255", function (e) {
                    return "@" + e.screenName + " er nu moderator.";
                }),
                t("f348a395", function (e) {
                    return "Vi kan ikke føje @" + e.screenName + " til moderatorteamet lige nu. Prøv igen senere.";
                }),
                t("c3a1aebe", "Fjern fra moderatorteam"),
                t("c273c8a6", "Fjern fra moderatorteam?"),
                t("c0eb2a53", function (e) {
                    return "@" + e.screenName + " er ikke længere moderator.";
                }),
                t("a5808125", function (e) {
                    return "Vi kan ikke fjerne @" + e.screenName + " fra moderatorteamet lige nu. Prøv igen senere.";
                }),
                t("a51d671b", function (e) {
                    return "Udeluk @" + e.screenName + " fra Fællesskab";
                }),
                t("cdd87524", "Ingen er her endnu"),
                t("cca51910", "Når folk deltager i dette Fællesskab, bliver de vist her."),
                t("c9d56b72", "Fortæl os lidt om dit Fællesskab. Du kan altid ændre disse oplysninger senere."),
                t("c1ad5a12", "Det ser ud til, at vi har problemer med at oprette dit nye Fællesskab. Prøv igen senere."),
                t("f713fbd2", "Medlemskab"),
                t("d1fa71fc", "Godkendelsesspørgsmål (valgfrit)"),
                t("a0a16d38", "Alle kan deltage og/eller blive inviteret til Fællesskabet."),
                t("ce0523a8", "Begrænset"),
                t("i1aad6ec", "Folk skal anmode om at deltage, og moderatorteamet skal godkende disse anmodninger. Personer, der inviteres af moderatorteamet, godkendes automatisk."),
                t("c85960a0", "Tillad, at medlemmer sender invitationer"),
                t("ca373cd2", "Personer, der inviteres af eksisterende medlemmer, godkendes automatisk."),
                t("dfdcc6b4", "Hold styr på, hvem der kan deltage i dit Fællesskab. Husk, at alle Fællesskaber er synlige for alle på X."),
                t("h3e55b40", "Fællesskabets navn"),
                t("dd71d9c9", function (e) {
                    return "Navnet skal være mellem " + e.minCharacterCount + " og " + e.maxCharacterCount + " tegn og må ikke omfatte hashtags eller @brugernavne";
                }),
                t("cf65e56b", function (e) {
                    return "Navnet skal være mellem " + e.minCharacterCount + " og " + e.maxCharacterCount + " tegn";
                }),
                t("d936eeca", "Navne må ikke omfatte hashtags eller @brugernavne."),
                t("e2df7cf2", "Fællesskabets formål"),
                t("be9bb312", "Et stærkt formål beskriver dit Fællesskab og fortæller folk, hvad de kan forvente"),
                t("e988475f", function (e) {
                    return "Formålet skal være mellem " + e.minCharacterCount + " og " + e.maxCharacterCount + " tegn";
                }),
                t("gcddfba8", "Godkendelsesspørgsmål"),
                t("hf86d862", "Når brugere anmoder om at blive medlem, kan de svare på dette spørgsmål. Deres svar vil blive vist sammen med deres anmodning. Du kan fjerne spørgsmålet ved at lade det stå tomt."),
                t("i88b7305", function (e) {
                    return "Spørgsmål skal være mindre end " + e.maxCharacterCount + " tegn";
                }),
                t("dce5e1b4", "Administrationsværktøjer"),
                t("c5d8c93e", "Moderatorværktøjer"),
                t("c8c7f9fc", "Gennemgang påkrævet"),
                t("a87df2ee", "Administration af Fællesskab"),
                t("ee609174", "Generelle indstillinger"),
                t("ab19cdaa", "Spam-indstillinger"),
                t("d755f47d", function (e) {
                    return e.count + " ny/nye post" + i(e.count, "", "s") + " at gennemgå";
                }),
                t("efc26607", function (e) {
                    return e.memberCount + " medlem" + i(e.memberCount, "", "mer");
                }),
                t("adfcc3ce", "Tilføj, slet eller rediger regler"),
                t("d0330d9c", "Vis regler"),
                t("fd67f7c8", "Rediger Fællesskabets navn, formål og mere"),
                t("e7e31264", "Juster spamfilter og indberetningsværktøjer"),
                t("gc00d212", "Support og ressourcer"),
                t("g0cbfc50", "Nyttig guide til at moderere et Fællesskab"),
                t("h6ebcfca", "Vis dette Fællesskab på din profil"),
                t("c0fa0634", "Spotlight på dit Fællesskab"),
                t("da035fd5", function (e) {
                    return "Nyt" + e.ttc_c9s_spotlight_header;
                }),
                t("h41224f8", "Sæt spotlight på dit Fællesskab på din profil"),
                t("b18e94b2", "Skift til en professionel profil for at vise et Fællesskab på din profil, få adgang til målgruppestatistik og meget mere."),
                t("dc716b1c", "Fællesskabsliste"),
                t("c3e2dda6", "Tilføj eller fjern en Fællesskabsliste"),
                t("a68bffdc", "Se på nøgletal for Fællesskab"),
                t("c6ea29a2", "Forlad moderatorteam"),
                t("a6e13fac", "Er du sikker på, at du vil forlade moderatorteamet?"),
                t("e538848c", "Du har ikke længere adgang til moderatorværktøjerne. Hvis du ombestemmer dig, skal du inviteres til at blive moderator igen."),
                t("j49e6aa2", "Ja, jeg ønsker at forlade"),
                t("dde5f323", function (e) {
                    return e.count + " ny/nye medlemsanmodning" + i(e.count, "", "er") + " at gennemgå";
                }),
                t("f5e0332a", "Voksenindhold (NSFW)"),
                t("e983404a", "Fastgjorte hashtags"),
                t("j8af8eaa", "Type af medlemskab"),
                t("d5f01116", "Formål"),
                t("c2ff3c9e", "Søgningstags"),
                t("f4a98e9e", "Oplysninger om Fællesskab"),
                t("a43bed28", "Du skal aktivere denne indstilling, hvis dit fællesskab indeholder ømtåleligt voksenindhold. Hvis aktiveringen undlades vil alt ømtåleligt voksenindhold i dit fællesskab automatisk blive bortfilteret."),
                t("ab1069de", "Slet Fællesskab"),
                t("bbc91896", "Dette kan ikke fortrydes. Post-forfattere kan stadig se deres egne posts."),
                t("i27eb0b7", function (e) {
                    return "" + e.communityName;
                }),
                t("a49f884e", "Fællesskabsbanner"),
                t("ea965b82", "Rediger fællesskabsbanner"),
                t("j35d3ad6", "Fjern og erstat"),
                t("f1e8fb22", "Dit banner bliver fjernet og erstattet med standardbanneret."),
                t("e405ec22", "Det ser ud til, at vi har problemer med at gemme dit nye bannerbillede. Prøv igen senere."),
                t("b7fb6bda", "Beskær billede"),
                t("e71cdf4e", "Beskær miniature"),
                t("ef199198", "Dine indstillinger er blevet gemt"),
                t("ee10aa5a", "Dine indstillinger kunne ikke gemmes"),
                t("i307a7ca", "Redigér fastgjorte hashtags"),
                t("dc6eca54", "Hashtag slettet"),
                t("d27de326", "Fastgør hashtags for at organisere posts i dit Fællesskab på separate tidslinjer"),
                t("d84cc77a", "Skriv et hashtag her"),
                t("d22e4cba", "Hashtags skal være unikke"),
                t("ca72a540", "Du har nået det maksimale antal tilladte hashtags"),
                t("bd96bf16", "Hashtags skal være på mindst 1 tegn og højst 30 tegn"),
                t("j27623d4", "Hashtags bør ikke indeholde mellemrum eller specialtegn"),
                t("c5d1634e", "OK, jeg forstår"),
                t("daedd9fa", "Dette giver alle mulighed for at deltage i dit fællesskab. Alle afventende anmodninger om at deltage vil automatisk blive godkendt."),
                t("h3c0f1a2", "Rediger Fællesskabets navn"),
                t("cb5e6510", "Det ser ud til, at vi har problemer med at gemme dit nye navn. Prøv igen senere."),
                t("a8955490", "Rediger formål"),
                t("ced2292a", "Det ser ud til, at vi har problemer med at gemme din formålsbeskrivelse. Prøv igen senere."),
                t("ba74c098", "Rediger spørgsmål"),
                t("bd3e0420", "Det ser ud til, at vi har problemer med at gemme spørgsmålet. Prøv igen senere."),
                t("b57baa7a", "Rediger søgningstags"),
                t("f8caab7a", "Tilføj søgningstags for at booste dit fællesskab i anbefalinger og søgeresultater."),
                t("f35a667a", "Indtast et søgningstags her"),
                t("b057d5c6", "Søgningstags skal være unikke"),
                t("cc961258", "Du har brugt det maksimale antal tilladte søgningstags"),
                t("df4aca88", "Søgningstags skal være på mindst 1 tegn og højst 30 tegn"),
                t("ie58fa58", "Søgningstags bør ikke indeholde mellemrum eller specialtegn"),
                t("hd176a01", function (e) {
                    return "Emne gemt! Fællesskabsemnet er nu " + e.newTopicName;
                }),
                t("i39a43cc", "Fællesskabsemne fjernet"),
                t("e81b196e", "Nyt emne kunne ikke gemmes"),
                t("c1f97ad4", "Ændr emne"),
                t("g908eb0c", "Tilføj et emne for at gøre det nemmere for andre at opdage dit Fællesskab! Vælg det emne, der passer bedst til dit Fællesskab."),
                t("f18a8ca0", "Spam-indstillinger"),
                t("c8bd5d42", "Spamfilterets styrke"),
                t("gfeb40a2", "Spamfiltre kan indstilles til forskellige følsomhedsniveauer for at håndtere uønskede posts."),
                t("h766865c", "Automatisk indberetning af X"),
                t("fd1f413a", "Automatisk indberetning til moderatorerne med udvalgte funktioner. Når en post er blevet godkendt, bliver efterfølgende posts fra samme forfatter ikke indberettet af X."),
                t("b1ba5fb4", "Registrering af spammere"),
                t("ee195f28", "Spam-keywords"),
                t("cf276a82", "Skjul posts indberettet af X, indtil de godkendes af moderatorerne"),
                t("a8c4c3fe", "Indberet posts fra brugere med tidligere spam-adfærd"),
                t("j8de95ec", "Indtast keywords, der udløser automatisk indberetning"),
                t("ie873142", "Høj"),
                t("a977afa2", "Lav"),
                t("j715cb38", "Rediger udelukkede keywords"),
                t("b32ebbe8", "Tilføj keywords, så X automatisk kan indberette til Fællesskabets moderatorer"),
                t("acde5366", "Indtast et keyword her"),
                t("a5f66c34", "Keywords skal være unikke"),
                t("ea637914", "Du har nået det maksimale antal tilladte keywords"),
                t("fede6d3c", "Keywords skal være på mindst 1 tegn og højst 30 tegn"),
                t("cc06e200", "Keywords må ikke indeholde mellemrum eller specialtegn"),
                t("d94edeb4", "Dit Fællesskab kan have op til 10 regler. Klare regler fremmer respektfuld deltagelse og hjælper med at holde samtalen på sporet."),
                t("j560c8ea", "Tilføj regel"),
                t("a9ba79c0", "Gode regler skaber gode Fællesskaber"),
                t("h5482c7a", "Tænk grundigt over dine Fællesskabsregler. De sætter tonen og fortæller dine medlemmer, hvad der forventes af dem."),
                t("d5033a7a", "Ønsker du f.eks., at samtalerne skal holde sig strengt til emnet? Er selvpromovering tilladt? Er det i orden at bande?"),
                t("ee8c43a0", "Jo tydeligere du er fra starten, jo mindre skal du moderere senere."),
                t("gaa3239a", "Det ser ud til, at vi har problemer med at gemme din nye regel. Prøv igen senere."),
                t("a67445d6", "Maks. overskredet"),
                t("fcbe0993", function (e) {
                    return "Fællesskaber har op til " + e.maxRuleCount + " regler. Hvis du vil tilføje en ny regel, skal du slette en eksisterende regel.";
                }),
                t("c66769a4", "Regel"),
                t("ef02695b", function (e) {
                    return "Navne på regler skal være mellem " + e.minCharacterCount + " og " + e.maxCharacterCount + " tegn";
                }),
                t("c8242020", "Beskrivelse (valgfri)"),
                t("d32cf5e7", function (e) {
                    return "Beskrivelser kan være op til " + e.maxCharacterCount + " tegn";
                }),
                t("f8fa00c7", function (e) {
                    return "Descriptions can’t exceed " + e.maxCharacterCount + " characters";
                }),
                t("d45ae5e0", "Glem ikke at fortælle det til Fællesskabet"),
                t("c1631260", "Det skaber tillid at holde alle opdateret om ændrede regler."),
                t("d3190bde", "Gem regel"),
                t("ifd6e91c", "Annuller, og rediger regel"),
                t("h99020e0", "Rediger regel"),
                t("f74a5adc", "Fællesskaber skal have mindst én regel. Du kan redigere, den du har, eller tilføje en anden regel og derefter slette denne."),
                t("fbb0ed92", "Slet denne regel"),
                t("hed35472", "Sletning af en regel er permanent og kan ikke fortrydes."),
                t("c8677446", "Slet regel"),
                t("c3a0d44e", "Annuller, og rediger regel"),
                t("d703ce9e", "Føj en liste til dit Fællesskab"),
                t("f21f023c", "Når du føjer en liste til dit Fællesskab, udfyldes feedet med relevant indhold udvalgt af dig. Vælg en af dine lister nedenfor:"),
                t("gbc2cf50", "Dine lister"),
                t("ef9462fa", "Har du ikke en relevant liste?"),
                t("fcda89f4", "Opret en ny liste med konti på X, som poster indhold, der er relevant for dit Fællesskab. Hold din liste offentlig, så den forbliver synlig for Fællesskabet."),
                t("c09609d8", "Opret en liste"),
                t("dfddd842", "Sendt via direkte besked"),
                t("a3b3939b", function (e) {
                    return "@" + e.screen_name + " er allerede inviteret";
                }),
                t("db4f0cc9", function (e) {
                    return "@" + e.screen_name + " er allerede i dette Fællesskab";
                }),
                t("h252ede6", "Du har allerede brugt alle dine invitationer"),
                t("a5cd93f9", function (e) {
                    return "@" + e.screen_name + " kan ikke inviteres lige nu";
                }),
                t("i6568549", function (e) {
                    return "Du har " + e.remaining_invite_count + " invitation" + i(e.remaining_invite_count, "", "er") + " tilbage";
                }),
                t("b4f16d00", "Søg efter personer, du kan invitere"),
                t("ja1387a8", "Søgeresultater omfatter kun dine følgere og personer, der tillader direkte beskeder fra alle."),
                t("ae85768c", "Søgeresultater omfatter kun dine følgere og personer, der tillader direkte beskeder fra alle."),
                t("hb1e378e", "Inviteret"),
                t("d710b60c", "Fællesskabsstatistik"),
                t("c199e390", "Nye posts"),
                t("b4f51cd6", "Antal posts fra den seneste uge"),
                t("g6f8325a", "Nye medlemmer"),
                t("b2bb7276", "Antallet af medlemmer, som blev medlem i den seneste uge"),
                t("e2172c92", "Aktive medlemmer"),
                t("fe1a9f68", "Antal medlemmer, som postede til dit Fællesskab"),
                t("e989927e", "Unikke postforfattere"),
                t("d1386a90", "Antal medlemmer, som oprettede en post i dit Fællesskab"),
                t("abf609f2", "Samlet antal medlemmer"),
                t("h2081878", "Samlet antal medlemmer i dit Fællesskab"),
                t("a3235cd6", "Unikke besøg"),
                t("g21e2a70", "Antal X-brugere, der har besøgt dit Fællesskab i den forløbne uge"),
                t("ied6bac2", "Antal likes"),
                t("ced8d39a", "Antal likes i dit Fællesskab i den forgangne uge"),
                t("fb4f859c", "Antal svar"),
                t("h5a41cce", "Antal svar i dit Fællesskab i den forgangne uge"),
                t("i314218e", "Nøgletal vist for de seneste 7 dage. Opdateret "),
                t("addbb11e", "Ingen nye anmodninger om medlemskab"),
                t("c38131de", "Du har set alle. Når der kommer nye anmodninger, bliver de vist her."),
                t("d7f13fb9", function (e) {
                    return "@" + e.screenName + " blev godkendt og er nu medlem af dit Fællesskab";
                }),
                t("a340df67", function (e) {
                    return "@" + e.screenName + " blev afvist og kan ikke deltage i dit Fællesskab";
                }),
                t("jd8aae9d", function (e) {
                    return "Det ser ud til, at vi ikke kan godkende @" + e.screenName + " lige nu. Prøv igen senere.";
                }),
                t("i580e149", function (e) {
                    return "Det ser ud til, at vi ikke kan afvise @" + e.screenName + " lige nu. Prøv igen senere.";
                }),
                t("b4a38e4e", "Du har blokeret denne person. Hvis vedkommende bliver godkendt som medlem, skal du fjerne blokeringen for at se posts fra vedkommende."),
                t("f0956736", "Du har skjult denne person. Hvis vedkommende bliver godkendt som medlem, skal du vise vedkommende igen for at se posts fra vedkommende."),
                t("b7f1e58a", "Følger dig"),
                t("dffb0774", "Intet at gennemgå lige nu"),
                t("ab512f26", "Ingen handlingslog registreret."),
                t("b8171558", "Udelukkede"),
                t("e32e7e1a", "Moderator"),
                t("b53fb7c6", "Det ser ud til, at vi ikke kan annullere denne handling lige nu. Prøv igen senere."),
                t("c546ba07", function (e) {
                    return "Vis " + e.userName + "s profil";
                }),
                t("h4516e4f", function (e) {
                    return "Søg i " + e.userName + "s posts i dette Fællesskab";
                }),
                t("j4d4a809", function (e) {
                    return e.moderatorName + " skjulte en post";
                }),
                t("ja589ea5", function (e) {
                    return e.revertedModeratorName + " viste en post";
                }),
                t("c904a2ff", function (e) {
                    return e.moderatorName + " fastgjorde en post";
                }),
                t("b43358cf", function (e) {
                    return e.moderatorName + " frigjorde en post";
                }),
                t("bb6299a7", function (e) {
                    return "" + e.moderatorName;
                }),
                t("f0347599", function (e) {
                    return "" + e.moderatorName;
                }),
                t("e33d133b", function (e) {
                    return "" + e.moderatorName;
                }),
                t("c29ec092", function (e) {
                    return "" + e.revertedModeratorName;
                }),
                t("f6530972", "Vis post"),
                t("j68fc824", "Vist"),
                t("j9541e18", "Søg i posts"),
                t("j10903d7", function (e) {
                    return e.moderatorName + " fjernede et medlem";
                }),
                t("e38bf285", function (e) {
                    return e.revertedModeratorName + " genindsatte et medlem";
                }),
                t("dea0d437", function (e) {
                    return e.userName + " deltager i dette Fællesskab";
                }),
                t("j10346f5", function (e) {
                    return e.userName + " forlod dette Fællesskab";
                }),
                t("jb159607", function (e) {
                    return e.moderatorName + " godkendte en medlemsanmodning";
                }),
                t("af7a63eb", function (e) {
                    return e.moderatorName + " afviste en medlemsanmodning";
                }),
                t("i717dfc3", function (e) {
                    return e.revertedModeratorName + " godkendte en medlemsanmodning igen";
                }),
                t("ce5ac32b", function (e) {
                    return "" + e.moderatorName;
                }),
                t("a7f869a4", function (e) {
                    return "" + e.revertedModeratorName;
                }),
                t("efad949a", function (e) {
                    return "" + e.userName;
                }),
                t("d0ae5998", function (e) {
                    return "" + e.userName;
                }),
                t("ef020751", function (e) {
                    return "" + e.moderatorName;
                }),
                t("a46c5a63", function (e) {
                    return "" + e.moderatorName;
                }),
                t("h55401a4", function (e) {
                    return "" + e.revertedModeratorName;
                }),
                t("d31e695c", "Godkend anmodning igen"),
                t("i9a18ce0", "Godkendt igen"),
                t("i24de0fe", "Genindsæt medlem"),
                t("b1c662f8", "Genindsat"),
                t("j2e04b1e", "Moderatorerne har behandlet alle indberettede posts."),
                t("hb21cdb6", "Bloker"),
                t("dc7a9436", "Indberet post til X"),
                t("e2bc5db0", "@X"),
                t("d0a1b248", function (e) {
                    return e.formattedCount + " medlem" + i(e.count, "", "mer");
                }),
                t("cd4d48d2", "@X"),
                t("ff0f742a", function (e) {
                    return e.formattedCount + " medlem" + i(e.count, "", "mer");
                }),
                t("dca19c06", "Du har skjult denne post"),
                t("dd641764", "Du beholdt denne post"),
                t("jf99d610", "Feedback fra Fællesskab"),
                t("bbd69672", "Denne post blev skjult af en moderator, fordi den overtræder Fællesskabsreglerne"),
                t("c730a21c", "Denne regel blev overtrådt:"),
                t("a5baa7d2", "Brug et øjeblik på at gennemgå reglerne. De hjælper med at holde samtalen sikker og på sporet"),
                t("icc32e3d", function (e) {
                    return "Du blev fjernet fra " + e.communityName + " af en moderator for overtrædelse af denne Fællesskabsregel:";
                }),
                t("d7d9be8a", "Opdag Fællesskaber og posts"),
                t("cae9962e", "Ingen Fællesskaber blev fundet."),
                t("c2117be6", "Kan du se det i navigationsruden? 👀"),
                t("c2c4dad4", "Vælg noget for at få det vist her. Bare gå i gang. Vi venter."),
                t("b7218496", "Ingen hashtags ... endnu"),
                t("gc09bcfe", "Dit Fællesskab har ingen hashtaggede samtaler, men det kan du lave om på."),
                t("cf35a990", "Indlæser Fællesskabets posts med hashtag"),
                t("a1c41fe8", "Fællesskabets posts med hashtag "),
                t("f27a2232", "Søg i Fællesskab"),
                t("ie2efe36", "Søgeresultater i Fællesskaber"),
                t("a7c2e06d", function (e) {
                    return e.communityName + " Fællesskab";
                }),
                t("a94092a2", "Du har nu adgang til moderatorværktøjer"),
                t("be6dfbae", "Som moderator for et Fællesskab kan du tilføje og fjerne medlemmer."),
                t("b4f877be", "Fællesskab ikke fundet"),
                t("e48fbb02", "Indberet Fællesskab"),
                t("b1614c34", "Om Fællesskaber"),
                t("j1dcedde", "Søg efter posts"),
                t("cc683fba", "Om Fællesskab"),
                t("af7c11aa", "Info om Fællesskab"),
                t("fb974b24", "Kun medlemmer kan poste."),
                t("fcef2922", "Alle kan deltage i dette Fællesskab."),
                t("c93dd2c8", "Hvis du vil deltage i dette Fællesskab, skal du anmode og godkendes."),
                t("gedb877d", "Alle Fællesskaber er synlige for offentligheden."),
                t("bf359e0e", "Om dit nye Fællesskab"),
                t("e8fcdd3a", "Vi begynder med nogle grundlæggende indstillinger, men dit Fællesskab kan tilpasses fuldstændigt. Det kommer vi ind på som det næste."),
                t("b37d580e", "Dit Fællesskab er begrænset"),
                t("c6d9c07c", "Alle Fællesskaber er synlige for alle på X. Folk skal anmode om at blive medlem af dit Fællesskab eller inviteres af moderatorteamet eller eksisterende medlemmer (hvis det er tilladt)."),
                t("ea3b38fa", "Dit Fællesskab er åbent"),
                t("i625c42e", "Alle Fællesskaber er synlige for alle på X. Alle kan deltage i og/eller blive inviteret til dit Fællesskab."),
                t("ca7eeab0", "Reglerne for dit nye Fællesskab er"),
                t("acae4034", "Indstillinger kan ændres under Administrationsværktøjer"),
                t("e2186ee2", "Føles dine indstillinger forkerte? Intet problem. Det kan nemt ændres."),
                t("a0e3ece4", "Oplysninger om Fællesskab"),
                t("d11f73ea", "Voksenindhold"),
                t("hb9400dc", "Se flere"),
                t("b71a08a0", "Abonnentfællesskab"),
                t("d0574662", "Indstil meddelelser"),
                t("fc16f13a", "Hvilke meddelelser ønsker du?"),
                t("be341c46", "Rum i Fællesskaber (lydchat)"),
                t("fbe88a32", "Direkte tekstchat i Fællesskab"),
                t("b551cd1e", "Fastgjorte posts"),
                t("i9f39962", "Fastgør Fællesskab"),
                t("bc7f90a0", "Sæt spotlight på Fællesskabet på din profil"),
                t("j5a37508", "Fastgør Fællesskab til forsideskærmen"),
                t("c7a4610a", "Frigør Fællesskab fra forsideskærmen"),
                t("bec3b8fa", "Del Fællesskab"),
                t("cc7d5b88", "Inviter via direkte besked"),
                t("c66b37fa", "Tjekliste for Fællesskab"),
                t("g2768d0e", "Her er et par ting, der kan bringe dit Fællesskab i form før lanceringen ..."),
                t("b192b58c", "Afvis tjekliste"),
                t("gd302780", "Tjek det Fællesskab, jeg har oprettet:"),
                t("h5890b1a", "Ufærdig"),
                t("b4a6faca", "Gennemgå dine regler"),
                t("a01e1a7c", "Gør dit Fællesskab personligt"),
                t("f493480c", "Post dit Fællesskab"),
                t("i9b7f6ba", "Indlæser posts"),
                t("c22e8902", "Prøv det"),
                t("a3466e1c", "Spor samtaler med hashtags"),
                t("a524bb7e", "Hashtags gør det nemt at oprette, finde og deltage i temasamtaler i Fællesskabet."),
                t("he8db880", "Det ser ikke ud til, at dette Fællesskab findes"),
                t("cc684fbc", "Det kan være blevet slettet, eller måske har det aldrig eksisteret. Livet er fuld af mysterier."),
                t("b4f8b518", "Skabere til dig"),
                t("f5c41e22", "Gå til indstillinger for Delegate"),
                t("b9226ec1", "Logget ind som "),
                t("f47b48f6", "bruger"),
                t("b2ca74aa", "Du er ved at skifte til en uddelegeret konto"),
                t("ba77b438", "Skift konto"),
                t("g5261e91", function (e) {
                    return "Du fungerer nu som @" + e.screenName + ".";
                }),
                t("cc15a3ea", "Husk, at denne konto ikke tilhører dig. Som admin kan du sende direkte beskeder, udgive posts og oprette Lister – samt få dem vist. Du kan også invitere eller fjerne bidragydere til kontoen og se post-statistik."),
                t("e406250c", "Husk, at denne konto ikke tilhører dig. Som bidragyder kan du sende direkte beskeder, udgive posts og oprette Lister – samt få dem vist."),
                t("e6718a62", "Kun kontoejeren kan bruge denne funktion"),
                t("ba411b6f", "sende os feedback"),
                t("f01ee14b", "sende os feedback"),
                t("dbc85148", "Vælg en besked"),
                t("a073658c", "Vælg en af dine eksisterende samtaler, opret en ny, eller fortsæt med at lede."),
                t("f325afc4", "Skriv en DM"),
                t("f5dc353c", "Nu filtreres eksplicitte medier"),
                t("daeda054", "Gå til Indstillinger"),
                t("fe1eaa96", "Der vil nu blive vist advarsler over beskeder, der potentielt indeholder eksplicitte medier (f.eks. nøgenhed, seksuelt indhold eller vold). Du kan altid slå dette fra i Indstillinger."),
                t("hc32acba", "Slet beskedanmodninger?"),
                t("f9048f58", "Dette kan ikke fortrydes, og valgte beskedanmodninger vil blive slettet fra din indbakke."),
                t("a9d0d7f0", "Masse-rediger"),
                t("eb7de4aa", "Vis flere meddelelser, herunder dem, der kan have stødende indhold."),
                t("ee8c0c8a", "Indgående beskeder eller gruppebeskeder fra personer, du ikke følger, bliver vist her, og du kan acceptere eller slette dem."),
                t("ff599112", "Opret en gruppe"),
                t("c602600a", "Tilføj personer"),
                t("fa2033f6", "Krypteret"),
                t("aa59bb6a", "Send post separat"),
                t("a2ccb2e8", "Direkte besked sendt."),
                t("f906f464", "Post delt med gruppe."),
                t("i8a99aae", "Post delt separat."),
                t("hbbc401c", "Send til gruppe"),
                t("e1bde73f", function (e) {
                    return "Du kan ikke sende beskeder til @" + e.screenName;
                }),
                t("f7289cd6", "Du har valgt en gruppesamtale"),
                t("e6cced4e", 'Kun én-til-én-samtaler kan "sendes til gruppe". Du kan stadig sende din besked separat.'),
                t("e3e58b6e", "Samtaleinformation"),
                t("a9ddbb94", "Gruppeinfo"),
                t("dd4779a0", "Administrer tags"),
                t("ca9af866", "Tags:"),
                t("e62d3c10", "Der findes ingen konto med det navn. Prøv igen."),
                t("h8403fb6", "Du kan ikke føje dem til samtalen lige nu."),
                t("ja522ed4", "Du kan ikke føje alle personerne til samtalen lige nu."),
                t("d87bff5a", "Din samtaleinformation indlæses."),
                t("cabb453e", "Gruppenavn"),
                t("eb1bb5a2", "Vis alle personer"),
                t("a70436ac", "Start en krypteret besked"),
                t("a7f20223", function (e) {
                    return "Udskyd meddelelser fra " + e.name;
                }),
                t("g2f04a6b", function (e) {
                    return "Du har fjernet udskydelsen af " + e.name;
                }),
                t("i453fedf", function (e) {
                    return "Udskudt indtil " + e.expiration;
                }),
                t("b3dfd51a", "Udskyd omtaler"),
                t("cc7c8ce6", "Deaktiver meddelelser om, at nogen omtaler dig i denne samtale."),
                t("hab58674", "Omtaler deaktiveret"),
                t("e3c6e080", "Omtaler aktiveret"),
                t("f33ef58a", "Indberet samtale som ulovligt indhold i EU "),
                t("d1a6dbe6", "Bloker alt"),
                t("f24af200", "Bloker direkte beskeder"),
                t("a30e1677", function (e) {
                    return "Bloker @" + e.screenName + ". @" + e.screenName + " vil ikke længere kunne følge dig eller sende dig beskeder, og du får ikke meddelelser fra @" + e.screenName;
                }),
                t("iae09949", function (e) {
                    return "Bloker direkte beskeder fra @" + e.screenName + "?";
                }),
                t("e778e3d8", "Direkte beskeder er blevet blokeret"),
                t("b7867912", "Fjern blokering af alt"),
                t("gaddb872", "Fjern blokering af direkte beskeder"),
                t("d83414a1", function (e) {
                    return "Vil du fjerne blokeringen af @" + e.screenName + "? Vedkommende vil kunne følge dig og se dine posts.";
                }),
                t("a5bbfecd", function (e) {
                    return "Fjern blokering af @" + e.screenName + "? Vedkommende vil kunne følge dig og interagere med dine offentlige posts.";
                }),
                t("cde6e1ff", function (e) {
                    return "Fjern blokering af direkte beskeder fra @" + e.screenName + "?";
                }),
                t("j37c4674", "1 time"),
                t("je7e1fed", function (e) {
                    return "Du har udskudt " + e.name + " i 1 time";
                }),
                t("hf94a2d6", "Skjult i 1 time"),
                t("fb7a43c6", "8 timer"),
                t("e95c8f8b", function (e) {
                    return "Du har udskudt " + e.name + " i 8 timer";
                }),
                t("bd54fad2", "Skjult i 8 timer"),
                t("cb5bf56e", "1 uge"),
                t("gb7a130b", function (e) {
                    return "Du har udskudt " + e.name + " i 1 uge";
                }),
                t("f6fce0fe", "Skjult i 1 uge"),
                t("i78153dd", function (e) {
                    return "Du har udskudt " + e.name + " for altid";
                }),
                t("je9455da", "Beskeder er krypteret"),
                t("b5b0afa4", "Tilpas din visning"),
                t("ec5880e6", "Disse indstillinger påvirker alle X-konti i denne browser."),
                t("babfa32c", "Tilpas hurtigt din visning"),
                t("a2a2f98e", "Se alle nyhederne"),
                t("b4a361c0", "Du kan ændre farven og skriftstørrelsen på din tekst og endda slå mørk tilstand til med det samme. Det er kun dig, der kan se disse indstillinger."),
                t("c797b44e", "De seneste historier på X – som fortalt i posts."),
                t("a19ce060", "Udforsk er ikke tilgængelig."),
                t("f7d1a8e0", "Android-app"),
                t("aab2fae0", "iOS-app"),
                t("a35d9c9a", "Ressourcer"),
                t("i6671128", "Du har låst op for mere på X"),
                t("d5e4d0a6", "Du kan deltage i samtalen og nemmere komme i kontakt med andre. Nu kan du gøre følgende:"),
                t("a97bc07e", "Lås op for mere på X"),
                t("a72188d6", "For at gøre X bedre for alle vil vi gerne være sikre på, at der er et menneske bag denne konto. Hjælp os med at bekræfte dette ved at interagere med din tidslinje og få kontakt med andre. Når vi er sikre, kan du gøre følgende:"),
                t("a4ee9572", "Bliver set af flere personer"),
                t("e5f4eac0", "Dit indhold vil blive mere synligt. Og du vil blive vist i søgeresultater og tendenser."),
                t("c7832a72", "Kom i direkte kontakt med andre"),
                t("i1ccd17a", "Send direkte beskeder til personer, der ikke følger dig, uden at din besked automatisk bliver filtreret."),
                t("hc965308", "Sjov"),
                t("eb78b77e", "Tilstanden Sjov"),
                t("aa8ece10", "Prøv grok.com"),
                t("gb5fb7d0", "Fokustilstand"),
                t("g5665caa", "Afslut fokustilstand"),
                t("a372681e", "Kopiér link til deling"),
                t("fbc79f6a", "Chat-historik"),
                t("b61ad410", "Historik"),
                t("b3de2628", "Ingen chathistorik tilgængelig"),
                t("acfbfb28", "Dine fremtidige samtaler vil blive vist her."),
                t("i1147548", "Søg i Grok-historik"),
                t("ab437026", "Ingen samtaler fundet"),
                t("e12569ec", "Prøv at søge efter noget andet."),
                t("d4eb0e26", "Omdøb"),
                t("c64975ea", "Du har ikke valgt nogen samtaler som favoritter endnu"),
                t("a3e3db6e", "Klik på stjernen for at gemme chats, du ofte vender tilbage til"),
                t("f4ae77ac", "Ingen billedhistorik tilgængelig"),
                t("d57d337e", "Dine genererede billeder bliver vist her."),
                t("dab087ee", "Chat"),
                t("a911623c", "Billeder"),
                t("ae9cdac6", "Chat-historik"),
                t("b198a392", "Grok-samtale"),
                t("d16329b4", "Kopiér samtale"),
                t("af6c4470", "Noget gik galt, prøv igen."),
                t("gf43d270", "Fortsæt denne samtale"),
                t("f4b5fae2", "Når du sender en besked, kopieres denne samtale til din historik"),
                t("eb0d91ac", "Opret et billede med Grok"),
                t("c5a23514", "Tegn mig"),
                t("g1cb8096", "Overrask mig"),
                t("a5a3df56", "Beskriv det billede, der skal oprettes"),
                t("gbb4e90a", "en tilfældig psykedelisk drømmeverden"),
                t("af21f92e", "lyksalighed"),
                t("e207cba2", "en tilfældig sportskonkurrence"),
                t("b1323f10", "en model, der går ned ad catwalken ved modeugen i paris"),
                t("g6a90174", "et sjovt hipster-dyr"),
                t("jdc4b66c", "et af verdens vidundere"),
                t("ec601934", "Remix"),
                t("f9ecd3ba", "Indsæt som post"),
                t("af652514", "Forskel"),
                t("j95bac7a", "Tilpas Grok"),
                t("c5665922", "Hvad vil du gerne have, at Grok skal vide om dig?"),
                t("ff625c40", "Hvordan vil du gerne have Grok til at svare?"),
                t("e5c7d602", "Aktivér for alle chats"),
                t("d5e03fbc", "Grok-feed"),
                t("a294d0c6", "Opret din egen version"),
                t("b38adba2", "X - The Everything App"),
                t("d05ae004", "NHL-kamp"),
                t("d35ad22c", "Se den seneste NHL-kamp"),
                t("e806daa2", "Fodboldkamp"),
                t("cc2c2eca", "Se den seneste fodboldkamp"),
                t("bcdeae66", "F1 Grand Prix Portal"),
                t("e30e4bea", "Følg Grand Prix-eventen på X."),
                t("be548ecb", function (e) {
                    return e.teamName1 + " mod " + e.teamName2;
                }),
                t("b23bb579", function (e) {
                    return e.teamName1 + " vs " + e.teamName2 + " opdateringer på X";
                }),
                t("b72c924c", "Jobsøgning"),
                t("f4da95a0", "Jobanbefalinger"),
                t("eedd808c", "Gemte stillinger"),
                t("e0ba641a", "For virksomheder"),
                t("f9e6381a", "Søg efter stillinger"),
                t("fb15ec28", "Få jobanbefalinger"),
                t("ece910f0", "Se stillinger baseret på dine præferencer"),
                t("jd08bc14", "Anbefalingerne bliver bedre med tiden"),
                t("de0a4a72", "Kontrollér, hvor du får vist anbefalinger"),
                t("db8c4158", "Ansøg nu"),
                t("d9c8057a", "Klik her"),
                t("a71d7584", "Udvalgt"),
                t("d2b8da2c", "Softwareudvikling"),
                t("cd958040", "Data og statistik"),
                t("c5760ca2", "Produkt"),
                t("d31b4a2a", "Design"),
                t("f38959a6", "Salg"),
                t("bc78a26c", "Drift"),
                t("ec28738e", "Personale og HR"),
                t("icb06308", "Økonomi og regnskab"),
                t("d0b978ec", "Jura og compliance"),
                t("af19cdc2", "Videnskab og teknik"),
                t("e4a51fca", "Medical"),
                t("e8ca78ae", "Bygge og anlæg"),
                t("e25d75e4", "Praktikant"),
                t("e89b3f04", "Begynderniveau"),
                t("h55825dc", "Junior"),
                t("cc537386", "Mellemniveau"),
                t("jfc3cece", "Senior"),
                t("e1b683aa", "Leder"),
                t("c4627fda", "Chef"),
                t("db75b47c", "Leder"),
                t("i312f0ce", "On-site"),
                t("b4aff05e", "Hybrid"),
                t("c08b9138", "Ekstern"),
                t("ia5d6422", "Der kræves fysisk fremmøde på stedet"),
                t("h97c7f42", "Delvist krav om fysisk fremmøde på stedet"),
                t("ibed2d04", "Intet krav om fysisk fremmøde på stedet"),
                t("f508c49c", "Kopiér link til stilling"),
                t("d6825dce", "Del via direkte besked"),
                t("b9613442", "Del via post"),
                t("c2b3f0da", "Fremhæv på profil"),
                t("c791d3fc", "Del stilling"),
                t("eb517058", "AI-virksomheder"),
                t("b677cb9b", function (e) {
                    return e.count + " virksomhedsfiltre";
                }),
                t("ja04d37c", "Indtast virksomhedsnavne"),
                t("a1876045", function (e) {
                    return e.count + " ansættelsestypefiltre";
                }),
                t("fb146dd2", "Ansættelsestype"),
                t("a7090408", "Keyword"),
                t("f16e9a15", function (e) {
                    return e.count + " stedtypefiltre";
                }),
                t("fa7d455a", "Stedtype"),
                t("caa606db", function (e) {
                    return e.count + " anciennitetsfiltre";
                }),
                t("jda06238", "Anciennitet"),
                t("j595df68", "Opdater dine præferencer for anbefalinger:"),
                t("a1227d5e", "Slå anbefalinger til"),
                t("bae2f5f0", "Tilføj dette job til din profil"),
                t("cbcaaa1a", "Nedenfor er en forhåndsvisning af, hvordan det vil se ud."),
                t("f58cf1ac", "Tilføj stilling"),
                t("j4ae9960", "Der opstod et problem med tilføjelsen af jobbet til din profil."),
                t("caa352f0", "For mange jobs"),
                t("i08bee0e", "For mange fremhævede jobs"),
                t("d7ccaea2", "Du er i øjeblikket begrænset til 3 aktive jobs."),
                t("h05e4a7a", "Du er begrænset til 10 fremhævede jobs."),
                t("b518daae", "Gå til ansættelseskontrolpanel"),
                t("f48e9c52", "Job blev tilføjet korrekt!"),
                t("f6757978", "Du kan fjerne dette job eller tilføje andre jobs fra dit ansættelseskontrolpanel."),
                t("i329c5a6", "Vis ansættelseskontrolpanel"),
                t("h39a5448", "Fremhæv dine jobs med X Hiring!"),
                t("d204515c", "Tilføj jobs til din profil med et enkelt klik."),
                t("ecb3df70", "Begivenheds-posts"),
                t("a01d5a7c", "Dette er ikke tilgængeligt, fordi det er oprettet af en person, du har blokeret"),
                t("cab51f93", function (e) {
                    return "Du kan ikke se dette, fordi @" + e.screenName + " har blokeret dig.";
                }),
                t("eaaca5dc", "Point"),
                t("abdcd68a", "Indlæser begivenhed"),
                t("cfb57adb", function (e) {
                    return "Post om " + e.hashtag;
                }),
                t("b1037710", "Del dine tanker"),
                t("bb980db0", "Tidslinje for begivenhed"),
                t("ffd929c1", function (e) {
                    return "NYT" + e.ttc_live_event;
                }),
                t("c9b302f8", "Kom tilbage senere for at se de nyeste produkter."),
                t("cfe836d1", function (e) {
                    return e.percent + "% rabat";
                }),
                t("efb132c3", function (e) {
                    return e.title + " – " + e.description + " for " + e.price;
                }),
                t("f27deeea", "Produktflise"),
                t("e8166cee", function (e) {
                    return "" + e.formattedPrice;
                }),
                t("g66c8348", "REPLAY"),
                t("j1d352d8", "Påmindelse indstillet"),
                t("d18909d4", "Indstil påmindelse"),
                t("b0b38774", "Sidehovedmedie"),
                t("a7a119ec", "Fradock"),
                t("cfadb00e", "Lytter"),
                t("db4620aa", "DIREKTE RUM"),
                t("c958e692", "OPTAGET RUM"),
                t("i2c2bfb7", function (e) {
                    return e.count + " lytter";
                }),
                t("i3f7ff00", "Medieminiature"),
                t("h400d7c2", "DELTAG I RUM"),
                t("be6ef5b4", "KOMMENDE"),
                t("ca25ebae", "Odds fra"),
                t("e749753a", "Fordelt"),
                t("ea885dec", "Penge"),
                t("cde48000", "Spilleproblem? Ring til 1-800-GAMBLER"),
                t("g53d5df6", "Fokuseret"),
                t("d1e0a75f", function (e) {
                    return "Til dig" + e.noun;
                }),
                t("dafd69e9", function (e) {
                    return "Følger" + e.noun;
                }),
                t("d80a1c37", function (e) {
                    return "Abonnerer" + e.noun;
                }),
                t("d3619250", "Mest likede"),
                t("f5edfbde", "Log ud af X?"),
                t("f12b4db5", function (e) {
                    return "Vil du logge @" + e.screenName + " ud?";
                }),
                t("ia5ff8b6", "Du kan altid logge ind igen senere. Hvis du blot vil skifte konto, kan du gøre det ved at tilføje en eksisterende konto."),
                t("ea3750c4", "Dette gælder kun for denne konto. Du vil stadig være logget ind på dine andre konti."),
                t("gc6866f8", "Logger ud"),
                t("f8ad0092", "Der opstod desværre en fejl. Prøv at logge ind igen."),
                t("h2c7767e", "Sessionen er ikke længere gyldig. Prøv at logge ind igen."),
                t("e83047c2", "Du har indtastet for mange forkerte koder. Prøv at logge ind igen."),
                t("g4b108ee", "Du har genereret for mange backupkoder. Du skal tilmelde dig loginverifikation på telefonen igen."),
                t("a9be9b44", "Fortsæt til X"),
                t("e55188f0", "Du er logget ind på denne konto med denne browser"),
                t("d55d8fe2", "Vil du fortsætte med denne konto?"),
                t("g806008e", "Log ind med en anden konto"),
                t("c55f5c9a", "Noget gik galt, men bare rolig – det er ikke din skyld. Lad os prøve igen."),
                t("bfb6be8a", "Tjen penge på X"),
                t("ed6c6da2", "Det første, du skal gøre for at tjene penge, er at blive verificeret med X Premium."),
                t("h93b6580", "Tjen penge på at dele indhold af høj kvalitet. Jo mere du engagerer brugerne på X, jo mere tjener du."),
                t("eea6d8f8", "Kvalificering til indtægtsdeling for skabere"),
                t("a0e8811e", "Opbyg en fanbase"),
                t("e1a74ac0", "Tilbyd eksklusivt indhold til dine største støtter, og få en fast indtægt."),
                t("cd3a6f9a", "Kvalificering til abonnementer"),
                t("c35e6144", "Skab bedre indhold med Premium-værktøjer"),
                t("b9dbeb34", "Lås op for længere posts, Media Studio, statistik, og få prioriteret support."),
                t("b2d41138", "Større rækkevidde = større indtjening"),
                t("defa7f12", "Få gavn af et svar-boost, der giver dig ekstra synlighed til at vokse hurtigere."),
                t("i3e4955d", "her"),
                t("cea1c00e", "Lås op for muligheden for at interagere"),
                t("f8e6a280", "Nye konti skal betale et mindre årligt gebyr, før de kan skrive posts, like, føje til bogmærker og svare. Dette er for at reducere spam og for at skabe en bedre oplevelse for alle. Du kan stadig følge konti og gennemse X gratis."),
                t("h968efc6", "Nye konti skal betale et mindre gebyr, før de kan skrive posts, like, føje til bogmærker og svare. Dette er for at reducere spam og for at skabe en bedre oplevelse for alle. Du kan stadig følge konti og gennemse X gratis."),
                t("b66b62a4", "Købers vilkår for anvendelse"),
                t("e5b5faa6", "Vilkår for Ikke en bot"),
                t("i61a221c", "Abonner og betal"),
                t("fce91ab4", "Hmm – det virkede ikke."),
                t("a235cb76", "Der opstod et problem med dit Ikke en bot-abonnement. Tjek dine betalingsoplysninger, og prøv igen."),
                t("a8eea654", "Dit køb blev gennemført."),
                t("bc8baa08", "Abonnerer"),
                t("a98ba778", "Tidslinjer for meddelelser"),
                t("j887d006", "Fra likes til reposts og meget mere. Det er her, det hele sker."),
                t("c06d4306", "Når nogen omtaler dig, finder du det her."),
                t("ge7c661a", "Likes, omtaler, reposts og meget mere -- når det kommer fra andre verificerede personer, finder du det her. "),
                t("d3de3b5c", "Likes, omtaler, reposts og meget mere – når det kommer fra dine abonnenter, finder du det her."),
                t("e3f9838d", "Læs mere"),
                t("eba8b1c8", "Kontrollér, hvilke samtaler du er omtalt i"),
                t("j745b8a6", "Brug handlingsmenuen – de tre små prikker i en post – til at fjerne dit tag og forlade en samtale."),
                t("c380d684", "Din indberetning"),
                t("da7cf0d8", "Vi har markeret disse posts som ømtåleligt indhold"),
                t("a6da21a1", function (e) {
                    return e.appName + " vil have adgang til din X-konto";
                }),
                t("f4392d00", "Godkend app"),
                t("ee4dca3c", "annuller link"),
                t("bb347bbc", "hjælpecenter"),
                t("be38d34e", "Du skal være logget ind på X for at bruge denne app."),
                t("e087691a", "Du kunne ikke give adgang til appen. Gå tilbage, og prøv at logge på igen."),
                t("e7dd62c4", 'Ved at klikke på knappen "Godkend app" giver du xAI tilladelse til at tilgå dine data fra X, herunder:'),
                t("debbdc98", "Din X-brugerprofil, dine X-kontooplysninger, dine X-indstillinger og dine X-præferencer."),
                t("d9cf7c9c", "Dine X-posts, der kan ses på din X-konto, herunder posts til og fra alle konti (offentlige eller beskyttede), som du kan se."),
                t("cdf40068", "Din samtalehistorik i Grok på X."),
                t("cea71014", "Vi indlæser dine kontakter..."),
                t("b5474bd2", "Hmm ... noget gik galt."),
                t("ab4b970a", "Brug X-appen til at anmode om en ny verifikations-e-mail."),
                t("j6d103b8", "Tilmeld dig, og opret en X-konto. Fra breaking news og underholdning til sport og politik – få hele historien med alle live-kommentarerne."),
                t("ca042c78", "Log ind på X"),
                t("ff869362", "Log ind på X for at se det seneste. Deltag i samtalen, følg konti, se din forsidetidslinje, og hold dig opdateret med posts fra de personer, du kender."),
                t("f4a654a4", "Vis på Foursquare"),
                t("c09de2d4", "Søg på tidslinjen"),
                t("i1801686", "Denne søgeforespørgsel er ugyldig. Prøv en anden."),
                t("a0b4541c", "Noget gik galt, men bare rolig – det er ikke din skyld"),
                t("d7eebb60", "Opretter dit abonnement"),
                t("a452ab68", "Dette kan tage et par sekunder."),
                t("b3bad3b2", "@premium"),
                t("accbcc78", "Opdateret"),
                t("e957c20e", "Gratis prøveperiode med fuld adgang"),
                t("a1436e70", "Du kan nu tilføje stillinger til din profil og gøre dem synlige for dit netværk. Når din ansøgning er godkendt, vil dine stillinger blive synlige, når millioner af brugere søger efter stillinger."),
                t("f9c85cec", "Handling påkrævet: Upload og verificer dokumenter"),
                t("f178f393", function (e) {
                    return "Indsend venligst de nødvendige dokumenter senest den " + e.date + ". Det tager normalt omkring 10 minutter.";
                }),
                t("f9fbeabc", "Din organisations stiftelsesdokumenter"),
                t("b4c80f5c", "Et myndighedsudstedt id"),
                t("f0915094", "Et fungerende enhedskamera"),
                t("f259d3f3", function (e) {
                    return "Vigtigt: Dokumenter skal indsendes senest " + e.date + ", ellers vil din ansøgning blive afvist uden refusion.";
                }),
                t("d35f645b", function (e) {
                    return "Ledige (" + e.count + ")";
                }),
                t("bf534b31", function (e) {
                    return "Udvalgt (" + e.count + ")";
                }),
                t("c35aded2", "Arkiveret"),
                t("b97e952a", "Det ser ud til, at du ikke har tilføjet nogen stillinger endnu."),
                t("cf1fa156", "Det ser ud til, at du ikke har udvalgt nogen stillinger endnu."),
                t("fa4a4f50", "Det ser ud til, at du ikke har arkiveret nogen stillinger endnu."),
                t("c5fb5a1a", "Ingen stillinger"),
                t("e9b91cde", "Tilføj en stilling"),
                t("c270ef3e", "Arkivér"),
                t("fe8872f4", "Succes"),
                t("d523cd74", "Arkivér denne stilling?"),
                t("jfd0b34a", "Arkivering fjerner stillingen fra din profil."),
                t("e2247e08", "ATS"),
                t("b737c0b5", function (e) {
                    return "" + e.ats;
                }),
                t("e0ce628e", "Der opstod et problem med at sende en invitation. Prøv igen senere."),
                t("ddf35536", "Der opstod et problem med at slette invitationen. Prøv igen senere."),
                t("db7144b6", "Der opstod et problem med at ændre tilknytningstype. Prøv igen senere."),
                t("be78e5fa", "Der opstod et problem med fjernelse af tilknytningen. Prøv igen senere."),
                t("fa9709ba", "Der opstod et problem med at oprette ansøgningen. Prøv igen senere."),
                t("j62f13fc", "Der var et problem med at opdatere denne stilling. Prøv igen senere."),
                t("ff5716fc", "Der var et problem med at oprette denne stilling. Prøv igen senere."),
                t("fd059188", "Der opstod et problem med at synkronisere dine stillinger. Prøv igen senere."),
                t("b82b5c00", "Noget gik galt under aktiveringen af annoncekredit. Prøv igen senere."),
                t("d74adc30", "Forkert annoncekonto tilføjet"),
                t("e4323c36", "Det annoncekonto-id, du har angivet, stemmer ikke overens med din organisation eller dens tilknytninger."),
                t("b3323ada", "Føj et kreditkort til din konto på ads.twitter.com"),
                t("ac325eb8", "Hvis du vil aktivere din annoncekredit, skal du føje et kreditkort til din annoncekonto på ads.twitter.com."),
                t("j4e6e966", "Gennemgang af annoncekonto påkrævet"),
                t("ef86e7f6", "Din konto er blevet markeret til gennemgang og kræver godkendelse."),
                t("c9c8edae", "Abonner på Verificerede organisationer for at anvende annoncekreditter"),
                t("b36c6278", "Kun betalte abonnementer på Verificerede organisationer kan bruge vores annoncekredit. Opgrader nu for at annoncere med dine tilknytninger."),
                t("c30f0168", "Åbn eksternt link"),
                t("c49b7262", "Fremhæv job"),
                t("i6ecf71a", "Fjern fremhævelse af job"),
                t("a37ef120", "Genopslå stilling"),
                t("i00355d0", "Stop med at dele"),
                t("h0481bba", "Vil du stoppe at dele dette job?"),
                t("b9dfdc7a", "Stop af deling fjerner jobbet fra dit spotlight."),
                t("h4847fa2", function (e) {
                    return "" + e.userName;
                }),
                t("e46cd68e", "Jobs, som du har delt"),
                t("ea7f1a42", "Dine Jobs"),
                t("d1cbcb90", "Kilde"),
                t("gf66326c", "Seneste opdatering:"),
                t("b917fc28", "Promovering af stillinger deaktiveret"),
                t("g06035e6", "Din annoncekonto har brug for opmærksomhed for at muliggøre promovering af stillinger."),
                t("aa16581c", "Du har ikke adgang til kontoen til promovering af stillinger. Spørg en kontoadministrator om hjælp."),
                t("g7bb6f58", "Der blev ikke fundet nogen annoncekonti."),
                t("jf1576ba", "Fejlede"),
                t("ff985a36", "Synkroniserer"),
                t("e5b8058c", "Ikke synkroniseret"),
                t("a86e335a", "Sidst synkroniseret "),
                t("c9838d68", "De stillinger, du har tilføjet, er ikke synlige endnu"),
                t("df6835a6", "Slå stillinger til på din profil for at give mere fokus til fremhævede stillinger end til dine poster, samt linke til en liste over alle dine ledige stillinger."),
                t("fc504ea0", "Begynd at vise mine stillinger"),
                t("a511934e", "Begynd at ansætte via X"),
                t("e68d2d16", "Ansøg om beta"),
                t("f7a37e30", 'Ved at klikke på "Ansøg om beta" accepterer du at blive kontaktet via e-mail ved hjælp af den virksomheds-e-mailadresse, der er knyttet til denne konto, efter godkendelse af beta-adgang.'),
                t("bfef82f0", "X-ansættelse er en gratis funktion, hvor verificerede organisationer kan slå stillinger op, vise udvalgte stillinger på deres virksomhedsprofil og tiltrække toptalenter til deres ledige stillinger."),
                t("h4b890c2", "X Hiring gør det muligt for dig at slå stillinger op, vise dem på din profil og tiltrække de største talenter til dine ledige stillinger."),
                t("c3f28126", "Nå ud til en stor målgruppe"),
                t("dec1601e", "X har over 528 mio. brugere. Fra softwareingeniører til detailhandel og gaffeltruckførere –din næste medarbejder er her."),
                t("be8393da", "Præsenter dine vigtigste roller"),
                t("i8c856ce", "Udvælg op til 3 stillinger på din profil. Alle brugere vil kunne se disse roller, når de besøger din profil."),
                t("d8bc6eea", "Tilføj op til 5 stillinger, der skal være udvalgte stillinger på din virksomhedsprofil. Alle brugere vil kunne se disse udvalgte roller, når de besøger virksomhedens profil."),
                t("a049efd4", "Importér dine stillinger hurtigt"),
                t("d12be15a", "Tilknyt et understøttet ansøgersporingssystem (ATS) eller XML-feed for at føje dine stillinger til X på få minutter."),
                t("d248d75e", "Få support"),
                t("c49d8e42", "Har du brug for hjælp? Kontakt os"),
                t("ib244b2e", "Kopier e-mailadresse"),
                t("b450472c", "Importér stillinger"),
                t("b36022d1", "xhiringsupport@x.com"),
                t("aeac3eb4", "Opdater stillinger"),
                t("aa4c37cc", "Vis stillinger på min profil"),
                t("d4b82638", "Fremhævede stillinger på din profil"),
                t("e405b1c2", "Slå stillinger til på din profil for at generere flere ansøgere til dine vigtige roller, og giv kandidater mulighed for at se alle dine åbne roller."),
                t("a85cda86", "Tilføj dine stillinger for at komme i gang"),
                t("c04b6472", "Importér eller tilføj dine stillinger med nogle få enkle trin, og begynd at få flere ansøgere. Stillinger kan også deles med følgere og vises på virksomhedens profil."),
                t("d14c02d0", "Tilføj stillinger manuelt"),
                t("b12424fc", "Ny stilling"),
                t("ca8df1e2", "Opret en stilling, og tilføj den til din stillingsliste. Hver stilling skal have en ansøgnings-URL, hvor ansøgere kan se mere om stillingen og ansøge."),
                t("f4f4dd60", "Påkrævet"),
                t("b2c213e0", "Tegngrænse overskredet"),
                t("d84e9c2a", "Fortæl om den type arbejdsindsats, der forventes for denne stilling."),
                t("bc8b300c", "Stillingsfunktion"),
                t("d1eedb50", "Hjælp ansøgerne med at forstå det område, som denne stilling understøtter."),
                t("eaf3ce64", "Team"),
                t("b36cd50e", "Angiv det primære team, som ansøgere skal arbejde sammen med, når de bliver ansat."),
                t("d3a427ce", "Vælg det nødvendige erfaringsniveau."),
                t("i7174442", "Stillingsbeskrivelse"),
                t("fef0cf02", "Giv en detaljeret stillingsbeskrivelse. Beskriv de vigtigste ansvarsområder og kvalifikationer for at give ansøgerne en klar forståelse af stillingen."),
                t("b7800bec", "Præsenter stillingen med 200 tegn eller mindre. Vises i posts, anbefalinger og søgninger."),
                t("a5244ece", "Ansøgnings-URL (påkrævet)"),
                t("g2b553f6", "Angiv den offentlige URL, hvor ansøgere kan søge denne stilling."),
                t("c2e77608", "Stillingsbetegnelse (påkrævet)"),
                t("cdf414d4", "Bruges til søgning og anbefalinger. Prøv at bruge branchens standardtitler for at forbedre dine resultater."),
                t("cc59319a", "Brug stillingsbetegnelser, der er standard i branchen, og som kendes af de fleste ansøgere."),
                t("e7117ee4", "Sted (påkrævet)"),
                t("c05176ec", "Hvis denne stilling kræver fysisk fremmøde på stedet, skal du angive stedets lokalitet(er). Hvis denne stilling er ekstern, skal du beskrive, hvor ansøgere kan befinde sig."),
                t("d70c24d4", "Bruges til at hjælpe ansøgere med at søge efter din stilling."),
                t("de1c4376", "Løninterval"),
                t("hf352d42", "Tilføj et valgfrit løninterval, som vil være synligt for ansøgere. Hvis du vælger ikke at gøre det, skal du være opmærksom på eventuelle love om løngennemsigtighed på den lokalitet, hvor du ansætter."),
                t("ede7d0a2", "Valuta"),
                t("b925c18c", "Løntype"),
                t("j3d242ce", "Ugyldigt interval"),
                t("f4d07bd2", "Inkluder valgfrie oplysninger for at gøre det lettere for ansøgere at finde dine stillinger med søgning."),
                t("b8cbb51a", "Stillingsoversigt"),
                t("bda6881e", "Denne stilling er blevet importeret fra dit ansøgersporingssystem (ATS). Bemærk, at kun specifikke felter kan ændres."),
                t("b075c68a", "Rediger stilling"),
                t("d4b6a6e0", "Profil-spotlight"),
                t("j2dd3686", "Giv mere fokus til fremhævede stillinger end til mine poster."),
                t("af1cfd46", "ATS-integration"),
                t("d6fa2944", "Hvis du sletter din integration, vil dine importerede stillinger ikke blive slettet."),
                t("h99f11fa", "Slet integration"),
                t("eef1ae76", "I øjeblikket tilsluttet"),
                t("a915f5c1", function (e) {
                    return e.ats + " tilknyttet";
                }),
                t("af7286b7", function (e) {
                    return e.percentage + " % rabat på Premium i et år";
                }),
                t("c924ad84", "Fortsæt med afspilning af videoer"),
                t("de750a3c", "Nyd dem, selv når din telefon er låst"),
                t("he5e87c4", "Boost dine svar"),
                t("g64a60ba", "Få en smule prioritering, når du svarer på opslag"),
                t("a7ee832a", "Få rettet dine stave- og slåfejl på under 60 minutter"),
                t("fdd77a34", "Skab længere opslag"),
                t("j6d26a7a", "Skriv ligeså meget, som du har lyst til at dele"),
                t("c4fd68da", "Tilpas din oplevelse"),
                t("c0195168", "Skift dit app-ikon og dine navigationsmuligheder"),
                t("b6b5dc94", "Bliv verificeret");
            t("b06db848", "Skil dig ud fra andre på platformen"),
                t("e3e3a97c", "Tjen en del af indtægterne fra dine opslag"),
                t("f15bc24e", "Højere grænser i Grok"),
                t("c4666e1c", "Brug mere af Grok 3, vores nyeste model"),
                t("he74ae7a", "Højeste brugergrænse for Grok"),
                t("f5732cd4", "Plus udvidet adgang til DeepSearch & Think"),
                t("e0198956", "Få en andel af den indtægt, der genereres af verificerede kontis interaktioner med indhold, du poster på X."),
                t("iadf78e2", "Download videoer"),
                t("ee54c3de", "Gem videoer direkte på din enhed"),
                t("ae03594c", "Lille svar-boost"),
                t("e6bb08c0", "Forøg synligheden af dine svar"),
                t("bf2a6acc", "Stort svar-boost"),
                t("c2059276", "Få dine svar boostet."),
                t("b023ec20", "Maks. svar-boost"),
                t("g337328e", "Få størst mulig synlighed for dine svar."),
                t("fa006202", "Afspilning af video i baggrunden"),
                t("jf389778", "Se med, mens du browser eller bruger andre apps"),
                t("f2977d80", "Bogmærkemapper"),
                t("j1d3d910", "Organisér dine gemte posts, så du nemt kan finde dem"),
                t("f0f48668", "Premium-support"),
                t("c3148608", "Få hurtigere hjælp, når du har brug for det"),
                t("b485ca6e", "Fanen Højdepunkter"),
                t("d438955e", "Vis dine bedste posts frem"),
                t("f373a352", "Krypterede direkte beskeder"),
                t("g7405aca", "Chat sikkert med end-to-end-kryptering"),
                t("j659fa0c", "Det bedste fra Grok 3"),
                t("ibff5694", "Lås op for de højeste brugsgrænser, DeepSearch og Tænk, plus tidlig adgang til nye funktioner"),
                t("i824f4da", "Færre annoncer"),
                t("bd17076c", "Se ca. halvt så mange annoncer på tidslinjerne Til dig og Følger."),
                t("cef2cac8", "Få en annoncefri oplevelse med sporadisk brandet indhold på mindre almindelige steder."),
                t("c97920c0", "Offline-videoer"),
                t("i4379b18", "Gem videoer til afspilning offline"),
                t("f94c6bae", "Verificeret flueben"),
                t("d72055d6", "Skab troværdighed med et verificeret flueben "),
                t("f54af178", "Skriv artikler"),
                t("c5cd5d42", "Del længere indhold, og skab tankelederskab"),
                t("jbdb08cc", "Analyser din kontos nøgletal for at forstå, hvordan den klare sig"),
                t("deaf7e0a", "Media Studio"),
                t("fd1a47b4", "Administrer og upload dine medier"),
                t("id067c96", "Søgning i Radar"),
                t("jf991d48", "Vær på forkant med trendsporing i realtid"),
                t("c244210c", "X Pro"),
                t("a90f2e8a", "Et effektivt redskab, som fungerer i realtid, til personer, som lever på X. Hold øje med flere tidslinjer på én skærm (kun på nettet)"),
                t("b3e50ef2", "Skab Fællesskaber"),
                t("bb1a4e44", "Opret dit eget Fællesskab"),
                t("j010228e", "Få en andel af de indtægter, X tjener på dine mest engagerede følgere med månedlige abonnementer."),
                t("h0e1730e", "Prioritering af svar"),
                t("jf7f743c", "Udgiv længere videoer"),
                t("c0c25b6c", "Bogmærkemapper"),
                t("ab31c79e", "Brugerdefiner appikoner"),
                t("a8a702ae", "Tilpas navigation"),
                t("d5ab1b50", "Få et Verificeret-badge"),
                t("ac298984", "Højere prioritering af svar"),
                t("g20df450", "Fjern 50 % af annoncerne"),
                t("h8dfc4de", "Højere brugsgrænse for Grok"),
                t("bf7614d4", "Skaber-abonnementer"),
                t("gadc9f4a", "Højeste prioritering af svar"),
                t("c127c5c2", "Fjern alle annoncer"),
                t("c1e0f3c8", "Lås op for Groks DeepSearch og Tænk"),
                t("aac0bbb6", "Adgang til Radar"),
                t("a6722922", "Annoncer fjernet"),
                t("ba016532", "Svar-boost"),
                t("a06f8a3e", "Grok 3"),
                t("b9e16610", "MAKS."),
                t("b1492c6c", "Højeste"),
                t("fb5e2c14", "Fremhæv posts med X Premium"),
                t("gd1f4cfa", "Vis dine bedste posts frem på din profil"),
                t("h59250bc", "Krypterede beskeder med X Premium"),
                t("ed62d546", "Længere posts med X Premium"),
                t("ca447200", "Sms-godkendelse med X Premium"),
                t("af2b99ea", "Rediger posts med X Premium"),
                t("ha265914", "Organiser bogmærker med X Premium"),
                t("gda940ae", "Opret et Fællesskab med X Premium"),
                t("c7e5ac54", "Se færre annoncer med X Premium"),
                t("e03589ba", "Boost dine posts med X Premium"),
                t("f0f8c82a", "Deltag i chats kun for verificerede med X Premium"),
                t("fecf5aaa", "Upload video i fuld HD med X Premium"),
                t("c00d2be2", "Rediger videoer med X Premium"),
                t("cd360b86", "Spørg Grok om alt"),
                t("d2e1a7a2", "Tilgængelig med X Premium"),
                t("e664abe2", "Video på X. Superladet."),
                t("e595a3e2", "Lås op for de bedste videofunktioner med Premium"),
                t("i3c9329a", "Skil dig ud med formateret tekst"),
                t("cc9def68", "Kun med X Premium"),
                t("hdef5966", "Download videoer til din enhed"),
                t("c748224a", "Lås op med X Premium"),
                t("ebfc88bc", "Få adgang til eksklusive funktioner"),
                t("f652e9ac", "Lås op for mere med Premium"),
                t("d67e94c0", "Du går glip af ..."),
                t("j1d3098c", "Lås op for mere med Premium+"),
                t("gd573390", "Og alt i Basis ..."),
                t("ef94bbd4", "Få Premium+"),
                t("dcd830ce", "Og alt i Premium ..."),
                t("b7dde622", "Glædelig Thanksgiving! Tilbuddet slutter om:"),
                t("i0180ca1", function (e) {
                    return "Indtil " + e.date + ". Glædelig thanksgiving!";
                }),
                t("hb9d0e00", "Vores 2-års jubilæumstilbud slutter om:"),
                t("d2b23e0d", function (e) {
                    return "Premium har fødselsdag! Slutter " + e.date + ".";
                }),
                t("bb4998fb", function (e) {
                    return "Indtil " + e.date;
                }),
                t("c0847ebc", "Alle opgraderinger fra Basis, plus ..."),
                t("ed672bfa", "Alle opgraderinger fra Basis og Premium, plus ..."),
                t("db63fa1c", "Vælg en premium-plan"),
                t("b128c6bc", "Få et verificeret badge og masser af andre fantastiske frynsegoder og fordele"),
                t("acfaf7a0", "Sammenlign niveauer og funktioner"),
                t("e1606e52", "Ændr dit abonnement"),
                t("d2f2b91a", "tilmeld dig her"),
                t("j4b4310e", "sekunder"),
                t("af863ee9", "gratis prøveperiode"),
                t("f5705987", "vilkår for køb"),
                t("h89dabac", "Kan altid opsiges"),
                t("f36b8e14", "Noget gik galt under hentningen af dette produkt. Prøv at genindlæse."),
                t("f1756574", "pr. måned"),
                t("i650ff14", "pr. år"),
                t("dbcd25db", function (e) {
                    return "for de første " + e.numberOfDays + " dage";
                }),
                t("bd40d5b5", function (e) {
                    return "Abonner og betal for " + e.title;
                }),
                t("i36a0b6e", "Du kan kun abonnere i X-appen til iOS (indtil videre)."),
                t("c906ad94", "Nedgrader"),
                t("db5c77e0", "Dette er dit aktive abonnement"),
                t("h77ef73e", "Skift til månedsabonnement"),
                t("d723d44a", "Skift til årsabonnement"),
                t("i253b5c6", "Opgrader og betal"),
                t("d2beeaaa", "Nedgrader og betal"),
                t("acf719d4", "Skift og betal"),
                t("ieafe1c6", "Bekræft ændringen af dit abonnement"),
                t("gf6b66b8", "Bekræft din abonnementsændring, der træder i kraft fra i dag"),
                t("e83daf87", function (e) {
                    return "Bekræft din abonnementsændring, der træder i kraft fra den " + e.date;
                }),
                t("f27022d6", "Nuværende abonnement"),
                t("i9d5f4b6", "Nyt abonnement"),
                t("ia390d8a", "Sådan fungerer din nedgradering"),
                t("fd80b875", function (e) {
                    return "Din nuværende plan forbliver aktiv, indtil din faktureringsperiode slutter. Den " + e.nextBillingDate + ", ændrer du til " + e.newTierName + " og vil blive opkrævet den nye pris.";
                }),
                t("c8fb177a", "Sådan vil din betaling blive justeret"),
                t("df776505", function (e) {
                    return "Du opgraderer til " + e.newTierName + " med ny fakturering. Du vil blive opkrævet for den nye plan i dag, men din resterende kredit vil reducere beløbet. Ændringen træder i kraft med det samme, og din fakturering bliver justeret i overensstemmelse hermed.";
                }),
                t("d7efb6ba", "Du ændrer din fakturering fra månedlig til årlig. Du vil blive opkrævet for årsplanen i dag, og din resterende forholdsmæssige månedlige saldo vil blive krediteret den samlede opkrævning. Ændringen træder i kraft med det samme, og din fakturering vil nu være årlig."),
                t("a5f2cf70", "Du ændrer din fakturering fra årlig til månedlig. Din resterende årlige kredit vil dække dine månedlige betalinger, indtil den løber ud. Ændringen sker med det samme, og du vil nu blive faktureret hver måned."),
                t("ef1c0208", "Bekræft planændring"),
                t("c20806d5", "vilkår for anvendelse"),
                t("i10be4c9", "vilkårene"),
                t("cdda96d6", "Kan altid opsiges"),
                t("cc67158f", "vilkår for anvendelse"),
                t("eb420831", "vilkårene"),
                t("c7d49608", "Kan altid opsiges"),
                t("ab176bd1", "vilkår for anvendelse"),
                t("cea928a5", "vilkårene"),
                t("e37c69e0", "Kan altid opsiges"),
                t("ia08113f", " Vilkår for anvendelse"),
                t("d2962b73", "Vilkår"),
                t("b421795a", "Annullér når som helst"),
                t("f8d88ac7", "Vilkår for anvendelse"),
                t("ca220fe9", "Vilkår"),
                t("ab8beda0", "Annullér når som helst"),
                t("ife2636d", "Vilkår for anvendelse"),
                t("fb57be65", "Vilkår"),
                t("e468a6c2", "Annullér når som helst"),
                t("e9f4c89b", "Vilkår for anvendelse"),
                t("hce73b41", "Vilkår"),
                t("i4db5c92", "Annullér når som helst"),
                t("ae095fe8", "Grok AI"),
                t("d4e60288", "Højeste forbrugsgrænser"),
                t("abaa4274", "Lås op for DeepSearch og Tænk"),
                t("e0d53864", "Tidlig adgang til nye funktioner"),
                t("g1be3530", "GRATIS PRØVEPERIODE"),
                t("b10b4f1f", function (e) {
                    return "SPAR " + e.percentOff + "% FØR " + e.date;
                }),
                t("b8d0bd19", function (e) {
                    return "Prøv " + e.productName + " gratis";
                }),
                t("f89dfa74", "Mest værdi"),
                t("b9a4d8c6", "Årligt"),
                t("f5fb58b4", "Plus alle X Premium-funktioner"),
                t("i527045e", "Flueben, mere Grok, svar-boost, statistik og meget mere"),
                t("ga482a88", "Årsabonnement"),
                t("hc64d5b0", "Månedsabonnement"),
                t("de7db957", function (e) {
                    return e.price + " om året, der faktureres årligt";
                }),
                t("d8982437", function (e) {
                    return e.price + " om året, der faktureres månedligt";
                }),
                t("f0ad5cc8", "år"),
                t("a0dc6e4c", "Ikke tilgængelig i øjeblikket"),
                t("jd8b2e66", "Abonner og betal"),
                t("aa5df29f", function (e) {
                    return "" + e.oldPrice;
                }),
                t("g1c4f7a1", function (e) {
                    return "" + e.oldPrice;
                }),
                t("i7fbacc4", "Skift mellem de tilgængelige abonnementsniveauer"),
                t("c9cc122b", function (e) {
                    return e.feature + " er inkluderet i " + e.title;
                }),
                t("bff35771", function (e) {
                    return e.feature + " er ikke tilgængelig i " + e.title;
                }),
                t("a69fd369", function (e) {
                    return "Starter fra " + e.price;
                }),
                t("e563a5d1", function (e) {
                    return "Abonner for " + e.percentage + " % rabat (tidsbegrænset)";
                }),
                t("dfc5f972", "Og meget mere ..."),
                t("fb8453c8", "Lås op for DeepSearch- og Tænk-anmodninger"),
                t("e45b3f30", "Lås op for anmodninger i Undersøg og Ræsonnement"),
                t("aaebdc2e", "Meget større adgang til Grok 3 mini og Grok 3"),
                t("ddf8a412", "Adgang til nye funktioner før andre"),
                t("gfb04ef4", "Alle Premium+-funktioner på X"),
                t("b601cfbb", function (e) {
                    return "Prøv for " + e.price + " pr. måned";
                }),
                t("i3e90e20", "Midlertidigt utilgængelig"),
                t("d9e9ce26", "Abonnér og betal:"),
                t("j1f5a580", "Der opstod et problem med dit Premium-abonnement. Tjek dine betalingsoplysninger, og prøv igen."),
                t("ebc84442", "Registrering af Premium-abonnement"),
                t("cd9102d4", "Vælg kategori"),
                t("eb551aea", "Vis kategori på profil"),
                t("f386777a", "Skift kontotype"),
                t("db483090", "Skiftede til Personlig konto"),
                t("c701200c", "Skiftede til Virksomhedskonto"),
                t("acd8da0a", "Skiftede til Skaberkonto"),
                t("cb55ecce", "Skift til Personlig konto"),
                t("h4aeb984", "Skift til personlig konto"),
                t("ada6073a", "Har du ikke brug for professionelle værktøjer?"),
                t("eb723d4c", "Personlige konti har ikke værktøjer som Profil-spotlight og Shopping Manager. Du skal oprette en ny professionel konto, hvis du vil skifte tilbage."),
                t("hbb1af08", "Skift til Virksomhedskonto"),
                t("a9b5e3aa", "Nej, annuller"),
                t("ia49207a", "Ja, skift"),
                t("g3f74902", "Skift til en Virksomhedskonto?"),
                t("f3bcfac0", "Dette er bedst for brands, detailbutikker, tjenesteudbydere og organisationer."),
                t("d0c3f02e", "Skift til Skaberkonto"),
                t("a01e84e0", "Skift til en Skaberkonto?"),
                t("e8af8ef4", "Dette er bedst for offentlige personer, kunstnere og influencere."),
                t("e44eab74", "I øjeblikket er det ikke alle moduler, der understøttes på alle X-klienter"),
                t("ce4185bc", "Der kommer snart flere spotlights"),
                t("b5aed332", "Ingen tilgængelige spotlights"),
                t("g419ecf4", "Bliv på siden"),
                t("d3a097a2", "Ja, slet dem"),
                t("j1e1cd30", "Slet dine ændringer?"),
                t("fc779c28", "Udvælg spotlight"),
                t("ie85a7a8", "Slet dine virksomhedsoplysninger?"),
                t("b5348efc", "Ingen åbningstider"),
                t("db285564", "Altid åben"),
                t("g7993eee", "Brugerdefineret åbningstid"),
                t("c9ee902a", "Vis kort"),
                t("j224a074", "Alle angivne lokalitetsoplysninger er offentligt tilgængelige, når Location Spotlight er slået til. Telefon og e-mail kan tilgås via knappen Kontakt."),
                t("f448cbcc", "Valgfri"),
                t("c16c9568", "Adresse"),
                t("i3a38711", "Servicevilkår for Google Maps"),
                t("beb66f50", "Googles privatlivspolitik"),
                t("e0d47030", "Hvor kan dine kunder få fat i dig? Husk, at disse oplysninger er offentligt tilgængelige, så dine kunder kan finde dig. Du kan altid fjerne dem igen."),
                t("c7a4adb0", "Tilføj adresse"),
                t("cd39daf6", "Postnummer"),
                t("gc0df5a6", "Tilføj postnummer"),
                t("c6c16a52", "By"),
                t("aa8015be", "Tilføj by"),
                t("b688f53a", "Stat/provins/region"),
                t("a67f5bbc", "Tilføj stat/provins/region"),
                t("if92b1b4", "Tilføj land"),
                t("ffc5590e", "Ugyldig by"),
                t("a8fd64d8", "Søg efter lande"),
                t("a0abe108", "Ugyldig stat/provins/region"),
                t("j163df8e", "Ugyldig adresse"),
                t("af9b9b78", "Ugyldigt postnummer"),
                t("i373e022", "Indtast e-mail"),
                t("f91751f8", "Dette er synligt for offentligheden"),
                t("g33c0564", "Ugyldig e-mail"),
                t("ga71fbf4", "Åbningstider"),
                t("ca2ba204", "Rediger brugerdefineret åbningstid"),
                t("d7b7dbca", "Der vises ingen åbningstider på din profil"),
                t("a460e770", "f.eks. parker, strande, shopping på nettet"),
                t("ddc88bf0", "Angiv åbningstider for hver dag"),
                t("j11df0ca", "Overlappende åbningstider"),
                t("f9f911f4", "Søg efter tidszone"),
                t("d21a4252", "Tilføj flere åbningstider"),
                t("ac6ce1c0", "Fra"),
                t("c647aac8", "Til"),
                t("b926e64a", "Indtast websted"),
                t("i019c8b6", "Ring op"),
                t("eabc6906", "Sms"),
                t("h24d868c", "Opkald og sms"),
                t("fa64f1fc", "Vælg en landekode"),
                t("c7d3629a", "Telefonnummer"),
                t("ce48a958", "Hvordan vil du gerne kontaktes?"),
                t("b97705ce", "Husk, at dette telefonnummer er offentligt tilgængeligt, så dine kunder kan kontakte dig. Du kan altid fjerne det igen."),
                t("f7ff19ec", "Tilføj landekode"),
                t("bb7f177a", "Ugyldigt telefonnummer"),
                t("b91d1394", "Tilføj app"),
                t("d3cd1160", "Tilføj iOS-app"),
                t("f2124008", "URL-adresse til App Store"),
                t("dc0d9d6a", "Tilføj Android-app"),
                t("dd1605f0", "URL-adresse til Play Store"),
                t("g4098f78", "Hvor kan jeg finde dette?"),
                t("b949cdc6", "Fjern app"),
                t("b4b8a486", "Vælg Fællesskab"),
                t("jfe04cf6", "Ryd dit valg?"),
                t("a14aa8dc", "Dette fjerner Fællesskabet fra dit spotlight."),
                t("cc4add98", "Vælg et Fællesskab for at se et eksempel på, hvordan det vil se ud på din profilside"),
                t("jd3e9ea6", "Du har ingen Fællesskaber"),
                t("daad9741", "oprette dit eget Fællesskab"),
                t("c46cdabc", "Avancerede værktøjer"),
                t("f6a2233a", "Administrer tilladelser på tværs af konti"),
                t("ccb3ca48", "Virksomhedsindstillinger"),
                t("b0ef3100", "Opret flotte annoncekampagner"),
                t("ff1c5e1a", "Center for professionelle"),
                t("f53adc36", "Skab resultater i den virkelige verden"),
                t("hc4981d6", "Profil-spotlights"),
                t("fbce8dbe", "Find personer at følge"),
                t("ae76c624", "Skab flere forbindelser"),
                t("ae0383d4", "Forøg dit engagement, og nå ud til flere"),
                t("a1dbe746", "Boost dit engagement, og nå ud til flere"),
                t("hbd124ae", "Boost en post"),
                t("hd80bd3e", "Promover en post"),
                t("fe2b0008", "Lær at bruge X"),
                t("h257d4aa", "Vælg en post at promovere"),
                t("d28a1d72", "Vær den allerførste til at spotte trends med Radar"),
                t("fb70427a", "Vi introducerer det mest effektive søgeværktøj på X."),
                t("i54bf620", "Overvåg keywords"),
                t("e8bb09bc", "Fokuser på et hvilket som helst emne ved hjælp af avancerede søgefunktioner."),
                t("d4c9d5aa", "Visualiser trends"),
                t("e78263fe", "Spor samtaler med daglige aktivitetsgrafer fra de sidste 3 dage."),
                t("e3ed8220", "Nøgletal i realtid"),
                t("f4952956", "Få øjeblikkelig statistik over antal posts i dine forespørgsler."),
                t("cce3f116", "Post blev føjet til dine bogmærker"),
                t("b593b396", "Posten blev fjernet fra dine bogmærker"),
                t("af9c8a3e", "Åbn app"),
                t("ef483238", "Statusside for post"),
                t("jcf3ff56", "Stor tekst"),
                t("f1252ac8", "Mellemstor tekst"),
                t("daa0da04", "Lille tekst"),
                t("ba5256b2", "Tekststørrelse"),
                t("h030c24c", "Indberet et problem"),
                t("b12ffee6", "Udeluk fra Fællesskab"),
                t("e37836f8", "Oplysninger om indberetning"),
                t("fb35e52a", "Vis regel"),
                t("e238c590", "Hvad nu?"),
                t("if218e60", "Din indberetning bliver gennemgået af vores team og teknologiske løsninger. Hvis vi finder en overtrædelse af reglerne, giver vi dig besked om, hvad vi gør ved det."),
                t("b6dc1984", "Hvad er processen?"),
                t("b0a16894", "Kontekst betyder noget. Vi overvejer følgende faktorer, når vi håndhæver vores regler (dette er ikke en udtømmende liste):"),
                t("d4716820", "Er det indberettede indhold målrettet mod personer pga. deres identitet?"),
                t("e899a534", "Hvor alvorlig er denne overtrædelse?"),
                t("d9c4e7ae", "Blev indberetningen indsendt af den person, der blev målrettet mod?"),
                t("afb51066", "At oprette dubletter af indberetninger fremskynder ikke processen."),
                t("b7ba712a", "Overtrædelse fundet"),
                t("d90b8c04", "Ingen overtrædelse fundet"),
                t("c2d0494a", "Vores sikkerhedsanbefalinger"),
                t("be46e000", "Indberetningsdubletter"),
                t("e846ae32", "Selvom indholdet er slettet, kan nogen have lavet en kopi eller taget skærmbilleder. Hvis du ser det på X, bedes du indberette det, så vi kan fjerne det."),
                t("e3647d08", "Kontakt politiet"),
                t("gad89c4a", "Hvis du føler, at du er i fare, anbefaler vi, at du kontakter det lokale politi. De kan konsultere vores retningslinjer for politi, hvis de har opfølgende spørgsmål. "),
                t("h7fa9240", "USA:"),
                t("fb2ff552", "National Suicide Prevention Lifeline på 988."),
                t("bb57e8c0", "Andre lande og regioner:"),
                t("b9ce59ba", "Tak igen, fordi du gjorde os opmærksom på dette."),
                t("d42899ad", "International Association for Suicide Prevention."),
                t("c9853de0", "Indhold skjult"),
                t("c197728e", "Løst"),
                t("f4422d78", "Indberetninger"),
                t("i07c24fa", "Du har ingen ventende indberetninger"),
                t("h542c98a", "Se detaljer"),
                t("e6e11d12", "Du har ingen løste indberetninger"),
                t("ibf33bae", "Indberet dubletter, så de kan fjernes"),
                t("a288ca36", "retningslinjer for politi"),
                t("a62c9c34", "Følg dine interesser."),
                t("cf39fca2", "Hør, hvad folk taler om."),
                t("j86184fe", "Deltag i samtalen."),
                t("ac2035f2", "Tilmeld dig i dag."),
                t("h0af9418", "Opret en konto"),
                t("eba1b198", "Sker nu"),
                t("fa811c30", "Har du allerede en konto?"),
                t("b4bdfb3e", "Hent Grok-appen"),
                t("f991cfaa", "Få Grok"),
                t("a4298bc0", "X. Det er her, det sker"),
                t("j3f49ff6", "Fra breaking news og underholdning til sport og politik - få hele historien med alle live-kommentarerne."),
                t("d65555c2", "ELLER"),
                t("e75df5c9", function (e) {
                    return e.query + " – Søg";
                }),
                t("ac4fb0f4", "Billeder"),
                t("aea62568", "Søgefiltre"),
                t("gfcfbf8c", "Din søgning blev gemt."),
                t("a4645d92", "Din gemte søgning blev slettet."),
                t("b11805af", function (e) {
                    return "Se posts om " + e.query + " på X. Se, hvad folk siger, og deltag i samtalen.";
                }),
                t("d610e8c3", function (e) {
                    return "De seneste posts på " + e.query + ". Læs, hvad folk siger, og deltag i samtalen.";
                }),
                t("j622effe", "Avanceret søgning"),
                t("i5045e74", "Overalt"),
                t("h2388754", "Nær dig"),
                t("a0cf4306", "Grok-sammendrag"),
                t("f97f7b46", "Skjul Grok-sammendrag"),
                t("f9d35b98", "Du kan kun have 25 gemte søgninger. Slet en søgning for at gemme en ny."),
                t("ha925ad4", "Noget gik galt. Prøv at gemme din søgning igen om et øjeblik."),
                t("h0a9931c", "Noget gik galt. Prøv at slette din søgning igen om et øjeblik."),
                t("h4912b5e", "Gem søgning"),
                t("b9bc69ca", "Slet gemt søgning"),
                t("eb63de70", "X – Avanceret søgning"),
                t("d3938be8", "Ord"),
                t("e0dded5e", "Engagement"),
                t("a097f7ba", "Datoer"),
                t("c03f15ca", "Ethvert sprog"),
                t("cb334136", "Links"),
                t("jf1cbcc2", "Medtag posts med links"),
                t("gede6f6e", "Vis kun posts med links"),
                t("bda44dd4", "Medtag svar og oprindelige posts"),
                t("ab870904", "Vis kun svar"),
                t("b6215680", "Alle disse ord"),
                t("cceffa5e", 'Eksempel: det sker · indeholder både "det" og "sker"'),
                t("f1c5faee", "Denne eksakte sætning"),
                t("ad10780e", "Eksempel: happy hour · indeholder den eksakte sætning “happy hour”"),
                t("a555a3f4", "Nogen af disse ord"),
                t("ee8a2b60", 'Eksempel: katte hunde · indeholder "katte" eller "hunde" (eller begge)'),
                t("f51fe348", "Ingen af ​​disse ord"),
                t("hb657ad4", 'Eksempel: katte hunde · indeholder hverken "katte" eller "hunde"'),
                t("d10da5da", "Disse hashtags"),
                t("f0b52b50", "Eksempel: #ThrowbackThursday · indeholder hashtagget #ThrowbackThursday"),
                t("e292598a", "Fra disse konti"),
                t("hef790d8", "Eksempel: @X · sendt fra @X"),
                t("g2c27394", "Til disse konti"),
                t("d158d9d0", "Eksempel: @X · sendt i svar til @X"),
                t("a10e3230", "Omtaler disse konti"),
                t("daaf2c72", "Eksempel: @SFBART @Caltrain · omtaler enten @SFBART eller @Caltrain"),
                t("b18366ba", "Minimum antal svar"),
                t("f481ba1c", "Eksempel: 280 · posts med mindst 280 svar"),
                t("ib3ddbd4", "Minimum antal likes"),
                t("ef994dac", "Eksempel: 280 · posts med mindst 280 likes"),
                t("a504ca74", "Minimum antal reposts"),
                t("jd9bd944", "Eksempel: 280 · posts med mindst 280 reposts"),
                t("e95b9448", "Generelt"),
                t("f458a3b2", "Privatliv"),
                t("bdc6f5b8", "Din konto"),
                t("ea848de8", "EarlyX-indstillinger"),
                t("df483b48", "Funktionsparametre"),
                t("bd05add8", "Ikke en bot"),
                t("d94f12b6", "Prøv at søge efter meddelelser, privatliv osv."),
                t("ba8f6f82", "Søg efter indstillinger"),
                t("g931a6e5", function (e) {
                    return "Du følger " + e.topic;
                }),
                t("h3f9027a", "Du vil se posts om dette på din forsidetidslinje. Dette emne hjælper med at gøre din oplevelse på X mere personlig."),
                t("e241095e", "Dine emner"),
                t("f8bc75e2", "dine emner"),
                t("ed827af6", "Emnet er ikke tilgængeligt."),
                t("d094c720", "Alle emner"),
                t("g3e87c61", function (e) {
                    return e.topicName + " | Emner";
                }),
                t("g02269ba", "Følg Emner på X. Med Emner kan du se posts fra en række konti, der er eksperter eller bare er fans af forskellige emner på X."),
                t("e80d2509", function (e) {
                    return "Følg emnet " + e.topicName + " på X. Du vil se top-posts fra en række konti, der er eksperter, fans eller bare plejer at tale om " + e.topicName + " på X.";
                }),
                t("e44b4256", "Historik for historie"),
                t("a74af3f8", "Ingen historik fundet for historie."),
                t("c3077694", "Trend-posts"),
                t("a9042b6c", "Trendhistorik"),
                t("ed54bc32", "Indberet trend"),
                t("f89bcc50", "Trend indberettet"),
                t("gde7b6b0", "Gem ikke"),
                t("i6212670", "Indlæser trend"),
                t("c6a07c10", "Trend-tidslinje"),
                t("b0c91a92", "Log ind eller tilmeld dig for at se, hvad folk på X siger om dette"),
                t("d7071084", "Grok dette"),
                t("ee2200f4", "Denne historie er et sammendrag af posts på X lavet af Grok. Historien udvikler sig med tiden."),
                t("dd225af8", "Ingen personer fundet."),
                t("e1e5d552", "Rediger din cirkel"),
                t("ec13f9cc", "Der er ikke nogen i din cirkel – endnu"),
                t("dab58e32", "Når du tilføjer personer, bliver de vist her."),
                t("f43112a4", "Sådan fungerer det"),
                t("a4d60c94", "Noget gik galt. Vi kan ikke føje dem til din cirkel lige nu."),
                t("a1ba3bd8", "Din cirkel er fuld. Du har nået det maksimale antal på 150 personer i din cirkel."),
                t("ac3fd6e2", "Du har ingen anbefalinger – endnu"),
                t("eeb4d3f0", "Her foreslår vi personer, som du kan føje til din cirkel."),
                t("aea3c420", "Der er ingen citater endnu"),
                t("b40a22c0", "Tilføj dit synspunkt, når du deler en andens post, og den bliver vist her."),
                t("f08d8d08", "Forstærk posts, du synes om"),
                t("f0ccff52", "Del en andens post på din tidslinje ved at reposte den. Når du gør det, bliver den vist her."),
                t("fc1acb54", "Ingen likes endnu"),
                t("e3527230", "Når nogen (også dig) trykker på hjertet for at like denne post, bliver den vist her."),
                t("i3e8b808", "Indlæser brugere, som har liket denne post"),
                t("c69fd704", "Indlæser brugere, som har repostet denne post"),
                t("f12858d4", "Liket af"),
                t("fe62cfec", "Repostet af"),
                t("h1c5d6aa", "Sendt af dig"),
                t("h6d45054", "Sendt af alle"),
                t("da68fff1", function (e) {
                    return e.count + " Mønt" + i(e.count, "", "er") + " (kun synlig for dig)";
                }),
                t("e35f2534", "Indlæser post-engagementer"),
                t("i60dfa72", "Post-engagementer"),
                t("dc604dda", "Brugere, som har liket denne post"),
                t("cdd4ef4a", "Brugere, som har repostet denne post"),
                t("icc72234", "Citater af denne post"),
                t("hc35b530", "Ingen likes endnu"),
                t("e0d6a246", "Der er ingen reposts endnu"),
                t("i2a26cb4", "Når nogen trykker på hjertet for at like denne post, bliver det vist her."),
                t("i9b724e8", "Her finder du en liste over alle, der har citeret denne post."),
                t("a5ab75ae", "Ingen relaterede posts fundet."),
                t("ce637c0e", "Ingen relaterede artikler fundet."),
                t("fd67deaa", "Del relaterede posts"),
                t("f9183bb6", "Kopiér link til relaterede posts"),
                t("fc4e5d96", "Du kan kun se statistik over dine egne posts."),
                t("ab0da59f", function (e) {
                    return e.entity + "-statistik";
                }),
                t("ae32e7de", "Dette er en promoveret post. Antallet af gange, denne post er blevet set, er privat."),
                t("a10aa36c", "hjælpecentret"),
                t("d0740558", "hjælpecentret"),
                t("d2d76dca", "hjælpecentret"),
                t("b6414532", "Den anslåede fordeling af de personer, der har set din post"),
                t("c61c6624", "Promoveret"),
                t("d267afa2", "Under 20"),
                t("db81cab0", "20-29"),
                t("f173716e", "30-39"),
                t("ada329e6", "40-49"),
                t("j2950694", "Over 50"),
                t("bcd9cf68", "Over 65"),
                t("f05f1838", "Andet/ikke angivet"),
                t("fa5be588", "Organisk"),
                t("c69069e6", "Antal gange denne post blev set på X"),
                t("a0615bac", "Samlet antal gange en bruger har interageret med en post. Dette inkluderer alle klik overalt på posten (inklusive hashtags, links, profilbillede, brugernavn og post-udvidelse), reposts, svar, følg og likes."),
                t("d8abdaa4", "Nye følgere"),
                t("c72f25a8", "Følgere du har fået direkte fra denne post"),
                t("acc4cf12", "Antal profilvisninger fra denne post"),
                t("c7d0d1c4", "Antal klik på en URL i denne post"),
                t("a4da7724", "Antal gange folk har set detaljer om denne post"),
                t("c5d4d3a8", "Pris pr. følg"),
                t("f56e24f2", "Samlede udgifter divideret med antallet af følgere, herunder optjente. Du betaler kun, når nogen følger dig"),
                t("g33fd6b1", function (e) {
                    return e.percentage + " fra promovering";
                }),
                t("b71059c3", function (e) {
                    return e.percentage + " fra ingen følgere";
                }),
                t("h4cbba3e", "< 5%"),
                t("h1cdac12", "< 5% fra kampagne"),
                t("g884b2cc", "< 5% fra ikke-følgere"),
                t("b32334a0", "Konti du har nået"),
                t("h142a79c", "Antal unikke visninger for denne post"),
                t("de4def4e", "% fra alle promoveringer til dato"),
                t("e3390c1e", "Første 48 timer"),
                t("aead0975", function (e) {
                    return "Dette sporer, hvor mange gange, denne post er blevet læst i løbet af de første 48 timer, efter den blev postet. Den maksimale værdi er " + e.maxValue + " eksponeringer.";
                }),
                t("ib1f8491", function (e) {
                    return e.likeCount + " like" + i(e.likeCount, "", "s");
                }),
                t("dc0e7f37", function (e) {
                    return e.retweetCount + " repost" + i(e.retweetCount, "", "s");
                }),
                t("d0eeb127", function (e) {
                    return e.replyCount + " svar";
                }),
                t("db6efeb8", "Din promovering kører"),
                t("j6daea86", "Din kampagne er sat på pause"),
                t("hf9ed10f", function (e) {
                    return e.endTimeString + " · " + e.endDateString;
                }),
                t("f42a198d", function (e) {
                    return e.spentBudget + " af " + e.totalBudget + " brugt";
                }),
                t("e8adeec8", "Promover igen"),
                t("fbb5c37e", "Boost igen"),
                t("ccffb487", function (e) {
                    return "Din post har fået " + e.impressions + " eksponering" + i(e.impressions, "", "er") + " indtil videre. Skift til en professionel konto for at udvide din rækkevidde.";
                }),
                t("ha13fd94", "Boost post"),
                t("jede3014", "Din promovering er ved at blive gennemgået"),
                t("b823301e", "Når det er godkendt, promoveres din post til den målgruppe, du har valgt."),
                t("a2e48870", "Gennemgå X's annoncepolitik"),
                t("ge538876", "Nøgletal for den video du har delt"),
                t("ca7e10d8", "Unikke visninger"),
                t("i611fc96", "Samlet antal gange denne video er blevet vist på tværs af alle posts"),
                t("a69cd868", "Antal unikke visninger af denne video"),
                t("f894a688", "Fastholdelse af målgruppe"),
                t("ad9d9204", "Den tid i procent, som seerne har brugt på at se en video, indtil de forlader den, og hvor meget af videoen, de har set."),
                t("da4b7a70", "Procentdel af seere, der har set en video frem til et givet tidspunkt"),
                t("de2d89a2", "Set 25 %"),
                t("i92754c2", "Set 50 %"),
                t("be8ddcc2", "Set 75 %"),
                t("b01410d6", "Set 100 %"),
                t("gfb3d8af", function (e) {
                    return "Set indtil " + e.timeLabel;
                }),
                t("fc6cbba2", "Intet at se her. Endnu"),
                t("b80a53c8", "Når der er indsamlet flere data, bliver disse oplysninger vist her."),
                t("d25dccb6", "Statistik er ikke tilgængelig for cirkel-posts."),
                t("g61ac32a", "Vi målretter automatisk mod de brugere, der er mest tilbøjelige til at interagere med dit indhold."),
                t("e8702feb", function (e) {
                    return "Få " + e.couponAmount + " af os!";
                }),
                t("e44dc579", function (e) {
                    return "Kom i gang nu, og få " + e.couponAmount + " i rabat på din første promovering før " + e.date + ".";
                }),
                t("hd8df545", function (e) {
                    return "Kom i gang nu, og få " + e.couponAmount + " i rabat på din næste promovering før " + e.date + ".";
                }),
                t("f1d32e41", function (e) {
                    return "Brug " + e.spendAmount + ", og få " + e.couponAmount + " i annoncekredit.";
                }),
                t("c4d0434b", function (e) {
                    return e.dailyBudget + " pr. dag i " + e.durationLabel;
                }),
                t("dc4a9413", function (e) {
                    return e.totalBudget + " over " + e.durationLabel;
                }),
                t("bad70c09", function (e) {
                    return "Lokalitet" + i(e.numLocations, "", "er");
                }),
                t("c133a39b", function (e) {
                    return e.minAge + " - " + e.maxAge;
                }),
                t("ee5da8f5", function (e) {
                    return e.minAge + "+";
                }),
                t("g4bf9cb7", function (e) {
                    return e.durationDays + " dag" + i(e.durationDays, "", "e");
                }),
                t("gc3ce5d9", function (e) {
                    return "Anslået rækkevidde på " + e.audienceLow + "-" + e.audienceHigh + " personer pr. dag";
                }),
                t("c1778029", function (e) {
                    return e.locationsHeading + ": " + e.locations + e.newlinePlaceholder + "Aldersinterval: " + e.formattedAge + e.newlinePlaceholder + "Køn: " + e.gender;
                }),
                t("a4ab12b9", function (e) {
                    return "Når du har brugt mere end " + e.spendAmount + " på én eller flere kampagner, føjer vi " + e.couponAmount + " i annoncekredit direkte til din annoncekonto. Det kan tage nogle dage, før kreditten bliver anvendt.";
                }),
                t("cb51c854", "Alle køn"),
                t("bb7b39e2", "Mænd"),
                t("eb9466d0", "Kvinder"),
                t("b07cc9f2", "Region"),
                t("ce309bee", "Metro"),
                t("cc49d030", "Postnr."),
                t("c3fca124", "Boost dit engagement"),
                t("d4f57cce", "Få flere følgere"),
                t("c6daa762", "Få flere klik på links"),
                t("cc642518", "Søgelokaliteter"),
                t("i0e8c3c6", "Lokalitetsresultater"),
                t("f69ad048", "Vælg en lokalitet"),
                t("d948b978", "Du må kun promovere dine egne posts."),
                t("cfcdb4a2", "Noget gik galt. Sørg for, at du har deaktiveret alle programmer til annonceblokering."),
                t("j7a2af7a", "Vil du ikke promovere denne post?"),
                t("a78bce8e", "Hvis du afslutter nu, bliver denne post ikke promoveret."),
                t("g8844150", "Promover ikke"),
                t("e7eb3684", "Budget pr. dag"),
                t("d9f6e3ce", "Skyder til budget pr. dag"),
                t("b3954eca", "Skyder til varighed i dage"),
                t("ce665a60", "Den anslåede rækkevidde er omtrentlig. Den faktiske rækkevidde kan ikke garanteres."),
                t("i0c3b95c", "Vi betaler næste gang!"),
                t("h8b6e32a", "Du har promoveret din post!"),
                t("ee8014a6", "Du kan altid tjekke post-statistik for at måle din annonceeffektivitet."),
                t("db841200", "Boost dit engagement, nå ud til flere, og spred budskabet om din side."),
                t("fcc839b6", "Hvad er dit mål?"),
                t("b679a538", "Din post indeholder medier"),
                t("cb19a2f0", "Få flere likes, reposts osv."),
                t("a2d37164", "Få flere besøgende på dit websted"),
                t("cefad302", "Føj et link til din post"),
                t("b614fad0", "Sørg for, at din post indeholder et link."),
                t("de43b660", "Betalingsmetoder"),
                t("hb4773a0", "Tilføj ny betalingsmetode"),
                t("aa2a3dd4", "Slet kort"),
                t("b1c5b63c", "slutter om"),
                t("affb5878", "Bekræft sletning"),
                t("db443ae2", "Ser alt OK ud?"),
                t("a96f811e", "Promoveringsmål"),
                t("fbd44e96", "Dit budget"),
                t("e36bce64", "Betalingsmetode"),
                t("ia83756c", "Subtotal"),
                t("cc217a04", "Kuponsaldo"),
                t("g4f2b588", "Resterende kuponsaldo"),
                t("i41612da", "Opret promovering"),
                t("cdae1af0", "Tilføj momsoplysninger"),
                t("ed8bb5a0", "Tilføj betalingsoplysninger"),
                t("fc640c20", "Tilføj betalingsoplysninger for at indløse din kupon"),
                t("be2dc078", "Tilmeld dig, og tilføj betalingsoplysninger"),
                t("iaefd4de", "Tilmeld dig, og tilføj betalingsoplysninger for at indløse din kupon"),
                t("e5e42640", "Hmm ... din kupon blev ikke indlæst. Prøv igen senere."),
                t("e85dfd66", "Der er allerede oprettet en kampagne til denne post."),
                t("a4db098c", "Det ser ud til, at vi ikke kunne oprette din promovering. Prøv igen senere."),
                t("ef7e3916", "Noget gik galt. Kontrollér promoveringsoplysningerne, og prøv igen."),
                t("c1134966", "vilkårene og retningslinjerne for annoncering"),
                t("he45cc43", "kuponvilkår"),
                t("c9439a82", "vilkårene og retningslinjerne for annoncering"),
                t("c672105a", "Hvem vil du nå ud til?"),
                t("e1efbeae", "Aldersinterval"),
                t("c6ff7c10", "Min. aldersinterval"),
                t("b555fb46", "Maks. aldersinterval"),
                t("j2c03e12", "55+"),
                t("d4e01892", "politik for bolig-, udlåns- og jobannoncer"),
                t("df8d4fa0", "Vælg et køn"),
                t("i982d424", "Hvor meget vil du investere?"),
                t("b9ff6cb0", "Der er ikke valgt nogen betalingsmetode"),
                t("i8b90688", "vilkårene og retningslinjerne for annoncering"),
                t("a93bd26d", "kuponvilkår"),
                t("d31dc460", "vilkårene og retningslinjerne for annoncering"),
                t("ga845597", function (e) {
                    return "I alt over " + e.durationLabel;
                }),
                t("e1945a89", function (e) {
                    return e.audienceLow + "-" + e.audienceHigh;
                }),
                t("b21c2549", "Lær mere"),
                t("j9f78b42", "Der er ingen taggede brugere i denne post."),
                t("cb2054fa", "Indlæser brugere"),
                t("e4ad6bda", "I dette billede"),
                t("cdd4aafe", "Indlæser personer i samtalen"),
                t("aac3fad2", "Personer i denne samtale"),
                t("a7f66562", "Indlæser post"),
                t("b7a898fa", "Gå direkte til næste post herfra!"),
                t("e254fdd2", "Du kan swipe direkte til næste post!"),
                t("h59700fa", "ImmersiveMediaViewer"),
                t("i86c2940", "Scrubber"),
                t("h2fcc532", "Indlæser historik"),
                t("a74821a0", "Det ser ud til, at din betaling ikke gik igennem eller er ved at udløbe. Opdater dine betalingsoplysninger for at beholde dit Premium-abonnement."),
                t("bb55752e", "Mønter giver dig mulighed for at støtte skabere, der poster fantastisk indhold. Ubrugte mønter opbevares i din saldo."),
                t("ea7ce65f", function (e) {
                    return e.count + " bonusmønt" + i(e.count, "", "er") + " inkluderet.";
                }),
                t("e557f9d2", "Du har nået grænsen for din møntsaldo."),
                t("e2beba5e", "Mest populær"),
                t("gafeeb96", "Køb mønter"),
                t("bc42db1c", "Kan altid annulleres. Fornys automatisk hver måned."),
                t("f1561b06", "vilkårene for køb"),
                t("fe93ed4a", "Køb gennemført"),
                t("bcb90375", function (e) {
                    return "Din nye møntsaldo er " + e.balance + ".";
                }),
                t("ia2eb0c0", "Køb mislykket!"),
                t("c7e11484", "Dine Lister er tomme"),
                t("a96208ba", "Du skal oprette en Liste, før du tilføjer nogen."),
                t("d2826908", "Opret en ny liste"),
                t("he062e8a", "Vælg en liste"),
                t("c2fb1e94", "Der kan kun føjes 5.000 konti til en liste."),
                t("f30edc68", "Gør privat"),
                t("h51a2cf6", "Noget gik galt. Prøv at slette banneret igen om et øjeblik."),
                t("bb10280e", "Noget gik galt. Prøv at gemme listen igen om et øjeblik."),
                t("h8885a22", "Navne på lister må ikke være længere end 25 tegn"),
                t("f8132984", "Når du gør en liste privat, kan kun du se den."),
                t("h421e74c", "Foreslåede lister"),
                t("aa62dea8", "Vi er på udkig"),
                t("e5e4d3aa", "Kom tilbage senere for at se foreslåede lister."),
                t("c4d7650c", "Administrer medlemmer"),
                t("h7f2418c", "Indlæser information om liste"),
                t("b18e5cd2", "Noget gik galt. Prøv at slette din liste igen om et øjeblik."),
                t("cdd73e9c", "Slet listen"),
                t("def8ff62", "Vil du slette listen?"),
                t("j8b9cde8", "Denne handling kan ikke fortrydes, og din liste går tabt."),
                t("e9f3dec4", "Listesøgning"),
                t("b9192d55", function (e) {
                    return e.query + " – Listesøgning";
                }),
                t("d6a23192", "Opret en ny liste"),
                t("ie256518", "Tidslinje for Listesøgning"),
                t("j57a2568", "Listesøgning"),
                t("hc76e8cd", function (e) {
                    return 'Ingen Lister matchede "' + e.query + '"';
                }),
                t("d872881a", "Hvorfor ikke oprette en?"),
                t("j177067a", "Søg i lister"),
                t("g13ea02c", "Prøv at søge efter Lister"),
                t("d1461f1e", "Denne Liste er ensom"),
                t("bcbd3416", "Personer, der følger denne Liste, bliver vist her."),
                t("b197a56c", "Listefølgere"),
                t("f0ab07f5", function (e) {
                    return "Medlemmer (" + e.memberCount + ")";
                }),
                t("h9ce3406", "Liste over medlemmer"),
                t("dfeaeb26", "Føj til din liste"),
                t("a332103e", "Personer, der føjes til denne Liste, bliver vist her."),
                t("e2f7dc62", "Find foreslåede medlemmer"),
                t("gc23cc00", "Prøv at søge efter konti for at få vist forslag, som du kan føje til denne Liste."),
                t("e3deb126", "Liste over forslag"),
                t("eb7b54be", "Indlæser lister"),
                t("a9ca06d2", "Information"),
                t("a367dc9a", "De seneste posts vises, så snart de postes"),
                t("dd438748", "Top-posts vises først"),
                t("fe7e217c", "Se de seneste posts"),
                t("ce78b698", "Du ser top-posts først. De seneste posts dukker op, så snart de postes."),
                t("i5a1628a", "Se top-posts"),
                t("f333a93e", "Du ser de seneste posts først. Top-posts viser dig de bedste posts."),
                t("c7294984", "Indberet listen"),
                t("g6340998", "Dette føjer dig ikke automatisk til deres lister igen."),
                t("i6da4f7a", "Del liste"),
                t("a062ff80", "Kopiér link til liste"),
                t("dcdc75a3", function (e) {
                    return "@" + e.screenName + "/" + e.listName;
                }),
                t("d2004da3", function (e) {
                    return "Du følger ikke @" + e.screenName;
                }),
                t("a64512a4", "Tidslinje for Lister"),
                t("i0bcc456", "Når du gør, vil du kunne se vedkommendes lister."),
                t("d8315ca0", "Lister, du findes på"),
                t("e74be9ac", "Lister, vedkommende findes på"),
                t("c80cb4e4", "Ny liste"),
                t("bbcaa24b", function (e) {
                    return "Lister oprettet af @" + e.screenName;
                }),
                t("b081cdf7", function (e) {
                    return "@" + e.screenName + " har ikke oprettet nogen lister";
                }),
                t("f5978664", "Når vedkommende gør det, vises de her."),
                t("h243711c", "Du har endnu ikke oprettet nogen lister"),
                t("b69e2f71", function (e) {
                    return "@" + e.screenName + " er ikke føjet til nogen lister";
                }),
                t("e05568cc", "Når de er føjet til en liste, vises det her."),
                t("b86a098a", "Du er endnu ikke føjet til nogen lister"),
                t("h06e09a2", "Når nogen føjer dig til en liste, vises det her."),
                t("gbaa5489", function (e) {
                    return "Listemedlemskaber for @" + e.screenName;
                }),
                t("g6b54ff6", "Du er opdateret"),
                t("ec5fd35a", "Når nogen anmoder om at følge dig, bliver det vist her, så du kan acceptere eller afvise."),
                t("ec2d8342", "Afslå"),
                t("j85d8d90", "Der er ingen udestående følgeanmodning for den pågældende bruger."),
                t("c3d23f10", "Det ser ud til, at der var en lille forstyrrelse. Bare rolig, det er ikke din skyld. Klik nedenfor for at prøve igen."),
                t("d2613123", function (e) {
                    return "Abonner – " + e.price + "/md.";
                }),
                t("c4640fc0", "Del abonnementsprofil"),
                t("a72064a8", "Kopiér link til abonnementsprofil"),
                t("e6c72234", "vilkårene for deling af e-mail"),
                t("b17f0c4b", function (e) {
                    return "Du abonner nu på @" + e.screenName;
                }),
                t("a5634d9a", "Der opstod et problem i behandlingen af abonnementet. Afvist denne meddelelse og prøv igen."),
                t("fe9d3afa", "Indlæser følgere"),
                t("ab7fc3ef", function (e) {
                    return "Personer, der super-følger " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("j0d17377", function (e) {
                    return "Personer, du kender, der følger " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("fa9e827f", function (e) {
                    return "Personer, der følger " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("ha979be5", function (e) {
                    return "Personer, der følges af " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("d28be573", function (e) {
                    return "Personer abonnerede på " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("g9da3853", function (e) {
                    return "Personer abonneret af " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("cfd952a1", function (e) {
                    return "Verificerede konti følger " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("fecc696e", "Verificerede følgere"),
                t("g0a2fbbe", "Du har endnu ingen abonnenter"),
                t("g65f4bac", "Du har ingen følgere endnu"),
                t("c36cfddc", "Leder du efter følgere?"),
                t("fd275c1a", "Du har ingen verificerede følgere endnu"),
                t("e08bd098", "Her kan du se en liste over alle, der abonnerer på dig."),
                t("j029a4dc", "Når nogen følger dig, vises de her."),
                t("b2b2c6ce", "Når nogen følger denne konto, bliver de vist her. At poste og interagere med andre hjælper med at booste antallet af følgere."),
                t("cb1a15c8", "At følge konti er en nem måde, hvorpå du kan udvælge indhold til din tidslinje og følge med i, hvad der sker med de emner og personer, der interesserer dig."),
                t("i967b954", "Du kan finde en liste over alle dine abonnementer her."),
                t("a44e403e", "Når en verificeret konto følger dig, bliver den vist her."),
                t("d74ee2e3", function (e) {
                    return "@" + e.screenName + " har endnu ikke nogen følgere, du kender";
                }),
                t("ae5749c7", function (e) {
                    return "@" + e.screenName + " følger ikke nogen";
                }),
                t("b5099e33", function (e) {
                    return "@" + e.screenName + " har ingen verificerede følgere.";
                }),
                t("ec251f36", "Når nogen, du kender, følger vedkommende, vises de her."),
                t("f8af4f48", "Når vedkommende følger konti, bliver de vist her."),
                t("fd0aad94", "Når en verificeret person følger denne konto, bliver vedkommende vist her."),
                t("b84f6df1", function (e) {
                    return "Giv Premium i gave med " + e.percentage + " % rabat i en begrænset periode";
                }),
                t("cfcac293", function (e) {
                    return "Giv gave og betal " + e.price;
                }),
                t("d7a73450", "Niveau"),
                t("hbd2c24e", "Denne konto er ikke kvalificeret til gaver på nuværende tidspunkt."),
                t("f3fddc98", "købsvilkår"),
                t("cff9c889", "Læs mere"),
                t("c65dda96", "Din gave er blevet sendt."),
                t("f6e2a407", function (e) {
                    return "Tillad alle at se dit abonnent-badge, når du svarer på @" + e.screenName + "s posts";
                }),
                t("j8dedddd", function (e) {
                    return "Når du slår dette fra, kan @" + e.screenName + " og vedkommendes abonnenter stadig se dit badge, når du svarer på @" + e.screenName + "s posts, der kun er for abonnenter. @" + e.screenName + " kan altid se dit badge.";
                }),
                t("c8a513f6", "Annuller abonnement"),
                t("ea000ec8", "Har du allerede annulleret dit abonnement?"),
                t("d7b8387e", "Hvis du allerede har annulleret, er der ikke mere, du skal gøre. Dit abonnement udløber automatisk ved afslutningen af faktureringsperioden."),
                t("f4166d9a", "Vil du annullere dit abonnement?"),
                t("b74ff5fc", "Hvis du annullerer, udløber dit abonnement automatisk ved afslutningen af faktureringsperioden."),
                t("ee9efbc8", "Fortsæt til annullering"),
                t("c5d9c77a", "Det ser ud til, at der var en lille forstyrrelse. Bare rolig, det er ikke din skyld. Luk dette vindue, og prøv igen."),
                t("jda53c24", "Du kan annullere dit abonnement via Apple App Store."),
                t("g0a7a53e", "Du kan annullere dit abonnement via Google Play Store."),
                t("i5f14be7", function (e) {
                    return "Velkommen tilbage " + e.displayName;
                }),
                t("a76d58ba", "Annoncestatistik"),
                t("g512ddcc", "Organisk statistik"),
                t("eccd0e1a", "Statistik for organisation"),
                t("deea1708", "Vil du se statistik på tværs af alle dine X-konti?"),
                t("eb603ffc", "Opgrader for at tilknytte dit netværk og se samlet statistik."),
                t("gf67aae4", "Opgrader til fuld adgang"),
                t("h75e3618", "Inkluder organisation"),
                t("h24a8862", "Om dette afkrydsningsfelt"),
                t("c29e3a88", "Vælg tilknytninger"),
                t("j8318d57", function (e) {
                    return e.number + " tilknytning" + i(e.number, "", "er");
                }),
                t("bf809ec0", "Vælg tilknytninger"),
                t("b719e224", "Ingen resultater"),
                t("c9938100", "Søgeresultater"),
                t("d1a35ec6", "Tilføj konti"),
                t("b437adda", "Opgrader til betalt"),
                t("f1f6c88b", function (e) {
                    return "Konti (" + e.count + ")";
                }),
                t("b02156b8", "Invitationer"),
                t("gd67d29b", function (e) {
                    return "Invitationer (" + e.count + ")";
                }),
                t("daf646e6", "Bemærk: Du skal mærke konti korrekt."),
                t("i3895c32", "Din konto er under gennemgang, fordi du har ændret dit X-@brugernavn"),
                t("i5f8b628", "Du kan ikke ændre dine tilknytninger, før din konto er gennemgået."),
                t("e9e663ac", "Betalingsfristen er overskredet."),
                t("c3ddd22c", "vilkår"),
                t("c9729d8a", "vilkår"),
                t("cdcd1d2c", "Føj tilknytninger til din organisation"),
                t("d30ea6f3", function (e) {
                    return "Er du sikker på, at du vil fjerne @" + e.name + "?";
                }),
                t("c2dfbb86", "Ja, gør det"),
                t("ba047f76", "Fjernelse af en tilknytning fjerner straks vedkommendes flueben og tilknytningsbadge. Du vil fortsat blive faktureret indtil udgangen af måneden."),
                t("j26dee0e", "Fjern tilknytning"),
                t("e30cbdf0", "Denne tilknytning abonnerer på Verificerede organisationer og skal forblive en organisation. Den kan ikke ændres til en person."),
                t("j3115ce8", "Individuel"),
                t("d8bb1d84", "Organisation"),
                t("e970bdbd", function (e) {
                    return e.count + " invitationer tilbage";
                }),
                t("id67d953", function (e) {
                    return "Noget gik galt under hentningen af dine Stripe-betalingsoplysninger. Kontakt " + e.supportEmail + ", hvis problemet fortsætter.";
                }),
                t("f323d314", "Send igen"),
                t("ac645cde", "Du kan altid tilføje dem igen."),
                t("d12af2dd", function (e) {
                    return "Er du sikker på, at du vil fjerne denne invitation til @" + e.screenName + "?";
                }),
                t("ib60b2d5", function (e) {
                    return "Er du sikker på, at du vil sende denne invitation til @" + e.screenName + " igen?";
                }),
                t("ec6e7d9a", "Din konto er i skrivebeskyttet tilstand, indtil det afventende niveauskifte er gennemført. Gå til Stripe for at tjekke din betaling for at sikre et vellykket niveauskifte."),
                t("b33d1518", "Synkroniser stillinger fra en understøttet integration eller et brugerdefineret XML-feed"),
                t("dd2db402", "Trin 1: Indsaml de nødvendige oplysninger"),
                t("edb098c2", "Trin 2: Kontakt vores supportteam"),
                t("c4474460", "Trin 2: Send en e-mail til vores supportteam"),
                t("a08da0fa", "Hvad skal der ske nu?");
            function d(e, r) {
                for (var n = 0; n < r.length; n++) {
                    var t = r[n];
                    (t.enumerable = t.enumerable || !1),
                        (t.configurable = !0),
                        "value" in t && (t.writable = !0),
                        Object.defineProperty(
                            e,
                            ((i = t.key),
                            (d = void 0),
                            "symbol" ==
                            typeof (d = (function (e, r) {
                                if ("object" != typeof e || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var t = n.call(e, r || "default");
                                    if ("object" != typeof t) return t;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === r ? String : Number)(e);
                            })(i, "string"))
                                ? d
                                : String(d)),
                            t,
                        );
                }
                var i, d;
            }
            function a(e, r) {
                return (
                    (a = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, r) {
                              return (e.__proto__ = r), e;
                          }),
                    a(e, r)
                );
            }
            t("c127374e", "Send os en besked"),
                t("b2cb2a0c", "Brugernavn til din Verificerede organisationer-konto"),
                t("b8e64002", "Navn på dit ansøgersporingssystem"),
                t("acb99db6", "URL-adresse til jobsøgningswebsted, hvor dine stillinger er anført"),
                t("a64a5b7a", "Send de nødvendige oplysninger til vores supportteam for at starte integrationsprocessen."),
                t("e3dffb4e", "Kopiér vores support-e-mailadresse nedenfor, og send de nødvendige oplysninger til vores supportteam for at starte integrationsprocessen."),
                t("b4fef99e", "Når vores supportteam har modtaget din anmodning, gennemgår vi dine oplysninger og hjælper dig med at konfigurere din integration."),
                t("h37f2d96", "Bemærk, at ikke alle ansøgersporingssystemer understøttes i øjeblikket."),
                t("ce102a20", "Omdirigering til Stripe"),
                t("ddfd6718", "Betalingen mislykkedes"),
                t("i90ea7d2", "Du bedes hurtigst muligt opdatere dine faktureringsoplysninger for at beholde dine fordele."),
                t("a62359e6", "Indstillinger for verificeret organisation"),
                t("ge221b7c", "Opgrader dit abonnement på Verificerede organisationer for at få adgang til tilknytninger og flere annoncekreditter."),
                t("i4dccc18", "Fakturering"),
                t("ec3cd6e4", "Administrer din betalingsmetode, opdater faktureringsoplysninger, og gennemgå dine fakturaer."),
                t("dac61c3c", "Kontoindstillinger"),
                t("b6b5fd66", "Administrer din X-konto, herunder ændring af dit brugernavn eller din adgangskode."),
                t("hb9c4a1c", "Spørgsmål, fejlrapporter og feedback"),
                t("c674f5b4", "Opsætning af fakturabetalinger"),
                t("i8237e66", "Skift fra betaling med kreditkort til fakturering via bankoverførsel."),
                t("hebd348a", "Konfigurer, hvordan annoncer bruges til at promovere stillinger fra ansættelsesportalen."),
                t("ib5e6f90", "Promovering af stilling"),
                t("id720215", "ansættelsesportalen"),
                t("dd59f146", "Annoncekonto til promovering af stillinger"),
                t("e7e36818", "Annoncekonti er kvalificeret til promovering af stillinger, når de er fuldstændigt oprettet med en finansieringskilde."),
                t("c28566e0", "Annoncekonto"),
                t("c80160d3", "Annoncering"),
                t("ff0edac0", "Er du sikker på, at du vil annullere dit abonnement?"),
                t("h2ac0348", "Nej, gå tilbage"),
                t("dbf9667e", "Jeg er sikker"),
                t("j7592572", "U-vending"),
                t("ee778942", "Trafiklys"),
                t("fdd57981", function (e) {
                    return "Vi vil gerne tilbyde dig en gratis engangsannoncekredit på " + e.totalAmount + " USD.";
                }),
                t("i032a231", function (e) {
                    return "Jeg bliver og gør brug af annoncekreditten på " + e.totalAmount;
                }),
                t("hd7d278c", "Nej tak"),
                t("jf8a0dea", "Super! Din nye gratis annoncekredit vil blive vist på din konto i den næste faktureringsperiode."),
                t("ebbb3154", "Luk og vend tilbage til X"),
                t("j1f68dda", "Sidste trin: Er du sikker på, at du vil opsige?"),
                t("c9c3464c", "Annullering af abonnement i gang"),
                t("dd3a293c", "Dit abonnement på Verificerede organisationer er ophørt."),
                t("faa0f956", "Noget gik galt, da du annullerede dit abonnement."),
                t("b28289ea", "Tak"),
                t("b36f74ae", "Du har ikke længere adgang til portalen, medmindre du tilmelder dig og aktiverer den igen."),
                t("b2297a4a", "Har du brug for at få løst et problem? Du kan aftale et opkald med os."),
                t("h3bdbc54", "Ja, lad os aftale et opkald"),
                t("i135d64e", "Fortsæt med at opsige"),
                t("g275882d", function (e) {
                    return "Vigtigt: Du har " + e.creditAmount + " i ubrugt gratis annoncekredit";
                }),
                t("ib085ed6", "Jeg bliver og gør brug af annoncekreditten"),
                t("b5447710", "Brugeren blev ikke fundet"),
                t("h94755b8", "Bruger er allerede valgt til invitation"),
                t("bfb5effe", "Bruger er allerede tilknyttet"),
                t("c4b9664e", "Tilknyttet"),
                t("g0eadcf6", "Tilknyttet en anden organisation"),
                t("a8c81f88", "Organisationskonto"),
                t("e5abe772", "Bruger har allerede en afventende invitation"),
                t("e49b97e2", "Søg efter konti"),
                t("f002f1d6", "Send invitation"),
                t("g2a8bae4", "Tilføj X-konti"),
                t("af7293cc", "Inviter X-konti til at blive medlem af din organisation. Hvis de accepterer, får de et flueben, og din tilknytning vil blive vist på deres profiler."),
                t("ec0f203e", "Når den tilknyttede har accepteret invitationen, skal du sørge for at opdatere vedkommendes flueben til den korrekte farve."),
                t("cec08784", "Du har nået grænsen for tilknytninger på denne faktura."),
                t("ab70828f", function (e) {
                    return "Tilføj @" + e.screenName;
                }),
                t("d49b389f", "her"),
                t("b9e4bf55", "Læs mere"),
                t("hc4703a9", "Læs mere"),
                t("fa0ffaeb", "Læs mere"),
                t("jf351704", "Hvis du vil fortsætte, skal du opdatere grænsen for tilknytninger på denne faktura."),
                t("ia5a6a40", "For at komme i gang skal du tilføje dine betalingsoplysninger."),
                t("d40d1cc0", "Hvis du vil fortsætte, skal du betale via Stripe."),
                t("c4a5f614", "Tilføj betalingsoplysninger"),
                t("fa2a280a", "Opdater faktura"),
                t("i7b2f08e", "Velkommen til Verificerede organisationer"),
                t("g4e18b84", "Du har nået grænsen for tilknytninger"),
                t("cbe23239", function (e) {
                    return "Ved køb af mere end " + e.affiliatesCount + " tilknytninger.";
                }),
                t("fc1f43d0", "Generer faktura"),
                t("g8881c78", "Fortsæt til betaling"),
                t("g59f8506", "Bemærk: Konti, der ikke kan verificeres som en virksomhed eller en del af en offentlig myndighed, vil ikke blive refunderet."),
                t("a310e476", "Direkte"),
                t("fde6cf98", "For omgående adgang til Verificerede organisationer."),
                t("fdfbfcb0", "Fakturering"),
                t("f45d02e8", "Noget gik galt, da du oprettede dit abonnement. Prøv at indsende igen fra aktiveringsmailen."),
                t("a1c566c0", "Noget gik galt under oprettelsen af dit abonnement. Prøv at indsende dine oplysninger igen."),
                t("f5a1c6ac", "Abonnementer er ikke tilgængelige i din region"),
                t("ef7ae9cd", "Læs mere"),
                t("d3c6b8c9", "Læs mere"),
                t("fafe5b9f", function (e) {
                    return "Abonner · " + e.price + " pr. " + e.interval;
                }),
                t("f2ae1d63", "vilkår for køb"),
                t("ie8759c5", "vilkår for køb"),
                t("d842dd7b", function (e) {
                    return "Voks hurtigere på X, og få " + e.credit + " gratis annoncekredit";
                }),
                t("fcfb696e", "⁺Tidsbegrænset tilbud om annoncekredit."),
                t("f5b98d62", function (e) {
                    return "hver " + e.interval;
                }),
                t("ed7b9984", function (e) {
                    return "hver " + e.interval;
                }),
                t("da11a2d7", function (e) {
                    return "Op til " + e.creditAmount + " i annoncekreditter";
                }),
                t("a6c45ede", "Inkluderer:"),
                t("e9aa43dc", "Organiske stillingsopslag"),
                t("i1266238", "Funktioner til promovering af stillinger"),
                t("e8a4ea7a", "Prioriteret support"),
                t("j99e2f4d", function (e) {
                    return e.price + "/" + e.interval;
                }),
                t("bb21a170", "Skift abonnement"),
                t("b0dcc4dc", "Din konto afventer allerede et niveauskift."),
                t("f3aef4ca", "Intet aktivt abonnement fundet"),
                t("h802e65e", "Opdateringen af abonnementet mislykkedes. Prøv igen. Dit nuværende abonnement blev ikke påvirket."),
                t("c5269eb0", "Dette er dit aktive abonnement."),
                t("c578c4ca", "Nuværende abonnement"),
                t("i5d19147", "Nyt abonnement"),
                t("b025ff5f", "her"),
                t("d6b932d4", "Ved gratis prøveperiode"),
                t("b0efe690", "Fortsæt med Basis"),
                t("g5f9cdaa", "Bekræft ændringerne af dit abonnement"),
                t("j21911de", "Vil du fortsætte med Basis, eller vil du beholde dine fordele med fuld adgang?"),
                t("b59dec9e", "Du nedgraderer til Basis-abonnementet fra en gratis prøveperiode med fuld adgang."),
                t("e5ff0e1e", "Med denne ændring:"),
                t("ca004c80", "Prøvefunktioner med fuld adgang, herunder Tilknytninger, vil ikke længere være tilgængelige."),
                t("fae108ee", "Tilknytninger, der tilføjes under din prøveperiode, mister deres fordele fra Premium+ og support."),
                t("d47c0c7c", "Hvem er du?"),
                t("hbd31720", "Vælg det rigtige abonnement til dig:"),
                t("c75a9386", "Læs mere om"),
                t("b916b258", "og"),
                t("ic6012ea", "Jeg er en person"),
                t("d8e618ce", "Til enkeltpersoner og skabere"),
                t("dcbccede", "Jeg er en organisation"),
                t("f44ce884", "Til virksomheder, offentlige myndigheder og nonprofitorganisationer"),
                t("dece6c60", "Organisationens navn"),
                t("c4c1b600", "Organisationens e-mailadresse"),
                t("b1e0aec0", "Organisationens @brugernavn"),
                t("c42d5f4a", "Antal tilknytninger"),
                t("fca5f04b", function (e) {
                    return "Du kan købe op til " + e.affiliatesCount + " tilknytninger, som du vil blive faktureret for.";
                }),
                t("dca6b3ac", "Konfigurer en faktura"),
                t("c97ad52a", "Opdater faktura"),
                t("b36f0fd4", "Vælg, hvor mange tilknytninger du skal bruge til din organisation."),
                t("b4871f4f", "her"),
                t("b633d19e", "Tak"),
                t("f713d3e2", "Din ansøgning er modtaget og er ved at blive gennemgået."),
                t("e11d5e1a", "Du vil kunne udnytte alle fordelene ved Premium, men din organisation vil ikke modtage et guld- eller gråt flueben, og du vil ikke kunne tilføje tilknyttede konti, før din konto er godkendt."),
                t("d83617cc", "Din konto vil blive gennemgået."),
                t("afb30564", "Vi beder muligvis om yderligere oplysninger for at godkende din konto"),
                t("gdd3fa68", "Når din konto er gennemgået og godkendt, vil den straks blive verificeret, og du kan komme i gang og tilføje tilknytninger."),
                t("e6389996", "En konto, der ikke er godkendt, vil ikke blive refunderet."),
                t("a889b460", "Betaling gennemført"),
                t("d1c886dc", "Næste skridt: Upload og verificer dokumenter"),
                t("b13e9454", "Din ansøgning er endnu ikke komplet. Send venligst de nødvendige dokumenter. Det tager normalt ca. 10 minutter."),
                t("e6b0965a", "Din bestilling"),
                t("a1b58798", "Gennemgå din bestilling nedenfor"),
                t("b651c7d7", function (e) {
                    return "Tilknytning" + i(e.count, "", "er") + " x " + e.count;
                }),
                t("ec5e9c54", "Basisabonnement"),
                t("e16093fc", "I alt pr. måned"),
                t("ce4acef6", "Total pr. år"),
                t("f4db2df0", "Dit abonnement bliver først aktivt, når fakturaen er betalt."),
                t("b9e0d614", "Din grænse for tilknytninger er blevet opdateret på din faktura."),
                t("a45c9596", "Din faktura er blevet oprettet."),
                t("e4e5532a", "Rabat anvendt"),
                t("b557f073", function (e) {
                    return "Noget gik galt under hentningen af dine Stripe-faktureringsoplysninger. Kontakt " + e.supportEmail + ", hvis problemet fortsætter.";
                }),
                t("e8c366ce", "X's vilkår for køb"),
                t("ee86d380", "Oplysninger om organisationen"),
                t("b9c9ccca", "Dit fulde navn"),
                t("c7e818de", "Din arbejds-e-mailadresse"),
                t("i60d7542", "Organisationens websted"),
                t("b92f9dee", "Organisationstype"),
                t("f14d7866", function (e) {
                    return "" + e.screenName;
                }),
                t("e63bf39d", "Læs mere"),
                t("f09630ff", "her"),
                t("eb043b72", "Ansøgning afventer"),
                t("a9ac4602", "Din ansøgning til Verificerede organisationer er stadig ved at blive gennemgået. Prøv igen senere."),
                t("c5af3e12", "Tidsbegrænset tilbud. Kreditter kan ikke akkumuleres."),
                t("e18d6fd6", "Din annoncekredit"),
                t("if435d1a", "Du har brugt alle dine tilgængelige kreditter i denne måned. Din næste kredit vil blive udstedt ved din næste abonnementsbetaling"),
                t("af6704d7", "her"),
                t("b293c6b4", "Verified Premium-support"),
                t("e9e9ca58", "Tilgængelig"),
                t("cf2ba3a2", "Annoncekonto-id"),
                t("gd7d051c", "Aktivér"),
                t("f391c800", "Annoncekonto-id er påkrævet"),
                t("ja116d2c", "Annoncekonto-id'et er ugyldigt"),
                t("hf037537", function (e) {
                    return "Denne kredit bliver tilgængelig " + e.startDate;
                }),
                t("d0b58c01", function (e) {
                    return "" + e.days;
                }),
                t("e49cb8a7", function (e) {
                    return "" + e.remainingAmount;
                }),
                t("gd03b494", "Sådan bruger du din Annoncekredit"),
                t("h1f36d3e", "For at bruge din annoncekredit til bekræftede organisationer skal du udføre følgende trin:"),
                t("a6519ffc", "Hvis du har annonceret før"),
                t("ibc9654a", "Hvis du er en ny annoncør"),
                t("d3710c76", "Hvis du ønsker at bruge din kredit på en anden tilknyttet konto"),
                t("d60a8f14", "Kør Ads på X"),
                t("fe66e4a8", "X Ads Manager"),
                t("b3ca0108", "Spred dit budskab ved hjælp af X Ads."),
                t("g3754d57", "her"),
                t("i615ad63", "her"),
                t("a3ba48b9", "her"),
                t("ca3c633a", "Annoncekreditter"),
                t("ha843c96", "annoncer"),
                t("dd0f3b08", "annoncer"),
                t("c9fad534", "Ingen kredit"),
                t("a211b11e", "Der er ingen tilgængelige kreditter at aktivere"),
                t("f2011db1", function (e) {
                    return e.usedAmount + " af " + e.couponAmount + " brugt";
                }),
                t("ae37e25c", "ukendt beløb"),
                t("i1407e15", function (e) {
                    return "Brugt på annoncekontoen " + e.accountId;
                }),
                t("id4359bf", function (e) {
                    return "Udløbet " + e.when + " på annoncekontoen " + e.accountId;
                }),
                t("f89af915", function (e) {
                    return "Udløbet " + e.when;
                }),
                t("c1b5e1ed", function (e) {
                    return "Udløber " + e.when + " på annoncekontoen " + e.accountId;
                }),
                t("e8d8a2a9", function (e) {
                    return "Udløber " + e.when;
                }),
                t("i3884c1f", function (e) {
                    return "Tilgængelig " + e.when;
                }),
                t("b070acf4", "Snart tilgængelig"),
                t("ace946c4", "Aktivér kupon"),
                t("b0b02e37", function (e) {
                    return "Denne kupon blev anvendt på annoncekonto-id'et: " + e.accountId;
                }),
                t("f520ee22", "Annoncekonto-id"),
                t("df96ca56", "Anden konto"),
                t("b5566402", "Et id består kun af bogstaver og tal."),
                t("eb160d07", "kontovælgeren i annonceadministratoren"),
                t("e016ad32", "Skrivebeskyttet tilstand"),
                t("d7ab194e", "Nogle verificerede kontofunktioner kan være i skrivebeskyttet tilstand, mens din abonnementsændring behandles."),
                t("g25d851e", "Annonceringskonti"),
                t("de7fef84", "Kontakt kundesupport for at få hjælp til denne konto"),
                t("ff1321b6", "Opsætningen er fuldført, og kontoen er aktiv"),
                t("c1205320", "Aktivér din annoncekonto ved at tilføje et kreditkort"),
                t("c0343c0a", "Sidste betaling mislykkedes, kontrollér betalingsmetoden på kontoen"),
                t("j56e34a4", "Kontakt kundesupport for at få hjælp til kontoadgang"),
                t("gef920f2", "Kontoen skal sættes op, før den kan aktiveres"),
                t("b68dd4d8", "Du har ikke adgang til denne konto, bed en teamadministrator om hjælp"),
                t("d637962c", "Du har ingen annoncekonti"),
                t("dd087ae0", "Opret en på ads.x.com"),
                t("i3d7dd02", "Kvalificeret annoncekonto er klar til promovering af stilling"),
                t("cc8f8516", "Opret en annoncekonto for at promovere stillinger"),
                t("b4f117b8", "Du har ikke adgang til annoncekontoen til promovering af stillinger"),
                t("b7347cf4", "Opret en annoncekonto for at promovere stillinger"),
                t("h7d03a2a", "Tilføj en stilling via dit ansættelseskontrolpanel"),
                t("cd5aeec6", "Opret annoncekonto"),
                t("ged51d2e", "Opret en annoncekonto"),
                t("gcfa25e6", "Der er ingen annoncekonti, der kan bruges til din organisation. Gå til ads.x.com for at oprette en."),
                t("g76fb922", "Ny konto"),
                t("db0a69e7", function (e) {
                    return "Din annoncekonto (id: " + e.adAccountId + ") er ny. Fuldfør den indledende opsætning i Ads Manager for at aktivere den.";
                }),
                t("c7bad5cc", "Opret konto"),
                t("g8c563c0", "Du skal have adgang"),
                t("f6f29b17", function (e) {
                    return "Du har ikke adgang til annoncekontoen (id: " + e.adAccountId + "). Bed din teamadministrator om at tilføje dig til kontoen i Ads Manager.";
                }),
                t("a15bb840", "Brug for betalingsmetode"),
                t("j4e981d9", function (e) {
                    return "Din annoncekonto (id: " + e.adAccountId + ") er delvist opsat. Hvis du vil aktivere den, skal du tilføje en betalingsmetode til kontoen. Eventuelle kreditter, du anvender på denne konto, vil blive brugt, før du bliver opkrævet.";
                }),
                t("af142910", "Betaling mislykket"),
                t("a9635acf", function (e) {
                    return "Din annoncekonto (id: " + e.adAccountId + ") har været aktiv, men den sidste betaling mislykkedes. Hvis du vil aktivere den igen, skal du ændre betalingsmetoden på denne konto.";
                }),
                t("d1cca474", "Skift betalingsmetode"),
                t("fe8b969a", "Kundesupport kan hjælpe"),
                t("i8aa0b91", function (e) {
                    return "Denne annoncekonto (id: " + e.adAccountId + ") har brug for hjælp fra kundesupport til at blive aktiveret. Husk at inkludere annoncekontoens id i din besked. Din anmodning vil blive prioriteret.";
                }),
                t("d82c2074", "Få support"),
                t("ad37d536", "Vilkår for overførsel af brugernavne"),
                t("e760074a", "Anskaf et hvilende brugernavn, eller byt det, som du ejer"),
                t("j003ef92", "Køb inaktive brugernavne fra X til dig eller dine tilknytninger, eller byt de brugernavne, som du allerede ejer."),
                t("d57a8e42", "Denne tjeneste er eksklusiv for verificerede organisationer og indebærer en ekstra omkostning pr. brugernavn, der starter fra 10.000 USD."),
                t("h9367bd6", "Send en forespørgsel vedrørende et brugernavn"),
                t("a6a62e7e", "Start processen med at besvare et par spørgsmål ved hjælp af vores automatiserede supportbot."),
                t("e5912290", "Forespørgsel om brugernavn starter"),
                t("c2e24f66", "Hold øje med meddelelsen fra support i nederste hjørne af denne skærm."),
                t("c94f514e", "Forespørgsel om brugernavn er begyndt"),
                t("cf60d152", "Udfyld det korte spørgeskema i chatvinduet for at indsende din forespørgsel om brugernavn."),
                t("f06b124e", "Ofte stillede spørgsmål"),
                t("h677fdcc", "Hvordan er brugernavnene prissat?"),
                t("a55b39aa", "Primært baseret på tegnlængde og fælles ord. Priserne starter ved $10.000 og går op til over $500.000 USD."),
                t("d46bcb3a", "Hvordan ved jeg, om et brugernavn er til salg?"),
                t("c6bcf72c", "Send os en anmodning ved hjælp af knappen Kom i gang, så giver vi dig besked, hvis det er tilgængelig."),
                t("d478604c", "Kan jeg købe et brugernavn på vegne af en anden virksomhed?"),
                t("c09f8cd2", "Nej. Virksomheder kan kun købe brugernavne på vegne af deres tilknytninger, som er reelt forbundet med deres virksomhed."),
                t("d814f020", "Hvad er salgsprocessen? Hvor lang tid tager den?"),
                t("f600b6f0", "Anmod om køb eller bytte af håndtag ved hjælp af knappen Kom i gang. Vi svarer med tilgængelighed og priser inden for 3 arbejdsdage. Efter betaling overfører vi håndtaget til din valgte konto inden for 1-2 dage. Alternativt kan vi flytte det gamle brugernavn til en anden konto, du ejer."),
                t("i8debc4a", "Giver i rabat ved køb af flere brugernavne?"),
                t("c5199f3c", "Ja, afhængigt af antallet af brugernavne, du køber, og den samlede størrelse af tilbuddet."),
                t("c20f923e", "Jeg har et varemærke - påvirker det tingene?"),
                t("b2fd4c15", "Varemærkepolitik"),
                t("a690746e", "Få prioriteret support"),
                t("he2dc9b0", "Kontakt os ved at sende brugernavnet på din organisation samt nærmere oplysninger om din anmodning."),
                t("e5e6479e", "Send os en e-mail med navnet på din organisation og nærmere oplysninger om din forespørgsel for at få den hurtigste support."),
                t("ica8392a", "Når vi har modtaget din anmodning, gennemgår og prioriterer vi den i den rækkefølge, vi har modtaget den."),
                t("ed37e36e", "Vigtigt: Hvis brugernavnet på din organisation mangler, eller du bruger en personlig e-mail, kan det medføre forsinkelser i behandlingen af din anmodning."),
                t("eb0d4fe2", "Opret en kolonne"),
                t("e93d2f8a", "Tilpas din oplevelse ved at tilføje forskellige kolonner såsom:"),
                t("e8203d1e", "Søgninger"),
                t("d82fd532", "Direkte beskeder"),
                t("c87babee", "Og meget mere ..."),
                t("f1990aa4", "Organiser dine kolonner med Dæk"),
                t("ib9c9a54", "Forestil dig, at du har flere skriveborde på X Pro. Skru ned for støjen, og fokuser kun på de emner og værktøjer, du har brug for, når du har brug for dem."),
                t("fb5ac13e", "Flyt en kolonne"),
                t("bd545b7e", "Klik på disse prikker for at trække og slippe en kolonne til den ønskede placering på dit Dæk."),
                t("a98513b6", "Tilpas kolonner"),
                t("c8759e44", "Rul over toppen af en kolonne for at få adgang til funktioner såsom:"),
                t("a93e96c8", "Sortér posts efter top eller seneste"),
                t("df300378", "Skift kolonnestørrelse"),
                t("aa263910", "Brug avancerede søgeværktøjer"),
                t("ab3915aa", "Tips og indstillinger"),
                t("ia03837a", "Gå hertil for at:"),
                t("f0bd595c", "Administrer Dæk"),
                t("a74e9464", "Skift visningsindstillinger"),
                t("h254eb92", "Opdag tastaturgenveje"),
                t("j6e669a0", "Tag rundvisningen igen"),
                t("c15802be", "Sender posts ..."),
                t("e5506950", "Dæk"),
                t("b1bd9a8a", "Nyt Dæk"),
                t("cf1a138f", function (e) {
                    return "Ændret til Dæk – " + e.title;
                }),
                t("g9c2da24", "Åbner dialogboks til oprettelse af et nyt Dæk"),
                t("hcef6b72", "Åbner dialogboks til administration af dine Dæk"),
                t("a77dbc7a", "Rediger Dæk"),
                t("a154a293", function (e) {
                    return "Valgt Dæk " + e.deckName;
                }),
                t("a77bbe9d", function (e) {
                    return "Ikke valgt Dæk " + e.deckName;
                }),
                t("ha2aae72", "Åbner dialogboks til administration af det valgte Dæk"),
                t("hf59ffc8", "Navigationslinje"),
                t("dd6142d7", "Pro"),
                t("d69fc67a", "Tilføj en ny kolonne"),
                t("ad61a830", "Skriv post"),
                t("c44f5114", "Beskedindstillinger"),
                t("c71066fe", "Tag en rundvisning"),
                t("b452e6c2", "Hvordan har du det?"),
                t("j7737bc2", "Tak, fordi du brugte X Pro. Vi vil gerne høre, hvad du synes om det indtil videre."),
                t("e8038d64", "Din mening er vigtig for os. Den kan hjælpe os med at forbedre oplevelsen."),
                t("fce3c5ce", "Giv feedback"),
                t("ha39df38", "Personligt"),
                t("ja7b7d1a", "Vi har problemer med at oprette forbindelse i øjeblikket. De ændringer, du foretager, bliver muligvis ikke gemt."),
                t("ad5df1d7", function (e) {
                    return "Ændret til kolonne – " + e.title;
                }),
                t("ba7bd92e", "Kolonneindstillinger"),
                t("cc4ff736", "Deling af kolonne"),
                t("g684a93a", "Alle ændringer, du foretager i denne kolonne, vil være synlige for alle, der får den vist."),
                t("a6bbdc1c", "Kun visning"),
                t("f6e88162", "Labs"),
                t("e6df688c", "Valgmuligheder"),
                t("e3f2b93a", "Vis eller skjul oplysninger om denne kolonne."),
                t("db257758", "Størrelse for forhåndsvisning af medier"),
                t("if2fbab8", "Størrelse for forhåndsvisning af medier i svar"),
                t("he517d52", "Omdøb kolonne"),
                t("f6eb2cfe", "Kolonnenavn"),
                t("d6d39c84", "Kolonner skal have et navn."),
                t("e5c06aee", "Kolonnebredde"),
                t("af6a4368", "Omdøb denne samtale, og se hvem der deltager."),
                t("cdeac5ee", "Indstillinger for direkte beskeder"),
                t("fda7ee26", "Administrer, hvem der kan sende dig beskeder."),
                t("c4ec8620", "Medtag"),
                t("d5f29cd4", "Udeluk"),
                t("d01a62f8", "Tid og lokalitet"),
                t("d614afc8", "Likes, svar og reposts"),
                t("fb2bbc7a", "Post-indhold"),
                t("a589add2", "Et af disse ord (ELLER)"),
                t("d2f8dc8a", "Posts fra nogen"),
                t("e37201ec", "Svarer nogen"),
                t("e035e056", "Omtaler nogen"),
                t("ef2d4092", "Udeluk ord"),
                t("d59f395e", "Dit visningssprog"),
                t("g67cd3f2", "Vælg sprog"),
                t("c85f9b9c", "Skift sprog"),
                t("b5148188", "Mere end"),
                t("hf369320", "Mindre end"),
                t("f4dce7b6", "Hvor mange"),
                t("ddafa9a2", "Vis indstillinger"),
                t("c6be8432", "Engagementsniveau"),
                t("e60b9fac", "Vis originale posts"),
                t("eb441fee", "Vis reposts"),
                t("e920e6dc", "Vis citater"),
                t("g9580526", "Vis svar"),
                t("i73cbb5c", "Du kan kun føje én Liste til en søgning. Kun den første Liste gælder for denne søgning."),
                t("c765315d", function (e) {
                    return "Angiv " + e.listHandleListNameFormat + " eller Liste-id";
                }),
                t("a153fbf2", "Sådan bruger du en Liste i en søgning"),
                t("bf0d5a7c", "Du kan tilføje én Liste pr. søgning."),
                t("c6e8759a", "Hvis du vil tilføje en Liste, skal du følge dette format:"),
                t("dd9daca8", "Erstat punktummer med - i Listens navn."),
                t("cd71b264", "Lær om Lister."),
                t("ca23d726", "Billeder og videoer"),
                t("f1fa97a8", "Udsendelser"),
                t("c0bab0ba", "Vis kun posts med medier"),
                t("g9512656", "Vis kun verificerede personer"),
                t("b967e296", "Vis kun personer, du følger"),
                t("gc51a2ac", "Altid"),
                t("d42a4916", "For nylig"),
                t("a2229a06", "Inden for en tidsramme"),
                t("c1fe6156", "Starttidspunkt"),
                t("cbc02622", "Sluttidspunkt"),
                t("b666573c", "Søg efter lokalitet"),
                t("cf260344", "Posts i"),
                t("j5805302", "Radius"),
                t("e592ab3c", "Medtag placering og stat eller land i din søgning for at få bedre resultater."),
                t("e8843b5d", function (e) {
                    return e.meters + " m";
                }),
                t("g9e6a4e5", function (e) {
                    return e.kilometers + " km";
                }),
                t("ec688a09", function (e) {
                    return "Dette forhindrer @" + e.screenName + " i at medtage dig på vedkommendes lister, inklusive denne.";
                }),
                t("iad54d54", "Ryd bogmærker"),
                t("g4d581a2", "Tøm denne og alle bogmærkemapper"),
                t("fb14aebe", "Tøm bogmærker"),
                t("jf748f40", "Vil du rydde alle bogmærker?"),
                t("d63a211a", "Denne handling kan ikke fortrydes, og alle posts, du har føjet til dine bogmærker, fjernes."),
                t("a16ebc1a", "Start en ny chat"),
                t("a1ff1890", "Det vil slette din nuværende samtale."),
                t("ab352ee0", "Vis seneste posts"),
                t("c004c4d6", "Ryd posts"),
                t("fc702822", "Ryd posts, og se de seneste posts, når de bliver vist."),
                t("a2c59056", "Før du rydder kolonnen ..."),
                t("d31bdbbe", "Skift til de seneste posts"),
                t("dec3722c", "seneste posts"),
                t("g33b8c04", "Opret en kopi"),
                t("de2c3008", "Opret en dublet af kolonnen."),
                t("a7c01ce0", "Skift navn eller slet mappe"),
                t("e52e4c82", "Skift lokalitets- og tilpasningsindstillinger."),
                t("f4d052a4", "Grok (almindelig tilstand)"),
                t("fa97c1c6", "Grok (sjov tilstand)"),
                t("efb37dec", "Tilstand"),
                t("h0064892", "Almindelig"),
                t("ad86db50", "Opret et Dæk"),
                t("hb70ef30", "Opret et Dæk ud fra denne søgning"),
                t("j8a945cc", "Top-posts"),
                t("f3a4a654", "Verificerede posts"),
                t("c8da0c42", "Billeder og videoer"),
                t("d2cf6f74", "Premium-partnere"),
                t("c9b39e70", "Flyt"),
                t("b9ea5f7c", "Flyt kolonne til andet Dæk."),
                t("g8b6d450", "Meddelelsesindstillinger"),
                t("dd703fbd", function (e) {
                    return "Slet kolonne – " + e.title;
                }),
                t("d9d11fc6", "Slet offentlig kolonne?"),
                t("h17ada6c", "Sletning af en offentlig kolonne vil medføre, at alle følgere uigenkaldeligt mister adgangen til kolonnen."),
                t("hb388fe8", "Slet kolonne"),
                t("c1343ad6", "Konvertér dette til en søgekolonne."),
                t("e7a12d72", "Konvertér til søgekolonne"),
                t("f29424f0", "Skift tilbage"),
                t("h5ff85a2", "Del kolonne"),
                t("d32058ba", "Gør kolonnen offentlig for at aktivere deling."),
                t("c926a6ca", "De ændringer, du foretager, vises for alle, der følger kolonnen."),
                t("g0175ca2", "Kolonnevælger"),
                t("a800727c", "Tilbage til Kolonnevælger"),
                t("f318bc40", "Opret ny mappe"),
                t("e300a9f0", "Opret mappe i Bogmærker"),
                t("j341c67c", "Mapper skal have et navn."),
                t("d00586a6", "Denne kolonne kan ikke indlæses. Prøv at oprette en ny kolonne."),
                t("d0d8277e", "Kolonnens ejer har slettet den eller gjort den privat."),
                t("j08fd6fe", "Dine Fællesskaber"),
                t("b569a1fa", "Tilbage til Fællesskaber"),
                t("i176bfd2", "Opdag Lister"),
                t("a57c3292", "Opdag nye Lister"),
                t("f59f87dc", "Find andres Lister"),
                t("a5d70676", "Lister, som du findes på"),
                t("e377790a", "Vend tilbage til Lister"),
                t("e952b8c3", function (e) {
                    return "@" + e.userScreenName + "s Lister";
                }),
                t("bc24f834", "Tilbage til Find andres Lister"),
                t("ee11d084", "Søg profiler"),
                t("c300f3bc", "Tilføj nogle kolonner"),
                t("bd744e9a", "Udfyld med en søgning"),
                t("i10d4124", "Start fra bunden"),
                t("jbff8606", "Send forespørgsel"),
                t("dbd8a566", "Nogle post-udkast kunne ikke slettes."),
                t("c82be5a8", "De valgte post-udkast blev slettet."),
                t("ad84af68", "Indlæser post-udkast"),
                t("ef97fb3a", "Du har ingen post-udkast"),
                t("f26ece12", "Når du har, finder du dem her."),
                t("a4911812", "Sletter post-udkast"),
                t("b49be1ca", "Fjern post-udkast"),
                t("ca91dc76", "Denne handling kan ikke fortrydes, og dine post-udkast går tabt."),
                t("b38b254a", "Nogle planlagte posts kunne ikke slettes."),
                t("he2e3cc4", "De valgte planlagte posts blev slettet."),
                t("jf9faee4", "Indlæser planlagte posts"),
                t("aa1cfd48", "Du har ingen planlagte posts"),
                t("b2a70dbe", "Sletter planlagte posts"),
                t("a07bb1b0", "Fjern planlagte posts"),
                t("id78e802", "Dette kan ikke fortrydes, og du mister dine planlagte posts."),
                t("d9a75e16", "Vælg en"),
                t("aa030cd4", "Se anbefalede posts først."),
                t("c0d2d4aa", "Forsidetidslinje"),
                t("ecbbbb90", "Vis dine egne eller andres lister."),
                t("c351229c", "Se de Fællesskaber, du er en del af."),
                t("a2d1df82", "Find det, du søger."),
                t("d5387d8a", "Hold dig opdateret om dine beskeder."),
                t("e738198c", "Tjek, hvad der trender på X."),
                t("ifb8c91e", "Find en profil, og se, hvad vedkommende har gang i."),
                t("aa0525d0", "Profiler"),
                t("cb7844a6", "Følg med i dine meddelelser og omtaler."),
                t("e64da55e", "Se dine planlagte posts."),
                t("h9659832", "Se dine post-udkast."),
                t("f1b6535e", "Post-udkast"),
                t("a24add8a", "Se bogmærkede posts."),
                t("ic61c5fc", "Rul til toppen"),
                t("gb19f215", function (e) {
                    return "Kolonne - " + e.title;
                }),
                t("g7751b34", "Luk stak"),
                t("b94fa48c", "Ryd stak"),
                t("dd3dc3cc", "Gå tilbage i stakken"),
                t("bc7acfd0", "Delt kolonne"),
                t("a6587d95", function (e) {
                    return "Omarranger kolonne – " + e.title;
                }),
                t("fb071dea", "Flyt kolonne"),
                t("c77a6327", function (e) {
                    return "Åbn kolonneindstillinger – " + e.title;
                }),
                t("h53c41f0", "Kolonneindstillinger"),
                t("f7bbbb6d", function (e) {
                    return "Luk kolonneindstillinger – " + e.title;
                }),
                t("eee9f83e", "Luk kolonneindstillinger"),
                t("a443bbc0", "Luk søgning"),
                t("c8b12c8f", function (e) {
                    return "Angiv kolonneindhold – " + e.title;
                }),
                t("fe048090", "Vis sammendrag"),
                t("e57560b4", "Skjul sammendrag"),
                t("fb087db0", "Tilføj separat kolonne"),
                t("aa128cd8", "Tilføj som ny kolonne"),
                t("aa4f00c6", "Del Dæk"),
                t("fdf97052", "Gå til indstillinger for Dæk"),
                t("ed427868", "Gør Dæk offentligt"),
                t("gecc71a2", "For at dele et Dæk skal det først gøres offentligt."),
                t("f0653866", "Deler Dæk"),
                t("b158400a", "Spring dette trin over"),
                t("h15afbce", "Lad os gøre dig klar"),
                t("ibe6be32", "Tilpas din X Pro-oplevelse: Vælg den kolonnebredde, farve, tekst og mediestørrelse, der passer til dig."),
                t("e28eb008", "Åbn visningsindstillinger"),
                t("dc8b86e0", "Lad os nu tilføje dine kolonner"),
                t("ee28603e", "Importér dine kolonner"),
                t("dad15d22", "Spar tid ved at importere dine eksisterende søge-, liste- og profilkolonner. Du kan ikke kopiere dem over senere."),
                t("j85b4522", "Eller start fra bunden"),
                t("hfd5ca12", "Hmm ... vi kunne ikke importere dine kolonner"),
                t("b855852a", "Kun kolonnerne Søg, Liste og Profil kan importeres. Tilføj en forsidekolonne i stedet."),
                t("dc6c806e", "Dine kolonner kunne ikke importeres"),
                t("a0dfe2f6", "X Pro er en praktisk måde, hvorpå du kan få vist flere tidslinjekolonner i en nem brugerflade."),
                t("i8912d28", "Lad os tilføje nogle kolonner ..."),
                t("ce0c0f34", "Lad os nu se os lidt omkring"),
                t("h36d2aa2", "Få nogle praktiske tips til at komme i gang."),
                t("fbaf9442", "Tilføj et starterdæk"),
                t("b354ea52", "Tilføjer starterdæk..."),
                t("if195eb8", "Tilføjer kolonner ..."),
                t("ea07517c", "Kolonne slettet."),
                t("habced9e", "for at gendanne kolonne."),
                t("g4fcb4f8", "Kolonne gendannet."),
                t("d4429cba", "Hmm ... dette Dæk findes ikke. Prøv at vælge et andet."),
                t("g2c6e34a", "Administrer størrelse på indhold, farve og baggrund."),
                t("bf2890a6", "Visuel skala"),
                t("h098a550", "Standard kolonnebredde"),
                t("ab248726", "Standardforhåndsvisning af medier"),
                t("jdaf161c", "Fanen Beskeder"),
                t("ge0fcfd0", "Hover-kort"),
                t("e1cab6e8", "Anvend ændringer på eksisterende kolonner?"),
                t("ce2e487c", "Hvis du ændrer alle kolonner, bliver hver kolonne i alle dine Dæk opdateret. Hvis du vælger Nej, anvendes indstillingerne kun på de kolonner, du opretter fra nu af."),
                t("fdbd90a6", "Ja, tilpas alle kolonner"),
                t("h8affe68", "Nej, kun nye kolonner"),
                t("f06885b6", "Indstillinger for kolonnestørrelse"),
                t("e4bab2d0", "Indstillinger for kolonnebredde"),
                t("f0e71094", "Vis fanen Beskeder"),
                t("aa25a5a6", "Fanen Beskeder, der kan skjules, findes i bunden af skærmen"),
                t("g3da3c90", "Vis Hover-kort"),
                t("b08a8656", "Vis Hover-kort, når du holder markøren over interaktive elementer"),
                t("g9df1984", "Tilføj et Dæk"),
                t("df77af70", "Vælg en emoji til dit Dæk"),
                t("ee7765ba", "Vælg emoji"),
                t("e0127c83", function (e) {
                    return "Skift emoji " + e.emoji;
                }),
                t("hb8b6254", "Alle kan få adgang til dit offentlige dæk fra din profil. Du kan også dele links til det. Hvis du ombestemmer dig, kan du altid gøre det privat igen. Lær mere"),
                t("gfbaf4e8", "Dette dæk kan ikke gøres offentligt på nuværende tidspunkt"),
                t("ae04848a", "Dette Dæk indeholder kolonner, der er relateret til din X-konto. For at gøre dette Dæk offentligt, skal du fjerne dem. Læs mere"),
                t("d606207a", "Slet Dæk"),
                t("h95cb00e", "Dette Dæk bliver slettet permanent. Dette kan ikke fortrydes."),
                t("f50c9834", "Dette Dæk slettes permanent. Hvis du sletter det, kan du ikke hente det frem igen senere."),
                t("cb861826", "Omarranger Dæk"),
                t("i5896b2b", function (e) {
                    return 'Rediger Dæk "' + e.title + '"';
                }),
                t("ef602cab", function (e) {
                    return 'Slet Dæk "' + e.title + '"';
                }),
                t("b44b9d83", function (e) {
                    return 'Frigør Dæk "' + e.title + '"';
                }),
                t("je4a847f", function (e) {
                    return 'Fastgør Dæk "' + e.title + '"';
                }),
                t("ad41be88", "Flyt kolonne til Dæk"),
                t("cb82860a", "Kolonne blev ikke fundet"),
                t("icbecd02", "Tilføj kolonne"),
                t("fdf1a2c6", "Tilføj dæk"),
                t("d25acc28", "Hvad indeholder det?"),
                t("fe5df266", "Vil du gøre kolonnen privat?"),
                t("i3206148", "At gøre en offentlig kolonne privat vil medføre, at alle følgere mister adgang til kolonnen."),
                t("c65d210c", "Gør kolonnen privat"),
                t("j4d54f1e", "Et stærkt realtidsværktøj til folk, der lever på X."),
                t("je0526a0", "Overvåg flere tidslinjer på en enkelt skærm. Spor og organiser indhold, og interager med dine Fællesskaber i realtid."),
                t("d128af54", "Tilmeld dig X Premium"),
                t("bacd7195", function (e) {
                    return e.fullName + " (@" + e.screenName + ") på X";
                }),
                t("e5b4aafa", "Din internetforbindelse er blevet afbrudt."),
                t("g43c3b36", "Opret forbindelse til internettet igen for at fortsætte."),
                t("hafe83ec", "Tryk på luk for at afslutte applikationen."),
                t("b2ec74fe", "luk"),
                t("hf836e5f", function (e) {
                    return e.tweetText + " " + e.username + " " + e.screenName + " " + e.views + " visninger " + e.timeAgo;
                }),
                t("a7a90902", "Tryk for at vise"),
                t("cb0a3b5e", "Denne post kan indeholde følsomt indhold. Er du sikker på, at du gerne vil have det vist?"),
                t("a4eb1304", "Du kan altid logge ind igen."),
                t("b86c2e12", "Log ind for at søge i alt indhold på X."),
                t("ia13bd7c", "tastatur"),
                t("f9fa40c8", "Oplev det bedste fra X"),
                t("gb6a7f62", "Din kode er udløbet. Hvis du vil prøve igen, skal du vælge knappen nedenfor for at få en ny kode."),
                t("ge19602a", "Hent ny kode"),
                t("dd4ec2e8", "Log på X på din bærbare computer eller mobilenhed ved hjælp af URL'en nedenfor, og indtaste den kode, der vises her."),
                t("f4d7084c", "Log ind på X med én af disse to muligheder:"),
                t("ebc1accc", "Scan denne QR-kode"),
                t("a4742bc0", "Besøg nedenstående URL-adresse på din bærbare computer eller mobilenhed, og indtast den kode, der vises her."),
                t("f260dea2", "x.com/tvlogin"),
                t("h797e380", function (e) {
                    return "" + e.url;
                }),
                t("cf8eec84", function (e) {
                    return "" + e.url;
                }),
                t("g7ee7019", function (e) {
                    return "Log ind for at se videoer fra " + e.name + ".";
                }),
                t("fb83778c", "Log ind for at se videoer fra denne bruger."),
                t("dd4bbaea", "Du har ingen videoer at vise."),
                t("i71d6193", function (e) {
                    return "Der er ingen videoer at vise fra " + e.name + ".";
                }),
                t("adb512f0", "Seneste videoer"),
                t("bef78294", function (e) {
                    return "" + e.formattedCount;
                }),
                t("hda3bb87", function (e) {
                    return "Følger";
                }),
                t("cd3f5206", "Næste:"),
                t("c930299f", function (e) {
                    return "Afspiller næste om " + e.count + ":";
                }),
                t("b2e9f19c", "Genafspil sidste video"),
                t("de906774", "Hastighed"),
                t("caca839e", "Undertekster"),
                t("b049f56c", "Kvalitet"),
                t("fa7169d8", "Hvis du vil indberette dette indhold, skal du besøge nedenstående URL-adresse på din bærbare eller mobile enhed"),
                t("c973ec9c", "Kontoens brugernavn"),
                t("e9670a81", function (e) {
                    return "@" + e.screenName;
                }),
                t("d0e1b720", "URL-adresse til indhold"),
                t("a4ee9394", "Hvid"),
                t("a9f3474c", "Cyan"),
                t("i50b6538", "Magenta"),
                t("jffeb664", "Rød"),
                t("e375c2d0", "Sort"),
                t("c2c5dea4", "Skriftfarve"),
                t("ce71b3d0", "Skrifttypefamilie"),
                t("d2eb1582", "Standard (sans-serif)"),
                t("e684030e", "Arial (sans-serif)"),
                t("jad3900c", "Times New Roman (serif)"),
                t("e205f3a0", "Monospace (sans-serif)"),
                t("d207d39a", "Tekstens uigennemsigtighed"),
                t("a562039c", "Baggrundsfarve"),
                t("h44e879e", "Baggrundens uigennemsigtighed"),
                t("b843ced4", "Automatisk"),
                t("e30d2cea", "0,5x"),
                t("d030db62", "1,25x"),
                t("ga63a594", "1,5x"),
                t("f571bc5a", "1,75x"),
                t("d0284204", "2x"),
                t("b7d7f606", "Fremad"),
                t("ee0f61ca", "Tilbage"),
                t("i2d14148", "Fjern like"),
                t("a1eb471a", "Fjern Synes ikke om"),
                t("e40051e8", "Fjern bogmærke"),
                t("g9ecf0e8", "Vis svar"),
                t("aa97ae7e", "Betjeningsfunktioner til tv-afspiller"),
                t("ed170a6a", "Skyder"),
                t("ee838ea0", "Ved at følge dette emne er du med til at gøre forsidetidslinjen og din oplevelse på X mere personlig"),
                t("h85446ce", "Denne browser understøttes ikke længere."),
                t("e24d1fa6", "Skift til en understøttet browser for fortsat at bruge x.com. Du kan se en liste over understøttede browsere i vores hjælpecenter."),
                t("a138aeb2", "JavaScript er ikke tilgængelig."),
                t("d8e122c2", "Vi kan se, at JavaScript er deaktiveret i denne browser. Slå JavaScript til, eller skift til en understøttet browser for fortsat at bruge x.com. Du kan se en liste over understøttede browsere i vores hjælpecenter."),
                t("f1a9e3a2", "Få breaking news, politik, musiktendenser, verdensbegivenheder, sportsresultater og de seneste globale nyheder, mens det sker – alt sammen med mindre data."),
                t("bb402b62", "X Pro er et kontrolpanel, der kan tilpasses, så du kan holde dig opdateret om, hvad der sker lige nu."),
                t("ed617674", "360"),
                t("e23b20a0", "Annuller"),
                t("a620fcf0", "Indlæser billede"),
                t("e9e2064c", "Noget gik galt, men bare rolig – det er ikke din skyld."),
                t("d7060c80", "Opdater"),
                t("a0493514", "Prøv igen"),
                t("ff3dd27c", "Standard"),
                t("b554fcf4", "Lyst"),
                t("j590b148", "Mellemlyst"),
                t("e7d4ee86", "Medium"),
                t("ia423ebc", "Mellemmørkt"),
                t("a2cf0942", "Mørkt"),
                t("j824dc06", "Søg efter emojis"),
                t("fffb3384", "Ingen emoji fundet"),
                t("j3d20752", "Prøv at søge efter noget andet i stedet."),
                t("d67ad796", "Vælg en standardhudfarve"),
                t("e6388bfa", "Ryd alle"),
                t("j7c67eca", "Nye"),
                t("da539d38", "Søgeresultater"),
                t("d95eb228", "Tilbage"),
                t("af8fa2ae", "Luk"),
                t("ef8b2f54", "Læs diagrammet"),
                t("d567ceda", "lodret"),
                t("f7b30768", "stablet"),
                t("hcd54328", "grupperet"),
                t("affbaf62", "Flere oplysninger"),
                t("c388d026", "OK"),
                t("ha20397c", "Tilgængelighedsfunktioner"),
                t("baf7a43c", "Tilgængelighed"),
                t("e8f674ab", function (e) {
                    return "Dette er et " + e.chartType + " søjlediagram. Titlen på diagrammet er " + e.chartTitle + ". Der er i alt " + e.noOfCategories + " kategorier. Minimumsværdien er " + e.minValue + " og maksimumsværdien er " + e.maxValue + ". Udforsk diagrammet med navigationsknapperne.";
                }),
                t("d969327c", "Afspil lydversion"),
                t("d8cbbcd4", 'Afspil lyddiagram. Tryk for at afspille en lydversion af diagrammet, eller tryk på tasten "A" på hvert datapunkt for lydversionen'),
                t("dec1d7ef", function (e) {
                    return e.label + ", " + e.group + ", " + e.value;
                }),
                t("f765bead", function (e) {
                    return "data uden mærkning, " + e.group + ", " + e.value;
                }),
                t("idea1817", function (e) {
                    return e.label + ", " + e.value;
                }),
                t("fe94be6b", function (e) {
                    return "data uden mærkning, " + e.value;
                }),
                t("b15c0a18", "Kassér ændringer?"),
                t("aebf81c8", "De ændringer, du har foretaget, bliver ikke gemt."),
                t("aa744c1e", "Fortsæt med at redigere"),
                t("fe04d89a", "Slet"),
                t("bb5d8cd2", "Ja"),
                t("dc33d78a", "Forsidebillede til Artikel"),
                t("j190bf1a", "DIREKTE"),
                t("e3fcbdba", "Afvis"),
                t("jc0b3a8c", "Billedbeskrivelse"),
                t("ia1d2e58", "Liket af forfatteren"),
                t("h81f3036", "Artikel"),
                t("bed2945c", "læs billedbeskrivelse"),
                t("j2eea17a", "Det følgende medie har potentielt ømtåleligt indhold."),
                t("b05a39b2", "Vis"),
                t("a7cd5cf4", "Video"),
                t("b6eb8f6a", "Udsendelse"),
                t("dcc2b9b3", function (e) {
                    return "Afspil " + e.locVideoType;
                }),
                t("hf4ffd4d", function (e) {
                    return "Afspil direkte " + e.locVideoType;
                }),
                t("f6e90cd7", function (e) {
                    return e.hoursWord + " " + e.minutesWord + " " + e.secondsWord + " lang";
                }),
                t("e7d191ed", function (e) {
                    return "Starter ved " + e.hoursWord + " " + e.minutesWord + " " + e.secondsWord;
                }),
                t("daa73df1", function (e) {
                    return e.viewerCount + " visning" + i(e.viewerCount, "", "er");
                }),
                t("b4f19b97", function (e) {
                    return e.listItem1 + " og " + e.listItem2;
                }),
                t("i0135403", function (e) {
                    return e.listItem1 + ", " + e.listItem2;
                }),
                t("f1574a4b", function (e) {
                    return e.listItem1 + " og " + e.listItem2;
                }),
                t("ec72e2f8", "Følg"),
                t("d9d2a865", function (e) {
                    return "Afspil" + e.ttc_card_cta_play;
                }),
                t("a8422cd5", function (e) {
                    return "Butik" + e.ttc_card_cta_shop;
                }),
                t("ff1b8c17", function (e) {
                    return "Handl nu" + e.ttc_card_cta_shop_now;
                }),
                t("d04488ef", function (e) {
                    return "Book" + e.ttc_card_cta_book;
                }),
                t("b0b0cfb7", function (e) {
                    return "Forbind" + e.ttc_card_cta_connect;
                }),
                t("ea5247d5", function (e) {
                    return "Ordre" + e.ttc_card_cta_order;
                }),
                t("b7b58677", function (e) {
                    return "Åbn" + e.ttc_card_cta_open;
                }),
                t("g15f6870", "Lær mere"),
                t("d1ff55d8", "Installér"),
                t("g40f106c", "Send os en besked"),
                t("j393e386", "Send os en privat besked"),
                t("a771d32e", "Send mig en privat besked"),
                t("d8e9c24c", "Send en privat besked"),
                t("h2f9258f", function (e) {
                    return e.appStarRating + "/5,0 stjerner – " + e.appNumRatings + " bedømmelser";
                }),
                t("cc5508a9", function (e) {
                    return "Starter " + e.timestampUTC;
                }),
                t("f4520a5d", function (e) {
                    return "Post " + e.action;
                }),
                t("f17dfdb6", "Afspil"),
                t("j836de8a", "Beskyttet konto"),
                t("f4b8dc08", "Abonneret konto"),
                t("f936caa6", "Oversætterkonto"),
                t("ac72ee4e", "Verificeret konto"),
                t("f49e0aac", "Giver oplysninger om verificerede konti."),
                t("f59bdb94", "Giver oplysninger om beskyttede konti."),
                t("d7e50a66", "Læs mere"),
                t("fc065ee4", "Her kan du læse mere om abonnementer"),
                t("e453f536", "Hvad er abonnementer"),
                t("bd4cb7a0", "Når du abonnerer på dine yndlingsskabere, får du bonusindhold – og vedkommende tjener en lille smule ekstra penge."),
                t("g7099a02", "Fortæl mig mere"),
                t("c2637ef6", "Modtaget"),
                t("efb17190", "Følger dig"),
                t("g57b5f6c", "Din abonnent"),
                t("a77a27c0", "Abonnerer"),
                t("gdd173da", "Svar fra Grok i tilstanden Sjov"),
                t("dfd6eeac", "Svar fra Grok"),
                t("deceb214", "Billede af Grok"),
                t("j05496ce", "DeepSearch af Grok"),
                t("befddd48", "Vis"),
                t("hf3f8e3a", "Vis mere"),
                t("h504ea5e", "Opret din version med Grok"),
                t("eb722de2", "Spørg selv Grok"),
                t("ib5110be", "Prøv selv Groks DeepSearch"),
                t("bb5c5864", "Citat"),
                t("a8b58cf4", "Vis denne tråd"),
                t("i5f742fe", "Vis denne afstemning."),
                t("fc45ccc6", "Indlejret video"),
                t("a9edea48", "Genindlæs"),
                t("d26d8730", "Kopiér videoadresse"),
                t("f1b6bcec", "Kopiér GIF-adresse"),
                t("j25d7cca", "Skjul billedtekster"),
                t("a858b25c", "Vis billedtekster"),
                t("faf9f484", "Annonce"),
                t("ae2ea9e7", function (e) {
                    return "Annonce af " + e.advertiserName;
                }),
                t("hea01798", "Skyder til søgning"),
                t("f8a09386", "Vis på Periscope"),
                t("gf2b6eee", "Billede-i-billede"),
                t("b3160a69", function (e) {
                    return e.volumePercent + " procent";
                }),
                t("fb236728", "Pause"),
                t("e9bd453e", "Afspil igen"),
                t("d46b00b0", "Gå til direkte"),
                t("ec8ab8b4", "Skjul"),
                t("b8b6344a", "Vis"),
                t("c9a642fa", "Skyder til lydstyrke"),
                t("c27e60b0", "Fuld skærm"),
                t("d2969f10", "Afslut fuld skærm"),
                t("f06f2e53", function (e) {
                    return e.currentTime + " af " + e.durationTime;
                }),
                t("eeb64451", function (e) {
                    return "Se " + e.advertiserName;
                }),
                t("f3c268a5", function (e) {
                    return "Handl hos " + e.advertiserName;
                }),
                t("g60001bb", function (e) {
                    return "Se " + e.advertiserName;
                }),
                t("dff1ddd9", function (e) {
                    return "Gå til " + e.advertiserName;
                }),
                t("b0b22805", function (e) {
                    return "Besøg " + e.advertiserName;
                }),
                t("c67e71aa", "Se nu"),
                t("a6ada13e", "Køb nu"),
                t("j0f12222", "Se mere"),
                t("f569f7c8", "Gå til webstedet"),
                t("j0c6772a", "Besøg webstedet"),
                t("f73003aa", "Videoen afspilles efter annoncen"),
                t("b3112b8a", "Spring over"),
                t("h6333ad0", "Spring annonce over"),
                t("c59da417", function (e) {
                    return "Spring annoncen over om " + e.seconds;
                }),
                t("c3c147cf", function (e) {
                    return "Spring over " + e.seconds;
                }),
                t("h9b3104e", "Videoindstillinger"),
                t("ha3efce4", "Automatisk"),
                t("hd8d044d", function (e) {
                    return "Automatisk (" + e.quality + ")";
                }),
                t("a7bf9962", "Download video"),
                t("ccc97152", "Afspilningshastighed"),
                t("h531ade0", "Videokvalitet"),
                t("e8b5757c", "0,25x"),
                t("e7e954de", "0,5x"),
                t("g07ffe66", "0,75x"),
                t("d8bede9e", "1x"),
                t("j41845c8", "1,25x"),
                t("e9eeed9e", "1,5x"),
                t("fe45dc84", "1,75x"),
                t("e791190a", "2x"),
                t("dc5df829", function (e) {
                    return e.resolution + "p" + e.frameRate;
                }),
                t("c4d66d2e", "Du modtager ikke den optimale kvalitet pga. dit valg af browser. Vi anbefaler, at du bruger en browser, der understøtter HEVC."),
                t("a681babd", function (e) {
                    return "Se nu på " + e.trimmedHostname;
                }),
                t("db3cd325", function (e) {
                    return "Besøg " + e.trimmedHostname;
                }),
                t("f1ad0df1", function (e) {
                    return "Annonce · " + e.timeRemaining;
                }),
                t("ef16ab2b", function (e) {
                    return "Annonce af " + e.advertiserName + " · " + e.timeRemaining;
                }),
                t("a15adf2c", "denne formular"),
                t("c1658fc6", "Mediet kunne ikke afspilles."),
                t("h519ae04", "Mediet er blevet deaktiveret pga. et ophavsretligt krav."),
                t("ce871584", "Denne udsendelse er afsluttet."),
                t("c101eb96", "Denne udsendelse er ikke tilgængelig."),
                t("gb24a514", "Dette medie er blevet deaktiveret som følge af en indberetning fra ophavsretindehaveren."),
                t("hcaf3e63", function (e) {
                    return "Dette medie er blevet deaktiveret pga. et ophavsretligt krav fra " + e.holder + ".";
                }),
                t("if05c038", "Denne udsendelse er ikke tilgængelig i dit område."),
                t("d420171b", function (e) {
                    return "Videoen er ikke tilgængelig grundet et krav om copyright fra " + e.holder;
                }),
                t("b1eb72fa", "Denne video er desværre begrænset i visse områder. Vent et par sekunder, mens vi finder din placering. Sørg for at aktivere placeringsindstillinger i din browser."),
                t("c057680c", "Vi kan ikke afspille videoen i din browser. Prøv en anden browser."),
                t("i5dfae6e", "Denne video er ikke tilgængelig i dit område."),
                t("c2388276", "Denne video er blevet slettet."),
                t("d2c96140", "Indikator for gæstelyd"),
                t("f6dc9146", "REPLAY");
            t("d30c74fe", "Lydstyrke"),
                t("f2d4e6f2", "Se igen"),
                t("e9f1af3a", "Få mere at vide"),
                t("f1881d86", "Denne post kan ikke besvares, deles eller likes."),
                t("j3d37222", "X er juridisk forpligtet til at bringe denne meddelelse."),
                t("e461d0ee", "Få det seneste"),
                t("d1386940", "Hold dig orienteret"),
                t("ecda5f9e", "Vildledende"),
                t("a423473c", "Lovpligtig meddelelse"),
                t("b3296688", "Synlighed begrænset"),
                t("ccd32094", "Nu"),
                t("abfcce0d", function (e) {
                    return e.amountOfTime + " siden";
                }),
                t("ae408b76", "Du repostede"),
                t("j355f008", "Fastgjort post"),
                t("habf9678", "Fastgjort af forfatter"),
                t("db0798ed", function (e) {
                    return e.topicName + " Emne";
                }),
                t("dc716ec9", function (e) {
                    return "Anbefalet emne: " + e.topicName;
                }),
                t("fbc2003c", "Afsluttet"),
                t("h5051dd8", "Annulleret"),
                t("bb5f91a3", function (e) {
                    return e.count + " i dette Rum";
                }),
                t("c83eea99", function (e) {
                    return e.participant + " + " + e.count + " lytter";
                }),
                t("cdff6cd3", function (e) {
                    return e.speaker + " taler + " + e.count + " lytter";
                }),
                t("df006f4f", function (e) {
                    return e.count + " interesseret";
                }),
                t("c889af33", function (e) {
                    return e.count + " deltager";
                }),
                t("d6f2056f", function (e) {
                    return e.count + " følger med";
                }),
                t("jbc5f47a", "Rum-dock"),
                t("gfe2830f", function (e) {
                    return e.count + " and" + i(e.count, "en", "re");
                }),
                t("dbeae6cf", function (e) {
                    return e.count + " and" + i(e.count, "en lytter", "re lyttere");
                }),
                t("d2543d97", function (e) {
                    return "+" + e.count;
                }),
                t("dc718e53", function (e) {
                    return "+" + e.count + " and" + i(e.count, "en", "re");
                }),
                t("d0e7b11b", function (e) {
                    return e.date + " kl. " + e.time;
                }),
                t("b4349cbc", function (e) {
                    return "" + e.relativeDay;
                }),
                t("ebe41367", function (e) {
                    return "Tid " + e.time;
                }),
                t("efce3d9b", function (e) {
                    return e.hours + " " + e.minutes + " " + e.seconds;
                }),
                t("d925a4f9", function (e) {
                    return e.formattedCount + " minut" + i(e.count, "", "ter") + " tilbage";
                }),
                t("ib15cddb", function (e) {
                    return e.formattedCount + " time" + i(e.count, "", "r") + " tilbage";
                }),
                t("db9ed19f", function (e) {
                    return e.formattedCount + " dag" + i(e.count, "", "e") + " tilbage";
                }),
                t("e1ebcecb", function (e) {
                    return e.formattedDays + " dag" + i(e.days, "", "e") + " " + e.formattedHours + " time" + i(e.hours, "", "r") + " tilbage";
                }),
                t("cc1da1fd", function (e) {
                    return e.formattedHours + " time" + i(e.hours, "", "r") + " " + e.formattedMins + " minut" + i(e.mins, "", "ter") + " tilbage";
                }),
                t("f89a5d60", "Vært"),
                t("ce2cfb36", "Kun for abonnenter"),
                t("df06241c", "Fællesskab"),
                t("b03e162a", "Lyt med direkte"),
                t("b3d828ee", "Deltager"),
                t("g519ec2a", "Afspil optagelse"),
                t("c6000450", "Påmindelse indstillet"),
                t("db44ff5c", "Indstil påmindelse"),
                t("f7b6346a", "Start nu"),
                t("cc1f75ac", "Rum"),
                t("bd08d1b2", "Ingen tilgængelige oplysninger"),
                t("j8b01b27", function (e) {
                    return "Rummet " + e.title + " hostet af " + e.host + " er blevet aflyst";
                }),
                t("fda9f48c", "Rummet er blevet aflyst"),
                t("jf7853f7", function (e) {
                    return "Rummet " + e.title + " hostet af " + e.host + " er slut";
                }),
                t("i1a29920", "Rummet er slut"),
                t("db467ffe", "Deltag i et Rum"),
                t("i8dc3993", function (e) {
                    return "Vært " + e.host;
                }),
                t("eb0b05b9", function (e) {
                    return "med " + e.count + " andre";
                }),
                t("d19b9f77", function (e) {
                    return e.action + " for " + e.title + " med " + e.host + ", " + e.scheduledStart + " som vært";
                }),
                t("e679d5d7", function (e) {
                    return "Start " + e.title + " planlagt til " + e.scheduledStart + " nu";
                }),
                t("ea4258b7", function (e) {
                    return e.action + " for et rum, " + e.scheduledStart;
                }),
                t("dcbcaa23", function (e) {
                    return "Afspil optagelse af " + e.title;
                }),
                t("gaeb997e", "Mere"),
                t("f8b21226", "Tilmeld"),
                t("e1b95ab0", "Sidst redigeret"),
                t("i308d42c", "Der er en ny version af denne post"),
                t("h092d520", "Der er en ny version af denne post."),
                t("b74bf8b8", "Billede"),
                t("ha9ed08c", "Oprettet med"),
                t("bff61470", "Klik her for at redigere"),
                t("f4393d0f", function (e) {
                    return "Tilskrevet " + e.name;
                }),
                t("f8e8e32e", "Dig"),
                t("df6703d3", "Dig"),
                t("c20f7e9f", function (e) {
                    return i(e.otherUsersCount, o.createElement(o.Fragment, null, "", e.secondName), e.otherUsersCount + " andre");
                }),
                t("he26f627", function (e) {
                    return i(e.otherUsersCount, o.createElement(o.Fragment, null, "", e.secondName), e.otherUsersCount + " andre");
                }),
                t("gea7aa3c", "Næste"),
                t("b6462b32", "Forrige"),
                t("caddb529", "og"),
                t("ff31714c", function (e) {
                    return "og " + i(e.othersCount, "1 anden", e.othersCount + " andre");
                }),
                t("e06c99b7", "og"),
                t("i4e2f96c", function (e) {
                    return "og " + i(e.othersCount, "1 anden", e.othersCount + " andre");
                }),
                t("ga629a8c", "Vis personer i samtalen"),
                t("d6f781e4", "Når du abonnerer på dine yndlingsskabere på X, får du bonusindhold – og vedkommende tjener en lille smule ekstra penge."),
                t("dab106f8", "Medlem"),
                t("a46e92c2", "Mod."),
                t("f9633e62", "Admin"),
                t("a3dfd0cb", function (e) {
                    return "post" + e.noun;
                }),
                t("d7580651", function (e) {
                    return "Post" + e.noun;
                }),
                t("c68b6367", function (e) {
                    return "Artikel" + e.noun;
                }),
                t("h13ffc88", "Tale"),
                t("c8c4600e", "Talepost"),
                t("de8c5eb2", "Afspil lyd"),
                t("ec286028", "Sæt lyd på pause"),
                t("ad77feb6", "Undertekster ikke tilgængelige"),
                t("e82adfeb", function (e) {
                    return e.count + " webside" + i(e.count, "", "r");
                }),
                t("cfb8c1f7", function (e) {
                    return e.count + " post" + i(e.count, "", "s");
                }),
                t("g78032d5", function (e) {
                    return e.count + " websider og posts";
                }),
                t("j3de54a8", "BEMÆRK"),
                t("a6a6ced4", "Læs notat"),
                t("dbc0c2f4", "Føj til bogmærker"),
                t("d6885d3e", "Vis Fællesskab"),
                t("d5a48014", "Overskrift"),
                t("b92b6156", "Underoverskrift"),
                t("ec5ed598", "Brødtekst"),
                t("c69eb656", "Fuld tid"),
                t("g46ae43c", "Fuldtidsstilling"),
                t("jf7d4cc6", "Deltid"),
                t("b2214572", "Tidsbegrænset med mulighed for fastansættelse"),
                t("f8337bd6", "om året"),
                t("i935bf88", "i timen"),
                t("b75b8ffd", function (e) {
                    return e.salary + " " + e.interval;
                }),
                t("c5954d30", "Liste"),
                t("fe64170c", "Når du foretager et valg, kan det ikke ændres"),
                t("g10ace38", "Valgmuligheder til afstemning"),
                t("a3edf99a", "Endelige resultater"),
                t("c2b81e9d", function (e) {
                    return e.formattedCount + " stemme" + i(e.count, "", "r");
                }),
                t("e86732e4", "Valgt"),
                t("a35a5b10", "Følgere, du kender"),
                t("fc8cd112", "Følges ikke af nogen, som du følger"),
                t("df8cd2af", function (e) {
                    return "Dias " + e.currentSlide + " af " + e.itemCount + " – Karrusel " + e.type + ". " + e.altText;
                }),
                t("d70740da", "Næste dias"),
                t("c4d53ba2", "Forrige dias"),
                t("h6405c17", function (e) {
                    return "Dias " + e.currentSlide + " af " + e.itemCount + " – Karrusel";
                }),
                t("a3efd2c4", "Emne"),
                t("b91c8e53", function (e) {
                    return "Emnekort for " + e.title + ".";
                }),
                t("b3826295", function (e) {
                    return "Emnekort for " + e.title + ", " + e.description + ".";
                }),
                t("c9bb65db", function (e) {
                    return "Samling af " + e.slidesLength + " billeder. " + e.heroVanityContent + ". " + e.heroTitleContent;
                }),
                t("e1bddf52", "Træk for at rotere"),
                t("f0e1fb48", "Der kunne ikke oprettes en forhåndsvisning for dette videoformat i denne browser. Det kan stadig være muligt at uploade videoen"),
                t("c2fc878d", function (e) {
                    return "Du har overskredet tegngrænsen med " + e.count;
                }),
                t("db11b27f", function (e) {
                    return e.count + " tegn tilbage";
                }),
                t("bb7b821a", "Du kan svare"),
                t("fc41217b", function (e) {
                    return "Konti, som @" + e.screenName + " følger eller har omtalt, kan svare";
                }),
                t("e5dc76d0", "Du kan svare på denne samtale"),
                t("ab105904", "Hvem kan svare?"),
                t("fd1cda7a", "Du kan ikke svare på denne samtale"),
                t("f064f477", function (e) {
                    return "Konti, som @" + e.screenName + " følger eller har omtalt, kan svare";
                }),
                t("ea9ac5c9", function (e) {
                    return "Konti, som @" + e.screenName + " har omtalt, kan svare";
                }),
                t("d2ae1499", function (e) {
                    return "Konti, der abonnerer på eller omtales af @" + e.screenName + ", kan svare";
                }),
                t("a4e254ff", function (e) {
                    return "Verificerede konti eller konti, som @" + e.screenName + " har omtalt, kan svare";
                }),
                t("j1b02fd8", "Bliv verificeret"),
                t("daba4484", "Kun forfatteren og moderatorerne kan se denne post"),
                t("f956070a", "Det blev skjult af moderatorerne for overtrædelse af Fællesskabsreglerne."),
                t("cc17f408", "Når medlemmer fjernes, bliver deres posts skjult for resten af Fællesskabet."),
                t("j620ce06", "Hvem kan se denne post?"),
                t("bd414b44", "Eksklusivt for dine abonnenter"),
                t("dd0da5d9", function (e) {
                    return "@" + e.screenName + " og vedkommendes abonnenter kan se din post";
                }),
                t("g1c6a77e", "Du ser nu abonnementsindhold"),
                t("d3b143d7", function (e) {
                    return "Du kan se dette og svare, fordi du abonnerer på @" + e.screenName;
                }),
                t("f6337117", function (e) {
                    return "Du kan se denne post, fordi du abonnerer på @" + e.screenName;
                }),
                t("g766a06d", function (e) {
                    return "Denne post kan kun ses af personer i @" + e.screenName + "s cirkel";
                }),
                t("j040a368", "Links deaktiveret i svar"),
                t("b31d0af7", function (e) {
                    return e.screenName + " tillader ikke links i svar på dette post";
                }),
                t("eab0f780", "Du kan ikke poste eller citere eksterne links i svar på dette post."),
                t("f17a1f54", "Kun Premium"),
                t("a0953370", "Abonnement"),
                t("d9687d23", function (e) {
                    return "Faldet med " + e.trendValueNegativePercent;
                }),
                t("ac73eb5a", "Ingen ændring"),
                t("c5a9f921", function (e) {
                    return "Steget med " + e.trendValuePositivePercent;
                }),
                t("e3098e07", function (e) {
                    return e.minutes + " minut" + i(e.minutes, "", "ter") + " siden";
                }),
                t("fea16a51", function (e) {
                    return e.hours + " time" + i(e.hours, "", "r") + " siden";
                }),
                t("a4f2d94d", function (e) {
                    return e.days + " dag" + i(e.days, "", "e") + " siden";
                }),
                t("hf9bc787", function (e) {
                    return e.weeks + " uge" + i(e.weeks, "", "r") + " siden";
                }),
                t("efcd5885", function (e) {
                    return e.months + " måned" + i(e.months, "", "er") + " siden";
                }),
                t("c37228b5", function (e) {
                    return e.years + " år siden";
                }),
                t("jf83d092", "Dag"),
                t("af4abf20", "Måned"),
                t("b871f280", "År"),
                t("hac89ab0", "Januar"),
                t("ef30b30a", "Februar"),
                t("b56920fa", "Marts"),
                t("b1a0f1ec", "April"),
                t("daf779c8", "Maj"),
                t("c6ad074e", "Juni"),
                t("f1db106c", "Juli"),
                t("i4e80b7a", "August"),
                t("efa6cc1e", "September"),
                t("f40a0cbe", "Oktober"),
                t("ac74a31c", "November"),
                t("i6c1e4b2", "December"),
                t("de540c32", "Vis adgangskoden"),
                t("b4abfdb4", "Skjul adgangskoden"),
                t("f06ae5d3", function (e) {
                    return e.standardTweetCount + " tegn tilbage for en almindelig post, " + e.totalCount + " tegn tilbage i alt";
                }),
                t("fee0a8bc", "Gem"),
                t("ae7f7656", "Ryd"),
                t("gd769996", "Noget gik galt. Prøv at genindlæse."),
                t("i5450bec", "Medier"),
                t("f7432494", "Tilføj billede"),
                t("a5f7ce12", "Følg tilbage"),
                t("c3befdbe", "Følger"),
                t("d3029dbc", "Følg ikke længere"),
                t("aeb6f0a0", "Abonnér"),
                t("b4397192", "Administrer"),
                t("i8cfb6e6", "Blokeret"),
                t("ea100d6a", "Fjern blokering"),
                t("fe40537f", function (e) {
                    return "Vil du fjerne blokeringen af @" + e.screenName + "?";
                }),
                t("ab7c3460", "Vedkommende vil kunne følge dig og se dine posts."),
                t("i58d8718", "Vedkommende vil kunne følge dig og interagere med dine offentlige posts."),
                t("cda66545", function (e) {
                    return "Klik for " + e.followType + " " + e.screenName;
                }),
                t("ee05e96b", function (e) {
                    return "Klik for " + e.followType + " til " + e.screenName;
                }),
                t("a8d77a25", function (e) {
                    return "Klik for at forlade " + e.screenName;
                }),
                t("d0f4f3d9", function (e) {
                    return e.followType + " " + e.screenName;
                }),
                t("f238ba1d", function (e) {
                    return e.followType + " til " + e.screenName;
                }),
                t("j6161cab", function (e) {
                    return "Vil du ikke længere følge @" + e.screenName + "?";
                }),
                t("i4bb9ef7", function (e) {
                    return "Følg ikke længere " + e.title + "?";
                }),
                t("ge753264", "Vedkommendes posts vises ikke længere på din Til dig-tidslinjen. Du kan stadig se vedkommendes profil, medmindre vedkommende har beskyttet sine posts."),
                t("b837c0e8", "Selvom du ikke længere følger dette emne, får du muligvis stadig vist posts om det, afhængigt af hvilke konti du følger."),
                t("ddac1f1d", function (e) {
                    return "Er du sikker på, at du vil forlade " + e.communityName + "?";
                }),
                t("j8e33c40", "Du mister adgangen til Fællesskabet og kan ikke længere deltage, men dine tidligere posts vil stadig være synlige."),
                t("f305840e", "Afventer"),
                t("i036327c", "Fjern følgeanmodning?"),
                t("j95e3097", function (e) {
                    return "Dette annullerer din ventende anmodning, og @" + e.screenName + " vil ikke kunne se den mere.";
                }),
                t("d85bc1b8", "Zoom ind eller ud på billedet."),
                t("f596ace8", "Højde-bredde-forhold: originalt"),
                t("df031fca", "Højde-bredde-forhold: bredt"),
                t("b40332c6", "Højde-bredde-forhold: firkantet"),
                t("e547b368", "Oprindelig"),
                t("f7571204", "Bred"),
                t("e6e16812", "Kvadrat"),
                t("hdd29d51", function (e) {
                    return "" + e.sponsorshipOrganization;
                }),
                t("b97f7079", function (e) {
                    return "" + e.sponsorshipOrganization;
                }),
                t("b02627a9", function (e) {
                    return "" + e.sponsorshipOrganization;
                }),
                t("f1a1b791", function (e) {
                    return "Promoveret af " + e.fullName;
                }),
                t("if2bf8b4", "Promoveret"),
                t("f3624b5c", "Promoveret (politisk)"),
                t("b4b3b113", function (e) {
                    return "Promoveret (politisk) af " + e.fullName;
                }),
                t("be222050", "Promoveret (emne)"),
                t("hcbbe447", function (e) {
                    return "Promoveret (emne) af " + e.fullName;
                }),
                t("jcf3e7a2", "Billedstatus for Lottie-animation"),
                t("a0af935c", "Liket"),
                t("b8c465e2", "Repostede"),
                t("c7a989ce", "Gemt som bogmærke"),
                t("b03835c7", function (e) {
                    return e.replyCount + " svar";
                }),
                t("g4a195e7", function (e) {
                    return e.retweetCount + " repost" + i(e.retweetCount, "", "s");
                }),
                t("e089b42d", function (e) {
                    return e.likeCount + " like" + i(e.likeCount, "", "s");
                }),
                t("e0a8fe39", function (e) {
                    return e.bookmarkCount + " bogmærke" + i(e.bookmarkCount, "", "r");
                }),
                t("c58b2ab7", function (e) {
                    return e.viewCount + " visning" + i(e.viewCount, "", "er");
                }),
                t("f2849136", "Statistik"),
                t("f206e970", "Vis post-statistik"),
                t("c7073f5b", function (e) {
                    return e.count + " visning" + i(e.count, "", "er") + ". Vis post-statistik";
                }),
                t("hf417cf0", "Fjern fra bogmærker"),
                t("febd30ed", function (e) {
                    return e.count + " Bogmærke" + i(e.count, "", "r") + ". Bogmærke";
                }),
                t("a8dc9587", function (e) {
                    return e.count + " Bogmærke" + i(e.count, "", "r") + ". Gemt som bogmærke";
                }),
                t("d636ebc6", "Like"),
                t("eb3a8b0c", "Fjern like"),
                t("j472ecfc", "Like denne post"),
                t("dac92b0d", function (e) {
                    return e.count + " Like" + i(e.count, "", "s") + ". Like";
                }),
                t("aa650427", function (e) {
                    return e.count + " Like" + i(e.count, "", "s") + ". Likede";
                }),
                t("hdf7226a", "Svar"),
                t("c9940955", function (e) {
                    return e.count + " Svar. Svar";
                }),
                t("f2919fb8", "Repost"),
                t("fd1e5446", "Fortryd repost"),
                t("dfad425d", function (e) {
                    return e.count + " repost" + i(e.count, "", "s") + ". Repost";
                }),
                t("a386dc55", function (e) {
                    return e.count + " repost" + i(e.count, "", "s") + ". Repostede";
                }),
                t("f65198c2", "Vis citater"),
                t("dc63da16", "Del"),
                t("cee0585c", "Del post"),
                t("ceb6841c", "Når medlemmer fjernes, bliver deres posts skjult for resten af Fællesskabet."),
                t("cb731cae", "Rediger cirkel"),
                t("c33d3a84", "Det, der sker i cirklen, bliver i cirklen"),
                t("c4f10e71", "Læs mere"),
                t("b09adb0c", "Se samtale"),
                t("e4f1e6e4", function (e) {
                    return "" + e.formattedCount;
                }),
                t("daf8a75f", function (e) {
                    return "Følger";
                }),
                t("ef1f4fc6", function (e) {
                    return "" + e.formattedCount;
                }),
                t("ad9b5988", function (e) {
                    return "Følger" + i(e.count, "", "e");
                }),
                t("a9980948", function (e) {
                    return "" + e.formattedCount;
                }),
                t("ce44a35c", function (e) {
                    return "Abonnent" + i(e.count, "", "er");
                }),
                t("id949f68", function (e) {
                    return "" + e.formattedCount;
                }),
                t("hb608cfc", function (e) {
                    return "Abonnement" + i(e.count, "", "er");
                }),
                t("ef633578", "Konto suspenderet"),
                t("a6a3d496", "Indsæt link"),
                t("acce6978", "Rediger link"),
                t("f5e8f526", "Rediger"),
                t("h517e8d8", "Fjern"),
                t("a30ae58e", "Tekst til visning"),
                t("da38c958", "URL"),
                t("d5d57678", "Indsæt"),
                t("ec822028", "Udfyld dette felt"),
                t("ebc5d2cc", "Der er noget galt med denne URL-adresse. Tjek stavning og formatering af dette link."),
                t("h30a19bb", function (e) {
                    return "Dette er et cirkeldiagram. Titlen på diagrammet er " + e.chartTitle + ". Der er i alt " + e.noOfCategories + " kategorier. Minimumsværdien er " + e.minValue + " og maksimumsværdien er " + e.maxValue + ". Udforsk diagrammet med navigationsknapperne.";
                }),
                t("h39fbf33", function (e) {
                    return "Et vandret søjlediagram med dataværdier fra " + e.minValue + " til " + e.maxValue;
                }),
                t("gdd51574", "Træk for at opdatere"),
                t("e557ad8e", "Aktiv"),
                t("e3a58c28", "Vis detaljer"),
                t("db355331", function (e) {
                    return e.team + " vandt";
                }),
                t("a8428d5e", "Kommende"),
                t("a7aad8ba", "Direkte"),
                t("e431f1aa", "Sidste"),
                t("a7391708", "Udskudt"),
                t("d2dbfa92", "Annulleret"),
                t("cd734f66", "I dag"),
                t("c8891d06", "I morgen"),
                t("d2414d31", function (e) {
                    return e.count + " ulæste elementer";
                }),
                t("ce4e85ae", "Ulæste elementer"),
                t("fb9f6f39", function (e) {
                    return e.count + "+";
                }),
                t("eb124f96", "AM/PM"),
                t("i7a6f114", "Time"),
                t("ccc99ff2", "Minut"),
                t("g5662c95", function (e) {
                    return "Niveau " + e.conversationTreeDepth + ":";
                }),
                t("b3688156", "Denne bruger er i øjeblikket i et aktivt Rum. Klik for at deltage"),
                t("c0eb8825", function (e) {
                    return "@" + e.screenName + " er i øjeblikket i et aktivt Rum. Klik for at deltage";
                }),
                t("d068dc6d", function (e) {
                    return "@" + e.screenName + " er i øjeblikket i en aktiv direkte udsendelse. Klik for at se";
                }),
                t("d9fd5570", "Skjulte svar"),
                t("c566d3a6", "Skjul"),
                t("a897c4d6", "Åbner redigeringshistorik"),
                t("e07a85a2", "Post ikke tilgængelig"),
                t("ffeb2fc6", "Næste"),
                t("af2a65d9", function (e) {
                    return e.timestamp + " valgt";
                }),
                t("j3d49e93", function (e) {
                    return e.timestamp + " m";
                }),
                t("a394f905", function (e) {
                    return e.seconds + " sekunder";
                }),
                t("f42c0c80", "Slut på valgt område, brug piletasterne til at justere området"),
                t("i667afe8", "Start på valgt område, brug piletasterne til at justere området"),
                t("gfaaead8", "Unavngivet"),
                t("cfd13f46", "Tale i Dock"),
                t("eba2660a", "Blå"),
                t("hc196b78", "Blommefarvet"),
                t("c8bc49d2", "Lilla"),
                t("efff09ee", "Grøn"),
                t("fcb424ee", "Gul"),
                t("ie2215aa", "Magenta"),
                t("f106ce44", "Orange"),
                t("acddd4d4", "Rød"),
                t("cef9b062", "Blågrøn"),
                t("d9daefca", "Mørkegrå");
            var o = n(202784),
                s = [],
                l = {};
            function f(e) {
                return e;
            }
            var g = (function (e) {
                var r, n, t, g, k;
                function u() {
                    return e.apply(this, arguments) || this;
                }
                return (
                    (n = e),
                    ((r = u).prototype = Object.create(n.prototype)),
                    (r.prototype.constructor = r),
                    a(r, n),
                    (u.prototype.render = function () {
                        return o.createElement.apply(o, this[this.props.$i18n].reduce(this.templateReducer, [o.Fragment, null]));
                    }),
                    (t = u),
                    (g = [
                        {
                            key: "bb85c49d",
                            get: function () {
                                return ["X gemmer altid en kopi af et Rum til gennemgang. ", "."];
                            },
                        },
                        {
                            key: "c9af3ff7",
                            get: function () {
                                return ["Konti, du har blokeret, kan ikke deltage. Personer, der ikke er logget på X, kan muligvis lytte. "];
                            },
                        },
                        {
                            key: "e60e51b3",
                            get: function () {
                                return ["X opbevarer altid kopier af Rum i en begrænset periode for at tjekke for spam og misbrug. "];
                            },
                        },
                        {
                            key: "jd312ce9",
                            get: function () {
                                return ["Tilmeld dig Verificerede organisationer, og få $1k i annoncekredit, som du kan bruge på enhver konto i din organisation. "];
                            },
                        },
                        {
                            key: "e1a49407",
                            get: function () {
                                return ["Når du er tilmeldt X, kan du svare på ", "s post."];
                            },
                        },
                        {
                            key: "be54ed41",
                            get: function () {
                                return ["Når du tilmelder dig X, kan du dele ", "s post med dine følgere."];
                            },
                        },
                        {
                            key: "jb19eb17",
                            get: function () {
                                return ["Tilmeld dig X nu for at fortælle ", ", at du synes om vedkommendes post."];
                            },
                        },
                        {
                            key: "bbfee611",
                            get: function () {
                                return ["Følg ", " for at se, hvad vedkommende deler på X."];
                            },
                        },
                        {
                            key: "af104f2b",
                            get: function () {
                                return ["Tilmeld dig X nu, så du kan dele posten fra ", " privat."];
                            },
                        },
                        {
                            key: "ccc1f303",
                            get: function () {
                                return ["Følg ", " for udvalgte posts"];
                            },
                        },
                        {
                            key: "ce02fabf",
                            get: function () {
                                return ["Tilmeld dig X nu for at se en strøm af posts fra personer udvalgt af ", "."];
                            },
                        },
                        {
                            key: "a85608a7",
                            get: function () {
                                return ["Tilmeld dig X nu for at opdage nye og interessante samtaler om de ting, der betyder mest for dig, f.eks. ", "."];
                            },
                        },
                        {
                            key: "c76865b7",
                            get: function () {
                                return ["Søg på tværs af ", "'s posts på X."];
                            },
                        },
                        {
                            key: "e4af7661",
                            get: function () {
                                return ['X og dets partnere bruger cookies til at give dig en bedre, sikrere og hurtigere tjeneste og til at understøtte vores forretning. Nogle cookies er nødvendige for at bruge vores tjenester, forbedre vores tjenester og sikre, at de fungerer korrekt. Hvis du klikker på " Acceptér alle cookies", tillader du også X og dets partnere at bruge cookies til at vise dig annoncer og kommunikation, der er skræddersyet til dine interesser. Hvis du klikker på "Afvis unødvendige cookies", bruger vi ikke cookies til at indsamle yderligere data til skræddersyede annoncer og kommunikation. Hvis du vil vide mere, herunder hvordan du ændrer dit valg, kan du besøge cookie-siden i vores ', "."];
                            },
                        },
                        {
                            key: "a268632b",
                            get: function () {
                                return ["X og dets partnere bruger cookies til at give dig en bedre, sikrere og hurtigere tjeneste og til at understøtte vores forretning. Nogle cookies er nødvendige for at bruge vores tjenester, forbedre vores tjenester og sikre, at de fungerer korrekt. "];
                            },
                        },
                        {
                            key: "c4d3d079",
                            get: function () {
                                return ["Ved at tilmelde dig accepterer du ", " og ", ", herunder ", "."];
                            },
                        },
                        {
                            key: "j23c6259",
                            get: function () {
                                return ["Angiv links til mindst tre artikler om dig i kvalificerede nyhedspublikationer, der er udgivet i det sidste halve år. "];
                            },
                        },
                        {
                            key: "gf887169",
                            get: function () {
                                return ["Du skal opfylde specifikke krav afhængigt af den type X-konto, du har. "];
                            },
                        },
                        {
                            key: "d454b49f",
                            get: function () {
                                return ["Vælg den mulighed, der bedst beskriver din konto. "];
                            },
                        },
                        {
                            key: "hd977dd9",
                            get: function () {
                                return ["Vælg én metode til at vise, at din konto er kvalificeret til at blive verificeret som aktivist eller arrangør. "];
                            },
                        },
                        {
                            key: "e3432573",
                            get: function () {
                                return ["Du opfylder ikke minimumsgrænsen for følgere eller omtale i din region, som der kræves for at blive verificeret som aktivist. "];
                            },
                        },
                        {
                            key: "efd8f6e7",
                            get: function () {
                                return ["Angiv et link til en Google Trends-profil med dokumentation for aktuel søgeaktivitet om dig. "];
                            },
                        },
                        {
                            key: "fe54dcfd",
                            get: function () {
                                return ["Angiv et link til en Wikipedia-side om dig. Den skal indeholde mindst tre eksterne henvisninger. "];
                            },
                        },
                        {
                            key: "ie26d72d",
                            get: function () {
                                return ["Angiv et link, der henviser til dig i en ledende stilling i en verificeret interesseorganisation. Henvisningen skal komme fra det officielle websted for en verificeret organisation. "];
                            },
                        },
                        {
                            key: "af3fe861",
                            get: function () {
                                return ["Vælg en metode til at vise, at din konto er kvalificeret til at blive verificeret som en indflydelsesrig person. "];
                            },
                        },
                        {
                            key: "a08d6af3",
                            get: function () {
                                return ["Du opfylder ikke minimumsgrænsen for følgere eller omtale i din region, som der kræves for at blive verificeret som indholdsskaber eller indflydelsesrig person. "];
                            },
                        },
                        {
                            key: "f774e39d",
                            get: function () {
                                return ["Pick a method to show that your account qualifies for verification as a prominent company, brand, or organization. "];
                            },
                        },
                        {
                            key: "d8510869",
                            get: function () {
                                return ["Provide a link to a Google Trends profile with evidence of recent search activity about your company, brand, or organization. "];
                            },
                        },
                        {
                            key: "h75e3641",
                            get: function () {
                                return ["Provide a link to a Wikipedia page about your company, brand, or organization that contains at least three external references. "];
                            },
                        },
                        {
                            key: "de6d69a1",
                            get: function () {
                                return ["Provide a link showing evidence of that your company, brand, or organization is listed on a public stock exchange. "];
                            },
                        },
                        {
                            key: "be0e8fdb",
                            get: function () {
                                return ["Provide links to at least three articles about your company in verified news publications in the last six months. "];
                            },
                        },
                        {
                            key: "baed7213",
                            get: function () {
                                return ["You must hold a senior leadership position at a verified organization to be eligible for verification in this category. Add your organization’s account to confirm eligibility. "];
                            },
                        },
                        {
                            key: "c5d688cf",
                            get: function () {
                                return ["Pick a method to show that your account qualifies for verification as a senior leader of a prominent organization. "];
                            },
                        },
                        {
                            key: "fce3e22d",
                            get: function () {
                                return ["Provide links to least three articles published by verified news organizations within the last six months that reference you as a senior leader or executive at your organization. "];
                            },
                        },
                        {
                            key: "f1b276f1",
                            get: function () {
                                return ["Provide a link that references you as a senior leader at your organization. The reference must come from the official site of a verified company, brand, or organization. "];
                            },
                        },
                        {
                            key: "e2465097",
                            get: function () {
                                return ["Angiv et link til en Google Trends-profil med dokumentation for aktuel søgeaktivitet om din produktion. "];
                            },
                        },
                        {
                            key: "g83bcecd",
                            get: function () {
                                return ["Angiv links til mindst tre artikler om din produktion i kvalificerede nyhedspublikationer i det sidste halve år. "];
                            },
                        },
                        {
                            key: "f3016c6f",
                            get: function () {
                                return ["Vælg en metode til at vise, at din konto er kvalificeret til at blive verificeret som den officielle konto for en stor produktion. "];
                            },
                        },
                        {
                            key: "h74144bd",
                            get: function () {
                                return ["Angiv et link, der dokumenterer, at din produktionsorganisation er noteret på en offentlig børs. "];
                            },
                        },
                        {
                            key: "jef5dfc5",
                            get: function () {
                                return ["Angiv et link til en Wikipedia-side om din produktion, der indeholder mindst tre eksterne henvisninger. "];
                            },
                        },
                        {
                            key: "gf5a4309",
                            get: function () {
                                return ["Vælg en metode til at vise, at din konto er kvalificeret til at blive verificeret som en fremtrædende underholdningsvirksomhed. "];
                            },
                        },
                        {
                            key: "g2e175b1",
                            get: function () {
                                return ["Angiv et link til en Google Trends-profil med dokumentation for nylig søgeaktivitet om din underholdningsvirksomhed. "];
                            },
                        },
                        {
                            key: "efc369c3",
                            get: function () {
                                return ["Angiv links til mindst tre artikler om din virksomhed i kvalificerede nyhedspublikationer i det sidste halve år. "];
                            },
                        },
                        {
                            key: "ff03f07d",
                            get: function () {
                                return ["Angiv et link, der dokumenterer, at din underholdningsvirksomhed er noteret på en offentlig børs. "];
                            },
                        },
                        {
                            key: "a3e9dde3",
                            get: function () {
                                return ["Angiv et link til en Wikipedia-side om din underholdningsvirksomhed, der indeholder mindst tre eksterne henvisninger. "];
                            },
                        },
                        {
                            key: "c2b8fb3d",
                            get: function () {
                                return ["Vælg en metode til at vise, at din konto er kvalificeret til at blive verificeret som indflydelsesrig skaber af digitalt indhold. "];
                            },
                        },
                        {
                            key: "fd33ce05",
                            get: function () {
                                return ["Angiv et link til din profil som indholdsskaber. Din profil kan være på en hvilken som helst digital platform, men den skal henvise til dit X-brugernavn. "];
                            },
                        },
                        {
                            key: "bb47d2b9",
                            get: function () {
                                return ["Angiv et link til en Wikipedia-side om dig, der indeholder mindst tre eksterne henvisninger. "];
                            },
                        },
                        {
                            key: "db930fb3",
                            get: function () {
                                return ["Vælg en metode til at vise, at din konto er kvalificeret til at blive verificeret som en person i underholdningsbranchen. "];
                            },
                        },
                        {
                            key: "dc263ec1",
                            get: function () {
                                return ["Angiv et link til din profil på IMDb, der indeholder mindst 50 produktionskrediteringer. "];
                            },
                        },
                        {
                            key: "d18a48d5",
                            get: function () {
                                return ["Angiv et link, der henviser til dig som en person i underholdningsbranchen og til din X-konto. Henvisningen skal komme fra det officielle websted for en verificeret enhed. "];
                            },
                        },
                        {
                            key: "i3b4217b",
                            get: function () {
                                return ["Vælg den kategori, der bedst beskriver din konto som offentlig myndighed. "];
                            },
                        },
                        {
                            key: "ja62479f",
                            get: function () {
                                return ["Angiv links til mindst fem artikler, der er udgivet af verificerede nyhedsorganisationer inden for det sidste halve år, der henviser til dig som en kvalificeret kandidat til et offentligt embede. "];
                            },
                        },
                        {
                            key: "f28bbbb1",
                            get: function () {
                                return ["Angiv links til mindst fem artikler, der er udgivet af verificerede nyhedsorganisationer inden for det sidste halve år, der henviser til dig som en kvalificeret offentlig myndighed. "];
                            },
                        },
                        {
                            key: "b229f4b9",
                            get: function () {
                                return ["Angiv links til mindst fem artikler, der er udgivet af verificerede nyhedsorganisationer inden for det sidste halve år, og som henviser til dig som en kvalificeret statsembedsmand. "];
                            },
                        },
                        {
                            key: "e85178bd",
                            get: function () {
                                return ["Angiv et link til dit officielle kampagnewebsted, der henviser til dig som kandidat til et offentligt embede på statsligt eller nationalt niveau og til din X-konto. "];
                            },
                        },
                        {
                            key: "i499f8f7",
                            get: function () {
                                return ["Angiv et link til et officielt offentligt websted, der henviser til din offentlige myndighed eller tjeneste og til din X-konto. "];
                            },
                        },
                        {
                            key: "a394654f",
                            get: function () {
                                return ["Angiv et link, der henviser til dig som kvalificeret statsembedsmand. Henvisningen skal komme fra det officielle websted for en verificeret statslig organisation. "];
                            },
                        },
                        {
                            key: "dcb0da53",
                            get: function () {
                                return ["Journalister skal være ansat af en verificeret nyhedsorganisation eller -publikation for at blive verificeret. Angiv et link til din arbejdsgivers konto. "];
                            },
                        },
                        {
                            key: "d82a96af",
                            get: function () {
                                return ["Vælg en metode til at vise, at din konto er kvalificeret til at blive verificeret som en bemærkelsesværdig journalist. "];
                            },
                        },
                        {
                            key: "d47b4101",
                            get: function () {
                                return ["Angiv et link, der henviser til dig som journalist for din arbejdsgiver. Henvisningen skal komme fra det officielle websted for en verificeret nyhedsorganisation. "];
                            },
                        },
                        {
                            key: "a3540593",
                            get: function () {
                                return ["Angiv mindst tre bylines og/eller krediteringer i kvalificerende publikationer inden for det sidste halve år. "];
                            },
                        },
                        {
                            key: "edb782e7",
                            get: function () {
                                return ["Vælg en metode til at vise, at din konto er kvalificeret til at blive verificeret som en fremtrædende nyhedsorganisation. "];
                            },
                        },
                        {
                            key: "cc16af2d",
                            get: function () {
                                return ["Angiv et link til en Google Trends-profil med dokumentation for nylig søgeaktivitet om din nyhedsorganisation. "];
                            },
                        },
                        {
                            key: "b42b7001",
                            get: function () {
                                return ["Angiv et link til en Wikipedia-side om din nyhedsorganisation, der indeholder mindst tre eksterne henvisninger. "];
                            },
                        },
                        {
                            key: "fd2c6f63",
                            get: function () {
                                return ["Angiv et link, der dokumenterer, at din nyhedsorganisation er noteret på en offentlig børs. "];
                            },
                        },
                        {
                            key: "ec7027cd",
                            get: function () {
                                return ["Angiv links til mindst tre artikler om din nyhedsorganisation i verificerede nyhedspublikationer i det sidste halve år. "];
                            },
                        },
                        {
                            key: "a0a9f835",
                            get: function () {
                                return ["Personer inden for professionel sport skal deltage i verificerede sportsligaer og -begivenheder for at blive verificeret. Angiv et link til et hold, en liga, en begivenhed eller en organisation, der er relevant for din konto, og som er verificeret."];
                            },
                        },
                        {
                            key: "iba551d5",
                            get: function () {
                                return ["Du opfylder ikke minimumsgrænsen for følgere i din region, som der kræves for at blive verificeret som person inden for gaming. "];
                            },
                        },
                        {
                            key: "h515e869",
                            get: function () {
                                return ["Personer inden for e-sport/gaming skal konkurrere i verificerede e-sportsligaer og -begivenheder for at blive verificeret. Angiv et link til et hold, en liga, en begivenhed eller en organisation, der er relevant for din konto, og som er verificeret."];
                            },
                        },
                        {
                            key: "d2cd7f89",
                            get: function () {
                                return ["Vælg en metode til at vise, at din konto er kvalificeret til at blive verificeret som fremtrædende sportsliga, sportshold eller global konkurrence. "];
                            },
                        },
                        {
                            key: "c68614a3",
                            get: function () {
                                return ["Angiv et link til en Google Trends-profil med dokumentation for aktuel søgeaktivitet om din professionelle sportsorganisation. "];
                            },
                        },
                        {
                            key: "b4ea622f",
                            get: function () {
                                return ["Angiv et link til en Wikipedia-side om din professionelle sportsorganisation, der indeholder mindst tre eksterne henvisninger. "];
                            },
                        },
                        {
                            key: "acab99f7",
                            get: function () {
                                return ["Angiv et link, der dokumenterer, at din professionelle sportsorganisation er noteret på en offentlig børs. "];
                            },
                        },
                        {
                            key: "df0b2577",
                            get: function () {
                                return ["Angiv et link til det officielle websted for en global konkurrence eller professionel sportsorganisation, der henviser til dig som liga, hold eller konkurrence. "];
                            },
                        },
                        {
                            key: "jfda4c29",
                            get: function () {
                                return ["Angiv links til mindst tre artikler om din organisation i verificerede nyhedspublikationer i det sidste halve år. "];
                            },
                        },
                        {
                            key: "g3299df1",
                            get: function () {
                                return ["Vælg én metode til at vise, at din konto er kvalificeret til at blive verificeret som en professionel sportsudøver. "];
                            },
                        },
                        {
                            key: "id6bbc01",
                            get: function () {
                                return ["Vælg en metode til at vise, at din konto er kvalificeret til at blive verificeret som en person inden for e-sport/gaming. "];
                            },
                        },
                        {
                            key: "fbe119c5",
                            get: function () {
                                return ["Angiv et link til det officielle websted for en global sportsbegivenhed eller professionel sportsorganisation, der henviser til dig som professionel sportsudøver, leder eller træner. "];
                            },
                        },
                        {
                            key: "da0e7f33",
                            get: function () {
                                return ["Angiv et link til det officielle websted for en verificeret e-sportsliga eller -begivenhed, der henviser til dig som holdmedlem, træner eller leder. "];
                            },
                        },
                        {
                            key: "ca20e39f",
                            get: function () {
                                return ["Vi kan desværre ikke behandle flere verifikationsanmodninger i øjeblikket. Kom tilbage senere, og prøv igen. "];
                            },
                        },
                        {
                            key: "jf9308af",
                            get: function () {
                                return ["Hvis du vil verificere din identitet via e-mail, skal du have en tidligere verificeret adresse. Gå til ", " for at gøre dette."];
                            },
                        },
                        {
                            key: "e9976a41",
                            get: function () {
                                return ["Hvis du vil verificere din identitet via e-mail, skal du have en verificeret e-mailadresse, der opfylder vores kvalifikationskrav. Gå til ", " for at gøre dette."];
                            },
                        },
                        {
                            key: "e5b4cc43",
                            get: function () {
                                return ["Verifikation er for bemærkelsesværdige personer eller grupper i en bestemt kategori. Hvis det lyder som dig, så start en verifikationsanmodning. "];
                            },
                        },
                        {
                            key: "bfb355fb",
                            get: function () {
                                return ["Sørg for, at dit ansigt og teksten på dit id ses klart og tydeligt og kan læses. Ellers skal du muligvis indsende det igen. X modtager ikke og gemmer ikke en kopi af dit id. "];
                            },
                        },
                        {
                            key: "d65a41c3",
                            get: function () {
                                return ["Se vores ", " for at få flere oplysninger om, hvordan du kan få adgang til eller rette indsendte data."];
                            },
                        },
                        {
                            key: "a1c39f5b",
                            get: function () {
                                return ["Du bliver kontaktet, så snart der er truffet en beslutning. Der kan gå op til " + this.props.days + " dag" + i(this.props.days, "", "e") + "."];
                            },
                        },
                        {
                            key: "ja826537",
                            get: function () {
                                return ["Hjælp os med at blive bedre, med en hurtig ", "."];
                            },
                        },
                        {
                            key: "b7be91bf",
                            get: function () {
                                return ["Din sidste anmodning blev afvist den " + this.props.date + ". Du skal vente i 30 dage fra den dato, før du indsender en ny anmodning."];
                            },
                        },
                        {
                            key: "jcb00a95",
                            get: function () {
                                return ["Din sidste anmodning er fra den " + this.props.date + ". Du skal vente i 30 dage fra den dato, før du indsender en ny anmodning."];
                            },
                        },
                        {
                            key: "j92ea4b9",
                            get: function () {
                                return ["Din sidste anmodning er fra den " + this.props.date + ". Du bliver kontaktet, så snart der er truffet en beslutning."];
                            },
                        },
                        {
                            key: "jbcd22b1",
                            get: function () {
                                return ["Ha' det sjovt, og husk at overholde ", "."];
                            },
                        },
                        {
                            key: "hcecd237",
                            get: function () {
                                return ["Det er disse apps, som du forbinder til din konto. Du kan se, hvilke oplysninger disse apps har adgang til og fjerne adgangen. "];
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
                                return ["Personer, som du følger, kan altid sende dig beskeder. "];
                            },
                        },
                        {
                            key: "d79b6b7b",
                            get: function () {
                                return ["Tilknyt en administrationskonto, så din automatiserede konto får et mærke til automatiseret konto. Alle automatiserede konti skal være tilknyttet en administrationskonto. "];
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
                                return ["Vi forsøger at opretholde et godt samtaleklima på X. Derfor har vi deaktiveret hovedparten af de funktioner, der bruges til at interagere med denne post. Hvis du vil tale om den, kan du stadig oprette et citat. "];
                            },
                        },
                        {
                            key: "i2a606d1",
                            get: function () {
                                return ["Vi forsøger at opretholde et godt samtaleklima på X. Derfor har vi deaktiveret hovedparten af de funktioner, der bruges til at interagere med denne post. "];
                            },
                        },
                        {
                            key: "fe93026b",
                            get: function () {
                                return ["Kun @" + this.props.username + " og dennes cirkel kan se disse posts."];
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
                                return ["De fastsættes og håndhæves af Fællesskabets administratorer og supplerer ", "."];
                            },
                        },
                        {
                            key: "gb7eca21",
                            get: function () {
                                return ["Fællesskaber er offentlige, så beskyttede konti kan ikke deltage lige nu. Du kan læse postsene, men hvis du vil deltage, ", "."];
                            },
                        },
                        {
                            key: "jb124a07",
                            get: function () {
                                return ["Du blev fjernet af en moderator for overtrædelse af denne Fællesskabsregel: "];
                            },
                        },
                        {
                            key: "d6d818a1",
                            get: function () {
                                return [this.props.viewerCount + " visninger"];
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
                                return ["GIF via "];
                            },
                        },
                        {
                            key: "i9606e33",
                            get: function () {
                                return ["Video via "];
                            },
                        },
                        {
                            key: "i1a64d47",
                            get: function () {
                                return ["Billede via "];
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
                                return ['Søg i stedet efter "', '"'];
                            },
                        },
                        {
                            key: "hce48b8b",
                            get: function () {
                                return ['Mente du "', '"?'];
                            },
                        },
                        {
                            key: "f8ea2809",
                            get: function () {
                                return [this.props.selection + " kan svare nu"];
                            },
                        },
                        {
                            key: "hb92c979",
                            get: function () {
                                return ["", "/" + this.props.maxLimit + " tegn"];
                            },
                        },
                        {
                            key: "a20c0721",
                            get: function () {
                                return ["Sidst redigeret: "];
                            },
                        },
                        {
                            key: "a9ce2dd5",
                            get: function () {
                                return ["", " for at få hjælp og sådan gør du."];
                            },
                        },
                        {
                            key: "e2e6ea0d",
                            get: function () {
                                return ["via "];
                            },
                        },
                        {
                            key: "bd7349bb",
                            get: function () {
                                return ["Sidst gemt "];
                            },
                        },
                        {
                            key: "hb16b207",
                            get: function () {
                                return ["Udgivelsen af ", " vil blive annulleret, den vil blive flyttet til dine udkast og vil ikke være synlig for offentligheden."];
                            },
                        },
                        {
                            key: "dd5806bb",
                            get: function () {
                                return ["Det følgende medie har potentielt ømtåleligt indhold. "];
                            },
                        },
                        {
                            key: "d247a0b9",
                            get: function () {
                                return ["Redigeringsfunktionalitet er begrænset til oprindelige posts og inkluderer ikke ting såsom svar eller tråde. ", " om, hvad du kan redigere."];
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
                                return ["Vil du redigere din cirkel? Bare gør det. Folk får ikke besked, hvis du fjerner dem. ", "."];
                            },
                        },
                        {
                            key: "j0b75ce7",
                            get: function () {
                                return ["", " den nye artikelskriver for at få nye formateringsmuligheder."];
                            },
                        },
                        {
                            key: "dd964cf3",
                            get: function () {
                                return ["Fællesskaber er offentlige, så beskyttede konti kan ikke deltage i samtalen. Du kan læse og like posts, men hvis du vil gøre mere, ", "."];
                            },
                        },
                        {
                            key: "e34022a7",
                            get: function () {
                                return ["Svarer "];
                            },
                        },
                        {
                            key: "bfd9c99b",
                            get: function () {
                                return ["Svarer "];
                            },
                        },
                        {
                            key: "g7a1000f",
                            get: function () {
                                return ["Svarer "];
                            },
                        },
                        {
                            key: "i558c201",
                            get: function () {
                                return ["Svarer "];
                            },
                        },
                        {
                            key: "j935bcdf",
                            get: function () {
                                return ["Svarer ", " i " + this.props.communityName];
                            },
                        },
                        {
                            key: "i7bd9c8f",
                            get: function () {
                                return ["Svarer ", " i " + this.props.communityName];
                            },
                        },
                        {
                            key: "cfa0049d",
                            get: function () {
                                return ["Svarer ", " i " + this.props.communityName];
                            },
                        },
                        {
                            key: "jfc8e4b5",
                            get: function () {
                                return ["Svarer ", " i " + this.props.communityName];
                            },
                        },
                        {
                            key: "fe06c9f5",
                            get: function () {
                                return ["Svarer ", ". Dit svar er også synligt for vedkommendes ", "."];
                            },
                        },
                        {
                            key: "f7e12e15",
                            get: function () {
                                return ["Svarer ", ". Dit svar er også synligt for deres ", "."];
                            },
                        },
                        {
                            key: "eade6035",
                            get: function () {
                                return ["Svarer ", ". Dit svar er også synligt for deres ", "."];
                            },
                        },
                        {
                            key: "da018b37",
                            get: function () {
                                return ["Svarer ", ". Dit svar er også synligt for deres ", "."];
                            },
                        },
                        {
                            key: "e119d033",
                            get: function () {
                                return ["Svarer ", ". " + this.props.trustedFriendsTweetOwner + "s cirkel, som følger dig, kan også se dit svar."];
                            },
                        },
                        {
                            key: "d0c02e7b",
                            get: function () {
                                return ["Svarer ", ". " + this.props.trustedFriendsTweetOwner + "s cirkel kan også se dit svar."];
                            },
                        },
                        {
                            key: "bce67b49",
                            get: function () {
                                return ["Svarer ", ". ", " cirkel, som følger dig, kan også se dit svar."];
                            },
                        },
                        {
                            key: "e460ccf1",
                            get: function () {
                                return ["Svarer ", ". ", " cirkel kan også se dit svar."];
                            },
                        },
                        {
                            key: "i421898b",
                            get: function () {
                                return ["Svarer ", ". ", " cirkel, som følger dig, kan også se dit svar."];
                            },
                        },
                        {
                            key: "c70a17eb",
                            get: function () {
                                return ["Svarer ", ". ", " cirkel kan også se dit svar."];
                            },
                        },
                        {
                            key: "b0d6bca7",
                            get: function () {
                                return ["Svarer ", ". ", " cirkel, som følger dig, kan også se dit svar."];
                            },
                        },
                        {
                            key: "aacf46d1",
                            get: function () {
                                return ["Svarer ", ". ", " cirkel kan også se dit svar."];
                            },
                        },
                        {
                            key: "ff2f533f",
                            get: function () {
                                return ["Ved at klikke på Promover post accepterer du "];
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
                                return ["Din nye e-mail " + this.props.unverifiedEmail + " er ikke blevet bekræftet. "];
                            },
                        },
                        {
                            key: "f05afae5",
                            get: function () {
                                return ["Hvis du skifter adgangskode, logges du af samtlige aktive X-sessioner, undtagen den du bruger på nuværende tidspunkt. Den ", ", som har adgang til din konto, påvirkes ikke. "];
                            },
                        },
                        {
                            key: "d3543217",
                            get: function () {
                                return ["Jeg accepterer, at X og Persona kan bruge billeder af mit ID og min selfie, herunder udtrukne biometriske data, til at verificere min identitet og til X's relaterede sikkerhed, forebyggelse af svindel og betalingsformål. Persona kan gemme sådanne data i op til 30 dage. X kan gemme fuldt navn, adresse og hashes af mit dokument-ID-nummer, så længe jeg abonnerer på ", "."];
                            },
                        },
                        {
                            key: "j7963df1",
                            get: function () {
                                return ["Jeg accepterer, at X og Au10tix bruger billeder af mit id og min selfie, herunder ekstraherede biometriske data, til at bekræfte min identitet og til X's relaterede formål vedrørende sikkerhed, forebyggelse af bedrageri og betaling. Au10tix må gemme disse data i op til 30 dage. X må gemme mit fulde navn, min adresse og hashværdien af mit dokument-id-nummer, så længe jeg deltager i programmet ", " eller ", ". "];
                            },
                        },
                        {
                            key: "f8f20041",
                            get: function () {
                                return ["Jeg accepterer, at X og Au10tix bruger billeder af mit id og min selfie, herunder ekstraherede biometriske data, til at bekræfte min identitet og til X's relaterede formål vedrørende sikkerhed, forebyggelse af bedrageri og betaling. Au10tix må gemme disse data i op til 30 dage. X må gemme mit fulde navn, min adresse og hashværdien af mit dokument-id-nummer, så længe jeg deltager i programmet ", " eller ", ". "];
                            },
                        },
                        {
                            key: "dd49801f",
                            get: function () {
                                return ["Jeg accepterer, at X og Stripe bruger billeder af mit id og min selfie, herunder ekstraherede biometriske data, til at bekræfte min identitet og til X's relaterede formål vedrørende sikkerhed, forebyggelse af bedrageri og betaling. Stripe eller dets underleverandører må gemme sådanne data i op til 30 dage og må bruge dem til at træne modeller og opdatere databaser med henblik på at opdage svindel. X må gemme mit fulde navn, min adresse og hashværdien af mit dokument-id-nummer, så længe jeg deltager i programmet ", " eller ", "."];
                            },
                        },
                        {
                            key: "c5cee667",
                            get: function () {
                                return ["Jeg accepterer, at X og Stripe bruger billeder af mit id og min selfie, herunder ekstraherede biometriske data, til at bekræfte min identitet og til X's relaterede formål vedrørende sikkerhed, forebyggelse af bedrageri og betaling. Stripe eller dets underleverandører må gemme sådanne data i op til 30 dage og må bruge dem til at træne modeller og opdatere databaser med henblik på at opdage svindel. X må gemme mit fulde navn, min adresse og hashværdien af mit dokument-id-nummer, så længe jeg deltager i programmet ", " eller ", "."];
                            },
                        },
                        {
                            key: "a4455c05",
                            get: function () {
                                return ["Skriv den ned, eller tag et skærmbillede, og opbevar den er sikkert sted. Denne kode kan kun bruges én gang. "];
                            },
                        },
                        {
                            key: "cd68cf4b",
                            get: function () {
                                return ["Dette er det primære land, der er knyttet til din konto. Dit land hjælper os med at tilpasse din X-oplevelse. "];
                            },
                        },
                        {
                            key: "g66a254b",
                            get: function () {
                                return ["Dette er de kontakter, som du har importeret fra dine mobilenheder. Disse oplysninger bruges til at tilpasse din oplevelse på X, f.eks. foreslåede konti du kan følge. Du kan fjerne kontakter, du tidligere har uploadet, og deaktivere synkronisering med X på alle enheder. Vær opmærksom på, at dette tager noget tid. "];
                            },
                        },
                        {
                            key: "ffa48331",
                            get: function () {
                                return ["Hvis den er aktiveret, kan du føje lokalitetsoplysninger til dine posts. "];
                            },
                        },
                        {
                            key: "a629c16f",
                            get: function () {
                                return ["", " " + this.props.discountedPrice + " faktureres månedligt i " + i(this.props.duration, "én måned", this.props.duration + " måneder")];
                            },
                        },
                        {
                            key: "c142e70f",
                            get: function () {
                                return ["", " " + this.props.discountedPrice + ", som faktureres årligt i " + i(this.props.duration, "et", "" + this.props.duration) + " år"];
                            },
                        },
                        {
                            key: "e9dc8a25",
                            get: function () {
                                return ["", " ", " i " + i(this.props.duration, "ét", "" + this.props.duration) + " år"];
                            },
                        },
                        {
                            key: "f8a9cbb7",
                            get: function () {
                                return ["", " ", " i " + i(this.props.duration, "én måned", this.props.duration + " måneder")];
                            },
                        },
                        {
                            key: "ab3bf5a7",
                            get: function () {
                                return ["Når du blokerer en person, kan vedkommende ikke følge dig eller sende dig beskeder, og du får ikke vist meddelelser fra personen. "];
                            },
                        },
                        {
                            key: "g124fce9",
                            get: function () {
                                return ["Visse kontooplysninger kan muligvis stadig findes i søgemaskiner som Google eller Bing. "];
                            },
                        },
                        {
                            key: "d9ef8fbb",
                            get: function () {
                                return ["Hvis du bare vil ændre dit brugernavn, er det ikke nødvendigt at deaktivere kontoen. Du kan ændre det i ", "."];
                            },
                        },
                        {
                            key: "b7a3adc1",
                            get: function () {
                                return ["Hvis du vil bruge dit nuværende brugernavn eller din aktuelle e-mailadresse på en anden X-konto, skal du ", ", før du deaktiverer denne konto."];
                            },
                        },
                        {
                            key: "f3613d0b",
                            get: function () {
                                return ["Hvis du vil downloade ", ", skal du fuldføre både anmodnings- og downloadprocessen, før du deaktiverer kontoen. Links til download af dine data kan ikke sendes til deaktiverede konti."];
                            },
                        },
                        {
                            key: "e9dec56f",
                            get: function () {
                                return ["Du bekræfter, at ", " er korrekt. I modsat fald kan din konto blive påvirket."];
                            },
                        },
                        {
                            key: "cfd2909d",
                            get: function () {
                                return ["X bruger din alder til at tilpasse din oplevelse, herunder annoncer, som forklaret i vores ", "."];
                            },
                        },
                        {
                            key: "jea9c1cb",
                            get: function () {
                                return ["Du kan styre, hvem der ser din fødselsdato på X. "];
                            },
                        },
                        {
                            key: "d80a7547",
                            get: function () {
                                return ["", " er vært"];
                            },
                        },
                        {
                            key: "j7293d6b",
                            get: function () {
                                return ["", " er medvært"];
                            },
                        },
                        {
                            key: "df79977f",
                            get: function () {
                                return ["", " taler"];
                            },
                        },
                        {
                            key: "ad960f39",
                            get: function () {
                                return ["", " lytter"];
                            },
                        },
                        {
                            key: "bab4ce51",
                            get: function () {
                                return [this.props.start + "-" + this.props.end];
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
                                return ["Opret "];
                            },
                        },
                        {
                            key: "ca584c31",
                            get: function () {
                                return ["Der findes allerede en virksomhed med dette websted. Mente du ", "?"];
                            },
                        },
                        {
                            key: "eb96a831",
                            get: function () {
                                return ["Disse filtre påvirker ikke meddelelser fra personer, du følger. "];
                            },
                        },
                        {
                            key: "aba5a349",
                            get: function () {
                                return ["Du kan skjule ét ord, @brugernavn, hashtag eller én sætning ad gangen. "];
                            },
                        },
                        {
                            key: "f03ea36d",
                            get: function () {
                                return ["Når du skjuler ord, får du ikke længere nye meddelelser for posts, der indeholder dem, og du får heller ikke vist posts med disse ord på din forsidetidslinje. "];
                            },
                        },
                        {
                            key: "b0b13519",
                            get: function () {
                                return ["Her er alle, som du har skjult. Du kan tilføje eller fjerne dem fra listen. "];
                            },
                        },
                        {
                            key: "e212a9ab",
                            get: function () {
                                return ["Administrer dine præferencer for visning af ømtåleligt indhold på X. Læs mere om vores ", "."];
                            },
                        },
                        {
                            key: "cbc4f32d",
                            get: function () {
                                return ["Dette inkluderer andet indhold, der er markeret som ømtåleligt, f.eks. indhold fra konti, der har markeret deres ", " som ømtålelige."];
                            },
                        },
                        {
                            key: "a4fc317d",
                            get: function () {
                                return ["Din konto er blevet markeret og kan ikke deltage i programmet til indtægtsdeling for skabere. Du kan appellere ved at følge instruktionerne ", ". Du vil fortsat få tilskrevet en andel af indtægterne, mens din appel behandles."];
                            },
                        },
                        {
                            key: "a8e78be7",
                            get: function () {
                                return ["Din konto er blevet markeret og kan ikke deltage i programmet til deling af annonceindtægter. Du kan appellere ved at følge instruktionerne ", ". Du vil fortsat få tilskrevet en andel af indtægterne, mens din appel behandles."];
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
                                return ["Abonner på", "" + this.props.name];
                            },
                        },
                        {
                            key: "ede65a59",
                            get: function () {
                                return ["Vil du gerne vide, hvad du kan tjene? "];
                            },
                        },
                        {
                            key: "a9c053c7",
                            get: function () {
                                return ["Ved at ansøge, accepterer du at være bundet af "];
                            },
                        },
                        {
                            key: "geee69df",
                            get: function () {
                                return ["Vælg en månedlig pris, der giver mening for dig og din målgruppe. Gad vide, hvad du kan tjene? "];
                            },
                        },
                        {
                            key: "fdf28443",
                            get: function () {
                                return ["Ved at vælge at acceptere og fortsætte, accepterer du at være bundet af "];
                            },
                        },
                        {
                            key: "f43d68d7",
                            get: function () {
                                return ["Dobbelttjek og bekræft din abonnementspris. ", ", mens abonnementer er i testperioden."];
                            },
                        },
                        {
                            key: "h406634b",
                            get: function () {
                                return ["Vi har bekræftet din Stripe-konto. Abonnementer på din konto vil gå på direkte om kort tid. Vi sender dig en meddelelse, så snart de er på direkte. Du kan også besøge din profil for at se, om abonnementer er aktiveret."];
                            },
                        },
                        {
                            key: "d4b0b963",
                            get: function () {
                                return ["Hvis du trykker nedenfor, accepterer du ", "."];
                            },
                        },
                        {
                            key: "j2d920f7",
                            get: function () {
                                return ['Ved at vælge "Deltag og verificer id" accepterer du '];
                            },
                        },
                        {
                            key: "fde94f97",
                            get: function () {
                                return ['Ved at vælge "Deltag og verificer id" accepterer du '];
                            },
                        },
                        {
                            key: "afbd47cb",
                            get: function () {
                                return ["Tjen penge på de annoncer, der vises i svarene på dine indlæg. For at være kvalificeret til annonceindtægtsprogrammet skal din konto overholde ", ", ", "."];
                            },
                        },
                        {
                            key: "ce6f73c7",
                            get: function () {
                                return ["Bestem, hvordan X tilpasser din oplevelse, i "];
                            },
                        },
                        {
                            key: "j31f2f97",
                            get: function () {
                                return ["Ja, alle automatiserede konti skal mærkes. Dette er et krav ifølge vores ", "."];
                            },
                        },
                        {
                            key: "ed8f77d3",
                            get: function () {
                                return ["Lær mere på siden med ", "."];
                            },
                        },
                        {
                            key: "dd040d67",
                            get: function () {
                                return ["Læs mere på siden med vores ", "."];
                            },
                        },
                        {
                            key: "if2bb997",
                            get: function () {
                                return ["Vi er kede af, at du forlader os. #Farvel"];
                            },
                        },
                        {
                            key: "i1e24825",
                            get: function () {
                                return ["Hvis du ikke har angivet en fødselsdato, har vi angivet et aldersinterval baseret på din X-profil og aktivitet. Aldersoplysninger bruges til at tilpasse din oplevelse. "];
                            },
                        },
                        {
                            key: "a200fc71",
                            get: function () {
                                return ["Forkert? Du kan føje din fødselsdato til ", ", uden at datoen vises offentligt."];
                            },
                        },
                        {
                            key: "a97ef88f",
                            get: function () {
                                return ["Skræddersyede målgrupper opbygges som regel ud fra e-maillister eller browsingadfærd. De hjælper annoncørerne til at nå ud til potentielle kunder eller folk, der allerede har udvist interesse for deres virksomhed. "];
                            },
                        },
                        {
                            key: "f451c521",
                            get: function () {
                                return ["Du indgår aktuelt i ", " fra "];
                            },
                        },
                        {
                            key: "f27cc8af",
                            get: function () {
                                return ["Hvis du vil slå denne til, skal du gå til dine indstillinger for ", ', og slå "Tilpas efter din udledte identitet" til.'];
                            },
                        },
                        {
                            key: "h0085c59",
                            get: function () {
                                return ["Hvis du vil slå denne til, skal du gå til indstillingerne for din ", ', og slå "Tilpas efter din udledte identitet" til.'];
                            },
                        },
                        {
                            key: "b78e30fd",
                            get: function () {
                                return ['Du kan fjerne disse oplysninger ved at deaktivere "Tilpas efter din udledte identitet" i ', "."];
                            },
                        },
                        {
                            key: "bb593021",
                            get: function () {
                                return ['Du kan fjerne disse oplysninger ved at deaktivere "Tilpas efter din udledte identitet" i ', "."];
                            },
                        },
                        {
                            key: "h60f45ef",
                            get: function () {
                                return ['Dette er hashværdien af e-mailadresser, som vi har udledt, og som har komponenter til fælles med den e-mailadresse, du har opgivet til X. Du kan fjerne disse oplysninger ved at deaktivere indstillingen "Tilpas efter din udledte identitet" i ', "."];
                            },
                        },
                        {
                            key: "cbcb2413",
                            get: function () {
                                return ["Dette er de enheder, som X bruger til at forbedre og måle din oplevelse i denne browser. "];
                            },
                        },
                        {
                            key: "e21b623d",
                            get: function () {
                                return ["Dette er de browsere og enheder, der er knyttet til dig. "];
                            },
                        },
                        {
                            key: "i4d58f43",
                            get: function () {
                                return ["Dette er de browsere, enheder og oplysninger, som X bruger til at tilpasse din oplevelse. Dette omfatter enheder og browsere, som du ikke har brugt til at logge ind på X, samt e-mailadresser og telefonnumre som dem, der er knyttet til din X-konto. "];
                            },
                        },
                        {
                            key: "a1fdeb45",
                            get: function () {
                                return ["Gå til dine ", " for at slå det til."];
                            },
                        },
                        {
                            key: "hcb3ad67",
                            get: function () {
                                return ["Hvis du bemærker mistænkelig aktivitet fra en app, skal du gå til ", " for at fjerne dens adgang. I nogle tilfælde kan IP-lokaliteten afvige fra din fysiske placering. "];
                            },
                        },
                        {
                            key: "adc26d49",
                            get: function () {
                                return ["X's partnere opbygger målgrupper ud fra købsbeslutninger, livsstil og anden online- og offlineadfærd. "];
                            },
                        },
                        {
                            key: "efc1de65",
                            get: function () {
                                return ["Dine X-data kunne ikke sendes, fordi der opstod en fejl. ", " for at anmode om dine data."];
                            },
                        },
                        {
                            key: "f0e84609",
                            get: function () {
                                return ["", " siden"];
                            },
                        },
                        {
                            key: "b76d6eb7",
                            get: function () {
                                return ["Kun de øverste 1000 gæster bliver vist. Der kan være personer, som lytter anonymt, eller som ikke er logget ind på X. ", "."];
                            },
                        },
                        {
                            key: "idcd199b",
                            get: function () {
                                return [this.props.minutes + " m " + this.props.seconds + " s"];
                            },
                        },
                        {
                            key: "ee530bbf",
                            get: function () {
                                return [this.props.hours + " t " + this.props.minutes + " m"];
                            },
                        },
                        {
                            key: "bff29c95",
                            get: function () {
                                return ["", " ændrede gruppebilledet"];
                            },
                        },
                        {
                            key: "b16e4d45",
                            get: function () {
                                return ["Du ændrede gruppenavnet til "];
                            },
                        },
                        {
                            key: "c5760699",
                            get: function () {
                                return ["", " ændrede gruppenavnet til "];
                            },
                        },
                        {
                            key: "a72730a1",
                            get: function () {
                                return ["Gruppenavnet blev ændret til "];
                            },
                        },
                        {
                            key: "a4bc88c3",
                            get: function () {
                                return ["", " tilføjede "];
                            },
                        },
                        {
                            key: "bfdff0c3",
                            get: function () {
                                return ["", " er tilføjet"];
                            },
                        },
                        {
                            key: "fc10875f",
                            get: function () {
                                return ["", " gik"];
                            },
                        },
                        {
                            key: "fa95b019",
                            get: function () {
                                return ["", " tilføjede dig"];
                            },
                        },
                        {
                            key: "e3534477",
                            get: function () {
                                return ["Der er ", " i denne gruppe"];
                            },
                        },
                        {
                            key: "b6656851",
                            get: function () {
                                return ["Der er " + this.props.count + " anden person" + i(this.props.count, "", "er") + " i denne gruppe"];
                            },
                        },
                        {
                            key: "d6db6323",
                            get: function () {
                                return ["Denne post kan indeholde ømtåleligt indhold. "];
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
                                return ["Beskeder er krypteret. "];
                            },
                        },
                        {
                            key: "af0bb3eb",
                            get: function () {
                                return ["Du kan ikke sende krypterede direkte beskeder til denne person. "];
                            },
                        },
                        {
                            key: "b9f61623",
                            get: function () {
                                return ["Du kan ikke længere sende beskeder til denne person. "];
                            },
                        },
                        {
                            key: "h27b1291",
                            get: function () {
                                return ["Denne krypterede samtale er ikke tilgængelig på din nuværende enhed. Hvis du vil have adgang til den, skal du logge ind fra din tidligere enhed. "];
                            },
                        },
                        {
                            key: "bcabe3f5",
                            get: function () {
                                return ["Du kan ikke sende en besked til denne gruppe, fordi du ikke er verificeret. "];
                            },
                        },
                        {
                            key: "jdef4bc7",
                            get: function () {
                                return ["Du kan ikke sende en besked til denne bruger, fordi du ikke er verificeret. "];
                            },
                        },
                        {
                            key: "i005f1fd",
                            get: function () {
                                return ["Du svarede på ", "s Fleet: "];
                            },
                        },
                        {
                            key: "b35cee41",
                            get: function () {
                                return ["Svarede på dit Fleet: "];
                            },
                        },
                        {
                            key: "dc4b75a1",
                            get: function () {
                                return ["", " sendte en GIF"];
                            },
                        },
                        {
                            key: "hcbbbb35",
                            get: function () {
                                return ["", " sendte et link"];
                            },
                        },
                        {
                            key: "c1e1f849",
                            get: function () {
                                return ["", " sendte et billede"];
                            },
                        },
                        {
                            key: "c7e2464f",
                            get: function () {
                                return ["", " sendte en sticker"];
                            },
                        },
                        {
                            key: "eee2f121",
                            get: function () {
                                return ["", " sendte en video"];
                            },
                        },
                        {
                            key: "be5a9617",
                            get: function () {
                                return ["", " sendte en talebesked"];
                            },
                        },
                        {
                            key: "e802e257",
                            get: function () {
                                return ["", " delte en post"];
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
                                return ["Du reagerede på videoen fra @", " med "];
                            },
                        },
                        {
                            key: "d764af97",
                            get: function () {
                                return ["", " reagerede på videoen fra @", " med "];
                            },
                        },
                        {
                            key: "ab1cdfe3",
                            get: function () {
                                return ["Du reagerede på en video med "];
                            },
                        },
                        {
                            key: "f0cf1699",
                            get: function () {
                                return ["", " reagerede på en video med "];
                            },
                        },
                        {
                            key: "hec0fd4d",
                            get: function () {
                                return ["Du reagerede på billedet fra @", " med "];
                            },
                        },
                        {
                            key: "j55320df",
                            get: function () {
                                return ["", " reagerede på billedet fra @", " med "];
                            },
                        },
                        {
                            key: "jf27606b",
                            get: function () {
                                return ["Du reagerede på et billede med "];
                            },
                        },
                        {
                            key: "cd110359",
                            get: function () {
                                return ["", " reagerede på et billede med "];
                            },
                        },
                        {
                            key: "e70dcc35",
                            get: function () {
                                return ["Du reagerede på GIF'en fra @", " med "];
                            },
                        },
                        {
                            key: "g1bf440b",
                            get: function () {
                                return ["", " reagerede på GIF'en fra @", " med "];
                            },
                        },
                        {
                            key: "b2da1bf9",
                            get: function () {
                                return ["Du reagerede på en GIF med "];
                            },
                        },
                        {
                            key: "g84c0421",
                            get: function () {
                                return ["", " reagerede på en GIF med "];
                            },
                        },
                        {
                            key: "hc1bd66d",
                            get: function () {
                                return ["Du reagerede på @", "s post med "];
                            },
                        },
                        {
                            key: "bd3edf13",
                            get: function () {
                                return ["", " reagerede på @", "s post med "];
                            },
                        },
                        {
                            key: "df2dc76f",
                            get: function () {
                                return ["Du reagerede på en post med "];
                            },
                        },
                        {
                            key: "aba18aef",
                            get: function () {
                                return ["", " reagerede på en post med "];
                            },
                        },
                        {
                            key: "cd2e7c19",
                            get: function () {
                                return ["Du reagerede på linket fra @", " med "];
                            },
                        },
                        {
                            key: "aee9e7fb",
                            get: function () {
                                return ["", " reagerede på linket fra @", " med "];
                            },
                        },
                        {
                            key: "f9fb1cf7",
                            get: function () {
                                return ["Du reagerede på et link med "];
                            },
                        },
                        {
                            key: "f2bf910f",
                            get: function () {
                                return ["", " reagerede på et link med "];
                            },
                        },
                        {
                            key: "i6cec545",
                            get: function () {
                                return ["Du reagerede på beskeden fra @", " med ", ": "];
                            },
                        },
                        {
                            key: "d6998bab",
                            get: function () {
                                return ["", " reagerede på beskeden fra @", " med ", ": "];
                            },
                        },
                        {
                            key: "cec676f3",
                            get: function () {
                                return ["Du reagerede med ", ": "];
                            },
                        },
                        {
                            key: "a2706f9b",
                            get: function () {
                                return ["", " reagerede med ", ": "];
                            },
                        },
                        {
                            key: "ff973a65",
                            get: function () {
                                return ["Du reagerede på en talebesked fra @", " med "];
                            },
                        },
                        {
                            key: "ec2cede5",
                            get: function () {
                                return ["", " reagerede på en talebesked fra @", " med "];
                            },
                        },
                        {
                            key: "i1d08199",
                            get: function () {
                                return ["Du reagerede på en talebesked med "];
                            },
                        },
                        {
                            key: "d424b45f",
                            get: function () {
                                return ["", " reagerede på en talebesked med "];
                            },
                        },
                        {
                            key: "d6b15bbf",
                            get: function () {
                                return ["Du reagerede med "];
                            },
                        },
                        {
                            key: "ac0d4bc7",
                            get: function () {
                                return ["", " reagerede med "];
                            },
                        },
                        {
                            key: "fa4f5b49",
                            get: function () {
                                return ["X's systemer scanner delte links og medier for spam, misbrug og forbudt indhold. Vi analyserer også brugsmønstre for at opdage mistænkelig adfærd og forbedre din oplevelse. Vi gennemgår muligvis dine direkte beskeder manuelt for at undersøge indberettede overtrædelser og misbrug af vores tjeneste eller for at overholde love eller statslige anmodninger. Se vores ", " for at få flere oplysninger."];
                            },
                        },
                        {
                            key: "a66142ad",
                            get: function () {
                                return ["Beskedanmodninger fra personer, du ikke følger direkte her. Hvis du vil svare på deres beskeder, skal du acceptere anmodningen. "];
                            },
                        },
                        {
                            key: "hc37d3bb",
                            get: function () {
                                return ["Google indsamler og bruger muligvis oplysninger om dig, din enhed og din browser, når du påbegynder udfordringen. Se Googles ", "."];
                            },
                        },
                        {
                            key: "eea0a14f",
                            get: function () {
                                return [this.props.formattedCount + " Like" + i(this.props.count, "", "s")];
                            },
                        },
                        {
                            key: "cca42d0b",
                            get: function () {
                                return [this.props.formattedCount + " billeder og videoer"];
                            },
                        },
                        {
                            key: "a0a3adf7",
                            get: function () {
                                return [this.props.formattedCount + " post" + i(this.props.count, "", "s")];
                            },
                        },
                        {
                            key: "e6264621",
                            get: function () {
                                return ["Du kan ikke følge eller se posts fra @" + this.props.screenName + ". "];
                            },
                        },
                        {
                            key: "f98ecc47",
                            get: function () {
                                return ["Er du sikker på, at du vil se disse posts? Blokeringen af @" + this.props.screenName + " fjernes ikke, selv om du ser dem. "];
                            },
                        },
                        {
                            key: "i8197603",
                            get: function () {
                                return ["Besøg ", " for at indberette et problem med intellektuel ejendomsret. Hvis du vil indberette andre problemer med dette produkt, skal du gå til iOS- eller Android-appen."];
                            },
                        },
                        {
                            key: "a21f2f79",
                            get: function () {
                                return ["", " for at få flere oplysninger om produktovertrædelser."];
                            },
                        },
                        {
                            key: "ff60a139",
                            get: function () {
                                return ["Antal: "];
                            },
                        },
                        {
                            key: "f575f533",
                            get: function () {
                                return ["Kategorier vælges selv af brugeren og er ikke tildelt, verificeret eller godkendt af X. "];
                            },
                        },
                        {
                            key: "cebed305",
                            get: function () {
                                return ["Denne konto er tilknyttet ", "."];
                            },
                        },
                        {
                            key: "i1824ce3",
                            get: function () {
                                return ["Det er kun godkendte følgere, der kan se posts fra @" + this.props.screenName + ". Klik på Følg for at anmode om adgang. "];
                            },
                        },
                        {
                            key: "da9d52d7",
                            get: function () {
                                return ["X suspenderer konti, der overtræder ", " "];
                            },
                        },
                        {
                            key: "b028aec5",
                            get: function () {
                                return ["Vi er nødt til at vide, om X-kontoen ", " er din. Hvis det ikke er din, så fjerner vi ", " fra den."];
                            },
                        },
                        {
                            key: "c43645ad",
                            get: function () {
                                return ["Hvis X-kontoen ", " tilhører dig, og du gerne vil afmelde fremtidige e-mailmeddelelser, skal du gå til "];
                            },
                        },
                        {
                            key: "b8e3884f",
                            get: function () {
                                return ["Vi har fjernet din e-mailadresse ", " fra X-kontoen ", ". Nu modtager du ikke længere meddelelser til denne konto."];
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
                                return ["En anden bruger er måske kommet til at indtaste din e-mailadresse, da vedkommende oprettede en X-konto. Der kan dog også være tale om misbrug af din konto. Du kan indberette kontoen for at hjælpe med at identificere og fjerne spam fra X. "];
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
                                return ["Prøv at følge ", " for at få mest muligt ud af Topartiklerne."];
                            },
                        },
                        {
                            key: "dc3a6d2d",
                            get: function () {
                                return ["Fulgte @" + this.props.screenName + ". ", "."];
                            },
                        },
                        {
                            key: "j5668d8f",
                            get: function () {
                                return ["Når du lytter anonymt, er du ikke synlig og kan ikke deltage. "];
                            },
                        },
                        {
                            key: "fafd5f6f",
                            get: function () {
                                return ["En af frynsegoderne ved at være abonnent er den eksklusive adgang til Rum som dette. Kun @" + this.props.screenName + "s abonnenter kan deltage i dette Rum. "];
                            },
                        },
                        {
                            key: "b1e1d521",
                            get: function () {
                                return ["Forøg din vurderingspåvirkning til " + this.props.ratingImpactToEarnIn + " fra din nuværende score på " + this.props.currentImpact + ", så din mulighed for at skrive bliver låst op igen."];
                            },
                        },
                        {
                            key: "e3a1e2a3",
                            get: function () {
                                return ["Om linket i denne post (", "), og det skal vises på alle posts, der indeholder dette link"];
                            },
                        },
                        {
                            key: "eb0960b9",
                            get: function () {
                                return ["Er du sikker på, at dette notat vil være nyttigt i ", " med dette billede, selv om der står noget forskelligt i disse posts?"];
                            },
                        },
                        {
                            key: "c14fcfe5",
                            get: function () {
                                return ["Er du sikker på, at dette notat vil være nyttigt i alle posts med dette billede, selv om der står noget forskelligt i disse posts?"];
                            },
                        },
                        {
                            key: "f8d04b49",
                            get: function () {
                                return ["Er du sikker på, at dette notat vil være nyttigt i ", " med denne video, selv om der står noget forskelligt i disse posts?"];
                            },
                        },
                        {
                            key: "ef94efc3",
                            get: function () {
                                return ["Er du sikker på, at dette notat vil være nyttigt i alle posts med denne video, selv om der står noget forskelligt i disse posts?"];
                            },
                        },
                        {
                            key: "a89cdd31",
                            get: function () {
                                return ["Er du sikker på, at dette notat vil være nyttigt i ", " med dette medie, selv om der står noget forskelligt i disse posts?"];
                            },
                        },
                        {
                            key: "f19fb541",
                            get: function () {
                                return ["Er du sikker på, at dette notat vil være nyttigt i alle posts med dette medie, selv om der står forskellige ting i disse posts?"];
                            },
                        },
                        {
                            key: "i9e31fe5",
                            get: function () {
                                return ["Læs mere om "];
                            },
                        },
                        {
                            key: "h14bda75",
                            get: function () {
                                return ["Anmodninger anonymiseres og gøres ", " for større gennemsigtighed"];
                            },
                        },
                        {
                            key: "c43ef159",
                            get: function () {
                                return ["Hvis du vil hjælpe med at skrive og bedømme Fællesskabsnoter, skal du "];
                            },
                        },
                        {
                            key: "c815dfaf",
                            get: function () {
                                return ["For at opretholde en høj kvalitet af anmodninger og forhindre spam skal konti have et verificeret telefonnummer for at kunne anmode om en Fællesskabsnote. "];
                            },
                        },
                        {
                            key: "bd9cf141",
                            get: function () {
                                return ["Som post-forfatter kan du "];
                            },
                        },
                        {
                            key: "e837f62f",
                            get: function () {
                                return [this.props.impactDisplayNumber + " bedømmelsespåvirkning"];
                            },
                        },
                        {
                            key: "f2bad803",
                            get: function () {
                                return [this.props.impactDisplayNumber + " skrivepåvirkning"];
                            },
                        },
                        {
                            key: "g062ed0f",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til billedet i en post, der siden er blevet slettet, og kan blive vist i andre posts, der indeholder dette billede"];
                            },
                        },
                        {
                            key: "j4f06e2f",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til billedet i ", " og kan blive vist i andre posts, der indeholder dette billede"];
                            },
                        },
                        {
                            key: "ida22561",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til videoen i en post, der siden er blevet slettet, og kan blive vist i andre posts, der indeholder denne video"];
                            },
                        },
                        {
                            key: "g68aa88d",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til videoen i ", " og kan blive vist i andre posts, der indeholder denne video"];
                            },
                        },
                        {
                            key: "ia62f949",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til mediet i en post, der siden er blevet slettet, og kan blive vist i andre posts, der indeholder dette medie"];
                            },
                        },
                        {
                            key: "c6eb7cbb",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til mediet i ", " og kan blive vist i andre posts, der indeholder dette medie"];
                            },
                        },
                        {
                            key: "f9b81033",
                            get: function () {
                                return ["Notat, der oprindeligt blev skrevet i en post, der siden er blevet slettet, og kan blive vist i andre posts, der indeholder et link til "];
                            },
                        },
                        {
                            key: "de254823",
                            get: function () {
                                return ["Notat oprindeligt skrevet i ", ", og kan blive vist på andre posts, der indeholder et link til "];
                            },
                        },
                        {
                            key: "de5532bd",
                            get: function () {
                                return ["Kan blive vist i ", ", der indeholder denne video, hvis folk synes, det bør."];
                            },
                        },
                        {
                            key: "ib6805bd",
                            get: function () {
                                return ["Kan blive vist i posts, der indeholder denne video, hvis folk synes, det bør."];
                            },
                        },
                        {
                            key: "g185d44d",
                            get: function () {
                                return ["Kan blive vist i ", ", der indeholder dette billede, hvis folk synes, det bør."];
                            },
                        },
                        {
                            key: "aeebdd99",
                            get: function () {
                                return ["Kan blive vist i posts, der indeholder dette billede, hvis folk synes, det bør."];
                            },
                        },
                        {
                            key: "d54bfbd9",
                            get: function () {
                                return ["Kan blive vist i ", ", der indeholder dette medie, hvis folk synes, det bør."];
                            },
                        },
                        {
                            key: "a9efbf0f",
                            get: function () {
                                return ["Kan blive vist i posts, der indeholder dette medie, hvis folk synes, det bør."];
                            },
                        },
                        {
                            key: "jef71e81",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til videoen i en post, der siden er blevet slettet, og bliver vist i ", ", der indeholder denne video"];
                            },
                        },
                        {
                            key: "ie594609",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til videoen i ", " og bliver vist i ", ", der indeholder denne video"];
                            },
                        },
                        {
                            key: "a48e0b6b",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til videoen i en post, der siden er blevet slettet, og kan blive vist i ", ", der indeholder denne video"];
                            },
                        },
                        {
                            key: "a0e626a3",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til videoen i ", " og kan blive vist i ", ", der indeholder denne video"];
                            },
                        },
                        {
                            key: "fcd2eeeb",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til billedet i en post, der siden er blevet slettet, og vises i ", ", der indeholder dette billede"];
                            },
                        },
                        {
                            key: "j300ac63",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til billedet i ", " og bliver vist i ", ", der indeholder dette billede"];
                            },
                        },
                        {
                            key: "bf532f23",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til billedet i en post, der siden er blevet slettet, og kan blive vist i ", ", der indeholder dette billede"];
                            },
                        },
                        {
                            key: "bda86c55",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til billedet i ", " og kan blive vist i ", ", der indeholder dette billede"];
                            },
                        },
                        {
                            key: "a13701bd",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til mediet i en post, der siden er blevet slettet, og vises i ", ", der indeholder dette medie"];
                            },
                        },
                        {
                            key: "e2a0a791",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til mediet i ", " og bliver vist i ", ", der indeholder dette medie"];
                            },
                        },
                        {
                            key: "b8e4bb0b",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til mediet i en post, der siden er blevet slettet, og kan blive vist i ", ", der indeholder dette medie"];
                            },
                        },
                        {
                            key: "hada7e59",
                            get: function () {
                                return ["Notat, der oprindeligt blev føjet til mediet i ", " og kan blive vist i ", ", der indeholder dette medie"];
                            },
                        },
                        {
                            key: "e8969de9",
                            get: function () {
                                return ["Vist i ", ", der indeholder et link til "];
                            },
                        },
                        {
                            key: "a389fb7b",
                            get: function () {
                                return ["Kan blive vist i ", ", der indeholder et link til "];
                            },
                        },
                        {
                            key: "gd8d8205",
                            get: function () {
                                return ["Notat, der oprindeligt var i en post, der siden er blevet slettet. Vist i ", ", der indeholder et link til "];
                            },
                        },
                        {
                            key: "i981a661",
                            get: function () {
                                return ["Notat oprindeligt i ", ". Vist i ", ", der indeholder et link til "];
                            },
                        },
                        {
                            key: "jceb2edb",
                            get: function () {
                                return ["Notat, der oprindeligt var i en post, der siden er blevet slettet. Kan blive vist i ", ", der indeholder et link til "];
                            },
                        },
                        {
                            key: "f20a22a1",
                            get: function () {
                                return ["Notat i ", ". Kan blive vist i ", ", der indeholder et link til "];
                            },
                        },
                        {
                            key: "f43e2fdf",
                            get: function () {
                                return ["Vises for en lille forsøgsgruppe på X · " + this.props.impressionTruncated + "+ visninger"];
                            },
                        },
                        {
                            key: "j72bc9ab",
                            get: function () {
                                return ["Vises for en lille forsøgsgruppe på X"];
                            },
                        },
                        {
                            key: "d60e4375",
                            get: function () {
                                return ["Vises på X · " + this.props.impressionTruncated + "+ visninger"];
                            },
                        },
                        {
                            key: "bf62daf1",
                            get: function () {
                                return ["Vises på X"];
                            },
                        },
                        {
                            key: "i8fa1313",
                            get: function () {
                                return ["Bedømmelser anonymiseres og gøres offentligt tilgængelige for større gennemsigtighed. Find ud af, hvordan Fællesskabsnoter gør data ", "."];
                            },
                        },
                        {
                            key: "had203a9",
                            get: function () {
                                return ["Du bedømte denne note som ", "."];
                            },
                        },
                        {
                            key: "h42a21df",
                            get: function () {
                                return ["Du bedømte denne note som ", "."];
                            },
                        },
                        {
                            key: "c3d1a1b1",
                            get: function () {
                                return ["Du bedømte denne note som ", "."];
                            },
                        },
                        {
                            key: "c7f250eb",
                            get: function () {
                                return ["Skal dette notat vises i ", ", der indeholder et link til ", "?"];
                            },
                        },
                        {
                            key: "bc2fde51",
                            get: function () {
                                return ["Skal dette notat vises i ", ", der indeholder den samme video?"];
                            },
                        },
                        {
                            key: "e80d1f67",
                            get: function () {
                                return ["Skal dette notat vises i ", ", der indeholder det samme billede?"];
                            },
                        },
                        {
                            key: "c692f6b5",
                            get: function () {
                                return ["Skal dette notat vises i ", ", der indeholder det samme medie?"];
                            },
                        },
                        {
                            key: "g46e2949",
                            get: function () {
                                return ["Skal dette notat vises i alle posts, der indeholder et link til ", "?"];
                            },
                        },
                        {
                            key: "c57661e9",
                            get: function () {
                                return ["Skal dette notat vises i alle posts, der indeholder den samme video?"];
                            },
                        },
                        {
                            key: "bb286921",
                            get: function () {
                                return ["Skal dette notat vises i alle posts, der indeholder det samme billede?"];
                            },
                        },
                        {
                            key: "df397f55",
                            get: function () {
                                return ["Skal dette notat vises i alle posts, der indeholder det samme medie?"];
                            },
                        },
                        {
                            key: "b936a16b",
                            get: function () {
                                return ["Har du idéer og forslag til forbedring af Fællesskabsnoter? "];
                            },
                        },
                        {
                            key: "e77dac87",
                            get: function () {
                                return ["Vis " + this.props.remainingCount + " post" + i(this.props.remainingCount, "", "s") + " mere, som er citeret af anmodere"];
                            },
                        },
                        {
                            key: "if0d6dd7",
                            get: function () {
                                return ["Bidragydere i Fællesskabsnoter bruger aliasser · "];
                            },
                        },
                        {
                            key: "f49cbf83",
                            get: function () {
                                return ["Denne funktion er ny for Notater i Fællesskaber, "];
                            },
                        },
                        {
                            key: "a94c6db7",
                            get: function () {
                                return ["Forøg din vurderingspåvirkning til " + this.props.requiredRatingImpact + ", fra din nuværende score på " + this.props.currentRatingImpact + "."];
                            },
                        },
                        {
                            key: "f52f0cbd",
                            get: function () {
                                return [this.props.num + " slettede noter"];
                            },
                        },
                        {
                            key: "ccdfbd75",
                            get: function () {
                                return ["For at låse op for din evne til at skrive skal du øge denne score til " + this.props.requiredRatingImpact];
                            },
                        },
                        {
                            key: "a32c38ad",
                            get: function () {
                                return ["Vil du begynde at skrive notater? Øg din vurderingspåvirkning til " + this.props.requiredRatingImpact + " eller højere."];
                            },
                        },
                        {
                            key: "d458f69d",
                            get: function () {
                                return ["Fællesskabsnoter gemmer statussen for slettede notater for at kunne tildele notatets forfatter og bedømmere et korrekt omdømme. "];
                            },
                        },
                        {
                            key: "i42495ad",
                            get: function () {
                                return ["Kontekst skrives af personer, der bruger X, og vises, når den bedømmes som nyttig af andre. "];
                            },
                        },
                        {
                            key: "c475a5d3",
                            get: function () {
                                return ["Din brug af datasættene er underlagt X's udvikleraftale og -politik. Ved at klikke på ikonet Download accepterer du ", "."];
                            },
                        },
                        {
                            key: "g19fcc5b",
                            get: function () {
                                return ["Fil nr. " + this.props.fileIndex + " af " + this.props.totalFiles];
                            },
                        },
                        {
                            key: "e7e44bab",
                            get: function () {
                                return ["Prøv at søge efter noget andet, eller tjek dine ", " for at se, om de beskytter dig mod potentielt ømtåleligt indhold."];
                            },
                        },
                        {
                            key: "b3a3ce8d",
                            get: function () {
                                return ["Aktiv for ", " siden"];
                            },
                        },
                        {
                            key: "d46c6e8f",
                            get: function () {
                                return ["Er du sikker på, at du vil gøre ", " til moderator?"];
                            },
                        },
                        {
                            key: "c3a1f2bf",
                            get: function () {
                                return ["Er du sikker på, at du vil fjerne ", " som moderator?"];
                            },
                        },
                        {
                            key: "c2696cdf",
                            get: function () {
                                return ["Angiv ", " for at fortsætte"];
                            },
                        },
                        {
                            key: "b160df39",
                            get: function () {
                                return ["", " skjulte en post"];
                            },
                        },
                        {
                            key: "h1513297",
                            get: function () {
                                return ["", " fastgjorde en post"];
                            },
                        },
                        {
                            key: "e523e9f1",
                            get: function () {
                                return ["", " frigjorde en post"];
                            },
                        },
                        {
                            key: "g93119e7",
                            get: function () {
                                return ["", " viste en post"];
                            },
                        },
                        {
                            key: "c6e18a45",
                            get: function () {
                                return ["", " fjernede et medlem"];
                            },
                        },
                        {
                            key: "ef3b57ef",
                            get: function () {
                                return ["", " genindsatte et medlem"];
                            },
                        },
                        {
                            key: "e7878d67",
                            get: function () {
                                return ["", " deltager i dette Fællesskab"];
                            },
                        },
                        {
                            key: "hd2489bb",
                            get: function () {
                                return ["", " forlod dette Fællesskab"];
                            },
                        },
                        {
                            key: "b4aa9d7b",
                            get: function () {
                                return ["", " godkendte en medlemsanmodning"];
                            },
                        },
                        {
                            key: "c5900395",
                            get: function () {
                                return ["", " afviste en medlemsanmodning"];
                            },
                        },
                        {
                            key: "g561eb89",
                            get: function () {
                                return ["", " godkendte en medlemsanmodning igen"];
                            },
                        },
                        {
                            key: "j5602f3b",
                            get: function () {
                                return ["Rapporteret af ", " og "];
                            },
                        },
                        {
                            key: "dd132edd",
                            get: function () {
                                return ["Rapporteret af "];
                            },
                        },
                        {
                            key: "je0779b7",
                            get: function () {
                                return ["Indberettet af "];
                            },
                        },
                        {
                            key: "a0071f71",
                            get: function () {
                                return ["Du har skjult @", "s post"];
                            },
                        },
                        {
                            key: "c4ec9d43",
                            get: function () {
                                return ["Du beholdt @", "s post"];
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
                                return ["Oprettet " + this.props.date + " af "];
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
                                return ["Hvis du vil bruge denne funktion, skal du skifte til en konto, som du ejer.\n\nSom bidragyder kan du sende direkte beskeder, udgive posts og oprette Lister – og se dem.\n\nVi leder altid efter måder, hvorpå vi kan forbedre Delegate. Du er velkommen til at ", "."];
                            },
                        },
                        {
                            key: "g29b68f9",
                            get: function () {
                                return ["Hvis du vil bruge denne funktion, skal du skifte til en konto, som du ejer.\n\nSom admin kan du sende direkte beskeder, udgive posts og oprette Lister – samt få dem vist. Du kan også invitere eller fjerne bidragydere til kontoen og se post-statistik.\n\nVi leder altid efter måder, hvorpå vi kan forbedre Delegate. Du er velkommen til at ", "."];
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
                                return ["", " for at se flere oplysninger om denne stilling"];
                            },
                        },
                        {
                            key: "ie9320f7",
                            get: function () {
                                return ["Begynd at få vist stillinger ", " ", " på din tidslinje"];
                            },
                        },
                        {
                            key: "c70aad4b",
                            get: function () {
                                return ["Viser stillinger ", " "];
                            },
                        },
                        {
                            key: "cc70dc63",
                            get: function () {
                                return ["Blokeringen af @" + this.props.screenName + " fjernes ikke, selvom du ser vedkommendes posts. "];
                            },
                        },
                        {
                            key: "d6c6deaf",
                            get: function () {
                                return ["Forudbestil for "];
                            },
                        },
                        {
                            key: "gbef9649",
                            get: function () {
                                return ["Læs mere om vores programmer og politikker for indtægtsgenerering ", "."];
                            },
                        },
                        {
                            key: "da2a091b",
                            get: function () {
                                return ["Ved at købe accepterer du vores ", " og vores ", ". Abonnementer fornys automatisk, indtil de opsiges, som beskrevet i vilkårene. Kan altid opsiges."];
                            },
                        },
                        {
                            key: "c23c08c9",
                            get: function () {
                                return ["Ved at købe accepterer du vores ", " og vores ", "."];
                            },
                        },
                        {
                            key: "d39ad44d",
                            get: function () {
                                return ["Likes, omtaler, reposts og meget mere – når det kommer fra en verificeret konto, finder du det her. "];
                            },
                        },
                        {
                            key: "b004e8bf",
                            get: function () {
                                return ["Lær mere om adgang for tredjepartsapps i ", "."];
                            },
                        },
                        {
                            key: "afd52f45",
                            get: function () {
                                return ["Lavet af ", ". Læs " + this.props.orgName + "s ", " og ", "."];
                            },
                        },
                        {
                            key: "b88304a3",
                            get: function () {
                                return ["Send en besked til ", " for at få support."];
                            },
                        },
                        {
                            key: "j766b689",
                            get: function () {
                                return ["", " for at komme i gang."];
                            },
                        },
                        {
                            key: "ef7ce733",
                            get: function () {
                                return ["Synkroniseret fra "];
                            },
                        },
                        {
                            key: "i958b2bd",
                            get: function () {
                                return ["Delte fra "];
                            },
                        },
                        {
                            key: "b2c03e03",
                            get: function () {
                                return ["Hvis du har spørgsmål til X Hiring, kan du sende os en e-mail på ", "."];
                            },
                        },
                        {
                            key: "c57cd3a3",
                            get: function () {
                                return ["(For organisationer, ", ")"];
                            },
                        },
                        {
                            key: "bec92f3b",
                            get: function () {
                                return ["Ved at påbegynde din ", " og tilmelde dig accepterer du vores ", ". Efter den gratis prøveperiode på " + this.props.numberOfDays + " dage vil du blive opkrævet beløbet for det årlige eller månedlige abonnement, du vælger, når du tilmelder dig, medmindre du opsiger det inden for den gratis prøveperiode på " + this.props.numberOfDays + " dage. Abonnementer fornys automatisk, indtil de opsiges, som beskrevet i vilkårene. ", ". Opsig mindst 24 timer før fornyelsen for at undgå ekstra gebyrer. Det kræver et verificeret telefonnummer at abonnere. Hvis du har abonneret via en anden platform, skal du administrere dit abonnement via den pågældende platform."];
                            },
                        },
                        {
                            key: "ca87939f",
                            get: function () {
                                return ["Ved at abonnere accepterer du vores ", ". Abonnementer fornys automatisk, indtil de opsiges, som beskrevet i ", ". ", ". Annuller mindst 24 timer før fornyelse for at undgå ekstra gebyrer. Når du opgradere til et højere prisniveau, overføres kreditten for resten af dit tidligere abonnement til din konto og bruges automatisk til fremtidige betalinger. Dit nye abonnement begynder med det samme. Et verificeret telefonnummer er påkrævet for at abonnere."];
                            },
                        },
                        {
                            key: "ed2a6ba9",
                            get: function () {
                                return ["Ved at abonnere accepterer du vores ", ". Abonnementer fornys automatisk, indtil de opsiges, som beskrevet i ", ". ", ". Annuller mindst 24 timer før fornyelse for at undgå ekstra gebyrer. Når du nedgraderer, skifter dit nuværende abonnement og de tilknyttede funktioner omgående til det nye abonnementsniveau. Du vil ikke modtage refusion for dit tidligere abonnement, medmindre loven kræver det. Du vil også blive opkrævet prisen for det nye niveau med det samme. Et verificeret telefonnummer er påkrævet for at abonnere."];
                            },
                        },
                        {
                            key: "db638a21",
                            get: function () {
                                return ["Ved at abonnere accepterer du vores ", ". Abonnementer fornys automatisk, indtil de opsiges, som beskrevet i ", ". ", ". Annuller mindst 24 timer før fornyelse for at undgå ekstra gebyrer. Når du skifter abonnement, starter dit nye abonnement med det samme. Kreditten for resten af dit tidligere abonnement overføres til din konto og bruges automatisk til fremtidige betalinger. Et verificeret telefonnummer er påkrævet for at abonnere."];
                            },
                        },
                        {
                            key: "b2138d0f",
                            get: function () {
                                return ["Når du abonnerer, accepterer du vores ", ". Abonnementer fornyes automatisk, indtil de opsiges i overensstemmelse med vores ", ". ", ". Opsig mindst 24 timer før fornyelsen for at undgå yderligere gebyrer. Når du opgraderer, ændres dit nuværende abonnement og de tilknyttede funktioner til det nye abonnementsniveau med det samme. Du vil straks blive opkrævet for prisen på det nye niveau, men enhver forholdsmæssig saldo fra din nuværende faktureringsperiode vil blive krediteret til dagens samlede opkrævning. Du vil ikke modtage refusion for nogen del af dit tidligere abonnement, medmindre det er påkrævet ved lov."];
                            },
                        },
                        {
                            key: "c2255911",
                            get: function () {
                                return ["Når du abonnerer, accepterer du vores ", ". Abonnementer fornyes automatisk, indtil de opsiges i overensstemmelse med vores ", ". ", ". Opsig mindst 24 timer før fornyelsen for at undgå yderligere gebyrer. Når du nedgraderer, forbliver dit nuværende abonnement aktivt indtil din næste faktureringsperiode, hvor dit nye abonnement begynder. Du vil blive opkrævet for prisen på det nye niveau ved starten af din næste faktureringsperiode."];
                            },
                        },
                        {
                            key: "e647175f",
                            get: function () {
                                return ["Når du abonnerer, accepterer du vores ", ". Abonnementer fornyes automatisk, indtil de opsiges i overensstemmelse med vores ", ". ", ". Opsig mindst 24 timer før fornyelsen for at undgå yderligere gebyrer. Når du ændrer dit abonnement, vil du fortsat have glæde af de funktioner, der er knyttet til dit niveau. Du vil blive opkrævet for prisen på den nye årlige plan med det samme, og enhver forholdsmæssig saldo fra din månedlige faktureringscyklus vil blive krediteret til dagens samlede opkrævning."];
                            },
                        },
                        {
                            key: "eaccb9c9",
                            get: function () {
                                return ["Når du abonnerer, accepterer du vores ", ". Abonnementer fornyes automatisk, indtil de opsiges i overensstemmelse med vores ", ". ", ". Opsig mindst 24 timer før fornyelsen for at undgå yderligere gebyrer. Når du ændrer et abonnement, vil du fortsat have glæde af de funktioner, der er knyttet til dit niveau. Du vil blive opkrævet for den månedlige pris for niveauet med det samme, men din resterende forholdsmæssige kredit fra din årlige betaling vil blive krediteret til de månedlige gebyrer, indtil den udløber."];
                            },
                        },
                        {
                            key: "db11f87d",
                            get: function () {
                                return ["Abonner for ", " " + this.props.newPrice + "/" + this.props.interval];
                            },
                        },
                        {
                            key: "e4219e13",
                            get: function () {
                                return ["", " " + this.props.newPrice + "/" + this.props.interval + " faktureres årligt"];
                            },
                        },
                        {
                            key: "eeb5fb11",
                            get: function () {
                                return ["Adresseoplysninger deles med Google. Se ", " og ", " for at lære mere."];
                            },
                        },
                        {
                            key: "f9b1387f",
                            get: function () {
                                return ["Kun administratorer og moderatorer af Fællesskaber kan sætte spotlight på dem på deres profiler. Vil du ", "?"];
                            },
                        },
                        {
                            key: "ef72b01b",
                            get: function () {
                                return ["Du kan finde et krisecenter i nærheden af dig på denne side "];
                            },
                        },
                        {
                            key: "e6c21d5b",
                            get: function () {
                                return ["Hvis du føler, at du er i fare, anbefaler vi, at du kontakter det lokale politi. De kan konsultere vores ", ", hvis de har opfølgende spørgsmål."];
                            },
                        },
                        {
                            key: "e1d95725",
                            get: function () {
                                return ["Du kan altid stoppe med at følge det fra ", "."];
                            },
                        },
                        {
                            key: "gd67df1d",
                            get: function () {
                                return ["Senest opdateret "];
                            },
                        },
                        {
                            key: "e420d1ed",
                            get: function () {
                                return ["Folk får ikke besked, når du redigerer din cirkel. Alle, som du tilføjer, vil kunne se dine tidligere cirkel-posts. "];
                            },
                        },
                        {
                            key: "gc31d3e9",
                            get: function () {
                                return ["Hvor mange gange denne post blev set. Besøg ", " for at få mere at vide."];
                            },
                        },
                        {
                            key: "he0e6ed7",
                            get: function () {
                                return ["Hvor mange gange denne post blev set. Det kan tage et par minutter, inden visningstallet kan ses. Besøg ", " for at få mere at vide."];
                            },
                        },
                        {
                            key: "c780f52b",
                            get: function () {
                                return ["Visningstallet er ikke tilgængeligt for denne post. Besøg ", " for at få mere at vide."];
                            },
                        },
                        {
                            key: "fc2dfb3f",
                            get: function () {
                                return ["Ved at klikke på Opret promovering, angiver du, at du har læst og accepterer ", " og ", "."];
                            },
                        },
                        {
                            key: "fcf4b2a5",
                            get: function () {
                                return ["Ved at klikke på Opret promovering, angiver du, at du har læst og accepterer ", "."];
                            },
                        },
                        {
                            key: "f54ad505",
                            get: function () {
                                return ["Nogle målretningsmuligheder er ikke tilgængelige for denne annoncekonto iht. X's ", "."];
                            },
                        },
                        {
                            key: "b3816c8b",
                            get: function () {
                                return ["Ved at klikke på Promover post, angiver du, at du har læst og accepterer ", " og ", "."];
                            },
                        },
                        {
                            key: "ee48f791",
                            get: function () {
                                return ["Ved at klikke på Promover post, angiver du, at du har læst og accepterer ", "."];
                            },
                        },
                        {
                            key: "f5a533b1",
                            get: function () {
                                return ["Denne post har ingen skjulte svar, men beskyttede posts kan blive filtreret fra. "];
                            },
                        },
                        {
                            key: "cd5e4a77",
                            get: function () {
                                return ["Ved at klikke nedenfor for at foretage dette køb accepterer du ", "."];
                            },
                        },
                        {
                            key: "aa4026bf",
                            get: function () {
                                return ["Dette forhindrer ", " i at inkludere dig på deres lister, inklusive denne."];
                            },
                        },
                        {
                            key: "fca299bb",
                            get: function () {
                                return ["Del din e-mail med " + this.props.creatorName + ". Ved at acceptere giver du X lov til at dele e-mailadressen med skaberen med henblik på kommunikation uden for platformen, og du accepterer ", "."];
                            },
                        },
                        {
                            key: "ccd45e5f",
                            get: function () {
                                return ["Giv " + this.props.tier + " i ét år som en gave til @" + this.props.screenName + " for " + this.props.price + ". Når du har gennemført betalingen, får vedkommende besked om, at du har sendt gaven."];
                            },
                        },
                        {
                            key: "h7f3e309",
                            get: function () {
                                return ["Prisen for gaveabonnementet opkræves ved købet og kan ikke refunderes. Det er til engangsbrug, kan ikke ombyttes, kan ikke kombineres og har ingen kontantværdi. Det starter efter X's gennemgang og tildeling til modtageren, som skal acceptere vores ", " og politikker. Hvis modtageren ikke opfylder nogen kvalifikationskrav, annullerer abonnementet eller afviser vores vilkår og politikker, kan gaven ikke indløses og refunderes. Skatter kan være gældende. Vilkårene kan ændres. ", "."];
                            },
                        },
                        {
                            key: "j0a20bf1",
                            get: function () {
                                return ["Organisationer har guld-flueben, enkeltpersoner har blå flueben. Upassende brug vil resultere i annullering af dit abonnement uden refusion i henhold til vores ", "."];
                            },
                        },
                        {
                            key: "j1b50481",
                            get: function () {
                                return ["Organisationer er firkantede avatarer, enkeltpersoner er cirkulære avatarer. Upassende brug vil resultere i annullering af dit abonnement uden refusion i henhold til vores ", "."];
                            },
                        },
                        {
                            key: "ebebbb93",
                            get: function () {
                                return ["Konfigurer, hvilken annoncekonto der skal bruges til stillinger, der promoveres via ", "."];
                            },
                        },
                        {
                            key: "bd5a78a1",
                            get: function () {
                                return ["Ingen kvalificerede konti fundet. Tjek siden ", " for næste trin."];
                            },
                        },
                        {
                            key: "b94bf5f5",
                            get: function () {
                                return ["Hvis du annullerer Verificerede organisationer, mister din organisation sit guldflueben med det samme."];
                            },
                        },
                        {
                            key: "d4109f93",
                            get: function () {
                                return ["Derudover bliver alle tilknyttede konti annulleret med det samme og mister guldfluebenet eller det blå flueben og deres tilknytningsbadges."];
                            },
                        },
                        {
                            key: "c5b26ddf",
                            get: function () {
                                return ["Hvis du opsiger, fjernes flueben og alle betalte funktioner omgående fra din organisation og alle tilknyttede konti."];
                            },
                        },
                        {
                            key: "h06e7c87",
                            get: function () {
                                return ["Hvis du beslutter dig for at blive i dag, føjer vi " + this.props.creditAmount + " USD ekstra gratis annoncekredit til din portal hver " + this.props.daysOfCouponInterval + ". dag i de næste " + this.props.totalDays + " dage. Når du benytter dig af dette tilbud, vil vores supportteam kontakte dig for at hjælpe dig med at få værdi ud af denne kredit for din organisation."];
                            },
                        },
                        {
                            key: "b602e60f",
                            get: function () {
                                return ["Hvis du beslutter dig for at blive i dag, føjer vi " + this.props.creditAmount + " USD ekstra gratis annoncekredit til din portal i de næste " + this.props.daysToWaitForFirstRedeemable + " dage. Når du benytter dig af dette tilbud, vil vores supportteam kontakte dig for at hjælpe dig med at få værdi ud af denne kredit for din organisation."];
                            },
                        },
                        {
                            key: "fa5bbb59",
                            get: function () {
                                return ["Dette er et engangstilbud, som ikke bliver gentaget."];
                            },
                        },
                        {
                            key: "ceadabdd",
                            get: function () {
                                return ["Du kan stadig gå tilbage og gøre brug af engangstilbuddet, som ikke kommer igen. Du få ikke refunderet de resterende dage, der er tilbage af dit abonnement før den næste faktureringsperiode. Herefter bliver du ikke faktureret."];
                            },
                        },
                        {
                            key: "e269f39d",
                            get: function () {
                                return ["Verificerede organisationer får prioriteret support på X til alle problemer. Uanset hvad det drejer sig om, kan vi hjælpe dig med at løse problemet så hurtigt som muligt. Vil du gerne aftale et opkald og tale med en person fra Verificerede organisationer, der kan hjælpe dig?"];
                            },
                        },
                        {
                            key: "e9565acf",
                            get: function () {
                                return ["Hvis du opsiger dit abonnement, mister du omgående adgangen til denne gratis annoncekredit og al fremtidig gratis annoncekredit, der følger med dit abonnement. Da du allerede har betalt for denne fordel, anbefaler vi, at du bliver ved med at bruge den."];
                            },
                        },
                        {
                            key: "if6e211f",
                            get: function () {
                                return ["Hvis du vil forøge grænsen, kan du kontakte Verified Premium-support ", "."];
                            },
                        },
                        {
                            key: "a994ab9b",
                            get: function () {
                                return ["Hver yderligere tilknytning koster ", "/"];
                            },
                        },
                        {
                            key: "j4f386b7",
                            get: function () {
                                return ["", " for det første år. Derefter ", " pr. år."];
                            },
                        },
                        {
                            key: "ce9e7f1b",
                            get: function () {
                                return ["Prisen for hver yderligere tilknyttet konto er ", " pr. brugernavn pr. år. "];
                            },
                        },
                        {
                            key: "dc107867",
                            get: function () {
                                return ["", "/", " (", ") + ", " pr. brugernavn pr. ", " (", "). "];
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
                                return ["Få 30 % rabat på årsabonnementer og op til $12.000 i gratis annoncekredit, når du abonnerer før "];
                            },
                        },
                        {
                            key: "f5b357b5",
                            get: function () {
                                return ["Fuld adgang koster ", "/", " (", "). Prisen for hver yderligere tilknyttet konto er ", " pr. brugernavn pr. ", " (", "). "];
                            },
                        },
                        {
                            key: "i83d2543",
                            get: function () {
                                return ["Basis koster ", "/", " (", "). "];
                            },
                        },
                        {
                            key: "gc723de9",
                            get: function () {
                                return ["Ved at klikke på Abonner, accepterer du vores ", ". Abonnementer fornys automatisk, indtil de opsiges. Alle konti, der tilmeldes, skal godkendes manuelt."];
                            },
                        },
                        {
                            key: "ha873011",
                            get: function () {
                                return ["Ved at klikke på Abonner accepterer du vores ", ". Abonnementer fornyes automatisk, indtil de opsiges. Konti, der tilmelder sig, bliver gennemgået for ægthed. Hvis en konto tilmelder sig og ikke er en organisation, bliver den afvist, og du bliver ikke refunderet."];
                            },
                        },
                        {
                            key: "d4918c71",
                            get: function () {
                                return ["+ ", " i annoncekredit i en begrænset periode til at bruge på din organisation eller en af dens tilknytninger ", " med dedikeret support."];
                            },
                        },
                        {
                            key: "a87b1795",
                            get: function () {
                                return ["+ I en begrænset periode kan du få en ", " reklamekredit til din organisation ", " med dedikeret support."];
                            },
                        },
                        {
                            key: "fb6fa495",
                            get: function () {
                                return ["", this.props.activeTierName + " til " + this.props.activePriceLabel];
                            },
                        },
                        {
                            key: "fcbe756d",
                            get: function () {
                                return ["", this.props.targetTierName + " til " + this.props.targetPriceLabel];
                            },
                        },
                        {
                            key: "c9384b33",
                            get: function () {
                                return ["Denne ændring af dit abonnement understøttes ikke her, kontakt Verified Premium-support ", "."];
                            },
                        },
                        {
                            key: "af51185b",
                            get: function () {
                                return ["Hvis du har brug for flere tilknytninger, kan du kontakte Verificeret salg ", "."];
                            },
                        },
                        {
                            key: "d9f35d6f",
                            get: function () {
                                return ["Ved at klikke på ‘" + this.props.action + "’ accepterer du at være bundet af ", "."];
                            },
                        },
                        {
                            key: "g42a8521",
                            get: function () {
                                return ["Vi bruger disse oplysninger til at vurdere ansøgningen for ", ". ", "."];
                            },
                        },
                        {
                            key: "aacfbecd",
                            get: function () {
                                return ["Ved at markere dette afkrydsningsfelt angiver du, at du har læst og accepterer de vilkår og betingelser, der findes ", "."];
                            },
                        },
                        {
                            key: "feb950f3",
                            get: function () {
                                return ["Verificerede organisationer inkluderer nu en annoncekredit *på " + this.props.xtc_coupon_value + " (eller tilsvarende i lokal valuta). Du kan bruge dem på din organisation eller en af dine tilknytninger. Vælg blot annoncekontoen nedenfor for at indløse."];
                            },
                        },
                        {
                            key: "h9629ab7",
                            get: function () {
                                return ["Verificerede organisationer inkluderer nu en annoncekredit*på " + this.props.xtc_coupon_value + " (eller tilsvarende i lokal valuta). Hver 30. dag modtager du " + this.props.xtc_coupon_value + " (eller tilsvarende i lokal valuta), som du kan bruge på annoncer, og som du kan bruge når som helst. Du kan bruge dem på din organisation eller en af dine tilknytninger. Vælg blot annoncekontoen nedenfor for at indløse."];
                            },
                        },
                        {
                            key: "i3781135",
                            get: function () {
                                return ["For at administrere dine annoncekonto-id'er, skal du klikke ", "."];
                            },
                        },
                        {
                            key: "ff1cc953",
                            get: function () {
                                return ["Løber du ind i problemer? Kontakt ", ", hvis du har spørgsmål."];
                            },
                        },
                        {
                            key: "g46e6cc5",
                            get: function () {
                                return ["Du har ", " dage til at bruge de resterende ", " på denne annoncekredit."];
                            },
                        },
                        {
                            key: "be64138f",
                            get: function () {
                                return ["Aktivér din annoncekredit. Hvis du har flere annoncekonti, kan du redigere input nedenfor. Kan indløses indtil " + this.props.expiresAt];
                            },
                        },
                        {
                            key: "a5f1d09f",
                            get: function () {
                                return ["Find dit annoncekonto-id, der er knyttet til din X-konto. Du kan finde det ", "."];
                            },
                        },
                        {
                            key: "e3a90717",
                            get: function () {
                                return ['Sørg for at tilføje et kreditkort som betalingstype i Ads Manager ved at vælge "Tilføj ny betalingsmetode". Hvis du ikke har et kreditkort, vil din kredit ikke blive anvendt, og din annonce vil ikke blive vist.'];
                            },
                        },
                        {
                            key: "b743c7b7",
                            get: function () {
                                return ["Kopier dit annoncekonto-id til tekstfeltet øverst på denne side. Klik på aktiver."];
                            },
                        },
                        {
                            key: "d5128627",
                            get: function () {
                                return ["Start din kampagne."];
                            },
                        },
                        {
                            key: "ecd5d325",
                            get: function () {
                                return ['Sørg for at tilføje et kreditkort som betalingstype i Ads Manager ved at vælge "Tilføj ny betalingsmetode". Hvis du ikke har et kreditkort indtastet, vil din annonce ikke blive vist.'];
                            },
                        },
                        {
                            key: "d523367f",
                            get: function () {
                                return ["Du kan se din anvendte kredit under Fakturering i Ads Manager."];
                            },
                        },
                        {
                            key: "c10a3649",
                            get: function () {
                                return ["Hvis du før har annonceret med X, kan du have flere annoncekonto-id'er."];
                            },
                        },
                        {
                            key: "fab86f55",
                            get: function () {
                                return ["Du kan finde en liste over alle dine annoncekonto-id'er ", "."];
                            },
                        },
                        {
                            key: "h9fe1a6d",
                            get: function () {
                                return ["Sørg for, at du vælger det korrekte annoncekonto-id for at anvende din kredit."];
                            },
                        },
                        {
                            key: "a4087047",
                            get: function () {
                                return ["Som en verificeret organisations abonnent med fuld adgang kan du anvende din kredit på enhver af dine tilknyttede konti."];
                            },
                        },
                        {
                            key: "ca18299b",
                            get: function () {
                                return ["For at gøre dette skal du have adgang til annoncekonto-id'et for den tilknyttede konto, som du gerne vil køre en kampagne på."];
                            },
                        },
                        {
                            key: "b83bc371",
                            get: function () {
                                return ["Du kan finde dette ved at logge ind på den tilknyttede konto og klikke ", "."];
                            },
                        },
                        {
                            key: "ba6442ef",
                            get: function () {
                                return ["Verificerede organisationer er kvalificeret til at modtage kreditter til brug på ", " og promovering af stillinger. Udfør disse trin for at aktivere annonceringsfunktionerne fuldt ud."];
                            },
                        },
                        {
                            key: "e52e0c73",
                            get: function () {
                                return ["Verificerede organisationer er kvalificeret til at modtage kreditter til brug på ", ". Udfør disse trin for at aktivere annonceringsfunktionerne fuldt ud."];
                            },
                        },
                        {
                            key: "d15a83b7",
                            get: function () {
                                return ["Aktivér kupon"];
                            },
                        },
                        {
                            key: "j5318247",
                            get: function () {
                                return ["Vælg en aktiv konto med god status for at modtage denne kredit på " + this.props.couponAmount + "."];
                            },
                        },
                        {
                            key: "e507417b",
                            get: function () {
                                return ["Du kan finde en liste over konto-id'er i ", ". Eksempel på id: o8z6j"];
                            },
                        },
                        {
                            key: "b17ac597",
                            get: function () {
                                return ["Stillinger er klar til at blive promoveret med handlingen "];
                            },
                        },
                        {
                            key: "ga44a2f9",
                            get: function () {
                                return ["Når de er kvalificeret, kan stillinger promoveres med handlingen "];
                            },
                        },
                        {
                            key: "dc53cac9",
                            get: function () {
                                return ["Vi undersøger anmodninger, der er indsendt af varemærkeindehaveren eller dennes autoriserede repræsentant. Se vores ", " for detaljer."];
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
                                return ["Angiv brugernavnet på Listens ejer og Listenavnet i følgende format: ", "."];
                            },
                        },
                        {
                            key: "aa36416b",
                            get: function () {
                                return ["Denne kolonne kan kun ryddes, hvis du skifter til ", "."];
                            },
                        },
                        {
                            key: "baed64e7",
                            get: function () {
                                return ["Se vores privatlivspolitik på "];
                            },
                        },
                        {
                            key: "a982261d",
                            get: function () {
                                return ["Se vores vilkår for anvendelse på "];
                            },
                        },
                        {
                            key: "ffe014fd",
                            get: function () {
                                return ['X og dets partnere bruger cookies til at give dig en bedre, sikrere og hurtigere tjeneste og til at understøtte vores forretning. Nogle cookies er nødvendige for at bruge vores tjenester, forbedre vores tjenester og sikre, at de fungerer korrekt. Hvis du klikker på " Acceptér alle cookies", tillader du også X og dets partnere at bruge cookies til at vise dig annoncer og kommunikation, der er skræddersyet til dine interesser. Hvis du klikker på "Afvis unødvendige cookies", bruger vi ikke cookies til at indsamle yderligere data til skræddersyede annoncer og kommunikation. Hvis du vil vide mere om vores cookie-praksis, kan du besøge vores cookie-hjælpecenter på nettet på ', "."];
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
                                return ["", " af forfatteren"];
                            },
                        },
                        {
                            key: "i0643a5b",
                            get: function () {
                                return ["", " Artikel"];
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
                                return ["Dette medie er blevet deaktiveret pga. et ophavsretligt krav fra " + this.props.copyrightHolder + ". Hvis du vil afvise kravet, skal du bruge ", "."];
                            },
                        },
                        {
                            key: "fcd931ed",
                            get: function () {
                                return ["", " repostede"];
                            },
                        },
                        {
                            key: "c2588611",
                            get: function () {
                                return ["", " kl. " + this.props.time];
                            },
                        },
                        {
                            key: "dbf19261",
                            get: function () {
                                return ["Fra "];
                            },
                        },
                        {
                            key: "d7b2c271",
                            get: function () {
                                return ["", " og "];
                            },
                        },
                        {
                            key: "b035fe73",
                            get: function () {
                                return ["", " og "];
                            },
                        },
                        {
                            key: "h5970807",
                            get: function () {
                                return ["Svarer "];
                            },
                        },
                        {
                            key: "ge01e6a3",
                            get: function () {
                                return ["Svarer ", " ", " "];
                            },
                        },
                        {
                            key: "f5a069ab",
                            get: function () {
                                return ["Svarer ", " "];
                            },
                        },
                        {
                            key: "hd7dd197",
                            get: function () {
                                return ["Svarer ", " ", " ", " "];
                            },
                        },
                        {
                            key: "g4eb2847",
                            get: function () {
                                return ["Svarer ", " ", " "];
                            },
                        },
                        {
                            key: "dfde726b",
                            get: function () {
                                return ["", " at læse"];
                            },
                        },
                        {
                            key: "gec4f969",
                            get: function () {
                                return ["Fra "];
                            },
                        },
                        {
                            key: "d6b02329",
                            get: function () {
                                return [this.props.formattedCount + " Medlem" + i(this.props.count, "", "mer")];
                            },
                        },
                        {
                            key: "c9e6167d",
                            get: function () {
                                return ["Følges af "];
                            },
                        },
                        {
                            key: "ha91d1eb",
                            get: function () {
                                return ["Følges af ", " og "];
                            },
                        },
                        {
                            key: "f1069f9b",
                            get: function () {
                                return ["Følges af ", ", ", " og "];
                            },
                        },
                        {
                            key: "e8404c1f",
                            get: function () {
                                return ["Følges af ", ", ", " og ", " andre, som du følger"];
                            },
                        },
                        {
                            key: "bb2cd6d3",
                            get: function () {
                                return ["", " og ", " andre trender inden for dette emne"];
                            },
                        },
                        {
                            key: "e1e348dd",
                            get: function () {
                                return ["Betalt af "];
                            },
                        },
                        {
                            key: "c7dea0d1",
                            get: function () {
                                return ["Betalt af ", " og ikke godkendt af nogen kandidat eller noget kandidatudvalg."];
                            },
                        },
                        {
                            key: "b5c2371b",
                            get: function () {
                                return ["Betalt af ", " · Godkendt af " + this.props.sponsorshipCandidate];
                            },
                        },
                        {
                            key: "b6a393af",
                            get: function () {
                                return ["Kun du og personer i din cirkel kan se denne post. Reposting, citering og deling er ikke tilgængelig. "];
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
                                return ["Trender med "];
                            },
                        },
                        {
                            key: "ea753bf5",
                            get: function () {
                                return ["Trender med ", ", "];
                            },
                        },
                        {
                            key: "ge9aefd5",
                            get: function () {
                                return ["", " fra "];
                            },
                        },
                        {
                            key: "templateReducer",
                            get: function () {
                                var e,
                                    r = o.Children.toArray(this.props.children),
                                    n = ((e = this.props.$i18n), s[l[e]] || f);
                                return function (e, t, i) {
                                    return e.concat(t, r[n(i)]);
                                };
                            },
                        },
                    ]) && d(t.prototype, g),
                    k && d(t, k),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    u
                );
            })(n(674132)._ActualI18NFormatMessage || o.Component);
            t("_ActualI18NFormatMessage", g),
                t("I18NFormatMessage", function (e) {
                    return o.createElement(g, e);
                });
            var k = n(495075);
            n(800694), n(556829), n(530152), n(658610), n(492344), n(663823);
            k._validateParameterTypeNumber, k._validateParameterPresence;
            var u = k._numberRound,
                b = (k._numberFormat, k._numberFormatterFn),
                c = k._pluralGeneratorFn,
                m = (k._currencyNameFormat, k._currencyFormatterFn),
                v = (k._validateParameterTypeDate, k._dateToPartsFormat, k._dateToPartsFormatterFn),
                p = (k._dateFormat, k._dateFormatterFn),
                h = k._relativeTimeFormatterFn,
                y = k._unitFormatterFn;
            (k.a1512798386 = b(["", , 1, 0, 1, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u("truncate"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 t", other: "0 t" }, 4: { one: "00 t", other: "00 t" }, 5: { one: "000 t", other: "000 t" }, 6: { one: "0 mio", other: "0 mio" }, 7: { one: "00 mio", other: "00 mio" }, 8: { one: "000 mio", other: "000 mio" }, 9: { one: "0 mia", other: "0 mia" }, 10: { one: "00 mia", other: "00 mia" }, 11: { one: "000 mia", other: "000 mia" }, 12: { one: "0 bio", other: "0 bio" }, 13: { one: "00 bio", other: "00 bio" }, 14: { one: "000 bio", other: "000 bio" }, maxExponent: 14 }], k("da").pluralGenerator({}))),
                (k.b509021250 = b(["", , 1, 0, 3, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1222389628 = b(["", , 1, 0, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u("round"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b2146337608 = b(["", , 1, 0, 0, , , , , , "", "0", "-0", "-", "", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b2111625700 = b(["", , 2, 0, 0, , , , , , "", "00", "-00", "-", "", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b744112621 = b(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u("truncate"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 t", other: "0 t" }, 4: { one: "00 t", other: "00 t" }, 5: { one: "000 t", other: "000 t" }, 6: { one: "0 mio", other: "0 mio" }, 7: { one: "00 mio", other: "00 mio" }, 8: { one: "000 mio", other: "000 mio" }, 9: { one: "0 mia", other: "0 mia" }, 10: { one: "00 mia", other: "00 mia" }, 11: { one: "000 mia", other: "000 mia" }, 12: { one: "0 bio", other: "0 bio" }, 13: { one: "00 bio", other: "00 bio" }, 14: { one: "000 bio", other: "000 bio" }, maxExponent: 14 }], k("da").pluralGenerator({}))),
                (k.a1570431033 = b(["", , 1, 0, 1, , , , 3, , " %", "#,##0 %", "-#,##0 % %", "-", " %", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b786150682 = b(["", , 1, 0, 0, , , , 3, , " %", "#,##0 %", "-#,##0 % %", "-", " %", u("round"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b456384921 = b(["", , 1, 0, 1, , , , 3, , " %", "#,##0 %", "-#,##0 % %", "-", " %", u("round"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a529374361 = b(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u("truncate"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 t", other: "0 t" }, 4: { one: "00 t", other: "00 t" }, 5: { one: "000 t", other: "000 t" }, 6: { one: "0 mio", other: "0 mio" }, 7: { one: "00 mio", other: "00 mio" }, 8: { one: "000 mio", other: "000 mio" }, 9: { one: "0 mia", other: "0 mia" }, 10: { one: "00 mia", other: "00 mia" }, 11: { one: "000 mia", other: "000 mia" }, 12: { one: "0 bio", other: "0 bio" }, 13: { one: "00 bio", other: "00 bio" }, 14: { one: "000 bio", other: "000 bio" }, maxExponent: 14 }], k("da").pluralGenerator({}))),
                (k.a762550972 = b(["", , 1, 1, 1, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u("truncate"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b305924294 = b(["", , 1, 2, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u("truncate"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1077208706 = b(["", , 1, 0, 0, 1, 2, , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 t", other: "0 t" }, 4: { one: "00 t", other: "00 t" }, 5: { one: "000 t", other: "000 t" }, 6: { one: "0 mio", other: "0 mio" }, 7: { one: "00 mio", other: "00 mio" }, 8: { one: "000 mio", other: "000 mio" }, 9: { one: "0 mia", other: "0 mia" }, 10: { one: "00 mia", other: "00 mia" }, 11: { one: "000 mia", other: "000 mia" }, 12: { one: "0 bio", other: "0 bio" }, 13: { one: "00 bio", other: "00 bio" }, 14: { one: "000 bio", other: "000 bio" }, maxExponent: 14 }], k("da").pluralGenerator({}))),
                (k.b712302553 = b(["", , 1, 2, 2, , , 0, 3, , " 'AED'", "#,##0.00 'AED'", "-#,##0.00 'AED' 'AED'", "-", " 'AED'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b761503084 = b(["", , 1, 0, 0, , , , 3, , " 'ALL'", "#,##0 'ALL'", "-#,##0 'ALL' 'ALL'", "-", " 'ALL'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b326270775 = b(["", , 1, 2, 2, , , 0, 3, , " 'ARS'", "#,##0.00 'ARS'", "-#,##0.00 'ARS' 'ARS'", "-", " 'ARS'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b283788809 = b(["", , 1, 2, 2, , , 0, 3, , " 'AU$'", "#,##0.00 'AU$'", "-#,##0.00 'AU$' 'AU$'", "-", " 'AU$'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a68996213 = b(["", , 1, 2, 2, , , 0, 3, , " 'BAM'", "#,##0.00 'BAM'", "-#,##0.00 'BAM' 'BAM'", "-", " 'BAM'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a161348313 = b(["", , 1, 2, 2, , , 0, 3, , " 'BDT'", "#,##0.00 'BDT'", "-#,##0.00 'BDT' 'BDT'", "-", " 'BDT'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a241694640 = b(["", , 1, 2, 2, , , 0, 3, , " 'BGN'", "#,##0.00 'BGN'", "-#,##0.00 'BGN' 'BGN'", "-", " 'BGN'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b320102705 = b(["", , 1, 3, 3, , , 0, 3, , " 'BHD'", "#,##0.000 'BHD'", "-#,##0.000 'BHD' 'BHD'", "-", " 'BHD'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b953097407 = b(["", , 1, 2, 2, , , 0, 3, , " 'R$'", "#,##0.00 'R$'", "-#,##0.00 'R$' 'R$'", "-", " 'R$'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a503720686 = b(["", , 1, 0, 0, , , , 3, , " 'BYR'", "#,##0 'BYR'", "-#,##0 'BYR' 'BYR'", "-", " 'BYR'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a918635533 = b(["", , 1, 2, 2, , , 0, 3, , " 'CA$'", "#,##0.00 'CA$'", "-#,##0.00 'CA$' 'CA$'", "-", " 'CA$'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1150439304 = b(["", , 1, 2, 2, , , 0, 3, , " 'CHF'", "#,##0.00 'CHF'", "-#,##0.00 'CHF' 'CHF'", "-", " 'CHF'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1017198362 = b(["", , 1, 0, 0, , , , 3, , " 'CLP'", "#,##0 'CLP'", "-#,##0 'CLP' 'CLP'", "-", " 'CLP'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1409948705 = b(["", , 1, 2, 2, , , 0, 3, , " 'CN¥'", "#,##0.00 'CN¥'", "-#,##0.00 'CN¥' 'CN¥'", "-", " 'CN¥'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1103085815 = b(["", , 1, 0, 0, , , , 3, , " 'COP'", "#,##0 'COP'", "-#,##0 'COP' 'COP'", "-", " 'COP'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1670381627 = b(["", , 1, 2, 2, , , 0, 3, , " 'CZK'", "#,##0.00 'CZK'", "-#,##0.00 'CZK' 'CZK'", "-", " 'CZK'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b823859282 = b(["", , 1, 2, 2, , , 0, 3, , " 'kr.'", "#,##0.00 'kr.'", "-#,##0.00 'kr.' 'kr.'", "-", " 'kr.'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b1743546635 = b(["", , 1, 2, 2, , , 0, 3, , " 'DZD'", "#,##0.00 'DZD'", "-#,##0.00 'DZD' 'DZD'", "-", " 'DZD'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b1388914571 = b(["", , 1, 2, 2, , , 0, 3, , " 'EGP'", "#,##0.00 'EGP'", "-#,##0.00 'EGP' 'EGP'", "-", " 'EGP'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b279254733 = b(["", , 1, 2, 2, , , 0, 3, , " '€'", "#,##0.00 '€'", "-#,##0.00 '€' '€'", "-", " '€'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a736884138 = b(["", , 1, 2, 2, , , 0, 3, , " '£'", "#,##0.00 '£'", "-#,##0.00 '£' '£'", "-", " '£'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a417492505 = b(["", , 1, 2, 2, , , 0, 3, , " 'GHS'", "#,##0.00 'GHS'", "-#,##0.00 'GHS' 'GHS'", "-", " 'GHS'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a759195275 = b(["", , 1, 2, 2, , , 0, 3, , " 'GTQ'", "#,##0.00 'GTQ'", "-#,##0.00 'GTQ' 'GTQ'", "-", " 'GTQ'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1347478152 = b(["", , 1, 2, 2, , , 0, 3, , " 'HK$'", "#,##0.00 'HK$'", "-#,##0.00 'HK$' 'HK$'", "-", " 'HK$'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1583899528 = b(["", , 1, 2, 2, , , 0, 3, , " 'HRK'", "#,##0.00 'HRK'", "-#,##0.00 'HRK' 'HRK'", "-", " 'HRK'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1665169376 = b(["", , 1, 2, 2, , , 0, 3, , " 'HUF'", "#,##0.00 'HUF'", "-#,##0.00 'HUF' 'HUF'", "-", " 'HUF'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1820066986 = b(["", , 1, 0, 0, , , , 3, , " 'IDR'", "#,##0 'IDR'", "-#,##0 'IDR' 'IDR'", "-", " 'IDR'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b281101775 = b(["", , 1, 2, 2, , , 0, 3, , " '₪'", "#,##0.00 '₪'", "-#,##0.00 '₪' '₪'", "-", " '₪'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b267248960 = b(["", , 1, 2, 2, , , 0, 3, , " '₹'", "#,##0.00 '₹'", "-#,##0.00 '₹' '₹'", "-", " '₹'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b2115650641 = b(["", , 1, 0, 0, , , , 3, , " 'IQD'", "#,##0 'IQD'", "-#,##0 'IQD' 'IQD'", "-", " 'IQD'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b2051927692 = b(["", , 1, 0, 0, , , , 3, , " 'ISK'", "#,##0 'ISK'", "-#,##0 'ISK' 'ISK'", "-", " 'ISK'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b1167194574 = b(["", , 1, 0, 0, , , , 3, , " 'JP¥'", "#,##0 'JP¥'", "-#,##0 'JP¥' 'JP¥'", "-", " 'JP¥'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b413347520 = b(["", , 1, 2, 2, , , 0, 3, , " 'KES'", "#,##0.00 'KES'", "-#,##0.00 'KES' 'KES'", "-", " 'KES'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a580276156 = b(["", , 1, 0, 0, , , , 3, , " '₩'", "#,##0 '₩'", "-#,##0 '₩' '₩'", "-", " '₩'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b493066903 = b(["", , 1, 3, 3, , , 0, 3, , " 'KWD'", "#,##0.000 'KWD'", "-#,##0.000 'KWD' 'KWD'", "-", " 'KWD'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a188788172 = b(["", , 1, 2, 2, , , 0, 3, , " 'KZT'", "#,##0.00 'KZT'", "-#,##0.00 'KZT' 'KZT'", "-", " 'KZT'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a128505389 = b(["", , 1, 0, 0, , , , 3, , " 'LBP'", "#,##0 'LBP'", "-#,##0 'LBP' 'LBP'", "-", " 'LBP'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1233290423 = b(["", , 1, 2, 2, , , 0, 3, , " 'MAD'", "#,##0.00 'MAD'", "-#,##0.00 'MAD' 'MAD'", "-", " 'MAD'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1519581933 = b(["", , 1, 2, 2, , , 0, 3, , " 'MKD'", "#,##0.00 'MKD'", "-#,##0.00 'MKD' 'MKD'", "-", " 'MKD'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1862208224 = b(["", , 1, 2, 2, , , 0, 3, , " 'MX$'", "#,##0.00 'MX$'", "-#,##0.00 'MX$' 'MX$'", "-", " 'MX$'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1933319341 = b(["", , 1, 2, 2, , , 0, 3, , " 'MYR'", "#,##0.00 'MYR'", "-#,##0.00 'MYR' 'MYR'", "-", " 'MYR'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b1993163076 = b(["", , 1, 2, 2, , , 0, 3, , " 'NGN'", "#,##0.00 'NGN'", "-#,##0.00 'NGN' 'NGN'", "-", " 'NGN'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b1766900431 = b(["", , 1, 2, 2, , , 0, 3, , " 'NOK'", "#,##0.00 'NOK'", "-#,##0.00 'NOK' 'NOK'", "-", " 'NOK'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b1487997089 = b(["", , 1, 2, 2, , , 0, 3, , " 'NZ$'", "#,##0.00 'NZ$'", "-#,##0.00 'NZ$' 'NZ$'", "-", " 'NZ$'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b275414016 = b(["", , 1, 2, 2, , , 0, 3, , " 'PEN'", "#,##0.00 'PEN'", "-#,##0.00 'PEN' 'PEN'", "-", " 'PEN'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b187679521 = b(["", , 1, 2, 2, , , 0, 3, , " 'PHP'", "#,##0.00 'PHP'", "-#,##0.00 'PHP' 'PHP'", "-", " 'PHP'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b356937782 = b(["", , 1, 0, 0, , , , 3, , " 'PKR'", "#,##0 'PKR'", "-#,##0 'PKR' 'PKR'", "-", " 'PKR'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b75009959 = b(["", , 1, 2, 2, , , 0, 3, , " 'PLN'", "#,##0.00 'PLN'", "-#,##0.00 'PLN' 'PLN'", "-", " 'PLN'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a501267145 = b(["", , 1, 2, 2, , , 0, 3, , " 'QAR'", "#,##0.00 'QAR'", "-#,##0.00 'QAR' 'QAR'", "-", " 'QAR'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1785884856 = b(["", , 1, 2, 2, , , 0, 3, , " 'RON'", "#,##0.00 'RON'", "-#,##0.00 'RON' 'RON'", "-", " 'RON'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1634173494 = b(["", , 1, 0, 0, , , , 3, , " 'RSD'", "#,##0 'RSD'", "-#,##0 'RSD' 'RSD'", "-", " 'RSD'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1946577510 = b(["", , 1, 2, 2, , , 0, 3, , " 'RUB'", "#,##0.00 'RUB'", "-#,##0.00 'RUB' 'RUB'", "-", " 'RUB'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b2018692789 = b(["", , 1, 2, 2, , , 0, 3, , " 'SAR'", "#,##0.00 'SAR'", "-#,##0.00 'SAR' 'SAR'", "-", " 'SAR'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b1910640832 = b(["", , 1, 2, 2, , , 0, 3, , " 'SEK'", "#,##0.00 'SEK'", "-#,##0.00 'SEK' 'SEK'", "-", " 'SEK'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b1859847177 = b(["", , 1, 2, 2, , , 0, 3, , " 'SGD'", "#,##0.00 'SGD'", "-#,##0.00 'SGD' 'SGD'", "-", " 'SGD'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b340535994 = b(["", , 1, 2, 2, , , 0, 3, , " '฿'", "#,##0.00 '฿'", "-#,##0.00 '฿' '฿'", "-", " '฿'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b1353130725 = b(["", , 1, 3, 3, , , 0, 3, , " 'TND'", "#,##0.000 'TND'", "-#,##0.000 'TND' 'TND'", "-", " 'TND'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b638028894 = b(["", , 1, 2, 2, , , 0, 3, , " 'TRY'", "#,##0.00 'TRY'", "-#,##0.00 'TRY' 'TRY'", "-", " 'TRY'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b1659771995 = b(["", , 1, 2, 2, , , 0, 3, , " 'NT$'", "#,##0.00 'NT$'", "-#,##0.00 'NT$' 'NT$'", "-", " 'NT$'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b671529568 = b(["", , 1, 0, 0, , , , 3, , " 'TZS'", "#,##0 'TZS'", "-#,##0 'TZS' 'TZS'", "-", " 'TZS'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b252920637 = b(["", , 1, 2, 2, , , 0, 3, , " 'UAH'", "#,##0.00 'UAH'", "-#,##0.00 'UAH' 'UAH'", "-", " 'UAH'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b323362151 = b(["", , 1, 0, 0, , , , 3, , " 'UGX'", "#,##0 'UGX'", "-#,##0 'UGX' 'UGX'", "-", " 'UGX'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a619596971 = b(["", , 1, 2, 2, , , 0, 3, , " '$'", "#,##0.00 '$'", "-#,##0.00 '$' '$'", "-", " '$'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a747252606 = b(["", , 1, 2, 2, , , 0, 3, , " 'VEF'", "#,##0.00 'VEF'", "-#,##0.00 'VEF' 'VEF'", "-", " 'VEF'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a582123198 = b(["", , 1, 0, 0, , , , 3, , " '₫'", "#,##0 '₫'", "-#,##0 '₫' '₫'", "-", " '₫'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b101134318 = b(["", , 1, 2, 2, , , 0, 3, , " 'ZAR'", "#,##0.00 'ZAR'", "-#,##0.00 'ZAR' 'ZAR'", "-", " 'ZAR'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a247033099 = b(["", , 1, 2, 2, , , 0, 3, , " 'ZMW'", "#,##0.00 'ZMW'", "-#,##0.00 'ZMW' 'ZMW'", "-", " 'ZMW'", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.b426198860 = b(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a893165335 = b(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 t", other: "0 t" }, 4: { one: "00 t", other: "00 t" }, 5: { one: "000 t", other: "000 t" }, 6: { one: "0 mio", other: "0 mio" }, 7: { one: "00 mio", other: "00 mio" }, 8: { one: "000 mio", other: "000 mio" }, 9: { one: "0 mia", other: "0 mia" }, 10: { one: "00 mia", other: "00 mia" }, 11: { one: "000 mia", other: "000 mia" }, 12: { one: "0 bio", other: "0 bio" }, 13: { one: "00 bio", other: "00 bio" }, 14: { one: "000 bio", other: "000 bio" }, maxExponent: 14 }], k("da").pluralGenerator({}))),
                (k.a338433625 = b(["", , 1, 0, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 t", other: "0 t" }, 4: { one: "00 t", other: "00 t" }, 5: { one: "000 t", other: "000 t" }, 6: { one: "0 mio", other: "0 mio" }, 7: { one: "00 mio", other: "00 mio" }, 8: { one: "000 mio", other: "000 mio" }, 9: { one: "0 mia", other: "0 mia" }, 10: { one: "00 mia", other: "00 mia" }, 11: { one: "000 mia", other: "000 mia" }, 12: { one: "0 bio", other: "0 bio" }, 13: { one: "00 bio", other: "00 bio" }, 14: { one: "000 bio", other: "000 bio" }, maxExponent: 14 }], k("da").pluralGenerator({}))),
                (k.b1383633926 = b(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u("round"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (k.a1621711212 = c(function (e) {
                    var r = String(e).split("."),
                        n = r[0],
                        t = Number(r[0]) == e;
                    return 1 != e && (t || (0 != n && 1 != n)) ? "other" : "one";
                })),
                (k.a496616110 = m(k("da").numberFormatter({ raw: "#,##0.00 'AED'" }))),
                (k.b1651759507 = m(k("da").numberFormatter({ raw: "#,##0 'ALL'" }))),
                (k.b421300660 = m(k("da").numberFormatter({ raw: "#,##0.00 'ARS'" }))),
                (k.a1811773118 = m(k("da").numberFormatter({ raw: "#,##0.00 'AU$'" }))),
                (k.b1052925920 = m(k("da").numberFormatter({ raw: "#,##0.00 'BAM'" }))),
                (k.a1809989180 = m(k("da").numberFormatter({ raw: "#,##0.00 'BDT'" }))),
                (k.a5758021 = m(k("da").numberFormatter({ raw: "#,##0.00 'BGN'" }))),
                (k.a606970192 = m(k("da").numberFormatter({ raw: "#,##0.000 'BHD'" }))),
                (k.a1121105618 = m(k("da").numberFormatter({ raw: "#,##0.00 'R$'" }))),
                (k.b1084528301 = m(k("da").numberFormatter({ raw: "#,##0 'BYR'" }))),
                (k.a432222056 = m(k("da").numberFormatter({ raw: "#,##0.00 'CA$'" }))),
                (k.b1887928467 = m(k("da").numberFormatter({ raw: "#,##0.00 'CHF'" }))),
                (k.a1948377767 = m(k("da").numberFormatter({ raw: "#,##0 'CLP'" }))),
                (k.b313919808 = m(k("da").numberFormatter({ raw: "#,##0.00 'CN¥'" }))),
                (k.a315921514 = m(k("da").numberFormatter({ raw: "#,##0 'COP'" }))),
                (k.a1345381658 = m(k("da").numberFormatter({ raw: "#,##0.00 'CZK'" }))),
                (k.b1634428630 = m(k("da").numberFormatter({ raw: "#,##0.00 'kr.'" }))),
                (k.b1407179360 = m(k("da").numberFormatter({ raw: "#,##0.00 'DZD'" }))),
                (k.a996480032 = m(k("da").numberFormatter({ raw: "#,##0.00 'EGP'" }))),
                (k.a593887980 = m(k("da").numberFormatter({ raw: "#,##0.00 '€'" }))),
                (k.a44582297 = m(k("da").numberFormatter({ raw: "#,##0.00 '£'" }))),
                (k.a1160524540 = m(k("da").numberFormatter({ raw: "#,##0.00 'GHS'" }))),
                (k.b1131591478 = m(k("da").numberFormatter({ raw: "#,##0.00 'GTQ'" }))),
                (k.a841441357 = m(k("da").numberFormatter({ raw: "#,##0.00 'HK$'" }))),
                (k.b1335563411 = m(k("da").numberFormatter({ raw: "#,##0.00 'HRK'" }))),
                (k.a1183801877 = m(k("da").numberFormatter({ raw: "#,##0.00 'HUF'" }))),
                (k.a1067501335 = m(k("da").numberFormatter({ raw: "#,##0 'IDR'" }))),
                (k.b393774658 = m(k("da").numberFormatter({ raw: "#,##0.00 '₪'" }))),
                (k.a1352603553 = m(k("da").numberFormatter({ raw: "#,##0.00 '₹'" }))),
                (k.b680660814 = m(k("da").numberFormatter({ raw: "#,##0 'IQD'" }))),
                (k.a1294750605 = m(k("da").numberFormatter({ raw: "#,##0 'ISK'" }))),
                (k.a775858011 = m(k("da").numberFormatter({ raw: "#,##0 'JP¥'" }))),
                (k.a1174287541 = m(k("da").numberFormatter({ raw: "#,##0.00 'KES'" }))),
                (k.b58549890 = m(k("da").numberFormatter({ raw: "#,##0 '₩'" }))),
                (k.b459952650 = m(k("da").numberFormatter({ raw: "#,##0.000 'KWD'" }))),
                (k.b1634342487 = m(k("da").numberFormatter({ raw: "#,##0.00 'KZT'" }))),
                (k.a168699380 = m(k("da").numberFormatter({ raw: "#,##0 'LBP'" }))),
                (k.a680456222 = m(k("da").numberFormatter({ raw: "#,##0.00 'MAD'" }))),
                (k.a965558440 = m(k("da").numberFormatter({ raw: "#,##0.00 'MKD'" }))),
                (k.b95504085 = m(k("da").numberFormatter({ raw: "#,##0.00 'MX$'" }))),
                (k.a906516200 = m(k("da").numberFormatter({ raw: "#,##0.00 'MYR'" }))),
                (k.b555354439 = m(k("da").numberFormatter({ raw: "#,##0.00 'NGN'" }))),
                (k.b2131147036 = m(k("da").numberFormatter({ raw: "#,##0.00 'NOK'" }))),
                (k.b1158945194 = m(k("da").numberFormatter({ raw: "#,##0.00 'NZ$'" }))),
                (k.a1155258869 = m(k("da").numberFormatter({ raw: "#,##0.00 'PEN'" }))),
                (k.b419939082 = m(k("da").numberFormatter({ raw: "#,##0.00 'PHP'" }))),
                (k.b1995137033 = m(k("da").numberFormatter({ raw: "#,##0 'PKR'" }))),
                (k.b1222149956 = m(k("da").numberFormatter({ raw: "#,##0.00 'PLN'" }))),
                (k.b537428916 = m(k("da").numberFormatter({ raw: "#,##0.00 'QAR'" }))),
                (k.a631014461 = m(k("da").numberFormatter({ raw: "#,##0.00 'RON'" }))),
                (k.b400229621 = m(k("da").numberFormatter({ raw: "#,##0 'RSD'" }))),
                (k.a1317519439 = m(k("da").numberFormatter({ raw: "#,##0.00 'RUB'" }))),
                (k.b1346775542 = m(k("da").numberFormatter({ raw: "#,##0.00 'SAR'" }))),
                (k.a2002835125 = m(k("da").numberFormatter({ raw: "#,##0.00 'SEK'" }))),
                (k.b717528866 = m(k("da").numberFormatter({ raw: "#,##0.00 'SGD'" }))),
                (k.a1855526848 = m(k("da").numberFormatter({ raw: "#,##0.00 '฿'" }))),
                (k.b1352127356 = m(k("da").numberFormatter({ raw: "#,##0.000 'TND'" }))),
                (k.b1495867757 = m(k("da").numberFormatter({ raw: "#,##0.00 'TRY'" }))),
                (k.b1954528819 = m(k("da").numberFormatter({ raw: "#,##0.00 'NT$'" }))),
                (k.a1137419489 = m(k("da").numberFormatter({ raw: "#,##0 'TZS'" }))),
                (k.a1852553618 = m(k("da").numberFormatter({ raw: "#,##0.00 'UAH'" }))),
                (k.b954292472 = m(k("da").numberFormatter({ raw: "#,##0 'UGX'" }))),
                (k.a533234088 = m(k("da").numberFormatter({ raw: "#,##0.00 '$'" }))),
                (k.b1501814217 = m(k("da").numberFormatter({ raw: "#,##0.00 'VEF'" }))),
                (k.a2133493314 = m(k("da").numberFormatter({ raw: "#,##0 '₫'" }))),
                (k.b2032005085 = m(k("da").numberFormatter({ raw: "#,##0.00 'ZAR'" }))),
                (k.a171250250 = m(k("da").numberFormatter({ raw: "#,##0.00 'ZMW'" }))),
                (k.a749989856 = v({ 1: k("da").numberFormatter({ raw: "0" }) }, { pattern: "d. MMM", timeSeparator: ".", months: { M: { 3: { 1: "jan.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "maj", 6: "jun.", 7: "jul.", 8: "aug.", 9: "sep.", 10: "okt.", 11: "nov.", 12: "dec." } } } })),
                (k.a1129731325 = v({ 1: k("da").numberFormatter({ raw: "0" }) }, { pattern: "d. MMM y", timeSeparator: ".", months: { M: { 3: { 1: "jan.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "maj", 6: "jun.", 7: "jul.", 8: "aug.", 9: "sep.", 10: "okt.", 11: "nov.", 12: "dec." } } } })),
                (k.a679141554 = v({ 1: k("da").numberFormatter({ raw: "0" }), 2: k("da").numberFormatter({ raw: "00" }) }, { pattern: "h.mm a", timeSeparator: ".", dayPeriods: { am: "AM", pm: "PM" } })),
                (k.a1748099745 = v({ 1: k("da").numberFormatter({ raw: "0" }) }, { pattern: "E d. MMM", timeSeparator: ".", days: { E: { 1: { sun: "søn.", mon: "man.", tue: "tir.", wed: "ons.", thu: "tor.", fri: "fre.", sat: "lør." } } }, months: { M: { 3: { 1: "jan.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "maj", 6: "jun.", 7: "jul.", 8: "aug.", 9: "sep.", 10: "okt.", 11: "nov.", 12: "dec." } } } })),
                (k.a635183396 = v({ 1: k("da").numberFormatter({ raw: "0" }) }, { pattern: "E d. MMM y", timeSeparator: ".", days: { E: { 1: { sun: "søn.", mon: "man.", tue: "tir.", wed: "ons.", thu: "tor.", fri: "fre.", sat: "lør." } } }, months: { M: { 3: { 1: "jan.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "maj", 6: "jun.", 7: "jul.", 8: "aug.", 9: "sep.", 10: "okt.", 11: "nov.", 12: "dec." } } } })),
                (k.a1755487913 = v({ 1: k("da").numberFormatter({ raw: "0" }) }, { pattern: "d. MMMM", timeSeparator: ".", months: { M: { 4: { 1: "januar", 2: "februar", 3: "marts", 4: "april", 5: "maj", 6: "juni", 7: "juli", 8: "august", 9: "september", 10: "oktober", 11: "november", 12: "december" } } } })),
                (k.b890805480 = v({ 1: k("da").numberFormatter({ raw: "0" }), 2: k("da").numberFormatter({ raw: "00" }) }, { pattern: "d. MMM y h.mm a", timeSeparator: ".", months: { M: { 3: { 1: "jan.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "maj", 6: "jun.", 7: "jul.", 8: "aug.", 9: "sep.", 10: "okt.", 11: "nov.", 12: "dec." } } }, dayPeriods: { am: "AM", pm: "PM" } })),
                (k.a237748668 = v({ 1: k("da").numberFormatter({ raw: "0" }) }, { pattern: "d. MMMM y", timeSeparator: ".", months: { M: { 4: { 1: "januar", 2: "februar", 3: "marts", 4: "april", 5: "maj", 6: "juni", 7: "juli", 8: "august", 9: "september", 10: "oktober", 11: "november", 12: "december" } } } })),
                (k.b750137029 = v({ 1: k("da").numberFormatter({ raw: "0" }), 2: k("da").numberFormatter({ raw: "00" }) }, { pattern: "d. MMM h.mm a", timeSeparator: ".", months: { M: { 3: { 1: "jan.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "maj", 6: "jun.", 7: "jul.", 8: "aug.", 9: "sep.", 10: "okt.", 11: "nov.", 12: "dec." } } }, dayPeriods: { am: "AM", pm: "PM" } })),
                (k.a513597776 = v({ 1: k("da").numberFormatter({ raw: "0" }), 2: k("da").numberFormatter({ raw: "00" }) }, { pattern: "dd/MM/y", timeSeparator: "." })),
                (k.a2100554932 = v({ 1: k("da").numberFormatter({ raw: "0" }) }, { pattern: "y", timeSeparator: "." })),
                (k.a1144760963 = v({ 1: k("da").numberFormatter({ raw: "0" }) }, { pattern: "MMM y", timeSeparator: ".", months: { M: { 3: { 1: "jan.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "maj", 6: "jun.", 7: "jul.", 8: "aug.", 9: "sep.", 10: "okt.", 11: "nov.", 12: "dec." } } } })),
                (k.a1702309718 = v({ 1: k("da").numberFormatter({ raw: "0" }), 2: k("da").numberFormatter({ raw: "00" }) }, { pattern: "EEEE 'den' d. MMMM y 'kl'. HH.mm.ss zzzz", timeSeparator: ".", days: { E: { 4: { sun: "søndag", mon: "mandag", tue: "tirsdag", wed: "onsdag", thu: "torsdag", fri: "fredag", sat: "lørdag" } } }, months: { M: { 4: { 1: "januar", 2: "februar", 3: "marts", 4: "april", 5: "maj", 6: "juni", 7: "juli", 8: "august", 9: "september", 10: "oktober", 11: "november", 12: "december" } } }, gmtFormat: "GMT{0}", gmtZeroFormat: "GMT", hourFormat: "+HH.mm;-HH.mm" })),
                (k.b865201168 = v({ 1: k("da").numberFormatter({ raw: "0" }), 2: k("da").numberFormatter({ raw: "00" }) }, { pattern: "d. MMM y HH.mm.ss", timeSeparator: ".", months: { M: { 3: { 1: "jan.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "maj", 6: "jun.", 7: "jul.", 8: "aug.", 9: "sep.", 10: "okt.", 11: "nov.", 12: "dec." } } } })),
                (k.a1150972308 = v({ 1: k("da").numberFormatter({ raw: "0" }), 2: k("da").numberFormatter({ raw: "00" }) }, { pattern: "dd/MM/y", timeSeparator: "." })),
                (k.a1168942289 = v({ 2: k("da").numberFormatter({ raw: "00" }) }, { pattern: "HH.mm", timeSeparator: "." })),
                (k.b1425938237 = v({ 1: k("da").numberFormatter({ raw: "0" }), 2: k("da").numberFormatter({ raw: "00" }) }, { pattern: "E h.mm a", timeSeparator: ".", days: { E: { 1: { sun: "søn.", mon: "man.", tue: "tir.", wed: "ons.", thu: "tor.", fri: "fre.", sat: "lør." } } }, dayPeriods: { am: "AM", pm: "PM" } })),
                (k.a1129046132 = v({ 1: k("da").numberFormatter({ raw: "0" }) }, { pattern: "MMMM y", timeSeparator: ".", months: { M: { 4: { 1: "januar", 2: "februar", 3: "marts", 4: "april", 5: "maj", 6: "juni", 7: "juli", 8: "august", 9: "september", 10: "oktober", 11: "november", 12: "december" } } } })),
                (k.b1364206429 = v({ 1: k("da").numberFormatter({ raw: "0" }) }, { pattern: "d. MMM y", timeSeparator: ".", months: { M: { 3: { 1: "jan.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "maj", 6: "jun.", 7: "jul.", 8: "aug.", 9: "sep.", 10: "okt.", 11: "nov.", 12: "dec." } } } })),
                (k.a749304663 = v({}, { pattern: "MMMM", timeSeparator: ".", months: { M: { 4: { 1: "januar", 2: "februar", 3: "marts", 4: "april", 5: "maj", 6: "juni", 7: "juli", 8: "august", 9: "september", 10: "oktober", 11: "november", 12: "december" } } } })),
                (k.a2002550103 = v({}, { pattern: "cccc", timeSeparator: ".", days: { c: { 4: { sun: "søndag", mon: "mandag", tue: "tirsdag", wed: "onsdag", thu: "torsdag", fri: "fredag", sat: "lørdag" } } } })),
                (k.a358582775 = p(k("da").dateToPartsFormatter({ skeleton: "MMMd" }))),
                (k.a1881013702 = p(k("da").dateToPartsFormatter({ skeleton: "yMMMd" }))),
                (k.b157018999 = p(k("da").dateToPartsFormatter({ skeleton: "hm" }))),
                (k.b1795585174 = p(k("da").dateToPartsFormatter({ skeleton: "MMMEd" }))),
                (k.b1844866693 = p(k("da").dateToPartsFormatter({ skeleton: "yMMMEd" }))),
                (k.b1788197006 = p(k("da").dateToPartsFormatter({ skeleton: "MMMMd" }))),
                (k.b462946911 = p(k("da").dateToPartsFormatter({ skeleton: "yMMMdhm" }))),
                (k.a1139670867 = p(k("da").dateToPartsFormatter({ date: "long" }))),
                (k.a1064780178 = p(k("da").dateToPartsFormatter({ skeleton: "MMMdhm" }))),
                (k.b1591585127 = p(k("da").dateToPartsFormatter({ date: "short" }))),
                (k.b4627971 = p(k("da").dateToPartsFormatter({ skeleton: "y" }))),
                (k.a753353882 = p(k("da").dateToPartsFormatter({ skeleton: "yMMM" }))),
                (k.a1310902637 = p(k("da").dateToPartsFormatter({ datetime: "full" }))),
                (k.a949716039 = p(k("da").dateToPartsFormatter({ datetime: "medium" }))),
                (k.a1902254685 = p(k("da").dateToPartsFormatter({ skeleton: "yMMdd" }))),
                (k.b936240614 = p(k("da").dateToPartsFormatter({ time: "short" }))),
                (k.b1577111604 = p(k("da").dateToPartsFormatter({ skeleton: "Ehm" }))),
                (k.a1880328509 = p(k("da").dateToPartsFormatter({ skeleton: "yMMMM" }))),
                (k.a2094600314 = p(k("da").dateToPartsFormatter({ date: "medium" }))),
                (k.a357897582 = p(k("da").dateToPartsFormatter({ skeleton: "MMMM" }))),
                (k.a1611143022 = p(k("da").dateToPartsFormatter({ skeleton: "EEEE" }))),
                (k.a1069287050 = h(k("da").numberFormatter({}), k("da").pluralGenerator({}), { "relativeTime-type-future": { "relativeTimePattern-count-one": "om {0} dag", "relativeTimePattern-count-other": "om {0} dage" }, "relativeTime-type-past": { "relativeTimePattern-count-one": "for {0} dag siden", "relativeTimePattern-count-other": "for {0} dage siden" }, "relative-type--2": "i forgårs", "relative-type--1": "i går", "relative-type-0": "i dag", "relative-type-1": "i morgen", "relative-type-2": "i overmorgen" })),
                (k.b1545601425 = y(k("da").numberFormatter({}), k("da").pluralGenerator({}), { compoundUnitPattern: "{0} pr. {1}", unitProperties: { displayName: "sekunder", one: "{0} sekund", other: "{0} sekunder", perUnitPattern: "{0} pr. sekund" } })),
                (k.a862402575 = y(k("da").numberFormatter({}), k("da").pluralGenerator({}), { compoundUnitPattern: "{0} pr. {1}", unitProperties: { displayName: "minutter", one: "{0} minut", other: "{0} minutter", perUnitPattern: "{0} pr. min." } })),
                (k.b914067873 = y(k("da").numberFormatter({}), k("da").pluralGenerator({}), { compoundUnitPattern: "{0} pr. {1}", unitProperties: { displayName: "timer", one: "{0} time", other: "{0} timer", perUnitPattern: "{0} pr. time" } })),
                (k.b1867887120 = y(k("da").numberFormatter({}), k("da").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "sek", one: "{0} s", other: "{0} s", perUnitPattern: "{0}/s" } })),
                (k.a1531551632 = y(k("da").numberFormatter({}), k("da").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "min", one: "{0} m", other: "{0} min", perUnitPattern: "{0}/min" } })),
                (k.b554532384 = y(k("da").numberFormatter({}), k("da").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "time", one: "{0} t", other: "{0} t", perUnitPattern: "{0}/t" } })),
                (k.a1797573700 = y(k("da").numberFormatter({}), k("da").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "dag", one: "{0} d", other: "{0} d", perUnitPattern: "{0}/d" } })),
                (k.a1104019907 = y(k("da").numberFormatter({}), k("da").pluralGenerator({}), { compoundUnitPattern: "{0} pr. {1}", unitProperties: { displayName: "dage", one: "{0} dag", other: "{0} dage", perUnitPattern: "{0} pr. dag" } })),
                (k.a484309928 = y(k("da").numberFormatter({}), k("da").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "måned", one: "{0} m", other: "{0} m", perUnitPattern: "{0}/m" } })),
                (k.b300697049 = y(k("da").numberFormatter({}), k("da").pluralGenerator({}), { compoundUnitPattern: "{0} pr. {1}", unitProperties: { displayName: "måneder", one: "{0} måned", other: "{0} måneder", perUnitPattern: "{0} pr. måned" } })),
                (k.a850030009 = y(k("da").numberFormatter({}), k("da").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "år", one: "{0} år", other: "{0} år", perUnitPattern: "{0}/år" } })),
                (k.a566721656 = y(k("da").numberFormatter({}), k("da").pluralGenerator({}), { compoundUnitPattern: "{0} pr. {1}", unitProperties: { displayName: "år", one: "{0} år", other: "{0} år", perUnitPattern: "{0} om året" } })),
                (k.a1064319741 = y(k("da").numberFormatter({}), k("da").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "sekunder", one: "{0} sek.", other: "{0} sek.", perUnitPattern: "{0}/sek." } })),
                (k.b1596967587 = y(k("da").numberFormatter({}), k("da").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "minutter", one: "{0} min.", other: "{0} min.", perUnitPattern: "{0}/min." } })),
                (k.b832976627 = y(k("da").numberFormatter({}), k("da").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "timer", one: "{0} t", other: "{0} t", perUnitPattern: "{0} /t" } })),
                (k.a1908688061 = y(k("da").numberFormatter({ minimumFractionDigits: 1, maximumFractionDigits: 1, round: "truncate" }), k("da").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "sek", one: "{0} s", other: "{0} s", perUnitPattern: "{0}/s" } })),
                t("d58baa7f", k.a1512798386),
                t("ia24dc8d", k.b509021250),
                t("iab73d4b", k.a1222389628),
                t("i3b7a017", k.b1545601425),
                t("ie5d110f", k.a862402575),
                t("df5f11b3", k.b914067873),
                t("e8733ed9", k.b1867887120),
                t("be59d8c3", k.a1531551632),
                t("i3d087db", k.b554532384),
                t("ga8d18c9", k.a1797573700),
                t("a91e7d49", k.a1104019907),
                t("id952a69", k.a484309928),
                t("ga09ab65", k.b300697049),
                t("c83b901d", k.a850030009),
                t("a55b9fed", k.a566721656),
                t("ccaa970f", k.a358582775),
                t("jade381b", k.a1881013702),
                t("d725a289", k.b157018999),
                t("g08cbabb", k.b744112621),
                t("c333da63", k.a1069287050),
                t("h8054d91", k.b1795585174),
                t("i61fef37", k.a1064319741),
                t("ba705e27", k.b1596967587),
                t("j86b0d8d", k.b832976627),
                t("f668e929", k.a1570431033),
                t("i2785009", k.b786150682),
                t("c778d80b", k.b456384921),
                t("e8d93005", k.a529374361),
                t("d46781af", k.a1908688061),
                t("ba316f05", k.a762550972),
                t("c0bdd345", k.b305924294),
                t("aa2aa1a1", k.b1844866693),
                t("da44942d", k.b1788197006),
                t("bfbc051d", k.b462946911),
                t("ba2e82a1", k.a1139670867),
                t("fc209bb7", k.a1064780178),
                t("cf8abf59", k.a1077208706),
                t("a9f397f3", k.b1591585127),
                t("d857e44d", k.a496616110),
                t("cb87e3db", k.b1651759507),
                t("a9d5ffd1", k.b421300660),
                t("a0e8371d", k.a1811773118),
                t("gcc50dc9", k.b1052925920),
                t("a6a43585", k.a1809989180),
                t("a0cc8f2d", k.a5758021),
                t("i31c32c5", k.a606970192),
                t("i7dc69e9", k.a1121105618),
                t("c14a6c03", k.b1084528301),
                t("jaa3d537", k.a432222056),
                t("a824080b", k.b1887928467),
                t("d9c0bedb", k.a1948377767),
                t("bf8c0613", k.b313919808),
                t("i8163625", k.a315921514),
                t("adb53ba1", k.a1345381658),
                t("iabf697d", k.b1634428630),
                t("a1a0555b", k.b1407179360),
                t("f266f3d9", k.a996480032),
                t("a9a8652b", k.a593887980),
                t("dbf40761", k.a44582297),
                t("b0d993d9", k.a1160524540),
                t("ac1308e1", k.b1131591478),
                t("a7889ab3", k.a841441357),
                t("c614f5cd", k.b1335563411),
                t("i55d57e3", k.a1183801877),
                t("e4b6002b", k.a1067501335),
                t("d28e983b", k.b393774658),
                t("e8c9232d", k.a1352603553),
                t("c8994ae1", k.b680660814),
                t("f821c2a5", k.a1294750605),
                t("j348b9c9", k.a775858011),
                t("i6f93b9b", k.a1174287541),
                t("c6150bd5", k.b58549890),
                t("i8921e09", k.b459952650),
                t("ef239279", k.b1634342487),
                t("hecdb149", k.a168699380),
                t("fdd039b7", k.a680456222),
                t("f30c2c37", k.a965558440),
                t("d9ea7bff", k.b95504085),
                t("ea3df4b7", k.a906516200),
                t("jaac21bb", k.b555354439),
                t("hb435ced", k.b2131147036),
                t("ce699d81", k.b1158945194),
                t("bc56d3d7", k.a1155258869),
                t("f8561913", k.b419939082),
                t("g6485d53", k.b1995137033),
                t("ff561cc1", k.b1222149956),
                t("b42011d3", k.b537428916),
                t("a6660bcd", k.a631014461),
                t("f9b80449", k.b400229621),
                t("gdee4d5d", k.a1317519439),
                t("h36f2103", k.b1346775542),
                t("a19ad037", k.a2002835125),
                t("g713f699", k.b717528866),
                t("ff2e39af", k.a1855526848),
                t("be34316d", k.b1352127356),
                t("aef81b75", k.b1495867757),
                t("fcce70a5", k.b1954528819),
                t("jc9d352f", k.a1137419489),
                t("be1cb8c5", k.a1852553618),
                t("j9371501", k.b954292472),
                t("j7d4397d", k.a533234088),
                t("d61441dd", k.b1501814217),
                t("e2a99e97", k.a2133493314),
                t("f7ce19ab", k.b2032005085),
                t("b2a0213f", k.a171250250),
                t("d7d71245", k.b4627971),
                t("a2f2faab", k.a753353882),
                t("g8d1b99b", k.a1310902637),
                t("d0a77c9b", k.a949716039),
                t("e18e399b", k.a1902254685),
                t("b6ca7bcb", k.b936240614),
                t("h0e4cdf5", k.b1577111604),
                t("g727ddcf", k.a1880328509),
                t("h3629783", k.a2094600314),
                t("a20c68af", k.a357897582),
                t("ja781451", k.b426198860),
                t("cfa1a7b9", k.a893165335),
                t("f3b9b9a7", k.a1611143022),
                t("eefcd267", k.a338433625),
                t("fa8afc43", k.b1383633926);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/i18n/da.b6c522fa.js.map
