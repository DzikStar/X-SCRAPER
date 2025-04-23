"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-967cca90"],
    {
        313433: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(202784),
                o = a(925873),
                r = a(392237),
                l = a(913670);
            const i = r.default.create((e) => ({ iconGray: { color: e.colors.gray700 } })),
                s = ({ editorState: e, onChange: t }) => {
                    const a = n.useCallback(
                        (a) => {
                            const n = o.Z.insertTextAtCursor(e, a.text);
                            t(n);
                        },
                        [e, t],
                    );
                    return n.createElement(l.Z, { iconStyle: i.iconGray, key: "emoji-picker", onEmojiSelect: a, size: "small", testID: "btn-emoji", type: "primaryText" });
                };
        },
        373554: (e, t, a) => {
            a.d(t, { Z: () => b, h: () => y });
            var n = a(807896),
                o = a(202784),
                r = a(449161),
                l = a(392237),
                i = a(674132),
                s = a.n(i),
                c = a(473026),
                d = a(276259),
                p = a(540387);
            const u = "fileInput",
                m = s().b9960f32,
                h = o.createElement(c.default, null),
                y = ({ acceptGifs: e, acceptImages: t = !0, acceptVideo: a }) => (t ? d.v5 : []).concat(e ? [d.Re] : []).concat(a ? p.jn : []);
            const g = l.default.create((e) => ({ root: { margin: `-${e.spaces.space12}` } })),
                b = function ({ "aria-label": e = m, acceptGifs: t = !0, acceptImages: a = !0, acceptVideo: l = !0, customMimeTypes: i = [], icon: s = h, size: c = "medium", style: d, withIcon: p = !0, ...b }) {
                    const C = y({ acceptGifs: t, acceptImages: a, acceptVideo: l }).concat(i).join(",");
                    return o.createElement(r.Z, (0, n.Z)({}, b, { accept: C, "aria-label": e, icon: p ? s : void 0, size: c, style: [g.root, d], testID: u }));
                };
        },
        741049: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(807896),
                o = a(202784),
                r = a(879891),
                l = a(779610),
                i = a(731708),
                s = a(415725);
            const c = (e) => {
                const { direction: t } = (0, r.Z)();
                return o.createElement(s.Z, { exact: !0, path: e.link }, (a) => {
                    const r = t;
                    return o.createElement(l.Z, (0, n.Z)({ isActive: a }, e, { label: o.createElement(i.ZP, { dir: r, testID: "rtl" === r ? "test-RTLtext" : "test-LTRtext" }, e.label) }));
                });
            };
        },
        518426: (e, t, a) => {
            a.d(t, { Z: () => C });
            var n = a(202784),
                o = a(325686),
                r = a(855488),
                l = a(392237),
                i = a(674132),
                s = a.n(i),
                c = a(666536),
                d = a(125568),
                p = a(874088),
                u = a(339110),
                m = a(524110),
                h = a(611478);
            const y = s().d942865e,
                g = ({ onChange: e, onEnter: t, onSelect: a, value: l }) => {
                    const i = n.useRef(null),
                        [s, g] = n.useState(!1),
                        [C, f] = n.useState([]),
                        k = n.useMemo(() => (0, h.Is)(), []),
                        E = (0, d.t)(),
                        w = n.useMemo(
                            () =>
                                (0, c.Z)((e) => {
                                    E() && (e.length >= 1 ? (g(!0), f((0, h.lH)(e, k))) : g(!1));
                                }, 100),
                            [E, k],
                        ),
                        S = n.useCallback(
                            (t) => {
                                e(t.target.value), w(t.target.value);
                            },
                            [w, e],
                        ),
                        x = n.useCallback(
                            (e, t) => {
                                i?.current?.focus(), a(e.id, e.data?.topic), g(!1);
                            },
                            [a],
                        ),
                        v = n.useCallback((e) => (s ? n.createElement(n.Fragment, null, n.createElement(o.Z, { onClick: () => g(!1), style: b.mask }), n.createElement(m.Z, { items: C, onItemClick: x, ref: e.ref, source: u._4.Unknown, style: [e.style, b.dropdown] })) : null), [x, C, s]),
                        T = n.useCallback(
                            (e) => {
                                const { onFocus: a } = e;
                                return n.createElement(r.Z, { autoComplete: "off", label: y, name: "programming-language-input", onChange: S, onFocus: a, onKeyPress: t, ref: i, style: b.inputStyle, testID: "programming-language-input", value: l });
                            },
                            [S, t, l],
                        );
                    return n.createElement(p.default, { isCompact: !0, renderCustomDropdown: v, renderCustomInput: T, rounded: !0, source: u._4.Unknown, testID: "programming-language-selector", userLimit: 20 });
                },
                b = l.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, dropdown: { maxHeight: "25vh" }, mask: { ...l.default.absoluteFillObject, position: "fixed" } })),
                C = n.memo(g);
        },
        611478: (e, t, a) => {
            a.d(t, { Hn: () => r, lH: () => o, Is: () => l });
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
                r = (e) => e.charAt(0).toUpperCase() + e.slice(1),
                l = () => Object.keys(n).map((e) => ({ id: e, type: "topic", data: { topic: n[e] ?? r(e) } }));
        },
        253493: (e, t, a) => {
            a.d(t, { Z: () => k });
            var n = a(202784),
                o = a(107267),
                r = a(791632),
                l = a(325686),
                i = a(537392),
                s = a(10656),
                c = a(655352),
                d = a(555079),
                p = a(500002),
                u = a(625661),
                m = a(449067),
                h = a(655543),
                y = a(715601),
                g = a(392237);
            const b = g.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...g.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class C extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? n.createElement(l.Z, { style: b.fill }, n.createElement(y.Z, { style: b.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return n.createElement(i.ZP, null, ({ containerWidth: e }) => (s.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: a, screenType: o, showSubtitleOnRoot: r, showSubtitleOnWideDetail: l, withBottomBorder: i, withDetailOpen: s, ...d } = this.props;
                    return n.createElement(n.Fragment, null, (0, c.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : n.createElement(m.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return n.createElement(n.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: a, appBarStyle: o, backLocation: r, documentTitle: i, headerless: s, history: c, leftControl: p, middleControl: h, onBackClick: y, rightControl: g, screenType: C, searchBoxOptions: f, secondaryBar: k, showSubtitleOnRoot: E, showSubtitleOnWideDetail: w, subtitle: S, title: x, titleIconCell: v, titleIconCellSize: T, withDetailOpen: I, withSearchBox: Z, withTweetButton: P, withWideContainer: B } = this.props,
                        D = "root" === C,
                        M = "secondaryRoot" === C,
                        L = "primaryDetail" === C,
                        R = (L && w) || (D && E),
                        _ = D || (L && e),
                        A = D ? d.ey : L ? d.vX : void 0,
                        F = n.createElement(l.Z, { style: b.appBarContainer }, n.createElement(u.ZP, { backLocation: r, fixed: !1, hideBackButton: _, history: c, leftControl: p, middleControl: h, onBackClick: y, rightControl: g, secondaryBar: k, style: o, subtitle: R ? S : void 0, title: x, titleDomId: A, titleIconCell: v, titleIconCellSize: T, withWideContainer: B })),
                        O = D || (M && I) ? null : n.createElement(m.Z.Configure, { SideNavButton: t, TabBar: a, backLocation: r, documentTitle: i, headerless: s, middleControl: h, onBackClick: y, rightControl: g, searchBoxOptions: f, subtitle: S, title: x, withSearchBox: Z, withTweetButton: P });
                    return n.createElement(n.Fragment, null, O, F);
                }
            }
            (C.contextType = h.Z), (C.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const f = (0, p.ZP)(C),
                k = (e) => {
                    const t = (0, o.useHistory)();
                    return (0, r.HD)(t) ? e.children || null : n.createElement(f, e);
                };
        },
        699721: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(202784),
                o = a(780589),
                r = a(404450);
            const l = ({ checkTweet: e, inputStyle: t, onChangeTweetId: a, onTweetPress: l, tweetPreviewStyle: i }) => {
                const [s, c] = n.useState();
                return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(o.ZP, {
                        checkTweet: e,
                        inputStyle: t,
                        onChangeTweetId: (e) => {
                            c(e), a && a(e);
                        },
                        tweetId: s,
                        withActivityIndicator: !0,
                    }),
                    n.createElement(r.Z, {
                        onTweetPress: (e) => {
                            l && s && l(s);
                        },
                        style: i,
                        tweetId: s,
                    }),
                );
            };
        },
        569999: (e, t, a) => {
            a.d(t, { Z: () => we });
            a(136728);
            var n = a(202784),
                o = a(301503),
                r = a(719870),
                l = a(325686),
                i = a(811176),
                s = a(731708),
                c = a(977952),
                d = a(297256),
                p = a(392237),
                u = a(674132),
                m = a.n(u),
                h = a(487552),
                y = a(711223),
                g = a(459679),
                b = a(595088),
                C = a(516951),
                f = a(323265),
                k = a(952793),
                E = a(386742),
                w = a(655352),
                S = a(339110),
                x = a(690822),
                v = a(385264),
                T = a(313433),
                I = a(536790),
                Z = a(344175),
                P = a(842485);
            const B = f.ZP.isMac() ? "⌘" : "CTRL",
                D = [
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
                M = ({ onDismiss: e }) => n.createElement(Z.Z, { enableMaskForDismiss: !0, onClose: e, title: m().ja9ca202, withPassthroughEvents: !0 }, n.createElement(P.ShortcutContent, { shortcuts: D }));
            var L = a(167630),
                R = a(661810),
                _ = a(420740),
                A = a(691533),
                F = a(512110),
                O = a(794057),
                z = a(335923),
                H = a(942910),
                j = a(540985),
                N = a(790082),
                V = a(154003),
                W = a(885724),
                q = a(837020);
            const G = m().jcd5ee8a,
                K = m().a8f09fb8,
                Q = ({ children: e, onEdit: t, onRemove: a, style: o }) => n.createElement(l.Z, { style: [X.container, o] }, n.createElement(l.Z, { style: X.buttonRow }, t ? n.createElement(V.ZP, { "aria-label": G, icon: n.createElement(W.default, { style: X.icon }), onPress: t, preventFocusShift: !0, size: "small", type: "primaryText" }) : null, n.createElement(V.ZP, { "aria-label": K, icon: n.createElement(q.default, { style: X.icon }), onPress: a, preventFocusShift: !0, size: "small", type: "primaryText" })), e),
                X = p.default.create((e) => ({ container: { width: "100%", flexDirection: "column", gap: e.spaces.space4, padding: e.spaces.space8, backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.medium, borderWidth: e.borderWidths.small, boxShadow: e.boxShadows.xSmall, overflow: "hidden" }, buttonRow: { flexDirection: "row", justifyContent: "flex-end", gap: e.spaces.space4 }, icon: { color: e.colors.gray300 } })),
                $ = n.memo(Q);
            var U = a(874111);
            const J = m().e8a12604,
                Y = m().ef4602ec,
                ee = (e) => {
                    const { block: t, blockProps: a, contentState: o } = e,
                        { allMedia: r, mediaIdToLocalMediaIdMap: i, onEditCaption: c, onEditLaTeX: d, onEditMarkdown: p } = a,
                        u = t.getEntityAt(0),
                        m = u ? o.getEntity(u) : null,
                        h = t.getKey(),
                        y = t.getText(),
                        b = () => {
                            a.onRemoveBlock(h);
                        },
                        C = n.useCallback(() => {
                            u && c(u);
                        }, [u, c]),
                        f = n.useCallback(() => {
                            u && p(u);
                        }, [u, p]),
                        k = n.useCallback(() => {
                            h && d(h);
                        }, [h, d]);
                    if (u && m) {
                        const e = m.getData();
                        if (m.type === O.DC.TWEET) {
                            const { tweetId: t } = e;
                            return n.createElement(F.ZP, { onRemove: b, style: te.atomicBlock, tweetId: t, withActionsDisabled: !0 });
                        }
                        if (m.type === O.DC.MEDIA) {
                            const { caption: t, mediaItems: o } = e,
                                c = (e) => () => {
                                    1 === o.length ? b() : a.onRemoveImage(u, e);
                                },
                                d = (e) => () => {
                                    a.onEditMedia(u, e);
                                },
                                p = (0, U.WE)(r, i, o),
                                m = (0, g.Z)(p, (e) => e),
                                h = [te.fullWidth, te.atomicBlock];
                            if (m.length !== p.length) return n.createElement(L.Z, { style: te.atomicBlock });
                            {
                                const e = !!m[0].mediaFile?.isImage;
                                return n.createElement(l.Z, { style: h }, n.createElement(H.Z, { editable: !0, isActive: !0, media: m, onEditMedia: e ? d : void 0, onRemoveMedia: c, style: te.fullWidth }), n.createElement(l.Z, { onClick: C, style: te.caption }, t ? n.createElement(N.Z, { caption: t }) : n.createElement(s.ZP, { size: "subtext2", style: te.empty }, J)));
                            }
                        }
                        if (m.type === O.DC.MARKDOWN) {
                            const { markdown: t } = e;
                            return n.createElement($, { onEdit: f, onRemove: b, style: te.atomicBlock }, n.createElement(z.Z, { markdownText: t }));
                        }
                        if (m.type === O.DC.DIVIDER) return n.createElement(R.Z, { style: [te.atomicBlock, te.fullWidth] });
                        if (m.type === O.DC.LATEX) return n.createElement($, { onEdit: k, onRemove: b, style: te.atomicBlock }, n.createElement(j.Z, { displayMode: !0, style: te.marginBottom, tex: y }));
                    }
                    return null;
                },
                te = p.default.create((e) => ({ fullWidth: { width: "100%" }, atomicBlock: { marginBottom: e.spaces.space28 }, caption: { cursor: "pointer", marginTop: e.spaces.space8 }, empty: { color: e.colors.gray500, lineHeight: e.lineHeights.body }, marginBottom: { marginBottom: e.spaces.space8 } })),
                ae = (e) => {
                    const { block: t, blockProps: a } = e,
                        o = t.getKey(),
                        r = n.useCallback(() => {
                            a.onRemoveBlock(o);
                        }, [o, a]),
                        l = n.useCallback(() => n.createElement($, { onRemove: r, style: te.atomicBlock }, n.createElement(_.Z, { title: Y })), [r]);
                    return n.createElement(A.Z, { renderErrorPlaceholder: l }, n.createElement(ee, e));
                };
            var ne = a(727186);
            const oe = (e) => {
                const { children: t, wrapper: a } = e,
                    o =
                        t?.map((e, t) => {
                            const a = e.key?.toString() || "",
                                o = e.props.children.props.contentState.getBlocksAsArray().findIndex((e) => e.getKey() === a),
                                r = "section" === e.type;
                            return n.createElement(ne.ZP, { disableInteractiveElementBlocking: r, draggableId: a, index: o, isDragDisabled: !r, key: a, lockYAxis: !0 }, e);
                        }) || null;
                return a ? n.cloneElement(a, e, o) : o;
            };
            var re = a(925873),
                le = a(989272),
                ie = a(371344),
                se = a(202253),
                ce = a(187669);
            const de = m().e8a12604,
                pe = new o.CompositeDecorator([se.ez(), se.NA(), se.aF, se.RU]),
                ue = p.default.create((e) => ({ captionInput: { borderRadius: e.borderRadii.small, borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, marginTop: e.spaces.space4, maxHeight: e.spaces.space80, paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space4, fontSize: e.fontSizes.subtext2, overflow: "auto" } })),
                me = ({ caption: e, onUpdateCaption: t }) => {
                    const a = p.default.theme.colors.gray500;
                    n.useEffect(() => {
                        e.getDecorator() !== pe && t(o.EditorState.set(e, { decorator: pe }));
                    }, [e, t]),
                        (0, ce.q)(() => {
                            (0, le.fH)("\n      .public-DraftEditor-content {\n        overflow: auto;\n        max-height: 72px;\n      }\n    ", "caption-input");
                        });
                    const r = n.useCallback(
                            (e) => (a) => {
                                e(a), t(a);
                            },
                            [t],
                        ),
                        l = { editorState: e, element: c.Z, withMaxHeight: !1, stripPastedStyles: !0 };
                    return n.createElement(I.Z, { contextText: (0, U.iT)(e), isInline: !0, onTextUpdated: t, onTypeaheadStateChange: C.Z, source: S._4.MediaPreviewGroupCaption }, (e) => n.createElement(ie.Z, { inputStyle: ue.captionInput, isCompact: !0, maxNumberOfLines: 3, multiline: !0, name: "Media Caption", numberOfLines: 3, onChange: r(e), placeholder: de, placeholderTextColor: a, richTextInputContext: l, styleType: "selection" }));
                },
                he = m().da8ac57c,
                ye = m().i2209530,
                ge = m().e68b09b4,
                be = p.default.create((e) => ({ input: { padding: e.spaces.space24 }, caption: { marginTop: e.spaces.space8 }, preview: { backgroundColor: e.colors.gray100, flexGrow: 1, padding: e.spaces.space24, zIndex: -1 }, previewContent: { paddingHorizontal: "15%" } })),
                Ce = ({ captionText: e, media: t, onCancel: a, onUpdate: o }) => {
                    const [r, i] = n.useState(re.Z.initEditorState(e ?? "")),
                        s = n.useCallback(() => {
                            o((0, U.iT)(r));
                        }, [r, o]),
                        c = n.useCallback(() => {
                            o("");
                        }, [o]);
                    n.useEffect(() => {
                        i(re.Z.initEditorState(e ?? ""));
                    }, [e]);
                    const d = n.useMemo(() => ({ label: ye, onClick: s }), [s]),
                        p = n.useMemo(() => ({ label: ge, onClick: c }), [c]),
                        u = n.useCallback(() => C.Z, []),
                        m = n.useCallback((e) => {
                            e.stopPropagation();
                        }, []);
                    return n.createElement(Z.Z, { onClose: a, primaryButtonConfig: d, secondaryButtonConfig: p, title: he, withKeyboardNavigation: !0 }, n.createElement(l.Z, { onKeyDown: m, style: be.input }, n.createElement(me, { caption: r, onUpdateCaption: i })), n.createElement(l.Z, { style: be.preview }, n.createElement(l.Z, { style: be.previewContent }, n.createElement(H.Z, { editable: !1, media: t, onRemoveMedia: u }), n.createElement(l.Z, { style: be.caption }, n.createElement(N.Z, { caption: r.getCurrentContent().getPlainText() })))));
                },
                fe = m().e1a292ec,
                ke = m().h54e6138,
                Ee = m().ebfd8ac6;
            function we(e) {
                const { allMedia: t, contentHorizontalPadding: a, editorState: u, errorText: m, inputStyle: Z, location: P, mediaIdToLocalMediaIdMap: B, middleControl: D, onAddGif: L, onAddMediaFiles: R, onChange: _, onEditMedia: A, showError: F, toolbarRightControl: O, toolbarStyle: z } = e,
                    H = (0, k.hC)("responsive_web_twitter_article_markdown_enabled"),
                    j = (0, k.hC)("responsive_web_twitter_article_code_block_enabled"),
                    N = (0, k.hC)("responsive_web_twitter_article_latex_enabled"),
                    V = (0, k.hC)("responsive_web_in_text_shortcuts_enabled"),
                    W = (0, w.ZP)() || f.ZP.isTwitterApp(),
                    [q, G] = n.useState(!1),
                    [K, Q] = n.useState(!1),
                    [X, $] = n.useState(""),
                    [J, Y] = n.useState(!1),
                    [ee, te] = n.useState(null),
                    [ne, oe] = n.useState(null),
                    [re, le] = n.useState(null),
                    ie = n.useCallback(() => {
                        q && (oe(null), le(null)), G(!q);
                    }, [q]),
                    se = n.useCallback(() => {
                        Q(!K);
                    }, [K]),
                    ce = n.useCallback(
                        (e) => {
                            L(e), ie();
                        },
                        [ie, L],
                    ),
                    de = n.useCallback(
                        (e) => {
                            R(e), ie();
                        },
                        [ie, R],
                    ),
                    pe = n.useCallback(
                        (e) => {
                            const t = (0, U.Ve)(u, e);
                            _(t), ie();
                        },
                        [ie, u, _],
                    ),
                    ue = n.useCallback(() => {
                        const e = (0, U.O7)(u);
                        _(e);
                    }, [u, _]),
                    me = n.useCallback(
                        (e) => {
                            if (ne?.entityKey) {
                                const t = (0, U.QX)(u, ne.entityKey, { markdown: e });
                                _(t, !0);
                            } else {
                                const t = (0, U.jB)(u, e);
                                _(t);
                            }
                            ie(), oe(null);
                        },
                        [ie, ne, u, _],
                    ),
                    he = n.useCallback(
                        (e) => {
                            if (re?.blockKey) {
                                const t = (0, U.Vn)(u, re.blockKey, e);
                                _(t, !0);
                            } else {
                                const t = (0, U.wq)(u, e);
                                _(t);
                            }
                            ie(), le(null);
                        },
                        [ie, re, u, _],
                    ),
                    ye = n.useCallback(() => n.createElement(T.Z, { editorState: u, onChange: _ }), [u, _]),
                    ge = (e) => {
                        const t = (0, U.Ff)(u, e);
                        setTimeout(() => _(t), 10);
                    },
                    be = (e, t) => {
                        const a = (0, U.mA)(u, e, t, B);
                        _(a, !0);
                    },
                    we = (e, t) => {
                        A(e, t);
                    },
                    Te = n.useCallback(
                        (e) => {
                            const a = u.getCurrentContent().getEntity(e),
                                n = a?.getData();
                            if (n) {
                                const a = (0, U.WE)(t, B, n.mediaItems);
                                te({ media: (0, g.Z)(a, (e) => e), captionText: n.caption, entityKey: e });
                            }
                        },
                        [t, u, B],
                    ),
                    Ie = n.useCallback(() => {
                        te(null);
                    }, []),
                    Ze = n.useCallback(
                        (e) => {
                            if ((Ie(), ee)) {
                                const t = (0, U.QX)(u, ee.entityKey, { caption: e });
                                _(t, !0);
                            }
                        },
                        [Ie, u, _, ee],
                    ),
                    Pe = n.useCallback(
                        (e) => {
                            if (e === v.Q.Divider) ue();
                            else $(e), ie();
                        },
                        [ue, ie],
                    ),
                    Be = n.useCallback(
                        (e) => {
                            const t = u.getCurrentContent().getEntity(e),
                                a = t?.getData();
                            if (a?.markdown) {
                                const t = r.TU.lexer(a.markdown),
                                    n = 1 === t.length && "code" === t[0].type,
                                    o = n ? t[0].text : a.markdown,
                                    l = n ? t[0].lang : null;
                                oe({ markdown: o, language: l, entityKey: e }), Pe(n ? v.Q.Code : v.Q.Markdown);
                            }
                        },
                        [Pe, u],
                    ),
                    De = n.useCallback(
                        (e) => {
                            const t = u.getCurrentContent().getBlockForKey(e),
                                a = t?.getText();
                            a && (le({ tex: a, blockKey: e }), Pe(v.Q.LaTeX));
                        },
                        [Pe, u],
                    ),
                    Me = n.useCallback(
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
                                        r = t.getBlocksAsArray(),
                                        l = t.getBlockForKey(a);
                                    r.splice(n, 1), r.splice(e, 0, l);
                                    const i = o.ContentState.createFromBlockArray(r),
                                        s = o.EditorState.push(u, i, "move-block");
                                    _(s);
                                }
                            }
                        },
                        [u, _],
                    ),
                    Le = (0, b.Z)(ve).reduce((e, [t, a]) => e.set(t, a), o.DefaultDraftBlockRenderMap),
                    Re = (e) => {
                        if ("atomic" === e.getType()) return { component: ae, editable: !1, props: { allMedia: t, mediaIdToLocalMediaIdMap: B, onEditMedia: we, onRemoveBlock: ge, onRemoveImage: be, onEditCaption: Te, onEditMarkdown: Be, onEditLaTeX: De } };
                    },
                    _e = [
                        {
                            "aria-label": fe,
                            Icon: () => n.createElement(l.Z, { style: Se.attachmentButton }, n.createElement(s.ZP, { color: "gray700", numberOfLines: 1, size: "subtext1", weight: "normal" }, Ee), n.createElement(h.default, { size: "small", style: Se.iconGray, type: "primaryText" })),
                            key: "attachments_dropdown",
                            onPress: se,
                            renderActionMenu: () => {
                                const e = U.k.filter((e) => (e.id === v.Q.Markdown ? H : e.id === v.Q.Code ? j : e.id !== v.Q.LaTeX || N)).map((e) => ({ isSelected: !1, onClick: () => Pe(e.id), selectable: !1, text: e.text, Icon: e.Icon }));
                                return K ? n.createElement(i.Z, { items: e, onCloseRequested: se, shouldCloseOnClick: !0 }) : null;
                            },
                        },
                    ];
                V && _e.push({ "aria-label": ke, Icon: () => n.createElement(y.default, { style: Se.iconGray }), onPress: () => Y(!J), key: "keyboard_shortcuts" });
                const Ae = { zIndex: ee ? "-1" : void 0 };
                return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                        E.Xi,
                        { onDragEnd: Me },
                        n.createElement(E.$p, { droppableId: "editor" }, (e, t) =>
                            n.createElement(
                                "div",
                                { ref: e.innerRef, style: Ae },
                                n.createElement(
                                    I.Z,
                                    { contextText: (0, U.iT)(u), isInline: !0, onTextUpdated: _, onTypeaheadStateChange: C.Z, source: S._4.LongformComposer },
                                    (function (e, t) {
                                        const o = [Z, e && Se.draggingCursor],
                                            r = { blockRendererFn: Re, blockRenderMap: Le, dragPlaceholder: t, editorState: u, element: c.Z, withMaxHeight: !1, allowExtendedPasteStyles: !0, longformRichTextTransform: !0, contentHorizontalPadding: a, allowInTextShortcuts: V };
                                        return function (e) {
                                            return n.createElement(d.b, {
                                                additionalToolbarButtonConfigs: _e,
                                                emojiPickerButton: ye,
                                                errorText: m,
                                                inputStyle: o,
                                                middleControl: D,
                                                numberOfLines: 18,
                                                onChange: function (t) {
                                                    e(t), _(t);
                                                },
                                                onFilesAdded: R,
                                                placeholder: xe,
                                                placeholderTextColor: p.default.theme.colors.gray500,
                                                richTextInputContext: r,
                                                showError: F,
                                                style: Se.richTextInputContainer,
                                                testID: "composer",
                                                toolbarRightControl: O,
                                                toolbarStyle: z,
                                                withAppBar: W,
                                            });
                                        };
                                    })(t.isDraggingOver, e.placeholder),
                                ),
                            ),
                        ),
                    ),
                    q ? n.createElement(x.ZP, { attachmentType: X, codeLanguage: ne?.language || "", location: P, markdown: ne?.markdown || "", onAddGif: ce, onAddLaTeX: he, onAddMarkdown: me, onAddMedia: de, onAddTweets: pe, onClose: ie, tex: re?.tex || "" }) : null,
                    ee ? n.createElement(Ce, { captionText: ee.captionText, media: ee.media, onCancel: Ie, onUpdate: Ze }) : null,
                    J && n.createElement(M, { onDismiss: () => Y(!1) }),
                );
            }
            const Se = p.default.create((e) => ({ draggingCursor: { cursor: "grabbing" }, richTextInputContainer: { position: "relative" }, attachmentButton: { paddingInline: e.spaces.space8, gap: e.spaces.space4, flexDirection: "row", alignItems: "center", textAlign: "center" }, iconGray: { color: e.colors.gray700 } })),
                xe = m().ia3611ee,
                ve = { atomic: { element: "section", wrapper: n.createElement(oe, null) }, unstyled: { aliasedElements: ["p"], element: "div", wrapper: n.createElement(oe, null) }, blockquote: { element: "blockquote", wrapper: n.createElement(oe, { wrapper: o.DefaultDraftBlockRenderMap.get("blockquote").wrapper }) }, "unordered-list-item": { element: "li", wrapper: n.createElement(oe, { wrapper: o.DefaultDraftBlockRenderMap.get("unordered-list-item").wrapper }) }, "ordered-list-item": { element: "li", wrapper: n.createElement(oe, { wrapper: o.DefaultDraftBlockRenderMap.get("ordered-list-item").wrapper }) }, "header-one": { element: "h1", wrapper: n.createElement(oe, { wrapper: o.DefaultDraftBlockRenderMap.get("header-one").wrapper }) }, "header-two": { element: "h2", wrapper: n.createElement(oe, { wrapper: o.DefaultDraftBlockRenderMap.get("header-two").wrapper }) } };
        },
        967934: (e, t, a) => {
            a.d(t, { ZP: () => V });
            a(136728);
            var n = a(202784),
                o = a(325686),
                r = a(344175),
                l = a(40610),
                i = a(731708),
                s = a(449479),
                c = a(661810),
                d = a(466818),
                p = a(530338),
                u = a(96083),
                m = a(392237),
                h = a(674132),
                y = a.n(h),
                g = a(37475),
                b = a(167630);
            const C = m.default.create((e) => ({ overlay: { backgroundColor: e.colors.cellBackground, height: "100%", opacity: 0.7, paddingVertical: e.spaces.space20 } })),
                f = (e) => {
                    const { activityIndicatorStyle: t, style: a } = e;
                    return n.createElement(o.Z, { style: [m.default.absoluteFill, C.overlay, a] }, n.createElement(b.Z, { style: t }));
                },
                k = y().a8fdd09c,
                E = y().d8047cc8,
                w = y().ff7ddca2,
                S = y().ef34d7be,
                x = y().e52d4998,
                v = y().baffe39a,
                T = y().d52a1caa,
                I = y().g6185a9e,
                Z = y().d7985b24,
                P = y().b5660338,
                B = y().i9000126,
                D = y().dcaede8a,
                M = y().f19e4bfc,
                L = y().ad85cd2e,
                R = y().hff1b97a,
                _ = y().a330771e,
                A = y().b6510e68,
                F = y().e4a6e006,
                O = y().eff483e0,
                z = [{ label: L, value: "Subscribers" }],
                H = [
                    { label: v, value: "All" },
                    { label: B, value: "Community" },
                    { label: M, value: "Verified" },
                    { label: D, value: "ByInvitation" },
                ],
                j = "publish_sheet",
                N = m.default.create((e) => ({ bottomCallout: { marginTop: e.spaces.space4 }, heading: { paddingVertical: e.spaces.space8 }, container: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16 }, overlay: { justifyContent: "center", zIndex: 1 }, activityIndicator: { alignSelf: "center" }, preview: { maxWidth: "350px" } })),
                V = ({ articleEntity: e, articleEntityMetadata: t, hasPublishingFailed: a, isActiveCreator: m, isPublishing: h, onClose: y, onPublish: b, onScribe: C }) => {
                    const B = t?.tweet_results?.result?.legacy?.conversation_control?.policy,
                        D = B
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
                        M = t?.visibility_setting,
                        L = n.useCallback(() => {
                            const e = [{ label: v, value: g.d.Public, testID: "audienceControl-everyone" }];
                            return m && e.push({ label: T, value: g.d.Subscribers, testID: "audienceControl-subscribers" }), e;
                        }, [m]),
                        V = n.useMemo(() => [...H, ...(m ? z : [])], [m]),
                        [W, q] = n.useState(M || g.d.Public),
                        [G, K] = n.useState(D || "All"),
                        [Q, X] = n.useState(!1),
                        $ = n.useCallback(() => {
                            !h && y();
                        }, [h, y]),
                        U = n.useCallback(
                            (e) => {
                                C({ component: j, element: "confirm_publish_button", action: "click" }), b(Q, e, { conversationControl: "All" !== G && "Subscribers" !== W ? G : void 0, visibilitySetting: W });
                            },
                            [C, b, Q, W, G],
                        ),
                        J = n.useMemo(() => ({ label: E, forceDisabled: h, onClick: U, popoverMessage: O, type: "brandFilled" }), [h, U]),
                        Y = n.useCallback(
                            (e) => {
                                C({ component: j, element: "copy_link_checkbox", action: "click" }), X(e);
                            },
                            [C, X],
                        ),
                        ee = n.useCallback((e, t) => q(t), [q]),
                        te = n.useCallback((e) => K(e), [K]),
                        ae = !!t?.tweet_results;
                    return n.createElement(r.Z, { onClose: $, primaryButtonConfig: J, title: k, withPassthroughEvents: !0 }, h && n.createElement(f, { activityIndicatorStyle: N.activityIndicator, style: N.overlay }), n.createElement(o.Z, { style: N.container }, ae ? n.createElement(l.Z.Primary, { text: S, withIcon: !0 }) : null, a && n.createElement(l.Z.Danger, { text: F, withIcon: !0 }), n.createElement(n.Fragment, null, n.createElement(i.ZP, { size: "headline2", style: N.heading, weight: "heavy" }, x), n.createElement(s.Z, { disabled: ae, name: "audienceControl", onChange: ee, options: L(), value: W }), n.createElement(c.Z, { spacing: "space12" }), n.createElement(i.ZP, { size: "headline2", style: N.heading, weight: "heavy" }, I), "Subscribers" !== W ? n.createElement(d.ZP, { disabled: ae, label: Z, onChange: te, options: V, testID: "convoControl", value: G }) : n.createElement(i.ZP, null, R)), e ? n.createElement(n.Fragment, null, n.createElement(c.Z, { spacing: "space16" }), n.createElement(i.ZP, { size: "headline2", style: N.heading, weight: "heavy" }, P), n.createElement(o.Z, { style: N.preview }, n.createElement(p.Z, { articleEntity: e, hasSensitiveContent: !1 }))) : null, ae ? null : n.createElement(l.Z.Primary, { style: N.bottomCallout, text: w, withIcon: !0 }), n.createElement(c.Z, { spacing: "space16" }), n.createElement(u.Z, { checked: Q, helpText: A, label: _, onChange: Y, testID: "copyTwitterArticleLinkCheckbox" })));
                };
        },
        444677: (e, t, a) => {
            a.d(t, { f: () => d });
            var n = a(202784),
                o = a(731708),
                r = a(392237),
                l = a(674132),
                i = a.n(l);
            const s = i().ca15dd4e,
                c = i().bb40bf66,
                d = (e) => {
                    const { isPublished: t } = e;
                    return n.createElement(o.ZP, { size: "subtext3", style: [p.visibilityLabel, t ? p.publishedLabel : p.draftLabel], weight: "bold" }, t ? c : s);
                },
                p = r.default.create((e) => ({ draftLabel: { backgroundColor: e.colors.purple50, color: e.colors.purple900 }, publishedLabel: { backgroundColor: e.colors.green50, color: e.colors.green900 }, visibilityLabel: { alignItems: "center", borderRadius: e.borderRadii.xSmall, flexDirection: "row", paddingHorizontal: `calc(${e.spaces.space4} + ${e.spaces.space2})`, paddingVertical: e.spaces.space4 } }));
        },
        201770: (e, t, a) => {
            a.d(t, { Z: () => y });
            var n = a(202784),
                o = a(731708),
                r = a(966886),
                l = a(470397),
                i = a(444677),
                s = a(392237),
                c = a(674132),
                d = a.n(c),
                p = a(566220);
            const u = d().h107935c,
                m = s.default.create((e) => ({ boldText: { fontWeight: e.fontWeights.bold } })),
                h = ({ updatedAt: e }) => {
                    const t = (0, p.R)()().getTime(),
                        a = Number(e),
                        l = Math.floor((t - a) / 1e3),
                        i = { lastSavedElement: n.createElement(r.Z, { humanReadable: !0, style: m.boldText, timestamp: a }) };
                    return n.createElement(o.ZP, { color: "gray700", size: "subtext2" }, l <= 5 ? u : n.createElement(d().I18NFormatMessage, { $i18n: "bd7349bb" }, i.lastSavedElement));
                },
                y = (e) => {
                    const { isPublished: t, publishedAtMs: a, updatedAtMs: s } = e,
                        c = t ? n.createElement(o.ZP, { size: "subtext2", weight: "bold" }, n.createElement(r.Z, { timestamp: Number(a) })) : n.createElement(h, { updatedAt: s });
                    return n.createElement(l.Z, null, n.createElement(i.f, { isPublished: t }), c);
                };
        },
        536790: (e, t, a) => {
            a.d(t, { Z: () => p });
            a(571372), a(136728);
            var n = a(202784),
                o = a(301503),
                r = a(597496),
                l = a(339110),
                i = a(456910),
                s = a(230295),
                c = a(267446);
            class d extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { queryContext: void 0, canShowTypeahead: !1 }),
                        (this._genericWrapperRef = n.createRef()),
                        (this.render = () => {
                            const { children: e, composeCommunityId: t, contextText: a, isInline: o, isInlineReply: i, onTypeaheadStateChange: s, source: c } = this.props,
                                { canShowTypeahead: d, queryContext: p } = this.state,
                                u = d && p ? { word: p.word, resultType: p.resultType } : void 0;
                            return n.createElement(r.H1, { composeCommunityId: t, contextText: a, isInline: o, isInlineReply: i, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: s, query: u, ref: this._genericWrapperRef, source: c || l._4.Compose }, e(this._handleInputChange));
                        }),
                        (this._getCaret = (e) => e.getSelection().getStartOffset()),
                        (this._getPlaintextFromCurrentBlock = (e) => {
                            const t = e.getSelection().anchorKey;
                            return e.getCurrentContent().getBlockForKey(t).getText();
                        }),
                        (this._handleSelectItem = (e) => {
                            const { onTextUpdated: t } = this.props,
                                { queryContext: a } = this.state;
                            if (a) {
                                const n = (0, c.k)(e, a.resultType);
                                t(this._replaceToken(n, a));
                            }
                            this._setQueryContext(void 0);
                        }),
                        (this._handleInputChange = (e) => {
                            if (!(0, s.T)(e)) throw new Error("RichTextTypeaheadComposeWrapper cannot handle plain text input changes");
                            {
                                const { queryContext: t } = this.state,
                                    a = t && t.word,
                                    n = this._getPlaintextFromCurrentBlock(e),
                                    { end: o, start: r, word: l } = i.si(this._getCaret(e), n),
                                    s = i.bR(l || "", "compose");
                                if (s?.q === a) return;
                                if ((this._genericWrapperRef.current && this._genericWrapperRef.current.resetSelectedItem(), -1 === r)) this._setQueryContext(void 0);
                                else if (s) {
                                    const { q: t, result_type: a } = s;
                                    this._setQueryContext({ word: t, resultType: a, editorState: e, startIndex: r, endIndex: o });
                                } else this._setQueryContext(void 0);
                            }
                        }),
                        (this._setQueryContext = (e) => this.setState({ queryContext: e, canShowTypeahead: !!e })),
                        (this._handleDismiss = () => this.setState({ canShowTypeahead: !1 }));
                }
                _replaceToken(e, t) {
                    const { editorState: a, endIndex: n, startIndex: r } = t,
                        l = a.getSelection().merge({ anchorKey: a.getSelection().getFocusKey(), anchorOffset: r, focusOffset: n }),
                        i = o.Modifier.replaceText(a.getCurrentContent(), l, e),
                        s = o.EditorState.push(a, i, "insert-characters"),
                        c = r + e.length,
                        d = s.getSelection().merge({ anchorOffset: c, focusOffset: c });
                    return o.EditorState.forceSelection(s, d);
                }
            }
            const p = d;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-967cca90.b57601fa.js.map
