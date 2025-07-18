"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be", "shared~bundle.ReportCenter~bundle.SafetyCenter-e16dbf02"],
    {
        495232: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(202784);
            const r = {
                getEducationType: (e, t) => {
                    switch (e) {
                        case "followers":
                            return t ? "conversationControlsFollowersCanEngage" : "conversationControlsFollowersCannotEngage";
                        case "community":
                            return t ? "conversationControlsCommunityCanEngage" : "conversationControlsCommunityCannotEngage";
                        case "by_invitation":
                            return t ? "conversationControlsByInvitationCanEngage" : "conversationControlsByInvitationCannotEngage";
                        case "subscribers":
                            return t ? "conversationControlsSubscribersCanEngage" : "conversationControlsSubscribersCannotEngage";
                        case "community_hidden_tweet":
                            return "communityHiddenTweetEducation";
                        case "community_tweet_member_removed":
                            return "communityRemovedMemberEducation";
                        case "verified":
                            return t ? "conversationControlsVerifiedCanEngage" : "conversationControlsVerifiedCannotEngage";
                        default:
                            return;
                    }
                },
            };
        },
        696591: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                o = n(325686),
                a = n(2138),
                i = n(731708),
                l = n(666305),
                s = n(392237);
            const c = r.memo(({ align: e = "center", equiTextTestID: t, ...n }) => {
                const s = r.useRef(null),
                    c = r.useCallback((e) => {
                        s.current = e;
                    }, []);
                return (
                    (function (e) {
                        r.useEffect(() => {
                            const t = e.current,
                                n = e.current?.parentElement?.parentElement;
                            if (!t || !n) return;
                            let r = 0,
                                o = 0;
                            function i() {
                                l.Z.unobserveAll(t),
                                    (function (e) {
                                        e.style.width = "";
                                        try {
                                            const { height: t } = e.getBoundingClientRect();
                                            let n = e.offsetWidth,
                                                r = n / 2;
                                            e.style.width = `${r}px`;
                                            const { height: o } = e.getBoundingClientRect();
                                            if (o === t) return void (e.style.width = "");
                                            for (let o = 0; o < 15; ++o) {
                                                const o = (n + r) / 2;
                                                e.style.width = `${o}px`;
                                                const { height: a } = e.getBoundingClientRect();
                                                if ((a === t ? (n = o) : (r = o), n - r < 1)) return void (e.style.width = `${Math.ceil(n) + 1}px`);
                                            }
                                            e.style.width = "";
                                        } catch {
                                            e.style.width = "";
                                        }
                                    })(t),
                                    u(t, () => {
                                        window.cancelAnimationFrame(r),
                                            (r = requestAnimationFrame(() => {
                                                s();
                                            }));
                                    });
                            }
                            const s = (0, a.Z)(i, 100);
                            return (
                                s(),
                                u(n, () => {
                                    window.cancelAnimationFrame(o),
                                        (o = requestAnimationFrame(() => {
                                            s();
                                        }));
                                }),
                                () => {
                                    l.Z.unobserveAll(t), l.Z.unobserveAll(n), window.cancelAnimationFrame(r), window.cancelAnimationFrame(o), s.cancel();
                                }
                            );
                        }, [e]);
                    })(s),
                    r.createElement(o.Z, { style: "center" === e ? d.centerElement : null, testID: t }, r.createElement(o.Z, { ref: c }, r.createElement(i.ZP, n)))
                );
            });
            const d = s.default.create((e) => ({ centerElement: { alignItems: "center" } }));
            function u(e, t) {
                let n = !1;
                l.Z.observe(e, () => {
                    if (n) return t();
                    n = !0;
                });
            }
        },
        254554: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(325686),
                a = n(731708),
                i = n(879891);
            const l = n(392237).default.create((e) => ({ root: { flexDirection: "row", backgroundColor: e.colors.navigationBackground, borderStyle: "solid", borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.large, borderColor: e.colors.gray50, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, justifyContent: "space-between" }, containerDown: { marginTop: e.spaces.space12 }, containerUp: { marginTop: e.spaces.space20 }, text: { flexShrink: 1, alignSelf: "center", alignItems: "flex-start" }, actionsContainer: { flexDirection: "row", alignItems: "center", marginStart: e.spaces.space12 }, arrowContainer: { position: "absolute", display: "flex", width: "100%", alignItems: "center" }, arrowDirectionUp: { top: `calc(-${e.spaces.space8} + ${e.spaces.space1})` }, arrowDirectionDown: { bottom: `calc(-${e.spaces.space8} + ${e.spaces.space1})` }, arrow: { borderStyle: "solid", borderTopWidth: 0, borderEndWidth: e.spaces.space1, borderBottomWidth: e.spaces.space1, borderStartWidth: 0, borderColor: e.colors.gray50, width: e.spaces.space12, height: e.spaces.space12, backgroundColor: e.colors.navigationBackground } })),
                s = ({ containerRef: e, primaryAction: t, secondaryAction: n, text: s }) => {
                    const [c, d] = r.useState(void 0),
                        { direction: u } = (0, i.Z)(),
                        m = "rtl" === u,
                        f = r.useRef(0),
                        p = r.useRef(0),
                        h = (() => {
                            if (e?.current && c) {
                                const { left: t, top: n, width: r } = e.current.getBoundingClientRect();
                                f.current = n;
                                const o = t + r / 2 - c;
                                return { start: m ? void 0 : o, end: m ? o : void 0 };
                            }
                        })(),
                        g = p.current < f.current,
                        b = g ? [l.arrowDirectionDown] : [l.arrowDirectionUp],
                        y = g ? (m ? { transform: [{ rotate: "-45deg" }] } : { transform: [{ rotate: "45deg" }] }) : m ? { transform: [{ rotate: "135deg" }] } : { transform: [{ rotate: "-135deg" }] },
                        w = g ? [l.containerDown] : [l.containerUp];
                    return r.createElement(
                        o.Z,
                        {
                            onLayout: (e) => {
                                const {
                                    nativeEvent: {
                                        layout: { left: t, top: n, width: r },
                                    },
                                } = e;
                                p.current = n;
                                d(t + r / 2);
                            },
                            role: "text",
                            style: [l.root, w],
                        },
                        e?.current ? r.createElement(o.Z, { style: [b, l.arrowContainer, h] }, r.createElement(o.Z, { style: [l.arrow, y] })) : null,
                        r.createElement(a.ZP, { style: l.text }, s),
                        r.createElement(o.Z, { style: l.actionsContainer }, t, n),
                    );
                };
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                o = n(325686),
                a = n(111677),
                i = n.n(a),
                l = n(815858),
                s = n(731708),
                c = n(642153),
                d = n(530732),
                u = n(392237);
            const m = i().a35a5b10,
                f = i().fc8cd112,
                p = (e) => r.createElement(s.ZP, null, e);
            class h extends r.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: a, userScreenName: i, withFacepile: u } = this.props,
                        f = this._renderMessage();
                    return r.createElement(l.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? r.createElement(d.Z, { "aria-label": m, interactiveStyles: null, link: i ? ((p = i), `/${p}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: l }) => r.createElement(o.Z, { style: g.content }, !e && u ? r.createElement(c.Z, { userAvatarUrls: t }) : null, r.createElement(s.ZP, { color: "gray700", size: "subtext2", style: [!e && g.message, (n || l) && !!i && g.underline, a] }, e && u ? r.createElement(c.Z, { style: g.inlineFacepile, userAvatarUrls: t }) : null, f))) : r.createElement(o.Z, { style: g.content }, r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, f)));
                    var p;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : f;
                }
                _renderOneUsername(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "c9e6167d" }, p(e[0]));
                }
                _renderTwoUsernames(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "ha91d1eb" }, p(e[0]), p(e[1]));
                }
                _renderThreeUsernames(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "f1069f9b" }, p(e[0]), p(e[1]), p(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return r.createElement(i().I18NFormatMessage, { $i18n: "e8404c1f" }, p(e[0]), p(e[1]), n);
                }
            }
            h.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const g = u.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        135904: (e, t, n) => {
            n.d(t, { c: () => a, n: () => o });
            var r = n(392237);
            const o = "longform-styles",
                a = `\n    .longform-header-one {\n        font-size: ${r.default.theme.fontSizes.title2};\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title1};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${r.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${r.default.theme.fontSizes.title3};\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title2};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${r.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};   \n        margin-bottom: ${r.default.theme.spaces.space12};\n        margin-left: calc(${r.default.theme.spaces.space28} + ${r.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${r.default.theme.spaces.space12} / 2);\n        margin-left: ${r.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${r.default.theme.spaces.space24} + ${r.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${r.default.theme.spaces.space2});\n        padding-left: calc(${r.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${r.default.theme.colors.gray900};\n        border-radius: ${r.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${r.default.theme.spaces.space28} + ${r.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, t, n) => {
            n.d(t, { Z: () => E });
            n(136728);
            var r = n(202784),
                o = n(301503),
                a = n(325686),
                i = n(595088),
                l = n(516951),
                s = n(731708),
                c = n(779802),
                d = n(537392),
                u = n(989272),
                m = n(925873),
                f = n(202253),
                p = n(786475),
                h = n(392237),
                g = n(135904);
            const b = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: r.createElement(s.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: r.createElement(s.ZP, null) } },
                y = (0, i.Z)(b).reduce((e, [t, n]) => e.set(t, n), o.DefaultDraftBlockRenderMap);
            let w = !1;
            const E = r.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: i, paragraphFontSizeOverride: s } = e;
                    r.useEffect(() => {
                        w || (u.fH(g.c, g.n), (w = !0));
                    }, []);
                    const h = [(0, f.ez)(i, s), f.aF, f.RU];
                    e.disable_entityLinkDecorator || h.push((0, f.NA)(i, s));
                    const b = m.Z.initEditorState(n, { decorators: h });
                    let E = l.Z;
                    return (
                        t &&
                            (E = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        r.createElement(d.ZP, null, ({ containerWidth: e }) => r.createElement(a.Z, { style: D.fontFamily }, r.createElement(o.Editor, { blockRenderMap: y, blockRendererFn: E, blockStyleFn: (0, c.su)(p.Z.isNarrowScreenWidth(e)), editorState: b, onChange: l.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                D = h.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            n.d(t, { $u: () => v, Ak: () => Z, KJ: () => E, LI: () => S, P7: () => g, PW: () => C, QF: () => b, Qm: () => w, Tr: () => x, b$: () => h, db: () => I, et: () => k, fR: () => p, iH: () => $, lD: () => y, su: () => D, u4: () => P, wX: () => T });
            var r = n(202784),
                o = n(111677),
                a = n.n(o),
                i = n(394123),
                l = n(856661),
                s = n(69893),
                c = n(474761),
                d = n(428259),
                u = n(89085),
                m = n(630715),
                f = n(731708);
            const p = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                h = (e) => [
                    { buttonTestId: "btn-bold", Icon: i.default, key: p.bold, onPress: e(p.bold) },
                    { buttonTestId: "btn-italic", Icon: l.default, key: p.italic, onPress: e(p.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: p.strikethrough, onPress: e(p.strikethrough) },
                ],
                g = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                b = (e) => [{ buttonTestId: "btn-blockquote", Icon: c.default, key: g.blockquote, onPress: e(g.blockquote) }],
                y = (e) => [
                    { buttonTestId: "btn-ul", Icon: d.default, key: g.bulleted, onPress: e(g.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: g.numbered, onPress: e(g.numbered) },
                ],
                w = "LINK",
                E = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: w, onPress: e }],
                D = (e, t) => (n) => {
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
                C = a().b92b6156,
                v = a().ec5ed598,
                S = ({ children: e, extendedWidth: t, size: n, weight: o }) => r.createElement(f.ZP, { extendedWidth: t, size: n, weight: o }, e),
                x = { blockType: g.paragraph, label: v, component: S({ size: "body", children: v }) },
                $ = [{ blockType: g.header1, label: k, component: S({ size: "title1", extendedWidth: !0, children: k }) }, { blockType: g.header2, label: C, component: S({ size: "title3", weight: "heavy", children: C }) }, x],
                T = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                Z = ["delete", "delete-word", "delete-to-start-of-line"],
                P = "increase-text-size",
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
                i = n(111677),
                l = n.n(i),
                s = n(643442),
                c = n(466445),
                d = n(731708),
                u = n(154003),
                m = n(173739);
            const f = l().jcf3e7a2;
            function p({ animation: e, autoplay: t }) {
                const [n, a] = r.useState(t),
                    [i, l] = r.useState(0);
                return (
                    r.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && l(Math.round(e.currentTime));
                        });
                    }, [e]),
                    r.createElement(
                        o.Z,
                        { style: h.container },
                        r.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? r.createElement(s.default, null) : r.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        r.createElement(d.ZP, { style: h.frames }, `${i}/${e.totalFrames}`),
                        r.createElement(
                            o.Z,
                            { style: h.slider },
                            r.createElement(m.Z, {
                                "aria-label": f,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), a(!1);
                                },
                                value: i,
                            }),
                        ),
                    )
                );
            }
            const h = a.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function g(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: i, onError: l, withControls: s } = e,
                    c = r.useRef(void 0),
                    d = r.useRef({ animationLoaded: !1 }),
                    u = r.useRef(null),
                    [m, f] = r.useState(!1);
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
                                            "function" == typeof l && l(t), r(s, t);
                                        }),
                                        s.addEventListener("DOMLoaded", () => {
                                            f(!0), t && (s.play(), i && i());
                                        }),
                                        s.addEventListener("complete", () => {
                                            r(s);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, a, i, l, s]),
                    r.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    r.createElement(o.Z, null, r.createElement(o.Z, { style: [e.animationContainerStyle, w.centerAnimation] }, r.createElement("div", { ref: u, style: e.animationStyle }), s && c.current && m && r.createElement(p, { animation: c.current, autoplay: t })))
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
            const w = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                o = n(111677),
                a = n.n(o),
                i = n(149170),
                l = n(40644);
            const s = a().gaeb997e;
            const c = function ({ activeColor: e, label: t = s, Icon: n = i.default, iconSize: o = "normal", isDisabled: a, onClick: c, preventFocusShift: d, renderActionMenu: u, style: m, testID: f, withDarkBackground: p = !1 }) {
                const h = r.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    g = r.useMemo(() => ({ label: t }), [t]);
                return r.createElement(l.ZP, { Icon: n, activeColor: e || (p ? "white" : void 0), "aria-label": t, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: g, iconSize: o, isDisabled: a, onPress: h, preventFocusShift: d, renderMenu: u, style: m, testID: f });
            };
        },
        459667: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                o = n(325686),
                a = n(731708),
                i = n(952428),
                l = n(336373),
                s = n(392237);
            const c = (e, t) => ({ items: [{ id: t, post_pivot_details: { destination_url: e } }] });
            function d({ destinationUrl: e, element: t, Icon: n, entityId: s, getScribeData: d = c, isForQuoteTweet: m, label: f }) {
                const p = l.Z.useAnalytics();
                r.useEffect(() => {
                    p.scribe({ element: t, action: "impression", data: d(e, s) });
                }, [p, s, t, d, e]);
                const h = r.useCallback(
                    (n) => {
                        p.scribe({ element: t, action: "click", data: d(e, s) });
                    },
                    [p, t, d, e, s],
                );
                return r.createElement(r.Fragment, null, r.createElement(i.Z, { link: e, onPress: h, style: [u.pivotContainer, m && u.pivotQuoteTweetContainer], testID: t, withInteractiveStyling: !0, withOutsetFocusRing: !0 }, r.createElement(o.Z, { style: [u.headerContainer, m && u.headerQuoteTweetContainer] }, r.createElement(n, { style: u.icon }), r.createElement(a.ZP, { size: "subtext1", style: u.headerAppText, weight: "bold" }, f))));
            }
            const u = s.default.create((e) => ({ pivotContainer: { borderColor: e.colors.nestedBorderColor, borderRadius: e.borderRadii.xLarge, borderWidth: e.borderWidths.small, marginVertical: e.spaces.space8, flex: 1 }, pivotQuoteTweetContainer: { borderWidth: "none", backgroundColor: e.colors.gray700, borderRadius: "none", borderTopWidth: e.borderWidths.none }, headerContainer: { borderRadius: e.borderRadii.xLarge, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, alignItems: "center", display: "flex", flexDirection: "row", height: "100%", backgroundColor: "darker" === e.paletteName ? e.colors.gray0 : e.colors.hoverBlack }, headerAppText: { alignItems: "center", display: "flex", paddingVertical: e.spaces.space2, width: "100%" }, headerQuoteTweetContainer: { backgroundColor: e.colors.transparent }, arrowIcon: { color: e.colors.text, flexShrink: 0, paddingStart: e.spaces.space8, marginTop: "0.25rem" }, icon: { color: e.colors.text, flexShrink: 0, marginTop: "0.1rem", height: "1.75em", marginEnd: e.spacesPx.space8 } }));
        },
        32471: (e, t, n) => {
            n.d(t, { Z: () => y });
            var r = n(202784),
                o = n(325686),
                a = n(530732),
                i = n(111677),
                l = n.n(i),
                s = n(731708),
                c = n(966582),
                d = n(392237);
            const u = l().d7e50a66,
                m = "INDIRECT",
                f = "NO_SPONSORSHIP",
                p = "ISSUE";
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderDisclaimerDetails = () => {
                            const { onPoliticalSponsorWebsiteClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n, sponsorshipCandidate: o, sponsorshipOrganization: a, sponsorshipOrganizationWebsite: i, sponsorshipType: c } = t.adMetadataContainer ?? {},
                                d = i && n !== p ? r.createElement(s.ZP, { link: i, onClick: e }) : r.createElement(s.ZP, { color: "gray700", size: "subtext2" });
                            if (!a) return null;
                            const u = r.createElement(l().I18NFormatMessage, { $i18n: "e1e348dd" }, r.cloneElement(d, null, l().hdd29d51({ sponsorshipOrganization: a }))),
                                h = r.createElement(l().I18NFormatMessage, { $i18n: "c7dea0d1" }, r.cloneElement(d, null, l().b97f7079({ sponsorshipOrganization: a }))),
                                g = o ? r.createElement(l().I18NFormatMessage, { $i18n: "b5c2371b", sponsorshipCandidate: o }, r.cloneElement(d, null, l().b02627a9({ sponsorshipOrganization: a }))) : null;
                            return r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, n === p ? u : c === f ? h : c === m ? g : u);
                        }),
                        (this._renderLearnMoreLink = () => {
                            const { onPromotedDisclaimerLearnMoreClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n } = t.adMetadataContainer ?? {},
                                o = n === p ? "issue_ad" : "political_ad";
                            return r.createElement(s.ZP, { link: "https://business.twitter.com/en/help/ads-policies/ads-content-policies/political-content/political-ads-disclosure.html", onClick: e?.(o), size: "subtext2", style: g.learnMore }, u);
                        });
                }
                render() {
                    const { promotedContent: e } = this.props;
                    if (!e.adMetadataContainer) return null;
                    const { disclaimerType: t } = e.adMetadataContainer,
                        n = c.Z.getDisclosureType(e);
                    return "POLITICAL" !== t && "ISSUE" !== t && "political" !== n && "issue" !== n ? null : r.createElement(r.Fragment, null, this._renderDisclaimerDetails(), this._renderLearnMoreLink());
                }
            }
            const g = d.default.create((e) => ({ learnMore: { alignSelf: "flex-start" } }));
            var b = n(378729);
            const y = function (e) {
                const { contentAuthorId: t, id: n, onPoliticalSponsorWebsiteClick: i, onPromotedDisclaimerLearnMoreClick: l, onPromotedIndicatorClick: s, promotedContent: d, promotedContentAdvertiser: u, screenName: m, style: f, testID: p, withoutDisclaimerDetails: g } = e;
                if (!c.Z.isPromoted(d)) return null;
                let y = null;
                return !g && d && (y = r.createElement(h, { contentAuthorId: t, onPoliticalSponsorWebsiteClick: i, onPromotedDisclaimerLearnMoreClick: l, promotedContent: d, screenName: m })), r.createElement(o.Z, { id: n, style: f, testID: p }, u && d ? r.createElement(a.Z, { interactiveStyles: null, link: { pathname: `https://twitter.com/${u.screen_name}`, state: { promotedTweetState: d } }, onPress: s }, r.createElement(b.Z, { contentAuthorId: t, promotedContent: d })) : !!d && r.createElement(b.Z, { contentAuthorId: t, promotedContent: d }), y);
            };
        },
        989272: (e, t, n) => {
            n.d(t, { _i: () => o, fH: () => i, w3: () => a });
            n(136728);
            var r = n(392237);
            const o = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function a(e) {
                i(
                    (function () {
                        const e = r.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${o.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${o.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${o.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    l,
                );
                const t = s(e);
                return (
                    i(
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
            function i(e, t) {
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
            const l = "draftjs-styles";
            function s(e) {
                const t = (function (e) {
                    for (let t = 0; t < c.length; t++) {
                        if (c[t] === e) return String(t);
                    }
                    return c.push(e), String(c.length - 1);
                })(JSON.stringify(e));
                return `${l}_${t}`;
            }
            const c = [];
        },
        471754: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(487606),
                a = n(235902),
                i = n(459667);
            const l = (e, t) => ({ items: [{ id: t, similar_posts_pivot_details: { destination_url: e } }] });
            function s({ destinationUrl: e, isForQuoteTweet: t, label: n, tweetId: s }) {
                return a.ZP.useProps().showSimilarPostsPivotEnabled() ? r.createElement(i.Z, { Icon: o.default, destinationUrl: e, element: "similar_posts_pivot", entityId: s, getScribeData: l, isForQuoteTweet: t, label: n }) : null;
            }
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var r = n(202784),
                o = n(325686),
                a = n(827515),
                i = n(461756),
                l = n(731708),
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
            const f = { position: "absolute" },
                p = s.default.create({ root: { overflow: "hidden" } }),
                h = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [h, g] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
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
                                if (i.Z.reducedMotionEnabled) g((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== h.pendingText) {
                                    t === h.text || ((0, a.Z)(e.count) && h.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((n) => ({ ...n, pendingCount: e.count, pendingText: t })), h.animating || u(e.count, t, g));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            b.current &&
                                !1 === h.animating &&
                                (h.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && g((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : h.pendingText && u(h.pendingCount, h.pendingText, g));
                        }, [h.animating, h.oldText]),
                        r.useMemo(() => {
                            const e = m[h.transitionDirection],
                                t = h.oldText && !i.Z.reducedMotionEnabled,
                                a = !h.animating && h.oldText && !i.Z.reducedMotionEnabled,
                                s = { ...f, ...(h.animating ? e.post : e.active) },
                                c = { ...(a ? e.pre : e.active) };
                            return r.createElement(
                                o.Z,
                                { style: [p.root, n] },
                                t ? r.createElement("span", { style: s }, r.createElement(l.ZP, d, h.oldText)) : null,
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
                                    r.createElement(l.ZP, d, h.text),
                                ),
                            );
                        }, [n, d, h, b, g])
                    );
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be.c790545a.js.map
