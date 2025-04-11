window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-3dfac8a4"],
        {
            64463: (t, e, r) => {
                var n = r(121430),
                    o = r(736701),
                    i = r(87201),
                    u = new RegExp("\r\n", "g"),
                    a = { "text/rtf": 1, "text/html": 1 };
                function l(t) {
                    if ("file" == t.kind) return t.getAsFile();
                }
                var c = (function () {
                    function t(t) {
                        (this.data = t), (this.types = t.types ? o(t.types) : []);
                    }
                    var e = t.prototype;
                    return (
                        (e.isRichText = function () {
                            return (
                                !(!this.getHTML() || !this.getText()) ||
                                (!this.isImage() &&
                                    this.types.some(function (t) {
                                        return a[t];
                                    }))
                            );
                        }),
                        (e.getText = function () {
                            var t;
                            return this.data.getData && (this.types.length ? -1 != this.types.indexOf("text/plain") && (t = this.data.getData("text/plain")) : (t = this.data.getData("Text"))), t ? t.replace(u, "\n") : null;
                        }),
                        (e.getHTML = function () {
                            if (this.data.getData) {
                                if (!this.types.length) return this.data.getData("Text");
                                if (-1 != this.types.indexOf("text/html")) return this.data.getData("text/html");
                            }
                        }),
                        (e.isLink = function () {
                            return this.types.some(function (t) {
                                return -1 != t.indexOf("Url") || -1 != t.indexOf("text/uri-list") || t.indexOf("text/x-moz-url");
                            });
                        }),
                        (e.getLink = function () {
                            return this.data.getData ? (-1 != this.types.indexOf("text/x-moz-url") ? this.data.getData("text/x-moz-url").split("\n")[0] : -1 != this.types.indexOf("text/uri-list") ? this.data.getData("text/uri-list") : this.data.getData("url")) : null;
                        }),
                        (e.isImage = function () {
                            var t = this.types.some(function (t) {
                                return -1 != t.indexOf("application/x-moz-file");
                            });
                            if (t) return !0;
                            for (var e = this.getFiles(), r = 0; r < e.length; r++) {
                                var o = e[r].type;
                                if (!n.isImage(o)) return !1;
                            }
                            return !0;
                        }),
                        (e.getCount = function () {
                            return this.data.hasOwnProperty("items") ? this.data.items.length : this.data.hasOwnProperty("mozItemCount") ? this.data.mozItemCount : this.data.files ? this.data.files.length : null;
                        }),
                        (e.getFiles = function () {
                            return this.data.items ? Array.prototype.slice.call(this.data.items).map(l).filter(i.thatReturnsArgument) : this.data.files ? Array.prototype.slice.call(this.data.files) : [];
                        }),
                        (e.hasFiles = function () {
                            return this.getFiles().length > 0;
                        }),
                        t
                    );
                })();
                t.exports = c;
            },
            537324: (t) => {
                t.exports = { BACKSPACE: 8, TAB: 9, RETURN: 13, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46, COMMA: 188, PERIOD: 190, A: 65, Z: 90, ZERO: 48, NUMPAD_0: 96, NUMPAD_9: 105 };
            },
            121430: (t) => {
                var e = {
                    isImage: function (t) {
                        return "image" === r(t)[0];
                    },
                    isJpeg: function (t) {
                        var n = r(t);
                        return e.isImage(t) && ("jpeg" === n[1] || "pjpeg" === n[1]);
                    },
                };
                function r(t) {
                    return t.split("/");
                }
                t.exports = e;
            },
            241034: (t) => {
                function e(t, e) {
                    return !!e && (t === e.documentElement || t === e.body);
                }
                var r = {
                    getTop: function (t) {
                        var r = t.ownerDocument;
                        return e(t, r) ? r.body.scrollTop || r.documentElement.scrollTop : t.scrollTop;
                    },
                    setTop: function (t, r) {
                        var n = t.ownerDocument;
                        e(t, n) ? (n.body.scrollTop = n.documentElement.scrollTop = r) : (t.scrollTop = r);
                    },
                    getLeft: function (t) {
                        var r = t.ownerDocument;
                        return e(t, r) ? r.body.scrollLeft || r.documentElement.scrollLeft : t.scrollLeft;
                    },
                    setLeft: function (t, r) {
                        var n = t.ownerDocument;
                        e(t, n) ? (n.body.scrollLeft = n.documentElement.scrollLeft = r) : (t.scrollLeft = r);
                    },
                };
                t.exports = r;
            },
            851981: (t, e, r) => {
                function n(t, e) {
                    var r = o.get(t, e);
                    return "auto" === r || "scroll" === r;
                }
                var o = {
                    get: r(179839),
                    getScrollParent: function (t) {
                        if (!t) return null;
                        for (var e = t.ownerDocument; t && t !== e.body; ) {
                            if (n(t, "overflow") || n(t, "overflowY") || n(t, "overflowX")) return t;
                            t = t.parentNode;
                        }
                        return e.defaultView || e.parentWindow;
                    },
                };
                t.exports = o;
            },
            297993: (t) => {
                t.exports = {
                    getPunctuation: function () {
                        return "[.,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;・、。〈-】〔-〟：-？！-／［-｀｛-･⸮؟٪-٬؛،؍﴾﴿᠁।၊။‐-‧‰-⁞¡-±´-¸º»¿]";
                    },
                };
            },
            60051: (t) => {
                var e = (function () {
                    function t(t) {
                        var e, r, n;
                        (n = void 0), (r = "_uri") in (e = this) ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[r] = n), (this._uri = t);
                    }
                    return (
                        (t.prototype.toString = function () {
                            return this._uri;
                        }),
                        t
                    );
                })();
                t.exports = e;
            },
            254389: (t, e, r) => {
                var n = r(350983),
                    o = r(614983),
                    i = "֐־׀׃׆׈-׏א-ת׫-ׯװ-ײ׳-״׵-׿߀-߉ߊ-ߪߴ-ߵߺ߻-߿ࠀ-ࠕࠚࠤࠨ࠮-࠯࠰-࠾࠿ࡀ-ࡘ࡜-࡝࡞࡟-࢟‏יִײַ-ﬨשׁ-זּ﬷טּ-לּ﬽מּ﬿נּ-סּ﭂ףּ-פּ﭅צּ-ﭏ",
                    u = "؈؋؍؛؜؝؞-؟ؠ-ؿـف-ي٭ٮ-ٯٱ-ۓ۔ەۥ-ۦۮ-ۯۺ-ۼ۽-۾ۿ܀-܍܎܏ܐܒ-ܯ݋-݌ݍ-ޥޱ޲-޿ࢠ-ࢲࢳ-ࣣﭐ-ﮱ﮲-﯁﯂-﯒ﯓ-ﴽ﵀-﵏ﵐ-ﶏ﶐-﶑ﶒ-ﷇ﷈-﷏ﷰ-ﷻ﷼﷾-﷿ﹰ-ﹴ﹵ﹶ-ﻼ﻽-﻾",
                    a = new RegExp("[" + "A-Za-zªµºÀ-ÖØ-öø-ƺƻƼ-ƿǀ-ǃǄ-ʓʔʕ-ʯʰ-ʸʻ-ˁː-ˑˠ-ˤˮͰ-ͳͶ-ͷͺͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҂Ҋ-ԯԱ-Ֆՙ՚-՟ա-և։ःऄ-हऻऽा-ीॉ-ौॎ-ॏॐक़-ॡ।-॥०-९॰ॱॲ-ঀং-ঃঅ-ঌএ-ঐও-নপ-রলশ-হঽা-ীে-ৈো-ৌৎৗড়-ঢ়য়-ৡ০-৯ৰ-ৱ৴-৹৺ਃਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਾ-ੀਖ਼-ੜਫ਼੦-੯ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽા-ીૉો-ૌૐૠ-ૡ૦-૯૰ଂ-ଃଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽାୀେ-ୈୋ-ୌୗଡ଼-ଢ଼ୟ-ୡ୦-୯୰ୱ୲-୷ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹா-ிு-ூெ-ைொ-ௌௐௗ௦-௯௰-௲ఁ-ఃఅ-ఌఎ-ఐఒ-నప-హఽు-ౄౘ-ౙౠ-ౡ౦-౯౿ಂ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽಾಿೀ-ೄೆೇ-ೈೊ-ೋೕ-ೖೞೠ-ೡ೦-೯ೱ-ೲം-ഃഅ-ഌഎ-ഐഒ-ഺഽാ-ീെ-ൈൊ-ൌൎൗൠ-ൡ൦-൯൰-൵൹ൺ-ൿං-ඃඅ-ඖක-නඳ-රලව-ෆා-ෑෘ-ෟ෦-෯ෲ-ෳ෴ก-ะา-ำเ-ๅๆ๏๐-๙๚-๛ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆ໐-໙ໜ-ໟༀ༁-༃༄-༒༓༔༕-༗༚-༟༠-༩༪-༳༴༶༸༾-༿ཀ-ཇཉ-ཬཿ྅ྈ-ྌ྾-࿅࿇-࿌࿎-࿏࿐-࿔࿕-࿘࿙-࿚က-ဪါ-ာေးျ-ြဿ၀-၉၊-၏ၐ-ၕၖ-ၗၚ-ၝၡၢ-ၤၥ-ၦၧ-ၭၮ-ၰၵ-ႁႃ-ႄႇ-ႌႎႏ႐-႙ႚ-ႜ႞-႟Ⴀ-ჅჇჍა-ჺ჻ჼჽ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፨፩-፼ᎀ-ᎏᎠ-Ᏼᐁ-ᙬ᙭-᙮ᙯ-ᙿᚁ-ᚚᚠ-ᛪ᛫-᛭ᛮ-ᛰᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵-᜶ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅះ-ៈ។-៖ៗ៘-៚ៜ០-៩᠐-᠙ᠠ-ᡂᡃᡄ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰ-ᤱᤳ-ᤸ᥆-᥏ᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧀᧁ-ᧇᧈ-ᧉ᧐-᧙᧚ᨀ-ᨖᨙ-ᨚ᨞-᨟ᨠ-ᩔᩕᩗᩡᩣ-ᩤᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪦ᪧ᪨-᪭ᬄᬅ-ᬳᬵᬻᬽ-ᭁᭃ-᭄ᭅ-ᭋ᭐-᭙᭚-᭠᭡-᭪᭴-᭼ᮂᮃ-ᮠᮡᮦ-ᮧ᮪ᮮ-ᮯ᮰-᮹ᮺ-ᯥᯧᯪ-ᯬᯮ᯲-᯳᯼-᯿ᰀ-ᰣᰤ-ᰫᰴ-ᰵ᰻-᰿᱀-᱉ᱍ-ᱏ᱐-᱙ᱚ-ᱷᱸ-ᱽ᱾-᱿᳀-᳇᳓᳡ᳩ-ᳬᳮ-ᳱᳲ-ᳳᳵ-ᳶᴀ-ᴫᴬ-ᵪᵫ-ᵷᵸᵹ-ᶚᶛ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℵ-ℸℹℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↂↃ-ↄↅ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿Ⰰ-Ⱞⰰ-ⱞⱠ-ⱻⱼ-ⱽⱾ-ⳤⳫ-ⳮⳲ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々〆〇〡-〩〮-〯〱-〵〸-〺〻〼ぁ-ゖゝ-ゞゟァ-ヺー-ヾヿㄅ-ㄭㄱ-ㆎ㆐-㆑㆒-㆕㆖-㆟ㆠ-ㆺㇰ-ㇿ㈀-㈜㈠-㈩㈪-㉇㉈-㉏㉠-㉻㉿㊀-㊉㊊-㊰㋀-㋋㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵一-鿌ꀀ-ꀔꀕꀖ-ꒌꓐ-ꓷꓸ-ꓽ꓾-꓿ꔀ-ꘋꘌꘐ-ꘟ꘠-꘩ꘪ-ꘫꙀ-ꙭꙮꚀ-ꚛꚜ-ꚝꚠ-ꛥꛦ-ꛯ꛲-꛷Ꜣ-ꝯꝰꝱ-ꞇ꞉-꞊Ꞌ-ꞎꞐ-ꞭꞰ-Ʇꟷꟸ-ꟹꟺꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꠣ-ꠤꠧ꠰-꠵꠶-꠷ꡀ-ꡳꢀ-ꢁꢂ-ꢳꢴ-ꣃ꣎-꣏꣐-꣙ꣲ-ꣷ꣸-꣺ꣻ꤀-꤉ꤊ-ꤥ꤮-꤯ꤰ-ꥆꥒ-꥓꥟ꥠ-ꥼꦃꦄ-ꦲꦴ-ꦵꦺ-ꦻꦽ-꧀꧁-꧍ꧏ꧐-꧙꧞-꧟ꧠ-ꧤꧦꧧ-ꧯ꧰-꧹ꧺ-ꧾꨀ-ꨨꨯ-ꨰꨳ-ꨴꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-꩟ꩠ-ꩯꩰꩱ-ꩶ꩷-꩹ꩺꩻꩽꩾ-ꪯꪱꪵ-ꪶꪹ-ꪽꫀꫂꫛ-ꫜꫝ꫞-꫟ꫠ-ꫪꫫꫮ-ꫯ꫰-꫱ꫲꫳ-ꫴꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚ꭛ꭜ-ꭟꭤ-ꭥꯀ-ꯢꯣ-ꯤꯦ-ꯧꯩ-ꯪ꯫꯬꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ-豈-舘並-龎ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ｯｰｱ-ﾝﾞ-ﾟﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ" + i + u + "]"),
                    l = new RegExp("[" + i + u + "]");
                function c(t) {
                    var e = a.exec(t);
                    return null == e ? null : e[0];
                }
                function s(t) {
                    var e = c(t);
                    return null == e ? n.NEUTRAL : l.exec(e) ? n.RTL : n.LTR;
                }
                function f(t, e) {
                    if (((e = e || n.NEUTRAL), !t.length)) return e;
                    var r = s(t);
                    return r === n.NEUTRAL ? e : r;
                }
                function p(t, e) {
                    return e || (e = n.getGlobalDir()), n.isStrong(e) || o(!1), f(t, e);
                }
                var h = {
                    firstStrongChar: c,
                    firstStrongCharDir: s,
                    resolveBlockDir: f,
                    getDirection: p,
                    isDirectionLTR: function (t, e) {
                        return p(t, e) === n.LTR;
                    },
                    isDirectionRTL: function (t, e) {
                        return p(t, e) === n.RTL;
                    },
                };
                t.exports = h;
            },
            350983: (t, e, r) => {
                var n = r(614983),
                    o = "LTR",
                    i = null;
                function u(t) {
                    return t === o || "RTL" === t;
                }
                function a(t) {
                    return u(t) || n(!1), t === o ? "ltr" : "rtl";
                }
                function l(t) {
                    i = t;
                }
                var c = {
                    NEUTRAL: "NEUTRAL",
                    LTR: o,
                    RTL: "RTL",
                    isStrong: u,
                    getHTMLDir: a,
                    getHTMLDirIfDifferent: function (t, e) {
                        return u(t) || n(!1), u(e) || n(!1), t === e ? null : a(t);
                    },
                    setGlobalDir: l,
                    initGlobalDir: function () {
                        l(o);
                    },
                    getGlobalDir: function () {
                        return i || this.initGlobalDir(), i || n(!1), i;
                    },
                };
                t.exports = c;
            },
            428934: (t, e, r) => {
                function n(t, e, r) {
                    return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
                }
                var o = r(254389),
                    i = r(350983),
                    u = r(614983),
                    a = (function () {
                        function t(t) {
                            n(this, "_defaultDir", void 0), n(this, "_lastDir", void 0), t ? i.isStrong(t) || u(!1) : (t = i.getGlobalDir()), (this._defaultDir = t), this.reset();
                        }
                        var e = t.prototype;
                        return (
                            (e.reset = function () {
                                this._lastDir = this._defaultDir;
                            }),
                            (e.getDirection = function (t) {
                                return (this._lastDir = o.getDirection(t, this._lastDir)), this._lastDir;
                            }),
                            t
                        );
                    })();
                t.exports = a;
            },
            522885: (t, e, r) => {
                var n = r(614983),
                    o = /[\uD800-\uDFFF]/;
                function i(t) {
                    return 55296 <= t && t <= 57343;
                }
                function u(t) {
                    return o.test(t);
                }
                function a(t, e) {
                    return 1 + i(t.charCodeAt(e));
                }
                function l(t, e, r) {
                    if (((e = e || 0), (r = void 0 === r ? 1 / 0 : r || 0), !u(t))) return t.substr(e, r);
                    var n = t.length;
                    if (n <= 0 || e > n || r <= 0) return "";
                    var o = 0;
                    if (e > 0) {
                        for (; e > 0 && o < n; e--) o += a(t, o);
                        if (o >= n) return "";
                    } else if (e < 0) {
                        for (o = n; e < 0 && 0 < o; e++) o -= a(t, o - 1);
                        o < 0 && (o = 0);
                    }
                    var i = n;
                    if (r < n) for (i = o; r > 0 && i < n; r--) i += a(t, i);
                    return t.substring(o, i);
                }
                var c = {
                    getCodePoints: function (t) {
                        for (var e = [], r = 0; r < t.length; r += a(t, r)) e.push(t.codePointAt(r));
                        return e;
                    },
                    getUTF16Length: a,
                    hasSurrogateUnit: u,
                    isCodeUnitInSurrogateRange: i,
                    isSurrogatePair: function (t, e) {
                        if (((0 <= e && e < t.length) || n(!1), e + 1 === t.length)) return !1;
                        var r = t.charCodeAt(e),
                            o = t.charCodeAt(e + 1);
                        return 55296 <= r && r <= 56319 && 56320 <= o && o <= 57343;
                    },
                    strlen: function (t) {
                        if (!u(t)) return t.length;
                        for (var e = 0, r = 0; r < t.length; r += a(t, r)) e++;
                        return e;
                    },
                    substring: function (t, e, r) {
                        (e = e || 0) < 0 && (e = 0), (r = void 0 === r ? 1 / 0 : r || 0) < 0 && (r = 0);
                        var n = Math.abs(r - e);
                        return l(t, (e = e < r ? e : r), n);
                    },
                    substr: l,
                };
                t.exports = c;
            },
            239405: (t, e, r) => {
                var n = r(964236),
                    o = r(405451),
                    i = r(85149),
                    u = r(539846);
                function a(t, e, r, n) {
                    if (t === r) return !0;
                    if (!r.startsWith(t)) return !1;
                    var i = r.slice(t.length);
                    return !!e && ((i = n ? n(i) : i), o.contains(i, e));
                }
                function l(t) {
                    return "Windows" === n.platformName ? t.replace(/^\s*NT/, "") : t;
                }
                var c = {
                    isBrowser: function (t) {
                        return a(n.browserName, n.browserFullVersion, t);
                    },
                    isBrowserArchitecture: function (t) {
                        return a(n.browserArchitecture, null, t);
                    },
                    isDevice: function (t) {
                        return a(n.deviceName, null, t);
                    },
                    isEngine: function (t) {
                        return a(n.engineName, n.engineVersion, t);
                    },
                    isPlatform: function (t) {
                        return a(n.platformName, n.platformFullVersion, t, l);
                    },
                    isPlatformArchitecture: function (t) {
                        return a(n.platformArchitecture, null, t);
                    },
                };
                t.exports = i(c, u);
            },
            964236: (t, e, r) => {
                var n = r(749513),
                    o = "Unknown",
                    i = { "Mac OS": "Mac OS X" };
                var u,
                    a = new n().getResult(),
                    l = (function (t) {
                        if (!t) return { major: "", minor: "" };
                        var e = t.split(".");
                        return { major: e[0], minor: e[1] };
                    })(a.browser.version),
                    c = { browserArchitecture: a.cpu.architecture || o, browserFullVersion: a.browser.version || o, browserMinorVersion: l.minor || o, browserName: a.browser.name || o, browserVersion: a.browser.major || o, deviceName: a.device.model || o, engineName: a.engine.name || o, engineVersion: a.engine.version || o, platformArchitecture: a.cpu.architecture || o, platformName: ((u = a.os.name), i[u] || u || o), platformVersion: a.os.version || o, platformFullVersion: a.os.version || o };
                t.exports = c;
            },
            405451: (t, e, r) => {
                var n = r(614983),
                    o = /\./,
                    i = /\|\|/,
                    u = /\s+\-\s+/,
                    a = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
                    l = /^(\d*)(.*)/;
                function c(t, e) {
                    var r = t.split(i);
                    return r.length > 1
                        ? r.some(function (t) {
                              return x.contains(t, e);
                          })
                        : (function (t, e) {
                              var r = t.split(u);
                              if (((r.length > 0 && r.length <= 2) || n(!1), 1 === r.length)) return s(r[0], e);
                              var o = r[0],
                                  i = r[1];
                              return (g(o) && g(i)) || n(!1), s(">=" + o, e) && s("<=" + i, e);
                          })((t = r[0].trim()), e);
                }
                function s(t, e) {
                    if ("" === (t = t.trim())) return !0;
                    var r,
                        n = e.split(o),
                        i = h(t),
                        u = i.modifier,
                        a = i.rangeComponents;
                    switch (u) {
                        case "<":
                            return f(n, a);
                        case "<=":
                            return -1 === (r = w(n, a)) || 0 === r;
                        case ">=":
                            return p(n, a);
                        case ">":
                            return (function (t, e) {
                                return 1 === w(t, e);
                            })(n, a);
                        case "~":
                        case "~>":
                            return (function (t, e) {
                                var r = e.slice(),
                                    n = e.slice();
                                n.length > 1 && n.pop();
                                var o = n.length - 1,
                                    i = parseInt(n[o], 10);
                                d(i) && (n[o] = i + 1 + "");
                                return p(t, r) && f(t, n);
                            })(n, a);
                        default:
                            return (function (t, e) {
                                return 0 === w(t, e);
                            })(n, a);
                    }
                }
                function f(t, e) {
                    return -1 === w(t, e);
                }
                function p(t, e) {
                    var r = w(t, e);
                    return 1 === r || 0 === r;
                }
                function h(t) {
                    var e = t.split(o),
                        r = e[0].match(a);
                    return r || n(!1), { modifier: r[1], rangeComponents: [r[2]].concat(e.slice(1)) };
                }
                function d(t) {
                    return !isNaN(t) && isFinite(t);
                }
                function g(t) {
                    return !h(t).modifier;
                }
                function m(t, e) {
                    for (var r = t.length; r < e; r++) t[r] = "0";
                }
                function v(t, e) {
                    var r = t.match(l)[1],
                        n = e.match(l)[1],
                        o = parseInt(r, 10),
                        i = parseInt(n, 10);
                    return d(o) && d(i) && o !== i ? y(o, i) : y(t, e);
                }
                function y(t, e) {
                    return typeof t != typeof e && n(!1), t > e ? 1 : t < e ? -1 : 0;
                }
                function w(t, e) {
                    for (
                        var r = (function (t, e) {
                                m((t = t.slice()), (e = e.slice()).length);
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r].match(/^[x*]$/i);
                                    if (n && ((e[r] = t[r] = "0"), "*" === n[0] && r === e.length - 1)) for (var o = r; o < t.length; o++) t[o] = "0";
                                }
                                return m(e, t.length), [t, e];
                            })(t, e),
                            n = r[0],
                            o = r[1],
                            i = 0;
                        i < o.length;
                        i++
                    ) {
                        var u = v(n[i], o[i]);
                        if (u) return u;
                    }
                    return 0;
                }
                var x = {
                    contains: function (t, e) {
                        return c(t.trim(), e.trim());
                    },
                };
                t.exports = x;
            },
            193860: (t) => {
                var e = [],
                    r = [];
                function n(t, e, r, o) {
                    if (t === e) return 0 !== t || 1 / t == 1 / e;
                    if (null == t || null == e) return !1;
                    if ("object" != typeof t || "object" != typeof e) return !1;
                    var i = Object.prototype.toString,
                        u = i.call(t);
                    if (u != i.call(e)) return !1;
                    switch (u) {
                        case "[object String]":
                            return t == String(e);
                        case "[object Number]":
                            return !isNaN(t) && !isNaN(e) && t == Number(e);
                        case "[object Date]":
                        case "[object Boolean]":
                            return +t == +e;
                        case "[object RegExp]":
                            return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase;
                    }
                    for (var a = r.length; a--; ) if (r[a] == t) return o[a] == e;
                    r.push(t), o.push(e);
                    var l = 0;
                    if ("[object Array]" === u) {
                        if ((l = t.length) !== e.length) return !1;
                        for (; l--; ) if (!n(t[l], e[l], r, o)) return !1;
                    } else {
                        if (t.constructor !== e.constructor) return !1;
                        if (t.hasOwnProperty("valueOf") && e.hasOwnProperty("valueOf")) return t.valueOf() == e.valueOf();
                        var c = Object.keys(t);
                        if (c.length != Object.keys(e).length) return !1;
                        for (var s = 0; s < c.length; s++) if (!n(t[c[s]], e[c[s]], r, o)) return !1;
                    }
                    return r.pop(), o.pop(), !0;
                }
                t.exports =
                    /**
                     * Checks if two values are equal. Values may be primitives, arrays, or objects.
                     * Returns true if both arguments have the same keys and values.
                     *
                     * @see http://underscorejs.org
                     * @copyright 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
                     * @license MIT
                     */
                    function (t, o) {
                        var i = e.length ? e.pop() : [],
                            u = r.length ? r.pop() : [],
                            a = n(t, o, i, u);
                        return (i.length = 0), (u.length = 0), e.push(i), r.push(u), a;
                    };
            },
            283594: (t) => {
                var e = /-(.)/g;
                t.exports = function (t) {
                    return t.replace(e, function (t, e) {
                        return e.toUpperCase();
                    });
                };
            },
            629988: (t, e, r) => {
                var n = r(748665);
                t.exports = function t(e, r) {
                    return !(!e || !r) && (e === r || (!n(e) && (n(r) ? t(e, r.parentNode) : "contains" in e ? e.contains(r) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(r)))));
                };
            },
            736701: (t, e, r) => {
                var n = r(614983);
                t.exports = function (t) {
                    return (function (t) {
                        return !!t && ("object" == typeof t || "function" == typeof t) && "length" in t && !("setInterval" in t) && "number" != typeof t.nodeType && (Array.isArray(t) || "callee" in t || "item" in t);
                    })(t)
                        ? Array.isArray(t)
                            ? t.slice()
                            : (function (t) {
                                  var e = t.length;
                                  if (((Array.isArray(t) || ("object" != typeof t && "function" != typeof t)) && n(!1), "number" != typeof e && n(!1), 0 === e || e - 1 in t || n(!1), "function" == typeof t.callee && n(!1), t.hasOwnProperty))
                                      try {
                                          return Array.prototype.slice.call(t);
                                      } catch (t) {}
                                  for (var r = Array(e), o = 0; o < e; o++) r[o] = t[o];
                                  return r;
                              })(t)
                        : [t];
                };
            },
            671878: (t) => {
                function e(t) {
                    return t.replace(/\//g, "-");
                }
                t.exports = function (t) {
                    return "object" == typeof t
                        ? Object.keys(t)
                              .filter(function (e) {
                                  return t[e];
                              })
                              .map(e)
                              .join(" ")
                        : Array.prototype.map.call(arguments, e).join(" ");
                };
            },
            87201: (t) => {
                function e(t) {
                    return function () {
                        return t;
                    };
                }
                var r = function () {};
                (r.thatReturns = e),
                    (r.thatReturnsFalse = e(!1)),
                    (r.thatReturnsTrue = e(!0)),
                    (r.thatReturnsNull = e(null)),
                    (r.thatReturnsThis = function () {
                        return this;
                    }),
                    (r.thatReturnsArgument = function (t) {
                        return t;
                    }),
                    (t.exports = r);
            },
            360917: (t) => {
                t.exports = {};
            },
            575744: (t) => {
                t.exports = function (t) {
                    if (void 0 === (t = t || ("undefined" != typeof document ? document : void 0))) return null;
                    try {
                        return t.activeElement || t.body;
                    } catch (e) {
                        return t.body;
                    }
                };
            },
            359523: (t) => {
                var e = "undefined" != typeof navigator && navigator.userAgent.indexOf("AppleWebKit") > -1;
                t.exports = function (t) {
                    return (t = t || document).scrollingElement ? t.scrollingElement : e || "CSS1Compat" !== t.compatMode ? t.body : t.documentElement;
                };
            },
            904105: (t, e, r) => {
                var n = r(404192);
                t.exports = function (t) {
                    var e = n(t);
                    return { x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top };
                };
            },
            404192: (t, e, r) => {
                var n = r(629988);
                t.exports = function (t) {
                    var e = t.ownerDocument.documentElement;
                    if (!("getBoundingClientRect" in t) || !n(e, t)) return { left: 0, right: 0, top: 0, bottom: 0 };
                    var r = t.getBoundingClientRect();
                    return { left: Math.round(r.left) - e.clientLeft, right: Math.round(r.right) - e.clientLeft, top: Math.round(r.top) - e.clientTop, bottom: Math.round(r.bottom) - e.clientTop };
                };
            },
            682415: (t, e, r) => {
                var n = r(359523),
                    o = r(533291);
                t.exports = function (t) {
                    var e = n(t.ownerDocument || t.document);
                    t.Window && t instanceof t.Window && (t = e);
                    var r = o(t),
                        i = t === e ? t.ownerDocument.documentElement : t,
                        u = t.scrollWidth - i.clientWidth,
                        a = t.scrollHeight - i.clientHeight;
                    return (r.x = Math.max(0, Math.min(r.x, u))), (r.y = Math.max(0, Math.min(r.y, a))), r;
                };
            },
            179839: (t, e, r) => {
                var n = r(283594),
                    o = r(929218);
                function i(t) {
                    return null == t ? t : String(t);
                }
                t.exports = function (t, e) {
                    var r;
                    if (window.getComputedStyle && (r = window.getComputedStyle(t, null))) return i(r.getPropertyValue(o(e)));
                    if (document.defaultView && document.defaultView.getComputedStyle) {
                        if ((r = document.defaultView.getComputedStyle(t, null))) return i(r.getPropertyValue(o(e)));
                        if ("display" === e) return "none";
                    }
                    return t.currentStyle ? i("float" === e ? t.currentStyle.cssFloat || t.currentStyle.styleFloat : t.currentStyle[n(e)]) : i(t.style && t.style[n(e)]);
                };
            },
            533291: (t) => {
                t.exports = function (t) {
                    return t.Window && t instanceof t.Window ? { x: t.pageXOffset || t.document.documentElement.scrollLeft, y: t.pageYOffset || t.document.documentElement.scrollTop } : { x: t.scrollLeft, y: t.scrollTop };
                };
            },
            931821: (t) => {
                function e() {
                    var t;
                    return document.documentElement && (t = document.documentElement.clientWidth), !t && document.body && (t = document.body.clientWidth), t || 0;
                }
                function r() {
                    var t;
                    return document.documentElement && (t = document.documentElement.clientHeight), !t && document.body && (t = document.body.clientHeight), t || 0;
                }
                function n() {
                    return { width: window.innerWidth || e(), height: window.innerHeight || r() };
                }
                (n.withoutScrollbars = function () {
                    return { width: e(), height: r() };
                }),
                    (t.exports = n);
            },
            929218: (t) => {
                var e = /([A-Z])/g;
                t.exports = function (t) {
                    return t.replace(e, "-$1").toLowerCase();
                };
            },
            614983: (t) => {
                var e = function (t) {};
                t.exports = function (t, r) {
                    for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) o[i - 2] = arguments[i];
                    if ((e(r), !t)) {
                        var u;
                        if (void 0 === r) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                        else {
                            var a = 0;
                            (u = new Error(
                                r.replace(/%s/g, function () {
                                    return String(o[a++]);
                                }),
                            )).name = "Invariant Violation";
                        }
                        throw ((u.framesToPop = 1), u);
                    }
                };
            },
            957068: (t) => {
                t.exports = function (t) {
                    var e = (t ? t.ownerDocument || t : document).defaultView || window;
                    return !(!t || !("function" == typeof e.Node ? t instanceof e.Node : "object" == typeof t && "number" == typeof t.nodeType && "string" == typeof t.nodeName));
                };
            },
            748665: (t, e, r) => {
                var n = r(957068);
                t.exports = function (t) {
                    return n(t) && 3 == t.nodeType;
                };
            },
            128106: (t) => {
                t.exports = function (t) {
                    var e = t || "",
                        r = arguments.length;
                    if (r > 1)
                        for (var n = 1; n < r; n++) {
                            var o = arguments[n];
                            o && (e = (e ? e + " " : "") + o);
                        }
                    return e;
                };
            },
            85149: (t) => {
                var e = Object.prototype.hasOwnProperty;
                t.exports = function (t, r, n) {
                    if (!t) return null;
                    var o = {};
                    for (var i in t) e.call(t, i) && (o[i] = r.call(n, t[i], i, t));
                    return o;
                };
            },
            539846: (t) => {
                t.exports = function (t) {
                    var e = {};
                    return function (r) {
                        return e.hasOwnProperty(r) || (e[r] = t.call(this, r)), e[r];
                    };
                };
            },
            727951: (t) => {
                t.exports = function (t) {
                    if (null != t) return t;
                    throw new Error("Got unexpected null or undefined");
                };
            },
            411916: (t, e, r) => {
                r(166985), (t.exports = r.g.setImmediate);
            },
            476984: (t) => {
                var e = Object.prototype.hasOwnProperty;
                function r(t, e) {
                    return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e;
                }
                t.exports = function (t, n) {
                    if (r(t, n)) return !0;
                    if ("object" != typeof t || null === t || "object" != typeof n || null === n) return !1;
                    var o = Object.keys(t),
                        i = Object.keys(n);
                    if (o.length !== i.length) return !1;
                    for (var u = 0; u < o.length; u++) if (!e.call(n, o[u]) || !r(t[o[u]], n[o[u]])) return !1;
                    return !0;
                };
            },
            826590: (t, e, r) => {
                var n = r(87201);
                t.exports = n;
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-3dfac8a4.346d055a.js.map
