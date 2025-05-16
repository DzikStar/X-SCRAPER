"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-967cca90"],
    {
        313433: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(202784),
                o = a(925873),
                l = a(392237),
                r = a(913670);
            const i = l.default.create((e) => ({ iconGray: { color: e.colors.gray700 } })),
                c = ({ editorState: e, onChange: t }) => {
                    const a = n.useCallback(
                        (a) => {
                            const n = o.Z.insertTextAtCursor(e, a.text);
                            t(n);
                        },
                        [e, t],
                    );
                    return n.createElement(r.Z, { iconStyle: i.iconGray, key: "emoji-picker", onEmojiSelect: a, size: "small", testID: "btn-emoji", type: "primaryText" });
                };
        },
        373554: (e, t, a) => {
            a.d(t, { Z: () => g, h: () => h });
            var n = a(807896),
                o = a(202784),
                l = a(449161),
                r = a(392237),
                i = a(332920),
                c = a.n(i),
                s = a(473026),
                d = a(276259),
                p = a(540387);
            const u = "fileInput",
                m = c().b9960f32,
                b = o.createElement(s.default, null),
                h = ({ acceptGifs: e, acceptImages: t = !0, acceptVideo: a }) => (t ? d.v5 : []).concat(e ? [d.Re] : []).concat(a ? p.jn : []);
            const y = r.default.create((e) => ({ root: { margin: `-${e.spaces.space12}` } })),
                g = function ({ "aria-label": e = m, acceptGifs: t = !0, acceptImages: a = !0, acceptVideo: r = !0, customMimeTypes: i = [], icon: c = b, size: s = "medium", style: d, withIcon: p = !0, ...g }) {
                    const f = h({ acceptGifs: t, acceptImages: a, acceptVideo: r }).concat(i).join(",");
                    return o.createElement(l.Z, (0, n.Z)({}, g, { accept: f, "aria-label": e, icon: p ? c : void 0, size: s, style: [y.root, d], testID: u }));
                };
        },
        741049: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(807896),
                o = a(202784),
                l = a(879891),
                r = a(779610),
                i = a(731708),
                c = a(415725);
            const s = (e) => {
                const { direction: t } = (0, l.Z)();
                return o.createElement(c.Z, { exact: !0, path: e.link }, (a) => {
                    const l = t;
                    return o.createElement(r.Z, (0, n.Z)({ isActive: a }, e, { label: o.createElement(i.ZP, { dir: l, testID: "rtl" === l ? "test-RTLtext" : "test-LTRtext" }, e.label) }));
                });
            };
        },
        518426: (e, t, a) => {
            a.d(t, { Z: () => f });
            var n = a(202784),
                o = a(325686),
                l = a(855488),
                r = a(392237),
                i = a(332920),
                c = a.n(i),
                s = a(666536),
                d = a(125568),
                p = a(874088),
                u = a(339110),
                m = a(524110),
                b = a(611478);
            const h = c().d942865e,
                y = ({ onChange: e, onEnter: t, onSelect: a, value: r }) => {
                    const i = n.useRef(null),
                        [c, y] = n.useState(!1),
                        [f, C] = n.useState([]),
                        k = n.useMemo(() => (0, b.Is)(), []),
                        E = (0, d.t)(),
                        w = n.useMemo(
                            () =>
                                (0, s.Z)((e) => {
                                    E() && (e.length >= 1 ? (y(!0), C((0, b.lH)(e, k))) : y(!1));
                                }, 100),
                            [E, k],
                        ),
                        S = n.useCallback(
                            (t) => {
                                e(t.target.value), w(t.target.value);
                            },
                            [w, e],
                        ),
                        v = n.useCallback(
                            (e, t) => {
                                i?.current?.focus(), a(e.id, e.data?.topic), y(!1);
                            },
                            [a],
                        ),
                        x = n.useCallback((e) => (c ? n.createElement(n.Fragment, null, n.createElement(o.Z, { onClick: () => y(!1), style: g.mask }), n.createElement(m.Z, { items: f, onItemClick: v, ref: e.ref, source: u._4.Unknown, style: [e.style, g.dropdown] })) : null), [v, f, c]),
                        T = n.useCallback(
                            (e) => {
                                const { onFocus: a } = e;
                                return n.createElement(l.Z, { autoComplete: "off", label: h, name: "programming-language-input", onChange: S, onFocus: a, onKeyPress: t, ref: i, style: g.inputStyle, testID: "programming-language-input", value: r });
                            },
                            [S, t, r],
                        );
                    return n.createElement(p.default, { isCompact: !0, renderCustomDropdown: x, renderCustomInput: T, rounded: !0, source: u._4.Unknown, testID: "programming-language-selector", userLimit: 20 });
                },
                g = r.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, dropdown: { maxHeight: "25vh" }, mask: { ...r.default.absoluteFillObject, position: "fixed" } })),
                f = n.memo(y);
        },
        611478: (e, t, a) => {
            a.d(t, { Hn: () => l, lH: () => o, Is: () => r });
            const n = {
                    "1c": "1C",
                    abnf: "ABNF",
                    accesslog: "AccessLog",
                    actionscript: "ActionScript",
                    ada: "Ada",
                    angelscript: "AngelScript",
                    apache: "Apache",
                    applescript: "AppleScript",
                    arcade: "Arcade",
                    arduino: "Arduino",
                    armasm: "ARMASM",
                    asciidoc: "AsciiDoc",
                    aspectj: "AspectJ",
                    autohotkey: "AutoHotkey",
                    autoit: "AutoIt",
                    avrasm: "AVRASM",
                    awk: "Awk",
                    axapta: "Axapta",
                    bash: "Bash",
                    basic: "Basic",
                    bnf: "BNF",
                    brainfuck: "Brainfuck",
                    c: "C",
                    "c-like": "C-like",
                    cal: "Cal",
                    capnproto: "Cap'n Proto",
                    ceylon: "Ceylon",
                    clean: "Clean",
                    clojure: "Clojure",
                    "clojure-repl": "Clojure REPL",
                    cmake: "CMake",
                    coffeescript: "CoffeeScript",
                    coq: "Coq",
                    cos: "Cos",
                    cpp: "C++",
                    crmsh: "CRMsh",
                    crystal: "Crystal",
                    csharp: "C#",
                    csp: "CSP",
                    css: "CSS",
                    d: "D",
                    dart: "Dart",
                    delphi: "Delphi",
                    diff: "Diff",
                    django: "Django",
                    dns: "DNS",
                    dockerfile: "Dockerfile",
                    dos: "DOS",
                    dsconfig: "DSConfig",
                    dts: "DTS",
                    dust: "Dust",
                    ebnf: "EBNF",
                    elixir: "Elixir",
                    elm: "Elm",
                    erb: "ERB",
                    erlang: "Erlang",
                    "erlang-repl": "Erlang REPL",
                    excel: "Excel",
                    fix: "FIX",
                    flix: "Flix",
                    fortran: "Fortran",
                    fsharp: "F#",
                    gams: "GAMS",
                    gauss: "Gauss",
                    gcode: "G-code",
                    gherkin: "Gherkin",
                    glsl: "GLSL",
                    gml: "GML",
                    go: "Go",
                    golo: "Golo",
                    gradle: "Gradle",
                    groovy: "Groovy",
                    haml: "Haml",
                    handlebars: "Handlebars",
                    haskell: "Haskell",
                    haxe: "Haxe",
                    hsp: "HSP",
                    htmlbars: "HTMLBars",
                    http: "HTTP",
                    hy: "Hy",
                    inform7: "Inform7",
                    ini: "Ini",
                    irpf90: "IRPF90",
                    isbl: "ISBL",
                    java: "Java",
                    javascript: "JavaScript",
                    "jboss-cli": "JBoss CLI",
                    json: "JSON",
                    julia: "Julia",
                    "julia-repl": "Julia REPL",
                    kotlin: "Kotlin",
                    lasso: "Lasso",
                    latex: "LaTeX",
                    ldif: "LDIF",
                    leaf: "Leaf",
                    less: "Less",
                    lisp: "Lisp",
                    livecodeserver: "LiveCode Server",
                    livescript: "LiveScript",
                    llvm: "LLVM",
                    lsl: "LSL",
                    lua: "Lua",
                    makefile: "Makefile",
                    markdown: "Markdown",
                    mathematica: "Mathematica",
                    matlab: "MATLAB",
                    maxima: "Maxima",
                    mel: "Mel",
                    mercury: "Mercury",
                    mipsasm: "MIPSASM",
                    mizar: "Mizar",
                    mojolicious: "Mojolicious",
                    monkey: "Monkey",
                    moonscript: "MoonScript",
                    n1ql: "N1QL",
                    nginx: "NGINX",
                    nim: "Nim",
                    nix: "Nix",
                    "node-repl": "Node REPL",
                    nsis: "NSIS",
                    objectivec: "Objective-C",
                    ocaml: "OCaml",
                    openscad: "OpenSCAD",
                    oxygene: "Oxygene",
                    parser3: "Parser3",
                    perl: "Perl",
                    pf: "PF",
                    pgsql: "PgSQL",
                    php: "PHP",
                    "php-template": "PHP Template",
                    plaintext: "Plain Text",
                    pony: "Pony",
                    powershell: "PowerShell",
                    processing: "Processing",
                    profile: "Profile",
                    prolog: "Prolog",
                    properties: "Properties",
                    protobuf: "Protobuf",
                    puppet: "Puppet",
                    purebasic: "PureBasic",
                    python: "Python",
                    "python-repl": "Python REPL",
                    q: "Q",
                    qml: "QML",
                    r: "R",
                    reasonml: "ReasonML",
                    rib: "RIB",
                    roboconf: "Roboconf",
                    routeros: "RouterOS",
                    rsl: "RSL",
                    ruby: "Ruby",
                    ruleslanguage: "Rules Language",
                    rust: "Rust",
                    sas: "SAS",
                    scala: "Scala",
                    scheme: "Scheme",
                    scilab: "Scilab",
                    scss: "SCSS",
                    shell: "Shell",
                    smali: "Smali",
                    smalltalk: "Smalltalk",
                    sml: "SML",
                    sqf: "SQF",
                    sql: "SQL",
                    sql_more: "SQL More",
                    stan: "Stan",
                    stata: "Stata",
                    step21: "STEP21",
                    stylus: "Stylus",
                    subunit: "Subunit",
                    swift: "Swift",
                    taggerscript: "TaggerScript",
                    tap: "TAP",
                    tcl: "Tcl",
                    thrift: "Thrift",
                    tp: "TP",
                    twig: "Twig",
                    typescript: "TypeScript",
                    vala: "Vala",
                    vbnet: "VB.NET",
                    vbscript: "VBScript",
                    "vbscript-html": "VBScript HTML",
                    verilog: "Verilog",
                    vhdl: "VHDL",
                    vim: "Vim",
                    x86asm: "x86 Assembly",
                    xl: "XL",
                    xml: "XML",
                    xquery: "XQuery",
                    yaml: "YAML",
                    zephir: "Zephir",
                },
                o = (e, t) => {
                    const a = new RegExp(e, "i");
                    return t.filter((e) => a.test(e.id) || a.test(e.data.topic));
                },
                l = (e) => e.charAt(0).toUpperCase() + e.slice(1),
                r = () => Object.keys(n).map((e) => ({ id: e, type: "topic", data: { topic: n[e] ?? l(e) } }));
        },
        253493: (e, t, a) => {
            a.d(t, { Z: () => k });
            var n = a(202784),
                o = a(107267),
                l = a(791632),
                r = a(325686),
                i = a(537392),
                c = a(10656),
                s = a(655352),
                d = a(555079),
                p = a(500002),
                u = a(625661),
                m = a(449067),
                b = a(655543),
                h = a(715601),
                y = a(392237);
            const g = y.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...y.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class f extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? n.createElement(r.Z, { style: g.fill }, n.createElement(h.Z, { style: g.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return n.createElement(i.ZP, null, ({ containerWidth: e }) => (c.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: a, screenType: o, showSubtitleOnRoot: l, showSubtitleOnWideDetail: r, withBottomBorder: i, withDetailOpen: c, ...d } = this.props;
                    return n.createElement(n.Fragment, null, (0, s.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : n.createElement(m.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return n.createElement(n.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: a, appBarStyle: o, backLocation: l, documentTitle: i, headerless: c, history: s, leftControl: p, middleControl: b, onBackClick: h, rightControl: y, screenType: f, searchBoxOptions: C, secondaryBar: k, showSubtitleOnRoot: E, showSubtitleOnWideDetail: w, subtitle: S, title: v, titleIconCell: x, titleIconCellSize: T, withDetailOpen: Z, withSearchBox: I, withTweetButton: P, withWideContainer: B } = this.props,
                        M = "root" === f,
                        D = "secondaryRoot" === f,
                        L = "primaryDetail" === f,
                        A = (L && w) || (M && E),
                        R = M || (L && e),
                        _ = M ? d.ey : L ? d.vX : void 0,
                        F = n.createElement(r.Z, { style: g.appBarContainer }, n.createElement(u.ZP, { backLocation: l, fixed: !1, hideBackButton: R, history: s, leftControl: p, middleControl: b, onBackClick: h, rightControl: y, secondaryBar: k, style: o, subtitle: A ? S : void 0, title: v, titleDomId: _, titleIconCell: x, titleIconCellSize: T, withWideContainer: B })),
                        z = M || (D && Z) ? null : n.createElement(m.Z.Configure, { SideNavButton: t, TabBar: a, backLocation: l, documentTitle: i, headerless: c, middleControl: b, onBackClick: h, rightControl: y, searchBoxOptions: C, subtitle: S, title: v, withSearchBox: I, withTweetButton: P });
                    return n.createElement(n.Fragment, null, z, F);
                }
            }
            (f.contextType = b.Z), (f.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const C = (0, p.ZP)(f),
                k = (e) => {
                    const t = (0, o.useHistory)();
                    return (0, l.HD)(t) ? e.children || null : n.createElement(C, e);
                };
        },
        699721: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = a(202784),
                o = a(780589),
                l = a(404450);
            const r = ({ checkTweet: e, inputStyle: t, onChangeTweetId: a, onTweetPress: r, tweetPreviewStyle: i }) => {
                const [c, s] = n.useState();
                return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(o.ZP, {
                        checkTweet: e,
                        inputStyle: t,
                        onChangeTweetId: (e) => {
                            s(e), a && a(e);
                        },
                        tweetId: c,
                        withActivityIndicator: !0,
                    }),
                    n.createElement(l.Z, {
                        onTweetPress: (e) => {
                            r && c && r(c);
                        },
                        style: i,
                        tweetId: c,
                    }),
                );
            };
        },
        569999: (e, t, a) => {
            a.d(t, { Z: () => we });
            a(136728);
            var n = a(202784),
                o = a(301503),
                l = a(719870),
                r = a(325686),
                i = a(811176),
                c = a(731708),
                s = a(977952),
                d = a(297256),
                p = a(392237),
                u = a(332920),
                m = a.n(u),
                b = a(487552),
                h = a(711223),
                y = a(459679),
                g = a(595088),
                f = a(516951),
                C = a(323265),
                k = a(952793),
                E = a(386742),
                w = a(655352),
                S = a(339110),
                v = a(690822),
                x = a(385264),
                T = a(313433),
                Z = a(536790),
                I = a(344175),
                P = a(842485);
            const B = C.ZP.isMac() ? "⌘" : "CTRL",
                M = [
                    {
                        headerText: m().h54e6138,
                        shortcuts: [
                            { keys: `${B} B`, description: m().idc01eb8 },
                            { keys: `${B} I`, description: m().cd7c97c6 },
                            { keys: `${B} U`, description: m().dab932be },
                            { keys: `${B} shift X`, description: m().c5b6178a },
                            { keys: `${B} K`, description: m().c03d7fd6 },
                            { keys: `${B} shift 7`, description: m().abfe2d36 },
                            { keys: `${B} shift 8`, description: m().da685a7c },
                            { keys: `${B} shift 9`, description: m().g74d920c },
                            { keys: `${B} shift .`, description: m().cda501c6 },
                            { keys: `${B} shift ,`, description: m().a54fdc46 },
                        ],
                    },
                    {
                        headerText: m().b340830e,
                        subtitleText: m().c1ea915e,
                        shortcuts: [
                            { keys: "#", description: m().e8a4ef02 },
                            { keys: "##", description: m().dd71241a },
                            { keys: ["-", "+", "*"], description: m().abfe2d36 },
                            { keys: ["1.", "2)"], description: m().da685a7c },
                            { keys: [">", ">>"], description: m().g74d920c },
                        ],
                    },
                ],
                D = ({ onDismiss: e }) => n.createElement(I.Z, { enableMaskForDismiss: !0, onClose: e, title: m().ja9ca202, withPassthroughEvents: !0 }, n.createElement(P.ShortcutContent, { shortcuts: M }));
            var L = a(167630),
                A = a(661810),
                R = a(420740),
                _ = a(691533),
                F = a(512110),
                z = a(794057),
                H = a(335923),
                j = a(942910),
                O = a(540985),
                N = a(790082),
                V = a(154003),
                G = a(885724),
                W = a(837020);
            const K = m().jcd5ee8a,
                Q = m().a8f09fb8,
                X = ({ children: e, onEdit: t, onRemove: a, style: o }) => n.createElement(r.Z, { style: [q.container, o] }, n.createElement(r.Z, { style: q.buttonRow }, t ? n.createElement(V.ZP, { "aria-label": K, icon: n.createElement(G.default, { style: q.icon }), onPress: t, preventFocusShift: !0, size: "small", type: "primaryText" }) : null, n.createElement(V.ZP, { "aria-label": Q, icon: n.createElement(W.default, { style: q.icon }), onPress: a, preventFocusShift: !0, size: "small", type: "primaryText" })), e),
                q = p.default.create((e) => ({ container: { width: "100%", flexDirection: "column", gap: e.spaces.space4, padding: e.spaces.space8, backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.medium, borderWidth: e.borderWidths.small, boxShadow: e.boxShadows.xSmall, overflow: "hidden" }, buttonRow: { flexDirection: "row", justifyContent: "flex-end", gap: e.spaces.space4 }, icon: { color: e.colors.gray300 } })),
                $ = n.memo(X);
            var U = a(874111);
            const J = m().e8a12604,
                Y = m().ef4602ec,
                ee = (e) => {
                    const { block: t, blockProps: a, contentState: o } = e,
                        { allMedia: l, mediaIdToLocalMediaIdMap: i, onEditCaption: s, onEditLaTeX: d, onEditMarkdown: p } = a,
                        u = t.getEntityAt(0),
                        m = u ? o.getEntity(u) : null,
                        b = t.getKey(),
                        h = t.getText(),
                        g = () => {
                            a.onRemoveBlock(b);
                        },
                        f = n.useCallback(() => {
                            u && s(u);
                        }, [u, s]),
                        C = n.useCallback(() => {
                            u && p(u);
                        }, [u, p]),
                        k = n.useCallback(() => {
                            b && d(b);
                        }, [b, d]);
                    if (u && m) {
                        const e = m.getData();
                        if (m.type === z.DC.TWEET) {
                            const { tweetId: t } = e;
                            return n.createElement(F.ZP, { onRemove: g, style: te.atomicBlock, tweetId: t, withActionsDisabled: !0 });
                        }
                        if (m.type === z.DC.MEDIA) {
                            const { caption: t, mediaItems: o } = e,
                                s = (e) => () => {
                                    1 === o.length ? g() : a.onRemoveImage(u, e);
                                },
                                d = (e) => () => {
                                    a.onEditMedia(u, e);
                                },
                                p = (0, U.WE)(l, i, o),
                                m = (0, y.Z)(p, (e) => e),
                                b = [te.fullWidth, te.atomicBlock];
                            if (m.length !== p.length) return n.createElement(L.Z, { style: te.atomicBlock });
                            {
                                const e = !!m[0].mediaFile?.isImage;
                                return n.createElement(r.Z, { style: b }, n.createElement(j.Z, { editable: !0, isActive: !0, media: m, onEditMedia: e ? d : void 0, onRemoveMedia: s, style: te.fullWidth }), n.createElement(r.Z, { onClick: f, style: te.caption }, t ? n.createElement(N.Z, { caption: t }) : n.createElement(c.ZP, { size: "subtext2", style: te.empty }, J)));
                            }
                        }
                        if (m.type === z.DC.MARKDOWN) {
                            const { markdown: t } = e;
                            return n.createElement($, { onEdit: C, onRemove: g, style: te.atomicBlock }, n.createElement(H.Z, { markdownText: t }));
                        }
                        if (m.type === z.DC.DIVIDER) return n.createElement(A.Z, { style: [te.atomicBlock, te.fullWidth] });
                        if (m.type === z.DC.LATEX) return n.createElement($, { onEdit: k, onRemove: g, style: te.atomicBlock }, n.createElement(O.Z, { displayMode: !0, style: te.marginBottom, tex: h }));
                    }
                    return null;
                },
                te = p.default.create((e) => ({ fullWidth: { width: "100%" }, atomicBlock: { marginBottom: e.spaces.space28 }, caption: { cursor: "pointer", marginTop: e.spaces.space8 }, empty: { color: e.colors.gray500, lineHeight: e.lineHeights.body }, marginBottom: { marginBottom: e.spaces.space8 } })),
                ae = (e) => {
                    const { block: t, blockProps: a } = e,
                        o = t.getKey(),
                        l = n.useCallback(() => {
                            a.onRemoveBlock(o);
                        }, [o, a]),
                        r = n.useCallback(() => n.createElement($, { onRemove: l, style: te.atomicBlock }, n.createElement(R.Z, { title: Y })), [l]);
                    return n.createElement(_.Z, { renderErrorPlaceholder: r }, n.createElement(ee, e));
                };
            var ne = a(727186);
            const oe = (e) => {
                const { children: t, wrapper: a } = e,
                    o =
                        t?.map((e, t) => {
                            const a = e.key?.toString() || "",
                                o = e.props.children.props.contentState.getBlocksAsArray().findIndex((e) => e.getKey() === a),
                                l = "section" === e.type;
                            return n.createElement(ne.ZP, { disableInteractiveElementBlocking: l, draggableId: a, index: o, isDragDisabled: !l, key: a, lockYAxis: !0 }, e);
                        }) || null;
                return a ? n.cloneElement(a, e, o) : o;
            };
            var le = a(925873),
                re = a(989272),
                ie = a(371344),
                ce = a(202253),
                se = a(187669);
            const de = m().e8a12604,
                pe = new o.CompositeDecorator([ce.ez(), ce.NA(), ce.aF, ce.RU]),
                ue = p.default.create((e) => ({ captionInput: { borderRadius: e.borderRadii.small, borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, marginTop: e.spaces.space4, maxHeight: e.spaces.space80, paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space4, fontSize: e.fontSizes.subtext2, overflow: "auto" } })),
                me = ({ caption: e, onUpdateCaption: t }) => {
                    const a = p.default.theme.colors.gray500;
                    n.useEffect(() => {
                        e.getDecorator() !== pe && t(o.EditorState.set(e, { decorator: pe }));
                    }, [e, t]),
                        (0, se.q)(() => {
                            (0, re.fH)("\n      .public-DraftEditor-content {\n        overflow: auto;\n        max-height: 72px;\n      }\n    ", "caption-input");
                        });
                    const l = n.useCallback(
                            (e) => (a) => {
                                e(a), t(a);
                            },
                            [t],
                        ),
                        r = { editorState: e, element: s.Z, withMaxHeight: !1, stripPastedStyles: !0 };
                    return n.createElement(Z.Z, { contextText: (0, U.iT)(e), isInline: !0, onTextUpdated: t, onTypeaheadStateChange: f.Z, source: S._4.MediaPreviewGroupCaption }, (e) => n.createElement(ie.Z, { inputStyle: ue.captionInput, isCompact: !0, maxNumberOfLines: 3, multiline: !0, name: "Media Caption", numberOfLines: 3, onChange: l(e), placeholder: de, placeholderTextColor: a, richTextInputContext: r, styleType: "selection" }));
                },
                be = m().da8ac57c,
                he = m().i2209530,
                ye = m().e68b09b4,
                ge = p.default.create((e) => ({ input: { padding: e.spaces.space24 }, caption: { marginTop: e.spaces.space8 }, preview: { backgroundColor: e.colors.gray100, flexGrow: 1, padding: e.spaces.space24, zIndex: -1 }, previewContent: { paddingHorizontal: "15%" } })),
                fe = ({ captionText: e, media: t, onCancel: a, onUpdate: o }) => {
                    const [l, i] = n.useState(le.Z.initEditorState(e ?? "")),
                        c = n.useCallback(() => {
                            o((0, U.iT)(l));
                        }, [l, o]),
                        s = n.useCallback(() => {
                            o("");
                        }, [o]);
                    n.useEffect(() => {
                        i(le.Z.initEditorState(e ?? ""));
                    }, [e]);
                    const d = n.useMemo(() => ({ label: he, onClick: c }), [c]),
                        p = n.useMemo(() => ({ label: ye, onClick: s }), [s]),
                        u = n.useCallback(() => f.Z, []),
                        m = n.useCallback((e) => {
                            e.stopPropagation();
                        }, []);
                    return n.createElement(I.Z, { onClose: a, primaryButtonConfig: d, secondaryButtonConfig: p, title: be, withKeyboardNavigation: !0 }, n.createElement(r.Z, { onKeyDown: m, style: ge.input }, n.createElement(me, { caption: l, onUpdateCaption: i })), n.createElement(r.Z, { style: ge.preview }, n.createElement(r.Z, { style: ge.previewContent }, n.createElement(j.Z, { editable: !1, media: t, onRemoveMedia: u }), n.createElement(r.Z, { style: ge.caption }, n.createElement(N.Z, { caption: l.getCurrentContent().getPlainText() })))));
                },
                Ce = m().e1a292ec,
                ke = m().h54e6138,
                Ee = m().ebfd8ac6;
            function we(e) {
                const { allMedia: t, contentHorizontalPadding: a, editorState: u, errorText: m, inputStyle: I, location: P, mediaIdToLocalMediaIdMap: B, middleControl: M, onAddGif: L, onAddMediaFiles: A, onChange: R, onEditMedia: _, showError: F, toolbarRightControl: z, toolbarStyle: H } = e,
                    j = (0, k.hC)("responsive_web_twitter_article_markdown_enabled"),
                    O = (0, k.hC)("responsive_web_twitter_article_code_block_enabled"),
                    N = (0, k.hC)("responsive_web_twitter_article_latex_enabled"),
                    V = (0, k.hC)("responsive_web_in_text_shortcuts_enabled"),
                    G = (0, w.ZP)() || C.ZP.isTwitterApp(),
                    [W, K] = n.useState(!1),
                    [Q, X] = n.useState(!1),
                    [q, $] = n.useState(""),
                    [J, Y] = n.useState(!1),
                    [ee, te] = n.useState(null),
                    [ne, oe] = n.useState(null),
                    [le, re] = n.useState(null),
                    ie = n.useCallback(() => {
                        W && (oe(null), re(null)), K(!W);
                    }, [W]),
                    ce = n.useCallback(() => {
                        X(!Q);
                    }, [Q]),
                    se = n.useCallback(
                        (e) => {
                            L(e), ie();
                        },
                        [ie, L],
                    ),
                    de = n.useCallback(
                        (e) => {
                            A(e), ie();
                        },
                        [ie, A],
                    ),
                    pe = n.useCallback(
                        (e) => {
                            const t = (0, U.Ve)(u, e);
                            R(t), ie();
                        },
                        [ie, u, R],
                    ),
                    ue = n.useCallback(() => {
                        const e = (0, U.O7)(u);
                        R(e);
                    }, [u, R]),
                    me = n.useCallback(
                        (e) => {
                            if (ne?.entityKey) {
                                const t = (0, U.QX)(u, ne.entityKey, { markdown: e });
                                R(t, !0);
                            } else {
                                const t = (0, U.jB)(u, e);
                                R(t);
                            }
                            ie(), oe(null);
                        },
                        [ie, ne, u, R],
                    ),
                    be = n.useCallback(
                        (e) => {
                            if (le?.blockKey) {
                                const t = (0, U.Vn)(u, le.blockKey, e);
                                R(t, !0);
                            } else {
                                const t = (0, U.wq)(u, e);
                                R(t);
                            }
                            ie(), re(null);
                        },
                        [ie, le, u, R],
                    ),
                    he = n.useCallback(() => n.createElement(T.Z, { editorState: u, onChange: R }), [u, R]),
                    ye = (e) => {
                        const t = (0, U.Ff)(u, e);
                        setTimeout(() => R(t), 10);
                    },
                    ge = (e, t) => {
                        const a = (0, U.mA)(u, e, t, B);
                        R(a, !0);
                    },
                    we = (e, t) => {
                        _(e, t);
                    },
                    Te = n.useCallback(
                        (e) => {
                            const a = u.getCurrentContent().getEntity(e),
                                n = a?.getData();
                            if (n) {
                                const a = (0, U.WE)(t, B, n.mediaItems);
                                te({ media: (0, y.Z)(a, (e) => e), captionText: n.caption, entityKey: e });
                            }
                        },
                        [t, u, B],
                    ),
                    Ze = n.useCallback(() => {
                        te(null);
                    }, []),
                    Ie = n.useCallback(
                        (e) => {
                            if ((Ze(), ee)) {
                                const t = (0, U.QX)(u, ee.entityKey, { caption: e });
                                R(t, !0);
                            }
                        },
                        [Ze, u, R, ee],
                    ),
                    Pe = n.useCallback(
                        (e) => {
                            if (e === x.Q.Divider) ue();
                            else $(e), ie();
                        },
                        [ue, ie],
                    ),
                    Be = n.useCallback(
                        (e) => {
                            const t = u.getCurrentContent().getEntity(e),
                                a = t?.getData();
                            if (a?.markdown) {
                                const t = l.TU.lexer(a.markdown),
                                    n = 1 === t.length && "code" === t[0].type,
                                    o = n ? t[0].text : a.markdown,
                                    r = n ? t[0].lang : null;
                                oe({ markdown: o, language: r, entityKey: e }), Pe(n ? x.Q.Code : x.Q.Markdown);
                            }
                        },
                        [Pe, u],
                    ),
                    Me = n.useCallback(
                        (e) => {
                            const t = u.getCurrentContent().getBlockForKey(e),
                                a = t?.getText();
                            a && (re({ tex: a, blockKey: e }), Pe(x.Q.LaTeX));
                        },
                        [Pe, u],
                    ),
                    De = n.useCallback(
                        (e) => {
                            const {
                                destination: t,
                                draggableId: a,
                                source: { index: n },
                            } = e;
                            if (t) {
                                const e = t.index;
                                if (e !== n) {
                                    const t = u.getCurrentContent(),
                                        l = t.getBlocksAsArray(),
                                        r = t.getBlockForKey(a);
                                    l.splice(n, 1), l.splice(e, 0, r);
                                    const i = o.ContentState.createFromBlockArray(l),
                                        c = o.EditorState.push(u, i, "move-block");
                                    R(c);
                                }
                            }
                        },
                        [u, R],
                    ),
                    Le = (0, g.Z)(xe).reduce((e, [t, a]) => e.set(t, a), o.DefaultDraftBlockRenderMap),
                    Ae = (e) => {
                        if ("atomic" === e.getType()) return { component: ae, editable: !1, props: { allMedia: t, mediaIdToLocalMediaIdMap: B, onEditMedia: we, onRemoveBlock: ye, onRemoveImage: ge, onEditCaption: Te, onEditMarkdown: Be, onEditLaTeX: Me } };
                    },
                    Re = [
                        {
                            "aria-label": Ce,
                            Icon: () => n.createElement(r.Z, { style: Se.attachmentButton }, n.createElement(c.ZP, { color: "gray700", numberOfLines: 1, size: "subtext1", weight: "normal" }, Ee), n.createElement(b.default, { size: "small", style: Se.iconGray, type: "primaryText" })),
                            key: "attachments_dropdown",
                            onPress: ce,
                            renderActionMenu: () => {
                                const e = U.k.filter((e) => (e.id === x.Q.Markdown ? j : e.id === x.Q.Code ? O : e.id !== x.Q.LaTeX || N)).map((e) => ({ isSelected: !1, onClick: () => Pe(e.id), selectable: !1, text: e.text, Icon: e.Icon }));
                                return Q ? n.createElement(i.Z, { items: e, onCloseRequested: ce, shouldCloseOnClick: !0 }) : null;
                            },
                        },
                    ];
                V && Re.push({ "aria-label": ke, Icon: () => n.createElement(h.default, { style: Se.iconGray }), onPress: () => Y(!J), key: "keyboard_shortcuts" });
                const _e = { zIndex: ee ? "-1" : void 0 };
                return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                        E.Xi,
                        { onDragEnd: De },
                        n.createElement(E.$p, { droppableId: "editor" }, (e, t) =>
                            n.createElement(
                                "div",
                                { ref: e.innerRef, style: _e },
                                n.createElement(
                                    Z.Z,
                                    { contextText: (0, U.iT)(u), isInline: !0, onTextUpdated: R, onTypeaheadStateChange: f.Z, source: S._4.LongformComposer },
                                    (function (e, t) {
                                        const o = [I, e && Se.draggingCursor],
                                            l = { blockRendererFn: Ae, blockRenderMap: Le, dragPlaceholder: t, editorState: u, element: s.Z, withMaxHeight: !1, allowExtendedPasteStyles: !0, longformRichTextTransform: !0, contentHorizontalPadding: a, allowInTextShortcuts: V };
                                        return function (e) {
                                            return n.createElement(d.b, {
                                                additionalToolbarButtonConfigs: Re,
                                                emojiPickerButton: he,
                                                errorText: m,
                                                inputStyle: o,
                                                middleControl: M,
                                                numberOfLines: 18,
                                                onChange: function (t) {
                                                    e(t), R(t);
                                                },
                                                onFilesAdded: A,
                                                placeholder: ve,
                                                placeholderTextColor: p.default.theme.colors.gray500,
                                                richTextInputContext: l,
                                                showError: F,
                                                style: Se.richTextInputContainer,
                                                testID: "composer",
                                                toolbarRightControl: z,
                                                toolbarStyle: H,
                                                withAppBar: G,
                                            });
                                        };
                                    })(t.isDraggingOver, e.placeholder),
                                ),
                            ),
                        ),
                    ),
                    W ? n.createElement(v.ZP, { attachmentType: q, codeLanguage: ne?.language || "", location: P, markdown: ne?.markdown || "", onAddGif: se, onAddLaTeX: be, onAddMarkdown: me, onAddMedia: de, onAddTweets: pe, onClose: ie, tex: le?.tex || "" }) : null,
                    ee ? n.createElement(fe, { captionText: ee.captionText, media: ee.media, onCancel: Ze, onUpdate: Ie }) : null,
                    J && n.createElement(D, { onDismiss: () => Y(!1) }),
                );
            }
            const Se = p.default.create((e) => ({ draggingCursor: { cursor: "grabbing" }, richTextInputContainer: { position: "relative" }, attachmentButton: { paddingInline: e.spaces.space8, gap: e.spaces.space4, flexDirection: "row", alignItems: "center", textAlign: "center" }, iconGray: { color: e.colors.gray700 } })),
                ve = m().ia3611ee,
                xe = { atomic: { element: "section", wrapper: n.createElement(oe, null) }, unstyled: { aliasedElements: ["p"], element: "div", wrapper: n.createElement(oe, null) }, blockquote: { element: "blockquote", wrapper: n.createElement(oe, { wrapper: o.DefaultDraftBlockRenderMap.get("blockquote").wrapper }) }, "unordered-list-item": { element: "li", wrapper: n.createElement(oe, { wrapper: o.DefaultDraftBlockRenderMap.get("unordered-list-item").wrapper }) }, "ordered-list-item": { element: "li", wrapper: n.createElement(oe, { wrapper: o.DefaultDraftBlockRenderMap.get("ordered-list-item").wrapper }) }, "header-one": { element: "h1", wrapper: n.createElement(oe, { wrapper: o.DefaultDraftBlockRenderMap.get("header-one").wrapper }) }, "header-two": { element: "h2", wrapper: n.createElement(oe, { wrapper: o.DefaultDraftBlockRenderMap.get("header-two").wrapper }) } };
        },
        967934: (e, t, a) => {
            a.d(t, { ZP: () => V });
            a(136728);
            var n = a(202784),
                o = a(325686),
                l = a(344175),
                r = a(40610),
                i = a(731708),
                c = a(449479),
                s = a(661810),
                d = a(466818),
                p = a(530338),
                u = a(96083),
                m = a(392237),
                b = a(332920),
                h = a.n(b),
                y = a(37475),
                g = a(167630);
            const f = m.default.create((e) => ({ overlay: { backgroundColor: e.colors.cellBackground, height: "100%", opacity: 0.7, paddingVertical: e.spaces.space20 } })),
                C = (e) => {
                    const { activityIndicatorStyle: t, style: a } = e;
                    return n.createElement(o.Z, { style: [m.default.absoluteFill, f.overlay, a] }, n.createElement(g.Z, { style: t }));
                },
                k = h().a8fdd09c,
                E = h().d8047cc8,
                w = h().ff7ddca2,
                S = h().ef34d7be,
                v = h().e52d4998,
                x = h().baffe39a,
                T = h().d52a1caa,
                Z = h().g6185a9e,
                I = h().d7985b24,
                P = h().b5660338,
                B = h().i9000126,
                M = h().dcaede8a,
                D = h().f19e4bfc,
                L = h().ad85cd2e,
                A = h().hff1b97a,
                R = h().a330771e,
                _ = h().b6510e68,
                F = h().e4a6e006,
                z = h().eff483e0,
                H = [{ label: L, value: "Subscribers" }],
                j = [
                    { label: x, value: "All" },
                    { label: B, value: "Community" },
                    { label: D, value: "Verified" },
                    { label: M, value: "ByInvitation" },
                ],
                O = "publish_sheet",
                N = m.default.create((e) => ({ bottomCallout: { marginTop: e.spaces.space4 }, heading: { paddingVertical: e.spaces.space8 }, container: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16 }, overlay: { justifyContent: "center", zIndex: 1 }, activityIndicator: { alignSelf: "center" }, preview: { maxWidth: "350px" } })),
                V = ({ articleEntity: e, articleEntityMetadata: t, hasPublishingFailed: a, isActiveCreator: m, isPublishing: b, onClose: h, onPublish: g, onScribe: f }) => {
                    const B = t?.tweet_results?.result?.legacy?.conversation_control?.policy,
                        M = B
                            ? ((e) => {
                                  switch (e) {
                                      case "Community":
                                          return "Community";
                                      case "ByInvitation":
                                          return "ByInvitation";
                                      case "Verified":
                                          return "Verified";
                                      case "Subscribers":
                                          return "Subscribers";
                                      default:
                                          return "All";
                                  }
                              })(B)
                            : null,
                        D = t?.visibility_setting,
                        L = n.useCallback(() => {
                            const e = [{ label: x, value: y.d.Public, testID: "audienceControl-everyone" }];
                            return m && e.push({ label: T, value: y.d.Subscribers, testID: "audienceControl-subscribers" }), e;
                        }, [m]),
                        V = n.useMemo(() => [...j, ...(m ? H : [])], [m]),
                        [G, W] = n.useState(D || y.d.Public),
                        [K, Q] = n.useState(M || "All"),
                        [X, q] = n.useState(!1),
                        $ = n.useCallback(() => {
                            !b && h();
                        }, [b, h]),
                        U = n.useCallback(
                            (e) => {
                                f({ component: O, element: "confirm_publish_button", action: "click" }), g(X, e, { conversationControl: "All" !== K && "Subscribers" !== G ? K : void 0, visibilitySetting: G });
                            },
                            [f, g, X, G, K],
                        ),
                        J = n.useMemo(() => ({ label: E, forceDisabled: b, onClick: U, popoverMessage: z, type: "brandFilled" }), [b, U]),
                        Y = n.useCallback(
                            (e) => {
                                f({ component: O, element: "copy_link_checkbox", action: "click" }), q(e);
                            },
                            [f, q],
                        ),
                        ee = n.useCallback((e, t) => W(t), [W]),
                        te = n.useCallback((e) => Q(e), [Q]),
                        ae = !!t?.tweet_results;
                    return n.createElement(l.Z, { onClose: $, primaryButtonConfig: J, title: k, withPassthroughEvents: !0 }, b && n.createElement(C, { activityIndicatorStyle: N.activityIndicator, style: N.overlay }), n.createElement(o.Z, { style: N.container }, ae ? n.createElement(r.Z.Primary, { text: S, withIcon: !0 }) : null, a && n.createElement(r.Z.Danger, { text: F, withIcon: !0 }), n.createElement(n.Fragment, null, n.createElement(i.ZP, { size: "headline2", style: N.heading, weight: "heavy" }, v), n.createElement(c.Z, { disabled: ae, name: "audienceControl", onChange: ee, options: L(), value: G }), n.createElement(s.Z, { spacing: "space12" }), n.createElement(i.ZP, { size: "headline2", style: N.heading, weight: "heavy" }, Z), "Subscribers" !== G ? n.createElement(d.ZP, { disabled: ae, label: I, onChange: te, options: V, testID: "convoControl", value: K }) : n.createElement(i.ZP, null, A)), e ? n.createElement(n.Fragment, null, n.createElement(s.Z, { spacing: "space16" }), n.createElement(i.ZP, { size: "headline2", style: N.heading, weight: "heavy" }, P), n.createElement(o.Z, { style: N.preview }, n.createElement(p.Z, { articleEntity: e, hasSensitiveContent: !1 }))) : null, ae ? null : n.createElement(r.Z.Primary, { style: N.bottomCallout, text: w, withIcon: !0 }), n.createElement(s.Z, { spacing: "space16" }), n.createElement(u.Z, { checked: X, helpText: _, label: R, onChange: Y, testID: "copyTwitterArticleLinkCheckbox" })));
                };
        },
        444677: (e, t, a) => {
            a.d(t, { f: () => d });
            var n = a(202784),
                o = a(731708),
                l = a(392237),
                r = a(332920),
                i = a.n(r);
            const c = i().ca15dd4e,
                s = i().bb40bf66,
                d = (e) => {
                    const { isPublished: t } = e;
                    return n.createElement(o.ZP, { size: "subtext3", style: [p.visibilityLabel, t ? p.publishedLabel : p.draftLabel], weight: "bold" }, t ? s : c);
                },
                p = l.default.create((e) => ({ draftLabel: { backgroundColor: e.colors.purple50, color: e.colors.purple900 }, publishedLabel: { backgroundColor: e.colors.green50, color: e.colors.green900 }, visibilityLabel: { alignItems: "center", borderRadius: e.borderRadii.xSmall, flexDirection: "row", paddingHorizontal: `calc(${e.spaces.space4} + ${e.spaces.space2})`, paddingVertical: e.spaces.space4 } }));
        },
        201770: (e, t, a) => {
            a.d(t, { Z: () => h });
            var n = a(202784),
                o = a(731708),
                l = a(966886),
                r = a(470397),
                i = a(444677),
                c = a(392237),
                s = a(332920),
                d = a.n(s),
                p = a(566220);
            const u = d().h107935c,
                m = c.default.create((e) => ({ boldText: { fontWeight: e.fontWeights.bold } })),
                b = ({ updatedAt: e }) => {
                    const t = (0, p.R)()().getTime(),
                        a = Number(e),
                        r = Math.floor((t - a) / 1e3),
                        i = { lastSavedElement: n.createElement(l.Z, { humanReadable: !0, style: m.boldText, timestamp: a }) };
                    return n.createElement(o.ZP, { color: "gray700", size: "subtext2" }, r <= 5 ? u : n.createElement(d().I18NFormatMessage, { $i18n: "bd7349bb" }, i.lastSavedElement));
                },
                h = (e) => {
                    const { isPublished: t, publishedAtMs: a, updatedAtMs: c } = e,
                        s = t ? n.createElement(o.ZP, { size: "subtext2", weight: "bold" }, n.createElement(l.Z, { timestamp: Number(a) })) : n.createElement(b, { updatedAt: c });
                    return n.createElement(r.Z, null, n.createElement(i.f, { isPublished: t }), s);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-967cca90.559fcc7a.js.map
