"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["i18n/cs"],
    {
        690186: (e, o, t) => {
            var a = t(292426)._register("cs", {
                get emoji() {
                    return t.e("i18n/emoji-cs").then(t.t.bind(t, 38345, 23));
                },
            });
            function n(e, o, t, a, n) {
                switch (((r = e), (i = String(r).split(".")), (d = i[0]), (u = !i[1]), 1 == r && u ? "one" : d >= 2 && d <= 4 && u ? "few" : u ? "other" : "many")) {
                    case "few":
                        return o;
                    case "many":
                        return t;
                    case "one":
                        return a;
                    default:
                        return n;
                }
                var r, i, d, u;
            }
            a("c39b0e24", "X"),
                a("jb38600c", "Žádné"),
                a("f07eac34", "Parodický účet"),
                a("a41b5c2e", "Účet fanouška"),
                a("i428ea62", "Účet komentátora"),
                a("ac0d27be", "Tento účet byl pozastaven."),
                a("bcee7444", "Aktualizace účtu se nezdařila."),
                a("e0cbf77a", "Přidat telefonní číslo"),
                a("f377195c", "Platforma X je momentálně trochu zahlcená. Chvíli počkejte a zkuste to znovu."),
                a("d67f9456", "Provádění této akce vám bylo zablokováno."),
                a("e0ece1b6", "Média nelze přiložit, zkuste je znovu nahrát."),
                a("i82e8f04", "Abychom ochránili uživatele před spamem a další škodlivou aktivitou, dočasně jsme pro tento účet zablokovali sledování dalších účtů. Možná byste si měli zopakovat pravidla společnosti X."),
                a("jf7be47a", "Abychom ochránili uživatele před spamem a další škodlivou aktivitou, dočasně jsme pro tento účet zablokovali odesílání postů. Možná byste si měli zopakovat pravidla společnosti X."),
                a("g75fec74", "U této akce jste dosáhli denního limitu. Chcete-li limit zrušit, přidejte do svého účtu telefonní číslo."),
                a("abb8b6e0", "Toto telefonní číslo je již zaregistrováno."),
                a("f30bd1fc", "Textovou zprávu na toto telefonní číslo nemůžeme zaslat, jelikož tento operátor není podporován."),
                a("i54e550c", "Toto telefonní číslo nemůžeme ověřit."),
                a("h154702a", "Tento požadavek nemůžeme provést, protože tento odkaz byl společností X nebo našimi partnery označen za potenciálně škodlivý. Další informace najdete v našem centru nápovědy."),
                a("c8cb0b4c", "Heslo, které jste zadali, je nesprávné."),
                a("b1b54f9e", "Média, která jste se pokusili nahrát, jsou chybná."),
                a("i859a9d4", "Další informace"),
                a("d6e72ce1", function (e) {
                    return "Maximální počet znaků, které může obsahovat vaše heslo: " + e.count + ". Zadejte prosím kratší heslo.";
                }),
                a("a34dccd7", function (e) {
                    return "Minimální počet znaků, které musí obsahovat vaše heslo: " + e.count + ". Zadejte prosím delší heslo.";
                }),
                a("jea2ff04", "Heslo je příliš snadno uhodnutelné. Zvolte silnější (složitější) heslo."),
                a("ce482c36", "Údaje v jednom nebo více polích jsou neplatné. Údaje zkontrolujte a zkuste to znovu."),
                a("db626d88", "Zadejte svoje telefonní číslo a dokončete nastavení svého účtu."),
                a("i3ee2550", "Vyplňte všechna povinná pole."),
                a("cf18a258", "Tato žádost vypadá, jako kdyby byla vytvořena automaticky. Abychom ochránili uživatele před spamem a jinými škodlivými aktivitami, nemůžeme teď tuto akci dokončit. Zkuste to znovu později."),
                a("h7ffa648", "Limit pro ověření přes SMS byl překročen."),
                a("b87ceb1c", "Ověřovací SMS PIN je neplatný."),
                a("f87e2faa", "Je nám líto, ale takového uživatele jsme nenašli."),
                a("cdaf8222", "Litujeme, ale dosáhli jste limitu. Počkejte chvíli a zkuste to znovu."),
                a("c1b0e710", "Tuto akci nelze provést, protože je váš účet pozastaven."),
                a("bfb22fae", "Promiňte, tento post byl odstraněn."),
                a("a23cd3ba", "Platforma X pro tento post vypnula některé akce."),
                a("bb558892", "Tento uživatel již má ověřené telefonní číslo."),
                a("hae1c934", "Něco se pokazilo, ale netrapte se – není to vaše chyba."),
                a("e784846c", "Právě probíhá kontrola vašeho profilu. Během této kontroly nejsou povoleny žádné nové změny jména ani profilové fotky."),
                a("h1cbdd30", "Aktualizujte stránku a zkuste to znovu."),
                a("a5077d3e", "Aktualizovat"),
                a("b2648ba4", "Váš účet zřejmě nemůže provádět tuto akci. Aktualizujte stránku a zkuste to znovu."),
                a("bcd6bb0e", "Člen"),
                a("hd8c22d2", "Moder"),
                a("c3153100", "Správ"),
                a("fa9adac1", function (e) {
                    return "Hledat „" + e.query + "“";
                }),
                a("jcec6620", "Odpověď na post byla skryta"),
                a("f75d1806", "Premium"),
                a("j4a7d9a6", "Basic"),
                a("hedf9d7c", "Premium+"),
                a("f5de898e", "Šestiúhelníkový profilový obrázek"),
                a("fcc8734a", "Čtvercový profilový obrázek"),
                a("c64e46f8", "Tento člen byl odebrán z komunity, takže jeho posty jsou skryty."),
                a("b3f1cb42", "Tento post byl skryt moderátorem kvůli porušení některého pravidla komunity."),
                a("cbd2dc9c", "Tento post jste nahlásili."),
                a("cfbea177", function (e) {
                    return "Prostor uživatele " + e.name;
                }),
                a("ab4fc8bc", "Prostor"),
                a("jd859c9c", "Byli jste z tohoto Prostoru odebráni."),
                a("c60ed9b0", "Nemáte oprávnění k připojení se do tohoto Prostoru."),
                a("d8227e16", "Nemáte oprávnění k vytvoření tohoto Prostoru"),
                a("f027fed8", "Obraz v obraze"),
                a("hd50e064", "Teď ne"),
                a("i76d640e", "Potřebujeme vaše oprávnění"),
                a("fdaa0be8", "Pokud chcete mluvit v tomto prostoru, udělte platformě X přístup ke svému mikrofonu. Zkontrolujte nastavení svého prohlížeče. "),
                a("gea6cc1a", "Jste si jisti?"),
                a("hb568af4", "Skrýt uživatele"),
                a("f7c8617a", "Co jsou klipy?"),
                a("ecc7d2ec", "Klipy jsou zaznamenané okamžiky z Prostorů. Může je pořizovat a sdílet kdokoli. Platnost všech klipů vyprší po 30 dnech."),
                a("d575ee02", "Kdo může vytvořit klip?"),
                a("dbc477a4", "Klipy může vytvářet kdokoli, dokonce i posluchači. Jedinou podmínkou je, že musíte být přihlášeni do platformy X."),
                a("ed1d1cc0", "Do klipu se může dostat každý, kdo promluví"),
                a("e5d193c8", "Když budete mluvit, mohli byste se dostat do klipu. Pokud k tomu dojde, dáme vám vědět."),
                a("e1547ec0", "Vytvořte klip s okamžikem z Prostoru"),
                a("i154245e", "Zaslechli jste něco směšného nebo úžasného? Vytvořte z toho klip a nasdílejte ho."),
                a("j24c37b2", "Rozumím"),
                a("g1c6f16e", "Záznamy Prostorů"),
                a("e5609214", "Prostor bude žít dál"),
                a("g665514c", "Nahrávají se pouze mluvčí"),
                a("ja196c5a", "Do záznamu budou zahrnuti hosté, kteří budou mluvit. Záznam je veřejný, takže přehrát si jej může kdokoli."),
                a("dd317ed6", "Záznam si můžete kdykoli přehrát nebo jej komukoli nasdílet"),
                a("jf03b37c", "Záznam si můžete poslechnout kdykoli. Můžete jej také nasdílet prostřednictvím postu."),
                a("fd05976b", "Další informace"),
                a("b4f91a8a", "Probíhá nahrávání"),
                a("gb418012", "Vítá vás funkce Prostory"),
                a("fec3c1e0", "Místo pro živé zvukové konverzace"),
                a("j32eb4f8", "Přidejte maximálně 10 mluvčích"),
                a("j4f133a6", "Jako mluvčího můžete pozvat kohokoli na X."),
                a("ed434ac6", "Prostory jsou veřejné – může se k nim připojit kdokoli"),
                a("e0025688", "Váš Prostor, vaše pravidla"),
                a("c1bc6f86", "Jako hostitel určujete, kdo může mluvit. Zároveň máte oprávnění k odebrání uživatelů, které ve svém Prostoru nechcete."),
                a("b0bc8330", "Můžete také zablokovat nebo nahlásit uživatele v Prostoru."),
                a("cb17a0f3", "Další informace"),
                a("dcd77941", "Další informace"),
                a("cc724cb0", "Vytvořit klip"),
                a("cfd2f35e", "Zrušit"),
                a("c1df579e", "Další"),
                a("e3146662", "Pro tento klip nebylo možné vytvořit titulky."),
                a("f123fea8", "Nahlásit tento Prostor"),
                a("d0aebc28", "Popište problém"),
                a("g971a4e8", "Sebepoškozování"),
                a("b96e6682", "Násilí"),
                a("e5bf9b3a", "Sexuální obsah"),
                a("d2a34320", "Bezpečnost dítěte"),
                a("a9ba3e28", "Soukromé informace"),
                a("d5519f4a", "Urážlivé chování"),
                a("eb55363c", "Tento Prostor byl nahlášen"),
                a("i65de934", "Posloucháte anonymně"),
                a("b1037050", "Spravovat Prostor"),
                a("ic107434", "Zapnout kameru"),
                a("d7e0329c", "Vypnout kameru"),
                a("b772cd66", "Hotovo"),
                a("b3bd3e38", "Nejdříve populární posty"),
                a("d88cf16c", "Nejnovější post"),
                a("bd4ad3ea", "Široký"),
                a("ca1180a0", "Střední"),
                a("c86ff1b0", "Úzký"),
                a("eed02406", "Malé"),
                a("cffb04d6", "Standardní"),
                a("af15cef8", "Post s poznámkami"),
                a("ab28945c", "Profil přispěvatele"),
                a("e2462db4", "Nejčastěji sdílené ve vaší síti · Posledních 24 hodin"),
                a("ad16f482", "Událost"),
                a("c20aaf3e", "Chyba"),
                a("edf7bc2e", "Populární"),
                a("fa884026", "Seznam"),
                a("fa98627a", "Profil"),
                a("a9ae1e78", "Vyhledávání"),
                a("a2a3824a", "Téma"),
                a("a6d5b010", "Časová osa"),
                a("h5860a68", "Grok"),
                a("a990900c", "O mně"),
                a("h02a6fe6", "Komunity"),
                a("a15648a4", "Komunitní poznámky"),
                a("j359a2a9", function (e) {
                    return e.handle + " • " + e.itemName;
                }),
                a("j5ec9765", function (e) {
                    return e.handle + " • Složka pro záložky";
                }),
                a("ce5deee7", function (e) {
                    return e.handle + " • Zprávy";
                }),
                a("d80c77dc", "Tyto odpovědi jste skryli."),
                a("ef939f4b", function (e) {
                    return "Odpovědi skryté uživatelem @" + e.screenName;
                }),
                a("g40ff2b4", "Nepodařilo se změnit velikost mediálního souboru, který je tak k nahrání příliš velký."),
                a("b8098028", "Velikost nejméně jednoho obrázku překračuje limit a nelze ji změnit."),
                a("b36f4170", "Soubor je prázdný."),
                a("hab3781e", "Nejméně jeden z poskytnutých souborů není obrázek."),
                a("f6c4fb02", "Soubor obrázku GIF se nám nepodařilo zpracovat. Podívejte se na tipy k nahrávání souborů obrázků GIF."),
                a("g0af3dd2", "Soubor obrázku GIF není kompatibilní. Podívejte se na tipy k nahrávání souborů obrázků GIF."),
                a("b8c8b0be", "Soubor videa se nám nepodařilo zpracovat. Podívejte se na tipy k nahrávání videí."),
                a("ica6d718", "Soubor videa není kompatibilní. Podívejte se na tipy k nahrávání videí."),
                a("b28d44f7", function (e) {
                    return "Soubor obrázku GIF je příliš velký. Obrázky GIF musí mít méně než " + e.limit + " MB.";
                }),
                a("i1db7d13", function (e) {
                    return "Soubor videa je příliš velký. Videa musí mít méně než " + e.limit + " MB.";
                }),
                a("baac0ed7", function (e) {
                    return "Soubor videa je příliš velký. Videa musí mít méně než " + e.limit + " GB.";
                }),
                a("a22385bb", function (e) {
                    return "Vaše video je příliš dlouhé. Maximum je " + e.limit + " s.";
                }),
                a("be0440bf", function (e) {
                    return "Vaše video je příliš dlouhé. Maximum je " + e.limit + " min.";
                }),
                a("feeba512", "Soubor obrázku se nám nepodařilo zpracovat. Podívejte se na tipy k nahrávání obrázků."),
                a("db123c02", "Soubor obrázku není kompatibilní. Podívejte se na tipy k nahrávání obrázků."),
                a("db6001e7", function (e) {
                    return "Soubor obrázku je příliš velký. Obrázky musí mít méně než " + e.limit + " MB.";
                }),
                a("eb96d952", "Ve vašem souboru obrázku chybí údaje o výšce a šířce obrázku"),
                a("b3880588", "Vypršel časový limit relace nahrávání."),
                a("ca058b68", "Některá vaše média se nepodařilo nahrát."),
                a("id24379c", "Některá média se nepodařilo načíst."),
                a("h4d7cbcc", "Vaše média se nepodařilo nahrát. Zkuste to znovu."),
                a("aaa798fc", "Upgradujte"),
                a("f13bb672", "Přihlaste se k odběru předplatného Premium"),
                a("ab0decc0", "Odebírat"),
                a("e4e92f35", function (e) {
                    return "Upgradujte na " + e.tier;
                }),
                a("c2831f07", function (e) {
                    return "Předplaťte si uživatele " + e.tier;
                }),
                a("fd425414", "Získejte Radar"),
                a("g6320792", "Získejte analýzy Premium"),
                a("f09be7f8", "Ověřte svůj účet"),
                a("j34ad558", "Získejte Premium"),
                a("a73d39fb", function (e) {
                    return "Zahájit " + e.numberOfDays + "denní bezplatnou zkušební verzi";
                }),
                a("i4fb96c7", function (e) {
                    return "Získejte až " + e.percentage + "% slevu na X " + e.premiumTierName;
                }),
                a("c1c98165", function (e) {
                    return e.percentage + "% sleva";
                }),
                a("c5546038", "Platnost brzy vyprší!"),
                a("e9a47564", "Poslední šance"),
                a("f65e7e91", function (e) {
                    return e.percentage + "% sleva " + e.tier + " " + e.plan;
                }),
                a("a84a736e", "Získejte kredit na reklamu zdarma"),
                a("a0713d76", "Upgradujte si účet na ověřenou organizaci abyste získali kredit na reklamu zdarma a sadu nástrojů pro růst podnikání."),
                a("a07e13fc", "Staňte se tvůrcem Premium"),
                a("i1b4aea2", "Upgradujte pro postování delších videí"),
                a("efa90342", "Odemkněte úpravu postů s X Premium"),
                a("cc528e28", "Pouze předplatitelé X Premium mají přístup k úpravě postů. Pokud chcete pokračovat, upgradujte."),
                a("h8a3525e", "Zvýraznit na vašem profilu"),
                a("c0f7a722", "Abyste mohli přidat nejzajímavější příspěvky do Výběru ve svém profilu, musíte být přihlášeni k odběru Premium."),
                a("i3b31136", "Pište články na platformě X"),
                a("b6a41c5f", function (e) {
                    return "Musíte být přihlášeni k odběru " + e.tier + ", abyste mohli psát články na platformě X";
                }),
                a("ae2c4afc", "Chcete zveřejnit svůj článek?"),
                a("d300e29b", function (e) {
                    return "Upgradujte na " + e.tier + ", abyste mohli psát delší posty a články.";
                }),
                a("f614e2bc", "Upgradujte na Premium, abyste mohli psát delší posty a používat formátování, jako je tučné písmo a kurzíva."),
                a("c9772e6e", "Upgradujte na Premium"),
                a("dc5575ac", "Chcete mít ve svém profilu štítek s ověřením ID?"),
                a("d154f46e", "Odemkněte vytváření komunit s X Premium"),
                a("a0228c02", "Pouze uživatelé odebírající X Premium mají přístup k vytváření komunit. Pokud chcete pokračovat, upgradujte."),
                a("d07f1d74", "Pokud chcete přidat tyto uživatele do konverzace, musíte být ověřeni"),
                a("ebe38626", "Pouze ověření uživatelé mohou do skupiny přidávat lidi, kteří je nesledují. Pokud chcete pokračovat, upgradujte."),
                a("e6eddae0", "Proveďte ověření, abyste mohli vytvořit tuto skupinu"),
                a("he27089e", "Pouze ověření uživatelé mohou vytvořit skupinu s uživateli, kteří je nesledují. Pokud chcete pokračovat, upgradujte."),
                a("d7bc1116", "Ověřte svůj účet, abyste mohli poslat zprávu tomuto uživateli"),
                a("f897074a", "Pouze ověření uživatelé mohou posílat žádosti o soukromé zprávy lidem, kteří je nesledují. Pokud chcete pokračovat, upgradujte."),
                a("c0cf5eae", "Pokud chcete odesílat další zprávy, ověřte svůj účet"),
                a("h2da08fc", "Dosáhli jste maximálního limitu soukromých zpráv za jeden den. Pokud chcete pokračovat v posílání zpráv, upgradujte."),
                a("j503aee6", "Stahujte videa s X Premium"),
                a("j4dd3bf4", "Pouze uživatelé odebírající X Premium mohou stahovat videa. Pokud chcete pokračovat, upgradujte."),
                a("bc231a74", "Odemkněte složky záložek pomocí X Premium"),
                a("ed534c78", "Pouze předplatitelé X Premium mají přístup ke složkám záložek. Pokud chcete pokračovat, tak upgradujte."),
                a("ed924940", "Zbavte se všech reklam s Premium+"),
                a("dccdb326", "Pouze předplatitelům Premium+ se nezobrazují žádné reklamy. Pokud chcete pokračovat, upgradujte."),
                a("adf3410a", "Přihlaste se k odběru a odemkněte nové funkce, a pokud splňujete podmínky, získejte podíl z příjmů."),
                a("d8661dd4", "Po omezenou dobu. Odemkněte to nejlepší na X."),
                a("fe7fd234", "Vyzkoušejte předplatné Premium Basic zdarma ještě dnes"),
                a("a2f86dda", "Zlepšete si práci díky složkám záložek, úpravám příspěvků, vlastním ikonám aplikací a dalším funkcím s předplatným Premium Basic."),
                a("d9593598", "Vyzkoušejte si dnes Premium zdarma"),
                a("d0d6b59c", "Upgradujte své prostředí s méně reklamami, novými účinnými nástroji a dalšími funkcemi s Premium."),
                a("g4bb7ea8", "Získejte až 50% slevu na X Premium"),
                a("b748499c", "Nabídka prodloužena!"),
                a("b81135bc", "Akce končí dnes!"),
                a("a8b4b878", "Zažijte to nejlepší na X během tohoto Díkůvzdání."),
                a("df7fb242", "Nabídka k Díkůvzdání"),
                a("aeaf14a6", "Získejte 40% slevu na předplatné Premium. Nabídka brzy vyprší!"),
                a("ca8cbf78", "Získejte 40% slevu na předplatné Premium a Premium+"),
                a("j88ba18e", "Nárokovat si nabídku"),
                a("f4dc8ea3", function (e) {
                    return "Získejte " + e.percentage + "% slevu na předplatné X Premium. Odemkněte to nejlepší na X.";
                }),
                a("db6a5d54", "Dosud nejste ověřeni"),
                a("edf7f57e", "Získejte ověření pro lepší odpovědi, analýzy, prohlížení bez reklam a další. Upgradujte svůj profil nyní."),
                a("ba920d68", "Zvyšte svůj vliv pomocí ověření"),
                a("ib79d0c2", "Odemkněte funkce VIP: ověřte svůj účet"),
                a("c0d3bd82", "Inzerovali jste na X, nemáte ale předplatné pro Ověřené organizace"),
                a("d7836d1e", "Přihlaste se k odběru a získejte bezplatný kredit na reklamu ve výši až 12 000 USD, zlaté ověření, VIP podporu a sadu nástrojů pro růst."),
                a("f528e369", function (e) {
                    return "Pokud chcete psát své vlastní články, přihlaste se k odběru " + e.tier;
                }),
                a("c5a8022a", "Pomocí článků můžete publikovat svůj vlastní dlouhý obsah s formátovaným textem a vloženými médii přímo na platformě X."),
                a("d77899b6", "Pokud chcete psát své vlastní delší posty, přihlaste se k odběru Premium"),
                a("bd65482a", "Pište delší posty a použijte formátování textu, jako je tučné písmo a kurzíva."),
                a("bee20918", "Získejte zaplaceno za post"),
                a("gb699d52", "Baví vás postovat na X? Přihlaste se k odběru Premium a připojte se k našemu programu sdílení výnosů."),
                a("f69877c2", "zvýšení svoje odpovědi s Premium"),
                a("gba90d44", "Získejte větší viditelnost, vynikněte a buďte vidět."),
                a("a6dbcd58", "Podporujte tvůrce přihlášením se k odběru předplatného Premium"),
                a("c4f49130", "Až 25 % z vašeho poplatku za předplatné jde přímo autorům."),
                a("ca8fa2c0", "Získejte ověření s modrým zaškrtnutím"),
                a("febffc1a", "Boostujte svou důvěryhodnost, zvyšte svou viditelnost a nechte slyšet svůj hlas."),
                a("j45a377a", "Upgradujte na Premium+"),
                a("i7170016", "Užijte si další výhody, například žádné reklamy, a největší prioritu odpovědí."),
                a("ee87f95e", "Pokročilá analýza s Premium"),
                a("ac38dbc0", "Podívejte se na analýzu svého profilu, pochopte své publikum a další. Pokud chcete pokračovat, tak upgradujte."),
                a("i6e73154", "Náhled funkce Analýza účtu včetně sloupcových grafů a metrik"),
                a("b583e154", "Odemkněte analýzy s X Premium"),
                a("b7fb8c5e", "Utraťte 1 000 USD, získejte 1 000 USD"),
                a("ca559b70", "Přihlaste se k odběru teď hned"),
                a("d68773a4", "Vizualizujte trendy s pomocí Radaru"),
                a("f677fed6", "Sledujte klíčová slova, vizualizujte aktivitu trendů a filtrujte konverzace. V reálném čase."),
                a("ha49eac2", "Chcete rychle růst na X?"),
                a("f27018b4", "Použijte analýzy Premium a rozšiřte své sledující pomocí chytrých přehledů dat."),
                a("dfea1f08", "Nenechte si ujít cenné přehledy"),
                a("da8c5244", "S analýzami Premium můžete odemknout chytré přehledy dat, abyste získali více sledujících."),
                a("b081baea", "Přicházíte o přehledy!"),
                a("d5effffc", "Přidat odznak"),
                a("c3653d44", "Ověřte svou firmu"),
                a("e8070e70", "Vyzkoušejte Premium"),
                a("ec42820e", "Chcete, aby vaši odpověď vidělo více lidí?"),
                a("b0a95418", "Získejte zvýšení odpovědí s Premium"),
                a("j8ee20aa", "Buďte výjimeční v konverzaci s funkcí zvýšení odpovědí"),
                a("g13aa596", "Přihlaste se k odběru Premium, aby byly vaše odpovědi boostovány"),
                a("cadd92be", "Vstupte do své analýzy postu"),
                a("a7058228", "Odemkněte pokročilé analýzy s X Premium"),
                a("gb7823ba", "Analýza účtu"),
                a("i90f8e36", "Uspořádejte si záložky"),
                a("abc6e710", "Uspořádejte své záložky do složek pomocí X Premium"),
                a("b7fa0cfe", "Populární články"),
                a("bcc7e8c0", "Všechny záložky"),
                a("i3145aa0", "Záložky"),
                a("e39b368e", "Vysílání"),
                a("hbea78a8", "Nový sloupec"),
                a("b5298d92", "Spojit se"),
                a("d35d74e4", "Konverzace"),
                a("h5245afa", "Komunita"),
                a("d4ebc798", "Koncepty"),
                a("fcf3e54c", "Prozkoumat"),
                a("d806aa1a", "Skryté odpovědi"),
                a("ha8209bc", "Hlavní stránka"),
                a("a2f81050", "Zprávy"),
                a("cf2d1048", "Žádosti o soukromou konverzaci"),
                a("e7172d70", "Další zprávy"),
                a("e1066d88", "Můj profil"),
                a("eb75875e", "Oznámení"),
                a("j45978a8", "Citace"),
                a("fd6a3f30", "Naplánované posty"),
                a("aa4209e8", "Super-sledující"),
                a("d52a1caa", "Odběratelé"),
                a("d7b51c68", "Předplatná"),
                a("c5f4befa", "Trendy"),
                a("df34a454", "Post"),
                a("gfccba44", "Žádosti o členství"),
                a("e42dd8fa", "Protokol moderování"),
                a("c2c191fc", "Nahlášené posty"),
                a("c63602d4", "Moje komunity"),
                a("ddf0ba7e", "Sbírka"),
                a("c64974fc", "Sledující"),
                a("i099d32e", "Sledující, které znáte"),
                a("d960b55c", "Sleduji"),
                a("b007440a", "Práce"),
                a("aa68dafc", "Detaily oznámení"),
                a("b8533bac", "Témata"),
                a("jf00ebf6", "Sloupec není dostupný"),
                a("jaaa8984", "Sídlo"),
                a("f345dcda", "Historie úprav"),
                a("hea3f8ac", "Související posty"),
                a("c8ee31da", "Zprávy"),
                a("d35c9eec", "Analýza účtu"),
                a("b5b7fb94", "Skupina"),
                a("g755fcde", "Vy"),
                a("f6b1ff81", function (e) {
                    return "Uživatel " + e.name + " a vy";
                }),
                a("j652293d", function (e) {
                    return e.listOfParticipants + " a další (" + e.count + ")";
                }),
                a("fb4ee2f6", "Žádosti o zprávu odstraněny"),
                a("j607bf02", "Stáhněte si aplikaci X"),
                a("j49fd4e8", "Přepnout do aplikace"),
                a("a565833e", "Zaregistrovat se"),
                a("e919c3bc", "Přihlásit se"),
                a("a17a75da", "Platforma X je lepší v aplikaci"),
                a("e7342ed4", "Nezmeškejte ani jediný post. Začněte používat aplikaci X a využívejte ji naplno."),
                a("b6a43e78", "Buďte mezi prvními, kdo se o tom dozví"),
                a("b469e406", "Mějte dokonalý přehled o tom, co vás zajímá. Začněte používat aplikaci a dostávejte oznámení o lidech, tématech a událostech, které sledujete."),
                a("b8505290", "Do konverzace se zapojíte tak, že odpovíte."),
                a("ae8b0564", "Repostováním rozšíříte post do světa."),
                a("f2adab0e", "Vyjádřete obdiv lajknutím postu."),
                a("b7821a74", "Zaregistrujte se a už nikdy nezmeškejte žádný post."),
                a("e6d43d06", "Sledujte nějaké téma a objevte skvělé posty."),
                a("ic848090", "Napřed se přihlaste"),
                a("f9ebe066", "Můžete se zapojit do konverzace v komunitách, stačí se jen napřed přihlásit."),
                a("je3d93e2", "Uživatelé platformy X se vše dozví jako první."),
                a("ea88ce2e", "Nezmeškejte nic z aktuálního dění"),
                a("d8817e36", "Accept all cookies"),
                a("b9288ee6", "Refuse non-essential cookies"),
                a("i1390ec2", "Did someone say … cookies?"),
                a("ga3121d5", "centru podpory"),
                a("g482c949", "Zobrazte si další informace o svých možnostech."),
                a("b47e760e", "Stisknutím otazníku zobrazíte klávesové zkratky."),
                a("fd2c7b44", "Zobrazit klávesové zkratky"),
                a("g7e2adf2", "Vytvořit nový deck"),
                a("a6ba09e8", "Duplicitní sloupec"),
                a("f5c9ccca", "Upravit aktuální deck"),
                a("bf42c578", "Nastavit fokus na tlačítko pro přeuspořádání"),
                a("j6fa64a6", "Přejít na poslední sloupec"),
                a("b5545202", "Přejít na poslední připnutý deck"),
                a("e0497acc", "Přejít na správu všech decků"),
                a("beef7b14", "Přejít na další sloupec"),
                a("a5cb005e", "Přejít na N. sloupec"),
                a("f65391bc", "Přejít na N. připnutý deck"),
                a("h0bfdd20", "Přidat sloupec"),
                a("h770f6d4", "Přejít na předchozí sloupec"),
                a("b8b2b70c", "Smazat sloupec"),
                a("a3e2df76", "Zrušit smazání sloupce"),
                a("g850aec4", "Otevřít / zavřít nastavení sloupců"),
                a("d5696fcc", "Nápověda ke zkratkám"),
                a("a83d4280", "Další post"),
                a("g0048656", "Předchozí post"),
                a("a690c4d0", "O stránku níž"),
                a("e893811a", "Načíst nový post"),
                a("cdb53d7a", "Zmínky"),
                a("d7b8ebaa", "Lajky"),
                a("b0041756", "Seznamy"),
                a("d4986f86", "Soukromé zprávy"),
                a("bb081ea2", "Nastavení"),
                a("eee2ed92", "Přejít na uživatele..."),
                a("ee5ccf3e", "Nastavení zobrazení"),
                a("ab3d53f8", "Nový post"),
                a("de94bda6", "Odeslat post"),
                a("e736990a", "Nová soukromá zpráva"),
                a("fe731016", "Lajknout"),
                a("d17df548", "Odpovědět"),
                a("g062295e", "Repost"),
                a("h01621a4", "Sdílet post"),
                a("gb303814", "Záložka"),
                a("c03b1126", "Skrýt účet"),
                a("ebd2abb2", "Zablokovat účet"),
                a("hc6c5510", "Zobrazit podrobnosti postu"),
                a("eebdef38", "Rozbalit fotku"),
                a("b488758c", "Otevřít/Zavřít okno se zprávami"),
                a("c82314e0", "Pozastavit/přehrát vybrané video"),
                a("b881560e", "Ztlumit vybrané video"),
                a("a94f7302", "Přejít do zvukového doku"),
                a("a7e604c6", "Přehrát nebo pozastavit zvukový dok"),
                a("f978c4fc", "Ztlumit zvukový dok nebo zrušit ztlumení"),
                a("hc73f030", "Váš účet"),
                a("f15bfdb4", "Informace o účtu"),
                a("a3841918", "E-mail"),
                a("c21037d0", "Země"),
                a("ab1f7ee0", "Změňte si heslo"),
                a("e731db5a", "Obnovení hesla"),
                a("f56af9cc", "Stáhněte si archiv s vašimi údaji."),
                a("hfb92b14", "Deaktivovat účet"),
                a("bf96fda4", "Věk"),
                a("d12d42dc", "Automatizace"),
                a("fdb81456", "Štítek parodie"),
                a("j9d10268", "Aktivita účtu"),
                a("i6b3f59a", "Historie účtu"),
                a("da202f9a", "Váš seznam inzerentů"),
                a("hc36dbba", "Přihlášená zařízení a aplikace"),
                a("a8d0108e", "Pohlaví"),
                a("a03dacaa", "Jazyk"),
                a("d9138166", "Zobrazte místa, která jste navštívili"),
                a("b523ecc6", "Historie přístupu k účtu"),
                a("abedd45c", "Vyžádat si údaje"),
                a("h1f01a24", "Zájmy"),
                a("j7ad754a", "Vaše data na X"),
                a("d299431c", "Monetizace"),
                a("j087774e", "Mince"),
                a("ff9ed474", "Celkový výdělek"),
                a("ec885836", "Podíl z výnosů pro tvůrce"),
                a("b431a5c6", "Podíl na příjmech z reklamy"),
                a("b0e986ec", "IDV monetizace"),
                a("aca4d76a", "Nastavení podílu na příjmech z reklamy"),
                a("ab1b837a", "Řídicí panel podílu na příjmech z reklam"),
                a("a9c1a9cc", "Reklamy ve videu"),
                a("d4ab5c12", "Nastavení reklam ve videu"),
                a("c429e3ba", "Předplatná tvůrců"),
                a("fce877d6", "Zrušit post"),
                a("dd0c889e", "Přizpůsobení profilu"),
                a("ib35705e", "Správa předplatného"),
                a("cf131522", "Spravovat partnerské odznaky"),
                a("cb165528", "Funkce a nastavení zpráv"),
                a("f8645654", "Zabezpečení a přístup k účtu"),
                a("j95edf76", "Zabezpečení"),
                a("fd127276", "Spravovat přístupové klíče"),
                a("afe4a358", "Ověření ID"),
                a("dd703318", "Dvoufaktorové ověřování"),
                a("b1686800", "Správa bezpečnostních klíčů"),
                a("ae72d4c4", "Aplikace a relace"),
                a("a1e8e682", "Registrovaná zařízení"),
                a("h1abfbce", "Propojené účty"),
                a("cad53944", "Soukromí a bezpečnost"),
                a("e908903a", "Cílová skupina a označování"),
                a("b5c85d2c", "Chraňte své posty"),
                a("f56d108e", "Označování fotek"),
                a("c6f67e32", "Vaše posty"),
                a("f2bd9c48", "Obsah, který vidíte"),
                a("cbd449a0", "Skrytí a blokování"),
                a("daef29b8", "Skryté účty"),
                a("i0dd9b9e", "Skrytá slova"),
                a("a5f32aa2", "Zablokované účty"),
                a("i58a274c", "Soukromé zprávy"),
                a("ded416b0", "Prostory"),
                a("fd4d9068", "Objevitelnost a kontakty"),
                a("bbcafbda", "Spravovat kontakty"),
                a("aeddb28a", "Preference týkající se obsahu"),
                a("d035a8d0", "Preference týkající se reklam"),
                a("d0b74a5a", "Cookie preferences"),
                a("h3909cd0", "Odvozená identita"),
                a("d84e63d2", "Aktivita mimo X"),
                a("h14ba864", "Sdílení údajů s obchodními partnery"),
                a("jabb9c9a", "Informace o poloze"),
                a("fcb6a5b8", "Přidejte ke svým postům informace o poloze"),
                a("h9f2da68", "Choulostivý mediální obsah"),
                a("id6a8e1a", "Filtr odpovědí"),
                a("fc35f762", "Filtrované odpovědi"),
                a("gaac710a", "Centrum hlášení"),
                a("bcd81cac", "Preference"),
                a("i647fb04", "Filtry"),
                a("hee41732", "Oznámení typu push"),
                a("e75f25a8", "E-mailová oznámení"),
                a("cf9b166a", "Přístupnost, zobrazení a jazyky"),
                a("e3719c16", "Zpřístupnění"),
                a("a776eed8", "Automatické přehrávání"),
                a("c4881c66", "Zobrazení"),
                a("d495680e", "Jazyky"),
                a("f953f53a", "Změnit jazyk zobrazení"),
                a("eafe3288", "Využití dat"),
                a("b721eb38", "Informace"),
                a("g9230d00", "Delegát"),
                a("cb8ebf5c", "Členové, které jste delegovali"),
                a("i95202f6", "Účty, které vám byly delegovány"),
                a("afcad7f2", "Stáhnout aplikaci"),
                a("e8f57e08", "Personalizace a údaje"),
                a("gbde3534", "Zájmy a údaje o reklamách"),
                a("a54826c6", "Zájmy odvozené na základě informací partnerů"),
                a("a5cbc19a", "Vaše analýzy"),
                a("i9028824", "Načítání"),
                a("f5090e28", "Zdá se, že jste ztratili připojení. Budeme to zkoušet znovu."),
                a("ba929da8", "Stránka nenalezena"),
                a("d203e242", "Nenalezeno"),
                a("e2eac0c4", "Primární"),
                a("i5aa4ce0", "Další položky nabídky"),
                a("h63a5c3c", "Víc"),
                a("a4fc1872", "Minulý týden"),
                a("e14bb1da", "Včera"),
                a("d86bbf0f", function (e) {
                    return "Nepřečtené položky (" + e.count + ")";
                }),
                a("h6beb5fb", function (e) {
                    return e.count + "+";
                }),
                a("i5f7b6b8", "Účet"),
                a("da4691aa", "Zobrazit všechny účty"),
                a("c7e55ccf", function (e) {
                    return "Přepnout na účet @" + e.screenname;
                }),
                a("b20a3894", "Účet, na který se snažíte přepnout, byl smazán."),
                a("daffabde", "vystupujete jménem..."),
                a("eccbfa26", "Delegované účty"),
                a("a1b7a904", "Jednat jménem"),
                a("g61ed8a4", "Něco se pokazilo."),
                a("e520f166", "Překročili jste denní limit odeslaných postů."),
                a("c0554ca0", "Něco se pokazilo. Zkuste post za chvíli odeslat znovu."),
                a("b25c5b2a", "Jejda, tohle už jste řekli."),
                a("cef21114", "Dokud máte pozastavený účet, nemůžete posílat posty."),
                a("cf369a0e", "Post, na který se snažíte odpovědět, byl smazán nebo pro vás není viditelný."),
                a("cd86efa8", "V textu postu jste překročili povolený počet @zmínek."),
                a("e002f424", "Text vašeho postu přesahuje povolený počet URL adres."),
                a("c2b4ae8c", "V textu postu jste překročili povolený počet hashtagů."),
                a("hf05f59e", "V textu postu jste překročili povolený počet cashtagů."),
                a("dffb84c6", "Text vašeho postu obsahuje hashtag, který už není povolen."),
                a("d7b21bc8", "Post překračuje povolený počet typů příloh."),
                a("e4672ac2", "Ale ne! Vypadá to, že odkaz ve vašem postu vede na stránku, která obsahuje spam nebo nebezpečný obsah."),
                a("he5ecf52", "V textu postu jste překročili povolený počet znaků."),
                a("ac78e602", "Obsah vašeho postu není platný."),
                a("i251c738", "Snímková frekvence videa, které jste se pokusili nahrát, byla příliš vysoká."),
                a("ed3ac7ef", function (e) {
                    return "Snímková frekvence videa, které jste se pokusili nahrát, byla příliš vysoká. Maximální snímková frekvence: 60. Skutečná snímková frekvence: " + e.frameRate + ".";
                }),
                a("e23fe0cc", "Poměr stran videa, které jste se pokusili nahrát, byl příliš velký."),
                a("ca4514c0", "Poměr stran videa, které jste se pokusili nahrát, byl příliš malý."),
                a("fb4a459c", "Délka videa, které jste se pokusili nahrát, byla příliš krátká."),
                a("ca1afa98", "Délka videa, které jste se pokusili nahrát, byla příliš dlouhá."),
                a("b2e94283", function (e) {
                    return "prostřednictvím @" + e.viaScreenName;
                }),
                a("ee69d769", function (e) {
                    return "Postovat" + e.verb;
                }),
                a("ge8e4a38", "Postovat vše"),
                a("h735a98e", "Naplánovat"),
                a("h3701ffe", "Aktualizovat"),
                a("d9ef2842", "Nepřečtené položky"),
                a("cdf89b84", "Náhled značkových lajků"),
                a("i83d4f14", "Žádosti o sledování"),
                a("aeede01a", "Právní informace"),
                a("ae1bbb26", "Odhlásit se"),
                a("fd442790", "Nastavení a soukromí"),
                a("da137d9a", "MStV Transparenzangaben"),
                a("e0cb0c72", "Reklamy"),
                a("e2eef3c2", "Ověřené organizace"),
                a("b55d8a78", "Vytvořte svůj Prostor"),
                a("e5323e36", "Vysílat živě"),
                a("a5a30af0", "Články"),
                a("d13d697c", "Nový"),
                a("j0e2cfa8", "Firma"),
                a("h5e38204", "Chat"),
                a("h7d5d9fa", "Beta"),
                a("ga169e1b", function (e) {
                    return "Soukromé zprávy (" + e.count + " nepřečten" + n(e.count, "é konverzace", "é konverzace", "á konverzace", "ých konverzací") + ")";
                }),
                a("d83682ec", "Hlavní stránka (nové nepřečtené posty)"),
                a("e1249849", function (e) {
                    return "Oznámení (" + e.count + " nepřečten" + n(e.count, "á", "á", "é", "ých") + " oznámení)";
                }),
                a("c0b786ee", "Hledejte a objevujte"),
                a("bb967f9e", "Videa"),
                a("e04033be", "Jsou k dispozici nové posty. Můžete na ně přejít stisknutím klávesy s tečkou."),
                a("hec711c0", "Zobrazit nové posty"),
                a("j0a8da6e", "Přidat existující účet"),
                a("c6f2bf00", "Spravovat účty"),
                a("a58e0e51", function (e) {
                    return "Odhlásit se z účtu @" + e.screenName;
                }),
                a("j62f43a6", "Zobrazit delegované účty"),
                a("d4c52015", function (e) {
                    return e.count + " pending delegate account čekající" + n(e.count, " pozvánky k delegovaným účtům", "ch pozvánek k delegovaným účtům", " pozvánka k delegovanému účtu", "ch pozvánek k delegovaným účtům");
                }),
                a("b8e1d524", "Účty"),
                a("gef27c4c", "Nabídka účtu"),
                a("b7dc3885", function (e) {
                    return "Přepnout na účet @" + e.screenName;
                }),
                a("c61eea74", "Osobní účty"),
                a("g6d42fea", "Přepnout navigaci"),
                a("eb022176", "Vytvořit účet"),
                a("gcfef7b6", "Vytvořit účet pomocí telefonu nebo e-mailu"),
                a("e5b0e544", "Přihlásit se"),
                a("gd93944e", "Využít aplikaci"),
                a("f2f787a0", "smluvními podmínkami"),
                a("e1099fd6", "zásadami ochrany osobních údajů"),
                a("c1df1ae0", "zásadami používání souborů cookie"),
                a("cdc1bff7", function (e) {
                    return "Nabídka profilu " + e.loggedInUserName;
                }),
                a("fd48249b", function (e) {
                    return "Lidé: " + e.count;
                }),
                a("b93ba92d", function (e) {
                    return e.peopleCount + " " + n(e.peopleCount, "lidé", "lidí", "osoba", "lidí");
                }),
                a("ae2205d2", "Vzájemně se sledujete"),
                a("fd06b02f", function (e) {
                    return "Uživatel @" + e.screenName + " je právě v aktivním Prostoru, kliknutím se můžete připojit přes jeho profil";
                }),
                a("f2b3fe06", "Načítání výsledků"),
                a("fc9dd578", "Hledat lidi"),
                a("gdb7bc25", function (e) {
                    return e.name + " – výběrem odeberete";
                }),
                a("f065ba8c", "Hledaný dotaz"),
                a("hbc99b03", function (e) {
                    return "Přejít na profil uživatele @" + e.screenName;
                }),
                a("a2c1b222", "Zkuste vyhledat osoby, seznamy či klíčová slova"),
                a("f45c4250", "Vymazat všechna poslední hledání?"),
                a("caae4dda", "Tento krok nelze vrátit zpět a vy jím smažete všechna nedávná hledání."),
                a("dbd5d400", "Vymazat"),
                a("a8d68f62", "Poslední"),
                a("c6530778", "Uložená hledání"),
                a("e047b8fa", "Smazat vše"),
                a("aa6e3300", "Vypadá to, že se vaše připojení přerušilo. Zkontrolujte ho a zkuste to znovu."),
                a("e68b09b4", "Odstranit"),
                a("hffea05c", "Smazat uložené hledání?"),
                a("j037e374", "Tento krok nelze vrátit zpět, o uložené hledání přijdete."),
                a("d96cf7ce", "Smazat"),
                a("hbe4feb5", function (e) {
                    return "Uživateli @" + e.screenName + " jsme poslali žádost o sledování, nyní čekáme, až ji schválí.";
                }),
                a("df4c86b0", "Nejdříve si aktualizujte profil."),
                a("bba40ffa", "Tento účet nemůžete sledovat."),
                a("f558829e", "Pokud chcete tento účet sledovat, bude třeba, abyste na svém profilu uvedli své datum narození, pomocí něhož se dozvíme, že splňujete požadavek na minimální věk."),
                a("a6941096", "Tento účet z vaší země nelze sledovat."),
                a("if8cd2a4", "Na sledování tohoto účtu nemáte dostatečný věk."),
                a("b5972260", "Něco se pokazilo. Zkuste žádost o sledování uživatele za minutku zrušit ještě jednou."),
                a("j4292c24", "Uživatel požádal, abyste ho nemohli sledovat."),
                a("a0ba5842", "Nyní už nemůžete začít sledovat další lidi."),
                a("a5202b82", "Něco se pokazilo. Zkuste začít uživatele sledovat za chvíli znovu."),
                a("f8cbf714", "Snažíte se sledovat uživatele, který neexistuje."),
                a("f2e66452", "Váš účet byl pozastaven a nemůže sledovat uživatele."),
                a("ca96fe6e", "Něco se pokazilo. Zkuste uživatele za minutku odblokovat ještě jednou."),
                a("e1a0aaca", "Něco se pokazilo. Zkuste sledování uživatele za minutku zrušit ještě jednou."),
                a("fd5208c6", "Přejít do nastavení"),
                a("c0d13570", "Partnerské účty"),
                a("ba96929e", "Nábor"),
                a("gf62c116", "Podpora"),
                a("a4cf866e", "Reklama"),
                a("g2fd3206", "Lidé"),
                a("h70bdf0a", "Radar"),
                a("bf6b72ac", "Plný přístup"),
                a("e49537c2", "Tato stránka bohužel neexistuje. Zkuste hledat něco jiného."),
                a("fcbb540a", "Byl překročen limit."),
                a("d4f88600", "Ověřit kontakt"),
                a("b192ccae", "Nemáte potvrzenou metodu kontaktování"),
                a("a0487504", "Pokud chcete požádat o ověření, musíte napřed potvrdit metodu kontaktování."),
                a("fff7d93c", "Přidat fotku"),
                a("g969bfae", "Chybí vám profilová fotka."),
                a("gb2f35e4", "Abyste mohli požádat o ověření, musíte si napřed přidat profilovou fotku."),
                a("i33cf692", "Pole pro přidání adresy URL"),
                a("b679ff6a", "Neplatná adresa URL"),
                a("i79902b4", "Vyberte způsob potvrzení autenticity"),
                a("fb2fcb5c", "Tento krok nám pomůže s ověřením vaší totožnosti. Vyberte si nejvhodnější metodu."),
                a("e43425fa", "Průkaz totožnosti vydaný vládou"),
                a("cb7c2e2e", "Fotka vašeho průkazu totožnosti vydaného vládou."),
                a("a411926a", "Oficiální e-mailová adresa"),
                a("g253cdd0", "Oficiální e-mail s doménou relevantní pro zvolenou kategorii."),
                a("cf93bcb0", "Odkaz na oficiální web"),
                a("gfb55fa8", "Oficiální web, který přímo odkazuje na váš účet na platformě X."),
                a("g40cd2c0", "Ověřený odkaz"),
                a("a7f1cff6", "Přidejte odkaz na oficiální web"),
                a("a11cd524", "Zadejte oficiální web, který odkazuje na váš účet na platformě a souvisí s vaší žádostí o ověření."),
                a("ba656f26", "Je na webu odkaz na váš účet na platformě X?"),
                a("ed751204", "Abychom vás mohli ověřit, potřebujeme si potvrdit, že váš účet je autentický. Pokud na stránce, na kterou jste zadali odkaz, není uvedené vaše uživatelské jméno, budete muset před vyřízením vaší žádosti odeslat důkaz o autenticitě."),
                a("fbc023b0", "Ano, je"),
                a("e785ce06", "Použiji jinou možnost"),
                a("i8d58f3e", "Chci použít doklad totožnosti"),
                a("eb21ecaa", "Chci použít e-mailovou adresu"),
                a("f848a69e", "Musíme váš účet potvrdit jako autentický, abychom vás mohli ověřit. Pokud poskytnutý oficiální web vaše uživatelské jméno neobsahuje, nemůžeme autenticitu vašeho účtu potvrdit."),
                a("d59b5366", "Musíme potvrdit pravost vašeho účtu, abychom vás ověřili. Pokud stránka, jejíž odkaz jste uvedli, neobsahuje vaše uživatelské jméno, nemůžeme spolehlivě spojit váš účet s významným tvůrcem obsahu."),
                a("bfb01c62", "Ne, přejít zpět"),
                a("fa51040a", "Zadejte odkaz na oficiální web kvalifikované zpravodajské organizace nebo periodika, který obsahuje informace o vás i vašem účtu na platformě X."),
                a("d0460f12", "Zadejte odkaz, který váš účet na platformě X uvádí jako oficiální účet vaší organizace. Odkaz musí vést na oficiální web ověřené entity."),
                a("h45b00d8", "Vyberte metodu, kterou prokážete, že váš účet je autentický a že jej spravuje společnost působící v oblasti zábavy, která je spojená s touto žádostí."),
                a("fc718708", "Oficiální web kvalifikované organizace, který odkazuje na vás a na váš účet na platformě X."),
                a("g32c2900", "Vyberte metodu, kterou prokážete, že váš účet je autentický a že jej spravuje produkční organizace, která je spojená s touto žádostí."),
                a("j5b1224c", "Zadejte odkaz, který váš účet uvádí jako oficiální účet vaší produkce na platformě X. Odkaz musí vést na oficiální web ověřené entity."),
                a("d090a5d4", "Oficiální web ověřené organizace nebo periodika, který odkazuje na váš účet na platformě X."),
                a("eb08a392", "Vyberte metodu, kterou prokážete, že váš účet je autentický a že jej spravuje kandidát na funkci ve státní správě, který je spojený s touto žádostí."),
                a("h0de1396", "Zadejte odkaz, který váš účet na platformě X uvádí jako oficiální účet kandidáta na funkci, který je spojený s touto žádostí. Odkaz musí vést na oficiální web ověřené entity."),
                a("dcc23262", "Vyberte metodu, kterou prokážete, že váš účet je autentický a že jej spravuje aktivista nebo organizátor, který je spojený s touto žádostí."),
                a("c880e068", "Oficiální web zájmové skupiny, který odkazuje na vás a na váš účet na platformě X."),
                a("e412d500", "Zadejte odkaz, který obsahuje referenční informace o vás ve vedoucí pozici ověřené zájmové skupiny a uvádí váš účet¨na platformě X. Referenční informace musí pocházet z oficiálního webu ověřené organizace."),
                a("dedf41f2", "Vyberte metodu, kterou prokážete, že váš účet je autentický a že jej spravuje vlivná osobnost, která je spojená s touto žádostí."),
                a("b4aed9e0", "Oficiální web ověřené organizace, který odkazuje na vás a na váš účet na platformě X."),
                a("b2069e40", "Zadejte odkaz, který obsahuje referenční informace o vás a uvádí váš účet na platformě X. Referenční informace musí pocházet z oficiálního webu ověřené organizace."),
                a("baf718c4", "Vyberte metodu, kterou prokážete, že váš účet je autentický a že jej spravuje společnost, značka nebo organizace, která je spojená s touto žádostí."),
                a("c65bbbc2", "Vyberte metodu, kterou prokážete, že váš účet je autentický a že jej spravuje člen vrcholového vedení nebo výkonného výboru, který je spojený s touto žádostí."),
                a("i31e3606", "Oficiální e-mailová adresa s doménou kvalifikované společnosti, značky nebo organizace."),
                a("de70afe8", "Odkaz na vás a váš účet na platformě X na oficiálním webu kvalifikované organizace."),
                a("a3a523f2", "Zadejte odkaz, který váš účet na platformě X uvádí jako oficiální účet vaší společnosti. Odkaz musí vést na oficiální web ověřené entity."),
                a("jf58899a", "Zadejte odkaz, který vás uvádí jako člena vrcholového vedení vaší organizace a váš účet na platformě X. Odkaz musí vést na oficiální web ověřené entity."),
                a("f7afbaec", "Vyberte metodu, kterou prokážete, že váš účet je autentický a že jej spravuje novinář pracující pro opravňující zpravodajskou organizaci nebo periodikum."),
                a("d4ab0056", "Vyberte způsob, jak potvrdit, že váš účet je autentický a spravuje jej významný novinář na volné noze."),
                a("d2a77622", "Oficiální e-mailová adresa s doménou kvalifikované zpravodajské organizace nebo periodika."),
                a("eec341da", "Oficiální web zpravodajské organizace nebo periodika, který obsahuje informace o vašem účtu na platformě X."),
                a("b03ae068", "Vyberte metodu, kterou prokážete, že váš účet je autentický a že jej spravuje zpravodajská organizace nebo periodikum podávající tuto žádost."),
                a("g0daba4a", "Vyberte metodu, kterou prokážete, že váš účet je autentický a že jej spravuje osobnost profesionálního esportu spojená s touto žádostí."),
                a("ab8e430c", "Zadejte odkaz, který váš účet na platformě X uvádí jako oficiální účet jednotlivce v esportu spojeného s touto žádostí. Odkaz musí vést na oficiální web ověřené entity."),
                a("cdcd9cd6", "Vyberte metodu, kterou prokážete, že váš účet je autentický a že jej spravuje profesionální sportovní entita spojená s touto žádostí."),
                a("gad25890", "Zadejte odkaz, který váš účet na platformě X uvádí jako oficiální účet profesionální sportovní entity spojené s touto žádostí. Odkaz musí vést na oficiální web ověřené entity."),
                a("e6dc91b2", "Vyberte metodu, kterou prokážete, že váš účet je autentický a že jej spravuje osobnost profesionálního sportu spojená s touto žádostí."),
                a("i9aed706", "Zadejte odkaz, který váš účet na platformě X uvádí jako oficiální účet osobnosti profesionálního sportu spojené s touto žádostí. Odkaz musí vést na oficiální web ověřené entity."),
                a("abd587d2", "Přidat další odkaz"),
                a("i0bba81a", "Přidat referenci o zaměstnání"),
                a("a6a76e3c", "Vybrat metodu ověření významnosti"),
                a("ecd2abda", "Potvrdit způsobilost účtu"),
                a("cb70b894", "Zpět"),
                a("g8b511fe", "Trendy Google"),
                a("c7d50c96", "Profil na webu Trendy Google s důkazy o nedávných aktivitách vyhledávání v souvislosti s vámi."),
                a("a68b43ee", "Přidejte profil na webu Trendy Google"),
                a("b5e30390", "Profil na webu Trendy Google"),
                a("h146703e", "Článek na Wikipedii"),
                a("ee38d0f0", "Článek na Wikipedii, který je o vás a splňuje její kritéria významnosti lidí."),
                a("cb97ee3e", "Přidejte článek na Wikipedii"),
                a("hc371f34", "Výskyty ve zpravodajství"),
                a("b9d0ad90", "Nejméně tři odkazy na respektované zpravodajské organizace, které o vás informovaly nebo na vás odkazovaly během posledních šesti měsíců."),
                a("ge137dce", "Nejméně tři články o vaší osobě v kvalifikovaných zpravodajských periodikách z posledních šesti měsíců."),
                a("h2b9a5fe", "Nejméně tři články o vaší společnosti v kvalifikovaných zpravodajských periodikách z posledních šesti měsíců"),
                a("baccb708", "Přidejte ověřené výskyty ve zpravodajství"),
                a("feadd98c", "Přidejte odkazy na ověřené zpravodajské organizace"),
                a("j7ae97aa", "Odkazy na ověřené zpravodajské organizace"),
                a("c368aa8e", "Nejméně tři články z ověřených zpravodajských periodik, které na vás odkazují"),
                a("ded0edad", function (e) {
                    return e.n + ". článek";
                }),
                a("bebae55a", "Veřejná burza"),
                a("c5571610", "Odkaz na důkaz o výrazné přítomnosti na veřejné burze."),
                a("e2d42628", "Přidejte odkaz na burzu"),
                a("jc19b4e8", "Kótování na burze"),
                a("fc3ee696", "Odkaz na vedoucí pozici"),
                a("i3e65eb4", "Oficiální web ověřené organizace, který na vás odkazuje ve vedoucí pozici"),
                a("jd014eba", "Adresa URL odkazuje na stránku, která konkrétně zmiňuje žadatele"),
                a("a96901cc", "Přidejte referenční informace o své vedoucí pozici"),
                a("cc424a22", "Referenční informace o zájmové skupině"),
                a("ibfc1a5a", "Nesplňujete podmínky pro ověření v této kategorii."),
                a("e1c78796", "Oficiální webová stránka"),
                a("ff2ee0c2", "Aktivismus"),
                a("hc61adfc", "Zábava"),
                a("e404203c", "Hry"),
                a("d2042392", "Stát"),
                a("c365dcc6", "Ostatní"),
                a("d27beb9e", "Sport"),
                a("cc4b66b6", "Vyberte kategorii"),
                a("b37461a4", "Vyberte typ účtu"),
                a("b27325f6", "Tvůrce obsahu"),
                a("a5a6affc", "Vlivní tvůrci digitálního obsahu, kteří pravidelně publikují poutavý a originální obsah."),
                a("a15326de", "Nejméně tři články v kvalifikovaných zpravodajských periodikách, které o vás obsahují informace."),
                a("g704a93a", "Oficiální web spojený s činností známé zájmové skupiny, který obsahuje informace o vás ve vedoucí pozici."),
                a("c6bd60ec", "Aktivista nebo organizátor"),
                a("c92fdb06", "Významní jednotlivci používající platformu X za účelem podpory socioekonomických, politických nebo kulturních změn."),
                a("a18c6dfc", "Novinář"),
                a("h0b46534", "Jednotliví novináři zaměstnaní ověřenými zpravodajskými organizacemi nebo periodiky."),
                a("ff929fec", "Prominentní organizace nebo přidružený účet"),
                a("jf537894", "Prominentní organizace a sekundární přidružené účty, včetně společností, značek a neziskových organizací"),
                a("d2ea204a", "Jiná vlivná osobnost"),
                a("f875ec6e", "Osobnosti, které významně komunikují na platformě X i mimo ni a nepatří do jiných kategorií."),
                a("i3e6aaa6", "Člen vrcholového vedení nebo výkonného výboru"),
                a("bbcbb9e6", "Členové vrcholového vedení nebo výkonného výboru významných společností, značek a neziskových organizací."),
                a("j0bc23f4", "Mám potvrzeno, že účet mé organizace už je ověřený"),
                a("aa6228de", "Společnost v oblasti zábavy"),
                a("d5b3cbca", "Velké zábavní společnosti, jako jsou televizní sítě, filmová studia nebo hudební vydavatelství."),
                a("b5a3e590", "Jednotlivec v oblasti zábavy"),
                a("e484f794", "Vlivní jednotlivci v zábavním průmyslu, jako jsou herci, hudebníci, režiséři, scénáristé, komici a další."),
                a("b8d8ea64", "Produkční společnost"),
                a("ff27db3c", "Oficiální účty produkcí souvisejících s entitami v oblasti zábavy, jako jsou filmy, akce a festivaly, televizní pořady a podobně."),
                a("c0e57cb2", "Přidejte svůj profil tvůrce"),
                a("f3c605b6", "Profil tvůrce"),
                a("h042d1a6", "Profil na webu IMDB"),
                a("d2310f0c", "Profil na webu IMDB, který dokládá, že jste se podíleli alespoň na padesáti produkcích. "),
                a("ba04b4c2", "Přidejte profil na webu IMDB"),
                a("i9b124b6", "Úředník státní správy"),
                a("f84a99ee", "Klíčoví úředníci státní správy včetně hlav států, volených úředníků, jmenovaných ministrů a dalších reprezentantů na regionální nebo celostátní úrovni."),
                a("j2cb5f50", "Kandidát na funkci"),
                a("j2472894", "Oficiální kandidáti na veřejnou funkci na regionální nebo celostátní úrovni."),
                a("ha44c130", "Úřad státní správy nebo veřejná služba"),
                a("j8ae9d40", "Klíčové úřady a instituce státní správy a veřejné služby."),
                a("ef1d6176", "Jste kandidátem na regionální nebo celostátní úrovni?"),
                a("f54ba6e6", "Pokud chcete být ověřeni v této kategorii, musíte aktuálně být kandidátem na funkci na regionální nebo celostátní úrovni."),
                a("dd85d0a0", "Jste úředníkem na regionální nebo celostátní úrovni?"),
                a("f0058c60", "Pokud chcete být ověřeni v této kategorii, musíte aktuálně být úředníkem státní správy na regionální nebo celostátní úrovni."),
                a("f420a712", "Ano, jsem"),
                a("fb97d22c", "Ne, nejsem"),
                a("e16b1cc8", "Splňuje váš profil kritéria pro kandidáty?"),
                a("cf2ee92e", "Kandidáti na funkci musí mít veřejný účet, který uvádí funkci, o kterou se ucházejí, a odkazuje na oficiální web jejich kampaně."),
                a("g544885e", "Splňuje váš profil kritéria pro úřad nebo instituci státní správy?"),
                a("bd0b4542", "Úřady a instituce státní správy musí mít veřejný účet, který odkazuje na jejich oficiální web."),
                a("i45b224c", "Splňuje váš profil kritéria pro úředníky?"),
                a("fba1dd66", "Úředníci státní správy musí mít veřejný účet, který uvádí jejich aktuální pozici ve státní správě a odkazuje na oficiální web jejich úřadu."),
                a("e95c44de", "Ano, je kompletní"),
                a("fa5e15e2", "Potřebuji něco upravit"),
                a("jdf47e8e", "Web kampaně"),
                a("eeec7316", "Přidejte web kampaně"),
                a("b163b654", "Reference ze státní správy"),
                a("d2378d34", "Přidejte referenci ze státní správy"),
                a("a05b8446", "Novinář na volné noze"),
                a("hdad12b2", "Nezávislí novináři na volné noze s významnými pracemi v ověřených periodikách."),
                a("d2d7af4c", "Zpravodajská organizace nebo periodikum"),
                a("d83e51dc", "Tištěná a digitální periodika; pozemní, kabelové, satelitní a streamované televizní a rozhlasové zpravodajské sítě, stanice a programy; podcasty; a další podobná média."),
                a("g708cbdc", "Splňuje váš profil požadavky na ověření?"),
                a("b107ee5c", "Zpravodajské organizace musí mít veřejný účet, který odkazuje na jejich oficiální web."),
                a("e8746826", "Mám potvrzeno, že účet mého zaměstnavatele už je ověřený."),
                a("jc09b420", "Splňuje váš účet kritéria pro novináře?"),
                a("gfbd7e58", "Novináři musí mít veřejný účet obsahující název a odkaz na oficiální web ověřené zpravodajské organizace, pro kterou pracují."),
                a("h0ad4c9e", "Odkaz(y) na oficiální zpravodajské organizace"),
                a("a6553b50", "Oficiální web kvalifikované zpravodajské organizace nebo periodika, který na vás odkazuje jako na novináře."),
                a("a29b2988", "Autorství a spoluautorství článků"),
                a("ab4eae60", "Nejméně tři autorství nebo spoluautorství článků v kvalifikovaných periodikách vydaných během posledních šesti měsíců."),
                a("b3fac982", "Zadaná adresa URL odkazuje na stránku, která mě konkrétně zmiňuje"),
                a("e26dc9e2", "Připojte významné prace"),
                a("e164df2e", "Splňují uvedené články kritéria významnosti?"),
                a("i80ff05e", "Odpovídající významnost prokážou jen články publikované ověřenými zpravodajskými organizacemi a periodiky."),
                a("cf7482ec", "Ano, splňují"),
                a("fcb96cfc", "Jednotlivec v profesionálním sportu"),
                a("ddc7d64a", "Profesionální sportovci, trenéři a manažeři a sportovci účastnící se globálních soutěží (jako je olympiáda, paralympiáda apod.)."),
                a("c4e0d346", "Profesionální sportovní entita"),
                a("e3ce81fa", "Profesionální sportovní ligy, týmy a globální soutěže (například olympiáda, paralympiáda apod.)."),
                a("b2808f48", "Jednotlivec v esportu"),
                a("db7b3558", "Individuální účty esportovců spojených s ověřenými esportovními týmy nebo ligami."),
                a("bbd9a912", "Mám potvrzeno, že entita (tým, liga, akce nebo organizace) spojená s mým účtem už je ověřená"),
                a("he9c5638", "Odkaz na oficiální web globální soutěže nebo sportovní organizace, který na vás odkazuje."),
                a("bf06e1d6", "Oficiální web související s profesionální sportovní organizací, který na vás odkazuje jako na profesionálního sportovce, trenéra nebo manažera."),
                a("e241d35e", "Nejméně tři články z ověřených zpravodajských organizací nebo periodik, které na vás odkazují jako na profesionálního sportovce, trenéra nebo manažera."),
                a("ad456030", "Nejméně tři články z ověřených zpravodajských organizací nebo periodik, které na vás odkazují jako na jednotlivce v esportu."),
                a("hbe2e65c", "Oficiální web související s ověřenou esportovní ligou nebo akcí, který na vás odkazuje jako na jednotlivce v esportu."),
                a("j3da4dea", "O ověření teď nemůžete požádat"),
                a("af39265e", "Společnosti, značky a organizace"),
                a("bb51cd7a", "Sporty a hry"),
                a("c044a571", "Další informace"),
                a("a58cd1fb", "Další informace"),
                a("b47b0fd1", "Další informace"),
                a("db25263b", "Další informace"),
                a("b25b02c3", "Další informace"),
                a("j6ef6afb", "Další informace"),
                a("d42d162b", "Další informace"),
                a("ccadfc85", "Další informace"),
                a("ddb47f57", "Další informace"),
                a("bf9e181b", "Další informace"),
                a("e8e39f95", "Další informace"),
                a("e126dd3f", "Další informace"),
                a("i821844f", "Další informace"),
                a("b0abbb17", "Další informace"),
                a("e7e0d88b", "Další informace");
            a("i560665f", "Další informace"),
                a("f6e774d9", "Další informace"),
                a("h486f755", "Další informace"),
                a("bab41dab", "Další informace"),
                a("e0ebdb29", "Další informace"),
                a("f8493831", "Další informace"),
                a("icb5913f", "Další informace"),
                a("af819833", "Další informace"),
                a("d35525b1", "Další informace"),
                a("cb181ed1", "Další informace"),
                a("f6c3d3f1", "Další informace"),
                a("d4588ded", "Další informace"),
                a("a759bff9", "Další informace"),
                a("c64a59f7", "Další informace"),
                a("c054f433", "Další informace"),
                a("c1b7ad51", "Další informace"),
                a("f7998565", "Další informace"),
                a("c74a47ef", "Další informace"),
                a("gf9899bf", "Další informace"),
                a("d7a9185d", "Další informace"),
                a("c4b205e1", "Další informace"),
                a("c04b4b1d", "Další informace"),
                a("d26ccc67", "Další informace"),
                a("hdb3bc85", "Další informace"),
                a("b6cb494f", "Další informace"),
                a("abc132eb", "Další informace"),
                a("de1b28ad", "Další informace"),
                a("h04c272d", "Další informace"),
                a("j331c659", "Další informace"),
                a("h02fe64f", "Další informace"),
                a("a7df4b85", "Další informace"),
                a("e9b71903", "Další informace"),
                a("g961011f", "Další informace"),
                a("d5dedb7b", "Další informace"),
                a("gd396551", "Další informace"),
                a("dccc08bf", "Další informace"),
                a("f22a6d0d", "Další informace"),
                a("i78c9fd5", "Další informace"),
                a("f3e333a9", "Další informace"),
                a("i5fee6d3", "Další informace"),
                a("fe7420f5", "Další informace"),
                a("fcfad60d", "Další informace"),
                a("cc35a6b9", "Další informace"),
                a("d9bd3823", "Další informace"),
                a("a67f27bd", "Další informace"),
                a("b8be7adb", "Další informace"),
                a("gd663f41", "Další informace"),
                a("b436b101", "Další informace"),
                a("j97bce4a", "Uživatelské jméno na platformě X"),
                a("acd5ca14", "Zkuste to znovu. Uživatelská jména nezahrnují speciální znaky, jako jsou @, $ nebo #."),
                a("bbef41c2", "Zkontrolujte oficiální e-mailovou adresu spojenou s vaší žádostí o ověření na platformě x."),
                a("be03ecca", "E-mailová adresa"),
                a("c69a40de", "Nemáte z dřívějška ověřenou e-mailovou adresu."),
                a("c83a1662", "Na vašem účtu chybí způsobilá e-mailová adresa, nebo není ověřená"),
                a("e1e878ee", "nastavení"),
                a("b9635182", "nastavení"),
                a("j163be32", "Podat žádost"),
                a("gaf821c8", "Žádost o ověření"),
                a("e1ac0f9b", "Další informace"),
                a("h2d4ba56", "Probíhá kontrola vašeho dokladu totožnosti…"),
                a("i2051842", "Ověřujeme, zda váš průkaz splňuje naše standardy. Může to trvat až 30 sekund."),
                a("fc2a5c92", "Něco se pokazilo"),
                a("jf4b6f70", "Při nahrávání vašeho průkazu totožnosti došlo k chybě. Zkuste jej prosím nahrát znovu."),
                a("d338f53e", "Zkusit znovu"),
                a("e43672a0", "Budeme potřebovat shromáždit určité údaje o vašem průkazu totožnosti vydaném vládou."),
                a("b246aa5e", "Země, která doklad vydala"),
                a("d6fb5878", "Zvolte zemi."),
                a("b72f97cc", "Typ identifikace"),
                a("b2ab6008", "Zvolte typ průkazu totožnosti."),
                a("h9270b1c", "Prohledat země"),
                a("ff1d68f8", "Nahrát fotku vašeho dokladu totožnosti"),
                a("bdada5a6", "Přední strana"),
                a("edfed0f6", "Nahrát přední stranu průkazu totožnosti"),
                a("def5015d", function (e) {
                    return "Zadní strana" + e.back_of_document;
                }),
                a("b09aade6", "Nahrát zadní stranu průkazu totožnosti"),
                a("b40ed190", "Dokument"),
                a("c6650b56", "Nahrát dokument"),
                a("d171ed16", "Využíváme pomoc od důvěryhodných třetích stran. Ty ověří platnost vašeho průkazu totožnosti. Nám poskytují platformu a pouze ty údaje, které potřebujeme, abychom mohli potvrdit, jestli máte nárok na status ověřeného účtu."),
                a("d20f76cb", "Další informace"),
                a("b8deb156", "zásadách ochrany osobních údajů"),
                a("b9960f32", "Přidat fotky nebo video"),
                a("gd80afba", "Upravit média"),
                a("j322caee", "Označit choulostivý mediální obsah"),
                a("abd845fe", "Upravit"),
                a("df1b0708", "Přehrát tento GIF"),
                a("cd959e5c", "Odebrat média"),
                a("add55c98", "Média"),
                a("f350cf46", "Přetáhnout média"),
                a("gff1f69e", "Načítání obrázku"),
                a("a91bb144", "Odeslat"),
                a("affce770", "My a naši důvěryhodní partneři použijeme údaje spojené s vaším účtem a další informace, které nám poskytnete, *abychom mohli prověřit vaši totožnost a způsobilost k ověření."),
                a("i0864918", "Kategorie"),
                a("c7942074", "Typ účtu"),
                a("b8121daa", "Reference dokládající významnost"),
                a("d247ca70", "Zkontrolujte níže podrobnosti své žádosti o ověření. Po kontrole klikněte na tlačítko Odeslat."),
                a("b51afbb2", "Způsob potvrzení autenticity"),
                a("cc87b01c", "Kontrola a odeslání"),
                a("ec6801cc", "Vaše žádost byla odeslána."),
                a("i6ef95ec", "průzkum"),
                a("j94e995e", "Vaše poslední žádost byla zamítnuta. S odesláním nové žádosti budete muset 30 dnů počkat."),
                a("da458d6c", "Během posledních 30 dnů jste odeslali žádost o ověření a byli jste odmítnuti. Zkuste to prosím znovu později."),
                a("j4ed9f0e", "Odeslali jste žádost o ověření a jakmile o vaší žádosti rozhodneme, dáme vám vědět."),
                a("b1ade780", "Váš účet je příliš nový. Počkejte, až od jeho založení uplyne alespoň 7 dnů, a pak to zkuste znovu."),
                a("aab67626", "Vaše žádost o ověření je právě kontrolována"),
                a("d3c1e25e", "Ne, není to sen. Jste opravdu ověřeni."),
                a("a8b4500e", "pravidel"),
                a("ef1b5cbc", "Vyberte si, jaká oznámení chcete vídat – a jaká naopak ne."),
                a("aaafffda", "Skrytá oznámení"),
                a("afdf29b8", "Filtr kvality"),
                a("da19d878", "Odfiltrujte obsah jako například duplicitní nebo automatizované posty. Nastavení se netýká oznámení týkajících se účtů, které sledujete nebo se kterými jste v nedávné době měli nějakou interakci."),
                a("i2209530", "Uložit"),
                a("da867c58", "Zvolte si preference pro jednotlivé typy oznámení."),
                a("a2197726", "Nastavte si zabezpečení svého účtu."),
                a("i36dcc3e", "Pomáhejte chránit svůj účet před neoprávněným přístupem pomocí druhé metody ověření doplňující heslo na X. Můžete si vybrat textovou zprávu, ověřovací aplikaci nebo bezpečnostní klíč."),
                a("ead60eb8", "Silnější ochrana hesla"),
                a("gfaf9a4a", "Ochrana před resetováním hesla"),
                a("h3cc8462", "Pro ještě vyšší úroveň ochrany budete při žádosti o obnovení hesla na X požádáni o ověření e-mailové adresy nebo telefonního čísla."),
                a("b4bbdeb4", "Přístupový klíč"),
                a("fe8aeb88", "Přístupové klíče poskytují dodatečnou ochranu, která může být vázána na vaše biometrické údaje."),
                a("dc096238", "Nahrajte schválený formulář identifikace k potvrzení pravosti svého účtu. Vaše údaje budou použity pouze k ověření vaší identity a bude s nimi nakládáno bezpečně a zabezpečeně."),
                a("a999cb72", "Uložit změny účtu"),
                a("dec3c9b8", "Heslo"),
                a("b929aa74", "Aby se změny uložily, zadejte znovu své heslo k X."),
                a("d1091f50", "Zapomněli jste heslo?"),
                a("fd23fe4a", "Here are your passkeys across all your devices"),
                a("d9921a6c", "Create a new passkey"),
                a("i4855730", "Odstranit přístupový klíč"),
                a("a6acdc67", function (e) {
                    return "Date added: " + e.date;
                }),
                a("d97c07be", "Spravovat předplatná tvůrců"),
                a("efa291da", "Zobrazujte a spravujte svoje předplatná tvůrců uvedená níže pomocí Stripe. Všechna aktivní předplatná, která jste zahájili na iOS nebo Androidu, lze v této aplikaci spravovat."),
                a("j7f5c6aa", "Dosud nemáte žádné předplatné"),
                a("ef4602ec", "Něco se pokazilo. Zkuste to znovu později."),
                a("b02df748", "Spravujte zabezpečené svého účtu a sledujte používání účtu včetně aplikací, které jsou s vaším účtem propojeny."),
                a("g2841de4", "Zobrazte informace o přihlášeních k účtu a aplikacích propojených s účtem."),
                a("hf45cca6", "Umožňuje spravovat účty Google nebo Apple, které máte propojené s platformou X za účelem přihlašování."),
                a("a310511c", "Spravujte své sdílené účty."),
                a("jc02ae68", "Propojené aplikace"),
                a("dd82312a", "Relace"),
                a("e5e8a89a", "Načítání aplikací"),
                a("hfa9a2c8", "Spravujte bleskurychle připojené aplikace"),
                a("dd1b86f9", function (e) {
                    return "od " + e.name;
                }),
                a("cf461930", "Tady se zobrazí aplikace třetích stran, kterým povolíte přístup ke svému účtu na platformě X."),
                a("b63b0b1d", "Další informace"),
                a("c2cb5560", "Aktuální aktivní relace"),
                a("bca43fd0", "Odhlásit z ostatních relací"),
                a("ha6df2ca", "Relace představují zařízení, která používáte nebo která používají váš účet na platformě X. Jde o relace, v rámci kterých je váš účet právě přihlášen. Z každé relace se můžete odhlásit."),
                a("b72d2904", "Na daném zařízení jste přihlášeni k tomuto účtu na platformě X a momentálně jej používáte."),
                a("b850cbd0", "Na uvedených zařízeních jste přihlášeni k daným účtům, ale momentálně je nepoužíváte. "),
                a("cf3e3164", "Odhlásit všechny ostatní relace"),
                a("f810f27a", "Chcete ukončit ostatní relace?"),
                a("gbb5cec5", function (e) {
                    return "Odhlášením ukončíte ostatní aktivní relace na platformě X (" + e.num + "). Aktuální relaci tím nijak neovlivníte.";
                }),
                a("fcbd4904", "Tímto ukončíte vaši aktivní relaci na platformě X."),
                a("ab78d946", "Chystáte se ukončit vaše ostatní aktivní relace na platformě X. Pro spuštění nových se budete muset na příslušných zařízeních znovu přihlásit."),
                a("e186a3d6", function (e) {
                    return "" + e.learnMoreLabel;
                }),
                a("ed5ab16a", "Právě aktivní"),
                a("c9bc33fa", "Zařízení"),
                a("f95ed3e6", "Stávající zařízení"),
                a("a787669a", "Registrace jiných zařízení"),
                a("gbefe730", "Pro šifrované soukromé zprávy máte zaregistrována tato další zařízení."),
                a("d7a9796e", "Načítání zařízení"),
                a("b5635e86", "Zaregistrovat toto zařízení"),
                a("bb4a95dc", "Zaregistrovat zařízení?"),
                a("a9538040", "Registrace tohoto zařízení vám umožní zahájit nové šifrované konverzace s ostatními zaregistrovanými uživateli."),
                a("hd173c7a", "Registrovat"),
                a("hf4312a4", "Zařízení bylo zaregistrováno."),
                a("h7797d18", "Zaregistrováno"),
                a("hc48a042", "Zrušit registraci tohoto zařízení"),
                a("d5bafb20", "Zrušit registraci tohoto zařízení?"),
                a("i12dee70", "Pokud zrušíte registraci zařízení, nebudete mít nadále přístup k šifrovaným zprávám v něm."),
                a("d4b9db26", "Zrušit registraci"),
                a("c18b1b34", "Datum a čas registrace"),
                a("e7c9d60a", "U vybraného zařízení byla zrušena registrace."),
                a("cd14c8fe", "Informace o načítání zařízení"),
                a("j9db22f4", "Zařízení nemůžeme najít"),
                a("c477d710", "Nastavte si, jaké informace na platformě X vidíte a sdílíte."),
                a("b06f5d36", "Vaše aktivita na X"),
                a("fd807e78", "Cílová skupina, média a označování"),
                a("a9ff473c", "Spravujte, jaké informace o vás ostatní na X uvidí."),
                a("d0484606", "Spravujte informace související s vašimi posty."),
                a("c4afe0e6", "Rozhodněte se, co chcete na platformě X vídat na základě vašich preferencí, jako jsou témata a zájmy"),
                a("ab125232", "Spravujte účty, slova a oznámení, která jste skryli nebo zablokovali."),
                a("cc950d94", "Určete, kdo vám může posílat soukromé zprávy."),
                a("fe37f854", "Určete, kdo může vidět vaši aktivitu poslouchání v Prostorech."),
                a("ab987f3c", "Mějte kontrolu nad nastavením objevitelnosti a spravujte importované kontakty."),
                a("db5fabb0", "Sdílení údajů a aktivita mimo platformu X"),
                a("i83cab8a", "Personalizace a sdílení údajů"),
                a("e338a794", "Spravujte zobrazování reklam na platformě X."),
                a("c05e8024", "Spravujte soubory cookie na platformě X."),
                a("d29d59d0", "Spravujte, jakým způsobem může platforma X používat informace o vaší online aktivitě mimo ni (například o vámi navštívených webových stránkách) k personalizaci vašeho uživatelského prostředí na X."),
                a("c981a36c", "Umožněte X přizpůsobit vaše prostředí na základě vaší odvozené aktivity, např. aktivity na zařízeních, která jste nepoužili k přihlášení na platformě X."),
                a("eb0cc786", "Povolte sdílení doplňujících informací s obchodními partnery X."),
                a("dd533318", "Spravujte informace o poloze, které platforma X používá k personalizaci vašeho uživatelského prostředí."),
                a("bd0646a0", "Další informace o ochraně osobních údajů na platformě X"),
                a("a607862a", "Zásady ochrany osobních údajů"),
                a("g5925628", "Kontakt"),
                a("dd6012f8", "Centrum soukromí"),
                a("jdceda60", "Odpovědi"),
                a("f644b748", "Spravujte, kdo může odpovídat na vaše posty a jaké odpovědi chcete odfiltrovat."),
                a("ff4b3818", "Grok a spolupracovníci třetí strany"),
                a("i586f3e0", "Povolte použití svých veřejných údajů, interakcí, vstupů a výsledků práce s funkcí Grokem a xAI pro účely tréninku a doladění"),
                a("d8492604", "Při výběru této možnosti budou vaše posty a další informace o účtu viditelné pouze lidem, kteří vás sledují."),
                a("if050fae", "Chraňte svá videa"),
                a("b7ed5f6e", "Pokud je tato možnost vybraná, videa ve vašich postech nebudou ve výchozím nastavení k dispozici ke stažení. Toto nastavení platí pro budoucí posty a není platné zpětně"),
                a("dbb51952", "Chcete chránit své posty?"),
                a("de735de6", "Tímto budou viditelné pouze pro ty, kteří vás na platformě X sledují."),
                a("c5d4192a", "Chránit"),
                a("d9ddba70", "Komunity jsou veřejné, takže pokud si svůj účet přepnete na chráněný, vaše předchozí posty se skryjí. Do komunity nebudete moct přispívat dalšími posty, dokud si účet nepřepnete zpátky na veřejný."),
                a("f527b322", "Chránit můj účet"),
                a("d165c992", "Kdokoli vás může označit"),
                a("ea339390", "Označit vás mohou pouze lidé, které sledujete."),
                a("e3a761ee", "Vypnuto"),
                a("a61ed23a", "Označte média, která postujete, jako obsah, který může zahrnovat citlivý materiál."),
                a("ae27c454", "Při aktivaci této funkce budou vámi publikované fotky a videa označeny speciálním štítkem pro lidi, kteří si nepřejí vídat citlivý obsah."),
                a("fc1d217c", "Zobrazovat média, která mohou obsahovat citlivý obsah"),
                a("j018f2a2", "Nastavení funkce Prozkoumat"),
                a("h1ef00dc", "Nastavení vyhledávání"),
                a("b05b9398", "Po aktivaci tohoto nastavení může X přizpůsobit váš obsah Pro vás na základě vaší aktivity na X."),
                a("a3c1324c", "Zobrazit doporučený obsah na časové ose Pro vás"),
                a("ee4592ca", "Nikdo"),
                a("da813d22", "Ověření uživatelé"),
                a("baffe39a", "Všichni"),
                a("b3d8566e", "Filtrovat nerelevantní zprávy"),
                a("cfda8c44", "Skryje žádosti o soukromou konverzaci, které byly detekovány jako potenciální spam nebo nerelevantní. Tyto žádosti se budou odesílat do samostatné schránky v dolní části žádostí o soukromou konverzaci. Pokud budete chtít, budete si je moci zobrazit."),
                a("f4c91f40", "Povolit zprávy od mých předplatitelů"),
                a("bf0c4336", "Vaši předplatitelé vám budou vždy moci posílat zprávy nezávisle na jiných nastaveních zasílání zpráv."),
                a("e6c411d8", "Filtrovat grafická média"),
                a("g558101a", "Umožňuje zobrazit upozornění přes zprávy, u kterých bylo zjištěno, že mohou obsahovat grafická média (například s nahotou, sexuálním obsahem nebo násilím). Médium si vždycky budete moci prohlédnout, pokud budete chtít."),
                a("d9172542", "Zobrazovat potvrzení o přečtení"),
                a("bd557506", "Lidé, se kterými si posíláte zprávy, dostanou informaci, kdy jste si jejich zprávy přečetli. Potvrzení o přečtení se nezobrazují u žádostí o soukromou konverzaci."),
                a("f29080d0", "Povolit žádosti o zprávu od:"),
                a("j0adcc2d", "Další informace"),
                a("ib3357a6", "Personalizované reklamy"),
                a("f2f9628e", "Reklamy na platformě X se vám budou vždy zobrazovat na základě vaší aktivity na ní. Pokud toto nastavení povolíte, bude platforma X dále personalizovat reklamy od inzerentů platformy X na platformě X i mimo ni, a to na základě kombinace vaší aktivity na platformě X, další online aktivity a informací od našich partnerů."),
                a("b5fe50fc", "Kategorie reklam"),
                a("c31a2ea6", "Po povolení těchto nastavení budete moct sledovat reklamy v těchto kategoriích. Když tuto možnost zrušíte, bude se Vám zobrazovat méně reklam z těchto kategorií."),
                a("if996630", "Hazardní hry"),
                a("a9ed7774", "Povolit použití informací o zobrazování obsahu platformy X na webu"),
                a("e2d61838", "Toto nastavení platformě X umožňuje sledovat vaše návštěvy dalších webových stránek, do kterých je zabudován obsah X, například vložené časové osy. Tyto informace přispívají ke zlepšení vašeho uživatelského zážitku z používání platformy X. Tato historie procházení webových stránek nikdy nebude ukládána společně s vaším jménem, e-mailem nebo telefonním číslem."),
                a("c966aaf4", "Informace o navštívených stránkách nejsou v určitých zemích ukládány nebo používány."),
                a("e8313b32", "Jste si jisti? Jakmile toto nastavení vypnete, už ho v této zemi nebudete moct znovu zapnout."),
                a("f1d46fd6", "Ano"),
                a("f6c8ccc8", "Personalizace na základě odvozené identity"),
                a("ed012c88", "Platforma X bude provádět personalizaci vašeho uživatelského prostředí na základě vámi poskytnutých informací a zařízení použitých k přihlášení. Pokud toto nastavení povolíte, bude platforma X personalizaci provádět také na základě dalších prognóz týkajících se vaší totožnosti, jako jsou zařízení a prohlížeče, které jste pro přihlášení na platformu X nikdy nepoužili, nebo e-mailové adresy a telefonní čísla podobné těm, které jsou propojené s vaším účtem na platformě X."),
                a("d3c20d80", "Povolit sdílení doplňujících informací s obchodními partnery"),
                a("f1c0d09c", "Platforma X se svými obchodními partnery sdílí informace, které umožňují fungování a soustavné zlepšování jejích produktů. Pokud toto nastavení povolíte, umožníte jí sdílet s těmito partnery doplňující informace na podporu fungování platformy X, včetně jejích marketingových aktivit na dalších stránkách a v aplikacích, které jsou pro vás relevantní."),
                a("dc20d918", "Personalizace na základě navštívených míst"),
                a("af7d89e6", "Platforma X vždy používá určité informace k tomu, aby vám zobrazovala relevantnější obsah, například vaši aktuální polohu nebo místo, ze kterého jste se přihlásili. Pokud toto nastavení povolíte, bude platforma X moci také personalizovat obsah na základě míst, která jste navštívili."),
                a("f2b23062", "Přístupnost, zobrazení a jazyky"),
                a("fa76d7dc", "Spravujte způsob zobrazování obsahu na X."),
                a("j7a15010", "Spravujte aspekty vašeho uživatelského zážitku na platformě X, například omezení barevného kontrastu a pohyblivé grafiky."),
                a("a257ecae", "Nastavte si velikost písma, barvy a pozadí. Tato nastavení budou platit pro všechny účty na platformě X v tomto prohlížeči."),
                a("jc3fa0e2", "Nastavte si, které jazyky se mají používat k personalizaci vašeho uživatelského prostředí na X."),
                a("cc2973a8", "Omezte způsob, jakým platforma X používá některá data o vaší síti na tomto zařízení."),
                a("h54e6138", "Klávesové zkratky"),
                a("a4b69cbc", "Jazyk zobrazení"),
                a("c856bd00", "Vyberte upřednostňovaný jazyk nadpisů, tlačítek a dalších textů na platformě X."),
                a("cab61d58", "Zvolte další jazyky"),
                a("dd93fafa", "Zvolte další jazyky, v nichž chcete vídat obsah na platformě X."),
                a("bca1de4a", "Další jazyky, které ovládáte"),
                a("c3aa76c4", "Jazyky, které možná znáte"),
                a("g099069c", "Spravujte jazyky, které platforma X odvodila na základě vaší aktivity, například podle účtů, které sledujete, a postů, na něž reagujete."),
                a("cf9ce876", "Jazyky aplikace a postů"),
                a("d4372cf4", "English (US), 中文(简体), Español"),
                a("f8e46b90", "Toto jsou účty sociálních sítí, které jste si propojili se svým účtem na platformě X za účelem přihlašování. Tady můžete zakázat přístup."),
                a("d84ed6b2", "Odpojit"),
                a("i51130d4", "Google"),
                a("e28901f2", "Apple"),
                a("cf8560be", "Připojeno"),
                a("ad31b476", "Správa automatizovaného účtu"),
                a("a2981062", "Spravující účet"),
                a("aff4540e", "Změnit spravující účet"),
                a("b8b9d100", "Nastavte automatizaci účtu"),
                a("e0bc51f6", "Vypnout automatizaci účtu"),
                a("b92190c2", "Spravující účet byl připojen"),
                a("fb03b39a", "Spravující účet byl odpojen"),
                a("bd51ddfa", "Váš spravující účet v tuto chvíli nejde odpojit. Zkuste to prosím znovu později."),
                a("e91c15f6", "Odpojit spravující účet?"),
                a("df035b80", "Pokud odpojíte spravující účet, přijde váš automatizovaný účet o svůj štítek."),
                a("bd12cf34", "Ano, odpojit"),
                a("f79acef3", "Další informace"),
                a("a57a341c", "Spořič dat"),
                a("ab6505a8", "Díky této funkci platforma X spotřebuje méně dat ze sítě."),
                a("a5d4fda0", "Něco se pokazilo, ale netrapte se – pojďme to zkusit znovu."),
                a("g1888dc2", "Nikdy"),
                a("f724d1aa", "Pouze na Wi-Fi"),
                a("cf6472c2", "V mobilní síti a na Wi-Fi"),
                a("b2ed92c4", "Žádost o archiv"),
                a("ce5d2c46", "Dočasně nedostupné"),
                a("bed6a87c", "Platnost odkazu na vaše údaje na platformě X vypršela."),
                a("b24b4768", "Přejít do Moje data na X"),
                a("a0c3f812", "Pro stažení aktualizovaných údajů bude třeba poslat novou žádost."),
                a("eea30bb5", function (e) {
                    return "Soubor vytvořen: " + e.date;
                }),
                a("f2cde471", function (e) {
                    return "Datum vypršení platnosti: " + e.date;
                }),
                a("b7ce9dbf", function (e) {
                    return "Odhadovaná velikost: " + e.size;
                }),
                a("d3de4c97", function (e) {
                    return "Údaje na X (" + e.currentIndex + " z " + e.count + ")";
                }),
                a("fc5bfd96", "Začněme"),
                a("gee8110e", "Stáhnout archiv"),
                a("c326f156", "Archiv stažen"),
                a("c9fe9b56", "Váš archiv je připraven ke stažení."),
                a("j54b679b", function (e) {
                    return "Tento obsah se otevře v novém okně. Načtení může chvíli trvat. Soubor ke stažení o velikosti " + e.size + " bude ve formátu .zip.";
                }),
                a("ac63840d", function (e) {
                    return e.size + " KB";
                }),
                a("bcd9b0ed", function (e) {
                    return e.size + " MB";
                }),
                a("ce494bb4", "Velikost písma"),
                a("c783d45e", "Barva"),
                a("h306a358", "Pozadí"),
                a("d8680056", "Extra malé"),
                a("j59f0b94", "Výchozí"),
                a("b81aaad8", "Velké"),
                a("c7044880", "Extra velké"),
                a("e46dffa0", "Velikost textu"),
                a("ce8a8116", "Možnosti pozadí"),
                a("d3d48f3a", "Světlý"),
                a("i76f67ee", "Tmavé"),
                a("c8f85960", "Černé"),
                a("aefc5b20", "Možnosti barev"),
                a("a52d0fde", "Modrá"),
                a("d818cdd6", "Žlutá"),
                a("fee1cd64", "Růžová"),
                a("cbed7fb2", "Fialová"),
                a("g697ec02", "Oranžová"),
                a("a7c2204a", "Zelená"),
                a("gde8fdd7", function (e) {
                    return "Jádrem X jsou krátké zprávy nazývané posty – jako je tento – které mohou obsahovat fotografie, videa, odkazy, text, hashtagy a zmínky jako @" + e.mention + ".";
                }),
                a("f277e94a", "Zobrazit"),
                a("ee79367b", function (e) {
                    return "Úroveň " + e.conversationTreeDepth + ":";
                }),
                a("ec6907ba", "Reklamy"),
                a("d9587114", "Zobrazit nejnovější post"),
                a("b7b86c3c", "Otevře novou verzi tohoto postu"),
                a("a407814e", "Poslední úprava"),
                a("i46ee3f0", "Toto je nejnovější verze tohoto postu."),
                a("e18cb87c", "Vysvětlit tento post"),
                a("ffe16626", "Filtr odpovědí je zapnutý."),
                a("jc81f6a7", function (e) {
                    return e.count + " zobrazení";
                }),
                a("g521abc6", "Groku, proveď analýzu!"),
                a("a09331e0", "Související články"),
                a("e3eceda6", "Akce funkce Grok"),
                a("a653f08f", function (e) {
                    return "Přečíst odpovědi (" + e.replyCount + ")";
                }),
                a("dc0c8266", "Zeptejte se Grok"),
                a("i7ac410e", "Zobrazit originál"),
                a("c67f09e8", "Zobrazit překlad"),
                a("f396c105", function (e) {
                    return "" + e.displayCount;
                }),
                a("aa037e65", function (e) {
                    return n(e.count, "Z", "Z", "z", "Z") + "obrazení";
                }),
                a("b8f3500a", "Zobrazit vlákno ve čtečce"),
                a("fc7db594", "Souhrn profilu"),
                a("c3f04d9c", "Přemýšlení"),
                a("cbdddb0a", "Dokončeno"),
                a("e98cc293", function (e) {
                    return "Vyhledávání dotazu " + e.query;
                }),
                a("b0d1e205", function (e) {
                    return 'Vyhledávání **"' + e.query + '"**';
                }),
                a("i2e0f4d7", function (e) {
                    return "Procházení " + e.url + " na dotaz " + e.query;
                }),
                a("acb9b845", function (e) {
                    return "Procházení " + e.url + ' na dotaz **"' + e.query + '"**';
                }),
                a("ef261d8d", function (e) {
                    return "Vyhledávání postů uživatelem @" + e.username;
                }),
                a("f7d9cfb9", function (e) {
                    return "Vyhledávání postů uživatele @" + e.username + " na dotaz " + e.query;
                }),
                a("bec7eb11", function (e) {
                    return "Vyhledávání postů uživatele @" + e.username + ' pro **"' + e.query + '"**';
                }),
                a("ead81122", "Něco se pokazilo, obnovte stránku pro opětovné připojení nebo to zkuste znovu."),
                a("f808a13a", "Překročili jste maximální počet pokusů. Chvíli počkejte a zkuste to znovu."),
                a("e0481e5a", "Funkce Grok není v tuto chvíli ve vaší zemi podporována."),
                a("bc0a5b5a", "Grok je zrovna nedostupný, zkuste to později."),
                a("ef674976", "K používání této služby nemáte oprávnění."),
                a("c74e87e0", "Tento soubor je moc velký. Vyberte menší soubor."),
                a("bea50a2a", "Tento formát není podporován."),
                a("j77292b7", function (e) {
                    return "Vyberte pouze maximálně " + e.count + " soubor" + n(e.count, "y", "y", "", "y");
                }),
                a("d4d35bea", "Překládání..."),
                a("he9c9634", "Nemůžeme načíst překlad."),
                a("j2198c98", "Skrýt přeložený post"),
                a("i73a7d48", "Přeložil Google"),
                a("eeadb767", function (e) {
                    return "Přeložil Google z: " + e.originLanguage;
                }),
                a("be9b9fb8", "Přeložil Grok"),
                a("d9c6f69d", function (e) {
                    return "Přeloženo z jazyka " + e.originLanguage + " pomocí Groka";
                }),
                a("dc445f82", "Přeloženo službou Papago"),
                a("he9803d3", function (e) {
                    return "Přeloženo službou Papago z jazyka " + e.originLanguage;
                }),
                a("f8264fc0", "Přeloženo pomocí platformy X"),
                a("caa5ba3d", function (e) {
                    return "Přeloženo z jazyka " + e.originLanguage + " pomocí platformy X";
                }),
                a("e0f81ff3", "Překlad:"),
                a("j2862695", function (e) {
                    return "Překlad z " + e.originLanguage + " od";
                }),
                a("b7cb4fab", "Překlad od"),
                a("cbc8fed4", "Byl tento překlad přesný? Dejte nám zpětnou vazbu, abychom se mohli zlepšit:"),
                a("d56779a2", "snadno pochopitelný"),
                a("b6fe8a56", "matoucí nebo nejasný"),
                a("a66d80d0", "Přeložit post"),
                a("d4c339b9", function (e) {
                    return "Post od uživatele " + e.fullName + " (@" + e.screenName + ")";
                }),
                a("db0cb64f", function (e) {
                    return e.fullName + " (@" + e.screenName + ") postoval:\n" + e.tweet;
                }),
                a("h6f99ac4", "Přidáno do vašich záložek"),
                a("g1c463f6", "Odebráno z vašich záložek"),
                a("a2e7377f", function (e) {
                    return "Odstraněno ze složky " + e.bookmarkFolderName;
                }),
                a("i47ad24c", "Jen tak dál! Čím víc postů olajkujete, tím lepší bude vaše časová osa."),
                a("def4a37c", "Dobrá práce! Vaše časová osa se neustále zlepšuje. Čím víc toho olajkujete, tím lepší bude – lajkujte tedy dál věci, které vás zaujaly."),
                a("f5d17674", "Post byl repostován"),
                a("d714acfa", "Post nebyl repostován"),
                a("b18dff26", "Tento repost si mohou zobrazit jen předplatitelé"),
                a("c2453318", "Přidat do složky"),
                a("f88553c8", "Zkopírováno do schránky"),
                a("b5b36724", "Odpovědět?"),
                a("gce00a2a", "Místo toho repostovat?"),
                a("g271f120", "Váš návrh postu bude před odpovědí smazán."),
                a("gad04d1a", "Váš koncept postu bude před citováním smazán."),
                a("ibd021f2", "Chcete si článek napřed přečíst?"),
                a("bbef69c4", "Chystáte se sdílet článek, který jste na platformě X neotevřeli."),
                a("g5092766", "Přečíst článek"),
                a("a2d5c006", "Děkujeme za návštěvu odkazu"),
                a("g37bb2d0", "Když odkaz před nasdílením navštívíte, budete se moci informovaněji zapojit do diskuze."),
                a("gc45a90a", "Rozbalit tuto výzvu"),
                a("g7135e44", "Pomozte, aby X bylo i nadále místem se spolehlivými informacemi. Před olajkováním tohoto postu si zjistěte další informace."),
                a("h9b6d468", "Pomozte, aby X bylo i nadále místem se spolehlivými informacemi. Před olajkováním tohoto postu si zjistěte další informace."),
                a("af5cd00e", "Zjistit víc"),
                a("e29c651e", "Děkujeme, že jste si přečetli další informace"),
                a("ef504d80", "Do záložek nemůžete přidávat posty od chráněných účtů. Tedy zatím."),
                a("cef96d5a", "Post už je ve vašich záložkách"),
                a("b2542f56", "Něco se pokazilo. Zkuste post do záložek za minutku přidat ještě jednou."),
                a("fe3b9942", "Na základě žádosti tohoto uživatele vám bylo zablokováno lajkování jeho postů."),
                a("c2a6dc5c", "Něco se pokazilo. Zkuste post za chvíli lajknout znovu."),
                a("b57f01b8", "Nemůžete lajkovat posty chráněných uživatelů, které nesledujete."),
                a("ba0b3cc0", "Na základě žádosti tohoto uživatele vám bylo zablokováno repostování jeho postů."),
                a("h32b1ac4", "Něco se pokazilo. Zkuste repost za minutku odeslat ještě jednou."),
                a("e50cea9e", "Repost tohoto postu není povolen."),
                a("d8e56f40", "Překročili jste povolený počet postů. Zkuste to repostnout zítra"),
                a("i14d7a46", "Něco se pokazilo. Zkuste post ze záložek za minutku odebrat ještě jednou."),
                a("d4ebfeb0", "Za chvíli zkuste znovu zrušit lajknutí postu."),
                a("e639775e", "Zkuste Retweet znovu vzít zpět za chvíli."),
                a("fcad707a", "Přidali jsme k tomuto postu upozornění, protože by mohl mít choulostivý obsah."),
                a("f1824804", "Odvolat se proti tomuto varování"),
                a("f755f710", "Rozumím"),
                a("ced4abbe", "Zobrazit konverzaci"),
                a("d00e1d2a", "Připojit se ke komunitě"),
                a("e6057014", "Požádat o připojení"),
                a("ba352986", "Zatím nemůžete odpovědět"),
                a("d09e76d8", "Komunity jsou veřejné, takže můžete číst posty – abyste se ale mohli zúčastnit, musíte se připojit."),
                a("cfa1f802", "Prozkoumat komunitu"),
                a("af27a0f8", "Byli jste odebráni z této komunity"),
                a("id089506", "Obraťte se na moderátory komunity, chcete-li být znovu přijati."),
                a("cac4e916", "Tento post je skrytý"),
                a("cb18be32", "Toto zatím nemůžete udělat"),
                a("dbb5fd8e", "Posty Kruhu nelze repostovat"),
                a("ae2c8a1e", "Proč na toto nemůžete odpovědět?"),
                a("afe7ba26", "Proč to nemůžete lajknout?"),
                a("df9e2356", "Proč to nemůžete přidat do záložek?"),
                a("jead3bc2", "Proč to nemůžete sdílet?"),
                a("h2a668b8", "Proč nelze zobrazit analýzu postů?"),
                a("bd85267e", "Proč toto nelze repostovat?"),
                a("dcc05a7e", "Zhlédnutí"),
                a("e213fada", "Počet zobrazení tohoto postu není k dispozici."),
                a("g0954ea6", "Post může zobrazit jenom jeho autor a tým moderátorů komunity, zapojení jiných uživatelů není možné."),
                a("e7969518", "Komunity jsou veřejné, takže v nich můžete číst posty, ale účast je momentálně jenom na pozvání."),
                a("g2dc874a", "Komunity jsou veřejné, takže v nich můžete číst posty, ale pouze členové s nimi mohou interagovat."),
                a("g562676f", "Další informace"),
                a("ee574c37", "Další informace"),
                a("de2d83d6", "Uložit záložku do složky"),
                a("f14df406", "Kopírovat odkaz na reklamu"),
                a("e05c00b4", "Zkopírovat odkaz"),
                a("f61c4bb0", "Sdílet prostřednictvím soukromé zprávy"),
                a("id35970e", "Postovat video"),
                a("ff9348b8", "Sdílet reklamu přes..."),
                a("d03241f8", "Sdílet post přes..."),
                a("j08dd2d4", "Odebrat ze záložek"),
                a("b7fde1ea", "Odebrat ze složky"),
                a("d9a2bd78", "Stáhnout video"),
                a("fbfab656", "Sdílet v Prostoru"),
                a("e668112c", "Post sdílený s prostorem"),
                a("g5775e46", "Zobrazit citace"),
                a("bb192c6b", function (e) {
                    return "" + e.displayCount;
                }),
                a("f23d99b0", function (e) {
                    return "Záložk" + n(e.count, "y", "y", "a", "y");
                }),
                a("e8866a55", function (e) {
                    return "" + e.displayCount;
                }),
                a("eb3abe45", function (e) {
                    return "Lajk" + n(e.count, "y", "ů", "", "ů");
                }),
                a("eff958fb", function (e) {
                    return "" + e.displayCount;
                }),
                a("i5a8c515", function (e) {
                    return "Citac" + n(e.count, "e", "e", "e", "í");
                }),
                a("dd77f9fb", function (e) {
                    return "" + e.displayCount;
                }),
                a("a755b81b", function (e) {
                    return "Repost" + n(e.count, "y", "y", "", "y");
                }),
                a("e9f1fbcc", "Zde není nic k vidění. Zatím."),
                a("a3b80be6", "Vraťte se sem později, třeba už zde budou nějaké posty na toto téma."),
                a("d93b360a", "Tento sloupec byl vymazán. Když budou vytvořeny další posty, zobrazí se nahoře."),
                a("d6e2f9be", "Načítání časové osy"),
                a("afb4c24a", "Žádné položky"),
                a("e5b0063d", function (e) {
                    return "Časová osa: " + e.title;
                }),
                a("ib65b1c6", "Zaregistrovat se přes Apple"),
                a("f55cebb8", "Přihlásit se přes účet Apple"),
                a("dcc304d6", "Pokračovat s účtem Apple"),
                a("e0870f26", "Zaregistrovat přes Google"),
                a("gfeffd6a", "Přihlásit se přes účet Google"),
                a("gf5e9ea6", "Vrátit zpět"),
                a("e43138c5", function (e) {
                    return "Sledovat uživatele " + e.name;
                }),
                a("be65f2e7", function (e) {
                    return "Přestat sledovat účet " + e.name;
                }),
                a("a649d337", function (e) {
                    return "Téma " + e.name + " mě nezajímá";
                }),
                a("e2f2b658", "Toto téma už vám nebudeme navrhovat."),
                a("b51f7edf", function (e) {
                    return "Přestali jste sledovat účet " + e.name + ".";
                }),
                a("gac366b3", function (e) {
                    return "Začali jste sledovat uživatele " + e.name + ".";
                }),
                a("f9e45cfb", function (e) {
                    return "Zablokovat uživatele @" + e.screenName + "?";
                }),
                a("fcd4d489", function (e) {
                    return "Zablokovat @" + e.screenName;
                }),
                a("a6450e84", "Blokovat"),
                a("g353ad73", function (e) {
                    return "Uživatel @" + e.screenName + " už vás nebude moci sledovat nebo zobrazit vaše posty a vy už neuvidíte žádné jeho posty nebo oznámení.";
                }),
                a("ad00a739", function (e) {
                    return "Budou si moci zobrazit vaše veřejné posty, ale nebudou se již moci zapojit do interakce s nimi. Uživatel @" + e.screenName + " vás také nebude moci sledovat nebo vám posílat zprávy a neuvidíte od něj oznámení.";
                }),
                a("a9fd20be", "Zablokování bylo úspěšné."),
                a("j546fb79", function (e) {
                    return "Odblokovat uživatele @" + e.screenName + "?";
                }),
                a("c9623eeb", function (e) {
                    return "Odblokovat uživatele @" + e.screenName;
                }),
                a("e133be4e", "Odblokovat"),
                a("he43bca4", "Uživatel vás bude moct sledovat a zobrazit vaše posty."),
                a("f5f01af6", "Budou vás moci sledovat a zapojovat se do reakcí na vaše veřejné posty."),
                a("b6878b0a", "Něco se pokazilo. Zkuste uživatele za minutku zablokovat ještě jednou."),
                a("e40252de", "Nezobrazovat tyto posty na stránce Pro vás"),
                a("ae225c26", "Zobrazovat tyto posty na stránce Pro vás"),
                a("a96d2628", "Nezobrazovat tento seznam na stránce Pro vás"),
                a("d00abae0", "Nejlepší posty z tohoto seznamu se již nebudou zobrazovat na časové ose vaší stránky Pro vás."),
                a("e566dd06", "Nejlepší posty z tohoto seznamu se již nebudou zobrazovat na stránce Pro vás."),
                a("j3cc1526", "Zobrazovat tento seznam na stránce Pro vás"),
                a("h435716e", "Nejlepší posty z tohoto seznamu se mohou zobrazovat na časové ose vaší stránky Pro vás."),
                a("e8ba412e", "Nejlepší posty z tohoto seznamu se nyní mohou zobrazovat na stránce Pro vás."),
                a("d66e95cc", "Připnout odpověď k postu?"),
                a("i24ed0de", "Připnout odpověď"),
                a("b1033082", "Zobrazí se u postu jako první odpověď. Můžete ji kdykoli nahradit nebo odepnout."),
                a("e96a5962", "Odepnout tuto odpověď?"),
                a("ec04e6fc", "Odepnout odpověď"),
                a("d05618f2", "Přestane se u postu zobrazovat jako první odpověď."),
                a("j9aedfdc", "Připnout odpověď"),
                a("c034211a", "Odepnout odpověď"),
                a("ie4538b4", "Odpověď byla připnuta k postu"),
                a("ad135a24", "Odpověď byla odepnuta od postu"),
                a("ee369efc", "Odpověď nejde připnout k postu"),
                a("c3e7f572", "Odpověď nejde odepnout od postu"),
                a("d058316c", "Děkujeme. Platforma X tuto informaci použije ke zlepšení vaší časové osy."),
                a("afb7e8f8", "Přečíst článek"),
                a("jb0429b1", function (e) {
                    return "Od uživatele " + e.name + " @" + e.screenName;
                }),
                a("gfdad702", "18+"),
                a("c5d23126", "Připnout"),
                a("j44ec610", "Odepnout"),
                a("ibd0106e", function (e) {
                    return "" + e.formattedCount;
                }),
                a("cface2d1", function (e) {
                    return "člen" + n(e.count, "ové", "ů", "", "ů");
                }),
                a("b5334780", "Nevyřízené"),
                a("b171d7c4", "Připojit se"),
                a("aa7ae3f6", "Jste členem"),
                a("bb1d57b6", "Opustit"),
                a("h4fbfa58", "Přijmout a připojit se"),
                a("ea8cfb1e", "Přijmout a požádat o připojení"),
                a("dc1b14a1", function (e) {
                    return "Přečtěte si a přijměte pravidla komunity " + e.communityName;
                }),
                a("c966ac64", "Nejde požádat o připojení ke komunitě. Zkuste to prosím znovu později."),
                a("g690e07e", "Vaše odpověď (volitelné)"),
                a("a5d21bf4", "Odpověď je volitelná. Ale pamatujte, že to pomáhá moderátorům přijmout vaši žádost."),
                a("h9526e03", "pravidlům platformy X"),
                a("c00c234f", function (e) {
                    return "Pravidla komunity " + e.communityName;
                }),
                a("hafa07f2", "Účast je omezená"),
                a("c15bee32", "Z této komunity jste byli odebráni"),
                a("efa265fc", "Vaše posty jsou chráněné"),
                a("f9cecf48", "Momentálně se bohužel nemůžete připojit"),
                a("bf7bdb60", "Chyba není na vaší, ale na naší straně (opravdu). Zkuste to prosím znovu později."),
                a("h27d6950", "Teď ještě nemůžete odejít"),
                a("b02360f6", "Poslední správce nebo moderátor nemůže komunitu opustit, dokud není prázdná."),
                a("fe832999", "nastavte své posty jako veřejné"),
                a("bc7a7af4", "Vaše posty v komunitě budou skryté a ke komunitě se nebudete moct znovu připojit."),
                a("a0e0a52c", function (e) {
                    return "" + e.offendingRule;
                }),
                a("fe76cacc", "Zobrazit další posty"),
                a("aebb6546", "Nahrávání více postů"),
                a("a3484d22", "remíza"),
                a("aab2efa9", function (e) {
                    return "vítěz " + e.winner;
                }),
                a("ba21c289", function (e) {
                    return "Karta skóre, " + e.gameCategory + ", " + e.gameState + ", " + e.accessibleGameClockPeriod + ", " + e.teamOneLabel + ", " + e.teamTwoLabel;
                }),
                a("f178e38c", "Nadcházející"),
                a("b6da6b02", "Živě"),
                a("i9f615c8", "Finální"),
                a("f897267a", "Odloženo"),
                a("f93c4b6a", "Zrušeno"),
                a("i79ab12a", "Sledovat téma"),
                a("c0f56044", "Přestat sledovat"),
                a("fcf51fe6", "Označit hvězdičkou"),
                a("e9a90d72", "Označeno hvězdičkou"),
                a("bf403716", "Odebrat hvězdičku"),
                a("c9f08e29", function (e) {
                    return "Odebrat hvězdičku od tématu " + e.title + "?";
                }),
                a("hed4dcd0", "I pokud od tohoto tématu odeberete hvězdičku, můžete v závislosti na tom, jaké účty sledujete, stále vídat posty, které se mu věnují."),
                a("cd876e02", "Dát do oblíbených"),
                a("f2816e02", "Oblíbené"),
                a("f5b04fbc", "Zrušit oblíbení"),
                a("c481ae3f", function (e) {
                    return "Zrušit oblíbení tématu " + e.title + "?";
                }),
                a("c94116de", "I pokud zrušíte oblíbení tohoto tématu, můžete v závislosti na tom, jaké účty sledujete, stále vídat posty, které se mu věnují."),
                a("e0e730b0", "Zajímá mě"),
                a("b1850062", "Nezajímavé"),
                a("gd3f996f", function (e) {
                    return "Nezajímá vás téma " + e.title + "?";
                }),
                a("jdd65aac", "Přestože vás toto téma nezajímá, mohou se vám o něm zobrazovat posty v závislosti na tom, které účty sledujete."),
                a("f93bb3ee", "Načíst obrázek"),
                a("cc37768d", function (e) {
                    return e.mediaFileSize + " KB";
                }),
                a("f19d78d7", function (e) {
                    return e.mediaFileSize + " MB";
                }),
                a("c75bf00e", "Načíst GIF"),
                a("d3ac405c", "Načíst video"),
                a("g97a046c", "Přehrát toto video"),
                a("ac4c73d8", "Vložené video"),
                a("f3bb10a6", "Přehrávání videa"),
                a("b87c0a72", "Povolte oznámení typu push a už vám na platformě X nic neuteče."),
                a("e71e09ec", "Zapnout oznámení"),
                a("g4850f44", "Oznámení typu push povolena"),
                a("dc397182", "Přizpůsobit"),
                a("ia5e7488", "Zavřít"),
                a("j681933e", "Soukromý seznam"),
                a("add55942", "Něco se pokazilo. Počkejte minutku nebo dvě a zkuste se k odběru přihlásit znovu."),
                a("ib8f5f3c", "Něco se pokazilo. Počkejte minutku nebo dvě a zkuste odběr odhlásit znovu."),
                a("e20fc756", "Přidat tohoto člena na tento seznam nemáte dovoleno."),
                a("d8a032a2", "Před přidáním další časové osy musíte odebrat jednu připnutou časovou osu."),
                a("fa816a0a", "Přeuspořádat seznam"),
                a("ac832ae4", "Připnout seznam"),
                a("cdb33880", "Odepnout seznam"),
                a("ca5d0a82", "Upravit seznam"),
                a("ec08efe4", function (e) {
                    return "" + e.formattedCount;
                }),
                a("h9f711f0", function (e) {
                    return "Sledující" + n(e.count, "", "", "", "ch");
                }),
                a("jceadc3e", "Bez názvu"),
                a("a1d5303c", "Soukromý"),
                a("cc8f8a80", "Neuvedeno v seznamu"),
                a("c33a97d6", "Veřejný"),
                a("i73fff1b", function (e) {
                    return "Ukázat " + e.count + " post" + n(e.count, "y", "y", "", "y");
                }),
                a("a682906d", function (e) {
                    return "Chybí " + e.count + " lajk" + n(e.count, "y", "ů", "", "ů");
                }),
                a("g566e973", function (e) {
                    return e.jobCount + " otevřené pracovní pozice" + e.tcc_organization_open_job_count;
                }),
                a("ccc45ee7", function (e) {
                    return "Tým " + e.team + " vyhrál";
                }),
                a("f81a95d7", function (e) {
                    return "" + e.date;
                }),
                a("ed4bea2e", "Dnes"),
                a("j3e0ae78", function (e) {
                    return "・" + e.formattedTime;
                }),
                a("cabfdd06", "Zítra"),
                a("abd0f804", function (e) {
                    return "・" + e.formattedTime;
                }),
                a("df45f564", "Přidat další post"),
                a("i569ff3e", "Zobrazit toto vlákno"),
                a("je5502eb", function (e) {
                    return "Včetně výsledků pro „" + e.suggestion + "“";
                }),
                a("bc4628a1", function (e) {
                    return "Zobrazeny výsledky pro „" + e.suggestion + "“";
                }),
                a("a1979464", "Načítání videa"),
                a("ic1e826e", "Hrát"),
                a("c8b4bca0", "Nakupovat"),
                a("f5ea07ec", "Nakupovat"),
                a("b62956aa", "Rezervovat"),
                a("i3ea806a", "Objednat"),
                a("fd00a76a", "Otevřeno"),
                a("e0aa5848", "Nainstalovat"),
                a("g33f3050", "Web"),
                a("d3f6b1a6", "Pošlete nám zprávu"),
                a("b0e322cc", "Pošlete nám soukromou zprávu"),
                a("cb8bddc8", "Pošlete mi soukromou zprávu"),
                a("cb8c547e", "Poslat soukromou zprávu"),
                a("d980e29f", function (e) {
                    return "Začíná " + e.date;
                }),
                a("fdd81500", "Karusel"),
                a("i0db46e6", "GIF"),
                a("faf745fa", "Nahota"),
                a("e1b4e672", "Choulostivý obsah"),
                a("acc48c15", function (e) {
                    return "Upozornění: " + e.formattedWarningList;
                }),
                a("a0e81a2e", "Zobrazit"),
                a("g034e6f1", function (e) {
                    return "K tomuto hlášení můžete připojit maximálně tento počet postů: " + e.count + ".";
                }),
                a("i2e0d584", "Sponzorovaný post"),
                a("b52a940c", "Tento post není dostupný."),
                a("da59404c", "Aktuálně máte zobrazenou nejnovější verzi."),
                a("e267df68", "Odpověď byla skryta"),
                a("d5f162b6", "Odpověď můžete kdykoli znovu zobrazit. Chcete ještě udělat něco dalšího?"),
                a("f376e9d4", "Zpětná vazba k postu"),
                a("d7c93b6c", "Post byl skryt"),
                a("b3abacee", "Bude se vám zobrazovat méně podobných postů. Máte ještě nějakou další zpětnou vazbu?"),
                a("a2411360", "Líbí se vám některá odpověď?"),
                a("e8a14626", "Teď můžete připnout odpověď k postu pomocí nabídky akcí – to jsou ty tři malé tečky u postu (...)."),
                a("d41305a8", "Bublina zprávy s připínáčkem"),
                a("eca84b72", "Zrušit repost"),
                a("g6185a9e", "Kdo může odpovědět?"),
                a("i00051cc", "Zvolte, kdo může odpovědět na tento post. Ten, koho zmíníte, může odpovědět vždy."),
                a("i9000126", "Účty, které sledujete"),
                a("dcaede8a", "Jen účty, které jste zmínili"),
                a("ad85cd2e", "Vaši odběratelé"),
                a("f19e4bfc", "Ověřené účty"),
                a("bf994ab2", "Jen vy"),
                a("e7b4b30a", "Jen účty, které jste zmínili"),
                a("ca6500a8", "Zakázat externí odkazy v odpovědích"),
                a("e839db3a", "Zavřít"),
                a("c8a98928", "Propagační obrázek"),
                a("f5b3dc1e", "Možná později"),
                a("ae0c5fbe", "Nepodařilo se změnit, kdo může odpovědět."),
                a("bae0cbc0", "Změnit, kdo může odpovědět"),
                a("d78131b9", function (e) {
                    return "Přidat uživatele @" + e.screenName + " do seznamů nebo ho odebrat";
                }),
                a("b3b642fc", "Proč toto postovat?"),
                a("fb4ee11c", "Proč tato reklama?"),
                a("ad50e7d9", function (e) {
                    return "Zobrazit " + e.entity + " analýz";
                }),
                a("ef1042f8", "Napsat Komunitní poznámku"),
                a("h3edf7a6", "Požádat o komunitní poznámku"),
                a("bf8d98f4", "Odpovídat mohou pouze odběratelé"),
                a("e69ada9e", "Odpovídat můžou jen předplatitelé Premium"),
                a("ae04c4dd", function (e) {
                    return "Smazat " + e.entity + "?";
                }),
                a("d9442996", "Tento krok nelze vrátit zpět a post bude odstraněn z vašeho profilu, z časových os účtů, které vás sledují, a z výsledků vyhledávání."),
                a("dad785a7", function (e) {
                    return "Tímto se všechny verze tohoto " + e.entity + " smažou z vašeho profilu, z časových os účtů, které vás sledují, a z výsledků vyhledávání. Tento krok nejde vrátit zpět.";
                }),
                a("jda253ab", function (e) {
                    return "Vaše " + e.entity + " byla smazána";
                }),
                a("j49c2f85", function (e) {
                    return "Něco se pokazilo. Zkuste svou " + e.entity + " znovu smazat za minutu.";
                }),
                a("f9fa0390", "Váš článek bude přesunut do stavu konceptu a může být odstraněn ze stránky Články."),
                a("dad450ec", "Upravit článek"),
                a("g9677c6e", "Potvrdit"),
                a("b57bfe70", "Upravit článek?"),
                a("bd3da7be", "Během úprav bude zveřejnění článku dočasně zrušeno a nebude veřejně viditelný. Všechna existující zapojení budou zachována a přenesena, když znovu zveřejníte aktualizovanou verzi."),
                a("j26481e6", "Zveřejnění vašeho článku bylo zrušeno a byl přesunut do vašich konceptů k úpravě."),
                a("b360ac7c", "Navigace po sekci"),
                a("adc81042", "Podrobnosti sekce"),
                a("bede965c", function (e) {
                    return "" + e.count;
                }),
                a("g345246c", "Toto je zveřejněný článek, což je nový způsob, jak psát na platformě X."),
                a("b14efa0a", "Titulní obrázek článku"),
                a("afdccedb", function (e) {
                    return "Ukázat " + e.displayCount + " odpově" + n(e.count, "di", "dí", "ď", "dí");
                }),
                a("bdba3e1a", "Zapnout oznámení o postech"),
                a("c4da7d28", "Vypnutí oznámení o postech"),
                a("j87c21f4", "Upozornit"),
                a("iebc30ca", "Vypnout oznámení"),
                a("dc740eb2", "Oznámení o postech z tohoto účtu se vám budou zobrazovat na časové ose oznámení. Můžete také povolit oznámení typu push na svém zařízení, aby vám nikdy neunikl žádný post."),
                a("dca669ad", function (e) {
                    return "Odpovědi od uživatele " + e.name + " už se vám na časové ose nebudou zobrazovat";
                }),
                a("ce6da5d7", function (e) {
                    return "Reposty od uživatele " + e.name + " se vám budou zobrazovat na časové ose";
                }),
                a("c6ea308b", function (e) {
                    return e.fullName + " (@" + e.screenName + ")";
                }),
                a("a1fef729", function (e) {
                    return "Podívejte se na uživatele " + e.fullName + " na platformě X.\n" + e.bio;
                }),
                a("c32a3d03", function (e) {
                    return "@" + e.screenName + " vás už nesleduje";
                }),
                a("j7bb1a43", function (e) {
                    return "Nahlásit uživatele @" + e.screenName;
                }),
                a("hef5960c", "Sdílet profil přes..."),
                a("bb1cbeb6", "Znovu zobrazit"),
                a("h2f62206", "Skrývání uživatele"),
                a("e67b2d65", function (e) {
                    return "Skrýt uživatele @" + e.screenName;
                }),
                a("f05597b3", function (e) {
                    return "Znovu zobrazit uživatele @" + e.screenName;
                }),
                a("h59f52ee", "Skrytí bylo úspěšné."),
                a("eea0cbee", "Opětovné zobrazení bylo úspěšné."),
                a("i29533b3", function (e) {
                    return "Uživatel @" + e.screenName + " byl skryt.";
                }),
                a("h129c3c3", function (e) {
                    return "Uživatel @" + e.screenName + " se bude znovu zobrazovat.";
                }),
                a("b3036480", "Odebrat tohoto sledujícího"),
                a("h27b7407", function (e) {
                    return "Uživatel @" + e.screenName + " bude odebrán z vašich sledujících a platforma X mu o tom nepošle žádné oznámení. V budoucnu vás bude moct začít znovu sledovat.";
                }),
                a("ibd0b842", "Kopírovat odkaz na profil"),
                a("b9c26480", "Zobrazit témata"),
                a("e922ce0c", "Zapnout reposty"),
                a("ge54bb8c", "Vypnout reposty"),
                a("h5ef9bc8", "Zobrazit seznamy"),
                a("e9eef4c6", "Nahlásit nezákonný obsah v EU"),
                a("e28ba0bb", function (e) {
                    return "Nahlásit uživatele @" + e.screenName + " kvůli nezákonnému obsahu v EU";
                }),
                a("a30b63da", "Něco se pokazilo. Zkuste sledujícího odebrat znovu za chvilku."),
                a("gd11f228", "(Potřebuje název)"),
                a("ced3c85a", "Upraveno"),
                a("b375ece0", "Tento nezveřejněný článek si můžete zobrazit jen vy."),
                a("edf9101f", "nápovědu a návody"),
                a("icf7f1a4", "Kopírovat do schránky"),
                a("e1a292ec", "Přidat média"),
                a("ebfd8ac6", "Vložit"),
                a("ia3611ee", "Začít psát"),
                a("d794135c", "Zvolte soubor nebo ho sem přetáhněte.\n\nKaždý blok může obsahovat GIF, video nebo sadu fotografií (až 4 fotografie na sadu)."),
                a("e187f906", "Soubory GIF"),
                a("fa4e68ca", "Posty"),
                a("c80940f4", "Markdown"),
                a("cfeb3f86", "Kód"),
                a("ad9e175c", "LaTeX"),
                a("c62a27e6", "Lajknuto"),
                a("g88b88a6", "Přidáno do záložek"),
                a("i282583e", "Posty z chráněných účtů nelze použít"),
                a("eae4fe7a", "Citace postů z odstraněných postů nelze použít"),
                a("d2042fb6", "Lajkované posty"),
                a("iad3e15c", "Posty přidané do záložek"),
                a("f1c63c34", "Vložit adresu URL postu"),
                a("a78f6310", "Neplatná adresa URL postu"),
                a("fe9ddab6", "Post nebyl nalezen"),
                a("dd2c9034", "Uložit posty na později"),
                a("cada17f8", "Uložte si posty do záložek a příště je snadno najdete."),
                a("j0179e90", "Vytvořit post"),
                a("adad5408", "Nová složka"),
                a("f44ddd2e", "Uložte si posty na později pomocí záložek"),
                a("c91d2c4c", "Potřebujete víc času na chytrou odpověď nebo si jen chcete schovat zajímavý post na později? Uložte si ho do záložek."),
                a("j45c642e", "Složky v tuto chvíli nejde načíst."),
                a("b87ca51a", "Odebrat fotku"),
                a("eebff22c", "Oříznout fotku"),
                a("hf6f2914", "Náhled"),
                a("be4a00c2", "Přidejte sem kód"),
                a("i3128619", function (e) {
                    return "Bloky nemohou mít více než " + e.count + " znaků";
                }),
                a("dbb02ec4", "Vyberte programovací jazyk"),
                a("d942865e", "Hledat programovací jazyk"),
                a("e554f642", "Zahodit změny?"),
                a("fa524058", "Zachovat"),
                a("d4ab68e2", "Zahodit"),
                a("a50ba822", "Hledat obrázky GIF"),
                a("c6f5ac52", "Kategorie — Hledání obrázků GIF"),
                a("ab468379", function (e) {
                    return e.query + " — Hledání obrázků GIF";
                }),
                a("j7fc4f9c", "Automatické přehrávání souborů GIF"),
                a("a66b7760", "Soubor GIF bez štítku"),
                a("a723aefa", "Nenašly se žádné soubory GIF"),
                a("a6ecfa0a", "Zkuste místo toho hledat něco jiného."),
                a("f5ff0d6f", function (e) {
                    return e.category + " — Hledání obrázků GIF";
                }),
                a("effe1ca6", "Zde přidejte výraz LaTeX"),
                a("c46c3c62", "Ve vašem výrazu byla chyba. Po opravě to zkuste znovu."),
                a("d4a4842e", "Přidat emoji"),
                a("fec16c1c", "Emoji"),
                a("idc01eb8", "Tučný"),
                a("cd7c97c6", "Převést do kurzívy"),
                a("dab932be", "Podtržení"),
                a("c5b6178a", "Přeškrtnutí"),
                a("c03d7fd6", "Vložit odkaz"),
                a("abfe2d36", "Seznam s odrážkami"),
                a("da685a7c", "Číslovaný seznam"),
                a("g74d920c", "Blok s citacemi"),
                a("cda501c6", "Zvětšit text"),
                a("a54fdc46", "Zmenšit text"),
                a("b340830e", "Zkratky v textu"),
                a("c1ea915e", "Zadejte na začátek nového řádku nebo bloku a za ním nechejte mezeru"),
                a("e8a4ef02", "Nadpis"),
                a("dd71241a", "Podnadpis"),
                a("ja9ca202", "Zkratky v článku"),
                a("ef1649e2", "X – klávesové zkratky"),
                a("aefd89c8", "Navigace"),
                a("cafdefb2", "Akce"),
                a("dda42cf2", "Sloupce a decky"),
                a("e8a12604", "Zadejte popisek (volitelné)"),
                a("eabf2209", function (e) {
                    return "GIF od " + e.providerName;
                }),
                a("a613e720", "Zkopírovat odkaz na GIF"),
                a("aeca1239", function (e) {
                    return "Tučný" + e.ttc_rich_text_composer;
                }),
                a("i7dc66dd", function (e) {
                    return "Kurzíva" + e.ttc_rich_text_composer;
                }),
                a("ad89b831", function (e) {
                    return "aktivní" + e.ttc_rich_text_composer;
                }),
                a("jcd5ee8a", "Upravit blok"),
                a("a8f09fb8", "Odstranit blok"),
                a("i89195ea", "Dělič"),
                a("da8ac57c", "Upravit popisek"),
                a("a8fdd09c", "Zveřejnit článek"),
                a("d8047cc8", "Publikovat"),
                a("ff7ddca2", "Po zveřejnění se váš článek zobrazí jako post. Najdete jej také ve svém profilu na kartě Články."),
                a("ef34d7be", "Ovládací prvky publika a odpovědí nelze po zveřejnění článku upravovat."),
                a("e52d4998", "Zvolte cílovou skupinu");
            a("d7985b24", "Zvolte, kdo může odpovídat na tento článek"),
                a("b5660338", "Náhled časové osy"),
                a("hff1b97a", "Odpovídat mohou pouze odběratelé."),
                a("a330771e", "Kopírujte odkaz na svou schránku"),
                a("b6510e68", "Kopírujte URL adresu svého článku, abyste ho mohli sdílet."),
                a("e4a6e006", "Něco se pokazilo. Zkuste to prosím znovu."),
                a("eff483e0", "Po zveřejnění obdržíte odkaz na sdílení článku."),
                a("ca15dd4e", "Koncept"),
                a("bb40bf66", "Publikováno"),
                a("h107935c", "Naposledy uloženo právě teď"),
                a("a753a870", "Použít"),
                a("afccc67e", "Kopírujte odkaz na článek"),
                a("beb24e9e", "Adresa URL zkopírována do schránky"),
                a("db9cc928", "Odstranit článek?"),
                a("c4e28ba6", "Tento krok nelze vrátit zpět a o článek přijdete."),
                a("ff2982d0", "Váš článek bude odstraněn. Tento krok nelze vrátit zpět a post bude odstraněn z vašeho profilu, z časových os účtů, které vás sledují, a z výsledků vyhledávání."),
                a("ca17beec", "Váš článek byl odstraněn"),
                a("f5cbb31c", "Odstranit článek"),
                a("f0977f52", "Ano, smazat"),
                a("db419d4c", "Prohlédněte si svůj koncept"),
                a("a1bc8e6c", "Zobrazit článek"),
                a("b6f72a22", "Zveřejnění vašeho článku se zruší, přesune se do konceptů a nebude veřejně viditelný."),
                a("f558d2e0", "Zrušení a návrh"),
                a("e9473589", function (e) {
                    return "" + e.articleTitle;
                }),
                a("ib067d6a", "Zvolte buď 1 obrázek GIF, nebo maximálně 4 fotky."),
                a("eb7ab862", "Vyberte až 4 fotky, videa nebo GIFy."),
                a("ce9a9736", "Ukládání..."),
                a("dd63549e", "Úspěch! Váš článek byl zveřejněn"),
                a("a4d128bc", "Úspěch! Váš článek byl zveřejněn a odkaz byl zkopírován do vaší schránky"),
                a("b4071e18", "Název článku"),
                a("f586b7fa", "Přidat nadpis"),
                a("ab0fa9ba", "Vraťte se ke konceptu, pokud ho chcete upravit"),
                a("c5f35c98", "Nahrávání média..."),
                a("d739d83e", "Zrušit nahrávání"),
                a("a94efeda", "Ukládání média..."),
                a("gd79d45a", "Zůstaňte soustředěni na svoje psaní zapnutím režimu soustředit se"),
                a("g1866bb2", "Vraťte se do běžného editoru zavřením režimu soustředit se"),
                a("a6a78df4", "Váš článek potřebuje název a obsah, aby mohl být zveřejněn."),
                a("ia656f1c", "Váš článek má název, ale potřebuje mít obsah, aby mohl být zveřejněn."),
                a("d3855e36", "Váš článek potřebuje název, aby mohl být zveřejněn."),
                a("f325958e", "Váš název překračuje povolený počet znaků. Zkraťte ho a článek zveřejněte."),
                a("ie5d9064", "Váš článek překračuje povolený počet slov. Zkraťte text a zveřejněte ho."),
                a("e03487a0", "Váš název překračuje povolený počet znaků a váš článek překračuje povolený počet slov. Zkraťte obojí a článek zveřejněte."),
                a("e938d562", "Váš název překračuje povolený počet znaků. Zkraťte název, přidejte něco do obsahu a zveřejněte ho."),
                a("e449c546", "Váš článek potřebuje název a váš článek překračuje povolený počet slov. Přidejte název, zkraťte hlavní text a poté ho zveřejněte."),
                a("bd00e836", "Váš poslední koncept není uložen, protože překračuje povolný počet znaků."),
                a("ic110f68", "Váš poslední koncept není uložen, protože je příliš dlouhý."),
                a("ifea3114", "Sdílet"),
                a("b384f696", "Doporučujeme, aby název měl mezi 50 a 70 znaky"),
                a("a7da0adb", function (e) {
                    return e.count + " slov" + n(e.count, "a", "", "o", "");
                }),
                a("aea1d455", function (e) {
                    return e.count + " minut" + n(e.count, "y", "", "a", "");
                }),
                a("df898d71", function (e) {
                    return "Čas čtení " + e.readingTimeValue;
                }),
                a("i9aadf4a", "Tento odkaz může být nesprávný. Kliknutím na jeden ze svých článků na levém postranním panelu si můžete článek přečíst, upravit nebo ho zveřejnit."),
                a("hfdce46e", "Zveřejnění vašeho článku bylo zrušeno"),
                a("df079228", "Režim soustředit se"),
                a("f5037228", "Doporučujeme obrázek s poměrem stran 5 : 2, který poskytuje nejlepší výsledky."),
                a("f965e890", "Vaše koncepty jsou zde"),
                a("c2756718", "Vaše zveřejněné články jsou zde"),
                a("af65c854", "Upravit v režimu soustředit se"),
                a("e05e2336", "Zrušit zveřejnění a přesunout článek do konceptů"),
                a("d36447e0", "Pište sem"),
                a("ca0ed982", "Pokračujte v konceptu nebo vytvořte nový článek"),
                a("ee9e42aa", "Napsat"),
                a("e9a50596", "Při vytváření nového konceptu došlo k chybě"),
                a("e070024a", "Upravit fotku"),
                a("i7d24b36", "Další obrázek"),
                a("f96a38a2", "Předchozí obrázek"),
                a("hac7c548", "Oříznout média"),
                a("e3dbfba4", "Upravit popis obrázku"),
                a("dd4a83a6", "Varování: citlivý obsah"),
                a("ffe9ec3a", "Přidat popisy"),
                a("j063b262", "Ke svým fotkám můžete přidat popis, kterému se někdy říká také alternativní text, aby byly přístupné více lidem včetně těch, kdo mají problémy se zrakem. Dobré popisky jsou stručné, ale dostatečně přesně popisují obsah fotky, aby bylo možné pochopit její kontext."),
                a("e57144f0", "Ano"),
                a("f9f9210c", "Ne, díky"),
                a("feabf2a0", "Alt. text"),
                a("e36287c6", "Popis"),
                a("cf565d08", "Co je alt. text?"),
                a("d9f7b32a", "Přidejte k tomuto postu upozornění ohledně obsahu"),
                a("ead1b80a", "Vyberte kategorii a my k tomuto postu přidáme upozornění ohledně obsahu. Ostatním lidem to pomůže vyhnout se obsahu, který nechtějí vídat."),
                a("h2437f26", "Choulostivé"),
                a("g5e1668a", "Lze stáhnout"),
                a("fdc6a52a", "Po aktivaci bude vaše video k dispozici ke stažení."),
                a("fe09fde2", "Změnit nastavení"),
                a("cd5cba97", function (e) {
                    return "Upozornění ohledně obsahu: " + e.formattedWarningList;
                }),
                a("h7215a76", "Autor označil, že tento post zobrazuje choulostivý obsah."),
                a("j32d345e", "Následující obsah může obsahovat citlivý materiál."),
                a("f1d9930c", "Skrýt"),
                a("c91f83ae", "Upravit video"),
                a("icbec4ae", "Nahrát titulky"),
                a("e0342f98", "Titulky"),
                a("e7048e74", "Oříznout médium"),
                a("ga408160", "Další video"),
                a("dc402134", "Předchozí video"),
                a("bf4e9d7a", "Nahrát soubor s titulky (.srt)"),
                a("j435467e", "Titulky můžete ke svému videu přidat tak, že nahrajete platný soubor titulků. Soubory musí být ve formátu SRT. Pokud video upravíte, na titulky to nebude mít žádný vliv."),
                a("a6b267fa", "Odstranit titulky"),
                a("a609edbe", "Vytvořit nový post"),
                a("dc295bb0", "Postování v komunitě"),
                a("e536de22", "Chcete-li postovat, musíte se nejprve stát členem. Chcete-li se zapojit, přidejte se k této komunitě!"),
                a("cb817dae", "Upravit post"),
                a("bec9cff8", "Zaregistrujte se na platformu X"),
                a("c150ba68", "Vítejte!"),
                a("f8e2163e", "Chcete se nejprve přihlásit?"),
                a("a108c147", function (e) {
                    return "Chcete sledovat uživatele @" + e.screenName + "?";
                }),
                a("c66afdc3", function (e) {
                    return "Začít sledovat uživatele @" + e.screenName;
                }),
                a("feccfd6e", "Pokud chcete někoho začít sledovat, budete se muset přihlásit."),
                a("dedce756", "Nyní můžete tento post olajkovat."),
                a("ha5987e0", "Chcete tento post lajknout?"),
                a("f98f4e00", "Pokud chcete post olajkovat, musíte se nejprve přihlásit."),
                a("b459ba4c", "Pokud chcete odpovědět na tento post, budete se muset přihlásit."),
                a("f3e1093a", "Nyní to můžete repostovat."),
                a("i1d8723c", "Chcete repostovat tento post?"),
                a("h19f38de", "Pokud chcete post olajkovat, musíte se nejprve přihlásit."),
                a("e289d950", "Pokud chcete post sdílet, budete se muset přihlásit."),
                a("d28215f0", "Hlasování bohužel v komunitách není povolené"),
                a("ec2fc089", function (e) {
                    return "Vaši post" + n(e.numOfTweets, "y byly", "y byly", " byl", "y byly") + " odeslali do komunity " + e.communityName;
                }),
                a("c7152355", function (e) {
                    return "Nezapomeňte zlepšit přístupnost obrázk" + n(e.numberOfImages, "ů", "ů", "u", "ů");
                }),
                a("ffa5562a", "Dobré popisy obrázků jsou stručné, ale dostatečně výstižné. Pokud je na obrázku text, vypište ho nebo shrňte."),
                a("a2d3facd", function (e) {
                    return "V" + n(e.numberOfImages, "aše popisy", "aše popisy", "áš popis", "aše popisy") + " zlepší přístupnost k platformě X pro lidi s postižením a pro všechny, kteří chtějí znát širší kontext.";
                }),
                a("cc6d0a48", "Toto připomenutí můžete vypnout v nastaveních přístupnosti."),
                a("j499fbcb", function (e) {
                    return "Přidejte popis" + n(e.numberOfImages, "y", "y", "", "ů");
                }),
                a("bb8170da", "Teď ne"),
                a("h4dd544e", "Váš post byl odeslán."),
                a("ice925ce", "Váš post byl upraven."),
                a("eae9e604", "Váš post byl odeslán. Po dobu 30 min jej můžete upravovat."),
                a("gcdf3fd6", "Váš post byl odeslán. Na jeho úpravy máte jednu hodinu."),
                a("c7999d10", "Vaše posty byly odeslány."),
                a("b97f5eb2", "Odesílání postu..."),
                a("g08523f0", "Odesílání postu... jakmile bude publikován, budete mít 30 minut na provedení jakýchkoli úprav."),
                a("fa53f95c", "Odesílání postu... jakmile bude publikován, budete mít 1 hodinu na provedení jakýchkoli úprav."),
                a("a608b1b4", "Zahodit post?"),
                a("j890123a", "Zahodit vlákno?"),
                a("af4d0a80", "Zahodit úpravy?"),
                a("bb01231c", "Tento krok nelze vrátit zpět, o rozepsaný koncept přijdete."),
                a("if69307c", "Pokud odejdete, vaše změny nebudou uloženy."),
                a("d2c271f6", "Uložit post?"),
                a("abb90544", "Obsah můžete uložit a odeslat ho později z konceptů."),
                a("d3bb6f30", "Poznámka: Účty označené v médiích nebudou uloženy do konceptu."),
                a("bf9b89e4", "Váš koncept byl uložen."),
                a("i63bfbf0", "Uschovejte si tu myšlenku"),
                a("a6c55352", "Vaše video se ještě stále nahrává. Opravdu chcete tento post zahodit? Jeho koncept a přílohy se tím ztratí."),
                a("c3d89aca", "Pokračovat"),
                a("b983f9e0", "Pozor"),
                a("ed5c4342", "Pár věcí, na které je třeba pamatovat..."),
                a("abc4afcc", "Čas na úpravy vypršel"),
                a("a9a471fa", "Posty se dají upravovat jen během prvních 30 minut po publikování."),
                a("a3483f1c", "Posty lze upravovat pouze během první hodiny po publikování."),
                a("g4bcc5f4", "Toto je vaše poslední úprava"),
                a("g922bf14", "Post už nepůjde znovu upravit."),
                a("f58b5009", function (e) {
                    return "Váš post bude odeslán dne " + e.scheduleDate + " v " + e.scheduleTime;
                }),
                a("fa97f508", "Po jejich odeslání můžete k tomuto vláknu přidat další posty."),
                a("c091760c", "Tato úprava nebyla uložena. Můžete zkusit uložit aktualizaci znovu, nebo ji zrušit a začít úplně od začátku."),
                a("d38504ad", function (e) {
                    return "Vyberte až " + e.maxMediaCap + " fotky, videa nebo GIFy.";
                }),
                a("dd6734c2", "Přečtěte si více"),
                a("g589c2e2", "Volba 1"),
                a("a1e6c3a2", "Volba 2"),
                a("a739e006", "Volba 3 (volitelné)"),
                a("d89a5b92", "Volba 4 (volitelné)"),
                a("c2a8118e", "Odstranit hlasování"),
                a("a8ede1de", "Přidat volbu"),
                a("af40a8e0", "Přidat"),
                a("caf8edc4", "Délka hlasování"),
                a("g93586be", "Dny"),
                a("d073b644", "Hodiny"),
                a("a2f0728e", "Minuty"),
                a("c9f5ae0a", "Uloženo do konceptů"),
                a("f0afcc0e", "Přidat hlasování"),
                a("d39e3e78", "Naplánovat post"),
                a("f6bab0da", "Text postu"),
                a("cc2b28fc", "Můžete přidat pouze 1 typ přílohy."),
                a("i6f7062c", "Přidat post"),
                a("j1d5791c", "Přidat odpověď"),
                a("e76f3776", "Odebrat post"),
                a("ec10ee02", "Hlasování"),
                a("cce30dcc", "Označit polohu"),
                a("ee016dd6", "Nahrávání dlouhých videí bude nějakou dobu trvat. Nechejte tuto kartu prohlížeče otevřenou, aby se nahrávání nepřerušilo."),
                a("b7d8e3f1", function (e) {
                    return e.numberOfAltTextEntries + " image popis" + n(e.numberOfAltTextEntries, "y obrázků", "ů obrázků", " obrázku", "ů obrázků");
                }),
                a("d1175c78", "Označit lidi"),
                a("b2943227", function (e) {
                    return "Nahrát titulek soubor" + n(e.numberOfVideos, "y", "y", "", "y") + " (.srt)";
                }),
                a("d0afbb37", function (e) {
                    return e.numberOfSubtitles + " titulek soubor" + n(e.numberOfSubtitles, "y", "y", "", "y");
                }),
                a("e349147c", "Co se právě děje?"),
                a("b4481d6c", "Sdílejte své myšlenky..."),
                a("fbd24526", "Přidejte další odpověď"),
                a("de4669e2", "Přidat komentář"),
                a("ed1f39ec", "Postujte svou odpověď"),
                a("a402b908", "Zeptejte se"),
                a("ic05a146", "Název"),
                a("d9c096f0", "Vygenerovat obrázek"),
                a("d2553906", "Vylepšete si svůj post"),
                a("b85f402a", "Vylepšete si svůj post pomocí funkce Grok"),
                a("e815fc34", "Zvolte cílovou skupinu"),
                a("cf44066a", "Kruh"),
                a("c6992b94", "Premium Exclusive"),
                a("a5f7b700", function (e) {
                    return "" + e.formattedCount;
                }),
                a("a7daec1e", function (e) {
                    return "" + n(e.count, "lidé", "lidí", "osoba", "lidí");
                }),
                a("f0598964", "Chcete něco nasdílet menší skupině lidí?"),
                a("e1ae1c0a", "Kruh umožňuje posílat posty jenom lidem, které si zvolíte."),
                a("eb969e30", "Jak Kruh funguje"),
                a("bb55e8ee", "Přidejte své lidi"),
                a("f1aedb7c", "Můžete si zvolit až 150 lidí, které chcete zahrnout do svého Kruhu."),
                a("b659fba8", "Postujte jenom pro ně"),
                a("c474be66", "Neváhejte a podělte se o své myšlenky. Zobrazit je a odpovědět na ně bude moci jenom váš Kruh."),
                a("h031847a", "Kdykoli cokoli změňte"),
                a("bd9db21f", "Další informace"),
                a("gfca5254", "Pravidla"),
                a("f510c8b2", "Pravidla komunity"),
                a("g46f363e", "Než se zapojíte do konverzace, podívejte se na pravidla komunity."),
                a("f6fec9f6", "Odstranit náhled karty"),
                a("b2df0574", "Sdílet také se sledujícími"),
                a("ccfc7453", function (e) {
                    return "Odpovědět může kdokoli v Kruhu uživatele @" + e.screenName + ", který vás sleduje";
                }),
                a("d4d17205", function (e) {
                    return "Odpovědět může kdokoli v Kruhu uživatele @" + e.screenName;
                }),
                a("df961844", "Odpovědět můžou jenom lidé z vašeho Kruhu, kteří vás sledují"),
                a("ce958ec8", "Odpovědět může jenom váš Kruh"),
                a("c7df589e", "Odpovědět může kdokoli v Kruhu autora postu, kdo vás sleduje"),
                a("j65d7c72", "Odpovědět může kdokoli v Kruhu autora postu"),
                a("i8ea6d4e", "Odpovědět může kdokoli"),
                a("a176d0d8", "Účty, které sledujete, mohou odpovědět"),
                a("gc7e52ca", "Odpovědět mohou pouze účty, které zmíníte"),
                a("feb7560a", "Odpovídat můžou jen Předplatitelé"),
                a("h257006e", "Přečtěte si pravidla této komunity"),
                a("ebe1d850", "Odpovídat mohou pouze vaši odběratelé"),
                a("b121464a", "Odpovědět mohou pouze ověřené účty"),
                a("aa65a44a", "Vaši volbu si na tomto zařízení zapamatujeme."),
                a("a4993fa2", "Přidat GIF"),
                a("bfb895b1", function (e) {
                    return "Zveřejnění naplánováno na " + e.date + " v " + e.time;
                }),
                a("hb36f723", function (e) {
                    return "Na časové ose se bude zobrazovat pouze prvních " + e.count + " znaků.";
                }),
                a("d759c09e", "Vyzkoušejte"),
                a("e4472565", function (e) {
                    return "Nahráno (" + e.percent + " %)";
                }),
                a("a06fa8fd", function (e) {
                    return "Zpracování (" + e.percent + " %)";
                }),
                a("h7f340e5", function (e) {
                    return "Nahrávání (" + e.percent + " %)";
                }),
                a("daad8822", "Nahrání selhalo"),
                a("i8ff6261", function (e) {
                    return "Zdá se, že toto video překračuje maximální velikost souboru, který lze nahrát (" + e.human_readable_max_size + " GB).";
                }),
                a("cba4fdde", "Poskytujte sledujícím na platformě X videa s rozlišením 1080p"),
                a("ef8f5d90", "Doporučení"),
                a("a7046fb0", "Zapotřebí jen zřídka"),
                a("acf3ecf4", "Přidat média"),
                a("bdbcdd94", "Přidat fotky"),
                a("f2c8c04d", "své posty nastavit jako veřejné"),
                a("b50e199a", function (e) {
                    return "" + e.userName;
                }),
                a("c3033e8a", function (e) {
                    return e.replyUserName + " a " + e.otherUserName;
                }),
                a("e50dae2a", function (e) {
                    return e.userOneName + " " + e.userTwoName + " a " + e.userThreeName;
                }),
                a("h758cd23", function (e) {
                    return e.userOneName + " " + e.userTwoName + " a " + n(e.othersCount, e.othersCount + " dalším uživatelům", e.othersCount + " dalším uživatelům", "1 dalšímu uživateli", e.othersCount + " dalším uživatelům");
                }),
                a("fba61ad6", function (e) {
                    return "" + e.userName;
                }),
                a("ce87c872", function (e) {
                    return e.replyUserName + " a " + e.otherUserName;
                }),
                a("b45fa506", function (e) {
                    return e.userOneName + " " + e.userTwoName + " a " + e.userThreeName;
                }),
                a("b8168f25", function (e) {
                    return e.userOneName + " " + e.userTwoName + " a " + n(e.othersCount, e.othersCount + " dalším", e.othersCount + " dalším", "1 dalšímu", e.othersCount + " dalším");
                }),
                a("ab67a7ac", function (e) {
                    return "" + e.userName;
                }),
                a("g571ef41", "Předplatitelé"),
                a("d48d6476", function (e) {
                    return e.replyUserName + " a " + e.otherUserName;
                }),
                a("i9451241", "Předplatitelé"),
                a("hdf48104", function (e) {
                    return e.userOneName + ", " + e.userTwoName + " a " + e.userThreeName;
                }),
                a("dcbb6a0b", "Předplatitelé"),
                a("ba74e38b", function (e) {
                    return e.userOneName + " " + e.userTwoName + " a " + n(e.othersCount, e.othersCount + " další(ch)", e.othersCount + " další(ch)", "1 dalšímu", e.othersCount + " další(ch)");
                }),
                a("c65916af", "Předplatitelé"),
                a("g5c5ebb8", function (e) {
                    return "" + e.userName;
                }),
                a("b86ff336", function (e) {
                    return "" + e.userName;
                }),
                a("e0af5609", function (e) {
                    return e.userOneName + " a " + e.userTwoName;
                }),
                a("ae834d19", function (e) {
                    return "" + e.trustedFriendsTweetOwner;
                }),
                a("g3d6f043", function (e) {
                    return e.userOneName + " a " + e.userTwoName;
                }),
                a("ade845a5", function (e) {
                    return "" + e.trustedFriendsTweetOwner;
                }),
                a("ef5386dc", function (e) {
                    return e.userOneName + " " + e.userTwoName + " a " + e.userThreeName;
                }),
                a("acd17e4b", function (e) {
                    return "" + e.trustedFriendsTweetOwner;
                }),
                a("g1ee3d90", function (e) {
                    return e.userOneName + " " + e.userTwoName + " a " + e.userThreeName;
                }),
                a("f6da070f", function (e) {
                    return "" + e.trustedFriendsTweetOwner;
                }),
                a("a035ba65", function (e) {
                    return e.userOneName + " " + e.userTwoName + " a " + n(e.othersCount, e.othersCount + " další(ch)", e.othersCount + " další(ch)", "1 dalšímu", e.othersCount + " další(ch)");
                }),
                a("e4c52c45", function (e) {
                    return "" + e.trustedFriendsTweetOwner;
                }),
                a("baf2c639", function (e) {
                    return e.userOneName + " " + e.userTwoName + " a " + n(e.othersCount, e.othersCount + " další(ch)", e.othersCount + " další(ch)", "1 dalšímu", e.othersCount + " další(ch)");
                }),
                a("j8e134e5", function (e) {
                    return "" + e.trustedFriendsTweetOwner;
                }),
                a("c14cdb18", "Sponzorovat"),
                a("f11264ac", "Přidat způsob platby"),
                a("j619ec94", "Sponzorovat post"),
                a("h1fcb36c", "Sponzorovat post"),
                a("fd22cfe0", "Smluvními podmínkami reklam."),
                a("i3656b52", "Kolik chcete utratit?"),
                a("h7c29de6", "Odhadovaný dosah"),
                a("hd435bf1", function (e) {
                    return e.audienceLow + " - " + e.audienceHigh + " lidé";
                }),
                a("i976aff4", "Aktualizujte informace o denním rozpočtu, aby odpovídaly vaší fakturační měně."),
                a("e1e912f2", "Váš post byl zveřejněn, ale nepodařilo se nám ho boostovat. Nebude vám účtován žádný poplatek."),
                a("fe26420a", "Přidat klíčová slova"),
                a("aacfbe55", function (e) {
                    return "Postujete jménem uživatele @" + e.screenName + ".";
                }),
                a("ga8627cd", function (e) {
                    return "Odpovídáte jménem uživatele @" + e.screenName + ".";
                }),
                a("e6d2573f", function (e) {
                    return "Posíláte zprávu jménem uživatele @" + e.screenName + ".";
                }),
                a("d37a3e15", function (e) {
                    return "Tento seznam vytváříte jménem uživatele @" + e.screenName + ".";
                }),
                a("ceb1ad26", "Představujeme videa ke stažení"),
                a("ea97bc08", "Zpřístupněte svůj obsah offline a pro úpravy! Uživatelé programu Premium mají nyní možnost stahovat a přetvářet váš obsah. Pokud si nepřejete, aby vaše videa bylo možné stáhnout, klepněte na svém videu na „Upravit“. Váš obsah, vaše pravidla."),
                a("e6042757", function (e) {
                    return "Na úpravu postu zbývá: " + e.minutes + " minut" + n(e.minutes, "y", "", "a", "") + " a " + e.seconds + " sekund" + n(e.seconds, "y", "", "a", "");
                }),
                a("a4e39717", function (e) {
                    return "Na úpravu postu zbývá: " + e.minutes + " minut" + n(e.minutes, "y", "", "a", "") + " ";
                }),
                a("c55eed72", "Odpověď uživateli"),
                a("caca3102", "Další v této konverzaci"),
                a("c6a6dc2f", function (e) {
                    return "Uživatele @" + e.screenName + " jste zablokovali, nedostane tudíž oznámení o vaší odpovědi.";
                }),
                a("f5b426c2", "Načítání uživatelů"),
                a("c20dc654", "Označit lze maximálně 10 lidí."),
                a("ae0831ab", function (e) {
                    return "Uživatele @" + e.screenName + " nelze označovat na fotkách.";
                }),
                a("cca7fa72", "Naplánované posty se nepodařilo odstranit."),
                a("c5dd0190", "Čas"),
                a("edeff232", "Datum"),
                a("fddf24b4", "Časové pásmo"),
                a("d39dc06e", "Odeslání postu nemůžete naplánovat do minulosti."),
                a("d024efe2", "Odeslání postu nemůžete naplánovat více než 18 měsíců do budoucnosti."),
                a("d15af6da", "Některé neodeslané posty se nepodařilo smazat."),
                a("a1e1b748", "Vámi vybrané neodeslané posty byly smazány."),
                a("ce80fba0", "Nahrávání neodeslaných postů"),
                a("i5d56b62", "Nejste ještě připravení poslat nějaký post? Uložte si ho do konceptů nebo naplánujte na později."),
                a("aef6257e", "Mazání neodeslaných postů"),
                a("dce0bc34", "Neodeslané posty"),
                a("f8464692", "Naplánováno"),
                a("e8bd47f2", "Vybrat všechny"),
                a("j2b145d4", "Zrušit celý výběr"),
                a("h6c79ac2", "Zahodit neodeslané posty"),
                a("d0a4a03c", "Tento krok nelze vrátit zpět, o neodeslané posty přijdete."),
                a("f9f69d32", "Odeslání se nezdařilo."),
                a("j74e5dd4", "Post, na který se snažíte odpovědět, byl smazán"),
                a("c5ceafc8", "Odpovídání"),
                a("f501ba43", function (e) {
                    return e.count + " další" + n(e.count, "(ch) posty(ů)", "(ch) posty(ů)", " post", "(ch) posty(ů)");
                }),
                a("b321d0cc", "Načíst obrázky"),
                a("abd649ce", "Zahodit neodeslaný post"),
                a("c7d42978", "Tento krok nelze vrátit zpět, o rozepsaný koncept postu přijdete."),
                a("e43a5528", "Pardon, někde jsme něco popletli a neodeslaný post se nesmazal."),
                a("e7c766ee", "Služby zjišťování polohy jsou zakázány"),
                a("ab68727a", "Zapnout je můžete v nastaveních svého zařízení."),
                a("ae4057a2", "Polohu nelze zjistit"),
                a("bf2923a6", "Zkontrolujte nastavení svého zařízení."),
                a("d963d1b6", "Nenašli jsme žádná místa"),
                a("a893d602", "OK"),
                a("be6cc44e", "Hledat místa"),
                a("d8ef3232", "Místa se nepovedlo načíst"),
                a("b01ed2db", function (e) {
                    return e.distance + " mi";
                }),
                a("i83e29e1", function (e) {
                    return e.distance + " ft";
                }),
                a("d4b7cff7", function (e) {
                    return e.distance + " km";
                }),
                a("b211849f", function (e) {
                    return e.distance + " m";
                }),
                a("fd391b9f", function (e) {
                    return "Vložen " + e.entity;
                }),
                a("e1618e49", function (e) {
                    return "Začali jste sledovat uživatele @" + e.screenName + ".";
                }),
                a("ge5067bc", "Skrýt odpověď"),
                a("j136c720", "Odpověď na post byla skryta"),
                a("d66f0338", "Skrytí odpovědí na vaše posty"),
                a("cfc8cb50", "Abychom vám dali více kontroly nad konverzacemi, které zahájíte, mohou autoři postů skrýt odpovědi na ně."),
                a("if8dc5f0", "Skryté odpovědi jsou přesunuty na samostatnou stránku, kterou může kdokoli zobrazit kliknutím na ikonu skryté odpovědi u postu."),
                a("b2615c6d", function (e) {
                    return "Chcete uživatele @" + e.screenName + " také zablokovat?";
                }),
                a("i62a03aa", "Ne"),
                a("f9f27fa2", "Skrýt post"),
                a("ce87916a", "Přidat/odebrat z nejzajímavějších"),
                a("eaae42ce", "Přidat do nejzajímavějších?"),
                a("h032d096", "Odebrat z nejzajímavějších?"),
                a("be38d25e", "Tento post bude uveden na kartě Výběr ve vašem profilu."),
                a("d2be9310", "Tento post bude odebrán z karty Výběr ve vašem profilu."),
                a("jea6b076", "Úspěšně přidáno do nejzajímavějších."),
                a("ce6fd0ec", "Úspěšně odebráno z nejzajímavějších."),
                a("ha35a1d2", "Připnout na profil"),
                a("d04f95c0", "Váš post byl připnut na váš profil."),
                a("i419d136", "Připnout post do profilu?"),
                a("c1b9714a", "Tento post se zobrazí v horní části vašeho profilu a nahradí dříve připnutý post."),
                a("fe4d099a", "Zvýraznit"),
                a("e8d4c1cc", "Zvýrazňování postů je funkce předplatného. Chcete-li odemknout tuto a další funkce, ověřte svůj účet."),
                a("b68c3784", "Ověřte svůj účet"),
                a("bb16cc76", "Opustit tuto konverzaci"),
                a("de21174c", "Tuto konverzaci jste opustili"),
                a("j33c9fc6", "Radši tu zůstanu"),
                a("aed79c54", "Pojďme spolu opustit konverzaci"),
                a("h12044a4", "Někdy se prostě rozhodnete, že nemusíte být u všeho. Když konverzaci opustíte, stane se následující…"),
                a("f100e566", "Zmizí označení vašeho uživatelského jména"),
                a("a0d68f4e", "Vaše uživatelské jméno zůstane v textu, ale už nebude označené ani v původním postu, ani v žádné odpovědi."),
                a("b00255b6", "Znemožní se další zmínky"),
                a("geea29ee", "Lidé už vás v této konverzaci nebudou moci zmínit."),
                a("c54678e8", "Přestanete dostávat oznámení"),
                a("ga4fa180", "Nebudou se vám zobrazovat další oznámení, ale na konverzaci se stále budete moci podívat."),
                a("h8dde772", "Pokud konverzaci opustíte, nikomu se o tom nezobrazí oznámení."),
                a("ee87e71c", "Sebe nemůžete skrýt."),
                a("ed428a76", "Zadaného uživatele jste neskryli."),
                a("e2d6c17e", "Skrýt tuto konverzaci"),
                a("cd1942f4", "Znovu zobrazit tuto konverzaci"),
                a("bbd8bed6", "Oznámení o této konverzaci byla skryta"),
                a("c13af432", "Oznámení o této konverzaci se budou znovu zobrazovat"),
                a("df744bda", "Skrýt"),
                a("j9552760", "Skrýt konverzaci"),
                a("d751694c", "Pokud konverzaci skryjete, už o ní nebudete dostávat žádná oznámení."),
                a("a50c911e", "Váš post byl připnut a přidán do výběru."),
                a("d1c1e2c2", "Připnout v komunitě"),
                a("j832cc34", "Bude se zobrazovat v horní části komunity."),
                a("h7dbb2f2", "Tento post se zobrazí v horní části komunity a nahradí dříve připnutý post."),
                a("d8725596", "Připnuto moderátory komunity"),
                a("f5cdcc2c", "Tato reklama mě nezajímá"),
                a("c2e276e4", "Zakázat autora z komunity"),
                a("a95f04ba", "Opravdu chcete odebrat označení fotky z tohoto postu?"),
                a("jfc76958", "Odstranit označení z fotky"),
                a("j4e43d8b", function (e) {
                    return "Nahlásit " + e.entity;
                }),
                a("e3fd237e", "Nahlásit reklamu"),
                a("ebb7662a", "Nahlásit post"),
                a("d1e21610", "Nahlásit porušení NetzDG"),
                a("d7513755", function (e) {
                    return "Hledejte posty @" + e.screenName + " v této komunitě";
                }),
                a("d7dbb71b", function (e) {
                    return e.followType + " uživatele " + e.screenName;
                }),
                a("ja66a2b5", function (e) {
                    return "Přestat sledovat uživatele @" + e.screenName;
                }),
                a("c2423b7b", function (e) {
                    return "Přestali jste sledovat uživatele @" + e.screenName + ".";
                }),
                a("i31dfa4c", "Zrušit skrytí odpovědi"),
                a("j8e56ba2", "Skrytí odpovědi zrušeno"),
                a("ic030338", "Odepnout z profilu"),
                a("gfcea3f4", "Odepnout post z profilu?"),
                a("eb2d59f4", "Tweet se už nebude automaticky zobrazovat na začátku vašeho profilu."),
                a("a2dd7414", "Váš post byl odepnut z vašeho profilu."),
                a("cac6a24a", "Odeberte připnutý post"),
                a("i642edc4", "Tento post se přestane zobrazovat v horní části informačního kanálu komunity."),
                a("f9478972", "Zobrazit skryté odpovědi"),
                a("c5491b5d", function (e) {
                    return "Zobrazit " + e.entity + " zapojení";
                }),
                a("haebcf52", "Lidé už vás v této konverzaci nebudou moci zmínit a nebudou se vám zobrazovat další oznámení."),
                a("c837fcaa", "Zobrazit další odpovědi"),
                a("d228a9a0", "Zobrazit více"),
                a("g0b48670", "Tato konverzace má příliš mnoho odpovědí na to, aby je bylo možné zobrazit všechny."),
                a("d9b417c4", "Označit jako nezajímavé"),
                a("c29d6806", "Přestat doporučovat"),
                a("ge8f3043", function (e) {
                    return "Sledovat téma " + e.topicName;
                }),
                a("aa576cbf", function (e) {
                    return "Přestat sledovat téma " + e.topicName;
                }),
                a("i77347d1", function (e) {
                    return "Zavřít téma " + e.topicName;
                }),
                a("d69b2d90", "Toto téma vás nezajímá."),
                a("je808a17", function (e) {
                    return "Téma " + e.topicName;
                }),
                a("ic6aa5f4", "Ověřeno."),
                a("c02e7e3c", "Načítání..."),
                a("c5453f28", "Kolo s 64 účastníky"),
                a("eb256a86", "Kolo s 32 účastníky"),
                a("g77adc66", "Nejlepších šestnáct"),
                a("a6d2520c", "Nejlepších 16"),
                a("g5b63eb6", "Nejlepších osm"),
                a("d8bf2890", "Nejlepších 8"),
                a("f9d3d6f2", "Poslední čtyři"),
                a("bda24f7c", "Poslední 4"),
                a("i5043440", "Národní šampionát"),
                a("fcb16026", "Šampionát"),
                a("e9c89ee8", "Východ"),
                a("h259fd86", "Západ"),
                a("a7b2545a", "Jih"),
                a("fdf7819a", "Středozápad"),
                a("i899e9b0", "Odeslat turnajového pavouka"),
                a("c5b04394", "Zobrazit výběry"),
                a("h836bbae", "Zobrazit turnaj"),
                a("e1059d6c", "1. kolo"),
                a("b1602be4", "2. kolo"),
                a("ef7bc2c0", "20. až 21. března"),
                a("h726aaf2", "22. až 23. března"),
                a("ee7cd198", "27. až 28. března"),
                a("fed91402", "29. až 30. března"),
                a("aba0a450", "5. dubna"),
                a("jdfba2dc", "7. dubna"),
                a("b7c6bc12", "TBD"),
                a("c373612c", "Vyberte:"),
                a("e8b3cab9", function (e) {
                    return "" + e.winner;
                }),
                a("j5db9ddd", " přes "),
                a("a638617d", function (e) {
                    return "" + e.loser;
                }),
                a("j4c40da4", "Odeslat hned"),
                a("b23688c8", "Zrušit časovač"),
                a("cca5d499", function (e) {
                    return "Popište text @" + e.selectedText + " jednou nebo dvěma větami.";
                }),
                a("d231a76a", "Vyhrajte 100 000 USD za nejlepšího turnajového pavouka 🏀"),
                a("heaba5d8", "Navrhněte vlastního turnajového pavouka na univerzitní basketbalový turnaj na X. Nejlepší turnajový pavouk vyhrává výlet na Mars."),
                a("i57d3ea0", "Pravidla, která se na to vztahují"),
                a("a0440af6", "Vytvořit turnajového pavouka"),
                a("aaad27c8", "Autor"),
                a("eb748f7e", "Zobrazit analýzu postu"),
                a("b7cff250", function (e) {
                    return "" + e.displayCoins;
                }),
                a("g62dcfbc", function (e) {
                    return "Mince";
                }),
                a("be059f7e", "Zvyšte nyní svůj dosah až o 100 tisíc dalších uživatelů"),
                a("c34f845e", "Zkuste boostovat tento post!"),
                a("c37102aa", "Oslovte více než 100 000 uživatelů, kteří mohou mít zájem o váš obsah."),
                a("ac245c4c", "Boostovat viditelnost"),
                a("e4db6326", "Možná později"),
                a("g6237a1e", "Sponzorování je aktivní"),
                a("d6b5949e", "Sponzorování pozastaveno"),
                a("ffd9cfe6", "Zobrazit víc"),
                a("d172116a", "Objevte víc"),
                a("be5df69e", "Další posty"),
                a("g11ebd34", "Víc návrhů"),
                a("g4a6901a", "Procházet"),
                a("h6453e74", "Procházet posty"),
                a("je506a60", "Změnit uživatelské jméno"),
                a("c0fcb08a", "Změna uživatelského jména bude mít za následek dočasné odebrání vašeho zaškrtnutí a partnerského účtu, dokud nebudou zkontrolovány."),
                a("d1f6d336", "Uživatelské jméno"),
                a("de65c756", "Návrhy"),
                a("ebeeac1a", "Změnit e-mail"),
                a("dc013356", "Stávající"),
                a("ea28c7ce", "Načítání nastavení e-mailu"),
                a("f3f66252", "Přidat e-mailovou adresu"),
                a("i5107de4", "Aktualizovat e-mailovou adresu"),
                a("d19fd42a", "Znovu zaslat potvrzovací e-mail"),
                a("g4da3246", "E-mail by odeslán. Zkontrolujte svou příchozí poštu, ve které byste měli najít potvrzovací odkaz."),
                a("h021352f", function (e) {
                    return "" + e.resendConfirmationLabel;
                }),
                a("d241169c", "Stávající heslo"),
                a("a9bc3044", "Nové heslo"),
                a("b8c03cfc", "Potvrdit heslo"),
                a("b731d32c", "Heslo bylo úspěšně aktualizováno."),
                a("d555d7e0", "Nové heslo nesmí být stejné jako vaše stávající heslo."),
                a("fa8af9ae", "Hesla se neshodují."),
                a("a03f5c73", function (e) {
                    return e.applicationCount + " aplikac" + n(e.applicationCount, "e", "e", "e", "í");
                }),
                a("j25601d9", "Další informace"),
                a("cb841d56", "Změnit telefon"),
                a("ce37ea44", "Přidat telefonní číslo"),
                a("ibaf239e", "Aktualizovat telefonní číslo"),
                a("j2636558", "Smazat telefonní číslo"),
                a("e49b16d4", "Smazat telefonní číslo?"),
                a("i931719e", "Tímto dojde k odebrání tohoto čísla z vašeho účtu a vy na něj již nebudete moct dostávat oznámení nebo přihlašovací kódy."),
                a("j841d1f4", "Telefon byl odebrán."),
                a("fe8b565a", "Tímto krokem z tohoto účtu smažete telefonní číslo a už dále nebudete dostávat oznámení a textové zprávy od platformy X. Tímto krokem rovněž vypnete dvoufaktorové ověření přihlášení k tomuto účtu."),
                a("hf45b8d4", "Tímto krokem z tohoto účtu smažete telefonní číslo a už dále nebudete dostávat oznámení a textové zprávy od platformy X. Tímto krokem rovněž vypnete textové zprávy jako metodu dvoufaktorového ověření přihlášení k tomuto účtu."),
                a("bc262c2e", "Další metody"),
                a("hc1a91da", "Záložní kódy"),
                a("e4fed8f0", "Získejte jednorázové záložní kódy, pomocí nichž se můžete přihlásit na platformu X, pokud nemáte přístup k možnostem dvoufaktorového ověření."),
                a("b39c7b14", "Vypnout ověřování přihlášení?"),
                a("a923fce6", "Vypnutí dvoufaktorového ověřování znamená, že váš účet může být snadněji napadnutelný. Opravdu ho chcete vypnout?"),
                a("ff781e0a", "Vypnout?"),
                a("c557ac30", "Opravdu chcete tuto metodu vypnout?"),
                a("d133464a", "Vypnutím této funkce odeberete tuto metodu dvoufaktorového ověřování přihlášení k vašemu účtu. Opravdu ji chcete vypnout?"),
                a("ee3a7bfa", "Vypnout"),
                a("aa9139cc", "Ověřování požadavků na přihlášení"),
                a("jc22dd42", "Po přihlášení vám platforma X odešle push oznámení do aplikace platformy X. Toto oznámení musíte schválit, abyste se dostali do svého účtu."),
                a("a219e218", "OK"),
                a("e0d79de8", "Se svým účtem máte propojený jenom jeden bezpečnostní klíč. Abyste se mohli ke svému účtu dostat, i kdybyste tento klíč ztratili, přidejte si další klíč a uložte záložní kód pro dvoufaktorové ověřování."),
                a("ja6bbfa0", "Načítání dat pro ověření přihlášení"),
                a("c2570922", "Textová zpráva"),
                a("fba9483c", "Na mobilní telefon dostanete textovou zprávu s ověřovacím kódem, jehož zadáním se přihlásíte do platformy X."),
                a("ab61b41a", "Ověřovací aplikace"),
                a("a67c7d68", "Pomocí mobilní ověřovací aplikace vygenerujete ověřovací kód, pomocí něhož se přihlásíte do platformy X."),
                a("h6d0d89c", "Bezpečnostní klíč"),
                a("b3e5c946", "Použijte bezpečnostní klíč, který při přihlášení do platformy X vložíte do počítače nebo sesynchronizujete s mobilním zařízením. Je třeba, abyste použili podporované mobilní zařízení nebo webový prohlížeč."),
                a("cd195528", "Přidat nový bezpečnostní klíč"),
                a("a1860ee8", "Dočasné heslo"),
                a("j45a2856", "Vytvořte dočasné jednorázové heslo pro služby třetích stran."),
                a("d8612d9c", "Nejprve zapněte textové zprávy nebo autentizační aplikaci."),
                a("e13d4468", "Před nastavením bezpečnostního klíče je třeba nejdříve jako jeden ze způsobů autentizace zapnout textové zprávy nebo autentizační aplikaci."),
                a("c1d96d6a", "Už jste přidali maximální počet klíčů"),
                a("gf91694e", "Pokud chcete přidat další klíč, budete napřed muset smazat některý ze stávajících."),
                a("j265ddb6", "Potvrďte svůj e-mail."),
                a("a7cfdf1c", "Chcete-li zapnout dvoufaktorové ověřování, je třeba s vaším účtem X propojit e-mailovou adresu a tu následně ověřit, abychom se ujistili, že jste to skutečně vy."),
                a("d7bfde1a", "Vypadá to, že váš účet je momentálně pozastaven. Pokud je váš účet pozastaven, dvoufaktorové ověřování není možné zapnout."),
                a("g268fbb8", "ID tohoto účtu je ověřeno."),
                a("f66d24be", "Centrum nápovědy"),
                a("c8255462", "Skrýt štítek s ověřením ID"),
                a("c6e731ee", "Skryjte svůj štítek ověření ID, aby ho lidé neviděli, když klepnou na modré zaškrtnutí na stránce vašeho profilu."),
                a("be582166", "Ověření ID může pomoci chránit váš účet proti osobám, které by se za vás chtěly vydávat, a udělí vašemu profilu štítek ověřeného ID."),
                a("b496bc94", "Prověřujeme váš státem vydaný průkaz totožnosti. O průběhu vás budeme informovat v oznámeních!\n\nJakmile bude schváleno, na svůj profil obdržíte štítek Ověřeno ID, aby ostatní věděli, že váš účet je ověřený."),
                a("d8f5cce4", "Překročili jste limit žádostí o ověření. Počkejte prosím 24 hodin, pak to zkuste znovu."),
                a("i8427a1e", "Tento účet není způsobilý pro ověření ID. V současné době jsou pro ověření ID způsobilí pouze jednotliví předplatitelé Premium."),
                a("cdc65e89", function (e) {
                    return e.title + " (volitelné)";
                }),
                a("h05c1f28", "Ověřte svůj účet poskytnutím úředně vydaného průkazu totožnosti. Obvykle to trvá asi 5 minut."),
                a("j8cfcc62", "Souhlasím s tím, že společnosti X a Au10tix budou používat obrázky mého průkazu totožnosti a moje selfie, včetně extrahovaných biometrických údajů, k potvrzení mé identity a pro účely související s bezpečností a zabezpečením platformy X, včetně zabránění vydávání se za jiného uživatele. Au10tix může taková data uchovávat po dobu až 30 dnů."),
                a("c4930cb6", "Co budete potřebovat:"),
                a("ac7bb0fe", "Připravte si úředně vydaný ID"),
                a("c12ce69c", "Zkontrolujte, zda je kamera vašeho zařízení odkrytá a funkční"),
                a("c5bfe94a", "Buďte připraveni na udělání selfie a vyfocení svého ID"),
                a("e5b7dd84", "Začátek"),
                a("abfaa528", "Přeskočit"),
                a("e4fed511", "X Premium"),
                a("def518fa", "Předplatné tvůrce"),
                a("f61cda83", "Sdílení výnosů z reklamy"),
                a("g1952008", "Předplatné pro tvůrce"),
                a("e5d0419c", "Podíly z výnosů pro tvůrce"),
                a("g3723480", "Předplatné tvůrce"),
                a("c776f523", "Sdílení výnosů z reklamy"),
                a("ab9f38f8", "Předplatné pro tvůrce"),
                a("d5cab8b0", "Podíly z výnosů pro tvůrce"),
                a("deaf5b16", "Opakovat"),
                a("g1a4a1b6", "Chyba při ověřování ID"),
                a("e24305e4", "Vaše relace ověření identity byla zastaralá nebo neplatná, zkuste to znovu."),
                a("f7954a0c", "Načítání dat o bezpečnostních klíčích"),
                a("h69986c2", "Svoje bezpečnostní klíče můžete přejmenovat nebo odstranit."),
                a("i5896ba2", "Přidat další klíč"),
                a("a8ef2b64", "Bezpečnostní klíč bez názvu"),
                a("d4e220b4", "Jméno"),
                a("g6d0f0b6", "Správa bezpečnostního klíče"),
                a("b894f68a", "Načítání dat o bezpečnostním klíči"),
                a("g2601bb6", "Přejmenovat klíč"),
                a("b464b726", "Odstranit klíč"),
                a("a4101e1b", function (e) {
                    return "Datum přidání: " + e.securityKeyAddedDate;
                }),
                a("i3bb3f78", "Záložní kód"),
                a("ec6a76e0", "Vygenerovat nový kód"),
                a("f2c3c31c", "Zkopírovat kód"),
                a("e8016b64", "Načítání záložního kódu"),
                a("c4ca22bc", "Pokud se vám někdy stane, že ztratíte přístup ke svému zařízení, můžete tento kód použít k ověření totožnosti."),
                a("f20ff69f", "Další informace"),
                a("j2327f80", "Dočasné heslo"),
                a("fbfeaf8e", "Vygenerovat nové heslo"),
                a("h4a8bd12", "Zkopírovat heslo"),
                a("g247dc1c", "Načítání dočasného hesla"),
                a("h3a32f52", "Pro přihlášení na platformu X na zařízeních a v aplikacích použijte toto dočasné heslo (mezery jsou volitelné)."),
                a("d70fceac", "Toto heslo za hodinu vyprší."),
                a("j924d222", "Změnit zemi"),
                a("e9310157", "Další informace"),
                a("bd5ac12e", "Vyberte si upřednostňovaný jazyk nadpisů, tlačítek a dalšího textu na platformě X pro tento účet. Toto nastavení nezmění jazyk obsahu zobrazeného na vaší časové ose."),
                a("cef33711", function (e) {
                    return e.languageName + " (beta)";
                }),
                a("b033248c", "Objevitelnost"),
                a("c69b4798", "Rozhodněte se, zda se lidé, kteří mají vaši e-mailovou adresu nebo telefonní číslo, s vámi budou moct na platformě X spojit."),
                a("eca117e6", "Dovolte lidem, kteří mají vaši e-mailovou adresu, se s vámi spojit na platformě X."),
                a("acd36386", "Lidé, kteří mají vaši e-mailovou adresu, vás budou moci na platformě X najít a spojit se s vámi."),
                a("gd8511ca", "Dovolte lidem, kteří mají vaše telefonní číslo, se s vámi spojit na platformě X"),
                a("eca935ec", "Lidé, kteří mají vaše telefonní číslo, vás budou moci na platformě X najít a spojit se s vámi."),
                a("ac77c66c", "Kontakty"),
                a("jadf483e", "Spravujte kontakty, které jste importovali z mobilních zařízení."),
                a("b864be7a", "Odebrat všechny kontakty"),
                a("g5fa1090", "Odebrat všechny kontakty?"),
                a("h3e420fc", "Tímto odeberete všechny kontakty, které jste dříve nahráli, a ve všech zařízeních vypnete synchronizaci s platformou X. Akce bude nějakou dobu trvat, je nevratná a než bude dokončena, mohou se vám na platformě X ještě zobrazovat návrhy (podle vašich kontaktů)."),
                a("ca24589e", "Bez názvu"),
                a("d439b1c1", "Další informace"),
                a("fe36fe10", "Potvrdit heslo"),
                a("hccd9dbe", "Pro provedení této akce zadejte své heslo."),
                a("df1ddda4", "Štítky s polohou, které jste si ke svým postům přidali, už na stránce X.com ani v aplikacích platformy X pro iOS a X pro Android nebudou viditelné. Tyto aktualizace se mohou projevit až za nějakou chvíli."),
                a("ed7fa034", "Služby určování polohy nejsou na tomto zařízení v současné chvíli aktivovány. Zapnout je můžete v nastaveních zařízení."),
                a("e80e4288", "Odebrat všechny informace o poloze připojené k vašim postům"),
                a("b0ee8ab6", "Chcete odebrat všechny informace o poloze připojené k vašim postům?"),
                a("e23b2991", "Další informace"),
                a("gd758534", "Dovolte uživatelům označovat vás na fotkách a dostávejte oznámení, když tak učiní."),
                a("a90af44e", "Skrýt choulostivý obsah"),
                a("a25e2ec6", "Odebrat blokované nebo skryté účty"),
                a("b827a058", "Nastavení bezpečného hledání bylo aktualizováno."),
                a("b27c9852", "Při aktualizaci nastavení bezpečného hledání se něco pokazilo."),
                a("j3402d7e", "Tato volba brání zobrazení postů s potenciálně choulostivým obsahem ve výsledcích hledání."),
                a("if05bca6", "Toto nastavení můžete použít k odebrání výsledků hledání souvisejících s účty, které jste zablokovali nebo skryli."),
                a("bc7fd990", "Načítání nastavení trendů"),
                a("e2f16650", "Zobrazit obsah v tomto místě"),
                a("e5e88f40", "Když je tato funkce zapnutá, uvidíte, co se kolem vás právě děje."),
                a("i4d54b0e", "Trendy pro vás"),
                a("ad431584", "Ukažte mi zábavné příběhy funkce Grok"),
                a("df9f03c8", "Přizpůsobte si trendy na míru na základě své polohy a uživatelů, které sledujete."),
                a("c6cf5c7e", "Trendy si můžete přizpůsobit na základě polohy a uživatelů, které sledujete."),
                a("e09358ba", "Zobrazte si nejnovější příběhy na X v zábavném režimu funkce Grok."),
                a("a55db872", "Přizpůsobení"),
                a("a58170fc", "Příběhy funkce Grok"),
                a("h0b5152e", "Změnit polohu"),
                a("dfeada5e", "Prozkoumat místa"),
                a("ac854308", "Zásady"),
                a("d429c942", "Zásady pro trendy u amerických voleb"),
                a("ede134f2", "Vyberte, zda se na tomto zařízení mají videa a soubory GIF přehrávat automaticky."),
                a("b3aab6d4", "Polohy"),
                a("e53e05e4", "Načítání poloh"),
                a("d5c9174f", function (e) {
                    return e.location + ", " + e.country;
                }),
                a("b47d123d", function (e) {
                    return "UŠETŘETE " + e.percentage + "%";
                }),
                a("c6614cc0", "plus všechny příslušné daně"),
                a("f8d3b50a", "včetně daně"),
                a("i2c32253", function (e) {
                    return e.price + " / měsíc";
                }),
                a("c41e1023", function (e) {
                    return e.price + " / ročně";
                }),
                a("i57aeafb", function (e) {
                    return "Za první" + n(e.duration, "ch " + e.duration + " měsíců", "ch " + e.duration + " měsíců", " měsíc", "ch " + e.duration + " měsíců") + ", pak " + e.standardPrice + " účtováno měsíčně";
                }),
                a("ae3e3723", function (e) {
                    return "Za první" + n(e.duration, "ch " + e.duration + " let", "ch " + e.duration + " let", " rok", "ch " + e.duration + " let") + ", pak " + e.standardPrice + " účtováno ročně";
                }),
                a("ade4c757", function (e) {
                    return "Posléze " + e.price + " / měsíc";
                }),
                a("f7798e11", function (e) {
                    return "Posléze " + e.price + " / rok";
                }),
                a("e0b39888", "Účtováno měsíčně"),
                a("b67c37de", "Účtováno ročně"),
                a("a8363765", function (e) {
                    return e.price + " účtováno ročně";
                }),
                a("df3ed1c8", function (e) {
                    return "" + e.standardPrice;
                }),
                a("g261b098", function (e) {
                    return "" + e.standardPrice;
                }),
                a("af66a072", "Než odejdete, zvažte, o co přijdete"),
                a("a092f1ba", "Pokračovat ke zrušení"),
                a("g96c7f48", "Změnit na jiný plán"),
                a("iccac88e", "Pro vás a časové osy sledování s polovičním množstvím reklam"),
                a("d7a124d8", "Žádné reklamy"),
                a("d2d22c36", "Přístup k funkci Grok"),
                a("j249b1d4", "Zvýšení odpovědi"),
                a("c4a37384", "Delší posty"),
                a("fb656858", "Upravit posty"),
                a("faaec212", "Získejte zaplaceno za post"),
                a("fb3c7168", "Složky pro záložky"),
                a("b346bc12", "Zaškrtnutí"),
                a("je8143e1", function (e) {
                    return "Získejte " + e.percentage + "% slevu na X " + e.productName + " na " + n(e.duration, e.duration + " měs.", e.duration + " měs.", "jeden měsíc", e.duration + " měs.");
                }),
                a("j5847735", function (e) {
                    return "Získejte " + e.percentage + "% slevu na X " + e.productName + " na " + n(e.duration, e.duration + " r.", e.duration + " r.", "jeden rok", e.duration + " r.");
                }),
                a("da3431f9", function (e) {
                    return "Tato sleva je od nás malým dárkem pro případ, že byste si chtěli X " + e.productName + " ještě chvíli nechat!";
                }),
                a("i6fbfc72", "Exkluzivní jednorázová nabídka"),
                a("f1bc6309", function (e) {
                    return "Zachovejte si plný přístup ke všem funkcím X " + e.productName;
                }),
                a("fdb7b52a", "Sleva bude uplatněna od příštího fakturačního cyklu."),
                a("af283938", function (e) {
                    return "" + e.standardPrice;
                }),
                a("c284b365", function (e) {
                    return "" + e.discountedPrice;
                }),
                a("e2673372", function (e) {
                    return "" + e.standardPrice;
                }),
                a("jd2dc103", function (e) {
                    return "" + e.discountedPrice;
                }),
                a("c6150942", "A je to!"),
                a("a905eac6", "Prozkoumejte Premium"),
                a("j6083a1c", "Spravovat vaše předplatné"),
                a("b4fa4630", "Aktualizovat způsob platby"),
                a("ef0dfa5a", "Aktualizovat fakturační údaje"),
                a("f5b352ec", "Zrušit předplatné"),
                a("j317d958", "Pozor – přijdete o slevu čekající na vyřízení"),
                a("a46e42d2", "Ponechat si moje předplatné"),
                a("e122fb3f", function (e) {
                    return "Vaše bezplatná zkušební verze skončí dne " + e.endDate + ".";
                }),
                a("be103b84", "Aktivní"),
                a("ace43720", "Platnost brzy vyprší"),
                a("c8f18aa4", "Obdrželi jste předplatné Premium+, protože vaše organizace je předplatitelem typu Ověřené organizace."),
                a("a341d1f7", function (e) {
                    return "Obdrželi jste předplatné Premium+, protože vaše organizace je předplatitelem typu Ověřené organizace prostřednictvím @" + e.organization + ". Další informace získáte od své organizace.";
                }),
                a("e4aaf0f8", "Pokud chcete zrušit bezplatné předplatné Premium, kontaktujte podporu"),
                a("e5170220", "Tento účet obdržel bezplatné předplatné Premium prostřednictvím výdajů na reklamu."),
                a("j6d6b66e", "Tomuto účtu bylo věnováno předplatné. Chcete-li své předplatné zrušit, kontaktujte podporu."),
                a("fae1751f", function (e) {
                    return "Vypadá to, že toto předplatné jste si koupili prostřednictvím aplikace X. " + e.mobilePlatform + " Spravovat nebo zrušit předplatného budete muset zde.";
                }),
                a("fecebd4c", "tady"),
                a("h201c4c2", "iOS"),
                a("i8385a2c", "Android"),
                a("h80834de", "jiné"),
                a("baf97716", "Předplacené funkce budete mít dál k dispozici do konce fakturačního období."),
                a("ae864b69", function (e) {
                    return "Vaše úroveň předplatného se má od příštího fakturačního cyklu změnit na úroveň " + e.tierName + ". Dojde k tomu dne " + e.date;
                }),
                a("a991d9a3", function (e) {
                    return "Příští fakturační cyklus začíná od " + e.date;
                }),
                a("edbb700f", function (e) {
                    return "Zahájit nový fakturační cyklus od " + e.date;
                }),
                a("e3f9d219", function (e) {
                    return "Předplatné končí: " + e.date;
                }),
                a("e9884540", "Aktivovat slevu"),
                a("bfb879aa", "Čekání na slevu"),
                a("f8321d82", "Vše"),
                a("eb233866", "Importované"),
                a("d23b0404", "Když někoho zablokujete, tak už vás nebude moct sledovat ani vám napsat zprávu a vy už od něj neuvidíte žádná oznámení."),
                a("e0a7e9bc", "Zablokovat nežádoucí účty"),
                a("ef731b14", "Načítání blokovaných účtů"),
                a("e554ba83", "Další informace"),
                a("if594962", "Blokovaný"),
                a("i2b9632e", "Odblokování proběhlo úspěšně."),
                a("g51a96de", "Když někoho zablokujete, nebude vás moci sledovat ani vám poslat zprávu a nebudou se vám o něm zobrazovat žádná oznámení. Můžete naimportovat seznam účtů, které chcete na X zablokovat."),
                a("j035733c", "Chystáte se zahájit proces deaktivace účtu na platformě X. Zobrazované jméno, @uzivatelske_jmeno a veřejný profil se už na stránce x.com a v aplikacích X pro iOS a X pro Android nebudou zobrazovat."),
                a("j4a29d52", "Po dobu 30 dnů po deaktivaci je možné účet na X obnovit, pokud k deaktivaci došlo náhodou nebo omylem."),
                a("ea989810", "Deaktivovat účet"),
                a("f6e73faa", "Deaktivovat"),
                a("c3743328", "Tímto dojde k deaktivaci vašeho účtu."),
                a("a20cd24e", "Co dalšího byste měli vědět"),
                a("e93b0ae0", "Zadáním hesla k vašemu účtu dokončíte žádost o deaktivaci."),
                a("fc025d1d", "Další informace"),
                a("bb5e039c", "nastavení"),
                a("j37efff6", "změnit"),
                a("ce5bfe12", "své údaje na X"),
                a("g7088266", "Upravit profil"),
                a("d9d293b8", "Webová stránka"),
                a("cb469ff6", "Jméno nemůže zůstat prázdné."),
                a("g511f468", "Váš avatar se neaktualizoval, protože některá média se nenahrála."),
                a("ec3a116e", "Váš banner se neaktualizoval, protože některá média se nenahrála."),
                a("j94599ec", "Přidat fotku avatara"),
                a("df31d76a", "Přidat fotku banneru"),
                a("c01a0e1a", "Potvrdit datum narození?"),
                a("df2c469a", "Přepnout na profesionální"),
                a("e1f76978", "Upravit profesionální profil"),
                a("ic04a6f6", "Tento krok nelze vrátit zpět, o změny přijdete."),
                a("addbe8e8", "Zvažte použití názvu bez speciálních znaků, aby byl přístupný více lidem včetně těch, kteří mají problémy se zrakem."),
                a("a46f80ab", function (e) {
                    return "Datum narození: " + e.birthdate;
                }),
                a("c7905f89", function (e) {
                    return "Rok narození: " + e.year;
                }),
                a("bfe8d1a2", "Upravit rozbalené informace O mně"),
                a("e1ec926e", "Vytvořit rozbalené informace O mně"),
                a("c119dee8", "Datum narození"),
                a("bbf0afc8", "Přidejte své datum narození."),
                a("f98d367e", "Upravit datum narození?"),
                a("d3f43300", "Tento údaj má omezený počet změn. Ujistěte se, že zadáváte věk osoby, která účet používá."),
                a("g10411f0", "Tady byste měli uvést datum narození osoby, která bude účet používat – i když vytváříte účet pro svou firmu, akci nebo kočku."),
                a("a0c5e370", "Kdo to vidí?"),
                a("i68fe54e", "Měsíc a den"),
                a("b4e729b6", "Rok"),
                a("f3bb1b48", "Odebrat datum narození?"),
                a("c9cb9972", "Tímto dojde k jeho odebrání z vašeho profilu."),
                a("a2bef112", "Odebrat datum narození"),
                a("c37622ec", "Zadejte platné datum"),
                a("f679d166", "Vaši sledující"),
                a("af293dc2", "Lidé, které sledujete"),
                a("h99b6d08", "zásady ochrany osobních údajů"),
                a("hce7a225", "Další informace"),
                a("e9603d88", "Zobrazit značku potvrzeného telefonního čísla"),
                a("ada99498", "Tato značka se zobrazí jen dalším uživatelům ve vaší oblasti."),
                a("a765e936", "Odstraňte svoje rozbalené informace O mně"),
                a("d4d68e44", "Uložené"),
                a("ie4f57d2", "Obnovit předplatné Premium"),
                a("h293aa52", "Doba platnosti vašeho předplatného Premium brzy vyprší!"),
                a("j1923668", "Využijte to nejlepší z X."),
                a("ac7e97ee", "Obnovit předplatné"),
                a("f70c69b4", "Boostovat odpověď, upravit post, přizpůsobení, delší posty a mnoho dalšího."),
                a("f4cec4d2", "Modré zaškrtnutí, boostovat odpověď, zvýšení limitů funkce Grok a mnoho dalšího."),
                a("b6de83a0", "Prostor pouze pro zaměstnance"),
                a("g3f251f2", "Soukromé vysílání"),
                a("d08666ba", "Soukromý Prostor"),
                a("eadb5a46", "Připojte se jako první"),
                a("f9629a8f", function (e) {
                    return "Vysílání uživatele " + e.hostName;
                }),
                a("ia3c0ab7", function (e) {
                    return "Prostor uživatele " + e.hostName;
                }),
                a("hd552761", function (e) {
                    return "Hostitel: " + e.hostName;
                }),
                a("c3ea19a5", function (e) {
                    return e.index + " z " + e.total;
                }),
                a("a5235305", function (e) {
                    return "Připojili se: " + e.listOfPeople;
                }),
                a("df9f8243", function (e) {
                    return e.name + " poslouchá";
                }),
                a("g2445c2f", function (e) {
                    return e.name + " právě mluví";
                }),
                a("fcfd5a67", function (e) {
                    return "Hostí " + e.name;
                }),
                a("f7882829", function (e) {
                    return e.name + " je spoluhostitel";
                }),
                a("d961a4a0", "Živě na platformě X"),
                a("g2c0144a", "Ověřené organizace"),
                a("cd5cdec8", "Správa kreditů na reklamu"),
                a("f23b6a72", "Zbývající kredity na reklamu"),
                a("i969d5de", "Nastavení reklamní kampaně"),
                a("d0924f58", "Získání podpory při problémech"),
                a("j8d53b64", "Zobrazit všechny funkce"),
                a("jd26f2a6", "Přidat partnerské účty"),
                a("e0a492e6", "Spravujte svoje pracovní pozice"),
                a("d9cbd02c", "Vaše žádost nyní prochází kontrolou"),
                a("ed4759a6", "Výsledek vaší žádosti vám sdělíme během několika dní. Je možné, že vás oslovíme prostřednictvím e-mailu a požádáme vás o další informace."),
                a("dad69faa", "Aktualizujte si způsob platby"),
                a("daf3248a", "Žádost není dokončena"),
                a("eb71036f", function (e) {
                    return "Nahrajte a ověřte dokumenty svých organizací do " + e.date;
                }),
                a("a1d3f1f2", "Ve spolupráci se společností Persona ověřujeme vaši totožnost a obchodní dokumentaci z důvodu ochrany a zabezpečení společnosti X. Společnost Persona může vaše údaje uchovávat až po dobu 30 dnů."),
                a("ea8c295a", "Zahájit ověřování dokumentů"),
                a("da1aa48f", function (e) {
                    return "Ověření zvyšuje vaši důvěryhodnost a viditelnost, jako u  @" + e.screenName + ".";
                }),
                a("e4a7a968", "Dosud nejste ověřeni"),
                a("id9c1e82", "Tento profil je ověřený"),
                a("d43b0edc", "Připojte se k ověřenému kruhu"),
                a("d4ea0ed4", "Získejte svůj modrý odznáček"),
                a("cffeaeae", "Získejte ověření"),
                a("b8e930fe", "Aktuální trendy"),
                a("ae05f268", "Trendy nejsou dostupné."),
                a("c6b51af8", "Jste na platformě X noví?"),
                a("ie8e1ffc", "Zaregistrujte se a získejte svou vlastní časovou osu."),
                a("fd6473fa", "Načítání uživatelů doporučených ke sledování"),
                a("a526aa66", "Koho sledovat"),
                a("ef625010", "Mohlo by se vám líbit"),
                a("b7388a56", "Zápatí"),
                a("hdabc3fc", "Smluvní podmínky"),
                a("bc6efc72", "Ochrana osobních údajů"),
                a("h3161192", "Zásady používání souborů cookie");
            a("a7de64de", "Informace o reklamách"),
                a("jb0a4c36", "Blog"),
                a("ce6d095a", "Kariéra"),
                a("e0adec82", "Značkové zdroje"),
                a("df1b7550", "Marketing"),
                a("he258678", "X pro firmy"),
                a("c6f58084", "Vývojáři"),
                a("d83f18d2", "Adresář"),
                a("hc5aa17c", "Získejte aplikaci X"),
                a("j0693948", "Získejte aplikaci Grok"),
                a("fbf83158", "Varování: Platba selhala"),
                a("jadeb4da", "Než ztratíte výhody ověření a předplatného, urychleně aktualizujte svou platební metodu."),
                a("bce3726a", "Aktualizujte vyúčtování"),
                a("fce9ecce", "Navržená videa"),
                a("j66b95a2", "Podrobné zprávy"),
                a("ad35153e", "betaverze"),
                a("b58d2bd2", "Relevantní posty"),
                a("efe6ef9e", "Zobrazit post"),
                a("b3d183ce", "Post s odpověďmi"),
                a("c299a6c0", "Vlákno"),
                a("h3d5d79e", "Post komunity"),
                a("cfe877ca", "Zvolte, koho chcete sledovat"),
                a("e06b864c", "Vypadá to, že vás tato konverzace baví"),
                a("a078ff70", "Chcete vidět víc obsahu od lidí, se kterými se v tomto vláknu bavíte? Objevujte obsah od nových účtů."),
                a("cb80300e", "Přeskočit na časovou osu na hlavní stránce"),
                a("ea5cd098", "Přeskočit na populární"),
                a("c67e3fc2", "Časová osa hlavní stránky"),
                a("d601fc20", "Nejnovější"),
                a("j43f99be", "Relevance"),
                a("ad6e11ac", "Odpovědi roztřiďte podle"),
                a("b2311b70", "Toto pro vás není dostupné."),
                a("j88f27d8", "Relevantní lidé"),
                a("i31dcd22", "Článek"),
                a("e3de2f6f", function (e) {
                    return e.entity + " je nyní ve vašich záložkách.";
                }),
                a("e64de8a9", function (e) {
                    return e.entity + " již není ve vašich záložkách.";
                }),
                a("d6d9aab6", "Přidat záložku"),
                a("bb89cf46", "Odstranit záložku"),
                a("a739d4ba", "Přidat do složky pro záložky"),
                a("d5270434", "Ukončit"),
                a("ac85c6b2", "Při načítání tohoto obrázku došlo k chybě."),
                a("b327c12a", "Obrázek"),
                a("ic76bdf0", "Přetvořte to s pomocí funkce Grok"),
                a("a4d3eb67", function (e) {
                    return e.fullName + " na platformě X: „" + e.tweetText + "“";
                }),
                a("f0701753", function (e) {
                    return "Skrýt na " + e.number + " dní";
                }),
                a("j7d0e836", "Rozbalit"),
                a("d227d19e", "Sbalit"),
                a("h367e724", "Rozbalené informace O mně"),
                a("ea5928d4", "Obsahujete zástupy. Stejně tak váš profil.\nPřidejte rozšířený životopis a řekněte lidem o sobě více."),
                a("h7ef9dc8", "Může zahrnovat:"),
                a("c04ba4b4", "Věci, na kterých jste pracovali, a chcete je předvést"),
                a("d7666008", "Váš legendární recept na těstoviny"),
                a("cb24ee16", "Pracovní zkušenosti a kariérní preference"),
                a("a1c93d74", "Máme teď nějaké potíže s uložením vašich změn. Zkuste to prosím znovu později."),
                a("b956c04a", "Určitě chcete odstranit svoje rozbalené informace O mně?"),
                a("ifb23caa", "Odstraněním rozbalených informací O mně je odeberete ze svého profilu."),
                a("c2333081", function (e) {
                    return e.count + " znak" + n(e.count, "y", "ů", "", "ů");
                }),
                a("a2b8c54c", "Odstraněno"),
                a("a9cc8f96", "Překročen maximální počet znaků"),
                a("eb7710f1", function (e) {
                    return e.years + " rok" + n(e.years, "y/let", "y/let", "", "y/let");
                }),
                a("bfc38bb5", function (e) {
                    return e.months + " měs.";
                }),
                a("h6a724ac", "Opravdu to chcete odstranit?"),
                a("f94aacae", "Odstraněním to odeberete ze svého profilu."),
                a("je07e266", "Skrytý"),
                a("a622dfcc", "Pracovní historie"),
                a("a6ec7ff8", "o mně"),
                a("eeb6d22c", "zkušenost"),
                a("eba5a8ec", "Název pracovní pozice"),
                a("fd20adb8", "V současnosti pracuji zde"),
                a("cd3059f2", "Datum zahájení"),
                a("b86019ae", "Datum ukončení"),
                a("eedfd35c", "Společnost"),
                a("caa46e54", "Název společnosti"),
                a("e893fe6e", "Vytvořit společnost"),
                a("j1c09ca4", "Web společnosti"),
                a("hd332c96", "Je vyžadován název pracovní pozice"),
                a("d2fb1b80", "Je vyžadována společnost"),
                a("b3590132", "Je vyžadováno datum zahájení a ukončení"),
                a("debb6abe", "Datum zahájení nemůže být v budoucnosti"),
                a("j7d08ada", "Datum ukončení nemůže být v budoucnosti"),
                a("a8c7d3fc", "Datum ukončení musí být pozdější než datum zahájení"),
                a("b335d507", function (e) {
                    return "Překročena maximální délka znaků: " + e.maxChars;
                }),
                a("j29ab120", "Skrýt oznámení od lidí:"),
                a("jdfc82f6", "Které nesledujete"),
                a("cfcda0e6", "Kteří vás nesledují"),
                a("c75b9b2a", "S novým účtem"),
                a("f39b9c9e", "S výchozím avatarem"),
                a("d227f940", "Kteří nepotvrdili svou e-mailovou adresu"),
                a("b210936e", "Kteří nepotvrdili své telefonní číslo"),
                a("ed0df10b", "Další informace"),
                a("dcef34ac", "Zapnout"),
                a("a39f706e", "Váš prohlížeč nepodporuje oznámení typu push"),
                a("h4f20d0e", "Dostávejte oznámení o tom, co se děje, když zrovna nejste na platformě X. Příjem oznámení můžete kdykoli vypnout."),
                a("cdce0394", "Tento výběr se použije pro jakýkoli účet otevřený v tomto prohlížeči."),
                a("b39bcae2", "Zapnout oznámení typu push"),
                a("b50f6144", "Chcete-li dostávat oznámení v reálném čase, zapněte oznámení typu push. Oznámení tak budete dostávat, i když zrovna nejste na platformě X. Oznámení můžete kdykoli vypnout."),
                a("fe11b3ea", "Nepodporovaný prohlížeč"),
                a("a1245d3a", "Vypadá to, že váš prohlížeč nepodporuje oznámení typu push."),
                a("f580c738", "Zapnout oznámení?"),
                a("i951fbcc", "Pokud chcete dostávat oznámení z platformy X, musíte je nejprve povolit v nastavení vašeho prohlížeče."),
                a("ec7cb554", "Když zapnete oznámení o postech od lidí, které sledujete, budete dostávat oznámení typu push o jejich postech nebo živých videích."),
                a("b68050dc", "Zobrazit uživatele"),
                a("af045060", "Související s vámi a vašimi posty"),
                a("cf378ff8", "Ze služby X"),
                a("f823bbbe", "Pouze pro ověřené účty"),
                a("a40e37f2", "Dostávejte e-maily o tom, co se děje, když zrovna nejste na X. Můžete je kdykoli vypnout."),
                a("e8eb54a0", "Týdenní hlášení pro váš účet"),
                a("ib80b0f2", "Nová oznámení"),
                a("ba58e6b0", "Posty, které jsme vám poslali e-mailem"),
                a("fae2c81a", "Populární posty a příběhy"),
                a("f7b09bb4", "Aktualizace o tom, jak si vedou vaše posty"),
                a("d3978554", "Novinky o aktualizacích funkcí a produktů platformy X"),
                a("bdccb81c", "Tipy pro co nejefektivnější využití X"),
                a("c3d47fe6", "Co vám uteklo od vašeho posledního přihlášení na X"),
                a("af8caf3e", "Novinky o X, partnerských produktech a dalších službách třetích stran"),
                a("hc076ee4", "Účast v průzkumech X"),
                a("ddfe3776", "Návrhy pro doporučené účty"),
                a("d17ba8c2", "Návrhy na základě vašich posledních sledování"),
                a("bcf50a1a", "Tipy k obchodním produktům X"),
                a("fcad1e2e", "Denně"),
                a("h9e0dfde", "Týdně"),
                a("e26d98ac", "Pravidelně"),
                a("h0c94842", "Buďte v obraze"),
                a("c460d332", "Když si zapnete oznámení o postech pro nějaký účet, dozvíte se, když zveřejní post, zahájí živé vysílání nebo začne hostit Prostor."),
                a("a820d092", "Načítání sledovaných"),
                a("ha45c9e4", "Oznámení o postu"),
                a("bdbf8f4e", "Zadejte slovo nebo frázi"),
                a("h43e2ea8", "Skryté slovo"),
                a("da8c0440", "Skrýt od"),
                a("defb4aaa", "Od kohokoli"),
                a("e7d47b00", "Od lidí, které nesledujete"),
                a("d9d6e10e", "Doba trvání"),
                a("gfa5008e", "Prodloužit dobu skrytí"),
                a("c5595dfe", "Změnit dobu skrytí"),
                a("he6804e0", "Dokud nezrušíte skrytí slova"),
                a("a268406c", "24 hodin"),
                a("fc638aa2", "7 dnů"),
                a("b8971cfa", "30 dnů"),
                a("cc7bedfc", "Dobu skrytí můžete změnit. Pokud jste předtím vybrali možnost „Navždy“, okamžitě začne platit nově vybraná doba."),
                a("d768049c", "Přidat slovo na seznam skrytých slov"),
                a("c6203da8", "Možnosti skrytého slova"),
                a("e3f0d3db", function (e) {
                    return 'Slovo "' + e.keyword + '" bylo skryto';
                }),
                a("h5746cf7", function (e) {
                    return "Slovo " + e.keyword + " bylo aktualizováno.";
                }),
                a("d2693eb8", "Ujistěte se, že fráze, kterou chcete skrýt, není delší než 140 znaků."),
                a("f8488024", "Jedná se o poměrně běžné slovo, které se objevuje v mnoha postech, ale pokud ho chcete skrýt, můžete."),
                a("deb4924d", "Další informace"),
                a("aa09e528", "Přidejte skrytá slova"),
                a("e506aa92", "Přidejte skryté slovo nebo frázi."),
                a("cbd04965", function (e) {
                    return 'Skrytí slova "' + e.keyword + '" bylo zrušeno';
                }),
                a("eb4e810a", "Platnost vypršela."),
                a("cabeb6c2", "Navždy"),
                a("f9bce916", "Skrýt slova"),
                a("gfe0ee3b", "Další informace"),
                a("ba4aaa9e", "Zrušit skrytí fráze?"),
                a("f837ed7e", "Tato fráze nyní bude povolena ve vašich oznámeních a na časové ose hlavní stránky."),
                a("a6194d10", "Načítání skrytých účtů"),
                a("bcf6ad9a", "Posty od skrytých účtů se vám nebudou zobrazovat na časové ose na hlavní stránce. Účty můžete skrýt přímo z jejich profilů nebo postů."),
                a("b8e49590", "Když skryjete některé účty, zprávy od daných uživatelů se budou filtrovat a odesílat na konec vašeho seznamu žádostí o soukromou konverzaci."),
                a("ec202165", "Další informace"),
                a("gde6b425", function (e) {
                    return "Uživatel " + e.name + " byl skryt.";
                }),
                a("e308019b", function (e) {
                    return "Uživatel " + e.name + " se bude znovu zobrazovat.";
                }),
                a("hfb77cf6", "Bezpečnost"),
                a("f350f0c0", "Doporučení"),
                a("fd3369a2", "Vyberte, v jakých jazycích chcete, aby byly doporučené posty, osoby a trendy."),
                a("hfc86556", "Skryto"),
                a("dae57a42", "Povolit vše"),
                a("i7cbc154", "Povolit některé"),
                a("d623aecc", "Sdílejte účet s lidmi, kteří budou mít delegované role."),
                a("f3029d5c", "Pokud je toto nastavení zapnuté, můžou vás lidé pozvat a sdílet s vámi svůj účet."),
                a("cd1305e8", "Povolit ostatním, aby vás pozvali do svého účtu"),
                a("j339ef22", "Povolit, aby vás pozval kdokoli"),
                a("g4b0c2dc", "Povolit, aby vás pozvali jenom lidé, které sledujete"),
                a("d9aef256", "Vaše delegování"),
                a("afb3ccf6", "Nepovolit"),
                a("dfae5248", "Nepovolit ostatním, aby vás pozvali do svého účtu?"),
                a("b9c91524", "V budoucnu už nebudete dostávat pozvánky k dalším delegováním. Nadále budete mít přístup ke svým stávajícím delegováním."),
                a("c349b958", "Pozvat člena"),
                a("e177f72a", "Pozvěte ostatní, aby mohli s vaším účtem pracovat, a spravujte u účtu role. Členové můžou posílat soukromé zprávy, publikovat posty a vytvářet seznamy – a také je zobrazovat."),
                a("cd5c5e73", function (e) {
                    return "Můžete mít pouze " + e.numDelegatesLabel + " deleg" + n(e.numDelegates, "ace", "ací", "áta", "ací");
                }),
                a("efee0a50", "Pozvat k tomuto účtu člena"),
                a("ja0a1aa6", "Pozvat k tomuto účtu přispěvatele"),
                a("db4f623a", "Přiřadit roli tomuto členovi"),
                a("be7350e3", function (e) {
                    return "Přiřadit uživatele @" + e.screenName + " jako správce?";
                }),
                a("b7aa7642", "Pozvánka byla odeslána"),
                a("edbca224", "Odeslat pozvánku"),
                a("f4834ca6", "Pozvat dalšího člena"),
                a("cb04a824", "Přispěvatel"),
                a("d4b3abde", "Přispěvatelé můžou posílat soukromé zprávy, publikovat posty a vytvářet seznamy. V rámci účtu si můžou také prohlížet soukromé zprávy, posty a seznamy."),
                a("b92e2700", "Správci mají stejná oprávnění jako přispěvatelé. Mohou také zvát přispěvatele na účet nebo je odebírat a zobrazovat si analýzu postů."),
                a("hbbbf908", "Správci mohou zvát přispěvatele na účet nebo je odebírat a zobrazovat si analýzu postů. Ujistěte se, že roli přiřazujete správné osobě."),
                a("d8eda249", function (e) {
                    return "Jakmile uživatel @" + e.screenName + " pozvánku přijme, bude moct se svými aktualizovanými oprávněními přispívat k tomuto účtu.";
                }),
                a("b5faf216", "Tento člen nemá povolené pozvánky k delegování."),
                a("hcc3b4ce", "Tento člen je blokován vaším účtem."),
                a("ace0f0a4", "Tento člen má nastavené omezení, kdo jej může pozvat jako delegáta."),
                a("c2e8f726", "Správci"),
                a("fade0942", "Správci mohou také zvát přispěvatele na účet nebo je odebírat a zobrazovat si analýzu postů."),
                a("b7d6e5d6", "Přispěvatelé"),
                a("cd76a282", "Zatím nebyl přidán žádný člen"),
                a("db25d796", "Změnit roli tohoto člena"),
                a("e4133790", "Role byla aktualizována"),
                a("a1a27c26", "Změnit roli"),
                a("fd7b1b1c", "Zpět"),
                a("ec67d021", function (e) {
                    return "@" + e.screenName + " může se svými novými oprávněními jednat jménem tohoto účtu.";
                }),
                a("h502484e", "Čekající pozvánka"),
                a("a171ca7c", "Zrušit pozvání člena"),
                a("f68f079c", "Změnit roli"),
                a("b2794e9e", "Odebrat ze skupiny"),
                a("gca83d6a", "Už nebude na tomto účtu správcem."),
                a("b8cac21c", "Už nebude na tomto účtu přispěvatelem."),
                a("hd67c2e8", "Zrušit pozvání"),
                a("f0bd8ca9", function (e) {
                    return "Odebrat uživatele @" + e.screenName + "?";
                }),
                a("a33eba47", function (e) {
                    return "Zrušit pozvání uživatele @" + e.screenName + "?";
                }),
                a("d472c9eb", function (e) {
                    return "Uživatel @" + e.screenName + " byl odebrán ze skupiny";
                }),
                a("h5951997", function (e) {
                    return "Pozvání uživatele @" + e.screenName + " bylo zrušeno";
                }),
                a("a44c6034", "Čekající pozvánky"),
                a("e39bc936", "Jako člen můžete posílat soukromé zprávy, publikovat posty a vytvářet seznamy a také je prohlížet. Správci mohou také zvát přispěvatele na účet nebo je odebírat a zobrazovat si analýzu postů."),
                a("h0d3bddc", "Přístup správce"),
                a("c54aafb0", "Přístup přispěvatele"),
                a("idc35f32", "Nebyl vám delegován žádný účet"),
                a("fab787b4", "Opustit účet"),
                a("bfbe9620", "Zobrazit členy"),
                a("d52a2b36", "Už nebudete na tomto účtu správcem."),
                a("df515932", "Už nebudete na tomto účtu přispěvatelem."),
                a("cd00ea21", function (e) {
                    return "Opustit účet @" + e.screenName + "?";
                }),
                a("efa88ab1", function (e) {
                    return "Opustili jste účet @" + e.screenName;
                }),
                a("c6dae164", "Přijmout pozvánku"),
                a("f8376170", "Odmítnout pozvánku"),
                a("a68c45e4", "Odmítnout"),
                a("aa35b48d", function (e) {
                    return "Odmítnout pozvánku od uživatele @" + e.screenName + "?";
                }),
                a("ed2a4b05", function (e) {
                    return "Zamítli jste pozvánku k členství v účtu @" + e.screenName;
                }),
                a("e73f9635", function (e) {
                    return "Přijali jste pozvánku k členství v účtu @" + e.screenName;
                }),
                a("d2da668c", "Delegovat členy"),
                a("ddf27b8e", "Pozvat přispěvatele"),
                a("jba63182", "Podívejte se na role členů účtu. Členové můžou posílat soukromé zprávy, publikovat posty a vytvářet seznamy – a také je zobrazovat."),
                a("af59527e", "Podívejte se na role členů a pozvěte k účtu přispěvatele. Členové můžou posílat soukromé zprávy, publikovat posty a vytvářet seznamy – a také je zobrazovat."),
                a("eafcc76a", "Co aplikace dokáže zobrazit..."),
                a("j3998a16", "Co aplikace dokáže..."),
                a("a6845663", function (e) {
                    return e.date + " jste schválili tato oprávnění aplikace";
                }),
                a("b2347f7c", "Načítání dat aplikace"),
                a("e1fda16e", "S touto aplikací nejste propojeni."),
                a("b8f3ed46", "Když ke svému účtu na platformě X připojíte aplikaci třetí strany, udělujete tím dané aplikaci přístup ke svému účtu."),
                a("gb8d09ba", "Má přístup k vaší e-mailové adrese"),
                a("g6dc09a0", "Oprávnění"),
                a("a6e6e898", "Pouze čtení"),
                a("cde3b9ae", "Čtení a psaní"),
                a("g0d7813a", "Čtení, psaní a soukromé zprávy"),
                a("c9b35b9e", "Přečtěte si údaje o vašich reklamách."),
                a("e0191264", "Čtěte, vytvářejte a spravujte údaje o vašich reklamách."),
                a("b73e1e8a", "Zjistěte, jak odebrat přístup"),
                a("c174e46e", "Zobrazit méně"),
                a("a39075ff", function (e) {
                    return e.n + " další(ch)";
                }),
                a("da6cdba8", "Odvolat oprávnění aplikace"),
                a("ef1d3dcc", "Nahlásit aplikaci"),
                a("d64e29c6", "Odhlásit zobrazené zařízení"),
                a("idfa01cc", "Odhlásit se zobrazeného zařízení?"),
                a("f400075e", "Tímto ukončíte vaši aktivní relaci na platformě X. Pro spuštění nové se budete muset znovu přihlásit."),
                a("e04ba39c", "Datum a čas"),
                a("eed75824", "Ukončili jste svou aktivní relaci na platformě X."),
                a("ddcd3d26", "Načítání dat relace"),
                a("d2f0f3fe", "Tuto relaci jsme nenašli."),
                a("ga05517a", "Zatím jste nevytvořili žádné hlášení"),
                a("ea1715c0", "Až tak učiníte, uvidíte je tady."),
                a("b70a2cde", "S identifikací choulostivých médií mám pomáhají technologie, takže i když se neustále zlepšujeme, nejsme zcela stoprocentní."),
                a("ee320a07", "zásadách pro choulostivý mediální obsah"),
                a("ffeb836a", "Nastavení nejsou k dispozici"),
                a("f2fb9746", "Tato nastavení nejsou k dispozici, protože se vztahují na soubory cookie, které nejsou zcela nezbytné. Protože jste s těmito soubory cookie již vyjádřili nesouhlas, používáme pouze soubory cookie, které z vašeho zařízení shromažďují nezbytná data."),
                a("aa4342be", "Násilný obsah"),
                a("jfec3aa0", "Obsah pro dospělé"),
                a("j6bacd6a", "Skryje média označená jako násilný obsah, pokud se nerozhodnete je zobrazit. V aplikaci platformy X pro iOS se tato média nezobrazí nikdy."),
                a("a73e66a8", "Skryje média označená jako obsah pro dospělé, pokud se nerozhodnete je zobrazit. V aplikaci platformy X pro iOS se tato média nezobrazí nikdy."),
                a("fef1b8dc", "Skryje média označená jako citlivá, pokud se nerozhodnete je zobrazit. V aplikaci platformy X pro iOS se tato média nezobrazí nikdy."),
                a("d0a5a1c0", "Upozornit"),
                a("ga197e26", "Zobrazit vše"),
                a("eb723386", "Nikdy nezobrazovat"),
                a("ea31c622", "Patří sem veškerý mediální obsah zobrazující smrt, násilí, vážná tělesná zranění nebo lékařské zákroky v explicitních detailech."),
                a("e40985c4", "Patří sem dobrovolně vyrobený a sdílený mediální obsah, který je pornografické povahy nebo jehož účelem je navození sexuálního vzrušení."),
                a("h7e0672b", "média nastavily"),
                a("de9f111a", "Spravovat aktuální předplatné"),
                a("d5839f9e", "Podmínky si můžete zkontrolovat a předplatné spravovat prostřednictvím svého účtu Stripe."),
                a("a840c22c", "Spravujte stávající předplatné Premium"),
                a("e31456f8", "Přepnout úroveň"),
                a("a7c4ecea", "Užijte si časovou osu Pro vás bez reklam, odemkněte si všechny funkce a získejte největší zvýšení odpovědí."),
                a("h15cc518", "Prozkoumejte možnosti úrovní a vyberte si měsíční nebo roční plán."),
                a("ce70c590", "Spravovat odznaky partnerství"),
                a("a49e1b2a", "Řazení vašich partnerství"),
                a("e2daf93c", "První odznak se zobrazí u všech postů."),
                a("ab8089ea", "Změnit pořadí"),
                a("e0221c42", "Příjemnější prostředí pro čtení na platformě X i mimo ni."),
                a("adcaa214", "Podívejte se na články nejčastěji sdílené lidmi, které sledujete."),
                a("b62d6e4c", "Čtečka"),
                a("acf63cd2", "Vyberte si preferovanou velikost textu pro čtení vláken. Funkci čtečky zapnete výběrem tlačítka s knihou u libovolného postu ve vlákně."),
                a("e5fff0c8", "Vaše předplatné je aktivní."),
                a("ac057b4e", "Pokud chcete zrušit své bezplatné předplatné pro zapojení do platformy X, kontaktujte podporu"),
                a("ib8ebf3b", function (e) {
                    return "Vypadá to, že toto předplatné jste si koupili na zařízení s platformou " + e.mobilePlatform + ". Ke správě nebo zrušení předplatného budete muset použít tuto platformu.";
                }),
                a("i8132774", "Bonusový obsah pro vaše nejzapálenější sledující"),
                a("a1222584", "Vydělejte peníze díky svému obsahu"),
                a("df837dac", "Odhadovaný získaný příjem / prahová hodnota výplat"),
                a("df29646e", "Prahová hodnota výplat"),
                a("b0ac642a", "Výplaty budou na váš účet připisovány nejpozději do 90 dnů."),
                a("c747df1c", "Nastavte údaje pro výplaty"),
                a("ac814a76", "Zatím jste nenastavili údaje pro výplaty."),
                a("f139168e", "Řídicí panel výdělků"),
                a("ee0510c2", "Historie výplat"),
                a("c9b82b4c", "Žádost byla přijata · Nastavte své Předplatné"),
                a("ibb5e1c8", "Žádost byla zamítnuta"),
                a("b255df58", "Žádost byla odeslána · Čeká na kontrolu"),
                a("b3f834c8", "Žádost byla zařazena na čekací listinu"),
                a("i14be2c6", "Odhadovaný získaný příjem"),
                a("fd74390a", "ID tvůrce ověřeno"),
                a("e8dc82e2", "Aktivní programy"),
                a("c12c5eb6", "Dostupné programy"),
                a("j53f5eb0", "Způsobilí tvůrci se mohou zaregistrovat k měsíčnímu předplatnému a sdílení výnosů z reklamy"),
                a("e9c1273a", "Způsobilí tvůrci se mohou zaregistrovat k měsíčnímu předplatnému a podílům z výnosů pro tvůrce."),
                a("jd176c82", "Výplaty nejsou ve vaší oblasti podporovány"),
                a("d6ff74ca", "Náš poskytovatel plateb bohužel zatím nepodporuje výplaty ve vaší zemi. Některé monetizační programy nejsou k dispozici."),
                a("e89cdac0", "Spravujte výplatní účet"),
                a("dd7a54b4", "Nastavení účtu Stripe"),
                a("jff3ab68", "Ověření totožnosti"),
                a("j2876824", "Ověřte svou identitu"),
                a("ebd06fb0", "Průkaz totožnosti odeslán"),
                a("f65b960c", "Kontrolujeme váš úřední průkaz totožnosti pro program tvůrce."),
                a("i4a1e936", "Vyplacení finanční odměny vyžaduje propojení nebo vytvoření nového účtu Stripe"),
                a("f5931b6a", "Ověření identity je vyžadováno, chcete-li se zapojit do programu tvůrce. Pokud jste průkaz totožnosti pro program tvůrce odeslali už dříve, nemusíte ho odesílat znovu."),
                a("c8798a95", "zde"),
                a("d809ac49", "zde"),
                a("bbe09d38", "Aplikace byla přijata · Čeká se na konfiguraci v obchodech s aplikacemi"),
                a("efbc5066", "Čeká se na ověření identity"),
                a("hc7631da", "Nedokončili jste nastavení svého účtu Stripe"),
                a("h72d71a2", "Splňujete podmínky"),
                a("e12b0b16", "Zatím není způsobilé"),
                a("a1e57106", "Nedokončeno"),
                a("i51b4e22", "Odmítnuto"),
                a("h5bd7160", "Tento účet nesplňuje podmínky pro ověření ID."),
                a("e32040c4", "Abyste mohli dostávat výplaty, musíte dokončit ověření identity."),
                a("j8769b42", "Kontrolujeme váš úřední průkaz totožnosti."),
                a("be955554", "Podíly z výnosů pro tvůrce"),
                a("b03a3d62", "Podíl na příjmech z reklamy"),
                a("cbbe29c2", "Jste na cestě k výplatám"),
                a("g97a2d6c", "Další informace"),
                a("f30774ea", "Zde najdete další informace o zásadách a programech monetizace."),
                a("aea0b11a", "Vydělávejte na X tím, že necháte kohokoliv odebírat váš obsah za celý měsíc."),
                a("bce47f48", "Vydělávejte na živobytí na síti X díky zapojení u vašich postů."),
                a("h7a68080", "Získejte příjem z reklam zobrazených v odpovědích na vaše příspěvky."),
                a("eefd091e", "Vyžadováno ověření identity"),
                a("cd616a5a", "Chcete-li se účastnit programu tvůrců, je vyžadováno ověření identity."),
                a("cce8c40a", "Ověřit identitu"),
                a("ja73ebac", "Příjem"),
                a("h16eeb42", "Spravovat"),
                a("bc43a32e", "Poslední aktivita"),
                a("i4c3b046", "Aktuálně nemáte žádné nové mince."),
                a("ca516a66", "Zobrazit veškerou aktivitu"),
                a("ee9ea930", "Diamanty"),
                a("cf3b535e", "Diamanty sbíráte tím, že dostáváte mince za vyhovující posty. Peníze vydělané za diamanty se vám přičítají k odhadovanému výdělku."),
                a("fbb7764b", function (e) {
                    return e.count + " Mince";
                }),
                a("e70a07b2", "Anonymní"),
                a("c76972f0", "Od poslední výplaty"),
                a("c219a552", "Kdykoli"),
                a("f3ce76c0", "Potřebujete další pomoc?"),
                a("i8982e7e", "Pokud máte dotazy, navštivte naše centrum nápovědy nebo nás kontaktujte."),
                a("fbbfe8aa", "Deaktivovat program Mince"),
                a("e4f29140", "Deaktivováním budete vyřazeni z programu Mince a nebudete je již moct získávat."),
                a("e58e85d2", "Pokračovat k deaktivaci"),
                a("be8e87b4", "Deaktivovat program Mince?"),
                a("bee26fa8", "Ano, deaktivovat"),
                a("f0145c9a", "Mince jsou nyní deaktivovány"),
                a("a22f6808", "Veškerá aktivita"),
                a("g1b8020c", "Posledních 30 dnů"),
                a("jb13b840", "Za celou dobu"),
                a("b4f24360", "Za posledních 30 dnů nemáte žádné nové mince."),
                a("d59dbf8a", "Přehled"),
                a("g652fc4c", "Za tento měsíc nemáte žádnou historii výplat."),
                a("d55e017a", "Tento měsíc"),
                a("f883322d", function (e) {
                    return "ID transakce " + e.transactionId;
                }),
                a("d978f43e", "Nová Předplatná"),
                a("d113fc10", "Momentálně nemáte žádná nová Předplatná."),
                a("h7a41c02", "Obnovená předplatná"),
                a("eedf2eaa", "Momentálně nemáte žádná obnovení."),
                a("d93308d8", "Zobrazit všechny transakce"),
                a("a23e724a", "Tento účet není dostupný."),
                a("a384fda0", "Přehled předplatného"),
                a("i4313618", "Představte se a popište, co můžou lidé očekávat, když vás budou super-sledovat"),
                a("c0348964", "Úvod"),
                a("g522fd30", "Výhody pro odběratele"),
                a("e85471c6", "Odznak odběratele"),
                a("fd75ca92", "Získáte veřejný odznak odběratele, díky kterému si vás lidé snadněji všimnou, budou s vámi chatovat a spojí se s vámi."),
                a("ia9c37c4", "Ceny"),
                a("f5be83b2", "Připojit se ke komunitě"),
                a("e4ee8c6a", "Podělte se o své nápady, načerpejte inspiraci a diskutujte s ostatními tvůrci v komunitě pro tvůrce Předplatných."),
                a("i3a90dee", "Deaktivovat Předplatná"),
                a("e261e6e6", "Pokud se rozhodnete pro deaktivaci, budete odebráni z programu Předplatná a přijdete o všechny své Předplatitele."),
                a("ca5ca5ee", "Zobrazit náhled"),
                a("a329ce88", "Přidejte popis..."),
                a("f0c99eff", function (e) {
                    return "– @" + e.screenName;
                }),
                a("g40b2b30", "Umožnit náhledy postu"),
                a("c1521804", "Lidem bez předplatného se zobrazí náhledy vašich postů určených pro odběratele."),
                a("jd0f1ac0", "Deaktivovat Předplatná?"),
                a("c6c27fc8", "Deaktivace Předplatných je trvalá. Budete odebráni z programu Předplatná. Pokud se do něj budete chtít vrátit, budete muset poslat novou žádost."),
                a("f82a23ec", "Program Předplatná je teď deaktivován"),
                a("a4c6e458", "Nastavili jste poplatek za měsíční Předplatné ve výši:"),
                a("be54a313", function (e) {
                    return e.price + "/měs.";
                }),
                a("hadd463a", "Žádost o změnu ceny"),
                a("b0728b5c", "Změna ceny za zrušení"),
                a("aea9f79c", "Máte čekající změnu ceny na:"),
                a("c701e5cc", "Změny, které jste provedli, nebudou uloženy."),
                a("a649778c", "Pokračovat v úpravách"),
                a("d1a683b8", "O tvůrcích Předplatných"),
                a("iba08a94", "Je vše v pořádku?"),
                a("a5f55bfa", "Toto uvidí potenciální Předplatitelé, když navštíví vaši stránku. Můžete se sem kdykoli vrátit a popisy aktualizovat."),
                a("b600eb88", "Zviditelněte se a najděte své lidi"),
                a("da48ebf6", "Zaregistrujte se a získejte bonusový obsah"),
                a("f324fb6c", "Předplatné"),
                a("c654a3aa", "Tento post si můžou zobrazit jen předplatitelé."),
                a("d409ce3c", "Podpořte své oblíbené lidi na platformě X a získejte bonusový obsah a další výhody."),
                a("a4ed9072", "Přidejte úvod..."),
                a("af5b098e", "Výhody Předplatných"),
                a("gf32cca2", "Popište výhody, které nabízíte"),
                a("j8ba99b4", "Nabídněte lidem ochutnávku toho, co jim každý měsíc nabídnete, stručným přehledem bonusového obsahu, který budete sdílet."),
                a("j679dcda", "Zobrazit příklady"),
                a("j325331a", "Věnujte chvilku pozdravu"),
                a("e18e8da8", "Udělejte dobrý první dojem krátkou úvodní zprávou pro své potenciální Předplatitele."),
                a("fce14f56", "Nová cena"),
                a("b0c58272", "Vyberte novou měsíční cenu. Zpracování změn cen trvá 3 až 7 pracovních dní. Zvýšení cen může vyžadovat, aby se stávající odběratelé přihlásili."),
                a("d5737f0e", "Měsíční předplatné"),
                a("edc014fb", "Další informace"),
                a("h810143c", "Podrobnosti"),
                a("ga57b610", "Datum nákupu"),
                a("h3b68828", "Typ nákupu"),
                a("cc2aa67a", "Nákupní platforma"),
                a("b313bb24", "Platba"),
                a("e5188502", "Veškeré prodeje jsou konečné."),
                a("bf364d62", "Všechny transakce"),
                a("ed3efef0", "Za posledních 30 dnů nemáte žádná nová Předplatná."),
                a("b5f9ec14", "Za posledních 30 dnů nemáte žádná obnovení."),
                a("d8eed490", "Spravujte svůj veřejný vzhled profilu."),
                a("e26dbcd0", "Skrýt vaše předplatná pro tvůrce"),
                a("aea7dda8", "Seznam předplatných pro tvůrce na vašem profilu bude viditelný pouze vám."),
                a("j3d2cfc4", "Umožnit sledujícím zobrazit, které Prostory posloucháte"),
                a("d9588ae6", "Pamatujte, že i když toto nastavení nezapnete, budete pro všechny viditelní v okamžiku, kdy přejdete do Prostoru. Vaši sledující vždy uvidí, ve kterých Prostorech jste hostiteli, spoluhostiteli nebo mluvčími."),
                a("i84c5de8", "Tvůrci budou moct brzy podávat žádosti"),
                a("b8922f7e", "Zůstaňte ve střehu, už brzy budete moct požádat o zapojení do programu Předplatná."),
                a("ad588be6", "Jste způsobilí!"),
                a("f6443bd2", "Dobrá zpráva – splňujete naše požadavky na způsobilost k účasti v programu Předplatná. Jste připravení podat přihlášku?"),
                a("a3a20a10", "Zkuste to znovu později"),
                a("b8d29e4a", "Momentálně bohužel nesplňujete naše požadavky na způsobilost k účasti v programu Předplatná."),
                a("d92c1d0a", "Pokračovat do aplikace"),
                a("fde27650", "podmínky pro Předplatná"),
                a("c5f89b06", "Získejte ověření přihlášením k odběru předplatného Premium"),
                a("ff9f4475", function (e) {
                    return "Ověření sledující: " + e.minFollowersCount;
                }),
                a("b747ce3a", "Aktivní během posledních 30 dnů"),
                a("c27f57ac", "Mít alespoň 18 let"),
                a("h63d2973", function (e) {
                    return e.count + " organických zobrazení za poslední 3 měsíce";
                }),
                a("ef606fca", "Placená předplatná pro vaše nejzapálenější sledující"),
                a("e533715e", "Ověřit požadavky"),
                a("d8671da2", "Vydělávejte na platformě X"),
                a("d126a504", "Nabídněte svým oblíbeným sledujícím něco málo navíc a vydělávejte peníze každý měsíc. "),
                a("d08d0bb2", "Bonusový obsah"),
                a("ef29d2c2", "Podělte se o své aktuální myšlenky, nápady a názory prostřednictvím extra postů a osobních odpovědí."),
                a("if12af7c", "Nastavení předplatných"),
                a("cc4c1a14", "Nastavení ceny"),
                a("e1453e45", "Další informace"),
                a("aa7e35ee", "Váš účet nebyl vybrán"),
                a("c984cc62", "Váš účet jsme tentokrát nevybrali. Sledujte aktuální informace o budoucích příležitostech k účasti."),
                a("gd115e64", "Přihlásit se do programu Předplatná"),
                a("a9f08d5c", "Vaše odpovědi na níže uvedené otázky slouží k naší kontrole a nebudou zobrazeny ve vašem profilu."),
                a("c3f8d650", "Popište svůj obsah"),
                a("j89dd344", "Uveďte příklad obsahu, který bude součástí vašeho předplatného, čím konkrétnější, tím lepší."),
                a("d19cc490", "Přidejte příklad obsahu"),
                a("c737c1b2", "Povězte nám o vaší zkušenosti"),
                a("f98e5fd4", "Vytváříte placený obsah na jiných platformách? Proč si myslíte, že se uživatelé přihlásí k odběru?"),
                a("c41b01be", "Přidejte propagaci"),
                a("e2aad0fe", "Nebudu zveřejňovat grafický obsah nebo obsah pro dospělé odběratele"),
                a("d1b983ef", function (e) {
                    return "Musí mít alespoň " + e.count + " znaků.";
                }),
                a("d3d6c52c", "Vaše žádost byla odeslána"),
                a("cb27c0ba", "Potvrdili jsme vaši cenu. Vaše přihláška bude zkontrolována a pokud bude schválena, zašleme vám oznámení, jakmile bude aktivní."),
                a("j274e6aa", "Jste na čekací listině"),
                a("j006be54", "Naše testovací skupina pro Předplatná se rychle zaplnila, ale přidali jsme vás na čekací listinu. Budeme vás informovat, jakmile budou k dispozici další místa."),
                a("d5cb1114", "Začínáme s Předplatnými"),
                a("j2f622ec", "Vybrali jsme vás do naší testovací skupiny! Zadejte teď podrobnosti o svém Předplatném a my vás budeme informovat, až ho budete moct začít nabízet."),
                a("e2cd7000", "Už to bude..."),
                a("b3629b92", "Stačí už jen pár kroků a nastavení vašeho Předplatného bude dokončené."),
                a("f4619a62", "Přijmout a pokračovat"),
                a("c5625f84", "Popište výhody svého Předplatného"),
                a("c7289544", "Nastavte cenu Předplatného"),
                a("aaf68c58", "Potvrďte své údaje pro výplaty"),
                a("b8a69fa0", "podmínky pro Předplatná"),
                a("ad4a92a2", "Odznak"),
                a("d5aa8de0", "Dejte svým Předplatitelům odznáčky"),
                a("j0bbda92", "Zde nemůžete nic měnit ani upravovat. Všichni vaši Předplatitelé automaticky získají veřejný odznak, když si pořídí Předplatné."),
                a("e18b7a72", "Kontrola"),
                a("be76dc34", "Přidat popis"),
                a("ef5406e4", "Přidejte úvod"),
                a("ea8a3d2e", "Nastavení cen"),
                a("f77bb179", function (e) {
                    return "Potvrďte výběr ceny " + e.price;
                }),
                a("g2a6f160", "Zkontrolujte a potvrďte cenu Předplatného. Po nastavení se sem nebude možné vrátit a cenu nepůjde změnit."),
                a("g767d1c9", "Poznámka: Během testovacího období nelze cenu předplatného změnit"),
                a("df057690", "Zvolte, kolik budou vaši Předplatitelé platit"),
                a("g5923869", function (e) {
                    return e.price + " za měsíc";
                }),
                a("f025ab3a", "Vybudujte si větší a širší základnu sledujících"),
                a("c962df0e", "Nepravidelné zveřejňování příspěvků a interakce s Předplatiteli"),
                a("ib075804", "Rozšiřte svou základnu sledujících a maximalizujte příjmy"),
                a("fc04f3a6", "Občasné zveřejňování příspěvků a interakce s Předplatiteli"),
                a("c246656e", "Vytvořte si věrnou základnu sledujících"),
                a("h0c5405c", "Pravidelné zveřejňování příspěvků a interakce s Předplatiteli"),
                a("f2d2153d", function (e) {
                    return "Většina tvůrců si účtuje " + e.price + ", cenu si ale můžete zvolit libovolnou.";
                }),
                a("f1cb36b8", "Nastavení výplat"),
                a("e20f6662", "A je to!"),
                a("g88e146c", "Your account is pending"),
                a("dfe973a6", "Thanks for providing your payout details. You’ll receive a notification with next steps as soon as Stripe has reviewed your information."),
                a("ja884230", "Nastavte si údaje pro výplaty"),
                a("a3f6a966", "Připojit účet Stripe"),
                a("cb031e44", "Budete přesměrování do Stripe za účelem připojení svého účtu. Pokud již máte účet Stripe, který byste chtěli použít, pak jakmile vás Stripe vyzve k zadání e-mailu, zadejte e-mailovou adresu spojenou s tímto účtem. Poznámka: váš e-mail na platformě Stripe může být jiný než váš účet pro platformu X."),
                a("ebfb897c", "Příklady"),
                a("dc4feb1a", "Nevíte, co říct?"),
                a("h9b9d486", "Druh obsahu, který Předplatitelům nabídnete, je zcela na vás. Tady je několik příkladů, které vám pomůžou začít."),
                a("ic130fd6", "Získáte zajímavý obsah ze zákulisí, první informace o mých knihách a dalších projektech a každý měsíc si zahrajeme hru „ptejte se mě, na co chcete“."),
                a("dd913e24", "Čekají vás mé provokativní komentáře, improvizovaná zamyšlení a extra osobní obsah."),
                a("b737ee66", "Připravte se na VIP zážitky. Pro představu: obsah jen pro Předplatitele, jako jsou hlasování, videa a akční nabídky."),
                a("a0bb2076", "Úvod byl měl být krátký a stručný. Obsah budete moci popsat později. Zde je několik příkladů, které vám pomohou začít."),
                a("fe076612", "Vítejte na mé stránce Předplatných! Je skvělé, že jste tady. Děkuji, že mi umožňujete dělat to, co mě baví."),
                a("g7f66daa", "Jak se máte? Děkuji, že se zajímáte o mé Předplatné. Myslím, že se vám moje nabídka bude líbit."),
                a("hbe4f99e", "Ahoj! Nemůžu se dočkat, až se s vámi podělím o tajný obsah a ještě lépe vás poznám :)"),
                a("fb278c82", "K čemu slouží tento náhled?"),
                a("j6cab6ec", "Toto se lidem zobrazí předtím, než si pořídí vaše Předplatné. Upravujte a vylepšujte své popisy, dokud s nimi nebudete úplně spokojení."),
                a("i22beaa4", "Sdílení dat"),
                a("e110a46c", "Smazat historii konverzace"),
                a("ebc4fda0", "Chystáte se smazat historii konverzace s Grokem. K těmto konverzacím již nebudete mít přístup."),
                a("c90fe716", "Chcete smazat své konverzace?"),
                a("a8d516a4", "X může sdílet s xAI vaše veřejná data X a také vaše uživatelské interakce, vstupy a výsledky s funkcí Grok na X, abychom trénovali a dolaďovali funkci Grok a další modely umělé inteligence vyvinuté xAI. To nám pomáhá neustále zlepšovat vaši uživatelskou zkušenost."),
                a("a127886c", "Umožněte funkci Grok zapamatovat si vaši historii konverzace"),
                a("f49b39b8", "Umožněte funkci Grok zapamatovat si podrobnosti z vašich předchozích konverzací. Jednotlivé konverzace můžete odstranit a zapomenout na související podrobnosti."),
                a("b7de9ad2", "Povolit službě X přizpůsobit zkušenost s funkcí Grok"),
                a("ed141096", "Umožněte, aby vaše data na X a také vaše interakce, vstupy a výsledky s funkcí Grok byly použity k přizpůsobení vaší zkušenosti s funkcí Grok. Platforma X může sdílet s xAI vaše data na X a také vaše uživatelské interakce, zadání a výsledky funkce Grok, abychom přizpůsobili práci funkce Grok a dalších modelů umělé inteligence vyvinuté xAI. To nám pomáhá neustále zlepšovat vaši uživatelskou zkušenost. "),
                a("ecdbece0", "Byli jste úspěšně zařazeni do programu Mince."),
                a("db3f0bbe", "Pomáháme tvůrcům vydělávat peníze díky jejich obsahu."),
                a("a1f40cf8", "Souhlasím"),
                a("d604fb32", "podmínky programu Tvůrce"),
                a("d520d188", "Dostávejte mince"),
                a("ea770766", "Mince jsou virtuálním zbožím, které lze přijímat u způsobilých postů. Nasbírané mince se hromadí ve formě diamantů, za které lze získat hotovost."),
                a("d27f5ac6", "Pasivní příjem"),
                a("h1d66df0", "Jednoduše vydělávejte peníze zveřejňováním skvělého obsahu na platformě X. Vaši sledující vás nyní mohou odměnit tak, že vám dají mince."),
                a("f85fb0a2", "Spojte se se svou cílovou skupinou"),
                a("d1433e24", "Mince jsou pro fanoušky zábavným způsobem, jak vás odměnit za tvorbu obsahu, který je nejvíce baví. Pro vás je to příležitost, jak se lépe spojit se svými sledujícími a fanoušky."),
                a("e6ba42de", "Sdílení výnosů z reklamy"),
                a("ebc16756", "Podíl z výnosů pro tvůrce"),
                a("da4cd6fa", "Bohužel ještě nemáte nárok na sdílení výnosů z reklam. Abyste se mohli zúčastnit, musíte splnit níže uvedené požadavky:"),
                a("b2961492", "Bohužel ještě nemáte nárok na podíly z výnosů pro tvůrce. Abyste se mohli zúčastnit, musíte splnit níže uvedené požadavky:"),
                a("d3789528", "O podílu na příjmech z reklamy"),
                a("aa0ff456", "O podílu na příjmech pro tvůrce"),
                a("bf214f48", "OK"),
                a("b2b4d592", "Přihlaste se k odběru Premium nebo Ověřených organizací"),
                a("fbb03ba6", "500 sledujících Premium"),
                a("hb4c5169", function (e) {
                    return "Mějte alespoň " + e.impression_number + " mil. zobrazení vašich postů během posledních 3 měsíců";
                }),
                a("f91685ba", "Jste automaticky způsobilí k výplatě za vaše příspěvky!"),
                a("a9f0e0fa", "Jako předplatitel Premium nebo Ověřené organizace jste automaticky způsobilí ke sdílení výnosů z reklamy. Vaše výplata bude založená na počtu ověřených zobrazení reklam zobrazených v odpovědích na vaše posty."),
                a("c694e3e4", "Jako odběratel s plánem Premium nebo odběratel Ověřených organizací máte automaticky nárok na sdílení příjmů pro tvůrce."),
                a("acd1a1be", "Nastavte podrobnosti pro vaši výplatu ještě dnes a získejte výplatu zítra."),
                a("f7e11f70", "Připojte se a ověřte ID"),
                a("c8169274", "Při ukládání aplikace došlo k problému. Zkuste to znovu později."),
                a("c3f93665", "Podmínkami sdílení výnosů pro tvůrce"),
                a("a249ce04", "Podmínkami sdílení výnosů z reklamy"),
                a("d085a144", "Řídicí panel výdělku tvůrce"),
                a("a5204850", "Celkový příjem"),
                a("ada650cf", function (e) {
                    return "Platební období: " + e.fromDate + " - " + e.toDate;
                }),
                a("aa732c0a", "Sdílení příjmů z reklam ve videu"),
                a("g88c1108", "Informace o sdílení příjmů z reklam ve videu"),
                a("d4bb7e9c", "Podmínky sdílení příjmů z reklam ve videu"),
                a("dc535dbe", "Vydělávejte se svým obsahem na X přihlášením se do našeho programu sdílení výnosů z reklam před videem."),
                a("eb6d9270", "Nechte si platit za svůj obsah"),
                a("a778472e", "Podrobnosti:"),
                a("bde8446e", "Pokud se chcete přihlásit do programu sdílení příjmů z reklam, vyberte možnost „Souhlasit a odeslat“."),
                a("a415fd3a", "Souhlasit a odeslat"),
                a("fbba9725", "pravidla X"),
                a("f3dd8c4a", "podmínky sdílení příjmů z reklam a standardy monetizace pro tvůrce"),
                a("hd885ae0", "Zobrazit váš dopad"),
                a("je4ccd3a", "Centrum nápovědy pro články bez reklam"),
                a("i6cb493e", "Spravujte, jak se budou vaše partnerství zobrazovat"),
                a("e4fde082", "Nastavte si čas na zrušení odeslaných postů a zvolte, které typy postů chcete mít možnost zrušit."),
                a("dcfc6540", "Původní posty"),
                a("be077e8c", "Vlákna"),
                a("f3429f2c", "Hlasování"),
                a("i647ba8a", "Období pro zrušení postu"),
                a("d195528e", "Můžete vybrat, u kterých typů postů chcete mít možnost je před zveřejněním zrušit, a určit, jak dlouhý čas budete mít na zrušení."),
                a("bcf3a9e6", "Spravujte nastavení, které pomůže omezit nevítané odpovědi."),
                a("c048fd3a", "Filtrujte nevítané odpovědi"),
                a("dab7dac4", "Odpovědi na vaše posty s pravděpodobně nevhodnými nebo urážlivými výrazy se budou filtrovat a zobrazí se zde. Ostatní uživatelé budou dané odpovědi stále moct číst."),
                a("c4c53b86", "S identifikací takovýchto odpovědí nám pomáhají technologie, takže i když se neustále zlepšujeme, nejsme zcela stoprocentní."),
                a("dca3d2ee", "Vypnout filtr odpovědí?"),
                a("fe440ff8", "Filtrované odpovědi nebudou u vašich postů obnoveny."),
                a("cedbb01c", "Právní informace"),
                a("b4f917d0", "Různé"),
                a("bdfa2b8c", "Další zdroje"),
                a("b8692262", "Prohlédněte si další místa s užitečnými informacemi a zjistěte více o produktech a službách X."),
                a("c0398892", "Poznámky k verzi"),
                a("b833bcde", "Spravujte aspekty vašeho uživatelského prostředí na X, například omezení barevného kontrastu a pohyblivé grafiky. Tato nastavení budou platit pro všechny účty na platformě X v tomto prohlížeči."),
                a("d5b646be", "Pohled"),
                a("jfe6a3a0", "Pohyb"),
                a("e8c72272", "Zvýšit kontrast barev"),
                a("dba2cdd2", "Zlepšuje čitelnost zvýšením kontrastu mezi barvou textu a barvou pozadí."),
                a("d070244e", "Omezit pohyb"),
                a("icfa5e8c", "Omezuje množství animací v aplikaci, včetně živého počítadla zapojení."),
                a("ae41b002", "Omezuje množství animací v aplikaci, včetně živého počítadla zapojení. Váš systém momentálně snižuje množství pohybu. Pokud chcete pohyb znovu zapnout, nejprve vypněte funkci jeho omezení."),
                a("h9d1cfae", "Přijímat připomenutí popisů obrázků"),
                a("c878e9f8", "Povolí připomenutí, abyste před odesláním postu přidali popisy obrázků."),
                a("bbd1fc7c", "Další informace o přístupnosti na platformě X"),
                a("ac865cf0", "Přístupnost na platformě X"),
                a("d3a2bde8", "Zobrazte informace o svém účtu, stáhněte si archiv s vašimi údaji nebo zjistěte více o možnostech deaktivace účtu."),
                a("idca4742", "Zobrazte informace o svém účtu, například telefonní číslo a e-mailovou adresu."),
                a("b6ded35e", "Změňte si heslo."),
                a("cce24bf4", "Získejte přehled o typech informací ukládaných v souvislosti s vaším účtem."),
                a("i203df96", "Zjistěte, jak můžete svůj účet deaktivovat."),
                a("f70cd5ee", "Telefon"),
                a("ib6f1694", "Vytvoření účtu"),
                a("de323650", "Žena"),
                a("b6ab31be", "Muž"),
                a("h3290872", "Ověřeno"),
                a("hbd12156", "Požádat o ověření"),
                a("b7ec04f4", "Ano"),
                a("f70d5780", "Ano."),
                a("dc62d3c6", "Ne."),
                a("a67dbd0a", "Parodie, komentáře a účet fanoušků"),
                a("a3db727e", "Spravujte svou parodii, komentáře a účet fanoušků"),
                a("eacf1990", "Přidejte si na profil datum narození."),
                a("a3bf1262", "Změňte si datum narození ve svém profilu."),
                a("h530db16", "Chráněné posty"),
                a("d6d80990", "Tyto informace se vztahují na váš prohlížeč nebo zařízení, zatímco jste odhlášení. Když jste přihlášeni, mohou se informace lišit."),
                a("i0d81ddb", "nastavení personalizace a údajů"),
                a("g2a9bd3e", "Štítky automatizovaných účtů"),
                a("dd9b3aae", "Co je automatizovaný účet?"),
                a("b80bdc40", "Automatizované účty jsou naprogramované tak, aby automaticky prováděly určité akce prostřednictvím rozhraní API X. Příkladem může být postování informací o aktuálním počasí v nějaké oblasti. Tyto účty vytvářejí a spravují uživatelé X."),
                a("a01ac9b6", "Štítky informují o tom, kdo je správcem automatizovaného účtu. Jakmile vlastník automatizovaného účtu připojí svůj spravující účet, bude se v profilu a postech automatizovaného účtu zobrazovat příslušný štítek."),
                a("b989e1fe", "Musím své automatizované účty označit štítkem?"),
                a("i2d599aa", "Jak mám svůj automatizovaný účet označit?"),
                a("gd5bed72", "Vytvořte spravující účet"),
                a("g6d44432", "Spravující účet je člověkem řízený účet, který je zodpovědný za automatizovaný účet."),
                a("e20a69e8", "Propojte svůj spravující a automatizovaný účet"),
                a("d2f88358", "Propojte své účty ze stránky Automatizace v nastaveních."),
                a("e427f632", "Váš účet byl označen štítkem"),
                a("a4d7cffa", "Jakmile budou účty propojené, bude automatizovaný účet označený štítkem."),
                a("a18d6a7d", "nová pravidla"),
                a("e9965c14", "častými dotazy ke štítkům automatizovaných účtů"),
                a("ee78c192", "Co je to účet PCF?"),
                a("c3f35e0c", "Účet PCF zobrazuje jinou osobu, skupinu nebo organizaci v jejich profilu, aby diskutovali, satirizovali nebo sdíleli informace o této entitě."),
                a("d019b5fa", "Musím svůj účet PCF označit štítkem?"),
                a("dd04f24e", "Ano. Štítek PCF zajišťuje, že lidé na platformě X nebudou zmateni vaším účtem a informuje je, že váš účet není přidružen k předmětu profilu. Pokud není označen štítkem, může váš účet porušovat zásady autenticity."),
                a("hb0f8bbc", "Jak označím štítkem svůj účet PCF?"),
                a("g69acc5c", "Stačí kliknout na „Rozumím“ a my vás přeneseme do nastavení vašeho profilu, kde můžete nastavit štítek účtu!"),
                a("d313d431", "zásady autenticity"),
                a("a3f22d8e", "Zvolte typy oznámení o vašich aktivitách, zájmech a doporučeních, které si přejete dostávat."),
                a("bc20979a", "Společnost X a její partneři využívají soubory cookie k tomu, aby vám poskytovali lepší, bezpečnější a rychlejší služby, a aby podporovali vaše podnikání. Některé služby jsou nezbytné k tomu, abyste vůbec mohli naše služby využívat, ke zlepšení našich služeb a k tomu, aby služby fungovaly správně."),
                a("ge06dadc", "Umožněte platformě X a jejím partnerům používat soubory cookie a poskytovat vám tak reklamy a komunikaci přizpůsobenou tak, aby to vyhovovalo vašim zájmům."),
                a("he20de3a", "Nepovoluji platformě X využívat soubory cookie ke sběru dodatečných údajů za účelem personalizované reklamy a komunikace."),
                a("g0ec0bec", "Deaktivován"),
                a("g89f4614", "Váš účet byl deaktivován."),
                a("f1768324", "Mějte kontrolu nad tím, jak pro vás platforma X personalizuje obsah a shromažďuje a sdílí určité údaje."),
                a("ja94f34e", "Toto nastavení se vztahuje na tento prohlížeč nebo toto zařízení, když jste odhlášeni. Když jste přihlášeni, nastavení se nepoužije."),
                a("bd73f7e6", "Touto volbou zapnete nebo vypnete všechna nastavení na této stránce."),
                a("ddbc3288", "Údaje"),
                a("ae5339a0", "Zobrazit vaše údaje na X"),
                a("b934e0ea", "Vypnout nastavení personalizace a údajů?"),
                a("i0317e0e", "Po vypnutí mohou být zobrazované posty a reklamy méně relevantní."),
                a("a148acba", "Vypnout"),
                a("aa023546", "Personalizace na základě navštívených míst"),
                a("ced77194", "Povolit použití informací o zobrazování obsahu platformy X na webu"),
                a("fe1fc83e", "S vaším účtem jsou spojovány tyto věkové skupiny."),
                a("bf9c74d0", "Nepoužívat tyto věkové skupiny k personalizaci."),
                a("cf0daa24", "Shromáždit tyto informace může chvíli trvat. Zkuste to znovu později."),
                a("ea522535", "Další informace"),
                a("hf5ca8f8", "profil"),
                a("d9cbe351", function (e) {
                    return e.count + " login přihlášení";
                }),
                a("de90b04a", "Místa, která jste navštívili"),
                a("cbd2ef59", function (e) {
                    return e.count + " poloh" + n(e.count, "y", "y", "a", "");
                }),
                a("a4441bb8", "Zájmy z platformy X"),
                a("e1c6b2d6", "Na míru přizpůsobený okruh diváků"),
                a("ed19d10d", function (e) {
                    return e.audienceCount + " cílov" + n(e.audienceCount, "é skupiny", "ých skupin", "á skupina", "ých skupin") + " z " + e.advertiserCount + " inzerent" + n(e.advertiserCount, "ů", "ů", "a", "ů");
                }),
                a("f00d0d03", function (e) {
                    return e.count + " záj" + n(e.count, "my", "my", "em", "mů");
                }),
                a("hf9c2caa", "Požádat o zaslání seznamu inzerentů?"),
                a("c29b7971", function (e) {
                    return "Tato zpráva bude odeslána na adresu " + e.primaryEmail + ".";
                }),
                a("b9e1cf02", "Žádost"),
                a("a8276fac", "Požádat o zaslání seznamu inzerentů"),
                a("g7912a84", "Rozumím. Jakmile bude připraven, seznam vám pošleme e-mailem."),
                a("d6104de0", "Zobrazování reklam na základě vašich zájmů můžete vypnout v nastavení Personalizace a údaje. Vypnutí funkce bude mít vliv na reklamy, které budete na platformě X vídat, nebudete však odebráni z inzerentských okruhů uživatelů."),
                a("ed8c03f5", "Další informace"),
                a("e1a4daac", function (e) {
                    return e.num_audiences + " okruhů uživatelů";
                }),
                a("acb25e32", function (e) {
                    return e.num_advertisers + " inzerentů";
                }),
                a("j4fa776e", "Telefony"),
                a("i7acdb36", "Tablety"),
                a("c112dfc8", "Stolní počítač"),
                a("jd8607ba", "Aktivováno dne"),
                a("ea4f6c9e", "Prohlížeče"),
                a("d750b93f", function (e) {
                    return e.count + " prohlížeč" + n(e.count, "e", "ů", "", "ů");
                }),
                a("a9783602", "Mobilní zařízení"),
                a("j043aa31", function (e) {
                    return e.count + " mobilní" + n(e.count, "", "ch", "", "ch") + " zařízení";
                }),
                a("ae415fd2", "Toto nastavení je vypnuto."),
                a("a90be7b4", "E-mailové adresy"),
                a("c0f6f911", "Aktivita mimo platformu X"),
                a("adaafb3f", "Odvozená identita"),
                a("f0f72665", "Odvozená identita"),
                a("d33b4e5b", "Aktivita mimo platformu X"),
                a("c4668d4f", "Aktivita mimo platformu X"),
                a("df3e137b", "Další informace"),
                a("d1597ccb", "Další informace"),
                a("c1b03a07", "Další informace"),
                a("b056d9dc", "Toto je hlavní jazyk nastavený pro váš účet."),
                a("h68bc23c", "K personalizaci vašeho uživatelského prostředí jsou použity tyto další jazyky."),
                a("fbf0e61e", "Pokud jste pohlaví ještě nepřidali sami, toto je pohlaví, které odpovídá informacím uvedeným v profilu a aktivitě účtu. Tato informace není veřejně zobrazena."),
                a("b4568a3a", "Přidejte pohlaví"),
                a("c0be743e", "Pohlaví aktualizováno"),
                a("c5abae66", "Toto je pohlaví, které platforma X spojuje s vaším účtem."),
                a("cdb0d3e6", "Nepoužívat toto pohlaví k personalizaci."),
                a("j31a1aa0", "Toto jsou místa, která platforma X používá k zobrazení relevantnějšího obsahu. Pokud funkci „Personalizace na základě navštívených míst“ vypnete, žádná místa tu neuvidíte."),
                a("ddefdd1c", "Odebrat vámi navštívená místa?"),
                a("hea740ac", "Tento krok bude chvíli trvat a už ho nelze vrátit zpět."),
                a("a26e0d52", "Rozumím. Tato místa budou odstraněna."),
                a("he447966", "Aktuálně se nenašla žádná místa."),
                a("b9d98dec", "nastavení polohy"),
                a("e27e4fce", "Neznámá poloha"),
                a("ib55eb6b", "kartu Připojené aplikace"),
                a("e5a4a539", "Další informace"),
                a("gc8f2e14", "Zobrazování reklam na základě zájmů můžete vypnout v nastavení Personalizace a údaje."),
                a("e6dbe66b", "Další informace"),
                a("d3310e49", function (e) {
                    return "Soubor se všemi informacemi souvisejícími s vaším účtem bude odeslán na e-mailovou adresu " + e.primaryEmail + ".";
                }),
                a("ib03e8c8", "Chcete soubor se všemi informacemi souvisejícími s vaším účtem stáhnout do tohoto zařízení?"),
                a("g49741e8", "Stáhnout"),
                a("dc370a0c", "Rozumím. Jakmile budou připraveny, vaše údaje vám pošleme e-mailem."),
                a("c07b4316", "Zájem"),
                a("e97196fe", "Znalost"),
                a("ja0f971c", "Tohle je výběr zájmů, které odpovídají vaší aktivitě, informacím na vašem profilu a zájmům, které sledujete. Zájmy používáme k personalizaci vašeho uživatelského zážitku napříč platformou X včetně vám zobrazovaných reklam. Pokud se vám některé z nich nezdají, můžete výběr upravit. Promítnutí provedených změn může chvíli trvat."),
                a("gd1ce494", "Domníváme se, že jste známí v souvislosti s níže uvedenými zájmy. Ty se používají pro zobrazení vašeho obsahu lidem, které tyto oblasti zajímají. Pokud se vám něco nezdá, můžete zájmy upravit. Provedené změny se nemusí projevit okamžitě."),
                a("a6b0b41a", "Stáhněte si aplikaci X pro mobilní telefon. Je zdarma."),
                a("h3ed510e", "Údaje na X"),
                a("b708417c", "Můžete požádat o soubor ZIP s archivem informací o vašem účtu, historie účtu, aplikací a zařízení, aktivit účtu, zájmů a dat o reklamách. Jakmile bude archiv s vašimi daty připraven ke stažení, zobrazí se vám v aplikaci oznámení."),
                a("jbf5843e", "Údaje na Periscope"),
                a("ea886c6e", "O archiv s vašimi údaji na Periscope můžete požádat přímo Periscope."),
                a("cdcc2ad4", "Stažení se nezdařilo."),
                a("dbeff87a", "Vyžádat si archiv"),
                a("hb02ed28", "Funkce stahování údajů momentálně není dostupná. Zkuste to znovu později."),
                a("c2254084", "Obdrželi jsme vaši žádost. V zájmu ochrany vašeho účtu může trvat 24 hodin nebo déle, než budou vaše data připravena."),
                a("f62d1d9e", "Váš archiv je připraven ke stažení a zobrazení pomocí prohlížeče v počítači. Nezapomeňte si tato data stáhnout, jinak za několik dní vyprší jejich platnost."),
                a("b221ca4c", "Až budou vaše data připravena ke stažení, dáme vám vědět"),
                a("db40dfcf", "vyplněním tohoto formuláře"),
                a("g1aced04", "Aplikace, zařízení a informace"),
                a("dbcf3a1a", "Přidat štítek profilu"),
                a("cbb2367c", "Zobrazí nebo skryje štítek parodického, komentátorského a fanouškovského účtu."),
                a("ge48855c", "Parodie"),
                a("hf019b20", "Tento štítek zajišťuje, že lidé na platformě X nebudou zmateni vaším účtem a budou vědět, že váš účet není skutečným účtem subjektu profilu."),
                a("d048571e", "Odebrat štítek parodie?"),
                a("g905134c", "Vypnutím tohoto štítku jej odeberete z vašeho profilu a všech minulých postů. Zkontrolujte, zda dodržujete zásady autenticity."),
                a("ce62c8c2", "Odstranit štítek profilu?"),
                a("a14080ce", "Aktualizovat štítek profilu?"),
                a("db6796f6", "Vypnutím tohoto štítku jej odeberete z vašeho profilu a všech minulých postů. Zkontrolujte, zda dodržujete zásady autenticity. Po aktualizaci budou další aktualizace na 48 hodin uzamčeny."),
                a("c700b6be", "Po aktualizaci budou další aktualizace na 48 hodin uzamčeny."),
                a("ff1739ae", "Štítek profilu"),
                a("h70c602c", "Štítek profilu nelze aktualizovat"),
                a("c818c60c", "Analýzy"),
                a("ha9f14b1", function (e) {
                    return "Váš Prostor začíná dne " + e.scheduleDate + " v " + e.scheduleTime;
                }),
                a("jafbef80", "Nemáte oprávnění k naplánování tohoto Prostoru"),
                a("e5d26f84", "Povolte si oznámení a neunikne vám žádná důležitá novinka. Platforma X dostane informace o nastavení země a jazyka ve vašem zařízení, aby vám mohla oznámení personalizovat."),
                a("f91f00ba", "Vytvořit klip"),
                a("f9b2d343", function (e) {
                    return e.count + " post" + n(e.count, "y", "y", "", "y");
                }),
                a("jcc8306e", "Požádat o možnost mluvit"),
                a("j41fd45a", "Žádost odeslána"),
                a("d5b2aae8", "Bylo odesláno příliš mnoho žádostí o možnost mluvit. Zkuste to prosím později."),
                a("b9945b98", "Žádost o promluvení se nezdařila. Připojte se znovu do prostoru a zkuste to znovu za několik sekund."),
                a("b2cc6a54", "Připojte se jako mluvčí"),
                a("fb6c0bbc", "Anonymní poslech"),
                a("e49a1f42", "Momentálně posloucháte anonymně a jste pro hostitele a ostatní účastníky neviditelní."),
                a("jf01aea4", "Abyste se mohli zúčastnit, musíte odejít a znovu se připojit jako viditelný posluchač."),
                a("cac1482a", "Reagovat"),
                a("fc0e94b7", function (e) {
                    return "Zareagovat pomocí emoji " + e.emoji;
                }),
                a("jf9f3e54", "Přeskočit o 15 sekund dopředu"),
                a("hdd1aba0", "Přeskočit o 15 sekund dozadu"),
                a("b89c5a50", "Pozastavit"),
                a("e674c120", "Zobrazit popisky"),
                a("f45bace4", "Skrýt popisky"),
                a("ce96f1dc", "Titulky nejsou k dispozici"),
                a("e07f6e7d", function (e) {
                    return "Rychlost " + e.rate + "x";
                }),
                a("jd04fc66", "Rychlost 0,5x"),
                a("f03848b8", "Normální"),
                a("j0e5c2ce", "Rychlost 1,5x"),
                a("b3f2318e", "Rychlost 2x"),
                a("f17bc95a", "Sdílet obrazovku"),
                a("b11a74b2", "Ukončit sdílení"),
                a("e51c2372", "Hosté"),
                a("b08821f4", "Zpět"),
                a("fed1388a", "Nastavení prostoru"),
                a("c63dd2cc", "Připojte se k této živé konverzaci se mnou!"),
                a("c958c6c8", "Postovat"),
                a("if23a252", "Sdílet přes..."),
                a("c0530da6", "Nabídka sdílení"),
                a("gb5851d7", function (e) {
                    return e.prefix + " " + e.url;
                }),
                a("j78ad1ca", "Ukončit Prostor?"),
                a("db684264", "Ano, ukončit"),
                a("je23178a", "Tímto se konverzace ukončí pro všechny."),
                a("c371fb9a", "Konec"),
                a("c0ce822e", "Nastavení mikrofonu"),
                a("a2bf8b8a", "Přepnout na poslech"),
                a("caa8d928", "Přepnout potlačení hluku"),
                a("b5d88f0c", "Pouze zaměstnanci"),
                a("c855ab8e", "Jen pro předplatitele"),
                a("ddeb0a3c", "Toto jsou členové komunity. Líbí se vám? Podívejte se."),
                a("e111f531", function (e) {
                    return e.count + " slyšel" + n(e.count, "i", "o", "", "o") + " živě či ze záznamu";
                });
            a("cbef820f", function (e) {
                return e.screenName + " repostoval stream!";
            }),
                a("e3275464", "Odeslat"),
                a("cededf2a", "Hostitel"),
                a("i2caef48", "Spoluhostitelé"),
                a("j245c654", "Mluvčí"),
                a("eda23a02", "Posluchači"),
                a("b90eb348", "Pozvat jako mluvčího"),
                a("d9a63e82", "Odebrat z mluvčích"),
                a("bd917b26", "Pozvat spoluhostitele"),
                a("d7357e7e", "Odebrat ze spoluhostitelů"),
                a("bf307fc0", "Zablokovat a odebrat"),
                a("ccf2f24e", "Hlášení"),
                a("i22835de", "Schválit"),
                a("cb59a0fe", "Zamítnout"),
                a("c2376960", "Žádosti o možnost mluvit"),
                a("aba7dcdd", function (e) {
                    return "Pozvat " + e.name;
                }),
                a("f5c7aaa7", function (e) {
                    return "hostitel" + n(e.count, "é", "é", "", "é");
                }),
                a("fc56c8b1", function (e) {
                    return "spoluhostitel" + n(e.count, "é", "é", "", "é");
                }),
                a("iba0f45d", function (e) {
                    return "mluvčí";
                }),
                a("dc066955", function (e) {
                    return "posluchač" + n(e.count, "i", "i", "", "i");
                }),
                a("b53ed9ab", function (e) {
                    return e.participantCount + " " + e.title + " · " + e.remainingCapacityCount + " otevřít míst" + n(e.remainingCapacityCount, "a", "", "o", "a");
                }),
                a("c3b5b829", function (e) {
                    return e.count + " žádost" + n(e.count, "i", "í", "", "í");
                }),
                a("fe7a1910", "Odeslat pozvánky"),
                a("ic3c757e", "Hledat uživatele"),
                a("cd133486", "Pozvat"),
                a("f2333850", "Sdílet s lidmi mimo platformu X"),
                a("cddb8097", "Další informace"),
                a("f77997b0", "Spoluhostitel"),
                a("i48f4ed8", "Mluvčí"),
                a("a77c8e02", "Posluchač"),
                a("bdfa93eb", function (e) {
                    return "Sdíleno uživatelem " + e.name;
                }),
                a("d8cc6ada", "Kdo může mluvit? Stávající mluvčí nebudou ovlivněni. Změny mohou trvat několik sekund."),
                a("e3a87142", "Pouze lidé, které pozvete jako mluvčí"),
                a("db3de1d2", "Připojte se jako mluvčí"),
                a("d7f4bc44", "Připojte se jako spoluhostitel"),
                a("edcf15e9", function (e) {
                    return "Žádosti (" + e.count + ")";
                }),
                a("h13957aa", "Ztišit prostor"),
                a("ge6372fa", "Zrušit ztišení prostoru"),
                a("i7a42e1c", "Pomozte spravovat tento prostor"),
                a("e0b8f112", "Byli jste pozváni jako spoluhostitel!"),
                a("ee12263c", "Spoluhostitel může v prostoru mluvit"),
                a("jee7002c", "Spoluhostitelé můžou pozvat, odebrat nebo ztlumit mluvčí"),
                a("i95225d2", "Spoluhostitel nemůže sdílet a odebrat posty"),
                a("f07137fa", "Spoluhostitelé můžou odebrat posluchače z prostoru"),
                a("j6cdf012", "Spoluhostitelé nemůžou zvát nebo odebírat další spoluhostitele"),
                a("c727d116", "Spoluhostitel nemůže ukončit prostor"),
                a("g69084b8", "Přijmout pozvánku jako spoluhostitel"),
                a("ee230734", "Zobrazit další možnosti"),
                a("ic8c615e", "Vyberte a odešlete rychlou odpověď."),
                a("a04077c4", "Vyberte 1 fotku, video nebo GIF."),
                a("c07367d8", "Médium není aktuálně podporováno pro šifrované zprávy"),
                a("af71ef68", "Hlas"),
                a("fc64990e", "Video"),
                a("ca0ce0e4", "Napište novou zprávu"),
                a("e18e6a63", function (e) {
                    return "Získejte X Premium a pošlete zprávu uživateli @" + e.username;
                }),
                a("c3752568", "Něco se pokazilo. Zkuste zprávu za minutku poslat ještě jednou."),
                a("f78aa3ea", "Některé z vašich zpráv teď nešlo poslat. Zkuste to prosím znovu později."),
                a("f9690dc0", "Litujeme. Tomuto účtu nemůžete poslat zprávu."),
                a("b1d35408", "Překročili jste denní limit počtu poslaných zpráv."),
                a("g539cca6", "Váš účet byl pozastaven a nemůže posílat zprávy."),
                a("bbac001a", "Tato zpráva je příliš dlouhá."),
                a("a1d2a68e", "Tento uživatel vás nesleduje. Zprávy můžete odesílat jen lidem, kteří vás sledují."),
                a("ec2bb9d4", "Post, který se pokoušíte odeslat, byl smazán."),
                a("hf383be4", "Účet, kterému se snažíte poslat zprávu, byl smazán."),
                a("c4fdbd16", "Uživatelům, které jste zablokovali, nemůžete posílat zprávy."),
                a("hf3e7e38", "Zprávu nebylo možné odeslat."),
                a("dd8272fd", function (e) {
                    return e.count + " nové nov" + n(e.count, "é zprávy", "ých zpráv", "á zpráva", "ých zpráv");
                }),
                a("e2cd3b7c", "Zvukový hovor ukončen"),
                a("f42f365a", "Videohovor ukončen"),
                a("a7570f2c", "Zmeškaný zvukový hovor"),
                a("jd9831b2", "Zmeškaný videohovor"),
                a("f0985268", "Zvukový hovor"),
                a("ca397a48", "Videohovor"),
                a("bb7e2143", function (e) {
                    return e.seconds + " s";
                }),
                a("c1d4ac84", "Změnili jste fotku skupiny."),
                a("abc7b032", "Fotka skupiny se změnila."),
                a("i263b294", "Zapojili jste se do konverzace."),
                a("i8d5e62b", function (e) {
                    return "" + e.count;
                }),
                a("f7204380", "Platnost tohoto zamyšlení Fleet vypršela"),
                a("d9de7b58", "Tato média jsou skrytá, protože jsou od někoho, koho nesledujete."),
                a("f2879f4e", "Tato zpráva může obsahovat grafická média."),
                a("b518221e", "Otevřít obrázek"),
                a("eeaa9f90", "Otevřít video"),
                a("g2b43664", "Otevřít GIF"),
                a("d99de549", function (e) {
                    return "Odpověď uživateli " + e.name;
                }),
                a("f5a07f7c", "Příloha"),
                a("fd079470", "Toto je spam."),
                a("c7a92dca", "Zpráva je OK."),
                a("fb3ccb56", "Z důvodu podezřelého obsahu jsme zprávu skryli."),
                a("c94b7d8a", "Přehrát hlasovou zprávu"),
                a("eb6f9582", "Pozastavit hlasovou zprávu"),
                a("b6b4142e", "Tento post je skrytý, protože je od někoho, koho nesledujete."),
                a("fda60d78", "Tento post může obsahovat grafická média."),
                a("b59a9004", "Otevřít post"),
                a("daf6bf02", "Změnit nastavení"),
                a("ba60339a", "Smazat pro vás"),
                a("eb497e08", "Další akce"),
                a("b170974a", "Přidat reakci"),
                a("i202bd22", "Nahlásit zprávu"),
                a("f2e5491a", "Kopírovat zprávu"),
                a("bf2d08ca", "Více reakcí"),
                a("ca7a2215", function (e) {
                    return "Vaše aktuální reakce: " + e.emoji;
                }),
                a("j4bfee22", "Smazat zprávu?"),
                a("faddd3a2", "Tato zpráva bude smazána pouze na vaší straně. Ostatní lidé v konverzaci ji stále budou schopni zobrazit."),
                a("f58dff34", "Pardon, někde jsme něco popletli a zpráva se nesmazala."),
                a("ad5a8e8e", "Je nám líto, ale ke smazání této zprávy nemáte oprávnění."),
                a("fad48eea", "Odesílání..."),
                a("ae7d7a24", "Zprávu se nepodařilo odeslat."),
                a("bbe74f3f", function (e) {
                    return "Včera, " + e.time;
                }),
                a("h95f9e77", function (e) {
                    return e.reactionCount + " reakc" + n(e.reactionCount, "e", "e", "e", "í");
                }),
                a("c0098d4a", "Reakce"),
                a("j85999ec", "Seznam reakcí uživatele"),
                a("a2d48779", function (e) {
                    return "Odebrat vaši aktuální reakci: " + e.emoji;
                }),
                a("icd0bf34", "Zobrazeno"),
                a("e8bd8fec", "Odesláno"),
                a("b2d32fae", "Zobrazeno všemi"),
                a("a763d33f", function (e) {
                    return "Zobrazeno " + e.count + " " + n(e.count, "lidmi", "lidmi", "osobou", "lidmi");
                }),
                a("d84b485e", "Začali jste sledovat tento účet."),
                a("be0c83d8", "Žádost jste přijali."),
                a("bcc13060", "Brzký přístup"),
                a("e535cae9", function (e) {
                    return e.count + " sledující" + n(e.count, "", "ch", "", "ch");
                }),
                a("cf249089", function (e) {
                    return "Uživatel se připojil " + e.joinDate;
                }),
                a("g1f972d7", "Další informace"),
                a("bb0e37c3", "Další informace"),
                a("a89e8ab3", "Další informace"),
                a("d98540eb", "Další informace"),
                a("j296badb", "Další informace"),
                a("e45d77f5", "Další informace"),
                a("h52ca4c4", "Nové zprávy"),
                a("ffde2fdc", "Načítání konverzace"),
                a("da878dc0", "Přijmout"),
                a("hc52446c", "Chcete se přidat do této skupiny? Dokud žádost nepřijmete, uživatelé neuvidí, že jste ji zobrazili."),
                a("f7e1ad65", function (e) {
                    return "Chcete uživateli " + e.senderName + " dovolit, aby vám mohl posílat zprávy? Dokud žádost nepřijmete, uživatel neuvidí, že jste zprávu zobrazili.";
                }),
                a("gdf4b790", "Opustit konverzaci?"),
                a("bbf83d84", "Tento krok nelze vrátit zpět a historie konverzace bude z vaší schránky nevratně smazána."),
                a("ib3fe8aa", "Blokovat nebo nahlásit"),
                a("gbed8594", "Zablokováním zabráníte tomu, aby vám tato osoba v budoucnosti zasílala další žádosti o soukromou konverzaci."),
                a("g9074da4", "Opustit konverzaci"),
                a("ad63377e", "Smazat konverzaci"),
                a("h09b49f8", "Tato konverzace bude vymazána z vaší schránky. Ostatní lidé v konverzaci ji stále budou schopni zobrazit."),
                a("i6b19b08", "Nahlásit konverzaci"),
                a("cdb1a05a", "Dejte platformě X vědět o spamu nebo obtěžování, abychom i ostatní dokázali ochránit před účty jako je tento."),
                a("d6b11d9c", "Vaši soukromou zprávu se nepodařilo odeslat, jelikož některá média se nenahrála."),
                a("c64c1884", "Napsat novou zprávu"),
                a("cdcebd22", "Nová zpráva"),
                a("a66ac766", "Načítání soukromých zpráv"),
                a("a846382a", "Hledat soukromé zprávy"),
                a("h845f282", "Soukromá zpráva"),
                a("d7ad7414", "Zpráva není dostupná"),
                a("ga086a54", "Připojený obrázek"),
                a("a9cc8cfe", "Odeslán GIF"),
                a("eb3d722e", "Odeslali jste obrázek GIF."),
                a("e5bfe07e", "Poslal odkaz."),
                a("db53c018", "Odeslali jste odkaz."),
                a("bf584cd2", "Odeslal fotku"),
                a("f80629ba", "Odeslali jste fotku."),
                a("e20b65b0", "Poslal(a) nálepku."),
                a("d30c2d40", "Poslali jste nálepku."),
                a("a876e58c", "Odeslal video"),
                a("j7d8101a", "Odeslali jste video."),
                a("dedfd266", "Uživatel odeslal hlasovou zprávu"),
                a("h7033cac", "Odeslali jste hlasovou zprávu"),
                a("i34ec422", "Sdílel post"),
                a("a4939874", "Sdíleli jste post"),
                a("e1c9ec9c", "Připnout konverzaci"),
                a("e3cfff7c", "Ztišit konverzaci"),
                a("f398722e", "Konverzace byla ztišena"),
                a("bdd91964", "Odepnout konverzaci"),
                a("a8ed0eca", "Zrušit ztišení konverzace"),
                a("jac4eb1e", "Ztišení konverzace bylo zrušeno"),
                a("d88d0790", "Nabídka Možnosti"),
                a("ce108dda", "Vybrat popisek"),
                a("abf2d13c", "Vybrat"),
                a("e4b3f520", "Připnuté konverzace"),
                a("ae4d666a", "Všechny konverzace"),
                a("d98e066c", "Konverzace se připnula."),
                a("j302dba8", "Konverzace se odepnula."),
                a("cb367658", "Konverzaci se nepovedlo připnout. Zkuste to znovu."),
                a("ie9a7e48", "Konverzaci se nepovedlo připnout. Zkontrolujte si své připojení a zkuste to znovu."),
                a("hd3927c6", "Konverzaci se nepovedlo odepnout. Zkuste to znovu."),
                a("f1ac0968", "Konverzaci se nepovedlo odepnout. Zkontrolujte si své připojení a zkuste to znovu."),
                a("d571e4f9", function (e) {
                    return "Připnout můžete jenom " + e.count + " konverzac" + n(e.count, "e", "í", "i", "í");
                }),
                a("a551bf7e", "Pokud chcete připnout další konverzaci, musíte napřed jednu odepnout."),
                a("a676a876", "Vítá vás doručená pošta!"),
                a("h52877aa", "V rámci soukromých konverzací na platformě X mezi vámi a dalšími uživateli můžete psát osobní zprávy, sdílet posty a provádět další akce. "),
                a("efe8fda0", "Napište zprávu"),
                a("b9dae4f4", "Zkuste hledat jiný termín"),
                a("e7fb2028", "Žádné další výsledky"),
                a("ae111c99", function (e) {
                    return "Na dotaz „" + e.query + "“ nebyly nalezeny žádné výsledky.";
                }),
                a("e8581cce", "Pro zadaný výraz jsme nenašli žádné výsledky"),
                a("f08940ac", "Napsat novou zprávu"),
                a("i5d7593a", "Zkuste hledat lidi, skupiny nebo zprávy"),
                a("c94ac69e", "Skupiny"),
                a("fb3c8e74", "Poslední hledání"),
                a("fd6150fc", "Bezpečnější soukromé zprávy"),
                a("c7e8a9ee", "zásadách ochrany osobních údajů"),
                a("bece84b4", "Vaše žádosti o soukromou konverzaci jsou prázdné"),
                a("e51be7c1", "Další informace"),
                a("f041be05", function (e) {
                    return e.stringCount + " pending request" + n(e.count, "s", "s", "", "s");
                }),
                a("a2fad0f3", function (e) {
                    return e.stringCount + " new pe" + n(e.count, "ople", "ople", "rson", "ople") + " you may know";
                }),
                a("cbddf365", function (e) {
                    return e.stringCount + " pe" + n(e.count, "ople", "ople", "rson", "ople") + " you may know";
                }),
                a("fac945ad", function (e) {
                    return e.stringCount + " new request" + n(e.count, "s", "s", "", "s");
                }),
                a("ed93de0c", "Analýza postu"),
                a("d1d92e40", "More details"),
                a("a6e89af8", "Otevřená konverzace"),
                a("ica55d24", "Nový chat"),
                a("f794af9a", "Režim Zábava"),
                a("eccf9fea", "Režim Běžný"),
                a("g7b1c574", "Obnovit do výchozího stavu"),
                a("f388a7ec", "DeepSearch"),
                a("ab1eb384", "Vyberte si požadovaný režim vyhledávání"),
                a("i330e54c", "Pokročilé vyhledávání a uvažování"),
                a("fdcce108", "Podrobnější hledání"),
                a("ac64b674", "Rozšířené vyhledávání, hlubší uvažování"),
                a("j22655f2", "Zeptejte se na cokoli"),
                a("h0681e3e", "Promluvte si s Grokem, naším asistentem s umělou inteligencí"),
                a("d593fd78", "Může odpovědět na vaše otázky, vyhledávat na X a generovat obrázky"),
                a("d0205a24", "Zkontrolujte si fakta"),
                a("ed4177c4", "Funkce Grok vám může poskytnout fakticky nesprávné informace, špatný souhrn nebo přehlédnout nějaký obsah. Veškeré informace byste si měli nezávisle ověřit."),
                a("c0ff98f8", "Trénování a přizpůsobení umělé inteligence"),
                a("f1a8218a", "Vaše data X, stejně jako vaše interakce, vstupy a výsledky s funkcí Grok můžeme využít pro trénink modelu, dolaďování a přizpůsobení vaší zkušenosti s funkcí Grok. Můžete se odhlásit pomocí nastavení X. Pro další informace navštivte naše centrum nápovědy."),
                a("bcbf5b6e", "Sdílení"),
                a("j7b5c844", "Jste odpovědní za konverzace, které veřejně sdílíte. Vyhněte se sdílení citlivých a důvěrných informací o sobě nebo o ostatních ve svých konverzacích s funkcí Grok (viz naše centrum nápovědy)."),
                a("c9f7c196", "Centrum nápovědy"),
                a("c65f7308", "Servery jsou momentálně vytížené"),
                a("f2a8655e", "Nástroj Grok Advanced je momentálně nedostupný."),
                a("c26b9b9c", "Soubor"),
                a("g10600b0", "Nabídka"),
                a("j826e722", "Uložit obrázek"),
                a("a9325f10", "Kopírovat obrázek"),
                a("g0b12442", "Kopírování obrázku selhalo"),
                a("edd0c172", "Postovat obrázek"),
                a("d1d3a41a", "Upravit obrázek"),
                a("a2697040", "Popište, co chcete na obrázku změnit"),
                a("ge1cefc4", "Nástroje"),
                a("e9b6d404", "K jakým vyhledávacím nástrojům by měl mít Grok přístup?"),
                a("h15dce2e", "Pokročilé nastavení"),
                a("ff9dc268", "Upravit výzvu"),
                a("acb2baa0", "Vytvořit obrázky"),
                a("fe9ad897", function (e) {
                    return "Upravit obrázek" + e.ttc_grok_preset;
                }),
                a("h30fd372", "Vyzkoušet hlasový režim"),
                a("e9fcdd0c", "Zeptejte se funkce Grok, jak agresivně prohledat web"),
                a("fc4e8aba", "Zeptejte se funkce Grok, jak můžete uvažovat krok za krokem"),
                a("e4ae6abe", "Požádejte Groka, aby upravil váš obrázek"),
                a("e8ade5e2", "Vyberte si osobnost"),
                a("b5df32b0", "Grog něco"),
                a("fb3b9776", "Výstup funkce Grok byl přizpůsoben tímto uživatelem."),
                a("ca93f2ee", "Zpráva byla odstraněna."),
                a("b8c06820", "Zkopírovat text"),
                a("ca0f5894", "To se mi nelíbí"),
                a("ja8d189e", "Chci textovou odpověď"),
                a("e951f04e", "Chcete obrázek"),
                a("c503b35e", "Chcete jiný obrázek"),
                a("d4371c92", "Nesprávný kód"),
                a("dbe8586e", "Chcete jiný kód"),
                a("e360eb4a", "Nepřijímá to kód"),
                a("a18657ca", "Znak je nesprávný"),
                a("b8b86300", "Nepřijímá to znak"),
                a("e4c34788", "Nesprávná odpověď"),
                a("b220a8c8", "Chce to něco jiného"),
                a("b115fd18", "Odpověď na základě předsudků"),
                a("dc637214", "Špatný styl/tón"),
                a("f02e6d42", "Chci vyhledávat"),
                a("bbec6bba", "Nesprávné výsledky vyhledávání"),
                a("b494d088", "Nechci vyhledávat"),
                a("a44974f2", "Nerozumí obrázku"),
                a("bd44a8a8", "Řekněte nám více"),
                a("fcdbe764", "Co může Grok dělat lépe?"),
                a("bb6adb22", "Popište, co se pokazilo"),
                a("h0fa15f2", "Děkujeme za vaše názory."),
                a("d700b268", "Odkazované chaty"),
                a("cd7bdab2", "Zapomenutím konverzací nedojde k jejich odstranění z historie"),
                a("f21b84de", "Odkaz zapomenut"),
                a("i52a9cb8", "Nelze zobrazit žádné vzpomínky."),
                a("d9d36880", "Zapomenout"),
                a("g02dacc0", "Dnes"),
                a("c6e845c0", "Včera"),
                a("a5fa4a86", "led"),
                a("c51724a4", "úno"),
                a("j244ceb2", "bře"),
                a("b22b12e0", "dub"),
                a("h3023cac", "květen"),
                a("b10dbffa", "čvn"),
                a("c81da1b6", "čvc"),
                a("d4e4d3ce", "srp"),
                a("c3418f9a", "zář"),
                a("b64dada6", "říj"),
                a("ad24ec20", "lis"),
                a("c7902252", "pro"),
                a("idf94bac", "Obnovit"),
                a("f7614f92", "Bez vyhledávání"),
                a("c5ade3ba", "S vyhledáváním"),
                a("c16e5b1a", "Bez generování obrázků"),
                a("i2ca65fa", "S generováním obrázků"),
                a("d3927f88", "Postovat odkaz"),
                a("be37ecd4", "Kopírování do schránky selhalo"),
                a("h708a4c0", "Sdílet konverzaci"),
                a("g06a67e2", "Stránka sdílení bude až do tohoto bodu obsahovat zprávy"),
                a("a0428662", "Není užitečné"),
                a("fe4fd310", "Užitečné"),
                a("bfd161bc", "Porovnání"),
                a("j5dcf1b2", "Aktualizováno"),
                a("a50aaa10", "Aktivita před tržními hodinami"),
                a("dd614d10", "Po hodinách"),
                a("d6b0b0d5", function (e) {
                    return "Otevírací" + e.ttc_stock_details;
                }),
                a("e85f8b65", function (e) {
                    return "Tržní kapitalizace" + e.ttc_stock_details;
                }),
                a("f92bf10f", function (e) {
                    return "Roční maximum" + e.ttc_stock_details;
                }),
                a("d679b09f", function (e) {
                    return "Vysoké" + e.ttc_stock_details;
                }),
                a("be7b9409", function (e) {
                    return "Poměr P/E" + e.ttc_stock_details;
                }),
                a("a81f5fb9", function (e) {
                    return "Roční minimum" + e.ttc_stock_details;
                }),
                a("e68d4f21", function (e) {
                    return "Nízké" + e.ttc_stock_details;
                }),
                a("bc9c96f9", function (e) {
                    return "Za celou dobu – vysoké" + e.ttc_stock_details;
                }),
                a("dd679fb1", function (e) {
                    return "Za celou dobu – nízké" + e.ttc_stock_details;
                }),
                a("a22063d2", "Sdílejte svou polohu pro zlepšení přesnosti."),
                a("db3248a8", "Načítání polohy"),
                a("ffe0e588", "Sdílet polohu"),
                a("e41a0dc2", "Zavřeno"),
                a("ieff24f4", "Konec zápasu"),
                a("e2811afc", "Hry"),
                a("j081fa34", "Pořadí"),
                a("i7c7f156", "Zítra"),
                a("b134ba52", "Probíhá"),
                a("j1361724", "Poločas"),
                a("fa0f1262", "Přestávka"),
                a("c2cac618", "Grok aktuálně podporuje data La Ligy, Premier League, Bundesligy, Series A a Ligue 1."),
                a("acae223d", function (e) {
                    return "Výsledky pro „" + e.prompt + "“";
                }),
                a("bed99fe2", "Zobrazit méně"),
                a("f7b57ac0", "Statistiky"),
                a("i7e3e446", "Zápasy"),
                a("d490977e", "Nyní"),
                a("e9f55db8", "Neděle"),
                a("e9cf3af8", "Pondělí"),
                a("d5868a7e", "Úterý"),
                a("b5dfdb46", "Středa"),
                a("ab8095a2", "Čtvrtek"),
                a("e298e6f2", "Pátek"),
                a("ef519654", "Sobota"),
                a("c609a1b4", "ne"),
                a("j92274b0", "po"),
                a("ja482160", "út"),
                a("f4ad4cb0", "st"),
                a("d66bf142", "čt"),
                a("dc17968a", "pá"),
                a("j310a2d6", "so"),
                a("eaf55eb4", "Zobrazit přemýšlení"),
                a("b1ac6016", "DeepSearch dokončen"),
                a("f766feca", "DeepSearch dokončen"),
                a("ee000b0d", function (e) {
                    return "Počet zdrojů: " + e.numSources;
                }),
                a("bf780b13", function (e) {
                    return e.minutes + "m " + e.seconds + "s";
                }),
                a("c2745fa4", "Přerušeno"),
                a("e258000e", "Oznámení"),
                a("d591a772", "Oznámení není k dispozici"),
                a("bc49b728", "Obdržíte oznámení, až bude odpověď připravena"),
                a("d8aadeba", "Funkce Oznámení je vypnutá"),
                a("db832e38", "Povolte oznámení v nastavení prohlížeče"),
                a("a910cac6", "Při povolování oznámení došlo k problému"),
                a("be30b6ee", "Nestabilní připojení"),
                a("b52484b6", "Hledání..."),
                a("a4d9dbfa", "Myšlenky"),
                a("ib1c5475", function (e) {
                    return "Promýšleno po dobu " + e.minutes + " m " + e.seconds + " s";
                }),
                a("a15d62db", function (e) {
                    return "Promýšleno po dobu " + e.seconds + " s";
                }),
                a("d7cb5408", "Relevantní webové stránky"),
                a("aa7c96bb", function (e) {
                    return "Zobrazit další " + e.numResults;
                }),
                a("j1ab5f40", "Klepnutím číst"),
                a("f5a2377e", "Přemýšlení po dobu "),
                a("g3ce0132", "Promýšleno po dobu"),
                a("f8007364", "Podrobnosti si zobrazíte rozbalením"),
                a("ca53f780", "Sbalit podrobnosti"),
                a("ha8fbe22", "Generujte více obrázků s Premium"),
                a("d95c232a", "Dosáhli jste svého limitu. Upgradujte nyní a generujte další."),
                a("h2671312", "Více z funkce Grok s předplatným Premium"),
                a("a1bb9c8a", "Více z funkce Grok s předplatným Premium+"),
                a("b08ef3ae", "Upgradujte na X Premium, chcete-li pokračovat v konverzaci, nebo to zkuste znovu později."),
                a("jf9363b8", "Upgradujte na X Premium+, chcete-li pokračovat v konverzaci, nebo to zkuste znovu později."),
                a("ef018bf6", "Analyzujte více obrázků s Premium"),
                a("cdace6d2", "Upgradujte nyní"),
                a("a3186bff", function (e) {
                    return e.count + " webov" + n(e.count, "é stránky", "é stránky", "á stránka", "ých stránek");
                }),
                a("f4146dda", "Které odpovědi dáváte přednost?"),
                a("a2c2be32", "Toto pomůže vylepšit funkci Grok."),
                a("g01599b6", "Odpověď 1"),
                a("e02694e0", "Odpověď 2"),
                a("h6867fcc", "Dávám přednost této odpovědi"),
                a("acc4496c", "Try Grok Voice mode"),
                a("jd36d190", "Access advanced features with Grok Android app"),
                a("hf9afab0", "Povolte DeepSearch pro skenování internetu a X, analýzu informací a poskytování podrobných, dobře odůvodněných odpovědí s rychlým, agentním vyhledáváním."),
                a("ef3b3f04", "Povolte funkci Přemýšlet používat náš model uvažování. Je to nejlepší pro oblast matematiky, vědy a kódování. Můžete také požádat Groka, aby „přemýšlel usilovněji“ o jakékoli otázce, která by mohla vyžadovat trochu více mozkové aktivity. "),
                a("b43636b8", "Představujeme Grok 3"),
                a("j376298c", "Grok 3 představuje dva nové režimy pro interakci s naším nejvýkonnějším modelem: DeepSearch a Přemýšlet."),
                a("e3584f8e", "Jakých 10 nejúspěšnějších opčních strategií obchodování používají hedgeové fondy"),
                a("d91b7b8a", "Kolik by stálo vybudování univerzity v roce 1885?"),
                a("ia5bef3e", "Jak vám dnes můžu pomoct?"),
                a("ebea5880", "Nedávné konverzace"),
                a("e13591c0", "Příklad konverzace s Grok"),
                a("c27ca452", "Předplatitelé Premium mohou nyní používat naši nejpokročilejší umělou inteligenci Grok na platformě X."),
                a("b6abc25a", "Představujeme Grok 2"),
                a("e1cdaf9e", "Náš nejnovější asistent s umělou inteligencí podporovaný X"),
                a("e6796748", "Zeptejte se na cokoli"),
                a("db470fdc", "Grok vám může pomoci s každodenními úkoly, jako je psaní e-mailů, odpovídání na otázky a poskytování receptů."),
                a("e9adc2d0", "Lépe kódujte"),
                a("aaab6cdc", "Zeptejte se na programátorské otázky nebo získejte pomoc s učením se nových konceptů."),
                a("jd08d606", "Buďte kreativní"),
                a("he526d22", "Vytvářejte úžasné vizuály s našimi novými možnostmi generování obrázků."),
                a("i6932876", "Cyberpunkový obrázek"),
                a("j7cdee8e", "Buďte stále v obraze"),
                a("f1f683c2", "Získejte aktuální informace o nejnovějších zprávách a aktuálních tématech výhradně na X."),
                a("h73b9cc0", "Vaše zpráva nebyla odeslána, protože momentálně nejste připojeni k chatu."),
                a("b6c73662", "Odeslat zprávu"),
                a("h6070fdc", "Nastavení chatu"),
                a("d49326ba", "Skrýt avatary"),
                a("h79f3532", "Ukázat avatary"),
                a("a8c1e2f0", "Skrýt akce moderátora"),
                a("jd83edd4", "Ukázat akce moderátora"),
                a("ecca11ac", "Skrýt časové značky"),
                a("e358a9f8", "Ukázat časové značky"),
                a("fca62374", "Opustit chat"),
                a("fe20f01b", function (e) {
                    return "Skrýt uživatele " + e.name + "?";
                }),
                a("f5dc372a", "Skrytí odebere všechny zprávy od uživatele a zabrání mu v chatování po zbytek vysílání."),
                a("e91dd1fa", "Zpráva byla odstraněna moderátorem."),
                a("d1da3709", function (e) {
                    return "Odpovídáte uživateli " + e.username + ": " + e.body;
                }),
                a("fc82a896", "Toto vysílání skončilo."),
                a("ea58dbd0", "Toto vysílání ještě nezačalo"),
                a("cb5b6784", "Omezeno vysílajícím"),
                a("eba27300", "Pouze účty, které vysílající sleduje, mohou chatovat."),
                a("f28984fb", function (e) {
                    return "Pouze účty, které " + e.screenName + " sleduje, mohou chatovat.";
                }),
                a("a3fec810", "Přihlaste se k odběru předplatného Premium, pokud chcete chatovat."),
                a("dbf0b235", function (e) {
                    return "Přihlaste se k odběru " + e.screenName + ", abyste mohli chatovat";
                }),
                a("ifbd8342", "Otevřít obrazovku Živě"),
                a("f935d3ce", "Otevřít Chat"),
                a("abbe8212", "Zavřít Chat"),
                a("hdf040dd", function (e) {
                    return "Hotovo: " + e.percentage + " %";
                }),
                a("e4f6bd9e", "Někde se něco pokazilo. Zkuste to znovu."),
                a("ac966f94", "Prohlížeč není podporován"),
                a("ca86b62c", "nebo"),
                a("d5568440", "Zadejte silnější heslo."),
                a("d0511fe6", "Toto číslo už používá nějaký jiný účet. Zkuste jiné číslo."),
                a("cd24fe60", "Zadejte platné telefonní číslo."),
                a("gf8388fe", "Kód země"),
                a("c52be452", "Ano, odstranit"),
                a("bcb388a0", "Tímto odeberete všechny kontakty, které jste dříve nahráli, a ve všech zařízeních vypnete synchronizaci s platformou X. Tato operace může chvíli trvat."),
                a("ec129eb6", "Úspěšně jste odstranili své kontakty."),
                a("f1b5048a", "Při odstraňování kontaktů došlo k chybě."),
                a("hc72e1fc", "Zadejte platnou e-mailovou adresu."),
                a("bc0ad88a", "Použití plus v adresách (e-maily se symbolem „+“) není povoleno. Zadejte platný e-mail."),
                a("f134915f", function (e) {
                    return "Vybrané položky: " + e.count;
                }),
                a("b8fb87e0", "Zobrazit vybraná témata"),
                a("e854ad27", function (e) {
                    return "Téma: " + e.title;
                }),
                a("e4ff75aa", "Něco se pokazilo. Zkontrolujte připojení a zkuste to znovu."),
                a("b60eba9e", "Pojďme nejdřív zkontrolovat jednu věc. Zadejte kód Google reCAPTCHA a potvrďte tak, že nejste robot."),
                a("ba939778", "Jste robot?"),
                a("d44efc66", "Jak se jmenujete?"),
                a("b4867a18", "Vaše jméno nemůže obsahovat slovo „Twitter“."),
                a("j1c3f4b9", function (e) {
                    return "Upravit datum narození " + e.birthdate;
                }),
                a("j231d352", "Sledovat všechny"),
                a("c203db71", function (e) {
                    return "Nahrávání postů uživatele @" + e.screenName;
                }),
                a("c9a1cb5e", "Tento účet neexistuje."),
                a("e7b201de", "Zkuste najít jiný."),
                a("ica87fde", "Jste zablokováni."),
                a("c7ec6faf", "Další informace"),
                a("e79ed125", function (e) {
                    return "Uživatel @" + e.screenName + " byl zablokován.";
                }),
                a("gba95028", "Zobrazit posty"),
                a("a2216a79", "Další informace"),
                a("a2811f96", "Časové osy profilu"),
                a("d25805fa", "Odběry"),
                a("b05be0c8", "Výběr"),
                a("b9891db3", function (e) {
                    return "Posty s odpověďmi uživatele " + e.fullName + " (@" + e.screenName + ")";
                }),
                a("e1ab545d", function (e) {
                    return "Načítání postů pro předplatitele uživatele @" + e.screenName;
                }),
                a("ac3f4be9", function (e) {
                    return "Načítání toho nejzajímavějšího od @" + e.screenName;
                }),
                a("da38f955", function (e) {
                    return "Načítání článků od @" + e.screenName;
                }),
                a("b7363b66", "Poslat post"),
                a("ce659062", "Nenechávejte své Předplatitele čekat"),
                a("f1e98cc2", "Předveďte své nejlepší příspěvky!"),
                a("d5c743c6", "Napište článek"),
                a("d1e5e328", "Až tak učiníte, objeví se tady."),
                a("hb26a1fe", "Neváhejte a začněte postovat exkluzivní obsah. Tady se zobrazí všechny vaše posty pro předplatitele."),
                a("b7c3572e", "Chcete-li ve svém profilu zvýraznit nejzajímavější příspěvky:\n\n1. Najděte příspěvek, který jste vytvořili\n2. Klepněte na tlačítko nabídky „•••“\n3. Klepněte na možnost „Přidat/odebrat z nejzajímavějších“"),
                a("i8123550", "Až zveřejníte článek, objeví se tady."),
                a("b786a77d", function (e) {
                    return "Uživatel @" + e.screenName + " nic nepostoval";
                }),
                a("j7b80397", function (e) {
                    return "@" + e.screenName + " hasn’t posted any Subscription posts yet";
                }),
                a("jbae8c54", "Nejsou dostupné žádné nejzajímavější posty."),
                a("g8fb219e", "Žádné články nejsou k dispozici."),
                a("f34dfc18", "Až tak učiní, uvidíte jejich posty tady."),
                a("h9346040", "Zde se zobrazí posty pro předplatitele po postování"),
                a("i4c3ddc6", "Po zveřejnění se články objeví zde."),
                a("e0118142", "Postovat nyní"),
                a("e0c1d871", function (e) {
                    return "Posty uživatele " + e.fullName;
                }),
                a("c575828f", function (e) {
                    return "Posty pro předplatitele od uživatele " + e.fullName;
                }),
                a("e8300dbb", function (e) {
                    return "Nejzajímavější od " + e.fullName;
                }),
                a("c46b420d", function (e) {
                    return "Článek " + e.fullName;
                }),
                a("h5a65db7", function (e) {
                    return "Posty pro předplatitele uživatele " + e.fullName + " (@" + e.screenName + ")";
                }),
                a("g7ccac9d", function (e) {
                    return "Nejzajímavější od " + e.fullName + " (@" + e.screenName + ")";
                }),
                a("ja6e5d35", function (e) {
                    return "Články od " + e.fullName + " (@" + e.screenName + ")";
                }),
                a("h088ae72", "Profilové posty"),
                a("hbf64b75", function (e) {
                    return "Posty lajkované uživatelem " + e.fullName + " (@" + e.screenName + ")";
                }),
                a("a64da953", function (e) {
                    return "Načítání lajků uživatele @" + e.screenName;
                }),
                a("be3d5b9f", function (e) {
                    return "Uživateli @" + e.screenName + " zatím nelajkoval žádné posty";
                }),
                a("d34b5306", "Až tak učiní, uvidíte tyto posty tady."),
                a("bb0e41bc", "Zatím nemáte žádné lajky."),
                a("d3d4a21c", "Klepněte u postu na symbol srdce a dejte tak najevo, že se vám líbí. Až tak učiníte, zobrazí se tady."),
                a("d95c3d31", function (e) {
                    return "Uživatel " + e.fullName + " lajkoval posty";
                }),
                a("eeb7d696", "Vaše lajky jsou soukromé. Vidět je můžete jen vy."),
                a("h6e91bb1", function (e) {
                    return "Média postovaná uživatelem " + e.fullName + " (@" + e.screenName + ")";
                }),
                a("fe38901b", function (e) {
                    return "Načítání médií od uživatele @" + e.screenName;
                }),
                a("bc4223a3", function (e) {
                    return "Uživatel @" + e.screenName + " nepostoval media";
                }),
                a("ccc363f6", "Až tak učiní, uvidíte jejich posty tady."),
                a("d1614228", "Světla, kamera… přílohy!"),
                a("d7dc8d0a", "Až postujete fotky nebo videa, zobrazí se tady."),
                a("hf761abf", function (e) {
                    return "Média uživatele " + e.fullName;
                }),
                a("je5311d3", function (e) {
                    return "Partnerské účty " + e.fullName + " (@" + e.screenName + ")";
                }),
                a("fd0772eb", function (e) {
                    return "Načítání partnerských účtů @" + e.screenName;
                }),
                a("ccf03833", function (e) {
                    return "Partnerský účet " + e.fullName;
                }),
                a("ba5a88e4", "Návrhy"),
                a("ddee8ae2", "Zobrazit všechny pozice"),
                a("d2a04c68", "Přijímáme nové pracovníky"),
                a("dc12a126", "Jak se tam dostanu?"),
                a("e2acb642", "Kontakt"),
                a("ha9b8035", function (e) {
                    return "Volat na číslo " + e.phoneCode + " " + e.phoneNumber;
                }),
                a("g2244521", function (e) {
                    return "Poslat SMS na číslo " + e.phoneCode + " " + e.phoneNumber;
                }),
                a("b44c0205", function (e) {
                    return e.day + " v " + e.time;
                }),
                a("de1123f5", function (e) {
                    return "v " + e.time;
                }),
                a("e2a5bd50", "Otevřeno 24 hodin denně"),
                a("e0d7da6c", "Zavírá"),
                a("i7059f56", "Otevírá"),
                a("a7391348", "Otevírací doba není k dispozici."),
                a("c9eba532", "Aktualizované hodiny"),
                a("b5fea270", "Karusel produktů"),
                a("h10bb33c", "Nahlásit produkt?"),
                a("dda5d96a", "Nahlásit produkt"),
                a("fca46f40", "centrum nápovědy"),
                a("c71a053b", "kliknutím sem"),
                a("d7f8a117", function (e) {
                    return "Analýza po " + e.days + " dny(í)";
                }),
                a("cae20e93", function (e) {
                    return "Dny: " + e.days;
                }),
                a("gc767fda", "Soukromý pro vás"),
                a("c7c85e0c", "Odblokovat analýzu"),
                a("b15df4b4", "Údaj o tom, kolikrát byly vaše posty na platformě X shlédnuty"),
                a("e5fe61e0", "Zobrazení"),
                a("d1018321", function (e) {
                    return "Vaše posty získaly " + e.value + " zobrazení za poslední(ch) " + e.period;
                }),
                a("e623137c", "Míra zapojení"),
                a("d9d34182", "Počet reakcí na posty vydělený počtem zobrazení"),
                a("aeee0182", "Návštěvy profilu"),
                a("b2bde01a", "Počet zobrazení profilu z vašich postů"),
                a("faf4c1f5", function (e) {
                    return "Váš profil zaznamenal " + e.value + " návštěv za poslední(ch) " + e.period;
                }),
                a("d5f1e554", "Kliknutí na odkazy"),
                a("cf573986", "Počet kliknutí na libovolnou adresu URL ve vašich postech"),
                a("j761451e", "Noví sledující"),
                a("e1a87d14", "Počet nových sledovaných, které jste získali (nezahrnuje uživatele, kteří vás přestali sledovat)"),
                a("j590577e", "Počet odpovědí, které jste dostali za své posty"),
                a("ia1da622", "Počet lajků, které jste dostali za své posty"),
                a("cfd1036b", function (e) {
                    return "Vaše posty získaly " + e.value + " lajků za poslední(ch) " + e.period;
                }),
                a("ja42739e", "Reposty"),
                a("ca6e8de0", "Údaj o tom, kolikrát byly vaše posty repostovány"),
                a("b1b4d57e", "Zobrazení videa"),
                a("bdaf100e", "Počet zobrazení videí ve vašich postech"),
                a("ca826772", "Zobrazení médií"),
                a("j43b8f52", "Počet zobrazení, která získala vaše média (GIF, obrázky, videa)"),
                a("d3969c06", "Procentuální podíl dokončení"),
                a("c58c3476", "Dokončení videa vydělené počtem zhlédnutí videa"),
                a("c8aae62a", "Počet záložek ve vašich postech"),
                a("g70825e0", "Sdílení"),
                a("c6fbefd4", "Počet sdílení vašich postů"),
                a("dbe9353e", "Zapojení"),
                a("a3a4e8f8", "Měsíčně"),
                a("eb2e0272", "Řádek"),
                a("e298b08e", "Graf"),
                a("bbc6e7c6", "Spojené státy"),
                a("h88ad664", "Kanada"),
                a("gd139910", "Spojené království"),
                a("e08feda2", "Japonsko"),
                a("fad772ce", "Blízký východ a severní Afrika"),
                a("a396dd6c", "Asijsko-pacifická oblast"),
                a("j942b16c", "Evropa a rozvojový trh"),
                a("j3cc0c00", "Latinská Amerika"),
                a("fe90a642", "13–17"),
                a("a5c91a8e", "18–24"),
                a("cf30cdfa", "25–34"),
                a("gf672f7c", "35–44"),
                a("jf28b41c", "45–54"),
                a("ja78da94", "55–64"),
                a("g42ea0b0", "65+"),
                a("f21807e0", "Uživatelé, kteří vás nesledují"),
                a("d61b2bcc", "Posty komunity"),
                a("h3525cb8", "Neuvedeno"),
                a("a3c544e8", "Nejdůležitější země"),
                a("f30795d0", "Otevře profilovou fotku"),
                a("gd7acb84", "Nastavit profil"),
                a("b7636014", "Zpráva"),
                a("haad225c", "Darujte Premium"),
                a("b63c46ed", function (e) {
                    return "Předplatit uživatele @" + e.screenName;
                }),
                a("j33d8902", "Odeslat příspěvek"),
                a("a8ab3d08", "Odeslat"),
                a("d740d2d9", function (e) {
                    return e.service + " odkaz se zkopíroval do schránky";
                }),
                a("a7cf1e98", "Bandcamp"),
                a("d876e67e", "Adresa peněženky Bitcoin"),
                a("f85f6760", "Cash App"),
                a("a32a7c06", "Adresa peněženky Ethereum"),
                a("cc1a3bc4", "GoFundMe"),
                a("d4d74bb4", "Patreon"),
                a("h14fbc52", "PayPal"),
                a("h1198dcc", "Venmo"),
                a("j4e0fd88", "Zobrazit další"),
                a("df7cb6d4", "Profesionální kategorie"),
                a("ec429e79", "Další informace"),
                a("j04c717a", "+ Přidat zkušenost"),
                a("a1ea2f12", "Vše nejlepší k narozeninám!"),
                a("g8191e78", "Dnes má narozeniny!"),
                a("c1b819ba", "Dnes jsou tu narozeninové balónky."),
                a("ad7a451e", "Přeložit informace O mně"),
                a("f543dbf6", "Ověřené telefonní číslo"),
                a("cef4e8cf", function (e) {
                    return "Zrušit skrytí uživatele @" + e.screenName + "?";
                }),
                a("h03a094a", "Posty z tohoto účtu budou nyní povoleny na časové ose vaší hlavní stránky."),
                a("a6e94418", "Posty od tohoto účtu jste skryli."),
                a("dd3d10f6", "Probíhá kontrola"),
                a("i06d4712", "Náš tým provádí rychlou kontrolu vašeho účtu. Zaškrtnutí byste zde měli vidět do několika dní."),
                a("j354c438", "Štítek „Probíhá kontrola“ je viditelný pouze pro vás."),
                a("e018b5fa", "K ověření proveďte upgrade"),
                a("b74bd6c6", "Tento účet je ověřený, protože je významný v oblasti státní správy, zpráv, zábavy nebo jiné stanovené kategorie."),
                a("e1e0c916", "Tento účet je ověřený, protože využívá předplatné Premium."),
                a("eb5d72e4", "Posty na tomto účtu jsou chráněné. Přečíst si je mohou pouze sledující."),
                a("g776ca50", "Ověřený účet"),
                a("ad465ee8", "Nastavte primární partnerství"),
                a("d01612d3", function (e) {
                    return "Ověřeno od " + e.date + ".";
                }),
                a("e14d8719", function (e) {
                    return e.year + " BCE";
                }),
                a("b7caffb7", function (e) {
                    return "" + e.name;
                }),
                a("ea8c425f", function (e) {
                    return "@" + e.viewerScreenName + ", dosud nejste ověřeni";
                }),
                a("b2d0c0f4", "Ověřte svůj účet, "),
                a("f464d54d", function (e) {
                    return "@" + e.profileScreenName;
                }),
                a("g47cdc0e", " abyste mohli vyniknout a získat zvýšený dosah odpovědi."),
                a("d834ab9c", "Ano, zobrazit profil"),
                a("cb339f26", "Upozornění: Tento účet se chová neobvyklým způsobem."),
                a("hf06085e", "Toto upozornění se vám zobrazuje proto, že v souvislosti s tímto účtem jsme zaznamenali neobvyklou aktivitu. Opravdu ho chcete zobrazit?"),
                a("aa959f36", "Upozornění: Tento účet je dočasně omezen."),
                a("jf604336", "Upozornění: Tento profil může obsahovat citlivý obsah."),
                a("c9bfda48", "Upozornění: Tento profil může obsahovat potenciálně citlivý obsah. Toto upozornění se vám zobrazuje proto, že uživatel používá potenciálně citlivé obrázky nebo výrazy. Opravdu ho chcete zobrazit?"),
                a("g29ebf26", "Toto upozornění se vám zobrazuje proto, že uživatel postuje potenciálně citlivé obrázky nebo výrazy. Opravdu ho chcete zobrazit?"),
                a("jcfb7fba", "Toto upozornění se vám zobrazuje proto, že uživatel potenciálně porušil pravidla společnosti X. Opravdu ho chcete zobrazit?"),
                a("bd598c70", "Tyto posty jsou chráněné"),
                a("e617164b", "Další informace"),
                a("g8475f82", "Účet byl pozastaven"),
                a("j5e1cf59", "pravidla společnosti X"),
                a("gbf342a4", "Účet byl stažen z Twitteru"),
                a("defba9a4", "Vítejte na platformě X!"),
                a("d11934ec", "Nastavit oznámení"),
                a("a2cd2b0a", "Sledovat a dostávat oznámení"),
                a("a70bae53", function (e) {
                    return "Teď můžete dostávat oznámení pokaždé, když " + e.fullName + " něco postne.";
                }),
                a("f51a4c29", function (e) {
                    return "Teď můžete sledovat uživatele " + e.fullName + " a dostávat oznámení pokaždé, když něco postne.";
                }),
                a("cfa5e58d", function (e) {
                    return "Sledujete uživatele " + e.fullName + " a budete dostávat oznámení, když něco postne.";
                }),
                a("be3a652d", function (e) {
                    return "Budete dostávat oznámení pokaždé, když " + e.fullName + " něco postne.";
                }),
                a("f089620c", "Vaše časová osa na hlavní stránce"),
                a("a1ab9c80", "V této komunitě zatím nejsou žádné posty"),
                a("b32c4fb0", "Až tam budou, uvidíte je tady."),
                a("bf17deda", "Pojďme na to!"),
                a("c3fbf1da", "Tady získáte přehled o všem, co se děje ve vašem světě. Najděte lidi a témata, která stojí za to sledovat."),
                a("a2515900", "Čeká se na posty"),
                a("je23cdb2", "Tady se zobrazí posty od lidí v tomto seznamu."),
                a("e69b7e02", "Spravovat účty"),
                a("b6bd6ae4", "Stávající účet"),
                a("d577bccd", function (e) {
                    return "Pokud máte na platformě X více než jeden účet, můžete je snadno přidat a pak mezi nimi přepínat. Maximální počet účtů je " + e.maxAccounts + ".";
                }),
                a("dc65b3e5", function (e) {
                    return "Dosáhli jste maximálního počtu " + e.maxAccounts + " účtů.";
                }),
                a("b8045b33", function (e) {
                    return "Dosáhli jste maximálního počtu " + e.maxAccounts + " účtů.";
                }),
                a("d075dc89", function (e) {
                    return "Dosáhli jste maximálního počtu " + e.maxAccounts + " osobních účtů.";
                }),
                a("bade139e", "Odhlásit se ze všech účtů"),
                a("ae33b982", "Odhlásit se ze všech účtů?"),
                a("fa07bf68", "Tento krok se vztahuje na všechny vaše účty otevřené na všech záložkách prohlížeče."),
                a("f7865ab6", "Není tohle váš účet?"),
                a("a35248e4", "Toto není můj účet."),
                a("f794a67c", "Toto je můj účet"),
                a("j79c0ff7", function (e) {
                    return "Odebrali jsme e-mailovou adresu " + e.emailAddress + " od tohoto účtu";
                }),
                a("fb46383c", "E-mailovou adresu od svého vlastního účtu nemůžete odebrat."),
                a("gcfdbc2b", function (e) {
                    return "E-mailová adresa už s účtem " + e.screenName + " na platformě X není spojena.";
                }),
                a("f351663c", function (e) {
                    return "@" + e.screenName;
                }),
                a("baaa89c4", function (e) {
                    return "" + e.emailAddress;
                }),
                a("h75b475c", function (e) {
                    return "@" + e.screenName;
                }),
                a("a8f0e157", "nastavení oznámení"),
                a("h1732cde", function (e) {
                    return "" + e.emailAddress;
                }),
                a("d374a600", function (e) {
                    return "@" + e.screenName;
                }),
                a("c1d75571", "Proč byla vaše e-mailová adresa spojena s účtem na platformě X, který není váš?"),
                a("ac71e82f", "Další informace"),
                a("b069d89c", "Cílová skupina"),
                a("f5a61ae6", "Obsah"),
                a("a4df00c0", "Karty Analýza účtu"),
                a("ac248548", "Přehled účtu"),
                a("je62f358", "Posledních 28 dní"),
                a("bc2f16a4", "Aktivní časy"),
                a("d603209e", "Rozklad aktivity"),
                a("ac3fb6de", "Účastníků v Prostoru"),
                a("ie181958", "Přehled o cílové skupině"),
                a("j6f8d422", "Průměrný čas sledování vašich videí."),
                a("e7479ce4", "Průměrný čas sledování"),
                a("g1dfa7d0", "Průměr"),
                a("h7d28188", "Zpět na obsah"),
                a("if2704e4", "Zpět k přehledu živého vysílání"),
                a("ea928ae4", "Zpět do prostoru"),
                a("e8c07c22", "vysílání"),
                a("a4ce6e68", "Metriky vysílání"),
                a("b2214c74", "Celkový počet zobrazení tohoto vysílání"),
                a("d4fcf83a", "Celkový čas, který sledující strávili sledováním tohoto vysílání"),
                a("a89b0322", "Zrušeno"),
                a("j3cb12ea", "Konkurenční posluchači"),
                a("b93931ee", "Počet postování vašeho obsahu."),
                a("a1814798", "Množství vašich odpovědí na post."),
                a("addd5575", function (e) {
                    return "Pá" + e.date;
                }),
                a("a92e62bd", function (e) {
                    return "Po" + e.date;
                }),
                a("g7450c57", function (e) {
                    return "So" + e.date;
                }),
                a("h08883e7", function (e) {
                    return "Ne" + e.date;
                }),
                a("ddb16777", function (e) {
                    return "Čt" + e.date;
                }),
                a("h8f395b3", function (e) {
                    return "Út" + e.date;
                }),
                a("b8710b43", function (e) {
                    return "St" + e.date;
                }),
                a("d9c70840", "Zařízení"),
                a("ba55e824", "Ukončen"),
                a("id276c42", "Počet interakcí s vaším obsahem."),
                a("j033d090", "Odhadovaný příjem"),
                a("efd4d7d4", "Filtrovat Prostory"),
                a("a1334290", "Prvních 48 hodin"),
                a("gc10a3b0", "Sledování v průběhu času"),
                a("efa0f858", "Počet sledování a nesledování v průběhu času. Nemusí nutně odrážet počet vašich sledujících."),
                a("g2b06cc6", "Údaje o pohlaví mohou být odvozené"),
                a("b66b3baa", "hodin(y)"),
                a("cf8a0772", "Zobrazení ke zhlédnutím"),
                a("g13d8010", "Posledních 48 hodin"),
                a("d5627596", "Poslední hodina"),
                a("baf120a6", "Nejméně zapojený"),
                a("f2382014", "ŽIVÉ VYSÍLÁNÍ"),
                a("c4a7a6aa", "Data ohledně živého vysílání"),
                a("a992032a", "Analytika živého vysílání"),
                a("ie45edda", "Přehled živého vysílání"),
                a("e30fc268", "Diváci živého vysílání"),
                a("bd37f68e", "Aktivita média"),
                a("fe074210", "minutami"),
                a("jd03a1b8", "Sledováno minut"),
                a("a20e91e8", "sledováno minut"),
                a("ic2bebee", "Monetizováno"),
                a("a1d642c8", "Nejvíce zapojený"),
                a("ifc4c1f8", "Počet nových sledujících získaných díky tomuto obsahu."),
                a("fff1315a", "Pro vybraný filtr nejsou k dispozici žádná vysílání"),
                a("jbcb09a8", "Dosud nedostatečné množství údajů"),
                a("df846d6c", "Pro vybrané časové období nebyly nalezeny žádné posty."),
                a("g2ba40f6", "Pro vybraný filtr nejsou k dispozici žádné prostory"),
                a("j44061a0", "Nedostupné"),
                a("c4a93912", "Není k dispozici"),
                a("a6b78788", "Nejsou k dispozici žádná data o sledujícím"),
                a("b2438638", "z celku"),
                a("ic0399e0", "Organická zobrazení"),
                a("ja5c444a", "Platební období"),
                a("f04e025e", "Vrchol konkurenčních posluchačů"),
                a("d6d10662", "Nejvyšší počet sledujících: "),
                a("d147bea2", "Zkuste to znovu později"),
                a("f0336d68", "Analýza postu"),
                a("g85fbd2e", "ID postu"),
                a("ice5c5b6", "Počet zobrazení tohoto obsahu uživatelům."),
                a("hf4f9bfe", "Postovat odkaz"),
                a("bf5ebf5c", "Posty a odpovědi"),
                a("b211652e", "Posty v průběhu času"),
                a("f2efec0a", "Předem zveřejněno"),
                a("i61e0302", "Předchozí"),
                a("e08a706a", "Sponzorovaná zobrazení"),
                a("cbc99192", "Datum zveřejnění"),
                a("a83c2a9a", "V reálném čase"),
                a("e9d72896", "Záznamy"),
                a("gede4932", "Záznam"),
                a("h0de359c", "Počet repostování tohoto obsahu."),
                a("e0568f2c", "Naplánováno pro: "),
                a("gd86baa8", "Naplánovaný start"),
                a("fef3bfae", "Vyberte sekundární metriku"),
                a("g7e3d2a4", "Analýza Prostoru"),
                a("fbc79a40", "Přehled Prostorů"),
                a("d077112a", "Statistiky Prostoru"),
                a("cf3709da", "Stav"),
                a("e797dc32", "Čas streamování: "),
                a("b649d8cc", "Pouze pro předplatitele"),
                a("j9282130", "Miniatura vysílání"),
                a("g629b8b0", "Čas vypršel"),
                a("eb87323c", "Zde se zobrazují analytická data za vybrané časové období od uskutečnění živého vysílání."),
                a("i6a75722", "Časové období"),
                a("c602f5b8", "Celkem"),
                a("b35e68ae", "Celkově účastníků"),
                a("h78ee79a", "Celkové sledování záznamu vysílání"),
                a("e3efaed0", "Typ"),
                a("c37993e2", "Přestal sledovat"),
                a("b1ed35d0", "Jedineční sledující"),
                a("bfad9306", "Neznámé"),
                a("b5a58f36", "Vysílání bez názvu"),
                a("i70f5278", "Nahráno dne:"),
                a("a98b58b6", "Ověření sledující"),
                a("a5de67ca", "Počet sledujících, kteří si ověřili svůj účet."),
                a("g3367ff4", "Shlédnutí videa"),
                a("a7b48b36", "Procento zobrazení videí, která byla dokončena."),
                a("a2580f2a", "Procentuální podíl dokončení"),
                a("ff95a9cc", "ID videa"),
                a("a97e358e", "Odkaz na video"),
                a("e10e8b46", "Zobrazují se pouze videa za posledních 100 dní."),
                a("ba37f6da", "Souhrn videa"),
                a("f19846b2", "Miniatura videa"),
                a("ccd6f4a8", "Název videa"),
                a("c8410542", "Počet zobrazení vašeho videa."),
                a("a532072a", "Diváci"),
                a("d9508ab0", "zobrazení"),
                a("d9f9dec0", "Zobrazit Prostor"),
                a("h0c1f37a", "Zobrazit analýzu Prostoru"),
                a("e41fffbc", "Celkový čas sledování vašich videí."),
                a("if2909ba", "Čas sledování"),
                a("i0e5bf4c", "Vaše videa");
            a("ed99baea", "Brzký přístup k beta verzi"),
                a("gf898b70", "Pokročilé hledání"),
                a("d2a43a7a", "obsahuje jak „ai“, tak i „startup“"),
                a("a8584698", "ai startup"),
                a("jb6f9292", "obsahuje přesně frázi „ai startup“"),
                a("j8ee77c4", "„ai startup“"),
                a("d0480758", "obsahuje „ai“ nebo „startup“ (nebo oboje)"),
                a("f0048fa2", "ai NEBO startup"),
                a("da0df186", "obsahuje „ai“, ale ne „startup“"),
                a("f2f463ea", "ai -startup"),
                a("a10a357e", "obsahuje „ai“ a má nejméně 50 lajků"),
                a("ca8ed1e8", "ai min_faves:50"),
                a("i945a3f2", "obsahuje „ai“ a URL adresu, která obsahuje slovo „grok“"),
                a("a9348088", "ai url:grok"),
                a("b5c3cdbc", "zmínění o funkci „grok“ účtu na X"),
                a("e2634592", "@grok"),
                a("i88ba038", "Upozornění zakázáno"),
                a("j2cb0214", "Upozornění povoleno"),
                a("ae852cd0", "Dostávat každé pondělí oznámení se shrnutím změn tohoto trendu."),
                a("d1d8633e", "Upozornění radaru"),
                a("g096d0cc", "Všechny dotazy"),
                a("e77035aa", "Smazat hledání"),
                a("a895ec64", "Určitě chcete tento dotaz odstranit?"),
                a("a4f5e431", function (e) {
                    return e.name + " odstraněn";
                }),
                a("db28b535", function (e) {
                    return "Odstranit " + e.name;
                }),
                a("bcf89b8a", "Upravte svůj dotaz"),
                a("f0002e72", "Prozkoumat výsledky"),
                a("b0924d7a", "Vytvoření dotazu selhalo. Zkuste to znovu."),
                a("cfd731ee", "Odstranění dotazu selhalo. Zkuste to znovu."),
                a("g08bff82", "Zakázání upozornění selhalo. Zkuste to znovu."),
                a("fa1fd798", "Povolení upozornění selhalo. Zkuste to znovu."),
                a("ia7dce48", "Generování dotazu selhalo. Zkuste to znovu."),
                a("d494d4aa", "Aktualizace dotazu selhala. Zkuste to znovu."),
                a("i4a49588", "Globální náměstí"),
                a("c0799860", "Den"),
                a("b43679d2", "Hodina"),
                a("f1fce85e", "Minuta"),
                a("ea3e0ec4", "Trh"),
                a("d8d9aec2", "Dosáhli jste maximálního počtu dotazů"),
                a("c9aa246e", "Nový dotaz"),
                a("b9b7a50e", "Upravte si kritéria vyhledávání kdykoli, abyste zůstali aktualizovaní"),
                a("i9a09bb6", "Vytvořte dotaz a nechte Radar sledovat aktualizace v reálném čase"),
                a("da20008c", "Nejsou k dispozici žádné trendy. Zkuste rozšířit kritéria vyhledávání."),
                a("e78ca8c6", "Zkuste to prosím znovu později"),
                a("ce3216ec", "Dotaz"),
                a("ef609bb8", "Co se děje na X?"),
                a("a636a738", "Zeptejte se na další..."),
                a("d92ec304", "Dotaz nebyl nalezen"),
                a("bbf29e20", "Resetovat výběr"),
                a("ie3321ea", "$NVDA (prodat NEBO koupit)"),
                a("cf223996", "Souhrn"),
                a("a27ccab8", "The Everything App"),
                a("i66136aa", "Populární"),
                a("e7c44382", "Jedineční uživatelé"),
                a("d559e5b8", "Dotaz bez názvu"),
                a("i1d9be88", "Použití pokročilých operátorů pro vyhledávání"),
                a("ae9f604c", "Partnerský účet"),
                a("a7d2d8f4", "Zobrazit pouze partnerské účty"),
                a("je21ffbe", "Počet sledujících"),
                a("i8d9797c", "Úplný profil"),
                a("a36bebf2", "Maximum"),
                a("i5ef8b4a", "Maximální počet sledujících"),
                a("fcf0ec1c", "Minimum"),
                a("ccc0bbc6", "Minimální počet sledujících"),
                a("je1bd63a", "Odemkněte sílu X, abyste našli zaměstnance, vedoucí prodeje a strategické partnery"),
                a("i6766078", "Vyhledejte nejlepší zaměstnance, nadějné prodejce a partnery"),
                a("d509bbd4", "Objevte lidi na X"),
                a("a5afaf54", "Resetovat"),
                a("i9006fb0", "Resetovat vše"),
                a("fa598a82", "Výsledky"),
                a("g3688a48", "Vyberte možnost"),
                a("ab5a91a4", "Uživatel"),
                a("cef20fd0", "Ověření"),
                a("a2b286b0", "Propagujte pracovní pozice, svoje produkty a svoje zprávy."),
                a("e2895a38", "Až 12 000 USD v kreditech na reklamu"),
                a("becba496", "Kredity na reklamu jsou k dispozici v rámci časově omezené nabídky."),
                a("ded395ae", "Získejte přístup k analýzám své firmy na jednom místě"),
                a("a47a20d4", "Pokročilá analýza"),
                a("b56d3ec6", "Všechny organizace a partnerské účty získají Premium+ s přístupem k funkci Grok 3"),
                a("ie663a1a", "Rychlá pomoc a eskalace díky specializovanému týmu péče o zákazníky"),
                a("j7f75bec", "VIP podpora"),
                a("ebf5ec26", "Připravujeme"),
                a("eeb424e2", "Podpořte svůj příběh."),
                a("ab62db18", "Vybudujte si svoje publikum."),
                a("j2c9bc4e", "Vynikněte se zlatým zaškrtnutím a přidejte partnerské účty, abyste uvedli svou společnost na trhu organicky."),
                a("e7930f82", "Vystupte z davu"),
                a("e77ea57e", "Nejvýkonnější nástroje pro zvýšení prodeje, najímání nejlepších lidí a přístup k exkluzivním informacím o trhu."),
                a("a558a254", "Uvolněte svůj růst na X s Ověřenými organizacemi"),
                a("b099f256", "Trendy na trhu a veřejné mínění jediným stisknutím tlačítka s funkcí Radar."),
                a("ecb7fa02", "Firemní inteligence"),
                a("cb5faa2a", "Použijte své kredity na reklamu k oslovení nejchytřejších lidí na planetě."),
                a("c67b260c", "Propagace pracovní pozice"),
                a("if48b5c2", "Nahrajte a propagujte pracovní pozice milionům lidí přímo na X."),
                a("aa0d60aa", "měsíc"),
                a("cebfdb52", "Organizace"),
                a("i9b6fcbc", "Pomocí Vyhledávání lidí můžete najít a kontaktovat inženýry, potenciální zákazníky a tvůrce. "),
                a("a6b5c3f0", "Najděte nejlepší lidi"),
                a("a51acce8", "Přejít na předplatné Basic"),
                a("ie132f40", "Upgradovat na ponechání plného přístupu"),
                a("b0d26232", "ULOŽIT"),
                a("f563b353", function (e) {
                    return "PLATNOST NABÍDEK VYPRŠÍ " + e.endDate;
                }),
                a("b29b2e69", function (e) {
                    return e.percentOff + "% sleva do data " + e.endDate;
                }),
                a("j3cfae29", function (e) {
                    return e.discountedCost + " ročně během vašeho prvního roku. Pak " + e.baseCost + " ročně.";
                }),
                a("jb74aea4", "Každý další partnerský účet stojí 50 USD na jedno uživatelské jméno za měsíc a kredity na reklamu podléhají omezením."),
                a("fc9fc856", "Každý další partnerský účet stojí 600 USD na jedno uživatelské jméno za rok a kredity za reklamu podléhají omezením."),
                a("fc785aec", "Získejte Základ"),
                a("edf32072", "Vše, co je součástí předplatného Premium+ a navíc:"),
                a("b3caf146", "Oveřený zlatý odznak"),
                a("a1dbf70c", "Bezplatný měsíční kredit na reklamu v hodnotě 200 USD"),
                a("i2a2286c", "2 500 USD v kreditech na reklamu zdarma"),
                a("e8d0fd04", "Radar Základ"),
                a("cf038828", "Specializovaná služba podpory"),
                a("efd56302", "Připojte partnerské účty ke své stránce"),
                a("bc1bb6aa", "Bezplatný měsíční kredit na reklamu v hodnotě 1000 USD"),
                a("e1669560", "12 000 USD v kreditech na reklamu zdarma"),
                a("hb973da4", "Plný přístup k funkci Radar"),
                a("g444c82e", "Včasný přístup k funkcím Enterprise"),
                a("a1bc0bcf", function (e) {
                    return e.cost + " účtováno ročně";
                }),
                a("i0f58dac", "Všechny plány podléhají příslušným daním a poplatkům."),
                a("je182d8a", "Podnik"),
                a("ge609bd6", "Kontaktujte prodejní oddělení"),
                a("je6d2aec", "Modulární ceny"),
                a("ed33b888", "Vyhledávání lidí"),
                a("ade522c4", "Podrobný přehled"),
                a("h551f266", "Kredity na reklamu"),
                a("c74f7856", "Balíčky pro partnerské účty"),
                a("b9b41f7a", "Vyhledat organizaci"),
                a("b1f368ee", "Vyhrazená podpora"),
                a("j189c5b2", "To vše v Pro plus:"),
                a("i7f4b58e", "Vlastní"),
                a("h45fd8ae", "Získejte plný přístup"),
                a("f1c3b32c", "To vše v Základ plus:"),
                a("f4307806", "Populární"),
                a("ce7c21de", "Ročně"),
                a("a21a64f6", "„X pro firmy je fantastická nabídka! Pomocí nástroje pro vyhledávání zaměstnanců jsme najali skvělé lidi.“"),
                a("dbb3fc54", "Spoluzakladatel a generální ředitel"),
                a("c1600210", "„X pro firmy je jasná věc. Pomohlo nám to zabezpečit klienty zachycením přehledů trhu.“"),
                a("fb3e127a", "Časově omezená novoroční nabídka"),
                a("a5fee980", "Získejte 30% slevu na roční plány a až 12 000 USD v kreditech na reklamu zdarma, když se přihlásíte k odběru před"),
                a("c9051cac", "dny"),
                a("ie035790", "sekundami"),
                a("cbd3dfaa", "Vyzkoušejte beta verzi"),
                a("h260121e", "Předveďte své hlavní role publiku."),
                a("ae0ad604", "Kariérní stránky"),
                a("cbd4ba6e", "Objevte a spojte se s nejlepším zaměstnancem"),
                a("b71927b2", "Neomezené zveřejňování pracovních pozic"),
                a("a0b5b7d4", "Odemkněte cílení vytvořené umělou inteligencí s naším výkonným modelem reklamy."),
                a("aa3f0e90", "Propagujte pracovní pozice pomocí cílení vytvořeného umělou inteligencí"),
                a("hc67be9e", "Začínáme"),
                a("c9a67f9e", "Začněte s Hiring"),
                a("jd937cda", "Oslovte miliony relevantních uchazečů pomocí X Hiring. Synchronizujte své pracovní pozice, vytvářejte vlastní kariérní stránky a nastavte propagaci pracovní pozice, aby se na časové ose spouštěly cílené reklamy."),
                a("d92d2632", "Nejlepší platforma pro přijetí nejlepšího zaměstnance"),
                a("c10bee94", "Počet žádostí za měsíc"),
                a("ib69d218", "250K+"),
                a("i953576c", "Najímající společnosti"),
                a("j395b846", "10K+"),
                a("g48a59c2", "Uživatelé"),
                a("j228841a", "500M+"),
                a("da570714", "Integrace ATS"),
                a("h25a3132", "Až 2 400 USD v reklamních kreditech na propagaci pracovní pozice"),
                a("f25a2004", "Výhody předplatného Premium+"),
                a("c237b78e", "Partnerské účty pro váš přijímající tým"),
                a("fc3d58fe", "Až 12 000 USD v reklamních kreditech na propagaci pracovní pozice"),
                a("eb5f060c", "Sledovat"),
                a("a19cf46f", function (e) {
                    return "Přestat sledovat uživatele @" + e.screenName + "?";
                }),
                a("e4c91b70", "Posty od tohoto uživatele se vám přestanou zobrazovat na časové ose Pro vás. Pokud jeho posty nejsou chráněné, můžete stále zobrazit jeho profil."),
                a("j650c8dc", "Zahodit žádost o sledování?"),
                a("c02f8de1", function (e) {
                    return "Tímto se vaše žádost o sledování zruší a @" + e.screenName + " už ji neuvidí.";
                }),
                a("e2ee95a1", function (e) {
                    return "Uživatel se připojil: " + e.date;
                }),
                a("d64fef58", "Dosud jste nepostoval"),
                a("e2a098dc", "Seřadit podle"),
                a("c5709148", "Zobrazí se maximálně 1 000 postů"),
                a("ca5e57bd", function (e) {
                    return "Post" + e.noun;
                }),
                a("d16c1ab6", "Nejnovější"),
                a("f0a28956", "Nejnovější"),
                a("h06df79a", "Nejvíce zobrazení"),
                a("c44744e6", "Nejméně zobrazení"),
                a("j6b98664", "Nejvíce lajků"),
                a("a669f95c", "Nejméně lajků"),
                a("a0c66496", "Nejvíce odpovědí"),
                a("h45174fe", "Nejméně odpovědí"),
                a("ea20f92a", "Nejvíce repostů"),
                a("c9a63566", "Nejméně repostů"),
                a("b40d33e4", "Rozbalení podrobností"),
                a("gedf636e", "Kliknutí na URL adresu"),
                a("bbc12690", "Kliknutí na Hashtag"),
                a("g7ede992", "Kliknutí na trvalý odkaz"),
                a("f5210bae", "Odkaz"),
                a("b1f77a7c", "Exportovat data"),
                a("j62d2af4", "Přehled postu"),
                a("dc70a568", "Analýza postu"),
                a("j9f65603", function (e) {
                    return "12:00" + e.date;
                }),
                a("d6ad20d7", function (e) {
                    return "4:00" + e.date;
                }),
                a("d9bcb257", function (e) {
                    return "8:00" + e.date;
                }),
                a("b83b49f1", function (e) {
                    return "12:00" + e.date;
                }),
                a("h52ae229", function (e) {
                    return "4:00" + e.date;
                }),
                a("i07e47b9", function (e) {
                    return "20:00" + e.date;
                }),
                a("h7cd94fe", "Graf s rozmazanými liniemi"),
                a("b10621d4", "Zobrazte si všechny statistiky"),
                a("c23def7a", "Počet zapojení"),
                a("jc14a9e8", "Utraceno"),
                a("d16b5a18", "Celkem utraceno za reklamy"),
                a("g01559c6", "Zobrazují se metriky za posledních 7 dnů"),
                a("ddc8d458", "Odemkněte historická data"),
                a("j74eab48", "Pokročilé analýzy jsou určeny výhradně členům předplatného X Premium"),
                a("i02166f6", "Porozumějte svému publiku"),
                a("cef977e4", "Exportujte data"),
                a("f88e624e", "Konverzace byla aktualizována"),
                a("e15e5637", function (e) {
                    return "Poslední" + n(e.count, " " + e.count + " hodiny", "ch " + e.count + " hodin", " hodina", "ch " + e.count + " hodin");
                }),
                a("h5ab8b0e", "Lidé, které sledují"),
                a("a0f01bca", "Kliknutím můžete změnit časové rozmezí"),
                a("he30b16c", "Možnost „Lidé, které sledují“ rozšíří výsledky a zobrazí nejsdílenější články nejen od lidí, které sledujete, ale i od lidí, které oni sledují."),
                a("b0589550", "Získat více novinek"),
                a("b60e4f78", "Podívejte se"),
                a("e950f6e0", "Ve vaší síti nebyly sdíleny žádné články."),
                a("e7dcfb81", "více účtů"),
                a("h965157c", "Tato stránka není podporována."),
                a("cd388852", "Navštivte profil autora na nejnovější verzi platformy X, abyste si mohli prohlédnout tento obsah."),
                a("abebdfae", "Na analýzu se můžete podívat jen u Prostorů, kde jste byli hostitelem nebo spoluhostitelem."),
                a("fcb205da", "Posluchači naživo"),
                a("jb088200", "Přehrání záznamu"),
                a("if65328a", "Celkem živě či ze záznamu slyšelo"),
                a("a1a0e6d8", "Sledovat hostitele"),
                a("a3c4e396", "Přestat sledovat hostitele"),
                a("j58e7b00", "Zobrazit profil"),
                a("eca4e32a", "Zobrazit podrobnosti"),
                a("hd908df2", "Živé Prostory"),
                a("c5d40fe2", "Kdokoli"),
                a("a8df1d34", "Zapnout video"),
                a("if410292", "Seznamte se s Prostory"),
                a("i43fdce9", function (e) {
                    return "Přidat témata (" + e.count + "/" + e.total + ")";
                }),
                a("e32e99ec", "O čem chcete mluvit?"),
                a("e93f3c2a", "Nahrát Prostor"),
                a("b701d610", "Naplánovaný Prostor odstraněn"),
                a("b028792d", function (e) {
                    return "Spravujte naplánované Prostory (" + e.count + ")";
                }),
                a("e9b73da8", "Naplánovat Prostor"),
                a("cdf630be", "Spustit"),
                a("acd1bcb0", "Kdo se může připojit?"),
                a("h07146a2", "Kdo může mluvit?"),
                a("h61d92b0", "Odstranit naplánovaný Prostor"),
                a("a488f2eb", function (e) {
                    return e.count + " z " + e.total + " vybraných";
                }),
                a("d2dfe80d", function (e) {
                    return "Prostor začíná dne " + e.date + " v " + e.time;
                }),
                a("aef95393", function (e) {
                    return "Existující Prostor naplánovaný na " + e.date + " v " + e.time;
                }),
                a("a7069f2e", "Upravit podrobnosti"),
                a("a15f06fc", "Naplánované Prostory"),
                a("f6cfa3fe", "Prostor nemůžete naplánovat do minulosti."),
                a("a8f71a2b", function (e) {
                    return "Prostor nemůžete naplánovat více než " + e.days + " dní do budoucnosti.";
                }),
                a("ae092f6c", "Naplánovaný Prostor nelze odstranit."),
                a("jd7f0030", "Naplánovaný Prostor aktualizován"),
                a("a26da034", "Uložit změny"),
                a("b3633046", "Zvolte komunitu"),
                a("ce447fcb", function (e) {
                    return e.count + " posluchač" + n(e.count, "i", "ů", "", "ů");
                }),
                a("ef7da97f", function (e) {
                    return "Počet posluchačů: " + e.count;
                }),
                a("a065e7e7", function (e) {
                    return "Právě probíhá: " + e.spaceTitle;
                }),
                a("hd5e7b21", function (e) {
                    return e.date + ": " + e.spaceTitle;
                }),
                a("f651e375", function (e) {
                    return "Tento Prostor byl ukončen: " + e.spaceTitle;
                }),
                a("i8478ae7", function (e) {
                    return "Přehrát záznam: " + e.spaceTitle;
                }),
                a("b2a94e93", function (e) {
                    return e.hostSpace + " · " + e.descriptionListening + " · " + e.descriptionGeneric;
                }),
                a("f6432ce5", function (e) {
                    return e.hostSpace + " · " + e.descriptionGeneric;
                }),
                a("e4e811fc", "Připojování..."),
                a("aadbc747", function (e) {
                    return "Spoluhostitel" + n(e.hostCount, "é", "ů", "", "ů");
                }),
                a("hbd6035f", function (e) {
                    return "mluvčí" + n(e.speakerCount, "", "ch", "", "ch");
                }),
                a("if420852", "Přehrát záznam"),
                a("f7dc3b1c", "Tento Prostor byl ukončen"),
                a("c1d15dc0", "Vypadá to, že tento Prostor byl uzavřen."),
                a("g3e2f3a6", "Poslouchat anonymně"),
                a("cd64d43e", "Připojte se přímo jako mluvčí"),
                a("jcdc32f0", "Začít poslouchat"),
                a("a0cee16a", "Začněte mluvit"),
                a("bf3daa48", "Začít poslouchat anonymně"),
                a("f9305f48", "Znovu připojit"),
                a("e51df2e6", "Váš mikrofon bude na začátku vypnutý."),
                a("h114ff6c", "Nemůžete se připojit k tomuto Prostoru, protože již jste v jiném Prostoru."),
                a("d7fe2d7e", "Nemůžete se znovu připojit k tomuto Prostoru, protože již jste v jiném Prostoru."),
                a("e61bdea4", "Hostitel tento Prostor nahrává. Do veřejného záznamu budou zahrnuti všichni, kteří budou mluvit."),
                a("d0ebf4f7", "Další informace"),
                a("d782b808", "Předplatné přináší určité výhody"),
                a("i7f83b8d", "Další informace"),
                a("fc962610", "Hledat název Prostoru nebo jméno hostitele"),
                a("e5b5f091", function (e) {
                    return "Hledání „" + e.searchQuery + "“ neodpovídá žádný Prostor";
                }),
                a("g5812140", "Proč nějaký nevytvořit?"),
                a("e8fe1ecb", function (e) {
                    return "Neexistují žádné " + e.section + " Prostory, které by odpovídaly hledání „" + e.searchQuery + "“.";
                }),
                a("c432d2b2", "Hledat Prostor"),
                a("d39e8b30", "Přidat poznámku"),
                a("dc7a6625", function (e) {
                    return "Píšete jako: " + e.displayAlias;
                }),
                a("g17e4064", "Vaše poznámka bude publikována pod vaším aliasem pro Komunitní poznámky a nebude spojena s vaším profilem na platformě X."),
                a("d9b09ee8", "Buďte precizní – vyžadujeme poskytnutí odkazů na externí zdroje."),
                a("b7476596", "Buďte precizní – doporučujeme uvést odkazy na externí zdroje."),
                a("df6c8292", "Vaše vysvětlení"),
                a("ecb4d20c", "Vaše poznámka nebyla uložena. Ujistěte se, jestli jste již k tomuto postu nenapsali poznámku dříve, a zkuste to znovu později."),
                a("eb5b4a12", "Aliasy v programu Komunitní poznámky"),
                a("ja0ee360", "Zvolte si alias"),
                a("f7b7c250", "Zvolte si alias pro Komunitní poznámky, abyste si mohli zachovat své soukromí"),
                a("c6382384", "Proč se v programu Komunitní poznámky používají aliasy?"),
                a("j48ab594", "Přispívejte soukromě"),
                a("bc2399a0", "Pište a hodnoťte poznámky, aniž byste sdíleli svoji identitu na platformě X."),
                a("d939cf16", "Zaměřte se na obsah"),
                a("a56f0c32", "Aliasy můžou pomoct omezit předsudky. Přispěvatelé se můžou zaměřit více na obsah a méně na autory."),
                a("d17c59e4", "Všichni jsou dál zodpovědní"),
                a("i719f8e2", "Můžete se podívat na historie přispěvatelů a všichni jsou zodpovědní prostřednictvím hodnocení, která dostávají."),
                a("a96bb564", "Zvolte si alias pro Komunitní poznámky"),
                a("afcdcf84", "Tento alias bude vaší identitou při psaní a hodnocení Komunitních poznámek. Není spojený s vaším profilem na platformě X."),
                a("f83d0446", "Váš alias byl uložen."),
                a("ed0e6b2e", "Začněte hodnotit poznámky"),
                a("if4c5e06", "Vítejte v programu Komunitní poznámky!"),
                a("g880a78a", "Začněte hodnotit poznámky"),
                a("d1be2236", "Program Komunitní poznámky spoléhá na přispěvatele, jako jste vy, kteří pomáhají identifikovat užitečné poznámky, které je možné ukázat všem."),
                a("af9f2b78", "Sledujte svůj dopad hodnocení"),
                a("af68afc8", "Váš dopad se zvýší pokaždé, když pomůžete poznámce získat stav Užitečná nebo Neužitečná."),
                a("fb5c5d42", "Získejte možnost psát poznámky"),
                a("a1e58cdc", "Jakmile dosáhnete dopadu hodnocení o hodnotě 5 nebo vyšší, odemkne se vám možnost psát vlastní Komunitní poznámky."),
                a("j5f112b4", "Dvě z vašich posledních poznámek mají aktuálně stav Neužitečná"),
                a("ac34c5e8", "Dostatečný počet přispěvatelů (včetně takových, kteří se v minulosti na některých hodnoceních neshodli) se shodl, že 2 z vašich poznámek nejsou užitečné. Tady je jejich zpětná vazba:"),
                a("ib7886d0", "Zobrazit tyto poznámky ve vašem profilu"),
                a("b0a7d360", "Hrozí vám, že dočasně nebudete moct psát poznámky"),
                a("e473f876", "Pokud jsou z posledních 5 poznámek přispěvatele nejméně 3 ohodnocené jako neužitečné, možnost psát poznámky se mu dočasně vypne."),
                a("ef490ae8", "Chybějící nebo nespolehlivé zdroje"),
                a("bf3dc462", "Zdroje poznámku nepodporují"),
                a("heb35e12", "Obsahuje nesprávné informace"),
                a("ib117532", "Obtěžování nebo nevhodné chování"),
                a("a7bc3192", "Cituje velmi kvalitní zdroje"),
                a("a26f8dc2", "Snadno pochopitelná"),
                a("cbdef06c", "Přímo reaguje na tvrzení v postu"),
                a("faa5f9e8", "Poskytuje důležitý kontext"),
                a("gf3b38f4", "Neutrální jazyk bez předsudků"),
                a("a50327ea", "Tento post nepotřebuje poznámku"),
                a("h7c59ea2", "Názor nebo spekulace"),
                a("d60c0064", "Překlepy nebo nejasné výrazy"),
                a("e06416ca", "Chybějí klíčové body nebo je irelevantní"),
                a("cff1aa8c", "Štvavé výrazy nebo předsudky"),
                a("c5d55592", "Nabízí unikátní informace nebo kontext"),
                a("f3e6f0aa", "Je informativní"),
                a("hc2b6a7e", "Nevynáší soudy a/nebo je empatická"),
                a("bbe8b4ac", "Jde pouze o názor, spekulaci nebo předsudek"),
                a("dd1f17ea", "Je mimo téma"),
                a("if966b54", "Obsahuje zastaralé informace"),
                a("fdc2060a", "Abyste mohli psát poznámky, potřebujete vyšší skóre dopadu."),
                a("edd80858", "Zobrazit váš profil a skóre"),
                a("eec24ff6", "Začít hodnotit"),
                a("eb9dc3ec", "Přispěvatelé jako vy společně pomáhají identifikovat užitečné poznámky, které se u postu zobrazí jako kontext poskytující lidem kvalitnější informace."),
                a("f2f61788", "Získejte možnost psát"),
                a("ca7e11e6", "Jakmile vaše skóre úspěšných hodnocení dosáhne hodnoty 5 nebo vyšší, odemkne se vám možnost psát Komunitní poznámky."),
                a("e7beb100", "Podívejte se na svůj profil a zpětnou vazbu"),
                a("fd02e290", "Zobrazit všechna pravidla"),
                a("ee7b8050", "Dočasně nemůžete psát nové poznámky."),
                a("b8cc2e9a", "Protože vaše nedávné poznámky byly označeny jako Neužitečné, vaše schopnost psát byla dočasně uzamčena."),
                a("f6c8613e", "Zpětná vazba k vašim poznámkám od přispěvatelů:"),
                a("fd5c2282", "Získejte další tipy k psaní poznámek"),
                a("c23e67ea", "Získejte znovu možnost psát"),
                a("i0e66c5a", "Vyberte jednu možnost."),
                a("j8e3e3be", "Vyberte nejméně jednu možnost."),
                a("f1e851f0", "Zadejte vysvětlení."),
                a("ff5dcac8", "Vaše vysvětlení je příliš dlouhé."),
                a("b47b5a16", "Všechna pole jsou povinná. Ujistěte se prosím, že jste odpověděli na všechny otázky."),
                a("g9cffe16", "Vaše poznámka neobsahuje zdroj"),
                a("bfa9e276", "Přepište poznámku tak, aby byla užitečná pro všechny posty obsahující tento obrázek, nebo zkontrolujte svou odpověď na první otázku v tomto formuláři"),
                a("ja36d83e", "Přepište poznámku tak, aby byla užitečná pro všechny posty obsahující toto video, nebo zkontrolujte svou odpověď na první otázku v tomto formuláři"),
                a("i6488a04", "Přepište poznámku tak, aby byla užitečná pro všechny posty obsahující tato média, nebo zkontrolujte svou odpověď na první otázku v tomto formuláři"),
                a("j6e12b24", "Obsahuje digitálně pozměněnou fotku nebo video"),
                a("eda68484", "Jde o digitální úpravu."),
                a("e198eb8c", "Napište poznámku s kontextem, který by se podle vás měl u videa zobrazit, aby byli ostatní informováni."),
                a("a9803d44", "Napište poznámku s kontextem, který by podle vás měl být zobrazen u obrázku, aby měli lidé k dispozici kvalitnější informace."),
                a("j7ddf18a", "Napište poznámku s kontextem, která by podle vás měla být zobrazena u všech postů s odkazem, aby ostatní lidé byli lépe informovaní."),
                a("g3874520", "Napište poznámku s kontextem, který by podle vás měl být zobrazen u postu, aby měli lidé k dispozici kvalitnější informace."),
                a("ac1141aa", "Napište poznámku, která pomůže ostatním přispěvatelům komunitních poznámek pochopit, proč toto video není zavádějící nebo nepotřebuje přidat kontext."),
                a("f99ebcfc", "Napište poznámku, která pomůže ostatním přispěvatelům v programu Komunitní poznámky pochopit, proč tento obrázek není zavádějící nebo nepotřebuje další kontext."),
                a("h641949e", "Napište poznámku, která pomůže ostatním přispěvatelům Komunitních poznámek pochopit, proč tento post není zavádějící nebo nepotřebuje přidat kontext."),
                a("c926cff6", "Na základě aktuálních důkazů si myslím, že tento post..."),
                a("e0ef7a2c", "Na základě aktuálních důkazů si myslím, že tento obrázek..."),
                a("g491d33a", "Na základě aktuálních důkazů si myslím, že toto video..."),
                a("b253e462", "Na základě aktuálních důkazů si myslím, že tato odkazovaná stránka je pravděpodobně..."),
                a("b1b2d004", "Je potenciálně zavádějící a prospělo by mu přidání kontextu"),
                a("ha9655c2", "Není zavádějící"),
                a("ebd2de06", "Proč si myslíte, že tento post může být zavádějící?"),
                a("i865abe8", "Proč si myslíte, že tento obrázek může být zavádějící?"),
                a("add096c6", "Proč si myslíte, že toto video může být zavádějící?"),
                a("eb604e2e", "Proč si myslíte, že odkazovaná stránka může být zavádějící?"),
                a("c33bc7d4", "Obsahuje faktickou chybu"),
                a("aadb676c", "Obsahuje zastaralé informace, které mohou být zavádějící"),
                a("g21a0ef4", "Je zkreslující nebo v něm chybí důležitý kontext"),
                a("daf354de", "Prezentuje neověřené tvrzení jako fakt"),
                a("d1d2ef84", "Jde o žert nebo satiru, kterou by někdo mohl omylem považovat za fakt"),
                a("bfee6064", "Proč si myslíte, že tento post není zavádějící?"),
                a("dfd1f7f0", "Proč si myslíte, že tento obrázek není zavádějící?"),
                a("b8623176", "Proč si myslíte, že toto video není zavádějící?"),
                a("ec66e3fc", "Proč si myslíte, že odkazovaná stránka není zavádějící?"),
                a("g228df26", "Vyjadřuje fakticky správný názor"),
                a("h890a3f2", "V době sdílení byl obsah v pořádku, teď je ale zastaralý"),
                a("hf607a0a", "Jde zcela jasně o satiru nebo žert"),
                a("j6ac7742", "Vyjadřuje osobní názor"),
                a("b1d82aae", "Přidali jste odkazy na zdroje, které by podle vás většina lidí považovala za důvěryhodné?"),
                a("ae859ee0", "Týká se vaše poznámka postu nebo obrázku?"),
                a("ba84e7f8", "Týká se vaše poznámka postu, nebo videa?"),
                a("ibb784c6", "O tomto konkrétním postu"),
                a("a21ecb8c", "O obrázku v tomto postu, přičemž by se to mělo zobrazit u všech postů, které tento obrázek obsahují"),
                a("he0ca8da", "O videu v tomto postu, přičemž by se mělo zobrazit u všech postů, které toto video obsahují"),
                a("d0bf8d34", "Je vaše poznámka o postu nebo odkazu?"),
                a("db370b9a", "Je vaše poznámka o postu, obrázku nebo odkazu?"),
                a("c35bf10e", "Je vaše poznámka o postu, videu nebo odkazu?"),
                a("d96ce0d2", "Tato poznámka je napsána způsobem, který bude užitečný u všech postů, které obsahují tento obrázek."),
                a("a1fb516c", "Tato poznámka je napsána způsobem, který bude užitečný u všech postů, které obsahují toto video."),
                a("be46a61e", "Tato poznámka je napsána způsobem, který bude užitečný u všech postů, které obsahují tato média."),
                a("ied1c2c2", "Tato poznámka je poněkud specifická pro tento post a může být pro ostatní irelevantní."),
                a("gb2433df", function (e) {
                    return "" + e.noteMatchUrl;
                }),
                a("gdfbdd93", function (e) {
                    return "všech " + e.matchCount + " postů";
                }),
                a("d7959c4d", function (e) {
                    return "všech " + e.matchCount + " postů";
                }),
                a("ff5be16d", function (e) {
                    return "všech " + e.matchCount + " postů";
                }),
                a("abdd8d0a", "Upravit poznámku"),
                a("c097608e", "Vaše poznámka neobsahuje vysvětlení"),
                a("ba25898c", "Poznámky, které vysvětlují své zdroje, mají větší šanci, že budou ohodnoceny jako užitečné."),
                a("e764d704", "Poznámky odkazující na důvěryhodné zdroje mají větší šanci, že budou ohodnoceny jako užitečné."),
                a("gb67e44c", "Odeslat bez vysvětlení"),
                a("d6b758a2", "Odeslat bez zdroje"),
                a("dc1fa12c", "Účty v programu Komunitní poznámky musí mít ověřená telefonní čísla"),
                a("a1752fde", "Pokud chcete dál přispívat do programu Komunitní poznámky z tohoto účtu na platformě X, budete muset ověřit své telefonní číslo."),
                a("hef02710", "Vaše číslo musí být ověřené, musí být od důvěryhodného operátora a nesmí být přidružené k jinému účtu v programu Komunitní poznámky."),
                a("dff9b6bc", "Ověřte svůj telefon"),
                a("f051e434", "Přispěvatelé v programu Komunitní poznámky musí mít jedinečná telefonní čísla"),
                a("eaef2f72", "K tomuto telefonnímu číslu je zřejmě přidruženo víc účtů na platformě X patřících přispěvatelům programu Komunitní poznámky."),
                a("j78d41b4", "Pokud chcete dál přispívat z tohoto účtu, musíte toto telefonní číslo odebrat od jiných účtů na platformě X."),
                a("a7c9a176", "Účty v programu Komunitní poznámky musí mít ověřená telefonní čísla od důvěryhodného operátora"),
                a("ec853dfa", "Abychom omezili používání uměle vytvořených nebo virtuálních telefonních čísel, je třeba zadat číslo od důvěryhodného operátora."),
                a("j6e19c58", "Hodnoty programu Komunitní poznámky"),
                a("ea580ee2", "Rychlé připomenutí hodnot programu Komunitní poznámky:"),
                a("eac7b6ac", "Přispívejte k budování porozumění"),
                a("b0381cfc", "Jednejte v dobré víře"),
                a("f0addddc", "Buďte vstřícní i k těm, kteří nesouhlasí"),
                a("h7c7b204", "Před napsáním nové poznámky pomozte ohodnotit stávající"),
                a("i8cae552", "Ohodnocením pomůžete udržovat vysokou kvalitu Komunitních poznámek."),
                a("hd43a218", "Dosáhli jste denního limitu psaní zápisků"),
                a("aaba8ed2", "K udržení vysoké kvality zápisků a prevenci spamu, je počet zápisků, které mohou přispěvatelé každý den napsat, omezen na základě jejich Dopadu psaní. Zkuste to prosím znovu později."),
                a("b98f077c", "Informace o žádosti o poznámku"),
                a("ee691104", "Žádost o komunitní poznámku k tomuto postu"),
                a("f8cbdf02", "Myslíte si, že tento post může být zavádějící? Požádejte o komunitní poznámku."),
                a("f132d1be", "Přispěvatelé uvidí výstrahy u postů, které získají dostatečný počet žádostí."),
                a("gf71296c", "Pokud je poznámka sepsaná a ostatní přispěvatelé ji ohodnotí jako užitečnou, bude to uvedeno v postu."),
                a("de0685b4", "X nevybírá, která poznámka se zobrazí – Komunitní poznámky jsou od lidí pro lidi."),
                a("f8ac3c88", "Potvrdit a požádat o poznámku"),
                a("a8edd0ea", "Přidat zdroj?"),
                a("a39a0de6", "Odkaz na post platformy X"),
                a("j819c176", "Pomozte přispěvatelům Komunitních poznámek tím, že přidáte odkaz na post platformy X, který vysvětluje, co je potenciálně zavádějící."),
                a("e15b3b44", "Odkaz musí být na post platformy X. Například: x.com/user/status/..."),
                a("c81085a4", "komunitních poznámkách"),
                a("c363515c", "zpřístupňovány veřejnosti"),
                a("cb6b0138", "Děkuji! Vaše žádost byla odeslána"),
                a("c196e8b8", "Pokud je poznámka napsaná a ohodnocená jako užitečná, uvidíte ji v postu."),
                a("a9491efa", "Žádost o komunitní poznámku byla odeslána"),
                a("f060d1cc", "Odstraňte žádost"),
                a("f499f824", "Odstraňte svou žádost"),
                a("hd1bc518", "Může trvat několik minut, než budete moci podat novou žádost na tento post"),
                a("geb8d31d", "zaregistrujte se."),
                a("gc399930", "Informace o denním limitu podávání žádostí o poznámky"),
                a("fee815e4", "Dosáhli jste denního limitu pro podávání žádostí o poznámky"),
                a("i7eb7900", "Váš denní limit se zvýší, pokud zadáte žádosti ohledně postů, které úspěšně získají užitečné poznámky."),
                a("d1a3817e", "Pomáhá to odměňovat lidi, kteří úspěšně najdou potenciálně zavádějící posty, které by mohly používat další kontext."),
                a("c031c77a", "Váš denní limit se může snížit, pokud zadáte příliš mnoho žádostí ohledně postů, o kterých si lidé nemyslí, že potřebují poznámku."),
                a("f87129d2", "Pomáhá to předcházet spamu a udržovat autory poznámek zaměřené na posty, které by mohly obsahovat užitečné poznámky."),
                a("jdd4a572", "Váš účet potřebuje ověřené telefonní číslo"),
                a("i0f07c07", "Ověřte si své telefonní číslo"),
                a("i157c1a8", "Tato žádost byla odstraněna."),
                a("a9f4ca9c", "Vaše poznámka je teď viditelná pro přispěvatele v programu Komunitní poznámky"),
                a("eb8f7c0c", "Vaši poznámku teď mohou hodnotit další přispěvatelé"),
                a("h87c6bd6", "Vaše poznámka je teď viditelná pro další přispěvatele"),
                a("gc1a5bce", "Přispěvatelé ohodnotí její užitečnost"),
                a("i0e950ca", "Pokud vaše poznámka dosáhne stavu Užitečná, začne se každému, kdo post uvidí, zobrazovat jako kontext"),
                a("a047e800", "Vaše poznámka poskytne ostatním přispěvatelům další kontext při hodnocení poznámek"),
                a("cec8a38c", "Pokud  poznámka dosáhne stavu Užitečná, zvýší se váš Dopad psaní."),
                a("a377532e", "Pokud ji dostatek lidí s různými úhly pohledu ohodnotí jako užitečnou, na platformě X se každému, kdo post uvidí, zobrazí jako kontext"),
                a("d790fa4e", "Stavy poznámek se neurčují podle většinového pravidla"),
                a("e90cda68", "Aby se identifikovaly poznámky, které budou užitečné pro širokou škálu lidí, musí se na jejich stavu shodnout přispěvatelé, kteří se ve svých minulých hodnoceních někdy neshodli. To pomáhá předcházet jednostranným hodnocením."),
                a("j5a1d85a", "Zobrazit vaši poznámku"),
                a("b25b64d6", "Vaše poznámka se odeslala"),
                a("g1428d70", "Vaše poznámka byla odeslána."),
                a("a4ec7004", "Teď se bude dít toto:"),
                a("c4093274", "Komunitní poznámky po odeslání"),
                a("bc8746a6", "Před napsáním nové poznámky prosím ohodnoťte alespoň jednu existující poznámku."),
                a("ce3c80b8", "Vysoká kvalita komunitních poznámek je závislá na vašich hodnoceních."),
                a("fa6a075a", "Poznámky s návrhem kontextu, který se má zobrazit u postu"),
                a("acb7ecae", "Poznámky vysvětlující, proč dodatečný kontext není potřebný"),
                a("d9a5fc06", "Ohodnoťte post"),
                a("b73cebd2", "Ohodnoťte post a poznámky"),
                a("ad8883f2", "U tohoto postu nejsou žádné poznámky"),
                a("efd14e7a", "Načítání poznámek"),
                a("e65b7186", "Lidé k tomuto postu navrhli Komunitní poznámky"),
                a("bcc14a68", "Komunitní poznámky představují program, ve kterém dobrovolní přispěvatelé přidávají kontext (ve formě poznámek) k postům, které by podle nich mohly být zavádějící. Poznámky níže můžou být hodnoceny přispěvateli, a pokud budou ohodnoceny jako užitečné, zobrazí se u postu jako kontext. Jestliže je nějaká poznámka aktuálně hodnocená jako užitečná, ale vy nesouhlasíte, můžete požádat o další kontrolu. Poznámku pak zkontrolují další přispěvatelé a její hodnocení se může změnit. "),
                a("c21313ba", "Poznámky aktuálně hodnocené jako neužitečné"),
                a("c2c40120", "Zobrazit všechny pozvánky"),
                a("ia596d40", "Vidíte něco, co byste chtěli vylepšit?"),
                a("deff0bde", "Napsat poznámku"),
                a("i8e85ef8", "Zapojte se do programu Komunitní poznámky a získejte přístup ke psaní poznámek a dalším funkcím, které pomáhají utvářet lépe informovaný svět"),
                a("af88892a", "Tyto poznámky přidávají přispěvatelé v programu Komunitní poznámky, kteří si myslí, že post by mohl být zavádějící a že by bylo dobré doplnit k němu kontext."),
                a("cf8a40a6", "Poznámky jsou viditelné jen v programu Komunitní poznámky, dokud je dostatečný počet přispěvatelů neohodnotí jako užitečné."),
                a("g22c8c30", "Pokud tyto poznámky ohodnotí jako užitečné dostatečný počet přispěvatelů (včetně těch, kteří se ve svých dřívějších hodnoceních obvykle neshodovali), začnou se u postu veřejně zobrazovat jako dodatečný kontext."),
                a("jf04b084", "Tyto poznámky přidávají přispěvatelé, kteří si myslí, že post není zavádějící a nepotřebuje dodatečný kontext."),
                a("g5a72e98", "Tyto poznámky jsou viditelné jen v programu Komunitní poznámky jako dodatečné informace pro hodnotitele. Jako kontext se u postů nezobrazují, a to ani v případě, že dosáhnou stavu Užitečná."),
                a("h53cb7de", "Co si o tomto postu myslíte?"),
                a("dc3bfc82", "Co se vám na tomto postu líbí, pokud vůbec něco?"),
                a("b4704bf4", "Co se vám na tomto postu nelíbí, pokud vůbec něco?"),
                a("ed5156fa", "Při ukládání vašeho hodnocení došlo k chybě. Zkuste to prosím znovu."),
                a("d5f9fb42", "Ohodnotil jste tento zvýšení komunity"),
                a("j6aa6172", "Smazat hodnocení?"),
                a("i4112750", "Tuto akci nelze vzít zpět."),
                a("bd7eb888", "Zobrazte si všechny poznámky k tomuto postu"),
                a("i97b83f6", "Při odesílání vašeho odvolání došlo k chybě. Zkuste to prosím znovu."),
                a("a038ab9a", "Přeložit zápisek"),
                a("i606fc4c", "Odvolání proti Komunitním poznámkám"),
                a("b664c554", "Požádat o kontrolu dalšími přispěvateli"),
                a("ab66e1f2", "Funguje to takto:"),
                a("e36d807c", "Žádost o kontrolu a ohodnocení této poznámky dostanou další přispěvatelé v programu Komunitní poznámky."),
                a("d8afb99c", "Pokud se na základě hodnocení přispěvatelů stav poznámky změní a nebude už hodnocená jako užitečná, přestane se u postu zobrazovat."),
                a("f9e1090c", "Kontroly provádějí přispěvatelé, nikoli platforma X."),
                a("i80c8a84", "Vyžaduje se další kontrola."),
                a("f93d4391", "požádat, aby tuto poznámku zkontrolovali další přispěvatelé"),
                a("e457970a", "Podrobnosti poznámky"),
                a("df587b98", "ID poznámky"),
                a("h201bdc8", "Autor poznámky"),
                a("h74b96b0", "Poznámka odeslána "),
                a("ge25848a", "Aktuální stav"),
                a("d6db34cc", "Potřebuje více hodnocení"),
                a("ce8b505e", "Neužitečná"),
                a("e5be8156", "Stav poznámky vypočítaný open-source algoritmem"),
                a("fca23c42", "Dostatečný počet přispěvatelů s různými úhly pohledu se shodl, že tato poznámka je užitečná, takže se u postu zobrazí jako další kontext."),
                a("hef420c2", "Tuto poznámku zatím neohodnotil dostatečný počet přispěvatelů s různými úhly pohledu."),
                a("j3af43c4", "Dostatečný počet přispěvatelů s různými úhly pohledu se shodl, že tato poznámka není užitečná."),
                a("f79d812c", "Ohodnoceno jako užitečné a zobrazeno během hodiny od postu"),
                a("cc02373e", "Ohodnoceno jako užitečné a zobrazeno během hodiny od navržení"),
                a("d9f72d90", "Přiřazeno a zobrazeno během hodiny od postu"),
                a("fc6e4594", "Tagy, které nejčastěji vybrali hodnotitelé"),
                a("f7427d6f", "tohoto postu"),
                a("aa94541d", "tohoto postu"),
                a("fe821ebb", "tohoto postu"),
                a("c5cc74e5", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                a("ff14b6b8", "jinému postu"),
                a("b5cc9c47", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                a("hb90fe9a", function (e) {
                    return e.matches + " postů";
                }),
                a("i23a64ea", function (e) {
                    return e.matches + " postů";
                }),
                a("h6c5af52", function (e) {
                    return e.matches + " postů";
                }),
                a("c2584f58", function (e) {
                    return e.matches + " postů";
                }),
                a("a0dec723", "tohoto postu"),
                a("f20fa57c", function (e) {
                    return e.matches + "postů";
                }),
                a("bd60b152", function (e) {
                    return e.matches + " postů";
                }),
                a("b95920ef", "tohoto postu"),
                a("f8dcced2", function (e) {
                    return e.matches + " postů";
                }),
                a("iaf626c0", function (e) {
                    return e.matches + " postů";
                }),
                a("e3002eab", "tohoto postu"),
                a("df3f2d52", function (e) {
                    return e.matches + " postů";
                }),
                a("cd83d952", function (e) {
                    return e.matches + "postů";
                }),
                a("ia35cd39", "tohoto postu"),
                a("a499228a", function (e) {
                    return e.matches + " postů";
                }),
                a("cf9ac658", function (e) {
                    return e.matches + " postů";
                }),
                a("fa56f7cb", "tohoto postu"),
                a("b826c19c", function (e) {
                    return e.matches + "postů";
                }),
                a("c4618eb8", function (e) {
                    return e.matches + " postů";
                }),
                a("i56af3fd", "tohoto postu"),
                a("g1f275b6", function (e) {
                    return e.matches + " postů";
                }),
                a("i2cac82c", function (e) {
                    return e.matches + " postů";
                }),
                a("a2ae91f1", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                a("d3205ee4", function (e) {
                    return e.matches + " postů";
                }),
                a("daeff73b", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                a("fc546c2e", function (e) {
                    return e.matches + " postů";
                }),
                a("i1df5f5d", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                a("g03f5337", "tomuto postu"),
                a("f5b30b8a", function (e) {
                    return e.matches + " postů";
                }),
                a("e0a49d5b", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                a("e25f9fd4", function (e) {
                    return e.matches + " postů";
                }),
                a("bae49ec3", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                a("d595bffd", "tomuto postu"),
                a("ef8a55a6", function (e) {
                    return e.matches + " postů";
                }),
                a("a3aa3cb1", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                a("d5061d00", "Na platformě X se nezobrazuje"),
                a("e272836c", "Smazat poznámku?"),
                a("da5a5d8c", "Smazáním se tato poznámka trvale odstraní z programu Komunitní poznámky."),
                a("a804a8f4", "Vaši pomoc potřebují další poznámky"),
                a("ib9628b8", "Ohodnoťte další poznámky, abyste si zvýšili dopad svých hodnocení"),
                a("bf08be2e", "Ohodnoťte teď další poznámky"),
                a("i26425d8", "Částečně"),
                a("c6e683d0", "Přijmout a odeslat"),
                a("b3fcaac6", "Před hodnocením této poznámky zvažte otevření a zkontrolování zdrojů"),
                a("e8a33850", "Před hodnocením této poznámky otevřete a zkontrolujte zdroje"),
                a("ca6f04ec", "Kontrola zdrojů citovaných v poznámkách pomáhá zajistit jejich přesnost. "),
                a("a7338bc2", "Je tato poznámka užitečná?"),
                a("bd0b6422", "Je to užitečné vysvětlení, proč přidaný kontext není potřebný?"),
                a("ac7f9746", "Co na ní bylo užitečné?"),
                a("c7751804", "Co na ní bylo neužitečné?"),
                a("dc9c823a", "Tato poznámka by byla užitečná u všech postů, které obsahují odkaz."),
                a("da0bb868", "Tato poznámka by byla užitečná u všech postů, které obsahují toto video."),
                a("e8694748", "Tato poznámka by byla užitečná u všech postů, které obsahují tento obrázek."),
                a("b487e12e", "Tato poznámka by byla užitečná u všech postů, které obsahují tato média."),
                a("hfdb963e", "Tato poznámka je příliš specifická pro tento post a může být irelevantní u jiných postů, které obsahují stejný odkaz."),
                a("bd6742c2", "Tato poznámka je příliš specifická pro tento post a může být irelevantní u jiných postů, které obsahují stejné video."),
                a("ded3a8a2", "Tato poznámka je příliš specifická pro tento post a může být irelevantní u jiných postů, které obsahují stejný obrázek."),
                a("c1e42c92", "Tato poznámka je příliš specifická pro tento post a může být irelevantní u jiných postů, které obsahují stejná média."),
                a("af198630", "zpřístupňována data veřejnosti"),
                a("d39720d3", "užitečnou"),
                a("i7d91dc9", "částečně užitečnou"),
                a("c75b7fb4", "neužitečnou"),
                a("d9025c46", function (e) {
                    return e.matches + " postů";
                }),
                a("ce1c95d6", function (e) {
                    return "" + e.noteDisplayUrl;
                }),
                a("jd7c58d8", function (e) {
                    return e.matches + " postů";
                }),
                a("ebb0b116", function (e) {
                    return e.matches + " postů";
                }),
                a("f9005c24", function (e) {
                    return e.matches + " postů";
                }),
                a("a4886e54", function (e) {
                    return "" + e.noteDisplayUrl;
                }),
                a("h8335712", "Vaše poznámka"),
                a("b9f18eec", "Aktuálně hodnocena jako užitečná"),
                a("j33f6520", "Aktuálně hodnocena jako neužitečná"),
                a("idc0e9fc", "Zaregistrujte se a staňte se přispěvatelem do Komunitních poznámek"),
                a("a83cccfa", "Přispěvatelé mohou kontrolovat návrhy poznámek, psát poznámek, sledovat jejich dopad a mnoho dalšího!"),
                a("c2a6ec00", "Chcete se zapojit do programu Komunitní poznámky?"),
                a("d2470b62", "Pomozte zajistit lepší informovanost lidí."),
                a("ab23a972", "Sledovat konverzaci"),
                a("c68f3bc0", "Další informace o našich hodnotách"),
                a("dfb1f498", "Zpětná vazba"),
                a("a584cfa7", "Pošlete nám soukromou zprávu na účet @CommunityNotes"),
                a("e4d93012", "O komunitní poznámku požádalo několik lidí. Chcete napsat poznámku?"),
                a("e55983c0", "Žádný z žadatelů zatím neposkytl odkaz na zdroj vysvětlující, proč je poznámka potřeba"),
                a("h23be93e", "Žadatelé mohou zahrnout post v síti X, který pomůže vysvětlit, proč si myslí, že by bylo užitečné přidat poznámku. Zahrnují níže uvedené posty"),
                a("ca6ae344", "Panel karet Komunitních poznámek"),
                a("fe27c1e2", "Poznámky"),
                a("ff692d64", "Váš profil"),
                a("cb1adfa0", "Stáhnout údaje"),
                a("jaf0d42c", "Vaše poznámky"),
                a("fa9a644a", "Pokud budou 3 z 5 vašich posledních poznámek, které už mají dostatečný počet hodnocení, vyhodnoceny jako neužitečné, možnost psát poznámky se vám dočasně vypne."),
                a("i4014342", "Vyhněte se tomu, že byste dočasně nemohli psát další poznámky. Tady je zpětná vazba od přispěvatelů k daným dvěma poznámkám:"),
                a("j9897a7c", "Získejte tipy k psaní poznámek"),
                a("ac71a5a0", "Ohodnoťte poznámky, které potřebují pomoc"),
                a("h544e3c8", "Přispěvatelé si teď musí napřed vysloužit možnost psát poznámky tím, že dosáhnou dopadu hodnocení 5."),
                a("d88c63f6", "Novinka: Získávání možnosti psát poznámky"),
                a("bd31adde", "Opustili jste program komunitních poznámek."),
                a("a796c19c", "Znovu připojit"),
                a("h837a96c", "Znovu se připojíte do program komunitních poznámek."),
                a("a4d4bcb9", function (e) {
                    return "Pokud se chcete znovu připojit, můžete tak učinit zde v " + n(e.numDaysToRejoin, e.numDaysToRejoin + " dny", e.numDaysToRejoin + " dnů", e.numDaysToRejoin + " den", "Dny: " + e.numDaysToRejoin) + ".";
                }),
                a("a490bc51", "Další informace"),
                a("c94ad3e8", "dejte nám vědět, co si o ní myslíte"),
                a("ee160790", "Smazané poznámky"),
                a("b3de4a42", "Dopad hodnocení"),
                a("a7b0393c", "Dopad psaní"),
                a("id568acc", "Populární autor"),
                a("e25f9ad6", "Hodnocení, která pomohla poznámce získat stav Užitečná"),
                a("a0697fbc", "Dobrá práce! Tato hodnocení pomohla identifikovat užitečné zápisky, které se zobrazují jako kontext u postů a pomáhají poskytovat lidem kvalitní informace."),
                a("a3311a60", "Tato hodnocení identifikovala užitečné poznámky, které se zobrazují jako kontext u postů a pomáhají poskytovat lidem kvalitní informace."),
                a("bbc44f5a", "Tato hodnocení identifkují užitečné ky, které se zobrazují jako kontext u postů a pomáhají poskytovat lidem kvalitní informace."),
                a("b4f21858", "Hodnocení, která přispěla k tomu, že se poznámka dostala do stavu Neužitečná"),
                a("d46b6bc8", "Tato hodnocení pomáhají vylepšovat program Komunitní poznámky tím, že autorům poznámek poskytují zpětnou vazbu a přispěvatelům umožňují soustředit se na poznámky s nejlepším potenciálem."),
                a("a5e6ba6a", "Hodnocení poznámek jako užitečných, které jsou v souhrnu hodnoceny jako neužitečné"),
                a("a22929e4", "Hodnocení poznámek jako neužitečných, které jsou v souhrnu hodnoceny jako užitečné"),
                a("b76dd726", "Tato hodnocení jsou běžná a mohou vést ke změnám stavu, pokud dostatečný počet lidí souhlasí, že „užitečná“ poznámka není dostatečně užitečná."),
                a("j29cc0f2", "Tato hodnocení se počítají dvakrát, protože často značí podporu poznámek, které ostatní považují za málo kvalitní poznámky."),
                a("cd4333d0", "Nic si z toho nedělejte, taková hodnocení občas dostane každý. "),
                a("e9fa53ac", "Hodnocení poznámek, které aktuálně nemají stav Užitečná nebo Neužitečná"),
                a("fc664dee", "Hodnocení přidaná po dosažení stavu"),
                a("f024ec64", "Tato hodnocení můžou posílit stav poznámky, nebo přispět k jeho změně."),
                a("e1ee08e6", "Dopad psaní"),
                a("je3fc324", "Vaše poznámky, které získaly stav Užitečná"),
                a("f7358242", "Poznámky, které získaly stav Užitečná"),
                a("j8e9b514", "Dobrá práce! Tyto zápisky se nyní zobrazují každému, kdo post vidí, a doplňují tak kontext a poskytují lidem kvalitní informace."),
                a("e9e57c5c", "Tyto poznámky se nyní zobrazují každému, kdo post vidí, a doplňují tak kontext a poskytují lidem kvalitní informace."),
                a("fee0d8a8", "Platforma X tyto poznámky zobrazí, aby k postům doplnily kontext a poskytly lidem kvalitní informace."),
                a("iab44364", "Vaše poznámky, které se dostaly do stavu Neužitečná"),
                a("d8c90438", "Poznámky, které se dostaly do stavu Neužitečná"),
                a("accaa48e", "Tyto poznámky ohodnotil jako neužitečné dostatečný počet přispěvatelů, včetně těch, kteří se v minulých hodnoceních někdy neshodli. Tyto poznámky si společně se zpětnou vazbou, která k nim přišla, můžete prohlédnout ve svém profilu.\nStavy poznámek se můžou po ohodnocení dalšími lidmi změnit."),
                a("fa2156f6", "Tyto poznámky ohodnotil jako neužitečné dostatečný počet přispěvatelů, včetně těch, kteří se v minulých hodnoceních někdy neshodli.\nStavy poznámek se můžou po ohodnocení dalšími lidmi změnit."),
                a("d004c768", "Poznámky, které potřebují další hodnocení"),
                a("f3d6d6c0", "Poznámky, které zatím nemají stav Užitečná nebo Neužitečná"),
                a("d68a370c", "Poslední aktualizace: "),
                a("f10aaf3c", "Tipy k hodnocení poznámek"),
                a("b9793c9a", "Zatím jste nenapsali žádnou poznámku"),
                a("bed66f92", "Začít můžete takto:"),
                a("a3ca686a", "Podívejte se na tipy k psaní užitečných poznámek"),
                a("ga8034c6", "Poznámku můžete napsat klepnutím na nabídku ••• u libovolného postu"),
                a("h4109636", "Pokud si myslíte, že nějaký post by mohl být zavádějící, napište k němu poznámku, která doplní kontext pro lidi, jež by na něj mohli narazit."),
                a("ec30e9ac", "Užitečnost vaší poznámky ohodnotí další přispěvatelé"),
                a("e0c42f80", "Pokud dosáhne stavu Užitečná, každému, kdo post uvidí, se zobrazí jako kontext"),
                a("ife4baaa", "Program Komunitní poznámky nefunguje podle jednoduchého většinového pravidla. Aby se identifikovaly poznámky, které budou užitečné pro širokou škálu lidí, musí se na jejich stavu shodnout přispěvatelé, kteří se ve svých minulých hodnoceních někdy neshodli. To pomáhá předcházet jednostranným hodnocením."),
                a("a0c552ee", "Tady se zobrazí váš dopad"),
                a("a4e5ea3c", "Zatím jste neohodnotili žádnou poznámku"),
                a("g9a28bde", "Projděte si poznámky, které potřebují pomoc"),
                a("dc0046e2", "Projděte si domovskou stránku programu Komunitní poznámky"),
                a("fecae168", "Najdete tam poznámky, které potřebují více hodnocení, a takové, u kterých by vaše hodnocení mohlo být obzvlášť přínosné."),
                a("h525e29e", "Pomozte najít poznámky, které by mohly být užitečné pro mnoho lidí"),
                a("f6db7706", "Nejlepší Komunitní poznámky se přímo věnují tvrzení v daném postu, jsou napsané vstřícným a jasným způsobem a přidávají zdroje, které by široká škála lidí pravděpodobně označila za spolehlivé."),
                a("f636b582", "Pomozte najít poznámky, které nejsou užitečné"),
                a("f58f4f62", "Hodnocení poznámek s nízkou kvalitou pomáhá vylepšovat program Komunitní poznámky tím, že autorům poznámek poskytne zpětnou vazbu a přispěvatelům umožní soustředit se na poznámky s nejlepším potenciálem."),
                a("cf30af22", "Víte to?"),
                a("d145b0fa", "Stavy poznámek se neurčují podle jednoduchého většinového pravidla. Aby se identifikovaly poznámky, které budou užitečné pro širokou škálu lidí, musí se na jejich stavu shodnout přispěvatelé, kteří se ve svých minulých hodnoceních někdy neshodli. To pomáhá předcházet jednostranným hodnocením."),
                a("c20a24cc", "Gratulujeme!"),
                a("d01b8fc8", "Jste populární autor komunitních poznámek."),
                a("jbe2ad46", "Autoři s vysokým dopadem psaní a vysokým poměrem zápisků se stavem „Užitečné“ mají přístup k následujícímu:"),
                a("d2dc3d4c", "Priorita pro upozornění na zápisky"),
                a("heb73816", "U populárních autorů je pravděpodobnější, že navrhované zápisky spustí oznámení a získají pozornost hodnotitelů."),
                a("b760d51a", "Odznak v profilu aliasu"),
                a("ief63e50", "Populární autoři mohou být ve svém profilu komunitních poznámek identifikováni odznakem."),
                a("jd6b88ca", "Zápisky k médiím"),
                a("c39bdf5a", "Populární autor může psát zápisky k médiím obsaženým ve více postech, aby bylo mnohem více lidí lépe informováno."),
                a("efb9a9e0", "Tady není nic k vidění"),
                a("a1529ce7", "Další informace"),
                a("f07ed596", "Přispěvatelé jako vy společně pomáhají identifikovat užitečné poznámky, které se na platformě X zobrazí jako kontext poskytující lidem kvalitnější informace."),
                a("h2b5268a", "Dobrá práce! Pokračujte v hodnocení poznámek, aby se vám dál zvyšovalo skóre dopadu."),
                a("e86c87a0", "Ohodnotit další poznámky"),
                a("ad98f836", "Váš dopad hodnocení se dostal na zápornou hodnotu. Nemějte ale obavy!"),
                a("e2d7c914", "Pokračovat v hodnocení poznámek"),
                a("a5427624", "Na domovské stránce programu Komunitní poznámky můžete najít poznámky, které potřebují hodnocení od více přispěvatelů."),
                a("e227a7fa", "Stav poznámky se vždycky může změnit"),
                a("eda73c9c", "Vaše hodnocení budou někdy protichůdná ke stavu poznámky. To ale není problém! Pokud se s vámi shodnou další přispěvatelé, může se stav změnit a váš dopad se zvýší."),
                a("cfa3b664", "Nyní můžete psát Komunitní poznámky!"),
                a("j44125ee", "Tento přispěvatel zatím nenapsal žádné poznámky."),
                a("da55067c", "Zkontrolujte tento Prostor později."),
                a("f893c3b8", "Zapojte se do programu Komunitní poznámky"),
                a("a701795c", "Zatím žádné Komunitní poznámky"),
                a("db08295e", "Chcete se připojit?"),
                a("ha275800", "Vypadá to, že nejste zaregistrováni v pilotním programu Komunitní poznámky. Připojte se a pomozte lidem získávat lepší informace."),
                a("ce0a213a", "Pokud chcete vytvořit poznámku, vyberte ikonu Komunitní poznámky v nabídce libovolného postu. Poznámky, které vytvoříte, se zobrazí tady."),
                a("c87f3cf8", "Poznámka"),
                a("a5b19492", "Tato poznámka neexistuje"),
                a("c21d1b2a", "Poznámky se dostanou do stavu Užitečná nebo Neužitečná, jakmile se na tom shodne dostatečný počet přispěvatelů, včetně lidí, kteří v minulosti dali nějaké poznámce rozdílná hodnocení. To pomáhá zajistit, aby poznámky byly užitečné pro širokou škálu lidí a aby neměly jednostranná hodnocení."),
                a("c7b59cde", "Nastavení Komunitních poznámek"),
                a("c8be1d0d", "Zjistěte více."),
                a("a5a2330c", "Posty se stejným médiem"),
                a("ad071b5c", "Posty obsahující stejný odkaz"),
                a("b92967c0", "Tento zápisek není zápiskem k médiu"),
                a("i92fddce", "Poznámka se automaticky zobrazí u postů uvedených níže, pokud s tím souhlasí dostatek lidí."),
                a("f5ce7a00", "Tento post média zatím nemá žádné shody."),
                a("e1288bdc", "Upozornění, když je potřeba pomoct s nějakou poznámkou"),
                a("ca14eab4", "Nastavte si příjem oznámení, když Komunitní poznámky potřebují vaše hodnocení."),
                a("gb2bc3d0", "Beru vše 🔥"),
                a("c35ebcd2", "Pomůžu, jak budu moct – klidně i několikrát denně"),
                a("ba165b3c", "Často"),
                a("g72e2a58", "Několik upozornění týdně"),
                a("idd249e0", "Občas"),
                a("if2e01ee", "Několik upozornění měsíčně"),
                a("fdaeaab8", "Při ukládání nastavení došlo k chybě. Zkuste to prosím znovu."),
                a("db4e443a", "Vaše nastavení bylo uloženo."),
                a("dc11636c", "Jazyky, které ovládáte"),
                a("fae059c6", "Opustit program komunitních poznámek"),
                a("ed37123a", "Opouštíte program komunitních poznámek"),
                a("c1a554a2", "Toto byste měli vědět:"),
                a("j59355fe", "Nebudete moci psát nové komunitní poznámky."),
                a("c23420ec", "Nebudete dostávat oznámení z komunitních poznámek, pokud nebudou souviset s vaší aktivitou na X."),
                a("c76031ee", "Váš anonymní profil komunitních poznámek a minulá odeslání zůstanou veřejně dostupné. I nadále budete moci své poznámky zobrazit a odstranit."),
                a("be4f9106", "Můžete se znovu připojit za 90 dní."),
                a("hf68e810", "Komunitní poznámky představují program, který si klade za cíl, aby měli lidé po celém světě k dispozici kvalitnější informace. Umožňuje, aby lidé na platformě X ve spolupráci přidávali užitečné poznámky k postům, které by mohly být zavádějící."),
                a("jdb52860", "Přispěvatelé píšou a hodnotí poznámky"),
                a("c104025c", "Přispěvatelé jsou uživatelé platformy X – přesně jako vy – kteří se rozhodli, že se zaregistrují do pilotního programu a budou psát a hodnotit poznámky. Čím více lidí se zapojí, tím lepší program bude."),
                a("j7872b8c", "U postu se zobrazí jenom poznámky, které lidé ohodnotí jako užitečné"),
                a("fb59415e", "Aby se poznámka veřejně zobrazila u postu jako další kontext, musí ji dostatečný počet lidí s různými úhly pohledu ohodnotit jako užitečnou. Tento přístup pomáhá předcházet předsudkům nebo manipulaci a umožňuje najít poznámky, které jsou užitečné pro mnoho lidí."),
                a("f9a44022", "O tom, co se zobrazí, nerozhoduje společnost X, ale přispěvatelé"),
                a("gdf4fbb2", "Společnost X poznámky nepíše, nehodnotí ani nemoderuje (pokud neporušují pravidla platformy X). Věříme, že když dáme lidem možnost projevit své názory a společně rozhodovat, jde o férový a efektivní způsob, jak lidem poskytovat kvalitnější informace."),
                a("cc720e6a", "Program Komunitní poznámky je založený na transparentnosti dat"),
                a("j2fcd33a", "Data zahrnují příspěvky do"),
                a("d4a6b322", "Tady jsou každý den publikována všechna data z programu Komunitní poznámky, aby k nim lidé měli volný přístup a mohli analyzovat data, identifikovat problémy a nacházet příležitosti k tomu, jak Komunitní poznámky vylepšit. Nemůžeme se dočkat, až se od vás dozvíme nové věci."),
                a("c359263a", "Naučte se používat a analyzovat data z programu Komunitní poznámky "),
                a("b8a27fe2", "v našem průvodci"),
                a("j1c99e00", "Data o poznámkách"),
                a("i6f69314", "Data o hodnoceních"),
                a("b7e4c114", "Historické údaje o stavu poznámky"),
                a("d7f19114", "Data o stavu registrace uživatele"),
                a("b6008808", "Data žádosti o poznámku"),
                a("h786cd7a", "Data o poznámkách zatím nejsou k dispozici"),
                a("d0fe8052", "Data o hodnoceních zatím nejsou k dispozici"),
                a("c0427f94", "Historické údaje o stavu poznámky zatím nejsou k dispozici"),
                a("g880d8c0", "Data o stavu registrace uživatele zatím nejsou k dispozici"),
                a("ab1b3d38", "Data žádosti o poznámku zatím nejsou k dispozici"),
                a("c43fb933", "Dohoda mezi platformou X a vývojáři a Zásady pro vývojáře"),
                a("af781666", "Co si lidé myslí?"),
                a("a1f414ee", "Share thoughts"),
                a("ed88e742", "Zkopírovat odkaz na téma"),
                a("h92fe1be", "Do programu Komunitní poznámky se bohužel prozatím nemůžete zapojit."),
                a("f0dc1434", "Program Komunitní poznámky je prozatím dostupný jenom v USA."),
                a("f8fc0b48", "Vytvořit složku"),
                a("c14bcdde", "Prohledat záložky"),
                a("e9c65c4a", "Hledat záložky"),
                a("b92a21d9", function (e) {
                    return "Žádné výsledky pro: " + e.query;
                }),
                a("f191a2ba", "nastaveních hledání"),
                a("a068008a", "Složky v tuto chvíli nejde načíst"),
                a("f075b0e8", "Upravit složku"),
                a("beba2a0e", "Vytvořit novou složku pro záložky"),
                a("e41c9b4f", function (e) {
                    return "Uloženo do kolekce " + e.bookmarkFolderName;
                }),
                a("h18f86a4", "Smazat složku"),
                a("f4ea967a", "Složka byla smazána"),
                a("b670aa62", "Název složky"),
                a("aece5462", "Název složky byl úspěšně aktualizován"),
                a("e3299b94", "Něco se pokazilo. Zkuste složku aktualizovat znovu za minutku."),
                a("c09ea714", "Něco se pokazilo. Zkuste složku smazat znovu za minutku."),
                a("gee78816", "Názvy složek pro záložky nemůžou být delší než 25 znaků"),
                a("h9a5daa2", "Smazat složku?"),
                a("ac9d5f56", "Vaše posty budou stále uloženy ve složce „Všechny záložky“"),
                a("i6e7e298", "Vytvořit"),
                a("a0ea2fa6", "Jméno nemůže zůstat prázdné"),
                a("eec37eac", "Složka pro záložky s tímto názvem už existuje"),
                a("fce0c59e", "Soubor JSON pro animaci se nepovedlo analyzovat. Zkontrolujte prosím formát kódu JSON v souboru pro animaci a zkuste to znovu."),
                a("g0eea6c2", "Soubor JSON pro animaci se nepovedlo přečíst. Zkuste prosím otevřít soubor znovu."),
                a("ae58026a", "Otevřít náhled souboru .json pro značkový lajk"),
                a("hd0bc1eb", function (e) {
                    return "Uživatel " + e.name + " vysílá živě.";
                }),
                a("bea1f26b", function (e) {
                    return "Uživatel " + e.name + " vysílal živě.";
                }),
                a("ab3ee97f", function (e) {
                    return e.screenName + " nevysílá živě";
                }),
                a("d39d46c4", "Název byl aktualizován. Může trvat až 30 sekund, než se změny projeví."),
                a("e44095a5", function (e) {
                    return "Spuštěno: " + e.timestamp;
                }),
                a("j83f29dd", function (e) {
                    return "Skončilo: " + e.timestamp;
                }),
                a("daca8a2c", "Otevřít v Doku"),
                a("e3aac82a", "Načítání vysílání"),
                a("i0ed3f4e", "Obrázek události");
            a("cbae35fa", "Nahlásit vysílání"),
                a("fd12ab58", "Posty v kolekci"),
                a("a226497c", "Vytvoření nové komunity"),
                a("d7346632", "Zatím jste se nezapojili do žádných komunit"),
                a("b732a4cc", "Až to uděláte, uvidíte jejich posty tady."),
                a("hff48914", "Nepodařilo se najít žádné posty."),
                a("hb52cc4a", "Zkuste to za chvíli."),
                a("e50e1bb0", "Vítají vás komunity"),
                a("i6829daa", "Komunity představují moderované diskusní skupiny, ve kterých můžou lidé na platformě X konverzovat a sdílet obsah."),
                a("fc5c6914", "Setkejte se s dalšími lidmi s podobnými zájmy"),
                a("aa1a9820", "Přidejte se ke Komunitám a spojte se s lidmi, kteří mají stejné zájmy."),
                a("edef4c82", "Postujte přímo do komunity"),
                a("a7640df6", "Vaše posty jsou sdíleny s lidmi z komunity a s vašimi sledujícími."),
                a("h3bb8068", "Vždycky za vámi někdo stojí"),
                a("a709f8f8", "Správci a moderátoři pomáhají řídit komunity a zajišťovat, aby se konverzace držely tématu."),
                a("c8d33380", "Nové položky"),
                a("cb6adb10", "Objevte komunity"),
                a("df362964", "Najít komunity"),
                a("dfd5031f", function (e) {
                    return e.newTweets + " novinka post" + n(e.newTweets, "y", "y", "", "y");
                }),
                a("ha4bb8a9", function (e) {
                    return e.reportedTweets + " hlášení";
                }),
                a("caf003b3", function (e) {
                    return e.memberRequests + " žádost" + n(e.memberRequests, "i", "í", "", "í");
                }),
                a("a2118086", "Seřadit posty"),
                a("hb01fe46", "Až to uděláte, uvidíte je tady."),
                a("c170a564", "Pro zadaný výraz jsme nenašli žádné výsledky. Zkuste hledat jiný výraz."),
                a("cbd1aef8", "Vyhledejte komunity a posty"),
                a("fbf01e52", "Hledat komunitu"),
                a("c8a6499c", "Výsledky hledání komunitních postů"),
                a("af05a978", "Až začnete psát, začnou se tu zobrazovat výsledky hledání."),
                a("eb4d2cd0", "Nebyly nalezeny žádné posty."),
                a("a8ecdb4c", "Výsledky hledání nejnovějších komunitních postů"),
                a("dc6ce7b4", "Členové"),
                a("ga2aa43c", "Moderátoři"),
                a("b139b54a", "Pozvat členy"),
                a("cf4898a0", "Hledat lidi"),
                a("g30bc699", function (e) {
                    return "Zobrazit profil uživatele @" + e.screenName;
                }),
                a("e585d844", "Přidat do týmu moderátorů"),
                a("cab7c6f8", "Přidat do týmu moderátorů?"),
                a("e96d5255", function (e) {
                    return "Uživatel @" + e.screenName + " je teď moderátorem.";
                }),
                a("f348a395", function (e) {
                    return "Uživatele @" + e.screenName + " teď nejde přidat do týmu moderátorů. Zkuste to prosím znovu později.";
                }),
                a("c3a1aebe", "Odebrat z týmu moderátorů"),
                a("c273c8a6", "Odebrat z týmu moderátorů?"),
                a("c0eb2a53", function (e) {
                    return "Uživatel @" + e.screenName + " už není moderátorem.";
                }),
                a("a5808125", function (e) {
                    return "Uživatele @" + e.screenName + " teď nejde z týmu moderátorů odebrat. Zkuste to prosím znovu později.";
                }),
                a("a51d671b", function (e) {
                    return "Zakázat @" + e.screenName + " z komunity";
                }),
                a("cdd87524", "Zatím tu nikdo není"),
                a("cca51910", "Jakmile se k této komunitě připojí nějací lidé, zobrazí se tady."),
                a("c9d56b72", "Řekněte nám něco o své komunitě. Tyto podrobnosti můžete kdykoli později změnit."),
                a("c1ad5a12", "Máme teď nějaké potíže s vytvořením vaší nové komunity. Zkuste to prosím znovu později."),
                a("f713fbd2", "Členství"),
                a("d1fa71fc", "Otázka ohledně schválení (volitelná)"),
                a("a0a16d38", "Kdokoli se může připojit nebo být do komunity pozván."),
                a("ce0523a8", "Omezené"),
                a("i1aad6ec", "Lidé musí požádat o připojení a tyto žádosti musí schválit tým moderátorů. Lidé pozvaní týmem moderátorů se schvalují automaticky."),
                a("c85960a0", "Povolit členům zvát další lidi"),
                a("ca373cd2", "Lidé pozvaní stávajícími členy budou automaticky schváleni."),
                a("dfdcc6b4", "Můžete určit, kdo se ke komunitě může připojit. Pamatujte přitom, že všechny komunity jsou na platformě X viditelné pro kohokoli."),
                a("h3e55b40", "Název komunity"),
                a("dd71d9c9", function (e) {
                    return "Název musí mít od " + e.minCharacterCount + " do " + e.maxCharacterCount + " znaků a nesmí obsahovat hashtagy ani @uživatelská_jména.";
                }),
                a("cf65e56b", function (e) {
                    return "Název musí obsahovat od " + e.minCharacterCount + " do " + e.maxCharacterCount + " znaků.";
                }),
                a("d936eeca", "Názvy nemůžou obsahovat hashtagy ani @uživatelská_jména."),
                a("e2df7cf2", "Účel komunity"),
                a("be9bb312", "Účel by měl popsat vaši komunitu a dát lidem vědět, co mají očekávat."),
                a("e988475f", function (e) {
                    return "Účel musí obsahovat od " + e.minCharacterCount + " do " + e.maxCharacterCount + " znaků.";
                }),
                a("gcddfba8", "Otázka ohledně schválení"),
                a("hf86d862", "Když uživatelé požádají o připojení, mohou na tuto otázku odpovědět. Jejich odpověď se zobrazí s jejich žádostí. Odpověď můžete odebrat tím, že ji necháte prázdnou."),
                a("i88b7305", function (e) {
                    return "Otázka musí mít méně než " + e.maxCharacterCount + " znaků.";
                }),
                a("dce5e1b4", "Nástroje pro správu"),
                a("c5d8c93e", "Nástroje pro moderátory"),
                a("c8c7f9fc", "Je potřebná kontrola"),
                a("a87df2ee", "Správa komunity"),
                a("ee609174", "Obecné nastavení"),
                a("ab19cdaa", "Nastavení spamu"),
                a("d755f47d", function (e) {
                    return e.count + " nové post" + n(e.count, "y", "y", "", "y") + " ke kontrole";
                }),
                a("efc26607", function (e) {
                    return e.memberCount + " člen" + n(e.memberCount, "ové", "ové", "", "ů");
                }),
                a("adfcc3ce", "Přidat, smazat nebo upravit pravidla"),
                a("d0330d9c", "Zobrazit pravidla"),
                a("fd67f7c8", "Upravit název a účel komunity a další nastavení"),
                a("e7e31264", "Upravte filtr spamu a nástroje pro hlášení"),
                a("gc00d212", "Podpora a zdroje"),
                a("g0cbfc50", "Užitečné rady k moderování komunity"),
                a("h6ebcfca", "Zobrazte tuto komunitu ve svém profilu"),
                a("c0fa0634", "Zvýrazněte svou komunitu"),
                a("da035fd5", function (e) {
                    return "Novinka" + e.ttc_c9s_spotlight_header;
                }),
                a("h41224f8", "Zvýrazněte svou komunitu ve svém profilu"),
                a("b18e94b2", "Pokud si chcete v profilu zobrazit komunitu, podívat se na anylýzy cílových sklupin a získat další možnosti, přepněte na profesionální profil."),
                a("dc716b1c", "Seznam komunity"),
                a("c3e2dda6", "Přidání nebo odebrání seznamu komunity"),
                a("a68bffdc", "Podívejte se na metriky komunity"),
                a("c6ea29a2", "Opustit tým moderátorů"),
                a("a6e13fac", "Opravdu chcete tým moderátorů opustit?"),
                a("e538848c", "Nebudete už mít přístup k nástrojům pro moderátory. Pokud si to později rozmyslíte, budete muset získat novou pozvánku do role moderátora."),
                a("j49e6aa2", "Ano, chci odejít"),
                a("dde5f323", function (e) {
                    return e.count + " nov" + n(e.count, "é žádosti", "ých žádostí", "á žádost", "ých žádostí") + " o členství ke kontrole";
                }),
                a("f5e0332a", "Obsah pro dospělé (NSFW)"),
                a("e983404a", "Připnuté hashtagy"),
                a("j8af8eaa", "Typ členství"),
                a("d5f01116", "Účel"),
                a("c2ff3c9e", "Vyhledávací tagy"),
                a("f4a98e9e", "Informace o komunitě"),
                a("a43bed28", "Toto nastavení musíte povolit, pokud vaše komunita obsahuje citlivý obsah pro dospělé. Pokud toto vynecháte, dojde k automatickému filtrování veškerého citlivého obsahu pro dospělé ve vaší komunitě."),
                a("ab1069de", "Smazat komunitu"),
                a("bbc91896", "Tuto akci nejde vzít zpět. Autoři postů nadále uvidí své posty."),
                a("i27eb0b7", function (e) {
                    return "" + e.communityName;
                }),
                a("a49f884e", "Banner komunity"),
                a("ea965b82", "Upravit banner komunity"),
                a("j35d3ad6", "Odstranit a nahradit"),
                a("f1e8fb22", "Váš banner bude odstraněn a nahradí jej výchozí banner."),
                a("e405ec22", "Máme teď nějaké potíže s uložením vašeho bannerového obrázku. Zkuste to prosím znovu později."),
                a("b7fb6bda", "Oříznout obrázek"),
                a("e71cdf4e", "Oříznout miniaturu"),
                a("ef199198", "Vaše nastavení bylo uloženo."),
                a("ee10aa5a", "Vaše nastavení nebylo možné uložit."),
                a("i307a7ca", "Upravit připnuté hashtagy"),
                a("dc6eca54", "Hashtag odstraněn"),
                a("d27de326", "Připněte hashtagy a uspořádejte posty vaší komunity do samostatných časových os."),
                a("d84cc77a", "Sem napište hashtag."),
                a("d22e4cba", "Hashtag by měl být jedinečný."),
                a("ca72a540", "Dosáhli jste maximálního povoleného počtu hashtagů."),
                a("bd96bf16", "Hashtagy by měly obsahovat minimálně 1 znak a maximálně 30 znaků."),
                a("j27623d4", "Hashtagy by neměly obsahovat mezery ani speciální znaky."),
                a("c5d1634e", "OK, rozumím"),
                a("daedd9fa", "Tímto se povolí připojení ke komunitě komukoli. Všechny nevyřízené žádosti o připojení budou automaticky schváleny."),
                a("h3c0f1a2", "Upravit název komunity"),
                a("cb5e6510", "Máme teď nějaké potíže s uložením nového názvu. Zkuste to prosím znovu později."),
                a("a8955490", "Upravit účel"),
                a("ced2292a", "Máme teď nějaké potíže s uložením popisu účelu. Zkuste to prosím znovu později."),
                a("ba74c098", "Upravit otázku"),
                a("bd3e0420", "Máme teď nějaké potíže s uložením vaší otázky. Zkuste to znovu později."),
                a("b57baa7a", "Upravit vyhledávací tagy"),
                a("f8caab7a", "Přidejte vyhledávací tagy pro boostování vaší komunity v doporučeních a ve výsledcích vyhledávání."),
                a("f35a667a", "Sem napište vyhledávací tag"),
                a("b057d5c6", "Vyhledávací tagy by měly být jedinečné"),
                a("cc961258", "Dosáhli jste maximálního povoleného počtu vyhledávacích tagů"),
                a("df4aca88", "Vyhledávací tagy by měly mít minimální délku 1 znak a maximální délku 30 znaků"),
                a("ie58fa58", "Vyhledávací tagy by neměly obsahovat mezery ani speciální znaky"),
                a("hd176a01", function (e) {
                    return "Téma uloženo! Téma komunity je nyní " + e.newTopicName;
                }),
                a("i39a43cc", "Téma komunity bylo odebráno"),
                a("e81b196e", "Nové téma nelze uložit"),
                a("c1f97ad4", "Upravit téma"),
                a("g908eb0c", "Přidejte téma, abyste ostatním usnadnili objevování vaší komunity! Vyberte téma, které nejlépe vyhovuje vaší komunitě."),
                a("f18a8ca0", "Nastavení spamu"),
                a("c8bd5d42", "Síla filtru spamu"),
                a("gfeb40a2", "Filtry spamu lze upravit na různé úrovně citlivosti a spravovat tak nežádoucí posty."),
                a("h766865c", "Automaticky nahlášeno platformou X"),
                a("fd1f413a", "Automatické hlášení moderátorům s vybranými funkcemi. Jakmile bude post schválen, další posty od stejného autora nebudou platformou X hlášeny."),
                a("b1ba5fb4", "Detekce spammera"),
                a("ee195f28", "Klíčová slova spamu"),
                a("cf276a82", "Skrýt posty nahlášené platformou X, dokud je neschválí moderátoři"),
                a("a8c4c3fe", "Nahlaste posty od uživatelů s historií používání spamů"),
                a("j8de95ec", "Zadejte klíčová slova, která budou spouštět automatická hlášení"),
                a("ie873142", "Vysoké"),
                a("a977afa2", "Nízké"),
                a("j715cb38", "Upravit zakázaná klíčová slova"),
                a("b32ebbe8", "Přidejte klíčová slova pro X, aby došlo k automatickému nahlášení moderátorům komunity"),
                a("acde5366", "Zde napište klíčové slovo"),
                a("a5f66c34", "Klíčová slova by měla být jedinečná"),
                a("ea637914", "Dosáhli jste maximálního povoleného počtu klíčových slov"),
                a("fede6d3c", "Klíčová slova by měla obsahovat minimálně 1 znak a maximálně 30 znaků"),
                a("cc06e200", "Klíčová slova by neměla obsahovat mezery ani speciální znaky"),
                a("d94edeb4", "Vaše komunita může mít až 10 pravidel. Jasná pravidla pomáhají zajistit, aby lidé konverzovali s respektem a k věci."),
                a("j560c8ea", "Přidat pravidlo"),
                a("a9ba79c0", "Dobrá pravidla jsou základem dobré komunity"),
                a("h5482c7a", "Pravidla komunity si prosím dobře promyslete. Udávají tón a informují členy o tom, co mají očekávat."),
                a("d5033a7a", "Požadujete například, aby se konverzace striktně držely tématu? Je povolená sebepropagace? A co hrubá slova?"),
                a("ee8c43a0", "Čím jasnější pravidla nastavíte hned od začátku, tím méně moderování vás bude čekat později."),
                a("gaa3239a", "Máme teď nějaké potíže s uložením nového pravidla. Zkuste to prosím znovu později."),
                a("a67445d6", "Dosáhli jste maxima"),
                a("fcbe0993", function (e) {
                    return "Komunity můžou mít maximálně " + e.maxRuleCount + " pravidel. Pokud chcete přidat nové pravidlo, musíte napřed smazat některé ze stávajících.";
                }),
                a("c66769a4", "Pravidlo"),
                a("ef02695b", function (e) {
                    return "Názvy pravidel musí obsahovat od " + e.minCharacterCount + " do " + e.maxCharacterCount + " znaků";
                }),
                a("c8242020", "Popis (nepovinný)"),
                a("d32cf5e7", function (e) {
                    return "Popisy můžou obsahovat maximálně " + e.maxCharacterCount + " znaků";
                }),
                a("f8fa00c7", function (e) {
                    return "Descriptions can’t exceed " + e.maxCharacterCount + " characters";
                }),
                a("d45ae5e0", "Nezapomeňte informovat komunitu"),
                a("c1631260", "Členové komunity by vždycky měli vědět o změnách pravidel. Pomáhá to budovat důvěru."),
                a("d3190bde", "Uložit pravidlo"),
                a("ifd6e91c", "Zrušit a upravit pravidlo"),
                a("h99020e0", "Upravit pravidlo"),
                a("f74a5adc", "Komunity musí mít nejméně jedno pravidlo. Můžete buď upravit stávající pravidlo, nebo přidat další pravidlo a pak toto smazat."),
                a("fbb0ed92", "Smazat toto pravidlo"),
                a("hed35472", "Smazání pravidla je trvalé a nedá se vzít zpět."),
                a("c8677446", "Smazat pravidlo"),
                a("c3a0d44e", "Ponechat a upravit"),
                a("d703ce9e", "Přidání seznamu do vaší komunity"),
                a("f21f023c", "Přidání seznamu do vaší komunity vyplní hlavní stránku obsahem vybraným pro vás. Vyberte jeden z těchto seznamů:"),
                a("gbc2cf50", "Vaše seznamy"),
                a("ef9462fa", "Nemáte relevantní seznam?"),
                a("fcda89f4", "Vytvořte nový seznam s účty v X, které postují obsah relevantní pro vaši komunitu. Nastavte svůj seznam jako veřejný, aby ho komunita viděla."),
                a("c09609d8", "Vytvořit seznam"),
                a("dfddd842", "Odesláno v soukromé zprávě"),
                a("a3b3939b", function (e) {
                    return "Uživatel @" + e.screen_name + " už je pozvaný";
                }),
                a("db4f0cc9", function (e) {
                    return "@" + e.screen_name + " už je v této komunitě";
                }),
                a("h252ede6", "Využili jste už všechny své pozvánky"),
                a("a5cd93f9", function (e) {
                    return "Uživatele @" + e.screen_name + " momentálně nejde pozvat";
                }),
                a("i6568549", function (e) {
                    return "Zbývá vám: " + e.remaining_invite_count + " pozván" + n(e.remaining_invite_count, "ky", "ek", "ka", "ek");
                }),
                a("b4f16d00", "Vyhledejte lidi, které chcete pozvat"),
                a("ja1387a8", "Výsledky hledání budou zahrnovat jenom vaše sledující a lidi, kteří mají povolené soukromé zprávy od kohokoli."),
                a("ae85768c", "Výsledky hledání zahrnují jenom vaše sledující a lidi, kteří mají povolené soukromé zprávy od kohokoli."),
                a("hb1e378e", "Pozván(a)"),
                a("d710b60c", "Analýza komunity"),
                a("c199e390", "Nové posty"),
                a("b4f51cd6", "Počet postů vytvořených minulý týden"),
                a("g6f8325a", "Noví členové"),
                a("b2bb7276", "Počet členů, kteří se minulý týden připojili"),
                a("e2172c92", "Aktivní členové"),
                a("fe1a9f68", "Počet členů, kteří přidali posty do vaší komunity"),
                a("e989927e", "Jedineční postující"),
                a("d1386a90", "Počet členů, kteří vytvořili post ve vaší komunitě"),
                a("abf609f2", "Celkový počet členů"),
                a("h2081878", "Celkový počet členů vaší komunity"),
                a("a3235cd6", "Jedinečné návštěvy"),
                a("g21e2a70", "Počet uživatelů Twitteru, kteří navštívili vaši komunitu za poslední týden"),
                a("ied6bac2", "Počet lajků"),
                a("ced8d39a", "Počet lajků ve vaší komunitě za minulý týden"),
                a("fb4f859c", "Počet odpovědí"),
                a("h5a41cce", "Počet odpovědí ve vaší komunitě za minulý týden"),
                a("i314218e", "Zobrazují se metriky za posledních 7 dnů. Aktualizováno "),
                a("addbb11e", "Žádné nové žádosti o členství"),
                a("c38131de", "Máte všechno vyřízené. Jakmile přijdou nové žádosti, uvidíte je tady."),
                a("d7f13fb9", function (e) {
                    return "Uživatel @" + e.screenName + " byl schválen a je teď členem vaší komunity";
                }),
                a("a340df67", function (e) {
                    return "Uživatel @" + e.screenName + " byl zamítnut a nemůže se k vaší komunitě připojit";
                }),
                a("jd8aae9d", function (e) {
                    return "Uživatele @" + e.screenName + " teď není možné schválit. Zkuste to znovu později.";
                }),
                a("i580e149", function (e) {
                    return "Vypadá to, že uživatele @" + e.screenName + " teď nejde zamítnout. Zkuste to prosím znovu později.";
                }),
                a("b4a38e4e", "Tohoto uživatele jste zablokovali. Pokud mu bude schváleno členství, budete ho muset odblokovat, jinak nebudou vidět jeho posty."),
                a("f0956736", "Tohoto uživatele jste skryli. Pokud mu bude schváleno členství, budete muset skrytí zrušit, jinak nebudou vidět jeho posty."),
                a("b7f1e58a", "vás sleduje"),
                a("dffb0774", "Teď tu není nic ke kontrole"),
                a("ab512f26", "Nebyl zaznamenán žádný protokol akce."),
                a("b8171558", "Zakázáno"),
                a("e32e7e1a", "Moderátor"),
                a("b53fb7c6", "Zdá se, že tuto akci nyní nemůžeme vrátit. Zkuste to znovu později."),
                a("c546ba07", function (e) {
                    return "Zobrazit profil uživatele " + e.userName;
                }),
                a("h4516e4f", function (e) {
                    return "Hledejte posty " + e.userName + " v této komunitě";
                }),
                a("j4d4a809", function (e) {
                    return e.moderatorName + " skryl post";
                }),
                a("ja589ea5", function (e) {
                    return e.revertedModeratorName + " zrušil skrytí postu";
                }),
                a("c904a2ff", function (e) {
                    return e.moderatorName + " připnul post";
                }),
                a("b43358cf", function (e) {
                    return e.moderatorName + " zrušil připnutí postu";
                }),
                a("bb6299a7", function (e) {
                    return "" + e.moderatorName;
                }),
                a("f0347599", function (e) {
                    return "" + e.moderatorName;
                }),
                a("e33d133b", function (e) {
                    return "" + e.moderatorName;
                }),
                a("c29ec092", function (e) {
                    return "" + e.revertedModeratorName;
                }),
                a("f6530972", "Zrušit skrytí postu"),
                a("j68fc824", "Skrytí zrušeno"),
                a("j9541e18", "Vyhledat posty"),
                a("j10903d7", function (e) {
                    return e.moderatorName + " odebral člena";
                }),
                a("e38bf285", function (e) {
                    return e.revertedModeratorName + " obnovil člena";
                }),
                a("dea0d437", function (e) {
                    return e.userName + " se připojil k této komunitě";
                }),
                a("j10346f5", function (e) {
                    return e.userName + " opustil tuto komunitu";
                }),
                a("jb159607", function (e) {
                    return e.moderatorName + " schválil žádost člena";
                }),
                a("af7a63eb", function (e) {
                    return e.moderatorName + " zamítl žádost člena";
                }),
                a("i717dfc3", function (e) {
                    return e.revertedModeratorName + " znovu schválil žádost člena";
                }),
                a("ce5ac32b", function (e) {
                    return "" + e.moderatorName;
                }),
                a("a7f869a4", function (e) {
                    return "" + e.revertedModeratorName;
                }),
                a("efad949a", function (e) {
                    return "" + e.userName;
                }),
                a("d0ae5998", function (e) {
                    return "" + e.userName;
                }),
                a("ef020751", function (e) {
                    return "" + e.moderatorName;
                }),
                a("a46c5a63", function (e) {
                    return "" + e.moderatorName;
                }),
                a("h55401a4", function (e) {
                    return "" + e.revertedModeratorName;
                }),
                a("d31e695c", "Znovu schválit žádost"),
                a("i9a18ce0", "Znovu schváleno"),
                a("i24de0fe", "Obnovit člena"),
                a("b1c662f8", "Obnoveno"),
                a("j2e04b1e", "Moderátoři se už postarali o všechny nahlášené posty."),
                a("hb21cdb6", "Zákaz"),
                a("dc7a9436", "Nahlásit post na platformu X"),
                a("e2bc5db0", "@X"),
                a("d0a1b248", function (e) {
                    return "" + n(e.count, e.formattedCount + " členové", e.formattedCount + " členů", e.formattedCount + " člen", "Počet členů: " + e.formattedCount);
                }),
                a("cd4d48d2", "@X"),
                a("ff0f742a", function (e) {
                    return e.formattedCount + " člen" + n(e.count, "ové", "ů", "", "ů");
                }),
                a("dca19c06", "Tento post jste skryli"),
                a("dd641764", "Tento post jste ponechali"),
                a("jf99d610", "Zpětná vazba komunity"),
                a("bbd69672", "Tento post byl skryt moderátorem kvůli porušení pravidel komunity"),
                a("c730a21c", "Porušeno bylo toto pravidlo:"),
                a("a5baa7d2", "Věnujte chvilku tomu, abyste se s těmito pravidly seznámili. Pomáhají zajistit, aby konverzace byly bezpečné a k věci."),
                a("icc32e3d", function (e) {
                    return "Moderátor vás odebral z komunity " + e.communityName + " kvůli porušení tohoto pravidla:";
                }),
                a("d7d9be8a", "Objevte komunity a posty"),
                a("cae9962e", "Nepodařilo se najít žádné komunity."),
                a("c2117be6", "Vidíte ty věci v navigaci? 👀"),
                a("c2c4dad4", "Některou z nich vyberte, rozbalí se tady. Pusťte se do toho, my počkáme."),
                a("b7218496", "Zatím žádné hashtagy"),
                a("gc09bcfe", "Ve vaší komunitě zatím nejsou žádné konverzace označené hashtagy, ale můžete to změnit."),
                a("cf35a990", "Načítají se komunitní posty s hashtagy"),
                a("a1c41fe8", "Komunitní posty s hashtagy"),
                a("f27a2232", "Hledat komunitu"),
                a("ie2efe36", "Výsledky hledání komunit"),
                a("a7c2e06d", function (e) {
                    return "Komunita " + e.communityName;
                }),
                a("a94092a2", "Teď máte přístup k nástrojům pro moderátory"),
                a("be6dfbae", "Jako moderátor komunity můžete přidávat a odebírat členy."),
                a("b4f877be", "Komunitu se nepodařilo najít"),
                a("e48fbb02", "Nahlásit komunitu"),
                a("b1614c34", "O komunitách"),
                a("j1dcedde", "Vyhledat posty"),
                a("cc683fba", "O komunitě"),
                a("af7c11aa", "Informace o komunitě"),
                a("fb974b24", "Postovat můžou pouze členové."),
                a("fcef2922", "Do této komunity se může připojit kdokoli."),
                a("c93dd2c8", "Pokud se chcete připojit do této komunity, musíte o to požádat a počkat na schválení."),
                a("gedb877d", "Všechny komunity jsou viditelné veřejně."),
                a("bf359e0e", "Informace o vaší nové komunitě"),
                a("e8fcdd3a", "Pro začátek vám nastavíme několik základních možností, ale komunitu si můžete kompletně přizpůsobit. K tomu se dostaneme v dalším kroku."),
                a("b37d580e", "Vaše komunita je omezená"),
                a("c6d9c07c", "Všechny komunity jsou na platformě X viditelné pro všechny. Když se lidé chtějí k vám do komunity připojit, musí o to požádat nebo je musí pozvat někdo z moderátorů, případně stávajících členů (pokud je tato možnost povolená)."),
                a("ea3b38fa", "Vaše komunita je otevřená"),
                a("i625c42e", "Všechny komunity jsou na platformě X viditelné pro všechny. K vám do komunity se může připojit nebo být pozván kdokoli."),
                a("ca7eeab0", "Počáteční pravidla vaší komunity"),
                a("acae4034", "Nastavení změníte v nástrojích pro správu"),
                a("e2186ee2", "Nevyhovují vám nastavení? To není žádný problém. Můžete je snadno změnit."),
                a("a0e3ece4", "Podrobnosti o komunitě"),
                a("d11f73ea", "Obsah pro dospělé"),
                a("hb9400dc", "Zobrazit víc"),
                a("b71a08a0", "Komunita předplatitelů"),
                a("d0574662", "Nastavit oznámení"),
                a("fc16f13a", "Která oznámení chcete dostávat?"),
                a("be341c46", "Komunitní Prostory (zvukové chaty)"),
                a("fbe88a32", "Živé textové chaty v komunitě"),
                a("b551cd1e", "Připnuté posty"),
                a("i9f39962", "Připnout komunitu"),
                a("bc7f90a0", "Zvýrazněte komunitu ve svém profilu"),
                a("j5a37508", "Připnout komunitu na hlavní stránku"),
                a("c7a4610a", "Odepnout komunitu z hlavní stránky"),
                a("bec3b8fa", "Sdílet komunitu"),
                a("cc7d5b88", "Pozvat přes SZ"),
                a("c66b37fa", "Kontrolní seznam"),
                a("g2768d0e", "Už jen pár věcí, aby byla vaše komunita připravená na úspěšný start..."),
                a("b192b58c", "Zavřít kontrolní seznam"),
                a("gd302780", "Podívejte se do mojí komunity:"),
                a("h5890b1a", "Nedokončeno"),
                a("b4a6faca", "Zkontrolujte si pravidla"),
                a("a01e1a7c", "Přizpůsobte svou komunitu"),
                a("f493480c", "Postněte své komunitě"),
                a("i9b7f6ba", "Nahrávání postů"),
                a("c22e8902", "Vyzkoušet"),
                a("a3466e1c", "Sledujte konverzace pomocí hashtagů"),
                a("a524bb7e", "Hashtagy umožňují v komunitě snadno vytvářet konverzace na různá témata, hledat je a zapojovat se do nich."),
                a("he8db880", "Vypadá to, že tato komunita neexistuje"),
                a("cc684fbc", "Možná ji někdo smazal, nebo možná ani nikdy neexistovala. Život je plný záhad."),
                a("b4f8b518", "Tvůrci pro vás"),
                a("f5c41e22", "Přejděte do nastavení funkce Delegování"),
                a("b9226ec1", "Přihlášen(a) jako "),
                a("f47b48f6", "uživatel"),
                a("b2ca74aa", "Chystáte se přepnout na delegovaný účet"),
                a("ba77b438", "Přepnout účty"),
                a("g5261e91", function (e) {
                    return "Nyní vystupujete jako @" + e.screenName + ".";
                }),
                a("cc15a3ea", "Nezapomeňte, že tento účet vám nepatří. Jako správce můžete posílat soukromé zprávy, publikovat posty či vytvářet seznamy a také je prohlížet. Dále můžete zvát přispěvatele na účet nebo je odebírat a zobrazovat si analýzu postů."),
                a("e406250c", "Nezapomeňte, že tento účet vám nepatří. Jako přispěvatel můžete posílat soukromé zprávy, publikovat posty nebo vytvářet seznamy a také je prohlížet."),
                a("e6718a62", "Tuto funkci může používat jenom vlastník účtu"),
                a("ba411b6f", "pošlete zpětnou vazbu"),
                a("f01ee14b", "pošlete zpětnou vazbu"),
                a("dbc85148", "Vyberte zprávu"),
                a("a073658c", "Zvolte si z existujících konverzací, začněte novou, nebo jen dál zkoumejte."),
                a("f325afc4", "Napsat zprávu"),
                a("f5dc353c", "Grafická média jsou filtrována"),
                a("daeda054", "Přejít na nastavení"),
                a("fe1eaa96", "Přes zprávy, u kterých bylo zjištěno, že mohou obsahovat grafická média (například nahotu, sexuální obsah nebo násilí), se budou zobrazovat upozornění. Tuto funkci můžete později kdykoli vypnout v nastaveních."),
                a("hc32acba", "Odstranit žádosti o zprávu?"),
                a("f9048f58", "Tuto akci nelze vrátit zpět a vybrané žádosti o zprávu budou odstraněny z vaší doručené pošty."),
                a("a9d0d7f0", "Hromadná úprava"),
                a("eb7de4aa", "Zobrazit další zprávy včetně těch, které mohou obsahovat urážlivý obsah."),
                a("ee8c0c8a", "Tady najdete příchozí zprávy nebo skupinové zprávy od lidí, které nesledujete. Budete je moct přijmout nebo smazat."),
                a("ff599112", "Vytvořit skupinu"),
                a("c602600a", "Přidat lidi"),
                a("fa2033f6", "Šifrováno"),
                a("aa59bb6a", "Poslat post samostatně"),
                a("a2ccb2e8", "Soukromá zpráva byla odeslána."),
                a("f906f464", "Post sdílen ve skupině"),
                a("i8a99aae", "Post se nasdílel samostatně."),
                a("hbbc401c", "Odeslat skupině"),
                a("e1bde73f", function (e) {
                    return "Uživateli @" + e.screenName + " nelze poslat zprávu.";
                }),
                a("f7289cd6", "Máte vybranou skupinovou konverzaci"),
                a("e6cced4e", "Skupině lze odeslat pouze konverzace 1 na 1. Svou zprávu můžete stále poslat samostatně."),
                a("e3e58b6e", "Informace o konverzaci"),
                a("a9ddbb94", "Informace o skupině"),
                a("dd4779a0", "Správa označení"),
                a("ca9af866", "Označení:"),
                a("e62d3c10", "Pod tímto názvem není veden žádný účet. Zkuste to znovu."),
                a("h8403fb6", "Tyto uživatele momentálně nejde do této konverzace přidat."),
                a("ja522ed4", "Některé z těchto uživatelů do této konverzace momentálně nejde přidat."),
                a("d87bff5a", "Načítají se informace o konverzaci."),
                a("cabb453e", "Název skupiny"),
                a("eb1bb5a2", "Zobrazit všechny"),
                a("a70436ac", "Napsat šifrovanou zprávu"),
                a("a7f20223", function (e) {
                    return "Ztišit oznámení od uživatele " + e.name;
                }),
                a("g2f04a6b", function (e) {
                    return "Zrušili jste ztišení uživatele " + e.name;
                }),
                a("i453fedf", function (e) {
                    return "Ztišeno do " + e.expiration;
                }),
                a("b3dfd51a", "Ztišit zmínky"),
                a("cc7c8ce6", "Vypněte oznámení o zmínkách vaší osoby v této konverzaci."),
                a("hab58674", "Zmínky vypnuty"),
                a("e3c6e080", "Zmínky zapnuty"),
                a("f33ef58a", "Nahlásit konverzaci jako nezákonný obsah v EU "),
                a("d1a6dbe6", "Blokovat všechno"),
                a("f24af200", "Blokovat soukromé zprávy"),
                a("a30e1677", function (e) {
                    return "Zablokujte uživatele @" + e.screenName + ", uživatel @" + e.screenName + " vás už nebude moci sledovat ani vám poslat zprávu a vy již neuvidíte žádná oznámení o uživateli @" + e.screenName + ".";
                }),
                a("iae09949", function (e) {
                    return "Blokovat soukromé zprávy od @" + e.screenName + "?";
                }),
                a("e778e3d8", "Zablokování soukromých zpráv bylo úspěšné"),
                a("b7867912", "Odblokovat všechno"),
                a("gaddb872", "Odblokovat soukromé zprávy"),
                a("d83414a1", function (e) {
                    return "Chcete uživatele @" + e.screenName + "odblokovat? Po odblokování vás bude moci sledovat a zobrazit vaše posty.";
                }),
                a("a5bbfecd", function (e) {
                    return "Odblokovat uživatele @" + e.screenName + "? Bude vás moci sledovat a zapojovat se do reakcí na vaše veřejné posty.";
                }),
                a("cde6e1ff", function (e) {
                    return "Odblokovat soukromé zprávy od @" + e.screenName + "?";
                }),
                a("j37c4674", "1 hod"),
                a("je7e1fed", function (e) {
                    return "Ztišili jste uživatele " + e.name + " na 1 hodinu";
                }),
                a("hf94a2d6", "Skryto na 1 hodinu"),
                a("fb7a43c6", "8 hod"),
                a("e95c8f8b", function (e) {
                    return "Ztišili jste uživatele " + e.name + " na 8 hodin";
                }),
                a("bd54fad2", "Skryto na 8 hodin"),
                a("cb5bf56e", "1 týden"),
                a("gb7a130b", function (e) {
                    return "Ztišili jste uživatele " + e.name + " na 1 týden";
                }),
                a("f6fce0fe", "Skryto na 1 týden"),
                a("i78153dd", function (e) {
                    return "Ztišili jste uživatele " + e.name + " navždy";
                }),
                a("je9455da", "Zprávy jsou šifrovány"),
                a("b5b0afa4", "Přizpůsobte si zobrazení"),
                a("ec5880e6", "Tato nastavení ovlivňují všechny účty X v tomto prohlížeči."),
                a("babfa32c", "Rychlé přizpůsobení zobrazení"),
                a("a2a2f98e", "Podívejte se, co je nového"),
                a("b4a361c0", "Hned teď si můžete přizpůsobit velikost textu a ovládat fungování tmavého režimu. Toto nastavení je viditelné pouze vám."),
                a("c797b44e", "Nejnovější příběhy na platformě X vyprávěné prostřednictvím postů."),
                a("a19ce060", "Funkce Prozkoumat není dostupná."),
                a("f7d1a8e0", "Aplikace pro Android"),
                a("aab2fae0", "Aplikace pro iOS"),
                a("a35d9c9a", "Zdroje"),
                a("da00e00a", "Vyzkoušejte nové Novinky"),
                a("c40666d8", "Vyzkoušet"),
                a("ic61c5fc", "Posunout nahoru"),
                a("dd225af8", "Nenalezeni žádní lidé."),
                a("i6671128", "Teď můžete využívat více z toho, co platforma X nabízí"),
                a("d5e4d0a6", "Můžete se snadněji zapojit do konverzace a spojit s dalšími lidmi. Teď máte tyto možnosti:"),
                a("a97bc07e", "Využijte více z toho, co platforma X nabízí"),
                a("a72188d6", "Aby byla platforma X skvělé místo pro všechny, chtěli bychom mít jistotu, že tento účet provozuje člověk. Pomozte nám to ověřit tím, že strávíte nějaký čas nastavováním své časové osy a navazováním spojení s dalšími lidmi. Jakmile budeme mít jistotu, přinese vám to tyto výhody:"),
                a("a4ee9572", "Uvidí vás více lidí"),
                a("e5f4eac0", "Váš obsah půjde snadněji objevit. A budete se zobrazovat na čelních příčkách výsledků hledání a trendů."),
                a("c7832a72", "Spojte se přímo s ostatními"),
                a("i1ccd17a", "Posílejte soukromé zprávy lidem, kteří vás nesledují, a nemějte obavy, že by mohly být automaticky odfiltrovány."),
                a("hc965308", "Zábava"),
                a("eb78b77e", "Režim Zábava"),
                a("aa8ece10", "Vyzkoušejte grok.com"),
                a("gb5fb7d0", "Režim Soustředit se"),
                a("g5665caa", "Ukončit režim Soustředit se"),
                a("a372681e", "Kopírovat odkaz na sdílení"),
                a("fbc79f6a", "Historie chatu"),
                a("b61ad410", "Historie"),
                a("b3de2628", "Historie chatu není dostupná"),
                a("acfbfb28", "Zde se zobrazí vaše budoucí konverzace."),
                a("i1147548", "Prohledat historii funkce Grok"),
                a("ab437026", "Nebyly nalezeny žádné konverzace"),
                a("e12569ec", "Zkuste vyhledat něco jiného."),
                a("d4eb0e26", "Přejmenovat"),
                a("c64975ea", "Dosud jste nezařadili žádné konverzace mezi oblíbené"),
                a("a3e3db6e", "Kliknutím na hvězdičku uložíte chaty, ke kterým se často vracíte"),
                a("f4ae77ac", "Historie obrázku není dostupná"),
                a("d57d337e", "Vaše vygenerované obrázky se objeví zde."),
                a("dab087ee", "Chaty"),
                a("a911623c", "Obrázky"),
                a("ae9cdac6", "Historie chatu"),
                a("b198a392", "Konverzace s Grok"),
                a("d16329b4", "Zkopírovat konverzaci"),
                a("af6c4470", "Něco se nepovedlo. Zkuste to znovu."),
                a("gf43d270", "Pokračovat v této konverzaci"),
                a("f4b5fae2", "Odesláním zprávy se tato konverzace zkopíruje do vaší historie"),
                a("eb0d91ac", "Vytvořit obrázek pomocí aplikace Grok"),
                a("c5a23514", "Nakresli mě"),
                a("g1cb8096", "Překvapte mě"),
                a("a5a3df56", "Popište obrázek, který chcete vygenerovat"),
                a("gbb4e90a", "náhodný svět z psychedelického snu"),
                a("af21f92e", "ráj"),
                a("e207cba2", "náhodná sportovní akce"),
                a("b1323f10", "modelka na molu pařížského týdne módy"),
                a("g6a90174", "veselé hipsterské zvíře"),
                a("jdc4b66c", "div světa"),
                a("ec601934", "Upravit"),
                a("f9ecd3ba", "Vložit jako post"),
                a("af652514", "Rozdíl"),
                a("j95bac7a", "Přizpůsobit Groka"),
                a("c5665922", "Co by o vás měl Grok vědět?"),
                a("ff625c40", "Jak chcete, aby Grok odpovídal?"),
                a("e5c7d602", "Povolit pro všechny chaty"),
                a("d5e03fbc", "Kanál příspěvků Groka"),
                a("a294d0c6", "Vytvořte si svou verzi"),
                a("b38adba2", "X –⁠⁠⁠⁠⁠⁠ aplikace pro všechno"),
                a("d05ae004", "Zápas NHL"),
                a("d35ad22c", "Zobrazit nejnovější zápas NHL"),
                a("e806daa2", "Fotbalový zápas"),
                a("cc2c2eca", "Zobrazit nejnovější fotbalový zápas"),
                a("bcdeae66", "Portál F1 Grand Prix"),
                a("e30e4bea", "Sledujte akce Grand Prix na X."),
                a("be548ecb", function (e) {
                    return e.teamName1 + " - " + e.teamName2;
                }),
                a("b23bb579", function (e) {
                    return e.teamName1 + " - " + e.teamName2 + " aktualizace na X";
                }),
                a("b72c924c", "Hledání pracovní pozice"),
                a("f4da95a0", "Doporučení na pracovní pozice"),
                a("eedd808c", "Uložené pracovní pozice"),
                a("e0ba641a", "Pro společnosti"),
                a("f9e6381a", "Vyhledat práce"),
                a("fb15ec28", "Získejte doporučení na pracovní pozice"),
                a("ece910f0", "Zobrazujte si pracovní pozice založené na předvolbách"),
                a("jd08bc14", "Doporučení se časem zlepšují"),
                a("de0a4a72", "Zkontrolujte si, kde vidíte doporučení"),
                a("db8c4158", "Podat žádost"),
                a("d9c8057a", "Klikněte sem"),
                a("a71d7584", "Propagované"),
                a("d2b8da2c", "Softwarové inženýrství"),
                a("cd958040", "Data a analýza"),
                a("c5760ca2", "Produkt"),
                a("d31b4a2a", "Návrhářství"),
                a("f38959a6", "Prodeje"),
                a("bc78a26c", "Provoz podniku"),
                a("ec28738e", "Personalistika a HR"),
                a("icb06308", "Finance a účetnictví"),
                a("d0b978ec", "Právo a dodržování předpisů"),
                a("af19cdc2", "Věda a inženýrství"),
                a("e4a51fca", "Zdravotnictví"),
                a("e8ca78ae", "Stavebnictví a řemeslnické práce"),
                a("e25d75e4", "Interní"),
                a("e89b3f04", "Vstupní úroveň"),
                a("h55825dc", "Junior"),
                a("cc537386", "Střední úroveň"),
                a("jfc3cece", "Senior"),
                a("e1b683aa", "Vedení"),
                a("c4627fda", "Manažer"),
                a("db75b47c", "Vedení"),
                a("i312f0ce", "Na pobočce"),
                a("b4aff05e", "Hybridní"),
                a("c08b9138", "Na dálku"),
                a("ia5d6422", "Je vyžadována přítomnost na pracovišti"),
                a("h97c7f42", "Je vyžadována částečná přítomnost na pracovišti"),
                a("ibed2d04", "Není vyžadována přítomnost na pracovišti"),
                a("f508c49c", "Kopírovat odkaz na pracovní pozici"),
                a("d6825dce", "Sdílet prostřednictvím soukromé zprávy"),
                a("b9613442", "Sdílet přes post"),
                a("c2b3f0da", "Propagujte na profilu"),
                a("c791d3fc", "Sdílet pracovní pozici"),
                a("eb517058", "Společnosti zabývající se umělou inteligencí"),
                a("b677cb9b", function (e) {
                    return "Filtry společnosti: " + e.count;
                }),
                a("ja04d37c", "Zadejte názvy společností"),
                a("a1876045", function (e) {
                    return e.count + " fitry(ů) typů zaměstnání";
                }),
                a("fb146dd2", "Typ zaměstnání"),
                a("a7090408", "Klíčové slovo"),
                a("f16e9a15", function (e) {
                    return "Filtry typu umístění: " + e.count;
                }),
                a("fa7d455a", "Typ umístění"),
                a("caa606db", function (e) {
                    return "Filtry služebních let: " + e.count;
                }),
                a("jda06238", "Služební léta"),
                a("j595df68", "Aktualizujte si předvolby doporučení:"),
                a("a1227d5e", "Zapnout doporučení"),
                a("bae2f5f0", "Přidat tuto pracovní pozici do vašeho profilu"),
                a("cbcaaa1a", "Níže je náhled, jak to bude vypadat."),
                a("f58cf1ac", "Přidat pracovní pozici"),
                a("j4ae9960", "Došlo k problému během přidávání této pracovní pozice na váš profil."),
                a("caa352f0", "Příliš mnoho pracovních pozic"),
                a("i08bee0e", "Příliš mnoho propagovaných pracovních pozic"),
                a("d7ccaea2", "V současnosti můžete mít jen 3 aktivní pracovní pozice."),
                a("h05e4a7a", "Můžete propagovat maximálně 10 pracovních pozic."),
                a("b518daae", "Přejít na řídicí panel náboru"),
                a("f48e9c52", "Pracovní pozice byla úspěšně přidána."),
                a("f6757978", "Tuto pracovní pozici můžete odebrat nebo přidat další pracovní pozice z řídicího panelu náboru."),
                a("i329c5a6", "Zobrazit řídicí panel náboru"),
                a("h39a5448", "Propagujte své pracovní pozice pomocí náboru na platformě X!"),
                a("d204515c", "Přidejte pracovní pozice na svůj profil jediným kliknutím."),
                a("ecb3df70", "Posty událostí"),
                a("a01d5a7c", "Tento obsah není dostupný, protože ho vytvořil někdo, koho jste zablokovali."),
                a("cab51f93", function (e) {
                    return "Tento obsah nemůžete zobrazit, protože vás uživatel @" + e.screenName + " zablokoval.";
                }),
                a("eaaca5dc", "Skóre"),
                a("abdcd68a", "Načítání události"),
                a("cfb57adb", function (e) {
                    return "Post na téma " + e.hashtag;
                }),
                a("b1037710", "Podělte se o své myšlenky"),
                a("bb980db0", "Časová osa události"),
                a("ffd929c1", function (e) {
                    return "NOVINKA" + e.ttc_live_event;
                }),
                a("c9b302f8", "Zkuste se sem podívat na nejnovější produkty později."),
                a("cfe836d1", function (e) {
                    return e.percent + "% sleva";
                }),
                a("efb132c3", function (e) {
                    return e.title + " – " + e.description + " za " + e.price;
                }),
                a("f27deeea", "Dlaždice komerčního produktu"),
                a("e8166cee", function (e) {
                    return "" + e.formattedPrice;
                }),
                a("g66c8348", "ZÁZNAM"),
                a("j1d352d8", "Připomenutí nastaveno"),
                a("d18909d4", "Nastavit připomenutí"),
                a("b0b38774", "Média v záhlaví"),
                a("a7a119ec", "Odpojit"),
                a("cfadb00e", "Poslech"),
                a("db4620aa", "ŽIVÝ PROSTOR"),
                a("c958e692", "ZÁZNAM PROSTORU"),
                a("i2c2bfb7", function (e) {
                    return e.count + " poslouch" + n(e.count, "ají", "á", "á", "á");
                }),
                a("i3f7ff00", "Miniatura média"),
                a("h400d7c2", "PŘIPOJIT SE K PROSTORU"),
                a("be6ef5b4", "NADCHÁZEJÍCÍ"),
                a("ca25ebae", "Šance"),
                a("e749753a", "Rozpětí"),
                a("ea885dec", "Peníze"),
                a("cde48000", "Máte problém s hazardními hrami? Zavolejte 1-800-GAMBLER"),
                a("g53d5df6", "Zaměřeno"),
                a("d1e0a75f", function (e) {
                    return "Pro vás" + e.noun;
                }),
                a("dafd69e9", function (e) {
                    return "Sledování" + e.noun;
                }),
                a("d80a1c37", function (e) {
                    return "Jste předplatitelem" + e.noun;
                }),
                a("d3619250", "Nejvíce lajkované"),
                a("f5edfbde", "Odhlásit se z platformy X?"),
                a("f12b4db5", function (e) {
                    return "Odhlásit se z účtu @" + e.screenName + "?";
                }),
                a("ia5ff8b6", "Kdykoli se můžete znovu přihlásit. Pokud chcete jen přepnout účet, můžete tak učinit přidáním stávajícího účtu."),
                a("ea3750c4", "Toto nastavení se použije pouze pro tento účet, ke svým dalším účtům budete stále přihlášeni."),
                a("gc6866f8", "Odhlašování"),
                a("f8ad0092", "Omlouváme se, došlo k chybě. Zkuste se přihlásit znovu."),
                a("h2c7767e", "Vaše relace už není platná. Zkuste se znovu přihlásit."),
                a("e83047c2", "Zadali jste příliš mnoho nesprávných kódů. Zkuste se přihlásit znovu."),
                a("g4b108ee", "Vygenerovali jste příliš mnoho záložních kódů. Je třeba znovu aktivovat ověření přihlášení na vašem telefonu."),
                a("a9be9b44", "Pokračujte na platformu X"),
                a("e55188f0", "V tomto prohlížeči jste přihlášeni k tomuto účtu"),
                a("d55d8fe2", "Chcete pokračovat s tímto účtem?"),
                a("g806008e", "Přihlásit se k jinému účtu"),
                a("c55f5c9a", "Něco se pokazilo, ale netrapte se – není to vaše chyba. Zkuste to znovu."),
                a("bfb6be8a", "Vydělávejte peníze na X"),
                a("ed6c6da2", "Prvním krokem k monetizaci je získání ověření pomocí X Premium."),
                a("h93b6580", "Vydělávejte na sdílení vysoce kvalitního obsahu. Čím více zapojíte uživatele na X, tím více vyděláte."),
                a("eea6d8f8", "Způsobilost pro sdílení příjmů pro tvůrce"),
                a("a0e8811e", "Vybudujte si základnu fanoušků"),
                a("e1a74ac0", "Nabídněte exkluzivní obsah svým největším podporovatelům a získejte pravidelný příjem."),
                a("cd3a6f9a", "Způsobilost předplatných"),
                a("c35e6144", "Vytvářejte lepší obsah s nástroji Premium"),
                a("b9dbeb34", "Odemkněte delší posty, Media Studio, Analytics a získejte prioritní podporu."),
                a("b2d41138", "Větší dosah = větší příjmy"),
                a("defa7f12", "Získejte benefit za zvýšení odpovědi, což vám poskytne větší viditelnost, abyste mohli rychleji růst."),
                a("i3e4955d", "Zde"),
                a("fdc5d06c", "Ukončit zobrazení na celou obrazovku"),
                a("cea1c00e", "Odblokujte schopnost zapojení se"),
                a("f8e6a280", "Nové účty jsou povinny zaplatit malý roční poplatek, než budou moci postovat, lajkovat, přidávat do záložek a odpovídat. Cílem je omezit spam a vytvořit lepší zážitek pro všechny. Stále můžete sledovat účty a procházet X zdarma."),
                a("h968efc6", "Nové účty jsou povinny zaplatit malý poplatek, než budou moci postovat, lajkovat, přidávat do záložek a odpovídat. Cílem je omezit spam a vytvořit lepší zážitek pro všechny. Stále můžete sledovat účty a procházet X zdarma."),
                a("b66b62a4", "Smluvní podmínky pro kupující"),
                a("e5b5faa6", "Podmínky pro Nejsem robot"),
                a("i61a221c", "Odebírat a zaplatit"),
                a("fce91ab4", "Došlo bohužel k nějaké chybě."),
                a("a235cb76", "Při zpracovávání vašeho předplatného Nejsem robot se vyskytl problém. Zkontrolujte své platební údaje a zkuste to znovu."),
                a("a8eea654", "Váš nákup byl úspěšný."),
                a("bc8baa08", "Odebírá"),
                a("a98ba778", "Časové osy oznámení"),
                a("j887d006", "Od lajků po reposty a mnoho dalšího, všechno dění uvidíte tady."),
                a("c06d4306", "Pokud vás někdo zmíní ve svém příspěvku, uvidíte to tady."),
                a("ge7c661a", "Lajky, zmínky, reposty a ještě mnohem víc – příspěvky od dalších ověřených uživatelů uvidíte tady."),
                a("d3de3b5c", "Lajky, zmínky, reposty a ještě mnohem víc – příspěvky od vašich předplatitelů uvidíte tady."),
                a("e3f9838d", "Další informace"),
                a("eba8b1c8", "Mějte pod kontrolou, v jakých konverzacích jste zmíněni"),
                a("j745b8a6", "Pomocí nabídky akcí – to jsou ty tři malé tečky u postu – můžete zrušit označení svého uživatelského jména a konverzaci opustit."),
                a("c380d684", "Vaše hlášení"),
                a("da7cf0d8", "Označili jsme tyto posty jako choulostivý obsah"),
                a("a6da21a1", function (e) {
                    return e.appName + " žádá o přístup k vašemu účtu na platformě X";
                }),
                a("f4392d00", "Autorizovat aplikaci"),
                a("ee4dca3c", "odkaz pro zrušení"),
                a("bb347bbc", "centru nápovědy"),
                a("be38d34e", "Pokud chcete tuto aplikaci používat, musíte se přihlásit na platformu X."),
                a("e087691a", "Nepovedlo se vám udělit přístup aplikaci. Vraťte se a zkuste se přihlásit znovu."),
                a("e7dd62c4", "Kliknutím na tlačítko „Autorizovat aplikaci“ autorizujete xAI k přístupu k vašim datům z X, včetně:"),
                a("debbdc98", "Váš uživatelský profil X, informace o účtu X, nastavení X a předvolby X."),
                a("d9cf7c9c", "Vaše posty na X lze zobrazit na vašem účtu X, včetně postů na a ze všech účtů (veřejných nebo chráněných), které si můžete zobrazit."),
                a("cdf40068", "Vaše historie konverzací s funkcí Grok na X."),
                a("cea71014", "Načítáme vaše kontakty..."),
                a("b5474bd2", "Něco se pokazilo."),
                a("ab4b970a", "Přejděte zpět do aplikace X a požádejte o nový ověřovací e-mail."),
                a("j6d103b8", "Vytvořte si účet na platformě X. Ať už vás zajímá zpravodajství, zábava, sport nebo politika, tady najdete nejčerstvější informace a komentáře v reálném čase."),
                a("ca042c78", "Přihlásit se do platformy X"),
                a("ff869362", "Pokud se chcete podívat na novinky, přihlaste se na platformu X. Zapojte se do konverzace, sledujte účty, zkontrolujte si časovou osu na hlavní stránce a přečtěte si posty od lidí, které znáte."),
                a("f4a654a4", "Zobrazit na Foursquare"),
                a("c09de2d4", "Prohledat časovou osu"),
                a("i1801686", "Neplatný dotaz. Zkuste jiný."),
                a("a0b4541c", "Něco se pokazilo, ale netrapte se – není to vaše chyba"),
                a("d7eebb60", "Nastavování předplatného"),
                a("h707b180", "Aktualizace vašeho předplatného byla dokončena"),
                a("a452ab68", "Může to trvat několik sekund."),
                a("b3bad3b2", "@premium"),
                a("accbcc78", "Aktualizace proběhla úspěšně"),
                a("e957c20e", "Bezplatná zkušební verze s plným přístupem"),
                a("a1436e70", "Nyní můžete do svého profilu přidávat pracovní pozice a zviditelnit je ve vaší síti. Jakmile bude vaše žádost schválena, budou vaše pracovní pozice při hledání pracovních pozic viditelné pro miliony uživatelů."),
                a("f9c85cec", "Vyžadovaná akce: Nahrajte a ověřte dokumenty"),
                a("f178f393", function (e) {
                    return "Prosíme o předložení vyžadovaných dokumentů do " + e.date + ". Obvykle to zabere asi 10 minut.";
                }),
                a("f9fbeabc", "Zakladatelské dokumenty vaší organizace"),
                a("b4c80f5c", "Průkaz totožnosti vydaný vládou"),
                a("f0915094", "Zařízení s funkčním fotoaparátem"),
                a("f259d3f3", function (e) {
                    return "Důležité: Dokumenty je třeba předložit do " + e.date + ", jinak bude vaše žádost zamítnuta bez nároku na vrácení peněz.";
                }),
                a("d35f645b", function (e) {
                    return "Otevřít (" + e.count + ")";
                }),
                a("bf534b31", function (e) {
                    return "Propagované (" + e.count + ")";
                }),
                a("c35aded2", "Archivováno"),
                a("b97e952a", "Vypadá to, že jste zatím nepřidali žádné pracovní pozice."),
                a("cf1fa156", "Vypadá to, že jste zatím nedoporučili žádné pracovní pozice."),
                a("fa4a4f50", "Vypadá to, že jste zatím nearchivovali žádné pracovní pozice."),
                a("c5fb5a1a", "Žádné pracovní pozice"),
                a("e9b91cde", "Přidat pracovní pozici"),
                a("c270ef3e", "Archivovat"),
                a("fe8872f4", "Povedlo se"),
                a("d523cd74", "Archivovat tuto pracovní pozici?"),
                a("jfd0b34a", "Archivováním se pracovní pozice odebere z vašeho profilu."),
                a("e2247e08", "ATS"),
                a("b737c0b5", function (e) {
                    return "" + e.ats;
                }),
                a("e0ce628e", "Při odesílání pozvánky se vyskytl problém. Zkuste to znovu později."),
                a("ddf35536", "Při mazání pozvánky došlo k problému. Zkuste to prosím znovu později."),
                a("db7144b6", "Při změně typu přidružení se vyskytl problém. Zkuste to znovu později, prosím."),
                a("be78e5fa", "Při odstraňování přidruženého člena se vyskytl problém. Zkuste to znovu později, prosím."),
                a("fa9709ba", "Při vytváření aplikace došlo k problému. Zkuste to znovu později."),
                a("j62f13fc", "Při aktualizaci této pracovní pozice došlo k problému. Zkuste to znovu později."),
                a("ff5716fc", "Při vytváření této pracovní pozice došlo k problému. Zkuste to znovu později."),
                a("fd059188", "Při synchronizaci vašich pracovních pozic nastal problém. Zkuste to znovu později."),
                a("b82b5c00", "Během aktivace kreditu na reklamu se něco pokazilo. Zkuste to znovu později."),
                a("d74adc30", "Nesprávně přidaný reklamní účet"),
                a("e4323c36", "Zadané ID reklamního účtu neodpovídá vaší organizaci nebo jejím partnerským účtům."),
                a("b3323ada", "Přidejte kreditní kartu ke svému účtu na ads.twitter.com"),
                a("ac325eb8", "Pokud chcete aktivovat svůj kredit na reklamy, musíte ke svému reklamnímu účtu na ads.twitter.com přidat kreditní kartu."),
                a("j4e6e966", "Je vyžadována kontrola reklamního účtu"),
                a("ef86e7f6", "Váš účet byl označen ke kontrole a vyžaduje schválení."),
                a("c9c8edae", "Pokud chcete uplatnit kredity na reklamy, přihlaste se k odběru ověřených organizací"),
                a("b36c6278", "Náš kredit na reklamu mohou využívat pouze placená předplatná ověřených organizací. Upgradujte nyní a inzerujte se svými partnerskými účty."),
                a("c30f0168", "Otevřít externí odkaz"),
                a("c49b7262", "Propagovat pracovní pozici"),
                a("i6ecf71a", "Přestat propagovat pracovní pozici"),
                a("a37ef120", "Znovu otevřít pracovní pozici"),
                a("i00355d0", "Zrušit sdílení"),
                a("h0481bba", "Zrušit sdílení této pracovní pozice?"),
                a("b9dfdc7a", "Zrušením sdílení odstraníte pracovní pozici z vašeho zvýraznění."),
                a("h4847fa2", function (e) {
                    return "" + e.userName;
                }),
                a("e46cd68e", "Pracovní pozice, které jste sdíleli"),
                a("ea7f1a42", "Vaše pracovní pozice"),
                a("d1cbcb90", "Zdroj"),
                a("gf66326c", "Naposledy aktualizováno"),
                a("b917fc28", "Propagace pracovní pozice vypnuta"),
                a("g06035e6", "Váš reklamní účet vyžaduje pozornost, aby bylo možné propagovat pracovní pozici."),
                a("aa16581c", "Nemáte přístup k reklamnímu účtu na propagaci pracovní pozice. Požádejte o pomoc správce účtu."),
                a("g7bb6f58", "Nebyly nalezeny žádné reklamní účty."),
                a("jf1576ba", "Nezdařilo se"),
                a("ff985a36", "Synchronizace"),
                a("e5b8058c", "Nesynchronizováno"),
                a("a86e335a", "Poslední synchronizace "),
                a("c9838d68", "Pracovní pozice, které jste přidali, již nejsou viditelné"),
                a("df6835a6", "Povolte pracovní pozice na svém profilu, abyste zvýraznili propagované pracovní pozice nad svými posty a vytvořili odkaz na seznam všech svých otevřených pracovních pozic."),
                a("fc504ea0", "Začít zobrazovat moje pracovní pozice"),
                a("a511934e", "Začněte nabírat na platformě X"),
                a("e68d2d16", "Přihlásit se k beta verzi"),
                a("f7a37e30", "Kliknutím na možnost „Přihlásit se k beta verzi“ vyjadřujete souhlas s tím, že můžete být kontaktováni na firemní e-mailové adrese přidružené k tomuto účtu, kvůli schválení přístupu k beta verzi."),
                a("bfef82f0", "Nábor na platformě X je bezplatná funkce pro Ověřené organizace, která umožňuje zveřejňovat nabídky pracovních pozic, propagovat nabídky pracovních pozic na profilu vaší společnosti a přitahovat ty nejlepší talenty na vaše otevřené pozice."),
                a("h4b890c2", "Nábor na platformě X vám umožňuje zveřejňovat nabídky pracovních pozic, doporučovat je na vašem profilu a přitahovat ty nejlepší zaměstnance do vašich otevřených rolí."),
                a("c3f28126", "Oslovte početné publikum"),
                a("dec1601e", "Platforma X má přes 528 milionů uživatelů. Od softwarových inženýrů, přes maloobchodní prodejce, až po operátory vysokozdvižných vozíků, váš další nábor je tady."),
                a("be8393da", "Propagujte své nejdůležitější role"),
                a("i8c856ce", "Doporučte na svém profilu až 3 pracovní pozice. Všichni uživatelé uvidí tyto role, když si zobrazí váš profil."),
                a("d8bc6eea", "Přidejte až 5 pracovních pozic, které budou propagované na profilu vaší společnosti. Všichni uživatelé tyto propagované role uvidí při zobrazení profilu vaší společnosti."),
                a("a049efd4", "Importujte své pracovní pozice rychle"),
                a("d12be15a", "Připojte podporovaný Systém sledování žadatelů nebo zdroj XML a přidejte své pracovní pozice na platformu X během několika minut."),
                a("d248d75e", "Získat podporu"),
                a("c49d8e42", "Potřebujte pomoc? Kontaktujte nás"),
                a("ib244b2e", "Zkopírovat e-mailovou adresu"),
                a("b450472c", "Importovat pracovní pozice"),
                a("b36022d1", "xhiringsupport@x.com"),
                a("aeac3eb4", "Aktualizovat pracovní pozice"),
                a("aa4c37cc", "Zobrazit pracovní pozice na mém profilu"),
                a("d4b82638", "Propagujte pracovní pozice na svém profilu"),
                a("e405b1c2", "Povolte pracovní pozice ve svém profilu, abyste získali více uchazečů o vaše kritické role, a umožněte uchazečům vidět všechny vaše otevřené role."),
                a("a85cda86", "Začněte přidáním pracovní pozice"),
                a("c04b6472", "Importujte nebo přidejte své pracovní pozice v několika jednoduchých krocích a začněte získávat více žadatelů. Své pracovní pozice můžete také sdílet s vašimi sledujícími a na profilu vaší společnosti."),
                a("d14c02d0", "Přidat pracovní pozice ručně"),
                a("b12424fc", "Nová pracovní pozice"),
                a("ca8df1e2", "Vytvořte pracovní pozici a přidejte ji do seznamu pracovních pozic. U každé pracovní pozice musí být uvedena adresa URL žádosti, na které se uchazeči mohou dozvědět více o dané pracovní pozici a ucházet se o ni."),
                a("f4f4dd60", "Povinné"),
                a("b2c213e0", "Byl překročen limit počtu znaků"),
                a("d84e9c2a", "Uveďte, jaký typ pracovního nasazení se u této pozice očekává."),
                a("bc8b300c", "Pracovní funkce"),
                a("d1eedb50", "Pomozte uchazečům porozumět oblasti, ve které tato role působí."),
                a("eaf3ce64", "Tým"),
                a("b36cd50e", "Určete základní tým, se kterým budou uchazeči po přijetí do zaměstnání spolupracovat."),
                a("d3a427ce", "Vyberte požadovanou úroveň zkušeností."),
                a("i7174442", "Popis pracovní pozice"),
                a("fef0cf02", "Zadejte podrobný popis pracovní pozice. Uveďte klíčové povinnosti a kvalifikaci, aby uchazeči jasně pochopili, o jakou pozici se jedná."),
                a("b7800bec", "Propagujte nabídku pracovní pozice textem v rozsahu maximálně 200 znaků. Zobrazuje se v postech, doporučeních a vyhledávání."),
                a("a5244ece", "Adresa URL aplikace (povinná)"),
                a("g2b553f6", "Zadejte veřejnou adresu URL, na které se mohou uchazeči ucházet o tuto pracovní pozici."),
                a("c2e77608", "Název pracovní pozice (povinné)"),
                a("cdf414d4", "Slouží k vyhledávání a doporučování. Zkuste použít standardní názvy, abyste dosáhli nejlepších výsledků."),
                a("cc59319a", "Používejte standardní názvy pracovních pozic, které by většina uchazečů poznala."),
                a("e7117ee4", "Umístění (povinné)"),
                a("c05176ec", "Pokud je tato pracovní pozice vykonávána na konkrétním pracovišti, zadejte umístění pracoviště. Pokud je tato role vzdálená, popište, kde se mohou uchazeči nacházet."),
                a("d70c24d4", "Pomáhá uchazečům vyhledat vaši pracovní pozici."),
                a("de1c4376", "Rozsah mzdy"),
                a("hf352d42", "Přidejte volitelné platové rozpětí, které bude viditelné uchazečům. Pokud to neuděláte, vezměte v potaz případné zákony o transparentnosti platů v místě, kde najímáte zaměstnance."),
                a("ede7d0a2", "Měna"),
                a("b925c18c", "Typ platu"),
                a("j3d242ce", "Neplatný rozsah"),
                a("f4d07bd2", "Uveďte nepovinné údaje, které uchazečům usnadní nalezení vašich pracovních pozic."),
                a("b8cbb51a", "Shrnutí pracovní pozice"),
                a("bda6881e", "Toto pracovní místo bylo importováno ze systému sledování uchazečů (ATS). Vezměte prosím na vědomí, že lze upravovat pouze určitá pole."),
                a("b075c68a", "Upravit pracovní pozici"),
                a("d4b6a6e0", "Zvýraznění v profilu"),
                a("j2dd3686", "Zvýrazněte propagované pracovní pozice nad svými posty."),
                a("af1cfd46", "Integrace ATS"),
                a("d6fa2944", "Smazáním integrace nesmažete importované pracovní pozice."),
                a("h99f11fa", "Smazat integraci"),
                a("eef1ae76", "Aktuálně připojeno"),
                a("a915f5c1", function (e) {
                    return e.ats + " připojeno";
                }),
                a("af7286b7", function (e) {
                    return e.percentage + "% sleva na roční předplatné Premium";
                }),
                a("c924ad84", "Nechte video hrát"),
                a("de750a3c", "Užijte si je, i když je váš telefon zamčený"),
                a("he5e87c4", "Boostujte svoje odpovědi"),
                a("g64a60ba", "Získejte malou prioritu, když odpovídáte na posty"),
                a("a7ee832a", "Opravte překlepy a chyby, po dobu až 60 minut"),
                a("fdd77a34", "Vytvářejte delší posty"),
                a("j6d26a7a", "Pište tolik obsahu, kolik ho chcete sdílet"),
                a("c4fd68da", "Přizpůsobte si uživatelské prostředí"),
                a("c0195168", "Změňte ikonu aplikace a možnosti navigace"),
                a("b6b5dc94", "Nechte se ověřit"),
                a("b06db848", "Odlište se od ostatních na platformě"),
                a("e3e3a97c", "Získejte podíl z příjmů ze svých postů"),
                a("f15bc24e", "Zvýšené limity funkce Grok");
            a("c4666e1c", "Větší využití funkce Grok 3, našeho nejnovějšího modelu "),
                a("he74ae7a", "Omezení nejvyššího počtu použití funkce Grok"),
                a("f5732cd4", "Navíc rozšířený přístup k funkcím DeepSearch a Přemýšlet"),
                a("e0198956", "Získejte podíl na příjmech ze zapojení ověřených účtů s obsahem, který zveřejníte na X."),
                a("iadf78e2", "Stáhnout videa"),
                a("ee54c3de", "Uložte si videa přímo do vašeho zařízení"),
                a("ae03594c", "Malé boostování odpovědi"),
                a("e6bb08c0", "Zvyšte viditelnost svých odpovědí"),
                a("bf2a6acc", "Velké zvýšení odpovědi"),
                a("c2059276", "Nechte si své odpovědi boostovat."),
                a("b023ec20", "Maximální zvýšení odpovědi"),
                a("g337328e", "Získejte nejvyšší viditelnost svých odpovědí."),
                a("fa006202", "Přehrávání videa na pozadí"),
                a("jf389778", "Sledujte zatímco budete prohlížet nebo používat jiné aplikace"),
                a("f2977d80", "Složky pro záložky"),
                a("j1d3d910", "Udržujte své uložené posty uspořádané pro snadný přístup"),
                a("f0f48668", "Prémiová podpora"),
                a("c3148608", "Získejte rychlejší pomoc, když ji potřebujete"),
                a("b485ca6e", "Karta Nejzajímavější"),
                a("d438955e", "Předveďte své nejlepší posty"),
                a("f373a352", "Zašifrované SZ"),
                a("g7405aca", "Chatujte bezpečně pomocí kompletního šifrování"),
                a("j659fa0c", "To nejlepší z funkce Grok 3"),
                a("ibff5694", "Odemkněte omezení nejvyššího počtu použití, funkce DeepSearch a Přemýšlet a brzký přístup k novým funkcím"),
                a("i824f4da", "Méně reklam"),
                a("bd17076c", "Na časové ose Pro vás a Sledující uvidíte přibližně polovinu reklam."),
                a("cef2cac8", "Užijte si zkušenost bez reklam s občasným značkovým obsahem v méně obvyklých oblastech."),
                a("c97920c0", "Offline videa"),
                a("i4379b18", "Uložte jakékoli video pro přehrávání offline"),
                a("f94c6bae", "Ověřené zaškrtnutí"),
                a("d72055d6", "Vybudujte si důvěryhodnost pomocí ověřeného zaškrtnutí "),
                a("f54af178", "Psát články"),
                a("c5cd5d42", "Sdílejte dlouhý obsah a vytvořte si myšlenkové vedení"),
                a("jbdb08cc", "Analyzujte metriky svého účtu, abyste porozuměli tomu, jak si váš účet vede"),
                a("deaf7e0a", "Media Studio"),
                a("fd1a47b4", "Spravujte a nahrávejte svoje média"),
                a("id067c96", "Vyhledávání pomocí funkce Radar"),
                a("jf991d48", "Buďte napřed díky sledování trendů v reálném čase"),
                a("c244210c", "X Pro"),
                a("a90f2e8a", "Výkonný nástroj v reálném čase pro lidi, kteří vysílají živě na platformě X. Sledujte více časových os na jedné obrazovce (pouze pro web)"),
                a("b3e50ef2", "Vytvářejte komunity"),
                a("bb1a4e44", "Vytvořte si svou vlastní komunitu"),
                a("j010228e", "Získejte vyplacený podíl na příjmech, které platforma X získává od vašich nejvíce zapojených sledujících s měsíčními předplatnými."),
                a("h0e1730e", "Priorita odpovědí"),
                a("jf7f743c", "Zveřejňování delších videí"),
                a("c0c25b6c", "Složky pro záložky"),
                a("ab31c79e", "Přizpůsobte si ikony aplikace"),
                a("a8a702ae", "Vlastní navigace"),
                a("d5ab1b50", "Získejte znak ověření"),
                a("ac298984", "Vyšší priorita odpovědí"),
                a("g20df450", "Odebrat 50 % reklam"),
                a("h8dfc4de", "Vyšší počet použití funkce Grok"),
                a("bf7614d4", "Předplatná pro tvůrce"),
                a("gadc9f4a", "Nejvyšší priorita odpovědí"),
                a("c127c5c2", "Odebrat všechny reklamy"),
                a("c1e0f3c8", "Odemknout funkce DeepSearch a Přemýšlet služby Grok"),
                a("aac0bbb6", "Vstoupit do Radaru"),
                a("a6722922", "Reklamy byly odebrány"),
                a("ba016532", "zvýšení odpověď"),
                a("a06f8a3e", "Grok 3"),
                a("b9e16610", "MAX"),
                a("b1492c6c", "Nejvyšší"),
                a("fb5e2c14", "Zvýrazněte posty s X Premium"),
                a("gd1f4cfa", "Předveďte své nejlepší posty na svém profilu"),
                a("h59250bc", "Šifrujte zprávy s X Premium"),
                a("ed62d546", "Prodlužte posty s X Premium"),
                a("ca447200", "Ověření SMS s X Premium"),
                a("af2b99ea", "Upravujte posty s X Premium"),
                a("ha265914", "Organizujte záložky s X Premium"),
                a("gda940ae", "Vytvořte komunitu s X Premium"),
                a("c7e5ac54", "Sledujte méně reklam s X Premium"),
                a("e03589ba", "Boostujte svoje posty s X Premium"),
                a("f0f8c82a", "Připojte se chatům pouze pro ověřené s X Premium"),
                a("fecf5aaa", "Nahrajte plně HD video s X Premium"),
                a("c00d2be2", "Upravujte videa s X Premium"),
                a("cd360b86", "Zeptejte se Grok na něco"),
                a("d2e1a7a2", "Dostupné s X Premium"),
                a("e664abe2", "Video na X. Neodolatelná nabídka."),
                a("e595a3e2", "Odemkněte to nejlepší z videí s předplatným Premium"),
                a("i3c9329a", "Vynikněte díky formátování bohatého textu"),
                a("cc9def68", "Pouze s X Premium"),
                a("hdef5966", "Stáhněte si videa do svého zařízení"),
                a("c748224a", "Odemkněte je s předplatným X Premium"),
                a("ebfc88bc", "Získejte přístup k exkluzivním funkcím"),
                a("f652e9ac", "Odemkněte více s předplatným Premium"),
                a("d67e94c0", "Přijdete o..."),
                a("j1d3098c", "Odemkněte více s předplatným Premium+"),
                a("gd573390", "A to vše v předplatném Basic..."),
                a("ef94bbd4", "Získejte Premium+"),
                a("dcd830ce", "A to vše v předplatném Premium..."),
                a("b7dde622", "Šťastné Díkuvzdání! Nabídka končí za:"),
                a("i0180ca1", function (e) {
                    return "Do " + e.date + ". Šťastné Díkůvzdání!";
                }),
                a("hb9d0e00", "Nabídka k našemu dvouletému výročí končí:"),
                a("d2b23e0d", function (e) {
                    return "Předplatné Premium má narozeniny! Končí " + e.date + ".";
                }),
                a("bb4998fb", function (e) {
                    return "Do " + e.date;
                }),
                a("c0847ebc", "Všechny upgrady od Basic, plus..."),
                a("ed672bfa", "Všechny upgrady od Basic a Premium, plus..."),
                a("db63fa1c", "Vybrat plán Premium"),
                a("b128c6bc", "Získejte ověřený odznak a desítky dalších úžasných výhod a benefitů"),
                a("a9904a1c", "Uložit na X Premium po omezenou dobu"),
                a("acfaf7a0", "Srovnejte úrovně a funkce"),
                a("e1606e52", "Změnit předplatné"),
                a("d2f2b91a", "zaregistrujte se zde"),
                a("j4b4310e", "Sekundy"),
                a("af863ee9", "bezplatné zkušební verze"),
                a("f5705987", "smluvními podmínkami pro kupujícího"),
                a("h89dabac", "Zrušit ho můžete kdykoli"),
                a("f36b8e14", "Při načítání tohoto produktu se něco pokazilo. Zkuste ho načíst znovu."),
                a("f1756574", "/ za měsíc"),
                a("i650ff14", "/ za rok"),
                a("dbcd25db", function (e) {
                    return "na prvních " + e.numberOfDays + " dní";
                }),
                a("bd40d5b5", function (e) {
                    return "Odebírat a zaplatit pro " + e.title;
                }),
                a("i36a0b6e", "Předplatné si můžete pořídit jen z aplikace X pro iOS (prozatím)."),
                a("c906ad94", "Snížit"),
                a("db5c77e0", "Toto je vaše aktivní předplatné"),
                a("h77ef73e", "Přepnout na měsíční plán"),
                a("d723d44a", "Přepnout na roční plán"),
                a("gf6b66b8", "Potvrďte změnu svého předplatného platnou ode dneška"),
                a("e83daf87", function (e) {
                    return "Potvrďte změnu svého předplatného platnou od: " + e.date;
                }),
                a("f27022d6", "Aktuální plán"),
                a("i9d5f4b6", "Nový plán"),
                a("ia390d8a", "Jak bude převod na nižší úroveň fungovat"),
                a("fd80b875", function (e) {
                    return "Váš aktuální tarif zůstane aktivní, dokud neskončí fakturační cyklus. Dne " + e.nextBillingDate + " přepnete na úroveň " + e.newTierName + " a bude vám účtována nová sazba.";
                }),
                a("c8fb177a", "Jak bude nastavena platba"),
                a("df776505", function (e) {
                    return "Upgradujete na úroveň " + e.newTierName + " s novou fakturací. Dnes vám bude nový tarif účtován, ale zbývající kredit částku sníží. K přepnutí dojde okamžitě a vaše fakturace se odpovídajícím způsobem upraví.";
                }),
                a("d7efb6ba", "Přepínáte z měsíční fakturace na roční. Dnes vám bude účtován roční tarif, přičemž zbývající poměrný měsíční zůstatek bude připsán k celkovému poplatku. K přepnutí dojde okamžitě a vaše vyúčtování bude nyní roční."),
                a("a5f2cf70", "Přepínáte z roční fakturace na měsíční. Zbývající roční kredit pokryjí vaše měsíční platby, dokud se nevyčerpají. K přepnutí dojde okamžitě a vaše fakturace bude nyní měsíční."),
                a("ef1c0208", "Potvrďte změnu plánu"),
                a("ia08113f", "Smluvními podmínkami pro kupujícího"),
                a("d2962b73", "Podmínkách"),
                a("b421795a", "Zrušit je můžete kdykoli"),
                a("f8d88ac7", "Smluvními podmínkami pro kupujícího"),
                a("ca220fe9", "Podmínkách"),
                a("ab8beda0", "Zrušit je můžete kdykoli"),
                a("ife2636d", "Smluvními podmínkami pro kupujícího"),
                a("fb57be65", "Podmínkách"),
                a("e468a6c2", "Zrušit je můžete kdykoli"),
                a("e9f4c89b", "Smluvními podmínkami pro kupujícího"),
                a("hce73b41", "Podmínkách"),
                a("i4db5c92", "Zrušit je můžete kdykoli"),
                a("ae095fe8", "Umělá inteligence Grok"),
                a("d4e60288", "Omezení nejvyššího počtu použití"),
                a("abaa4274", "Odemknout funkce DeepSearch a Přemýšlet"),
                a("e0d53864", "Brzký přístup k novým funkcím"),
                a("g1be3530", "BEZPLATNÁ ZKUŠEBNÍ VERZE"),
                a("b10b4f1f", function (e) {
                    return "UŠETŘETE " + e.percentOff + " % PŘED " + e.date;
                }),
                a("b8d0bd19", function (e) {
                    return "Vyzkoušejte " + e.productName + " zdarma";
                }),
                a("f89dfa74", "Nejvýhodnější"),
                a("b9a4d8c6", "Ročně"),
                a("f5fb58b4", "Plus všechny funkce X Premium"),
                a("i527045e", "Zaškrtnutí, více z funkce Grok, boostování odpovědi, analýzy a mnoho dalšího"),
                a("ga482a88", "Roční plán"),
                a("hc64d5b0", "Měsíční plán"),
                a("de7db957", function (e) {
                    return e.price + " za rok s ročním účtováním";
                }),
                a("d8982437", function (e) {
                    return e.price + " za rok s měsíčním účtováním";
                }),
                a("f0ad5cc8", "rok"),
                a("a0dc6e4c", "Aktuálně nedostupné"),
                a("jd8b2e66", "Odebírat a zaplatit"),
                a("ca784c0c", "Odebírejte a plaťte přes Apple"),
                a("aa5df29f", function (e) {
                    return "" + e.oldPrice;
                }),
                a("g1c4f7a1", function (e) {
                    return "" + e.oldPrice;
                }),
                a("afd61c76", "Nebo ušetřete až 30 %"),
                a("i7fbacc4", "Přepínejte mezi dostupnými úrovněmi předplatného"),
                a("c9cc122b", function (e) {
                    return e.feature + " je zahrnut v " + e.title;
                }),
                a("bff35771", function (e) {
                    return e.feature + " není dostupný pro " + e.title;
                }),
                a("a69fd369", function (e) {
                    return "Začíná na ceně " + e.price;
                }),
                a("e563a5d1", function (e) {
                    return "Přihlásit se k odběru s " + e.percentage + "% slevou (časové omezené)";
                }),
                a("dfc5f972", "A mnohem více..."),
                a("fb8453c8", "Odemkněte požadavky DeepSearch a Přemýšlet"),
                a("e45b3f30", "Odemknutí požadavků Průzkum a Úvaha"),
                a("aaebdc2e", "Mnohem širší přístup k modelům Grok 3 mini a Grok 3"),
                a("ddf8a412", "Přístup k novým funkcím dříve než ostatní"),
                a("gfb04ef4", "Všechny funkce Premium+ na platformě X"),
                a("b601cfbb", function (e) {
                    return "Vyzkoušejte to za " + e.price + " na jeden měsíc";
                }),
                a("i3e90e20", "Nyní nedostupné"),
                a("d9e9ce26", "Odebírat a zaplatit:"),
                a("j1f5a580", "Při zpracovávání vašeho předplatného Premium se vyskytl nějaký problém. Zkontrolujte své platební údaje a zkuste to znovu."),
                a("ebc84442", "Registrace předplatného Premium"),
                a("cd9102d4", "Zvolit kategorii"),
                a("eb551aea", "Zobrazit kategorii v profilu"),
                a("f386777a", "Přepnout typ účtu"),
                a("db483090", "Přepnuli jste na osobní účet"),
                a("c701200c", "Přepnuli jste na firemní účet"),
                a("acd8da0a", "Přepnuli jste na účet tvůrce"),
                a("cb55ecce", "Přepnout na osobní účet"),
                a("h4aeb984", "Přepnout na osobní účet"),
                a("ada6073a", "Nepotřebujete profesionální nástroje?"),
                a("eb723d4c", "Osobní účty nemají nástroje jako Zvýraznění v profilu a Správce nákupů. Pokud budete chtít přejít zpět, budete si muset založit nový profesionální účet."),
                a("hbb1af08", "Přepnout na firemní účet"),
                a("a9b5e3aa", "Ne, zrušit"),
                a("ia49207a", "Ano, přepnout"),
                a("g3f74902", "Chcete přepnout na firemní účet?"),
                a("f3bcfac0", "Tento typ účtu je nejvhodnější pro značky, maloobchodní prodejce, poskytovatele služeb a organizace."),
                a("d0c3f02e", "Přepnout na účet tvůrce"),
                a("a01e84e0", "Přepnout na účet tvůrce"),
                a("e8af8ef4", "Tento typ účtu je nejvhodnější pro veřejně činné osoby, umělce a vlivné osobnosti."),
                a("e44eab74", "Některé moduly aktuálně nejsou podporované některými klientskými aplikacemi platformy X"),
                a("ce4185bc", "Připravujeme další možnosti Zvýraznění"),
                a("b5aed332", "Nejsou k dispozici žádná Zvýraznění"),
                a("g419ecf4", "Zůstat na stránce"),
                a("d3a097a2", "Ano, zahodit"),
                a("j1e1cd30", "Zahodit změny?"),
                a("fc779c28", "Propagovat Zvýraznění"),
                a("ie85a7a8", "Smazat informace o vaší firmě?"),
                a("b5348efc", "Žádná provozní doba"),
                a("db285564", "V provozu neustále"),
                a("g7993eee", "Vlastní provozní doba"),
                a("c9ee902a", "Zobrazit mapu"),
                a("j224a074", "Pokud zapnete Zvýraznění sídla, budou veškeré uvedené informace o sídle veřejně přístupné. Informace o telefonu a e-mailu jsou dostupné přes tlačítko Kontakt."),
                a("f448cbcc", "Volitelné"),
                a("c16c9568", "Adresa"),
                a("i3a38711", "smluvních podmínkách Map Google"),
                a("beb66f50", "zásadách ochrany osobních údajů Googlu"),
                a("e0d47030", "Kde vás můžou zákazníci zastihnout? Upozorňujeme, že příslušné informace budou k dispozici veřejně, aby vás zákazníci mohli najít. Informace můžete kdykoli odstranit."),
                a("c7a4adb0", "Přidat adresu"),
                a("cd39daf6", "PSČ"),
                a("gc0df5a6", "Přidat PSČ"),
                a("c6c16a52", "Město"),
                a("aa8015be", "Přidat město"),
                a("b688f53a", "Stát, kraj nebo okres"),
                a("a67f5bbc", "Přidat stát, kraj nebo okres"),
                a("if92b1b4", "Přidat zemi"),
                a("ffc5590e", "Neplatné město"),
                a("a8fd64d8", "Vyhledat země"),
                a("a0abe108", "Neplatný stát, kraj nebo okres"),
                a("j163df8e", "Neplatná adresa"),
                a("af9b9b78", "Neplatné PSČ"),
                a("i373e022", "Zadat e-mail"),
                a("f91751f8", "Tyto informace budou veřejně viditelné"),
                a("g33c0564", "Neplatný e-mail"),
                a("ga71fbf4", "Provozní doba"),
                a("ca2ba204", "Upravit vlastní provozní dobu"),
                a("d7b7dbca", "Ve vašem profilu nebude zobrazena žádná provozní doba"),
                a("a460e770", "Např. parky, pláže, online obchody"),
                a("ddc88bf0", "Nastavte si provozní dobu pro jednotlivé dny"),
                a("j11df0ca", "Překrývající se hodiny"),
                a("f9f911f4", "Hledat časové pásmo"),
                a("d21a4252", "Přidat další provozní dobu"),
                a("ac6ce1c0", "Od"),
                a("c647aac8", "Do"),
                a("b926e64a", "Zadat webovou stránku"),
                a("i019c8b6", "Volání"),
                a("eabc6906", "SMS"),
                a("h24d868c", "Volání a SMS"),
                a("fa64f1fc", "Vybrat předvolbu země"),
                a("c7d3629a", "Telefonní číslo"),
                a("ce48a958", "Jakými způsoby vás jde kontaktovat?"),
                a("b97705ce", "Pamatujte, že toto telefonní číslo bude veřejně přístupné pro zákazníky, aby vás mohli kontaktovat. Číslo můžete kdykoli odstranit."),
                a("f7ff19ec", "Přidat kód země"),
                a("bb7f177a", "Neplatné telefonní číslo"),
                a("b91d1394", "Přidat aplikaci"),
                a("d3cd1160", "Přidat aplikaci pro iOS"),
                a("f2124008", "Adresa URL v obchodu App Store"),
                a("dc0d9d6a", "Přidat aplikaci pro Android"),
                a("dd1605f0", "Adresa URL v obchodu Play"),
                a("g4098f78", "Kde tento údaj najdu?"),
                a("b949cdc6", "Odstranit aplikaci"),
                a("b4b8a486", "Vyberte komunitu"),
                a("jfe04cf6", "Vymazat výběr?"),
                a("a14aa8dc", "Tímto se komunita odstraní z vašeho Zvýraznění."),
                a("cc4add98", "Zvolte komunitu a podívejte se na náhled, jak bude vypadat na vaší profilové stránce."),
                a("jd3e9ea6", "Nemáte žádné komunity"),
                a("daad9741", "vytvořit vlastní komunitu"),
                a("c46cdabc", "Pokročilé nástroje"),
                a("f6a2233a", "Spravujte oprávnění u více účtů"),
                a("ccb3ca48", "Nastavení pro firmy"),
                a("b0ef3100", "Vytvářejte propracované reklamní kampaně"),
                a("ff1c5e1a", "Profesionální centrum"),
                a("f53adc36", "Dosahujte výsledků v reálném světě"),
                a("hc4981d6", "Zvýraznění v profilu"),
                a("fbce8dbe", "Najděte lidi, které budete chtít sledovat"),
                a("ae76c624", "Navažte více spojení"),
                a("ae0383d4", "Zvyšte zapojení a oslovte víc lidí"),
                a("a1dbe746", "Posilte zapojení a oslovte víc lidí"),
                a("hbd124ae", "Boostovat post"),
                a("hd80bd3e", "Sponzorovat post"),
                a("fe2b0008", "Zjistěte, jak používat platformu X"),
                a("h257d4aa", "Vyberte post ke sponzorování"),
                a("d28a1d72", "Buďte první, kdo zjistí trendy s Radarem"),
                a("fb70427a", "Představujeme nejvýkonnější vyhledávací nástroj na X."),
                a("i54bf620", "Sledujte klíčová slova"),
                a("e8bb09bc", "Zaměřte se na jakékoli téma pomocí pokročilého vyhledávání."),
                a("d4c9d5aa", "Vizualizujte si trendy"),
                a("e78263fe", "Sledujte konverzace pomocí grafů denní aktivity za poslední 3 dny."),
                a("e3ed8220", "Metriky v reálném čase"),
                a("f4952956", "Získejte okamžité statistiky o počtu postů z vašich dotazů."),
                a("cce3f116", "Post byl přidán do vašich záložek"),
                a("b593b396", "Post byl odebrán ze záložek"),
                a("af9c8a3e", "Otevřít aplikaci"),
                a("ef483238", "Stránka se stavem postu"),
                a("jcf3ff56", "Velký text"),
                a("f1252ac8", "Střední text"),
                a("daa0da04", "Malý text"),
                a("ba5256b2", "Velikost textu"),
                a("h030c24c", "Nahlásit problém"),
                a("b12ffee6", "Zakázat z komunity"),
                a("e37836f8", "Podrobnosti o hlášení"),
                a("fb35e52a", "Zobrazit pravidlo"),
                a("e238c590", "Co se teď bude dít?"),
                a("if218e60", "Vaše hlášení bude prověřeno naším týmem a našimi technologiemi. Pokud zjistíme porušení pravidel, dáme vám vědět, jaké nápravné kroky podnikneme."),
                a("b6dc1984", "Jak to probíhá?"),
                a("b0a16894", "Na kontextu záleží. Při vynucování našich pravidel bereme v úvahu například následující faktory (nejde o vyčerpávající seznam):"),
                a("d4716820", "Je nahlášený obsah zacílen na nějaké lidi kvůli jejich identitě?"),
                a("e899a534", "Jak závažné je toto porušení?"),
                a("d9c4e7ae", "Bylo hlášení odesláno osobou, na kterou byl daný obsah zacílen?"),
                a("afb51066", "Vytvářením duplicitních hlášení se náš proces neurychlí."),
                a("b7ba712a", "Zjistili jsme porušení"),
                a("d90b8c04", "Nezjistili jsme žádné porušení"),
                a("c2d0494a", "Naše bezpečnostní doporučení"),
                a("be46e000", "Nahlásit duplikáty"),
                a("e846ae32", "I když je obsah smazaný, někdo si ho předtím mohl uložit nebo si udělat snímek obrazovky. Pokud na něj na platformě X narazíte znovu, prosíme vás, abyste ho znovu nahlásili, a my ho smažeme."),
                a("e3647d08", "Kontaktovat policii"),
                a("gad89c4a", "Pokud se cítíte být v nebezpečí, obraťte se prosím na policii. Pokud by policie měla nějaké otázky, může využít našeho průvodce pro policii. "),
                a("h7fa9240", "Spojené státy:"),
                a("fb2ff552", "Záchranná linka National Suicide Prevention Lifeline na čísle 988."),
                a("bb57e8c0", "Ostatní země a oblasti:"),
                a("b9ce59ba", "Ještě jednou děkujeme za vaše upozornění."),
                a("d42899ad", "International Association for Suicide Prevention"),
                a("c9853de0", "Obsah byl skryt"),
                a("c197728e", "Vyřešeno"),
                a("f4422d78", "Hlášení"),
                a("i07c24fa", "Nemáte žádná otevřená hlášení"),
                a("h542c98a", "Zobrazit podrobnosti"),
                a("e6e11d12", "Nemáte žádná vyřešená hlášení"),
                a("ibf33bae", "Hlásit duplicity, aby mohly být odstraněny"),
                a("a288ca36", "průvodce pro policii"),
                a("a62c9c34", "Sledujte, co vás zajímá."),
                a("cf39fca2", "Podívejte se, o čem lidé mluví."),
                a("j86184fe", "Zapojte se do konverzace."),
                a("ac2035f2", "Přidejte se ještě dnes."),
                a("h0af9418", "Vytvořit účet"),
                a("eba1b198", "Co se právě děje"),
                a("fa811c30", "Máte už účet?"),
                a("b4bdfb3e", "Získejte aplikaci Grok"),
                a("f991cfaa", "Získejte funkci Grok"),
                a("a4298bc0", "Platforma X. Co se děje"),
                a("j3f49ff6", "Ať už vás zajímá zpravodajství, zábava, sport nebo politika, tady najdete nejčerstvější informace a komentáře v reálném čase."),
                a("d65555c2", "NEBO"),
                a("e75df5c9", function (e) {
                    return e.query + " - Hledat";
                }),
                a("ac4fb0f4", "Fotka"),
                a("aea62568", "Filtry hledání"),
                a("gfcfbf8c", "Vaše vyhledávání se uložilo."),
                a("a4645d92", "Vaše uložené vyhledávání se smazalo."),
                a("b11805af", function (e) {
                    return "Podívejte se na platformě X na posty k tématu " + e.query + ". Přečtěte si, co říkají ostatní, a zapojte se do konverzace.";
                }),
                a("d610e8c3", function (e) {
                    return "Nejnovější posty k tématu " + e.query + ". Přečtěte si, co lidé říkají, a zapojte se do konverzace.";
                }),
                a("j622effe", "Pokročilé hledání"),
                a("i5045e74", "Kdekoli"),
                a("h2388754", "Ve vašem okolí"),
                a("a0cf4306", "Grok – shrnutí"),
                a("f97f7b46", "Skrýt souhrn funkce Grok"),
                a("f9d35b98", "Můžete mít maximálně 25 uložených vyhledávání. Pokud chcete uložit nové, smažte napřed některé ze stávajících."),
                a("ha925ad4", "Něco se pokazilo. Zkuste vyhledávání za minutku uložit ještě jednou."),
                a("h0a9931c", "Něco se pokazilo. Zkuste vyhledávání za minutku smazat ještě jednou."),
                a("h4912b5e", "Uložit hledání"),
                a("b9bc69ca", "Smazat uložené hledání"),
                a("eb63de70", "Platforma X - Pokročilé hledání"),
                a("d3938be8", "Slova"),
                a("e0dded5e", "Zapojení"),
                a("a097f7ba", "Data"),
                a("c03f15ca", "Jakýkoli jazyk"),
                a("cb334136", "Odkazy"),
                a("jf1cbcc2", "Zahrnout posty s odkazy"),
                a("gede6f6e", "Zobrazit pouze posty s odkazy"),
                a("bda44dd4", "Zahrnout odpovědi a původní posty"),
                a("ab870904", "Zobrazit pouze odpovědi"),
                a("b6215680", "Všechna tato slova"),
                a("cceffa5e", "Příklad: co se děje · obsahuje slova „co“ a „děje“"),
                a("f1c5faee", "Přesně tato fráze"),
                a("ad10780e", "Příklad: happy hour · obsahuje přesnou frázi „happy hour“"),
                a("a555a3f4", "Aspoň jedno z těchto slov"),
                a("ee8a2b60", "Příklad: kočky psi · obsahuje slovo „kočky“ nebo „psi“ (nebo obojí)"),
                a("f51fe348", "Žádné z těchto slov"),
                a("hb657ad4", "Příklad: kočky psi · neobsahuje slovo „kočky“ a neobsahuje slovo „psi“"),
                a("d10da5da", "Tyto hashtagy"),
                a("f0b52b50", "Příklad: #ThrowbackThursday · obsahuje hashtag #ThrowbackThursday"),
                a("e292598a", "Od těchto účtů"),
                a("hef790d8", "Příklad: @X · odesláno z @X"),
                a("g2c27394", "Těmto účtům"),
                a("d158d9d0", "Příklad: @X · odesláno v odpovědi na @X"),
                a("a10e3230", "Zmiňující tyto účty"),
                a("daaf2c72", "Příklad: @SFBART @Caltrain · zmiňuje @SFBART nebo zmiňuje @Caltrain"),
                a("b18366ba", "Minimální počet odpovědí"),
                a("f481ba1c", "Příklad: 280 · postů s alespoň 280 odpověďmi"),
                a("ib3ddbd4", "Minimální počet lajků"),
                a("ef994dac", "Příklad: 280 · postů s nejméně 280 lajky"),
                a("a504ca74", "Minimální počet repostů"),
                a("jd9bd944", "Příklad: 280 · postů s alespoň 280 reposty"),
                a("e95b9448", "Obecné"),
                a("f458a3b2", "Soukromí"),
                a("bdc6f5b8", "Váš účet"),
                a("ea848de8", "Nastavení EarlyX"),
                a("df483b48", "Přepínání funkcí"),
                a("bd05add8", "Nejsem robot"),
                a("d94f12b6", "Zkuste hledat například termín oznámení nebo soukromí."),
                a("ba8f6f82", "Hledat nastavení"),
                a("g931a6e5", function (e) {
                    return "Sledujete " + e.topic;
                }),
                a("h3f9027a", "Posty na toto téma uvidíte na časové ose své hlavní stránky. Toto téma pomůže přizpůsobit a zlepšit váš zážitek z používání platformy X."),
                a("e241095e", "Vaše témata"),
                a("f8bc75e2", "Tématech"),
                a("ed827af6", "Téma není dostupné."),
                a("d094c720", "Všechna témata"),
                a("g3e87c61", function (e) {
                    return e.topicName + " | Témata";
                }),
                a("g02269ba", "Sledujte na platformě X témata. Budou se vám zobrazovat posty od celé řady účtů, které jsou na daná témata odborníky nebo jsou na platformě X jejich fanoušky."),
                a("e80d2509", function (e) {
                    return "Sledujte na platformě X téma " + e.topicName + ". Budou se vám zobrazovat populární posty od celé řady účtů, které jsou na téma " + e.topicName + " odborníky, jsou jeho fanoušky nebo o něm na platformě X prostě jen rády a často mluví.";
                }),
                a("e44b4256", "Historie příběhu"),
                a("a74af3f8", "Nenalezena historie příběhu."),
                a("c3077694", "Posty Trend"),
                a("a9042b6c", "Historie trendu"),
                a("ed54bc32", "Nahlásit trend"),
                a("f89bcc50", "Trend nahlášen"),
                a("gde7b6b0", "Neuložit"),
                a("i6212670", "Načítání funkce Trend"),
                a("c6a07c10", "Časová osa Trend"),
                a("b0c91a92", "Přihlaste se nebo se zaregistrujte, abyste viděli, co o tom lidé říkají na platformě X"),
                a("d7071084", "Groku, proveď toto"),
                a("ee2200f4", "Tento příběh je souhrnem postů na X vytvořených funkcí grok. Příběh se bude časem vyvíjet."),
                a("e1e5d552", "Upravte svůj Kruh"),
                a("ec13f9cc", "Ve vašem Kruhu zatím nikdo není"),
                a("dab58e32", "Až nějaké lidi přidáte, uvidíte je tady."),
                a("f43112a4", "Jak to funguje"),
                a("a4d60c94", "Něco se pokazilo. Uživatele momentálně nejde do vašeho Kruhu přidat."),
                a("a1ba3bd8", "Váš Kruh je plný. Dosáhli jste maximálního počtu 150 členů v Kruhu."),
                a("ac3fd6e2", "Zatím nemáte žádná doporučení"),
                a("eeb4d3f0", "Tady vám budeme navrhovat lidi, které byste si mohli přidat do svého Kruhu."),
                a("aea3c420", "Zatím žádné citace"),
                a("b40a22c0", "Když nasdílíte post od někoho jiného a přidáte k němu svůj pohled, zobrazí se tady."),
                a("f08d8d08", "Šiřte dál posty, které se vám líbí"),
                a("f0ccff52", "Nasdílejte post od někoho jiného na své časové ose tím, že jej repostujete. Až to uděláte, zobrazí se tady."),
                a("fc1acb54", "Zatím žádné lajky"),
                a("e3527230", "Až někdo (třeba i vy) olajkuje tento post klepnutím na ikonu srdce, zobrazí se to tady."),
                a("i3e8b808", "Načítání seznamu uživatelů, kteří lajknuli tento post"),
                a("c69fd704", "Načítání seznamu uživatelů, kteří repostovali tento post"),
                a("f12858d4", "Lajknuto uživateli"),
                a("fe62cfec", "Repostoval(a)"),
                a("h1c5d6aa", "Posláno vámi"),
                a("h6d45054", "Posláno všemi"),
                a("da68fff1", function (e) {
                    return e.count + " Mince (toto vidíte pouze vy)";
                }),
                a("e35f2534", "Nahrávání zapojení postu"),
                a("i60dfa72", "Zapojení postu"),
                a("dc604dda", "Uživatelé, kteří olajkovali tento post"),
                a("cdd4ef4a", "Uživatelé, kteří repostovali tento post"),
                a("icc72234", "Citace tohoto postu"),
                a("hc35b530", "Zatím žádná označení „To se mi líbí“"),
                a("e0d6a246", "Dosud žádné reposty"),
                a("i2a26cb4", "Až někdo olajkuje tento post klepnutím na ikonu srdce, zobrazí se to tady."),
                a("i9b724e8", "Tady najdete seznam všech uživatelů, kteří tento post citovali."),
                a("a5ab75ae", "Nebyly nalezeny žádné související posty."),
                a("ce637c0e", "Nebyly nalezeny žádné související články."),
                a("fd67deaa", "Sdílet související posty"),
                a("f9183bb6", "Kopírovat odkaz do souvisejících postů"),
                a("fc4e5d96", "Analýzu můžete zobrazit pouze pro své vlastní posty."),
                a("ab0da59f", function (e) {
                    return "Analýzy pro " + e.entity;
                }),
                a("ae32e7de", "Toto je sponzorovaný post. Počet zobrazení tohoto postu je soukromý údaj."),
                a("a10aa36c", "Centru nápovědy"),
                a("d0740558", "Centru nápovědy"),
                a("d2d76dca", "Centru nápovědy"),
                a("de8bcdaa", "Rozpis lidí, kteří viděli váš post"),
                a("cfa1ef16", "Boostovat"),
                a("d267afa2", "Méně než 20"),
                a("db81cab0", "20–29"),
                a("f173716e", "30–39"),
                a("ada329e6", "40–49"),
                a("j2950694", "Více než 50"),
                a("bcd9cf68", "Více než 65"),
                a("f05f1838", "Jiné / neuvedeno"),
                a("fa5be588", "Organické"),
                a("c65126fe", "Boostováno"),
                a("c61c6624", "Sponzorováno"),
                a("f1196a04", "Analýza boostování"),
                a("bb66e3fc", "Analýza sponzorování"),
                a("g512ddcc", "Organická analýza"),
                a("j9256524", "Rozpis výkonu boostování"),
                a("ceeb3016", "Rozpis výkonu sponzorování"),
                a("bf4558fa", "Rozpis výkonu přirozeného zobrazení"),
                a("c69069e6", "Počet zobrazení tohoto postu na platformě X"),
                a("a0615bac", "Celkový počet interakcí nějakého uživatele s postem. Zahrnuje to všechna kliknutí kamkoli v postu (včetně hashtagů, odkazů, avatara, uživatelského jména a rozbalení postu), reposty, odpovědi, sledování a lajky."),
                a("acc4cf12", "Počet zobrazení profilu z tohoto postu"),
                a("c7d0d1c4", "Počet kliknutí na libovolnou adresu URL v tomto postu"),
                a("a4da7724", "Kolikrát si lidé zobrazili podrobnosti o tomto postu"),
                a("jedd2771", function (e) {
                    return e.percentage + " z boostování";
                }),
                a("g33fd6b1", function (e) {
                    return e.percentage + " z reklamy";
                }),
                a("b71059c3", function (e) {
                    return e.percentage + " z nesledujících";
                }),
                a("h4cbba3e", "< 5 %"),
                a("f4f0094c", "< 5 % z boostování"),
                a("h1cdac12", "< 5 % z propagace"),
                a("g884b2cc", "< 5 % od uživatelů, kteří vás nesledují"),
                a("b32334a0", "Oslovené účty"),
                a("h142a79c", "Počet jedinečných zobrazení tohoto postu"),
                a("de4def4e", "% ze všech reklam k datu"),
                a("e3390c1e", "Prvních 48 hodin"),
                a("aead0975", function (e) {
                    return "Umožňuje sledovat, kolikrát byl post přečten během prvních 48 hodin od zveřejnění. Maximální hodnota byla " + e.maxValue + " zobrazení.";
                }),
                a("ib1f8491", function (e) {
                    return e.likeCount + " lajk" + n(e.likeCount, "y", "y", "", "ů");
                }),
                a("dc0e7f37", function (e) {
                    return e.retweetCount + " repost" + n(e.retweetCount, "y", "y", "", "y");
                }),
                a("d0eeb127", function (e) {
                    return e.replyCount + " odpově" + n(e.replyCount, "di", "dí", "ď", "dí");
                }),
                a("db6efeb8", "Sponzorování je aktivní"),
                a("j6daea86", "Sponzorování je pozastaveno"),
                a("hf9ed10f", function (e) {
                    return e.endTimeString + " · " + e.endDateString;
                }),
                a("f42a198d", function (e) {
                    return "Utraceno: " + e.spentBudget + " z " + e.totalBudget;
                }),
                a("e8adeec8", "Znovu sponzorovat"),
                a("fbb5c37e", "Boostovat znovu"),
                a("ccffb487", function (e) {
                    return "Váš post zatím získal " + e.impressions + " nov" + n(e.impressions, "á", "ých", "é", "ých") + " zobrazení. Přepněte na profesionální účet, abyste rozšířili svůj dosah.";
                }),
                a("ha13fd94", "Boostovat post"),
                a("jede3014", "Sponzorování je ve fázi kontroly"),
                a("b823301e", "Po schválení bude váš post sponzorován u vybrané cílové skupiny."),
                a("a2e48870", "Zkontrolujte zásady platformy X pro reklamy"),
                a("ge538876", "Metriky sdíleného videa"),
                a("ca7e10d8", "Jedinečná zhlédnutí"),
                a("i611fc96", "Celkový počet zhlédnutí tohoto videa ve všech postech"),
                a("a69cd868", "Počet jedinečných zobrazení tohoto videa"),
                a("f894a688", "Udržení cílové skupiny"),
                a("ad9d9204", "Procento času, po který diváci sledují video, než ho opustí, a jak velkou část videa zhlédli."),
                a("da4b7a70", "Procentuální podíl lidí, kteří sledovali video do daného času"),
                a("de2d89a2", "Zhlédnuto 25 %"),
                a("i92754c2", "Zhlédnuto 50 %"),
                a("be8ddcc2", "Zhlédnuto 75 %"),
                a("b01410d6", "Zhlédnuto 100 %"),
                a("gfb3d8af", function (e) {
                    return "Sledovali do " + e.timeLabel;
                }),
                a("fc6cbba2", "Zatím tady není nic k vidění."),
                a("b80a53c8", "Tyto informace se tu zobrazí po shromáždění více dat."),
                a("d25dccb6", "Analýzy nejsou dostupné u postů Kruhu."),
                a("g61ac32a", "Automaticky cílíme na uživatele, u kterých je největší pravděpodobnost, že budou interagovat s vaším obsahem."),
                a("e8702feb", function (e) {
                    return "Získejte od nás " + e.couponAmount + "!";
                }),
                a("e44dc579", function (e) {
                    return "Začněte hned a získejte slevu " + e.couponAmount + " na svou první propagaci. Platí do " + e.date + ".";
                }),
                a("hd8df545", function (e) {
                    return "Začněte hned a získejte slevu " + e.couponAmount + " na svou další propagaci. Platí do " + e.date + ".";
                }),
                a("f1d32e41", function (e) {
                    return "Utraťte " + e.spendAmount + " a dostanete " + e.couponAmount + " v kreditech na reklamu.";
                }),
                a("c4d0434b", function (e) {
                    return e.dailyBudget + " denně, " + e.durationLabel;
                }),
                a("dc4a9413", function (e) {
                    return e.totalBudget + " za dobu " + e.durationLabel;
                }),
                a("bad70c09", function (e) {
                    return "Míst" + n(e.numLocations, "a", "a", "o", "a");
                }),
                a("c133a39b", function (e) {
                    return e.minAge + " – " + e.maxAge;
                }),
                a("ee5da8f5", function (e) {
                    return e.minAge + "+";
                }),
                a("g4bf9cb7", function (e) {
                    return e.durationDays + " d" + n(e.durationDays, "ny", "nů", "en", "nů");
                }),
                a("gc3ce5d9", function (e) {
                    return "Odhadovaný dosah: " + e.audienceLow + " až " + e.audienceHigh + " lidí denně";
                }),
                a("c1778029", function (e) {
                    return e.locationsHeading + ": " + e.locations + e.newlinePlaceholder + "Věkové rozmezí: " + e.formattedAge + e.newlinePlaceholder + "Pohlaví: " + e.gender;
                }),
                a("a4ab12b9", function (e) {
                    return "Jakmile za jednu nebo více kampaní utratíte " + e.spendAmount + ", připíšeme přímo na váš reklamní účet kredit ve výši " + e.couponAmount + ". Připsání kreditu může několik dnů trvat.";
                }),
                a("cb51c854", "Libovolné pohlaví"),
                a("bb7b39e2", "Muži"),
                a("eb9466d0", "Ženy"),
                a("b07cc9f2", "Region"),
                a("ce309bee", "Metro"),
                a("cc49d030", "PSČ"),
                a("c3fca124", "Posílit zapojení"),
                a("d4f57cce", "Rozšíření základny sledujících"),
                a("c6daa762", "Získání více kliknutí na odkazy"),
                a("cc642518", "Hledat místa"),
                a("i0e8c3c6", "Výsledky hledání míst"),
                a("f69ad048", "Vybrat polohu"),
                a("d948b978", "Sponzorovat můžete jen svoje vlastní posty."),
                a("cfcdb4a2", "Něco se pokazilo. Zkontrolujte, jestli nemáte zapnutý nějaký nástroj pro blokování reklam."),
                a("j7a2af7a", "Nechcete tento post sponzorovat?"),
                a("a78bce8e", "Pokud teď odejdete, post nebude sponzorován."),
                a("g8844150", "Nesponzorovat"),
                a("e7eb3684", "Denní rozpočet"),
                a("d9f6e3ce", "Posuvník denního rozpočtu"),
                a("b3954eca", "Posuvník doby trvání ve dnech"),
                a("ce665a60", "Odhadovaný dosah je přibližný. Skutečný dosah nejde zaručit."),
                a("i0c3b95c", "Další rundu platíme my!"),
                a("h8b6e32a", "Sponzorovali jste svůj post!"),
                a("ee8014a6", "Kdykoli si můžete prohlédnout analýzu postů a zjistit, jak si vaše reklama vede."),
                a("db841200", "Zvyšte zapojení, oslovte více lidí a propagujte svoji stránku."),
                a("fcc839b6", "Co je vaším cílem?"),
                a("b679a538", "Váš post zahrnuje mediální obsah"),
                a("cb19a2f0", "Získejte více lajků, repostů atd."),
                a("a2d37164", "Získání více návštěvníků webu"),
                a("cefad302", "Přidat do postu odkaz"),
                a("b614fad0", "Ujistěte se, že váš post zahrnuje odkaz."),
                a("de43b660", "Způsoby platby"),
                a("hb4773a0", "Přidat nový způsob platby"),
                a("aa2a3dd4", "Smazat kartu"),
                a("b1c5b63c", "končící na"),
                a("affb5878", "Potvrdit smazání"),
                a("db443ae2", "Vypadá všechno v pořádku?"),
                a("a96f811e", "Cíl sponzorování"),
                a("fbd44e96", "Váš rozpočet"),
                a("e36bce64", "Způsob platby"),
                a("ia83756c", "Mezisoučet"),
                a("cc217a04", "Zůstatek kupónů"),
                a("g4f2b588", "Zbývající zůstatek kupónů"),
                a("i41612da", "Vytvořit reklamu"),
                a("cdae1af0", "Přidat daňové údaje"),
                a("ed8bb5a0", "Přidat podrobnosti platby"),
                a("fc640c20", "Přidejte podrobnosti platby a uplatněte svůj kupón"),
                a("be2dc078", "Zaregistrovat se a přidat podrobnosti platby"),
                a("iaefd4de", "Zaregistrujte se, přidejte podrobnosti platby a uplatněte svůj kupón"),
                a("e5e42640", "Váš kupón se bohužel nepodařilo načíst. Zkuste to prosím znovu později."),
                a("e85dfd66", "Pro tento post již byla vytvořena kampaň."),
                a("a4db098c", "Vypadá to, že se nám nepodařilo vytvořit vaši reklamu. Zkuste to prosím znovu později."),
                a("ef7e3916", "Něco se pokazilo. Zkontrolujte podrobnosti reklamy a zkuste to znovu."),
                a("c1134966", "podmínky a pokyny pro reklamu"),
                a("he45cc43", "podmínky pro kupóny"),
                a("c9439a82", "podmínky a pokyny pro reklamu"),
                a("c672105a", "Koho chcete oslovit?"),
                a("e1efbeae", "Věkové rozmezí"),
                a("c6ff7c10", "Minimum věkového rozmezí"),
                a("b555fb46", "Maximum věkového rozmezí"),
                a("j2c03e12", "55+"),
                a("d4e01892", "reklamy nabízející bydlení, půjčky a pracovní příležitosti"),
                a("df8d4fa0", "Vyberte pohlaví"),
                a("i982d424", "Kolik chcete investovat?"),
                a("b9ff6cb0", "Nebyl zvolen žádný způsob platby"),
                a("i8b90688", "podmínky a pokyny pro reklamu"),
                a("a93bd26d", "podmínky pro kupóny"),
                a("d31dc460", "podmínky a pokyny pro reklamu"),
                a("ga845597", function (e) {
                    return "Celkem za " + e.durationLabel;
                }),
                a("e1945a89", function (e) {
                    return e.audienceLow + " – " + e.audienceHigh;
                }),
                a("b21c2549", "Další informace"),
                a("j9f78b42", "V tomto postu nejsou označeni žádní uživatelé."),
                a("cb2054fa", "Načítání uživatelů"),
                a("e4ad6bda", "Na této fotce"),
                a("cdd4aafe", "Načítání lidí, kteří se účastní konverzace"),
                a("aac3fad2", "Lidé, kteří se účastní této konverzace"),
                a("a7f66562", "Nahrávání postu"),
                a("b7a898fa", "Přejděte na další post přímo odsud!"),
                a("e254fdd2", "Můžete přímo přepnout na další post!"),
                a("h59700fa", "ImmersiveMediaViewer"),
                a("i86c2940", "Posuvník času"),
                a("h2fcc532", "Načítání historie"),
                a("a74821a0", "Vypadá to, že vaši platbu se nepovedlo provést nebo že brzy končí její platnost. Pokud chcete nadále využívat předplatné Premium, aktualizujte si informace pro platby."),
                a("bb55752e", "Mince vám umožní podporovat tvůrce, kteří postují skvělý obsah. Nevyužité mince vám zůstanou na účtu."),
                a("ea7ce65f", function (e) {
                    return "Včetně " + e.count + " bonusov" + n(e.count, "ých mincí", "ých mincí", "é mince", "ých mincí") + ".";
                }),
                a("e557f9d2", "Dosáhli jste limitu zůstatku mincí."),
                a("e2beba5e", "Nejoblíbenější"),
                a("gafeeb96", "Koupit mince"),
                a("bc42db1c", "Předplatné se bude každý měsíc automaticky prodlužovat, ale můžete jej kdykoli zrušit."),
                a("f1561b06", "smluvní podmínky pro kupující"),
                a("fe93ed4a", "Nákup proběhl úspěšně"),
                a("bcb90375", function (e) {
                    return "Váš nový zůstatek mincí je " + e.balance + ".";
                }),
                a("ia2eb0c0", "Nákup se nezdařil!"),
                a("c7e11484", "Vaše seznamy jsou prázdné"),
                a("a96208ba", "Pokud chcete někoho přidat, musíte napřed vytvořit seznam."),
                a("d2826908", "Vytvořit nový seznam"),
                a("he062e8a", "Vybrat seznam"),
                a("c2fb1e94", "Na seznam lze přidat maximálně 5 000 účtů."),
                a("f30edc68", "Přepnout na soukromý"),
                a("h51a2cf6", "Něco se pokazilo. Zkuste banner za minutku smazat ještě jednou."),
                a("bb10280e", "Něco se pokazilo. Zkuste seznam za minutku uložit ještě jednou."),
                a("h8885a22", "Názvy seznamů nemohou být delší než 25 znaků."),
                a("f8132984", "Soukromé seznamy vidíte pouze vy."),
                a("h421e74c", "Navrhované seznamy"),
                a("aa62dea8", "Zatím jsme nic nenašli"),
                a("e5e4d3aa", "Vraťte se později a prohlédněte si navrhované seznamy."),
                a("c4d7650c", "Spravovat členy"),
                a("h7f2418c", "Načítání informací o seznamu"),
                a("b18e5cd2", "Něco se pokazilo. Zkuste seznam za minutku smazat ještě jednou."),
                a("cdd73e9c", "Smazat seznam"),
                a("def8ff62", "Smazat seznam?"),
                a("j8b9cde8", "Tento krok nelze vrátit zpět a o seznam přijdete."),
                a("e9f3dec4", "Hledání v seznamech"),
                a("b9192d55", function (e) {
                    return e.query + " - Hledání v seznamech";
                }),
                a("d6a23192", "Vytvořit nový seznam"),
                a("ie256518", "Časová osa seznamu hledání"),
                a("j57a2568", "Seznam hledání"),
                a("hc76e8cd", function (e) {
                    return "Žádné odpovídající seznamy „" + e.query + "“";
                }),
                a("d872881a", "Proč nějaký nevytvořit?"),
                a("j177067a", "Hledat seznamy"),
                a("g13ea02c", "Zkuste vyhledat seznamy"),
                a("d1461f1e", "Tento seznam je osamělý"),
                a("bcbd3416", "Tady se zobrazí lidi, kteří budou sledovat tento seznam."),
                a("b197a56c", "Sledující seznamu"),
                a("f0ab07f5", function (e) {
                    return "Členové (" + e.memberCount + ")";
                }),
                a("h9ce3406", "Seznam členů"),
                a("dfeaeb26", "Přidat na váš seznam"),
                a("a332103e", "Tady se zobrazí lidi, kteří budou přidáni do tohoto seznamu."),
                a("e2f7dc62", "Najít navrhované členy"),
                a("gc23cc00", "Chcete-li zobrazit návrhy na přidání do tohoto seznamu, zkuste vyhledat nějaké účty."),
                a("e3deb126", "Návrhy pro přidání na seznam"),
                a("eb7b54be", "Načítání seznamů"),
                a("a9ca06d2", "Informace"),
                a("a367dc9a", "V časové posloupnosti se vám zobrazují nejnovější posty."),
                a("dd438748", "Populární posty teď vidíte jako první."),
                a("fe7e217c", "Zobrazit nejnovější posty"),
                a("ce78b698", "Jako první se zobrazují populární posty. Nejnovější posty se zobrazují v pořadí, v jakém jsou zveřejňovány."),
                a("i5a1628a", "Zobrazit nejlepší posty"),
                a("f333a93e", "Jako první se vám zobrazují nejnovější posty. Nejlepší posty zobrazují ty nejpopulárnější."),
                a("c7294984", "Nahlásit seznam"),
                a("g6340998", "Tímto krokem nedojde k vašemu automatickému vrácení na jejich seznamy."),
                a("i6da4f7a", "Sdílet seznam"),
                a("a062ff80", "Kopírovat odkaz na seznam"),
                a("dcdc75a3", function (e) {
                    return "@" + e.screenName + "/" + e.listName;
                }),
                a("d2004da3", function (e) {
                    return "Uživatele @" + e.screenName + " nesledujete.";
                }),
                a("a64512a4", "Časová osa seznamů"),
                a("i0bcc456", "Až tak učiníte, uvidíte jeho seznamy."),
                a("d8315ca0", "Seznamy, na nichž se nacházíte"),
                a("e74be9ac", "Seznamy, na nichž se nachází"),
                a("c80cb4e4", "Nový seznam"),
                a("bbcaa24b", function (e) {
                    return "Seznamy vytvořené uživatelem @" + e.screenName;
                }),
                a("b081cdf7", function (e) {
                    return "Uživatel @" + e.screenName + " zatím nevytvořil žádné seznamy.";
                }),
                a("f5978664", "Až si nějaké vytvoří, uvidíte je tady."),
                a("h243711c", "Ještě jste nevytvořili žádné seznamy."),
                a("b69e2f71", function (e) {
                    return "Uživatel @" + e.screenName + " dosud nebyl přidán na žádný seznam";
                }),
                a("e05568cc", "Až budou přidáni na seznam, uvidíte to tady."),
                a("b86a098a", "Ještě jste nebyli přidáni na žádný seznam."),
                a("h06e09a2", "Až vás někdo přidá na seznam, uvidíte to tady."),
                a("gbaa5489", function (e) {
                    return "Seznamy, kterých je uživatel @" + e.screenName + " členem";
                }),
                a("g6b54ff6", "O nejnovějším dění jste v obraze"),
                a("ec5fd35a", "Když vám někdo pošle žádost, že by vás chtěl sledovat, uvidíte ji tady a budete ji moct schválit nebo zamítnout."),
                a("ec2d8342", "Odmítnout"),
                a("j85d8d90", "Neexistují žádné nevyřízené žádosti o sledování tohoto uživatele."),
                a("c3d23f10", "Vypadá to, že se vyskytl drobný zádrhel. Nemějte ale obavy, není to vaše chyba. Kliknutím níže to můžete zkusit znovu."),
                a("d2613123", function (e) {
                    return "Koupit předplatné za " + e.price + "/měsíc";
                }),
                a("c4640fc0", "Sdílet profil Předplatných"),
                a("a72064a8", "Kopírovat odkaz na profil Předplatných"),
                a("e6c72234", "podmínky sdílení e-mailů"),
                a("b17f0c4b", function (e) {
                    return "Teď jste předplatitelem uživatele @" + e.screenName;
                }),
                a("a5634d9a", "Při zpracovávání Předplatného se vyskytl nějaký problém. Zavřete prosím toto okno a zkuste to znovu."),
                a("fe9d3afa", "Načítání sledujících"),
                a("ab7fc3ef", function (e) {
                    return "Lidé, kteří super-sledují uživatele " + e.fullName + " (@" + e.screenName + ")";
                }),
                a("j0d17377", function (e) {
                    return "Lidé, které znáte a kteří sledují uživatele " + e.fullName + " (@" + e.screenName + ")";
                }),
                a("fa9e827f", function (e) {
                    return "Lidé sledující uživatele " + e.fullName + " (@" + e.screenName + ")";
                }),
                a("ha979be5", function (e) {
                    return "Lidé sledovaní uživatelem " + e.fullName + " (@" + e.screenName + ")";
                }),
                a("d28be573", function (e) {
                    return "Lidé, kteří jsou odběrateli " + e.fullName + " (@" + e.screenName + ")";
                }),
                a("g9da3853", function (e) {
                    return "Lidé, kteří jsou odběrateli " + e.fullName + " (@" + e.screenName + ")";
                }),
                a("cfd952a1", function (e) {
                    return "Ověřené účty sledující uživatele " + e.fullName + " (@" + e.screenName + ")";
                }),
                a("fecc696e", "Ověření sledující"),
                a("g0a2fbbe", "Zatím nemáte žádné Předplatitele"),
                a("g65f4bac", "Ještě nemáte žádné sledující."),
                a("c36cfddc", "Chcete získat sledující?"),
                a("fd275c1a", "Zatím nemáte žádné ověřené sledující."),
                a("e08bd098", "Tady najdete seznam všech uživatelů, kteří si vás Předplatili."),
                a("j029a4dc", "Až vás někdo začne sledovat, uvidíte to tady."),
                a("b2b2c6ce", "Pokud někdo sleduje tento účet, objeví se zde. Postování a interakce s ostatními napomáhá boostovat sledující."),
                a("cb1a15c8", "Sledování účtů představuje snadný způsob, jak si přizpůsobit časovou osu a udržovat si přehled o tom, co se právě děje ohledně témat a lidí, na kterých vám záleží."),
                a("i967b954", "Zde najdete seznam všech svých předplatných."),
                a("a44e403e", "Pokud vás začne sledovat ověřený účet, uvidíte jej zde."),
                a("d74ee2e3", function (e) {
                    return "Uživatel @" + e.screenName + " zatím nemá žádné sledující, které znáte.";
                }),
                a("ae5749c7", function (e) {
                    return "Uživatel @" + e.screenName + " nikoho nesleduje.";
                }),
                a("b5099e33", function (e) {
                    return "Uživatel @" + e.screenName + " nemá žádné ověřené sledující.";
                }),
                a("ec251f36", "Až uživatele začne sledovat někdo, koho znáte, uvidíte to tady."),
                a("f8af4f48", "Jakmile uživatel začne sledovat nějaké účty, zobrazí se tady."),
                a("fd0aad94", "Když někdo ověřený sleduje tento účet, zobrazí se zde."),
                a("b84f6df1", function (e) {
                    return "Dárek Premium se slevou " + e.percentage + " % po omezenou dobu.";
                }),
                a("cfcac293", function (e) {
                    return "Darovat a zaplatit " + e.price;
                }),
                a("d7a73450", "Úroveň"),
                a("hbd2c24e", "Tento účet v současné době není způsobilý pro dárky."),
                a("f3fddc98", "Smluvní podmínky pro kupující"),
                a("cff9c889", "Další informace"),
                a("c65dda96", "Váš dárek byl odeslán."),
                a("f6e2a407", function (e) {
                    return "Povolit všem, aby viděli váš odznak předplatitele, když odpovíte na posty uživatele @" + e.screenName;
                }),
                a("j8dedddd", function (e) {
                    return "Když tuto možnost vypnete, uživatel @" + e.screenName + " a jeho odběratelé přesto uvidí váš odznak, pokud odpovíte na některý z postů určených jenom pro odběratele uživatele @" + e.screenName + ". Uživatel @" + e.screenName + " váš odznak uvidí vždy.";
                }),
                a("c8a513f6", "Zrušit Předplatné"),
                a("ea000ec8", "Už jste své Předplatné zrušili?"),
                a("d7b8387e", "Pokud jste už Předplatné zrušili, nemusíte dělat nic dalšího. Platnost vašeho Předplatného automaticky vyprší na konci fakturačního období."),
                a("f4166d9a", "Chcete své Předplatné zrušit?"),
                a("b74ff5fc", "Pokud Předplatné zrušíte, jeho platnost automaticky vyprší na konci fakturačního období."),
                a("ee9efbc8", "Pokračovat ke zrušení"),
                a("c5d9c77a", "Vypadá to, že se vyskytl drobný zádrhel. Nemějte ale obavy, není to vaše chyba. Zavřete toto okno a zkuste to znovu."),
                a("jda53c24", "Své Předplatné můžete zrušit v obchodu Apple App Store."),
                a("g0a7a53e", "Své Předplatné můžete zrušit v obchodu Google Play."),
                a("i5f14be7", function (e) {
                    return "Vítejte zpět, " + e.displayName;
                }),
                a("a76d58ba", "Analýza reklam"),
                a("eccd0e1a", "Analytika organizace"),
                a("deea1708", "Chcete zobrazit analytiku pro všechny své účty X?"),
                a("eb603ffc", "Upgradujte, chcete-li se spojit se svou sítí a zobrazit souhrnnou analytiku."),
                a("gf67aae4", "Upgradovat pro plný přístup"),
                a("h75e3618", "Včetně organizace"),
                a("h24a8862", "O zaškrtnutí"),
                a("c29e3a88", "Vyberte si partnerské účty"),
                a("j8318d57", function (e) {
                    return e.number + " partnersk" + n(e.number, "é účty", "é účty", "ý účet", "é účty");
                }),
                a("bf809ec0", "Vyberte si partnerské účty"),
                a("b719e224", "Žádné výsledky"),
                a("c9938100", "Výsledky hledání"),
                a("d1a35ec6", "Přidat účty"),
                a("b437adda", "Upgradujte k platbě"),
                a("f1f6c88b", function (e) {
                    return "Účty (" + e.count + ")";
                }),
                a("b02156b8", "Pozvánky"),
                a("gd67d29b", function (e) {
                    return "Pozvánky (" + e.count + ")";
                }),
                a("daf646e6", "Upozornění: účty je nutno označit vhodným způsobem."),
                a("i3895c32", "Váš účet prochází kontrolou, protože jste změnili svoje @uživatelské jméno na platformě X"),
                a("i5f8b628", "Dokud nebude váš účet zkontrolován, nemůžete upravovat své partnerské účty."),
                a("e9e663ac", "Vaše platba je po splatnosti."),
                a("c3ddd22c", "podmínky"),
                a("c9729d8a", "podmínky"),
                a("cdcd1d2c", "Přidat partnery k vaší organizaci"),
                a("d30ea6f3", function (e) {
                    return "Jste si jistí, že chcete odebrat @" + e.name + "?";
                }),
                a("c2dfbb86", "Ano, udělejte to"),
                a("ba047f76", "Odebráním partnerského účtu okamžitě odeberete jeho zaškrtnutí a odznak partnera. Do konce měsíce vám budou nadále účtovány poplatky."),
                a("j26dee0e", "Odebrat partnerský účet"),
                a("e30cbdf0", "Tato partnerský účet je předplatitelem ověřených organizací a musí zůstat organizací. Nelze jej změnit na individuální."),
                a("j3115ce8", "Jednotlivec"),
                a("d8bb1d84", "Organizace"),
                a("e970bdbd", function (e) {
                    return "Zbývá " + e.count + " pozvánek";
                }),
                a("id67d953", function (e) {
                    return "Při načítání podrobností o vaší pokladně Stripe se něco pokazilo. Pokud tento problém přetrvává, kontaktujte " + e.supportEmail + ".";
                }),
                a("f323d314", "Odeslat znovu"),
                a("ac645cde", "Můžete je kdykoli znovu přidat."),
                a("d12af2dd", function (e) {
                    return "Opravdu chcete odebrat tuto pozvánku pro @" + e.screenName + "?";
                }),
                a("ib60b2d5", function (e) {
                    return "Opravdu chcete @" + e.screenName + " znovu poslat tuto pozvánku?";
                }),
                a("ec6e7d9a", "Váš účet je v režimu pouze pro čtení, dokud nebude dokončeno přepínání mezi vrstvami čekajícími na vyřízení. Přejděte na Stripe a zkontrolujte svou platbu, abyste zajistili úspěšné přepnutí úrovně."),
                a("b33d1518", "Synchronizujte úlohy z podporované integrace nebo vlastního zdroje XML"),
                a("dd2db402", "Krok 1: Shromáždit požadované informace"),
                a("edb098c2", "Krok 2: Kontaktujte náš tým podpory"),
                a("c4474460", "Krok 2: Poslat e-mail našemu týmu podpory"),
                a("a08da0fa", "Co se stane dál?"),
                a("c127374e", "Pošlete nám zprávu"),
                a("b2cb2a0c", "Uživatelské jméno vašeho účtu Ověřené organizace"),
                a("b8e64002", "Název vašeho systému sledování žadatelů"),
                a("acb99db6", "Adresa URL kariérního webu, kde jsou uvedeny vaše pracovní pozice"),
                a("a64a5b7a", "Pošlete požadované informace našemu týmu podpory, aby mohl začít proces integrace."),
                a("e3dffb4e", "Zkopírujte naši e-mailovou adresu podpory níže a odešlete požadované informace našemu týmu podpory, aby mohl začít proces integrace."),
                a("b4fef99e", "Poté, co náš tým podpory obdrží vaši žádost, zkontrolujeme vaše informace a pomůžeme vám s konfigurací integrace."),
                a("h37f2d96", "Pamatujte, že v současné době nejsou podporovány všechny systémy sledování žadatelů."),
                a("ce102a20", "Přesměrování na Stripe");
            function r(e, o) {
                for (var t = 0; t < o.length; t++) {
                    var a = o[t];
                    (a.enumerable = a.enumerable || !1),
                        (a.configurable = !0),
                        "value" in a && (a.writable = !0),
                        Object.defineProperty(
                            e,
                            ((n = a.key),
                            (r = void 0),
                            "symbol" ==
                            typeof (r = (function (e, o) {
                                if ("object" != typeof e || null === e) return e;
                                var t = e[Symbol.toPrimitive];
                                if (void 0 !== t) {
                                    var a = t.call(e, o || "default");
                                    if ("object" != typeof a) return a;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === o ? String : Number)(e);
                            })(n, "string"))
                                ? r
                                : String(r)),
                            a,
                        );
                }
                var n, r;
            }
            function i(e, o) {
                return (
                    (i = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, o) {
                              return (e.__proto__ = o), e;
                          }),
                    i(e, o)
                );
            }
            a("ddfd6718", "Platba selhala"),
                a("i90ea7d2", "Urychleně aktualizujte svoje vyúčtování, abyste si zachovali výhody."),
                a("a62359e6", "Nastavení Ověřených organizací"),
                a("ge221b7c", "Upgradujte předplatné ověřené organizace a získejte přístup k partnerským účtům a většímu množství reklamních kreditů."),
                a("i4dccc18", "Vyúčtování"),
                a("ec3cd6e4", "Spravujte svůj způsob platby, aktualizujte fakturační údaje a kontrolujte své faktury."),
                a("dac61c3c", "Nastavení účtu"),
                a("b6b5fd66", "Spravujte svůj účet X včetně změny uživatelského jména nebo hesla."),
                a("hb9c4a1c", "Otázky, zprávy o chybách a zpětná vazba"),
                a("c674f5b4", "Nastavení plateb faktur"),
                a("i8237e66", "Přejděte z plateb kartou na fakturaci bankovním převodem."),
                a("hebd348a", "Nakonfigurujte, jak se reklamy používají k propagaci pracovních pozic z portálu Nábor."),
                a("ib5e6f90", "Propagace pracovní pozice"),
                a("id720215", "Nábor"),
                a("dd59f146", "Reklamní účet pro propagaci pracovní pozice"),
                a("e7e36818", "Reklamní účty jsou způsobilé pro propagaci pracovní pozice, pokud jsou plně vybaveny zdrojem financování."),
                a("c28566e0", "Reklamní účet"),
                a("c80160d3", "Reklama"),
                a("ff0edac0", "Opravdu chcete zrušit předplatné?"),
                a("h2ac0348", "Ne, chci se vrátit"),
                a("dbf9667e", "Ano"),
                a("j7592572", "Obrat do protisměru"),
                a("ee778942", "Semafor"),
                a("fdd57981", function (e) {
                    return "Rádi bychom vám nabídli jednorázový kredit na reklamu v hodnotě " + e.totalAmount + " USD.";
                }),
                a("i032a231", function (e) {
                    return "Zůstanu a uplatním svůj kredit na reklamu v hodnotě " + e.totalAmount;
                }),
                a("hd7d278c", "Ne, díky"),
                a("jf8a0dea", "Výborně! Nový kredit na reklamu zdarma se ve vašem účtu objeví v příštím fakturačním cyklu."),
                a("ebbb3154", "Zavřít a vrátit se na X"),
                a("j1f68dda", "Poslední krok: Opravdu chcete akci zrušit?"),
                a("c9c3464c", "Probíhá rušení předplatného"),
                a("dd3a293c", "Vaše předplatné Ověřených organizací skončilo."),
                a("faa0f956", "Při rušení předplatného došlo k nějaké chybě."),
                a("b28289ea", "Díky"),
                a("b36f74ae", "K portálu už nebudete mít přístup, pokud se znovu nezaregistrujete a přístup neaktivujete."),
                a("b2297a4a", "Potřebujete vyřešit nějaký problém? Můžete si s námi naplánovat hovor."),
                a("h3bdbc54", "Ano, chci naplánovat hovor"),
                a("i135d64e", "Pokračovat ve zrušení"),
                a("g275882d", function (e) {
                    return "Důležité: Máte neuplatněný kredit na reklamu zdarma v hodnotě " + e.creditAmount;
                }),
                a("ib085ed6", "Zůstanu a uplatním svůj kredit na reklamu"),
                a("b5447710", "Tohoto uživatele nemůžeme najít."),
                a("h94755b8", "Uživatel už je k pozvání vybrán"),
                a("bfb5effe", "Uživatel již partnerským účtem"),
                a("c4b9664e", "Přidruženo"),
                a("g0eadcf6", "Přidružený k jiné organizaci"),
                a("a8c81f88", "Účet organizace"),
                a("e5abe772", "Uživateli už byla pozvánka zaslána a čeká"),
                a("e49b97e2", "Hledat účty"),
                a("f002f1d6", "Odeslat pozvánku"),
                a("g2a8bae4", "Přidat účty na platformě X"),
                a("af7293cc", "Pozvěte účty na platformě X, aby se připojily k vaší organizaci. Pokud pozvánku přijmou, získají zaškrtnutí a vaše partnerství se zobrazí na jejich profilech."),
                a("ec0f203e", "Jakmile partnerský účet přijme pozvánku, nezapomeňte aktualizovat jeho zaškrtnutí na správnou barvu."),
                a("cec08784", "Dosáhli jste limitu pro partnerské účty na této faktuře."),
                a("ab70828f", function (e) {
                    return "Přidat uživatele @" + e.screenName;
                }),
                a("d49b389f", "zde"),
                a("b9e4bf55", "Další informace"),
                a("hc4703a9", "Další informace"),
                a("fa0ffaeb", "Další informace"),
                a("jf351704", "Pokud chcete pokračovat, musíte aktualizovat limit partnerských účtů na této faktuře."),
                a("ia5a6a40", "Abyte mohli začít, musíte přidat podrobnosti platby."),
                a("d40d1cc0", "Chcete-li pokračovat, musíte zaplatit přes Stripe."),
                a("c4a5f614", "Přidat podrobnosti platby"),
                a("fa2a280a", "Aktualizovat fakturu"),
                a("i7b2f08e", "Vítají vás Ověřené organizace"),
                a("g4e18b84", "Dosáhli jste limitu partnerských účtů"),
                a("cbe23239", function (e) {
                    return "Pro nákupní objednávky nad " + e.affiliatesCount + " partnerských účtů.";
                }),
                a("fc1f43d0", "Vytvořit fakturu"),
                a("g8881c78", "Pokračujte k platbě"),
                a("g59f8506", "Poznámka: Účtům, které nemohou doložit, že jsou podnikem nebo státním subjektem, nebudou vypláceny refundace."),
                a("a310e476", "Přímo"),
                a("fde6cf98", "Pro okamžitý přístup k Ověřeným organizacím."),
                a("fdfbfcb0", "Fakturace"),
                a("f45d02e8", "Při nastavování předplatného došlo k nějaké chybě. Pošlete žádost znovu ze svého aktivačního e-mailu."),
                a("a1c566c0", "Při nastavování předplatného se vyskytl problém. Odešlete své údaje znovu."),
                a("f5a1c6ac", "Předplatná nejsou ve vašem regionu k dispozici"),
                a("ef7ae9cd", "Další informace"),
                a("d3c6b8c9", "Další informace"),
                a("fafe5b9f", function (e) {
                    return "Přihlásit se k odběru · " + e.price + " za " + e.interval;
                }),
                a("f2ae1d63", "smluvními podmínkami pro kupujícího"),
                a("ie8759c5", "smluvními podmínkami pro kupujícího"),
                a("d842dd7b", function (e) {
                    return "Rozvíjejte se na platformě X rychleji a získejte zdarma " + e.credit + " kreditů na reklamu";
                }),
                a("fcfb696e", "⁺ Časově omezená nabídka kreditů na reklamu."),
                a("f5b98d62", function (e) {
                    return "každý " + e.interval;
                }),
                a("ed7b9984", function (e) {
                    return "každý " + e.interval;
                }),
                a("da11a2d7", function (e) {
                    return "Až " + e.creditAmount + " v kreditech na reklamu⁺";
                }),
                a("a6c45ede", "Včetně:"),
                a("e9aa43dc", "Organické zveřejňování pracovních pozic"),
                a("i1266238", "Možnosti propagace pracovní pozice"),
                a("e8a4ea7a", "Prioritní podpora"),
                a("j99e2f4d", function (e) {
                    return e.price + " / " + e.interval;
                }),
                a("ieafe1c6", "Potvrďte změnu svého předplatného"),
                a("bb21a170", "Změnit předplatné"),
                a("b0dcc4dc", "Váš účet již čeká na změnu úrovně."),
                a("f3aef4ca", "Nebyla nalezena žádná aktivní předplatná"),
                a("h802e65e", "Aktualizace předplatného selhala. Zkuste to znovu. Vaše aktuální předplatné nebylo ovlivněno."),
                a("c5269eb0", "Toto je vaše aktivní předplatné"),
                a("c578c4ca", "Aktuální plán"),
                a("i5d19147", "Nový plán"),
                a("b025ff5f", "zde"),
                a("d6b932d4", "V bezplatné zkušební verzi"),
                a("b0efe690", "Pokračovat s předplatným Basic"),
                a("g5f9cdaa", "Potvrďte svoje změny plánu"),
                a("j21911de", "Chcete pokračovat s předplatným Basic, nebo si ponechat výhody spojené s plným přístupem?"),
                a("b59dec9e", "Přecházíte na plán Basic z bezplatné zkušební verze s plným přístupem."),
                a("e5ff0e1e", "S touto změnou:"),
                a("ca004c80", "Funkce zkušební verze s plným přístupem, včetně partnerských účtů, již nebudou k dispozici."),
                a("fae108ee", "Partnerské účty přidané během zkušebního období ztratí výhody a podporu Premium+."),
                a("d47c0c7c", "Kdo jste?"),
                a("hbd31720", "Vyberte si pro sebe správné předplatné:"),
                a("c75a9386", "Další informace o"),
                a("b916b258", "a"),
                a("ic6012ea", "Já jsem jednotlivec"),
                a("d8e618ce", "Pro jednotlivce a tvůrce"),
                a("dcbccede", "Já jsem organizace"),
                a("f44ce884", "Pro firmy, vládní agentury a neziskové organizace"),
                a("dece6c60", "Název organizace"),
                a("c4c1b600", "E-mailová adresa organizace"),
                a("b1e0aec0", "@uživatelské jméno organizace"),
                a("c42d5f4a", "Počet partnerských účtů"),
                a("fca5f04b", function (e) {
                    return "Můžete zakoupit až " + e.affiliatesCount + " partnerských účtů, za což vám bude účtován odpovídající poplatek.";
                }),
                a("dca6b3ac", "Nastavení faktury"),
                a("c97ad52a", "Aktualizovat fakturu"),
                a("b36f0fd4", "Vyberte, kolik partnerských účtů potřebujete pro svou organizaci."),
                a("b4871f4f", "zde"),
                a("b633d19e", "Děkujeme."),
                a("f713d3e2", "Vaše žádost byla přijata a nyní probíhá kontrola."),
                a("e11d5e1a", "Budete moci využívat všechny výhody Premium, ale vaše organizace neobdrží zlaté nebo šedé zaškrtnutí a nebudete moci přidávat partnerské účty, dokud váš účet nebude schválen."),
                a("d83617cc", "Váš účet bude zkontrolován."),
                a("afb30564", "Můžeme od vás požadovat další informace, abychom mohli schválit váš účet"),
                a("gdd3fa68", "Po kontrole a schválení bude váš účet okamžitě ověřen a vy se budete moci přihlásit a přidávat partnerské účty."),
                a("e6389996", "Každý účet, který nebude schválen, nebude refundován."),
                a("a889b460", "Platba proběhla úspěšně"),
                a("d1c886dc", "Další krok: Nahrání a ověření dokumentů"),
                a("b13e9454", "Vaše žádost ještě není dokončena. Prosíme o předložení vyžadovaných dokumentů. Obvykle to zabere asi 10 minut."),
                a("e6b0965a", "Vaše objednávka"),
                a("a1b58798", "Zkontrolujte svou objednávku níže"),
                a("b651c7d7", function (e) {
                    return "Partnersk" + n(e.count, "é účty", "é účty", "ý účet", "é účty") + " vs. " + e.count;
                }),
                a("ec5e9c54", "Základní předplatné"),
                a("e16093fc", "Celkově za měsíc"),
                a("ce4acef6", "Celkově za rok"),
                a("f4db2df0", "Vaše předplatné se stane aktivním až po zaplacení faktury."),
                a("b9e0d614", "Limit partnerských účtů byl na vaší faktuře aktualizován."),
                a("a45c9596", "Faktura byla úspěšně vytvořena."),
                a("e4e5532a", "Uplatněna sleva"),
                a("b557f073", function (e) {
                    return "Při načítání podrobností o vaší faktuře Stripe se něco pokazilo. Pokud tento problém přetrvává, kontaktujte " + e.supportEmail + ".";
                }),
                a("e8c366ce", "smluvními podmínkami "),
                a("ee86d380", "Informace o organizaci"),
                a("b9c9ccca", "Vaše celé jméno"),
                a("c7e818de", "Vaše pracovní e-mailová adresa"),
                a("i60d7542", "Webová stránka organizace"),
                a("b92f9dee", "Typ organizace"),
                a("f14d7866", function (e) {
                    return "" + e.screenName;
                }),
                a("e63bf39d", "Další informace"),
                a("f09630ff", "zde"),
                a("eb043b72", "Přihláška se zpracovává"),
                a("a9ac4602", "Vaše přihláška do ověřených organizací se stále kontroluje. Zkuste to znovu později."),
                a("c5af3e12", "Časově omezená nabídka. Kredity se neshromažďují."),
                a("e18d6fd6", "Váš kredit na reklamy"),
                a("if435d1a", "Tento měsíc jste vyčerpali všechny své dostupné kredity. Další kredit vám bude vydán při další platbě předplatného."),
                a("af6704d7", "zde"),
                a("b293c6b4", "podporu Premium pro ověřené účty"),
                a("e9e9ca58", "K dispozici"),
                a("cf2ba3a2", "ID reklamního účtu"),
                a("gd7d051c", "Aktivovat"),
                a("f391c800", "ID reklamního účtu je povinné"),
                a("ja116d2c", "ID reklamního účtu je neplatné"),
                a("hf037537", function (e) {
                    return "Tento kredit bude dostupný od " + e.startDate;
                }),
                a("d0b58c01", function (e) {
                    return "" + e.days;
                }),
                a("e49cb8a7", function (e) {
                    return "" + e.remainingAmount;
                }),
                a("gd03b494", "Jak používat kredit na reklamu"),
                a("h1f36d3e", "Pokud chcete využít kredit na reklamu Ověřených organizací, musíte provést následující:"),
                a("a6519ffc", "Pokud jste už dříve inzerovali"),
                a("ibc9654a", "Pokud jste nový inzerent"),
                a("d3710c76", "Pokud budete chtít použít svůj kredit na partnerský účet"),
                a("d60a8f14", "Spouštění reklam v X"),
                a("fe66e4a8", "Správce reklam X"),
                a("b3ca0108", "Šiřte svou zprávu široko daleko pomocí reklam na platformě X."),
                a("g3754d57", "zde"),
                a("i615ad63", "zde"),
                a("a3ba48b9", "sem"),
                a("ca3c633a", "Kredity za reklamu"),
                a("ha843c96", "reklamy"),
                a("dd0f3b08", "reklamy"),
                a("c9fad534", "Žádné kredity"),
                a("a211b11e", "Nejsou k dispozici žádné kredity k aktivaci"),
                a("f2011db1", function (e) {
                    return "Využito " + e.usedAmount + " z " + e.couponAmount;
                }),
                a("ae37e25c", "neznámé množství"),
                a("i1407e15", function (e) {
                    return "Použito pro reklamní účet " + e.accountId;
                }),
                a("id4359bf", function (e) {
                    return "Vypršelo " + e.when + " pro reklamní účet " + e.accountId;
                }),
                a("f89af915", function (e) {
                    return "Platnost vypršela " + e.when;
                }),
                a("c1b5e1ed", function (e) {
                    return "Vyprší " + e.when + " pro reklamní účet " + e.accountId;
                }),
                a("e8d8a2a9", function (e) {
                    return "Vyprší " + e.when;
                }),
                a("i3884c1f", function (e) {
                    return "Dostupné " + e.when;
                }),
                a("b070acf4", "Brzy dostupné"),
                a("ace946c4", "Aktivujte kupón"),
                a("b0b02e37", function (e) {
                    return "Tento kupón byl úspěšně použit pro reklamní účet s ID: " + e.accountId;
                }),
                a("f520ee22", "ID reklamního účtu"),
                a("df96ca56", "Jiný účet"),
                a("b5566402", "ID může obsahovat pouze písmena a čísla."),
                a("eb160d07", "výběru správce reklamních účtů"),
                a("e016ad32", "Režim Pouze pro čtení"),
                a("d7ab194e", "Některé funkce ověřeného účtu mohou být během zpracování změny předplatného v režimu Pouze pro čtení."),
                a("g25d851e", "Reklamní účty"),
                a("de7fef84", "Požádejte zákaznickou podporu o pomoc s tímto účtem"),
                a("ff1321b6", "Nastavení je dokončené, účet je aktivní"),
                a("c1205320", "Aktivujte svůj reklamní účet přidáním kreditní karty"),
                a("c0343c0a", "Poslední platba se nezdařila, zkontrolujte způsob platby na účtu"),
                a("j56e34a4", "Požádejte zákaznickou podporu o pomoc s přístupem k účtu"),
                a("gef920f2", "K aktivaci účtu je nutné počáteční nastavení"),
                a("b68dd4d8", "K tomuto účtu nemáte přístup, požádejte o pomoc správce týmu"),
                a("d637962c", "Nemáte žádné reklamní účty"),
                a("dd087ae0", "Nastavte si ho na ads.x.com"),
                a("i3d7dd02", "Způsobilý reklamní účet je připraven k propagaci pracovní pozice"),
                a("cc8f8516", "Vytvořte si reklamní účet, abyste mohli propagovat pracovní pozice"),
                a("b4f117b8", "Nemáte přístup k reklamnímu účtu pro propagaci pracovní pozice"),
                a("b7347cf4", "Nastavte si reklamní účet, abyste mohli propagovat pracovní pozice"),
                a("h7d03a2a", "Přidejte pracovní pozici prostřednictvím řídicího panelu Nábor"),
                a("cd5aeec6", "Vytvořit reklamní účet"),
                a("ged51d2e", "Vytvořit reklamní účet"),
                a("gcfa25e6", "Vaše organizace nemůže používat žádné reklamní účty. Přejděte na stránku ads.x.com a vytvořte si ho."),
                a("g76fb922", "Nový účet"),
                a("db0a69e7", function (e) {
                    return "Váš reklamní účet (ID: " + e.adAccountId + ") je nový. Dokončete počáteční nastavení ve Správci reklam, abyste jej aktivovali.";
                }),
                a("c7bad5cc", "Nastavte si účet"),
                a("g8c563c0", "Musíte mít přístup"),
                a("f6f29b17", function (e) {
                    return "Nemáte přístup k reklamnímu účtu (ID: " + e.adAccountId + "). Požádejte správce svého týmu, aby vás přidal do účtu ve Správci reklam.";
                }),
                a("a15bb840", "Potřebujete způsob platby"),
                a("j4e981d9", function (e) {
                    return "Váš reklamní účet (ID: " + e.adAccountId + ") je částečně nastaven. Pokud ho chcete aktivovat, přidejte k účtu způsob platby. Všechny kredity, které na tento účet použijete, budou vyčerpány, než vám bude stržena platba.";
                }),
                a("af142910", "Platba selhala"),
                a("a9635acf", function (e) {
                    return "Váš reklamní účet (ID: " + e.adAccountId + ") byl aktivní, ale poslední platba selhala. Pokud ho chcete znovu aktivovat, změňte způsob platby na tomto účtu.";
                }),
                a("d1cca474", "Změňte způsob platby"),
                a("fe8b969a", "Zákaznická podpora vám může pomoci"),
                a("i8aa0b91", function (e) {
                    return "Tento reklamní účet (ID: " + e.adAccountId + ") potřebuje pomoc od zákaznické podpory s aktivací. Ve zprávě nezapomeňte uvést ID reklamního účtu. Vaše žádost bude upřednostněna.";
                }),
                a("d82c2074", "Získat podporu"),
                a("ad37d536", "Podmínky převodu uživatelského jména"),
                a("e760074a", "Získejte pozastavené uživatelské jméno nebo vyměňte uživatelské jméno, které vlastníte"),
                a("j003ef92", "Kupte si neaktivní uživatelská jména od X pro vás nebo vaše přidružené společnosti nebo vyměňte uživatelská jména, které již vlastníte."),
                a("d57a8e42", "Tato služba je exkluzivní pro ověřené organizace a zahrnuje dodatečné náklady na uživatelské jméno od 10 000 USD."),
                a("h9367bd6", "Odeslat dotaz ohledně uživatelského jména"),
                a("a6a62e7e", "Začněte proces zodpovězením několika otázek pomocí našeho robota automatizované podpory."),
                a("e5912290", "Dotaz ohledně uživatelského jména začíná"),
                a("c2e24f66", "Podívejte se na zprávu od podpory v dolním rohu této obrazovky."),
                a("c94f514e", "Dotaz ohledně uživatelského jména byl zahájen"),
                a("cf60d152", "Vyplňte krátký dotazník v okně chatu a odešlete svůj dotaz ohledně uživatelského jména."),
                a("f06b124e", "Často kladené dotazy"),
                a("h677fdcc", "Jak vzniká cena uživatelského jména?"),
                a("a55b39aa", "Primárně na základě délky znaků a shody slov. Ceny začínají na 10 000 USD a pohybují se až nad 500 000 USD."),
                a("d46bcb3a", "Jak zjistím, zda je možné uživatelské jméno zakoupit?"),
                a("c6bcf72c", "Pošlete nám žádost pomocí tlačítka Začínáme a my vám dáme vědět, zda je k dispozici."),
                a("d478604c", "Mohu si koupit uživatelské jméno jménem jiné firmy?"),
                a("c09f8cd2", "Ne. Firmy mohou nakupovat uživatelská jména pouze jménem svých přidružených společností, které jsou skutečně spojeny s jejich firmou."),
                a("d814f020", "Jak prodej probíhá? Jak dlouho to trvá?"),
                a("f600b6f0", "Požádejte o nákup nebo výměnu uživatelského jména pomocí tlačítka Začínáme. Do 3 pracovních dní vám pošleme odpověď ohledně dostupnosti a ceny. Po zaplacení převedeme do 1 až 2 dní uživatelské jméno na vámi vybraný účet. Pokud budete chtít, můžeme přesunout staré uživatelské jméno na jiný účet, který vlastníte."),
                a("i8debc4a", "Nabízíte slevu pro více uživatelských jmen?"),
                a("c5199f3c", "Ano, v závislosti na počtu uživatelských jmen, které si zakoupíte, a celkové velikosti nabídky."),
                a("c20f923e", "Mám obchodní známku - ovlivní to něco?"),
                a("b2fd4c15", "Zásadách používání ochranných známek"),
                a("a690746e", "Získejte prioritní podporu"),
                a("he2dc9b0", "Kontaktujte nás a zašlete nám uživatelské jméno vaší organizace a podrobnosti o žádosti."),
                a("e5e6479e", "Pošlete nám e-mail s uživatelským jménem vaší organizace a podrobnostmi vašeho dotazu, abyste získali co nejrychlejší podporu."),
                a("ica8392a", "Jakmile vaši žádost obdržíme, zkontrolujeme a upřednostníme ji v rámci obdržené objednávky."),
                a("ed37e36e", "Důležité: Chybějící uživatelské jméno vaší organizace nebo použití osobního e-mailu může způsobit zpoždění ve zpracování vaší žádosti."),
                a("eb0d4fe2", "Vytvářejte sloupce"),
                a("e93d2f8a", "Své prostředí si můžete přizpůsobit přidáním různých sloupců, jako jsou:"),
                a("e8203d1e", "Hledání"),
                a("d82fd532", "Soukromé zprávy"),
                a("c87babee", "A další..."),
                a("f1990aa4", "Uspořádejte si sloupce pomocí decků"),
                a("ib9c9a54", "Aplikace X Pro vám poskytne několik pracovních ploch vedle sebe. Nepodstatné věci můžete skrýt a zaměřit se jenom na témata a nástroje, které zrovna potřebujete."),
                a("fb5ac13e", "Přesouvejte sloupce"),
                a("bd545b7e", "Pomocí těchto teček můžete sloupec přetáhnout na libovolné místo v decku."),
                a("a98513b6", "Upravujte si sloupce podle sebe"),
                a("c8759e44", "Najetím myší na horní část sloupce můžete zobrazit možnosti a například:"),
                a("a93e96c8", "Uspořádat posty od nejpopulárnějších nebo nejnovějších"),
                a("df300378", "Změnit velikost sloupce"),
                a("aa263910", "Použít pokročilé vyhledávací nástroje"),
                a("ab3915aa", "Tipy a nastavení"),
                a("ia03837a", "Tady můžete:"),
                a("f0bd595c", "Spravovat decky"),
                a("a74e9464", "Nastavit si možnosti zobrazení"),
                a("h254eb92", "Prozkoumat klávesové zkratky"),
                a("j6e669a0", "Vyrazit na prohlídku znovu"),
                a("c15802be", "Odesílání postu..."),
                a("e5506950", "Decky"),
                a("b1bd9a8a", "Nový deck"),
                a("cf1a138f", function (e) {
                    return "Změněno na deck " + e.title;
                }),
                a("g9c2da24", "Otevře dialog pro vytvoření nového decku"),
                a("hcef6b72", "Otevře dialog pro správu vašich decků"),
                a("a77dbc7a", "Upravit deck"),
                a("a154a293", function (e) {
                    return "Byl vybrán deck " + e.deckName;
                }),
                a("a77bbe9d", function (e) {
                    return "Výběr decku " + e.deckName + " byl zrušen";
                }),
                a("ha2aae72", "Otevře dialog pro správu vybraného decku."),
                a("hf59ffc8", "Navigační panel"),
                a("dd6142d7", "Pro"),
                a("d69fc67a", "Přidat nový sloupec"),
                a("ad61a830", "Vytvořit post"),
                a("c44f5114", "Nastavení zpráv"),
                a("c71066fe", "Začít prohlídku"),
                a("b452e6c2", "Jak se vám vede?"),
                a("j7737bc2", "Děkujeme, že používáte X Pro. Rádi bychom se dozvěděli, jak jste s ním zatím spokojení."),
                a("e8038d64", "Váš názor je pro nás důležitý a pomůže nám s vylepšováním nabízených funkcí."),
                a("fce3c5ce", "Sdělit názor"),
                a("ha39df38", "Osobní"),
                a("ja7b7d1a", "Aktuálně máme nějaké potíže s připojením. Změny, které provedete, pravděpodobně nebude možné uložit."),
                a("ad5df1d7", function (e) {
                    return "Změněno na sloupec " + e.title;
                }),
                a("ba7bd92e", "Nastavení sloupců"),
                a("cc4ff736", "Sdílení sloupce"),
                a("g684a93a", "Jakékoli změny, které provedete u tohoto sloupce, budou viditelné pro všechny, kdo si jej zobrazí."),
                a("a6bbdc1c", "Jen pro prohlížení"),
                a("f6e88162", "Laboratoře"),
                a("e6df688c", "Možnosti"),
                a("e3f2b93a", "Zobrazí nebo skryje informace o tomto sloupci."),
                a("db257758", "Velikost náhledů médií"),
                a("if2fbab8", "Velikost náhledů médií v odpovědích"),
                a("he517d52", "Přejmenovat sloupec"),
                a("f6eb2cfe", "Název sloupce"),
                a("d6d39c84", "Sloupce musí mít název."),
                a("e5c06aee", "Šířka sloupce"),
                a("af6a4368", "Umožňuje přejmenovat tuto konverzaci a zobrazit její účastníky."),
                a("cdeac5ee", "Nastavení soukromých zpráv"),
                a("fda7ee26", "Určete, kdo vám může posílat zprávy."),
                a("c4ec8620", "Zahrnout"),
                a("d5f29cd4", "Vyloučit"),
                a("d01a62f8", "Čas a místo"),
                a("d614afc8", "Lajky, odpovědi a reposty"),
                a("fb2bbc7a", "Obsah postu"),
                a("a589add2", "Aspoň jedno z těchto slov (NEBO)"),
                a("d2f8dc8a", "Posty od někoho"),
                a("e37201ec", "Odpověď někomu"),
                a("e035e056", "Zmínka někoho"),
                a("ef2d4092", "Vyloučit slova"),
                a("d59f395e", "Váš jazyk zobrazení"),
                a("g67cd3f2", "Zvolit jazyky"),
                a("c85f9b9c", "Změnit jazyky"),
                a("b5148188", "Více než"),
                a("hf369320", "Méně než"),
                a("f4dce7b6", "Kolik"),
                a("ddafa9a2", "Zobrazit možnosti"),
                a("c6be8432", "Úroveň zapojení"),
                a("e60b9fac", "Ukázat původní posty"),
                a("eb441fee", "Zobrazit reposty"),
                a("e920e6dc", "Ukázat citace"),
                a("g9580526", "Zobrazit odpovědi"),
                a("i73cbb5c", "Do vyhledávání je možné přidat jen jeden seznam. Při tomto vyhledávání se použije pouze první seznam."),
                a("c765315d", function (e) {
                    return "Zadejte " + e.listHandleListNameFormat + " nebo ID seznamu";
                }),
                a("a153fbf2", "Jak použít seznam ve vyhledávání"),
                a("bf0d5a7c", "Do každého vyhledávání je možné přidat jeden seznam."),
                a("c6e8759a", "Pokud chcete přidat seznam, použijte tento formát:"),
                a("dd9daca8", "Nahraďte tečky v názvu seznamu pomlčkami."),
                a("cd71b264", "Přečtěte si další informace o seznamech."),
                a("ca23d726", "Obrázky a videa"),
                a("f1fa97a8", "Vysílání"),
                a("c0bab0ba", "Zobrazit pouze posty s médii"),
                a("g9512656", "Zobrazit jen ověřené lidi"),
                a("b967e296", "Zobrazit jen lidi, které sledujete"),
                a("gc51a2ac", "Kdykoli"),
                a("d42a4916", "Nedávno"),
                a("a2229a06", "V rámci časového rozmezí"),
                a("c1fe6156", "Čas zahájení"),
                a("cbc02622", "Čas ukončení"),
                a("b666573c", "Hledat místo"),
                a("cf260344", "Posty v"),
                a("j5805302", "Okruh"),
                a("e592ab3c", "Lepších výsledků dosáhnete, když do vyhledávání zahrnete místo a oblast nebo zemi."),
                a("e8843b5d", function (e) {
                    return e.meters + " m";
                }),
                a("g9e6a4e5", function (e) {
                    return e.kilometers + " km";
                }),
                a("ec688a09", function (e) {
                    return "To uživateli @" + e.screenName + " zabrání, aby vás přidal na kterýkoli z jeho seznamů včetně tohoto.";
                }),
                a("iad54d54", "Vymazat záložky"),
                a("g4d581a2", "Smazat záložky z této i ostatních složek"),
                a("fb14aebe", "Vyprázdnit záložky"),
                a("jf748f40", "Smazat všechny záložky?"),
                a("d63a211a", "Tento krok nejde vrátit zpět. Odstraníte si všechny posty, které jste si do záložek přidali."),
                a("a16ebc1a", "Zahájit nový chat"),
                a("a1ff1890", "Tím se vymaže vaše aktuální konverzace."),
                a("ab352ee0", "Zobrazit nejnovější posty"),
                a("c004c4d6", "Vymazat posty"),
                a("fc702822", "Skryjte starší posty. Nové posty uvidíte hned, jak se objeví."),
                a("a2c59056", "Než tento sloupec vymažete..."),
                a("d31bdbbe", "Přepnout na nejnovější posty"),
                a("dec3722c", "nejnovějších postů"),
                a("g33b8c04", "Vytvořit kopii"),
                a("de2c3008", "Vytvoří duplikát sloupce."),
                a("a7c01ce0", "Změnit název nebo smazat složku"),
                a("e52e4c82", "Umožňuje změnit možnosti určování polohy a personalizace."),
                a("f4d052a4", "Grok (režim Běžný)"),
                a("fa97c1c6", "Grok (režim Zábava)"),
                a("efb37dec", "Režim"),
                a("h0064892", "Běžné"),
                a("ad86db50", "Vytvořit deck"),
                a("hb70ef30", "Vytvořit deck z tohoto vyhledávání"),
                a("j8a945cc", "Populární posty"),
                a("f3a4a654", "Ověřené posty"),
                a("c8da0c42", "Fotky a videa"),
                a("d2cf6f74", "Partneři Premium"),
                a("c9b39e70", "Přesunout"),
                a("b9ea5f7c", "Umožňuje přesunout sloupec do jiného decku."),
                a("g8b6d450", "Možnosti oznámení"),
                a("dd703fbd", function (e) {
                    return "Smazat sloupec " + e.title;
                }),
                a("d9d11fc6", "Smazat veřejný sloupec?"),
                a("h17ada6c", "Když smažete veřejný sloupec, všichni sledující k němu nevratně ztratí přístup."),
                a("hb388fe8", "Smazat sloupec"),
                a("c1343ad6", "Převede sloupec na vyhledávací."),
                a("e7a12d72", "Převedeno na sloupec vyhledávání"),
                a("f29424f0", "Změnit zpět"),
                a("h5ff85a2", "Sdílet sloupec"),
                a("d32058ba", "Nastavte sloupec jako veřejný, abyste jej mohli sdílet."),
                a("c926a6ca", "Změny, které provedete, se zobrazí u všech lidí, kteří sledují tento sloupec."),
                a("g0175ca2", "Výběr sloupce"),
                a("a800727c", "Zpět na výběr sloupce"),
                a("f318bc40", "Vytvořit novou složku"),
                a("e300a9f0", "Vytvořit složku pro záložky"),
                a("j341c67c", "Složky musí mít název."),
                a("d00586a6", "Tento sloupec se nedá načíst. Zkuste vytvořit nový sloupec."),
                a("d0d8277e", "Vlastník sloupce jej smazal nebo nastavil jako soukromý."),
                a("j08fd6fe", "Vaše komunity"),
                a("b569a1fa", "Návrat do komunit"),
                a("i176bfd2", "Objevte seznamy"),
                a("a57c3292", "Objevte nové seznamy"),
                a("f59f87dc", "Najděte si seznamy dalších lidí"),
                a("a5d70676", "Seznamy, na nichž se nacházíte"),
                a("e377790a", "Zpět na seznamy"),
                a("e952b8c3", function (e) {
                    return "Seznamy uživatele @" + e.userScreenName;
                }),
                a("bc24f834", "Zpět na hledání seznamů dalších lidí"),
                a("ee11d084", "Hledat profily"),
                a("c300f3bc", "Přidejte sloupce"),
                a("bd744e9a", "Vyplnit pomocí hledání"),
                a("i10d4124", "Začít od píky"),
                a("jbff8606", "Odeslat dotaz"),
                a("dbd8a566", "Některé koncepty postů nešlo odstranit."),
                a("c82be5a8", "Vybraný koncept postů byl odstraněn."),
                a("ad84af68", "Nahrávání konceptu postů"),
                a("ef97fb3a", "Nemáte žádný koncept postů"),
                a("f26ece12", "Až si nějaké vytvoříte, najdete je tady."),
                a("a4911812", "Odstraňování konceptů postů"),
                a("b49be1ca", "Zahodit koncept postů"),
                a("ca91dc76", "Tento krok nelze vrátit zpět, o rozepsaný koncept postů přijdete."),
                a("b38b254a", "Některé naplánované posty se nepodařilo odstranit."),
                a("he2e3cc4", "Vybrané naplánované posty byly odstraněny."),
                a("jf9faee4", "Načítání naplánovaných postů"),
                a("aa1cfd48", "Nemáte žádné naplánované posty"),
                a("b2a70dbe", "Odstraňování naplánovaných postů"),
                a("a07bb1b0", "Zahodit naplánované posty"),
                a("id78e802", "Tento krok nelze vrátit zpět a přijdete o své naplánované posty."),
                a("d9a75e16", "Vybrat"),
                a("aa030cd4", "Zobrazit nejdřív doporučené posty."),
                a("c0d2d4aa", "Časová osa hlavní stránky"),
                a("ecbbbb90", "Podívejte se na své seznamy nebo seznamy jiných lidí."),
                a("c351229c", "Zobrazte komunity, jichž jste součástí."),
                a("a2d1df82", "Najděte, co hledáte."),
                a("d5387d8a", "Nepřehlédněte žádnou zprávu."),
                a("e738198c", "Podívejte se, co je na platformě X právě populární."),
                a("ifb8c91e", "Vyhledejte si něčí profil a sledujte, co tweetuje."),
                a("aa0525d0", "Profily"),
                a("cb7844a6", "Udržujte si přehled o oznámeních a zmínkách."),
                a("e64da55e", "Zobrazit vaše naplánované posty."),
                a("h9659832", "Zobrazit váš koncept postů."),
                a("f1b6535e", "Koncept postů"),
                a("a24add8a", "Zobrazit posty přidané do záložek."),
                a("gb19f215", function (e) {
                    return "Sloupec – " + e.title;
                }),
                a("g7751b34", "Zavřít štos"),
                a("b94fa48c", "Vymazat štos"),
                a("dd3dc3cc", "Přejít ve štosu zpět"),
                a("bc7acfd0", "Sdílený sloupec"),
                a("a6587d95", function (e) {
                    return "Změnit uspořádání sloupce " + e.title;
                }),
                a("fb071dea", "Přesunout sloupec"),
                a("c77a6327", function (e) {
                    return "Otevřít možnosti sloupce " + e.title;
                }),
                a("h53c41f0", "Možnosti sloupce"),
                a("f7bbbb6d", function (e) {
                    return "Zavřít možnosti sloupce " + e.title;
                }),
                a("eee9f83e", "Zavřít možnosti sloupce"),
                a("a443bbc0", "Zavřít vyhledávání"),
                a("c8b12c8f", function (e) {
                    return "Nastavit obsah sloupce " + e.title;
                }),
                a("fe048090", "Zobrazit přehled"),
                a("e57560b4", "Skrýt přehled"),
                a("fb087db0", "Vytvořit samostatný sloupec"),
                a("aa128cd8", "Přidat jako nový sloupec"),
                a("aa4f00c6", "Sdílet deck"),
                a("fdf97052", "Přejít na možnosti decku"),
                a("ed427868", "Nastavit deck jako veřejný?"),
                a("gecc71a2", "Pokud deck chcete nasdílet, nastavte jej napřed jako veřejný."),
                a("f0653866", "Sdílení decku"),
                a("b158400a", "Tento krok přeskočit"),
                a("h15afbce", "Pojďme se pustit do nastavení"),
                a("ibe6be32", "Přizpůsobte si prostředí aplikace X Pro: nastavte si šířku sloupců, velikost textu a médií i barvu prostředí podle svých představ."),
                a("e28eb008", "Přizpůsobit prostředí"),
                a("dc8b86e0", "Pojďme teď přidat vaše sloupce"),
                a("ee28603e", "Importujte své sloupce"),
                a("dad15d22", "Ušetřete si čas tím, že si sem naimportujete své stávající sloupce s vyhledáváním, seznamy a profily. Později už je nebude možné překopírovat."),
                a("j85b4522", "Nebo můžete začít úplně od začátku"),
                a("hfd5ca12", "Vaše sloupce se bohužel nepovedlo naimportovat"),
                a("b855852a", "Importovat jde jenom sloupce vyhledávání, seznamů a profilů. Přidejte si místo toho výchozí sloupec."),
                a("dc6c806e", "Vaše sloupce se nepodařilo importovat"),
                a("a0dfe2f6", "X Pro představuje pohodlný způsob, jak si prohlížet několik sloupců časových os v jednom přehledném rozhraní."),
                a("i8912d28", "Pojďme přidat nějaké sloupce..."),
                a("ce0c0f34", "Teď si to tu prohlédněte"),
                a("h36d2aa2", "Dáme vám pár užitečných tipů, které vám pomůžou s aplikací začít."),
                a("fbaf9442", "Přidat úvodní deck"),
                a("b354ea52", "Přidává se úvodní deck..."),
                a("if195eb8", "Přidávají se sloupce..."),
                a("ea07517c", "Sloupec byl smazán."),
                a("habced9e", "sloupec obnoví."),
                a("g4fcb4f8", "Sloupec byl obnoven."),
                a("d4429cba", "Hmm... tento deck neexistuje. Vyberte jiný."),
                a("g2c6e34a", "Nastavte si velikost obsahu a barvu prostředí i pozadí."),
                a("bf2890a6", "Vizuální měřítko"),
                a("h098a550", "Výchozí šířka sloupce"),
                a("ab248726", "Výchozí náhled média"),
                a("jdaf161c", "Karta Zprávy"),
                a("ge0fcfd0", "Hover Cards"),
                a("e1cab6e8", "Změnit i stávající sloupce?"),
                a("ce2e487c", "Pokud změníte všechny sloupce, zaktualizuje se každý sloupec v každém vašem decku. Pokud zvolíte možnost Ne, budou nová nastavení platit jenom pro sloupce, které odteď budete vytvářet."),
                a("fdbd90a6", "Ano, změnit všechny sloupce"),
                a("h8affe68", "Ne, pouze nové sloupce"),
                a("f06885b6", "Možnosti velikosti médií ve sloupci"),
                a("e4bab2d0", "Možnosti šířky sloupce"),
                a("f0e71094", "Zobrazit kartu Zprávy"),
                a("aa25a5a6", "Ve spodní části obrazovky je k dispozici karta Sbalitelné zprávy"),
                a("g3da3c90", "Zobrazit Hover Cards"),
                a("b08a8656", "Zobrazit Hover Cards, když přejdete kurzorem přes interaktivní položky"),
                a("g9df1984", "Přidat deck"),
                a("df77af70", "Zvolte emoji pro svůj deck"),
                a("ee7765ba", "Vybrat emoji"),
                a("e0127c83", function (e) {
                    return "Změnit emoji " + e.emoji;
                }),
                a("hb8b6254", "K vašemu veřejnému decku se může kdokoli dostat z vašeho profilu. Můžete na něj také sdílet odkazy. Pokud byste si to rozmysleli, můžete jej kdykoli znovu nastavit jako soukromý. Přečtěte si k tomu více."),
                a("gfbaf4e8", "Tento deck teď nejde nastavit jako veřejný"),
                a("ae04848a", "Tento deck obsahuje sloupce, které souvisejí s vaším účtem na platformě X. Pokud deck chcete nastavit jako veřejný, je třeba tyto sloupce odstranit. Přečtěte si k tomu více."),
                a("d606207a", "Smazat deck"),
                a("h95cb00e", "Tento deck bude trvale smazán. Tuto akci nelze vzít zpět."),
                a("f50c9834", "Tento deck bude trvale odstraněn. Pokud jej odstraníte, nebude jej už možné znovu načíst."),
                a("cb861826", "Změnit uspořádání decku"),
                a("i5896b2b", function (e) {
                    return "Upravit deck " + e.title;
                }),
                a("ef602cab", function (e) {
                    return "Smazat deck " + e.title;
                }),
                a("b44b9d83", function (e) {
                    return "Odepnout deck " + e.title;
                }),
                a("je4a847f", function (e) {
                    return "Připnout deck " + e.title;
                }),
                a("ad41be88", "Přesunout sloupec do decku"),
                a("cb82860a", "Sloupec nešlo najít"),
                a("icbecd02", "Přidat sloupec"),
                a("fdf1a2c6", "Přidat deck"),
                a("d25acc28", "Co obsahuje?"),
                a("fe5df266", "Nastavit sloupec jako soukromý?"),
                a("i3206148", "Když sloupec nastavíte jako soukromý, všichni sledující k němu ztratí přístup."),
                a("c65d210c", "Nastavit sloupec jako soukromý"),
                a("j4d54f1e", "Výkonný, v reálném čase fungující nástroj určený pro lidi, kteří platformou X doslova žijí"),
                a("je0526a0", "Prohlížejte si několik časových os na jedné obrazovce. Sledujte a organizujte obsah a zapojte se v reálném čase do svých komunit."),
                a("d128af54", "Zaregistrujte se do předplatného X Premium"),
                a("bacd7195", function (e) {
                    return e.fullName + " (@" + e.screenName + ") na platformě X";
                }),
                a("e5b4aafa", "Vaše připojení k internetu bylo přerušeno."),
                a("g43c3b36", "Pokud chcete pokračovat, znovu se připojte k internetu."),
                a("hafe83ec", "Stisknutím tlačítka Zavřít aplikaci ukončíte."),
                a("b2ec74fe", "zavřít"),
                a("hf836e5f", function (e) {
                    return e.tweetText + " " + e.username + " " + e.screenName + " " + e.views + " zobrazení " + e.timeAgo;
                }),
                a("a7a90902", "Zobrazíte stisknutím Vybrat"),
                a("cb0a3b5e", "Tento post může obsahovat choulostivý obsah. Opravdu ho chcete zobrazit?"),
                a("a4eb1304", "Kdykoli se můžete znovu přihlásit."),
                a("b86c2e12", "Zaregistrujte se, abyste mohli hledat veškerý obsah na platformě X."),
                a("ia13bd7c", "klávesnice"),
                a("f9fa40c8", "Zažijte to nejlepší z X"),
                a("gb6a7f62", "Platnost vašeho kódu vypršela. Pokud to chcete zkusit znovu, vyberte tlačítko níže a získáte nový kód."),
                a("ge19602a", "Získejte nový kód"),
                a("dd4ec2e8", "Přihlaste se do X tak, že na svém notebooku nebo mobilním zařízení navštívíte níže uvedenou adresu URL a zadáte zde zobrazený kód."),
                a("f4d7084c", "Přihlaste se do X pomocí jedné z těchto dvou možností:"),
                a("ebc1accc", "Naskenujte tento QR kód"),
                a("a4742bc0", "Na svém notebooku nebo mobilním zařízení navštivte níže uvedenou adresu URL a zadejte zde zobrazený kód."),
                a("f260dea2", "x.com/tvlogin"),
                a("h797e380", function (e) {
                    return "" + e.url;
                }),
                a("cf8eec84", function (e) {
                    return "" + e.url;
                }),
                a("g7ee7019", function (e) {
                    return "Zaregistrujte se, abyste mohli sledovat videa od tohoto uživatele " + e.name + ".";
                }),
                a("fb83778c", "Zaregistrujte se, abyste mohli sledovat videa od tohoto uživatele."),
                a("dd4bbaea", "Nemáte žádná videa k zobrazení."),
                a("i71d6193", function (e) {
                    return "Nelze zobrazit žádná videa od uživatele " + e.name + ".";
                }),
                a("adb512f0", "Nedávná videa"),
                a("bef78294", function (e) {
                    return "" + e.formattedCount;
                }),
                a("hda3bb87", function (e) {
                    return "Sledování";
                }),
                a("cd3f5206", "Následuje:"),
                a("c930299f", function (e) {
                    return "Následuje v " + e.count + ":";
                }),
                a("b2e9f19c", "Přehrát poslední video"),
                a("de906774", "Rychlost"),
                a("caca839e", "Skryté titulky"),
                a("b049f56c", "Kvalita"),
                a("fa7169d8", "Pokud chcete tento obsah nahlásit, navštivte na svém notebooku nebo mobilním zařízení níže uvedenou adresu URL"),
                a("c973ec9c", "Uživatelské jméno účtu"),
                a("e9670a81", function (e) {
                    return "Uživatel @" + e.screenName;
                }),
                a("d0e1b720", "URL adresa obsahu"),
                a("a4ee9394", "Bílý"),
                a("a9f3474c", "Azurová"),
                a("i50b6538", "Purpurová"),
                a("jffeb664", "Červená"),
                a("e375c2d0", "Černý"),
                a("c2c5dea4", "Barva písma"),
                a("ce71b3d0", "Skupina písma"),
                a("d2eb1582", "Výchozí (Sans-serif)"),
                a("e684030e", "Arial (Sans-serif)"),
                a("jad3900c", "Times New Roman (Serif)"),
                a("e205f3a0", "Monospace (Sans-serif)"),
                a("d207d39a", "Neprůhlednost textu"),
                a("a562039c", "Barva pozadí"),
                a("h44e879e", "Neprůhlednost pozadí"),
                a("b843ced4", "Auto"),
                a("e30d2cea", "0,5x"),
                a("d030db62", "1,25x"),
                a("ga63a594", "1,5x"),
                a("f571bc5a", "1,75x"),
                a("d0284204", "2x"),
                a("b7d7f606", "Přetočit vpřed"),
                a("ee0f61ca", "Přetočit vzad"),
                a("i2d14148", "Zrušit lajk"),
                a("a1eb471a", "Odebrat to se mi nelíbí"),
                a("e40051e8", "Odebrat záložku"),
                a("g9ecf0e8", "Zobrazit odpovědi"),
                a("aa97ae7e", "Ovládací prvky TV přehrávače"),
                a("ed170a6a", "Posuvník"),
                a("ee838ea0", "Sledování tohoto tématu pomůže přizpůsobit obsah na časové ose hlavní stránky a zlepšit zážitek z používání platformy X."),
                a("h85446ce", "Tento prohlížeč už není podporován"),
                a("e24d1fa6", "Abyste mohli webovou verzi x.com používat i nadále, přejděte na podporovaný prohlížeč. Seznam podporovaných prohlížečů najdete v našem centru nápovědy."),
                a("a138aeb2", "JavaScript není k dispozici."),
                a("d8e122c2", "Zjistili jsme, že JavaScript je v tomto prohlížeči zakázaný. Povolte ho nebo přejděte na podporovaný prohlížeč, abyste mohli používat x.com i nadále. Seznam podporovaných prohlížečů najdete v našem centru nápovědy."),
                a("f1a9e3a2", "Získávejte nejnovější zprávy o politice, oblíbené hudbě, světových událostech, sportovních výsledcích a dalších novinkách z celého světa hned, jak budou k dispozici – to vše s menší spotřebou dat."),
                a("bb402b62", "X Pro je na míru přizpůsobitelným řídicím panelem, který vám umožní mít přehled o tom, co se právě děje."),
                a("ed617674", "360"),
                a("e23b20a0", "Zrušit"),
                a("a620fcf0", "Načítání obrázku"),
                a("e9e2064c", "Něco se pokazilo, ale netrapte se – není to vaše chyba."),
                a("d7060c80", "Aktualizovat"),
                a("a0493514", "Opakovat"),
                a("ff3dd27c", "Výchozí"),
                a("b554fcf4", "Světlý"),
                a("j590b148", "Středně světlý"),
                a("e7d4ee86", "Střední"),
                a("ia423ebc", "Středně tmavý"),
                a("a2cf0942", "Tmavý"),
                a("j824dc06", "Hledat emoji"),
                a("fffb3384", "Nenašly se žádné emoji"),
                a("j3d20752", "Zkuste místo toho hledat něco jiného."),
                a("d67ad796", "Vyberte výchozí vzhled."),
                a("e6388bfa", "Smazat vše"),
                a("j7c67eca", "Poslední"),
                a("da539d38", "Výsledky hledání"),
                a("d95eb228", "Zpět"),
                a("af8fa2ae", "Zavřít"),
                a("ef8b2f54", "Přečíst graf"),
                a("d567ceda", "svislý"),
                a("f7b30768", "skládaný"),
                a("hcd54328", "skupinový"),
                a("affbaf62", "Další informace"),
                a("c388d026", "OK"),
                a("ha20397c", "Funkce pro lepší přístupnost"),
                a("baf7a43c", "Zpřístupnění"),
                a("e8f674ab", function (e) {
                    return "Toto je " + e.chartType + " pruhový graf. Název grafu je " + e.chartTitle + ". Je v něm celkem tento počet kategorií: " + e.noOfCategories + ". Minimální hodnota je " + e.minValue + " a maximální hodnota je " + e.maxValue + ". Graf můžete prozkoumat pomocí navigačních ovládacích prvků.";
                }),
                a("d969327c", "Přehrát zvukovou verzi"),
                a("d8cbbcd4", "Přehraje zvukový graf. Stisknutím můžete přehrát zvukovou verzi grafu nebo můžete stisknutím klávesy A u jednotlivých datových bodů přehrát jejich zvukovou verzi."),
                a("dec1d7ef", function (e) {
                    return e.label + ", " + e.group + ", " + e.value;
                }),
                a("f765bead", function (e) {
                    return "data bez popisku, " + e.group + ", " + e.value;
                }),
                a("idea1817", function (e) {
                    return e.label + ", " + e.value;
                }),
                a("fe94be6b", function (e) {
                    return "data bez popisku, " + e.value;
                }),
                a("b15c0a18", "Zahodit úpravy?"),
                a("aebf81c8", "Změny, které jste provedli, nebudou uloženy."),
                a("aa744c1e", "Pokračovat v úpravách"),
                a("fe04d89a", "Zahodit"),
                a("bb5d8cd2", "Ano"),
                a("dc33d78a", "Titulní obrázek článku"),
                a("j190bf1a", "ŽIVÉ VYSÍLÁNÍ"),
                a("e3fcbdba", "Zavřít"),
                a("jc0b3a8c", "Popis obrázku"),
                a("ia1d2e58", "Olajkováno autorem"),
                a("h81f3036", "Článek"),
                a("bed2945c", "přečíst popis obrázku"),
                a("j2eea17a", "Následující média zahrnují potenciálně citlivý obsah."),
                a("b05a39b2", "Zobrazit"),
                a("a7cd5cf4", "Video"),
                a("b6eb8f6a", "Vysílání"),
                a("dcc2b9b3", function (e) {
                    return "Přehrát " + e.locVideoType;
                }),
                a("hf4ffd4d", function (e) {
                    return "Přehrát živě " + e.locVideoType;
                }),
                a("f6e90cd7", function (e) {
                    return "Délka " + e.hoursWord + " " + e.minutesWord + " " + e.secondsWord;
                }),
                a("e7d191ed", function (e) {
                    return "Začíná v " + e.hoursWord + " " + e.minutesWord + " " + e.secondsWord;
                }),
                a("daa73df1", function (e) {
                    return e.viewerCount + " zobrazení";
                }),
                a("b4f19b97", function (e) {
                    return e.listItem1 + " a " + e.listItem2;
                }),
                a("i0135403", function (e) {
                    return e.listItem1 + ", " + e.listItem2;
                }),
                a("f1574a4b", function (e) {
                    return e.listItem1 + " a " + e.listItem2;
                }),
                a("ec72e2f8", "Sledovat"),
                a("d9d2a865", function (e) {
                    return "Přehrát" + e.ttc_card_cta_play;
                }),
                a("a8422cd5", function (e) {
                    return "Obchod" + e.ttc_card_cta_shop;
                }),
                a("ff1b8c17", function (e) {
                    return "Nakupovat" + e.ttc_card_cta_shop_now;
                }),
                a("d04488ef", function (e) {
                    return "Rezervovat" + e.ttc_card_cta_book;
                }),
                a("b0b0cfb7", function (e) {
                    return "Spojení" + e.ttc_card_cta_connect;
                }),
                a("ea5247d5", function (e) {
                    return "Objednat" + e.ttc_card_cta_order;
                }),
                a("b7b58677", function (e) {
                    return "Otevřít" + e.ttc_card_cta_open;
                }),
                a("g15f6870", "Další informace"),
                a("d1ff55d8", "Nainstalovat"),
                a("g40f106c", "Pošlete nám zprávu"),
                a("j393e386", "Pošlete nám soukromou zprávu"),
                a("a771d32e", "Pošlete mi soukromou zprávu"),
                a("d8e9c24c", "Poslat soukromou zprávu"),
                a("h2f9258f", function (e) {
                    return e.appStarRating + "/5,0 hvězd – " + e.appNumRatings + " hodnocení";
                }),
                a("cc5508a9", function (e) {
                    return "Začíná " + e.timestampUTC;
                }),
                a("f4520a5d", function (e) {
                    return "Postovat " + e.action;
                }),
                a("f17dfdb6", "Hrát"),
                a("j836de8a", "Chráněný účet"),
                a("f4b8dc08", "Předplacený účet"),
                a("f936caa6", "Účet překladatele"),
                a("ac72ee4e", "Ověřený účet"),
                a("f49e0aac", "Poskytuje podrobnosti o ověřených účtech."),
                a("f59bdb94", "Poskytuje podrobnosti ohledně chráněných účtů."),
                a("d7e50a66", "Další informace"),
                a("fc065ee4", "Další informace o Předplatných"),
                a("e453f536", "Co jsou Předplatná"),
                a("bd4cb7a0", "Když si předplatíte své oblíbené tvůrce, získáte bonusový obsah – a oni si vydělají trochu peněz."),
                a("g7099a02", "Chci se dozvědět více"),
                a("c2637ef6", "Rozumím"),
                a("efb17190", "vás sleduje"),
                a("g57b5f6c", "Váš Předplatitel"),
                a("a77a27c0", "Odebírá"),
                a("gdd173da", "Odpověděl Grok v režimu Zábava"),
                a("dfd6eeac", "Odpověděl Grok"),
                a("deceb214", "Obrázek od funkce Grok"),
                a("befddd48", "Zobrazit"),
                a("hf3f8e3a", "Zobrazit více"),
                a("h504ea5e", "Vytvořte si svou verzi funkce Grok"),
                a("eb722de2", "Zeptejte se Grok na něco"),
                a("bb5c5864", "Citace"),
                a("a8b58cf4", "Zobrazit toto vlákno"),
                a("i5f742fe", "Zobrazit toto hlasování"),
                a("fc45ccc6", "Vložené video"),
                a("a9edea48", "Načíst znovu"),
                a("d26d8730", "Zkopírovat adresu videa"),
                a("f1b6bcec", "Zkopírovat adresu obrázku GIF"),
                a("j25d7cca", "Skrýt popisky"),
                a("a858b25c", "Zobrazit popisky"),
                a("faf9f484", "Reklamy"),
                a("ae2ea9e7", function (e) {
                    return "Reklama od " + e.advertiserName;
                }),
                a("hea01798", "Posuvník hledání"),
                a("f8a09386", "Zobrazit v aplikaci Periscope"),
                a("gf2b6eee", "Obraz v obraze"),
                a("b3160a69", function (e) {
                    return e.volumePercent + " procent";
                }),
                a("fb236728", "Pozastavit"),
                a("e9bd453e", "Záznam"),
                a("d46b00b0", "Přejděte na živé vysílání"),
                a("ec8ab8b4", "Skrýt uživatele"),
                a("b8b6344a", "Znovu zobrazit"),
                a("c9a642fa", "Posuvník hlasitosti"),
                a("c27e60b0", "Na celou obrazovku"),
                a("d2969f10", "Ukončit zobrazení na celou obrazovku"),
                a("f06f2e53", function (e) {
                    return e.currentTime + " z " + e.durationTime;
                }),
                a("eeb64451", function (e) {
                    return "Sledovat " + e.advertiserName;
                }),
                a("f3c268a5", function (e) {
                    return "Nakoupit " + e.advertiserName;
                }),
                a("g60001bb", function (e) {
                    return "Zobrazit " + e.advertiserName;
                }),
                a("dff1ddd9", function (e) {
                    return "Přejít na " + e.advertiserName;
                }),
                a("b0b22805", function (e) {
                    return "Navštívit " + e.advertiserName;
                }),
                a("c67e71aa", "Sledovat hned teď"),
                a("a6ada13e", "Nakupovat"),
                a("j0f12222", "Zobrazit víc"),
                a("f569f7c8", "Přejít na webovou stránku"),
                a("j0c6772a", "Navštívit web"),
                a("f73003aa", "Video se přehraje po reklamě"),
                a("b3112b8a", "Přeskočit"),
                a("h6333ad0", "Přeskočit reklamu"),
                a("c59da417", function (e) {
                    return "Přeskočit reklamu za " + e.seconds;
                }),
                a("c3c147cf", function (e) {
                    return "Přeskočit " + e.seconds;
                }),
                a("h9b3104e", "Nastavení videa"),
                a("ha3efce4", "Auto"),
                a("hd8d044d", function (e) {
                    return "Auto (" + e.quality + ")";
                }),
                a("a7bf9962", "Stáhnout video"),
                a("ccc97152", "Rychlost přehrávání"),
                a("h531ade0", "Kvalita videa"),
                a("e8b5757c", "0,25x"),
                a("e7e954de", "0,5x"),
                a("g07ffe66", "0,75x"),
                a("d8bede9e", "1x"),
                a("j41845c8", "1,25x"),
                a("e9eeed9e", "1,5x"),
                a("fe45dc84", "1,75x"),
                a("e791190a", "2x"),
                a("dc5df829", function (e) {
                    return e.resolution + "p" + e.frameRate;
                }),
                a("c4d66d2e", "Díky výběru prohlížeče obdržíte suboptimální kvalitu. Doporučujeme používat prohlížeč, který podporuje HEVC."),
                a("a681babd", function (e) {
                    return "Sledovat teď na " + e.trimmedHostname;
                }),
                a("db3cd325", function (e) {
                    return "Navštívit " + e.trimmedHostname;
                }),
                a("f1ad0df1", function (e) {
                    return "Reklama · " + e.timeRemaining;
                }),
                a("ef16ab2b", function (e) {
                    return "Reklama od " + e.advertiserName + " · " + e.timeRemaining;
                }),
                a("a15adf2c", "tento formulář"),
                a("c1658fc6", "Média nejde přehrát."),
                a("h519ae04", "Toto médium bylo zakázáno kvůli autorským právům."),
                a("ce871584", "Toto vysílání skončilo."),
                a("c101eb96", "Toto vysílání není dostupné."),
                a("gb24a514", "Toto médium bylo odebráno v reakci na hlášení vlastníka autorských práv."),
                a("hcaf3e63", function (e) {
                    return "Toto médium bylo zakázáno v souvislosti s nárokem ohledně autorských práv vzneseným ze strany " + e.holder + ".";
                }),
                a("if05c038", "Toto vysílání není ve vaší oblasti dostupné."),
                a("d420171b", function (e) {
                    return "Video není dostupné v důsledku požadavku souvisejícího s autorskými právy " + e.holder + ".";
                }),
                a("b1eb72fa", "Je nám líto, zobrazení tohoto videa je v některých oblastech omezeno. Počkejte několik sekund, než získáme vaši polohu. Ujistěte se, že v nastavení prohlížeče máte zapnuté zjišťování polohy."),
                a("c057680c", "V tomto prohlížeči video nedokážeme přehrát. Zkuste jiný webový prohlížeč."),
                a("i5dfae6e", "Toto video není na vašem místě dostupné."),
                a("c2388276", "Toto video bylo smazáno."),
                a("d2c96140", "Indikátor zvuku hosta"),
                a("f6dc9146", "ZÁZNAM"),
                a("d30c74fe", "Hlasitost"),
                a("f2d4e6f2", "Zhlédnout znovu"),
                a("e9f1af3a", "Zjistit víc"),
                a("f1881d86", "Na tento post nejde odpovědět a nejde ho sdílet ani lajkovat."),
                a("j3d37222", "Společnost X musí poskytovat toto upozornění na základě zákona."),
                a("e461d0ee", "Získejte nejnovější informace"),
                a("d1386940", "Buďte stále v obraze"),
                a("ecda5f9e", "Zavádějící"),
                a("a423473c", "Zákonem vyžadované upozornění"),
                a("b3296688", "Viditelnost omezena"),
                a("ccd32094", "Nyní");
            a("abfcce0d", function (e) {
                return "před " + e.amountOfTime;
            }),
                a("ae408b76", "Repostovali jste"),
                a("j355f008", "Připnutý post"),
                a("habf9678", "Připnuto autorem"),
                a("db0798ed", function (e) {
                    return "Téma " + e.topicName;
                }),
                a("dc716ec9", function (e) {
                    return "Doporučované téma: " + e.topicName;
                }),
                a("fbc2003c", "Ukončen"),
                a("h5051dd8", "Zrušeno"),
                a("bb5f91a3", function (e) {
                    return e.count + " v tomto Prostoru";
                }),
                a("c83eea99", function (e) {
                    return e.participant + " + " + e.count + " poslouch" + n(e.count, "ají", "á", "á", "á");
                }),
                a("cdff6cd3", function (e) {
                    return e.speaker + " mluví + " + e.count + " poslouch" + n(e.count, "ají", "á", "á", "á");
                }),
                a("df006f4f", function (e) {
                    return e.count + " m" + n(e.count, "ají", "á", "á", "á") + " zájem";
                }),
                a("c889af33", function (e) {
                    return e.count + " se připojil" + n(e.count, "i", "o", "", "o");
                }),
                a("d6f2056f", function (e) {
                    return e.count + " slyšel" + n(e.count, "i", "o", "", "o") + " živě či ze záznamu";
                }),
                a("jbc5f47a", "Dok funkce Prostory"),
                a("gfe2830f", function (e) {
                    return e.count + " další" + n(e.count, "", "ch", "", "ch");
                }),
                a("dbeae6cf", function (e) {
                    return e.count + " další" + n(e.count, " posluchači", "ch posluchačů", " posluchač", "ch posluchačů");
                }),
                a("d2543d97", function (e) {
                    return "+" + e.count;
                }),
                a("dc718e53", function (e) {
                    return "+" + e.count + " další" + n(e.count, "", "ch", "", "ch");
                }),
                a("d0e7b11b", function (e) {
                    return e.date + " v " + e.time;
                }),
                a("b4349cbc", function (e) {
                    return "" + e.relativeDay;
                }),
                a("ebe41367", function (e) {
                    return "Čas " + e.time;
                }),
                a("efce3d9b", function (e) {
                    return e.hours + " " + e.minutes + " " + e.seconds;
                }),
                a("d925a4f9", function (e) {
                    return "Zbýv" + n(e.count, "ají " + e.formattedCount + " minuty", "á " + e.formattedCount + " minut", "á " + e.formattedCount + " minuta", "á " + e.formattedCount + " minut");
                }),
                a("ib15cddb", function (e) {
                    return "Zbýv" + n(e.count, "ají " + e.formattedCount + " hodiny", "á " + e.formattedCount + " hodin", "á " + e.formattedCount + " hodina", "á " + e.formattedCount + " hodin");
                }),
                a("db9ed19f", function (e) {
                    return "Zbýv" + n(e.count, "ají " + e.formattedCount + " dny", "á " + e.formattedCount + " dnů", "á " + e.formattedCount + " den", "á " + e.formattedCount + " dnů");
                }),
                a("e1ebcecb", function (e) {
                    return e.formattedDays + " d" + n(e.days, "ny", "nů", "en", "nů") + " Zbýv" + n(e.hours, "ají " + e.formattedHours + " hodiny", "á " + e.formattedHours + " hodin", "á " + e.formattedHours + " hodina", "á " + e.formattedHours + " hodin");
                }),
                a("cc1da1fd", function (e) {
                    return e.formattedHours + " hodin" + n(e.hours, "y", "", "a", "") + " Zbýv" + n(e.mins, "ají " + e.formattedMins + " minuty", "á " + e.formattedMins + " minut", "á " + e.formattedMins + " minuta", "á " + e.formattedMins + " minut");
                }),
                a("f89a5d60", "Hostitel"),
                a("ce2cfb36", "Jen pro předplatitele"),
                a("df06241c", "Komunita"),
                a("b03e162a", "Poslouchat živě"),
                a("b3d828ee", "Jste členem"),
                a("g519ec2a", "Přehrát záznam"),
                a("c6000450", "Připomenutí nastaveno"),
                a("db44ff5c", "Nastavit připomenutí"),
                a("f7b6346a", "Spustit"),
                a("cc1f75ac", "Prostory"),
                a("bd08d1b2", "Podrobnosti nejsou k dispozici."),
                a("j8b01b27", function (e) {
                    return "Prostor " + e.title + " pořádaný uživatelem " + e.host + " byl zrušen";
                }),
                a("fda9f48c", "Prostor byl zrušen"),
                a("jf7853f7", function (e) {
                    return "Prostor " + e.title + " pořádaný uživatelem " + e.host + " byl ukončen";
                }),
                a("i1a29920", "Prostor byl ukončen"),
                a("db467ffe", "Připojit se k Prostoru"),
                a("i8dc3993", function (e) {
                    return "Hostitel: " + e.host;
                }),
                a("eb0b05b9", function (e) {
                    return "s " + e.count + " dalším" + n(e.count, "i", "i", "", "i");
                }),
                a("d19b9f77", function (e) {
                    return e.action + " pro " + e.title + ", hostuje " + e.host + ", " + e.scheduledStart;
                }),
                a("e679d5d7", function (e) {
                    return "Zahájit nyní " + e.title + " naplánovaný na " + e.scheduledStart;
                }),
                a("ea4258b7", function (e) {
                    return e.action + " pro prostor, " + e.scheduledStart;
                }),
                a("dcbcaa23", function (e) {
                    return "Přehrát záznam prostoru " + e.title;
                }),
                a("gaeb997e", "Víc"),
                a("f8b21226", "Připojit se"),
                a("e1b95ab0", "Poslední úprava"),
                a("i308d42c", "Existuje nová verze tohoto postu"),
                a("h092d520", "Existuje nová verze tohoto postu."),
                a("b74bf8b8", "Obrázek"),
                a("ha9ed08c", "Vytvořeno s pomocí"),
                a("bff61470", "Klikněte zde pro úpravy"),
                a("f4393d0f", function (e) {
                    return "Přiřazeno uživateli " + e.name;
                }),
                a("f8e8e32e", "Vy"),
                a("df6703d3", "Vy"),
                a("c20f7e9f", function (e) {
                    return n(e.otherUsersCount, e.otherUsersCount + " další", e.otherUsersCount + " dalších", d.createElement(d.Fragment, null, "", e.secondName), e.otherUsersCount + " dalších");
                }),
                a("he26f627", function (e) {
                    return n(e.otherUsersCount, e.otherUsersCount + " další", e.otherUsersCount + " dalších", d.createElement(d.Fragment, null, "", e.secondName), e.otherUsersCount + " dalších");
                }),
                a("gea7aa3c", "Další"),
                a("b6462b32", "Předchozí"),
                a("caddb529", "a"),
                a("ff31714c", function (e) {
                    return " a " + n(e.othersCount, e.othersCount + " dalším uživatelům", e.othersCount + " dalším uživatelům", "1 dalšímu uživateli", e.othersCount + " dalším uživatelům");
                }),
                a("e06c99b7", "a"),
                a("i4e2f96c", function (e) {
                    return " a " + n(e.othersCount, e.othersCount + " dalším uživatelům", e.othersCount + " dalším uživatelům", "1 dalšímu uživateli", e.othersCount + " dalším uživatelům");
                }),
                a("ga629a8c", "Zobrazit lidi, kteří se účastní konverzace"),
                a("d6f781e4", "Když si přes platformu X předplatíte své oblíbené tvůrce, získáte bonusový obsah – a oni si vydělají trochu peněz."),
                a("dab106f8", "Člen"),
                a("a46e92c2", "Moder"),
                a("f9633e62", "Správ"),
                a("a3dfd0cb", function (e) {
                    return "post" + e.noun;
                }),
                a("d7580651", function (e) {
                    return "Post" + e.noun;
                }),
                a("c68b6367", function (e) {
                    return "Článek" + e.noun;
                }),
                a("h13ffc88", "Hlas"),
                a("c8c4600e", "Hlasový post"),
                a("de8c5eb2", "Přehrát zvuk"),
                a("ec286028", "Pozastavit zvuk"),
                a("ad77feb6", "Titulky nejsou k dispozici"),
                a("e82adfeb", function (e) {
                    return e.count + " webov" + n(e.count, "é stránky", "é stránky", "á stránka", "ých stránek");
                }),
                a("cfb8c1f7", function (e) {
                    return e.count + " post" + n(e.count, "y", "y", "", "y");
                }),
                a("g78032d5", function (e) {
                    return e.count + " webových stránek a postů";
                }),
                a("j3de54a8", "ZÁPISEK"),
                a("a6a6ced4", "Přečíst Zápisek"),
                a("dbc0c2f4", "Záložka"),
                a("d6885d3e", "Zobrazit komunitu"),
                a("d5a48014", "Nadpis"),
                a("b92b6156", "Podnadpis"),
                a("ec5ed598", "Text"),
                a("c69eb656", "Plný úvazek"),
                a("g46ae43c", "Smlouva na plný úvazek"),
                a("jf7d4cc6", "Částečný úvazek"),
                a("b2214572", "Kontakt na nově přijatého zaměstnance"),
                a("f8337bd6", "za rok"),
                a("i935bf88", "za hodinu"),
                a("b75b8ffd", function (e) {
                    return e.salary + " " + e.interval;
                }),
                a("c5954d30", "Seznam"),
                a("fe64170c", "Jakmile provedete výběr, nelze jej změnit"),
                a("g10ace38", "Možnosti hlasování"),
                a("a3edf99a", "Finální výsledky"),
                a("c2b81e9d", function (e) {
                    return e.formattedCount + " hlas" + n(e.count, "y", "y", "", "ů");
                }),
                a("e86732e4", "Vybráno"),
                a("a35a5b10", "Sledující, které znáte"),
                a("fc8cd112", "Uživatele nesleduje nikdo, koho sledujete"),
                a("df8cd2af", function (e) {
                    return "Snímek " + e.currentSlide + " z " + e.itemCount + " – Karusel. " + e.type + ". " + e.altText;
                }),
                a("d70740da", "Další snímek"),
                a("c4d53ba2", "Předchozí snímek"),
                a("h6405c17", function (e) {
                    return "Snímek " + e.currentSlide + " z " + e.itemCount + " – Karusel";
                }),
                a("a3efd2c4", "Téma"),
                a("b91c8e53", function (e) {
                    return "Karta témat pro " + e.title + ".";
                }),
                a("b3826295", function (e) {
                    return "Karta témat pro " + e.title + ", " + e.description + ".";
                }),
                a("c9bb65db", function (e) {
                    return "Kolekce " + e.slidesLength + " obrázků. " + e.heroVanityContent + ". " + e.heroTitleContent;
                }),
                a("e1bddf52", "Lze otáčet tažením myší"),
                a("f0e1fb48", "Pro tento formát videa nebylo možné v tomto prohlížeči vytvořit náhled. Přesto je možné, že video půjde nahrát."),
                a("c2fc878d", function (e) {
                    return "Překročili jste limit počtu znaků o " + e.count;
                }),
                a("db11b27f", function (e) {
                    return "zbývá: " + e.count + " znak" + n(e.count, "y", "ů", "", "ů");
                }),
                a("bb7b821a", "Můžete odpovědět"),
                a("fc41217b", function (e) {
                    return "Odpovědět mohou účty sledující uživatele @" + e.screenName + " nebo jím zmíněné";
                }),
                a("e5dc76d0", "Na tuto konverzaci můžete odpovědět"),
                a("ab105904", "Kdo může odpovědět?"),
                a("fd1cda7a", "Na tuto konverzaci nemůžete odpovědět."),
                a("f064f477", function (e) {
                    return "Odpovědět mohou účty, které uživatel @" + e.screenName + " sleduje nebo je zmínil";
                }),
                a("ea9ac5c9", function (e) {
                    return "Odpovědět mohou účty, které uživatel @" + e.screenName + " zmínil";
                }),
                a("d2ae1499", function (e) {
                    return "Odpovídat mohou odběratelé nebo uživatelé zmínění uživatelem @" + e.screenName;
                }),
                a("a4e254ff", function (e) {
                    return "Odpovědět můžou ověřené účty nebo účty zmíněné uživatelem @" + e.screenName;
                }),
                a("j1b02fd8", "Ověřte svůj účet"),
                a("daba4484", "Tento post můžou kromě autora zobrazit jenom moderátoři"),
                a("f956070a", "Tweet byl skryt moderátory kvůli porušení pravidel komunity."),
                a("cc17f408", "Po odebrání členů se jejich posty skryjí před zbytkem komunity."),
                a("j620ce06", "Kdo může tento post zobrazit?"),
                a("bd414b44", "Exkluzivně pro vaše odběratele"),
                a("dd0da5d9", function (e) {
                    return "Váš post si může zobrazit jen uživatel @" + e.screenName + " a jeho odběratelé";
                }),
                a("g1c6a77e", "Zobrazuje se vám obsah pro Předplatitele"),
                a("d3b143d7", function (e) {
                    return "Příspěvek můžete zobrazit a odpovědět na něj, protože jste Předplatitelem uživatele @" + e.screenName + ".";
                }),
                a("f6337117", function (e) {
                    return "Tento post můžete zobrazit, protože jste odběratelem uživatele @" + e.screenName;
                }),
                a("g766a06d", function (e) {
                    return "Tento post je viditelný jen pro lidi v Kruhu uživatele @" + e.screenName;
                }),
                a("j040a368", "Odkazy v odpovědích jsou zakázány="),
                a("b31d0af7", function (e) {
                    return e.screenName + " nepovoluje odkazy v odpovědích na tento post";
                }),
                a("eab0f780", "V odpovědích na tento post nelze postovat ani citovat externí odkazy."),
                a("f17a1f54", "Premium Exclusive"),
                a("a0953370", "Předplatné"),
                a("d9687d23", function (e) {
                    return "Pokles o " + e.trendValueNegativePercent;
                }),
                a("ac73eb5a", "Beze změny"),
                a("c5a9f921", function (e) {
                    return "Nárůst o " + e.trendValuePositivePercent;
                }),
                a("e3098e07", function (e) {
                    return "Před " + e.minutes + " minut" + n(e.minutes, "y", "", "a", "");
                }),
                a("fea16a51", function (e) {
                    return "Před " + e.hours + " hodin" + n(e.hours, "(y)", "(y)", "a", "(y)");
                }),
                a("a4f2d94d", function (e) {
                    return "Před " + e.days + " d" + n(e.days, "ny", "ny", "en", "ny");
                }),
                a("hf9bc787", function (e) {
                    return "Před " + e.weeks + " týd" + n(e.weeks, "ny(ů)", "ny(ů)", "en", "ny(ů)");
                }),
                a("efcd5885", function (e) {
                    return "Před " + e.months + " měsíc" + n(e.months, "e(ů)", "e(ů)", "", "e(ů)");
                }),
                a("c37228b5", function (e) {
                    return "Před " + e.years + " rok" + n(e.years, "y/let", "y/let", "", "y/let");
                }),
                a("jf83d092", "Den"),
                a("af4abf20", "Měsíc"),
                a("b871f280", "Rok"),
                a("hac89ab0", "leden"),
                a("ef30b30a", "únor"),
                a("b56920fa", "březen"),
                a("b1a0f1ec", "duben"),
                a("daf779c8", "květen"),
                a("c6ad074e", "červen"),
                a("f1db106c", "červenec"),
                a("i4e80b7a", "srpen"),
                a("efa6cc1e", "září"),
                a("f40a0cbe", "říjen"),
                a("ac74a31c", "listopad"),
                a("i6c1e4b2", "prosinec"),
                a("de540c32", "Zobrazit heslo"),
                a("b4abfdb4", "Skrýt heslo"),
                a("f06ae5d3", function (e) {
                    return e.standardTweetCount + " znak" + n(e.standardTweetCount, "y", "ů", "", "ů") + " zbývá pro standardní post, " + e.totalCount + " znak" + n(e.totalCount, "y", "ů", "", "ů") + " zbývá celkově";
                }),
                a("fee0a8bc", "Uložit"),
                a("ae7f7656", "Vymazat"),
                a("gd769996", "Něco se pokazilo. Zkuste stránku načíst znovu."),
                a("i5450bec", "Média"),
                a("f7432494", "Přidat fotku"),
                a("a5f7ce12", "Také sledovat"),
                a("c3befdbe", "Sleduji"),
                a("d3029dbc", "Přestat sledovat"),
                a("aeb6f0a0", "Odebírat"),
                a("b4397192", "Spravovat"),
                a("i8cfb6e6", "Blokovaný"),
                a("ea100d6a", "Odblokovat"),
                a("fe40537f", function (e) {
                    return "Odblokovat uživatele @" + e.screenName + "?";
                }),
                a("ab7c3460", "Uživatel vás bude moct sledovat a zobrazit vaše posty."),
                a("i58d8718", "Budou vás moci sledovat a zapojovat se do reakcí na vaše veřejné posty."),
                a("cda66545", function (e) {
                    return "Kliknutím můžete " + e.followType + " uživatele " + e.screenName;
                }),
                a("ee05e96b", function (e) {
                    return "Kliknutím můžete " + e.followType + " uživatele " + e.screenName;
                }),
                a("a8d77a25", function (e) {
                    return "Kliknutím můžete uživatele " + e.screenName + " opustit";
                }),
                a("d0f4f3d9", function (e) {
                    return e.followType + " " + e.screenName;
                }),
                a("f238ba1d", function (e) {
                    return e.followType + " uživatele " + e.screenName;
                }),
                a("j6161cab", function (e) {
                    return "Přestat sledovat uživatele @" + e.screenName + "?";
                }),
                a("i4bb9ef7", function (e) {
                    return "Přestat sledovat téma " + e.title + "?";
                }),
                a("ge753264", "Posty od tohoto uživatele se vám přestanou zobrazovat na časové ose Pro vás. Pokud jeho posty nejsou chráněné, můžete stále zobrazit jeho profil."),
                a("b837c0e8", "I pokud toto téma přestanete sledovat, můžete v závislosti na tom, jaké účty sledujete, stále vídat posty, které se mu věnují."),
                a("ddac1f1d", function (e) {
                    return "Opravdu chcete komunitu " + e.communityName + " opustit?";
                }),
                a("j8e33c40", "Ztratíte přístup do této komunity a nadále už se nebudete moci zapojovat, ale vaše předchozí posty budou dál viditelné."),
                a("f305840e", "Nevyřízené"),
                a("i036327c", "Zahodit žádost o sledování?"),
                a("j95e3097", function (e) {
                    return "Tímto dojde ke zrušení vaší nevyřízené žádosti a uživatel @" + e.screenName + " už ji neuvidí.";
                }),
                a("d85bc1b8", "Přibližte nebo oddalte svůj obrázek."),
                a("f596ace8", "Poměr stran: původní"),
                a("df031fca", "Poměr stran: širokoúhlý"),
                a("b40332c6", "Poměr stran: čtverec"),
                a("e547b368", "Původní"),
                a("f7571204", "Široký"),
                a("e6e16812", "Čtverec"),
                a("hdd29d51", function (e) {
                    return "" + e.sponsorshipOrganization;
                }),
                a("b97f7079", function (e) {
                    return "" + e.sponsorshipOrganization;
                }),
                a("b02627a9", function (e) {
                    return "" + e.sponsorshipOrganization;
                }),
                a("f1a1b791", function (e) {
                    return "Sponzorováno uživatelem " + e.fullName;
                }),
                a("if2bf8b4", "Sponzorováno"),
                a("f3624b5c", "Sponzorováno (politická kampaň)"),
                a("b4b3b113", function (e) {
                    return "Sponzorováno " + e.fullName + " (politická kampaň)";
                }),
                a("be222050", "Sponzorovaný tematický příspěvek"),
                a("hcbbe447", function (e) {
                    return "Sponzorovaný tematický příspěvek od " + e.fullName;
                }),
                a("jcf3e7a2", "Postup snímků pro animaci Lottie"),
                a("a0af935c", "Lajknuto"),
                a("b8c465e2", "Repostováno"),
                a("c7a989ce", "Přidáno do záložek"),
                a("b03835c7", function (e) {
                    return e.replyCount + " odpově" + n(e.replyCount, "di", "dí", "ď", "dí");
                }),
                a("g4a195e7", function (e) {
                    return e.retweetCount + " repost" + n(e.retweetCount, "y", "y", "", "y");
                }),
                a("e089b42d", function (e) {
                    return e.likeCount + " lajk" + n(e.likeCount, "y", "y", "", "ů");
                }),
                a("e0a8fe39", function (e) {
                    return e.bookmarkCount + " zálož" + n(e.bookmarkCount, "ky", "ek", "ka", "ek");
                }),
                a("c58b2ab7", function (e) {
                    return e.viewCount + " zobrazení";
                }),
                a("f2849136", "Analýzy"),
                a("f206e970", "Zobrazit analýzu postu"),
                a("c7073f5b", function (e) {
                    return e.count + " zobrazení. Zobrazit analýzu postu";
                }),
                a("hf417cf0", "Odebrat ze záložek"),
                a("febd30ed", function (e) {
                    return e.count + " Záložk" + n(e.count, "y", "y", "a", "y") + ". Záložka";
                }),
                a("a8dc9587", function (e) {
                    return e.count + " Záložk" + n(e.count, "y", "y", "a", "y") + ". Přidáno do záložek";
                }),
                a("d636ebc6", "Lajknout"),
                a("eb3a8b0c", "Zrušit lajk"),
                a("j472ecfc", "Lajknout tento post"),
                a("dac92b0d", function (e) {
                    return e.count + " Lajk" + n(e.count, "y", "ů", "", "ů") + ". Lajk";
                }),
                a("aa650427", function (e) {
                    return e.count + " Lajk" + n(e.count, "y", "ů", "", "ů") + ". Lajk";
                }),
                a("hdf7226a", "Odpovědět"),
                a("c9940955", function (e) {
                    return e.count + " Odpově" + n(e.count, "di", "di", "ď", "dí") + ". Odpověď";
                }),
                a("f2919fb8", "Repost"),
                a("fd1e5446", "Zrušit repost"),
                a("dfad425d", function (e) {
                    return e.count + " repost" + n(e.count, "y", "y", "", "y") + ". Repost";
                }),
                a("a386dc55", function (e) {
                    return e.count + " repost" + n(e.count, "y", "y", "", "y") + ". Repostoval";
                }),
                a("f65198c2", "Zobrazit citace"),
                a("dc63da16", "Sdílet"),
                a("cee0585c", "Sdílet post"),
                a("ceb6841c", "Po odebrání členů se jejich posty skryjí před zbytkem komunity."),
                a("cb731cae", "Upravit Kruh"),
                a("c33d3a84", "Co se stane v Kruhu, to tam také zůstane"),
                a("c4f10e71", "Další informace"),
                a("b09adb0c", "Zobrazit konverzaci"),
                a("e4f1e6e4", function (e) {
                    return "" + e.formattedCount;
                }),
                a("daf8a75f", function (e) {
                    return "Sledování";
                }),
                a("ef1f4fc6", function (e) {
                    return "" + e.formattedCount;
                }),
                a("ad9b5988", function (e) {
                    return "Sledující" + n(e.count, "", "", "", "ch");
                }),
                a("a9980948", function (e) {
                    return "" + e.formattedCount;
                }),
                a("ce44a35c", function (e) {
                    return "Odběratel" + n(e.count, "é", "é", "", "ů");
                }),
                a("id949f68", function (e) {
                    return "" + e.formattedCount;
                }),
                a("hb608cfc", function (e) {
                    return "Předplatn" + n(e.count, "á", "á", "é", "á");
                }),
                a("ef633578", "Účet byl pozastaven"),
                a("a6a3d496", "Vložit odkaz"),
                a("acce6978", "Upravit odkaz"),
                a("f5e8f526", "Upravit"),
                a("h517e8d8", "Odstranit"),
                a("a30ae58e", "Text k zobrazení"),
                a("da38c958", "URL"),
                a("d5d57678", "Vložit"),
                a("ec822028", "Vyplňte toto pole"),
                a("ebc5d2cc", "S touto adresou URL není něco v pořádku. Zkontrolujte, zda je odkaz správně napsán a zda má správný formát."),
                a("h30a19bb", function (e) {
                    return "Toto je výsečový graf. Název grafu je " + e.chartTitle + ". Je v něm celkem tento počet kategorií: " + e.noOfCategories + ". Minimální hodnota je " + e.minValue + " a maximální hodnota je " + e.maxValue + ". Graf můžete prozkoumat pomocí navigačních ovládacích prvků.";
                }),
                a("h39fbf33", function (e) {
                    return "Vodorovný pruhový graf s hodnotami od " + e.minValue + " do " + e.maxValue;
                }),
                a("gdd51574", "Pro aktualizaci přejeďte prstem dolů"),
                a("e557ad8e", "Aktivní"),
                a("e3a58c28", "Rozbalit"),
                a("db355331", function (e) {
                    return "Tým " + e.team + " vyhrál";
                }),
                a("a8428d5e", "Nadcházející"),
                a("a7aad8ba", "Živě"),
                a("e431f1aa", "Finální"),
                a("a7391708", "Odloženo"),
                a("d2dbfa92", "Zrušeno"),
                a("cd734f66", "Dnes"),
                a("c8891d06", "Zítra"),
                a("d2414d31", function (e) {
                    return "Nepřečtené položky (" + e.count + ")";
                }),
                a("ce4e85ae", "Nepřečtené položky"),
                a("fb9f6f39", function (e) {
                    return e.count + "+";
                }),
                a("eb124f96", "dop./odp."),
                a("i7a6f114", "Hodina"),
                a("ccc99ff2", "Minuta"),
                a("g5662c95", function (e) {
                    return "Úroveň " + e.conversationTreeDepth + ":";
                }),
                a("b3688156", "Tento uživatel je právě v aktivním Prostoru, kliknutím se můžete připojit"),
                a("c0eb8825", function (e) {
                    return "Uživatel @" + e.screenName + " je právě v aktivním Prostoru, kliknutím se můžete připojit";
                }),
                a("d068dc6d", function (e) {
                    return "Uživatel @" + e.screenName + " je právě v aktivním Živém vysílání, kliknutím se můžete dívat";
                }),
                a("d9fd5570", "Skryté odpovědi"),
                a("c566d3a6", "Skrýt"),
                a("a897c4d6", "Otevře historii úprav"),
                a("e07a85a2", "Post není dostupný"),
                a("ffeb2fc6", "Další"),
                a("af2a65d9", function (e) {
                    return "Vybráno: " + e.timestamp;
                }),
                a("j3d49e93", function (e) {
                    return e.timestamp + " min";
                }),
                a("a394f905", function (e) {
                    return e.seconds + " s";
                }),
                a("f42c0c80", "Konec vybrané sekce. Výběr můžete upravit pomocí kláves se šipkami."),
                a("i667afe8", "Začátek vybrané sekce. Výběr můžete upravit pomocí kláves se šipkami."),
                a("gfaaead8", "Bez názvu"),
                a("cfd13f46", "Hlasové zprávy"),
                a("eba2660a", "Modrá"),
                a("hc196b78", "Švestková"),
                a("c8bc49d2", "Fialová"),
                a("efff09ee", "Zelená"),
                a("fcb424ee", "Žlutá"),
                a("ie2215aa", "Purpurová"),
                a("f106ce44", "Oranžová"),
                a("acddd4d4", "Červená"),
                a("cef9b062", "Šedozelená"),
                a("d9daefca", "Tmavě šedá");
            var d = t(202784),
                u = [],
                c = {};
            function s(e) {
                return e;
            }
            var v = (function (e) {
                var o, t, a, v, p;
                function l() {
                    return e.apply(this, arguments) || this;
                }
                return (
                    (t = e),
                    ((o = l).prototype = Object.create(t.prototype)),
                    (o.prototype.constructor = o),
                    i(o, t),
                    (l.prototype.render = function () {
                        return d.createElement.apply(d, this[this.props.$i18n].reduce(this.templateReducer, [d.Fragment, null]));
                    }),
                    (a = l),
                    (v = [
                        {
                            key: "bb85c49d",
                            get: function () {
                                return ["Platforma X vždy uchovává kopii Prostoru pro případnou kontrolu. "];
                            },
                        },
                        {
                            key: "c9af3ff7",
                            get: function () {
                                return ["Účty, které jste zablokovali, se nebudou moct připojit. Uživatelé, kteří nejsou přihlášeni přes platformu X, však budou moct poslouchat. "];
                            },
                        },
                        {
                            key: "e60e51b3",
                            get: function () {
                                return ["Společnost X vždy po omezenou dobu uchovává kopie Prostorů za účelem kontroly v případě nahlášení spamu nebo urážlivého chování. "];
                            },
                        },
                        {
                            key: "jd312ce9",
                            get: function () {
                                return ["Přihlaste se k odběru ověřených organizací a získejte kredity na reklamy ve výši 1 000 USD, které můžete použít na jakémkoli účtu ve vaší organizaci. "];
                            },
                        },
                        {
                            key: "e1a49407",
                            get: function () {
                                return ["Jakmile se přidáte na platformu X, můžete na post uživatele ", " odpovědět."];
                            },
                        },
                        {
                            key: "be54ed41",
                            get: function () {
                                return ["Když se připojíte k platformě X, můžete se o post uživatele ", " podělit se svými sledujícími."];
                            },
                        },
                        {
                            key: "jb19eb17",
                            get: function () {
                                return ["Připojte se k platformě X a dejte uživatel ", " vědět, že se vám jeho post líbí."];
                            },
                        },
                        {
                            key: "bbfee611",
                            get: function () {
                                return ["Sledujte uživatele ", " a zjistěte, co sdílí na platformě X."];
                            },
                        },
                        {
                            key: "af104f2b",
                            get: function () {
                                return ["Připojte se k platformě X, ať můžete sdílet post uživatele ", " soukromě."];
                            },
                        },
                        {
                            key: "ccc1f303",
                            get: function () {
                                return ["Sledujte seznam ", " a dostávejte vybrané posty."];
                            },
                        },
                        {
                            key: "ce02fabf",
                            get: function () {
                                return ["Připojte se k platformě X a získejte přístup k toku postů od lidí spravovaný uživatelem ", "."];
                            },
                        },
                        {
                            key: "a85608a7",
                            get: function () {
                                return ["Připojte se k platformě X a objevte nové a zajímavé konverzace o věcech, na kterých vám záleží nejvíc, například ", "."];
                            },
                        },
                        {
                            key: "c76865b7",
                            get: function () {
                                return ["Hledat v postech uživatele ", " na X."];
                            },
                        },
                        {
                            key: "e4af7661",
                            get: function () {
                                return ["Společnost X a její partneři používají soubory cookie, aby vám poskytovali lepší, bezpečnější a rychlejší služby a podporovali naše podnikání. Některé soubory cookie jsou nezbytné pro používání našich služeb, zlepšování našich služeb a zajištění jejich správného fungování. Pokud kliknete na „Přijmout všechny soubory cookie“, povolíte společnosti X a jejím partnerům používat soubory cookie k poskytování reklam a komunikace přizpůsobené vašim zájmům. Pokud kliknete na „Odmítnout nepodstatné soubory cookie“, nebudeme soubory cookie používat ke shromažďování dalších údajů pro přizpůsobené reklamy a komunikaci. Chcete-li se dozvědět více, včetně toho, jak změnit svůj výběr, navštivte naši stránku cookie v našem ", "."];
                            },
                        },
                        {
                            key: "a268632b",
                            get: function () {
                                return ["Společnost X a její partneři využívají soubory cookie k tomu, aby vám poskytovali lepší, bezpečnější a rychlejší služby, a aby podporovali vaše podnikání. Některé služby jsou nezbytné k tomu, abyste vůbec mohli naše služby využívat, ke zlepšení našich služeb a k tomu, aby služby fungovaly správně. "];
                            },
                        },
                        {
                            key: "c4d3d079",
                            get: function () {
                                return ["Registrací vyjadřujete souhlas se ", ", ", " a ", "."];
                            },
                        },
                        {
                            key: "j23c6259",
                            get: function () {
                                return ["Zadejte odkazy na nejméně tři články o vaší osobě v kvalifikovaných zpravodajských periodikách, které byly publikovány během posledních šesti měsíců. "];
                            },
                        },
                        {
                            key: "gf887169",
                            get: function () {
                                return ["V závislosti na typu vašeho účtu na platformě X budete muset splnit specifické požadavky. "];
                            },
                        },
                        {
                            key: "d454b49f",
                            get: function () {
                                return ["Vyberte možnost, která nejlépe popisuje váš účet. "];
                            },
                        },
                        {
                            key: "hd977dd9",
                            get: function () {
                                return ["Vyberte metodu, kterou prokážete, že váš účet splňuje kritéria pro ověření jako aktivista nebo organizátor. "];
                            },
                        },
                        {
                            key: "e3432573",
                            get: function () {
                                return ["Nesplnili jste minimální počet sledujících nebo zmínek, který je ve vaší oblasti potřebný k tomu, abyste mohli být ověřeni jako aktivista. "];
                            },
                        },
                        {
                            key: "efd8f6e7",
                            get: function () {
                                return ["Zadejte odkaz na profil služby Trendy Google, který prokáže nedávné aktivity vyhledávání v souvislosti s vaší osobou. "];
                            },
                        },
                        {
                            key: "fe54dcfd",
                            get: function () {
                                return ["Zadejte odkaz na stránku Wikipedie, která o vás informuje. Musí obsahovat nejméně tři externí reference. "];
                            },
                        },
                        {
                            key: "ie26d72d",
                            get: function () {
                                return ["Zadejte odkaz, který obsahuje referenční informace o vás ve vedoucí pozici ověřené zájmové skupiny. Referenční informace musí pocházet s oficiálního webu ověřené organizace. "];
                            },
                        },
                        {
                            key: "af3fe861",
                            get: function () {
                                return ["Vyberte metodu, kterou prokážete, že váš účet splňuje kritéria pro ověření jako vlivná osobnost. "];
                            },
                        },
                        {
                            key: "a08d6af3",
                            get: function () {
                                return ["Nesplnili jste minimální počet sledujících nebo zmínek, který je ve vaší oblasti potřebný k tomu, abyste mohli být ověřeni jako tvůrce obsahu nebo vlivná osobnost. "];
                            },
                        },
                        {
                            key: "f774e39d",
                            get: function () {
                                return ["Vyberte metodu, kterou prokážete, že váš účet splňuje kritéria pro ověření jako prominentní společnost, značka nebo organizace. "];
                            },
                        },
                        {
                            key: "d8510869",
                            get: function () {
                                return ["Zadejte odkaz na profil na webu Trendy Google s důkazy o nedávných aktivitách vyhledávání v souvislosti s vaší společností, značkou nebo organizací. "];
                            },
                        },
                        {
                            key: "h75e3641",
                            get: function () {
                                return ["Zadejte odkaz na stránku Wikipedie o vaší společnosti, značce nebo organizaci, která obsahuje nejméně tři externí odkazy. "];
                            },
                        },
                        {
                            key: "de6d69a1",
                            get: function () {
                                return ["Zadejte odkaz na stránku dokazující, že vaše společnost, značka nebo organizace je kótovaná na veřejné burze. "];
                            },
                        },
                        {
                            key: "be0e8fdb",
                            get: function () {
                                return ["Zadejte odkazy na nejméně tři články o vaší společnosti v ověřených zpravodajských periodikách z posledních šesti měsíců. "];
                            },
                        },
                        {
                            key: "baed7213",
                            get: function () {
                                return ["Pokud chcete být ověřeni v této kategorii, musíte být členem vrcholového vedení ověřené organizace. Potvrďte způsobilost přidáním účtu vaší organizace. "];
                            },
                        },
                        {
                            key: "c5d688cf",
                            get: function () {
                                return ["Vyberte metodu, kterou prokážete, že váš účet splňuje kritéria pro ověření jako člen vrcholového vedení prominentní organizace. "];
                            },
                        },
                        {
                            key: "fce3e22d",
                            get: function () {
                                return ["Zadejte odkazy na nejméně tři články publikované během posledních šesti měsíců ověřenými zpravodajskými organizacemi, které na vás odkazují jako na člena vrcholového vedení nebo výkonného výboru vaší organizace. "];
                            },
                        },
                        {
                            key: "f1b276f1",
                            get: function () {
                                return ["Zadejte odkaz, který vás uvádí jako člena vrcholového vedení vaší organizace. Odkaz musí být z oficiálního webu ověřené společnosti, značky nebo organizace. "];
                            },
                        },
                        {
                            key: "e2465097",
                            get: function () {
                                return ["Zadejte odkaz na profil služby Trendy Google, který prokáže nedávné aktivity vyhledávání v souvislosti s vaší produkcí. "];
                            },
                        },
                        {
                            key: "g83bcecd",
                            get: function () {
                                return ["Zadejte odkazy na nejméně tři články o vaší produkci v kvalifikovaných zpravodajských periodikách z posledních šesti měsíců. "];
                            },
                        },
                        {
                            key: "f3016c6f",
                            get: function () {
                                return ["Vyberte metodu, kterou prokážete, že váš účet splňuje kritéria pro ověření jako oficiální účet velké produkce. "];
                            },
                        },
                        {
                            key: "h74144bd",
                            get: function () {
                                return ["Zadejte odkaz na stránku dokazující, že vaše produkční organizace je kótovaná na veřejné burze. "];
                            },
                        },
                        {
                            key: "jef5dfc5",
                            get: function () {
                                return ["Zadejte odkaz na stránku Wikipedie o vaší produkci, která obsahuje nejméně tři externí odkazy. "];
                            },
                        },
                        {
                            key: "gf5a4309",
                            get: function () {
                                return ["Vyberte metodu, kterou prokážete, že váš účet splňuje kritéria pro ověření jako prominentní společnost v oblasti zábavy. "];
                            },
                        },
                        {
                            key: "g2e175b1",
                            get: function () {
                                return ["Zadejte odkaz na profil služby Trendy Google, který prokáže nedávné aktivity vyhledávání v souvislosti s vaší společností působící v oblasti zábavy. "];
                            },
                        },
                        {
                            key: "efc369c3",
                            get: function () {
                                return ["Zadejte odkazy na nejméně tři články o vaší společnosti v oblasti zábavy v kvalifikovaných zpravodajských periodikách z posledních šesti měsíců. "];
                            },
                        },
                        {
                            key: "ff03f07d",
                            get: function () {
                                return ["Zadejte odkaz na stránku dokazující, že vaše společnost působící v oblasti zábavy je kótovaná na veřejné burze. "];
                            },
                        },
                        {
                            key: "a3e9dde3",
                            get: function () {
                                return ["Zadejte odkaz na stránku Wikipedie, která informuje o vaší společnosti působící v oblasti zábavy a obsahuje nejméně tři externí odkazy. "];
                            },
                        },
                        {
                            key: "c2b8fb3d",
                            get: function () {
                                return ["Vyberte metodu, kterou prokážete, že váš účet splňuje kritéria pro ověření jako vlivný tvůrce digitálního obsahu. "];
                            },
                        },
                        {
                            key: "fd33ce05",
                            get: function () {
                                return ["Zadejte odkaz na svůj profil tvůrce obsahu. Daný profil tvůrce může být na libovolné digitální platformě, ale musí uvádět vaše uživatelské jméno na platformě X. "];
                            },
                        },
                        {
                            key: "bb47d2b9",
                            get: function () {
                                return ["Zadejte odkaz na stránku Wikipedie, která o vás informuje a obsahuje nejméně tři externí reference. "];
                            },
                        },
                        {
                            key: "db930fb3",
                            get: function () {
                                return ["Vyberte metodu, kterou prokážete, že váš účet splňuje kritéria pro ověření jako jednotlivec v oblasti zábavy. "];
                            },
                        },
                        {
                            key: "dc263ec1",
                            get: function () {
                                return ["Zadejte odkaz na váš profil na webu IMDB, který zahrnuje nejméně 50 profesí podílejících se na produkci. "];
                            },
                        },
                        {
                            key: "d18a48d5",
                            get: function () {
                                return ["Zadejte odkaz, který na vás a na váš účet na platformě X odkazuje jako na jednotlivce v oblasti zábavy. Odkaz musí vést na oficiální web ověřené entity. "];
                            },
                        },
                        {
                            key: "i3b4217b",
                            get: function () {
                                return ["Vyberte kategorii, která nejlépe popisuje váš účet v oblasti státní správy. "];
                            },
                        },
                        {
                            key: "ja62479f",
                            get: function () {
                                return ["Zadejte odkazy na nejméně pět článků publikovaných během posledních šesti měsíců ověřenými zpravodajskými organizacemi, které na vás odkazují jako na kvalifikovaného kandidáta na funkci. "];
                            },
                        },
                        {
                            key: "f28bbbb1",
                            get: function () {
                                return ["Zadejte odkazy na nejméně pět článků publikovaných během posledních šesti měsíců ověřenými zpravodajskými organizacemi, které na vás odkazují jako na kvalifikovaný úřad státní správy. "];
                            },
                        },
                        {
                            key: "b229f4b9",
                            get: function () {
                                return ["Zadejte odkazy na nejméně pět článků publikovaných během posledních šesti měsíců ověřenými zpravodajskými organizacemi, které na vás odkazují jako na kvalifikovaného úředníka státní správy. "];
                            },
                        },
                        {
                            key: "e85178bd",
                            get: function () {
                                return ["Zadejte odkaz na oficiální web vaší kampaně, který odkazuje na váš účet na platformě a uvádí vás jako kandidáta na funkci na regionální nebo celostátní úrovni. "];
                            },
                        },
                        {
                            key: "i499f8f7",
                            get: function () {
                                return ["Zadejte odkaz na oficiální web státní správy, který odkazuje na váš účet na platformě X a na váš úřad státní správy nebo veřejnou službu. "];
                            },
                        },
                        {
                            key: "a394654f",
                            get: function () {
                                return ["Zadejte odkaz, který vás uvádí jako kvalifikovaného pracovníka nebo spolupracovníka státní správy. Odkaz musí být z oficiálního webu ověřené organizace státní správy. "];
                            },
                        },
                        {
                            key: "dcb0da53",
                            get: function () {
                                return ["Pokud se novináři chtějí nechat ověřit, musí být zaměstnáni u ověřené zpravodajské organizace nebo periodika. Poskytněte odkaz na účet vašeho zaměstnavatele. "];
                            },
                        },
                        {
                            key: "d82a96af",
                            get: function () {
                                return ["Vyberte metodu, kterou prokážete, že váš účet splňuje kritéria pro ověření jako významný novinář. "];
                            },
                        },
                        {
                            key: "d47b4101",
                            get: function () {
                                return ["Poskytněte odkaz, který vás uvádí jako novináře pracujícího pro vašeho zaměstnavatele. Odkaz musí být z oficiálního webu ověřené zpravodajské organizace. "];
                            },
                        },
                        {
                            key: "a3540593",
                            get: function () {
                                return ["Uveďte autorství a/nebo spoluautorství nejméně tří článků v kvalifikovaných periodikách vydaných během posledních šesti měsíců. "];
                            },
                        },
                        {
                            key: "edb782e7",
                            get: function () {
                                return ["Vyberte metodu, kterou prokážete, že váš účet splňuje kritéria pro ověření jako prominentní zpravodajská organizace. "];
                            },
                        },
                        {
                            key: "cc16af2d",
                            get: function () {
                                return ["Zadejte odkaz na profil na webu Trendy Google s důkazy o nedávných aktivitách vyhledávání v souvislosti s vaší zpravodajskou organizací. "];
                            },
                        },
                        {
                            key: "b42b7001",
                            get: function () {
                                return ["Zadejte odkaz na stránku Wikipedie o vaší zpravodajské organizaci, která obsahuje nejméně tři externí odkazy. "];
                            },
                        },
                        {
                            key: "fd2c6f63",
                            get: function () {
                                return ["Zadejte odkaz na stránku dokazující, že vaše zpravodajská organizace je kótovaná na veřejné burze. "];
                            },
                        },
                        {
                            key: "ec7027cd",
                            get: function () {
                                return ["Zadejte odkazy na nejméně tři články o vaší zpravodajské organizaci v ověřených zpravodajských periodikách z posledních šesti měsíců. "];
                            },
                        },
                        {
                            key: "a0a9f835",
                            get: function () {
                                return ["Jednotlivci v profesionálním sportu musí soutěžit v ověřených sportovních ligách nebo na akcích, jež budou ověřeny. Zadejte odkaz na ověřenou entitu (tým, ligu, akci nebo organizaci) relevantní pro váš účet."];
                            },
                        },
                        {
                            key: "iba551d5",
                            get: function () {
                                return ["Nesplnili jste minimální počet sledujících, který je ve vaší oblasti potřebný k tomu, abyste mohli být ověřeni jako jednotlivec v esportu. "];
                            },
                        },
                        {
                            key: "h515e869",
                            get: function () {
                                return ["Jednotlivci v esportu musí soutěžit v ověřených esportovních ligách nebo na akcích, jež budou ověřeny. Zadejte odkaz na ověřenou entitu (tým, ligu, akci nebo organizaci) relevantní pro váš účet."];
                            },
                        },
                        {
                            key: "d2cd7f89",
                            get: function () {
                                return ["Vyberte metodu, kterou prokážete, že váš účet splňuje kritéria pro ověření jako prominentní sportovní liga, tým nebo globální soutěž. "];
                            },
                        },
                        {
                            key: "c68614a3",
                            get: function () {
                                return ["Zadejte odkaz na profil na webu Trendy Google s důkazy o nedávných aktivitách vyhledávání v souvislosti s vaší profesionální sportovní organizací. "];
                            },
                        },
                        {
                            key: "b4ea622f",
                            get: function () {
                                return ["Zadejte odkaz na stránku Wikipedie o vaší profesionální sportovní organizaci, která obsahuje nejméně tři externí odkazy. "];
                            },
                        },
                        {
                            key: "acab99f7",
                            get: function () {
                                return ["Zadejte odkaz na stránku dokazující, že vaše profesionální sportovní organizace je kótovaná na veřejné burze. "];
                            },
                        },
                        {
                            key: "df0b2577",
                            get: function () {
                                return ["Zadejte odkaz na oficiální web globální soutěže nebo profesionální sportovní organizace, který na vás odkazuje jako na ligu, tým nebo soutěž. "];
                            },
                        },
                        {
                            key: "jfda4c29",
                            get: function () {
                                return ["Zadejte odkazy na nejméně tři články o vaší organizaci v ověřených zpravodajských periodikách z posledních šesti měsíců. "];
                            },
                        },
                        {
                            key: "g3299df1",
                            get: function () {
                                return ["Vyberte metodu, kterou prokážete, že váš účet splňuje kritéria pro ověření jako profesionální sportovec. "];
                            },
                        },
                        {
                            key: "id6bbc01",
                            get: function () {
                                return ["Vyberte metodu, kterou prokážete, že váš účet splňuje kritéria pro ověření jako jednotlivec v esportu. "];
                            },
                        },
                        {
                            key: "fbe119c5",
                            get: function () {
                                return ["Zadejte odkaz na oficiální web globální soutěže nebo profesionální sportovní organizace, který na vás odkazuje jako na profesionálního sportovce, trenéra nebo manažera. "];
                            },
                        },
                        {
                            key: "da0e7f33",
                            get: function () {
                                return ["Zadejte odkaz na oficiální web ověřené esportovní ligy nebo akce, který na vás odkazuje jako na člena soupisky týmu, trenéra nebo manažera. "];
                            },
                        },
                        {
                            key: "ca20e39f",
                            get: function () {
                                return ["V současné době bohužel nejsme schopni zpracovat žádné nové žádosti o ověření. Vraťte se sem později a zkuste to znovu. "];
                            },
                        },
                        {
                            key: "jf9308af",
                            get: function () {
                                return ["Abychom mohli ověřit vaši identitu pomocí e-mailu, potřebujete mít z dřívějška ověřenou adresu. Pokud si ji chcete přidat, přejděte do ", "."];
                            },
                        },
                        {
                            key: "e9976a41",
                            get: function () {
                                return ["Abychom mohli ověřit vaši identitu pomocí e-mailu, potřebujete mít ověřenou e-mailovou adresu, která splňuje naše požadavky na způsobilost. Pokud si ji chcete přidat, přejděte do ", "."];
                            },
                        },
                        {
                            key: "e5b4cc43",
                            get: function () {
                                return ["Ověření je určeno pro významné lidi nebo skupiny v rámci konkrétní kategorie. Pokud si myslíte, že mezi ně patříte, podejte žádost o ověření. "];
                            },
                        },
                        {
                            key: "bfb355fb",
                            get: function () {
                                return ["Dbejte na to, aby byla zřetelně vidět vaše tvář a aby šlo snadno přečíst text na průkazu. V opačném případě může být nutné, abyste fotku odeslali znovu. Platforma X nedostane kopii vašeho průkazu ani ji nebude ukládat. "];
                            },
                        },
                        {
                            key: "d65a41c3",
                            get: function () {
                                return ["Informace o tom, jak můžete získat přístup k odeslaným údajům nebo je opravit, najdete v našich ", "."];
                            },
                        },
                        {
                            key: "a1c39f5b",
                            get: function () {
                                return ["Jakmile o vaší žádosti rozhodneme, dáme vám vědět. Může to trvat až " + this.props.days + " d" + n(this.props.days, "ny", "ny", "en", "nů") + "."];
                            },
                        },
                        {
                            key: "ja826537",
                            get: function () {
                                return ["Jak bychom se mohli zlepšit? Vyplňte nám krátký ", "."];
                            },
                        },
                        {
                            key: "b7be91bf",
                            get: function () {
                                return ["Vaše poslední žádost byla zamítnuta " + this.props.date + ". S odesláním nové žádosti budete muset počkat 30 dnů od tohoto data."];
                            },
                        },
                        {
                            key: "jcb00a95",
                            get: function () {
                                return ["Vaše poslední žádost byla podána " + this.props.date + ". S odesláním nové žádosti budete muset počkat 30 dnů od tohoto data."];
                            },
                        },
                        {
                            key: "j92ea4b9",
                            get: function () {
                                return ["Vaše poslední žádost byla podána " + this.props.date + ". Jakmile o vaší žádosti rozhodneme, dáme vám vědět."];
                            },
                        },
                        {
                            key: "jbcd22b1",
                            get: function () {
                                return ["Užijte si to a pamatujte na dodržování ", "."];
                            },
                        },
                        {
                            key: "hcecd237",
                            get: function () {
                                return ["Toto jsou aplikace propojené s vaším účtem. Zobrazíte zde informace, ke kterým tyto aplikace mají přístup, a tento přístup zde můžete zrušit. "];
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
                                return ["Lidé, které sledujete, vám stále budou moci posílat zprávy. "];
                            },
                        },
                        {
                            key: "d79b6b7b",
                            get: function () {
                                return ["Připojte spravující účet, aby se k vašemu automatizovanému účtu mohl přidat příslušný štítek. Ke spravujícímu účtu musí být připojeny všechny automatizované účty. "];
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
                                return ["Snažíme se, aby byla platforma X místem slušné konverzace, takže jsme zakázali většinu způsobů, jak na tento post reagovat. Pokud o něm chcete mluvit, můžete jej přesto citovat ve svém postu."];
                            },
                        },
                        {
                            key: "i2a606d1",
                            get: function () {
                                return ["Snažíme se, aby platforma X byla místem pro zdravou konverzaci, takže jsme zakázali většinu možností, jak na tento post reagovat. "];
                            },
                        },
                        {
                            key: "fe93026b",
                            get: function () {
                                return ["Tyto posty může zobrazit pouze uživatel @" + this.props.username + " a jeho Kruh."];
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
                                return ["Tato pravidla nastavili správci komunity, kteří je i kontrolují, a platí jako doplněk k ", "."];
                            },
                        },
                        {
                            key: "gb7eca21",
                            get: function () {
                                return ["Komunity jsou veřejné, takže chráněné účty se nemůžou připojit. Můžete v komunitě číst posty, ale pokud chcete přispívat, ", "."];
                            },
                        },
                        {
                            key: "jb124a07",
                            get: function () {
                                return ["Byli jste odebráni moderátorem kvůli porušení tohoto pravidla komunity: "];
                            },
                        },
                        {
                            key: "d6d818a1",
                            get: function () {
                                return [this.props.viewerCount + " zobrazení"];
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
                                return ["GIF od uživatele "];
                            },
                        },
                        {
                            key: "i9606e33",
                            get: function () {
                                return ["Video od uživatele "];
                            },
                        },
                        {
                            key: "i1a64d47",
                            get: function () {
                                return ["Fotka od uživatele "];
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
                                return ["Místo toho hledat „", "“"];
                            },
                        },
                        {
                            key: "hce48b8b",
                            get: function () {
                                return ["Měli jste na mysli „", "“?"];
                            },
                        },
                        {
                            key: "f8ea2809",
                            get: function () {
                                return [this.props.selection + " teď může odpovědět"];
                            },
                        },
                        {
                            key: "hb92c979",
                            get: function () {
                                return ["", "/" + this.props.maxLimit + " znaků"];
                            },
                        },
                        {
                            key: "a20c0721",
                            get: function () {
                                return ["Poslední úprava: "];
                            },
                        },
                        {
                            key: "a9ce2dd5",
                            get: function () {
                                return ["Přečtěte si další ", "."];
                            },
                        },
                        {
                            key: "e2e6ea0d",
                            get: function () {
                                return ["prostřednictvím: "];
                            },
                        },
                        {
                            key: "bd7349bb",
                            get: function () {
                                return ["Naposledy uloženo "];
                            },
                        },
                        {
                            key: "hb16b207",
                            get: function () {
                                return ["Zveřejnění ", " bude zrušeno, bude přesunut do konceptů a nebude veřejně viditelný."];
                            },
                        },
                        {
                            key: "dd5806bb",
                            get: function () {
                                return ["Následující média zahrnují potenciálně citlivý obsah. "];
                            },
                        },
                        {
                            key: "d247a0b9",
                            get: function () {
                                return ["Funkce úprav je omezena na původní posty a netýká se věcí, jako jsou odpovědi nebo vlákna. ", " o tom, co můžete upravovat."];
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
                                return ["Chcete svůj Kruh upravit? Klidně se do toho pusťte. Pokud nějaké lidi odeberete, nedostanou o tom žádné oznámení. "];
                            },
                        },
                        {
                            key: "j0b75ce7",
                            get: function () {
                                return ["", " nové možnosti formátování v novém nástroji pro tvorbu článků."];
                            },
                        },
                        {
                            key: "dd964cf3",
                            get: function () {
                                return ["Komunity jsou veřejné, takže chráněné účty se nemůžou zapojit do konverzace. Můžete číst a lajkovat posty, ale pokud chcete využít další možnosti, musíte ", "."];
                            },
                        },
                        {
                            key: "e34022a7",
                            get: function () {
                                return ["Odpověď uživateli "];
                            },
                        },
                        {
                            key: "bfd9c99b",
                            get: function () {
                                return ["Odpověď uživatelům "];
                            },
                        },
                        {
                            key: "g7a1000f",
                            get: function () {
                                return ["Odpověď uživatelům "];
                            },
                        },
                        {
                            key: "i558c201",
                            get: function () {
                                return ["Odpověď uživatelům "];
                            },
                        },
                        {
                            key: "j935bcdf",
                            get: function () {
                                return ["Odpovídáte uživateli ", " v " + this.props.communityName];
                            },
                        },
                        {
                            key: "i7bd9c8f",
                            get: function () {
                                return ["Odpovídáte uživatelům ", " v " + this.props.communityName];
                            },
                        },
                        {
                            key: "cfa0049d",
                            get: function () {
                                return ["Odpovídáte uživatelům ", " v " + this.props.communityName];
                            },
                        },
                        {
                            key: "jfc8e4b5",
                            get: function () {
                                return ["Odpovídáte uživateli ", " v " + this.props.communityName];
                            },
                        },
                        {
                            key: "fe06c9f5",
                            get: function () {
                                return ["Odpovídáte uživateli ", ". Vaši odpověď uvidí také jeho ", "."];
                            },
                        },
                        {
                            key: "f7e12e15",
                            get: function () {
                                return ["Odpovídáte uživatelům ", ". Vaši odpověď uvidí také jejich ", "."];
                            },
                        },
                        {
                            key: "eade6035",
                            get: function () {
                                return ["Odpovídáte uživatelům ", ". Vaši odpověď uvidí také jejich ", "."];
                            },
                        },
                        {
                            key: "da018b37",
                            get: function () {
                                return ["Odpovídáte uživatelům ", ". Vaši odpověď uvidí také jejich ", "."];
                            },
                        },
                        {
                            key: "e119d033",
                            get: function () {
                                return ["Odpovídáte uživateli ", ". Kruh uživatele " + this.props.trustedFriendsTweetOwner + " , který vás sleduje, také uvidí vaši odpověď."];
                            },
                        },
                        {
                            key: "d0c02e7b",
                            get: function () {
                                return ["Odpovídáte uživateli ", ". Kruh uživatele " + this.props.trustedFriendsTweetOwner + " také uvidí vaši odpověď."];
                            },
                        },
                        {
                            key: "bce67b49",
                            get: function () {
                                return ["Odpovídáte uživateli ", ". Kruh uživatele ", ", který vás sleduje, také uvidí vaši odpověď."];
                            },
                        },
                        {
                            key: "e460ccf1",
                            get: function () {
                                return ["Odpovídáte uživateli ", ". Kruh uživatele ", " také uvidí vaši odpověď."];
                            },
                        },
                        {
                            key: "i421898b",
                            get: function () {
                                return ["Odpovídáte uživateli ", ". Kruh uživatele ", ", který vás sleduje, také uvidí vaši odpověď."];
                            },
                        },
                        {
                            key: "c70a17eb",
                            get: function () {
                                return ["Odpovídáte uživateli ", ". Kruh uživatele ", " také uvidí vaši odpověď."];
                            },
                        },
                        {
                            key: "b0d6bca7",
                            get: function () {
                                return ["Odpovídáte uživateli ", ". Kruh uživatele ", ", který vás sleduje, také uvidí vaši odpověď."];
                            },
                        },
                        {
                            key: "aacf46d1",
                            get: function () {
                                return ["Odpovídáte uživateli ", ". Kruh uživatele ", " také uvidí vaši odpověď."];
                            },
                        },
                        {
                            key: "ff2f533f",
                            get: function () {
                                return ["Kliknutím na možnost Sponzorovat post souhlasíte se "];
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
                                return ["Ještě jste nepotvrdili svůj nový e-mail " + this.props.unverifiedEmail + ". "];
                            },
                        },
                        {
                            key: "f05afae5",
                            get: function () {
                                return ["Změnou hesla budete odhlášeni od všech aktivních relací na platformě X kromě té, kterou momentálně používáte. Aplikace ", " s přístupem k vašemu účtu nebude nijak ovlivněna. "];
                            },
                        },
                        {
                            key: "d3543217",
                            get: function () {
                                return ["Souhlasím s tím, že společnosti X a Persona mohou používat snímky mého průkazu totožnosti a moji fotografii, včetně získaných biometrických údajů, k potvrzení mé totožnosti a pro účely související s bezpečností a zabezpečením platformy X, prevencí podvodů a pro účely plateb. Persona může taková data uchovávat po dobu až 30 dnů. X může uchovávat celé jméno, adresu a kódová čísla mého dokladu totožnosi, po dobu, po kterou si předplácím službu ", "."];
                            },
                        },
                        {
                            key: "j7963df1",
                            get: function () {
                                return ["Souhlasím s tím, že společnosti X a Au10tix budou používat obrázky mého průkazu totožnosti a moji fotografii, včetně extrahovaných biometrických údajů, k potvrzení mé identity a za účely související s bezpečností a zabezpečením platformy X, prevencí podvodů a k účelům plateb. Au10tix může taková data uchovávat po dobu až 30 dnů. X může uchovávat celé jméno, adresu a hash mého ID čísla dokumentu, dokud se účastním programů ", " nebo ", ". "];
                            },
                        },
                        {
                            key: "f8f20041",
                            get: function () {
                                return ["Souhlasím s tím, že společnosti X a Au10tix budou používat obrázky mého průkazu totožnosti a moji fotografii, včetně extrahovaných biometrických údajů, k potvrzení mé identity a za účely související s bezpečností a zabezpečením platformy X, prevencí podvodů a k účelům plateb. Au10tix může taková data uchovávat po dobu až 30 dnů. X může uchovávat celé jméno, adresu a hash mého ID čísla dokladu, dokud se účastním programů ", " nebo ", "."];
                            },
                        },
                        {
                            key: "dd49801f",
                            get: function () {
                                return ["Souhlasím s tím, že společnosti X a Stripe budou používat obrázky mého průkazu totožnosti a moji fotografii, včetně extrahovaných biometrických údajů, k potvrzení mé identity a za účely souvisejícími s bezpečností a zabezpečením platformy X, prevencí podvodů a k účelům plateb. Společnost Stripe nebo její dílčí zpracovatelé mohou uchovávat taková data po dobu až 30 dnů a mohou je použít k učení modelů a aktualizaci databází pro účely odhalování podvodů. X může uchovávat celé jméno, adresu a hash mého čísla ID dokumentu, dokud se účastním programů ", " nebo ", "."];
                            },
                        },
                        {
                            key: "c5cee667",
                            get: function () {
                                return ["Souhlasím s tím, že společnosti X a Stripe budou používat obrázky mého průkazu totožnosti a moji fotografii, včetně extrahovaných biometrických údajů, k potvrzení mé identity a za účely souvisejícími s bezpečností a zabezpečením platformy X, prevencí podvodů a k účelům plateb. Společnost Stripe nebo její dílčí zpracovatelé mohou uchovávat taková data po dobu až 30 dnů a mohou je použít k učení modelů a aktualizaci databází k účelům odhalování podvodů. X může uchovávat celé jméno, adresu a hash mého čísla ID dokladu, dokud se účastním programů ", " nebo ", "."];
                            },
                        },
                        {
                            key: "a4455c05",
                            get: function () {
                                return ["Opište si ho nebo si udělejte snímek obrazovky a bezpečně ho uložte. Tento kód lze použít jen jednou. "];
                            },
                        },
                        {
                            key: "cd68cf4b",
                            get: function () {
                                return ["Toto je hlavní země spojovaná s vaším účtem. Informace o zemi nám pomáhá přizpůsobit váš uživatelský zážitek na platformě X. "];
                            },
                        },
                        {
                            key: "g66a254b",
                            get: function () {
                                return ["Toto jsou kontakty, které jste importovali ze svých mobilních zařízení. Tyto informace se používají k personalizaci vašeho uživatelského prostředí na platformě X, například formou návrhů účtů, které by stálo za to sledovat. Nahrané kontakty můžete smazat a synchronizaci s platformou X můžete na všech zařízeních vypnout. Upozorňujeme ale, že to může chvíli trvat. "];
                            },
                        },
                        {
                            key: "ffa48331",
                            get: function () {
                                return ["Po aktivaci této funkce budete moct ke svým postům přidat informaci o poloze. "];
                            },
                        },
                        {
                            key: "a629c16f",
                            get: function () {
                                return ["", " " + this.props.discountedPrice + " účtováno měsíčně po dobu " + n(this.props.duration, this.props.duration + " měsíců", this.props.duration + " měsíců", "jednoho měsíce", this.props.duration + " měsíců")];
                            },
                        },
                        {
                            key: "c142e70f",
                            get: function () {
                                return ["", " " + this.props.discountedPrice + " účtováno ročně po dobu " + n(this.props.duration, this.props.duration + " let", this.props.duration + " let", "jednoho roku", this.props.duration + " let")];
                            },
                        },
                        {
                            key: "e9dc8a25",
                            get: function () {
                                return ["", " ", " na " + n(this.props.duration, this.props.duration + " r.", this.props.duration + " r.", "jeden rok", this.props.duration + " r.")];
                            },
                        },
                        {
                            key: "f8a9cbb7",
                            get: function () {
                                return ["", " ", " na " + n(this.props.duration, this.props.duration + " měs.", this.props.duration + " měs.", "jeden měsíc", this.props.duration + " měs.")];
                            },
                        },
                        {
                            key: "ab3bf5a7",
                            get: function () {
                                return ["Když někoho zablokujete, daná osoba už vás nebude moct sledovat ani vám poslat zprávu, a vy od ní neuvidíte žádná oznámení. "];
                            },
                        },
                        {
                            key: "g124fce9",
                            get: function () {
                                return ["Některé informace o účtu mohou být stále dostupné ve vyhledávačích, jako například Google nebo Bing. "];
                            },
                        },
                        {
                            key: "d9ef8fbb",
                            get: function () {
                                return ["Pokud si chcete jen změnit @uživatelské_jméno, nemusíte kvůli tomu deaktivovat účet — stačí si uživatelské jméno upravit v ", "."];
                            },
                        },
                        {
                            key: "b7a3adc1",
                            get: function () {
                                return ["Pokud chcete aktuální @uživatelské_jméno nebo e-mailovou adresu používat pro jiný účet na X, před deaktivací tohoto účtu je nezapomeňte ", "."];
                            },
                        },
                        {
                            key: "f3613d0b",
                            get: function () {
                                return ["Pokud si chcete stáhnout ", ", je třeba žádost o poskytnutí údajů odeslat a stažení provést ještě před deaktivací účtu. Odkazy na stažení vašich údajů nelze zaslat na deaktivované účty."];
                            },
                        },
                        {
                            key: "e9dec56f",
                            get: function () {
                                return ["Potvrzujete, že datum ", " je správné. Pokud ne, může to mít vliv na váš účet."];
                            },
                        },
                        {
                            key: "cfd2909d",
                            get: function () {
                                return ["Platforma X bude váš věk používat pro přizpůsobení vašeho prostředí, včetně reklam, jak vysvětlují naše ", "."];
                            },
                        },
                        {
                            key: "jea9c1cb",
                            get: function () {
                                return ["Můžete určit, kdo na platformě X uvidí vaše datum narození. "];
                            },
                        },
                        {
                            key: "d80a7547",
                            get: function () {
                                return ["Hostí "];
                            },
                        },
                        {
                            key: "j7293d6b",
                            get: function () {
                                return ["", " je spoluhostitel"];
                            },
                        },
                        {
                            key: "df79977f",
                            get: function () {
                                return ["", " právě mluví"];
                            },
                        },
                        {
                            key: "ad960f39",
                            get: function () {
                                return ["", " poslouchá"];
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
                                return ["Vytvořit "];
                            },
                        },
                        {
                            key: "ca584c31",
                            get: function () {
                                return ["Společnost s touto webovou stránkou již existuje. Mysleli jste ", "?"];
                            },
                        },
                        {
                            key: "eb96a831",
                            get: function () {
                                return ["Tyto filtry nebudou mít vliv na oznámení od lidí, které sledujete. "];
                            },
                        },
                        {
                            key: "aba5a349",
                            get: function () {
                                return ["Můžete skrýt vždy jedno slovo, frázi, @uživatelské_jméno nebo hashtag současně. "];
                            },
                        },
                        {
                            key: "f03ea36d",
                            get: function () {
                                return ["Když některá slova skryjete, nebudete dál dostávat oznámení o postech, které tato slova obsahují. Takové posty už ani neuvidíte na časové ose na hlavní stránce. "];
                            },
                        },
                        {
                            key: "b0b13519",
                            get: function () {
                                return ["Tady je seznam uživatelů, které jste skryli. Můžete do něj přidat další lidi nebo někoho odebrat. "];
                            },
                        },
                        {
                            key: "e212a9ab",
                            get: function () {
                                return ["Můžete spravovat své preference ohledně zobrazování choulostivých médií na platformě X. Další informace najdete v našich ", "."];
                            },
                        },
                        {
                            key: "cbc4f32d",
                            get: function () {
                                return ["Patří sem ostatní média označená jako choulostivá, například média od účtů, které si svá ", " jako choulostivá."];
                            },
                        },
                        {
                            key: "a4fc317d",
                            get: function () {
                                return ["Váš účet byl označen a nemůže se účastnit programu podílů z výnosů pro tvůrce. Můžete se odvolat podle pokynů ", ". Váš podíl na výnosech bude po dobu zpracování odvolání nadále narůstat."];
                            },
                        },
                        {
                            key: "a8e78be7",
                            get: function () {
                                return ["Váš účet byl označen a nemůže se účastnit programu sdílení výnosů z reklamy. Můžete se odvolat podle pokynů ", ". Váš podíl na výnosech bude po dobu zpracování odvolání nadále narůstat."];
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
                                return ["Předplaťte si uživatele", "" + this.props.name];
                            },
                        },
                        {
                            key: "ede65a59",
                            get: function () {
                                return ["Zajímá vás, co můžete dostat? "];
                            },
                        },
                        {
                            key: "a9c053c7",
                            get: function () {
                                return ["Podáním přihlášky přijímáte "];
                            },
                        },
                        {
                            key: "geee69df",
                            get: function () {
                                return ["Zvolte si měsíční cenu, která vám a vašemu publiku vyhovuje. Zajímá vás, kolik můžete vydělat? "];
                            },
                        },
                        {
                            key: "fdf28443",
                            get: function () {
                                return ["Výběrem možnosti Přijmout a pokračovat přijímáte "];
                            },
                        },
                        {
                            key: "f43d68d7",
                            get: function () {
                                return ["Znovu zkontrolujte a potvrďte cenu svého předplatného. ", "."];
                            },
                        },
                        {
                            key: "h406634b",
                            get: function () {
                                return ["Potvrdili jsme váš účet Stripe. Předplatná na vašem účtu budou brzy spuštěna. Jakmile budou aktivní, zašleme vám oznámení. Můžete také navštívit svůj profil a zjistit, zda jsou předplatná povolena."];
                            },
                        },
                        {
                            key: "d4b0b963",
                            get: function () {
                                return ["Klepnutím níže přijímáte ", "."];
                            },
                        },
                        {
                            key: "j2d920f7",
                            get: function () {
                                return ["Výběrem možnosti „Přidat se a ověřit ID“ potvrzujete svůj souhlas s ", "."];
                            },
                        },
                        {
                            key: "fde94f97",
                            get: function () {
                                return ["Výběrem možnosti „Přidat se a ověřit ID“ potvrzujete svůj souhlas s ", "."];
                            },
                        },
                        {
                            key: "afbd47cb",
                            get: function () {
                                return ["Získejte finanční odměnu za reklamy zobrazované v odpovědích na vaše příspěvky. Zapojení do program příjmů z reklam vyžaduje, aby váš účet dodržoval ", ", ", "."];
                            },
                        },
                        {
                            key: "ce6f73c7",
                            get: function () {
                                return ["Mějte prostřednictvím ", " kontrolu nad tím, jak platforma X přizpůsobuje vaše uživatelské prostředí."];
                            },
                        },
                        {
                            key: "j31f2f97",
                            get: function () {
                                return ["Ano, všechny automatizované účty musí být označené štítkem. Vyžadují to naše ", "."];
                            },
                        },
                        {
                            key: "ed8f77d3",
                            get: function () {
                                return ["Další informace najdete na stránce s ", "."];
                            },
                        },
                        {
                            key: "dd040d67",
                            get: function () {
                                return ["Další informace najdete na stránce ", "."];
                            },
                        },
                        {
                            key: "if2bb997",
                            get: function () {
                                return ["Je nám líto, že odcházíte. #Sbohem"];
                            },
                        },
                        {
                            key: "i1e24825",
                            get: function () {
                                return ["Pokud jste neposkytli datum narození, váš věk odhadneme na základě vašeho profilu a aktivity na platformě X. Informace o věku se používají k personalizaci vašeho uživatelského zážitku. "];
                            },
                        },
                        {
                            key: "a200fc71",
                            get: function () {
                                return ["Chyba? Na svůj ", " můžete přidat datum narození, aniž byste ho sdíleli veřejně."];
                            },
                        },
                        {
                            key: "a97ef88f",
                            get: function () {
                                return ["Okruhy uživatelů na míru jsou často vytvářeny ze seznamu e-mailových adres nebo historie procházení a chování na webu. Inzerentům pomáhají oslovit potenciální zákazníky nebo lidi, kteří už projevili zájem o jejich výrobky, produkty nebo služby. "];
                            },
                        },
                        {
                            key: "f451c521",
                            get: function () {
                                return ["Aktuálně jste členem", "", "."];
                            },
                        },
                        {
                            key: "f27cc8af",
                            get: function () {
                                return ["Pokud chcete tuto funkci zapnout, přejděte do nastavení ", " a zapněte funkci „Personalizace na základě odvozené identity“."];
                            },
                        },
                        {
                            key: "h0085c59",
                            get: function () {
                                return ["Pokud chcete tuto funkci zapnout, přejděte do nastavení ", " a zapněte funkci „Personalizace na základě odvozené identity“."];
                            },
                        },
                        {
                            key: "b78e30fd",
                            get: function () {
                                return ["Tyto informace můžete odebrat deaktivací možnosti „Personalizace na základě odvozené identity“ v rámci nastavení ", "."];
                            },
                        },
                        {
                            key: "bb593021",
                            get: function () {
                                return ["Tyto informace můžete odebrat deaktivací možnosti „Personalizace na základě odvozené identity“ v rámci nastavení ", "."];
                            },
                        },
                        {
                            key: "h60f45ef",
                            get: function () {
                                return ["Toto jsou odvozené hashe e-mailových adres, které mají společné komponenty s e-mailovou adresou, kterou jste poskytli platformě X. Tyto informace můžete odebrat deaktivací možnosti „Personalizace na základě odvozené identity“ v rámci nastavení ", "."];
                            },
                        },
                        {
                            key: "cbcb2413",
                            get: function () {
                                return ["Tato zařízení platforma X používá k měření a zlepšování uživatelské přívětivosti v tomto prohlížeči. "];
                            },
                        },
                        {
                            key: "e21b623d",
                            get: function () {
                                return ["S vaším účtem jsou spojeny tyto prohlížeče a zařízení. "];
                            },
                        },
                        {
                            key: "i4d58f43",
                            get: function () {
                                return ["Tyto prohlížeče, zařízení a informace používá platforma X ke zlepšování uživatelského prostředí. Zahrnují zařízení a prohlížeče, které jste k přihlášení do platformy X nikdy nepoužili, a e-mailové adresy a telefonní čísla, jako jsou ty, které máte propojené s účtem na platformě X. "];
                            },
                        },
                        {
                            key: "a1fdeb45",
                            get: function () {
                                return ["Přejděte do ", " a funkci zapněte."];
                            },
                        },
                        {
                            key: "hcb3ad67",
                            get: function () {
                                return ["Pokud u některé aplikace zjistíte podezřelou aktivitu, otevřete ", " a zrušte tam její přístup. V některých případech se poloha IP adresy může lišit od vaší fyzické adresy. "];
                            },
                        },
                        {
                            key: "adc26d49",
                            get: function () {
                                return ["Partneři platformy X vytvářejí okruhy uživatelů na základě rozhodnutí o koupi, životního stylu a dalšího chování na síti i mimo ni. "];
                            },
                        },
                        {
                            key: "efc1de65",
                            get: function () {
                                return ["Něco se pokazilo a vaše údaje na platformě X se nepodařilo odeslat. Požádejte o údaje znovu ", "."];
                            },
                        },
                        {
                            key: "f0e84609",
                            get: function () {
                                return ["Před "];
                            },
                        },
                        {
                            key: "b76d6eb7",
                            get: function () {
                                return ["Zobrazit lze pouze prvních tisíc hostů. Poslouchat můžou i lidé, kteří poslouchají anonymně, nebo ti, kteří nejsou přihlášení k platformě X. "];
                            },
                        },
                        {
                            key: "idcd199b",
                            get: function () {
                                return [this.props.minutes + " m " + this.props.seconds + " s"];
                            },
                        },
                        {
                            key: "ee530bbf",
                            get: function () {
                                return [this.props.hours + " h " + this.props.minutes + " m"];
                            },
                        },
                        {
                            key: "bff29c95",
                            get: function () {
                                return ["Uživatel ", " změnil fotku skupiny."];
                            },
                        },
                        {
                            key: "b16e4d45",
                            get: function () {
                                return ["Změnili jste název skupiny na ", "."];
                            },
                        },
                        {
                            key: "c5760699",
                            get: function () {
                                return ["Uživatel ", " změnil název skupiny na ", "."];
                            },
                        },
                        {
                            key: "a72730a1",
                            get: function () {
                                return ["Název skupiny se změnil na ", "."];
                            },
                        },
                        {
                            key: "a4bc88c3",
                            get: function () {
                                return ["Uživatel ", " přidal účastníky: ", "."];
                            },
                        },
                        {
                            key: "bfdff0c3",
                            get: function () {
                                return ["Bylo přidáno několik účastníků (", ")"];
                            },
                        },
                        {
                            key: "fc10875f",
                            get: function () {
                                return ["Odešel: "];
                            },
                        },
                        {
                            key: "fa95b019",
                            get: function () {
                                return ["Uživatel ", " vás přidal."];
                            },
                        },
                        {
                            key: "e3534477",
                            get: function () {
                                return ["Počet uživatelů v této skupině: "];
                            },
                        },
                        {
                            key: "b6656851",
                            get: function () {
                                return ["V této skupině j" + n(this.props.count, "sou", "e", "e", "e") + " " + this.props.count + " další" + n(this.props.count, " lidé", "ch lidí", " osoba", "ch lidí")];
                            },
                        },
                        {
                            key: "d6db6323",
                            get: function () {
                                return ["Tento post může obsahovat citlivý obsah. "];
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
                                return ["Zprávy jsou zašifrovány. "];
                            },
                        },
                        {
                            key: "af0bb3eb",
                            get: function () {
                                return ["Této osobě nemůžete posílat šifrované soukromé zprávy. "];
                            },
                        },
                        {
                            key: "b9f61623",
                            get: function () {
                                return ["Této osobě už nemůžete posílat zprávy. "];
                            },
                        },
                        {
                            key: "h27b1291",
                            get: function () {
                                return ["K této šifrované konverzaci se ze svého aktuálního zařízení nedostanete. Chcete-li se k ní dostat, přihlaste se ze svého předchozího zařízení. "];
                            },
                        },
                        {
                            key: "bcabe3f5",
                            get: function () {
                                return ["Této skupině nemůžete poslat zprávu, protože nejste ověřeni. "];
                            },
                        },
                        {
                            key: "jdef4bc7",
                            get: function () {
                                return ["Tomuto uživateli nemůžete poslat zprávu, protože nejste ověřeni. "];
                            },
                        },
                        {
                            key: "i005f1fd",
                            get: function () {
                                return ["Odpověděli jste na Fleet uživatele ", ": "];
                            },
                        },
                        {
                            key: "b35cee41",
                            get: function () {
                                return ["Někdo odpověděl na vaše zamyšlení Fleet: "];
                            },
                        },
                        {
                            key: "dc4b75a1",
                            get: function () {
                                return ["Uživatel ", " poslal GIF"];
                            },
                        },
                        {
                            key: "hcbbbb35",
                            get: function () {
                                return ["Uživatel ", " poslal odkaz."];
                            },
                        },
                        {
                            key: "c1e1f849",
                            get: function () {
                                return ["Uživatel ", " poslal fotku."];
                            },
                        },
                        {
                            key: "c7e2464f",
                            get: function () {
                                return ["Uživatel ", " poslal nálepku."];
                            },
                        },
                        {
                            key: "eee2f121",
                            get: function () {
                                return ["Uživatel ", " poslal video."];
                            },
                        },
                        {
                            key: "be5a9617",
                            get: function () {
                                return ["Uživatel ", " odeslal hlasovou zprávu"];
                            },
                        },
                        {
                            key: "e802e257",
                            get: function () {
                                return ["Uživatel ", " sdílí post"];
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
                                return ["Zareagovali jste na video uživatele @", " pomocí emoji "];
                            },
                        },
                        {
                            key: "d764af97",
                            get: function () {
                                return ["Uživatel ", " zareagoval na video uživatele @", " pomocí emoji "];
                            },
                        },
                        {
                            key: "ab1cdfe3",
                            get: function () {
                                return ["Zareagovali jste na video pomocí emoji "];
                            },
                        },
                        {
                            key: "f0cf1699",
                            get: function () {
                                return ["Uživatel ", " zareagoval na video pomocí emoji "];
                            },
                        },
                        {
                            key: "hec0fd4d",
                            get: function () {
                                return ["Zareagovali jste na fotku uživatele @", " pomocí emoji "];
                            },
                        },
                        {
                            key: "j55320df",
                            get: function () {
                                return ["Uživatel ", " zareagoval na fotku uživatele @", " pomocí emoji "];
                            },
                        },
                        {
                            key: "jf27606b",
                            get: function () {
                                return ["Zareagovali jste na fotku pomocí emoji "];
                            },
                        },
                        {
                            key: "cd110359",
                            get: function () {
                                return ["Uživatel ", " zareagoval na fotku pomocí emoji "];
                            },
                        },
                        {
                            key: "e70dcc35",
                            get: function () {
                                return ["Zareagovali jste na GIF uživatele @", " pomocí emoji "];
                            },
                        },
                        {
                            key: "g1bf440b",
                            get: function () {
                                return ["Uživatel ", " zareagoval na GIF uživatele @", " pomocí emoji "];
                            },
                        },
                        {
                            key: "b2da1bf9",
                            get: function () {
                                return ["Zareagovali jste na GIF pomocí emoji "];
                            },
                        },
                        {
                            key: "g84c0421",
                            get: function () {
                                return ["Uživatel ", " zareagoval na GIF pomocí emoji "];
                            },
                        },
                        {
                            key: "hc1bd66d",
                            get: function () {
                                return ["Zareagovali jste na post uživatele @", " takto: "];
                            },
                        },
                        {
                            key: "bd3edf13",
                            get: function () {
                                return ["Uživatel ", " reaguje na post uživatele ", " takto: "];
                            },
                        },
                        {
                            key: "df2dc76f",
                            get: function () {
                                return ["Zareagovali jste na post takto: "];
                            },
                        },
                        {
                            key: "aba18aef",
                            get: function () {
                                return ["Uživatel ", " reaguje na post takto: ", " "];
                            },
                        },
                        {
                            key: "cd2e7c19",
                            get: function () {
                                return ["Zareagovali jste na odkaz uživatele @", " pomocí emoji "];
                            },
                        },
                        {
                            key: "aee9e7fb",
                            get: function () {
                                return ["Uživatel ", " zareagoval na odkaz uživatele @", " pomocí emoji "];
                            },
                        },
                        {
                            key: "f9fb1cf7",
                            get: function () {
                                return ["Zareagovali jste na odkaz pomocí emoji "];
                            },
                        },
                        {
                            key: "f2bf910f",
                            get: function () {
                                return ["Uživatel ", " zareagoval na odkaz pomocí emoji "];
                            },
                        },
                        {
                            key: "i6cec545",
                            get: function () {
                                return ["Zareagovali jste na zprávu uživatele @", " pomocí emoji ", ": "];
                            },
                        },
                        {
                            key: "d6998bab",
                            get: function () {
                                return ["Uživatel ", " zareagoval na zprávu uživatele @", " pomocí emoji ", ": "];
                            },
                        },
                        {
                            key: "cec676f3",
                            get: function () {
                                return ["Zareagovali jste pomocí emoji ", ": "];
                            },
                        },
                        {
                            key: "a2706f9b",
                            get: function () {
                                return ["Uživatel ", " zareagoval pomocí emoji ", ": "];
                            },
                        },
                        {
                            key: "ff973a65",
                            get: function () {
                                return ["Zareagovali jste na hlasovou zprávu od uživatele @", " pomocí emoji "];
                            },
                        },
                        {
                            key: "ec2cede5",
                            get: function () {
                                return ["Uživatel ", " zareagoval na hlasovou zprávu od uživatele @", " pomocí emoji "];
                            },
                        },
                        {
                            key: "i1d08199",
                            get: function () {
                                return ["Zareagovali jste na hlasovou zprávu pomocí "];
                            },
                        },
                        {
                            key: "d424b45f",
                            get: function () {
                                return ["Uživatel ", " zareagoval na hlasovou zprávu pomocí "];
                            },
                        },
                        {
                            key: "d6b15bbf",
                            get: function () {
                                return ["Zareagovali jste pomocí emoji "];
                            },
                        },
                        {
                            key: "ac0d4bc7",
                            get: function () {
                                return ["Uživatel ", " zareagoval pomocí emoji "];
                            },
                        },
                        {
                            key: "fa4f5b49",
                            get: function () {
                                return ["Systémy platformy X kontrolují, jestli ve sdílených odkazech a médiích není spam nebo škodlivý či zakázaný obsah. Analyzujeme také vzory využití s cílem detekovat podezřelé chování a vylepšit vaše možnosti. Můžeme rovněž přistoupit k manuální kontrole soukromých zpráv, abychom prověřili nahlášená porušení pravidel a zneužití naší služby, případně na základě zákonných nebo vládních požadavků. Další podrobnosti najdete v našich ", "."];
                            },
                        },
                        {
                            key: "a66142ad",
                            get: function () {
                                return ["Tady najdete žádosti o soukromou konverzaci od lidí, které nesledujete. Pokud budete chtít na jejich zprávy odpovědět, budete napřed muset přijmout příslušnou žádost. "];
                            },
                        },
                        {
                            key: "hc37d3bb",
                            get: function () {
                                return ["Po zahájení ověřování může Google shromáždit určité informace o vás, vašem zařízení a prohlížeči a použít je. Přečtěte si ", " Googlu."];
                            },
                        },
                        {
                            key: "eea0a14f",
                            get: function () {
                                return [this.props.formattedCount + " Lajk" + n(this.props.count, "y", "ů", "", "ů")];
                            },
                        },
                        {
                            key: "cca42d0b",
                            get: function () {
                                return [this.props.formattedCount + " fotografie a videa"];
                            },
                        },
                        {
                            key: "a0a3adf7",
                            get: function () {
                                return [this.props.formattedCount + " post" + n(this.props.count, "y", "y", "", "y")];
                            },
                        },
                        {
                            key: "e6264621",
                            get: function () {
                                return ["Uživatele @" + this.props.screenName + " nemůžete sledovat ani zobrazit jeho posty. "];
                            },
                        },
                        {
                            key: "f98ecc47",
                            get: function () {
                                return ["Opravdu chcete tyto posty zobrazit? Zobrazením postů uživatele @" + this.props.screenName + " neodblokujete. "];
                            },
                        },
                        {
                            key: "i8197603",
                            get: function () {
                                return ["Pokud chcete nahlásit problém s duševním vlastnictvím, navštivte prosím ", ". Jestliže chcete nahlásit jakýkoli jiný problém s tímto produktem, přejděte do aplikace pro iOS nebo Android."];
                            },
                        },
                        {
                            key: "a21f2f79",
                            get: function () {
                                return ["Další informace o porušeních pravidel ohledně produktů získáte ", "."];
                            },
                        },
                        {
                            key: "ff60a139",
                            get: function () {
                                return ["Počet: "];
                            },
                        },
                        {
                            key: "f575f533",
                            get: function () {
                                return ["Kategorie si vybírá každý sám a platforma X je nepřiřazuje, neověřuje ani neschvaluje. "];
                            },
                        },
                        {
                            key: "cebed305",
                            get: function () {
                                return ["Tento účet je přidružen k ", "."];
                            },
                        },
                        {
                            key: "i1824ce3",
                            get: function () {
                                return ["Posty uživatele @" + this.props.screenName + " mohou vidět pouze schválení sledující. Pro získání přístupu klikněte na tlačítko Sledovat. "];
                            },
                        },
                        {
                            key: "da9d52d7",
                            get: function () {
                                return ["Platforma X pozastavuje účty, které porušují její ", "."];
                            },
                        },
                        {
                            key: "b028aec5",
                            get: function () {
                                return ["Potřebujeme vědět, zda je účet ", " na platformě X skutečně váš. Pokud není, e-mailovou adresu ", " z něj odebereme."];
                            },
                        },
                        {
                            key: "c43645ad",
                            get: function () {
                                return ["Pokud je účet X ", " váš a vy jen chcete zrušit zasílání dalších e-mailových oznámení, přejděte do ", "."];
                            },
                        },
                        {
                            key: "b8e3884f",
                            get: function () {
                                return ["Vaši e-mailovou adresu ", " jsme z účtu X ", " odebrali. Odteď nebudete dostávat oznámení platformy X související s daným účtem."];
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
                                return ["Někdo mohl při registraci svého účtu na platformě X neúmyslně zadat vaši e-mailovou adresu. Nebo ji může používat k nekalému účelu. Když nám takový účet nahlásíte, pomůžete nám identifikovat a odstranit z platformy X spam. "];
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
                                return ["Zkuste sledovat ", ", abyste funkci Populární články využili naplno."];
                            },
                        },
                        {
                            key: "dc3a6d2d",
                            get: function () {
                                return ["Začali jste sledovat uživatele @" + this.props.screenName + ". ", "."];
                            },
                        },
                        {
                            key: "j5668d8f",
                            get: function () {
                                return ["Když budete poslouchat anonymně, nebudete viditelní nebo se nebudete moci zúčastnit. "];
                            },
                        },
                        {
                            key: "fafd5f6f",
                            get: function () {
                                return ["Jednou z výhod odběratele je exkluzivní přístup do prostorů, jako je tento. Pouze odběratelé @" + this.props.screenName + " mohou mít přístup do tohoto prostoru. ", "."];
                            },
                        },
                        {
                            key: "b1e1d521",
                            get: function () {
                                return ["Pokud chcete psát poznámky, dosáhněte zvýšení dopadu svých hodnocení z aktuální hodnoty " + this.props.currentImpact + " na hodnotu " + this.props.ratingImpactToEarnIn + "."];
                            },
                        },
                        {
                            key: "e3a1e2a3",
                            get: function () {
                                return ["O odkazu v tomto postu (", ") a měla by se objevit u všech postů, které tento odkaz obsahují"];
                            },
                        },
                        {
                            key: "eb0960b9",
                            get: function () {
                                return ["Jste si jisti, že tato poznámka bude užitečná u ", " s tímto obrázkem, i když tyto posty říkají různé věci?"];
                            },
                        },
                        {
                            key: "c14fcfe5",
                            get: function () {
                                return ["Jste si jisti, že tato poznámka bude užitečná u všech postů s tímto obrázkem, i když tyto posty říkají různé věci?"];
                            },
                        },
                        {
                            key: "f8d04b49",
                            get: function () {
                                return ["Jste si jisti, že tato poznámka bude užitečná u ", " s tímto videem, i když tyto posty říkají různé věci?"];
                            },
                        },
                        {
                            key: "ef94efc3",
                            get: function () {
                                return ["Jste si jisti, že tato poznámka bude užitečná u všech postů s tímto videem, i když tyto posty říkají různé věci?"];
                            },
                        },
                        {
                            key: "a89cdd31",
                            get: function () {
                                return ["Jste si jisti, že tato poznámka bude užitečná u ", " s tímto médiem, i když tyto posty říkají různé věci?"];
                            },
                        },
                        {
                            key: "f19fb541",
                            get: function () {
                                return ["Jste si jisti, že tato poznámka bude užitečná u všech postů s tímto médiem, i když tyto posty říkají různé věci?"];
                            },
                        },
                        {
                            key: "i9e31fe5",
                            get: function () {
                                return ["Další informace o "];
                            },
                        },
                        {
                            key: "h14bda75",
                            get: function () {
                                return ["Žádosti jsou v zájmu transparentnosti anonymizovány a ", "."];
                            },
                        },
                        {
                            key: "c43ef159",
                            get: function () {
                                return ["Pokud chcete pomoci s psaním a hodnocením komunitních poznámek, "];
                            },
                        },
                        {
                            key: "c815dfaf",
                            get: function () {
                                return ["Aby byla kvalita žádostí vysoká a zabránilo se spamu, musí mít účty ověřené telefonní číslo, aby bylo možné požádat o komunitní poznámku. "];
                            },
                        },
                        {
                            key: "bd9cf141",
                            get: function () {
                                return ["Jako autor postu můžete "];
                            },
                        },
                        {
                            key: "e837f62f",
                            get: function () {
                                return [this.props.impactDisplayNumber + " Dopad hodnocení"];
                            },
                        },
                        {
                            key: "f2bad803",
                            get: function () {
                                return [this.props.impactDisplayNumber + " Dopad psaní"];
                            },
                        },
                        {
                            key: "g062ed0f",
                            get: function () {
                                return ["Poznámka původně přidána k obrázku u postu, který byl mezitím odstraněn, a může se zobrazit u dalších postů, které obsahují tento obrázek"];
                            },
                        },
                        {
                            key: "j4f06e2f",
                            get: function () {
                                return ["Poznámka byla původně přidána k obrázku u ", " a mohla by se zobrazit u jiných postů, které tento obrázek obsahují."];
                            },
                        },
                        {
                            key: "ida22561",
                            get: function () {
                                return ["Poznámka původně přidána k videu u postu, který byl mezitím odstraněn, a může se zobrazovat u  dalších postů, které obsahují toto video"];
                            },
                        },
                        {
                            key: "g68aa88d",
                            get: function () {
                                return ["Poznámka byla původně přidána k videu u ", " a mohla by se zobrazit u  jiných postů, které toto video obsahují."];
                            },
                        },
                        {
                            key: "ia62f949",
                            get: function () {
                                return ["Poznámka původně přidána k médiu u postu, který byl mezitím odstraněn, a může se zobrazit u dalších postů, které obsahují tato média"];
                            },
                        },
                        {
                            key: "c6eb7cbb",
                            get: function () {
                                return ["Poznámka byla původně přidána k médiu u ", " a mohla by se zobrazit u jiných postů, které toto médium obsahují."];
                            },
                        },
                        {
                            key: "f9b81033",
                            get: function () {
                                return ["Poznámka původně napsaná u postu, který byl mezitím odstraněn, a může se zobrazit u jiných postů, které obsahují odkaz na "];
                            },
                        },
                        {
                            key: "de254823",
                            get: function () {
                                return ["Poznámka původně k ", ", mohla by být zobrazena u postů, které obsahují odkaz na "];
                            },
                        },
                        {
                            key: "de5532bd",
                            get: function () {
                                return ["Může být zobrazen u  ", ", které obsahují toto video, pokud lidé souhlasí, že by to tak mělo být."];
                            },
                        },
                        {
                            key: "ib6805bd",
                            get: function () {
                                return ["Může být zobrazen u postů, které obsahují toto video, pokud lidé souhlasí, že by to tak mělo být."];
                            },
                        },
                        {
                            key: "g185d44d",
                            get: function () {
                                return ["Může být zobrazen u  ", ", které obsahují tento obrázek, pokud lidé souhlasí, že by to tak mělo být."];
                            },
                        },
                        {
                            key: "aeebdd99",
                            get: function () {
                                return ["Může být zobrazen u postů, které obsahují tento obrázek, pokud lidé souhlasí, že by to tak mělo být."];
                            },
                        },
                        {
                            key: "d54bfbd9",
                            get: function () {
                                return ["Může být zobrazen u  ", ", které obsahují tato média, pokud lidé souhlasí, že by to tak mělo být."];
                            },
                        },
                        {
                            key: "a9efbf0f",
                            get: function () {
                                return ["Může být zobrazen u postů, které obsahují tato média, pokud lidé souhlasí, že by to tak mělo být."];
                            },
                        },
                        {
                            key: "jef71e81",
                            get: function () {
                                return ["Poznámka byla původně přidána k videu u postu, který byl mezitím odstraněn, a zobrazuje se u ", ", které obsahují toto video"];
                            },
                        },
                        {
                            key: "ie594609",
                            get: function () {
                                return ["Poznámka byla původně přidána k videu u ", " a zobrazuje se u ", ", které toto video obsahují"];
                            },
                        },
                        {
                            key: "a48e0b6b",
                            get: function () {
                                return ["Poznámka byla původně přidána k videu u postu, který byl mezitím odstraněn, a může se zobrazovat u ", ", které obsahují toto video"];
                            },
                        },
                        {
                            key: "a0e626a3",
                            get: function () {
                                return ["Poznámka byla původně přidána k videu u ", " a mohla by se zobrazit u ", ", které toto video obsahuje"];
                            },
                        },
                        {
                            key: "fcd2eeeb",
                            get: function () {
                                return ["Poznámka původně přidána k obrázku u postu, který byl mezitím odstraněn, a zobrazuje se u ", ", které obsahují tento obrázek"];
                            },
                        },
                        {
                            key: "j300ac63",
                            get: function () {
                                return ["Poznámka byla původně přidána k obrázku u ", "a zobrazuje se u ", ", které tento obrázek obsahují"];
                            },
                        },
                        {
                            key: "bf532f23",
                            get: function () {
                                return ["Poznámka původně přidána k obrázku u postu, který byl mezitím odstraněn, a může se zobrazovat u ", ", které obsahují tento obrázek"];
                            },
                        },
                        {
                            key: "bda86c55",
                            get: function () {
                                return ["Poznámka byla původně přidána k obrázku u ", " a mohla by se zobrazit u ", ", které tento obrázek obsahují"];
                            },
                        },
                        {
                            key: "a13701bd",
                            get: function () {
                                return ["Poznámka původně přidána k médiu u postu, který byl mezitím odstraněn, a zobrazuje se u ", ", které obsahují tato média"];
                            },
                        },
                        {
                            key: "e2a0a791",
                            get: function () {
                                return ["Poznámka byla původně přidána k médiu u ", " a zobrazuje se u ", ", které toto médium obsahují"];
                            },
                        },
                        {
                            key: "b8e4bb0b",
                            get: function () {
                                return ["Poznámka původně přidána k médiu u postu, který byl mezitím odstraněn, a může se zobrazit u ", ", které obsahují tato média"];
                            },
                        },
                        {
                            key: "hada7e59",
                            get: function () {
                                return ["Poznámka byla původně přidána k médiu u ", " a mohla by se zobrazit u ", ", které toto médium obsahují"];
                            },
                        },
                        {
                            key: "e8969de9",
                            get: function () {
                                return ["Zobrazena u ", ", které obsahují odkaz na "];
                            },
                        },
                        {
                            key: "a389fb7b",
                            get: function () {
                                return ["Mohla by být zobrazena u ", ", které obsahují odkaz na "];
                            },
                        },
                        {
                            key: "gd8d8205",
                            get: function () {
                                return ["Poznámka původně u postu, který byl mezitím odstraněn. Zobrazuje se u ", ", které obsahují odkaz na "];
                            },
                        },
                        {
                            key: "i981a661",
                            get: function () {
                                return ["Poznámka původně k ", ". Zobrazuje se u ", ", které obsahují odkaz na "];
                            },
                        },
                        {
                            key: "jceb2edb",
                            get: function () {
                                return ["Poznámka původně u postu, který byl mezitím odstraněn. Může se zobrazovat u ", ", které obsahují odkaz na "];
                            },
                        },
                        {
                            key: "f20a22a1",
                            get: function () {
                                return ["Poznámka původně k ", ". Mohla by být zobrazena u ", ", které obsahují odkaz na "];
                            },
                        },
                        {
                            key: "f43e2fdf",
                            get: function () {
                                return ["Zobrazeno malé experimentální skupině na platformě X · " + this.props.impressionTruncated + "+ zobrazení"];
                            },
                        },
                        {
                            key: "j72bc9ab",
                            get: function () {
                                return ["Zobrazeno malé experimentální skupině na platformě X"];
                            },
                        },
                        {
                            key: "d60e4375",
                            get: function () {
                                return ["Zobrazeno na platformě X · " + this.props.impressionTruncated + "+ zobrazení"];
                            },
                        },
                        {
                            key: "bf62daf1",
                            get: function () {
                                return ["Na platformě X se zobrazuje"];
                            },
                        },
                        {
                            key: "i8fa1313",
                            get: function () {
                                return ["Hodnocení jsou anonymizována a veřejně zpřístupňována v zájmu transparentnosti. Zjistěte, jak jsou v programu Komunitní poznámky ", "."];
                            },
                        },
                        {
                            key: "had203a9",
                            get: function () {
                                return ["Ohodnotili jste tuto poznámku jako ", "."];
                            },
                        },
                        {
                            key: "h42a21df",
                            get: function () {
                                return ["Ohodnotili jste tuto poznámku jako ", "."];
                            },
                        },
                        {
                            key: "c3d1a1b1",
                            get: function () {
                                return ["Ohodnotili jste tuto poznámku jako ", "."];
                            },
                        },
                        {
                            key: "c7f250eb",
                            get: function () {
                                return ["Měla by tato poznámka být zobrazena u ", ", které obsahují odkaz na ", "?"];
                            },
                        },
                        {
                            key: "bc2fde51",
                            get: function () {
                                return ["Měla by tato poznámka být zobrazena u ", ", které obsahují stejné video?"];
                            },
                        },
                        {
                            key: "e80d1f67",
                            get: function () {
                                return ["Měla by tato poznámka být zobrazena u ", ", které obsahují stejný obrázek?"];
                            },
                        },
                        {
                            key: "c692f6b5",
                            get: function () {
                                return ["Měla by tato poznámka být zobrazena u ", ", které obsahují stejná média?"];
                            },
                        },
                        {
                            key: "g46e2949",
                            get: function () {
                                return ["Měla by se tato poznámka zobrazit u všech postů, které obsahují odkaz na ", "?"];
                            },
                        },
                        {
                            key: "c57661e9",
                            get: function () {
                                return ["Měla by se tato poznámka zobrazit u všech postů, které obsahují stejné video?"];
                            },
                        },
                        {
                            key: "bb286921",
                            get: function () {
                                return ["Měla by se tato poznámka zobrazit u všech postů, které obsahují stejný obrázek?"];
                            },
                        },
                        {
                            key: "df397f55",
                            get: function () {
                                return ["Měla by se tato poznámka zobrazit u všech postů, které obsahují stejná média?"];
                            },
                        },
                        {
                            key: "b936a16b",
                            get: function () {
                                return ["Máte nápady nebo návrhy, jak Komunitní poznámky vylepšit? ", "."];
                            },
                        },
                        {
                            key: "e77dac87",
                            get: function () {
                                return ["Zobrazit dalších " + this.props.remainingCount + " post" + n(this.props.remainingCount, "y", "y", "", "y") + " citovaných žadateli"];
                            },
                        },
                        {
                            key: "if0d6dd7",
                            get: function () {
                                return ["Přispěvatelé v programu Komunitní poznámky používají aliasy · "];
                            },
                        },
                        {
                            key: "f49cbf83",
                            get: function () {
                                return ["Tato funkce je v programu Komunitní poznámky novinkou, proto neváhejte a "];
                            },
                        },
                        {
                            key: "a94c6db7",
                            get: function () {
                                return ["Zvyšte dopad svých hodnocení z aktuální hodnoty " + this.props.currentRatingImpact + " na hodnotu " + this.props.requiredRatingImpact + "."];
                            },
                        },
                        {
                            key: "f52f0cbd",
                            get: function () {
                                return ["Počet smazaných poznámek: " + this.props.num];
                            },
                        },
                        {
                            key: "ccdfbd75",
                            get: function () {
                                return ["Abyste mohli znovu psát, potřebujete dosáhnout zvýšení této hodnoty na " + this.props.requiredRatingImpact];
                            },
                        },
                        {
                            key: "a32c38ad",
                            get: function () {
                                return ["Chcete začít psát poznámky? Dosáhněte zvýšení svého dopadu hodnocení na hodnotu " + this.props.requiredRatingImpact + " nebo vyšší."];
                            },
                        },
                        {
                            key: "d458f69d",
                            get: function () {
                                return ["V programu Komunitní poznámky se zachovává stav smazaných poznámek, aby bylo možné přesně přiřadit reputaci autorovi poznámky a hodnotitelům. "];
                            },
                        },
                        {
                            key: "i42495ad",
                            get: function () {
                                return ["Kontext píší lidé, kteří používají platformu X, a objeví se, když ho ostatní lidé ohodnotí jako užitečný. "];
                            },
                        },
                        {
                            key: "c475a5d3",
                            get: function () {
                                return ["Pro vaše použití datových sad platí ", ". Kliknutím na ikonu pro stažení s nimi vyjadřujete souhlas."];
                            },
                        },
                        {
                            key: "g19fcc5b",
                            get: function () {
                                return ["Soubor č. " + this.props.fileIndex + " z " + this.props.totalFiles];
                            },
                        },
                        {
                            key: "e7e44bab",
                            get: function () {
                                return ["Zkuste hledat něco jiného, nebo si v ", " zkontrolujte, jestli nemáte zapnutou ochranu před potenciálně choulostivým obsahem."];
                            },
                        },
                        {
                            key: "b3a3ce8d",
                            get: function () {
                                return ["Aktivní před "];
                            },
                        },
                        {
                            key: "d46c6e8f",
                            get: function () {
                                return ["Opravdu chcete, aby se uživatel ", " stal moderátorem?"];
                            },
                        },
                        {
                            key: "c3a1f2bf",
                            get: function () {
                                return ["Opravdu chcete odebrat uživatele ", " z týmu moderátorů?"];
                            },
                        },
                        {
                            key: "c2696cdf",
                            get: function () {
                                return ["Pokračujte zadáním názvu "];
                            },
                        },
                        {
                            key: "b160df39",
                            get: function () {
                                return ["", " skryl post"];
                            },
                        },
                        {
                            key: "h1513297",
                            get: function () {
                                return ["", " připnul post"];
                            },
                        },
                        {
                            key: "e523e9f1",
                            get: function () {
                                return ["", " zrušil připnutí postu"];
                            },
                        },
                        {
                            key: "g93119e7",
                            get: function () {
                                return ["", " zrušil skrytí postu"];
                            },
                        },
                        {
                            key: "c6e18a45",
                            get: function () {
                                return ["", " odebral člena"];
                            },
                        },
                        {
                            key: "ef3b57ef",
                            get: function () {
                                return ["", " obnovil člena"];
                            },
                        },
                        {
                            key: "e7878d67",
                            get: function () {
                                return ["", " se připojil k této komunitě"];
                            },
                        },
                        {
                            key: "hd2489bb",
                            get: function () {
                                return ["", " opustil tuto komunitu"];
                            },
                        },
                        {
                            key: "b4aa9d7b",
                            get: function () {
                                return ["", " schválil žádost člena"];
                            },
                        },
                        {
                            key: "c5900395",
                            get: function () {
                                return ["", " zamítl žádost člena"];
                            },
                        },
                        {
                            key: "g561eb89",
                            get: function () {
                                return ["", " znovu schválil žádost člena"];
                            },
                        },
                        {
                            key: "j5602f3b",
                            get: function () {
                                return ["Nahlásil/a ", " a "];
                            },
                        },
                        {
                            key: "dd132edd",
                            get: function () {
                                return ["Nahlásil/a "];
                            },
                        },
                        {
                            key: "je0779b7",
                            get: function () {
                                return ["Nahlášeno: "];
                            },
                        },
                        {
                            key: "a0071f71",
                            get: function () {
                                return ["Skryli jste post uživatele @"];
                            },
                        },
                        {
                            key: "c4ec9d43",
                            get: function () {
                                return ["Post uživatele @", " jste ponechali"];
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
                                return ["Vytvořeno " + this.props.date + " uživatelem "];
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
                                return ["Pokud chcete použít tuto funkci, přepněte na účet, který vlastníte.\n\nJako přispěvatel můžete posílat Soukromé zprávy, publikovat posty a vytvářet Seznamy – a také si je prohlížet.\n\nFunkci Delegování se snažíme neustále vylepšovat. Budeme rádi, když nám", "."];
                            },
                        },
                        {
                            key: "g29b68f9",
                            get: function () {
                                return ["Pokud chcete použít tuto funkci, přepněte na účet, který vlastníte.\n\nJako správce můžete posílat Soukromé zprávy, publikovat posty nebo vytvářet Seznamy a také si je prohlížet. Dále můžete zvát přispěvatele na účet nebo je odebírat a zobrazovat si analýzu postů.\n\nFunkci Delegování se snažíme neustále vylepšovat. Budeme rádi, když nám", "."];
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
                                return ["", ", abyste viděli další informace o této pracovní pozici"];
                            },
                        },
                        {
                            key: "ie9320f7",
                            get: function () {
                                return ["Začněte sledovat pracovní pozice ", " ", " na své časové ose"];
                            },
                        },
                        {
                            key: "c70aad4b",
                            get: function () {
                                return ["Zobrazení pracovních pozic ", " "];
                            },
                        },
                        {
                            key: "cc70dc63",
                            get: function () {
                                return ["Zobrazením postů nedojde k odblokování uživatele @" + this.props.screenName + ". "];
                            },
                        },
                        {
                            key: "d6c6deaf",
                            get: function () {
                                return ["Předobjednat za "];
                            },
                        },
                        {
                            key: "gbef9649",
                            get: function () {
                                return ["", " najdete další informace o zásadách a programech monetizace."];
                            },
                        },
                        {
                            key: "bd9265e3",
                            get: function () {
                                return ["(", "% poplatek, min. ", ")"];
                            },
                        },
                        {
                            key: "da2a091b",
                            get: function () {
                                return ["Zakoupením souhlasíte s našimi ", " a našimi ", ". Předplatné se automaticky obnovuje, dokud nebude zrušeno, jak je popsáno v podmínkách. Zrušit ho můžete kdykoli."];
                            },
                        },
                        {
                            key: "c23c08c9",
                            get: function () {
                                return ["Zakoupením souhlasíte s našimi ", " a našimi ", "."];
                            },
                        },
                        {
                            key: "d39ad44d",
                            get: function () {
                                return ["Lajky, zmínky, reposty a ještě mnohem víc – příspěvky od ověřených účtů uvidíte tady. "];
                            },
                        },
                        {
                            key: "b004e8bf",
                            get: function () {
                                return ["Další informace o přístupu aplikací třetích stran získáte v ", "."];
                            },
                        },
                        {
                            key: "afd52f45",
                            get: function () {
                                return ["Vyvinula společnost ", ". Přečtěte si ", " a ", " společnosti " + this.props.orgName + "."];
                            },
                        },
                        {
                            key: "b88304a3",
                            get: function () {
                                return ["Pokud potřebujete podporu, napište na ", "."];
                            },
                        },
                        {
                            key: "j766b689",
                            get: function () {
                                return ["", " pro začátek."];
                            },
                        },
                        {
                            key: "ef7ce733",
                            get: function () {
                                return ["Synchronizováno od "];
                            },
                        },
                        {
                            key: "i958b2bd",
                            get: function () {
                                return ["Sdílet od "];
                            },
                        },
                        {
                            key: "b2c03e03",
                            get: function () {
                                return ["Pokud máte otázky týkající se nabírání pracovníků na platformě X, napište nám e-mail na "];
                            },
                        },
                        {
                            key: "c57cd3a3",
                            get: function () {
                                return ["(Pro organizace, ", ")"];
                            },
                        },
                        {
                            key: "bec92f3b",
                            get: function () {
                                return ["Zahájením ", " a přihlášením k odběru souhlasíte s našimi ", ". Po uplynutí " + this.props.numberOfDays + "denní bezplatné zkušební verze vám bude účtována částka podle tarifu za roční nebo měsíční předplatné, který si vyberete při registraci, pokud službu nezrušíte během " + this.props.numberOfDays + "denního období bezplatné zkušební verze. Předplatné se automaticky obnovuje, dokud nebude zrušeno, jak je popsáno v podmínkách. ", ". Zrušte ho alespoň 24 hodin před obnovením, abyste předešli dalším poplatkům. K přihlášení k odběru je vyžadováno ověřené telefonní číslo. Pokud jste se přihlásili k odběru na jiné platformě, spravujte své předplatné prostřednictvím této platformy."];
                            },
                        },
                        {
                            key: "b2138d0f",
                            get: function () {
                                return ["Přihlášením k odběru souhlasíte s našimi ", ". Předplatná se automaticky obnovují, dokud obnovení nezrušíte, jak je popsáno v ", ". ", ". Zrušte je alespoň 24 hodin před obnovením, abyste předešli dalším poplatkům. Při upgradování se vaše aktuální předplatné a související funkce okamžitě přepnou na novou úroveň předplatného. Okamžitě vám bude účtována cena nové úrovně, ale případný poměrný zůstatek z vašeho aktuálního fakturačního cyklu bude připsán k dnešní celkové ceně. Nebude vám vrácena žádná část vašeho předchozího předplatného, pokud to nevyžaduje zákon."];
                            },
                        },
                        {
                            key: "c2255911",
                            get: function () {
                                return ["Přihlášením k odběru souhlasíte s našimi ", ". Předplatná se automaticky obnovují, dokud obnovení nezrušíte, jak je popsáno v ", ". ", ". Zrušte je alespoň 24 hodin před obnovením, abyste předešli dalším poplatkům. Při přechodu na nižší verzi je vaše aktuální předplatné aktivní až do příštího fakturačního cyklu, kdy začne nové předplatné. Na začátku příštího fakturačního cyklu vám bude účtována cena za novou úroveň."];
                            },
                        },
                        {
                            key: "e647175f",
                            get: function () {
                                return ["Přihlášením k odběru souhlasíte s našimi ", ". Předplatná se automaticky obnovují, dokud obnovení nezrušíte, jak je popsáno v ", ". ", ". Zrušte je alespoň 24 hodin před obnovením, abyste předešli dalším poplatkům. Při přepínání budete nadále využívat funkce spojené s vaší úrovní. Cena nového ročního plánu vám bude účtována okamžitě a případný poměrný zůstatek z vašeho měsíčního fakturačního cyklu bude připsán k dnešní celkové ceně."];
                            },
                        },
                        {
                            key: "eaccb9c9",
                            get: function () {
                                return ["Přihlášením k odběru souhlasíte s našimi ", ". Předplatná se automaticky obnovují, dokud obnovení nezrušíte, jak je popsáno v ", ". ", ". Zrušte je alespoň 24 hodin před obnovením, abyste předešli dalším poplatkům. Při přepínání budete nadále využívat funkce spojené s vaší úrovní. Okamžitě vám bude účtována měsíční cena za úroveň, ale váš zbývající poměrný kredit z vaší roční platby bude připisován k měsíčním poplatkům, dokud se nevyčerpá."];
                            },
                        },
                        {
                            key: "db11f87d",
                            get: function () {
                                return ["Přihlaste se k odběru za ", " " + this.props.newPrice + "/" + this.props.interval];
                            },
                        },
                        {
                            key: "e4219e13",
                            get: function () {
                                return ["", " " + this.props.newPrice + "/" + this.props.interval + " účtováno ročně"];
                            },
                        },
                        {
                            key: "eeb5fb11",
                            get: function () {
                                return ["Informace o adrese se sdílejí s Googlem. Další informace najdete ve ", " a ", "."];
                            },
                        },
                        {
                            key: "f9b1387f",
                            get: function () {
                                return ["Komunity si do Zvýraznění v profilu můžou přidat jenom správci a moderátoři. Chcete si ", "?"];
                            },
                        },
                        {
                            key: "ef72b01b",
                            get: function () {
                                return ["Pokud chcete najít nejbližší krizové centrum, navštivte stránky organizace ", "."];
                            },
                        },
                        {
                            key: "e6c21d5b",
                            get: function () {
                                return ["Pokud se cítíte být v nebezpečí, obraťte se prosím na policii. Pokud by policie měla nějaké otázky, může využít našeho ", "."];
                            },
                        },
                        {
                            key: "e1d95725",
                            get: function () {
                                return ["Sledování můžete kdykoliv zrušit v ", "."];
                            },
                        },
                        {
                            key: "gd67df1d",
                            get: function () {
                                return ["Naposledy aktualizováno "];
                            },
                        },
                        {
                            key: "e420d1ed",
                            get: function () {
                                return ["Pokud svůj Kruh upravíte, lidem se o tom nezobrazí žádné oznámení. Každý, koho přidáte, se bude moci podívat na vaše předchozí posty pro Kruh. "];
                            },
                        },
                        {
                            key: "gc31d3e9",
                            get: function () {
                                return ["Počet zobrazení tohoto postu. Další informace získáte v ", "."];
                            },
                        },
                        {
                            key: "he0e6ed7",
                            get: function () {
                                return ["Počet zobrazení tohoto postu. Tento údaj se může zobrazit až po několika minutách. Další informace získáte v ", "."];
                            },
                        },
                        {
                            key: "c780f52b",
                            get: function () {
                                return ["Počet zobrazení tohoto postu není k dispozici. Další informace získáte v ", "."];
                            },
                        },
                        {
                            key: "fc2dfb3f",
                            get: function () {
                                return ["Kliknutím na možnost Vytvořit reklamu potvrzujete, že jste si přečetli a přijímáte ", " a ", "."];
                            },
                        },
                        {
                            key: "fcf4b2a5",
                            get: function () {
                                return ["Kliknutím na Vytvořit reklamu potvrzujete, že jste si přečetli a přijímáte ", "."];
                            },
                        },
                        {
                            key: "f54ad505",
                            get: function () {
                                return ["Některé možnosti cílení nejsou pro tento reklamní účet k dispozici, a to na základě zásad společnosti X pro ", "."];
                            },
                        },
                        {
                            key: "b3816c8b",
                            get: function () {
                                return ["Kliknutím na možnost Sponzorovat post potvrzujete, že jste si přečetli a přijímáte ", " a ", "."];
                            },
                        },
                        {
                            key: "ee48f791",
                            get: function () {
                                return ["Kliknutím na možnost Sponzorovat post potvrzujete, že jste si přečetli a přijímáte ", "."];
                            },
                        },
                        {
                            key: "f5a533b1",
                            get: function () {
                                return ["Tento post nemá žádné skryté odpovědi, ale chráněné posty mohou být odfiltrovány. "];
                            },
                        },
                        {
                            key: "cd5e4a77",
                            get: function () {
                                return ["Kliknutím na tlačítko pro potvrzení nákupu níže přijímáte ", "."];
                            },
                        },
                        {
                            key: "aa4026bf",
                            get: function () {
                                return ["To uživateli ", " zabrání, aby vás přidal na kterýkoli z jeho seznamů včetně tohoto."];
                            },
                        },
                        {
                            key: "fca299bb",
                            get: function () {
                                return ["Sdílejte svůj e-mail s " + this.props.creatorName + ". Přijetím vyjádříte souhlas s tím, že X může sdílet e-mailovou adresu s tvůrcem za účelem komunikace mimo platformu, a přijmete ", "."];
                            },
                        },
                        {
                            key: "ccd45e5f",
                            get: function () {
                                return ["Darujte jeden rok " + this.props.tier + " uživateli @" + this.props.screenName + " za " + this.props.price + ". Jakmile dokončíte platbu, uživatel obdrží upozornění, že jste mu poslali dárek."];
                            },
                        },
                        {
                            key: "h7f3e309",
                            get: function () {
                                return ["Cena darovaného předplatného je účtována při nákupu a je nevratná. Je jednorázová, nevyměnitelná, nekombinovatelná a nemá žádnou peněžní hodnotu. Začíná poté, co společnost X zkontroluje a přidělí příjemce, který musí potvrdit naše ", ". Pokud příjemce nesplní jakékoli požadavky na způsobilost, zruší předplatné nebo odmítne naše podmínky a zásady, dárek nelze uplatnit a nelze jej vrátit. Mohou být účtovány poplatky. Podmínky se mohou změnit. ", "."];
                            },
                        },
                        {
                            key: "j0a20bf1",
                            get: function () {
                                return ["Organizace jsou zaškrtnuty zlatou barvou, osoby modrou. Nevhodné použití bude mít za následek zrušení vašeho předplatného bez nároku na náhradu, jak stanoví naše ", "."];
                            },
                        },
                        {
                            key: "j1b50481",
                            get: function () {
                                return ["Organizace mají čtvercové avatary, osoby avatary kruhové. Nevhodné použití bude mít za následek zrušení vašeho předplatného bez nároku na náhradu, jak stanoví naše", "."];
                            },
                        },
                        {
                            key: "ebebbb93",
                            get: function () {
                                return ["Nakonfigurujte, který reklamní účet bude používán pro pracovní pozice, když jsou propagovány prostřednictvím portálu ", "."];
                            },
                        },
                        {
                            key: "bd5a78a1",
                            get: function () {
                                return ["Nebyly nalezeny žádné způsobilé účty. Další kroky naleznete na stránce ", "."];
                            },
                        },
                        {
                            key: "b94bf5f5",
                            get: function () {
                                return ["Zrušením Ověřených organizací vaše organizace okamžitě ztratí zlaté zaškrtávací znaménko."];
                            },
                        },
                        {
                            key: "d4109f93",
                            get: function () {
                                return ["Kromě toho budou okamžitě zrušeny všechny partnerské účty a ztratí svá zlatá nebo modrá zaškrtávací znaménka a odznaky partnerských účtů."];
                            },
                        },
                        {
                            key: "c5b26ddf",
                            get: function () {
                                return ["Zrušením okamžitě odeberete zaškrtnutí a všechny placené funkce z vaší organizace   všech partnerských účtů."];
                            },
                        },
                        {
                            key: "h06e7c87",
                            get: function () {
                                return ["Pokud se dnes rozhodnete zůstat, přidáme na váš portál během následujících " + this.props.daysOfCouponInterval + " dní další kredit na reklamu zdarma v hodnotě " + this.props.creditAmount + " USD, a to po dobu následujících " + this.props.totalDays + " dní. Když tuto nabídku uplatníte, náš tým podpory vás bude kontaktovat, aby vám pomohl tento kredit pro vaši organizaci využít."];
                            },
                        },
                        {
                            key: "b602e60f",
                            get: function () {
                                return ["Pokud se dnes rozhodnete zůstat, přidáme na váš portál během následujících " + this.props.daysToWaitForFirstRedeemable + " dní další kredit na reklamu zdarma v hodnotě " + this.props.creditAmount + " USD. Když tuto nabídku uplatníte, náš tým podpory vás bude kontaktovat, aby vám pomohl tento kredit pro organizaci využít."];
                            },
                        },
                        {
                            key: "fa5bbb59",
                            get: function () {
                                return ["Toto je jednorázová nabídka a nebude znovu dostupná."];
                            },
                        },
                        {
                            key: "ceadabdd",
                            get: function () {
                                return ["Stále se můžete vrátit a uplatnit jednorázovou nabídku, která nebude znovu k dispozici. Peníze za zbývající dny předplatného vám budou vráceny až v příštím fakturačním období. Poté vám již nebudou účtovány žádné poplatky."];
                            },
                        },
                        {
                            key: "e269f39d",
                            get: function () {
                                return ["Ověřené organizace získají na X prioritní podporu pro všechny problémy. Ať se jedná o cokoli, můžeme vám pomoci problém co nejdříve vyřešit. Chcete si naplánovat hovor se členem týmu Ověřené organizace, který vám může pomoci?"];
                            },
                        },
                        {
                            key: "e9565acf",
                            get: function () {
                                return ["Pokud akci zrušíte, okamžitě přijdete o přístup k tomuto kreditu na reklamu zdarma a všem budoucím kreditům na reklamu zdarma přiděleným k vašemu předplatnému. Protože jste za tento benefit už zaplatili, doporučujeme zůstat, abyste ho mohli využít."];
                            },
                        },
                        {
                            key: "if6e211f",
                            get: function () {
                                return ["Pokud chcete zvýšit svůj limit, obraťte se na prémiovou podporu ověření ", "."];
                            },
                        },
                        {
                            key: "a994ab9b",
                            get: function () {
                                return ["Každý další partnerský účet stojí ", "/"];
                            },
                        },
                        {
                            key: "j4f386b7",
                            get: function () {
                                return ["", " ročně během vašeho prvního roku. Pak ", " ročně."];
                            },
                        },
                        {
                            key: "ce9e7f1b",
                            get: function () {
                                return ["Každý další partnerský účet stojí ", " za uživatelské jméno za rok. "];
                            },
                        },
                        {
                            key: "dc107867",
                            get: function () {
                                return ["", "/", " (", ") + ", " za uživatelské jméno za ", " (", "). "];
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
                                return ["Získejte 30% slevu na roční plány a až 12 000 USD v kreditech na reklamu zdarma, když se přihlásíte k odběru před "];
                            },
                        },
                        {
                            key: "f5b357b5",
                            get: function () {
                                return ["Plný přístup stojí ", "/", " (", "). Každý další partnerský účet stojí ", " za uživatelské jméno za ", " (", "). "];
                            },
                        },
                        {
                            key: "i83d2543",
                            get: function () {
                                return ["Základ stojí ", "/", " (", "). "];
                            },
                        },
                        {
                            key: "gc723de9",
                            get: function () {
                                return ["Kliknutím na tlačítko Přihlásit se k odběru souhlasíte s našimi ", ". Předplatná se automaticky obnovují, dokud nebudou zrušena. Všechny účty, které se přihlásí, musí projít manuálním schválením."];
                            },
                        },
                        {
                            key: "ha873011",
                            get: function () {
                                return ["Kliknutím na tlačítko Přihlásit se k odběru souhlasíte s našimi ", ". Předplatná se automaticky obnovují, dokud nebudou zrušena. Účty, které se zaregistrují, jsou kontrolovány z hlediska pravosti. Pokud si zaregistrujete účet, který není organizací, budete odmítnuti a nebudou vám vráceny peníze."];
                            },
                        },
                        {
                            key: "d4918c71",
                            get: function () {
                                return ["+ Kredit ", " na reklamu po omezenou dobu, který můžete ", " utratit na svou organizaci nebo jakýkoli z jejích přidružených účtů s vyhrazenou podporou."];
                            },
                        },
                        {
                            key: "a87b1795",
                            get: function () {
                                return ["+ Kredit na reklamu ve výši ", " po omezenou dobu, který můžete ", " utratit na svou organizaci s vyhrazenou podporou."];
                            },
                        },
                        {
                            key: "fb6fa495",
                            get: function () {
                                return ["", this.props.activeTierName + " za " + this.props.activePriceLabel];
                            },
                        },
                        {
                            key: "fcbe756d",
                            get: function () {
                                return ["", this.props.targetTierName + " za " + this.props.targetPriceLabel];
                            },
                        },
                        {
                            key: "c9384b33",
                            get: function () {
                                return ["Tato změna předplatného zde není podporována, obraťte se na  Premium podporu pro ověřené účty ", "."];
                            },
                        },
                        {
                            key: "af51185b",
                            get: function () {
                                return ["Pokud požadujete více partnerských účtů, kontaktujte Prodejní ověření ", "."];
                            },
                        },
                        {
                            key: "d9f35d6f",
                            get: function () {
                                return ["Kliknutím na ‘" + this.props.action + "’ souhlasíte s tím, že budete vázáni ", "pro kupující na platformě X."];
                            },
                        },
                        {
                            key: "g42a8521",
                            get: function () {
                                return ["Použijeme tyto informace pro přístup k aplikaci pro ", ". ", "."];
                            },
                        },
                        {
                            key: "aacfbecd",
                            get: function () {
                                return ["Zaškrtnutím tohoto políčka potvrzujete, že jste si přečetli, a že souhlasíte se smluvními podmínkami, které jsou k dispozici ", "."];
                            },
                        },
                        {
                            key: "feb950f3",
                            get: function () {
                                return ["Ověřené organizace nyní zahrnují " + this.props.xtc_coupon_value + " kreditů na reklamy (nebo ekvivalent v místní měně)*. Můžete jej použít na svou organizaci nebo jakýkoli z přidružených účtů. Pro uplatnění stačí vybrat níže uvedený reklamní účet."];
                            },
                        },
                        {
                            key: "h9629ab7",
                            get: function () {
                                return ["Ověřené organizace nyní obsahují " + this.props.xtc_coupon_value + " kredity na reklamu* (nebo ekvivalent v místní měně). Každých 30 dní získáte " + this.props.xtc_coupon_value + " (nebo ekvivalent v místní měně), které můžete utratit za reklamy. Utratit se dají kdykoli. Můžete je využít pro svou organizaci nebo libovolného partnera. Stačí si vybrat, pro který z uvedených reklamních účtů je chcete uplatnit."];
                            },
                        },
                        {
                            key: "i3781135",
                            get: function () {
                                return ["Spravovat ID svého reklamního účtu můžete ", "."];
                            },
                        },
                        {
                            key: "ff1cc953",
                            get: function () {
                                return ["Narazili jste na problém? Pokud máte nějaké otázky, kontaktujte ", "."];
                            },
                        },
                        {
                            key: "g46e6cc5",
                            get: function () {
                                return ["Máte ", " dní na utracení zbývajících ", " na tento kredit na reklamu."];
                            },
                        },
                        {
                            key: "be64138f",
                            get: function () {
                                return ["Aktivujte svůj kredit na reklamy. Pokud máte několik reklamních účtů, můžete zadání upravit níže. Lze využít do " + this.props.expiresAt];
                            },
                        },
                        {
                            key: "a5f1d09f",
                            get: function () {
                                return ["Najděte ID svého reklamního účtu spojené s vaším účtem X. Můžete to najít ", "."];
                            },
                        },
                        {
                            key: "e3a90717",
                            get: function () {
                                return ["Ujistěte se, že jste ve Správci reklam přidali kreditní kartu jako typ platby výběrem možnosti „Přidat novou platební metodu“. Pokud nemáte nastavenou kreditní kartu, kredit nebude použit a reklama se nebude zobrazovat."];
                            },
                        },
                        {
                            key: "b743c7b7",
                            get: function () {
                                return ["Zkopírujte ID svého reklamního účtu do textového vstupu v horní části této stránky. Klikněte na aktivovat."];
                            },
                        },
                        {
                            key: "d5128627",
                            get: function () {
                                return ["Spusťte kampaň."];
                            },
                        },
                        {
                            key: "ecd5d325",
                            get: function () {
                                return ["Ujistěte se, že jste ve Správci reklam přidali kreditní kartu jako typ platby výběrem možnosti „Přidat novou platební metodu“. Pokud nemáte nastavenou kreditní kartu, vaše reklama se nebude zobrazovat."];
                            },
                        },
                        {
                            key: "d523367f",
                            get: function () {
                                return ["Uplatněný kredit uvidíte ve Správci reklam v části Fakturace."];
                            },
                        },
                        {
                            key: "c10a3649",
                            get: function () {
                                return ["Jestliže jste v minulosti inzerovali s platformou X, můžete mít více ID reklamních účtů."];
                            },
                        },
                        {
                            key: "fab86f55",
                            get: function () {
                                return ["Najdete ", " seznam všech ID svých reklamních účtů."];
                            },
                        },
                        {
                            key: "h9fe1a6d",
                            get: function () {
                                return ["Ujistěte se, že jste vybrali správné ID reklamního účtu, abyste mohli použít svůj kredit."];
                            },
                        },
                        {
                            key: "a4087047",
                            get: function () {
                                return ["Jako předplatitel Ověřených organizací s plným přístupem můžete použít svůj kredit na kterýkoli ze svých partnerských účtů."];
                            },
                        },
                        {
                            key: "ca18299b",
                            get: function () {
                                return ["Abyste to mohli udělat, musíte mít přístup k ID reklamního účtu partnerského účtu, na kterém chcete spustit kampaň."];
                            },
                        },
                        {
                            key: "b83bc371",
                            get: function () {
                                return ["Možnost najdete po přihlášení do partnerského účtu a přejít ", "."];
                            },
                        },
                        {
                            key: "ba6442ef",
                            get: function () {
                                return ["Ověřené organizace mohou získat kredity, které lze použít na ", " a propagaci pracovní pozice. Pokud chcete plně aktivovat reklamní funkce, proveďte tyto kroky."];
                            },
                        },
                        {
                            key: "e52e0c73",
                            get: function () {
                                return ["Ověřené organizace mohou získat kredity, které lze použít na ", ". Pokud chcete plně aktivovat reklamní funkce, proveďte tyto kroky."];
                            },
                        },
                        {
                            key: "d15a83b7",
                            get: function () {
                                return ["Aktivujte kupón"];
                            },
                        },
                        {
                            key: "j5318247",
                            get: function () {
                                return ["Pokud chcete získat " + this.props.couponAmount + " kreditů, vyberte si aktivní účet v dobrém stavu."];
                            },
                        },
                        {
                            key: "e507417b",
                            get: function () {
                                return ["Seznam ID účtu můžete najít ve ", ". Příklad ID: o8z6j"];
                            },
                        },
                        {
                            key: "b17ac597",
                            get: function () {
                                return ["Pracovní pozice jsou připraveny k propagaci s akcí "];
                            },
                        },
                        {
                            key: "ga44a2f9",
                            get: function () {
                                return ["Jakmile bude způsobilý, mohou být pracovní pozice propagovány pomocí akce "];
                            },
                        },
                        {
                            key: "dc53cac9",
                            get: function () {
                                return ["Prošetřujeme žádosti zaslané držitelem ochranné známky nebo jeho oprávněným zástupcem. Podrobnosti naleznete v našich ", "."];
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
                                return ["Zadejte uživatelské jméno vlastníka seznamu a název seznamu v následujícím formátu: ", "."];
                            },
                        },
                        {
                            key: "aa36416b",
                            get: function () {
                                return ["Tento sloupec se dá vymazat, jen pokud přepnete na zobrazování ", "."];
                            },
                        },
                        {
                            key: "baed64e7",
                            get: function () {
                                return ["Zobrazit naše Zásady ochrany osobních údajů na "];
                            },
                        },
                        {
                            key: "a982261d",
                            get: function () {
                                return ["Zobrazit naše Smluvní podmínky na "];
                            },
                        },
                        {
                            key: "ffe014fd",
                            get: function () {
                                return ["Společnost X a její partneři používají soubory cookie, aby vám poskytovali lepší, bezpečnější a rychlejší služby a podporovali naše podnikání. Některé soubory cookie jsou nezbytné pro používání našich služeb, zlepšování našich služeb a zajištění jejich správného fungování. Pokud kliknete na „Přijmout všechny soubory cookie“, povolíte společnosti X a jejím partnerům používat soubory cookie k poskytování reklam a komunikace přizpůsobené vašim zájmům. Pokud kliknete na „Odmítnout nepodstatné soubory cookie“, nebudeme soubory cookie používat ke shromažďování dalších údajů pro přizpůsobené reklamy a komunikaci. Další informace o našich postupech při používání souborů cookie zjistíte na naší stránce centra nápovědy pro soubory cookie na webu na adrese "];
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
                                return ["", " od autora"];
                            },
                        },
                        {
                            key: "i0643a5b",
                            get: function () {
                                return ["", " Článek"];
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
                                return ["Toto médium bylo zakázáno v souvislosti s nárokem ohledně autorských práv vzneseným tímto uživatelem nebo firmou: " + this.props.copyrightHolder + ". Pokud to chcete rozporovat, použijte prosím ", "."];
                            },
                        },
                        {
                            key: "fcd931ed",
                            get: function () {
                                return ["Uživatel ", " repostoval"];
                            },
                        },
                        {
                            key: "c2588611",
                            get: function () {
                                return ["", " v " + this.props.time];
                            },
                        },
                        {
                            key: "dbf19261",
                            get: function () {
                                return ["Od uživatele "];
                            },
                        },
                        {
                            key: "d7b2c271",
                            get: function () {
                                return ["", " a "];
                            },
                        },
                        {
                            key: "b035fe73",
                            get: function () {
                                return ["", " a "];
                            },
                        },
                        {
                            key: "h5970807",
                            get: function () {
                                return ["Odpověď uživateli "];
                            },
                        },
                        {
                            key: "ge01e6a3",
                            get: function () {
                                return ["Odpověď uživatelům ", " ", " "];
                            },
                        },
                        {
                            key: "f5a069ab",
                            get: function () {
                                return ["Odpověď uživateli ", " "];
                            },
                        },
                        {
                            key: "hd7dd197",
                            get: function () {
                                return ["Odpověď uživatelům ", " ", " ", " "];
                            },
                        },
                        {
                            key: "g4eb2847",
                            get: function () {
                                return ["Odpověď uživatelům ", " ", " "];
                            },
                        },
                        {
                            key: "dfde726b",
                            get: function () {
                                return ["Čtení na "];
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
                                return [this.props.formattedCount + " Člen" + n(this.props.count, "ové", "ové", "", "ů")];
                            },
                        },
                        {
                            key: "c9e6167d",
                            get: function () {
                                return ["Uživatele sleduje "];
                            },
                        },
                        {
                            key: "ha91d1eb",
                            get: function () {
                                return ["Uživatele sledují ", " a "];
                            },
                        },
                        {
                            key: "f1069f9b",
                            get: function () {
                                return ["Uživatel sledován uživateli ", ", ", " a "];
                            },
                        },
                        {
                            key: "e8404c1f",
                            get: function () {
                                return ["Uživatele sledují uživatelé ", ", ", " a další uživatelé (", "), které sledujete"];
                            },
                        },
                        {
                            key: "bb2cd6d3",
                            get: function () {
                                return ["Uživatel ", " a další (", ") mají toto téma v oblibě."];
                            },
                        },
                        {
                            key: "e1e348dd",
                            get: function () {
                                return ["Za příspěvek zaplatil "];
                            },
                        },
                        {
                            key: "c7dea0d1",
                            get: function () {
                                return ["Za příspěvek zaplatil/a ", " a není schválen kandidátem nebo výborem kandidáta."];
                            },
                        },
                        {
                            key: "b5c2371b",
                            get: function () {
                                return ["Zaplaceno ", " · Schváleno " + this.props.sponsorshipCandidate];
                            },
                        },
                        {
                            key: "b6a393af",
                            get: function () {
                                return ["Tento post můžete vidět pouze vy a lidé z vašeho Kruhu. Reposty, citace a sdílení nejsou dostupné. "];
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
                                return ["Populární téma: "];
                            },
                        },
                        {
                            key: "ea753bf5",
                            get: function () {
                                return ["Populární témata: ", ", "];
                            },
                        },
                        {
                            key: "ge9aefd5",
                            get: function () {
                                return ["", " z "];
                            },
                        },
                        {
                            key: "templateReducer",
                            get: function () {
                                var e,
                                    o = d.Children.toArray(this.props.children),
                                    t = ((e = this.props.$i18n), u[c[e]] || s);
                                return function (e, a, n) {
                                    return e.concat(a, o[t(n)]);
                                };
                            },
                        },
                    ]) && r(a.prototype, v),
                    p && r(a, p),
                    Object.defineProperty(a, "prototype", { writable: !1 }),
                    l
                );
            })(t(674132)._ActualI18NFormatMessage || d.Component);
            a("_ActualI18NFormatMessage", v),
                a("I18NFormatMessage", function (e) {
                    return d.createElement(v, e);
                });
            var p = t(495075);
            t(800694), t(556829), t(530152), t(658610), t(492344), t(663823);
            p._validateParameterTypeNumber, p._validateParameterPresence;
            var l = p._numberRound,
                m = (p._numberFormat, p._numberFormatterFn),
                k = p._pluralGeneratorFn,
                b = (p._currencyNameFormat, p._currencyFormatterFn),
                f = (p._validateParameterTypeDate, p._dateToPartsFormat, p._dateToPartsFormatterFn),
                z = (p._dateFormat, p._dateFormatterFn),
                h = p._relativeTimeFormatterFn,
                j = p._unitFormatterFn;
            (p.a827863013 = m(["", , 1, 0, 1, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", l("truncate"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tis'.'", few: "0 tis'.'", many: "0 tis'.'", other: "0 tis'.'" }, 4: { one: "00 tis'.'", few: "00 tis'.'", many: "00 tis'.'", other: "00 tis'.'" }, 5: { one: "000 tis'.'", few: "000 tis'.'", many: "000 tis'.'", other: "000 tis'.'" }, 6: { one: "0 mil'.'", few: "0 mil'.'", many: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", many: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", many: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mld'.'", few: "0 mld'.'", many: "0 mld'.'", other: "0 mld'.'" }, 10: { one: "00 mld'.'", few: "00 mld'.'", many: "00 mld'.'", other: "00 mld'.'" }, 11: { one: "000 mld'.'", few: "000 mld'.'", many: "000 mld'.'", other: "000 mld'.'" }, 12: { one: "0 bil'.'", few: "0 bil'.'", many: "0 bil'.'", other: "0 bil'.'" }, 13: { one: "00 bil'.'", few: "00 bil'.'", many: "00 bil'.'", other: "00 bil'.'" }, 14: { one: "000 bil'.'", few: "000 bil'.'", many: "000 bil'.'", other: "000 bil'.'" }, maxExponent: 14 }], p("cs").pluralGenerator({}))),
                (p.b521027023 = m(["", , 1, 0, 3, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b573964695 = m(["", , 1, 0, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", l("round"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a130957221 = m(["", , 1, 0, 0, , , , , , "", "0", "-0", "-", "", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b234962737 = m(["", , 2, 0, 0, , , , , , "", "00", "-00", "-", "", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1429047994 = m(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", l("truncate"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tis'.'", few: "0 tis'.'", many: "0 tis'.'", other: "0 tis'.'" }, 4: { one: "00 tis'.'", few: "00 tis'.'", many: "00 tis'.'", other: "00 tis'.'" }, 5: { one: "000 tis'.'", few: "000 tis'.'", many: "000 tis'.'", other: "000 tis'.'" }, 6: { one: "0 mil'.'", few: "0 mil'.'", many: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", many: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", many: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mld'.'", few: "0 mld'.'", many: "0 mld'.'", other: "0 mld'.'" }, 10: { one: "00 mld'.'", few: "00 mld'.'", many: "00 mld'.'", other: "00 mld'.'" }, 11: { one: "000 mld'.'", few: "000 mld'.'", many: "000 mld'.'", other: "000 mld'.'" }, 12: { one: "0 bil'.'", few: "0 bil'.'", many: "0 bil'.'", other: "0 bil'.'" }, 13: { one: "00 bil'.'", few: "00 bil'.'", many: "00 bil'.'", other: "00 bil'.'" }, 14: { one: "000 bil'.'", few: "000 bil'.'", many: "000 bil'.'", other: "000 bil'.'" }, maxExponent: 14 }], p("cs").pluralGenerator({}))),
                (p.a98449830 = m(["", , 1, 0, 1, , , , 3, , " %", "#,##0 %", "-#,##0 % %", "-", " %", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1714886803 = m(["", , 1, 0, 0, , , , 3, , " %", "#,##0 %", "-#,##0 % %", "-", " %", l("round"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a2044652564 = m(["", , 1, 0, 1, , , , 3, , " %", "#,##0 %", "-#,##0 % %", "-", " %", l("round"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b76845684 = m(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", l("truncate"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tis'.'", few: "0 tis'.'", many: "0 tis'.'", other: "0 tis'.'" }, 4: { one: "00 tis'.'", few: "00 tis'.'", many: "00 tis'.'", other: "00 tis'.'" }, 5: { one: "000 tis'.'", few: "000 tis'.'", many: "000 tis'.'", other: "000 tis'.'" }, 6: { one: "0 mil'.'", few: "0 mil'.'", many: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", many: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", many: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mld'.'", few: "0 mld'.'", many: "0 mld'.'", other: "0 mld'.'" }, 10: { one: "00 mld'.'", few: "00 mld'.'", many: "00 mld'.'", other: "00 mld'.'" }, 11: { one: "000 mld'.'", few: "000 mld'.'", many: "000 mld'.'", other: "000 mld'.'" }, 12: { one: "0 bil'.'", few: "0 bil'.'", many: "0 bil'.'", other: "0 bil'.'" }, 13: { one: "00 bil'.'", few: "00 bil'.'", many: "00 bil'.'", other: "00 bil'.'" }, 14: { one: "000 bil'.'", few: "000 bil'.'", many: "000 bil'.'", other: "000 bil'.'" }, maxExponent: 14 }], p("cs").pluralGenerator({}))),
                (p.b1919193361 = m(["", , 1, 1, 1, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", l("truncate"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1307298669 = m(["", , 1, 2, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", l("truncate"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b800117329 = m(["", , 1, 0, 0, 1, 2, , 3, , "", "#,##0.###", "-#,##0.###", "-", "", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tis'.'", few: "0 tis'.'", many: "0 tis'.'", other: "0 tis'.'" }, 4: { one: "00 tis'.'", few: "00 tis'.'", many: "00 tis'.'", other: "00 tis'.'" }, 5: { one: "000 tis'.'", few: "000 tis'.'", many: "000 tis'.'", other: "000 tis'.'" }, 6: { one: "0 mil'.'", few: "0 mil'.'", many: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", many: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", many: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mld'.'", few: "0 mld'.'", many: "0 mld'.'", other: "0 mld'.'" }, 10: { one: "00 mld'.'", few: "00 mld'.'", many: "00 mld'.'", other: "00 mld'.'" }, 11: { one: "000 mld'.'", few: "000 mld'.'", many: "000 mld'.'", other: "000 mld'.'" }, 12: { one: "0 bil'.'", few: "0 bil'.'", many: "0 bil'.'", other: "0 bil'.'" }, 13: { one: "00 bil'.'", few: "00 bil'.'", many: "00 bil'.'", other: "00 bil'.'" }, 14: { one: "000 bil'.'", few: "000 bil'.'", many: "000 bil'.'", other: "000 bil'.'" }, maxExponent: 14 }], p("cs").pluralGenerator({}))),
                (p.b328382886 = m(["", , 1, 2, 2, , , 0, 3, , " 'AED'", "#,##0.00 'AED'", "-#,##0.00 'AED' 'AED'", "-", " 'AED'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a109584705 = m(["", , 1, 0, 0, , , , 3, , " 'ALL'", "#,##0 'ALL'", "-#,##0 'ALL' 'ALL'", "-", " 'ALL'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a57648892 = m(["", , 1, 2, 2, , , 0, 3, , " 'ARS'", "#,##0.00 'ARS'", "-#,##0.00 'ARS' 'ARS'", "-", " 'ARS'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a100130858 = m(["", , 1, 2, 2, , , 0, 3, , " 'AU$'", "#,##0.00 'AU$'", "-#,##0.00 'AU$' 'AU$'", "-", " 'AU$'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a452915880 = m(["", , 1, 2, 2, , , 0, 3, , " 'BAM'", "#,##0.00 'BAM'", "-#,##0.00 'BAM' 'BAM'", "-", " 'BAM'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a545267980 = m(["", , 1, 2, 2, , , 0, 3, , " 'BDT'", "#,##0.00 'BDT'", "-#,##0.00 'BDT' 'BDT'", "-", " 'BDT'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a625614307 = m(["", , 1, 2, 2, , , 0, 3, , " 'BGN'", "#,##0.00 'BGN'", "-#,##0.00 'BGN' 'BGN'", "-", " 'BGN'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1303494916 = m(["", , 1, 3, 3, , , 0, 3, , " 'BHD'", "#,##0.000 'BHD'", "-#,##0.000 'BHD' 'BHD'", "-", " 'BHD'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1356354898 = m(["", , 1, 2, 2, , , 0, 3, , " 'R$'", "#,##0.00 'R$'", "-#,##0.00 'R$' 'R$'", "-", " 'R$'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1374808475 = m(["", , 1, 0, 0, , , , 3, , " 'BYR'", "#,##0 'BYR'", "-#,##0 'BYR' 'BYR'", "-", " 'BYR'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1302555200 = m(["", , 1, 2, 2, , , 0, 3, , " 'CA$'", "#,##0.00 'CA$'", "-#,##0.00 'CA$' 'CA$'", "-", " 'CA$'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1534358971 = m(["", , 1, 2, 2, , , 0, 3, , " 'CHF'", "#,##0.00 'CHF'", "-#,##0.00 'CHF' 'CHF'", "-", " 'CHF'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1888286151 = m(["", , 1, 0, 0, , , , 3, , " 'CLP'", "#,##0 'CLP'", "-#,##0 'CLP' 'CLP'", "-", " 'CLP'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1793868372 = m(["", , 1, 2, 2, , , 0, 3, , " 'CN¥'", "#,##0.00 'CN¥'", "-#,##0.00 'CN¥' 'CN¥'", "-", " 'CN¥'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1974173604 = m(["", , 1, 0, 0, , , , 3, , " 'COP'", "#,##0 'COP'", "-#,##0 'COP' 'COP'", "-", " 'COP'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1341578562 = m(["", , 1, 2, 2, , , 0, 3, , " 'Kč'", "#,##0.00 'Kč'", "-#,##0.00 'Kč' 'Kč'", "-", " 'Kč'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1782599586 = m(["", , 1, 2, 2, , , 0, 3, , " 'DKK'", "#,##0.00 'DKK'", "-#,##0.00 'DKK' 'DKK'", "-", " 'DKK'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1359626968 = m(["", , 1, 2, 2, , , 0, 3, , " 'DZD'", "#,##0.00 'DZD'", "-#,##0.00 'DZD' 'DZD'", "-", " 'DZD'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1004994904 = m(["", , 1, 2, 2, , , 0, 3, , " 'EGP'", "#,##0.00 'EGP'", "-#,##0.00 'EGP' 'EGP'", "-", " 'EGP'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a954662950 = m(["", , 1, 2, 2, , , 0, 3, , " '€'", "#,##0.00 '€'", "-#,##0.00 '€' '€'", "-", " '€'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1970801821 = m(["", , 1, 2, 2, , , 0, 3, , " '£'", "#,##0.00 '£'", "-#,##0.00 '£' '£'", "-", " '£'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a801412172 = m(["", , 1, 2, 2, , , 0, 3, , " 'GHS'", "#,##0.00 'GHS'", "-#,##0.00 'GHS' 'GHS'", "-", " 'GHS'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1143114942 = m(["", , 1, 2, 2, , , 0, 3, , " 'GTQ'", "#,##0.00 'GTQ'", "-#,##0.00 'GTQ' 'GTQ'", "-", " 'GTQ'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1731397819 = m(["", , 1, 2, 2, , , 0, 3, , " 'HK$'", "#,##0.00 'HK$'", "-#,##0.00 'HK$' 'HK$'", "-", " 'HK$'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1967819195 = m(["", , 1, 2, 2, , , 0, 3, , " 'HRK'", "#,##0.00 'HRK'", "-#,##0.00 'HRK' 'HRK'", "-", " 'HRK'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a2049089043 = m(["", , 1, 2, 2, , , 0, 3, , " 'HUF'", "#,##0.00 'HUF'", "-#,##0.00 'HUF' 'HUF'", "-", " 'HUF'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1603812521 = m(["", , 1, 0, 0, , , , 3, , " 'IDR'", "#,##0 'IDR'", "-#,##0 'IDR' 'IDR'", "-", " 'IDR'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1604031158 = m(["", , 1, 2, 2, , , 0, 3, , " 'ILS'", "#,##0.00 'ILS'", "-#,##0.00 'ILS' 'ILS'", "-", " 'ILS'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1547696377 = m(["", , 1, 2, 2, , , 0, 3, , " 'INR'", "#,##0.00 'INR'", "-#,##0.00 'INR' 'INR'", "-", " 'INR'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1244562852 = m(["", , 1, 0, 0, , , , 3, , " 'IQD'", "#,##0 'IQD'", "-#,##0 'IQD' 'IQD'", "-", " 'IQD'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1180839903 = m(["", , 1, 0, 0, , , , 3, , " 'ISK'", "#,##0 'ISK'", "-#,##0 'ISK' 'ISK'", "-", " 'ISK'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b296106785 = m(["", , 1, 0, 0, , , , 3, , " 'JP¥'", "#,##0 'JP¥'", "-#,##0 'JP¥' 'JP¥'", "-", " 'JP¥'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b29427853 = m(["", , 1, 2, 2, , , 0, 3, , " 'KES'", "#,##0.00 'KES'", "-#,##0.00 'KES' 'KES'", "-", " 'KES'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1305204137 = m(["", , 1, 0, 0, , , , 3, , " '₩'", "#,##0 '₩'", "-#,##0 '₩' '₩'", "-", " '₩'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1476459114 = m(["", , 1, 3, 3, , , 0, 3, , " 'KWD'", "#,##0.000 'KWD'", "-#,##0.000 'KWD' 'KWD'", "-", " 'KWD'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a572707839 = m(["", , 1, 2, 2, , , 0, 3, , " 'KZT'", "#,##0.00 'KZT'", "-#,##0.00 'KZT' 'KZT'", "-", " 'KZT'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a999593178 = m(["", , 1, 0, 0, , , , 3, , " 'LBP'", "#,##0 'LBP'", "-#,##0 'LBP' 'LBP'", "-", " 'LBP'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1617210090 = m(["", , 1, 2, 2, , , 0, 3, , " 'MAD'", "#,##0.00 'MAD'", "-#,##0.00 'MAD' 'MAD'", "-", " 'MAD'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1903501600 = m(["", , 1, 2, 2, , , 0, 3, , " 'MKD'", "#,##0.00 'MKD'", "-#,##0.00 'MKD' 'MKD'", "-", " 'MKD'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b2048839405 = m(["", , 1, 2, 2, , , 0, 3, , " 'MX$'", "#,##0.00 'MX$'", "-#,##0.00 'MX$' 'MX$'", "-", " 'MX$'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1977728288 = m(["", , 1, 2, 2, , , 0, 3, , " 'MYR'", "#,##0.00 'MYR'", "-#,##0.00 'MYR' 'MYR'", "-", " 'MYR'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1609243409 = m(["", , 1, 2, 2, , , 0, 3, , " 'NGN'", "#,##0.00 'NGN'", "-#,##0.00 'NGN' 'NGN'", "-", " 'NGN'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1382980764 = m(["", , 1, 2, 2, , , 0, 3, , " 'NOK'", "#,##0.00 'NOK'", "-#,##0.00 'NOK' 'NOK'", "-", " 'NOK'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1104077422 = m(["", , 1, 2, 2, , , 0, 3, , " 'NZ$'", "#,##0.00 'NZ$'", "-#,##0.00 'NZ$' 'NZ$'", "-", " 'NZ$'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a108505651 = m(["", , 1, 2, 2, , , 0, 3, , " 'PEN'", "#,##0.00 'PEN'", "-#,##0.00 'PEN' 'PEN'", "-", " 'PEN'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a196240146 = m(["", , 1, 2, 2, , , 0, 3, , " 'PHP'", "#,##0.00 'PHP'", "-#,##0.00 'PHP' 'PHP'", "-", " 'PHP'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a514150007 = m(["", , 1, 0, 0, , , , 3, , " 'PKR'", "#,##0 'PKR'", "-#,##0 'PKR' 'PKR'", "-", " 'PKR'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a308909708 = m(["", , 1, 2, 2, , , 0, 3, , " 'PLN'", "#,##0.00 'PLN'", "-#,##0.00 'PLN' 'PLN'", "-", " 'PLN'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a885186812 = m(["", , 1, 2, 2, , , 0, 3, , " 'QAR'", "#,##0.00 'QAR'", "-#,##0.00 'QAR' 'QAR'", "-", " 'QAR'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b2125162773 = m(["", , 1, 2, 2, , , 0, 3, , " 'RON'", "#,##0.00 'RON'", "-#,##0.00 'RON' 'RON'", "-", " 'RON'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1789706013 = m(["", , 1, 0, 0, , , , 3, , " 'RSD'", "#,##0 'RSD'", "-#,##0 'RSD' 'RSD'", "-", " 'RSD'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1964470119 = m(["", , 1, 2, 2, , , 0, 3, , " 'RUB'", "#,##0.00 'RUB'", "-#,##0.00 'RUB' 'RUB'", "-", " 'RUB'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1634773122 = m(["", , 1, 2, 2, , , 0, 3, , " 'SAR'", "#,##0.00 'SAR'", "-#,##0.00 'SAR' 'SAR'", "-", " 'SAR'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1526721165 = m(["", , 1, 2, 2, , , 0, 3, , " 'SEK'", "#,##0.00 'SEK'", "-#,##0.00 'SEK' 'SEK'", "-", " 'SEK'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1475927510 = m(["", , 1, 2, 2, , , 0, 3, , " 'SGD'", "#,##0.00 'SGD'", "-#,##0.00 'SGD' 'SGD'", "-", " 'SGD'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b561641720 = m(["", , 1, 2, 2, , , 0, 3, , " 'THB'", "#,##0.00 'THB'", "-#,##0.00 'THB' 'THB'", "-", " 'THB'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1958444360 = m(["", , 1, 3, 3, , , 0, 3, , " 'TND'", "#,##0.000 'TND'", "-#,##0.000 'TND' 'TND'", "-", " 'TND'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b254109227 = m(["", , 1, 2, 2, , , 0, 3, , " 'TRY'", "#,##0.00 'TRY'", "-#,##0.00 'TRY' 'TRY'", "-", " 'TRY'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b1275852328 = m(["", , 1, 2, 2, , , 0, 3, , " 'NT$'", "#,##0.00 'NT$'", "-#,##0.00 'NT$' 'NT$'", "-", " 'NT$'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a199558221 = m(["", , 1, 0, 0, , , , 3, , " 'TZS'", "#,##0 'TZS'", "-#,##0 'TZS' 'TZS'", "-", " 'TZS'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a130999030 = m(["", , 1, 2, 2, , , 0, 3, , " 'UAH'", "#,##0.00 'UAH'", "-#,##0.00 'UAH' 'UAH'", "-", " 'UAH'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a547725638 = m(["", , 1, 0, 0, , , , 3, , " 'UGX'", "#,##0 'UGX'", "-#,##0 'UGX' 'UGX'", "-", " 'UGX'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a613076992 = m(["", , 1, 2, 2, , , 0, 3, , " 'US$'", "#,##0.00 'US$'", "-#,##0.00 'US$' 'US$'", "-", " 'US$'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1131172273 = m(["", , 1, 2, 2, , , 0, 3, , " 'VEF'", "#,##0.00 'VEF'", "-#,##0.00 'VEF' 'VEF'", "-", " 'VEF'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1617162956 = m(["", , 1, 0, 0, , , , 3, , " 'VND'", "#,##0 'VND'", "-#,##0 'VND' 'VND'", "-", " 'VND'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a282785349 = m(["", , 1, 2, 2, , , 0, 3, , " 'ZAR'", "#,##0.00 'ZAR'", "-#,##0.00 'ZAR' 'ZAR'", "-", " 'ZAR'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a630952766 = m(["", , 1, 2, 2, , , 0, 3, , " 'ZMW'", "#,##0.00 'ZMW'", "-#,##0.00 'ZMW' 'ZMW'", "-", " 'ZMW'", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.b573308511 = m(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1173513924 = m(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tis'.'", few: "0 tis'.'", many: "0 tis'.'", other: "0 tis'.'" }, 4: { one: "00 tis'.'", few: "00 tis'.'", many: "00 tis'.'", other: "00 tis'.'" }, 5: { one: "000 tis'.'", few: "000 tis'.'", many: "000 tis'.'", other: "000 tis'.'" }, 6: { one: "0 mil'.'", few: "0 mil'.'", many: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", many: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", many: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mld'.'", few: "0 mld'.'", many: "0 mld'.'", other: "0 mld'.'" }, 10: { one: "00 mld'.'", few: "00 mld'.'", many: "00 mld'.'", other: "00 mld'.'" }, 11: { one: "000 mld'.'", few: "000 mld'.'", many: "000 mld'.'", other: "000 mld'.'" }, 12: { one: "0 bil'.'", few: "0 bil'.'", many: "0 bil'.'", other: "0 bil'.'" }, 13: { one: "00 bil'.'", few: "00 bil'.'", many: "00 bil'.'", other: "00 bil'.'" }, 14: { one: "000 bil'.'", few: "000 bil'.'", many: "000 bil'.'", other: "000 bil'.'" }, maxExponent: 14 }], p("cs").pluralGenerator({}))),
                (p.a618782214 = m(["", , 1, 0, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", l(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tis'.'", few: "0 tis'.'", many: "0 tis'.'", other: "0 tis'.'" }, 4: { one: "00 tis'.'", few: "00 tis'.'", many: "00 tis'.'", other: "00 tis'.'" }, 5: { one: "000 tis'.'", few: "000 tis'.'", many: "000 tis'.'", other: "000 tis'.'" }, 6: { one: "0 mil'.'", few: "0 mil'.'", many: "0 mil'.'", other: "0 mil'.'" }, 7: { one: "00 mil'.'", few: "00 mil'.'", many: "00 mil'.'", other: "00 mil'.'" }, 8: { one: "000 mil'.'", few: "000 mil'.'", many: "000 mil'.'", other: "000 mil'.'" }, 9: { one: "0 mld'.'", few: "0 mld'.'", many: "0 mld'.'", other: "0 mld'.'" }, 10: { one: "00 mld'.'", few: "00 mld'.'", many: "00 mld'.'", other: "00 mld'.'" }, 11: { one: "000 mld'.'", few: "000 mld'.'", many: "000 mld'.'", other: "000 mld'.'" }, 12: { one: "0 bil'.'", few: "0 bil'.'", many: "0 bil'.'", other: "0 bil'.'" }, 13: { one: "00 bil'.'", few: "00 bil'.'", many: "00 bil'.'", other: "00 bil'.'" }, 14: { one: "000 bil'.'", few: "000 bil'.'", many: "000 bil'.'", other: "000 bil'.'" }, maxExponent: 14 }], p("cs").pluralGenerator({}))),
                (p.a1114979047 = m(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", l("round"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (p.a1609705439 = k(function (e) {
                    var o = String(e).split("."),
                        t = o[0],
                        a = !o[1];
                    return 1 == e && a ? "one" : t >= 2 && t <= 4 && a ? "few" : a ? "other" : "many";
                })),
                (p.b1912819999 = b(p("cs").numberFormatter({ raw: "#,##0.00 'AED'" }))),
                (p.a233771680 = b(p("cs").numberFormatter({ raw: "#,##0 'ALL'" }))),
                (p.a1464230527 = b(p("cs").numberFormatter({ raw: "#,##0.00 'ARS'" }))),
                (p.b597662991 = b(p("cs").numberFormatter({ raw: "#,##0.00 'AU$'" }))),
                (p.a832605267 = b(p("cs").numberFormatter({ raw: "#,##0.00 'BAM'" }))),
                (p.b599446929 = b(p("cs").numberFormatter({ raw: "#,##0.00 'BDT'" }))),
                (p.a1891289208 = b(p("cs").numberFormatter({ raw: "#,##0.00 'BGN'" }))),
                (p.b1802465917 = b(p("cs").numberFormatter({ raw: "#,##0.000 'BHD'" }))),
                (p.b1288330491 = b(p("cs").numberFormatter({ raw: "#,##0.00 'R$'" }))),
                (p.a801002886 = b(p("cs").numberFormatter({ raw: "#,##0 'BYR'" }))),
                (p.b1977214053 = b(p("cs").numberFormatter({ raw: "#,##0.00 'CA$'" }))),
                (p.b2397280 = b(p("cs").numberFormatter({ raw: "#,##0.00 'CHF'" }))),
                (p.b461058342 = b(p("cs").numberFormatter({ raw: "#,##0 'CLP'" }))),
                (p.a1571611379 = b(p("cs").numberFormatter({ raw: "#,##0.00 'CN¥'" }))),
                (p.b2093514595 = b(p("cs").numberFormatter({ raw: "#,##0 'COP'" }))),
                (p.b1064054451 = b(p("cs").numberFormatter({ raw: "#,##0.00 'Kč'" }))),
                (p.a251102557 = b(p("cs").numberFormatter({ raw: "#,##0.00 'DKK'" }))),
                (p.a478351827 = b(p("cs").numberFormatter({ raw: "#,##0.00 'DZD'" }))),
                (p.b1412956077 = b(p("cs").numberFormatter({ raw: "#,##0.00 'EGP'" }))),
                (p.b1815548129 = b(p("cs").numberFormatter({ raw: "#,##0.00 '€'" }))),
                (p.a1930113484 = b(p("cs").numberFormatter({ raw: "#,##0.00 '£'" }))),
                (p.b1248911569 = b(p("cs").numberFormatter({ raw: "#,##0.00 'GHS'" }))),
                (p.a753939709 = b(p("cs").numberFormatter({ raw: "#,##0.00 'GTQ'" }))),
                (p.b1567994752 = b(p("cs").numberFormatter({ raw: "#,##0.00 'HK$'" }))),
                (p.a549967776 = b(p("cs").numberFormatter({ raw: "#,##0.00 'HRK'" }))),
                (p.b1225634232 = b(p("cs").numberFormatter({ raw: "#,##0.00 'HUF'" }))),
                (p.b1341934774 = b(p("cs").numberFormatter({ raw: "#,##0 'IDR'" }))),
                (p.a1491756529 = b(p("cs").numberFormatter({ raw: "#,##0.00 'ILS'" }))),
                (p.b1056832556 = b(p("cs").numberFormatter({ raw: "#,##0.00 'INR'" }))),
                (p.a1204870373 = b(p("cs").numberFormatter({ raw: "#,##0 'IQD'" }))),
                (p.b1114685504 = b(p("cs").numberFormatter({ raw: "#,##0 'ISK'" }))),
                (p.b1633578098 = b(p("cs").numberFormatter({ raw: "#,##0 'JP¥'" }))),
                (p.b1235148568 = b(p("cs").numberFormatter({ raw: "#,##0.00 'KES'" }))),
                (p.a1826981297 = b(p("cs").numberFormatter({ raw: "#,##0 '₩'" }))),
                (p.a1425578537 = b(p("cs").numberFormatter({ raw: "#,##0.000 'KWD'" }))),
                (p.a251188700 = b(p("cs").numberFormatter({ raw: "#,##0.00 'KZT'" }))),
                (p.a2054230567 = b(p("cs").numberFormatter({ raw: "#,##0 'LBP'" }))),
                (p.b1728979887 = b(p("cs").numberFormatter({ raw: "#,##0.00 'MAD'" }))),
                (p.b1443877669 = b(p("cs").numberFormatter({ raw: "#,##0.00 'MKD'" }))),
                (p.a1790027102 = b(p("cs").numberFormatter({ raw: "#,##0.00 'MX$'" }))),
                (p.b1502919909 = b(p("cs").numberFormatter({ raw: "#,##0.00 'MYR'" }))),
                (p.a1330176748 = b(p("cs").numberFormatter({ raw: "#,##0.00 'NGN'" }))),
                (p.b245615849 = b(p("cs").numberFormatter({ raw: "#,##0.00 'NOK'" }))),
                (p.a726585993 = b(p("cs").numberFormatter({ raw: "#,##0.00 'NZ$'" }))),
                (p.b1254177240 = b(p("cs").numberFormatter({ raw: "#,##0.00 'PEN'" }))),
                (p.a1465592105 = b(p("cs").numberFormatter({ raw: "#,##0.00 'PHP'" }))),
                (p.b109605846 = b(p("cs").numberFormatter({ raw: "#,##0 'PKR'" }))),
                (p.a663381231 = b(p("cs").numberFormatter({ raw: "#,##0.00 'PLN'" }))),
                (p.a1348102271 = b(p("cs").numberFormatter({ raw: "#,##0.00 'QAR'" }))),
                (p.b1778421648 = b(p("cs").numberFormatter({ raw: "#,##0.00 'RON'" }))),
                (p.a1485301566 = b(p("cs").numberFormatter({ raw: "#,##0 'RSD'" }))),
                (p.b1091916670 = b(p("cs").numberFormatter({ raw: "#,##0.00 'RUB'" }))),
                (p.a538755645 = b(p("cs").numberFormatter({ raw: "#,##0.00 'SAR'" }))),
                (p.b406600984 = b(p("cs").numberFormatter({ raw: "#,##0.00 'SEK'" }))),
                (p.a1168002321 = b(p("cs").numberFormatter({ raw: "#,##0.00 'SGD'" }))),
                (p.b553909261 = b(p("cs").numberFormatter({ raw: "#,##0.00 'THB'" }))),
                (p.a533403831 = b(p("cs").numberFormatter({ raw: "#,##0.000 'TND'" }))),
                (p.a389663430 = b(p("cs").numberFormatter({ raw: "#,##0.00 'TRY'" }))),
                (p.b68997632 = b(p("cs").numberFormatter({ raw: "#,##0.00 'NT$'" }))),
                (p.b1272016620 = b(p("cs").numberFormatter({ raw: "#,##0 'TZS'" }))),
                (p.b556882491 = b(p("cs").numberFormatter({ raw: "#,##0.00 'UAH'" }))),
                (p.a931238715 = b(p("cs").numberFormatter({ raw: "#,##0 'UGX'" }))),
                (p.b1876202021 = b(p("cs").numberFormatter({ raw: "#,##0.00 'US$'" }))),
                (p.a383716970 = b(p("cs").numberFormatter({ raw: "#,##0.00 'VEF'" }))),
                (p.b275942795 = b(p("cs").numberFormatter({ raw: "#,##0 'VND'" }))),
                (p.b146473898 = b(p("cs").numberFormatter({ raw: "#,##0.00 'ZAR'" }))),
                (p.a2056781437 = b(p("cs").numberFormatter({ raw: "#,##0.00 'ZMW'" }))),
                (p.a1474917837 = f({ 1: p("cs").numberFormatter({ raw: "0" }) }, { pattern: "d. M.", timeSeparator: ":" })),
                (p.a2127662256 = f({ 1: p("cs").numberFormatter({ raw: "0" }) }, { pattern: "d. M. y", timeSeparator: ":" })),
                (p.a1698889183 = f({ 1: p("cs").numberFormatter({ raw: "0" }), 2: p("cs").numberFormatter({ raw: "00" }) }, { pattern: "h:mm a", timeSeparator: ":", dayPeriods: { am: "dop.", pm: "odp." } })),
                (p.b1548936620 = f({ 1: p("cs").numberFormatter({ raw: "0" }) }, { pattern: "E d. M.", timeSeparator: ":", days: { E: { 1: { sun: "ne", mon: "po", tue: "út", wed: "st", thu: "čt", fri: "pá", sat: "so" } } } })),
                (p.a1506271185 = f({ 1: p("cs").numberFormatter({ raw: "0" }) }, { pattern: "E d. M. y", timeSeparator: ":", days: { E: { 1: { sun: "ne", mon: "po", tue: "út", wed: "st", thu: "čt", fri: "pá", sat: "so" } } } })),
                (p.b1541548452 = f({ 1: p("cs").numberFormatter({ raw: "0" }) }, { pattern: "d. MMMM", timeSeparator: ":", months: { M: { 4: { 1: "ledna", 2: "února", 3: "března", 4: "dubna", 5: "května", 6: "června", 7: "července", 8: "srpna", 9: "září", 10: "října", 11: "listopadu", 12: "prosince" } } } })),
                (p.b1007751626 = f({ 1: p("cs").numberFormatter({ raw: "0" }), 2: p("cs").numberFormatter({ raw: "00" }) }, { pattern: "d. MMMM y H:mm:ss z", timeSeparator: ":", months: { M: { 4: { 1: "ledna", 2: "února", 3: "března", 4: "dubna", 5: "května", 6: "června", 7: "července", 8: "srpna", 9: "září", 10: "října", 11: "listopadu", 12: "prosince" } } }, gmtFormat: "GMT{0}", gmtZeroFormat: "GMT", hourFormat: ["+H;-H", "+H:mm;-H:mm"] })),
                (p.a343112203 = f({ 1: p("cs").numberFormatter({ raw: "0" }), 2: p("cs").numberFormatter({ raw: "00" }) }, { pattern: "d. M. y h:mm a", timeSeparator: ":", dayPeriods: { am: "dop.", pm: "odp." } })),
                (p.a314787369 = f({ 1: p("cs").numberFormatter({ raw: "0" }) }, { pattern: "d. MMMM y", timeSeparator: ":", months: { M: { 4: { 1: "ledna", 2: "února", 3: "března", 4: "dubna", 5: "května", 6: "června", 7: "července", 8: "srpna", 9: "září", 10: "října", 11: "listopadu", 12: "prosince" } } } })),
                (p.a120950760 = f({ 1: p("cs").numberFormatter({ raw: "0" }), 2: p("cs").numberFormatter({ raw: "00" }) }, { pattern: "d. M. h:mm a", timeSeparator: ":", dayPeriods: { am: "dop.", pm: "odp." } })),
                (p.b1393169789 = f({ 2: p("cs").numberFormatter({ raw: "00" }) }, { pattern: "dd.MM.yy", timeSeparator: ":" })),
                (p.a193787367 = f({ 1: p("cs").numberFormatter({ raw: "0" }) }, { pattern: "y", timeSeparator: ":" })),
                (p.a1869688944 = f({ 1: p("cs").numberFormatter({ raw: "0" }) }, { pattern: "LLLL y", timeSeparator: ":", months: { L: { 4: { 1: "leden", 2: "únor", 3: "březen", 4: "duben", 5: "květen", 6: "červen", 7: "červenec", 8: "srpen", 9: "září", 10: "říjen", 11: "listopad", 12: "prosinec" } } } })),
                (p.b1867729597 = f({ 1: p("cs").numberFormatter({ raw: "0" }), 2: p("cs").numberFormatter({ raw: "00" }) }, { pattern: "EEEE d. MMMM y H:mm:ss zzzz", timeSeparator: ":", days: { E: { 4: { sun: "neděle", mon: "pondělí", tue: "úterý", wed: "středa", thu: "čtvrtek", fri: "pátek", sat: "sobota" } } }, months: { M: { 4: { 1: "ledna", 2: "února", 3: "března", 4: "dubna", 5: "května", 6: "června", 7: "července", 8: "srpna", 9: "září", 10: "října", 11: "listopadu", 12: "prosince" } } }, gmtFormat: "GMT{0}", gmtZeroFormat: "GMT", hourFormat: "+HH:mm;-HH:mm" })),
                (p.a5886621 = f({ 1: p("cs").numberFormatter({ raw: "0" }), 2: p("cs").numberFormatter({ raw: "00" }) }, { pattern: "d. M. y H:mm:ss", timeSeparator: ":" })),
                (p.b2146064057 = f({ 1: p("cs").numberFormatter({ raw: "0" }), 2: p("cs").numberFormatter({ raw: "00" }) }, { pattern: "dd. MM. y", timeSeparator: ":" })),
                (p.b737825276 = f({ 1: p("cs").numberFormatter({ raw: "0" }), 2: p("cs").numberFormatter({ raw: "00" }) }, { pattern: "H:mm", timeSeparator: ":" })),
                (p.a121467190 = f({ 1: p("cs").numberFormatter({ raw: "0" }), 2: p("cs").numberFormatter({ raw: "00" }) }, { pattern: "E h:mm a", timeSeparator: ":", days: { E: { 1: { sun: "ne", mon: "po", tue: "út", wed: "st", thu: "čt", fri: "pá", sat: "so" } } }, dayPeriods: { am: "dop.", pm: "odp." } })),
                (p.a2126977063 = f({ 1: p("cs").numberFormatter({ raw: "0" }) }, { pattern: "LLLL y", timeSeparator: ":", months: { L: { 4: { 1: "leden", 2: "únor", 3: "březen", 4: "duben", 5: "květen", 6: "červen", 7: "červenec", 8: "srpen", 9: "září", 10: "říjen", 11: "listopad", 12: "prosinec" } } } })),
                (p.b344458800 = f({ 1: p("cs").numberFormatter({ raw: "0" }) }, { pattern: "d. M. y", timeSeparator: ":" })),
                (p.a1474232644 = f({}, { pattern: "LLLL", timeSeparator: ":", months: { L: { 4: { 1: "leden", 2: "únor", 3: "březen", 4: "duben", 5: "květen", 6: "červen", 7: "červenec", 8: "srpen", 9: "září", 10: "říjen", 11: "listopad", 12: "prosinec" } } } })),
                (p.b1567489212 = f({}, { pattern: "cccc", timeSeparator: ":", days: { c: { 4: { sun: "neděle", mon: "pondělí", tue: "úterý", wed: "středa", thu: "čtvrtek", fri: "pátek", sat: "sobota" } } } })),
                (p.a1083510756 = z(p("cs").dateToPartsFormatter({ skeleton: "MMMd" }))),
                (p.b1416022663 = z(p("cs").dateToPartsFormatter({ skeleton: "yMMMd" }))),
                (p.a862728630 = z(p("cs").dateToPartsFormatter({ skeleton: "hm" }))),
                (p.b797654243 = z(p("cs").dateToPartsFormatter({ skeleton: "MMMEd" }))),
                (p.b973778904 = z(p("cs").dateToPartsFormatter({ skeleton: "yMMMEd" }))),
                (p.b790266075 = z(p("cs").dateToPartsFormatter({ skeleton: "MMMMd" }))),
                (p.b1399158707 = z(p("cs").dateToPartsFormatter({ datetime: "long" }))),
                (p.a770970772 = z(p("cs").dateToPartsFormatter({ skeleton: "yMMMdhm" }))),
                (p.a1216709568 = z(p("cs").dateToPartsFormatter({ date: "long" }))),
                (p.a1935867967 = z(p("cs").dateToPartsFormatter({ skeleton: "MMMdhm" }))),
                (p.a796614604 = z(p("cs").dateToPartsFormatter({ date: "short" }))),
                (p.b1911395536 = z(p("cs").dateToPartsFormatter({ skeleton: "y" }))),
                (p.a1478281863 = z(p("cs").dateToPartsFormatter({ skeleton: "yMMM" }))),
                (p.a2035830618 = z(p("cs").dateToPartsFormatter({ datetime: "full" }))),
                (p.a1820803828 = z(p("cs").dateToPartsFormatter({ datetime: "medium" }))),
                (p.b1394781680 = z(p("cs").dateToPartsFormatter({ skeleton: "yMMdd" }))),
                (p.a1451959117 = z(p("cs").dateToPartsFormatter({ time: "short" }))),
                (p.b29706177 = z(p("cs").dateToPartsFormatter({ skeleton: "Ehm" }))),
                (p.b1416707856 = z(p("cs").dateToPartsFormatter({ skeleton: "yMMMM" }))),
                (p.b1180619353 = z(p("cs").dateToPartsFormatter({ date: "medium" }))),
                (p.a1082825563 = z(p("cs").dateToPartsFormatter({ skeleton: "MMMM" }))),
                (p.b1958896293 = z(p("cs").dateToPartsFormatter({ skeleton: "EEEE" }))),
                (p.b1340149059 = h(p("cs").numberFormatter({}), p("cs").pluralGenerator({}), { "relativeTime-type-future": { "relativeTimePattern-count-one": "za {0} den", "relativeTimePattern-count-few": "za {0} dny", "relativeTimePattern-count-many": "za {0} dne", "relativeTimePattern-count-other": "za {0} dní" }, "relativeTime-type-past": { "relativeTimePattern-count-one": "před {0} dnem", "relativeTimePattern-count-few": "před {0} dny", "relativeTimePattern-count-many": "před {0} dne", "relativeTimePattern-count-other": "před {0} dny" }, "relative-type--2": "předevčírem", "relative-type--1": "včera", "relative-type-0": "dnes", "relative-type-1": "zítra", "relative-type-2": "pozítří" })),
                (p.b1161681758 = j(p("cs").numberFormatter({}), p("cs").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "sekundy", one: "{0} sekunda", few: "{0} sekundy", many: "{0} sekundy", other: "{0} sekund", perUnitPattern: "{0} za sekundu" } })),
                (p.a1246322242 = j(p("cs").numberFormatter({}), p("cs").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "minuty", one: "{0} minuta", few: "{0} minuty", many: "{0} minuty", other: "{0} minut", perUnitPattern: "{0} za minutu" } })),
                (p.a319849810 = j(p("cs").numberFormatter({}), p("cs").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "hodiny", one: "{0} hodina", few: "{0} hodiny", many: "{0} hodiny", other: "{0} hodin", perUnitPattern: "{0} za hodinu" } })),
                (p.a2006692707 = j(p("cs").numberFormatter({}), p("cs").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "s", one: "{0} s", few: "{0} s", many: "{0} s", other: "{0} s", perUnitPattern: "{0}/s" } })),
                (p.a1111164163 = j(p("cs").numberFormatter({}), p("cs").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "m", one: "{0} m", few: "{0} m", many: "{0} m", other: "{0} m", perUnitPattern: "{0}/m" } })),
                (p.b170612717 = j(p("cs").numberFormatter({}), p("cs").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "h", one: "{0} h", few: "{0} h", many: "{0} h", other: "{0} h", perUnitPattern: "{0}/h" } })),
                (p.a1394316209 = j(p("cs").numberFormatter({}), p("cs").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "d", one: "{0} d", few: "{0} d", many: "{0} d", other: "{0} d", perUnitPattern: "{0}/d" } })),
                (p.a1975107696 = j(p("cs").numberFormatter({}), p("cs").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "dny", one: "{0} den", few: "{0} dny", many: "{0} dne", other: "{0} dní", perUnitPattern: "{0} za den" } })),
                (p.b499082283 = j(p("cs").numberFormatter({}), p("cs").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "m", one: "{0} m", few: "{0} m", many: "{0} m", other: "{0} m", perUnitPattern: "{0}/měs." } })),
                (p.b703954540 = j(p("cs").numberFormatter({}), p("cs").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "měsíce", one: "{0} měsíc", few: "{0} měsíce", many: "{0} měsíce", other: "{0} měsíců", perUnitPattern: "{0} za měsíc" } })),
                (p.a1233949676 = j(p("cs").numberFormatter({}), p("cs").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "r", one: "{0} r", few: "{0} r", many: "{0} r", other: "{0} r", perUnitPattern: "{0}/r" } })),
                (p.a1800639339 = j(p("cs").numberFormatter({}), p("cs").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "roky", one: "{0} rok", few: "{0} roky", many: "{0} roku", other: "{0} let", perUnitPattern: "{0} za rok" } })),
                (p.a80927530 = j(p("cs").numberFormatter({}), p("cs").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "s", one: "{0} s", few: "{0} s", many: "{0} s", other: "{0} s", perUnitPattern: "{0}/s" } })),
                (p.a1714607498 = j(p("cs").numberFormatter({}), p("cs").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "min", one: "{0} min", few: "{0} min", many: "{0} min", other: "{0} min", perUnitPattern: "{0}/min" } })),
                (p.b1236234118 = j(p("cs").numberFormatter({}), p("cs").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "h", one: "{0} h", few: "{0} h", many: "{0} h", other: "{0} h", perUnitPattern: "{0}/h" } })),
                (p.b20266801 = j(p("cs").numberFormatter({ minimumFractionDigits: 1, maximumFractionDigits: 1, round: "truncate" }), p("cs").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "s", one: "{0} s", few: "{0} s", many: "{0} s", other: "{0} s", perUnitPattern: "{0}/s" } })),
                a("d58baa7f", p.a827863013),
                a("ia24dc8d", p.b521027023),
                a("iab73d4b", p.b573964695),
                a("i3b7a017", p.b1161681758),
                a("ie5d110f", p.a1246322242),
                a("df5f11b3", p.a319849810),
                a("e8733ed9", p.a2006692707),
                a("be59d8c3", p.a1111164163),
                a("i3d087db", p.b170612717),
                a("ga8d18c9", p.a1394316209),
                a("a91e7d49", p.a1975107696),
                a("id952a69", p.b499082283),
                a("ga09ab65", p.b703954540),
                a("c83b901d", p.a1233949676),
                a("a55b9fed", p.a1800639339),
                a("ccaa970f", p.a1083510756),
                a("jade381b", p.b1416022663),
                a("d725a289", p.a862728630),
                a("g08cbabb", p.b1429047994),
                a("c333da63", p.b1340149059),
                a("h8054d91", p.b797654243),
                a("i61fef37", p.a80927530),
                a("ba705e27", p.a1714607498),
                a("j86b0d8d", p.b1236234118),
                a("f668e929", p.a98449830),
                a("i2785009", p.a1714886803),
                a("c778d80b", p.a2044652564),
                a("e8d93005", p.b76845684),
                a("d46781af", p.b20266801),
                a("ba316f05", p.b1919193361),
                a("c0bdd345", p.a1307298669),
                a("aa2aa1a1", p.b973778904),
                a("da44942d", p.b790266075),
                a("a54d3ef5", p.b1399158707),
                a("bfbc051d", p.a770970772),
                a("ba2e82a1", p.a1216709568),
                a("fc209bb7", p.a1935867967),
                a("cf8abf59", p.b800117329),
                a("a9f397f3", p.a796614604),
                a("d857e44d", p.b1912819999),
                a("cb87e3db", p.a233771680),
                a("a9d5ffd1", p.a1464230527),
                a("a0e8371d", p.b597662991),
                a("gcc50dc9", p.a832605267),
                a("a6a43585", p.b599446929),
                a("a0cc8f2d", p.a1891289208),
                a("i31c32c5", p.b1802465917),
                a("i7dc69e9", p.b1288330491),
                a("c14a6c03", p.a801002886),
                a("jaa3d537", p.b1977214053),
                a("a824080b", p.b2397280),
                a("d9c0bedb", p.b461058342),
                a("bf8c0613", p.a1571611379),
                a("i8163625", p.b2093514595),
                a("adb53ba1", p.b1064054451),
                a("iabf697d", p.a251102557),
                a("a1a0555b", p.a478351827),
                a("f266f3d9", p.b1412956077),
                a("a9a8652b", p.b1815548129),
                a("dbf40761", p.a1930113484),
                a("b0d993d9", p.b1248911569),
                a("ac1308e1", p.a753939709),
                a("a7889ab3", p.b1567994752),
                a("c614f5cd", p.a549967776),
                a("i55d57e3", p.b1225634232),
                a("e4b6002b", p.b1341934774),
                a("d28e983b", p.a1491756529),
                a("e8c9232d", p.b1056832556),
                a("c8994ae1", p.a1204870373),
                a("f821c2a5", p.b1114685504),
                a("j348b9c9", p.b1633578098),
                a("i6f93b9b", p.b1235148568),
                a("c6150bd5", p.a1826981297),
                a("i8921e09", p.a1425578537),
                a("ef239279", p.a251188700),
                a("hecdb149", p.a2054230567),
                a("fdd039b7", p.b1728979887),
                a("f30c2c37", p.b1443877669),
                a("d9ea7bff", p.a1790027102),
                a("ea3df4b7", p.b1502919909),
                a("jaac21bb", p.a1330176748),
                a("hb435ced", p.b245615849),
                a("ce699d81", p.a726585993),
                a("bc56d3d7", p.b1254177240),
                a("f8561913", p.a1465592105),
                a("g6485d53", p.b109605846),
                a("ff561cc1", p.a663381231),
                a("b42011d3", p.a1348102271),
                a("a6660bcd", p.b1778421648),
                a("f9b80449", p.a1485301566),
                a("gdee4d5d", p.b1091916670),
                a("h36f2103", p.a538755645),
                a("a19ad037", p.b406600984),
                a("g713f699", p.a1168002321),
                a("ff2e39af", p.b553909261),
                a("be34316d", p.a533403831),
                a("aef81b75", p.a389663430),
                a("fcce70a5", p.b68997632),
                a("jc9d352f", p.b1272016620),
                a("be1cb8c5", p.b556882491),
                a("j9371501", p.a931238715),
                a("j7d4397d", p.b1876202021),
                a("d61441dd", p.a383716970),
                a("e2a99e97", p.b275942795),
                a("f7ce19ab", p.b146473898),
                a("b2a0213f", p.a2056781437),
                a("d7d71245", p.b1911395536),
                a("a2f2faab", p.a1478281863),
                a("g8d1b99b", p.a2035830618),
                a("d0a77c9b", p.a1820803828),
                a("e18e399b", p.b1394781680),
                a("b6ca7bcb", p.a1451959117),
                a("h0e4cdf5", p.b29706177),
                a("g727ddcf", p.b1416707856),
                a("h3629783", p.b1180619353),
                a("a20c68af", p.a1082825563),
                a("ja781451", p.b573308511),
                a("cfa1a7b9", p.a1173513924),
                a("f3b9b9a7", p.b1958896293),
                a("eefcd267", p.a618782214),
                a("fa8afc43", p.a1114979047);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/i18n/cs.4042d49a.js.map
