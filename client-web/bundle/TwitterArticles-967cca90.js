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
        349035: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(202784),
                o = a(272175);
            const l = (0, a(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), n.createElement(o.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
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
            a.d(t, { Z: () => C });
            var n = a(202784),
                o = a(325686),
                l = a(855488),
                r = a(392237),
                i = a(111677),
                c = a.n(i),
                s = a(666536),
                d = a(125568),
                u = a(874088),
                p = a(339110),
                m = a(524110),
                b = a(611478);
            const h = c().d942865e,
                y = ({ onChange: e, onEnter: t, onSelect: a, value: r }) => {
                    const i = n.useRef(null),
                        [c, y] = n.useState(!1),
                        [C, f] = n.useState([]),
                        k = n.useMemo(() => (0, b.Is)(), []),
                        E = (0, d.t)(),
                        w = n.useMemo(
                            () =>
                                (0, s.Z)((e) => {
                                    E() && (e.length >= 1 ? (y(!0), f((0, b.lH)(e, k))) : y(!1));
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
                        x = n.useCallback((e) => (c ? n.createElement(n.Fragment, null, n.createElement(o.Z, { onClick: () => y(!1), style: g.mask }), n.createElement(m.Z, { items: C, onItemClick: v, ref: e.ref, source: p._4.Unknown, style: [e.style, g.dropdown] })) : null), [v, C, c]),
                        T = n.useCallback(
                            (e) => {
                                const { onFocus: a } = e;
                                return n.createElement(l.Z, { autoComplete: "off", label: h, name: "programming-language-input", onChange: S, onFocus: a, onKeyPress: t, ref: i, style: g.inputStyle, testID: "programming-language-input", value: r });
                            },
                            [S, t, r],
                        );
                    return n.createElement(u.default, { isCompact: !0, renderCustomDropdown: x, renderCustomInput: T, rounded: !0, source: p._4.Unknown, testID: "programming-language-selector", userLimit: 20 });
                },
                g = r.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, dropdown: { maxHeight: "25vh" }, mask: { ...r.default.absoluteFillObject, position: "fixed" } })),
                C = n.memo(y);
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
        222718: (e, t, a) => {
            a.d(t, { Z: () => g });
            var n = a(202784),
                o = a(325686),
                l = a(537392),
                r = a(10656),
                i = a(655352),
                c = a(555079),
                s = a(500002),
                d = a(625661),
                u = a(449067),
                p = a(655543),
                m = a(715601),
                b = a(392237);
            const h = b.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...b.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class y extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? n.createElement(o.Z, { style: h.fill }, n.createElement(m.Z, { style: h.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return n.createElement(l.ZP, null, ({ containerWidth: e }) => (r.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: a, screenType: o, showBackButtonOnRoot: l, showSubtitleOnRoot: r, showSubtitleOnWideDetail: c, showTitleOnRoot: s, withBottomBorder: d, withDetailOpen: p, ...m } = this.props;
                    return n.createElement(n.Fragment, null, (0, i.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : n.createElement(u.Z.Configure, m), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return n.createElement(n.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: a, appBarStyle: l, backLocation: r, documentTitle: i, headerless: s, history: p, leftControl: m, middleControl: b, onBackClick: y, rightControl: g, screenType: C, searchBoxOptions: f, secondaryBar: k, showBackButtonOnRoot: E, showSubtitleOnRoot: w, showSubtitleOnWideDetail: S, showTitleOnRoot: v, subtitle: x, title: T, titleIconCell: Z, titleIconCellSize: P, withDetailOpen: I, withSearchBox: B, withTweetButton: M, withWideContainer: D } = this.props,
                        L = "root" === C,
                        R = "secondaryRoot" === C,
                        A = "primaryDetail" === C,
                        _ = (A && S) || (L && w),
                        F = (L && !E) || (A && e),
                        O = (L && !v) || (A && e && !v),
                        H = L ? c.ey : A ? c.vX : void 0,
                        z = n.createElement(o.Z, { style: h.appBarContainer }, n.createElement(d.ZP, { backLocation: r, fixed: !1, hideBackButton: F, history: p, leftControl: m, middleControl: b, onBackClick: y, rightControl: g, secondaryBar: k, style: l, subtitle: _ ? x : void 0, title: O ? void 0 : T, titleDomId: H, titleIconCell: Z, titleIconCellSize: P, withWideContainer: D })),
                        j = L || (R && I) ? null : n.createElement(u.Z.Configure, { SideNavButton: t, TabBar: a, backLocation: r, documentTitle: i, headerless: s, middleControl: b, onBackClick: y, rightControl: g, searchBoxOptions: f, subtitle: x, title: T, withSearchBox: B, withTweetButton: M });
                    return n.createElement(n.Fragment, null, j, z);
                }
            }
            (y.contextType = p.Z), (y.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0, showBackButtonOnRoot: !1, showTitleOnRoot: !0 });
            const g = (0, s.ZP)(y);
        },
        496364: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(202784),
                o = a(107267),
                l = a(791632),
                r = a(222718);
            const i = (e) => {
                const t = (0, o.useHistory)();
                return (0, l.HD)(t) ? e.children || null : n.createElement(r.Z, e);
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
                u = a(392237),
                p = a(111677),
                m = a.n(p),
                b = a(487552),
                h = a(711223),
                y = a(459679),
                g = a(595088),
                C = a(516951),
                f = a(323265),
                k = a(952793),
                E = a(386742),
                w = a(655352),
                S = a(339110),
                v = a(690822),
                x = a(385264),
                T = a(313433),
                Z = a(536790),
                P = a(344175),
                I = a(842485);
            const B = f.ZP.isMac() ? "⌘" : "CTRL",
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
                D = ({ onDismiss: e }) => n.createElement(P.Z, { enableMaskForDismiss: !0, onClose: e, title: m().ja9ca202, withPassthroughEvents: !0 }, n.createElement(I.ShortcutContent, { shortcuts: M }));
            var L = a(167630),
                R = a(661810),
                A = a(420740),
                _ = a(691533),
                F = a(512110),
                O = a(794057),
                H = a(335923),
                z = a(942910),
                j = a(540985),
                N = a(790082),
                V = a(154003),
                W = a(885724),
                G = a(837020);
            const K = m().jcd5ee8a,
                q = m().a8f09fb8,
                Q = ({ children: e, onEdit: t, onRemove: a, style: o }) => n.createElement(r.Z, { style: [X.container, o] }, n.createElement(r.Z, { style: X.buttonRow }, t ? n.createElement(V.ZP, { "aria-label": K, icon: n.createElement(W.default, { style: X.icon }), onPress: t, preventFocusShift: !0, size: "small", type: "primaryText" }) : null, n.createElement(V.ZP, { "aria-label": q, icon: n.createElement(G.default, { style: X.icon }), onPress: a, preventFocusShift: !0, size: "small", type: "primaryText" })), e),
                X = u.default.create((e) => ({ container: { width: "100%", flexDirection: "column", gap: e.spaces.space4, padding: e.spaces.space8, backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.medium, borderWidth: e.borderWidths.small, boxShadow: e.boxShadows.xSmall, overflow: "hidden" }, buttonRow: { flexDirection: "row", justifyContent: "flex-end", gap: e.spaces.space4 }, icon: { color: e.colors.gray300 } })),
                $ = n.memo(Q);
            var U = a(874111);
            const J = m().e8a12604,
                Y = m().ef4602ec,
                ee = (e) => {
                    const { block: t, blockProps: a, contentState: o } = e,
                        { allMedia: l, mediaIdToLocalMediaIdMap: i, onEditCaption: s, onEditLaTeX: d, onEditMarkdown: u } = a,
                        p = t.getEntityAt(0),
                        m = p ? o.getEntity(p) : null,
                        b = t.getKey(),
                        h = t.getText(),
                        g = () => {
                            a.onRemoveBlock(b);
                        },
                        C = n.useCallback(() => {
                            p && s(p);
                        }, [p, s]),
                        f = n.useCallback(() => {
                            p && u(p);
                        }, [p, u]),
                        k = n.useCallback(() => {
                            b && d(b);
                        }, [b, d]);
                    if (p && m) {
                        const e = m.getData();
                        if (m.type === O.DC.TWEET) {
                            const { tweetId: t } = e;
                            return n.createElement(F.ZP, { onRemove: g, style: te.atomicBlock, tweetId: t, withActionsDisabled: !0 });
                        }
                        if (m.type === O.DC.MEDIA) {
                            const { caption: t, mediaItems: o } = e,
                                s = (e) => () => {
                                    1 === o.length ? g() : a.onRemoveImage(p, e);
                                },
                                d = (e) => () => {
                                    a.onEditMedia(p, e);
                                },
                                u = (0, U.WE)(l, i, o),
                                m = (0, y.Z)(u, (e) => e),
                                b = [te.fullWidth, te.atomicBlock];
                            if (m.length !== u.length) return n.createElement(L.Z, { style: te.atomicBlock });
                            {
                                const e = !!m[0].mediaFile?.isImage;
                                return n.createElement(r.Z, { style: b }, n.createElement(z.Z, { editable: !0, isActive: !0, media: m, onEditMedia: e ? d : void 0, onRemoveMedia: s, style: te.fullWidth }), n.createElement(r.Z, { onClick: C, style: te.caption }, t ? n.createElement(N.Z, { caption: t }) : n.createElement(c.ZP, { size: "subtext2", style: te.empty }, J)));
                            }
                        }
                        if (m.type === O.DC.MARKDOWN) {
                            const { markdown: t } = e;
                            return n.createElement($, { onEdit: f, onRemove: g, style: te.atomicBlock }, n.createElement(H.Z, { markdownText: t }));
                        }
                        if (m.type === O.DC.DIVIDER) return n.createElement(R.Z, { style: [te.atomicBlock, te.fullWidth] });
                        if (m.type === O.DC.LATEX) return n.createElement($, { onEdit: k, onRemove: g, style: te.atomicBlock }, n.createElement(j.Z, { displayMode: !0, style: te.marginBottom, tex: h }));
                    }
                    return null;
                },
                te = u.default.create((e) => ({ fullWidth: { width: "100%" }, atomicBlock: { marginBottom: e.spaces.space28 }, caption: { cursor: "pointer", marginTop: e.spaces.space8 }, empty: { color: e.colors.gray500, lineHeight: e.lineHeights.body }, marginBottom: { marginBottom: e.spaces.space8 } })),
                ae = (e) => {
                    const { block: t, blockProps: a } = e,
                        o = t.getKey(),
                        l = n.useCallback(() => {
                            a.onRemoveBlock(o);
                        }, [o, a]),
                        r = n.useCallback(() => n.createElement($, { onRemove: l, style: te.atomicBlock }, n.createElement(A.Z, { title: Y })), [l]);
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
                ue = new o.CompositeDecorator([ce.ez(), ce.NA(), ce.aF, ce.RU]),
                pe = u.default.create((e) => ({ captionInput: { borderRadius: e.borderRadii.small, borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, marginTop: e.spaces.space4, maxHeight: e.spaces.space80, paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space4, fontSize: e.fontSizes.subtext2, overflow: "auto" } })),
                me = ({ caption: e, onUpdateCaption: t }) => {
                    const a = u.default.theme.colors.gray500;
                    n.useEffect(() => {
                        e.getDecorator() !== ue && t(o.EditorState.set(e, { decorator: ue }));
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
                    return n.createElement(Z.Z, { contextText: (0, U.iT)(e), isInline: !0, onTextUpdated: t, onTypeaheadStateChange: C.Z, source: S._4.MediaPreviewGroupCaption }, (e) => n.createElement(ie.Z, { inputStyle: pe.captionInput, isCompact: !0, maxNumberOfLines: 3, multiline: !0, name: "Media Caption", numberOfLines: 3, onChange: l(e), placeholder: de, placeholderTextColor: a, richTextInputContext: r, styleType: "selection" }));
                },
                be = m().da8ac57c,
                he = m().i2209530,
                ye = m().e68b09b4,
                ge = u.default.create((e) => ({ input: { padding: e.spaces.space24 }, caption: { marginTop: e.spaces.space8 }, preview: { backgroundColor: e.colors.gray100, flexGrow: 1, padding: e.spaces.space24, zIndex: -1 }, previewContent: { paddingHorizontal: "15%" } })),
                Ce = ({ captionText: e, media: t, onCancel: a, onUpdate: o }) => {
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
                        u = n.useMemo(() => ({ label: ye, onClick: s }), [s]),
                        p = n.useCallback(() => C.Z, []),
                        m = n.useCallback((e) => {
                            e.stopPropagation();
                        }, []);
                    return n.createElement(P.Z, { onClose: a, primaryButtonConfig: d, secondaryButtonConfig: u, title: be, withKeyboardNavigation: !0 }, n.createElement(r.Z, { onKeyDown: m, style: ge.input }, n.createElement(me, { caption: l, onUpdateCaption: i })), n.createElement(r.Z, { style: ge.preview }, n.createElement(r.Z, { style: ge.previewContent }, n.createElement(z.Z, { editable: !1, media: t, onRemoveMedia: p }), n.createElement(r.Z, { style: ge.caption }, n.createElement(N.Z, { caption: l.getCurrentContent().getPlainText() })))));
                },
                fe = m().e1a292ec,
                ke = m().h54e6138,
                Ee = m().ebfd8ac6;
            function we(e) {
                const { allMedia: t, contentHorizontalPadding: a, editorState: p, errorText: m, inputStyle: P, location: I, mediaIdToLocalMediaIdMap: B, middleControl: M, onAddGif: L, onAddMediaFiles: R, onChange: A, onEditMedia: _, showError: F, toolbarRightControl: O, toolbarStyle: H } = e,
                    z = (0, k.hC)("responsive_web_twitter_article_markdown_enabled"),
                    j = (0, k.hC)("responsive_web_twitter_article_code_block_enabled"),
                    N = (0, k.hC)("responsive_web_twitter_article_latex_enabled"),
                    V = (0, k.hC)("responsive_web_in_text_shortcuts_enabled"),
                    W = (0, w.ZP)() || f.ZP.isTwitterApp(),
                    [G, K] = n.useState(!1),
                    [q, Q] = n.useState(!1),
                    [X, $] = n.useState(""),
                    [J, Y] = n.useState(!1),
                    [ee, te] = n.useState(null),
                    [ne, oe] = n.useState(null),
                    [le, re] = n.useState(null),
                    ie = n.useCallback(() => {
                        G && (oe(null), re(null)), K(!G);
                    }, [G]),
                    ce = n.useCallback(() => {
                        Q(!q);
                    }, [q]),
                    se = n.useCallback(
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
                    ue = n.useCallback(
                        (e) => {
                            const t = (0, U.Ve)(p, e);
                            A(t), ie();
                        },
                        [ie, p, A],
                    ),
                    pe = n.useCallback(() => {
                        const e = (0, U.O7)(p);
                        A(e);
                    }, [p, A]),
                    me = n.useCallback(
                        (e) => {
                            if (ne?.entityKey) {
                                const t = (0, U.QX)(p, ne.entityKey, { markdown: e });
                                A(t, !0);
                            } else {
                                const t = (0, U.jB)(p, e);
                                A(t);
                            }
                            ie(), oe(null);
                        },
                        [ie, ne, p, A],
                    ),
                    be = n.useCallback(
                        (e) => {
                            if (le?.blockKey) {
                                const t = (0, U.Vn)(p, le.blockKey, e);
                                A(t, !0);
                            } else {
                                const t = (0, U.wq)(p, e);
                                A(t);
                            }
                            ie(), re(null);
                        },
                        [ie, le, p, A],
                    ),
                    he = n.useCallback(() => n.createElement(T.Z, { editorState: p, onChange: A }), [p, A]),
                    ye = (e) => {
                        const t = (0, U.Ff)(p, e);
                        setTimeout(() => A(t), 10);
                    },
                    ge = (e, t) => {
                        const a = (0, U.mA)(p, e, t, B);
                        A(a, !0);
                    },
                    we = (e, t) => {
                        _(e, t);
                    },
                    Te = n.useCallback(
                        (e) => {
                            const a = p.getCurrentContent().getEntity(e),
                                n = a?.getData();
                            if (n) {
                                const a = (0, U.WE)(t, B, n.mediaItems);
                                te({ media: (0, y.Z)(a, (e) => e), captionText: n.caption, entityKey: e });
                            }
                        },
                        [t, p, B],
                    ),
                    Ze = n.useCallback(() => {
                        te(null);
                    }, []),
                    Pe = n.useCallback(
                        (e) => {
                            if ((Ze(), ee)) {
                                const t = (0, U.QX)(p, ee.entityKey, { caption: e });
                                A(t, !0);
                            }
                        },
                        [Ze, p, A, ee],
                    ),
                    Ie = n.useCallback(
                        (e) => {
                            if (e === x.Q.Divider) pe();
                            else $(e), ie();
                        },
                        [pe, ie],
                    ),
                    Be = n.useCallback(
                        (e) => {
                            const t = p.getCurrentContent().getEntity(e),
                                a = t?.getData();
                            if (a?.markdown) {
                                const t = l.TU.lexer(a.markdown),
                                    n = 1 === t.length && "code" === t[0].type,
                                    o = n ? t[0].text : a.markdown,
                                    r = n ? t[0].lang : null;
                                oe({ markdown: o, language: r, entityKey: e }), Ie(n ? x.Q.Code : x.Q.Markdown);
                            }
                        },
                        [Ie, p],
                    ),
                    Me = n.useCallback(
                        (e) => {
                            const t = p.getCurrentContent().getBlockForKey(e),
                                a = t?.getText();
                            a && (re({ tex: a, blockKey: e }), Ie(x.Q.LaTeX));
                        },
                        [Ie, p],
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
                                    const t = p.getCurrentContent(),
                                        l = t.getBlocksAsArray(),
                                        r = t.getBlockForKey(a);
                                    l.splice(n, 1), l.splice(e, 0, r);
                                    const i = o.ContentState.createFromBlockArray(l),
                                        c = o.EditorState.push(p, i, "move-block");
                                    A(c);
                                }
                            }
                        },
                        [p, A],
                    ),
                    Le = (0, g.Z)(xe).reduce((e, [t, a]) => e.set(t, a), o.DefaultDraftBlockRenderMap),
                    Re = (e) => {
                        if ("atomic" === e.getType()) return { component: ae, editable: !1, props: { allMedia: t, mediaIdToLocalMediaIdMap: B, onEditMedia: we, onRemoveBlock: ye, onRemoveImage: ge, onEditCaption: Te, onEditMarkdown: Be, onEditLaTeX: Me } };
                    },
                    Ae = [
                        {
                            "aria-label": fe,
                            Icon: () => n.createElement(r.Z, { style: Se.attachmentButton }, n.createElement(c.ZP, { color: "gray700", numberOfLines: 1, size: "subtext1", weight: "normal" }, Ee), n.createElement(b.default, { size: "small", style: Se.iconGray, type: "primaryText" })),
                            key: "attachments_dropdown",
                            onPress: ce,
                            renderActionMenu: () => {
                                const e = U.k.filter((e) => (e.id === x.Q.Markdown ? z : e.id === x.Q.Code ? j : e.id !== x.Q.LaTeX || N)).map((e) => ({ isSelected: !1, onClick: () => Ie(e.id), selectable: !1, text: e.text, Icon: e.Icon }));
                                return q ? n.createElement(i.Z, { items: e, onCloseRequested: ce, shouldCloseOnClick: !0 }) : null;
                            },
                        },
                    ];
                V && Ae.push({ "aria-label": ke, Icon: () => n.createElement(h.default, { style: Se.iconGray }), onPress: () => Y(!J), key: "keyboard_shortcuts" });
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
                                    { contextText: (0, U.iT)(p), isInline: !0, onTextUpdated: A, onTypeaheadStateChange: C.Z, source: S._4.LongformComposer },
                                    (function (e, t) {
                                        const o = [P, e && Se.draggingCursor],
                                            l = { blockRendererFn: Re, blockRenderMap: Le, dragPlaceholder: t, editorState: p, element: s.Z, withMaxHeight: !1, allowExtendedPasteStyles: !0, longformRichTextTransform: !0, contentHorizontalPadding: a, allowInTextShortcuts: V };
                                        return function (e) {
                                            return n.createElement(d.b, {
                                                additionalToolbarButtonConfigs: Ae,
                                                emojiPickerButton: he,
                                                errorText: m,
                                                inputStyle: o,
                                                middleControl: M,
                                                numberOfLines: 18,
                                                onChange: function (t) {
                                                    e(t), A(t);
                                                },
                                                onFilesAdded: R,
                                                placeholder: ve,
                                                placeholderTextColor: u.default.theme.colors.gray500,
                                                richTextInputContext: l,
                                                showError: F,
                                                style: Se.richTextInputContainer,
                                                testID: "composer",
                                                toolbarRightControl: O,
                                                toolbarStyle: H,
                                                withAppBar: W,
                                            });
                                        };
                                    })(t.isDraggingOver, e.placeholder),
                                ),
                            ),
                        ),
                    ),
                    G ? n.createElement(v.ZP, { attachmentType: X, codeLanguage: ne?.language || "", location: I, markdown: ne?.markdown || "", onAddGif: se, onAddLaTeX: be, onAddMarkdown: me, onAddMedia: de, onAddTweets: ue, onClose: ie, tex: le?.tex || "" }) : null,
                    ee ? n.createElement(Ce, { captionText: ee.captionText, media: ee.media, onCancel: Ze, onUpdate: Pe }) : null,
                    J && n.createElement(D, { onDismiss: () => Y(!1) }),
                );
            }
            const Se = u.default.create((e) => ({ draggingCursor: { cursor: "grabbing" }, richTextInputContainer: { position: "relative" }, attachmentButton: { paddingInline: e.spaces.space8, gap: e.spaces.space4, flexDirection: "row", alignItems: "center", textAlign: "center" }, iconGray: { color: e.colors.gray700 } })),
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
                u = a(530338),
                p = a(96083),
                m = a(392237),
                b = a(111677),
                h = a.n(b),
                y = a(37475),
                g = a(167630);
            const C = m.default.create((e) => ({ overlay: { backgroundColor: e.colors.cellBackground, height: "100%", opacity: 0.7, paddingVertical: e.spaces.space20 } })),
                f = (e) => {
                    const { activityIndicatorStyle: t, style: a } = e;
                    return n.createElement(o.Z, { style: [m.default.absoluteFill, C.overlay, a] }, n.createElement(g.Z, { style: t }));
                },
                k = h().a8fdd09c,
                E = h().d8047cc8,
                w = h().ff7ddca2,
                S = h().ef34d7be,
                v = h().e52d4998,
                x = h().baffe39a,
                T = h().d52a1caa,
                Z = h().g6185a9e,
                P = h().d7985b24,
                I = h().b5660338,
                B = h().i9000126,
                M = h().dcaede8a,
                D = h().f19e4bfc,
                L = h().ad85cd2e,
                R = h().hff1b97a,
                A = h().a330771e,
                _ = h().b6510e68,
                F = h().e4a6e006,
                O = h().eff483e0,
                H = [{ label: L, value: "Subscribers" }],
                z = [
                    { label: x, value: "All" },
                    { label: B, value: "Community" },
                    { label: D, value: "Verified" },
                    { label: M, value: "ByInvitation" },
                ],
                j = "publish_sheet",
                N = m.default.create((e) => ({ bottomCallout: { marginTop: e.spaces.space4 }, heading: { paddingVertical: e.spaces.space8 }, container: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16 }, overlay: { justifyContent: "center", zIndex: 1 }, activityIndicator: { alignSelf: "center" }, preview: { maxWidth: "350px" } })),
                V = ({ articleEntity: e, articleEntityMetadata: t, hasPublishingFailed: a, isActiveCreator: m, isPublishing: b, onClose: h, onPublish: g, onScribe: C }) => {
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
                        V = n.useMemo(() => [...z, ...(m ? H : [])], [m]),
                        [W, G] = n.useState(D || y.d.Public),
                        [K, q] = n.useState(M || "All"),
                        [Q, X] = n.useState(!1),
                        $ = n.useCallback(() => {
                            !b && h();
                        }, [b, h]),
                        U = n.useCallback(
                            (e) => {
                                C({ component: j, element: "confirm_publish_button", action: "click" }), g(Q, e, { conversationControl: "All" !== K && "Subscribers" !== W ? K : void 0, visibilitySetting: W });
                            },
                            [C, g, Q, W, K],
                        ),
                        J = n.useMemo(() => ({ label: E, forceDisabled: b, onClick: U, popoverMessage: O, type: "brandFilled" }), [b, U]),
                        Y = n.useCallback(
                            (e) => {
                                C({ component: j, element: "copy_link_checkbox", action: "click" }), X(e);
                            },
                            [C, X],
                        ),
                        ee = n.useCallback((e, t) => G(t), [G]),
                        te = n.useCallback((e) => q(e), [q]),
                        ae = !!t?.tweet_results;
                    return n.createElement(l.Z, { onClose: $, primaryButtonConfig: J, title: k, withPassthroughEvents: !0 }, b && n.createElement(f, { activityIndicatorStyle: N.activityIndicator, style: N.overlay }), n.createElement(o.Z, { style: N.container }, ae ? n.createElement(r.Z.Primary, { text: S, withIcon: !0 }) : null, a && n.createElement(r.Z.Danger, { text: F, withIcon: !0 }), n.createElement(n.Fragment, null, n.createElement(i.ZP, { size: "headline2", style: N.heading, weight: "heavy" }, v), n.createElement(c.Z, { disabled: ae, name: "audienceControl", onChange: ee, options: L(), value: W }), n.createElement(s.Z, { spacing: "space12" }), n.createElement(i.ZP, { size: "headline2", style: N.heading, weight: "heavy" }, Z), "Subscribers" !== W ? n.createElement(d.ZP, { disabled: ae, label: P, onChange: te, options: V, testID: "convoControl", value: K }) : n.createElement(i.ZP, null, R)), e ? n.createElement(n.Fragment, null, n.createElement(s.Z, { spacing: "space16" }), n.createElement(i.ZP, { size: "headline2", style: N.heading, weight: "heavy" }, I), n.createElement(o.Z, { style: N.preview }, n.createElement(u.Z, { articleEntity: e, hasSensitiveContent: !1 }))) : null, ae ? null : n.createElement(r.Z.Primary, { style: N.bottomCallout, text: w, withIcon: !0 }), n.createElement(s.Z, { spacing: "space16" }), n.createElement(p.Z, { checked: Q, helpText: _, label: A, onChange: Y, testID: "copyTwitterArticleLinkCheckbox" })));
                };
        },
        444677: (e, t, a) => {
            a.d(t, { f: () => d });
            var n = a(202784),
                o = a(731708),
                l = a(392237),
                r = a(111677),
                i = a.n(r);
            const c = i().ca15dd4e,
                s = i().bb40bf66,
                d = (e) => {
                    const { isPublished: t } = e;
                    return n.createElement(o.ZP, { size: "subtext3", style: [u.visibilityLabel, t ? u.publishedLabel : u.draftLabel], weight: "bold" }, t ? s : c);
                },
                u = l.default.create((e) => ({ draftLabel: { backgroundColor: e.colors.purple50, color: e.colors.purple900 }, publishedLabel: { backgroundColor: e.colors.green50, color: e.colors.green900 }, visibilityLabel: { alignItems: "center", borderRadius: e.borderRadii.xSmall, flexDirection: "row", paddingHorizontal: `calc(${e.spaces.space4} + ${e.spaces.space2})`, paddingVertical: e.spaces.space4 } }));
        },
        201770: (e, t, a) => {
            a.d(t, { Z: () => h });
            var n = a(202784),
                o = a(731708),
                l = a(966886),
                r = a(470397),
                i = a(444677),
                c = a(392237),
                s = a(111677),
                d = a.n(s),
                u = a(566220);
            const p = d().h107935c,
                m = c.default.create((e) => ({ boldText: { fontWeight: e.fontWeights.bold } })),
                b = ({ updatedAt: e }) => {
                    const t = (0, u.R)()().getTime(),
                        a = Number(e),
                        r = Math.floor((t - a) / 1e3),
                        i = { lastSavedElement: n.createElement(l.Z, { humanReadable: !0, style: m.boldText, timestamp: a }) };
                    return n.createElement(o.ZP, { color: "gray700", size: "subtext2" }, r <= 5 ? p : n.createElement(d().I18NFormatMessage, { $i18n: "bd7349bb" }, i.lastSavedElement));
                },
                h = (e) => {
                    const { isPublished: t, publishedAtMs: a, updatedAtMs: c } = e,
                        s = t ? n.createElement(o.ZP, { size: "subtext2", weight: "bold" }, n.createElement(l.Z, { timestamp: Number(a) })) : n.createElement(b, { updatedAt: c });
                    return n.createElement(r.Z, null, n.createElement(i.f, { isPublished: t }), s);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-967cca90.0872347a.js.map
