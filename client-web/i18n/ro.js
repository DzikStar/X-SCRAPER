"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["i18n/ro"],
    {
        79767: (e, a, i) => {
            var t = i(292426)._register("ro", {
                get emoji() {
                    return i.e("i18n/emoji-ro").then(i.t.bind(i, 877035, 23));
                },
            });
            function r(e, a, i, t) {
                switch (((r = e), (n = String(r).split(".")), (c = !n[1]), (u = Number(n[0]) == r && n[0].slice(-2)), 1 == r && c ? "one" : !c || 0 == r || (1 != r && u >= 1 && u <= 19) ? "few" : "other")) {
                    case "few":
                        return a;
                    case "one":
                        return i;
                    default:
                        return t;
                }
                var r, n, c, u;
            }
            function n(e, a, i) {
                return "one" == ((t = e), (r = !String(t).split(".")[1]), 1 == t && r ? "one" : "other") ? a : i;
                var t, r;
            }
            t("c39b0e24", "X"),
                t("jb38600c", "Niciunul"),
                t("f07eac34", "Cont de parodie"),
                t("a41b5c2e", "Cont de fan"),
                t("i428ea62", "Cont de comentarii"),
                t("ac0d27be", "Ne pare rău, acest cont a fost suspendat."),
                t("bcee7444", "Actualizarea contului nu a reușit."),
                t("e0cbf77a", "Adaugă un telefon"),
                t("f377195c", "X este supraîncărcat. Te rugăm să aștepți câteva momente și apoi să încerci din nou."),
                t("d67f9456", "Realizarea acestei acțiuni este blocată pentru tine."),
                t("e0ece1b6", "Nu se poate atașa conținutul media, încearcă să încarci din nou."),
                t("i82e8f04", "Pentru a ne proteja utilizatorii de spam și de alte activități rău intenționate, acest cont a fost blocat temporar de la urmărirea mai multor conturi. Asigură-te că ai înțeles Regulile X."),
                t("jf7be47a", "Pentru a ne proteja utilizatorii de spam și alte activități rău intenționate, acest cont este blocat temporar de la trimiterea de postări. Asigură-te că ai înțeles Regulile X."),
                t("g75fec74", "Ai atins limita zilnică pentru această acțiune. Adaugă un număr de telefon la contul tău pentru a elimina limita."),
                t("abb8b6e0", "Acest număr de telefon este deja înregistrat."),
                t("f30bd1fc", "Nu putem trimite un SMS la acest număr de telefon, deoarece operatorul de telefonie nu este acceptat."),
                t("i54e550c", "Nu putem verifica acest număr de telefon."),
                t("h154702a", "Nu putem finaliza solicitarea, deoarece acest link a fost identificat de X sau de partenerii noștri drept potențial dăunător. Vizitează Centrul de ajutor pentru a afla mai multe."),
                t("c8cb0b4c", "Parola pe care ai introdus-o este incorectă."),
                t("b1b54f9e", "Conținutul media pe care ai încercat să-l încarci a fost nevalid."),
                t("i859a9d4", "Află mai multe"),
                t("d6e72ce1", function (e) {
                    return "Parola ta trebuie să aibă sub " + e.count + " caractere. Introdu o parolă mai scurtă.";
                }),
                t("a34dccd7", function (e) {
                    return "Parola ta trebuie să aibă cel puțin " + e.count + " caractere. Introdu o parolă mai lungă.";
                }),
                t("jea2ff04", "Parola e prea simplu de ghicit. Alege o parolă mai puternică."),
                t("ce482c36", "Unul sau mai multe câmpuri sunt nevalide. Verifică datele de intrare și încearcă din nou."),
                t("db626d88", "Adaugă-ți numărul de telefon pentru a termina configurarea contului tău"),
                t("i3ee2550", "Completează toate câmpurile necesare."),
                t("cf18a258", "Această solicitare pare a fi automatizată. Pentru a ne proteja utilizatorii de spam și alte activități rău intenționate, nu putem efectua această acțiune chiar acum. Încearcă din nou mai târziu."),
                t("h7ffa648", "S-a depășit limita ratei de verificare prin SMS."),
                t("b87ceb1c", "Codul PIN de verificare trimis prin SMS este nevalid."),
                t("f87e2faa", "Ne pare rău, nu am putut găsi utilizatorul."),
                t("cdaf8222", "Ne pare rău, ai atins limita. Așteaptă câteva momente și încearcă din nou."),
                t("c1b0e710", "Contul tău este suspendat și nu îi este permis să realizeze această acțiune."),
                t("bfb22fae", "Ne pare rău, dar postarea respectivă a fost ștearsă."),
                t("a23cd3ba", "Unele acțiuni pentru această postare au fost dezactivate de X."),
                t("bb558892", "Acest utilizator are deja un număr de telefon verificat."),
                t("hae1c934", "Ceva nu a mers bine, dar nu te îngrijora – nu este vina ta."),
                t("e784846c", "Profilul tău este în curs de revizuire. Nu sunt permise alte modificări ale numelui și ale fotografiei de profil în perioada de revizuire."),
                t("h1cbdd30", "Reîmprospătează pagina și încearcă din nou."),
                t("a5077d3e", "Reîmprospătează"),
                t("b2648ba4", "Contul tău nu are permisiunea de a realiza această acțiune. Reîmprospătează pagina și încearcă din nou."),
                t("bcd6bb0e", "Membru al"),
                t("hd8c22d2", "Mod."),
                t("c3153100", "Admin"),
                t("fa9adac1", function (e) {
                    return "Caută „" + e.query + "”";
                }),
                t("jcec6620", "Răspuns la postare ascuns"),
                t("f75d1806", "Premium"),
                t("j4a7d9a6", "De bază"),
                t("hedf9d7c", "Premium+"),
                t("f5de898e", "Imagine de profil hexagonală"),
                t("fcc8734a", "Imagine de profil pătrată"),
                t("c64e46f8", "Acest membru a fost eliminat din Comunitate, iar postările sale au fost ascunse."),
                t("b3f1cb42", "Un moderator a ascuns această postare pentru că a încălcat una din regulile Comunității."),
                t("cbd2dc9c", "Ai raportat această postare."),
                t("cfbea177", function (e) {
                    return "Spațiul utilizatorului " + e.name;
                }),
                t("ab4fc8bc", "Spațiu"),
                t("jd859c9c", "Ai fost eliminat din acest Spațiu."),
                t("c60ed9b0", "Nu este autorizat să te alături acestui Spațiu."),
                t("d8227e16", "Nu ești autorizat să creezi acest Spațiu"),
                t("f027fed8", "Imagine în imagine"),
                t("hd50e064", "Nu acum"),
                t("i76d640e", "Avem nevoie de permisiunea ta"),
                t("fdaa0be8", "Pentru a vorbi în acest Spațiu, trebuie să acorzi X accesul la microfonul tău. Verifică setările browser-ului. "),
                t("gea6cc1a", "Ești sigur?"),
                t("hb568af4", "Ignoră"),
                t("f7c8617a", "Ce sunt clipurile?"),
                t("ecc7d2ec", "Clipurile sunt momente capturate pe care le poate face și distribui oricine din Spațiul tău. Toate clipurile expiră după 30 de zile."),
                t("d575ee02", "Cine poate face un clip?"),
                t("dbc477a4", "Orice persoană (chiar și ascultătorii) poate face clipuri. Singura condiție este să fii conectat la X."),
                t("ed1d1cc0", "Orice persoană care vorbește poate fi într-un clip"),
                t("e5d193c8", "Dacă vorbești, este posibil să apari într-un clip. Te vom anunța dacă apari într-unul."),
                t("e1547ec0", "Înregistrează un clip cu un moment în Spațiu"),
                t("i154245e", "Ai auzit ceva ridicol sau uimitor? Înregistrează momentul și distribuie clipul."),
                t("j24c37b2", "Am înțeles"),
                t("g1c6f16e", "Spații înregistrate"),
                t("e5609214", "Păstrează Spațiul în direct activat"),
                t("g665514c", "Doar vorbitorii sunt înregistrați"),
                t("ja196c5a", "Invitații care vorbesc vor fi înregistrați. Înregistrarea este publică, așadar poate fi redată de orice utilizator."),
                t("dd317ed6", "Redă sau partajează cu orice utilizator"),
                t("jf03b37c", "Ascultă înregistrarea oricând dorești. De asemenea, o poți distribui cu o postare."),
                t("fd05976b", "Află mai multe"),
                t("b4f91a8a", "Înregistrare activă"),
                t("gb418012", "Bun venit la Spații"),
                t("fec3c1e0", "Locul unde se petrec conversațiile audio în direct"),
                t("j32eb4f8", "Adaugă până la 10 vorbitori"),
                t("j4f133a6", "Poți invita orice persoană de pe X să vorbească."),
                t("ed434ac6", "Spațiile sunt publice, oricine se poate alătura"),
                t("e0025688", "În Spațiul tău, tu faci regulile"),
                t("c1bc6f86", "În calitate de gazdă, controlezi cine are voie să vorbească. De asemenea, ai dreptul să elimini persoane nedorite din Spațiul tău."),
                t("b0bc8330", "Poți bloca și raporta persoane într-un Spațiu."),
                t("cb17a0f3", "Află mai multe"),
                t("dcd77941", "Află mai multe"),
                t("cc724cb0", "Creează clip"),
                t("cfd2f35e", "Anulează"),
                t("c1df579e", "Înainte"),
                t("e3146662", "Pentru acest clip nu există subtitrări."),
                t("f123fea8", "Raportează acest Spațiu"),
                t("d0aebc28", "Descrie problema"),
                t("g971a4e8", "Autovătămare"),
                t("b96e6682", "Violență"),
                t("e5bf9b3a", "Conținut sexual"),
                t("d2a34320", "Siguranța copiilor"),
                t("a9ba3e28", "Informații private"),
                t("d5519f4a", "Comportament abuziv"),
                t("eb55363c", "Acest Spațiu a fost raportat"),
                t("i65de934", "Asculți în modul anonim"),
                t("b1037050", "Gestionează Spațiul"),
                t("ic107434", "Pornește camera"),
                t("d7e0329c", "Oprește camera"),
                t("b772cd66", "Gata"),
                t("b3bd3e38", "Întâi postările populare"),
                t("d88cf16c", "Mai întâi cele mai recente postări"),
                t("bd4ad3ea", "Lată"),
                t("ca1180a0", "Medie"),
                t("c86ff1b0", "Îngustă"),
                t("eed02406", "Mică"),
                t("cffb04d6", "Standard"),
                t("af15cef8", "Postare cu note"),
                t("ab28945c", "Profilul colaboratorului"),
                t("e2462db4", "Cel mai distribuit în rețeaua ta · Ultimele 24 de ore"),
                t("ad16f482", "Eveniment"),
                t("c20aaf3e", "Eroare"),
                t("edf7bc2e", "Populare"),
                t("fa884026", "Listă"),
                t("fa98627a", "Profil"),
                t("a9ae1e78", "Caută"),
                t("a2a3824a", "Subiect"),
                t("a6d5b010", "Cronologie"),
                t("h5860a68", "Grok"),
                t("a990900c", "Biografie"),
                t("h02a6fe6", "Comunități"),
                t("a15648a4", "Notele Comunității"),
                t("j359a2a9", function (e) {
                    return e.handle + " • " + e.itemName;
                }),
                t("j5ec9765", function (e) {
                    return e.handle + " • Folderul Marcaje";
                }),
                t("ce5deee7", function (e) {
                    return e.handle + " • Mesaje";
                }),
                t("d80c77dc", "Ai ascuns aceste răspunsuri"),
                t("ef939f4b", function (e) {
                    return "Răspunsurile au fost ascunse de @" + e.screenName;
                }),
                t("g40ff2b4", "Conținutul tău media nu a putut fi redemensionat și este prea mare pentru a fi încărcat."),
                t("b8098028", "Una sau mai multe imagini depășesc limita de mărime și nu pot fi redimensionate."),
                t("b36f4170", "Fișierul este gol."),
                t("hab3781e", "Unul sau mai multe dintre fișierele furnizate nu sunt imagini."),
                t("f6c4fb02", "Fișierul GIF nu a putut fi procesat. Consultă sfaturile pentru încărcarea de fișiere GIF."),
                t("g0af3dd2", "Fișierul GIF nu este compatibil. Consultă sfaturile pentru încărcarea de fișiere GIF."),
                t("b8c8b0be", "Fișierul tău video nu a putut fi procesat. Vezi sfaturile pentru încărcarea videoclipurilor."),
                t("ica6d718", "Fișierul tău video nu este compatibil. Vezi sfaturile pentru încărcarea videoclipurilor."),
                t("b28d44f7", function (e) {
                    return "Fișierul tău GIF este prea mare. Fișierele GIF ar trebui să aibă mai puțin de " + e.limit + " MB";
                }),
                t("i1db7d13", function (e) {
                    return "Fișierul tău video este prea mare. Videoclipurile ar trebui să aibă mai puțin de " + e.limit + " MB";
                }),
                t("baac0ed7", function (e) {
                    return "Fișierul tău video este prea mare. Videoclipurile ar trebui să aibă mai puțin de " + e.limit + " GB";
                }),
                t("a22385bb", function (e) {
                    return "Videoclipul tău este prea lung. Încearcă să îl menții la " + e.limit + " (de) secunde sau mai puțin.";
                }),
                t("be0440bf", function (e) {
                    return "Videoclipul tău este prea lung. Încearcă să îl menții la " + e.limit + " (de) secunde sau mai puțin.";
                }),
                t("feeba512", "Fișierul imagine nu a putut fi procesat. Consultă sfaturile pentru încărcarea imaginilor."),
                t("db123c02", "Fișierul imagine nu este compatibil. Consultă sfaturile pentru încărcarea imaginilor."),
                t("db6001e7", function (e) {
                    return "Fișierul tău imagine este prea mare. Imaginile ar trebui să aibă mai puțin de " + e.limit + " MB";
                }),
                t("eb96d952", "Fișierului tău imagine îi lipsesc înălțimea și lățimea"),
                t("b3880588", "Sesiunea de încărcare a expirat."),
                t("ca058b68", "O parte din conținutul tău media nu s-a încărcat."),
                t("id24379c", "O parte din conținutul media nu s-a încărcat."),
                t("h4d7cbcc", "Conținutul media nu s-a încărcat. Încearcă din nou."),
                t("aaa798fc", "Fă upgrade"),
                t("f13bb672", "Abonează-te la Premium"),
                t("ab0decc0", "Abonează-te"),
                t("e4e92f35", function (e) {
                    return "Fă upgrade la " + e.tier;
                }),
                t("c2831f07", function (e) {
                    return "Abonează-te la " + e.tier;
                }),
                t("fd425414", "Obține Radar"),
                t("g6320792", "Obține Analize Premium"),
                t("f09be7f8", "Devino utilizator verificat"),
                t("j34ad558", "Obține Premium"),
                t("a73d39fb", function (e) {
                    return "Începe perioada de încercare gratuită, de " + e.numberOfDays + " zile";
                }),
                t("i4fb96c7", function (e) {
                    return "Primește o reducere de până la " + e.percentage + "% la X " + e.premiumTierName;
                }),
                t("c1c98165", function (e) {
                    return e.percentage + "% reducere";
                }),
                t("c5546038", "Expiră în curând!"),
                t("e9a47564", "Ultima șansă"),
                t("f65e7e91", function (e) {
                    return "Reducere de " + e.percentage + "% la " + e.tier + e.plan;
                }),
                t("a84a736e", "Primește credit pentru reclame gratuit"),
                t("a0713d76", "Fă upgrade la Organizații verificate pentru a primi credit pentru reclame gratuit și o suită de instrumente pentru dezvoltarea afacerii."),
                t("a07e13fc", "Devino Creator Premium"),
                t("i1b4aea2", "Fă upgrade pentru a post videoclipuri mai lungi"),
                t("efa90342", "Obține acces la editarea postărilor cu X Premium"),
                t("cc528e28", "Doar abonații X Premium au acces la editarea postărilor. Fă upgrade pentru a continua."),
                t("h8a3525e", "Evidențiază pe profil"),
                t("c0f7a722", "Trebuie să te abonezi la Premium pentru a evidenția postări în profilul tău."),
                t("i3b31136", "Scrie articole pe X"),
                t("b6a41c5f", function (e) {
                    return "Trebuie să fii abonat la " + e.tier + " pentru a scrie articole pe X";
                }),
                t("ae2c4afc", "Vrei să-ți publici articolele?"),
                t("d300e29b", function (e) {
                    return "Fă upgrade la " + e.tier + " pentru a scrie postări mai lungi și articole.";
                }),
                t("f614e2bc", "Fă upgrade la Premium pentru a scrie postări mai lungi și a aplica formate precum caractere aldine sau cursive."),
                t("c9772e6e", "Fă upgrade la Premium"),
                t("dc5575ac", "Vrei o etichetă de identitate verificată pe profilul tău?"),
                t("d154f46e", "Obține acces la crearea Comunităților cu X Premium"),
                t("a0228c02", "Doar abonații X Premium au acces la crearea Comunităților. Fă upgrade pentru a continua."),
                t("d07f1d74", "Trebuie să fii utilizator verificat pentru a adăuga acești utilizatori la conversație"),
                t("ebe38626", "Doar utilizatorii verificați pot adăuga într-un grup persoane care nu îi urmăresc. Fă upgrade pentru a continua."),
                t("e6eddae0", "Devino utilizator verificat pentru a crea acest grup"),
                t("he27089e", "Doar utilizatorii verificați pot crea un grup cu utilizatori care nu îi urmăresc. Fă upgrade pentru a continua."),
                t("d7bc1116", "Devino utilizator verificat pentru a trimite un mesaj acestui utilizator"),
                t("f897074a", "Doar utilizatorii verificați pot trimite solicitări de Mesaje directe către persoane care nu îi urmăresc. Fă upgrade pentru a continua."),
                t("c0cf5eae", "Devino utilizator verificat pentru a trimite mai multe mesaje"),
                t("h2da08fc", "Ai atins limita pentru numărul maxim de Mesaje directe pe care le poți trimite într-o zi. Fă upgrade pentru a continua să trimiți mesaje."),
                t("j503aee6", "Descarcă videoclipuri cu X Premium"),
                t("j4dd3bf4", "Doar abonații X Premium pot descărca videoclipuri. Fă upgrade pentru a continua."),
                t("bc231a74", "Obține acces la funcția de foldere cu marcaje cu X Premium"),
                t("ed534c78", "Doar abonații X Premium au acces la folderele cu marcaje. Fă upgrade pentru a continua."),
                t("ed924940", "Elimină toate reclamele cu Premium+"),
                t("dccdb326", "Doar abonații Premium+ nu văd reclame. Fă upgrade pentru a continua."),
                t("adf3410a", "Abonează-te pentru a debloca noile caracteristici și, dacă îndeplinești criteriile de eligibilitate, pentru a primi o cotă-parte din venituri."),
                t("d8661dd4", "Pentru o perioadă limitată. Bucură-te de ce e mai bun la X."),
                t("fe7fd234", "Încearcă Premium de bază gratuit astăzi"),
                t("a2f86dda", "Îmbunătățește-ți experiența cu folderele pentru marcaje, opțiunea de editare a postărilor, pictograme personalizate ale aplicației și multe altele cu Premium de bază."),
                t("d9593598", "Încearcă Premium gratuit astăzi"),
                t("d0d6b59c", "Du-ți experiența la nivelul următor, cu mai puține reclame, instrumente puternice și multe altele cu Premium."),
                t("g4bb7ea8", "Primește o reducere de până la 50% la X Premium"),
                t("b748499c", "Oferta s-a prelungit!"),
                t("b81135bc", "Se termină astăzi!"),
                t("a8b4b878", "Profită la maximum de X cu promoția noastră de Ziua Recunoștinței."),
                t("df7fb242", "Ofertă de Ziua Recunoștinței"),
                t("aeaf14a6", "Beneficiază de o reducere de 40% la Premium. Expiră în curând!"),
                t("ca8cbf78", "Primește o reducere de 40% la Premium și Premium+"),
                t("j88ba18e", "Revendică oferta"),
                t("f4dc8ea3", function (e) {
                    return "Beneficiază de o reducere de " + e.percentage + "% la X Premium. Bucură-te de ce e mai bun la X.";
                }),
                t("db6a5d54", "Nu ești încă utilizator verificat"),
                t("edf7f57e", "Devino utilizator verificat pentru a beneficia de răspunsuri prioritizate, analize, navigare fără reclame și multe altele. Fă upgrade pentru profilul tău acum."),
                t("ba920d68", "Mărește-ți influența cu ajutorul verificării"),
                t("ib79d0c2", "Obține acces la caracteristici VIP: verifică-ți contul"),
                t("c0d3bd82", "Ai făcut publicitate pe X, dar nu ai un abonament la Organizații Verificate"),
                t("d7836d1e", "Abonează-te pentru a primi credit gratuit pentru reclame în valoare de până la 12.000$, verificare prin bifa aurie, asistență VIP și o suită de instrumente pentru a te dezvolta."),
                t("f528e369", function (e) {
                    return "Abonează-te la " + e.tier + " pentru a scrie articole";
                }),
                t("c5a8022a", "Cu Articole, poți publica un conținut în format lung, cu text îmbogățit și conținut media integrat direct pe X."),
                t("d77899b6", "Abonează-te la Premium pentru a scrie postări mai lungi"),
                t("bd65482a", "Scrie postări mai lungi și aplică formate de text precum caractere aldine sau cursive."),
                t("bee20918", "Primește bani pentru a posta"),
                t("gb699d52", "Îți place să postezi pe X? Abonează-te la Premium și participă la programul nostru de cotă-parte din venituri."),
                t("f69877c2", "Prioritizează răspunsurile cu Premium"),
                t("gba90d44", "Capătă mai multă vizibilitate, ieși în evidență și fă ca lumea să te vadă."),
                t("a6dbcd58", "Susține creatorii abonându-te la Premium"),
                t("c4f49130", "Până la 25% din prețul abonamentului tău este destinat direct creatorilor."),
                t("ca8fa2c0", "Devino utilizator verificat și obține bifa albastră"),
                t("febffc1a", "Capătă mai multă credibilitate, îmbunătățește-ți vizibilitatea și fă-ți vocea auzită."),
                t("j45a377a", "Fă upgrade la Premium+"),
                t("i7170016", "Bucură-te de avantaje suplimentare, de lipsa reclamelor și de cea mai mare prioritizare a răspunsurilor."),
                t("ee87f95e", "Analize avansate cu X Premium"),
                t("ac38dbc0", "Vezi analiza profilului tău, înțelege-ți publicul și multe altele. Fă upgrade pentru a continua."),
                t("i6e73154", "Previzualizare a caracteristicii Analize cont, inclusiv a metricilor și a diagramelor cu bare "),
                t("b583e154", "Obține acces la Analize cu X Premium"),
                t("b7fb8c5e", "Cheltuiește 1.000$, primește 1.000$"),
                t("ca559b70", "Abonează-te acum"),
                t("d68773a4", "Vizualizează tendințele cu Radar"),
                t("f677fed6", "Monitorizează cuvintele cheie, vizualizează activitatea din tendințe și filtrează conversații. În timp real."),
                t("ha49eac2", "Vrei să te dezvolți rapid pe X?"),
                t("f27018b4", "Folosește Analize Premium pentru a-ți crește numărul de urmăritori, cu informații inteligente despre date."),
                t("dfea1f08", "Nu rata informații valoroase"),
                t("da8c5244", "Cu Analize Premium, poți avea acces la informații inteligente despre date, care te vor ajuta să-ți crești numărul de urmăritori."),
                t("b081baea", "Pierzi informații!"),
                t("d5effffc", "Adaugă insignă"),
                t("c3653d44", "Verifică-ți organizația"),
                t("e8070e70", "Încearcă Premium"),
                t("ec42820e", "Vrei ca mai multe persoane să-ți vadă răspunsul?"),
                t("b0a95418", "Obține prioritizarea răspunsurilor cu Premium"),
                t("j8ee20aa", "Ieși în evidență în conversație cu prioritizarea răspunsurilor"),
                t("g13aa596", "Abonează-te la Premium pentru ca răspunsurile tale să fie prioritizate"),
                t("cadd92be", "Accesează analizele postărilor tale"),
                t("a7058228", "Obține acces la analize avansate cu X Premium"),
                t("gb7823ba", "Analiză cont"),
                t("i90f8e36", "Organizează-ți marcajele"),
                t("abc6e710", "Aranjează-ți marcajele în foldere cu X Premium"),
                t("b7fa0cfe", "Articole populare"),
                t("bcc7e8c0", "Toate marcajele"),
                t("i3145aa0", "Marcaje"),
                t("e39b368e", "Transmisiune"),
                t("hbea78a8", "Coloană nouă"),
                t("b5298d92", "Conectează-te"),
                t("d35d74e4", "Conversație"),
                t("h5245afa", "Comunitate"),
                t("d4ebc798", "Schițe"),
                t("fcf3e54c", "Explorează"),
                t("d806aa1a", "Răspunsuri ascunse"),
                t("ha8209bc", "Pagina principală"),
                t("a2f81050", "Mesaje"),
                t("cf2d1048", "Solicitări de mesaje"),
                t("e7172d70", "Mesaje suplimentare"),
                t("e1066d88", "Profilul meu"),
                t("eb75875e", "Notificări"),
                t("j45978a8", "Citate"),
                t("fd6a3f30", "Postări planificate"),
                t("aa4209e8", "Super-urmăritori"),
                t("d52a1caa", "Abonați"),
                t("d7b51c68", "Abonamente"),
                t("c5f4befa", "Tendințe"),
                t("df34a454", "Postează"),
                t("gfccba44", "Cereri de a deveni membru"),
                t("e42dd8fa", "Jurnal de moderare"),
                t("c2c191fc", "Postări raportate"),
                t("c63602d4", "Comunitățile mele"),
                t("ddf0ba7e", "Colecție"),
                t("c64974fc", "Urmăritori"),
                t("i099d32e", "Urmăritori pe care îi cunoști"),
                t("d960b55c", "Urmărești"),
                t("b007440a", "Locuri de muncă"),
                t("aa68dafc", "Detalii despre notificare"),
                t("b8533bac", "Subiecte"),
                t("jf00ebf6", "Coloană indisponibilă"),
                t("jaaa8984", "Locație"),
                t("f345dcda", "Istoricul modificărilor"),
                t("hea3f8ac", "Postări asociate"),
                t("c8ee31da", "Știri"),
                t("d35c9eec", "Analize cont"),
                t("b5b7fb94", "Gruparea"),
                t("g755fcde", "Ai"),
                t("f6b1ff81", function (e) {
                    return e.name + " și tu";
                }),
                t("j652293d", function (e) {
                    return e.listOfParticipants + " și alți " + e.count;
                }),
                t("fb4ee2f6", "Solicitări de mesaje șterse"),
                t("j607bf02", "Descarcă aplicația X"),
                t("j49fd4e8", "Comută la aplicație"),
                t("a565833e", "Înregistrează-te"),
                t("e919c3bc", "Conectează-te"),
                t("a17a75da", "X e mai bun pe aplicație"),
                t("e7342ed4", "Nu vei mai rata niciodată postări. Deschide în aplicația X pentru a beneficia de întreaga experiență."),
                t("b6a43e78", "Fii primul care află noutățile"),
                t("b469e406", "Pentru a rămâne la zi cu ceea ce contează cel mai mult pentru tine, comută la aplicație și vei primi notificări push despre persoanele, subiectele și evenimentele pe care le urmărești."),
                t("b8505290", "Răspunde pentru a te alătura conversației."),
                t("ae8b0564", "Repostează pentru a da de veste."),
                t("f2adab0e", "Apreciază o postare pentru a le arăta și altora că îți place."),
                t("b7821a74", "Înregistrează-te pentru a nu rata nicio postare a sa."),
                t("e6d43d06", "Urmărește un subiect pentru a descoperi postări interesante"),
                t("ic848090", "Întâi conectează-te"),
                t("f9ebe066", "Te poți alătura conversației în Comunități − imediat după ce te conectezi."),
                t("je3d93e2", "Utilizatorii X sunt primii care află."),
                t("ea88ce2e", "Nu rata ceea ce se întâmplă"),
                t("d8817e36", "Accept all cookies"),
                t("b9288ee6", "Refuse non-essential cookies"),
                t("i1390ec2", "Did someone say … cookies?"),
                t("ga3121d5", "Centrului nostru de ajutor"),
                t("g482c949", "Afișează mai multe despre opțiunile mele."),
                t("b47e760e", "Pentru a vedea comenzile rapide de la tastatură, apasă semnul de întrebare"),
                t("fd2c7b44", "Vezi comenzile rapide de tastatură"),
                t("g7e2adf2", "Creează un set nou"),
                t("a6ba09e8", "Dublează coloana"),
                t("f5c9ccca", "Editează Setul curent"),
                t("bf42c578", "Concentrează-te pe butonul de reordonare"),
                t("j6fa64a6", "Mergi la coloana finală"),
                t("b5545202", "Mergi la Setul fixat final"),
                t("e0497acc", "Mergi la Gestionează toate Seturile"),
                t("beef7b14", "Mergi la coloana următoare"),
                t("a5cb005e", "Mergi la coloana a N-a"),
                t("f65391bc", "Mergi la al N-lea Set fixat"),
                t("h0bfdd20", "Adaugă coloana"),
                t("h770f6d4", "Mergi la coloana anterioară"),
                t("b8b2b70c", "Șterge coloana"),
                t("a3e2df76", "Anulează ștergerea coloanei"),
                t("g850aec4", "Deschide/închide setări coloană"),
                t("d5696fcc", "Ajutor cu comenzile rapide de tastatură"),
                t("a83d4280", "Postarea următoare"),
                t("g0048656", "Postarea anterioară"),
                t("a690c4d0", "În jos în pagină"),
                t("e893811a", "Încarcă postări noi"),
                t("cdb53d7a", "Menționări"),
                t("d7b8ebaa", "Aprecieri"),
                t("b0041756", "Liste"),
                t("d4986f86", "Mesaje directe"),
                t("bb081ea2", "Setări"),
                t("eee2ed92", "Mergi la utilizatorul..."),
                t("ee5ccf3e", "Setări de afișare"),
                t("ab3d53f8", "Postare nouă"),
                t("de94bda6", "Trimite postarea"),
                t("e736990a", "Mesaj direct nou"),
                t("fe731016", "Apreciază"),
                t("d17df548", "Răspunde"),
                t("g062295e", "Repostează"),
                t("h01621a4", "Distribuie postarea"),
                t("gb303814", "Marcaj"),
                t("c03b1126", "Ignoră contul"),
                t("ebd2abb2", "Blochează contul"),
                t("hc6c5510", "Deschide detaliile postării"),
                t("eebdef38", "Extinde fotografia"),
                t("b488758c", "Deschide/închide setul de mesaje"),
                t("c82314e0", "Pauză/Redă videoclipul selectat"),
                t("b881560e", "Oprește sunetul la videoclipul selectat"),
                t("a94f7302", "Mergi la setul Audio"),
                t("a7e604c6", "Redă/Întrerupe setul Audio"),
                t("f978c4fc", "Ignoră/Anulează ignorarea pentru setul Audio"),
                t("hc73f030", "Contul tău"),
                t("f15bfdb4", "Informații despre cont"),
                t("a3841918", "E-mail"),
                t("c21037d0", "Țara"),
                t("ab1f7ee0", "Schimbă-ți parola"),
                t("e731db5a", "Resetează parola"),
                t("f56af9cc", "Descarcă o arhivă cu datele tale"),
                t("hfb92b14", "Dezactivează contul"),
                t("bf96fda4", "Vârsta"),
                t("d12d42dc", "Automatizare"),
                t("fdb81456", "Etichetă de parodie"),
                t("j9d10268", "Activitatea contului"),
                t("i6b3f59a", "Istoricul contului"),
                t("da202f9a", "Lista ta de agenți de publicitate"),
                t("hc36dbba", "Dispozitive și aplicații conectate"),
                t("a8d0108e", "Sexul"),
                t("a03dacaa", "Limba"),
                t("d9138166", "Vezi locurile în care ai fost"),
                t("b523ecc6", "Istoricul accesărilor contului"),
                t("abedd45c", "Solicită datele tale"),
                t("h1f01a24", "Interese"),
                t("j7ad754a", "Datele tale X"),
                t("d299431c", "Monetizare"),
                t("j087774e", "Monede"),
                t("ff9ed474", "Câștiguri totale"),
                t("ec885836", "Cota de venituri pentru creatori"),
                t("b431a5c6", "Cota-parte din venituri din publicitate"),
                t("b0e986ec", "IDV monetizare"),
                t("aca4d76a", "Configurare Cota-parte din venituri din publicitate"),
                t("ab1b837a", "Tablou de bord Cota-parte din venituri din publicitate"),
                t("a9c1a9cc", "Reclame video"),
                t("d4ab5c12", "Configurare reclame video"),
                t("c429e3ba", "Abonamente de creator"),
                t("fce877d6", "Anulează postarea"),
                t("dd0c889e", "Personalizare profil"),
                t("ib35705e", "Gestionează abonamentul"),
                t("cf131522", "Gestionează ecusoanele afiliaților"),
                t("cb165528", "Funcții și setări pentru știri"),
                t("f8645654", "Securitate și acces la cont"),
                t("j95edf76", "Securitate"),
                t("fd127276", "Gestionează cheile de acces"),
                t("afe4a358", "Verificare identitate"),
                t("dd703318", "Autentificarea în doi pași"),
                t("b1686800", "Gestionează cheile de securitate"),
                t("ae72d4c4", "Aplicații și sesiuni"),
                t("a1e8e682", "Dispozitive înregistrate"),
                t("h1abfbce", "Conturi conectate"),
                t("cad53944", "Confidențialitate și siguranță"),
                t("e908903a", "Segmentul de public și etichetarea"),
                t("b5c85d2c", "Protejează-ți postările"),
                t("f56d108e", "Etichetare fotografii"),
                t("c6f67e32", "Postările tale"),
                t("f2bd9c48", "Conținutul pe care îl vezi"),
                t("cbd449a0", "Ignoră și blochează"),
                t("daef29b8", "Conturi ignorate"),
                t("i0dd9b9e", "Cuvinte ignorate"),
                t("a5f32aa2", "Conturi blocate"),
                t("i58a274c", "Mesaje directe"),
                t("ded416b0", "Spații"),
                t("fd4d9068", "Capacitate de descoperire și contacte"),
                t("bbcafbda", "Gestionează persoanele de contact"),
                t("aeddb28a", "Preferințe pentru conținut"),
                t("d035a8d0", "Preferințe privind reclamele"),
                t("d0b74a5a", "Cookie preferences"),
                t("h3909cd0", "Identitate dedusă"),
                t("d84e63d2", "Activitate din afara X"),
                t("h14ba864", "Partajarea datelor cu partenerii de afaceri"),
                t("jabb9c9a", "Informații despre locație"),
                t("fcb6a5b8", "Adaugă informații despre locație la postările tale"),
                t("h9f2da68", "Conținut media sensibil"),
                t("id6a8e1a", "Filtru de răspunsuri"),
                t("fc35f762", "Răspunsuri filtrate"),
                t("gaac710a", "Centru de rapoarte"),
                t("bcd81cac", "Preferințe"),
                t("i647fb04", "Filtre"),
                t("hee41732", "Notificări push"),
                t("e75f25a8", "Notificări prin e-mail"),
                t("cf9b166a", "Accesibilitate, afișaj și limbi"),
                t("e3719c16", "Accesibilitate"),
                t("a776eed8", "Redă automat"),
                t("c4881c66", "Afișaj"),
                t("d495680e", "Limbi"),
                t("f953f53a", "Schimbă limba de afișare"),
                t("eafe3288", "Utilizarea datelor"),
                t("b721eb38", "Despre"),
                t("g9230d00", "Delegare"),
                t("cb8ebf5c", "Membri pe care i-ai delegat"),
                t("i95202f6", "Conturi care ți-au fost delegate"),
                t("afcad7f2", "Descarcă aplicația"),
                t("e8f57e08", "Personalizare și date"),
                t("gbde3534", "Date despre interese și reclame"),
                t("a54826c6", "Interese sugerate de la parteneri"),
                t("a5cbc19a", "Analizele tale"),
                t("i9028824", "Se încarcă"),
                t("f5090e28", "Se pare că ai pierdut conectivitatea. Vom continua să reîncercăm."),
                t("ba929da8", "Pagină negăsită"),
                t("d203e242", "Negăsit"),
                t("e2eac0c4", "Principal"),
                t("i5aa4ce0", "Mai multe elemente de meniu"),
                t("h63a5c3c", "Mai multe"),
                t("a4fc1872", "Ultima săptămână"),
                t("e14bb1da", "Ultima zi"),
                t("d86bbf0f", function (e) {
                    return e.count + " elemente necitite";
                }),
                t("h6beb5fb", function (e) {
                    return e.count + "+";
                }),
                t("i5f7b6b8", "Cont"),
                t("da4691aa", "Vezi toate conturile"),
                t("c7e55ccf", function (e) {
                    return "Comută la @" + e.screenname;
                }),
                t("b20a3894", "Contul la care încerci să comuți a fost șters."),
                t("daffabde", "acționează în calitate de..."),
                t("eccbfa26", "Conturi delegate"),
                t("a1b7a904", "Acționează ca"),
                t("g61ed8a4", "Ceva nu a mers bine."),
                t("e520f166", "Ai depăşit limita zilnică de postări trimise."),
                t("c0554ca0", "Ceva nu a mers bine. Încearcă din nou să trimiți postarea într-un minut."),
                t("b25c5b2a", "Ups! Deja ai spus asta."),
                t("cef21114", "Contul tău este suspendat și nu ai permisiunea de a trimite postări."),
                t("cf369a0e", "Postarea la care încerci să răspunzi a fost ștearsă sau nu este vizibilă pentru tine."),
                t("cd86efa8", "Textul postării tale depășește numărul de @mențiuni permis."),
                t("e002f424", "Textul postării tale depășește numărul de adrese URL permis."),
                t("c2b4ae8c", "Textul postării tale depășește numărul de hashtaguri permise."),
                t("hf05f59e", "Textul postării tale depășește numărul de cashtaguri permis."),
                t("dffb84c6", "Textul postării conține un hashtag care depășește lungimea maximă permisă."),
                t("d7b21bc8", "Postarea depășește numărul de tipuri de atașări permis."),
                t("e4672ac2", "Ups! Un URL din postarea ta pare a fi un link la o pagină cu conținut nesigur sau spam."),
                t("he5ecf52", "Textul postării tale depășește limita permisă."),
                t("ac78e602", "Conținutul postării tale este nevalid."),
                t("i251c738", "Frecvența cadrelor videoclipului pe care ai încercat să-l încarci era prea mare."),
                t("ed3ac7ef", function (e) {
                    return "Frecvența cadrelor videoclipului pe care ai încercat să-l încarci era prea mare. Frecvența maximă a cadrelor: 60. Frecvența reală a cadrelor: " + e.frameRate + ".";
                }),
                t("e23fe0cc", "Raportul de aspect al videoclipului pe care ai încercat să-l încarci era prea mare."),
                t("ca4514c0", "Raportul de aspect al videoclipului pe care ai încercat să-l încarci era prea mic."),
                t("fb4a459c", "Durata videoclipului pe care ai încercat să-l încarci era prea mică."),
                t("ca1afa98", "Durata videoclipului pe care ai încercat să-l încarci era prea mare."),
                t("b2e94283", function (e) {
                    return "prin @" + e.viaScreenName;
                }),
                t("ee69d769", function (e) {
                    return "Postează" + e.verb;
                }),
                t("ge8e4a38", "Postează tot"),
                t("h735a98e", "Planificare"),
                t("h3701ffe", "Actualizează"),
                t("d9ef2842", "Elemente necitite"),
                t("cdf89b84", "Previzualizare Aprecieri de marcă"),
                t("i83d4f14", "Solicitări de urmărire"),
                t("aeede01a", "Despre"),
                t("ae1bbb26", "Deconectează-te"),
                t("fd442790", "Setări și confidențialitate"),
                t("da137d9a", "MStV Transparenzangaben"),
                t("e0cb0c72", "Reclame"),
                t("e2eef3c2", "Organizații verificate"),
                t("b55d8a78", "Creează-ți Spațiul"),
                t("e5323e36", "Intră în direct"),
                t("a5a30af0", "Articole"),
                t("d13d697c", "Nouă"),
                t("j0e2cfa8", "Afaceri"),
                t("h5e38204", "Chat"),
                t("h7d5d9fa", "Beta"),
                t("ga169e1b", function (e) {
                    return "Mesaje directe (" + e.count + " necitite conversați" + r(e.count, "i", "e", "i") + ")";
                }),
                t("d83682ec", "Pagina principală (noi postări necitite)"),
                t("e1249849", function (e) {
                    return "Notificări (" + e.count + " necitite " + r(e.count, "notificări", "notificare", "de notificări") + ")";
                }),
                t("c0b786ee", "Caută și explorează"),
                t("bb967f9e", "Videoclipuri"),
                t("e04033be", "Sunt disponibile postări noi. Apasă pe tasta punct pentru a merge la ele."),
                t("hec711c0", "Vezi postări noi"),
                t("j0a8da6e", "Adaugă un cont existent"),
                t("c6f2bf00", "Gestionează conturile"),
                t("a58e0e51", function (e) {
                    return "Deconectează-te, @" + e.screenName;
                }),
                t("j62f43a6", "Vizualizează conturi delegate"),
                t("d4c52015", function (e) {
                    return e.count + " " + r(e.count, "invitații", "invitație", "de invitații") + " la cont delegat în așteptare";
                }),
                t("b8e1d524", "Conturi"),
                t("gef27c4c", "Meniu cont"),
                t("b7dc3885", function (e) {
                    return "Comută la @" + e.screenName;
                }),
                t("c61eea74", "Conturi personale"),
                t("g6d42fea", "Comutare navigare"),
                t("eb022176", "Creează un cont"),
                t("gcfef7b6", "Creează un cont folosind numărul de telefon sau adresa de e-mail"),
                t("e5b0e544", "Conectare"),
                t("gd93944e", "Utilizează aplicația"),
                t("f2f787a0", "Condițiile de utilizare"),
                t("e1099fd6", "Politica de confidențialitate"),
                t("c1df1ae0", "Utilizarea modulelor cookie"),
                t("cdc1bff7", function (e) {
                    return "Meniul profilului " + e.loggedInUserName;
                }),
                t("fd48249b", function (e) {
                    return e.count + " persoane";
                }),
                t("b93ba92d", function (e) {
                    return e.peopleCount + " " + r(e.peopleCount, "(de) persoane", "persoană", "(de) persoane");
                }),
                t("ae2205d2", "Vă urmăriți reciproc"),
                t("fd06b02f", function (e) {
                    return "@" + e.screenName + " se află în prezent într-un Spațiu activ, fă clic pentru a te alătura prin intermediul profilului său";
                }),
                t("f2b3fe06", "Încarcă rezultate"),
                t("fc9dd578", "Caută persoane"),
                t("gdb7bc25", function (e) {
                    return e.name + " – selectează pentru a elimina";
                }),
                t("f065ba8c", "Interogare de căutare"),
                t("hbc99b03", function (e) {
                    return "Accesează @" + e.screenName;
                }),
                t("a2c1b222", "Încearcă să cauți persoane, liste sau cuvinte cheie"),
                t("f45c4250", "Golești toate căutările recente?"),
                t("caae4dda", "Această acțiune nu poate fi anulată și vei elimina toate căutările recente."),
                t("dbd5d400", "Golește"),
                t("a8d68f62", "Recente"),
                t("c6530778", "Căutări salvate"),
                t("e047b8fa", "Golește tot"),
                t("aa6e3300", "Se pare că ai pierdut conexiunea. Verifică situația și încearcă din nou."),
                t("e68b09b4", "Elimină"),
                t("hffea05c", "Ștergi căutarea salvată?"),
                t("j037e374", "Această acțiune nu poate fi anulată și îți vei pierde căutarea salvată."),
                t("d96cf7ce", "Șterge"),
                t("hbe4feb5", function (e) {
                    return "O solicitare de urmărire a fost trimisă către @" + e.screenName + " și așteaptă aprobarea sa.";
                }),
                t("df4c86b0", "Întâi actualizează profilul"),
                t("bba40ffa", "Nu poți urmări acest cont"),
                t("f558829e", "Ca să urmărești acest cont trebuie să incluzi data nașterii în profilul tău, pentru a ne asigura că ai vârsta minimă necesară."),
                t("a6941096", "Acest cont nu poate fi urmărit din țara ta."),
                t("if8cd2a4", "Nu ai vârsta necesară pentru a urmări acest cont."),
                t("b5972260", "Ceva nu a mers bine. Încearcă din nou să anulezi solicitarea de urmărire pentru acel utilizator într-un minut."),
                t("j4292c24", "Urmărirea acestui utilizator este blocată pentru tine, la cererea lui."),
                t("a0ba5842", "Nu poți urmări mai multe persoane momentan."),
                t("a5202b82", "Ceva nu a mers bine. Încearcă din nou să urmărești acel utilizator într-un minut."),
                t("f8cbf714", "Încerci să urmărești un utilizator care nu există."),
                t("f2e66452", "Contul tău este suspendat și nu îi este permis să urmărească utilizatori."),
                t("ca96fe6e", "Ceva nu a mers bine. Încearcă din nou să deblochezi acel utilizator într-un minut."),
                t("e1a0aaca", "Ceva nu a mers bine. Încearcă din nou să oprești urmărirea acelui utilizator într-un minut."),
                t("fd5208c6", "Accesează setările"),
                t("c0d13570", "Afiliați"),
                t("ba96929e", "Angajări"),
                t("gf62c116", "Asistență"),
                t("a4cf866e", "Publicitate"),
                t("g2fd3206", "Persoane"),
                t("h70bdf0a", "Radar"),
                t("bf6b72ac", "Acces deplin"),
                t("e49537c2", "Hmm... Această pagină nu există. Încearcă să cauți altceva."),
                t("fcbb540a", "Limita ratei a fost depășită"),
                t("d4f88600", "Verifică contactul"),
                t("b192ccae", "Nu ai o metodă de contact confirmată."),
                t("a0487504", "Pentru a solicita verificarea, trebuie mai întâi să confirmi o metodă de contact."),
                t("fff7d93c", "Adaugă o poză"),
                t("g969bfae", "Îți lipsește o fotografie de profil."),
                t("gb2f35e4", "Pentru a solicita verificarea, trebuie mai întâi să adăugi o fotografie de profil."),
                t("i33cf692", "Adaugă câmpul de adresă URL"),
                t("b679ff6a", "Adresă URL nevalidă"),
                t("i79902b4", "Selectează o metodă de autentificare"),
                t("fb2fcb5c", "Acest pas ne ajută să îți verificăm identitatea. Alege metoda cea mai potrivită pentru tine."),
                t("e43425fa", "Act de identitate eliberat de o autoritate guvernamentală"),
                t("cb7c2e2e", "O fotografie cu documentul tău de identitate eliberat de o autoritate guvernamentală."),
                t("a411926a", "Adresa de e-mail oficială"),
                t("g253cdd0", "Un e-mail oficial cu un domeniu relevant pentru categoria pe care o alegi."),
                t("cf93bcb0", "Referință la site-ul oficial"),
                t("gfb55fa8", "Un site oficial care face referire în mod direct la contul tău X."),
                t("g40cd2c0", "Referință verificată"),
                t("a7f1cff6", "Adaugă o referință de pe un site web oficial"),
                t("a11cd524", "Introdu un site oficial care face referire la contul tău X și care este asociat solicitării tale de verificare."),
                t("ba656f26", "Contul tău de X este menționat pe site-ul web?"),
                t("ed751204", "Trebuie să confirmăm că contul tău este autentic pentru a te verifica. Dacă identificatorul tău nu este menționat pe pagina pe care ai conectat-o, va trebui să trimiți dovada autenticității înainte de a finaliza solicitarea."),
                t("fbc023b0", "Da, este"),
                t("e785ce06", "Voi folosi o altă opțiune"),
                t("i8d58f3e", "Voi folosi un act de identitate eliberat de o autoritate guvernamentală"),
                t("eb21ecaa", "Voi folosi o adresă de e-mail"),
                t("f848a69e", "Trebuie să confirmăm autenticitatea contului tău pentru a te verifica. Dacă identificatorul tău nu este menționat pe site-ul oficial furnizat, nu putem confirma autenticitatea contului."),
                t("d59b5366", "Trebuie să confirmăm autenticitatea contului tău pentru a te verifica. Dacă identificatorul tău nu este menționat pe pagina pentru care ai furnizat linkul, nu putem asocia în mod fiabil contul tău cu un creator de conținut notabil."),
                t("bfb01c62", "Nu, mergi înapoi"),
                t("fa51040a", "Furnizează linkul către site-ul oficial al unei organizații sau publicații de știri calificate care face referire la tine și contul tău X."),
                t("d0460f12", "Furnizează un link care face referire la contul tău drept contul oficial X pentru organizația ta. Referința trebuie să provină de pe site-ul web oficial al unei entități verificate."),
                t("h45b00d8", "Selectează o metodă pentru a arăta că contul tău este autentic și gestionat de către o companie de divertisment legată de această solicitare."),
                t("fc718708", "Site-ul oficial al unei companii calificate care face referire la tine și contul tău X."),
                t("g32c2900", "Selectează o metodă pentru a arăta că contul tău este autentic și gestionat de către o organizație de producție legată de această solicitare."),
                t("j5b1224c", "Furnizează un link care face referire la contul tău drept contul oficial X pentru compania ta de producție. Referința trebuie să provină de pe site-ul web oficial al unei entități verificate."),
                t("d090a5d4", "Un site oficial al unei organizații sau publicații verificate care face referire la contul tău X."),
                t("eb08a392", "Selectează o metodă pentru a arăta că este un cont autentic și gestionat de către candidatul pentru funcția guvernamentală legat de această solicitare."),
                t("h0de1396", "Furnizează un link care face referire la contul tău drept contul oficial X al candidatului la o funcție publică legat de această solicitare. Referința trebuie să provină de pe site-ul oficial al unei entități verificate."),
                t("dcc23262", "Selectează o metodă pentru a arăta că ai un cont autentic și administrat de către activistul sau organizatorul asociat cu această solicitare."),
                t("c880e068", "Un site oficial al unei organizații de sensibilizare a opiniei publice care te menționează pe tine și contul tău X."),
                t("e412d500", "Furnizează un link care te recomandă într-o poziție de conducere pentru o organizație de promovare verificată și contul tău X. Referința trebuie să provină de pe site-ul web oficial al unei organizații verificate."),
                t("dedf41f2", "Selectează o metodă pentru a arăta că contul tău este autentic și administrat de către persoana influentă asociată cu această solicitare."),
                t("b4aed9e0", "Un site oficial al unei organizații verificate care te menționează pe tine și contul tău X."),
                t("b2069e40", "Furnizează un link care te menționează pe tine și contul tău X. Referința trebuie să provină de pe site-ul oficial al unei organizații verificate."),
                t("baf718c4", "Selectează o metodă pentru a arăta că contul tău este autentic și gestionat de către o companie, marcă sau organizație legată de această solicitare."),
                t("c65bbbc2", "Selectează o metodă pentru a arăta că contul tău este autentic și gestionat de către cadrul superior sau administratorul legat de această solicitare."),
                t("i31e3606", "Un e-mail oficial cu domeniul unei companii, mărci sau organizații calificate."),
                t("de70afe8", "O referire la tine și contul tău de X pe site-ul oficial al unei companii eligibile."),
                t("a3a523f2", "Furnizează un link care face referire la contul tău drept contul oficial X pentru compania ta. Referința trebuie să provină de pe site-ul oficial al unei entități verificate."),
                t("jf58899a", "Furnizează un link care te menționează drept cadru superior în cadrul organizației tale și contul tău de X. Referința trebuie să provină de pe site-ul oficial al unei entități verificate."),
                t("f7afbaec", "Selectează o metodă pentru a arăta că contul tău este autentic și gestionat de către de către un jurnalist pentru o organizație sau publicație de știri calificată."),
                t("d4ab0056", "Selectează o metodă pentru a demonstra că ai un cont autentic și gestionat de un jurnalist liber profesionist notabil."),
                t("d2a77622", "O adresă de e-mail oficială cu domeniul unei organizații sau publicații de știri calificate."),
                t("eec341da", "Un site oficial al unei organizații sau publicații de știri care face referire la contul tău X."),
                t("b03ae068", "Selectează o metodă pentru a arăta că contul tău este autentic și gestionat de către o organizație sau publicație de știri legată de această solicitare."),
                t("g0daba4a", "Selectează o metodă pentru a demonstra că ai un cont autentic, gestionat de un jucător profesionist care este legat de această solicitare."),
                t("ab8e430c", "Furnizează un link care face referire la contul tău drept contul oficial X al persoanei care participă la jocuri legată de această solicitare. Referința trebuie să provină de pe site-ul oficial al unei entități verificate."),
                t("cdcd9cd6", "Selectează o metodă pentru a demonstra ca ai un cont autentic, gestionat de către o entitate de sport profesionist care este legată de această solicitare."),
                t("gad25890", "Furnizează un link care face referire la contul tău drept contul oficial X al entității de sport profesionist legată de această solicitare. Referința trebuie să provină de pe site-ul oficial al unei entități verificate."),
                t("e6dc91b2", "Selectează o metodă pentru a demonstra ca ai un cont autentic, gestionat de un sportiv profesionist care este legat de această solicitare."),
                t("i9aed706", "Furnizează un link care face referire la contul tău drept contul oficial X al sportivului profesionist legat de această solicitare. Referința trebuie să provină de pe site-ul oficial al unei entități verificate."),
                t("abd587d2", "Adaugă o altă referință"),
                t("i0bba81a", "Adăugă referința locului de muncă"),
                t("a6a76e3c", "Selectează o metodă notabilă"),
                t("ecd2abda", "Confirmă eligibilitatea contului"),
                t("cb70b894", "Înapoi"),
                t("g8b511fe", "Google Trends"),
                t("c7d50c96", "Un profil Google Trends care să dovedească activitatea de căutare recentă în privința ta."),
                t("a68b43ee", "Adaugă un profil Google Trends"),
                t("b5e30390", "Profil Google Trends"),
                t("h146703e", "Articol Wikipedia"),
                t("ee38d0f0", "Un articol de pe Wikipedia despre tine care să îndeplinească standardele lor referitoare la persoanele remarcabile."),
                t("cb97ee3e", "Adaugă un articol Wikipedia"),
                t("hc371f34", "Prezentarea știrilor"),
                t("b9d0ad90", "Cel puțin trei linkuri de la organizații de știri de renume care ți-au prezentat sau ți-au menționat activitatea în ultimele șase luni."),
                t("ge137dce", "Cel puțin trei articole despre tine în publicațiile de știri verificate din ultimele șase luni."),
                t("h2b9a5fe", "Cel puțin trei articole despre compania ta în publicațiile de știri care se califică din ultimele șase luni."),
                t("baccb708", "Adaugă prezență în știri verificate"),
                t("feadd98c", "Adăugă referințe de știri verificate"),
                t("j7ae97aa", "Referințe de știri verificate"),
                t("c368aa8e", "Cel puțin trei articole din publicații de știri verificate care te menționează."),
                t("ded0edad", function (e) {
                    return "Articolul nr. " + e.n;
                }),
                t("bebae55a", "Burse de valori publice"),
                t("c5571610", "Un link care oferă dovezi ale prezenței substanțiale într-o bursă de valori publică"),
                t("e2d42628", "Adăugă o referință la o bursă de valori"),
                t("jc19b4e8", "Listare la bursa de valori"),
                t("fc3ee696", "Referință conducere"),
                t("i3e65eb4", "Site-ul oficial al unei organizații verificate care face referire la tine într-o poziție de conducere."),
                t("jd014eba", "Adresa URL a furnizat linkuri către pagina specifică care menționa solicitantul."),
                t("a96901cc", "Adaugă o referință de leadership"),
                t("cc424a22", "Referință de promovare"),
                t("ibfc1a5a", "Nu ești eligibil pentru a fi verificat în această categorie."),
                t("e1c78796", "Site oficial"),
                t("ff2ee0c2", "Activism"),
                t("hc61adfc", "Divertisment"),
                t("e404203c", "Jocuri"),
                t("d2042392", "Guvern"),
                t("c365dcc6", "Altele"),
                t("d27beb9e", "Sport"),
                t("cc4b66b6", "Selectează o categorie"),
                t("b37461a4", "Selectează un tip de cont"),
                t("b27325f6", "Creator de conținut"),
                t("a5a6affc", "Creatori de conținut digital influenți care publică în mod constant conținut interesant și original."),
                t("a15326de", "Cel puțin trei articole din publicații de știri verificate care te menționează."),
                t("g704a93a", "Un site oficial asociat cu o activitate de promovare cunoscută care te recomandă într-o poziție de conducere."),
                t("c6bd60ec", "Activist sau organizator"),
                t("c92fdb06", "Persoane importante care folosesc X pentru a genera schimbări socio-economice, politice sau culturale."),
                t("a18c6dfc", "Jurnalist"),
                t("h0b46534", "Jurnaliști angajați de organizații sau publicații de știri verificate."),
                t("ff929fec", "Organizație sau afiliat proeminent"),
                t("jf537894", "Organizații proeminente și conturi afiliate secundare, inclusiv companii, mărci și organizații non-profit."),
                t("d2ea204a", "Altă persoană influentă"),
                t("f875ec6e", "Persoane cu o prezență semnificativă pe platforma X și în afara ei, care nu se încadrează în alte categorii."),
                t("i3e6aaa6", "Cadru superior sau administrator"),
                t("bbcbb9e6", "Lideri și alți directori proeminenți ai unor companii remarcabile, mărci și organizații non-profit."),
                t("j0bc23f4", "Am confirmat că contul organizației mele este deja verificat."),
                t("aa6228de", "Companie de divertisment"),
                t("d5b3cbca", "Companii de divertisment importante, precum rețele de televiziune, studiouri de film și case de discuri."),
                t("b5a3e590", "Persoană din domeniul divertismentului"),
                t("e484f794", "Persoane influente din industria divertismentului, cum ar fi actori, muzicieni, regizori, scenariști, actori de comedie și alții."),
                t("b8d8ea64", "Organizare de producții"),
                t("ff27db3c", "Conturile oficiale ale producțiilor asociate entităților de divertisment, cum ar fi filme, evenimente/festivaluri, emisiuni TV și altele."),
                t("c0e57cb2", "Adaugă profilul tău de creator"),
                t("f3c605b6", "Profilul de creator"),
                t("h042d1a6", "Profil IMDB"),
                t("d2310f0c", "Un profil pe IMDB care include cel puțin 50 de contribuții la producție."),
                t("ba04b4c2", "Adaugă profil IMDB"),
                t("i9b124b6", "Oficial guvernamental"),
                t("f84a99ee", "Oficiali guvernamentali cheie, inclusiv șefi de stat, oficiali aleși, miniștri numiți și ambasadori la nivel de stat sau național."),
                t("j2cb5f50", "Candidat la o funcție publică"),
                t("j2472894", "Candidați oficiali la o funcție publică la nivel de stat sau național."),
                t("ha44c130", "Funcție guvernamentală sau servicii publice"),
                t("j8ae9d40", "Funcții guvernamentale cheie și entități instituționale, precum și utilități și servicii publice."),
                t("ef1d6176", "Ești candidat la o funcție publică la nivel de stat sau național?"),
                t("f54ba6e6", "Trebuie să fii un candidat curent la o funcție publică la nivel de stat sau național pentru a te califica pentru verificare în această categorie."),
                t("dd85d0a0", "Ești un oficial la nivel de stat sau național?"),
                t("f0058c60", "Trebuie să fii un oficial guvernamental curent la nivel de stat sau național pentru a te califica pentru verificare în această categorie."),
                t("f420a712", "Da, sunt"),
                t("fb97d22c", "Nu, nu sunt"),
                t("e16b1cc8", "Profilul tău îndeplinește criteriile pentru un candidat?"),
                t("cf2ee92e", "Candidații la o funcție publică trebuie să dețină un cont public care face referire la funcția publică pentru care candidează și este legat de site-ul oficial al campaniei desfășurate de aceștia."),
                t("g544885e", "Profilul tău îndeplinește criteriile pentru o funcție guvernamentală sau entitate instituțională?"),
                t("bd0b4542", "Deținătorii de funcții guvernamentale și entitățile instituționale trebuie să dețină un cont public care este legat de site-ul lor oficial."),
                t("i45b224c", "Profilul tău îndeplinește criteriile pentru funcția de oficial?"),
                t("fba1dd66", "Oficialii guvernamentali trebuie să dețină un cont public care face referire la poziția curentă în cadrul guvernului și care este legat de site-ul oficial al funcției publice ocupate de aceștia."),
                t("e95c44de", "Da, este finalizat"),
                t("fa5e15e2", "Trebuie să actualizez"),
                t("jdf47e8e", "Site-ul campaniei"),
                t("eeec7316", "Adaugă site-ul campaniei"),
                t("b163b654", "Referință guvernamentală"),
                t("d2378d34", "Adaugă referință guvernamentală"),
                t("a05b8446", "Jurnalist liber profesionist"),
                t("hdad12b2", "Jurnaliști independenți, liberi profesioniști, cu lucrări notabile în publicații verificate."),
                t("d2d7af4c", "Organizație sau publicație de știri"),
                t("d83e51dc", "Publicații tipărite și digitale; canale TV și radio de știri cu difuzare în flux, prin satelit, prin cablu și cu transmisiuni; podcasturi și alte medii similare."),
                t("g708cbdc", "Profilul tău îndeplinește cerințele de verificare?"),
                t("b107ee5c", "Organizațiile de știri trebuie să aibă un cont public care este legat de site-ul lor oficial."),
                t("e8746826", "Am confirmat că contul angajatorului meu este deja verificat."),
                t("jc09b420", "Profilul tău îndeplinește criteriile pentru un jurnalist?"),
                t("gfbd7e58", "Jurnaliștii trebuie să aibă un cont public care să facă referire atât la numele, cât și la linkurile către site-ul oficial al organizației de știri verificate pentru care lucrează."),
                t("h0ad4c9e", "Referință/e din partea unei organizații de știri oficiale"),
                t("a6553b50", "Site-ul oficial al unei organizații sau publicații de știri calificate care îți menționează activitatea de jurnalist."),
                t("a29b2988", "Referințe sau mulțumiri în articole"),
                t("ab4eae60", "Cel puțin trei referințe sau contribuții apărute în publicații importante în ultimele șase luni."),
                t("b3fac982", "Adresa URL a furnizat linkuri către pagina specifică care mă menționa."),
                t("e26dc9e2", "Adaugă o activitate notabilă"),
                t("e164df2e", "Articolele furnizate îndeplinesc criteriile de notabilitate?"),
                t("i80ff05e", "Doar articolele publicate de organizațiile de știri și publicațiile verificate sunt calificate drept dovezi ale notabilității."),
                t("cf7482ec", "Da, furnizează"),
                t("fcb96cfc", "Persoană care participă la sporturi profesioniste"),
                t("ddc7d64a", "Sportivi profesioniști, antrenori, manageri, precum și sportivi care participă la competiții globale (de exemplu, Olimpiadă, Jocuri paralimpice etc.)."),
                t("c4e0d346", "Entitate de sport profesionist"),
                t("e3ce81fa", "Ligi sportive profesioniste, echipe și competiții globale (de exemplu, Olimpiadă, Jocuri paralimpice etc.)."),
                t("b2808f48", "Persoana care participă la jocuri"),
                t("db7b3558", "Conturile individuale ale jucătorilor de sporturi electronice, care sunt afiliați cu echipe sau ligi de gaming verificate."),
                t("bbd9a912", "Am confirmat că echipa, liga, evenimentul sau organizația asociată contului meu s-a verificat deja."),
                t("he9c5638", "Un link către site-ul oficial al unei competiții globale sau organizații de sport care te menționează."),
                t("bf06e1d6", "Un site oficial asociat unei organizații de sport profesionist care te menționează ca sportiv profesionist, manager sau antrenor."),
                t("e241d35e", "Cel puțin trei articole apărute în organizații de știri sau publicații verificate care te menționează ca sportiv profesionist, manager sau antrenor."),
                t("ad456030", "Cel puțin trei articole apărute în organizații de știri sau publicații verificate care te menționează ca persoană care participă la jocuri."),
                t("hbe2e65c", "Un site oficial asociat cu o ligă sau eveniment de sport electronic verificat care te menționează ca persoană care participă la jocuri."),
                t("j3da4dea", "Momentan nu poți solicita verificarea"),
                t("af39265e", "Companii, branduri și organizații"),
                t("bb51cd7a", "Sporturi și gaming"),
                t("c044a571", "Află mai multe"),
                t("a58cd1fb", "Află mai multe"),
                t("b47b0fd1", "Află mai multe"),
                t("db25263b", "Află mai multe"),
                t("b25b02c3", "Află mai multe"),
                t("j6ef6afb", "Află mai multe"),
                t("d42d162b", "Află mai multe"),
                t("ccadfc85", "Află mai multe"),
                t("ddb47f57", "Află mai multe"),
                t("bf9e181b", "Află mai multe"),
                t("e8e39f95", "Află mai multe"),
                t("e126dd3f", "Află mai multe"),
                t("i821844f", "Află mai multe"),
                t("b0abbb17", "Află mai multe"),
                t("e7e0d88b", "Află mai multe");
            t("i560665f", "Află mai multe"),
                t("f6e774d9", "Află mai multe"),
                t("h486f755", "Află mai multe"),
                t("bab41dab", "Află mai multe"),
                t("e0ebdb29", "Află mai multe"),
                t("f8493831", "Află mai multe"),
                t("icb5913f", "Află mai multe"),
                t("af819833", "Află mai multe"),
                t("d35525b1", "Află mai multe"),
                t("cb181ed1", "Află mai multe"),
                t("f6c3d3f1", "Află mai multe"),
                t("d4588ded", "Află mai multe"),
                t("a759bff9", "Află mai multe"),
                t("c64a59f7", "Află mai multe"),
                t("c054f433", "Află mai multe"),
                t("c1b7ad51", "Află mai multe"),
                t("f7998565", "Află mai multe"),
                t("c74a47ef", "Află mai multe"),
                t("gf9899bf", "Află mai multe"),
                t("d7a9185d", "Află mai multe"),
                t("c4b205e1", "Află mai multe"),
                t("c04b4b1d", " Află mai multe"),
                t("d26ccc67", " Află mai multe"),
                t("hdb3bc85", " Află mai multe"),
                t("b6cb494f", "Află mai multe"),
                t("abc132eb", "Află mai multe"),
                t("de1b28ad", "Află mai multe"),
                t("h04c272d", "Află mai multe"),
                t("j331c659", "Află mai multe"),
                t("h02fe64f", "Află mai multe"),
                t("a7df4b85", "Află mai multe"),
                t("e9b71903", "Află mai multe"),
                t("g961011f", "Află mai multe"),
                t("d5dedb7b", "Află mai multe"),
                t("gd396551", "Află mai multe"),
                t("dccc08bf", "Află mai multe"),
                t("f22a6d0d", "Află mai multe"),
                t("i78c9fd5", "Află mai multe"),
                t("f3e333a9", "Află mai multe"),
                t("i5fee6d3", "Află mai multe"),
                t("fe7420f5", "Află mai multe"),
                t("fcfad60d", "Află mai multe"),
                t("cc35a6b9", "Află mai multe"),
                t("d9bd3823", "Află mai multe"),
                t("a67f27bd", "Află mai multe"),
                t("b8be7adb", "Află mai multe"),
                t("gd663f41", "Află mai multe"),
                t("b436b101", "Află mai multe"),
                t("j97bce4a", "Identificator X"),
                t("acd5ca14", "Încearcă din nou. Numele de utilizator nu includ caractere speciale precum @, $ sau #."),
                t("bbef41c2", "Revizuiește adresa de e-mail oficială asociată solicitării de verificare a contului tău X."),
                t("be03ecca", "Adresa de e-mail"),
                t("c69a40de", "Nu ai o adresă de e-mail confirmată existentă."),
                t("c83a1662", "Nu ai o adresă de e-mail eligibilă și verificată."),
                t("e1e878ee", "Setări"),
                t("b9635182", "Setări"),
                t("j163be32", "Inițiază solicitarea"),
                t("gaf821c8", "Solicitare de verificare"),
                t("e1ac0f9b", "Află mai multe"),
                t("h2d4ba56", "Îți verificăm actul de identitate..."),
                t("i2051842", "Ne asigurăm că documentul tău de identitate îndeplinește standardele noastre. Acest proces poate dura până la 30 de secunde."),
                t("fc2a5c92", "Ceva nu a mers bine"),
                t("jf4b6f70", "A apărut o problemă la încărcarea actului tău de identitate. Încearcă din nou să îl încarci."),
                t("d338f53e", "Încearcă din nou"),
                t("e43672a0", "Va trebui să colectăm câteva informații despre actul tău de identitate emis de o autoritate guvernamentală."),
                t("b246aa5e", "Țara emitentă"),
                t("d6fb5878", "Alege țara"),
                t("b72f97cc", "Tipul de ID"),
                t("b2ab6008", "Alege tipul de act de identitate"),
                t("h9270b1c", "Caută țări"),
                t("ff1d68f8", "Încarcă o fotografie cu actul tău de identitate"),
                t("bdada5a6", "Față"),
                t("edfed0f6", "Încarcă o imagine cu partea din față a actului de identitate"),
                t("def5015d", function (e) {
                    return "Înapoi" + e.back_of_document;
                }),
                t("b09aade6", "Încarcă o imagine cu partea din spate a actului de identitate"),
                t("b40ed190", "Document"),
                t("c6650b56", "Încarcă documentul"),
                t("d171ed16", "Ne bazăm pe terți de încredere pentru ajutor. Aceștia verifică autenticitatea documentului tău de identitate și ne furnizează informații limitate și o platformă. Astfel, putem să îți confirmăm eligibilitatea pentru a obține starea de cont verificat."),
                t("d20f76cb", "Află mai multe"),
                t("b8deb156", "Politica de confidențialitate"),
                t("b9960f32", "Adaugă fotografii sau un videoclip"),
                t("gd80afba", "Editează conținutul media"),
                t("j322caee", "Semnalizează conținut media sensibil"),
                t("abd845fe", "Editează"),
                t("df1b0708", "Redă acest GIF"),
                t("cd959e5c", "Elimină conținutul media"),
                t("add55c98", "Conținut media"),
                t("f350cf46", "Glisează și plasează conținut media"),
                t("gff1f69e", "Se încarcă imaginea"),
                t("a91bb144", "Trimite"),
                t("affce770", "Noi și părțile terțe de încredere vom folosi informațiile legate de contul tău, precum și orice informații suplimentare pe care ni le furnizezi, pentru a stabili autenticitatea și eligibilitatea ta pentru verificare."),
                t("i0864918", "Categorie"),
                t("c7942074", "Tip de cont"),
                t("b8121daa", "Referință (referințe) remarcabile"),
                t("d247ca70", "Examinează mai jos detaliile legate de solicitarea de verificare. După confirmare, atinge butonul Trimite."),
                t("b51afbb2", "Metodă de autentificare"),
                t("cc87b01c", "Revizuiește și trimite"),
                t("ec6801cc", "Solicitarea ta a fost trimisă!"),
                t("i6ef95ec", "sondaj"),
                t("j94e995e", "Ultima solicitare a fost respinsă. Pentru a trimite o nouă solicitare, va trebui să aștepți 30 de zile de la data respectivă."),
                t("da458d6c", "Ai trimis o solicitare de verificare, însă ai fost respins în ultimele 30 de zile. Încearcă din nou."),
                t("j4ed9f0e", "Ai trimis o solicitare de verificare. Te vom contacta imediat ce se ia o decizie."),
                t("b1ade780", "Contul tău este prea nou. Așteaptă să aibă cel puțin 7 zile, apoi încearcă din nou."),
                t("aab67626", "Solicitarea ta de verificare este în curs de revizuire"),
                t("d3c1e25e", "Nu, nu a fost un vis. Contul tău chiar este verificat."),
                t("a8b4500e", "Regulile"),
                t("ef1b5cbc", "Alege atât notificările pe care dorești să le vezi, cât notificările care ai vrea să nu se afișeze."),
                t("aaafffda", "Notificările ignorate"),
                t("afdf29b8", "Filtru de calitate"),
                t("da19d878", "Alege să elimini prin filtrare conținut precum postările duplicate sau automate. Acest lucru nu este valabil în cazul notificărilor de la conturi pe care le urmărești sau cu care ai interacționat recent."),
                t("i2209530", "Salvează"),
                t("da867c58", "Selectează preferințele după tipul de notificare."),
                t("a2197726", "Gestionează securitatea contului."),
                t("i36dcc3e", "Protejează-ți contul împotriva accesului neautorizat, prin solicitarea unei metode de autentificare secundare, în plus față de parola ta de X. Poți alege o metodă prin mesaj text, o aplicație de autentificare sau o cheie de securitate."),
                t("ead60eb8", "Protecție suplimentară prin parolă"),
                t("gfaf9a4a", "Protejarea resetării parolei"),
                t("h3cc8462", "Pentru o protecție suplimentară, va trebui să îți confirmi adresa de e-mail sau numărul de telefon pentru a-ți reseta parola pentru X."),
                t("b4bbdeb4", "Cheie de acces"),
                t("fe8aeb88", "Cheile de acces îți oferă protecție suplimentară care poate fi asociată cu caracteristicile tale biometrice."),
                t("dc096238", "Încarcă o formă de identificare aprobată pentru a-ți confirma autenticitatea contului. Informațiile tale vor fi utilizate numai pentru a-ți confirma identitatea și vor fi gestionate în condiții de siguranță și securitate."),
                t("a999cb72", "Salvează modificările la cont"),
                t("dec3c9b8", "Parolă"),
                t("b929aa74", "Introdu din nou parola X pentru a salva modificările la contul tău."),
                t("d1091f50", "Ai uitat parola?"),
                t("fd23fe4a", "Iată cheile de acces pentru toate dispozitivele tale"),
                t("d9921a6c", "Creează o nouă cheie de acces"),
                t("i4855730", "Șterge cheie de acces"),
                t("a6acdc67", function (e) {
                    return "Data adăugării: " + e.date;
                }),
                t("d97c07be", "Gestionează Abonamentele de creator"),
                t("efa291da", "Vizualizează și gestionează abonamentele tale la creatorii de mai jos prin intermediul Stripe. Toate abonamentele active pe care le-ai inițiat pe iOS sau Android pot fi gestionate în aplicație."),
                t("j7f5c6aa", "Deocamdată, nu ai niciun abonament"),
                t("ef4602ec", "Ceva nu a mers bine. Încearcă din nou mai târziu."),
                t("b02df748", "Gestionează securitatea contului și monitorizează modul în care este utilizat acesta, inclusiv utilizarea aplicațiilor pe care le-ai conectat la cont."),
                t("g2841de4", "Vezi informații legate de momentul când te-ai conectat la cont, precum și despre aplicațiile pe care le-ai conectat la cont."),
                t("hf45cca6", "Gestionează conturile Google sau Apple conectate la X pentru a te conecta."),
                t("a310511c", "Gestionează conturile tale partajate."),
                t("jc02ae68", "Aplicații conectate"),
                t("dd82312a", "Sesiuni"),
                t("e5e8a89a", "Se încarcă aplicațiile"),
                t("hfa9a2c8", "Gestionează aplicațiile conectate într-o clipită"),
                t("dd1b86f9", function (e) {
                    return "de la " + e.name;
                }),
                t("cf461930", "Aplicațiile terțe cărora le permiți să îți acceseze contul X vor fi afișate aici."),
                t("b63b0b1d", "Află mai multe"),
                t("c2cb5560", "Sesiunea activă curentă"),
                t("bca43fd0", "Deconectează-te de la celelalte sesiuni"),
                t("ha6df2ca", "Sesiunile sunt dispozitivele pe care le folosești sau care ți-au folosit contul X. Acestea sunt sesiunile la care este conectat în prezent contul tău. Te poți deconecta de la fiecare sesiune."),
                t("b72d2904", "Ești conectat la acest cont X pe acest dispozitiv și îl utilizezi în prezent."),
                t("b850cbd0", "Ești conectat la aceste conturi pe aceste dispozitive și în prezent nu le utilizezi. "),
                t("cf3e3164", "Deconectează-te de la toate celelalte sesiuni"),
                t("f810f27a", "Dorești să închei celelalte sesiuni?"),
                t("gbb5cec5", function (e) {
                    return "Deconectarea va încheia " + e.num + " dintre sesiunile tale de X active. Nu îți va afecta sesiunea activă curentă.";
                }),
                t("fcbd4904", "Aceasta va încheia sesiunea ta activă de X."),
                t("ab78d946", "Ești pe punctul de a încheia celelalte sesiuni active de X și va trebui să te conectezi din nou la acele dispozitive pentru a începe alte sesiuni noi."),
                t("e186a3d6", function (e) {
                    return "" + e.learnMoreLabel;
                }),
                t("ed5ab16a", "Activ acum"),
                t("c9bc33fa", "Dispozitive"),
                t("f95ed3e6", "Dispozitiv curent"),
                t("a787669a", "Înregistrarea altor dispozitive"),
                t("gbefe730", "Te-ai înregistrat să primești mesaje directe criptate pe aceste alte dispozitive."),
                t("d7a9796e", "Se încarcă dispozitivele"),
                t("b5635e86", "Înregistrează acest dispozitiv"),
                t("bb4a95dc", "Îți înregistrezi dispozitivul?"),
                t("a9538040", "Înregistrarea acestui dispozitiv îți va permite să inițiezi noi conversații criptate cu alți utilizatori înregistrați"),
                t("hd173c7a", "Înregistrează-te"),
                t("hf4312a4", "Dispozitivul a fost înregistrat."),
                t("h7797d18", "Înregistrat"),
                t("hc48a042", "Anulează înregistrarea acestui dispozitiv"),
                t("d5bafb20", "Anulezi înregistrarea acestui dispozitiv?"),
                t("i12dee70", "Anularea înregistrării unui dispozitiv înseamnă că nu vei mai avea acces la mesajele criptate de pe acesta."),
                t("d4b9db26", "Anulează înregistrarea"),
                t("c18b1b34", "Data și ora înregistrării"),
                t("e7c9d60a", "Înregistrarea dispozitivului selectat a fost anulată."),
                t("cd14c8fe", "Se încarcă informațiile dispozitivului"),
                t("j9db22f4", "Nu putem găsi acest dispozitiv"),
                t("c477d710", "Gestionează informațiile pe care le vezi și le distribui pe X."),
                t("b06f5d36", "Activitatea ta pe X"),
                t("fd807e78", "Segmentul de public, conținutul media și etichetarea"),
                t("a9ff473c", "Gestionează informațiile pe care le pui la dispoziția celorlalți utilizatori de pe X."),
                t("d0484606", "Gestionează informațiile asociate postărilor tale."),
                t("c4afe0e6", "Decide ce să se afișeze pe X pe baza preferințelor tale, de exemplu, ținând cont de subiecte și interese"),
                t("ab125232", "Gestionează conturile, cuvintele și notificările pe care le-ai ignorat sau le-ai blocat."),
                t("cc950d94", "Gestionează persoanele care îți pot trimite mesaje în mod direct."),
                t("fe37f854", "Gestionează cine poate vedea activitatea de ascultare în Spațiile tale"),
                t("ab987f3c", "Controlează setările privind capacitatea de descoperire și gestionează contactele pe care le-ai importat."),
                t("db5fabb0", "Distribuirea datelor și activitatea în afara X"),
                t("i83cab8a", "Distribuire date și personalizare"),
                t("e338a794", "Gestionează-ți experiența cu reclamele de pe X."),
                t("c05e8024", "Gestionează-ți experiența cu modulele cookie de pe X."),
                t("d29d59d0", "Gestionează modul în care X îți folosește activitatea online în afara X, de exemplu, site-urile pe care le vizitezi, pentru a-ți personaliza experiența."),
                t("c981a36c", "Permite X să îți personalizeze experiența cu activitatea ta dedusă, de ex. activitate pe dispozitive pe care nu le-ai folosit pentru a te conecta la X."),
                t("eb0cc786", "Permite partajarea de informații suplimentare cu partenerii de afaceri X."),
                t("dd533318", "Gestionează informațiile despre locație pe care le utilizează X pentru a-ți personaliza experiența."),
                t("bd0646a0", "Află mai multe despre confidențialitatea pe X"),
                t("a607862a", "Politică de confidențialitate"),
                t("g5925628", "Contactează-ne"),
                t("dd6012f8", "Centrul de confidențialitate"),
                t("jdceda60", "Răspunsuri"),
                t("f644b748", "Gestionează cine poate răspunde la postările tale și la răspunsurile tale filtrate."),
                t("ff4b3818", "Grok și colaboratori terți"),
                t("i586f3e0", "Permite ca datele tale publice, precum și interacțiunile, informațiile introduse și rezultatele obținute cu Grok și xAI să fie utilizate pentru instruire și optimizare"),
                t("d8492604", "Când este selectată această opțiune, postările tale și alte informații de cont sunt vizibile doar persoanelor care te urmăresc."),
                t("if050fae", "Protejează-ți videoclipurile"),
                t("b7ed5f6e", "Dacă selectezi această opțiune, videoclipurile din postările tale nu vor fi în mod prestabilit disponibile pentru descărcare. Această setare se aplică postărilor viitoare și nu are caracter retroactiv."),
                t("dbb51952", "Îți protejezi postările?"),
                t("de735de6", "Astfel, vor fi vizibile doar pentru persoanele care te urmăresc pe X."),
                t("c5d4192a", "Protejează"),
                t("d9ddba70", "Comunitățile sunt publice, de aceea protejarea contului tău va ascunde postările tale anterioare. De asemenea, nu vei putea trimite postări în Comunitate până când contul tău nu este public din nou."),
                t("f527b322", "Vreau să-mi protejez contul"),
                t("d165c992", "Oricine te poate eticheta"),
                t("ea339390", "Doar persoanele pe care le urmărești te pot eticheta"),
                t("e3a761ee", "Dezactivat"),
                t("a61ed23a", "Marchează conținutul media pe care îl distribui în postări drept material care ar putea fi sensibil"),
                t("ae27c454", "Când este activată această opțiune, imaginile și videoclipurile pe care le incluzi în postări vor fi marcate ca sensibile pentru persoanele care nu doresc să vadă conținut sensibil."),
                t("fc1d217c", "Afișează conținutul media care ar putea include material sensibil"),
                t("j018f2a2", "Explorează setările"),
                t("h1ef00dc", "Setări de căutare"),
                t("b05b9398", "Când este activată această setare, X poate personaliza conținutul afișat în Pentru tine, în funcție de activitatea ta pe X."),
                t("a3c1324c", "Afișează conținut recomandat în cronologia Pentru tine"),
                t("ee4592ca", "Nimeni"),
                t("da813d22", "Utilizatori verificați"),
                t("baffe39a", "Toți"),
                t("b3d8566e", "Filtrează mesajele de slabă calitate"),
                t("cfda8c44", "Ascunde solicitările de mesaje care au fost detectate ca fiind potențial spam sau de slabă calitate. Acestea vor fi trimise într-un inbox separat, aflat în partea de jos a solicitărilor de mesaje. Le poți accesa totuși dacă dorești."),
                t("f4c91f40", "Permite mesaje de la abonații mei"),
                t("bf0c4336", "Abonații tăi îți vor putea trimite întotdeauna mesaje, indiferent de alte setări pentru mesaje."),
                t("e6c411d8", "Filtrează conținutul media grafic"),
                t("g558101a", "Afișează avertismente deasupra mesajelor în care s-a detectat un posibil conținut media grafic (de exemplu, nuditate, conținut de natură sexuală sau violență). Vei avea întotdeauna opțiunea de a vedea conținutul media dacă dorești."),
                t("d9172542", "Afișează confirmările de citire"),
                t("bd557506", "Permite ca utilizatorii cu care faci schimb de mesaje să vadă că le-ai citit mesajele. Confirmările de citire nu sunt afișate în solicitările de mesaje."),
                t("f29080d0", "Permite solicitări de mesaje de la:"),
                t("j0adcc2d", "Află mai multe"),
                t("ib3357a6", "Reclame personalizate"),
                t("f2f9628e", "Vei vedea întotdeauna reclame pe X bazate pe activitatea ta pe X. Atunci când este activată această setare, este posibil ca X să personalizeze reclamele de la agenții de publicitate X, atât pe X, cât și în afara sa, combinând activitatea ta pe X cu alte activități online și informații de la partenerii noștri."),
                t("b5fe50fc", "Categorii de reclame"),
                t("c31a2ea6", "Activarea acestor setări te face eligibil să vezi reclame din aceste categorii. Alege să vezi mai puține reclame din aceste categorii prin opțiunea de renunțare."),
                t("if996630", "Jocuri de noroc"),
                t("a9ed7774", "Permite utilizarea locurilor de pe web în care vezi conținut X"),
                t("e2d61838", "Această setare permite ca X să îți urmărească vizitele pe alte site-uri care integrează conținut X, de exemplu, în cronologiile încorporate. Aceste informații îmbunătățesc X pentru tine, de exemplu, prin personalizarea experienței. Acest istoric de navigare pe web nu va fi stocat niciodată cu numele, e-mailul sau numărul tău de telefon."),
                t("c966aaf4", "Aceste vizite pe pagini web nu sunt stocate sau utilizate atunci când te afli în anumite țări."),
                t("e8313b32", "Ești sigur? După ce dezactivezi setarea, nu o vei putea reactiva cât timp ești în această țară."),
                t("f1d46fd6", "Da, sunt sigur"),
                t("f6c8ccc8", "Personalizează pe baza identității tale deduse"),
                t("ed012c88", "X îți va personaliza întotdeauna experiența în funcție de informațiile pe care le-ai furnizat și de dispozitivele pe care le-ai folosit pentru a te conecta. Când este activată această setare, X poate personaliza și pe baza altor inferențe despre identitatea ta, cum ar fi dispozitivele și browserele pe care nu le-ai folosit pentru a te conecta la X sau adresele de e-mail și numerele de telefon similare cu cele conectate la contul tău X."),
                t("d3c20d80", "Permite partajarea de informații suplimentare cu partenerii de afaceri"),
                t("f1c0d09c", "X partajează întotdeauna informații cu partenerii de afaceri ca modalitate de a-și difuza și îmbunătăți produsele. Când este activată această opțiune, X are permisiunea de a partaja informații suplimentare cu partenerii respectivi pentru a sprijini derularea operațiunilor de business X, precum și pentru a crește relevanța activităților de marketing X de pe alte site-uri și aplicații."),
                t("dc20d918", "Personalizează în funcție de locurile unde ai fost"),
                t("af7d89e6", "X utilizează întotdeauna unele informații, cum ar fi locul de unde te-ai înregistrat și locația ta curentă, pentru a-ți putea afișa conținut mai relevant. Când această setare este activată, este posibil ca X să îți personalizeze experiența și pe baza altor locuri în care ai fost."),
                t("f2b23062", "Accesibilitate, afișaj și limbi"),
                t("fa76d7dc", "Gestionează modul în care este afișat conținutul X."),
                t("j7a15010", "Gestionează aspecte ale experienței tale pe X, cum ar fi limitarea contrastului între culori și a mișcării."),
                t("a257ecae", "Gestionează dimensiunea fontului, culoarea și fundalul. Aceste setări afectează toate conturile X de pe acest browser."),
                t("jc3fa0e2", "Gestionează limbile care sunt utilizate pentru a-ți personaliza experiența pe X."),
                t("cc2973a8", "Limitează modul în care X folosește unele dintre datele tale de rețea pe acest dispozitiv."),
                t("h54e6138", "Comenzi rapide de tastatură"),
                t("a4b69cbc", "Limba de afișare"),
                t("c856bd00", "Selectează limba preferată pentru titluri, butoane și alte texte pe X."),
                t("cab61d58", "Selectează limbi suplimentare"),
                t("dd93fafa", "Selectează limbi suplimentare pentru conținutul pe care dorești să îl vezi pe X."),
                t("bca1de4a", "Limbi suplimentare pe care le vorbești"),
                t("c3aa76c4", "Limbi pe care probabil că le cunoști"),
                t("g099069c", "Gestionează limbile deduse de X pe baza activității tale, cum ar fi conturile pe care le urmărești și postările cu care interacționezi."),
                t("cf9ce876", "Limbile pentru aplicație și postări"),
                t("f8e46b90", "Acestea sunt conturile sociale pe care le-ai asociat cu contul tău X pentru a te conecta. Poți dezactiva accesul aici."),
                t("d84ed6b2", "Deconectare"),
                t("i51130d4", "Google"),
                t("e28901f2", "Apple"),
                t("cf8560be", "Conectat"),
                t("ad31b476", "Gestionează contul tău automat."),
                t("a2981062", "Cont de administrator"),
                t("aff4540e", "Schimbă contul de administrator"),
                t("b8b9d100", "Configurează automatizarea contului"),
                t("e0bc51f6", "Dezactivează automatizarea contului"),
                t("b92190c2", "Cont de administrator conectat"),
                t("fb03b39a", "Cont de administrator deconectat"),
                t("bd51ddfa", "Nu putem deconecta contul tău de administrator în momentul acesta. Te rugăm să încerci din nou mai târziu."),
                t("e91c15f6", "Vrei să deconectezi contul tău de administrator?"),
                t("df035b80", "Contul tău automat își va pierde eticheta dacă vei deconecta contul tău de administrator."),
                t("bd12cf34", "Da, deconectează"),
                t("f79acef3", "Află mai multe"),
                t("a57a341c", "Instrument de economisire a datelor"),
                t("ab6505a8", "Dacă este selectată această opțiune, X va folosi mai puține date de rețea."),
                t("a5d4fda0", "Ceva nu a mers bine, dar nu te îngrijora – să încercăm din nou!"),
                t("g1888dc2", "Niciodată"),
                t("f724d1aa", "Doar cu Wi-Fi"),
                t("cf6472c2", "Cu conexiune mobilă sau Wi-Fi"),
                t("b2ed92c4", "Se solicită arhiva"),
                t("ce5d2c46", "Temporar indisponibil"),
                t("bed6a87c", "Linkul către datele tale X a expirat"),
                t("b24b4768", "Mergi la Datele mele X"),
                t("a0c3f812", "Pentru a obține una actualizată, va trebui să faci o solicitare nouă."),
                t("eea30bb5", function (e) {
                    return "Generat pe: " + e.date;
                }),
                t("f2cde471", function (e) {
                    return "Expiră pe: " + e.date;
                }),
                t("b7ce9dbf", function (e) {
                    return "Dimensiunea estimată: " + e.size;
                }),
                t("d3de4c97", function (e) {
                    return "Date X (" + e.currentIndex + " din " + e.count + ")";
                }),
                t("fc5bfd96", "Începe"),
                t("gee8110e", "Descarcă arhiva"),
                t("c326f156", "Arhiva a fost descărcată"),
                t("c9fe9b56", "Arhiva ta urmează să fie descărcată"),
                t("j54b679b", function (e) {
                    return "Se va deschide în altă fereastră și finalizarea procesului poate dura un timp. După finalizare, fișierul descărcat va fi un ZIP de " + e.size + ".";
                }),
                t("ac63840d", function (e) {
                    return e.size + " KB";
                }),
                t("bcd9b0ed", function (e) {
                    return e.size + " MB";
                }),
                t("ce494bb4", "Dimensiune font"),
                t("c783d45e", "Culoare"),
                t("h306a358", "Fundal"),
                t("d8680056", "Foarte mic"),
                t("j59f0b94", "Implicit"),
                t("b81aaad8", "Mare"),
                t("c7044880", "Foarte mare"),
                t("e46dffa0", "Dimensiunea textului"),
                t("ce8a8116", "Opțiuni pentru fundal"),
                t("d3d48f3a", "Deschis"),
                t("i76f67ee", "Întunecat"),
                t("c8f85960", "Obscur"),
                t("aefc5b20", "Opțiuni pentru culori"),
                t("a52d0fde", "Albastru"),
                t("d818cdd6", "Galben"),
                t("fee1cd64", "Roz"),
                t("cbed7fb2", "Violet"),
                t("g697ec02", "Portocaliu"),
                t("a7c2204a", "Verde"),
                t("gde8fdd7", function (e) {
                    return "La baza platformei X se află mesaje scurte denumite postări – precum aceasta – care pot include fotografii, videoclipuri, linkuri, text, hashtaguri și menționări precum @" + e.mention + ".";
                }),
                t("f277e94a", "Vezi"),
                t("ee79367b", function (e) {
                    return "Nivel " + e.conversationTreeDepth + ":";
                }),
                t("ec6907ba", "Reclamă"),
                t("d9587114", "Vezi cea mai recentă postare"),
                t("b7b86c3c", "Deschide versiunea nouă a acestei postări"),
                t("a407814e", "Editat ultima dată"),
                t("i46ee3f0", "Aceasta este cea mai recentă versiune a acestei postări."),
                t("e18cb87c", "Explică această postare"),
                t("ffe16626", "Filtrul de răspunsuri este activat."),
                t("jc81f6a7", function (e) {
                    return e.count + " vizualiz" + r(e.count, "ări", "are", "ări");
                }),
                t("g521abc6", "Grok, analizează!"),
                t("a09331e0", "Articole asociate"),
                t("e3eceda6", "Acțiuni Grok"),
                t("a653f08f", function (e) {
                    return "Citește " + e.replyCount + " (de) răspunsuri";
                }),
                t("dc0c8266", "Întrebă Grok"),
                t("f396c105", function (e) {
                    return "" + e.displayCount;
                }),
                t("aa037e65", function (e) {
                    return "Vizualiz" + r(e.count, "ări", "are", "ări");
                }),
                t("b8f3500a", "Vizualizează fir în Cititor"),
                t("fc7db594", "Sumarul profilului"),
                t("c3f04d9c", "Se gândește"),
                t("cbdddb0a", "Încheiat"),
                t("e98cc293", function (e) {
                    return "Se caută " + e.query;
                }),
                t("b0d1e205", function (e) {
                    return "Caută **„" + e.query + "”**";
                }),
                t("i2e0f4d7", function (e) {
                    return "Se navighează pe " + e.url + " pentru a căuta " + e.query;
                }),
                t("acb9b845", function (e) {
                    return "Navighează pe " + e.url + " pentru a căuta **„" + e.query + "”**";
                }),
                t("ef261d8d", function (e) {
                    return "Caută postări ale utilizatorului @" + e.username;
                }),
                t("f7d9cfb9", function (e) {
                    return "Se caută postări de la @" + e.username + " cu " + e.query;
                }),
                t("bec7eb11", function (e) {
                    return "Se caută postări de la @" + e.username + " cu **„" + e.query + "”**";
                }),
                t("ead81122", "Ceva nu a mers bine. Reîmprospătează pentru a te reconecta sau încearcă din nou."),
                t("f808a13a", "Ai depășit limita. Așteaptă câteva momente, apoi încearcă din nou."),
                t("e0481e5a", "Momentan, Grok nu este acceptat în țara ta."),
                t("bc0a5b5a", "Grok este momentan indisponibil, încearcă din nou mai târziu."),
                t("ef674976", "Nu ești autorizat să utilizezi acest serviciu."),
                t("c74e87e0", "Fișierul este prea mare. Selectează un fișier mai mic."),
                t("bea50a2a", "Acest format de fișier nu este acceptat."),
                t("j77292b7", function (e) {
                    return "Selectează maximum " + e.count + " fișier" + r(e.count, "e", "", "e");
                }),
                t("cbc8fed4", "Traducerea a fost fidelă? Spune-ne ce crezi pentru a o putea îmbunătăți:"),
                t("d56779a2", "ușor de înțeles"),
                t("b6fe8a56", "confuză și neclară"),
                t("i73a7d48", "Tradus de Google"),
                t("eeadb767", function (e) {
                    return "Tradus din " + e.originLanguage + " de Google";
                }),
                t("d9c6f69d", function (e) {
                    return "Tradus din " + e.originLanguage + " de Grok";
                }),
                t("dc445f82", "Tradus de Papago"),
                t("he9803d3", function (e) {
                    return "Tradus din " + e.originLanguage + " de Papago";
                }),
                t("f8264fc0", "Tradus de X"),
                t("caa5ba3d", function (e) {
                    return "Tradus din " + e.originLanguage + " de X";
                }),
                t("deaf5b16", "Reîncearcă"),
                t("a66d80d0", "Tradu postarea"),
                t("be9b9fb8", "Tradus de Grok"),
                t("he9c9634", "Nu s-a putut prelua traducerea"),
                t("j2198c98", "Ascunde postarea tradusă"),
                t("d4d35bea", "Se traduce..."),
                t("i7ac410e", "Afișează versiunea originală"),
                t("c67f09e8", "Afișează traducerea"),
                t("e0f81ff3", "Traducere:"),
                t("j2862695", function (e) {
                    return "Traducere din " + e.originLanguage + " de";
                }),
                t("b7cb4fab", "Traducere de"),
                t("e0bffbf8", "About automatic translation"),
                t("e839db3a", "Renunță"),
                t("a15585b4", "Language Settings"),
                t("d4c339b9", function (e) {
                    return "Postare de la " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("db0cb64f", function (e) {
                    return e.fullName + " (@" + e.screenName + ") a postat:\n" + e.tweet;
                }),
                t("h6f99ac4", "Adăugare la Marcaje"),
                t("g1c463f6", "Eliminare din Marcaje"),
                t("a2e7377f", function (e) {
                    return "Eliminat din " + e.bookmarkFolderName;
                }),
                t("i47ad24c", "Ține-o tot așa! Cu cât apreciezi mai multe postări, cu atât cronologia ta va fi mai bună."),
                t("def4a37c", "Foarte bine! Cronologia ta devine mai interesantă. Cu cât faci mai multe aprecieri, cu atât mai relevantă va deveni cronologia ta – continuă să apreciezi lucrurile care te interesează."),
                t("f5d17674", "Postare repostată"),
                t("d714acfa", "Postarea nu a fost repostată"),
                t("b18dff26", "Numai abonații pot vedea această repostare"),
                t("c2453318", "Adaugă la folder"),
                t("f88553c8", "Copiat în clipboard"),
                t("b5b36724", "Dorești în schimb să răspunzi?"),
                t("gce00a2a", "Repostează?"),
                t("g271f120", "Postarea ta schiță va fi eliminată înainte să răspunzi."),
                t("gad04d1a", "Postarea ta schiță va fi eliminată înainte să citezi."),
                t("ibd021f2", "Vrei să citești mai întâi articolul?"),
                t("bbef69c4", "Ești pe punctul de a distribui un articol pe care nu l-ai deschis pe X."),
                t("g5092766", "Citește articolul"),
                t("a2d5c006", "Îți mulțumim că ai accesat linkul"),
                t("g37bb2d0", "Accesarea linkurilor înainte de a le distribui ajută la promovarea discuțiilor în cunoștință de cauză."),
                t("gc45a90a", "Extinde această solicitare"),
                t("g7135e44", "Ajută ca X să rămână un mediu cu informații de încredere. Află mai multe înainte de a aprecia această postare."),
                t("h9b6d468", "Ajută ca X să rămână un mediu cu informații de încredere. Află mai multe înainte de a distribui această postare."),
                t("af5cd00e", "Află mai multe"),
                t("e29c651e", "Îți mulțumim că ai ales să afli mai multe"),
                t("ef504d80", "Nu poți adăuga (încă) la Marcaje postări de la conturi protejate"),
                t("cef96d5a", "Postarea se află deja în Marcaje"),
                t("b2542f56", "Ceva nu a mers bine. Încearcă din nou să adaugi acea postare la Marcaje într-un minut."),
                t("fe3b9942", "La cererea acestui utilizator, ți-a fost blocată permisiunea de a-i aprecia postările."),
                t("c2a6dc5c", "Ceva nu a mers bine. Încearcă din nou să apreciezi postarea într-un minut."),
                t("b57f01b8", "Nu poți aprecia postări ale utilizatorilor protejați pe care nu îi urmărești."),
                t("ba0b3cc0", "La cererea acestui utilizator, ți-a fost blocată permisiunea de a-i reposta postările."),
                t("h32b1ac4", "Ceva nu a mers bine. Încearcă din nou într-un minut să repostezi."),
                t("e50cea9e", "Pentru această postare nu sunt permise repostările."),
                t("d8e56f40", "Ne pare rău! Ai depășit limita pentru postări. Încearcă din nou mâine să repostezi."),
                t("i14d7a46", "Ceva nu a mers bine. Încearcă din nou să elimini acea postare din Marcaje într-un minut."),
                t("d4ebfeb0", "Încearcă să-ți anulezi aprecierea postării din nou într-un minut."),
                t("e639775e", "Încearcă din nou anularea Retweetului tău într-un minut."),
                t("fcad707a", "Am pus un avertisment pe această postare deoarece ar putea avea conținut sensibil."),
                t("f1824804", "Contestă acest avertisment"),
                t("f755f710", "Am înțeles"),
                t("ced4abbe", "Vezi conversația"),
                t("d00e1d2a", "Alătură-te Comunității"),
                t("e6057014", "Cere să te alături"),
                t("ba352986", "Nu poți răspunde… cel puțin nu acum"),
                t("d09e76d8", "Comunitățile sunt publice, așa că poți citi postările, însă trebuie să te alături lor pentru a putea participa."),
                t("cfa1f802", "Explorează Comunitatea"),
                t("af27a0f8", "Ai fost eliminat din această Comunitate"),
                t("id089506", "Contactează moderatorii Comunității pentru a fi reprimit."),
                t("cac4e916", "Această postare este ascunsă"),
                t("cb18be32", "Nu poți face asta… cel puțin nu acum"),
                t("dbb5fd8e", "Postările din Cerc nu pot fi repostate"),
                t("ae2c8a1e", "De ce nu poți răspunde la aceasta?"),
                t("afe7ba26", "De ce nu poți aprecia aceasta?"),
                t("df9e2356", "De ce nu poți să adaugi la Marcaje?"),
                t("jead3bc2", "De ce nu poți distribui acest lucru?"),
                t("h2a668b8", "De ce nu poți vedea analiza postării?"),
                t("bd85267e", "De ce nu poți reposta?"),
                t("dcc05a7e", "Vizualizări"),
                t("e213fada", "Numărul de vizualizări nu este disponibil pentru această postare."),
                t("g0954ea6", "Doar autorul postării și echipa de moderatori a Comunității o pot vedea, iar interacțiunile sunt dezactivate."),
                t("e7969518", "Comunitățile sunt publice, așadar poți citi postările, dar participarea este momentan doar pe bază de invitație."),
                t("g2dc874a", "Comunitățile sunt publice, așadar poți citi postările, însă doar membrii pot interacționa cu ele."),
                t("g562676f", "Află mai multe"),
                t("ee574c37", "Află mai multe"),
                t("de2d83d6", "Marcaj la folder"),
                t("f14df406", "Copiază linkul la reclamă"),
                t("e05c00b4", "Copiază linkul"),
                t("f61c4bb0", "Trimite într-un Mesaj direct"),
                t("id35970e", "Postează videoclipul"),
                t("ff9348b8", "Distribuie reclama prin..."),
                t("d03241f8", "Distribuie postarea prin..."),
                t("j08dd2d4", "Elimină din Marcaje"),
                t("b7fde1ea", "Elimină din folder"),
                t("d9a2bd78", "Descarcă videoclipul"),
                t("fbfab656", "Distribuie pe Spațiu"),
                t("e668112c", "Postare distribuită cu Space"),
                t("g5775e46", "Vezi citatele"),
                t("bb192c6b", function (e) {
                    return "" + e.displayCount;
                }),
                t("f23d99b0", function (e) {
                    return "Marcaj" + r(e.count, "e", "", "e");
                }),
                t("e8866a55", function (e) {
                    return "" + e.displayCount;
                }),
                t("eb3abe45", function (e) {
                    return "Aprecier" + r(e.count, "i", "e", "i");
                }),
                t("eff958fb", function (e) {
                    return "" + e.displayCount;
                }),
                t("i5a8c515", function (e) {
                    return "Citat" + r(e.count, "e", "", "e");
                }),
                t("dd77f9fb", function (e) {
                    return "" + e.displayCount;
                }),
                t("a755b81b", function (e) {
                    return "Repost" + r(e.count, "ări", "are", "ări");
                }),
                t("e9f1fbcc", "Nimic de văzut aici - încă"),
                t("a3b80be6", "Revino mai târziu pentru a vedea postări despre acest lucru."),
                t("d93b360a", "Această coloană a fost golită; alte postări vor apărea mai sus atunci când vor fi create."),
                t("d6e2f9be", "Se încarcă cronologia"),
                t("afb4c24a", "Fără elemente"),
                t("e5b0063d", function (e) {
                    return "Cronologie: " + e.title;
                }),
                t("ib65b1c6", "Înregistrează-te cu Apple"),
                t("f55cebb8", "Înregistrează-te cu Apple"),
                t("dcc304d6", "Continuă cu Apple"),
                t("e0870f26", "Înregistrează-te cu Google"),
                t("gfeffd6a", "Conectează-te cu Google"),
                t("gf5e9ea6", "Anulare"),
                t("e43138c5", function (e) {
                    return "Urmărește pe " + e.name;
                }),
                t("be65f2e7", function (e) {
                    return "Oprește urmărirea utilizatorului " + e.name;
                }),
                t("a649d337", function (e) {
                    return "Nu sunt interesat de " + e.name;
                }),
                t("e2f2b658", "Nu vom mai sugera acest subiect."),
                t("b51f7edf", function (e) {
                    return "Ai oprit urmărirea utilizatorului " + e.name;
                }),
                t("gac366b3", function (e) {
                    return "Ai urmărit pe " + e.name;
                }),
                t("f9e45cfb", function (e) {
                    return "Blochezi utilizatorul @" + e.screenName + "?";
                }),
                t("fcd4d489", function (e) {
                    return "Blochează pe @" + e.screenName;
                }),
                t("a6450e84", "Blochează"),
                t("g353ad73", function (e) {
                    return "Acesta nu va putea să te urmărească  sau să îți vadă postările și nici tu nu vei vedea nicio postare și nicio notificare de la @" + e.screenName + ".";
                }),
                t("ad00a739", function (e) {
                    return "Va putea vedea postările tale publice, dar nu va mai putea interacționa cu ele. @" + e.screenName + " nu va mai putea să te urmărească și nici să-ți trimită mesaje, iar tu nu vei vedea notificări de la acest utilizator.";
                }),
                t("a9fd20be", "Blocat cu succes."),
                t("j546fb79", function (e) {
                    return "Deblochezi utilizatorul @" + e.screenName + "?";
                }),
                t("c9623eeb", function (e) {
                    return "Deblochează pe @" + e.screenName;
                }),
                t("e133be4e", "Deblochează"),
                t("he43bca4", "Acest utilizator te va putea urmări și îți va putea vedea postările."),
                t("f5f01af6", "Va putea să te urmărească și să interacționeze cu postările tale publice."),
                t("b6878b0a", "Ceva nu a mers bine. Încearcă din nou să blochezi acel utilizator într-un minut."),
                t("e40252de", "Nu afișa aceste postări în pagina Pentru tine"),
                t("ae225c26", "Afișează aceste postări în pagina Pentru tine"),
                t("a96d2628", "Nu afișa această listă în pagina Pentru tine"),
                t("d00abae0", "Postările populare din această Listă nu se vor mai afișa în cronologia Pentru tine."),
                t("e566dd06", "Postările populare din această Listă nu se vor mai afișa în pagina Pentru tine."),
                t("j3cc1526", "Afișează această listă în pagina Pentru tine"),
                t("h435716e", "Este posibil ca postările populare din această Listă să se afișeze în cronologia Pentru tine."),
                t("e8ba412e", "Postările populare din această Listă nu se vor mai afișa în pagina Pentru tine."),
                t("d66e95cc", "Fixezi răspunsul la postarea ta?"),
                t("i24ed0de", "Fixează răspunsul"),
                t("b1033082", "Va apărea în partea de sus a răspunsurilor la postarea ta. Îl poți înlocui sau poți anula fixarea acestuia în orice moment."),
                t("e96a5962", "Anulezi fixarea acestui răspuns?"),
                t("ec04e6fc", "Anulează fixarea răspunsului"),
                t("d05618f2", "Nu va mai apărea în partea de sus a răspunsurilor la această postare."),
                t("j9aedfdc", "Fixează răspunsul"),
                t("c034211a", "Anulează fixarea răspunsului"),
                t("ie4538b4", "Răspuns fixat la postare"),
                t("ad135a24", "Răspuns pentru care s-a anulat fixarea la postare"),
                t("ee369efc", "Nu s-a putut fixa răspunsul la postare"),
                t("c3e7f572", "Nu s-a putut anula fixarea răspunsului la postare"),
                t("d058316c", "Mulțumim. X va utiliza acest lucru pentru a-ți îmbunătăți cronologia."),
                t("afb7e8f8", "Citește articolul"),
                t("jb0429b1", function (e) {
                    return "De " + e.name + " @" + e.screenName;
                }),
                t("gfdad702", "18+"),
                t("c5d23126", "Fixează"),
                t("j44ec610", "Anulează fixarea"),
                t("ibd0106e", function (e) {
                    return "" + e.formattedCount;
                }),
                t("cface2d1", function (e) {
                    return "" + r(e.count, "Membri", "membru", "membri");
                }),
                t("b5334780", "În așteptare"),
                t("b171d7c4", "Alătură-te"),
                t("aa7ae3f6", "Te-ai alăturat"),
                t("bb1d57b6", "Părăsește"),
                t("h4fbfa58", "Sunt de acord și mă alătur"),
                t("ea8cfb1e", "Sunt de acord și solicit să mă alătur"),
                t("dc1b14a1", function (e) {
                    return "Consultă și exprimă-ți acordul cu regulile " + e.communityName;
                }),
                t("c966ac64", "Nu s-a reușit trimiterea cererii de alăturare la Comunitate. Încearcă din nou mai târziu."),
                t("g690e07e", "Răspunsul tău (opțional)"),
                t("a5d21bf4", "Răspunsul este opțional. Reține totuși că acesta ajută moderatorii să-ți accepte solicitarea."),
                t("h9526e03", "Regulile X"),
                t("c00c234f", function (e) {
                    return "Regulile " + e.communityName;
                }),
                t("hafa07f2", "Participarea este limitată"),
                t("c15bee32", "Ai fost eliminat din această Comunitate"),
                t("efa265fc", "Postările tale sunt protejate"),
                t("f9cecf48", "Din păcate nu te poți alătura momentan"),
                t("bf7bdb60", "Nu ai făcut nimic greșit, este doar vina noastră. Încearcă din nou mai târziu."),
                t("h27d6950", "Încă nu poți părăsi Comunitatea"),
                t("b02360f6", "Ultimul administrator sau moderator nu poate părăsi Comunitatea decât dacă aceasta este goală."),
                t("fe832999", "trebuie să îți faci postările publice"),
                t("bc7a7af4", "Postările tale publicate în Comunitate vor fi ascunse și nu vei putea să te alături din nou acestei Comunități."),
                t("a0e0a52c", function (e) {
                    return "" + e.offendingRule;
                }),
                t("fe76cacc", "Afișează mai multe postări"),
                t("aebb6546", "Se încarcă mai multe postări"),
                t("a3484d22", "egalitate"),
                t("aab2efa9", function (e) {
                    return "câștigător " + e.winner;
                }),
                t("ba21c289", function (e) {
                    return "Tabelă de scor, " + e.gameCategory + ", " + e.gameState + ", " + e.accessibleGameClockPeriod + ", " + e.teamOneLabel + ", " + e.teamTwoLabel;
                }),
                t("f178e38c", "Urmează"),
                t("b6da6b02", "În direct"),
                t("i9f615c8", "Scor final"),
                t("f897267a", "Amânat"),
                t("f93c4b6a", "Anulat"),
                t("i79ab12a", "Urmărește subiectul"),
                t("c0f56044", "Oprește urmărirea"),
                t("fcf51fe6", "Stea"),
                t("e9a90d72", "Marcat cu steluţă"),
                t("bf403716", "Anulează marcarea cu steluță"),
                t("c9f08e29", function (e) {
                    return "Vrei să anulezi marcarea cu steluță pentru " + e.title + "?";
                }),
                t("hed4dcd0", "Chiar dacă anulezi marcarea cu steluță a acestui subiect, este posibil să vezi în continuare postări despre acesta, în funcție de conturile pe care le urmărești."),
                t("cd876e02", "Favorite"),
                t("f2816e02", "Marcate ca favorite"),
                t("f5b04fbc", "Scoate din favorite"),
                t("c481ae3f", function (e) {
                    return "Vrei să scoți din favorite " + e.title + "?";
                }),
                t("c94116de", "Chiar dacă scoți din favorite acest subiect, este posibil să vezi în continuare postări despre acesta, în funcție de conturile pe care le urmărești."),
                t("e0e730b0", "Sunt interesat"),
                t("b1850062", "Nu sunt interesat"),
                t("gd3f996f", function (e) {
                    return "Nu ești interesat de " + e.title + "?";
                }),
                t("jdd65aac", "Chiar dacă nu ești interesat de acest Subiect, este posibil să vezi în continuare postări despre acesta, în funcție de conturile pe care le urmărești."),
                t("f93bb3ee", "Încarcă imaginea"),
                t("cc37768d", function (e) {
                    return e.mediaFileSize + " KB";
                }),
                t("f19d78d7", function (e) {
                    return e.mediaFileSize + " MB";
                }),
                t("c75bf00e", "Încarcă un GIF"),
                t("d3ac405c", "Încarcă videoclipul"),
                t("g97a046c", "Redă acest videoclip"),
                t("ac4c73d8", "Videoclip încorporat"),
                t("f3bb10a6", "Redare videoclip"),
                t("b87c0a72", "Activează notificările push pentru a nu rata nimic din ce se întâmplă pe X"),
                t("e71e09ec", "Activează notificările"),
                t("g4850f44", "Notificări push activate"),
                t("dc397182", "Particularizează"),
                t("ia5e7488", "Închide"),
                t("j681933e", "Listă privată"),
                t("add55942", "Ceva nu a mers bine. Reîncearcă într-un minut să te abonezi."),
                t("ib8f5f3c", "Ceva nu a mers bine. Reîncearcă într-un minut să te dezabonezi."),
                t("e20fc756", "Nu ai permisiunea să adaugi acest membru în această listă."),
                t("d8a032a2", "Va trebui să elimini o cronologie fixată înainte de a adăuga alta"),
                t("fa816a0a", "Reordonează lista"),
                t("ac832ae4", "Fixează lista"),
                t("cdb33880", "Anulează fixarea listei"),
                t("ca5d0a82", "Editează lista"),
                t("ec08efe4", function (e) {
                    return "" + e.formattedCount;
                }),
                t("h9f711f0", function (e) {
                    return "Urmăritor" + r(e.count, "i", "", "i");
                }),
                t("jceadc3e", "Fără titlu"),
                t("a1d5303c", "Privată"),
                t("cc8f8a80", "Nelistate"),
                t("c33a97d6", "Public"),
                t("i73fff1b", function (e) {
                    return "Afișează " + e.count + " post" + r(e.count, "ări", "are", "ări");
                }),
                t("a682906d", function (e) {
                    return e.count + " " + r(e.count, "(de) aprecieri", "apreciere", "(de) aprecieri") + " de primit";
                }),
                t("g566e973", function (e) {
                    return e.jobCount + " locuri de muncă vacante" + e.tcc_organization_open_job_count;
                }),
                t("ccc45ee7", function (e) {
                    return e.team + " a câștigat";
                }),
                t("f81a95d7", function (e) {
                    return "" + e.date;
                }),
                t("ed4bea2e", "Azi"),
                t("j3e0ae78", function (e) {
                    return "・" + e.formattedTime;
                }),
                t("cabfdd06", "Mâine"),
                t("abd0f804", function (e) {
                    return "・" + e.formattedTime;
                }),
                t("df45f564", "Adaugă altă postare"),
                t("i569ff3e", "Afișează acest fir"),
                t("je5502eb", function (e) {
                    return "Se includ rezultatele pentru „" + e.suggestion + "”";
                }),
                t("bc4628a1", function (e) {
                    return "Se afișează rezultatele pentru „" + e.suggestion + "”";
                }),
                t("a1979464", "Se încarcă videoclipul"),
                t("ic1e826e", "Redă"),
                t("c8b4bca0", "Cumpără"),
                t("f5ea07ec", "Cumpără acum"),
                t("b62956aa", "Rezervă"),
                t("i3ea806a", "Comandă"),
                t("fd00a76a", "Deschide"),
                t("e0aa5848", "Instalează"),
                t("g33f3050", "Web"),
                t("d3f6b1a6", "Trimite-ne un mesaj"),
                t("b0e322cc", "Trimite-ne un mesaj privat"),
                t("cb8bddc8", "Trimite-mi un mesaj privat"),
                t("cb8c547e", "Trimite un mesaj privat"),
                t("d980e29f", function (e) {
                    return "Începe pe " + e.date;
                }),
                t("fdd81500", "Carusel"),
                t("i0db46e6", "GIF"),
                t("faf745fa", "Nuditate"),
                t("e1b4e672", "Conținut sensibil"),
                t("acc48c15", function (e) {
                    return "Avertisment: " + e.formattedWarningList;
                }),
                t("a0e81a2e", "Afișează"),
                t("g034e6f1", function (e) {
                    return "Poți atașa până la " + e.count + " (de) postări la această raportare.";
                }),
                t("i2e0d584", "Postare promovată"),
                t("b52a940c", "Această postare este indisponibilă."),
                t("da59404c", "În prezent, vizualizezi cea mai recentă versiune."),
                t("e267df68", "Răspuns ascuns"),
                t("d5f162b6", "Reafișează acest răspuns oricând dorești. Te mai putem ajuta cu altceva?"),
                t("f376e9d4", "Feedback postare"),
                t("d7c93b6c", "Postare ascunsă"),
                t("b3abacee", "Vei vedea mai puține postări ca aceasta. Vrei să ne mai dai și alt feedback?"),
                t("a2411360", "Vezi un răspuns care îți place?"),
                t("e8a14626", "Acum poți fixa un răspuns la postarea ta folosind meniul de acțiuni − cele trei puncte mici din dreptul unei postări (...)."),
                t("d41305a8", "Bulă cu mesaj cu piuneză"),
                t("eca84b72", "Anulează repostarea"),
                t("g6185a9e", "Cine poate răspunde?"),
                t("i00051cc", "Alege cine poate răspunde la această postare. Orice persoană menționată poate răspunde oricând."),
                t("i9000126", "Conturi pe care le urmărești"),
                t("dcaede8a", "Doar conturile pe care le menționezi"),
                t("ad85cd2e", "Abonații tăi"),
                t("f19e4bfc", "Conturi verificate"),
                t("bf994ab2", "Doar tu"),
                t("e7b4b30a", "Doar conturile pe care le-ai menționat"),
                t("ca6500a8", "Dezactivează linkurile externe în răspunsuri"),
                t("c8a98928", "Imagine promoțională"),
                t("f5b3dc1e", "Poate mai târziu"),
                t("ae0c5fbe", "Eroare la schimbarea utilizatorilor care pot răspunde"),
                t("bae0cbc0", "Schimbă cine poate răspunde"),
                t("d78131b9", function (e) {
                    return "Adaugă/elimină @" + e.screenName + " din liste";
                }),
                t("b3b642fc", "De ce această postare?"),
                t("fb4ee11c", "De ce această reclamă?"),
                t("ad50e7d9", function (e) {
                    return "Vezi analiza " + e.entity;
                }),
                t("ef1042f8", "Scrie o notă în Notele Comunității"),
                t("h3edf7a6", "Cere o Notă a Comunității"),
                t("bf8d98f4", "Doar utilizatorii abonați pot răspunde"),
                t("e69ada9e", "Doar abonații Premium pot răspunde"),
                t("ae04c4dd", function (e) {
                    return "Ștergi " + e.entity + "?";
                }),
                t("d9442996", "Acțiunea nu poate fi anulată, iar acesta va fi eliminat din profilul tău, din cronologia tuturor conturilor care te urmăresc și din rezultatele de căutare."),
                t("dad785a7", function (e) {
                    return "Această acțiune va șterge toate versiunile acestei " + e.entity + " din profilul tău, din cronologia tuturor conturilor care te urmăresc și din rezultatele căutării. Acțiunea nu poate fi anulată.";
                }),
                t("jda253ab", function (e) {
                    return e.entity + " a fost șters";
                }),
                t("j49c2f85", function (e) {
                    return "Ceva nu a mers bine. Încearcă din nou să ștergi " + e.entity + " într-un minut.";
                }),
                t("f9fa0390", "Articolul tău va trece la starea schiță și poate fi șters de pe pagina Articole."),
                t("dad450ec", "Editează articolul"),
                t("g9677c6e", "Confirmă"),
                t("b57bfe70", "Editezi articolul?"),
                t("bd3da7be", "Publicarea articolului va fi anulată temporar pentru ca tu să poți edita articolul, iar acesta nu va fi vizibil publicului. Toate interacțiunile se vor păstra și vor fi transferate la republicarea versiunii actualizate."),
                t("j26481e6", "Publicarea articolului tău a fost anulată, iar articolul a fost mutat în schițe pentru a fi editat."),
                t("b360ac7c", "Navigare în secțiune"),
                t("adc81042", "Detalii secțiune"),
                t("bede965c", function (e) {
                    return "" + e.count;
                }),
                t("g345246c", "Acesta este un articol publicat, o modalitate nouă de a scrie pe X."),
                t("b14efa0a", "Imaginea de copertă a articolului"),
                t("afdccedb", function (e) {
                    return "Afișează " + e.displayCount + " " + r(e.count, "(de) răspunsuri", "răspuns", "(de) răspunsuri");
                }),
                t("bdba3e1a", "Activează notificările pentru postări"),
                t("c4da7d28", "Dezactivează notificările de postări"),
                t("j87c21f4", "Notifică"),
                t("iebc30ca", "Dezactivează notificările"),
                t("dc740eb2", "Vei vedea notificări despre postările de la acest cont în cronologia Notificări. De asemenea, poți activa notificările push pe dispozitiv, ca să nu mai ratezi nicio postare."),
                t("dca669ad", function (e) {
                    return "Repostările utilizatorului " + e.name + " nu îți vor mai apărea în cronologie";
                }),
                t("ce6da5d7", function (e) {
                    return "Repostările utilizatorului " + e.name + " îți vor apărea în cronologie";
                }),
                t("c6ea308b", function (e) {
                    return e.fullName + " (@" + e.screenName + ")";
                }),
                t("a1fef729", function (e) {
                    return "Vezi conținutul de la " + e.fullName + " pe X.\n" + e.bio;
                }),
                t("c32a3d03", function (e) {
                    return "@" + e.screenName + " nu te mai urmărește";
                }),
                t("j7bb1a43", function (e) {
                    return "Raportează utilizatorul @" + e.screenName;
                }),
                t("hef5960c", "Distribuie profilul prin…"),
                t("bb1cbeb6", "Nu mai ignora"),
                t("h2f62206", "Se ignoră utilizatorul"),
                t("e67b2d65", function (e) {
                    return "Ignoră pe @" + e.screenName;
                }),
                t("f05597b3", function (e) {
                    return "Nu mai ignora pe @" + e.screenName;
                }),
                t("h59f52ee", "Ignorat cu succes."),
                t("eea0cbee", "Ignorare anulată cu succes."),
                t("i29533b3", function (e) {
                    return "@" + e.screenName + " a fost ignorat.";
                }),
                t("h129c3c3", function (e) {
                    return "S-a anulat ignorarea pentru @" + e.screenName + ".";
                }),
                t("b3036480", "Elimină acest utilizator"),
                t("h27b7407", function (e) {
                    return "@" + e.screenName + " va fi eliminat din grupul tău de urmăritori și nu va fi informat de X. Te va putea urmări din nou pe viitor.";
                }),
                t("ibd0b842", "Copiază linkul în profil"),
                t("b9c26480", "Vezi subiectele"),
                t("e922ce0c", "Activează repostările"),
                t("ge54bb8c", "Dezactivează repostările"),
                t("h5ef9bc8", "Vezi listele"),
                t("e9eef4c6", "Raportează conținut ilegal în UE"),
                t("e28ba0bb", function (e) {
                    return "Raportează pe @" + e.screenName + " pentru conținut ilegal în UE";
                }),
                t("a30b63da", "Ceva nu a mers bine. Încearcă să elimini din nou urmăritorul într-un minut."),
                t("gd11f228", "(necesită un titlu)"),
                t("ced3c85a", "Editat"),
                t("b375ece0", "Doar tu poți vedea acest articol nepublicat."),
                t("edf9101f", "Continuă să citești"),
                t("icf7f1a4", "Copiază pe clipboard"),
                t("e1a292ec", "Adaugă conținut media"),
                t("ebfd8ac6", "Inserează"),
                t("ia3611ee", "Începe să scrii"),
                t("d794135c", "Alege un fișier sau glisează-l aici.\n\nFiecare bloc poate include un GIF, un videoclip sau un grup de fotografii (până la 4 fotografii per grup)."),
                t("e187f906", "GIF-uri"),
                t("fa4e68ca", "Postări"),
                t("c80940f4", "Cod Markdown"),
                t("cfeb3f86", "Cod"),
                t("ad9e175c", "LaTeX"),
                t("c62a27e6", "Apreciat"),
                t("g88b88a6", "Marcat"),
                t("i282583e", "Nu se pot utiliza postări de la conturile protejate"),
                t("eae4fe7a", "Nu se pot utiliza citate dintr-o postare ștearsă"),
                t("d2042fb6", "Postări apreciate"),
                t("iad3e15c", "Postări adăugate la Marcaje"),
                t("f1c63c34", "Lipește URL-ul postării"),
                t("a78f6310", "URL nevalid al postării"),
                t("fe9ddab6", "Postarea nu a fost găsită"),
                t("dd2c9034", "Salvează postări pentru mai târziu"),
                t("cada17f8", "Adaugă postări la Marcaje pentru a le găsi cu ușurință și pe viitor."),
                t("j0179e90", "Compune o postare"),
                t("adad5408", "Folder nou"),
                t("f44ddd2e", "Adaugă postări la Marcaje pentru a le salva pentru mai târziu"),
                t("c91d2c4c", "Ai nevoie de timp suplimentar pentru a scrie un răspuns deștept sau doar vrei să salvezi o postare pentru mai târziu? Adaug-o la Marcaje!"),
                t("j45c642e", "Folderele nu se încarcă momentan"),
                t("b87ca51a", "Elimină fotografia"),
                t("eebff22c", "Trunchiază fotografia"),
                t("hf6f2914", "Previzualizează"),
                t("be4a00c2", "Adaugă codul aici"),
                t("i3128619", function (e) {
                    return "Blocurile nu pot avea mai mult de " + e.count + " caractere";
                }),
                t("dbb02ec4", "Selectează limbajul de programare"),
                t("d942865e", "Caută un limbaj de programare"),
                t("e554f642", "Renunți la modificări?"),
                t("fa524058", "Menține"),
                t("d4ab68e2", "Îndepărtează"),
                t("a50ba822", "Caută GIF-uri"),
                t("c6f5ac52", "Categorii - Căutare fișiere GIF"),
                t("ab468379", function (e) {
                    return e.query + " - Căutare fișiere GIF";
                }),
                t("j7fc4f9c", "Redă automat fișiere GIF"),
                t("a66b7760", "GIF fără etichetă"),
                t("a723aefa", "Nu s-au găsit fișiere GIF"),
                t("a6ecfa0a", "În schimb, încearcă să cauți altceva."),
                t("f5ff0d6f", function (e) {
                    return e.category + " - Căutare fișiere GIF";
                }),
                t("effe1ca6", "Adaugă expresia LaTeX aici"),
                t("c46c3c62", "Expresia ta conținea o eroare. Remediaz-o și încearcă din nou."),
                t("d4a4842e", "Adaugă emoji"),
                t("fec16c1c", "Emoticoni"),
                t("idc01eb8", "Aldin"),
                t("cd7c97c6", "Cursiv"),
                t("dab932be", "Subliniere"),
                t("c5b6178a", "Tăiere"),
                t("c03d7fd6", "Inserează un link"),
                t("abfe2d36", "Listă cu marcatori"),
                t("da685a7c", "Listă cu numere"),
                t("g74d920c", "Citat formatat ca bloc"),
                t("cda501c6", "Mărește dimensiunea textului"),
                t("a54fdc46", "Micșorează dimensiunea textului"),
                t("b340830e", "Comenzi rapide în text"),
                t("c1ea915e", "Introdu la începutul unui nou rând sau bloc, urmat de un spațiu"),
                t("e8a4ef02", "Titlu"),
                t("dd71241a", "Subtitlu"),
                t("ja9ca202", "Comenzi rapide articol"),
                t("ef1649e2", "X - Comenzi rapide de la tastatură"),
                t("aefd89c8", "Navigare"),
                t("cafdefb2", "Acțiuni"),
                t("dda42cf2", "Coloane și seturi"),
                t("e8a12604", "Furnizează o subtitrare (opțional)"),
                t("eabf2209", function (e) {
                    return "GIF oferit de " + e.providerName;
                }),
                t("a613e720", "Copiază linkul fișierului GIF"),
                t("aeca1239", function (e) {
                    return "Aldin" + e.ttc_rich_text_composer;
                }),
                t("i7dc66dd", function (e) {
                    return "Cursiv" + e.ttc_rich_text_composer;
                }),
                t("ad89b831", function (e) {
                    return "activ" + e.ttc_rich_text_composer;
                }),
                t("jcd5ee8a", "Editează blocul"),
                t("a8f09fb8", "Șterge blocul"),
                t("i89195ea", "Separator"),
                t("da8ac57c", "Editează legenda"),
                t("a8fdd09c", "Publică articolul"),
                t("d8047cc8", "Publică"),
                t("ff7ddca2", "După publicare, articolul va apărea ca postare. Îl vei găsi și în fila Articole de pe profilul tău.");
            t("ef34d7be", "Publicul și controalele asupra răspunsurilor nu se pot edita după publicarea articolului."),
                t("e52d4998", "Alege-ți publicul"),
                t("d7985b24", "Alege cine poate răspunde la acest articol"),
                t("b5660338", "Previzualizare Cronologie"),
                t("hff1b97a", "Doar utilizatorii abonați pot răspunde."),
                t("a330771e", "Copiază linkul pe clipboard"),
                t("b6510e68", "Copiază URL-ul articolului pentru a-l putea distribui."),
                t("e4a6e006", "Ceva nu a mers bine. Încearcă din nou."),
                t("eff483e0", "După publicare, obține un link pentru a distribui articolul."),
                t("ca15dd4e", "Schiță"),
                t("bb40bf66", "Publicate"),
                t("h107935c", "Salvată ultima dată chiar acum"),
                t("a753a870", "Aplică"),
                t("afccc67e", "Copiază linkul către articol"),
                t("beb24e9e", "URL copiat pe clipboard"),
                t("db9cc928", "Ștergi articolul?"),
                t("c4e28ba6", "Această acțiune nu poate fi anulată și îți vei pierde articolul."),
                t("ff2982d0", "Articolul tău va fi șters. Acțiunea nu poate fi anulată, iar acesta va fi eliminat din profilul tău, din cronologia tuturor conturilor care te urmăresc și din rezultatele de căutare."),
                t("ca17beec", "Articolul tău a fost șters"),
                t("f5cbb31c", "Șterge articolul"),
                t("f0977f52", "Da, șterge"),
                t("db419d4c", "Previzualizează schița"),
                t("a1bc8e6c", "Vizualizează articolul"),
                t("b6f72a22", "Publicarea articolului tău va fi anulată, articolul va fi mutat la schițe și nu va mai fi vizibil publicului."),
                t("f558d2e0", "Anulează, mută la schițe"),
                t("e9473589", function (e) {
                    return "" + e.articleTitle;
                }),
                t("ib067d6a", "Alege 1 GIF sau cel mult 4 fotografii."),
                t("eb7ab862", "Selectează maximum 4 fotografii, clipuri video sau GIF-uri."),
                t("ce9a9736", "Se salvează..."),
                t("dd63549e", "Succes! Articolul tău a fost publicat"),
                t("a4d128bc", "Succes! Articolul tău a fost publicat și linkul a fost copiat pe clipboard"),
                t("b4071e18", "Titlu articol"),
                t("f586b7fa", "Adaugă un titlu"),
                t("ab0fa9ba", "Pentru a edita, revino la schițe"),
                t("c5f35c98", "Conținut media în curs de încărcare..."),
                t("d739d83e", "Anulează încărcarea"),
                t("a94efeda", "Se salvează conținutul media..."),
                t("gd79d45a", "Concentrează-te asupra scrisului activând modul de focalizare"),
                t("g1866bb2", "Ieși din modul de focalizare și revino la editorul obișnuit"),
                t("a6a78df4", "Înainte de a-l publica, articolul tău are nevoie de un titlu și de conținut."),
                t("ia656f1c", "Articolul are un titlu, însă, înainte de a-l publica, trebuie să aibă un conținut."),
                t("d3855e36", "Înainte de a-l publica, articolul tău are nevoie de un titlu."),
                t("f325958e", "Titlul depășește limita de caractere. Scurtează-l, apoi publică articolul."),
                t("ie5d9064", "Articolul tău depășește limita de caractere. Scurtează textul corpului, apoi publică articolul."),
                t("e03487a0", "Titlul depășește limita de caractere, iar articolul tău este peste limita de cuvinte. Scurtează-le pe ambele, apoi publică articolul."),
                t("e938d562", "Titlul depășește limita de caractere. Scurtează titlul, adaugă ceva în corpul de text, apoi publică articolul."),
                t("e449c546", "Articolul tău necesită un titlu. În plus, articolul depășește numărul de cuvinte. Adaugă un titlu, scurtează textul corpului și apoi publică articolul."),
                t("bd00e836", "Cea mai recentă schiță nu este salvată deoarece depășește limita de caractere."),
                t("ic110f68", "Cea mai recentă schiță nu va fi salvată deoarece este prea lungă."),
                t("ifea3114", "Distribuie"),
                t("b384f696", "Recomandăm un titlu care să conțină între 50 și 70 de caractere"),
                t("a7da0adb", function (e) {
                    return e.count + " " + r(e.count, "(de) cuvinte", "cuvânt", "(de) cuvinte");
                }),
                t("aea1d455", function (e) {
                    return e.count + " " + r(e.count, "minute", "minut", "de minute");
                }),
                t("df898d71", function (e) {
                    return "Timp de lectură de " + e.readingTimeValue;
                }),
                t("i9aadf4a", "Este posibil ca linkul să fie incorect. Fă clic pe unul dintre articolele din bara laterală din stânga pentru a citi, edita sau publica un articol."),
                t("hfdce46e", "Publicarea articolului tău a fost anulată"),
                t("df079228", "Modul de focalizare"),
                t("f5037228", "Pentru rezultate optime, recomandăm o imagine cu un raport de aspect de 5:2."),
                t("f965e890", "Schițele tale sunt aici"),
                t("c2756718", "Articolele tale publicate sunt aici"),
                t("af65c854", "Editează în modul de focalizare"),
                t("e05e2336", "Anulează publicarea, mută articolul la schițe"),
                t("d36447e0", "Acesta este spațiul pentru scriere"),
                t("ca0ed982", "Continuă o schiță sau creează un nou articol"),
                t("ee9e42aa", "Scrie"),
                t("e9a50596", "A survenit o eroare la crearea unei noi schițe"),
                t("e070024a", "Editează fotografia"),
                t("i7d24b36", "Imaginea următoare"),
                t("f96a38a2", "Imaginea anterioară"),
                t("hac7c548", "Trunchiază conținutul media"),
                t("e3dbfba4", "Editează descrierea imaginii"),
                t("dd4a83a6", "Avertisment de conținut"),
                t("ffe9ec3a", "Adaugă descrieri"),
                t("j063b262", "Poți adăuga o descriere, denumită uneori text alternativ, la fotografiile tale, astfel încât să fie accesibile și mai multor persoane, chiar și celor nevăzătoare sau cu vedere scăzută. Descrierile bune sunt concise și prezintă conținutul fotografiilor suficient de clar încât să se înțeleagă contextul lor."),
                t("e57144f0", "Desigur"),
                t("f9f9210c", "Nu, mulțumesc"),
                t("feabf2a0", "Text alternativ"),
                t("e36287c6", "Descriere"),
                t("cf565d08", "Ce este textul alternativ?"),
                t("d9f7b32a", "Pune un avertisment de conținut pe această postare"),
                t("ead1b80a", "Selectează o categorie și vom pune un avertisment de conținut pe această postare. Astfel, ajuți utilizatorii să evite conținutul pe care nu doresc să-l vadă."),
                t("h2437f26", "Sensibil"),
                t("g5e1668a", "Disponibil pentru descărcare"),
                t("fdc6a52a", "Atunci când această opțiune este activată, videoclipul tău va fi disponibil pentru descărcare."),
                t("fe09fde2", "Modifică setările"),
                t("cd5cba97", function (e) {
                    return "Avertizare conținut: " + e.formattedWarningList;
                }),
                t("h7215a76", "Autorul postării a marcat această postare pe motiv că afișează conținut sensibil."),
                t("j32d345e", "Următorul element ar putea include conținut sensibil"),
                t("f1d9930c", "Ascunde"),
                t("c91f83ae", "Editează videoclipul"),
                t("icbec4ae", "Încărcă subtitrări"),
                t("e0342f98", "Subtitrări"),
                t("e7048e74", "Ajustează conținutul media"),
                t("ga408160", "Videoclipul următor"),
                t("dc402134", "Videoclipul anterior"),
                t("bf4e9d7a", "Încarcă fișierul cu subtitrări (.srt)"),
                t("j435467e", "Subtitrările pot fi adăugate la videoclipul tău încărcând un fișier de subtitrare valid. Fișierele trebuie să fie în format SRT. Subtitrările nu vor fi afectate de modificările videoclipului."),
                t("a6b267fa", "Elimină subtitrările"),
                t("a609edbe", "Compune o nouă postare"),
                t("dc295bb0", "Postarea într-o Comunitate"),
                t("e536de22", "Pentru a posta, trebuie ca mai întâi să fii membru. Alătură-te acestei comunități pentru a participa!"),
                t("cb817dae", "Editează postarea"),
                t("bec9cff8", "Înregistrează-te la X"),
                t("c150ba68", "Bun venit!"),
                t("f8e2163e", "Dorești să te conectezi mai întâi?"),
                t("a108c147", function (e) {
                    return "Vrei să urmărești utilizatorul @" + e.screenName + "?";
                }),
                t("c66afdc3", function (e) {
                    return "Urmărește pe @" + e.screenName;
                }),
                t("feccfd6e", "Pentru a putea urmări persoane, va trebui să te conectezi."),
                t("dedce756", "Poți aprecia acum acestă postare."),
                t("ha5987e0", "Vrei să apreciezi această postare?"),
                t("f98f4e00", "Pentru a aprecia acea postare, va trebui să te conectezi."),
                t("b459ba4c", "Pentru a răspunde la această postare, va trebui să te conectezi."),
                t("f3e1093a", "Poți reposta acum acest lucru."),
                t("i1d8723c", "Vrei să repostezi această postare?"),
                t("h19f38de", "Pentru a posta acest lucru, va trebui să te conectezi."),
                t("e289d950", "Pentru a distribui această postare, va trebui să te conectezi."),
                t("d28215f0", "Ne pare rău, sondajele nu sunt permise în Comunități!"),
                t("ec2fc089", function (e) {
                    return "post" + r(e.numOfTweets, "ările au", "area a", "ările au") + " fost trimisă/trimise la " + e.communityName;
                }),
                t("c7152355", function (e) {
                    return "Nu uita să faci accesibilă/accesibile cele " + r(e.numberOfImages, "(de) imagini ale tale", "imagine a ta", "(de) imagini ale tale");
                }),
                t("ffa5562a", "Descrierile la imagini bune sunt concise, dar detaliate. Asigură-te că ai rezumat sau ai adăugat text la imaginea propriu-zisă."),
                t("a2d3facd", function (e) {
                    return r(e.numberOfImages, "(de) identificatori descriptivi ai tăi", "identificator descriptiv al tău", "(de) identificatori descriptivi ai tăi") + " pe X este/sunt accesibil(i) persoanelor cu dizabilități, precum și tuturor celor care doresc mai mult context.";
                }),
                t("cc6d0a48", "Poți dezactiva acest memento în Setări de accesibilitate."),
                t("j499fbcb", function (e) {
                    return "Adaugă de" + r(e.numberOfImages, "scrieri", "scriere", " descrieri");
                }),
                t("bb8170da", "Mai târziu"),
                t("h4dd544e", "Postarea a fost trimisă."),
                t("ice925ce", "Postarea ta a fost editată."),
                t("eae9e604", "Postarea a fost trimisă. Ai la dispoziție 30 de minute pentru a o edita."),
                t("gcdf3fd6", "Postarea a fost trimisă. Ai la dispoziție 1 oră pentru a o edita."),
                t("c7999d10", "Postările au fost trimise."),
                t("b97f5eb2", "Se trimite postarea..."),
                t("g08523f0", "Se trimite postarea... după ce este publicată, ai la dispoziție 30 de minute pentru a o edita."),
                t("fa53f95c", "Se trimite postarea... după ce este publicată, ai la dispoziție 1 oră pentru a o edita."),
                t("a608b1b4", "Renunți la postare?"),
                t("j890123a", "Îndepărtezi firul?"),
                t("af4d0a80", "Renunți la editările făcute?"),
                t("bb01231c", "Această acțiune nu poate fi anulată și îți vei pierde schița."),
                t("if69307c", "Dacă pleci, modificările tale nu vor fi salvate."),
                t("d2c271f6", "Salvezi postarea?"),
                t("abb90544", "Poți salva în schițe și trimite mai târziu."),
                t("d3bb6f30", "Notă: conturile etichetate în conținutul media nu vor fi salvate în schiță."),
                t("bf9b89e4", "Schița ta a fost salvată."),
                t("i63bfbf0", "Păstrează-ți ideea"),
                t("a6c55352", "Videoclipul tău este încă în curs de încărcare. Sigur renunți la postare? Schița și atașamentele se vor pierde."),
                t("c3d89aca", "Continuă"),
                t("b983f9e0", "Atenție"),
                t("ed5c4342", "Câteva lucruri de reținut..."),
                t("abc4afcc", "Perioada de editare a expirat"),
                t("a9a471fa", "Postările pot fi editate doar în primele 30 de minute de la publicare."),
                t("a3483f1c", "Postările pot fi editate doar în prima oră de la publicare."),
                t("g4bcc5f4", "Aceasta este ultima editare"),
                t("g922bf14", "Postarea nu poate fi actualizată din nou."),
                t("f58b5009", function (e) {
                    return "Postarea va fi trimisă pe " + e.scheduleDate + " la " + e.scheduleTime;
                }),
                t("fa97f508", "Poți să adaugi mai multe postări la acest fir după ce le trimiți pe acestea."),
                t("c091760c", "Această editare nu a fost salvată. Poți încerca din nou actualizarea sau poți să renunți la ea și să începi din nou."),
                t("d38504ad", function (e) {
                    return "Selectează maximum " + e.maxMediaCap + " fotografii, clipuri video sau GIF-uri.";
                }),
                t("dd6734c2", "Citește mai mult"),
                t("g589c2e2", "Opțiunea 1"),
                t("a1e6c3a2", "Opțiunea 2"),
                t("a739e006", "Opțiunea 3 (opțional)"),
                t("d89a5b92", "Opțiunea 4 (opțional)"),
                t("c2a8118e", "Elimină sondajul"),
                t("a8ede1de", "Adaugă o opțiune"),
                t("af40a8e0", "Adaugă"),
                t("caf8edc4", "Durata sondajului"),
                t("g93586be", "Zile"),
                t("d073b644", "Ore"),
                t("a2f0728e", "Minute"),
                t("c9f5ae0a", "Salvat în schițe"),
                t("f0afcc0e", "Adaugă sondajul"),
                t("d39e3e78", "Planifică postarea"),
                t("f6bab0da", "Text postare"),
                t("cc2b28fc", "Poți avea un singur tip de atașare"),
                t("i6f7062c", "Adaugă o postare"),
                t("j1d5791c", "Adaugă răspuns"),
                t("e76f3776", "Elimină postarea"),
                t("ec10ee02", "Sondaj"),
                t("cce30dcc", "Etichetează locația"),
                t("ee016dd6", "Va dura puțin pentru a efectua încărcarea de videoclipuri lungi. Asigură-te că ții deschisă fila de browser pentru a evita întreruperi ale încărcării."),
                t("b7d8e3f1", function (e) {
                    return e.numberOfAltTextEntries + " imagine de" + r(e.numberOfAltTextEntries, "scrieri", "scriere", " descrieri");
                }),
                t("d1175c78", "Etichetează persoane"),
                t("b2943227", function (e) {
                    return "Încarcă fișier" + r(e.numberOfVideos, "e", "", "e") + " cu subtitrări (.srt)";
                }),
                t("d0afbb37", function (e) {
                    return e.numberOfSubtitles + " fișier" + r(e.numberOfSubtitles, "e", "", "e") + " cu subtitrări";
                }),
                t("e349147c", "Ce se întâmplă?"),
                t("b4481d6c", "Spune ce crezi..."),
                t("fbd24526", "Adaugă încă un răspuns"),
                t("de4669e2", "Adaugă un comentariu"),
                t("ed1f39ec", "Postează-ți răspunsul"),
                t("a402b908", "Adresează o întrebare"),
                t("ic05a146", "Titlu"),
                t("d9c096f0", "Generează imagine"),
                t("d2553906", "Îmbunătățește postarea"),
                t("b85f402a", "Îmbunătățește-ți postarea cu Grok"),
                t("e815fc34", "Alege publicul"),
                t("cf44066a", "Cerc"),
                t("c6992b94", "Exclusiv Premium"),
                t("a5f7b700", function (e) {
                    return "" + e.formattedCount;
                }),
                t("a7daec1e", function (e) {
                    return "Persoan" + r(e.count, "e", "ă", "e");
                }),
                t("f0598964", "Vrei să distribui către un public mai mic?"),
                t("e1ae1c0a", "Cercul îți permite să trimiți postări doar persoanelor selectate de tine."),
                t("eb969e30", "Cum funcționează Cercul"),
                t("bb55e8ee", "Adaugă persoanele pe care le dorești"),
                t("f1aedb7c", "Poți alege până la 150 de utilizatori pe care să îi incluzi în Cercul tău."),
                t("b659fba8", "Postează numai pentru ei"),
                t("c474be66", "Continuă − distribuie-ți gândurile. Doar Cercul tău le poate vedea și poate răspunde la ele."),
                t("h031847a", "Poți face modificări oricând"),
                t("bd9db21f", "Află mai multe"),
                t("gfca5254", "Reguli"),
                t("f510c8b2", "Reguli ale Comunității"),
                t("g46f363e", "Verifică regulile Comunității înainte de a te alătura conversației"),
                t("f6fec9f6", "Elimină previzualizarea cardului"),
                t("b2df0574", "Distribuie și urmăritorilor"),
                t("ccfc7453", function (e) {
                    return "Toate persoanele din Cercul utilizatorului " + e.screenName + " care te urmăresc pot răspunde";
                }),
                t("d4d17205", function (e) {
                    return "Toate persoanele din Cercul utilizatorului @" + e.screenName + " pot răspunde";
                }),
                t("df961844", "Doar persoanele din Cercul tău care te urmăresc pot răspunde"),
                t("ce958ec8", "Doar Cercul tău poate răspunde"),
                t("c7df589e", "Toate persoanele din Cercul autorului postării, care te urmăresc, pot răspunde"),
                t("j65d7c72", "Toate persoanele din Cercul autorului postării pot răspunde"),
                t("i8ea6d4e", "Toți pot răspunde"),
                t("a176d0d8", "Conturile pe care le urmărești pot răspunde"),
                t("gc7e52ca", "Doar conturile pe care le menționezi pot răspunde"),
                t("feb7560a", "Doar Abonații pot răspunde"),
                t("h257006e", "Examinează regulile acestei Comunități"),
                t("ebe1d850", "Doar Abonații tăi pot răspunde"),
                t("b121464a", "Doar conturile verificate pot răspunde"),
                t("aa65a44a", "Vom reține alegerea ta pe acest dispozitiv"),
                t("a4993fa2", "Adaugă un GIF"),
                t("bfb895b1", function (e) {
                    return "Vom trimite pe " + e.date + " la " + e.time;
                }),
                t("hb36f723", function (e) {
                    return "Doar primele " + e.count + " caractere vor fi vizibile în cronologie.";
                }),
                t("d759c09e", "Încearcă"),
                t("e4472565", function (e) {
                    return "S-a încărcat (" + e.percent + "%)";
                }),
                t("a06fa8fd", function (e) {
                    return "Se procesează (" + e.percent + "%)";
                }),
                t("h7f340e5", function (e) {
                    return "Se încarcă (" + e.percent + "%)";
                }),
                t("daad8822", "Încărcarea a eșuat"),
                t("i8ff6261", function (e) {
                    return "Se pare că acest clip video depășește dimensiunea maximă a unui fișier care poate fi încărcat (" + e.human_readable_max_size + " GB).";
                }),
                t("cba4fdde", "Oferă spectatorilor de pe X conținut cu rezoluția de 1080p"),
                t("ef8f5d90", "Recomandat"),
                t("a7046fb0", "Rareori necesar"),
                t("acf3ecf4", "Adaugă conținut media"),
                t("bdbcdd94", "Adaugă poze"),
                t("f2c8c04d", "îți faci postările publice"),
                t("b50e199a", function (e) {
                    return "" + e.userName;
                }),
                t("c3033e8a", function (e) {
                    return e.replyUserName + " și " + e.otherUserName;
                }),
                t("e50dae2a", function (e) {
                    return e.userOneName + " " + e.userTwoName + " și " + e.userThreeName;
                }),
                t("h758cd23", function (e) {
                    return e.userOneName + " " + e.userTwoName + " și încă " + r(e.othersCount, "" + e.othersCount, "1", "" + e.othersCount);
                }),
                t("fba61ad6", function (e) {
                    return "" + e.userName;
                }),
                t("ce87c872", function (e) {
                    return e.replyUserName + " și " + e.otherUserName;
                }),
                t("b45fa506", function (e) {
                    return e.userOneName + " " + e.userTwoName + " și " + e.userThreeName;
                }),
                t("b8168f25", function (e) {
                    return e.userOneName + " " + e.userTwoName + " și " + r(e.othersCount, "altor " + e.othersCount + " utilizatori", "încă 1", "altor " + e.othersCount + " utilizatori");
                }),
                t("ab67a7ac", function (e) {
                    return "" + e.userName;
                }),
                t("g571ef41", "Abonaților"),
                t("d48d6476", function (e) {
                    return e.replyUserName + " și " + e.otherUserName;
                }),
                t("i9451241", "Abonaților"),
                t("hdf48104", function (e) {
                    return e.userOneName + " " + e.userTwoName + " și " + e.userThreeName;
                }),
                t("dcbb6a0b", "Abonaților"),
                t("ba74e38b", function (e) {
                    return e.userOneName + " " + e.userTwoName + " și " + r(e.othersCount, "altor " + e.othersCount + " utilizatori", "încă unui utilizator", "altor " + e.othersCount + " utilizatori");
                }),
                t("c65916af", "Abonaților"),
                t("g5c5ebb8", function (e) {
                    return "" + e.userName;
                }),
                t("b86ff336", function (e) {
                    return "" + e.userName;
                }),
                t("e0af5609", function (e) {
                    return e.userOneName + " and " + e.userTwoName;
                }),
                t("ae834d19", function (e) {
                    return e.trustedFriendsTweetOwner + "’s";
                }),
                t("g3d6f043", function (e) {
                    return e.userOneName + " and " + e.userTwoName;
                }),
                t("ade845a5", function (e) {
                    return e.trustedFriendsTweetOwner + "’s";
                }),
                t("ef5386dc", function (e) {
                    return e.userOneName + " " + e.userTwoName + " and " + e.userThreeName;
                }),
                t("acd17e4b", function (e) {
                    return e.trustedFriendsTweetOwner + "’s";
                }),
                t("g1ee3d90", function (e) {
                    return e.userOneName + " " + e.userTwoName + " and " + e.userThreeName;
                }),
                t("f6da070f", function (e) {
                    return e.trustedFriendsTweetOwner + "’s";
                }),
                t("a035ba65", function (e) {
                    return e.userOneName + " " + e.userTwoName + " and " + n(e.othersCount, "1 other", e.othersCount + " others");
                }),
                t("e4c52c45", function (e) {
                    return e.trustedFriendsTweetOwner + "’s";
                }),
                t("baf2c639", function (e) {
                    return e.userOneName + " " + e.userTwoName + " and " + n(e.othersCount, "1 other", e.othersCount + " others");
                }),
                t("j8e134e5", function (e) {
                    return e.trustedFriendsTweetOwner + "’s";
                }),
                t("c14cdb18", "Promovează"),
                t("f11264ac", "Adaugă o metodă de plată"),
                t("j619ec94", "Promovează postarea"),
                t("h1fcb36c", "Promovează-ți postarea"),
                t("fd22cfe0", "Termenii și condițiile privind reclamele."),
                t("i3656b52", "Cât vrei să cheltui?"),
                t("h7c29de6", "Acoperire estimată"),
                t("hd435bf1", function (e) {
                    return e.audienceLow + " - " + e.audienceHigh + " de persoane";
                }),
                t("i976aff4", "Actualizează informațiile despre bugetul zilnic astfel încât să corespundă monedei de facturare."),
                t("e1e912f2", "Postarea ta a fost postată, dar nu am putut să îi dăm boost. Nu vei fi taxat(ă)."),
                t("fe26420a", "Adăugare cuvinte cheie"),
                t("aacfbe55", function (e) {
                    return "Postezi pentru @" + e.screenName + ".";
                }),
                t("ga8627cd", function (e) {
                    return "Răspunzi de pe contul @" + e.screenName + ".";
                }),
                t("e6d2573f", function (e) {
                    return "Trimiți mesaj de pe contul @" + e.screenName + ".";
                }),
                t("d37a3e15", function (e) {
                    return "Creezi această Listă de pe contul @" + e.screenName + ".";
                }),
                t("ceb1ad26", "Îți prezentăm Videoclipurile descărcabile"),
                t("ea97bc08", "Treci în modul offline sau remixează! Utilizatorii Premium au acum posibilitatea de a descărca și reinventa conținutul tău. Dacă dorești ca videoclipurile tale să nu poată fi descărcate, atinge „Editare” pe videoclipul tău. Conținutul tău, regulile tale."),
                t("e6042757", function (e) {
                    return "Mai ai " + e.minutes + " " + r(e.minutes, "minute", "minut", "de minute") + " și " + e.seconds + " " + r(e.seconds, "secunde", "secundă", "de secunde") + " pentru a edita postarea";
                }),
                t("a4e39717", function (e) {
                    return "Mai ai " + e.minutes + " " + r(e.minutes, "minute", "minut", "de minute") + " pentru a edita postarea";
                }),
                t("c55eed72", "Răspuns către"),
                t("caca3102", "Alte persoane din această conversație"),
                t("c6a6dc2f", function (e) {
                    return "Ai blocat pe @" + e.screenName + ", deci nu va primi notificări atunci când răspunzi.";
                }),
                t("f5b426c2", "Se încarcă utilizatorii"),
                t("c20dc654", "Poți eticheta maximum 10 persoane"),
                t("ae0831ab", function (e) {
                    return "Utilizatorul @" + e.screenName + " nu poate fi etichetat în fotografii";
                }),
                t("cca7fa72", "Postările planificate nu au putut fi șterse."),
                t("c5dd0190", "Ora"),
                t("edeff232", "Data"),
                t("fddf24b4", "Fus orar"),
                t("d39dc06e", "Nu poți să planifici ca o postare să fie publicată în trecut."),
                t("d024efe2", "Nu poți să planifici ca o postare să fie publicată la o dată ce depășește 18 luni în viitor"),
                t("d15af6da", "Unele postări netrimise nu au putut fi șterse."),
                t("a1e1b748", "Postările netrimise pe care le-ai selectat au fost șterse."),
                t("ce80fba0", "Se încarcă postările netrimise"),
                t("i5d56b62", "Încă nu ești pregătit(ă) să postezi? Salvează postarea în schițele tale sau planifică-o pentru mai târziu."),
                t("aef6257e", "Se șterg postările netrimise"),
                t("dce0bc34", "Postări netrimise"),
                t("f8464692", "Programat"),
                t("e8bd47f2", "Selectează tot"),
                t("j2b145d4", "Deselectează tot"),
                t("h6c79ac2", "Îndepărtează postările netrimise"),
                t("d0a4a03c", "Această acțiune nu poate fi anulată și îți vei pierde postările netrimise."),
                t("f9f69d32", "Nu s-a trimis"),
                t("j74e5dd4", "Postarea la care încerci să răspunzi a fost ștearsă"),
                t("c5ceafc8", "Răspuns"),
                t("f501ba43", function (e) {
                    return "încă " + e.count + " post" + r(e.count, "ări", "are", "ări");
                }),
                t("b321d0cc", "Încarcă imagini"),
                t("abd649ce", "Renunță la postările netrimise"),
                t("c7d42978", "Această acțiune nu poate fi anulată și îți vei pierde postarea schiță."),
                t("e43a5528", "Ceva nu a mers bine și postarea netrimisă nu a fost ștearsă."),
                t("e7c766ee", "Serviciile de localizare sunt dezactivate"),
                t("ab68727a", "Le poți activa în setările dispozitivului tău."),
                t("ae4057a2", "Locația nu poate fi determinată"),
                t("bf2923a6", "Verifică setările dispozitivului tău."),
                t("d963d1b6", "Nu s-au găsit locuri"),
                t("a893d602", "OK"),
                t("be6cc44e", "Caută locații"),
                t("d8ef3232", "Nu s-au putut prelua locațiile"),
                t("b01ed2db", function (e) {
                    return e.distance + " mi";
                }),
                t("i83e29e1", function (e) {
                    return e.distance + " ft";
                }),
                t("d4b7cff7", function (e) {
                    return e.distance + " km";
                }),
                t("b211849f", function (e) {
                    return e.distance + " m";
                }),
                t("fd391b9f", function (e) {
                    return "Încorporează " + e.entity;
                }),
                t("e1618e49", function (e) {
                    return "Ai urmărit pe @" + e.screenName;
                }),
                t("ge5067bc", "Ascunde răspunsul"),
                t("j136c720", "Răspunsul a fost ascuns în postare"),
                t("d66f0338", "Se ascund răspunsurile la postările tale"),
                t("cfc8cb50", "Pentru ca tu să ai mai mult control asupra conversațiilor pe care le inițiezi, autorii postărilor pot ascunde răspunsurile la postările lor."),
                t("if8dc5f0", "Răspunsurile ascunse sunt mutate pe o pagină separată și pot fi văzute de orice utilizator, prin selectarea pictogramei de răspuns ascuns din postare."),
                t("b2615c6d", function (e) {
                    return "Blochezi și utilizatorul @" + e.screenName + "?";
                }),
                t("i62a03aa", "Nu"),
                t("f9f27fa2", "Ascunde postarea"),
                t("ce87916a", "Adaugă/elimină din Evidențieri"),
                t("eaae42ce", "Adaugi la Evidențieri?"),
                t("h032d096", "Elimini din Evidențieri?"),
                t("be38d25e", "Această postare va apărea în fila Evidențieri de pe profilul tău."),
                t("d2be9310", "Această postare va fi eliminată din fila Evidențieri de pe profilul tău."),
                t("jea6b076", "Adăugat cu succes la Evidențieri."),
                t("ce6fd0ec", "Eliminat cu succes din Evidențieri."),
                t("ha35a1d2", "Fixează pe profilul tău"),
                t("d04f95c0", "Postarea ta a fost fixată la profil."),
                t("i419d136", "Fixezi postarea la profil?"),
                t("c1b9714a", "Aceasta va apărea în partea de sus a profilului tău și va înlocui orice altă postare fixată anterior."),
                t("fe4d099a", "Evidențiază"),
                t("e8d4c1cc", "Evidențierea postărilor este o caracteristică pentru care este necesar un abonament. Devino utilizator verificat pentru a avea acces la această caracteristică și la multe altele."),
                t("b68c3784", "Devino utilizator verificat"),
                t("bb16cc76", "Părăsește această conversație"),
                t("de21174c", "Ai părăsit această conversație"),
                t("j33c9fc6", "Nu contează, rămân"),
                t("aed79c54", "Hai să te scoatem din această conversație"),
                t("h12044a4", "Uneori chiar nu dorești să te implici. Părăsirea conversației…"),
                t("f100e566", "Elimină eticheta de pe numele tău de utilizator"),
                t("a0d68f4e", "Numele tău de utilizator rămâne, dar nu va mai conține eticheta din postarea originală și din toate răspunsurile."),
                t("b00255b6", "Întrerupe menționările viitoare"),
                t("geea29ee", "Persoanele nu te pot menționa din nou în această conversație."),
                t("c54678e8", "Întrerupe notificările"),
                t("ga4fa180", "Nu vei mai primi notificări în viitor, dar poți vedea în continuare conversația."),
                t("h8dde772", "Nimeni nu va fi notificat dacă părăsești o conversație."),
                t("ee87e71c", "Nu poți să te ignori pe tine însuți."),
                t("ed428a76", "Nu ignori utilizatorul respectiv."),
                t("e2d6c17e", "Ignoră această conversație"),
                t("cd1942f4", "Anulează ignorarea acestei conversații"),
                t("bbd8bed6", "Ai ignorat notificările pentru această conversație"),
                t("c13af432", "Ai anulat ignorarea notificărilor pentru această conversație"),
                t("df744bda", "Ignoră aceasta"),
                t("j9552760", "Ignoră conversația"),
                t("d751694c", "Când ignori o conversație, nu mai primești notificări noi despre aceasta."),
                t("a50c911e", "Postarea a fost fixată și adăugată la Evidențieri."),
                t("d1c1e2c2", "Fixează în Comunitate"),
                t("j832cc34", "Acesta va apărea în partea de sus a Comunității tale."),
                t("h7dbb2f2", "Acesta va apărea în partea de sus a Comunității tale și va înlocui orice altă postare fixată anterior."),
                t("d8725596", "Fixat de moderatorii Comunității"),
                t("f5cdcc2c", "Nu mă interesează această reclamă"),
                t("c2e276e4", "Interzice autorul în Comunitate"),
                t("a95f04ba", "Sigur dorești să elimini eticheta fotografiei tale din această postare?"),
                t("jfc76958", "Elimină eticheta din fotografie"),
                t("j4e43d8b", function (e) {
                    return "Raportează " + e.entity;
                }),
                t("e3fd237e", "Raportează reclama"),
                t("ebb7662a", "Raportează postarea"),
                t("d1e21610", "Raportează încălcarea NetzDG"),
                t("d7513755", function (e) {
                    return "Caută postările utilizatorului @" + e.screenName + " în această Comunitate";
                }),
                t("d7dbb71b", function (e) {
                    return e.followType + " la " + e.screenName;
                }),
                t("ja66a2b5", function (e) {
                    return "Nu mai urmări pe @" + e.screenName;
                }),
                t("c2423b7b", function (e) {
                    return "Ai oprit urmărirea pentru @" + e.screenName;
                }),
                t("i31dfa4c", "Reafișează răspunsul"),
                t("j8e56ba2", "Răspunsul a fost reafișat"),
                t("ic030338", "Anulează fixarea de la profil"),
                t("gfcea3f4", "Anulezi fixarea postării de pe profilul tău?"),
                t("eb2d59f4", "Aceasta nu va mai apărea automat în partea de sus a profilului tău."),
                t("a2dd7414", "Postării tale i s-a anulat fixarea pe profil"),
                t("cac6a24a", "Elimină postarea fixată"),
                t("i642edc4", "Această postare nu va mai apărea în partea de sus a fluxului Comunității."),
                t("f9478972", "Vezi răspunsurile ascunse"),
                t("c5491b5d", function (e) {
                    return "Vezi interacțiunile " + e.entity;
                }),
                t("haebcf52", "Persoanele nu te pot menționa din nou în această conversație și nu vei mai putea primi notificări ulterioare."),
                t("c837fcaa", "Afișează mai multe răspunsuri"),
                t("d228a9a0", "Arată mai multe"),
                t("g0b48670", "Această conversație are prea multe răspunsuri și nu le putem afișa pe toate."),
                t("d9b417c4", "Setat cu „Nu sunt interesat”"),
                t("c29d6806", "Nu mai recomanda"),
                t("ge8f3043", function (e) {
                    return "Urmărește subiectul " + e.topicName;
                }),
                t("aa576cbf", function (e) {
                    return "Oprește urmărirea subiectului " + e.topicName;
                }),
                t("i77347d1", function (e) {
                    return "Înlătură subiectul " + e.topicName;
                }),
                t("d69b2d90", "Nu ești interesat de acest subiect."),
                t("je808a17", function (e) {
                    return "Subiect – " + e.topicName;
                }),
                t("ic6aa5f4", "Autentificat."),
                t("c02e7e3c", "Se încarcă..."),
                t("c5453f28", "Round of 64"),
                t("eb256a86", "Round of 32"),
                t("g77adc66", "Sweet Sixteen"),
                t("a6d2520c", "Sweet 16"),
                t("g5b63eb6", "Elite Eight"),
                t("d8bf2890", "Elite 8"),
                t("f9d3d6f2", "Final Four"),
                t("bda24f7c", "Final 4"),
                t("i5043440", "Campionatul național"),
                t("fcb16026", "Campionat"),
                t("e9c89ee8", "Est"),
                t("h259fd86", "Vest"),
                t("a7b2545a", "Sud"),
                t("fdf7819a", "Vestul Mijlociu"),
                t("i899e9b0", "Trimitere tablou"),
                t("c5b04394", "Vezi selecții"),
                t("h836bbae", "Vezi turneu"),
                t("e1059d6c", "Prima etapă"),
                t("b1602be4", "A doua etapă"),
                t("ef7bc2c0", "20–21 martie"),
                t("h726aaf2", "22–23 martie"),
                t("ee7cd198", "27–28 martie"),
                t("fed91402", "29–30 martie"),
                t("aba0a450", "5 aprilie"),
                t("jdfba2dc", "7 aprilie"),
                t("b7c6bc12", "TBD"),
                t("c373612c", "Alege:"),
                t("e8b3cab9", function (e) {
                    return "" + e.winner;
                }),
                t("j5db9ddd", " din "),
                t("a638617d", function (e) {
                    return "" + e.loser;
                }),
                t("j4c40da4", "Trimite acum"),
                t("b23688c8", "Anulează cronometrul"),
                t("cca5d499", function (e) {
                    return "Spune-mi despre " + e.selectedText + " în una sau două propoziții.";
                }),
                t("d231a76a", "Câștigă 100.000 $ pentru cel mai bun tablou competițional 🏀"),
                t("heaba5d8", "Concepe tabloul competițional al meciurilor de baschet între colegii pe X. Tabloul competițional perfect câștigă o călătorie pe Marte!"),
                t("i57d3ea0", "Se aplică reguli"),
                t("a0440af6", "Creează un tablou"),
                t("aaad27c8", "Autor"),
                t("eb748f7e", "Vezi analiza postării"),
                t("b7cff250", function (e) {
                    return "" + e.displayCoins;
                }),
                t("g62dcfbc", function (e) {
                    return "Moned" + r(e.count, "e", "ă", "e");
                }),
                t("be059f7e", "Ajungi la până la încă 100.000 de utilizatori acum"),
                t("c34f845e", "Încearcă să dai boost acestei postări!"),
                t("c37102aa", "Fă ca postările tale să ajungă astăzi la peste 100.000 de utilizatori, pe care conținutul tău îi poate interesa."),
                t("ac245c4c", "Dă boost pentru vizibilitate acum"),
                t("e4db6326", "Poate mai târziu"),
                t("g6237a1e", "Promoție în curs de desfășurare"),
                t("d6b5949e", "Promovare întreruptă"),
                t("ffd9cfe6", "Vezi mai multe"),
                t("d172116a", "Descoperă mai mult"),
                t("be5df69e", "Mai multe postări"),
                t("g11ebd34", "Mai multe sugestii"),
                t("g4a6901a", "  Răsfoiește"),
                t("h6453e74", "Răsfoiește postări"),
                t("je506a60", "Modifică numele de utilizator"),
                t("c0fcb08a", "Schimbarea numelui de utilizator va duce la eliminarea temporară a bifei și a afilierilor, până când acestea sunt verificate."),
                t("d1f6d336", "Nume de utilizator"),
                t("de65c756", "Sugestii"),
                t("ebeeac1a", "Modifică adresa de e-mail"),
                t("dc013356", "Curent"),
                t("ea28c7ce", "Se încarcă setările de e-mail"),
                t("f3f66252", "Adaugă adresa de e-mail"),
                t("i5107de4", "Actualizează adresa de e-mail"),
                t("d19fd42a", "Retrimite mesajul de e-mail de confirmare"),
                t("g4da3246", "E-mail trimis. Verifică-ți inboxul în curând pentru un link de confirmare."),
                t("h021352f", function (e) {
                    return "" + e.resendConfirmationLabel;
                }),
                t("d241169c", "Parola curentă"),
                t("a9bc3044", "Parolă nouă"),
                t("b8c03cfc", "Confirmă parola"),
                t("b731d32c", "Parola ta a fost actualizată cu succes."),
                t("d555d7e0", "Parola nouă nu poate fi identică celei existente."),
                t("fa8af9ae", "Parolele nu se potrivesc."),
                t("a03f5c73", function (e) {
                    return e.applicationCount + " " + r(e.applicationCount, "aplicații", "aplicație", "de aplicații");
                }),
                t("j25601d9", "Află mai multe"),
                t("cb841d56", "Schimbă telefonul"),
                t("ce37ea44", "Adaugă numărul de telefon"),
                t("ibaf239e", "Actualizează numărul de telefon"),
                t("j2636558", "Șterge numărul de telefon"),
                t("e49b16d4", "Ștergi numărul de telefon?"),
                t("i931719e", "Astfel, acest număr va fi eliminat din contul tău și nu îl vei mai putea folosi pentru a primi notificări sau coduri de conectare."),
                t("j841d1f4", "Telefon eliminat."),
                t("fe8b565a", "Această acțiune șterge numărul de telefon din acest cont și nu vei mai primi notificări sub formă de mesaje text de la X. În plus, se va dezactiva autentificarea în doi pași pentru acest cont."),
                t("hf45b8d4", "Această acțiune șterge numărul de telefon din acest cont și nu vei mai primi notificări sub formă de mesaje text de la X. În plus, se va dezactiva trimiterea de mesaje text ca metodă de autentificare în doi pași pentru acest cont."),
                t("bc262c2e", "Metode suplimentare"),
                t("hc1a91da", "Coduri de rezervă"),
                t("e4fed8f0", "Obține coduri de rezervă de unică folosință, ca să te poți conecta la X dacă nu ai acces la opțiunile de autentificare în doi pași."),
                t("b39c7b14", "Dezactivezi verificarea conectării?"),
                t("a923fce6", "Dacă dezactivezi autentificarea în doi pași, contul tău va fi mai vulnerabil și ar putea fi compromis. Sigur dezactivezi?"),
                t("ff781e0a", "Dezactivezi?"),
                t("c557ac30", "Sigur dezactivezi această metodă?"),
                t("d133464a", "Dezactivarea acestei opțiuni elimină metoda de autentificare în doi pași din contul tău. Sigur o dezactivezi?"),
                t("ee3a7bfa", "Dezactivează"),
                t("aa9139cc", "Verifică solicitările de conectare"),
                t("jc22dd42", "După ce te conectezi, X va trimite o notificare push la aplicația X, pe care va trebui să o accepți pentru a-ți accesa contul."),
                t("a219e218", "OK"),
                t("e0d79de8", "Ai doar o singură cheie de securitate conectată la contul tău. Pentru a te asigura că nu vei fi blocat dacă o pierzi, adăugă o altă cheie și salvează un cod de rezervă de autentificare în doi pași."),
                t("ja6bbfa0", "Se încarcă datele de verificare a conectării"),
                t("c2570922", "Mesaj SMS"),
                t("fba9483c", "Folosește telefonul mobil pentru a primi un mesaj text cu un cod de autentificare pe care să îl introduci atunci când te conectezi la X."),
                t("ab61b41a", "Aplicația de autentificare"),
                t("a67c7d68", "Folosește o aplicație de autentificare mobilă pentru a primi un cod de verificare pe care să îl introduci de fiecare dată când te conectezi la X."),
                t("h6d0d89c", "Cheie de securitate"),
                t("b3e5c946", "Folosește o cheie de securitate ce se introduce în computer sau care se sincronizează cu dispozitivul tău mobil atunci când te conectezi la X. Va trebui să folosești un dispozitiv mobil sau un browser web acceptat."),
                t("cd195528", "Adaugă o nouă cheie de securitate"),
                t("a1860ee8", "Parolă temporară"),
                t("j45a2856", "Creează o parolă temporară de unică folosință de utilizat cu aplicațiile și serviciile de la terți."),
                t("d8612d9c", "Activează mai întâi Mesaj text sau Aplicație de autentificare"),
                t("e13d4468", "Înainte de a putea configura o cheie de securitate, trebuie mai întâi să activezi fie Mesaj text, fie Aplicație de autentificare ca una dintre metodele de autentificare în doi pași."),
                t("c1d96d6a", "Ai adăugat numărul maxim de chei"),
                t("gf91694e", "Va trebui să ștergi o cheie înainte de a adăuga alta."),
                t("j265ddb6", "Confirmă e-mailul"),
                t("a7cfdf1c", "Pentru a activa autentificarea în doi pași, trebuie să asociezi o adresă de e-mail cu acest cont X și apoi să o confirmi, ca să știm că îți aparține."),
                t("d7bfde1a", "În prezent, contul tău pare a fi suspendat. Nu poți activa autentificarea în doi pași în timp ce contul este suspendat."),
                t("g268fbb8", "Acest cont are identitatea verificată."),
                t("f66d24be", "Centru de ajutor"),
                t("c8255462", "Ascunde eticheta de identitate verificată"),
                t("c6e731ee", "Ascunde-ți eticheta de identitate verificată astfel încât celelalte persoane să nu o vadă atunci când ating bifa albastră de pe pagina ta de profil."),
                t("be582166", "Verificarea identității poate ajuta la protejarea contului tău împotriva furtului de identitate și acordă profilului tău o etichetă de ID verificat."),
                t("b496bc94", "Îți verificăm actul de identitate emis de o autoritate guvernamentală. Te vom ține la curent prin notificări!\n\nDupă aprobare, vei primi pe profilul tău o etichetă de ID verificat, pentru ca ceilalți utilizatori să știe că ID-ul contului tău este verificat."),
                t("d8f5cce4", "Ai depășit limita pentru solicitarea verificării. Așteaptă 24 de ore înainte de a încerca din nou."),
                t("i8427a1e", "Acest cont nu este eligibil pentru verificarea identității. Doar utilizatorii individuali abonați Premium sunt în acest moment eligibili pentru verificarea identității."),
                t("cdc65e89", function (e) {
                    return e.title + " (opțional)";
                }),
                t("h05c1f28", "Verifică-ți contul furnizând un act de identitate eliberat de o autoritate guvernamentală. Acest lucru durează, de obicei, aproximativ 5 minute."),
                t("j8cfcc62", "Sunt de acord ca X și AU10tix să folosească imagini ale documentului meu de identitate și selfie-ul meu, inclusiv date biometrice extrase, pentru a-mi confirma identitatea și în scopuri asociate siguranței și securității X, inclusiv împiedicarea unei identități false. Este posibil ca Au10tix să păstreze aceste date timp de maximum 30 de zile."),
                t("c4930cb6", "Vei avea nevoie de:"),
                t("ac7bb0fe", "Pregătește-ți actul de identitate eliberat de o autoritate guvernamentală"),
                t("c12ce69c", "Verifică funcționarea camerei dispozitivului tău și ai grijă ca aceasta să nu fie acoperită"),
                t("c5bfe94a", "Pregătește-te să faci un selfie și poze ale actului tău de identitate"),
                t("e5b7dd84", "Început"),
                t("abfaa528", "Omite"),
                t("e4fed511", "serviciul X Premium"),
                t("def518fa", "Abonament la creatori"),
                t("f61cda83", "Cota-parte din venituri din publicitate"),
                t("g1952008", "Abonament la creatori"),
                t("e5d0419c", "Cota-parte din venituri pentru creatori"),
                t("g3723480", "Abonament la creatori"),
                t("c776f523", "Cotă de venituri din reclame"),
                t("ab9f38f8", "Abonament la creatori"),
                t("d5cab8b0", "Cota-parte din venituri pentru creatori"),
                t("g1a4a1b6", "Eroare de verificare a identității"),
                t("e24305e4", "Sesiunea de verificare a identității tale a expirat sau a fost nevalidă; încearcă din nou."),
                t("f7954a0c", "Se încarcă datele despre cheile de securitate"),
                t("h69986c2", "Îți poți redenumi sau șterge cheile de securitate."),
                t("i5896ba2", "Adaugă o altă cheie"),
                t("a8ef2b64", "Cheie de securitate fără nume"),
                t("d4e220b4", "Nume"),
                t("g6d0f0b6", "Gestionează cheia de securitate"),
                t("b894f68a", "Se încarcă datele despre cheia de securitate"),
                t("g2601bb6", "Redenumește cheia"),
                t("b464b726", "Șterge cheia"),
                t("a4101e1b", function (e) {
                    return "Data adăugării: " + e.securityKeyAddedDate;
                }),
                t("i3bb3f78", "Cod de rezervă"),
                t("ec6a76e0", "Generează un cod nou"),
                t("f2c3c31c", "Copiază codul"),
                t("e8016b64", "Codul de rezervă se încarcă"),
                t("c4ca22bc", "Dacă pierzi vreodată accesul la dispozitivul tău, poți folosi acest cod pentru a-ți verifica identitatea."),
                t("f20ff69f", "Află mai multe"),
                t("j2327f80", "Parolă temporară"),
                t("fbfeaf8e", "Generează o parolă nouă"),
                t("h4a8bd12", "Copiază parola"),
                t("g247dc1c", "Se încarcă parola temporară"),
                t("h3a32f52", "Utilizează această parolă temporară (spațiile sunt opționale) pentru a te conecta la X de pe aplicații și dispozitive."),
                t("d70fceac", "Această parolă va expira într-o oră."),
                t("j924d222", "Schimbă țara"),
                t("e9310157", "Află mai multe"),
                t("bd5ac12e", "Selectează limba preferată pentru titluri, butoane și alt text de la X pentru acest cont. Această acțiune nu schimbă limba conținutului pe care îl vezi în cronologie."),
                t("cef33711", function (e) {
                    return e.languageName + " (beta)";
                }),
                t("b033248c", "Capacitate de descoperire"),
                t("c69b4798", "Decide dacă persoanele care au adresa ta de e-mail sau numărul tău de telefon pot să te găsească și să ia legătura cu tine pe X."),
                t("eca117e6", "Permite ca persoanele care au adresa ta de e-mail să te găsească pe X"),
                t("acd36386", "Permite ca persoanele care au adresa ta de e-mail să te găsească și să ia legătura cu tine pe X."),
                t("gd8511ca", "Permite ca persoanele care au numărul tău de telefon să te găsească pe X"),
                t("eca935ec", "Permite ca persoanele care au numărul tău de telefon să te găsească și să ia legătura cu tine pe X."),
                t("ac77c66c", "Contacte"),
                t("jadf483e", "Gestionează contactele pe care le-ai importat de pe dispozitive mobile."),
                t("b864be7a", "Elimină toate contactele"),
                t("g5fa1090", "Elimini toate contactele?"),
                t("h3e420fc", "Astfel, toate contactele încărcate anterior vor fi eliminate, iar sincronizarea cu X va fi dezactivată pe toate dispozitivele. Reține că această acțiune ia ceva timp, nu poate fi anulată și este posibil să mai vezi încă anumite sugestii pe X (în funcție de contactele tale) în acest timp."),
                t("ca24589e", "Fără nume"),
                t("d439b1c1", "Află mai multe"),
                t("fe36fe10", "Confirmă parola"),
                t("hccd9dbe", "Introdu parola pentru a avea acces."),
                t("df1ddda4", "Etichetele de locație pe care le-ai adăugat la postările tale nu vor mai fi vizibile pe X.com, X pentru iOS și X pentru Android. Este posibil să dureze un timp până la aplicarea acestor modificări."),
                t("ed7fa034", "Serviciile tale de localizare nu sunt activate în prezent pe acest dispozitiv. Le poți activa din setările dispozitivului."),
                t("e80e4288", "Elimină toate informațiile despre locație atașate la postările tale"),
                t("b0ee8ab6", "Elimini toate informațiile despre locație atașate la postările tale?"),
                t("e23b2991", "Află mai multe"),
                t("gd758534", "Permite persoanelor să te eticheteze în fotografiile lor și primește notificări atunci când fac acest lucru."),
                t("a90af44e", "Ascunde conținutul sensibil"),
                t("a25e2ec6", "Elimină conturile blocate sau ignorate"),
                t("b827a058", "Setările de Căutare sigură au fost actualizate."),
                t("b27c9852", "Ceva nu a mers bine la actualizarea setărilor de căutare sigură."),
                t("j3402d7e", "Aceasta împiedică afișarea în rezultatele de căutare a postărilor cu un conținut potențial sensibil."),
                t("if05bca6", "Utilizează aceasta pentru a elimina rezultatele de căutare din conturile pe care le-ai blocat sau ignorat."),
                t("bc7fd990", "Se încarcă setările tendințelor"),
                t("e2f16650", "Afișează conținutul din această locație"),
                t("e5e88f40", "Când este activată această funcție, vezi pe loc ce se întâmplă în apropierea ta."),
                t("i4d54b0e", "Tendințe pentru tine"),
                t("ad431584", "Afișează-mi povești amuzante ale lui Grok"),
                t("df9f03c8", "Personalizează tendințele în funcție de locație și de persoanele pe care le urmărești."),
                t("c6cf5c7e", "Poți personaliza tendințele în funcție de locația ta și de persoanele pe care le urmărești."),
                t("e09358ba", "Vezi cele mai noi întâmplări de pe X în modul distractiv al lui Grok."),
                t("a55db872", "Personalizare"),
                t("a58170fc", "Povești Grok"),
                t("h0b5152e", "Schimbă locația"),
                t("dfeada5e", "Explorează locațiile"),
                t("ac854308", "Politică"),
                t("d429c942", "Tendințe legate de Politica privind alegerile din SUA"),
                t("ede134f2", "Selectează dacă videoclipurile și GIF-urile să fie redate automat pe acest dispozitiv."),
                t("b3aab6d4", "Locații"),
                t("e53e05e4", "Se încarcă locațiile"),
                t("d5c9174f", function (e) {
                    return e.location + ", " + e.country;
                }),
                t("b47d123d", function (e) {
                    return "ECONOMISEȘTE " + e.percentage + "%";
                }),
                t("c6614cc0", "plus orice taxe care se aplică"),
                t("f8d3b50a", "taxe incluse"),
                t("i2c32253", function (e) {
                    return e.price + "/lună";
                }),
                t("c41e1023", function (e) {
                    return e.price + "/an";
                }),
                t("i57aeafb", function (e) {
                    return "Pentru prim" + r(e.duration, "ele " + e.duration + " luni", "a lună", "ele " + e.duration + " luni") + ", apoi " + e.standardPrice + ", cu facturare lunară";
                }),
                t("ae3e3723", function (e) {
                    return "Pentru prim" + r(e.duration, "ii " + e.duration + " ani", "ul an", "ii " + e.duration + " ani") + ", apoi " + e.standardPrice + ", cu facturare anuală";
                }),
                t("ade4c757", function (e) {
                    return "Apoi, " + e.price + "/lună";
                }),
                t("f7798e11", function (e) {
                    return "Apoi, " + e.price + "/an";
                }),
                t("e0b39888", "Facturat lunar"),
                t("b67c37de", "Facturat anual"),
                t("a8363765", function (e) {
                    return e.price + ", facturat anual";
                }),
                t("df3ed1c8", function (e) {
                    return "" + e.standardPrice;
                }),
                t("g261b098", function (e) {
                    return "" + e.standardPrice;
                }),
                t("af66a072", "Înainte să pleci, gândește-te la ce vei pierde"),
                t("a092f1ba", "Continuă spre anulare"),
                t("g96c7f48", "Treci la un alt plan"),
                t("iccac88e", "Jumătate din cantitatea de reclame în cronologiile Pentru tine și Urmărești"),
                t("d7a124d8", "Fără reclame"),
                t("d2d22c36", "Acces la Grok"),
                t("j249b1d4", "Prioritizarea răspunsurilor"),
                t("c4a37384", "Postări mai lungi"),
                t("fb656858", "Editarea postărilor"),
                t("faaec212", "Primirea de bani pentru a posta"),
                t("fb3c7168", "Folderele cu marcaje"),
                t("b346bc12", "Bifa"),
                t("je8143e1", function (e) {
                    return "Primește " + e.percentage + "% reducere la X " + e.productName + " timp de " + r(e.duration, e.duration + " (de) luni", "o lună", e.duration + " (de) luni");
                }),
                t("j5847735", function (e) {
                    return "Primește " + e.percentage + "% reducere la X " + e.productName + " timp de " + r(e.duration, e.duration + " (de) ani", "un an", e.duration + " (de) ani");
                }),
                t("da3431f9", function (e) {
                    return "Reducerea este un mic cadou din partea noastră, în caz că vrei să păstrezi în continuare X " + e.productName + "!";
                }),
                t("i6fbfc72", "Ofertă unică exclusivă"),
                t("f1bc6309", function (e) {
                    return "Păstrează-ți accesul complet la toate caracteristicile X " + e.productName;
                }),
                t("fdb7b52a", "Reducerea se va aplica începând cu următorul ciclu de facturare."),
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
                t("c6150942", "Ești gata"),
                t("a905eac6", "Explorează Premium"),
                t("j6083a1c", "Gestionează-ți abonamentul"),
                t("b4fa4630", "Actualizează metoda de plată"),
                t("ef0dfa5a", "Actualizează informațiile de plată"),
                t("f5b352ec", "Anulează abonamentul"),
                t("j317d958", "Avertisment: îți vei pierde reducerea în așteptare"),
                t("a46e42d2", "Îmi păstrez abonamentul"),
                t("e122fb3f", function (e) {
                    return "Perioada de încercare gratuită se încheie pe " + e.endDate + ".";
                }),
                t("be103b84", "Activ"),
                t("ace43720", "Expiră în curând"),
                t("c8f18aa4", "Primești Premium+ deoarece ești abonat la Organizații verificate."),
                t("a341d1f7", function (e) {
                    return "Primești Premium+ deoarece organizația ta este abonată la programul Organizații verificate prin intermediul @" + e.organization + ". Contactează-ți organizația pentru mai multe detalii.";
                }),
                t("e4aaf0f8", "Pentru a-ți anula abonamentul gratuit Premium, contactează asistența"),
                t("e5170220", "Acest cont a primit un abonament Premium gratuit ca urmare a cheltuielilor aferente reclamelor."),
                t("j6d6b66e", "Acestui cont i s-a oferit cadou un abonament. Pentru a anula abonamentul, contactează asistența"),
                t("fae1751f", function (e) {
                    return "Se pare că ai cumpărat acest abonament pe aplicația X " + e.mobilePlatform + ". Va trebui să gestionezi sau să-ți anulezi abonamentul de acolo.";
                }),
                t("fecebd4c", "aici"),
                t("h201c4c2", "iOS"),
                t("i8385a2c", "Android"),
                t("h80834de", "altul"),
                t("baf97716", "Funcțiile tale vor fi disponibile pe durata rămasă a perioadei de facturare."),
                t("ae864b69", function (e) {
                    return "Este planificată modificarea abonamentului tău la " + e.tierName + " începând cu următorul ciclu de facturare pe " + e.date;
                }),
                t("a991d9a3", function (e) {
                    return "Următorul ciclu de facturare începe pe " + e.date;
                }),
                t("edbb700f", function (e) {
                    return "Începe cu următorul ciclu de facturare, pe " + e.date;
                }),
                t("e3f9d219", function (e) {
                    return "Abonamentul se încheie pe " + e.date;
                }),
                t("e9884540", "Reducere activă"),
                t("bfb879aa", "Reducere în așteptare"),
                t("f8321d82", "Toate"),
                t("eb233866", "Importate"),
                t("d23b0404", "Atunci când blochezi pe cineva, persoana respectivă nu va mai putea să te urmărească sau să îți trimită mesaje, iar tu nu vei vedea notificări de la ea."),
                t("e0a7e9bc", "Blochează conturile nedorite"),
                t("ef731b14", "Se încarcă conturile blocate"),
                t("e554ba83", "Află mai multe"),
                t("if594962", "Blocat"),
                t("i2b9632e", "Deblocat cu succes."),
                t("g51a96de", "Când blochezi pe cineva, acea persoană nu va mai putea să te urmărească sau să îți trimită mesaje și nu vei mai vedea notificări de la ea. Poți importa o listă de conturi pe care vrei să le blochezi pe X."),
                t("j035733c", "Ești pe cale să începi dezactivarea contului tău X. Numele tău afișat, @numeledeutilizator și profilul tău public nu vor mai fi vizibile pe X.com, X pentru iOS sau X pentru Android."),
                t("j4a29d52", "Îți poți recupera contul X în termen de 30 de zile de la dezactivare dacă a fost dezactivat din greșeală sau în urma unei erori."),
                t("ea989810", "Dezactivează contul"),
                t("f6e73faa", "Dezactivează"),
                t("c3743328", "Această acțiune îți va dezactiva contul"),
                t("a20cd24e", "Ce ar mai trebui să știi"),
                t("e93b0ae0", "Finalizează solicitarea de dezactivare introducând parola asociată contului tău."),
                t("fc025d1d", " Află mai multe"),
                t("bb5e039c", "setări"),
                t("j37efff6", "schimbă-le"),
                t("ce5bfe12", "datele X"),
                t("g7088266", "Editează profilul"),
                t("d9d293b8", "Site web"),
                t("cb469ff6", "Numele nu poate fi necompletat"),
                t("g511f468", "Avatarul tău nu s-a actualizat, deoarece o parte din conținutul media nu s-a încărcat"),
                t("ec3a116e", "Bannerul tău nu s-a actualizat, deoarece o parte din conținutul media nu s-a încărcat."),
                t("j94599ec", "Adaugă o fotografie avatar"),
                t("df31d76a", "Adaugă o fotografie banner"),
                t("c01a0e1a", "Confirmi data nașterii?"),
                t("df2c469a", "Treci la Profesional"),
                t("e1f76978", "Editează profilul profesional"),
                t("ic04a6f6", "Această acțiune nu poate fi anulată și îți vei pierde modificările."),
                t("addbe8e8", "Îți recomandăm să folosești un nume fără caractere speciale, ca să fie accesibil unui număr și mai mare de persoane, inclusiv celor nevăzătoare sau cu vedere scăzută."),
                t("a46f80ab", function (e) {
                    return "S-a născut în data de " + e.birthdate;
                }),
                t("c7905f89", function (e) {
                    return "S-a născut în anul " + e.year;
                }),
                t("bfe8d1a2", "Editează biografia extinsă"),
                t("e1ec926e", "Creează o biografie extinsă"),
                t("c119dee8", "Data nașterii"),
                t("bbf0afc8", "Adaugă data nașterii"),
                t("f98d367e", "Editezi data nașterii?"),
                t("d3f43300", "Această dată poate fi schimbată de câteva ori. Asigură-te că introduci vârsta persoanei care folosește contul."),
                t("g10411f0", "Aceasta trebuie să fie data de naștere a persoanei care utilizează contul, indiferent dacă faci un cont pentru afacerea ta, pentru un eveniment sau pentru pisica ta."),
                t("a0c5e370", "Cine vede aceasta?"),
                t("i68fe54e", "Luna și ziua"),
                t("b4e729b6", "An"),
                t("f3bb1b48", "Elimini data nașterii?"),
                t("c9cb9972", "Aceasta va fi eliminată din profilul tău."),
                t("a2bef112", "Elimină data nașterii"),
                t("c37622ec", "Introdu o dată validă"),
                t("f679d166", "Urmăritorii tăi"),
                t("af293dc2", "Persoane pe care le urmărești"),
                t("h99b6d08", "Politica de confidențialitate"),
                t("hce7a225", "Află mai multe"),
                t("e9603d88", "Afișează marcajul cu număr de telefon confirmat"),
                t("ada99498", "Acest marcaj va fi afișat doar celorlalți utilizatori din regiunea ta."),
                t("a765e936", "Șterge biografia extinsă"),
                t("d4d68e44", "Salvate"),
                t("b6de83a0", "Spațiu doar pentru angajați"),
                t("g3f251f2", "Transmisiune privată"),
                t("d08666ba", "Spațiu privat"),
                t("eadb5a46", "Fii primul utilizator care se alătură"),
                t("f9629a8f", function (e) {
                    return "Transmisiune de la " + e.hostName;
                }),
                t("ia3c0ab7", function (e) {
                    return "Spațiul utilizatorului " + e.hostName;
                }),
                t("hd552761", function (e) {
                    return "Găzduit de " + e.hostName;
                }),
                t("c3ea19a5", function (e) {
                    return e.index + " din " + e.total;
                }),
                t("a5235305", function (e) {
                    return e.listOfPeople + " s-a alăturat";
                }),
                t("df9f8243", function (e) {
                    return e.name + " ascultă";
                }),
                t("g2445c2f", function (e) {
                    return e.name + " vorbește";
                }),
                t("fcfd5a67", function (e) {
                    return e.name + " găzduiește";
                }),
                t("f7882829", function (e) {
                    return e.name + " este co-gazdă";
                }),
                t("d961a4a0", "În direct pe X"),
                t("g2c0144a", "Organizații verificate"),
                t("cd5cdec8", "Gestionează-ți creditele de publicitate"),
                t("f23b6a72", "Credite de publicitate rămase"),
                t("i969d5de", "Configurează o campanie de publicitate"),
                t("d0924f58", "Primește asistență pentru o problemă"),
                t("j8d53b64", "Vezi toate caracteristicile"),
                t("jd26f2a6", "Adaugă afiliați"),
                t("e0a492e6", "Gestionează locurile de muncă"),
                t("d9cbd02c", "Cererea ta este în așteptarea verificării"),
                t("ed4759a6", "Îți vom comunica în câteva zile rezultatul solicitării. Te putem contacta pe e-mail pentru informații suplimentare."),
                t("dad69faa", "Actualizează metoda ta de plată"),
                t("daf3248a", "Solicitare incompletă"),
                t("eb71036f", function (e) {
                    return "Încarcă și verifică documentele organizației tale până pe " + e.date;
                }),
                t("a1d3f1f2", "Am încheiat un parteneriat cu Persona, pentru a-ți verifica identitatea și documentele companiei, pentru securitatea și siguranța X. Este posibil ca Persona să îți păstreze datele până la 30 de zile."),
                t("ea8c295a", "Începe verificarea documentelor"),
                t("da1aa48f", function (e) {
                    return "Verificarea îți crește vizibilitatea și credibilitatea, așa cum se întâmplă în cazul utilizatorului @" + e.screenName + ".";
                }),
                t("e4a7a968", "Nu ești încă un utilizator verificat"),
                t("id9c1e82", "Acest profil este verificat"),
                t("d43b0edc", "Alătură-te cercului de utilizatori verificați"),
                t("d4ea0ed4", "Obține insigna albastră"),
                t("cffeaeae", "Devino utilizator verificat"),
                t("b8e930fe", "Popular acum"),
                t("ae05f268", "Tendințele nu sunt disponibile."),
                t("c6b51af8", "Ești utilizator nou pe X?"),
                t("ie8e1ffc", "Înregistrează-te acum pentru a-ți crea propria cronologie personalizată!"),
                t("fd6473fa", "Se încarcă recomandările de utilizatori de urmărit"),
                t("a526aa66", "Pe cine să urmărești"),
                t("ef625010", "S-ar putea să-ți placă"),
                t("b7388a56", "Subsol"),
                t("hdabc3fc", "Condiții de utilizare"),
                t("bc6efc72", "Politica de confidențialitate"),
                t("h3161192", "Politica privind modulele cookie"),
                t("a7de64de", "Informații despre reclame"),
                t("jb0a4c36", "Blog"),
                t("ce6d095a", "Cariere"),
                t("e0adec82", "Resurse pentru branduri"),
                t("df1b7550", "Marketing");
            t("he258678", "X pentru afaceri"),
                t("c6f58084", "Dezvoltatori"),
                t("d83f18d2", "Director"),
                t("hc5aa17c", "Obţine aplicația X"),
                t("j0693948", "Obține aplicația Grok"),
                t("fce9ecce", "Videoclipuri sugerate"),
                t("j66b95a2", "Știri detaliate"),
                t("ad35153e", "beta"),
                t("b58d2bd2", "Postări relevante"),
                t("efe6ef9e", "Vizualizează postarea"),
                t("b3d183ce", "Postare cu răspunsuri"),
                t("c299a6c0", "Fir"),
                t("h3d5d79e", "Postare a Comunității"),
                t("cfe877ca", "Alege pe cine să urmărești"),
                t("e06b864c", "Se pare că îți place această conversație"),
                t("a078ff70", "Vrei să vezi mai mult conținut de la persoanele cu care ai interacționat în acest fir? Începe să explorezi conținut de la conturi noi."),
                t("cb80300e", "Sari la cronologia principală"),
                t("ea5cd098", "Sari la populare"),
                t("c67e3fc2", "Cronologia principală"),
                t("d601fc20", "Cele mai recente"),
                t("j43f99be", "Relevanță"),
                t("ad6e11ac", "Sortare răspunsuri după"),
                t("b2311b70", "Conținutul nu este disponibil pentru tine"),
                t("j88f27d8", "Persoane relevante"),
                t("i31dcd22", "Articol"),
                t("e3de2f6f", function (e) {
                    return e.entity + " a fost adăugat la Marcaje";
                }),
                t("e64de8a9", function (e) {
                    return e.entity + " a fost eliminat din Marcaje";
                }),
                t("d6d9aab6", "Adaugă Marcaj"),
                t("bb89cf46", "Elimină Marcajul"),
                t("a739d4ba", "Adaugă la folderul cu Marcaje"),
                t("d5270434", "Ieșire"),
                t("ac85c6b2", "A apărut o eroare la încărcarea imaginii"),
                t("b327c12a", "Imagine"),
                t("ic76bdf0", "Recreează cu Grok"),
                t("a4d3eb67", function (e) {
                    return e.fullName + " pe X: „" + e.tweetText + "”";
                }),
                t("f0701753", function (e) {
                    return "Ascunde timp de " + e.number + " (de) zile";
                }),
                t("j7d0e836", "Extinde"),
                t("d227d19e", "Restrânge"),
                t("fbf83158", "Avertisment: plata a eșuat"),
                t("jadeb4da", "Actualizează-ți urgent metoda de plată pentru a nu-ți pierde beneficiile abonamentului."),
                t("bce3726a", "Actualizare informații de facturare"),
                t("ie4f57d2", "Reînnoiește-ți abonamentul Premium"),
                t("h293aa52", "Abonamentul tău Premium este pe cale să expire!"),
                t("j1923668", "Bucură-te în continuare la maximum de X."),
                t("ac7e97ee", "Reînnoiește abonamentul"),
                t("f70c69b4", "Prioritizarea răspunsurilor, editarea postărilor, personalizare, postări mai lungi și multe altele."),
                t("f4cec4d2", "Bifă albastră, prioritizarea răspunsurilor, limite extinse pentru Grok și multe altele."),
                t("h367e724", "Biografie extinsă"),
                t("ea5928d4", "Ești o persoană complexă. Așa este și profilul tău.\nAdaugă o biografie extinsă pentru a le spune celorlalți mai multe despre tine."),
                t("h7ef9dc8", "Acesta poate să includă:"),
                t("c04ba4b4", "Lucruri la care ai lucrat și pe care vrei să le afișezi"),
                t("d7666008", "Rețeta ta de paste legendară"),
                t("cb24ee16", "Experiența de muncă și preferințele profesionale"),
                t("a1c93d74", "Se pare că nu reușim să salvăm modificările făcute de tine. Te rugăm să încerci din nou mai târziu."),
                t("b956c04a", "Sigur ștergi biografia extinsă?"),
                t("ifb23caa", "Prin ștergerea biografiei extinse, aceasta va fi eliminată de pe profilul tău."),
                t("c2333081", function (e) {
                    return e.count + " caracter" + r(e.count, "e", "", "e");
                }),
                t("a2b8c54c", "Ștearsă"),
                t("a9cc8f96", "S-a depășit numărul maxim de caractere"),
                t("eb7710f1", function (e) {
                    return e.years + " an" + r(e.years, "i", "", "i");
                }),
                t("bfc38bb5", function (e) {
                    return e.months + " lun" + r(e.months, "i", "ă", "i");
                }),
                t("h6a724ac", "Sigur o ștergi?"),
                t("f94aacae", "Ștergerea o va elimina de pe profilul tău."),
                t("je07e266", "Ascuns"),
                t("a622dfcc", "Istoric activitate"),
                t("a6ec7ff8", "biografie"),
                t("eeb6d22c", "experiență"),
                t("eba5a8ec", "Numele locului de muncă"),
                t("fd20adb8", "Lucrez aici în prezent"),
                t("cd3059f2", "Data de începere"),
                t("b86019ae", "Data de sfârșit"),
                t("eedfd35c", "Companie"),
                t("caa46e54", "Nume companie"),
                t("e893fe6e", "Creează compania"),
                t("j1c09ca4", "Site-ul web al companiei"),
                t("hd332c96", "Denumirea postului este obligatorie"),
                t("d2fb1b80", "Compania este obligatorie"),
                t("b3590132", "Sunt obligatorii datele de începere și de sfârșit"),
                t("debb6abe", "Data de începere nu poate fi în viitor"),
                t("j7d08ada", "Data de sfârșit nu poate fi în viitor"),
                t("a8c7d3fc", "Data de sfârșit trebuie să fie posterioară datei de începere"),
                t("b335d507", function (e) {
                    return "S-a depășit numărul maxim de caractere, de " + e.maxChars;
                }),
                t("j29ab120", "Ignoră notificările de la persoane:"),
                t("jdfc82f6", "Pe care nu le urmărești"),
                t("cfcda0e6", "Care nu te urmăresc"),
                t("c75b9b2a", "Cu un cont nou"),
                t("f39b9c9e", "Care au o fotografie de profil implicită"),
                t("d227f940", "Care nu și-au confirmat e-mailul"),
                t("b210936e", "Care nu și-au confirmat numărul de telefon"),
                t("ed0df10b", "Află mai multe"),
                t("dcef34ac", "Activează"),
                t("a39f706e", "Browserul tău nu acceptă notificări push"),
                t("h4f20d0e", "Primește notificări push ca să afli ce se întâmplă când nu ești pe X. Le poți dezactiva oricând."),
                t("cdce0394", "Această selecție este pentru orice cont, în timp ce o utilizezi în acest browser."),
                t("b39bcae2", "Activează notificările push"),
                t("b50f6144", "Pentru a primi notificări imediat ce apar, activează notificările push. Le vei primi și atunci când nu ești pe X. Le poți dezactiva oricând."),
                t("fe11b3ea", "Browser neacceptat"),
                t("a1245d3a", "Se pare că browserul tău nu acceptă notificări push."),
                t("f580c738", "Activezi notificările?"),
                t("i951fbcc", "Pentru a primi notificări de la X, trebuie mai întâi să permiți acest lucru în setările browserului."),
                t("ec7cb554", "Atunci când activezi notificările despre postări de la persoane pe care le urmărești, vei primi notificări despre postările sau videoclipurile în direct ale acestora."),
                t("b68050dc", "Vezi utilizatori"),
                t("af045060", "Legat de tine și postările tale"),
                t("cf378ff8", "De la X"),
                t("f823bbbe", "Doar pentru conturile verificate"),
                t("a40e37f2", "Primește mesaje de e-mail pentru a afla ce se întâmplă atunci când nu ești pe X. Poți dezactiva oricând aceste mesaje."),
                t("e8eb54a0", "Rapoarte săptămânale pentru cont"),
                t("ib80b0f2", "Notificări noi"),
                t("ba58e6b0", "Postări care ți-au fost trimise prin e-mail"),
                t("fae2c81a", "Postări populare şi noutăţi"),
                t("f7b09bb4", "Actualizări despre performanța postărilor tale"),
                t("d3978554", "Știri despre actualizările produselor și caracteristicilor X"),
                t("bdccb81c", "Sfaturi despre cum să obții mai multe de la X"),
                t("c3d47fe6", "Lucruri pe care le-ai pierdut de la ultima conectare la X"),
                t("af8caf3e", "Știri despre X în produsele partenerilor și alte servicii de la terți"),
                t("hc076ee4", "Participare în sondaje de cercetare X"),
                t("ddfe3776", "Sugestii pentru conturile recomandate"),
                t("d17ba8c2", "Sugestii bazate pe urmăririle tale recente"),
                t("bcf50a1a", "Sfaturi despre produsele X pentru firme"),
                t("fcad1e2e", "Zilnic"),
                t("h9e0dfde", "Săptămânal"),
                t("e26d98ac", "Periodic"),
                t("h0c94842", "Fii la curent"),
                t("c460d332", "Când activezi notificările pentru postări pentru un cont, vei știi când respectivul cont publică postări, intră în direct sau găzduiește un Spațiu."),
                t("a820d092", "Se încarcă urmăriții"),
                t("ha45c9e4", "Notificări pentru postări"),
                t("bdbf8f4e", "Introdu cuvântul sau expresia"),
                t("h43e2ea8", "Cuvânt ignorat"),
                t("da8c0440", "Ignoră din"),
                t("defb4aaa", "De la oricine"),
                t("e7d47b00", "De la persoane pe care nu le urmărești"),
                t("d9d6e10e", "Durată"),
                t("gfa5008e", "Prelungește perioada de ignorare"),
                t("c5595dfe", "Modifică perioada de ignorare"),
                t("he6804e0", "Până nu anulezi ignorarea cuvântului"),
                t("a268406c", "24 de ore"),
                t("fc638aa2", "7 zile"),
                t("b8971cfa", "30 de zile"),
                t("cc7bedfc", "Poți schimba perioada de timp în care este ignorat. Dacă ai selectat mai înainte „Întotdeauna”, ora modificată va începe imediat."),
                t("d768049c", "Adaugă cuvântul ignorat"),
                t("c6203da8", "Opțiuni cuvinte ignorate"),
                t("e3f0d3db", function (e) {
                    return "„" + e.keyword + "” a fost ignorat";
                }),
                t("h5746cf7", function (e) {
                    return "„" + e.keyword + "” a fost actualizat";
                }),
                t("d2693eb8", "Asigură-te că expresia ignorată nu are mai mult de 140 de caractere."),
                t("f8488024", "Acesta este un cuvânt foarte uzual și apare în multe postări, însă îl poți ignora dacă vrei."),
                t("deb4924d", "Află mai multe"),
                t("aa09e528", "Adaugă cuvintele ignorate"),
                t("e506aa92", "Adaugă cuvântul ignorat sau expresia ignorată"),
                t("cbd04965", function (e) {
                    return "„" + e.keyword + "” nu se mai ignoră";
                }),
                t("eb4e810a", "Expirat"),
                t("cabeb6c2", "Întotdeauna"),
                t("f9bce916", "Ignoră cuvinte"),
                t("gfe0ee3b", "Află mai multe"),
                t("ba4aaa9e", "Anulezi ignorarea expresiei?"),
                t("f837ed7e", "Această expresie va fi permisă acum în notificările tale și în cronologia din pagina principală."),
                t("a6194d10", "Se încarcă conturile ignorate"),
                t("bcf6ad9a", "Postările de la conturile ignorate nu vor fi afișate în cronologia ta. Ignoră conturile direct din profilul lor sau din postări."),
                t("b8e49590", "Când ignori conturi, mesajele lor vor fi filtrate și trimise în partea de jos a listei cu solicitări de mesaje."),
                t("ec202165", "Află mai multe"),
                t("gde6b425", function (e) {
                    return e.name + " a fost ignorat";
                }),
                t("e308019b", function (e) {
                    return "S-a anulat ignorarea pentru " + e.name;
                }),
                t("hfb77cf6", "Siguranță"),
                t("f350f0c0", "Recomandări"),
                t("fd3369a2", "Selectează ce limbi dorești să includă postările, persoanele și tendințele recomandate."),
                t("hfc86556", "Ignorate"),
                t("dae57a42", "Permite tot"),
                t("i7cbc154", "Permite o parte"),
                t("d623aecc", "Distribuie un cont cu persoanele care au roluri delegate."),
                t("f3029d5c", "Când această setare este activată, persoanele te pot invita să distribui contul lor."),
                t("cd1305e8", "Permite altora să te invite la contul lor"),
                t("j339ef22", "Permite oricărei persoane să te invite"),
                t("g4b0c2dc", "Permite să fii invitat doar de persoanele pe care le urmărești"),
                t("d9aef256", "Delegările tale"),
                t("afb3ccf6", "Nu permite"),
                t("dfae5248", "Nu vrei să permiți altora să te invite la contul lor?"),
                t("b9c91524", "În viitor nu vei primi invitații pentru alte delegări. Vei putea accesa în continuare delegările tale existente."),
                t("c349b958", "Invită un membru"),
                t("e177f72a", "Invită alte persoane să acționeze în numele contului tău și să gestioneze rolurile contului. Membrii pot trimite mesaje directe, pot publica postări și pot crea și vizualiza Liste."),
                t("cd5c5e73", function (e) {
                    return "Poți avea doar " + e.numDelegatesLabel + " deleg" + r(e.numDelegates, "ări", "at", "ări");
                }),
                t("efee0a50", "Invită un membru la acest cont"),
                t("ja0a1aa6", "Invită un contributor la acest cont"),
                t("db4f623a", "Atribuie un rol acestui membru"),
                t("be7350e3", function (e) {
                    return "Vrei să atribui utilizatorului @" + e.screenName + " rolul de administrator?";
                }),
                t("b7aa7642", "Invitația a fost trimisă"),
                t("edbca224", "Trimite invitația"),
                t("f4834ca6", "Invită încă un membru"),
                t("cb04a824", "Contributor"),
                t("d4b3abde", "Contributorii pot trimite mesaje directe, pot publica postări și pot crea Liste. De asemenea, contributorii pot vizualiza mesajele directe, postările și Listele aferente contului."),
                t("b92e2700", "Administratorii au aceleași permisiuni ca și contributorii. De asemenea, ei pot invita sau elimina contributori și pot vizualiza analiza postărilor."),
                t("hbbbf908", "Administratorii pot invita alți contributori la acest cont și vizualiza analiza postărilor. Asigură-te că atribui rolul persoanei corecte."),
                t("d8eda249", function (e) {
                    return "După ce @" + e.screenName + " acceptă invitația, va putea contribui la acest cont deoarece va avea permisiuni actualizate.";
                }),
                t("b5faf216", "Acest membru nu permite invitații pentru delegare."),
                t("hcc3b4ce", "Acest membru este blocat de contul tău."),
                t("ace0f0a4", "Acest membru limitează cine îl poate invita să delege."),
                t("c2e8f726", "Administratori"),
                t("fade0942", "De asemenea, administratorii pot invita sau elimina contributori la/de la cont și pot vizualiza analiza postărilor."),
                t("b7d6e5d6", "Contributori"),
                t("cd76a282", "Nu a fost adăugat încă niciun membru"),
                t("db25d796", "Modifică rolul acestui membru"),
                t("e4133790", "Rol actualizat"),
                t("a1a27c26", "Modifică rolul"),
                t("fd7b1b1c", "Înapoi"),
                t("ec67d021", function (e) {
                    return "@" + e.screenName + " poate acționa în numele acestui cont cu noile sale permisiuni.";
                }),
                t("h502484e", "Invitație în așteptare"),
                t("a171ca7c", "Anulează invitația de membru"),
                t("f68f079c", "Schimbă rolul"),
                t("b2794e9e", "Elimină din grup"),
                t("gca83d6a", "Nu va mai fi administrator pe acest cont."),
                t("b8cac21c", "Nu va mai fi contributor pe acest cont."),
                t("hd67c2e8", "Anulează invitația"),
                t("f0bd8ca9", function (e) {
                    return "Vrei să elimini pe @" + e.screenName + "?";
                }),
                t("a33eba47", function (e) {
                    return "Anulează invitația pentru @" + e.screenName + "?";
                }),
                t("d472c9eb", function (e) {
                    return "@" + e.screenName + " a fost eliminat din grup";
                }),
                t("h5951997", function (e) {
                    return "S-a anulat invitația pentru @" + e.screenName;
                }),
                t("a44c6034", "Invitații în așteptare"),
                t("e39bc936", "În calitate de membru, poți trimite mesaje directe, poți publica postări și poți crea și vizualiza Liste; de asemenea, administratorii pot invita sau elimina contributori la/de la cont și pot vizualiza analiza postărilor."),
                t("h0d3bddc", "Acces administrator"),
                t("c54aafb0", "Acces contributor"),
                t("idc35f32", "Nu ai fost delegat la niciun cont"),
                t("fab787b4", "Ieși din cont"),
                t("bfbe9620", "Vizualizează membri"),
                t("d52a2b36", "Nu vei mai fi administrator pe acest cont."),
                t("df515932", "Nu vei mai fi contributor pe acest cont."),
                t("cd00ea21", function (e) {
                    return "Vrei să părăsești contul @" + e.screenName + "?";
                }),
                t("efa88ab1", function (e) {
                    return "@" + e.screenName + " a ieșit";
                }),
                t("c6dae164", "Acceptă invitația"),
                t("f8376170", "Respinge invitația"),
                t("a68c45e4", "Respinge"),
                t("aa35b48d", function (e) {
                    return "Vrei să respingi invitația de la @" + e.screenName + "?";
                }),
                t("ed2a4b05", function (e) {
                    return "Invitație de la membru la @" + e.screenName + " refuzată";
                }),
                t("e73f9635", function (e) {
                    return "Invitație de la membru la @" + e.screenName + " acceptată";
                }),
                t("d2da668c", "Deleagă membri"),
                t("ddf27b8e", "Invită un contributor"),
                t("jba63182", "Vizualizează rolurile membrilor pe cont. Membrii pot trimite mesaje directe, pot publica postări și pot crea și vizualiza Liste."),
                t("af59527e", "Vizualizează rolurile membrilor și invită contributori la cont. Membrii pot trimite mesaje directe, pot publica postări și pot crea și vizualiza Liste."),
                t("eafcc76a", "Ce poate vizualiza această aplicație..."),
                t("j3998a16", "Ce poate face această aplicație..."),
                t("a6845663", function (e) {
                    return "Ai aprobat aceste permisiuni ale aplicației la " + e.date;
                }),
                t("b2347f7c", "Se încarcă datele aplicației"),
                t("e1fda16e", "Nu ai conectat această aplicație"),
                t("b8f3ed46", "Atunci când conectezi o aplicație terță la contul X, acorzi aplicației respective acces să îți utilizeze contul."),
                t("gb8d09ba", "Are acces la adresa ta de e-mail"),
                t("g6dc09a0", "Permisiuni"),
                t("a6e6e898", "Doar citire"),
                t("cde3b9ae", "Citire și scriere"),
                t("g0d7813a", "Citire, scriere și mesaje directe"),
                t("c9b35b9e", "Citește datele tale de publicitate"),
                t("e0191264", "Citește, creează și gestionează datele tale de publicitate"),
                t("b73e1e8a", "Află cum se revocă accesul"),
                t("c174e46e", "Afișează mai puțin"),
                t("a39075ff", function (e) {
                    return "încă " + e.n;
                }),
                t("da6cdba8", "Revocă permisiunile aplicației"),
                t("ef1d3dcc", "Raportează aplicația"),
                t("d64e29c6", "Deconectează-te de la serviciul afișat"),
                t("idfa01cc", "Te deconectezi de la dispozitivul afișat?"),
                t("f400075e", "Astfel, sesiunea ta X activă se va încheia și va trebui să te reconectezi pentru a începe una nouă."),
                t("e04ba39c", "Data și ora"),
                t("eed75824", "Ți-ai încheiat sesiunea activă de X."),
                t("ddcd3d26", "Se încarcă datele sesiunii"),
                t("d2f0f3fe", "Nu putem găsi această sesiune"),
                t("ga05517a", "Nu ai creat încă rapoarte"),
                t("ea1715c0", "Când vei face acest lucru, acestea se vor afișa aici."),
                t("b70a2cde", "Apelăm la tehnologie pentru a putea identifica conținutul media sensibil. Prin urmare, chiar dacă ne îmbunătățim tehnologia în permanență, nu identificăm întotdeauna corect fiecare situație."),
                t("ee320a07", "politica noastră privind conținutul media sensibil"),
                t("ffeb836a", "Setările sunt indisponibile"),
                t("f2fb9746", "Aceste setări nu sunt disponibile deoarece se aplică modulelor cookie neesențiale. Deoarece ai optat să renunți la acestea, folosim doar module cookie care colectează datele necesare de pe dispozitivul tău."),
                t("aa4342be", "Violență explicită"),
                t("jfec3aa0", "Conținut pentru adulți"),
                t("j6bacd6a", "Ascunde conținutul media marcat drept violență grafică până alegi să îl vizualizezi. Pe X pentru iOS, acest conținut media nu va fi afișat deloc."),
                t("a73e66a8", "Ascunde conținutul media marcat drept conținut pentru adulți până alegi să îl vizualizezi. Pe X pentru iOS, acest conținut media nu va fi afișat deloc."),
                t("fef1b8dc", "Ascunde conținutul media marcat drept sensibil până alegi să îl vizualizezi. Pe X pentru iOS, acest conținut media nu va fi afișat deloc."),
                t("d0a5a1c0", "Avertisment"),
                t("ga197e26", "Afișează tot"),
                t("eb723386", "Nu afișa niciodată asta"),
                t("ea31c622", "Aici este inclus orice conținut media care prezintă în detaliu moarte, violență, leziuni fizice grave sau proceduri medicale."),
                t("e40985c4", "Aici este inclus conținutul media, produs și distribuit cu consimțământ, de natură pornografică sau al cărui scop este de a provoca excitare sexuală."),
                t("h7e0672b", "setările pentru conținut media"),
                t("de9f111a", "Gestionează abonamentul tău curent"),
                t("d5839f9e", "Consultă condițiile sau gestionează-ți abonamentul din contul Stripe."),
                t("a840c22c", "Gestionează abonamentul Premium existent"),
                t("e31456f8", "Schimbă nivelul"),
                t("a7c4ecea", "Bucură-te de o cronologie Pentru tine fără reclame, deblochează toate caracteristicile și obține cea mai mare prioritizare a răspunsurilor."),
                t("h15cc518", "Explorează opțiunile de niveluri și alege dintre planul lunar sau cel anual."),
                t("ce70c590", "Gestionează ecusoanele de afiliere"),
                t("a49e1b2a", "Sortează-ți afilierile"),
                t("e2daf93c", "Primul ecuson va fi afișat în cadrul tuturor postărilor."),
                t("ab8089ea", "Reordonează"),
                t("e0221c42", "Ai parte de o experiență de citire mai bună pe X și în afara lui."),
                t("adcaa214", "Vezi cele mai distribuite articole de la persoanele pe care le urmărești."),
                t("b62d6e4c", "Cititor"),
                t("acf63cd2", "Selectează dimensiunea de text preferată când citești fire. Activează funcția Cititor selectând buton carte din orice postare aflată într-un fir."),
                t("e5fff0c8", "Abonamentul tău este activ."),
                t("ac057b4e", "Pentru a-ți anula abonamentul gratuit pentru interacțiune pe X, contactează asistența"),
                t("ib8ebf3b", function (e) {
                    return "Se pare că ai cumpărat acest abonament pe un dispozitiv " + e.mobilePlatform + ". Va trebui să gestionezi sau să anulezi abonamentul tău de pe acea platformă.";
                }),
                t("i8132774", "Conținut bonus pentru cei mai implicați urmăritori ai tăi"),
                t("a1222584", "Câștigă bani chiar din conținutul tău"),
                t("df837dac", "Venit câștigat estimat / Prag de plată"),
                t("df29646e", "Prag de plată"),
                t("b0ac642a", "Poate dura până la 90 de zile până când plățile vor fi depozitate în contul tău."),
                t("c747df1c", "Configurează detaliile de plată"),
                t("ac814a76", "Nu ai configurat încă detaliile de plată."),
                t("f139168e", "Tablou de bord câștiguri"),
                t("ee0510c2", "Istoric plăți"),
                t("c9b82b4c", "Candidatură acceptată · Creează-ți Abonamentul"),
                t("ibb5e1c8", "Candidatură respinsă"),
                t("b255df58", "Candidatură trimisă · Se așteaptă examinarea"),
                t("b3f834c8", "Candidatură pusă în lista de așteptare"),
                t("i14be2c6", "Venit realizat estimat"),
                t("fd74390a", "Identitatea creatorului verificată"),
                t("e8dc82e2", "Programe active"),
                t("c12c5eb6", "Programe disponibile"),
                t("j53f5eb0", "Creatorii eligibili se pot înregistra pentru abonamente lunare și cota-parte din venituri din publicitate."),
                t("e9c1273a", "Creatorii eligibili se pot înregistra pentru abonamente lunare și cota-parte din venituri pentru creatori."),
                t("jd176c82", "Plățile nu sunt acceptate în zona ta"),
                t("d6ff74ca", "Din păcate, furnizorul tău de plăți nu acceptă plățile către țara ta. Anumite programe de monetizare nu sunt disponibile."),
                t("e89cdac0", "Gestionează contul de plăți"),
                t("dd7a54b4", "Configurează-ți contul Stripe"),
                t("jff3ab68", "Confirmarea identității"),
                t("j2876824", "Verifică-ți identitatea"),
                t("ebd06fb0", "Document de identitate trimis"),
                t("f65b960c", "Verificăm documentul tău de identitate emis de o autoritate guvernamentală, pentru programul pentru Creatori."),
                t("i4a1e936", "Pentru a încasa plata, asigură-te că asociezi sau creezi un nou cont Stripe"),
                t("f5931b6a", "Verificarea identității este obligatorie pentru a participa la programul pentru Creatori. Dacă ți-ai trimis anterior documentul de identitate pentru programul pentru Creatori, nu mai este necesar să îl trimiți din nou."),
                t("c8798a95", "aici"),
                t("d809ac49", "aici"),
                t("bbe09d38", "Candidatură acceptată · Trebuie să se efectueze configurația în magazinele de aplicații"),
                t("efbc5066", "Verificare identitate în așteptare"),
                t("hc7631da", "Nu ai finalizat configurarea contului tău Stripe"),
                t("h72d71a2", "Eligibil"),
                t("e12b0b16", "Momentan, nu ești eligibil"),
                t("a1e57106", "Incomplet"),
                t("i51b4e22", "Respinsă"),
                t("h5bd7160", "Acest cont nu este eligibil pentru verificarea identității."),
                t("e32040c4", "Trebuie să finalizezi verificarea identității pentru a primi plăți."),
                t("j8769b42", "Verificăm documentul tău de identitate emis de o autoritate guvernamentală."),
                t("be955554", "Cota-parte din venituri pentru creatori"),
                t("b03a3d62", "Cota-parte din venituri din publicitate"),
                t("cbbe29c2", "Vei putea primi plăți."),
                t("g97a2d6c", "Află mai multe"),
                t("f30774ea", "Află mai multe despre politicile și programele noastre de monetizare aici."),
                t("aea0b11a", "Câștigă pe X, permițând tuturor persoanelor să se aboneze la conținutul tău lunar."),
                t("bce47f48", "Câștigă-ți traiul pe X din interacțiunile cu postările tale."),
                t("h7a68080", "Câștigă venituri din reclamele difuzate în răspunsurile la postările tale."),
                t("eefd091e", "Verificarea identității este obligatorie"),
                t("cd616a5a", "Verificarea identității este obligatorie pentru a participa la programul pentru creatori."),
                t("cce8c40a", "Verificare identitate"),
                t("ja73ebac", "Venit"),
                t("h16eeb42", "Gestionează"),
                t("bc43a32e", "Activitate recentă"),
                t("i4c3b046", "Nu ai monede noi în acest moment."),
                t("ca516a66", "Vizualizare toate activitățile"),
                t("ee9ea930", "Diamante"),
                t("cf3b535e", "Diamantele se acumulează prin primirea monedelor în cadrul postărilor eligibile. Banii proveniți din diamante se adaugă la câștigurile estimate."),
                t("fbb7764b", function (e) {
                    return e.count + " Moned" + r(e.count, "e", "ă", "e");
                }),
                t("e70a07b2", "Anonim"),
                t("c76972f0", "De la ultima plată"),
                t("c219a552", "Tot timpul"),
                t("f3ce76c0", "Ai nevoie de mai mult ajutor?"),
                t("i8982e7e", "Dacă ai întrebări, accesează Centrul nostru de ajutor sau contactează-ne."),
                t("fbbfe8aa", "Dezactivare Monede"),
                t("e4f29140", "Dacă dezactivezi, vei fi eliminat din programul Monede și nu vei mai fi eligibil pentru a primi monede."),
                t("e58e85d2", "Continuă spre dezactivare"),
                t("be8e87b4", "Dezactivezi Monedele?"),
                t("bee26fa8", "Da, dezactivează"),
                t("f0145c9a", "Monedele sunt acum dezactivate"),
                t("a22f6808", "Toată activitatea"),
                t("g1b8020c", "Ultimele 30 de zile"),
                t("jb13b840", "Toate"),
                t("b4f24360", "Nu ai primit monede noi în ultimele 30 de zile."),
                t("d59dbf8a", "Rezumat"),
                t("g652fc4c", "Nu ai istoric de plăți luna aceasta."),
                t("d55e017a", "Luna aceasta"),
                t("f883322d", function (e) {
                    return "ID tranzacție " + e.transactionId;
                }),
                t("d978f43e", "Abonamente noi"),
                t("d113fc10", "Nu ai Abonamente noi în momentul de față."),
                t("h7a41c02", "Reînnoiri"),
                t("eedf2eaa", "Nu ai reînnoiri în momentul de față."),
                t("d93308d8", "Vizualizează toate tranzacțiile"),
                t("a23e724a", "Acest cont nu este disponibil."),
                t("a384fda0", "Prezentare generală abonament"),
                t("i4313618", "Prezintă-te și descrie la ce se pot aștepta persoanele care te super-urmăresc."),
                t("c0348964", "Introducere"),
                t("g522fd30", "Avantaje pentru utilizatorii abonați"),
                t("e85471c6", "Ecuson de utilizator abonat"),
                t("fd75ca92", "Vei primi un ecuson public de utilizator abonat, care te va ajuta să fii observat mai ușor, să poți trimite mesaje în chat și să te conectezi."),
                t("ia9c37c4", "Tarif"),
                t("f5be83b2", "Alătură-te Comunității"),
                t("e4ee8c6a", "Poți împărtăși idei, te poți inspira și te poți conecta cu alți creatori în Comunitatea de feedback cu creatorii de Abonamente."),
                t("i3a90dee", "Dezactivează Abonamente"),
                t("e261e6e6", "Prin dezactivare, contul tău va fi eliminat din programul Abonamente și îți vei pierde toți Abonații."),
                t("ca5ca5ee", "Vezi previzualizarea"),
                t("a329ce88", "Adaugă o descriere..."),
                t("f0c99eff", function (e) {
                    return "- @" + e.screenName;
                }),
                t("g40b2b30", "Activare previzualizări postări"),
                t("c1521804", "Previzualizările postărilor tale de abonat vor fi afișate persoanelor neabonate."),
                t("jd0f1ac0", "Vrei să dezactivezi Abonamente?"),
                t("c6c27fc8", "Dezactivarea funcției Abonamente este permanentă. Contul tău va fi eliminat din programul Abonamente. Pentru a reveni în program, va trebui să trimiți din nou o solicitare în acest sens."),
                t("f82a23ec", "Abonamente este acum dezactivat"),
                t("a4c6e458", "Ai setat taxa lunară de Abonament la:"),
                t("be54a313", function (e) {
                    return e.price + "/lună";
                }),
                t("hadd463a", "Cere o modificare de preț"),
                t("b0728b5c", "Anulează modificarea de preț"),
                t("aea9f79c", "Ai o modificare de preț în așteptare, de:"),
                t("c701e5cc", "Modificările pe care le-ai făcut nu vor fi salvate."),
                t("a649778c", "Continuă să editezi"),
                t("d1a683b8", "Despre creatorii de Abonamente"),
                t("iba08a94", "Cum arată totul?"),
                t("a5f55bfa", "Asta vor vedea potențialii Abonați când vor accesa pagina ta. Poți reveni oricând pentru a actualiza descrierile tale."),
                t("b600eb88", "Găsește-ți anturajul și bucură-te de recunoaștere"),
                t("da48ebf6", "Primești conținut bonus când te înregistrezi"),
                t("f324fb6c", "Abonament"),
                t("c654a3aa", "Numai Abonații pot vedea această postare"),
                t("d409ce3c", "Susține-ți persoanele preferate de pe X pentru a primi conținut bonus și avantaje suplimentare."),
                t("a4ed9072", "Adaugă o introducere..."),
                t("af5b098e", "Avantajele oferite de Abonamente"),
                t("gf32cca2", "Descrie avantajele pe care le vei oferi"),
                t("j8ba99b4", "Oferă oamenilor detalii despre ce îi așteaptă în fiecare lună cu un scurt rezumat al conținutului bonus pe care îl vei distribui."),
                t("j679dcda", "Vezi exemplele"),
                t("j325331a", "Spune salut, nu-ți va lua decât un minut"),
                t("e18e8da8", "Surprinde-i plăcut pe posibilii tăi Abonați, cu un scurt mesaj introductiv."),
                t("fce14f56", "Preț nou"),
                t("b0c58272", "Alege un nou preț lunar. Procesarea modificărilor de preț durează 3-7 zile lucrătoare. Este posibil ca în cazul creșterilor de preț să fie necesar acordul abonaților existenți."),
                t("d5737f0e", "Abonament lunar"),
                t("edc014fb", "Află mai multe"),
                t("h810143c", "Detalii"),
                t("ga57b610", "Data cumpărării"),
                t("h3b68828", "Tip de cumpărare"),
                t("cc2aa67a", "Platformă de cumpărare"),
                t("b313bb24", "Plată"),
                t("e5188502", "Toate vânzările sunt finale"),
                t("bf364d62", "Toate tranzacțiile"),
                t("ed3efef0", "Nu ai Abonamente noi în ultimele 30 de zile."),
                t("b5f9ec14", "Nu ai reînnoiri în ultimele 30 de zile."),
                t("d8eed490", "Gestionează aspectul orientat spre public al profilului tău."),
                t("e26dbcd0", "Ascunde-ți abonamentele de creator"),
                t("aea7dda8", "Lista cu abonamentele de creator din profilul tău va fi vizibilă doar pentru tine."),
                t("j3d2cfc4", "Permite urmăritorilor să vadă Spațiile pe care le asculți"),
                t("d9588ae6", "Nu uita: chiar dacă această setare este dezactivată, vei fi vizibil tuturor când ești într-un Spațiu. Urmăritorii tăi pot vedea tot timpul în ce Spații ești gazdă, co-gazdă sau vorbești."),
                t("i84c5de8", "Aplicații de creator în curând"),
                t("b8922f7e", "Revino în curând pentru a putea trimite cererea de alăturare la programul Abonamente."),
                t("ad588be6", "Îndeplinești criteriile de eligibilitate!"),
                t("f6443bd2", "Vești bune − îndeplinești condițiile noastre de eligibilitate pentru Abonamente. Ești pregătit să te înscrii?"),
                t("a3a20a10", "Revino mai târziu"),
                t("b8d29e4a", "Din păcate, momentan, nu îndeplinești criteriile noastre de eligibilitate pentru Abonamente."),
                t("d92c1d0a", "Continuă la înscriere"),
                t("fde27650", "Condițiile pentru Abonamente"),
                t("c5f89b06", "Devino utilizator verificat abonându-te la Premium"),
                t("ff9f4475", function (e) {
                    return e.minFollowersCount + " (de) urmăritori verificați";
                }),
                t("b747ce3a", "Activ în ultimele 30 de zile"),
                t("c27f57ac", "Trebuie să ai cel puțin 18 ani"),
                t("h63d2973", function (e) {
                    return e.count + " (de) impresii organice în ultimele 3 luni";
                }),
                t("ef606fca", "Abonamente plătite pentru cei mai implicați urmăritori ai tăi"),
                t("e533715e", "Verifică eligibilitatea"),
                t("d8671da2", "Câștigă cu X"),
                t("d126a504", "Oferă-le urmăritorilor favoriți ceva în plus și câștigă bani lună de lună. "),
                t("d08d0bb2", "Conținut bonus"),
                t("ef29d2c2", "Împărtășește gânduri, idei și opinii spontane cu postări suplimentare și răspunsuri personale."),
                t("if12af7c", "Configurare abonamente"),
                t("cc4c1a14", "Configurare preț"),
                t("e1453e45", "Află mai multe"),
                t("aa7e35ee", "Contul tău nu a fost selectat"),
                t("c984cc62", "Contul tău nu a fost selectat de data aceasta. Rămâi conectat pentru viitoare oportunități de participare."),
                t("gd115e64", "Înscrie-te la Abonamente"),
                t("a9f08d5c", "Răspunsurile la întrebările de mai jos sunt doar în scop de evaluare și nu vor fi afișate pe profilul tău."),
                t("c3f8d650", "Descrie conținutul"),
                t("j89dd344", "Dă-ne un exemplu de conținut pe care l-ar include abonamentul tău. Cu cât mai specific, cu atât mai bine."),
                t("d19cc490", "Adaugă un exemplu de conținut "),
                t("c737c1b2", "Spune-ne despre experiența ta"),
                t("f98e5fd4", "Creezi conținut plătit pe alte platforme? De ce crezi că utilizatorii se vor abona?"),
                t("c41b01be", "Adaugă o descriere"),
                t("e2aad0fe", "Nu voi posta conținut explicit sau pentru adulți în cadrul abonamentului"),
                t("d1b983ef", function (e) {
                    return "Trebuie să aibă minimum " + e.count + " (de) caractere";
                }),
                t("d3d6c52c", "Candidatura ta a fost trimisă"),
                t("cb27c0ba", "Ți-am confirmat prețul. Aplicația ta va fi revizuită și, dacă primești aprobarea, îți vom trimite o notificare de îndată ce aceasta intră în direct."),
                t("j274e6aa", "Ești pe lista de așteptare"),
                t("j006be54", "Locurile din grupul nostru de testare pentru Abonamente s-au ocupat repede, dar te-am adăugat pe lista de așteptare și te vom anunța când devin disponibile locuri noi."),
                t("d5cb1114", "Începe cu Abonamente"),
                t("j2f622ec", "Ai fost selectat să faci parte din grupul nostru de testare! Configurează acum detaliile de Abonament și te vom anunța când îl lansăm."),
                t("e2cd7000", "Încă puțin..."),
                t("b3629b92", "Mai ai de parcurs câțiva pași pentru a termina configurarea Abonamentului tău."),
                t("f4619a62", "Acceptă și continuă"),
                t("c5625f84", "Descrie avantajele oferite de Abonament"),
                t("c7289544", "Setează un preț pentru Abonament"),
                t("aaf68c58", "Confirmă detaliile tale de plată"),
                t("b8a69fa0", "Condițiile pentru Abonamente"),
                t("ad4a92a2", "Ecuson"),
                t("d5aa8de0", "Oferă ecusoane Abonaților tăi"),
                t("j0bbda92", "Aici nu este nevoie de nicio modificare sau editare. Toți Abonații tăi vor primi automat un ecuson public atunci când se abonează."),
                t("e18b7a72", "Revizuiește"),
                t("be76dc34", "Adaugă o descriere"),
                t("ef5406e4", "Adaugă o introducere"),
                t("ea8a3d2e", "Configurarea prețului"),
                t("f77bb179", function (e) {
                    return "Confirmă alegerea de " + e.price;
                }),
                t("g2a6f160", "Verifică din nou și confirmă prețul Abonamentului tău. Nu vei putea să revii și să modifici prețul după confirmare."),
                t("g767d1c9", "Notă: nu vei putea modifica acest preț"),
                t("df057690", "Alege cât să plătească Abonații tăi"),
                t("g5923869", function (e) {
                    return e.price + " pe lună";
                }),
                t("f025ab3a", "Creează o bază mai mare, mai amplă"),
                t("c962df0e", "Postări și interacțiuni ocazionale cu Abonații"),
                t("ib075804", "Extinde-ți baza și mărește-ți venitul"),
                t("fc04f3a6", "Postări și interacțiuni moderate cu Abonații"),
                t("c246656e", "Creează o bază intimă"),
                t("h0c5405c", "Postări și interacțiuni regulate cu Abonații"),
                t("f2d2153d", function (e) {
                    return "Majoritatea creatorilor percep " + e.price + ", dar tu poți alege orice preț dorești";
                }),
                t("f1cb36b8", "Configurarea plăților"),
                t("e20f6662", "Ești gata!"),
                t("g88e146c", "Your account is pending"),
                t("dfe973a6", "Thanks for providing your payout details. You’ll receive a notification with next steps as soon as Stripe has reviewed your information."),
                t("ja884230", "Configurează detaliile tale de plată"),
                t("a3f6a966", "Conectează contul Stripe"),
                t("cb031e44", "Se va realiza redirecționarea către Stripe pentru a-ți conecta contul. Dacă ai un cont Stripe existent pe care dorești să îl utilizezi, introdu adresa de e-mail a contului respectiv atunci când Stripe îți solicită o adresă de e-mail. Notă: este posibil ca adresa ta de e-mail pentru Stripe să fie diferită de cea pentru X."),
                t("ebfb897c", "Exemple"),
                t("dc4feb1a", "Nu ești sigur ce să spui?"),
                t("h9b9d486", "Tu decizi ce tip de conținut oferi Abonaților. Iată câteva exemple care te vor ajuta să începi."),
                t("ic130fd6", "Vei avea acces la conținut interesant din culise, acces în premieră la secțiuni din cărțile mele și alte proiecte, precum și sesiuni de întrebări lunare."),
                t("dd913e24", "Vei beneficia de opinii spontane, gânduri neregizate și conținut suplimentar din partea mea."),
                t("b737ee66", "Pregătește-te pentru o experiență VIP. Imaginează-ți: conținut exclusiv pentru Abonați cum ar fi sondaje, videoclipuri și oferte."),
                t("a0bb2076", "Păstrează mesajul introductiv scurt și concis, vei putea descrie conținutul mai târziu. Iată câteva exemple care te vor ajuta să începi."),
                t("fe076612", "Bună și bine ai venit pe pagina mea Abonamente! Mă bucur tare mult că ești aici. Îți mulțumesc că mă ajuți să fac ce-mi place."),
                t("g7f66daa", "Ce mai faci? Îți mulțumesc pentru interesul față de Abonamentul meu. Cred că o să-ți placă ce ți-am pregătit."),
                t("hbe4f99e", "Salut! Abia aștept să împărtășesc conținut secret cu voi, dar și să vă cunosc mai bine :)"),
                t("fb278c82", "Ce este previzualizarea?"),
                t("j6cab6ec", "Iată ce văd oamenii înainte de a se abona la contul tău. Alege și editează descrierile tale până când le faci perfecte."),
                t("f2b1e83e", "Grok și colaboratori terți"),
                t("e110a46c", "Șterge istoricul conversației"),
                t("ebc4fda0", "Urmează să ștergi istoricul de conversații cu Grok. Nu vei putea niciodată să accesezi din nou aceste conversații."),
                t("c90fe716", "Ștergi conversațiile?"),
                t("a8d516a4", "X poate partaja cu xAI datele tale publice de pe X, precum și interacțiunile ca utilizator, informațiile introduse și rezultatele obținute cu Grok pe X, pentru a instrui și a optimiza Grok și alte modele AI dezvoltate de xAI. Acest lucru ne ajută să îți îmbunătățim în permanență experiența de utilizator."),
                t("a127886c", "Permite-i lui Grok să țină minte istoricul conversației"),
                t("f49b39b8", "Permite-i lui Grok să țină minte detalii din conversațiile anterioare. Poți șterge conversații individuale, pentru ca Grok să uite detaliile asociate."),
                t("b7de9ad2", "Permite ca X să-ți personalizeze experiența cu Grok"),
                t("ed141096", "Permite ca datele tale de pe X, precum şi interacțiunile, informațiile introduse și rezultatele oferite de Grok să fie utilizate pentru a-ți personaliza experiența cu Grok. X poate partaja cu xAI datele tale de pe X, precum și interacțiunile ca utilizator, informațiile introduse și rezultatele oferite de Grok, pentru a-ți personaliza experiența cu Grok și alte modele AI dezvoltate de xAI. Acest lucru ne ajută să îți îmbunătățim în permanență experiența de utilizator. "),
                t("ecdbece0", "Ai fost înscris cu succes în programul Monede."),
                t("db3f0bbe", "Ajută creatorii să câștige bani din conținutul lor."),
                t("a1f40cf8", "Sunt de acord"),
                t("d604fb32", "Condițiile pentru creatori"),
                t("d520d188", "Primește monede"),
                t("ea770766", "Monedele sunt bunuri virtuale care pot fi primite în cadrul postărilor eligibile. Pe măsură ce primești monede, acestea se acumulează în diamante, care pot fi încasate."),
                t("d27f5ac6", "Venit pasiv"),
                t("h1d66df0", "Câștigă bani în mod simplu, postând conținut excelent pe X. Urmăritorii te pot recompensa acum, oferindu-ți monede."),
                t("f85fb0a2", "Conectează-te cu publicul tău"),
                t("d1433e24", "Monedele reprezintă o modalitate distractivă prin care fanii te pot recompensa pentru că ai creat conținutul pe care aceștia îl îndrăgesc. Acestea îți oferă oportunitatea de a crea relații mai strânse cu urmăritorii și fanii tăi."),
                t("e6ba42de", "Cota-parte din venituri din publicitate"),
                t("ebc16756", "Cotă-parte din venituri pentru creatori"),
                t("da4cd6fa", "Din păcate, nu ești încă eligibil pentru Cota-parte din venituri din publicitate. Va trebui să întrunești cerințele de mai jos pentru a participa:"),
                t("b2961492", "Din păcate, nu ești încă eligibil pentru Cota-parte din venituri pentru creatori. Va trebui să întrunești cerințele de mai jos pentru a participa:"),
                t("d3789528", "Despre Cota-parte din venituri din publicitate"),
                t("aa0ff456", "Despre Cota de venituri pentru creatori"),
                t("bf214f48", "În regulă"),
                t("b2b4d592", "Abonează-te la Premium sau la Organizații verificate"),
                t("fbb03ba6", "500 de urmăritori Premium"),
                t("hb4c5169", function (e) {
                    return "Să ai cel puțin " + e.impression_number + " mil. de impresii la postările tale în ultimele 3 luni";
                }),
                t("f91685ba", "Ești eligibil automat pentru a fi remunerat pentru postările tale!"),
                t("a9f0e0fa", "Ca abonat Premium sau al programului Organizații Verificate, ești automat eligibil pentru Cota-parte din venituri din publicitate. Plata ta se calculează în funcție de numărul de impresii din partea conturilor verificate, la reclamele afișate în răspunsurile la postările tale."),
                t("c694e3e4", "Deoarece ești un abonat Premium sau o Organizație verificată, ești eligibil automat pentru Cota-parte din venituri pentru creatori."),
                t("acd1a1be", "Configurează detaliile de plată acum pentru a primi plăți pe viitor."),
                t("f7e11f70", "Alătură-te și verifică-ți documentul de identitate"),
                t("c8169274", "A apărut o problemă la salvarea înscrierii. Încearcă din nou mai târziu."),
                t("c3f93665", "condițiile pentru Cota-parte din venituri pentru creatori"),
                t("a249ce04", "condițiile pentru Cota-parte din venituri din publicitate"),
                t("d085a144", "Tablou de bord Câștiguri creator"),
                t("a5204850", "Total venituri"),
                t("ada650cf", function (e) {
                    return "Perioada de plată: " + e.fromDate + " – " + e.toDate;
                }),
                t("aa732c0a", "Cota-parte din venituri din reclame video"),
                t("g88c1108", "Despre Cota-parte din venituri din reclame video"),
                t("d4bb7e9c", "Condiții pentru Cota-parte din venituri din reclame video"),
                t("dc535dbe", "Câștigă mai mult pentru conținutul tău de pe X, înscriindu-te în programul Cota-parte din venituri din reclamele pre-roll video."),
                t("eb6d9270", "Primește bani pentru conținutul tău"),
                t("a778472e", "Detalii:"),
                t("bde8446e", "Selectează „Acceptare și trimitere” pentru a te înscrie la programul Cota-parte din venituri din publicitate."),
                t("a415fd3a", "Acceptare și trimitere"),
                t("fbba9725", "regulile X"),
                t("f3dd8c4a", "condițiile pentru Cota-parte din venituri din pubclitate și standardele de monetizare pentru creatori."),
                t("hd885ae0", "Vezi impactul tău"),
                t("je4ccd3a", "Centru de ajutor pentru Articole fără reclame"),
                t("i6cb493e", "Gestionează modul în care afilierile tale sunt afișate"),
                t("e4fde082", "Setează un cronometru pentru a anula postările trimise și alege tipurile de postări pe care dorești să le anulezi."),
                t("dcfc6540", "Postări originale"),
                t("be077e8c", "Fire"),
                t("f3429f2c", "Sondaje"),
                t("i647ba8a", "Perioadă de anulare postări"),
                t("d195528e", "Selectează tipurile de postări pe care vrei să le anulezi înainte să devină publice, precum și perioada de anulare a acestora."),
                t("bcf3a9e6", "Gestionează setările care ajută la limitarea răspunsurilor nedorite."),
                t("c048fd3a", "Filtrează răspunsurile potențial nedorite"),
                t("dab7dac4", "Răspunsurile la postările tale care au limbaj potențial dăunător sau ofensator vor fi filtrate și vor apărea aici. Alte persoane pot vedea în continuare aceste răspunsuri."),
                t("c4c53b86", "Nu uita că apelăm la tehnologie pentru a putea identifica astfel de răspunsuri. Prin urmare, chiar dacă ne îmbunătățim tehnologia în permanență, nu identificăm întotdeauna corect fiecare situație."),
                t("dca3d2ee", "Vrei să dezactivezi filtrul de răspunsuri?"),
                t("fe440ff8", "Răspunsurile filtrate nu vor fi restaurate la postările tale."),
                t("cedbb01c", "Juridic"),
                t("b4f917d0", "Diverse"),
                t("bdfa2b8c", "Resurse suplimentare"),
                t("b8692262", "Accesează alte locuri pentru informații utile, pentru a afla mai multe despre produsele și serviciile X."),
                t("c0398892", "Note de lansare"),
                t("b833bcde", "Gestionează aspecte ale experienței tale pe X, cum ar fi limitarea contrastului între culori și a mișcării. Aceste setări afectează toate conturile X din acest browser."),
                t("d5b646be", "Vedere"),
                t("jfe6a3a0", "Mișcare"),
                t("e8c72272", "Crește contrastul culorilor"),
                t("dba2cdd2", "Îmbunătățește lizibilitatea, mărind contrastul dintre text și culorile de fundal."),
                t("d070244e", "Reduce mișcarea"),
                t("icfa5e8c", "Limitează cantitatea de animații din aplicație, inclusiv numărul de interacțiuni în direct."),
                t("ae41b002", "Limitează cantitatea de animații din aplicație, inclusiv numărul de interacțiuni în direct. Momentan, sistemul tău semnalizează reducerea mișcării. Dacă dorești să reactivezi mișcarea, dezactivează mai întâi opțiunea de aici."),
                t("h9d1cfae", "Alege să primești memento pentru descriere la imagine"),
                t("c878e9f8", "Activează un memento pentru adăugarea de descrieri la imagini înainte de a putea trimite postarea."),
                t("bbd1fc7c", "Află mai multe despre accesibilitatea la X"),
                t("ac865cf0", "Accesibilitatea la X"),
                t("d3a2bde8", "Vezi informațiile legate de contul tău, descarcă o arhivă a datelor sau află despre opțiunile de dezactivare a contului"),
                t("idca4742", "Vezi informațiile contului tău, cum ar fi numărul de telefon și adresa de e-mail."),
                t("b6ded35e", "Îți poți schimba parola oricând."),
                t("cce24bf4", "Află ce tip de informații sunt stocate pentru contul tău."),
                t("i203df96", "Află cum îți poți dezactiva contul."),
                t("f70cd5ee", "Număr de telefon"),
                t("ib6f1694", "Crearea contului"),
                t("de323650", "Feminin"),
                t("b6ab31be", "Masculin"),
                t("h3290872", "Verificate"),
                t("hbd12156", "Solicită verificare"),
                t("b7ec04f4", "Da"),
                t("f70d5780", "Da."),
                t("dc62d3c6", "Nu."),
                t("a67dbd0a", "Cont de parodie, comentarii și susținere"),
                t("a3db727e", "Gestionează-ți contul de parodie, comentarii și susținere"),
                t("eacf1990", "Adaugă-ți data nașterii la profil."),
                t("a3bf1262", "Schimbă-ți data nașterii de pe profil."),
                t("h530db16", "Postări protejate"),
                t("d6d80990", "Aceste informații se aplică la browserul sau la dispozitivul tău în timp ce ești deconectat. Pot fi diferite atunci când ești conectat."),
                t("i0d81ddb", "setările de personalizare și date"),
                t("g2a9bd3e", "Etichete pentru conturi automate"),
                t("dd9b3aae", "Ce este un cont automat?"),
                t("b80bdc40", "Conturile automate sunt programate să efectueze automat anumite acțiuni prin API X. De exemplu, distribuirea unei postări referitoare la condițiile meteorologice dintr-o regiune. Acestea sunt create și gestionate de către alte persoane pe X."),
                t("a01ac9b6", "Etichetele permit celorlalți utilizatori să vadă cine gestionează contul automat. După ce proprietarul unui cont automat și-a conectat contul de administrator, pe profilul contului automat și pe postări va apărea o etichetă."),
                t("b989e1fe", "Trebuie să îmi etichetez conturile automate?"),
                t("i2d599aa", "Cum îmi etichetez contul automat?"),
                t("gd5bed72", "Creează un cont de administrator"),
                t("g6d44432", "Un cont de administrator este contul deținut de către o persoană și folosit pentru gestionarea contului automat."),
                t("e20a69e8", "Conectează contul tău de administrator la contul automat"),
                t("d2f88358", "Conectează propriile conturi în setările tale pe pagina Automatizare."),
                t("e427f632", "Contul tău este etichetat!"),
                t("a4d7cffa", "După ce conturile sunt conectate, contul automat va avea o etichetă."),
                t("a18d6a7d", "Noile noastre reguli"),
                t("e9965c14", "întrebări frecvente privind etichetele pentru conturi automate"),
                t("ee78c192", "Ce este un cont PCF?"),
                t("c3f35e0c", "Un cont PCF descrie o altă persoană, un alt grup sau o altă organizație în profilul său, pentru a discuta, satiriza sau partaja informații despre respectiva entitate."),
                t("d019b5fa", "Trebuie să îmi etichetez contul PCF?"),
                t("dd04f24e", "Da. Eticheta pentru un cont de parodie, comentarii sau susținere asigură că celelalte persoane de pe X nu vor fi derutate de contul tău, informându-le că nu există nicio afiliere între contul tău și subiectul profilului. Dacă nu este etichetat, contul tău poate încălca politica privind autenticitatea."),
                t("hb0f8bbc", "Cum îmi etichetez contul PCF?"),
                t("g69acc5c", "Fă pur și simplu clic pe „Am înțeles” și te vom redirecționa la setările profilului tău, pentru a-ți configura o etichetă pentru cont."),
                t("d313d431", "politica privind autenticitatea"),
                t("a3f22d8e", "Selectează tipurile de notificări pe care să le primești despre activități, interese și recomandări."),
                t("bc20979a", "X și partenerii săi folosesc module cookie pentru a îți oferi un serviciu mai bun, mai sigur și mai rapid și pentru susținerea activităților noastre de afaceri. Unele module cookie sunt necesare pentru utilizarea serviciilor noastre, pentru îmbunătățirea acestora și pentru a ne asigura că acestea funcționează corect."),
                t("ge06dadc", "Permite X și partenerilor săi să utilizeze modulele cookie pentru a îți furniza anunțuri și comunicări adaptate intereselor tale."),
                t("he20de3a", "Nu permite X să utilizeze module cookie pentru a colecta date suplimentare pentru anunțuri și comunicări personalizate."),
                t("g0ec0bec", "Dezactivat"),
                t("g89f4614", "Contul tău este dezactivat"),
                t("f1768324", "Controlează modul în care X îți personalizează conținutul și în care colectează și distribuie anumite date."),
                t("ja94f34e", "Aceste setări se aplică la acest browser sau la dispozitiv atunci când ești deconectat. Ele nu au niciun efect atunci când ești conectat."),
                t("bd73f7e6", "Aceasta va activa sau va dezactiva toate setările de pe această pagină."),
                t("ddbc3288", "Date"),
                t("ae5339a0", "Vezi datele tale X"),
                t("b934e0ea", "Dezactivezi personalizarea și datele?"),
                t("i0317e0e", "În urma acestei acțiuni, ți se pot afișa postări și anunțuri mai puțin relevante."),
                t("a148acba", "Dezactivează"),
                t("aa023546", "Personalizează pe baza locurilor în care ai fost"),
                t("ced77194", "Permite utilizarea locurilor de pe web în care vezi conținut X"),
                t("fe1fc83e", "Acestea sunt intervalele de vârstă asociate ție."),
                t("bf9c74d0", "Nu utiliza aceste intervale de vârstă pentru personalizare."),
                t("cf0daa24", "Colectarea acestor informații poate dura un timp. Încearcă din nou mai târziu."),
                t("ea522535", "Află mai multe"),
                t("hf5ca8f8", "profilul tău"),
                t("d9cbe351", function (e) {
                    return e.count + " conectare " + r(e.count, "evenimente", "eveniment", "de evenimente");
                }),
                t("de90b04a", "Locuri în care ai fost"),
                t("cbd2ef59", function (e) {
                    return e.count + " " + r(e.count, "locații", "locație", "de locații");
                }),
                t("a4441bb8", "Interese de pe X"),
                t("e1c6b2d6", "Public personalizat"),
                t("ed19d10d", function (e) {
                    return e.audienceCount + " " + r(e.audienceCount, "segmente", "segment", "de segmente") + " de publicdin " + e.advertiserCount + " " + r(e.advertiserCount, "agenți", "agent", "de agenți") + " de publicitate";
                }),
                t("f00d0d03", function (e) {
                    return e.count + " " + r(e.count, "interese", "interes", "de interese");
                }),
                t("hf9c2caa", "Soliciți lista de agenți de publicitate?"),
                t("c29b7971", function (e) {
                    return "Aceasta va fi trimisă la " + e.primaryEmail + ".";
                }),
                t("b9e1cf02", "Solicitare"),
                t("a8276fac", "Solicită lista de agenți de publicitate"),
                t("g7912a84", "Am înțeles. Lista ta va fi trimisă prin e-mail când va fi gata."),
                t("d6104de0", "Poți opta să nu mai primești reclame bazate pe interese, în setările de personalizare și pentru date. Aceasta va schimba reclamele pe care le vezi pe X, însă nu te va scoate din segmentele de public ale agenților de publicitate."),
                t("ed8c03f5", "Află mai multe"),
                t("e1a4daac", function (e) {
                    return e.num_audiences + " segmente de public";
                }),
                t("acb25e32", function (e) {
                    return e.num_advertisers + " agenți de publicitate";
                }),
                t("j4fa776e", "Telefoane"),
                t("i7acdb36", "Tablete"),
                t("c112dfc8", "Desktop"),
                t("jd8607ba", "Activat la"),
                t("ea4f6c9e", "Browsere"),
                t("d750b93f", function (e) {
                    return e.count + " " + r(e.count, "browsere", "browser", "de browsere");
                }),
                t("a9783602", "Dispozitive mobile"),
                t("j043aa31", function (e) {
                    return e.count + " d" + r(e.count, "ispozitive mobile", "ispozitiv mobil", "e dispozitive mobile");
                }),
                t("ae415fd2", "Această setare este dezactivată."),
                t("a90be7b4", "Adrese de e-mail"),
                t("c0f6f911", "Activitatea din afara X"),
                t("adaafb3f", "Identitate dedusă"),
                t("f0f72665", "Identitate dedusă"),
                t("d33b4e5b", "pentru activitatea din afara X"),
                t("c4668d4f", "pentru activitatea din afara X"),
                t("df3e137b", "Află mai multe"),
                t("d1597ccb", "Află mai multe"),
                t("c1b03a07", "Află mai multe"),
                t("b056d9dc", "Aceasta este setarea principală de limbă a contului."),
                t("h68bc23c", "Aceste limbi suplimentare sunt utilizate pentru a-ți personaliza experiența."),
                t("fbf0e61e", "Dacă nu ai specificat deja un gen, acesta este cel asociat contului tău, pe baza profilului și a activităților tale. Aceste informații nu vor fi afișate public."),
                t("b4568a3a", "Adaugă sexul"),
                t("c0be743e", "Sexul a fost actualizat"),
                t("c5abae66", "Acesta este genul pe care X l-a asociat cel mai puternic cu tine."),
                t("cdb0d3e6", "Nu utiliza acest sex pentru personalizare."),
                t("j31a1aa0", "Acestea sunt locurile pe care le folosește X pentru a-ți afișa conținut mai relevant. Nu vei vedea locurile listate aici dacă ai dezactivat opțiunea „Personalizează pe baza locurilor în care ai fost”."),
                t("ddefdd1c", "Elimini locațiile vizitate?"),
                t("hea740ac", "Această acțiune va lua ceva timp și nu poate fi anulată."),
                t("a26e0d52", "Am înțeles. Aceste locații vor fi eliminate."),
                t("he447966", "Momentan nu s-au găsit locuri."),
                t("b9d98dec", "setările pentru locație"),
                t("e27e4fce", "Locație necunoscută"),
                t("ib55eb6b", "Aplicații conectate"),
                t("e5a4a539", "Află mai multe"),
                t("gc8f2e14", "Poți opta să nu primești reclame bazate pe interese în setările de personalizare și pentru date."),
                t("e6dbe66b", "Află mai multe"),
                t("d3310e49", function (e) {
                    return "Un fișier cu toate informațiile asociate contului tău va fi trimis la " + e.primaryEmail + ".";
                }),
                t("ib03e8c8", "Descarci pe acest dispozitiv un fișier cu toate informațiile asociate contului tău?"),
                t("g49741e8", "Descarcă"),
                t("dc370a0c", "Am înțeles. Datele tale vor fi trimise prin e-mail după ce sunt gata."),
                t("c07b4316", "Interesat de"),
                t("e97196fe", "Cunoscut pentru"),
                t("ja0f971c", "Acestea sunt câteva dintre interesele care considerăm că ți se potrivesc, pe baza profilului tău, a activității desfășurate și a subiectelor pe care le urmărești. Ele sunt folosite pentru a personaliza experiența ta pe X, inclusiv reclamele pe care le vezi. Poți ajusta interesele dacă ceva nu ți se pare în regulă. Orice modificare pe care o faci poate necesita puțin timp pentru a fi aplicată."),
                t("gd1ce494", "Credem că ești cunoscut pentru interesele de mai jos. Acestea sunt utilizate pentru a afișa mai mult conținut de la tine persoanelor interesate de aceste domenii. Poți ajusta interesele dacă ceva pare incorect. Orice modificări pe care le faci pot necesita un timp pentru a fi aplicate."),
                t("a6b0b41a", "Obține aplicația X pe telefonul tău mobil. Este gratis."),
                t("h3ed510e", "Datele X"),
                t("b708417c", "Poți solicita un fișier ZIP cu o arhivă care să includă informațiile despre cont, istoricul contului, aplicațiile și dispozitivele, activitatea contului, interesele și datele despre reclame. Vei primi o notificare în aplicație în momentul când arhiva de date este gata de descărcare."),
                t("jbf5843e", "Datele Periscope"),
                t("ea886c6e", "Poți solicita o arhivă a datelor tale din Periscope direct în Periscope."),
                t("cdcc2ad4", "Descărcarea nu a reușit"),
                t("dbeff87a", "Solicită arhiva"),
                t("hb02ed28", "Descărcarea funcției pentru date nu este disponibilă momentan. Încearcă din nou la o dată ulterioară."),
                t("c2254084", "Am primit solicitarea ta. Pentru a-ți proteja contul, pot fi necesare 24 de ore sau mai mult pentru pregătirea datelor."),
                t("f62d1d9e", "Arhiva ta este gata. O poți descărca și vizualiza în browserul pentru desktop. Reține: trebuie să descarci datele înainte ca acestea să expire (în câteva zile)."),
                t("b221ca4c", "Te vom anunța când datele sunt gata de descărcare"),
                t("db40dfcf", "completează acest formular"),
                t("g1aced04", "Aplicații, dispozitive și informații"),
                t("dbcf3a1a", "Adaugă etichetă pentru profil"),
                t("cbb2367c", "Afișează sau ascunde eticheta pentru profilul unui cont de parodie, comentarii și susținere."),
                t("ge48855c", "Parodie"),
                t("hf019b20", "Această etichetă asigură că celelalte persoane de pe X nu vor fi derutate de contul tău, informându-le că nu există nicio afiliere între contul tău și subiectul profilului."),
                t("d048571e", "Elimini eticheta de parodie?"),
                t("g905134c", "Dezactivarea acestei etichete o va elimina de pe profilul tău și din toate postările anterioare. Verifică dacă îndeplinești cerințele politicii privind autenticitatea."),
                t("ce62c8c2", "Elimini eticheta profilului?"),
                t("a14080ce", "Îți actualizezi eticheta de profil?"),
                t("db6796f6", "Dezactivarea acestei etichete o va elimina de pe profilul tău și din toate postările anterioare. Verifică dacă îndeplinești cerințele politicii privind autenticitatea. După actualizare, nu vei mai putea efectua alte modificări timp de 48 de ore."),
                t("c700b6be", "După actualizare, nu vei mai putea efectua alte modificări timp de 48 de ore."),
                t("ff1739ae", "Etichetă pentru profil"),
                t("h70c602c", "Nu se poate actualiza eticheta de profil"),
                t("c818c60c", "Analiză"),
                t("ha9f14b1", function (e) {
                    return "Spațiul tău va începe pe " + e.scheduleDate + " la " + e.scheduleTime;
                }),
                t("jafbef80", "Nu ești autorizat să planifici acest Spațiu"),
                t("e5d26f84", "Activează notificările pentru a nu rata niciodată ce se întâmplă pe platformă. X va primi informații legate de țara și limba utilizată pe dispozitivul tău pentru a personaliza notificările."),
                t("f91f00ba", "Creează clip"),
                t("f9b2d343", function (e) {
                    return e.count + " post" + r(e.count, "ări", "are", "ări");
                }),
                t("jcc8306e", "Solicitare de a vorbi"),
                t("j41fd45a", "Solicitare trimisă"),
                t("d5b2aae8", "S-au trimis prea multe solicitări de a vorbi. Încearcă din nou mai târziu."),
                t("b9945b98", "Solicitarea de a vorbi a eșuat. Unește-te din nou la acest spațiu și reîncearcă în câteva secunde."),
                t("b2cc6a54", "Alătură-te ca vorbitor"),
                t("fb6c0bbc", "Ascultatul în modul anonim"),
                t("e49a1f42", "Momentan, asculți în modul anonim, iar gazda și ceilalți participanți nu te pot vedea."),
                t("jf01aea4", "Pentru a participa, trebuie să ieși și să te alături din nou ca ascultător vizibil."),
                t("cac1482a", "A reacționat"),
                t("fc0e94b7", function (e) {
                    return "A reacționat cu " + e.emoji;
                }),
                t("jf9f3e54", "Salt înainte 15 secunde"),
                t("hdd1aba0", "Salt înapoi cu 15 secunde"),
                t("b89c5a50", "Pauză"),
                t("e674c120", "Afișează subtitrările"),
                t("f45bace4", "Ascunde subtitrările"),
                t("ce96f1dc", "Subtitrări indisponibile"),
                t("e07f6e7d", function (e) {
                    return "Viteză " + e.rate + "x";
                }),
                t("jd04fc66", "viteză 0,5x"),
                t("f03848b8", "Normal"),
                t("j0e5c2ce", "viteză 1,5x"),
                t("b3f2318e", "viteză 2x"),
                t("f17bc95a", "Partajează ecranul"),
                t("b11a74b2", "Oprește partajarea"),
                t("e51c2372", "Invitați"),
                t("b08821f4", "Înapoi"),
                t("fed1388a", "Setările spațiului"),
                t("c63dd2cc", "Alătură-te acestei conversații în direct, împreună cu mine!"),
                t("c958c6c8", "Postează acest lucru"),
                t("if23a252", "Distribuie prin..."),
                t("c0530da6", "Distribuie meniul"),
                t("gb5851d7", function (e) {
                    return e.prefix + " " + e.url;
                }),
                t("j78ad1ca", "Închizi Spațiul?"),
                t("db684264", "Da, închide"),
                t("je23178a", "Conversația va fi închisă pentru toți participanții."),
                t("c371fb9a", "Sfârșit"),
                t("c0ce822e", "Setări microfon"),
                t("a2bf8b8a", "Comută la ascultare"),
                t("caa8d928", "Comută Anulare zgomot"),
                t("b5d88f0c", "Doar angajați"),
                t("c855ab8e", "Doar Abonați"),
                t("ddeb0a3c", "Aceasta este Comunitatea. Îți plac membrii? Aruncă o privire.");
            t("e111f531", function (e) {
                return e.count + " a" + r(e.count, "u", "", "u") + " urmărit";
            }),
                t("cbef820f", function (e) {
                    return e.screenName + " a repostat fluxul!";
                }),
                t("e3275464", "Trimite"),
                t("cededf2a", "Gazdă"),
                t("i2caef48", "Co-gazde"),
                t("j245c654", "Vorbitori"),
                t("eda23a02", "Ascultători"),
                t("b90eb348", "Invită să vorbească"),
                t("d9a63e82", "Elimină din rândul vorbitorilor"),
                t("bd917b26", "Invită să fie co-gazdă"),
                t("d7357e7e", "Elimină din co-gazde"),
                t("bf307fc0", "Blochează și elimină"),
                t("ccf2f24e", "Raport"),
                t("i22835de", "Aprobă"),
                t("cb59a0fe", "Refuză"),
                t("c2376960", "Solicitări de a vorbi"),
                t("aba7dcdd", function (e) {
                    return "Invită utilizatorul pe nume " + e.name;
                }),
                t("f5c7aaa7", function (e) {
                    return "gazd" + r(e.count, "e", "ă", "e");
                }),
                t("fc56c8b1", function (e) {
                    return "co-gazd" + r(e.count, "e", "ă", "e");
                }),
                t("iba0f45d", function (e) {
                    return "vorbitor" + r(e.count, "i", "", "i");
                }),
                t("dc066955", function (e) {
                    return "ascultător" + r(e.count, "i", "", "i");
                }),
                t("b53ed9ab", function (e) {
                    return e.participantCount + " " + e.title + " · " + e.remainingCapacityCount + " deschise loc" + r(e.remainingCapacityCount, "uri", "", "uri");
                }),
                t("c3b5b829", function (e) {
                    return e.count + " cerer" + r(e.count, "i", "e", "i");
                }),
                t("fe7a1910", "Trimite invitații"),
                t("ic3c757e", "Caută utilizatori"),
                t("cd133486", "Invită"),
                t("f2333850", "Partajează cu persoane care nu sunt pe X"),
                t("cddb8097", "Află mai multe"),
                t("f77997b0", "Co-gazdă"),
                t("i48f4ed8", "Vorbitor"),
                t("a77c8e02", "Ascultător"),
                t("bdfa93eb", function (e) {
                    return "Distribuit de " + e.name;
                }),
                t("d8cc6ada", "Cine poate vorbi? Vorbitorii actuali nu vor fi afectați. Implementarea modificărilor poate dura câteva secunde."),
                t("e3a87142", "Doar cei pe care îi inviți să vorbească"),
                t("db3de1d2", "Alătură-te ca vorbitor"),
                t("d7f4bc44", "Alătură-te drept co-gazdă"),
                t("edcf15e9", function (e) {
                    return "Solicitat (" + e.count + ")";
                }),
                t("h13957aa", "Ignoră spațiul"),
                t("ge6372fa", "Anulează ignorarea spațiului"),
                t("i7a42e1c", "Contribuie la gestionarea acestui spațiu"),
                t("e0b8f112", "Ești invitat să fii co-gazdă!"),
                t("ee12263c", "Co-gazdele pot vorbi în spațiu"),
                t("jee7002c", "Co-gazdele pot invita, elimina și dezactiva vorbitorii"),
                t("i95225d2", "Co-gazdele pot distribui și elimina postări"),
                t("f07137fa", "Co-gazdele pot elimina ascultători din spațiu"),
                t("j6cdf012", "Co-gazdele nu pot invita sau elimina alte co-gazde"),
                t("c727d116", "Co-gazdele nu pot închide spațiul"),
                t("g69084b8", "Acceptă invitația de co-gazdă"),
                t("ddd5cfe2", "Andocare"),
                t("ee230734", "Afișează mai multe opțiuni"),
                t("ic8c615e", "Alege și trimite o opțiune de răspuns rapidă"),
                t("a04077c4", "Alege o fotografie, un videoclip sau un GIF."),
                t("c07367d8", "Fișierele media nu sunt momentan acceptate pentru mesajele criptate"),
                t("af71ef68", "Voce"),
                t("fc64990e", "Videoclip"),
                t("ca0ce0e4", "Începe un mesaj nou"),
                t("e18e6a63", function (e) {
                    return "Obține X Premium pentru a trimite un mesaj utilizatorului @" + e.username;
                }),
                t("c3752568", "Ceva nu a mers bine. Încearcă să trimiți mesajul din nou într-un minut."),
                t("f78aa3ea", "Unele dintre mesajele tale nu au putut fi trimise momentan. Încearcă din nou mai târziu."),
                t("f9690dc0", "Ne pare rău! Nu poți trimite mesaje acestui cont."),
                t("b1d35408", "Ai depășit limita zilnică pentru trimiterea de mesaje."),
                t("g539cca6", "Contul tău este suspendat și nu îi este permis să trimită mesaje."),
                t("bbac001a", "Acest mesaj este prea lung."),
                t("a1d2a68e", "Acest utilizator nu te urmărește. Poți trimite mesaje doar persoanelor care te urmăresc."),
                t("ec2bb9d4", "Postarea pe care încerci să o trimiți a fost ștearsă."),
                t("hf383be4", "Contul căruia încerci să îi trimiți mesajul a fost șters."),
                t("c4fdbd16", "Nu poți trimite mesaje utilizatorilor pe care i-ai blocat."),
                t("hf3e7e38", "Mesajul tău nu a putut fi trimis."),
                t("dd8272fd", function (e) {
                    return e.count + " " + r(e.count, "(de) mesaje noi", "mesaj nou", "(de) mesaje noi") + " nou/noi";
                }),
                t("e2cd3b7c", "Apel audio încheiat"),
                t("f42f365a", "Apel video încheiat"),
                t("a7570f2c", "Apel audio ratat"),
                t("jd9831b2", "Apel video ratat"),
                t("f0985268", "Apel audio"),
                t("ca397a48", "Apel video"),
                t("bb7e2143", function (e) {
                    return e.seconds + " s";
                }),
                t("c1d4ac84", "Ai schimbat fotografia grupului"),
                t("abc7b032", "Fotografia de grup a fost schimbată"),
                t("i263b294", "Te-ai alăturat conversației"),
                t("i8d5e62b", function (e) {
                    return e.count + " persoane";
                }),
                t("f7204380", "Acest Fleet a expirat"),
                t("d9de7b58", "Acest element media este ascuns, deoarece provine de la o persoană pe care nu o urmărești."),
                t("f2879f4e", "Este posibil ca acest mesaj să includă conținut media grafic."),
                t("b518221e", "Deschide imaginea"),
                t("eeaa9f90", "Deschide videoclipul"),
                t("g2b43664", "Deschide GIF-ul"),
                t("d99de549", function (e) {
                    return "Răspuns către " + e.name;
                }),
                t("f5a07f7c", "Atașament"),
                t("fd079470", "Acest mesaj este spam"),
                t("c7a92dca", "Mesaj OK"),
                t("fb3ccb56", "Mesajul a fost ascuns, din cauza conținutului suspect"),
                t("c94b7d8a", "Redă mesajul vocal"),
                t("eb6f9582", "Întrerupe mesajul vocal"),
                t("b6b4142e", "Această postare este ascunsă deoarece provine de la o persoană pe care nu o urmărești."),
                t("fda60d78", "Este posibil ca această postare să includă conținut media grafic."),
                t("b59a9004", "Deschide postarea"),
                t("daf6bf02", "Modifică setările"),
                t("ba60339a", "Șterge pentru tine"),
                t("eb497e08", "Mai multe acțiuni"),
                t("b170974a", "Adaugă reacția"),
                t("i202bd22", "Raportează mesajul"),
                t("f2e5491a", "Copiază mesajul"),
                t("bf2d08ca", "Mai multe reacții"),
                t("ca7a2215", function (e) {
                    return "Reacția ta curentă: " + e.emoji;
                }),
                t("j4bfee22", "Ștergi mesajul?"),
                t("faddd3a2", "Acest mesaj va fi șters pentru tine. Celelalte persoane din conversație îl vor putea vedea în continuare."),
                t("f58dff34", "Ceva nu a mers bine și mesajul nu a fost șters."),
                t("ad5a8e8e", "Ne pare rău! Nu ai permisiunea de a șterge acest mesaj."),
                t("fad48eea", "Se trimite..."),
                t("ae7d7a24", "Mesajul nu s-a trimis"),
                t("bbe74f3f", function (e) {
                    return "Ieri, " + e.time;
                }),
                t("h95f9e77", function (e) {
                    return e.reactionCount + " " + r(e.reactionCount, "reacții", "reacție", "de reacții");
                }),
                t("c0098d4a", "Reacții"),
                t("j85999ec", "Lista de restricții pentru utilizatori"),
                t("a2d48779", function (e) {
                    return "Elimină reacția ta curentă: " + e.emoji;
                }),
                t("icd0bf34", "Văzut"),
                t("e8bd8fec", "Trimis"),
                t("b2d32fae", "Văzut de toți"),
                t("a763d33f", function (e) {
                    return "Văzut de " + e.count + " " + r(e.count, "(de) persoane", "persoană", "de persoane");
                }),
                t("d84b485e", "Ai urmărit acest cont"),
                t("be0c83d8", "Ai acceptat solicitarea."),
                t("bcc13060", "Acces timpuriu"),
                t("e535cae9", function (e) {
                    return e.count + " " + r(e.count, "(de) urmăritori", "Urmăritor", "(de) urmăritori");
                }),
                t("cf249089", function (e) {
                    return "S-a alăturat în " + e.joinDate;
                }),
                t("g1f972d7", "Află mai multe"),
                t("bb0e37c3", "Află mai multe"),
                t("a89e8ab3", "Află mai multe"),
                t("d98540eb", "Află mai multe"),
                t("j296badb", "Află mai multe"),
                t("e45d77f5", "Află mai multe"),
                t("h52ca4c4", "Mesaje noi"),
                t("ffde2fdc", "Se încarcă conversația"),
                t("da878dc0", "Acceptă"),
                t("hc52446c", "Dorești să faci parte din acest grup? Membrii grupului nu vor ști că ai văzut solicitarea lor decât după ce accepți."),
                t("f7e1ad65", function (e) {
                    return "Permiți ca " + e.senderName + " să îți trimită mesaje? Acesta nu va ști că i-ai văzut mesajul decât după ce accepți.";
                }),
                t("gdf4b790", "Părăsești conversația?"),
                t("bbf83d84", "Această acțiune nu poate fi anulată, iar istoricul conversațiilor va fi șters din inbox."),
                t("ib3fe8aa", "Blochează sau raportează"),
                t("gbed8594", "Dacă această persoană este blocată, nu îți va mai putea trimite solicitări de mesaje în viitor."),
                t("g9074da4", "Părăsește conversația"),
                t("ad63377e", "Șterge conversația"),
                t("h09b49f8", "Această conversație va fi ștearsă din inbox. Celelalte persoane din conversație o vor putea vedea în continuare."),
                t("i6b19b08", "Raportează conversația"),
                t("cdb1a05a", "Informează X dacă observi spam sau abuzuri, ca să îi putem proteja pe ceilalți împotriva acestui gen de conturi."),
                t("d6b11d9c", "Mesajul tău direct nu s-a trimis, deoarece o parte din conținutul media nu s-a încărcat."),
                t("c64c1884", "Scrie un mesaj nou"),
                t("cdcebd22", "Mesaj nou"),
                t("a66ac766", "Se încarcă mesajele directe"),
                t("a846382a", "Căutare Mesaje directe"),
                t("h845f282", "Mesaj direct"),
                t("d7ad7414", "Mesajul nu este disponibil"),
                t("ga086a54", "Imagine atașată"),
                t("a9cc8cfe", "A trimis un GIF"),
                t("eb3d722e", "Ai trimis un GIF"),
                t("e5bfe07e", "A trimis un link"),
                t("db53c018", "Ai trimis un link"),
                t("bf584cd2", "A trimis o fotografie"),
                t("f80629ba", "Ai trimis o fotografie"),
                t("e20b65b0", "A trimis un sticker"),
                t("d30c2d40", "Ai trimis un sticker"),
                t("a876e58c", "A trimis un videoclip"),
                t("j7d8101a", "Ai trimis un videoclip"),
                t("dedfd266", "A trimis un mesaj vocal"),
                t("h7033cac", "Ai trimis un mesaj vocal"),
                t("i34ec422", "A partajat o postare"),
                t("a4939874", "Ai distribuit o postare"),
                t("e1c9ec9c", "Fixează conversația"),
                t("e3cfff7c", "Amână conversația"),
                t("f398722e", "Conversație amânată"),
                t("bdd91964", "Anulează fixarea conversației"),
                t("a8ed0eca", "Anulează amânarea conversației"),
                t("jac4eb1e", "Amânarea conversației a fost anulată"),
                t("d88d0790", "Meniul Opțiuni"),
                t("ce108dda", "Selectează etichetă"),
                t("abf2d13c", "Selectează"),
                t("e4b3f520", "Conversații fixate"),
                t("ae4d666a", "Toate conversațiile"),
                t("d98e066c", "Conversația a fost fixată."),
                t("j302dba8", "A fost anulată fixarea conversației."),
                t("cb367658", "Fixarea conversației a eșuat. Încearcă din nou."),
                t("ie9a7e48", "Fixarea conversației a eșuat. Verifică-ți conexiunea și încearcă din nou."),
                t("hd3927c6", "Anularea fixării conversației a eșuat. Încearcă din nou."),
                t("f1ac0968", "Anularea fixării conversației a eșuat. Verifică-ți conexiunea și încearcă din nou."),
                t("d571e4f9", function (e) {
                    return "Poți fixa doar " + e.count + " " + r(e.count, "(de) conversații", "conversație", "de conversații");
                }),
                t("a551bf7e", "Va trebui să anulezi fixarea unei conversații pentru a fixa o altă conversație."),
                t("a676a876", "Bun venit în inboxul tău!"),
                t("h52877aa", "Scrie câteva rânduri, distribuie postări și altele prin conversații private între tine și ceilalți utilizatori de pe X. "),
                t("efe8fda0", "Scrie un mesaj"),
                t("b9dae4f4", "Încearcă alt termen de căutare"),
                t("e7fb2028", "Nu mai sunt rezultate"),
                t("ae111c99", function (e) {
                    return "Nu s-au găsit rezultate pentru „" + e.query + "”";
                }),
                t("e8581cce", "Termenul introdus nu a generat rezultate"),
                t("f08940ac", "Începe un mesaj nou"),
                t("i5d7593a", "Încearcă să cauți persoane, grupuri sau mesaje"),
                t("c94ac69e", "Grupuri"),
                t("fb3c8e74", "Căutări recente"),
                t("fd6150fc", "Te menținem în siguranță în mesajele directe"),
                t("c7e8a9ee", "Politica de confidențialitate"),
                t("bece84b4", "Secțiunea cu solicitări de mesaje este goală"),
                t("e51be7c1", "Află mai multe"),
                t("f041be05", function (e) {
                    return e.stringCount + " pending request" + r(e.count, "s", "", "s");
                }),
                t("a2fad0f3", function (e) {
                    return e.stringCount + " new pe" + r(e.count, "ople", "rson", "ople") + " you may know";
                }),
                t("cbddf365", function (e) {
                    return e.stringCount + " pe" + r(e.count, "ople", "rson", "ople") + " you may know";
                }),
                t("fac945ad", function (e) {
                    return e.stringCount + " new request" + r(e.count, "s", "", "s");
                }),
                t("ed93de0c", "Se analizează postarea"),
                t("d1d92e40", "Mai multe detalii"),
                t("a6e89af8", "Conversație deschisă"),
                t("ica55d24", "Chat nou"),
                t("f794af9a", "Modul distractiv"),
                t("eccf9fea", "Modul obișnuit"),
                t("g7b1c574", "Resetare la setările implicite"),
                t("f388a7ec", "DeepSearch"),
                t("ab1eb384", "Selectează modul de căutare dorit"),
                t("i330e54c", "Căutare avansată și argumentare"),
                t("fdcce108", "DeeperSearch"),
                t("ac64b674", "Căutare extinsă, mai multă argumentare"),
                t("j22655f2", "Întreabă orice"),
                t("h0681e3e", "Vorbește cu Grok, asistentul nostru AI"),
                t("d593fd78", "Poate răspunde la întrebări, căuta pe X și genera imagini."),
                t("d0205a24", "Verifică informațiile"),
                t("ed4177c4", "Este posibil ca Grok să îți ofere cu încredere informații incorecte, să le rezume greșit sau să omită din conținut. Îți recomandăm să verifici toate informațiile."),
                t("c0ff98f8", "Personalizare și instruire AI"),
                t("f1a8218a", "Îți putem utiliza datele de pe X, precum și interacțiunile, datele introduse și rezultatele obținute cu Grok pentru instruirea modelului, optimizare și personalizarea experienței tale cu Grok. Poți refuza acest lucru din setările X. Pentru a afla mai multe, accesează Centrul nostru de ajutor."),
                t("bcbf5b6e", "Distribuirea"),
                t("j7b5c844", "Conversațiile pe care le distribui public sunt responsabilitatea ta. Evită partajarea informațiilor sensibile sau confidențiale despre tine sau alții în conversațiile cu Grok (vezi Centrul nostru de ajutor)."),
                t("c9f7c196", "Centru de ajutor"),
                t("c65f7308", "Serverele sunt foarte ocupate acum"),
                t("f2a8655e", "Instrumentele avansate ale lui Grok nu sunt momentan disponibile."),
                t("c26b9b9c", "Fișier"),
                t("g10600b0", "Meniu"),
                t("j826e722", "Salvează imaginea"),
                t("a9325f10", "Copiază imaginea"),
                t("g0b12442", "Eșec la copierea imaginii"),
                t("edd0c172", "Postează imaginea"),
                t("d1d3a41a", "Editare imagine"),
                t("a2697040", "Descrie ce vrei să schimbi în imagine"),
                t("ge1cefc4", "Instrumente"),
                t("e9b6d404", "La ce instrumente de căutare ar trebui să aibă acces Grok?"),
                t("h15dce2e", "Setări avansate"),
                t("ff9dc268", "Editează promptul"),
                t("acb2baa0", "Creează imagini"),
                t("fe9ad897", function (e) {
                    return "Editare imagine" + e.ttc_grok_preset;
                }),
                t("h30fd372", "Încearcă modul Voce"),
                t("e9fcdd0c", "Cere-i lui Grok să caute intens pe internet"),
                t("fc4e8aba", "Cere-i lui Grok un raționament pas cu pas"),
                t("e4ae6abe", "Cere-i lui Grok să-ți transforme imaginea"),
                t("e8ade5e2", "Selectează personalitatea"),
                t("b5df32b0", "Întreabă-l ceva pe Grok"),
                t("fb3b9776", "Rezultatul oferit de Grok fost personalizat de acest utilizator."),
                t("ca93f2ee", "Acest mesaj a fost șters."),
                t("b8c06820", "Copiază textul"),
                t("ca0f5894", "Neapreciere"),
                t("ja8d189e", "Am vrut un răspuns în format text"),
                t("e951f04e", "Am vrut o imagine"),
                t("c503b35e", "Am vrut o altă imagine"),
                t("d4371c92", "Codul este incorect"),
                t("dbe8586e", "Am vrut un alt cod"),
                t("e360eb4a", "Nu am vrut codul"),
                t("a18657ca", "Calculul este incorect"),
                t("b8b86300", "Nu am vrut calculul"),
                t("e4c34788", "Răspuns incorect"),
                t("b220a8c8", "Am vrut altceva"),
                t("b115fd18", "Răspuns părtinitor"),
                t("dc637214", "Ton/stil necorespunzător"),
                t("f02e6d42", "Am vrut o căutare"),
                t("bbec6bba", "Rezultate necorespunzătoare ale căutării"),
                t("b494d088", "Nu am vrut o căutare"),
                t("a44974f2", "Nu înțelege imaginea"),
                t("bd44a8a8", "Spune-ne mai multe"),
                t("fcdbe764", "Ce-ar putea Grok să îmbunătățească?"),
                t("bb6adb22", "Descrie ce nu a mers bine"),
                t("h0fa15f2", "Mulțumim pentru feedback!"),
                t("d700b268", "Chaturi la care se face referire"),
                t("cd7bdab2", "Conversațiile uitate nu vor fi șterse din istoric"),
                t("f21b84de", "Referință uitată"),
                t("i52a9cb8", "Nu există amintiri de afișat."),
                t("d9d36880", "Uitare"),
                t("g02dacc0", "Azi"),
                t("c6e845c0", "Ieri"),
                t("a5fa4a86", "Ian."),
                t("c51724a4", "Feb."),
                t("j244ceb2", "Mar."),
                t("b22b12e0", "Apr."),
                t("h3023cac", "Mai"),
                t("b10dbffa", "Iun."),
                t("c81da1b6", "Iul."),
                t("d4e4d3ce", "Aug."),
                t("c3418f9a", "Sep."),
                t("b64dada6", "Oct."),
                t("ad24ec20", "Nov."),
                t("c7902252", "Dec."),
                t("idf94bac", "Regenerează"),
                t("f7614f92", "Fără căutare"),
                t("c5ade3ba", "Cu căutare"),
                t("c16e5b1a", "Fără generare de imagine"),
                t("i2ca65fa", "Cu generare de imagine"),
                t("d3927f88", "Postează linkul"),
                t("be37ecd4", "Copierea pe clipboard a eșuat"),
                t("h708a4c0", "Distribuie conversația"),
                t("g06a67e2", "Pagina distribuită va include mesajele până în acest moment"),
                t("a0428662", "Nu este util"),
                t("fe4fd310", "Utilă"),
                t("bfd161bc", "Compară"),
                t("j5dcf1b2", "Actualizat"),
                t("a50aaa10", "Pre-market"),
                t("dd614d10", "După închidere"),
                t("d6b0b0d5", function (e) {
                    return "Preț deschidere" + e.ttc_stock_details;
                }),
                t("e85f8b65", function (e) {
                    return "Capitalizare" + e.ttc_stock_details;
                }),
                t("f92bf10f", function (e) {
                    return "Cel mai mare preț al anului" + e.ttc_stock_details;
                }),
                t("d679b09f", function (e) {
                    return "Preț maxim" + e.ttc_stock_details;
                }),
                t("be7b9409", function (e) {
                    return "Raport preț-câștig" + e.ttc_stock_details;
                }),
                t("a81f5fb9", function (e) {
                    return "Cel mai mic preț al anului" + e.ttc_stock_details;
                }),
                t("e68d4f21", function (e) {
                    return "Preț minim" + e.ttc_stock_details;
                }),
                t("bc9c96f9", function (e) {
                    return "Cel mai mare preț de până acum" + e.ttc_stock_details;
                }),
                t("dd679fb1", function (e) {
                    return "Cel mai mic preț de până acum" + e.ttc_stock_details;
                }),
                t("a22063d2", "Partajează-ți locația pentru fiabilitate îmbunătățită."),
                t("db3248a8", "Se încarcă locația"),
                t("ffe0e588", "Distribuie locația"),
                t("e41a0dc2", "Închis"),
                t("ieff24f4", "Rezultat final"),
                t("e2811afc", "Meciuri"),
                t("j081fa34", "Clasament"),
                t("i7c7f156", "Mâine"),
                t("b134ba52", "În curs"),
                t("j1361724", "Pauză"),
                t("fa0f1262", "Pauză"),
                t("c2cac618", "Grok acceptă momentan date din La Liga, Premier League, Bundesliga, Series A și Ligue 1."),
                t("acae223d", function (e) {
                    return "Rezultate pentru „" + e.prompt + "”";
                }),
                t("bed99fe2", "Vezi mai puține"),
                t("f7b57ac0", "Statistici"),
                t("i7e3e446", "Meciuri"),
                t("d490977e", "Acum"),
                t("e9f55db8", "duminică"),
                t("e9cf3af8", "luni"),
                t("d5868a7e", "marți"),
                t("b5dfdb46", "miercuri"),
                t("ab8095a2", "joi"),
                t("e298e6f2", "vineri"),
                t("ef519654", "sâmbătă"),
                t("c609a1b4", "Dum"),
                t("j92274b0", "Lun"),
                t("ja482160", "Mar"),
                t("f4ad4cb0", "Mi"),
                t("d66bf142", "Joi"),
                t("dc17968a", "Vin"),
                t("j310a2d6", "Sâm"),
                t("eaf55eb4", "Arată gândurile"),
                t("b1ac6016", "A finalizat DeepSearch"),
                t("f766feca", "DeeperSearch finalizată"),
                t("ee000b0d", function (e) {
                    return e.numSources + " (de) surse";
                }),
                t("bf780b13", function (e) {
                    return e.minutes + "m " + e.seconds + "s";
                }),
                t("c2745fa4", "Abandonat"),
                t("e258000e", "Notificare"),
                t("d591a772", "Notificare indisponibilă"),
                t("bc49b728", "Vei primi o notificare când răspunsul este pregătit"),
                t("d8aadeba", "Notificare dezactivată"),
                t("db832e38", "Activează-ți notificările din setările browserului"),
                t("a910cac6", "A survenit o problemă la activarea notificărilor"),
                t("be30b6ee", "Conexiune instabilă"),
                t("b52484b6", "Se caută..."),
                t("a4d9dbfa", "Gânduri"),
                t("ib1c5475", function (e) {
                    return "S-a gândit timp de " + e.minutes + " (de) minute și " + e.seconds + " (de) secunde";
                }),
                t("a15d62db", function (e) {
                    return "S-a gândit timp de " + e.seconds + " (de) secunde";
                }),
                t("d7cb5408", "Paginile web relevante"),
                t("aa7c96bb", function (e) {
                    return "Vezi încă " + e.numResults;
                }),
                t("j1ab5f40", "Atinge pentru a citi"),
                t("f5a2377e", "Se gândește de "),
                t("g3ce0132", "S-a gândit timp de"),
                t("f8007364", "Extinde pentru detalii"),
                t("ca53f780", "Restrânge detaliile"),
                t("ha8fbe22", "Generează mai multe imagini cu Premium"),
                t("d95c232a", "Ai atins limita. Fă upgrade acum pentru a genera mai multe."),
                t("h2671312", "Mai mult Grok cu Premium"),
                t("a1bb9c8a", "Mai mult Grok cu Premium+"),
                t("b08ef3ae", "Fă upgrade la X Premium pentru a continua conversația sau încearcă din nou mai târziu."),
                t("jf9363b8", "Fă upgrade la X Premium+ pentru a continua conversația sau încearcă din nou mai târziu"),
                t("ef018bf6", "Analizează mai multe imagini cu Premium"),
                t("cdace6d2", "Fă upgrade acum"),
                t("a3186bff", function (e) {
                    return e.count + " pagin" + r(e.count, "i", "ă", "i") + " web";
                }),
                t("f4146dda", "Ce răspuns preferi?"),
                t("a2c2be32", "Vei contribui la îmbunătățirea Grok."),
                t("g01599b6", "Răspunsul 1"),
                t("e02694e0", "Răspunsul 2"),
                t("h6867fcc", "Prefer acest răspuns"),
                t("acc4496c", "Încearcă modul Voce pentru Grok"),
                t("jd36d190", "Accesează caracteristici avansate cu aplicația Grok pentru Android"),
                t("hf9afab0", "Activează DeepSearch pentru a căuta pe internet și pe X, analiza informații și oferi răspunsuri detaliate, bine argumentate, cu ajutorul unei căutări rapide și autonome."),
                t("ef3b3f04", "Activează modul Gândire pentru a utiliza modelul nostru de argumentare. Este ideal pentru matematică, știință și scriere de cod. De asemenea, poți folosi opțiunea „Gândește-te mai bine” pentru orice întrebare care are nevoie de mai multă capacitate intelectuală de la Grok. "),
                t("b43636b8", "Îți prezentăm Grok 3"),
                t("j376298c", "Grok 3 prezintă două noi moduri pentru a interacționa cu cel mai puternic model al nostru: DeepSearch și Gândire."),
                t("e3584f8e", "Care sunt cele mai de succes 10 strategii de tranzacționare utilizate de fondurile de acoperire"),
                t("d91b7b8a", "Cât costa să construiești o universitate în 1885?"),
                t("ia5bef3e", "Cum te pot ajuta astăzi?"),
                t("ebea5880", "Conversații recente"),
                t("e13591c0", "Exemplu de conversație cu Grok"),
                t("c27ca452", "Abonații Premium pot utiliza acum pe X cea mai avansată inteligență artificială a noastră, denumită Grok."),
                t("b6abc25a", "Îți prezentăm Grok 2"),
                t("e1cdaf9e", "Noul nostru asistent AI, oferit de X"),
                t("e6796748", "Întreabă orice"),
                t("db470fdc", "Grok te poate ajuta la sarcinile zilnice, precum scrierea e-mailurilor, răspunsul la întrebări și oferirea de rețete."),
                t("e9adc2d0", "Scrie cod mai bine"),
                t("aaab6cdc", "Pune întrebări legate de programare sau primește ajutor pentru a învăța noi concepte."),
                t("jd08d606", "Dă-ți frâu liber creativității"),
                t("he526d22", "Creează imagini vizuale incredibile cu noile capabilități de generare a imaginilor."),
                t("i6932876", "O poză cyberpunk"),
                t("j7cdee8e", "Fii la curent cu noutățile"),
                t("f1f683c2", "Primește informații actualizate despre cele mai noi știri și subiecte populare, exclusiv de la X."),
                t("h73b9cc0", "Mesajul tău nu a fost trimis deoarece nu te-ai conectat în prezent la chat"),
                t("b6c73662", "Trimite un mesaj"),
                t("h6070fdc", "Setări chat"),
                t("d49326ba", "Ascunde avataruri"),
                t("h79f3532", "Afișează avataruri"),
                t("a8c1e2f0", "Ascunde acțiuni moderator"),
                t("jd83edd4", "Afișează acțiuni moderator"),
                t("ecca11ac", "Ascunde marcaje temporale"),
                t("e358a9f8", "Afișează marcaje temporale"),
                t("fca62374", "Fereastră de chat"),
                t("fe20f01b", function (e) {
                    return "Ignori utilizatorul " + e.name + "?";
                }),
                t("f5dc372a", "Dacă ignori un utilizator, toate mesajele de la acesta vor fi eliminate și utilizatorul nu va mai putea discuta pe chat pe durata rămasă a transmisiunii."),
                t("e91dd1fa", "Mesajul a fost șters de un moderator."),
                t("d1da3709", function (e) {
                    return "Răspuns către " + e.username + ": " + e.body;
                }),
                t("fc82a896", "Această transmisiune s-a încheiat"),
                t("ea58dbd0", "Această transmisiune nu a început"),
                t("cb5b6784", "Limitat de transmițător"),
                t("eba27300", "Numai conturile urmărite de transmițător pot discuta pe chat"),
                t("f28984fb", function (e) {
                    return "Numai conturile urmărite de " + e.screenName + " pot discuta pe chat";
                }),
                t("a3fec810", "Abonează-te la Premium pentru a discuta pe chat"),
                t("dbf0b235", function (e) {
                    return "Abonează-te la " + e.screenName + " pentru a discuta pe chat";
                }),
                t("ifbd8342", "Deschide transmisiunea în direct"),
                t("f935d3ce", "Deschide chatul"),
                t("abbe8212", "Închide chatul"),
                t("hdf040dd", function (e) {
                    return e.percentage + "% finalizat";
                }),
                t("e4f6bd9e", "Ups, ceva nu a mers bine. Încearcă din nou mai târziu."),
                t("ac966f94", "Browserul nu este acceptat"),
                t("ca86b62c", "sau"),
                t("d5568440", "Introdu o parolă mai puternică."),
                t("d0511fe6", "Acest număr este deja în uz cu alte conturi. Folosește alt număr."),
                t("cd24fe60", "Introdu un număr de telefon valid."),
                t("gf8388fe", "Codul de țară"),
                t("c52be452", "Da, elimină"),
                t("bcb388a0", "Acest lucru elimină toate persoanele de contact pe care le-ai încărcat anterior și dezactivează sincronizarea agendei cu X pe toate dispozitivele tale. Reține că acest proces necesită ceva timp."),
                t("ec129eb6", "Ai eliminat cu succes persoanele tale de contact."),
                t("f1b5048a", "A apărut o eroare la eliminarea persoanelor tale de contact."),
                t("hc72e1fc", "Introdu o adresă de e-mail validă."),
                t("bc0ad88a", "Nu sunt permise adresele cu plus (adresele de e-mail cu simbolul„+”). Introdu o adresă de e-mail validă."),
                t("f134915f", function (e) {
                    return e.count + " elemente selectate";
                }),
                t("b8fb87e0", "Vezi subiectele selectate"),
                t("e854ad27", function (e) {
                    return "Subiect - " + e.title;
                }),
                t("e4ff75aa", "Ceva nu a mers bine. Verifică-ți conexiunea la rețea și încearcă din nou."),
                t("b60eba9e", "Mai întâi, să verificăm un lucru. Confirmă că nu ești robot, rezolvând o verificare reCAPTCHA de la Google."),
                t("ba939778", "Ești robot?"),
                t("d44efc66", "Cum te numești?"),
                t("b4867a18", "Numele tău complet nu poate include cuvântul „Twitter”."),
                t("j1c3f4b9", function (e) {
                    return "Editează data nașterii " + e.birthdate;
                }),
                t("j231d352", "Urmărește-i pe toți"),
                t("c203db71", function (e) {
                    return "Se încarcă postările utilizatorului @" + e.screenName;
                }),
                t("c9a1cb5e", "Acest cont nu există"),
                t("e7b201de", "Încearcă să cauți altul."),
                t("ica87fde", "Ești blocat"),
                t("c7ec6faf", "Află mai multe"),
                t("e79ed125", function (e) {
                    return "@" + e.screenName + " este blocat";
                }),
                t("gba95028", "Vizualizează postări"),
                t("a2216a79", "Află mai multe"),
                t("a2811f96", "Cronologii de profil"),
                t("d25805fa", "Abonamente"),
                t("b05be0c8", "Evidențieri"),
                t("b9891db3", function (e) {
                    return "Postări cu răspunsuri ale utilizatorului " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("e1ab545d", function (e) {
                    return "Se încarcă postările pentru abonați ale utilizatorului @" + e.screenName;
                }),
                t("ac3f4be9", function (e) {
                    return "Se încarcă Evidențierile persoanei pe nume @" + e.screenName;
                }),
                t("da38f955", function (e) {
                    return "Se încarcă articolele utilizatorului @" + e.screenName;
                }),
                t("b7363b66", "Trimite o postare"),
                t("ce659062", "Nu-ți lăsa Abonații să aștepte"),
                t("f1e98cc2", "Etalează-ți cele mai bune postări!"),
                t("d5c743c6", "Scrie un articol"),
                t("d1e5e328", "Când vei face acest lucru, se va afișa aici."),
                t("hb26a1fe", "Haide, postează conținut exclusiv. Toate postările tale pentru abonați vor fi afișate aici."),
                t("b7c3572e", "Pentru a adăuga Evidențieri pe profilul tău:\n\n1. Găsește orice postare creată de tine\n2. Atinge butonul meniului „•••”\n3. Atinge „Adaugă/elimină din Evidențieri”"),
                t("i8123550", "Când publici un articol, va apărea aici."),
                t("b786a77d", function (e) {
                    return "@" + e.screenName + " nu a postat";
                }),
                t("j7b80397", function (e) {
                    return "@" + e.screenName + " nu a publicat încă nicio postare pentru abonați";
                }),
                t("jbae8c54", "Nu există postări evidențiate disponibile."),
                t("g8fb219e", "Nu există articole disponibile."),
                t("f34dfc18", "Când postează, postările sale vor apărea aici."),
                t("h9346040", "Postările pentru abonați vor apărea aici când sunt publicate."),
                t("i4c3ddc6", "După publicare, articolele vor apărea aici."),
                t("e0118142", "Postează acum"),
                t("e0c1d871", function (e) {
                    return "postările utilizatorului " + e.fullName;
                }),
                t("c575828f", function (e) {
                    return "Postările pentru abonați ale utilizatorului " + e.fullName;
                }),
                t("e8300dbb", function (e) {
                    return "Evidențierile persoanei pe nume " + e.fullName;
                }),
                t("c46b420d", function (e) {
                    return "Articolele de la " + e.fullName;
                }),
                t("h5a65db7", function (e) {
                    return "Postările pentru abonați ale utilizatorului " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("g7ccac9d", function (e) {
                    return "Evidențierile persoanei pe nume " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("ja6e5d35", function (e) {
                    return "Articole de la " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("h088ae72", "Postări pe profil"),
                t("hbf64b75", function (e) {
                    return "Postările apreciate de " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("a64da953", function (e) {
                    return "Se încarcă aprecierile lui @" + e.screenName;
                }),
                t("be3d5b9f", function (e) {
                    return "@" + e.screenName + " nu a apreciat nicio postare";
                }),
                t("d34b5306", "Atunci când postează, postările respective vor apărea aici."),
                t("bb0e41bc", "Încă nu ai aprecieri"),
                t("d3d4a21c", "Atinge inima din orice postare pentru a-ți arăta aprecierea. Atunci când faci acest lucru, se va afișa aici."),
                t("d95c3d31", function (e) {
                    return "Postările apreciate ale utilizatorului " + e.fullName;
                }),
                t("eeb7d696", "Aprecierile tale sunt private. Doar tu poți să le vezi."),
                t("h6e91bb1", function (e) {
                    return "Postările de conținut media ale utilizatorului " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("fe38901b", function (e) {
                    return "Încărcare conținut media al utilizatorului " + e.screenName;
                }),
                t("bc4223a3", function (e) {
                    return "@" + e.screenName + " nu a postat conținut media";
                }),
                t("ccc363f6", "Odată ce postează, postările respective vor apărea aici."),
                t("d1614228", "Lumini, cameră... atașamente!"),
                t("d7dc8d0a", "Atunci când publici postări care conțin fotografii sau videoclipuri, acestea vor fi afișate aici."),
                t("hf761abf", function (e) {
                    return "Conținutul media al utilizatorului " + e.fullName;
                }),
                t("je5311d3", function (e) {
                    return "Afiliați ai " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("fd0772eb", function (e) {
                    return "Se încarcă afiliații @" + e.screenName;
                }),
                t("ccf03833", function (e) {
                    return "Afiliați ai " + e.fullName;
                }),
                t("ba5a88e4", "Sugestii"),
                t("ddee8ae2", "Vezi toate locurile de muncă"),
                t("d2a04c68", "Facem angajări"),
                t("dc12a126", "Obține indicații de orientare"),
                t("e2acb642", "Contact"),
                t("ha9b8035", function (e) {
                    return "Apelează " + e.phoneCode + " " + e.phoneNumber;
                }),
                t("g2244521", function (e) {
                    return "Trimite mesaj la " + e.phoneCode + " " + e.phoneNumber;
                }),
                t("b44c0205", function (e) {
                    return e.day + " la ora " + e.time;
                }),
                t("de1123f5", function (e) {
                    return "la ora " + e.time;
                }),
                t("e2a5bd50", "Deschis non-stop"),
                t("e0d7da6c", "Se închide"),
                t("i7059f56", "Se deschide"),
                t("a7391348", "Programul de lucru nu este disponibil"),
                t("c9eba532", "Program de funcționare actualizat"),
                t("b5fea270", "Carusel produse"),
                t("h10bb33c", "Vrei să raportezi produsul?"),
                t("dda5d96a", "Raportează produsul"),
                t("fca46f40", "Centrul de ajutor"),
                t("c71a053b", "fă clic aici"),
                t("d7f8a117", function (e) {
                    return "Analiza pentru " + e.days + " zile";
                }),
                t("cae20e93", function (e) {
                    return e.days + " zile";
                }),
                t("gc767fda", "Privat pentru tine"),
                t("c7c85e0c", "Acces la analize"),
                t("b15df4b4", "Număr de vizualizări ale postărilor tale pe X"),
                t("e5fe61e0", "Impresii"),
                t("d1018321", function (e) {
                    return e.value + " impresii la postările tale în ultimele " + e.period;
                }),
                t("e623137c", "Grad de implicare"),
                t("d9d34182", "Interacțiuni cu postările clasificate în funcție de impresii."),
                t("aeee0182", "Vizite profil"),
                t("b2bde01a", "Număr de vizualizări ale profilului din postările tale"),
                t("faf4c1f5", function (e) {
                    return e.value + " vizite ale profilului tău în ultimele " + e.period;
                }),
                t("d5f1e554", "Clicuri pe link"),
                t("cf573986", "Număr de clicuri pe orice URL din postările tale"),
                t("j761451e", "Noi urmăriri"),
                t("e1a87d14", "Numărul de noi urmăriri pe care le-ai câștigat (nu sunt incluse conturile care au oprit urmărirea)"),
                t("j590577e", "Numărul de răspunsuri primite la postările tale"),
                t("ia1da622", "Numărul de aprecieri primite pentru postările tale"),
                t("cfd1036b", function (e) {
                    return e.value + " aprecieri la postările tale din ultimele " + e.period;
                }),
                t("ja42739e", "Repostări"),
                t("ca6e8de0", "Numărul de repostări ale postărilor tale"),
                t("b1b4d57e", "Vizualizări videoclipuri"),
                t("bdaf100e", "Numărul de vizualizări ale videoclipurilor din postările tale"),
                t("ca826772", "Vizualizări ale conținutului media"),
                t("j43b8f52", "Numărul de vizualizări obținut de conținutul media (GIF-uri, imagini, videoclipuri)"),
                t("d3969c06", "Rată de finalizare"),
                t("c58c3476", "Finalizare videoclipuri împărțită la vizionări videoclipuri"),
                t("c8aae62a", "Numărul de marcaje pentru postările tale"),
                t("g70825e0", "Partajări"),
                t("c6fbefd4", "Numărul de partajări pentru postările tale"),
                t("dbe9353e", "Interacțiuni"),
                t("a3a4e8f8", "Lunar"),
                t("eb2e0272", "Cu linii"),
                t("e298b08e", "Cu bare"),
                t("bbc6e7c6", "Statele Unite"),
                t("h88ad664", "Canada"),
                t("gd139910", "Regatul Unit"),
                t("e08feda2", "Japonia"),
                t("fad772ce", "Orientul Mijlociu și Africa de Nord"),
                t("a396dd6c", "Asia Pacific"),
                t("j942b16c", "Europa și piețele în dezvoltare"),
                t("j3cc0c00", "America Latină"),
                t("fe90a642", "13-17"),
                t("a5c91a8e", "18-24"),
                t("cf30cdfa", "25-34"),
                t("gf672f7c", "35-44"),
                t("jf28b41c", "45-54"),
                t("ja78da94", "55-64"),
                t("g42ea0b0", "65+"),
                t("f21807e0", "Conturi care nu te urmăresc"),
                t("d61b2bcc", "Postări ale Comunității"),
                t("h3525cb8", "Nespecificat"),
                t("a3c544e8", "Țări populare"),
                t("f30795d0", "Deschide fotografia de profil"),
                t("gd7acb84", "Configurează-ți profilul"),
                t("b7636014", "Mesaj"),
                t("haad225c", "Dăruiește Premium"),
                t("b63c46ed", function (e) {
                    return "Abonează-te la @" + e.screenName;
                }),
                t("j33d8902", "Trimite un bacșiș"),
                t("a8ab3d08", "Trimite la"),
                t("d740d2d9", function (e) {
                    return "Linkul " + e.service + " a fost copiat în clipboard";
                }),
                t("a7cf1e98", "Bandcamp"),
                t("d876e67e", "Adresă Bitcoin"),
                t("f85f6760", "Cash App"),
                t("a32a7c06", "Adresă Ethereum"),
                t("cc1a3bc4", "GoFundMe"),
                t("d4d74bb4", "Patreon"),
                t("h14fbc52", "PayPal"),
                t("h1198dcc", "Venmo"),
                t("j4e0fd88", "Vezi mai multe"),
                t("df7cb6d4", "Categorii profesionale"),
                t("ec429e79", "Află mai multe."),
                t("j04c717a", "+ Adaugă experiența"),
                t("a1ea2f12", "La mulți ani!"),
                t("g8191e78", "Astăzi este ziua sa de naștere!"),
                t("c1b819ba", "Baloanele pentru ziua de naștere se afișează aici astăzi"),
                t("ad7a451e", "Tradu biografia"),
                t("f543dbf6", "Număr de telefon verificat"),
                t("cef4e8cf", function (e) {
                    return "Anulezi ignorarea pentru @" + e.screenName + "?";
                }),
                t("h03a094a", "Postările de la acest cont vor fi permise acum în cronologia paginii principale."),
                t("a6e94418", "Ai ignorat postările de la acest cont."),
                t("dd3d10f6", "În așteptarea revizuirii"),
                t("i06d4712", "Echipa noastră efectuează o revizuire rapidă a contului tău. Ar trebui să vezi bifa aici în câteva zile."),
                t("j354c438", "Eticheta „În așteptarea revizuirii” este vizibilă doar pentru tine."),
                t("e018b5fa", "Fă un upgrade pentru a beneficia de verificare"),
                t("b74bd6c6", "Acest cont este verificat deoarece este notabil în categoria guvern, știri, divertisment sau în altă categorie desemnată."),
                t("e1e0c916", "Acest cont este verificat deoarece este abonat la Premium."),
                t("eb5d72e4", "Acest cont are postările protejate. Doar urmăritorii le pot citi."),
                t("g776ca50", "Cont verificat"),
                t("ad465ee8", "Setează afiliere principală"),
                t("d01612d3", function (e) {
                    return "Verificat de pe data de " + e.date + ".";
                }),
                t("e14d8719", function (e) {
                    return e.year + " î.e.n.";
                }),
                t("b7caffb7", function (e) {
                    return "" + e.name;
                }),
                t("ea8c425f", function (e) {
                    return "@" + e.viewerScreenName + ", nu ești încă utilizator verificat";
                }),
                t("b2d0c0f4", "Devino utilizator verificat precum "),
                t("f464d54d", function (e) {
                    return "@" + e.profileScreenName;
                }),
                t("g47cdc0e", " pentru a te remarca și a beneficia de o acoperire mai mare a răspunsurilor."),
                t("d834ab9c", "Da, vizualizează profilul"),
                t("cb339f26", "Atenție: acest cont s-a comportat într-o manieră neobișnuită"),
                t("hf06085e", "Vezi acest avertisment pentru că a existat o activitate neobișnuită de la acest cont. Dorești în continuare să îl vizualizezi?"),
                t("aa959f36", "Atenție: acest cont este restricționat temporar"),
                t("jf604336", "Atenție: acest profil poate include conținut sensibil"),
                t("c9bfda48", "Atenție: acest profil poate include conținut sensibil. Vezi acest avertisment pentru că folosește limbaj sau imagini ce pot fi sensibile. Dorești în continuare să îl vizualizezi?"),
                t("g29ebf26", "Vezi acest avertisment deoarece postarea conține imagini sau cuvinte care pot fi sensibile. Dorești în continuare să o vizualizezi?"),
                t("jcfb7fba", "Vezi acest avertisment pentru că este posibil ca postarea să fi încălcat Regulile X. Dorești în continuare să o vizualizezi?"),
                t("bd598c70", "Aceste postări sunt protejate"),
                t("e617164b", "Află mai multe"),
                t("g8475f82", "Cont suspendat"),
                t("j5e1cf59", "Regulile X"),
                t("gbf342a4", "Cont retras"),
                t("defba9a4", "Bun venit pe X!"),
                t("d11934ec", "Alege să fii informat"),
                t("a2cd2b0a", "Urmărește și fii informat"),
                t("a70bae53", function (e) {
                    return "Acum, vei putea primi notificări de fiecare dată când " + e.fullName + " postează.";
                }),
                t("f51a4c29", function (e) {
                    return "Acum, poți urmări pe " + e.fullName + " și vei putea primi notificări de fiecare dată când acest utilizator postează.";
                }),
                t("cfa5e58d", function (e) {
                    return "Urmărești pe " + e.fullName + " și vei primi notificări atunci când acest utilizator postează.";
                }),
                t("be3a652d", function (e) {
                    return "Vei primi notificări oricând " + e.fullName + " postează.";
                }),
                t("f089620c", "Cronologia ta principală"),
                t("a1ab9c80", "Încă nu există postări în această Comunitate"),
                t("b32c4fb0", "Când vor apărea, vor fi afișate aici."),
                t("bf17deda", "Să începem!"),
                t("c3fbf1da", "Acesta este cel mai bun loc pentru a vedea ce se întâmplă în lume. Găsește acum persoane și subiecte pe care să le urmărești."),
                t("a2515900", "Se așteaptă postările"),
                t("je23cdb2", "Postările de la persoanele din această Listă vor apărea aici."),
                t("e69b7e02", "Gestionează conturile"),
                t("b6bd6ae4", "Contul curent"),
                t("d577bccd", function (e) {
                    return "Dacă ai mai multe conturi X, le poți adăuga, apoi poți comuta cu ușurință între ele. Poți adăuga maximum " + e.maxAccounts + " conturi.";
                }),
                t("dc65b3e5", function (e) {
                    return "Ai atins limita de " + e.maxAccounts + " conturi.";
                }),
                t("b8045b33", function (e) {
                    return "Ai atins limita de " + e.maxAccounts + " (de) conturi.";
                }),
                t("d075dc89", function (e) {
                    return "Ai atins limita de " + e.maxAccounts + " (de) conturi personale.";
                }),
                t("bade139e", "Deconectează-te de la toate conturile"),
                t("ae33b982", "Te deconectezi de la toate conturile?"),
                t("fa07bf68", "Se va aplica la toate conturile din filele tale de browser."),
                t("f7865ab6", "Nu este contul tău?"),
                t("a35248e4", "Acesta nu este contul meu"),
                t("f794a67c", "Acesta este contul meu"),
                t("j79c0ff7", function (e) {
                    return "Am eliminat " + e.emailAddress + " din acest cont";
                }),
                t("fb46383c", "Nu poți elimina adresa de e-mail din propriul tău cont."),
                t("gcfdbc2b", function (e) {
                    return "Adresa de e-mail nu mai este asociată contului X " + e.screenName + ".";
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
                t("a8f0e157", "setările de notificare."),
                t("h1732cde", function (e) {
                    return "" + e.emailAddress;
                }),
                t("d374a600", function (e) {
                    return "@" + e.screenName;
                }),
                t("c1d75571", "De ce a fost asociată adresa ta de e-mail cu un cont X care nu îți aparține?"),
                t("ac71e82f", "Află mai multe"),
                t("b069d89c", "Segment de public"),
                t("f5a61ae6", "Conținut"),
                t("a4df00c0", "File Analiză cont"),
                t("ac248548", "Prezentare generală cont"),
                t("je62f358", "Ultimele 28 de zile"),
                t("bc2f16a4", "Ore cu activitate"),
                t("d603209e", "Defalcarea activității"),
                t("ac3fb6de", "Participanți la Spațiu"),
                t("ie181958", "Informații despre public"),
                t("j6f8d422", "Durata medie de vizionare a videoclipurilor."),
                t("e7479ce4", "Durata medie de vizionare"),
                t("g1dfa7d0", "Medie"),
                t("h7d28188", "Înapoi la conținut"),
                t("if2704e4", "Înapoi la vederea generală a transmisiunii în direct"),
                t("ea928ae4", "Înapoi la Spații"),
                t("e8c07c22", "transmisiune"),
                t("a4ce6e68", "Metrici transmisiune"),
                t("b2214c74", "Numărul total de vizualizări ale transmisiunii"),
                t("d4fcf83a", "Durata totală pe care spectatorii au petrecut-o vizionând transmisiunea"),
                t("a89b0322", "Anulat"),
                t("j3cb12ea", "Ascultători concomitenți"),
                t("b93931ee", "De câte ori a fost postat conținutul tău."),
                t("a1814798", "De câte ori ai răspuns la o postare."),
                t("addd5575", function (e) {
                    return "Vi" + e.date;
                }),
                t("a92e62bd", function (e) {
                    return "Lu" + e.date;
                }),
                t("g7450c57", function (e) {
                    return "Sâ" + e.date;
                }),
                t("h08883e7", function (e) {
                    return "Du" + e.date;
                }),
                t("ddb16777", function (e) {
                    return "Jo" + e.date;
                }),
                t("h8f395b3", function (e) {
                    return "Ma" + e.date;
                }),
                t("b8710b43", function (e) {
                    return "Mi" + e.date;
                }),
                t("d9c70840", "Dispozitiv"),
                t("ba55e824", "Încheiat"),
                t("id276c42", "De câte ori s-a interacționat cu conținutul tău."),
                t("j033d090", "Venit estimat"),
                t("efd4d7d4", "Filtrează Spațiile"),
                t("a1334290", "Primele 48 de ore"),
                t("gc10a3b0", "Urmăriri în timp"),
                t("efa0f858", "Numărul de urmăriri și de opriri ale urmării, în timp. Aceste date nu reflectă neapărat numărul tău de urmăritori."),
                t("g2b06cc6", "Este posibil ca datele despre gen să fie deduse"),
                t("b66b3baa", "(de) ore"),
                t("cf8a0772", "Impresii la vizualizări"),
                t("g13d8010", "Ultimele 48 de ore"),
                t("d5627596", "Ultima oră"),
                t("baf120a6", "Cu cele mai puține interacțiuni"),
                t("f2382014", "ÎN DIRECT"),
                t("c4a7a6aa", "Date în direct"),
                t("a992032a", "Analiză flux în direct"),
                t("ie45edda", "Vedere generală cu fluxul în direct"),
                t("e30fc268", "Spectatori în direct"),
                t("bd37f68e", "Activitate de conținut media"),
                t("fe074210", "(de) minute"),
                t("jd03a1b8", "Minute vizionate"),
                t("a20e91e8", "minute vizionate"),
                t("ic2bebee", "Monetizat"),
                t("a1d642c8", "Cu cele mai multe interacțiuni"),
                t("ifc4c1f8", "Numărul de noi urmăritori obținut în urma acestui conținut."),
                t("fff1315a", "Nu există transmisiuni disponibile pentru filtrul selectat"),
                t("jbcb09a8", "Deocamdată, nu există date suficiente"),
                t("df846d6c", "Nu s-au găsit postări pentru intervalul de timp selectat."),
                t("g2ba40f6", "Nu există spații disponibile pentru filtrul selectat"),
                t("j44061a0", "Indisponibil"),
                t("c4a93912", "N/A"),
                t("a6b78788", "Nu sunt disponibile date despre spectatori"),
                t("b2438638", "din total"),
                t("ic0399e0", "Vizualizări organice"),
                t("ja5c444a", "Perioada de plată"),
                t("f04e025e", "Numărul maxim de ascultători concomitenți"),
                t("d6d10662", "Număr maxim de spectatori: "),
                t("d147bea2", "Încearcă mai târziu."),
                t("f0336d68", "Analiză postare"),
                t("g85fbd2e", "ID postare"),
                t("ice5c5b6", "De câte ori a fost afișat acest conținut utilizatorilor."),
                t("hf4f9bfe", "Link postare"),
                t("bf5ebf5c", "Postări și răspunsuri"),
                t("b211652e", "Postări în timp"),
                t("f2efec0a", "Publicat în prealabil"),
                t("i61e0302", "Anteriorul"),
                t("e08a706a", "Vizualizări promovate"),
                t("cbc99192", "Data publicării"),
                t("a83c2a9a", "Timp real"),
                t("e9d72896", "Înregistrat"),
                t("gede4932", "Reluare"),
                t("h0de359c", "De câte ori a fost repostat acest conținut."),
                t("e0568f2c", "Planificat pentru:  "),
                t("gd86baa8", "Începere planificată"),
                t("fef3bfae", "Selectează metrica secundară"),
                t("g7e3d2a4", "Analiză Spațiu"),
                t("fbc79a40", "Prezentare generală Spații"),
                t("d077112a", "Statistici Spații"),
                t("cf3709da", "Stare"),
                t("e797dc32", "Durata fluxului: "),
                t("b649d8cc", "Doar abonați"),
                t("j9282130", "Miniatură transmisiune"),
                t("g629b8b0", "Expirat"),
                t("eb87323c", "Afișează date de analiză pentru perioada selectată, de la difuzarea fluxului în direct."),
                t("i6a75722", "Interval de timp"),
                t("c602f5b8", "Total"),
                t("b35e68ae", "Nr. total de participanți"),
                t("h78ee79a", "Nr. total de vizionări"),
                t("e3efaed0", "Tip"),
                t("c37993e2", "Opriri ale urmăririi"),
                t("b1ed35d0", "Spectatori unici"),
                t("bfad9306", "Necunoscut"),
                t("b5a58f36", "Transmisiune fără titlu"),
                t("i70f5278", "Încărcat la:"),
                t("a98b58b6", "Urmăritori verificați"),
                t("a5de67ca", "Numărul de urmăritori care și-au verificat contul."),
                t("g3367ff4", "Vizionare a videoclipului"),
                t("a7b48b36", "Procentul de vizualizări complete ale videoclipurilor."),
                t("a2580f2a", "Rata de finalizare"),
                t("ff95a9cc", "ID videoclip"),
                t("a97e358e", "Link videoclip"),
                t("e10e8b46", "Se afișează doar videoclipuri din ultimele 100 de zile."),
                t("ba37f6da", "Imagine de ansamblu videoclip"),
                t("f19846b2", "Miniatură videoclip"),
                t("ccd6f4a8", "Titlu videoclip"),
                t("c8410542", "De câte ori a fost văzut videoclipul."),
                t("a532072a", "Spectatori"),
                t("d9508ab0", "vizualizări"),
                t("d9f9dec0", "Vezi Spațiu"),
                t("h0c1f37a", "Vezi Analiză Spațiu"),
                t("e41fffbc", "Durata totală de vizionare a videoclipurilor.");
            t("if2909ba", "Durată vizionare"),
                t("i0e5bf4c", "Videoclipurile tale"),
                t("ed99baea", "Acces timpuriu la versiunea beta"),
                t("gf898b70", "Căutare avansată"),
                t("d2a43a7a", "conține atât „ai”, cât și „start-up”"),
                t("a8584698", "start-up ai"),
                t("jb6f9292", "conține exact structura „start-up ai”"),
                t("j8ee77c4", "„start-up ai”"),
                t("d0480758", "conține ori „ai” ori „start-up” (sau ambele)"),
                t("f0048fa2", "ai SAU start-up"),
                t("da0df186", "conține „ai”, dar nu „start-up”"),
                t("f2f463ea", "ai -start-up"),
                t("a10a357e", "conține „ai” și are cel puțin 50 de aprecieri"),
                t("ca8ed1e8", "ai min_faves:50"),
                t("i945a3f2", "conține „ai” și un URL care include cuvântul „grok”"),
                t("a9348088", "ai url:grok"),
                t("b5c3cdbc", "menționează contul X „grok”"),
                t("e2634592", "@grok"),
                t("i88ba038", "Alertă dezactivată"),
                t("j2cb0214", "Alertă activată"),
                t("ae852cd0", "Primește o notificare în fiecare luni, cu un rezumat al modificărilor din această tendință."),
                t("d1d8633e", "Alerte Radar"),
                t("g096d0cc", "Toate interogările"),
                t("e77035aa", "Elimină căutarea"),
                t("a895ec64", "Sigur ștergi această interogare?"),
                t("a4f5e431", function (e) {
                    return "„" + e.name + "” șters";
                }),
                t("db28b535", function (e) {
                    return "Șterge „" + e.name + "”";
                }),
                t("bcf89b8a", "Editează interogarea"),
                t("f0002e72", "Explorează rezultatele"),
                t("b0924d7a", "Nu s-a putut crea interogarea. Încearcă din nou."),
                t("cfd731ee", "Nu s-a putut șterge interogarea. Încearcă din nou."),
                t("g08bff82", "Nu s-a putut dezactiva alerta. Încearcă din nou."),
                t("fa1fd798", "Nu s-a putut activa alerta. Încearcă din nou."),
                t("ia7dce48", "Nu s-a putut genera interogarea. Încearcă din nou."),
                t("d494d4aa", "Nu s-a putut actualiza interogarea. Încearcă din nou."),
                t("i4a49588", "Piața centrală globală"),
                t("c0799860", "Zi"),
                t("b43679d2", "Ora"),
                t("f1fce85e", "Minut"),
                t("ea3e0ec4", "Piață"),
                t("d8d9aec2", "Ai atins numărul maxim de interogări"),
                t("c9aa246e", "Interogare nouă"),
                t("b9b7a50e", "Ajustează-ți oricând criteriile de căutare pentru a rămâne la curent"),
                t("i9a09bb6", "Creează o interogare, iar Radar va urmări actualizările în timp real"),
                t("da20008c", "Nu sunt disponibile tendințe. Încearcă să lărgești criteriile de căutare."),
                t("e78ca8c6", "Încearcă din nou mai târziu"),
                t("ce3216ec", "Interogare"),
                t("ef609bb8", "Ce se întâmplă pe X?"),
                t("a636a738", "Adresează o întrebare suplimentară..."),
                t("d92ec304", "Nu s-a găsit interogarea"),
                t("bbf29e20", "Resetare selecție"),
                t("ie3321ea", "$NVDA (vinde SAU cumpără)"),
                t("cf223996", "Rezumat"),
                t("a27ccab8", "Aplicația Totul"),
                t("i66136aa", "Popular"),
                t("e7c44382", "Utilizatori unici"),
                t("d559e5b8", "Interogare fără nume"),
                t("i1d9be88", "Cu operatori de căutare avansată"),
                t("ae9f604c", "Afiliere"),
                t("a7d2d8f4", "Afișează doar conturi afiliate"),
                t("je21ffbe", "Număr de urmăritori"),
                t("i8d9797c", "Profil complet"),
                t("a36bebf2", "Maximum"),
                t("i5ef8b4a", "Numărul maxim de urmăritori"),
                t("fcf0ec1c", "Minimum"),
                t("ccc0bbc6", "Numărul minim de urmăritori"),
                t("je1bd63a", "Valorifică puterea X pentru a găsi talente, clienți potențiali și parteneri strategici"),
                t("i6766078", "Caută talente de top, clienți potențiali și parteneri"),
                t("d509bbd4", "Descoperă persoane pe X"),
                t("a5afaf54", "Resetează"),
                t("i9006fb0", "Resetează tot"),
                t("fa598a82", "Rezultate"),
                t("g3688a48", "Selectează o opțiune"),
                t("ab5a91a4", "Utilizator"),
                t("cef20fd0", "Verificare"),
                t("a2b286b0", "Promovează-ți locurile de muncă, produsele și mesajul."),
                t("e2895a38", "Până la 12.000$ în credite pentru publicitate"),
                t("becba496", "Creditele pentru reclame sunt disponibile acum ca ofertă pe perioadă limitată."),
                t("ded395ae", "Accesează analizele pentru afacerea ta, dintr-un singur loc"),
                t("a47a20d4", "Analize avansate"),
                t("b56d3ec6", "Toate organizațiile și afiliații primesc Premium+, cu acces la Grok 3"),
                t("ie663a1a", "Beneficiază de asistență rapidă și raportări la niveluri superioare cu echipa ta dedicată de relații cu clienții"),
                t("j7f75bec", "Asistență VIP"),
                t("ebf5ec26", "În curând"),
                t("eeb424e2", "Scrie-ți povestea."),
                t("ab62db18", "Atrage publicul."),
                t("j2c9bc4e", "Ieși în evidență cu bifa aurie și adaugă afiliați pentru a-ți promova organic compania."),
                t("e7930f82", "Ieși în evidență"),
                t("e77ea57e", "Cele mai puternice instrumente pentru a-ți îmbunătăți vânzările, a angaja cei mai competenți oameni și a accesa informații exclusive despre piață."),
                t("a558a254", "Dezvoltă-te pe X cu Organizații Verificate"),
                t("b099f256", "Tendințe de piață și opinia publică, la simpla atingere a unui buton, cu Radar."),
                t("ecb7fa02", "Business intelligence"),
                t("cb5faa2a", "Folosește-ți creditele pentru reclame pentru a ajunge la cei mai inteligenți oameni de pe planetă."),
                t("c67b260c", "Promovarea locurilor de muncă"),
                t("if48b5c2", "Încarcă și promovează locuri de muncă, afișate milioanelor de oameni, direct pe X."),
                t("aa0d60aa", "lună"),
                t("cebfdb52", "Organizații"),
                t("i9b6fcbc", "Folosește funcția Căutare persoane pentru a găsi și a contacta ingineri, clienți potențiali și creatori. "),
                t("a6b5c3f0", "Găsește cei mai buni oameni"),
                t("a51acce8", "Retrogradează la De bază"),
                t("ie132f40", "Fă upgrade pentru a păstra Accesul complet"),
                t("b0d26232", "ECONOMISEȘTE"),
                t("f563b353", function (e) {
                    return "OFERTE PE CALE SĂ EXPIRE " + e.endDate;
                }),
                t("b29b2e69", function (e) {
                    return e.percentOff + "% reducere până pe " + e.endDate;
                }),
                t("j3cfae29", function (e) {
                    return e.discountedCost + " pe an, pentru primul an. Apoi, " + e.baseCost + " pe an.";
                }),
                t("jb74aea4", "Tariful pentru fiecare cont afiliat suplimentar este de 50$ pe identificator, pe lună, iar creditele pentru reclame fac obiectul unor limitări."),
                t("fc9fc856", "Tariful pentru fiecare cont afiliat suplimentar este de 600$ pe identificator, pe an, iar creditele pentru reclame fac obiectul unor limitări."),
                t("fc785aec", "Obține planul De bază"),
                t("edf32072", "Totul din Premium+ și:"),
                t("b3caf146", "Insignă aurie verificată"),
                t("a1dbf70c", "Credit pentru reclame gratuit, în valoare de 200$ lunar"),
                t("i2a2286c", "Credit pentru reclame gratuit. în valoare de 2.500$"),
                t("e8d0fd04", "Acces de bază la Radar"),
                t("cf038828", "Serviciu de asistență dedicată"),
                t("efd56302", "Adaugă afiliați pe pagina ta"),
                t("bc1bb6aa", "Credit pentru reclame gratuit, în valoare de 1.000$ lunar"),
                t("e1669560", "Credit pentru reclame gratuit, în valoare de 12.000$"),
                t("hb973da4", "Acces complet la Radar"),
                t("g444c82e", "Acces anticipat la caracteristicile Enterprise"),
                t("a1bc0bcf", function (e) {
                    return e.cost + ", facturat anual";
                }),
                t("i0f58dac", "Toate planurile fac obiectul taxelor și tarifelor aplicabile."),
                t("je182d8a", "Enterprise"),
                t("ge609bd6", "Contactează echipa de vânzări"),
                t("je6d2aec", "Prețuri modulare"),
                t("ed33b888", "Căutare de persoane"),
                t("ade522c4", "Informații detaliate"),
                t("h551f266", "Credite pentru publicitate"),
                t("c74f7856", "Pachete pentru afiliați"),
                t("b9b41f7a", "Optimizarea căutărilor"),
                t("b1f368ee", "Asistență dedicată"),
                t("j189c5b2", "Totul din Pro, plus:"),
                t("i7f4b58e", "Personalizat"),
                t("h45fd8ae", "Obține acces deplin"),
                t("f1c3b32c", "Totul din De bază, plus:"),
                t("f4307806", "Popular"),
                t("ce7c21de", "Anual"),
                t("a21a64f6", "„X pentru business este incredibil! Am angajat oameni excelenți folosind instrumentul său pentru căutarea talentelor.”"),
                t("dbb3fc54", "Cofondator și director general executiv"),
                t("c1600210", "„X pentru business este extrem de simplu. Ne-a ajutat să ne consolidăm clienții și să obținem informații despre piață.”"),
                t("fb3e127a", "Ofertă de An Nou, pe perioadă limitată"),
                t("a5fee980", "Revendică reducerea de 30% la planurile anuale și creditul pentru reclame gratuit, în valoare de până la 12.000$, dacă te abonezi înainte de"),
                t("c9051cac", "(de) zile"),
                t("ie035790", "(de) secunde"),
                t("cbd3dfaa", "Încearcă versiunea beta"),
                t("h260121e", "Prezintă funcțiile de top publicului tău."),
                t("ae0ad604", "Pagini de cariere"),
                t("cbd4ba6e", "Descoperă și intră în contact cu talente de top"),
                t("b71927b2", "Postări nelimitate cu locuri de muncă"),
                t("a0b5b7d4", "Beneficiază de acces la direcționarea cu AI, cu modelul nostru pentru publicitate de performanță."),
                t("aa3f0e90", "Promovează locurile de muncă prin direcționare cu AI"),
                t("hc67be9e", "Începe"),
                t("c9a67f9e", "Începe să faci angajări"),
                t("jd937cda", "Adresează-te milioanelor de candidați relevanți, cu X pentru angajări. Sincronizează locurile de muncă, construiește pagini personalizate pentru cariere și setează promovarea locurilor de muncă pentru a publica reclame direcționate în cronologie."),
                t("d92d2632", "Cea mai bună platformă pentru a angaja talente de top"),
                t("c10bee94", "Candidaturi lunare"),
                t("ib69d218", "+250 mii"),
                t("i953576c", "Companii care fac angajări"),
                t("j395b846", "+10 mii"),
                t("g48a59c2", "Utilizatori"),
                t("j228841a", "+500 mil."),
                t("da570714", "Integrări ATS"),
                t("h25a3132", "Până la 2.400 $ în credite pentru reclame, pentru promovarea locurilor de muncă"),
                t("f25a2004", "Beneficii Premium+"),
                t("c237b78e", "Afilieri pentru echipa ta de recrutare"),
                t("fc3d58fe", "Până la 12.000 $ în credite pentru reclame, pentru promovarea locurilor de muncă"),
                t("eb5f060c", "Urmărește"),
                t("a19cf46f", function (e) {
                    return "Oprești urmărirea pentru utilizatorul @" + e.screenName + "?";
                }),
                t("e4c91b70", "Postările sale nu se vor mai afișa în cronologia Pentru tine. Îi poți vedea în continuare profilul dacă postările sale nu sunt protejate."),
                t("j650c8dc", "Îndepărtezi solicitarea de urmărire?"),
                t("c02f8de1", function (e) {
                    return "Această acțiune va anula solicitarea ta de urmărire, iar @" + e.screenName + " nu o va mai vedea.";
                }),
                t("e2ee95a1", function (e) {
                    return "S-a alăturat la " + e.date;
                }),
                t("d64fef58", "Deocamdată nu ai postat"),
                t("e2a098dc", "Sortează după"),
                t("c5709148", "Se afișează maximum 1000 de postări"),
                t("ca5e57bd", function (e) {
                    return "Postare" + e.noun;
                }),
                t("d16c1ab6", "Cele mai recente"),
                t("f0a28956", "Cele mai puțin recente"),
                t("h06df79a", "Cele mai multe impresii"),
                t("c44744e6", "Cele mai puține impresii"),
                t("j6b98664", "Cele mai multe aprecieri"),
                t("a669f95c", "Cele mai puține aprecieri"),
                t("a0c66496", "Cu cele mai multe răspunsuri"),
                t("h45174fe", "Cu cele mai puține răspunsuri"),
                t("ea20f92a", "Cu cele mai multe repostări"),
                t("c9a63566", "Cu cele mai puține repostări"),
                t("b40d33e4", "Afișări detalii"),
                t("gedf636e", "Clicuri pe URL-uri"),
                t("bbc12690", "Clicuri pe hastag"),
                t("g7ede992", "Clicuri pe linkurile permanente"),
                t("f5210bae", "Link"),
                t("b1f77a7c", "Exportare date"),
                t("j62d2af4", "Vedere generală postare"),
                t("dc70a568", "Analiza postării"),
                t("j9f65603", function (e) {
                    return "00:00" + e.date;
                }),
                t("d6ad20d7", function (e) {
                    return "4:00" + e.date;
                }),
                t("d9bcb257", function (e) {
                    return "8:00" + e.date;
                }),
                t("b83b49f1", function (e) {
                    return "12:00" + e.date;
                }),
                t("h52ae229", function (e) {
                    return "16:00" + e.date;
                }),
                t("i07e47b9", function (e) {
                    return "20:00" + e.date;
                }),
                t("h7cd94fe", "Un grafic cu linii estompat"),
                t("b10621d4", "Vezi statisticile"),
                t("c23def7a", "Număr de interacțiuni"),
                t("jc14a9e8", "Cheltuieli"),
                t("d16b5a18", "Total cheltuieli/reclame"),
                t("g01559c6", "Statistici afișate pentru ultimele 7 zile"),
                t("ddc8d458", "Obține acces la date istorice"),
                t("j74eab48", "Caracteristica Analize avansate este disponibilă exclusiv pentru membrii X Premium"),
                t("i02166f6", "Înțelege-ți publicul"),
                t("cef977e4", "Exportă datele"),
                t("f88e624e", "Conversație actualizată"),
                t("e15e5637", function (e) {
                    return "Ultim" + r(e.count, "ele " + e.count + " (de) ore", "a oră", "ele " + e.count + " (de) ore");
                }),
                t("h5ab8b0e", "Utilizatori pe care aceștia îi urmăresc"),
                t("a0f01bca", "Fă clic pentru a modifica intervalul de timp"),
                t("he30b16c", "„Utilizatori pe care aceștia îi urmăresc” extinde rezultatele tale, afișând cele mai distribuite articole de la utilizatorii pe care îi urmărești și utilizatorii pe care aceștia îi urmăresc."),
                t("b0589550", "Primești mai multe știri"),
                t("b60e4f78", "Aruncă o privire"),
                t("e950f6e0", "Nu s-au distribuit articole în rețeaua ta."),
                t("e7dcfb81", "mai multe conturi"),
                t("h965157c", "Această pagină nu este acceptată."),
                t("cd388852", "Pentru a vizualiza acest conținut, accesează profilul autorului de pe cea mai recentă versiune X."),
                t("abebdfae", "Poți vizualiza doar analiza despre Spații la care ai fost gazdă sau co-gazdă."),
                t("fcb205da", "Ascultători în direct"),
                t("jb088200", "Înregistrare reluări"),
                t("if65328a", "Au urmărit"),
                t("a1a0e6d8", "Urmărește gazda"),
                t("a3c4e396", "Oprește urmărirea gazdei"),
                t("j58e7b00", "Vezi profilul"),
                t("eca4e32a", "Vezi detaliile"),
                t("hd908df2", "Spații în direct"),
                t("c5d40fe2", "Oricine"),
                t("a8df1d34", "Activează funcția video"),
                t("if410292", "Familiarizează-te cu Spațiile"),
                t("i43fdce9", function (e) {
                    return "Adaugă Subiecte (" + e.count + "/" + e.total + ")";
                }),
                t("e32e99ec", "Despre ce dorești să discuți?"),
                t("e93f3c2a", "Înregistrează Spațiul"),
                t("b701d610", "Spațiul planificat a fost șters"),
                t("b028792d", function (e) {
                    return "Gestionează Spațiile planificate (" + e.count + ")";
                }),
                t("e9b73da8", "Planifică un Spațiu"),
                t("cdf630be", "Începe acum"),
                t("acd1bcb0", "Cine se poate alătura?"),
                t("h07146a2", "Cine poate vorbi?"),
                t("h61d92b0", "Șterge Spațiul planificat"),
                t("a488f2eb", function (e) {
                    return e.count + " din " + e.total + " selectate";
                }),
                t("d2dfe80d", function (e) {
                    return "Spațiul va începe pe " + e.date + " la " + e.time;
                }),
                t("aef95393", function (e) {
                    return "Spațiul existent a fost planificat pe " + e.date + " la " + e.time;
                }),
                t("a7069f2e", "Editează detaliile"),
                t("a15f06fc", "Spații planificate"),
                t("f6cfa3fe", "Nu poți să planifici un Spațiu în trecut."),
                t("a8f71a2b", function (e) {
                    return "Nu poți să planifici un Spațiu la mai mult de " + e.days + " zile în viitor.";
                }),
                t("ae092f6c", "Spațiul planificat nu a putut fi șters."),
                t("jd7f0030", "Spațiul planificat a fost actualizat"),
                t("a26da034", "Salvează modificările"),
                t("b3633046", "Alege Comunitatea"),
                t("ce447fcb", function (e) {
                    return e.count + " ascultător" + r(e.count, "i", "", "i");
                }),
                t("ef7da97f", function (e) {
                    return e.count + " ascultă";
                }),
                t("a065e7e7", function (e) {
                    return "Se întâmplă acum: " + e.spaceTitle;
                }),
                t("hd5e7b21", function (e) {
                    return e.date + ": " + e.spaceTitle;
                }),
                t("f651e375", function (e) {
                    return "Acest Spațiu s-a încheiat: " + e.spaceTitle;
                }),
                t("i8478ae7", function (e) {
                    return "Redă înregistrarea: " + e.spaceTitle;
                }),
                t("b2a94e93", function (e) {
                    return e.hostSpace + " · " + e.descriptionListening + " · " + e.descriptionGeneric;
                }),
                t("f6432ce5", function (e) {
                    return e.hostSpace + " · " + e.descriptionGeneric;
                }),
                t("e4e811fc", "Se conectează..."),
                t("aadbc747", function (e) {
                    return "Co-gazd" + r(e.hostCount, "e", "ă", "e");
                }),
                t("hbd6035f", function (e) {
                    return "Vorbitor" + r(e.speakerCount, "i", "", "i");
                }),
                t("if420852", "Redare înregistrare"),
                t("f7dc3b1c", "Acest Spațiu s-a încheiat"),
                t("c1d15dc0", "Se pare că acest Spațiu a fost închis."),
                t("g3e2f3a6", "Ascultă în modul anonim"),
                t("cd64d43e", "Alătură-te direct ca vorbitor"),
                t("jcdc32f0", "Ascultă acum"),
                t("a0cee16a", "Începe să vorbești"),
                t("bf3daa48", "Începe să asculți în mod anonim"),
                t("f9305f48", "Reconectează-te"),
                t("e51df2e6", "La început, microfonul va fi dezactivat"),
                t("h114ff6c", "Nu te poți alătura acestui spațiu deoarece participi deja la unul."),
                t("d7fe2d7e", "Nu te poți reconecta la acest spațiu deoarece participi deja la unul."),
                t("e61bdea4", "Gazda înregistrează acest Spațiu. Toate persoanele care vorbesc vor fi incluse în înregistrarea publică."),
                t("d0ebf4f7", "Află mai multe"),
                t("d782b808", "Abonarea are avantajele sale"),
                t("i7f83b8d", "Aflați mai multe"),
                t("fc962610", "Căută numele unui Spațiu sau al unei Gazde"),
                t("e5b5f091", function (e) {
                    return "Niciun Spațiu nu se potrivește cu „" + e.searchQuery + "”";
                }),
                t("g5812140", "De ce nu creezi unul?"),
                t("e8fe1ecb", function (e) {
                    return "Nu există " + e.section + " Spații care se potrivesc „" + e.searchQuery + "”";
                }),
                t("c432d2b2", "Căută un Spațiu"),
                t("d39e8b30", "Adaugă o notă"),
                t("dc7a6625", function (e) {
                    return "Scrii ca " + e.displayAlias;
                }),
                t("g17e4064", "Nota ta va fi publicată folosind aliasul tău în Notele Comunității, fără conexiuni la profilul tău X."),
                t("d9b09ee8", "Oferă informații exacte – este necesară adăugarea de linkuri către surse externe."),
                t("b7476596", "Oferă informații exacte – încurajăm adăugarea de linkuri către surse externe."),
                t("df6c8292", "Explicația ta"),
                t("ecb4d20c", "Nota ta nu a fost salvată. Asigură-te că nu ai mai scris o notă pentru această postare și încearcă din nou mai târziu."),
                t("eb5b4a12", "Despre aliasuri în Notele Comunității"),
                t("ja0ee360", "Alege aliasul tău"),
                t("f7b7c250", "Alege un alias în Notele Comunității pentru a rămâne privat"),
                t("c6382384", "De ce se folosesc aliasurile în Notele Comunității?"),
                t("j48ab594", "Contribuie în mod privat"),
                t("bc2399a0", "Scrie și evaluează note fără să îți dezvălui identitatea pe X."),
                t("d939cf16", "Concentrează-te pe conținut"),
                t("a56f0c32", "Aliasurile pot reduce părerea subiectivă deoarece ajută colaboratorii să se concentreze mai mult pe conținut și mai puțin pe autori."),
                t("d17c59e4", "Toată lumea rămâne responsabilă"),
                t("i719f8e2", "Poți vedea istoricul colaboratorilor și fiecare persoană este responsabilă prin evaluările pe care le primește."),
                t("a96bb564", "Alege aliasul tău în Notele Comunității"),
                t("afcdcf84", "Acest alias va fi identitatea ta când scrii și evaluezi note în Notele Comunității. Aliasul nu este asociat cu profilul tău X."),
                t("f83d0446", "Aliasul tău a fost salvat."),
                t("ed0e6b2e", "Începe să evaluezi note"),
                t("if4c5e06", "Bun venit la Notele Comunității!"),
                t("g880a78a", "Începe să evaluezi note"),
                t("d1be2236", "Notele Comunității se bazează pe contributori ca tine, care ajută la identificarea notelor utile, ce vor fi afișate tuturor."),
                t("af9f2b78", "Urmărește impactul evaluărilor tale"),
                t("af68afc8", "Impactul tău crește pe măsură ce ajuți ca o notă să fie marcată drept Utilă sau Neutilă."),
                t("fb5c5d42", "Deblochează abilitatea de a scrie note"),
                t("a1e58cdc", "După ce impactul evaluărilor tale ajunge la 5 sau mai mult, vei debloca posibilitatea de a scrie propriile tale note în Notele Comunității."),
                t("j5f112b4", "Două dintre notele tale recente au în prezent starea Neutilă."),
                t("ac34c5e8", "Un număr suficient de contributori, inclusiv unii care nu au căzut de acord la evaluările trecute, au stabilit că două dintre notele tale nu sunt utile. Iată feedbackul lor:"),
                t("ib7886d0", "Vizualizează aceste note pe profilul tău"),
                t("b0a7d360", "Riști să îți fie blocată temporar capacitatea de a scrie note."),
                t("e473f876", "Capacitatea de scriere este blocată temporar la contributorii ai căror 5 cele mai recente note cu starea Utilă/Neutilă includ 3 note Neutile."),
                t("ef490ae8", "Surse neincluse sau nesigure"),
                t("bf3dc462", "Sursele nu acceptă nota"),
                t("heb35e12", "Informații incorecte"),
                t("ib117532", "Hărțuire sau abuz"),
                t("a7bc3192", "Citează surse de calitate înaltă"),
                t("a26f8dc2", "Ușor de înțeles"),
                t("cbdef06c", "Abordează direct ce se afirmă în postare"),
                t("faa5f9e8", "Oferă context important"),
                t("gf3b38f4", "Limbaj neutru sau imparțial"),
                t("a50327ea", "Nota nu era necesară la această postare"),
                t("h7c59ea2", "Opinie sau presupunere"),
                t("d60c0064", "Greșeli de scriere sau limbaj neclar"),
                t("e06416ca", "Omite punctele importante sau este irelevant"),
                t("cff1aa8c", "Limbaj contradictoriu sau părtinitor"),
                t("c5d55592", "Oferă informații sau context unice"),
                t("f3e6f0aa", "Informativ"),
                t("hc2b6a7e", "Nu face judecăți de valoare și/sau este empatică"),
                t("bbe8b4ac", "Opinie, teorie sau părere subiectivă"),
                t("dd1f17ea", "În afara subiectului"),
                t("if966b54", "Informații învechite"),
                t("fdc2060a", "Ai nevoie de un Scor de impact pentru a scrie note."),
                t("edd80858", "Vizualizează-ți profilul și scorul"),
                t("eec24ff6", "Pornește ratingul"),
                t("eb9dc3ec", "Contributorii ca tine ne ajută în mod colectiv să identificăm note Utile care vor fi afișate sub formă de context la postări pentru a menține utilizatorii informați."),
                t("f2f61788", "Deblochează posibilitatea de a scrie"),
                t("ca7e11e6", "După ce scorul tău de evaluare de succes ajunge la 5 sau mai mult, vei debloca posibilitatea de a scrie note în Notele Comunității."),
                t("e7beb100", "Vizualizează profilul tău și feedbackul"),
                t("fd02e290", "Vezi toate regulile"),
                t("ee7b8050", "Îți este blocată temporar capacitatea de a scrie note noi."),
                t("b8cc2e9a", "Deoarece notele tale recente au fost evaluate ca nefiind utile, capacitatea ta de a scrie este temporar blocată."),
                t("f6c8613e", "Feedback de la contributori la notele tale:"),
                t("fd5c2282", "Primești mai multe sfaturi despre scrierea notelor"),
                t("c23e67ea", "Deblochează abilitatea ta de a scrie"),
                t("i0e66c5a", "Selectează una"),
                t("j8e3e3be", "Selectează cel puțin una"),
                t("f1e851f0", "Introdu o explicație"),
                t("ff5dcac8", "Explicația este prea lungă"),
                t("b47b5a16", "Toate câmpurile sunt obligatorii. Asigură-te că răspunzi la toate întrebările."),
                t("g9cffe16", "Nota nu include o sursă"),
                t("bfa9e276", "Rescrie nota astfel încât să fie utilă pentru toate postările care conțin această imagine sau revizuiește-ți răspunsul la prima întrebare din acest formular"),
                t("ja36d83e", "Rescrie nota astfel încât să fie utilă pentru toate postările care conțin acest videoclip sau revizuiește-ți răspunsul la prima întrebare din acest formular"),
                t("i6488a04", "Rescrie nota astfel încât să fie utilă pentru toate postările care conțin acest conținut media sau revizuiește-ți răspunsul la prima întrebare din acest formular"),
                t("j6e12b24", "Conține o fotografie sau un videoclip modificat digital"),
                t("eda68484", "Este modificată digital"),
                t("e198eb8c", "Scrie o notă care să includă contextul care, după părerea ta, ar trebui afișat cu videoclipul, pentru a-i menține pe ceilalți informați."),
                t("a9803d44", "Scrie o notă care să includă contextul care, după părerea ta, ar trebui afișat cu imaginea, pentru a-i menține pe ceilalți informați."),
                t("j7ddf18a", "Scrie o notă care să includă contextul care, în opinia ta, ar trebui afișat în toate postările care includ acest link, pentru a-i menține pe ceilalți informați."),
                t("g3874520", "Scrie o notă care să includă contextul care, în opinia ta, ar trebui afișat cu postarea, pentru a-i menține pe ceilalți informați."),
                t("ac1141aa", "Scrie o notă pentru a-i ajuta pe ceilalți contributori la Notele Comunității să înțeleagă de ce acest videoclip nu este înșelător sau nu are nevoie de context suplimentar."),
                t("f99ebcfc", "Scrie o notă pentru a-i ajuta pe ceilalți contributori la Notele Comunității să înțeleagă de ce această imagine nu este înșelătoare sau nu are nevoie de context suplimentar."),
                t("h641949e", "Scrie o notă pentru a-i ajuta pe ceilalți contributori la Notele Comunității să înțeleagă de ce această postare nu este înșelătoare sau nu are nevoie de context suplimentar."),
                t("c926cff6", "Pe baza dovezilor de acum, consider că această postare este probabil..."),
                t("e0ef7a2c", "Pe baza dovezilor de acum, consider că această imagine este probabil..."),
                t("g491d33a", "Pe baza dovezilor de acum, consider că acest videoclip este probabil..."),
                t("b253e462", "Pe baza dovezilor de acum, consider că această pagină către care se face trimitere prin link este probabil..."),
                t("b1b2d004", "Potențial înșelător și ar avea nevoie de context suplimentar"),
                t("ha9655c2", "Nu este înșelător"),
                t("ebd2de06", "De ce consideri că această postare ar putea fi înșelătoare?"),
                t("i865abe8", "De ce consideri că această imagine ar putea fi înșelătoare?"),
                t("add096c6", "De ce consideri că acest videoclip ar putea fi înșelător?"),
                t("eb604e2e", "Crezi că pagina la care se face trimitere prin link poate fi înșelătoare?"),
                t("c33bc7d4", "Conține o greșeală privind datele"),
                t("aadb676c", "Conține informații învechite care pot fi înșelătoare"),
                t("g21a0ef4", "Denaturează adevărul sau omite context important"),
                t("daf354de", "Prezintă o afirmație neverificată drept adevărată"),
                t("d1d2ef84", "Este o glumă sau o satiră care poate fi interpretată drept fapt real"),
                t("bfee6064", "De ce consideri că această postare nu este înșelătoare?"),
                t("dfd1f7f0", "De ce consideri că această imagine nu este înșelătoare?"),
                t("b8623176", "De ce consideri că acest videoclip nu este înșelător?"),
                t("ec66e3fc", "De ce crezi că pagina la care se face trimitere prin link nu este înșelătoare?"),
                t("g228df26", "Exprimă o afirmație corectă"),
                t("h890a3f2", "A fost corect atunci când a fost partajat, însă acum este perimat"),
                t("hf607a0a", "Este în mod clar o satiră/glumă"),
                t("j6ac7742", "Exprimă o opinie personală"),
                t("b1d82aae", "Ai menționat linkuri către sursele pe care crezi că cei mai mulți utilizatori le-ar considera de încredere?"),
                t("ae859ee0", "Nota ta este referitoare la postare sau la imagine?"),
                t("ba84e7f8", "Nota ta este referitoare la postare sau la videoclip?"),
                t("ibb784c6", "Despre această postare specifică"),
                t("a21ecb8c", "Despre imaginea din această postare și trebuie să apară în toate postările care includ această imagine"),
                t("he0ca8da", "Despre videoclipul din această postare și trebuie să apară în toate postările care includ acest videoclip"),
                t("d0bf8d34", "Nota ta este referitoare la postare sau la link?"),
                t("db370b9a", "Nota ta este referitoare la postare, la imagine sau la link?"),
                t("c35bf10e", "Nota ta este referitoare la postare, la videoclip sau la link?"),
                t("d96ce0d2", "Această notă este scrisă astfel încât să fie utilă pentru toate postările care conțin imaginea."),
                t("a1fb516c", "Această notă este scrisă astfel încât să fie utilă pentru toate postările care conțin videoclipul."),
                t("be46a61e", "Această notă este scrisă astfel încât să fie utilă pentru toate postările care includ conținutul media."),
                t("ied1c2c2", "Această notă este oarecum specifică acestei postări și este posibil să fie nerelevantă pentru altele."),
                t("gb2433df", function (e) {
                    return "" + e.noteMatchUrl;
                }),
                t("gdfbdd93", function (e) {
                    return "toate " + e.matchCount + " postările";
                }),
                t("d7959c4d", function (e) {
                    return " toate " + e.matchCount + " postările";
                }),
                t("ff5be16d", function (e) {
                    return " toate " + e.matchCount + " postările";
                }),
                t("abdd8d0a", "Editează nota"),
                t("c097608e", "Nota nu include o explicație"),
                t("ba25898c", "Notele care își explică sursele au o probabilitate mai mare de a fi evaluate drept utile."),
                t("e764d704", "Notele care direcționează către surse de încredere au o probabilitate mai mare de a fi evaluate drept utile."),
                t("gb67e44c", "Trimite fără explicații"),
                t("d6b758a2", "Trimite fără sursă"),
                t("dc1fa12c", "Conturile pentru Notele Comunității trebuie să aibă numere de telefon verificate"),
                t("a1752fde", "Pentru a putea continua să contribui la Notele Comunității de pe acest cont, va trebui să verifici numărul tău de telefon."),
                t("hef02710", "Pe lângă faptul că trebuie să fie verificat, numărul tău trebuie să aparțină unui furnizor de telefonie de încredere și să nu fie asociat cu un alt cont pentru Notele Comunității."),
                t("dff9b6bc", "Verifică-ți telefonul"),
                t("f051e434", "Contributorii la Notele Comunității trebuie să aibă numere de telefon unice"),
                t("eaef2f72", "Se pare că există mai mulți contributori la Notele Comunității ale căror conturi X sunt asociate cu acest număr de telefon."),
                t("j78d41b4", "Pentru a putea continua să contribui de pe acest cont, va trebui să elimini acest număr de telefon de la celelalte conturi X."),
                t("a7c9a176", "Conturile pentru Notele Comunității trebuie să aibă numere de telefon verificate de la un furnizor de telefonie de încredere"),
                t("ec853dfa", "Pentru a reduce utilizarea de numere de telefon virtuale sau create artificial, numerele de telefon trebuie să fie de la un furnizor de telefonie de încredere."),
                t("j6e19c58", "Valori promovate de Notele Comunității"),
                t("ea580ee2", "O recapitulare rapidă a valorilor promovate de Notele Comunității:"),
                t("eac7b6ac", "Contribui la o înțelegere mai bună"),
                t("b0381cfc", "Acționezi cu bună-credință"),
                t("f0addddc", "Fii de ajutor, chiar și pentru cei care nu sunt de acord cu tine"),
                t("h7c7b204", "Ajută la evaluarea notelor existente înainte de a scrie o notă nouă"),
                t("i8cae552", "Prin evaluare ne vei ajuta să păstrăm Notele Comunității la un nivel calitativ ridicat."),
                t("hd43a218", "Ai atins limita zilnică pentru scrisul de note"),
                t("aaba8ed2", "Pentru a menține înalta calitate a notelor și a preveni spamul, există o limită pentru numărul de note pe care contributorii le pot scrie zilnic, în funcție de Impactul scrierii acestora. Încearcă din nou mai târziu."),
                t("a67ed4d6", "Ai atins limita pentru adăugarea de note la postările acestui autor"),
                t("ic484166", "Pentru a menține calitatea ridicată a notelor și a preveni spamul, există o limită pentru numărul de note care se pot scrie despre un autor de postări, într-o anumită perioadă. Limita se bazează de pe cât de utile au fost considerate notele anterioare ale persoanei respective asupra autorului. Încearcă din nou mai târziu."),
                t("b98f077c", "Cere informații despre Notă"),
                t("ee691104", "Cere o Notă a Comunității în legătură cu această postare"),
                t("f8cbdf02", "Crezi că această postare poate fi înșelătoare? Solicită o Notă a Comunității."),
                t("f132d1be", "Contributorii vor vedea alerte la postările care primesc suficiente cereri"),
                t("gf71296c", "Dacă este scrisă și evaluată drept utilă de către alți contributori, nota va fi afișată la postare"),
                t("de0685b4", "X nu selectează notele pe care să le afișeze – Notele Comunității sunt de la oameni, pentru oameni"),
                t("f8ac3c88", "Acceptare și solicitare notă"),
                t("a8edd0ea", "Adaugi o sursă?"),
                t("a39a0de6", "Link la o postare de pe X"),
                t("j819c176", "Ajută contributorii la Notele Comunității incluzând un link la o postare de pe X, care explică de ce poate fi înșelătoare."),
                t("e15b3b44", "Linkul trebuie să fie la o postare de pe X. De exemplu: x.com/user/status/...."),
                t("c81085a4", "Notele Comunității"),
                t("c363515c", "la dispoziția publicului"),
                t("cb6b0138", "Îți mulțumim! Solicitarea ta a fost trimisă"),
                t("c196e8b8", "Dacă este scrisă o notă și aceasta este evaluată drept utilă, o vei vedea împreună cu postarea."),
                t("a9491efa", "Solicitarea pentru Nota Comunității a fost trimisă"),
                t("f060d1cc", "Ștergere cerere"),
                t("f499f824", "Șterge cererea"),
                t("hd1bc518", "Este posibil să trebuiască să aștepți câteva minute până când vei putea face o nouă cerere cu privire la această postare"),
                t("geb8d31d", "înregistrează-te"),
                t("gc399930", "Informații privind limita zilnică de cereri pentru note"),
                t("fee815e4", "Ai atins limita zilnică pentru cererea de note"),
                t("i7eb7900", "Limita ta zilnică va crește dacă faci cereri pentru postări care primesc cu succes note de ajutor."),
                t("d1a3817e", "Acest lucru răsplătește persoanele care găsesc cu succes postări potențial înșelătoare, care ar avea nevoie de context suplimentar."),
                t("c031c77a", "Limita ta zilnică poate scădea dacă faci prea multe cereri pentru postări despre care celelalte persoane cred că nu necesită o notă."),
                t("f87129d2", "Acest lucru previne spamul și îi ajută pe autorii de note să se axeze pe postările care ar avea nevoie de note de ajutor."),
                t("jdd4a572", "Contul tău trebuie să aibă un număr de telefon verificat"),
                t("i0f07c07", "Verifică-ți telefonul"),
                t("i157c1a8", "Cererea a fost ștearsă."),
                t("a9f4ca9c", "Contributorii la Notele Comunității pot vedea acum nota ta"),
                t("eb8f7c0c", "Alți contributori pot evalua acum nota ta"),
                t("h87c6bd6", "Alți contributori pot vedea acum nota ta"),
                t("gc1a5bce", "Vor evalua cât de utilă este nota"),
                t("i0e950ca", "Dacă nota ta este marcată drept Utilă, va începe să fie afișată sub formă de context pentru toate persoanele care văd postarea"),
                t("a047e800", "Nota ta ajută ceilalți contributori să aibă mai mult context când evaluează note"),
                t("cec8a38c", "Dacă nota ta este marcată drept Utilă, vei beneficia de o creștere a impactului tău în formă scrisă."),
                t("a377532e", "Dacă există suficiente persoane cu păreri diferite care evaluează nota drept utilă, nota va fi afișată drept context pentru toate persoanele care văd postarea"),
                t("d790fa4e", "Stările notelor nu sunt definite de regula majorității"),
                t("e90cda68", "Pentru a identifica notele care sunt utile unui număr mare de persoane, stările notelor necesită un acord în rândul contributorilor, care uneori nu au căzut de acord la evaluările trecute."),
                t("j5a1d85a", "Afișează nota"),
                t("b25b64d6", "Nota ta a fost trimisă!"),
                t("g1428d70", "Nota ta este trimisă!"),
                t("a4ec7004", "Iată ce se întâmplă acum:"),
                t("c4093274", "Despre Notele Comunității după trimitere"),
                t("bc8746a6", "Evaluează cel puțin o notă înainte de a scrie una nouă."),
                t("ce3c80b8", "Pentru a menține nivelul ridicat de calitate, Notele Comunității depind de evaluările tale."),
                t("fa6a075a", "Note care sugerează context ce va fi afișat cu postarea"),
                t("acb7ecae", "Note care explică de ce nu este nevoie de context suplimentar"),
                t("d9a5fc06", "Evaluează postarea"),
                t("b73cebd2", "Evaluează postări și note"),
                t("ad8883f2", "Nu există note despre această postare"),
                t("efd14e7a", "Se încarcă notele"),
                t("e65b7186", "Utilizatorii au propus note în Notele Comunității pentru această postare"),
                t("bcc14a68", "Notele Comunității este un program în care contributori voluntari adaugă context (numit „note”) la postări pe care ei le consideră posibil înșelătoare. Notele de mai jos pot fi evaluate de contributori, iar dacă sunt evaluate, în prezent, drept utile, vor fi vizibile sub formă de context la postare. Dacă o notă este evaluată, în prezent, drept utilă și tu nu ești de acord, poți solicita o revizuire suplimentară, ceea ce înseamnă că mai mulți contributori vor revizui nota și evaluarea notei se poate modifica. "),
                t("c21313ba", "Note evaluate momentan drept neutile"),
                t("c2c40120", "Afișează toate notele"),
                t("ia596d40", "Vezi ceva ce ai dori să îmbunătățești?"),
                t("deff0bde", "Scrie o notă"),
                t("i8e85ef8", "Alătură-te la Notele Comunității și ai acces la funcția de scriere note și alte funcții pentru a contribui la o lume mai bine informată"),
                t("af88892a", "Aceste note sunt adăugate de contributori la Notele Comunității care consideră că postarea este potențial înșelătoare și ar avea nevoie de context suplimentar."),
                t("cf8a40a6", "Notele sunt vizibile în Notele Comunității doar până când sunt evaluate drept Utile de un număr suficient de contributori."),
                t("g22c8c30", "Dacă aceste note sunt evaluate drept Utile de către un număr suficient de contributori, inclusiv de cei care, de obicei, nu au căzut de acord la evaluările trecute, ele vor fi afișate public împreună cu postarea, sub formă de context suplimentar."),
                t("jf04b084", "Aceste note sunt adăugate de contributori care consideră că postarea nu este înșelătoare și nu are nevoie de context suplimentar."),
                t("g5a72e98", "Acestea sunt vizibile în Notele Comunității doar ca informații suplimentare pentru evaluatori și nu sunt afișate drept context împreună cu postarea, chiar dacă sunt marcate drept Utile."),
                t("b8719c22", "Ajută-ne să identificăm dacă postările sunt apreciate de persoane cu puncte de vedere diferite."),
                t("jcdf97d4", "Ce îți place la această postare?"),
                t("d4d7b67e", "Ce nu îți place la această postare?"),
                t("ed5156fa", "A apărut o eroare la salvarea evaluării. Te rugăm să încerci din nou."),
                t("d0ed3636", "Ai evaluat această postare"),
                t("j6aa6172", "Ștergi evaluarea?"),
                t("i4112750", "Această acțiune nu poate fi anulată."),
                t("i6f6191a", "Mulțumim!"),
                t("h5575012", "Acceptare și trimitere"),
                t("f9171e52", "Această postare a primit aprecieri de la persoane care în mod normal nu sunt de acord, însă feedbackul este limitat până acum."),
                t("j0f9919a", "Evaluarea ta nu va afecta negativ o postare, dar poate ajuta la recunoașterea pozitivă a postărilor apreciate de multe persoane."),
                t("b3af830c", "Ne-ai spus:"),
                t("d0b29562", "Evaluează mai multe postări acum"),
                t("i36ea87a", "Sunt de acord"),
                t("d5befc34", "Am aflat ceva interesant"),
                t("je26ecf2", "Aduce o perspectivă relevantă"),
                t("e4e331aa", "Aduce consens asupra unui subiect care este adesea polarizant"),
                t("ed61ff2a", "Este înduioșătoare și emoționantă"),
                t("gc3104d8", "Este inspiratoare sau interesantă"),
                t("j8c4400e", "Este amuzantă"),
                t("j4738406", "N/A: Nu-mi place nimic la ea"),
                t("d93d1666", "Nu sunt de acord"),
                t("d6130466", "Nu este deloc relevantă"),
                t("d96835b6", "Nu mă interesează"),
                t("b7ba4150", "N/A: Nu-mi displace nimic la ea"),
                t("g0402b3b", "postărilor apreciate de persoane cu puncte de vedere diferite"),
                t("ged62c2b", "aducerea în prim plan"),
                t("b5d5f7f1", "Conturează direcția"),
                t("a42fef87", "Află mai multe"),
                t("bd7eb888", "Vezi toate notele despre această postare"),
                t("i97b83f6", "A apărut o eroare la trimiterea contestației tale, încearcă mai târziu."),
                t("a038ab9a", "Tradu nota"),
                t("i606fc4c", "Despre contestații în Notele Comunității"),
                t("b664c554", "Solicită revizuire suplimentară de către colaboratori"),
                t("ab66e1f2", "Iată cum funcționează:"),
                t("e36d807c", "Mai mulți contributori la Notele Comunității vor primi o solicitare pentru a revizui și evalua această notă."),
                t("d8afb99c", "Dacă evaluările contributorilor modifică starea notei la o altă stare decât cea evaluată în prezent drept utilă, nota nu va mai fi afișată la postare."),
                t("f9e1090c", "Revizuirile sunt efectuate de contributori, nu de X."),
                t("i80c8a84", "Revizuire suplimentară solicitată."),
                t("f93d4391", "solicita o revizuire suplimentară a acestei note de către contributori"),
                t("e457970a", "Detalii despre notă"),
                t("df587b98", "ID-ul notei"),
                t("h201bdc8", "Autorul notei"),
                t("h74b96b0", "Notă trimisă "),
                t("ge25848a", "Stare curentă"),
                t("d6db34cc", "Necesită mai multe evaluări"),
                t("ce8b505e", "Nu este util"),
                t("e5be8156", "Starea Notei calculată de algoritmul cu sursă deschisă"),
                t("fca23c42", "Un număr suficient de contributori cu perspective diferite au convenit că această notă este utilă, prin urmare este afișată drept context la postare."),
                t("hef420c2", "Această notă nu a fost încă evaluată de un număr suficient de contributori cu perspective diferite."),
                t("j3af43c4", "Un număr suficient de contributori cu perspective diferite au convenit că această notă nu este utilă."),
                t("f79d812c", "Evaluată drept utilă și afișată în decurs de o oră de la postare"),
                t("cc02373e", "Evaluată drept utilă și afișată în decurs de o oră după ce a fost propusă"),
                t("d9f72d90", "Asociată și afișată în decurs de o oră de la postare"),
                t("fc6e4594", "Etichete populare selectate de evaluatori"),
                t("f7427d6f", "această postare"),
                t("aa94541d", "această postare"),
                t("fe821ebb", "această postare"),
                t("c5cc74e5", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                t("ff14b6b8", "o altă postare"),
                t("b5cc9c47", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                t("hb90fe9a", function (e) {
                    return e.matches + " postările";
                }),
                t("i23a64ea", function (e) {
                    return e.matches + " postările";
                }),
                t("h6c5af52", function (e) {
                    return e.matches + " postările";
                }),
                t("c2584f58", function (e) {
                    return e.matches + " postări";
                }),
                t("a0dec723", "această postare"),
                t("f20fa57c", function (e) {
                    return e.matches + " postări";
                }),
                t("bd60b152", function (e) {
                    return e.matches + " postări";
                }),
                t("b95920ef", "această postare"),
                t("f8dcced2", function (e) {
                    return e.matches + " postări";
                }),
                t("iaf626c0", function (e) {
                    return e.matches + " postări";
                }),
                t("e3002eab", "această postare"),
                t("df3f2d52", function (e) {
                    return e.matches + " postări";
                }),
                t("cd83d952", function (e) {
                    return e.matches + " postări";
                }),
                t("ia35cd39", "această postare"),
                t("a499228a", function (e) {
                    return e.matches + " postări";
                }),
                t("cf9ac658", function (e) {
                    return e.matches + " postări";
                }),
                t("fa56f7cb", "această postare"),
                t("b826c19c", function (e) {
                    return e.matches + " postări";
                }),
                t("c4618eb8", function (e) {
                    return e.matches + " postări";
                }),
                t("i56af3fd", "această postare"),
                t("g1f275b6", function (e) {
                    return e.matches + " postări";
                }),
                t("i2cac82c", function (e) {
                    return e.matches + " postări";
                }),
                t("a2ae91f1", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                t("d3205ee4", function (e) {
                    return e.matches + " postări";
                }),
                t("daeff73b", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                t("fc546c2e", function (e) {
                    return e.matches + " postări";
                }),
                t("i1df5f5d", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                t("g03f5337", "această postare"),
                t("f5b30b8a", function (e) {
                    return e.matches + " postări";
                }),
                t("e0a49d5b", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                t("e25f9fd4", function (e) {
                    return e.matches + " postări";
                }),
                t("bae49ec3", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                t("d595bffd", "această postare"),
                t("ef8a55a6", function (e) {
                    return e.matches + " postări";
                }),
                t("a3aa3cb1", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                t("d5061d00", "Neafișată pe X"),
                t("e272836c", "Ștergi nota?"),
                t("da5a5d8c", "După ce ștergi această notă, ea va fi eliminată permanent din Notele Comunității."),
                t("a804a8f4", "Mai multe note au nevoie de ajutor din partea ta"),
                t("ib9628b8", "Evaluează mai multe note pentru a-ți mări impactul evaluării"),
                t("bf08be2e", "Evaluează mai multe note acum"),
                t("i26425d8", "Oarecum"),
                t("c6e683d0", "Trimite și acceptă"),
                t("b3fcaac6", "Ia în considerare deschiderea și examinarea surselor înainte de a evalua această notă"),
                t("e8a33850", "Deschide și examinează sursele înainte de a evalua această notă"),
                t("ca6f04ec", "Examinarea surselor citate în note contribuie la asigurarea acurateții acestora. "),
                t("a7338bc2", "Nota este utilă?"),
                t("bd0b6422", "Este aceasta o explicație utilă privind motivul pentru care nu este nevoie de context suplimentar?"),
                t("ac7f9746", "Ce a fost util la aceasta?"),
                t("c7751804", "Ce a fost inutil la aceasta?"),
                t("dc9c823a", "Această notă ar fi utilă pentru toate postările care includ linkul."),
                t("da0bb868", "Această notă ar fi utilă pentru toate postările care conțin videoclipul."),
                t("e8694748", "Această notă ar fi utilă pentru toate postările care conțin imaginea."),
                t("b487e12e", "Această notă ar fi utilă pentru toate postările care includ conținutul media."),
                t("hfdb963e", "Această notă este prea specifică acestei postări și este posibil să fie nerelevantă pentru alte postări care includ același link."),
                t("bd6742c2", "Această notă este prea specifică acestei postări și este posibil să fie nerelevantă pentru alte postări care conțin acest videoclip."),
                t("ded3a8a2", "Această notă este prea specifică acestei postări și este posibil să fie nerelevantă pentru alte postări care conțin imaginea."),
                t("c1e42c92", "Această notă este prea specifică acestei postări și este posibil să fie nerelevantă pentru alte postări care includ acest conținut media."),
                t("af198630", "la dispoziția publicului"),
                t("d39720d3", "Utilă"),
                t("i7d91dc9", "Oarecum utilă"),
                t("c75b7fb4", "Inutilă"),
                t("d9025c46", function (e) {
                    return e.matches + " postări";
                }),
                t("ce1c95d6", function (e) {
                    return "" + e.noteDisplayUrl;
                }),
                t("jd7c58d8", function (e) {
                    return e.matches + " postările";
                }),
                t("ebb0b116", function (e) {
                    return e.matches + " postările";
                }),
                t("f9005c24", function (e) {
                    return e.matches + " postările";
                }),
                t("a4886e54", function (e) {
                    return "" + e.noteDisplayUrl;
                }),
                t("h8335712", "Nota ta"),
                t("b9f18eec", "Evaluată drept utilă"),
                t("j33f6520", "Evaluat în prezent drept neutil"),
                t("idc0e9fc", "Înregistrează-te pentru a deveni contributor la Notele Comunității"),
                t("a83cccfa", "Contributorii pot revizui propunerile de note, scrie note, urmări impactul acestora și multe altele!"),
                t("c2a6ec00", "Vrei să te alături la Notele Comunității?"),
                t("d2470b62", "Ajută-i pe utilizatori să fie mai bine informați."),
                t("ab23a972", "Urmărește conversația"),
                t("c68f3bc0", "Află mai multe informații despre valorile noastre"),
                t("dfb1f498", "Feedback"),
                t("a584cfa7", "Trimite-ne un mesaj direct la @CommunityNotes"),
                t("e4d93012", "Mai multe persoane au cerut o Notă a Comunității"),
                t("e55983c0", "Niciun solicitant nu a furnizat deocamdată un link la o sursă care să justifice de ce este necesară o notă"),
                t("h23be93e", "Solicitanții pot include o postare de pe X prin care să explice de ce consideră că ar fi utilă o notă. Au inclus postările de mai jos"),
                t("ca6ae344", "Bara de file pentru Notele Comunității"),
                t("fe27c1e2", "Note"),
                t("ff692d64", "Profilul tău"),
                t("cb1adfa0", "Descarcă datele"),
                t("jaf0d42c", "Notele tale"),
                t("fa9a644a", "Posibilitatea ta de a scrie note va fi blocată temporar dacă 3 dintre 5 cele mai recente note ale tale cu starea Utilă/Neutilă sunt considerate Neutile."),
                t("i4014342", "Evită blocarea posibilității tale de scriere. Iată feedback de la contributori despre cele două note ale tale:"),
                t("j9897a7c", "Primești sfaturi despre scrierea notelor"),
                t("ac71a5a0", "Evaluează note care au nevoie de ajutor"),
                t("h544e3c8", "Contributorii trebuie acum să deblocheze abilitatea de a scrie note prin mărirea impactului evaluării la nivelul 5."),
                t("d88c63f6", "Nou: Deblochează abilitatea de a scrie note"),
                t("bd31adde", "Ai părăsit programul Notele Comunității."),
                t("a796c19c", "Alătură-te din nou"),
                t("h837a96c", "Te vei alătura din nou la programul Notele Comunității."),
                t("a4d4bcb9", function (e) {
                    return "Dacă vrei să te alături din nou, vei putea face acest lucru aici, în " + e.numDaysToRejoin + " " + r(e.numDaysToRejoin, "zile", "zi", "de zile") + ".";
                }),
                t("a490bc51", "Află mai multe"),
                t("c94ad3e8", "să ne trimiți feedback"),
                t("ee160790", "Note șterse"),
                t("b3de4a42", "Impact al evaluării"),
                t("a7b0393c", "Impact al scrisului"),
                t("id568acc", "Autor popular"),
                t("e25f9ad6", "Evaluările care au ajutat o notă să obținută starea de Utilă"),
                t("a0697fbc", "Bravo! Prin aceste evaluări s-au identificat note Utile care sunt afișate sub formă de context la postări și ajută la informarea utilizatorilor."),
                t("a3311a60", "Prin aceste evaluări s-au identificat note Utile care sunt afișate sub formă de context la postări și ajută la informarea utilizatorilor."),
                t("bbc44f5a", "Prin aceste evaluări sunt identificate note Utile care sunt afișate sub formă de context la postări și ajută la informarea utilizatorilor."),
                t("b4f21858", "Evaluările care au ajutat o notă să fie marcată Neutilă"),
                t("d46b6bc8", "Aceste evaluări îmbunătățesc Notele Comunității, oferind feedback autorilor de note și permițând contributorilor să se concentreze pe cele mai promițătoare note."),
                t("a5e6ba6a", "Evaluarea Utilă la notele care au ajuns să aibă starea Neutilă"),
                t("a22929e4", "Evaluarea Neutilă la notele care au ajuns să aibă starea Utilă"),
                t("b76dd726", "Aceste evaluări sunt uzuale și pot duce la o modificare a stării dacă destul de multe persoane sunt de acord că nota „Utilă” nu este suficient de utilă."),
                t("j29cc0f2", "Aceste evaluări sunt numărate de două ori deoarece adesea indică suport pentru notele pe care alții le-au considerat a fi de calitate inferioară."),
                t("cd4333d0", "Nu te speria, toată lumea primește evaluări de acest fel! "),
                t("e9fa53ac", "Evaluări ale notelor care nu sunt încă marcate Utile sau Neutile."),
                t("fc664dee", "Evaluări efectuate după ce nota a obținut o stare"),
                t("f024ec64", "Aceste evaluări pot consolida starea unei note sau pot contribui la schimbarea stării notei."),
                t("e1ee08e6", "Impact în formă scrisă"),
                t("je3fc324", "Notele tale care au obținut starea Utilă"),
                t("f7358242", "Note care au fost marcate Utile"),
                t("j8e9b514", "Foarte bine! Aceste note sunt afișate acum pentru oricine vede postarea, adăugând context și ajutând la informarea utilizatorilor."),
                t("e9e57c5c", "Aceste note sunt afișate acum pentru oricine vede postarea, adăugând context și ajutând la informarea utilizatorilor."),
                t("fee0d8a8", "Aceste note sunt afișate pe X, adăugând context la postări și ajutând la informarea utilizatorilor."),
                t("iab44364", "Notele tale care au obținut starea Neutilă"),
                t("d8c90438", "Note care au fost marcate Neutile"),
                t("accaa48e", "Aceste note au fost evaluate drept Neutile de suficienți contributori, inclusiv de persoane care câteodată nu au căzut de acord la evaluările trecute. Poți vedea aceste note și feedbackul primit de acestea pe profilul tău.\nStările notelor se pot modifica pe măsură ce mai mulți utilizatori le evaluează."),
                t("fa2156f6", "Aceste note au fost evaluate drept Neutile de suficienți contributori, inclusiv de persoane care câteodată nu au căzut de acord la evaluările trecute.\nStările notelor se pot modifica pe măsură ce mai mulți utilizatori le evaluează."),
                t("d004c768", "Note care necesită mai multe evaluări"),
                t("f3d6d6c0", "Note care nu au fost încă marcate Utile sau Neutile."),
                t("d68a370c", "Ultima actualizare: "),
                t("f10aaf3c", "Recomandări privind evaluarea notelor"),
                t("b9793c9a", "Nu ai scris încă note"),
                t("bed66f92", "Iată cum poți începe:"),
                t("a3ca686a", "Vezi sfaturi pentru redactarea de note utile"),
                t("ga8034c6", "Atinge meniul ••• pe orice postare pentru a scrie o notă"),
                t("h4109636", "În cazul în care consideri că o postare este potențial înșelătoare, scrie o notă care adaugă context util pentru persoanele care pot vedea postarea."),
                t("ec30e9ac", "Alți contributori vor evalua gradul de utilitate al notei tale"),
                t("e0c42f80", "Dacă nota este marcată drept Utilă, va fi afișată sub formă de context pentru toate persoanele care văd postarea"),
                t("ife4baaa", "Notele Comunității nu funcționează după regula majorității. Pentru a identifica notele care sunt utile unui număr mare de persoane, stările notelor necesită un acord în rândul contributorilor care uneori nu au căzut de acord la evaluările trecute. Acest lucru ajută la prevenirea evaluărilor părtinitoare."),
                t("a0c552ee", "Impactul tău va fi afișat aici"),
                t("a4e5ea3c", "Nu ai evaluat încă note"),
                t("g9a28bde", "Navighează prin note care au nevoie de ajutor"),
                t("dc0046e2", "Navighează pe pagina principală Notele Comunității"),
                t("fecae168", "Acolo vei vedea note care au nevoie de mai multe evaluări și unde poate fi de folos evaluarea ta."),
                t("h525e29e", "Ajută-ne să găsim note care pot fi utile unui număr mare de persoane"),
                t("f6db7706", "Cele mai bune note în Notele Comunității abordează direct ce se afirmă în postare, sunt scrise în limbaj clar și util și adaugă surse pe care un număr mare de persoane le pot considera de încredere."),
                t("f636b582", "Ajută-ne să găsim note care nu sunt utile"),
                t("f58f4f62", "Evaluarea notelor de calitate slabă îmbunătățește Notele Comunității, oferind feedback autorilor de note și permițând contributorilor să se concentreze pe cele mai promițătoare note."),
                t("cf30af22", "Știai că...?"),
                t("d145b0fa", "Stările notelor nu sunt influențate de regula majorității. Pentru a identifica notele care sunt utile unui număr mare de persoane, stările notelor necesită un acord în rândul contributorilor care uneori nu au căzut de acord la evaluările trecute. Acest lucru ajută la prevenirea evaluărilor părtinitoare."),
                t("c20a24cc", "Felicitări!"),
                t("d01b8fc8", "Ești un autor popular în Notele Comunității."),
                t("jbe2ad46", "Autorii cu un puternic Impact al scrierii și cu o mare parte din note cu starea „Utilă” primesc acces la:"),
                t("d2dc3d4c", "Prioritate la alertele despre note"),
                t("heb73816", "Propunerile de note din partea Autorilor populari au probabilități mai mari de a genera notificări pentru a capta atenția evaluatorilor."),
                t("b760d51a", "Ecuson în profilul aliasului"),
                t("ief63e50", "Autorii populari pot fi identificați pe baza ecusonului de pe profilul lor din Notele Comunității."),
                t("jd6b88ca", "Note despre conținutul media"),
                t("c39bdf5a", "Autorii populari pot redacta note despre conținutul media din mai multe postări, ajutând ca mult mai multe persoane să fie mai bine informate."),
                t("efb9a9e0", "Nu e nimic de văzut aici"),
                t("a1529ce7", "Află mai multe"),
                t("f07ed596", "Contributorii ca tine ne ajută în mod colectiv să identificăm note Utile care vor fi afișate pe X sub formă de context și să menținem utilizatorii informați."),
                t("h2b5268a", "Foarte bine! Evaluează mai multe note pentru a continua să îți crești impactul."),
                t("e86c87a0", "Evaluează mai multe note"),
                t("ad98f836", "Impactul evaluării tale a scăzut. Dar nu-ți fă griji!"),
                t("e2d7c914", "Evaluează în continuare note"),
                t("a5427624", "Navighează pe pagina principală Notele Comunității pentru a găsi note care trebuie evaluate de mai mulți contributori."),
                t("e227a7fa", "Starea notelor se poate schimba oricând"),
                t("eda73c9c", "Câteodată, evaluările tale nu corespund cu starea unei note. Nicio problemă! Dacă mai mulți contributori sunt de acord cu tine, starea notei poate fi schimbată, iar impactul tău va crește."),
                t("cfa3b664", "Acum poți scrie note în Notele Comunității!"),
                t("j44125ee", "Acest colaborator nu a scris nicio notă încă."),
                t("da55067c", "Vezi acest Spațiu mai târziu!"),
                t("f893c3b8", "Alătură-te la Notele Comunității"),
                t("a701795c", "Nu există încă note în Notele Comunității"),
                t("db08295e", "Dorești să te alături?"),
                t("ha275800", "Se pare că nu faci parte din programul pilot Notele Comunității. Alătură-te acum pentru a-i ajuta pe ceilalți utilizatori să fie mai bine informați."),
                t("ce0a213a", "Pentru a crea o notă, selectează pictograma Notele Comunității din meniul oricărei postări. Notele pe care le creezi se vor afișa aici."),
                t("c87f3cf8", "Notă"),
                t("a5b19492", "Această notă nu există"),
                t("c21d1b2a", "Notele primesc starea Este utilă sau Nu este utilă după ce există un acord din partea unui număr suficient de contributori, inclusiv persoane care câteodată nu au fost de acord cu evaluările trecute. În felul acesta ne asigurăm că notele sunt utile pentru o gamă largă de persoane și că sunt prevenite evaluările părtinitoare."),
                t("c7b59cde", "Setări pentru Notele Comunității"),
                t("c8be1d0d", "Află mai multe."),
                t("a5a2330c", "Postări cu același conținut media"),
                t("ad071b5c", "Postări care folosesc același link"),
                t("b92967c0", "Această notă nu este o notă de conținut media"),
                t("i92fddce", "Nota se afișează automat la postările de mai jos, dacă un număr suficient de persoane sunt de acord cu acest lucru."),
                t("f5ce7a00", "Această postare cu conținut media nu are momentan nicio potrivire."),
                t("e1288bdc", "Alerte când este nevoie de ajutor la o notă"),
                t("ca14eab4", "Primești notificări când o notă a Comunității are nevoie de evaluare din partea ta."),
                t("gb2bc3d0", "Tot timpul 🔥"),
                t("c35ebcd2", "Ajut ori de câte ori pot – până la câteva pe zi"),
                t("ba165b3c", "Adesea"),
                t("g72e2a58", "Câteva alerte pe săptămână"),
                t("idd249e0", "Câteodată"),
                t("if2e01ee", "Câteva alerte pe lună"),
                t("fdaeaab8", "A apărut o eroare la salvarea setărilor tale, te rugăm să încerci din nou."),
                t("db4e443a", "Setările tale au fost salvate."),
                t("dc11636c", "Limbile pe care le vorbești"),
                t("fae059c6", "Părăsește programul Notele Comunității"),
                t("ed37123a", "Părăsești programul Notele Comunității"),
                t("c1a554a2", "Iată ce ar trebui să știi:"),
                t("j59355fe", "Nu vei putea scrie noi Note ale Comunității."),
                t("c23420ec", "Nu vei primi notificări privind Notele Comunității decât dacă sunt referitoare la activitatea ta pe X."),
                t("c76031ee", "Profilul tău anonim pentru Notele Comunității și trimiterile anterioare vor rămâne disponibile public. Vei putea vedea și șterge în continuare notele tale."),
                t("be4f9106", "Te poți alătura din nou după 90 de zile."),
                t("hf68e810", "Notele Comunității este un program menit să creeze o lume mai bine informată. Acesta oferă utilizatorilor X posibilitatea de a adăuga în mod colaborativ note utile la postări care pot fi înșelătoare."),
                t("jdb52860", "Colaboratorii scriu și evaluează note"),
                t("c104025c", "Contributorii sunt persoane de pe X, la fel ca tine, care aleg să se înscrie în programul pilot pentru a scrie și evalua note. Cu cât participă mai multe persoane, cu atât mai bun va fi programul."),
                t("j7872b8c", "Doar notele care sunt catalogate drept utile apar la o postare"),
                t("fb59415e", "Pentru a putea fi afișată public sub formă de context la postare, o notă trebuie evaluată drept utilă de suficiente persoane cu puncte de vedere diferite. Această abordare ajută la evitarea părerilor subiective și a manipulării și la identificarea notelor care sunt utile pentru multe persoane."),
                t("f9a44022", "Nu compania X alege ce va fi publicat, ci utilizatorii"),
                t("gdf4fbb2", "Compania X nu scrie, nu evaluează și nu moderează notele (cu excepția cazului în care se încalcă regulile X). Credem că faptul că oferim utilizatorilor posibilitatea de a lua decizii împreună este o modalitate corectă și eficientă de a adăuga informații care îi ajută să fie mai bine informați."),
                t("cc720e6a", "Notele Comunității se bazează pe transparența datelor"),
                t("j2fcd33a", "Datele cuprind contribuțiile oferite până la"),
                t("d4a6b322", "Toate datele din Notele Comunității sunt publicate aici zilnic pentru ca membrii comunității noastre să aibă acces liber să le analizeze, să identifice probleme și să găsească oportunități prin care să îmbunătățească Notele Comunității. Abia așteptăm să învățăm împreună cu tine."),
                t("c359263a", "Află cum poți utiliza și analiza datele în Notele Comunității "),
                t("b8a27fe2", "din ghidul nostru"),
                t("j1c99e00", "Date despre note"),
                t("i6f69314", "Date despre evaluări"),
                t("b7e4c114", "Date istoric cu starea Notei"),
                t("d7f19114", "Date privind starea înscrierii utilizatorului"),
                t("b6008808", "Date despre cererea unei note"),
                t("h786cd7a", "Nu sunt disponibile date despre note deocamdată"),
                t("d0fe8052", "Nu sunt disponibile date de evaluare deocamdată"),
                t("c0427f94", "Nu sunt disponibile date legate de istoricul cu starea Notei deocamdată"),
                t("g880d8c0", "Datele privind starea înscrierii utilizatorului nu sunt disponibile încă"),
                t("ab1b3d38", "Deocamdată, nu sunt disponibile date despre cererea unei note"),
                t("c43fb933", "Acordul și Politica pentru dezvoltatori X"),
                t("af781666", "Ce spun oamenii?"),
                t("a1f414ee", "Spune ce crezi"),
                t("ed88e742", "Copiază linkul către subiect"),
                t("h92fe1be", "Din păcate, Notele Comunității nu este disponibil pentru tine momentan."),
                t("f0dc1434", "Notele Comunității este momentan disponibil doar în SUA"),
                t("f8fc0b48", "Creează un folder"),
                t("c14bcdde", "Caută în Marcaje"),
                t("e9c65c4a", "Căutare marcaje"),
                t("b92a21d9", function (e) {
                    return "Nu sunt rezultate pentru " + e.query;
                }),
                t("f191a2ba", "Setările de căutare"),
                t("a068008a", "Folderele nu se încarcă momentan"),
                t("f075b0e8", "Editează folderul");
            t("beba2a0e", "Creează un nou folder cu Marcaje"),
                t("e41c9b4f", function (e) {
                    return "Saved to " + e.bookmarkFolderName;
                }),
                t("h18f86a4", "Șterge folder"),
                t("f4ea967a", "Folderul a fost șters"),
                t("b670aa62", "Nume folder"),
                t("aece5462", "Denumirea folderului a fost actualizată cu succes"),
                t("e3299b94", "Ceva nu a mers bine. Încearcă din nou să actualizezi acel folder într-un minut."),
                t("c09ea714", "Ceva nu a mers bine. Încearcă din nou să ștergi folderul într-un minut."),
                t("gee78816", "Numele folderelor cu marcaje nu pot depăși 25 de caractere"),
                t("h9a5daa2", "Ștergi folderul?"),
                t("ac9d5f56", "Postările tale vor fi salvate în continuare în folderul „Toate marcajele”"),
                t("i6e7e298", "Creează"),
                t("a0ea2fa6", "Câmpul cu nume nu poate rămâne necompletat"),
                t("eec37eac", "Folderul Marcaje cu acest nume există deja"),
                t("fce0c59e", "Nu s-a putut analiza animația JSON. Verifică formatul JSON în fișierul tău de animație și încearcă din nou."),
                t("g0eea6c2", "Nu s-a putut citi fișierul de animație JSON. Încearcă să deschizi din nou fișierul."),
                t("ae58026a", "Deschide un fișier Apreciere de marcă .json pentru previzualizare"),
                t("hd0bc1eb", function (e) {
                    return e.name + " este în direct";
                }),
                t("bea1f26b", function (e) {
                    return e.name + " a fost în direct";
                }),
                t("ab3ee97f", function (e) {
                    return e.screenName + " nu este în direct";
                }),
                t("d39d46c4", "Titlul a fost actualizat. Modificările pot dura până la 30 de secunde pentru a se afișa."),
                t("e44095a5", function (e) {
                    return "Inițiat " + e.timestamp;
                }),
                t("j83f29dd", function (e) {
                    return "Finalizat " + e.timestamp;
                }),
                t("daca8a2c", "Deschide în secțiunea fixă"),
                t("e3aac82a", "Se încarcă transmisiunea"),
                t("i0ed3f4e", "Imagine eveniment"),
                t("cbae35fa", "Raportează transmisiunea"),
                t("fd12ab58", "Postări din colecție"),
                t("a226497c", "Creează o Comunitate nouă"),
                t("d7346632", "Nu te-ai alăturat încă la nicio Comunitate"),
                t("b732a4cc", "Odată ce faci acest lucru, le vei vedea postările aici."),
                t("hff48914", "În acest moment, nu s-au putut găsi postări."),
                t("hb52cc4a", "Te rugăm să încerci din nou mai târziu."),
                t("e50e1bb0", "Bun venit la Comunități"),
                t("i6829daa", "Comunitățile sunt grupuri de discuții moderate, unde persoanele de pe X se pot conecta și pot distribui conținut."),
                t("fc5c6914", "Întâlnește alte persoane care au aceleași interese ca tine"),
                t("aa1a9820", "Alătură-te Comunităților pentru a intra în contact cu persoane care au aceleași interese ca tine."),
                t("edef4c82", "Postează direct într-o Comunitate"),
                t("a7640df6", "Postările tale sunt distribuite membrilor Comunității și urmăritorilor tăi."),
                t("h3bb8068", "Cere ajutor când ai nevoie"),
                t("a709f8f8", "Administratorii și moderatorii ajută la gestionarea Comunităților și mențin conversațiile pe drumul cel bun."),
                t("c8d33380", "Elemente noi"),
                t("cb6adb10", "Descoperă comunități"),
                t("df362964", "Găsește Comunități"),
                t("dfd5031f", function (e) {
                    return e.newTweets + " post" + r(e.newTweets, "ări", "are", "ări") + " nou/noi";
                }),
                t("ha4bb8a9", function (e) {
                    return e.reportedTweets + " " + r(e.reportedTweets, "rapoarte", "raport", "de rapoarte");
                }),
                t("caf003b3", function (e) {
                    return e.memberRequests + " " + r(e.memberRequests, "de cereri", "cerere", "cereri");
                }),
                t("a2118086", "Sortare postări"),
                t("hb01fe46", "Când te alături, le vei vedea aici."),
                t("c170a564", "Termenul introdus nu a generat rezultate. Încearcă un alt termen de căutare."),
                t("cbd1aef8", "Caută comunități și postări"),
                t("fbf01e52", "Caută Comunități"),
                t("c8a6499c", "Rezultate pentru căutarea postărilor din comunitate"),
                t("af05a978", "Rezultatele căutării vor apărea aici pe măsură ce tastezi."),
                t("eb4d2cd0", "Nu au fost găsite postări."),
                t("a8ecdb4c", "Rezultate la căutarea celor mai recente postări din comunitate"),
                t("dc6ce7b4", "Membri"),
                t("ga2aa43c", "Moderatori"),
                t("b139b54a", "Invită membri"),
                t("cf4898a0", "Caută persoane"),
                t("g30bc699", function (e) {
                    return "Vezi profilul utilizatorului @" + e.screenName;
                }),
                t("e585d844", "Adaugă la echipa de moderatori"),
                t("cab7c6f8", "Vrei să adaugi utilizatorul la echipa de moderatori?"),
                t("e96d5255", function (e) {
                    return "@" + e.screenName + " este acum moderator.";
                }),
                t("f348a395", function (e) {
                    return "Momentan nu putem adăuga utilizatorul @" + e.screenName + " la echipa de moderatori. Încearcă din nou mai târziu.";
                }),
                t("c3a1aebe", "Elimină din echipa de moderatori"),
                t("c273c8a6", "Vrei să elimini utilizatorul din echipa de moderatori?"),
                t("c0eb2a53", function (e) {
                    return "@" + e.screenName + " nu mai este moderator.";
                }),
                t("a5808125", function (e) {
                    return "Momentan nu putem elimina utilizatorul @" + e.screenName + " din echipa de moderatori. Încearcă din nou mai târziu.";
                }),
                t("a51d671b", function (e) {
                    return "Interzice @" + e.screenName + " în Comunitate";
                }),
                t("cdd87524", "Nu s-a alăturat încă nimeni"),
                t("cca51910", "Când persoanele se alătură acestei Comunități, vei vedea numele lor aici."),
                t("c9d56b72", "Spune-ne câte ceva despre Comunitatea ta. Poți modifica oricând aceste detalii."),
                t("c1ad5a12", "Se pare că nu reușim să creăm noua ta Comunitate. Încearcă din nou mai târziu."),
                t("f713fbd2", "Membri"),
                t("d1fa71fc", "Întrebare de aprobare (opțional)"),
                t("a0a16d38", "Oricine se poate alătura și/sau poate fi invitat să se alăture Comunității."),
                t("ce0523a8", "Restricționată"),
                t("i1aad6ec", "Utilizatorii trebuie să solicite să se alăture, iar echipa de moderatori trebuie să aprobe aceste solicitări. Persoanele invitate de către echipa de moderatori sunt aprobate automat."),
                t("c85960a0", "Permite membrilor să trimită invitații"),
                t("ca373cd2", "Persoanele invitate de membrii existenți sunt aprobate automat."),
                t("dfdcc6b4", "Controlează cine se poate alătura Comunității tale. Nu uita că toate Comunitățile sunt vizibile pentru toți utilizatorii X."),
                t("h3e55b40", "Numele Comunității"),
                t("dd71d9c9", function (e) {
                    return "Numele trebuie să conțină între " + e.minCharacterCount + " și " + e.maxCharacterCount + " caractere și nu poate include hashtag sau @nume de utilizator";
                }),
                t("cf65e56b", function (e) {
                    return "Numele trebuie să aibă între " + e.minCharacterCount + " și " + e.maxCharacterCount + " caractere";
                }),
                t("d936eeca", "Numele nu pot include hashtag sau @nume de utilizator."),
                t("e2df7cf2", "Scopul Comunității"),
                t("be9bb312", "Un scop puternic descrie Comunitatea ta și permite utilizatorilor să știe la ce să se aștepte"),
                t("e988475f", function (e) {
                    return "Scopul trebuie să aibă între " + e.minCharacterCount + " și " + e.maxCharacterCount + " caractere";
                }),
                t("gcddfba8", "Întrebare de aprobare"),
                t("hf86d862", "Atunci când utilizatorii solicită să se alăture, pot răspunde la această întrebare. Răspunsul va fi afișat împreună cu solicitarea lor. Poți să elimini întrebarea lăsând câmpul necompletat."),
                t("i88b7305", function (e) {
                    return "Întrebarea trebuie să aibă mai puțin de " + e.maxCharacterCount + " caractere";
                }),
                t("dce5e1b4", "Instrumente de administrare"),
                t("c5d8c93e", "Instrumente pentru moderatori"),
                t("c8c7f9fc", "Revizuire necesară"),
                t("a87df2ee", "Gestionarea Comunității"),
                t("ee609174", "Setări generale"),
                t("ab19cdaa", "Setări spam"),
                t("d755f47d", function (e) {
                    return e.count + " post" + r(e.count, "ări noi", "are nouă", "ări noi") + " de revizuit";
                }),
                t("efc26607", function (e) {
                    return e.memberCount + " " + r(e.memberCount, "membri", "membru", "de membri");
                }),
                t("adfcc3ce", "Adaugă, șterge sau editează reguli"),
                t("d0330d9c", "Vizualizează regulile"),
                t("fd67f7c8", "Editează numele Comunității, scopul ei și altele"),
                t("e7e31264", "Ajustează filtrul pentru spam și instrumentele de raportare"),
                t("gc00d212", "Asistență și resurse"),
                t("g0cbfc50", "Ghid util pentru moderarea Comunității"),
                t("h6ebcfca", "Afișează această Comunitate pe profilul tău"),
                t("c0fa0634", "Pune Comunitatea ta în prim plan"),
                t("da035fd5", function (e) {
                    return "Nou" + e.ttc_c9s_spotlight_header;
                }),
                t("h41224f8", "Pune Comunitatea ta în prim plan pe profilul tău"),
                t("b18e94b2", "Comută la un cont profesional pentru a afișa o Comunitate pe profilul tău, pentru a accesa date analitice legate de public și multe altele."),
                t("dc716b1c", "Lista Comunității"),
                t("c3e2dda6", "Adaugă sau elimină o listă a Comunității"),
                t("a68bffdc", "Analizează metricile comunități"),
                t("c6ea29a2", "Părăsește echipa de moderatori"),
                t("a6e13fac", "Sigur vrei să părăsești echipa de moderatori?"),
                t("e538848c", "Nu vei mai avea acces la instrumentele pentru moderatori. Dacă te răzgândești, va trebui să fii invitat din nou ca moderator."),
                t("j49e6aa2", "Da, vreau să părăsesc echipa"),
                t("dde5f323", function (e) {
                    return e.count + " " + r(e.count, "(de) cereri noi", "cerere nouă", "(de) cereri noi") + " de a deveni membru de revizuit";
                }),
                t("f5e0332a", "Conținut pentru adulți (NSFW)"),
                t("e983404a", "Hashtaguri fixate"),
                t("j8af8eaa", "Tip de membru"),
                t("d5f01116", "Scop"),
                t("c2ff3c9e", "Etichete de căutare"),
                t("f4a98e9e", "Informații despre Comunitate"),
                t("a43bed28", "Trebuie să activezi această setare în cazul în care comunitatea ta include conținut sensibil pentru adulți. Omiterea acestui pas va duce la filtrarea întreg conținutului sensibil pentru adulți, din cadrul comunității tale."),
                t("ab1069de", "Șterge Comunitatea"),
                t("bbc91896", "Această acțiune nu poate fi anulată. Autorii postărilor își pot vedea în continuare propriile postări."),
                t("i27eb0b7", function (e) {
                    return "" + e.communityName;
                }),
                t("a49f884e", "Banner pentru Comunitate"),
                t("ea965b82", "Editează bannerul pentru Comunitate"),
                t("j35d3ad6", "Elimină și înlocuiește"),
                t("f1e8fb22", "Bannerul tău va fi eliminat și înlocuit cu bannerul implicit."),
                t("e405ec22", "Se pare că nu reușim să salvăm imaginea bannerului tău. Te rugăm să încerci din nou mai târziu."),
                t("b7fb6bda", "Trunchiază imaginea"),
                t("e71cdf4e", "Trunchiază miniatura"),
                t("ef199198", "Setările tale au fost salvate"),
                t("ee10aa5a", "Setările tale nu au putut fi salvate"),
                t("i307a7ca", "Editează hashtagurile fixate"),
                t("dc6eca54", "Hashtag șters"),
                t("d27de326", "Fixează hashtaguri pentru a organiza postările comunității tale în cronologii separate"),
                t("d84cc77a", "Tastează un hashtag aici"),
                t("d22e4cba", "Hashtagurile trebuie să fie unice"),
                t("ca72a540", "Ai atins numărul maxim de hashtaguri permise"),
                t("bd96bf16", "Hashtagurile trebuie să aibă lungimea minimă de 1 caracter și lungimea maximă de 30 de caractere"),
                t("j27623d4", "Hashtagurile nu trebuie să conțină spații sau caractere speciale"),
                t("c5d1634e", "Ok, înțeleg"),
                t("daedd9fa", "Acest lucru va permite oricărui utilizator să se alăture Comunității. Toate solicitările de alăturare aflate în așteptare vor fi aprobate automat."),
                t("h3c0f1a2", "Editează numele Comunității"),
                t("cb5e6510", "Se pare că nu reușim să salvăm noul tău nume. Te rugăm să încerci din nou mai târziu."),
                t("a8955490", "Editare scop"),
                t("ced2292a", "Se pare că nu reușim să salvăm descrierea scopului tău. Te rugăm să încerci din nou mai târziu."),
                t("ba74c098", "Editează întrebarea"),
                t("bd3e0420", "Se pare că nu reușim să salvăm întrebarea ta. Te rugăm să încerci din nou mai târziu."),
                t("b57baa7a", "Editare etichete de căutare"),
                t("f8caab7a", "Adaugă etichete de căutare pentru a da boost comunității tale în recomandări și în rezultatele căutărilor."),
                t("f35a667a", "Introdu aici o etichetă de căutare"),
                t("b057d5c6", "Etichetele de căutare trebuie să fie unice"),
                t("cc961258", "Ai atins numărul maxim de etichete de căutare permise"),
                t("df4aca88", "Etichetele de căutare trebuie să aibă minimum 1 caracter și maximum 30 de caractere"),
                t("ie58fa58", "Etichetele de căutare nu trebuie să conțină spații sau caractere speciale"),
                t("hd176a01", function (e) {
                    return "Subiectul a fost salvat! Subiectul comunității este acum " + e.newTopicName;
                }),
                t("i39a43cc", "Subiectul comunității a fost eliminat"),
                t("e81b196e", "Noul subiect nu a putut fi salvat"),
                t("c1f97ad4", "Editează subiectul"),
                t("g908eb0c", "Adaugă un subiect pentru ca ceilalți să-ți descopere mai ușor comunitatea! Selectează subiectul care se potrivește cel mai bine comunității tale."),
                t("f18a8ca0", "Setări spam"),
                t("c8bd5d42", "Sensibilitate filtru spam"),
                t("gfeb40a2", "Pentru a gestiona postările nedorite, filtrele de spam pot fi ajustate în funcție de diferite niveluri de sensibilitate."),
                t("h766865c", "Raportare automată de către X"),
                t("fd1f413a", "Raportare automată către moderatori, cu caracteristicile selectate. După aprobarea unei postări, postările viitoare ale autorului nu vor mai fi raportate automat de către X."),
                t("b1ba5fb4", "Detectare spammeri"),
                t("ee195f28", "Cuvinte cheie spam"),
                t("cf276a82", "Ascunde postările raportate de X până când sunt aprobate de moderatori"),
                t("a8c4c3fe", "Raportează postări de la utilizatori cu antecedente comportamentale de spam"),
                t("j8de95ec", "Introdu cuvinte cheie care vor declanșa raportări automate"),
                t("ie873142", "Ridicată"),
                t("a977afa2", "Scăzută"),
                t("j715cb38", "Editează cuvintele cheie interzise"),
                t("b32ebbe8", "Adaugă cuvinte cheie pentru ca X să raporteze automat către moderatorii Comunității"),
                t("acde5366", "Tastează aici un cuvânt chei"),
                t("a5f66c34", "Cuvintele cheie trebuie să fie unice"),
                t("ea637914", "Ai atins numărul maxim de cuvinte cheie permise"),
                t("fede6d3c", "Cuvintele cheie trebuie să aibă minimum 1 caracter și maximum 30 de caractere"),
                t("cc06e200", "Cuvintele cheie nu trebuie să conțină spații sau caractere speciale"),
                t("d94edeb4", "Comunitatea ta poate avea până la 10 reguli. Regulile clare pot încuraja participarea politicoasă și mențin conversațiile pe drumul cel bun."),
                t("j560c8ea", "Adaugă regulă"),
                t("a9ba79c0", "Regulile bune fac Comunități bune"),
                t("h5482c7a", "Gândește-te bine la regulile Comunității tale. Ele stabilesc tonul și permit membrilor să știe ce așteptări ai de la ei."),
                t("d5033a7a", "De exemplu, vrei să menții conversațiile strict la subiect? Este autopromovarea permisă? Dar înjurăturile?"),
                t("ee8c43a0", "Cu cât ești mai clar de la început, cu atât vei avea mai puțin de moderat mai târziu."),
                t("gaa3239a", "Se pare că nu reușim să salvăm noua ta regulă. Încearcă din nou mai târziu."),
                t("a67445d6", "Ai atins pragul"),
                t("fcbe0993", function (e) {
                    return "Comunitățile pot avea până la " + e.maxRuleCount + " reguli. Pentru a adăuga una nouă, va trebui să ștergi o regulă pe care o ai deja.";
                }),
                t("c66769a4", "Regulă"),
                t("ef02695b", function (e) {
                    return "Numele regulii trebuie să aibă între " + e.minCharacterCount + " și " + e.maxCharacterCount + " (de) caractere";
                }),
                t("c8242020", "Descriere (opțional)"),
                t("d32cf5e7", function (e) {
                    return "Descrierile pot avea maximum " + e.maxCharacterCount + " (de) caractere";
                }),
                t("f8fa00c7", function (e) {
                    return "Descriptions can’t exceed " + e.maxCharacterCount + " characters";
                }),
                t("d45ae5e0", "Nu uita să informezi Comunitatea"),
                t("c1631260", "Informarea tuturor în legătură cu modificările regulilor ajută la construirea încrederii."),
                t("d3190bde", "Salvează regula"),
                t("ifd6e91c", "Anulează și editează regula"),
                t("h99020e0", "Editează regula"),
                t("f74a5adc", "Comunitățile au nevoie de cel puțin o regulă. Poți edita regula pe care o ai deja sau poți adăuga o altă regulă, iar apoi o poți șterge pe prima."),
                t("fbb0ed92", "Șterge această regulă"),
                t("hed35472", "Ștergerea unei reguli este permanentă și nu poate fi anulată."),
                t("c8677446", "Șterge regula"),
                t("c3a0d44e", "Anulează și editează regula"),
                t("d703ce9e", "Adaugă o listă la Comunitatea ta"),
                t("f21f023c", "Adăugarea unei liste la Comunitatea ta populează fluxul cu respectivul conținut relevant creat de tine. Alege una din listele de mai jos:"),
                t("gbc2cf50", "Listele tale"),
                t("ef9462fa", "Nu ai o listă relevantă?"),
                t("fcda89f4", "Creează o listă nouă folosind conturi de pe X care postează conținut relevant pentru Comunitatea ta. Menține lista publică astfel încât să rămână vizibilă pentru Comunitate."),
                t("c09609d8", "Creează o listă"),
                t("dfddd842", "Trimis prin mesaj direct"),
                t("a3b3939b", function (e) {
                    return "@" + e.screen_name + " a fost deja invitat";
                }),
                t("db4f0cc9", function (e) {
                    return "@" + e.screen_name + " este deja în această Comunitate";
                }),
                t("h252ede6", "Ai folosit deja toate invitațiile tale"),
                t("a5cd93f9", function (e) {
                    return "@" + e.screen_name + " nu poate fi invitat în acest moment";
                }),
                t("i6568549", function (e) {
                    return "Ți-au rămas " + e.remaining_invite_count + " " + r(e.remaining_invite_count, "invitații", "invită", "de invitații");
                }),
                t("b4f16d00", "Caută persoane de invitat"),
                t("ja1387a8", "Rezultatele căutării vor include doar următorii tăi și persoanele care permit primirea de mesaje directe de la toată lumea."),
                t("ae85768c", "Rezultatele căutării includ doar urmăritorii tăi și persoanele care permit primirea de mesaje directe de la toată lumea."),
                t("hb1e378e", "Invitat"),
                t("d710b60c", "Analiză Comunitate"),
                t("c199e390", "Postări noi"),
                t("b4f51cd6", "Numărul de postări din ultima săptămână"),
                t("g6f8325a", "Membri noi"),
                t("b2bb7276", "Membri noi care s-au alăturat în ultima săptămână"),
                t("e2172c92", "Membri activi"),
                t("fe1a9f68", "Numărul de membri care au postat în comunitatea ta"),
                t("e989927e", "Persoane care au postat o singură dată"),
                t("d1386a90", "Numărul de membri care au postat în comunitatea ta"),
                t("abf609f2", "Numărul total de membri"),
                t("h2081878", "Numărul total de membri din comunitatea ta"),
                t("a3235cd6", "Vizite unice"),
                t("g21e2a70", "Numărul de utilizatori X care ți-au vizitat comunitatea săptămâna trecută"),
                t("ied6bac2", "Numărul de aprecieri"),
                t("ced8d39a", "Numărul de aprecieri din comunitatea ta săptămâna trecută"),
                t("fb4f859c", "Numărul de răspunsuri"),
                t("h5a41cce", "Numărul de răspunsuri din comunitatea ta săptămâna trecută"),
                t("i314218e", "Statistici afișate pentru ultimele 7 zile. Actualizate pe "),
                t("addbb11e", "Nu există cereri noi de alăturare la Comunitate"),
                t("c38131de", "Ești la zi. Când există cereri noi, le vei vedea aici."),
                t("d7f13fb9", function (e) {
                    return "@" + e.screenName + " a fost aprobat și este acum membru al Comunității tale";
                }),
                t("a340df67", function (e) {
                    return "@" + e.screenName + " a fost refuzat și nu se poate alătura Comunității tale";
                }),
                t("jd8aae9d", function (e) {
                    return "Se pare că momentan nu putem aproba utilizatorul @" + e.screenName + ". Încearcă din nou mai târziu.";
                }),
                t("i580e149", function (e) {
                    return "Se pare că momentan nu putem refuza utilizatorul @" + e.screenName + ". Încearcă din nou mai târziu.";
                }),
                t("b4a38e4e", "Ai blocat această persoană. Dacă este acceptată ca membru, va trebui să o deblochezi pentru a-i vedea postările."),
                t("f0956736", "Ai ignorat această persoană. Dacă este acceptată ca membru, va trebui să anulezi ignorarea ei pentru a-i vedea postările."),
                t("b7f1e58a", "Te urmărește"),
                t("dffb0774", "Momentan nimic de revizuit"),
                t("ab512f26", "Nu s-au înregistrat acțiuni în jurnal."),
                t("b8171558", "Interzise"),
                t("e32e7e1a", "Moderator"),
                t("b53fb7c6", "Se pare că nu poți anula această acțiune acum. Încearcă din nou mai târziu."),
                t("c546ba07", function (e) {
                    return "Vizualizează profilul lui " + e.userName;
                }),
                t("h4516e4f", function (e) {
                    return "Caută postările utilizatorului " + e.userName + " în această Comunitate";
                }),
                t("j4d4a809", function (e) {
                    return e.moderatorName + " a ascuns o postare";
                }),
                t("ja589ea5", function (e) {
                    return e.revertedModeratorName + " a anulat ascunderea unei postări";
                }),
                t("c904a2ff", function (e) {
                    return e.moderatorName + " a fixat o postare";
                }),
                t("b43358cf", function (e) {
                    return e.moderatorName + " a anulat fixarea unei postări";
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
                t("f6530972", "Ascunde postarea"),
                t("j68fc824", "Ascundere anulată"),
                t("j9541e18", "Caută postări"),
                t("j10903d7", function (e) {
                    return e.moderatorName + " a eliminat un membru";
                }),
                t("e38bf285", function (e) {
                    return e.revertedModeratorName + " a reprimit un membru";
                }),
                t("dea0d437", function (e) {
                    return e.userName + " s-a alăturat acestei comunități";
                }),
                t("j10346f5", function (e) {
                    return e.userName + " a părăsit această comunitate";
                }),
                t("jb159607", function (e) {
                    return e.moderatorName + " a aprobat o cerere de membru";
                }),
                t("af7a63eb", function (e) {
                    return e.moderatorName + " a refuzat o cerere de membru";
                }),
                t("i717dfc3", function (e) {
                    return e.revertedModeratorName + " a reaprobat o cerere de membru";
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
                t("d31e695c", "Reaprobă cererea"),
                t("i9a18ce0", "Reaprobată"),
                t("i24de0fe", "Reprimește membrul"),
                t("b1c662f8", "Restaurată"),
                t("j2e04b1e", "Moderatorii au revizuit toate postările raportate."),
                t("hb21cdb6", "Interzice"),
                t("dc7a9436", "Raportează postarea către X"),
                t("e2bc5db0", "@X"),
                t("d0a1b248", function (e) {
                    return e.formattedCount + " membr" + r(e.count, "i", "u", "i");
                }),
                t("cd4d48d2", "@X"),
                t("ff0f742a", function (e) {
                    return e.formattedCount + " " + r(e.count, "membri", "membru", "de membri");
                }),
                t("dca19c06", "Ai ascuns această postare"),
                t("dd641764", "Ai păstrat această postare"),
                t("jf99d610", "Feedback din partea Comunității"),
                t("bbd69672", "Această postare a fost ascunsă de un moderator pentru că a încălcat regulile Comunității"),
                t("c730a21c", "Regula încălcată este:"),
                t("a5baa7d2", "Acordă un moment să consulți regulile. Ele ne ajută să menținem conversațiile sigure și pe drumul cel bun"),
                t("icc32e3d", function (e) {
                    return "Un moderator te-a eliminat din " + e.communityName + " pentru că ai încălcat următoarea regulă a acestei Comunități:";
                }),
                t("d7d9be8a", "Descoperă comunități și postări"),
                t("cae9962e", "În acest moment, nu s-au putut găsi comunități."),
                t("c2117be6", "Vezi elementele din secțiunea de navigare? 👀"),
                t("c2c4dad4", "Alege un element și va fi afișat aici. Așteptăm să alegi un element."),
                t("b7218496", "Niciun hashtag... deocamdată"),
                t("gc09bcfe", "Comunitatea ta nu are conversații cu hashtag, dar poți modifica acest lucru."),
                t("cf35a990", "Încarcă postări cu hashtag publicate în Comunitate"),
                t("a1c41fe8", "Postări cu hashtag publicate în Comunitate"),
                t("f27a2232", "Caută Comunitate"),
                t("ie2efe36", "Rezultate pentru căutare Comunitate"),
                t("a7c2e06d", function (e) {
                    return e.communityName + " Comunitatea";
                }),
                t("a94092a2", "Acum ai acces la instrumente pentru moderatori"),
                t("be6dfbae", "În calitate de moderator al Comunității, poți adăuga sau elimina membri."),
                t("b4f877be", "Comunitatea nu a fost găsită"),
                t("e48fbb02", "Raportează Comunitatea"),
                t("b1614c34", "Despre Comunități"),
                t("j1dcedde", "Caută postări"),
                t("cc683fba", "Despre Comunitate"),
                t("af7c11aa", "Informații despre Comunitate"),
                t("fb974b24", "Doar membrii pot posta."),
                t("fcef2922", "Oricine se poate alătura acestei Comunități."),
                t("c93dd2c8", "Pentru a te alătura acestei Comunități, trebuie să trimiți o solicitare în acest sens care să fie aprobată."),
                t("gedb877d", "Toate Comunitățile sunt vizibile public."),
                t("bf359e0e", "Despre noua ta Comunitate"),
                t("e8fcdd3a", "Vei începe cu câteva setări de bază, dar Comunitatea ta este complet personalizabilă. Îți vom prezenta detalii în continuare."),
                t("b37d580e", "Comunitatea ta este de tip restricționat"),
                t("c6d9c07c", "Toate Comunitățile sunt vizibile pentru toți utilizatorii X. Persoanele trebuie să solicite alăturarea la Comunitatea ta sau să fie invitate de către echipa de moderatori sau de membrii existenți (dacă acest lucru este permis)."),
                t("ea3b38fa", "Comunitatea ta este de tip deschis"),
                t("i625c42e", "Toate Comunitățile sunt vizibile pentru toți utilizatorii X. Oricine se poate alătura și/sau poate fi invitat să se alăture Comunității tale."),
                t("ca7eeab0", "Acestea sunt regulile pentru debutul tău în Comunitate"),
                t("acae4034", "Setările pot fi modificate în Instrumente pentru administratori"),
                t("e2186ee2", "Nu îți plac setările făcute? Nicio problemă. Le poți modifica foarte ușor."),
                t("a0e3ece4", "Detalii despre Comunitate"),
                t("d11f73ea", "Conținut pentru adulți"),
                t("hb9400dc", "Vezi mai multe"),
                t("b71a08a0", "Comunitate de abonați"),
                t("d0574662", "Setare notificări"),
                t("fc16f13a", "Ce tip de notificări vrei să primești?"),
                t("be341c46", "Spațiile Comunității (chaturi audio)"),
                t("fbe88a32", "Chaturi cu text în direct în Comunitate"),
                t("b551cd1e", "Postări fixate"),
                t("i9f39962", "Fixează comunitatea"),
                t("bc7f90a0", "Pune Comunitatea în prim plan pe profilul tău"),
                t("j5a37508", "Fixează Comunitatea pe Pagina principală"),
                t("c7a4610a", "Anulează fixarea Comunității de pe Pagina principală"),
                t("bec3b8fa", "Distribuie Comunitatea"),
                t("cc7d5b88", "Invită prin mesaj direct"),
                t("c66b37fa", "Listă de verificare pentru Comunitate"),
                t("g2768d0e", "Doar câteva lucruri pentru a avea o Comunitate bună încă de la lansare..."),
                t("b192b58c", "Elimină lista de verificare"),
                t("gd302780", "Vezi comunitatea pe care am creat-o:"),
                t("h5890b1a", "Necompletat"),
                t("b4a6faca", "Revizuiește regulile tale"),
                t("a01e1a7c", "Personalizează-ți Comunitatea"),
                t("f493480c", "Postează despre Comunitatea ta"),
                t("i9b7f6ba", "Se încarcă postările"),
                t("c22e8902", "Încearcă"),
                t("a3466e1c", "Urmărește conversații folosind hashtaguri"),
                t("a524bb7e", "Hashtagurile te ajută să creezi, să găsești și să te alături la conversații cu tematică în cadrul Comunității."),
                t("he8db880", "Se pare că această Comunitate nu există"),
                t("cc684fbc", "Poate a fost ștearsă sau poate nu a existat niciodată. Viața este plină de mistere."),
                t("b4f8b518", "Creatori pentru tine"),
                t("f5c41e22", "Accesează setările Delegare"),
                t("b9226ec1", "Conectat ca "),
                t("f47b48f6", "utilizator"),
                t("b2ca74aa", "Urmează să comuți la un cont care ți-a fost delegat"),
                t("ba77b438", "Comută între conturi"),
                t("g5261e91", function (e) {
                    return "Acum, acționezi drept @" + e.screenName + ".";
                }),
                t("cc15a3ea", "Reține că acest cont nu îți aparține. În calitate de administrator, poți trimite mesaje directe, publica postări și crea Liste, pe care le poți și vizualiza. De asemenea, poți invita sau elimina contributori la/de la cont și poți vizualiza analizele postărilor."),
                t("e406250c", "Reține că acest cont nu îți aparține. În calitate de contributor, poți trimite mesaje directe, publica postări și crea Liste, pe care le poți și vizualiza."),
                t("e6718a62", "Doar proprietarul contului poate utiliza această funcție"),
                t("ba411b6f", "trimite-ne feedback"),
                t("f01ee14b", "trimite-ne feedback"),
                t("dbc85148", "Selectează un mesaj"),
                t("a073658c", "Alege dintre conversațiile tale existente, începe o conversație nouă sau continuă ca până acum."),
                t("f325afc4", "Compune un MD"),
                t("f5dc353c", "Acum se filtrează conținutul media grafic"),
                t("daeda054", "Accesează Setări"),
                t("fe1eaa96", "Avertismentele vor fi afișate acum peste mesajele în care s-a detectat un posibil conținut media grafic (de exemplu, nuditate, conținut de natură sexuală sau violență). Poți dezactiva oricând această opțiune, în Setări."),
                t("hc32acba", "Ștergi solicitările de mesaje?"),
                t("f9048f58", "Această acțiune nu poate fi anulată și solicitările de mesaje vor fi șterse din inboxul tău."),
                t("a9d0d7f0", "Editează în bloc"),
                t("eb7de4aa", "Afișează mesajele suplimentare, inclusiv pe cele care pot include conținut ofensator."),
                t("ee8c0c8a", "Mesajele primite sau mesajele de grup de la persoane pe care nu le urmărești vor fi afișate aici, iar tu vei putea să le accepți sau să le ștergi."),
                t("ff599112", "Creează un grup"),
                t("c602600a", "Adaugă persoane"),
                t("fa2033f6", "Criptat"),
                t("aa59bb6a", "Trimite postarea separat"),
                t("a2ccb2e8", "Mesajul direct a fost trimis."),
                t("f906f464", "Postare distribuită grupului"),
                t("i8a99aae", "Postare distribuită separat."),
                t("hbbc401c", "Trimite pe grup"),
                t("e1bde73f", function (e) {
                    return "Nu-i poți trimite mesaje lui @" + e.screenName;
                }),
                t("f7289cd6", "Ai o conversație de grup selectată"),
                t("e6cced4e", "Numai conversațiile unu-la-unu pot fi „trimise pe grup”. Poți trimite în continuare mesajele separat."),
                t("e3e58b6e", "Informații despre conversație"),
                t("a9ddbb94", "Informații grup"),
                t("dd4779a0", "Gestionează etichetele"),
                t("ca9af866", "Etichete:"),
                t("e62d3c10", "Nu există niciun cont cu acel nume. Încearcă din nou."),
                t("h8403fb6", "Momentan nu îi poți adăuga la această conversație."),
                t("ja522ed4", "Momentan nu poți adăuga la această conversație o parte dintre aceste persoane."),
                t("d87bff5a", "Informațiile despre conversația ta se încarcă."),
                t("cabb453e", "Numele grupului"),
                t("eb1bb5a2", "Vezi toate persoanele"),
                t("a70436ac", "Începe un mesaj criptat"),
                t("a7f20223", function (e) {
                    return "Amână notificările de la " + e.name;
                }),
                t("g2f04a6b", function (e) {
                    return "Ai anulat amânarea peste " + e.name;
                }),
                t("i453fedf", function (e) {
                    return "Amânate până la " + e.expiration;
                }),
                t("b3dfd51a", "Amână menționările"),
                t("cc7c8ce6", "Dezactivează notificările atunci când ești menționat în această conversație."),
                t("hab58674", "Menționări dezactivate"),
                t("e3c6e080", "Menționări activate"),
                t("f33ef58a", "Raportează conversația ca fiind conținut ilegal în UE "),
                t("d1a6dbe6", "Blochează tot"),
                t("f24af200", "Blochează mesajele directe"),
                t("a30e1677", function (e) {
                    return "Blochează pe @" + e.screenName + ", @" + e.screenName + " nu va mai putea să te urmărească sau să-ți trimită mesaje, iar tu nu vei vedea notificări de la @" + e.screenName;
                }),
                t("iae09949", function (e) {
                    return "Blochezi mesajele directe de la " + e.screenName + "?";
                }),
                t("e778e3d8", "Mesajele directe au fost blocate cu succes"),
                t("b7867912", "Deblochează tot"),
                t("gaddb872", "Deblochează mesajele directe"),
                t("d83414a1", function (e) {
                    return "Deblochezi utilizatorul @" + e.screenName + "? Acesta te va putea urmări și îți va putea vedea postările.";
                }),
                t("a5bbfecd", function (e) {
                    return "Deblochezi utilizatorul " + e.screenName + "? Va putea să te urmărească și să interacționeze cu postările tale publice.";
                }),
                t("cde6e1ff", function (e) {
                    return "Deblochezi mesajele directe de la " + e.screenName + "?";
                }),
                t("j37c4674", "1 oră"),
                t("je7e1fed", function (e) {
                    return "Ai amânat pe " + e.name + " timp de o oră";
                }),
                t("hf94a2d6", "Ignorat timp de 1 oră"),
                t("fb7a43c6", "8 ore"),
                t("e95c8f8b", function (e) {
                    return "Ai amânat pe " + e.name + " timp de 8 ore";
                }),
                t("bd54fad2", "Ignorat timp de 8 ore"),
                t("cb5bf56e", "1 săptămână"),
                t("gb7a130b", function (e) {
                    return "Ai amânat pe " + e.name + " timp de o săptămână";
                }),
                t("f6fce0fe", "Ignorat timp de 1 săptămână"),
                t("i78153dd", function (e) {
                    return "Ai amânat pe " + e.name + " pe termen nelimitat";
                }),
                t("je9455da", "Mesajele sunt criptate"),
                t("b5b0afa4", "Personalizează-ți vizualizarea"),
                t("ec5880e6", "Aceste setări afectează toate conturile X de pe acest browser."),
                t("babfa32c", "Personalizează-ți rapid vizualizarea"),
                t("a2a2f98e", "Vezi noutățile"),
                t("b4a361c0", "Poți să personalizezi chiar acum culoarea și dimensiunea textului și să controlezi selecția modului Întunecat. Doar tu poți vedea aceste setări."),
                t("g4743c56", "Începe să urmărești"),
                t("c797b44e", "Cele mai recente povești pe X, spuse prin postări."),
                t("a19ce060", "Explorarea nu este disponibilă."),
                t("f7d1a8e0", "Aplicație Android"),
                t("aab2fae0", "Aplicație iOS"),
                t("a35d9c9a", "Resurse"),
                t("da00e00a", "Încearcă noua funcție Știri"),
                t("c40666d8", "Încearcă"),
                t("ic61c5fc", "Derulează în sus"),
                t("dd225af8", "Nu s-au găsit persoane."),
                t("i6671128", "Ai deblocat mai multe pe X"),
                t("d5e4d0a6", "Te poți alătura conversației și te poți conecta cu alți utilizatori mai ușor. Acum poți face următoarele:"),
                t("a97bc07e", "Deblochează mai multe pe X"),
                t("a72188d6", "Pentru a face X mai bun pentru toată lumea, dorim să ne asigurăm că în spatele acestui cont este o persoană. Ajută-ne să aflăm acest lucru prin interacționarea cu cronologia ta și conectarea cu alți utilizatori. Când suntem siguri că ești tu, vor fi posibile următoarele:"),
                t("a4ee9572", "Ești văzut de mai mulți utilizatori"),
                t("e5f4eac0", "Conținutul tău va putea fi descoperit mai ușor, iar tu vei apărea în rezultatele căutărilor și în tendințe."),
                t("c7832a72", "Conectează-te direct cu ceilalți"),
                t("i1ccd17a", "Trimite mesaje directe utilizatorilor care nu te urmăresc, fără ca mesajul tău să fie filtrat automat."),
                t("hc965308", "Distractiv"),
                t("eb78b77e", "Modul distractiv"),
                t("aa8ece10", "Încearcă grok.com"),
                t("gb5fb7d0", "Modul Concentrare"),
                t("g5665caa", "Ieși din modul Concentrare"),
                t("a372681e", "Copiază linkul de distribuire"),
                t("fbc79f6a", "Istoricul chatului"),
                t("b61ad410", "Istoric"),
                t("b3de2628", "Nu este disponibil un istoric al chatului"),
                t("acfbfb28", "Viitoarele tale conversații vor apărea aici."),
                t("i1147548", "Caută în istoricul Grok"),
                t("ab437026", "Nu s-au găsit conversații"),
                t("e12569ec", "Încearcă să cauți altceva."),
                t("d4eb0e26", "Redenumește"),
                t("c64975ea", "Deocamdată, nu ai adăugat la favorite nicio conversație"),
                t("a3e3db6e", "Fă clic pe stea pentru a salva chaturile la care revii des"),
                t("f4ae77ac", "Nu este disponibil niciun istoric al imaginii"),
                t("d57d337e", "Imaginile pe care le-ai generat vor apărea aici."),
                t("dab087ee", "Chaturi"),
                t("a911623c", "Imagini"),
                t("ae9cdac6", "Istoricul chatului"),
                t("b198a392", "Conversație cu Grok"),
                t("d16329b4", "Copiază conversația"),
                t("af6c4470", "Ceva nu a mers bine, încearcă din nou."),
                t("gf43d270", "Continuă această conversație"),
                t("f4b5fae2", "Trimiterea unui mesaj va copia această conversație în istoricul tău"),
                t("eb0d91ac", "Creează o imagine cu Grok"),
                t("c5a23514", "Desenează-mă"),
                t("g1cb8096", "Surprinde-mă"),
                t("a5a3df56", "Descrie imaginea pe care vrei să o creezi"),
                t("gbb4e90a", "un univers psihedelic aleatoriu"),
                t("af21f92e", "fericire"),
                t("e207cba2", "o competiție sportivă aleatorie"),
                t("b1323f10", "un model care defilează pe pasarelă la Săptămâna Modei de la Paris"),
                t("g6a90174", "un animal hipster amuzant"),
                t("jdc4b66c", "o minune a lumii"),
                t("ec601934", "Rescrie"),
                t("f9ecd3ba", "Inserează ca postare"),
                t("af652514", "Diferență"),
                t("j95bac7a", "Personalizează Grok"),
                t("c5665922", "Ce ai vrea să știe Grok despre tine?"),
                t("ff625c40", "Cum ai vrea să-ți răspundă Grok?"),
                t("e5c7d602", "Activează pentru toate chaturile"),
                t("d5e03fbc", "Flux Grok"),
                t("a294d0c6", "Creează-ți propria versiune"),
                t("b38adba2", "X - Aplicația pentru orice"),
                t("d05ae004", "Meci din NHL"),
                t("d35ad22c", "Vezi ultimul meci din NHL"),
                t("e806daa2", "Meci de fotbal"),
                t("cc2c2eca", "Vezi ultimul meci de fotbal"),
                t("bcdeae66", "Portal Grand Prix F1"),
                t("e30e4bea", "Urmărește acțiunea de la Grand Prix pe X."),
                t("be548ecb", function (e) {
                    return e.teamName1 + " - " + e.teamName2;
                }),
                t("b23bb579", function (e) {
                    return e.teamName1 + " - " + e.teamName2 + ", actualizări pe X";
                }),
                t("b72c924c", "Căutare locuri de muncă"),
                t("f4da95a0", "Recomandări de locuri de muncă"),
                t("eedd808c", "Locuri de muncă salvate"),
                t("e0ba641a", "Pentru companii"),
                t("f9e6381a", "Caută locuri de muncă"),
                t("fb15ec28", "Primește recomandări de locuri de muncă"),
                t("ece910f0", "Vezi locuri de muncă în funcție de preferențele tale"),
                t("jd08bc14", "Recomandările se îmbunătățesc în timp"),
                t("de0a4a72", "Controlează locul în care vezi recomandările"),
                t("db8c4158", "Aplică acum"),
                t("d9c8057a", "Fă clic aici"),
                t("a71d7584", "Recomandat"),
                t("d2b8da2c", "Inginerie software"),
                t("cd958040", "Date și analiză"),
                t("c5760ca2", "Produs"),
                t("d31b4a2a", "Design"),
                t("f38959a6", "Vânzări"),
                t("bc78a26c", "Operațiuni"),
                t("ec28738e", "Oameni și resurse umane"),
                t("icb06308", "Finanțe și contabilitate"),
                t("d0b978ec", "Juridic și conformitate"),
                t("af19cdc2", "Știință și inginerie"),
                t("e4a51fca", "Medical"),
                t("e8ca78ae", "Construcții și meserii"),
                t("e25d75e4", "Stagiar"),
                t("e89b3f04", "Începători"),
                t("h55825dc", "Junior"),
                t("cc537386", "Nivel mediu"),
                t("jfc3cece", "Senior"),
                t("e1b683aa", "Șef de echipă"),
                t("c4627fda", "Manager"),
                t("db75b47c", "Conducere"),
                t("i312f0ce", "La sediu"),
                t("b4aff05e", "Hibrid"),
                t("c08b9138", "La distanță"),
                t("ia5d6422", "Este necesară prezența la o locație fizică"),
                t("h97c7f42", "Este necesară prezența parțială la sediu"),
                t("ibed2d04", "Nu este necesară prezența la sediu"),
                t("f508c49c", "Copiază linkul locului de muncă"),
                t("d6825dce", "Distribuie într-un mesaj direct"),
                t("b9613442", "Distribuie printr-o postare"),
                t("c2b3f0da", "Recomandă pe profil"),
                t("c791d3fc", "Distribuie locul de muncă"),
                t("eb517058", "Companii AI"),
                t("b677cb9b", function (e) {
                    return e.count + " filtre de companie";
                }),
                t("ja04d37c", "Introdu numele companiei"),
                t("a1876045", function (e) {
                    return e.count + " filtre de tip de angajare";
                }),
                t("fb146dd2", "Tip de angajare"),
                t("a7090408", "Cuvânt cheie"),
                t("f16e9a15", function (e) {
                    return e.count + " filtre Tip locație";
                }),
                t("fa7d455a", "Tip de locație"),
                t("caa606db", function (e) {
                    return e.count + " filtre de vechime";
                }),
                t("jda06238", "Vechime"),
                t("j595df68", "Actualizează-ți preferințele privind recomandările:"),
                t("a1227d5e", "Activează recomandările"),
                t("bae2f5f0", "Adaugă acest loc de muncă pe profilul tău"),
                t("cbcaaa1a", "Mai jos poți previzualiza cum va arăta."),
                t("f58cf1ac", "Adaugă loc de muncă"),
                t("j4ae9960", "A survenit o problemă la adăugarea acestui loc de muncă pe profilul tău."),
                t("caa352f0", "Prea multe locuri de muncă"),
                t("i08bee0e", "Prea multe locuri de muncă recomandate"),
                t("d7ccaea2", "Momentan, ai o limită de 3 locuri de muncă active."),
                t("h05e4a7a", "Ai o limită de 10 locuri de muncă recomandate."),
                t("b518daae", "Accesează tabloul de bord pentru angajări"),
                t("f48e9c52", "Locul de muncă a fost adăugat cu succes!"),
                t("f6757978", "Poți elimina acest loc de muncă sau poți adăuga alte locuri de muncă din tabloul de bord pentru angajări."),
                t("i329c5a6", "Vezi tabloul de bord pentru angajări"),
                t("h39a5448", "Recomandă locuri de muncă folosind X pentru angajări!"),
                t("d204515c", "Adaugă locuri de muncă pe profilul tău printr-un singur clic."),
                t("ecb3df70", "Postări despre un eveniment"),
                t("a01d5a7c", "Acest conținut nu este disponibil, deoarece a fost creat de o persoană pe care ai blocat-o"),
                t("cab51f93", function (e) {
                    return "Nu poți vizualiza acest conținut, deoarece @" + e.screenName + " te-a blocat.";
                }),
                t("eaaca5dc", "Scor"),
                t("abdcd68a", "Se încarcă evenimentul"),
                t("cfb57adb", function (e) {
                    return "Postează despre " + e.hashtag;
                }),
                t("b1037710", "Spune ce crezi"),
                t("bb980db0", "Cronologie eveniment"),
                t("ffd929c1", function (e) {
                    return "NOU" + e.ttc_live_event;
                }),
                t("c9b302f8", "Revino mai târziu pentru a vedea cele mai recente produse."),
                t("cfe836d1", function (e) {
                    return e.percent + "% reducere";
                }),
                t("efb132c3", function (e) {
                    return e.title + " - " + e.description + " pentru " + e.price;
                }),
                t("f27deeea", "Titlu produs Commence"),
                t("e8166cee", function (e) {
                    return "" + e.formattedPrice;
                }),
                t("g66c8348", "REDĂ DIN NOU"),
                t("j1d352d8", "Memento setat"),
                t("d18909d4", "Setează memento"),
                t("b0b38774", "Conținut media de antet"),
                t("a7a119ec", "Deblochează"),
                t("cfadb00e", "Ascultă"),
                t("db4620aa", "SPAȚIU ÎN DIRECT"),
                t("c958e692", "SPAȚIU ÎNREGISTRAT"),
                t("i2c2bfb7", function (e) {
                    return e.count + " " + r(e.count, "(de) ascultători", "ascultător", "(de) ascultători");
                }),
                t("i3f7ff00", "Miniatură media"),
                t("h400d7c2", "ALĂTURĂ-TE SPAȚIULUI"),
                t("be6ef5b4", "ÎN CURÂND"),
                t("ca25ebae", "Cote conform"),
                t("e749753a", "Spread"),
                t("ea885dec", "Bani"),
                t("cde48000", "Problemă cu jocurile de noroc? Apelează 1-800-GAMBLER"),
                t("g53d5df6", "Concentrare"),
                t("d1e0a75f", function (e) {
                    return "Pentru tine" + e.noun;
                }),
                t("dafd69e9", function (e) {
                    return "Urmărești" + e.noun;
                }),
                t("d80a1c37", function (e) {
                    return "Abonat" + e.noun;
                }),
                t("d3619250", "Cele mai apreciate"),
                t("f5edfbde", "Te deconectezi de la X?"),
                t("f12b4db5", function (e) {
                    return "Te deconectezi de la @" + e.screenName + "?";
                }),
                t("ia5ff8b6", "Te poți reconecta oricând. Dacă dorești doar să comuți între conturi, poți face acest lucru prin adăugarea unui cont existent."),
                t("ea3750c4", "Această setare se va aplica doar pentru acest cont și vei rămâne în continuare conectat la celelalte conturi ale tale."),
                t("gc6866f8", "În curs de deconectare"),
                t("f8ad0092", "Ne pare rău, a apărut o eroare. Încearcă să te conectezi din nou."),
                t("h2c7767e", "Sesiunea nu mai este validă. Încearcă să te conectezi din nou."),
                t("e83047c2", "Ai introdus prea multe coduri incorecte. Încearcă să te conectezi din nou."),
                t("g4b108ee", "Ai generat prea multe coduri de backup. Trebuie să faci din nou verificarea conectării pe telefon."),
                t("a9be9b44", "Continuă la X"),
                t("e55188f0", "Ești conectat la acest cont cu acest browser"),
                t("d55d8fe2", "Vrei să continui cu acest cont?"),
                t("g806008e", "Conectează-te cu alt cont"),
                t("c55f5c9a", "Ceva nu a funcționat corect, dar nu te îngrijora – nu este vina ta. Să încercăm din nou."),
                t("bfb6be8a", "Câștigă bani pe X"),
                t("ed6c6da2", "Primul pas către monetizare este să devii utilizator verificat cu X Premium."),
                t("h93b6580", "Câștigă prin partajarea unui conținut de înaltă calitate. Cu cât atragi mai mult utilizatorii să interacționeze pe X, cu atât câștigi mai mult."),
                t("eea6d8f8", "Eligibilitate pentru cota-parte din venituri pentru creatori"),
                t("a0e8811e", "Construiește-ți un grup de fani"),
                t("e1a74ac0", "Oferă conținut exclusiv celor mai mari fani ai tăi și câștigă venituri recurente."),
                t("cd3a6f9a", "Eligibilitate pentru abonamente"),
                t("c35e6144", "Creează conținut superior cu instrumentele Premium"),
                t("b9dbeb34", "Beneficiază de opțiunea de postări mai lungi, Media Studio, analize și asistență prioritară."),
                t("b2d41138", "Acoperire mai mare = câștiguri mai mari"),
                t("defa7f12", "Profită de o prioritizare a răspunsurilor, care îți oferă vizibilitate suplimentară pentru a te dezvolta mai rapid."),
                t("i3e4955d", "aici"),
                t("fdc5d06c", "Ieși din ecranul complet"),
                t("cea1c00e", "Deblochează posibilitatea de a interacționa"),
                t("f8e6a280", "Conturile noi trebuie să plătească o taxă modică anuală înainte de a putea posta, aprecia, adăuga la marcaje și răspunde. Acest lucru are rolul de a reduce spamul și de a crea o experiență mai bună pentru toți utilizatorii. Poți în continuare să urmărești conturi și să navighezi pe X în mod gratuit."),
                t("h968efc6", "Conturile noi trebuie să plătească o taxă modică înainte de a putea posta, aprecia, adăuga la marcaje și răspunde. Acest lucru are rolul de a reduce spamul și de a crea o experiență mai bună pentru toți utilizatorii. Poți în continuare să urmărești conturi și să navighezi pe X în mod gratuit."),
                t("b66b62a4", "Condițiile de utilizare pentru cumpărători"),
                t("e5b5faa6", "Condiții Nu sunt robot"),
                t("i61a221c", "Abonare și plată"),
                t("fce91ab4", "Hm - acest lucru nu a funcționat."),
                t("a235cb76", "A survenit o problemă la procesarea abonamentului tău Nu sunt robot. Te rugăm să verifici informațiile de plată și să încerci din nou."),
                t("a8eea654", "Achiziția a fost finalizată."),
                t("bc8baa08", "Abonat la"),
                t("a98ba778", "Cronologiile notificărilor"),
                t("j887d006", "De la aprecieri la repostări și multe altele, aici se petrece acțiunea."),
                t("c06d4306", "Când cineva te menționează, apare aici."),
                t("ge7c661a", "Aprecieri, menționări, repostări și multe altele – atunci când acestea provin de la alți utilizatori verificați, le vei găsi aici."),
                t("d3de3b5c", "Aprecieri, menționări, repostări și multe altele − atunci când acestea provin de la abonații tăi, le vei găsi aici."),
                t("e3f9838d", "Află mai multe"),
                t("eba8b1c8", "Controlează în ce conversații ești menționat"),
                t("j745b8a6", "Folosește meniul de acțiuni − cele trei puncte mici din dreptul unei postări − pentru a elimina eticheta cu numele tău și a părăsi o conversație."),
                t("c380d684", "Raportul tău"),
                t("da7cf0d8", "Am marcat aceste postări drept conținut sensibil"),
                t("a6da21a1", function (e) {
                    return e.appName + " dorește să îți acceseze contul X";
                }),
                t("f4392d00", "Autorizează aplicaţia"),
                t("ee4dca3c", "anulează conectarea"),
                t("bb347bbc", "Centrul de ajutor"),
                t("be38d34e", "Pentru a folosi această Aplicație, trebuie să fii conectat(ă) la X."),
                t("e087691a", "Nu ai reușit să acorzi acces la aplicație. Revino și încearcă din nou să te conectezi."),
                t("e7dd62c4", "Prin clic pe butonul „Autorizează aplicația”, permiți ca xAI să aibă acces la datele tale de pe X, inclusiv la:"),
                t("debbdc98", "Profilul tău de utilizator X, informațiile contului X, setările X și preferințele X."),
                t("d9cf7c9c", "Postările tale pe X, care pot fi văzute pe contul tău X, inclusiv postări la și de la toate conturile (publice sau protejate) pe care le poți vedea."),
                t("cdf40068", "Istoricul conversației cu Grok pe X."),
                t("cea71014", "Îți încărcăm contactele..."),
                t("b5474bd2", "Hmm... Ceva nu a funcționat."),
                t("ab4b970a", "Folosește aplicația X pentru a reveni și a solicita un nou e-mail de verificare."),
                t("j6d103b8", "Înregistrează-te pentru a avea un cont X. De la știri de ultimă oră și divertisment la sport și politică, afli toate detaliile cu ajutorul comentariilor în direct."),
                t("ca042c78", "Conectează-te la X"),
                t("ff869362", "Conectează-te la X pentru a vedea ultimele noutăți. Alătură-te conversației, urmărește conturi, vizitează Cronologia paginii tale principale și pune-te la curent cu postările celor pe care îi cunoști."),
                t("f4a654a4", "Vezi pe Foursquare"),
                t("c09de2d4", "Caută în cronologie"),
                t("i1801686", "Aceasta este o interogare de căutare nevalidă. Încearcă alta."),
                t("a0b4541c", "Ceva nu a mers bine, dar nu te îngrijora – nu este vina ta"),
                t("d7eebb60", "Se configurează abonamentul"),
                t("h707b180", "Actualizarea abonamentului s-a finalizat"),
                t("a452ab68", "Poate dura câteva secunde."),
                t("b3bad3b2", "@premium"),
                t("accbcc78", "Actualizat cu succes"),
                t("e957c20e", "Versiune de încercare gratuită pentru Acces complet"),
                t("a1436e70", "Poți adăuga noi locuri de muncă la profilul tău, făcându-le vizibile rețelei tale. După ce solicitarea este aprobată, locurile de muncă vor putea fi descoperite în căutările de locuri de muncă, pe care le efectuează milioane de utilizatori."),
                t("f9c85cec", "Acțiune necesară: încarcă și verifică documentele"),
                t("f178f393", function (e) {
                    return "Trimite documentele necesare până pe " + e.date + ". De obicei, durează aproximativ 10 minute să ni le trimiți.";
                }),
                t("f9fbeabc", "Actele de constituire ale organizației tale"),
                t("b4c80f5c", "Un document de identitate oficial"),
                t("f0915094", "O cameră funcțională"),
                t("f259d3f3", function (e) {
                    return "Important: documentele trebuie trimise până pe " + e.date + ". În caz contrar, solicitarea ta va fi respinsă și nu vei beneficia de rambursare.";
                }),
                t("d35f645b", function (e) {
                    return "Vacante (" + e.count + ")";
                }),
                t("bf534b31", function (e) {
                    return "Recomandate (" + e.count + ")";
                }),
                t("c35aded2", "Arhivate"),
                t("b97e952a", "Se pare că nu ai adăugat încă niciun loc de muncă."),
                t("cf1fa156", "Se pare că nu ai recomandat încă niciun loc de muncă."),
                t("fa4a4f50", "Se pare că nu ai arhivat încă niciun loc de muncă."),
                t("c5fb5a1a", "Nu există locuri de muncă"),
                t("e9b91cde", "Adaugă un loc de muncă"),
                t("c270ef3e", "Arhivează"),
                t("fe8872f4", "Succes"),
                t("d523cd74", "Arhivezi acest loc de muncă?"),
                t("jfd0b34a", "Prin arhivare, locul de muncă este eliminat de pe profilul tău."),
                t("e2247e08", "ATS"),
                t("b737c0b5", function (e) {
                    return "" + e.ats;
                }),
                t("e0ce628e", "A survenit o problemă la trimiterea unei invitații. Încearcă din nou mai târziu."),
                t("ddf35536", "A survenit o problemă la ștergerea invitației. Încearcă din nou mai târziu."),
                t("db7144b6", "A apărut o problemă la modificarea tipului de afiliere. Încearcă din nou mai târziu."),
                t("be78e5fa", "A apărut o problemă la eliminarea afiliatului. Încearcă din nou mai târziu."),
                t("fa9709ba", "A apărut o problemă la crearea aplicației. Încearcă din nou mai târziu."),
                t("j62f13fc", "A apărut o problemă la actualizarea acestui loc de muncă. Încearcă din nou mai târziu."),
                t("ff5716fc", "A apărut o problemă la crearea acestui loc de muncă. Încearcă din nou mai târziu."),
                t("fd059188", "A apărut o problemă la sincronizarea locurilor de muncă. Încearcă din nou mai târziu."),
                t("b82b5c00", "Ceva nu a funcționat corect în timpul activării creditului pentru reclame. Încearcă din nou mai târziu."),
                t("d74adc30", "S-a adăugat un cont pentru reclame incorect"),
                t("e4323c36", "ID-ul contului pentru reclame pe care l-ai introdus nu se potrivește cu organizația ta sau afiliații săi."),
                t("b3323ada", "Adaugă un card de credit la contul tău ads.twitter.com"),
                t("ac325eb8", "Pentru a-ți activa creditul pentru reclame, trebuie să adaugi un card de credit la contul tău pentru reclame pe ads.twitter.com"),
                t("j4e6e966", "Este necesară revizuirea contului pentru reclame"),
                t("ef86e7f6", "Contul tău a fost marcat pentru revizuire și necesită aprobare."),
                t("c9c8edae", "Abonează-te la Organizații Verificate pentru a folosi creditele pentru reclame"),
                t("b36c6278", "Doar abonamentele cu plată la Organizații Verificate pot utiliza creditul nostru pentru publicitate. Fă upgrade acum pentru a face publicitate cu afiliații tăi."),
                t("c30f0168", "Deschide linkul extern"),
                t("c49b7262", "Recomandă locul de muncă"),
                t("i6ecf71a", "Anulează recomandarea locului de muncă"),
                t("a37ef120", "Redeschidere post"),
                t("i00355d0", "Anulează distribuirea"),
                t("h0481bba", "Anulezi distribuirea acestui loc de muncă?"),
                t("b9dfdc7a", "Anularea distribuirii elimină acest loc de muncă din secțiunea În prim plan."),
                t("h4847fa2", function (e) {
                    return "" + e.userName;
                }),
                t("e46cd68e", "Locuri de muncă pe care le-ai distribuit"),
                t("ea7f1a42", "Locurile tale de muncă"),
                t("d1cbcb90", "Sursă"),
                t("gf66326c", "Ultima actualizare"),
                t("b917fc28", "Opțiunea de promovare a locurilor de muncă este dezactivată"),
                t("g06035e6", "Contul tău de publicitate necesită atenție pentru a activa promovarea locurilor de muncă."),
                t("aa16581c", "Nu ai acces la contul de publicitate pentru promovarea locurilor de muncă. Cere-i ajutorul administratorului contului."),
                t("g7bb6f58", "Nu s-au găsit conturi pentru publicitate."),
                t("jf1576ba", "Nereușit"),
                t("ff985a36", "Se sincronizează"),
                t("e5b8058c", "Nesincronizate"),
                t("a86e335a", "Ultima sincronizare "),
                t("c9838d68", "Locurile de muncă pe care le-ai adăugat nu sunt vizibile deocamdată"),
                t("df6835a6", "Activează locurile de muncă pe profilul tău pentru a evidenția locurile de muncă recomandate deasupra postărilor tale și a le asocia cu o listă cu toate posturile tale vacante."),
                t("fc504ea0", "Activează afișarea locurilor mele de muncă"),
                t("a511934e", "Începe să faci angajări pe X"),
                t("e68d2d16", "Aplică pentru versiunea Beta"),
                t("f7a37e30", "Dacă faci clic pe „Aplică pentru versiunea Beta”, ești de acord să fii contactat(ă) pe e-mail prin intermediul adresei de e-mail de la locul de muncă, asociate acestui cont, după ce ai primit aprobarea de a accesa versiunea Beta."),
                t("bfef82f0", "X pentru angajări este o caracteristică gratuită pentru Organizațiile verificate, care le permite să publice locuri de muncă, să le recomande pe profilul companiei și să atragă talente de top pentru posturile vacante."),
                t("h4b890c2", "X pentru angajări îți permite să postezi locuri de muncă, să le recomanzi pe profilul tău și să atragi talente de top pentru posturile vacante."),
                t("c3f28126", "Adresează-te unui public mare"),
                t("dec1601e", "X are peste 528 de milioane de utilizatori. De la ingineri de software la reprezentanți de vânzări și operatori de stivuitoare, următorul tău angajat se află aici."),
                t("be8393da", "Recomandă cele mai importante posturi"),
                t("i8c856ce", "Recomandă până la 3 locuri de muncă pe profilul tău. Toți utilizatorii vor vedea aceste posturi atunci când îți vizualizează profilul."),
                t("d8bc6eea", "Adaugă până la 5 locuri de muncă drept Locuri de muncă recomandate pe profilul companiei tale. Toți utilizatorii vor vedea aceste posturi recomandate atunci când vizualizează profilul companiei tale."),
                t("a049efd4", "Importă locurile de muncă rapid"),
                t("d12be15a", "Conectează un Sistem acceptat de urmărire a candidaturilor sau un flux XML pentru a adăuga locuri de muncă pe X, în câteva minute."),
                t("d248d75e", "Primește asistență"),
                t("c49d8e42", "Ai nevoie de ajutor? Contactează-ne."),
                t("ib244b2e", "Copiază adresa de e-mail"),
                t("b450472c", "Importă locuri de muncă"),
                t("b36022d1", "xhiringsupport@x.com"),
                t("aeac3eb4", "Reîmprospătează locurile de muncă"),
                t("aa4c37cc", "Afișează locuri de muncă pe profil"),
                t("d4b82638", "Recomandă locuri de muncă pe profil"),
                t("e405b1c2", "Activează locurile de muncă pe profilul tău pentru a genera mai mulți candidați pentru posturile esențiale și pentru a le permite candidaților să vadă toate posturile tale vacante."),
                t("a85cda86", "Adaugă locurile de muncă pentru a începe"),
                t("c04b6472", "Importă sau adaugă locuri de muncă în câțiva pași simpli pentru a începe să primești mai multe candidaturi. Locurile de muncă pot fi partajate cu urmăritorii și recomandate pe profilul companiei tale."),
                t("d14c02d0", "Adaugă locurile de muncă manual"),
                t("b12424fc", "Loc de muncă nou"),
                t("ca8df1e2", "Creează un loc de muncă și adaugă-l în lista cu locuri de muncă. Fiecare loc de muncă trebuie să includă un URL pentru candidatură, în care candidații pot vedea mai multe informații despre locul de muncă și își pot depune candidatura."),
                t("f4f4dd60", "Necesar"),
                t("b2c213e0", "S-a depășit limita de caractere"),
                t("d84e9c2a", "Introdu tipul de angajament care se așteaptă pentru acest post."),
                t("bc8b300c", "Rol"),
                t("d1eedb50", "Ajută-i pe candidați să înțeleagă ce domeniu vizează acest post."),
                t("eaf3ce64", "Echipă"),
                t("b36cd50e", "Indică principala echipă cu care candidații vor lucra după angajare."),
                t("d3a427ce", "Selectează nivelul de experiență necesar."),
                t("i7174442", "Descrierea locului de muncă"),
                t("fef0cf02", "Introdu o descriere detaliată a locului de muncă. Subliniază responsabilitățile și calificările cheie pentru a-i ajuta pe candidați să înțeleagă corect postul."),
                t("b7800bec", "Descrie locul de muncă în cel mult 200 de caractere. Afișează-l în postări, recomandări și în căutări."),
                t("a5244ece", "URL candidatură (obligatoriu)"),
                t("g2b553f6", "Introdu URL-ul public unde candidații își pot prezenta candidaturile pentru acest loc de muncă."),
                t("c2e77608", "Denumirea locului de muncă (obligatoriu)"),
                t("cdf414d4", "Utilizat pentru căutări și recomandări. Încearcă să folosești titluri standard din domeniu pentru a obține rezultate mai bune."),
                t("cc59319a", "Folosește denumiri standard din domeniu pentru locurile de muncă, pe care să le recunoască majoritatea candidaților."),
                t("e7117ee4", "Locație (obligatoriu)"),
                t("c05176ec", "Dacă postul este într-un sediu, introdu locațiile respective. Dacă postul este la distanță, descrie unde se pot afla candidații."),
                t("d70c24d4", "Utilizat pentru a-i ajuta pe candidați să caute locul de muncă."),
                t("de1c4376", "Interval salarial"),
                t("hf352d42", "Adaugă opțional un interval salarial pe care candidații să îl poată vedea. Dacă alegi să nu incluzi acest lucru, ai în vedere legile privind transparența remunerațiilor în locul pentru care dorești să angajezi persoane."),
                t("ede7d0a2", "Monedă");
            t("b925c18c", "Tip de salarizare"),
                t("j3d242ce", "Interval nevalid"),
                t("f4d07bd2", "Include detalii opționale pentru a-i ajuta pe candidați să descopere posturile cu opțiunea de căutare."),
                t("b8cbb51a", "Rezumatul locului de muncă"),
                t("bda6881e", "Acest loc de muncă a fost importat din Sistemul de urmărire a candidaturilor (ATS). Ai în vedere că doar anumite câmpuri pot fi modificate."),
                t("b075c68a", "Editare loc de muncă"),
                t("d4b6a6e0", "Profil în prim plan"),
                t("j2dd3686", "Evidențiază locurile de muncă recomandate deasupra postărilor mele."),
                t("af1cfd46", "Integrare ATS"),
                t("d6fa2944", "Ștergerea integrării nu va șterge locurile de muncă importate."),
                t("h99f11fa", "Ștergere integrare"),
                t("eef1ae76", "Conectat în acest moment"),
                t("a915f5c1", function (e) {
                    return e.ats + " conectat";
                }),
                t("af7286b7", function (e) {
                    return e.percentage + "% reducere la Premium pe un an";
                }),
                t("c924ad84", "Continuă redarea videoclipurilor"),
                t("de750a3c", "Bucură-te de ele chiar și când ai telefonul blocat"),
                t("he5e87c4", "Bucură-te de prioritizarea răspunsurilor"),
                t("g64a60ba", "Obține o prioritizare mai mică când răspunzi la postări"),
                t("a7ee832a", "Corectează greșeli de dactilografiere și erori, până la 60 de minute"),
                t("fdd77a34", "Creează postări mai lungi"),
                t("j6d26a7a", "Scrie oricât vrei să distribui"),
                t("c4fd68da", "Personalizează-ți experiența"),
                t("c0195168", "Schimbă-ți pictograma aplicației și opțiunile de navigare"),
                t("b6b5dc94", "Devino utilizator verificat"),
                t("b06db848", "Ieși în evidență pe platformă"),
                t("e3e3a97c", "Câștigă o cotă-parte din veniturile obținute din postările tale"),
                t("f15bc24e", "Limite extinse pentru Grok"),
                t("c4666e1c", "Capacitatea de a utiliza mai mult Grok 3, cel mai recent model al nostru"),
                t("he74ae7a", "Cele mai ample limite de utilizare Grok"),
                t("f5732cd4", "În plus, acces extins la DeepSearch și Gândire"),
                t("e0198956", "Primește o cotă-parte din veniturile generate în urma interacțiunii conturilor verificate cu conținutul pe care îl postezi pe X."),
                t("iadf78e2", "Descarcă videoclipuri"),
                t("ee54c3de", "Salvează videoclipurile direct pe dispozitivul tău"),
                t("ae03594c", "Boost pentru răspunsuri scurte"),
                t("e6bb08c0", "Sporește vizibilitatea răspunsurilor tale"),
                t("bf2a6acc", "Prioritizare mare a răspunsurilor"),
                t("c2059276", "Dă boost răspunsurilor tale."),
                t("b023ec20", "Prioritizare maximă a răspunsurilor"),
                t("g337328e", "Obține cea mai mare vizibilitate pentru răspunsurile tale."),
                t("fa006202", "Redare videoclip în fundal"),
                t("jf389778", "Vizionează în timp ce navighezi sau folosești alte aplicații"),
                t("f2977d80", "Foldere cu marcaje"),
                t("j1d3d910", "Organizează-ți postările salvate pentru acces ușor"),
                t("f0f48668", "Asistență premium"),
                t("c3148608", "Obține asistență mai repede atunci când ai nevoie de ajutor"),
                t("b485ca6e", "Fila Evidențieri"),
                t("d438955e", "Evidențiază-ți postările de top"),
                t("f373a352", "Mesaje directe criptate"),
                t("g7405aca", "Discută în siguranță cu criptarea de la un capăt la altul"),
                t("j659fa0c", "Tot ce e mai bun din Grok 3"),
                t("ibff5694", "Bucură-te de cele mai ample limite de utilizare, DeepSearch și Gândire plus acces timpuriu la noi caracteristici"),
                t("i824f4da", "Mai puține reclame"),
                t("bd17076c", "Vei vedea aproximativ jumătate din reclame în cronologiile Pentru tine și Urmărești."),
                t("cef2cac8", "Bucură-te de o experiență fără reclame, ocazional cu conținut din partea mărcilor, în zone mai puțin obișnuite."),
                t("c97920c0", "Videoclipuri offline"),
                t("i4379b18", "Salvează videoclipurile pentru vizionarea offline"),
                t("f94c6bae", "Bifă de utilizator verificat"),
                t("d72055d6", "Mărește-ți credibilitatea cu bifa de utilizator verificat "),
                t("f54af178", "Scrie articole"),
                t("c5cd5d42", "Distribuie conținut în format lung și devino o autoritate în domeniu"),
                t("jbdb08cc", "Analizează statisticile contului pentru a înțelege activitatea contului tău"),
                t("deaf7e0a", "Studio media"),
                t("fd1a47b4", "Încarcă și gestionează conținut media"),
                t("id067c96", "Căutare cu Radar"),
                t("jf991d48", "Fii cu un pas înainte cu monitorizarea tendințelor în timp real"),
                t("c244210c", "X Pro"),
                t("a90f2e8a", "Un instrument puternic, în timp real, pentru persoanele care utilizează X în mod intensiv. Monitorizează mai multe cronologii pe un singur ecran (doar pentru versiunea web) "),
                t("b3e50ef2", "Creează comunități"),
                t("bb1a4e44", "Creează-ți propria comunitate"),
                t("j010228e", "Vei primi o parte a veniturilor obținute de X de la urmăritorii tăi cei mai implicați care au abonamente lunare."),
                t("h0e1730e", "Prioritizare a răspunsurilor"),
                t("jf7f743c", "Postarea de videoclipuri mai lungi"),
                t("c0c25b6c", "Foldere cu marcaje"),
                t("ab31c79e", "Pictograme personalizate ale aplicației"),
                t("a8a702ae", "Navigare personalizată"),
                t("d5ab1b50", "Insignă de utilizator verificat"),
                t("ac298984", "O mai mare prioritizare a răspunsurilor"),
                t("g20df450", "Elimină 50% din reclame"),
                t("h8dfc4de", "Limite mai ample de utilizare Grok"),
                t("bf7614d4", "Abonamente de creator"),
                t("gadc9f4a", "Cea mai mare prioritizare a răspunsurilor"),
                t("c127c5c2", "Elimină toate reclamele"),
                t("c1e0f3c8", "DeepSearch și Gândire"),
                t("aac0bbb6", "Acces Radar"),
                t("a6722922", "Fără reclame"),
                t("ba016532", "Prioritizare a răspunsurilor"),
                t("a06f8a3e", "Grok 3"),
                t("b9e16610", "MAX"),
                t("b1492c6c", "Cele mai ample"),
                t("fb5e2c14", "Evidențiază postări cu X Premium"),
                t("gd1f4cfa", "Afișează-ți cele mai bune postări pe profil"),
                t("h59250bc", "Criptează mesaje cu X Premium"),
                t("ed62d546", "Postări mai lungi cu X Premium"),
                t("ca447200", "Autentificare prin SMS cu X Premium"),
                t("af2b99ea", "Editează postări cu X Premium"),
                t("ha265914", "Organizează marcajele cu X Premium"),
                t("gda940ae", "Creează o comunitate cu X Premium"),
                t("c7e5ac54", "Vezi mai puține reclame cu X Premium"),
                t("e03589ba", "Dă boost postărilor cu X Premium"),
                t("f0f8c82a", "Alătură-te chaturilor exclusive pentru utilizatorii verificați cu X Premium"),
                t("fecf5aaa", "Încarcă videoclipuri full HD cu X Premium"),
                t("c00d2be2", "Editează videoclipuri cu X Premium"),
                t("cd360b86", "Pune-i lui Grok orice întrebare"),
                t("d2e1a7a2", "Disponibil cu X Premium"),
                t("e664abe2", "Videoclipuri pe X. La maximum."),
                t("e595a3e2", "Valorifică tot ce îți pot oferi videoclipurile cu Premium"),
                t("i3c9329a", "Ieși în evidență cu opțiunile de formatare a textului"),
                t("cc9def68", "Doar cu X Premium"),
                t("hdef5966", "Descarcă videoclipuri pe dispozitiv"),
                t("c748224a", "Obține acces cu Premium X"),
                t("ebfc88bc", "Accesează caracteristici exclusive"),
                t("f652e9ac", "Obține acces la mai multe cu Premium"),
                t("d67e94c0", "Vei pierde..."),
                t("j1d3098c", "Obține acces la mai multe cu Premium+"),
                t("gd573390", "Și totul din De bază..."),
                t("ef94bbd4", "Obține Premium+"),
                t("dcd830ce", "Și totul din Premium..."),
                t("b7dde622", "O Zi a Recunoștinței frumoasă! Oferta se încheie în:"),
                t("i0180ca1", function (e) {
                    return "Până la " + e.date + ". O Zi a Recunoștinței fericită!";
                }),
                t("hb9d0e00", "Oferta cu ocazia aniversării a 2 ani se încheie în:"),
                t("d2b23e0d", function (e) {
                    return "Este aniversarea Premium! Se încheie pe " + e.date + ".";
                }),
                t("bb4998fb", function (e) {
                    return "Până la " + e.date;
                }),
                t("c0847ebc", "Toate upgrade-urile din De bază, plus..."),
                t("ed672bfa", "Toate upgrade-urile din De bază și Premium, plus..."),
                t("db63fa1c", "Selectează un plan Premium"),
                t("b128c6bc", "Primește o insignă de utilizator verificat și zeci de alte avantaje și beneficii incredibile"),
                t("a9904a1c", "Economisește la X Premium pentru o perioadă limitată"),
                t("acfaf7a0", "Compară niveluri și caracteristici"),
                t("e1606e52", "Modifică-ți abonamentul"),
                t("d2f2b91a", "înregistrează-te aici"),
                t("j4b4310e", "Secunde"),
                t("af863ee9", "perioada de încercare gratuită"),
                t("f5705987", "Condițiile noastre de utilizare pentru cumpărători"),
                t("h89dabac", "Anulează oricând"),
                t("f36b8e14", "Ceva nu a funcționat așa cum trebuie la preluarea acestui produs. Încearcă să reîncarci."),
                t("f1756574", "/ lună"),
                t("i650ff14", "/ an"),
                t("dbcd25db", function (e) {
                    return "pentru primele " + e.numberOfDays + " zile";
                }),
                t("bd40d5b5", function (e) {
                    return "Abonează-te și plătește pentru " + e.title;
                }),
                t("i36a0b6e", "Te poți abona doar pe aplicația X pentru iOS (momentan)."),
                t("c906ad94", "Retrogradare"),
                t("db5c77e0", "Acesta este abonamentul tău activ"),
                t("h77ef73e", "Schimbă la planul lunar"),
                t("d723d44a", "Schimbă la planul anual"),
                t("gf6b66b8", "Confirmă schimbarea abonamentului, care va intra în vigoare astăzi"),
                t("e83daf87", function (e) {
                    return "Confirmă schimbarea abonamentului, care va intra în vigoare pe " + e.date;
                }),
                t("f27022d6", "Planul curent"),
                t("i9d5f4b6", "Noul plan"),
                t("ia390d8a", "Cum va funcționa retrogadarea"),
                t("fd80b875", function (e) {
                    return "Planul curent rămâne activ până la finalul ciclului de facturare. Pe " + e.nextBillingDate + ", vei trece la " + e.newTierName + " și ți se va factura noul tarif.";
                }),
                t("c8fb177a", "Cum se va modifica plata"),
                t("df776505", function (e) {
                    return "Faci upgrade la " + e.newTierName + " cu o nouă facturare. Ți se va factura noul plan astăzi, iar creditul rămas va reduce suma de plată. Această modificare are loc imediat, iar facturarea se va ajusta în consecință.";
                }),
                t("d7efb6ba", "Treci de la facturarea lunară la o facturare anuală. Ți se va factura astăzi planul anual, iar soldul lunar rămas, calculat proporțional, va fi creditat din tariful total. Modificarea intră în vigoare imediat, iar facturarea va fi acum anuală."),
                t("a5f2cf70", "Treci de la facturarea anuală la o facturare lunară. Creditul anual rămas va acoperi plățile lunare până când se termină. Trecerea intră în vigoare imediat, iar facturarea se va face acum lunar."),
                t("ef1c0208", "Confirmă schimbarea de plan"),
                t("ia08113f", "Condițiile noastre de utilizare pentru cumpărători"),
                t("d2962b73", "Condiții"),
                t("b421795a", "Poți anula oricând"),
                t("f8d88ac7", "Condițiile noastre de utilizare pentru cumpărători"),
                t("ca220fe9", "Condiții"),
                t("ab8beda0", "Anulează oricând"),
                t("ife2636d", "Condițiile noastre de utilizare pentru cumpărători"),
                t("fb57be65", "Condiții"),
                t("e468a6c2", "Anulează oricând"),
                t("e9f4c89b", "Condițiile noastre de utilizare pentru cumpărători"),
                t("hce73b41", "Condiții"),
                t("i4db5c92", "Anulează oricând"),
                t("ae095fe8", "Grok AI"),
                t("d4e60288", "Cele mai ample limite de utilizare"),
                t("abaa4274", "DeepSearch și Gândire"),
                t("e0d53864", "Acces timpuriu la caracteristici noi"),
                t("g1be3530", "PERIOADĂ DE ÎNCERCARE GRATUITĂ"),
                t("b10b4f1f", function (e) {
                    return "ECONOMISEȘTE " + e.percentOff + "% ÎNAINTE DE " + e.date;
                }),
                t("b8d0bd19", function (e) {
                    return "Încearcă " + e.productName + " gratuit";
                }),
                t("f89dfa74", "Cea mai bună valoare"),
                t("b9a4d8c6", "Anual"),
                t("f5fb58b4", "Plus toate caracteristicile X Premium"),
                t("i527045e", "Bifă, mai mult Grok, prioritizare răspunsurilor, analize și multe altele"),
                t("ga482a88", "Plan anual"),
                t("hc64d5b0", "Plan lunar"),
                t("de7db957", function (e) {
                    return e.price + " pe an, cu facturare anuală";
                }),
                t("d8982437", function (e) {
                    return e.price + " pe an, cu facturare lunară";
                }),
                t("f0ad5cc8", "an"),
                t("a0dc6e4c", "Indisponibil momentan"),
                t("jd8b2e66", "Abonare și plată"),
                t("ca784c0c", "Abonează-te și plătește cu Apple"),
                t("aa5df29f", function (e) {
                    return "" + e.oldPrice;
                }),
                t("g1c4f7a1", function (e) {
                    return "" + e.oldPrice;
                }),
                t("afd61c76", "Sau economisește până la 30%"),
                t("i7fbacc4", "Comută între nivelurile de abonare disponibile"),
                t("c9cc122b", function (e) {
                    return e.feature + " este inclus în " + e.title;
                }),
                t("bff35771", function (e) {
                    return e.feature + " nu este disponibil pentru " + e.title;
                }),
                t("a69fd369", function (e) {
                    return "Începând de la " + e.price + "  ";
                }),
                t("e563a5d1", function (e) {
                    return "Abonează-te la prețul cu o reducere de " + e.percentage + "% (perioadă limitată)";
                }),
                t("dfc5f972", "Și multe altele..."),
                t("fb8453c8", "Solicitări de DeepSearch și Gândire"),
                t("e45b3f30", "Solicitări către Cercetare și Argumentare"),
                t("aaebdc2e", "Acces mult mai mare la Grok 3 mini și Grok 3"),
                t("ddf8a412", "Acces la noile caracteristici înaintea tuturor"),
                t("gfb04ef4", "Toate caracteristicile Premium+ de pe X"),
                t("b601cfbb", function (e) {
                    return "Încearcă pentru " + e.price + " pe lună";
                }),
                t("i3e90e20", "Momentan indisponibil"),
                t("d9e9ce26", "Abonează-te și plătește:"),
                t("j1f5a580", "A survenit o problemă la procesarea abonamentului tău Premium. Te rugăm să verifici informațiile de plată și să încerci din nou."),
                t("ebc84442", "Înregistrarea pentru abonament Premium"),
                t("cd9102d4", "Alege categorie"),
                t("eb551aea", "Afișează categoria pe profil"),
                t("f386777a", "Comută între tipurile de cont"),
                t("db483090", "Comutat la contul personal"),
                t("c701200c", "Comutat la contul de afaceri"),
                t("acd8da0a", "Comutat la contul de creator"),
                t("cb55ecce", "Comută la contul personal"),
                t("h4aeb984", "Comută la contul personal"),
                t("ada6073a", "Nu ai nevoie de instrumente pentru profesioniști?"),
                t("eb723d4c", "Conturile personale nu au instrumente precum Profil în prim plan și Manager de cumpărături. Va trebui să creezi un nou cont profesional dacă dorești să comuți înapoi."),
                t("hbb1af08", "Comută la contul de afaceri"),
                t("a9b5e3aa", "Nu, anulează"),
                t("ia49207a", "Da, comută"),
                t("g3f74902", "Comuți la contul de afaceri?"),
                t("f3bcfac0", "Acesta este cel mai potrivit pentru mărci, magazine cu amănuntul, furnizori de servicii și organizații."),
                t("d0c3f02e", "Comută la contul de creator"),
                t("a01e84e0", "Comuți la contul de creator?"),
                t("e8af8ef4", "Acesta este cel mai potrivit pentru personalități publice, artiști și persoane influente."),
                t("e44eab74", "În prezent, nu toate modulele sunt acceptate la toți clienții X"),
                t("ce4185bc", "Mai multe Elemente în prim plan disponibile în curând"),
                t("b5aed332", "Nu sunt disponibile elemente în prim plan"),
                t("g419ecf4", "Rămâi pe pagină"),
                t("d3a097a2", "Da, îndepărtează"),
                t("j1e1cd30", "Renunți la modificări?"),
                t("fc779c28", "Pune în prim plan"),
                t("ie85a7a8", "Vrei să ștergi informațiile despre afacerea ta?"),
                t("b5348efc", "Fără program de lucru"),
                t("db285564", "Deschis non-stop"),
                t("g7993eee", "Program personalizat"),
                t("c9ee902a", "Afișează harta"),
                t("j224a074", "Toate informațiile furnizate despre locație vor fi accesibile public atunci când Locație în prim plan este activă. Numărul de telefon și adresa de e-mail pot fi accesate prin intermediul butonului de Contact."),
                t("f448cbcc", "Opțional"),
                t("c16c9568", "Adresă"),
                t("i3a38711", "Condițiile de utilizare ale Google Maps"),
                t("beb66f50", "Politica de confidențialitate Google"),
                t("e0d47030", "Unde te pot contacta clienții? Reține faptul că această informație va fi disponibilă public, astfel încât clienții tăi să te poată contacta. O poți elimina oricând."),
                t("c7a4adb0", "Adaugă adresă"),
                t("cd39daf6", "Cod poștal"),
                t("gc0df5a6", "Adaugă cod poștal"),
                t("c6c16a52", "Localitate"),
                t("aa8015be", "Adaugă localitate"),
                t("b688f53a", "Stat/Provincie/Regiune"),
                t("a67f5bbc", "Adaugă stat/provincie/regiune"),
                t("if92b1b4", "Adaugă țară"),
                t("ffc5590e", "Localitate nevalidă"),
                t("a8fd64d8", "Caută țări"),
                t("a0abe108", "Stat/provincie/regiune nevalid(ă)"),
                t("j163df8e", "Adresă nevalidă"),
                t("af9b9b78", "Cod poștal nevalid"),
                t("i373e022", "Introdu adresa de e-mail"),
                t("f91751f8", "Această informație va fi vizibilă publicului"),
                t("g33c0564", "Adresă de e-mail nevalidă"),
                t("ga71fbf4", "Program de lucru"),
                t("ca2ba204", "Editează program personalizat"),
                t("d7b7dbca", "Pe profilul tău nu va afișat niciun program de lucru"),
                t("a460e770", "de ex. parcuri, plaje, cumpărături online"),
                t("ddc88bf0", "Setează programul de lucru pentru fiecare zi"),
                t("j11df0ca", "Ore suprapuse"),
                t("f9f911f4", "Caută fus orar"),
                t("d21a4252", "Adaugă mai multe ore"),
                t("ac6ce1c0", "De la"),
                t("c647aac8", "Până la"),
                t("b926e64a", "Introdu site-ul web"),
                t("i019c8b6", "Apel"),
                t("eabc6906", "SMS"),
                t("h24d868c", "Apel și SMS"),
                t("fa64f1fc", "Selectați un cod de țară"),
                t("c7d3629a", "Număr de telefon"),
                t("ce48a958", "Cum ai dori să fii contactat?"),
                t("b97705ce", "Reține faptul că acest număr de telefon va fi disponibil public, astfel încât clienții tăi să te poată contacta. Îl poți elimina oricând."),
                t("f7ff19ec", "Adaugă codul de țară"),
                t("bb7f177a", "Număr de telefon nevalid"),
                t("b91d1394", "Adaugă aplicație"),
                t("d3cd1160", "Adaugă aplicație iOS"),
                t("f2124008", "URL App Store"),
                t("dc0d9d6a", "Adaugă aplicație Android"),
                t("dd1605f0", "URL Play Store"),
                t("g4098f78", "Unde găsesc această informație?"),
                t("b949cdc6", "Elimină aplicația"),
                t("b4b8a486", "Selectează Comunitatea"),
                t("jfe04cf6", "Vrei să ștergi selecția?"),
                t("a14aa8dc", "Prin aceasta se va elimina Comunitatea din Prim plan."),
                t("cc4add98", "Alege o Comunitate pentru a previzualiza cum va arăta aceasta pe pagina ta de profil"),
                t("jd3e9ea6", "Nu ai nicio Comunitate"),
                t("daad9741", "creezi propria Comunitate"),
                t("c46cdabc", "Unelte avansate"),
                t("f6a2233a", "Gestionează permisiunile pentru diferite conturi"),
                t("ccb3ca48", "Setări pentru business"),
                t("b0ef3100", "Creează campanii cu reclame rich media"),
                t("ff1c5e1a", "Secțiune profesională"),
                t("f53adc36", "Obține rezultate mai bune în lumea reală"),
                t("hc4981d6", "Profiluri în prim plan"),
                t("fbce8dbe", "Găsește persoane de urmărit"),
                t("ae76c624", "Stabilește mai multe legături"),
                t("ae0383d4", "Crește numărul de interacțiuni și ajungi la mai multe persoane"),
                t("a1dbe746", "Crește numărul de interacțiuni și ajungi la mai multe persoane"),
                t("hbd124ae", "Dă boost unui postări"),
                t("hd80bd3e", "Promovează o postare"),
                t("fe2b0008", "Află cum să utilizezi X"),
                t("h257d4aa", "Selectează o postare pe care să o promovezi"),
                t("e9334fe6", "Actualizări ale datelor la fiecare câteva minute"),
                t("a6d7b1d0", "Pe baza datelor interne X"),
                t("h71a00e6", "Economisești timp nevizualizând reclame"),
                t("f6c50ec0", "Perioada de încercare fără reclame s-a încheiat"),
                t("e1d1fbca", "Ai evitat"),
                t("a82d7abd", function (e) {
                    return e.numberOfAds + " (de) reclame";
                }),
                t("ff074c76", "Vezi mai multe postări din ceea ce te interesează."),
                t("cbc38428", "Bucură-te în continuare de o experiență fără reclame cu Premium+"),
                t("b9028f60", "Înapoi la versiunea de încercare gratuită fără reclame"),
                t("e081d6a0", "Nu, mulțumesc, vreau să văd din nou reclame"),
                t("fee73dca", "Estimăm că ai economisit"),
                t("ic073e4e", "Timpul tău este prețios."),
                t("eb866e88", "Economii estimate timp de 1 an"),
                t("ce72f092", "În funcție de utilizarea ta de până acum."),
                t("c534c6b4", "Îți pregătim cifrele..."),
                t("i57332f0", "Continuă să navighezi și revino mai târziu pentru a vedea cât de multe reclame ai evitat și cât timp ai economisit astfel"),
                t("cc10f019", function (e) {
                    return e.minutes + " " + r(e.minutes, "(de) minute", "minut", "(de) minute");
                }),
                t("f9b6b7d3", function (e) {
                    return e.hours + " " + r(e.hours, "(de) ore", "oră", "(de) ore");
                }),
                t("a9af8753", function (e) {
                    return e.days + " " + r(e.days, "(de) zile", "zi", "(de) zile") + ", " + e.hours + " " + r(e.hours, "(de) ore", "oră", "(de) ore");
                }),
                t("b93d00e5", function (e) {
                    return e.days + " " + r(e.days, "(de) zile", "zi", "(de) zile");
                }),
                t("dc9661b3", function (e) {
                    return e.seconds + " second" + n(e.seconds, "", "s");
                }),
                t("g2c63852", "100% gratuit. Nu este nevoie de un card de credit."),
                t("be88be23", function (e) {
                    return "Ți-am activat versiunea de încercare pentru " + e.durationInDays + " (de) zile fără reclame";
                }),
                t("b63766a6", "Derulează fără reclame"),
                t("h028f7e0", "Petrece mai mult timp văzând conținutul care îți place"),
                t("dd68eef6", "Bucură-te de luxul pe care ți-l oferă Premium+"),
                t("g8a2f217", function (e) {
                    return "Bucură-te de lipsa reclamelor timp de " + e.durationInDays + " (de) zile";
                }),
                t("dec99336", "Fără reclame"),
                t("i95803fa", "Din păcate, nu îndeplinești momentan criteriile de eligibilitate."),
                t("d28a1d72", "Detectează tendințele înaintea tuturor cu Radar"),
                t("fb70427a", "Îți prezentăm cel mai puternic instrument de căutare de pe X."),
                t("i54bf620", "Monitorizează cuvintele cheie"),
                t("e8bb09bc", "Urmărește orice subiect cu ajutorul capabilității de căutare avansată."),
                t("d4c9d5aa", "Vizualizează tendințele"),
                t("e78263fe", "Urmărește conversațiile cu grafice privind activitatea zilnică din ultimele 3 zile."),
                t("e3ed8220", "Metrici în timp real"),
                t("f4952956", "Obține statistici imediate cu numărul de postări pe baza interogărilor tale."),
                t("cce3f116", "Postarea a fost adăugată la Marcaje"),
                t("b593b396", "Postare eliminată din Marcaje"),
                t("af9c8a3e", "Deschide aplicația"),
                t("ef483238", "Pagină cu starea postării"),
                t("jcf3ff56", "Text cu font mare"),
                t("f1252ac8", "Text cu font mediu"),
                t("daa0da04", "Text cu font mic"),
                t("ba5256b2", "Dimensiunea textului"),
                t("h030c24c", "Raportează o problemă"),
                t("b12ffee6", "Interzice în Comunitate"),
                t("e37836f8", "Detalii raport"),
                t("fb35e52a", "Vizualizează regula"),
                t("e238c590", "Ce urmează"),
                t("if218e60", "Echipa noastră va folosi tehnologia de care dispune pentru a revizui raportul tău. Dacă constatăm o încălcare a regulilor, te vom anunța ce măsuri luăm."),
                t("b6dc1984", "Care este procesul nostru?"),
                t("b0a16894", "Contextul contează. Luăm în considerare următorii factori când aplicăm regulile noastre (aceasta nu este o listă completă):"),
                t("d4716820", "Conținutul raportat vizează persoane din cauza religiei lor?"),
                t("e899a534", "Cât de gravă este această încălcare?"),
                t("d9c4e7ae", "Raportul a fost trimis de persoana vizată?"),
                t("afb51066", "Crearea de rapoarte în duplicat nu va accelera procesul nostru."),
                t("b7ba712a", "S-a identificat o încălcare"),
                t("d90b8c04", "Nu s-a identificat nicio încălcare"),
                t("c2d0494a", "Recomandările noastre privind siguranța"),
                t("be46e000", "Raportează duplicate"),
                t("e846ae32", "Chiar dacă este șters conținutul, cineva ar fi putut să facă o copie sau capturi de ecran. Dacă vezi acest conținut pe X, raportează-l pentru ca noi să îl putem elimina."),
                t("e3647d08", "Ia legătura cu autoritățile de aplicare a legii"),
                t("gad89c4a", "Dacă te simți în pericol, îți recomandăm să iei legătura cu autoritățile locale de aplicare a legii. Ele pot consulta regulamentul nostru pentru autoritățile de aplicare a legii dacă au întrebări ulterioare. "),
                t("h7fa9240", "Statele Unite:"),
                t("fb2ff552", "Linia Națională de Prevenire a Suicidului la 988."),
                t("bb57e8c0", "Alte țări și regiuni:"),
                t("b9ce59ba", "Îți mulțumim că ai adus acest lucru în atenția noastră."),
                t("d42899ad", "Asociația Internațională pentru Prevenirea Suicidului."),
                t("c9853de0", "Conținut ascuns"),
                t("c197728e", "Rezolvat"),
                t("f4422d78", "Rapoarte"),
                t("i07c24fa", "Nu ai rapoarte deschise"),
                t("h542c98a", "Vezi detaliile"),
                t("e6e11d12", "Nu ai rapoarte rezolvate"),
                t("ibf33bae", "Raportează dublurile pentru ca acestea să poată fi îndepărtate"),
                t("a288ca36", "regulamentul nostru pentru autoritățile de aplicare a legii"),
                t("a62c9c34", "Urmărește ce te interesează."),
                t("cf39fca2", "Află despre ce discută oamenii."),
                t("j86184fe", "Alătură-te conversației."),
                t("ac2035f2", "Alătură-te azi."),
                t("h0af9418", "Creează un cont"),
                t("eba1b198", "Se întâmplă acum"),
                t("fa811c30", "Ai deja un cont?"),
                t("b4bdfb3e", "Obține aplicația Grok"),
                t("f991cfaa", "Obține Grok"),
                t("a4298bc0", "X. Este ceea ce se întâmplă"),
                t("j3f49ff6", "De la știri de ultimă oră și divertisment la sport și politică, afli toate detaliile cu ajutorul comentariilor în direct."),
                t("d65555c2", "SAU"),
                t("e75df5c9", function (e) {
                    return e.query + " – Căutare";
                }),
                t("ac4fb0f4", "Fotografii"),
                t("aea62568", "Filtre de căutare"),
                t("gfcfbf8c", "Căutarea ta a fost salvată."),
                t("a4645d92", "Căutarea ta salvată a fost ștearsă."),
                t("b11805af", function (e) {
                    return "Vezi postări despre " + e.query + " pe X. Vezi ce spune lumea și alătură-te conversației.";
                }),
                t("d610e8c3", function (e) {
                    return "Cele mai recente postări despre " + e.query + ". Citește ce spune lumea și alătură-te conversației.";
                }),
                t("j622effe", "Căutare avansată"),
                t("i5045e74", "Oriunde"),
                t("h2388754", "În apropierea ta"),
                t("a0cf4306", "Rezumat Grok"),
                t("f97f7b46", "Ascunde rezumatul Grok"),
                t("f9d35b98", "Poți salva doar 25 de căutări. Șterge o căutare pentru a salva una nouă."),
                t("ha925ad4", "Ceva nu a mers bine. Încearcă din nou să salvezi căutarea într-un minut."),
                t("h0a9931c", "Ceva nu a mers bine. Încearcă din nou să ștergi căutarea într-un minut."),
                t("h4912b5e", "Salvează căutarea"),
                t("b9bc69ca", "Șterge căutarea salvată"),
                t("eb63de70", "X – Căutare avansată"),
                t("d3938be8", "Cuvinte"),
                t("e0dded5e", "Interacțiuni"),
                t("a097f7ba", "Date"),
                t("c03f15ca", "Orice limbă"),
                t("cb334136", "Linkuri"),
                t("jf1cbcc2", "Include postările cu linkuri"),
                t("gede6f6e", "Afișează doar postările cu linkuri"),
                t("bda44dd4", "Include răspunsurile și postările originale"),
                t("ab870904", "Afișează doar răspunsurile"),
                t("b6215680", "Toate aceste cuvinte"),
                t("cceffa5e", "Exemplu: ce se întâmplă · conține atât „ce”, cât și „se întâmplă”"),
                t("f1c5faee", "Exact această expresie"),
                t("ad10780e", "Exemplu: happy hour · conține expresia exactă „happy hour”"),
                t("a555a3f4", "Oricare dintre aceste cuvinte"),
                t("ee8a2b60", "Exemplu: pisici câini · conține fie „pisici”, fie conține „câini” (sau pe ambele)"),
                t("f51fe348", "Niciunul dintre aceste cuvinte"),
                t("hb657ad4", "Exemplu: pisici câini · nu conține „pisici” și nu conține „câini”"),
                t("d10da5da", "Aceste hashtaguri"),
                t("f0b52b50", "Exemplu: #JoiaAmintirilor · conține hashtagul #JoiaAmintirilor"),
                t("e292598a", "De la aceste conturi"),
                t("hef790d8", "Exemplu: @X · trimis de la @X"),
                t("g2c27394", "La aceste conturi"),
                t("d158d9d0", "Exemplu: @X · trimis ca răspuns la @X"),
                t("a10e3230", "Menționează aceste conturi"),
                t("daaf2c72", "Exemplu: @SFBART @Caltrain · menționează pe @SFBART sua menționează pe @Caltrain"),
                t("b18366ba", "Numărul minim de răspunsuri"),
                t("f481ba1c", "Exemplu: 280 · de postări cu cel puțin 280 de răspunsuri"),
                t("ib3ddbd4", "Numărul minim de aprecieri"),
                t("ef994dac", "Exemplu: 280 · de postări cu cel puțin 280 de aprecieri"),
                t("a504ca74", "Număr minim de repostări"),
                t("jd9bd944", "Exemplu: 280 · de postări cu cel puțin 280 de repostări"),
                t("e95b9448", "General"),
                t("f458a3b2", "Confidențialitate"),
                t("bdc6f5b8", "Contul tău"),
                t("ea848de8", "Setări EarlyX"),
                t("df483b48", "Modificări ale caracteristicilor"),
                t("bd05add8", "Nu sunt robot"),
                t("d94f12b6", "Încearcă să cauți notificări, confidențialitate etc."),
                t("ba8f6f82", "Caută setări"),
                t("g931a6e5", function (e) {
                    return "Urmărești " + e.topic;
                }),
                t("h3f9027a", "Vei vedea postări despre acest lucru în cronologia paginii tale principale. Acest subiect te va ajuta să îți personalizezi experiența pe X."),
                t("e241095e", "Subiectele tale"),
                t("f8bc75e2", "subiectele tale"),
                t("ed827af6", "Subiectul este indisponibil."),
                t("d094c720", "Toate subiectele"),
                t("g3e87c61", function (e) {
                    return e.topicName + " | Subiecte";
                }),
                t("g02269ba", "Urmărește Subiecte pe X. Subiectele îți permit să vezi postările publicate de pe conturi ale căror utilizatori sunt experți sau fani ai unor subiecte pe X."),
                t("e80d2509", function (e) {
                    return "Urmărește subiectul " + e.topicName + " pe X. Vei vedea postările populare publicate de pe conturi ale căror utilizatori sunt experți, fani sau persoane care doar obișnuiesc să vorbească despre " + e.topicName + " pe X.";
                }),
                t("e44b4256", "Istoricul poveștii"),
                t("a74af3f8", "Nu s-a găsit istoricul poveștii."),
                t("c3077694", "Postări în Tendințe"),
                t("a9042b6c", "Istoricul tendinței"),
                t("ed54bc32", "Raportează tendința"),
                t("f89bcc50", "Tendință raportată"),
                t("gde7b6b0", "Anulează salvarea"),
                t("i6212670", "Se încarcă pagina Tendințe"),
                t("c6a07c10", "Cronologia Tendințe"),
                t("b0c91a92", "Înregistrează-te sau conectează-te pentru a vedea ce spun persoanele de pe X despre acest lucru"),
                t("d7071084", "Întreabă-l pe Grok acest lucru"),
                t("ee2200f4", "Această poveste este un rezumat al postărilor făcute de Grok pe X. Povestea va evolua în timp."),
                t("e1e5d552", "Editează-ți Cercul"),
                t("ec13f9cc", "Nu există nimeni în Cercul tău − încă"),
                t("dab58e32", "Când adaugi persoane, ele vor fi afișate aici."),
                t("f43112a4", "Cum funcționează"),
                t("a4d60c94", "Ceva nu a mers bine. Momentan nu putem adăuga utilizatorul în Cercul tău X."),
                t("a1ba3bd8", "Cercul tău este plin. Ai atins numărul maxim de 150 de persoane în Cercul tău."),
                t("ac3fd6e2", "Nu ai încă nicio recomandare"),
                t("eeb4d3f0", "Vom sugera utilizatori pe care îi poți adăuga în Cercul tău aici."),
                t("aea3c420", "Încă nu există citate"),
                t("b40a22c0", "Adaugă comentariul tău atunci când distribui postarea altei persoane și se va afișa aici."),
                t("f08d8d08", "Fă cunoscute postările care îți plac"),
                t("f0ccff52", "Distribuie postarea altcuiva în cronologia ta, repostând-o. Atunci când se întâmplă acest lucru, postarea va fi afișată aici."),
                t("fc1acb54", "Încă nu există aprecieri"),
                t("e3527230", "Când cineva (chiar și tu) apasă pe simbolul inimă pentru a aprecia această postare, acest lucru se va afișa aici."),
                t("i3e8b808", "Se încarcă utilizatorii care au apreciat această postare"),
                t("c69fd704", "Se încarcă utilizatorii care au redistribuit această postare"),
                t("f12858d4", "Apreciat de către"),
                t("fe62cfec", "Repostat de"),
                t("h1c5d6aa", "Trimise de tine"),
                t("h6d45054", "Trimise de toți"),
                t("da68fff1", function (e) {
                    return e.count + " Moned" + r(e.count, "e", "ă", "e") + " (vizibil doar pentru tine)";
                }),
                t("e35f2534", "Se încarcă interacțiunile postării"),
                t("i60dfa72", "Interacțiunile postării"),
                t("dc604dda", "Utilizatori care au apreciat această postare"),
                t("cdd4ef4a", "Utilizatori care au redistribuit această postare"),
                t("icc72234", "Citate ale acestei postări"),
                t("hc35b530", "Nu există încă aprecieri"),
                t("e0d6a246", "Deocamdată, nu există repostări"),
                t("i2a26cb4", "Când cineva atinge simbolul inimă pentru a aprecia această postare, acest lucru se va afișa aici."),
                t("i9b724e8", "Vei vedea aici o listă cu toate persoanele care au citat postarea aici."),
                t("a5ab75ae", "Nu au fost găsite postări asociate."),
                t("ce637c0e", "Nu au fost găsite articole asociate."),
                t("fd67deaa", "Distribuie postări asociate"),
                t("f9183bb6", "Copiază linkul la postările asociate"),
                t("fc4e5d96", "Poți vedea analizele doar pentru postările proprii."),
                t("ab0da59f", function (e) {
                    return "Analiză " + e.entity;
                }),
                t("ae32e7de", "Aceasta este o postare promovată. Numărul de vizualizări al acestei postări este privat."),
                t("a10aa36c", "Centrul de ajutor"),
                t("d0740558", "Centrul de ajutor"),
                t("d2d76dca", "Centrul de ajutor"),
                t("de8bcdaa", "Defalcarea persoanelor care ți-au văzut postarea"),
                t("cfa1ef16", "Dă boost"),
                t("d267afa2", "Sub 20"),
                t("db81cab0", "20-29"),
                t("f173716e", "30-39"),
                t("ada329e6", "40-49"),
                t("j2950694", "Peste 50"),
                t("bcd9cf68", "Peste 65"),
                t("f05f1838", "Altceva / Nespecificat"),
                t("fa5be588", "Ecologic"),
                t("c65126fe", "Cu boost"),
                t("c61c6624", "Promovat"),
                t("f1196a04", "Analiza boost"),
                t("bb66e3fc", "Analiza promovării"),
                t("g512ddcc", "Analiză organică"),
                t("j9256524", "Defalcarea performanțelor obținute prin boost"),
                t("ceeb3016", "Defalcarea performanțelor promovării"),
                t("bf4558fa", "Defalcarea performanțelor obținute organic"),
                t("c69069e6", "De câte ori a fost văzută această postare pe X"),
                t("a0615bac", "Numărul total de interacțiuni ale unui utilizator cu o postare. Aici sunt incluse toate clicurile oriunde pe postare (inclusiv hashtaguri, linkuri, imagini de profil, nume de utilizator și extindere postare), repostări, răspunsuri, urmăriri și aprecieri."),
                t("acc4cf12", "Număr de vizualizări ale profilului de la această postare"),
                t("c7d0d1c4", "Număr de clicuri pe orice URL din această postare"),
                t("a4da7724", "De câte ori au fost vizualizate detaliile legate de această postare"),
                t("jedd2771", function (e) {
                    return e.percentage + " prin boost";
                }),
                t("g33fd6b1", function (e) {
                    return e.percentage + " din promovare";
                }),
                t("b71059c3", function (e) {
                    return e.percentage + " din utilizatorii care nu te urmăresc";
                }),
                t("h4cbba3e", "<5%"),
                t("f4f0094c", "< 5% prin boost"),
                t("h1cdac12", "<5% din promovare"),
                t("g884b2cc", "<5% de la cei care nu te urmăresc"),
                t("b32334a0", "Conturi la care ai ajuns"),
                t("h142a79c", "Număr de vizualizări unice pentru această postare"),
                t("de4def4e", "% din toate promoțiile până în prezent"),
                t("e3390c1e", "Primele 48 de ore"),
                t("aead0975", function (e) {
                    return "Această funcție urmărește de câte ori a fost citită această postare în primele 48 de ore de la publicarea sa. Valoarea maximă este " + e.maxValue + " impresii.";
                }),
                t("ib1f8491", function (e) {
                    return e.likeCount + " " + r(e.likeCount, "aprecieri", "apreciere", "de aprecieri");
                }),
                t("dc0e7f37", function (e) {
                    return e.retweetCount + " repost" + r(e.retweetCount, "ări", "are", "ări");
                }),
                t("d0eeb127", function (e) {
                    return e.replyCount + " " + r(e.replyCount, "răspunsuri", "răspuns", "de răspunsuri");
                }),
                t("db6efeb8", "Promovarea ta este în curs de desfășurare"),
                t("j6daea86", "Promovarea ta este pusă pe pauză"),
                t("hf9ed10f", function (e) {
                    return e.endTimeString + " · " + e.endDateString;
                }),
                t("f42a198d", function (e) {
                    return e.spentBudget + " din " + e.totalBudget + " cheltuiți";
                }),
                t("e8adeec8", "Promovează din nou"),
                t("fbb5c37e", "Dă boost din nou"),
                t("ccffb487", function (e) {
                    return "Postarea ta a strâns până acum " + e.impressions + " impresi" + r(e.impressions, "i", "e", "i") + ". Treci la un cont profesional pentru a-ți extinde prezența.";
                }),
                t("ha13fd94", "Dă boost postării"),
                t("jede3014", "Promovarea este în curs de revizuire"),
                t("b823301e", "După ce este aprobată, postarea ta va fi promovată în rândul publicului selectat de tine."),
                t("a2e48870", "Recitește Politica X pentru reclame"),
                t("ge538876", "Statistici pentru videoclipul pe care l-ai distribuit"),
                t("ca7e10d8", "Vizualizări unice"),
                t("i611fc96", "Numărul total de vizualizări ale acestui videoclip, pe toate postările"),
                t("a69cd868", "Număr de vizualizări unice pentru acest videoclip"),
                t("f894a688", "Păstrarea audienței"),
                t("ad9d9204", "Procentul de timp pentru care spectatorii au vizionat un videoclip înainte de a-l abandona și cât anume din videoclip au vizionat."),
                t("da4b7a70", "Procent de urmăritori care au vizionat un videoclip până la un anumit moment"),
                t("de2d89a2", "Vizionat 25%"),
                t("i92754c2", "Vizionat 50%"),
                t("be8ddcc2", "Vizionat 75%"),
                t("b01410d6", "Vizionat 100%"),
                t("gfb3d8af", function (e) {
                    return "A fost urmărit până la " + e.timeLabel;
                }),
                t("fc6cbba2", "Nu există nimic aici, deocamdată"),
                t("b80a53c8", "După ce sunt colectate mai multe date, vei vedea aceste informații aici."),
                t("d25dccb6", "Analizele nu sunt disponibile pentru postările din Cerc."),
                t("g61ac32a", "Vizăm automat utilizatorii care interacționează cel mai probabil cu conținutul tău."),
                t("e8702feb", function (e) {
                    return "Îți oferim o reducere de " + e.couponAmount + "!";
                }),
                t("e44dc579", function (e) {
                    return "Începe acum și beneficiază de o reducere de " + e.couponAmount + " la prima ta promovare până pe " + e.date + ".";
                }),
                t("hd8df545", function (e) {
                    return "Începe acum și beneficiază de o reducere de " + e.couponAmount + " la prima ta promovare până pe " + e.date + ".";
                }),
                t("f1d32e41", function (e) {
                    return "Cheltuiește " + e.spendAmount + " și vei primi " + e.couponAmount + " sub formă de credit pentru reclame.";
                }),
                t("c4d0434b", function (e) {
                    return e.dailyBudget + " pe zi pentru " + e.durationLabel;
                }),
                t("dc4a9413", function (e) {
                    return e.totalBudget + " peste " + e.durationLabel;
                }),
                t("bad70c09", function (e) {
                    return "Locați" + r(e.numLocations, "i", "e", "i");
                }),
                t("c133a39b", function (e) {
                    return e.minAge + " - " + e.maxAge;
                }),
                t("ee5da8f5", function (e) {
                    return e.minAge + "+";
                }),
                t("g4bf9cb7", function (e) {
                    return e.durationDays + " " + r(e.durationDays, "zile", "zi", "de zile");
                }),
                t("gc3ce5d9", function (e) {
                    return "Acoperire estimată: " + e.audienceLow + " – " + e.audienceHigh + " persoane pe zi";
                }),
                t("c1778029", function (e) {
                    return e.locationsHeading + ": " + e.locations + e.newlinePlaceholder + "Categorie de vârstă: " + e.formattedAge + e.newlinePlaceholder + "Gen: " + e.gender;
                }),
                t("a4ab12b9", function (e) {
                    return "Odată ce ai cheltuit " + e.spendAmount + " pentru una sau mai multe campanii, vom credita " + e.couponAmount + " direct în contul tău pentru reclame. Poate dura câteva zile până când creditul va fi aprobat.";
                }),
                t("cb51c854", "Orice sex"),
                t("bb7b39e2", "Bărbați"),
                t("eb9466d0", "Femei"),
                t("b07cc9f2", "Regiune"),
                t("ce309bee", "Metrou"),
                t("cc49d030", "Cod poștal"),
                t("c3fca124", "Crește numărul de interacțiuni"),
                t("d4f57cce", "Crește-ți numărul de urmăritori"),
                t("c6daa762", "Obține mai multe clicuri pe link"),
                t("cc642518", "Caută locații"),
                t("i0e8c3c6", "Rezultate locație"),
                t("f69ad048", "Alege o locație"),
                t("d948b978", "Îți poți promova doar postările proprii."),
                t("cfcdb4a2", "Ceva nu a funcționat. Asigură-te că ai dezactivat toate instrumentele de blocare a reclamelor."),
                t("j7a2af7a", "Nu vrei să promovezi această postare?"),
                t("a78bce8e", "Dacă ieși acum, această postare nu va fi promovată."),
                t("g8844150", "Nu promova"),
                t("e7eb3684", "Buget zilnic"),
                t("d9f6e3ce", "Glisor cu bugetul zilnic"),
                t("b3954eca", "Glisor cu durata în zile"),
                t("ce665a60", "Acoperirea estimată este aproximativă. Acoperirea reală nu poate fi garantată."),
                t("i0c3b95c", "Următoarea rundă este din partea casei!"),
                t("h8b6e32a", "Ți-ai promovat postarea!"),
                t("ee8014a6", "Consultă analiza postării oricând pentru a măsura performanța reclamei tale."),
                t("db841200", "Crește numărul de interacțiuni, adresează-te mai multor persoane și dă de veste despre pagina ta."),
                t("fcc839b6", "Care este obiectivul tău?"),
                t("b679a538", "Postarea ta include conținut media"),
                t("cb19a2f0", "Obține mai multe aprecieri, repostări etc."),
                t("a2d37164", "Atrage mai mulți vizitatori pe site-ul tău"),
                t("cefad302", "Adaugă un link la postarea ta"),
                t("b614fad0", "Asigură-te că postarea ta include un link."),
                t("de43b660", "Metode de plată"),
                t("hb4773a0", "Adaugă o metodă nouă de plată"),
                t("aa2a3dd4", "Șterge cardul"),
                t("b1c5b63c", "se termină în"),
                t("affb5878", "Confirmă ștergerea"),
                t("db443ae2", "Totul pare în regulă?"),
                t("a96f811e", "Obiectivul promovării"),
                t("fbd44e96", "Bugetul tău"),
                t("e36bce64", "Metodă de plată"),
                t("ia83756c", "Subtotal"),
                t("cc217a04", "Sold cupon"),
                t("g4f2b588", "Sold restant pe cupon"),
                t("i41612da", "Creează o promoție"),
                t("cdae1af0", "Adaugă informații fiscale"),
                t("ed8bb5a0", "Adaugă detaliile plății"),
                t("fc640c20", "Adaugă detaliile de plată pentru a-ți revendica cuponul"),
                t("be2dc078", "Înregistrează-te și adaugă detaliile plății"),
                t("iaefd4de", "Înregistrează-te și adaugă detaliile de plată pentru a-ți revendica cuponul"),
                t("e5e42640", "Hm... cuponul tău nu s-a încărcat. Încearcă din nou mai târziu."),
                t("e85dfd66", "A fost creată deja o campanie pentru această postare."),
                t("a4db098c", "Se pare că nu ți-am putut crea promoția. Încearcă din nou mai târziu."),
                t("ef7e3916", "Ceva nu a mers bine. Verifică detaliile promoției și încearcă din nou."),
                t("c1134966", "Condițiile și regulile privind publicitatea"),
                t("he45cc43", "Condițiile privind cupoanele"),
                t("c9439a82", "Condițiile și regulile privind publicitatea"),
                t("c672105a", "La cine vrei să ajungă?"),
                t("e1efbeae", "Categorie de vârstă"),
                t("c6ff7c10", "Categoria de vârstă minimă"),
                t("b555fb46", "Categoria de vârstă maximă"),
                t("j2c03e12", "55+"),
                t("d4e01892", "Politica X privind reclamele la locuințe, împrumuturi și oportunități de angajare"),
                t("df8d4fa0", "Selectează un sex"),
                t("i982d424", "Cât de mult vrei să investești?"),
                t("b9ff6cb0", "Nu ai selectat nicio metodă de plată"),
                t("i8b90688", "Condițiile și regulile privind publicitatea"),
                t("a93bd26d", "Condițiile privind cupoanele"),
                t("d31dc460", "Condițiile și regulile privind publicitatea"),
                t("ga845597", function (e) {
                    return "Total pentru " + e.durationLabel;
                }),
                t("e1945a89", function (e) {
                    return e.audienceLow + " - " + e.audienceHigh;
                }),
                t("b21c2549", "Află mai multe"),
                t("j9f78b42", "Nu există utilizatori etichetați în această postare."),
                t("cb2054fa", "Se încarcă utilizatorii"),
                t("e4ad6bda", "În această fotografie"),
                t("cdd4aafe", "Se încarcă persoane în conversație"),
                t("aac3fad2", "Persoane din această conversație"),
                t("a7f66562", "Se încarcă postarea"),
                t("b7a898fa", "Treci la următoarea postare direct de aici!"),
                t("e254fdd2", "Poți trage cu degetul pentru a trece direct la următoarea postare!"),
                t("h59700fa", "ImmersiveMediaViewer"),
                t("i86c2940", "Bară de progres"),
                t("h2fcc532", "Se încarcă istoricul"),
                t("a74821a0", "Se pare că plata ta nu a fost aprobată sau este pe cale să expire. Actualizează informațiile de plată pentru a-ți păstra abonamentul Premium."),
                t("bb55752e", "Monedele îți permit să susții creatori care postează conținut excelent. Monedele nefolosite sunt păstrate în soldul tău."),
                t("ea7ce65f", function (e) {
                    return e.count + " " + r(e.count, "monede bonus incluse", "monedă bonus inclusă", "de monede bonus incluse") + ".";
                }),
                t("e557f9d2", "Ai atins limita soldului de monede."),
                t("e2beba5e", "Cea mai mare popularitate"),
                t("gafeeb96", "Cumpără monede"),
                t("bc42db1c", "Poți anula oricând. Se reînnoiește automat lunar."),
                t("f1561b06", "Condițiile de utilizare pentru cumpărători"),
                t("fe93ed4a", "Cumpărătură reușită"),
                t("bcb90375", function (e) {
                    return "Noul tău sold de monede este de " + e.balance + ".";
                }),
                t("ia2eb0c0", "Cumpărătură eșuată!"),
                t("c7e11484", "Listele tale sunt goale"),
                t("a96208ba", "Va trebui să creezi o Listă pentru a putea adăuga utilizatori."),
                t("d2826908", "Creează o listă nouă"),
                t("he062e8a", "Alege o listă"),
                t("c2fb1e94", "Doar 5.000 de conturi pot fi adăugate într-o listă."),
                t("f30edc68", "Marchează ca privată"),
                t("h51a2cf6", "Ceva nu a mers bine. Încearcă din nou să ștergi bannerul într-un minut."),
                t("bb10280e", "Ceva nu a mers bine. Încearcă din nou să salvezi lista într-un minut."),
                t("h8885a22", "Numele de liste nu pot depăși 25 de caractere"),
                t("f8132984", "Când setezi ca o listă să devină privată, doar tu o poți vedea."),
                t("h421e74c", "Liste sugerate"),
                t("aa62dea8", "Suntem cu ochii în patru"),
                t("e5e4d3aa", "Revino mai târziu pentru a vedea listele sugerate."),
                t("c4d7650c", "Gestionează membrii"),
                t("h7f2418c", "Se încarcă informațiile despre listă"),
                t("b18e5cd2", "Ceva nu a mers bine. Încearcă din nou să ștergi lista într-un minut."),
                t("cdd73e9c", "Șterge lista"),
                t("def8ff62", "Ștergi lista?"),
                t("j8b9cde8", "Această acțiune nu poate fi anulată și îți vei pierde Lista."),
                t("e9f3dec4", "Căutare listă"),
                t("b9192d55", function (e) {
                    return e.query + " – Căutare listă";
                }),
                t("d6a23192", "Creează o listă nouă"),
                t("ie256518", "Cronologie căutare listă"),
                t("j57a2568", "Căutare listă"),
                t("hc76e8cd", function (e) {
                    return "Nicio listă nu s-a potrivit cu „" + e.query + "”";
                }),
                t("d872881a", "De ce nu creezi una?"),
                t("j177067a", "Caută liste"),
                t("g13ea02c", "Încearcă să cauți liste"),
                t("d1461f1e", "Această Listă este goală"),
                t("bcbd3416", "Persoanele care urmăresc această Listă vor apărea aici."),
                t("b197a56c", "Urmăritorii listei"),
                t("f0ab07f5", function (e) {
                    return "Membri (" + e.memberCount + ")";
                }),
                t("h9ce3406", "Membrii listei"),
                t("dfeaeb26", "Adaugă în lista ta"),
                t("a332103e", "Persoanele adăugate la această Listă vor apărea aici."),
                t("e2f7dc62", "Găsește membrii sugerați"),
                t("gc23cc00", "Pentru a vedea sugestii de adăugat la această Listă, încearcă să cauți conturi."),
                t("e3deb126", "Sugestii pentru listă"),
                t("eb7b54be", "Se încarcă listele"),
                t("a9ca06d2", "Informații"),
                t("a367dc9a", "Vezi cele mai recente postări pe măsură ce apar"),
                t("dd438748", "Vezi întâi postările cele mai populare"),
                t("fe7e217c", "Vezi cele mai recente postări"),
                t("ce78b698", "Vezi mai întâi postările populare. Cele mai recente postări se afișează în timp ce sunt date."),
                t("i5a1628a", "Vezi cele mai populare postări"),
                t("f333a93e", "Vezi mai întâi postările cele mai recente. Postările populare sunt postările cele mai bune."),
                t("c7294984", "Lista de raportări"),
                t("g6340998", "Acest lucru nu te va readăuga automat în listele sale."),
                t("i6da4f7a", "Distribuie lista"),
                t("a062ff80", "Copiază linkul în listă"),
                t("dcdc75a3", function (e) {
                    return "@" + e.screenName + "/" + e.listName;
                }),
                t("d2004da3", function (e) {
                    return "Nu urmărești utilizatorul @" + e.screenName;
                }),
                t("a64512a4", "Cronologie pe bază de Liste"),
                t("i0bcc456", "Atunci când faci acest lucru, vei putea să vezi Listele acestuia."),
                t("d8315ca0", "Liste pe care le folosești"),
                t("e74be9ac", "Liste pe care le folosește"),
                t("c80cb4e4", "Listă nouă"),
                t("bbcaa24b", function (e) {
                    return "Liste create de @" + e.screenName;
                }),
                t("b081cdf7", function (e) {
                    return "@" + e.screenName + " nu a creat Liste încă";
                }),
                t("f5978664", "Când va face acest lucru, se va afișa aici."),
                t("h243711c", "Nu ai creat liste încă"),
                t("b69e2f71", function (e) {
                    return "Utilizatorul @" + e.screenName + " nu a fost adăugat la nicio Listă";
                }),
                t("e05568cc", "La adăugarea în Listă, se va afișa aici."),
                t("b86a098a", "Nu ai fost adăugat la nicio listă deocamdată"),
                t("h06e09a2", "Când cineva te adaugă la o listă, acest lucru se va afișa aici."),
                t("gbaa5489", function (e) {
                    return "Enumeră apartenențele pentru @" + e.screenName;
                }),
                t("g6b54ff6", "Ești la zi"),
                t("ec5fd35a", "Când cineva solicită să te urmărească, acest lucru se va afișa aici pentru ca tu să accepți sau să refuzi solicitarea."),
                t("ec2d8342", "Refuză"),
                t("j85d8d90", "Nicio solicitare de urmărire în așteptare pentru acel utilizator."),
                t("c3d23f10", "Se pare că a fost o mică problemă. Dar nu-ți face griji, nu este din vina ta. Dă clic mai jos pentru a încerca din nou."),
                t("d2613123", function (e) {
                    return "Abonează-te cu " + e.price + "/lună";
                }),
                t("c4640fc0", "Distribuie profilul Abonamente"),
                t("a72064a8", "Copiază linkul la profilul Abonamente"),
                t("e6c72234", "condițiile pentru dezvăluirea adresei de e-mail"),
                t("b17f0c4b", function (e) {
                    return "Acum te-ai abonat la @" + e.screenName;
                }),
                t("a5634d9a", "Există o problemă legată de procesarea Abonamentului. Închide acest mesaj și încearcă din nou."),
                t("fe9d3afa", "Se încarcă urmăritorii"),
                t("ab7fc3ef", function (e) {
                    return "Persoane care super-urmăresc utilizatorul " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("j0d17377", function (e) {
                    return "Persoane pe care le cunoști urmăresc pe " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("fa9e827f", function (e) {
                    return "Persoanele care urmăresc pe " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("ha979be5", function (e) {
                    return "Persoanele urmărite de " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("d28be573", function (e) {
                    return "Persoane abonate la " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("g9da3853", function (e) {
                    return "Persoane abonate de " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("cfd952a1", function (e) {
                    return "Conturi verificate care urmăresc " + e.fullName + " (@" + e.screenName + ")";
                }),
                t("fecc696e", "Urmăritori verificați"),
                t("g0a2fbbe", "Nu ai niciun Abonat încă"),
                t("g65f4bac", "Încă nu ai urmăritori"),
                t("c36cfddc", "Cauți urmăritori?"),
                t("fd275c1a", "Încă nu ai urmăritori verificați"),
                t("e08bd098", "Vei găsi o listă cu toți utilizatorii care se abonează la contul tău aici."),
                t("j029a4dc", "Când cineva te urmărește, vei vedea acest lucru aici."),
                t("b2b2c6ce", "Când cineva urmărește acest cont, vei putea vedea acest lucru aici. Postările și interacțiunea cu ceilalți contribuie la creșterea numărului de urmăritori."),
                t("cb1a15c8", "Dacă urmărești conturi este foarte simplu să îți gestionezi cronologia și să știi ce se întâmplă cu subiectele sau persoanele care te interesează."),
                t("i967b954", "Vei găsi aici o listă a tuturor abonamentelor tale."),
                t("a44e403e", "Când te urmărește un cont verificat, îl vei vedea aici."),
                t("d74ee2e3", function (e) {
                    return "@" + e.screenName + " nu are încă urmăritori pe care îi cunoști";
                }),
                t("ae5749c7", function (e) {
                    return "@" + e.screenName + " nu urmărește pe nimeni";
                }),
                t("b5099e33", function (e) {
                    return "@" + e.screenName + " nu are urmăritori verificați.";
                }),
                t("ec251f36", "Când o persoană pe care o cunoști urmărește acest utilizator, aceasta va fi listată aici."),
                t("f8af4f48", "După ce îți vor urmări contul, îi vei putea vedea aici."),
                t("fd0aad94", "Atunci când un utilizator verificat urmărește acest cont, acesta va apărea aici."),
                t("b84f6df1", function (e) {
                    return "Dăruiește Premium la o reducere de " + e.percentage + "% pentru o perioadă limitată";
                }),
                t("cfcac293", function (e) {
                    return "Cadou și plată " + e.price;
                }),
                t("d7a73450", "Nivel"),
                t("hbd2c24e", "Acest cont nu este momentan eligibil pentru cadouri."),
                t("f3fddc98", "Condițiile noastre de utilizare pentru cumpărători"),
                t("cff9c889", "Aflați mai multe"),
                t("c65dda96", "Cadoul a fost trimis."),
                t("f6e2a407", function (e) {
                    return "Permite tuturor să vadă ecusonul tău de Abonat când răspunzi la postările utilizatorului @" + e.screenName;
                }),
                t("j8dedddd", function (e) {
                    return "Dacă dezactivezi această funcție, @" + e.screenName + " și Abonații săi vor vedea în continuare ecusonul tău când răspunzi la postările destinate doar Abonaților utilizatorului @" + e.screenName + ". @" + e.screenName + " va vedea tot timpul ecusonul tău.";
                }),
                t("c8a513f6", "Anulează Abonamentul"),
                t("ea000ec8", "Ți-ai anulat deja Abonamentul?"),
                t("d7b8387e", "Dacă ai anulat deja Abonamentul, nu mai poți face nimic. Abonamentul tău va expira automat la sfârșitul ciclului de facturare."),
                t("f4166d9a", "Vrei să îți anulezi Abonamentul?"),
                t("b74ff5fc", "Dacă anulezi, Abonamentul tău va expira automat la sfârșitul ciclului de facturare."),
                t("ee9efbc8", "Continuă spre anulare");
            function c(e, a) {
                for (var i = 0; i < a.length; i++) {
                    var t = a[i];
                    (t.enumerable = t.enumerable || !1),
                        (t.configurable = !0),
                        "value" in t && (t.writable = !0),
                        Object.defineProperty(
                            e,
                            ((r = t.key),
                            (n = void 0),
                            "symbol" ==
                            typeof (n = (function (e, a) {
                                if ("object" != typeof e || null === e) return e;
                                var i = e[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var t = i.call(e, a || "default");
                                    if ("object" != typeof t) return t;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === a ? String : Number)(e);
                            })(r, "string"))
                                ? n
                                : String(n)),
                            t,
                        );
                }
                var r, n;
            }
            function u(e, a) {
                return (
                    (u = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, a) {
                              return (e.__proto__ = a), e;
                          }),
                    u(e, a)
                );
            }
            t("c5d9c77a", "Se pare că a fost o mică problemă. Dar nu-ți face griji, nu este din vina ta. Închide această fereastră și încearcă din nou."),
                t("jda53c24", "Îți poți anula Abonamentul prin Apple App Store."),
                t("g0a7a53e", "Îți poți anula Abonamentul prin Magazinul Google Play."),
                t("i5f14be7", function (e) {
                    return "Bine ai revenit, " + e.displayName;
                }),
                t("a76d58ba", "Analiză reclame"),
                t("eccd0e1a", "Analiză organizații"),
                t("deea1708", "Vrei să vezi analiza pentru toate conturile tale X?"),
                t("eb603ffc", "Fă upgrade pentru a adăuga afiliați la rețeaua ta și pentru a vedea analiza agregată."),
                t("gf67aae4", "Fă upgrade pentru acces complet"),
                t("h75e3618", "Include organizația"),
                t("h24a8862", "Despre această casetă de selectare"),
                t("c29e3a88", "Selectează afiliați"),
                t("j8318d57", function (e) {
                    return e.number + " afilia" + r(e.number, "ți", "t", "ți");
                }),
                t("bf809ec0", "Selectează afiliați"),
                t("b719e224", "Niciun rezultat"),
                t("c9938100", "Rezultatele căutării"),
                t("d1a35ec6", "Adaugă conturi"),
                t("b437adda", "Fă upgrade la opțiunea contra cost"),
                t("f1f6c88b", function (e) {
                    return "Conturi (" + e.count + ")";
                }),
                t("b02156b8", "Invitații"),
                t("gd67d29b", function (e) {
                    return "Invitații (" + e.count + ")";
                }),
                t("daf646e6", "Ai în vedere: trebuie să etichetezi corect conturile."),
                t("i3895c32", "Contul tău este supus verificării, deoarece ți-ai modificat @identificatorul X"),
                t("i5f8b628", "Nu poți modifica afiliații până când contul nu este verificat."),
                t("e9e663ac", "Termenul tău de plată a fost depășit."),
                t("c3ddd22c", "condițiile"),
                t("c9729d8a", "condițiile"),
                t("cdcd1d2c", "Adaugă afilieri la organizația ta"),
                t("d30ea6f3", function (e) {
                    return "Ești sigur să dorești să elimini @" + e.name + "?";
                }),
                t("c2dfbb86", "Da, așa doresc"),
                t("ba047f76", "Prin eliminarea unei afilieri se elimină imediat și bifa și ecusonul de afiliere. Vei continua să fii facturat până la finalul lunii."),
                t("j26dee0e", "Elimină afiliatul"),
                t("e30cbdf0", "Acest afiliat este un abonat la Organizații verificate și trebuie să rămână o Organizație. Starea acestuia nu poate fi modificată la Persoană."),
                t("j3115ce8", "Persoană"),
                t("d8bb1d84", "Organizație"),
                t("e970bdbd", function (e) {
                    return e.count + " invitații rămase";
                }),
                t("id67d953", function (e) {
                    return "Ceva nu a funcționat corect la preluarea detaliilor plății tale Stripe. Dacă această problemă continuă, contactează " + e.supportEmail + ".";
                }),
                t("f323d314", "Retrimite"),
                t("ac645cde", "Le poți readăuga oricând."),
                t("d12af2dd", function (e) {
                    return "Sigur vrei să elimini această invitație pentru @" + e.screenName + "?";
                }),
                t("ib60b2d5", function (e) {
                    return "Sigur vrei să retrimiți această invitație către @" + e.screenName + "?";
                }),
                t("ec6e7d9a", "Contul tău este în modul doar citire până la finalizarea schimbării de nivel. Accesează Stripe și verifică plata pentru a te asigura că schimbarea de nivel se efectuează cu succes."),
                t("b33d1518", "Sincronizează locurile de muncă dintr-o integrare acceptată sau dintr-un flux personalizat XML"),
                t("dd2db402", "Pasul 1: Colectează informațiile necesare"),
                t("edb098c2", "Pasul 2: contactează echipa noastră de asistență"),
                t("c4474460", "Pasul 2: Trimite un e-mail echipei de asistență"),
                t("a08da0fa", "Ce se întâmplă în continuare?"),
                t("c127374e", "Trimite-ne un mesaj"),
                t("b2cb2a0c", "Numele de utilizator al contului tău Organizații verificate"),
                t("b8e64002", "Numele sistemului de monitorizare a candidaților"),
                t("acb99db6", "URL-ul la site-ul cu cariere, unde sunt enumerate locurile de muncă"),
                t("a64a5b7a", "Trimite-i echipei de asistență informațiile necesare pentru a începe procesul de integrare."),
                t("e3dffb4e", "Copiază adresa de e-mail de asistență de mai jos și trimite-i echipei de asistență informațiile necesare pentru a începe procesul de integrare."),
                t("b4fef99e", "După ce echipa noastră de asistență primește cererea, vom revizui informațiile furnizate și te vom ajuta să configurezi integrarea."),
                t("h37f2d96", "Ai în vedere că nu toate sistemele de monitorizare a candidaților sunt acceptate momentan."),
                t("ce102a20", "Redirecționare către Stripe"),
                t("ddfd6718", "Plata a eșuat"),
                t("i90ea7d2", "Actualizează-ți urgent informațiile de facturare pentru a-ți păstra beneficiile."),
                t("a62359e6", "Setări Organizații verificate"),
                t("ge221b7c", "Fă upgrade la aboamentul pentru Organizații verificate pentru a avea acces la mai multe credite pentru reclame și afiliați."),
                t("i4dccc18", "Facturare"),
                t("ec3cd6e4", "Gestionează metoda de plată, actualizează informațiile de facturare și verifică-ți facturile."),
                t("dac61c3c", "Setări cont"),
                t("b6b5fd66", "Gestionează-ți contul X, inclusiv schimbarea numelui de utilizator și a parolei."),
                t("hb9c4a1c", "Întrebări, rapoarte de erori și feedback"),
                t("c674f5b4", "Configurează plățile facturilor"),
                t("i8237e66", "Treci de la plățile pe cardul de credit la facturarea prin transferuri bancare."),
                t("hebd348a", "Configurează modul în care sunt utilizate reclamele pentru promovarea locurilor de muncă din portalul pentru angajări."),
                t("ib5e6f90", "Promovarea locurilor de muncă"),
                t("id720215", "pentru angajări"),
                t("dd59f146", "Contul de reclame pentru promovarea locurilor de muncă"),
                t("e7e36818", "Conturile pentru reclame sunt eligibile pentru promovarea locurilor de muncă atunci când sunt complet configurate cu o sursă de finanțare."),
                t("c28566e0", "Cont pentru reclame"),
                t("c80160d3", "Publicitate"),
                t("ff0edac0", "Sigur vrei să îți anulezi abonamentul?"),
                t("h2ac0348", "Nu, vreau să mă întorc"),
                t("dbf9667e", "Sunt sigur"),
                t("j7592572", "Întoarcere"),
                t("ee778942", "Semafor"),
                t("fdd57981", function (e) {
                    return "Vrem să-ți oferim un credit gratuit pentru reclame, în valoare de " + e.totalAmount + ", disponibil o singură dată.";
                }),
                t("i032a231", function (e) {
                    return "Voi rămâne și voi solicita creditul de reclame, în valoare de " + e.totalAmount;
                }),
                t("hd7d278c", "Nu, mulțumesc"),
                t("jf8a0dea", "Excelent! Noul tău credit gratuit de reclame va apărea în contul tău la următorul ciclu de facturare."),
                t("ebbb3154", "Închide și întoarce-te la X"),
                t("j1f68dda", "Pas final: Sigur anulezi?"),
                t("c9c3464c", "Anularea abonamentului este în curs"),
                t("dd3a293c", "Abonamentul tău de organizație verificată s-a încheiat."),
                t("faa0f956", "Ceva nu a funcționat la anularea abonamentului."),
                t("b28289ea", "Mulțumim"),
                t("b36f74ae", "Nu vei mai avea acces la portal decât dacă te înregistrezi și te reactivezi."),
                t("b2297a4a", "Ai nevoie de ajutor cu o problemă? Poți planifica o conversație telefonică cu noi"),
                t("h3bdbc54", "Da, să planificăm o conversație telefonică"),
                t("i135d64e", "Continuă anularea"),
                t("g275882d", function (e) {
                    return "Important: ai un credit gratuit de reclame, în valoare de " + e.creditAmount + ", nesolicitat";
                }),
                t("ib085ed6", "Voi rămâne și voi solicita creditul de reclame"),
                t("b5447710", "Utilizator negăsit"),
                t("h94755b8", "Utilizator selectat deja pentru invitație"),
                t("bfb5effe", "Utilizator afiliat deja"),
                t("c4b9664e", "Afiliat"),
                t("g0eadcf6", "Afiliat cu altă organizație"),
                t("a8c81f88", "Cont de organizație"),
                t("e5abe772", "Utilizatorul are deja o invitație în așteptare"),
                t("e49b97e2", "Caută conturi"),
                t("f002f1d6", "Trimite invitația"),
                t("g2a8bae4", "Adaugă conturi X"),
                t("af7293cc", "Invită conturi X să se alăture organizației tale. Dacă acestea acceptă, vor primi o bifă, iar afilierea voastră va fi afișată în profilurile lor."),
                t("ec0f203e", "După ce afiliatul acceptă invitația, ai grijă să îi actualizezi bifa la culoarea corectă."),
                t("cec08784", "La această factură, ai atins limita pentru numărul maxim de afiliați."),
                t("ab70828f", function (e) {
                    return "Adaugă pe @" + e.screenName;
                }),
                t("d49b389f", "aici"),
                t("b9e4bf55", "Află mai multe"),
                t("hc4703a9", "Află mai multe"),
                t("fa0ffaeb", "Află mai multe"),
                t("jf351704", "Pentru a continua, trebuie să actualizezi limita de afiliați de pe această factură."),
                t("ia5a6a40", "Ca să începi, trebuie să adaugi detaliile de plată."),
                t("d40d1cc0", "Pentru a continua, trebuie să efectuezi plata prin Stripe."),
                t("c4a5f614", "Adaugă detaliile de plată"),
                t("fa2a280a", "Actualizare factură"),
                t("i7b2f08e", "Bun venit la Organizații verificate"),
                t("g4e18b84", "Ai atins limita de afiliați"),
                t("cbe23239", function (e) {
                    return "Pentru comenzi de achiziție de peste " + e.affiliatesCount + " afiliați.";
                }),
                t("fc1f43d0", "Generare factură"),
                t("g8881c78", "Continuă către plată"),
                t("g59f8506", "Notă: Conturile care nu pot fi verificate drept companii sau instituții nu vor primi rambursări."),
                t("a310e476", "Direct."),
                t("fde6cf98", "Pentru acces imediat la organizații verificate."),
                t("fdfbfcb0", "Facturare"),
                t("f45d02e8", "Ceva nu a funcționat la configurarea abonamentului. Încearcă să retrimiți, din e-mailul de activare."),
                t("a1c566c0", "Ceva nu a mers cum trebuie la configurarea abonamentului. Trimite din nou detaliile tale."),
                t("f5a1c6ac", "Abonamentele nu sunt disponibile în regiunea ta"),
                t("ef7ae9cd", "Află mai multe"),
                t("d3c6b8c9", "Află mai multe"),
                t("fafe5b9f", function (e) {
                    return "Abonează-te pentru · " + e.price + " pe " + e.interval;
                }),
                t("f2ae1d63", "Condițiile de utilizare pentru cumpărători"),
                t("ie8759c5", "Condițiile de utilizare pentru cumpărător"),
                t("d842dd7b", function (e) {
                    return "Dezvoltă-te mai rapid pe X și primește gratuit un credit pentru reclame în valoare de " + e.credit;
                }),
                t("fcfb696e", "⁺Ofertă pe perioadă limitată, pentru creditul pentru reclame."),
                t("f5b98d62", function (e) {
                    return "în fiecare " + e.interval;
                }),
                t("ed7b9984", function (e) {
                    return "în fiecare " + e.interval;
                }),
                t("da11a2d7", function (e) {
                    return "Până la " + e.creditAmount + " în credite pentru publicitate⁺";
                }),
                t("a6c45ede", "Include:"),
                t("e9aa43dc", "Postări organice cu locurile de muncă"),
                t("i1266238", "Capabilități pentru promovarea locurilor de muncă"),
                t("e8a4ea7a", "Asistență prioritară"),
                t("j99e2f4d", function (e) {
                    return e.price + "/" + e.interval;
                }),
                t("ieafe1c6", "Confirmă schimbarea abonamentului"),
                t("bb21a170", "Modificare abonament"),
                t("b0dcc4dc", "Contul tău este deja în așteptarea unei schimbări a nivelului."),
                t("f3aef4ca", "Nu s-au găsit abonamente active"),
                t("h802e65e", "Actualizarea abonamentului a eșuat. Abonamentul actual nu ți-a fost afectat."),
                t("c5269eb0", "Acesta este abonamentul tău activ."),
                t("c578c4ca", "Planul curent"),
                t("i5d19147", "Nou plan"),
                t("b025ff5f", "aici"),
                t("d6b932d4", "În perioada de încercare gratuită"),
                t("b0efe690", "Continuă cu De bază"),
                t("g5f9cdaa", "Confirmă modificările planului"),
                t("j21911de", "Vrei să continui cu planul De bază sau vrei să-ți păstrezi avantajele din Acces complet?"),
                t("b59dec9e", "De la versiunea de încercare gratuită pentru Acces complet retrogradezi acum la planul De bază."),
                t("e5ff0e1e", "Prin această modificare:"),
                t("ca004c80", "Accesul complet la caracteristicile de încercare, inclusiv Afiliați, nu va mai fi disponibil. "),
                t("fae108ee", "Afiliații adăugați în timpul perioadei de încercare vor pierde avantajele și asistența Premium+."),
                t("d47c0c7c", "Cine ești?"),
                t("hbd31720", "Alege abonamentul care ți se potrivește:"),
                t("c75a9386", "Află mai multe despre"),
                t("b916b258", "și"),
                t("ic6012ea", "Sunt o persoană"),
                t("d8e618ce", "Pentru persoane fizice și creatori"),
                t("dcbccede", "Sunt o organizație"),
                t("f44ce884", "Pentru companii, agenții guvernamentale și organizații non-profit"),
                t("dece6c60", "Numele organizației"),
                t("c4c1b600", "Adresa de e-mail a organizației"),
                t("b1e0aec0", "@identificator al organizației"),
                t("c42d5f4a", "Număr de afiliați"),
                t("fca5f04b", function (e) {
                    return "Poți să achiziționezi până la " + e.affiliatesCount + " afiliați și vei fi taxat(ă) în funcție de acest număr.";
                }),
                t("dca6b3ac", "Configurează o factură"),
                t("c97ad52a", "Actualizare factură"),
                t("b36f0fd4", "Selectează de câți afiliați ai avea nevoie pentru organizația ta."),
                t("b4871f4f", "aici"),
                t("b633d19e", "Mulțumim"),
                t("f713d3e2", "Candidatura ta a fost primită și se află acum în curs de revizuire."),
                t("e11d5e1a", "Vei putea să valorifici toate beneficiile Premium, dar organizația ta nu va primi o bifă aurie sau gri și nu vei putea să adaugi conturi afiliate până când contul tău nu este aprobat."),
                t("d83617cc", "Contul tău va fi revizuit."),
                t("afb30564", "Pentru a-ți aproba contul, este posibil să solicităm informații suplimentare."),
                t("gdd3fa68", "După revizuire și aprobare, contul tău va fi verificat imediat și vei putea să înregistrezi și să adaugi afilieri."),
                t("e6389996", "Nu se va efectua rambursarea către niciun cont care nu este aprobat."),
                t("a889b460", "Plată reușită"),
                t("d1c886dc", "Pasul următor: încarcă și verifică documentele"),
                t("b13e9454", "Solicitarea nu este completă. Trimite documentele necesare. De obicei, durează aproximativ 10 minute să ni le trimiți."),
                t("e6b0965a", "Comanda ta"),
                t("a1b58798", "Examinează comanda mai jos"),
                t("b651c7d7", function (e) {
                    return "Afilia" + r(e.count, "ți", "t", "ți") + " x " + e.count;
                }),
                t("ec5e9c54", "Abonament de bază"),
                t("e16093fc", "Total lunar"),
                t("ce4acef6", "Total anual"),
                t("f4db2df0", "Abonamentul tău va deveni activ doar după plata facturii."),
                t("b9e0d614", "Limita ta de afiliați a fost actualizată pe factură."),
                t("a45c9596", "Factura ta a fost generată cu succes."),
                t("e4e5532a", "Reducere aplicată"),
                t("b557f073", function (e) {
                    return "Ceva nu a funcționat corect la preluarea detaliilor facturii tale Stripe. Dacă această problemă continuă, contactează " + e.supportEmail + ".";
                }),
                t("e8c366ce", "Condițiile de utilizare X pentru cumpărători"),
                t("ee86d380", "Informații despre organizație"),
                t("b9c9ccca", "Numele tău complet"),
                t("c7e818de", "Adresa ta de e-mail de serviciu"),
                t("i60d7542", "Site-ul organizației"),
                t("b92f9dee", "Tipul organizației"),
                t("f14d7866", function (e) {
                    return "" + e.screenName;
                }),
                t("e63bf39d", "Află mai multe"),
                t("f09630ff", "aici"),
                t("eb043b72", "Solicitare în așteptare"),
                t("a9ac4602", "Solicitarea ta pentru Organizații verificate este examinată încă. Încearcă din nou mai târziu."),
                t("c5af3e12", "Ofertă pe perioadă limitată. Creditele nu se acumulează."),
                t("e18d6fd6", "Creditul tău pentru reclame"),
                t("if435d1a", "Ai folosit toate creditele disponibile în această lună. Următorul credit îți va fi acordat la următoarea plată a abonamentului"),
                t("af6704d7", "aici"),
                t("b293c6b4", "asistența premium pentru utilizatori verificați"),
                t("e9e9ca58", "Disponibil"),
                t("cf2ba3a2", "ID cont pentru reclame"),
                t("gd7d051c", "Activează"),
                t("f391c800", "Este necesar ID-ul contului pentru reclame"),
                t("ja116d2c", "ID-ul contului pentru reclame este nevalid"),
                t("hf037537", function (e) {
                    return "Acest credit va fi disponibil începând cu " + e.startDate;
                }),
                t("d0b58c01", function (e) {
                    return "" + e.days;
                }),
                t("e49cb8a7", function (e) {
                    return "" + e.remainingAmount;
                }),
                t("gd03b494", "Cum poți utiliza creditul pentru reclame"),
                t("h1f36d3e", "Pentru a utiliza creditul pentru reclame Organizații Verificate, urmează acești pași:"),
                t("a6519ffc", "Dacă ai făcut publicitate înainte"),
                t("ibc9654a", "Dacă ești un agent de publicitate nou"),
                t("d3710c76", "Dacă vrei să utilizezi creditul pe un cont afiliat"),
                t("d60a8f14", "Difuzează reclame pe X"),
                t("fe66e4a8", "Managerul de reclame X"),
                t("b3ca0108", "Distribuie-ți mesajul în lung și în lat cu reclamele pe X."),
                t("g3754d57", "aici"),
                t("i615ad63", "aici"),
                t("a3ba48b9", "aici"),
                t("ca3c633a", "Credite pentru reclame"),
                t("ha843c96", "reclame"),
                t("dd0f3b08", "reclame"),
                t("c9fad534", "Fără credite"),
                t("a211b11e", "Nu există credite disponibile pe care să le activezi"),
                t("f2011db1", function (e) {
                    return e.usedAmount + " din " + e.couponAmount + " utilizate";
                }),
                t("ae37e25c", "valoare necunoscută"),
                t("i1407e15", function (e) {
                    return "Utilizat pentru contul pentru reclame " + e.accountId;
                }),
                t("id4359bf", function (e) {
                    return "Expirat pe " + e.when + " pentru contul pentru reclame " + e.accountId;
                }),
                t("f89af915", function (e) {
                    return "A expirat pe " + e.when;
                }),
                t("c1b5e1ed", function (e) {
                    return "Expiră pe " + e.when + " pentru contul pentru reclame " + e.accountId;
                }),
                t("e8d8a2a9", function (e) {
                    return "Expiră pe " + e.when;
                }),
                t("i3884c1f", function (e) {
                    return "Disponibil pe " + e.when;
                }),
                t("b070acf4", "Disponibil în curând"),
                t("ace946c4", "Activează cuponul"),
                t("b0b02e37", function (e) {
                    return "Acest cupon a fost aplicat cu succes la contul pentru reclame cu ID-ul: " + e.accountId;
                }),
                t("f520ee22", "ID cont pentru reclame"),
                t("df96ca56", "Alt cont"),
                t("b5566402", "Un ID trebuie să conțină doar litere și numere."),
                t("eb160d07", "selectorul de conturi din Manager reclame"),
                t("e016ad32", "Modul doar citire"),
                t("d7ab194e", "Este posibil ca unele caracteristici ale contului verificat să fie în modul doar citire atunci când se procesează modificarea abonamentului."),
                t("g25d851e", "Conturi pentru reclame"),
                t("de7fef84", "Contactează serviciul de asistență pentru clienți pentru a te ajuta cu acest cont"),
                t("ff1321b6", "Configurarea s-a finalizat, contul este activ"),
                t("c1205320", "Activează-ți contul pentru reclame adăugând un card de credit"),
                t("c0343c0a", "Ultima plată a eșuat, verifică metoda de plată de pe cont"),
                t("j56e34a4", "Contactează serviciul de asistență pentru clienți pentru ajutor privind accesul la cont"),
                t("gef920f2", "Pentru activarea contului, este necesară o configurare inițială"),
                t("b68dd4d8", "Nu ai acces la acest cont, cere ajutorul administratorului echipei"),
                t("d637962c", "Nu ai conturi pentru publicitate"),
                t("dd087ae0", "Configurează unul pe ads.x.com"),
                t("i3d7dd02", "Contul de reclame eligibil este gata pentru promovarea locurilor de muncă"),
                t("cc8f8516", "Creează un cont pentru reclame pentru a promova locuri de muncă"),
                t("b4f117b8", "Nu ai acces la contul de reclame pentru promovarea locurilor de muncă"),
                t("b7347cf4", "Configurează un cont pentru reclame pentru a promova locuri de muncă"),
                t("h7d03a2a", "Adaugă un loc de muncă folosind tabloul de bord pentru angajări"),
                t("cd5aeec6", "Creează un cont pentru reclame"),
                t("ged51d2e", "Creează un cont pentru reclame"),
                t("gcfa25e6", "Nu există conturi pentru reclame care să poată fi utilizate pentru organizația ta. Accesează ads.x.com pentru a crea un cont."),
                t("g76fb922", "Cont nou"),
                t("db0a69e7", function (e) {
                    return "Contul tău pentru reclame (ID: " + e.adAccountId + ") este un cont nou. Finalizează configurarea inițială în Manager reclame pentru a-l activa.";
                }),
                t("c7bad5cc", "Configurează contul"),
                t("g8c563c0", "Ai nevoie de acces"),
                t("f6f29b17", function (e) {
                    return "Nu ai acces la contul pentru reclame (ID: " + e.adAccountId + "). Cere-i administratorului echipei să te adauge la cont în Manager reclame.";
                }),
                t("a15bb840", "Este necesară o metodă de plată"),
                t("j4e981d9", function (e) {
                    return "Contul tău pentru reclame (ID: " + e.adAccountId + ") este configurat parțial. Pentru a-l activa, adaugă o metodă de plată la cont. Creditele pe care le aplici acestui cont vor fi utilizate complet înainte să ți se emită factura.";
                }),
                t("af142910", "Plata a eșuat"),
                t("a9635acf", function (e) {
                    return "Contul pentru reclame (ID: " + e.adAccountId + ") a fost activ, însă ultima plată a eșuat. Pentru a-l activa din nou, schimbă metoda de plată pentru acest cont.";
                }),
                t("d1cca474", "Modifică metoda de plată"),
                t("fe8b969a", "Serviciul de asistență pentru clienți te poate ajuta"),
                t("i8aa0b91", function (e) {
                    return "Acest cont pentru reclame (ID: " + e.adAccountId + ") are nevoie de ajutor din partea serviciului de asistență pentru clienți pentru a fi activat. Nu uita să incluzi ID-ul contului pentru reclame în mesajul tău. Cererea ta va avea prioritate.";
                }),
                t("d82c2074", "Primește asistență"),
                t("ad37d536", "Condiții privind transferul identificatorilor"),
                t("e760074a", "Cumpără un identificator inactiv sau schimbă unul pe care îl ai"),
                t("j003ef92", "Achiziționează identificatori inactivi de pe X pentru tine sau afiliații tăi ori schimbă identificatorii pe care îi deții."),
                t("d57a8e42", "Acest serviciu este exclusiv pentru Organizații verificate și implică un cost suplimentar pentru fiecare identificator, începând cu 10.000 $."),
                t("h9367bd6", "Trimite o solicitare privind un identificator"),
                t("a6a62e7e", "Inițiază procesul răspunzând la câteva întrebări, folosind robotul nostru automat pentru asistență."),
                t("e5912290", "Solicitarea privind identificatorul se inițiază"),
                t("c2e24f66", "Caută mesajul din partea asistenței în colțul de jos al ecranului."),
                t("c94f514e", "Solicitarea privind identificatorul a fost inițiată"),
                t("cf60d152", "Completează chestionarul scurt din fereastra cu chatul pentru a trimite solicitarea cu privire la identificator."),
                t("f06b124e", "Întrebări frecvente"),
                t("h677fdcc", "Cum se stabilesc prețurile identificatorilor?"),
                t("a55b39aa", "Se bazează în principal pe numărul de caractere și pe cât de uzual este cuvântul. Prețurile încep de la 10.000 $ și ajung până la 500.000 $."),
                t("d46bcb3a", "Cum știu dacă un identificator se poate achiziționa?"),
                t("c6bcf72c", "Trimite-ne o solicitare apăsând butonul Începe. Îți vom spune dacă identificatorul este disponibil."),
                t("d478604c", "Pot cumpăra un identificator în numele unei alte companii?"),
                t("c09f8cd2", "Nu. Companiile pot achiziționa doar identificatori în numele afiliaților lor, asociați efectiv companiei."),
                t("d814f020", "Care este procesul de vânzare? Cât durează?"),
                t("f600b6f0", "Solicită achiziția sau schimbarea unui identificator apăsând butonul Începe. Îți vom comunica disponibilitatea și prețul în termen de 3 zile lucrătoare. După plată, îți vom transfera identificatorul în contul dorit în decurs de 1–2 zile. Opțional, îți putem muta vechiul identificator într-un alt cont pe care îl deții."),
                t("i8debc4a", "Se oferă reduceri pentru mai mulți identificatori?"),
                t("c5199f3c", "Da, depinde de numărul de identificatori pe care îi achiziționezi și de valoarea cotației."),
                t("c20f923e", "Ce se întâmplă dacă am o marcă comercială?"),
                t("b2fd4c15", "Politica noastră referitoare la mărcile comerciale"),
                t("a690746e", "Primește asistență prioritară"),
                t("he2dc9b0", "Contactează-ne trimițându-ne identificatorul organizației tale și detaliile cererii."),
                t("e5e6479e", "Pentru a primi asistență cât mai rapid, trimite-ne un e-mail cu identificatorul organizației și detaliile cererii tale."),
                t("ica8392a", "După ce primim cererea, o vom revizui și prioritiza în ordinea primirii."),
                t("ed37e36e", "Important: Lipsa identificatorului organizației sau folosirea unui e-mail personal poate cauza întârzieri de procesare a cererii tale."),
                t("h7e1c146", "Delegate accounts are not currently supported."),
                t("eb0d4fe2", "Creează o coloană"),
                t("e93d2f8a", "Personalizează-ți experiența prin adăugarea mai multor coloane, cum ar fi:"),
                t("e8203d1e", "Căutări"),
                t("d82fd532", "Mesaje directe"),
                t("c87babee", "Și mai multe..."),
                t("f1990aa4", "Organizează coloanele tale cu Seturi"),
                t("ib9c9a54", "Imaginează-ți că ai mai multe calculatoare conectate la X Pro. Ignoră elementele care îți distrag atenția și concentrează-te doar pe subiectele și instrumentele de care ai nevoie atunci când ai nevoie de ele."),
                t("fb5ac13e", "Mută o coloană"),
                t("bd545b7e", "Fă clic pe aceste puncte pentru a glisa și fixa o coloană oriunde în Setul tău."),
                t("a98513b6", "Personalizare coloane"),
                t("c8759e44", "Rămâi pe partea superioară a unei coloane pentru a afișa opțiuni precum:"),
                t("a93e96c8", "Ordonează postările după populare sau recente"),
                t("df300378", "Modifică dimensiunea coloanei"),
                t("aa263910", "Folosește instrumente de căutare avansate"),
                t("ab3915aa", "Sfaturi și setări"),
                t("ia03837a", "Mergi aici:"),
                t("f0bd595c", "Gestionează Seturile"),
                t("a74e9464", "Modifică setările de afișare"),
                t("h254eb92", "Descoperă comenzile rapide de la tastatură"),
                t("j6e669a0", "Fă turul din nou"),
                t("c15802be", "Se trimit postările..."),
                t("e5506950", "Seturi"),
                t("b1bd9a8a", "Set nou"),
                t("cf1a138f", function (e) {
                    return "Modificat la set - " + e.title;
                }),
                t("g9c2da24", "Deschide dialogul pentru crearea unui set nou"),
                t("hcef6b72", "Deschide dialogul pentru gestionarea seturilor tale"),
                t("a77dbc7a", "Editează setul"),
                t("a154a293", function (e) {
                    return "Setul " + e.deckName + " selectat";
                }),
                t("a77bbe9d", function (e) {
                    return "Setul " + e.deckName + " deselectat";
                }),
                t("ha2aae72", "Deschide dialogul pentru a gestiona setul selectat"),
                t("hf59ffc8", "Bară de navigare"),
                t("dd6142d7", "Pro"),
                t("d69fc67a", "Adaugă o coloană nouă"),
                t("ad61a830", "Compune o postare"),
                t("c44f5114", "Setări pentru mesaje"),
                t("c71066fe", "Fă un tur"),
                t("b452e6c2", "Ce mai faci?"),
                t("j7737bc2", "Îți mulțumim că ai utilizat X Pro, ne-ar plăcea să știm cum ți se pare până acum. "),
                t("e8038d64", "Părerea ta este importantă pentru noi, ne va ajuta să îmbunătățim experiența utilizatorilor."),
                t("fce3c5ce", "Oferă feedback"),
                t("ha39df38", "Personal"),
                t("ja7b7d1a", "Momentan, ne confruntăm cu probleme de conexiune. Este posibil ca modificările pe care le faci să nu se salveze."),
                t("ad5df1d7", function (e) {
                    return "Modificat în coloana - " + e.title;
                }),
                t("ba7bd92e", "Setări coloană"),
                t("cc4ff736", "Distribuie coloana"),
                t("g684a93a", "Modificările pe care le faci la această coloană vor fi văzute de oricine vizualizează coloana."),
                t("a6bbdc1c", "Doar vizualizare"),
                t("f6e88162", "Laboratoare"),
                t("e6df688c", "Opțiuni"),
                t("e3f2b93a", "Afișează sau ascunde informații despre această coloană."),
                t("db257758", "Dimensiune previzualizare conținut media"),
                t("if2fbab8", "Dimensiune previzualizare conținut media răspunsuri"),
                t("he517d52", "Redenumește coloana"),
                t("f6eb2cfe", "Nume coloană"),
                t("d6d39c84", "Coloanele trebuie să aibă un nume."),
                t("e5c06aee", "Lățime coloană"),
                t("af6a4368", "Redenumește această conversație și vezi cine participă la ea."),
                t("cdeac5ee", "Setări pentru mesajele directe"),
                t("fda7ee26", "Gestionează cine îți poate trimite mesaje."),
                t("c4ec8620", "Include"),
                t("d5f29cd4", "Exclude"),
                t("d01a62f8", "Ora și locul"),
                t("d614afc8", "Aprecieri, răspunsuri și repostări"),
                t("fb2bbc7a", "Conținutul postării"),
                t("a589add2", "Oricare din aceste cuvinte (SAU)"),
                t("d2f8dc8a", "Postări de la cineva"),
                t("e37201ec", "Răspunsul către o persoană"),
                t("e035e056", "Menționarea unei persoane"),
                t("ef2d4092", "Exclude cuvinte"),
                t("d59f395e", "Limba de afișare"),
                t("g67cd3f2", "Alege limbile"),
                t("c85f9b9c", "Schimbă limbile"),
                t("b5148188", "Mai mult de"),
                t("hf369320", "Mai puțin de"),
                t("f4dce7b6", "Numărul"),
                t("ddafa9a2", "Vezi opțiunile"),
                t("c6be8432", "Nivelul interacțiunilor"),
                t("e60b9fac", "Afișează postările originale"),
                t("eb441fee", "Afișează repostări"),
                t("e920e6dc", "Afișează citate"),
                t("g9580526", "Afișează răspunsurile"),
                t("i73cbb5c", "Poți adăuga o singură listă la o căutare. Doar prima listă se va aplica acestei căutări."),
                t("c765315d", function (e) {
                    return "Introdu " + e.listHandleListNameFormat + " sau ID-ul de listă";
                }),
                t("a153fbf2", "Cum se folosește o listă într-o căutare"),
                t("bf0d5a7c", "Poți adăuga o singură listă per căutare."),
                t("c6e8759a", "Pentru a adăuga o listă, folosește acest format:"),
                t("dd9daca8", "Înlocuiește punctele cu - în numele listei."),
                t("cd71b264", "Află despre liste."),
                t("ca23d726", "Imagini și videoclipuri"),
                t("f1fa97a8", "Transmisiuni"),
                t("c0bab0ba", "Afișează doar postările care au conținut media"),
                t("g9512656", "Afișează doar persoanele verificate"),
                t("b967e296", "Afișează doar persoanele pe care le urmărești"),
                t("gc51a2ac", "Oricând"),
                t("d42a4916", "Recent"),
                t("a2229a06", "Într-un interval de timp"),
                t("c1fe6156", "Ora de început"),
                t("cbc02622", "Ora de încheiere"),
                t("b666573c", "Caută locația"),
                t("cf260344", "Postări în"),
                t("j5805302", "Raza"),
                t("e592ab3c", "Pentru rezultate mai bune, include locația și țara sau județul în căutare."),
                t("e8843b5d", function (e) {
                    return e.meters + " m";
                }),
                t("g9e6a4e5", function (e) {
                    return e.kilometers + " km";
                }),
                t("ec688a09", function (e) {
                    return "Astfel, împiedici ca @" + e.screenName + " să te includă în vreuna dintre listele sale, inclusiv în aceasta.";
                }),
                t("iad54d54", "Șterge Marcaje"),
                t("g4d581a2", "Golește asta și toate folderele Marcaje"),
                t("fb14aebe", "Golește Marcaje"),
                t("jf748f40", "Golești tot în Marcaje?"),
                t("d63a211a", "Această acțiune nu poate fi anulată și vei șterge toate postările pe care le-ai adăugat în Marcaje."),
                t("a16ebc1a", "Începe un chat nou"),
                t("a1ff1890", "Acest lucru va șterge conversația actuală."),
                t("ab352ee0", "Afișează cele mai recente postări"),
                t("c004c4d6", "Elimină postările"),
                t("fc702822", "Elimină postările și vizualizează-le pe cele mai recente, pe măsură ce sunt afișate."),
                t("a2c59056", "Înainte de a goli coloana..."),
                t("d31bdbbe", "Comută la cele mai recente postări"),
                t("dec3722c", "cele mai recente postări"),
                t("g33b8c04", "Fă o copie"),
                t("de2c3008", "Fă un duplicat al coloanei."),
                t("a7c01ce0", "Modifică numele sau șterge folderul"),
                t("e52e4c82", "Schimbă locația și opțiunile de personalizare."),
                t("f4d052a4", "Grok (mod obișnuit)"),
                t("fa97c1c6", "Grok (mod distractiv)"),
                t("efb37dec", "Mod"),
                t("h0064892", "Obișnuit"),
                t("ad86db50", "Creează un Set"),
                t("hb70ef30", "Creează un Set pe baza acestei căutări"),
                t("j8a945cc", "Postări populare"),
                t("f3a4a654", "Postări verificate"),
                t("c8da0c42", "Fotografii și videoclipuri"),
                t("d2cf6f74", "Parteneri Premium"),
                t("c9b39e70", "Mută"),
                t("b9ea5f7c", "Mută coloana la un alt Set"),
                t("g8b6d450", "Opțiuni de notificare"),
                t("dd703fbd", function (e) {
                    return "Șterge coloana - " + e.title;
                }),
                t("d9d11fc6", "Vrei să ștergi Coloana publică?"),
                t("h17ada6c", "Ștergerea unei Coloane publice va face ca urmăritorii să piardă în mod ireversibil accesul la Coloană."),
                t("hb388fe8", "Șterge Coloana"),
                t("c1343ad6", "Transformă într-o coloană de căutare."),
                t("e7a12d72", "Transformat într-o coloană de căutare"),
                t("f29424f0", "Revenire"),
                t("h5ff85a2", "Coloana Distribuie"),
                t("d32058ba", "Fă coloana publică pentru a face posibilă distribuirea."),
                t("c926a6ca", "Modificările pe care le faci vor apărea pentru toată lumea care urmărește Coloana."),
                t("g0175ca2", "Selector de coloană"),
                t("a800727c", "Revino la selectorul de coloane"),
                t("f318bc40", "Creează folder nou"),
                t("e300a9f0", "Creează folderul Marcaje"),
                t("j341c67c", "Folderele trebuie să aibă o denumire."),
                t("d00586a6", "Această coloană nu poate fi încărcată. Încearcă să creezi o coloană nouă."),
                t("d0d8277e", "Proprietarul Coloanei a șters Coloana sau a făcut-o privată."),
                t("j08fd6fe", "Comunitățile tale"),
                t("b569a1fa", "Revino la Comunități"),
                t("i176bfd2", "Descoperă liste"),
                t("a57c3292", "Descoperă liste noi"),
                t("f59f87dc", "Găsește listele altor utilizatori"),
                t("a5d70676", "Liste pe care te afli"),
                t("e377790a", "Înapoi la Liste"),
                t("e952b8c3", function (e) {
                    return "Listele utilizatorului @" + e.userScreenName;
                }),
                t("bc24f834", "Înapoi la Găsește listele altor utilizatori"),
                t("ee11d084", "Căută profiluri"),
                t("c300f3bc", "Adaugă câteva coloane"),
                t("bd744e9a", "Populează cu o căutare"),
                t("i10d4124", "Începe de la zero"),
                t("jbff8606", "Trimite solicitare"),
                t("dbd8a566", "Unele postări schiță nu au putut fi șterse."),
                t("c82be5a8", "Postările schiță pe care le-ai selectat au fost șterse."),
                t("ad84af68", "Se încarcă postările schiță"),
                t("ef97fb3a", "Nu ai nicio postare schiță"),
                t("f26ece12", "Când faci acest lucru, le vei găsi aici."),
                t("a4911812", "Se șterg postările schiță"),
                t("b49be1ca", "Renunță la postările schiță"),
                t("ca91dc76", "Această acțiune nu poate fi anulată și îți vei pierde postările schiță."),
                t("b38b254a", "Unele postări planificate nu au putut fi șterse."),
                t("he2e3cc4", "Postările planificate pe care le-ai selectat au fost șterse."),
                t("jf9faee4", "Se încarcă postările planificate"),
                t("aa1cfd48", "Nu ai nicio postare planificată"),
                t("b2a70dbe", "Se șterg postările planificate"),
                t("a07bb1b0", "Renunță la postările planificate"),
                t("id78e802", "Această acțiune nu poate fi anulată și îți vei pierde postările planificate."),
                t("d9a75e16", "Alege una"),
                t("aa030cd4", "Vezi mai întâi postările recomandate."),
                t("c0d2d4aa", "Cronologia paginii principale"),
                t("ecbbbb90", "Vizualizează listele tale sau pe cele ale altor persoane."),
                t("c351229c", "Vezi Comunitățile din care faci parte."),
                t("a2d1df82", "Găsește ceea ce cauți."),
                t("d5387d8a", "Fii la curent cu mesajele tale."),
                t("e738198c", "Vezi subiectele populare pe X."),
                t("ifb8c91e", "Găsește un profil și vezi ce a mai făcut respectivul utilizator."),
                t("aa0525d0", "Profiluri"),
                t("cb7844a6", "Ține pasul cu notificările și menționările tale."),
                t("e64da55e", "Vizualizează postările tale planificate."),
                t("h9659832", "Vizualizează postările tale schiță."),
                t("f1b6535e", "Postări schiță"),
                t("a24add8a", "Vezi postările adăugate la Marcaje."),
                t("gb19f215", function (e) {
                    return "Coloană - " + e.title;
                }),
                t("g7751b34", "Închide grupul"),
                t("b94fa48c", "Șterge grupul"),
                t("dd3dc3cc", "Mergi înapoi în grup"),
                t("bc7acfd0", "Coloană distribuită"),
                t("a6587d95", function (e) {
                    return "Reordonează coloana - " + e.title;
                }),
                t("fb071dea", "  Mută coloana"),
                t("c77a6327", function (e) {
                    return "Deschide opțiuni pentru coloană - " + e.title;
                }),
                t("h53c41f0", "Opțiuni pentru coloană"),
                t("f7bbbb6d", function (e) {
                    return "Închide opțiuni pentru coloană - " + e.title;
                }),
                t("eee9f83e", "Închide opțiunile pentru coloană"),
                t("a443bbc0", "Închide căutarea"),
                t("c8b12c8f", function (e) {
                    return "Setează conținut coloană - " + e.title;
                }),
                t("fe048090", "Afișează prezentarea generală"),
                t("e57560b4", "Ascunde prezentarea generală"),
                t("fb087db0", "Creează o coloană separată"),
                t("aa128cd8", "Adaugă o coloană nouă"),
                t("aa4f00c6", "Distribuie Set"),
                t("fdf97052", "Mergi la opțiunile pentru seturi"),
                t("ed427868", "Dorești să faci public acest Set?"),
                t("gecc71a2", "Pentru a putea distribui un Set, acesta trebuie să fie public."),
                t("f0653866", "Partajează setul"),
                t("b158400a", "Omite acest pas"),
                t("h15afbce", "Urmează pașii de configurare"),
                t("ibe6be32", "Personalizează experiența ta X Pro: alege lățimea coloanei, culoarea, mărimea textului și a conținutului media care sunt potrivite în cazul tău."),
                t("e28eb008", "Deschide setările de afișare"),
                t("dc8b86e0", "Să adăugăm coloanele tale"),
                t("ee28603e", "Importă coloanele tale"),
                t("dad15d22", "Economisește timp importând coloanele tale existente pentru Căutare, Listă și Profil. Nu vei putea copia aceste coloane mai târziu."),
                t("j85b4522", "Sau începe de la zero"),
                t("hfd5ca12", "Hmm... nu am putut importa coloanele tale"),
                t("b855852a", "Doar coloanele Căutare, Listă și Profil pot fi importate. Adaugă în schimb o coloană Acasă."),
                t("dc6c806e", "Coloanele tale nu au putut fi importate"),
                t("a0dfe2f6", "X Pro este o modalitate convenabilă de a vizualiza mai multe coloane din cronologie într-o singură interfață simplă."),
                t("i8912d28", "Să adăugăm câteva coloane..."),
                t("ce0c0f34", "Să aruncăm o privire"),
                t("h36d2aa2", "Află câteva recomandări utile pentru a începe."),
                t("fbaf9442", "Adaugă un Set de început"),
                t("b354ea52", "Se adaugă un Set de început..."),
                t("if195eb8", "Adăugare coloane..."),
                t("ea07517c", "Coloană ștearsă."),
                t("habced9e", "pentru a restaura coloana."),
                t("g4fcb4f8", "Coloană restaurată."),
                t("d4429cba", "Hm... acest Set nu există. Încearcă să selectezi altul."),
                t("g2c6e34a", "Gestionează dimensiunea conținutului, culoarea și fundalul."),
                t("bf2890a6", "Scală vizuală"),
                t("h098a550", "Lățime implicită a coloanei"),
                t("ab248726", "Previzualizare conținut media implicit"),
                t("jdaf161c", "Fila cu mesaje"),
                t("ge0fcfd0", "Carduri de cont"),
                t("e1cab6e8", "Vrei să aplici modificările la coloanele existente?"),
                t("ce2e487c", "Dacă modifici toate coloanele, fiecare coloană din toate seturile tale va fi actualizată. Dacă alegi Nu, noile setări se vor aplica doar coloanelor pe care urmează să le creezi."),
                t("fdbd90a6", "Da, modifică toate coloanele"),
                t("h8affe68", "Nu, doar coloanele noi"),
                t("f06885b6", "Opțiuni pentru dimensiunea conținutului media din coloană"),
                t("e4bab2d0", "Opțiuni pentru lățimea coloanei"),
                t("f0e71094", "Afișează fila cu mesaje"),
                t("aa25a5a6", "Filă cu mesaje care se poate restrânge, disponibilă în partea de jos a ecranului"),
                t("g3da3c90", "Afișare Carduri de cont"),
                t("b08a8656", "Afișare Carduri de cont la trecerea cu cursorul peste elemente interactive"),
                t("g9df1984", "Adaugă un set"),
                t("df77af70", "Alege un emoticon pentru set"),
                t("ee7765ba", "Alege un emoticon"),
                t("e0127c83", function (e) {
                    return "Schimbă emoticonul " + e.emoji;
                }),
                t("hb8b6254", "Oricine poate accesa Setul tău public din profilul tău. De asemenea, poți distribui linkuri către Set. Dacă te răzgândești, îl poți face oricând din nou privat. Află mai multe"),
                t("gfbaf4e8", "Acest Set nu poate fi făcut public acum"),
                t("ae04848a", "Acest Set conține Coloane care sunt asociate cu contul tău X. Pentru a face acest Set public, va trebui să le îndepărtezi. Află mai multe"),
                t("d606207a", "Șterge setul"),
                t("h95cb00e", "Acest set va fi șters definitiv. Acțiunea nu se poate anula."),
                t("f50c9834", "Acest set va fi șters definitiv. Dacă îl ștergi, nu îl vei putea regăsi ulterior."),
                t("cb861826", "Reordonează setul"),
                t("i5896b2b", function (e) {
                    return "Editează setul „" + e.title + "”";
                }),
                t("ef602cab", function (e) {
                    return "Șterge setul „" + e.title + "”";
                }),
                t("b44b9d83", function (e) {
                    return "Anulează fixarea setului „" + e.title + "”";
                }),
                t("je4a847f", function (e) {
                    return "Fixează setul „" + e.title + "”";
                }),
                t("ad41be88", "Mută coloana la Set"),
                t("cb82860a", "Coloana nu a fost găsită"),
                t("icbecd02", "Adaugă Coloană"),
                t("fdf1a2c6", "Adaugă Set"),
                t("d25acc28", "Ce conține?"),
                t("fe5df266", "Vrei să faci Coloana privată?"),
                t("i3206148", "Trecerea unei Coloane publice în sfera privată va face ca urmăritorii să piardă în mod ireversibil accesul la Coloană."),
                t("c65d210c", "Fă Coloana privată"),
                t("j4d54f1e", "Un instrument puternic, în timp real, pentru persoane care fac bani pe X."),
                t("je0526a0", "Monitorizează cronologii multiple pe un singur ecran. Urmărește și organizează conținut și interacționează cu comunitățile tale în timp real."),
                t("d128af54", "Înregistrează-te la X Premium"),
                t("bacd7195", function (e) {
                    return e.fullName + " (@" + e.screenName + ") pe X";
                }),
                t("e5b4aafa", "Conexiunea ta la internet a fost întreruptă."),
                t("g43c3b36", "Reconectează-te la internet pentru a continua."),
                t("hafe83ec", "Apasă Închidere pentru a ieși din aplicație."),
                t("b2ec74fe", "închide"),
                t("hf836e5f", function (e) {
                    return e.tweetText + " " + e.username + " " + e.screenName + " " + e.views + " vizualizări " + e.timeAgo;
                }),
                t("a7a90902", "Apasă Select pentru a afișa"),
                t("cb0a3b5e", "Este posibil ca această postare să includă conținut media sensibil. Sigur vrei să o afișezi?"),
                t("a4eb1304", "Te poți reconecta oricând."),
                t("b86c2e12", "Conectează-te pentru a căuta în întreg conținutul X."),
                t("ia13bd7c", "tastatură"),
                t("f9fa40c8", "Bucură-te de ce-i mai bun pe X"),
                t("gb6a7f62", "Codul a expirat. Dacă vrei să încerci din nou, selectează butonul de mai jos pentru a primi un nou cod."),
                t("ge19602a", "Primește un nou cod"),
                t("dd4ec2e8", "Conectează-te la X accesând URL-ul de mai jos, pe laptop sau pe dispozitivul tău mobil, și introducând codul afișat aici."),
                t("f4d7084c", "Conectează-te la X cu una din aceste opțiuni:"),
                t("ebc1accc", "Scanează codul QR"),
                t("a4742bc0", "Accesează URL-ul de mai jos, pe laptop sau pe dispozitivul tău mobil, și introdu codul afișat aici."),
                t("f260dea2", "x.com/tvlogin"),
                t("h797e380", function (e) {
                    return "" + e.url;
                }),
                t("cf8eec84", function (e) {
                    return "" + e.url;
                }),
                t("g7ee7019", function (e) {
                    return "Conectează-te pentru a viziona videoclipuri de la " + e.name;
                }),
                t("fb83778c", "Conectează-te pentru a viziona videoclipuri de la acest utilizator."),
                t("dd4bbaea", "Nu ai videoclipuri de afișat."),
                t("i71d6193", function (e) {
                    return "Nu există videoclipuri de afișat de la " + e.name + ".";
                }),
                t("adb512f0", "Videoclipuri recente"),
                t("bef78294", function (e) {
                    return "" + e.formattedCount;
                }),
                t("hda3bb87", function (e) {
                    return "Urmări" + r(e.count, "ți", "t", "ți");
                }),
                t("cd3f5206", "Urmează:"),
                t("c930299f", function (e) {
                    return "Urmează în " + e.count + ":";
                }),
                t("b2e9f19c", "Redă din nou ultimul videoclip"),
                t("de906774", "Viteză"),
                t("caca839e", "Subtitrări"),
                t("b049f56c", "Calitate"),
                t("fa7169d8", "Pentru a raporta acest conținut, accesează URL-ul de mai jos pe laptop sau pe dispozitivul tău mobil"),
                t("c973ec9c", "Nume de utilizator cont"),
                t("e9670a81", function (e) {
                    return "@" + e.screenName;
                }),
                t("d0e1b720", "URL conținut"),
                t("a4ee9394", "Alb"),
                t("a9f3474c", "Cyan"),
                t("i50b6538", "Purpuriu"),
                t("jffeb664", "Roșu"),
                t("e375c2d0", "Negru"),
                t("c2c5dea4", "Culoare font"),
                t("ce71b3d0", "Familie de fonturi"),
                t("d2eb1582", "Prestabilit (Sans-serif)"),
                t("e684030e", "Arial (Sans-serif)"),
                t("jad3900c", "Times New Roman (Serif)"),
                t("e205f3a0", "Monospace (Sans-serif)"),
                t("d207d39a", "Opacitate text"),
                t("a562039c", "Culoare de fundal"),
                t("h44e879e", "Opacitate fundal"),
                t("b843ced4", "Automat"),
                t("e30d2cea", "0,5x"),
                t("d030db62", "1,25x"),
                t("ga63a594", "1,5x"),
                t("f571bc5a", "1,75x"),
                t("d0284204", "2x"),
                t("b7d7f606", "Derulare înainte"),
                t("ee0f61ca", "Derulare înapoi"),
                t("i2d14148", "Anulează aprecierea"),
                t("a1eb471a", "Elimină neaprecierea"),
                t("e40051e8", "Elimină marcajul"),
                t("g9ecf0e8", "Vezi răspunsurile"),
                t("aa97ae7e", "Comenzi pentru playerul TV"),
                t("ed170a6a", "Glisor"),
                t("ee838ea0", "Urmărirea acestui subiect te va ajuta să personalizezi cronologia paginii principale și experiența ta pe X"),
                t("h85446ce", "Acest browser nu mai este acceptat."),
                t("e24d1fa6", "Pentru a folosi x.com în continuare, treci la un browser acceptat. În Centrul de ajutor vei găsi o listă cu browserele acceptate."),
                t("a138aeb2", "JavaScript nu este disponibil."),
                t("d8e122c2", "Am detectat că JavaScript este dezactivat în acest browser. Pentru a folosi x.com în continuare, activează JavaScript sau treci la un browser acceptat. În Centrul de ajutor vei găsi o listă cu browserele acceptate."),
                t("f1a9e3a2", "Obține știri de ultimă oră, precum și știri despre politică, muzică în vogă, evenimente ale lumii, scoruri din sport și cele mai recente știri internaționale, pe măsură ce apar – totul cu mai puține date."),
                t("bb402b62", "X Pro este un tablou de bord care poate fi personalizat pentru a rămâne la curent cu ce întâmplă în prezent."),
                t("ed617674", "360"),
                t("e23b20a0", "Anulează"),
                t("a620fcf0", "Se încarcă imaginea"),
                t("e9e2064c", "Ceva nu a mers bine, dar nu te îngrijora – nu este vina ta."),
                t("d7060c80", "Reîmprospătează"),
                t("a0493514", "Reîncearcă"),
                t("ff3dd27c", "Implicit"),
                t("b554fcf4", "Deschis"),
                t("j590b148", "Deschis mediu"),
                t("e7d4ee86", "Medie"),
                t("ia423ebc", "Închis mediu"),
                t("a2cf0942", "Închis"),
                t("j824dc06", "Caută emoji"),
                t("fffb3384", "Niciun emoticon găsit"),
                t("j3d20752", "În schimb, încearcă să cauți altceva."),
                t("d67ad796", "Alege culoarea implicită a tenului"),
                t("e6388bfa", "Golește tot"),
                t("j7c67eca", "Recente"),
                t("da539d38", "Rezultatele căutării"),
                t("d95eb228", "Înapoi"),
                t("af8fa2ae", "Închide"),
                t("ef8b2f54", "Citește diagrama"),
                t("d567ceda", "verticală"),
                t("f7b30768", "suprapus"),
                t("hcd54328", "grupat"),
                t("affbaf62", "Mai multe informații"),
                t("c388d026", "OK"),
                t("ha20397c", "Funcții de accesibilitate"),
                t("baf7a43c", "Accesibilitate"),
                t("e8f674ab", function (e) {
                    return "Aceasta este o diagramă " + e.chartType + ". Titlul diagramei este " + e.chartTitle + ". În total, există " + e.noOfCategories + " (de) categorii. Valoarea minimă este " + e.minValue + ", iar valoarea maximă este " + e.maxValue + ". Explorează diagrama folosind comenzile de navigare.";
                }),
                t("d969327c", "Redă versiunea audio"),
                t("d8cbbcd4", "Redă diagrama audio. Apasă pentru a reda versiunea audio a diagramei sau apasă pe tasta „A” pe fiecare punct de date pentru versiunea audio a acestora"),
                t("dec1d7ef", function (e) {
                    return e.label + ", " + e.group + ", " + e.value;
                }),
                t("f765bead", function (e) {
                    return "date neetichetate, " + e.group + ", " + e.value;
                }),
                t("idea1817", function (e) {
                    return e.label + ", " + e.value;
                }),
                t("fe94be6b", function (e) {
                    return "date neetichetate, " + e.value;
                }),
                t("b15c0a18", "Renunți la editările făcute?"),
                t("aebf81c8", "Modificările pe care le-ai făcut nu vor fi salvate."),
                t("aa744c1e", "Continuă să editezi"),
                t("fe04d89a", "Îndepărtează"),
                t("bb5d8cd2", "Da"),
                t("dc33d78a", "Imaginea de copertă a articolului"),
                t("j190bf1a", "ÎN DIRECT"),
                t("e3fcbdba", "Renunță"),
                t("jc0b3a8c", "Descriere imagine"),
                t("ia1d2e58", "Apreciat de autor"),
                t("h81f3036", "Articol"),
                t("bed2945c", "citește descrierea imaginii"),
                t("j2eea17a", "Următorul conținut media include material potențial sensibil."),
                t("b05a39b2", "Vezi"),
                t("a7cd5cf4", "Videoclip"),
                t("b6eb8f6a", "Transmisiune"),
                t("dcc2b9b3", function (e) {
                    return "Redă " + e.locVideoType;
                }),
                t("hf4ffd4d", function (e) {
                    return "Redă în direct " + e.locVideoType;
                }),
                t("f6e90cd7", function (e) {
                    return "Durata: " + e.hoursWord + " " + e.minutesWord + " " + e.secondsWord;
                }),
                t("e7d191ed", function (e) {
                    return "Începe la " + e.hoursWord + " " + e.minutesWord + " " + e.secondsWord;
                }),
                t("daa73df1", function (e) {
                    return e.viewerCount + " vizualiz" + r(e.viewerCount, "ări", "are", "ări");
                }),
                t("b4f19b97", function (e) {
                    return e.listItem1 + " și " + e.listItem2;
                }),
                t("i0135403", function (e) {
                    return e.listItem1 + ", " + e.listItem2;
                }),
                t("f1574a4b", function (e) {
                    return e.listItem1 + " și " + e.listItem2;
                }),
                t("ec72e2f8", "Urmărește"),
                t("d9d2a865", function (e) {
                    return "Redă" + e.ttc_card_cta_play;
                }),
                t("a8422cd5", function (e) {
                    return "Cumpără" + e.ttc_card_cta_shop;
                }),
                t("ff1b8c17", function (e) {
                    return "Cumpără acum" + e.ttc_card_cta_shop_now;
                }),
                t("d04488ef", function (e) {
                    return "Rezervă" + e.ttc_card_cta_book;
                }),
                t("b0b0cfb7", function (e) {
                    return "Conectează-te" + e.ttc_card_cta_connect;
                }),
                t("ea5247d5", function (e) {
                    return "Comandă" + e.ttc_card_cta_order;
                }),
                t("b7b58677", function (e) {
                    return "Deschide" + e.ttc_card_cta_open;
                }),
                t("g15f6870", "Află mai multe"),
                t("d1ff55d8", "Instalează"),
                t("g40f106c", "Trimite-ne un mesaj"),
                t("j393e386", "Trimite-ne un mesaj privat"),
                t("a771d32e", "Trimite-mi un mesaj privat"),
                t("d8e9c24c", "Trimite un mesaj privat"),
                t("h2f9258f", function (e) {
                    return e.appStarRating + "/5.0 stele – " + e.appNumRatings + " evaluări";
                }),
                t("cc5508a9", function (e) {
                    return "Începe pe " + e.timestampUTC;
                }),
                t("f4520a5d", function (e) {
                    return "Postează " + e.action;
                }),
                t("f17dfdb6", "Redă"),
                t("j836de8a", "Cont protejat"),
                t("f4b8dc08", "Cont abonat"),
                t("f936caa6", "Cont de traducător"),
                t("ac72ee4e", "Cont verificat"),
                t("f49e0aac", "Oferă detalii despre conturile verificate."),
                t("f59bdb94", "Oferă detalii despre conturile protejate."),
                t("d7e50a66", "Află mai multe"),
                t("fc065ee4", "Află mai multe despre Abonamente"),
                t("e453f536", "Ce este Abonamente"),
                t("bd4cb7a0", "Atunci când te abonezi la creatorii tăi preferați, beneficiezi de conținut bonus, iar ei câștigă niște bani."),
                t("g7099a02", "Spune-mi mai multe"),
                t("c2637ef6", "Am înțeles"),
                t("efb17190", "Te urmărește"),
                t("g57b5f6c", "Abonatul tău"),
                t("a77a27c0", "Abonat la"),
                t("gdd173da", "Răspuns de la Grok în modul distractiv"),
                t("dfd6eeac", "Răspuns de la Grok"),
                t("deceb214", "Imagine generată de Grok"),
                t("befddd48", "Afișează"),
                t("hf3f8e3a", "Arată mai multe"),
                t("h504ea5e", "Creează o versiune proprie cu Grok"),
                t("eb722de2", "Întreabă-l pe Grok"),
                t("bb5c5864", "Citat"),
                t("a8b58cf4", "Afișează acest fir"),
                t("i5f742fe", "Afișează acest sondaj"),
                t("fc45ccc6", "Videoclip încorporat"),
                t("a9edea48", "Reîncarcă"),
                t("d26d8730", "Copiază adresa videoclipului"),
                t("f1b6bcec", "Copiază adresa fișierului GIF"),
                t("j25d7cca", "Ascunde subtitrările"),
                t("a858b25c", "Afișează subtitrările"),
                t("faf9f484", "Reclamă"),
                t("ae2ea9e7", function (e) {
                    return "Reclamă de la " + e.advertiserName;
                }),
                t("hea01798", "Glisor de căutare"),
                t("f8a09386", "Vizualizează în Periscope"),
                t("gf2b6eee", "Imagine în imagine"),
                t("b3160a69", function (e) {
                    return e.volumePercent + "%";
                }),
                t("fb236728", "Pauză"),
                t("e9bd453e", "Reluare"),
                t("d46b00b0", "Treci la vizionarea în direct"),
                t("ec8ab8b4", "Ignoră"),
                t("b8b6344a", "Nu mai ignora"),
                t("c9a642fa", "Glisor de volum"),
                t("c27e60b0", "Ecran complet"),
                t("d2969f10", "Ieși din ecranul complet"),
                t("f06f2e53", function (e) {
                    return e.currentTime + " din " + e.durationTime;
                }),
                t("eeb64451", function (e) {
                    return "Urmărește " + e.advertiserName;
                }),
                t("f3c268a5", function (e) {
                    return "Cumpără de la " + e.advertiserName;
                }),
                t("g60001bb", function (e) {
                    return "Vezi " + e.advertiserName;
                }),
                t("dff1ddd9", function (e) {
                    return "Accesează " + e.advertiserName;
                });
            t("b0b22805", function (e) {
                return "Vizitează " + e.advertiserName;
            }),
                t("c67e71aa", "Urmărește acum"),
                t("a6ada13e", "Cumpără acum"),
                t("j0f12222", "Vezi mai multe"),
                t("f569f7c8", "Accesează site-ul"),
                t("j0c6772a", "Vizitează site-ul"),
                t("f73003aa", "Videoclipul se va reda după reclamă"),
                t("b3112b8a", "Omite"),
                t("h6333ad0", "Omite reclama"),
                t("c59da417", function (e) {
                    return "Omite reclama în " + e.seconds;
                }),
                t("c3c147cf", function (e) {
                    return "Omite " + e.seconds;
                }),
                t("h9b3104e", "Setări video"),
                t("ha3efce4", "Automat"),
                t("hd8d044d", function (e) {
                    return "Automat (" + e.quality + ")";
                }),
                t("a7bf9962", "Descarcă videoclipul"),
                t("ccc97152", "Viteză de redare"),
                t("h531ade0", "Calitatea video"),
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
                t("c4d66d2e", "Primești o calitate sub nivelul optim din cauza browserului selectat. Îți recomandăm să folosești un browser care acceptă HEVC."),
                t("a681babd", function (e) {
                    return "Urmărește acum la " + e.trimmedHostname;
                }),
                t("db3cd325", function (e) {
                    return "Vizitează " + e.trimmedHostname;
                }),
                t("f1ad0df1", function (e) {
                    return "Reclamă · " + e.timeRemaining;
                }),
                t("ef16ab2b", function (e) {
                    return "Reclamă de la " + e.advertiserName + " · " + e.timeRemaining;
                }),
                t("a15adf2c", "acest formular"),
                t("c1658fc6", "Conținutul media nu a putut fi redat."),
                t("h519ae04", "Conținutul media a fost dezactivat din cauza unei revendicări a drepturilor de autor."),
                t("ce871584", "Transmisiunea s-a încheiat."),
                t("c101eb96", "Această transmisiune nu este disponibilă."),
                t("gb24a514", "Acest conținut media a fost dezactivat ca răspuns la o reclamație primită de la deținătorul drepturilor de autor."),
                t("hcaf3e63", function (e) {
                    return "Acest conținut media a fost dezactivat, din cauza unei revendicări a drepturilor de autor de la " + e.holder + ".";
                }),
                t("if05c038", "Această transmisiune nu este disponibilă în locația ta."),
                t("d420171b", function (e) {
                    return "Videoclipul nu este disponibil, din cauza unei revendicări de drept de autor de la " + e.holder;
                }),
                t("b1eb72fa", "Ne pare rău, acest videoclip este restricționat în anumite zone; așteaptă câteva secunde în timp ce îți obținem locația. Asigură-te că ai activat setările de locație în browser."),
                t("c057680c", "Nu putem reda videoclipul în acest browser. Încearcă un alt browser web."),
                t("i5dfae6e", "Acest videoclip nu este disponibil în locația ta."),
                t("c2388276", "Acest videoclip a fost șters."),
                t("d2c96140", "Indicator audio pentru invitați"),
                t("f6dc9146", "REDĂ DIN NOU"),
                t("d30c74fe", "Volum"),
                t("f2d4e6f2", "Urmărește din nou"),
                t("e9f1af3a", "Află mai multe"),
                t("f1881d86", "Această postare nu poate primi răspunsuri și nu poate fi distribuită sau apreciată."),
                t("j3d37222", "X este obligat prin lege să furnizeze această notificare."),
                t("e461d0ee", "Vezi noutățile"),
                t("d1386940", "Rămâi informat"),
                t("ecda5f9e", "Înșelător"),
                t("a423473c", "Notificare impusă prin lege"),
                t("b3296688", "Vizibilitate limitată"),
                t("ccd32094", "Acum"),
                t("abfcce0d", function (e) {
                    return "Cu " + e.amountOfTime + " în urmă";
                }),
                t("ae408b76", "Ai repostat"),
                t("j355f008", "Postare fixată"),
                t("habf9678", "Fixat de Autor"),
                t("db0798ed", function (e) {
                    return "Subiect – " + e.topicName;
                }),
                t("dc716ec9", function (e) {
                    return "Subiect recomandat: " + e.topicName;
                }),
                t("fbc2003c", "Încheiat"),
                t("h5051dd8", "Anulat"),
                t("bb5f91a3", function (e) {
                    return e.count + " în acest Spațiu";
                }),
                t("c83eea99", function (e) {
                    return e.participant + " + " + e.count + " " + r(e.count, "(de) ascultători", "ascultător", "(de) ascultători");
                }),
                t("cdff6cd3", function (e) {
                    return e.speaker + " vorbește + " + e.count + " " + r(e.count, "(de) ascultători", "ascultător", "(de) ascultători");
                }),
                t("df006f4f", function (e) {
                    return e.count + " interesa" + r(e.count, "ți", "t", "ți");
                }),
                t("c889af33", function (e) {
                    return e.count + " s-a" + r(e.count, "u", "", "u") + " alăturat";
                }),
                t("d6f2056f", function (e) {
                    return e.count + " a" + r(e.count, "u", "", "u") + " urmărit";
                }),
                t("jbc5f47a", "Setul Spații"),
                t("gfe2830f", function (e) {
                    return "încă " + e.count;
                }),
                t("dbeae6cf", function (e) {
                    return e.count + " al" + r(e.count, "ți ascultători", "t ascultător", "ți ascultători");
                }),
                t("d2543d97", function (e) {
                    return "+" + e.count;
                }),
                t("dc718e53", function (e) {
                    return "+încă " + e.count;
                }),
                t("d0e7b11b", function (e) {
                    return e.date + ", la " + e.time;
                }),
                t("b4349cbc", function (e) {
                    return "" + e.relativeDay;
                }),
                t("ebe41367", function (e) {
                    return "Ora " + e.time;
                }),
                t("efce3d9b", function (e) {
                    return e.hours + " " + e.minutes + " " + e.seconds;
                }),
                t("d925a4f9", function (e) {
                    return e.formattedCount + " " + r(e.count, "minute rămase", "minut rămas", "de minute rămase");
                }),
                t("ib15cddb", function (e) {
                    return e.formattedCount + " " + r(e.count, "ore rămase", "oră rămasă", "de ore rămase");
                }),
                t("db9ed19f", function (e) {
                    return e.formattedCount + " " + r(e.count, "zile rămase", "zi rămasă", "de zile rămase");
                }),
                t("e1ebcecb", function (e) {
                    return e.formattedDays + " " + r(e.days, "zile", "zi", "de zile") + " " + e.formattedHours + " " + r(e.hours, "ore rămase", "oră rămasă", "de ore rămase");
                }),
                t("cc1da1fd", function (e) {
                    return e.formattedHours + " " + r(e.hours, "ore", "oră", "de ore") + " " + e.formattedMins + " " + r(e.mins, "minute rămase", "minut rămas", "de minute rămase");
                }),
                t("f89a5d60", "Gazdă"),
                t("ce2cfb36", "Doar Abonați"),
                t("df06241c", "Comunitate"),
                t("b03e162a", "Ascultă în direct"),
                t("b3d828ee", "Te-ai alăturat"),
                t("g519ec2a", "Redare înregistrare"),
                t("c6000450", "Memento setat"),
                t("db44ff5c", "Setează memento"),
                t("f7b6346a", "Începe acum"),
                t("cc1f75ac", "Spații"),
                t("bd08d1b2", "Detalii indisponibile"),
                t("j8b01b27", function (e) {
                    return "Spațiul " + e.title + " găzduit de " + e.host + " a fost anulat";
                }),
                t("fda9f48c", "Spațiul a fost anulat"),
                t("jf7853f7", function (e) {
                    return "Spațiul " + e.title + " găzduit de" + e.host + " s-a încheiat";
                }),
                t("i1a29920", "Spațiul s-a încheiat"),
                t("db467ffe", "Alătură-te unui Spațiu"),
                t("i8dc3993", function (e) {
                    return "Găzduit de " + e.host;
                }),
                t("eb0b05b9", function (e) {
                    return "încă " + e.count + " " + r(e.count, "(de) utilizatori", "utilizator", "(de) utilizatori");
                }),
                t("d19b9f77", function (e) {
                    return e.action + " pentru " + e.title + " găzduit de " + e.host + ", " + e.scheduledStart;
                }),
                t("e679d5d7", function (e) {
                    return "Începe acum " + e.title + " planificat pentru " + e.scheduledStart;
                }),
                t("ea4258b7", function (e) {
                    return e.action + " pentru un spațiu, " + e.scheduledStart;
                }),
                t("dcbcaa23", function (e) {
                    return "Redare înregistrarea de la " + e.title;
                }),
                t("gaeb997e", "Mai multe"),
                t("f8b21226", "Alătură-te"),
                t("e1b95ab0", "Editat ultima dată"),
                t("i308d42c", "Există o versiune nouă a acestei postări"),
                t("h092d520", "Există o versiune nouă a acestei postări."),
                t("b74bf8b8", "Imagine"),
                t("ha9ed08c", "Creat cu"),
                t("bff61470", "Fă clic aici pentru a edita"),
                t("f4393d0f", function (e) {
                    return "Atribuită lui " + e.name;
                }),
                t("f8e8e32e", "Ai"),
                t("df6703d3", "Tu"),
                t("c20f7e9f", function (e) {
                    return r(e.otherUsersCount, "încă " + e.otherUsersCount, o.createElement(o.Fragment, null, "", e.secondName), "încă " + e.otherUsersCount);
                }),
                t("he26f627", function (e) {
                    return r(e.otherUsersCount, "încă " + e.otherUsersCount, o.createElement(o.Fragment, null, "", e.secondName), "încă " + e.otherUsersCount);
                }),
                t("gea7aa3c", "Înainte"),
                t("b6462b32", "Anteriorul"),
                t("caddb529", "and"),
                t("ff31714c", function (e) {
                    return " și încă " + r(e.othersCount, "" + e.othersCount, "1", "" + e.othersCount);
                }),
                t("e06c99b7", "și"),
                t("i4e2f96c", function (e) {
                    return " și încă " + r(e.othersCount, "" + e.othersCount, "1", "" + e.othersCount);
                }),
                t("ga629a8c", "Vezi persoanele din conversație"),
                t("d6f781e4", "Când te abonezi la creatorii tăi preferați de pe X, beneficiezi de conținut bonus, iar ei câștigă niște bani."),
                t("dab106f8", "Membru al"),
                t("a46e92c2", "Mod."),
                t("f9633e62", "Admin"),
                t("a3dfd0cb", function (e) {
                    return "postare" + e.noun;
                }),
                t("d7580651", function (e) {
                    return "Postare" + e.noun;
                }),
                t("c68b6367", function (e) {
                    return "Articol" + e.noun;
                }),
                t("h13ffc88", "Voce"),
                t("c8c4600e", "Postare vocală"),
                t("de8c5eb2", "Redă conținutul audio"),
                t("ec286028", "Pune în pauză conținutul audio"),
                t("ad77feb6", "Subtitrări indisponibile"),
                t("e82adfeb", function (e) {
                    return e.count + " pagin" + r(e.count, "i", "ă", "i") + " web";
                }),
                t("cfb8c1f7", function (e) {
                    return e.count + " post" + r(e.count, "ări", "are", "ări");
                }),
                t("g78032d5", function (e) {
                    return e.count + " pagini web și postări";
                }),
                t("j3de54a8", "NOTĂ"),
                t("a6a6ced4", "Citește Nota"),
                t("dbc0c2f4", "Marcaj"),
                t("d6885d3e", "Vizualizează Comunitatea"),
                t("d5a48014", "Titlu"),
                t("b92b6156", "Subtitlu"),
                t("ec5ed598", "Corp de text"),
                t("c69eb656", "Normă întreagă"),
                t("g46ae43c", "Contracte cu normă întreagă"),
                t("jf7d4cc6", "Jumătate de normă"),
                t("b2214572", "Contractanți independenți"),
                t("f8337bd6", "pe an"),
                t("i935bf88", "pe oră"),
                t("b75b8ffd", function (e) {
                    return e.salary + " " + e.interval;
                }),
                t("c5954d30", "Listă"),
                t("fe64170c", "Când faci o selecție, ea nu poate fi modificată"),
                t("g10ace38", "Opțiuni sondaj"),
                t("a3edf99a", "Rezultatele finale"),
                t("c2b81e9d", function (e) {
                    return e.formattedCount + " " + r(e.count, "voturi", "vot", "de voturi");
                }),
                t("e86732e4", "Selectat"),
                t("a35a5b10", "Urmăritori pe care îi cunoști"),
                t("fc8cd112", "Nu este urmărit de nicio persoană pe care o urmărești"),
                t("df8cd2af", function (e) {
                    return "Diapozitivul " + e.currentSlide + " din " + e.itemCount + " – carusel. " + e.type + ". " + e.altText;
                }),
                t("d70740da", "Diapozitivul următor"),
                t("c4d53ba2", "Diapozitivul anterior"),
                t("h6405c17", function (e) {
                    return "Diapozitivul " + e.currentSlide + " din " + e.itemCount + " – carusel";
                }),
                t("a3efd2c4", "Subiect"),
                t("b91c8e53", function (e) {
                    return "Fișă de subiect pentru " + e.title + ".";
                }),
                t("b3826295", function (e) {
                    return "Fișă de subiect pentru " + e.title + ", " + e.description + ".";
                }),
                t("c9bb65db", function (e) {
                    return "Colecție de " + e.slidesLength + " imagini. " + e.heroVanityContent + ". " + e.heroTitleContent;
                }),
                t("e1bddf52", "Trage pentru a roti"),
                t("f0e1fb48", "Nu s-a putut genera o previzualizare pentru acest format video, în acest browser. Totuși, videoclipul poate fi încărcat"),
                t("c2fc878d", function (e) {
                    return "Ai depășit limita de caractere cu " + e.count;
                }),
                t("db11b27f", function (e) {
                    return e.count + " " + r(e.count, "caractere", "caracter", "de caractere") + " rămase";
                }),
                t("bb7b821a", "Poți răspunde"),
                t("fc41217b", function (e) {
                    return "Conturile care urmăresc pe sau care sunt menționate de @" + e.screenName + " pot răspunde";
                }),
                t("e5dc76d0", "Poți răspunde la această conversație"),
                t("ab105904", "Cine poate răspunde?"),
                t("fd1cda7a", "Nu poți răspunde la această conversație"),
                t("f064f477", function (e) {
                    return "Conturile urmărite sau menționate de @" + e.screenName + " pot răspunde";
                }),
                t("ea9ac5c9", function (e) {
                    return "Conturile menționate de @" + e.screenName + " pot răspunde";
                }),
                t("d2ae1499", function (e) {
                    return "Conturile abonate la sau menționate de @" + e.screenName + " pot răspunde";
                }),
                t("a4e254ff", function (e) {
                    return "Conturile verificate sau conturile menționate de @" + e.screenName + " pot răspunde";
                }),
                t("j1b02fd8", "Devino utilizator verificat"),
                t("daba4484", "Doar autorul și moderatorii pot vedea această postare"),
                t("f956070a", "A fost ascuns de moderatori pentru că a încălcat regulile Comunității."),
                t("cc17f408", "Atunci când membrii sunt eliminați, postările lor nu mai pot fi văzute de restul Comunității."),
                t("j620ce06", "Cine poate vedea această postare?"),
                t("bd414b44", "Exclusiv pentru abonații tăi"),
                t("dd0da5d9", function (e) {
                    return "@" + e.screenName + " și abonații săi îți pot vedea postarea";
                }),
                t("g1c6a77e", "Vezi conținutul pentru Abonamente"),
                t("d3b143d7", function (e) {
                    return "Poți vedea acest Tweet și răspunde la el deoarece te-ai abonat la @" + e.screenName;
                }),
                t("f6337117", function (e) {
                    return "Poți vedea această postare deoarece ești abonat la @" + e.screenName;
                }),
                t("g766a06d", function (e) {
                    return "Numai persoanele din Cercul utilizatorului @" + e.screenName + " pot vedea această postare";
                }),
                t("j040a368", "Linkuri dezactivate în răspunsuri"),
                t("b31d0af7", function (e) {
                    return e.screenName + " nu acceptă linkuri în răspunsurile la această postare";
                }),
                t("eab0f780", "Nu poți posta sau cita linkuri externe în răspunsurile la această postare."),
                t("f17a1f54", "Exclusiv Premium"),
                t("a0953370", "Abonament"),
                t("d9687d23", function (e) {
                    return "S-a redus cu " + e.trendValueNegativePercent;
                }),
                t("ac73eb5a", "Nicio modificare"),
                t("c5a9f921", function (e) {
                    return "S-a mărit cu " + e.trendValuePositivePercent;
                }),
                t("e3098e07", function (e) {
                    return "acum " + e.minutes + " " + r(e.minutes, "minute", "minut", "de minute");
                }),
                t("fea16a51", function (e) {
                    return "acum " + e.hours + " " + r(e.hours, "(de) ore", "oră", "de ore");
                }),
                t("a4f2d94d", function (e) {
                    return "acum " + e.days + " " + r(e.days, "(de) zile", "zi", "(de) zile");
                }),
                t("hf9bc787", function (e) {
                    return "acum " + e.weeks + " săptămân" + r(e.weeks, "i", "ă", "i");
                }),
                t("efcd5885", function (e) {
                    return "acum " + e.months + " lun" + r(e.months, "i", "ă", "i");
                }),
                t("c37228b5", function (e) {
                    return "acum " + e.years + " an" + r(e.years, "i", "", "i");
                }),
                t("jf83d092", "Zi"),
                t("af4abf20", "Lună"),
                t("b871f280", "An"),
                t("hac89ab0", "Ianuarie"),
                t("ef30b30a", "Februarie"),
                t("b56920fa", "Martie"),
                t("b1a0f1ec", "Aprilie"),
                t("daf779c8", "Mai"),
                t("c6ad074e", "Iunie"),
                t("f1db106c", "Iulie"),
                t("i4e80b7a", "August"),
                t("efa6cc1e", "Septembrie"),
                t("f40a0cbe", "Octombrie"),
                t("ac74a31c", "Noiembrie"),
                t("i6c1e4b2", "Decembrie"),
                t("de540c32", "Arată parola"),
                t("b4abfdb4", "Ascunde parola"),
                t("f06ae5d3", function (e) {
                    return "A rămas un număr de " + e.standardTweetCount + " caracter" + r(e.standardTweetCount, "e", "", "e") + " pentru o postare standard și " + e.totalCount + " caracter" + r(e.totalCount, "e", "", "e") + " în total";
                }),
                t("fee0a8bc", "Salvează"),
                t("ae7f7656", "Golește"),
                t("gd769996", "Ceva nu a mers bine. Încearcă din nou să încarci."),
                t("i5450bec", "Conținut media"),
                t("f7432494", "Adaugă o fotografie"),
                t("a5f7ce12", "Urmărește și tu"),
                t("c3befdbe", "Urmărești"),
                t("d3029dbc", "Oprește urmărirea"),
                t("aeb6f0a0", "Abonează-te"),
                t("b4397192", "Gestionează"),
                t("i8cfb6e6", "Blocat"),
                t("ea100d6a", "Deblochează"),
                t("fe40537f", function (e) {
                    return "Deblochezi utilizatorul @" + e.screenName + "?";
                }),
                t("ab7c3460", "Acest utilizator te va putea urmări și îți va putea vedea postările."),
                t("i58d8718", "Va putea să te urmărească și să interacționeze cu postările tale publice."),
                t("cda66545", function (e) {
                    return "Fă clic pentru " + e.followType + " " + e.screenName;
                }),
                t("ee05e96b", function (e) {
                    return "Fă clic pentru " + e.followType + " la " + e.screenName;
                }),
                t("a8d77a25", function (e) {
                    return "Fă clic pentru a ieși de la " + e.screenName;
                }),
                t("d0f4f3d9", function (e) {
                    return e.followType + " " + e.screenName;
                }),
                t("f238ba1d", function (e) {
                    return e.followType + " la " + e.screenName;
                }),
                t("j6161cab", function (e) {
                    return "Oprești urmărirea pentru utilizatorul @" + e.screenName + "?";
                }),
                t("i4bb9ef7", function (e) {
                    return "Oprești urmărirea subiectului " + e.title + "?";
                }),
                t("ge753264", "Postările sale nu se vor mai afișa în cronologia Pentru tine. Îi poți vedea în continuare profilul dacă postările sale nu sunt protejate."),
                t("b837c0e8", "Chiar dacă oprești urmărirea acestui subiect, poți vedea în continuare postări despre acesta, în funcție de conturile pe care le urmărești."),
                t("ddac1f1d", function (e) {
                    return "Sigur dorești să părăsești " + e.communityName + "?";
                }),
                t("j8e33c40", "Vei pierde accesul la Comunitate și nu vei mai putea participa, dar postările tale anterioare vor rămâne vizibile."),
                t("f305840e", "În așteptare"),
                t("i036327c", "Îndepărtezi solicitarea de urmărire?"),
                t("j95e3097", function (e) {
                    return "Acest lucru va anula solicitarea ta în așteptare și @" + e.screenName + " nu o va mai vedea.";
                }),
                t("d85bc1b8", "Mărește sau micșorează imaginea."),
                t("f596ace8", "Raport de aspect: original"),
                t("df031fca", "Raport de aspect: lat"),
                t("b40332c6", "Raport de aspect: pătrat"),
                t("e547b368", "Original"),
                t("f7571204", "Lată"),
                t("e6e16812", "Pătrat"),
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
                    return "Promovat de " + e.fullName;
                }),
                t("if2bf8b4", "Promovat"),
                t("f3624b5c", "Promovat (politic)"),
                t("b4b3b113", function (e) {
                    return "Promovat (politic) de " + e.fullName;
                }),
                t("be222050", "Promovată (problemă)"),
                t("hcbbe447", function (e) {
                    return "Promovată (problemă) de " + e.fullName;
                }),
                t("jcf3e7a2", "Evoluție cadru pentru animație Lottie"),
                t("a0af935c", "Apreciat"),
                t("b8c465e2", "Repostat"),
                t("c7a989ce", "Marcat"),
                t("b03835c7", function (e) {
                    return e.replyCount + " " + r(e.replyCount, "răspunsuri", "răspuns", "de răspunsuri");
                }),
                t("g4a195e7", function (e) {
                    return e.retweetCount + " repost" + r(e.retweetCount, "ări", "are", "ări");
                }),
                t("e089b42d", function (e) {
                    return e.likeCount + " " + r(e.likeCount, "aprecieri", "apreciere", "de aprecieri");
                }),
                t("e0a8fe39", function (e) {
                    return e.bookmarkCount + " marcaj" + r(e.bookmarkCount, "e", "", "e");
                }),
                t("c58b2ab7", function (e) {
                    return e.viewCount + " " + r(e.viewCount, "vizualizări", "vizualizare", "de vizualizări");
                }),
                t("f2849136", "Analiză"),
                t("f206e970", "Vezi analiza postării"),
                t("c7073f5b", function (e) {
                    return e.count + " vizualiz" + r(e.count, "ări", "are", "ări") + ". Analiza vizualizării postării";
                }),
                t("hf417cf0", "Elimină din Marcaje"),
                t("febd30ed", function (e) {
                    return e.count + " Marcaj" + r(e.count, "e", "", "e") + ". Marcaj";
                }),
                t("a8dc9587", function (e) {
                    return e.count + " Marcaj" + r(e.count, "e", "", "e") + ". Adăugat(e) la Marcaje";
                }),
                t("d636ebc6", "Apreciază"),
                t("eb3a8b0c", "Anulează aprecierea"),
                t("j472ecfc", "Apreciază această postare"),
                t("dac92b0d", function (e) {
                    return e.count + " Aprecier" + r(e.count, "i", "e", "i") + ". Apreciere";
                }),
                t("aa650427", function (e) {
                    return e.count + " Aprecier" + r(e.count, "i", "e", "i") + ". Au apreciat";
                }),
                t("hdf7226a", "Răspunde"),
                t("c9940955", function (e) {
                    return e.count + " Răspuns" + r(e.count, "uri", "", "uri") + ". Răspuns";
                }),
                t("f2919fb8", "Repostează"),
                t("fd1e5446", "Anulează repostarea"),
                t("dfad425d", function (e) {
                    return e.count + " repost" + r(e.count, "ări", "are", "ări") + ". Repostare";
                }),
                t("a386dc55", function (e) {
                    return e.count + " repost" + r(e.count, "ări", "are", "ări") + ". Repostată/repostate";
                }),
                t("f65198c2", "Vezi citatele"),
                t("dc63da16", "Distribuie"),
                t("cee0585c", "Distribuie postarea"),
                t("ceb6841c", "Atunci când membrii sunt eliminați, postările lor nu mai pot fi văzute de restul Comunității."),
                t("cb731cae", "Editează Cercul"),
                t("c33d3a84", "Ce se întâmplă în Cerc rămâne în Cerc"),
                t("c4f10e71", "Află mai multe"),
                t("b09adb0c", "Vezi conversația"),
                t("e4f1e6e4", function (e) {
                    return "" + e.formattedCount;
                }),
                t("daf8a75f", function (e) {
                    return "Urmări" + r(e.count, "ți", "t", "ți");
                }),
                t("ef1f4fc6", function (e) {
                    return "" + e.formattedCount;
                }),
                t("ad9b5988", function (e) {
                    return "Urmăritor" + r(e.count, "i", "", "i");
                }),
                t("a9980948", function (e) {
                    return "" + e.formattedCount;
                }),
                t("ce44a35c", function (e) {
                    return "Abona" + r(e.count, "ți", "t", "ți");
                }),
                t("id949f68", function (e) {
                    return "" + e.formattedCount;
                }),
                t("hb608cfc", function (e) {
                    return "Abonament" + r(e.count, "e", "", "e");
                }),
                t("ef633578", "Cont suspendat"),
                t("a6a3d496", "Inserează un link"),
                t("acce6978", "Editează linkul"),
                t("f5e8f526", "Editează"),
                t("h517e8d8", "Elimină"),
                t("a30ae58e", "Text de afișat"),
                t("da38c958", "URL"),
                t("d5d57678", "Inserează"),
                t("ec822028", "Completează acest câmp"),
                t("ebc5d2cc", "Ceva este incorect la acest URL. Verifică ortografia și formatul."),
                t("h30a19bb", function (e) {
                    return "Aceasta este o diagramă radială. Titlul diagramei este " + e.chartTitle + ". În total, există " + e.noOfCategories + " (de) categorii. Valoarea minimă este " + e.minValue + ", iar valoarea maximă este " + e.maxValue + ". Explorează diagrama folosind comenzile de navigare.";
                }),
                t("h39fbf33", function (e) {
                    return "O diagramă orizontală cu valori de date cuprinse între " + e.minValue + " și " + e.maxValue;
                }),
                t("gdd51574", "Trage pentru a reîmprospăta"),
                t("e557ad8e", "Activ"),
                t("e3a58c28", "Extinde"),
                t("db355331", function (e) {
                    return e.team + " a câștigat";
                }),
                t("a8428d5e", "Urmează"),
                t("a7aad8ba", "În direct"),
                t("e431f1aa", "Scor final"),
                t("a7391708", "Amânat"),
                t("d2dbfa92", "Anulat"),
                t("cd734f66", "Azi"),
                t("c8891d06", "Mâine"),
                t("d2414d31", function (e) {
                    return e.count + " elemente necitite";
                }),
                t("ce4e85ae", "Elemente necitite"),
                t("fb9f6f39", function (e) {
                    return e.count + "+";
                }),
                t("eb124f96", "AM/PM"),
                t("i7a6f114", "Ora"),
                t("ccc99ff2", "Minut"),
                t("g5662c95", function (e) {
                    return "Nivel " + e.conversationTreeDepth + ":";
                }),
                t("b3688156", "Acest utilizator este în prezent într-un Spațiu activ; fă clic pentru a te alătura"),
                t("c0eb8825", function (e) {
                    return "@" + e.screenName + " este în prezent într-un Spațiu activ; fă clic pentru a te alătura";
                }),
                t("d068dc6d", function (e) {
                    return "@" + e.screenName + " este în prezent într-o Transmisiune în direct activă; fă clic pentru a viziona";
                }),
                t("d9fd5570", "Răspunsuri ascunse"),
                t("c566d3a6", "Ascunde"),
                t("a897c4d6", "Se deschide istoricul modificărilor"),
                t("e07a85a2", "Postare indisponibilă"),
                t("ffeb2fc6", "În continuare"),
                t("af2a65d9", function (e) {
                    return e.timestamp + " selectate";
                }),
                t("j3d49e93", function (e) {
                    return e.timestamp + " min.";
                }),
                t("a394f905", function (e) {
                    return e.seconds + " secunde";
                }),
                t("f42c0c80", "Sfârșitul secțiunii alese, folosește tastele săgeată pentru a ajusta selecția"),
                t("i667afe8", "Începutul secțiunii alese, folosește tastele săgeată pentru a ajusta selecția"),
                t("gfaaead8", "Fără titlu"),
                t("cfd13f46", "Platformă voce"),
                t("eba2660a", "Albastru"),
                t("hc196b78", "Culoarea prunei"),
                t("c8bc49d2", "Violet"),
                t("efff09ee", "Verde"),
                t("fcb424ee", "Galben"),
                t("ie2215aa", "Purpuriu"),
                t("f106ce44", "Portocaliu"),
                t("acddd4d4", "Roșu"),
                t("cef9b062", "Azuriu"),
                t("d9daefca", "Gri închis");
            var o = i(202784),
                l = [],
                d = {};
            function s(e) {
                return e;
            }
            var p = (function (e) {
                var a, i, t, n, p;
                function f() {
                    return e.apply(this, arguments) || this;
                }
                return (
                    (i = e),
                    ((a = f).prototype = Object.create(i.prototype)),
                    (a.prototype.constructor = a),
                    u(a, i),
                    (f.prototype.render = function () {
                        return o.createElement.apply(o, this[this.props.$i18n].reduce(this.templateReducer, [o.Fragment, null]));
                    }),
                    (t = f),
                    (n = [
                        {
                            key: "bb85c49d",
                            get: function () {
                                return ["X păstrează întotdeauna o copie a unui Spațiu în scopuri de verificare. ", "."];
                            },
                        },
                        {
                            key: "c9af3ff7",
                            get: function () {
                                return ["Conturile pe care le-ai blocat nu se vor putea alătura. Totuși, persoanele neconectate la X pot asculta. "];
                            },
                        },
                        {
                            key: "e60e51b3",
                            get: function () {
                                return ["X păstrează întotdeauna copii ale Spațiilor pentru o perioadă limitată, pentru a verifica eventuale cazuri de spam și abuz. "];
                            },
                        },
                        {
                            key: "jd312ce9",
                            get: function () {
                                return ["Abonează-te la Organizații Verificate și primește credite în valoare de 1.000$ pentru reclame pe care să le difuzezi pe orice cont din organizația ta. "];
                            },
                        },
                        {
                            key: "e1a49407",
                            get: function () {
                                return ["După ce te alături la X, poți răspunde la postarea utilizatorului ", "."];
                            },
                        },
                        {
                            key: "be54ed41",
                            get: function () {
                                return ["După ce te alături la X, vei putea distribui urmăritorilor tăi postarea publicată de ", "."];
                            },
                        },
                        {
                            key: "jb19eb17",
                            get: function () {
                                return ["Alătură-te acum la X pentru a-i transmite utilizatorului ", " că îți plac postările sale."];
                            },
                        },
                        {
                            key: "bbfee611",
                            get: function () {
                                return ["Urmărește utilizatorul ", " pentru a vedea ce distribuie pe X."];
                            },
                        },
                        {
                            key: "af104f2b",
                            get: function () {
                                return ["Alătură-te acum la X ca să poți distribui postarea utilizatorului ", " în privat."];
                            },
                        },
                        {
                            key: "ccc1f303",
                            get: function () {
                                return ["Urmărește ", " pentru postări de la specialiști"];
                            },
                        },
                        {
                            key: "ce02fabf",
                            get: function () {
                                return ["Alătură-te acum la X pentru a vedea un flux de postări de la utilizatori îngrijite de ", ". "];
                            },
                        },
                        {
                            key: "a85608a7",
                            get: function () {
                                return ["Alătură-te acum la X pentru a descoperi conversații noi și interesante despre lucrurile care contează cel mai mult pentru tine, cum ar fi ", "."];
                            },
                        },
                        {
                            key: "c76865b7",
                            get: function () {
                                return ["Caută în postările utilizatorului ", " pe X."];
                            },
                        },
                        {
                            key: "e4af7661",
                            get: function () {
                                return ["X și partenerii săi folosesc module cookie pentru a-ți furniza un serviciu mai bun, mai sigur și mai rapid și pentru a ne susține activitatea comercială. Unele module cookie sunt necesare pentru utilizarea și îmbunătățirea serviciilor noastre și pentru a ne asigura că aceste servicii funcționează în mod corespunzător. De asemenea, dacă faci clic pe „Accept toate modulele cookie”, vei permite X și partenerilor săi să utilizeze module cookie pentru a-ți oferi reclame și comunicări personalizate în funcție de interesele tale. Dacă faci clic pe „Refuz toate modulele cookie neesențiale”, nu vom utiliza module cookie pentru a colecta date suplimentare pentru reclamele și comunicările personalizate. Pentru a afla mai multe, inclusiv despre cum îți poți modifica opțiunile, vizitează pagina privind modulele cookie din cadrul ", "."];
                            },
                        },
                        {
                            key: "a268632b",
                            get: function () {
                                return ["X și partenerii săi folosesc module cookie pentru a-ți furniza un serviciu mai bun, mai sigur și mai rapid și pentru a ne susține activitatea comercială. Unele module cookie sunt necesare pentru utilizarea și îmbunătățirea serviciilor noastre și pentru a ne asigura că aceste servicii funcționează în mod corespunzător. "];
                            },
                        },
                        {
                            key: "c4d3d079",
                            get: function () {
                                return ["Prin înregistrare, ești de acord cu ", " și cu ", ", inclusiv cu ", "."];
                            },
                        },
                        {
                            key: "j23c6259",
                            get: function () {
                                return ["Furnizează linkuri către cel puțin trei articole despre tine în publicațiile de știri care se califică publicate în ultimele șase luni. "];
                            },
                        },
                        {
                            key: "gf887169",
                            get: function () {
                                return ["Va trebui să îndeplinești cerințe specifice, în funcție de tipul de cont X pe care îl deții. "];
                            },
                        },
                        {
                            key: "d454b49f",
                            get: function () {
                                return ["Alege opțiunea care îți descrie cel mai bine contul. "];
                            },
                        },
                        {
                            key: "hd977dd9",
                            get: function () {
                                return ["Alege o metodă pentru a dovedi că deții un cont care se califică pentru verificarea statutului de activist sau organizator. "];
                            },
                        },
                        {
                            key: "e3432573",
                            get: function () {
                                return ["Nu ai atins pragul minim de urmăritori sau pragul menționat pentru regiunea ta care este necesar pentru verificarea statutului de activist. "];
                            },
                        },
                        {
                            key: "efd8f6e7",
                            get: function () {
                                return ["Furnizează un link către un profil Google Trends care să dovedească activitatea de căutare recentă în privința ta. "];
                            },
                        },
                        {
                            key: "fe54dcfd",
                            get: function () {
                                return ["Furnizează un link către o pagină Wikipedia despre tine. Trebuie să conțină cel puțin trei referințe externe. "];
                            },
                        },
                        {
                            key: "ie26d72d",
                            get: function () {
                                return ["Furnizează un link care te recomandă într-o poziție de conducere pentru o organizație de promovare verificată. Referința trebuie să provină de pe site-ul web oficial al unei organizații verificate. "];
                            },
                        },
                        {
                            key: "af3fe861",
                            get: function () {
                                return ["Alege o metodă pentru a dovedi că deții un cont care se califică pentru verificarea statutului de persoană influentă. "];
                            },
                        },
                        {
                            key: "a08d6af3",
                            get: function () {
                                return ["Nu ai atins pragul minim de urmăritori sau pragul menționat pentru regiunea ta, care este necesar pentru verificarea statutului de creator de conținut sau persoană influentă. "];
                            },
                        },
                        {
                            key: "f774e39d",
                            get: function () {
                                return ["Alege o metodă pentru a dovedi că deții un cont care se califică pentru verificarea statutului de companie, marcă sau organizație remarcabilă. "];
                            },
                        },
                        {
                            key: "d8510869",
                            get: function () {
                                return ["Furnizează un link către un profil Google Trends care să dovedească activitatea de căutare recentă privind compania, marca sau organizația ta. "];
                            },
                        },
                        {
                            key: "h75e3641",
                            get: function () {
                                return ["Furnizează un link către o pagină Wikipedia despre compania, marca sau organizația ta, care conține cel puțin trei referințe externe. "];
                            },
                        },
                        {
                            key: "de6d69a1",
                            get: function () {
                                return ["Furnizează un link care să demonstreze că compania, marca sau organizația ta este listată la o bursă de valori publică. "];
                            },
                        },
                        {
                            key: "be0e8fdb",
                            get: function () {
                                return ["Furnizează linkuri către cel puțin trei articole despre compania ta în publicațiile de știri verificate din ultimele șase luni. "];
                            },
                        },
                        {
                            key: "baed7213",
                            get: function () {
                                return ["Trebuie să deții o funcție de cadru superior la o organizație verificată pentru a fi eligibil pentru verificare în această categorie. Adaugă contul organizației tale pentru a confirma eligibilitatea. "];
                            },
                        },
                        {
                            key: "c5d688cf",
                            get: function () {
                                return ["Alege o metodă pentru a dovedi că deții un cont care se califică pentru verificarea statutului de cadru superior al unei organizații de știri proeminentă. "];
                            },
                        },
                        {
                            key: "fce3e22d",
                            get: function () {
                                return ["Furnizează linkuri către cel puțin trei articole publicate de organizații de știri verificate în ultimele șase luni care te menționează ca lider sau cadru superior al organizației tale. "];
                            },
                        },
                        {
                            key: "f1b276f1",
                            get: function () {
                                return ["Furnizează un link care te menționează drept cadru superior în cadrul organizației tale. Referința trebuie să provină de pe site-ul oficial al unei companii, mărci sau organizații verificate. "];
                            },
                        },
                        {
                            key: "e2465097",
                            get: function () {
                                return ["Furnizează un link către un profil Google Trends care să dovedească activitatea de căutare recentă în legătură cu compania ta de producție. "];
                            },
                        },
                        {
                            key: "g83bcecd",
                            get: function () {
                                return ["Furnizează linkuri către cel puțin trei articole despre compania ta de producție în publicațiile de știri verificate din ultimele șase luni. "];
                            },
                        },
                        {
                            key: "f3016c6f",
                            get: function () {
                                return ["Alege o metodă pentru a dovedi că deții un cont care se califică pentru verificarea drept cont oficial al unei companii de producție importante. "];
                            },
                        },
                        {
                            key: "h74144bd",
                            get: function () {
                                return ["Furnizează un link care să demonstreze că organizația ta de producție este listată la o bursă de valori publică. "];
                            },
                        },
                        {
                            key: "jef5dfc5",
                            get: function () {
                                return ["Furnizează un link către o pagină Wikipedia despre compania ta de producție care conține cel puțin trei referințe externe. "];
                            },
                        },
                        {
                            key: "gf5a4309",
                            get: function () {
                                return ["Alege o metodă pentru a dovedi că deții un cont care se califică pentru verificarea statutului de companie de divertisment proeminentă. "];
                            },
                        },
                        {
                            key: "g2e175b1",
                            get: function () {
                                return ["Furnizează un link către un profil Google Trends care să dovedească activitatea de căutare recentă în privința companiei tale de divertisment. "];
                            },
                        },
                        {
                            key: "efc369c3",
                            get: function () {
                                return ["Furnizează linkuri către cel puțin trei articole despre compania ta în publicațiile de știri care se califică din ultimele șase luni. "];
                            },
                        },
                        {
                            key: "ff03f07d",
                            get: function () {
                                return ["Furnizează un link care să ateste despre compania de divertisment faptul că este listată la o bursă de valori publică. "];
                            },
                        },
                        {
                            key: "a3e9dde3",
                            get: function () {
                                return ["Furnizează un link către o pagină Wikipedia despre compania ta de divertisment care conține cel puțin trei referințe externe. "];
                            },
                        },
                        {
                            key: "c2b8fb3d",
                            get: function () {
                                return ["Alege o metodă pentru a dovedi că deții un cont care se califică pentru verificarea statutului de creator de conținut digital influent. "];
                            },
                        },
                        {
                            key: "fd33ce05",
                            get: function () {
                                return ["Furnizează un link la profilul tău de creator de conținut. Profilul tău de creator de conținut poate fi pe orice platformă digitală, dar trebuie să includă identificatorul tău pe X. "];
                            },
                        },
                        {
                            key: "bb47d2b9",
                            get: function () {
                                return ["Furnizează un link către o pagină Wikipedia despre tine care conține cel puțin trei referințe externe. "];
                            },
                        },
                        {
                            key: "db930fb3",
                            get: function () {
                                return ["Alege o metodă pentru a dovedi că deții un cont care se califică pentru verificarea statutului de persoană care activează în domeniul divertismentului. "];
                            },
                        },
                        {
                            key: "dc263ec1",
                            get: function () {
                                return ["Furnizează un link către profilul tău IMDB care include cel puțin cincizeci de contribuții la producție. "];
                            },
                        },
                        {
                            key: "d18a48d5",
                            get: function () {
                                return ["Furnizează un link care face referire la tine, ca persoană din domeniul divertismentului, și la contul tău X. Referința trebuie să provină de pe site-ul web oficial al unei entități verificate. "];
                            },
                        },
                        {
                            key: "i3b4217b",
                            get: function () {
                                return ["Alege categoria care îți descrie cel mai bine contul guvernamental. "];
                            },
                        },
                        {
                            key: "ja62479f",
                            get: function () {
                                return ["Furnizează linkuri către cel puțin cinci articole publicate de organizații de știri verificate în ultimele șase luni care fac referire la tine drept candidat pentru o funcție publică care se califică."];
                            },
                        },
                        {
                            key: "f28bbbb1",
                            get: function () {
                                return ["Furnizează linkuri către cel puțin cinci articole publicate de organizații de știri verificate în ultimele șase luni care fac referire la tine drept deținător al unei funcții guvernamentale care se califică."];
                            },
                        },
                        {
                            key: "b229f4b9",
                            get: function () {
                                return ["Furnizează linkuri către cel puțin cinci articole publicate de organizații de știri verificate în ultimele șase luni care fac referire la tine drept deținător al unei funcții guvernamentale care se califică."];
                            },
                        },
                        {
                            key: "e85178bd",
                            get: function () {
                                return ["Furnizează un link către site-ul oficial al campaniei tale care face referire la tine drept candidat pentru o funcție guvernamentală la nivel de stat sau național și la contul tău X. "];
                            },
                        },
                        {
                            key: "i499f8f7",
                            get: function () {
                                return ["Furnizează un link către un site guvernamental oficial care face referire la funcția ta guvernamentală sau activitatea ta publică și la contul tău X. "];
                            },
                        },
                        {
                            key: "a394654f",
                            get: function () {
                                return ["Furnizează un link care face referire la tine ca oficial guvernamental sau afiliat care se califică. Referința trebuie să provină de pe site-ul oficial al unei organizații guvernamentale verificate. "];
                            },
                        },
                        {
                            key: "dcb0da53",
                            get: function () {
                                return ["Pentru verificare, jurnaliștii trebuie să fie angajați de o organizație sau de o publicație de știri verificată. Furnizează un link către contul angajatorului tău. "];
                            },
                        },
                        {
                            key: "d82a96af",
                            get: function () {
                                return ["Alege o metodă pentru a dovedi că deții un cont care se califică pentru verificarea statutului de jurnalist notabil. "];
                            },
                        },
                        {
                            key: "d47b4101",
                            get: function () {
                                return ["Furnizează un link care te menționează ca jurnalist pentru angajatorul tău. Referința trebuie să provină de pe site-ul oficial al unei organizații de știri verificate. "];
                            },
                        },
                        {
                            key: "a3540593",
                            get: function () {
                                return ["Furnizează cel puțin trei referințe și/sau contribuții apărute în publicații importante în ultimele șase luni. "];
                            },
                        },
                        {
                            key: "edb782e7",
                            get: function () {
                                return ["Alege o metodă pentru a dovedi că deții un cont care se califică pentru verificarea statutului de organizație de știri proeminentă. "];
                            },
                        },
                        {
                            key: "cc16af2d",
                            get: function () {
                                return ["Furnizează un link către un profil Google Trends care să dovedească activitatea de căutare recentă privind organizația ta de știri. "];
                            },
                        },
                        {
                            key: "b42b7001",
                            get: function () {
                                return ["Furnizează un link către o pagină Wikipedia despre organizația ta de știri care conține cel puțin trei referințe externe. "];
                            },
                        },
                        {
                            key: "fd2c6f63",
                            get: function () {
                                return ["Furnizează un link care să demonstreze că organizația ta de știri este listată la o bursă de valori publică. "];
                            },
                        },
                        {
                            key: "ec7027cd",
                            get: function () {
                                return ["Furnizează linkuri către cel puțin trei articole despre organizația ta de știri în publicațiile de știri verificate din ultimele șase luni. "];
                            },
                        },
                        {
                            key: "a0a9f835",
                            get: function () {
                                return ["Persoanele care participă la sporturi profesioniste trebuie să concureze în ligi sportive verificate și evenimente care trebuie verificate. Furnizează un link către echipa, liga, evenimentul sau organizația verificată cu relevanță pentru contul tău."];
                            },
                        },
                        {
                            key: "iba551d5",
                            get: function () {
                                return ["Nu ai atins pragul minim de urmăritori pentru regiunea ta, care este necesar pentru verificarea statutului de persoană care participă la jocuri. "];
                            },
                        },
                        {
                            key: "h515e869",
                            get: function () {
                                return ["Persoanele care participă la jocuri trebuie să concureze în ligi sportive verificate și evenimente care trebuie verificate. Furnizează un link către echipa, liga, evenimentul sau organizația verificată cu relevanță pentru contul tău."];
                            },
                        },
                        {
                            key: "d2cd7f89",
                            get: function () {
                                return ["Alege o metodă pentru a dovedi că deții un cont care se califică pentru verificarea statutului de ligă sportivă proeminentă, echipă sau competiție globală. "];
                            },
                        },
                        {
                            key: "c68614a3",
                            get: function () {
                                return ["Furnizează un link către un profil Google Trends care să dovedească activitatea de căutare recentă privind organizația ta de sport profesionist. "];
                            },
                        },
                        {
                            key: "b4ea622f",
                            get: function () {
                                return ["Furnizează un link către o pagină Wikipedia despre organizația ta de sport profesionist care conține cel puțin trei referințe externe. "];
                            },
                        },
                        {
                            key: "acab99f7",
                            get: function () {
                                return ["Furnizează un link care să demonstreze că organizația ta de sport profesionist este listată la o bursă de valori publică. "];
                            },
                        },
                        {
                            key: "df0b2577",
                            get: function () {
                                return ["Furnizează un link către site-ul oficial al unei competiții globale sau organizații de sport profesionist care te menționează ca ligă, echipă sau competiție. "];
                            },
                        },
                        {
                            key: "jfda4c29",
                            get: function () {
                                return ["Furnizează linkuri către cel puțin trei articole despre organizația ta, care au apărut în publicațiile de știri verificate din ultimele șase luni. "];
                            },
                        },
                        {
                            key: "g3299df1",
                            get: function () {
                                return ["Alege o metodă pentru a dovedi că deții un cont care se califică pentru verificarea statutului de sportiv profesionist. "];
                            },
                        },
                        {
                            key: "id6bbc01",
                            get: function () {
                                return ["Alege o metodă pentru a dovedi că deții un cont care se califică pentru verificarea statutului de persoană care participă la jocuri. "];
                            },
                        },
                        {
                            key: "fbe119c5",
                            get: function () {
                                return ["Furnizează un link către site-ul oficial al unei competiții globale sau organizații de sport profesionist care te menționează ca sportiv profesionist, manager sau antrenor. "];
                            },
                        },
                        {
                            key: "da0e7f33",
                            get: function () {
                                return ["Furnizează un link către site-ul oficial al unei ligi sau eveniment de sport electronic verificat care te menționează ca membru al echipei, antrenor sau manager. "];
                            },
                        },
                        {
                            key: "ca20e39f",
                            get: function () {
                                return ["Din păcate, momentan nu putem procesa noi solicitări de verificare. Revino mai târziu și încearcă din nou. "];
                            },
                        },
                        {
                            key: "jf9308af",
                            get: function () {
                                return ["Pentru a-ți verifica identitatea prin e-mail, trebuie să ai o adresă verificată anterior. Pentru a face acest lucru, navighează la ", "."];
                            },
                        },
                        {
                            key: "e9976a41",
                            get: function () {
                                return ["Pentru a-ți verifica identitatea prin e-mail, ai nevoie de o adresă de e-mail verificată care să îndeplinească cerințele noastre de eligibilitate. Pentru a face acest lucru, navighează la ", "."];
                            },
                        },
                        {
                            key: "e5b4cc43",
                            get: function () {
                                return ["Verificarea se face în cazul persoanelor sau al grupurilor notabile dintr-o anumită categorie. Dacă faci parte dintr-o astfel de categorie, trimite o solicitare de verificare. "];
                            },
                        },
                        {
                            key: "bfb355fb",
                            get: function () {
                                return ["Asigură-te că atât fața ta, cât și textul de pe actul de identitate sunt clar vizibile și lizibile. În caz contrar, poate fi necesar să îl trimiți din nou. X nu va primi și nu va stoca nicio copie după actul tău de identitate. "];
                            },
                        },
                        {
                            key: "d65a41c3",
                            get: function () {
                                return ["Pentru informații despre accesarea sau remedierea datelor trimise, consultă ", "."];
                            },
                        },
                        {
                            key: "a1c39f5b",
                            get: function () {
                                return ["Vei fi contactat imediat ce se ia o decizie. Procesul poate dura până la " + this.props.days + " " + r(this.props.days, "zile", "zi", "de zile") + "."];
                            },
                        },
                        {
                            key: "ja826537",
                            get: function () {
                                return ["Ajută-ne să ne îmbunătățim cu un scurt ", "."];
                            },
                        },
                        {
                            key: "b7be91bf",
                            get: function () {
                                return ["Ultima solicitare a fost respinsă pe " + this.props.date + ". Pentru a trimite o nouă solicitare, va trebui să aștepți 30 de zile de la data respectivă."];
                            },
                        },
                        {
                            key: "jcb00a95",
                            get: function () {
                                return ["Ultima solicitare a fost trimisă pe " + this.props.date + ". Pentru a trimite o nouă solicitare, va trebui să aștepți 30 de zile de la data respectivă."];
                            },
                        },
                        {
                            key: "j92ea4b9",
                            get: function () {
                                return ["Ultima solicitare a fost trimisă la " + this.props.date + ". Te vom contacta imediat ce se ia o decizie."];
                            },
                        },
                        {
                            key: "jbcd22b1",
                            get: function () {
                                return ["Distracție plăcută! Ai grijă să respecți mereu ", "."];
                            },
                        },
                        {
                            key: "hcecd237",
                            get: function () {
                                return ["Acestea sunt aplicațiile pe care le-ai conectat la cont. Poți vedea informațiile la care au acces aceste aplicații și revoca accesul. "];
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
                                return ["Persoanele pe care le urmărești îți vor putea trimite întotdeauna mesaje. "];
                            },
                        },
                        {
                            key: "d79b6b7b",
                            get: function () {
                                return ["Conectează un cont de administrator, astfel încât contul tău automat să primească o etichetă de cont automat. Toate conturile automate trebuie conectate la un cont de administrator. "];
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
                            key: "b6411d33",
                            get: function () {
                                return ["Based on your X usage and languages settings, " + this.props.sourceLang + " will be automatically translated by Grok. To select automatically-translated languages, visit ", "."];
                            },
                        },
                        {
                            key: "db79453f",
                            get: function () {
                                return ["Încercăm să menținem X un loc destinat conversațiilor civilizate, așadar am dezactivat majoritatea modurilor de a interacționa cu această postare. Dacă dorești să discuți despre ea, poți în continuare să citezi postarea. "];
                            },
                        },
                        {
                            key: "i2a606d1",
                            get: function () {
                                return ["Încercăm să menținem X un loc destinat conversațiilor civilizate, așadar am dezactivat majoritatea modurilor de a interacționa cu această postare. "];
                            },
                        },
                        {
                            key: "fe93026b",
                            get: function () {
                                return ["Numai @" + this.props.username + " și Cercul său pot vedea aceste postări."];
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
                                return ["Acestea sunt stabilite și aplicate de administratorii Comunității, suplimentar față de ", "."];
                            },
                        },
                        {
                            key: "gb7eca21",
                            get: function () {
                                return ["Comunitățile sunt publice, așadar conturile protejate nu se pot alătura momentan. Poți citi postările, dar pentru a participa ", "."];
                            },
                        },
                        {
                            key: "jb124a07",
                            get: function () {
                                return ["Ai fost eliminat de un moderator pentru că ai încălcat următoarea regulă a Comunității: "];
                            },
                        },
                        {
                            key: "d6d818a1",
                            get: function () {
                                return [this.props.viewerCount + " vizualizări"];
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
                                return ["GIF prin "];
                            },
                        },
                        {
                            key: "i9606e33",
                            get: function () {
                                return ["Videoclip prin "];
                            },
                        },
                        {
                            key: "i1a64d47",
                            get: function () {
                                return ["Fotografie prin "];
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
                                return ["Caută, în schimb, „", "”"];
                            },
                        },
                        {
                            key: "hce48b8b",
                            get: function () {
                                return ["Ai vrut să spui „", "”?"];
                            },
                        },
                        {
                            key: "f8ea2809",
                            get: function () {
                                return [this.props.selection + " poate răspunde acum"];
                            },
                        },
                        {
                            key: "hb92c979",
                            get: function () {
                                return ["", "/" + this.props.maxLimit + " caractere"];
                            },
                        },
                        {
                            key: "a20c0721",
                            get: function () {
                                return ["Ultima editare: "];
                            },
                        },
                        {
                            key: "a9ce2dd5",
                            get: function () {
                                return ["", " pentru asistență și tutoriale."];
                            },
                        },
                        {
                            key: "e2e6ea0d",
                            get: function () {
                                return ["prin "];
                            },
                        },
                        {
                            key: "bd7349bb",
                            get: function () {
                                return ["Salvată ultima dată "];
                            },
                        },
                        {
                            key: "hb16b207",
                            get: function () {
                                return ["Publicarea articolului tău ", " va fi anulată, articolul va fi mutat la schițe și nu va mai fi vizibil publicului."];
                            },
                        },
                        {
                            key: "dd5806bb",
                            get: function () {
                                return ["Următorul conținut media include material potențial sensibil. "];
                            },
                        },
                        {
                            key: "d247a0b9",
                            get: function () {
                                return ["Funcția Editare este limitată la postările originale și nu include elemente precum răspunsurile sau firele. ", " despre ce poți edita."];
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
                                return ["Vrei să îți editezi Cercul? Foarte bine. Persoanele nu vor fi notificate dacă le elimini. "];
                            },
                        },
                        {
                            key: "j0b75ce7",
                            get: function () {
                                return ["", " noul creator de articole pentru noi opțiuni de formatare."];
                            },
                        },
                        {
                            key: "dd964cf3",
                            get: function () {
                                return ["Comunitățile sunt publice, așadar conturile protejate nu se pot alătura conversației. Poți citi și aprecia postările, dar pentru a putea face mai multe, trebuie să ", "."];
                            },
                        },
                        {
                            key: "e34022a7",
                            get: function () {
                                return ["Răspuns către "];
                            },
                        },
                        {
                            key: "bfd9c99b",
                            get: function () {
                                return ["Răspuns către "];
                            },
                        },
                        {
                            key: "g7a1000f",
                            get: function () {
                                return ["Răspuns către "];
                            },
                        },
                        {
                            key: "i558c201",
                            get: function () {
                                return ["Răspuns către "];
                            },
                        },
                        {
                            key: "j935bcdf",
                            get: function () {
                                return ["Îi răspunzi lui ", " în " + this.props.communityName];
                            },
                        },
                        {
                            key: "i7bd9c8f",
                            get: function () {
                                return ["Le răspunzi lui ", " în " + this.props.communityName];
                            },
                        },
                        {
                            key: "cfa0049d",
                            get: function () {
                                return ["Le răspunzi lui ", " în " + this.props.communityName];
                            },
                        },
                        {
                            key: "jfc8e4b5",
                            get: function () {
                                return ["Le răspunzi lui ", " în " + this.props.communityName];
                            },
                        },
                        {
                            key: "fe06c9f5",
                            get: function () {
                                return ["Îi răspunzi utilizatorului ", ". Răspunsul tău va fi vizibil și", " săi."];
                            },
                        },
                        {
                            key: "f7e12e15",
                            get: function () {
                                return ["Le răspunzi lui ", ". Răspunsul tău va fi vizibil și ", " acestora."];
                            },
                        },
                        {
                            key: "eade6035",
                            get: function () {
                                return ["Le răspunzi lui ", ". Răspunsul tău va fi vizibil și ", " acestora."];
                            },
                        },
                        {
                            key: "da018b37",
                            get: function () {
                                return ["Le răspunzi lui ", ". Răspunsul tău va fi vizibil și ", " acestora."];
                            },
                        },
                        {
                            key: "e119d033",
                            get: function () {
                                return ["Răspunzi utilizatorului ", ". Și persoanele care te urmăresc din Cercul utilizatorului " + this.props.trustedFriendsTweetOwner + " vor putea să vadă răspunsul tău."];
                            },
                        },
                        {
                            key: "d0c02e7b",
                            get: function () {
                                return ["Răspunzi utilizatorului ", ". Și persoanele din Cercul utilizatorului " + this.props.trustedFriendsTweetOwner + " vor putea să vadă răspunsul tău."];
                            },
                        },
                        {
                            key: "bce67b49",
                            get: function () {
                                return ["Replying to ", ". ", " Circle who follow you will also be able to see your reply."];
                            },
                        },
                        {
                            key: "e460ccf1",
                            get: function () {
                                return ["Replying to ", ". ", " Circle will also be able to see your reply."];
                            },
                        },
                        {
                            key: "i421898b",
                            get: function () {
                                return ["Replying to ", ". ", " Circle who follow you will also be able to see your reply."];
                            },
                        },
                        {
                            key: "c70a17eb",
                            get: function () {
                                return ["Replying to ", ". ", " Circle will also be able to see your reply."];
                            },
                        },
                        {
                            key: "b0d6bca7",
                            get: function () {
                                return ["Replying to ", ". ", " Circle who follow you will also be able to see your reply."];
                            },
                        },
                        {
                            key: "aacf46d1",
                            get: function () {
                                return ["Replying to ", ". ", " Circle will also be able to see your reply."];
                            },
                        },
                        {
                            key: "ff2f533f",
                            get: function () {
                                return ["Dacă dai clic pe Promovează postarea, ești de acord cu "];
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
                                return ["Noul tău e-mail " + this.props.unverifiedEmail + " nu a fost confirmat. "];
                            },
                        },
                        {
                            key: "f05afae5",
                            get: function () {
                                return ["Dacă îți schimbi parola, te vei deconecta de la toate sesiunile X active, cu excepția celei pe care o folosești în prezent. ", " cu acces la contul tău nu va fi afectată. "];
                            },
                        },
                        {
                            key: "d3543217",
                            get: function () {
                                return ["Sunt de acord ca X și Persona să folosească imagini ale documentului meu de identitate și ale selfie-ului meu, inclusiv date biometrice extrase, pentru a-mi confirma identitatea și în scopuri X referitoare la siguranță și securitate, prevenirea fraudei și plată. Persona poate stoca aceste date pe o perioadă de până la 30 de zile. X poate stoca numele complet, adresa și combinările hash ale numărului documentului meu de identitate pe durata abonamentului meu la ", "."];
                            },
                        },
                        {
                            key: "j7963df1",
                            get: function () {
                                return ["Sunt de acord ca X și Au10tix să folosească imagini ale documentului meu de identitate și ale selfie-ului meu, inclusiv date biometrice extrase, pentru a-mi confirma identitatea și în scopuri X referitoare la siguranță și securitate, prevenirea fraudei și plată. Au10tix poate stoca aceste date pe o perioadă de până la 30 de zile. X poate stoca numele complet, adresa și combinările hash ale numărului documentului meu de identitate pe durata participării mele la programul ", " sau ", "."];
                            },
                        },
                        {
                            key: "f8f20041",
                            get: function () {
                                return ["Sunt de acord ca X și Au10tix să folosească imagini ale documentului meu de identitate și selfie-ul meu, inclusiv date biometrice extrase, pentru a-mi confirma identitatea și în scopuri X referitoare la siguranță și securitate, prevenirea fraudei și plată. Au10tix poate stoca aceste date pe o perioadă de până la 30 de zile. X poate stoca numele complet, adresa și combinările hash ale numărului documentului meu de identitate pe durata participării mele la programul ", " sau ", "."];
                            },
                        },
                        {
                            key: "dd49801f",
                            get: function () {
                                return ["Sunt de acord ca X și Stripe să folosească imagini ale documentului meu de identitate și ale selfie-ului meu, inclusiv date biometrice extrase, pentru a-mi confirma identitatea și în scopuri X referitoare la siguranță și securitate, prevenirea fraudei și plată. Stripe sau subprocesatorii săi pot stoca aceste date pe o perioadă de până la 30 de zile și le pot utiliza pentru a instrui modele și a actualiza bazele de date în scopuri de detectare a fraudei. X poate stoca numele complet, adresa și combinările hash ale numărului documentului meu de identitate pe durata participării mele la programul ", " sau ", "."];
                            },
                        },
                        {
                            key: "c5cee667",
                            get: function () {
                                return ["Sunt de acord ca X și Stripe să folosească imagini ale documentului meu de identitate și selfie-ul meu, inclusiv date biometrice extrase, pentru a-mi confirma identitatea și în scopuri X referitoare la siguranță și securitate, prevenirea fraudei și plată. Stripe sau subprocesatorii săi pot stoca aceste date pe o perioadă de până la 30 de zile și le pot utiliza pentru a instrui modele și a actualiza bazele de date în scopuri de detectare a fraudei. X poate stoca numele complet, adresa și combinările hash ale numărului documentului meu de identitate pe durata participării mele la programul ", " sau ", "."];
                            },
                        },
                        {
                            key: "a4455c05",
                            get: function () {
                                return ["Scrie-l sau fă o captură de ecran și păstrează-l într-un loc sigur. Acest cod poate fi folosit o singură dată. "];
                            },
                        },
                        {
                            key: "cd68cf4b",
                            get: function () {
                                return ["Aceasta este țara principală asociată contului tău. Selectarea țării ne ajută să îți personalizăm experiența pe X. "];
                            },
                        },
                        {
                            key: "g66a254b",
                            get: function () {
                                return ["Acestea sunt contactele pe care le-ai importat de pe dispozitivele tale mobile. Aceste informații sunt utilizate pentru a-ți personaliza experiența pe X, de exemplu, pentru a sugera conturi de urmărit. Poți să elimini orice contacte pe care le-ai încărcat anterior și să dezactivezi sincronizarea cu X pe toate dispozitivele. Reține: acest proces necesită un timp. "];
                            },
                        },
                        {
                            key: "ffa48331",
                            get: function () {
                                return ["Dacă este activată această opțiune, vei putea să atașezi informații despre locație la postări. "];
                            },
                        },
                        {
                            key: "a629c16f",
                            get: function () {
                                return ["", " " + this.props.discountedPrice + " cu facturare lunarăpentru " + r(this.props.duration, this.props.duration + " luni", "o lună", this.props.duration + " luni")];
                            },
                        },
                        {
                            key: "c142e70f",
                            get: function () {
                                return ["", " " + this.props.discountedPrice + ", cu facturare anuală pentru " + r(this.props.duration, this.props.duration + " ani", "un an", this.props.duration + " ani")];
                            },
                        },
                        {
                            key: "e9dc8a25",
                            get: function () {
                                return ["", " ", " timp de " + r(this.props.duration, this.props.duration + " (de) ani", "un an", this.props.duration + " (de) ani")];
                            },
                        },
                        {
                            key: "f8a9cbb7",
                            get: function () {
                                return ["", " ", " timp de " + r(this.props.duration, this.props.duration + " (de) luni", "o lună", this.props.duration + " (de) luni")];
                            },
                        },
                        {
                            key: "ab3bf5a7",
                            get: function () {
                                return ["Când blochezi pe cineva, acea persoană nu va mai putea să te urmărească sau să îți trimită mesaje și nu vei vedea notificări de la ea. "];
                            },
                        },
                        {
                            key: "g124fce9",
                            get: function () {
                                return ["Este posibil ca unele informații de cont să fie încă disponibile în motoarele de căutare precum Google sau Bing. "];
                            },
                        },
                        {
                            key: "d9ef8fbb",
                            get: function () {
                                return ["Dacă vrei doar să schimbi @numeledeutilizator, nu este necesar să îți dezactivezi contul. Editează-l în ", "."];
                            },
                        },
                        {
                            key: "b7a3adc1",
                            get: function () {
                                return ["Ca să folosești @numeutilizator curent sau adresa de e-mail curentă cu alt cont X, ", " înainte să dezactivezi acest cont."];
                            },
                        },
                        {
                            key: "f3613d0b",
                            get: function () {
                                return ["Dacă dorești să îți descarci ", ", va trebui să finalizezi atât solicitarea, cât și procesul de descărcare înainte de a-ți dezactiva contul. Linkurile pentru descărcarea datelor tale nu pot fi trimise către conturi dezactivate."];
                            },
                        },
                        {
                            key: "e9dec56f",
                            get: function () {
                                return ["Confirmi că ", " este corectă. În caz contrar, contul tău poate fi afectat."];
                            },
                        },
                        {
                            key: "cfd2909d",
                            get: function () {
                                return ["X utilizează vârsta ta pentru a-ți personaliza experiența, inclusiv reclamele, așa cum s-a explicat în ", "."];
                            },
                        },
                        {
                            key: "jea9c1cb",
                            get: function () {
                                return ["Poți controla cine îți vede data nașterii pe X. "];
                            },
                        },
                        {
                            key: "d80a7547",
                            get: function () {
                                return ["", " găzduiește"];
                            },
                        },
                        {
                            key: "j7293d6b",
                            get: function () {
                                return ["", " este co-gazdă"];
                            },
                        },
                        {
                            key: "df79977f",
                            get: function () {
                                return ["", " vorbește"];
                            },
                        },
                        {
                            key: "ad960f39",
                            get: function () {
                                return ["", " ascultă"];
                            },
                        },
                        {
                            key: "bab4ce51",
                            get: function () {
                                return [this.props.start + " - " + this.props.end];
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
                                return ["Creează "];
                            },
                        },
                        {
                            key: "ca584c31",
                            get: function () {
                                return ["Există deja o companie cu acest site web. Ai vrut să spui ", "?"];
                            },
                        },
                        {
                            key: "eb96a831",
                            get: function () {
                                return ["Aceste filtre nu vor afecta notificările de la persoanele pe care le urmărești. "];
                            },
                        },
                        {
                            key: "aba5a349",
                            get: function () {
                                return ["Poți ignora un cuvânt, o expresie, un @numeutilizator sau un hashtag odată. "];
                            },
                        },
                        {
                            key: "f03ea36d",
                            get: function () {
                                return ["Atunci când ignori cuvinte, nu vei mai primi notificări noi pentru postările care le includ și nu vei mai vedea postări cu aceste cuvinte în cronologia ta. "];
                            },
                        },
                        {
                            key: "b0b13519",
                            get: function () {
                                return ["Aici se află toate conturile pe care le-ai ignorat. Le poți adăuga sau elimina din această listă. "];
                            },
                        },
                        {
                            key: "e212a9ab",
                            get: function () {
                                return ["Gestionează preferințele tale în ceea ce privește vizionarea de conținut media sensibil pe X. Află mai multe despre ", "."];
                            },
                        },
                        {
                            key: "cbc4f32d",
                            get: function () {
                                return ["Aici este inclus alt conținut media marcat ca sensibil, cum ar fi conținut media provenit de la conturi care au marcate ", " drept sensibile."];
                            },
                        },
                        {
                            key: "a4fc317d",
                            get: function () {
                                return ["Contul tău a fost semnalizat și nu poate participa la programul Cota-parte din venituri pentru creatori. Poți să trimiți o contestație urmând instrucțiunile disponibile ", ". Cota-parte din venituri va continua să se acumuleze în timp ce contestația este procesată."];
                            },
                        },
                        {
                            key: "a8e78be7",
                            get: function () {
                                return ["Contul tău a fost semnalizat și nu poate participa la programul Cota-parte din venituri din publicitate. Poți să trimiți o contestație urmând instrucțiunile disponibile ", ". Cota-parta din venituri va continua să se acumuleze în timp ce contestația este procesată."];
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
                                return ["Abonează-te la", "" + this.props.name];
                            },
                        },
                        {
                            key: "ede65a59",
                            get: function () {
                                return ["Te întrebi ce poți câștiga? "];
                            },
                        },
                        {
                            key: "a9c053c7",
                            get: function () {
                                return ["Prin înscriere, ești de acord să respecți "];
                            },
                        },
                        {
                            key: "geee69df",
                            get: function () {
                                return ["Alege un preț lunar care este rezonabil pentru tine și audiența ta. Te întrebi cât poți câștiga? "];
                            },
                        },
                        {
                            key: "fdf28443",
                            get: function () {
                                return ["Selectând Acceptă și continuă, ești de acord să respecți "];
                            },
                        },
                        {
                            key: "f43d68d7",
                            get: function () {
                                return ["Verifică din nou și confirmă prețul abonamentului tău. ", " în timpul perioadei de testare a funcției Abonamente."];
                            },
                        },
                        {
                            key: "h406634b",
                            get: function () {
                                return ["Ți-am confirmat contul Stripe. Abonamentele contului tău vor fi vizibile în curând. Îți vom trimite o notificare imediat ce sunt vizibile. De asemenea, îți poți accesa profilul pentru a vedea dacă abonamentele sunt activate."];
                            },
                        },
                        {
                            key: "d4b0b963",
                            get: function () {
                                return ["Dacă atingi mai jos, înseamnă că ești de acord cu ", "."];
                            },
                        },
                        {
                            key: "j2d920f7",
                            get: function () {
                                return ["Dacă selectezi opțiunea „Alătură-te și verifică identitatea”, ești de acord cu "];
                            },
                        },
                        {
                            key: "fde94f97",
                            get: function () {
                                return ["Dacă selectezi opțiunea „Alătură-te și verifică identitatea”, ești de acord cu "];
                            },
                        },
                        {
                            key: "afbd47cb",
                            get: function () {
                                return ["Câștigă bani din reclamele afișate în răspunsurile la postările tale. Pentru a fi eligibil pentru programul de venituri din reclame, contul tău trebuie să respecte ", ", "];
                            },
                        },
                        {
                            key: "ce6f73c7",
                            get: function () {
                                return ["Controlează modul în care X îți personalizează experiența în "];
                            },
                        },
                        {
                            key: "j31f2f97",
                            get: function () {
                                return ["Da, toate conturile automate trebuie etichetate. ", " impun acest lucru."];
                            },
                        },
                        {
                            key: "ed8f77d3",
                            get: function () {
                                return ["Află mai multe pe pagina cu ", "."];
                            },
                        },
                        {
                            key: "dd040d67",
                            get: function () {
                                return ["Află mai multe pe pagina cu ", "."];
                            },
                        },
                        {
                            key: "if2bb997",
                            get: function () {
                                return ["Ne pare rău ca pleci. #RămasBun"];
                            },
                        },
                        {
                            key: "i1e24825",
                            get: function () {
                                return ["Dacă nu ai furnizat data nașterii, îți oferim o categorie de vârstă pe baza profilului tău și a activității de pe X. Informațiile legate de vârstă sunt utilizate pentru a-ți personaliza experiența. "];
                            },
                        },
                        {
                            key: "a200fc71",
                            get: function () {
                                return ["Nu este corectă? Poți adăuga data nașterii la ", " fără a o distribui public."];
                            },
                        },
                        {
                            key: "a97ef88f",
                            get: function () {
                                return ["Publicul personalizat este creat de cele mai multe ori din liste de e-mail sau comportamente de navigare. Acesta îi ajută pe agenții de publicitate să ajungă la clienți potențiali sau la persoanele care și-au exprimat deja interesul față de afacerea lor. "];
                            },
                        },
                        {
                            key: "f451c521",
                            get: function () {
                                return ["Momentan faci parte din ", " de la "];
                            },
                        },
                        {
                            key: "f27cc8af",
                            get: function () {
                                return ["Pentru a o activa, mergi la setările pentru ", " și activează „Personalizează pe baza identității deduse”."];
                            },
                        },
                        {
                            key: "h0085c59",
                            get: function () {
                                return ["Pentru a o activa, mergi la setările pentru ", " și activează opțiunea „Personalizează pe baza identității tale deduse”."];
                            },
                        },
                        {
                            key: "b78e30fd",
                            get: function () {
                                return ["Pentru a elimina aceste informații, dezactivează setarea „Personalizează pe baza identității tale deduse” în setările tale pentru ", "."];
                            },
                        },
                        {
                            key: "bb593021",
                            get: function () {
                                return ["Pentru a elimina aceste informații, dezactivează setarea „Personalizează pe baza identității tale deduse” în setările ", "."];
                            },
                        },
                        {
                            key: "h60f45ef",
                            get: function () {
                                return ["Acestea sunt indexări prin hash deduse ale adreselor de e-mail care au componente comune cu cele pe care le-ai specificat pentru X. Poți să elimini aceste informații dacă dezactivezi setarea „Personalizează pe baza identității tale deduse” în setările ", "."];
                            },
                        },
                        {
                            key: "cbcb2413",
                            get: function () {
                                return ["Acestea sunt dispozitivele pe care le folosește X pentru a-ți cuantifica și îmbunătăți experiența în acest browser. "];
                            },
                        },
                        {
                            key: "e21b623d",
                            get: function () {
                                return ["Acestea sunt browserele și dispozitivele asociate ție. "];
                            },
                        },
                        {
                            key: "i4d58f43",
                            get: function () {
                                return ["Acestea sunt browserele, dispozitivele și informațiile pe care le folosește X pentru a-ți personaliza experiența. Printre acestea se numără dispozitivele și browserele pe care nu le-ai folosit pentru a te conecta pe X, precum și adresele de e-mail și numerele de telefon similare cu cele conectate la contul tău X. "];
                            },
                        },
                        {
                            key: "a1fdeb45",
                            get: function () {
                                return ["Accesează ", " pentru a activa."];
                            },
                        },
                        {
                            key: "hcb3ad67",
                            get: function () {
                                return ["Dacă vezi vreo activitate suspectă de la o aplicație, accesează ", " pentru a-i revoca accesul. În unele cazuri, locația adresei IP poate fi alta decât locația ta fizică. "];
                            },
                        },
                        {
                            key: "adc26d49",
                            get: function () {
                                return ["Partenerii X construiesc segmente de public pe baza deciziilor de cumpărături, a stilului de viață și a altor comportamente online și offline. "];
                            },
                        },
                        {
                            key: "efc1de65",
                            get: function () {
                                return ["A apărut o eroare, iar datele tale X nu au putut fi trimise. Pentru a le solicita, ", "."];
                            },
                        },
                        {
                            key: "f0e84609",
                            get: function () {
                                return ["acum "];
                            },
                        },
                        {
                            key: "b76d6eb7",
                            get: function () {
                                return ["Doar primii 1000 de invitați pot fi afișați. Este posibil să existe persoane care ascultă în modul anonim sau care nu sunt conectate la X. ", "."];
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
                                return ["", " a schimbat fotografia de grup"];
                            },
                        },
                        {
                            key: "b16e4d45",
                            get: function () {
                                return ["Ai schimbat numele grupului în "];
                            },
                        },
                        {
                            key: "c5760699",
                            get: function () {
                                return ["", " a schimbat numele grupului în "];
                            },
                        },
                        {
                            key: "a72730a1",
                            get: function () {
                                return ["Numele grupului a fost schimbat în "];
                            },
                        },
                        {
                            key: "a4bc88c3",
                            get: function () {
                                return ["", " a adăugat pe "];
                            },
                        },
                        {
                            key: "bfdff0c3",
                            get: function () {
                                return ["Participanții ", " au fost adăugați"];
                            },
                        },
                        {
                            key: "fc10875f",
                            get: function () {
                                return ["", " a ieșit"];
                            },
                        },
                        {
                            key: "fa95b019",
                            get: function () {
                                return ["", " te-a adăugat"];
                            },
                        },
                        {
                            key: "e3534477",
                            get: function () {
                                return ["Există încă ", " în acest grup"];
                            },
                        },
                        {
                            key: "b6656851",
                            get: function () {
                                return ["În acest grup " + r(this.props.count, "sunt", "este", "sunt") + " " + this.props.count + " " + r(this.props.count, "persoane", "persoană", "de persoane")];
                            },
                        },
                        {
                            key: "d6db6323",
                            get: function () {
                                return ["Această postare poate include conținut sensibil. "];
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
                                return ["Mesajele sunt criptate. "];
                            },
                        },
                        {
                            key: "af0bb3eb",
                            get: function () {
                                return ["Nu poți trimite Mesaje directe criptate acestei persoane. "];
                            },
                        },
                        {
                            key: "b9f61623",
                            get: function () {
                                return ["Nu vei mai putea trimite mesaje acestei persoane. "];
                            },
                        },
                        {
                            key: "h27b1291",
                            get: function () {
                                return ["Această conversație criptată nu poate fi accesată de pe dispozitivul curent. Pentru a o accesa, conectează-te de pe dispozitivul anterior. "];
                            },
                        },
                        {
                            key: "bcabe3f5",
                            get: function () {
                                return ["Nu poți trimite un mesaj acestui grup deoarece nu ești utilizator verificat. "];
                            },
                        },
                        {
                            key: "jdef4bc7",
                            get: function () {
                                return ["Nu poți trimite un mesaj acestui utilizator deoarece nu ești utilizator verificat. "];
                            },
                        },
                        {
                            key: "i005f1fd",
                            get: function () {
                                return ["Ai răspuns la un Fleet al utilizatorului ", ": "];
                            },
                        },
                        {
                            key: "b35cee41",
                            get: function () {
                                return ["A răspuns la un Fleet al tău: "];
                            },
                        },
                        {
                            key: "dc4b75a1",
                            get: function () {
                                return ["", " a trimis un GIF"];
                            },
                        },
                        {
                            key: "hcbbbb35",
                            get: function () {
                                return ["", " a trimis un link"];
                            },
                        },
                        {
                            key: "c1e1f849",
                            get: function () {
                                return ["", " a trimis o fotografie"];
                            },
                        },
                        {
                            key: "c7e2464f",
                            get: function () {
                                return ["", " a trimis un sticker"];
                            },
                        },
                        {
                            key: "eee2f121",
                            get: function () {
                                return ["", " a trimis un videoclip"];
                            },
                        },
                        {
                            key: "be5a9617",
                            get: function () {
                                return ["", " a trimis un mesaj vocal"];
                            },
                        },
                        {
                            key: "e802e257",
                            get: function () {
                                return ["", " a distribuit o postare"];
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
                                return ["Ai reacționat la videoclipul utilizatorului @", " cu "];
                            },
                        },
                        {
                            key: "d764af97",
                            get: function () {
                                return ["", " a reacționat la videoclipul utilizatorului @", " cu "];
                            },
                        },
                        {
                            key: "ab1cdfe3",
                            get: function () {
                                return ["Ai reacționat la un videoclip cu "];
                            },
                        },
                        {
                            key: "f0cf1699",
                            get: function () {
                                return ["", " a reacționat la un videoclip cu "];
                            },
                        },
                        {
                            key: "hec0fd4d",
                            get: function () {
                                return ["Ai reacționat la fotografia utilizatorului @", " cu "];
                            },
                        },
                        {
                            key: "j55320df",
                            get: function () {
                                return ["", " a reacționat la fotografia utilizatorului @", " cu "];
                            },
                        },
                        {
                            key: "jf27606b",
                            get: function () {
                                return ["Ai reacționat la o fotografie cu "];
                            },
                        },
                        {
                            key: "cd110359",
                            get: function () {
                                return ["", " a reacționat la o fotografie cu "];
                            },
                        },
                        {
                            key: "e70dcc35",
                            get: function () {
                                return ["Ai reacționat la GIF-ul utilizatorului @", " cu "];
                            },
                        },
                        {
                            key: "g1bf440b",
                            get: function () {
                                return ["", " a reacționat la GIF-ul utilizatorului @", " cu "];
                            },
                        },
                        {
                            key: "b2da1bf9",
                            get: function () {
                                return ["Ai reacționat la un GIF cu "];
                            },
                        },
                        {
                            key: "g84c0421",
                            get: function () {
                                return ["", " a reacționat la un GIF cu "];
                            },
                        },
                        {
                            key: "hc1bd66d",
                            get: function () {
                                return ["Ai reacționat la postarea lui @", " cu "];
                            },
                        },
                        {
                            key: "bd3edf13",
                            get: function () {
                                return ["", " a reacționat la postarea lui @", " cu "];
                            },
                        },
                        {
                            key: "df2dc76f",
                            get: function () {
                                return ["Ai reacționat la o postare cu "];
                            },
                        },
                        {
                            key: "aba18aef",
                            get: function () {
                                return ["", " a reacționat la o postare cu "];
                            },
                        },
                        {
                            key: "cd2e7c19",
                            get: function () {
                                return ["Ai reacționat la un linkv al utilizatorului @", " cu "];
                            },
                        },
                        {
                            key: "aee9e7fb",
                            get: function () {
                                return ["", " a reacționat la un link al utilizatorului @", " cu "];
                            },
                        },
                        {
                            key: "f9fb1cf7",
                            get: function () {
                                return ["Ai reacționat la un link cu "];
                            },
                        },
                        {
                            key: "f2bf910f",
                            get: function () {
                                return ["", " a reacționat la un link cu "];
                            },
                        },
                        {
                            key: "i6cec545",
                            get: function () {
                                return ["Ai reacționat la mesajul utilizatorului @", " cu ", ": "];
                            },
                        },
                        {
                            key: "d6998bab",
                            get: function () {
                                return ["", " a reacționat la mesajul utilizatorului @", " cu ", ": "];
                            },
                        },
                        {
                            key: "cec676f3",
                            get: function () {
                                return ["Ai reacționat cu ", ": "];
                            },
                        },
                        {
                            key: "a2706f9b",
                            get: function () {
                                return ["", " a reacționat cu ", ": "];
                            },
                        },
                        {
                            key: "ff973a65",
                            get: function () {
                                return ["Ai reacționat la mesajul vocal al utilizatorului @", " cu "];
                            },
                        },
                        {
                            key: "ec2cede5",
                            get: function () {
                                return ["", " a reacționat la mesajul vocal de la @", " cu "];
                            },
                        },
                        {
                            key: "i1d08199",
                            get: function () {
                                return ["Ai reacționat la un mesaj vocal cu "];
                            },
                        },
                        {
                            key: "d424b45f",
                            get: function () {
                                return ["", " a reacționat la un mesaj vocal cu "];
                            },
                        },
                        {
                            key: "d6b15bbf",
                            get: function () {
                                return ["Ai reacționat cu "];
                            },
                        },
                        {
                            key: "ac0d4bc7",
                            get: function () {
                                return ["", " a reacționat cu "];
                            },
                        },
                        {
                            key: "fa4f5b49",
                            get: function () {
                                return ["Sistemele X scanează linkurile și materialele media distribuite pentru spam, abuz și conținut interzis. De asemenea, analizăm tiparele de utilizare pentru a detecta comportament suspect și pentru a-ți îmbunătăți experiența. Putem examina manual mesajele directe pentru a investiga încălcările raportate și utilizarea necorespunzătoare a serviciului nostru sau pentru a respecta legile sau solicitările guvernamentale. Vezi ", " pentru mai multe detalii."];
                            },
                        },
                        {
                            key: "a66142ad",
                            get: function () {
                                return ["Aici vei vedea solicitările de mesaje primite de la persoanele pe care nu le urmărești. Pentru a răspunde la mesajele acestora, trebuie să accepți solicitarea. "];
                            },
                        },
                        {
                            key: "hc37d3bb",
                            get: function () {
                                return ["Când începi verificarea, este posibil ca Google să colecteze și să utilizeze informații despre tine, despre dispozitivul tău și despre browser. Consultă ", " de la Google."];
                            },
                        },
                        {
                            key: "eea0a14f",
                            get: function () {
                                return [this.props.formattedCount + " Aprecier" + r(this.props.count, "i", "e", "i")];
                            },
                        },
                        {
                            key: "cca42d0b",
                            get: function () {
                                return [this.props.formattedCount + " fotografi" + r(this.props.count, "i și clipuri", "e și clip", "i și clipuri") + " video"];
                            },
                        },
                        {
                            key: "a0a3adf7",
                            get: function () {
                                return [this.props.formattedCount + " post" + r(this.props.count, "ări", "are", "ări")];
                            },
                        },
                        {
                            key: "e6264621",
                            get: function () {
                                return ["Nu poți urmări sau vedea postările de la @" + this.props.screenName + ". "];
                            },
                        },
                        {
                            key: "f98ecc47",
                            get: function () {
                                return ["Sigur dorești să vizualizezi aceste postări? Vizualizarea postărilor nu îl/o va debloca pe @" + this.props.screenName + ". "];
                            },
                        },
                        {
                            key: "i8197603",
                            get: function () {
                                return ["Pentru a raporta o problemă legată de drepturile de proprietate intelectuală, accesează ", ". Pentru a raporta orice alte probleme legate de acest produs, accesează aplicația pentru iOS sau Android."];
                            },
                        },
                        {
                            key: "a21f2f79",
                            get: function () {
                                return ["Pentru informații suplimentare legate de încălcările la nivel de produs, ", "."];
                            },
                        },
                        {
                            key: "ff60a139",
                            get: function () {
                                return ["Total: "];
                            },
                        },
                        {
                            key: "f575f533",
                            get: function () {
                                return ["Categoriile sunt selectate automat și nu sunt alocate, verificate sau aprobate de X. "];
                            },
                        },
                        {
                            key: "cebed305",
                            get: function () {
                                return ["Acest cont este afiliat cu ", "."];
                            },
                        },
                        {
                            key: "i1824ce3",
                            get: function () {
                                return ["Doar urmăritorii aprobați pot vedea postările de la @" + this.props.screenName + ". Pentru a solicita accesul, fă clic pe Urmărește. "];
                            },
                        },
                        {
                            key: "da9d52d7",
                            get: function () {
                                return ["X suspendă conturile care încalcă "];
                            },
                        },
                        {
                            key: "b028aec5",
                            get: function () {
                                return ["Trebuie să știm dacă acest cont X ", " îți aparține. Dacă nu îți aparține, vom merge mai departe și vom elimina ", " din acesta."];
                            },
                        },
                        {
                            key: "c43645ad",
                            get: function () {
                                return ["În cazul în care contul X ", " îți aparține și dorești să te dezabonezi de la viitoarele notificări prin e-mail, accesează "];
                            },
                        },
                        {
                            key: "b8e3884f",
                            get: function () {
                                return ["Ți-am eliminat adresa de e-mail ", " din contul X ", ". Acum nu vei primi notificările destinate contului."];
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
                                return ["Este posibil ca cineva să îți fi introdus din greșeală adresa de e-mail în momentul în care s-a înregistrat pentru contul său X. Sau poate că o folosește în mod abuziv. Poți raporta contul pentru a ajuta la identificarea și eliminarea spamului de pe X. "];
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
                                return ["Încearcă să urmărești ", " pentru a profita la maximum de Articole populare."];
                            },
                        },
                        {
                            key: "dc3a6d2d",
                            get: function () {
                                return ["Am urmărit pe @" + this.props.screenName + ". ", "."];
                            },
                        },
                        {
                            key: "j5668d8f",
                            get: function () {
                                return ["Atunci când asculți în modul anonim, nu vei fi vizibil și nu vei putea participa. "];
                            },
                        },
                        {
                            key: "fafd5f6f",
                            get: function () {
                                return ["Unul dintre avantajele de a fi abonat este accesul exclusiv la spații precum acesta. Doar abonații contului @" + this.props.screenName + " se pot alătura acestui spațiu. ", "."];
                            },
                        },
                        {
                            key: "b1e1d521",
                            get: function () {
                                return ["Mărește impactul evaluării tale la " + this.props.ratingImpactToEarnIn + ", de la scorul tău curent de " + this.props.currentImpact + ", iar capacitatea ta de a scrie va fi deblocată."];
                            },
                        },
                        {
                            key: "e3a1e2a3",
                            get: function () {
                                return ["Despre linkul din această postare (", ") și ar trebui să apară la poate postările care includ acest link"];
                            },
                        },
                        {
                            key: "eb0960b9",
                            get: function () {
                                return ["Sigur crezi că această notă va fi utilă pentru ", " cu această imagine, chiar dacă postările spun altceva?"];
                            },
                        },
                        {
                            key: "c14fcfe5",
                            get: function () {
                                return ["Sigur crezi că această notă va fi utilă pentru toate postările cu această imagine, chiar dacă postările spun altceva?"];
                            },
                        },
                        {
                            key: "f8d04b49",
                            get: function () {
                                return ["Sigur crezi că această notă va fi utilă pentru ", " cu acest videoclip, chiar dacă postările spun altceva?"];
                            },
                        },
                        {
                            key: "ef94efc3",
                            get: function () {
                                return ["Sigur crezi că această notă va fi utilă pentru toate postările cu acest videoclip, chiar dacă postările spun altceva?"];
                            },
                        },
                        {
                            key: "a89cdd31",
                            get: function () {
                                return ["Sigur crezi că această notă va fi utilă pentru ", " cu acest conținut media, chiar dacă postările spun altceva?"];
                            },
                        },
                        {
                            key: "f19fb541",
                            get: function () {
                                return ["Sigur crezi că această notă va fi utilă pentru toate postările cu acest conținut media, chiar dacă postările spun altceva?"];
                            },
                        },
                        {
                            key: "i9e31fe5",
                            get: function () {
                                return ["Află mai multe despre "];
                            },
                        },
                        {
                            key: "h14bda75",
                            get: function () {
                                return ["Cererile sunt anonimizate și puse ", " pentru transparență"];
                            },
                        },
                        {
                            key: "c43ef159",
                            get: function () {
                                return ["Dacă vrei să ajuți la scrierea și evaluarea Notelor Comunității, ", "."];
                            },
                        },
                        {
                            key: "c815dfaf",
                            get: function () {
                                return ["Pentru a menține calitatea ridicată a cererilor și a preveni spamul, conturile trebuie să aibă un număr de telefon verificat pentru a solicita o Notă din partea Comunității. "];
                            },
                        },
                        {
                            key: "a7eaa695",
                            get: function () {
                                return ["Ajută la găsirea "];
                            },
                        },
                        {
                            key: "f863bea7",
                            get: function () {
                                return ["Nu afectează postările, dar poate ajuta la ", " a celor apreciate de multe persoane"];
                            },
                        },
                        {
                            key: "e59bfa27",
                            get: function () {
                                return ["", " acestei caracteristici experimentale"];
                            },
                        },
                        {
                            key: "ffd3d1a1",
                            get: function () {
                                return ["Evaluările sunt anonimizate și puse la dispoziția publicului pentru transparență. "];
                            },
                        },
                        {
                            key: "bd9cf141",
                            get: function () {
                                return ["În calitate de autor al postării, poți "];
                            },
                        },
                        {
                            key: "e837f62f",
                            get: function () {
                                return [this.props.impactDisplayNumber + " Impactul evaluării"];
                            },
                        },
                        {
                            key: "f2bad803",
                            get: function () {
                                return [this.props.impactDisplayNumber + " Impact în formă scrisă"];
                            },
                        },
                        {
                            key: "g062ed0f",
                            get: function () {
                                return ["Nota a fost adăugată inițial la o imagine dintr-o postare care a fost ștearsă ulterior, și este posibil să fie afișată în alte postări care includ această imagine"];
                            },
                        },
                        {
                            key: "j4f06e2f",
                            get: function () {
                                return ["Nota a fost adăugată inițial la imaginea din ", " și poate fi afișată în alte postări care includ această imagine"];
                            },
                        },
                        {
                            key: "ida22561",
                            get: function () {
                                return ["Nota a fost adăugată inițial la un videoclip dintr-o postare care a fost ștearsă ulterior, și este posibil să fie afișată în alte postări care includ acest videoclip"];
                            },
                        },
                        {
                            key: "g68aa88d",
                            get: function () {
                                return ["Nota a fost adăugată inițial la videoclipul din ", " și poate fi afișată în alte postări care includ acest videoclip"];
                            },
                        },
                        {
                            key: "ia62f949",
                            get: function () {
                                return ["Nota a fost adăugată inițial la un conținut media dintr-o postare care a fost ștearsă ulterior, și este posibil să fie afișată în alte postări care includ acest conținut media"];
                            },
                        },
                        {
                            key: "c6eb7cbb",
                            get: function () {
                                return ["Nota a fost adăugată inițial la conținutul media din ", " și poate fi afișată în alte postări care includ acest conținut media"];
                            },
                        },
                        {
                            key: "f9b81033",
                            get: function () {
                                return ["Nota a fost scrisă inițial la o postare care a fost ștearsă ulterior, și este posibil să fie afișată în alte postări care includ un link către "];
                            },
                        },
                        {
                            key: "de254823",
                            get: function () {
                                return ["Notă scrisă inițial la ", " și care se poate afișa la alte postări care includ un link către "];
                            },
                        },
                        {
                            key: "de5532bd",
                            get: function () {
                                return ["Poate fi afișată la ", " care conțin acest videoclip, dacă persoanele sunt de acord cu acest lucru."];
                            },
                        },
                        {
                            key: "ib6805bd",
                            get: function () {
                                return ["Poate fi afișată la postările care conțin acest videoclip, dacă persoanele sunt de acord cu acest lucru."];
                            },
                        },
                        {
                            key: "g185d44d",
                            get: function () {
                                return ["Poate fi afișată la ", " care conțin această imagine, dacă persoanele sunt de acord cu acest lucru."];
                            },
                        },
                        {
                            key: "aeebdd99",
                            get: function () {
                                return ["Poate fi afișată la postările care conțin această imagine, dacă persoanele sunt de acord cu acest lucru."];
                            },
                        },
                        {
                            key: "d54bfbd9",
                            get: function () {
                                return ["Poate fi afișată la ", " care includ acest conținut media, dacă persoanele sunt de acord cu acest lucru."];
                            },
                        },
                        {
                            key: "a9efbf0f",
                            get: function () {
                                return ["Poate fi afișată la postările care includ acest conținut media, dacă persoanele sunt de acord cu acest lucru."];
                            },
                        },
                        {
                            key: "jef71e81",
                            get: function () {
                                return ["Nota a fost adăugată inițial la un videoclip dintr-o postare care a fost ștearsă ulterior, și este afișată în ", " care includ acest videoclip"];
                            },
                        },
                        {
                            key: "ie594609",
                            get: function () {
                                return ["Nota a fost adăugată inițial la videoclipul din ", "și este afișată în ", " care includ acest videoclip"];
                            },
                        },
                        {
                            key: "a48e0b6b",
                            get: function () {
                                return ["Nota a fost adăugată inițial la un videoclip dintr-o postare care a fost ștearsă ulterior, și este posibil să fie afișată în ", " care includ acest videoclip"];
                            },
                        },
                        {
                            key: "a0e626a3",
                            get: function () {
                                return ["Nota a fost adăugată inițial la videoclipul din ", "și poate fi afișată în ", " care includ acest videoclip"];
                            },
                        },
                        {
                            key: "fcd2eeeb",
                            get: function () {
                                return ["Nota a fost adăugată inițial la o imagine dintr-o postare care a fost ștearsă ulterior, și este afișată în ", " care includ această imagine"];
                            },
                        },
                        {
                            key: "j300ac63",
                            get: function () {
                                return ["Nota a fost adăugată inițial la imaginea din ", "și este afișată în ", " care includ această imagine"];
                            },
                        },
                        {
                            key: "bf532f23",
                            get: function () {
                                return ["Nota a fost adăugată inițial la o imagine dintr-o postare care a fost ștearsă ulterior, și este posibil să fie afișată în ", " care includ această imagine"];
                            },
                        },
                        {
                            key: "bda86c55",
                            get: function () {
                                return ["Nota a fost adăugată inițial la imaginea din ", "și poate fi afișată în ", " care includ această imagine"];
                            },
                        },
                        {
                            key: "a13701bd",
                            get: function () {
                                return ["Nota a fost adăugată inițial la un conținut media dintr-o postare care a fost ștearsă ulterior și este afișată în ", " care includ acest conținut media"];
                            },
                        },
                        {
                            key: "e2a0a791",
                            get: function () {
                                return ["Nota a fost adăugată inițial la conținutul media din ", "și este afișată în ", " care includ acest conținut media"];
                            },
                        },
                        {
                            key: "b8e4bb0b",
                            get: function () {
                                return ["Nota a fost adăugată inițial la un conținut media dintr-o postare care a fost ștearsă ulterior, și este posibil să fie afișată în ", " care includ acest conținut media"];
                            },
                        },
                        {
                            key: "hada7e59",
                            get: function () {
                                return ["Nota a fost adăugată inițial la conținutul media din ", "și poate fi afișată în ", " care includ acest conținut media"];
                            },
                        },
                        {
                            key: "e8969de9",
                            get: function () {
                                return ["Afișată la ", " care includ un link către "];
                            },
                        },
                        {
                            key: "a389fb7b",
                            get: function () {
                                return ["Se poate afișa la ", " care includ un link către "];
                            },
                        },
                        {
                            key: "gd8d8205",
                            get: function () {
                                return ["Notă inițial la o postare care a fost ștearsă ulterior. Se afișează în ", " care includ un link către "];
                            },
                        },
                        {
                            key: "i981a661",
                            get: function () {
                                return ["Notă inițial la ", ". Se afișează la ", " care includ un link către "];
                            },
                        },
                        {
                            key: "jceb2edb",
                            get: function () {
                                return ["Notă inițial la o postare care a fost ștearsă ulterior. Este posibil să se afișeze în ", " care includ un link către "];
                            },
                        },
                        {
                            key: "f20a22a1",
                            get: function () {
                                return ["Notă inițial la ", ". Se poate afișa la ", " care includ un link către "];
                            },
                        },
                        {
                            key: "f43e2fdf",
                            get: function () {
                                return ["Se afișează unui grup experimental mic pe X · Peste " + this.props.impressionTruncated + " vizualizări"];
                            },
                        },
                        {
                            key: "j72bc9ab",
                            get: function () {
                                return ["Se afișează unui grup experimental mic pe X"];
                            },
                        },
                        {
                            key: "d60e4375",
                            get: function () {
                                return ["Se afișează pe X · Peste " + this.props.impressionTruncated + " vizualizări"];
                            },
                        },
                        {
                            key: "bf62daf1",
                            get: function () {
                                return ["Afișată pe X"];
                            },
                        },
                        {
                            key: "i8fa1313",
                            get: function () {
                                return ["Evaluările sunt anonime și disponibile publicului pentru a asigura transparență. Află cum Notele Comunității pune datele ", "."];
                            },
                        },
                        {
                            key: "had203a9",
                            get: function () {
                                return ["Ai evaluat această notă drept ", "."];
                            },
                        },
                        {
                            key: "h42a21df",
                            get: function () {
                                return ["Ai evaluat această notă drept ", "."];
                            },
                        },
                        {
                            key: "c3d1a1b1",
                            get: function () {
                                return ["Ai evaluat această notă drept ", "."];
                            },
                        },
                        {
                            key: "c7f250eb",
                            get: function () {
                                return ["Ar trebui să fie afișată această notă la ", " care includ un link către ", "?"];
                            },
                        },
                        {
                            key: "bc2fde51",
                            get: function () {
                                return ["Ar trebui să fie afișată această notă la ", " care includ acest videoclip?"];
                            },
                        },
                        {
                            key: "e80d1f67",
                            get: function () {
                                return ["Ar trebui să fie afișată această notă la ", " care includ această imagine?"];
                            },
                        },
                        {
                            key: "c692f6b5",
                            get: function () {
                                return ["Ar trebui să fie afișată această notă la ", " care includ acest conținut media?"];
                            },
                        },
                        {
                            key: "g46e2949",
                            get: function () {
                                return ["Ar trebui să fie afișată această notă la toate postările care includ un link către ", "?"];
                            },
                        },
                        {
                            key: "c57661e9",
                            get: function () {
                                return ["Ar trebui să fie afișată această notă la toate postările care includ acest videoclip?"];
                            },
                        },
                        {
                            key: "bb286921",
                            get: function () {
                                return ["Ar trebui să fie afișată această notă la toate postările care includ această imagine?"];
                            },
                        },
                        {
                            key: "df397f55",
                            get: function () {
                                return ["Ar trebui să fie afișată această notă la toate postările care includ acest conținut media?"];
                            },
                        },
                        {
                            key: "b936a16b",
                            get: function () {
                                return ["Ai idei sau sugestii pentru a îmbunătăți Notele Comunității? "];
                            },
                        },
                        {
                            key: "e77dac87",
                            get: function () {
                                return ["Afișează încă " + this.props.remainingCount + r(this.props.remainingCount, "(de) postări", "postare", "(de) postări") + " citate de solicitanți"];
                            },
                        },
                        {
                            key: "if0d6dd7",
                            get: function () {
                                return ["Contributorii la Notele Comunității folosesc aliasuri · "];
                            },
                        },
                        {
                            key: "f49cbf83",
                            get: function () {
                                return ["Această funcție este nouă în Notele Comunității, nu ezita "];
                            },
                        },
                        {
                            key: "a94c6db7",
                            get: function () {
                                return ["Mărește impactul evaluării tale la " + this.props.requiredRatingImpact + ", de la scorul tău curent de " + this.props.currentRatingImpact + "."];
                            },
                        },
                        {
                            key: "f52f0cbd",
                            get: function () {
                                return [this.props.num + " (de) note șterse"];
                            },
                        },
                        {
                            key: "ccdfbd75",
                            get: function () {
                                return ["Pentru a debloca capacitatea ta de scriere, mărește acest scor la " + this.props.requiredRatingImpact];
                            },
                        },
                        {
                            key: "a32c38ad",
                            get: function () {
                                return ["Vrei să începi să scrii note? Crește impactul evaluării tale la cel puțin " + this.props.requiredRatingImpact + "."];
                            },
                        },
                        {
                            key: "d458f69d",
                            get: function () {
                                return ["Notele Comunității păstrează starea notelor șterse pentru a atribui în mod corect reputația la autorul notei și la evaluatori. "];
                            },
                        },
                        {
                            key: "i42495ad",
                            get: function () {
                                return ["Contextul este scris de persoane care utilizează X și este afișat când este evaluat drept util de către ceilalți. "];
                            },
                        },
                        {
                            key: "c475a5d3",
                            get: function () {
                                return ["Modalitatea de utilizare a seturilor de date este guvernată de Acordul și Politica pentru dezvoltatori X. Dacă faci clic pe pictograma Descarcă înseamnă că accepți ", "."];
                            },
                        },
                        {
                            key: "g19fcc5b",
                            get: function () {
                                return ["Nr. fișier " + this.props.fileIndex + " din " + this.props.totalFiles];
                            },
                        },
                        {
                            key: "e7e44bab",
                            get: function () {
                                return ["Încearcă să cauți altceva sau verifică ", " pentru a vedea dacă ești protejat de conținut potențial sensibil."];
                            },
                        },
                        {
                            key: "b3a3ce8d",
                            get: function () {
                                return ["Activ în urmă cu "];
                            },
                        },
                        {
                            key: "d46c6e8f",
                            get: function () {
                                return ["Sigur vrei să îl faci moderator pe utilizatorul ", "?"];
                            },
                        },
                        {
                            key: "c3a1f2bf",
                            get: function () {
                                return ["Sigur vrei să elimini rolul de moderator de la utilizatorul ", "?"];
                            },
                        },
                        {
                            key: "c2696cdf",
                            get: function () {
                                return ["Introdu ", " pentru a continua"];
                            },
                        },
                        {
                            key: "b160df39",
                            get: function () {
                                return ["", " a ascuns o postare"];
                            },
                        },
                        {
                            key: "h1513297",
                            get: function () {
                                return ["", " a fixat o postare"];
                            },
                        },
                        {
                            key: "e523e9f1",
                            get: function () {
                                return ["", " a anulat fixarea unei postări"];
                            },
                        },
                        {
                            key: "g93119e7",
                            get: function () {
                                return ["", " a anulat ascunderea unei postări"];
                            },
                        },
                        {
                            key: "c6e18a45",
                            get: function () {
                                return ["", " a eliminat un membru"];
                            },
                        },
                        {
                            key: "ef3b57ef",
                            get: function () {
                                return ["", " a reprimit un membru"];
                            },
                        },
                        {
                            key: "e7878d67",
                            get: function () {
                                return ["", " s-a alăturat acestei comunități"];
                            },
                        },
                        {
                            key: "hd2489bb",
                            get: function () {
                                return ["", " a părăsit această comunitate"];
                            },
                        },
                        {
                            key: "b4aa9d7b",
                            get: function () {
                                return ["", " a aprobat o cerere de membru"];
                            },
                        },
                        {
                            key: "c5900395",
                            get: function () {
                                return ["", " a refuzat o cerere de membru"];
                            },
                        },
                        {
                            key: "g561eb89",
                            get: function () {
                                return ["", " a reaprobat o cerere de membru"];
                            },
                        },
                        {
                            key: "j5602f3b",
                            get: function () {
                                return ["Raportată de ", " și "];
                            },
                        },
                        {
                            key: "dd132edd",
                            get: function () {
                                return ["Raportată de "];
                            },
                        },
                        {
                            key: "je0779b7",
                            get: function () {
                                return ["Raportat de către "];
                            },
                        },
                        {
                            key: "a0071f71",
                            get: function () {
                                return ["Ai ascuns postarea utilizatorului @"];
                            },
                        },
                        {
                            key: "c4ec9d43",
                            get: function () {
                                return ["Ai păstrat postarea utilizatorului @"];
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
                                return ["Creat la " + this.props.date + " de către "];
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
                                return ["Pentru a utiliza această funcție, comută la un cont care îți aparține.\n\nÎn calitate de contributor, poți trimite mesaje directe, publica postări și crea Liste, pe care le și poți vizualiza.\n\nCăutăm constant modalități de a îmbunătăți funcția Delegare. Dacă dorești, ", "."];
                            },
                        },
                        {
                            key: "g29b68f9",
                            get: function () {
                                return ["Pentru a utiliza această funcție, comută la un cont care îți aparține.\n\nÎn calitate de administrator, poți trimite mesaje directe, publica postări și crea Liste, pe care le poți și vizualiza. De asemenea, poți invita sau elimina contributori la/de la cont și poți vizualiza analiza postărilor.\n\nCăutăm constant modalități de a îmbunătăți funcția Delegare. Dacă dorești, ", "."];
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
                                return ["", " pentru a vedea mai multe informații despre acest post"];
                            },
                        },
                        {
                            key: "ie9320f7",
                            get: function () {
                                return ["Începe să vezi locuri de muncă pentru ", " ", " în cronologie"];
                            },
                        },
                        {
                            key: "c70aad4b",
                            get: function () {
                                return ["Se afișează locuri de muncă pentru ", " "];
                            },
                        },
                        {
                            key: "cc70dc63",
                            get: function () {
                                return ["Vizualizarea postărilor nu va debloca utilizatorul @" + this.props.screenName + ". "];
                            },
                        },
                        {
                            key: "d6c6deaf",
                            get: function () {
                                return ["Precomandă pentru "];
                            },
                        },
                        {
                            key: "gbef9649",
                            get: function () {
                                return ["Află mai multe despre politicile și programele noastre de monetizare ", "."];
                            },
                        },
                        {
                            key: "gfc900b9",
                            get: function () {
                                return ["(", " taxă)"];
                            },
                        },
                        {
                            key: "bd9265e3",
                            get: function () {
                                return ["(", "% taxe, min. ", ")"];
                            },
                        },
                        {
                            key: "b5648ffb",
                            get: function () {
                                return ["", "% taxe, min. "];
                            },
                        },
                        {
                            key: "da2a091b",
                            get: function () {
                                return ["Prin achiziționare, ești de acord cu ", " și ", ". Abonamentele se reînnoiesc automat până când le anulezi, așa cum se descrie în Condiții. Poți anula oricând."];
                            },
                        },
                        {
                            key: "c23c08c9",
                            get: function () {
                                return ["Prin achiziționare, ești de acord cu ", " și ", "."];
                            },
                        },
                        {
                            key: "d39ad44d",
                            get: function () {
                                return ["Aprecieri, menționări, repostări și multe altele – atunci când acestea provin de la un cont verificat, le vei găsi aici. "];
                            },
                        },
                        {
                            key: "b004e8bf",
                            get: function () {
                                return ["Află mai multe despre accesul acordat aplicațiilor terțe în ", "."];
                            },
                        },
                        {
                            key: "afd52f45",
                            get: function () {
                                return ["Creat de ", ". Citește ", " și ", " de la " + this.props.orgName + "."];
                            },
                        },
                        {
                            key: "b88304a3",
                            get: function () {
                                return ["Trimite mesaje la ", " pentru asistență."];
                            },
                        },
                        {
                            key: "j766b689",
                            get: function () {
                                return ["", " pentru a începe."];
                            },
                        },
                        {
                            key: "ef7ce733",
                            get: function () {
                                return ["Sincronizat de pe "];
                            },
                        },
                        {
                            key: "i958b2bd",
                            get: function () {
                                return ["Distribuit de pe "];
                            },
                        },
                        {
                            key: "b2c03e03",
                            get: function () {
                                return ["Pentru întrebări referitoare la Angajări X, trimite-ne un e-mail la ", "."];
                            },
                        },
                        {
                            key: "c57cd3a3",
                            get: function () {
                                return ["(Pentru organizații, ", ")"];
                            },
                        },
                        {
                            key: "bec92f3b",
                            get: function () {
                                return ["Începând să utilizezi ", " și abonându-te, ești de acord cu ", ". După perioada de încercare gratuită de " + this.props.numberOfDays + "zile, ți se va factura suma aferentă planului anual sau lunar pe care l-ai selectat la înregistrare, cu excepția situației în care anulezi în cursul perioadei de încercare gratuită de " + this.props.numberOfDays + " zile. Abonamentele se reînnoiesc automat până când le anulezi, urmând indicațiile din Condiții. ", " Anulează cu cel puțin 24 de ore înainte de reînnoire, pentru a evita taxe suplimentare. Pentru abonare, este necesar un număr de telefon verificat. Dacă te-ai abonat pe o altă platformă, gestionează-ți abonamentul prin acea platformă."];
                            },
                        },
                        {
                            key: "b2138d0f",
                            get: function () {
                                return ["Dacă te abonezi, accepți ", ". Abonamentele se reînnoiesc automat până la anulare, așa cum este menționat în ", ". ", ". Anulează cu cel puțin 24 de ore înainte de reînnoire pentru a evita taxele suplimentare. Atunci când faci upgrade, abonamentul tău curent și caracteristicile asociate vor trece imediat la noul nivel de abonament. Ți se va factura imediat prețul pentru noul nivel, iar soldul, calculat proporțional din ciclul curent de facturare, va fi creditat din tariful total de astăzi. Nu vei primi nicio rambursare pentru nicio parte din abonamentul anterior, cu excepția cazului în care acest lucru este cerut prin lege."];
                            },
                        },
                        {
                            key: "c2255911",
                            get: function () {
                                return ["Dacă te abonezi, accepți ", ". Abonamentele se reînnoiesc automat până când sunt anulate, așa cum se descrie în ", ". ", ". Anulează cu cel puțin 24 de ore înainte de reînnoire pentru a evita taxele suplimentare. Când retrogradezi abonamentul, abonamentul curent va rămâne activ până la următorul ciclu de facturare, când va începe noul abonament. Ți se va factura prețul pentru noul abonament la începutul următorului ciclu de facturare."];
                            },
                        },
                        {
                            key: "e647175f",
                            get: function () {
                                return ["Dacă te abonezi, accepți ", ". Abonamentele se reînnoiesc automat până când sunt anulate, așa cum se descrie în ", ". ", ". Anulează cu cel puțin 24 de ore înainte de reînnoire pentru a evita taxele suplimentare. Când schimbi abonamentul, te vei bucura în continuare de caracteristicile asociate nivelului tău. Ți se va factura imediat prețul pentru noul plan anual, iar soldul, calculat proporțional din ciclul de facturare lunar, va fi creditat din tariful total de astăzi."];
                            },
                        },
                        {
                            key: "eaccb9c9",
                            get: function () {
                                return ["Dacă te abonezi, accepți ", ". Abonamentele se reînnoiesc automat până când sunt anulate, așa cum se descrie în ", ". ", ". Anulează cu cel puțin 24 de ore înainte de reînnoire pentru a evita taxele suplimentare. Atunci când schimbi abonamentul, te vei bucura în continuare de caracteristicile asociate nivelului tău. Ți se va factura imediat prețul lunar pentru respectivul nivel, iar creditul rămas, calculat proporțional din plata anuală, va fi creditat din tariful lunar până când se termină."];
                            },
                        },
                        {
                            key: "db11f87d",
                            get: function () {
                                return ["Abonează-te la ", " " + this.props.newPrice + "/" + this.props.interval];
                            },
                        },
                        {
                            key: "e4219e13",
                            get: function () {
                                return ["", " " + this.props.newPrice + "/" + this.props.interval + " facturat anual"];
                            },
                        },
                        {
                            key: "eeb5fb11",
                            get: function () {
                                return ["Informațiile privind adresa sunt partajate cu Google. Consultă ", " și ", " pentru a afla mai multe."];
                            },
                        },
                        {
                            key: "f9b1387f",
                            get: function () {
                                return ["Doar administratorii și moderatorii Comunităților le pot pune în prim plan pe profilul lor. Vrei să-ți ", "?"];
                            },
                        },
                        {
                            key: "ef72b01b",
                            get: function () {
                                return ["Pentru a găsi un centru de criză în apropierea ta, accesează "];
                            },
                        },
                        {
                            key: "e6c21d5b",
                            get: function () {
                                return ["Dacă te simți în pericol, recomandăm să contactezi autoritățile locale de aplicare a legii. Acestea pot consulta ", " dacă au întrebări ulterioare."];
                            },
                        },
                        {
                            key: "e1d95725",
                            get: function () {
                                return ["Poți opri oricând urmărirea, din ", "."];
                            },
                        },
                        {
                            key: "gd67df1d",
                            get: function () {
                                return ["Data ultimei actualizări pentru "];
                            },
                        },
                        {
                            key: "e420d1ed",
                            get: function () {
                                return ["Persoanele nu vor fi notificate când îți editezi Cercul. Orice persoană pe care o adaugi va putea vedea postările tale anterioare publicate în Cercul tău. "];
                            },
                        },
                        {
                            key: "gc31d3e9",
                            get: function () {
                                return ["De câte ori a fost văzută această postare. Pentru a afla mai multe, accesează ", "."];
                            },
                        },
                        {
                            key: "he0e6ed7",
                            get: function () {
                                return ["De câte ori a fost văzută această postare. Poate să dureze câteva minute până apare numărul de vizualizări. Pentru a afla mai multe, accesează ", "."];
                            },
                        },
                        {
                            key: "c780f52b",
                            get: function () {
                                return ["Numărul de vizualizări nu este disponibil pentru această postare. Pentru a afla mai multe, accesează ", "."];
                            },
                        },
                        {
                            key: "fc2dfb3f",
                            get: function () {
                                return ["Dacă faci clic pe Creează o promoție, confirmi faptul că ai citit și ți-ai exprimat acordul față de ", " și ", "."];
                            },
                        },
                        {
                            key: "fcf4b2a5",
                            get: function () {
                                return ["Dacă faci clic pe Creează o promoție, confirmi faptul că ai citit și ți-ai exprimat acordul față de ", "."];
                            },
                        },
                        {
                            key: "f54ad505",
                            get: function () {
                                return ["Unele opțiuni de vizare nu sunt disponibile pentru acest cont pentru reclame, în conformitate cu ", "."];
                            },
                        },
                        {
                            key: "b3816c8b",
                            get: function () {
                                return ["Dacă faci clic pe Promovează o postare, confirmi faptul că ai citit și ți-ai exprimat acordul față de ", " și ", "."];
                            },
                        },
                        {
                            key: "ee48f791",
                            get: function () {
                                return ["Dacă faci clic pe Promovează o postare, confirmi faptul că ai citit și ți-ai exprimat acordul față de ", "."];
                            },
                        },
                        {
                            key: "f5a533b1",
                            get: function () {
                                return ["Această postare nu are răspunsuri ascunse, dar este posibil ca postările protejate să nu fie afișate. "];
                            },
                        },
                        {
                            key: "cd5e4a77",
                            get: function () {
                                return ["Făcând clic mai jos pentru a efectua această achiziție, ești de acord să respecți ", "."];
                            },
                        },
                        {
                            key: "aa4026bf",
                            get: function () {
                                return ["Astfel, împiedici ca ", " să te includă în vreuna dintre listele sale, inclusiv în aceasta."];
                            },
                        },
                        {
                            key: "fca299bb",
                            get: function () {
                                return ["Dezvăluie adresa ta de e-mail utilizatorului " + this.props.creatorName + ". Dacă ești acord, accepți ca X să îi dezvăluie adresa ta de e-mail creatorului, pentru comunicări în afara platformei și accepți ", "."];
                            },
                        },
                        {
                            key: "ccd45e5f",
                            get: function () {
                                return ["Dăruiește un an de " + this.props.tier + " pentru @" + this.props.screenName + " la prețul de " + this.props.price + ". După finalizarea plății, va primi o notificare privind cadoul pe care i l-ai trimis."];
                            },
                        },
                        {
                            key: "h7f3e309",
                            get: function () {
                                return ["Prețul abonamentului cadou este debitat la achiziție și nu este rambursabil. Este destinat să fie utilizat o singură dată, nu se poate înlocui, nu se poate combina și nu are valoare în numerar. Abonamentul va începe după ce X va revizui și îl va aloca destinatarului, care trebuie să accepte ", " și politicile. Dacă destinatarul nu îndeplinește cerințele de eligibilitate, anulează abonamentul sau nu acceptă termenele și condițiile, cadoul nu se poate valorifica și nu este rambursabil. Se pot aplica taxe. Condițiile pot varia. ", "."];
                            },
                        },
                        {
                            key: "j0a20bf1",
                            get: function () {
                                return ["Organizațiile au bife aurii, iar persoanele au bife albastre. Utilizarea necorespunzătoare va duce la anularea abonamentului fără rambursare, așa cum prevăd ", " noastre."];
                            },
                        },
                        {
                            key: "j1b50481",
                            get: function () {
                                return ["Organizațiile au avataruri pătrate, iar persoanele, avataruri rotunde. Utilizarea necorespunzătoare va duce la anularea abonamentului fără rambursare, așa cum prevăd ", " noastre."];
                            },
                        },
                        {
                            key: "ebebbb93",
                            get: function () {
                                return ["Configurează ce cont pentru reclame se utilizează pentru locurile de muncă atunci când sunt promovate prin portalul ", "."];
                            },
                        },
                        {
                            key: "bd5a78a1",
                            get: function () {
                                return ["Nu s-au găsit conturi eligibile. Consultați pagina ", " pentru următorii pași."];
                            },
                        },
                        {
                            key: "b94bf5f5",
                            get: function () {
                                return ["Dacă anulezi participarea la Organizații verificate, organizația ta își va pierde imediat bifa aurie."];
                            },
                        },
                        {
                            key: "d4109f93",
                            get: function () {
                                return ["În plus, toate conturile afiliate vor fi anulate imediat și își vor pierde bifele aurii sau albastre și ecusoanele de afiliere."];
                            },
                        },
                        {
                            key: "c5b26ddf",
                            get: function () {
                                return ["Anularea va duce la pierderea imediată a bifelor și a tututor caracteristicilor contra cost din organizația ta și din toate conturile afiliate."];
                            },
                        },
                        {
                            key: "h06e7c87",
                            get: function () {
                                return ["Dacă te hotărăști astăzi să rămâi, vom adăuga gratuit în portalul tău un credit de reclame suplimentar, în valoare de " + this.props.creditAmount + " USD, la fiecare " + this.props.daysOfCouponInterval + " de zile, pentru următoarele " + this.props.totalDays + " zile. Când soliciți această ofertă, echipa noastră de asistență te va contacta pentru a te ajuta să aduci valoare organizației tale cu ajutorul acestui credit."];
                            },
                        },
                        {
                            key: "b602e60f",
                            get: function () {
                                return ["Dacă te hotărăști astăzi să rămâi, vom adăuga gratuit în portalul tău un credit de reclame suplimentar, în valoare de " + this.props.creditAmount + " USD, în următoarele " + this.props.daysToWaitForFirstRedeemable + " zile. Când soliciți această ofertă, echipa noastră de asistență te va contacta pentru a te ajuta să aduci valoare organizației tale cu ajutorul acestui credit."];
                            },
                        },
                        {
                            key: "fa5bbb59",
                            get: function () {
                                return ["Aceasta este o ofertă unică și nu va fi disponibilă din nou."];
                            },
                        },
                        {
                            key: "ceadabdd",
                            get: function () {
                                return ["Încă poți reveni și solicita oferta unică, pe care ți-o oferim o singură dată. Nu ți se vor rambursa banii pentru zilele rămase din abonament până la următorul ciclu de facturare. După aceea, nu vei mai fi facturat."];
                            },
                        },
                        {
                            key: "e269f39d",
                            get: function () {
                                return ["Programul Organizații Verificate beneficiază de asistență prioritară la X, pentru toate problemele. Oricare ar fi problema, te putem ajuta să o rezolvi cât mai curând posibil. Dorești să planifici o conversație telefonică cu un membru al echipei Organizații Verificate și să vorbești cu o persoană care te poate ajuta?"];
                            },
                        },
                        {
                            key: "e9565acf",
                            get: function () {
                                return ["Dacă anulezi, vei pierde imediat acces la acest credit gratuit de reclame și la toate creditele gratuite de reclame viitoare, pe care le oferă abonamentul tău. Deoarece ai plătit deja pentru acest beneficiu, îți recomandăm să rămâi pentru a-l putea utiliza."];
                            },
                        },
                        {
                            key: "if6e211f",
                            get: function () {
                                return ["Pentru a crește limita, contactează asistența premium pentru utilizatori verificați ", "."];
                            },
                        },
                        {
                            key: "a994ab9b",
                            get: function () {
                                return ["Costul pentru fiecare afiliat suplimentar este de ", "/"];
                            },
                        },
                        {
                            key: "j4f386b7",
                            get: function () {
                                return ["", " pe an, pentru primul an. Apoi, ", " pe an."];
                            },
                        },
                        {
                            key: "ce9e7f1b",
                            get: function () {
                                return ["Prețul pentru fiecare cont afiliat suplimentar este de ", " pentru fiecare identificator pe an. "];
                            },
                        },
                        {
                            key: "dc107867",
                            get: function () {
                                return ["", "/", " (", ") + ", " pentru fiecare identificator pe ", " (", "). "];
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
                                return ["Revendică reducerea de 30% la planurile anuale și creditul pentru reclame gratuit, în valoare de până la 12.000$, dacă te abonezi înainte de "];
                            },
                        },
                        {
                            key: "f5b357b5",
                            get: function () {
                                return ["Accesul deplin este de ", "/", "(", "). Prețul pentru fiecare cont afiliat suplimentar este de ", " pentru fiecare identificator pe ", ". (", ") "];
                            },
                        },
                        {
                            key: "i83d2543",
                            get: function () {
                                return ["Abonamentul de bază este ", "/", " (", "). "];
                            },
                        },
                        {
                            key: "gc723de9",
                            get: function () {
                                return ["Făcând clic pe Abonare, ești de acord cu ", ". Abonamentele se reînnoiesc automat până când sunt anulate. Toate conturile înregistrate trebuie să primească aprobarea manuală."];
                            },
                        },
                        {
                            key: "ha873011",
                            get: function () {
                                return ["Prin clic pe Abonare, ești de acord cu ", ". Abonamentele se reînnoiesc automat până la anularea acestora. Autenticitatea conturilor înregistrate este verificată. Dacă se înregistrează un cont și acesta nu este o organizație, vei fi respins și nu vei primi rambursarea."];
                            },
                        },
                        {
                            key: "d4918c71",
                            get: function () {
                                return ["+ Pentru o perioadă limitată, credit pentru publicitate în valoare de ", ", pe care să-l aloci organizației tale sau afiliaților săi, ", ", cu asistență dedicată."];
                            },
                        },
                        {
                            key: "a87b1795",
                            get: function () {
                                return ["+ Pentru o perioadă limitată, un credit pentru publicitate în valoare de ", ", pe care să-l aloci organizației tale, ", ", cu asistență dedicată."];
                            },
                        },
                        {
                            key: "fb6fa495",
                            get: function () {
                                return ["", this.props.activeTierName + " de " + this.props.activePriceLabel];
                            },
                        },
                        {
                            key: "fcbe756d",
                            get: function () {
                                return ["", this.props.targetTierName + " de " + this.props.targetPriceLabel];
                            },
                        },
                        {
                            key: "c9384b33",
                            get: function () {
                                return ["Modificarea abonamentului nu este acceptată aici. Contactează asistența Premium pentru utilizatori verificați ", "."];
                            },
                        },
                        {
                            key: "af51185b",
                            get: function () {
                                return ["Dacă ai nevoie de mai mulți afiliați, contactează Vânzări verificate ", "."];
                            },
                        },
                        {
                            key: "d9f35d6f",
                            get: function () {
                                return ["Prin clic pe „" + this.props.action + "”, ești de acord să respecți ", "."];
                            },
                        },
                        {
                            key: "g42a8521",
                            get: function () {
                                return ["Vom utiliza aceste informații pentru a evalua solicitarea pentru ", ". ", "."];
                            },
                        },
                        {
                            key: "aacfbecd",
                            get: function () {
                                return ["Dacă bifezi această casetă, confirmi că ai citit și că accepți termenii și condițiile disponibile ", "."];
                            },
                        },
                        {
                            key: "feb950f3",
                            get: function () {
                                return ["Programul Organizații verificate include acum credit* pentru reclame în valoare de " + this.props.xtc_coupon_value + " (sau echivalentul în moneda locală). Poți să aplici acest credit pentru organizația ta sau pentru oricare dintre afiliații tăi. Pentru valorificare, trebuie doar să alegi mai jos contul pentru reclame."];
                            },
                        },
                        {
                            key: "h9629ab7",
                            get: function () {
                                return ["Programul Organizații verificate include acum credit* pentru reclame în valoare de " + this.props.xtc_coupon_value + " (sau echivalentul în moneda locală). La fiecare 30 de zile, vei primi " + this.props.xtc_coupon_value + "(sau echivalentul în moneda locală), pe care îi poți fi cheltui oricând pe reclame. Poți să aplici acest credit pentru organizația ta sau pentru oricare dintre afiliații tăi. Pentru valorificare, trebuie doar să alegi mai jos contul pentru reclame."];
                            },
                        },
                        {
                            key: "i3781135",
                            get: function () {
                                return ["Îți poți edita ID-urile conturilor pentru reclame ", "."];
                            },
                        },
                        {
                            key: "ff1cc953",
                            get: function () {
                                return ["Ai întâmpinat probleme? Contactează ", " cu orice întrebări."];
                            },
                        },
                        {
                            key: "g46e6cc5",
                            get: function () {
                                return ["Ai la dispoziție ", " zile pentru a cheltui suma de ", " rămasă din acest credit pentru reclame."];
                            },
                        },
                        {
                            key: "be64138f",
                            get: function () {
                                return ["Activează creditul pentru reclame. Dacă ai mai multe conturi pentru reclame, poți edita informațiile mai jos. Îl poți valorifica până pe " + this.props.expiresAt];
                            },
                        },
                        {
                            key: "a5f1d09f",
                            get: function () {
                                return ["Găsește ID-ul contului pentru reclame asociat contului tău X. Îl poți găsi ", "."];
                            },
                        },
                        {
                            key: "e3a90717",
                            get: function () {
                                return ["Ai grijă să adaugi un card de credit ca metodă de plată în Managerul de reclame, selectând „Adaugă o nouă metodă de plată”. Dacă nu ai un card de credit configurat, creditul nu va fi aplicat și reclama nu se va difuza."];
                            },
                        },
                        {
                            key: "b743c7b7",
                            get: function () {
                                return ["Copiază ID-ul contului tău pentru reclame în spațiul de introducere a textului din partea de sus a paginii. Fă clic pentru a activa."];
                            },
                        },
                        {
                            key: "d5128627",
                            get: function () {
                                return ["Lansează-ți campania."];
                            },
                        },
                        {
                            key: "ecd5d325",
                            get: function () {
                                return ["Ai grijă să adaugi un card de credit ca metodă de plată în Managerul de reclame, selectând „Adaugă o nouă metodă de plată”. Dacă nu ai un card de credit configurat, reclama nu se va difuza."];
                            },
                        },
                        {
                            key: "d523367f",
                            get: function () {
                                return ["Vei vedea creditul aplicat în secțiunea Facturare, din Managerul de reclame."];
                            },
                        },
                        {
                            key: "c10a3649",
                            get: function () {
                                return ["Dacă ai făcut publicitate cu X în trecut, este posibil să ai mai multe ID-uri ale conturilor pentru reclame."];
                            },
                        },
                        {
                            key: "fab86f55",
                            get: function () {
                                return ["Poți găsi o listă cu toate ID-urile conturilor pentru reclame ", "."];
                            },
                        },
                        {
                            key: "h9fe1a6d",
                            get: function () {
                                return ["Ai grijă să selectezi ID-ul contului pentru reclame corect pentru a aplica creditul."];
                            },
                        },
                        {
                            key: "a4087047",
                            get: function () {
                                return ["Ca abonat cu acces complet la Organizații Verificate poți folosi creditul pentru oricare dintre conturile afiliate."];
                            },
                        },
                        {
                            key: "ca18299b",
                            get: function () {
                                return ["Pentru a face acest lucru, trebuie să ai acces la ID-ul contului pentru reclame al contului afiliat pe care vrei să difuzezi campania."];
                            },
                        },
                        {
                            key: "b83bc371",
                            get: function () {
                                return ["Îl poți găsi conectându-le la contul afiliat și navigând ", "."];
                            },
                        },
                        {
                            key: "ba6442ef",
                            get: function () {
                                return ["Organizațiile Verificate sunt eligibile pentru a primi credite pe care să le utilizeze pentru ", " și promovări de locuri de muncă. Finalizează acești pași pentru a activa complet capabilitățile pentru reclame."];
                            },
                        },
                        {
                            key: "e52e0c73",
                            get: function () {
                                return ["Organizațiile Verificate sunt eligibile pentru a primi credite pe care să le utilizeze pentru ", ". Finalizează acești pași pentru a activa complet capabilitățile pentru reclame."];
                            },
                        },
                        {
                            key: "d15a83b7",
                            get: function () {
                                return ["Activează cuponul"];
                            },
                        },
                        {
                            key: "j5318247",
                            get: function () {
                                return ["Alege un cont activ bine cotat pentru a primi acest credit de " + this.props.couponAmount + "."];
                            },
                        },
                        {
                            key: "e507417b",
                            get: function () {
                                return ["Poți găsi o listă cu ID-urile conturilor în ", ". De exemplu: o8z6j"];
                            },
                        },
                        {
                            key: "b17ac597",
                            get: function () {
                                return ["Locurile de muncă sunt gata să fie promovate cu acțiunea "];
                            },
                        },
                        {
                            key: "ga44a2f9",
                            get: function () {
                                return ["După ce sunt eligibile, locurile de muncă pot fi promovate cu acțiunea "];
                            },
                        },
                        {
                            key: "dc53cac9",
                            get: function () {
                                return ["Investigăm solicitări trimise de deținătorul mărcii comerciale sau de reprezentantul său autorizat. Pentru detalii, consultă ", "."];
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
                                return ["Introdu identificatorul proprietarilor listei și numele listei, în formatul următor: ", "."];
                            },
                        },
                        {
                            key: "aa36416b",
                            get: function () {
                                return ["Această coloană poate fi golită numai dacă treci la ", "."];
                            },
                        },
                        {
                            key: "baed64e7",
                            get: function () {
                                return ["Consultă Politica noastră de confidențialitate la "];
                            },
                        },
                        {
                            key: "a982261d",
                            get: function () {
                                return ["Consultă Condițiile noastre de utilizare la "];
                            },
                        },
                        {
                            key: "ffe014fd",
                            get: function () {
                                return ["X și partenerii săi folosesc module cookie pentru a-ți furniza un serviciu mai bun, mai sigur și mai rapid și pentru a ne susține activitatea comercială. Unele module cookie sunt necesare pentru utilizarea și îmbunătățirea serviciilor noastre și pentru a ne asigura că aceste servicii funcționează în mod corespunzător. De asemenea, dacă faci clic pe „Accept toate modulele cookie”, vei permite X și partenerilor săi să utilizeze module cookie pentru a-ți oferi reclame și comunicări personalizate în funcție de interesele tale. Dacă faci clic pe „Refuz toate modulele cookie neesențiale”, nu vom utiliza module cookie pentru a colecta date suplimentare pentru reclamele și comunicările personalizate. Pentru a afla mai multe despre practicile noastre în ceea ce privește modulele cookie, vizitează pagina privind modulele cookie din cadrul Centrului nostru de ajutor pe site-ul web "];
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
                                return ["", " de autor"];
                            },
                        },
                        {
                            key: "i0643a5b",
                            get: function () {
                                return ["Articolul "];
                            },
                        },
                        {
                            key: "i74be1ef",
                            get: function () {
                                return ["", " și "];
                            },
                        },
                        {
                            key: "he2cc06d",
                            get: function () {
                                return ["", ", "];
                            },
                        },
                        {
                            key: "hf3108d3",
                            get: function () {
                                return ["", " și "];
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
                                return ["Acest conținut media a fost dezactivat din cauza unei revendicări a drepturilor de autor din partea " + this.props.copyrightHolder + ". Pentru a contesta decizia, te rugăm să folosești ", "."];
                            },
                        },
                        {
                            key: "fcd931ed",
                            get: function () {
                                return ["", " a repostat"];
                            },
                        },
                        {
                            key: "c2588611",
                            get: function () {
                                return ["", ", la " + this.props.time];
                            },
                        },
                        {
                            key: "dbf19261",
                            get: function () {
                                return ["De la "];
                            },
                        },
                        {
                            key: "d7b2c271",
                            get: function () {
                                return ["", " și "];
                            },
                        },
                        {
                            key: "b035fe73",
                            get: function () {
                                return ["", " și "];
                            },
                        },
                        {
                            key: "h5970807",
                            get: function () {
                                return ["Răspuns către "];
                            },
                        },
                        {
                            key: "ge01e6a3",
                            get: function () {
                                return ["Răspuns către ", " ", " "];
                            },
                        },
                        {
                            key: "f5a069ab",
                            get: function () {
                                return ["Răspuns către ", " "];
                            },
                        },
                        {
                            key: "hd7dd197",
                            get: function () {
                                return ["Răspuns către ", " ", " ", " "];
                            },
                        },
                        {
                            key: "g4eb2847",
                            get: function () {
                                return ["Răspuns către ", " ", " "];
                            },
                        },
                        {
                            key: "dfde726b",
                            get: function () {
                                return ["timp de citire "];
                            },
                        },
                        {
                            key: "gec4f969",
                            get: function () {
                                return ["De la "];
                            },
                        },
                        {
                            key: "d6b02329",
                            get: function () {
                                return [this.props.formattedCount + " Membr" + r(this.props.count, "i", "u", "i")];
                            },
                        },
                        {
                            key: "c9e6167d",
                            get: function () {
                                return ["Urmărit de "];
                            },
                        },
                        {
                            key: "ha91d1eb",
                            get: function () {
                                return ["Urmărit de ", " și de "];
                            },
                        },
                        {
                            key: "f1069f9b",
                            get: function () {
                                return ["Urmărit de ", ", de ", " și de "];
                            },
                        },
                        {
                            key: "e8404c1f",
                            get: function () {
                                return ["Urmărit de ", ", ", " și de încă ", " persoane pe care le urmărești"];
                            },
                        },
                        {
                            key: "bb2cd6d3",
                            get: function () {
                                return ["", " și încă ", " sunt populari în acest subiect"];
                            },
                        },
                        {
                            key: "e1e348dd",
                            get: function () {
                                return ["Plătit de "];
                            },
                        },
                        {
                            key: "c7dea0d1",
                            get: function () {
                                return ["Plătit de ", " și neautorizat de niciun candidat și de niciun comitet al unui candidat."];
                            },
                        },
                        {
                            key: "b5c2371b",
                            get: function () {
                                return ["Plătit de ", " · Autorizat de " + this.props.sponsorshipCandidate];
                            },
                        },
                        {
                            key: "b6a393af",
                            get: function () {
                                return ["Doar tu și persoanele din Cercul tău puteți vedea această postare. Repostarea, citarea și distribuirea nu sunt disponibile. "];
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
                                return ["Populare pentru "];
                            },
                        },
                        {
                            key: "ea753bf5",
                            get: function () {
                                return ["Populare pentru ", ", "];
                            },
                        },
                        {
                            key: "ge9aefd5",
                            get: function () {
                                return ["", " de la "];
                            },
                        },
                        {
                            key: "templateReducer",
                            get: function () {
                                var e,
                                    a = o.Children.toArray(this.props.children),
                                    i = ((e = this.props.$i18n), l[d[e]] || s);
                                return function (e, t, r) {
                                    return e.concat(t, a[i(r)]);
                                };
                            },
                        },
                    ]) && c(t.prototype, n),
                    p && c(t, p),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    f
                );
            })(i(111677)._ActualI18NFormatMessage || o.Component);
            t("_ActualI18NFormatMessage", p),
                t("I18NFormatMessage", function (e) {
                    return o.createElement(p, e);
                });
            var f = i(495075);
            i(800694), i(556829), i(530152), i(658610), i(492344), i(663823);
            f._validateParameterTypeNumber, f._validateParameterPresence;
            var m = f._numberRound,
                b = (f._numberFormat, f._numberFormatterFn),
                z = f._pluralGeneratorFn,
                v = (f._currencyNameFormat, f._currencyFormatterFn),
                g = (f._validateParameterTypeDate, f._dateToPartsFormat, f._dateToPartsFormatterFn),
                A = (f._dateFormat, f._dateFormatterFn),
                h = f._relativeTimeFormatterFn,
                C = f._unitFormatterFn;
            (f.b322696590 = b(["", , 1, 0, 1, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", m("truncate"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 K", few: "0 K", other: "0 K" }, 4: { one: "00 K", few: "00 K", other: "00 K" }, 5: { one: "000 K", few: "000 K", other: "000 K" }, 6: { one: "0 mil'.'", few: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mld'.'", few: "0 mld'.'", other: "0 mld'.'" }, 10: { one: "00 mld'.'", few: "00 mld'.'", other: "00 mld'.'" }, 11: { one: "000 mld'.'", few: "000 mld'.'", other: "000 mld'.'" }, 12: { one: "0 tril'.'", few: "0 tril'.'", other: "0 tril'.'" }, 13: { one: "00 tril'.'", few: "00 tril'.'", other: "00 tril'.'" }, 14: { one: "000 tril'.'", few: "000 tril'.'", other: "000 tril'.'" }, maxExponent: 14 }], f("ro").pluralGenerator({}))),
                (f.b95283842 = b(["", , 1, 0, 3, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b636222020 = b(["", , 1, 0, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", m("round"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b1003334920 = b(["", , 1, 0, 0, , , , , , "", "0", "-0", "-", "", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b1038280740 = b(["", , 2, 0, 0, , , , , , "", "00", "-00", "-", "", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1715359699 = b(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", m("truncate"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 K", few: "0 K", other: "0 K" }, 4: { one: "00 K", few: "00 K", other: "00 K" }, 5: { one: "000 K", few: "000 K", other: "000 K" }, 6: { one: "0 mil'.'", few: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mld'.'", few: "0 mld'.'", other: "0 mld'.'" }, 10: { one: "00 mld'.'", few: "00 mld'.'", other: "00 mld'.'" }, 11: { one: "000 mld'.'", few: "000 mld'.'", other: "000 mld'.'" }, 12: { one: "0 tril'.'", few: "0 tril'.'", other: "0 tril'.'" }, 13: { one: "00 tril'.'", few: "00 tril'.'", other: "00 tril'.'" }, 14: { one: "000 tril'.'", few: "000 tril'.'", other: "000 tril'.'" }, maxExponent: 14 }], f("ro").pluralGenerator({}))),
                (f.b1555114375 = b(["", , 1, 0, 1, , , , 3, , " %", "#,##0 %", "-#,##0 % %", "-", " %", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b85257946 = b(["", , 1, 0, 0, , , , 3, , " %", "#,##0 %", "-#,##0 % %", "-", " %", m("round"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a244507815 = b(["", , 1, 0, 1, , , , 3, , " %", "#,##0 %", "-#,##0 % %", "-", " %", m("round"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a936959577 = b(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", m("truncate"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 K", few: "0 K", other: "0 K" }, 4: { one: "00 K", few: "00 K", other: "00 K" }, 5: { one: "000 K", few: "000 K", other: "000 K" }, 6: { one: "0 mil'.'", few: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mld'.'", few: "0 mld'.'", other: "0 mld'.'" }, 10: { one: "00 mld'.'", few: "00 mld'.'", other: "00 mld'.'" }, 11: { one: "000 mld'.'", few: "000 mld'.'", other: "000 mld'.'" }, 12: { one: "0 tril'.'", few: "0 tril'.'", other: "0 tril'.'" }, 13: { one: "00 tril'.'", few: "00 tril'.'", other: "00 tril'.'" }, 14: { one: "000 tril'.'", few: "000 tril'.'", other: "000 tril'.'" }, maxExponent: 14 }], f("ro").pluralGenerator({}))),
                (f.b1640076164 = b(["", , 1, 1, 1, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", m("truncate"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1586415866 = b(["", , 1, 2, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", m("truncate"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1348242626 = b(["", , 1, 0, 0, 1, 2, , 3, , "", "#,##0.###", "-#,##0.###", "-", "", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 K", few: "0 K", other: "0 K" }, 4: { one: "00 K", few: "00 K", other: "00 K" }, 5: { one: "000 K", few: "000 K", other: "000 K" }, 6: { one: "0 mil'.'", few: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mld'.'", few: "0 mld'.'", other: "0 mld'.'" }, 10: { one: "00 mld'.'", few: "00 mld'.'", other: "00 mld'.'" }, 11: { one: "000 mld'.'", few: "000 mld'.'", other: "000 mld'.'" }, 12: { one: "0 tril'.'", few: "0 tril'.'", other: "0 tril'.'" }, 13: { one: "00 tril'.'", few: "00 tril'.'", other: "00 tril'.'" }, 14: { one: "000 tril'.'", few: "000 tril'.'", other: "000 tril'.'" }, maxExponent: 14 }], f("ro").pluralGenerator({}))),
                (f.a594047463 = b(["", , 1, 2, 2, , , 0, 3, , " 'AED'", "#,##0.00 'AED'", "-#,##0.00 'AED' 'AED'", "-", " 'AED'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b715757356 = b(["", , 1, 0, 0, , , , 3, , " 'ALL'", "#,##0 'ALL'", "-#,##0 'ALL' 'ALL'", "-", " 'ALL'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a980079241 = b(["", , 1, 2, 2, , , 0, 3, , " 'ARS'", "#,##0.00 'ARS'", "-#,##0.00 'ARS' 'ARS'", "-", " 'ARS'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1052113879 = b(["", , 1, 2, 2, , , 0, 3, , " 'AUD'", "#,##0.00 'AUD'", "-#,##0.00 'AUD' 'AUD'", "-", " 'AUD'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1375346229 = b(["", , 1, 2, 2, , , 0, 3, , " 'BAM'", "#,##0.00 'BAM'", "-#,##0.00 'BAM' 'BAM'", "-", " 'BAM'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1467698329 = b(["", , 1, 2, 2, , , 0, 3, , " 'BDT'", "#,##0.00 'BDT'", "-#,##0.00 'BDT' 'BDT'", "-", " 'BDT'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1548044656 = b(["", , 1, 2, 2, , , 0, 3, , " 'BGN'", "#,##0.00 'BGN'", "-#,##0.00 'BGN' 'BGN'", "-", " 'BGN'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1522042127 = b(["", , 1, 3, 3, , , 0, 3, , " 'BHD'", "#,##0.000 'BHD'", "-#,##0.000 'BHD' 'BHD'", "-", " 'BHD'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1861118275 = b(["", , 1, 2, 2, , , 0, 3, , " 'BRL'", "#,##0.00 'BRL'", "-#,##0.00 'BRL' 'BRL'", "-", " 'BRL'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a549466414 = b(["", , 1, 0, 0, , , , 3, , " 'BYR'", "#,##0 'BYR'", "-#,##0 'BYR' 'BYR'", "-", " 'BYR'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b2040429075 = b(["", , 1, 2, 2, , , 0, 3, , " 'CAD'", "#,##0.00 'CAD'", "-#,##0.00 'CAD' 'CAD'", "-", " 'CAD'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b1838177976 = b(["", , 1, 2, 2, , , 0, 3, , " 'CHF'", "#,##0.00 'CHF'", "-#,##0.00 'CHF' 'CHF'", "-", " 'CHF'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1062944090 = b(["", , 1, 0, 0, , , , 3, , " 'CLP'", "#,##0 'CLP'", "-#,##0 'CLP' 'CLP'", "-", " 'CLP'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b1648856171 = b(["", , 1, 2, 2, , , 0, 3, , " 'CNY'", "#,##0.00 'CNY'", "-#,##0.00 'CNY' 'CNY'", "-", " 'CNY'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1148831543 = b(["", , 1, 0, 0, , , , 3, , " 'COP'", "#,##0 'COP'", "-#,##0 'COP' 'COP'", "-", " 'COP'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b1318235653 = b(["", , 1, 2, 2, , , 0, 3, , " 'CZK'", "#,##0.00 'CZK'", "-#,##0.00 'CZK' 'CZK'", "-", " 'CZK'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b860169237 = b(["", , 1, 2, 2, , , 0, 3, , " 'DKK'", "#,##0.00 'DKK'", "-#,##0.00 'DKK' 'DKK'", "-", " 'DKK'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b437196619 = b(["", , 1, 2, 2, , , 0, 3, , " 'DZD'", "#,##0.00 'DZD'", "-#,##0.00 'DZD' 'DZD'", "-", " 'DZD'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b82564555 = b(["", , 1, 2, 2, , , 0, 3, , " 'EGP'", "#,##0.00 'EGP'", "-#,##0.00 'EGP' 'EGP'", "-", " 'EGP'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a320090601 = b(["", , 1, 2, 2, , , 0, 3, , " 'EUR'", "#,##0.00 'EUR'", "-#,##0.00 'EUR' 'EUR'", "-", " 'EUR'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1549297052 = b(["", , 1, 2, 2, , , 0, 3, , " 'GBP'", "#,##0.00 'GBP'", "-#,##0.00 'GBP' 'GBP'", "-", " 'GBP'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1723842521 = b(["", , 1, 2, 2, , , 0, 3, , " 'GHS'", "#,##0.00 'GHS'", "-#,##0.00 'GHS' 'GHS'", "-", " 'GHS'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a2065545291 = b(["", , 1, 2, 2, , , 0, 3, , " 'GTQ'", "#,##0.00 'GTQ'", "-#,##0.00 'GTQ' 'GTQ'", "-", " 'GTQ'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b1611586456 = b(["", , 1, 2, 2, , , 0, 3, , " 'HKD'", "#,##0.00 'HKD'", "-#,##0.00 'HKD' 'HKD'", "-", " 'HKD'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b1404717752 = b(["", , 1, 2, 2, , , 0, 3, , " 'HRK'", "#,##0.00 'HRK'", "-#,##0.00 'HRK' 'HRK'", "-", " 'HRK'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b1323447904 = b(["", , 1, 2, 2, , , 0, 3, , " 'HUF'", "#,##0.00 'HUF'", "-#,##0.00 'HUF' 'HUF'", "-", " 'HUF'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1865812714 = b(["", , 1, 0, 0, , , , 3, , " 'IDR'", "#,##0 'IDR'", "-#,##0 'IDR' 'IDR'", "-", " 'IDR'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b681600809 = b(["", , 1, 2, 2, , , 0, 3, , " 'ILS'", "#,##0.00 'ILS'", "-#,##0.00 'ILS' 'ILS'", "-", " 'ILS'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b625266028 = b(["", , 1, 2, 2, , , 0, 3, , " 'INR'", "#,##0.00 'INR'", "-#,##0.00 'INR' 'INR'", "-", " 'INR'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b2069904913 = b(["", , 1, 0, 0, , , , 3, , " 'IQD'", "#,##0 'IQD'", "-#,##0 'IQD' 'IQD'", "-", " 'IQD'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b2006181964 = b(["", , 1, 0, 0, , , , 3, , " 'ISK'", "#,##0 'ISK'", "-#,##0 'ISK' 'ISK'", "-", " 'ISK'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b1191636442 = b(["", , 1, 0, 0, , , , 3, , " 'JPY'", "#,##0 'JPY'", "-#,##0 'JPY' 'JPY'", "-", " 'JPY'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a893002496 = b(["", , 1, 2, 2, , , 0, 3, , " 'KES'", "#,##0.00 'KES'", "-#,##0.00 'KES' 'KES'", "-", " 'KES'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b248721501 = b(["", , 1, 0, 0, , , , 3, , " 'KRW'", "#,##0 'KRW'", "-#,##0 'KRW' 'KRW'", "-", " 'KRW'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1349077929 = b(["", , 1, 3, 3, , , 0, 3, , " 'KWD'", "#,##0.000 'KWD'", "-#,##0.000 'KWD' 'KWD'", "-", " 'KWD'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1495138188 = b(["", , 1, 2, 2, , , 0, 3, , " 'KZT'", "#,##0.00 'KZT'", "-#,##0.00 'KZT' 'KZT'", "-", " 'KZT'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a174251117 = b(["", , 1, 0, 0, , , , 3, , " 'LBP'", "#,##0 'LBP'", "-#,##0 'LBP' 'LBP'", "-", " 'LBP'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b1755326857 = b(["", , 1, 2, 2, , , 0, 3, , " 'MAD'", "#,##0.00 'MAD'", "-#,##0.00 'MAD' 'MAD'", "-", " 'MAD'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b1469035347 = b(["", , 1, 2, 2, , , 0, 3, , " 'MKD'", "#,##0.00 'MKD'", "-#,##0.00 'MKD' 'MKD'", "-", " 'MKD'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b1087621174 = b(["", , 1, 2, 2, , , 0, 3, , " 'MXN'", "#,##0.00 'MXN'", "-#,##0.00 'MXN' 'MXN'", "-", " 'MXN'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b1055297939 = b(["", , 1, 2, 2, , , 0, 3, , " 'MYR'", "#,##0.00 'MYR'", "-#,##0.00 'MYR' 'MYR'", "-", " 'MYR'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b686813060 = b(["", , 1, 2, 2, , , 0, 3, , " 'NGN'", "#,##0.00 'NGN'", "-#,##0.00 'NGN' 'NGN'", "-", " 'NGN'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b460550415 = b(["", , 1, 2, 2, , , 0, 3, , " 'NOK'", "#,##0.00 'NOK'", "-#,##0.00 'NOK' 'NOK'", "-", " 'NOK'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b152094401 = b(["", , 1, 2, 2, , , 0, 3, , " 'NZD'", "#,##0.00 'NZD'", "-#,##0.00 'NZD' 'NZD'", "-", " 'NZD'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1030936000 = b(["", , 1, 2, 2, , , 0, 3, , " 'PEN'", "#,##0.00 'PEN'", "-#,##0.00 'PEN' 'PEN'", "-", " 'PEN'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1118670495 = b(["", , 1, 2, 2, , , 0, 3, , " 'PHP'", "#,##0.00 'PHP'", "-#,##0.00 'PHP' 'PHP'", "-", " 'PHP'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b311192054 = b(["", , 1, 0, 0, , , , 3, , " 'PKR'", "#,##0 'PKR'", "-#,##0 'PKR' 'PKR'", "-", " 'PKR'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1231340057 = b(["", , 1, 2, 2, , , 0, 3, , " 'PLN'", "#,##0.00 'PLN'", "-#,##0.00 'PLN' 'PLN'", "-", " 'PLN'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1807617161 = b(["", , 1, 2, 2, , , 0, 3, , " 'QAR'", "#,##0.00 'QAR'", "-#,##0.00 'QAR' 'QAR'", "-", " 'QAR'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b1202732424 = b(["", , 1, 2, 2, , , 0, 3, , " 'RON'", "#,##0.00 'RON'", "-#,##0.00 'RON' 'RON'", "-", " 'RON'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1679919222 = b(["", , 1, 0, 0, , , , 3, , " 'RSD'", "#,##0 'RSD'", "-#,##0 'RSD' 'RSD'", "-", " 'RSD'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b1042039770 = b(["", , 1, 2, 2, , , 0, 3, , " 'RUB'", "#,##0.00 'RUB'", "-#,##0.00 'RUB' 'RUB'", "-", " 'RUB'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b712342773 = b(["", , 1, 2, 2, , , 0, 3, , " 'SAR'", "#,##0.00 'SAR'", "-#,##0.00 'SAR' 'SAR'", "-", " 'SAR'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b604290816 = b(["", , 1, 2, 2, , , 0, 3, , " 'SEK'", "#,##0.00 'SEK'", "-#,##0.00 'SEK' 'SEK'", "-", " 'SEK'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b553497161 = b(["", , 1, 2, 2, , , 0, 3, , " 'SGD'", "#,##0.00 'SGD'", "-#,##0.00 'SGD' 'SGD'", "-", " 'SGD'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a360788629 = b(["", , 1, 2, 2, , , 0, 3, , " 'THB'", "#,##0.00 'THB'", "-#,##0.00 'THB' 'THB'", "-", " 'THB'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a489014107 = b(["", , 1, 3, 3, , , 0, 3, , " 'TND'", "#,##0.000 'TND'", "-#,##0.000 'TND' 'TND'", "-", " 'TND'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a668321122 = b(["", , 1, 2, 2, , , 0, 3, , " 'TRY'", "#,##0.00 'TRY'", "-#,##0.00 'TRY' 'TRY'", "-", " 'TRY'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a792072936 = b(["", , 1, 2, 2, , , 0, 3, , " 'TWD'", "#,##0.00 'TWD'", "-#,##0.00 'TWD' 'TWD'", "-", " 'TWD'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b625783840 = b(["", , 1, 0, 0, , , , 3, , " 'TZS'", "#,##0 'TZS'", "-#,##0 'TZS' 'TZS'", "-", " 'TZS'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1053429379 = b(["", , 1, 2, 2, , , 0, 3, , " 'UAH'", "#,##0.00 'UAH'", "-#,##0.00 'UAH' 'UAH'", "-", " 'UAH'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.b277616423 = b(["", , 1, 0, 0, , , , 3, , " 'UGX'", "#,##0 'UGX'", "-#,##0 'UGX' 'UGX'", "-", " 'UGX'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1565060013 = b(["", , 1, 2, 2, , , 0, 3, , " 'USD'", "#,##0.00 'USD'", "-#,##0.00 'USD' 'USD'", "-", " 'USD'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a2053602622 = b(["", , 1, 2, 2, , , 0, 3, , " 'VEF'", "#,##0.00 'VEF'", "-#,##0.00 'VEF' 'VEF'", "-", " 'VEF'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a791820895 = b(["", , 1, 0, 0, , , , 3, , " 'VND'", "#,##0 'VND'", "-#,##0 'VND' 'VND'", "-", " 'VND'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1205215698 = b(["", , 1, 2, 2, , , 0, 3, , " 'ZAR'", "#,##0.00 'ZAR'", "-#,##0.00 'ZAR' 'ZAR'", "-", " 'ZAR'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1553383115 = b(["", , 1, 2, 2, , , 0, 3, , " 'ZMW'", "#,##0.00 'ZMW'", "-#,##0.00 'ZMW' 'ZMW'", "-", " 'ZMW'", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a348458740 = b(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a1473766743 = b(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 K", few: "0 K", other: "0 K" }, 4: { one: "00 K", few: "00 K", other: "00 K" }, 5: { one: "000 K", few: "000 K", other: "000 K" }, 6: { one: "0 mil'.'", few: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mld'.'", few: "0 mld'.'", other: "0 mld'.'" }, 10: { one: "00 mld'.'", few: "00 mld'.'", other: "00 mld'.'" }, 11: { one: "000 mld'.'", few: "000 mld'.'", other: "000 mld'.'" }, 12: { one: "0 tril'.'", few: "0 tril'.'", other: "0 tril'.'" }, 13: { one: "00 tril'.'", few: "00 tril'.'", other: "00 tril'.'" }, 14: { one: "000 tril'.'", few: "000 tril'.'", other: "000 tril'.'" }, maxExponent: 14 }], f("ro").pluralGenerator({}))),
                (f.a919035033 = b(["", , 1, 0, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", m(), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 K", few: "0 K", other: "0 K" }, 4: { one: "00 K", few: "00 K", other: "00 K" }, 5: { one: "000 K", few: "000 K", other: "000 K" }, 6: { one: "0 mil'.'", few: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mld'.'", few: "0 mld'.'", other: "0 mld'.'" }, 10: { one: "00 mld'.'", few: "00 mld'.'", other: "00 mld'.'" }, 11: { one: "000 mld'.'", few: "000 mld'.'", other: "000 mld'.'" }, 12: { one: "0 tril'.'", few: "0 tril'.'", other: "0 tril'.'" }, 13: { one: "00 tril'.'", few: "00 tril'.'", other: "00 tril'.'" }, 14: { one: "000 tril'.'", few: "000 tril'.'", other: "000 tril'.'" }, maxExponent: 14 }], f("ro").pluralGenerator({}))),
                (f.a1052721722 = b(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", m("round"), "∞", "NaN", { ".": ",", ",": ".", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (f.a2035448620 = z(function (e) {
                    var a = String(e).split("."),
                        i = !a[1],
                        t = Number(a[0]) == e && a[0].slice(-2);
                    return 1 == e && i ? "one" : !i || 0 == e || (1 != e && t >= 1 && t <= 19) ? "few" : "other";
                })),
                (f.b1378708370 = v(f("ro").numberFormatter({ raw: "#,##0.00 'AED'" }))),
                (f.a767883309 = v(f("ro").numberFormatter({ raw: "#,##0 'ALL'" }))),
                (f.a1998342156 = v(f("ro").numberFormatter({ raw: "#,##0.00 'ARS'" }))),
                (f.b63551362 = v(f("ro").numberFormatter({ raw: "#,##0.00 'AUD'" }))),
                (f.a1366716896 = v(f("ro").numberFormatter({ raw: "#,##0.00 'BAM'" }))),
                (f.b65335300 = v(f("ro").numberFormatter({ raw: "#,##0.00 'BDT'" }))),
                (f.b1869566459 = v(f("ro").numberFormatter({ raw: "#,##0.00 'BGN'" }))),
                (f.b1268354288 = v(f("ro").numberFormatter({ raw: "#,##0.000 'BHD'" }))),
                (f.b754218862 = v(f("ro").numberFormatter({ raw: "#,##0.00 'BRL'" }))),
                (f.a1335114515 = v(f("ro").numberFormatter({ raw: "#,##0 'BYR'" }))),
                (f.b1443102424 = v(f("ro").numberFormatter({ raw: "#,##0.00 'CAD'" }))),
                (f.a531714349 = v(f("ro").numberFormatter({ raw: "#,##0.00 'CHF'" }))),
                (f.a73053287 = v(f("ro").numberFormatter({ raw: "#,##0 'CLP'" }))),
                (f.a2105723008 = v(f("ro").numberFormatter({ raw: "#,##0.00 'CNY'" }))),
                (f.b1559402966 = v(f("ro").numberFormatter({ raw: "#,##0 'COP'" }))),
                (f.b529942822 = v(f("ro").numberFormatter({ raw: "#,##0.00 'CZK'" }))),
                (f.a785214186 = v(f("ro").numberFormatter({ raw: "#,##0.00 'DKK'" }))),
                (f.a1012463456 = v(f("ro").numberFormatter({ raw: "#,##0.00 'DZD'" }))),
                (f.b878844448 = v(f("ro").numberFormatter({ raw: "#,##0.00 'EGP'" }))),
                (f.b1281436500 = v(f("ro").numberFormatter({ raw: "#,##0.00 'EUR'" }))),
                (f.b1830742183 = v(f("ro").numberFormatter({ raw: "#,##0.00 'GBP'" }))),
                (f.b714799940 = v(f("ro").numberFormatter({ raw: "#,##0.00 'GHS'" }))),
                (f.a1288051338 = v(f("ro").numberFormatter({ raw: "#,##0.00 'GTQ'" }))),
                (f.b1033883123 = v(f("ro").numberFormatter({ raw: "#,##0.00 'HKD'" }))),
                (f.a1084079405 = v(f("ro").numberFormatter({ raw: "#,##0.00 'HRK'" }))),
                (f.b691522603 = v(f("ro").numberFormatter({ raw: "#,##0.00 'HUF'" }))),
                (f.b807823145 = v(f("ro").numberFormatter({ raw: "#,##0 'IDR'" }))),
                (f.a2025868158 = v(f("ro").numberFormatter({ raw: "#,##0.00 'ILS'" }))),
                (f.b522720927 = v(f("ro").numberFormatter({ raw: "#,##0.00 'INR'" }))),
                (f.a1738982002 = v(f("ro").numberFormatter({ raw: "#,##0 'IQD'" }))),
                (f.b580573875 = v(f("ro").numberFormatter({ raw: "#,##0 'ISK'" }))),
                (f.b1099466469 = v(f("ro").numberFormatter({ raw: "#,##0 'JPY'" }))),
                (f.b701036939 = v(f("ro").numberFormatter({ raw: "#,##0.00 'KES'" }))),
                (f.b1933874370 = v(f("ro").numberFormatter({ raw: "#,##0 'KRW'" }))),
                (f.a1959690166 = v(f("ro").numberFormatter({ raw: "#,##0.000 'KWD'" }))),
                (f.a785300329 = v(f("ro").numberFormatter({ raw: "#,##0.00 'KZT'" }))),
                (f.b1706625100 = v(f("ro").numberFormatter({ raw: "#,##0 'LBP'" }))),
                (f.b1194868258 = v(f("ro").numberFormatter({ raw: "#,##0.00 'MAD'" }))),
                (f.b909766040 = v(f("ro").numberFormatter({ raw: "#,##0.00 'MKD'" }))),
                (f.b1970828565 = v(f("ro").numberFormatter({ raw: "#,##0.00 'MXN'" }))),
                (f.b968808280 = v(f("ro").numberFormatter({ raw: "#,##0.00 'MYR'" }))),
                (f.a1864288377 = v(f("ro").numberFormatter({ raw: "#,##0.00 'NGN'" }))),
                (f.a288495780 = v(f("ro").numberFormatter({ raw: "#,##0.00 'NOK'" }))),
                (f.a1260697622 = v(f("ro").numberFormatter({ raw: "#,##0.00 'NZD'" }))),
                (f.b720065611 = v(f("ro").numberFormatter({ raw: "#,##0.00 'PEN'" }))),
                (f.a1999703734 = v(f("ro").numberFormatter({ raw: "#,##0.00 'PHP'" }))),
                (f.a424505783 = v(f("ro").numberFormatter({ raw: "#,##0 'PKR'" }))),
                (f.a1197492860 = v(f("ro").numberFormatter({ raw: "#,##0.00 'PLN'" }))),
                (f.a1882213900 = v(f("ro").numberFormatter({ raw: "#,##0.00 'QAR'" }))),
                (f.b1244310019 = v(f("ro").numberFormatter({ raw: "#,##0.00 'RON'" }))),
                (f.a2019413195 = v(f("ro").numberFormatter({ raw: "#,##0 'RSD'" }))),
                (f.b557805041 = v(f("ro").numberFormatter({ raw: "#,##0.00 'RUB'" }))),
                (f.a1072867274 = v(f("ro").numberFormatter({ raw: "#,##0.00 'SAR'" }))),
                (f.a127510645 = v(f("ro").numberFormatter({ raw: "#,##0.00 'SEK'" }))),
                (f.a1702113950 = v(f("ro").numberFormatter({ raw: "#,##0.00 'SGD'" }))),
                (f.b19797632 = v(f("ro").numberFormatter({ raw: "#,##0.00 'THB'" }))),
                (f.a1067515460 = v(f("ro").numberFormatter({ raw: "#,##0.000 'TND'" }))),
                (f.a923775059 = v(f("ro").numberFormatter({ raw: "#,##0.00 'TRY'" }))),
                (f.a465113997 = v(f("ro").numberFormatter({ raw: "#,##0.00 'TWD'" }))),
                (f.b737904991 = v(f("ro").numberFormatter({ raw: "#,##0 'TZS'" }))),
                (f.b22770862 = v(f("ro").numberFormatter({ raw: "#,##0.00 'UAH'" }))),
                (f.a1465350344 = v(f("ro").numberFormatter({ raw: "#,##0 'UGX'" }))),
                (f.b1342090392 = v(f("ro").numberFormatter({ raw: "#,##0.00 'USD'" }))),
                (f.a917828599 = v(f("ro").numberFormatter({ raw: "#,##0.00 'VEF'" }))),
                (f.a258168834 = v(f("ro").numberFormatter({ raw: "#,##0 'VND'" }))),
                (f.a387637731 = v(f("ro").numberFormatter({ raw: "#,##0.00 'ZAR'" }))),
                (f.b1704074230 = v(f("ro").numberFormatter({ raw: "#,##0.00 'ZMW'" }))),
                (f.b1766160864 = g({ 1: f("ro").numberFormatter({ raw: "0" }) }, { pattern: "d MMM", timeSeparator: ":", months: { M: { 3: { 1: "ian.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "mai", 6: "iun.", 7: "iul.", 8: "aug.", 9: "sept.", 10: "oct.", 11: "nov.", 12: "dec." } } } })),
                (f.a438470333 = g({ 1: f("ro").numberFormatter({ raw: "0" }) }, { pattern: "d MMM y", timeSeparator: ":", months: { M: { 3: { 1: "ian.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "mai", 6: "iun.", 7: "iul.", 8: "aug.", 9: "sept.", 10: "oct.", 11: "nov.", 12: "dec." } } } })),
                (f.b2085484814 = g({ 1: f("ro").numberFormatter({ raw: "0" }), 2: f("ro").numberFormatter({ raw: "00" }) }, { pattern: "h:mm a", timeSeparator: ":", dayPeriods: { am: "a.m.", pm: "p.m." } })),
                (f.a1056838753 = g({ 1: f("ro").numberFormatter({ raw: "0" }) }, { pattern: "E, d MMM", timeSeparator: ":", days: { E: { 1: { sun: "dum.", mon: "lun.", tue: "mar.", wed: "mie.", thu: "joi", fri: "vin.", sat: "sâm." } } }, months: { M: { 3: { 1: "ian.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "mai", 6: "iun.", 7: "iul.", 8: "aug.", 9: "sept.", 10: "oct.", 11: "nov.", 12: "dec." } } } })),
                (f.a680929124 = g({ 1: f("ro").numberFormatter({ raw: "0" }) }, { pattern: "E, d MMM y", timeSeparator: ":", days: { E: { 1: { sun: "dum.", mon: "lun.", tue: "mar.", wed: "mie.", thu: "joi", fri: "vin.", sat: "sâm." } } }, months: { M: { 3: { 1: "ian.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "mai", 6: "iun.", 7: "iul.", 8: "aug.", 9: "sept.", 10: "oct.", 11: "nov.", 12: "dec." } } } })),
                (f.a1064226921 = g({ 1: f("ro").numberFormatter({ raw: "0" }) }, { pattern: "d MMMM", timeSeparator: ":", months: { M: { 4: { 1: "ianuarie", 2: "februarie", 3: "martie", 4: "aprilie", 5: "mai", 6: "iunie", 7: "iulie", 8: "august", 9: "septembrie", 10: "octombrie", 11: "noiembrie", 12: "decembrie" } } } })),
                (f.a46136969 = g({ 1: f("ro").numberFormatter({ raw: "0" }), 2: f("ro").numberFormatter({ raw: "00" }) }, { pattern: "d MMMM y, HH:mm:ss z", timeSeparator: ":", months: { M: { 4: { 1: "ianuarie", 2: "februarie", 3: "martie", 4: "aprilie", 5: "mai", 6: "iunie", 7: "iulie", 8: "august", 9: "septembrie", 10: "octombrie", 11: "noiembrie", 12: "decembrie" } } }, gmtFormat: "GMT{0}", gmtZeroFormat: "GMT", hourFormat: ["+H;-H", "+H:mm;-H:mm"] })),
                (f.a527312088 = g({ 1: f("ro").numberFormatter({ raw: "0" }), 2: f("ro").numberFormatter({ raw: "00" }) }, { pattern: "d MMM y, h:mm a", timeSeparator: ":", months: { M: { 3: { 1: "ian.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "mai", 6: "iun.", 7: "iul.", 8: "aug.", 9: "sept.", 10: "oct.", 11: "nov.", 12: "dec." } } }, dayPeriods: { am: "a.m.", pm: "p.m." } })),
                (f.a225933308 = g({ 1: f("ro").numberFormatter({ raw: "0" }) }, { pattern: "d MMMM y", timeSeparator: ":", months: { M: { 4: { 1: "ianuarie", 2: "februarie", 3: "martie", 4: "aprilie", 5: "mai", 6: "iunie", 7: "iulie", 8: "august", 9: "septembrie", 10: "octombrie", 11: "noiembrie", 12: "decembrie" } } } })),
                (f.b704391301 = g({ 1: f("ro").numberFormatter({ raw: "0" }), 2: f("ro").numberFormatter({ raw: "00" }) }, { pattern: "d MMM, h:mm a", timeSeparator: ":", months: { M: { 3: { 1: "ian.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "mai", 6: "iun.", 7: "iul.", 8: "aug.", 9: "sept.", 10: "oct.", 11: "nov.", 12: "dec." } } }, dayPeriods: { am: "a.m.", pm: "p.m." } })),
                (f.a147321616 = g({ 1: f("ro").numberFormatter({ raw: "0" }), 2: f("ro").numberFormatter({ raw: "00" }) }, { pattern: "dd.MM.y", timeSeparator: ":" })),
                (f.a1734278772 = g({ 1: f("ro").numberFormatter({ raw: "0" }) }, { pattern: "y", timeSeparator: ":" })),
                (f.b1371389757 = g({ 1: f("ro").numberFormatter({ raw: "0" }) }, { pattern: "MMM y", timeSeparator: ":", months: { M: { 3: { 1: "ian.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "mai", 6: "iun.", 7: "iul.", 8: "aug.", 9: "sept.", 10: "oct.", 11: "nov.", 12: "dec." } } } })),
                (f.b813841002 = g({ 1: f("ro").numberFormatter({ raw: "0" }), 2: f("ro").numberFormatter({ raw: "00" }) }, { pattern: "EEEE, d MMMM y, HH:mm:ss zzzz", timeSeparator: ":", days: { E: { 4: { sun: "duminică", mon: "luni", tue: "marți", wed: "miercuri", thu: "joi", fri: "vineri", sat: "sâmbătă" } } }, months: { M: { 4: { 1: "ianuarie", 2: "februarie", 3: "martie", 4: "aprilie", 5: "mai", 6: "iunie", 7: "iulie", 8: "august", 9: "septembrie", 10: "octombrie", 11: "noiembrie", 12: "decembrie" } } }, gmtFormat: "GMT{0}", gmtZeroFormat: "GMT", hourFormat: "+HH:mm;-HH:mm" })),
                (f.b819455440 = g({ 1: f("ro").numberFormatter({ raw: "0" }), 2: f("ro").numberFormatter({ raw: "00" }) }, { pattern: "d MMM y, HH:mm:ss", timeSeparator: ":", months: { M: { 3: { 1: "ian.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "mai", 6: "iun.", 7: "iul.", 8: "aug.", 9: "sept.", 10: "oct.", 11: "nov.", 12: "dec." } } } })),
                (f.a459711316 = g({ 1: f("ro").numberFormatter({ raw: "0" }), 2: f("ro").numberFormatter({ raw: "00" }) }, { pattern: "dd.MM.y", timeSeparator: ":" })),
                (f.a802666129 = g({ 2: f("ro").numberFormatter({ raw: "00" }) }, { pattern: "HH:mm", timeSeparator: ":" })),
                (f.b1230009725 = g({ 1: f("ro").numberFormatter({ raw: "0" }), 2: f("ro").numberFormatter({ raw: "00" }) }, { pattern: "E h:mm a", timeSeparator: ":", days: { E: { 1: { sun: "dum.", mon: "lun.", tue: "mar.", wed: "mie.", thu: "joi", fri: "vin.", sat: "sâm." } } }, dayPeriods: { am: "a.m.", pm: "p.m." } })),
                (f.a437785140 = g({ 1: f("ro").numberFormatter({ raw: "0" }) }, { pattern: "MMMM y", timeSeparator: ":", months: { M: { 4: { 1: "ianuarie", 2: "februarie", 3: "martie", 4: "aprilie", 5: "mai", 6: "iunie", 7: "iulie", 8: "august", 9: "septembrie", 10: "octombrie", 11: "noiembrie", 12: "decembrie" } } } })),
                (f.a166134499 = g({ 1: f("ro").numberFormatter({ raw: "0" }) }, { pattern: "d MMM y", timeSeparator: ":", months: { M: { 3: { 1: "ian.", 2: "feb.", 3: "mar.", 4: "apr.", 5: "mai", 6: "iun.", 7: "iul.", 8: "aug.", 9: "sept.", 10: "oct.", 11: "nov.", 12: "dec." } } } })),
                (f.b1766846057 = g({}, { pattern: "LLLL", timeSeparator: ":", months: { L: { 4: { 1: "ianuarie", 2: "februarie", 3: "martie", 4: "aprilie", 5: "mai", 6: "iunie", 7: "iulie", 8: "august", 9: "septembrie", 10: "octombrie", 11: "noiembrie", 12: "decembrie" } } } })),
                (f.b513600617 = g({}, { pattern: "cccc", timeSeparator: ":", days: { c: { 4: { sun: "duminică", mon: "luni", tue: "marți", wed: "miercuri", thu: "joi", fri: "vineri", sat: "sâmbătă" } } } })),
                (f.a2137399351 = A(f("ro").dateToPartsFormatter({ skeleton: "MMMd" }))),
                (f.a1189752710 = A(f("ro").dateToPartsFormatter({ skeleton: "yMMMd" }))),
                (f.a1373321929 = A(f("ro").dateToPartsFormatter({ skeleton: "hm" }))),
                (f.a1808121130 = A(f("ro").dateToPartsFormatter({ skeleton: "MMMEd" }))),
                (f.b1799120965 = A(f("ro").dateToPartsFormatter({ skeleton: "yMMMEd" }))),
                (f.a1815509298 = A(f("ro").dateToPartsFormatter({ skeleton: "MMMMd" }))),
                (f.b345270112 = A(f("ro").dateToPartsFormatter({ datetime: "long" }))),
                (f.a955170657 = A(f("ro").dateToPartsFormatter({ skeleton: "yMMMdhm" }))),
                (f.a1127855507 = A(f("ro").dateToPartsFormatter({ date: "long" }))),
                (f.a1110525906 = A(f("ro").dateToPartsFormatter({ skeleton: "MMMdhm" }))),
                (f.b1957861287 = A(f("ro").dateToPartsFormatter({ date: "short" }))),
                (f.b370904131 = A(f("ro").dateToPartsFormatter({ skeleton: "y" }))),
                (f.b1762796838 = A(f("ro").dateToPartsFormatter({ skeleton: "yMMM" }))),
                (f.b1205248083 = A(f("ro").dateToPartsFormatter({ datetime: "full" }))),
                (f.a995461767 = A(f("ro").dateToPartsFormatter({ datetime: "medium" }))),
                (f.a1210993693 = A(f("ro").dateToPartsFormatter({ skeleton: "yMMdd" }))),
                (f.b1302516774 = A(f("ro").dateToPartsFormatter({ time: "short" }))),
                (f.b1381183092 = A(f("ro").dateToPartsFormatter({ skeleton: "Ehm" }))),
                (f.a1189067517 = A(f("ro").dateToPartsFormatter({ skeleton: "yMMMM" }))),
                (f.b670026054 = A(f("ro").dateToPartsFormatter({ date: "medium" }))),
                (f.a2136714158 = A(f("ro").dateToPartsFormatter({ skeleton: "MMMM" }))),
                (f.b905007698 = A(f("ro").dateToPartsFormatter({ skeleton: "EEEE" }))),
                (f.b806037430 = h(f("ro").numberFormatter({}), f("ro").pluralGenerator({}), { "relativeTime-type-future": { "relativeTimePattern-count-one": "peste {0} zi", "relativeTimePattern-count-few": "peste {0} zile", "relativeTimePattern-count-other": "peste {0} de zile" }, "relativeTime-type-past": { "relativeTimePattern-count-one": "acum {0} zi", "relativeTimePattern-count-few": "acum {0} zile", "relativeTimePattern-count-other": "acum {0} de zile" }, "relative-type--2": "alaltăieri", "relative-type--1": "ieri", "relative-type-0": "azi", "relative-type-1": "mâine", "relative-type-2": "poimâine" })),
                (f.b239251409 = C(f("ro").numberFormatter({}), f("ro").pluralGenerator({}), { compoundUnitPattern: "{0} pe {1}", unitProperties: { displayName: "secunde", one: "{0} secundă", few: "{0} secunde", other: "{0} de secunde", perUnitPattern: "{0} pe secundă" } })),
                (f.b2126214705 = C(f("ro").numberFormatter({}), f("ro").pluralGenerator({}), { compoundUnitPattern: "{0} pe {1}", unitProperties: { displayName: "minute", one: "{0} minut", few: "{0} minute", other: "{0} de minute", perUnitPattern: "{0} pe minut" } })),
                (f.a504049695 = C(f("ro").numberFormatter({}), f("ro").pluralGenerator({}), { compoundUnitPattern: "{0} pe {1}", unitProperties: { displayName: "ore", one: "{0} oră", few: "{0} ore", other: "{0} de ore", perUnitPattern: "{0} pe oră" } })),
                (f.b595972176 = C(f("ro").numberFormatter({}), f("ro").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "s", one: "{0} s", few: "{0} s", other: "{0} s", perUnitPattern: "{0}/s" } })),
                (f.b1491500720 = C(f("ro").numberFormatter({}), f("ro").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "m", one: "{0} m", few: "{0} m", other: "{0} m", perUnitPattern: "{0}/min." } })),
                (f.a751817632 = C(f("ro").numberFormatter({}), f("ro").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "oră", one: "{0} h", few: "{0} h", other: "{0} h", perUnitPattern: "{0}/h" } })),
                (f.b1485421948 = C(f("ro").numberFormatter({}), f("ro").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "zi", one: "{0} z", few: "{0} z", other: "{0} z", perUnitPattern: "{0}/zi" } })),
                (f.a1149765635 = C(f("ro").numberFormatter({}), f("ro").pluralGenerator({}), { compoundUnitPattern: "{0} pe {1}", unitProperties: { displayName: "zile", one: "{0} zi", few: "{0} zile", other: "{0} de zile", perUnitPattern: "{0} pe zi" } })),
                (f.b1968512536 = C(f("ro").numberFormatter({}), f("ro").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "l", one: "{0} l", few: "{0} l", other: "{0} l", perUnitPattern: "{0}/lună" } })),
                (f.a711274599 = C(f("ro").numberFormatter({}), f("ro").pluralGenerator({}), { compoundUnitPattern: "{0} pe {1}", unitProperties: { displayName: "luni", one: "{0} lună", few: "{0} luni", other: "{0} de luni", perUnitPattern: "{0} pe lună" } })),
                (f.b2138587271 = C(f("ro").numberFormatter({}), f("ro").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "a", one: "{0} a", few: "{0} a", other: "{0} a", perUnitPattern: "{0}/an" } })),
                (f.a1984839224 = C(f("ro").numberFormatter({}), f("ro").pluralGenerator({}), { compoundUnitPattern: "{0} pe {1}", unitProperties: { displayName: "ani", one: "{0} an", few: "{0} ani", other: "{0} de ani", perUnitPattern: "{0} pe an" } })),
                (f.b1388502723 = C(f("ro").numberFormatter({}), f("ro").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "s", one: "{0} s", few: "{0} s", other: "{0} s", perUnitPattern: "{0}/s" } })),
                (f.a245177245 = C(f("ro").numberFormatter({}), f("ro").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "min.", one: "{0} min.", few: "{0} min.", other: "{0} min.", perUnitPattern: "{0}/min." } })),
                (f.a178995021 = C(f("ro").numberFormatter({}), f("ro").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "ore", one: "{0} oră", few: "{0} ore", other: "{0} ore", perUnitPattern: "{0}/h" } })),
                (f.a216304654 = C(f("ro").numberFormatter({ minimumFractionDigits: 1, maximumFractionDigits: 1, round: "truncate" }), f("ro").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "s", one: "{0} s", few: "{0} s", other: "{0} s", perUnitPattern: "{0}/s" } })),
                t("d58baa7f", f.b322696590),
                t("ia24dc8d", f.b95283842),
                t("iab73d4b", f.b636222020),
                t("i3b7a017", f.b239251409),
                t("ie5d110f", f.b2126214705),
                t("df5f11b3", f.a504049695),
                t("e8733ed9", f.b595972176),
                t("be59d8c3", f.b1491500720),
                t("i3d087db", f.a751817632),
                t("ga8d18c9", f.b1485421948),
                t("a91e7d49", f.a1149765635),
                t("id952a69", f.b1968512536),
                t("ga09ab65", f.a711274599),
                t("c83b901d", f.b2138587271),
                t("a55b9fed", f.a1984839224),
                t("ccaa970f", f.a2137399351),
                t("jade381b", f.a1189752710),
                t("d725a289", f.a1373321929),
                t("g08cbabb", f.a1715359699),
                t("c333da63", f.b806037430),
                t("h8054d91", f.a1808121130),
                t("i61fef37", f.b1388502723),
                t("ba705e27", f.a245177245),
                t("j86b0d8d", f.a178995021),
                t("f668e929", f.b1555114375),
                t("i2785009", f.b85257946),
                t("c778d80b", f.a244507815),
                t("e8d93005", f.a936959577),
                t("d46781af", f.a216304654),
                t("ba316f05", f.b1640076164),
                t("c0bdd345", f.a1586415866),
                t("aa2aa1a1", f.b1799120965),
                t("da44942d", f.a1815509298),
                t("a54d3ef5", f.b345270112),
                t("bfbc051d", f.a955170657),
                t("ba2e82a1", f.a1127855507),
                t("fc209bb7", f.a1110525906),
                t("cf8abf59", f.a1348242626),
                t("a9f397f3", f.b1957861287),
                t("d857e44d", f.b1378708370),
                t("cb87e3db", f.a767883309),
                t("a9d5ffd1", f.a1998342156),
                t("a0e8371d", f.b63551362),
                t("gcc50dc9", f.a1366716896),
                t("a6a43585", f.b65335300),
                t("a0cc8f2d", f.b1869566459),
                t("i31c32c5", f.b1268354288),
                t("i7dc69e9", f.b754218862),
                t("c14a6c03", f.a1335114515),
                t("jaa3d537", f.b1443102424),
                t("a824080b", f.a531714349),
                t("d9c0bedb", f.a73053287),
                t("bf8c0613", f.a2105723008),
                t("i8163625", f.b1559402966),
                t("adb53ba1", f.b529942822),
                t("iabf697d", f.a785214186),
                t("a1a0555b", f.a1012463456),
                t("f266f3d9", f.b878844448),
                t("a9a8652b", f.b1281436500),
                t("dbf40761", f.b1830742183),
                t("b0d993d9", f.b714799940),
                t("ac1308e1", f.a1288051338),
                t("a7889ab3", f.b1033883123),
                t("c614f5cd", f.a1084079405),
                t("i55d57e3", f.b691522603),
                t("e4b6002b", f.b807823145),
                t("d28e983b", f.a2025868158),
                t("e8c9232d", f.b522720927),
                t("c8994ae1", f.a1738982002),
                t("f821c2a5", f.b580573875),
                t("j348b9c9", f.b1099466469),
                t("i6f93b9b", f.b701036939),
                t("c6150bd5", f.b1933874370),
                t("i8921e09", f.a1959690166),
                t("ef239279", f.a785300329),
                t("hecdb149", f.b1706625100),
                t("fdd039b7", f.b1194868258),
                t("f30c2c37", f.b909766040),
                t("d9ea7bff", f.b1970828565),
                t("ea3df4b7", f.b968808280),
                t("jaac21bb", f.a1864288377),
                t("hb435ced", f.a288495780),
                t("ce699d81", f.a1260697622),
                t("bc56d3d7", f.b720065611),
                t("f8561913", f.a1999703734),
                t("g6485d53", f.a424505783),
                t("ff561cc1", f.a1197492860),
                t("b42011d3", f.a1882213900),
                t("a6660bcd", f.b1244310019),
                t("f9b80449", f.a2019413195),
                t("gdee4d5d", f.b557805041),
                t("h36f2103", f.a1072867274),
                t("a19ad037", f.a127510645),
                t("g713f699", f.a1702113950),
                t("ff2e39af", f.b19797632),
                t("be34316d", f.a1067515460),
                t("aef81b75", f.a923775059),
                t("fcce70a5", f.a465113997),
                t("jc9d352f", f.b737904991),
                t("be1cb8c5", f.b22770862),
                t("j9371501", f.a1465350344),
                t("j7d4397d", f.b1342090392),
                t("d61441dd", f.a917828599),
                t("e2a99e97", f.a258168834),
                t("f7ce19ab", f.a387637731),
                t("b2a0213f", f.b1704074230),
                t("d7d71245", f.b370904131),
                t("a2f2faab", f.b1762796838),
                t("g8d1b99b", f.b1205248083),
                t("d0a77c9b", f.a995461767),
                t("e18e399b", f.a1210993693),
                t("b6ca7bcb", f.b1302516774),
                t("h0e4cdf5", f.b1381183092),
                t("g727ddcf", f.a1189067517),
                t("h3629783", f.b670026054),
                t("a20c68af", f.a2136714158),
                t("ja781451", f.a348458740),
                t("cfa1a7b9", f.a1473766743),
                t("f3b9b9a7", f.b905007698),
                t("eefcd267", f.a919035033),
                t("fa8afc43", f.a1052721722);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/i18n/ro.053d3f8a.js.map
