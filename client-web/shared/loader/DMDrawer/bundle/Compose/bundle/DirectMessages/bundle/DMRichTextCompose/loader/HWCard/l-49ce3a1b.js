"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-49ce3a1b"],
    {
        914354: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                a = o(202784),
                i = o(325686),
                r = o(392237),
                s = o(999066),
                l = o(50246);
            const d = r.default.create((e) => ({ stackContainer: { flexGrow: 1 } })),
                c = (e) => {
                    const { card: t, layoutData: o, playOverlaySize: r, renderVideoPlayer: c, shouldRenderVideo: u, withActionsDisabled: p, ...m } = e,
                        [f, h] = a.useState(0),
                        y = function (e) {
                            return function (t) {
                                const o = t.nativeEvent.layout.width;
                                h(o / e / 2);
                            };
                        },
                        g = a.useMemo(
                            () =>
                                o.slides.map((e, o) => {
                                    let n, a;
                                    for (const o of e) {
                                        const e = t.components_data[o];
                                        if ("media" === e.type) {
                                            a = e;
                                            break;
                                        }
                                    }
                                    return a && a.data.id && (n = t.media_entities[a.data.id]), { key: `${o}_${e.join()}`, componentNames: e, mediaEntity: n };
                                }),
                            [t, o],
                        );
                    if (1 === g.length) return a.createElement(l.Z, (0, n.Z)({}, m, { card: t, componentNames: o.slides[0], isFirst: !0, isLast: !0, renderVideoPlayer: c, shouldRenderSwipeableMedia: !1, shouldRenderVideo: u, withActionsDisabled: p }));
                    return a.createElement(s.ZP, {
                        fullHeightSlides: !0,
                        getClientEventData: (e) => ({ currentSlideIndex: e.currentIndex + 1, previousSlideIndex: e.previousIndex + 1 }),
                        getMediaEntityForSlide: (e) => g[e].mediaEntity,
                        getPromotedLogData: (e) => ({ ucEventData: { slide_index: e } }),
                        initialHeightOffset: 60,
                        items: g,
                        navButtonStyle: { top: `${f}px`, transform: "translateY(-50%)" },
                        navigationOffsetValue: f,
                        playOverlaySize: r,
                        renderSlide: ({ createBoundRenderVideoPlayer: e, currentSlide: o, forcedMediaAspectRatio: r, index: s, item: c, loadedSlide: f, playOverlaySize: h, position: g }) => {
                            const b = "first" === g,
                                E = c.mediaEntity,
                                v = b && E && ("photo" === E.type || "uc_video" === E.type);
                            let S = 0;
                            if (E && ("photo" === E.type || "uc_video" === E.type)) {
                                const { height: e, width: t } = E.original_info;
                                S = t / e;
                            }
                            return a.createElement(i.Z, { key: c.key, onLayout: v ? y(S) : void 0, style: d.stackContainer, testID: "LayoutCardCarousel-slide" }, a.createElement(l.Z, (0, n.Z)({}, m, { card: t, componentNames: c.componentNames, forcedMediaAspectRatio: r, isCurrentSlide: o === s, isFirst: b, isLast: "last" === g, renderVideoPlayer: c.mediaEntity && e && e(c.mediaEntity), shouldRenderSwipeableMedia: !1, shouldRenderVideo: u && f === s, withActionsDisabled: p })));
                        },
                        renderVideoPlayer: c,
                        shouldRenderAll: !0,
                    });
                };
        },
        168395: (e, t, o) => {
            o.d(t, { Z: () => R });
            o(136728);
            var n = o(202784),
                a = o(325686),
                i = o(111677),
                r = o.n(i),
                s = o(174326),
                l = o(879891),
                d = o(537392),
                c = o(588441),
                u = o(392237),
                p = o(836938),
                m = o(596036),
                f = o(542908),
                h = o(719282),
                y = o(447986),
                g = o(218440),
                b = o(278394);
            const E = 0,
                v = 80,
                S = 3.5,
                x = Object.freeze({ NOT_READY: "not_ready" });
            function R() {
                const { card: e, carouselIndex: t, onPromotedLogEvent: o, slideDetails: i } = n.useContext(m.Z),
                    { direction: u } = (0, l.Z)(),
                    R = n.useRef([]),
                    [_, C] = n.useState(t || E),
                    I = n.useRef(t || E),
                    [Z, P] = n.useState(x.NOT_READY);
                if (
                    (n.useEffect(() => {
                        e && p.v.storeCarouselIndex(e.id, _);
                    }, [e, _]),
                    !e)
                )
                    return null;
                const T = (function (e) {
                    const t = [],
                        o = e.destinations,
                        n = e.media_entities,
                        a = e.ucLayout,
                        i = e.components_data;
                    if (o && n && i && a?.data?.slides) {
                        for (const e of a.data.slides) {
                            const a = (0, b.p)("photo", e, i, n),
                                r = (0, b.p)("details", e, i, n),
                                s = { media: {}, destination: "", details: { destination: "", title: "", isRtl: !1, vanity: "" } };
                            if (!a) continue;
                            const l = i[a];
                            if (!l || "media" !== l.type) continue;
                            const d = l.data?.id;
                            if (!d) continue;
                            const c = n[d];
                            if (c?.media_url_https && "photo" === c.type && ((s.media = c), l.data.destination && (s.destination = l.data.destination), s.destination)) {
                                if (r) {
                                    const e = i[r];
                                    if ("details" !== e.type) continue;
                                    const t = e.data.destination || l.data.destination;
                                    if (!t) continue;
                                    const n = e?.data?.title?.content;
                                    if (null == n) continue;
                                    let a = e?.data?.title?.is_rtl;
                                    void 0 === a && (a = !1);
                                    const d = o[t];
                                    if (!d || "browser" !== d.type) continue;
                                    const c = d?.data?.url_data?.vanity;
                                    if (!c) continue;
                                    s.details = { destination: t, title: n, isRtl: a, vanity: c };
                                }
                                t.push(s);
                            }
                        }
                        return t.length ? t : void 0;
                    }
                })(e);
                if (!T?.length || T?.length < 2) return null;
                const k = T.slice(1),
                    D = (e) => () => {
                        i && (i.index = e + 1);
                    },
                    O = T[0];
                let L, M;
                O.details && (L = { content: O.details.title, is_rtl: O.details.isRtl }), O.details && (M = O.details.vanity);
                const V = O.details?.destination,
                    W = (e) => {
                        var t;
                        e !== x.NOT_READY && Z !== x.NOT_READY && ((t = { action: e }), o && o(t)), P(e);
                    },
                    B = ({ index: e, intersectionRatio: t }) => {
                        const o = R.current;
                        o[e] = { intersectionRatio: t };
                        const n = k.length - 1,
                            a = o[n];
                        if (a && 1 === a.intersectionRatio) C(n);
                        else
                            for (let e = 0; e < o.length; e++) {
                                if (1 === o[e].intersectionRatio) return void C(e);
                            }
                    },
                    A = ({ next: e, previous: t }) => {
                        let o;
                        (o = "rtl" === u ? (t > e ? f.YE.SWIPE_NEXT : f.YE.SWIPE_PREVIOUS) : t < e ? f.YE.SWIPE_NEXT : f.YE.SWIPE_PREVIOUS), W(o);
                    },
                    $ = r().c9bb65db,
                    z = $(M && L ? { slidesLength: T.length, heroVanityContent: M, heroTitleContent: L.content } : { slidesLength: T.length, heroVanityContent: "", heroTitleContent: "" });
                return n.createElement(
                    a.Z,
                    { "aria-label": z, role: "region" },
                    n.createElement(a.Z, { style: [w.hero, w.border], testID: "collection-hero-image" }, n.createElement(g.Z, { media: { aspect_ratio: 1, destination: O.destination, mediaEntity: O.media } })),
                    n.createElement(h.Z, { chromeless: !0, destination: V, style: w.details, testID: "collection-hero-details", title: L, vanity: M }),
                    n.createElement(
                        c.Z,
                        null,
                        n.createElement(d.ZP, null, ({ containerWidth: e }) =>
                            n.createElement(
                                s.Z,
                                { navButtonStyle: w.navButtonStyle, onScroll: A, onVisibleRangeChange: B, style: w.carouselWrapper, swipeablePaddingLeft: 80, swipeablePaddingRight: 20, updateObserverWithChildren: !0, visibleItemIndex: I.current },
                                ((e) => {
                                    const t = [];
                                    return (
                                        k.map((o, i) => {
                                            const r = i === k.length - 1,
                                                s = 0 === i;
                                            t.push(n.createElement(a.Z, { key: i }, n.createElement(a.Z, { key: i, style: [w.border, { width: `${e}px` }, !r && w.slideSpacing, r && w.lastItemOffset, s && w.firstItemOffset], testID: `collection-slide-view-${i}` }, n.createElement(y.Z, { destination: o.destination, mediaEntity: o.media, onClick: D(i), ratio: 1 }))));
                                        }),
                                        t
                                    );
                                })(
                                    (function (e) {
                                        const t = e / S;
                                        return Math.floor(Math.max(v, t));
                                    })(e),
                                ),
                            ),
                        ),
                    ),
                );
            }
            const _ = u.default.theme.spaces.space20,
                C = u.default.theme.spaces.space80,
                w = u.default.create((e) => ({ border: { borderStyle: "solid", borderWidth: e.borderWidths.small, borderColor: e.colors.gray100, borderRadius: e.borderRadii.large, overflow: "hidden" }, carouselWrapper: { marginEnd: `-${_}`, marginStart: `-${C}` }, details: { marginVertical: "10px" }, hero: { width: "100%" }, navButtonStyle: { marginEnd: _, marginStart: C }, lastItemOffset: { marginEnd: _ }, firstItemOffset: { marginStart: C }, slideSpacing: { marginEnd: e.spaces.space8 } }));
        },
        517779: (e, t, o) => {
            o.d(t, { ZP: () => $ });
            o(136728);
            var n = o(202784),
                a = o(325686),
                i = o(111677),
                r = o.n(i),
                s = o(992942),
                l = o(530732),
                d = o(392237),
                c = o(596036),
                u = o(542908),
                p = o(268181),
                m = o(310700),
                f = o(764503),
                h = o(461756),
                y = o(731708);
            const g = d.default.create((e) => ({ tooltipBubble: { backgroundColor: e.colors.blue500, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, borderRadius: e.borderRadii.medium }, tooltipTriangle: { width: 0, height: 0, position: "absolute", top: "-20%", start: "50%", marginStart: `-${e.spaces.space8}`, borderStyle: "solid", borderWidth: "7px", borderTopWidth: 0, borderColor: e.colors.transparent, borderBottomColor: e.colors.blue500 } })),
                b = ({ tooltipText: e }) => n.createElement(n.Fragment, null, n.createElement(a.Z, { key: `tooltip-${e}`, style: g.tooltipTriangle }), n.createElement(a.Z, { style: g.tooltipBubble }, n.createElement(y.ZP, { color: "white", size: "body", weight: "normal" }, e)));
            var E = o(270711);
            const v = d.default.create((e) => ({ rotateIconCircle: { width: e.spaces.space40, height: e.spaces.space40, borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.gray700, color: e.colors.white, display: "flex", alignItems: "center", justifyContent: "center" }, rotateIcon: { fontSize: e.spaces.space24 } })),
                S = () => n.createElement(a.Z, { style: v.rotateIconCircle }, n.createElement(E.default, { style: v.rotateIcon })),
                x = r().e1bddf52,
                R = "error",
                _ = "progress",
                C = "75deg",
                w = "105%",
                I = `0deg ${C} ${w}`,
                Z = `auto ${C} auto`,
                P = `calc(0deg - env(window-scroll-y) * 1700deg) ${C} ${w}`;
            function T(e, t, o) {
                o && o(t), e(!0);
            }
            const k = { width: "100%", height: "100%", minHeight: 200, position: "relative", flex: 1 },
                D = { height: "100%", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", position: "absolute", top: 0, start: 0, end: 0, bottom: 0 },
                O = d.default.create((e) => ({ error: { color: e.colors.white, cursor: "not-allowed", zIndex: 3, pointerEvents: "auto" }, errorIcon: { height: "30%" }, maxCenter: D, progressImage: { borderRadius: "50%", width: 132 - e.spacesPx.space12, height: 132 - e.spacesPx.space12, position: "relative" }, rotateIconPositioning: { position: "absolute", top: e.spaces.space16, end: e.spaces.space16, pointerEvents: "none" } })),
                L = ({ alt: e, autoRotate: t, autoRotateSpeed: i = 20, backgroundColor: r = "transparent", disableProgressIndicator: l, disableTooltip: c, disableRotateIcon: u, disableZoom: p, horizontalRotationOnly: y, modelUrl: g, onClick: E, onKeyDown: v, posterUrl: C, progressImageUrl: w, tooltipText: L = x, scrollRotationSync: M }) => {
                    const V = !!window.customElements.get("model-viewer"),
                        W = n.useRef(null),
                        [B, A] = n.useState(!1),
                        [$, z] = n.useState(0);
                    n.useEffect(() => {
                        if (!l) {
                            const e = W.current;
                            if (e) {
                                const t = (e) =>
                                    (function (e, t) {
                                        const o = e.detail.totalProgress || 0;
                                        t(o);
                                        const n = e.target;
                                        if (n instanceof HTMLElement && n.shadowRoot) {
                                            const e = n.shadowRoot.querySelector(".canvas");
                                            e && (e.style.filter = o < 1 ? "blur(4px)" : "");
                                        }
                                    })(e, z);
                                return e.addEventListener(_, t), () => e.removeEventListener(_, t);
                            }
                        }
                    });
                    const [N, Y] = n.useState(null),
                        U = () => Y(g);
                    n.useEffect(() => {
                        const e = W.current;
                        if (e) return e.addEventListener(R, U), () => e.removeEventListener(R, U);
                    }),
                        N && N !== g && Y(null);
                    const [H, F] = n.useState(V);
                    if (!H)
                        return (
                            o
                                .e("ondemand.ModelViewer")
                                .then(o.bind(o, 524462))
                                .then(() => {
                                    F(!0);
                                }),
                            null
                        );
                    const j = { "--poster-color": r, backgroundColor: r },
                        X = d.default.create(() => ({ background: j }));
                    let Q = !M || t || h.Z.reducedMotionEnabled ? I : P;
                    M && B && W?.current?.getCameraOrbit && (Q = W.current.getCameraOrbit().toString());
                    const G = !(!t || B || h.Z.reducedMotionEnabled) || void 0;
                    return n.createElement("model-viewer", { alt: e, "auto-rotate": G, "camera-controls": !0, "camera-orbit": Q, "disable-zoom": !!p || void 0, "interaction-prompt": c ? "none" : "auto", "interaction-prompt-style": "basic", "interaction-prompt-threshold": "0", "max-camera-orbit": y ? Z : null, "min-camera-orbit": y ? Z : null, onClick: (e) => T(A, e, E), onKeyDown: (e) => T(A, e, v), poster: C, ref: W, "rotation-per-second": `${i}deg`, src: g, style: { ...k, ...j } }, !l && $ < 1 ? n.createElement("div", { slot: "progress-bar", style: D }, n.createElement(a.Z, { style: O.maxCenter }, n.createElement(f.Z, { progress: $, size: 132, strokeWidth: "thick" })), w && n.createElement(a.Z, { style: O.maxCenter }, n.createElement(s.Z, { source: w, style: O.progressImage }))) : n.createElement("div", { hidden: !0, slot: "progress-bar" }), c ? n.createElement("div", { hidden: !0, slot: "interaction-prompt" }) : n.createElement("div", { slot: "interaction-prompt" }, n.createElement(b, { tooltipText: L })), !u && n.createElement(a.Z, { style: O.rotateIconPositioning }, n.createElement(S, null)), !!N && n.createElement(a.Z, { style: [O.maxCenter, O.error, X.background] }, n.createElement(m.default, { style: O.errorIcon })));
                };
            var M = o(278394);
            d.default.theme.colors.gray100;
            const V = "model3d",
                W = "image",
                B = r().a6ada13e;
            let A = !1;
            function $() {
                const { card: e, onPromotedLogEvent: t, scribeCardAction: o, slideDetails: i } = n.useContext(c.Z),
                    [r, m] = n.useState(0),
                    f = n.useRef(0);
                i && (i.index = r + 1);
                const h = (e) => o && o(e),
                    y = (e) => t && t(e);
                if (!e) return null;
                const g = (0, M.Q)(e),
                    b = g && g.length > 1;
                if (!g?.length) return null;
                const E = g[r];
                function v(e) {
                    const t = e.currentTarget,
                        o = [...t.parentElement.children].indexOf(t);
                    r !== o && (m(o), (f.current = r), i && (i.index = o + 1), h({ action: u.bQ.SELECTOR_TAPPED, componentType: W, carouselEventDetails: { currentSlideIndex: o + 1, previousSlideIndex: r + 1 } }), y({ action: u.YE.SWIPE_NEXT, componentType: W })), e.preventDefault();
                }
                const S = [];
                if (b)
                    for (const e of g) {
                        const t = r === g.indexOf(e);
                        S.push(n.createElement(l.Z, { "aria-selected": t, focusable: !0, key: e.modelUrl, onClick: v, role: "option", style: [z.selector, t ? z.currentSelector : null] }, n.createElement(s.Z, { alt: e.thumbAlt, source: e.thumbUrl, style: z.selectorImage })));
                    }
                return n.createElement(
                    a.Z,
                    { style: z.root },
                    n.createElement(
                        a.Z,
                        { style: z.model },
                        n.createElement(L, {
                            alt: E.modelAlt,
                            autoRotate: !0,
                            backgroundColor: d.default.theme.colors.gray100,
                            disableTooltip: A,
                            disableZoom: !0,
                            modelUrl: E.modelUrl,
                            onClick: function (e) {
                                h({ action: u.bQ.ROTATE_MODEL, componentType: V, carouselEventDetails: { currentSlideIndex: r + 1, previousSlideIndex: f.current + 1 } }), y({ action: u.YE.SWIPE_NEXT, componentType: V }), (A = !0), e.preventDefault();
                            },
                        }),
                    ),
                    b ? n.createElement(a.Z, { style: z.selectors }, S) : null,
                    n.createElement(p.Z, { buttonStyleType: "primaryFilled", buttons: E.buttons, disableIcon: !0, text: B }),
                );
            }
            const z = d.default.create((e) => ({ root: { width: "100%", height: "100%", minHeight: 500, paddingTop: e.spaces.space12, display: "flex", backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.large, overflow: "hidden" }, model: { flexGrow: 1, flexShrink: 1, flexBasis: "auto" }, selectors: { padding: e.spaces.space8, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: e.spaces.space16, overflowX: "auto" }, selector: { borderRadius: e.borderRadii.infinite, padding: e.spaces.space2, cursor: "pointer" }, currentSelector: { borderColor: e.colors.text, borderStyle: "solid", borderWidth: e.borderWidths.small }, selectorImage: { borderRadius: e.borderRadii.infinite, height: e.spaces.space48, width: e.spaces.space48, backgroundColor: e.colors.gray100, boxShadow: e.boxShadows.small, cursor: "pointer" }, buttons: { paddingTop: e.spaces.space4, paddingBottom: e.spaces.space12, paddingStart: e.spaces.space24, paddingEnd: e.spaces.space24 } }));
        },
        278394: (e, t, o) => {
            o.d(t, { Q: () => a, p: () => i });
            o(136728);
            const n = /glb/i;
            function a(e) {
                const t = [],
                    o = e.destinations,
                    a = e.media_entities,
                    r = e.ucLayout,
                    s = e.components_data;
                if (o && a && s && r?.data?.slides) {
                    for (const e of r.data.slides) {
                        const o = i("photo", e, s, a),
                            r = i("model3d", e, s, a),
                            l = i("button_group", e, s, a);
                        if (!o || !r || !l) continue;
                        const d = s[o];
                        if (!d || "media" !== d.type) continue;
                        const c = s[r];
                        if (!c || "media" !== c.type) continue;
                        const u = d?.data?.id,
                            p = c?.data?.id;
                        if (!u || !p) continue;
                        const m = a[u];
                        if (!m?.media_url_https || "photo" !== m.type) continue;
                        const f = a[p];
                        if ("model3d" !== f.type || !f?.model3d_info?.assets) continue;
                        const h = s[l];
                        if (!h || "button_group" !== h.type) continue;
                        const y = h?.data?.buttons;
                        if (!y) continue;
                        const g = f.model3d_info.assets.find((e) => n.test(e.content_type)),
                            b = g?.url || "";
                        b && t.push({ modelUrl: b, modelAlt: f.altText, thumbUrl: m.media_url_https, thumbAlt: m.altText, buttons: y });
                    }
                    return t.length ? t : void 0;
                }
            }
            function i(e, t, o, n) {
                for (const a of t) {
                    const t = o[a];
                    if (t) {
                        if (t.type === e) return a;
                        if ("media" === t.type) {
                            const o = t?.data?.id;
                            if (o) {
                                if (n[o].type === e) return a;
                            }
                        }
                    }
                }
            }
        },
        495108: (e, t, o) => {
            o.d(t, { Z: () => g });
            var n = o(202784),
                a = o(325686),
                i = o(392237),
                r = o(836938),
                s = o(111677),
                l = o.n(s),
                d = o(833458),
                c = o(731708);
            const u = l().e86732e4,
                p = l().f668e929,
                m = i.default.create((e) => ({ choice: { alignItems: "center", flexDirection: "row", minHeight: e.spaces.space32, justifyContent: "space-between" }, choicePercentageBar: { backgroundColor: e.colors.gray200, borderTopStartRadius: e.borderRadii.small, borderBottomStartRadius: e.borderRadii.small, position: "absolute", top: 0, start: 0, bottom: 0 }, choicePercentageBarRoundCorners: { borderRadius: e.borderRadii.small }, choicePercentageBarWinner: { backgroundColor: e.colors.lightPrimaryWithOpacity }, choiceLabel: { paddingVertical: 0, paddingHorizontal: e.spaces.space12, flexShrink: 1 }, choicePercentage: { paddingStart: e.spaces.space12 } })),
                f = (e) => {
                    const { isFinal: t, isSelected: o, isWinner: r, label: s, noVotes: l, percentageOfTotalVote: f } = e,
                        h = 100 === f,
                        y = r ? "bold" : void 0,
                        g = l ? "7px" : `${f}%`,
                        b = "light" === i.default.theme.paletteName && i.default.theme.highContrastEnabled,
                        E = f / 100;
                    return n.createElement(a.Z, { style: m.choice }, n.createElement(a.Z, { style: [m.choicePercentageBar, b && { backgroundColor: i.default.theme.colors.gray50 }, (t || h || l) && m.choicePercentageBarRoundCorners, r && m.choicePercentageBarWinner, { width: g }] }), n.createElement(a.Z, { style: m.choiceLabel }, n.createElement(c.ZP, { weight: y }, s, o ? " " : null, o ? n.createElement(d.default, { "aria-label": u }) : null)), n.createElement(a.Z, { style: m.choicePercentage }, n.createElement(c.ZP, { weight: y }, p(E))));
                };
            class h extends n.Component {
                render() {
                    const { choices: e, totalVotes: t, translations: o } = this.props,
                        i = Math.max(...e.map((e) => e.count));
                    return n.createElement(
                        a.Z,
                        { role: "list" },
                        e.map((e, r) => n.createElement(a.Z, { key: e.index, role: "listitem", style: 0 !== r && y.topMargin }, this._renderChoiceResult(e, t, i, o?.[r]))),
                    );
                }
                _renderChoiceResult(e, t, o, a) {
                    const { isFinal: i, selectedChoice: s } = this.props,
                        l = Math.round((e.count / t) * 1e3) / 10 || 0;
                    return n.createElement(f, { isFinal: i, isSelected: s === e.index, isWinner: i && e.count === o, label: r.v.renderTwemojiText(a || e.cta, !0), noVotes: 0 === e.count, percentageOfTotalVote: l });
                }
            }
            const y = i.default.create((e) => ({ topMargin: { marginTop: e.spaces.space4 } })),
                g = h;
        },
        90444: (e, t, o) => {
            o.d(t, { ZP: () => d });
            var n = o(202784),
                a = o(325686),
                i = o(392237),
                r = o(999066),
                s = o(447986);
            const l = (e) => (t) => {
                    e && t.preventDefault();
                },
                d = (e) => {
                    const { playOverlaySize: t, renderVideoPlayer: o, swipeableMedia: i, title: d, vanity: u } = e,
                        [p, m] = n.useState(0),
                        f = function (e) {
                            return function (t) {
                                const o = t.nativeEvent.layout.width;
                                m(o / e / 2);
                            };
                        },
                        h = n.useCallback((e) => i[e]?.media_entity, [i]),
                        y = i[0]?.media_entity;
                    return "photo" !== y.type && "uc_video" !== y.type && "animated_gif" !== y.type
                        ? null
                        : n.createElement(r.ZP, {
                              getClientEventData: (e) => ({ currentMediaIndex: e.currentIndex + 1, previousMediaIndex: e.previousIndex + 1 }),
                              getMediaEntityForSlide: h,
                              getPromotedLogData: (e) => ({ componentType: "swipeable_media", ucPromotedMetadata: { media_index: e } }),
                              items: i,
                              navButtonStyle: { top: `${p}px`, transform: "translateY(-50%)" },
                              playOverlaySize: t,
                              renderSlide: (...e) =>
                                  ((e, { createBoundRenderVideoPlayer: t, currentSlide: o, forcedMediaAspectRatio: i, index: r, item: d, loadedSlide: u, playOverlaySize: p, position: m, title: f, vanity: h }) => {
                                      let y = d.media_entity,
                                          g = !1;
                                      if ("uc_video" !== y.type && "photo" !== y.type && "animated_gif" !== y.type) return null;
                                      const b = d.destination,
                                          E = o === r;
                                      let v = !0;
                                      const { height: S, width: x } = y.original_info,
                                          R = x / S;
                                      if ("uc_video" === y.type || "animated_gif" === y.type) {
                                          const o = u === r;
                                          o || (v = !1);
                                          const i = t && t(d.media_entity);
                                          if (o && i) return n.createElement(a.Z, { "aria-hidden": !E, key: d.id, onLayout: e(R), style: [c.video, "first" === m && c.firstImage, "last" === m && c.lastImage], testID: "videoContainer" }, i());
                                          (g = !0), (y = { media_url_https: y.media_url_https, type: "photo", original_info: y.original_info });
                                      }
                                      const _ = f?.content ? { type: "label", text: f.content } : d.overlay;
                                      return n.createElement(a.Z, { key: d.id, onClick: l(g), onLayout: e(R), testID: "imageWrapper" }, n.createElement(s.Z, { "aria-hidden": !E, componentType: "swipeable_media", destination: v ? b : void 0, hideImageDataSaverOverlay: g, mediaEntity: y, overlay: _, playOverlaySize: p, ratio: i, style: [c.video, "first" === m && c.firstImage, "last" === m && c.lastImage] }));
                                  })(f, ...e),
                              renderVideoPlayer: o,
                              title: d,
                              vanity: u,
                          });
                },
                c = i.default.create((e) => ({ video: { overflow: "hidden", maxHeight: "100%" }, firstImage: { borderTopStartRadius: e.borderRadii.xLarge }, lastImage: { borderTopEndRadius: e.borderRadii.xLarge } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-49ce3a1b.d52666da.js.map
