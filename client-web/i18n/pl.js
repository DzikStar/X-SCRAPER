"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["i18n/pl"],
    {
        532922: (e, a, o) => {
            var i = o(292426)._register("pl", {
                get emoji() {
                    return o.e("i18n/emoji-pl").then(o.t.bind(o, 893389, 23));
                },
            });
            function n(e, a, o, i, n) {
                switch (((t = e), (c = String(t).split(".")), (r = c[0]), (w = !c[1]), (z = r.slice(-1)), (s = r.slice(-2)), 1 == t && w ? "one" : w && z >= 2 && z <= 4 && (s < 12 || s > 14) ? "few" : (w && 1 != r && (0 == z || 1 == z)) || (w && z >= 5 && z <= 9) || (w && s >= 12 && s <= 14) ? "many" : "other")) {
                    case "few":
                        return a;
                    case "many":
                        return o;
                    case "one":
                        return i;
                    default:
                        return n;
                }
                var t, c, r, w, z, s;
            }
            i("c39b0e24", "X"),
                i("jb38600c", "Brak"),
                i("f07eac34", "Konto parodystyczne"),
                i("a41b5c2e", "Konto fanowskie"),
                i("i428ea62", "Konto komentatorskie"),
                i("ac0d27be", "Przepraszamy, to konto zostało zawieszone."),
                i("bcee7444", "Aktualizacja konta nie powiodła się."),
                i("e0cbf77a", "Dodaj numer telefonu"),
                i("f377195c", "Serwis X jest przeciążony. Zaczekaj chwilę i spróbuj ponownie."),
                i("d67f9456", "Ta czynność została zablokowana."),
                i("e0ece1b6", "Nie można załączyć multimediów, spróbuj przesłać jeszcze raz."),
                i("i82e8f04", "Aby chronić naszych użytkowników przed spamem i innymi szkodliwymi aktywnościami, tymczasowo zablokowaliśmy na tym koncie możliwość obserwowania kolejnych kont. Upewnij się, że znasz Zasady serwisu X."),
                i("jf7be47a", "Aby chronić naszych użytkowników przed spamem i innymi szkodliwymi aktywnościami, tymczasowo zablokowaliśmy możliwość wysyłania wpisów za pomocą tego konta. Upewnij się, że znasz Zasady serwisu X."),
                i("g75fec74", "Twój dzienny limit tej czynności został osiągnięty. Dodaj numer telefonu do swojego konta, aby zlikwidować ten limit."),
                i("abb8b6e0", "Ten numer telefonu jest już zarejestrowany."),
                i("f30bd1fc", "Nie możemy wysłać SMS-a na ten numer, ponieważ nie współpracujemy z tym operatorem."),
                i("i54e550c", "Nie możemy zweryfikować tego numeru telefonu."),
                i("h154702a", "Nie możemy przetworzyć tego żądania, ponieważ uważamy, że ten link może być szkodliwy albo uważają tak nasi partnerzy. Odwiedź nasze Centrum Pomocy, aby dowiedzieć się więcej."),
                i("c8cb0b4c", "Wprowadzone hasło jest nieprawidłowe."),
                i("b1b54f9e", "Przesyłane przez Ciebie pliki są nieprawidłowe."),
                i("i859a9d4", "Dowiedz się więcej"),
                i("d6e72ce1", function (e) {
                    return "Maksymalna liczba znaków to " + e.count + ". Wpisz krótsze hasło.";
                }),
                i("a34dccd7", function (e) {
                    return "Minimalna liczba znaków to " + e.count + ". Wpisz dłuższe hasło.";
                }),
                i("jea2ff04", "To hasło jest zbyt proste. Wprowadź takie, które trudniej będzie odgadnąć."),
                i("ce482c36", "Co najmniej jedno pole zawiera nieprawidłowe dane. Sprawdź je i spróbuj ponownie."),
                i("db626d88", "Dodaj numer telefonu, aby zakończyć wprowadzanie ustawień swojego konta."),
                i("i3ee2550", "Wypełnij wszystkie wymagane pola."),
                i("cf18a258", "To żądanie wygląda na wysłane automatycznie. Aby chronić naszych użytkowników przed spamem i inną niepożądaną aktywnością, nie możemy w tej chwili ukończyć tego działania. Spróbuj ponownie później."),
                i("h7ffa648", "Limit weryfikacji przez SMS został przekroczony."),
                i("b87ceb1c", "Kod weryfikacyjny otrzymany w SMS-ie jest nieprawidłowy."),
                i("f87e2faa", "Nie mogliśmy znaleźć tego użytkownika."),
                i("cdaf8222", "Limit dostępu został przekroczony. Odczekaj jakiś czas i spróbuj ponownie."),
                i("c1b0e710", "To konto zostało zawieszone — nie możesz wykonać tej czynności."),
                i("bfb22fae", "Niestety, ten wpis został usunięty."),
                i("a23cd3ba", "Niektóre akcje dotyczące tego wpisu zostały wyłączone przez zespół serwisu X."),
                i("bb558892", "Ten użytkownik ma już zweryfikowany numer telefonu."),
                i("hae1c934", "Coś poszło nie tak, ale nie martw się, to nie Twoja wina."),
                i("e784846c", "Trwa weryfikacja Twojego profilu. Do momentu zakończenia tego procesu nie możesz zmienić nazwy konta ani zdjęcia profilowego."),
                i("h1cbdd30", "Odśwież stronę i spróbuj ponownie."),
                i("a5077d3e", "Odśwież"),
                i("b2648ba4", "Być może nie możesz wykonać tej czynności. Odśwież witrynę i spróbuj ponownie."),
                i("bcd6bb0e", "Członek"),
                i("hd8c22d2", "Mod"),
                i("c3153100", "Admin"),
                i("fa9adac1", function (e) {
                    return "Wyszukaj „" + e.query + "”";
                }),
                i("jcec6620", "Odpowiedź na wpis została ukryta"),
                i("f75d1806", "Premium"),
                i("j4a7d9a6", "Basic"),
                i("hedf9d7c", "Premium+"),
                i("f5de898e", "Sześciokątne zdjęcie profilowe"),
                i("fcc8734a", "Kwadratowe zdjęcie profilowe"),
                i("c64e46f8", "Ten członek został usunięty z grupy dyskusyjnej, jego wpisy nie są zatem widoczne."),
                i("b3f1cb42", "Moderator ukrył ten wpis, ponieważ narusza on zasadę grupy dyskusyjnej."),
                i("cbd2dc9c", "Ten wpis został przez Ciebie zgłoszony."),
                i("cfbea177", function (e) {
                    return "Pokój użytkownika " + e.name;
                }),
                i("ab4fc8bc", "Pokój"),
                i("jd859c9c", "Usunięto Cię z tego Pokoju."),
                i("c60ed9b0", "Nie masz autoryzacji do dołączenia do tego Pokoju."),
                i("d8227e16", "Nie masz autoryzacji do utworzenia tego Pokoju"),
                i("f027fed8", "Obraz w obrazie"),
                i("hd50e064", "Nie teraz"),
                i("i76d640e", "Potrzebujemy uprawnienia od Ciebie"),
                i("fdaa0be8", "Aby móc mówić w tym Pokoju, musisz udzielić serwisowi X dostępu do swojego mikrofonu. Sprawdź ustawienia przeglądarki. "),
                i("gea6cc1a", "Na pewno?"),
                i("hb568af4", "Wycisz"),
                i("f7c8617a", "Czym są klipy?"),
                i("ecc7d2ec", "Każdy uczestnik Pokoju może utworzyć i udostępnić klip ze spotkania. Wszystkie klipy wygasają po 30 dniach."),
                i("d575ee02", "Kto może utworzyć klip?"),
                i("dbc477a4", "Każdy (nawet słuchacze) może tworzyć klipy. Wystarczy, że te osoby zalogują się do serwisu X."),
                i("ed1d1cc0", "Każdy, kto zabierze głos, może stać się częścią klipu"),
                i("e5d193c8", "Jeśli zabierzesz głos, możesz stać się częścią klipu. W takim przypadku poinformujemy Cię o tym."),
                i("e1547ec0", "Utwórz klip z Pokoju"),
                i("i154245e", "Słyszysz coś zabawnego lub ciekawego? Utwórz klip i udostępnij go."),
                i("j24c37b2", "Rozumiem"),
                i("g1c6f16e", "Nagrane Pokoje"),
                i("e5609214", "Rozpocznij Pokój na żywo"),
                i("g665514c", "Tylko mówcy są nagrywani"),
                i("ja196c5a", "Goście, którzy zabiorą głos, będą nagrani. Nagranie jest publiczne i każdy może je odsłuchać."),
                i("dd317ed6", "Odtwórz ponownie lub udostępnij wybranym osobom"),
                i("jf03b37c", "Odsłuchaj nagranie w dowolnym momencie. Możesz też udostępnić je za pomocą wpisu."),
                i("fd05976b", "Dowiedz się więcej"),
                i("b4f91a8a", "Nagrywanie jest włączone"),
                i("gb418012", "Zapraszamy do korzystania z Pokojów"),
                i("fec3c1e0", "To tutaj odbywają się rozmowy na żywo."),
                i("j32eb4f8", "Dodaj do 10 mówców"),
                i("j4f133a6", "Możesz zaprosić do rozmowy dowolnych użytkowników serwisu X."),
                i("ed434ac6", "Pokoje są publiczne — każdy może do nich dołączyć"),
                i("e0025688", "Twój Pokój, Twoje zasady"),
                i("c1bc6f86", "Jako host udzielasz głosu innym osobom. Możesz też usuwać niepożądane osoby ze swojego Pokoju."),
                i("b0bc8330", "Możesz też blokować i zgłaszać użytkowników w Pokoju."),
                i("cb17a0f3", "Dowiedz się więcej"),
                i("dcd77941", "Dowiedz się więcej"),
                i("cc724cb0", "Utwórz klip"),
                i("cfd2f35e", "Anuluj"),
                i("c1df579e", "Dalej"),
                i("e3146662", "Nie udało się utworzyć napisów do tego klipu"),
                i("f123fea8", "Zgłoś ten Pokój"),
                i("d0aebc28", "Opisz problem"),
                i("g971a4e8", "Samookaleczenie"),
                i("b96e6682", "Przemoc"),
                i("e5bf9b3a", "Treści pornograficzne"),
                i("d2a34320", "Bezpieczeństwo dzieci"),
                i("a9ba3e28", "Informacje osobiste"),
                i("d5519f4a", "Nadużycie"),
                i("eb55363c", "Pokój został zgłoszony"),
                i("i65de934", "Słuchasz anonimowo"),
                i("b1037050", "Zarządzaj Pokojem"),
                i("ic107434", "Włącz aparat"),
                i("d7e0329c", "Wyłącz aparat"),
                i("b772cd66", "Gotowe"),
                i("b3bd3e38", "Najpopularniejsze wpisy na początku"),
                i("d88cf16c", "Najnowsze wpisy na początku"),
                i("bd4ad3ea", "Szeroka"),
                i("ca1180a0", "Średnia"),
                i("c86ff1b0", "Wąska"),
                i("eed02406", "Mały"),
                i("cffb04d6", "Standardowy"),
                i("af15cef8", "Wpis z uwagami"),
                i("ab28945c", "Profil uczestnika programu"),
                i("e2462db4", "Najczęściej udostępniane w Twojej sieci · Ostatnie 24 godziny"),
                i("ad16f482", "Wydarzenie"),
                i("c20aaf3e", "Błąd"),
                i("edf7bc2e", "Najpopularniejsze"),
                i("fa884026", "Lista"),
                i("fa98627a", "Profil"),
                i("a9ae1e78", "Szukaj"),
                i("a2a3824a", "Temat"),
                i("a6d5b010", "Oś czasu"),
                i("h5860a68", "Grok"),
                i("a990900c", "O mnie"),
                i("h02a6fe6", "Grupy dyskusyjne"),
                i("a15648a4", "Uwagi Społeczności"),
                i("j359a2a9", function (e) {
                    return e.handle + " • " + e.itemName;
                }),
                i("j5ec9765", function (e) {
                    return e.handle + " • Folder Zakładek";
                }),
                i("ce5deee7", function (e) {
                    return e.handle + " • Wiadomości";
                }),
                i("d80c77dc", "Te odpowiedzi zostały ukryte"),
                i("ef939f4b", function (e) {
                    return "Odpowiedzi zostały ukryte przez użytkownika @" + e.screenName;
                }),
                i("g40ff2b4", "Nie udało się zmniejszyć pliku. Jest on za duży."),
                i("b8098028", "Co najmniej jeden obraz jest za duży i nie można zmienić jego wymiarów."),
                i("b36f4170", "Plik jest pusty."),
                i("hab3781e", "Co najmniej jeden z plików nie jest obrazem."),
                i("f6c4fb02", "Nie można przetworzyć Twojego GIF-a. Zajrzyj do wskazówek dotyczących przesyłania GIF-ów."),
                i("g0af3dd2", "Twój GIF nie jest kompatybilny. Zajrzyj do wskazówek dotyczących przesyłania GIF-ów."),
                i("b8c8b0be", "Nie udało się przetworzyć Twojego filmu. Skorzystaj ze wskazówek dotyczących przesyłania plików wideo."),
                i("ica6d718", "Twój plik wideo jest nieobsługiwany. Skorzystaj ze wskazówek dotyczących przesyłania plików wideo."),
                i("b28d44f7", function (e) {
                    return "Twój plik GIF jest za duży. Rozmiar pliku GIF nie może przekraczać " + e.limit + " MB.";
                }),
                i("i1db7d13", function (e) {
                    return "Twój plik wideo jest za duży. Rozmiar wideo nie może przekraczać " + e.limit + " MB.";
                }),
                i("baac0ed7", function (e) {
                    return "Twój plik jest zbyt duży. Rozmiar filmu nie może przekraczać " + e.limit + " GB";
                }),
                i("a22385bb", function (e) {
                    return "Twój film jest Zbyt długi czas trwania. Spróbuj skrócić go do maksymalnie " + e.limit + " s.";
                }),
                i("be0440bf", function (e) {
                    return "Twój film jest Zbyt długi czas trwania. Spróbuj skrócić go do maksymalnie " + e.limit + " min.";
                }),
                i("feeba512", "Nie można przetworzyć Twojego obrazu. Zajrzyj do wskazówek dotyczących przesyłania obrazów."),
                i("db123c02", "Twój obraz nie jest kompatybilny. Zajrzyj do wskazówek dotyczących przesyłania obrazów."),
                i("db6001e7", function (e) {
                    return "Twój plik obrazu jest za duży. Rozmiar obrazu nie może przekraczać " + e.limit + " MB.";
                }),
                i("eb96d952", "Twój obraz nie jest wystarczająco wysoki i szeroki"),
                i("b3880588", "Upłynął limit czasu sesji przesyłania."),
                i("ca058b68", "Nie udało się załadować niektórych multimediów."),
                i("id24379c", "Niektóre Twoje pliki multimedialne nie zostały przesłane."),
                i("h4d7cbcc", "Nie udało się dodać multimediów. Spróbuj ponownie."),
                i("aaa798fc", "Podnieś poziom"),
                i("f13bb672", "Zasubskrybuj usługę Premium"),
                i("ab0decc0", "Subskrybuj"),
                i("e4e92f35", function (e) {
                    return "Podnieś poziom subskrypcji do poziomu " + e.tier;
                }),
                i("c2831f07", function (e) {
                    return "Subskrybuj wersję " + e.tier;
                }),
                i("fd425414", "Korzystaj z funkcji Radar"),
                i("g6320792", "Korzystaj z funkcji Analizy Premium"),
                i("f09be7f8", "Uzyskaj weryfikację"),
                i("j34ad558", "Uzyskaj Premium"),
                i("a73d39fb", function (e) {
                    return "Zacznij korzystać z " + e.numberOfDays + "-dniowej bezpłatnej wersji próbnej";
                }),
                i("i4fb96c7", function (e) {
                    return "Otrzymaj nawet " + e.percentage + "% rabat na X " + e.premiumTierName;
                }),
                i("c1c98165", function (e) {
                    return e.percentage + "% taniej";
                }),
                i("c5546038", "Oferta wkrótce wygasa!"),
                i("e9a47564", "Ostatnia szansa"),
                i("f65e7e91", function (e) {
                    return e.percentage + "% zniżki " + e.tier + " " + e.plan;
                }),
                i("a84a736e", "Skorzystaj z bezpłatnego kredytu reklamowego"),
                i("a0713d76", "Przejdź na poziom Zweryfikowane Organizacje, aby otrzymać bezpłatny kredyt reklamowy oraz możliwość używania pakietu narzędzi do rozwijania firmy."),
                i("a07e13fc", "Zostań twórcą treści Premium"),
                i("i1b4aea2", "Podnieś poziom, aby móc publikować dłuższe filmy"),
                i("efa90342", "Odblokuj możliwość edytowania wpisów dzięki subskrypcji X Premium"),
                i("cc528e28", "Tylko posiadacze subskrypcji X Premium mają dostęp do funkcji edytowania wpisów. Podnieś poziom subskrypcji, aby kontynuować."),
                i("h8a3525e", "Dodaj do Najciekawszych w swoim profilu"),
                i("c0f7a722", "Musisz subskrybować usługę Premium, aby móc oznaczać wpisy w swoim profilu jako najciekawsze."),
                i("i3b31136", "Pisz artykuły w serwisie X"),
                i("b6a41c5f", function (e) {
                    return "Musisz mieć subskrypcję " + e.tier + ", aby móc pisać artykuły w serwisie X";
                }),
                i("ae2c4afc", "Chcesz opublikować własny artykuł?"),
                i("d300e29b", function (e) {
                    return "Podnieś poziom subskrypcji do poziomu " + e.tier + ", aby móc pisać dłuższe wpisy i artykuły.";
                }),
                i("f614e2bc", "Podnieś poziom subskrypcji do poziomu Premium, aby móc pisać dłuższe wpisy oraz stosować formatowanie, takie jak pogrubienie i kursywa."),
                i("c9772e6e", "Uaktualnij do usługi Premium"),
                i("dc5575ac", "Chcesz, aby Twój profil był oznaczony etykietą konta zweryfikowanego za pomocą dokumentu tożsamości?"),
                i("d154f46e", "Odblokuj możliwość tworzenia grup dyskusyjnych dzięki subskrypcji X Premium"),
                i("a0228c02", "Tylko użytkownicy posiadający subskrypcję X Premium mogą tworzyć grupy dyskusyjne. Podnieś poziom subskrypcji, aby kontynuować."),
                i("d07f1d74", "Aby móc dodać tych użytkowników do rozmowy, musisz uzyskać weryfikację"),
                i("ebe38626", "Tylko zweryfikowani użytkownicy mogą dodawać do grupy osoby, które ich nie obserwują. Podnieś poziom subskrypcji, aby kontynuować."),
                i("e6eddae0", "Uzyskaj weryfikację, aby utworzyć tę grupę"),
                i("he27089e", "Tylko zweryfikowani użytkownicy mogą tworzyć grupy z użytkownikami, którzy ich nie obserwują. Podnieś poziom subskrypcji, aby kontynuować."),
                i("d7bc1116", "Uzyskaj weryfikację, aby wysłać wiadomość do tego użytkownika"),
                i("f897074a", "Tylko zweryfikowani użytkownicy mogą wysyłać prywatne wiadomości do osób, które ich nie obserwują. Podnieś poziom subskrypcji, aby kontynuować."),
                i("c0cf5eae", "Uzyskaj weryfikację, aby wysłać więcej wiadomości"),
                i("h2da08fc", "Osiągnięto limit maksymalnej liczby prywatnych wiadomości, które można wysłać w ciągu dnia. Aby wysłać kolejne wiadomości, podnieś poziom subskrypcji."),
                i("j503aee6", "Pobieraj filmy dzięki subskrypcji X Premium"),
                i("j4dd3bf4", "Tylko użytkownicy posiadający subskrypcję X Premium mogą pobierać filmy. Podnieś poziom subskrypcji, aby kontynuować."),
                i("bc231a74", "Odblokuj dostęp do folderów Zakładek, korzystając z subskrypcji X Premium"),
                i("ed534c78", "Tylko posiadacze subskrypcji X Premium mają dostęp do folderów Zakładek. Podnieś poziom subskrypcji, aby kontynuować."),
                i("ed924940", "Usuń wszystkie reklamy dzięki Premium+"),
                i("dccdb326", "Tylko posiadacze subskrypcji Premium+ nie muszą oglądać reklam. Podnieś poziom subskrypcji, aby kontynuować."),
                i("adf3410a", "Kup subskrypcję, aby odblokować nowe funkcje i otrzymywać udział w dochodach (jeśli uzyskasz uprawnienie)."),
                i("d8661dd4", "Oferta ograniczona czasowo. Odblokuj najlepsze funkcje serwisu X."),
                i("fe7fd234", "Już dziś wypróbuj bezpłatnie subskrypcję Premium Basic"),
                i("a2f86dda", "Rozszerz swoje środowisko o foldery Zakładek, możliwość edytowania wpisów, niestandardowe ikony aplikacji oraz inne funkcje dzięki subskrypcji Premium Basic."),
                i("d9593598", "Już dziś wypróbuj bezpłatnie wersję Premium"),
                i("d0d6b59c", "Popraw swoje wrażenia z korzystania z usługi, przechodząc na wersję Premium z mniejsza liczbą reklam, potężnymi narzędziami i nie tylko."),
                i("g4bb7ea8", "Otrzymaj nawet 50% rabat na X Premium"),
                i("b748499c", "Oferta została przedłużona!"),
                i("b81135bc", "Oferta kończy się dzisiaj!"),
                i("a8b4b878", "Poznaj najlepsze funkcje serwisu X w to Święto Dziękczynienia."),
                i("df7fb242", "Oferta z okazji Święta Dziękczynienia"),
                i("aeaf14a6", "Uzyskaj 40% zniżki na subskrypcję Premium. Oferta wkrótce wygasa!"),
                i("ca8cbf78", "Skorzystaj z 40% zniżki na subskrypcje Premium i Premium+"),
                i("j88ba18e", "Skorzystaj z oferty"),
                i("f4dc8ea3", function (e) {
                    return "Uzyskaj " + e.percentage + "% zniżki na subskrypcję X Premium. Odblokuj najlepsze funkcje serwisu X.";
                }),
                i("db6a5d54", "Nie masz jeszcze weryfikacji"),
                i("edf7f57e", "Uzyskaj weryfikację, aby móc korzystać m.in. z funkcji wzmacniania odpowiedzi, analiz i przeglądania bez reklam. Już teraz podnieś poziom swojego profilu."),
                i("ba920d68", "Zwiększ swój wpływ dzięki weryfikacji"),
                i("ib79d0c2", "Odblokuj funkcje dla VIP-ów: zweryfikuj swoje konto"),
                i("bebc5f12", "Reklamujesz się w serwisie X, ale nie masz subskrypcji Zweryfikowane Organizacje"),
                i("d7836d1e", "Kup subskrypcję, aby otrzymać do 12 000 USD bezpłatnego kredytu reklamowego, weryfikację w postaci złotego znaczka, pomoc techniczną dla VIP-ów oraz pakiet narzędzi ułatwiających rozwój."),
                i("f528e369", function (e) {
                    return "Korzystaj z subskrypcji " + e.tier + ", aby móc pisać artykuły";
                }),
                i("c5a8022a", "Dzięki funkcji Artykuły możesz publikować bezpośrednio w serwisie X własne długie treści, które będą odpowiednio sformatowane i będą zawierać multimedia."),
                i("d77899b6", "Korzystaj z subskrypcji Premium, aby móc pisać dłuższe wpisy"),
                i("bd65482a", "Pisz dłuższe wpisy oraz stosuj formatowanie tekstu, takie jak pogrubienie i kursywa."),
                i("bee20918", "Otrzymywanie płatności za wpisy"),
                i("gb699d52", "Lubisz publikować w serwisie X? Kup subskrypcję Premium, aby dołączyć do naszego programu udziału w dochodach."),
                i("f69877c2", "Wzmacniaj swoje odpowiedzi dzięki subskrypcji Premium"),
                i("gba90d44", "Zwiększ widoczność swoich wpisów i wyróżniaj się z tłumu."),
                i("a6dbcd58", "Wspomagaj twórców treści, subskrybując wersję Premium"),
                i("c4f49130", "Do 25% Twojej opłaty subskrypcyjnej będzie trafiać bezpośrednio do twórców treści."),
                i("ca8fa2c0", "Uzyskaj weryfikację i niebieski znaczek"),
                i("febffc1a", "Wzmocnij swoją wiarygodność, zwiększ widoczność swoich wpisów i spraw, aby Twój głos był lepiej słyszalny."),
                i("j45a377a", "Podnieś poziom do wersji Premium+"),
                i("i7170016", "Ciesz się dodatkowymi korzyściami, brakiem reklam i największym priorytetem odpowiedzi."),
                i("ee87f95e", "Zaawansowane analizy w ramach subskrypcji X Premium"),
                i("ac38dbc0", "Zobacz analizy swojego profilu, poznaj swoich odbiorców i nie tylko. Podnieś poziom subskrypcji, aby kontynuować."),
                i("i6e73154", "Podgląd Analiz konta, obejmujący wykresy słupkowe i dane"),
                i("b583e154", "Odblokuj analizy dzięki subskrypcji X Premium"),
                i("b7fb8c5e", "Wydaj 1 tys. USD, zyskaj 1 tys. USD"),
                i("ca559b70", "Zasubskrybuj teraz"),
                i("d68773a4", "Wizualizuj trendy za pomocą funkcji Radar"),
                i("f677fed6", "Monitoruj słowa kluczowe, wizualizuj aktywność trendów i filtruj rozmowy. W czasie rzeczywistym."),
                i("ha49eac2", "Chcesz rozwijać się szybciej w serwisie X?"),
                i("f27018b4", "Używaj funkcji Analizy Premium, aby zwiększać liczbę obserwujących za pomocą inteligentnych analiz danych."),
                i("dfea1f08", "Nie przegap cennych wyników analiz"),
                i("da8c5244", "Dzięki funkcji Analizy Premium możesz odblokować inteligentne analizy danych, które pomogą Ci zwiększyć liczbę obserwujących."),
                i("b081baea", "Tracisz wyniki analiz!"),
                i("d5effffc", "Dodaj odznakę"),
                i("c3653d44", "Zweryfikuj swoją firmę"),
                i("e8070e70", "Wypróbuj subskrypcję Premium"),
                i("ec42820e", "Chcesz, aby więcej osób zobaczyło Twoją odpowiedź?"),
                i("b0a95418", "Korzystaj z dostępnej w ramach subskrypcji Premium funkcji Wzmocnienie odpowiedzi"),
                i("j8ee20aa", "Wyróżnij swoje zdanie w rozmowie dzięki funkcji Wzmocnienie odpowiedzi"),
                i("g13aa596", "Kup subskrypcję Premium, aby wzmacniać swoje odpowiedzi"),
                i("cadd92be", "Uzyskaj dostęp do analizy wpisów"),
                i("a7058228", "Odblokuj zaawansowane analizy dzięki subskrypcji X Premium"),
                i("gb7823ba", "Analiza konta"),
                i("i90f8e36", "Organizuj swoje zakładki"),
                i("abc6e710", "Sortuj zakładki i umieszczaj je w folderach w ramach subskrypcji X Premium"),
                i("b7fa0cfe", "Najpopularniejsze artykuły"),
                i("bcc7e8c0", "Wszystkie Zakładki"),
                i("i3145aa0", "Zakładki"),
                i("e39b368e", "Transmisja"),
                i("hbea78a8", "Nowa kolumna"),
                i("b5298d92", "Połącz"),
                i("d35d74e4", "Rozmowa"),
                i("h5245afa", "Grupa dyskusyjna"),
                i("d4ebc798", "Szkice"),
                i("fcf3e54c", "Przeglądaj"),
                i("d806aa1a", "Ukryte odpowiedzi"),
                i("ha8209bc", "Główna"),
                i("a2f81050", "Wiadomości"),
                i("cf2d1048", "Zaproszenia do rozmowy"),
                i("e7172d70", "Inne wiadomości"),
                i("e1066d88", "Mój profil"),
                i("eb75875e", "Powiadomienia"),
                i("j45978a8", "Cytaty"),
                i("fd6a3f30", "Zaplanowane wpisy"),
                i("aa4209e8", "Superobserwujący"),
                i("d52a1caa", "Subskrybenci"),
                i("d7b51c68", "Subskrypcje"),
                i("c5f4befa", "Trendy"),
                i("df34a454", "Wpis"),
                i("gfccba44", "Wnioski o dołączenie"),
                i("e42dd8fa", "Dziennik moderacji"),
                i("c2c191fc", "Zgłoszone wpisy"),
                i("c63602d4", "Moje Grupy dyskusyjne"),
                i("ddf0ba7e", "Kolekcja"),
                i("c64974fc", "Obserwujący"),
                i("i099d32e", "Obserwujący, których znasz"),
                i("d960b55c", "Obserwujesz"),
                i("b007440a", "Oferty pracy"),
                i("aa68dafc", "Szczegóły dotyczące powiadomień"),
                i("b8533bac", "Tematy"),
                i("jf00ebf6", "Kolumna niedostępna"),
                i("jaaa8984", "Lokalizacja"),
                i("f345dcda", "Historia edycji"),
                i("hea3f8ac", "Powiązane wpisy"),
                i("c8ee31da", "Aktualności"),
                i("d35c9eec", "Analiza konta"),
                i("b5b7fb94", "Grupa"),
                i("g755fcde", "Ty"),
                i("f6b1ff81", function (e) {
                    return e.name + " i Ty";
                }),
                i("j652293d", function (e) {
                    return e.listOfParticipants + " i jeszcze " + e.count;
                }),
                i("fb4ee2f6", "Zaproszenia do rozmowy zostały usunięte"),
                i("j607bf02", "Pobierz aplikację serwisu X"),
                i("j49fd4e8", "Przejdź do aplikacji"),
                i("a565833e", "Zarejestruj się"),
                i("e919c3bc", "Zaloguj się"),
                i("a17a75da", "X działa lepiej w aplikacji"),
                i("e7342ed4", "Nie przegap żadnego wpisu. Otwórz te treści w aplikacji serwisu X i korzystaj ze wszystkich funkcji."),
                i("b6a43e78", "Bądź na bieżąco"),
                i("b469e406", "Śledź to, co najbardziej Cię interesuje. Korzystaj z aplikacji i otrzymuj powiadomienia dotyczące osób, tematów i wydarzeń, które obserwujesz."),
                i("b8505290", "Odpowiedz, by dołączyć do rozmowy."),
                i("ae8b0564", "Podaj dalej ten wpis, aby zobaczyło go więcej osób."),
                i("f2adab0e", "Polub wpis, aby pokazać, że Ci się podoba."),
                i("b7821a74", "Zarejestruj się, a nigdy nie przegapisz wpisów tego użytkownika."),
                i("e6d43d06", "Obserwuj temat, aby odkryć ciekawe wpisy"),
                i("ic848090", "Najpierw się zaloguj"),
                i("f9ebe066", "Jak tylko się zalogujesz, możesz dołączyć do rozmowy w Grupie dyskusyjnej."),
                i("je3d93e2", "Użytkownicy serwisu X wiedzą jako pierwsi."),
                i("ea88ce2e", "Bądź na bieżąco"),
                i("d8817e36", "Accept all cookies"),
                i("b9288ee6", "Refuse non-essential cookies"),
                i("i1390ec2", "Did someone say … cookies?"),
                i("ga3121d5", "Centrum Pomocy"),
                i("g482c949", "Zobacz więcej informacji na temat wybranych opcji"),
                i("b47e760e", "Naciśnij na znak zapytania, żeby zobaczyć skróty klawiszowe."),
                i("fd2c7b44", "Zobacz skróty klawiszowe"),
                i("g7e2adf2", "Utwórz nową talię"),
                i("a6ba09e8", "Duplikuj kolumnę"),
                i("f5c9ccca", "Edytuj bieżącą talię"),
                i("bf42c578", "Wybierz przycisk zmiany kolejności"),
                i("j6fa64a6", "Przejdź do ostatniej kolumny"),
                i("b5545202", "Przejdź do ostatniej przypiętej talii"),
                i("e0497acc", "Przejdź do opcji Zarządzaj wszystkimi taliami"),
                i("beef7b14", "Przejdź do kolejnej kolumny"),
                i("a5cb005e", "Przejdź do wybranej kolumny"),
                i("f65391bc", "Przejdź do wybranej przypiętej talii"),
                i("h0bfdd20", "Dodaj kolumnę"),
                i("h770f6d4", "Przejdź do poprzedniej kolumny"),
                i("b8b2b70c", "Usuń kolumnę"),
                i("a3e2df76", "Cofnij usunięcie kolumny"),
                i("g850aec4", "Otwórz/zamknij ustawienia kolumn"),
                i("d5696fcc", "Skrót pomocy"),
                i("a83d4280", "Następny wpis"),
                i("g0048656", "Poprzedni wpis"),
                i("a690c4d0", "Strona w dół"),
                i("e893811a", "Załaduj nowe wpisy"),
                i("cdb53d7a", "Wzmianki"),
                i("d7b8ebaa", "Polubienia"),
                i("b0041756", "Listy"),
                i("d4986f86", "Wiadomości prywatne"),
                i("bb081ea2", "Ustawienia"),
                i("eee2ed92", "Przejdź do użytkownika..."),
                i("ee5ccf3e", "Ustawienia wyświetlania"),
                i("ab3d53f8", "Nowy wpis"),
                i("de94bda6", "Wyślij wpis"),
                i("e736990a", "Nowa prywatna wiadomość"),
                i("fe731016", "Lubię"),
                i("d17df548", "Odpowiedz"),
                i("g062295e", "Podaj dalej wpis"),
                i("h01621a4", "Udostępnij wpis"),
                i("gb303814", "Zakładka"),
                i("c03b1126", "Wycisz konto"),
                i("ebd2abb2", "Zablokuj konto"),
                i("hc6c5510", "Otwórz szczegóły wpisu"),
                i("eebdef38", "Rozwiń zdjęcie"),
                i("b488758c", "Otwórz/zamknij sekcję wiadomości"),
                i("c82314e0", "Odtwarzaj/wstrzymaj wybrany film"),
                i("b881560e", "Wycisz wybrany film"),
                i("a94f7302", "Przejdź do panelu audio"),
                i("a7e604c6", "Włącz/wstrzymaj odtwarzanie panelu audio"),
                i("f978c4fc", "Wycisz / wyłącz wyciszenie panelu audio"),
                i("hc73f030", "Twoje konto"),
                i("f15bfdb4", "Informacje dotyczące konta"),
                i("a3841918", "Adres e-mail"),
                i("c21037d0", "Kraj"),
                i("ab1f7ee0", "Zmień hasło"),
                i("e731db5a", "Resetowanie hasła"),
                i("f56af9cc", "Pobierz archiwum swoich danych"),
                i("hfb92b14", "Dezaktywuj swoje konto"),
                i("bf96fda4", "Wiek"),
                i("d12d42dc", "Automatyzacja"),
                i("fdb81456", "Etykieta konta parodystycznego"),
                i("j9d10268", "Aktywność na koncie"),
                i("i6b3f59a", "Historia konta"),
                i("da202f9a", "Twoja lista reklamodawców"),
                i("hc36dbba", "Urządzenia i aplikacje używane do logowania się na Twitterze"),
                i("a8d0108e", "Płeć"),
                i("a03dacaa", "Język"),
                i("d9138166", "Wyświetl miejsca, w których byłeś/aś"),
                i("b523ecc6", "Historia dostępu do konta"),
                i("abedd45c", "Uzyskaj swoje dane"),
                i("h1f01a24", "Zainteresowania"),
                i("j7ad754a", "Twoje dane z serwisu X"),
                i("d299431c", "Monetyzacja"),
                i("j087774e", "Monety"),
                i("ff9ed474", "Całkowite zarobki"),
                i("ec885836", "Udział w dochodach dla twórców treści"),
                i("b431a5c6", "Udział w dochodach z reklam"),
                i("b0e986ec", "Monetyzacja (IDV)"),
                i("aca4d76a", "Ustawienia programu Udział w dochodach z reklam"),
                i("ab1b837a", "Panel danych programu Udział w dochodach z reklam"),
                i("a9c1a9cc", "Reklamy przed filmami"),
                i("d4ab5c12", "Ustawienia reklam przed filmami"),
                i("c429e3ba", "Subskrypcje twórców treści"),
                i("fce877d6", "Cofnij publikację wpisu"),
                i("dd0c889e", "Dostosowanie profilu"),
                i("ib35705e", "Zarządzaj subskrypcją"),
                i("cf131522", "Zarządzaj odznakami kont powiązanych"),
                i("cb165528", "Nowe funkcje i ustawienia"),
                i("f8645654", "Bezpieczeństwo i dostęp do konta"),
                i("j95edf76", "Bezpieczeństwo"),
                i("afe4a358", "Weryfikacja za pomocą dokumentu tożsamości"),
                i("dd703318", "Dwustopniowa weryfikacja logowania"),
                i("b1686800", "Zarządzaj kluczami bezpieczeństwa"),
                i("ae72d4c4", "Aplikacje i sesje"),
                i("a1e8e682", "Zarejestrowane urządzenia"),
                i("h1abfbce", "Powiązane konta"),
                i("cad53944", "Prywatność i bezpieczeństwo"),
                i("e908903a", "Odbiorcy i oznaczanie"),
                i("b5c85d2c", "Chroń swoje wpisy"),
                i("f56d108e", "Oznaczanie zdjęć"),
                i("c6f67e32", "Twoje wpisy"),
                i("f2bd9c48", "Treści, które widzisz"),
                i("cbd449a0", "Wyciszanie i blokowanie"),
                i("daef29b8", "Wyciszone konta"),
                i("i0dd9b9e", "Wyciszone słowa"),
                i("a5f32aa2", "Zablokowane konta"),
                i("i58a274c", "Wiadomości prywatne"),
                i("ded416b0", "Pokoje"),
                i("fd4d9068", "Odnajdywanie i kontakty"),
                i("bbcafbda", "Zarządzaj kontaktami"),
                i("aeddb28a", "Ustawienia treści"),
                i("d035a8d0", "Ustawienie dotyczące reklam"),
                i("d0b74a5a", "Cookie preferences"),
                i("h3909cd0", "Twój profil stworzony na podstawie innych aktywności"),
                i("d84e63d2", "Aktywność poza serwisem X"),
                i("h14ba864", "Udostępnianie danych partnerom biznesowym"),
                i("jabb9c9a", "Informacje o lokalizacji"),
                i("fcb6a5b8", "Dodaj informacje o lokalizacji do swoich wpisów"),
                i("h9f2da68", "Nieodpowiednie multimedia"),
                i("id6a8e1a", "Filtr odpowiedzi"),
                i("fc35f762", "Odfiltrowane odpowiedzi"),
                i("gaac710a", "Centrum Zgłoszeń"),
                i("bcd81cac", "Ustawienia"),
                i("i647fb04", "Filtry"),
                i("hee41732", "Powiadomienia push"),
                i("e75f25a8", "Powiadomienia e-mail"),
                i("cf9b166a", "Dostępność, wyświetlanie i języki"),
                i("e3719c16", "Dostępność"),
                i("a776eed8", "Odtwarzanie automatyczne"),
                i("c4881c66", "Wygląd"),
                i("d495680e", "Języki"),
                i("f953f53a", "Zmień język wyświetlania"),
                i("eafe3288", "Zużycie danych"),
                i("b721eb38", "Informacje"),
                i("g9230d00", "Udziel uprawnienia"),
                i("cb8ebf5c", "Osoby posiadające uprawnienia"),
                i("i95202f6", "Konta, do których masz uprawnienia"),
                i("afcad7f2", "Pobierz aplikację"),
                i("e8f57e08", "Personalizacja i dane"),
                i("gbde3534", "Zainteresowania i dane dotyczące reklam"),
                i("a54826c6", "Zainteresowania od partnerów"),
                i("a5cbc19a", "Twoje analizy"),
                i("i9028824", "Wczytywanie"),
                i("f5090e28", "Wygląda na to, że przerwano połączenie. Spróbujmy ponownie."),
                i("ba929da8", "Nie znaleziono strony"),
                i("d203e242", "Nie znaleziono"),
                i("e2eac0c4", "Główne"),
                i("i5aa4ce0", "Więcej pozycji menu"),
                i("h63a5c3c", "Więcej"),
                i("a4fc1872", "Ostatni tydzień"),
                i("e14bb1da", "Ostatni dzień"),
                i("d86bbf0f", function (e) {
                    return "Nieprzeczytane: " + e.count;
                }),
                i("h6beb5fb", function (e) {
                    return e.count + "+";
                }),
                i("i5f7b6b8", "Konto"),
                i("da4691aa", "Zobacz wszystkie konta"),
                i("c7e55ccf", function (e) {
                    return "Przełącz na konto @" + e.screenname;
                }),
                i("b20a3894", "Konto, na które próbujesz się przełączyć, zostało usunięte."),
                i("daffabde", "działasz w imieniu…"),
                i("eccbfa26", "Konta z przekazanymi uprawnieniami"),
                i("a1b7a904", "Działaj w imieniu"),
                i("g61ed8a4", "Coś poszło nie tak."),
                i("e520f166", "Twój dzienny limit wysyłania wpisów został wyczerpany."),
                i("c0554ca0", "Wystąpił błąd. Spróbuj ponownie wysłać ten wpis za minutę."),
                i("b25c5b2a", "Ups! To już zostało powiedziane."),
                i("cef21114", "Twoje konto zostało zawieszone i nie możesz wysyłać wpisów."),
                i("cf369a0e", "Wpis, na który próbujesz odpowiedzieć, został usunięty lub nie jest dla Ciebie widoczny."),
                i("cd86efa8", "W tekście Twojego wpisu znajduje się zbyt wiele @wzmianek."),
                i("e002f424", "W tekście Twojego wpisu znajduje się zbyt wiele adresów URL."),
                i("c2b4ae8c", "W tekście Twojego wpisu znajduje się zbyt wiele tagów."),
                i("hf05f59e", "W tekście Twojego wpisu znajduje się zbyt wiele tagów $."),
                i("dffb84c6", "W tekście Twojego wpisu znajduje się za długi tag."),
                i("d7b21bc8", "W tym wpisie przekroczono dozwoloną liczbę typów załączników."),
                i("e4672ac2", "Niestety, adres URL w Twoim wpisie prawdopodobnie jest adresem strony zawierającej śmieciową lub niebezpieczną zawartość."),
                i("he5ecf52", "Tekst Twojego wpisu przekracza maksymalny dozwolony limit."),
                i("ac78e602", "Treść Twojego wpisu jest nieprawidłowa."),
                i("i251c738", "Liczba klatek na sekundę w filmie, który próbujesz przesłać, jest za duża."),
                i("ed3ac7ef", function (e) {
                    return "Liczba klatek na sekundę w filmie, który próbujesz przesłać, jest za duża. Maksymalna liczba klatek: 60. Rzeczywista liczba klatek: " + e.frameRate + ".";
                }),
                i("e23fe0cc", "Współczynnik proporcji przesyłanego filmu jest za duży."),
                i("ca4514c0", "Współczynnik proporcji przesyłanego filmu jest za mały."),
                i("fb4a459c", "Film, który próbujesz przesłać, jest za krótki."),
                i("ca1afa98", "Film, który próbujesz przesłać, jest za długi."),
                i("b2e94283", function (e) {
                    return "przez @" + e.viaScreenName;
                }),
                i("ee69d769", function (e) {
                    return "Opublikuj wpis " + e.verb;
                }),
                i("ge8e4a38", "Opublikuj wszystko"),
                i("h735a98e", "Zaplanuj"),
                i("h3701ffe", "Aktualizuj"),
                i("d9ef2842", "Nowe"),
                i("cdf89b84", "Spersonalizowane polubienia – podgląd"),
                i("i83d4f14", "Prośby o pozwolenie na obserwowanie"),
                i("aeede01a", "Imprint"),
                i("ae1bbb26", "Wyloguj się"),
                i("fd442790", "Ustawienia i prywatność"),
                i("da137d9a", "MStV Transparenzangaben"),
                i("e0cb0c72", "Reklamy"),
                i("e2eef3c2", "Zweryfikowane Organizacje"),
                i("b55d8a78", "Utwórz Pokój"),
                i("a5a30af0", "Artykuły"),
                i("d13d697c", "Nowy adres"),
                i("j0e2cfa8", "Biznes"),
                i("h5e38204", "Czat"),
                i("h7d5d9fa", "Beta"),
                i("ga169e1b", function (e) {
                    return "Wiadomości prywatne (nowe: " + e.count + " rozm" + n(e.count, "owy", "ów", "owa", "ów") + ")";
                }),
                i("d83682ec", "Strona główna (nowe nieprzeczytane wpisy)"),
                i("e1249849", function (e) {
                    return "Powiadomienia (" + e.count + " now" + n(e.count, "e powiadomienia", "ych powiadomień", "e powiadomienie", "ych powiadomień") + ")";
                }),
                i("c0b786ee", "Szukaj i odkrywaj"),
                i("bb967f9e", "Filmy"),
                i("e04033be", "Dostępne są nowe wpisy. Aby do nich przejść, naciśnij klawisz kropki."),
                i("hec711c0", "Zobacz nowe wpisy"),
                i("j0a8da6e", "Dodaj istniejące konto"),
                i("c6f2bf00", "Zarządzaj kontami"),
                i("a58e0e51", function (e) {
                    return "Wyloguj się z konta @" + e.screenName;
                }),
                i("j62f43a6", "Zobacz konta z przekazanymi uprawnieniami"),
                i("d4c52015", function (e) {
                    return e.count + " pending delegate account oczekując" + n(e.count, "e zaproszenia", "ych zaproszeń", "e zaproszenie", "ych zaproszeń") + " do przejęcia uprawnień";
                }),
                i("b8e1d524", "Konta"),
                i("gef27c4c", "Menu konta"),
                i("b7dc3885", function (e) {
                    return "Przełącz na konto @" + e.screenName;
                }),
                i("c61eea74", "Konta osobiste"),
                i("g6d42fea", "Przełącz nawigację"),
                i("eb022176", "Utwórz konto"),
                i("gcfef7b6", "Utwórz konto, podając adres e-mail lub numer telefonu"),
                i("e5b0e544", "Zaloguj się"),
                i("gd93944e", "Użyj aplikacji"),
                i("f2f787a0", "Warunki korzystania"),
                i("e1099fd6", "Politykę prywatności"),
                i("c1df1ae0", "Polityką ciasteczek"),
                i("cdc1bff7", function (e) {
                    return "Menu profilowe " + e.loggedInUserName;
                }),
                i("fd48249b", function (e) {
                    return e.count + " użytkowników";
                }),
                i("b93ba92d", function (e) {
                    return e.peopleCount + " " + n(e.peopleCount, "nowych użytkowników", "nowych użytkowników", "użytkownik", "użytkowników");
                }),
                i("ae2205d2", "Obserwujecie siebie nawzajem"),
                i("fd06b02f", function (e) {
                    return "@" + e.screenName + " bierze teraz udział w Pokoju na żywo – kliknij, aby dołączyć z poziomu profilu tego użytkownika";
                }),
                i("f2b3fe06", "Wczytywanie wyników"),
                i("fc9dd578", "Szukaj osób"),
                i("gdb7bc25", function (e) {
                    return e.name + " — wybierz, aby usunąć";
                }),
                i("f065ba8c", "Wyszukiwane hasło"),
                i("hbc99b03", function (e) {
                    return "Przejdź do @" + e.screenName;
                }),
                i("a2c1b222", "Spróbuj wyszukać osoby, listy lub słowa kluczowe"),
                i("f45c4250", "Usunąć wszystkie ostatnie wyszukiwania?"),
                i("caae4dda", "Tej czynności nie można cofnąć. Wszystkie ostatnie wyszukiwania zostaną usunięte."),
                i("dbd5d400", "Wyczyść"),
                i("a8d68f62", "Najnowsze"),
                i("c6530778", "Zapisane wyszukiwania"),
                i("e047b8fa", "Wyczyść wszystko"),
                i("aa6e3300", "Wygląda na to, że nastąpiła utrata połączenia. Sprawdź swoje połączenie z siecią i spróbuj ponownie."),
                i("e68b09b4", "Usuń"),
                i("hffea05c", "Usunąć zapisane wyszukiwanie?"),
                i("j037e374", "Tej czynności nie można cofnąć i stracisz swoje zapisane wyszukiwanie."),
                i("d96cf7ce", "Usuń"),
                i("hbe4feb5", function (e) {
                    return "Prośba o obserwowanie została wysłana do użytkownika @" + e.screenName + " i oczekuje na zatwierdzenie.";
                }),
                i("df4c86b0", "Najpierw zaktualizuj swój profil"),
                i("bba40ffa", "Nie możesz obserwować tego konta"),
                i("f558829e", "Aby obserwować to konto, musisz dodać w profilu swoją datę urodzenia, która pozwoli nam ustalić, czy spełniasz wymagania wiekowe dotyczące tego konta."),
                i("a6941096", "Tego konta nie można obserwować z Twojego kraju."),
                i("if8cd2a4", "Twój wiek nie pozwala na obserwowanie tego konta."),
                i("b5972260", "Wystąpił błąd. Poczekaj chwilę i spróbuj ponownie anulować swoją prośbę o obserwowanie tego użytkownika."),
                i("j4292c24", "Ten użytkownik zablokował Ci możliwość obserwowania jego konta."),
                i("a0ba5842", "Nie możesz obecnie obserwować więcej osób."),
                i("a5202b82", "Wystąpił błąd. Poczekaj chwilę i spróbuj ponownie zacząć obserwować tego użytkownika."),
                i("f8cbf714", "Próbujesz obserwować użytkownika, który nie istnieje."),
                i("f2e66452", "Twoje konto zostało zawieszone — nie możesz obserwować użytkowników."),
                i("ca96fe6e", "Wystąpił błąd. Poczekaj chwilę i spróbuj ponownie odblokować tego użytkownika."),
                i("e1a0aaca", "Wystąpił błąd. Poczekaj chwilę i spróbuj ponownie wyłączyć obserwowanie tego użytkownika."),
                i("fd5208c6", "Przejdź do ustawień"),
                i("c0d13570", "Konta powiązane"),
                i("ba96929e", "Rekrutacja"),
                i("gf62c116", "Pomoc"),
                i("a4cf866e", "Reklamy"),
                i("g2fd3206", "Użytkownicy"),
                i("h70bdf0a", "Radar"),
                i("bf6b72ac", "Pełny dostęp"),
                i("e49537c2", "Wygląda na to, że taka strona nie istnieje. Spróbuj wyszukać coś innego."),
                i("fcbb540a", "Limit został przekroczony"),
                i("d4f88600", "Weryfikuj formę kontaktu"),
                i("b192ccae", "Nie potwierdzono formy kontaktu."),
                i("a0487504", "Aby poprosić o weryfikację, musisz potwierdzić wybraną formę kontaktu."),
                i("fff7d93c", "Dodaj zdjęcie"),
                i("g969bfae", "Nie masz zdjęcia profilowego."),
                i("gb2f35e4", "Zanim poprosisz o weryfikację, musisz dodać zdjęcie profilowe."),
                i("i33cf692", "Dodaj pole adresu URL"),
                i("b679ff6a", "Nieprawidłowy adres URL"),
                i("i79902b4", "Wybierz metodę weryfikacji"),
                i("fb2fcb5c", "Ten krok pozwoli nam zweryfikować Twoją tożsamość. Wybierz metodę, która najbardziej Ci odpowiada."),
                i("e43425fa", "Urzędowy dokument tożsamości"),
                i("cb7c2e2e", "Zdjęcie urzędowego dokumentu tożsamości."),
                i("a411926a", "Oficjalny adres e-mail"),
                i("g253cdd0", "Oficjalny adres e-mail w domenie związanej z wybraną kategorią."),
                i("cf93bcb0", "Odnośnik do oficjalnej strony internetowej"),
                i("gfb55fa8", "Oficjalna witryna internetowa zawierająca bezpośredni odnośnik do Twojego konta w serwisie X."),
                i("g40cd2c0", "Verified reference"),
                i("a7f1cff6", "Dodaj odnośnik do oficjalnej strony internetowej"),
                i("a11cd524", "Wprowadź adres oficjalnej witryny internetowej, która zawiera odnośnik do Twojego konta w serwisie X i jest skojarzona z Twoim wnioskiem o weryfikację."),
                i("ba656f26", "Czy w tej witrynie internetowej znajduje się odnośnik do Twojego konta w serwisie X?"),
                i("ed751204", "Aby zweryfikować Twoje konto, musimy potwierdzić jego autentyczność. Jeśli Twoja nazwa użytkownika nie jest wspomniana na stronie, do której prowadzi link, będziemy musieli poprosić Cię o potwierdzenie Twojej tożsamości."),
                i("fbc023b0", "Tak"),
                i("e785ce06", "Chcę skorzystać z innej możliwości"),
                i("i8d58f3e", "Chcę użyć identyfikatora rządowego"),
                i("eb21ecaa", "Użyj adresu e-mail"),
                i("f848a69e", "Aby zweryfikować Twoje konto, musimy potwierdzić jego autentyczność. Jeśli Twoja nazwa użytkownika nie jest wspomniana na wskazanej oficjalnej stronie, nie możemy zweryfikować konta."),
                i("d59b5366", "Musimy potwierdzić, że Twoje konto jest autentyczne, aby Cię zweryfikować. Jeśli podana strona nie zawiera Twojej nazwy użytkownika na Twitterze, nie możemy powiązać Twojego konta ze znanym twórcą treści."),
                i("bfb01c62", "Nie, wróć"),
                i("fa51040a", "Podaj link do oficjalnej witryny internetowej znanej agencji informacyjnej lub publicystycznej zawierającej odnośnik do Ciebie i Twojego konta w serwisie X."),
                i("d0460f12", "Podaj link do strony, na której Twoje konto w serwisie X jest wskazane jako oficjalne konto organizacji. Musi to być link do oficjalnej witryny internetowej zweryfikowanej organizacji."),
                i("h45b00d8", "Wybierz sposób, w jaki potwierdzisz, że Twoje konto jest autentyczne i zarządzane przez organizację ze świata rozrywki, której dotyczy ten wniosek."),
                i("fc718708", "Oficjalna witryna internetowa kwalifikującej się organizacji zawierająca odnośnik do Ciebie i Twojego konta w serwisie X."),
                i("g32c2900", "Wybierz sposób, w jaki potwierdzisz, że Twoje konto jest autentyczne i zarządzane przez organizację zajmującą się produkcją, której dotyczy ten wniosek."),
                i("j5b1224c", "Podaj link do strony, na której Twoje konto w serwisie X jest wskazane jako oficjalne konto produkcji. Musi to być link do oficjalnej witryny internetowej zweryfikowanej organizacji."),
                i("d090a5d4", "Oficjalna witryna internetowa zweryfikowanej organizacji lub agencji publicystycznej zawierająca odnośnik do Twojego konta w serwisie X."),
                i("eb08a392", "Wybierz sposób, w jaki potwierdzisz, że Twoje konto jest autentyczne i zarządzane przez osobę kandydującą na dane stanowisko rządowe."),
                i("h0de1396", "Podaj link do strony, na której wskazano Twoje konto w serwisie X jako oficjalne konto kandydata w wyborach na dane stanowisko. Musi to być link do oficjalnej witryny internetowej zweryfikowanej organizacji."),
                i("dcc23262", "Wybierz sposób, w jaki potwierdzisz, że Twoje konto jest autentyczne i zarządzane przez aktywistę lub organizatora wydarzeń, którego dotyczy ten wniosek."),
                i("c880e068", "Oficjalna witryna internetowa organizacji publicznej zawierająca odnośnik do Ciebie i Twojego konta w serwisie X."),
                i("e412d500", "Podaj link do strony, na której zweryfikowana organizacja publiczna wskazuje Cię jako kierownika i która zawiera odnośnik do Twojego konta w serwisie X. Musi to być link do oficjalnej witryny zweryfikowanej organizacji."),
                i("dedf41f2", "Wybierz sposób, w jaki potwierdzisz, że Twoje konto jest autentyczne i zarządzane przez influencera, którego dotyczy ten wniosek."),
                i("b4aed9e0", "Oficjalna witryna internetowa zweryfikowanej organizacji zawierająca odnośnik do Ciebie i Twojego konta w serwisie X."),
                i("b2069e40", "Podaj link do strony, na której znajduje się odnośnik do Ciebie i Twojego konta w serwisie X. Musi to być link do oficjalnej witryny zweryfikowanej organizacji."),
                i("baf718c4", "Wybierz sposób, w jaki potwierdzisz, że Twoje konto jest autentyczne i zarządzane przez spółkę, markę lub organizację, której dotyczy ten wniosek."),
                i("c65bbbc2", "Select a method to show that your account is authentic and managed by the senior leader or executive related to this request."),
                i("i31e3606", "Oficjalny adres e-mail w domenie należącej do znanej spółki, marki lub organizacji non-profit."),
                i("de70afe8", "Odnośnik do Ciebie i Twojego konta w serwisie X w oficjalnej witrynie internetowej kwalifikującej się organizacji."),
                i("a3a523f2", "Podaj link do strony, na której Twoje konto w serwisie X jest wskazane jako oficjalne konto firmy. Musi to być link do oficjalnej witryny internetowej zweryfikowanej organizacji."),
                i("jf58899a", "Podaj link do strony, na której wskazano Cię jako starszego kierownika w Twojej organizacji i która zawiera odnośnik do Twojego konta w serwisie X. Musi to być link do oficjalnej witryny internetowej zweryfikowanej organizacji."),
                i("f7afbaec", "Wybierz sposób, w jaki potwierdzisz, że Twoje konto jest autentyczne i zarządzane przez dziennikarza zatrudnionego przez znaną agencję informacyjną lub publicystyczną."),
                i("d4ab0056", "Wybierz sposób, w jaki potwierdzisz, że Twoje konto jest autentyczne i należy do znanego dziennikarza-freelancera."),
                i("d2a77622", "Oficjalny adres e-mail w domenie należącej do znanej agencji informacyjnej lub publicystycznej."),
                i("eec341da", "Oficjalna witryna internetowa znanej agencji informacyjnej lub publicystycznej zawierająca odnośnik do Twojego konta w serwisie X."),
                i("b03ae068", "Wybierz sposób, w jaki potwierdzisz, że Twoje konto jest autentyczne i zarządzane przez agencję informacyjną lub publicystyczną, której dotyczy ten wniosek."),
                i("g0daba4a", "Wybierz sposób, w jaki potwierdzisz, że Twoje konto jest autentyczne i zarządzane przez profesjonalnego gracza, którego dotyczy ten wniosek."),
                i("ab8e430c", "Podaj link do strony, na której wskazano Twoje konto w serwisie X jako oficjalne konto osoby ze świata gier. Musi to być link do oficjalnej witryny internetowej zweryfikowanej organizacji."),
                i("cdcd9cd6", "Wybierz sposób, w jaki potwierdzisz, że Twoje konto jest autentyczne i zarządzane przez profesjonalną organizację sportową, której dotyczy ten wniosek."),
                i("gad25890", "Podaj link do strony, na której wskazano Twoje konto w serwisie X jako oficjalne konto profesjonalnej organizacji sportowej, której dotyczy ten wniosek. Musi to być link do oficjalnej witryny internetowej zweryfikowanej organizacji."),
                i("e6dc91b2", "Wybierz sposób, w jaki potwierdzisz, że Twoje konto jest autentyczne i zarządzane przez profesjonalnego sportowca, którego dotyczy ten wniosek."),
                i("i9aed706", "Podaj link do strony, na której wskazano Twoje konto w serwisie X jako oficjalne konto profesjonalnego sportowca, którego dotyczy ten wniosek. Musi to być link do oficjalnej witryny internetowej zweryfikowanej organizacji."),
                i("abd587d2", "Dodaj kolejny odnośnik"),
                i("i0bba81a", "Dodaj informację o Twoim pracodawcy"),
                i("a6a76e3c", "Wybierz sposób, w jaki potwierdzisz, że jesteś znany/a"),
                i("ecd2abda", "Potwierdź, że Twoje konto spełnia kryteria"),
                i("cb70b894", "Wróć"),
                i("g8b511fe", "Trendy Google"),
                i("c7d50c96", "Profil w serwisie Trendy Google wskazujący niedawne wyszukiwania na Twój temat."),
                i("a68b43ee", "Dodaj profil w serwisie Trendy Google"),
                i("b5e30390", "Profil w serwisie Trendy Google"),
                i("h146703e", "Artykuł w Wikipedii"),
                i("ee38d0f0", "Artykuł w Wikipedii o dużej widoczności na Twój temat."),
                i("cb97ee3e", "Dodaj artykuł w Wikipedii"),
                i("hc371f34", "Wzmianki w serwisach informacyjnych"),
                i("b9d0ad90", "Co najmniej trzy linki do stron znanych agencji informacyjnych, które informowały na Twój temat lub wspominały Cię w ciągu ostatnich sześciu miesięcy."),
                i("ge137dce", "Co najmniej trzy artykuły na Twój temat opublikowane w sprawdzonych serwisach informacyjnych w ciągu ostatnich sześciu miesięcy."),
                i("h2b9a5fe", "Co najmniej trzy artykuły na temat spółki, dla której pracujesz, opublikowane w sprawdzonych serwisach informacyjnych w ciągu ostatnich sześciu miesięcy."),
                i("baccb708", "Dodaj wzmiankę w znanych serwisach informacyjnych"),
                i("feadd98c", "Dodaj odnośniki do znanych serwisów informacyjnych"),
                i("j7ae97aa", "Odnośniki do znanych serwisów informacyjnych"),
                i("c368aa8e", "Co najmniej trzy artykuły opublikowane w zweryfikowanych serwisach informacyjnych zawierające odnośniki do Twojej osoby."),
                i("ded0edad", function (e) {
                    return "Artykuł #" + e.n;
                }),
                i("bebae55a", "Publiczna giełda papierów wartościowych"),
                i("c5571610", "Link potwierdzający znaczącą obecność na giełdzie papierów wartościowych."),
                i("e2d42628", "Dodaj odnośnik do giełdy papierów wartościowych"),
                i("jc19b4e8", "Notowanie na giełdzie papierów wartościowych"),
                i("fc3ee696", "Odnośnik do źródeł wskazujących Cię jako osobę na stanowisku kierowniczym"),
                i("i3e65eb4", "Oficjalna strona znanej organizacji, wskazująca Ciebie jako osobę na stanowisku kierowniczym."),
                i("jd014eba", "Podany adres url prowadzi do konkretnej strony zawierającej wzmiankę o wnioskodawcy."),
                i("a96901cc", "Potwierdzenie stanowiska kierowniczego"),
                i("cc424a22", "Odnośnik do informacji o reprezentacji"),
                i("ibfc1a5a", "Nie możesz uzyskać weryfikacji w tej kategorii"),
                i("e1c78796", "Oficjalna strona"),
                i("ff2ee0c2", "Aktywizm"),
                i("hc61adfc", "Rozrywka"),
                i("e404203c", "Gry"),
                i("d2042392", "Organizacja rządowa"),
                i("c365dcc6", "Pozostałe informacje"),
                i("d27beb9e", "Sport"),
                i("cc4b66b6", "Wybierz kategorię"),
                i("b37461a4", "Wybierz typ konta"),
                i("b27325f6", "Twórca treści"),
                i("a5a6affc", "Znani twórcy treści cyfrowych, którzy regularnie publikują angażujące, oryginalne treści."),
                i("a15326de", "Co najmniej trzy artykuły, które wspominają o Tobie, opublikowane w sprawdzonych serwisach informacyjnych."),
                i("g704a93a", "Oficjalna strona związana ze znaną organizacją wskazująca Cię jako osobę na stanowisku kierowniczym."),
                i("c6bd60ec", "Aktywista lub organizator wydarzeń"),
                i("c92fdb06", "Ważne osobistości korzystające z serwisu X w celu niesienia zmian społeczno-gospodarczych, politycznych lub kulturalnych."),
                i("a18c6dfc", "Dziennikarz"),
                i("h0b46534", "Niezależni dziennikarze zatrudnieni przez sprawdzone agencje prasowe lub publicystyczne."),
                i("ff929fec", "Znana organizacja lub podmiot powiązany"),
                i("jf537894", "Ważne organizacje i ich dodatkowe powiązane konta, w tym spółki, marki i organizacje non-profit."),
                i("d2ea204a", "Inny typ influencera"),
                i("f875ec6e", "Osoby o dużej widoczności w serwisie X i poza nim, które nie spełniają kryteriów żadnej innej kategorii."),
                i("i3e6aaa6", "Starszy kierownik lub osoba na kluczowym stanowisku"),
                i("bbcbb9e6", "Kierownicy i inne osoby na kluczowych stanowiskach pracujący dla znanych spółek, marek i organizacji non-profit."),
                i("j0bc23f4", "Konto mojej organizacji zostało już zweryfikowane."),
                i("aa6228de", "Organizacja ze świata rozrywki"),
                i("d5b3cbca", "Znaczące podmioty ze świata rozrywki, takie jak sieci telewizyjne, studia filmowe oraz wytwórnie muzyczne."),
                i("b5a3e590", "Znana osoba ze świata rozrywki"),
                i("e484f794", "Znane osoby ze świata rozrywki takie jak aktorzy, muzycy, reżyserzy, twórcy scenariuszy, komicy itp."),
                i("b8d8ea64", "Organizacja produkcyjna"),
                i("ff27db3c", "Oficjalne konta produkcji rozrywkowych, takich jak filmy, wydarzenia/festiwale, seriale itp."),
                i("c0e57cb2", "Dodaj profil twórcy treści"),
                i("f3c605b6", "Profil twórcy treści"),
                i("h042d1a6", "Profil w serwisie IMDB"),
                i("d2310f0c", "Profil w serwisie IMDB zawierający co najmniej 50 odnośników do produkcji filmowych."),
                i("ba04b4c2", "Dodaj profil w serwisie IMDB"),
                i("i9b124b6", "Pracownik organizacji rządowej"),
                i("f84a99ee", "Osoby na kluczowych stanowiskach rządowych, takie jak głowy państw, urzędnicy, ministrowie czy ambasadorzy na szczeblu regionalnym lub krajowym."),
                i("j2cb5f50", "Kandydat na stanowisko"),
                i("j2472894", "Oficjalni kandydaci na stanowiska publiczne na szczeblu regionalnym lub krajowym."),
                i("ha44c130", "Stanowisko rządowe lub urząd publiczny"),
                i("j8ae9d40", "Kluczowe stanowiska rządowe i instytucje państwowe oraz organizacje pożytku publicznego."),
                i("ef1d6176", "Kandydujesz na stanowisko na szczeblu regionalnym lub krajowym?"),
                i("f54ba6e6", "Aby uzyskać weryfikację konta w tej kategorii, musisz aktualnie kandydować w wyborach na stanowisko rządowe na szczeblu regionalnym lub krajowym."),
                i("dd85d0a0", "Zajmujesz ważne stanowisko na szczeblu regionalnym lub krajowym?"),
                i("f0058c60", "Aby uzyskać weryfikację konta w tej kategorii, musisz aktualnie zajmować stanowisko rządowe na szczeblu regionalnym lub krajowym."),
                i("f420a712", "Tak"),
                i("fb97d22c", "Nie"),
                i("e16b1cc8", "Czy Twój profil spełnia wymagania dotyczące kont kandydatów startujących w wyborach?"),
                i("cf2ee92e", "Kandydaci w wyborach muszą mieć konta publiczne wskazujące stanowiska, na które kandydują, oraz zawierające odnośniki do oficjalnych stron kampanii wyborczych."),
                i("g544885e", "Czy Twój profil spełnia wymagania dotyczące stanowisk rządowych i instytucji państwowych?"),
                i("bd0b4542", "Przedstawiciele urzędów i instytucji państwowych muszą mieć konta publiczne zawierające odnośniki do ich oficjalnych stron."),
                i("i45b224c", "Czy Twój profil spełnia wymagania dotyczące kont osób zajmujących stanowiska rządowe?"),
                i("fba1dd66", "Pracownicy rządowi muszą mieć konta publiczne wskazujące ich aktualne stanowiska i zawierające odnośniki do oficjalnych stron urzędów."),
                i("e95c44de", "Profil zawiera wymagane dane"),
                i("fa5e15e2", "Wymagane jest uzupełnienie profilu"),
                i("jdf47e8e", "Strona kampanii wyborczej"),
                i("eeec7316", "Dodaj stronę kampanii wyborczej"),
                i("b163b654", "Odnośnik do strony rządowej"),
                i("d2378d34", "Dodaj odnośnik do strony rządowej"),
                i("a05b8446", "Dziennikarz-freelancer"),
                i("hdad12b2", "Niezależni dziennikarze-freelancerzy, autorzy istotnych publikacji."),
                i("d2d7af4c", "Agencja informacyjna lub publicystyczna"),
                i("d83e51dc", "Publikacje drukowane i cyfrowe; telewizja na żywo, kablowa, satelitarna i online; radiowe sieci informacyjne, stacje i programy; podcasty i inne multimedia."),
                i("g708cbdc", "Czy Twój profil spełnia wymagania dotyczące weryfikacji kont?"),
                i("b107ee5c", "Agencje informacyjne muszą posiadać publiczne konta zawierające odnośnik do ich oficjalnej strony."),
                i("e8746826", "Konto mojego pracodawcy zostało już zweryfikowane."),
                i("jc09b420", "Czy Twój profil spełnia wymagania dotyczące kont dziennikarzy?"),
                i("gfbd7e58", "Każdy dziennikarz musi posiadać publiczne konto zawierające nazwę zweryfikowanej agencji informacyjnej, dla której pracuje, i linki do jej oficjalnej strony."),
                i("h0ad4c9e", "Wzmianka/i w serwisie oficjalnej agencji informacyjnej"),
                i("a6553b50", "Oficjalna strona zweryfikowanej agencji informacyjnej lub innej organizacji prasowej wskazującej Cię jako dziennikarza."),
                i("a29b2988", "Obecność na listach autorów lub współtwórców artykułów"),
                i("ab4eae60", "Autor lub współtwórca co najmniej trzech znaczących publikacji z ostatnich sześciu miesięcy."),
                i("b3fac982", "Link prowadzi do konkretnej strony, na której o mnie wspomniano."),
                i("e26dc9e2", "Dodaj odnośnik do istotnej publikacji"),
                i("e164df2e", "Czy wymienione artykuły spełniają kryteria dotyczące istotności?"),
                i("i80ff05e", "Jedynie artykuły opublikowane przez zweryfikowane agencje prasowe i publicystyczne spełniają nasze kryteria dotyczące istotności."),
                i("cf7482ec", "Tak"),
                i("fcb96cfc", "Osoba związana z profesjonalnym sportem"),
                i("ddc7d64a", "Profesjonalni sportowcy, trenerzy, menedżerowie, a także sportowcy biorący udział w międzynarodowych zawodach sportowych (np. olimpiadzie lub paraolimpiadzie)"),
                i("c4e0d346", "Profesjonalna organizacja sportowa"),
                i("e3ce81fa", "Profesjonalne ligi i drużyny oraz międzynarodowe zawody sportowe (np. olimpiada lub paraolimpiada)"),
                i("b2808f48", "Osoba ze świata gier"),
                i("db7b3558", "Indywidualne konta zawodników w e-sporcie, które są powiązane ze zweryfikowanymi zespołami lub ligami."),
                i("bbd9a912", "Drużyna, liga, organizacja lub wydarzenie powiązane z moim kontem są już zweryfikowane."),
                i("he9c5638", "Link do oficjalnej strony międzynarodowych zawodów sportowych lub organizacji sportowej, które wspominają o Tobie."),
                i("bf06e1d6", "Oficjalna strona związana z profesjonalną organizacją sportową wskazująca Cię jako profesjonalnego sportowca, menedżera lub trenera."),
                i("e241d35e", "Co najmniej trzy artykuły ze zweryfikowanych agencji informacyjnych lub publikacji, które wskazują Cię jako profesjonalnego sportowca, menedżera lub trenera."),
                i("ad456030", "Co najmniej trzy artykuły ze zweryfikowanych agencji informacyjnych lub publikacji, które wskazują Cię jako osobę ze świata gier."),
                i("hbe2e65c", "Oficjalna strona powiązana ze zweryfikowaną ligą e-sportową lub zweryfikowanym wydarzeniem e-sportowym, która wskazuje Cię jako osobę ze świata gier."),
                i("j3da4dea", "Nie możesz teraz złożyć wniosku o weryfikację konta"),
                i("af39265e", "Spółki, marki i organizacje"),
                i("bb51cd7a", "Sport i gry"),
                i("c044a571", "Dowiedz się więcej"),
                i("a58cd1fb", "Dowiedz się więcej"),
                i("b47b0fd1", "Dowiedz się więcej"),
                i("db25263b", "Dowiedz się więcej"),
                i("b25b02c3", "Dowiedz się więcej"),
                i("j6ef6afb", "Dowiedz się więcej"),
                i("d42d162b", "Dowiedz się więcej"),
                i("ccadfc85", "Dowiedz się więcej"),
                i("ddb47f57", "Dowiedz się więcej"),
                i("bf9e181b", "Dowiedz się więcej"),
                i("e8e39f95", "Dowiedz się więcej"),
                i("e126dd3f", "Dowiedz się więcej"),
                i("i821844f", "Dowiedz się więcej"),
                i("b0abbb17", "Dowiedz się więcej"),
                i("e7e0d88b", "Dowiedz się więcej"),
                i("i560665f", "Dowiedz się więcej"),
                i("f6e774d9", "Dowiedz się więcej");
            i("h486f755", "Dowiedz się więcej"),
                i("bab41dab", "Dowiedz się więcej"),
                i("e0ebdb29", "Dowiedz się więcej"),
                i("f8493831", "Dowiedz się więcej"),
                i("icb5913f", "Dowiedz się więcej"),
                i("af819833", "Dowiedz się więcej"),
                i("d35525b1", "Dowiedz się więcej"),
                i("cb181ed1", "Dowiedz się więcej"),
                i("f6c3d3f1", "Dowiedz się więcej"),
                i("d4588ded", "Dowiedz się więcej"),
                i("a759bff9", "Dowiedz się więcej"),
                i("c64a59f7", "Dowiedz się więcej"),
                i("c054f433", "Dowiedz się więcej"),
                i("c1b7ad51", "Dowiedz się więcej"),
                i("f7998565", "Dowiedz się więcej"),
                i("c74a47ef", "Dowiedz się więcej"),
                i("gf9899bf", "Dowiedz się więcej"),
                i("d7a9185d", "Dowiedz się więcej"),
                i("c4b205e1", "Dowiedz się więcej"),
                i("c04b4b1d", "Dowiedz się więcej"),
                i("d26ccc67", "Dowiedz się więcej"),
                i("hdb3bc85", "Dowiedz się więcej"),
                i("b6cb494f", "Dowiedz się więcej"),
                i("abc132eb", "Dowiedz się więcej"),
                i("de1b28ad", "Dowiedz się więcej"),
                i("h04c272d", "Dowiedz się więcej"),
                i("j331c659", "Dowiedz się więcej"),
                i("h02fe64f", "Dowiedz się więcej"),
                i("a7df4b85", "Dowiedz się więcej"),
                i("e9b71903", "Dowiedz się więcej"),
                i("g961011f", "Learn more"),
                i("d5dedb7b", "Dowiedz się więcej"),
                i("gd396551", "Dowiedz się więcej"),
                i("dccc08bf", "Dowiedz się więcej"),
                i("f22a6d0d", "Dowiedz się więcej"),
                i("i78c9fd5", "Dowiedz się więcej"),
                i("f3e333a9", "Dowiedz się więcej"),
                i("i5fee6d3", "Dowiedz się więcej"),
                i("fe7420f5", "Dowiedz się więcej"),
                i("fcfad60d", "Dowiedz się więcej"),
                i("cc35a6b9", "Dowiedz się więcej"),
                i("d9bd3823", "Dowiedz się więcej"),
                i("a67f27bd", "Dowiedz się więcej"),
                i("b8be7adb", "Dowiedz się więcej"),
                i("gd663f41", "Dowiedz się więcej"),
                i("b436b101", "Dowiedz się więcej"),
                i("j97bce4a", "Nazwa X"),
                i("acd5ca14", "Spróbuj ponownie. Nazwy użytkowników nie mogą zawierać znaków specjalnych, jak: @, $ czy #."),
                i("bbef41c2", "Sprawdź oficjalny adres e-mail powiązany z Twoim wnioskiem o weryfikację w serwisie X."),
                i("be03ecca", "Adres e-mail"),
                i("c69a40de", "Nie masz jeszcze zweryfikowanego adresu e-mail."),
                i("c83a1662", "Nie masz zweryfikowanego adresu e-mail."),
                i("e1e878ee", "Ustawień"),
                i("b9635182", "Ustawień"),
                i("j163be32", "Utwórz prośbę"),
                i("gaf821c8", "Prośba o weryfikację"),
                i("e1ac0f9b", "Dowiedz się więcej"),
                i("h2d4ba56", "Sprawdzamy Twój identyfikator..."),
                i("i2051842", "Sprawdzamy, czy Twój identyfikator spełnia nasze standardy. Może to potrwać do 30 sekund."),
                i("fc2a5c92", "Coś poszło nie tak"),
                i("jf4b6f70", "Wystąpił błąd podczas wczytywania Twojego identyfikatora. Spróbuj ponownie."),
                i("d338f53e", "Spróbuj ponownie"),
                i("e43672a0", "Podaj wymagane informacje dotyczące Twojego urzędowego dokumentu tożsamości"),
                i("b246aa5e", "Kraj wydania"),
                i("d6fb5878", "Zmień państwo"),
                i("b72f97cc", "Typ dokumentu tożsamości"),
                i("b2ab6008", "Wybierz typ dokumentu tożsamości"),
                i("h9270b1c", "Wyszukaj kraj"),
                i("ff1d68f8", "Wczytaj zdjęcie dokumentu tożsamości"),
                i("bdada5a6", "Awers"),
                i("edfed0f6", "Wczytaj awers dokumentu"),
                i("def5015d", function (e) {
                    return "Rewers" + e.back_of_document;
                }),
                i("b09aade6", "Wczytaj awers dokumentu tożsamości"),
                i("b40ed190", "Dokument"),
                i("c6650b56", "Wczytaj dokument"),
                i("d171ed16", "Zwracamy się do zaufanych stron trzecich z prośbą o pomoc w weryfikacji autentyczności Twojego identyfikatora i udzielenie nam ograniczonych informacji oraz dostępu do odpowiednich źródeł w celu weryfikacji Twojego konta."),
                i("d20f76cb", "Dowiedz się więcej"),
                i("b8deb156", "Polityce prywatności"),
                i("b9960f32", "Dodaj zdjęcia lub film"),
                i("gd80afba", "Edytuj multimedia"),
                i("j322caee", "Oznacz nieodpowiednie multimedia"),
                i("abd845fe", "Edytuj"),
                i("df1b0708", "Odtwórz ten plik GIF"),
                i("cd959e5c", "Usuń multimedia"),
                i("add55c98", "Multimedia"),
                i("f350cf46", "Przeciągnij i upuść multimedia"),
                i("gff1f69e", "Wczytywanie obrazu"),
                i("a91bb144", "Wyślij"),
                i("affce770", "Twitter i zaufane strony trzecie użyją tych informacji powiązanych z Twoim kontem i dodatkowych udzielonych nam informacji w celu potwierdzenia autentyczności Twojego wniosku i weryfikacji Twojego konta."),
                i("i0864918", "Kategoria"),
                i("c7942074", "Typ konta"),
                i("b8121daa", "Odnośniki wskazujące na dużą widoczność"),
                i("d247ca70", "Sprawdź poniższe szczegóły Twojego wniosku o weryfikację. Jeśli wszystko się zgadza, złóż wniosek."),
                i("b51afbb2", "Metoda weryfikacji"),
                i("cc87b01c", "Sprawdź i prześlij"),
                i("ec6801cc", "Prośba została przesłana!"),
                i("i6ef95ec", "ankietę"),
                i("j94e995e", "Twój ostatni wniosek o weryfikację konta został odrzucony. Kolejny wniosek możesz złożyć po upływie 30 dni."),
                i("da458d6c", "W ciągu ostatnich 30 dni złożyłeś/aś wniosek o weryfikację konta, który odrzucono. Spróbuj ponownie w innym terminie."),
                i("j4ed9f0e", "Złożyłeś/aś wniosek o weryfikację konta. Wkrótce skontaktujemy się z Tobą."),
                i("b1ade780", "Twoje konto jest zbyt nowe. Poczekaj, aż Twoje konto będzie mieć co najmniej 7 dni, i spróbuj ponownie."),
                i("aab67626", "Twój wniosek o weryfikację konta jest przetwarzany"),
                i("d3c1e25e", "Nie, to nie złudzenie. Twoje konto pomyślnie przeszło weryfikację."),
                i("a8b4500e", "Zasad"),
                i("ef1b5cbc", "Wybierz, które powiadomienia chcesz dostawać — a których nie."),
                i("aaafffda", "Wyciszono powiadomienia"),
                i("afdf29b8", "Filtr jakości"),
                i("da19d878", "Możesz odfiltrować wybrane treści, takie jak powtarzające się lub automatyczne wpisy. Nie dotyczy to powiadomień z kont, które obserwujesz, ani kont, z którymi ostatnio wchodzono w interakcję."),
                i("i2209530", "Zapisz"),
                i("da867c58", "Zdefiniuj swoje ustawienia według typu powiadomień."),
                i("a2197726", "Zarządzaj bezpieczeństwem swojego konta."),
                i("i36dcc3e", "Pomóż chronić swoje konto przed dostępem nieupoważnionych osób dzięki dodatkowej metodzie weryfikacji logowania (oprócz hasła do serwisu X). Może to być wiadomość SMS, aplikacja uwierzytelniająca lub klucz zabezpieczeń."),
                i("ead60eb8", "Dodatkowa ochrona hasłem"),
                i("gfaf9a4a", "Ochrona resetowania hasła"),
                i("h3cc8462", "W celu zwiększenia ochrony poprosimy Cię o potwierdzenie adresu e-mail lub numeru telefonu, gdy będziesz resetować hasło do serwisu X."),
                i("b4bbdeb4", "Klucz dostępu"),
                i("aeb7dcdc", "Włącz klucze dostępu, aby dodać funkcję ochrony, którą można powiązać z Twoimi danymi biometrycznymi."),
                i("dc096238", "Prześlij kopię dokumentu tożsamości, aby potwierdzić autentyczność swojego konta. Twoje dane osobowe posłużą nam jedynie w celu potwierdzenia Twojej tożsamości i dołożymy wszelkich starań, aby zadbać o ich bezpieczeństwo."),
                i("a999cb72", "Zapisz zmiany na koncie"),
                i("dec3c9b8", "Hasło"),
                i("b929aa74", "Aby zapisać zmiany w ustawieniach konta, wprowadź ponownie hasło do serwisu X."),
                i("d1091f50", "Nie pamiętasz hasła?"),
                i("d97c07be", "Zarządzaj subskrypcjami twórców treści"),
                i("efa291da", "Wyświetl poniższe subskrypcje twórców zawartości i zarządzaj nimi za pomocą usługi Stripe. Wszystkimi aktywnymi subskrypcjami, które zostały zainicjowane w systemie iOS lub Android, można zarządzać w aplikacji."),
                i("j7f5c6aa", "Nie masz jeszcze żadnych subskrypcji"),
                i("ef4602ec", "Coś poszło nie tak. Spróbuj ponownie później."),
                i("b02df748", "Zarządzaj ustawieniami bezpieczeństwa i przeglądaj dane dotyczące korzystania z Twojego konta, w tym informację o tym, jakie aplikacje powiązane są z Twoim kontem."),
                i("g2841de4", "Zobacz dane dotyczące czasu, w którym logowałeś/aś się na swoje konto i powiązanych aplikacji."),
                i("hf45cca6", "Aby się zalogować, zarządzaj kontem Google lub Apple powiązanym z serwisem X."),
                i("a310511c", "Zarządzaj współdzielonymi kontami."),
                i("jc02ae68", "Połączone aplikacje"),
                i("dd82312a", "Aktywne sesje"),
                i("e5e8a89a", "Wczytywanie aplikacji"),
                i("hfa9a2c8", "Łatwe zarządzanie powiązanymi aplikacjami"),
                i("dd1b86f9", function (e) {
                    return "od " + e.name;
                }),
                i("cf461930", "Aplikacje stron trzecich, którym udzielisz dostępu do Twojego konta w serwisie X, będą widoczne w tym miejscu."),
                i("b63b0b1d", "Dowiedz się więcej"),
                i("c2cb5560", "Bieżąca sesja"),
                i("bca43fd0", "Wyloguj się na wszystkich innych urządzeniach"),
                i("ha6df2ca", "Sesje to urządzenia używane lub użyte w celu zalogowania się do konta w serwisie X. Na liście są wymienione sesje, w których aktualnie jest zalogowane Twoje konto. Możesz wylogować się z każdej sesji."),
                i("b72d2904", "Na tym urządzeniu zalogowano się do konta w serwisie X i aktualnie go używasz."),
                i("b850cbd0", "Logowałeś/aś się na te konta z tych urządzeń, których już nie używasz. "),
                i("cf3e3164", "Wyloguj się na wszystkich urządzeniach"),
                i("f810f27a", "Czy chcesz zakończyć inne sesje?"),
                i("gbb5cec5", function (e) {
                    return "Wylogowanie spowoduje zakończenie Twoich aktywnych sesji (" + e.num + ") w serwisie X. Aktywna sesja nie zostanie przerwana.";
                }),
                i("fcbd4904", "Spowoduje to zakończenie Twojej aktywnej sesji w serwisie X."),
                i("ab78d946", "Zamierzasz zakończyć swoje aktywne sesje w serwisie X. Aby rozpocząć nowe sesje, trzeba będzie zalogować się ponownie na tych urządzeniach."),
                i("e186a3d6", function (e) {
                    return "" + e.learnMoreLabel;
                }),
                i("ed5ab16a", "Aktywna teraz"),
                i("c9bc33fa", "Urządzenia"),
                i("f95ed3e6", "Bieżące urządzenie"),
                i("a787669a", "Rejestracje innych urządzeń"),
                i("gbefe730", "Te inne urządzenia zostały zarejestrowane na potrzeby obsługi szyfrowanych prywatnych wiadomości."),
                i("d7a9796e", "Ładowanie urządzeń"),
                i("b5635e86", "Zarejestruj to urządzenie"),
                i("bb4a95dc", "Zarejestrować urządzenie?"),
                i("a9538040", "Zarejestrowanie tego urządzenia umożliwi Ci rozpoczynanie nowych szyfrowanych rozmów z innymi zarejestrowanymi użytkownikami"),
                i("hd173c7a", "Zarejestruj"),
                i("hf4312a4", "Urządzenie zostało wyrejestrowane."),
                i("h7797d18", "Zarejestrowano"),
                i("hc48a042", "Wyrejestruj to urządzenie"),
                i("d5bafb20", "Wyrejestrować to urządzenie?"),
                i("i12dee70", "Wyrejestrowanie urządzenia spowoduje, że nie będziesz mieć już dostępu do przechowywanych na nim zaszyfrowanych wiadomości."),
                i("d4b9db26", "Wyrejestruj"),
                i("c18b1b34", "Data i godzina rejestracji"),
                i("e7c9d60a", "Wybrane urządzenie zostało wyrejestrowane."),
                i("cd14c8fe", "Ładowanie informacji o urządzeniu"),
                i("j9db22f4", "Nie możemy znaleźć tego urządzenia"),
                i("c477d710", "Zarządzaj informacjami, które widzisz i udostępniasz w serwisie X."),
                i("b06f5d36", "Twoja aktywność w serwisie X"),
                i("fd807e78", "Odbiorcy, multimedia i oznaczanie"),
                i("a9ff473c", "Określ, jakie informacje na Twój temat mogą widzieć inni użytkownicy serwisu X."),
                i("d0484606", "Zarządzaj informacjami skojarzonymi z Twoimi wpisami."),
                i("c4afe0e6", "Decyduj o tym, jakie treści widzisz w serwisie X, na podstawie swoich preferencji, takich jak tematy i zainteresowania"),
                i("ab125232", "Zarządzaj wyciszonymi i zablokowanymi kontami, słowami i powiadomieniami."),
                i("cc950d94", "Zdecyduj o tym, kto może wysłać do Ciebie prywatne wiadomości."),
                i("fe37f854", "Określ, kto może zobaczyć informacje o Pokojach, których jesteś słuchaczem"),
                i("ab987f3c", "Dostosuj swoje ustawienia odkrywania i zarządzaj kontaktami, które zaimportowałeś/aś."),
                i("db5fabb0", "Udostępnianie danych i aktywność poza serwisem X"),
                i("i83cab8a", "Personalizacja i udostępnianie danych"),
                i("e338a794", "Zarządzaj reklamami w serwisie X."),
                i("c05e8024", "Zarządzaj plikami cookie w serwisie X."),
                i("d29d59d0", "Zarządzaj możliwościami używania przez serwis X danych o Twojej aktywności poza serwisem X, na przykład informacji o odwiedzanych przez Ciebie witrynach internetowych, w celu personalizacji Twojego środowiska."),
                i("c981a36c", "Zezwalaj na personalizację Twoich ustawień na podstawie Twojej pozostałej aktywności, np. na urządzeniach, za pomocą których nie logujesz się do serwisu X."),
                i("eb0cc786", "Zezwalaj na udostępnianie dodatkowych informacji partnerom biznesowym serwisu X."),
                i("dd533318", "Zarządzaj danymi lokalizacji, które wykorzystujemy, aby lepiej dostosowywać wybierane dla Ciebie treści."),
                i("bd0646a0", "Dowiedz się więcej o ochronie prywatności w serwisie X"),
                i("a607862a", "Polityka prywatności"),
                i("g5925628", "Kontakt"),
                i("dd6012f8", "Centrum prywatności"),
                i("jdceda60", "Odpowiedzi"),
                i("f644b748", "Zdecyduj, kto może odpowiadać na Twoje wpisy i odfiltrowane odpowiedzi."),
                i("ff4b3818", "Grok i współpracownicy zewnętrzni"),
                i("i586f3e0", "Zezwalaj firmie xAI na używanie Twoich publicznych danych oraz interakcji, danych wejściowych i wyników na potrzeby szkolenia Groka i dostrajania jego działania"),
                i("d8492604", "Po wybraniu tej opcji Twoje wpisy i inne informacje dotyczące Twojego konta będą widoczne tylko dla osób, które Cię obserwują."),
                i("if050fae", "Chroń swoje filmy"),
                i("b7ed5f6e", "Wybranie tego ustawienia spowoduje, że filmy znajdujące się w Twoich wpisach domyślnie nie będą dostępne do pobrania. To ustawienie ma zastosowanie do wpisów tworzonych po wybraniu go i nie dotyczy wcześniej utworzonych wpisów."),
                i("dbb51952", "Chronić Twoje wpisy?"),
                i("de735de6", "Odpowiedzi będą widoczne tylko dla Twoich obserwujących w serwisie X."),
                i("c5d4192a", "Chroń"),
                i("d9ddba70", "Grupy dyskusyjne są publiczne, dlatego włączenie ochrony konta spowoduje ukrycie Twoich poprzednich wpisów. Nie będziesz również mieć możliwości publikowania w grupie dyskusyjnej, dopóki Twoje konto nie będzie znowu publiczne."),
                i("f527b322", "Chroń moje konto"),
                i("d165c992", "Każdy może Cię oznaczać"),
                i("ea339390", "Tylko osoby, które obserwujesz, mogą Cię oznaczać"),
                i("e3a761ee", "Wył."),
                i("a61ed23a", "Oznacz multimedia, które publikujesz, jako zawierające potencjalnie nieodpowiednie materiały"),
                i("ae27c454", "Po wybraniu tej opcji zdjęcia i filmy dołączone do Twoich wpisów będą oznaczone jako nieodpowiednie dla użytkowników, którzy nie chcą widzieć nieodpowiednich treści."),
                i("fc1d217c", "Wyświetl multimedia, które mogą zawierać nieodpowiednie treści"),
                i("j018f2a2", "Ustawienia funkcji Odkryj"),
                i("h1ef00dc", "Ustawienia wyszukiwania"),
                i("b05b9398", "Po włączeniu tego ustawienia w serwisie X będzie możliwe personalizowanie treści, które są dostępne na osi czasu Dla Ciebie, na podstawie Twojej aktywności w serwisie X."),
                i("a3c1324c", "Pokaż polecane treści na osi czasu Dla Ciebie"),
                i("ee4592ca", "Nikt"),
                i("da813d22", "Zweryfikowani użytkownicy"),
                i("baffe39a", "Wszyscy"),
                i("b3d8566e", "Filtruj wiadomości o niskiej jakości"),
                i("cfda8c44", "Ukryj zaproszenia do rozmowy, które potencjalnie stanowią spam lub mogą być niskiej jakości. Zostaną one umieszczone w osobnej skrzynce, na dole Twojej listy zaproszeń do rozmowy. Możesz je odczytać w dowolnym momencie."),
                i("f4c91f40", "Zezwalaj na wiadomości od moich subskrybentów"),
                i("bf0c4336", "Twoi subskrybenci zawsze będą mogli wysyłać Ci wiadomości niezależnie od innych ustawień wiadomości."),
                i("e6c411d8", "Filtruj multimedia potencjalnie zawierające nieodpowiednie treści"),
                i("g558101a", "Wyświetlaj ostrzeżenia dotyczące multimediów, które mogą zawierać nieodpowiednie treści (takie jak nagość, treści erotyczne lub przemoc). Niezależnie od tego zawsze możesz wyświetlić wybrane multimedia."),
                i("d9172542", "Pokazuj potwierdzenia odbioru"),
                i("bd557506", "Pozwól, aby osoby, z którymi rozmawiasz widziały potwierdzenia odczytu. Potwierdzenia odczytu nie są widoczne w zaproszeniach do rozmowy."),
                i("f29080d0", "Zezwalaj na zaproszenia do rozmowy od:"),
                i("j0adcc2d", "Dowiedz się więcej"),
                i("ib3357a6", "Spersonalizowane reklamy"),
                i("f2f9628e", "Reklamy w serwisie X są zawsze personalizowane na podstawie Twojej aktywności w serwisie X. Po włączeniu tego ustawienia reklamy w serwisie X i poza nim będą personalizowane na podstawie Twojej aktywności w serwisie X i pozostałej aktywności online oraz informacji od naszych partnerów."),
                i("b5fe50fc", "Kategorie reklam"),
                i("c31a2ea6", "Za pomocą poniższych ustawień możesz zdecydować o kategoriach reklam, które będziesz widzieć. Aby widzieć mniej reklam z wybranej kategorii, usuń zaznaczenie."),
                i("if996630", "Hazard"),
                i("a9ed7774", "Zezwalaj na używanie informacji o miejscach w Internecie, w których przeglądasz treści z serwisu X"),
                i("e2d61838", "To ustawienie umożliwia serwisowi X zbieranie informacji o Twoich wizytach w innych witrynach internetowych, które mogą zawierać treści z serwisu X, np. osadzone osie czasu. Pozwala nam to ulepszać serwis X dla Ciebie, na przykład przez personalizację Twojego środowiska. W historii przeglądania Internetu nigdy nie będzie przechowywane Twoje imię i nazwisko, adres e-mail ani numer telefonu. "),
                i("c966aaf4", "Te informacje o odwiedzanych stronach nie są przechowywane ani wykorzystywane, gdy przebywasz w niektórych krajach."),
                i("e8313b32", "Na pewno? Po wyłączeniu tej opcji nie można jej włączyć ponownie w tym kraju."),
                i("f1d46fd6", "Tak, na pewno"),
                i("f6c8ccc8", "Personalizuj na podstawie dodatkowych informacji"),
                i("ed012c88", "Personalizacja Twojego konta w serwisie X zawsze jest wykonywana na podstawie podanych przez Ciebie informacji oraz urządzeń używanych w celu logowania do serwisu X. Po włączeniu tej opcji serwis X może powiązać Twoje konto również z innymi danymi dotyczącymi Ciebie pośrednio, takimi jak urządzenia i przeglądarki, które nie były przez Ciebie używane w celu logowania się do serwisu X, lub adresy e-mail i numery telefonów podobne do tych powiązanych z Twoim kontem."),
                i("d3c20d80", "Zezwalaj na udostępnianie dodatkowych informacji naszym partnerom biznesowym"),
                i("f1c0d09c", "Zawsze udostępniamy naszym partnerom informacje, które pomagają nam obsługiwać oraz rozwijać produkty i usługi serwisu X. Wybranie tej opcji umożliwia nam udostępnianie naszym partnerom dodatkowych informacji, które pomagają podnosić jakość naszych usług, między innymi poprzez lepsze dopasowywanie do Ciebie treści reklamowych na innych stronach i w innych aplikacjach."),
                i("dc20d918", "Personalizuj na podstawie odwiedzanych miejsc"),
                i("af7d89e6", "Korzystamy z pewnych informacji, takich jak miejsce rejestracji lub Twoja obecna lokalizacja, aby lepiej dostosowywać wybierane dla Ciebie treści. To ustawienie pozwoli nam dobierać treści również na podstawie innych odwiedzonych przez Ciebie miejsc."),
                i("f2b23062", "Dostępność, wyświetlanie i języki"),
                i("fa76d7dc", "Zdecyduj, jakie treści chcesz widzieć w serwisie X."),
                i("j7a15010", "Zarządzaj różnymi aspektami konta w serwisie X, w tym kontrastem kolorów i zakresem ruchu."),
                i("a257ecae", "Zarządzaj ustawieniami rozmiaru czcionki, koloru i tła. Te ustawienia będą mieć wpływ na wszystkie konta w serwisie X używane w tej przeglądarce."),
                i("jc3fa0e2", "Wskaż języki, które pomogą nam dopasować wybierane dla Ciebie treści."),
                i("cc2973a8", "Ogranicz sposób wykorzystywania w serwisie X Twoich danych sieciowych z tego urządzenia."),
                i("h54e6138", "Skróty klawiszowe"),
                i("a4b69cbc", "Język wyświetlania"),
                i("c856bd00", "Wybierz preferowany język nagłówków, przycisków i innych elementów interfejsu serwisu X."),
                i("cab61d58", "Wybierz dodatkowe języki"),
                i("dd93fafa", "Wybierz dodatkowe języki, w których chcesz widzieć treści w serwisie X."),
                i("bca1de4a", "Inne języki, które znasz"),
                i("c3aa76c4", "Języki, które możesz znać"),
                i("g099069c", "Zarządzaj listą języków utworzoną na podstawie Twoich aktywności, takich jak konta, które obserwujesz, oraz wpisy, na które reagujesz."),
                i("cf9ce876", "Języki aplikacji i wpisów"),
                i("d4372cf4", "English (US), 中文(简体), Español"),
                i("f8e46b90", "Są to konta społecznościowe powiązane z Twoim kontem w serwisie X na potrzeby logowania. W tym miejscu możesz wyłączyć dostęp."),
                i("d84ed6b2", "Usuń"),
                i("i51130d4", "Google"),
                i("e28901f2", "Apple"),
                i("cf8560be", "Powiązano"),
                i("ad31b476", "Zarządzaj zautomatyzowanym kontem."),
                i("a2981062", "Konto zarządzające"),
                i("aff4540e", "Zmień konto zarządzające"),
                i("b8b9d100", "Włącz automatyzację konta"),
                i("e0bc51f6", "Wyłącz automatyzację konta"),
                i("b92190c2", "Powiązano konto zarządzające"),
                i("fb03b39a", "Usunięto konto zarządzające"),
                i("bd51ddfa", "Nie udało się usunąć konta zarządzającego. Spróbuj ponownie później."),
                i("e91c15f6", "Usunąć konto zarządzające?"),
                i("df035b80", "Zautomatyzowane konto straci swoje oznaczenie, jeśli usuniesz konto zarządzające."),
                i("bd12cf34", "Tak, usuń"),
                i("f79acef3", "Dowiedz się więcej"),
                i("a57a341c", "Tryb oszczędnego zużycia danych"),
                i("ab6505a8", "Po wybraniu tej opcji serwis X będzie wykorzystywał mniejszą ilość danych sieciowych."),
                i("a5d4fda0", "Wystąpił błąd, ale nie martw się – spróbuj ponownie."),
                i("g1888dc2", "Nigdy"),
                i("f724d1aa", "Tylko podczas korzystania z Wi-Fi"),
                i("cf6472c2", "Podczas korzystania z danych komórkowych lub Wi-Fi"),
                i("b2ed92c4", "Wniosek o udostępnienie archiwum danych"),
                i("ce5d2c46", "Tymczasowy brak dostępu"),
                i("bed6a87c", "Link umożliwiający pobranie Twoich danych z serwisu X wygasł"),
                i("b24b4768", "Przejdź do sekcji Moje dane z serwisu X"),
                i("a0c3f812", "Aby uzyskać zaktualizowane dane, musisz ponownie złożyć wniosek o ich udostępnienie."),
                i("eea30bb5", function (e) {
                    return "Wygenerowano: " + e.date;
                }),
                i("f2cde471", function (e) {
                    return "Wygasa: " + e.date;
                }),
                i("b7ce9dbf", function (e) {
                    return "Szacowany rozmiar: " + e.size;
                }),
                i("d3de4c97", function (e) {
                    return "Dane z serwisu X (" + e.currentIndex + " z " + e.count + ")";
                }),
                i("fc5bfd96", "Rozpocznij"),
                i("gee8110e", "Pobierz archiwum"),
                i("c326f156", "Pobrano archiwum"),
                i("c9fe9b56", "Twoje archiwum za chwilę zostanie pobrane"),
                i("j54b679b", function (e) {
                    return "Podgląd pobierania otworzy się w osobnym oknie. Pobieranie może chwilę potrwać. Plik o rozmiarze " + e.size + " zostanie zapisany w formacie ZIP.";
                }),
                i("ac63840d", function (e) {
                    return e.size + " KB";
                }),
                i("bcd9b0ed", function (e) {
                    return e.size + " MB";
                }),
                i("ce494bb4", "Rozmiar czcionki"),
                i("c783d45e", "Kolor"),
                i("h306a358", "Tło"),
                i("d8680056", "Bardzo mały"),
                i("j59f0b94", "Domyślnie"),
                i("b81aaad8", "Duży"),
                i("c7044880", "Bardzo duży"),
                i("e46dffa0", "Rozmiar tekstu"),
                i("ce8a8116", "Opcje tła"),
                i("d3d48f3a", "Bardzo jasny"),
                i("i76f67ee", "Zmierzch"),
                i("c8f85960", "Noc"),
                i("aefc5b20", "Opcje kolorystyczne"),
                i("a52d0fde", "Niebieski"),
                i("d818cdd6", "Żółty"),
                i("fee1cd64", "Różowy"),
                i("cbed7fb2", "Fioletowy"),
                i("g697ec02", "Pomarańczowy"),
                i("a7c2204a", "Zielony"),
                i("gde8fdd7", function (e) {
                    return "Serwis X składa się z krótkich wiadomości zwanych wpisami, takich jak ta, które mogą zawierać zdjęcia, filmy, linki, tekst, tagi i wzmianki, takie jak @" + e.mention + ".";
                }),
                i("f277e94a", "Wyświetl"),
                i("ee79367b", function (e) {
                    return "Poziom " + e.conversationTreeDepth + ":";
                }),
                i("ec6907ba", "Reklama"),
                i("d9587114", "Zobacz najnowszy wpis"),
                i("b7b86c3c", "Otwiera nową wersję tego wpisu"),
                i("a407814e", "Ostatnia zmiana:"),
                i("i46ee3f0", "To jest najnowsza wersja tego wpisu."),
                i("e18cb87c", "Wyjaśnij ten wpis"),
                i("ffe16626", "Filtr odpowiedzi jest włączony"),
                i("jc81f6a7", function (e) {
                    return e.count + " wyświetle" + n(e.count, "nia", "ń", "nie", "nia");
                }),
                i("g521abc6", "Grok, analiza!"),
                i("a09331e0", "Powiązane artykuły"),
                i("e3eceda6", "Akcje Groka"),
                i("a653f08f", function (e) {
                    return "Przeczytaj " + e.replyCount + " odpowiedzi";
                }),
                i("dc0c8266", "Zapytaj Groka"),
                i("i7ac410e", "Pokaż oryginał"),
                i("c67f09e8", "Pokaż tłumaczenie"),
                i("f396c105", function (e) {
                    return "" + e.displayCount;
                }),
                i("aa037e65", function (e) {
                    return "" + n(e.count, "wyświetlenia", "wyświetleń", "Wyświetlenie", "wyświetlenia");
                }),
                i("b8f3500a", "Wyświetl wątek na czytniku"),
                i("fc7db594", "Podsumowanie profilu"),
                i("c3f04d9c", "Myślenie"),
                i("cbdddb0a", "Zakończony"),
                i("b0d1e205", function (e) {
                    return "Wyszukiwanie **„" + e.query + "”**";
                }),
                i("acb9b845", function (e) {
                    return "Przeglądanie witryny " + e.url + " w poszukiwaniu **„" + e.query + "”**";
                }),
                i("ef261d8d", function (e) {
                    return "Wyszukiwanie wpisów użytkownika @" + e.username;
                }),
                i("bec7eb11", function (e) {
                    return "Wyszukiwanie terminu **„" + e.query + "”** we wpisach użytkownika @" + e.username;
                }),
                i("ead81122", "Coś poszło nie tak. Odśwież, aby ponownie nawiązać połączenie lub spróbuj ponownie."),
                i("f808a13a", "Przekroczono limit częstotliwości. Zaczekaj chwilę i spróbuj ponownie."),
                i("e0481e5a", "Aktualnie Grok nie jest obsługiwany w Twoim kraju."),
                i("bc0a5b5a", "Grok jest aktualnie niedostępny. Spróbuj ponownie później."),
                i("ef674976", "Nie masz autoryzacji do używania tej usługi."),
                i("c74e87e0", "Ten plik jest zbyt duży. Wybierz mniejszy plik."),
                i("bea50a2a", "Ten format pliku nie jest obsługiwany."),
                i("j77292b7", function (e) {
                    return "Wybierz maksymalnie " + e.count + " plik" + n(e.count, "i", "ów", "", "u");
                }),
                i("d4d35bea", "Trwa tłumaczenie..."),
                i("he9c9634", "Nie udało się pobrać tłumaczenia"),
                i("j2198c98", "Ukryj przetłumaczony wpis"),
                i("i73a7d48", "Przetłumaczone przez Google"),
                i("eeadb767", function (e) {
                    return "Przetłumaczone z " + e.originLanguage + " przez Google";
                }),
                i("be9b9fb8", "Przetłumaczone przez Groka"),
                i("d9c6f69d", function (e) {
                    return "Przetłumaczone z języka " + e.originLanguage + " przez Groka";
                }),
                i("dc445f82", "Przetłumaczone przez Papago"),
                i("he9803d3", function (e) {
                    return "Przetłumaczone przez Papago z języka: " + e.originLanguage;
                }),
                i("f8264fc0", "Przetłumaczone przez: X"),
                i("caa5ba3d", function (e) {
                    return "Przetłumaczone z języka " + e.originLanguage + " przez: X";
                }),
                i("e0f81ff3", "Tłumaczenie:"),
                i("j2862695", function (e) {
                    return "Przetłumaczone z " + e.originLanguage + " przez";
                }),
                i("b7cb4fab", "Źródło tłumaczenia"),
                i("cbc8fed4", "Czy to tłumaczenie było dokładne? Przekaż opinię, co umożliwi nam wprowadzenie ulepszeń:"),
                i("d56779a2", "łatwe do zrozumienia"),
                i("b6fe8a56", "wątpliwe lub niejasne"),
                i("a66d80d0", "Przetłumacz wpis"),
                i("d4c339b9", function (e) {
                    return "Wpis użytkownika " + e.fullName + " (@" + e.screenName + ")";
                }),
                i("db0cb64f", function (e) {
                    return "Użytkownik " + e.fullName + " (@" + e.screenName + ") opublikował wpis:\n" + e.tweet;
                }),
                i("h6f99ac4", "Dodano do Zakładek"),
                i("g1c463f6", "Usunięto z Zakładek"),
                i("a2e7377f", function (e) {
                    return "Usunięto z folderu „" + e.bookmarkFolderName + "”";
                }),
                i("i47ad24c", "Nie przestawaj! Im więcej wpisów polubisz, tym lepsza będzie Twoja oś czasu."),
                i("def4a37c", "Dobra robota! Twoja oś czasu wygląda coraz lepiej. Im więcej polubień dodasz, tym lepsza będzie Twoja oś czasu. Jeśli coś Cię zainteresuje, pamiętaj, aby to polubić."),
                i("bcab06d2", "Polubiono wpis"),
                i("i5efe23e", "Anulowano polubienie wpisu"),
                i("f5d17674", "Wpis został podany dalej"),
                i("d714acfa", "Anulowano podanie dalej wpisu"),
                i("b18dff26", "Tylko subskrybenci mogą zobaczyć ten podany dalej wpis"),
                i("c2453318", "Dodaj do folderu"),
                i("f88553c8", "Skopiowano do schowka"),
                i("b5b36724", "Czy zamiast tego chcesz wysłać odpowiedź?"),
                i("gce00a2a", "Podać w zamian dalej?"),
                i("g271f120", "Szkic Twojego wpisu zostanie odrzucony, zanim odpowiesz."),
                i("gad04d1a", "Szkic Twojego wpisu zostanie odrzucony, zanim zacytujesz."),
                i("ibd021f2", "Nie chcesz najpierw przeczytać tego artykułu?"),
                i("bbef69c4", "Za chwilę udostępnisz artykuł, który nie został przez Ciebie otwarty w serwisie X."),
                i("g5092766", "Przeczytaj artykuł"),
                i("a2d5c006", "Dziękujemy za otwarcie tego linku"),
                i("g37bb2d0", "Otwieranie linków przed udostępnieniem ich pomaga promować merytoryczną dyskusję."),
                i("gc45a90a", "Rozwiń tę informację"),
                i("g7135e44", "Pomóż nam zapewnić rzetelność informacji przekazywanych w serwisie X. Dowiedz się więcej, zanim polubisz ten wpis."),
                i("h9b6d468", "Pomóż nam zapewnić rzetelność informacji przekazywanych w serwisie X. Dowiedz się więcej, zanim udostępnisz ten wpis."),
                i("af5cd00e", "Dowiedz się więcej"),
                i("e29c651e", "Dziękujemy za zapoznanie się z tą treścią"),
                i("ef504d80", "Nie możesz jeszcze dodawać do Zakładek wpisów z chronionych kont."),
                i("cef96d5a", "Wpis znajduje się już w Twoich Zakładkach"),
                i("b2542f56", "Wystąpił błąd. Zaczekaj chwilę i spróbuj ponownie dodać ten wpis do Zakładek."),
                i("fe3b9942", "Ten użytkownik zablokował Ci możliwość oznaczania jego wpisów jako polubionych."),
                i("c2a6dc5c", "Wystąpił błąd. Spróbuj ponownie polubić ten wpis za minutę."),
                i("b57f01b8", "Nie możesz polubić wpisów chronionych użytkowników, których nie obserwujesz."),
                i("ba0b3cc0", "Ten użytkownik zablokował Ci możliwość podawania dalej jego wpisów."),
                i("h32b1ac4", "Wystąpił błąd. Spróbuj ponownie podać dalej ten wpis za minutę."),
                i("e50cea9e", "Nie można podawać dalej tego wpisu."),
                i("d8e56f40", "Niestety, przekroczono limit liczby wpisów. Spróbuj ponownie podać dalej wpis jutro."),
                i("i14d7a46", "Wystąpił błąd. Zaczekaj chwilę i spróbuj ponownie usunąć ten wpis z Zakładek."),
                i("d4ebfeb0", "Spróbuj ponownie usunąć polubienie ze swojego wpisu za minutę. "),
                i("e639775e", "Poczekaj chwilę i spróbuj ponownie usunąć podanie dalej Tweeta."),
                i("fcad707a", "Dodaliśmy ostrzeżenie do tego wpisu, ponieważ może on zawierać nieodpowiednie treści."),
                i("f1824804", "Odwołaj się od tego ostrzeżenia"),
                i("f755f710", "Rozumiem"),
                i("ced4abbe", "Zobacz rozmowę"),
                i("d00e1d2a", "Dołącz do Grupy dyskusyjnej"),
                i("e6057014", "Poproś o dołączenie"),
                i("ba352986", "Nie możesz odpowiadać… jeszcze nie"),
                i("d09e76d8", "Grupy dyskusyjne są publiczne, więc możesz czytać wpisy, ale musisz dołączyć, aby móc wziąć udział w dyskusji."),
                i("cfa1f802", "Poznaj grupę dyskusyjną"),
                i("af27a0f8", "Usunięto Cię z tej grupy dyskusyjnej"),
                i("id089506", "Skontaktuj się z moderatorami grupy dyskusyjnej w sprawie przywrócenia członkostwa."),
                i("cac4e916", "Ten wpis został ukryty"),
                i("cb18be32", "Nie możesz tego robić… jeszcze nie"),
                i("dbb5fd8e", "Nie można podawać dalej wpisów pochodzących z kręgu"),
                i("ae2c8a1e", "Dlaczego nie można odpowiedzieć na tego Tweeta?"),
                i("afe7ba26", "Dlaczego nie można polubić tego Tweeta?"),
                i("df9e2356", "Dlaczego nie mogę dodać tego do Zakładek?"),
                i("jead3bc2", "Dlaczego nie można tego udostępnić?"),
                i("h2a668b8", "Dlaczego nie możesz wyświetlić analiz wpisu?"),
                i("bd85267e", "Dlaczego nie możesz podać tego dalej?"),
                i("dcc05a7e", "Wyświetlenia"),
                i("e213fada", "Liczba wyświetleń tego wpisu jest niedostępna."),
                i("g0954ea6", "Widzą go tylko autor wpisu i moderatorzy grupy dyskusyjnej, a interakcje są wyłączone."),
                i("e7969518", "Grupy dyskusyjne są publiczne, więc możesz czytać wpisy, ale w tej chwili tylko zaproszeni użytkownicy mogą dołączać do grup dyskusyjnych."),
                i("g2dc874a", "Grupy dyskusyjne są publiczne, więc możesz czytać wpisy, ale tylko członkowie grupy mogą wchodzić z nimi w interakcje."),
                i("g562676f", "Dowiedz się więcej"),
                i("ee574c37", "Dowiedz się więcej"),
                i("de2d83d6", "Dodaj zakładkę do folderu"),
                i("f14df406", "Kopiuj link do reklamy"),
                i("e05c00b4", "Kopiuj link"),
                i("f61c4bb0", "Wyślij w prywatnej wiadomości"),
                i("id35970e", "Opublikuj film"),
                i("ff9348b8", "Udostępnij reklamę przez…"),
                i("d03241f8", "Udostępnij wpis za pomocą..."),
                i("j08dd2d4", "Usuń z Zakładek"),
                i("b7fde1ea", "Usuń z folderu"),
                i("d9a2bd78", "Pobierz film"),
                i("fbfab656", "Udostępnij w pokoju"),
                i("e668112c", "Wpis został udostępniony w Pokoju"),
                i("g5775e46", "Zobacz cytaty"),
                i("bb192c6b", function (e) {
                    return "" + e.displayCount;
                }),
                i("f23d99b0", function (e) {
                    return "Zakład" + n(e.count, "ki", "ek", "ka", "ek");
                }),
                i("e8866a55", function (e) {
                    return "" + e.displayCount;
                }),
                i("eb3abe45", function (e) {
                    return "" + n(e.count, "Lubię to", "Lubię to", "Polubienie", "Polubień");
                }),
                i("eff958fb", function (e) {
                    return "" + e.displayCount;
                }),
                i("i5a8c515", function (e) {
                    return "Cytat" + n(e.count, "y", "ów", "", "ów");
                }),
                i("dd77f9fb", function (e) {
                    return "" + e.displayCount;
                }),
                i("a755b81b", function (e) {
                    return "Wpis" + n(e.count, "y podane", "y podane", " podany", "y podane") + " dalej";
                }),
                i("e9f1fbcc", "Nic tu jeszcze nie ma."),
                i("a3b80be6", "Wróć tu później, aby zobaczyć wpisy na ten temat."),
                i("d93b360a", "Ta kolumna została wyczyszczona. Gdy zostanie utworzonych więcej wpisów, będą one widoczne powyżej."),
                i("d6e2f9be", "Wczytywanie osi czasu"),
                i("afb4c24a", "Brak elementów"),
                i("e5b0063d", function (e) {
                    return "Oś czasu: " + e.title;
                }),
                i("ib65b1c6", "Zarejestruj się przez Apple"),
                i("f55cebb8", "Zaloguj się przez Apple"),
                i("dcc304d6", "Kontynuuj przez Apple"),
                i("e0870f26", "Zarejestruj się przez Google"),
                i("gfeffd6a", "Zaloguj się przez Google"),
                i("gf5e9ea6", "Cofnij"),
                i("e43138c5", function (e) {
                    return "Obserwuj użytkownika " + e.name;
                }),
                i("be65f2e7", function (e) {
                    return "Przestań obserwować użytkownika " + e.name;
                }),
                i("a649d337", function (e) {
                    return "Nie interesuje mnie użytkownik " + e.name;
                }),
                i("e2f2b658", "Ten Temat nie będzie już polecany."),
                i("b51f7edf", function (e) {
                    return "Nie obserwujesz już użytkownika " + e.name;
                }),
                i("gac366b3", function (e) {
                    return "Obserwujesz użytkownika " + e.name;
                }),
                i("f9e45cfb", function (e) {
                    return "Zablokować użytkownika @" + e.screenName + "?";
                }),
                i("fcd4d489", function (e) {
                    return "Zablokuj @" + e.screenName;
                }),
                i("a6450e84", "Zablokuj"),
                i("g353ad73", function (e) {
                    return "Ten użytkownik nie będzie mógł Cię obserwować ani wyświetlać Twoich wpisów, a Ty nie będziesz widzieć jego wpisów ani powiadomień z konta @" + e.screenName + ".";
                }),
                i("ad00a739", function (e) {
                    return "Ten użytkownik będzie mógł wyświetlać Twoje wpisy publiczne, ale nie będzie już mógł interaktywnie ich używać. Użytkownik @" + e.screenName + " nie będzie też mógł Cię obserwować ani pisać do Ciebie wiadomości, a Ty nie będziesz widzieć jego powiadomień.";
                }),
                i("a9fd20be", "Zablokowano."),
                i("j546fb79", function (e) {
                    return "Odblokować użytkownika @" + e.screenName + "?";
                }),
                i("c9623eeb", function (e) {
                    return "Odblokuj @" + e.screenName;
                }),
                i("e133be4e", "Odblokuj"),
                i("he43bca4", "Ten użytkownik nie będzie mógł Cię obserwować ani wyświetlać Twoich wpisów."),
                i("f5f01af6", "Ten użytkownik będzie mógł Cię obserwować i będzie mógł interaktywnie używać Twoich wpisów publicznych."),
                i("b6878b0a", "Wystąpił błąd. Poczekaj chwilę i spróbuj ponownie zablokować tego użytkownika."),
                i("e40252de", "Nie pokazuj tych wpisów w sekcji Dla Ciebie"),
                i("ae225c26", "Pokazuj te wpisy w sekcji Dla Ciebie"),
                i("a96d2628", "Nie pokazuj tej listy w sekcji Dla Ciebie"),
                i("d00abae0", "Najpopularniejsze wpisy z tej listy nie będą już widoczne na Twojej osi czasu w sekcji Dla Ciebie."),
                i("e566dd06", "Najpopularniejsze wpisy z tej listy nie będą już widoczne w sekcji Dla Ciebie."),
                i("j3cc1526", "Pokazuj tę listę w sekcji Dla Ciebie"),
                i("h435716e", "Najpopularniejsze wpisy z tej listy mogą pojawiać się na Twojej osi czasu w sekcji Dla Ciebie."),
                i("e8ba412e", "Najpopularniejsze wpisy z tej listy mogą pojawiać się w sekcji Dla Ciebie."),
                i("d66e95cc", "Przypiąć odpowiedź do Twojego wpisu?"),
                i("i24ed0de", "Przypnij odpowiedź"),
                i("b1033082", "Ta odpowiedź będzie wyświetlana jako pierwsza odpowiedź na Twój wpis. W dowolnym momencie możesz ją odpiąć lub zastąpić inną odpowiedzią."),
                i("e96a5962", "Odpiąć odpowiedź?"),
                i("ec04e6fc", "Odepnij odpowiedź"),
                i("d05618f2", "Ta odpowiedź nie będzie już wyświetlana jako pierwsza odpowiedź na ten wpis."),
                i("j9aedfdc", "Przypnij odpowiedź"),
                i("c034211a", "Odepnij odpowiedź"),
                i("ie4538b4", "Przypięto odpowiedź do wpisu"),
                i("ad135a24", "Odpięto odpowiedź od wpisu"),
                i("ee369efc", "Nie udało się przypiąć odpowiedzi na wpis"),
                i("c3e7f572", "Nie udało się odpiąć odpowiedzi z wpisu"),
                i("d058316c", "Dziękujemy. Opinie użytkowników pomagają nam ulepszać osie czasu w serwisie X."),
                i("afb7e8f8", "Przeczytaj artykuł"),
                i("jb0429b1", function (e) {
                    return "Autor: " + e.name + " @" + e.screenName;
                }),
                i("gfdad702", "Od 18 lat"),
                i("c5d23126", "Przypnij"),
                i("j44ec610", "Odepnij"),
                i("ibd0106e", function (e) {
                    return "" + e.formattedCount;
                }),
                i("cface2d1", function (e) {
                    return "" + n(e.count, "Użytkowników", "Użytkowników", "członek", "członków");
                }),
                i("b5334780", "Oczekujące"),
                i("b171d7c4", "Dołącz"),
                i("aa7ae3f6", "Dołączył/a"),
                i("bb1d57b6", "Opuść"),
                i("h4fbfa58", "Zaakceptuj i dołącz"),
                i("ea8cfb1e", "Zaakceptuj i poproś o dołączenie"),
                i("dc1b14a1", function (e) {
                    return "Sprawdź i zatwierdź te zasady: " + e.communityName;
                }),
                i("c966ac64", "Nie udało się wysłać prośby o dodanie do Grupy dyskusyjnej. Spróbuj ponownie później."),
                i("g690e07e", "Twoja odpowiedź (opcjonalnie)"),
                i("a5d21bf4", "Odpowiedź jest opcjonalna, jej udzielenie ułatwi jednak moderatorom podjęcie decyzji o zaakceptowaniu Twojej prośby. "),
                i("h9526e03", "zasadami serwisu X"),
                i("c00c234f", function (e) {
                    return "Zasady: " + e.communityName;
                }),
                i("hafa07f2", "Udział jest ograniczony"),
                i("c15bee32", "Zostałeś/aś usunięty/a z Grupy dyskusyjnej"),
                i("efa265fc", "Twoje wpisy są chronione"),
                i("f9cecf48", "Niestety, nie możesz w tej chwili dołączyć"),
                i("bf7bdb60", "To nie Twoja wina (naprawdę). Spróbuj ponownie później."),
                i("h27d6950", "Nie możesz jeszcze opuścić Grupy"),
                i("b02360f6", "Ostatni administrator ani moderator nie może opuścić Grupy dyskusyjnej, dopóki nie jest ona pusta."),
                i("fe832999", "musisz upublicznić swoje wpisy"),
                i("bc7a7af4", "Twoje wpisy w grupie dyskusyjnej zostaną ukryte i nie będziesz mieć możliwości ponownego dołączenia do grupy."),
                i("a0e0a52c", function (e) {
                    return "" + e.offendingRule;
                }),
                i("fe76cacc", "Pokaż więcej wpisów"),
                i("aebb6546", "Ładowanie większej liczby wpisów"),
                i("a3484d22", "remis"),
                i("aab2efa9", function (e) {
                    return "najpopularniejsza odpowiedź " + e.winner;
                }),
                i("ba21c289", function (e) {
                    return "Karta wyników, " + e.gameCategory + ", " + e.gameState + ", " + e.accessibleGameClockPeriod + ", " + e.teamOneLabel + ", " + e.teamTwoLabel;
                }),
                i("f178e38c", "Wkrótce"),
                i("b6da6b02", "Na żywo"),
                i("i9f615c8", "Wynik"),
                i("f897267a", "Przełożony"),
                i("f93c4b6a", "Odwołany"),
                i("i79ab12a", "Obserwuj ten temat"),
                i("c0f56044", "Przestań obserwować"),
                i("fcf51fe6", "Top"),
                i("e9a90d72", "Top tematy"),
                i("bf403716", "Usuń z top"),
                i("c9f08e29", function (e) {
                    return "Usunąć " + e.title + " z top?";
                }),
                i("hed4dcd0", "Nawet jeśli usuniesz ten temat z listy tematów oznaczonych gwiazdką, to — w zależności do tego, jakie konta obserwujesz — możesz nadal widzieć dotyczące go wpisy."),
                i("cd876e02", "Ulubiony"),
                i("f2816e02", "Ulubione"),
                i("f5b04fbc", "Usuń z ulubionych"),
                i("c481ae3f", function (e) {
                    return "Usunąć " + e.title + " z ulubionych?";
                }),
                i("c94116de", "Nawet jeśli usuniesz ten temat z listy ulubionych tematów, to — w zależności do tego, jakie konta obserwujesz — możesz nadal widzieć dotyczące go wpisy."),
                i("e0e730b0", "Interesuje mnie to"),
                i("b1850062", "Nie, dziękuję"),
                i("gd3f996f", function (e) {
                    return "Czy " + e.title + " to temat, który Cię nie interesuje?";
                }),
                i("jdd65aac", "Nawet jeśli ten temat Cię nie interesuje, nadal możesz widzieć dotyczące go wpisy, w zależności od tego, jakie konta obserwujesz."),
                i("f93bb3ee", "Załaduj obraz"),
                i("cc37768d", function (e) {
                    return e.mediaFileSize + " KB";
                }),
                i("f19d78d7", function (e) {
                    return e.mediaFileSize + " MB";
                }),
                i("c75bf00e", "Załaduj plik GIF"),
                i("d3ac405c", "Załaduj film"),
                i("g97a046c", "Odtwórz ten film"),
                i("ac4c73d8", "Osadzony film"),
                i("f3bb10a6", "Odtwarzanie filmu"),
                i("b87c0a72", "Włącz powiadomienia push, aby zawsze wiedzieć, co dzieje się w serwisie X"),
                i("e71e09ec", "Włącz powiadomienia"),
                i("g4850f44", "Włączono powiadomienia push"),
                i("dc397182", "Dostosuj"),
                i("ia5e7488", "Zamknij"),
                i("j681933e", "Lista prywatna"),
                i("add55942", "Coś poszło nie tak. Odczekaj trochę i spróbuj zasubskrybować jeszcze raz."),
                i("ib8f5f3c", "Coś poszło nie tak. Odczekaj trochę i spróbuj zrezygnować z subskrypcji ponownie."),
                i("e20fc756", "Nie możesz dodać tej osoby do Listy."),
                i("d8a032a2", "Musisz usunąć przypiętą oś czasu przed dodaniem kolejnej"),
                i("fa816a0a", "Zmień kolejność na liście"),
                i("ac832ae4", "Przypnij listę"),
                i("cdb33880", "Odepnij listę"),
                i("ca5d0a82", "Edytuj listę"),
                i("ec08efe4", function (e) {
                    return "" + e.formattedCount;
                }),
                i("h9f711f0", function (e) {
                    return "Obserwujący" + n(e.count, "ch", "ch", "", "ch");
                }),
                i("jceadc3e", "Brak tytułu"),
                i("a1d5303c", "Prywatna"),
                i("cc8f8a80", "Niewidoczna"),
                i("c33a97d6", "Publiczna"),
                i("i73fff1b", function (e) {
                    return "Pokaż " + e.count + " wpis" + n(e.count, "y", "ów", "", "u");
                }),
                i("a682906d", function (e) {
                    return "Zostało: " + e.count + " polubie" + n(e.count, "nia", "ń", "nie", "ń");
                }),
                i("g566e973", function (e) {
                    return "Otwarte oferty pracy: " + e.jobCount + " (" + e.tcc_organization_open_job_count + ")";
                }),
                i("ccc45ee7", function (e) {
                    return e.team + " wygrali";
                }),
                i("f81a95d7", function (e) {
                    return "" + e.date;
                }),
                i("ed4bea2e", "Dzisiaj"),
                i("j3e0ae78", function (e) {
                    return "・" + e.formattedTime;
                }),
                i("cabfdd06", "Jutro"),
                i("abd0f804", function (e) {
                    return "・" + e.formattedTime;
                }),
                i("df45f564", "Dodaj inny wpis"),
                i("i569ff3e", "Pokaż ten wątek"),
                i("je5502eb", function (e) {
                    return "Wyświetlane są wyniki dla „" + e.suggestion + "”";
                }),
                i("bc4628a1", function (e) {
                    return "Wyświetlane są wyniki dla „" + e.suggestion + "”";
                }),
                i("a1979464", "Wczytywanie filmu"),
                i("ic1e826e", "Odtwórz"),
                i("c8b4bca0", "Zrób zakupy"),
                i("f5ea07ec", "Zrób zakupy"),
                i("b62956aa", "Zarezerwuj"),
                i("i3ea806a", "Zamów"),
                i("fd00a76a", "Otwarte"),
                i("e0aa5848", "Zainstaluj"),
                i("g33f3050", "Strona www"),
                i("d3f6b1a6", "Wyślij do nas wiadomość"),
                i("b0e322cc", "Wyślij wiadomość prywatną"),
                i("cb8bddc8", "Wyślij mi wiadomość prywatną"),
                i("cb8c547e", "Wyślij wiadomość prywatną"),
                i("d980e29f", function (e) {
                    return "Początek: " + e.date;
                }),
                i("fdd81500", "Karuzela"),
                i("i0db46e6", "GIF"),
                i("faf745fa", "Nagość"),
                i("e1b4e672", "Nieodpowiednie treści"),
                i("acc48c15", function (e) {
                    return "Ostrzeżenie: " + e.formattedWarningList;
                }),
                i("a0e81a2e", "Pokaż"),
                i("g034e6f1", function (e) {
                    return "Maksymalna liczba wpisów, które możesz dołączyć do tego zgłoszenia: " + e.count + ".";
                }),
                i("i2e0d584", "Promowany wpis"),
                i("b52a940c", "Ten wpis jest niedostępny."),
                i("da59404c", "Wyświetlasz obecnie najnowszą wersję."),
                i("e267df68", "Ukryto odpowiedź"),
                i("d5f162b6", "W dowolnym momencie możesz wyświetlić tę odpowiedź. Coś jeszcze?"),
                i("f376e9d4", "Opinia dotycząca wpisu"),
                i("d7c93b6c", "Wpis został ukryty"),
                i("b3abacee", "Będziesz widzieć mniej wpisów tego typu. Chcesz podzielić się dodatkową opinią?"),
                i("a2411360", "Spodobała Ci się któraś odpowiedź?"),
                i("e8a14626", "Teraz możesz przypiąć odpowiedź na swój wpis, używając menu akcji, czyli trzech kropek widocznych we wpisie (...)."),
                i("d41305a8", "Dymek rozmowy przypięty szpilką"),
                i("eca84b72", "Cofnij podanie dalej wpisu"),
                i("g6185a9e", "Kto może odpowiedzieć?"),
                i("i00051cc", "Zdecyduj, kto może odpowiedzieć na ten wpis. Wspomniane osoby zawsze mogą odpowiadać."),
                i("i9000126", "Konta, które obserwujesz"),
                i("dcaede8a", "Tylko użytkownicy kont, które wspominasz"),
                i("ad85cd2e", "Twoi subskrybenci"),
                i("f19e4bfc", "Zweryfikowane konta"),
                i("bf994ab2", "Tylko Ty"),
                i("e7b4b30a", "Tylko użytkownicy kont, które zostały przez Ciebie wspomniane"),
                i("ca6500a8", "Wyłącz zewnętrzne linki w odpowiedziach"),
                i("e839db3a", "Odrzuć"),
                i("c8a98928", "Obraz promocyjny"),
                i("f5b3dc1e", "Może później"),
                i("ae0c5fbe", "Wystąpił błąd podczas zmiany ustawień odpowiedzi"),
                i("bae0cbc0", "Zdecyduj, kto może odpowiadać"),
                i("d78131b9", function (e) {
                    return "Dodaj/usuń użytkownika @" + e.screenName + " do/z List";
                }),
                i("fb4ee11c", "Dlaczego ta reklama?"),
                i("ad50e7d9", function (e) {
                    return "Zobacz statystyki dla wpisu " + e.entity;
                }),
                i("ef1042f8", "Dodaj uwagę w ramach programu Uwagi Społeczności"),
                i("h3edf7a6", "Zażądaj uwagi społeczności"),
                i("bf8d98f4", "Odpowiedzieć mogą tylko subskrybenci"),
                i("e69ada9e", "Odpowiadać mogą tylko posiadacze subskrypcji Premium"),
                i("ae04c4dd", function (e) {
                    return "Usunąć " + e.entity + "?";
                }),
                i("d9442996", "Tej czynności nie można cofnąć. Wpis zostanie usunięty z Twojego profilu, z osi czasu kont, które Cię obserwują, oraz z wyników wyszukiwania."),
                i("dad785a7", function (e) {
                    return "Spowoduje to usunięcie wszystkich wersji tego elementu typu " + e.entity + " z Twojego profilu, z osi czasu kont, które Cię obserwują, oraz z wyników wyszukiwania. Tej operacji nie można cofnąć.";
                }),
                i("jda253ab", function (e) {
                    return "Twój " + e.entity + " został usunięty";
                }),
                i("j49c2f85", function (e) {
                    return "Wystąpił błąd. Spróbuj ponownie usunąć " + e.entity + " za minutę.";
                }),
                i("f9fa0390", "Twój artykuł zostanie przeniesiony do stanu Szkic i będzie można usunąć go ze strony Artykuły."),
                i("dad450ec", "Edytuj artykuł"),
                i("g9677c6e", "Potwierdź"),
                i("b57bfe70", "Edytować artykuł?"),
                i("bd3da7be", "Publikacja tego artykułu zostanie tymczasowo wycofana, gdy będziesz go edytować, przez co nie będzie on widoczny publicznie. Wszystkie istniejące interakcje zostaną zachowane i przeniesione do zaktualizowanej wersji, gdy ponownie opublikujesz artykuł."),
                i("j26481e6", "Publikacja tego artykułu została cofnięta, a artykuł został przeniesiony do szkiców w celu edycji."),
                i("b360ac7c", "Nawigacja w sekcji"),
                i("adc81042", "Szczegóły sekcji"),
                i("bede965c", function (e) {
                    return "" + e.count;
                }),
                i("g345246c", "To jest opublikowany artykuł, czyli nowy sposób pisania w serwisie X."),
                i("b14efa0a", "Obraz okładki artykułu"),
                i("afdccedb", function (e) {
                    return "Pokaż " + e.displayCount + " odpowied" + n(e.count, "zi", "zi", "ź", "zi");
                }),
                i("bdba3e1a", "Włącz powiadomienia o wpisach"),
                i("c4da7d28", "Wyłącz powiadomienia o wpisach"),
                i("j87c21f4", "Powiadom mnie"),
                i("iebc30ca", "Wyłącz powiadomienia"),
                i("dc740eb2", "Powiadomienia o wpisach z tego konta będą widoczne na Twojej osi czasu Powiadomienia. Możesz również włączyć powiadomienia push na swoim urządzeniu, dzięki czemu nigdy nie przegapisz żadnego wpisu."),
                i("dca669ad", function (e) {
                    return "Wpisy podane dalej przez użytkownika " + e.name + " nie będą już widoczne na Twojej osi czasu";
                }),
                i("ce6da5d7", function (e) {
                    return "Wpisy podane dalej przez użytkownika " + e.name + " będą widoczne na Twojej osi czasu";
                }),
                i("c6ea308b", function (e) {
                    return e.fullName + " (@" + e.screenName + ")";
                }),
                i("a1fef729", function (e) {
                    return "Sprawdź użytkownika " + e.fullName + " w serwisie X.\n" + e.bio;
                }),
                i("c32a3d03", function (e) {
                    return "@" + e.screenName + " już Cię nie obserwuje";
                }),
                i("j7bb1a43", function (e) {
                    return "Zgłoś @" + e.screenName;
                }),
                i("hef5960c", "Udostępnij profil przez…"),
                i("bb1cbeb6", "Wyłącz wyciszenie"),
                i("h2f62206", "Wyciszanie użytkownika"),
                i("e67b2d65", function (e) {
                    return "Wycisz @" + e.screenName;
                }),
                i("f05597b3", function (e) {
                    return "Wyłącz wyciszenie @" + e.screenName;
                }),
                i("h59f52ee", "Wyciszono."),
                i("eea0cbee", "Wyłączono wyciszenie."),
                i("i29533b3", function (e) {
                    return "Wyciszono użytkownika @" + e.screenName + ".";
                }),
                i("h129c3c3", function (e) {
                    return "Wyłączono wyciszenie użytkownika @" + e.screenName + ".";
                }),
                i("b3036480", "Usuń tego obserwującego"),
                i("h27b7407", function (e) {
                    return "Użytkownik @" + e.screenName + " zostanie usunięty z listy Twoich obserwujących i nie zostanie o tym powiadomiony, ale w przyszłości będzie mógł zacząć obserwować Cię ponownie.";
                }),
                i("ibd0b842", "Kopiuj link do profilu"),
                i("b9c26480", "Zobacz tematy"),
                i("e922ce0c", "Włącz podawanie dalej wpisów"),
                i("ge54bb8c", "Wyłącz podawanie dalej wpisów"),
                i("h5ef9bc8", "Zobacz listy"),
                i("e9eef4c6", "Zgłoś treści nielegalne w UE"),
                i("e28ba0bb", function (e) {
                    return "Zgłoś użytkownika @" + e.screenName + " za treści nielegalne w UE";
                }),
                i("a30b63da", "Wystąpił błąd. Poczekaj chwilę i spróbuj ponownie usunąć obserwującego."),
                i("gd11f228", "(Potrzebny jest tytuł)"),
                i("ced3c85a", "Edytowany"),
                i("b375ece0", "Tylko Ty możesz wyświetlić ten nieopublikowany artykuł."),
                i("edf9101f", "Czytaj dalej"),
                i("icf7f1a4", "Kopiuj do schowka"),
                i("e1a292ec", "Dodaj multimedia"),
                i("ebfd8ac6", "Wstaw"),
                i("ia3611ee", "Zacznij pisać"),
                i("d794135c", "Wybierz plik lub przeciągnij go tutaj.\n\nKażdy blok może zawierać plik GIF, film lub zestaw zdjęć (do 4 zdjęć na zestaw)."),
                i("e187f906", "Pliki GIF"),
                i("fa4e68ca", "Wpisy"),
                i("c80940f4", "Kod markdown"),
                i("cfeb3f86", "Kod"),
                i("ad9e175c", "LaTeX"),
                i("c62a27e6", "Lubi"),
                i("g88b88a6", "Zakładki"),
                i("i282583e", "Nie można używać wpisów z chronionych kont"),
                i("eae4fe7a", "Nie można użyć opublikowanych cytatów z usuniętego wpisu"),
                i("d2042fb6", "Polubione wpisy"),
                i("iad3e15c", "Wpisy w Zakładkach"),
                i("f1c63c34", "Wklej adres URL wpisu"),
                i("a78f6310", "Nieprawidłowy adres URL wpisu"),
                i("fe9ddab6", "Nie znaleziono wpisu"),
                i("dd2c9034", "Zapisz wpisy na później"),
                i("cada17f8", "Dodawaj wpisy do Zakładek, aby z łatwością znaleźć je ponownie."),
                i("j0179e90", "Utwórz wpis"),
                i("adad5408", "Nowy folder"),
                i("f44ddd2e", "Dodawaj wpisy do Zakładek, aby przejrzeć je później"),
                i("c91d2c4c", "Potrzebujesz więcej czasu na napisanie przemyślanej odpowiedzi, a może po prostu chcesz zostawić sobie ten wpis na później? Niezależnie od powodu dodaj go do Zakładek!"),
                i("j45c642e", "Foldery nie ładują się"),
                i("b87ca51a", "Usuń zdjęcie"),
                i("eebff22c", "Przytnij zdjęcie"),
                i("hf6f2914", "Podgląd"),
                i("be4a00c2", "Dodaj kod w tym miejscu"),
                i("i3128619", function (e) {
                    return "Bloki mogą zawierać maksymalnie następującą liczbę znaków: " + e.count;
                }),
                i("dbb02ec4", "Wybierz język programowania"),
                i("d942865e", "Język programowania wyszukiwarki"),
                i("e554f642", "Czy chcesz odrzucić zmiany?"),
                i("fa524058", "Zachowaj"),
                i("d4ab68e2", "Odrzuć"),
                i("a50ba822", "Wyszukaj pliki GIF"),
                i("c6f5ac52", "Kategorie — wyszukiwanie plików GIF"),
                i("ab468379", function (e) {
                    return e.query + " — wyszukiwanie plików GIF";
                }),
                i("j7fc4f9c", "Automatyczne odtwarzanie plików GIF"),
                i("a66b7760", "Plik GIF bez nazwy"),
                i("a723aefa", "Nie znaleziono plików GIF"),
                i("a6ecfa0a", "Zamiast tego spróbuj wyszukać coś innego."),
                i("f5ff0d6f", function (e) {
                    return e.category + " — wyszukiwanie plików GIF";
                }),
                i("effe1ca6", "Dodaj w tym miejscu wyrażenie LaTeX"),
                i("c46c3c62", "Wystąpił błąd w Twoim wyrażeniu. Popraw wyrażenie, a następnie spróbuj ponownie."),
                i("d4a4842e", "Dodaj emoji"),
                i("fec16c1c", "Emoji"),
                i("idc01eb8", "Pogrubienie"),
                i("cd7c97c6", "Zastosuj kursywę"),
                i("dab932be", "Podkreślenie"),
                i("c5b6178a", "Przekreślenie"),
                i("c03d7fd6", "Wstaw link"),
                i("abfe2d36", "Lista punktowana"),
                i("da685a7c", "Lista numerowana"),
                i("g74d920c", "Blok cytatów"),
                i("cda501c6", "Zwiększ rozmiar tekstu"),
                i("a54fdc46", "Zmniejsz rozmiar tekstu"),
                i("b340830e", "Skróty w tekście"),
                i("c1ea915e", "Enter na początku nowej linii lub bloku, a następnie spacja"),
                i("e8a4ef02", "Nagłówek"),
                i("dd71241a", "Podnagłówek"),
                i("ja9ca202", "Skróty artykułów"),
                i("ef1649e2", "X — skróty klawiaturowe"),
                i("aefd89c8", "Menu"),
                i("cafdefb2", "Opcje"),
                i("dda42cf2", "Kolumny i talie"),
                i("e8a12604", "Dodaj nagłówek (opcjonalne)"),
                i("eabf2209", function (e) {
                    return "Plik GIF od " + e.providerName;
                }),
                i("a613e720", "Kopiuj link do pliku GIF"),
                i("aeca1239", function (e) {
                    return "Pogrubienie" + e.ttc_rich_text_composer;
                }),
                i("i7dc66dd", function (e) {
                    return "Kursywa" + e.ttc_rich_text_composer;
                }),
                i("ad89b831", function (e) {
                    return "aktywne" + e.ttc_rich_text_composer;
                }),
                i("jcd5ee8a", "Edytuj blok"),
                i("a8f09fb8", "Usuń blok"),
                i("i89195ea", "Rozdzielacz"),
                i("da8ac57c", "Edytuj podpis"),
                i("a8fdd09c", "Opublikuj artykuł"),
                i("d8047cc8", "Opublikuj"),
                i("ff7ddca2", "Opublikowany artykuł będzie widoczny jako wpis. Będzie go też można znaleźć na karcie Artykuły w Twoim profilu."),
                i("ef34d7be", "Kontrolek Odbiorcy i Odpowiedź nie można edytować po opublikowaniu artykułu."),
                i("e52d4998", "Wybierz odbiorców"),
                i("d7985b24", "Określ, kto może odpowiadać na ten artykuł"),
                i("b5660338", "Podgląd osi czasu"),
                i("hff1b97a", "Odpowiadać mogą tylko subskrybenci."),
                i("a330771e", "Kopiuj link do schowka"),
                i("b6510e68", "Skopiuj adres URL artykułu, co umożliwi Ci udostępnienie go."),
                i("e4a6e006", "Coś poszło nie tak. Spróbuj ponownie."),
                i("eff483e0", "Po opublikowaniu pobierz link, aby udostępnić artykuł."),
                i("ca15dd4e", "Szkic");
            i("bb40bf66", "Opublikowano"),
                i("h107935c", "Ostatnio zapisano przed chwilą"),
                i("a753a870", "Zastosuj"),
                i("afccc67e", "Kopiuj link do artykułu"),
                i("beb24e9e", "Adres URL został skopiowany do schowka"),
                i("db9cc928", "Usunąć artykuł?"),
                i("c4e28ba6", "Tej operacji nie można cofnąć, a wykonanie jej spowoduje utratę artykułu."),
                i("ff2982d0", "Twój artykuł zostanie usunięty. Tej operacji nie można cofnąć, a artykuł zostanie usunięty z Twojego profilu, z osi czasu kont, które Cię obserwują, oraz z wyników wyszukiwania."),
                i("ca17beec", "Twój artykuł został usunięty"),
                i("f5cbb31c", "Usuń artykuł"),
                i("f0977f52", "Tak, usuń"),
                i("db419d4c", "Wyświetl podgląd szkicu"),
                i("a1bc8e6c", "Wyświetl artykuł"),
                i("b6f72a22", "Publikacja tego artykułu zostanie cofnięta, a artykuł zostanie przeniesiony do szkiców i nie będzie widoczny publicznie."),
                i("f558d2e0", "Cofnij publik. do szkiców"),
                i("e9473589", function (e) {
                    return "" + e.articleTitle;
                }),
                i("ib067d6a", "Wybierz 1 plik GIF lub cztery zdjęcia."),
                i("eb7ab862", "Wybierz maksymalnie 4 zdjęcia, filmy lub pliki GIF"),
                i("ce9a9736", "Zapisywanie..."),
                i("dd63549e", "Sukces! Twój artykuł został opublikowany."),
                i("a4d128bc", "Sukces! Twój artykuł został opublikowany, a link do niego został skopiowany do schowka."),
                i("b4071e18", "Tytuł artykułu"),
                i("f586b7fa", "Dodaj tytuł"),
                i("ab0fa9ba", "Aby edytować, wróć do szkiców"),
                i("c5f35c98", "Trwa przesyłanie multimediów..."),
                i("d739d83e", "Anuluj przesyłanie"),
                i("a94efeda", "Trwa zapisywanie multimediów..."),
                i("gd79d45a", "Włącz tryb skupienia, aby skupić się na pisaniu"),
                i("g1866bb2", "Wróć do zwykłego edytora, zamykając tryb skupienia"),
                i("a6a78df4", "Twój artykuł musi mieć tytuł i treść, aby można było go opublikować."),
                i("ia656f1c", "Twój artykuł ma tytuł, ale przed opublikowaniem go musisz napisać jego treść."),
                i("d3855e36", "Przed opublikowaniem artykułu musisz nadać mu tytuł."),
                i("f325958e", "Tytuł przekracza limit liczby znaków. Skróć go, a następnie opublikuj artykuł."),
                i("ie5d9064", "Twój artykuł przekracza limit liczby znaków. Skróć tekst treści, a następnie opublikuj artykuł."),
                i("e03487a0", "Tytuł przekracza limit liczby znaków, a artykuł przekracza limit liczby wyrazów. Skróć tytuł i artykuł, a następnie opublikuj artykuł."),
                i("e938d562", "Twój tytuł przekracza limit liczby znaków. Skróć tytuł, dodaj coś do treści, a następnie opublikuj artykuł."),
                i("e449c546", "Twój artykuł musi mieć tytuł, a poza tym zawiera zbyt wiele wyrazów. Dodaj tytuł i skróć tekst treści, a następnie opublikuj artykuł."),
                i("bd00e836", "Najnowszy szkic nie został zapisany, ponieważ przekracza limit liczby znaków."),
                i("ic110f68", "Najnowszy szkic nie został zapisany, ponieważ jest zbyt długi."),
                i("ifea3114", "Udostępnij"),
                i("b384f696", "Zalecamy, aby tytuł zawierał od 50 do 70 znaków"),
                i("a7da0adb", function (e) {
                    return e.count + " sł" + n(e.count, "owa", "ów", "owo", "ów");
                }),
                i("aea1d455", function (e) {
                    return e.count + " minut" + n(e.count, "y", "", "ę", "y");
                }),
                i("df898d71", function (e) {
                    return "Czas czytania: " + e.readingTimeValue;
                }),
                i("i9aadf4a", "Ten link może być niepoprawny. Kliknij jeden ze swoich artykułów dostępnych na lewym pasku bocznym, aby przeczytać, edytować lub opublikować artykuł."),
                i("hfdce46e", "Publikacja Twojego artykułu została wycofana"),
                i("df079228", "Tryb skupienia"),
                i("f5037228", "W celu uzyskania najlepszych wyników zalecamy użycie obrazu o współczynniku proporcji 5:2."),
                i("f965e890", "Tutaj znajdują się Twoje szkice"),
                i("c2756718", "Tutaj znajdują się Twoje opublikowane artykuły"),
                i("af65c854", "Edytuj w trybie skupienia"),
                i("e05e2336", "Cofnij publikację i przenieś artykuł do szkiców"),
                i("d36447e0", "W tym miejscu będziesz pisać"),
                i("ca0ed982", "Kontynuuj pracę nad szkicem lub utwórz nowy artykuł"),
                i("ee9e42aa", "Napisz"),
                i("e9a50596", "Wystąpił błąd podczas tworzenia nowego szkicu"),
                i("e070024a", "Edytuj zdjęcie"),
                i("i7d24b36", "Następny obraz"),
                i("f96a38a2", "Poprzedni obraz"),
                i("hac7c548", "Przytnij plik multimedialny"),
                i("e3dbfba4", "Edytuj opis obrazu"),
                i("dd4a83a6", "Ostrzeżenie dotyczące treści"),
                i("ffe9ec3a", "Dodaj opisy"),
                i("j063b262", "Możesz dodać opisy, nazywane czasem tekstem alt, do swoich zdjęć, co sprawi, że będą one jeszcze bardziej dostępne dla innych użytkowników, również tych niewidomych lub słabowidzących. Dobre opisy są krótkie, ale jasno informują o tym, co znajduje się na zdjęciach, umożliwiając zrozumienie ich treści."),
                i("e57144f0", "OK"),
                i("f9f9210c", "Nie, dzięki"),
                i("feabf2a0", "Tekst alt"),
                i("e36287c6", "Opis"),
                i("cf565d08", "Co to jest tekst alt?"),
                i("d9f7b32a", "Dodaj do tego wpisu ostrzeżenie dotyczące treści"),
                i("ead1b80a", "Wybierz kategorię, a my dodamy do tego wpisu ostrzeżenie dotyczące treści. Pomaga to innym użytkownikom unikać treści, których nie chcą oglądać."),
                i("h2437f26", "Nieodpowiednie treści"),
                i("g5e1668a", "Można pobierać"),
                i("fdc6a52a", "Po włączeniu tego ustawienia Twój film będzie dostępny do pobrania."),
                i("fe09fde2", "Zmień ustawienia"),
                i("cd5cba97", function (e) {
                    return "Ostrzeżenie dotyczące treści: " + e.formattedWarningList;
                }),
                i("h7215a76", "Autor wpisu oflagował go jako zawierający nieodpowiednie treści."),
                i("j32d345e", "Następujące elementy mogą zawierać nieodpowiednie treści."),
                i("f1d9930c", "Ukryj"),
                i("c91f83ae", "Edytuj film"),
                i("icbec4ae", "Wczytaj napisy"),
                i("e0342f98", "Napisy"),
                i("e7048e74", "Przytnij multimedia"),
                i("ga408160", "Następny film"),
                i("dc402134", "Poprzedni film"),
                i("bf4e9d7a", "Dodaj plik z napisami (.srt)"),
                i("j435467e", "Napisy i transkrypcje mogą być dodane do filmu poprzez wczytanie pliku z napisami w formacie SRT. Edycja filmu nie będzie mieć wpływu na dodane napisy i transkrypcje."),
                i("a6b267fa", "Usuń transkrypcje"),
                i("a609edbe", "Utwórz nowy wpis"),
                i("dc295bb0", "Publikowanie w grupie dyskusyjnej"),
                i("e536de22", "Aby móc publikować, musisz najpierw zostać członkiem. Dołącz do tej grupy dyskusyjnej, aby brać udział w rozmowach!"),
                i("cb817dae", "Edytuj wpis"),
                i("bec9cff8", "Załóż konto w serwisie X"),
                i("c150ba68", "Witaj!"),
                i("f8e2163e", "Chcesz się najpierw zalogować?"),
                i("a108c147", function (e) {
                    return "Czy chcesz obserwować użytkownika @" + e.screenName + "?";
                }),
                i("c66afdc3", function (e) {
                    return "Obserwuj @" + e.screenName;
                }),
                i("feccfd6e", "Aby zacząć kogoś obserwować, musisz się zalogować."),
                i("dedce756", "Teraz możesz polubić taki wpis."),
                i("ha5987e0", "Chcesz polubić ten wpis?"),
                i("f98f4e00", "Aby móc polubić taki wpis, musisz się zalogować."),
                i("b459ba4c", "Aby móc odpowiedzieć na ten wpis, musisz się zalogować."),
                i("f3e1093a", "Teraz możesz podać dalej ten wpis."),
                i("i1d8723c", "Chcesz podać dalej ten wpis?"),
                i("h19f38de", "Aby móc opublikować takie treści, musisz się zalogować."),
                i("e289d950", "Aby móc udostępnić taki wpis, musisz się zalogować."),
                i("d28215f0", "Głosowania są niedozwolone w Grupach dyskusyjnych."),
                i("ec2fc089", function (e) {
                    return "Wysłano wpis" + n(e.numOfTweets, "y", "ów", "", "u") + " do grupy dyskusyjnej " + e.communityName;
                }),
                i("c7152355", function (e) {
                    return "Nie zapomnij zadbać o to, aby Twoje zdjęci" + n(e.numberOfImages, "a były", "a były", "e było", "a były") + " bardziej dostępne";
                }),
                i("ffa5562a", "Dobre opisy zdjęć są zwięzłe i szczegółowe. Tekst widoczny na obrazie należy streścić lub przepisać."),
                i("a2d3facd", function (e) {
                    return "Tw" + n(e.numberOfImages, "oje opisy sprawią", "oje opisy sprawią", "ój opis sprawi", "oje opisy sprawią") + ", że serwis X stanie się bardziej dostępny dla osób z niepełnosprawnościami oraz tych, które mogą potrzebować dodatkowego kontekstu.";
                }),
                i("cc6d0a48", "Możesz wyłączyć to przypomnienie w ustawieniach dostępności."),
                i("j499fbcb", function (e) {
                    return "Dodaj opis" + n(e.numberOfImages, "y obrazów", "ów obrazów", " obrazu", "ów obrazów");
                }),
                i("bb8170da", "Nie teraz"),
                i("h4dd544e", "Twój wpis został wysłany."),
                i("ice925ce", "Twój wpis był edytowany."),
                i("eae9e604", "Twój wpis został wysłany. Masz 30 minut na wprowadzenie zmian."),
                i("gcdf3fd6", "Twój wpis został wysłany. Masz godzinę na wprowadzenie zmian."),
                i("c7999d10", "Twoje wpisy zostały wysłane. "),
                i("b97f5eb2", "Trwa wysyłanie wpisu..."),
                i("g08523f0", "Trwa wysyłanie wpisu... Po opublikowaniu go będziesz mieć 30 minut na wprowadzenie w nim zmian."),
                i("fa53f95c", "Trwa wysyłanie wpisu... Po opublikowaniu go będziesz mieć godzinę na wprowadzenie w nim zmian."),
                i("a608b1b4", "Odrzucić wpis?"),
                i("j890123a", "Odrzucić wątek?"),
                i("af4d0a80", "Usunąć zmiany?"),
                i("bb01231c", "Tej czynności nie można cofnąć, a wersja robocza zostanie usunięta."),
                i("if69307c", "Jeśli zamkniesz okno, Twoje zmiany nie zostaną zapisane."),
                i("d2c271f6", "Zapisać wpis?"),
                i("abb90544", "Możesz zapisać wersję roboczą Tweeta i wysłać go później."),
                i("d3bb6f30", "Uwaga: konta oznaczone w multimediach nie będą zapisywane w szkicu."),
                i("bf9b89e4", "Zapisano szkic."),
                i("i63bfbf0", "Przemyśl to"),
                i("a6c55352", "Nadal przesyłamy Twój film. Czy na pewno chcesz odrzucić wpis? Utracisz szkic wpisu oraz załączniki."),
                i("c3d89aca", "Dalej"),
                i("b983f9e0", "Ważna informacja"),
                i("ed5c4342", "Warto mieć to na uwadze ..."),
                i("abc4afcc", "Koniec czasu na edycję Tweeta"),
                i("a9a471fa", "Wpisy można edytować tylko przez pierwsze 30 minut od momentu opublikowania."),
                i("a3483f1c", "Wpisy można edytować tylko w ciągu godziny od momentu publikacji."),
                i("g4bcc5f4", "To ostatnia możliwa zmiana."),
                i("g922bf14", "Nie można ponownie zaktualizować Twojego wpisu."),
                i("f58b5009", function (e) {
                    return "Twój wpis zostanie wysłany " + e.scheduleDate + " o " + e.scheduleTime;
                }),
                i("fa97f508", "Dopiero po wysłaniu tych wpisów będziesz mieć możliwość dodania kolejnych wpisów do tego wątku."),
                i("c091760c", "Te zmiany nie zostały zapisane. Możesz kontynuować lub odrzucić zmiany i zacząć od nowa."),
                i("d38504ad", function (e) {
                    return "Wybierz do " + e.maxMediaCap + " zdjęć, filmów lub plików GIF.";
                }),
                i("dd6734c2", "Dowiedz się więcej"),
                i("g589c2e2", "Wybór 1"),
                i("a1e6c3a2", "Wybór 2"),
                i("a739e006", "Wybór 3 (opcjonalny)"),
                i("d89a5b92", "Wybór 4 (opcjonalny)"),
                i("c2a8118e", "Usuń głosowanie"),
                i("a8ede1de", "Dodaj wybór"),
                i("af40a8e0", "Dodaj"),
                i("caf8edc4", "Czas trwania głosowania"),
                i("g93586be", "Liczba dni"),
                i("d073b644", "Godziny"),
                i("a2f0728e", "Liczba minut"),
                i("c9f5ae0a", "Zapisano w Szkicach"),
                i("f0afcc0e", "Dodaj głosowanie"),
                i("d39e3e78", "Zaplanuj wpis"),
                i("f6bab0da", "Tekst wpisu"),
                i("cc2b28fc", "Możesz dodać tylko jeden rodzaj załączników"),
                i("i6f7062c", "Dodaj wpis"),
                i("j1d5791c", "Dodaj odpowiedź"),
                i("e76f3776", "Usuń wpis"),
                i("ec10ee02", "Głosowanie"),
                i("cce30dcc", "Oznacz lokalizację"),
                i("ee016dd6", "Przesyłanie długich filmów może trochę potrwać. Nie zamykaj karty w przeglądarce, aby uniknąć problemów z przesyłaniem danych."),
                i("b7d8e3f1", function (e) {
                    return e.numberOfAltTextEntries + " image opis" + n(e.numberOfAltTextEntries, "y obrazów", "ów obrazów", " obrazu", "ów obrazów");
                }),
                i("d1175c78", "Oznacz osoby"),
                i("b2943227", function (e) {
                    return "Przekaż plik" + n(e.numberOfVideos, "i", "ów", "", "u") + " z napisami (.srt)";
                }),
                i("d0afbb37", function (e) {
                    return e.numberOfSubtitles + " plik" + n(e.numberOfSubtitles, "i", "ów", "", "u") + " z napisami";
                }),
                i("e349147c", "Co się dzieje?"),
                i("b4481d6c", "Podziel się swoimi przemyśleniami..."),
                i("fbd24526", "Dodaj kolejną odpowiedź"),
                i("de4669e2", "Dodaj komentarz"),
                i("ed1f39ec", "Opublikuj swoją odpowiedź"),
                i("a402b908", "Zadaj pytanie"),
                i("ic05a146", "Tytuł"),
                i("d9c096f0", "Wygeneruj obraz"),
                i("d2553906", "Ulepsz swój wpis"),
                i("b85f402a", "Ulepsz swój wpis za pomocą Groka"),
                i("e815fc34", "Wskaż odbiorców"),
                i("cf44066a", "Krąg"),
                i("c6992b94", "Tylko dla posiadaczy subskrypcji Premium"),
                i("a5f7b700", function (e) {
                    return "" + e.formattedCount;
                }),
                i("a7daec1e", function (e) {
                    return "Użytkownik" + n(e.count, "ów", "ów", "", "ów");
                }),
                i("f0598964", "Chcesz udostępnić coś węższemu gronu odbiorców?"),
                i("e1ae1c0a", "Krąg umożliwia wysyłanie wpisów tylko do wybranych osób."),
                i("eb969e30", "Jak działa krąg"),
                i("bb55e8ee", "Dodaj wybrane osoby"),
                i("f1aedb7c", "Do swojego kręgu możesz dodać maksymalnie 150 użytkowników."),
                i("b659fba8", "Opublikuj tylko dla nich"),
                i("c474be66", "No dalej — podziel się swoimi przemyśleniami. Tylko osoby z Twojego kręgu zobaczą te wpisy i będą mogły na nie odpowiedzieć."),
                i("h031847a", "W dowolnym momencie możesz to zmienić"),
                i("bd9db21f", "Dowiedz się więcej"),
                i("gfca5254", "Zasady"),
                i("f510c8b2", "Zasady Grupy dyskusyjnej"),
                i("g46f363e", "Zapoznaj się z zasadami Grupy dyskusyjnej przed dołączeniem do rozmowy"),
                i("f6fec9f6", "Usuń podgląd karty"),
                i("b2df0574", "Udostępnij też obserwującym"),
                i("ccfc7453", function (e) {
                    return "Odpowiadać mogą wszystkie osoby z kręgu użytkownika @" + e.screenName + ", które Cię obserwują";
                }),
                i("d4d17205", function (e) {
                    return "Odpowiadać mogą wszystkie osoby z kręgu użytkownika @" + e.screenName;
                }),
                i("df961844", "Odpowiadać mogą tylko osoby z Twojego kręgu, które Cię obserwują"),
                i("ce958ec8", "Odpowiadać mogą tylko osoby z Twojego kręgu"),
                i("c7df589e", "Odpowiadać mogą wszystkie osoby z kręgu autora wpisu, które Cię obserwują"),
                i("j65d7c72", "Odpowiadać mogą wszystkie osoby z kręgu autora wpisu"),
                i("i8ea6d4e", "Każdy może odpowiedzieć"),
                i("a176d0d8", "Odpowiadać mogą użytkownicy kont, które obserwujesz"),
                i("gc7e52ca", "Odpowiadać mogą tylko użytkownicy kont, które wspominasz"),
                i("feb7560a", "Tylko Subskrybenci mogą odpowiadać"),
                i("h257006e", "Przejrzyj zasady tej grupy dyskusyjnej"),
                i("ebe1d850", "Odpowiadać mogą tylko Twoi subskrybenci"),
                i("b121464a", "Odpowiadać mogą tylko posiadacze zweryfikowanych kont"),
                i("aa65a44a", "Zapamiętamy Twój wybór na tym urządzeniu"),
                i("a4993fa2", "Dodaj plik GIF"),
                i("bfb895b1", function (e) {
                    return "Tweet zostanie wysłany dnia " + e.date + ", o godz. " + e.time;
                }),
                i("hb36f723", function (e) {
                    return "Tylko określona liczba pierwszych znaków (" + e.count + ") będzie widoczna na osi czasu.";
                }),
                i("d759c09e", "Wypróbuj"),
                i("e4472565", function (e) {
                    return "Przesłane (" + e.percent + "%)";
                }),
                i("a06fa8fd", function (e) {
                    return "Przetwarzanie (" + e.percent + "%)";
                }),
                i("h7f340e5", function (e) {
                    return "Przesyłanie (" + e.percent + "%)";
                }),
                i("daad8822", "Nie udało się przesłać pliku"),
                i("i8ff6261", function (e) {
                    return "Rozmiar tego filmu jest większy niż dozwolony maksymalny rozmiar przesyłanych plików (" + e.human_readable_max_size + " GB).";
                }),
                i("cba4fdde", "Udostępniaj użytkownikom serwisu X treści o rozdzielczości 1080p"),
                i("c92702a0", "Ten plik MP4 może być uszkodzony. Próbujemy go przesłać, ale jeśli się to nie uda, trzeba będzie użyć innego pliku filmu."),
                i("ef8f5d90", "Polecane"),
                i("a7046fb0", "Wymagane rzadko"),
                i("acf3ecf4", "Dodaj multimedia"),
                i("bdbcdd94", "Dodaj zdjęcia"),
                i("f2c8c04d", "musisz upublicznić swoje wpisy"),
                i("b50e199a", function (e) {
                    return "" + e.userName;
                }),
                i("c3033e8a", function (e) {
                    return e.replyUserName + " i " + e.otherUserName;
                }),
                i("e50dae2a", function (e) {
                    return e.userOneName + " " + e.userTwoName + " i " + e.userThreeName;
                }),
                i("h758cd23", function (e) {
                    return e.userOneName + " " + e.userTwoName + " i " + n(e.othersCount, e.othersCount + " innych użytkowników", e.othersCount + " innych użytkowników", "jeszcze jednej osoby", e.othersCount + " innych użytkowników");
                }),
                i("fba61ad6", function (e) {
                    return "" + e.userName;
                }),
                i("ce87c872", function (e) {
                    return e.replyUserName + " i " + e.otherUserName;
                }),
                i("b45fa506", function (e) {
                    return e.userOneName + " " + e.userTwoName + " i " + e.userThreeName;
                }),
                i("b8168f25", function (e) {
                    return e.userOneName + " " + e.userTwoName + " i jeszcze " + n(e.othersCount, e.othersCount + " innym osobom", e.othersCount + " innym osobom", "jednej osobie", e.othersCount + " innym osobom");
                }),
                i("ab67a7ac", function (e) {
                    return "" + e.userName;
                }),
                i("g571ef41", "subskrybentów"),
                i("d48d6476", function (e) {
                    return e.replyUserName + " i " + e.otherUserName;
                }),
                i("i9451241", "subskrybentów"),
                i("hdf48104", function (e) {
                    return e.userOneName + " " + e.userTwoName + " i " + e.userThreeName;
                }),
                i("dcbb6a0b", "subskrybentów"),
                i("ba74e38b", function (e) {
                    return e.userOneName + " " + e.userTwoName + " i " + n(e.othersCount, e.othersCount + " innym osobom", e.othersCount + " innym osobom", "jeszcze jednej osobie", e.othersCount + " innym osobom");
                }),
                i("c65916af", "subskrybentów"),
                i("g5c5ebb8", function (e) {
                    return "" + e.userName;
                }),
                i("b86ff336", function (e) {
                    return "" + e.userName;
                }),
                i("e0af5609", function (e) {
                    return e.userOneName + " i " + e.userTwoName;
                }),
                i("ae834d19", function (e) {
                    return "" + e.trustedFriendsTweetOwner;
                }),
                i("g3d6f043", function (e) {
                    return e.userOneName + " i " + e.userTwoName;
                }),
                i("ade845a5", function (e) {
                    return "" + e.trustedFriendsTweetOwner;
                }),
                i("ef5386dc", function (e) {
                    return e.userOneName + ", " + e.userTwoName + " i " + e.userThreeName;
                }),
                i("acd17e4b", function (e) {
                    return "" + e.trustedFriendsTweetOwner;
                }),
                i("g1ee3d90", function (e) {
                    return e.userOneName + ", " + e.userTwoName + " i " + e.userThreeName;
                }),
                i("f6da070f", function (e) {
                    return "" + e.trustedFriendsTweetOwner;
                }),
                i("a035ba65", function (e) {
                    return e.userOneName + " " + e.userTwoName + " i jeszcze " + n(e.othersCount, e.othersCount + " innym osobom", e.othersCount + " innym osobom", "jednej osobie", e.othersCount + " innym osobom");
                }),
                i("e4c52c45", function (e) {
                    return "" + e.trustedFriendsTweetOwner;
                }),
                i("baf2c639", function (e) {
                    return e.userOneName + " " + e.userTwoName + " i jeszcze " + n(e.othersCount, e.othersCount + " innym osobom", e.othersCount + " innym osobom", "jednej osobie", e.othersCount + " innym osobom");
                }),
                i("j8e134e5", function (e) {
                    return "" + e.trustedFriendsTweetOwner;
                }),
                i("c14cdb18", "Promuj"),
                i("f11264ac", "Dodaj metodę płatności"),
                i("j619ec94", "Promuj wpis"),
                i("h1fcb36c", "Promuj swój wpis"),
                i("fd22cfe0", "Zasady użytkowania usługi Ads"),
                i("i3656b52", "Ile chcesz na to wydać?"),
                i("h7c29de6", "Szacowany zasięg:"),
                i("hd435bf1", function (e) {
                    return e.audienceLow + "–" + e.audienceHigh + " użytkowników";
                }),
                i("i976aff4", "Zaktualizuj informacje o budżecie dziennym, aby był on zgodny z walutą rozliczeniową."),
                i("e1e912f2", "Twój wpis został opublikowany, ale nie mogliśmy dodać do niego boosta. Nie zostanie Ci naliczona opłata."),
                i("fe26420a", "Dodaj słowa kluczowe"),
                i("aacfbe55", function (e) {
                    return "Publikujesz wpis dla użytkownika @" + e.screenName + ".";
                }),
                i("ga8627cd", function (e) {
                    return "Odpowiadasz w imieniu użytkownika @" + e.screenName + ".";
                }),
                i("e6d2573f", function (e) {
                    return "Wysyłasz wiadomość w imieniu użytkownika @" + e.screenName + ".";
                }),
                i("d37a3e15", function (e) {
                    return "Tworzysz listę w imieniu użytkownika @" + e.screenName + ".";
                }),
                i("ceb1ad26", "Wprowadzamy filmy do pobrania"),
                i("ea97bc08", "Pobierz albo stwórz nową wersję. Użytkownicy premium mają teraz możliwość pobierania i przerabiania Twoich treści. Jeśli wolisz, aby Twoich filmów nie można było pobierać, naciśnij pozycję „Edytuj” na swoim filmie. Twoja treść, Twoje reguły."),
                i("e6042757", function (e) {
                    return "Pozostały czas na edycję wpisu: " + e.minutes + " minut" + n(e.minutes, "y", "", "a", "y") + " i " + e.seconds + " sekund" + n(e.seconds, "y", "", "a", "y");
                }),
                i("a4e39717", function (e) {
                    return "Pozostały czas na edycję wpisu: " + e.minutes + " minut" + n(e.minutes, "y", "", "a", "y");
                }),
                i("c55eed72", "W odpowiedzi do"),
                i("caca3102", "Inni uczestnicy tej rozmowy"),
                i("c6a6dc2f", function (e) {
                    return "Użytkownik @" + e.screenName + " został zablokowany, więc nie otrzyma powiadomienia o Twojej odpowiedzi.";
                }),
                i("f5b426c2", "Wczytywanie użytkowników"),
                i("c20dc654", "Można oznaczyć tylko 10 osób."),
                i("ae0831ab", function (e) {
                    return "Nie można oznaczać użytkownika @" + e.screenName + " na zdjęciach.";
                }),
                i("cca7fa72", "Nie można usunąć zaplanowanego wpisu."),
                i("c5dd0190", "Czas"),
                i("edeff232", "Data"),
                i("fddf24b4", "Strefa czasowa"),
                i("d39dc06e", "Wybrany termin upłynął – nie można zaplanować wysłania wpisu na ten dzień."),
                i("d024efe2", "Wybrany termin jest zbyt odległy – można zaplanować wpis z maksymalnie 18-miesięcznym wyprzedzeniem."),
                i("d15af6da", "Nie można usunąć niektórych niewysłanych wpisów."),
                i("a1e1b748", "Wybrane przez Ciebie niewysłane wpisy zostały usunięte."),
                i("ce80fba0", "Ładowanie niewysłanych wpisów"),
                i("i5d56b62", "Jeszcze nie wszystko gotowe do publikacji? Zapisz wpis w szkicach lub zaplanuj późniejszą publikację."),
                i("aef6257e", "Usuwanie niewysłanych wpisów"),
                i("dce0bc34", "Niewysłane wpisy"),
                i("f8464692", "Zaplanowane"),
                i("e8bd47f2", "Zaznacz wszystko"),
                i("j2b145d4", "Odznacz wszystko"),
                i("h6c79ac2", "Odrzuć niewysłane wpisy"),
                i("d0a4a03c", "Tej akcji nie można cofnąć, a niewysłane wpisy zostaną utracone."),
                i("f9f69d32", "Błąd wysyłania"),
                i("j74e5dd4", "Wpis, na który próbujesz odpowiedzieć, został usunięty"),
                i("c5ceafc8", "W odpowiedzi"),
                i("f501ba43", function (e) {
                    return "i jeszcze " + e.count + " wpis" + n(e.count, "y", "ów", "", "u");
                }),
                i("b321d0cc", "Wczytaj obrazy"),
                i("abd649ce", "Odrzuć niewysłany wpis"),
                i("c7d42978", "Tej czynności nie można cofnąć i utracisz szkic wpisu."),
                i("e43a5528", "Wystąpił błąd i niewysłany wpis nie został usunięty."),
                i("e7c766ee", "Usługi lokalizacji są wyłączone"),
                i("ab68727a", "Możesz je włączyć w ustawianiach Twojego urządzenia."),
                i("ae4057a2", "Nie udało się określić lokalizacji"),
                i("bf2923a6", "Sprawdź ustawienia Twojego urządzenia"),
                i("d963d1b6", "Nie znaleziono miejsc"),
                i("a893d602", "OK"),
                i("be6cc44e", "Przeszukaj lokalizacje"),
                i("d8ef3232", "Nie udało się pobrać lokalizacji"),
                i("b01ed2db", function (e) {
                    return e.distance + " mi";
                }),
                i("i83e29e1", function (e) {
                    return e.distance + " ft";
                }),
                i("d4b7cff7", function (e) {
                    return e.distance + " km";
                }),
                i("b211849f", function (e) {
                    return e.distance + " m";
                }),
                i("fd391b9f", function (e) {
                    return "Osadź " + e.entity;
                }),
                i("e1618e49", function (e) {
                    return "Obserwujesz teraz @" + e.screenName;
                }),
                i("ge5067bc", "Ukryj odpowiedź"),
                i("j136c720", "Ukryto odpowiedź na wpis"),
                i("d66f0338", "Ukrywanie odpowiedzi na Twoje wpisy"),
                i("cfc8cb50", "Aby dać użytkownikom większą kontrolę nad rozmowami, które zaczynają, umożliwiliśmy autorom wpisów ukrywanie odpowiedzi na te wpisy."),
                i("if8dc5f0", "Ukryte odpowiedzi są przenoszone na osobną stronę. Może je zobaczyć każda osoba, gdy wybierze ikonę Ukryta odpowiedź we wpisie."),
                i("b2615c6d", function (e) {
                    return "Też chcesz zablokować użytkownika @" + e.screenName + "?";
                }),
                i("i62a03aa", "Nie"),
                i("f9f27fa2", "Ukryj wpis"),
                i("ce87916a", "Dodaj do / usuń z Najciekawszych"),
                i("eaae42ce", "Dodać do Najciekawszych?"),
                i("h032d096", "Usunąć z Najciekawszych?"),
                i("be38d25e", "Ten wpis będzie polecany na karcie Najciekawsze w Twoim profilu."),
                i("d2be9310", "Ten wpis zostanie usunięty z karty Najciekawsze w Twoim profilu."),
                i("jea6b076", "Pomyślnie dodano do Najciekawszych."),
                i("ce6fd0ec", "Pomyślnie usunięto z Najciekawszych."),
                i("ha35a1d2", "Przypnij do profilu"),
                i("d04f95c0", "Twój wpis został przypięty do Twojego profilu."),
                i("i419d136", "Przypiąć wpis do profilu?"),
                i("c1b9714a", "Ten wpis pojawi się na górze Twojego profilu i zastąpi przypięty wcześniej wpis."),
                i("fe4d099a", "Dodaj do Najciekawszych"),
                i("e8d4c1cc", "Dodawanie wpisów do Najciekawszych to funkcja subskrypcji. Uzyskaj weryfikację, aby odblokować tę i inne funkcje."),
                i("b68c3784", "Uzyskaj weryfikację"),
                i("bb16cc76", "Opuść tę rozmowę"),
                i("de21174c", "Opuściłeś/aś rozmowę"),
                i("j33c9fc6", "Nie chcę opuszczać rozmowy"),
                i("aed79c54", "Opuść tę rozmowę"),
                i("h12044a4", "Czasem po prostu nie chcesz brać udziału w rozmowie. Gdy opuścisz rozmowę:"),
                i("f100e566", "Twoja nazwa użytkownika nie będzie oznaczona w rozmowie"),
                i("a0d68f4e", "Twoja nazwa użytkownika pozostanie, ale nie będzie oznaczana w oryginalnym wpisie ani w odpowiedziach."),
                i("b00255b6", "W tej rozmowie nie pojawi się więcej wzmianek na Twój temat"),
                i("geea29ee", "Nie będzie już można dodawać wzmianek o Tobie w tej rozmowie."),
                i("c54678e8", "Przestaniesz otrzymywać powiadomienia"),
                i("ga4fa180", "Nie będziesz już otrzymywać powiadomień, ale ciągle będziesz widzieć rozmowę"),
                i("h8dde772", "Nikt nie zostanie powiadomiony o tym, że opuściłeś/aś rozmowę."),
                i("ee87e71c", "Nie możesz wyciszyć siebie."),
                i("ed428a76", "Określony użytkownik nie zostanie wyciszony."),
                i("e2d6c17e", "Wycisz tę rozmowę"),
                i("cd1942f4", "Wyłącz wyciszenie tej rozmowy"),
                i("bbd8bed6", "Powiadomienia o tej rozmowie zostały wyciszone"),
                i("c13af432", "Wyciszenie powiadomień w tej rozmowie zostało wyłączone"),
                i("df744bda", "Wycisz to"),
                i("j9552760", "Wycisz rozmowę"),
                i("d751694c", "Jeśli wyciszysz rozmowę, nie będziesz otrzymywać związanych z nią powiadomień."),
                i("a50c911e", "Twój wpis został przypięty i dodany do Najciekawszych."),
                i("d1c1e2c2", "Przypnij w Grupie dyskusyjnej"),
                i("j832cc34", "Te treści będą widoczne u góry osi czasu Twojej Grupy dyskusyjnej."),
                i("h7dbb2f2", "Ten wpis pojawi się u góry strony Grupy dyskusyjnej i zastąpi wpis przypięty wcześniej."),
                i("d8725596", "Przypięty przez moderatorów Grupy dyskusyjnej"),
                i("f5cdcc2c", "Nie interesuje mnie ta reklama"),
                i("c2e276e4", "Zablokuj autora w grupie dyskusyjnej"),
                i("a95f04ba", "Czy na pewno chcesz usunąć z tego wpisu oznaczenie zdjęcia?"),
                i("jfc76958", "Usuń oznaczenie ze zdjęcia"),
                i("j4e43d8b", function (e) {
                    return "Zgłoś " + e.entity;
                }),
                i("e3fd237e", "Zgłoś reklamę"),
                i("d1e21610", "Zgłoś naruszenie przepisów ustawy Prawo internetowe (NetzDG)"),
                i("d7513755", function (e) {
                    return "Wyszukaj wpisy użytkownika @" + e.screenName + " w tej grupie dyskusyjnej";
                }),
                i("d7dbb71b", function (e) {
                    return e.followType + "–" + e.screenName;
                }),
                i("ja66a2b5", function (e) {
                    return "Przestań obserwować @" + e.screenName;
                }),
                i("c2423b7b", function (e) {
                    return "Już nie obserwujesz @" + e.screenName;
                }),
                i("i31dfa4c", "Pokaż odpowiedź"),
                i("j8e56ba2", "Pokazano odpowiedź"),
                i("ic030338", "Odepnij od profilu"),
                i("gfcea3f4", "Odpiąć wpis od profilu?"),
                i("eb2d59f4", "Ten Tweet nie będzie już pojawiać się automatycznie na górze Twojego profilu."),
                i("a2dd7414", "Twój wpis został odpięty od Twojego profilu"),
                i("cac6a24a", "Odepnij wpis"),
                i("i642edc4", "Ten wpis nie będzie już widoczny u góry osi czasu Grupy dyskusyjnej."),
                i("f9478972", "Zobacz ukryte odpowiedzi"),
                i("c5491b5d", function (e) {
                    return "Wyświetl interakcje dla wpisu " + e.entity;
                }),
                i("haebcf52", "Inni użytkownicy nie mogą już dodawać wzmianek na Twój temat w tej rozmowie, a Ty nie będziesz otrzymywać więcej powiadomień."),
                i("c837fcaa", "Pokaż więcej odpowiedzi"),
                i("d228a9a0", "Pokaż więcej"),
                i("g0b48670", "Nie można wyświetlić wszystkich odpowiedzi w tej rozmowie, bo jest ich za dużo."),
                i("d9b417c4", "Wybierz Nie interesuje mnie to"),
                i("c29d6806", "Nie polecaj"),
                i("ge8f3043", function (e) {
                    return "Obserwuj ten temat: " + e.topicName;
                }),
                i("aa576cbf", function (e) {
                    return "Przestań obserwować " + e.topicName;
                }),
                i("i77347d1", function (e) {
                    return "Odrzuć Temat " + e.topicName;
                }),
                i("d69b2d90", "Nie interesuje Cię ten temat."),
                i("je808a17", function (e) {
                    return "Temat: " + e.topicName;
                }),
                i("ic6aa5f4", "Uwierzytelniono."),
                i("c02e7e3c", "Wczytywanie..."),
                i("c5453f28", "1/64 finału"),
                i("eb256a86", "1/32 finału"),
                i("g77adc66", "Słodka szesnastka"),
                i("a6d2520c", "Słodka 16"),
                i("g5b63eb6", "Elitarna ósemka"),
                i("d8bf2890", "Elitarna 8"),
                i("f9d3d6f2", "Finałowa czwórka"),
                i("bda24f7c", "Finałowa 4"),
                i("i5043440", "Mistrzostwa krajowe"),
                i("fcb16026", "Mistrzostwa"),
                i("e9c89ee8", "Wschód"),
                i("h259fd86", "Zachód"),
                i("a7b2545a", "Południe"),
                i("fdf7819a", "Środkowy zachód"),
                i("i899e9b0", "Prześlij drabinkę"),
                i("c5b04394", "Wyświetl wybory"),
                i("h836bbae", "Wyświetl turniej"),
                i("e1059d6c", "1. runda"),
                i("b1602be4", "2. runda"),
                i("ef7bc2c0", "20–21 mar"),
                i("h726aaf2", "22–23 mar"),
                i("ee7cd198", "27–28 mar"),
                i("fed91402", "29–30 marca"),
                i("aba0a450", "5 kwi"),
                i("jdfba2dc", "7 kwi"),
                i("b7c6bc12", "TBD"),
                i("c373612c", "Wybierz:"),
                i("e8b3cab9", function (e) {
                    return "" + e.winner;
                }),
                i("j5db9ddd", " wygrywa z "),
                i("a638617d", function (e) {
                    return "" + e.loser;
                }),
                i("j4c40da4", "Wyślij teraz"),
                i("b23688c8", "Wyłącz stoper"),
                i("cca5d499", function (e) {
                    return "Powiedz mi coś na temat „" + e.selectedText + "” w 1 lub 2 zdaniach.";
                }),
                i("d231a76a", "Wygraj 100 tys. USD za najlepszą drabinkę 🏀"),
                i("heaba5d8", "Zaprojektuj drabinkę uczelnianych rozgrywek koszykarskich w serwisie X! Autor perfekcyjnej drabinki wygrywa podróż na Marsa."),
                i("i57d3ea0", "Obowiązują zasady"),
                i("a0440af6", "Utwórz drabinkę"),
                i("aaad27c8", "Autor"),
                i("eb748f7e", "Wyświetl analizy wpisów"),
                i("b7cff250", function (e) {
                    return "" + e.displayCoins;
                }),
                i("g62dcfbc", function (e) {
                    return "monet" + n(e.count, "y", "", "a", "");
                }),
                i("be059f7e", "Już teraz dotrzyj do kolejnych 100 tys. użytkowników"),
                i("c34f845e", "Spróbuj wzmocnić ten wpis!"),
                i("c37102aa", "Dotrzyj dziś do ponad 100 000 użytkowników, którzy mogą być zainteresowani Twoimi treściami."),
                i("ac245c4c", "Wzmocnij widoczność teraz"),
                i("e4db6326", "Może później"),
                i("g6237a1e", "Aktywna promocja"),
                i("d6b5949e", "Promocja wstrzymana"),
                i("ffd9cfe6", "Zobacz więcej"),
                i("d172116a", "Odkryj więcej"),
                i("be5df69e", "Więcej wpisów"),
                i("g11ebd34", "Więcej propozycji"),
                i("g4a6901a", "Przeglądaj"),
                i("h6453e74", "Przeglądaj wpisy"),
                i("je506a60", "Zmień nazwę użytkownika"),
                i("c0fcb08a", "Zmiana nazwy użytkownika spowoduje tymczasowe usunięcie znaczka i kont powiązanych do momentu uzyskania weryfkacji."),
                i("d1f6d336", "Nazwa użytkownika"),
                i("de65c756", "Podpowiedzi"),
                i("ebeeac1a", "Zmień adres e-mail"),
                i("dc013356", "Dotychczasowy adres"),
                i("ea28c7ce", "Wczytywanie ustawień poczty e-mail"),
                i("f3f66252", "Dodaj adres e-mail"),
                i("i5107de4", "Aktualizuj adres e-mail"),
                i("d19fd42a", "Wyślij ponownie e-mail z potwierdzeniem"),
                i("g4da3246", "E-mail został wysłany. Wkrótce w Twojej skrzynce pocztowej pojawi się link potwierdzający."),
                i("h021352f", function (e) {
                    return "" + e.resendConfirmationLabel;
                }),
                i("d241169c", "Bieżące hasło"),
                i("a9bc3044", "Nowe hasło"),
                i("b8c03cfc", "Potwierdź hasło"),
                i("b731d32c", "Twoje hasło zostało zaktualizowane."),
                i("d555d7e0", "Nowe hasło nie może być takie samo jak bieżące."),
                i("fa8af9ae", "Hasło nie pasuje."),
                i("a03f5c73", function (e) {
                    return e.applicationCount + " aplikacj" + n(e.applicationCount, "e", "i", "a", "i");
                }),
                i("j25601d9", "Dowiedz się więcej"),
                i("cb841d56", "Zmień telefon"),
                i("ce37ea44", "Dodaj numer telefonu"),
                i("ibaf239e", "Aktualizuj numer telefonu"),
                i("j2636558", "Usuń numer telefonu"),
                i("e49b16d4", "Usunąć numer telefonu?"),
                i("i931719e", "Numer zostanie usunięty z Twojego konta i nie będziesz już otrzymywać na ten numer powiadomień ani kodów logowania."),
                i("j841d1f4", "Telefon został usunięty."),
                i("fe8b565a", "Spowoduje to usunięcie numeru telefonu z danych tego konta, przez co nie będziesz już otrzymywać powiadomień w wiadomościach SMS z serwisu X. Spowoduje to również wyłączenie dwustopniowej weryfikacji logowania na tym koncie."),
                i("hf45b8d4", "Spowoduje to usunięcie numeru telefonu z danych Twojego konta, przez co nie będziesz już otrzymywać powiadomień w wiadomościach SMS z serwisu X. Spowoduje to również wyłączenie dwustopniowej weryfikacji logowania za pomocą wiadomości SMS na tym koncie."),
                i("bc262c2e", "Dodatkowe metody"),
                i("hc1a91da", "Kody zapasowe"),
                i("e4fed8f0", "Pobierz jednorazowe kody zapasowe, co umożliwi Ci zalogowanie się do serwisu X, jeśli nie będziesz mieć dostępu do żadnej z metod dwustopniowej weryfikacji logowania."),
                i("b39c7b14", "Wyłączyć weryfikację logowania?"),
                i("a923fce6", "Jeśli wyłączysz dwustopniową weryfikację logowania, Twoje konto może być bardziej narażone na zagrożenia. Czy na pewno chcesz wyłączyć tę opcję?"),
                i("ff781e0a", "Wyłączyć tę opcję?"),
                i("c557ac30", "Czy na pewno chcesz wyłączyć tę metodę?"),
                i("d133464a", "Wyłączenie tej opcji spowoduje usunięcie dwustopniowej weryfikacji logowania na Twoim koncie. Czy na pewno chcesz ją wyłączyć?"),
                i("ee3a7bfa", "Wyłącz"),
                i("aa9139cc", "Prośby o weryfikację logowania"),
                i("jc22dd42", "Gdy się zalogujesz, otrzymasz w aplikacji serwisu X powiadomienie push. Zatwierdź je, aby uzyskać dostęp do swojego konta."),
                i("a219e218", "OK"),
                i("e0d79de8", "Istnieje tylko jeden klucz bezpieczeństwa powiązany z Twoim kontem. Aby mieć pewność, że nie stracisz dostępu do swojego konta w przypadku utraty klucza, dodaj kolejny klucz lub zapisz kod dwustopniowej weryfikacji."),
                i("ja6bbfa0", "Wczytywanie danych weryfikacji logowania"),
                i("c2570922", "Wiadomość SMS"),
                i("fba9483c", "Użyj telefonu komórkowego, aby odebrać wiadomość SMS z kodem uwierzytelniającym, który należy wprowadzić podczas logowania do serwisu X."),
                i("ab61b41a", "Aplikacja uwierzytelniająca"),
                i("a67c7d68", "Korzystaj z mobilnej aplikacji uwierzytelniającej, aby otrzymywać kody weryfikacyjne, który należy wprowadzać podczas każdego logowania do serwisu X."),
                i("h6d0d89c", "Klucz zabezpieczający"),
                i("b3e5c946", "Używaj klucza zabezpieczeń wkładanego do komputera lub synchronizowanego z urządzeniem mobilnym, gdy logujesz się do serwisu X. Będziesz potrzebować obsługiwanego urządzenia mobilnego lub przeglądarki internetowej."),
                i("cd195528", "Dodaj nowy klucz bezpieczeństwa"),
                i("a1860ee8", "Hasło tymczasowe"),
                i("j45a2856", "Utwórz jednorazowe hasło tymczasowe do logowania się za pomocą usług zewnętrznych."),
                i("d8612d9c", "Najpierw włącz opcję weryfikacji za pomocą wiadomości SMS lub aplikacji uwierzytelniającej"),
                i("e13d4468", "Aby ustanowić klucz bezpieczeństwa, musisz najpierw wybrać wiadomość SMS lub aplikację uwierzytelniającą jaką jedną z dwóch metod podwójnej weryfikacji logowania."),
                i("c1d96d6a", "Dodano maksymalną liczbę kluczy"),
                i("gf91694e", "Aby dodać kolejny klucz, musisz usunąć jeden z dotychczasowych."),
                i("j265ddb6", "Potwierdź adres e-mail"),
                i("a7cfdf1c", "Aby włączyć dwustopniową weryfikację logowania, musisz skojarzyć adres e-mail ze swoim kontem w serwisie X i potwierdzić, że naprawdę należy on do Ciebie."),
                i("d7bfde1a", "Wygląda na to, że Twoje konto jest zawieszone. Dwustopniową weryfikację logowania można włączyć tylko w przypadku aktywnych kont."),
                i("g268fbb8", "To konto zostało zweryfikowane za pomocą dokumentu tożsamości."),
                i("f66d24be", "Centrum Pomocy"),
                i("c8255462", "Ukryj etykietę konta zweryfikowanego za pomocą dokumentu tożsamości"),
                i("c6e731ee", "Ukryj etykietę konta zweryfikowanego za pomocą dokumentu tożsamości, aby użytkownicy nie mogli jej zobaczyć, gdy nacisną niebieski znaczek na stronie Twojego profilu."),
                i("be582166", "Weryfikacja za pomocą dokumentu tożsamości może utrudnić podszywanie się pod Ciebie oraz sprawić, że Twój profil zostanie oznaczony etykietą konta zweryfikowanego za pomocą dokumentu tożsamości."),
                i("b496bc94", "Analizujemy Twój dokument wydany przez organ państwowy. Będziemy Ci przekazywać powiadomienia dotyczące przebiegu tego procesu!\n\nPo zatwierdzeniu Twój profil zostanie oznaczony etykietą konta zweryfikowanego za pomocą dokumentu tożsamości, dzięki czemu inni użytkownicy będą wiedzieć, że Twoje konto zostało zweryfikowane w ten sposób."),
                i("d8f5cce4", "Przekroczono limit liczby próśb o weryfikację. Spróbuj ponownie za 24 godziny."),
                i("i8427a1e", "Tego konta nie można zweryfikować za pomocą dokumentu tożsamości. Obecnie jest to możliwe tylko w przypadku indywidualnych subskrybentów usługi Premium."),
                i("cdc65e89", function (e) {
                    return e.title + " (opcjonalnie)";
                }),
                i("h05c1f28", "Zweryfikuj swoje konto, dostarczając dokument tożsamości wydany przez organ państwowy. Zazwyczaj zajmuje to ok. 5 minut."),
                i("j8cfcc62", "Wyrażam zgodę na używanie przez firmy X i Au10tix obrazów przedstawiających mój dokument tożsamości oraz moją twarz, w tym wyodrębnionych z nich danych biometrycznych, w celu potwierdzenia mojej tożsamości, a także na potrzeby zapewnienia bezpieczeństwa i zabezpieczeń w serwisie X, w tym w celu zapobiegania naśladownictwu. Firma Au10tix może przechowywać takie dane nie dłużej niż przez 30 dni."),
                i("c4930cb6", "Co będzie potrzebne:"),
                i("ac7bb0fe", "Przygotuj dokument tożsamości wydany przez organ państwowy"),
                i("c12ce69c", "Sprawdź, czy aparat w Twoim urządzeniu działa i nie jest zakryty"),
                i("c5bfe94a", "Przygotuj się do zrobienia zdjęć sobie i dokumentowi tożsamości"),
                i("e5b7dd84", "Rozpocznij"),
                i("abfaa528", "Pomiń"),
                i("e4fed511", "usługę X Premium"),
                i("def518fa", "Subskrypcja twórcy treści"),
                i("f61cda83", "Udział w dochodach z reklam"),
                i("g1952008", "Subskrypcja twórcy treści"),
                i("e5d0419c", "Udział w dochodach dla twórców treści"),
                i("g3723480", "Subskrypcja twórcy treści"),
                i("c776f523", "Udział w dochodach z reklam"),
                i("ab9f38f8", "Subskrypcja twórcy treści"),
                i("d5cab8b0", "Udział w dochodach dla twórców treści"),
                i("deaf5b16", "Ponów próbę"),
                i("g1a4a1b6", "Błąd weryfikacji dokumentu tożsamości"),
                i("e24305e4", "Sesja weryfikacji dokumentu tożsamości była nieważna lub nieaktualna. Spróbuj ponownie."),
                i("f7954a0c", "Wczytywanie danych kluczy bezpieczeństwa"),
                i("h69986c2", "Możesz usunąć klucz bezpieczeństwa lub zmienić jego nazwę."),
                i("i5896ba2", "Dodaj kolejny klucz"),
                i("a8ef2b64", "Nienazwany klucz bezpieczeństwa"),
                i("d4e220b4", "Nazwa"),
                i("g6d0f0b6", "Zarządzaj kluczem bezpieczeństwa"),
                i("b894f68a", "Wczytywanie danych klucza bezpieczeństwa"),
                i("g2601bb6", "Zmień nazwę klucza bezpieczeństwa"),
                i("b464b726", "Usuń klucz"),
                i("a4101e1b", function (e) {
                    return "Data dodania: " + e.securityKeyAddedDate;
                }),
                i("i3bb3f78", "Kod zapasowy"),
                i("ec6a76e0", "Wygeneruj nowy kod"),
                i("f2c3c31c", "Kopiuj kod"),
                i("e8016b64", "Wczytywanie kodu zapasowego"),
                i("c4ca22bc", "Jeśli kiedykolwiek stracisz dostęp do swojego urządzenia, możesz użyć tego kodu, aby potwierdzić swoją tożsamość."),
                i("f20ff69f", "Dowiedz się więcej"),
                i("j2327f80", "Tymczasowe hasło"),
                i("fbfeaf8e", "Wygeneruj nowe hasło"),
                i("h4a8bd12", "Kopiuj hasło"),
                i("g247dc1c", "Wczytywanie tymczasowego hasła"),
                i("h3a32f52", "Użyj tego tymczasowego hasła (spacje są opcjonalne), aby zalogować się do serwisu X w aplikacjach i na urządzeniach."),
                i("d70fceac", "To hasło wygaśnie za godzinę."),
                i("j924d222", "Zmień kraj"),
                i("e9310157", "Dowiedz się więcej"),
                i("bd5ac12e", "Wybierz preferowany język nagłówków, przycisków i innych elementów interfejsu serwisu X na tym koncie. Nie ma to wpływu na język treści wyświetlanych na osi czasu."),
                i("cef33711", function (e) {
                    return e.languageName + " (beta)";
                }),
                i("b033248c", "Odnajdywanie"),
                i("c69b4798", "Określ, czy osoby znające Twój adres e-mail lub numer telefonu będą mogły Cię wyszukać i skontaktować się z Tobą w serwisie X."),
                i("eca117e6", "Pozwól, aby osoby, które znają Twój adres e-mail, mogły Cię wyszukać w serwisie X"),
                i("acd36386", "Pozwól, aby osoby, które znają Twój adres e-mail, mogły Cię wyszukać i skontaktować się z Tobą w serwisie X."),
                i("gd8511ca", "Pozwól, aby osoby, które znają Twój numer telefonu, mogły Cię wyszukać w serwisie X"),
                i("eca935ec", "Pozwól, aby osoby, które znają Twój numer telefonu, mogły Cię wyszukać i skontaktować się z Tobą w serwisie X."),
                i("ac77c66c", "Kontakty"),
                i("jadf483e", "Zarządzaj kontaktami pobranymi z urządzeń mobilnych."),
                i("b864be7a", "Usuń wszystkie kontakty"),
                i("g5fa1090", "Usunąć wszystkie kontakty?"),
                i("h3e420fc", "Spowoduje to usunięcie wszystkich przesłanych uprzednio kontaktów oraz wyłączenie synchronizacji z serwisem X na wszystkich urządzeniach. Wykonywanie tej operacji może potrwać kilka minut i jest nieodwracalne, a w międzyczasie w serwisie X wciąż będą wyświetlane sugestie (utworzone na podstawie Twoich kontaktów)."),
                i("ca24589e", "Brak nazwy"),
                i("d439b1c1", "Dowiedz się więcej"),
                i("fe36fe10", "Potwierdź hasło"),
                i("hccd9dbe", "W tym celu musisz wpisać swoje hasło."),
                i("df1ddda4", "Etykiety lokalizacji dodane do wpisów nie będą już widoczne na stronie X.com ani w aplikacjach serwisu X dla systemów iOS i Android. Wprowadzanie tych aktualizacji może trochę potrwać."),
                i("ed7fa034", "Usługi lokalizacji są obecnie wyłączone na tym urządzeniu. Możesz je włączyć w ustawieniach urządzenia."),
                i("e80e4288", "Usuń wszystkie informacje o lokalizacji dołączone do Twoich wpisów"),
                i("b0ee8ab6", "Usunąć wszystkie informacje o lokalizacji dołączone do Twoich wpisów?"),
                i("e23b2991", "Dowiedz się więcej"),
                i("gd758534", "Pozwól innym oznaczać Cię nas zdjęciach i otrzymuj o tym powiadomienia."),
                i("a90af44e", "Ukryj wrażliwe treści"),
                i("a25e2ec6", "Usuń zablokowane i wyciszone konta."),
                i("b827a058", "Zaktualizowano ustawienia bezpiecznego wyszukiwania."),
                i("b27c9852", "Coś poszło nie tak podczas aktualizacji ustawień bezpiecznego wyszukiwania."),
                i("j3402d7e", "Dzięki tej opcji wpisy, które mogą zawierać nieodpowiednie treści, nie będą wyświetlane w Twoich wynikach wyszukiwania."),
                i("if05bca6", "Za pomocą tej opcji ukryjesz wyniki wyszukiwania pochodzące z zablokowanych i wyciszonych kont."),
                i("bc7fd990", "Wczytywanie ustawień trendów"),
                i("e2f16650", "Pokazuj treści w tej lokalizacji"),
                i("e5e88f40", "Wybierz tę opcję, by zawsze być na bieżąco."),
                i("i4d54b0e", "Trendy dla Ciebie"),
                i("ad431584", "Pokaż mi zabawne historie Groka"),
                i("df9f03c8", "Dopasuj trendy na podstawie swojej lokalizacji oraz obserwowanych użytkowników."),
                i("c6cf5c7e", "Personalizuj trendy na podstawie swojej lokalizacji i osób, które obserwujesz."),
                i("e09358ba", "Wyświetlaj najnowsze historie w trybie zabawnym Groka."),
                i("a55db872", "Personalizacja"),
                i("a58170fc", "Historie Groka"),
                i("h0b5152e", "Zmień lokalizację"),
                i("dfeada5e", "Odkryj lokalizacje"),
                i("ac854308", "Przepisy"),
                i("d429c942", "Najpopularniejsze na temat: przepisy dotyczące wyborów w USA"),
                i("ede134f2", "Wybierz, czy chcesz, żeby filmy i GIF-y były odtwarzane automatycznie na tym urządzeniu."),
                i("b3aab6d4", "Lokalizacje"),
                i("e53e05e4", "Wczytywanie lokalizacji"),
                i("d5c9174f", function (e) {
                    return e.location + ", " + e.country;
                }),
                i("b47d123d", function (e) {
                    return "OSZCZĘDZASZ " + e.percentage + "%";
                }),
                i("c6614cc0", "plus należy podatek"),
                i("f8d3b50a", "plus podatek"),
                i("i2c32253", function (e) {
                    return e.price + " / miesiąc";
                }),
                i("c41e1023", function (e) {
                    return " " + e.price + " / rok";
                }),
                i("i57aeafb", function (e) {
                    return "Przez pierwsz" + n(e.duration, "e " + e.duration + " miesiące", "e " + e.duration + " miesięcy", "y miesiąc", "e " + e.duration + " miesięcy") + ", a później " + e.standardPrice + " miesięcznie";
                }),
                i("ae3e3723", function (e) {
                    return "Przez pierwsz" + n(e.duration, "e " + e.duration + " lata", "e " + e.duration + " lat", "y rok", "e " + e.duration + " lat") + ", a później " + e.standardPrice + " rocznie";
                }),
                i("ade4c757", function (e) {
                    return "Następnie " + e.price + " / miesiąc";
                }),
                i("f7798e11", function (e) {
                    return "Następnie " + e.price + " / rok";
                }),
                i("e0b39888", "Rozliczenie miesięczne"),
                i("b67c37de", "Rozliczenie roczne"),
                i("a8363765", function (e) {
                    return e.price + " (rozliczenie roczne)";
                }),
                i("df3ed1c8", function (e) {
                    return "" + e.standardPrice;
                }),
                i("g261b098", function (e) {
                    return "" + e.standardPrice;
                }),
                i("af66a072", "Zanim zrezygnujesz, zobacz, co stracisz"),
                i("a092f1ba", "Kontynuuj, aby anulować"),
                i("g96c7f48", "Zmień plan na inny"),
                i("iccac88e", "O połowę mniej reklam na osiach czasu Dla Ciebie i Obserwowane"),
                i("d7a124d8", "Brak reklam"),
                i("d2d22c36", "Dostęp do Groka"),
                i("j249b1d4", "Wzmacnianie odpowiedzi"),
                i("c4a37384", "Dłuższe wpisy"),
                i("fb656858", "Edytowanie wpisów"),
                i("faaec212", "Otrzymywanie płatności za wpisy"),
                i("fb3c7168", "Foldery Zakładek"),
                i("b346bc12", "Znaczek"),
                i("je8143e1", function (e) {
                    return "Korzystaj z " + e.percentage + "% zniżki na wersję X " + e.productName + " przez " + n(e.duration, e.duration + " miesiące", e.duration + " miesięcy", "miesiąc", e.duration + " miesiąca");
                }),
                i("j5847735", function (e) {
                    return "Korzystaj z " + e.percentage + "% zniżki na wersję X " + e.productName + " przez " + n(e.duration, e.duration + " lata", e.duration + " lat", "rok", e.duration + " roku");
                }),
                i("da3431f9", function (e) {
                    return "Ten rabat to mały prezent od nas z okazji tego, że chcesz nadal korzystać z subskrypcji X " + e.productName + "!";
                }),
                i("i6fbfc72", "Ekskluzywna jednorazowa oferta"),
                i("f1bc6309", function (e) {
                    return "Zachowaj pełny dostęp do wszystkich funkcji wersji X " + e.productName;
                }),
                i("fdb7b52a", "Rabat będzie stosowany od następnego cyklu rozliczeniowego."),
                i("af283938", function (e) {
                    return "" + e.standardPrice;
                }),
                i("c284b365", function (e) {
                    return "" + e.discountedPrice;
                }),
                i("e2673372", function (e) {
                    return "" + e.standardPrice;
                }),
                i("jd2dc103", function (e) {
                    return "" + e.discountedPrice;
                }),
                i("c6150942", "Gotowe"),
                i("a905eac6", "Poznaj wersję Premium"),
                i("j6083a1c", "Zarządzaj swoją subskrypcją"),
                i("b4fa4630", "Zaktualizuj metodę płatności"),
                i("ef0dfa5a", "Zaktualizuj informacje rozliczeniowe"),
                i("f5b352ec", "Anuluj subskrypcję"),
                i("j317d958", "Zapowiedź — stracisz oczekujący rabat"),
                i("a46e42d2", "Zachowaj moją subskrypcję"),
                i("e122fb3f", function (e) {
                    return "Okres korzystania z Twojej bezpłatnej wersji próbnej zakończy się " + e.endDate + ".";
                }),
                i("be103b84", "Aktywny"),
                i("ace43720", "Wkrótce wygasa"),
                i("c8f18aa4", "Otrzymujesz subskrypcję Premium+, ponieważ uczestniczysz w programie Zweryfikowane Organizacje."),
                i("a341d1f7", function (e) {
                    return "Otrzymujesz subskrypcję Premium+, ponieważ Twoja organizacja uczestniczy w programie Zweryfikowane Organizacje za pośrednictwem konta @" + e.organization + ". Skontaktuj się ze swoją organizacją, aby uzyskać więcej szczegółowych informacji.";
                }),
                i("e4aaf0f8", "Aby anulować dodatkową subskrypcję usługi Premium, skontaktuj się z pomocą techniczną"),
                i("e5170220", "To konto otrzymało dodatkową subskrypcję Premium w związku z wydatkami reklamowymi."),
                i("j6d6b66e", "To konto otrzymało subskrypcję w prezencie. Aby anulować subskrypcję, skontaktuj się z pomocą techniczną."),
                i("fae1751f", function (e) {
                    return "Wygląda na to, że ta subskrypcja została przez Ciebie kupiona w aplikacji " + e.mobilePlatform + " serwisu X. Aby zarządzać tą subskrypcją lub ją anulować, musisz użyć tej aplikacji.";
                }),
                i("fecebd4c", "tutaj"),
                i("h201c4c2", "iOS"),
                i("i8385a2c", "Android"),
                i("h80834de", "inne"),
                i("baf97716", "Twoje funkcje będą dostępne do końca okresu rozliczeniowego."),
                i("ae864b69", function (e) {
                    return "Zaplanowano zmianę poziomu Twojej subskrypcji na " + e.tierName + " od następnego cyklu rozliczeniowego, który zacznie się w dniu " + e.date;
                }),
                i("edbb700f", function (e) {
                    return "Zaczyna się w następnym cyklu rozliczeniowym w dniu " + e.date;
                }),
                i("e9884540", "Aktywny rabat"),
                i("bfb879aa", "Oczekujący rabat"),
                i("f8321d82", "Wszystkie"),
                i("eb233866", "Zaimportowane"),
                i("d23b0404", "Jeśli zablokujesz jakiegoś użytkownika, nie będzie on mógł Cię obserwować ani wysyłać do Ciebie wiadomości; nie będziesz też otrzymywać żadnych powiadomień na jego temat."),
                i("e0a7e9bc", "Blokuj wybrane konta"),
                i("ef731b14", "Wczytywanie zablokowanych kont"),
                i("e554ba83", "Dowiedz się więcej"),
                i("if594962", "Zablokowano"),
                i("i2b9632e", "Pomyślnie odblokowano."),
                i("g51a96de", "Kiedy zablokujesz jakiegoś użytkownika, nie będzie on mógł Cię obserwować ani wysyłać Ci wiadomości i nie będziesz otrzymywać żadnych powiadomień na jego temat. Możesz zaimportować listę kont, które chcesz zablokować w serwisie X."),
                i("j035733c", "Proces dezaktywacji Twojego konta w serwisie X niedługo się rozpocznie. Twoja nazwa wyświetlana (@nazwa_użytkownika) i profil publiczny nie będą już widoczne na stronie X.com ani w aplikacjach serwisu X dla systemów iOS i Android."),
                i("j4a29d52", "Możesz przywrócić swoje konto w serwisie X w ciągu 30 dni od dezaktywacji, jeśli dezaktywacja była przypadkowa lub nastąpiła w wyniku błędu."),
                i("ea989810", "Dezaktywuj konto"),
                i("f6e73faa", "Dezaktywuj"),
                i("c3743328", "To spowoduje dezaktywację Twojego konta"),
                i("a20cd24e", "Co jeszcze warto wiedzieć"),
                i("e93b0ae0", "Aby wysłać wniosek o dezaktywację konta, wpisz hasło przypisane do tego konta."),
                i("fc025d1d", "Dowiedz się więcej"),
                i("bb5e039c", "ustawieniach"),
                i("j37efff6", "zmień je"),
                i("ce5bfe12", "dane z serwisu X"),
                i("g7088266", "Edytuj profil"),
                i("d9d293b8", "Strona internetowa"),
                i("cb469ff6", "Pole nazwy nie może być puste"),
                i("g511f468", "Awatar nie został zaktualizowany, bo nie udało się załadować niektórych multimediów"),
                i("ec3a116e", "Baner nie został zaktualizowany, bo nie udało się załadować niektórych multimediów."),
                i("j94599ec", "Dodaj zdjęcie awatara"),
                i("df31d76a", "Dodaj zdjęcie baneru"),
                i("c01a0e1a", "Potwierdzić datę urodzenia?"),
                i("df2c469a", "Przełącz na konto profesjonalne"),
                i("e1f76978", "Edytuj profil profesjonalny"),
                i("ic04a6f6", "Tej czynności nie można cofnąć, a zmiany nie zostaną zapisane."),
                i("addbe8e8", "Wybierając nazwę bez znaków specjalnych, masz pewność, że będzie ona łatwa i zrozumiała dla wszystkich, nawet dla osób niewidomych i słabowidzących."),
                i("a46f80ab", function (e) {
                    return "Data urodzenia: " + e.birthdate;
                }),
                i("c7905f89", function (e) {
                    return "Rok urodzenia: " + e.year;
                }),
                i("bfe8d1a2", "Edytuj rozszerzone informacje O mnie"),
                i("e1ec926e", "Utwórz rozszerzone informacje O mnie"),
                i("c119dee8", "Data urodzenia"),
                i("bbf0afc8", "Dodaj swoją datę urodzenia"),
                i("f98d367e", "Chcesz zmienić datę urodzenia?"),
                i("d3f43300", "Tę informację można zmienić tylko kilka razy. Należy wpisać tu wiek osoby korzystającej z konta."),
                i("g10411f0", "Powinna być to data urodzenia osoby korzystającej z tego konta, nawet jeśli zakładasz konto swojej firmy, konto wydarzenia czy konto dla swojego kota."),
                i("a0c5e370", "Kto może to zobaczyć?"),
                i("i68fe54e", "Miesiąc i dzień"),
                i("b4e729b6", "Rok"),
                i("f3bb1b48", "Usunąć datę urodzenia?"),
                i("c9cb9972", "Spowoduje to usunięcie daty urodzenia z Twojego profilu."),
                i("a2bef112", "Usuń datę urodzenia"),
                i("c37622ec", "Wpisz ważną datę"),
                i("f679d166", "Twoi obserwujący"),
                i("af293dc2", "Osoby, które obserwujesz"),
                i("h99b6d08", "Polityce prywatności"),
                i("hce7a225", "Dowiedz się więcej"),
                i("e9603d88", "Wyświetlaj informację o potwierdzonym numerze telefonu"),
                i("ada99498", "Ta informacja będzie widoczna dla osób z Twojego regionu."),
                i("a765e936", "Usuń rozszerzone informacje O mnie"),
                i("d4d68e44", "Zapisane"),
                i("ie4f57d2", "Odnów swoją subskrypcję Premium"),
                i("h293aa52", "Twoja subskrypcja Premium wygasa!"),
                i("j1923668", "Nie strać dostępu do najlepszych funkcji serwisu X."),
                i("ac7e97ee", "Odnów subskrypcję"),
                i("f70c69b4", "Dodawanie boosta do odpowiedzi, edytowanie wpisów, dłuższe wpisy i wiele innych funkcji."),
                i("f4cec4d2", "Niebieski znaczek, dodawanie boosta do odpowiedzi, większe limity Groka i wiele innych funkcji."),
                i("b6de83a0", "Pokój tylko dla pracowników"),
                i("g3f251f2", "Transmisja prywatna"),
                i("d08666ba", "Prywatny Pokój"),
                i("eadb5a46", "Dołącz jako pierwszy/a"),
                i("f9629a8f", function (e) {
                    return "Transmisja użytkownika " + e.hostName;
                }),
                i("ia3c0ab7", function (e) {
                    return "Pokój użytkownika " + e.hostName;
                }),
                i("hd552761", function (e) {
                    return "Host: " + e.hostName;
                }),
                i("c3ea19a5", function (e) {
                    return e.index + " z " + e.total;
                }),
                i("a5235305", function (e) {
                    return e.listOfPeople + " dołączył/a";
                }),
                i("df9f8243", function (e) {
                    return e.name + " słucha";
                }),
                i("g2445c2f", function (e) {
                    return e.name + " mówi";
                }),
                i("fcfd5a67", function (e) {
                    return e.name + " jest hostem";
                }),
                i("f7882829", function (e) {
                    return e.name + " jest współhostem";
                }),
                i("d961a4a0", "Na żywo w serwisie X"),
                i("g2c0144a", "Zweryfikowane organizacje"),
                i("cd5cdec8", "Zarządzaj kredytami reklamowymi"),
                i("f23b6a72", "Pozostałe kredyty reklamowe"),
                i("i969d5de", "Konfiguruj kampanię reklamową"),
                i("d0924f58", "Uzyskaj pomoc techniczną dotyczącą problemu"),
                i("j8d53b64", "Wyświetl wszystkie funkcje"),
                i("jd26f2a6", "Dodaj konta powiązane"),
                i("e0a492e6", "Zarządzaj swoimi ofertami pracy"),
                i("d9cbd02c", "Trwa przeglądanie Twojego wniosku"),
                i("ed4759a6", "W ciągu kilku dni otrzymasz informacje dotyczące rozpatrzenia Twojego wniosku. Możemy poprosić Cię o dodatkowe informacje, używając poczty e-mail."),
                i("dad69faa", "Zaktualizuj metodę płatności"),
                i("daf3248a", "Wniosek niekompletny"),
                i("eb71036f", function (e) {
                    return "Prześlij i zweryfikuj dokumenty organizacji do " + e.date;
                }),
                i("a1d3f1f2", "Współpracujemy z firmą Persona w zakresie weryfikacji dokumentów tożsamości i dokumentów firmowych. Ma to na celu zapewnienie bezpieczeństwa i poprawnego działania zabezpieczeń serwisu X. Firma Persona może przechowywać Twoje dane przez maksymalnie 30 dni."),
                i("ea8c295a", "Rozpocznij weryfikację dokumentów"),
                i("da1aa48f", function (e) {
                    return "Weryfikacja zwiększa Twoją wiarygodność i widoczność, tak jak w przypadku użytkownika @" + e.screenName + ".";
                }),
                i("e4a7a968", "Nie masz jeszcze weryfikacji"),
                i("id9c1e82", "Ten profil jest zweryfikowany"),
                i("d43b0edc", "Dołącz do grona zweryfikowanych użytkowników"),
                i("d4ea0ed4", "Zdobądź własną niebieską odznakę"),
                i("cffeaeae", "Uzyskaj weryfikację"),
                i("b8e930fe", "Aktualne trendy"),
                i("ae05f268", "Trendy są niedostępne."),
                i("c6b51af8", "Dopiero zaczynasz korzystać z serwisu X?"),
                i("ie8e1ffc", "Zarejestruj się teraz, żeby stworzyć własną, spersonalizowaną oś czasu!"),
                i("fd6473fa", "Ładowanie użytkowników wartych obserwowania"),
                i("a526aa66", "Warci obserwowania"),
                i("ef625010", "Może Ci się spodobać"),
                i("b7388a56", "Stopka"),
                i("hdabc3fc", "Zasady użytkowania"),
                i("bc6efc72", "Polityka prywatności"),
                i("h3161192", "Polityka dotycząca plików cookie"),
                i("a7de64de", "Informacja o reklamach"),
                i("jb0a4c36", "Blog"),
                i("ce6d095a", "Praca"),
                i("e0adec82", "Zasoby marki"),
                i("df1b7550", "Marketing"),
                i("he258678", "X dla firm"),
                i("c6f58084", "Deweloperzy"),
                i("d83f18d2", "Ścieżka"),
                i("hc5aa17c", "Pobierz aplikację X"),
                i("j0693948", "Pobierz aplikację Grok");
            i("fbf83158", "Ostrzeżenie: realizacja płatności nie powiodła się"),
                i("jadeb4da", "Jak najszybciej zaktualizuj swoją metodę płatności, zanim stracisz korzyści związane z subskrypcją."),
                i("bce3726a", "Aktualizuj rozliczenie"),
                i("fce9ecce", "Sugerowane filmy"),
                i("efe6ef9e", "Wyświetl wpis"),
                i("b3d183ce", "Wpis z odpowiedziami"),
                i("c299a6c0", "Wątek"),
                i("h3d5d79e", "Wpis w grupie dyskusyjnej"),
                i("cfe877ca", "Zdecyduj, kogo chcesz obserwować"),
                i("e06b864c", "Wygląda na to, że spodobała Ci się ta rozmowa"),
                i("a078ff70", "Chcesz zobaczyć więcej treści od osób z tego wątku? Zacznij obserwować nowe konta."),
                i("cb80300e", "Przejdź do osi czasu na Stronie Głównej"),
                i("ea5cd098", "Przejdź do najpopularniejszych"),
                i("c67e3fc2", "Główna oś czasu"),
                i("d601fc20", "Najnowsze"),
                i("j43f99be", "Trafność"),
                i("ad6e11ac", "Sortuj odpowiedzi wg"),
                i("b2311b70", "Te treści są niedostępne"),
                i("j88f27d8", "Powiązane osoby"),
                i("i31dcd22", "Artykuł"),
                i("e3de2f6f", function (e) {
                    return e.entity + " został dodany do Zakładek";
                }),
                i("e64de8a9", function (e) {
                    return e.entity + " został usunięty z Zakładek";
                }),
                i("d6d9aab6", "Dodaj Zakładkę"),
                i("bb89cf46", "Usuń zakładkę"),
                i("a739d4ba", "Dodaj do folderu Zakładek"),
                i("d5270434", "Wyjdź"),
                i("ac85c6b2", "Podczas ładowania strony wystąpił błąd"),
                i("b327c12a", "Zdjęcie"),
                i("ic76bdf0", "Utwórz to ponownie za pomocą Groka"),
                i("a4d3eb67", function (e) {
                    return e.fullName + " w serwisie X: „" + e.tweetText + "”";
                }),
                i("f0701753", function (e) {
                    return "Ukryj na " + e.number + " dni";
                }),
                i("j7d0e836", "Rozwiń"),
                i("d227d19e", "Zwiń"),
                i("h367e724", "Rozszerzone informacje O mnie"),
                i("ea5928d4", "Masz wiele różnych cech. Pokaż to w swoim profilu.\nDodaj rozszerzone informacje O mnie, aby powiedzieć więcej o sobie. "),
                i("h7ef9dc8", "Może obejmować:"),
                i("c04ba4b4", "Rzeczy, nad którymi pracujesz i które chcesz zaprezentować"),
                i("d7666008", "Twój legendarny przepis na makaron"),
                i("cb24ee16", "Doświadczenie i preferencje zawodowe"),
                i("a1c93d74", "Wygląda na to, że nie udało się zapisać Twoich zmian. Spróbuj ponownie później."),
                i("b956c04a", "Czy na pewno chcesz usunąć rozszerzone informacje O mnie"),
                i("ifb23caa", "Usunięcie rozszerzonych informacji O mnie spowoduje usunięcie ich z Twojego profilu."),
                i("c2333081", function (e) {
                    return e.count + " znak" + n(e.count, "i", "ów", "", "u");
                }),
                i("a2b8c54c", "Usunięto"),
                i("a9cc8f96", "Przekroczono maksymalną liczbę znaków"),
                i("eb7710f1", function (e) {
                    return e.years + " " + n(e.years, "lata", "lat", "rok", "roku");
                }),
                i("bfc38bb5", function (e) {
                    return e.months + " miesi" + n(e.months, "ące", "ęcy", "ąc", "ąca");
                }),
                i("h6a724ac", "Czy na pewno chcesz to usunąć?"),
                i("f94aacae", "Usunięcie spowoduje usunięcie tego z Twojego profilu."),
                i("je07e266", "Ukryty"),
                i("a622dfcc", "Historia zadań"),
                i("a6ec7ff8", "życiorys"),
                i("eeb6d22c", "doświadczenie"),
                i("eba5a8ec", "Nazwa stanowiska"),
                i("fd20adb8", "Aktualnie tutaj pracuję"),
                i("cd3059f2", "Data rozpoczęcia"),
                i("b86019ae", "Data zakończenia"),
                i("eedfd35c", "Firma"),
                i("caa46e54", "Nazwa firmy"),
                i("e893fe6e", "Utwórz firmę"),
                i("j1c09ca4", "Witryna internetowa firmy"),
                i("hd332c96", "Nazwa stanowiska jest wymagana"),
                i("d2fb1b80", "Firma jest wymagana"),
                i("b3590132", "Daty rozpoczęcia i zakończenia są wymagane"),
                i("debb6abe", "Data rozpoczęcia nie może wypadać w przyszłości"),
                i("j7d08ada", "Data zakończenia nie może wypadać w przyszłości"),
                i("a8c7d3fc", "Data zakończenia musi wypadać po dacie rozpoczęcia"),
                i("b335d507", function (e) {
                    return "Przekroczono maksymalną długość w znakach równą " + e.maxChars;
                }),
                i("j29ab120", "Wycisz powiadomienia od użytkowników:"),
                i("jdfc82f6", "których nie obserwujesz"),
                i("cfcda0e6", "którzy Cię nie obserwują"),
                i("c75b9b2a", "którzy mają nowe konto"),
                i("f39b9c9e", "którzy używają domyślnych zdjęć profilowych"),
                i("d227f940", "którzy nie potwierdzili adresu e-mail"),
                i("b210936e", "którzy nie potwierdzili numeru telefonu"),
                i("ed0df10b", "Dowiedz się więcej"),
                i("dcef34ac", "Włącz"),
                i("a39f706e", "Twoja przeglądarka nie obsługuje powiadomień push"),
                i("h4f20d0e", "Otrzymuj powiadomienia push o najważniejszych rzeczach, które wydarzyły się w serwisie X, gdy Cię nie było. W dowolnej chwili możesz je wyłączyć."),
                i("cdce0394", "To ustawienie dotyczy każdego konta, z którego korzystasz za pośrednictwem przeglądarki."),
                i("b39bcae2", "Włącz powiadomienia push"),
                i("b50f6144", "Aby na bieżąco otrzymywać powiadomienia, włącz powiadomienia push. Będziesz otrzymywać je także wtedy, gdy nie będziesz przeglądać serwisu X. W dowolnej chwili możesz je wyłączyć."),
                i("fe11b3ea", "Przeglądarka nie jest obsługiwana"),
                i("a1245d3a", "Wygląda na to, że Twoja przeglądarka nie obsługuje powiadomień push."),
                i("f580c738", "Włączyć powiadomienia?"),
                i("i951fbcc", "Aby otrzymywać powiadomienia z serwisu X, musisz zezwolić na powiadomienia w ustawieniach przeglądarki."),
                i("ec7cb554", "Kiedy włączysz powiadomienia o wpisach osób, które obserwujesz, będziesz otrzymywać powiadomienia push o ich wpisach oraz transmisjach."),
                i("b68050dc", "Zobacz użytkowników"),
                i("af045060", "Dotyczy Ciebie i Twoich wpisów"),
                i("cf378ff8", "Z serwisu X"),
                i("f823bbbe", "Tylko dla zweryfikowanych kont"),
                i("a40e37f2", "Otrzymuj wiadomości e-mail z informacjami o najważniejszych wydarzeniach, które miały miejsce w serwisie X, gdy Cię nie było. W dowolnej chwili możesz je wyłączyć."),
                i("e8eb54a0", "Cotygodniowe raporty dotyczące Twojego konta"),
                i("ib80b0f2", "Nowe powiadomienia"),
                i("ba58e6b0", "Wpisy zostały wysłane Ci pocztą e-mail"),
                i("fae2c81a", "Popularne wpisy i historie"),
                i("f7b09bb4", "Aktualizacje informacji o oddziaływaniu Twoich wpisów"),
                i("d3978554", "Wiadomości o produkcie X i aktualizacjach funkcji"),
                i("bdccb81c", "Porady pomagające w pełni wykorzystać możliwości serwisu X"),
                i("c3d47fe6", "Rzeczy, które Cię ominęły od ostatniego logowania do serwisu X"),
                i("af8caf3e", "Wiadomości dotyczące produktów partnerskich i usług stron trzecich w serwisie X"),
                i("hc076ee4", "Udział w badaniach w serwisie X"),
                i("ddfe3776", "Polecane konta"),
                i("d17ba8c2", "Propozycje na podstawie kont, które obserwujesz od niedawna"),
                i("bcf50a1a", "Porady dotyczące produktów biznesowych w serwisie X"),
                i("fcad1e2e", "Codziennie"),
                i("h9e0dfde", "Cotygodniowe"),
                i("e26d98ac", "Okresowo"),
                i("h0c94842", "Bądź na bieżąco"),
                i("c460d332", "Gdy włączysz powiadomienia dotyczące wpisów z danego konta, otrzymasz powiadomienie za każdym razem, gdy ten użytkownik opublikuje wpis, rozpocznie transmisję na żywo lub będzie prowadzić Pokój."),
                i("a820d092", "Wczytywanie obserwowanych"),
                i("ha45c9e4", "Powiadomienia o wpisach"),
                i("bdbf8f4e", "Wpisz słowo lub wyrażenie"),
                i("h43e2ea8", "Wyciszone słowa"),
                i("da8c0440", "Wycisz powiadomienia pochodzące od"),
                i("defb4aaa", "Od wszystkich"),
                i("e7d47b00", "Od osób, których nie obserwujesz"),
                i("d9d6e10e", "Czas trwania"),
                i("gfa5008e", "Wydłuż czas wyciszenia"),
                i("c5595dfe", "Zmień czas wyciszenia"),
                i("he6804e0", "Do czasu wyłączenia wyciszenia słowa"),
                i("a268406c", "24 godziny"),
                i("fc638aa2", "7 dni"),
                i("b8971cfa", "30 dni"),
                i("cc7bedfc", "Możesz zmienić wybrany czas wyciszenia. Jeśli wcześniej wybrano opcję „Na zawsze”, wybrany teraz okres będzie naliczany od tego momentu."),
                i("d768049c", "Dodaj wyciszone słowo"),
                i("c6203da8", "Wyciszono opcje wyrazów"),
                i("e3f0d3db", function (e) {
                    return "Wyciszono: „" + e.keyword + "”";
                }),
                i("h5746cf7", function (e) {
                    return 'Zaktualizowano "' + e.keyword + '"';
                }),
                i("d2693eb8", "Upewnij się, że wyciszone wyrażenie ma nie więcej niż 140 znaki."),
                i("f8488024", "To dość popularne słowo i często występuje we wpisach, ale jeśli chcesz, możesz je wyciszyć."),
                i("deb4924d", "Dowiedz się więcej"),
                i("aa09e528", "Dodaj wyciszone wyrazy"),
                i("e506aa92", "Dodaj wyciszony wyraz lub wyrażenie"),
                i("cbd04965", function (e) {
                    return "Wyłącz wyciszenie: „" + e.keyword + "”";
                }),
                i("eb4e810a", "Wygasł"),
                i("cabeb6c2", "Na zawsze"),
                i("f9bce916", "Wycisz słowa"),
                i("gfe0ee3b", "Dowiedz się więcej"),
                i("ba4aaa9e", "Chcesz wyłączyć wyciszenie tego wyrażenia?"),
                i("f837ed7e", "To wyrażenie będzie niedozwolone w Twoich powiadomieniach i na Twojej osi czasu na Stronie Głównej."),
                i("a6194d10", "Wczytywanie wyciszonych kont"),
                i("bcf6ad9a", "Wpisy z wyciszonych przez Ciebie kont nie będą widoczne na Twojej osi czasu na stronie głównej. Konto możesz wyciszyć w profilu jego właściciela lub za pomocą opcji dostępnych we wpisie. "),
                i("b8e49590", "Wiadomości z wyciszonych kont będą filtrowane i zostaną przeniesione na dół listy zaproszeń do rozmowy."),
                i("ec202165", "Dowiedz się więcej"),
                i("gde6b425", function (e) {
                    return "Wyciszono użytkownika " + e.name;
                }),
                i("e308019b", function (e) {
                    return "Wyłączono wyciszenie użytkownika " + e.name;
                }),
                i("hfb77cf6", "Bezpieczeństwo"),
                i("f350f0c0", "Rekomendacje"),
                i("fd3369a2", "Wybierz języki, w jakich chcesz otrzymywać rekomendacje wpisów, osób i trendów."),
                i("hfc86556", "Wyciszono"),
                i("dae57a42", "Zezwalaj na wszystkie"),
                i("i7cbc154", "Zezwalaj na niektóre"),
                i("d623aecc", "Korzystaj z konta wspólnie z użytkownikami, którym udzielono uprawnień."),
                i("f3029d5c", "Gdy ta opcja jest włączona, inni użytkownicy mogą zapraszać Cię na swoje konta."),
                i("cd1305e8", "Inni użytkownicy mogą zapraszać mnie na swoje konta"),
                i("j339ef22", "Każdy może mnie zaprosić"),
                i("g4b0c2dc", "Tylko osoby, które mnie obserwują, mogą mnie zaprosić"),
                i("d9aef256", "Udzielone i nadane uprawnienia"),
                i("afb3ccf6", "Nie zezwalaj"),
                i("dfae5248", "Nie chcesz, aby inni użytkownicy mogli zapraszać Cię na swoje konta?"),
                i("b9c91524", "Nie będziesz więcej otrzymywać zaproszeń do przejęcia uprawnień do zarządzania cudzymi kontami. Wciąż masz dostęp do listy swoich uprawnień."),
                i("c349b958", "Zaproś użytkownika"),
                i("e177f72a", "Zaproś innych użytkowników do współtworzenia konta i zarządzania rolami. Członkowie mogą wysyłać prywatne wiadomości, publikować wpisy i tworzyć listy oraz je wyświetlać."),
                i("cd5c5e73", function (e) {
                    return "Możesz mieć tylko " + e.numDelegatesLabel + " delegacj" + n(e.numDelegates, "e", "i", "ę", "i");
                }),
                i("efee0a50", "Dodaj nową osobę do tego konta"),
                i("ja0a1aa6", "Dodaj współużytkownika do tego konta"),
                i("db4f623a", "Udziel tej osobie uprawnień"),
                i("be7350e3", function (e) {
                    return "Dodać użytkownika @" + e.screenName + " jako administratora?";
                }),
                i("b7aa7642", "Wysłano zaproszenie"),
                i("edbca224", "Wyślij zaproszenie"),
                i("f4834ca6", "Dodaj nową osobę"),
                i("cb04a824", "Współużytkownik"),
                i("d4b3abde", "Współużytkownicy mogą wysyłać prywatne wiadomości, publikować wpisy i tworzyć listy. Mogą też wyświetlać wszystkie prywatne wiadomości, wpisy i listy należące do tego konta."),
                i("b92e2700", "Administratorzy mają takie same uprawnienia jak współużytkownicy, a ponadto mogą zapraszać i usuwać współużytkowników oraz wyświetlać analizy wpisów."),
                i("hbbbf908", "Administratorzy mogą zapraszać innych współużytkowników do tego konta oraz wyświetlać analizy wpisów. Upewnij się, że przypisujesz tę rolę odpowiedniej osobie."),
                i("d8eda249", function (e) {
                    return "Gdy @" + e.screenName + " zaakceptuje zaproszenie, będzie on/ona mieć możliwość współużytkowania tego konta.";
                }),
                i("b5faf216", "Ten użytkownik nie przyjmuje zaproszeń dotyczących nadawania uprawnień do kont."),
                i("hcc3b4ce", "Ten użytkownik jest przez Ciebie zablokowany."),
                i("ace0f0a4", "Ten użytkownik ograniczył możliwość udzielania mu uprawnień."),
                i("c2e8f726", "Administratorzy"),
                i("fade0942", "Administratorzy mogą również zapraszać i usuwać współużytkowników konta oraz wyświetlać analizy wpisów."),
                i("b7d6e5d6", "Współtwórcy"),
                i("cd76a282", "Nie dodano jeszcze żadnych członków"),
                i("db25d796", "Zmień uprawnienia tego użytkownika"),
                i("e4133790", "Zaktualizowano uprawnienia"),
                i("a1a27c26", "Zmień uprawnienia"),
                i("fd7b1b1c", "Wróć"),
                i("ec67d021", function (e) {
                    return "@" + e.screenName + " ma teraz uprawnienia do obsługi tego konta.";
                }),
                i("h502484e", "Oczekujące zaproszenie"),
                i("a171ca7c", "Anuluj zaproszenie"),
                i("f68f079c", "Zmień uprawnienia"),
                i("b2794e9e", "Usuń z grupy"),
                i("gca83d6a", "Ten użytkownik nie będzie już administratorem tego konta."),
                i("b8cac21c", "Ten użytkownik nie będzie już współużytkownikiem tego konta."),
                i("hd67c2e8", "Anuluj zaproszenie"),
                i("f0bd8ca9", function (e) {
                    return "Usunąć użytkownika @" + e.screenName + "?";
                }),
                i("a33eba47", function (e) {
                    return "Anulować zaproszenie wysłane do użytkownika @" + e.screenName + "?";
                }),
                i("d472c9eb", function (e) {
                    return "Użytkownik @" + e.screenName + " został usunięty";
                }),
                i("h5951997", function (e) {
                    return "Anulowano zaproszenie wysłane do użytkownika @" + e.screenName;
                }),
                i("a44c6034", "Oczekujące zaproszenia"),
                i("e39bc936", "Jako członek możesz wysyłać prywatne wiadomości, publikować wpisy i tworzyć listy oraz je wyświetlać. Administratorzy mogą również zapraszać i usuwać współużytkowników konta oraz wyświetlać analizy wpisów."),
                i("h0d3bddc", "Dostęp administratora"),
                i("c54aafb0", "Dostęp współużytkownika"),
                i("idc35f32", "Nie udzielono Ci uprawnień do współtworzenia żadnego konta"),
                i("fab787b4", "Opuść konto"),
                i("bfbe9620", "Wyświetl użytkowników"),
                i("d52a2b36", "Nie będziesz już administratorem tego konta."),
                i("df515932", "Nie będziesz już współużytkownikiem tego konta."),
                i("cd00ea21", function (e) {
                    return "Chcesz opuścić konto @" + e.screenName + "?";
                }),
                i("efa88ab1", function (e) {
                    return "Opuściłeś/aś @" + e.screenName;
                }),
                i("c6dae164", "Akceptuj zaproszenie"),
                i("f8376170", "Odrzuć zaproszenie"),
                i("a68c45e4", "Odrzuć"),
                i("aa35b48d", function (e) {
                    return "Odrzucić zaproszenie od użytkownika @" + e.screenName + "?";
                }),
                i("ed2a4b05", function (e) {
                    return "Odrzuciłeś/aś zaproszenie na konto @" + e.screenName;
                }),
                i("e73f9635", function (e) {
                    return "Zaakceptowałeś/aś zaproszenie na konto @" + e.screenName;
                }),
                i("d2da668c", "Nadaj uprawnienia"),
                i("ddf27b8e", "Zaproś współtwórcę"),
                i("jba63182", "Wyświetl role członków związanych z tym kontem. Członkowie mogą wysyłać prywatne wiadomości, publikować wpisy i tworzyć listy oraz je wyświetlać."),
                i("af59527e", "Wyświetl role członków i zaproś współużytkowników do konta. Członkowie mogą wysyłać prywatne wiadomości, publikować wpisy i tworzyć listy oraz je wyświetlać."),
                i("eafcc76a", "Ta aplikacja ma dostęp do następujących zasobów..."),
                i("j3998a16", "Uprawnienia aplikacji..."),
                i("a6845663", function (e) {
                    return "Te uprawnienia aplikacji anulowano dnia " + e.date;
                }),
                i("b2347f7c", "Wczytywanie danych aplikacji"),
                i("e1fda16e", "Ta aplikacja nie jest połączona"),
                i("b8f3ed46", "Kiedy połączysz aplikację zewnętrzną ze swoim kontem w serwisie X, udzielisz tej aplikacji dostępu do swojego konta."),
                i("gb8d09ba", "Ma dostęp do Twojego adresu e-mail"),
                i("g6dc09a0", "Uprawnienia"),
                i("a6e6e898", "Tylko do odczytu"),
                i("cde3b9ae", "Czytanie i pisanie"),
                i("g0d7813a", "Czytanie, pisanie i wiadomości prywatne"),
                i("c9b35b9e", "Uzyskiwanie dostępu do Twoich danych reklamowych."),
                i("e0191264", "Uzyskaj dostęp do swoich danych reklamowych, twórz je i nimi zarządzaj."),
                i("b73e1e8a", "Dowiedz się, w jaki sposób cofnąć dostęp"),
                i("c174e46e", "Pokaż mniej"),
                i("a39075ff", function (e) {
                    return "I jeszcze " + e.n;
                }),
                i("da6cdba8", "Anuluj uprawnienia aplikacji"),
                i("ef1d3dcc", "Zgłoś aplikację"),
                i("d64e29c6", "Wyloguj się na tym urządzeniu"),
                i("idfa01cc", "Chcesz wylogować się na tym urządzeniu?"),
                i("f400075e", "Spowoduje to zakończenie Twojej aktywnej sesji w serwisie X. Aby rozpocząć nową sesję, zaloguj się ponownie."),
                i("e04ba39c", "Data i czas"),
                i("eed75824", "Zakończono aktywną sesję w serwisie X."),
                i("ddcd3d26", "Wczytywanie danych sesji"),
                i("d2f0f3fe", "Nie udało się wyszukać tej sesji"),
                i("ga05517a", "Nie utworzyłeś/aś jeszcze żadnych zgłoszeń"),
                i("ea1715c0", "Tweety dodane do Zakładek pojawią się tutaj."),
                i("b70a2cde", "Do wykrywania takich treści stosujemy zautomatyzowane technologie, które mogą czasem rozpoznawać treści w błędny sposób."),
                i("ee320a07", "zasadach dotyczących nieodpowiednich multimediów"),
                i("ffeb836a", "Ustawienia są niedostępne"),
                i("f2fb9746", "Te ustawienia są niedostępne, ponieważ dotyczą plików cookie, które nie są kluczowe. Nie mamy na nie Twojej zgody, więc wykorzystujemy tylko pliki cookie, które zbierają niezbędne dane z Twojego urządzenia."),
                i("aa4342be", "Przemoc"),
                i("jfec3aa0", "Treści dla dorosłych"),
                i("j6bacd6a", "Ukrywaj multimedia oznaczone jako przedstawiające przemoc, chyba że chcesz je wyświetlić. W aplikacji serwisu X dla systemu iOS te multimedia nie będą w ogóle wyświetlane."),
                i("a73e66a8", "Ukrywaj multimedia oznaczone jako zawierające treści dla dorosłych, chyba że chcesz je wyświetlić. W aplikacji serwisu X dla systemu iOS te multimedia nie będą w ogóle wyświetlane."),
                i("fef1b8dc", "Ukrywaj multimedia oznaczone jako nieodpowiednie, chyba że chcesz je wyświetlić. W aplikacji serwisu X dla systemu iOS te multimedia nie będą w ogóle wyświetlane."),
                i("d0a5a1c0", "Ostrzegaj"),
                i("ga197e26", "Zawsze pokazuj"),
                i("eb723386", "Nigdy nie pokazuj"),
                i("ea31c622", "Dotyczy to multimediów przedstawiających sceny zgonu, przemoc, poważne zranienia lub zabiegi medyczne pokazane w szczegółowy sposób."),
                i("e40985c4", "Dotyczy to treści o charakterze pornograficznym lub mających na celu wywołanie pobudzenia seksualnego utworzonych za obopólnym przyzwoleniem stron."),
                i("h7e0672b", "ustawieniach dotyczących nieodpowiednich multimediów"),
                i("de9f111a", "Zarządzaj swoją obecną subskrypcją"),
                i("d5839f9e", "Zapoznaj się z warunkami lub zarządzaj swoją subskrypcją z poziomu konta Stripe."),
                i("a840c22c", "Zarządzaj aktualną subskrypcją usługi Premium"),
                i("e31456f8", "Zmień poziom"),
                i("a7c4ecea", "Ciesz się brakiem reklam na osi czasu Dla Ciebie, odblokuj wszystkie funkcje i korzystaj z największego wzmocnienia odpowiedzi."),
                i("h15cc518", "Przejrzyj opcje poziomów i wybierz plan miesięczny lub roczny."),
                i("ce70c590", "Zarządzaj odznakami powiązań"),
                i("a49e1b2a", "Sortuj powiązania"),
                i("e2daf93c", "Pierwsza odznaka będzie widoczna we wszystkich wpisach."),
                i("ab8089ea", "Zmień kolejność"),
                i("e0221c42", "Przyjemność czytania w serwisie X i poza nim."),
                i("adcaa214", "Zobacz artykuły najczęściej udostępniane przez osoby, które obserwujesz."),
                i("b62d6e4c", "Czytnik"),
                i("acf63cd2", "Wybierz rozmiar czcionki, z której chcesz korzystać podczas czytania wątków. Włącz funkcję czytnika, wybierając przycisk książki w dowolnym wpisie w wątku."),
                i("e5fff0c8", "Twoja subskrypcja jest aktywna"),
                i("ac057b4e", "Aby anulować dodatkową subskrypcję ułatwiającą interakcje w serwisie X, skontaktuj się z pomocą techniczną"),
                i("ib8ebf3b", function (e) {
                    return "Wygląda na to, że kupiłeś/aś subskrypcję na urządzenie " + e.mobilePlatform + ". Musisz zmienić lub anulować tę subskrypcję.";
                }),
                i("i8132774", "Bonusowe treści dla Twoich najbardziej zaangażowanych obserwujących"),
                i("a1222584", "Zarabiaj bezpośrednio na tworzonych przez Ciebie treściach"),
                i("df837dac", "Szacowany przychód / próg wypłaty"),
                i("df29646e", "Próg wypłaty"),
                i("b0ac642a", "Może minąć do 90 dni, zanim wypłacone środki pojawią się na Twoim koncie."),
                i("c747df1c", "Skonfiguruj metody płatności"),
                i("ac814a76", "Nie skonfigurowano jeszcze metody płatności."),
                i("f139168e", "Panel zarobków"),
                i("ee0510c2", "Historia wypłat"),
                i("c9b82b4c", "Zaakceptowano wniosek ·Dostosuj ustawienia subskrypcji"),
                i("ibb5e1c8", "Wniosek został odrzucony"),
                i("b255df58", "Wniosek został złożony · Oczekuje na rozpatrzenie"),
                i("b3f834c8", "Wniosek oczekuje"),
                i("i14be2c6", "Szacowany przychód"),
                i("fd74390a", "Tożsamość twórcy treści została zweryfikowana"),
                i("e8dc82e2", "Aktywne programy"),
                i("c12c5eb6", "Dostępne programy"),
                i("j53f5eb0", "Uprawnieni twórcy treści mogą zarejestrować się, aby korzystać z miesięcznych subskrypcji i otrzymywać udział w dochodach z reklam."),
                i("e9c1273a", "Uprawnieni twórcy treści mogą zarejestrować się, aby korzystać z miesięcznych subskrypcji i uczestniczyć w programie Udział w dochodach dla twórców treści."),
                i("jd176c82", "Wypłaty nie są obsługiwane w Twoim regionie"),
                i("d6ff74ca", "Niestety, nasz dostawca płatności nie obsługuje jeszcze wypłat w Twoim kraju, przez co niektóre programy monetyzacji są niedostępne."),
                i("e89cdac0", "Zarządzaj kontem wypłat"),
                i("dd7a54b4", "Skonfiguruj swoje konto Stripe"),
                i("jff3ab68", "Weryfikacja tożsamości"),
                i("j2876824", "Weryfikuj tożsamość"),
                i("ebd06fb0", "Dokument tożsamości został przesłany"),
                i("f65b960c", "Analizujemy Twój dokument tożsamości wydany przez organ państwowy w związku z uczestnictwem w programie Twórca treści."),
                i("i4a1e936", "Aby otrzymać wypłatę, musisz połączyć swoje konto Stripe lub utworzyć nowe"),
                i("f5931b6a", "Weryfikacja tożsamości jest warunkiem uczestnictwa w programie Twórca treści. Jeśli przesłano już dokument tożsamości w związku z uczestnictwem w programie Twórca treści, nie trzeba przesyłać go ponownie."),
                i("c8798a95", "tej stronie"),
                i("d809ac49", "tej stronie"),
                i("bbe09d38", "Aplikacja została zaakceptowana · Oczekiwanie na konfigurację w sklepach z aplikacjami"),
                i("efbc5066", "Oczekiwanie na weryfikację za pomocą dokumentu tożsamości"),
                i("hc7631da", "Konfiguracja konta Stripe nie została dokończona"),
                i("h72d71a2", "Masz uprawnienie"),
                i("e12b0b16", "Nie masz jeszcze uprawnienia"),
                i("a1e57106", "Uzupełnij brakujące informacje"),
                i("i51b4e22", "Odrzucono"),
                i("h5bd7160", "To konto nie jest uprawnione do weryfikacji za pomocą dokumentu tożsamości."),
                i("e32040c4", "Aby otrzymywać wypłaty, musisz wykonać weryfikację za pomocą dokumentu tożsamości."),
                i("j8769b42", "Analizujemy Twój dokument tożsamości wydany przez organ państwowy."),
                i("be955554", "Udział w dochodach dla twórców treści"),
                i("b03a3d62", "Udział w dochodach z reklam"),
                i("cbbe29c2", "Zbliżasz się do wypłat"),
                i("g97a2d6c", "Dowiedz się więcej"),
                i("f30774ea", "Tutaj znajdziesz więcej informacji o naszych programach monetyzacji oraz związanych z nimi zasadach."),
                i("aea0b11a", "Zarabiaj na swojej aktywności w serwisie X, umożliwiając innym osobom subskrybowanie treści, które utworzysz w ciągu miesiąca."),
                i("bce47f48", "Zarabiaj na interakcjach z Twoimi wpisami w serwisie X."),
                i("h7a68080", "Zarabiaj na reklamach wyświetlanych w odpowiedziach na Twoje wpisy."),
                i("eefd091e", "Wymagana weryfikacja tożsamości"),
                i("cd616a5a", "Uczestnictwo w programie Twórca treści wymaga weryfikacji tożsamości."),
                i("cce8c40a", "Zweryfikuj za pomocą dokumentu tożsamości"),
                i("ja73ebac", "Dochód"),
                i("h16eeb42", "Zarządzaj"),
                i("bc43a32e", "Ostatnia aktywność"),
                i("i4c3b046", "Nie masz teraz nowych monet."),
                i("ca516a66", "Zobacz całą aktywność"),
                i("ee9ea930", "Diamenty"),
                i("cf3b535e", "Diamenty powstają z monet otrzymywanych za nagradzane wpisy. Środki zarabiane na diamentach są dodawane do Twoich szacowanych zarobków."),
                i("fbb7764b", function (e) {
                    return e.count + " monet" + n(e.count, "y", "", "a", "");
                }),
                i("e70a07b2", "Nieznany użytkownik"),
                i("c76972f0", "Od ostatniej wypłaty"),
                i("c219a552", "Wszystkie okresy"),
                i("f3ce76c0", "Nadal potrzebujesz pomocy?"),
                i("i8982e7e", "W razie pytań zajrzyj do Centrum Pomocy lub skontaktuj się z nami."),
                i("fbbfe8aa", "Dezaktywuj Monety"),
                i("e4f29140", "Wybierając dezaktywację, zostaniesz usunięty/a z programu Monety i nie będziesz mieć już możliwości otrzymywania monet."),
                i("e58e85d2", "Przejdź dalej, aby dezaktywować"),
                i("be8e87b4", "Dezaktywować Monety?"),
                i("bee26fa8", "Tak, dezaktywuj"),
                i("f0145c9a", "Dezaktywowano funkcję Monety"),
                i("a22f6808", "Cała aktywność"),
                i("g1b8020c", "Ostatnie 30 dni"),
                i("jb13b840", "Od początku"),
                i("b4f24360", "W ciągu ostatnich 30 dni nie otrzymałeś/aś żadnych monet."),
                i("d59dbf8a", "Skrót"),
                i("g652fc4c", "W tym miesiącu nie dokonano żadnych wypłat."),
                i("d55e017a", "W tym miesiącu"),
                i("f883322d", function (e) {
                    return " Identyfikator transakcji " + e.transactionId;
                }),
                i("d978f43e", "Nowe subskrypcje"),
                i("d113fc10", "Nie masz obecnie nowych subskrypcji."),
                i("h7a41c02", "Odnowione subskrypcje"),
                i("eedf2eaa", "Brak odnowionych subskrypcji."),
                i("d93308d8", "Zobacz wszystkie transakcje"),
                i("a23e724a", "To konto jest niedostępne."),
                i("a384fda0", "Podsumowanie subskrypcji"),
                i("i4313618", "Przedstaw się i powiedz o tym, na jakie korzyści mogą liczyć Twoi superobserwujący."),
                i("c0348964", "Wprowadzenie"),
                i("g522fd30", "Korzyści dla subskrybentów"),
                i("e85471c6", "Odznaka Subskrybuje"),
                i("fd75ca92", "Otrzymasz publiczną odznakę Subskrybuje, która ułatwi Ci otrzymywanie powiadomień, czatowanie i nawiązywanie połączeń."),
                i("ia9c37c4", "Ceny"),
                i("f5be83b2", "Dołącz do Grupy dyskusyjnej"),
                i("e4ee8c6a", "Dziel się pomysłami, czerp inspiracje i nawiązuj kontakty z innymi twórcami treści w Grupie dyskusyjnej dotyczącej opcji Subskrypcje."),
                i("i3a90dee", "Dezaktywuj opcję Subskrypcje"),
                i("e261e6e6", "Po dezaktywacji zostaniesz usunięty/a z programu Subskrypcje i stracisz wszystkich swoich subskrybentów."),
                i("ca5ca5ee", "Zobacz podgląd"),
                i("a329ce88", "Dodaj opis…"),
                i("f0c99eff", function (e) {
                    return "- @" + e.screenName;
                }),
                i("g40b2b30", "Włącz podglądy wpisów"),
                i("c1521804", "Podglądy wpisów Twoich subskrybentów będą widoczne dla osób, które nie są subskrybentami."),
                i("jd0f1ac0", "Dezaktywować opcję Subskrypcje?"),
                i("c6c27fc8", "Dezaktywacja opcji Subskrypcje jest nieodwracalna. Zostaniesz usunięty/a z programu. Aby znów korzystać z tej opcji, będziesz musiał/a ponownie złożyć wniosek o dodanie do programu."),
                i("f82a23ec", "Opcja Subskrypcje została zdezaktywowana"),
                i("a4c6e458", "Cena Twojej miesięcznej subskrypcji jest następująca:"),
                i("be54a313", function (e) {
                    return e.price + " / mies.";
                }),
                i("hadd463a", "Zażądaj zmiany ceny"),
                i("b0728b5c", "Anuluj zmianę ceny"),
                i("aea9f79c", "Trwa oczekiwanie na zmianę ceny na:"),
                i("c701e5cc", "Wprowadzone zmiany nie zostaną zapisane."),
                i("a649778c", "Edytuj dalej"),
                i("d1a683b8", "Twórcy treści oferujący opcję Subskrypcje"),
                i("iba08a94", "Jak to wygląda?"),
                i("a5f55bfa", "Te informacje widzą potencjalni subskrybenci, którzy wchodzą na Twoją stronę. W dowolnym momencie możesz tu wrócić i zaktualizować swoje opisy."),
                i("b600eb88", "Znajdź swoich ludzi i daj się poznać"),
                i("da48ebf6", "Subskrybuj i zyskaj dostęp do bonusowych treści"),
                i("f324fb6c", "Subskrypcja"),
                i("c654a3aa", "Ten wpis jest widoczny tylko dla subskrybentów"),
                i("d409ce3c", "Wspieraj swoje ulubione osoby w serwisie X w zamian za bonusowe treści i inne dodatki."),
                i("a4ed9072", "Dodaj wstęp…"),
                i("af5b098e", "Zalety opcji Subskrypcje"),
                i("gf32cca2", "Opowiedz o tym, co chcesz zaoferować innym"),
                i("j8ba99b4", "Wyjaśnij użytkownikom, co zyskają, opłacając comiesięczną subskrypcję. Opisz krótko bonusowe treści, które chcesz im zaoferować."),
                i("j679dcda", "Zobacz przykłady"),
                i("j325331a", "Przedstaw się"),
                i("e18e8da8", "Zrób dobre pierwsze wrażenie na swoich przyszłych subskrybentach – napisz kilka słów wstępu."),
                i("fce14f56", "Nowa cena"),
                i("b0c58272", "Wybierz nową cenę miesięczną. Przetwarzanie zmian cen trwa od 3 do 7 dni roboczych. Zwiększenie ceny może spowodować, że aktualni subskrybenci będą musieli ponownie wybrać opcję zakupu subskrypcji."),
                i("d5737f0e", "Miesięczna subskrypcja"),
                i("edc014fb", "Dowiedz się więcej"),
                i("h810143c", "Szczegóły"),
                i("ga57b610", "Data zakupu"),
                i("h3b68828", "Rodzaj zakupu"),
                i("cc2aa67a", "Platforma"),
                i("b313bb24", "Płatność"),
                i("e5188502", "Wszystkie transakcje sprzedaży są wiążące"),
                i("bf364d62", "Wszystkie transakcje"),
                i("ed3efef0", "Nie masz żadnych nowych subskrypcji z ostatnich 30 dni."),
                i("b5f9ec14", "Nie masz żadnych odnowionych subskrypcji z ostatnich 30 dni."),
                i("d8eed490", "Zarządzaj wyglądem swojego widocznego publicznie profilu."),
                i("e26dbcd0", "Ukryj swoje subskrypcje twórców treści"),
                i("aea7dda8", "Lista subskrypcji twórców treści w Twoim profilu będzie widoczna tylko dla Ciebie."),
                i("j3d2cfc4", "Udostępniaj obserwującym informacje o Pokojach, których jesteś słuchaczem"),
                i("d9588ae6", "Pamiętaj, że nawet jeśli wyłączysz to ustawienie, Twoja obecność w Pokoju będzie publiczna. Twoi obserwujący zawsze mogą sprawdzić, jakie Pokoje prowadzisz lub współprowadzisz oraz w jakich Pokojach zabierasz głos."),
                i("i84c5de8", "Aplikacje kreatora wkrótce będą dostępne"),
                i("b8922f7e", "Zajrzyj tu za jakiś czas, aby sprawdzić, czy możesz już złożyć wniosek o korzystanie z opcji Subskrypcje."),
                i("ad588be6", "Masz uprawnienie!"),
                i("f6443bd2", "Mamy dla Ciebie dobrą wiadomość – możesz teraz dołączyć do programu Subskrypcje. Zaczynamy?"),
                i("a3a20a10", "Sprawdź ponownie za jakiś czas"),
                i("b8d29e4a", "Niestety nie możesz teraz dołączyć do programu Subskrypcje."),
                i("d92c1d0a", "Przejdź do wniosku"),
                i("fde27650", "Warunki dotyczące opcji Subskrypcje"),
                i("c5f89b06", "Uzyskaj weryfikację, subskrybując wersję Premium"),
                i("ff9f4475", function (e) {
                    return e.minFollowersCount + " zweryfikowanych obserwujących";
                }),
                i("b747ce3a", "Aktywne w ciągu ostatnich 30 dni"),
                i("c27f57ac", "Musisz mieć skończone 18 lat"),
                i("h63d2973", function (e) {
                    return "Organiczne wyświetlenia w ciągu ostatnich 3 miesięcy: " + e.count;
                }),
                i("ef606fca", "Płatne subskrypcje dla najbardziej zaangażowanych odbiorców"),
                i("e533715e", "Sprawdź, czy spełniasz kryteria"),
                i("d8671da2", "Zarabiaj w serwisie X"),
                i("d126a504", "Zaoferuj Twoim obserwującym coś ekstra i każdego miesiąca zyskaj dodatkowe wpływy. "),
                i("d08d0bb2", "Bonusowe treści"),
                i("ef29d2c2", "Dziel się swoimi przemyśleniami, pomysłami i opiniami za pomocą dodatkowych wpisów i odpowiedzi osobistych."),
                i("if12af7c", "Ustawienia subskrypcji"),
                i("cc4c1a14", "Cena"),
                i("e1453e45", "Dowiedz się więcej"),
                i("aa7e35ee", "Twoje konto nie zostało wybrane"),
                i("c984cc62", "Tym razem Twoje konto nie zostało wybrane. Trzymaj jednak rękę na pulsie – wkrótce pojawi się więcej możliwości dołączenia do programu."),
                i("gd115e64", "Złóż wniosek o korzystanie z opcji Subskrypcje"),
                i("a9f08d5c", "Twoje odpowiedzi na poniższe pytania będą przez nas analizowane, ale nie będą widoczne w Twoim profilu."),
                i("c3f8d650", "Opisz swoje treści"),
                i("j89dd344", "Podaj przykład treści, które chcesz oferować w ramach swojej subskrypcji. Im dokładniejszy będzie ten przykład, tym lepiej."),
                i("d19cc490", "Dodaj przykładowe treści"),
                i("c737c1b2", "Opisz nam swoje doświadczenie"),
                i("f98e5fd4", "Tworzysz płatne treści na innych platformach? Dlaczego uważasz, że użytkownicy będą subskrybować?"),
                i("c41b01be", "Dodaj krótką prezentację"),
                i("e2aad0fe", "Nie będę publikować treści drastycznych ani przeznaczonych tylko dla pełnoletnich subskrybentów"),
                i("d1b983ef", function (e) {
                    return "Musi zawierać co najmniej następującą liczbę znaków: " + e.count;
                }),
                i("d3d6c52c", "Twój wniosek został złożony"),
                i("cb27c0ba", "Twoje ceny zostały potwierdzone. Twój wniosek został przyjęty – gdy zostanie on zaakceptowany, niezwłocznie poinformujemy Cię o tym."),
                i("j274e6aa", "Jesteś na liście oczekujących"),
                i("j006be54", "Nasza grupa testowa programu Subskrypcje szybko się zapełniła, ale dodaliśmy Cię do listy rezerwowej. Poinformujemy Cię, gdy dostępnych będzie więcej miejsc."),
                i("d5cb1114", "Zacznij korzystać z opcji Subskrypcje"),
                i("j2f622ec", "Wybraliśmy Cię do grupy testowej. Już teraz skonfiguruj szczegóły swojej subskrypcji, a my powiadomimy Cię, gdy będzie ona aktywna."),
                i("e2cd7000", "Prawie koniec..."),
                i("b3629b92", "Jeszcze tylko kilka kroków, które pozwolą nam sfinalizować konfigurację ustawień subskrypcji."),
                i("f4619a62", "Akceptuj i przejdź dalej"),
                i("c5625f84", "Opisz zalety korzystania z opcji Subskrypcje"),
                i("c7289544", "Określ cenę subskrypcji"),
                i("aaf68c58", "Potwierdź metody płatności"),
                i("b8a69fa0", "Warunki dotyczące opcjiSubskrypcje"),
                i("ad4a92a2", "Etykieta"),
                i("d5aa8de0", "Przydziel swoim subskrybentom etykiety"),
                i("j0bbda92", "Nie trzeba tu nic zmieniać ani edytować. Wszyscy Twoi subskrybenci automatycznie otrzymają publiczne etykiety."),
                i("e18b7a72", "Sprawdź"),
                i("be76dc34", "Dodaj opis"),
                i("ef5406e4", "Dodaj wstęp"),
                i("ea8a3d2e", "Ustawienia cen"),
                i("f77bb179", function (e) {
                    return "Potwierdź swój wybór: " + e.price;
                }),
                i("g2a6f160", "Sprawdź dokładnie wybraną cenę subskrypcji i potwierdź ją. Nie będzie można jej później zmienić."),
                i("g767d1c9", "Ważne: ceny subskrypcji nie będzie można zmienić"),
                i("df057690", "Ustal cenę subskrypcji"),
                i("g5923869", function (e) {
                    return e.price + "/miesiąc";
                }),
                i("f025ab3a", "Rozszerzanie grupy odbiorców"),
                i("c962df0e", "Nieregularne posty i interakcje z subskrybentami"),
                i("ib075804", "Poszerzanie zasięgów i zwiększanie zysków"),
                i("fc04f3a6", "Moderowanie postów i interakcji z subskrybentami"),
                i("c246656e", "Ekskluzywne grono odbiorców"),
                i("h0c5405c", "Regularne posty i interakcje z subskrybentami"),
                i("f2d2153d", function (e) {
                    return "Większość twórców pobiera opłatę w wysokości " + e.price + ", ale możesz ustalić dowolną cenę";
                }),
                i("f1cb36b8", "Ustawienia dotyczące wypłaty"),
                i("e20f6662", "Gotowe!"),
                i("g88e146c", "Your account is pending"),
                i("dfe973a6", "dzięki for providing your payout details. You’ll receive a notifikotion with next steps as soon as Stripe has reviewed your information."),
                i("ja884230", "Skonfiguruj metody płatności"),
                i("a3f6a966", "Połącz konto Stripe"),
                i("cb031e44", "Nastąpi przejście do witryny usługi Stripe, co umożliwi Ci połączenie konta. Jeśli masz już konto usługi Stripe, którego chcesz użyć, wprowadź adres e-mail skojarzony z tym kontem, gdy usługa Stripe wyświetli monit o podanie adresu e-mail. Uwaga: Twój adres e-mail używany w usłudze Stripe musi być inny niż używany w serwisie X."),
                i("ebfb897c", "Przykłady"),
                i("dc4feb1a", "Nie masz pomysłu?"),
                i("h9b9d486", "Rodzaj treści, jakie oferujesz swoim subskrybentom, zależy wyłącznie od Ciebie. Poniżej znajdziesz kilka przykładów."),
                i("ic130fd6", "Zobaczysz, co dzieje się za kulisami i zyskasz wcześniejszy dostęp do moich książek oraz innych projektów, a raz w miesiącu możesz zadać mi dowolne pytanie."),
                i("dd913e24", "Zyskasz dostęp do moich szczerych komentarzy, sekretnych myśli i dodatkowych treści dla wybranych."),
                i("b737ee66", "Przygotuj się na ekskluzywne treści dla wtajemniczonych, w tym głosowania, filmy i wyjątkowe oferty tylko dla subskrybentów."),
                i("a0bb2076", "Wstęp powinien być krótki i przyjemny – szczegóły dotyczące subskrypcji przedstawisz później. Poniżej znajdziesz kilka przykładów, które mogą Cię zainspirować."),
                i("fe076612", "Witaj na mojej stronie dla subskrybentów. Miło mi, że tu jesteś. Dzięki Tobie mogę robić to, co kocham."),
                i("g7f66daa", "Co tam? Dzięki za zainteresowanie moją subskrypcją. Myślę, że moje treści mogą Ci się spodobać."),
                i("hbe4f99e", "Cześć! Chcę Cię lepiej poznać i podzielić się z Tobą tajnymi treściami dla wybranych :)"),
                i("fb278c82", "Co widać na tym podglądzie?"),
                i("j6cab6ec", "Użytkownicy, którzy jeszcze nie są Twoimi subskrybentami, widzą tę stronę. Możesz edytować swój opis dowolną liczbę razy – aż będziesz z niego zadowolony/a."),
                i("i22beaa4", "Udostępnianie danych"),
                i("e110a46c", "Usuń historię rozmów"),
                i("ebc4fda0", "Zamierzasz usunąć historię swoich rozmów z Grokiem. Jeśli to zrobisz, nie będziesz już mieć możliwości uzyskania dostępu do tych rozmów."),
                i("c90fe716", "Czy chcesz usunąć swoje rozmowy?"),
                i("a8d516a4", "Firma X może udostępniać firmie xAI Twoje publiczne dane z serwisu X, a także interakcje z użytkownikami oraz dane wejściowe i wyniki uzyskane za pomocą Groka w serwisie X w celu szkolenia i dostrajania działania Groka oraz innych modeli AI opracowanych przez firmę xAI. Pomoże nam to w ciągłym ulepszaniu Twojego środowiska użytkownika."),
                i("a127886c", "Zezwalaj Grokowi na zapamiętywanie historii rozmów z Tobą"),
                i("f49b39b8", "Zezwalaj Grokowi na zapamiętywanie szczegółów z poprzednich rozmów z Tobą. Możesz usunąć pojedyncze rozmowy, aby skojarzone z nimi szczegóły zostały zapomniane."),
                i("b7de9ad2", "Zezwalaj na personalizację działania Groka w serwisie X"),
                i("ed141096", "Zezwalaj na używanie swoich danych z serwisu X oraz interakcji, danych wejściowych i wyników uzyskanych za pomocą Groka na potrzeby personalizacji działania Groka. Firma X może udostępniać firmie xAI Twoje dane z serwisu X, a także interakcje z użytkownikami oraz dane wejściowe i wyniki uzyskane za pomocą Groka w celu personalizowania działania Groka oraz innych modeli AI opracowanych przez firmę xAI. Pomoże nam to w ciągłym ulepszaniu Twojego środowiska użytkownika. "),
                i("ecdbece0", "Dołączyłeś/aś do programu Monety."),
                i("db3f0bbe", "Pomagamy twórcom zarabiać na tworzonych przez nich treściach."),
                i("a1f40cf8", "Zgoda!"),
                i("d604fb32", "Warunki programu reklamowego dla twórców treści"),
                i("d520d188", "Otrzymuj monety"),
                i("ea770766", "Monety to wirtualna waluta, za pomocą której możesz nagradzać najlepsze wpisy. Zbierane przez Ciebie monety zmieniają się w diamenty, które możesz później wypłacić w formie gotówki."),
                i("d27f5ac6", "Pasywny dochód"),
                i("h1d66df0", "Zbieraj monety, udostępniając w serwisie X treści o wysokiej jakości. Twoi obserwujący mogą teraz nagradzać Cię za pomocą monet."),
                i("f85fb0a2", "Nawiąż relację z odbiorcami"),
                i("d1433e24", "Za pomocą monet Twoi fani mogą nagradzać tworzone przez Ciebie treści. Funkcja ta pozwala Ci nawiązać bliższą relację z Twoimi fanami i obserwującymi."),
                i("e6ba42de", "Udział w dochodach z reklam"),
                i("ebc16756", "Udział w dochodach dla twórców treści"),
                i("da4cd6fa", "Niestety, nie masz uprawnienia do uczestnictwa w programie Udział w dochodach z reklam. Aby móc w nim uczestniczyć, musisz spełnić poniższe wymagania:"),
                i("b2961492", "Niestety, nie masz uprawnienia do uczestnictwa w programie Udział w dochodach dla twórców treści. Aby móc w nim uczestniczyć, musisz spełnić poniższe wymagania:"),
                i("d3789528", "Informacje o programie Udział w dochodach z reklam"),
                i("aa0ff456", "Informacje o programie Udział w dochodach dla twórców treści"),
                i("bf214f48", "OK"),
                i("b2b4d592", "Zasubskrybuj usługę Premium lub weź udział w programie Zweryfikowane Organizacje"),
                i("fbb03ba6", "500 obserwujących Premium"),
                i("hb4c5169", function (e) {
                    return "Twoje wpisy muszą zostać wyświetlone co najmniej " + e.impression_number + " mln razy w ciągu 3 kolejnych miesięcy";
                }),
                i("f91685ba", "Automatycznie uzyskasz uprawnienie do otrzymywania płatności za swoje wpisy!"),
                i("a9f0e0fa", "Jako subskrybent usługi Premium lub uczestnik programu Zweryfikowane Organizacje automatycznie uzyskujesz uprawnienie do udziału w dochodach z reklam. Twoja wypłata będzie zależna od liczby zweryfikowanych wyświetleń reklam widocznych w odpowiedziach na Twoje wpisy."),
                i("c694e3e4", "Posiadasz subskrypcję Premium lub Zweryfikowane Organizacje, co automatycznie uprawnia Cię do uczestnictwa w programie Udział w dochodach dla twórców treści."),
                i("acd1a1be", "Skonfiguruj teraz szczegóły wypłat, aby otrzymywać wypłaty w przyszłości."),
                i("f7e11f70", "Dołącz i zweryfikuj za pomocą dokumentu tożsamości"),
                i("c8169274", "Wystąpił problem podczas zapisywania Twojego wniosku. Spróbuj ponownie później."),
                i("c3f93665", "Postanowienia dotyczące programu Udział w dochodach dla twórców treści"),
                i("a249ce04", "Postanowienia dotyczące programu Udział w dochodach z reklam"),
                i("d085a144", "Panel danych zarobków twórcy treści"),
                i("a5204850", "Łączny dochód"),
                i("ada650cf", function (e) {
                    return "Okres płatności: " + e.fromDate + " – " + e.toDate;
                }),
                i("aa732c0a", "Udział w dochodach z reklam przed filmami"),
                i("g88c1108", "Informacje o programie Udział w dochodach z reklam przed filmami"),
                i("d4bb7e9c", "Postanowienia dotyczące programu Udział w dochodach z reklam przed filmami"),
                i("dc535dbe", "Złóż wniosek o dołączenie do programu Udział w dochodach z reklam wyświetlanych przed filmami, aby zarabiać więcej na swoich treściach publikowanych w serwisie X."),
                i("eb6d9270", "Otrzymuj zapłatę za swoje treści"),
                i("a778472e", "Szczegóły:"),
                i("bde8446e", "Wybierz pozycję „Zaakceptuj i prześlij”, aby złożyć wniosek o dołączenie do programu Udział w dochodach z reklam."),
                i("a415fd3a", "Zaakceptuj i prześlij"),
                i("fbba9725", "naszymi zasadami"),
                i("f3dd8c4a", "postanowieniami dotyczącymi programu Udział w dochodach z reklam oraz standardami monetyzacji dla twórców treści"),
                i("hd885ae0", "Zobacz swój wkład"),
                i("je4ccd3a", "Artykuły bez reklam – Centrum Pomocy"),
                i("i6cb493e", "Określ sposób wyświetlania Twoich powiązań"),
                i("e4fde082", "Ustaw minutnik, aby wycofać wysłane wpisy i wybierz rodzaje wpisów, które chcesz wycofywać."),
                i("dcfc6540", "Oryginalne wpisy"),
                i("be077e8c", "Wątki"),
                i("f3429f2c", "Głosowania"),
                i("i647ba8a", "Czas na wycofanie wpisu"),
                i("d195528e", "Wybierz typy wpisów, które chcesz wycofać, zanim staną się widoczne publicznie, oraz określ długość czasu na wycofanie."),
                i("bcf3a9e6", "Zarządzaj ustawieniami, które pozwolą ograniczyć liczbę niepożądanych odpowiedzi."),
                i("c048fd3a", "Ukrywaj odpowiedzi, które mogą zawierać niepożądane treści"),
                i("dab7dac4", "Odpowiedzi na Twoje wpisy, które mogą zawierać krzywdzący lub obraźliwy język, będą ukrywane i przenoszone tutaj. Inni użytkownicy wciąż będą mogli zobaczyć te odpowiedzi."),
                i("c4c53b86", "Miej na uwadze to, że do wykrywania niepożądanych odpowiedzi stosujemy zautomatyzowane technologie, które mogą czasem rozpoznawać treści w błędny sposób."),
                i("dca3d2ee", "Wyłączyć filtr odpowiedzi?"),
                i("fe440ff8", "Odfiltrowane odpowiedzi nie zostaną przywrócone w Twoich wpisach."),
                i("cedbb01c", "Informacje prawne"),
                i("b4f917d0", "Różne"),
                i("bdfa2b8c", "Dodatkowe materiały"),
                i("b8692262", "Sprawdź inne miejsca, w których znajdziesz przydatne informacje dotyczące produktów i usług serwisu X."),
                i("c0398892", "Wiadomości na temat najnowszych produktów"),
                i("b833bcde", "Zarządzaj różnymi aspektami środowiska serwisu X, w tym kontrastem kolorów i zakresem ruchu. Te ustawienia mają wpływ na wszystkie konta w serwisie X używane w tej przeglądarce."),
                i("d5b646be", "Wzrok"),
                i("jfe6a3a0", "Ruch"),
                i("e8c72272", "Zwiększ kontrast koloru"),
                i("dba2cdd2", "Zwiększa czytelność poprzez wzmocnienie kontrastu pomiędzy tekstem a kolorami tła."),
                i("d070244e", "Redukcja ruchu"),
                i("icfa5e8c", "Ogranicza animacje wyświetlane w aplikacji, w tym interakcje na żywo."),
                i("ae41b002", "Ogranicza animacje wyświetlane w aplikacji, w tym interakcje na żywo. Twój system sygnalizuje potrzebę redukcji ruchu obrazu. Jeśli chcesz ponownie włączyć ruch obrazu, najpierw musisz go wyłączyć."),
                i("h9d1cfae", "Otrzymuj przypomnienia o opisach zdjęć"),
                i("c878e9f8", "Umożliwia włączenie przypomnienia o konieczności dodania opisów obrazów przed wysłaniem wpisu."),
                i("bbd1fc7c", "Dowiedz się więcej o ułatwieniach dostępu w serwisie X"),
                i("ac865cf0", "Ułatwienia dostępu w serwisie X"),
                i("d3a2bde8", "Zobacz informacje dotyczące Twojego konta, pobierz archiwum swoich danych lub dowiedz się, w jaki sposób dezaktywować konto"),
                i("idca4742", "Zobacz informacje dotyczące Twojego konta, takie jak Twój numer telefonu czy adres e-mail."),
                i("b6ded35e", "W dowolnym momencie możesz zmienić hasło."),
                i("cce24bf4", "Dowiedz się, jakie informacje dotyczące Twojego konta przechowujemy."),
                i("i203df96", "Dowiedz się, w jaki sposób dezaktywować konto."),
                i("f70cd5ee", "Telefon"),
                i("ib6f1694", "Utworzenie konta"),
                i("de323650", "Kobieta"),
                i("b6ab31be", "Mężczyzna"),
                i("h3290872", "Zweryfikowano"),
                i("hbd12156", "Poproś o weryfikację"),
                i("b7ec04f4", "Tak"),
                i("f70d5780", "Tak."),
                i("dc62d3c6", "Nie."),
                i("a67dbd0a", "Konto parodystyczne, komentatorskie i fanowskie (PCF)"),
                i("a3db727e", "Zarządzaj kontem parodystycznym, komentatorskim i fanowskim (PCF)"),
                i("eacf1990", "Dodaj datę urodzenia do swojego profilu."),
                i("a3bf1262", "Zmień datę urodzenia w swoim profilu."),
                i("h530db16", "Chronione wpisy"),
                i("d6d80990", "Te informacje dotyczą Twojej przeglądarki lub urządzenia, gdy jesteś wylogowany/a. Po zalogowaniu ustawienia mogą być inne."),
                i("i0d81ddb", "ustawień personalizacji i danych"),
                i("g2a9bd3e", "Oznaczenie zautomatyzowanych kont"),
                i("dd9b3aae", "Czym jest zautomatyzowane konto?"),
                i("b80bdc40", "Zautomatyzowane konta są zaprogramowane do wykonywania za pośrednictwem interfejsu API serwisu X pewnych działań, takich jak publikowanie wpisów o warunkach pogodowych. Za tworzenie tych kont i zarządzanie nimi odpowiadają inne osoby w serwisie X."),
                i("a01ac9b6", "Etykiety informują innych użytkowników, kto zarządza zautomatyzowanym kontem. Kiedy właściciel zautomatyzowanego konta powiąże z nim swoje konto zarządzające, w profilu zautomatyzowanego konta i w publikowanych z niego wpisach będzie widoczna etykieta."),
                i("b989e1fe", "Czy muszę oznaczać swoje zautomatyzowane konta?"),
                i("i2d599aa", "Jak mam oznaczyć swoje zautomatyzowane konto?"),
                i("gd5bed72", "Utwórz konto zarządzające"),
                i("g6d44432", "Konto zarządzające jest kontem zarządzanym przez człowieka i wszystkie zautomatyzowane konta są mu podporządkowane."),
                i("e20a69e8", "Powiąż swoje konto zarządzające i zautomatyzowane konto"),
                i("d2f88358", "Powiąż swoje konta na stronie Automatyzacja w swoich ustawieniach."),
                i("e427f632", "Twoje konto otrzymało oznaczenie zautomatyzowanego konta!"),
                i("a4d7cffa", "Kiedy konta zostaną powiązane, zautomatyzowane konto otrzyma odpowiednie oznaczenie."),
                i("a18d6a7d", "nowe zasady"),
                i("e9965c14", "często zadawanych pytań dotyczących oznaczania zautomatyzowanych kont"),
                i("ee78c192", "Co to jest konto PCF?"),
                i("c3f35e0c", "Konto PCF przedstawia inną osobę, grupę lub organizację w swoim profilu w celu prowadzenia dyskusji na jej temat, satyrycznego przedstawiania jej działalności lub udostępniania dotyczących jej informacji."),
                i("d019b5fa", "Czy muszę oznaczyć etykietą swoje konto PCF?"),
                i("dd04f24e", "Tak. Etykieta PCF gwarantuje, że użytkownicy serwisu X nie będą mieć wątpliwości dotyczących Twojego konta, ponieważ ta etykieta będzie ich informować, że Twoje konto nie jest powiązane z tematem profilu. Konto nieoznaczone taką etykietą może naruszać Zasady dotyczące autentyczności."),
                i("hb0f8bbc", "Jak mogę oznaczyć etykietą swoje konto PCF?"),
                i("g69acc5c", "Po prostu kliknij przycisk „Rozumiem”, a my użyjemy ustawień Twojego profilu, aby ustawić etykietę konta!"),
                i("d313d431", "Zasady dotyczące autentyczności"),
                i("a3f22d8e", "Wybierz, jakie powiadomienia o aktywnościach i zainteresowaniach oraz sugestie chcesz otrzymywać."),
                i("bc20979a", "Serwis X oraz jego partnerzy używają plików cookie w celu dostarczania lepszej, bezpieczniejszej i szybszej usługi oraz w celu rozwijania swojej działalności. Niektóre pliki cookie są niezbędne do funkcjonowania naszych usług i ulepszania ich oraz zapewniania poprawności ich działania."),
                i("ge06dadc", "Zezwalaj serwisowi X i jego partnerom na używanie plików cookie w celu prezentowania Ci reklam i przesyłania informacji zgodnych z Twoimi zainteresowaniami."),
                i("he20de3a", "Nie zezwalaj serwisowi X na używanie plików cookie w celu zbierania dodatkowych danych służących do dostosowywania reklam i przesyłanych Ci informacji."),
                i("g0ec0bec", "Dezaktywowano konto"),
                i("g89f4614", "Twoje konto jest nieaktywne"),
                i("f1768324", "Określ, w jaki sposób serwis X ma personalizować treści oraz zbierać i udostępniać pewne dane."),
                i("ja94f34e", "Te ustawienia są ważne, kiedy jesteś wylogowany/a z przeglądarki lub urządzenia i nie mają zastosowania, gdy jesteś zalogowany/a."),
                i("bd73f7e6", "Za pomocą tej opcji można włączyć lub wyłączyć wszystkie ustawienia strony."),
                i("ddbc3288", "Dane"),
                i("ae5339a0", "Zobacz swoje dane z serwisu X"),
                i("b934e0ea", "Wyłączyć personalizację i dane?"),
                i("i0317e0e", "Może to spowodować wyświetlanie wpisów i reklam gorzej dopasowanych do Twoich zainteresowań."),
                i("a148acba", "Wyłącz"),
                i("aa023546", "Dostosuj na podstawie miejsc, w których byłem/am"),
                i("ced77194", "Zezwalaj na używanie informacji o miejscach w Internecie, w których przeglądasz treści z serwisu X"),
                i("fe1fc83e", "To są przypisane do Ciebie zakresy wiekowe."),
                i("bf9c74d0", "Nie personalizuj na podstawie zakresów wiekowych."),
                i("cf0daa24", "Zbieranie tych informacji może trochę potrwać. Spróbuj ponownie później."),
                i("ea522535", "Dowiedz się więcej"),
                i("hf5ca8f8", "profilu"),
                i("d9cbe351", function (e) {
                    return e.count + " login logowa" + n(e.count, "nia", "ń", "nie", "ń");
                }),
                i("de90b04a", "Miejsca, w których byłeś/aś"),
                i("cbd2ef59", function (e) {
                    return e.count + " lokalizacj" + n(e.count, "e", "i", "a", "i");
                }),
                i("a4441bb8", "Zainteresowania z serwisu X"),
                i("e1c6b2d6", "Dopasowani odbiorcy"),
                i("ed19d10d", function (e) {
                    return e.audienceCount + " grup" + n(e.audienceCount, "y", "", "a", "") + " odbiorców z " + e.advertiserCount + " reklamodawc" + n(e.advertiserCount, "ów", "ów", "y", "ów");
                }),
                i("f00d0d03", function (e) {
                    return e.count + " ciekaw" + n(e.count, "e tematy", "ych tematów", "y temat", "ych tematów");
                }),
                i("hf9c2caa", "Chcesz uzyskać listę reklamodawców?"),
                i("c29b7971", function (e) {
                    return "Ta informacja zostanie wysłana na adres " + e.primaryEmail + ".";
                }),
                i("b9e1cf02", "Uzyskaj"),
                i("a8276fac", "Uzyskaj listę reklamodawców"),
                i("g7912a84", "OK. Gdy Twoja lista będzie gotowa, otrzymasz ją pocztą mailową."),
                i("d6104de0", "Możesz zrezygnować z reklam opartych na zainteresowaniach, używając ustawień personalizacji i danych. Spowoduje to zmianę reklam wybieranych dla Ciebie w serwisie X, ale pozostaniesz na listach odbiorców reklamodawców."),
                i("ed8c03f5", "Dowiedz się więcej"),
                i("e1a4daac", function (e) {
                    return e.num_audiences + " list odbiorców";
                }),
                i("acb25e32", function (e) {
                    return e.num_advertisers + "reklamodawców";
                }),
                i("j4fa776e", "Telefony"),
                i("i7acdb36", "Tablety"),
                i("c112dfc8", "Komputer"),
                i("jd8607ba", "Data aktywacji"),
                i("ea4f6c9e", "Przeglądarki"),
                i("d750b93f", function (e) {
                    return e.count + " przeglądar" + n(e.count, "ki", "ek", "ka", "ek");
                }),
                i("a9783602", "Urządzenia mobilne"),
                i("j043aa31", function (e) {
                    return e.count + " urządze" + n(e.count, "nia mobilne", "ń mobilnych", "nie mobilne", "ń mobilnych");
                }),
                i("ae415fd2", "To ustawienie jest wyłączone."),
                i("a90be7b4", "Adresy e-mail"),
                i("c0f6f911", "Aktywność poza serwisem X"),
                i("adaafb3f", "Profil użytkownika na podstawie innych aktywności"),
                i("f0f72665", "Twój profil stworzony na podstawie innych aktywności"),
                i("d33b4e5b", "Aktywność poza serwisem X"),
                i("c4668d4f", "Aktywność poza serwisem X"),
                i("df3e137b", "Dowiedz się więcej"),
                i("d1597ccb", "Dowiedz się więcej"),
                i("c1b03a07", "Dowiedz się więcej"),
                i("b056d9dc", "To jest główny język Twojego konta."),
                i("h68bc23c", "Na podstawie tych dodatkowych języków możemy lepiej dostosowywać wybierane dla Ciebie treści."),
                i("fbf0e61e", "Jeśli nie określono, płeć użytkownika ustalana jest domyślnie na podstawie profilu i aktywności. Ta informacja nie będzie wyświetlana publicznie."),
                i("b4568a3a", "Dodaj płeć"),
                i("c0be743e", "Zaktualizowano płeć"),
                i("c5abae66", "To jest domyślna płeć przypisana do Ciebie w serwisie X."),
                i("cdb0d3e6", "Nie personalizuj na podstawie płci."),
                i("j31a1aa0", "To jest lista miejsc, która pozwala nam lepiej dostosowywać wybierane dla Ciebie treści. Jeśli wyłączono opcję „Personalizuj na podstawie odwiedzanych miejsc”, ta lista będzie pusta."),
                i("ddefdd1c", "Usunąć miejsca, w których byłeś/aś?"),
                i("hea740ac", "To zajmie trochę czasu i nie da się tego cofnąć."),
                i("a26e0d52", "OK. Te lokalizacje zostaną usunięte."),
                i("he447966", "Chwilowo nie znaleziono żadnych miejsc."),
                i("b9d98dec", "ustawieniach lokalizacji"),
                i("e27e4fce", "Nieznana lokalizacja"),
                i("ib55eb6b", "Powiązane aplikacje"),
                i("e5a4a539", "Dowiedz się więcej"),
                i("gc8f2e14", "Możesz zrezygnować z wyświetlania reklam opartych na zainteresowaniach, wyłączając tę opcję w ustawieniach personalizacji i danych."),
                i("e6dbe66b", "Dowiedz się więcej"),
                i("d3310e49", function (e) {
                    return "Plik zawierający wszystkie informacje dotyczące Twojego konta zostanie wysłany na adres " + e.primaryEmail + ".";
                }),
                i("ib03e8c8", "Czy chcesz pobrać na to urządzenie plik zawierający wszystkie informacje dotyczące Twojego konta?"),
                i("g49741e8", "Pobierz"),
                i("dc370a0c", "OK. Gdy Twoje dane będą gotowe, otrzymasz je pocztą mailową."),
                i("c07b4316", "Zainteresowania"),
                i("e97196fe", "Znane z"),
                i("ja0f971c", "Oto lista zainteresowań, które wybraliśmy dla Ciebie na podstawie Twojego profilu, Twojej aktywności i tematów, które obserwujesz. Te informacje pomagają nam lepiej dopasowywać wybierane dla Ciebie treści, w tym reklamy wyświetlane w serwisie X. Możesz dowolnie zmieniać te zainteresowania. Wprowadzone przez Ciebie zmiany mogą być widoczne dopiero po jakimś czasie."),
                i("gd1ce494", "Wydaje nam się, że interesują Cię poniższe tematy. Ta lista pozwala nam wyświetlać więcej Twoich treści użytkownikom znajdującym się w Twojej lokalizacji. Możesz dowolnie modyfikować te informacje. Wprowadzenie zmian może zająć trochę czasu."),
                i("a6b0b41a", "Pobierz aplikację serwisu X na telefon. Jest darmowa."),
                i("h3ed510e", "Dane z serwisu X"),
                i("b708417c", "Możesz poprosić o archiwum plików zawierające informacje dotyczące Twojego konta, historię konta, informacje o aplikacjach i urządzeniach, aktywności na koncie, zainteresowania oraz dane dotyczące reklam. Kiedy archiwum będzie gotowe do pobrania, otrzymasz powiadomienie w aplikacji."),
                i("jbf5843e", "Dane z Periscope"),
                i("ea886c6e", "Możesz poprosić o udostępnienie archiwum Twoich danych z Periscope bezpośrednio w Periscope."),
                i("cdcc2ad4", "Pobieranie nie powiodło się"),
                i("dbeff87a", "Poproś o archiwum"),
                i("hb02ed28", "Opcja pobierania danych użytkownika jest w tej chwili niedostępna. Spróbuj ponownie później."),
                i("c2254084", "Otrzymaliśmy Twój wniosek. Mamy na uwadze jak najlepszą ochronę Twojego konta, dlatego przygotowanie Twoich danych może zająć nam ponad 24 godziny."),
                i("f62d1d9e", "Twoje archiwum jest gotowe do pobrania i do wyświetlenia w przeglądarce komputera. Pamiętaj, że należy je pobrać przed upływem wskazanego terminu."),
                i("b221ca4c", "Damy Ci znać, kiedy Twoje dane będą gotowe do pobrania"),
                i("db40dfcf", "wypełnij ten formularz"),
                i("g1aced04", "Aplikacje, urządzenia i informacje"),
                i("dbcf3a1a", "Dodaj etykietę profilu"),
                i("cbb2367c", "Pokaż lub ukryj etykietę profilu Konto parodystyczne, komentatorskie i fanowskie (PCF)."),
                i("ge48855c", "Parodia"),
                i("hf019b20", "Ta etykieta gwarantuje, że użytkownicy serwisu X nie będą mieć wątpliwości dotyczących Twojego konta, ponieważ ta etykieta będzie ich informować, że Twoje konto nie jest powiązane z tematem profilu."),
                i("d048571e", "Usunąć etykietę konta parodystycznego?"),
                i("g905134c", "Wyłączenie tej etykiety spowoduje usunięcie jej z Twojego profilu oraz wszystkich dotychczas opublikowanych wpisów. Sprawdź, czy postępujesz zgodnie z Zasadami dotyczącymi autentyczności."),
                i("ce62c8c2", "Usunąć etykietę profilu?"),
                i("a14080ce", "Zaktualizować etykietę profilu?"),
                i("db6796f6", "Wyłączenie tej etykiety spowoduje usunięcie jej z Twojego profilu oraz wszystkich dotychczas opublikowanych wpisów. Sprawdź, czy postępujesz zgodnie z Zasadami dotyczącymi autentyczności. Gdy wykonasz aktualizację, kolejne aktualizacje będą możliwe dopiero po 48 godzinach."),
                i("c700b6be", "Gdy wykonasz aktualizację, kolejne aktualizacje będą możliwe dopiero po 48 godzinach."),
                i("ff1739ae", "Etykieta profilu"),
                i("h70c602c", "Nie można zaktualizować etykiety profilu"),
                i("c818c60c", "Statystyki"),
                i("ha9f14b1", function (e) {
                    return "Twój Pokój zacznie działać w dniu " + e.scheduleDate + " o godz. " + e.scheduleTime;
                }),
                i("jafbef80", "Nie masz autoryzacji do zaplanowania rozpoczęcia działania tego Pokoju"),
                i("e5d26f84", "Włącz powiadomienia, aby nie przegapić niczego ważnego w serwisie X. W celu spersonalizowania powiadomień użyjemy kraju i języka określonego w ustawieniach Twojego urządzenia."),
                i("f91f00ba", "Utwórz klip"),
                i("f9b2d343", function (e) {
                    return e.count + " wpis" + n(e.count, "y", "ów", "", "u");
                }),
                i("jcc8306e", "Poproś o głos"),
                i("j41fd45a", "Wysłano prośbę"),
                i("d5b2aae8", "Wysłano zbyt wiele próśb o głos. Spróbuj ponownie później."),
                i("b9945b98", "Wysyłanie prośby o głos nie powiodło się. Dołącz ponownie do pokoju i spróbuj ponownie za kilka sekund."),
                i("b2cc6a54", "Dołącz jako mówca"),
                i("fb6c0bbc", "Słuchanie anonimowe"),
                i("e49a1f42", "Aktualnie słuchasz anonimowo, więc host ani inni uczestnicy Cię nie widzą."),
                i("jf01aea4", "Aby wziąć udział w dyskusji, musisz ją opuścić i dołączyć ponownie jako widoczny słuchacz."),
                i("cac1482a", "Zareaguj"),
                i("fc0e94b7", function (e) {
                    return "Zareaguj: " + e.emoji;
                }),
                i("jf9f3e54", "Przewiń do przodu o 15 sekund"),
                i("hdd1aba0", "Przewiń do tyłu o 15 sekund"),
                i("b89c5a50", "Zatrzymaj"),
                i("e674c120", "Pokaż napisy"),
                i("f45bace4", "Ukryj napisy"),
                i("ce96f1dc", "Napisy niedostępne"),
                i("e07f6e7d", function (e) {
                    return "Prędkość odtwarzania " + e.rate + " x";
                }),
                i("jd04fc66", "0,5 x szybciej"),
                i("f03848b8", "Zwykła"),
                i("j0e5c2ce", "1,5 x szybciej"),
                i("b3f2318e", "2 x szybciej"),
                i("f17bc95a", "Udostępnij ekran"),
                i("b11a74b2", "Zatrzymaj udostępnianie"),
                i("e51c2372", "Goście"),
                i("b08821f4", "Wróć"),
                i("fed1388a", "Ustawienia Pokoju"),
                i("c63dd2cc", "Dołącz ze mną do rozmowy na żywo!"),
                i("c958c6c8", "Opublikuj to"),
                i("if23a252", "Udostępnij przez…"),
                i("c0530da6", "Udostępnij menu"),
                i("gb5851d7", function (e) {
                    return e.prefix + " " + e.url;
                }),
                i("j78ad1ca", "Zakończyć działanie Pokoju?"),
                i("db684264", "Tak, zakończ"),
                i("je23178a", "Spowoduje to zakończenie rozmowy dla wszystkich uczestników."),
                i("c371fb9a", "Dół"),
                i("c0ce822e", "Ustawienia mikrofonu"),
                i("a2bf8b8a", "Przełącz na słuchanie"),
                i("caa8d928", "Przełącz tłumienie hałasu"),
                i("b5d88f0c", "Tylko dla pracowników"),
                i("c855ab8e", "Tylko dla subskrybentów"),
                i("ddeb0a3c", "Podoba Ci się atmosfera w tej Grupie dyskusyjnej? Rozejrzyj się tu."),
                i("e111f531", function (e) {
                    return e.count + " dołączy" + n(e.count, "li/ły", "ło", "ł/a", "ło");
                }),
                i("cbef820f", function (e) {
                    return "Użytkownik " + e.screenName + " podał dalej strumień!";
                }),
                i("e3275464", "Wyślij"),
                i("cededf2a", "Host"),
                i("i2caef48", "Współhości"),
                i("j245c654", "Mówcy"),
                i("eda23a02", "Słuchacze"),
                i("b90eb348", "Udziel głosu"),
                i("d9a63e82", "Usuń z grona mówców"),
                i("bd917b26", "Zaproś do współhostowania"),
                i("d7357e7e", "Usuń z grona współhostów"),
                i("bf307fc0", "Zablokuj i usuń"),
                i("ccf2f24e", "Zgłoszenie"),
                i("i22835de", "Akceptuj");
            i("cb59a0fe", "Odrzuć"),
                i("c2376960", "Prośby o głos"),
                i("aba7dcdd", function (e) {
                    return "Zaproś użytkownika " + e.name;
                }),
                i("f5c7aaa7", function (e) {
                    return "ho" + n(e.count, "ści", "stów", "st", "sta");
                }),
                i("fc56c8b1", function (e) {
                    return "współho" + n(e.count, "ści", "stów", "st", "sta");
                }),
                i("iba0f45d", function (e) {
                    return "mówc" + n(e.count, "y", "ów", "a", "y");
                }),
                i("dc066955", function (e) {
                    return "słuchacz" + n(e.count, "e", "y", "", "a");
                }),
                i("b53ed9ab", function (e) {
                    return e.participantCount + " " + e.title + " · " + e.remainingCapacityCount + " woln" + n(e.remainingCapacityCount, "e miejsca", "ych miejsc", "e miejsce", "ego miejsca");
                }),
                i("c3b5b829", function (e) {
                    return e.count + " zaproszeni" + n(e.count, "a", "a", "e", "a");
                }),
                i("fe7a1910", "Wyślij zaproszenia"),
                i("ic3c757e", "Wyszukaj użytkowników"),
                i("cd133486", "Zaproś"),
                i("f2333850", "Udostępnij osobom spoza serwisu X"),
                i("cddb8097", "Dowiedz się więcej"),
                i("f77997b0", "Współhost"),
                i("i48f4ed8", "Mówca"),
                i("a77c8e02", "Słuchacz"),
                i("bdfa93eb", function (e) {
                    return "Udostępnione przez " + e.name;
                }),
                i("d8cc6ada", "Kto może mówić? Nie będzie to mieć wpływu na bieżących mówców. Zmiany mogą potrwać kilka sekund."),
                i("e3a87142", "Tylko zaproszeni użytkownicy"),
                i("db3de1d2", "Dołącz jako mówca"),
                i("d7f4bc44", "Dołącz jako współhost"),
                i("edcf15e9", function (e) {
                    return "Wysłano prośbę (" + e.count + ")";
                }),
                i("h13957aa", "Wycisz Pokój"),
                i("ge6372fa", "Wyłącz wyciszenie Pokoju"),
                i("i7a42e1c", "Pomóż zarządzać tym Pokojem"),
                i("e0b8f112", "Zaproszono Cię do wspólnego poprowadzenia Pokoju!"),
                i("ee12263c", "Współhości mogą mówić w Pokoju"),
                i("jee7002c", "Współhości mogą zapraszać, usuwać i wyciszać mówców"),
                i("i95225d2", "Współhości mogą udostępniać i usuwać wpisy"),
                i("f07137fa", "Współhości mogą usuwać słuchaczy z Pokoju"),
                i("j6cdf012", "Współhości nie mogą zapraszać ani usuwać innych współhostów"),
                i("c727d116", "Współhości nie mogą kończyć działania Pokoju"),
                i("g69084b8", "Zaakceptuj zaproszenie do wspólnego prowadzenia Pokoju"),
                i("ee230734", "Pokaż więcej opcji"),
                i("ic8c615e", "Wybierz i wyślij szybką odpowiedź"),
                i("a04077c4", "Wybierz 1 zdjęcie, film lub plik GIF"),
                i("c07367d8", "Multimedia nie obsługują obecnie wiadomości szyfrowanych"),
                i("af71ef68", "Tweet głosowy"),
                i("fc64990e", "Film"),
                i("ca0ce0e4", "Utwórz nową wiadomość"),
                i("e18e6a63", function (e) {
                    return "Kup subskrypcję X Premium, aby wysłać wiadomość do użytkownika @" + e.username;
                }),
                i("c3752568", "Wystąpił błąd. Poczekaj chwilę i spróbuj ponownie wysłać wiadomość."),
                i("f78aa3ea", "Nie udało się wysłać niektórych z Twoich wiadomości. Spróbuj ponownie później."),
                i("f9690dc0", "Przepraszamy. Nie możesz wysłać wiadomości do właściciela tego konta."),
                i("b1d35408", "Twój dzienny limit wysyłania Tweetów został osiągnięty."),
                i("g539cca6", "Twoje konto zostało zawieszone — nie możesz wysyłać wiadomości."),
                i("bbac001a", "Ta wiadomość jest za długa."),
                i("a1d2a68e", "Ten użytkownik Cię nie obserwuje. Możesz wysyłać wiadomości tylko do tych osób, które Cię obserwują."),
                i("ec2bb9d4", "Wpis, który próbujesz wysłać, został usunięty."),
                i("hf383be4", "Konto użytkownika, do którego próbujesz wysłać wiadomość, zostało usunięte."),
                i("c4fdbd16", "Nie możesz wysyłać wiadomości do zablokowanych użytkowników."),
                i("hf3e7e38", "Twoja wiadomość nie mogła zostać wysłana."),
                i("dd8272fd", function (e) {
                    return e.count + " nowe now" + n(e.count, "e wiadomości", "ych wiadomosci", "a wiadomość", "ych wiadomości");
                }),
                i("e2cd3b7c", "Połączenie audio zostało zakończone"),
                i("f42f365a", "Połączenie wideo zostało zakończone"),
                i("a7570f2c", "Przeoczone połączenie audio"),
                i("jd9831b2", "Przeoczone połączenie wideo"),
                i("f0985268", "Połączenie audio"),
                i("ca397a48", "Połączenie wideo"),
                i("bb7e2143", function (e) {
                    return e.seconds + " s";
                }),
                i("c1d4ac84", "Zmieniłeś/aś zdjęcie grupy"),
                i("abc7b032", "Zdjęcie grupy zostało zmienione"),
                i("i263b294", "Dołączyłeś/aś do rozmowy"),
                i("i8d5e62b", function (e) {
                    return "innych osób w tej grupie: " + e.count;
                }),
                i("f7204380", "Ten Fleet wygasł"),
                i("d9de7b58", "Te multimedia zostały ukryte, bo pochodzą od kogoś, kogo nie obserwujesz."),
                i("f2879f4e", "Ta wiadomość może zawierać nieodpowiednie multimedia"),
                i("b518221e", "Otwórz obraz"),
                i("eeaa9f90", "Otwórz film"),
                i("g2b43664", "Otwórz GIF"),
                i("d99de549", function (e) {
                    return "W odpowiedzi do użytkownika " + e.name;
                }),
                i("f5a07f7c", "Załącznik"),
                i("fd079470", "To jest spam"),
                i("c7a92dca", "Wiadomość OK"),
                i("fb3ccb56", "Wiadomość została ukryta z uwagi na podejrzaną treść"),
                i("c94b7d8a", "Odtwórz wiadomość głosową"),
                i("eb6f9582", "Wstrzymaj odsłuchiwanie wiadomości głosowej"),
                i("b6b4142e", "Ten wpis został ukryty, ponieważ pochodzi od kogoś, kogo nie obserwujesz."),
                i("fda60d78", "Ten wpis może zawierać multimedia graficzne."),
                i("b59a9004", "Otwórz wpis"),
                i("daf6bf02", "Zmień ustawienia"),
                i("ba60339a", "Usuń u siebie"),
                i("eb497e08", "Więcej akcji"),
                i("b170974a", "Dodaj reakcję"),
                i("i202bd22", "Zgłoś wiadomość"),
                i("f2e5491a", "Skopiuj wiadomość"),
                i("bf2d08ca", "Więcej reakcji"),
                i("ca7a2215", function (e) {
                    return "Twoja reakcja: " + e.emoji;
                }),
                i("j4bfee22", "Usunąć wiadomość?"),
                i("faddd3a2", "Ta wiadomość zostanie usunięta u Ciebie, ale inni uczestnicy rozmowy wciąż będą ją widzieć."),
                i("f58dff34", "Coś poszło nie tak i nie udało się usunąć wiadomości."),
                i("ad5a8e8e", "Nie masz uprawnień do usunięcia tej wiadomości."),
                i("fad48eea", "Wysyłanie..."),
                i("ae7d7a24", "Błąd wysyłania wiadomości"),
                i("bbe74f3f", function (e) {
                    return "Wczoraj, " + e.time;
                }),
                i("h95f9e77", function (e) {
                    return e.reactionCount + " reakcj" + n(e.reactionCount, "e", "i", "a", "i");
                }),
                i("c0098d4a", "Reakcje"),
                i("j85999ec", "Lista reakcji użytkowników"),
                i("a2d48779", function (e) {
                    return "Usuń swoją bieżącą reakcję: " + e.emoji;
                }),
                i("icd0bf34", "Wyświetlono"),
                i("e8bd8fec", "Wysłano"),
                i("b2d32fae", "Wyświetlone przez wszystkich"),
                i("a763d33f", function (e) {
                    return "Wyświetlone przez " + e.count + " " + n(e.count, "nowych użytkowników", "nowych użytkowników", "osobę", "osób");
                }),
                i("d84b485e", "Obserwujesz to konto"),
                i("be0c83d8", "Zaakceptowałeś/aś zaproszenie"),
                i("bcc13060", "Wczesny dostęp"),
                i("e535cae9", function (e) {
                    return e.count + " Obserwujący" + n(e.count, "ch", "ch", "", "ch");
                }),
                i("cf249089", function (e) {
                    return "Dołączył/a " + e.joinDate;
                }),
                i("g1f972d7", "Dowiedz się więcej"),
                i("bb0e37c3", "Dowiedz się więcej"),
                i("a89e8ab3", "Dowiedz się więcej"),
                i("d98540eb", "Dowiedz się więcej"),
                i("j296badb", "Dowiedz się więcej"),
                i("e45d77f5", "Dowiedz się więcej"),
                i("h52ca4c4", "Nowe wiadomości"),
                i("ffde2fdc", "Wczytywanie rozmowy"),
                i("da878dc0", "Akceptuj"),
                i("hc52446c", "Czy chcesz dołączyć do tej grupy? Jej członkowie nie będą wiedzieli, że widziałeś/aś zaproszenie do momentu, aż je zaakceptujesz."),
                i("f7e1ad65", function (e) {
                    return "Czy chcesz otrzymywać wiadomości od użytkownika " + e.senderName + "? Ten użytkownik nie dowie się, że widziałeś/aś tę wiadomość do momentu, aż ją zaakceptujesz.";
                }),
                i("gdf4b790", "Chcesz opuścić rozmowę?"),
                i("bbf83d84", "Tej czynności nie można cofnąć. Historia rozmowy zostanie usunięta z Twojej skrzynki odbiorczej."),
                i("ib3fe8aa", "Zablokuj lub zgłoś"),
                i("gbed8594", "Zablokuj tego użytkownika, aby nie otrzymywać od niego więcej zaproszeń do rozmowy."),
                i("g9074da4", "Opuść rozmowę"),
                i("ad63377e", "Usuń rozmowę"),
                i("h09b49f8", "Ta rozmowa zostanie usunięta z Twojej skrzynki odbiorczej, ale inni uczestnicy wciąż będą ją widzieć."),
                i("i6b19b08", "Zgłoś rozmowę"),
                i("cdb1a05a", "Powiadom nas o spamie lub nadużyciach, abyśmy mogli chronić innych użytkowników przed kontami takimi jak to."),
                i("d6b11d9c", "Nie udało się wysłać wiadomości prywatnej, ponieważ niektóre pliki nie zostały przesłane."),
                i("c64c1884", "Utwórz nową wiadomość"),
                i("cdcebd22", "Nowa wiadomość"),
                i("a66ac766", "Wczytywanie wiadomości prywatnych"),
                i("a846382a", "Wyszukaj prywatną wiadomość"),
                i("h845f282", "Prywatna wiadomość"),
                i("d7ad7414", "Wiadomość niedostępna"),
                i("ga086a54", "Załączony obraz"),
                i("a9cc8cfe", "Wysłano plik GIF"),
                i("eb3d722e", "Wysłałeś/aś GIF-a"),
                i("e5bfe07e", "Wysłano link"),
                i("db53c018", "Wysłałeś/aś link"),
                i("bf584cd2", "Wysłano zdjęcie"),
                i("f80629ba", "Wysłałeś/aś zdjęcie"),
                i("e20b65b0", "Wysłano naklejkę"),
                i("d30c2d40", "Wysłałeś/aś naklejkę"),
                i("a876e58c", "Wysłano film"),
                i("j7d8101a", "Wysłałeś/aś film"),
                i("dedfd266", "Wysłano wiadomość głosową"),
                i("h7033cac", "Wysłałeś/aś wiadomość głosową"),
                i("i34ec422", "Udostępniono wpis"),
                i("a4939874", "Udostępniono wpis"),
                i("a30a206e", "Rozumiem!"),
                i("ib4b1b86", "Opcja przypinania rozmów"),
                i("bd3ca2ef", function (e) {
                    return "Wybierz menu akcji dowolnej rozmowy, aby przypiąć ją u góry dla ułatwienia dostępu. Jednocześnie możesz przypiąć maks. " + e.count + " rozm" + n(e.count, "owy", "ów", "owę", "ów") + ".";
                }),
                i("e1c9ec9c", "Przypnij rozmowę"),
                i("e3cfff7c", "Wycisz rozmowę"),
                i("f398722e", "Wyciszono rozmowę"),
                i("bdd91964", "Odepnij rozmowę"),
                i("a8ed0eca", "Wyłącz wyciszenie rozmowy"),
                i("jac4eb1e", "Wyłączono wyciszenie rozmowy"),
                i("d88d0790", "Menu opcji"),
                i("ce108dda", "Wybierz etykietę"),
                i("abf2d13c", "Wybierz"),
                i("e4b3f520", "Przypięte rozmowy"),
                i("ae4d666a", "Wszystkie rozmowy"),
                i("d98e066c", "Przypięto rozmowę."),
                i("j302dba8", "Odpięto rozmowę."),
                i("cb367658", "Nie udało się przypiąć rozmowy. Spróbuj ponownie."),
                i("ie9a7e48", "Nie udało się przypiąć rozmowy. Sprawdź swoje połączenie i spróbuj ponownie."),
                i("hd3927c6", "Nie udało się odpiąć rozmowy. Spróbuj ponownie."),
                i("f1ac0968", "Nie udało się odpiąć rozmowy. Sprawdź swoje połączenie i spróbuj ponownie."),
                i("d571e4f9", function (e) {
                    return "Możesz przypiąć tylko " + e.count + " rozm" + n(e.count, "owy", "ów", "owę", "ów");
                }),
                i("a551bf7e", "Aby przypiąć nową rozmowę, musisz odpiąć jedną z przypiętych."),
                i("a676a876", "Witaj w Twojej skrzynce odbiorczej!"),
                i("h52877aa", "Wysyłaj wiadomości do innych użytkowników, udostępniaj wpisy i nie tylko w ramach prywatnych rozmów w serwisie X. "),
                i("efe8fda0", "Napisz wiadomość"),
                i("b9dae4f4", "Spróbuj wyszukać inny termin"),
                i("e7fb2028", "Nie ma więcej wyników"),
                i("ae111c99", function (e) {
                    return "Brak wyników dla „" + e.query + "”";
                }),
                i("e8581cce", "Nie znaleziono wyszukiwanego terminu"),
                i("f08940ac", "Zacznij pisać nową wiadomość"),
                i("i5d7593a", "Spróbuj wyszukać osoby, grupy lub wiadomości"),
                i("c94ac69e", "Grupy"),
                i("fb3c8e74", "Ostatnie wyszukiwania"),
                i("fd6150fc", "Bezpieczeństwo prywatnych wiadomości"),
                i("c7e8a9ee", "Polityką prywatności"),
                i("bece84b4", "Nie masz żadnych zaproszeń do rozmowy"),
                i("e51be7c1", "Dowiedz się więcej"),
                i("f041be05", function (e) {
                    return e.stringCount + " pending request" + n(e.count, "s", "s", "", "s");
                }),
                i("a2fad0f3", function (e) {
                    return e.stringCount + " new pe" + n(e.count, "ople", "ople", "rson", "ople") + " you may know";
                }),
                i("cbddf365", function (e) {
                    return e.stringCount + " pe" + n(e.count, "ople", "ople", "rson", "ople") + " you may know";
                }),
                i("fac945ad", function (e) {
                    return e.stringCount + " new request" + n(e.count, "s", "s", "", "s");
                }),
                i("ed93de0c", "Analizowanie wpisu"),
                i("ba44f4ea", "Więcej szczegółów od Groka"),
                i("a6e89af8", "Publiczna rozmowa"),
                i("ica55d24", "Nowy czat"),
                i("f794af9a", "Tryb zabawny"),
                i("eccf9fea", "Tryb normalny"),
                i("g7b1c574", "Resetuj do ustawień domyślnych"),
                i("f388a7ec", "DeepSearch"),
                i("ab1eb384", "Wybierz odpowiedni tryb wyszukiwania"),
                i("i330e54c", "Zaawansowane wyszukiwanie i rozumowanie"),
                i("ac64b674", "Rozszerzone wyszukiwanie, głębsze rozumowanie"),
                i("j22655f2", "Zapytaj, o co chcesz"),
                i("h0681e3e", "Porozmawiaj z Grokiem, naszym asystentem AI"),
                i("d593fd78", "Może on odpowiadać na pytania, wyszukiwać w serwisie X i generować obrazy"),
                i("d0205a24", "Sprawdź fakty"),
                i("ed4177c4", "Możliwe jest, że Grok będzie dostarczał merytorycznie niepoprawne informacje, popełniał błędy podczas tworzenia podsumowań lub pomijał część treści. Zachęcamy do niezależnego weryfikowania wszystkich informacji."),
                i("c0ff98f8", "Szkolenie i personalizacja AI"),
                i("f1a8218a", "Możemy używać Twoich danych z serwisu X oraz interakcji, danych wejściowych i wyników uzyskanych za pomocą Groka na potrzeby szkolenia modelu oraz dostrajania i personalizowania działania Groka. Możesz zrezygnować z tej opcji, używając ustawień serwisu X. Aby dowiedzieć się więcej, odwiedź nasze Centrum Pomocy."),
                i("bcbf5b6e", "Udostępnianie"),
                i("j7b5c844", "Ponosisz odpowiedzialność za rozmowy, które udostępniasz publicznie. Unikaj podawania wrażliwych oraz poufnych informacji o sobie lub innych osobach podczas rozmów z Grokiem (zobacz nasze Centrum pomocy)."),
                i("c9f7c196", "Centrum Pomocy"),
                i("b63d3d36", "Dołącz"),
                i("c65f7308", "Serwery są aktualnie przeciążone"),
                i("f2a8655e", "Zaawansowane narzędzia Groka są aktualnie niedostępne."),
                i("c26b9b9c", "Plik"),
                i("g10600b0", "Menu"),
                i("j826e722", "Zapisz obraz"),
                i("a9325f10", "Skopiuj obraz"),
                i("g0b12442", "Nie udało się skopiować obrazu"),
                i("edd0c172", "Opublikuj obraz"),
                i("d1d3a41a", "Edytuj obraz"),
                i("a2697040", "Opisz, co chcesz zmienić w obrazie"),
                i("ge1cefc4", "Narzędzia"),
                i("e9b6d404", "Do jakich narzędzi wyszukiwania Grok ma mieć dostęp?"),
                i("h15dce2e", "Ustawienia zaawansowane"),
                i("ff9dc268", "Edytuj podpowiedź"),
                i("e9fcdd0c", "Poproś Groka, aby agresywnie przeszukiwał Internet"),
                i("fc4e8aba", "Poproś Groka, aby rozumował krok po kroku"),
                i("e4ae6abe", "Poproś Groka o przekształcenie obrazu"),
                i("e8ade5e2", "Wybierz osobowość"),
                i("b5df32b0", "Wygrokuj coś"),
                i("fb3b9776", "Dane wyjściowe Groka zostały dostosowane przez tego użytkownika."),
                i("ca93f2ee", "Ta wiadomość została usunięta."),
                i("b52484b6", "Wyszukiwanie..."),
                i("b8c06820", "Kopiuj tekst"),
                i("ca0f5894", "Nie lubię"),
                i("ja8d189e", "Chodziło mi o odpowiedź tekstową"),
                i("e951f04e", "Chodziło mi o obraz"),
                i("c503b35e", "Chodziło mi o inny obraz"),
                i("d4371c92", "Kod jest niepoprawny"),
                i("dbe8586e", "Chodziło mi o inny kod"),
                i("e360eb4a", "Nie chodziło mi o kod"),
                i("a18657ca", "Wyrażenie matematyczne jest niepoprawne"),
                i("b8b86300", "Nie chodziło mi o matematykę"),
                i("e4c34788", "Niepoprawna odpowiedź"),
                i("b220a8c8", "Chodziło mi o coś innego"),
                i("b115fd18", "Stronnicza odpowiedź"),
                i("dc637214", "Zły styl/ton"),
                i("f02e6d42", "Chodziło mi o wyszukiwanie"),
                i("bbec6bba", "Nieprawidłowe wyniki wyszukiwania"),
                i("b494d088", "Nie chodziło mi o wyszukiwanie"),
                i("a44974f2", "Nie rozumiem obrazu"),
                i("bd44a8a8", "Powiedz nam więcej"),
                i("fcdbe764", "Co Grok może robić lepiej?"),
                i("bb6adb22", "Opisz, co poszło nie tak"),
                i("h0fa15f2", "Dziękujemy za opinię!"),
                i("d700b268", "Czaty z odwołaniami"),
                i("cd7bdab2", "Zapomnienie rozmów nie powoduje usunięcia ich z historii"),
                i("f21b84de", "Odwołanie zapomniane"),
                i("i52a9cb8", "Brak wspomnień do wyświetlenia."),
                i("d9d36880", "Zapomnij"),
                i("g02dacc0", "Dziś"),
                i("c6e845c0", "Wczoraj"),
                i("a5fa4a86", "sty"),
                i("c51724a4", "lut"),
                i("j244ceb2", "mar"),
                i("b22b12e0", "kwi"),
                i("h3023cac", "maj"),
                i("b10dbffa", "cze"),
                i("c81da1b6", "lip"),
                i("d4e4d3ce", "sie"),
                i("c3418f9a", "wrz"),
                i("b64dada6", "paź"),
                i("ad24ec20", "lis"),
                i("c7902252", "gru"),
                i("idf94bac", "Wygeneruj ponownie"),
                i("f7614f92", "Bez wyszukiwania"),
                i("c5ade3ba", "Z wyszukiwaniem"),
                i("c16e5b1a", "Bez generowania obrazów"),
                i("i2ca65fa", "Z generowaniem obrazów"),
                i("d3927f88", "Opublikuj link"),
                i("be37ecd4", "Nie można skopiować do schowka"),
                i("h708a4c0", "Udostępnij rozmowę"),
                i("g06a67e2", "Na tej stronie udostępniania będą znajdować się wiadomości aż do tego punktu"),
                i("a0428662", "Niepomocna"),
                i("fe4fd310", "Pomocne"),
                i("bfd161bc", "Porównaj"),
                i("j5dcf1b2", "Zaktualizowano"),
                i("a50aaa10", "Przed otwarciem rynku"),
                i("dd614d10", "Po godzinach"),
                i("d6b0b0d5", function (e) {
                    return "Otwarcie" + e.ttc_stock_details;
                }),
                i("e85f8b65", function (e) {
                    return "Kapitalizacja rynkowa" + e.ttc_stock_details;
                }),
                i("f92bf10f", function (e) {
                    return "Roczne maksimum" + e.ttc_stock_details;
                }),
                i("d679b09f", function (e) {
                    return "Maksimum" + e.ttc_stock_details;
                }),
                i("be7b9409", function (e) {
                    return "Wskaźnik C/Z" + e.ttc_stock_details;
                }),
                i("a81f5fb9", function (e) {
                    return "Roczne minimum" + e.ttc_stock_details;
                }),
                i("e68d4f21", function (e) {
                    return "Minimum" + e.ttc_stock_details;
                }),
                i("bc9c96f9", function (e) {
                    return "Najwyższa cena w historii" + e.ttc_stock_details;
                }),
                i("dd679fb1", function (e) {
                    return "Najniższa cena w historii" + e.ttc_stock_details;
                }),
                i("a22063d2", "Udostępnij swoją lokalizacją, aby poprawić dokładność."),
                i("db3248a8", "Ładowanie lokalizacji"),
                i("ffe0e588", "Udostępnij lokalizację"),
                i("e41a0dc2", "Zamknięte"),
                i("ieff24f4", "Pełny wymiar czasu"),
                i("e2811afc", "Rozgrywki"),
                i("j081fa34", "Rankingi"),
                i("i7c7f156", "Jutro"),
                i("b134ba52", "W toku"),
                i("j1361724", "Połowa czasu"),
                i("fa0f1262", "Przerwa"),
                i("c2cac618", "Grok aktualnie obsługuje dane z następujących lig: La Liga, Premier League, Bundesliga, Series A i Ligue 1."),
                i("acae223d", function (e) {
                    return 'Results for "' + e.prompt + '"';
                }),
                i("bed99fe2", "Zobacz mniej"),
                i("f7b57ac0", "Statystyki"),
                i("i7e3e446", "Mecze"),
                i("d490977e", "Teraz"),
                i("e9f55db8", "niedziela"),
                i("e9cf3af8", "poniedziałek"),
                i("d5868a7e", "wtorek"),
                i("b5dfdb46", "środa"),
                i("ab8095a2", "czwartek"),
                i("e298e6f2", "piątek"),
                i("ef519654", "sobota"),
                i("c609a1b4", "N"),
                i("j92274b0", "Pn"),
                i("ja482160", "Wt"),
                i("f4ad4cb0", "Śr"),
                i("d66bf142", "Cz"),
                i("dc17968a", "Pt"),
                i("j310a2d6", "So"),
                i("eaf55eb4", "Pokaż myślenie"),
                i("j1ab5f40", "Naciśnij, aby przeczytać"),
                i("ee000b0d", function (e) {
                    return "Źródła: " + e.numSources;
                }),
                i("b1ac6016", "Zakończono wyszukiwanie DeepSearch"),
                i("f766feca", "Zakończono wyszukiwanie DeeperSearch"),
                i("e258000e", "Powiadomienie"),
                i("d591a772", "Powiadomienie niedostępne"),
                i("bc49b728", "Otrzymasz powiadomienie, gdy odpowiedź będzie gotowa"),
                i("d8aadeba", "Powiadomienie wyłączone"),
                i("db832e38", "Włącz powiadomienia w ustawieniach przeglądarki"),
                i("a910cac6", "Wystąpił problem podczas włączania powiadomień"),
                i("g4b3a3e6", "Wyszukiwanie DeepSearch zakończone"),
                i("bf780b13", function (e) {
                    return e.minutes + " min " + e.seconds + " s";
                }),
                i("c2745fa4", "Przerwano"),
                i("be30b6ee", "Niestabilne połączenie"),
                i("a4d9dbfa", "Myśli"),
                i("d7cb5408", "Odpowiednie strony internetowe"),
                i("aa7c96bb", function (e) {
                    return "Zobacz " + e.numResults + " więcej";
                }),
                i("b58d2bd2", "Odpowiednie wpisy"),
                i("f5a2377e", "Myślenie o: "),
                i("g3ce0132", "Myślano o:"),
                i("f8007364", "Rozwiń, aby wyświetlić szczegóły"),
                i("ca53f780", "Zwiń szczegóły"),
                i("ha8fbe22", "Generuj więcej obrazów w ramach subskrypcji Premium"),
                i("d95c232a", "Osiągnięto limit. Podnieś poziom konta, aby wygenerować więcej treści."),
                i("h2671312", "Więcej Groka w ramach subskrypcji Premium"),
                i("a1bb9c8a", "Więcej Groka w ramach subskrypcji Premium+"),
                i("b08ef3ae", "Podnieś poziom do X Premium, aby kontynuować rozmowę, albo spróbuj ponownie później."),
                i("jf9363b8", "Podnieś poziom do X Premium+, aby kontynuować rozmowę, albo spróbuj ponownie później"),
                i("ef018bf6", "Analizuj więcej obrazów w ramach subskrypcji Premium"),
                i("cdace6d2", "Podnieś poziom teraz"),
                i("a3186bff", function (e) {
                    return e.count + " stron" + n(e.count, "y internetowe", " internetowych", "a internetowa", "y internetowej");
                }),
                i("f4146dda", "Którą odpowiedź wolisz?"),
                i("a2c2be32", "Pomoże to ulepszyć Groka."),
                i("g01599b6", "Odpowiedź 2"),
                i("e02694e0", "Odpowiedź 1"),
                i("h6867fcc", "Wolę tę odpowiedź"),
                i("b2175228", "Grok dla systemu Android już tu jest"),
                i("d2d8650c", "Korzystaj z najlepszych funkcji Groka dostępnych w naszej nowej autonomicznej aplikacji"),
                i("ia5bef3e", "Jak mogę Ci dziś pomóc?"),
                i("ge683598", "Zapytaj Groka o cokolwiek..."),
                i("fef25c88", "Wypróbuj Groka bezpłatnie"),
                i("fb172aa8", "Bezpłatny poziom Groka jest teraz dostępny w Twoim regionie. Umożliwia on czatowanie, generowanie obrazów i analizowanie zdjęć. Obowiązują określone limity."),
                i("d7af4f40", "Wygeneruj obraz przedstawiający galaktykę"),
                i("gcb6c0be", "Grok może popełniać błędy. Zweryfikuj uzyskane wyniki."),
                i("cb88fd82", "Używasz bezpłatnej wersji Groka."),
                i("g27a5314", "Aby zacząć używać Groka, dodaj numer telefonu do swojego konta."),
                i("bdd84568", "Twoje konto jest zbyt nowe, aby umożliwiało używanie Groka. Spróbuj ponownie później."),
                i("a9109a94", "Wioska solarpunkowa"),
                i("g986f7a4", "Wygeneruj obraz wioski solarpunkowej"),
                i("ad685264", "Fudżi"),
                i("hdb08284", "Wygeneruj obraz Fudżi w stylu anime"),
                i("a986ae84", "Latający kot"),
                i("a14b556a", "Wygeneruj obraz latającego kota"),
                i("gc16b670", "Robot na łące"),
                i("d5b8fa44", "Wygeneruj obraz robota na łące"),
                i("da196ff6", "Astronauta na Marsie"),
                i("ae3979cc", "Wygeneruj portret astronauty na Marsie"),
                i("a682460e", "Mknący roadster"),
                i("e03e5514", "Wygeneruj zdjęcie Tesli Roadster jadącej przez Shinjuku z efektem rozmycia ruchu"),
                i("e68eac68", "Podziwianie zorzy polarnej"),
                i("hc6e6754", "Wygeneruj zdjęcie osoby podziwiającej zorzę polarną"),
                i("cf59f9f6", "Pomóż mi napisać list motywacyjny"),
                i("cd9aeac8", "Pokaż dzisiejsze nagłówki prasowe"),
                i("acf2f0be", "Poleć grę RPG fantasy"),
                i("b9bd12e2", "Rozwiąż problem 2Sum w Pythonie"),
                i("hf9afab0", "Włącz tryb DeepSearch, aby skanować Internet i serwis X, analizować informacje oraz dostarczać szczegółowe, dobrze uzasadnione odpowiedzi dzięki błyskawicznie działającej, opartej na agentach funkcji wyszukiwania."),
                i("ef3b3f04", "Włącz tryb Myśl, aby używać naszego modelu rozumowania. Sprawdza się on najlepiej w przypadku matematyki, nauki i programowania. Możesz także kazać Grokowi „myśleć intensywniej” nad dowolnym pytaniem wymagającym użycia większej liczby komórek mózgowych. "),
                i("b43636b8", "Wprowadzamy Groka 3"),
                i("j376298c", "W Groku 3, czyli naszym najwydajniejszym modelu, wprowadzamy dwa nowe tryby interakcji: DeepSearch i Myśl."),
                i("e3584f8e", "Jakich 10 najlepszych strategii handlu opcjami używają fundusze hedgingowe"),
                i("d91b7b8a", "Ile kosztowało wybudowanie uniwersytetu w 1885 roku?"),
                i("e13591c0", "Przykładowa rozmowa z Grokiem"),
                i("c27ca452", "Posiadacze subskrypcji Premium mogą teraz korzystać z naszej najbardziej zaawansowanej AI, czyli Groka, w serwisie X."),
                i("b6abc25a", "Wprowadzamy Groka 2"),
                i("e1cdaf9e", "Nasz najnowszy asystent AI (obsługiwany przez X)"),
                i("e6796748", "Pytaj o wszystko"),
                i("db470fdc", "Grok może pomagać w wykonywaniu codziennych zadań, takich jak pisanie wiadomości e-mail, odpowiadanie na pytania i dostarczanie przepisów."),
                i("e9adc2d0", "Koduj lepiej"),
                i("aaab6cdc", "Zadaj pytania dotyczące programowania lub dowiedz się więcej o nowych koncepcjach."),
                i("jd08d606", "Działaj kreatywnie"),
                i("he526d22", "Twórz niesamowite wizualizacje, korzystając z naszych nowych funkcji generowania obrazów."),
                i("i6932876", "Obraz w stylu cyberpunk"),
                i("j7cdee8e", "Bądź na bieżąco"),
                i("f1f683c2", "Otrzymuj aktualne informacje dotyczące najnowszych wiadomości i popularnych tematów dostępne wyłącznie w serwisie X."),
                i("h73b9cc0", "Twoja wiadomość nie została wysłana, ponieważ nie masz aktualnie połączenia z czatem"),
                i("b6c73662", "Wyślij wiadomość"),
                i("h6070fdc", "Ustawienia czatu"),
                i("d49326ba", "Ukryj awatary"),
                i("h79f3532", "Pokaż awatary"),
                i("a8c1e2f0", "Ukryj akcje moderatora"),
                i("jd83edd4", "Pokaż akcje moderatora"),
                i("ecca11ac", "Ukryj daty"),
                i("e358a9f8", "Pokaż daty"),
                i("fca62374", "Wyskakujące okienko czatu"),
                i("fe20f01b", function (e) {
                    return "Wyciszyć użytkownika " + e.name + "?";
                }),
                i("f5dc372a", "Wyciszenie spowoduje usunięcie wszystkich wiadomości od użytkownika i uniemożliwi mu czatowanie przez pozostałą część transmisji."),
                i("e91dd1fa", "Wiadomość została usunięta przez moderatora."),
                i("d1da3709", function (e) {
                    return "Odpowiadasz użytkownikowi " + e.username + ": " + e.body;
                }),
                i("fc82a896", "Ta transmisja została zakończona"),
                i("ea58dbd0", "Ta transmisja nie została rozpoczęta"),
                i("cb5b6784", "Ograniczone przez transmitującego"),
                i("eba27300", "Czatować mogą tylko konta obserwowane przez transmitującego"),
                i("f28984fb", function (e) {
                    return "Czatować mogą tylko konta obserwowane przez użytkownika " + e.screenName;
                }),
                i("a3fec810", "Zasubskrybuj usługę Premium, aby czatować"),
                i("dbf0b235", function (e) {
                    return "Zasubskrybuj treści użytkownika " + e.screenName + ", aby czatować";
                }),
                i("ifbd8342", "Otwórz ekran Na żywo"),
                i("f935d3ce", "Otwórz czat"),
                i("abbe8212", "Zamknij czat"),
                i("hdf040dd", function (e) {
                    return "Gotowe w " + e.percentage + "%";
                }),
                i("e4f6bd9e", "Coś poszło nie tak. Spróbuj ponownie."),
                i("ac966f94", "Nieobsługiwana przeglądarka"),
                i("ca86b62c", "lub"),
                i("d5568440", "Wpisz silniejsze hasło."),
                i("d0511fe6", "Ten numer jest już przypisany do innych kont. Spróbuj użyć innego numeru."),
                i("cd24fe60", "Wpisz poprawny numer telefonu."),
                i("gf8388fe", "Kod kraju"),
                i("c52be452", "Tak, usuń"),
                i("bcb388a0", "Spowoduje to usunięcie wszelkich przesłanych wcześniej kontaktów i wyłączenie synchronizacji książki adresowej z serwisem X na wszystkich urządzeniach. Może to chwilę potrwać."),
                i("ec129eb6", "Usunięto kontakty."),
                i("f1b5048a", "Wystąpił błąd podczas usuwania kontaktów."),
                i("hc72e1fc", "Wpisz poprawny adres e-mail."),
                i("bc0ad88a", "Używanie adresów e-mail zawierających symbol „+” jest niedozwolone. Wprowadź prawidłowy adres e-mail."),
                i("f134915f", function (e) {
                    return "Wybrane elementy: " + e.count;
                }),
                i("b8fb87e0", "Zobacz wybrane tematy"),
                i("e854ad27", function (e) {
                    return "Temat - " + e.title;
                }),
                i("e4ff75aa", "Coś poszło nie tak. Spróbuj ponownie."),
                i("b60eba9e", "Musimy najpierw coś sprawdzić. Podejmij wyzwanie Google reCAPTCHA i udowodnij, że nie jesteś robotem."),
                i("ba939778", "Czy na pewno nie jesteś robotem?"),
                i("d44efc66", "Jak się nazywasz?"),
                i("b4867a18", "Twoje imię i nazwisko nie może zawierać słowa „Twitter”."),
                i("j1c3f4b9", function (e) {
                    return "Edytuj datę urodzenia: " + e.birthdate;
                }),
                i("j231d352", "Obserwuj wszystkich"),
                i("c203db71", function (e) {
                    return "Wczytywanie wpisów użytkownika @" + e.screenName;
                }),
                i("c9a1cb5e", "To konto nie istnieje"),
                i("e7b201de", "Wyszukaj coś innego."),
                i("ica87fde", "Zablokowano Cię"),
                i("c7ec6faf", "Dowiedz się więcej"),
                i("e79ed125", function (e) {
                    return "Użytkownik @" + e.screenName + " został zablokowany";
                }),
                i("gba95028", "Wyświetl wpisy"),
                i("a2216a79", "Dowiedz się więcej"),
                i("a2811f96", "Osie czasu na profilu"),
                i("d25805fa", "Subskrypcje"),
                i("b05be0c8", "Najciekawsze"),
                i("b9891db3", function (e) {
                    return "Wpisy z odpowiedziami użytkownika " + e.fullName + " (@" + e.screenName + ")";
                }),
                i("e1ab545d", function (e) {
                    return "Wczytywanie wpisów dla subskrybentów użytkownika @" + e.screenName;
                }),
                i("ac3f4be9", function (e) {
                    return "Ładowanie Najciekawszych użytkownika @" + e.screenName;
                }),
                i("da38f955", function (e) {
                    return "Ładowanie artykułów użytkownika @" + e.screenName;
                }),
                i("b7363b66", "Wyślij wpis"),
                i("ce659062", "Nie każ swoim subskrybentom czekać"),
                i("f1e98cc2", "Pokaż swoje najlepsze wpisy!"),
                i("d5c743c6", "Napisz artykuł"),
                i("d1e5e328", "Informacja o tym pojawi się tutaj."),
                i("hb26a1fe", "Nie zwlekaj! Zacznij publikować te ekskluzywne treści. Wszystkie Twoje wpisy dla subskrybentów będą widoczne w tym miejscu."),
                i("b7c3572e", "Aby dodać wpis do sekcji Najciekawsze w swoim profilu:\n\n1. Znajdź dowolny utworzony przez siebie wpis.\n2. Naciśnij przycisk menu „•••”.\n3. Naciśnij polecenie „Dodaj do / usuń z Najciekawszych”."),
                i("i8123550", "Gdy opublikujesz artykuł, będzie on tutaj widoczny."),
                i("b786a77d", function (e) {
                    return "Użytkownik @" + e.screenName + " nie opublikował wpisu";
                }),
                i("j7b80397", function (e) {
                    return "Użytkownik @" + e.screenName + " nie opublikował jeszcze żadnych wpisów dla subskrybentów";
                }),
                i("jbae8c54", "Nie ma dostępnych wpisów oznaczonych jako najciekawsze."),
                i("g8fb219e", "Brak dostępnych artykułów."),
                i("f34dfc18", "Gdy te osoby będą publikować, ich wpisy będą widoczne w tym miejscu."),
                i("h9346040", "Opublikowane wpisy dla subskrybentów będą widoczne w tym miejscu."),
                i("i4c3ddc6", "W tym miejscu będą widoczne opublikowane artykuły."),
                i("e0118142", "Opublikuj teraz"),
                i("e0c1d871", function (e) {
                    return "Wpisy użytkownika " + e.fullName;
                }),
                i("c575828f", function (e) {
                    return "Wpisy użytkownika " + e.fullName + " dla subskrybentów";
                }),
                i("e8300dbb", function (e) {
                    return "Najciekawsze użytkownika " + e.fullName;
                }),
                i("c46b420d", function (e) {
                    return "Artykuły użytkownika " + e.fullName;
                }),
                i("h5a65db7", function (e) {
                    return "Wpisy dla subskrybentów użytkownika " + e.fullName + " (@" + e.screenName + ")";
                }),
                i("g7ccac9d", function (e) {
                    return "Najciekawsze użytkownika " + e.fullName + " (@" + e.screenName + ")";
                }),
                i("ja6e5d35", function (e) {
                    return "Artykuły użytkownika " + e.fullName + " (@" + e.screenName + ")";
                }),
                i("h088ae72", "Wpisy profilu"),
                i("hbf64b75", function (e) {
                    return "Wpisy polubione przez " + e.fullName + " (@" + e.screenName + ")";
                }),
                i("a64da953", function (e) {
                    return "Wczytywanie polubień użytkownika @" + e.screenName;
                }),
                i("be3d5b9f", function (e) {
                    return "Użytkownik @" + e.screenName + " nie polubił żadnych wpisów";
                }),
                i("d34b5306", "Gdy to zrobi, wpisy te będą widoczne tutaj."),
                i("bb0e41bc", "Nie masz jeszcze żadnych polubień"),
                i("d3d4a21c", "Naciśnij serce w dowolnym wpisie, aby wyrazić ciepłe uczucia. Twoje serca będą widoczne w tym miejscu."),
                i("d95c3d31", function (e) {
                    return "Wpisy polubione przez użytkownika " + e.fullName;
                }),
                i("eeb7d696", "Twoje polubienia są prywatne. Tylko Ty możesz je zobaczyć."),
                i("h6e91bb1", function (e) {
                    return "Multimedia opublikowane przez " + e.fullName + " (@" + e.screenName + ")";
                }),
                i("fe38901b", function (e) {
                    return "Ładowanie multimediów użytkownika @" + e.screenName;
                }),
                i("bc4223a3", function (e) {
                    return "Użytkownik @" + e.screenName + " nie opublikował multimediów";
                }),
                i("ccc363f6", "Gdy to zrobi, wpisy te będą widoczne tutaj."),
                i("d1614228", "Światła, kamera... załączniki!"),
                i("d7dc8d0a", "Twoje wpisy zawierające zdjęcia lub filmy będą widoczne tutaj."),
                i("hf761abf", function (e) {
                    return "Multimedia użytkownika " + e.fullName;
                }),
                i("je5311d3", function (e) {
                    return "Konta powiązane z: " + e.fullName + " (@" + e.screenName + ")";
                }),
                i("fd0772eb", function (e) {
                    return "Wczytywanie kont powiązanych z: @" + e.screenName;
                }),
                i("ccf03833", function (e) {
                    return "Konta powiązane (" + e.fullName + ")";
                }),
                i("ba5a88e4", "Sugerowane"),
                i("ddee8ae2", "Wyświetl wszystkie oferty pracy"),
                i("d2a04c68", "Rekrutujemy"),
                i("dc12a126", "Wyznacz trasę"),
                i("e2acb642", "Kontakt"),
                i("ha9b8035", function (e) {
                    return "Zadzwoń: " + e.phoneCode + " " + e.phoneNumber;
                }),
                i("g2244521", function (e) {
                    return "Wyślij wiadomość: " + e.phoneCode + " " + e.phoneNumber;
                }),
                i("b44c0205", function (e) {
                    return e.day + " o " + e.time;
                }),
                i("de1123f5", function (e) {
                    return "o " + e.time;
                }),
                i("e2a5bd50", "Otwarte 24 h/7"),
                i("e0d7da6c", "Zamknięcie"),
                i("i7059f56", "Otwarcie"),
                i("a7391348", "Godziny otwarcia nie są dostępne"),
                i("c9eba532", "Zaktualizowano godziny"),
                i("b5fea270", "Utwórz karuzelę"),
                i("h10bb33c", "Chcesz zgłosić produkt?"),
                i("dda5d96a", "Zgłoś produkt"),
                i("fca46f40", "Centrum Pomocy"),
                i("c71a053b", "kliknij tutaj"),
                i("d7f8a117", function (e) {
                    return "Analizy " + e.days + "-dniowe";
                }),
                i("cae20e93", function (e) {
                    return e.days + " dni";
                }),
                i("gc767fda", "Widoczne tylko dla Ciebie"),
                i("c7c85e0c", "Odblokuj analizy"),
                i("b15df4b4", "Liczba wyświetleń Twoich wpisów w serwisie X"),
                i("e5fe61e0", "Wyświetlenia"),
                i("d1018321", function (e) {
                    return "Polubienia Twoich wpisów w ciągu ostatnich " + e.period + ": " + e.value;
                }),
                i("e623137c", "Wskaźnik zaangażowania"),
                i("d9d34182", "Liczba interakcji z wpisami podzielona przez liczbę wyświetleń."),
                i("aeee0182", "Wejścia na profil"),
                i("b2bde01a", "Liczba wyświetleń profilu z poziomu Twoich wpisów"),
                i("faf4c1f5", function (e) {
                    return "Wizyty w Twój profilu w ciągu ostatnich " + e.period + ": " + e.value;
                }),
                i("d5f1e554", "Kliknięcia linków"),
                i("cf573986", "Liczba kliknięć adresów URL w Twoich wpisach"),
                i("j761451e", "Nowe obserwowania"),
                i("e1a87d14", "Liczba zdobytych nowych obserwowań (anulowania obserwowania nie są uwzględnione)"),
                i("j590577e", "Liczba odpowiedzi na Twoje wpisy"),
                i("ia1da622", "Liczba polubień Twoich wpisów"),
                i("cfd1036b", function (e) {
                    return "Polubienia Twoich wpisów w ciągu ostatnich " + e.period + ": " + e.value;
                }),
                i("ja42739e", "Wpisy podane dalej"),
                i("ca6e8de0", "Liczba podań dalej Twoich wpisów"),
                i("b1b4d57e", "Wyświetlenia filmu"),
                i("bdaf100e", "Liczba wyświetleń filmów w Twoich wpisach"),
                i("ca826772", "Wyświetlenia multimediów"),
                i("j43b8f52", "Liczba wyświetleń Twoich multimediów (GIF-y, obrazy, filmy)"),
                i("d3969c06", "Współczynnik ukończeń"),
                i("c58c3476", "Ukończenia oglądania filmu podzielone przez liczbę wyświetleń filmu"),
                i("c8aae62a", "Liczba dodań Twoich wpisów do Zakładek"),
                i("g70825e0", "Udostępnienia"),
                i("c6fbefd4", "Liczba udostępnień Twoich wpisów"),
                i("dbe9353e", "Zaangażowanie"),
                i("a3a4e8f8", "Miesiąc"),
                i("eb2e0272", "Liniowy"),
                i("e298b08e", "Słupkowy"),
                i("bbc6e7c6", "Stany Zjednoczone"),
                i("h88ad664", "Kanada"),
                i("gd139910", "Wielka Brytania"),
                i("e08feda2", "Japonia"),
                i("fad772ce", "Bliski Wschód i Afryka Północna"),
                i("a396dd6c", "Azja i Pacyfik"),
                i("j942b16c", "Europa i rozwijające się rynki"),
                i("j3cc0c00", "Ameryka Łacińska"),
                i("fe90a642", "13–17"),
                i("a5c91a8e", "18–24"),
                i("cf30cdfa", "25–34"),
                i("gf672f7c", "35–44"),
                i("jf28b41c", "45–54"),
                i("ja78da94", "55–64"),
                i("g42ea0b0", "65+"),
                i("f21807e0", "Osoby nieobserwujące"),
                i("d61b2bcc", "Wpisy w grupie dyskusyjnej"),
                i("h3525cb8", "Nie podano"),
                i("a3c544e8", "Najliczniej reprezentowane kraje"),
                i("f30795d0", "Otwiera zdjęcie profilowe"),
                i("gd7acb84", "Uzupełnij profil"),
                i("b7636014", "Wiadomość"),
                i("haad225c", "Daj subskrypcję Premium w prezencie"),
                i("b63c46ed", function (e) {
                    return "Subskrybuj użytkownika @" + e.screenName;
                }),
                i("j33d8902", "Wyślij napiwek"),
                i("a8ab3d08", "Wyślij do:"),
                i("d740d2d9", function (e) {
                    return "Link " + e.service + " został skopiowany do schowka";
                }),
                i("a7cf1e98", "Bandcamp"),
                i("d876e67e", "Adres Bitcoin"),
                i("f85f6760", "Cash App"),
                i("a32a7c06", "Adres Ethereum"),
                i("cc1a3bc4", "GoFundMe"),
                i("d4d74bb4", "Patreon"),
                i("h14fbc52", "PayPal"),
                i("h1198dcc", "Venmo"),
                i("j4e0fd88", "Pokaż więcej"),
                i("df7cb6d4", "Kategorie zawodowe"),
                i("ec429e79", "Dowiedz się więcej"),
                i("j04c717a", "+ Dodaj doświadczenie"),
                i("a1ea2f12", "Sto lat!"),
                i("g8191e78", "Dziś ma urodziny!"),
                i("c1b819ba", "Dziś widać tu urodzinowe balony"),
                i("ad7a451e", "Tłumacz opis"),
                i("f543dbf6", "Zweryfikowany numer telefonu"),
                i("cef4e8cf", function (e) {
                    return "Wyłączyć wyciszenie użytkownika @" + e.screenName + "?";
                }),
                i("h03a094a", "Wpisy z tego konta będą teraz widoczne na Twojej głównej osi czasu."),
                i("a6e94418", "Wpisy z tego konta zostały wyciszone."),
                i("dd3d10f6", "W trakcie przeglądu"),
                i("i06d4712", "Nasz zespół wykonuje szybki przegląd Twojego konta. W ciągu kilku dni powinien pojawić się tutaj Twój znaczek."),
                i("j354c438", "Etykieta „W trakcie przeglądu” jest widoczna tylko dla Ciebie."),
                i("e018b5fa", "Wykonaj uaktualnienie, aby uzyskać status zweryfikowanego konta"),
                i("b74bd6c6", "To konto ma status zweryfikowanego konta, bo należy do kategorii kont instytucji rządowych, agencji medialnych lub rozrywkowych, lub innej określonej grupy kont."),
                i("e1e0c916", "To konto jest zweryfikowane, ponieważ ma subskrypcję Premium."),
                i("eb5d72e4", "Wpisy z tego konta są chronione. Mogą je czytać tylko osoby obserwujące to konto."),
                i("g776ca50", "Zweryfikowane konto"),
                i("ad465ee8", "Ustaw powiązanie podstawowe"),
                i("d01612d3", function (e) {
                    return "Weryfikacja ważna od " + e.date + ".";
                }),
                i("e14d8719", function (e) {
                    return e.year + " p.n.e.";
                }),
                i("b7caffb7", function (e) {
                    return "" + e.name;
                }),
                i("ea8c425f", function (e) {
                    return "@" + e.viewerScreenName + ", nie masz jeszcze weryfikacji";
                }),
                i("b2d0c0f4", "Uzyskaj weryfikację jak "),
                i("f464d54d", function (e) {
                    return "@" + e.profileScreenName;
                }),
                i("g47cdc0e", " w celu wyróżnienia się i wzmocnienia zasięgu odpowiedzi."),
                i("d834ab9c", "Tak, zobacz profil"),
                i("cb339f26", "Uwaga: na tym koncie miała miejsce nietypowa aktywność"),
                i("hf06085e", "To ostrzeżenie oznacza, że za pośrednictwem tego konta miała miejsca jakaś nietypowa aktywność. Czy na pewno chcesz zobaczyć to konto?"),
                i("aa959f36", "Uwaga: to konto zostało tymczasowo ograniczone"),
                i("jf604336", "Uwaga: ten profil może zawierać nieodpowiednie treści"),
                i("c9bfda48", "Uwaga: ten profil może zawierać nieodpowiednie treści. To ostrzeżenie oznacza, że treści pochodzące z tego profilu mogą zawierać nieodpowiednie treści lub obrazy. Czy na pewno chcesz zobaczyć ten profil?"),
                i("g29ebf26", "To ostrzeżenie oznacza, że wpisy pochodzące z tego profilu mogą zawierać nieodpowiedni język lub obrazy. Czy na pewno chcesz zobaczyć ten profil?"),
                i("jcfb7fba", "To ostrzeżenie oznacza, że za pośrednictwem tego profilu mogło dojść do naruszenia Zasad serwisu X. Czy nadal chcesz go wyświetlić?"),
                i("bd598c70", "Te wpisy są chronione"),
                i("e617164b", "Dowiedz się więcej"),
                i("g8475f82", "Konto zawieszone"),
                i("j5e1cf59", "Zasady serwisu X"),
                i("gbf342a4", "Konto wstrzymane"),
                i("defba9a4", "Witamy na X."),
                i("d11934ec", "Otrzymuj powiadomienia"),
                i("a2cd2b0a", "Obserwuj i włącz powiadomienia"),
                i("a70bae53", function (e) {
                    return "Możesz teraz otrzymywać powiadomienie za każdym razem, gdy użytkownik " + e.fullName + " opublikuje wpis.";
                }),
                i("f51a4c29", function (e) {
                    return "Teraz możesz zacząć obserwować użytkownika " + e.fullName + ", dzięki czemu będziesz otrzymywać powiadomienia o każdym opublikowanym przez niego wpisie.";
                }),
                i("cfa5e58d", function (e) {
                    return "Obserwujesz użytkownika " + e.fullName + " i otrzymasz powiadomienie za każdym razem, gdy opublikuje on wpis.";
                }),
                i("be3a652d", function (e) {
                    return "Otrzymasz powiadomienie za każdym razem, gdy użytkownik " + e.fullName + " opublikuje wpis.";
                }),
                i("f089620c", "Twoja główna oś czasu"),
                i("a1ab9c80", "W tej grupie dyskusyjnej nie ma jeszcze żadnych wpisów"),
                i("b32c4fb0", "Grupy dyskusyjne, do których dołączysz, będą widoczne tutaj."),
                i("bf17deda", "Zaczynajmy!"),
                i("c3fbf1da", "Tutaj najszybciej dowiesz się, co słychać na świecie. Znajdź osoby i tematy warte obserwowania."),
                i("a2515900", "Wciąż czekamy na wpisy"),
                i("je23cdb2", "W tym miejscu będą widoczne wpisy od osób z tej listy."),
                i("e69b7e02", "Zarządzaj kontami"),
                i("b6bd6ae4", "Bieżące konto"),
                i("d577bccd", function (e) {
                    return "Jeśli masz kilka kont w serwisie X, możesz je dodać, a następnie z łatwością przełączać się między nimi. Maksymalna liczba kont, które możesz dodać: " + e.maxAccounts + ".";
                }),
                i("dc65b3e5", function (e) {
                    return "Limit liczby kont został osiągnięty (" + e.maxAccounts + ").";
                }),
                i("b8045b33", function (e) {
                    return "Osiągnięto limit liczby kont (" + e.maxAccounts + ").";
                }),
                i("d075dc89", function (e) {
                    return "Osiągnięto limit liczby kont osobistych (" + e.maxAccounts + ").";
                }),
                i("bade139e", "Wyloguj się ze wszystkich kont"),
                i("ae33b982", "Czy chcesz się wylogować ze wszystkich kont?"),
                i("fa07bf68", "Dotyczy to wszystkich kont, we wszystkich zakładkach przeglądarki."),
                i("f7865ab6", "To nie jest Twoje konto?"),
                i("a35248e4", "To nie jest moje konto"),
                i("f794a67c", "To jest moje konto"),
                i("j79c0ff7", function (e) {
                    return "Usunęliśmy adres " + e.emailAddress + " z tego konta";
                }),
                i("fb46383c", "Nie możesz usunąć adresu e-mail ze swojego konta."),
                i("gcfdbc2b", function (e) {
                    return "Ten adres e-mail nie jest już powiązany z kontem " + e.screenName + " w serwisie X.";
                }),
                i("f351663c", function (e) {
                    return "@" + e.screenName;
                }),
                i("baaa89c4", function (e) {
                    return "" + e.emailAddress;
                }),
                i("h75b475c", function (e) {
                    return "@" + e.screenName;
                }),
                i("a8f0e157", "ustawień powiadomień"),
                i("h1732cde", function (e) {
                    return "" + e.emailAddress;
                }),
                i("d374a600", function (e) {
                    return "@" + e.screenName;
                }),
                i("c1d75571", "Dlaczego Twój adres e-mail był powiązany z kontem, które nie jest Twoje?"),
                i("ac71e82f", "Dowiedz się więcej"),
                i("b069d89c", "Odbiorcy"),
                i("f5a61ae6", "Treść"),
                i("a4df00c0", "Karty Analiza konta"),
                i("ac248548", "Przegląd konta"),
                i("je62f358", "Ostatnie 28 dni"),
                i("bc2f16a4", "Godziny aktywności"),
                i("d603209e", "Podział aktywności"),
                i("ac3fb6de", "Uczestnictwo w pokoju"),
                i("ie181958", "Wyniki analiz odbiorców"),
                i("j6f8d422", "Średni czas oglądania Twoich filmów."),
                i("e7479ce4", "Średni czas oglądania"),
                i("g1dfa7d0", "Średnia"),
                i("h7d28188", "Powrót do treści"),
                i("if2704e4", "Back to Live Overview"),
                i("ea928ae4", "Powrót do pokojów"),
                i("e8c07c22", "broadcast"),
                i("a4ce6e68", "Broadcast Metrics"),
                i("b2214c74", "Total number of views for this broadcast"),
                i("d4fcf83a", "Total time viewers spent watching this broadcast"),
                i("a89b0322", "Anulowano"),
                i("j3cb12ea", "Równocześni słuchacze"),
                i("b93931ee", "Liczba publikacji Twoich treści."),
                i("a1814798", "Liczba Twoich odpowiedzi na wpis."),
                i("addd5575", function (e) {
                    return "Pt" + e.date;
                }),
                i("a92e62bd", function (e) {
                    return "Pn" + e.date;
                }),
                i("g7450c57", function (e) {
                    return "So" + e.date;
                }),
                i("h08883e7", function (e) {
                    return "N" + e.date;
                }),
                i("ddb16777", function (e) {
                    return "Cz" + e.date;
                }),
                i("h8f395b3", function (e) {
                    return "Wt" + e.date;
                }),
                i("b8710b43", function (e) {
                    return "Śr" + e.date;
                }),
                i("d9c70840", "Urządzenie"),
                i("ba55e824", "Zakończono"),
                i("id276c42", "Liczba interakcji z Twoimi treściami."),
                i("j033d090", "Szacowany przychód"),
                i("efd4d7d4", "Filtruj pokoje"),
                i("a1334290", "Pierwsze 48 godzin"),
                i("gc10a3b0", "Obserwowania z biegiem czasu"),
                i("efa0f858", "Liczba zdarzeń rozpoczęcia i zakończenia obserwowania z biegiem czasu. Ta wartość nie musi odpowiadać liczbie obserwujących."),
                i("g2b06cc6", "Dane dotyczące płci mogą być wnioskowane"),
                i("b66b3baa", "godziny"),
                i("cf8a0772", "Impression to Views"),
                i("g13d8010", "Last 48 Hours"),
                i("d5627596", "Last Hour"),
                i("baf120a6", "Najmniej interakcji"),
                i("f2382014", "TRANSMISJA NA ŻYWO"),
                i("c4a7a6aa", "Live data"),
                i("a992032a", "Livestream Analytics"),
                i("ie45edda", "Transmisja strumieniowa na żywo — przegląd"),
                i("e30fc268", "Live Viewers"),
                i("bd37f68e", "Aktywność multimedialna"),
                i("fe074210", "min"),
                i("jd03a1b8", "Minutes Watched"),
                i("a20e91e8", "minutes watched"),
                i("ic2bebee", "Zmonetyzowane"),
                i("a1d642c8", "Najwięcej interakcji"),
                i("ifc4c1f8", "Liczba nowych obserwujących zdobytych za pomocą tych treści."),
                i("fff1315a", "Brak dostępnych transmisji spełniających kryteria wybranego filtru"),
                i("jbcb09a8", "Nie ma jeszcze wystarczającej ilości danych"),
                i("df846d6c", "Nie znaleziono wpisów dla wybranego zakresu czasu."),
                i("g2ba40f6", "Brak dostępnych pokojów spełniających kryteria wybranego filtru"),
                i("j44061a0", "Not available"),
                i("c4a93912", "N/A"),
                i("a6b78788", "No viewer data available"),
                i("b2438638", "łącznej liczby"),
                i("ic0399e0", "Wyświetlenia organiczne"),
                i("ja5c444a", "Okres płatności"),
                i("f04e025e", "Najwięcej równoczesnych słuchaczy"),
                i("d6d10662", "Peak Viewers: "),
                i("d147bea2", "Sprawdź ponownie później"),
                i("f0336d68", "Analizy wpisów"),
                i("g85fbd2e", "Identyfikator wpisu"),
                i("ice5c5b6", "Liczba wyświetleń tych treści przez użytkowników."),
                i("hf4f9bfe", "Link do wpisu"),
                i("bf5ebf5c", "Wpisy i odpowiedzi"),
                i("b211652e", "Wpisy z biegiem czasu"),
                i("f2efec0a", "Pre-Published"),
                i("i61e0302", "Poprzedni"),
                i("e08a706a", "Wyświetlenia promowane"),
                i("cbc99192", "Data opublikowania"),
                i("a83c2a9a", "Realtime"),
                i("e9d72896", "Nagrane"),
                i("gede4932", "Odtwórz ponownie"),
                i("h0de359c", "Liczba podań dalej tych treści."),
                i("e0568f2c", "Zaplanowane na: "),
                i("gd86baa8", "Zaplanowane rozpoczęcie"),
                i("fef3bfae", "Wybierz statystykę pomocniczą"),
                i("g7e3d2a4", "Statystyki dotyczące Pokoju"),
                i("fbc79a40", "Przegląd pokojów"),
                i("d077112a", "Statystyki pokoju"),
                i("cf3709da", "Status"),
                i("e797dc32", "Stream time: "),
                i("b649d8cc", "Tylko subskrybent"),
                i("j9282130", "Broadcast thumbnail"),
                i("g629b8b0", "Timed Out"),
                i("eb87323c", "This shows analytics data for the selected time period since the livestream happened."),
                i("i6a75722", "Time Range"),
                i("c602f5b8", "Suma"),
                i("b35e68ae", "Łączna liczba uczestników"),
                i("h78ee79a", "Łączna liczba wyświetleń powtórki"),
                i("e3efaed0", "Typ"),
                i("c37993e2", "Zakończenia obserwowania"),
                i("b1ed35d0", "Unique Viewers"),
                i("bfad9306", "Nieznane"),
                i("b5a58f36", "Untitled Broadcast"),
                i("i70f5278", "Data przesłania:"),
                i("a98b58b6", "Zweryfikowani obserwujący"),
                i("a5de67ca", "Liczba obserwujących, którzy zweryfikowali swoje konta."),
                i("g3367ff4", "Obejrzana część filmu"),
                i("a7b48b36", "Odsetek wyświetleń filmów, podczas których obejrzano cały film."),
                i("a2580f2a", "Liczba pełnych wyświetleń"),
                i("ff95a9cc", "Identyfikator filmu"),
                i("a97e358e", "Link do filmu");
            i("e10e8b46", "Pokazywane są tylko filmy z ostatnich 100 dni."),
                i("ba37f6da", "Przegląd filmu"),
                i("f19846b2", "Miniatura filmu"),
                i("ccd6f4a8", "Tytuł filmu"),
                i("c8410542", "Liczba wyświetleń Twojego filmu."),
                i("a532072a", "Oglądający"),
                i("d9508ab0", "wyświetl."),
                i("d9f9dec0", "Wyświetl pokój"),
                i("h0c1f37a", "Wyświetl analizy pokoju"),
                i("e41fffbc", "Łączny czas oglądania Twoich filmów."),
                i("if2909ba", "Czas oglądania"),
                i("i0e5bf4c", "Twoje filmy"),
                i("ed99baea", "Wczesny dostęp do wersji Beta"),
                i("gf898b70", "Wyszukiwanie zaawansowane"),
                i("d2a43a7a", 'zawiera oba wyrazy „startup" i „ai”'),
                i("a8584698", "startup ai"),
                i("jb6f9292", "zawiera dokładną frazę „startup ai”"),
                i("j8ee77c4", '"startup ai"'),
                i("d0480758", 'zawiera wyraz „startup" lub „ai” (albo oba te wyrazy)'),
                i("f0048fa2", "startup OR ai"),
                i("da0df186", "zawiera wyraz „ai”, ale nie „startup”"),
                i("f2f463ea", "-startup ai"),
                i("a10a357e", "zawiera wyraz „ai” i ma co najmniej 50 polubień"),
                i("ca8ed1e8", "ai min_faves:50"),
                i("i945a3f2", "zawiera wyraz „ai” oraz adres URL, w którym znajduje się wyraz „grok”"),
                i("a9348088", "ai url:grok"),
                i("b5c3cdbc", "wzmianka dotycząca konta „grok” w serwisie X"),
                i("e2634592", "@grok"),
                i("i88ba038", "Alert wyłączony"),
                i("j2cb0214", "Alert włączony"),
                i("ae852cd0", "Co poniedziałek możesz otrzymywać powiadomienie z podsumowaniem zmian w tym trendzie."),
                i("d1d8633e", "Alerty funkcji Radar"),
                i("g096d0cc", "Wszystkie zapytania"),
                i("e77035aa", "Wyczyść wyszukiwanie"),
                i("a895ec64", "Czy na pewno chcesz usunąć to zapytanie?"),
                i("a4f5e431", function (e) {
                    return "Usunięto „" + e.name + "”";
                }),
                i("db28b535", function (e) {
                    return "Usuń „" + e.name + "”";
                }),
                i("bcf89b8a", "Edytuj zapytanie"),
                i("f0002e72", "Przejrzyj wyniki"),
                i("b0924d7a", "Nie można utworzyć zapytania. Spróbuj ponownie."),
                i("cfd731ee", "Nie można usunąć zapytania. Spróbuj ponownie."),
                i("g08bff82", "Nie można wyłączyć alertu. Spróbuj ponownie."),
                i("fa1fd798", "Nie można włączyć alertu. Spróbuj ponownie."),
                i("ia7dce48", "Nie można wygenerować zapytania. Spróbuj ponownie."),
                i("d494d4aa", "Nie można zaktualizować zapytania. Spróbuj ponownie."),
                i("i4a49588", "Globalny rynek miejski"),
                i("c0799860", "Dzień"),
                i("b43679d2", "Godzina"),
                i("f1fce85e", "Minuty"),
                i("ea3e0ec4", "Rynek"),
                i("d8d9aec2", "Osiągnięto maksymalną liczbę zapytań"),
                i("c9aa246e", "Nowe zapytanie"),
                i("b9b7a50e", "W każdej chwili możesz dostosować kryteria wyszukiwania, aby otrzymywać aktualne informacje"),
                i("i9a09bb6", "Utwórz zapytanie, a funkcja Radar będzie śledzić aktualizacje w czasie rzeczywistym"),
                i("da20008c", "Brak dostępnych trendów. Spróbuj rozszerzyć kryteria wyszukiwania."),
                i("e78ca8c6", "Spróbuj ponownie później"),
                i("ce3216ec", "Zapytanie"),
                i("ef609bb8", "Co się dzieje w serwisie X?"),
                i("a636a738", "Poproś o wykonanie kolejnych czynności..."),
                i("d92ec304", "Nie znaleziono zapytania"),
                i("bbf29e20", "Resetuj wybrane opcje"),
                i("ie3321ea", "$NVDA (sprzedaż OR zakup)"),
                i("cf223996", "Podsumowanie"),
                i("a27ccab8", "Aplikacja do wszystkiego"),
                i("i66136aa", "Najlepsze"),
                i("e7c44382", "Unikatowi użytkownicy"),
                i("d559e5b8", "Zapytanie bez tytułu"),
                i("i1d9be88", "Używanie operatorów wyszukiwania zaawansowanego"),
                i("ae9f604c", "Powiązanie"),
                i("a7d2d8f4", "Pokazuj tylko konta powiązane"),
                i("je21ffbe", "Liczba obserwujących"),
                i("i8d9797c", "Pełny profil"),
                i("a36bebf2", "Maksimum"),
                i("i5ef8b4a", "Maksymalna liczba obserwujących"),
                i("fcf0ec1c", "Minimum"),
                i("ccc0bbc6", "Minimalna liczba obserwujących"),
                i("je1bd63a", "Odblokuj możliwości serwisu X, aby znajdować utalentowanych pracowników, potencjalnych klientów i partnerów strategicznych"),
                i("i6766078", "Wyszukuj najbardziej utalentowanych pracowników, potencjalnych klientów oraz partnerów"),
                i("d509bbd4", "Znajduj osoby w serwisie X"),
                i("a5afaf54", "Resetuj"),
                i("i9006fb0", "Resetuj wszystko"),
                i("fa598a82", "Wyniki"),
                i("g3688a48", "Wybierz opcję"),
                i("ab5a91a4", "Użytkownik"),
                i("cef20fd0", "Weryfikacja"),
                i("a2b286b0", "Promuj swoje oferty pracy, produkty oraz przekaz."),
                i("e2895a38", "Kredyty reklamowe o wartości do 12 tys. USD"),
                i("becba496", "Kredyty reklamowe są dostępne w ramach oferty ograniczonej czasowo."),
                i("ded395ae", "Wszystkie potrzebne firmie analizy w jednym miejscu"),
                i("a47a20d4", "Zaawansowane analizy"),
                i("b56d3ec6", "Wszystkie organizacje i konta powiązane otrzymują subskrypcję Premium+ z dostępem do Groka 3"),
                i("ie663a1a", "Szybsza pomoc i eskalacje dzięki dedykowanemu zespołowi ds. obsługi klienta"),
                i("j7f75bec", "Pomoc techniczna VIP"),
                i("ebf5ec26", "Wkrótce"),
                i("eeb424e2", "Stwórz swoją historię."),
                i("ab62db18", "Zdobądź odbiorców."),
                i("j2c9bc4e", "Wyróżniaj się za pomocą złotego znaczka i dodaj konta powiązane, aby umacniać pozycję swojej firmy na rynku."),
                i("e7930f82", "Wyróżnij się z tłumu"),
                i("e77ea57e", "Najbardziej rozbudowane narzędzia do przyspieszania sprzedaży i zatrudniania najlepszych ludzi oraz dostęp do ekskluzywnych spostrzeżeń rynkowych."),
                i("a558a254", "Rozwijaj się w serwisie X dzięki programowi Zweryfikowane Organizacje"),
                i("b099f256", "Trendy rynkowe i opinia publiczna dostępne po naciśnięciu przycisku dzięki funkcji Radar."),
                i("ecb7fa02", "Analizy biznesowe"),
                i("cb5faa2a", "Skorzystaj z kredytów reklamowych, aby dotrzeć do najinteligentniejszych ludzi na całej planecie."),
                i("c67b260c", "Promocja oferty pracy"),
                i("if48b5c2", "Przesyłaj i promuj oferty pracy, aby pokazać je milionom osób bezpośrednio w serwisie X."),
                i("aa0d60aa", "miesiąc"),
                i("cebfdb52", "Organizacje"),
                i("i9b6fcbc", "Używaj funkcji Wyszukiwanie osób, aby znajdować inżynierów, liderów sprzedaży i twórców treści oraz kontaktować się z nimi. "),
                i("a6b5c3f0", "Znajdź najlepszych ludzi"),
                i("a51acce8", "Obniż poziom do planu Basic"),
                i("ie132f40", "Podnieś poziom, aby zachować plan Pełny dostęp"),
                i("b0d26232", "ZAPISZ"),
                i("f563b353", function (e) {
                    return "OFERTY WYGASAJĄ " + e.endDate;
                }),
                i("b29b2e69", function (e) {
                    return e.percentOff + "% zniżki do " + e.endDate;
                }),
                i("j3cfae29", function (e) {
                    return e.discountedCost + " rocznie przez pierwszy rok. Następnie " + e.baseCost + " rocznie.";
                }),
                i("jb74aea4", "Każde dodatkowe konto powiązane kosztuje 50 USD na nazwę użytkownika miesięcznie, a kredyty reklamowe podlegają ograniczeniom."),
                i("fc9fc856", "Każde dodatkowe konto powiązane kosztuje 600 USD na nazwę użytkownika rocznie, a kredyty reklamowe podlegają ograniczeniom."),
                i("fc785aec", "Uzyskaj subskrypcję Basic"),
                i("edf32072", "Wszystkie funkcje wersji Premium+ oraz:"),
                i("b3caf146", "Złota odznaka zweryfikowanego użytkownika"),
                i("a1dbf70c", "Bezpłatny kredyt reklamowy w wysokości 200 USD miesięcznie"),
                i("i2a2286c", "Bezpłatny kredyt reklamowy w wysokości 2500 USD"),
                i("e8d0fd04", "Radar — wersja Basic"),
                i("cf038828", "Dedykowana pomoc techniczna"),
                i("efd56302", "Dodaj konta powiązane do swojej strony"),
                i("bc1bb6aa", "Bezpłatny kredyt reklamowy w wysokości 1000 USD miesięcznie"),
                i("e1669560", "Bezpłatny kredyt reklamowy w wysokości 12 000 USD"),
                i("hb973da4", "Radar — wersja Pełny dostęp"),
                i("g444c82e", "Wczesny dostęp do funkcji dla przedsiębiorstw"),
                i("a1bc0bcf", function (e) {
                    return e.cost + " (rozliczenie roczne)";
                }),
                i("i0f58dac", "Do ceny każdego planu należy doliczyć odpowiednie podatki i opłaty."),
                i("je182d8a", "Przedsiębiorstwo"),
                i("ge609bd6", "Skontaktuj się z działem sprzedaży"),
                i("je6d2aec", "Modułowy cennik"),
                i("ed33b888", "Wyszukiwanie osób"),
                i("ade522c4", "Spostrzeżenia"),
                i("h551f266", "Kredyty reklamowe"),
                i("c74f7856", "Pakiety kont powiązanych"),
                i("b9b41f7a", "Optymalizacja wyszukiwania"),
                i("b1f368ee", "Dedykowana pomoc techniczna"),
                i("j189c5b2", "Wszystkie funkcje wersji Pro oraz:"),
                i("i7f4b58e", "Niestandardowe"),
                i("h45fd8ae", "Uzyskaj subskrypcję Pełny dostęp"),
                i("f1c3b32c", "Wszystkie funkcje wersji Basic oraz:"),
                i("f4307806", "Popularne"),
                i("ce7c21de", "Rocznie"),
                i("a21a64f6", "„X dla Firm to fantastyczna oferta! Zatrudniliśmy świetnych ludzi dzięki narzędziu do wyszukiwania talentów”."),
                i("dbb3fc54", "Współzałożyciel i prezes"),
                i("c1600210", "„X dla Firm nie wymaga skomplikowanej obsługi. Pomógł nam zabezpieczyć klientów dzięki możliwości dostępu do spostrzeżeń rynkowych”."),
                i("fb3e127a", "Ograniczona czasowo oferta noworoczna"),
                i("a5fee980", "Otrzymasz 30% zniżki na plany roczne i do 12 000 USD bezpłatnego kredytu reklamowego, jeśli zasubskrybujesz przed"),
                i("c9051cac", "dni"),
                i("ie035790", "s"),
                i("cbd3dfaa", "Wypróbuj wersję Beta"),
                i("h260121e", "Prezentuj najlepsze stanowiska swoim odbiorcom."),
                i("ae0ad604", "Strony dotyczące pracy"),
                i("cbd4ba6e", "Znajduj największe talenty i kontaktuj się z nimi"),
                i("b71927b2", "Nieograniczona liczba wpisów z ofertami pracy"),
                i("a0b5b7d4", "Odblokuj profilowanie AI za pomocą naszego modelu wydajnego reklamowania."),
                i("aa3f0e90", "Promuj oferty pracy, używając profilowania AI"),
                i("hc67be9e", "Rozpocznij"),
                i("c9a67f9e", "Rozpocznij rekrutację"),
                i("jd937cda", "Kontaktuj się z milionami odpowiednich kandydatów, korzystając z usługi Rekrutacja w serwisie X. Ta usługa umożliwia synchronizowanie swoich oferty pracy, tworzenie niestandardowych stron dotyczących pracy oraz skonfigurowanie promocji ofert pracy w celu wyświetlania sprofilowanych reklam na osi czasu."),
                i("d92d2632", "Najlepsza platforma do rekrutacji największych talentów"),
                i("c10bee94", "Zgłoszenia miesięcznie"),
                i("ib69d218", "250 tys. lub więcej"),
                i("i953576c", "Firmy rekrutujące"),
                i("j395b846", "10 tys. lub więcej"),
                i("g48a59c2", "Użytkownicy"),
                i("j228841a", "500 mln lub więcej"),
                i("da570714", "Integracje z systemami ATS"),
                i("h25a3132", "Do 24 000 USD w kredytach reklamowych na promocję ofert pracy"),
                i("f25a2004", "Korzyści z subskrypcji Premium+"),
                i("c237b78e", "Powiązania dla zespołu ds. rekrutacji"),
                i("fc3d58fe", "Do 12 000 USD w kredytach reklamowych na promocję ofert pracy"),
                i("eb5f060c", "Obserwuj"),
                i("a19cf46f", function (e) {
                    return "Chcesz przestać obserwować użytkownika @" + e.screenName + "?";
                }),
                i("e4c91b70", "Wpisy tego użytkownika nie będą już pojawiać się na osi czasu Dla Ciebie. Nadal możesz przeglądać profil tego użytkownika, o ile jego wpisy nie są chronione."),
                i("j650c8dc", "Odrzucić prośbę o obserwowanie?"),
                i("c02f8de1", function (e) {
                    return "Spowoduje to anulowanie Twojej prośby o zgodę na obserwowanie, a użytkownik @" + e.screenName + " nie będzie już jej widział.";
                }),
                i("e2ee95a1", function (e) {
                    return "Data dołączenia: " + e.date;
                }),
                i("d64fef58", "Jeszcze nie opublikowano"),
                i("e2a098dc", "Sortuj według"),
                i("c5709148", "Jest wyświetlana maksymalna liczba wpisów (1000)"),
                i("ca5e57bd", function (e) {
                    return "Wpis " + e.noun;
                }),
                i("d16c1ab6", "Najnowsze"),
                i("f0a28956", "Najmniej ostatnich"),
                i("h06df79a", "Najwięcej wyświetleń"),
                i("c44744e6", "Najmniej wyświetleń"),
                i("j6b98664", "Najwięcej polubień"),
                i("a669f95c", "Najmniej polubień"),
                i("a0c66496", "Najwięcej odpowiedzi"),
                i("h45174fe", "Najmniej odpowiedzi"),
                i("ea20f92a", "Najwięcej podanych dalej wpisów"),
                i("c9a63566", "Najmniej podanych dalej wpisów"),
                i("b40d33e4", "Rozwinięcia szczegółów"),
                i("gedf636e", "Kliknięcia adresu URL"),
                i("bbc12690", "Kliknięcia tagów"),
                i("g7ede992", "Kliknięcia bezpośrednich linków"),
                i("f5210bae", "Link"),
                i("b1f77a7c", "Eksportuj dane"),
                i("j62d2af4", "Przegląd wpisu"),
                i("dc70a568", "Analiza wpisu"),
                i("j9f65603", function (e) {
                    return "12:00" + e.date;
                }),
                i("d6ad20d7", function (e) {
                    return "04:00" + e.date;
                }),
                i("d9bcb257", function (e) {
                    return "08:00" + e.date;
                }),
                i("b83b49f1", function (e) {
                    return "24:00" + e.date;
                }),
                i("h52ae229", function (e) {
                    return "16:00" + e.date;
                }),
                i("i07e47b9", function (e) {
                    return "20:00" + e.date;
                }),
                i("h7cd94fe", "Rozmyty wykres liniowy"),
                i("b10621d4", "Przeglądaj wszystkie swoje statystyki"),
                i("c23def7a", "Liczba interakcji"),
                i("jc14a9e8", "Wydatki"),
                i("d16b5a18", "Łączne wydatki na reklamy"),
                i("g01559c6", "Wskaźniki z 7 ostatnich dni"),
                i("ddc8d458", "Odblokuj dane historyczne"),
                i("j74eab48", "Zaawansowane analizy są dostępne wyłącznie dla posiadaczy subskrypcji X Premium"),
                i("i02166f6", "Poznaj swoich odbiorców"),
                i("cef977e4", "Eksportuj swoje dane"),
                i("f88e624e", "Zaktualizowano rozmowę"),
                i("e15e5637", function (e) {
                    return "Ostatni" + n(e.count, "e " + e.count + " godz.", "e " + e.count + " godz.", "a godzina", "e " + e.count + " godz.");
                }),
                i("h5ab8b0e", "Osoby obserwowane przez Twoich obserwujących"),
                i("a0f01bca", "Kliknij, aby zmienić przedział czasowy"),
                i("he30b16c", "Opcja „Osoby obserwowane przez innych” rozszerza zakres wyświetlanych treści – będziesz widzieć artykuły najczęściej udostępniane przez osoby, które obserwujesz, oraz osoby, które obserwują Twoi obserwujący."),
                i("b0589550", "Przeglądaj więcej treści"),
                i("b60e4f78", "OK"),
                i("e950f6e0", "W Twojej sieci nie udostępniono jeszcze żadnych artykułów."),
                i("e7dcfb81", "więcej kont"),
                i("h965157c", "Ta strona nie jest obsługiwana."),
                i("cd388852", "Odwiedź profil autora w najnowszej wersji systemu X, aby wyświetlić tę zawartość."),
                i("abebdfae", "Masz dostęp tylko do statystyk dotyczących Pokojów, których jesteś hostem lub współhostem."),
                i("fcb205da", "Słuchacze transmisji na żywo"),
                i("jb088200", "Nagrywanie powtórek"),
                i("if65328a", "Słuchacze"),
                i("a1a0e6d8", "Obserwuj hosta"),
                i("a3c4e396", "Przestań obserwować hosta"),
                i("j58e7b00", "Zobacz profil"),
                i("eca4e32a", "Zobacz szczegóły"),
                i("hd908df2", "Pokoje na żywo"),
                i("c5d40fe2", "Każdy"),
                i("a8df1d34", "Włącz wideo"),
                i("if410292", "Poznaj Pokoje"),
                i("i43fdce9", function (e) {
                    return "Dodaj tematy (" + e.count + "/" + e.total + ")";
                }),
                i("e32e99ec", "O czym chcesz porozmawiać?"),
                i("e93f3c2a", "Nagrywaj Pokój"),
                i("b701d610", "Zaplanowany Pokój został usunięty"),
                i("b028792d", function (e) {
                    return "Zarządzaj zaplanowanymi Pokojami (" + e.count + ")";
                }),
                i("e9b73da8", "Zaplanuj Pokój"),
                i("cdf630be", "Zacznij teraz"),
                i("acd1bcb0", "Kto może dołączyć?"),
                i("h07146a2", "Kto może mówić?"),
                i("h61d92b0", "Usuń zaplanowany Pokój"),
                i("a488f2eb", function (e) {
                    return "Wybrano " + e.count + " z " + e.total;
                }),
                i("d2dfe80d", function (e) {
                    return "Pokój zacznie działać w dniu " + e.date + " o godz. " + e.time;
                }),
                i("aef95393", function (e) {
                    return "Uruchomienie istniejącego Pokoju jest zaplanowane na " + e.date + " o godz. " + e.time;
                }),
                i("a7069f2e", "Edytuj szczegóły"),
                i("a15f06fc", "Zaplanowane Pokoje"),
                i("f6cfa3fe", "Nie możesz zaplanować rozpoczęcia działania Pokoju w przeszłości."),
                i("a8f71a2b", function (e) {
                    return "Nie możesz zaplanować rozpoczęcia działania Pokoju z wyprzedzeniem większym niż " + e.days + " dni.";
                }),
                i("ae092f6c", "Nie można usunąć zaplanowanego Pokoju."),
                i("jd7f0030", "Zaplanowany Pokój został zaktualizowany"),
                i("a26da034", "Zapisz zmiany"),
                i("b3633046", "Wybierz grupę dyskusyjną"),
                i("ce447fcb", function (e) {
                    return e.count + " słuchacz" + n(e.count, "e", "y", "", "y");
                }),
                i("ef7da97f", function (e) {
                    return e.count + " słucha";
                }),
                i("a065e7e7", function (e) {
                    return "Obecnie trwa: " + e.spaceTitle;
                }),
                i("hd5e7b21", function (e) {
                    return e.date + ": " + e.spaceTitle;
                }),
                i("f651e375", function (e) {
                    return "Ten Pokój zakończył się: " + e.spaceTitle;
                }),
                i("i8478ae7", function (e) {
                    return "Odtwórz nagranie: " + e.spaceTitle;
                }),
                i("b2a94e93", function (e) {
                    return e.hostSpace + " · " + e.descriptionListening + " · " + e.descriptionGeneric;
                }),
                i("f6432ce5", function (e) {
                    return e.hostSpace + " · " + e.descriptionGeneric;
                }),
                i("e4e811fc", "Łączenie..."),
                i("aadbc747", function (e) {
                    return "współhost" + n(e.hostCount, "ów", "ów", "", "ów");
                }),
                i("hbd6035f", function (e) {
                    return "Mówc" + n(e.speakerCount, "y", "ów", "a", "ów");
                }),
                i("if420852", "Odtwórz nagranie"),
                i("f7dc3b1c", "Ten Pokój zakończył się"),
                i("c1d15dc0", "Wygląda na to, że ten Pokój został zamknięty."),
                i("g3e2f3a6", "Słuchaj anonimowo"),
                i("cd64d43e", "Dołącz bezpośrednio jako mówca"),
                i("jcdc32f0", "Zacznij słuchać"),
                i("a0cee16a", "Zacznij mówić"),
                i("bf3daa48", "Zacznij słuchać anonimowo"),
                i("f9305f48", "Połącz ponownie"),
                i("e51df2e6", "Na początku Twój mikrofon będzie wyciszony"),
                i("h114ff6c", "Nie możesz dołączyć do tego Pokoju, ponieważ znajdujesz się już w Pokoju."),
                i("d7fe2d7e", "Nie możesz połączyć się ponownie z tym Pokojem, ponieważ znajdujesz się już w Pokoju."),
                i("e61bdea4", "Host nagrywa rozmowę w tym pokoju. Wszystkie mówiące osoby będą słyszalne na dostępnym publicznie nagraniu."),
                i("d0ebf4f7", "Dowiedz się więcej"),
                i("d782b808", "Subskrybowanie się opłaca"),
                i("i7f83b8d", "Dowiedz się więcej"),
                i("fc962610", "Wyszukaj nazwę Pokoju lub hosta"),
                i("e5b5f091", function (e) {
                    return "Brak Pokoi powiązanych z tematem: „" + e.searchQuery + "”";
                }),
                i("g5812140", "Może chcesz utworzyć taki Pokój?"),
                i("e8fe1ecb", function (e) {
                    return "Nie znaleziono Pokoi dla zapytania „" + e.searchQuery + "” (" + e.section + ")";
                }),
                i("c432d2b2", "Wyszukaj Pokój"),
                i("d39e8b30", "Dodaj uwagę"),
                i("dc7a6625", function (e) {
                    return "Piszesz jako " + e.displayAlias;
                }),
                i("g17e4064", "Twoja uwaga zostanie opublikowana z użyciem Twojego aliasu w programie Uwagi Społeczności i nie będzie powiązana z Twoim profilem w serwisie X."),
                i("d9b09ee8", "Zadbaj o precyzję wypowiedzi — wymagane jest podawanie linków do źródeł zewnętrznych."),
                i("b7476596", "Zadbaj o precyzję wypowiedzi i w miarę możliwości podaj łącza do źródeł zewnętrznych."),
                i("df6c8292", "Twoje objaśnienie"),
                i("ecb4d20c", "Twoja uwaga nie została zapisana. Upewnij się, że nie napisano już uwagi do tego wpisu i spróbuj ponownie."),
                i("eb5b4a12", "Uwagi Społeczności – aliasy"),
                i("ja0ee360", "Wybierz alias"),
                i("f7b7c250", "Wybierz alias, którym posługiwać będziesz się w ramach programu Uwagi Społeczności, by zachować anonimowość"),
                i("c6382384", "Dlaczego w programie Uwagi Społeczności posługujemy się aliasami?"),
                i("j48ab594", "Wspieraj nas prywatnie"),
                i("bc2399a0", "Pisz i oceniaj uwagi bez ujawniania swojej tożsamości w serwisie X."),
                i("d939cf16", "Skup się na treści"),
                i("a56f0c32", "Aliasy pomagają zapobiegać uprzedzeniom. Pozwalają uczestnikom skupić się na treściach, a nie ich autorach."),
                i("d17c59e4", "Wszyscy są nadal odpowiednio rozliczani"),
                i("i719f8e2", "Masz dostęp do historii uczestników i wszyscy są rozliczani na podstawie zdobytych ocen."),
                i("a96bb564", "Wybierz alias, którym chcesz posługiwać się w programie Uwagi Społeczności"),
                i("afcdcf84", "Ten alias będzie Twoją tożsamością podczas pisania i oceniania uwag w ramach programu Uwagi Społeczności. Nie jest on skojarzony z Twoim profilem w serwisie X."),
                i("f83d0446", "Twój alias został zapisany."),
                i("ed0e6b2e", "Zacznij od oceniania uwag"),
                i("if4c5e06", "Witamy w programie Uwagi Społeczności!"),
                i("g880a78a", "Zacznij od oceniania uwag"),
                i("d1be2236", "W ramach programu Uwagi Społeczności uczestnicy tacy jak Ty pomagają ustalić, które uwagi mogą być pomocne dla wszystkich użytkowników."),
                i("af9f2b78", "Śledź swoją wartość ratingową"),
                i("af68afc8", "Twoja wartość wzrasta za każdym razem, gdy Twoja ocena decyduje o statusie uwagi."),
                i("fb5c5d42", "Zyskaj możliwość dodawania uwag"),
                i("a1e58cdc", "Gdy Twoja wartość ratingowa sięgnie 5, będziesz mieć możliwość dodawania własnych uwag w programie Uwagi Społeczności."),
                i("j5f112b4", "Dwie z niedawno dodanych przez Ciebie uwag mają status niepomocnych."),
                i("ac34c5e8", "Dostateczna liczba uczestników programu, w tym użytkownicy, którzy nie zgadzali się ze sobą w swoich wcześniejszych ocenach, zgodziła się co do tego, że dwie z Twoich uwag są niepomocne. Zapoznaj się z ich opinią:"),
                i("ib7886d0", "Zobacz te uwagi na swoim profilu"),
                i("b0a7d360", "Wkrótce Twoja możliwość dodawania uwag może zostać zablokowana."),
                i("e473f876", "Uczestnicy programu Birdwatch, których ostatnie trzy na pięć uwag uzyskały status niepomocnych, mają chwilowo zablokowaną możliwość dodawania uwag."),
                i("ef490ae8", "Brak źródeł lub nierzetelne źródła"),
                i("bf3dc462", "Źródła nie potwierdzają treści uwagi"),
                i("heb35e12", "Błędne informacje"),
                i("ib117532", "Nękanie lub nadużycie"),
                i("a7bc3192", "Cytuje źródła wysokiej jakości"),
                i("a26f8dc2", "Łatwo ją zrozumieć"),
                i("cbdef06c", "Bezpośrednio odnosi się do argumentów podanych we wpisie"),
                i("faa5f9e8", "Zawiera przydatny kontekst"),
                i("gf3b38f4", "Neutralny/bezstronny język"),
                i("a50327ea", "Uwaga nie jest potrzebna w tym wpisie"),
                i("h7c59ea2", "Opinia lub spekulacja"),
                i("d60c0064", "Zawiera literówki lub niepoprawny język"),
                i("e06416ca", "Bez związku z tematem"),
                i("cff1aa8c", "Agresywny lub stronniczy język"),
                i("c5d55592", "Zawiera ważne informacje lub kontekst"),
                i("f3e6f0aa", "Zawiera ważne informacje"),
                i("hc2b6a7e", "Jest obiektywna i/lub empatyczna"),
                i("bbe8b4ac", "Wyraża opinię, spekulację lub ma stronniczy charakter"),
                i("dd1f17ea", "Nie na temat"),
                i("if966b54", "Nieaktualne informacje"),
                i("fdc2060a", "Potrzebujesz wyższego wyniku ratingowego, aby uzyskać możliwość pisania uwag."),
                i("edd80858", "Wyświetl swój profil i wynik ratingowy"),
                i("eec24ff6", "Zacznij oceniać"),
                i("eb9dc3ec", "Uczestnicy programu, tacy jak Ty, pomagają ustalić, które uwagi są pomocne i powinny być wyświetlane jako kontekst wpisów, aby dostarczać użytkownikom przydatnych informacji."),
                i("f2f61788", "Zyskaj możliwość pisania uwag"),
                i("ca7e11e6", "Gdy Twoja wartość ratingowa sięgnie 5, będziesz mieć możliwość dodawania uwag w ramach programu Uwagi Społeczności."),
                i("e7beb100", "Zobacz swój profil i informacje zwrotne"),
                i("fd02e290", "Wyświetl wszystkie reguły"),
                i("ee7b8050", "Twoja możliwość dodawania uwag została tymczasowo zablokowana."),
                i("b8cc2e9a", "Twoje ostatnie uwagi zostały ocenione jako niepomocne, więc tymczasowo zablokowaliśmy Ci możliwość pisania uwag."),
                i("f6c8613e", "Informacja zwrotna dotycząca Twoich uwag:"),
                i("fd5c2282", "Więcej wskazówek dotyczących uwag"),
                i("c23e67ea", "Odblokuj możliwość pisania uwag"),
                i("i0e66c5a", "Wybierz jedną z opcji"),
                i("j8e3e3be", "Wybierz co najmniej jedną z opcji"),
                i("f1e851f0", "Dodaj uzasadnienie"),
                i("ff5dcac8", "Uzasadnienie jest za długie"),
                i("b47b5a16", "Wszystkie pola są wymagane. Odpowiedz na wszystkie pytania."),
                i("g9cffe16", "Twoja uwaga nie zawiera informacji o źródle"),
                i("bfa9e276", "Napisz ponownie uwagę, tak aby była pomocna w przypadku wszystkich wpisów zawierających ten obraz albo sprawdź swoją odpowiedź na pierwsze pytanie w tym formularzu"),
                i("ja36d83e", "Napisz ponownie uwagę, tak aby była pomocna w przypadku wszystkich wpisów zawierających ten film albo sprawdź swoją odpowiedź na pierwsze pytanie w tym formularzu"),
                i("i6488a04", "Napisz ponownie uwagę, tak aby była pomocna w przypadku wszystkich wpisów zawierających te multimedia albo sprawdź swoją odpowiedź na pierwsze pytanie w tym formularzu"),
                i("j6e12b24", "Zawiera edytowane zdjęcie lub film"),
                i("eda68484", "Zdjęcie zostało poddane obróbce cyfrowej"),
                i("e198eb8c", "Napisz uwagę zawierającą kontekst, który Twoim zdaniem powinien zostać dodany do tego filmu jako informacja dla innych użytkowników."),
                i("a9803d44", "Napisz uwagę zawierającą informacje kontekstowe, które Twoim zdaniem powinny zostać dodane do tego zdjęcia."),
                i("j7ddf18a", "Napisz uwagę zawierającą kontekst, który Twoim zdaniem powinien być wyświetlany we wszystkich wpisach zawierających ten link jako informacja dla innych użytkowników."),
                i("g3874520", "Napisz uwagę zawierającą kontekst, który Twoim zdaniem powinien zostać dodany do tego wpisu jako informacja dla innych użytkowników."),
                i("ac1141aa", "Napisz uwagę, aby pomóc innym współużytkownikom w programie Uwagi Społeczności zrozumieć, dlaczego ten film nie wprowadza w błąd lub nie wymaga dodatkowego kontekstu."),
                i("f99ebcfc", "Napisz uwagę, aby inni uczestnicy programu Uwagi Społeczności mogli zrozumieć, dlaczego to zdjęcie nie wprowadza w błąd lub nie wymaga dodatkowego kontekstu."),
                i("h641949e", "Napisz uwagę, aby pomóc innym współużytkownikom w programie Uwagi Społeczności zrozumieć, dlaczego ten wpis nie wprowadza w błąd lub nie wymaga dodatkowego kontekstu."),
                i("c926cff6", "Biorąc pod uwagę aktualne informacje, uważam, że ten wpis..."),
                i("e0ef7a2c", "Biorąc pod uwagę aktualne informacje, uważam, że ten obraz..."),
                i("g491d33a", "Biorąc pod uwagę aktualne informacje, uważam, że ten film..."),
                i("b253e462", "Na podstawie aktualnie dostępnych dowodów uważam, że ta wskazywana przez link strona jest prawdopodobnie..."),
                i("b1b2d004", "wprowadza w błąd i wymaga dodania informacji kontekstowych"),
                i("ha9655c2", "Nie wprowadza w błąd"),
                i("ebd2de06", "Dlaczego uważasz, że ten wpis może wprowadzać w błąd?"),
                i("i865abe8", "Dlaczego uważasz, że to zdjęcie może wprowadzać w błąd?"),
                i("add096c6", "Dlaczego uważasz, że ten film może wprowadzać w błąd?"),
                i("eb604e2e", "Dlaczego uważasz, że wskazywana przez ten link strona może wprowadzać w błąd?"),
                i("c33bc7d4", "Zawiera błąd rzeczowy"),
                i("aadb676c", "Zawiera nieaktualne informacje, które mogą wprowadzać w błąd"),
                i("g21a0ef4", "Wprowadza w błąd lub pomija ważny kontekst"),
                i("daf354de", "Przedstawia niesprawdzoną teorię jako fakt"),
                i("d1d2ef84", "To żart lub satyra, które można błędnie uznać za prawdziwą informację"),
                i("bfee6064", "Dlaczego uważasz, że ten wpis nie wprowadza w błąd?"),
                i("dfd1f7f0", "Dlaczego uważasz, że to zdjęcie nie wprowadza w błąd?"),
                i("b8623176", "Dlaczego uważasz, że ten film nie wprowadza w błąd?"),
                i("ec66e3fc", "Dlaczego uważasz, że wskazywana przez ten link strona nie wprowadza w błąd?"),
                i("g228df26", "Przedstawia teorię zgodną ze stanem faktycznym"),
                i("h890a3f2", "Był odpowiedni w chwili udostępnienia, ale teraz jest nieaktualny"),
                i("hf607a0a", "Jest oczywistą satyrą/żartem"),
                i("j6ac7742", "Wyraża subiektywną opinię"),
                i("b1d82aae", "Czy załączone linki prowadzą do źródeł, które większość osób uznałaby za godne zaufania?"),
                i("ae859ee0", "Twoja uwaga dotyczy wpisu czy obrazu?"),
                i("ba84e7f8", "Twoja uwaga dotyczy wpisu czy filmu?"),
                i("ibb784c6", "Dotyczy tego konkretnego wpisu"),
                i("a21ecb8c", "Dotyczy obrazu w tym wpisie i powinna występować w każdym wpisie zawierającym ten obraz"),
                i("he0ca8da", "Dotyczy filmu w tym wpisie i powinna występować w każdym wpisie zawierającym ten film"),
                i("d0bf8d34", "Twoja uwaga dotyczy wpisu czy linku?"),
                i("db370b9a", "Twoja uwaga dotyczy wpisu, obrazu czy linku?"),
                i("c35bf10e", "Twoja uwaga dotyczy wpisu, filmu czy linku?"),
                i("d96ce0d2", "Ta uwaga została napisana w taki sposób, aby była pomocna we wszystkich wpisach zawierających ten obraz."),
                i("a1fb516c", "Ta uwaga została napisana w taki sposób, aby była pomocna we wszystkich wpisach zawierających ten film."),
                i("be46a61e", "Ta uwaga została napisana w taki sposób, aby była pomocna we wszystkich wpisach zawierających te multimedia."),
                i("ied1c2c2", "Ta uwaga jest dość mocno związana z tym wpisem, przez co może być nietrafna w przypadku innych wpisów."),
                i("gb2433df", function (e) {
                    return "" + e.noteMatchUrl;
                }),
                i("gdfbdd93", function (e) {
                    return " wszystkich " + e.matchCount + " wpisów";
                }),
                i("d7959c4d", function (e) {
                    return " wszystkich " + e.matchCount + " wpisów";
                }),
                i("ff5be16d", function (e) {
                    return " wszystkich " + e.matchCount + " wpisów";
                }),
                i("abdd8d0a", "Edytuj uwagę"),
                i("c097608e", "Twoja uwaga nie zawiera objaśnienia"),
                i("ba25898c", "Uwagi zawierające objaśnienia źródeł mają większą szansę uzyskać pozytywną ocenę."),
                i("e764d704", "Uwagi zawierające odnośniki do wiarygodnych źródeł mają większą szansę uzyskać pozytywną ocenę."),
                i("gb67e44c", "Dodaj bez objaśnienia"),
                i("d6b758a2", "Dodaj bez odnośnika do źródła"),
                i("dc1fa12c", "Numery telefonów uczestników programu Uwagi Społeczności muszą być zweryfikowane"),
                i("a1752fde", "Aby móc dalej uczestniczyć w programie Uwagi Społeczności za pośrednictwem tego konta, musisz zweryfikować swój numer telefonu."),
                i("hef02710", "Numery uczestników programu Uwagi Społeczności muszą być zweryfikowane oraz powinny należeć do sprawdzonych operatorów. Dodatkowo numery te nie mogą być przypisane do kilku kont jednocześnie."),
                i("dff9b6bc", "Zweryfikuj swój numer telefonu"),
                i("f051e434", "Uczestnicy programu Uwagi Społeczności muszą posiadać unikalne numery telefonów"),
                i("eaef2f72", "Wygląda na to, że ten numer telefonu jest przypisany do kilku kont w serwisie X należących do uczestników programu Uwagi Społeczności."),
                i("j78d41b4", "Aby dalej uczestniczyć w programie za pośrednictwem tego konta, musisz usunąć ten numer telefonu z innych kont w serwisie X."),
                i("a7c9a176", "Numery telefonów uczestników programu Uwagi Społeczności muszą być zweryfikowane oraz powinny należeć do sprawdzonych operatorów"),
                i("ec853dfa", "Aby uniemożliwić korzystanie ze sztucznie utworzonych lub wirtualnych numerów telefonów, wymagamy, and numery telefonów były zweryfikowane oraz należały do sprawdzonych operatorów."),
                i("j6e19c58", "Uwagi Społeczności – nasze wartości"),
                i("ea580ee2", "Zasady i wartości, na których opiera się program Uwagi Społeczności:"),
                i("eac7b6ac", "Budowanie porozumienia"),
                i("b0381cfc", "Działanie w dobrej wierze"),
                i("f0addddc", "Życzliwość – nawet wobec osób, z którymi się nie zgadzasz"),
                i("h7c7b204", "Zanim dodasz nową uwagę, oceń te już dodane"),
                i("i8cae552", "Dodając swoją ocenę, pomagasz nam dbać o wysoką jakość uwag dodawanych w ramach programu Uwagi Społeczności."),
                i("hd43a218", "Osiągnięto dzienny limit dodanych uwag"),
                i("aaba8ed2", "Mając na uwadze zapewnienie wysokiej jakości uwag i ograniczenie rozpowszechniania spamu, uczestników programu obowiązuje dzienny limit uwag, które mogą oni dodać do Tweetów, wyrażany jako wartość pisarska. Spróbuj ponownie później."),
                i("b98f077c", "Informacje dotyczące żądania uwagi"),
                i("ee691104", "Zażądaj uwagi społeczności dotyczącej tego wpisu"),
                i("f8cbdf02", "Uważasz, że ten wpis może wprowadzać w błąd? Zażądaj uwagi społeczności."),
                i("f132d1be", "Współtwórcy będą widzieć alerty we wpisach, których będzie dotyczyć wystarczająca liczba żądań"),
                i("gf71296c", "Jeśli inni współtwórcy ocenią napisaną uwagę jako pomocną, będzie ona widoczna we wpisie"),
                i("de0685b4", "X nie wybiera uwag do pokazania — uwagi społeczności są tworzone przez użytkowników dla użytkowników"),
                i("f8ac3c88", "Zgadzam się i zgłaszam żądanie uwagi"),
                i("a8edd0ea", "Dodać źródło?"),
                i("a39a0de6", "Link do wpisu w serwisie X"),
                i("j819c176", "Pomóż twórcom uwag społeczności, dołączając link do wpisu w serwisie X wskazującego, która część treści może wprowadzać w błąd."),
                i("e15b3b44", "Link musi wskazywać wpis w serwisie X. Przykład: x.com/user/status/...."),
                i("c81085a4", "Uwagi Społeczności"),
                i("c363515c", "upubliczniane"),
                i("cb6b0138", "Dziękujemy! Twoje żądanie zostało wysłane."),
                i("c196e8b8", "Jeśli uwaga zostanie napisana i oceniona jako pomocna, zobaczysz ją w tym wpisie."),
                i("a9491efa", "Przesłano żądanie uwagi społeczności"),
                i("f060d1cc", "Usuń żądanie"),
                i("f499f824", "Usuń swoje żądanie"),
                i("hd1bc518", "Może upłynąć kilka minut, zanim będziesz mieć możliwość zgłoszenia nowego żądania dotyczącego tego wpisu"),
                i("geb8d31d", "zarejestruj się"),
                i("gc399930", "Informacje dotyczące dziennego limitu liczby żądań uwag"),
                i("fee815e4", "Osiągnięto dzienny limit liczby żądań uwag"),
                i("i7eb7900", "Twój dzienny limit zostanie zwiększony, jeśli będziesz zgłaszać żądania dotyczące wpisów, które następnie będą opatrywane pomocnymi uwagami."),
                i("d1a3817e", "Pomaga to nagradzać osoby, które z powodzeniem znajdują potencjalnie wprowadzające w błąd wpisy, w odniesieniu do których warto podać dodatkowy kontekst."),
                i("c031c77a", "Twój dzienny limit może zostać zmniejszony, jeśli będziesz zgłaszać zbyt wiele żądań dotyczących wpisów, które w opinii innych osób nie wymagają dodania uwagi."),
                i("f87129d2", "Pomaga to zapobiegać spamowi i umożliwia twórcom uwag skoncentrowanie się na wpisach, do których warto dodać pomocne uwagi."),
                i("jdd4a572", "Do Twojego konta musi być przypisany zweryfikowany numer telefonu"),
                i("i0f07c07", "Zweryfikuj swój numer telefonu"),
                i("i157c1a8", "To żądanie zostało usunięte."),
                i("a9f4ca9c", "Uczestnicy programu Uwagi Społeczności widzą teraz Twoją uwagę"),
                i("eb8f7c0c", "Uczestnicy programu Birdwatch mogą teraz oceniać Twoją uwagę"),
                i("h87c6bd6", "Uczestnicy programu Birdwatch widzą teraz Twoją uwagę"),
                i("gc1a5bce", "Inni użytkownicy ocenią, czy Twoja uwaga jest pomocna"),
                i("i0e950ca", "Gdy Twoja uwaga zyska status pomocnej, będzie widoczna jako kontekst dla wszystkich osób wyświetlających wpis"),
                i("a047e800", "Twoja uwaga dostarcza innym uczestnikom programu Birdwatch dodatkowego kontekstu, który może być przydatny podczas oceniania uwag"),
                i("cec8a38c", "Gdy Twoja uwaga zyska status pomocnej, zwiększy się Twoja wartość pisarska."),
                i("a377532e", "Gdy dostateczna liczba osób oceni tę uwagą jako pod różnymi względami pomocną, będzie ona widoczna jako kontekst dla wszystkich osób wyświetlających wpis"),
                i("d790fa4e", "Statusy uwag nie są ustalane według zasady większości głosów"),
                i("e90cda68", "Aby ustalić, które uwagi są pomocne dla szerokiej grupy użytkowników, bierzemy pod uwagę zgodność ocen uczestników programu, którzy czasem nie zgadzali się ze sobą w swoich wcześniejszych ocenach."),
                i("j5a1d85a", "Zobacz swoją  uwagę"),
                i("b25b64d6", "Uwaga została przesłana!"),
                i("g1428d70", "Uwaga została przesłana!"),
                i("a4ec7004", "Co dalej?"),
                i("c4093274", "Uwagi Społeczności – co dzieje się po dodaniu uwagi?"),
                i("bc8746a6", "Oceń co najmniej jedną uwagę, zanim napiszesz nową."),
                i("ce3c80b8", "Uwagi społeczności zależą od Twojej oceny, więc pomóż utrzymać ich wysoką jakość."),
                i("fa6a075a", "Uwagi sugerują kontekst, który powinien być wyświetlany wraz z wpisem"),
                i("acb7ecae", "Uwagi wyjaśniające, dlaczego dodatkowy kontekst nie jest potrzebny"),
                i("d9a5fc06", "Oceń wpis"),
                i("b73cebd2", "Oceń wpis i uwagi"),
                i("ad8883f2", "Brak uwag dotyczących tego wpisu"),
                i("efd14e7a", "Wczytywanie uwag"),
                i("e65b7186", "Użytkownicy zaproponowali uwagi społeczności dotyczące tego wpisu"),
                i("bcc14a68", "Uwagi Społeczności to program, w ramach którego chętne osoby mogą dodawać kontekst (uwagi) do wpisów, które ich zdaniem mogą wprowadzać innych użytkowników w błąd. Uwagi są następnie oceniane przez pozostałych uczestników programu, a jeśli uznają oni, że dana uwaga jest pomocna, stanie się ona widoczna w serwisie X jako kontekst wpisu. Jeśli daną uwagę oceniono jako pomocną, a Ty się z tym nie zgadzasz, możesz wnioskować o dodatkowy przegląd, podczas którego więcej osób oceni uwagę, co może zmienić jej status. "),
                i("c21313ba", "Uwagi obecnie oznaczone jako niepomocne"),
                i("c2c40120", "Pokaż wszystkie uwagi"),
                i("ia596d40", "Uważasz, że trzeba coś ulepszyć?"),
                i("deff0bde", "Dodaj swoją uwagę"),
                i("i8e85ef8", "Dołącz do programu Uwagi Społeczności i zyskaj możliwość dodawania uwag oraz dostęp do innych funkcji, które pomagają nam lepiej zadbać o wysoką jakość informacji udostępnianych na platformie Twitter."),
                i("af88892a", "Te uwagi zostały dodane przez uczestników programu Uwagi Społeczności, którzy sądzą, że ten wpis może wprowadzać w błąd i dlatego wymaga dodatkowego kontekstu."),
                i("cf8a40a6", "Uwagi dodawane w ramach programu Uwagi Społeczności stają się widoczne dopiero wtedy, gdy zostaną ocenione jako pomocne przez dostateczną liczbę osób."),
                i("g22c8c30", "Jeśli te uwagi zostaną oznaczone jako pomocne przez dostateczną liczbę uczestników programu (również tych, którzy zazwyczaj nie zgadzają się ze sobą w swoich ocenach), staną się one widoczne obok wpisów jako dodatkowy kontekst."),
                i("jf04b084", "Te uwagi zostały dodane przez uczestników programu, którzy uważają, że wpis nie wprowadza w błąd i nie wymaga dodatkowego kontekstu."),
                i("g5a72e98", "Te uwagi są widoczne w ramach programu Uwagi Społeczności jedynie jako dodatkowa informacja dla oceniających i nie będą wyświetlane jako dodatkowy kontekst wpisu, nawet gdy uzyskają status pomocnych."),
                i("h53cb7de", "Co sądzisz o tym wpisie?"),
                i("dc3bfc82", "Co, jeśli w ogóle, podoba Ci się w tym wpisie?"),
                i("b4704bf4", "Co, jeśli w ogóle, nie podoba Ci się w tym wpisie?"),
                i("ed5156fa", "Wystąpił błąd podczas zapisywania Twojej oceny. Spróbuj ponownie."),
                i("d5f9fb42", "Wzmocnienie tej grupy dyskusyjnej zostało przez Ciebie ocenione"),
                i("j6aa6172", "Usunąć ocenę?"),
                i("i4112750", "Tej czynności nie można cofnąć."),
                i("bd7eb888", "Zobacz wszystkie uwagi dołączone do tego wpisu"),
                i("i97b83f6", "W trakcie przesyłania Twojego odwołania wystąpił błąd. Spróbuj ponownie."),
                i("a038ab9a", "Przetłumacz uwagę"),
                i("i606fc4c", "Uwagi Społeczności – odwołania"),
                i("b664c554", "Poproś o dodatkową ocenę uczestników programu"),
                i("ab66e1f2", "Jak to działa:"),
                i("e36d807c", "Więcej uczestników programu Uwagi Społeczności zostanie poproszonych o ocenę tej uwagi."),
                i("d8afb99c", "Jeśli oceny uczestników programu sprawią, że ta uwaga nie będzie już oznaczona jako pomocna, zostanie ona usunięta z wpisu."),
                i("f9e1090c", "Oceny uwag są dokonywane przez uczestników programu, a nie pracowników serwisu X."),
                i("i80c8a84", "Poproszono o dodatkową ocenę"),
                i("f93d4391", "wnioskować o dodatkową ocenę tej uwagi"),
                i("e457970a", "Szczegóły dotyczące uwagi"),
                i("df587b98", "Identyfikator uwagi"),
                i("h201bdc8", "Autor uwagi"),
                i("h74b96b0", "Wysłano uwagę "),
                i("ge25848a", "Bieżący status"),
                i("d6db34cc", "Wymaga więcej ocen"),
                i("ce8b505e", "Niepomocna"),
                i("e5be8156", "Status uwagi wygenerowany przez algorytm otwarte source"),
                i("fca23c42", "Dostateczna liczba uczestników programu uznała, że — z różnych punktów widzenia — ta uwaga jest pomocna, dlatego jest wyświetlana jako dodatkowy kontekst wpisu."),
                i("hef420c2", "Ta uwaga nie uzyskała jeszcze dostatecznej liczby ocen z różnych perspektyw."),
                i("j3af43c4", "Dostateczna liczba uczestników programu uznała, że, z różnych punktów widzenia, ta uwaga nie jest pomocna."),
                i("f79d812c", "Oceniona jako pomocna i wyświetlona w ciągu godziny od publikacji wpisu"),
                i("cc02373e", "Oceniona jako pomocna i wyświetlona w ciągu godziny od zaproponowania"),
                i("d9f72d90", "Dopasowana i wyświetlona w ciągu godziny od publikacji wpisu"),
                i("fc6e4594", "Najpopularniejsze tagi wybrane przez oceniających"),
                i("f7427d6f", "tym wpisie"),
                i("aa94541d", "tym wpisie"),
                i("fe821ebb", "tym wpisie"),
                i("c5cc74e5", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                i("ff14b6b8", "innego wpisu"),
                i("b5cc9c47", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                i("hb90fe9a", function (e) {
                    return e.matches + " wpisach";
                }),
                i("i23a64ea", function (e) {
                    return e.matches + " wpisach";
                }),
                i("h6c5af52", function (e) {
                    return e.matches + " wpisach";
                }),
                i("c2584f58", function (e) {
                    return e.matches + " wpisach";
                }),
                i("a0dec723", "tym wpisie"),
                i("f20fa57c", function (e) {
                    return e.matches + " wpisach";
                }),
                i("bd60b152", function (e) {
                    return e.matches + " wpisach";
                }),
                i("b95920ef", "tym wpisie"),
                i("f8dcced2", function (e) {
                    return e.matches + " wpisach";
                }),
                i("iaf626c0", function (e) {
                    return e.matches + " wpisach";
                }),
                i("e3002eab", "tym wpisie"),
                i("df3f2d52", function (e) {
                    return e.matches + " wpisach";
                }),
                i("cd83d952", function (e) {
                    return e.matches + " wpisach";
                }),
                i("ia35cd39", "tym wpisie"),
                i("a499228a", function (e) {
                    return e.matches + " wpisach";
                }),
                i("cf9ac658", function (e) {
                    return e.matches + " wpisach";
                }),
                i("fa56f7cb", "tym wpisie"),
                i("b826c19c", function (e) {
                    return e.matches + " wpisach";
                }),
                i("c4618eb8", function (e) {
                    return e.matches + " wpisach";
                }),
                i("i56af3fd", "tym wpisie"),
                i("g1f275b6", function (e) {
                    return e.matches + "wpisach";
                }),
                i("i2cac82c", function (e) {
                    return e.matches + " wpisach";
                }),
                i("a2ae91f1", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                i("d3205ee4", function (e) {
                    return e.matches + " wpisach";
                }),
                i("daeff73b", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                i("fc546c2e", function (e) {
                    return e.matches + " wpisach";
                }),
                i("i1df5f5d", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                i("g03f5337", "tego wpisu"),
                i("f5b30b8a", function (e) {
                    return e.matches + "wpisach";
                }),
                i("e0a49d5b", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                i("e25f9fd4", function (e) {
                    return e.matches + " wpisach";
                }),
                i("bae49ec3", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                i("d595bffd", "tego wpisu"),
                i("ef8a55a6", function (e) {
                    return e.matches + "wpisach";
                }),
                i("a3aa3cb1", function (e) {
                    return "" + e.urlNoteDisplayUrl;
                }),
                i("d5061d00", "Niewyświetlane w serwisie X"),
                i("e272836c", "Usunąć uwagę?"),
                i("da5a5d8c", "Uwaga zostanie trwale usunięta."),
                i("a804a8f4", "Jest więcej uwag, które wymagają Twojej pomocy"),
                i("ib9628b8", "Oceń więcej uwag, aby zwiększyć swoją wartość ratingową"),
                i("bf08be2e", "Oceń więcej notatek"),
                i("i26425d8", "Średnio"),
                i("c6e683d0", "Wyślij i potwierdź"),
                i("b3fcaac6", "Rozważ zapoznanie się ze źródłami przed oceną tej uwagi"),
                i("e8a33850", "Zapoznaj się ze źródłami przed oceną tej uwagi"),
                i("ca6f04ec", "Zapoznanie się ze źródłami cytowanymi w uwagach pomaga sprawdzić ich dokładność. "),
                i("a7338bc2", "Czy ta uwaga jest pomocna?"),
                i("bd0b6422", "Czy to wyjaśnia, dlaczego kontekst nie jest wymagany?"),
                i("ac7f9746", "Co sprawia, że ta uwaga jest pomocna?"),
                i("c7751804", "Co sprawia, że ta uwaga nie jest pomocna?"),
                i("dc9c823a", "Ta uwaga będzie pomocna we wszystkich wpisach zawierających ten link."),
                i("da0bb868", "Ta uwaga będzie pomocna we wszystkich wpisach zawierających ten film."),
                i("e8694748", "Ta uwaga będzie pomocna we wszystkich wpisach zawierających ten obraz."),
                i("b487e12e", "Ta uwaga będzie pomocna we wszystkich wpisach zawierających te multimedia."),
                i("hfdb963e", "Ta uwaga jest zbyt związana z tym wpisem, przez co może być nietrafna w innych wpisach zawierających ten sam link."),
                i("bd6742c2", "Ta uwaga jest zbyt związana z tym wpisem, przez co może być nietrafna w innych wpisach zawierających ten sam film."),
                i("ded3a8a2", "Ta uwaga jest zbyt związana z tym wpisem, przez co może być nietrafna w innych wpisach zawierających ten sam obraz."),
                i("c1e42c92", "Ta uwaga jest zbyt związana z tym wpisem, przez co może być nietrafna w innych wpisach zawierających te same multimedia."),
                i("af198630", "udostępniania informacji w ramach programu Uwagi Społeczności"),
                i("d39720d3", "pomocną"),
                i("i7d91dc9", "średnio pomocną"),
                i("c75b7fb4", "niepomocną"),
                i("d9025c46", function (e) {
                    return e.matches + " wpisach";
                }),
                i("ce1c95d6", function (e) {
                    return "" + e.noteDisplayUrl;
                }),
                i("jd7c58d8", function (e) {
                    return e.matches + " wpisach";
                }),
                i("ebb0b116", function (e) {
                    return e.matches + " wpisach";
                }),
                i("f9005c24", function (e) {
                    return e.matches + " wpisach";
                }),
                i("a4886e54", function (e) {
                    return "" + e.noteDisplayUrl;
                }),
                i("h8335712", "Twoja uwaga"),
                i("b9f18eec", "Obecnie oznaczona jako pomocna"),
                i("j33f6520", "Obecnie oznaczona jako niepomocna"),
                i("idc0e9fc", "Zarejestruj się, aby zostać współużytkownikiem w programie Uwagi Społeczności"),
                i("a83cccfa", "Współużytkownicy mogą przeglądać propozycje uwag, pisać uwagi, śledzić ich wpływ i nie tylko!"),
                i("c2a6ec00", "Chcesz dołączyć do programu Uwagi Społeczności?"),
                i("d2470b62", "Pomóż dostarczać wiarygodniejsze informacje użytkownikom serwisu X."),
                i("ab23a972", "Obserwuj rozmowę"),
                i("c68f3bc0", "Dowiedz się więcej na temat wyznawanych przez nas wartości"),
                i("dfb1f498", "Opinie"),
                i("a584cfa7", "Wyślij prywatną wiadomość: @CommunityNotes"),
                i("e4d93012", "Wiele osób zażądało uwagi społeczności"),
                i("e55983c0", "Żadna z żądających osób nie dostarczyła linku do źródła wyjaśniającego, dlaczego jest potrzebna uwaga"),
                i("h23be93e", "Osoby żądające mogą dołączyć wpis w serwisie X, aby dokładniej wyjaśnić, dlaczego uważają, że uwaga byłaby pomocna. Poniższe wpisy zostały dołączone przez osoby żądające."),
                i("ca6ae344", "Uwagi Społeczności – pasek Zakładek"),
                i("fe27c1e2", "Uwagi"),
                i("ff692d64", "Twój profil"),
                i("cb1adfa0", "Pobierz dane"),
                i("jaf0d42c", "Twoje uwagi"),
                i("fa9a644a", "Jeśli 3 z 5 Twoich ostatnich uwag ze statusem pomocnych lub niepomocnych zyska status niepomocnych, Twoja możliwość dodawania uwag zostanie tymczasowo zawieszona."),
                i("i4014342", "Miej pewność, że nie utracisz możliwości dodawania uwag. Zapoznaj się z informacją zwrotną dotyczącą dwóch z uwag dodanych przez Ciebie:"),
                i("j9897a7c", "Otrzymuj wskazówki dotyczące uwag"),
                i("ac71a5a0", "Oceniaj uwagi, które wymagają Twojej pomocy"),
                i("h544e3c8", "Współużytkownicy mogą teraz odblokować możliwość dodawania uwag po uzyskaniu wartości ratingowej na poziomie 5."),
                i("d88c63f6", "Nowość: Zyskaj możliwość dodawania uwag"),
                i("bd31adde", "Nie uczestniczysz już w programie Uwagi Społeczności."),
                i("a796c19c", "Dołącz ponownie"),
                i("h837a96c", "Dołączysz ponownie do programu Uwagi Społeczności."),
                i("a4d4bcb9", function (e) {
                    return "Jeśli chcesz dołączyć ponownie, możesz zrobić to tutaj za " + e.numDaysToRejoin + " d" + n(e.numDaysToRejoin, "ni", "ni", "zień", "ni") + ".";
                }),
                i("a490bc51", "Dowiedz się więcej"),
                i("c94ad3e8", "prześlij nam swoją opinię"),
                i("ee160790", "Usunięte Notatki"),
                i("b3de4a42", "Wartość ratingowa"),
                i("a7b0393c", "Wartość pisarska"),
                i("id568acc", "Najlepszy piszący"),
                i("e25f9ad6", "Oceny, które pomogły danej uwadze zyskać status pomocnej"),
                i("a0697fbc", "Dobra robota! Te oceny pozwoliły nam ustalić, które z uwag są pomocne i powinny być wyświetlane jako kontekst wpisów dostarczający innym osobom przydatnych informacji."),
                i("a3311a60", "Te oceny pozwoliły nam ustalić, które z uwag są pomocne i powinny być wyświetlane jako kontekst wpisów dostarczający innym osobom przydatnych informacji."),
                i("bbc44f5a", "Te oceny pozwalają nam ustalić, które z uwag są pomocne i powinny być wyświetlane jako kontekst wpisów dostarczający innym osobom przydatnych informacji."),
                i("b4f21858", "Oceny, które sprawiły, że dana uwaga zyskała status niepomocnej"),
                i("d46b6bc8", "Te oceny są potrzebne do funkcjonowania programu Uwagi Społeczności, ponieważ zawierają one informację zwrotną dla autorów uwag oraz pozwalają uczestnikom programu skupić się na najprzydatniejszych uwagach."),
                i("a5e6ba6a", "Uwagi ocenione jako Pomocne, które ostatecznie zyskały status Niepomocne."),
                i("a22929e4", "Uwagi ocenione jako Niepomocne, które ostatecznie zyskały status Pomocne."),
                i("b76dd726", "Te oceny są popularne i mogą doprowadzić do zmiany statusu, jeśli wystarczająca liczba osób uzna, że „Pomocna” uwaga nie jest wystarczająco pomocna."),
                i("j29cc0f2", "Te oceny są liczone dwa razy, ponieważ często wskazują poparcie dla uwag, które inni użytkownicy uważają za uwagi o niskiej jakości."),
                i("cd4333d0", "Nie martw się, zdarza się to każdemu! "),
                i("e9fa53ac", "Oceny dodane do uwag, które nie uzyskały jeszcze statusu"),
                i("fc664dee", "Oceny dodane po ustaleniu statusu"),
                i("f024ec64", "Te oceny mogą wzmocnić status uwagi – lub całkowicie go zmienić."),
                i("e1ee08e6", "Wartość pisarska"),
                i("je3fc324", "Twoje uwagi, które oceniono jako pomocne"),
                i("f7358242", "Uwagi, które oceniono jako pomocne"),
                i("j8e9b514", "Dobra robota! Te uwagi są widoczne dla wszystkich osób wyświetlających wpis i pomagają im lepiej zrozumieć jego kontekst."),
                i("e9e57c5c", "Te uwagi są widoczne dla wszystkich osób wyświetlających wpis i pomagają im lepiej zrozumieć jego kontekst."),
                i("fee0d8a8", "Te uwagi są wyświetlane w serwisie X i zawierają przydatne informacje, które pomagają innym lepiej zrozumieć kontekst danego wpisu."),
                i("iab44364", "Twoje uwagi, które oceniono jako niepomocne"),
                i("d8c90438", "Uwagi, które oceniono jako niepomocne"),
                i("accaa48e", "Te uwagi zostały ocenione jako niepomocne przez dostateczną liczbę użytkowników, również tych, którzy czasem nie zgadzają się ze sobą w swoich ocenach. Możesz zobaczyć te uwagi i uzyskane przez nie oceny na swoim profilu.\nGdy pojawi się więcej ocen, status uwagi może się zmienić."),
                i("fa2156f6", "Te uwagi zostały ocenione jako niepomocne przez dostateczną liczbę użytkowników, również tych, którzy czasem nie zgadzają się ze sobą w swoich ocenach.\nGdy pojawi się więcej ocen, status uwagi może się zmienić."),
                i("d004c768", "Uwagi, które wymagają większej liczby ocen"),
                i("f3d6d6c0", "Uwagi, które nie uzyskały jeszcze statusu"),
                i("d68a370c", "Ostatnia aktywność: "),
                i("f10aaf3c", "Wskazówki dotyczące oceniania uwag"),
                i("b9793c9a", "Nie dodałeś/aś jeszcze żadnych uwag"),
                i("bed66f92", "Jak zacząć?"),
                i("a3ca686a", "Zobacz wskazówki dotyczące pisania uwag"),
                i("ga8034c6", "Naciśnij menu ••• widoczne obok wpisu, aby napisać uwagę"),
                i("h4109636", "Jeśli uważasz, że dany wpis może wprowadzać w błąd, dodaj do niego uwagę z kontekstem, który będzie przydatny dla innych użytkowników."),
                i("ec30e9ac", "Inni uczestnicy programu ocenią Twoją uwagę pod kątem jej przydatności"),
                i("e0c42f80", "Gdy uwaga zyska status pomocnej, będzie widoczna jako kontekst dla wszystkich osób wyświetlających wpis"),
                i("ife4baaa", "Program Uwagi Społeczności nie działa według zasady większości głosów. Aby ustalić, które uwagi są pomocne dla szerokiej grupy użytkowników, bierzemy pod uwagę zgodność ocen uczestników programu, którzy czasem nie zgadzali się ze sobą w swoich wcześniejszych ocenach. Pozwala nam to upewnić się, że oceny nie są jednostronne."),
                i("a0c552ee", "Twoje wyniki będą widoczne tutaj"),
                i("a4e5ea3c", "Nie oceniłeś/aś jeszcze żadnych uwag"),
                i("g9a28bde", "Przeglądaj uwagi, które wymagają Twojej pomocy"),
                i("dc0046e2", "Uwagi Społeczności – strona główna"),
                i("fecae168", "Znajdziesz tu uwagi, które wymagają większej liczby ocen, i zobaczysz przypadki, w których Twoja ocena jest szczególnie potrzebna."),
                i("h525e29e", "Pomóż zidentyfikować uwagi, które mogą być pomocne dla wielu osób"),
                i("f6db7706", "Najlepsze uwagi dodawane w ramach programu Uwagi Społeczności bezpośrednio odnoszą się do treści wpisu, są napisane prostym i przystępnym językiem oraz zawierają odniesienia do źródeł, które są powszechnie uznawane za rzetelne."),
                i("f636b582", "Pomóż zidentyfikować uwagi, które nie są pomocne"),
                i("f58f4f62", "Negatywne oceny dodawane do uwag niskiej jakości są potrzebne do funkcjonowania programu Uwagi Społeczności, ponieważ zawierają one informację zwrotną dla autorów uwag oraz pozwalają uczestnikom programu skupić się na najprzydatniejszych uwagach."),
                i("cf30af22", "To nowa informacja?"),
                i("d145b0fa", "Statusy uwag nie są ustalane według zasady większości głosów. Aby ustalić, które uwagi są pomocne dla szerokiej grupy użytkowników, bierzemy pod uwagę zgodność ocen uczestników programu, którzy czasem nie zgadzali się ze sobą w swoich wcześniejszych ocenach. Pozwala nam to upewnić się, że oceny nie są jednostronne."),
                i("c20a24cc", "Gratulacje!"),
                i("d01b8fc8", "Należysz do grona najlepszych piszących w programie Uwagi Społeczności."),
                i("jbe2ad46", "Piszący, którzy mają duży wpływ merytoryczny oraz wysoki odsetek uwag ze statusem „Pomocne”, otrzymują dostęp do następujących funkcji: "),
                i("d2dc3d4c", "Priorytet alertów o uwagach"),
                i("heb73816", "Propozycje uwag Najlepszych piszących z większym prawdopodobieństwem będą inicjować powiadomienia przyciągające uwagę oceniających."),
                i("b760d51a", "Odznaka w profilu aliasu"),
                i("ief63e50", "Najlepszych piszących można rozpoznać po odznace widocznej w ich profilach w programie Uwagi Społeczności. "),
                i("jd6b88ca", "Uwagi dotyczące multimediów"),
                i("c39bdf5a", "Najlepsi piszący mogą pisać uwagi dotyczące multimediów, które będą widoczne w wielu wpisach, dzięki czemu większa liczba osób będzie otrzymywać wiarygodne informacje."),
                i("efb9a9e0", "Nic tu nie ma"),
                i("a1529ce7", "Dowiedz się więcej"),
                i("f07ed596", "Uczestnicy programu, tacy jak Ty, pomagają ustalić, które uwagi są pomocne i powinny być wyświetlane jako kontekst w serwisie X."),
                i("h2b5268a", "Dobra robota! Oceń więcej uwag, aby zwiększyć swoją wartość ratingową."),
                i("e86c87a0", "Oceń więcej uwag"),
                i("ad98f836", "Twoja wartość ratingowa się zmniejszyła. Nie martw się!"),
                i("e2d7c914", "Oceniaj dalej uwagi"),
                i("a5427624", "Przeglądaj stronę główną programu Uwagi Społeczności, aby znaleźć uwagi, które wymagają oceny większej liczby użytkowników."),
                i("e227a7fa", "Statusy uwag zawsze mogą się zmienić"),
                i("eda73c9c", "Twoja ocena może być inna niż status uwagi. To nie problem! Jeśli więcej współużytkowników się z Tobą zgodzi, status może się zmienić, co spowoduje zwiększenie Twojej wartości ratingowej."),
                i("cfa3b664", "Możesz teraz dodawać uwagi w ramach programu Uwagi Społeczności!"),
                i("j44125ee", "Ten uczestnik programu nie dodał jeszcze żadnych uwag"),
                i("da55067c", "Zajrzyj tu później!"),
                i("f893c3b8", "Dołącz do programu Uwagi Społeczności"),
                i("a701795c", "Program Uwagi Społeczności nie jest jeszcze dostępny"),
                i("db08295e", "Dołączysz?"),
                i("ha275800", "Wygląda na to, że nie uczestniczysz w pilotażowym programie Uwagi Społeczności. Dołącz, aby wspólnie z nami zadbać o rzetelność informacji publikowanych w serwisie X."),
                i("ce0a213a", "Aby utworzyć uwagę, wybierz ikonę Uwagi Społeczności z menu dowolnego wpisu. Twoje uwagi będą widoczne w tym miejscu."),
                i("c87f3cf8", "Uwaga"),
                i("a5b19492", "Ta uwaga nie jest dostępna"),
                i("c21d1b2a", "Uwagi zyskują status pomocnych lub niepomocnych, gdy pojawia się zgodna ocena dostatecznej liczby uczestników programu, w tym osób, które mogły się ze sobą nie zgadzać we wcześniejszych ocenach. Pozwala to upewnić się, że uwagi są pomocne dla szerokiej grupy użytkowników i zapobiec stosowaniu jednostronnych ocen."),
                i("c7b59cde", "Uwagi Społeczności – ustawienia"),
                i("c8be1d0d", "Dowiedz się więcej"),
                i("a5a2330c", "Wpisy z tymi samymi multimediami"),
                i("ad071b5c", "Wpisy zawierające ten sam link"),
                i("b92967c0", "Ta notatka nie jest notatką multimedialną"),
                i("i92fddce", "Uwaga będzie automatycznie wyświetlana w poniższych wpisach, jeśli wystarczająca liczba osób zgodzi się, że powinna być wyświetlana."),
                i("f5ce7a00", "Ten wpis multimedialny nie ma jeszcze żadnych dopasowań."),
                i("e1288bdc", "Powiadomienia, gdy uwaga wymaga mojego działania"),
                i("ca14eab4", "Otrzymuj powiadomienia, gdy uwaga wymaga Twojej oceny."),
                i("gb2bc3d0", " Na maksa 🔥"),
                i("c35ebcd2", "Jak najwięcej – nawet kilka dziennie"),
                i("ba165b3c", "Często"),
                i("g72e2a58", "Kilka powiadomień w tygodniu"),
                i("idd249e0", "Czasami"),
                i("if2e01ee", "Kilka powiadomień w miesiącu"),
                i("fdaeaab8", "Wystąpił błąd podczas zapisywania Twoich ustawień. Spróbuj ponownie."),
                i("db4e443a", "Twoje ustawienia zostały zapisane."),
                i("dc11636c", "Języki, które znasz"),
                i("fae059c6", "Opuść program Uwagi Społeczności"),
                i("ed37123a", "Opuszczasz program Uwagi Społeczności"),
                i("c1a554a2", "Poniżej znajdują się ważne informacje:"),
                i("j59355fe", "Nie będziesz mieć możliwości pisania nowych uwagi społeczności."),
                i("c23420ec", "Nie będziesz otrzymywać powiadomień z programu Uwagi Społeczności, chyba że będą związane z Twoją aktywnością w serwisie X."),
                i("c76031ee", "Twój anonimowy profil uczestnika programu Uwagi Społeczności oraz przesłane uprzednio materiały pozostaną dostępne publicznie. Nadal będziesz mieć możliwość wyświetlania i usuwania swoich uwag."),
                i("be4f9106", "Możesz dołączyć ponownie po upływie 90 dni."),
                i("hf68e810", "Uwagi Społeczności to program, który ma nam pomóc podnieść jakość udostępnianych informacji. Dzięki niemu użytkownicy serwisu X mogą wspólnie dodawać pomocne uwagi do wpisów, które mogłyby wprowadzać innych użytkowników w błąd."),
                i("jdb52860", "Współtwórcy dodają uwagi i je oceniają"),
                i("c104025c", "Uczestnicy programu to osoby korzystające z serwisu X, takie jak Ty, które zgłosiły się do programu pilotażowego, aby pisać i oceniać uwagi. Im więcej osób zaangażuje się w ten program, tym lepsze wyniki uzyskamy."),
                i("j7872b8c", "Przy wpisach są wyświetlane tylko uwagi uznane przez innych za pomocne"),
                i("fb59415e", "Aby uwagi były wyświetlane publicznie jako kontekst przy wpisach, muszą zostaną ocenione jako pomocne z różnych punktów widzenia przez wystarczającą liczbę osób. Pomaga to uniknąć treści, które są stronnicze lub stanowią manipulację, i ułatwia znalezienie uwag pomocnych dla wielu osób."),
                i("f9a44022", "To nie firma X decyduje o tym, które uwagi są wyświetlane — robią to użytkownicy"),
                i("gdf4fbb2", "Firma X nie dodaje, nie ocenia ani nie moderuje uwag (jeśli nie naruszają one Zasad serwisu X). Użytkownicy podejmują decyzje wspólnie. Wierzymy, że to sprawiedliwa i skuteczna metoda udostępniania rzetelnych informacji."),
                i("cc720e6a", "U podstaw programu Uwagi Społeczności leży przejrzystość danych"),
                i("j2fcd33a", "Dane zawierają treści dodane do"),
                i("d4a6b322", "Wszystkie uwagi i informacje dodawane w ramach programu Uwagi Społeczności publikowane są tu codziennie, dzięki czemu użytkownicy mają pełen dostęp do wszystkich danych oraz mogą szybko identyfikować problemy i podejmować odpowiednie działania. Poznaj wszystkie opcje, jakie oferuje program Uwagi Społeczności."),
                i("c359263a", "Dowiedz się, w jaki sposób wykorzystywać i analizować dane dotyczące programu Uwagi Społeczności "),
                i("b8a27fe2", "naszego przewodnika"),
                i("j1c99e00", "Dane dotyczące uwag"),
                i("i6f69314", "Dane dotyczące ocen"),
                i("b7e4c114", "Dane dotyczące historii statusu Notatki"),
                i("d7f19114", "Informacja o statusie rejestracji użytkownika"),
                i("b6008808", "Dane dotyczące żądania uwagi"),
                i("h786cd7a", "Dane dotyczące uwag nie są jeszcze dostępne"),
                i("d0fe8052", "Dane dotyczące ocen nie są jeszcze dostępne"),
                i("c0427f94", "Dane dotyczące historii statusu Notatki nie są jeszcze dostępne"),
                i("g880d8c0", "Informacja o statusie rejestracji użytkownika nie jest jeszcze dostępna"),
                i("ab1b3d38", "Dane dotyczące żądania uwagi nie są jeszcze dostępne"),
                i("c43fb933", "Umowę dla programistów i Zasady współpracy z programistami w serwisie X"),
                i("ed88e742", "Kopiuj link do tematu"),
                i("h92fe1be", "Niestety program Uwagi Społeczności nie jest dla Ciebie w tej chwili dostępny."),
                i("f0dc1434", "Program Uwagi Społeczności jest obecnie dostępny tylko w Stanach Zjednoczonych"),
                i("f8fc0b48", "Utwórz folder"),
                i("c14bcdde", "Szukaj zakładek"),
                i("e9c65c4a", "Wyszukiwanie w Zakładkach"),
                i("b92a21d9", function (e) {
                    return "Nie znaleziono wyników dla hasła " + e.query;
                }),
                i("f191a2ba", "Ustawienia wyszukiwania"),
                i("a068008a", "Foldery nie są obecnie ładowane"),
                i("f075b0e8", "Edytuj folder"),
                i("beba2a0e", "Utwórz nowy folder Zakładki"),
                i("e41c9b4f", function (e) {
                    return "Zapisano w folderze " + e.bookmarkFolderName;
                }),
                i("h18f86a4", "Usuń folder"),
                i("f4ea967a", "Usunięto folder"),
                i("b670aa62", "Nazwa folderu"),
                i("aece5462", "Nazwa folderu została pomyślnie zaktualizowana"),
                i("e3299b94", "Wystąpił błąd. Poczekaj chwilę i spróbuj ponownie zaktualizować folder."),
                i("c09ea714", "Wystąpił błąd. Poczekaj chwilę i spróbuj ponownie usunąć folder."),
                i("gee78816", "Nazwy folderów Zakładek nie mogą być dłuższe niż 25 znaków"),
                i("h9a5daa2", "Usunąć folder?"),
                i("ac9d5f56", "Twoje wpisy nadal będą zapisywane w folderze „Wszystkie Zakładki”"),
                i("i6e7e298", "Utwórz"),
                i("a0ea2fa6", "Pole z nazwą nie może być puste"),
                i("eec37eac", "Folder Zakładek o tej nazwie już istnieje"),
                i("fce0c59e", "Nie udało się otworzyć pliku animacji JSON. Sprawdź format pliku animacji JSON i spróbuj ponownie."),
                i("g0eea6c2", "Nie udało się odczytać pliku animacji JSON. Spróbuj ponownie otworzyć plik.");
            i("ae58026a", "Otwórz plik spersonalizowanego polubienia .json, aby zobaczyć podgląd"),
                i("hd0bc1eb", function (e) {
                    return e.name + " transmituje na żywo";
                }),
                i("bea1f26b", function (e) {
                    return e.name + " transmitował/a na żywo";
                }),
                i("ab3ee97f", function (e) {
                    return e.screenName + " nie transmituje na żywo";
                }),
                i("d39d46c4", "Tytuł został zaktualizowany. Zmiany będą widoczne w ciągu 30 sekund."),
                i("e44095a5", function (e) {
                    return "Rozpoczęto: " + e.timestamp;
                }),
                i("j83f29dd", function (e) {
                    return "Zakończono: " + e.timestamp;
                }),
                i("daca8a2c", "Otwórz w panelu"),
                i("e3aac82a", "Wczytywanie transmisji"),
                i("i0ed3f4e", "Obrazek wydarzenia"),
                i("cbae35fa", "Zgłoś transmisję"),
                i("fd12ab58", "Wpisy w kolekcji"),
                i("a226497c", "Utwórz nową Grupę dyskusyjną"),
                i("d7346632", "Nie należysz jeszcze do żadnej Grupy dyskusyjnej"),
                i("b732a4cc", "Gdy to zrobisz, wpisy tego użytkownika będa widoczne w tym miejscu."),
                i("hff48914", "W tej chwili nie można znaleźć żadnego wpisu."),
                i("hb52cc4a", "Spróbuj ponownie później."),
                i("e50e1bb0", "Zapraszamy do korzystania z grup dyskusyjnych"),
                i("i6829daa", "Grupy dyskusyjne to moderowane grupy na X, w ramach których użytkownicy mogą rozmawiać i udostępniać treści."),
                i("fc5c6914", "Poznaj osoby o podobnych zainteresowaniach"),
                i("aa1a9820", "Dołącz do grup dyskusyjnych, aby łączyć się z osobami, które mają takie same zainteresowania, jak Ty."),
                i("edef4c82", "Publikuj wpisy bezpośrednio w grupie dyskusyjnej"),
                i("a7640df6", "Twoje wpisy są udostępniane członkom grupy dyskusyjnej oraz Twoim obserwującym."),
                i("h3bb8068", "Ciekawe rozmowy"),
                i("a709f8f8", "Administratorzy i moderatorzy pomagają zarządzać Grupami dyskusyjnymi i dbać o produktywność rozmów."),
                i("c8d33380", "Nowe pozycje"),
                i("cb6adb10", "Odkryj Grupy dyskusyjne"),
                i("df362964", "Znajdź Grupy dyskusyjne"),
                i("dfd5031f", function (e) {
                    return e.newTweets + " nowe now" + n(e.newTweets, "e wpisy", "ych wpisów", "y wpis", "ego wpisu");
                }),
                i("ha4bb8a9", function (e) {
                    return e.reportedTweets + " now" + n(e.reportedTweets, "e zgłoszenia", "ych zgłoszeń", "e zgłoszenie", "ych zgłoszeń");
                }),
                i("caf003b3", function (e) {
                    return e.memberRequests + " " + n(e.memberRequests, "zaproszenia", "zaproszenia", "nowe zaproszenie", "nowych zaproszeń");
                }),
                i("a2118086", "Sortuj wpisy"),
                i("hb01fe46", "Gdy to zrobisz, informacja o tym pojawi się tutaj."),
                i("c170a564", "Nie znaleziono wyszukiwanego terminu. Spróbuj wpisać inny termin."),
                i("cbd1aef8", "Wyszukaj grupy dyskusyjne i wpisy"),
                i("fbf01e52", "Wyszukaj Grupy dyskusyjne"),
                i("c8a6499c", "Wyniki wyszukiwania wpisów w grupie dyskusyjnej"),
                i("af05a978", "Wyniki wyszukiwania będą pojawiać się tutaj w miarę pisania."),
                i("eb4d2cd0", "Nie znaleziono wpisów."),
                i("a8ecdb4c", "Wyniki wyszukiwania najnowszych wpisów w grupie dyskusyjnej"),
                i("dc6ce7b4", "Członkowie"),
                i("ga2aa43c", "Moderatorzy"),
                i("b139b54a", "Zaproś użytkowników"),
                i("cf4898a0", "Wyszukaj osoby"),
                i("g30bc699", function (e) {
                    return "Zobacz profil użytkownika @" + e.screenName;
                }),
                i("e585d844", "Dodaj do zespołu moderatorów"),
                i("cab7c6f8", "Dodać jako moderatora?"),
                i("e96d5255", function (e) {
                    return "@" + e.screenName + " jest teraz moderatorem.";
                }),
                i("f348a395", function (e) {
                    return "Nie można teraz dodać użytkownika @" + e.screenName + " jako moderatora. Spróbuj ponownie później.";
                }),
                i("c3a1aebe", "Usuń z zespołu moderatorów"),
                i("c273c8a6", "Usunąć użytkownika z zespołu moderatorów?"),
                i("c0eb2a53", function (e) {
                    return "@" + e.screenName + " nie jest już moderatorem.";
                }),
                i("a5808125", function (e) {
                    return "Nie można teraz usunąć użytkownika @" + e.screenName + " z zespołu moderatorów. Spróbuj ponownie później.";
                }),
                i("a51d671b", function (e) {
                    return "Zablokuj użytkownika @" + e.screenName + " w grupie dyskusyjnej";
                }),
                i("cdd87524", "Nikogo tu jeszcze nie ma"),
                i("cca51910", "Osoby, które dołączą do tej Grupy dyskusyjnej, będą widoczne tutaj."),
                i("c9d56b72", "Opowiedz nam o swojej Grupie dyskusyjnej. Możesz zmienić te informacje w dowolnym momencie."),
                i("c1ad5a12", "Wygląda na to, że wystąpił problem podczas tworzenia Twojej Grupy dyskusyjnej. Spróbuj ponownie później."),
                i("f713fbd2", "Członkostwo"),
                i("d1fa71fc", "Pytanie zatwierdzające (opcjonalnie)"),
                i("a0a16d38", "Każdy będzie mógł dołączyć lub otrzymać zaproszenie do Grupy."),
                i("ce0523a8", "Dostęp ograniczony"),
                i("i1aad6ec", "Użytkownicy muszą wysyłać prośby o przyjęcie do Grupy dyskusyjnej, a moderatorzy muszą je zaakceptować. Użytkownicy, którzy otrzymali zaproszenia od moderatorów, zostają automatycznie przyjęci do Grupy po zaakceptowaniu zaproszenia."),
                i("c85960a0", "Zezwalaj członkom Grupy na wysyłanie zaproszeń"),
                i("ca373cd2", "Użytkownicy, którzy otrzymali zaproszenia od innych członków Grupy dyskusyjnej, zostają automatycznie przyjęci do Grupy po zaakceptowaniu zaproszenia."),
                i("dfdcc6b4", "Decyduj o tym, kto może dołączyć do Twojej grupy dyskusyjnej. Pamiętaj, że wszystkie grupy dyskusyjne są widoczne dla wszystkich użytkowników serwisu X."),
                i("h3e55b40", "Nazwa Grupy dyskusyjnej"),
                i("dd71d9c9", function (e) {
                    return "Nazwa musi mieć od " + e.minCharacterCount + " do " + e.maxCharacterCount + " znaków i nie może zawierać tagów ani @nazw_użytkowników";
                }),
                i("cf65e56b", function (e) {
                    return "Nazwa musi mieć od " + e.minCharacterCount + " do " + e.maxCharacterCount + " znaków";
                }),
                i("d936eeca", "Nazwy nie mogą zawierać tagów ani @nazw_użytkowników."),
                i("e2df7cf2", "Cel Grupy dyskusyjnej"),
                i("be9bb312", "Konkretny cel dobrze definiuje Grupę dyskusyjną i informuje użytkowników o jej założeniach"),
                i("e988475f", function (e) {
                    return "Opis celu musi mieć od " + e.minCharacterCount + " do " + e.maxCharacterCount + " znaków";
                }),
                i("gcddfba8", "Pytanie zatwierdzające"),
                i("hf86d862", "Gdy użytkownicy będą chcieli dołączyć, będą mogli odpowiedzieć na to pytanie. Ich odpowiedzi będą wyświetlane wraz z ich żądaniami. Aby usunąć pytanie, zostaw to pole puste."),
                i("i88b7305", function (e) {
                    return "Liczba znaków w pytaniu musi być mniejsza niż " + e.maxCharacterCount;
                }),
                i("dce5e1b4", "Narzędzia administratora"),
                i("c5d8c93e", "Narzędzia moderatora"),
                i("c8c7f9fc", "Wymagana jest analiza zgłoszenia"),
                i("a87df2ee", "Zarządzanie Grupą dyskusyjną"),
                i("ee609174", "Ustawienia ogólne"),
                i("ab19cdaa", "Ustawienia spamu"),
                i("d755f47d", function (e) {
                    return "Masz " + e.count + " wpis" + n(e.count, "y", "ów", "", "u");
                }),
                i("efc26607", function (e) {
                    return e.memberCount + " użytkownik" + n(e.memberCount, "ów", "ów", "", "ów");
                }),
                i("adfcc3ce", "Dodawaj, usuwaj lub edytuj zasady"),
                i("d0330d9c", "Zobacz Zasady"),
                i("fd67f7c8", "Edytuj nazwę Grupy dyskusyjnej, jej cel i inne informacje"),
                i("e7e31264", "Dostosuj filtr spamu i narzędzia do zgłaszania"),
                i("gc00d212", "Wsparcie i materiały"),
                i("g0cbfc50", "Przydatne wskazówki dla moderatorów Grupy dyskusyjnej"),
                i("h6ebcfca", "Wyświetlaj tę Grupę dyskusyjną na swoim profilu"),
                i("c0fa0634", "Wyróżnij swoją Grupę dyskusyjną"),
                i("da035fd5", function (e) {
                    return "Nowość" + e.ttc_c9s_spotlight_header;
                }),
                i("h41224f8", "Wyróżnij własną Grupę dyskusyjną w swoim profilu"),
                i("b18e94b2", "Przejdź na konto profesjonalne, aby dodać Grupę dyskusyjną do Twojego profilu oraz zyskać dostęp do statystyk dotyczących odbiorców i wielu innych funkcji."),
                i("dc716b1c", "Lista grupy dyskusyjnej"),
                i("c3e2dda6", "Dodaj lub usuń listę grupy dyskusyjnej"),
                i("a68bffdc", "Przejrzyj statystyki grupy dyskusyjnej"),
                i("c6ea29a2", "Opuść zespół moderatorów"),
                i("a6e13fac", "Czy na pewno chcesz opuścić zespół moderatorów?"),
                i("e538848c", "Nie będziesz mieć już dostępu do narzędzi moderatorów. Jeśli zmienisz zdanie, będziesz musiał/a ponownie otrzymać zaproszenie do objęcia roli moderatora."),
                i("j49e6aa2", "Tak"),
                i("dde5f323", function (e) {
                    return "Masz " + e.count + " now" + n(e.count, "e prośby", "ych próśb", "ą prośbę", "ych próśb") + " o dodanie";
                }),
                i("f5e0332a", "Treści dla dorosłych (nie do oglądania w pracy)"),
                i("e983404a", "Przypięte tagi"),
                i("j8af8eaa", "Rodzaj członkostwa"),
                i("d5f01116", "Cel"),
                i("c2ff3c9e", "Oznaczenia wyszukiwania"),
                i("f4a98e9e", "Grupa dyskusyjna – informacje"),
                i("a43bed28", "Musisz włączyć to ustawienie, jeśli Twoja grupa dyskusyjna zawiera treści przeznaczone dla dorosłych. Niewykonanie tej czynności spowoduje automatyczne odfiltrowanie wszystkich treści przeznaczonych dla dorosłych opublikowanych w Twojej grupie dyskusyjnej."),
                i("ab1069de", "Usuń Grupę dyskusyjną"),
                i("bbc91896", "Tej czynności nie można cofnąć. Autorzy wpisów mogą nadal wyświetlać swoje wpisy."),
                i("i27eb0b7", function (e) {
                    return "" + e.communityName;
                }),
                i("a49f884e", "Baner Grupy dyskusyjnej"),
                i("ea965b82", "Edytuj baner Grupy dyskusyjnej"),
                i("j35d3ad6", "Usuń i zastąp"),
                i("f1e8fb22", "Twój baner zostanie usunięty i zastąpiony domyślnym banerem."),
                i("e405ec22", "Wygląda na to, że nie udało się zapisać nowego baneru. Spróbuj ponownie później."),
                i("b7fb6bda", "Przytnij zdjęcie"),
                i("e71cdf4e", "Przytnij miniaturę"),
                i("ef199198", "Twoje ustawienia zostały zapisane"),
                i("ee10aa5a", "Nie można zapisać Twoich ustawień"),
                i("i307a7ca", "Edytuj przypięte tagi"),
                i("dc6eca54", "Tag został usunięty"),
                i("d27de326", "Przypinaj tagi, aby organizować wpisy ze swojej grupy dyskusyjnej na różnych osiach czasu"),
                i("d84cc77a", "Wpisz tag w tym miejscu"),
                i("d22e4cba", "Tagi muszą być unikatowe"),
                i("ca72a540", "Osiągnięto maksymalną dozwoloną liczbę tagów"),
                i("bd96bf16", "Minimalna długość tagu to 1 znak, a maksymalna — 30 znaków"),
                i("j27623d4", "Tagi nie mogą zawierać spacji ani znaków specjalnych"),
                i("c5d1634e", "Rozumiem"),
                i("daedd9fa", "Każdy będzie mógł dołączyć do Twojej Grupy dyskusyjnej. Wszystkie oczekujące prośby o przyjęcie do Grupy zostaną automatycznie zaakceptowane."),
                i("h3c0f1a2", "Edytuj nazwę Grupy dyskusyjnej"),
                i("cb5e6510", "Wygląda na to, że nie udało się zapisać nowej nazwy. Spróbuj ponownie później."),
                i("a8955490", "Edytuj cel"),
                i("ced2292a", "Wygląda na to, że nie udało Ci się zapisać opisu celu. Spróbuj ponownie później."),
                i("ba74c098", "Edytuj pytanie"),
                i("bd3e0420", "Wygląda na to, że nie mogliśmy zapisać Twojego pytania. Spróbuj ponownie później."),
                i("b57baa7a", "Edytuj oznaczenia wyszukiwania "),
                i("f8caab7a", "Dodaj oznaczenia wyszukiwania, aby promować swoją grupę dyskusyjną w rekomendacjach i wynikach wyszukiwania."),
                i("f35a667a", "Wpisz tutaj oznaczenie wyszukiwania"),
                i("b057d5c6", "Oznaczenia wyszukiwania muszą być unikatowe"),
                i("cc961258", "Osiągnięto maksymalną dozwoloną liczbę oznaczeń wyszukiwania"),
                i("df4aca88", "Oznaczenia wyszukiwania muszą zawierać od 1 do 30 znaków"),
                i("ie58fa58", "Oznaczenia wyszukiwania nie mogą zawierać spacji ani znaków specjalnych"),
                i("hd176a01", function (e) {
                    return "Temat został zapisany! Aktualny temat grupy dyskusyjnej to " + e.newTopicName;
                }),
                i("i39a43cc", "Temat grupy dyskusyjnej został usunięty"),
                i("e81b196e", "Nie można zapisać nowego tematu"),
                i("c1f97ad4", "Edytuj temat"),
                i("g908eb0c", "Dodaj temat, aby ułatwić innym użytkownikom znajdowanie Twojej grupy dyskusyjnej! Wybierz temat, który najbardziej pasuje do Twojej grupy dyskusyjnej."),
                i("f18a8ca0", "Ustawienia spamu"),
                i("c8bd5d42", "Siła filtru spamu"),
                i("gfeb40a2", "Filtry spamu można dostosować z użyciem różnych poziomów czułości, aby zarządzać niechcianymi wpisami."),
                i("h766865c", "Automatyczne zgłaszanie przez system serwisu X"),
                i("fd1f413a", "Automatyczne zgłaszanie moderatorom przy użyciu wybranych funkcji. Gdy wpis zostanie zatwierdzony, system serwisu X nie będzie zgłaszał kolejnych wpisów jego autora. "),
                i("b1ba5fb4", "Wykrywanie spamerów"),
                i("ee195f28", "Słowa kluczowe spamu"),
                i("cf276a82", "Ukrywaj wpisy zgłoszone przez system serwisu X, dopóki nie zostaną zatwierdzone przez moderatorów"),
                i("a8c4c3fe", "Zgłaszaj wpisy użytkowników, którzy mają historię działań spamerskich"),
                i("j8de95ec", "Wprowadź słowa kluczowe, które będą wyzwalać automatyczne zgłoszenia"),
                i("ie873142", "Duża"),
                i("a977afa2", "Mała"),
                i("j715cb38", "Edytuj zablokowane słowa kluczowe"),
                i("b32ebbe8", "Dodaj słowa kluczowe, które umożliwią systemowi serwisu X automatyczne przesyłanie zgłoszeń moderatorom grupy dyskusyjnej"),
                i("acde5366", "Wpisz tutaj słowo kluczowe"),
                i("a5f66c34", "Słowa kluczowe muszą być unikatowe"),
                i("ea637914", "Osiągnięto maksymalną dozwoloną liczbę słów kluczowych"),
                i("fede6d3c", "Minimalna długość słowa kluczowego to 1 znak, a maksymalna — 30 znaków"),
                i("cc06e200", "Słowa kluczowe nie mogą zawierać spacji ani znaków specjalnych"),
                i("d94edeb4", "Twoja Grupa dyskusyjna może mieć maks. 10 zasad. Jasne zasady pomagają zapewnić wysoki poziom dyskusji i realizację celów Grupy."),
                i("j560c8ea", "Dodaj zasadę"),
                i("a9ba79c0", "Dobre zasady to podstawa dobrych Grup dyskusyjnych"),
                i("h5482c7a", "Przemyśl zasady swojej Grupy dyskusyjnej. Dzięki nim tworzy się atmosfera, a członkowie wiedzą, jak powinni się zachowywać."),
                i("d5033a7a", "Czy chcesz na przykład, żeby rozmowa dotyczyła ściśle danego tematu? Czy pozwalasz na autopromocję? Czy użytkownicy mogą używać wulgaryzmów?"),
                i("ee8c43a0", "Im jaśniejsze zasady ustalisz na początku, tym rzadziej będzie konieczne moderowanie treści w przyszłości."),
                i("gaa3239a", "Wygląda na to, że nie udało się zapisać nowej zasady. Spróbuj ponownie później."),
                i("a67445d6", "Osiągnięto limit"),
                i("fcbe0993", function (e) {
                    return "W każdej Grupie dyskusyjnej można dodać maks. " + e.maxRuleCount + " zasad. Aby dodać nową zasadę, musisz usunąć jedną z istniejących.";
                }),
                i("c66769a4", "Zasada"),
                i("ef02695b", function (e) {
                    return "Nazwa zasady musi składać się z od " + e.minCharacterCount + " do " + e.maxCharacterCount + " znaków";
                }),
                i("c8242020", "Opis (opcjonalnie)"),
                i("d32cf5e7", function (e) {
                    return "Maksymalna liczba znaków: " + e.maxCharacterCount;
                }),
                i("f8fa00c7", function (e) {
                    return "Descriptions can’t exceed " + e.maxCharacterCount + " characters";
                }),
                i("d45ae5e0", "Poinformuj Grupę dyskusyjną"),
                i("c1631260", "Poinformowanie wszystkich o zmianie którejś z zasad pomaga budować zaufanie."),
                i("d3190bde", "Zapisz zasadę"),
                i("ifd6e91c", "Anuluj i edytuj zasadę"),
                i("h99020e0", "Edytuj zasadę"),
                i("f74a5adc", "Każda Grupa dyskusyjna musi mieć co najmniej jedną zasadę. Możesz edytować istniejącą zasadę lub dodać nową i wówczas usunąć obecną."),
                i("fbb0ed92", "Usuń tę zasadę"),
                i("hed35472", "Zasada zostanie trwale usunięta i nie będzie można jej przywrócić"),
                i("c8677446", "Usuń zasadę"),
                i("c3a0d44e", "Anuluj i edytuj zasadę"),
                i("d703ce9e", "Dodaj listę do swojej grupy dyskusyjnej"),
                i("f21f023c", "Dodanie listy do grupy dyskusyjnej spowoduje wypełnienie kanału wybranymi dla Ciebie treściami. Wybierz jedną ze swoich list poniżej:"),
                i("gbc2cf50", "Twoje listy"),
                i("ef9462fa", "Nie masz odpowiedniej listy?"),
                i("fcda89f4", "Utwórz nową listę zawierającą konta w serwisie X, które publikują treści związane z Twoją grupą dyskusyjną. Ustaw tę listę jako publiczną, dzięki czemu pozostanie widoczna dla członków grupy dyskusyjnej."),
                i("c09609d8", "Utwórz listę"),
                i("dfddd842", "Wysłano prywatną wiadomość"),
                i("a3b3939b", function (e) {
                    return "@" + e.screen_name + " jest już zaproszony/a";
                }),
                i("db4f0cc9", function (e) {
                    return "@" + e.screen_name + " jest już w tej Grupie dyskusyjnej";
                }),
                i("h252ede6", "Nie masz już żadnych zaproszeń do wykorzystania."),
                i("a5cd93f9", function (e) {
                    return "Nie można teraz zaprosić @" + e.screen_name;
                }),
                i("i6568549", function (e) {
                    return "Masz jeszcze " + e.remaining_invite_count + " zaprosze" + n(e.remaining_invite_count, "nia", "ń", "nie", "ń");
                }),
                i("b4f16d00", "Wyszukaj osoby, które warto zaprosić"),
                i("ja1387a8", "Wyniki wyszukiwania będą obejmować tylko Twoich superobserwujących i osoby, które mogą otrzymywać prywatne wiadomości od wszystkich."),
                i("ae85768c", "Wyniki wyszukiwania obejmują tylko Twoich superobserwujących i osoby, które mogą otrzymywać prywatne wiadomości od wszystkich."),
                i("hb1e378e", "Zaproszeni"),
                i("d710b60c", "Analiza grupy dyskusyjnej"),
                i("c199e390", "Nowe wpisy"),
                i("b4f51cd6", "Liczba wpisów utworzonych w zeszłym tygodniu"),
                i("g6f8325a", "Nowi członkowie"),
                i("b2bb7276", "Liczba członków, którzy dołączyli w zeszłym tygodniu"),
                i("e2172c92", "Aktywni członkowie"),
                i("fe1a9f68", "Liczba członków, którzy publikowali w Twojej grupie dyskusyjnej"),
                i("e989927e", "Unikatowi publikujący"),
                i("d1386a90", "Liczba członków, którzy publikowali w Twojej grupie dyskusyjnej"),
                i("abf609f2", "Łączna liczba członków"),
                i("h2081878", "Łączna liczba członków w Twojej grupie dyskusyjnej"),
                i("a3235cd6", "Unikatowe wizyty"),
                i("g21e2a70", "Liczba użytkowników Twittera, którzy odwiedzili Twoją grupę dyskusyjną w zeszłym tygodniu"),
                i("ied6bac2", "Liczba polubień"),
                i("ced8d39a", "Liczba polubień w Twojej grupie dyskusyjnej w zeszłym tygodniu"),
                i("fb4f859c", "Liczba odpowiedzi"),
                i("h5a41cce", "Liczba odpowiedzi w Twojej grupie dyskusyjnej w zeszłym tygodniu"),
                i("i314218e", "Wyświetlane są statystyki z 7 ostatnich dni. Data aktualizacji: "),
                i("addbb11e", "Brak nowych wniosków o przyjęcie do Grupy dyskusyjnej"),
                i("c38131de", "Jesteś na bieżąco. Gdy pojawią się nowe prośby, zobaczysz je tutaj."),
                i("d7f13fb9", function (e) {
                    return "Użytkownik @" + e.screenName + " został zaakceptowany i jest teraz członkiem Grupy dyskusyjnej";
                }),
                i("a340df67", function (e) {
                    return "Użytkownik @" + e.screenName + " został odrzucony i nie może dołączyć do Grupy dyskusyjnej";
                }),
                i("jd8aae9d", function (e) {
                    return "Nie można teraz zaakceptować użytkownika @" + e.screenName + ". Spróbuj ponownie później.";
                }),
                i("i580e149", function (e) {
                    return "Nie można teraz odrzucić użytkownika @" + e.screenName + ". Spróbuj ponownie później.";
                }),
                i("b4a38e4e", "Ta osoba została przez Ciebie zablokowana. Jeśli zostanie ona przyjęta do grupy, trzeba będzie ją odblokować, aby umożliwić Ci przeglądanie jej wpisów."),
                i("f0956736", "Ta osoba została przez Ciebie wyciszona. Jeśli zostanie ona przyjęta do grupy, trzeba będzie wyłączyć jej wyciszenie, aby umożliwić Ci przeglądanie jej wpisów."),
                i("b7f1e58a", "Obserwuje Cię"),
                i("dffb0774", "Brak treści do sprawdzenia"),
                i("ab512f26", "Nie zarejestrowano dziennika akcji."),
                i("b8171558", "Zablokowano"),
                i("e32e7e1a", "Moderator"),
                i("b53fb7c6", "Wygląda na to, że nie możemy cofnąć teraz tej akcji. Spróbuj ponownie później."),
                i("c546ba07", function (e) {
                    return "Wyświetl profil użytkownika " + e.userName;
                }),
                i("h4516e4f", function (e) {
                    return "Wyszukaj wpisy użytkownika " + e.userName + " w tej grupie dyskusyjnej";
                }),
                i("j4d4a809", function (e) {
                    return "Moderator " + e.moderatorName + " ukrył wpis";
                }),
                i("ja589ea5", function (e) {
                    return "Moderator " + e.revertedModeratorName + " odkrył wpis";
                }),
                i("c904a2ff", function (e) {
                    return "Moderator " + e.moderatorName + " przypiął wpis";
                }),
                i("b43358cf", function (e) {
                    return "Moderator " + e.moderatorName + " odpiął wpis";
                }),
                i("bb6299a7", function (e) {
                    return "" + e.moderatorName;
                }),
                i("f0347599", function (e) {
                    return "" + e.moderatorName;
                }),
                i("e33d133b", function (e) {
                    return "" + e.moderatorName;
                }),
                i("c29ec092", function (e) {
                    return "" + e.revertedModeratorName;
                }),
                i("f6530972", "Odkryj wpis"),
                i("j68fc824", "Odkryto"),
                i("j9541e18", "Wyszukaj wpisy"),
                i("j10903d7", function (e) {
                    return "Moderator " + e.moderatorName + " usunął członka";
                }),
                i("e38bf285", function (e) {
                    return "Moderator " + e.revertedModeratorName + " przywrócił członka";
                }),
                i("dea0d437", function (e) {
                    return "Użytkownik " + e.userName + " dołączył do tej grupy dyskusyjnej";
                }),
                i("j10346f5", function (e) {
                    return "Użytkownik " + e.userName + " opuścił tę grupę dyskusyjną";
                }),
                i("jb159607", function (e) {
                    return "Moderator " + e.moderatorName + " zatwierdził żądanie użytkownika";
                }),
                i("af7a63eb", function (e) {
                    return "Moderator " + e.moderatorName + " odrzucił żądanie użytkownika";
                }),
                i("i717dfc3", function (e) {
                    return "Moderator " + e.revertedModeratorName + " ponownie zatwierdził żądanie użytkownika";
                }),
                i("ce5ac32b", function (e) {
                    return "" + e.moderatorName;
                }),
                i("a7f869a4", function (e) {
                    return "" + e.revertedModeratorName;
                }),
                i("efad949a", function (e) {
                    return "" + e.userName;
                }),
                i("d0ae5998", function (e) {
                    return "" + e.userName;
                }),
                i("ef020751", function (e) {
                    return "" + e.moderatorName;
                }),
                i("a46c5a63", function (e) {
                    return "" + e.moderatorName;
                }),
                i("h55401a4", function (e) {
                    return "" + e.revertedModeratorName;
                }),
                i("d31e695c", "Zatwierdź ponownie żądanie"),
                i("i9a18ce0", "Zatwierdzono ponownie"),
                i("i24de0fe", "Przywróć członka"),
                i("b1c662f8", "Przywrócono"),
                i("j2e04b1e", "Moderatorzy zajęli się wszystkimi zgłoszonymi wpisami."),
                i("hb21cdb6", "Zablokuj"),
                i("dc7a9436", "Zgłoś wpis do X"),
                i("e2bc5db0", "@X"),
                i("d0a1b248", function (e) {
                    return e.formattedCount + " użytkownik" + n(e.count, "ów", "ów", "a", "ów");
                }),
                i("cd4d48d2", "@X"),
                i("ff0f742a", function (e) {
                    return e.formattedCount + " użytkownik" + n(e.count, "ów", "ów", "a", "ów");
                }),
                i("dca19c06", "Ukryto ten wpis"),
                i("dd641764", "Zachowano ten wpis"),
                i("jf99d610", "Opinie Grupy dyskusyjnej"),
                i("bbd69672", "Moderator ukrył ten wpis, ponieważ narusza zasady grupy dyskusyjnej"),
                i("c730a21c", "Naruszona zasada:"),
                i("a5baa7d2", "Zapoznaj się z zasadami, które pomagają prowadzić bezpieczne i produktywne rozmowy"),
                i("icc32e3d", function (e) {
                    return "Moderator usunął Cię z grupy " + e.communityName + " za naruszenie jednej z zasad tej Grupy dyskusyjnej:";
                }),
                i("d7d9be8a", "Odkryj grupy dyskusyjne i wpisy"),
                i("cae9962e", "W tej chwili nie można znaleźć żadnej grupy dyskusyjnej."),
                i("c2117be6", "Widzisz te wszystkie rzeczy na pasku nawigacji? 👀"),
                i("c2c4dad4", "Wybierz coś, a pojawi się tutaj."),
                i("b7218496", "Brak tagów… na razie"),
                i("gc09bcfe", "Twoja Grupa dyskusyjna nie ma żadnych rozmów oznaczonych tagami, ale możesz to zmienić."),
                i("cf35a990", "Wczytuję wpisy z tagami w Grupie dyskusyjnej"),
                i("a1c41fe8", "Wpisy z tagami w grupie dyskusyjnej"),
                i("f27a2232", "Wyszukaj Grupę dyskusyjną"),
                i("ie2efe36", "Wyniki wyszukiwania w Grupie dyskusyjnej"),
                i("a7c2e06d", function (e) {
                    return e.communityName + " Grupa dyskusyjna";
                }),
                i("a94092a2", "Masz teraz dostęp do narzędzi moderatorów"),
                i("be6dfbae", "Jako moderator grupy dyskusyjnej możesz dodawać i usuwać jej członków."),
                i("b4f877be", "Nie znaleziono Grupy dyskusyjnej"),
                i("e48fbb02", "Zgłoś Grupę dyskusyjną"),
                i("b1614c34", "Grupy dyskusyjne — informacje"),
                i("j1dcedde", "Wyszukaj wpisy"),
                i("cc683fba", "Informacje o Grupie dyskusyjnej"),
                i("af7c11aa", "Grupa dyskusyjna – informacje"),
                i("fb974b24", "Publikować mogą tylko członkowie."),
                i("fcef2922", "Każdy może dołączyć do tej Grupy dyskusyjnej."),
                i("c93dd2c8", "Aby dołączyć do tej Grupy dyskusyjnej, musisz wysłać prośbę o dodanie Cię do niej i poczekać na jej akceptację."),
                i("gedb877d", "Wszystkie Grupy dyskusyjne są widoczne dla wszystkich użytkowników."),
                i("bf359e0e", "Informacje o Twojej nowej Grupie dyskusyjnej"),
                i("e8fcdd3a", "Na początek musimy określić podstawowe parametry Twojej Grupy dyskusyjnej, ale wszystkie ustawienia możesz w pełni dostosować do swoich potrzeb. Zaraz dowiesz się więcej na ten temat."),
                i("b37d580e", "Dostęp do Twojej Grupy dyskusyjnej jest ograniczony"),
                i("c6d9c07c", "Wszystkie grupy dyskusyjne są widoczne dla wszystkich użytkowników na X. Aby dołączyć do Twojej grupy dyskusyjnej, użytkownicy muszą poprosić o przyjęcie do niej lub otrzymać zaproszenie od moderatora lub któregoś z członków (jeśli taka możliwość jest dozwolona)."),
                i("ea3b38fa", "Twoja Grupa dyskusyjna jest otwarta"),
                i("i625c42e", "Wszystkie grupy dyskusyjne są widoczne dla wszystkich użytkowników na X. Każdy może dołączyć lub otrzymać zaproszenie do Twojej grupy dyskusyjnej."),
                i("ca7eeab0", "Wstępne zasady Twojej Grupy dyskusyjnej"),
                i("acae4034", "Ustawienia można zmienić za pomocą Narzędzi administratora"),
                i("e2186ee2", "Brak Ci weny? To nic. Możesz to później zmienić."),
                i("a0e3ece4", "Szczegóły Grupy dyskusyjnej"),
                i("d11f73ea", "Treści dla dorosłych"),
                i("hb9400dc", "Zobacz więcej"),
                i("b71a08a0", "Grupa dyskusyjna dla subskrybentów"),
                i("d0574662", "Dostosuj ustawienia powiadomień"),
                i("fc16f13a", "Które powiadomienia chcesz otrzymywać?"),
                i("be341c46", "Pokoje w Grupach dyskusyjnych (rozmowy głosowe)"),
                i("fbe88a32", "Chaty na żywo w Grupach dyskusyjnych"),
                i("b551cd1e", "Przypięte wpisy"),
                i("i9f39962", "Przypnij grupę dyskusyjną"),
                i("bc7f90a0", "Wyróżnij grupę dyskusyjną w swoim profilu"),
                i("j5a37508", "Przypnij grupę dyskusyjną do ekranu Strona Główna"),
                i("c7a4610a", "Odepnij grupę dyskusyjną od ekranu Strona Główna"),
                i("bec3b8fa", "Udostępnij Grupę dyskusyjną"),
                i("cc7d5b88", "Zaproś za pomocą prywatnej wiadomości"),
                i("c66b37fa", "Lista kontrolna Grupy dyskusyjnej"),
                i("g2768d0e", "Kilka kroków, które pozwolą Ci przygotować się na wielkie otwarcie Twojej Grupy dyskusyjnej…"),
                i("b192b58c", "Anuluj listę kontrolną"),
                i("gd302780", "Zapoznaj się z Grupą dyskusyjną, którą utworzyłem/am:"),
                i("h5890b1a", "Niezakończone"),
                i("b4a6faca", "Przejrzyj swoje zasady"),
                i("a01e1a7c", "Personalizuj ustawienia Grupy dyskusyjnej"),
                i("f493480c", "Opublikuj wpis w Twojej grupie dyskusyjnej"),
                i("i9b7f6ba", "Ładowanie wpisów"),
                i("c22e8902", "Wypróbuj"),
                i("a3466e1c", "Śledź rozmowy za pomocą tagów"),
                i("a524bb7e", "Tagi ułatwiają tworzenie i wyszukiwanie tematycznych rozmów w Grupie dyskusyjnej oraz dołączanie do nich."),
                i("he8db880", "Wygląda na to, że ta Grupa dyskusyjna nie istnieje"),
                i("cc684fbc", "Grupa dyskusyjna została usunięta – a może nigdy nie istniała? Życie pełne jest niespodzianek."),
                i("b4f8b518", "Twórcy treści polecani dla Ciebie"),
                i("f5c41e22", "Przejdź do ustawień funkcji udzielania uprawnienia"),
                i("b9226ec1", "Zalogowany jako "),
                i("f47b48f6", "użytkownik"),
                i("b2ca74aa", "Przełączasz się do konta, do którego przekazano Ci uprawnienia"),
                i("ba77b438", "Przełącz konta"),
                i("g5261e91", function (e) {
                    return "Działasz teraz w imieniu użytkownika @" + e.screenName + ".";
                }),
                i("cc15a3ea", "Pamiętaj, że to konto nie należy do Ciebie. Jako administrator możesz wysyłać prywatne wiadomości, publikować wpisy i tworzyć listy oraz je wyświetlać. Możesz również zapraszać i usuwać współużytkowników konta oraz wyświetlać analizy wpisów."),
                i("e406250c", "Pamiętaj, że to konto nie należy do Ciebie. Jako współużytkownik możesz wysyłać prywatne wiadomości, publikować wpisy i tworzyć listy oraz je wyświetlać."),
                i("e6718a62", "Tylko właściciel konta może używać tej funkcji"),
                i("ba411b6f", "Wyślij nam opinię"),
                i("f01ee14b", "Wyślij nam opinię"),
                i("dbc85148", "Wybierz wiadomość"),
                i("a073658c", "Wybierz jedną z rozmów, rozpocznij nową lub przeglądaj dalej."),
                i("f325afc4", "Utwórz PW"),
                i("f5dc353c", "Filtrowanie potencjalnie nieodpowiednich treści jest włączone"),
                i("daeda054", "Przejdź do ustawień"),
                i("fe1eaa96", "Wyświetlane będą ostrzeżenia dotyczące multimediów, które mogą zawierać nieodpowiednie treści (takie jak nagość, treści erotyczne lub przemoc). W dowolnym momencie możesz wyłączyć tę opcję w Ustawieniach."),
                i("hc32acba", "Usunąć zaproszenia do rozmowy?"),
                i("f9048f58", "Wybrane zaproszenia do rozmowy zostaną usunięte ze skrzynki odbiorczej. Tej akcji nie można cofnąć."),
                i("a9d0d7f0", "Edycja zbiorcza"),
                i("eb7de4aa", "Pokaż inne wiadomości, również te, które mogą zawierać obraźliwe treści."),
                i("ee8c0c8a", "Wiadomości przychodzące lub wiadomości grupowe od osób, których nie obserwujesz, będą pojawiać się tutaj, a Ty będziesz mieć możliwość ich zaakceptowania lub usunięcia."),
                i("ff599112", "Utwórz grupę"),
                i("c602600a", "Dodaj osoby"),
                i("fa2033f6", "Treści szyfrowane"),
                i("aa59bb6a", "Wyślij wpis indywidualnie"),
                i("a2ccb2e8", "Wysłano prywatną wiadomość."),
                i("f906f464", "Wpis został udostępniony grupie."),
                i("i8a99aae", "Wpis został udostępniony indywidualnie."),
                i("hbbc401c", "Wyślij do grupy osób"),
                i("e1bde73f", function (e) {
                    return "Nie można wysyłać wiadomości do @" + e.screenName;
                }),
                i("f7289cd6", "Wybrano rozmowę grupową"),
                i("e6cced4e", "Tylko rozmowy pomiędzy dwiema osobami mogą być „wysyłane do grup”. Swoją wiadomość możesz też wysłać osobno."),
                i("e3e58b6e", "Informacje o rozmowie"),
                i("a9ddbb94", "Informacja o grupie"),
                i("dd4779a0", "Zarządzaj tagami"),
                i("ca9af866", "Tagi:"),
                i("e62d3c10", "Nie istnieje konto o takiej nazwie. Spróbuj jeszcze raz."),
                i("h8403fb6", "Teraz nie możesz ich dodać do tej rozmowy."),
                i("ja522ed4", "Teraz nie możesz dodać niektórych z tych osób do tej rozmowy."),
                i("d87bff5a", "Wczytują się informacje o rozmowie."),
                i("cabb453e", "Nazwa grupy"),
                i("eb1bb5a2", "Zobacz wszystkie osoby"),
                i("a70436ac", "Rozpocznij tworzenie szyfrowanej wiadomości"),
                i("a7f20223", function (e) {
                    return "Wycisz powiadomienia dotyczące użytkownika " + e.name;
                }),
                i("g2f04a6b", function (e) {
                    return "Wyłączyłeś/aś wyciszenie użytkownika " + e.name;
                }),
                i("i453fedf", function (e) {
                    return "Wyciszono do " + e.expiration;
                }),
                i("b3dfd51a", "Wycisz wzmianki"),
                i("cc7c8ce6", "Nie wysyłaj powiadomień, kiedy ktoś wspomni o mnie w tej rozmowie."),
                i("hab58674", "Wzmianki wyłączone"),
                i("e3c6e080", "Wzmianki włączone"),
                i("f33ef58a", "Zgłoś rozmowę ze względu na treści nielegalne w UE "),
                i("d1a6dbe6", "Zablokuj wszystko"),
                i("f24af200", "Zablokuj wiadomości prywatne"),
                i("a30e1677", function (e) {
                    return "Zablokuj @" + e.screenName + ", użytkownik @" + e.screenName + " nie będzie już mógł Cię obserwować ani wysyłać do Ciebie wiadomości, a Ty nie będziesz widzieć powiadomień od @" + e.screenName;
                }),
                i("iae09949", function (e) {
                    return "Zablokować wiadomości prywatne od użytkownika @" + e.screenName + "?";
                }),
                i("e778e3d8", "Pomyślnie zablokowano wiadomości prywatne"),
                i("b7867912", "Odblokuj wszystko"),
                i("gaddb872", "Odblokuj wiadomości prywatne"),
                i("d83414a1", function (e) {
                    return "Odblokować użytkownika @" + e.screenName + "? Umożliwi mu to obserwowanie Cię i wyświetlanie Twoich wpisów.";
                }),
                i("a5bbfecd", function (e) {
                    return "Odblokować użytkownika @" + e.screenName + "? Umożliwi mu to obserwowanie Cię oraz interaktywne używanie Twoich wpisów publicznych.";
                }),
                i("cde6e1ff", function (e) {
                    return "Odblokować wiadomości prywatne od użytkownika @" + e.screenName + "?";
                }),
                i("j37c4674", "1 godzina"),
                i("je7e1fed", function (e) {
                    return "Wyciszyłeś/aś użytkownika " + e.name + " na godzinę";
                }),
                i("hf94a2d6", "Wyciszono na 1 godzinę"),
                i("fb7a43c6", "8 godzin"),
                i("e95c8f8b", function (e) {
                    return "Wyciszyłeś/aś użytkownika " + e.name + " na 8 godzin";
                }),
                i("bd54fad2", "Wyciszono na 8 godzin"),
                i("cb5bf56e", "1 tydzień"),
                i("gb7a130b", function (e) {
                    return "Wyciszyłeś/aś użytkownika " + e.name + " na tydzień";
                }),
                i("f6fce0fe", "Wyciszono na tydzień"),
                i("i78153dd", function (e) {
                    return "Wyciszyłeś/aś użytkownika " + e.name + " na stałe";
                }),
                i("je9455da", "Wiadomości są szyfrowane"),
                i("b5b0afa4", "Personalizuj swój widok"),
                i("ec5880e6", "Te ustawienia mają wpływ na wszystkie konta w serwisie X wyświetlane w tej przeglądarce."),
                i("babfa32c", "Szybko dostosuj swój widok"),
                i("a2a2f98e", "Zobacz nowości"),
                i("b4a361c0", "Możesz dostosować kolor i rozmiar tekstu oraz włączyć tryb ciemny. Te ustawienia są widoczne tylko dla Ciebie."),
                i("c797b44e", "Najnowsze historie w serwisie X — opowiedziane we wpisach."),
                i("a19ce060", "Funkcja Odkryj jest niedostępna."),
                i("f7d1a8e0", "Aplikacja na Androida"),
                i("aab2fae0", "Aplikacja na iOS"),
                i("a35d9c9a", "Zasoby"),
                i("i6671128", "Udało Ci się odblokować dodatkowe funkcje serwisu X"),
                i("d5e4d0a6", "Możesz dołączyć do rozmowy i łatwiej nawiązać kontakty. Już teraz:"),
                i("a97bc07e", "Odblokuj dodatkowe funkcje serwisu X"),
                i("a72188d6", "Aby serwis X był doskonałym miejscem dla wszystkich, musimy sprawdzić, czy to konto należy do człowieka. Możesz nam pomóc, wchodząc w interakcje na swojej osi czasu i nawiązując kontakt z innymi użytkownikami. Gdy zweryfikujemy Twoje konto, zyskasz następujące możliwości:"),
                i("a4ee9572", "Wyświetlaj Tweety większej liczbie osób"),
                i("e5f4eac0", "Twoje treści będą łatwiejsze do odnalezienia. Będą też wyświetlać się w wynikach wyszukiwania i trendach."),
                i("c7832a72", "Nawiąż bezpośredni kontakt z innymi"),
                i("i1ccd17a", "Wysyłaj prywatne wiadomości do użytkowników, którzy Cię nie obserwują bez obaw, że zostaną one odfiltrowane."),
                i("hc965308", "Zabawny"),
                i("eb78b77e", "Tryb zabawny"),
                i("aa8ece10", "Wypróbuj witrynę grok.com"),
                i("gb5fb7d0", "Tryb skupienia"),
                i("g5665caa", "Wyjdź z trybu skupienia"),
                i("a372681e", "Kopiuj link udostępniania"),
                i("fbc79f6a", "Historia czatu"),
                i("b61ad410", "Historia"),
                i("b3de2628", "Brak dostępnej historii czatu"),
                i("acfbfb28", "Tutaj będą widoczne Twoje przyszłe rozmowy."),
                i("i1147548", "Historia wyszukiwania za pomocą Groka"),
                i("ab437026", "Nie znaleziono rozmów"),
                i("e12569ec", "Spróbuj wyszukać coś innego."),
                i("d4eb0e26", "Zmień nazwę"),
                i("c64975ea", "Nie masz jeszcze żadnych rozmów w Ulubionych"),
                i("a3e3db6e", "Kliknij gwiazdkę, aby zapisać czaty, do których często wracasz"),
                i("f4ae77ac", "Brak dostępnej historii obrazów"),
                i("d57d337e", "Tutaj będą widoczne Twoje wygenerowane obrazy."),
                i("dab087ee", "Czaty"),
                i("a911623c", "Zdjęcia"),
                i("ae9cdac6", "Historia czatu"),
                i("b198a392", "Rozmowa z Grokiem"),
                i("d16329b4", "Kopiuj rozmowę"),
                i("af6c4470", "Coś poszło nie tak. Spróbuj ponownie."),
                i("gf43d270", "Kontynuuj tę rozmowę"),
                i("f4b5fae2", "Wysłanie wiadomości spowoduje skopiowanie tej rozmowy do Twojej historii"),
                i("eb0d91ac", "Utwórz obraz za pomocą Groka"),
                i("c5a23514", "Narysuj mnie"),
                i("g1cb8096", "Zaskocz mnie"),
                i("a5a3df56", "Opisz obraz, aby go utworzyć"),
                i("gbb4e90a", "losowy psychodeliczny świat z marzeń sennych"),
                i("af21f92e", "błogość"),
                i("e207cba2", "losowe zawody sportowe"),
                i("b1323f10", "modelka idąca wzdłuż wybiegu podczas paryskiego tygodnia mody"),
                i("g6a90174", "zabawne hipsterskie zwierzę"),
                i("jdc4b66c", "piękno świata"),
                i("ec601934", "Remiks"),
                i("f9ecd3ba", "Wstaw jako wpis"),
                i("af652514", "Różnica"),
                i("j95bac7a", "Dostosuj Groka"),
                i("c5665922", "Co Grok powinien wiedzieć o Tobie?"),
                i("ff625c40", "W jaki sposób Grok ma odpowiadać?"),
                i("e5c7d602", "Włącz dla wszystkich czatów"),
                i("d5e03fbc", "Źródło danych Groka"),
                i("a294d0c6", "Stwórz własną wersję"),
                i("b38adba2", "X — aplikacja do wszystkiego"),
                i("d05ae004", "Mecz NHL"),
                i("d35ad22c", "Obejrzyj ostatni mecz NHL"),
                i("e806daa2", "Mecz piłki nożnej"),
                i("cc2c2eca", "Obejrzyj ostatni mecz piłki nożnej"),
                i("bcdeae66", "Portal Grand Prix Formuły 1"),
                i("e30e4bea", "Obserwuj Grand Prix w serwisie X."),
                i("be548ecb", function (e) {
                    return e.teamName1 + " kontra " + e.teamName2;
                }),
                i("b23bb579", function (e) {
                    return e.teamName1 + " kontra " + e.teamName2 + " — aktualizacje w serwisie X";
                }),
                i("b72c924c", "Wyszukiwanie ofert pracy"),
                i("f4da95a0", "Rekomendacje ofert pracy"),
                i("eedd808c", "Zapisane oferty pracy"),
                i("e0ba641a", "Dla firm"),
                i("f9e6381a", "Wyszukaj oferty pracy"),
                i("fb15ec28", "Pobieraj rekomendacje ofert pracy"),
                i("ece910f0", "Przeglądaj oferty pracy wybrane podstawie Twoich preferencji"),
                i("jd08bc14", "Rekomendacje z biegiem czasu stają się coraz lepsze"),
                i("de0a4a72", "Określ, gdzie mają być wyświetlane rekomendacje"),
                i("db8c4158", "Złóż wniosek"),
                i("d9c8057a", "Kliknij tutaj"),
                i("a71d7584", "Wyróżnione"),
                i("d2b8da2c", "Inżynieria oprogramowania"),
                i("cd958040", "Dane i analizy"),
                i("c5760ca2", "Produkt"),
                i("d31b4a2a", "Projektowanie"),
                i("f38959a6", "Sprzedaż"),
                i("bc78a26c", "Operacje"),
                i("ec28738e", "Kadry i HR"),
                i("icb06308", "Finanse i księgowość"),
                i("d0b978ec", "Kwestie prawne i przepisy"),
                i("af19cdc2", "Nauka i inżynieria"),
                i("e4a51fca", "Medycyna"),
                i("e8ca78ae", "Budownictwo i usługi budowlane"),
                i("e25d75e4", "Staż"),
                i("e89b3f04", "Poziom podstawowy"),
                i("h55825dc", "Młodszy"),
                i("cc537386", "Średni poziom"),
                i("jfc3cece", "Starszy"),
                i("e1b683aa", "Lider"),
                i("c4627fda", "Menedżer"),
                i("db75b47c", "Osoba na stanowisku wykonawczym"),
                i("i312f0ce", "Na miejscu"),
                i("b4aff05e", "Hybrydowa"),
                i("c08b9138", "Zdalna"),
                i("ia5d6422", "Wymagane jest przebywanie w lokalizacji fizycznej"),
                i("h97c7f42", "Część pracy musi być wykonywana w placówce"),
                i("ibed2d04", "Praca w placówce nie jest wymagana"),
                i("f508c49c", "Kopiuj link do oferty pracy"),
                i("d6825dce", "Udostępnij w wiadomości prywatnej"),
                i("b9613442", "Udostępnij za pomocą wpisu"),
                i("c2b3f0da", "Promuj w profilu"),
                i("c791d3fc", "Udostępnij ofertę pracy"),
                i("eb517058", "Firmy AI"),
                i("b677cb9b", function (e) {
                    return "Filtry firm: " + e.count;
                }),
                i("ja04d37c", "Wprowadź nazwy firm"),
                i("a1876045", function (e) {
                    return "Filtry typów zatrudnienia: " + e.count;
                }),
                i("fb146dd2", "Typ zatrudnienia"),
                i("a7090408", "Słowo kluczowe"),
                i("f16e9a15", function (e) {
                    return "Filtry typów lokalizacji: " + e.count;
                }),
                i("fa7d455a", "Typ lokalizacji"),
                i("caa606db", function (e) {
                    return "Filtry starszeństwa: " + e.count;
                }),
                i("jda06238", "Starszeństwo"),
                i("j595df68", "Zaktualizuj preferencje dotyczące rekomendacji:"),
                i("a1227d5e", "Włącz rekomendacje"),
                i("bae2f5f0", "Dodaj tę ofertę pracy do swojego profilu"),
                i("cbcaaa1a", "Poniżej pokazano, jak będzie ona wyglądać."),
                i("f58cf1ac", "Dodaj ofertę pracy"),
                i("j4ae9960", "Wystąpił problem podczas dodawania tej oferty pracy do Twojego profilu."),
                i("caa352f0", "Zbyt wiele ofert pracy"),
                i("i08bee0e", "Zbyt wiele promowanych ofert pracy"),
                i("d7ccaea2", "Aktualnie obowiązuje ograniczenie do 3 aktywnych ofert pracy."),
                i("h05e4a7a", "Obowiązuje limit 10 promowanych ofert pracy."),
                i("b518daae", "Przejdź do panelu danych Rekrutacja"),
                i("f48e9c52", "Oferta pracy została dodana pomyślnie!"),
                i("f6757978", "Za pomocą panelu danych Rekrutacja możesz usunąć tę ofertę pracy oraz dodać inne oferty pracy."),
                i("i329c5a6", "Wyświetl panel danych Rekrutacja"),
                i("h39a5448", "Promuj swoje oferty pracy, używając usługi Rekrutacja w serwisie X!"),
                i("d204515c", "Jednym kliknięciem możesz dodawać oferty pracy do swojego profilu."),
                i("ecb3df70", "Wpisy dotyczące wydarzenia"),
                i("a01d5a7c", "Te treści są niedostępne, bo zostały utworzone przez użytkownika, którego zablokowałaś/eś."),
                i("cab51f93", function (e) {
                    return "Te treści są niedostępne, bo użytkownik @" + e.screenName + " zablokował Cię.";
                }),
                i("eaaca5dc", "Wynik"),
                i("abdcd68a", "Wczytywanie wydarzenia"),
                i("cfb57adb", function (e) {
                    return "Wpis na temat " + e.hashtag;
                }),
                i("b1037710", "Napisz, co myślisz"),
                i("bb980db0", "Oś czasu wydarzeń"),
                i("ffd929c1", function (e) {
                    return "NOWOŚĆ" + e.ttc_live_event;
                }),
                i("c9b302f8", "Zajrzyj później, aby przejrzeć najnowsze produkty."),
                i("cfe836d1", function (e) {
                    return e.percent + "% taniej";
                }),
                i("efb132c3", function (e) {
                    return e.title + " - " + e.description + " za " + e.price;
                }),
                i("f27deeea", "Okno sprzedażowe"),
                i("e8166cee", function (e) {
                    return "" + e.formattedPrice;
                }),
                i("g66c8348", "POWTÓRKA TRANSMISJI"),
                i("j1d352d8", "Przypomnienie ustawione"),
                i("d18909d4", "Ustaw przypomnienie"),
                i("b0b38774", "Multimedia w nagłówku"),
                i("a7a119ec", "Odłącz"),
                i("cfadb00e", "Słuchacze"),
                i("db4620aa", "POKÓJ NA ŻYWO"),
                i("c958e692", "NAGRANIE POKOJU"),
                i("i2c2bfb7", function (e) {
                    return e.count + " słuchający" + n(e.count, "ch", "ch", "", "ch");
                }),
                i("i3f7ff00", "Miniatura mediów"),
                i("h400d7c2", "DOŁĄCZ DO POKOJU"),
                i("be6ef5b4", "WKRÓTCE"),
                i("ca25ebae", "Zakłady od"),
                i("e749753a", "Zakres"),
                i("ea885dec", "Pieniądze"),
                i("cde48000", "Masz problem z hazardem? Zadzwoń na numer 1-800-GAMBLER."),
                i("g53d5df6", "Skupienie"),
                i("d1e0a75f", function (e) {
                    return "Dla Ciebie" + e.noun;
                }),
                i("dafd69e9", function (e) {
                    return "Obserwujesz" + e.noun;
                }),
                i("d80a1c37", function (e) {
                    return "Subskrybujesz" + e.noun;
                }),
                i("d3619250", "Najbardziej lubiane"),
                i("f5edfbde", "Wylogować Cię z serwisu X?"),
                i("f12b4db5", function (e) {
                    return "Chcesz wylogować się z konta @" + e.screenName + "?";
                }),
                i("ia5ff8b6", "W każdej chwili możesz się ponownie zalogować. Aby tylko przełączyć się między kontami, dodaj bieżące konto."),
                i("ea3750c4", "Dotyczy to tylko tego konta. Pozostaniesz zalogowany/a na innych kontach."),
                i("gc6866f8", "Wylogowywanie"),
                i("f8ad0092", "Wystąpił błąd. Spróbuj zalogować się ponownie."),
                i("h2c7767e", "Twoja sesja wygasła. Spróbuj zalogować się ponownie."),
                i("e83047c2", "Wpisano zbyt wiele niepoprawnych kodów. Spróbuj zalogować się ponownie."),
                i("g4b108ee", "Wygenerowano zbyt wiele kodów zapasowych. Spróbuj ponownie uruchomić weryfikację logowania na Twoim telefonie."),
                i("a9be9b44", "Kontynuuj w serwisie X"),
                i("e55188f0", "Jesteś zalogowany/a na to konto w swojej przeglądarce"),
                i("d55d8fe2", "Czy chcesz kontynuować, korzystając z tego konta?"),
                i("g806008e", "Zaloguj się na inne konto"),
                i("c55f5c9a", "Coś poszło nie tak, ale nie martw się, to nie Twoja wina. Spróbujmy jeszcze raz."),
                i("bfb6be8a", "Zarabiaj w serwisie X"),
                i("ed6c6da2", "Pierwszym krokiem na drodze do monetyzacji jest uzyskanie weryfikacji za pośrednictwem subskrypcji X Premium."),
                i("h93b6580", "Zarabiaj na udostępnianiu treści o wysokiej jakości. Twoje zarobki będą rosły wraz z liczbą użytkowników, których zaangażujesz w serwisie X."),
                i("eea6d8f8", "Uprawnienie do udziału w dochodach dla twórców treści"),
                i("a0e8811e", "Stwórz bazę fanów"),
                i("e1a74ac0", "Oferuj ekskluzywne treści osobom, które najbardziej Cię wspierają, i zyskaj cykliczne dochody."),
                i("cd3a6f9a", "Uprawnienie do oferowania subskrypcji"),
                i("c35e6144", "Twórz lepsze treści dzięki narzędziom Premium"),
                i("b9dbeb34", "Publikuj dłuższe wpisy, używaj aplikacji Media Studio i funkcji Analizy oraz korzystaj z priorytetowej pomocy technicznej."),
                i("b2d41138", "Większy zasięg = większe zarobki"),
                i("defa7f12", "Korzystaj z funkcji Wzmocnienie odpowiedzi, która zwiększy widoczność Twoich wpisów i pozwoli Ci szybciej się rozwijać."),
                i("i3e4955d", "Tutaj"),
                i("cea1c00e", "Odblokuj możliwość interakcji"),
                i("f8e6a280", "Właściciele nowych kont są zobowiązani do uiszczenia niewielkiej rocznej opłaty, zanim będą mogli publikować wpisy, oznaczać wpisy jako ulubione, dodawać wpisy do Zakładek oraz odpowiadać na wpisy. Ma to na celu ograniczenie spamu oraz stworzenie lepszego środowiska dla wszystkich użytkowników. Nadal możesz bezpłatnie obserwować inne konta i przeglądać serwis X."),
                i("h968efc6", "Właściciele nowych kont są zobowiązani do uiszczenia niewielkiej opłaty, zanim będą mogli publikować wpisy, oznaczać wpisy jako ulubione, dodawać wpisy do Zakładek oraz odpowiadać na wpisy. Ma to na celu ograniczenie spamu oraz stworzenie lepszego środowiska dla wszystkich użytkowników. Nadal możesz bezpłatnie obserwować inne konta i przeglądać serwis X."),
                i("b66b62a4", "Warunki dotyczące zakupów"),
                i("e5b5faa6", "Postanowienia programu „Nie jestem botem”"),
                i("i61a221c", "Subskrybuj i dokonaj płatności"),
                i("fce91ab4", "Coś poszło nie tak."),
                i("a235cb76", "Wystąpił problem podczas przetwarzania Twojej subskrypcji Nie jestem botem. Sprawdź swoje informacje płatnicze i spróbuj ponownie."),
                i("a8eea654", "Sfinalizowano zakup."),
                i("bc8baa08", "Zasubskrybowano"),
                i("a98ba778", "Osi czasu powiadomień"),
                i("j887d006", "To tutaj dzieje się wszystko: polubienia, wpisy podane dalej i cała reszta."),
                i("c06d4306", "Kiedy ktoś o Tobie wspomni, dowiesz się o tym tutaj."),
                i("ge7c661a", "W tym miejscu znajdziesz polubienia, wzmianki, wpisy podane dalej i wiele innych informacji pochodzących od innych zweryfikowanych osób."),
                i("d3de3b5c", "W tym miejscu znajdziesz polubienia, wzmianki, wpisy podane dalej i wiele innych informacji pochodzących od Twoich subskrybentów."),
                i("e3f9838d", "Dowiedz się więcej"),
                i("eba8b1c8", "Ty decydujesz o tym, w których rozmowach pojawiają się wzmianki na Twój temat"),
                i("j745b8a6", "Użyj menu akcji (trzy kropki widoczne obok wpisu), aby usunąć oznaczenie siebie i opuścić rozmowę."),
                i("c380d684", "Twoje zgłoszenie"),
                i("da7cf0d8", "Oflagowaliśmy te wpisy jako zawierające nieodpowiednie treści"),
                i("a6da21a1", function (e) {
                    return "Aplikacja " + e.appName + " chce uzyskać dostęp do Twojego konta w serwisie X";
                }),
                i("f4392d00", "Autoryzuj aplikację"),
                i("ee4dca3c", "anuluj link"),
                i("bb347bbc", "Centrum Pomocy"),
                i("be38d34e", "Aby móc używać tej aplikacji, musisz zalogować się do serwisu X."),
                i("e087691a", "Nie udało się zazwolić na dostęp aplikacji. Spróbuj zalogować się ponownie."),
                i("e7dd62c4", "Klikając przycisk „Autoryzuj aplikację”, udzielasz firmie xAI dostępu do swoich danych z serwisu X, które obejmują:"),
                i("debbdc98", "Twój profil użytkownika serwisu X, informacje o koncie w serwisie X, ustawienia serwisu X oraz preferencje dotyczące serwisu X."),
                i("d9cf7c9c", "Twoje wpisy w serwisie X widoczne na Twoim koncie w serwisie X, w tym wpisy opublikowane na wszystkich kontach (publicznych lub chronionych), które możesz wyświetlać, oraz ze wszystkich takich kont."),
                i("cdf40068", "Twoja historia konwersacji z Grokiem w serwisie X."),
                i("cea71014", "Wczytywanie Twoich kontaktów..."),
                i("b5474bd2", "Coś poszło nie tak."),
                i("ab4b970a", "Używając aplikacji serwisu X, wróć do poprzedniego kroku i poproś o wysłanie nowej weryfikacyjnej wiadomości e-mail."),
                i("j6d103b8", "Załóż konto w serwisie X, aby mieć dostęp do najświeższych informacji ze świata rozrywki, sportu i polityki oraz brać udział w dyskusjach na żywo."),
                i("ca042c78", "Zaloguj się do serwisu X"),
                i("ff869362", "Zaloguj się do serwisu X, aby zobaczyć najnowsze wiadomości. Dołącz do rozmowy, obserwuj konta, wyświetl swoją główną oś czasu i przeczytaj aktualne wpisy osób, które znasz."),
                i("f4a654a4", "Zobacz na Foursquare"),
                i("c09de2d4", "Przeszukaj oś czasu"),
                i("i1801686", "Nie znaleziono wpisanego terminu. Spróbuj wyszukać coś innego."),
                i("a0b4541c", "Coś poszło nie tak, ale nie martw się, to nie Twoja wina"),
                i("d7eebb60", "Trwa konfigurowanie Twojej subskrypcji"),
                i("a452ab68", "Może to potrwać kilka sekund."),
                i("b3bad3b2", "@premium"),
                i("accbcc78", "Zaktualizowano pomyślnie"),
                i("e957c20e", "Pełny dostęp — bezpłatna wersja próbna"),
                i("a1436e70", "Teraz możesz dodawać oferty pracy do swojego profilu, dzięki czemu będą one widoczne w Twojej sieci. Po zatwierdzeniu Twojego wniosku te oferty pracy będą mogły pojawiać się w wynikach wyszukiwania milionów użytkowników."),
                i("f9c85cec", "Wymagane działanie: prześlij i zweryfikuj dokumenty"),
                i("f178f393", function (e) {
                    return "Prześlij wymagane dokumenty do " + e.date + ". Zazwyczaj trwa to ok. 10 minut.";
                }),
                i("f9fbeabc", "Dokumenty rejestracyjne Twojej organizacji"),
                i("b4c80f5c", "Dokument wydany przez organ państwowy"),
                i("f0915094", "Działający aparat urządzenia"),
                i("f259d3f3", function (e) {
                    return "Ważne: dokumenty muszą zostać przesłane do " + e.date + " albo Twój wniosek zostanie odrzucony bez zwrotu kosztów.";
                }),
                i("d35f645b", function (e) {
                    return "Otwarte (" + e.count + ")";
                }),
                i("bf534b31", function (e) {
                    return "Polecane (" + e.count + ")";
                }),
                i("c35aded2", "Zarchiwizowane"),
                i("b97e952a", "Wygląda na to, że nie dodano jeszcze żadnej oferty pracy."),
                i("cf1fa156", "Wygląda na to, że nie promujesz jeszcze żadnej oferty pracy."),
                i("fa4a4f50", "Wygląda na to, że nie zarchiwizowano jeszcze żadnej oferty pracy."),
                i("c5fb5a1a", "Brak ofert pracy"),
                i("e9b91cde", "Dodaj ofertę pracy"),
                i("c270ef3e", "Archiwizuj"),
                i("fe8872f4", "Sukces"),
                i("d523cd74", "Zarchiwizować tę ofertę pracy?"),
                i("jfd0b34a", "Zarchiwizowanie oferty pracy spowoduje usunięcie jej z Twojego profilu."),
                i("e2247e08", "System ATS"),
                i("b737c0b5", function (e) {
                    return "" + e.ats;
                }),
                i("e0ce628e", "Wystąpił błąd podczas wysyłania zaproszenia. Spróbuj ponownie później."),
                i("ddf35536", "Wystąpił błąd podczas wysyłania zaproszenia. Spróbuj ponownie później."),
                i("db7144b6", "Wystąpił błąd podczas zmiany typu powiązania. Spróbuj ponownie później."),
                i("be78e5fa", "Wystąpił błąd podczas usuwania konta powiązanego. Spróbuj ponownie później."),
                i("fa9709ba", "Wystąpił problem podczas tworzenia aplikacji. Spróbuj ponownie później."),
                i("j62f13fc", "Wystąpił problem podczas aktualizowania tej oferty pracy. Spróbuj ponownie później."),
                i("ff5716fc", "Wystąpił problem podczas tworzenia tej oferty pracy. Spróbuj ponownie później."),
                i("fd059188", "Wystąpił problem podczas synchronizowania Twoich ofert pracy. Spróbuj ponownie później."),
                i("b82b5c00", "Wystąpił błąd podczas aktywowania kredytu reklamowego. Spróbuj ponownie później."),
                i("d74adc30", "Dodano niepoprawne konto reklamowe"),
                i("e4323c36", "Wprowadzony identyfikator konta reklamowego nie pasuje do Twojej organizacji ani jej kont powiązanych."),
                i("b3323ada", "Dodaj kartę kredytową do swojego konta w witrynie ads.twitter.com"),
                i("ac325eb8", "Aby aktywować swój kredyt reklamowy, musisz dodać kartę kredytową do swojego konta reklamowego w witrynie ads.twitter.com."),
                i("j4e6e966", "Wymagana jest analiza konta reklamowego"),
                i("ef86e7f6", "Twoje konto zostało oflagowane jako przeznaczone do analizy i wymaga zatwierdzenia. "),
                i("c9c8edae", "Zasubskrybuj uczestnictwo w programie Zweryfikowane Organizacje, aby zastosować kredyty reklamowe"),
                i("b36c6278", "Z naszego kredytu reklamowego mogą korzystać tylko posiadacze płatnych subskrypcji programu Zweryfikowane Organizacje. Podnieś teraz poziom swojej subskrypcji, aby reklamować się za pośrednictwem swoich kont powiązanych."),
                i("c30f0168", "Otwórz link zewnętrzny"),
                i("c49b7262", "Promuj ofertę pracy"),
                i("i6ecf71a", "Anuluj promowanie oferty pracy"),
                i("a37ef120", "Otwórz ponownie ofertę pracy"),
                i("i00355d0", "Anuluj udostępnienie"),
                i("h0481bba", "Anulować udostępnienie tej oferty pracy?"),
                i("b9dfdc7a", "Anulowanie udostępnienia spowoduje usunięcie oferty pracy z wyróżnionych treści."),
                i("h4847fa2", function (e) {
                    return "" + e.userName;
                }),
                i("e46cd68e", "Udostępniane przez Ciebie oferty pracy"),
                i("ea7f1a42", "Twoje oferty pracy"),
                i("d1cbcb90", "Źródło"),
                i("gf66326c", "Ostatnio zaktualizowane"),
                i("b917fc28", "Promocja ofert pracy wyłączona"),
                i("g06035e6", "Musisz sprawdzić swoje konto reklamowe, aby móc włączyć promowanie ofert pracy."),
                i("aa16581c", "Nie masz dostępu do konta reklamowego służącego do promowania ofert pracy. Poproś administratora konta o pomoc."),
                i("g7bb6f58", "Nie znaleziono kont reklamowych."),
                i("jf1576ba", "Nie udało się"),
                i("ff985a36", "Synchronizowanie"),
                i("e5b8058c", "Nie zsynchronizowano"),
                i("a86e335a", "Ostatnia synchronizacja "),
                i("c9838d68", "Dodane oferty pracy nie są jeszcze widoczne"),
                i("df6835a6", "Włącz oferty pracy w swoim profilu, aby wyróżniać promowane oferty pracy nad swoimi wpisami oraz dodać link do wszystkich otwartych ofert pracy."),
                i("fc504ea0", "Zacznij wyświetlać moje oferty pracy"),
                i("a511934e", "Zacznij rekrutować w serwisie X"),
                i("e68d2d16", "Zgłoś chęć skorzystania z wersji beta"),
                i("f7a37e30", "Klikając przycisk „Zgłoś chęć skorzystania z wersji beta”, wyrażasz zgodę na kontaktowanie się z Tobą pocztą e-mail pod firmowym adresem e-mail, skojarzonym z tym kontem, po przyznaniu dostępu do wersji beta."),
                i("bfef82f0", "Rekrutacja w serwisie X to bezpłatna funkcja dostępna dla zweryfikowanych organizacji. Umożliwia ona publikowanie ofert pracy i polecanie ich w profilu firmy w celu zachęcania najbardziej utalentowanych kandydatów do rozpoczęcia pracy w ogłaszającej się firmie."),
                i("h4b890c2", "Funkcja Rekrutacja w serwisie X umożliwia publikowanie ofert pracy, promowanie ich w profilu oraz wzbudzanie zainteresowania oferowanymi stanowiskami wśród najbardziej utalentowanych kandydatów."),
                i("c3f28126", "Zdobądź wielu odbiorców"),
                i("dec1601e", "Serwis X ma ponad 528 mln użytkowników. Znajdziesz tu pracownika o dowolnej specjalności — inżyniera oprogramowania, sprzedawcę czy operatora wózka widłowego."),
                i("be8393da", "Polecaj swoje najważniejsze stanowiska"),
                i("i8c856ce", "Możesz promować maksymalnie 3 oferty pracy w swoim profilu. Te oferty pracy będą widoczne dla wszystkich użytkowników przeglądających Twój profil."),
                i("d8bc6eea", "Dodaj maksymalnie 5 ofert pracy, które będą polecane w profilu Twojej firmy. Te polecane stanowiska będą widoczne dla wszystkich użytkowników wyświetlających profil Twojej firmy."),
                i("a049efd4", "Szybko importuj oferty pracy"),
                i("d12be15a", "Połącz obsługiwany system śledzenia osób aplikujących lub źródło danych XML, aby w ciągu kilku minut dodać swoje oferty pracy do serwisu X."),
                i("d248d75e", "Uzyskaj pomoc"),
                i("c49d8e42", "Potrzebujesz pomocy? Skontaktuj się z nami"),
                i("ib244b2e", "Skopiuj adres e-mail"),
                i("b450472c", "Importuj oferty pracy"),
                i("b36022d1", "xhiringsupport@x.com"),
                i("aeac3eb4", "Odśwież oferty pracy"),
                i("aa4c37cc", "Pokaż oferty pracy w moim profilu"),
                i("d4b82638", "Promuj oferty pracy w swoim profilu"),
                i("e405b1c2", "Włącz oferty pracy w swoim profilu, aby zwiększyć liczbę osób aplikujących na najważniejsze z oferowanych przez Ciebie stanowisk i dać kandydatom możliwość przeglądania wszystkich Twoich otwartych ofert pracy."),
                i("a85cda86", "Dodaj swoje oferty pracy, aby rozpocząć"),
                i("c04b6472", "Zaimportuj lub dodaj oferty pracy, wykonując kilka prostych kroków, aby zachęcić więcej osób do złożenia aplikacji. Twoje oferty pracy zostaną też udostępnione osobom, które Cię obserwują, a także będą polecane w profilu Twojej firmy."),
                i("d14c02d0", "Dodaj ręcznie oferty pracy"),
                i("b12424fc", "Nowa oferta pracy"),
                i("ca8df1e2", "Utwórz ofertę pracy i dodaj ją do listy swoich ofert pracy. Każda oferta pracy musi mieć adres URL aplikacji, pod którym osoby kandydujące będą mogły dowiedzieć się więcej o danej ofercie oraz złożyć aplikację."),
                i("f4f4dd60", "Wymagane"),
                i("b2c213e0", "Przekroczono limit liczby znaków"),
                i("d84e9c2a", "Przedstaw typ zaangażowania wymaganego od osoby pracującej na tym stanowisku."),
                i("bc8b300c", "Zakres obowiązków"),
                i("d1eedb50", "Pomóż osobom kandydującym poznać zakres obowiązków związanych z tym stanowiskiem."),
                i("eaf3ce64", "Zespół"),
                i("b36cd50e", "Wskaż podstawowy zespół, w którym osoby kandydujące będą pracować po zatrudnieniu."),
                i("d3a427ce", "Wybierz wymagany poziom doświadczenia."),
                i("i7174442", "Opis oferty pracy"),
                i("fef0cf02", "Podaj szczegółowy opis oferty pracy. Wyróżnij najważniejsze obowiązki i kwalifikacje, aby umożliwić osobom kandydującym dokładne zapoznanie się z oferowanym stanowiskiem."),
                i("b7800bec", "Stwórz ofertę pracy o długości do 200 znaków. Będzie ona widoczna we wpisach, rekomendacjach i wyszukiwaniu."),
                i("a5244ece", "Adres URL aplikacji (wymagane)"),
                i("g2b553f6", "Wprowadź publiczny adres URL, pod którym osoby kandydujące będą mogły składać aplikacje związane z tą ofertą pracy."),
                i("c2e77608", "Stanowisko (wymagane)"),
                i("cdf414d4", "Parametr używany na potrzeby wyszukiwania i rekomendacji. Spróbuj użyć standardowych stanowisk ze swojej branży, aby osiągnąć lepsze wyniki."),
                i("cc59319a", "Używaj stosowanych powszechnie w branży nazw stanowisk, aby jak najwięcej kandydatów mogło je rozpoznać."),
                i("e7117ee4", "Lokalizacja (wymagane)"),
                i("c05176ec", "Jeśli jest to stanowisko stacjonarne, wprowadź lokalizację/lokalizacje związanych z nim placówek, a jeśli jest to stanowisko zdalne, określ lokalizacje, w których mogą przebywać osoby kandydujące."),
                i("d70c24d4", "Służy do ułatwienia osobom kandydującym wyszukiwania Twojej oferty pracy."),
                i("de1c4376", "Zakres wynagrodzeń"),
                i("hf352d42", "Dodaj opcjonalny zakres wynagrodzeń, który będzie widoczny dla osób kandydujących. Jeśli nie chcesz podawać tego zakresu, przeanalizuj przepisy dotyczące przejrzystości płac obowiązujące w lokalizacji, w której prowadzisz rekrutację."),
                i("ede7d0a2", "Waluta"),
                i("b925c18c", "Rodzaj wynagrodzenia"),
                i("j3d242ce", "Nieprawidłowy zakres"),
                i("f4d07bd2", "Dołącz opcjonalne szczegóły, aby ułatwić osobom kandydującym znajdowanie interesujących ich stanowisk za pomocą funkcji wyszukiwania."),
                i("b8cbb51a", "Podsumowanie oferty pracy"),
                i("bda6881e", "Ta oferta pracy została zaimportowana z Twojego systemu śledzenia osób aplikujących (ATS). Pamiętaj, że można modyfikować tylko określone pola."),
                i("b075c68a", "Edytuj ofertę pracy"),
                i("d4b6a6e0", "Wyróżnione treści na profilu"),
                i("j2dd3686", "Wyróżniaj promowane oferty pracy nad moimi wpisami."),
                i("af1cfd46", "Integracja z systemem ATS"),
                i("d6fa2944", "Usunięcie integracji nie spowoduje usunięcia zaimportowanych ofert pracy."),
                i("h99f11fa", "Usuń integrację"),
                i("eef1ae76", "Aktualnie połączono"),
                i("a915f5c1", function (e) {
                    return "Połączono: " + e.ats;
                }),
                i("af7286b7", function (e) {
                    return e.percentage + "% zniżki za rok subskrypcji Premium";
                }),
                i("c924ad84", "Nieprzerwane odtwarzanie filmów"),
                i("de750a3c", "Korzystaj, nawet jeśli Twój telefon będzie zablokowany"),
                i("he5e87c4", "Wzmacniaj swoje odpowiedzi"),
                i("g64a60ba", "Uzyskaj małą priorytetyzację podczas odpowiadania na wpisy"),
                i("a7ee832a", "Przez 60 minut możesz poprawiać literówki i pomyłki"),
                i("fdd77a34", "Twórz dłuższe wpisy"),
                i("j6d26a7a", "Pisz tyle, ile chcesz udostępnić"),
                i("c4fd68da", "Dostosuj swoje środowisko"),
                i("c0195168", "Zmień ikonę aplikacji i opcje nawigacji");
            i("b6b5dc94", "Uzyskaj weryfikację"),
                i("b06db848", "Wyróżniaj się spośród innych użytkowników platformy"),
                i("e3e3a97c", "Miej udział w dochodach generowanych przez Twoje wpisy"),
                i("f15bc24e", "Zwiększone limity Groka"),
                i("c4666e1c", "Więcej możliwości używania naszego najnowszego modelu Grok 3"),
                i("he74ae7a", "Najwyższe limity użycia Groka"),
                i("f5732cd4", "Ponadto rozszerzony dostęp do trybów DeepSearch i Myśl"),
                i("e0198956", "Otrzymuj udział w dochodach powstających w wyniku interakcji zweryfikowanych kont z treścią Twojego wpisu w serwisie X."),
                i("iadf78e2", "Pobieranie filmów"),
                i("ee54c3de", "Zapisuj filmy bezpośrednio na swoim urządzeniu"),
                i("ae03594c", "Małe wzmocnienie odpowiedzi"),
                i("e6bb08c0", "Zwiększ widoczność swoich odpowiedzi"),
                i("bf2a6acc", "Duże wzmocnienie odpowiedzi"),
                i("c2059276", "Korzystaj z możliwości dodawania boosta do odpowiedzi."),
                i("b023ec20", "Maksymalne wzmocnienie odpowiedzi"),
                i("g337328e", "Uzyskaj największą widoczność swoich odpowiedzi."),
                i("fa006202", "Odtwarzanie filmów w tle"),
                i("jf389778", "Oglądaj w trakcie przeglądania lub używania innych aplikacji"),
                i("f2977d80", "Foldery Zakładek"),
                i("j1d3d910", "Organizuj zapisane wpisy, aby mieć do nich łatwiejszy dostęp"),
                i("f0f48668", "Pomoc techniczna premium"),
                i("c3148608", "Szybciej otrzymuj potrzebną pomoc"),
                i("b485ca6e", "Karta Najciekawsze"),
                i("d438955e", "Prezentuj swoje najpopularniejsze wpisy"),
                i("f373a352", "Szyfrowane wiadomości prywatne"),
                i("g7405aca", "Czatuj bezpiecznie dzięki kompleksowemu szyfrowaniu"),
                i("j659fa0c", "Najlepsze funkcje Groka 3"),
                i("ibff5694", "Odblokuj najwyższe limity użycia, tryby DeepSearch i Myśl oraz wczesny dostęp do nowych funkcji"),
                i("i824f4da", "Mniej reklam"),
                i("bd17076c", "Na osiach czasu Dla Ciebie i Obserwujesz będzie wyświetlane o połowę mniej reklam."),
                i("cef2cac8", "Ciesz się brakiem reklam (czasami możesz zobaczyć treści oznaczone marką w rzadziej używanych obszarach)."),
                i("c97920c0", "Filmy w trybie offline"),
                i("i4379b18", "Zapisz dowolny film, aby odtworzyć go w trybie offline"),
                i("f94c6bae", "Znaczek zweryfikowanego konta"),
                i("d72055d6", "Buduj wiarygodność, korzystając ze znaczka potwierdzającego weryfikację "),
                i("f54af178", "Pisanie artykułów"),
                i("c5cd5d42", "Udostępniaj długie treści i zostań autorytetem w swojej dziedzinie"),
                i("jbdb08cc", "Analizuj metryki swojego konta, aby dowiedzieć się, jakie wyniki osiąga Twoje konto"),
                i("deaf7e0a", "Media Studio"),
                i("fd1a47b4", "Zarządzaj swoimi multimediami i przesyłaj je"),
                i("id067c96", "Wyszukiwanie za pomocą funkcji Radar"),
                i("jf991d48", "Wyprzedzaj konkurencję dzięki śledzeniu trendów w czasie rzeczywistym"),
                i("c244210c", "X Pro"),
                i("a90f2e8a", "Wydajne, działające w czasie rzeczywistym narzędzie dla osób korzystających z serwisu X, które umożliwia monitorowanie wielu osi czasu na jednym ekranie (tylko witryna internetowa) "),
                i("b3e50ef2", "Tworzenie grup dyskusyjnych"),
                i("bb1a4e44", "Utwórz własną grupę dyskusyjną"),
                i("j010228e", "Możesz mieć udział w dochodach, jakie uzyskujemy dzięki Twoim najbardziej zaangażowanym obserwującym, którzy kupują subskrypcje miesięczne. "),
                i("h0e1730e", "Priorytetyzacja odpowiedzi"),
                i("jf7f743c", "Publikowanie dłuższych filmów"),
                i("c0c25b6c", "Foldery Zakładek"),
                i("ab31c79e", "Dostosowywanie ikon aplikacji"),
                i("a8a702ae", "Dostosowywanie nawigacji"),
                i("d5ab1b50", "Odznaka zweryfikowanego konta"),
                i("ac298984", "Wyższy priorytet odpowiedzi"),
                i("g20df450", "O 50% mniej reklam"),
                i("h8dfc4de", "Wyższe limity użycia Groka"),
                i("bf7614d4", "Subskrypcje twórców treści"),
                i("gadc9f4a", "Najwyższy priorytet odpowiedzi"),
                i("c127c5c2", "Brak reklam"),
                i("c1e0f3c8", "Odblokowanie trybów Groka DeepSearch i Myśl"),
                i("aac0bbb6", "Dostęp do funkcji Radar"),
                i("a6722922", "Brak reklam"),
                i("ba016532", "Wzmocnienie odpowiedzi"),
                i("a06f8a3e", "Grok 3"),
                i("b9e16610", "MAKS."),
                i("b1492c6c", "Najwyższy"),
                i("fb5e2c14", "Dodawanie wpisów do Najciekawszych w ramach subskrypcji X Premium"),
                i("gd1f4cfa", "Prezentowanie najlepszych wpisów w swoim profilu"),
                i("h59250bc", "Zaszyfrowane wiadomości w ramach subskrypcji X Premium"),
                i("ed62d546", "Dłuższe wpisy w ramach subskrypcji X Premium"),
                i("ca447200", "Weryfikacja logowania za pomocą wiadomości SMS w ramach subskrypcji X Premium"),
                i("af2b99ea", "Edytowanie wpisów w ramach subskrypcji X Premium"),
                i("ha265914", "Organizowanie zakładek w ramach subskrypcji X Premium"),
                i("gda940ae", "Tworzenie grupy dyskusyjnej w ramach subskrypcji X Premium"),
                i("c7e5ac54", "Mniej reklam w ramach subskrypcji X Premium"),
                i("e03589ba", "Dodawanie boosta do wpisów w ramach subskrypcji X Premium"),
                i("f0f8c82a", "Dołączanie do czatów tylko dla zweryfikowanych użytkowników w ramach subskrypcji X Premium"),
                i("fecf5aaa", "Przesyłanie filmów o jakości HD w ramach subskrypcji X Premium"),
                i("c00d2be2", "Edytowanie filmów w ramach subskrypcji X Premium"),
                i("cd360b86", "Zapytaj Groka o cokolwiek"),
                i("d2e1a7a2", "Dostępne w ramach subskrypcji X Premium"),
                i("e664abe2", "Filmy w serwisie X. Supermożliwości."),
                i("e595a3e2", "Odblokuj najlepsze funkcje filmów w ramach subskrypcji Premium"),
                i("i3c9329a", "Wyróżniaj się formatowaniem tekstu"),
                i("cc9def68", "Tylko w ramach subskrypcji X Premium"),
                i("hdef5966", "Pobieraj filmy na swoje urządzenie"),
                i("c748224a", "Odblokuj dzięki subskrypcji X Premium"),
                i("ebfc88bc", "Uzyskaj dostęp do ekskluzywnych funkcji"),
                i("f652e9ac", "Odblokuj więcej funkcji dzięki subskrypcji Premium"),
                i("d67e94c0", "Ominą Cię następujące możliwości..."),
                i("j1d3098c", "Odblokuj więcej funkcji dzięki subskrypcji Premium+"),
                i("gd573390", "Oraz wszystkie funkcje wersji Basic..."),
                i("ef94bbd4", "Uzyskaj subskrypcję Premium+"),
                i("dcd830ce", "Oraz wszystkie funkcje wersji Premium..."),
                i("b7dde622", "Wszystkiego najlepszego z okazji Święta Dziękczynienia! Oferta kończy się za:"),
                i("i0180ca1", function (e) {
                    return "Do " + e.date + ". Wszystkiego najlepszego z okazji Święta Dziękczynienia!";
                }),
                i("hb9d0e00", "Nasza oferta z okazji 2. rocznicy kończy się za:"),
                i("d2b23e0d", function (e) {
                    return "Subskrypcja Premium ma urodziny! Oferta kończy się " + e.date + ".";
                }),
                i("bb4998fb", function (e) {
                    return "Do " + e.date;
                }),
                i("c0847ebc", "Wszystkie funkcje wersji Basic oraz..."),
                i("ed672bfa", "Wszystkie funkcje wersji Basic i Premium oraz..."),
                i("db63fa1c", "Wybierz plan Premium"),
                i("b128c6bc", "Uzyskaj odznakę zweryfikowanego konta oraz wiele innych niesamowitych korzyści"),
                i("acfaf7a0", "Porównaj poziomy i funkcje"),
                i("e1606e52", "Zmień subskrypcję"),
                i("d2f2b91a", "zarejestruj się tutaj"),
                i("j4b4310e", "Sekundy"),
                i("af863ee9", "bezpłatnej wersji próbnej"),
                i("f5705987", "Warunki dotyczące zakupów"),
                i("h89dabac", "Subskrypcję można anulować w dowolnym momencie"),
                i("f36b8e14", "Wystąpił błąd podczas pobierania tego produktu. Spróbuj załadować ponownie."),
                i("f1756574", "/ miesiąc"),
                i("i650ff14", "/ rok"),
                i("dbcd25db", function (e) {
                    return "przez pierwsze " + e.numberOfDays + " dni";
                }),
                i("bd40d5b5", function (e) {
                    return "Zasubskrybuj usługę " + e.title + " i zapłać";
                }),
                i("i36a0b6e", "Subskrypcję możesz kupić tylko w aplikacji serwisu X dla systemu iOS (na razie)."),
                i("c906ad94", "Obniż poziom"),
                i("db5c77e0", "To jest Twoja aktywna subskrypcja"),
                i("h77ef73e", "Zmień subskrypcję na miesięczną"),
                i("d723d44a", "Zmień subskrypcję na roczną"),
                i("i253b5c6", "Podnieś poziom i zapłać"),
                i("d2beeaaa", "Obniż poziom i zapłać"),
                i("acf719d4", "Zmień i zapłać"),
                i("ieafe1c6", "Potwierdź zmianę subskrypcji"),
                i("gf6b66b8", "Potwierdź zmianę subskrypcji, która będzie obowiązywać od dzisiaj"),
                i("e83daf87", function (e) {
                    return "Potwierdź zmianę subskrypcji, która będzie obowiązywać od " + e.date;
                }),
                i("f27022d6", "Aktualny plan"),
                i("i9d5f4b6", "Nowy plan"),
                i("ia390d8a", "Jak będzie odbywać się obniżenie poziomu"),
                i("fd80b875", function (e) {
                    return "Twój bieżący plan pozostanie aktywny do końca cyklu rozliczeniowego. W dniu " + e.nextBillingDate + " nastąpi przełączenie do planu " + e.newTierName + " i zostanie Ci naliczona opłata zgodnie z nową stawką.";
                }),
                i("c8fb177a", "Jak zostanie dostosowana Twoja płatność"),
                i("df776505", function (e) {
                    return "Podnosisz poziom subskrypcji do poziomu " + e.newTierName + " z nowym rozliczeniem. Dzisiaj zostanie Ci naliczona opłata za nowy plan, ale ta kwota zostanie pomniejszona o pozostałą część Twojej poprzedniej wpłaty. Przełączenie zostanie wykonane natychmiast, a Twoje rozliczenie zostanie odpowiednio dostosowane.";
                }),
                i("d7efb6ba", "Wykonujesz przełączenie z rozliczenia miesięcznego na roczne. Dziś zostanie Ci naliczona opłata za plan roczny, a pozostała proporcjonalna część Twojego salda miesięcznego zostanie wykorzystana na potrzeby opłacenia łącznej opłaty. Przełączenie zostanie wykonane natychmiast i od teraz będziesz mieć rozliczenie roczne."),
                i("a5f2cf70", "Wykonujesz przełączenie z rozliczenia rocznego na miesięczne. Pozostała część Twojej płatności rocznej będzie wykorzystywana na potrzeby opłacania płatności miesięcznych, dopóki się nie wyczerpie. Przełączenie zostanie wykonane natychmiast i od teraz będziesz mieć rozliczenie miesięczne."),
                i("ef1c0208", "Potwierdź zmianę planu"),
                i("c20806d5", "Warunki dotyczące zakupów"),
                i("i10be4c9", "Warunkach"),
                i("cdda96d6", "Subskrypcję możesz anulować w dowolnym momencie"),
                i("cc67158f", "Warunki dotyczące zakupów"),
                i("eb420831", "Warunkach"),
                i("c7d49608", "Subskrypcję możesz anulować w dowolnym momencie"),
                i("ab176bd1", "Warunki dotyczące zakupów"),
                i("cea928a5", "Warunkach"),
                i("e37c69e0", "Subskrypcję możesz anulować w dowolnym momencie"),
                i("ia08113f", "Warunki dotyczące zakupów"),
                i("d2962b73", "Warunkach"),
                i("b421795a", "Subskrypcję możesz anulować w dowolnym momencie"),
                i("f8d88ac7", "Warunki dotyczące zakupów"),
                i("ca220fe9", "Warunkach"),
                i("ab8beda0", "Subskrypcję możesz anulować w dowolnym momencie"),
                i("ife2636d", "Warunki dotyczące zakupów"),
                i("fb57be65", "Warunkach"),
                i("e468a6c2", "Subskrypcję można anulować w dowolnym momencie."),
                i("e9f4c89b", "Warunki dotyczące zakupów"),
                i("hce73b41", "Warunkach"),
                i("i4db5c92", "Subskrypcję możesz anulować w dowolnym momencie."),
                i("ae095fe8", "Grok AI"),
                i("d4e60288", "Najwyższe limity użycia"),
                i("abaa4274", "Odblokuj tryby DeepSearch i Myśl"),
                i("e0d53864", "Wczesny dostęp do nowych funkcji"),
                i("g1be3530", "BEZPŁATNA WERSJA PRÓBNA"),
                i("b10b4f1f", function (e) {
                    return "ZAPISZ " + e.percentOff + "% DO " + e.date;
                }),
                i("b8d0bd19", function (e) {
                    return "Wypróbuj bezpłatnie subskrypcję " + e.productName;
                }),
                i("f89dfa74", "Najlepsza oferta"),
                i("b9a4d8c6", "Rok"),
                i("f5fb58b4", "Plus wszystkie funkcje wersji X Premium"),
                i("i527045e", "Znaczek, więcej Groka, wzmocnienie odpowiedzi, analizy i nie tylko"),
                i("ga482a88", "Subskrypcja roczna"),
                i("hc64d5b0", "Subskrypcja miesięczna"),
                i("de7db957", function (e) {
                    return e.price + " za rok, rozliczane co rok";
                }),
                i("d8982437", function (e) {
                    return e.price + " za rok, rozliczane co miesiąc";
                }),
                i("f0ad5cc8", "rok"),
                i("a0dc6e4c", "Aktualnie niedostępne"),
                i("jd8b2e66", "Subskrybuj i dokonaj płatności"),
                i("aa5df29f", function (e) {
                    return "" + e.oldPrice;
                }),
                i("g1c4f7a1", function (e) {
                    return "" + e.oldPrice;
                }),
                i("i7fbacc4", "Przełączaj się między dostępnymi poziomami subskrypcji"),
                i("c9cc122b", function (e) {
                    return "Funkcja " + e.feature + " jest dostępna w ramach subskrypcji " + e.title;
                }),
                i("bff35771", function (e) {
                    return "Funkcja " + e.feature + " nie jest dostępna dla " + e.title;
                }),
                i("a69fd369", function (e) {
                    return "Początek: " + e.price;
                }),
                i("e563a5d1", function (e) {
                    return "Zasubskrybuj: " + e.percentage + "% zniżki (ograniczony czas)";
                }),
                i("dfc5f972", "I nie tylko..."),
                i("fb8453c8", "Odblokuj żądania w trybach DeepSearch i Myśl"),
                i("e45b3f30", "Odblokowanie żądań badania i rozumowania"),
                i("aaebdc2e", "Znacznie zwiększony dostęp do Groka 3 mini i Groka 3"),
                i("ddf8a412", "Dostęp do nowych funkcji przed innymi użytkownikami"),
                i("gfb04ef4", "Wszystkie funkcje subskrypcji Premium+ w serwisie X"),
                i("b601cfbb", function (e) {
                    return "Wypróbuj za " + e.price + " przez miesiąc";
                }),
                i("i3e90e20", "Aktualnie niedostępne"),
                i("d9e9ce26", "Zasubskrybuj i zapłać:"),
                i("j1f5a580", "Wystąpił problem podczas przetwarzania Twojej subskrypcji usługi Premium. Sprawdź swoje informacje płatnicze i spróbuj ponownie."),
                i("ebc84442", "Rejestrowanie subskrypcji Premium"),
                i("cd9102d4", "Wybierz kategorię"),
                i("eb551aea", "Wyświetlaj kategorię na profilu"),
                i("f386777a", "Zmień typ konta"),
                i("db483090", "Zmieniono typ konta na osobiste"),
                i("c701200c", "Zmieniono typ konta na biznesowe"),
                i("acd8da0a", "Zmieniono typ konta na konto twórcy treści"),
                i("cb55ecce", "Przejdź na konto osobiste"),
                i("h4aeb984", "Przejdź na konto osobiste"),
                i("ada6073a", "Nie potrzebujesz narzędzi dla profesjonalistów?"),
                i("eb723d4c", "Konta osobiste nie mają funkcji takich jak wyróżnienie treści na profilu czy Manager Zakupów. Jeśli chcesz wciąż z nich korzystać, załóż nowe konto profesjonalne."),
                i("hbb1af08", "Przejdź na konto biznesowe"),
                i("a9b5e3aa", "Nie, anuluj"),
                i("ia49207a", "Tak, przejdź"),
                i("g3f74902", "Chcesz przejść na konto biznesowe?"),
                i("f3bcfac0", "To najlepsza opcja dla marek, sklepów detalicznych, dostawców usług i firm."),
                i("d0c3f02e", "Przejdź na konto twórcy treści"),
                i("a01e84e0", "Chcesz przejść na konto twórcy treści?"),
                i("e8af8ef4", "To najlepsza opcja dla znanych osób, artystów i influencerów."),
                i("e44eab74", "Obecnie nie wszystkie moduły są dostępne we wszystkich aplikacjach klienckich serwisu X"),
                i("ce4185bc", "Więcej opcji wyróżnienia treści już wkrótce"),
                i("b5aed332", "Brak wyróżnionych treści"),
                i("g419ecf4", "Pozostań na stronie"),
                i("d3a097a2", "Tak, odrzuć"),
                i("j1e1cd30", "Czy chcesz odrzucić zmiany?"),
                i("fc779c28", "Dodaj wyróżnienie"),
                i("ie85a7a8", "Chcesz usunąć dane Twojej firmy?"),
                i("b5348efc", "Brak informacji"),
                i("db285564", "Zawsze otwarte"),
                i("g7993eee", "Dostosuj informacje o godzinach pracy"),
                i("c9ee902a", "Wyświetl mapę"),
                i("j224a074", "Wszystkie informacje dotyczące lokalizacji będą widoczne po włączeniu funkcji wyróżnienia lokalizacji. Numer telefonu i adres e-mail są dostępne pod przyciskiem Kontakt."),
                i("f448cbcc", "Pole nieobowiązkowe"),
                i("c16c9568", "Adres"),
                i("i3a38711", "zasad korzystania z Map Google"),
                i("beb66f50", "Polityki prywatności Google"),
                i("e0d47030", "Gdzie Twoi klienci mogą się z Tobą skontaktować? Pamiętaj, że ta informacja będzie widoczna dla wszystkich i za jej pomocą Twoi klienci będą mogli się z Tobą skontaktować. W dowolnym momencie możesz usunąć tę informację."),
                i("c7a4adb0", "Dodaj adres"),
                i("cd39daf6", "Kod pocztowy"),
                i("gc0df5a6", "Dodaj kod pocztowy"),
                i("c6c16a52", "Miasto"),
                i("aa8015be", "Dodaj miasto"),
                i("b688f53a", "Stan / prowincja / region"),
                i("a67f5bbc", "Dodaj stan / prowincję / region"),
                i("if92b1b4", "Dodaj kraj"),
                i("ffc5590e", "Nieprawidłowa nazwa miejscowości"),
                i("a8fd64d8", "Wyszukaj kraj"),
                i("a0abe108", "Niepoprawna nazwa stanu/prowincji/regionu"),
                i("j163df8e", "Nieprawidłowy adres"),
                i("af9b9b78", "Nieprawidłowy kod pocztowy"),
                i("i373e022", "Wpisz adres e-mail"),
                i("f91751f8", "Ta informacja będzie widoczna dla wszystkich użytkowników"),
                i("g33c0564", "Nieprawidłowy adres e-mail"),
                i("ga71fbf4", "Godziny pracy"),
                i("ca2ba204", "Edytuj godziny pracy"),
                i("d7b7dbca", "Na Twoim profilu nie będzie informacji o godzinach pracy"),
                i("a460e770", "np. parki, plaże, zakupy online"),
                i("ddc88bf0", "Ustal godziny pracy na każdy dzień"),
                i("j11df0ca", "Konflikt czasowy"),
                i("f9f911f4", "Wyszukaj strefę czasową"),
                i("d21a4252", "Dodaj więcej godzin"),
                i("ac6ce1c0", "Od:"),
                i("c647aac8", "Do:"),
                i("b926e64a", "Wejdź na stronę"),
                i("i019c8b6", "Zadzwoń"),
                i("eabc6906", "SMS"),
                i("h24d868c", "Rozmowy i SMS-y"),
                i("fa64f1fc", "Wybierz numer kierunkowy kraju"),
                i("c7d3629a", "Numer telefonu"),
                i("ce48a958", "W jaki sposób można się z Tobą skontaktować?"),
                i("b97705ce", "Pamiętaj, że ten numer telefonu będzie widoczny dla wszystkich i za jego pomocą Twoi klienci będą mogli się z Tobą skontaktować. W dowolnym momencie możesz usunąć tę informację."),
                i("f7ff19ec", "Dodaj numer kierunkowy"),
                i("bb7f177a", "Nieprawidłowy numer telefonu"),
                i("b91d1394", "Dodaj aplikację"),
                i("d3cd1160", "Dodaj aplikację na iOS"),
                i("f2124008", "Adres URL sklepu App Store"),
                i("dc0d9d6a", "Dodaj aplikację na Androida"),
                i("dd1605f0", "Adres sklepu Play Store"),
                i("g4098f78", "Gdzie mogę to znaleźć?"),
                i("b949cdc6", "Usuń aplikację"),
                i("b4b8a486", "Wybierz Grupę dyskusyjną"),
                i("jfe04cf6", "Odrzucić wybór?"),
                i("a14aa8dc", "Spowoduje to usunięcie wyróżnienia Grupy dyskusyjnej."),
                i("cc4add98", "Wybierz Grupę dyskusyjną, aby zobaczyć, jak wygląda ona na Twojej stronie profilowej"),
                i("jd3e9ea6", "Nie masz żadnych Grup dyskusyjnych"),
                i("daad9741", "utworzyć Grupę dyskusyjną"),
                i("c46cdabc", "Zaawansowane narzędzia"),
                i("f6a2233a", "Zarządzaj uprawnieniami do kont"),
                i("ccb3ca48", "Ustawienia biznesowe"),
                i("b0ef3100", "Twórz skuteczne kampanie reklamowe"),
                i("ff1c5e1a", "Centrum dla Profesjonalistów"),
                i("f53adc36", "Generuj realne zyski"),
                i("hc4981d6", "Wyróżnione treści na profilu"),
                i("fbce8dbe", "Znajdź osoby, które warto obserwować"),
                i("ae76c624", "Utwórz więcej połączeń"),
                i("ae0383d4", "Zwiększaj zaangażowanie i rozszerzaj swoje zasięgi"),
                i("a1dbe746", "Zwiększaj zaangażowanie i rozszerzaj swoje zasięgi"),
                i("hbd124ae", "Dodaj boost do wpisu"),
                i("hd80bd3e", "Promuj wpis"),
                i("fe2b0008", "Dowiedz się, jak użytkować X"),
                i("h257d4aa", "Wybierz wpis, który chcesz promować"),
                i("d28a1d72", "Dołącz do grona osób, które najwcześniej zaczną śledzić trendy za pomocą funkcji Radar"),
                i("fb70427a", "Wprowadzamy najbardziej zaawansowane narzędzie do wyszukiwania w serwisie X."),
                i("i54bf620", "Monitoruj słowa kluczowe"),
                i("e8bb09bc", "Skoncentruj się na dowolnym temacie, używając możliwości wyszukiwania zaawansowanego."),
                i("d4c9d5aa", "Wizualizuj trendy"),
                i("e78263fe", "Śledź rozmowy, używając wykresów codziennej aktywności z 3 ostatnich dni."),
                i("e3ed8220", "Metryki w czasie rzeczywistym"),
                i("f4952956", "Otrzymuj natychmiast statystyki dotyczące wpisów zwracanych z zapytań."),
                i("cce3f116", "Wpis został dodany do Zakładek"),
                i("b593b396", "Wpis został usunięty z Zakładek"),
                i("af9c8a3e", "Otwórz aplikację"),
                i("ef483238", "Strona statusu wpisu"),
                i("jcf3ff56", "Duży tekst"),
                i("f1252ac8", "Średni tekst"),
                i("daa0da04", "Mały tekst"),
                i("ba5256b2", "Rozmiar tekstu"),
                i("h030c24c", "Zgłoś problem"),
                i("b12ffee6", "Zablokuj w grupie dyskusyjnej"),
                i("e37836f8", "Informacja dotycząca zgłoszenia"),
                i("fb35e52a", "Zobacz zasadę"),
                i("e238c590", "Co dalej?"),
                i("if218e60", "Nasz zespół i nasze technologie przeanalizują Twoje zgłoszenie. Jeśli ustalimy, że doszło do naruszenia naszych zasad, damy Ci znać o podjętych przez nas krokach."),
                i("b6dc1984", "Na czym to polega?"),
                i("b0a16894", "Kontekst ma znaczenie. Egzekwując nasze zasady, bierzemy pod uwagę następujące czynniki (to nie jest pełna lista):"),
                i("d4716820", "Czy zgłoszone treści uderzają w innych użytkowników z uwagi na ich tożsamość?"),
                i("e899a534", "Jak poważne jest to naruszenie?"),
                i("d9c4e7ae", "Czy to zgłoszenie zostało wysłane przez osobę, której ono dotyczy?"),
                i("afb51066", "Wielokrotne wysyłanie identycznych zgłoszeń nie przyspieszy naszej pracy."),
                i("b7ba712a", "Stwierdzono naruszenie naszych zasad"),
                i("d90b8c04", "Nie stwierdzono naruszeń naszych zasad"),
                i("c2d0494a", "Nasze zalecenia dotyczące bezpieczeństwa"),
                i("be46e000", "Identyczne zgłoszenia"),
                i("e846ae32", "Nawet jeśli te treści zostały usunięte, ktoś mógł je skopiować lub zapisać w formie zrzutu ekranu. Jeśli widzisz te treści w serwisie X, zgłoś to, a my je usuniemy."),
                i("e3647d08", "Skontaktuj się z organami ścigania"),
                i("gad89c4a", "Jeśli czujesz, że może grozić Ci niebezpieczeństwo, skontaktuj się z lokalnymi organami ścigania. W razie pytań ich przedstawiciele odnieść się do naszych wytycznych dla organów ścigania. "),
                i("h7fa9240", "Stany Zjednoczone:"),
                i("fb2ff552", "Państwowa infolinia ds. zapobiegania samobójstwom: 988."),
                i("bb57e8c0", "Inne kraje i regiony:"),
                i("b9ce59ba", "Dziękujemy za zgłoszenie nam tej sytuacji."),
                i("d42899ad", "Międzynarodowego stowarzyszenia ds. zapobiegania samobójstwom"),
                i("c9853de0", "Ukryto treść"),
                i("c197728e", "Rozpatrzone"),
                i("f4422d78", "Zgłoszenia"),
                i("i07c24fa", "Nie masz żadnych otwartych zgłoszeń"),
                i("h542c98a", "Zobacz szczegóły"),
                i("e6e11d12", "Nie masz żadnych zamkniętych zgłoszeń"),
                i("ibf33bae", "Zgłoś duplikaty do usunięcia"),
                i("a288ca36", "wytycznych dla organów ścigania"),
                i("a62c9c34", "Obserwuj to, co Cię interesuje."),
                i("cf39fca2", "Dowiedz się, o czym mówią inni."),
                i("j86184fe", "Dołącz do rozmowy."),
                i("ac2035f2", "Dołącz już dziś."),
                i("h0af9418", "Utwórz konto"),
                i("eba1b198", "Najświeższe wieści ze świata"),
                i("fa811c30", "Masz już konto?"),
                i("b4bdfb3e", "Pobierz aplikację Grok"),
                i("f991cfaa", "Korzystaj z Groka"),
                i("a4298bc0", "X. Bieżące wydarzenia"),
                i("j3f49ff6", "Od najświeższych wiadomości i rozrywki po sport i politykę – zobacz całość wydarzeń wraz z dyskusją na żywo."),
                i("d65555c2", "LUB"),
                i("e75df5c9", function (e) {
                    return e.query + " — Wyszukiwanie";
                }),
                i("ac4fb0f4", "Zdjęcia"),
                i("aea62568", "Filtry wyszukiwania"),
                i("gfcfbf8c", "Zapisano Twoje wyszukiwanie."),
                i("a4645d92", "Usunięto zapisane wyszukiwanie."),
                i("b11805af", function (e) {
                    return "Zobacz wpisy związane z tematem " + e.query + " w serwisie X. Sprawdź, co mówią inni i dołącz do rozmowy.";
                }),
                i("d610e8c3", function (e) {
                    return "Najnowsze wpisy związane z tematem " + e.query + ". Przeczytaj, co mówią inni i dołącz do rozmowy.";
                }),
                i("j622effe", "Wyszukiwanie zaawansowane"),
                i("i5045e74", "Wszędzie"),
                i("h2388754", "W pobliżu Ciebie"),
                i("a0cf4306", "Podsumowanie utworzone przez Groka"),
                i("f97f7b46", "Ukryj podsumowanie utworzone przez Groka"),
                i("f9d35b98", "Możesz zapisać maks. 25 wyszukiwań. Usuń jedno wyszukiwanie, aby zapisać kolejne."),
                i("ha925ad4", "Wystąpił błąd. Poczekaj chwilę i spróbuj ponownie zapisać to wyszukiwanie."),
                i("h0a9931c", "Wystąpił błąd. Poczekaj chwilę i spróbuj ponownie usunąć to wyszukiwanie."),
                i("h4912b5e", "Zapisz wyszukiwanie"),
                i("b9bc69ca", "Usuń zapisane wyszukiwanie"),
                i("eb63de70", "X – Wyszukiwanie zaawansowane"),
                i("d3938be8", "Słowa"),
                i("e0dded5e", "Zaangażowanie"),
                i("a097f7ba", "Daty"),
                i("c03f15ca", "Dowolny język"),
                i("cb334136", "Linki"),
                i("jf1cbcc2", "Dołącz wpisy z linkami"),
                i("gede6f6e", "Pokazuj tylko wpisy z linkami"),
                i("bda44dd4", "Dołącz odpowiedzi i oryginalne wpisy"),
                i("ab870904", "Pokazuj tylko odpowiedzi"),
                i("b6215680", "Wszystkie z tych słów"),
                i("cceffa5e", "Przykład: co dzieje się · zawiera „co” i „dzieje się”"),
                i("f1c5faee", "Dokładne zapytanie"),
                i("ad10780e", "Przykład: szczęście hour · zawiera dokładnie wyrażenie „szczęście hour”"),
                i("a555a3f4", "Którekolwiek z tych słów"),
                i("ee8a2b60", "Przykład: koty psy · zawiera „koty” lub „psy” (lub oba słowa)"),
                i("f51fe348", "Żadne z tych słów"),
                i("hb657ad4", "Przykład: koty psy · nie zawiera „koty” i nie zawiera „psy”"),
                i("d10da5da", "Te tagi"),
                i("f0b52b50", "Przykład: #ThrowbackThursday · zawiera tag #ThrowbackThursday"),
                i("e292598a", "Z tych kont"),
                i("hef790d8", "Przykład: @X · wysłano z konta @X"),
                i("g2c27394", "Do tych kont"),
                i("d158d9d0", "Przykład: @X · wysłano w odpowiedzi do użytkownika @X"),
                i("a10e3230", "Wspominający te konta"),
                i("daaf2c72", "Przykład: @SFBART @Caltdeszcz · wspomina @SFBART lub wspomina @Caltdeszcz"),
                i("b18366ba", "Minimalna liczba odpowiedzi"),
                i("f481ba1c", "Przykład: 280 · wpisy, na które odpowiedziało co najmniej 280 osób"),
                i("ib3ddbd4", "Minimalna liczba polubień"),
                i("ef994dac", "Przykład: 280 · wpisy, które polubiło co najmniej 280 osób"),
                i("a504ca74", "Minimalna liczba podań dalej"),
                i("jd9bd944", "Przykład: 280 · wpisy, które podało dalej co najmniej 280 osób"),
                i("e95b9448", "Ogólne"),
                i("f458a3b2", "Ochrona prywatności"),
                i("bdc6f5b8", "Twoje konto"),
                i("ea848de8", "Ustawienia aplikacji EarlyX"),
                i("df483b48", "Przełączniki funkcji"),
                i("bd05add8", "Nie jestem botem"),
                i("d94f12b6", "Spróbuj wyszukać powiadomienia, ustawienia prywatności itd."),
                i("ba8f6f82", "Ustawienia wyszukiwania"),
                i("g931a6e5", function (e) {
                    return "Obserwujesz " + e.topic;
                }),
                i("h3f9027a", "Wpisy związane z tym tematem będą widoczne na Twojej głównej osi czasu. Ten temat pomoże Ci spersonalizować działanie serwisu X."),
                i("e241095e", "Twoje tematy"),
                i("f8bc75e2", "Twoje tematy"),
                i("ed827af6", "Temat jest niedostępny."),
                i("d094c720", "Wszystkie Tematy"),
                i("g3e87c61", function (e) {
                    return e.topicName + " | Tematy";
                }),
                i("g02269ba", "Obserwuj interesujące Cię tematy na X. Będziesz tam widzieć wpisy znawców lub entuzjastów różnych tematów na X."),
                i("e80d2509", function (e) {
                    return "Obserwuj temat " + e.topicName + " na X. Będziesz widzieć najpopularniejsze wpisy znawców, entuzjastów lub osób, które po prostu rozmawiają o temacie " + e.topicName + " na X.";
                }),
                i("e44b4256", "Historyczne wersje historii"),
                i("a74af3f8", "Nie znaleziono historycznych wersji historii."),
                i("c3077694", "Trend — wpisy"),
                i("a9042b6c", "Historia trendów"),
                i("ed54bc32", "Zgłoś trend"),
                i("f89bcc50", "Trend zgłoszony"),
                i("gde7b6b0", "Anuluj zapisanie"),
                i("i6212670", "Ładowanie trendu"),
                i("c6a07c10", "Trend — oś czasu"),
                i("b0c91a92", "Zaloguj lub zarejestruj się, aby zobaczyć, co na ten temat mówią użytkownicy serwisu X"),
                i("d7071084", "Wygrokuj to"),
                i("ee2200f4", "Ta historia to wykonane przez Groka podsumowanie wpisów z serwisu X. Będzie się ona zmieniać z biegiem czasu."),
                i("dd225af8", "Nie znaleziono użytkowników."),
                i("e1e5d552", "Edytuj swój krąg"),
                i("ec13f9cc", "W Twoim kręgu nikogo jeszcze nie ma"),
                i("dab58e32", "Dodane osoby będą widoczne tutaj."),
                i("f43112a4", "Jak to działa"),
                i("a4d60c94", "Wystąpił błąd. Nie możemy teraz dodać tego użytkownika do Twojego kręgu."),
                i("a1ba3bd8", "Twój krąg jest pełny. Do kręgu możesz dodać maksymalnie 150 osób."),
                i("ac3fd6e2", "Nie ma jeszcze żadnych sugestii"),
                i("eeb4d3f0", "Tutaj będziemy sugerować Ci osoby, które warto dodać do Twojego kręgu."),
                i("aea3c420", "Nie ma jeszcze cytatów"),
                i("b40a22c0", "Dodaj coś od siebie podczas udostępniania czyjegoś wpisu, a będzie on widoczny w tym miejscu."),
                i("f08d8d08", "Zwiększ zasięg wpisów, które Ci się spodobały"),
                i("f0ccff52", "Udostępnij wpis innej osoby na swojej osi czasu, podając go dalej. Wpisy podane przez Ciebie dalej będą widoczne w tym miejscu."),
                i("fc1acb54", "Nie ma jeszcze polubień"),
                i("e3527230", "Kiedy ktoś (w tym Ty) polubi ten wpis, informacja o tym pojawi się tutaj."),
                i("i3e8b808", "Ładowanie użytkowników, którzy polubili ten wpis"),
                i("c69fd704", "Ładowanie użytkowników, którzy podali dalej ten wpis"),
                i("f12858d4", "Polubione przez"),
                i("fe62cfec", "Podane dalej przez"),
                i("h1c5d6aa", "Wysłane przez Ciebie"),
                i("h6d45054", "Wysłane przez wszystkich"),
                i("da68fff1", function (e) {
                    return e.count + " monet" + n(e.count, "y", "", "a", "") + " (widoczne tylko dla Ciebie)";
                }),
                i("e35f2534", "Ładowanie interakcji z wpisem"),
                i("i60dfa72", "Interakcje z wpisem"),
                i("dc604dda", "Użytkownicy, którzy polubili ten wpis"),
                i("cdd4ef4a", "Użytkownicy, którzy podali dalej ten wpis"),
                i("icc72234", "Cytaty z tego wpisu"),
                i("hc35b530", "Nie ma jeszcze polubień"),
                i("e0d6a246", "Nie ma jeszcze podanych dalej wpisów"),
                i("i2a26cb4", "Kiedy ktoś polubi ten wpis, informacja o tym pojawi się tutaj."),
                i("i9b724e8", "W tym miejscu znajduje się lista wszystkich osób, które zacytowały ten wpis."),
                i("a5ab75ae", "Nie znaleziono powiązanych wpisów."),
                i("ce637c0e", "Nie znaleziono powiązanych artykułów."),
                i("fd67deaa", "Udostępnij powiązane wpisy"),
                i("f9183bb6", "Skopiuj link do powiązanych wpisów"),
                i("fc4e5d96", "Możesz wyświetlać tylko analizy dotyczące Twoich wpisów."),
                i("ab0da59f", function (e) {
                    return "Analizy: " + e.entity;
                }),
                i("ae32e7de", "To jest promowany wpis. Liczba jego wyświetleń jest prywatna."),
                i("a10aa36c", "Centrum Pomocy"),
                i("d0740558", "Centrum Pomocy"),
                i("d2d76dca", "Centrum pomocy"),
                i("b6414532", "Szacowany podział osób, które widziały Twój wpis."),
                i("c61c6624", "Promowane"),
                i("d267afa2", "Poniżej 20"),
                i("db81cab0", "20-29"),
                i("f173716e", "30-39"),
                i("ada329e6", "40-49"),
                i("j2950694", "Powyżej 50"),
                i("bcd9cf68", "Powyżej 65"),
                i("f05f1838", "Inne / Nie określono"),
                i("fa5be588", "Organiczne"),
                i("c69069e6", "Liczba wyświetleń tego wpisu na X"),
                i("a0615bac", "Ile razy w sumie użytkownik zareagował na wpis. Obejmuje to wszystkie kliknięcia w dowolnym miejscu wpisu (w tym kliknięcia tagów, linków, awatarów, nazwy użytkownika, a także rozwinięcie wpisu), podanie wpisu dalej, odpowiedzi, obserwacje i polubienia."),
                i("d8abdaa4", "Nowi obserwujący"),
                i("c72f25a8", "Liczba użytkowników, którzy zaczęli obserwować Twoje konto po wyświetleniu tego wpisu"),
                i("acc4cf12", "Liczba wyświetleń profilu z poziomu tego wpisu"),
                i("c7d0d1c4", "Liczba kliknięć w linki z wpisu"),
                i("a4da7724", "Ile razy użytkownicy wyświetlali szczegóły wpisu"),
                i("c5d4d3a8", "Koszt jednego obserwującego"),
                i("f56e24f2", "Pełny poniesiony koszt podzielony przez liczbę obserwujących, w tym nowo uzyskanych. Płacisz tylko, gdy ktoś zacznie Cię obserwować"),
                i("g33fd6b1", function (e) {
                    return e.percentage + " – w wyniku promocji";
                }),
                i("b71059c3", function (e) {
                    return e.percentage + " – osoby nieobserwujące Twojego konta";
                }),
                i("h4cbba3e", "< 5%"),
                i("h1cdac12", "< 5% z promocji"),
                i("g884b2cc", "< 5% od osób niebędących obserwującymi"),
                i("b32334a0", "Zasięg wg liczby kont"),
                i("h142a79c", "Liczba unikatowych wyświetleń tego wpisu"),
                i("de4def4e", "% ze wszystkich promocji do dzisiaj"),
                i("e3390c1e", "Pierwsze 48 godzin"),
                i("aead0975", function (e) {
                    return "Funkcja ta rejestruje wyświetlenia wpisu w ciągu pierwszych 48 godzin od udostępnienia go. Maksymalna liczba wyświetleń: " + e.maxValue + ".";
                }),
                i("ib1f8491", function (e) {
                    return e.likeCount + " polubie" + n(e.likeCount, "nia", "ń", "nie", "ń");
                }),
                i("dc0e7f37", function (e) {
                    return e.retweetCount + " poda" + n(e.retweetCount, "nia", "ń", "nie", "nia") + " dalej";
                }),
                i("d0eeb127", function (e) {
                    return e.replyCount + " odpowied" + n(e.replyCount, "zi", "zi", "ź", "zi");
                }),
                i("db6efeb8", "Promocja jest aktywna"),
                i("j6daea86", "Twoja promocja została wstrzymana"),
                i("hf9ed10f", function (e) {
                    return e.endTimeString + " · " + e.endDateString;
                }),
                i("f42a198d", function (e) {
                    return "Wydano " + e.spentBudget + " z " + e.totalBudget;
                }),
                i("e8adeec8", "Promuj ponownie"),
                i("fbb5c37e", "Dodaj boost ponownie"),
                i("ccffb487", function (e) {
                    return "Twój wpis zyskał dotychczas " + e.impressions + " now" + n(e.impressions, "e wyświetlenia", "ych wyświetleń", "e wyświetlenie", "ych wyświetleń") + ". Aby poszerzyć swoje zasięgi, przejdź na konto profesjonalne.";
                }),
                i("ha13fd94", "Wzmocnij wpis"),
                i("jede3014", "Twoja promocja oczekuje na akceptację"),
                i("b823301e", "Po zatwierdzeniu Twój wpis będzie promowany wśród wskazanych przez Ciebie grup odbiorców."),
                i("a2e48870", "Zapoznaj się z Zasadami dotyczącymi reklam w serwisie X"),
                i("ge538876", "Statystyki udostępnionego przez Ciebie filmu"),
                i("ca7e10d8", "Unikalne wyświetlenia"),
                i("i611fc96", "Łączna liczba wyświetleń tego filmu we wszystkich wpisach"),
                i("a69cd868", "Liczba unikalnych wyświetleń filmu"),
                i("f894a688", "Zainteresowanie odbiorców"),
                i("ad9d9204", "Czas, przez który odbiorcy oglądali film, zanim go wyłączyli, i jaką część filmu obejrzeli."),
                i("da4b7a70", "Procent użytkowników, którzy przerwali oglądanie w określonym momencie"),
                i("de2d89a2", "Obejrzano 25%"),
                i("i92754c2", "Obejrzano 50%"),
                i("be8ddcc2", "Obejrzano 75%"),
                i("b01410d6", "Obejrzano 100%"),
                i("gfb3d8af", function (e) {
                    return "Obejrzano do " + e.timeLabel;
                }),
                i("fc6cbba2", "Nic tu jeszcze nie ma"),
                i("b80a53c8", "Zebrane informacja będą widoczne tutaj."),
                i("d25dccb6", "Statystyki nie są dostępne dla wpisów wysyłanych w kręgu."),
                i("g61ac32a", "Automatycznie wskazujemy użytkowników, którzy najprawdopodobniej wejdą w interakcję z Twoimi treściami."),
                i("e8702feb", function (e) {
                    return e.couponAmount + " na nasz koszt!";
                }),
                i("e44dc579", function (e) {
                    return "Zacznij teraz i wykorzystaj zniżkę " + e.couponAmount + " na Twoją pierwszą promocję do " + e.date + ".";
                }),
                i("hd8df545", function (e) {
                    return "Zacznij teraz i wykorzystaj zniżkę " + e.couponAmount + " na Twoją kolejną promocję do " + e.date + ".";
                }),
                i("f1d32e41", function (e) {
                    return "Wydaj " + e.spendAmount + ", by zyskać " + e.couponAmount + " w punktach reklamowych.";
                }),
                i("c4d0434b", function (e) {
                    return e.dailyBudget + " za dzień na " + e.durationLabel;
                }),
                i("dc4a9413", function (e) {
                    return e.totalBudget + " przez " + e.durationLabel;
                }),
                i("bad70c09", function (e) {
                    return "Lokalizacj" + n(e.numLocations, "e", "i", "a", "i");
                }),
                i("c133a39b", function (e) {
                    return e.minAge + "–" + e.maxAge;
                }),
                i("ee5da8f5", function (e) {
                    return e.minAge + "+";
                }),
                i("g4bf9cb7", function (e) {
                    return e.durationDays + " d" + n(e.durationDays, "ni", "ni", "zień", "ni");
                }),
                i("gc3ce5d9", function (e) {
                    return "Szacowany zasięg: " + e.audienceLow + "–" + e.audienceHigh + " użytkowników dziennie";
                }),
                i("c1778029", function (e) {
                    return e.locationsHeading + ": " + e.locations + e.newlinePlaceholder + "Grupa wiekowa: " + e.formattedAge + e.newlinePlaceholder + "Płeć: " + e.gender;
                }),
                i("a4ab12b9", function (e) {
                    return "Gdy wydasz " + e.spendAmount + " na jedną lub więcej kampanii, dodamy " + e.couponAmount + " bezpośrednio do Twojego konta reklamowego. Może minąć kilka dni, zanim środki będą widoczne na Twoim koncie.";
                }),
                i("cb51c854", "Dowolna płeć"),
                i("bb7b39e2", "Mężczyźni"),
                i("eb9466d0", "Kobiety"),
                i("b07cc9f2", "Region"),
                i("ce309bee", "Metro"),
                i("cc49d030", "Kod pocztowy"),
                i("c3fca124", "Dodaj boost zaangażowania"),
                i("d4f57cce", "Zwiększ liczbę swoich obserwujących"),
                i("c6daa762", "Zyskaj więcej kliknięć"),
                i("cc642518", "Wyszukaj lokalizacje"),
                i("i0e8c3c6", "Wyniki dotyczące lokalizacji"),
                i("f69ad048", "Wybierz lokalizację"),
                i("d948b978", "Możesz promować tylko swoje wpisy."),
                i("cfcdb4a2", "Coś poszło nie tak. Upewnij się, że blokowanie reklam jest wyłączone."),
                i("j7a2af7a", "Nie chcesz promować tego wpisu?"),
                i("a78bce8e", "Jeśli opuścisz to okno, Twój wpis nie będzie promowany."),
                i("g8844150", "Nie promuj"),
                i("e7eb3684", "Dzienny budżet"),
                i("d9f6e3ce", "Wybór wysokości dziennego budżetu"),
                i("b3954eca", "Wybór czasu trwania"),
                i("ce665a60", "Zasięg jest szacowany w przybliżeniu. Faktyczny zasięg nie jest gwarantowany."),
                i("i0c3b95c", "Następna kolejka na nasz koszt!"),
                i("h8b6e32a", "Twój wpis jest promowany!"),
                i("ee8014a6", "W dowolnym momencie możesz sprawdzić skuteczność swoich reklam, przeglądając analizy wpisów."),
                i("db841200", "Dodaj boost zaangażowania, rozszerzaj grono odbiorców i promuj swoją stronę."),
                i("fcc839b6", "Co chcesz zrobić?"),
                i("b679a538", "Twój wpis zawiera multimedia"),
                i("cb19a2f0", "Zyskaj więcej polubień, wpisów podanych dalej itp."),
                i("a2d37164", "Zwiększ liczbę osób odwiedzających Twoją stronę"),
                i("cefad302", "Dodaj link do wpisu"),
                i("b614fad0", "Upewnij się, że Twój wpis zawiera link."),
                i("de43b660", "Metody płatności"),
                i("hb4773a0", "Dodaj nową metodę płatności"),
                i("aa2a3dd4", "Usuń kartę"),
                i("b1c5b63c", "koniec za"),
                i("affb5878", "Potwierdź usunięcie"),
                i("db443ae2", "Czy wszystko się zgadza?"),
                i("a96f811e", "Cel promocji"),
                i("fbd44e96", "Twój budżet"),
                i("e36bce64", "Sposób płatności"),
                i("ia83756c", "Podsuma"),
                i("cc217a04", "Status kuponu"),
                i("g4f2b588", "Pozostałe saldo"),
                i("i41612da", "Utwórz promocję"),
                i("cdae1af0", "Dodaj informacje podatkowe"),
                i("ed8bb5a0", "Dodaj szczegóły dotyczące płatności"),
                i("fc640c20", "Dodaj szczegóły dotyczące płatności, aby skorzystać z kuponu"),
                i("be2dc078", "Zarejestruj się i dodaj szczegóły dotyczące płatności"),
                i("iaefd4de", "Zarejestruj się i dodaj szczegóły dotyczące płatności, aby skorzystać z kuponu"),
                i("e5e42640", "Niestety nie udało się wczytać kuponu. Spróbuj ponownie później."),
                i("e85dfd66", "Utworzono już kampanię dla tego wpisu."),
                i("a4db098c", "Nie udało się utworzyć promocji. Spróbuj ponownie później."),
                i("ef7e3916", "Coś poszło nie tak. Sprawdź szczegóły promocji i spróbuj ponownie."),
                i("c1134966", "Warunki i wytyczne dotyczące reklam"),
                i("he45cc43", "Zasady użytkowania kuponów"),
                i("c9439a82", "Warunki i wytyczne dotyczące reklam"),
                i("c672105a", "Do kogo chcesz dotrzeć?"),
                i("e1efbeae", "Zakres wiekowy"),
                i("c6ff7c10", "Minimalny wiek"),
                i("b555fb46", "Maksymalny wiek"),
                i("j2c03e12", "55+"),
                i("d4e01892", "Zasadami dotyczącymi ogłoszeń z sektora nieruchomości, najmu i ofert pracy"),
                i("df8d4fa0", "Wybierz płeć"),
                i("i982d424", "Ile chcesz zainwestować?"),
                i("b9ff6cb0", "Nie wybrano metody płatności"),
                i("i8b90688", "Warunków i wytycznych dotyczących reklam"),
                i("a93bd26d", "Zasad użytkowania kuponów"),
                i("d31dc460", "Warunków i wytycznych dotyczących reklam"),
                i("ga845597", function (e) {
                    return "Łącznie w ciągu " + e.durationLabel;
                }),
                i("e1945a89", function (e) {
                    return e.audienceLow + " – " + e.audienceHigh;
                }),
                i("b21c2549", "Dowiedz się więcej"),
                i("j9f78b42", "W tym wpisie nie ma oznaczonych użytkowników."),
                i("cb2054fa", "Wczytywanie użytkowników"),
                i("e4ad6bda", "Na tym zdjęciu"),
                i("cdd4aafe", "Wczytywanie uczestników rozmowy"),
                i("aac3fad2", "Uczestnicy tej rozmowy"),
                i("a7f66562", "Ładowanie wpisu"),
                i("b7a898fa", "Przejdź do następnego wpisu bezpośrednio z tego miejsca!"),
                i("e254fdd2", "Możesz przesunąć bezpośrednio do następnego wpisu!"),
                i("h59700fa", "ImmersiveMediaViewer"),
                i("i86c2940", "Pasek postępu"),
                i("h2fcc532", "Wczytywanie historii"),
                i("a74821a0", "Wygląda na to, że Twoja płatność nie została zrealizowana lub wkrótce upłynie jej termin. Zaktualizuj swoje informacje płatnicze, aby nie stracić subskrypcji usługi Premium."),
                i("bb55752e", "Za pomocą monet możesz wspierać twórców treści, którzy publikują świetne wpisy. Twoje saldo obejmuje niewykorzystane monety."),
                i("ea7ce65f", function (e) {
                    return "W tym " + e.count + " bonusow" + n(e.count, "e monety", "ych monet", "a moneta", "ych monet") + ".";
                }),
                i("e557f9d2", "Wszystkie Twoje monety zostały wykorzystane."),
                i("e2beba5e", "Najpopularniejsza opcja"),
                i("gafeeb96", "Kup monety"),
                i("bc42db1c", "W dowolnym momencie możesz zrezygnować. Subskrypcja odnawia się automatycznie co miesiąc."),
                i("f1561b06", "Warunki dotyczące zakupów"),
                i("fe93ed4a", "Dokonano zakupu"),
                i("bcb90375", function (e) {
                    return "Twoje nowe saldo: " + e.balance;
                }),
                i("ia2eb0c0", "Wystąpił błąd!"),
                i("c7e11484", "Twoje listy są puste"),
                i("a96208ba", "Zanim kogoś dodasz, musisz utworzyć listę."),
                i("d2826908", "Utwórz nową listę"),
                i("he062e8a", "Wybierz listę"),
                i("c2fb1e94", "Do listy można dodać tylko 5000 kont."),
                i("f30edc68", "Nadaj status prywatny"),
                i("h51a2cf6", "Wystąpił błąd. Poczekaj chwilę i spróbuj ponownie usunąć baner."),
                i("bb10280e", "Wystąpił błąd. Poczekaj chwilę i spróbuj ponownie zapisać listę."),
                i("h8885a22", "Nazwy list nie mogą być dłuższe niż 25 znaków"),
                i("f8132984", "Tylko Ty możesz zobaczyć prywatną listę."),
                i("h421e74c", "Sugerowane listy"),
                i("aa62dea8", "Czekamy z niecierpliwością"),
                i("e5e4d3aa", "Zajrzyj później, aby zobaczyć polecane listy."),
                i("c4d7650c", "Zarządzaj użytkownikami"),
                i("h7f2418c", "Trwa wczytywanie informacji dot. listy"),
                i("b18e5cd2", "Wystąpił błąd. Poczekaj chwilę i spróbuj ponownie usunąć tę listę."),
                i("cdd73e9c", "Usuń listę"),
                i("def8ff62", "Usunąć listę?"),
                i("j8b9cde8", "Tej czynności nie można cofnąć, a lista zostanie usunięta."),
                i("e9f3dec4", "Przeszukiwanie listy"),
                i("b9192d55", function (e) {
                    return e.query + " — przeszukiwanie listy";
                }),
                i("d6a23192", "Utwórz nową listę"),
                i("ie256518", "Przeszukiwanie listy osi czasu"),
                i("j57a2568", "Przeszukiwanie listy"),
                i("hc76e8cd", function (e) {
                    return "Nie znaleziono żadnych list dla hasła „" + e.query + "”";
                }),
                i("d872881a", "Może chcesz utworzyć listę?"),
                i("j177067a", "Szukaj list"),
                i("g13ea02c", "Spróbuj wyszukać listę"),
                i("d1461f1e", "Ta lista jest pusta"),
                i("bcbd3416", "Osoby obserwujące tę listę będą widoczne tutaj."),
                i("b197a56c", "Obserwują tę listę"),
                i("f0ab07f5", function (e) {
                    return "Użytkownicy (" + e.memberCount + ")";
                }),
                i("h9ce3406", "Lista członków"),
                i("dfeaeb26", "Dodaj do swojej listy"),
                i("a332103e", "Osoby dodane do tej listy pojawią się tutaj."),
                i("e2f7dc62", "Znajdź osoby, które warto dodać do listy"),
                i("gc23cc00", "Aby zobaczyć użytkowników, których warto dodać do tej listy, spróbuj wyszukać konta."),
                i("e3deb126", "Polecane listy"),
                i("eb7b54be", "Wczytywanie list"),
                i("a9ca06d2", "Informacje"),
                i("a367dc9a", "Wpisy są wyświetlane w kolejności chronologicznej"),
                i("dd438748", "W pierwszej kolejności są wyświetlane najpopularniejsze wpisy"),
                i("fe7e217c", "Zobacz najnowsze wpisy"),
                i("ce78b698", "Wpisy są wyświetlane według popularności. Opcja Najnowsze wpisy powoduje wyświetlanie wpisów w kolejności chronologicznej."),
                i("i5a1628a", "Zobacz najpopularniejsze wpisy"),
                i("f333a93e", "Najnowsze wpisy są wyświetlane jako pierwsze. W sekcji najpopularniejszych wpisów są wyświetlane najlepsze wpisy."),
                i("c7294984", "Zgłoś listę"),
                i("g6340998", "Nie sprawi to, że zostaniesz automatycznie dodany/a do list tego użytkownika."),
                i("i6da4f7a", "Udostępnij listę"),
                i("a062ff80", "Kopiuj link do listy"),
                i("dcdc75a3", function (e) {
                    return "@" + e.screenName + "/" + e.listName;
                }),
                i("d2004da3", function (e) {
                    return "Nie obserwujesz użytkownika @" + e.screenName;
                }),
                i("a64512a4", "Listy osi czasu"),
                i("i0bcc456", "Kiedy zaczniesz to robić, będziesz widzieć listy tego użytkownika."),
                i("d8315ca0", "Listy, na których jesteś"),
                i("e74be9ac", "Listy, na których jest ten użytkownik"),
                i("c80cb4e4", "Nowa lista"),
                i("bbcaa24b", function (e) {
                    return "Utworzono przez użytkownika @" + e.screenName;
                }),
                i("b081cdf7", function (e) {
                    return "@" + e.screenName + " nie utworzył/a jeszcze żadnej listy.";
                }),
                i("f5978664", "Informacja o tym pojawi się tutaj."),
                i("h243711c", "Nie utworzono jeszcze żadnej listy"),
                i("b69e2f71", function (e) {
                    return "@" + e.screenName + " nie jest dodany/a do żadnych list";
                }),
                i("e05568cc", "Kiedy ktoś doda tego użytkownika do listy, informacja o tym pojawi się tutaj."),
                i("b86a098a", "Nie dodano Cię do żadnych list"),
                i("h06e09a2", "Kiedy ktoś doda Cię do listy, informacja o tym pojawi się tutaj."),
                i("gbaa5489", function (e) {
                    return "Możliwości członkostwa w listach dla użytkownika @" + e.screenName;
                }),
                i("g6b54ff6", "Jesteś na bieżąco"),
                i("ec5fd35a", "Wysyłane do Ciebie prośby o zgodę na obserwowanie Cię będą widoczne tutaj – możesz je zaakceptować lub odrzucić."),
                i("ec2d8342", "Odrzuć"),
                i("j85d8d90", "Brak próśb o obserwowanie dla tego użytkownika."),
                i("c3d23f10", "Wystąpił chwilowy problem. Nie martw się, to nie Twoje wina. Kliknij poniżej, aby spróbować ponownie."),
                i("d2613123", function (e) {
                    return "Subskrybuj: " + e.price + " miesięcznie";
                }),
                i("c4640fc0", "Udostępnij profil subskrybenta"),
                i("a72064a8", "Kopiuj link do profilu subskrybenta"),
                i("e6c72234", "Warunki udostępniania adresów e-mail"),
                i("b17f0c4b", function (e) {
                    return "Jesteś teraz subskrybentem użytkownika @" + e.screenName;
                }),
                i("a5634d9a", "Wystąpił problem z przetworzeniem subskrypcji. Odrzuć ten komunikat i spróbuj ponownie."),
                i("fe9d3afa", "Wczytywanie obserwujących"),
                i("ab7fc3ef", function (e) {
                    return "Superobserwujący użytkownika " + e.fullName + " (@" + e.screenName + ")";
                }),
                i("j0d17377", function (e) {
                    return "Znane Ci osoby, które obserwują użytkownika " + e.fullName + " (@" + e.screenName + ")";
                }),
                i("fa9e827f", function (e) {
                    return "Osoby obserwujące użytkownika " + e.fullName + " (@" + e.screenName + ")";
                }),
                i("ha979be5", function (e) {
                    return "Osoby obserwowane przez " + e.fullName + " (@" + e.screenName + ")";
                }),
                i("d28be573", function (e) {
                    return e.fullName + " — osoby subskrybujące (@" + e.screenName + ")";
                }),
                i("g9da3853", function (e) {
                    return e.fullName + " — osoby subskrybowane (@" + e.screenName + ")";
                }),
                i("cfd952a1", function (e) {
                    return "Zweryfikowane konta obserwujące użytkownika " + e.fullName + " (@" + e.screenName + ")";
                }),
                i("fecc696e", "Zweryfikowani obserwujący"),
                i("g0a2fbbe", "Nie masz jeszcze żadnych subskrybentów"),
                i("g65f4bac", "Nikt Cię jeszcze nie obserwuje"),
                i("c36cfddc", "Szukasz listy obserwujących?"),
                i("fd275c1a", "Nie masz jeszcze zweryfikowanych obserwujących"),
                i("e08bd098", "Listę wszystkich swoich subskrybentów znajdziesz tutaj."),
                i("j029a4dc", "Kiedy ktoś zacznie Cię obserwować, informacja o tym pojawi się tutaj."),
                i("b2b2c6ce", "Gdy jakaś osoba zacznie obserwować to konto, będzie tutaj widoczna. Publikowanie wpisów i interakcje z innymi użytkownikami umożliwiają zwiększenie liczby obserwujących."),
                i("cb1a15c8", "Obserwując konta, które Cię interesują, masz wpływ na to, jakie treści pojawiają się na Twojej osi czasu i możesz na bieżąco śledzić ważne dla Ciebie tematy."),
                i("i967b954", "Listę wszystkich swoich subskrypcji znajdziesz tutaj."),
                i("a44e403e", "W tym miejscu będą widoczne obserwujące Cię zweryfikowane konta."),
                i("d74ee2e3", function (e) {
                    return "Jeszcze nikt z osób, które znasz, nie obserwuje użytkownika @" + e.screenName;
                }),
                i("ae5749c7", function (e) {
                    return "@" + e.screenName + " nikogo nie obserwuje.";
                }),
                i("b5099e33", function (e) {
                    return "Użytkownik @" + e.screenName + " nie ma żadnych zweryfikowanych obserwujących.";
                }),
                i("ec251f36", "Kiedy ktoś, kogo znasz, zacznie obserwować tego użytkownika, informacja o tym pojawi się tutaj."),
                i("f8af4f48", "Gdy ten użytkownik zacznie obserwować jakieś konta, będą one widoczne tutaj."),
                i("fd0aad94", "Gdy osoba zweryfikowana obserwuje to konto, jej dane pojawią się tutaj."),
                i("b84f6df1", function (e) {
                    return "W ograniczonym czasie możesz otrzymać " + e.percentage + "% rabatu na subskrypcję Premium, którą dasz komuś w prezencie.";
                }),
                i("cfcac293", function (e) {
                    return "Daj w prezencie i zapłać " + e.price;
                }),
                i("d7a73450", "Poziom"),
                i("hbd2c24e", "To konto nie ma obecnie uprawnienia do prezentów."),
                i("f3fddc98", "Warunki dotyczące zakupów"),
                i("cff9c889", "Dowiedz się więcej"),
                i("c65dda96", "Twój prezent został wysłany."),
                i("f6e2a407", function (e) {
                    return "Zezwalaj, aby Twoja odznaka Subskrybuje była widoczna dla wszystkich, gdy odpowiadasz na wpisy użytkownika @" + e.screenName;
                }),
                i("j8dedddd", function (e) {
                    return "Jeśli wyłączysz tę opcję, użytkownik @" + e.screenName + " i jego subskrybenci będą wciąż widzieć Twoją odznakę, gdy odpowiesz na wpis przeznaczony tylko dla subskrybentów użytkownika @" + e.screenName + ". Użytkownik @" + e.screenName + " zawsze będzie widzieć Twoją odznakę.";
                }),
                i("c8a513f6", "Anuluj subskrypcję"),
                i("ea000ec8", "Anulowałeś/aś już subskrypcję?"),
                i("d7b8387e", "Jeśli anulowałeś/aś już swoją subskrypcję, nie musisz nic robić. Twoja subskrypcja wygaśnie automatycznie po zakończeniu okresu rozliczeniowego."),
                i("f4166d9a", "Chcesz anulować subskrypcję?"),
                i("b74ff5fc", "Jeśli anulujesz subskrypcję, wygaśnie ona automatycznie po zakończeniu okresu rozliczeniowego."),
                i("ee9efbc8", "Przejdź dalej, by anulować"),
                i("c5d9c77a", "Wystąpił chwilowy problem. Nie martw się, to nie Twoje wina. Zamknij to okno i spróbuj ponownie."),
                i("jda53c24", "Możesz anulować subskrypcję w sklepie Apple App Store."),
                i("g0a7a53e", "Możesz anulować subskrypcję w sklepie Google Play."),
                i("i5f14be7", function (e) {
                    return "Witaj ponownie, " + e.displayName;
                }),
                i("a76d58ba", "Analizy reklam"),
                i("g512ddcc", "Analizy organiczne"),
                i("eccd0e1a", "Analizy organizacji"),
                i("deea1708", "Chcesz wyświetlić analizy wszystkich swoich kont w serwisie X?"),
                i("eb603ffc", "Podnieś poziom, aby powiązać swoją sieć i przeglądać zagregowane analizy."),
                i("gf67aae4", "Podnieś poziom do poziomu Pełny dostęp"),
                i("h75e3618", "Uwzględnij organizację"),
                i("h24a8862", "Informacje o tym polu wyboru"),
                i("c29e3a88", "Wybierz konta powiązane"),
                i("j8318d57", function (e) {
                    return e.number + " kont" + n(e.number, "a powiązane", " powiązanych", "o powiązane", "a powiązanego");
                }),
                i("bf809ec0", "Wybierz konta powiązane"),
                i("b719e224", "Brak wyników"),
                i("c9938100", "Wyniki wyszukiwania"),
                i("d1a35ec6", "Dodaj konta"),
                i("b437adda", "Uaktualnij do płatnej wersji"),
                i("f1f6c88b", function (e) {
                    return "Konta (" + e.count + ")";
                }),
                i("b02156b8", "Zaproszenia"),
                i("gd67d29b", function (e) {
                    return "Zaproszenia (" + e.count + ")";
                }),
                i("daf646e6", "Uwaga: musisz stosować odpowiednie oznaczenia kont."),
                i("i3895c32", "Trwa analiza Twojego konta, ponieważ Twoja @nazwa_użytkownika serwisu X została zmieniona"),
                i("i5f8b628", "Nie możesz modyfikować swoich kont powiązanych, dopóki trwa przegląd Twojego konta."),
                i("e9e663ac", "Masz zaległą płatność."),
                i("c3ddd22c", "zasadami"),
                i("c9729d8a", "zasadami"),
                i("cdcd1d2c", "Dodaj konta powiązane z Twoją organizacją"),
                i("d30ea6f3", function (e) {
                    return "Czy na pewno chcesz usunąć @" + e.name + " z listy powiązanych kont?";
                }),
                i("c2dfbb86", "Tak, usuń"),
                i("ba047f76", "Usunięcie powiązania spowoduje natychmiastowe usunięcie niebieskiego znaczka i odznaki wskazującej na powiązanie. Twój okres rozliczeniowy potrwa do końca miesiąca."),
                i("j26dee0e", "Usuń konto powiązane"),
                i("e30cbdf0", "To konto powiązane należy do użytkownika subskrybującego program Zweryfikowane Organizacje i musi pozostać kontem organizacji – nie można przekwalifikować go na konto osoby."),
                i("j3115ce8", "Osoba"),
                i("d8bb1d84", "Spółka"),
                i("e970bdbd", function (e) {
                    return "Pozostałe zaproszenia: " + e.count;
                }),
                i("id67d953", function (e) {
                    return "Wystąpił błąd podczas pobierania danych dotyczących Twojej płatności wykonanej za pośrednictwem usługi Stripe. Jeśli ten problem będzie nadal występował, skontaktuj się z nami pod adresem " + e.supportEmail + ".";
                }),
                i("f323d314", "Wyślij ponownie"),
                i("ac645cde", "Będziesz mógł/mogła dodać je ponownie."),
                i("d12af2dd", function (e) {
                    return "Czy na pewno chcesz usunąć użytkownika @" + e.screenName + "?";
                }),
                i("ib60b2d5", function (e) {
                    return "Czy na pewno chcesz ponownie zaprosić użytkownika @" + e.screenName + "?";
                }),
                i("ec6e7d9a", "Twoje konto będzie dostępne w trybie tylko do odczytu, dopóki nie zostanie wykonana oczekująca zmiana poziomu. Przejdź do usługi Stripe i sprawdź swoją płatność, aby upewnić się, że zmiana poziomu zostanie wykonana pomyślnie."),
                i("b33d1518", "Synchronizuj oferty pracy z obsługiwanej integracji lub niestandardowego źródła danych XML"),
                i("dd2db402", "Krok 1: Zbierz wymagane informacje"),
                i("edb098c2", "Krok 2: Skontaktuj się z naszym zespołem pomocy technicznej"),
                i("c4474460", "Krok 2: Wyślij wiadomość e-mail do naszego zespołu pomocy technicznej");
            function t(e, a) {
                for (var o = 0; o < a.length; o++) {
                    var i = a[o];
                    (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(
                            e,
                            ((n = i.key),
                            (t = void 0),
                            "symbol" ==
                            typeof (t = (function (e, a) {
                                if ("object" != typeof e || null === e) return e;
                                var o = e[Symbol.toPrimitive];
                                if (void 0 !== o) {
                                    var i = o.call(e, a || "default");
                                    if ("object" != typeof i) return i;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === a ? String : Number)(e);
                            })(n, "string"))
                                ? t
                                : String(t)),
                            i,
                        );
                }
                var n, t;
            }
            function c(e, a) {
                return (
                    (c = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, a) {
                              return (e.__proto__ = a), e;
                          }),
                    c(e, a)
                );
            }
            i("a08da0fa", "Jakie są kolejne kroki?"),
                i("c127374e", "Wyślij nam wiadomość"),
                i("b2cb2a0c", "Nazwa użytkownika Twojego konta zweryfikowanej organizacji"),
                i("b8e64002", "Nazwa Twojego systemu śledzenia osób aplikujących"),
                i("acb99db6", "Adres URL witryny z ogłoszeniami dotyczącymi pracy, w której są wymienione Twoje oferty pracy"),
                i("a64a5b7a", "Wyślij naszemu zespołowi pomocy technicznej wymagane informacje, aby rozpocząć proces integracji."),
                i("e3dffb4e", "Skopiuj widoczny poniżej adres e-mail naszej pomocy technicznej i wyślij zespołowi pomocy technicznej wymagane informacje, aby rozpocząć proces integracji."),
                i("b4fef99e", "Gdy nasz zespół pomocy technicznej otrzyma Twoje żądanie, przejrzymy Twoje informacje i pomożemy Ci w skonfigurowaniu integracji."),
                i("h37f2d96", "Pamiętaj, że nie wszystkie systemy śledzenia osób aplikujących są aktualnie obsługiwane."),
                i("ce102a20", "Przekierowywanie do usługi Stripe"),
                i("ddfd6718", "Realizacja płatności nie powiodła się"),
                i("i90ea7d2", "Jak najszybciej zaktualizuj swoje rozliczenie, aby nie stracić korzyści."),
                i("a62359e6", "Ustawienia zweryfikowanej organizacji"),
                i("ge221b7c", "Podnieś poziom subskrypcji programu Zweryfikowane Organizacje, aby móc korzystać z kont powiązanych oraz otrzymać więcej kredytów reklamowych."),
                i("i4dccc18", "Rachunki"),
                i("ec3cd6e4", "Zarządzaj sposobem płatności, aktualizuj informacje dotyczące rozliczeń i przeglądaj faktury."),
                i("dac61c3c", "Ustawienia konta"),
                i("b6b5fd66", "Zarządzaj swoim kontem w serwisie X (obejmuje to możliwość zmiany nazwy użytkownika lub hasła)."),
                i("hb9c4a1c", "Pytania, zgłoszenia usterek i opinie"),
                i("c674f5b4", "Konfiguruj płatności faktur"),
                i("i8237e66", "Zmień płatności kartą kredytową na fakturowanie za pośrednictwem przelewów bankowych."),
                i("hebd348a", "Skonfiguruj sposób wykorzystania reklam do promowania ofert pracy z portalu Rekrutacja."),
                i("ib5e6f90", "Promocja oferty pracy"),
                i("id720215", "Rekrutacja"),
                i("dd59f146", "Konto do promowania ofert pracy"),
                i("e7e36818", "Konta reklamowe kwalifikują się do promocji ofert pracy, gdy są w pełni skonfigurowane i mają ustawione źródło finansowania."),
                i("c28566e0", "Konto reklamowe"),
                i("c80160d3", "Reklama"),
                i("ff0edac0", "Czy na pewno chcesz anulować subskrypcję?"),
                i("h2ac0348", "No, wróć"),
                i("dbf9667e", "Tak"),
                i("j7592572", "Twój ruch"),
                i("ee778942", "Sygnalizacja świetlna"),
                i("fdd57981", function (e) {
                    return "Chcemy zaoferować Ci jednorazowy bezpłatny kredyt reklamowy w wysokości " + e.totalAmount + " USD.";
                }),
                i("i032a231", function (e) {
                    return "Zostaję i chcę otrzymać mój kredyt reklamowy w wysokości " + e.totalAmount;
                }),
                i("hd7d278c", "Nie, dziękuję"),
                i("jf8a0dea", "Doskonale! Twój nowy bezpłatny kredyt reklamowy trafi na Twoje konto w następnym cyklu rozliczeniowym."),
                i("ebbb3154", "Zamknij i wróć do serwisu X"),
                i("j1f68dda", "Ostatni krok: czy na pewno chcesz anulować?"),
                i("c9c3464c", "Trwa anulowanie subskrypcji"),
                i("dd3a293c", "Twoja subskrypcja opcji Zweryfikowane Organizacje wygasła."),
                i("faa0f956", "Wystąpił błąd podczas anulowania subskrypcji"),
                i("b28289ea", "Dziękujemy"),
                i("b36f74ae", "Aby ponownie uzyskać dostęp do portalu, musisz się zarejestrować i aktywować nową subskrypcję."),
                i("b2297a4a", "Potrzebujesz rozwiązania problemu? Możesz zamówić rozmowę telefoniczną z nami."),
                i("h3bdbc54", "Tak, umówmy rozmowę telefoniczną"),
                i("i135d64e", "Kontynuuj anulowanie"),
                i("g275882d", function (e) {
                    return "Ważne: masz " + e.creditAmount + " bezpłatnego kredytu reklamowego do wykorzystania";
                }),
                i("ib085ed6", "Zostaję i chcę otrzymać mój kredyt reklamowy"),
                i("b5447710", "Nie znaleziono użytkownika"),
                i("h94755b8", "Użytkownik został już wybrany do zaproszenia"),
                i("bfb5effe", "Konto tego użytkownika jest już kontem powiązanym"),
                i("c4b9664e", "Konto powiązane"),
                i("g0eadcf6", "Konto powiązane z inną organizacją"),
                i("a8c81f88", "Konto organizacji"),
                i("e5abe772", "Użytkownik ma już oczekujące zaproszenie"),
                i("e49b97e2", "Wyszukaj konta"),
                i("f002f1d6", "Wyślij zaproszenie"),
                i("g2a8bae4", "Dodaj konta w serwisie X"),
                i("af7293cc", "Zaproś użytkowników serwisu X do dołączenia do Twojej organizacji. Po zaakceptowaniu Twojego zaproszenia otrzymają oni znaczek, a informacja o powiązaniu z Twoją organizacją będzie widoczna w ich profilach."),
                i("ec0f203e", "Gdy konto powiązane zaakceptuje zaproszenie, zaktualizuj jego znaczek, tak aby miał odpowiedni kolor."),
                i("cec08784", "Osiągnięto limit liczby kont powiązanych, które można umieścić na tej fakturze."),
                i("ab70828f", function (e) {
                    return "Dodaj konto @" + e.screenName;
                }),
                i("d49b389f", "tutaj"),
                i("b9e4bf55", "Dowiedz się więcej"),
                i("hc4703a9", "Dowiedz się więcej"),
                i("fa0ffaeb", "Dowiedz się więcej"),
                i("jf351704", "Aby kontynuować, musisz zaktualizować limit liczby kont powiązanych na tej fakturze."),
                i("ia5a6a40", "Aby rozpocząć, musisz dodać swoje dane dotyczące płatności."),
                i("d40d1cc0", "Aby przejść dalej, musisz zapłacić przez Stripe."),
                i("c4a5f614", "Dodaj dane dotyczące płatności"),
                i("fa2a280a", "Aktualizuj fakturę"),
                i("i7b2f08e", "Witaj w programie Zweryfikowane Organizacje"),
                i("g4e18b84", "Osiągnięto maksymalną liczbę kont powiązanych"),
                i("cbe23239", function (e) {
                    return "Zamówienia zakupu ponad " + e.affiliatesCount + " kont powiązanych.";
                }),
                i("fc1f43d0", "Generuj fakturę"),
                i("g8881c78", "Przejdź do płatności"),
                i("g59f8506", "Uwaga: właściciele kont, których nie można zweryfikować jako należących do jednostek biznesowych lub administracyjnych, nie będą otrzymywać zwrotów kosztów."),
                i("a310e476", "Płatność bezpośrednia"),
                i("fde6cf98", "Natychmiastowy dostęp do programu Zweryfikowane Organizacje."),
                i("fdfbfcb0", "Fakturowanie"),
                i("f45d02e8", "Wystąpił błąd podczas konfiguracji subskrypcji. Spróbuj ponownie, korzystając z wiadomości e-mail z linkiem do aktywacji."),
                i("a1c566c0", "Wystąpił błąd podczas konfiguracji subskrypcji. Spróbuj ponownie przesłać swoje dane."),
                i("f5a1c6ac", "Subskrypcje są niedostępne w Twoim regionie"),
                i("ef7ae9cd", "Dowiedz się więcej"),
                i("d3c6b8c9", "Dowiedz się więcej"),
                i("fafe5b9f", function (e) {
                    return "Subskrybuj· " + e.price + " na " + e.interval;
                }),
                i("f2ae1d63", "Warunki dotyczące zakupów"),
                i("ie8759c5", "Warunki dotyczące zakupów"),
                i("d842dd7b", function (e) {
                    return "Rozwijaj się szybciej w serwisie X i skorzystaj z bezpłatnego kredytu reklamowego w wysokości " + e.credit;
                }),
                i("fcfb696e", "⁺Ograniczona czasowo oferta kredytu reklamowego."),
                i("f5b98d62", function (e) {
                    return "każdym okresie „" + e.interval + "”";
                }),
                i("ed7b9984", function (e) {
                    return "każdym okresie „" + e.interval + "”";
                }),
                i("da11a2d7", function (e) {
                    return "Kredyty reklamowe o wartości do " + e.creditAmount + "⁺";
                }),
                i("a6c45ede", "Obejmuje:"),
                i("e9aa43dc", "Organiczne wpisy z ofertami pracy"),
                i("i1266238", "Możliwości promowania ofert pracy"),
                i("e8a4ea7a", "Priorytetowa pomoc techniczna"),
                i("j99e2f4d", function (e) {
                    return e.price + "/" + e.interval;
                }),
                i("bb21a170", "Zmień subskrypcję"),
                i("b0dcc4dc", "Twoje konto oczekuje już na zmianę poziomu."),
                i("f3aef4ca", "Nie znaleziono aktywnych subskrypcji"),
                i("h802e65e", "Aktualizacja subskrypcji nie powiodła się. Spróbuj ponownie. Nie miało to wpływu na Twoją bieżącą subskrypcję."),
                i("c5269eb0", "To jest Twoja aktywna subskrypcja."),
                i("c578c4ca", "Aktualny plan"),
                i("i5d19147", "Nowy plan"),
                i("b025ff5f", "tutaj"),
                i("d6b932d4", "W bezpłatnej wersji próbnej"),
                i("b0efe690", "Kontynuuj z planem Basic"),
                i("g5f9cdaa", "Potwierdź zmiany planu"),
                i("j21911de", "Chcesz używać planu Basic czy zachować korzyści z planu Pełny dostęp?"),
                i("b59dec9e", "Obniżasz poziom z planu Pełny dostęp — bezpłatna wersja próbna do planu Basic."),
                i("e5ff0e1e", "Konsekwencje tej zmiany:"),
                i("ca004c80", "Funkcje wersji próbnej planu Pełny dostęp, w tym konta powiązane, nie będą już dostępne."),
                i("fae108ee", "Konta powiązane dodane w trakcie korzystania z wersji próbnej utracą korzyści oraz pomoc techniczną oferowane w ramach subskrypcji Premium+. "),
                i("d47c0c7c", "Kim jesteś?"),
                i("hbd31720", "Wybierz dla siebie odpowiednią subskrypcję"),
                i("c75a9386", "Dowiedz się więcej o usługach"),
                i("b916b258", "i"),
                i("ic6012ea", "Jestem osobą fizyczną"),
                i("d8e618ce", "Dla osób fizycznych i twórców treści"),
                i("dcbccede", "Reprezentuję organizację"),
                i("f44ce884", "Dla firm, agencji rządowych i organizacji non-profit"),
                i("dece6c60", "Nazwa organizacji"),
                i("c4c1b600", "Adres e-mail organizacji"),
                i("b1e0aec0", "@Nazwa_użytkownika organizacji"),
                i("c42d5f4a", "Liczba kont powiązanych"),
                i("fca5f04b", function (e) {
                    return "Możesz kupić maksymalnie następującą liczbę kont powiązanych: " + e.affiliatesCount + ". Spowoduje to naliczenie Ci odpowiedniej opłaty.";
                }),
                i("dca6b3ac", "Konfiguruj fakturę"),
                i("c97ad52a", "Aktualizuj fakturę"),
                i("b36f0fd4", "Wybierz liczbę kont powiązanych, których potrzebujesz dla swojej organizacji."),
                i("b4871f4f", "tutaj"),
                i("b633d19e", "Dziękujemy"),
                i("f713d3e2", "Twój wniosek został odebrany i aktualnie trwa przeglądanie go."),
                i("e11d5e1a", "Będziesz mieć dostęp do wszystkich korzyści dla użytkowników usługi Premium, ale Twoja organizacja nie otrzyma złotego ani szarego znaczka i nie będzie mogła dodawać kont powiązanych, dopóki Twoje konto nie zostanie zatwierdzone."),
                i("d83617cc", "Zostanie wykonany przegląd Twojego konta."),
                i("afb30564", "Możemy poprosić o dodatkowe informacje potrzebne do zatwierdzenia Twojego konta"),
                i("gdd3fa68", "Po przejrzeniu i zatwierdzeniu Twojego konta zostanie ono natychmiast zweryfikowane, co umożliwi Ci rozpoczęcie używania go oraz dodanie kont powiązanych."),
                i("e6389996", "Konta, które nie zostaną zatwierdzone, nie będą umożliwiać uzyskania zwrotu kosztów."),
                i("a889b460", "Realizacja płatności zakończyła się pomyślnie"),
                i("d1c886dc", "Następny krok: prześlij i zweryfikuj dokumenty"),
                i("b13e9454", "Twój wniosek nie jest jeszcze kompletny. Prześlij wymagane dokumenty. Zazwyczaj trwa to ok. 10 minut."),
                i("e6b0965a", "Twoje zamówienie"),
                i("a1b58798", "Przejrzyj swoje zamówienie poniżej"),
                i("b651c7d7", function (e) {
                    return "Kont" + n(e.count, "a powiązane", " powiązanych", "o powiązane", "a powiązanego") + " x " + e.count;
                }),
                i("ec5e9c54", "Subskrypcja podstawowa"),
                i("e16093fc", "Łącznie na miesiąc"),
                i("ce4acef6", "Suma roczna"),
                i("f4db2df0", "Twoja subskrypcja nie zostanie aktywowana, dopóki nie opłacisz faktury."),
                i("b9e0d614", "Limit liczby kont powiązanych na Twojej fakturze został zaktualizowany."),
                i("a45c9596", "Twoja faktura została wygenerowana pomyślnie."),
                i("e4e5532a", "Zastosowano rabat"),
                i("b557f073", function (e) {
                    return "Wystąpił błąd podczas pobierania danych dotyczących Twojej faktury z usługi Stripe. Jeśli ten problem będzie nadal występował, skontaktuj się z nami pod adresem " + e.supportEmail + ".";
                }),
                i("e8c366ce", "Warunki dotyczące zakupów w serwisie X"),
                i("ee86d380", "Informacje o organizacji"),
                i("b9c9ccca", "Twoje imię i nazwisko"),
                i("c7e818de", "Twój służbowy adres e-mail"),
                i("i60d7542", "Witryna internetowa organizacji"),
                i("b92f9dee", "Typ organizacji"),
                i("f14d7866", function (e) {
                    return "" + e.screenName;
                }),
                i("e63bf39d", "Dowiedz się więcej"),
                i("f09630ff", "tutaj"),
                i("eb043b72", "Oczekiwanie na rozpatrzenie wniosku"),
                i("a9ac4602", "Przeglądanie Twojego wniosku o dołączenie do programu Zweryfikowane Organizacje nie zostało jeszcze zakończone. Spróbuj ponownie później."),
                i("c5af3e12", "Oferta jest ograniczona czasowo, a kredyty nie kumulują się."),
                i("e18d6fd6", "Twój kredyt reklamowy"),
                i("if435d1a", "Wszystkie kredyty dostępne dla Ciebie w tym miesiącu zostały wykorzystane. Następny kredyt zostanie Ci przyznany przy następnej płatności za subskrypcję."),
                i("af6704d7", "tutaj"),
                i("b293c6b4", "pomocy technicznej Premium dla zweryfikowanych użytkowników"),
                i("e9e9ca58", "Dostępny"),
                i("cf2ba3a2", "Identyfikator konta reklamowego"),
                i("gd7d051c", "Aktywuj"),
                i("f391c800", "Identyfikator konta reklamowego jest wymagany"),
                i("ja116d2c", "Identyfikator konta reklamowego jest nieprawidłowy"),
                i("hf037537", function (e) {
                    return "Kredyt zostanie udostępniony " + e.startDate;
                }),
                i("d0b58c01", function (e) {
                    return "" + e.days;
                }),
                i("e49cb8a7", function (e) {
                    return "" + e.remainingAmount;
                }),
                i("gd03b494", "Jak używać kredytu reklamowego"),
                i("h1f36d3e", "Aby użyć kredytu reklamowego dostępnego w ramach programu Zweryfikowane Organizacje, musisz wykonać następujące kroki:"),
                i("a6519ffc", "Jeśli Twoje reklamy były już publikowane"),
                i("ibc9654a", "Jeśli jesteś nowym reklamodawcą"),
                i("d3710c76", "Jeśli chcesz użyć swojego kredytu na koncie powiązanym"),
                i("d60a8f14", "Prezentuj reklamy w serwisie X"),
                i("fe66e4a8", "Menedżer Reklam w serwisie X"),
                i("b3ca0108", "Przekazuj swój komunikat w różne miejsca naszego serwisu, korzystając z usługi Reklamy w serwisie X"),
                i("g3754d57", "tutaj"),
                i("i615ad63", "tutaj"),
                i("a3ba48b9", "tutaj"),
                i("ca3c633a", "Kredyty reklamowe"),
                i("ha843c96", "reklamy"),
                i("dd0f3b08", "reklamy"),
                i("c9fad534", "Brak kredytów"),
                i("a211b11e", "Brak dostępnych kredytów reklamowych do aktywowania"),
                i("f2011db1", function (e) {
                    return "Wykorzystano " + e.usedAmount + " z " + e.couponAmount;
                }),
                i("ae37e25c", "nieznane konto"),
                i("i1407e15", function (e) {
                    return "Wykorzystano na koncie reklamowym " + e.accountId;
                }),
                i("id4359bf", function (e) {
                    return "Termin upłynął " + e.when + " na koncie reklamowym " + e.accountId;
                }),
                i("f89af915", function (e) {
                    return "Termin upłynął " + e.when;
                }),
                i("c1b5e1ed", function (e) {
                    return "Termin upłynie " + e.when + " na koncie reklamowym " + e.accountId;
                }),
                i("e8d8a2a9", function (e) {
                    return "Termin upłynie " + e.when;
                }),
                i("i3884c1f", function (e) {
                    return "Dostępny " + e.when;
                }),
                i("b070acf4", "Dostępny wkrótce"),
                i("ace946c4", "Aktywuj kupon"),
                i("b0b02e37", function (e) {
                    return "Ten kupon został zastosowany na koncie reklamowym o identyfikatorze: " + e.accountId;
                }),
                i("f520ee22", "Identyfikator konta reklamowego"),
                i("df96ca56", "Inne konto"),
                i("b5566402", "Identyfikator składa się wyłącznie z liter i cyfr."),
                i("eb160d07", "selektorze kont Menedżera reklam"),
                i("e016ad32", "Tryb tylko do odczytu"),
                i("d7ab194e", "Podczas przetwarzania zmiany subskrypcji niektóre funkcje zweryfikowanego konta mogą być dostępne tylko do odczytu."),
                i("g25d851e", "Konta reklamowe"),
                i("de7fef84", "Skontaktuj się z obsługą klienta, aby uzyskać pomoc dotyczącą konta"),
                i("ff1321b6", "Konfiguracja zakończona, konto jest aktywne"),
                i("c1205320", "Aktywuj swoje konto reklamowe poprzez dodanie karty kredytowej"),
                i("c0343c0a", "Ostatnia płatność nie powiodła się; sprawdź sposób płatności na koncie"),
                i("j56e34a4", "Skontaktuj się z obsługą klienta, aby uzyskać pomoc dotyczącą dostępu do konta"),
                i("gef920f2", "Aby aktywować konto, wymagana jest początkowa konfiguracja"),
                i("b68dd4d8", "Nie masz dostępu do tego konta; poproś administratora zespołu o pomoc"),
                i("d637962c", "Nie masz żadnych kont reklamowych"),
                i("dd087ae0", "Skonfiguruj je na ads.x.com"),
                i("i3d7dd02", "Kwalifikujące się konto reklamowe jest gotowe do promowania ofert pracy"),
                i("cc8f8516", "Utwórz konto reklamowe, aby promować oferty pracy"),
                i("b4f117b8", "Nie masz dostępu do konta do promocji ofert pracy"),
                i("b7347cf4", "Skonfiguruj konto reklamowe, aby promować oferty pracy"),
                i("h7d03a2a", "Dodaj ofertę pracy za pomocą panelu rekrutacyjnego"),
                i("cd5aeec6", "Utwórz konto reklamowe"),
                i("ged51d2e", "Utwórz konto reklamowe"),
                i("gcfa25e6", "Nie ma żadnych kont reklamowych skonfigurowanych dla Twojej organizacji. Przejdź na ads.x.com, aby je utworzyć."),
                i("g76fb922", "Nowe konto"),
                i("db0a69e7", function (e) {
                    return "Twoje konto reklamowe (ID: " + e.adAccountId + ") jest nowe. Przeprowadź początkową konfigurację w Menedżerze reklam, aby je aktywować.";
                }),
                i("c7bad5cc", "Skonfiguruj konto"),
                i("g8c563c0", "Potrzebujesz dostępu"),
                i("f6f29b17", function (e) {
                    return "Nie masz dostępu do konta reklamowego (ID: " + e.adAccountId + "). Poproś administratora zespołu o dodanie Cię do konta w Menedżerze reklam.";
                }),
                i("a15bb840", "Wymagany sposób płatności"),
                i("j4e981d9", function (e) {
                    return "Twoje konto reklamowe (ID: " + e.adAccountId + ") jest częściowo skonfigurowane. Aby je aktywować, dodaj sposób płatności do konta. Wszelkie kredyty, które zastosujesz na tym koncie, zostaną wykorzystane przed pobraniem opłaty.";
                }),
                i("af142910", "Płatność nie powiodła się"),
                i("a9635acf", function (e) {
                    return "Twoje konto reklamowe (ID: " + e.adAccountId + ") było aktywne, ale ostatnia płatność nie powiodła się. Aby je ponownie aktywować, zmień sposób płatności na tym koncie.";
                }),
                i("d1cca474", "Zmień sposób płatności"),
                i("fe8b969a", "Obsługa klienta może Ci pomóc"),
                i("i8aa0b91", function (e) {
                    return "Aby aktywować to konto reklamowe (ID: " + e.adAccountId + "), należy skontaktować się z obsługą klienta. Pamiętaj, aby w wiadomości uwzględnić identyfikator konta reklamowego. Twoja prośba zostanie rozpatrzona priorytetowo.";
                }),
                i("d82c2074", "Uzyskaj pomoc techniczną"),
                i("ad37d536", "Postanowienia dotyczące przekazywania nazw użytkownika"),
                i("e760074a", "Przejmij nieużywaną nazwę użytkownika lub zamień ją na własną"),
                i("j003ef92", "Kup od firmy X nieaktywne nazwy użytkownika dla siebie lub swoich powiązanych kont albo zamień używane nazwy użytkownika na inne, które już posiadasz."),
                i("d57a8e42", "Ta usługa jest dostępna wyłącznie w ramach programu Zweryfikowanie Organizacje, a jej używanie wiąże się z dodatkowymi kosztami na każdą nazwę użytkownika. Te koszty zaczynają się od 10 000 USD."),
                i("h9367bd6", "Prześlij zapytanie dotyczące nazwy użytkownika"),
                i("a6a62e7e", "Rozpocznij proces, odpowiadając na kilka pytań przy użyciu naszego zautomatyzowanego bota pomocy technicznej."),
                i("e5912290", "Rozpoczynanie zapytania dotyczącego nazwy użytkownika"),
                i("c2e24f66", "Poszukaj wiadomości z działu pomocy technicznej w dolnym rogu ekranu."),
                i("c94f514e", "Zapytanie dotyczące nazwy użytkownika zostało rozpoczęte"),
                i("cf60d152", "Wypełnij krótki kwestionariusz w oknie czatu, aby przesłać zapytanie dotyczące nazwy użytkownika."),
                i("f06b124e", "Często zadawane pytania"),
                i("h677fdcc", "W jaki sposób są wyceniane nazwy użytkownika?"),
                i("a55b39aa", "Głównie na podstawie liczby znaków oraz powszechności słów. Ceny zaczynają się od 10 tys. USD i mogą sięgać nawet 500 tys. USD."),
                i("d46bcb3a", "Skąd mam wiedzieć, czy nazwa użytkownika jest dostępna do zakupu?"),
                i("c6bcf72c", "Wyślij nam żądanie, używając przycisku Rozpocznij, a my poinformujemy Cię, czy dana nazwa użytkownika jest dostępna."),
                i("d478604c", "Czy mogę kupić nazwę użytkownika w imieniu innej firmy?"),
                i("c09f8cd2", "Nie. Firmy mogą kupować nazwy użytkownika tylko w imieniu swoich powiązanych podmiotów, które są autentycznie połączone z ich działalnością."),
                i("d814f020", "Jak wygląda proces sprzedaży? Jak długo trwa sprzedaż?"),
                i("f600b6f0", "Zażądaj zakupu lub zamiany nazwy użytkownika, używając przycisku Rozpocznij. W ciągu 3 dni roboczych otrzymasz odpowiedź z informacjami o dostępności i cenach. W ciągu 1–2 dni od wykonania płatności przekażemy nazwę użytkownika na wybrane przez Ciebie konto. Opcjonalnie możemy przenieść starą nazwę użytkownika na inne należące do Ciebie konto."),
                i("i8debc4a", "Czy oferujecie rabaty w przypadku zakupu wielu nazw użytkownika?"),
                i("c5199f3c", "Tak, w zależności od liczby kupowanych nazw użytkownika i łącznej wielkości oferty."),
                i("c20f923e", "Posiadam znak towarowy — czy to coś zmienia?"),
                i("b2fd4c15", "Zasady dotyczące znaków towarowych"),
                i("a690746e", "Korzystaj z priorytetowej pomocy technicznej"),
                i("he2dc9b0", "Skontaktuj się z nami, wysyłając nazwę użytkownika swojej organizacji oraz szczegóły żądania."),
                i("e5e6479e", "Wyślij nam wiadomość e-mail zawierającą nazwę użytkownika organizacji oraz szczegóły zapytania, aby skorzystać z najszybszej pomocy technicznej."),
                i("ica8392a", "Gdy otrzymamy Twoje żądanie, przeanalizujemy je i nadamy mu priorytet zgodnie z jego pozycją w kolejności odebranych żądań."),
                i("ed37e36e", "Ważne: brak nazwy użytkownika organizacji lub użycie prywatnego adresu e-mail może spowodować opóźnienia w przetwarzaniu Twojego żądania."),
                i("eb0d4fe2", "Utwórz kolumnę"),
                i("e93d2f8a", "Dostosuj swoje ustawienia, dodając różne rodzaje kolumn, takie jak:"),
                i("e8203d1e", "Wyszukiwania"),
                i("d82fd532", "Prywatne wiadomości"),
                i("c87babee", "Więcej..."),
                i("f1990aa4", "Organizuj swoje kolumny, łącząc je w decki"),
                i("ib9c9a54", "Wyobraź sobie, że masz wiele osobnych ekranów usługi X Pro. Wyłącz niepotrzebny szum i skup się na tematach oraz narzędziach, których w danej chwili najbardziej potrzebujesz."),
                i("fb5ac13e", "Przenieś kolumnę"),
                i("bd545b7e", "Kliknij kropki, aby przeciągnąć i upuścić kolumnę w dowolnym miejscu decka."),
                i("a98513b6", "Dostosuj kolumny"),
                i("c8759e44", "Na górze kolumny znajdziesz następujące opcje:"),
                i("a93e96c8", "Wyświetlaj wpisy według popularności lub w kolejności chronologicznej"),
                i("df300378", "Zmień rozmiar kolumny"),
                i("aa263910", "Użyj zaawansowanych narzędzi wyszukiwania"),
                i("ab3915aa", "Wskazówki i ustawienia"),
                i("ia03837a", "Przejdź tu, aby:"),
                i("f0bd595c", "Zarządzaj deckami"),
                i("a74e9464", "Zmień ustawienia wyświetlania"),
                i("h254eb92", "Poznaj skróty klawiszowe"),
                i("j6e669a0", "Ponownie zobacz tutorial"),
                i("c15802be", "Trwa wysyłanie wpisów..."),
                i("e5506950", "Decks"),
                i("b1bd9a8a", "Nowy deck"),
                i("cf1a138f", function (e) {
                    return "Zmieniono na talię – " + e.title;
                }),
                i("g9c2da24", "Otwiera okno dialogowe, aby utworzyć nową talię"),
                i("hcef6b72", "Otwiera okno dialogowe, aby zarządzać taliami"),
                i("a77dbc7a", "Edytuj deck"),
                i("a154a293", function (e) {
                    return "Wybrano talię " + e.deckName;
                }),
                i("a77bbe9d", function (e) {
                    return "Usunięto wybór talii " + e.deckName;
                }),
                i("ha2aae72", "Otwiera okno zarządzania wybraną talią"),
                i("hf59ffc8", "Pasek nawigacji"),
                i("dd6142d7", "Pro"),
                i("d69fc67a", "Dodaj nową kolumnę"),
                i("ad61a830", "Utwórz wpis"),
                i("c44f5114", "Ustawienia wiadomości"),
                i("c71066fe", "Zobacz tutorial"),
                i("b452e6c2", "Co u Ciebie słychać?"),
                i("j7737bc2", "Dziękujemy za korzystanie z usługi X Pro. Powiedz nam, jakie są Twoje wrażenia."),
                i("e8038d64", "Twoja wiele dla nas znaczy – dzięki niej możemy stale udoskonalać nasze usługi."),
                i("fce3c5ce", "Podziel się swoją opinią"),
                i("ha39df38", "Osobiste"),
                i("ja7b7d1a", "Wystąpił problem z połączeniem. Wprowadzone zmiany mogły nie zostać zapisane."),
                i("ad5df1d7", function (e) {
                    return "Zmieniono na kolumnę – " + e.title;
                }),
                i("ba7bd92e", "Ustawienia kolumn"),
                i("cc4ff736", "Udostępnij rubrykę"),
                i("g684a93a", "Zmiany dotyczące tej kolumny będą widoczne dla wszystkich wyświetlających ją użytkowników."),
                i("a6bbdc1c", "Tryb wyświetlania"),
                i("f6e88162", "Labs"),
                i("e6df688c", "Opcje"),
                i("e3f2b93a", "Pokaż lub ukryj informacje dotyczące tej kolumny."),
                i("db257758", "Rozmiar podglądu multimediów"),
                i("if2fbab8", "Rozmiar podglądu multimediów w odpowiedziach"),
                i("he517d52", "Zmień nazwę kolumny"),
                i("f6eb2cfe", "Nazwa kolumny"),
                i("d6d39c84", "Każda kolumna musi mieć nazwę."),
                i("e5c06aee", "Szerokość kolumny"),
                i("af6a4368", "Zmień nazwę tej rozmowy i wyświetl jej uczestników."),
                i("cdeac5ee", "Ustawienia prywatnych wiadomości"),
                i("fda7ee26", "Zdecyduj o tym, kto może wysłać do Ciebie prywatne wiadomości."),
                i("c4ec8620", "Uwzględnij"),
                i("d5f29cd4", "Pomiń"),
                i("d01a62f8", "Czas i lokalizacja"),
                i("d614afc8", "Polubienia, odpowiedzi i wpisy podane dalej"),
                i("fb2bbc7a", "Treść wpisu"),
                i("a589add2", "Którekolwiek z tych słów (LUB)"),
                i("d2f8dc8a", "Wpisy od innej osoby"),
                i("e37201ec", "Wysyłanie odpowiedzi do innego użytkownika"),
                i("e035e056", "Wspominanie innego użytkownika"),
                i("ef2d4092", "Pomiń słowa"),
                i("d59f395e", "Wybrany język wyświetlania"),
                i("g67cd3f2", "Wybierz języki"),
                i("c85f9b9c", "Zmień języki"),
                i("b5148188", "Ponad"),
                i("hf369320", "Poniżej"),
                i("f4dce7b6", "Ile"),
                i("ddafa9a2", "Wyświetl opcje"),
                i("c6be8432", "Poziom zaangażowania"),
                i("e60b9fac", "Pokaż oryginalne wpisy"),
                i("eb441fee", "Pokaż wpisy podane dalej"),
                i("e920e6dc", "Pokaż wyceny"),
                i("g9580526", "Pokaż odpowiedzi"),
                i("i73cbb5c", "Do wyszukiwania można dodać tylko jedną Listę. Uwzględniona zostanie tylko pierwsza Lista."),
                i("c765315d", function (e) {
                    return "Wpisz " + e.listHandleListNameFormat + " lub identyfikator Listy";
                }),
                i("a153fbf2", "Wyszukiwanie przy użyciu Listy"),
                i("bf0d5a7c", "Do wyszukiwania można dodać tylko jedną Listę."),
                i("c6e8759a", "Aby dodać Listę, zastosuj następujący format:"),
                i("dd9daca8", "W nazwie Listy w miejsce kropek wstaw łączniki (-)."),
                i("cd71b264", "Dowiedz się więcej na temat List."),
                i("ca23d726", "Zdjęcia i filmy"),
                i("f1fa97a8", "Transmisje"),
                i("c0bab0ba", "Pokaż tylko wpisy zawierające multimedia"),
                i("g9512656", "Pokazuj tylko zweryfikowanych użytkowników"),
                i("b967e296", "Pokazuj tylko osoby, które obserwujesz"),
                i("gc51a2ac", "W dowolnym czasie"),
                i("d42a4916", "Ostatnio"),
                i("a2229a06", "W określonym czasie"),
                i("c1fe6156", "Czas rozpoczęcia"),
                i("cbc02622", "Czas zakończenia"),
                i("b666573c", "Wyszukaj lokalizację"),
                i("cf260344", "Wpisy w"),
                i("j5805302", "Promień"),
                i("e592ab3c", "Aby uzyskać lepsze wyniki wyszukiwania, dodaj do zapytania informację o swojej lokalizacji i regionie lub kraju, w którym przebywasz."),
                i("e8843b5d", function (e) {
                    return e.meters + " min";
                }),
                i("g9e6a4e5", function (e) {
                    return e.kilometers + " km";
                }),
                i("ec688a09", function (e) {
                    return "To sprawi, że użytkownik @" + e.screenName + " nie doda Cię do żadnej listy, w tym do tej.";
                }),
                i("iad54d54", "Wyczyść Zakładki"),
                i("g4d581a2", "Opróżnij ten folder oraz pozostałe foldery Zakładek"),
                i("fb14aebe", "Wyczyść Zakładki"),
                i("jf748f40", "Wyczyścić wszystkie Zakładki?"),
                i("d63a211a", "Tej operacji nie można cofnąć, a wszystkie wpisy dodane do Zakładek zostaną usunięte."),
                i("a16ebc1a", "Rozpocznij nowy czat"),
                i("a1ff1890", "Spowoduje to wyczyszczenie bieżącej rozmowy."),
                i("ab352ee0", "Pokaż najnowsze wpisy"),
                i("c004c4d6", "Wyczyść wpisy"),
                i("fc702822", "Wyczyść wpisy i wyświetlaj najnowsze wpisy w kolejności chronologicznej."),
                i("a2c59056", "Zanim wyczyścisz kolumnę..."),
                i("d31bdbbe", "Przejdź do najnowszych wpisów"),
                i("dec3722c", "najnowszych wpisów"),
                i("g33b8c04", "Utwórz kopię"),
                i("de2c3008", "Kopiuj tę kolumnę."),
                i("a7c01ce0", "Zmień nazwę folderu lub usuń folder"),
                i("e52e4c82", "Zmiana ustawień lokalizacji i personalizacji."),
                i("f4d052a4", "Grok (tryb normalny)"),
                i("fa97c1c6", "Grok (tryb zabawny)"),
                i("efb37dec", "Tryb"),
                i("h0064892", "Normalny"),
                i("ad86db50", "Utwórz talię"),
                i("hb70ef30", "Utwórz talię na podstawie tego wyszukiwania"),
                i("j8a945cc", "Najpopularniejsze wpisy"),
                i("f3a4a654", "Zweryfikowane wpisy"),
                i("c8da0c42", "Zdjęcia i filmy"),
                i("d2cf6f74", "Partnerzy usługi Premium"),
                i("c9b39e70", "Przenieś"),
                i("b9ea5f7c", "Przenieś kolumnę do innej talii."),
                i("g8b6d450", "Opcje powiadomień"),
                i("dd703fbd", function (e) {
                    return "Usunięto kolumnę – " + e.title;
                }),
                i("d9d11fc6", "Usunąć publiczną kolumnę?"),
                i("h17ada6c", "Usunięcie publicznej kolumny spowoduje, że stanie się ona trwale niewidoczna dla Twoich obserwujących."),
                i("hb388fe8", "Usuń kolumnę"),
                i("c1343ad6", "Przenieś do kolumny wyszukiwania."),
                i("e7a12d72", "Zmieniono w kolumnę wyszukiwania"),
                i("f29424f0", "Cofnij zmianę"),
                i("h5ff85a2", "Udostępnij kolumnę"),
                i("d32058ba", "Zmień status rybryki na publiczny, aby móc ją udostępniać."),
                i("c926a6ca", "Naniesione przez Ciebie zmiany będą widoczne dla wszystkich osób obserwujących tę rubrykę."),
                i("g0175ca2", "Wybór kolumny"),
                i("a800727c", "Wróć do wyboru kolumny"),
                i("f318bc40", "Utwórz nowy folder"),
                i("e300a9f0", "Utwórz folder Zakładek"),
                i("j341c67c", "Każdy folder musi mieć nazwę."),
                i("d00586a6", "Nie można załadować kolumny. Spróbuj utworzyć nową kolumnę."),
                i("d0d8277e", "Właściciel rubryki zmienił jej status na prywatny."),
                i("j08fd6fe", "Twoje grupy dyskusyjne"),
                i("b569a1fa", "Powrót do grup dyskusyjnych"),
                i("i176bfd2", "Odkryj listy"),
                i("a57c3292", "Odkryj nowe listy"),
                i("f59f87dc", "Wyszukaj listy innych osób"),
                i("a5d70676", "Listy, na których jesteś"),
                i("e377790a", "Powrót do list"),
                i("e952b8c3", function (e) {
                    return "Listy użytkownika @" + e.userScreenName;
                }),
                i("bc24f834", "Wróć, aby wyszukać listy innych osób"),
                i("ee11d084", "Wyszukaj profile."),
                i("c300f3bc", "Dodaj kolumny"),
                i("bd744e9a", "Dodaj wyniki wyszukiwania"),
                i("i10d4124", "Zacznij od zera"),
                i("jbff8606", "Wyślij zapytanie"),
                i("dbd8a566", "Niektórych szkiców wpisów nie udało się usunąć."),
                i("c82be5a8", "Wybrane przez Ciebie szkice wpisów zostały usunięte."),
                i("ad84af68", "Wczytywanie szkiców wpisów"),
                i("ef97fb3a", "Nie masz żadnych szkiców wpisów"),
                i("f26ece12", "Niewysłane Tweety pojawią się tutaj."),
                i("a4911812", "Usuwanie szkiców wpisów "),
                i("b49be1ca", "Odrzuć szkice wpisów"),
                i("ca91dc76", "Tej czynności nie można cofnąć i utracisz szkice wpisów."),
                i("b38b254a", "Niektórych zaplanowanych wpisów nie można usunąć."),
                i("he2e3cc4", "Wybrane przez Ciebie zaplanowane wpisy zostały usunięte."),
                i("jf9faee4", "Wczytywanie zaplanowanych wpisów"),
                i("aa1cfd48", "Nie masz żadnych zaplanowanych wpisów"),
                i("b2a70dbe", "Usuwanie zaplanowanych wpisów"),
                i("a07bb1b0", "Odrzuć zaplanowane wpisy"),
                i("id78e802", "Tej czynności nie można cofnąć, a zaplanowane wpisy zostaną usunięte."),
                i("d9a75e16", "Wybierz"),
                i("aa030cd4", "Zobacz polecane wpisy na początku."),
                i("c0d2d4aa", "Oś czasu na Stronie Głównej"),
                i("ecbbbb90", "Zobacz listy Twoje lub innych osób."),
                i("c351229c", "Wyświetl grupy dyskusyjne, do których należysz."),
                i("a2d1df82", "Znajdź to, czego szukasz."),
                i("d5387d8a", "Śledź wszystkie wiadomości."),
                i("e738198c", "Sprawdź, o czym mówi się na X."),
                i("ifb8c91e", "Znajdź profil i sprawdź aktywność tego użytkownika."),
                i("aa0525d0", "Profil"),
                i("cb7844a6", "Nie przegap żadnego powiadomienia ani wzmianki."),
                i("e64da55e", "Zobacz swoje zaplanowane wpisy."),
                i("h9659832", "Zobacz swoje szkice wpisów."),
                i("f1b6535e", "Szkice wpisów"),
                i("a24add8a", "Zobacz wpisy w zakładkach."),
                i("ic61c5fc", "Przewiń do góry"),
                i("gb19f215", function (e) {
                    return "Kolumna - " + e.title;
                }),
                i("g7751b34", "Zamknij stos"),
                i("b94fa48c", "Wyczyść stos"),
                i("dd3dc3cc", "Wróć do stosu"),
                i("bc7acfd0", "Udostępniona kolumna"),
                i("a6587d95", function (e) {
                    return "Zmień kolejność kolumn – " + e.title;
                }),
                i("fb071dea", "Przesuń kolumnę"),
                i("c77a6327", function (e) {
                    return "Otwórz ustawienia kolumn – " + e.title;
                }),
                i("h53c41f0", "Opcje dot. kolumny"),
                i("f7bbbb6d", function (e) {
                    return "Zamknij ustawienia kolumn – " + e.title;
                }),
                i("eee9f83e", "Zamknij ustawienia kolumn"),
                i("a443bbc0", "Zamknij wyszukiwanie"),
                i("c8b12c8f", function (e) {
                    return "Wybierz zawartość kolumny - " + e.title;
                }),
                i("fe048090", "Pokaż skrót"),
                i("e57560b4", "Ukryj"),
                i("fb087db0", "Utwórz osobną kolumnę"),
                i("aa128cd8", "Dodaj jako nową kolumnę"),
                i("aa4f00c6", "Udostępnij talię"),
                i("fdf97052", "Przejdź do opcji talii"),
                i("ed427868", "Zmienić status talii na publiczny?"),
                i("gecc71a2", "Aby udostępnić talię, musisz zmienić jej status na publiczny."),
                i("f0653866", "Udostępnianie talii"),
                i("b158400a", "Pomiń ten krok"),
                i("h15afbce", "Na początek kilka ustawień"),
                i("ibe6be32", "Dostosuj środowisko usługi X Pro: wybierz szerokość kolumny i kolor oraz rozmiar tekstu i multimediów zgodnie ze swoimi preferencjami."),
                i("e28eb008", "Otwórz ustawienia wyświetlania"),
                i("dc8b86e0", "Dodajmy Twoje kolumny"),
                i("ee28603e", "Importuj swoje kolumny"),
                i("dad15d22", "Aby oszczędzić czas, zaimportuj swoje kolumny wyszukiwania, list i profilu. Później nie będzie to już możliwe."),
                i("j85b4522", "Lub zacznij od zera"),
                i("hfd5ca12", "Niestety nie udało się zaimportować Twoich kolumn"),
                i("b855852a", "Można zaimportować tylko kolumny wyszukiwania, listy i profilu. Zamiast tego dodaj kolumnę Strony Głównej."),
                i("dc6c806e", "Nie udało się zaimportować Twoich kolumn"),
                i("a0dfe2f6", "Usługa X Pro to wygodny sposób wyświetlania wielu kolumn osi czasu w jednym prostym interfejsie."),
                i("i8912d28", "Dodajmy jakieś kolumny..."),
                i("ce0c0f34", "Porozglądaj się trochę"),
                i("h36d2aa2", "Na początek kilka przydatnych wskazówek."),
                i("fbaf9442", "Dodaj talię startową"),
                i("b354ea52", "Dodawanie talii startowej..."),
                i("if195eb8", "Dodawanie kolumn..."),
                i("ea07517c", "Usunięto kolumnę."),
                i("habced9e", "to skrót umożliwiający przywrócenie kolumny."),
                i("g4fcb4f8", "Kolumna została przywrócona."),
                i("d4429cba", "Hmm... ta talia nie istnieje. Spróbuj wybrać inną."),
                i("g2c6e34a", "Zmień rozmiar i kolor treści lub tło."),
                i("bf2890a6", "Skala wizualna"),
                i("h098a550", "Domyślna szerokość kolumn"),
                i("ab248726", "Domyślny podgląd multimediów"),
                i("jdaf161c", "Zakładka wiadomości"),
                i("ge0fcfd0", "Karty najechania kursorem"),
                i("e1cab6e8", "Zastosować zmiany dla istniejących kolumn?"),
                i("ce2e487c", "Jeśli wprowadzisz zmiany dotyczące kolumn, wszystkie kolumny w Twoich deckach zostaną zmienione. Jeśli klikniesz Nie, te ustawienia zostaną zastosowane tylko dla nowych kolumn."),
                i("fdbd90a6", "Tak, zmień wszystkie kolumny"),
                i("h8affe68", "Nie, tylko nowe kolumny"),
                i("f06885b6", "Opcje rozmiaru multimediów w kolumnach"),
                i("e4bab2d0", "Opcje szerokości kolumn"),
                i("f0e71094", "Wyświetl Zakładkę wiadomości"),
                i("aa25a5a6", "Zakładka wiadomości u dołu ekranu, którą można zwinąć"),
                i("g3da3c90", "Pokaż karty najechania kursorem"),
                i("b08a8656", "Pokazuj karty najechania kursorem po najechaniu kursorem na interaktywne elementy"),
                i("g9df1984", "Dodaj deck"),
                i("df77af70", "Wybierz emoji decka"),
                i("ee7765ba", "Wybierz emoji"),
                i("e0127c83", function (e) {
                    return "Zmień emoji " + e.emoji;
                }),
                i("hb8b6254", "Z Twojego profilu każdy ma dostęp do Twojej publicznej talii. Możesz również udostępniać linki do niej. Jeśli zmienisz zdanie, w dowolnej chwili możesz zmienić status swojej talii na prywatny. Dowiedz się więcej"),
                i("gfbaf4e8", "Nie można w tej chwili zmienić statusu tej talii na publiczny"),
                i("ae04848a", "Ta talia zawiera kolumny powiązane z Twoim kontem w serwisie X. Aby ustawić tę talię jako publiczną, musisz usunąć te kolumny. Dowiedz się więcej."),
                i("d606207a", "Usuń deck"),
                i("h95cb00e", "Ten deck zostanie trwale usunięty. Tej czynności nie można cofnąć."),
                i("f50c9834", "Deck zostanie trwale usunięty. Nie będzie już można go odzyskać."),
                i("cb861826", "Zmień kolejność talii"),
                i("i5896b2b", function (e) {
                    return "Edytuj talię „" + e.title + "”";
                }),
                i("ef602cab", function (e) {
                    return "Usuń talię „" + e.title + "”";
                }),
                i("b44b9d83", function (e) {
                    return "Odepnij talię „" + e.title + "”";
                }),
                i("je4a847f", function (e) {
                    return "Przypnij talię „" + e.title + "”";
                }),
                i("ad41be88", "Przenieś kolumnę do talii"),
                i("cb82860a", "Nie znaleziono kolumny"),
                i("icbecd02", "Dodaj kolumnę"),
                i("fdf1a2c6", "Dodaj talię"),
                i("d25acc28", "Co będę z tego mieć?"),
                i("fe5df266", "Chcesz zmienić status kolumny na prywatny?"),
                i("i3206148", "Zmiana statusu kolumny z publicznego na prywatny spowoduje, że stanie się ona niewidoczna dla Twoich obserwujących."),
                i("c65d210c", "Zmień status kolumny na prywatny"),
                i("j4d54f1e", "Efektywne, działające w czasie rzeczywistym narzędzie dla osób żyjących w serwisie X."),
                i("je0526a0", "Monitoruj wiele osi czasu na jednym ekranie. Śledź i organizuj treści oraz wchodź w interakcje na żywo."),
                i("d128af54", "Zarejestruj się, aby korzystać z subskrypcji X Premium"),
                i("bacd7195", function (e) {
                    return e.fullName + " (@" + e.screenName + ") w serwisie X";
                }),
                i("e5b4aafa", "Twoje połączenie z Internetem zostało przerwane."),
                i("g43c3b36", "Połącz się ponownie z Internetem, aby kontynuować."),
                i("hafe83ec", "Naciśnij przycisk Zamknij, aby wyjść z aplikacji."),
                i("b2ec74fe", "zamknij"),
                i("hf836e5f", function (e) {
                    return e.tweetText + " " + e.username + " " + e.screenName + "; wyświetlenia: " + e.views + " (" + e.timeAgo + ")";
                }),
                i("a7a90902", "Naciśnij pozycję Wybierz, aby wyświetlić"),
                i("cb0a3b5e", "Ten wpis może zawierać nieodpowiednie multimedia. Czy na pewno chcesz go wyświetlić?"),
                i("a4eb1304", "W każdej chwili możesz się ponownie zalogować."),
                i("b86c2e12", "Zaloguj się, aby przeszukiwać całą zawartość serwisu X."),
                i("ia13bd7c", "klawiatura"),
                i("f9fa40c8", "Korzystaj z najlepszych funkcji serwisu X"),
                i("gb6a7f62", "Twój kod wygasł. Jeśli chcesz spróbować ponownie, wybierz poniższy przycisk, aby uzyskać nowy kod."),
                i("ge19602a", "Uzyskaj nowy kod"),
                i("dd4ec2e8", "Zaloguj się do serwisu X, przechodząc pod poniższy adres URL na laptopie lub urządzeniu mobilnym i wprowadzając wyświetlony tutaj kod."),
                i("f4d7084c", "Zaloguj się do serwisu X, używając jednej z tych dwóch opcji:"),
                i("ebc1accc", "Zeskanuj ten kod QR"),
                i("a4742bc0", "Przejdź pod poniższy adres URL na laptopie lub urządzeniu mobilnym i wprowadź wyświetlony tutaj kod."),
                i("f260dea2", "x.com/tvlogin"),
                i("h797e380", function (e) {
                    return "" + e.url;
                }),
                i("cf8eec84", function (e) {
                    return "" + e.url;
                }),
                i("g7ee7019", function (e) {
                    return "Zaloguj się, aby oglądać filmy użytkownika " + e.name + ".";
                }),
                i("fb83778c", "Zaloguj się, aby oglądać filmy tego użytkownika."),
                i("dd4bbaea", "Nie masz filmów do wyświetlenia."),
                i("i71d6193", function (e) {
                    return "Brak filmów użytkownika " + e.name + " do wyświetlenia.";
                }),
                i("adb512f0", "Ostatnio wyświetlane filmy"),
                i("bef78294", function (e) {
                    return "" + e.formattedCount;
                }),
                i("hda3bb87", function (e) {
                    return "Obserwowany" + n(e.count, "ch", "ch", "", "ch");
                }),
                i("cd3f5206", "Następne:"),
                i("c930299f", function (e) {
                    return "Następne za " + e.count + ":";
                }),
                i("b2e9f19c", "Odtwórz ponownie ostatni film"),
                i("de906774", "Szybkość"),
                i("caca839e", "Napisy"),
                i("b049f56c", "Jakość"),
                i("fa7169d8", "Aby zgłosić tę treść, przejdź pod poniższy adres URL na laptopie lub urządzeniu mobilnym"),
                i("c973ec9c", "Nazwa użytkownika konta"),
                i("e9670a81", function (e) {
                    return "@" + e.screenName;
                }),
                i("d0e1b720", "Adres URL treści"),
                i("a4ee9394", "Biały"),
                i("a9f3474c", "Niebieskozielony"),
                i("i50b6538", "Magenta"),
                i("jffeb664", "Czerwony"),
                i("e375c2d0", "Czarny"),
                i("c2c5dea4", "Kolor czcionki"),
                i("ce71b3d0", "Rodzina czcionek"),
                i("d2eb1582", "Domyślna (bezszeryfowa)"),
                i("e684030e", "Arial (bezszeryfowa)"),
                i("jad3900c", "Times New Roman (szeryfowa)"),
                i("e205f3a0", "Monokosmos (bezszeryfowa)"),
                i("d207d39a", "Nieprzezroczystość tekstu"),
                i("a562039c", "Kolor tła"),
                i("h44e879e", "Nieprzezroczystość tła"),
                i("b843ced4", "Automatyczna"),
                i("e30d2cea", "0,5x"),
                i("d030db62", "1,25 x"),
                i("ga63a594", "1,5x"),
                i("f571bc5a", "1,75 x"),
                i("d0284204", "2x"),
                i("b7d7f606", "Przewiń szybko do przodu"),
                i("ee0f61ca", "Przewiń do tyłu"),
                i("i2d14148", "Przestań lubić"),
                i("a1eb471a", "Usuń oznaczenie jako nielubianego"),
                i("e40051e8", "Usuń zakładkę"),
                i("g9ecf0e8", "Wyświetl odpowiedzi"),
                i("aa97ae7e", "Kontrolki odtwarzacza TV"),
                i("ed170a6a", "Suwak"),
                i("ee838ea0", "Obserwowanie tego tematu ułatwi Ci spersonalizowanie głównej osi czasu oraz działania serwisu X"),
                i("h85446ce", "Twoja przeglądarka nie jest już obsługiwana."),
                i("e24d1fa6", "Aby dalej korzystać ze strony x.com, zacznij używać obsługiwanej przeglądarki. Lista obsługiwanych przeglądarek jest dostępna w naszym Centrum Pomocy."),
                i("a138aeb2", "Obsługa JavaScript jest niedostępna."),
                i("d8e122c2", "Wykryliśmy, że obsługa języka JavaScript jest wyłączona w tej przeglądarce. Aby dalej korzystać ze strony x.com, włącz obsługę języka JavaScript lub zacznij używać obsługiwanej przeglądarki. Lista obsługiwanych przeglądarek jest dostępna w naszym Centrum Pomocy."),
                i("f1a9e3a2", "Najświeższe wiadomości, świat polityki, nowości muzyczne, wyniki rozgrywek sportowych i najważniejsze informacje ze świata w czasie rzeczywistym – a to wszystko przy mniejszym zużyciu danych."),
                i("bb402b62", "X Pro to dostosowywalny panel danych, dzięki któremu będziesz na bieżąco ze wszystkimi nowościami."),
                i("ed617674", "360"),
                i("e23b20a0", "Anuluj"),
                i("a620fcf0", "Wczytywanie obrazu"),
                i("e9e2064c", "Coś poszło nie tak, ale nie martw się, to nie Twoja wina."),
                i("d7060c80", "Odśwież"),
                i("a0493514", "Ponów próbę"),
                i("ff3dd27c", "Domyślnie"),
                i("b554fcf4", "Bardzo jasny"),
                i("j590b148", "Średnio jasny"),
                i("e7d4ee86", "Średnia"),
                i("ia423ebc", "Średnio ciemny"),
                i("a2cf0942", "Bardzo ciemny"),
                i("j824dc06", "Wyszukaj emoji"),
                i("fffb3384", "Nie znaleziono emoji"),
                i("j3d20752", "Zamiast tego spróbuj wyszukać coś innego."),
                i("d67ad796", "Wybierz domyślną karnację"),
                i("e6388bfa", "Wyczyść wszystko"),
                i("j7c67eca", "Najnowsze"),
                i("da539d38", "Wyniki wyszukiwania"),
                i("d95eb228", "Wróć"),
                i("af8fa2ae", "Zamknij"),
                i("ef8b2f54", "Odczytaj wykres"),
                i("d567ceda", "pionowy"),
                i("f7b30768", "lista"),
                i("hcd54328", "kategorie"),
                i("affbaf62", "Więcej informacji"),
                i("c388d026", "OK"),
                i("ha20397c", "Opcje dostępności"),
                i("baf7a43c", "Dostępność"),
                i("e8f674ab", function (e) {
                    return "To jest wykres słupkowy " + e.chartType + ". Tytuł wykresu to " + e.chartTitle + " . Wykres składa się w sumie z  " + e.noOfCategories + " kategorii. Minimalna wartość to  " + e.minValue + " , a maksymalna: " + e.maxValue + ". Odczytaj wykres, korzystając z opcji nawigacji.";
                }),
                i("d969327c", "Odtwórz wersję audio"),
                i("d8cbbcd4", "Odtwórz wykres audio. Naciśnij, aby odtworzyć wersję dźwiękową wykresu lub naciśnij „A” na każdy elemencie danych, aby odsłuchać je w wersji dźwiękowej."),
                i("dec1d7ef", function (e) {
                    return e.label + ", " + e.group + ", " + e.value;
                }),
                i("f765bead", function (e) {
                    return "dane bez nazwy, " + e.group + ", " + e.value;
                }),
                i("idea1817", function (e) {
                    return e.label + ", " + e.value;
                }),
                i("fe94be6b", function (e) {
                    return "dane bez nazwy, " + e.value;
                }),
                i("b15c0a18", "Usunąć zmiany?"),
                i("aebf81c8", "Wprowadzone zmiany nie zostaną zapisane."),
                i("aa744c1e", "Edytuj dalej"),
                i("fe04d89a", "Odrzuć"),
                i("bb5d8cd2", "Tak"),
                i("dc33d78a", "Obraz okładki artykułu"),
                i("j190bf1a", "TRANSMISJA NA ŻYWO"),
                i("e3fcbdba", "Odrzuć"),
                i("jc0b3a8c", "Opis obrazu"),
                i("ia1d2e58", "Polubione przez autora"),
                i("h81f3036", "Artykuł"),
                i("bed2945c", "przeczytaj opis obrazu"),
                i("j2eea17a", "Te multimedia mogą zawierać nieodpowiednie treści."),
                i("b05a39b2", "Wyświetl"),
                i("a7cd5cf4", "Film"),
                i("b6eb8f6a", "Transmisja"),
                i("dcc2b9b3", function (e) {
                    return "Odtwórz " + e.locVideoType;
                }),
                i("hf4ffd4d", function (e) {
                    return "Odtwarzaj na żywo " + e.locVideoType;
                }),
                i("f6e90cd7", function (e) {
                    return "Czas trwania: " + e.hoursWord + " " + e.minutesWord + " " + e.secondsWord;
                }),
                i("e7d191ed", function (e) {
                    return "Początek: " + e.hoursWord + " " + e.minutesWord + " " + e.secondsWord;
                }),
                i("daa73df1", function (e) {
                    return e.viewerCount + " wyświetle" + n(e.viewerCount, "nia", "ń", "nie", "nia");
                }),
                i("b4f19b97", function (e) {
                    return e.listItem1 + " i " + e.listItem2;
                }),
                i("i0135403", function (e) {
                    return e.listItem1 + ", " + e.listItem2;
                }),
                i("f1574a4b", function (e) {
                    return e.listItem1 + " i " + e.listItem2;
                }),
                i("ec72e2f8", "Obserwuj"),
                i("d9d2a865", function (e) {
                    return "Odtwórz" + e.ttc_card_cta_play;
                }),
                i("a8422cd5", function (e) {
                    return "Kupuj" + e.ttc_card_cta_shop;
                }),
                i("ff1b8c17", function (e) {
                    return "Kupuj teraz" + e.ttc_card_cta_shop_now;
                }),
                i("d04488ef", function (e) {
                    return "Zarezerwuj" + e.ttc_card_cta_book;
                }),
                i("b0b0cfb7", function (e) {
                    return "Połącz" + e.ttc_card_cta_connect;
                }),
                i("ea5247d5", function (e) {
                    return "Zamówienie" + e.ttc_card_cta_order;
                }),
                i("b7b58677", function (e) {
                    return "Otwórz" + e.ttc_card_cta_open;
                }),
                i("g15f6870", "Dowiedz się więcej"),
                i("d1ff55d8", "Zainstaluj"),
                i("g40f106c", "Wyślij do nas wiadomość"),
                i("j393e386", "Wyślij wiadomość prywatną"),
                i("a771d32e", "Wyślij mi wiadomość prywatną"),
                i("d8e9c24c", "Wyślij wiadomość prywatną"),
                i("h2f9258f", function (e) {
                    return "Gwiazdki: " + e.appStarRating + "/5,0; oceny: " + e.appNumRatings;
                }),
                i("cc5508a9", function (e) {
                    return "Początek: " + e.timestampUTC;
                }),
                i("f4520a5d", function (e) {
                    return "Opublikuj " + e.action;
                }),
                i("f17dfdb6", "Odtwórz"),
                i("j836de8a", "Konto chronione"),
                i("f4b8dc08", "Subskrybowane konto"),
                i("f936caa6", "Konto tłumacza"),
                i("ac72ee4e", "Zweryfikowane konto"),
                i("f49e0aac", "Więcej informacji na temat weryfikacji kont."),
                i("f59bdb94", "Dostarcza szczegółowe informacje dotyczące chronionych kont."),
                i("d7e50a66", "Dowiedz się więcej"),
                i("fc065ee4", "Dowiedz się więcej o opcji Subskrypcje"),
                i("e453f536", "Czym jest opcja Subskrypcje"),
                i("bd4cb7a0", "Kiedy subskrybujesz konta swoich ulubionych twórców treści w serwisie X, zyskujesz dostęp do bonusowych treści, a oni mogą na nich nieco zarobić."),
                i("g7099a02", "Więcej informacji"),
                i("c2637ef6", "Rozumiem"),
                i("efb17190", "Obserwuje Cię"),
                i("g57b5f6c", "Twój subskrybent"),
                i("a77a27c0", "Zasubskrybowano"),
                i("gdd173da", "Odpowiedź Groka w trybie zabawnym"),
                i("dfd6eeac", "Odpowiedź Groka"),
                i("deceb214", "Obraz utworzony przez Groka"),
                i("j05496ce", "Tryb DeepSearch Groka"),
                i("befddd48", "Pokaż"),
                i("hf3f8e3a", "Pokaż więcej"),
                i("h504ea5e", "Utwórz swoją wersję za pomocą Groka"),
                i("eb722de2", "Zapytaj Groka samodzielnie"),
                i("ib5110be", "Wypróbuj samodzielnie tryb DeepSearch Groka"),
                i("bb5c5864", "Cytuj"),
                i("a8b58cf4", "Pokaż ten wątek"),
                i("i5f742fe", "Pokaż głosowanie"),
                i("fc45ccc6", "Osadzony film"),
                i("a9edea48", "Odśwież"),
                i("d26d8730", "Skopiuj adres filmu"),
                i("f1b6bcec", "Kopiuj link do GIF-a"),
                i("j25d7cca", "Ukryj napisy"),
                i("a858b25c", "Pokaż napisy"),
                i("faf9f484", "Reklama"),
                i("ae2ea9e7", function (e) {
                    return "Źródło reklamy: " + e.advertiserName;
                }),
                i("hea01798", "Podgląd suwaka"),
                i("f8a09386", "Oglądaj w Periscope"),
                i("gf2b6eee", "Obraz w obrazie"),
                i("b3160a69", function (e) {
                    return e.volumePercent + " %";
                }),
                i("fb236728", "Zatrzymaj"),
                i("e9bd453e", "Odtwórz ponownie"),
                i("d46b00b0", "Przejdź do transmisji na żywo"),
                i("ec8ab8b4", "Wycisz"),
                i("b8b6344a", "Wyłącz wyciszenie"),
                i("c9a642fa", "Suwak poziomu głośności"),
                i("c27e60b0", "Pełny ekran"),
                i("d2969f10", "Zamknij pełny ekran"),
                i("f06f2e53", function (e) {
                    return e.currentTime + " z " + e.durationTime;
                }),
                i("eeb64451", function (e) {
                    return "Oglądaj " + e.advertiserName;
                }),
                i("f3c268a5", function (e) {
                    return "Przeglądaj " + e.advertiserName;
                }),
                i("g60001bb", function (e) {
                    return "Zobacz " + e.advertiserName;
                }),
                i("dff1ddd9", function (e) {
                    return "Przejdź do " + e.advertiserName;
                }),
                i("b0b22805", function (e) {
                    return "Odwiedź " + e.advertiserName;
                }),
                i("c67e71aa", "Oglądaj teraz"),
                i("a6ada13e", "Zrób zakupy"),
                i("j0f12222", "Zobacz więcej"),
                i("f569f7c8", "Przejdź do strony"),
                i("j0c6772a", "Odwiedź stronę"),
                i("f73003aa", "Film rozpocznie się po reklamie"),
                i("b3112b8a", "Pomiń"),
                i("h6333ad0", "Pomiń reklamę"),
                i("c59da417", function (e) {
                    return "Pomiń reklamę za " + e.seconds;
                }),
                i("c3c147cf", function (e) {
                    return "Pomiń " + e.seconds;
                }),
                i("h9b3104e", "Ustawienia wideo"),
                i("ha3efce4", "Automatyczna"),
                i("hd8d044d", function (e) {
                    return "Automatyczna (" + e.quality + ")";
                }),
                i("a7bf9962", "Pobierz film"),
                i("ccc97152", "Prędkość odtwarzania"),
                i("h531ade0", "Jakość filmów"),
                i("e8b5757c", "0,25 x"),
                i("e7e954de", "0,5x"),
                i("g07ffe66", "0,75 x"),
                i("d8bede9e", "1 x"),
                i("j41845c8", "1,25 x"),
                i("e9eeed9e", "1,5x"),
                i("fe45dc84", "1,75 x"),
                i("e791190a", "2x"),
                i("dc5df829", function (e) {
                    return e.resolution + "p" + e.frameRate;
                }),
                i("c4d66d2e", "Z powodu wybranej przeglądarki jakość nie jest optymalna. Zalecamy używanie przeglądarki obsługującej standard HEVC."),
                i("a681babd", function (e) {
                    return "Oglądaj teraz na " + e.trimmedHostname;
                }),
                i("db3cd325", function (e) {
                    return "Wejdź na " + e.trimmedHostname;
                }),
                i("f1ad0df1", function (e) {
                    return "Reklama · " + e.timeRemaining;
                }),
                i("ef16ab2b", function (e) {
                    return "Źródło reklamy: " + e.advertiserName + " · " + e.timeRemaining;
                }),
                i("a15adf2c", "formularz"),
                i("c1658fc6", "Nie udało się odtworzyć multimediów."),
                i("h519ae04", "Multimedia są niedostępne z powodu zgłoszenia naruszenia praw autorskich."),
                i("ce871584", "Transmisja została zakończona."),
                i("c101eb96", "Ta transmisja nie jest dostępna."),
                i("gb24a514", "Te multimedia zostały zablokowane w związku ze zgłoszeniem właściciela praw autorskich."),
                i("hcaf3e63", function (e) {
                    return "Te multimedia są niedostępne z powodu zgłoszenia naruszenia praw autorskich użytkownika " + e.holder + ".";
                }),
                i("if05c038", "Ta transmisja nie jest dostępna w Twojej lokalizacji."),
                i("d420171b", function (e) {
                    return "Film jest niedostępny ze względu na zgłoszenie przez " + e.holder + " naruszenia praw autorskich";
                }),
                i("b1eb72fa", "Ten film jest zastrzeżony w niektórych regionach. Włącz usługi lokalizacji w Ustawieniach, aby dowiedzieć się, czy możesz go obejrzeć."),
                i("c057680c", "Nie można wyświetlić filmu w tej przeglądarce. Użyj innej przeglądarki."),
                i("i5dfae6e", "Ten film jest niedostępny w Twojej lokalizacji."),
                i("c2388276", "Ten film został usunięty."),
                i("d2c96140", "Powiadomienie głosowe o gościu dołączającym do transmisji");
            i("f6dc9146", "POWTÓRKA TRANSMISJI"),
                i("d30c74fe", "Głośność"),
                i("f2d4e6f2", "Obejrzyj ponownie"),
                i("e9f1af3a", "Dowiedz się więcej"),
                i("f1881d86", "Tego wpisu nie można podać dalej, udostępnić ani polubić."),
                i("j3d37222", "Przepisy prawa wymagają od nas podania tych informacji."),
                i("e461d0ee", "Zobacz najnowsze"),
                i("d1386940", "Bądź na bieżąco"),
                i("ecda5f9e", "Wprowadza w błąd"),
                i("a423473c", "Informacja wymagana prawnie"),
                i("b3296688", "Ograniczona widoczność"),
                i("ccd32094", "Teraz"),
                i("abfcce0d", function (e) {
                    return e.amountOfTime + " temu";
                }),
                i("ae408b76", "Podano dalej"),
                i("j355f008", "Przypięty wpis"),
                i("habf9678", "Przypięty przez autora"),
                i("db0798ed", function (e) {
                    return "Temat: " + e.topicName;
                }),
                i("dc716ec9", function (e) {
                    return "Polecany temat: " + e.topicName;
                }),
                i("fbc2003c", "Zakończono"),
                i("h5051dd8", "Anulowano"),
                i("bb5f91a3", function (e) {
                    return e.count + " w tym Pokoju";
                }),
                i("c83eea99", function (e) {
                    return e.participant + " + " + e.count + " słuchający" + n(e.count, "ch", "ch", "", "ch");
                }),
                i("cdff6cd3", function (e) {
                    return e.speaker + " mówca + " + e.count + " słuchający" + n(e.count, "ch", "ch", "", "ch");
                }),
                i("df006f4f", function (e) {
                    return e.count + " zainteresowany" + n(e.count, "ch", "ch", "", "ch");
                }),
                i("c889af33", function (e) {
                    return e.count + " bi" + n(e.count, "orą", "orą", "erze", "orą") + " udział";
                }),
                i("d6f2056f", function (e) {
                    return e.count + " dołączy" + n(e.count, "li/ły", "ło", "ł/a", "ło");
                }),
                i("jbc5f47a", "Panel pokoi"),
                i("gfe2830f", function (e) {
                    return "" + n(e.count, e.count + " innych użytkowników", e.count + " innych użytkowników", "jeszcze " + e.count + " użytkownik", e.count + " innych użytkowników");
                }),
                i("dbeae6cf", function (e) {
                    return e.count + " inny" + n(e.count, "ch słuchaczy", "ch słuchaczy", " słuchacz", "ch słuchaczy");
                }),
                i("d2543d97", function (e) {
                    return "+" + e.count;
                }),
                i("dc718e53", function (e) {
                    return "+" + n(e.count, e.count + " innych użytkowników", e.count + " innych użytkowników", "jeszcze " + e.count + " użytkownik", e.count + " innych użytkowników");
                }),
                i("d0e7b11b", function (e) {
                    return e.date + " o " + e.time;
                }),
                i("b4349cbc", function (e) {
                    return "" + e.relativeDay;
                }),
                i("ebe41367", function (e) {
                    return "Czas " + e.time;
                }),
                i("efce3d9b", function (e) {
                    return e.hours + " " + e.minutes + " " + e.seconds;
                }),
                i("d925a4f9", function (e) {
                    return "Pozostał" + n(e.count, "y " + e.formattedCount + " minuty", "o " + e.formattedCount + " minut", "a " + e.formattedCount + " minuta", "o " + e.formattedCount + " minut");
                }),
                i("ib15cddb", function (e) {
                    return "Pozostał" + n(e.count, "y " + e.formattedCount + " godziny", "o " + e.formattedCount + " godzin", "a " + e.formattedCount + " godzina", "o " + e.formattedCount + " godzin");
                }),
                i("db9ed19f", function (e) {
                    return "Pozostał" + n(e.count, "y " + e.formattedCount + " dni", "o " + e.formattedCount + " dni", " " + e.formattedCount + " dzień", "o " + e.formattedCount + " dni");
                }),
                i("e1ebcecb", function (e) {
                    return e.formattedDays + " d" + n(e.days, "ni", "ni", "zień", "ni") + " Pozostał" + n(e.hours, "y " + e.formattedHours + " godziny", "o " + e.formattedHours + " godzin", "a " + e.formattedHours + " godzina", "o " + e.formattedHours + " godzin");
                }),
                i("cc1da1fd", function (e) {
                    return e.formattedHours + " godz. Pozostał" + n(e.mins, "y " + e.formattedMins + " minuty", "o " + e.formattedMins + " minut", "a " + e.formattedMins + " minuta", "o " + e.formattedMins + " minut");
                }),
                i("f89a5d60", "Host"),
                i("ce2cfb36", "Tylko dla subskrybentów"),
                i("df06241c", "Grupa dyskusyjna"),
                i("b03e162a", "Słuchaj na żywo"),
                i("b3d828ee", "Dołączył/a"),
                i("g519ec2a", "Odtwórz nagranie"),
                i("c6000450", "Przypomnienie ustawione"),
                i("db44ff5c", "Ustaw przypomnienie"),
                i("f7b6346a", "Zacznij teraz"),
                i("cc1f75ac", "Pokoje"),
                i("bd08d1b2", "Szczegółowe informacje nie są dostępne"),
                i("j8b01b27", function (e) {
                    return "Anulowano Pokój " + e.title + " utworzony przez użytkownika " + e.host;
                }),
                i("fda9f48c", "Pokój został anulowany"),
                i("jf7853f7", function (e) {
                    return "Pokój " + e.title + " utworzony przez użytkownika " + e.host + " zakończył się";
                }),
                i("i1a29920", "Pokój zakończył się"),
                i("db467ffe", "Dołącz do Pokoju"),
                i("i8dc3993", function (e) {
                    return "Host: " + e.host;
                }),
                i("eb0b05b9", function (e) {
                    return "i " + e.count + " " + n(e.count, "innych użytkowników", "innych użytkowników", "jeszcze jedna osoba", "innych użytkowników");
                }),
                i("d19b9f77", function (e) {
                    return e.action + " dla " + e.title + " – organizator: " + e.host + ", " + e.scheduledStart;
                }),
                i("e679d5d7", function (e) {
                    return "Uruchom teraz Pokój " + e.title + ", którego uruchomienie jest zaplanowane na " + e.scheduledStart;
                }),
                i("ea4258b7", function (e) {
                    return e.action + " – pokój, " + e.scheduledStart;
                }),
                i("dcbcaa23", function (e) {
                    return "Odtwórz nagranie " + e.title;
                }),
                i("gaeb997e", "Więcej"),
                i("f8b21226", "Dołącz"),
                i("e1b95ab0", "Ostatnia zmiana:"),
                i("i308d42c", "Istnieje nowa wersja tego wpisu"),
                i("h092d520", "Istnieje nowa wersja tego wpisu."),
                i("b74bf8b8", "Zdjęcie"),
                i("ha9ed08c", "Utworzono za pomocą:"),
                i("bff61470", "Kliknij tutaj, aby edytować"),
                i("f4393d0f", function (e) {
                    return "Autor: " + e.name;
                }),
                i("f8e8e32e", "Ty"),
                i("df6703d3", "Ty"),
                i("c20f7e9f", function (e) {
                    return n(e.otherUsersCount, e.otherUsersCount + " innych użytkowników", e.otherUsersCount + " innych użytkowników", r.createElement(r.Fragment, null, "", e.secondName), e.otherUsersCount + " innych użytkowników");
                }),
                i("he26f627", function (e) {
                    return n(e.otherUsersCount, e.otherUsersCount + " innych użytkowników", e.otherUsersCount + " innych użytkowników", r.createElement(r.Fragment, null, "", e.secondName), e.otherUsersCount + " innych użytkowników");
                }),
                i("gea7aa3c", "Dalej"),
                i("b6462b32", "Poprzedni"),
                i("caddb529", "i"),
                i("ff31714c", function (e) {
                    return " i " + n(e.othersCount, e.othersCount + " innych użytkowników", e.othersCount + " innych użytkowników", "jeszcze jednej osoby", e.othersCount + " innych użytkowników");
                }),
                i("e06c99b7", "i"),
                i("i4e2f96c", function (e) {
                    return " i " + n(e.othersCount, e.othersCount + " innych użytkowników", e.othersCount + " innych użytkowników", "jeszcze jednej osoby", e.othersCount + " innych użytkowników");
                }),
                i("ga629a8c", "Zobacz uczestników rozmowy"),
                i("d6f781e4", "Kiedy subskrybujesz konta swoich ulubionych twórców treści na X, zyskujesz dostęp do bonusowych treści, a oni mogą na nich nieco zarobić."),
                i("dab106f8", "Członek"),
                i("a46e92c2", "Mod"),
                i("f9633e62", "Admin"),
                i("a3dfd0cb", function (e) {
                    return "wpis" + e.noun;
                }),
                i("d7580651", function (e) {
                    return "Wpis " + e.noun;
                }),
                i("c68b6367", function (e) {
                    return "Artykuł" + e.noun;
                }),
                i("h13ffc88", "Tweet głosowy"),
                i("c8c4600e", "Wpis głosowy"),
                i("de8c5eb2", "Odtwórz dźwięk"),
                i("ec286028", "Wstrzymaj odtwarzanie dźwięku"),
                i("ad77feb6", "Napisy niedostępne"),
                i("e82adfeb", function (e) {
                    return e.count + " stron" + n(e.count, "y internetowe", " internetowych", "a internetowa", "y internetowej");
                }),
                i("cfb8c1f7", function (e) {
                    return e.count + " wpis" + n(e.count, "y", "ów", "", "u");
                }),
                i("g78032d5", function (e) {
                    return "Strony internetowe i wpisy: " + e.count;
                }),
                i("j3de54a8", "UWAGA"),
                i("a6a6ced4", "Przeczytaj Notatkę"),
                i("dbc0c2f4", "Zakładka"),
                i("d6885d3e", "Wyświetl Grupę dyskusyjną"),
                i("d5a48014", "Nagłówek"),
                i("b92b6156", "Podnagłówek"),
                i("ec5ed598", "Tekst"),
                i("c69eb656", "Pełny wymiar czasu"),
                i("g46ae43c", "Umowa w pełnym wymiarze czasu"),
                i("jf7d4cc6", "Niepełny wymiar czasu"),
                i("b2214572", "Umowa na okres próbny"),
                i("f8337bd6", "na rok"),
                i("i935bf88", "na godzinę"),
                i("b75b8ffd", function (e) {
                    return e.salary + " " + e.interval;
                }),
                i("c5954d30", "Lista"),
                i("fe64170c", "Po dokonaniu wyboru nie można go już zmienić"),
                i("g10ace38", "Opcje głosowania"),
                i("a3edf99a", "Wyniki końcowe"),
                i("c2b81e9d", function (e) {
                    return e.formattedCount + " głos" + n(e.count, "y", "ów", "", "ów");
                }),
                i("e86732e4", "Zaznaczone"),
                i("a35a5b10", "Obserwujący, których znasz"),
                i("fc8cd112", "Nie jest obserwowany przez żadnego z użytkowników, których obserwujesz"),
                i("df8cd2af", function (e) {
                    return "Slajd " + e.currentSlide + " z " + e.itemCount + " - karuzela. " + e.type + ". " + e.altText;
                }),
                i("d70740da", "Następny slajd"),
                i("c4d53ba2", "Poprzedni slajd"),
                i("h6405c17", function (e) {
                    return "Slajd " + e.currentSlide + " z " + e.itemCount + " - karuzela";
                }),
                i("a3efd2c4", "Temat"),
                i("b91c8e53", function (e) {
                    return "Karta tematów dla " + e.title + ".";
                }),
                i("b3826295", function (e) {
                    return "Karta tematów dla " + e.title + ", " + e.description + ".";
                }),
                i("c9bb65db", function (e) {
                    return "Kolekcja " + e.slidesLength + " zdjęć. " + e.heroVanityContent + ". " + e.heroTitleContent;
                }),
                i("e1bddf52", "Przeciągnij, aby obrócić"),
                i("f0e1fb48", "Nie udało się utworzyć podglądu dla tego formatu pliku wideo w tej przeglądarce. Dodanie filmu może być jednak możliwe"),
                i("c2fc878d", function (e) {
                    return "Przekroczono limit znaków o " + e.count;
                }),
                i("db11b27f", function (e) {
                    return "Zostało: " + e.count + " znak" + n(e.count, "i", "ów", "", "ów");
                }),
                i("bb7b821a", "Możesz odpowiedzieć"),
                i("fc41217b", function (e) {
                    return "Odpowiadać mogą użytkownicy kont obserwowanych lub wspomnianych przez użytkownika @" + e.screenName;
                }),
                i("e5dc76d0", "Możesz wysyłać odpowiedzi w tej rozmowie"),
                i("ab105904", "Kto może odpowiedzieć?"),
                i("fd1cda7a", "Nie możesz wysłać odpowiedzi w tej rozmowie"),
                i("f064f477", function (e) {
                    return "Odpowiadać mogą użytkownicy kont obserwowanych lub wspomnianych przez użytkownika @" + e.screenName + ".";
                }),
                i("ea9ac5c9", function (e) {
                    return "Odpowiadać mogą użytkownicy kont wspomnianych przez użytkownika @" + e.screenName;
                }),
                i("d2ae1499", function (e) {
                    return "Odpowiadać mogą osoby, których treści są subskrybowane przez użytkownika @" + e.screenName + " lub które zostały przez niego wspomniane";
                }),
                i("a4e254ff", function (e) {
                    return "Odpowiadać mogą użytkownicy zweryfikowanych kont oraz kont wspomnianych przez użytkownika @" + e.screenName;
                }),
                i("j1b02fd8", "Uzyskaj weryfikację"),
                i("daba4484", "Tylko autor i moderatorzy mogą zobaczyć ten wpis"),
                i("f956070a", "Moderatorzy ukryli tego Tweeta, bo narusza on zasady Grupy dyskusyjnej."),
                i("cc17f408", "Wpisy usuniętych członków są ukrywane w grupie dyskusyjnej."),
                i("j620ce06", "Kto może zobaczyć ten wpis?"),
                i("bd414b44", "Tylko osoby subskrybujące Twój kanał mogą to zobaczyć"),
                i("dd0da5d9", function (e) {
                    return "Twój wpis jest widoczny dla użytkownika @" + e.screenName + " i jego subskrybentów";
                }),
                i("g1c6a77e", "Widzisz treści dla subskrybentów"),
                i("d3b143d7", function (e) {
                    return "Widzisz tego Tweeta i możesz na niego odpowiedzieć, ponieważ subskrybujesz użytkownika @" + e.screenName;
                }),
                i("f6337117", function (e) {
                    return "Możesz wyświetlić ten wpis, ponieważ subskrybujesz treści użytkownika @" + e.screenName;
                }),
                i("g766a06d", function (e) {
                    return "Tylko osoby z kręgu użytkownika @" + e.screenName + " mogą zobaczyć ten wpis";
                }),
                i("j040a368", "Linki są wyłączone w odpowiedziach"),
                i("b31d0af7", function (e) {
                    return "Użytkownik " + e.screenName + " nie zezwala na umieszczanie linków w odpowiedziach na ten wpis";
                }),
                i("eab0f780", "Nie możesz publikować ani cytować linków zewnętrznych w odpowiedziach na ten wpis."),
                i("f17a1f54", "Tylko dla posiadaczy subskrypcji Premium"),
                i("a0953370", "Subskrypcja"),
                i("d9687d23", function (e) {
                    return "Spadek: " + e.trendValueNegativePercent;
                }),
                i("ac73eb5a", "Bez zmian"),
                i("c5a9f921", function (e) {
                    return "Wzrost: " + e.trendValuePositivePercent;
                }),
                i("e3098e07", function (e) {
                    return e.minutes + " minut" + n(e.minutes, "y", "", "ę", "y") + " temu";
                }),
                i("fea16a51", function (e) {
                    return e.hours + " godzin" + n(e.hours, "y", "", "ę", "y") + " temu";
                }),
                i("a4f2d94d", function (e) {
                    return e.days + " d" + n(e.days, "ni", "ni", "zień", "nia") + " temu";
                }),
                i("hf9bc787", function (e) {
                    return e.weeks + " ty" + n(e.weeks, "godnie", "godni", "dzień", "godnia") + " temu";
                }),
                i("efcd5885", function (e) {
                    return e.months + " miesi" + n(e.months, "ące", "ęcy", "ąc", "ąca") + " temu";
                }),
                i("c37228b5", function (e) {
                    return e.years + " " + n(e.years, "lata", "lat", "rok", "roku") + " temu";
                }),
                i("jf83d092", "Dzień"),
                i("af4abf20", "Miesiąc"),
                i("b871f280", "Rok"),
                i("hac89ab0", "styczeń"),
                i("ef30b30a", "luty"),
                i("b56920fa", "marzec"),
                i("b1a0f1ec", "kwiecień"),
                i("daf779c8", "maj"),
                i("c6ad074e", "czerwiec"),
                i("f1db106c", "lipiec"),
                i("i4e80b7a", "sierpień"),
                i("efa6cc1e", "wrzesień"),
                i("f40a0cbe", "październik"),
                i("ac74a31c", "listopad"),
                i("i6c1e4b2", "grudzień"),
                i("de540c32", "Pokaż hasło"),
                i("b4abfdb4", "Ukryj hasło"),
                i("f06ae5d3", function (e) {
                    return "Pozostało dla standardowego wpisu: " + e.standardTweetCount + " znak" + n(e.standardTweetCount, "i", "ów", "", "u") + "; pozostało łącznie: " + e.totalCount + " znak" + n(e.totalCount, "i", "ów", "", "u");
                }),
                i("fee0a8bc", "Zapisz"),
                i("ae7f7656", "Wyczyść"),
                i("gd769996", "Coś poszło nie tak. Spróbuj wczytać stronę ponownie."),
                i("i5450bec", "Multimedia"),
                i("f7432494", "Dodaj zdjęcie"),
                i("a5f7ce12", "Również obserwuj"),
                i("c3befdbe", "Obserwujesz"),
                i("d3029dbc", "Przestań obserwować"),
                i("aeb6f0a0", "Subskrybuj"),
                i("b4397192", "Zarządzaj"),
                i("i8cfb6e6", "Zablokowano"),
                i("ea100d6a", "Odblokuj"),
                i("fe40537f", function (e) {
                    return "Odblokować użytkownika @" + e.screenName + "?";
                }),
                i("ab7c3460", "Ten użytkownik nie będzie mógł Cię obserwować ani wyświetlać Twoich wpisów."),
                i("i58d8718", "Ten użytkownik będzie mógł Cię obserwować i będzie mógł interaktywnie używać Twoich wpisów publicznych."),
                i("cda66545", function (e) {
                    return "Kliknij, aby " + e.followType + " " + e.screenName;
                }),
                i("ee05e96b", function (e) {
                    return "Kliknij, aby " + e.followType + " do " + e.screenName;
                }),
                i("a8d77a25", function (e) {
                    return "Kliknij, aby opuścić " + e.screenName;
                }),
                i("d0f4f3d9", function (e) {
                    return e.followType + " " + e.screenName;
                }),
                i("f238ba1d", function (e) {
                    return e.followType + "–" + e.screenName;
                }),
                i("j6161cab", function (e) {
                    return "Chcesz przestać obserwować użytkownika @" + e.screenName + "?";
                }),
                i("i4bb9ef7", function (e) {
                    return "Chcesz przestać obserwować " + e.title + "?";
                }),
                i("ge753264", "Wpisy tego użytkownika nie będą już pojawiać się na osi czasu Dla Ciebie. Nadal możesz przeglądać profil tego użytkownika, o ile jego wpisy nie są chronione."),
                i("b837c0e8", "Nawet gdy przestaniesz obserwować ten temat, nadal możesz widzieć dotyczące go wpisy. Jest to zależne do tego, jakie konta obserwujesz."),
                i("ddac1f1d", function (e) {
                    return "Czy na pewno chcesz opuścić grupę " + e.communityName + "?";
                }),
                i("j8e33c40", "Utracisz dostęp do tej grupy dyskusyjnej i nie będziesz mieć możliwości uczestniczenia w niej, ale Twoje poprzednie wpisy nadal będą widoczne."),
                i("f305840e", "Oczekujące"),
                i("i036327c", "Odrzucić prośbę o obserwowanie?"),
                i("j95e3097", function (e) {
                    return "Spowoduje to odrzucenie oczekującej prośby i użytkownik @" + e.screenName + " nie będzie już jej widzieć.";
                }),
                i("d85bc1b8", "Powiększ lub pomniejsz obraz."),
                i("f596ace8", "Proporcja obrazu: oryginał"),
                i("df031fca", "Proporcja obrazu: szerokość"),
                i("b40332c6", "Proporcja obrazu: kwadrat"),
                i("e547b368", "Oryginalny"),
                i("f7571204", "Szeroka"),
                i("e6e16812", "Kwadrat"),
                i("hdd29d51", function (e) {
                    return "" + e.sponsorshipOrganization;
                }),
                i("b97f7079", function (e) {
                    return "" + e.sponsorshipOrganization;
                }),
                i("b02627a9", function (e) {
                    return "" + e.sponsorshipOrganization;
                }),
                i("f1a1b791", function (e) {
                    return "Promowane przez użytkownika " + e.fullName;
                }),
                i("if2bf8b4", "Promowane"),
                i("f3624b5c", "Promowane treści (polityczne)"),
                i("b4b3b113", function (e) {
                    return "Promowane treści polityczne od " + e.fullName;
                }),
                i("be222050", "Treści promowane (kampania społeczna)"),
                i("hcbbe447", function (e) {
                    return "Treści promowane (kampania społeczna) od " + e.fullName;
                }),
                i("jcf3e7a2", "Postęp klatek animacji Lottie"),
                i("a0af935c", "Lubi"),
                i("b8c465e2", "Podano dalej"),
                i("c7a989ce", "Zakładki"),
                i("b03835c7", function (e) {
                    return e.replyCount + " odpowied" + n(e.replyCount, "zi", "zi", "ź", "zi");
                }),
                i("g4a195e7", function (e) {
                    return e.retweetCount + " poda" + n(e.retweetCount, "nia", "ń", "nie", "nia") + " dalej";
                }),
                i("e089b42d", function (e) {
                    return e.likeCount + " polubie" + n(e.likeCount, "nia", "ń", "nie", "ń");
                }),
                i("e0a8fe39", function (e) {
                    return e.bookmarkCount + " zakład" + n(e.bookmarkCount, "ki", "ek", "ka", "ki");
                }),
                i("c58b2ab7", function (e) {
                    return e.viewCount + " wyświetle" + n(e.viewCount, "nia", "ń", "nie", "ń");
                }),
                i("f2849136", "Statystyki"),
                i("f206e970", "Wyświetl analizy wpisów"),
                i("c7073f5b", function (e) {
                    return e.count + " wyświetle" + n(e.count, "nia", "ń", "nie", "nia") + ". Wyświetl analizy wpisów.";
                }),
                i("hf417cf0", "Usuń z Zakładek"),
                i("febd30ed", function (e) {
                    return e.count + " Zakład" + n(e.count, "ki", "ek", "ka", "ki") + ". Dodaj Tweeta do Zakładek";
                }),
                i("a8dc9587", function (e) {
                    return e.count + " Zakład" + n(e.count, "ki", "ek", "ka", "ki") + ". Dodano Tweeta do Zakładek";
                }),
                i("d636ebc6", "Lubię"),
                i("eb3a8b0c", "Przestań lubić"),
                i("j472ecfc", "Polub ten wpis"),
                i("dac92b0d", function (e) {
                    return e.count + " " + n(e.count, "Lubię to", "Lubię to", "Polubienie", "Polubień") + ". Polubienie";
                }),
                i("aa650427", function (e) {
                    return e.count + " " + n(e.count, "Lubię to", "Lubię to", "Polubienie", "Polubień") + ". Polubiono";
                }),
                i("hdf7226a", "Odpowiedz"),
                i("c9940955", function (e) {
                    return e.count + " Odpowied" + n(e.count, "zi", "zi", "ź", "zi") + ". Odpowiedź";
                }),
                i("f2919fb8", "Podaj dalej wpis"),
                i("fd1e5446", "Cofnij podanie dalej wpisu"),
                i("dfad425d", function (e) {
                    return e.count + " poda" + n(e.count, "nia", "ń", "nie", "nia") + " dalej. Podaj dalej.";
                }),
                i("a386dc55", function (e) {
                    return e.count + " poda" + n(e.count, "nia", "ń", "nie", "nia") + " dalej. Podano dalej.";
                }),
                i("f65198c2", "Zobacz cytaty"),
                i("dc63da16", "Udostępnij"),
                i("cee0585c", "Udostępnij wpis"),
                i("ceb6841c", "Wpisy usuniętych członków są ukrywane w grupie dyskusyjnej."),
                i("cb731cae", "Edytuj krąg"),
                i("c33d3a84", "To, co dzieje się w kręgu, nie wychodzi poza krąg"),
                i("c4f10e71", "Dowiedz się więcej"),
                i("b09adb0c", "Zobacz rozmowę"),
                i("e4f1e6e4", function (e) {
                    return "" + e.formattedCount;
                }),
                i("daf8a75f", function (e) {
                    return "Obserwowany" + n(e.count, "ch", "ch", "", "ch");
                }),
                i("ef1f4fc6", function (e) {
                    return "" + e.formattedCount;
                }),
                i("ad9b5988", function (e) {
                    return "Obserwujący" + n(e.count, "ch", "ch", "", "ch");
                }),
                i("a9980948", function (e) {
                    return "" + e.formattedCount;
                }),
                i("ce44a35c", function (e) {
                    return "Subskrybent" + n(e.count, "ów", "ów", "", "ów");
                }),
                i("id949f68", function (e) {
                    return "" + e.formattedCount;
                }),
                i("hb608cfc", function (e) {
                    return "Subskrypcj" + n(e.count, "e", "i", "a", "i");
                }),
                i("ef633578", "Konto zawieszone"),
                i("a6a3d496", "Wstaw link"),
                i("acce6978", "Edytuj link"),
                i("f5e8f526", "Edytuj"),
                i("h517e8d8", "Usuń"),
                i("a30ae58e", "Tekst do wyświetlenia"),
                i("da38c958", "Adres URL"),
                i("d5d57678", "Wstaw"),
                i("ec822028", "Wypełnij to pole"),
                i("ebc5d2cc", "Ten adres URL zawiera jakiś błąd. Sprawdź pisownię i formatowanie tego linku."),
                i("h30a19bb", function (e) {
                    return "To jest wykres kołowy. Tytuł wykresu to " + e.chartTitle + ". Wykres składa się w sumie z " + e.noOfCategories + " kategorii. Minimalna wartość to " + e.minValue + ", a maksymalna: " + e.maxValue + ". Odczytaj wykres, korzystając z opcji nawigacji.";
                }),
                i("h39fbf33", function (e) {
                    return "Poziomy wykres słupkowy przedstawiający wartości od " + e.minValue + " do " + e.maxValue;
                }),
                i("gdd51574", "Pociągnij, aby odświeżyć"),
                i("e557ad8e", "Aktywny"),
                i("e3a58c28", "Rozwiń"),
                i("db355331", function (e) {
                    return e.team + " wygrali";
                }),
                i("a8428d5e", "Wkrótce"),
                i("a7aad8ba", "Na żywo"),
                i("e431f1aa", "Wynik"),
                i("a7391708", "Przełożony"),
                i("d2dbfa92", "Odwołany"),
                i("cd734f66", "Dziś"),
                i("c8891d06", "Jutro"),
                i("d2414d31", function (e) {
                    return "Nieprzeczytane: " + e.count;
                }),
                i("ce4e85ae", "Nowe"),
                i("fb9f6f39", function (e) {
                    return e.count + "+";
                }),
                i("eb124f96", "rano / po południu"),
                i("i7a6f114", "Godzina"),
                i("ccc99ff2", "Minuty"),
                i("g5662c95", function (e) {
                    return "Poziom " + e.conversationTreeDepth + ":";
                }),
                i("b3688156", "Ten użytkownik aktualnie znajduje się w aktywnym Pokoju — kliknij, aby dołączyć"),
                i("c0eb8825", function (e) {
                    return "Użytkownik @" + e.screenName + " aktualnie znajduje się w aktywnym Pokoju — kliknij, aby dołączyć";
                }),
                i("d068dc6d", function (e) {
                    return "Użytkownik @" + e.screenName + " aktualnie bierze udział w aktywnej transmisji na żywo — kliknij, aby obejrzeć";
                }),
                i("d9fd5570", "Ukryte odpowiedzi"),
                i("c566d3a6", "Ukryj"),
                i("a897c4d6", "Otwiera historię edycji"),
                i("e07a85a2", "Wpis jest niedostępny"),
                i("ffeb2fc6", "Następne"),
                i("af2a65d9", function (e) {
                    return "Wybrano " + e.timestamp;
                }),
                i("j3d49e93", function (e) {
                    return e.timestamp + " min";
                }),
                i("a394f905", function (e) {
                    return e.seconds + " sek.";
                }),
                i("f42c0c80", "Koniec wybranej sekcji, użyj klawiszy strzałek, aby dostosować zakres wyboru"),
                i("i667afe8", "Początek wybranej sekcji, użyj klawiszy strzałek, aby dostosować zakres wyboru"),
                i("gfaaead8", "Brak tytułu"),
                i("cfd13f46", "Sekcja dźwięku"),
                i("eba2660a", "Niebieski"),
                i("hc196b78", "Śliwkowy"),
                i("c8bc49d2", "Fioletowy"),
                i("efff09ee", "Zielony"),
                i("fcb424ee", "Żółty"),
                i("ie2215aa", "Magenta"),
                i("f106ce44", "Pomarańczowy"),
                i("acddd4d4", "Czerwony"),
                i("cef9b062", "Morski"),
                i("d9daefca", "Ciemnoszary");
            var r = o(202784),
                w = [],
                z = {};
            function s(e) {
                return e;
            }
            var d = (function (e) {
                var a, o, i, d, y;
                function u() {
                    return e.apply(this, arguments) || this;
                }
                return (
                    (o = e),
                    ((a = u).prototype = Object.create(o.prototype)),
                    (a.prototype.constructor = a),
                    c(a, o),
                    (u.prototype.render = function () {
                        return r.createElement.apply(r, this[this.props.$i18n].reduce(this.templateReducer, [r.Fragment, null]));
                    }),
                    (i = u),
                    (d = [
                        {
                            key: "bb85c49d",
                            get: function () {
                                return ["Zawsze przechowujemy kopię Pokoju w celu ewentualnej analizy. ", "."];
                            },
                        },
                        {
                            key: "c9af3ff7",
                            get: function () {
                                return ["Zablokowani przez Ciebie użytkownicy nie będą mogli dołączyć. Osoby niezalogowane do serwisu X będą mogły jednak dołączyć jako słuchacze. ", "."];
                            },
                        },
                        {
                            key: "e60e51b3",
                            get: function () {
                                return ["Kopia każdego Pokoju zawsze jest przechowywana przez pewien czas. Umożliwia to nam analizę ewentualnych zgłoszeń dotyczących spamu lub nadużyć. ", "."];
                            },
                        },
                        {
                            key: "jd312ce9",
                            get: function () {
                                return ["Utwórz subskrypcję programu Zweryfikowane Organizacje, aby otrzymać 1000 USD kredytów reklamowych, które możesz wykorzystać na dowolnym koncie w swojej organizacji. "];
                            },
                        },
                        {
                            key: "e1a49407",
                            get: function () {
                                return ["Utworzenie konta w serwisie X umożliwi Ci odpowiedzenie na wpis użytkownika ", "."];
                            },
                        },
                        {
                            key: "be54ed41",
                            get: function () {
                                return ["Po utworzeniu konta w serwisie X będziesz mieć możliwość udostępnienia wpisu użytkownika ", " swoim obserwującym."];
                            },
                        },
                        {
                            key: "jb19eb17",
                            get: function () {
                                return ["Utwórz konto w serwisie X, aby poinformować użytkownika ", ", że podoba Ci się jego wpis."];
                            },
                        },
                        {
                            key: "bbfee611",
                            get: function () {
                                return ["Obserwuj użytkownika ", ", aby widzieć, co udostępnia w serwisie X."];
                            },
                        },
                        {
                            key: "af104f2b",
                            get: function () {
                                return ["Utwórz konto w serwisie X, aby móc udostępnić wpis użytkownika ", " w sposób prywatny."];
                            },
                        },
                        {
                            key: "ccc1f303",
                            get: function () {
                                return ["Obserwuj listę ", ", aby zobaczyć wyselekcjonowane wpisy"];
                            },
                        },
                        {
                            key: "ce02fabf",
                            get: function () {
                                return ["Utwórz konto w serwisie X, aby przeglądać wpisy osób wybranych przez użytkownika ", "."];
                            },
                        },
                        {
                            key: "a85608a7",
                            get: function () {
                                return ["Utwórz konto w serwisie X i bierz udział w ciekawych rozmowach na interesujące Cię tematy, takie jak ", "."];
                            },
                        },
                        {
                            key: "c76865b7",
                            get: function () {
                                return ["Wyszukaj we wpisach użytkownika ", " w serwisie X."];
                            },
                        },
                        {
                            key: "e4af7661",
                            get: function () {
                                return ["Serwis X oraz jego partnerzy używają plików cookie w celu dostarczania lepszej, bezpieczniejszej i szybszej usługi oraz w celu rozwijania swojej działalności. Niektóre pliki cookie są niezbędne do funkcjonowania naszych usług i ulepszania ich oraz zapewniania poprawności ich działania. Jeśli klikniesz pozycję „Zaakceptuj wszystkie pliki cookie”, zezwolisz także serwisowi X i jego partnerom na używanie plików cookie w celu dostarczania Ci reklam i wiadomości dostosowanych do Twoich zainteresowań. Jeśli klikniesz pozycję „Odrzuć pliki cookie inne niż podstawowe”, nie będziemy używać plików cookie w celu zbierania dodatkowych danych służących do dostarczania dostosowanych reklam i wiadomości. Aby dowiedzieć się więcej, w tym jak zmienić wybrane opcje, przejdź na stronę poświęconą plikom cookie w naszym ", "."];
                            },
                        },
                        {
                            key: "a268632b",
                            get: function () {
                                return ["Serwis X oraz jego partnerzy używają plików cookie w celu dostarczania lepszej, bezpieczniejszej i szybszej usługi oraz w celu rozwijania swojej działalności. Niektóre pliki cookie są niezbędne do funkcjonowania naszych usług i ulepszania ich oraz zapewniania poprawności ich działania. ", "."];
                            },
                        },
                        {
                            key: "c4d3d079",
                            get: function () {
                                return ["Rejestrując się, zgadzasz się na ", " i ", ", łącznie z ", "."];
                            },
                        },
                        {
                            key: "j23c6259",
                            get: function () {
                                return ["Podaj linki do co najmniej trzech artykułów o Tobie opublikowanych w sprawdzonych serwisach informacyjnych w ciągu ostatnich sześciu miesięcy. "];
                            },
                        },
                        {
                            key: "gf887169",
                            get: function () {
                                return ["Musisz spełnić określone wymagania zależne od typu Twojego konta w serwisie X. ", "."];
                            },
                        },
                        {
                            key: "d454b49f",
                            get: function () {
                                return ["Wybierz kategorię, która najlepiej określa Twoje konto. "];
                            },
                        },
                        {
                            key: "hd977dd9",
                            get: function () {
                                return ["Wybierz sposób weryfikacji, że Twoje konto jest oficjalnym kontem aktywisty lub organizatora. "];
                            },
                        },
                        {
                            key: "e3432573",
                            get: function () {
                                return ["Nie spełniasz wymagań dotyczących minimalnej liczby obserwujących lub wzmianek obowiązujących w Twoim regionie, dlatego nie możesz uzyskać weryfikacji jako aktywista. "];
                            },
                        },
                        {
                            key: "efd8f6e7",
                            get: function () {
                                return ["Podaj link do profilu w serwisie Trendy Google wskazujący niedawne wyszukiwania na Twój temat. "];
                            },
                        },
                        {
                            key: "fe54dcfd",
                            get: function () {
                                return ["Podaj link do strony w Wikipedii o Tobie zawierającej co najmniej trzy odnośniki do zewnętrznych źródeł. "];
                            },
                        },
                        {
                            key: "ie26d72d",
                            get: function () {
                                return ["Podaj link do strony, na której znana organizacja wskazuje Cię jako kierownika. Musi to być link do oficjalnej strony znanej organizacji. "];
                            },
                        },
                        {
                            key: "af3fe861",
                            get: function () {
                                return ["Wybierz sposób potwierdzenia, że Twoje konto jest oficjalnym kontem influencera. "];
                            },
                        },
                        {
                            key: "a08d6af3",
                            get: function () {
                                return ["Nie spełniasz wymagań dotyczących minimalnej liczby obserwujących lub wzmianek obowiązujących w Twoim regionie, dlatego nie możesz uzyskać weryfikacji jako twórca treści lub influencer. "];
                            },
                        },
                        {
                            key: "f774e39d",
                            get: function () {
                                return ["Wybierz jeden ze sposobów potwierdzenia, że Twoje konto jest oficjalnym kontem znanej spółki, marki lub organizacji. "];
                            },
                        },
                        {
                            key: "d8510869",
                            get: function () {
                                return ["Podaj link do profilu w serwisie Trendy Google wskazujący niedawne wyszukiwania na temat spółki, marki lub organizacji, dla której pracujesz. "];
                            },
                        },
                        {
                            key: "h75e3641",
                            get: function () {
                                return ["Podaj link do strony w Wikipedii dotyczącej spółki, marki lub organizacji, dla której pracujesz, zawierającej co najmniej trzy odnośniki do zewnętrznych źródeł. "];
                            },
                        },
                        {
                            key: "de6d69a1",
                            get: function () {
                                return ["Podaj link potwierdzający, że spółka, marka lub organizacja, dla której pracujesz, jest notowana na giełdzie papierów wartościowych. "];
                            },
                        },
                        {
                            key: "be0e8fdb",
                            get: function () {
                                return ["Podaj linki do co najmniej trzech artykułów na temat spółki, dla której pracujesz, opublikowanych w sprawdzonych serwisach informacyjnych w ciągu ostatnich sześciu miesięcy. "];
                            },
                        },
                        {
                            key: "baed7213",
                            get: function () {
                                return ["O weryfikację konta w tej kategorii mogą starać się wyłącznie osoby na wyższych stanowiskach kierowniczych. Aby potwierdzić swoją wiarygodność, dodaj odnośnik do strony Twojej organizacji. "];
                            },
                        },
                        {
                            key: "c5d688cf",
                            get: function () {
                                return ["Wybierz jeden ze sposobów potwierdzenia, że Twoje konto jest oficjalnym kontem starszego kierownika znanej agencji informacyjnej. "];
                            },
                        },
                        {
                            key: "fce3e22d",
                            get: function () {
                                return ["Podaj linki do co najmniej trzech artykułów opublikowanych w sprawdzonych serwisach informacyjnych w ciągu ostatnich sześciu miesięcy, wskazujących Cię jako starszego kierownika lub osobę na kluczowym stanowisku w Twojej spółce. "];
                            },
                        },
                        {
                            key: "f1b276f1",
                            get: function () {
                                return ["Podaj link do strony, na której Twój pracodawca wskazuje Cię jako starszego kierownika. Musi to być link do oficjalnej strony znanej spółki, marki lub organizacji. "];
                            },
                        },
                        {
                            key: "e2465097",
                            get: function () {
                                return ["Podaj link do profilu w serwisie Trendy Google wskazujący niedawne wyszukiwania na temat Twojej produkcji. "];
                            },
                        },
                        {
                            key: "g83bcecd",
                            get: function () {
                                return ["Podaj linki do co najmniej trzech artykułów na temat Twojej produkcji opublikowanych w sprawdzonych serwisach informacyjnych w ciągu ostatnich sześciu miesięcy. "];
                            },
                        },
                        {
                            key: "f3016c6f",
                            get: function () {
                                return ["Wybierz jeden ze sposobów potwierdzenia, że Twoje konto jest oficjalnym kontem znanej produkcji. "];
                            },
                        },
                        {
                            key: "h74144bd",
                            get: function () {
                                return ["Podaj link potwierdzający, że producent, dla którego pracujesz, jest notowany na giełdzie papierów wartościowych. "];
                            },
                        },
                        {
                            key: "jef5dfc5",
                            get: function () {
                                return ["Podaj link do strony w Wikipedii o Twojej produkcji zawierającej co najmniej trzy odnośniki do zewnętrznych źródeł. "];
                            },
                        },
                        {
                            key: "gf5a4309",
                            get: function () {
                                return ["Wybierz sposób potwierdzenia, że Twoje konto jest oficjalnym kontem znanej organizacji rozrywkowej. "];
                            },
                        },
                        {
                            key: "g2e175b1",
                            get: function () {
                                return ["Podaj link do profilu w serwisie Trendy Google wskazujący niedawne wyszukiwania na temat organizacji rozrywkowej, którą reprezentujesz. "];
                            },
                        },
                        {
                            key: "efc369c3",
                            get: function () {
                                return ["Podaj linki do co najmniej trzech artykułów na temat Twojej organizacji opublikowanych w sprawdzonych serwisach informacyjnych w ciągu ostatnich sześciu miesięcy. "];
                            },
                        },
                        {
                            key: "ff03f07d",
                            get: function () {
                                return ["Podaj link potwierdzający, że organizacja rozrywkowa, którą reprezentujesz, jest notowana na giełdzie papierów wartościowych. "];
                            },
                        },
                        {
                            key: "a3e9dde3",
                            get: function () {
                                return ["Podaj link do strony w Wikipedii o organizacji rozrywkowej, którą reprezentujesz, zawierającej co najmniej trzy odnośniki do zewnętrznych źródeł. "];
                            },
                        },
                        {
                            key: "c2b8fb3d",
                            get: function () {
                                return ["Wybierz sposób potwierdzenia, że Twoje konto jest oficjalnym kontem znanego twórcy treści cyfrowych. "];
                            },
                        },
                        {
                            key: "fd33ce05",
                            get: function () {
                                return ["Podaj link do swojego profilu twórcy treści na dowolnej platformie cyfrowej. Ten profil musi zawierać odnośnik do Twojej nazwy użytkownika w serwisie X. ", "."];
                            },
                        },
                        {
                            key: "bb47d2b9",
                            get: function () {
                                return ["Podaj link do strony w Wikipedii o Tobie zawierającej co najmniej trzy odnośniki do zewnętrznych źródeł. "];
                            },
                        },
                        {
                            key: "db930fb3",
                            get: function () {
                                return ["Wybierz sposób potwierdzenia, że Twoje konto jest oficjalnym kontem znanej osoby ze świata rozrywki. "];
                            },
                        },
                        {
                            key: "dc263ec1",
                            get: function () {
                                return ["Podaj link do profilu w serwisie IMDB. Strona musi zawierać co najmniej 50 odnośników do produkcji filmowych. "];
                            },
                        },
                        {
                            key: "d18a48d5",
                            get: function () {
                                return ["Podaj link do strony wskazującej Cię jako osobę ze świata rozrywki i zawierającej odnośnik do Twojego konta w serwisie X. Musi to być link do oficjalnej witryny internetowej zweryfikowanej organizacji. ", "."];
                            },
                        },
                        {
                            key: "i3b4217b",
                            get: function () {
                                return ["Wybierz kategorię, która najlepiej określa Twoje konto reprezentujące instytucję rządową. "];
                            },
                        },
                        {
                            key: "ja62479f",
                            get: function () {
                                return ["Podaj linki do co najmniej pięciu artykułów opublikowanych w sprawdzonych serwisach informacyjnych w ciągu ostatnich sześciu miesięcy, wskazujących Ciebie jako kandydata w wyborach na dane stanowisko. "];
                            },
                        },
                        {
                            key: "f28bbbb1",
                            get: function () {
                                return ["Podaj linki do co najmniej pięciu artykułów opublikowanych w sprawdzonych serwisach informacyjnych w ciągu ostatnich sześciu miesięcy, wskazujących Ciebie jako osobę zajmującą oficjalne stanowisko rządowe. "];
                            },
                        },
                        {
                            key: "b229f4b9",
                            get: function () {
                                return ["Podaj linki do co najmniej pięciu artykułów opublikowanych w sprawdzonych serwisach informacyjnych w ciągu ostatnich sześciu miesięcy, wskazujących Ciebie jako osobę zajmującą oficjalne stanowisko rządowe. "];
                            },
                        },
                        {
                            key: "e85178bd",
                            get: function () {
                                return ["Podaj link do oficjalnej witryny internetowej kampanii wyborczej wskazującej Cię jako kandydata w wyborach na stanowisko rządowe na szczeblu regionalnym lub krajowym oraz zawierającej odnośnik do Twojego konta w serwisie X. ", "."];
                            },
                        },
                        {
                            key: "i499f8f7",
                            get: function () {
                                return ["Podaj link do oficjalnej rządowej witryny internetowej zawierającej odnośniki do zajmowanego przez Ciebie stanowiska rządowego lub innego publicznej stanowiska oraz do Twojego konta w serwisie X. ", "."];
                            },
                        },
                        {
                            key: "a394654f",
                            get: function () {
                                return ["Podaj link do strony wskazującej Cię jako osobę zajmującą oficjalne stanowisko rządowe lub jej współpracownika. Musi to być link do oficjalnej strony zweryfikowanej instytucji rządowej. "];
                            },
                        },
                        {
                            key: "dcb0da53",
                            get: function () {
                                return ["Jedynie dziennikarze zatrudnieni przez zweryfikowaną agencję informacyjną lub publicystyczną mogą uzyskać weryfikację konta. Podaj link do konta Twojego pracodawcy. "];
                            },
                        },
                        {
                            key: "d82a96af",
                            get: function () {
                                return ["Wybierz jeden ze sposobów potwierdzenia, że Twoje konto jest oficjalnym kontem znanego dziennikarza. "];
                            },
                        },
                        {
                            key: "d47b4101",
                            get: function () {
                                return ["Podaj link do strony, na której Twój pracodawca wskazuje Cię jako dziennikarza. Musi to być link do oficjalnej strony zweryfikowanej agencji informacyjnej. "];
                            },
                        },
                        {
                            key: "a3540593",
                            get: function () {
                                return ["Podaj odnośniki do co najmniej trzech źródeł, w których wspomniano Cię jako autora lub współtwórcę znaczącej publikacji z ostatnich sześciu miesięcy. "];
                            },
                        },
                        {
                            key: "edb782e7",
                            get: function () {
                                return ["Wybierz jeden ze sposobów potwierdzenia, że Twoje konto jest oficjalnym kontem znanej agencji informacyjnej. "];
                            },
                        },
                        {
                            key: "cc16af2d",
                            get: function () {
                                return ["Provide a link to a Google Trends profile with evidence of recent search aktywność about your news organization. "];
                            },
                        },
                        {
                            key: "b42b7001",
                            get: function () {
                                return ["Podaj link do strony w Wikipedii dotyczącej agencji informacyjnej, dla której pracujesz, zawierającej co najmniej trzy odnośniki do zewnętrznych źródeł. "];
                            },
                        },
                        {
                            key: "fd2c6f63",
                            get: function () {
                                return ["Podaj link potwierdzający, że agencja informacyjna, dla której pracujesz, jest notowana na giełdzie papierów wartościowych. "];
                            },
                        },
                        {
                            key: "ec7027cd",
                            get: function () {
                                return ["Podaj linki do co najmniej trzech artykułów na temat agencji informacyjnej, dla której pracujesz, opublikowanych w sprawdzonych serwisach informacyjnych w ciągu ostatnich sześciu miesięcy. "];
                            },
                        },
                        {
                            key: "a0a9f835",
                            get: function () {
                                return ["Aby uzyskać weryfikację, osoby związane z profesjonalnym sportem muszą być członkami zweryfikowanej ligi sportowej i brać udział w zweryfikowanych wydarzeniach sportowych. Podaj link do drużyny, ligi, wydarzenia lub organizacji, które są zweryfikowane i mają związek z Twoim kontem."];
                            },
                        },
                        {
                            key: "iba551d5",
                            get: function () {
                                return ["Nie spełniasz wymagań dotyczących minimalnej liczby obserwujących obowiązujących w Twoim regionie, dlatego nie możesz uzyskać weryfikacji jako osoba ze świata gier. "];
                            },
                        },
                        {
                            key: "h515e869",
                            get: function () {
                                return ["Aby uzyskać weryfikację, osoby związane z e-sportem muszą być członkami zweryfikowanej ligi e-sportowej i brać udział w zweryfikowanych wydarzeniach e-sportowych. Podaj link do drużyny, ligi, wydarzenia lub organizacji, które są zweryfikowane i mają związek z Twoim kontem."];
                            },
                        },
                        {
                            key: "d2cd7f89",
                            get: function () {
                                return ["Wybierz sposób potwierdzenia, że Twoje konto jest oficjalnym kontem znanej ligi lub drużyny sportowej albo międzynarodowych zawodów sportowych. "];
                            },
                        },
                        {
                            key: "c68614a3",
                            get: function () {
                                return ["Podaj link do profilu w serwisie Trendy Google wskazujący niedawne wyszukiwania na temat Twojej profesjonalnej organizacji sportowej. "];
                            },
                        },
                        {
                            key: "b4ea622f",
                            get: function () {
                                return ["Podaj link do strony w Wikipedii dotyczącej profesjonalnej organizacji sportowej, dla której pracujesz, zawierającej co najmniej trzy odnośniki do zewnętrznych źródeł. "];
                            },
                        },
                        {
                            key: "acab99f7",
                            get: function () {
                                return ["Podaj link potwierdzający, że profesjonalna organizacja sportowa, dla której pracujesz, jest notowana na giełdzie papierów wartościowych. "];
                            },
                        },
                        {
                            key: "df0b2577",
                            get: function () {
                                return ["Podaj link do oficjalnej strony międzynarodowych zawodów sportowych lub profesjonalnej organizacji sportowej, które wskazują Cię jako członka ligi lub drużyny, gracza lub trenera. "];
                            },
                        },
                        {
                            key: "jfda4c29",
                            get: function () {
                                return ["Podaj linki do co najmniej trzech artykułów na temat organizacji, dla której pracujesz, opublikowanych w sprawdzonych serwisach informacyjnych w ciągu ostatnich sześciu miesięcy. "];
                            },
                        },
                        {
                            key: "g3299df1",
                            get: function () {
                                return ["Wybierz sposób potwierdzenia, że Twoje konto jest oficjalnym kontem profesjonalnego sportowca. "];
                            },
                        },
                        {
                            key: "id6bbc01",
                            get: function () {
                                return ["Wybierz sposób potwierdzenia, że Twoje konto jest oficjalnym kontem osoby ze świata gier. "];
                            },
                        },
                        {
                            key: "fbe119c5",
                            get: function () {
                                return ["Podaj link do oficjalnej strony międzynarodowych zawodów sportowych lub profesjonalnej organizacji sportowej, które wskazują Cię jako profesjonalnego sportowca, menedżera lub trenera. "];
                            },
                        },
                        {
                            key: "da0e7f33",
                            get: function () {
                                return ["Podaj link do oficjalnej strony ligi e-sportowej lub wydarzenia e-sportowego, które zostały zweryfikowane i wskazują Cię jako oficjalnego członka drużyny, trenera lub menedżera. "];
                            },
                        },
                        {
                            key: "ca20e39f",
                            get: function () {
                                return ["Niestety chwilowo nie możemy przyjąć nowego wniosku o weryfikację. Zajrzyj później i spróbuj ponownie. "];
                            },
                        },
                        {
                            key: "jf9308af",
                            get: function () {
                                return ["Aby zweryfikować swoją tożsamość za pomocą adresu e-mail, musisz posiadać zweryfikowany wcześniej adres e-mail. Aby to zrobić, przejdź do ", "."];
                            },
                        },
                        {
                            key: "e9976a41",
                            get: function () {
                                return ["Aby zweryfikować swoją tożsamość za pomocą adresu e-mail, musisz użyć adresu spełniającego nasze kryteria. Aby to zrobić, przejdź do ", "."];
                            },
                        },
                        {
                            key: "e5b4cc43",
                            get: function () {
                                return ["Weryfikacja dotyczy znanych osób lub grup osób z określonych kategorii. Jeśli chcesz uzyskać weryfikację Twojego konta, złóż wniosek. "];
                            },
                        },
                        {
                            key: "bfb355fb",
                            get: function () {
                                return ["Upewnij się, że zdjęcie Twojej twarzy i tekst na dokumencie tożsamości są widoczne i czytelne — jeśli nie, może być konieczne ponowne przesłanie pliku. Firma X nie otrzyma ani nie będzie przechowywać kopii Twojego dokumentu tożsamości. ", "."];
                            },
                        },
                        {
                            key: "d65a41c3",
                            get: function () {
                                return ["Informacje o tym, w jaki sposób możesz uzyskać dostęp do swoich danych i aktualizować je, znajdziesz w naszej ", "."];
                            },
                        },
                        {
                            key: "a1c39f5b",
                            get: function () {
                                return ["You’ll be contacted as soon as a decision has been made. This could take up to " + this.props.days + " dni" + n(this.props.days, "", "", "a", "") + "."];
                            },
                        },
                        {
                            key: "ja826537",
                            get: function () {
                                return ["Wypełnij krótką ", " i pomóż nam ulepszyć nasze usługi."];
                            },
                        },
                        {
                            key: "b7be91bf",
                            get: function () {
                                return ["Twój ostatni wniosek o weryfikację konta odrzucono dnia " + this.props.date + ". Kolejny wniosek możesz złożyć po upływie 30 dni."];
                            },
                        },
                        {
                            key: "jcb00a95",
                            get: function () {
                                return ["Twój ostatni wniosek o weryfikację konta został złożony dnia " + this.props.date + ". Kolejny wniosek możesz złożyć po upływie 30 dni."];
                            },
                        },
                        {
                            key: "j92ea4b9",
                            get: function () {
                                return ["Złożyłeś/aś wniosek o weryfikację konta w dniu " + this.props.date + ". Wkrótce poinformujemy Cię o naszej decyzji."];
                            },
                        },
                        {
                            key: "jbcd22b1",
                            get: function () {
                                return ["Baw się dobrze i pamiętaj o przestrzeganiu ", "."];
                            },
                        },
                        {
                            key: "hcecd237",
                            get: function () {
                                return ["To jest lista aplikacji powiązanych z Twoim kontem. Możesz zobaczyć to, do jakich informacji mają one dostęp. "];
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
                                return ["Osoby, które obserwujesz, zawsze będą mogły wysyłać Ci wiadomości. ", "."];
                            },
                        },
                        {
                            key: "d79b6b7b",
                            get: function () {
                                return ["Powiąż konto zarządzające, dzięki czemu Twoje zautomatyzowane konto otrzyma odpowiednie oznaczenie. Wszystkie zautomatyzowane konta muszą być powiązane z odpowiadającymi im kontami zarządzającymi. "];
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
                                return ["Wysoki poziom dyskusji w serwisie X jest naszym priorytetem, dlatego wyłączyliśmy większość możliwości interakcji z tym wpisem. Jeśli jednak chcesz porozmawiać na ten temat, możesz zacytować ten wpis. ", "."];
                            },
                        },
                        {
                            key: "i2a606d1",
                            get: function () {
                                return ["Wysoki poziom dyskusji w serwisie X jest naszym priorytetem, dlatego wyłączyliśmy większość możliwości interakcji z tym wpisem. ", "."];
                            },
                        },
                        {
                            key: "fe93026b",
                            get: function () {
                                return ["Tylko użytkownik @" + this.props.username + " i osoby z jego kręgu mogą zobaczyć te wpisy."];
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
                                return ["Są one określane oraz egzekwowane przez administratorów grupy dyskusyjnej i obowiązują wraz z ", "."];
                            },
                        },
                        {
                            key: "gb7eca21",
                            get: function () {
                                return ["Grupy dyskusyjne są publiczne, więc chronione konta nie mogą aktualnie do nich dołączać. Możesz czytać wpisy, ale ", ", aby móc wziąć udział w rozmowie."];
                            },
                        },
                        {
                            key: "jb124a07",
                            get: function () {
                                return ["Moderator usunął Cię za naruszenie jednej z zasad Grupy dyskusyjnej: "];
                            },
                        },
                        {
                            key: "d6d818a1",
                            get: function () {
                                return ["Wyświetlenia: " + this.props.viewerCount];
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
                                return ["GIF przez "];
                            },
                        },
                        {
                            key: "i9606e33",
                            get: function () {
                                return ["Film przez "];
                            },
                        },
                        {
                            key: "i1a64d47",
                            get: function () {
                                return ["Zdjęcie pochodzi od "];
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
                                return ["Zamiast tego wyszukaj „", "”"];
                            },
                        },
                        {
                            key: "hce48b8b",
                            get: function () {
                                return ["Czy chodziło Ci o „", "”?"];
                            },
                        },
                        {
                            key: "f8ea2809",
                            get: function () {
                                return [this.props.selection + " może teraz odpowiadać"];
                            },
                        },
                        {
                            key: "hb92c979",
                            get: function () {
                                return ["Znaki: ", "/" + this.props.maxLimit];
                            },
                        },
                        {
                            key: "a20c0721",
                            get: function () {
                                return ["Ostatnia zmiana: "];
                            },
                        },
                        {
                            key: "a9ce2dd5",
                            get: function () {
                                return ["", ", aby dowiedzieć się, jak korzystać z nowej funkcji."];
                            },
                        },
                        {
                            key: "e2e6ea0d",
                            get: function () {
                                return ["za pomocą "];
                            },
                        },
                        {
                            key: "bd7349bb",
                            get: function () {
                                return ["Ostatnio zapisano "];
                            },
                        },
                        {
                            key: "hb16b207",
                            get: function () {
                                return ["Publikacja artykułu ", " zostanie cofnięta, a artykuł zostanie przeniesiony do szkiców i nie będzie widoczny publicznie."];
                            },
                        },
                        {
                            key: "dd5806bb",
                            get: function () {
                                return ["Te multimedia mogą zawierać nieodpowiednie treści. "];
                            },
                        },
                        {
                            key: "d247a0b9",
                            get: function () {
                                return ["Zasięg funkcji edytowania jest ograniczony do oryginalnych wpisów i nie obejmuje odpowiedzi ani wątków. ", " na temat tego, co możesz edytować."];
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
                                return ["Chcesz edytować swój krąg? Nic prostszego. Osoby, które usuniesz, nie zostaną o tym poinformowane. ", "."];
                            },
                        },
                        {
                            key: "j0b75ce7",
                            get: function () {
                                return ["", " nowego kreatora artykułów oferującego nowe opcje formatowania."];
                            },
                        },
                        {
                            key: "dd964cf3",
                            get: function () {
                                return ["Grupy dyskusyjne są publiczne, więc chronione konta nie mogą aktualnie dołączać do rozmów. Możesz czytać wpisy i oznaczać je jako polubione, ale aby korzystać z pozostałych opcji, ", "."];
                            },
                        },
                        {
                            key: "e34022a7",
                            get: function () {
                                return ["W odpowiedzi do "];
                            },
                        },
                        {
                            key: "bfd9c99b",
                            get: function () {
                                return ["W odpowiedzi do "];
                            },
                        },
                        {
                            key: "g7a1000f",
                            get: function () {
                                return ["W odpowiedzi do "];
                            },
                        },
                        {
                            key: "i558c201",
                            get: function () {
                                return ["W odpowiedzi do "];
                            },
                        },
                        {
                            key: "j935bcdf",
                            get: function () {
                                return ["Odpowiadasz ", " w " + this.props.communityName];
                            },
                        },
                        {
                            key: "i7bd9c8f",
                            get: function () {
                                return ["Odpowiadasz ", " w " + this.props.communityName];
                            },
                        },
                        {
                            key: "cfa0049d",
                            get: function () {
                                return ["Odpowiadasz ", " w " + this.props.communityName];
                            },
                        },
                        {
                            key: "jfc8e4b5",
                            get: function () {
                                return ["Odpowiadasz ", " w " + this.props.communityName];
                            },
                        },
                        {
                            key: "fe06c9f5",
                            get: function () {
                                return ["Odpowiadasz użytkownikowi ", ". Twoja odpowiedź będzie widoczna dla jego ", "."];
                            },
                        },
                        {
                            key: "f7e12e15",
                            get: function () {
                                return ["Odpowiadasz użytkownikom ", ". Twoja odpowiedź będzie widoczna dla ich ", "."];
                            },
                        },
                        {
                            key: "eade6035",
                            get: function () {
                                return ["Odpowiadasz użytkownikom ", ". Twoja odpowiedź będzie widoczna dla ich ", "."];
                            },
                        },
                        {
                            key: "da018b37",
                            get: function () {
                                return ["Odpowiadasz użytkownikom ", ". Twoja odpowiedź będzie widoczna dla ich ", "."];
                            },
                        },
                        {
                            key: "e119d033",
                            get: function () {
                                return ["Odpowiadasz użytkownikowi ", ". Twoja odpowiedź będzie też widoczna dla osób z kręgu użytkownika " + this.props.trustedFriendsTweetOwner + ", który Cię obserwuje."];
                            },
                        },
                        {
                            key: "d0c02e7b",
                            get: function () {
                                return ["Odpowiadasz użytkownikowi ", ". Twoja odpowiedź będzie też widoczna dla osób z kręgu użytkownika " + this.props.trustedFriendsTweetOwner + "."];
                            },
                        },
                        {
                            key: "bce67b49",
                            get: function () {
                                return ["Odpowiadasz użytkownikom ", ". Twoja odpowiedź będzie też widoczna dla osób z kręgu użytkownika ", ", który Cię obserwuje."];
                            },
                        },
                        {
                            key: "e460ccf1",
                            get: function () {
                                return ["Odpowiadasz użytkownikom ", ". Twoja odpowiedź będzie też widoczna dla osób z kręgu użytkownika ", "."];
                            },
                        },
                        {
                            key: "i421898b",
                            get: function () {
                                return ["Odpowiadasz użytkownikom ", ". Twoja odpowiedź będzie też widoczna dla osób z kręgu użytkownika ", ", który Cię obserwuje."];
                            },
                        },
                        {
                            key: "c70a17eb",
                            get: function () {
                                return ["Odpowiadasz użytkownikom ", ". Twoja odpowiedź będzie też widoczna dla osób z kręgu użytkownika ", "."];
                            },
                        },
                        {
                            key: "b0d6bca7",
                            get: function () {
                                return ["Odpowiadasz użytkownikowi ", ". Twoja odpowiedź będzie też widoczna dla osób z kręgu użytkownika ", ", który Cię obserwuje."];
                            },
                        },
                        {
                            key: "aacf46d1",
                            get: function () {
                                return ["Odpowiadasz użytkownikowi ", ". Twoja odpowiedź będzie też widoczna dla osób z kręgu użytkownika ", "."];
                            },
                        },
                        {
                            key: "ff2f533f",
                            get: function () {
                                return ["Klikając Promuj wpis, zgadzasz się na ", "."];
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
                                return ["Nie potwierdzono Twojego nowego adresu e-mail: " + this.props.unverifiedEmail + ". "];
                            },
                        },
                        {
                            key: "f05afae5",
                            get: function () {
                                return ["Zmiana hasła spowoduje wylogowanie Cię ze wszystkich aktywnych sesji w serwisie X z wyjątkiem bieżącej. Nie będzie to miało wpływu na aplikację ", ", która ma dostęp do Twojego konta. ", "."];
                            },
                        },
                        {
                            key: "d3543217",
                            get: function () {
                                return ["Wyrażam zgodę na używanie przez firmy X i Persona obrazów przedstawiających mój dokument tożsamości oraz moją twarz, w tym wyodrębnionych z nich danych biometrycznych, w celu potwierdzenia mojej tożsamości, a także na potrzeby zapewnienia bezpieczeństwa i zabezpieczeń w serwisie X, zapobiegania oszustwom i obsługi płatności. Firma Persona może przechowywać takie dane nie dłużej niż przez 30 dni. Firma X może przechowywać moje imię i nazwisko, adres oraz wartości skrótów mojego dokumentu tożsamości, dopóki będę subskrybować ", "."];
                            },
                        },
                        {
                            key: "j7963df1",
                            get: function () {
                                return ["Wyrażam zgodę na używanie przez firmy X i Au10tix obrazów przedstawiających mój dokument tożsamości oraz moją twarz, w tym wyodrębnionych z nich danych biometrycznych, w celu potwierdzenia mojej tożsamości, a także na potrzeby zapewnienia bezpieczeństwa i zabezpieczeń w serwisie X, zapobiegania oszustwom i obsługi płatności. Firma Au10tix może przechowywać takie dane nie dłużej niż przez 30 dni. Firma X może przechowywać moje imię i nazwisko, adres oraz wartości skrótów numeru mojego dokumentu tożsamości, dopóki będę uczestniczyć w programie ", " lub ", "."];
                            },
                        },
                        {
                            key: "f8f20041",
                            get: function () {
                                return ["Wyrażam zgodę na używanie przez firmy X i Au10tix obrazów przedstawiających mój dokument tożsamości oraz moją twarz, w tym wyodrębnionych z nich danych biometrycznych, w celu potwierdzenia mojej tożsamości, a także na potrzeby zapewnienia bezpieczeństwa i zabezpieczeń w serwisie X, zapobiegania oszustwom i obsługi płatności. Firma Au10tix może przechowywać takie dane nie dłużej niż przez 30 dni. Firma X może przechowywać moje imię i nazwisko, adres oraz wartości skrótów numeru mojego dokumentu tożsamości, dopóki będę uczestniczyć w programie ", " lub ", "."];
                            },
                        },
                        {
                            key: "dd49801f",
                            get: function () {
                                return ["Wyrażam zgodę na używanie przez firmy X i Stripe obrazów przedstawiających mój dokument tożsamości oraz moją twarz, w tym wyodrębnionych z nich danych biometrycznych, w celu potwierdzenia mojej tożsamości, a także na potrzeby zapewnienia bezpieczeństwa i zabezpieczeń w serwisie X, zapobiegania oszustwom oraz obsługi płatności. Firma Stripe lub jej podwykonawcy mogą przechowywać takie dane nie dłużej niż przez 30 dni i mogą używać ich na potrzeby szkolenia modeli oraz aktualizowania baz danych używanych w celu wykrywania oszustw. Firma X może przechowywać moje imię i nazwisko, adres oraz wartości skrótów numeru mojego dokumentu tożsamości, dopóki będę uczestniczyć w programie ", " lub ", "."];
                            },
                        },
                        {
                            key: "c5cee667",
                            get: function () {
                                return ["Wyrażam zgodę na używanie przez firmy X i Stripe obrazów przedstawiających mój dokument tożsamości oraz moją twarz, w tym wyodrębnionych z nich danych biometrycznych, w celu potwierdzenia mojej tożsamości, a także na potrzeby zapewnienia bezpieczeństwa i zabezpieczeń w serwisie X, zapobiegania oszustwom oraz obsługi płatności. Firma Stripe lub jej podwykonawcy mogą przechowywać takie dane nie dłużej niż przez 30 dni i mogą używać ich na potrzeby szkolenia modeli oraz aktualizowania baz danych używanych w celu wykrywania oszustw. Firma X może przechowywać moje imię i nazwisko, adres oraz wartości skrótów numeru mojego dokumentu tożsamości, dopóki będę uczestniczyć w programie ", " lub ", "."];
                            },
                        },
                        {
                            key: "a4455c05",
                            get: function () {
                                return ["Zapisz lub zrób zrzut ekranu i zachowaj go. Ten kod może być użyty tylko raz. "];
                            },
                        },
                        {
                            key: "cd68cf4b",
                            get: function () {
                                return ["To jest główny kraj przypisany do Twojego konta. Informacja o Twoim kraju pozwala nam lepiej dopasowywać treści wybierane dla Ciebie w serwisie X. ", "."];
                            },
                        },
                        {
                            key: "g66a254b",
                            get: function () {
                                return ["To są kontakty zaimportowane z Twoich urządzeń mobilnych. Ta informacja pozwala nam lepiej dopasowywać wybierane dla Ciebie treści, na przykład sugestie kont do obserwowania. Możesz usunąć wcześniej przesłane kontakty i wyłączyć synchronizację danych z serwisu X na wszystkich urządzeniach. Wprowadzenie tych zmian może zająć trochę czasu. ", "."];
                            },
                        },
                        {
                            key: "ffa48331",
                            get: function () {
                                return ["Po włączeniu tej opcji do wpisów będzie można dodawać informacje o lokalizacji. ", "."];
                            },
                        },
                        {
                            key: "a629c16f",
                            get: function () {
                                return ["", " " + this.props.discountedPrice + " miesięcznie przez " + n(this.props.duration, this.props.duration + " miesiące", this.props.duration + " miesięcy", "miesiąc", this.props.duration + " miesiąca")];
                            },
                        },
                        {
                            key: "c142e70f",
                            get: function () {
                                return ["", " " + this.props.discountedPrice + " rocznie przez " + n(this.props.duration, this.props.duration + " lata", this.props.duration + " lat", "rok", this.props.duration + " roku")];
                            },
                        },
                        {
                            key: "e9dc8a25",
                            get: function () {
                                return ["", " ", " na " + n(this.props.duration, this.props.duration + " lata", this.props.duration + " lat", "rok", this.props.duration + " roku")];
                            },
                        },
                        {
                            key: "f8a9cbb7",
                            get: function () {
                                return ["", " ", " na " + n(this.props.duration, this.props.duration + " miesięce", this.props.duration + " miesięcy", "miesiąc", this.props.duration + " miesiąca")];
                            },
                        },
                        {
                            key: "ab3bf5a7",
                            get: function () {
                                return ["Kiedy kogoś zablokujesz, ta osoba nie będzie mogła Cię obserwować ani wysyłać Ci wiadomości, a Ty nie będziesz otrzymywać od niej żadnych powiadomień. "];
                            },
                        },
                        {
                            key: "g124fce9",
                            get: function () {
                                return ["Pewne informacje dotyczące konta mogą być wciąż dostępne w wyszukiwarkach takich jak Google czy Bing. "];
                            },
                        },
                        {
                            key: "d9ef8fbb",
                            get: function () {
                                return ["Jeśli chcesz zmienić @nazwę_użytkownika, nie musisz dezaktywować swojego konta. Możesz ją zmienić w ", "."];
                            },
                        },
                        {
                            key: "b7a3adc1",
                            get: function () {
                                return ["Aby korzystać z tej samej @nazwy_użytkownika lub tego samego adresu e-mail na innym koncie w serwisie X, ", " przed dezaktywacją tego konta."];
                            },
                        },
                        {
                            key: "f3613d0b",
                            get: function () {
                                return ["Jeśli chcesz pobrać swoje ", ", musisz wysłać wniosek i pobrać dane przed dezaktywacją konta. Nie można otrzymać linku umożliwiającego pobranie danych dla konta, które zostało zdezaktywowane."];
                            },
                        },
                        {
                            key: "e9dec56f",
                            get: function () {
                                return ["Potwierdzasz, że ta data urodzenia jest poprawna: ", ". Używanie niepoprawnej daty urodzenia może mieć wpływ na Twoje konto."];
                            },
                        },
                        {
                            key: "cfd2909d",
                            get: function () {
                                return ["Informacja o Twoim wieku pozwala nam lepiej dopasowywać wybierane dla Ciebie treści, w tym reklamy, tak jak opisano w naszej ", "."];
                            },
                        },
                        {
                            key: "jea9c1cb",
                            get: function () {
                                return ["Możesz określić, kto w serwisie X będzie mógł zobaczyć Twoją datę urodzenia. ", "."];
                            },
                        },
                        {
                            key: "d80a7547",
                            get: function () {
                                return ["", " jest hostem"];
                            },
                        },
                        {
                            key: "j7293d6b",
                            get: function () {
                                return ["", " jest współhostem"];
                            },
                        },
                        {
                            key: "df79977f",
                            get: function () {
                                return ["", " mówi"];
                            },
                        },
                        {
                            key: "ad960f39",
                            get: function () {
                                return ["", " słucha"];
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
                                return ["Utwórz: "];
                            },
                        },
                        {
                            key: "ca584c31",
                            get: function () {
                                return ["Firma mająca tę witrynę internetową już istnieje. Czy chodziło Ci o ", "?"];
                            },
                        },
                        {
                            key: "eb96a831",
                            get: function () {
                                return ["Te filtry nie mają wpływu na powiadomienia od osób, które obserwujesz. "];
                            },
                        },
                        {
                            key: "aba5a349",
                            get: function () {
                                return ["Za jednym razem możesz wyciszyć jeden element — słowo, wyrażenie, @nazwę_użytkownika lub tag. "];
                            },
                        },
                        {
                            key: "f03ea36d",
                            get: function () {
                                return ["Po wyciszeniu słów nie będziesz otrzymywać nowych powiadomień o wpisach, które je zawierają, i nie będziesz widzieć tych wpisów na swojej osi czasu na stronie głównej. ", "."];
                            },
                        },
                        {
                            key: "b0b13519",
                            get: function () {
                                return ["Oto lista zablokowanych przez Ciebie użytkowników. Możesz dowolnie ją edytować. "];
                            },
                        },
                        {
                            key: "e212a9ab",
                            get: function () {
                                return ["Zarządzaj swoimi preferencjami dotyczącymi wyświetlania nieodpowiednich multimediów w serwisie X. Dowiedz się więcej o naszych ", "."];
                            },
                        },
                        {
                            key: "cbc4f32d",
                            get: function () {
                                return ["Dotyczy to innych multimediów oznaczonych jako nieodpowiednie, takich jak multimedia pochodzące z kont o określonych ", "."];
                            },
                        },
                        {
                            key: "a4fc317d",
                            get: function () {
                                return ["Twoje konto zostało oflagowane i nie może uczestniczyć w programie Udział w dochodach dla twórców treści. Możesz złożyć odwołanie, wykonując instrukcje podane na ", ". W trakcie analizowania Twojego odwołania nadal będziemy naliczać Ci udział w dochodach."];
                            },
                        },
                        {
                            key: "a8e78be7",
                            get: function () {
                                return ["Twoje konto zostało oflagowane i nie może uczestniczyć w programie Udział w dochodach z reklam. Możesz złożyć odwołanie, wykonując instrukcje podane na ", ". W trakcie analizowania Twojego odwołania nadal będziemy naliczać Ci udział w dochodach."];
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
                                return ["Subskrybuj ", "" + this.props.name];
                            },
                        },
                        {
                            key: "ede65a59",
                            get: function () {
                                return ["Ciekawi Cię, ile możesz zarobić? "];
                            },
                        },
                        {
                            key: "a9c053c7",
                            get: function () {
                                return ["Wysyłając wniosek, akceptujesz "];
                            },
                        },
                        {
                            key: "geee69df",
                            get: function () {
                                return ["Wybierz cenę miesięcznej subskrypcji, która wydaje Ci się odpowiednia. Zastanawiasz się, ile możesz zarobić? "];
                            },
                        },
                        {
                            key: "fdf28443",
                            get: function () {
                                return ["Akceptując i przechodząc dalej, zgadzasz się na "];
                            },
                        },
                        {
                            key: "f43d68d7",
                            get: function () {
                                return ["Sprawdź dokładnie cenę subskrypcji i potwierdź ją. ", " w okresie testowym."];
                            },
                        },
                        {
                            key: "h406634b",
                            get: function () {
                                return ["Twoje konto w Stripe zostało potwierdzone. Subskrypcje zakupione ze pośrednictwem Twojego konta wkrótce zostaną aktywowane. Poinformujemy Cię o aktywacji subskrypcji. Status subskrypcji możesz również sprawdzić na swoim profilu."];
                            },
                        },
                        {
                            key: "d4b0b963",
                            get: function () {
                                return ["Stukając poniżej, potwierdzasz, że akceptujesz "];
                            },
                        },
                        {
                            key: "j2d920f7",
                            get: function () {
                                return ["Wybierając pozycję „Dołącz i zweryfikuj za pomocą dokumentu tożsamości”, akceptujesz "];
                            },
                        },
                        {
                            key: "fde94f97",
                            get: function () {
                                return ["Wybierając pozycję „Dołącz i zweryfikuj za pomocą dokumentu tożsamości”, akceptujesz "];
                            },
                        },
                        {
                            key: "afbd47cb",
                            get: function () {
                                return ["Zarabiaj na reklamach umieszczanych w odpowiedziach na Twoje wpisy. Aby móc uczestniczyć w programie Udział w dochodach z reklam, musisz mieć konto zgodne z ", ", ", "."];
                            },
                        },
                        {
                            key: "ce6f73c7",
                            get: function () {
                                return ["Zarządzaj tym, w jaki sposób serwis X dostosowuje wybierane dla Ciebie treści, korzystając z ", "."];
                            },
                        },
                        {
                            key: "j31f2f97",
                            get: function () {
                                return ["Tak, wszystkie zautomatyzowane konta muszą być oznaczone. Tego wymagają nasze ", "."];
                            },
                        },
                        {
                            key: "ed8f77d3",
                            get: function () {
                                return ["Więcej informacji znajdziesz na stronie ", "."];
                            },
                        },
                        {
                            key: "dd040d67",
                            get: function () {
                                return ["Więcej informacji znajduje się na stronie ", "."];
                            },
                        },
                        {
                            key: "if2bb997",
                            get: function () {
                                return ["Przykro nam, że nas opuszczasz. #DoZobaczenia"];
                            },
                        },
                        {
                            key: "i1e24825",
                            get: function () {
                                return ["W przypadku niepodania daty urodzenia ustalamy możliwy zakres wieku na podstawie Twojego profilu i aktywności w serwisie X. Informacje o wieku służą do personalizowania treści widocznych w serwisie X. ", "."];
                            },
                        },
                        {
                            key: "a200fc71",
                            get: function () {
                                return ["Coś się nie zgadza? Możesz dodać datę urodzenia do swojego ", " bez ujawniania jej."];
                            },
                        },
                        {
                            key: "a97ef88f",
                            get: function () {
                                return ["Listy odbiorców są często tworzone na podstawie list e-mailowych lub historii przeglądarek. Pozwalają reklamodawcom trafić do potencjalnych klientów lub do osób, które najprawdopodobniej są zainteresowane ich ofertą. "];
                            },
                        },
                        {
                            key: "f451c521",
                            get: function () {
                                return ["Należysz teraz do ", " od "];
                            },
                        },
                        {
                            key: "f27cc8af",
                            get: function () {
                                return ["Aby włączyć tę funkcję, przejdź do sekcji ustawień ", " i włącz ustawienie „Personalizuj na podstawie dodatkowych informacji”."];
                            },
                        },
                        {
                            key: "h0085c59",
                            get: function () {
                                return ["Aby włączyć tę opcję, przejdź do ustawień ", " i włącz opcję „Personalizuj na podstawie dodatkowych informacji”."];
                            },
                        },
                        {
                            key: "b78e30fd",
                            get: function () {
                                return ['Możesz usunąć te informacje, wyłączając opcję „Personalizuj na podstawie dodatkowych informacji" w sekcji ', "."];
                            },
                        },
                        {
                            key: "bb593021",
                            get: function () {
                                return ["Możesz usunąć te informacje, wyłączając opcję „Personalizuj na podstawie dodatkowych informacji” w ustawieniach w obszarze ", "."];
                            },
                        },
                        {
                            key: "h60f45ef",
                            get: function () {
                                return ["To są dodatkowe adresy e-mail podobne do tego, który jest powiązany z Twoim kontem w serwisie X. Możesz usunąć te informacje, wyłączając opcję „Personalizuj na podstawie dodatkowych informacji” w ustawieniach w obszarze ", "."];
                            },
                        },
                        {
                            key: "cbcb2413",
                            get: function () {
                                return ["Za pomocą tych urządzeń zbieramy informacje, które pozwalają nam sprawić, aby korzystanie z serwisu X w tej przeglądarce było dla Ciebie łatwiejsze i przyjemniejsze. ", "."];
                            },
                        },
                        {
                            key: "e21b623d",
                            get: function () {
                                return ["To są przypisane do Ciebie przeglądarki i urządzenia. "];
                            },
                        },
                        {
                            key: "i4d58f43",
                            get: function () {
                                return ["Są to przeglądarki, urządzenia i informacje używane przez nas w celu lepszego dostosowywania wybieranych dla Ciebie treści. Obejmuje to również urządzenia i przeglądarki, za pomocą których nie logowano się do serwisu X, oraz adresy e-mail i numery telefonów podobne do tych powiązanych z Twoim kontem w serwisie X. ", "."];
                            },
                        },
                        {
                            key: "a1fdeb45",
                            get: function () {
                                return ["Możesz włączyć tę funkcję w ", "."];
                            },
                        },
                        {
                            key: "hcb3ad67",
                            get: function () {
                                return ["Jeśli zauważysz podejrzaną aktywność w aplikacji, przejdź do zakładki ", " i cofnij dostęp aplikacji do swojego konta. Czasami lokalizacja IP może być inna niż Twoja fizyczna lokalizacja. "];
                            },
                        },
                        {
                            key: "adc26d49",
                            get: function () {
                                return ["Partnerzy serwisu X wybierają odbiorców na podstawie ich wyborów zakupowych, stylu życia oraz innych zachowań w sieci i w realnym świecie. ", "."];
                            },
                        },
                        {
                            key: "efc1de65",
                            get: function () {
                                return ["Wystąpił błąd i nie można było wysłać Twoich danych z serwisu X. Aby ponownie złożyć wniosek o udostępnienie danych, ", "."];
                            },
                        },
                        {
                            key: "f0e84609",
                            get: function () {
                                return ["", " temu"];
                            },
                        },
                        {
                            key: "b76d6eb7",
                            get: function () {
                                return ["Można wyświetlić tylko pierwszych 1000 gości. Na liście mogę też być widoczne osoby, które słuchają anonimowo lub nie są zalogowane do serwisu X. ", "."];
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
                                return [this.props.hours + " godz. " + this.props.minutes + " min"];
                            },
                        },
                        {
                            key: "bff29c95",
                            get: function () {
                                return ["", " zmienił/a zdjęcie grupy"];
                            },
                        },
                        {
                            key: "b16e4d45",
                            get: function () {
                                return ["Zmieniłeś/aś nazwę grupy na "];
                            },
                        },
                        {
                            key: "c5760699",
                            get: function () {
                                return ["", " zmienił/a nazwę grupy na "];
                            },
                        },
                        {
                            key: "a72730a1",
                            get: function () {
                                return ["Zmieniono nazwę grupy na "];
                            },
                        },
                        {
                            key: "a4bc88c3",
                            get: function () {
                                return ["", " dodał/a "];
                            },
                        },
                        {
                            key: "bfdff0c3",
                            get: function () {
                                return ["Dodano "];
                            },
                        },
                        {
                            key: "fc10875f",
                            get: function () {
                                return ["", " opuścił/a rozmowę"];
                            },
                        },
                        {
                            key: "fa95b019",
                            get: function () {
                                return ["", " dodał/a Cię"];
                            },
                        },
                        {
                            key: "e3534477",
                            get: function () {
                                return ["Liczba "];
                            },
                        },
                        {
                            key: "b6656851",
                            get: function () {
                                return ["W tej grupie jest " + this.props.count + " " + n(this.props.count, "innych użytkowników", "innych użytkowników", "jeszcze jedna osoba", "innych użytkowników")];
                            },
                        },
                        {
                            key: "d6db6323",
                            get: function () {
                                return ["Ten wpis może zawierać nieodpowiednie treści. ", "."];
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
                                return ["Wiadomości są szyfrowane. "];
                            },
                        },
                        {
                            key: "af0bb3eb",
                            get: function () {
                                return ["Nie możesz wysyłać szyfrowanych prywatnych wiadomości do tej osoby. "];
                            },
                        },
                        {
                            key: "b9f61623",
                            get: function () {
                                return ["Nie możesz już wysyłać wiadomości do tej osoby. "];
                            },
                        },
                        {
                            key: "h27b1291",
                            get: function () {
                                return ["Ta szyfrowana rozmowa nie jest dostępna na bieżącym urządzeniu. Aby uzyskać do niej dostęp, zaloguj się na poprzednim urządzeniu. "];
                            },
                        },
                        {
                            key: "bcabe3f5",
                            get: function () {
                                return ["Nie możesz wysłać wiadomości do tej grupy, ponieważ nie jesteś zweryfikowanym użytkownikiem. ", "."];
                            },
                        },
                        {
                            key: "jdef4bc7",
                            get: function () {
                                return ["Nie możesz wysłać wiadomości do tego użytkownika, ponieważ nie jesteś zweryfikowanym użytkownikiem. ", "."];
                            },
                        },
                        {
                            key: "i005f1fd",
                            get: function () {
                                return ["Twoja odpowiedź na Fleet użytkownika ", ": "];
                            },
                        },
                        {
                            key: "b35cee41",
                            get: function () {
                                return ["Odpowiedź na Twój Fleet: "];
                            },
                        },
                        {
                            key: "dc4b75a1",
                            get: function () {
                                return ["", " wysłał/a plik GIF"];
                            },
                        },
                        {
                            key: "hcbbbb35",
                            get: function () {
                                return ["", " wysłał/a link"];
                            },
                        },
                        {
                            key: "c1e1f849",
                            get: function () {
                                return ["", " wysłał/a zdjęcie"];
                            },
                        },
                        {
                            key: "c7e2464f",
                            get: function () {
                                return ["", " wysłał/a naklejkę"];
                            },
                        },
                        {
                            key: "eee2f121",
                            get: function () {
                                return ["", " wysłał/a film"];
                            },
                        },
                        {
                            key: "be5a9617",
                            get: function () {
                                return ["", " wysłał/a wiadomość głosową"];
                            },
                        },
                        {
                            key: "e802e257",
                            get: function () {
                                return ["Użytkownik ", " udostępnił wpis"];
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
                                return ["Twoja reakcja na film użytkownika @", ": "];
                            },
                        },
                        {
                            key: "d764af97",
                            get: function () {
                                return ["Reakcja użytkownika ", " na film użytkownika @", ": "];
                            },
                        },
                        {
                            key: "ab1cdfe3",
                            get: function () {
                                return ["Twoja reakcja na film: "];
                            },
                        },
                        {
                            key: "f0cf1699",
                            get: function () {
                                return ["Reakcja użytkownika ", " na film: "];
                            },
                        },
                        {
                            key: "hec0fd4d",
                            get: function () {
                                return ["Twoja reakcja na zdjęcie użytkownika @", ": "];
                            },
                        },
                        {
                            key: "j55320df",
                            get: function () {
                                return ["Reakcja użytkownika ", " na zdjęcie użytkownika @", ": "];
                            },
                        },
                        {
                            key: "jf27606b",
                            get: function () {
                                return ["Twoja reakcja na zdjęcie: "];
                            },
                        },
                        {
                            key: "cd110359",
                            get: function () {
                                return ["Reakcja użytkownika ", " na zdjęcie: "];
                            },
                        },
                        {
                            key: "e70dcc35",
                            get: function () {
                                return ["Twoja reakcja na GIF użytkownika @", ": "];
                            },
                        },
                        {
                            key: "g1bf440b",
                            get: function () {
                                return ["Reakcja użytkownika ", " na GIF użytkownika @", ": "];
                            },
                        },
                        {
                            key: "b2da1bf9",
                            get: function () {
                                return ["Twoja reakcja na GIF: "];
                            },
                        },
                        {
                            key: "g84c0421",
                            get: function () {
                                return ["Reakcja użytkownika ", " na GIF: "];
                            },
                        },
                        {
                            key: "hc1bd66d",
                            get: function () {
                                return ["Twoja reakcja na wpis użytkownika @", ": "];
                            },
                        },
                        {
                            key: "bd3edf13",
                            get: function () {
                                return ["Reakcja użytkownika ", " na wpis użytkownika @", ": "];
                            },
                        },
                        {
                            key: "df2dc76f",
                            get: function () {
                                return ["Twoja reakcja na wpis: "];
                            },
                        },
                        {
                            key: "aba18aef",
                            get: function () {
                                return ["Reakcja użytkownika ", " na wpis: "];
                            },
                        },
                        {
                            key: "cd2e7c19",
                            get: function () {
                                return ["Twoja reakcja na link użytkownika @", ": "];
                            },
                        },
                        {
                            key: "aee9e7fb",
                            get: function () {
                                return ["Reakcja użytkownika ", " na link użytkownika @", ": "];
                            },
                        },
                        {
                            key: "f9fb1cf7",
                            get: function () {
                                return ["Twoja reakcja na link: "];
                            },
                        },
                        {
                            key: "f2bf910f",
                            get: function () {
                                return ["Reakcja użytkownika ", " na link: "];
                            },
                        },
                        {
                            key: "i6cec545",
                            get: function () {
                                return ["Twoja reakcja na wiadomość od użytkownika @", ": ", " – "];
                            },
                        },
                        {
                            key: "d6998bab",
                            get: function () {
                                return ["Reakcja użytkownika ", " na wiadomość od użytkownika @", ": ", " – "];
                            },
                        },
                        {
                            key: "cec676f3",
                            get: function () {
                                return ["Twoja reakcja: ", " – "];
                            },
                        },
                        {
                            key: "a2706f9b",
                            get: function () {
                                return ["Reakcja użytkownika ", ": ", " – "];
                            },
                        },
                        {
                            key: "ff973a65",
                            get: function () {
                                return ["Twoja reakcja na wiadomość głosową użytkownika @", ": "];
                            },
                        },
                        {
                            key: "ec2cede5",
                            get: function () {
                                return ["Reakcja użytkownika ", " na wiadomość głosową użytkownika @", ": "];
                            },
                        },
                        {
                            key: "i1d08199",
                            get: function () {
                                return ["Twoja reakcja na wiadomość głosową: "];
                            },
                        },
                        {
                            key: "d424b45f",
                            get: function () {
                                return ["Reakcja użytkownika ", " na wiadomość głosową: "];
                            },
                        },
                        {
                            key: "d6b15bbf",
                            get: function () {
                                return ["Twoja reakcja: "];
                            },
                        },
                        {
                            key: "ac0d4bc7",
                            get: function () {
                                return ["Reakcja użytkownika ", ": "];
                            },
                        },
                        {
                            key: "fa4f5b49",
                            get: function () {
                                return ["Systemy serwisu X skanują udostępniane linki i multimedia pod kątem spamu, nadużyć i innych niedozwolonych treści. Analizujemy również wzorce użycia w celu wykrywania podejrzanych zachowań i zapewnienia naszym użytkownikom komfortu oraz bezpieczeństwa. Możemy również ręcznie analizować prywatne wiadomości w celu badania zgłoszonych nadużyć i przypadków nieodpowiedniego użycia naszych usług oraz w sytuacjach, gdy zobowiązują nas do tego przepisy prawa lub żądania organów państwowych. Aby uzyskać więcej informacji, zapoznaj się z naszą ", "."];
                            },
                        },
                        {
                            key: "a66142ad",
                            get: function () {
                                return ["Tutaj będą pojawiać się zaproszenia do rozmowy od osób, których nie obserwujesz. Aby odpowiedzieć na te wiadomości, musisz zaakceptować zaproszenie. "];
                            },
                        },
                        {
                            key: "hc37d3bb",
                            get: function () {
                                return ["Kiedy odpowiadasz na pytanie, Google może zbierać i wykorzystywać informacje dotyczące Ciebie, Twojego urządzenia i przeglądarki. Zapoznaj się z ", " firmy Google."];
                            },
                        },
                        {
                            key: "eea0a14f",
                            get: function () {
                                return [this.props.formattedCount + " " + n(this.props.count, "Lubię to", "Lubię to", "Polubienie", "Polubień")];
                            },
                        },
                        {
                            key: "cca42d0b",
                            get: function () {
                                return [this.props.formattedCount + " zdję" + n(this.props.count, "cia i filmy", "ć i filmów", "cie i film", "cia i filmu")];
                            },
                        },
                        {
                            key: "a0a3adf7",
                            get: function () {
                                return [this.props.formattedCount + " wpis" + n(this.props.count, "y", "ów", "", "u")];
                            },
                        },
                        {
                            key: "e6264621",
                            get: function () {
                                return ["Nie możesz obserwować ani wyświetlać wpisów użytkownika @" + this.props.screenName + ". ", "."];
                            },
                        },
                        {
                            key: "f98ecc47",
                            get: function () {
                                return ["Czy na pewno chcesz wyświetlić te wpisy? Nie spowoduje to odblokowania użytkownika @" + this.props.screenName + ". ", "."];
                            },
                        },
                        {
                            key: "i8197603",
                            get: function () {
                                return ["Aby zgłosić naruszenie prawa własności intelektualnej, zajrzyj do ", ". Aby zgłosić inne problemy dotyczące tego produktu, przejdź do aplikacji na Androida lub iOS."];
                            },
                        },
                        {
                            key: "a21f2f79",
                            get: function () {
                                return ["Aby uzyskać więcej informacji o naruszeniach zasad dotyczących produktu, ", "."];
                            },
                        },
                        {
                            key: "ff60a139",
                            get: function () {
                                return ["Liczba: "];
                            },
                        },
                        {
                            key: "f575f533",
                            get: function () {
                                return ["Kategorie są wybierane przez użytkowników i nie są przypisywane, weryfikowane ani promowane przez zespół serwisu X. ", "."];
                            },
                        },
                        {
                            key: "cebed305",
                            get: function () {
                                return ["To konto jest powiązane z: ", "."];
                            },
                        },
                        {
                            key: "i1824ce3",
                            get: function () {
                                return ["Tylko zatwierdzeni obserwujący mogą wyświetlać wpisy użytkownika @" + this.props.screenName + ". Aby zażądać dostępu, kliknij pozycję Obserwuj. ", "."];
                            },
                        },
                        {
                            key: "da9d52d7",
                            get: function () {
                                return ["Zawieszamy konta, które naruszają "];
                            },
                        },
                        {
                            key: "b028aec5",
                            get: function () {
                                return ["Musimy dowiedzieć się, czy konto ", " w serwisie X jest Twoje. Jeśli nie, usuniemy z niego adres ", "."];
                            },
                        },
                        {
                            key: "c43645ad",
                            get: function () {
                                return ["Jeśli konto ", " w serwisie X należy do Ciebie i nie chcesz już otrzymywać powiadomień e-mail, przejdź do ", "."];
                            },
                        },
                        {
                            key: "b8e3884f",
                            get: function () {
                                return ["Usunęliśmy adres e-mail ", " z konta ", " w serwisie X. Nie będziesz już otrzymywać powiadomień dotyczących tego konta."];
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
                                return ["Ktoś mógł przez przypadek podać Twój adres e-mail podczas tworzenia konta w serwisie X, ale być może jest to celowe nadużycie. Możesz zgłosić to konto, aby pomóc nam rozpoznawać spam i usuwać go z serwisu X. ", "."];
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
                                return ["Aby w pełni wykorzystać funkcję Najpopularniejsze artykuły, spróbuj obserwować ", "."];
                            },
                        },
                        {
                            key: "dc3a6d2d",
                            get: function () {
                                return ["Obserwujesz @" + this.props.screenName + ". ", "."];
                            },
                        },
                        {
                            key: "j5668d8f",
                            get: function () {
                                return ["Podczas słuchania anonimowego nie będzie Cię widać i nie będziesz mieć możliwości uczestniczenia. ", "."];
                            },
                        },
                        {
                            key: "fafd5f6f",
                            get: function () {
                                return ["Jedną z korzyści wynikających z subskrybowania innych użytkowników jest ekskluzywny dostęp do Pokoi takich jak ten. Tylko Ty i inni subskrybenci użytkownika @" + this.props.screenName + " możecie dołączyć do tego Pokoju. ", "."];
                            },
                        },
                        {
                            key: "b1e1d521",
                            get: function () {
                                return ["Aby znów mieć możliwość dodawania uwag, zwiększ swój wynik ratingowy z " + this.props.currentImpact + " do " + this.props.ratingImpactToEarnIn + "."];
                            },
                        },
                        {
                            key: "e3a1e2a3",
                            get: function () {
                                return ["Dotyczy linku w tym wpisie (", ") i powinna być wyświetlana we wszystkich wpisach zawierających ten link"];
                            },
                        },
                        {
                            key: "eb0960b9",
                            get: function () {
                                return ["Masz pewność, że ta uwaga będzie pomocna w przypadku ", " zawierających ten obraz, nawet jeśli te wpisy dotyczą różnych rzeczy?"];
                            },
                        },
                        {
                            key: "c14fcfe5",
                            get: function () {
                                return ["Masz pewność, że ta uwaga będzie pomocna w przypadku wszystkich wpisów zawierających ten obraz, nawet jeśli te wpisy dotyczą różnych rzeczy?"];
                            },
                        },
                        {
                            key: "f8d04b49",
                            get: function () {
                                return ["Masz pewność, że ta uwaga będzie pomocna w przypadku ", " zawierających ten film, nawet jeśli te wpisy dotyczą różnych rzeczy?"];
                            },
                        },
                        {
                            key: "ef94efc3",
                            get: function () {
                                return ["Masz pewność, że ta uwaga będzie pomocna w przypadku wszystkich wpisów zawierających ten film, nawet jeśli te wpisy dotyczą różnych rzeczy?"];
                            },
                        },
                        {
                            key: "a89cdd31",
                            get: function () {
                                return ["Masz pewność, że ta uwaga będzie pomocna w przypadku ", " zawierających te multimedia, nawet jeśli te wpisy dotyczą różnych rzeczy?"];
                            },
                        },
                        {
                            key: "f19fb541",
                            get: function () {
                                return ["Masz pewność, że ta uwaga będzie pomocna w przypadku wszystkich wpisów zawierających te multimedia, nawet jeśli te wpisy dotyczą różnych rzeczy?"];
                            },
                        },
                        {
                            key: "i9e31fe5",
                            get: function () {
                                return ["Dowiedz się więcej o funkcji "];
                            },
                        },
                        {
                            key: "h14bda75",
                            get: function () {
                                return ["Żądania są anonimizowane i ", " w celu zapewnienia przejrzystości"];
                            },
                        },
                        {
                            key: "c43ef159",
                            get: function () {
                                return ["Jeśli chcesz pisać i oceniać uwagi społeczności, ", "."];
                            },
                        },
                        {
                            key: "c815dfaf",
                            get: function () {
                                return ["W celu zachowania wysokiej jakości żądań oraz zapobiegania spamowi uwag społeczności można żądać tylko za pomocą kont, do których jest przypisany zweryfikowany numer telefonu. ", "."];
                            },
                        },
                        {
                            key: "bd9cf141",
                            get: function () {
                                return ["Jako autor wpisu możesz "];
                            },
                        },
                        {
                            key: "e837f62f",
                            get: function () {
                                return ["Wartość ratingowa: " + this.props.impactDisplayNumber];
                            },
                        },
                        {
                            key: "f2bad803",
                            get: function () {
                                return ["Wartość pisarska: " + this.props.impactDisplayNumber];
                            },
                        },
                        {
                            key: "g062ed0f",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do obrazu we wpisie, który został potem usunięty, a obecnie może być wyświetlana w innych wpisach zawierających ten obraz"];
                            },
                        },
                        {
                            key: "j4f06e2f",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do tego obrazu w ", " i może być wyświetlana w innych wpisach zawierających ten obraz"];
                            },
                        },
                        {
                            key: "ida22561",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do filmu we wpisie, który został potem usunięty, a obecnie może być wyświetlana w innych wpisach zawierających ten film"];
                            },
                        },
                        {
                            key: "g68aa88d",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do tego filmu w ", " i może być wyświetlana w innych wpisach, które zawierają ten film"];
                            },
                        },
                        {
                            key: "ia62f949",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do multimediów we wpisie, który został potem usunięty, a obecnie może być wyświetlana w innych wpisach zawierających te multimedia"];
                            },
                        },
                        {
                            key: "c6eb7cbb",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do tych multimediów w ", " i może być wyświetlana w innych wpisach, które zawierają te multimedia"];
                            },
                        },
                        {
                            key: "f9b81033",
                            get: function () {
                                return ["Uwaga została pierwotnie napisana w odniesieniu do wpisu, który został potem usunięty, a obecnie może być wyświetlana w innych wpisach zawierających link do "];
                            },
                        },
                        {
                            key: "de254823",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do ", ". Może wyświetlać się w innych wpisach, które zawierają link "];
                            },
                        },
                        {
                            key: "de5532bd",
                            get: function () {
                                return ["Może być wyświetlana w ", " zawierających ten film, jeśli użytkownicy zgodzą się, że powinna być wyświetlana."];
                            },
                        },
                        {
                            key: "ib6805bd",
                            get: function () {
                                return ["Może być wyświetlana we wpisach zawierających ten film, jeśli użytkownicy zgodzą się, że powinna być wyświetlana."];
                            },
                        },
                        {
                            key: "g185d44d",
                            get: function () {
                                return ["Może być wyświetlana w ", " zawierających ten obraz, jeśli użytkownicy zgodzą się, że powinna być wyświetlana."];
                            },
                        },
                        {
                            key: "aeebdd99",
                            get: function () {
                                return ["Może być wyświetlana we wpisach zawierających ten obraz, jeśli użytkownicy zgodzą się, że powinna być wyświetlana."];
                            },
                        },
                        {
                            key: "d54bfbd9",
                            get: function () {
                                return ["Może być wyświetlana w ", " zawierających te multimedia, jeśli użytkownicy zgodzą się, że powinna być wyświetlana."];
                            },
                        },
                        {
                            key: "a9efbf0f",
                            get: function () {
                                return ["Może być wyświetlana we wpisach zawierających te multimedia, jeśli użytkownicy zgodzą się, że powinna być wyświetlana."];
                            },
                        },
                        {
                            key: "jef71e81",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do filmu we wpisie, który został potem usunięty, a obecnie jest wyświetlana w ", " zawierających ten film"];
                            },
                        },
                        {
                            key: "ie594609",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do tego filmu w ", " i jest wyświetlana w ", ", które zawierają ten film"];
                            },
                        },
                        {
                            key: "a48e0b6b",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do filmu we wpisie, który został potem usunięty, a obecnie może być wyświetlana w ", " zawierających ten film"];
                            },
                        },
                        {
                            key: "a0e626a3",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do tego filmu w ", " i może być wyświetlana w ", ", które zawierają ten film"];
                            },
                        },
                        {
                            key: "fcd2eeeb",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do obrazu we wpisie, który został potem usunięty, a obecnie jest wyświetlana w ", " zawierających ten obraz"];
                            },
                        },
                        {
                            key: "j300ac63",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do tego obrazu w ", " i jest wyświetlana w ", ", które zawierają ten obraz"];
                            },
                        },
                        {
                            key: "bf532f23",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do obrazu we wpisie, który został potem usunięty, a obecnie może być wyświetlana w ", " zawierających ten obraz"];
                            },
                        },
                        {
                            key: "bda86c55",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do tego obrazu w ", " i może być wyświetlana w ", ", które zawierają ten obraz"];
                            },
                        },
                        {
                            key: "a13701bd",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do multimediów we wpisie, który został potem usunięty, a obecnie jest wyświetlana w ", " zawierających te multimedia"];
                            },
                        },
                        {
                            key: "e2a0a791",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do tych multimediów w ", " i jest wyświetlana w ", ", które zawierają te multimedia"];
                            },
                        },
                        {
                            key: "b8e4bb0b",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do multimediów we wpisie, który został potem usunięty, a obecnie może być wyświetlana w ", " zawierających te multimedia"];
                            },
                        },
                        {
                            key: "hada7e59",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do tych multimediów w ", " i może być wyświetlana w ", ", które zawierają te multimedia"];
                            },
                        },
                        {
                            key: "e8969de9",
                            get: function () {
                                return ["Może wyświetlać się we ", ", które zawierają link "];
                            },
                        },
                        {
                            key: "a389fb7b",
                            get: function () {
                                return ["Może wyświetlać się we ", ", które zawierają link "];
                            },
                        },
                        {
                            key: "gd8d8205",
                            get: function () {
                                return ["Uwaga pierwotnie dotyczyła wpisu, który został potem usunięty. Obecnie jest wyświetlana w ", " zawierających link do ", "."];
                            },
                        },
                        {
                            key: "i981a661",
                            get: function () {
                                return ["Uwaga pierwotnie dotyczyła ", ", a obecnie jest wyświetlana w ", " zawierających link do "];
                            },
                        },
                        {
                            key: "jceb2edb",
                            get: function () {
                                return ["Uwaga pierwotnie dotyczyła wpisu, który został potem usunięty. Obecnie może być wyświetlana w ", " zawierających link do ", "."];
                            },
                        },
                        {
                            key: "f20a22a1",
                            get: function () {
                                return ["Uwaga została pierwotnie dodana do ", ". Obecnie może być wyświetlana w ", " zawierających link do ", "."];
                            },
                        },
                        {
                            key: "f43e2fdf",
                            get: function () {
                                return ["Pokaż małej eksperymentalnej grupie w serwisie X · wyświetlenia: ponad " + this.props.impressionTruncated];
                            },
                        },
                        {
                            key: "j72bc9ab",
                            get: function () {
                                return ["Pokaż małej eksperymentalnej grupie w serwisie X"];
                            },
                        },
                        {
                            key: "d60e4375",
                            get: function () {
                                return ["Pokaż w serwisie X · wyświetlenia: ponad " + this.props.impressionTruncated];
                            },
                        },
                        {
                            key: "bf62daf1",
                            get: function () {
                                return ["Wyświetlane w serwisie X"];
                            },
                        },
                        {
                            key: "i8fa1313",
                            get: function () {
                                return ["Oceny są anonimowe i widoczne dla wszystkich użytkowników w celu zapewnienia przejrzystości. Dowiedz się więcej na temat ", "."];
                            },
                        },
                        {
                            key: "had203a9",
                            get: function () {
                                return ["Oceniłeś/aś tę uwagę jako ", "."];
                            },
                        },
                        {
                            key: "h42a21df",
                            get: function () {
                                return ["Oceniłeś/aś tę uwagę jako ", "."];
                            },
                        },
                        {
                            key: "c3d1a1b1",
                            get: function () {
                                return ["Oceniłeś/aś tę uwagę jako ", "."];
                            },
                        },
                        {
                            key: "c7f250eb",
                            get: function () {
                                return ["Czy ta uwaga ma być wyświetlana w ", " zawierających link do ", "?"];
                            },
                        },
                        {
                            key: "bc2fde51",
                            get: function () {
                                return ["Czy ta uwaga ma być wyświetlana w ", " zawierających ten sam film?"];
                            },
                        },
                        {
                            key: "e80d1f67",
                            get: function () {
                                return ["Czy ta uwaga ma być wyświetlana w ", " zawierających ten sam obraz?"];
                            },
                        },
                        {
                            key: "c692f6b5",
                            get: function () {
                                return ["Czy ta uwaga ma być wyświetlana w ", " zawierających te same multimedia?"];
                            },
                        },
                        {
                            key: "g46e2949",
                            get: function () {
                                return ["Czy ta uwaga ma być wyświetlana we wszystkich wpisach zawierających link do ", "?"];
                            },
                        },
                        {
                            key: "c57661e9",
                            get: function () {
                                return ["Czy ta uwaga ma być wyświetlana we wszystkich wpisach zawierających ten sam film?"];
                            },
                        },
                        {
                            key: "bb286921",
                            get: function () {
                                return ["Czy ta uwaga ma być wyświetlana we wszystkich wpisach zawierających ten sam obraz?"];
                            },
                        },
                        {
                            key: "df397f55",
                            get: function () {
                                return ["Czy ta uwaga ma być wyświetlana we wszystkich wpisach zawierających te same multimedia?"];
                            },
                        },
                        {
                            key: "b936a16b",
                            get: function () {
                                return ["Masz pomysły lub sugestie dotyczące programu Uwagi Społeczności? "];
                            },
                        },
                        {
                            key: "e77dac87",
                            get: function () {
                                return ["Pokaż jeszcze " + this.props.remainingCount + " wpis" + n(this.props.remainingCount, "y cytowane", "ów cytowanych", " cytowany", "u cytowanego") + " przez osoby żądające"];
                            },
                        },
                        {
                            key: "if0d6dd7",
                            get: function () {
                                return ["Uczestnicy programu Uwagi Społeczności korzystają z aliasów · "];
                            },
                        },
                        {
                            key: "f49cbf83",
                            get: function () {
                                return ["To jest nowa funkcja programu Uwagi Społeczności – "];
                            },
                        },
                        {
                            key: "a94c6db7",
                            get: function () {
                                return ["Zwiększ swoją wartość ratingową z " + this.props.currentRatingImpact + " do " + this.props.requiredRatingImpact + "."];
                            },
                        },
                        {
                            key: "f52f0cbd",
                            get: function () {
                                return ["Usunięte Notatki: " + this.props.num];
                            },
                        },
                        {
                            key: "ccdfbd75",
                            get: function () {
                                return ["Aby odblokować możliwość dodawania uwag, musisz uzyskać wynik " + this.props.requiredRatingImpact];
                            },
                        },
                        {
                            key: "a32c38ad",
                            get: function () {
                                return ["Chcesz dodawać uwagi? Minimalna wymagana wartość ratingowa to " + this.props.requiredRatingImpact + "."];
                            },
                        },
                        {
                            key: "d458f69d",
                            get: function () {
                                return ["W ramach programu Uwagi Społeczności zachowujemy status usuniętych uwag, aby dokładniej określić reputację autora i oceniających. "];
                            },
                        },
                        {
                            key: "i42495ad",
                            get: function () {
                                return ["Kontekst piszą osoby używające serwisu X i jest on wyświetlany, gdy inne osoby ocenią go jako pomocny. ", "."];
                            },
                        },
                        {
                            key: "c475a5d3",
                            get: function () {
                                return ["Korzystanie ze zbiorów danych podlega warunkom określonym w Umowie dla programistów i Zasadach współpracy z programistami. Klikając ikonę Pobierz, akceptujesz ", "."];
                            },
                        },
                        {
                            key: "g19fcc5b",
                            get: function () {
                                return ["Plik nr " + this.props.fileIndex + " z " + this.props.totalFiles];
                            },
                        },
                        {
                            key: "e7e44bab",
                            get: function () {
                                return ["Spróbuj wyszukać coś innego lub sprawdź swoje ", ", aby dowiedzieć się, czy chronią Cię one przed wyświetlaniem nieodpowiednich treści."];
                            },
                        },
                        {
                            key: "b3a3ce8d",
                            get: function () {
                                return ["Ostatnia aktywność: ", " temu"];
                            },
                        },
                        {
                            key: "d46c6e8f",
                            get: function () {
                                return ["Czy na pewno chcesz dodać użytkownika ", " do zespołu moderatorów?"];
                            },
                        },
                        {
                            key: "c3a1f2bf",
                            get: function () {
                                return ["Czy na pewno chcesz usunąć użytkownika ", " z zespołu moderatorów?"];
                            },
                        },
                        {
                            key: "c2696cdf",
                            get: function () {
                                return ["Aby przejść dalej, wpisz "];
                            },
                        },
                        {
                            key: "b160df39",
                            get: function () {
                                return ["Moderator ", " ukrył wpis"];
                            },
                        },
                        {
                            key: "h1513297",
                            get: function () {
                                return ["Moderator ", " przypiął wpis"];
                            },
                        },
                        {
                            key: "e523e9f1",
                            get: function () {
                                return ["Moderator ", " odpiął wpis"];
                            },
                        },
                        {
                            key: "g93119e7",
                            get: function () {
                                return ["Moderator ", " odkrył wpis"];
                            },
                        },
                        {
                            key: "c6e18a45",
                            get: function () {
                                return ["Moderator ", " usunął członka"];
                            },
                        },
                        {
                            key: "ef3b57ef",
                            get: function () {
                                return ["Moderator ", " przywrócił członka"];
                            },
                        },
                        {
                            key: "e7878d67",
                            get: function () {
                                return ["Użytkownik ", " dołączył do tej grupy dyskusyjnej"];
                            },
                        },
                        {
                            key: "hd2489bb",
                            get: function () {
                                return ["Użytkownik ", " opuścił tę grupę dyskusyjną"];
                            },
                        },
                        {
                            key: "b4aa9d7b",
                            get: function () {
                                return ["Moderator ", " zatwierdził żądanie użytkownika"];
                            },
                        },
                        {
                            key: "c5900395",
                            get: function () {
                                return ["Moderator ", " odrzucił żądanie użytkownika"];
                            },
                        },
                        {
                            key: "g561eb89",
                            get: function () {
                                return ["Moderator ", " ponownie zatwierdził żądanie użytkownika"];
                            },
                        },
                        {
                            key: "j5602f3b",
                            get: function () {
                                return ["Zgłoszone przez ", " oraz "];
                            },
                        },
                        {
                            key: "dd132edd",
                            get: function () {
                                return ["Zgłoszone przez "];
                            },
                        },
                        {
                            key: "je0779b7",
                            get: function () {
                                return ["Zgłoszone przez "];
                            },
                        },
                        {
                            key: "a0071f71",
                            get: function () {
                                return ["Ukryto wpis użytkownika @"];
                            },
                        },
                        {
                            key: "c4ec9d43",
                            get: function () {
                                return ["Zachowano wpis użytkownika @"];
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
                                return ["Utworzono " + this.props.date + ", autor: "];
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
                                return ["Aby używać tej funkcji, przełącz się do konta, które należy do Ciebie.\n\nJako współużytkownik możesz wysyłać prywatne wiadomości, publikować wpisy i tworzyć listy oraz je wyświetlać.\n\nStaramy się na bieżąco ulepszać funkcję udzielania uprawnienia. ", "."];
                            },
                        },
                        {
                            key: "g29b68f9",
                            get: function () {
                                return ["Aby używać tej funkcji, przełącz się do konta, które należy do Ciebie.\n\nJako administrator możesz wysyłać prywatne wiadomości, publikować wpisy i tworzyć listy oraz je wyświetlać. Możesz również zapraszać i usuwać współużytkowników konta oraz wyświetlać analizy wpisów.\n\nStaramy się na bieżąco ulepszać funkcję udzielania uprawnienia. ", "."];
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
                                return ["", ", aby zobaczyć więcej informacji o tej ofercie pracy"];
                            },
                        },
                        {
                            key: "ie9320f7",
                            get: function () {
                                return ["Zacznij obserwować oferty pracy „", " (", ")” na swojej osi czasu"];
                            },
                        },
                        {
                            key: "c70aad4b",
                            get: function () {
                                return ["Wyświetlane oferty pracy: ", " (", ")"];
                            },
                        },
                        {
                            key: "cc70dc63",
                            get: function () {
                                return ["Wyświetlenie wpisów nie spowoduje odblokowania użytkownika @" + this.props.screenName + ". "];
                            },
                        },
                        {
                            key: "d6c6deaf",
                            get: function () {
                                return ["Kup w przedsprzedaży za "];
                            },
                        },
                        {
                            key: "gbef9649",
                            get: function () {
                                return ["", " możesz dowiedzieć się więcej o naszych programach monetyzacji oraz zasadach."];
                            },
                        },
                        {
                            key: "da2a091b",
                            get: function () {
                                return ["Kupując, akceptujesz nasze ", " i ", ". Zgodnie z Warunkami subskrypcje są odnawiane automatycznie do momentu anulowania. Subskrypcję można anulować w dowolnym momencie."];
                            },
                        },
                        {
                            key: "c23c08c9",
                            get: function () {
                                return ["Kupując, akceptujesz nasze ", " i ", "."];
                            },
                        },
                        {
                            key: "d39ad44d",
                            get: function () {
                                return ["W tym miejscu znajdziesz polubienia, wzmianki, wpisy podane dalej i wiele innych informacji pochodzących ze zweryfikowanych kont. ", "."];
                            },
                        },
                        {
                            key: "b004e8bf",
                            get: function () {
                                return ["Więcej informacji na temat dostępów aplikacji zewnętrznych znajdziesz w ", "."];
                            },
                        },
                        {
                            key: "afd52f45",
                            get: function () {
                                return ["Autor: ", ". Przeczytaj ", " i ", " " + this.props.orgName];
                            },
                        },
                        {
                            key: "b88304a3",
                            get: function () {
                                return ["Wyślij wiadomość do użytkownika ", ", aby uzyskać pomoc techniczną."];
                            },
                        },
                        {
                            key: "j766b689",
                            get: function () {
                                return ["", ", aby rozpocząć."];
                            },
                        },
                        {
                            key: "ef7ce733",
                            get: function () {
                                return ["Zsynchronizowane z: "];
                            },
                        },
                        {
                            key: "i958b2bd",
                            get: function () {
                                return ["Udostępnione od: "];
                            },
                        },
                        {
                            key: "b2c03e03",
                            get: function () {
                                return ["Wszelkie pytania dotyczące X Hiring można kierować na adres ", "."];
                            },
                        },
                        {
                            key: "c57cd3a3",
                            get: function () {
                                return ["(Jeśli reprezentujesz organizację, ", ")"];
                            },
                        },
                        {
                            key: "bec92f3b",
                            get: function () {
                                return ["Rozpoczynając korzystanie z ", " oraz subskrypcję, akceptujesz nasze ", ". Po zakończeniu okresu korzystania z " + this.props.numberOfDays + "-dniowej bezpłatnej wersji próbnej zaczniemy naliczać Ci opłaty zgodnie z rocznym lub miesięcznym planem, który został przez Ciebie wybrany podczas rejestracji, chyba że anulujesz subskrypcję w trakcie okresu korzystania z " + this.props.numberOfDays + "-dniowej bezpłatnej wersji próbnej. Zgodnie z Postanowieniami, subskrypcje są odnawiane automatycznie, dopóki nie zostaną anulowane. ", ". Aby uniknąć dodatkowych opłat, anuluj subskrypcję w dowolnym momencie co najmniej 24 godziny przed odnowieniem. Do rozpoczęcia subskrypcji wymagany jest zweryfikowany numer telefonu. Jeśli subskrypcja została kupiona za pośrednictwem innej platformy, zarządzaj nią na tej platformie."];
                            },
                        },
                        {
                            key: "ca87939f",
                            get: function () {
                                return ["Tworząc subskrypcję, akceptujesz nasze ", ". Subskrypcje są odnawiane automatycznie do momentu anulowania, tak jak opisano w ", ". ", ". Aby uniknąć dodatkowych opłat, anuluj subskrypcję w dowolnym momencie co najmniej 24 godziny przed odnowieniem. Podwyższenie poziomu do poziomu o wyższej cenie spowoduje, że kredyt na pozostałą część poprzedniej subskrypcji trafi na Twoje konto i będzie automatycznie używany na potrzeby przyszłych płatności. Twoja nowa subskrypcja zacznie działać natychmiast. Do utworzenia subskrypcji wymagany jest zweryfikowany numer telefonu."];
                            },
                        },
                        {
                            key: "ed2a6ba9",
                            get: function () {
                                return ["Tworząc subskrypcję, akceptujesz nasze ", ". Subskrypcje są odnawiane automatycznie do momentu anulowania, tak jak opisano w ", ". ", ". Aby uniknąć dodatkowych opłat, anuluj subskrypcję w dowolnym momencie co najmniej 24 godziny przed odnowieniem. Obniżenie poziomu spowoduje, że Twoja bieżąca subskrypcja i skojarzone z nią funkcje zostaną natychmiast przełączone do nowego poziomu subskrypcji. Nie otrzymasz zwrotu kosztów żadnej części poprzedniej subskrypcji, chyba że wymagają tego przepisy prawa. Natychmiast zostanie Ci też naliczona opłata zgodna z ceną nowego poziomu. Do utworzenia subskrypcji wymagany jest zweryfikowany numer telefonu."];
                            },
                        },
                        {
                            key: "db638a21",
                            get: function () {
                                return ["Tworząc subskrypcję, akceptujesz nasze ", ". Subskrypcje są odnawiane automatycznie do momentu anulowania, tak jak opisano w ", ". ", ". Aby uniknąć dodatkowych opłat, anuluj subskrypcję w dowolnym momencie co najmniej 24 godziny przed odnowieniem. Po zmianie planu Twoja nowa subskrypcja zacznie działać natychmiast. Kredyt na pozostałą część poprzedniej subskrypcji trafi na Twoje konto i będzie automatycznie używany na potrzeby przyszłych płatności. Do utworzenia subskrypcji wymagany jest zweryfikowany numer telefonu."];
                            },
                        },
                        {
                            key: "b2138d0f",
                            get: function () {
                                return ["Subskrybując, akceptujesz nasze ", ". Subskrypcje są odnawiane automatycznie do momentu anulowania, tak jak opisano w ", ". ", ". Aby uniknąć dodatkowych opłat, anuluj subskrypcję w dowolnym momencie co najmniej 24 godziny przed odnowieniem. Podniesienie poziomu spowoduje, że Twoja bieżąca subskrypcja i skojarzone z nią funkcje zostaną natychmiast przełączone do nowego poziomu subskrypcji. Natychmiast zostanie Ci naliczona opłata równa cenie nowego poziomu, ale pozostała proporcjonalna część z Twojego aktualnego cyklu rozliczeniowego zostanie wykorzystana na potrzeby opłacania dzisiejszej łącznej opłaty. Nie otrzymasz zwrotu kosztów żadnej części poprzedniej subskrypcji, chyba że jest to wymagane przez prawo."];
                            },
                        },
                        {
                            key: "c2255911",
                            get: function () {
                                return ["Subskrybując, akceptujesz nasze ", ". Subskrypcje są odnawiane automatycznie do momentu anulowania, tak jak opisano w ", ". ", ". Aby uniknąć dodatkowych opłat, anuluj subskrypcję w dowolnym momencie co najmniej 24 godziny przed odnowieniem. Obniżenie poziomu spowoduje, że Twoja bieżąca subskrypcja będzie aktywna do następnego cyklu rozliczeniowego, w którym rozpocznie się Twoja nowa subskrypcja. Począwszy od następnego cyklu rozliczeniowego będą Ci naliczane opłaty w wysokości ceny nowego poziomu."];
                            },
                        },
                        {
                            key: "e647175f",
                            get: function () {
                                return ["Subskrybując, akceptujesz nasze ", ". Subskrypcje są odnawiane automatycznie do momentu anulowania, tak jak opisano w ", ". ", ". Aby uniknąć dodatkowych opłat, anuluj subskrypcję w dowolnym momencie co najmniej 24 godziny przed odnowieniem. W przypadku przełączenia nadal będziesz mieć możliwość korzystania z funkcji skojarzonych z Twoim poziomem. Natychmiast zostanie Ci naliczona opłata równa cenie nowego planu rocznego, a pozostała proporcjonalna część salda Twojego miesięcznego cyklu rozliczeniowego zostanie wykorzystana na potrzeby opłacenia dzisiejszej łącznej opłaty."];
                            },
                        },
                        {
                            key: "eaccb9c9",
                            get: function () {
                                return ["Subskrybując, akceptujesz nasze ", ". Subskrypcje są odnawiane automatycznie do momentu anulowania, tak jak opisano w ", ". ", ". Aby uniknąć dodatkowych opłat, anuluj subskrypcję w dowolnym momencie co najmniej 24 godziny przed odnowieniem. W przypadku przełączenia nadal będziesz mieć możliwość korzystania z funkcji skojarzonych z Twoim poziomem. Natychmiast zostanie Ci naliczona opłata równa cenie miesięcznej aktualnie używanego poziomu, ale pozostała proporcjonalna część z Twojej płatności rocznej będzie wykorzystywana na potrzeby opłacania opłat miesięcznych, dopóki się nie wyczerpie."];
                            },
                        },
                        {
                            key: "db11f87d",
                            get: function () {
                                return ["Subskrybuj za ", " " + this.props.newPrice + "/" + this.props.interval];
                            },
                        },
                        {
                            key: "e4219e13",
                            get: function () {
                                return ["", " " + this.props.newPrice + "/" + this.props.interval + " (rozliczenie roczne)"];
                            },
                        },
                        {
                            key: "eeb5fb11",
                            get: function () {
                                return ["Dane adresowe są udostępniane firmie Google. Więcej informacji znajdziesz na stronach ", " i ", "."];
                            },
                        },
                        {
                            key: "f9b1387f",
                            get: function () {
                                return ["Tylko administratorzy i moderatorzy Grup dyskusyjnych mogą wyróżniać je na swoich profilach. Chcesz "];
                            },
                        },
                        {
                            key: "ef72b01b",
                            get: function () {
                                return ["Aby znaleźć centrum interwencji kryzysowej w Twojej okolicy, zajrzyj na stronę ", "."];
                            },
                        },
                        {
                            key: "e6c21d5b",
                            get: function () {
                                return ["Jeśli czujesz, że może grozić Ci niebezpieczeństwo, skontaktuj się z lokalnymi organami ścigania. W razie pytań ich przedstawiciele mogą odnieść się do naszych ", "."];
                            },
                        },
                        {
                            key: "e1d95725",
                            get: function () {
                                return ["W dowolnej chwili możesz przestać obserwować wybrany temat w zakładce ", "."];
                            },
                        },
                        {
                            key: "gd67df1d",
                            get: function () {
                                return ["Ostania aktualizacja: "];
                            },
                        },
                        {
                            key: "e420d1ed",
                            get: function () {
                                return ["Inni użytkownicy nie dowiedzą się o zmianach dotyczących Twojego kręgu. Dodane osoby będą widzieć Twoje wcześniejsze wpisy w kręgu. ", "."];
                            },
                        },
                        {
                            key: "gc31d3e9",
                            get: function () {
                                return ["Liczba wyświetleń tego wpisu. Aby dowiedzieć się więcej, odwiedź ", "."];
                            },
                        },
                        {
                            key: "he0e6ed7",
                            get: function () {
                                return ["Liczba wyświetleń tego wpisu. Aktualna liczba wyświetleń może pojawić się po paru minutach. Aby dowiedzieć się więcej, odwiedź ", "."];
                            },
                        },
                        {
                            key: "c780f52b",
                            get: function () {
                                return ["Liczba wyświetleń tego wpisu jest niedostępna. Aby dowiedzieć się więcej, odwiedź ", "."];
                            },
                        },
                        {
                            key: "fc2dfb3f",
                            get: function () {
                                return ["Klikając pozycję Utwórz promocję, potwierdzasz, że znasz i akceptujesz ", " oraz ", "."];
                            },
                        },
                        {
                            key: "fcf4b2a5",
                            get: function () {
                                return ["Klikając pozycję Utwórz promocję, potwierdzasz, że znasz i akceptujesz ", "."];
                            },
                        },
                        {
                            key: "f54ad505",
                            get: function () {
                                return ["Niektóre opcje targetowania są niedostępne dla tego konta reklamowego zgodnie z naszymi ", "."];
                            },
                        },
                        {
                            key: "b3816c8b",
                            get: function () {
                                return ["Klikając pozycję Promuj wpis, potwierdzasz przeczytanie i akceptację ", " oraz ", "."];
                            },
                        },
                        {
                            key: "ee48f791",
                            get: function () {
                                return ["Klikając pozycję Promuj wpis, potwierdzasz przeczytanie i akceptację ", "."];
                            },
                        },
                        {
                            key: "f5a533b1",
                            get: function () {
                                return ["Ten wpis nie ma żadnych ukrytych odpowiedzi, ale chronione wpisy mogły zostać odfiltrowane. ", "."];
                            },
                        },
                        {
                            key: "cd5e4a77",
                            get: function () {
                                return ["Klikając poniżej w celu dokonania tego zakupu, akceptujesz ", "."];
                            },
                        },
                        {
                            key: "aa4026bf",
                            get: function () {
                                return ["To sprawi, że użytkownik ", " nie doda Cię do żadnej listy, w tym do tej."];
                            },
                        },
                        {
                            key: "fca299bb",
                            get: function () {
                                return ["Udostępnij swój adres e-mail użytkownikowi " + this.props.creatorName + ". Akceptując, wyrażasz zgodę na udostępnienie tego adresu e-mail twórcy treści na potrzeby komunikacji poza naszą platformą oraz akceptujesz ", "."];
                            },
                        },
                        {
                            key: "ccd45e5f",
                            get: function () {
                                return ["Daj w prezencie roczną subskrypcję " + this.props.tier + " użytkownikowi @" + this.props.screenName + " za " + this.props.price + ". Po zakończeniu realizacji płatności odbiorca otrzyma powiadomienie o wysłanym prezencie."];
                            },
                        },
                        {
                            key: "h7f3e309",
                            get: function () {
                                return ["Opłata w wysokości ceny dawanej w prezencie subskrypcji jest pobierana w chwili zakupu i nie podlega zwrotowi. Ta subskrypcja jest jednorazowa, nie można jej zamienić na inną ani połączyć z inną ofertą, a także nie ma ona wartości pieniężnej. Subskrypcja zostanie aktywowana, gdy zespół serwisu X wykona przegląd i przypisze ją do odbiorcy, który musi potwierdzić nasze ", " oraz polityki. Jeśli odbiorca nie będzie spełniał wymagań dotyczących uprawnienia do subskrypcji, anuluje subskrypcję albo odrzuci nasze postanowienia i polityki, nie będziesz mieć możliwości ponownego wykorzystania prezentu ani odzyskania jego kosztów. Mogą zostać naliczone odpowiednie podatki. Postanowienia mogą ulec zmianie. ", "."];
                            },
                        },
                        {
                            key: "j0a20bf1",
                            get: function () {
                                return ["Organizacje są oznaczone złotym znaczkiem, a użytkownicy indywidualni niebieskim. Użycie nieodpowiedniego oznaczenia spowoduje anulowanie subskrypcji bez zwrotu środków zgodnie z naszymi ", "."];
                            },
                        },
                        {
                            key: "j1b50481",
                            get: function () {
                                return ["Organizacje mają kwadratowe awatary, a użytkownicy indywidualni okrągłe. Użycie nieodpowiedniego oznaczenia spowoduje anulowanie subskrypcji bez zwrotu środków zgodnie z naszymi ", "."];
                            },
                        },
                        {
                            key: "ebebbb93",
                            get: function () {
                                return ["Skonfiguruj konto używane do tworzenia ofert pracy, które są promowane w portalu ", "."];
                            },
                        },
                        {
                            key: "bd5a78a1",
                            get: function () {
                                return ["Nie znaleziono żadnych kwalifikujących się kont. Na stronie ", " możesz sprawdzić dalsze kroki."];
                            },
                        },
                        {
                            key: "b94bf5f5",
                            get: function () {
                                return ["Anulowanie opcji Zweryfikowane Organizacje spowoduje natychmiastowe usunięcie złotego znaczka."];
                            },
                        },
                        {
                            key: "d4109f93",
                            get: function () {
                                return ["Dodatkowo wszystkie konta powiązane zostaną natychmiast usunięte oraz stracą złote i niebieskie znaczki, a także odznaki kont powiązanych."];
                            },
                        },
                        {
                            key: "c5b26ddf",
                            get: function () {
                                return ["Anulowanie spowoduje natychmiastowe usunięcie znaczków oraz wszystkich płatnych funkcji z konta Twojej organizacji oraz wszystkich kont powiązanych."];
                            },
                        },
                        {
                            key: "h06e7c87",
                            get: function () {
                                return ["Jeśli podejmiesz dzisiaj decyzję, aby nie rezygnować, przez następne " + this.props.totalDays + " dni co " + this.props.daysOfCouponInterval + " dni będziemy przekazywać Ci " + this.props.creditAmount + " USD dodatkowego bezpłatnego kredytu reklamowego na Twój portal. Gdy wybierzesz opcję skorzystania z tej oferty, nasz zespół pomocy technicznej skontaktuje się z Tobą, aby pomóc Ci jak najlepiej wykorzystać ten kredyt na potrzeby Twojej organizacji."];
                            },
                        },
                        {
                            key: "b602e60f",
                            get: function () {
                                return ["Jeśli podejmiesz dzisiaj decyzję, aby nie rezygnować, w ciągu następnych " + this.props.daysToWaitForFirstRedeemable + " dni przekażemy Ci " + this.props.creditAmount + " USD dodatkowego bezpłatnego kredytu reklamowego na Twój portal. Gdy wybierzesz opcję skorzystania z tej oferty, nasz zespół pomocy technicznej skontaktuje się z Tobą, aby pomóc Ci jak najlepiej wykorzystać ten kredyt na potrzeby Twojej organizacji."];
                            },
                        },
                        {
                            key: "fa5bbb59",
                            get: function () {
                                return ["Jest to oferta jednorazowa, która nie będzie ponownie dostępna."];
                            },
                        },
                        {
                            key: "ceadabdd",
                            get: function () {
                                return ["Nadal możesz wrócić i skorzystać z jednorazowej oferty, która nie będzie ponawiana. Nie otrzymasz zwrotu środków za dni pozostałe do końca bieżącego okresu rozliczeniowego Twojej subskrypcji. Po tym okresie nie będą naliczane Ci kolejne opłaty."];
                            },
                        },
                        {
                            key: "e269f39d",
                            get: function () {
                                return ["Uczestnicy programu Zweryfikowane Organizacje otrzymują w serwisie X priorytetową pomoc techniczną w zakresie wszystkich problemów. Niezależnie od natury problemu możemy pomóc w jak najszybszym rozwiązaniu go. Chcesz zamówić rozmowę telefoniczną z członkiem zespołu ds. programu Zweryfikowane Organizacje i porozmawiać z nim na temat potrzebnej pomocy?"];
                            },
                        },
                        {
                            key: "e9565acf",
                            get: function () {
                                return ["Jeśli anulujesz, natychmiast utracisz dostęp do tego bezpłatnego kredytu reklamowego oraz wszystkich przyszłych bezpłatnych kredytów reklamowych, które będą oferowane w ramach posiadanej przez Ciebie subskrypcji. Zachęcamy do pozostania i zrealizowania tej korzyści, ponieważ została już ona przez Ciebie opłacona."];
                            },
                        },
                        {
                            key: "if6e211f",
                            get: function () {
                                return ["Aby zwiększyć swój limit, skontaktuj się z pomocą techniczną premium dla zweryfikowanych użytkowników, która jest dostępna ", "."];
                            },
                        },
                        {
                            key: "a994ab9b",
                            get: function () {
                                return ["Każde dodatkowe konto powiązane kosztuje ", "/"];
                            },
                        },
                        {
                            key: "j4f386b7",
                            get: function () {
                                return ["", " rocznie przez pierwszy rok. Następnie ", " rocznie."];
                            },
                        },
                        {
                            key: "ce9e7f1b",
                            get: function () {
                                return ["Każde dodatkowe konto powiązane kosztuje ", " za nazwę użytkownika rocznie. ", "."];
                            },
                        },
                        {
                            key: "dc107867",
                            get: function () {
                                return ["", "/", " (", ") + ", " za nazwę użytkownika na ", " (", "). ", "."];
                            },
                        },
                        {
                            key: "j02b65f7",
                            get: function () {
                                return ["", "/", " (", "). ", "."];
                            },
                        },
                        {
                            key: "a75ca455",
                            get: function () {
                                return ["Otrzymasz 30% zniżki na plany roczne i do 12 000 USD bezpłatnego kredytu reklamowego, jeśli zasubskrybujesz przed "];
                            },
                        },
                        {
                            key: "f5b357b5",
                            get: function () {
                                return ["Wersja Pełny dostęp kosztuje ", "/", " (", "). Cena każdego dodatkowego konta powiązanego to ", " za nazwę użytkownika na ", " (", "). ", "."];
                            },
                        },
                        {
                            key: "i83d2543",
                            get: function () {
                                return ["Wersja Basic kosztuje ", "/", " (", "). ", "."];
                            },
                        },
                        {
                            key: "gc723de9",
                            get: function () {
                                return ["Klikając przycisk Subskrybuj, akceptujesz nasze ", ". Subskrypcje są odnawiane automatycznie do momentu anulowania. Wszystkie konta, które mają być objęte subskrypcją, muszą zostać ręcznie zatwierdzone."];
                            },
                        },
                        {
                            key: "ha873011",
                            get: function () {
                                return ["Klikając przycisk Subskrybuj, akceptujesz nasze ", ". Subskrypcje są odnawiane automatycznie do momentu anulowania. Konta używane na potrzeby rejestracji są analizowane pod kątem autentyczności. Jeśli konto użyte na potrzeby rejestracji nie będzie kontem organizacji, wniosek zostanie odrzucony, a środki nie zostaną zwrócone."];
                            },
                        },
                        {
                            key: "d4918c71",
                            get: function () {
                                return ["+ Przez ograniczony czas kredyt reklamowy w wysokości ", ", który możesz wykorzystać w ", " na koncie swojej organizacji lub kontach powiązanych oraz dedykowana pomoc techniczna."];
                            },
                        },
                        {
                            key: "a87b1795",
                            get: function () {
                                return ["+ Przez ograniczony czas kredyt reklamowy w wysokości ", ", który możesz wykorzystać w ", " na koncie swojej organizacji, oraz dedykowana pomoc techniczna."];
                            },
                        },
                        {
                            key: "fb6fa495",
                            get: function () {
                                return ["", this.props.activeTierName + " w cenie " + this.props.activePriceLabel];
                            },
                        },
                        {
                            key: "fcbe756d",
                            get: function () {
                                return ["", this.props.targetTierName + " w cenie " + this.props.targetPriceLabel];
                            },
                        },
                        {
                            key: "c9384b33",
                            get: function () {
                                return ["Ta zmiana subskrypcji nie jest tutaj obsługiwana. Skontaktuj się w tej sprawie z Pomocą techniczną Premium dla zweryfikowanych użytkowników, która jest dostępna ", "."];
                            },
                        },
                        {
                            key: "af51185b",
                            get: function () {
                                return ["Jeśli potrzebujesz większej liczby kont powiązanych, przejdź ", ", aby skontaktować się z zespołem ds. sprzedaży dla zweryfikowanych użytkowników."];
                            },
                        },
                        {
                            key: "d9f35d6f",
                            get: function () {
                                return ["Klikając przycisk „" + this.props.action + "”, akceptujesz ", "."];
                            },
                        },
                        {
                            key: "g42a8521",
                            get: function () {
                                return ["Użyjemy tych informacji, aby ocenić Twój wniosek dotyczący ", ". ", "."];
                            },
                        },
                        {
                            key: "aacfbecd",
                            get: function () {
                                return ["Zaznaczając to pole, potwierdzasz przeczytanie i zaakceptowanie warunków, które są dostępne ", "."];
                            },
                        },
                        {
                            key: "feb950f3",
                            get: function () {
                                return ["Program Zweryfikowane Organizacje obejmuje teraz kredyty reklamowe w wysokości " + this.props.xtc_coupon_value + " (lub odpowiednik w walucie lokalnej)*. Te środki możesz wykorzystać na koncie swojej organizacji lub dowolnym z kont powiązanych. Po prostu wybierz konto reklamowe poniżej, aby z nich skorzystać."];
                            },
                        },
                        {
                            key: "h9629ab7",
                            get: function () {
                                return ["Program Zweryfikowane Organizacje obejmuje teraz kredyty reklamowe w wysokości " + this.props.xtc_coupon_value + " (lub odpowiednik w walucie lokalnej)*. Co 30 dni będziesz otrzymywać " + this.props.xtc_coupon_value + " (lub odpowiednik w walucie lokalnej) na reklamy. Te środki możesz wydać w dowolnym czasie. Możesz wykorzystać je na koncie swojej organizacji lub dowolnym z kont powiązanych. Po prostu wybierz konto reklamowe poniżej, aby skorzystać z tych środków."];
                            },
                        },
                        {
                            key: "i3781135",
                            get: function () {
                                return ["Aby zarządzać identyfikatorami kont reklamowych, przejdź ", "."];
                            },
                        },
                        {
                            key: "ff1cc953",
                            get: function () {
                                return ["Masz problemy? Wszelkie pytania kieruj do ", "."];
                            },
                        },
                        {
                            key: "g46e6cc5",
                            get: function () {
                                return ["Masz ", " dni na wydanie pozostałej kwoty (", ") tego kredytu reklamowego."];
                            },
                        },
                        {
                            key: "be64138f",
                            get: function () {
                                return ["Aktywuj swój kredyt reklamowy. Jeśli masz wiele kont reklamowych, możesz edytować swoje dane poniżej. Oferta ważna do " + this.props.expiresAt + "."];
                            },
                        },
                        {
                            key: "a5f1d09f",
                            get: function () {
                                return ["Znajdź identyfikator konta reklamowego skojarzonego z Twoim kontem w serwisie X. Możesz zrobić to ", "."];
                            },
                        },
                        {
                            key: "e3a90717",
                            get: function () {
                                return ["Pamiętaj, aby jako typ płatności w Menedżerze Reklam dodać kartę kredytową. W tym celu wybierz pozycję „Dodaj nową metodę płatności”. Jeśli nie skonfigurujesz karty kredytowej, nie będzie można wykorzystać Twojego kredytu i Twoja reklama nie będzie wyświetlana."];
                            },
                        },
                        {
                            key: "b743c7b7",
                            get: function () {
                                return ["Skopiuj identyfikator konta reklamowego do pola wprowadzania tekstu u góry tej strony, a następnie kliknij pozycję Aktywuj."];
                            },
                        },
                        {
                            key: "d5128627",
                            get: function () {
                                return ["Rozpocznij kampanię."];
                            },
                        },
                        {
                            key: "ecd5d325",
                            get: function () {
                                return ["Pamiętaj, aby jako typ płatności w Menedżerze Reklam dodać kartę kredytową. W tym celu wybierz pozycję „Dodaj nową metodę płatności”. Jeśli nie skonfigurujesz karty kredytowej, Twoja reklama nie będzie wyświetlana."];
                            },
                        },
                        {
                            key: "d523367f",
                            get: function () {
                                return ["Wykorzystany kredyt będzie widoczny w obszarze Rachunki w Menedżerze Reklam."];
                            },
                        },
                        {
                            key: "c10a3649",
                            get: function () {
                                return ["Jeśli Twoje reklamy były już publikowane w serwisie X, być może masz wiele identyfikatorów kont reklamowych."];
                            },
                        },
                        {
                            key: "fab86f55",
                            get: function () {
                                return ["Listę swoich wszystkich identyfikatorów kont reklamowych możesz znaleźć ", "."];
                            },
                        },
                        {
                            key: "h9fe1a6d",
                            get: function () {
                                return ["Pamiętaj, aby wybrać odpowiedni identyfikator konta reklamowego, za pośrednictwem którego chcesz wykorzystać kredyt."];
                            },
                        },
                        {
                            key: "a4087047",
                            get: function () {
                                return ["Uczestniczysz w programie Zweryfikowane Organizacje na poziomie Pełny dostęp, więc możesz wykorzystać swój kredyt na dowolnym ze swoich kont powiązanych."];
                            },
                        },
                        {
                            key: "ca18299b",
                            get: function () {
                                return ["Aby to zrobić, musisz mieć dostęp do identyfikatora konta reklamowego skojarzonego z kontem powiązanym, za pośrednictwem którego chcesz prowadzić kampanię."];
                            },
                        },
                        {
                            key: "b83bc371",
                            get: function () {
                                return ["Możesz go znaleźć, logując się do konta powiązanego i przechodząc ", "."];
                            },
                        },
                        {
                            key: "ba6442ef",
                            get: function () {
                                return ["Zweryfikowane organizacje kwalifikują się do otrzymania kredytów do wykorzystania na ", " i promocję ofert pracy. Wykonaj poniższe kroki, aby w pełni aktywować możliwości reklamowe."];
                            },
                        },
                        {
                            key: "e52e0c73",
                            get: function () {
                                return ["Zweryfikowane organizacje kwalifikują się do otrzymania kredytów do wykorzystania na ", ". Wykonaj poniższe kroki, aby w pełni aktywować możliwości reklamowe."];
                            },
                        },
                        {
                            key: "d15a83b7",
                            get: function () {
                                return ["Aktywuj kupon"];
                            },
                        },
                        {
                            key: "j5318247",
                            get: function () {
                                return ["Aby otrzymać ten kredyt (" + this.props.couponAmount + "), wybierz aktywne konto, na którym nie odnotowano aktywności niezgodnej z naszymi Zasadami."];
                            },
                        },
                        {
                            key: "e507417b",
                            get: function () {
                                return ["Listę identyfikatorów kont można znaleźć w ", ". Przykładowy identyfikator: o8z6j"];
                            },
                        },
                        {
                            key: "b17ac597",
                            get: function () {
                                return ["Możesz już promować oferty pracy, korzystając z działania "];
                            },
                        },
                        {
                            key: "ga44a2f9",
                            get: function () {
                                return ["Po uzyskaniu uprawnień można promować oferty pracy za pomocą działania "];
                            },
                        },
                        {
                            key: "dc53cac9",
                            get: function () {
                                return ["Analizujemy żądania przesłane przez posiadacza znaku towarowego lub jego autoryzowanego przedstawiciela. Zobacz nasze ", ", aby uzyskać szczegółowe informacje."];
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
                                return ["Wpisz nazwę właściciela Listy i nazwę Listy w następującym formacie: ", "."];
                            },
                        },
                        {
                            key: "aa36416b",
                            get: function () {
                                return ["Tę kolumnę można wyczyścić tylko po przełączeniu się do widoku ", "."];
                            },
                        },
                        {
                            key: "baed64e7",
                            get: function () {
                                return ["Przejrzyj naszą Politykę prywatności na stronie "];
                            },
                        },
                        {
                            key: "a982261d",
                            get: function () {
                                return ["Przejrzyj nasze Zasady użytkowania na stronie "];
                            },
                        },
                        {
                            key: "ffe014fd",
                            get: function () {
                                return ["Serwis X oraz jego partnerzy używają plików cookie w celu dostarczania lepszej, bezpieczniejszej i szybszej usługi oraz w celu rozwijania swojej działalności. Niektóre pliki cookie są niezbędne do funkcjonowania naszych usług i ulepszania ich oraz zapewniania poprawności ich działania. Jeśli klikniesz pozycję „Zaakceptuj wszystkie pliki cookie”, zezwolisz także serwisowi X i jego partnerom na używanie plików cookie w celu dostarczania Ci reklam i wiadomości dostosowanych do Twoich zainteresowań. Jeśli klikniesz pozycję „Odrzuć pliki cookie inne niż podstawowe”, nie będziemy używać plików cookie w celu zbierania dodatkowych danych służących do dostarczania dostosowanych reklam i wiadomości. Aby dowiedzieć się więcej o naszych praktykach związanych z plikami cookie, przejdź na stronę poświęconą plikom cookie w naszym Centrum Pomocy, która jest dostępna pod adresem ", "."];
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
                                return ["", " przez autora"];
                            },
                        },
                        {
                            key: "i0643a5b",
                            get: function () {
                                return ["", " Artykuł"];
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
                                return ["Te multimedia są niedostępne z powodu zgłoszenia naruszenia praw autorskich użytkownika " + this.props.copyrightHolder + ". Aby odwołać się od tej decyzji, wypełnij ten ", "."];
                            },
                        },
                        {
                            key: "fcd931ed",
                            get: function () {
                                return ["Użytkownik ", " podał dalej"];
                            },
                        },
                        {
                            key: "c2588611",
                            get: function () {
                                return ["", "o " + this.props.time];
                            },
                        },
                        {
                            key: "dbf19261",
                            get: function () {
                                return ["Od "];
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
                                return ["W odpowiedzi do "];
                            },
                        },
                        {
                            key: "ge01e6a3",
                            get: function () {
                                return ["W odpowiedzi do ", " ", " "];
                            },
                        },
                        {
                            key: "f5a069ab",
                            get: function () {
                                return ["W odpowiedzi do ", " "];
                            },
                        },
                        {
                            key: "hd7dd197",
                            get: function () {
                                return ["W odpowiedzi do ", " ", " ", ""];
                            },
                        },
                        {
                            key: "g4eb2847",
                            get: function () {
                                return ["W odpowiedzi do ", " ", " "];
                            },
                        },
                        {
                            key: "dfde726b",
                            get: function () {
                                return ["Czas czytania: "];
                            },
                        },
                        {
                            key: "gec4f969",
                            get: function () {
                                return ["Ze strony "];
                            },
                        },
                        {
                            key: "d6b02329",
                            get: function () {
                                return [this.props.formattedCount + " Użytkownik" + n(this.props.count, "ów", "ów", "", "ów")];
                            },
                        },
                        {
                            key: "c9e6167d",
                            get: function () {
                                return ["Obserwowany przez: "];
                            },
                        },
                        {
                            key: "ha91d1eb",
                            get: function () {
                                return ["Obserwowany przez: ", " i "];
                            },
                        },
                        {
                            key: "f1069f9b",
                            get: function () {
                                return ["Obserwowany przez: ", ", ", " i "];
                            },
                        },
                        {
                            key: "e8404c1f",
                            get: function () {
                                return ["Obserwowany przez ", ", ", " i ", " innych użytkowników. których obserwujesz"];
                            },
                        },
                        {
                            key: "bb2cd6d3",
                            get: function () {
                                return ["", " i ", " innych użytkowników tweetuje na ten popularny Temat"];
                            },
                        },
                        {
                            key: "e1e348dd",
                            get: function () {
                                return ["Sponsor: "];
                            },
                        },
                        {
                            key: "c7dea0d1",
                            get: function () {
                                return ["Treści sponsorowane przez ", ", bez autoryzacji żadnego kandydata ani komitetu wyborczego"];
                            },
                        },
                        {
                            key: "b5c2371b",
                            get: function () {
                                return ["Sponsor: ", " · Autoryzacja: " + this.props.sponsorshipCandidate];
                            },
                        },
                        {
                            key: "b6a393af",
                            get: function () {
                                return ["Tylko Ty i osoby z Twojego kręgu możecie wyświetlić ten wpis. Funkcje podawania dalej, cytowania i udostępniania nie są dostępne. ", "."];
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
                                return ["Najpopularniejsze "];
                            },
                        },
                        {
                            key: "ea753bf5",
                            get: function () {
                                return ["Najpopularniejsze na temat: ", ", "];
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
                                    a = r.Children.toArray(this.props.children),
                                    o = ((e = this.props.$i18n), w[z[e]] || s);
                                return function (e, i, n) {
                                    return e.concat(i, a[o(n)]);
                                };
                            },
                        },
                    ]) && t(i.prototype, d),
                    y && t(i, y),
                    Object.defineProperty(i, "prototype", { writable: !1 }),
                    u
                );
            })(o(674132)._ActualI18NFormatMessage || r.Component);
            i("_ActualI18NFormatMessage", d),
                i("I18NFormatMessage", function (e) {
                    return r.createElement(d, e);
                });
            var y = o(495075);
            o(800694), o(556829), o(530152), o(658610), o(492344), o(663823);
            y._validateParameterTypeNumber, y._validateParameterPresence;
            var u = y._numberRound,
                k = (y._numberFormat, y._numberFormatterFn),
                p = y._pluralGeneratorFn,
                j = (y._currencyNameFormat, y._currencyFormatterFn),
                b = (y._validateParameterTypeDate, y._dateToPartsFormat, y._dateToPartsFormatterFn),
                m = (y._dateFormat, y._dateFormatterFn),
                f = y._relativeTimeFormatterFn,
                l = y._unitFormatterFn;
            (y.a547593841 = k(["", , 1, 0, 1, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u("truncate"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tys'.'", few: "0 tys'.'", many: "0 tys'.'", other: "0 tys'.'" }, 4: { one: "00 tys'.'", few: "00 tys'.'", many: "00 tys'.'", other: "00 tys'.'" }, 5: { one: "000 tys'.'", few: "000 tys'.'", many: "000 tys'.'", other: "000 tys'.'" }, 6: { one: "0 mln", few: "0 mln", many: "0 mln", other: "0 mln" }, 7: { one: "00 mln", few: "00 mln", many: "00 mln", other: "00 mln" }, 8: { one: "000 mln", few: "000 mln", many: "000 mln", other: "000 mln" }, 9: { one: "0 mld", few: "0 mld", many: "0 mld", other: "0 mld" }, 10: { one: "00 mld", few: "00 mld", many: "00 mld", other: "00 mld" }, 11: { one: "000 mld", few: "000 mld", many: "000 mld", other: "000 mld" }, 12: { one: "0 bln", few: "0 bln", many: "0 bln", other: "0 bln" }, 13: { one: "00 bln", few: "00 bln", many: "00 bln", other: "00 bln" }, 14: { one: "000 bln", few: "000 bln", many: "000 bln", other: "000 bln" }, maxExponent: 14 }], y("pl").pluralGenerator({}))),
                (y.b155312707 = k(["", , 1, 0, 3, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b1028059043 = k(["", , 1, 0, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u("round"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1793204633 = k(["", , 1, 0, 0, , , , , , "", "0", "-0", "-", "", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b244900517 = k(["", , 2, 0, 0, , , , , , "", "00", "-00", "-", "", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b1709317166 = k(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u("truncate"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tys'.'", few: "0 tys'.'", many: "0 tys'.'", other: "0 tys'.'" }, 4: { one: "00 tys'.'", few: "00 tys'.'", many: "00 tys'.'", other: "00 tys'.'" }, 5: { one: "000 tys'.'", few: "000 tys'.'", many: "000 tys'.'", other: "000 tys'.'" }, 6: { one: "0 mln", few: "0 mln", many: "0 mln", other: "0 mln" }, 7: { one: "00 mln", few: "00 mln", many: "00 mln", other: "00 mln" }, 8: { one: "000 mln", few: "000 mln", many: "000 mln", other: "000 mln" }, 9: { one: "0 mld", few: "0 mld", many: "0 mld", other: "0 mld" }, 10: { one: "00 mld", few: "00 mld", many: "00 mld", other: "00 mld" }, 11: { one: "000 mld", few: "000 mld", many: "000 mld", other: "000 mld" }, 12: { one: "0 bln", few: "0 bln", many: "0 bln", other: "0 bln" }, 13: { one: "00 bln", few: "00 bln", many: "00 bln", other: "00 bln" }, 14: { one: "000 bln", few: "000 bln", many: "000 bln", other: "000 bln" }, maxExponent: 14 }], y("pl").pluralGenerator({}))),
                (y.b325085798 = k(["", , 1, 0, 1, , , , 3, , "%", "#,##0%", "-#,##0%%", "-", "%", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b464972409 = k(["", , 1, 0, 0, , , , 3, , "%", "#,##0%", "-#,##0%%", "-", "%", u("round"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b135206648 = k(["", , 1, 0, 1, , , , 3, , "%", "#,##0%", "-#,##0%%", "-", "%", u("round"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b2094140648 = k(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u("truncate"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tys'.'", few: "0 tys'.'", many: "0 tys'.'", other: "0 tys'.'" }, 4: { one: "00 tys'.'", few: "00 tys'.'", many: "00 tys'.'", other: "00 tys'.'" }, 5: { one: "000 tys'.'", few: "000 tys'.'", many: "000 tys'.'", other: "000 tys'.'" }, 6: { one: "0 mln", few: "0 mln", many: "0 mln", other: "0 mln" }, 7: { one: "00 mln", few: "00 mln", many: "00 mln", other: "00 mln" }, 8: { one: "000 mln", few: "000 mln", many: "000 mln", other: "000 mln" }, 9: { one: "0 mld", few: "0 mld", many: "0 mld", other: "0 mld" }, 10: { one: "00 mld", few: "00 mld", many: "00 mld", other: "00 mld" }, 11: { one: "000 mld", few: "000 mld", many: "000 mld", other: "000 mld" }, 12: { one: "0 bln", few: "0 bln", many: "0 bln", other: "0 bln" }, 13: { one: "00 bln", few: "00 bln", many: "00 bln", other: "00 bln" }, 14: { one: "000 bln", few: "000 bln", many: "000 bln", other: "000 bln" }, maxExponent: 14 }], y("pl").pluralGenerator({}))),
                (y.a2131071355 = k(["", , 1, 1, 1, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u("truncate"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1062596089 = k(["", , 1, 2, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u("truncate"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a551547043 = k(["", , 1, 0, 0, 1, 2, , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tys'.'", few: "0 tys'.'", many: "0 tys'.'", other: "0 tys'.'" }, 4: { one: "00 tys'.'", few: "00 tys'.'", many: "00 tys'.'", other: "00 tys'.'" }, 5: { one: "000 tys'.'", few: "000 tys'.'", many: "000 tys'.'", other: "000 tys'.'" }, 6: { one: "0 mln", few: "0 mln", many: "0 mln", other: "0 mln" }, 7: { one: "00 mln", few: "00 mln", many: "00 mln", other: "00 mln" }, 8: { one: "000 mln", few: "000 mln", many: "000 mln", other: "000 mln" }, 9: { one: "0 mld", few: "0 mld", many: "0 mld", other: "0 mld" }, 10: { one: "00 mld", few: "00 mld", many: "00 mld", other: "00 mld" }, 11: { one: "000 mld", few: "000 mld", many: "000 mld", other: "000 mld" }, 12: { one: "0 bln", few: "0 bln", many: "0 bln", other: "0 bln" }, 13: { one: "00 bln", few: "00 bln", many: "00 bln", other: "00 bln" }, 14: { one: "000 bln", few: "000 bln", many: "000 bln", other: "000 bln" }, maxExponent: 14 }], y("pl").pluralGenerator({}))),
                (y.b1781321498 = k(["", , 1, 2, 2, , , 0, 3, , " 'AED'", "#,##0.00 'AED'", "-#,##0.00 'AED' 'AED'", "-", " 'AED'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b655285707 = k(["", , 1, 0, 0, , , , 3, , " 'ALL'", "#,##0 'ALL'", "-#,##0 'ALL' 'ALL'", "-", " 'ALL'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b1395289720 = k(["", , 1, 2, 2, , , 0, 3, , " 'ARS'", "#,##0.00 'ARS'", "-#,##0.00 'ARS' 'ARS'", "-", " 'ARS'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b1323255082 = k(["", , 1, 2, 2, , , 0, 3, , " 'AUD'", "#,##0.00 'AUD'", "-#,##0.00 'AUD' 'AUD'", "-", " 'AUD'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b1000022732 = k(["", , 1, 2, 2, , , 0, 3, , " 'BAM'", "#,##0.00 'BAM'", "-#,##0.00 'BAM' 'BAM'", "-", " 'BAM'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b907670632 = k(["", , 1, 2, 2, , , 0, 3, , " 'BDT'", "#,##0.00 'BDT'", "-#,##0.00 'BDT' 'BDT'", "-", " 'BDT'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b827324305 = k(["", , 1, 2, 2, , , 0, 3, , " 'BGN'", "#,##0.00 'BGN'", "-#,##0.00 'BGN' 'BGN'", "-", " 'BGN'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a900048368 = k(["", , 1, 3, 3, , , 0, 3, , " 'BHD'", "#,##0.000 'BHD'", "-#,##0.000 'BHD' 'BHD'", "-", " 'BHD'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b1957413214 = k(["", , 1, 2, 2, , , 0, 3, , " 'R$'", "#,##0.00 'R$'", "-#,##0.00 'R$' 'R$'", "-", " 'R$'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a609938063 = k(["", , 1, 0, 0, , , , 3, , " 'BYR'", "#,##0 'BYR'", "-#,##0 'BYR' 'BYR'", "-", " 'BYR'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b120830740 = k(["", , 1, 2, 2, , , 0, 3, , " 'CAD'", "#,##0.00 'CAD'", "-#,##0.00 'CAD' 'CAD'", "-", " 'CAD'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a81420359 = k(["", , 1, 2, 2, , , 0, 3, , " 'CHF'", "#,##0.00 'CHF'", "-#,##0.00 'CHF' 'CHF'", "-", " 'CHF'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1123415739 = k(["", , 1, 0, 0, , , , 3, , " 'CLP'", "#,##0 'CLP'", "-#,##0 'CLP' 'CLP'", "-", " 'CLP'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a270742164 = k(["", , 1, 2, 2, , , 0, 3, , " 'CNY'", "#,##0.00 'CNY'", "-#,##0.00 'CNY' 'CNY'", "-", " 'CNY'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1209303192 = k(["", , 1, 0, 0, , , , 3, , " 'COP'", "#,##0 'COP'", "-#,##0 'COP' 'COP'", "-", " 'COP'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a601362682 = k(["", , 1, 2, 2, , , 0, 3, , " 'CZK'", "#,##0.00 'CZK'", "-#,##0.00 'CZK' 'CZK'", "-", " 'CZK'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1059429098 = k(["", , 1, 2, 2, , , 0, 3, , " 'DKK'", "#,##0.00 'DKK'", "-#,##0.00 'DKK' 'DKK'", "-", " 'DKK'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1482401716 = k(["", , 1, 2, 2, , , 0, 3, , " 'DZD'", "#,##0.00 'DZD'", "-#,##0.00 'DZD' 'DZD'", "-", " 'DZD'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1837033780 = k(["", , 1, 2, 2, , , 0, 3, , " 'EGP'", "#,##0.00 'EGP'", "-#,##0.00 'EGP' 'EGP'", "-", " 'EGP'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b1281483342 = k(["", , 1, 2, 2, , , 0, 3, , " '€'", "#,##0.00 '€'", "-#,##0.00 '€' '€'", "-", " '€'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b826071909 = k(["", , 1, 2, 2, , , 0, 3, , " 'GBP'", "#,##0.00 'GBP'", "-#,##0.00 'GBP' 'GBP'", "-", " 'GBP'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b651526440 = k(["", , 1, 2, 2, , , 0, 3, , " 'GHS'", "#,##0.00 'GHS'", "-#,##0.00 'GHS' 'GHS'", "-", " 'GHS'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b309823670 = k(["", , 1, 2, 2, , , 0, 3, , " 'GTQ'", "#,##0.00 'GTQ'", "-#,##0.00 'GTQ' 'GTQ'", "-", " 'GTQ'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a308011879 = k(["", , 1, 2, 2, , , 0, 3, , " 'HKD'", "#,##0.00 'HKD'", "-#,##0.00 'HKD' 'HKD'", "-", " 'HKD'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a514880583 = k(["", , 1, 2, 2, , , 0, 3, , " 'HRK'", "#,##0.00 'HRK'", "-#,##0.00 'HRK' 'HRK'", "-", " 'HRK'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a596150431 = k(["", , 1, 2, 2, , , 0, 3, , " 'HUF'", "#,##0.00 'HUF'", "-#,##0.00 'HUF' 'HUF'", "-", " 'HUF'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1926284363 = k(["", , 1, 0, 0, , , , 3, , " 'IDR'", "#,##0 'IDR'", "-#,##0 'IDR' 'IDR'", "-", " 'IDR'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1237997526 = k(["", , 1, 2, 2, , , 0, 3, , " 'ILS'", "#,##0.00 'ILS'", "-#,##0.00 'ILS' 'ILS'", "-", " 'ILS'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1294332307 = k(["", , 1, 2, 2, , , 0, 3, , " 'INR'", "#,##0.00 'INR'", "-#,##0.00 'INR' 'INR'", "-", " 'INR'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b2009433264 = k(["", , 1, 0, 0, , , , 3, , " 'IQD'", "#,##0 'IQD'", "-#,##0 'IQD' 'IQD'", "-", " 'IQD'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b1945710315 = k(["", , 1, 0, 0, , , , 3, , " 'ISK'", "#,##0 'ISK'", "-#,##0 'ISK' 'ISK'", "-", " 'ISK'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b1131164793 = k(["", , 1, 0, 0, , , , 3, , " 'JPY'", "#,##0 'JPY'", "-#,##0 'JPY' 'JPY'", "-", " 'JPY'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b1482366465 = k(["", , 1, 2, 2, , , 0, 3, , " 'KES'", "#,##0.00 'KES'", "-#,##0.00 'KES' 'KES'", "-", " 'KES'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b188249852 = k(["", , 1, 0, 0, , , , 3, , " 'KRW'", "#,##0 'KRW'", "-#,##0 'KRW' 'KRW'", "-", " 'KRW'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a727084170 = k(["", , 1, 3, 3, , , 0, 3, , " 'KWD'", "#,##0.000 'KWD'", "-#,##0.000 'KWD' 'KWD'", "-", " 'KWD'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b880230773 = k(["", , 1, 2, 2, , , 0, 3, , " 'KZT'", "#,##0.00 'KZT'", "-#,##0.00 'KZT' 'KZT'", "-", " 'KZT'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a234722766 = k(["", , 1, 0, 0, , , , 3, , " 'LBP'", "#,##0 'LBP'", "-#,##0 'LBP' 'LBP'", "-", " 'LBP'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a164271478 = k(["", , 1, 2, 2, , , 0, 3, , " 'MAD'", "#,##0.00 'MAD'", "-#,##0.00 'MAD' 'MAD'", "-", " 'MAD'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a450562988 = k(["", , 1, 2, 2, , , 0, 3, , " 'MKD'", "#,##0.00 'MKD'", "-#,##0.00 'MKD' 'MKD'", "-", " 'MKD'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a831977161 = k(["", , 1, 2, 2, , , 0, 3, , " 'MXN'", "#,##0.00 'MXN'", "-#,##0.00 'MXN' 'MXN'", "-", " 'MXN'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a864300396 = k(["", , 1, 2, 2, , , 0, 3, , " 'MYR'", "#,##0.00 'MYR'", "-#,##0.00 'MYR' 'MYR'", "-", " 'MYR'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1232785275 = k(["", , 1, 2, 2, , , 0, 3, , " 'NGN'", "#,##0.00 'NGN'", "-#,##0.00 'NGN' 'NGN'", "-", " 'NGN'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1459047920 = k(["", , 1, 2, 2, , , 0, 3, , " 'NOK'", "#,##0.00 'NOK'", "-#,##0.00 'NOK' 'NOK'", "-", " 'NOK'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1767503934 = k(["", , 1, 2, 2, , , 0, 3, , " 'NZD'", "#,##0.00 'NZD'", "-#,##0.00 'NZD' 'NZD'", "-", " 'NZD'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b1344432961 = k(["", , 1, 2, 2, , , 0, 3, , " 'PEN'", "#,##0.00 'PEN'", "-#,##0.00 'PEN' 'PEN'", "-", " 'PEN'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b1256698466 = k(["", , 1, 2, 2, , , 0, 3, , " 'PHP'", "#,##0.00 'PHP'", "-#,##0.00 'PHP' 'PHP'", "-", " 'PHP'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b250720405 = k(["", , 1, 0, 0, , , , 3, , " 'PKR'", "#,##0 'PKR'", "-#,##0 'PKR' 'PKR'", "-", " 'PKR'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b548120168 = k(["", , 1, 2, 2, , , 0, 3, , " 'zł'", "#,##0.00 'zł'", "-#,##0.00 'zł' 'zł'", "-", " 'zł'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b567751800 = k(["", , 1, 2, 2, , , 0, 3, , " 'QAR'", "#,##0.00 'QAR'", "-#,##0.00 'QAR' 'QAR'", "-", " 'QAR'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a716865911 = k(["", , 1, 2, 2, , , 0, 3, , " 'RON'", "#,##0.00 'RON'", "-#,##0.00 'RON' 'RON'", "-", " 'RON'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1740390871 = k(["", , 1, 0, 0, , , , 3, , " 'RSD'", "#,##0 'RSD'", "-#,##0 'RSD' 'RSD'", "-", " 'RSD'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a877558565 = k(["", , 1, 2, 2, , , 0, 3, , " 'RUB'", "#,##0.00 'RUB'", "-#,##0.00 'RUB' 'RUB'", "-", " 'RUB'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1207255562 = k(["", , 1, 2, 2, , , 0, 3, , " 'SAR'", "#,##0.00 'SAR'", "-#,##0.00 'SAR' 'SAR'", "-", " 'SAR'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1315307519 = k(["", , 1, 2, 2, , , 0, 3, , " 'SEK'", "#,##0.00 'SEK'", "-#,##0.00 'SEK' 'SEK'", "-", " 'SEK'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1366101174 = k(["", , 1, 2, 2, , , 0, 3, , " 'SGD'", "#,##0.00 'SGD'", "-#,##0.00 'SGD' 'SGD'", "-", " 'SGD'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b2014580332 = k(["", , 1, 2, 2, , , 0, 3, , " 'THB'", "#,##0.00 'THB'", "-#,##0.00 'THB' 'THB'", "-", " 'THB'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b132979652 = k(["", , 1, 3, 3, , , 0, 3, , " 'TND'", "#,##0.000 'TND'", "-#,##0.000 'TND' 'TND'", "-", " 'TND'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b1707047839 = k(["", , 1, 2, 2, , , 0, 3, , " 'TRY'", "#,##0.00 'TRY'", "-#,##0.00 'TRY' 'TRY'", "-", " 'TRY'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b1583296025 = k(["", , 1, 2, 2, , , 0, 3, , " 'TWD'", "#,##0.00 'TWD'", "-#,##0.00 'TWD' 'TWD'", "-", " 'TWD'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b565312191 = k(["", , 1, 0, 0, , , , 3, , " 'TZS'", "#,##0 'TZS'", "-#,##0 'TZS' 'TZS'", "-", " 'TZS'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b1321939582 = k(["", , 1, 2, 2, , , 0, 3, , " 'UAH'", "#,##0.00 'UAH'", "-#,##0.00 'UAH' 'UAH'", "-", " 'UAH'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b217144774 = k(["", , 1, 0, 0, , , , 3, , " 'UGX'", "#,##0 'UGX'", "-#,##0 'UGX' 'UGX'", "-", " 'UGX'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b810308948 = k(["", , 1, 2, 2, , , 0, 3, , " 'USD'", "#,##0.00 'USD'", "-#,##0.00 'USD' 'USD'", "-", " 'USD'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b321766339 = k(["", , 1, 2, 2, , , 0, 3, , " 'VEF'", "#,##0.00 'VEF'", "-#,##0.00 'VEF' 'VEF'", "-", " 'VEF'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a852292544 = k(["", , 1, 0, 0, , , , 3, , " 'VND'", "#,##0 'VND'", "-#,##0 'VND' 'VND'", "-", " 'VND'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b1170153263 = k(["", , 1, 2, 2, , , 0, 3, , " 'ZAR'", "#,##0.00 'ZAR'", "-#,##0.00 'ZAR' 'ZAR'", "-", " 'ZAR'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b821985846 = k(["", , 1, 2, 2, , , 0, 3, , " 'ZMW'", "#,##0.00 'ZMW'", "-#,##0.00 'ZMW' 'ZMW'", "-", " 'ZMW'", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b387089515 = k(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.b1419457608 = k(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tys'.'", few: "0 tys'.'", many: "0 tys'.'", other: "0 tys'.'" }, 4: { one: "00 tys'.'", few: "00 tys'.'", many: "00 tys'.'", other: "00 tys'.'" }, 5: { one: "000 tys'.'", few: "000 tys'.'", many: "000 tys'.'", other: "000 tys'.'" }, 6: { one: "0 mln", few: "0 mln", many: "0 mln", other: "0 mln" }, 7: { one: "00 mln", few: "00 mln", many: "00 mln", other: "00 mln" }, 8: { one: "000 mln", few: "000 mln", many: "000 mln", other: "000 mln" }, 9: { one: "0 mld", few: "0 mld", many: "0 mld", other: "0 mld" }, 10: { one: "00 mld", few: "00 mld", many: "00 mld", other: "00 mld" }, 11: { one: "000 mld", few: "000 mld", many: "000 mld", other: "000 mld" }, 12: { one: "0 bln", few: "0 bln", many: "0 bln", other: "0 bln" }, 13: { one: "00 bln", few: "00 bln", many: "00 bln", other: "00 bln" }, 14: { one: "000 bln", few: "000 bln", many: "000 bln", other: "000 bln" }, maxExponent: 14 }], y("pl").pluralGenerator({}))),
                (y.b1974189318 = k(["", , 1, 0, 2, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u(), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }, , { 3: { one: "0 tys'.'", few: "0 tys'.'", many: "0 tys'.'", other: "0 tys'.'" }, 4: { one: "00 tys'.'", few: "00 tys'.'", many: "00 tys'.'", other: "00 tys'.'" }, 5: { one: "000 tys'.'", few: "000 tys'.'", many: "000 tys'.'", other: "000 tys'.'" }, 6: { one: "0 mln", few: "0 mln", many: "0 mln", other: "0 mln" }, 7: { one: "00 mln", few: "00 mln", many: "00 mln", other: "00 mln" }, 8: { one: "000 mln", few: "000 mln", many: "000 mln", other: "000 mln" }, 9: { one: "0 mld", few: "0 mld", many: "0 mld", other: "0 mld" }, 10: { one: "00 mld", few: "00 mld", many: "00 mld", other: "00 mld" }, 11: { one: "000 mld", few: "000 mld", many: "000 mld", other: "000 mld" }, 12: { one: "0 bln", few: "0 bln", many: "0 bln", other: "0 bln" }, 13: { one: "00 bln", few: "00 bln", many: "00 bln", other: "00 bln" }, 14: { one: "000 bln", few: "000 bln", many: "000 bln", other: "000 bln" }, maxExponent: 14 }], y("pl").pluralGenerator({}))),
                (y.a660884699 = k(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", u("round"), "∞", "NaN", { ".": ",", ",": " ", "%": "%", "+": "+", "-": "-", E: "E", "‰": "‰" }])),
                (y.a1975419755 = p(function (e) {
                    var a = String(e).split("."),
                        o = a[0],
                        i = !a[1],
                        n = o.slice(-1),
                        t = o.slice(-2);
                    return 1 == e && i ? "one" : i && n >= 2 && n <= 4 && (t < 12 || t > 14) ? "few" : (i && 1 != o && (0 == n || 1 == n)) || (i && n >= 5 && n <= 9) || (i && t >= 12 && t <= 14) ? "many" : "other";
                })),
                (y.b540987027 = j(y("pl").numberFormatter({ raw: "#,##0.00 'AED'" }))),
                (y.a1605604652 = j(y("pl").numberFormatter({ raw: "#,##0 'ALL'" }))),
                (y.b1458903797 = j(y("pl").numberFormatter({ raw: "#,##0.00 'ARS'" }))),
                (y.a774169981 = j(y("pl").numberFormatter({ raw: "#,##0.00 'AUD'" }))),
                (y.b2090529057 = j(y("pl").numberFormatter({ raw: "#,##0.00 'BAM'" }))),
                (y.a772386043 = j(y("pl").numberFormatter({ raw: "#,##0.00 'BDT'" }))),
                (y.b1031845116 = j(y("pl").numberFormatter({ raw: "#,##0.00 'BGN'" }))),
                (y.b430632945 = j(y("pl").numberFormatter({ raw: "#,##0.000 'BHD'" }))),
                (y.a83502481 = j(y("pl").numberFormatter({ raw: "#,##0.00 'R$'" }))),
                (y.b2122131438 = j(y("pl").numberFormatter({ raw: "#,##0 'BYR'" }))),
                (y.b605381081 = j(y("pl").numberFormatter({ raw: "#,##0.00 'CAD'" }))),
                (y.a1369435692 = j(y("pl").numberFormatter({ raw: "#,##0.00 'CHF'" }))),
                (y.a910774630 = j(y("pl").numberFormatter({ raw: "#,##0 'CLP'" }))),
                (y.b1351522945 = j(y("pl").numberFormatter({ raw: "#,##0.00 'CNY'" }))),
                (y.b721681623 = j(y("pl").numberFormatter({ raw: "#,##0 'COP'" }))),
                (y.a307778521 = j(y("pl").numberFormatter({ raw: "#,##0.00 'CZK'" }))),
                (y.a1622935529 = j(y("pl").numberFormatter({ raw: "#,##0.00 'DKK'" }))),
                (y.a1850184799 = j(y("pl").numberFormatter({ raw: "#,##0.00 'DZD'" }))),
                (y.b41123105 = j(y("pl").numberFormatter({ raw: "#,##0.00 'EGP'" }))),
                (y.b443715157 = j(y("pl").numberFormatter({ raw: "#,##0.00 '€'" }))),
                (y.b993020840 = j(y("pl").numberFormatter({ raw: "#,##0.00 'GBP'" }))),
                (y.a122921403 = j(y("pl").numberFormatter({ raw: "#,##0.00 'GHS'" }))),
                (y.a2125772681 = j(y("pl").numberFormatter({ raw: "#,##0.00 'GTQ'" }))),
                (y.b196161780 = j(y("pl").numberFormatter({ raw: "#,##0.00 'HKD'" }))),
                (y.a1921800748 = j(y("pl").numberFormatter({ raw: "#,##0.00 'HRK'" }))),
                (y.a146198740 = j(y("pl").numberFormatter({ raw: "#,##0.00 'HUF'" }))),
                (y.a29898198 = j(y("pl").numberFormatter({ raw: "#,##0 'IDR'" }))),
                (y.b1431377795 = j(y("pl").numberFormatter({ raw: "#,##0.00 'ILS'" }))),
                (y.a315000416 = j(y("pl").numberFormatter({ raw: "#,##0.00 'INR'" }))),
                (y.b1718263951 = j(y("pl").numberFormatter({ raw: "#,##0 'IQD'" }))),
                (y.a257147468 = j(y("pl").numberFormatter({ raw: "#,##0 'ISK'" }))),
                (y.b261745126 = j(y("pl").numberFormatter({ raw: "#,##0 'JPY'" }))),
                (y.a136684404 = j(y("pl").numberFormatter({ raw: "#,##0.00 'KES'" }))),
                (y.b1096153027 = j(y("pl").numberFormatter({ raw: "#,##0 'KRW'" }))),
                (y.b1497555787 = j(y("pl").numberFormatter({ raw: "#,##0.000 'KWD'" }))),
                (y.a1623021672 = j(y("pl").numberFormatter({ raw: "#,##0.00 'KZT'" }))),
                (y.b868903757 = j(y("pl").numberFormatter({ raw: "#,##0 'LBP'" }))),
                (y.b357146915 = j(y("pl").numberFormatter({ raw: "#,##0.00 'MAD'" }))),
                (y.b72044697 = j(y("pl").numberFormatter({ raw: "#,##0.00 'MKD'" }))),
                (y.b1133107222 = j(y("pl").numberFormatter({ raw: "#,##0.00 'MXN'" }))),
                (y.b131086937 = j(y("pl").numberFormatter({ raw: "#,##0.00 'MYR'" }))),
                (y.b1592957576 = j(y("pl").numberFormatter({ raw: "#,##0.00 'NGN'" }))),
                (y.a1126217123 = j(y("pl").numberFormatter({ raw: "#,##0.00 'NOK'" }))),
                (y.a2098418965 = j(y("pl").numberFormatter({ raw: "#,##0.00 'NZD'" }))),
                (y.a117655732 = j(y("pl").numberFormatter({ raw: "#,##0.00 'PEN'" }))),
                (y.b1457542219 = j(y("pl").numberFormatter({ raw: "#,##0.00 'PHP'" }))),
                (y.a1262227126 = j(y("pl").numberFormatter({ raw: "#,##0 'PKR'" }))),
                (y.a2035214203 = j(y("pl").numberFormatter({ raw: "#,##0.00 'zł'" }))),
                (y.b1575032053 = j(y("pl").numberFormatter({ raw: "#,##0.00 'QAR'" }))),
                (y.b406588676 = j(y("pl").numberFormatter({ raw: "#,##0.00 'RON'" }))),
                (y.b1437832758 = j(y("pl").numberFormatter({ raw: "#,##0 'RSD'" }))),
                (y.a279916302 = j(y("pl").numberFormatter({ raw: "#,##0.00 'RUB'" }))),
                (y.a1910588617 = j(y("pl").numberFormatter({ raw: "#,##0.00 'SAR'" }))),
                (y.a965231988 = j(y("pl").numberFormatter({ raw: "#,##0.00 'SEK'" }))),
                (y.b1755132003 = j(y("pl").numberFormatter({ raw: "#,##0.00 'SGD'" }))),
                (y.a817923711 = j(y("pl").numberFormatter({ raw: "#,##0.00 'THB'" }))),
                (y.a1905236803 = j(y("pl").numberFormatter({ raw: "#,##0.000 'TND'" }))),
                (y.a1761496402 = j(y("pl").numberFormatter({ raw: "#,##0.00 'TRY'" }))),
                (y.a1302835340 = j(y("pl").numberFormatter({ raw: "#,##0.00 'TWD'" }))),
                (y.a99816352 = j(y("pl").numberFormatter({ raw: "#,##0 'TZS'" }))),
                (y.a814950481 = j(y("pl").numberFormatter({ raw: "#,##0.00 'UAH'" }))),
                (y.b1991895609 = j(y("pl").numberFormatter({ raw: "#,##0 'UGX'" }))),
                (y.b504369049 = j(y("pl").numberFormatter({ raw: "#,##0.00 'USD'" }))),
                (y.a1755549942 = j(y("pl").numberFormatter({ raw: "#,##0.00 'VEF'" }))),
                (y.a1095890177 = j(y("pl").numberFormatter({ raw: "#,##0 'VND'" }))),
                (y.a1225359074 = j(y("pl").numberFormatter({ raw: "#,##0.00 'ZAR'" }))),
                (y.b866352887 = j(y("pl").numberFormatter({ raw: "#,##0.00 'ZMW'" }))),
                (y.a1858479041 = b({ 1: y("pl").numberFormatter({ raw: "0" }) }, { pattern: "d MMM", timeSeparator: ":", months: { M: { 3: { 1: "sty", 2: "lut", 3: "mar", 4: "kwi", 5: "maj", 6: "cze", 7: "lip", 8: "sie", 9: "wrz", 10: "paź", 11: "lis", 12: "gru" } } } })),
                (y.a1133157692 = b({ 1: y("pl").numberFormatter({ raw: "0" }) }, { pattern: "d MMM y", timeSeparator: ":", months: { M: { 3: { 1: "sty", 2: "lut", 3: "mar", 4: "kwi", 5: "maj", 6: "cze", 7: "lip", 8: "sie", 9: "wrz", 10: "paź", 11: "lis", 12: "gru" } } } })),
                (y.b1281713965 = b({ 1: y("pl").numberFormatter({ raw: "0" }), 2: y("pl").numberFormatter({ raw: "00" }) }, { pattern: "h:mm a", timeSeparator: ":", dayPeriods: { am: "AM", pm: "PM" } })),
                (y.a1751526112 = b({ 1: y("pl").numberFormatter({ raw: "0" }) }, { pattern: "E, d MMM", timeSeparator: ":", days: { E: { 1: { sun: "niedz.", mon: "pon.", tue: "wt.", wed: "śr.", thu: "czw.", fri: "pt.", sat: "sob." } } }, months: { M: { 3: { 1: "sty", 2: "lut", 3: "mar", 4: "kwi", 5: "maj", 6: "cze", 7: "lip", 8: "sie", 9: "wrz", 10: "paź", 11: "lis", 12: "gru" } } } })),
                (y.a741400773 = b({ 1: y("pl").numberFormatter({ raw: "0" }) }, { pattern: "E, d MMM y", timeSeparator: ":", days: { E: { 1: { sun: "niedz.", mon: "pon.", tue: "wt.", wed: "śr.", thu: "czw.", fri: "pt.", sat: "sob." } } }, months: { M: { 3: { 1: "sty", 2: "lut", 3: "mar", 4: "kwi", 5: "maj", 6: "cze", 7: "lip", 8: "sie", 9: "wrz", 10: "paź", 11: "lis", 12: "gru" } } } })),
                (y.a1758914280 = b({ 1: y("pl").numberFormatter({ raw: "0" }) }, { pattern: "d MMMM", timeSeparator: ":", months: { M: { 4: { 1: "stycznia", 2: "lutego", 3: "marca", 4: "kwietnia", 5: "maja", 6: "czerwca", 7: "lipca", 8: "sierpnia", 9: "września", 10: "października", 11: "listopada", 12: "grudnia" } } } })),
                (y.b1893034089 = b({ 1: y("pl").numberFormatter({ raw: "0" }), 2: y("pl").numberFormatter({ raw: "00" }) }, { pattern: "d MMM y, h:mm a", timeSeparator: ":", months: { M: { 3: { 1: "sty", 2: "lut", 3: "mar", 4: "kwi", 5: "maj", 6: "cze", 7: "lip", 8: "sie", 9: "wrz", 10: "paź", 11: "lis", 12: "gru" } } }, dayPeriods: { am: "AM", pm: "PM" } })),
                (y.a611126813 = b({ 1: y("pl").numberFormatter({ raw: "0" }) }, { pattern: "d MMMM y", timeSeparator: ":", months: { M: { 4: { 1: "stycznia", 2: "lutego", 3: "marca", 4: "kwietnia", 5: "maja", 6: "czerwca", 7: "lipca", 8: "sierpnia", 9: "września", 10: "października", 11: "listopada", 12: "grudnia" } } } })),
                (y.b643919652 = b({ 1: y("pl").numberFormatter({ raw: "0" }), 2: y("pl").numberFormatter({ raw: "00" }) }, { pattern: "d MMM, h:mm a", timeSeparator: ":", months: { M: { 3: { 1: "sty", 2: "lut", 3: "mar", 4: "kwi", 5: "maj", 6: "cze", 7: "lip", 8: "sie", 9: "wrz", 10: "paź", 11: "lis", 12: "gru" } } }, dayPeriods: { am: "AM", pm: "PM" } })),
                (y.b796581617 = b({ 1: y("pl").numberFormatter({ raw: "0" }), 2: y("pl").numberFormatter({ raw: "00" }) }, { pattern: "dd.MM.y", timeSeparator: ":" })),
                (y.a790375539 = b({ 1: y("pl").numberFormatter({ raw: "0" }) }, { pattern: "y", timeSeparator: ":" })),
                (y.b2041717148 = b({ 1: y("pl").numberFormatter({ raw: "0" }) }, { pattern: "LLL y", timeSeparator: ":", months: { L: { 3: { 1: "sty", 2: "lut", 3: "mar", 4: "kwi", 5: "maj", 6: "cze", 7: "lip", 8: "sie", 9: "wrz", 10: "paź", 11: "lis", 12: "gru" } } } })),
                (y.b1484168393 = b({ 1: y("pl").numberFormatter({ raw: "0" }), 2: y("pl").numberFormatter({ raw: "00" }) }, { pattern: "EEEE, d MMMM y HH:mm:ss zzzz", timeSeparator: ":", days: { E: { 4: { sun: "niedziela", mon: "poniedziałek", tue: "wtorek", wed: "środa", thu: "czwartek", fri: "piątek", sat: "sobota" } } }, months: { M: { 4: { 1: "stycznia", 2: "lutego", 3: "marca", 4: "kwietnia", 5: "maja", 6: "czerwca", 7: "lipca", 8: "sierpnia", 9: "września", 10: "października", 11: "listopada", 12: "grudnia" } } }, gmtFormat: "GMT{0}", gmtZeroFormat: "GMT", hourFormat: "+HH:mm;-HH:mm" })),
                (y.b758983791 = b({ 1: y("pl").numberFormatter({ raw: "0" }), 2: y("pl").numberFormatter({ raw: "00" }) }, { pattern: "d MMM y, HH:mm:ss", timeSeparator: ":", months: { M: { 3: { 1: "sty", 2: "lut", 3: "mar", 4: "kwi", 5: "maj", 6: "cze", 7: "lip", 8: "sie", 9: "wrz", 10: "paź", 11: "lis", 12: "gru" } } } })),
                (y.a1154398675 = b({ 1: y("pl").numberFormatter({ raw: "0" }), 2: y("pl").numberFormatter({ raw: "00" }) }, { pattern: "dd.MM.y", timeSeparator: ":" })),
                (y.b141237104 = b({ 2: y("pl").numberFormatter({ raw: "00" }) }, { pattern: "HH:mm", timeSeparator: ":" })),
                (y.b2082917182 = b({ 1: y("pl").numberFormatter({ raw: "0" }), 2: y("pl").numberFormatter({ raw: "00" }) }, { pattern: "E, h:mm a", timeSeparator: ":", days: { E: { 1: { sun: "niedz.", mon: "pon.", tue: "wt.", wed: "śr.", thu: "czw.", fri: "pt.", sat: "sob." } } }, dayPeriods: { am: "AM", pm: "PM" } })),
                (y.a1132472499 = b({ 1: y("pl").numberFormatter({ raw: "0" }) }, { pattern: "LLLL y", timeSeparator: ":", months: { L: { 4: { 1: "styczeń", 2: "luty", 3: "marzec", 4: "kwiecień", 5: "maj", 6: "czerwiec", 7: "lipiec", 8: "sierpień", 9: "wrzesień", 10: "październik", 11: "listopad", 12: "grudzień" } } } })),
                (y.a969905348 = b({ 1: y("pl").numberFormatter({ raw: "0" }) }, { pattern: "d MMM y", timeSeparator: ":", months: { M: { 3: { 1: "sty", 2: "lut", 3: "mar", 4: "kwi", 5: "maj", 6: "cze", 7: "lip", 8: "sie", 9: "wrz", 10: "paź", 11: "lis", 12: "gru" } } } })),
                (y.a1857793848 = b({}, { pattern: "LLLL", timeSeparator: ":", months: { L: { 4: { 1: "styczeń", 2: "luty", 3: "marzec", 4: "kwiecień", 5: "maj", 6: "czerwiec", 7: "lipiec", 8: "sierpień", 9: "wrzesień", 10: "październik", 11: "listopad", 12: "grudzień" } } } })),
                (y.b1183928008 = b({}, { pattern: "cccc", timeSeparator: ":", days: { c: { 4: { sun: "niedziela", mon: "poniedziałek", tue: "wtorek", wed: "środa", thu: "czwartek", fri: "piątek", sat: "sobota" } } } })),
                (y.a1467071960 = m(y("pl").dateToPartsFormatter({ skeleton: "MMMd" }))),
                (y.a1884440069 = m(y("pl").dateToPartsFormatter({ skeleton: "yMMMd" }))),
                (y.b2117874518 = m(y("pl").dateToPartsFormatter({ skeleton: "hm" }))),
                (y.b1792158807 = m(y("pl").dateToPartsFormatter({ skeleton: "MMMEd" }))),
                (y.b1738649316 = m(y("pl").dateToPartsFormatter({ skeleton: "yMMMEd" }))),
                (y.b1784770639 = m(y("pl").dateToPartsFormatter({ skeleton: "MMMMd" }))),
                (y.b1465175520 = m(y("pl").dateToPartsFormatter({ skeleton: "yMMMdhm" }))),
                (y.a1513049012 = m(y("pl").dateToPartsFormatter({ date: "long" }))),
                (y.a1170997555 = m(y("pl").dateToPartsFormatter({ skeleton: "MMMdhm" }))),
                (y.a1393202776 = m(y("pl").dateToPartsFormatter({ date: "short" }))),
                (y.b1314807364 = m(y("pl").dateToPartsFormatter({ skeleton: "y" }))),
                (y.a1861843067 = m(y("pl").dateToPartsFormatter({ skeleton: "yMMM" }))),
                (y.b1875575474 = m(y("pl").dateToPartsFormatter({ datetime: "full" }))),
                (y.a1055933416 = m(y("pl").dateToPartsFormatter({ datetime: "medium" }))),
                (y.a1905681052 = m(y("pl").dateToPartsFormatter({ skeleton: "yMMdd" }))),
                (y.a2048547289 = m(y("pl").dateToPartsFormatter({ time: "short" }))),
                (y.a2060876747 = m(y("pl").dateToPartsFormatter({ skeleton: "Ehm" }))),
                (y.a1883754876 = m(y("pl").dateToPartsFormatter({ skeleton: "yMMMM" }))),
                (y.a133744795 = m(y("pl").dateToPartsFormatter({ date: "medium" }))),
                (y.a1466386767 = m(y("pl").dateToPartsFormatter({ skeleton: "MMMM" }))),
                (y.b1575335089 = m(y("pl").dateToPartsFormatter({ skeleton: "EEEE" }))),
                (y.a31683913 = f(y("pl").numberFormatter({}), y("pl").pluralGenerator({}), { "relativeTime-type-future": { "relativeTimePattern-count-one": "za {0} dzień", "relativeTimePattern-count-few": "za {0} dni", "relativeTimePattern-count-many": "za {0} dni", "relativeTimePattern-count-other": "za {0} dnia" }, "relativeTime-type-past": { "relativeTimePattern-count-one": "{0} dzień temu", "relativeTimePattern-count-few": "{0} dni temu", "relativeTimePattern-count-many": "{0} dni temu", "relativeTimePattern-count-other": "{0} dnia temu" }, "relative-type--2": "przedwczoraj", "relative-type--1": "wczoraj", "relative-type-0": "dzisiaj", "relative-type-1": "jutro", "relative-type-2": "pojutrze" })),
                (y.a1680346926 = l(y("pl").numberFormatter({}), y("pl").pluralGenerator({}), { compoundUnitPattern: "{0} na {1}", unitProperties: { displayName: "sekundy", one: "{0} sekunda", few: "{0} sekundy", many: "{0} sekund", other: "{0} sekundy", perUnitPattern: "{0} na sekundę" } })),
                (y.b206616370 = l(y("pl").numberFormatter({}), y("pl").pluralGenerator({}), { compoundUnitPattern: "{0} na {1}", unitProperties: { displayName: "minuty", one: "{0} minuta", few: "{0} minuty", many: "{0} minut", other: "{0} minuty", perUnitPattern: "{0} na minutę" } })),
                (y.b1916296482 = l(y("pl").numberFormatter({}), y("pl").pluralGenerator({}), { compoundUnitPattern: "{0} na {1}", unitProperties: { displayName: "godziny", one: "{0} godzina", few: "{0} godziny", many: "{0} godzin", other: "{0} godziny", perUnitPattern: "{0} na godzinę" } })),
                (y.a1597057775 = l(y("pl").numberFormatter({}), y("pl").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "sekundy", one: "{0} s", few: "{0} s", many: "{0} s", other: "{0} s", perUnitPattern: "{0}/s" } })),
                (y.a701529231 = l(y("pl").numberFormatter({}), y("pl").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "minuty", one: "{0} min", few: "{0} min", many: "{0} min", other: "{0} min", perUnitPattern: "{0}/min" } })),
                (y.b1623551329 = l(y("pl").numberFormatter({}), y("pl").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "godzina", one: "{0} g.", few: "{0} g.", many: "{0} g.", other: "{0} g.", perUnitPattern: "{0}/h" } })),
                (y.a793257893 = l(y("pl").numberFormatter({}), y("pl").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "dzień", one: "{0} d.", few: "{0} dn.", many: "{0} dn.", other: "{0} dn.", perUnitPattern: "{0}/d." } })),
                (y.a1210237284 = l(y("pl").numberFormatter({}), y("pl").pluralGenerator({}), { compoundUnitPattern: "{0} na {1}", unitProperties: { displayName: "dni", one: "{0} dzień", few: "{0} dni", many: "{0} dni", other: "{0} dnia", perUnitPattern: "{0} na dzień" } })),
                (y.a1704461001 = l(y("pl").numberFormatter({}), y("pl").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "miesiąc", one: "{0} m-c", few: "{0} m-ce", many: "{0} m-cy", other: "{0} m-ca", perUnitPattern: "{0}/mies." } })),
                (y.b1305012856 = l(y("pl").numberFormatter({}), y("pl").pluralGenerator({}), { compoundUnitPattern: "{0} na {1}", unitProperties: { displayName: "miesiące", one: "{0} miesiąc", few: "{0} miesiące", many: "{0} miesięcy", other: "{0} miesiąca", perUnitPattern: "{0} na miesiąc" } })),
                (y.b218988936 = l(y("pl").numberFormatter({}), y("pl").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "rok", one: "{0} r.", few: "{0} l.", many: "{0} l.", other: "{0} r.", perUnitPattern: "{0}/rok" } })),
                (y.b435506953 = l(y("pl").numberFormatter({}), y("pl").pluralGenerator({}), { compoundUnitPattern: "{0} na {1}", unitProperties: { displayName: "lata", one: "{0} rok", few: "{0} lata", many: "{0} lat", other: "{0} roku", perUnitPattern: "{0} na rok" } })),
                (y.b2010496482 = l(y("pl").numberFormatter({}), y("pl").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "sekundy", one: "{0} sek.", few: "{0} sek.", many: "{0} sek.", other: "{0} sek.", perUnitPattern: "{0}/s" } })),
                (y.b376816514 = l(y("pl").numberFormatter({}), y("pl").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "minuty", one: "{0} min", few: "{0} min", many: "{0} min", other: "{0} min", perUnitPattern: "{0}/min" } })),
                (y.b1837292434 = l(y("pl").numberFormatter({}), y("pl").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "godziny", one: "{0} godz.", few: "{0} godz.", many: "{0} godz.", other: "{0} godz.", perUnitPattern: "{0}/h" } })),
                (y.b176852599 = l(y("pl").numberFormatter({ minimumFractionDigits: 1, maximumFractionDigits: 1, round: "truncate" }), y("pl").pluralGenerator({}), { compoundUnitPattern: "{0}/{1}", unitProperties: { displayName: "sekundy", one: "{0} s", few: "{0} s", many: "{0} s", other: "{0} s", perUnitPattern: "{0}/s" } })),
                i("d58baa7f", y.a547593841),
                i("ia24dc8d", y.b155312707),
                i("iab73d4b", y.b1028059043),
                i("i3b7a017", y.a1680346926),
                i("ie5d110f", y.b206616370),
                i("df5f11b3", y.b1916296482),
                i("e8733ed9", y.a1597057775),
                i("be59d8c3", y.a701529231),
                i("i3d087db", y.b1623551329),
                i("ga8d18c9", y.a793257893),
                i("a91e7d49", y.a1210237284),
                i("id952a69", y.a1704461001),
                i("ga09ab65", y.b1305012856),
                i("c83b901d", y.b218988936),
                i("a55b9fed", y.b435506953),
                i("ccaa970f", y.a1467071960),
                i("jade381b", y.a1884440069),
                i("d725a289", y.b2117874518),
                i("g08cbabb", y.b1709317166),
                i("c333da63", y.a31683913),
                i("h8054d91", y.b1792158807),
                i("i61fef37", y.b2010496482),
                i("ba705e27", y.b376816514),
                i("j86b0d8d", y.b1837292434),
                i("f668e929", y.b325085798),
                i("i2785009", y.b464972409),
                i("c778d80b", y.b135206648),
                i("e8d93005", y.b2094140648),
                i("d46781af", y.b176852599),
                i("ba316f05", y.a2131071355),
                i("c0bdd345", y.a1062596089),
                i("aa2aa1a1", y.b1738649316),
                i("da44942d", y.b1784770639),
                i("bfbc051d", y.b1465175520),
                i("ba2e82a1", y.a1513049012),
                i("fc209bb7", y.a1170997555),
                i("cf8abf59", y.a551547043),
                i("a9f397f3", y.a1393202776),
                i("d857e44d", y.b540987027),
                i("cb87e3db", y.a1605604652),
                i("a9d5ffd1", y.b1458903797),
                i("a0e8371d", y.a774169981),
                i("gcc50dc9", y.b2090529057),
                i("a6a43585", y.a772386043),
                i("a0cc8f2d", y.b1031845116),
                i("i31c32c5", y.b430632945),
                i("i7dc69e9", y.a83502481),
                i("c14a6c03", y.b2122131438),
                i("jaa3d537", y.b605381081),
                i("a824080b", y.a1369435692),
                i("d9c0bedb", y.a910774630),
                i("bf8c0613", y.b1351522945),
                i("i8163625", y.b721681623),
                i("adb53ba1", y.a307778521),
                i("iabf697d", y.a1622935529),
                i("a1a0555b", y.a1850184799),
                i("f266f3d9", y.b41123105),
                i("a9a8652b", y.b443715157),
                i("dbf40761", y.b993020840),
                i("b0d993d9", y.a122921403),
                i("ac1308e1", y.a2125772681),
                i("a7889ab3", y.b196161780),
                i("c614f5cd", y.a1921800748),
                i("i55d57e3", y.a146198740),
                i("e4b6002b", y.a29898198),
                i("d28e983b", y.b1431377795),
                i("e8c9232d", y.a315000416),
                i("c8994ae1", y.b1718263951),
                i("f821c2a5", y.a257147468),
                i("j348b9c9", y.b261745126),
                i("i6f93b9b", y.a136684404),
                i("c6150bd5", y.b1096153027),
                i("i8921e09", y.b1497555787),
                i("ef239279", y.a1623021672),
                i("hecdb149", y.b868903757),
                i("fdd039b7", y.b357146915),
                i("f30c2c37", y.b72044697),
                i("d9ea7bff", y.b1133107222),
                i("ea3df4b7", y.b131086937),
                i("jaac21bb", y.b1592957576),
                i("hb435ced", y.a1126217123),
                i("ce699d81", y.a2098418965),
                i("bc56d3d7", y.a117655732),
                i("f8561913", y.b1457542219),
                i("g6485d53", y.a1262227126),
                i("ff561cc1", y.a2035214203),
                i("b42011d3", y.b1575032053),
                i("a6660bcd", y.b406588676),
                i("f9b80449", y.b1437832758),
                i("gdee4d5d", y.a279916302),
                i("h36f2103", y.a1910588617),
                i("a19ad037", y.a965231988),
                i("g713f699", y.b1755132003),
                i("ff2e39af", y.a817923711),
                i("be34316d", y.a1905236803),
                i("aef81b75", y.a1761496402),
                i("fcce70a5", y.a1302835340),
                i("jc9d352f", y.a99816352),
                i("be1cb8c5", y.a814950481),
                i("j9371501", y.b1991895609),
                i("j7d4397d", y.b504369049),
                i("d61441dd", y.a1755549942),
                i("e2a99e97", y.a1095890177),
                i("f7ce19ab", y.a1225359074),
                i("b2a0213f", y.b866352887),
                i("d7d71245", y.b1314807364),
                i("a2f2faab", y.a1861843067),
                i("g8d1b99b", y.b1875575474),
                i("d0a77c9b", y.a1055933416),
                i("e18e399b", y.a1905681052),
                i("b6ca7bcb", y.a2048547289),
                i("h0e4cdf5", y.a2060876747),
                i("g727ddcf", y.a1883754876),
                i("h3629783", y.a133744795),
                i("a20c68af", y.a1466386767),
                i("ja781451", y.b387089515),
                i("cfa1a7b9", y.b1419457608),
                i("f3b9b9a7", y.b1575335089),
                i("eefcd267", y.b1974189318),
                i("fa8afc43", y.a660884699);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/i18n/pl.87f4907a.js.map
