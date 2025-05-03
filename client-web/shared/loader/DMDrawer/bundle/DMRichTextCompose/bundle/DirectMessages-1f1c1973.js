"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-1f1c1973"],
    {
        242454: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(807896),
                o = n(202784),
                a = n(325686),
                l = n(731708),
                i = n(58881),
                s = n(530732),
                c = n(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: n, ...u }) => {
                    const m = i.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return o.createElement(a.Z, { style: d.container }, o.createElement(s.Z, (0, r.Z)({}, u, { interactiveStyles: m, style: d.root }), o.createElement(l.ZP, { align: e, color: t }, n)));
                };
        },
        15038: (e, t, n) => {
            n.d(t, { ZP: () => d });
            var r = n(202784),
                o = n(325686),
                a = n(950822),
                l = n(392237);
            const i = (e) => (0, a.Z)("div", e);
            class s extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._dragEnterCount = 0),
                        (this.state = { active: !1 }),
                        (this._handleDragDrop = (e) => {
                            const { onFilesAdded: t } = this.props;
                            e.preventDefault();
                            t(Array.from(e && e.dataTransfer.files)), this._updateDragCount(0);
                        }),
                        (this._handleDragEnter = (e) => {
                            const { onDragEnter: t } = this.props;
                            e.preventDefault(), t && t(), this._updateDragCount(this._dragEnterCount + 1);
                        }),
                        (this._handleDragLeave = (e) => {
                            e.preventDefault(), this._updateDragCount(this._dragEnterCount - 1);
                        }),
                        (this._handleDragOver = (e) => {
                            e.preventDefault();
                        });
                }
                render() {
                    const { activeStyle: e, allowDragDrop: t, children: n, style: a } = this.props,
                        { active: l } = this.state,
                        s = t ? c.dragBorderValid : c.dragBorderInvalid;
                    return r.createElement(i, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [c.root, a, l && s, l && e] }, r.createElement(o.Z, { style: c.inner }, "function" == typeof n ? n(l) : n));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            s.defaultProps = { allowDragDrop: !0 };
            const c = l.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                d = s;
        },
        449161: (e, t, n) => {
            n.d(t, { Z: () => f });
            var r = n(807896),
                o = n(202784),
                a = n(674132),
                l = n.n(a),
                i = n(154003),
                s = n(950822),
                c = n(392237);
            const d = l().i5450bec,
                u = l().f7432494;
            class m extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                n = e.target,
                                r = n.files;
                            r.length && t && t(r), (n.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: n, onChange: a, testID: l, ...c } = this.props,
                        m = !(e?.includes("video") || e?.includes("gif"));
                    return o.createElement(o.Fragment, null, o.createElement(i.ZP, (0, r.Z)({ hoverLabel: e ? { label: m ? u : d } : void 0 }, c, { disabled: t, onPress: this._handlePress })), (0, s.Z)("input", { accept: e, disabled: t, multiple: n, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: h.input, tabIndex: -1, testID: l, type: "file" }));
                }
            }
            m.defaultProps = { disabled: !1, multiple: !1 };
            const h = c.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                f = m;
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(325686),
                a = n(235902),
                l = n(885015),
                i = n(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: s } = a.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? r.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] })), r.createElement(o.Z, { style: c.gapText }, n), r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] }))) : r.createElement(o.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(807896),
                o = n(202784),
                a = n(325686),
                l = n(392237);
            class i extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...l } = this.props,
                        i = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, s.column, n && s.withGutterColumn] }));
                    return o.createElement(a.Z, (0, r.Z)({ style: [t, s.root, n && s.withGutter] }, l), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                o = n(325686),
                a = n(674132),
                l = n.n(a),
                i = n(815858),
                s = n(731708),
                c = n(642153),
                d = n(530732),
                u = n(392237);
            const m = l().a35a5b10,
                h = l().fc8cd112,
                f = (e) => r.createElement(s.ZP, null, e);
            class p extends r.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: a, userScreenName: l, withFacepile: u } = this.props,
                        h = this._renderMessage();
                    return r.createElement(i.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? r.createElement(d.Z, { "aria-label": m, interactiveStyles: null, link: l ? ((f = l), `/${f}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: i }) => r.createElement(o.Z, { style: g.content }, !e && u ? r.createElement(c.Z, { userAvatarUrls: t }) : null, r.createElement(s.ZP, { color: "gray700", size: "subtext2", style: [!e && g.message, (n || i) && !!l && g.underline, a] }, e && u ? r.createElement(c.Z, { style: g.inlineFacepile, userAvatarUrls: t }) : null, h))) : r.createElement(o.Z, { style: g.content }, r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, h)));
                    var f;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : h;
                }
                _renderOneUsername(e) {
                    return r.createElement(l().I18NFormatMessage, { $i18n: "c9e6167d" }, f(e[0]));
                }
                _renderTwoUsernames(e) {
                    return r.createElement(l().I18NFormatMessage, { $i18n: "ha91d1eb" }, f(e[0]), f(e[1]));
                }
                _renderThreeUsernames(e) {
                    return r.createElement(l().I18NFormatMessage, { $i18n: "f1069f9b" }, f(e[0]), f(e[1]), f(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return r.createElement(l().I18NFormatMessage, { $i18n: "e8404c1f" }, f(e[0]), f(e[1]), n);
                }
            }
            p.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const g = u.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        135904: (e, t, n) => {
            n.d(t, { c: () => a, n: () => o });
            var r = n(392237);
            const o = "longform-styles",
                a = `\n    .longform-header-one {\n        font-size: ${r.default.theme.fontSizes.title2};\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title1};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${r.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${r.default.theme.fontSizes.title3};\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title2};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${r.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};   \n        margin-bottom: ${r.default.theme.spaces.space12};\n        margin-left: calc(${r.default.theme.spaces.space28} + ${r.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${r.default.theme.spaces.space12} / 2);\n        margin-left: ${r.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${r.default.theme.spaces.space24} + ${r.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${r.default.theme.spaces.space2});\n        padding-left: calc(${r.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${r.default.theme.colors.gray900};\n        border-radius: ${r.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${r.default.theme.spaces.space28} + ${r.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, t, n) => {
            n.d(t, { Z: () => D });
            n(136728);
            var r = n(202784),
                o = n(301503),
                a = n(325686),
                l = n(595088),
                i = n(516951),
                s = n(731708),
                c = n(779802),
                d = n(537392),
                u = n(989272),
                m = n(925873),
                h = n(202253),
                f = n(786475),
                p = n(392237),
                g = n(135904);
            const b = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: r.createElement(s.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: r.createElement(s.ZP, null) } },
                y = (0, l.Z)(b).reduce((e, [t, n]) => e.set(t, n), o.DefaultDraftBlockRenderMap);
            let E = !1;
            const D = r.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: l, paragraphFontSizeOverride: s } = e;
                    r.useEffect(() => {
                        E || (u.fH(g.c, g.n), (E = !0));
                    }, []);
                    const p = [(0, h.ez)(l, s), h.aF, h.RU];
                    e.disable_entityLinkDecorator || p.push((0, h.NA)(l, s));
                    const b = m.Z.initEditorState(n, { decorators: p });
                    let D = i.Z;
                    return (
                        t &&
                            (D = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        r.createElement(d.ZP, null, ({ containerWidth: e }) => r.createElement(a.Z, { style: w.fontFamily }, r.createElement(o.Editor, { blockRenderMap: y, blockRendererFn: D, blockStyleFn: (0, c.su)(f.Z.isNarrowScreenWidth(e)), editorState: b, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                w = p.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            n.d(t, { $u: () => C, Ak: () => _, KJ: () => D, LI: () => S, P7: () => g, PW: () => v, QF: () => b, Qm: () => E, Tr: () => x, b$: () => p, db: () => I, et: () => k, fR: () => f, iH: () => Z, lD: () => y, su: () => w, u4: () => $, wX: () => P });
            var r = n(202784),
                o = n(674132),
                a = n.n(o),
                l = n(394123),
                i = n(856661),
                s = n(69893),
                c = n(474761),
                d = n(428259),
                u = n(89085),
                m = n(630715),
                h = n(731708);
            const f = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                p = (e) => [
                    { buttonTestId: "btn-bold", Icon: l.default, key: f.bold, onPress: e(f.bold) },
                    { buttonTestId: "btn-italic", Icon: i.default, key: f.italic, onPress: e(f.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: f.strikethrough, onPress: e(f.strikethrough) },
                ],
                g = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                b = (e) => [{ buttonTestId: "btn-blockquote", Icon: c.default, key: g.blockquote, onPress: e(g.blockquote) }],
                y = (e) => [
                    { buttonTestId: "btn-ul", Icon: d.default, key: g.bulleted, onPress: e(g.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: g.numbered, onPress: e(g.numbered) },
                ],
                E = "LINK",
                D = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: E, onPress: e }],
                w = (e, t) => (n) => {
                    const r = (t) => (e ? `${t}-narrow` : t);
                    switch (n.getType()) {
                        case g.bulleted:
                            return r("longform-unordered-list-item");
                        case g.blockquote:
                            return r("longform-blockquote");
                        case g.header1:
                            return r("longform-header-one");
                        case g.header2:
                            return r("longform-header-two");
                        case g.numbered:
                            return r("longform-ordered-list-item");
                        case g.paragraph:
                            return r("longform-unstyled");
                        default:
                            return t?.(n) || "";
                    }
                },
                k = a().d5a48014,
                v = a().b92b6156,
                C = a().ec5ed598,
                S = ({ children: e, extendedWidth: t, size: n, weight: o }) => r.createElement(h.ZP, { extendedWidth: t, size: n, weight: o }, e),
                x = { blockType: g.paragraph, label: C, component: S({ size: "body", children: C }) },
                Z = [{ blockType: g.header1, label: k, component: S({ size: "title1", extendedWidth: !0, children: k }) }, { blockType: g.header2, label: v, component: S({ size: "title3", weight: "heavy", children: v }) }, x],
                P = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                _ = ["delete", "delete-word", "delete-to-start-of-line"],
                $ = "increase-text-size",
                I = "decrease-text-size";
        },
        941978: (e, t, n) => {
            n.d(t, { C: () => r });
            class r {
                constructor() {
                    this._cache = {};
                }
                get(e) {
                    return this._cache[e];
                }
                check(e) {
                    const t = this._load(e);
                    return !(t instanceof Promise) && !!t;
                }
                reset() {
                    this._cache = {};
                }
                _loadCache(e, t) {
                    if (this._cache[e]) return this._cache[e];
                    const n = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = n), this._cache[e];
                }
                _load(e) {
                    return this._loadCache(
                        e,
                        () =>
                            new Promise((t) => {
                                window.fetch
                                    ? fetch(e)
                                          .then((e) => e.json())
                                          .then(t)
                                          .catch(() => t(!1))
                                    : t(!0);
                            }),
                    );
                }
            }
            new r();
        },
        491915: (e, t, n) => {
            n.d(t, { ZP: () => g });
            n(571372);
            var r = n(202784),
                o = n(325686),
                a = n(392237),
                l = n(674132),
                i = n.n(l),
                s = n(643442),
                c = n(466445),
                d = n(731708),
                u = n(154003),
                m = n(173739);
            const h = i().jcf3e7a2;
            function f({ animation: e, autoplay: t }) {
                const [n, a] = r.useState(t),
                    [l, i] = r.useState(0);
                return (
                    r.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && i(Math.round(e.currentTime));
                        });
                    }, [e]),
                    r.createElement(
                        o.Z,
                        { style: p.container },
                        r.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? r.createElement(s.default, null) : r.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        r.createElement(d.ZP, { style: p.frames }, `${l}/${e.totalFrames}`),
                        r.createElement(
                            o.Z,
                            { style: p.slider },
                            r.createElement(m.Z, {
                                "aria-label": h,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), a(!1);
                                },
                                value: l,
                            }),
                        ),
                    )
                );
            }
            const p = a.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function g(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: l, onError: i, withControls: s } = e,
                    c = r.useRef(void 0),
                    d = r.useRef({ animationLoaded: !1 }),
                    u = r.useRef(null),
                    [m, h] = r.useState(!1);
                return (
                    r.useEffect(() => {
                        function r(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: o } = d.current;
                        o ||
                            ((d.current.animationLoaded = !0),
                            b.load().then((o) => {
                                if (o && u.current) {
                                    const a = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        s = o.loadAnimation(a);
                                    (c.current = s),
                                        (s.onError = (e) => {
                                            const t = new y(e);
                                            "function" == typeof i && i(t), r(s, t);
                                        }),
                                        s.addEventListener("DOMLoaded", () => {
                                            h(!0), t && (s.play(), l && l());
                                        }),
                                        s.addEventListener("complete", () => {
                                            r(s);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, a, l, i, s]),
                    r.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    r.createElement(o.Z, null, r.createElement(o.Z, { style: [e.animationContainerStyle, E.centerAnimation] }, r.createElement("div", { ref: u, style: e.animationStyle }), s && c.current && m && r.createElement(f, { animation: c.current, autoplay: t })))
                );
            }
            g.Prepare = function () {
                return (
                    r.useEffect(() => {
                        b.load();
                    }, []),
                    null
                );
            };
            const b = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class y extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, y), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const E = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                o = n(674132),
                a = n.n(o),
                l = n(149170),
                i = n(40644);
            const s = a().gaeb997e;
            const c = function ({ activeColor: e, label: t = s, Icon: n = l.default, iconSize: o = "normal", isDisabled: a, onClick: c, preventFocusShift: d, renderActionMenu: u, style: m, testID: h, withDarkBackground: f = !1 }) {
                const p = r.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    g = r.useMemo(() => ({ label: t }), [t]);
                return r.createElement(i.ZP, { Icon: n, activeColor: e || (f ? "white" : void 0), "aria-label": t, backgroundColor: f ? "translucentBlack77" : "transparent", color: f ? "white" : "gray700", hoverLabel: g, iconSize: o, isDisabled: a, onPress: p, preventFocusShift: d, renderMenu: u, style: m, testID: h });
            };
        },
        989272: (e, t, n) => {
            n.d(t, { _i: () => o, fH: () => l, w3: () => a });
            n(136728);
            var r = n(392237);
            const o = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function a(e) {
                l(
                    (function () {
                        const e = r.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${o.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${o.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${o.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    i,
                );
                const t = s(e);
                return (
                    l(
                        (function (e) {
                            const t = s(e);
                            let n = e.placeholderTextColor;
                            const o = e.contentHorizontalPadding;
                            n || (n = r.default.theme.colors.gray700);
                            return `\n    .${t} .public-DraftEditorPlaceholder-root {\n      color: ${n};\n    }\n\n    .${t} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${n};\n    }\n\n    ${o ? `\n        .${t} .public-DraftEditor-content,\n        .${t} .public-DraftEditorPlaceholder-root {\n          padding-left: ${o};\n          padding-right: ${o};\n        }\n      ` : ""}\n  `;
                        })(e),
                        t,
                    ),
                    t
                );
            }
            function l(e, t) {
                if (
                    !(function (e) {
                        return !!document.getElementById(e);
                    })(t)
                ) {
                    const n = document.createElement("style");
                    n.setAttribute("id", t), (n.innerHTML = e);
                    const r = document.head;
                    r && r.insertBefore(n, r.firstChild);
                }
            }
            const i = "draftjs-styles";
            function s(e) {
                const t = (function (e) {
                    for (let t = 0; t < c.length; t++) {
                        if (c[t] === e) return String(t);
                    }
                    return c.push(e), String(c.length - 1);
                })(JSON.stringify(e));
                return `${i}_${t}`;
            }
            const c = [];
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => p });
            var r = n(202784),
                o = n(325686),
                a = n(827515),
                l = n(461756),
                i = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, a.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                m = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const h = { position: "absolute" },
                f = s.default.create({ root: { overflow: "hidden" } }),
                p = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [p, g] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        b = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (b.current = !0),
                                function () {
                                    b.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (b.current)
                                if (l.Z.reducedMotionEnabled) g((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== p.pendingText) {
                                    t === p.text || ((0, a.Z)(e.count) && p.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((n) => ({ ...n, pendingCount: e.count, pendingText: t })), p.animating || u(e.count, t, g));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            b.current &&
                                !1 === p.animating &&
                                (p.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && g((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : p.pendingText && u(p.pendingCount, p.pendingText, g));
                        }, [p.animating, p.oldText]),
                        r.useMemo(() => {
                            const e = m[p.transitionDirection],
                                t = p.oldText && !l.Z.reducedMotionEnabled,
                                a = !p.animating && p.oldText && !l.Z.reducedMotionEnabled,
                                s = { ...h, ...(p.animating ? e.post : e.active) },
                                c = { ...(a ? e.pre : e.active) };
                            return r.createElement(
                                o.Z,
                                { style: [f.root, n] },
                                t ? r.createElement("span", { style: s }, r.createElement(i.ZP, d, p.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(b.current, g),
                                        style: c,
                                    },
                                    r.createElement(i.ZP, d, p.text),
                                ),
                            );
                        }, [n, d, p, b, g])
                    );
                };
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => w });
            var r = n(202784),
                o = n(325686),
                a = n(461756),
                l = n(731708),
                i = n(58881),
                s = n(530732),
                c = n(224162),
                d = n(491915),
                u = n(392237),
                m = n(551611),
                h = n(674132),
                f = n.n(h),
                p = n(891198),
                g = n(537392),
                b = n(280278);
            const y = f().e8d93005,
                E = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                D = ({ color: e, count: t }) => {
                    const n = (0, p.wl)(t, !0);
                    return r.createElement(g.ZP, null, ({ containerWidth: o }) => {
                        return r.createElement(b.ZP, { color: e, count: t, size: "subtext2", style: [E.count, ((a = o), a < u.default.theme.breakpoints.small && E.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(o) || n.length >= 5 ? y(t) : n) : void 0);
                        var a;
                    });
                };
            class w extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: a, decoration: i } = this.props;
                            return r.createElement(c.ZP.Consumer, null, ({ direction: s }) => r.createElement(l.ZP, { color: e ? n : a, dir: s, style: [C.inner, e && "blue500" === n && C.blue500] }, r.createElement(o.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), i, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: o, iconSize: a, isActive: l, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                m = i.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                h = d && l && !e?.isHovered;
                            return r.createElement(s.Z, { hoverLabel: o, interactiveStyles: m, interactivityState: e, style: [u.default.absoluteFill, v[h ? "haloBackground" : n], !c && C.iconBackground, "small" === a && C.iconSmallBoundingBox, h && C.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: o, isFaded: l, onAnimationEnd: i, onAnimationStart: s, onError: c, showAnimation: h, transitionAnimationUrl: f } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && h) return r.createElement(d.ZP, { animation: f || m.Bf, animationContainerStyle: k[t], animationStyle: x, onAnimationEnd: i, onAnimationStart: s, onError: c });
                            {
                                const a = n && e ? e : this.props.Icon;
                                return r.createElement(a, { style: [k[t], !o && l && C.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? r.createElement(D, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: l, isDisabled: i, isPresentational: c, keyboardShortcut: m, link: h, preventFocusShift: f, renderMenu: p, renderWrapper: g = r.Fragment, style: b, testID: y } = this.props,
                        E = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return r.createElement(
                        o.Z,
                        { style: [C.root, b] },
                        r.createElement(
                            g,
                            null,
                            c
                                ? this._renderContent(l)
                                : r.createElement(s.Z, { "aria-haspopup": p ? "menu" : void 0, "aria-label": e, disabled: i, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: m, link: h, onClick: this._handlePress, preventFocusShift: f, renderMenu: p, style: [C.triggerAreaRoot, C.outlineNone], testID: y }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: r } = e,
                                          o = l || n || r || t;
                                      return this._renderContent(o, e);
                                  }),
                        ),
                        E ? r.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            w.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const k = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                v = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                C = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                S = "224.5%",
                x = { width: S, height: S };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => o, ZP: () => l });
            var r = n(941978);
            const o = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends r.C {
                check(e) {
                    return super.check(e ?? o);
                }
            }
            const l = new a();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-1f1c1973.84643f4a.js.map
