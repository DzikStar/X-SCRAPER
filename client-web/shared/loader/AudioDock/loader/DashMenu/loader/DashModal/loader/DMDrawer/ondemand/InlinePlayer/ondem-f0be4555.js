"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"],
    {
        819844: (e, t, n) => {
            n.d(t, { Z: () => z });
            var r = n(807896),
                a = n(202784),
                o = n(555874),
                i = n(325686),
                c = n(392237),
                l = n(731708),
                s = n(124964),
                u = n(794215),
                d = n(366635);
            function m(e) {
                const { isBlueVerified: t = !1, isVerified: n = !1, speaker: r, speakerAvatarSize: o = "small", speakerNameSize: c = "subtext2", speakerScreenNameSize: l = "subtext2", timestamp: s, verifiedType: u, withSpeakerAvatar: m = !0, withSpeakerScreenName: f = !0, withTimestamp: g = !1 } = e,
                    E = Date.now() - s;
                return a.createElement(i.Z, { style: p.root }, a.createElement(d.Z, { avatarSize: o, isBlueVerified: t, isVerified: n, name: r.name, nameSize: c, profileImageUrl: m ? r.profile_image_url_https : "", screenName: r.screen_name, screenNameSize: l, style: p.userName, verifiedType: u, withScreenName: f }), g ? a.createElement(h, { size: c, timeMs: E }) : null);
            }
            function f(e, t) {
                return e && t && e.id_str && t.id_str ? e.id_str === t.id_str : !!(e && t && e.screen_name && t.screen_name) && e.screen_name === t.screen_name;
            }
            function h({ size: e = "small", timeMs: t }) {
                return a.createElement(a.Fragment, null, a.createElement(s.Z, { size: e }), a.createElement(u.Z, { color: "gray700", humanReadable: !0, size: e, timeMs: t }));
            }
            const p = c.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 1, marginTop: "0.25em" }, userName: { marginBottom: e.spaces.space4, paddingEnd: e.spaces.space4 } }));
            function g(e) {
                const { caption: t, captionTextSize: n, withSpeaker: o = !0, ...c } = e,
                    { speaker: s } = t;
                return a.createElement(i.Z, { style: [E.root, !o && E.missingSpeakerSpacer] }, o ? a.createElement(m, (0, r.Z)({}, c, { speaker: s, timestamp: t.timestamp })) : null, a.createElement(l.ZP, { lang: t.lang, size: n, style: E.captionText }, t.text));
            }
            const E = c.default.create((e) => ({ root: { paddingBottom: "0.25em", flex: 1 }, missingSpeakerSpacer: { paddingTop: "0.1em" }, captionText: { lineHeight: "1.5em", paddingVertical: "0.1em", fontWeight: e.highContrastEnabled ? e.fontWeights.heavy : e.fontWeights.regular } })),
                b = (e) => ({ width: e, height: e });
            function w(e) {
                const { size: t } = e,
                    n = Math.floor(t / 4.5);
                return a.createElement(i.Z, { style: [C.root, v(t)] }, a.createElement(y, { width: n }));
            }
            function y({ width: e }) {
                return a.createElement(
                    a.Fragment,
                    null,
                    Array(3)
                        .fill(0)
                        .map((t, n) => a.createElement(i.Z, { key: n, style: [C.dot, x(n, e)] })),
                );
            }
            function v(e) {
                return { ...b(e) };
            }
            function x(e, t) {
                return { animationDelay: 0.5 * e + "s", borderRadius: "100%", ...b(t) };
            }
            const C = c.default.create((e) => ({ root: { alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "center" }, dot: { position: "relative", backgroundColor: e.colors.purple500, display: "inline-block", margin: "auto", pointerEvents: "none", willChange: "transform", animationKeyframes: [{ "0%": { backgroundColor: e.colors.purple500 }, "50%": { backgroundColor: e.colors.purple200 }, "100%": { backgroundColor: e.colors.purple200 } }], animationDirection: "alternate", animationDuration: "1s", animationIterationCount: "infinite", animationTimingFunction: "linear" } })),
                Z = 28,
                S = 28;
            function M(e) {
                const { captions: t, footerHeight: n = Z, headerHeight: c = S, scrollContainerStyle: l, unintelligible: s = !1, withFrequentSpeakerAnnouncement: u = !1, verifiedLookup: d = {}, ...m } = e,
                    h = a.useRef(null),
                    p = a.useRef(null),
                    E = a.useRef({ containerHeight: void 0, hasUserScrolledUp: !1 });
                function b() {
                    E.current?.hasUserScrolledUp || p.current?.scrollToEnd({ animated: !0 });
                }
                return (
                    a.useEffect(() => {
                        E.current.containerHeight = h?.current?.getBoundingClientRect().height;
                    }, []),
                    a.useEffect(() => {
                        let e = null;
                        return (
                            (function t() {
                                b(), (e = setTimeout(t, 1500));
                            })(),
                            function () {
                                clearTimeout(e);
                            }
                        );
                    }, []),
                    a.createElement(
                        i.Z,
                        { ref: h, style: P.root },
                        a.createElement(o.Z, {
                            ListFooterComponent: a.createElement(T, { footerHeight: n, unintelligible: s }),
                            ListHeaderComponent: a.createElement(k, { headerHeight: c }),
                            contentContainerStyle: { marginBottom: 0 },
                            data: t,
                            keyExtractor: (e) => e.sequenceId,
                            maintainVisibleContentPosition: { minIndexForVisible: 0 },
                            onEndReached: function () {
                                b();
                            },
                            onScroll: function ({ nativeEvent: { contentOffset: e, contentSize: t, layoutMeasurement: r } }) {
                                const a = 2 * (E.current.containerHeight || 0) + n,
                                    o = t.height - r.height - e.y - a > 0;
                                E.current.hasUserScrolledUp = o;
                            },
                            ref: p,
                            renderItem: function ({ index: e, item: n }) {
                                let o = !0;
                                u || (o = !f(n.speaker, t[e - 1]?.speaker));
                                const i = n.speaker.screen_name,
                                    { isBlueVerified: c, isVerified: l, verifiedType: s } = d[i] || {};
                                return a.createElement(g, (0, r.Z)({}, m, { caption: n, isBlueVerified: c, isVerified: l, key: n.sequenceId, verifiedType: s, withSpeaker: o }));
                            },
                            role: "listbox",
                            scrollEventThrottle: 100,
                            style: [P.captionsContainer, l],
                        }),
                    )
                );
            }
            function k(e) {
                const { headerHeight: t } = e;
                return a.createElement(i.Z, { style: { height: t } });
            }
            function T(e) {
                const { footerHeight: t, unintelligible: n } = e;
                return a.createElement(a.Fragment, null, n ? a.createElement(w, { size: 20 }) : null, a.createElement(i.Z, { style: { height: t } }));
            }
            const P = c.default.create((e) => ({ root: { height: "100%", width: "100%", flex: 1 }, captionsContainer: { maxHeight: "100%", height: "100%", scrollbarWidth: "none" } }));
            (M.Caption = g), (M.areSpeakersIdentical = f);
            const z = M;
        },
        287826: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(807896),
                a = (n(571372), n(202784)),
                o = n(233184),
                i = n(509715),
                c = n(103165);
            const l = function (e) {
                const { audioSpaceId: t, clipMetadata: n, ...l } = e,
                    s = (function (e) {
                        if (!e) return;
                        let t;
                        try {
                            t = JSON.parse(e);
                        } catch (e) {
                            o.Z.report(new Error("[SpaceCard] could not parse clip metadata"));
                        }
                        return t;
                    })(n);
                return t && s ? a.createElement(i.Z, (0, r.Z)({ audioSpaceId: t, clipMetadata: s }, l)) : t ? a.createElement(c.Z, (0, r.Z)({ audioSpaceId: t }, l)) : null;
            };
        },
        868871: (e, t, n) => {
            n.d(t, { Z: () => ge });
            var r = n(202784),
                a = n(325686),
                o = n(530732),
                i = n(186061),
                c = n(392237),
                l = n(807896),
                s = n(823161),
                u = n(366635),
                d = n(601413),
                m = (n(571372), n(220760)),
                f = n(769471);
            const h = r.createContext(new Error("[SpaceClip] Context is not initialized"));
            function p() {
                return r.useContext(h);
            }
            function g({ children: e, ...t }) {
                const [n] = r.useState(() => (0, m.E)(t));
                return (
                    r.useEffect(() => {
                        n.setState((e) => (0, f.Z)(e, t));
                    }, [t, n]),
                    r.createElement(h.Provider, { value: n }, e)
                );
            }
            var E = n(744610),
                b = n(731708);
            function w(e) {
                const t = r.useRef(new E.Z.Value(0)).current,
                    n = r.useRef([0, 1]).current,
                    a = { opacity: { inputRange: n, outputRange: ["60%", "100%"] } },
                    o = { entry: E.Z.spring(t, { toValue: n[1], useNativeDriver: !1 }) };
                return (
                    r.useEffect(() => {
                        t.setValue(n[0]), o.entry.start();
                    }, [e.caption]),
                    r.createElement(E.Z.View, { style: [y.container, { transform: [{ translate3d: "0, 0, 0" }], opacity: t.interpolate(a.opacity) }] }, r.createElement(b.ZP, { color: "whiteOnColor", numberOfLines: e.numberOfLines, size: e.size, weight: e.weight }, e.caption))
                );
            }
            const y = c.default.create((e) => ({ container: { width: "100%", height: "100%", minHeight: "100%" } }));
            function v(e) {
                return e.split(x);
            }
            const x = /\s/,
                C = { size: "title2", weight: "heavy", numberOfLines: 3 };
            function Z(e) {
                let t = T;
                return (
                    e.speed && (t = Math.min(Math.max(e.speed, P), z)),
                    r.createElement(
                        E.Z.View,
                        { style: k.container },
                        r.createElement(
                            b.ZP,
                            { color: "whiteOnColor", key: e.caption, numberOfLines: e.numberOfLines, size: e.size, weight: e.weight },
                            v(e.caption).map((e, n, a) => r.createElement(S, { delay: t, excludeWhitespace: n === a.length - 1, index: n, key: n, word: e })),
                        ),
                    )
                );
            }
            function S(e) {
                const t = r.useRef(new E.Z.Value(0)).current,
                    n = r.useRef([0, 1]).current,
                    a = { opacity: { inputRange: n, outputRange: ["50%", "100%"] } },
                    o = E.Z.sequence([E.Z.delay(e.delay * e.index), E.Z.spring(t, { toValue: n[1], useNativeDriver: !1 })]);
                return (
                    r.useEffect(() => {
                        o.start();
                    }, []),
                    r.createElement(r.Fragment, null, r.createElement(E.Z.Text, { style: [k.word, { transform: [{ translate3d: "0, 0, 0" }], opacity: t.interpolate(a.opacity) }] }, e.word), e.excludeWhitespace ? null : r.createElement(M, null))
                );
            }
            function M() {
                return r.createElement(r.Fragment, null, " ", r.createElement("wbr", null));
            }
            const k = c.default.create((e) => ({ container: { width: "100%", height: "100%", minHeight: "100%" }, word: { whiteSpace: "pre" } })),
                T = 170,
                P = T - 50,
                z = T + 50;
            var L = n(718480),
                D = (n(136728), n(928316));
            function R(e) {
                return new Promise((t) => {
                    (function () {
                        if (R.MEASUREMENT_ELEMENT) return Promise.resolve(R.MEASUREMENT_ELEMENT);
                        return new Promise((e) => {
                            const t = document.createElement("div");
                            (t.style.position = "fixed"),
                                (t.style.pointerEvents = "none"),
                                (t.style.opacity = "0"),
                                D.render(r.createElement(b.ZP, C), t, () => {
                                    document.body.appendChild(t);
                                    const n = t.querySelector("div");
                                    n && (R.MEASUREMENT_ELEMENT = n), e(n);
                                });
                        });
                    })().then((n) => {
                        if (!n) return t([e.text]);
                        (n.innerText = e.text), (n.style.width = `${e.width}px`), (n.style.height = `${e.height}px`);
                        const r = () => {
                            const e = n.scrollWidth > n.offsetWidth,
                                t = n.scrollHeight > n.offsetHeight + W;
                            return e || t;
                        };
                        let a;
                        if (r()) {
                            const t = v(e.text),
                                o = [];
                            n.innerText = "";
                            let i = [];
                            for (const e of t) (n.innerText = `${n.innerText} ${e}`.trim()), r() && (i.length && o.push(i), (n.innerText = e), (i = [])), i.push(e);
                            i.length && o.push(i), (a = o.map((e) => e.join(" ")));
                        } else a = [e.text];
                        return t(a);
                    });
                });
            }
            R.MEASUREMENT_ELEMENT = void 0;
            const W = 1;
            function B(e, t, n, a) {
                const [o, i] = r.useState([]);
                return (
                    r.useEffect(() => {
                        n &&
                            a &&
                            R({ text: e, width: n, height: a }).then((e) => {
                                i(
                                    (function (e, t) {
                                        const n = e.map((e) => (0, L.Z)(e).weightedLength),
                                            r = n.reduce((e, t) => e + t, 0);
                                        return e.map((e, a) => {
                                            const o = n[a];
                                            return { text: e, duration: t * (o === r ? 1 : o / r) };
                                        });
                                    })(e, t),
                                );
                            });
                    }, [n, a, e, t]),
                    o
                );
            }
            function I(e) {
                let t;
                return e.duration && e.text.length && (t = e.duration / v(e.text).length), { ...e, fadeInWordSpeed: t };
            }
            function _() {
                const e = p().useSlice((e) => e.caption);
                return null === e ? r.createElement(H, null) : void 0 === e ? r.createElement(a.Z, { style: N.captionContainer }) : r.createElement(A, { caption: e });
            }
            function A(e) {
                const t = p(),
                    n = t.useSlice((e) => !e.isPlaying),
                    o = t.useSlice((e) => e.fadeInWords ?? !0),
                    { durationMs: i, text: c } = e.caption,
                    [s, u] = r.useState({ height: 0, width: 0 });
                const d = (function (e) {
                    const { durationMs: t, height: n, isPaused: a, text: o, width: i } = e,
                        c = B(o, t, i, n),
                        [l, s] = r.useState(void 0);
                    return (
                        r.useEffect(() => {
                            const e = () => {
                                s({ frame: I(c[0]), index: 0 });
                            };
                            if (l || !c.length) {
                                if (l && !a) {
                                    const { frame: t, index: n } = l,
                                        r = c[n];
                                    if (!r || r.text !== t.text || r.duration !== t.duration) return void e();
                                    if (t.duration) {
                                        const e = setTimeout(function () {
                                            let e = l.index + 1;
                                            l.index === c.length - 1 && (e = 0);
                                            const t = I(c[e]);
                                            s({ index: e, frame: t });
                                        }, t.duration);
                                        return () => clearTimeout(e);
                                    }
                                }
                            } else e();
                        }, [l, c, a]),
                        l?.frame || { text: "", duration: 0, fadeInWordSpeed: void 0 }
                    );
                })({ text: c, durationMs: i, width: s.width, height: s.height, isPaused: n });
                return r.createElement(
                    a.Z,
                    {
                        onLayout: function ({ nativeEvent: e }) {
                            const { height: t, width: n } = e.layout;
                            u({ height: t, width: n });
                        },
                        style: N.captionContainer,
                    },
                    o ? r.createElement(Z, (0, l.Z)({ caption: d.text, speed: d.fadeInWordSpeed }, C)) : r.createElement(w, (0, l.Z)({ caption: d.text }, C)),
                );
            }
            function H() {
                const e = p().useSlice((e) => e.speaker);
                return r.createElement(a.Z, { style: N.captionContainer }, r.createElement(a.Z, { style: N.unavailableContainer }, r.createElement(s.default, { borderColor: "white", borderWidth: "medium", size: "jumbo", uri: e.avatar_url }), r.createElement(O, { space: "space8" }), r.createElement(a.Z, { style: N.unavailableNameContainer }, r.createElement(u.Z, { color: "white", isBlueVerified: e.is_blue_verified, isVerified: e.is_verified, name: e.display_name, nameSize: "subtext1", style: N.unavailableUserName, weight: "bold" }), r.createElement(d.Z, { color: "white", screenName: e.twitter_screen_name || "", size: "subtext1", style: N.unavailableScreenName }))));
            }
            function O(e) {
                return r.createElement(a.Z, { style: { marginVertical: c.default.theme.spaces[e.space] } });
            }
            const N = c.default.create((e) => ({ captionContainer: { marginTop: e.spaces.space12, marginBottom: e.spaces.space20, height: e.lineHeightsPx[C.size] * C.numberOfLines }, spacer: { margin: e.spaces.space8 }, unavailableContainer: { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, unavailableNameContainer: { justifyContent: "center" }, unavailableScreenName: { opacity: 0.7, textAlign: "center" }, unavailableUserName: { textAlign: "center" } }));
            var F = n(111677),
                V = n.n(F),
                j = n(498844),
                U = n(83515),
                $ = n(926628),
                q = n(149170),
                Y = n(811176),
                J = n(154003);
            function G() {
                return r.createElement(a.Z, { style: Q.header }, r.createElement(G.ActiveSpeakerOrCaptionsIcon, null), r.createElement(a.Z, { style: Q.headerControls }, r.createElement(G.MuteToggleButton, null), r.createElement(G.MoreMenu, null)));
            }
            (G.ActiveSpeakerOrCaptionsIcon = function () {
                return p().useSlice((e) => null === e.caption) ? r.createElement(j.default, { style: Q.captionsIcon }) : r.createElement(G.ActiveSpeaker, null);
            }),
                (G.ActiveSpeaker = function () {
                    const e = p().useSlice((e) => e.speaker);
                    return r.createElement(u.Z, { color: "white", isBlueVerified: e.is_blue_verified, isVerified: e.is_verified, profileImageUrl: e.avatar_url, screenName: e.twitter_screen_name, screenNameSize: "subtext2", weight: "bold" });
                }),
                (G.MuteToggleButton = function () {
                    const e = p(),
                        t = e.useSlice((e) => e.isMuted),
                        n = e.getState().onMuteToggle;
                    return r.createElement(J.ZP, { "aria-label": t ? K.unmute : K.mute, backgroundColor: "transparent", borderColor: "transparent", color: "whiteOnColor", icon: t ? r.createElement(U.default, null) : r.createElement($.default, null), onClick: n, size: "small" });
                }),
                (G.MoreMenu = function () {
                    const e = p().useSlice((e) => e.menuItems),
                        [t, n] = r.useState(!1);
                    if (!e || e.length < 1) return null;
                    const a = t ? r.createElement(Y.Z, { isFixed: !0, items: e, onCloseRequested: () => n(!1), shouldCloseOnClick: !0 }) : null;
                    return r.createElement(r.Fragment, null, r.createElement(J.ZP, { "aria-label": K.more, backgroundColor: "transparent", borderColor: "transparent", color: "whiteOnColor", hoverLabel: { label: K.more }, icon: r.createElement(q.default, null), onPress: () => n(!0), size: "small" }), a);
                });
            const K = { unmute: V().b8b6344a, mute: V().ec8ab8b4, more: V().gaeb997e },
                Q = c.default.create((e) => ({ header: { width: "100%", alignItems: "center", justifyContent: "space-between", flexFlow: "row nowrap" }, headerControls: { alignItems: "center", flexFlow: "row nowrap" }, captionsIcon: { color: e.colors.whiteOnColor } }));
            var X = n(483054),
                ee = n(295559),
                te = n(668260);
            function ne(e) {
                const t = (0, ee.rb)((0, X._j)({ coefficient: 0.2, color: (0, ee.xO)(e.backgroundColor) }));
                return r.createElement(a.Z, { style: [ae.previewContainer, { backgroundColor: t }] }, r.createElement(b.ZP, { color: "whiteOnColor", numberOfLines: 2, size: "body", weight: "bold" }, e.title), r.createElement(re, e));
            }
            function re(e) {
                const t = e.state === te.default.StateEnum.ended,
                    n = e.state === te.default.StateEnum.live,
                    a = e.state === te.default.StateEnum.replay;
                if (!t && !n && !a) return null;
                let o,
                    i = "onMediaLightFilled";
                return n ? (e.isJoined ? ((o = oe.joined), (i = "onMediaOutlined")) : (o = oe.join)) : t ? (o = oe.view) : a && (e.replayIsPlaying ? ((o = oe.pause), (i = "onMediaOutlined")) : (o = oe.play)), r.createElement(J.ZP, { onPress: e.onButtonClick, style: ae.previewButton, type: i }, o);
            }
            ne.WithContext = function ({ backgroundColor: e }) {
                const t = p(),
                    n = t.useSlice((e) => e.title),
                    a = t.useSlice((e) => e.state),
                    o = t.useSlice((e) => e.isJoined),
                    i = t.useSlice((e) => e.replayIsPlaying),
                    c = t.getState().onButtonClick;
                return r.createElement(ne, { backgroundColor: e, isJoined: o, onButtonClick: c, replayIsPlaying: i, state: a, title: n });
            };
            const ae = c.default.create((e) => ({ previewContainer: { alignItems: "center", flexFlow: "row nowrap", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, borderRadius: e.borderRadii.xLarge, boxShadow: "0px 2px 13px 0px #0000001A", borderColor: e.colors.transparent, justifyContent: "space-between" }, previewButton: { marginStart: e.spaces.space8 } })),
                oe = { join: V().f8b21226, joined: V().b3d828ee, play: V().f17dfdb6, pause: V().fb236728, view: V().b05a39b2 };
            var ie = n(794215),
                ce = n(166502),
                le = n(962487);
            function se(e) {
                let t = [];
                if (e.withFeatheredWaveform) t = me(new Array(e.barCount).fill(e.audioLevel), e.audioLevel);
                else {
                    const n = Math.max(0.8 * Math.random(), 0.35),
                        r = Math.max(Math.floor(n * e.barCount), 3);
                    (0, ce.Z)(
                        new Array(e.barCount).fill(0).map(() => Math.random() * e.audioLevel),
                        r,
                    ).forEach((e) => {
                        t.push(...me(e));
                    });
                }
                const n = (function (e) {
                    const t = 0.15 / (e.length - 1),
                        n = 1 - (e.length - 1) * t,
                        r = n / e.length;
                    return { barFactors: e, barWidthRatio: r, gapWidthRatio: t };
                })(t);
                return r.createElement(le.Z, (0, l.Z)({ audioLevel: e.audioLevel, color: c.default.theme.colors.whiteOnColor, transformBarFactor: fe, withPersistZeroLevel: !0 }, n));
            }
            function ue({ barCount: e }) {
                const t = p(),
                    n = t.useSlice((e) => e.audioLevel),
                    a = t.useSlice((e) => e.withFeatheredWaveform);
                return r.createElement(se, { audioLevel: n, barCount: e, withFeatheredWaveform: a });
            }
            const de = r.memo(ue);
            function me(e, t) {
                const n = t || Math.max(...e);
                return e.length % 2 == 0
                    ? (function (e, t) {
                          const n = e.length / 2,
                              r = Math.floor(n),
                              a = Math.ceil(n);
                          return (
                              e.forEach((n, o) => {
                                  if (o < r) {
                                      const n = t / r;
                                      e[o] = (o + 1) * n;
                                  } else if (o > a) {
                                      const n = t / a;
                                      e[o] = t - (o - a) * n;
                                  } else e[o] = t;
                              }),
                              e
                          );
                      })(e, n)
                    : (function (e, t) {
                          const n = Math.floor(e.length / 2),
                              r = t / n;
                          return (
                              e.forEach((a, o) => {
                                  o < n ? (e[o] = o * r) : o > n ? (e[o] = t - (o - n) * r) : o === n && (e[o] = t);
                              }),
                              e
                          );
                      })(e, n);
            }
            se.WithContext = de;
            const fe = (e) => Math.random() * e;
            function he({ barCount: e }) {
                return r.createElement(a.Z, { style: pe.waveformGroupContainer }, r.createElement(a.Z, { style: pe.waveformContainer }, r.createElement(se.WithContext, { barCount: e })), r.createElement(a.Z, { style: pe.durationContainer }, r.createElement(he.Time, null)));
            }
            he.Time = function () {
                const e = p().useSlice((e) => e.timeMs);
                return r.createElement(ie.Z, { color: "whiteOnColor", timeMs: e });
            };
            const pe = c.default.create((e) => ({ durationContainer: { alignSelf: "center", marginStart: e.spaces.space4 }, waveformGroupContainer: { width: "100%", flexFlow: "row nowrap", height: e.spaces.space36, marginBottom: e.spaces.space28 }, waveformContainer: { flexShrink: 1, flexGrow: 1 } }));
            function ge(e) {
                return r.createElement(g, e, r.createElement(Ee, null));
            }
            const Ee = r.memo(function () {
                    const e = p(),
                        [t, n] = r.useState(we.largeWidthBreakpoint),
                        c = t < we.largeWidthBreakpoint,
                        l = t < we.mediumWidthBreakpoint,
                        s = t < we.dmWidthBreakpoint,
                        u = e.useSlice((e) => e.onClick);
                    let d = e.useSlice((e) => e.barCount);
                    d || (d = s ? ye.small : l ? ye.narrow : c ? ye.medium : ye.large);
                    const m = e.getState(),
                        f = (0, i.dF)(m),
                        h = (0, i.TZ)(m),
                        g = [be.container, h],
                        E = [be.content, { backgroundColor: f }];
                    return r.createElement(
                        o.Z,
                        {
                            onClick: u,
                            onLayout: function ({ nativeEvent: e }) {
                                const { width: t } = e.layout;
                                n(t);
                            },
                            style: g,
                        },
                        r.createElement(a.Z, { style: E }, r.createElement(G, null), r.createElement(_, null), r.createElement(he, { barCount: d }), r.createElement(ne.WithContext, { backgroundColor: f })),
                    );
                }),
                be = c.default.create((e) => ({ container: { overflow: "hidden" }, content: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } })),
                we = { largeWidthBreakpoint: 480, mediumWidthBreakpoint: 343, dmWidthBreakpoint: 270 },
                ye = { small: 80, narrow: 100, medium: 140, large: 170 };
        },
        752905: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(202784),
                a = n(325686),
                o = n(516951),
                i = n(392237),
                c = n(868871);
            const l = { text: "", durationMs: 0 },
                s = {};
            function u() {
                return r.createElement(a.Z, { role: "presentation", style: d.placeholderContainer }, r.createElement(c.Z, { audioLevel: 0, caption: l, isMuted: !0, isPlaying: !0, onMuteToggle: o.Z, speaker: s, state: "ended", timeMs: 0, title: "" }));
            }
            const d = i.default.create((e) => ({ placeholderContainer: { opacity: 0.2, pointerEvents: "none" } }));
        },
        279046: (e, t, n) => {
            n.d(t, { Z: () => z });
            var r = n(807896),
                a = n(202784),
                o = n(325686),
                i = n(111677),
                c = n.n(i),
                l = n(530732),
                s = n(522171),
                u = n(365023),
                d = n(292627),
                m = n(392237),
                f = n(891198);
            const h = { truncate0: c().g08cbabb };
            function p(e) {
                if (e < 1e3) return String(e);
                return 2 === Math.floor(Math.log10(e)) % 3 ? h.truncate0(e) : f.ZP.getTruncatedCount(e, !0);
            }
            var g = n(731708);
            function E(e) {
                const { count: t, labelType: n } = e,
                    r = a.useMemo(() => E.generateText({ count: t, labelType: n }), [t, n]);
                return a.createElement(g.ZP, { numberOfLines: 1, style: w.tabularNums }, r);
            }
            E.generateText = function (e) {
                const t = p(Math.max(0, e.count));
                switch (e.labelType) {
                    case "otherListeners":
                        return b.otherListeners({ count: t });
                    case "plusCount":
                        return b.plusCount({ count: t });
                    case "plusOthers":
                        return b.plusOthers({ count: t });
                    case "tunedIn":
                        return b.tunedIn({ count: t });
                    default:
                        return b.others({ count: t });
                }
            };
            const b = { others: c().gfe2830f, otherListeners: c().dbeae6cf, plusCount: c().d2543d97, plusOthers: c().dc718e53, tunedIn: c().d6f2056f },
                w = m.default.create((e) => ({ tabularNums: { fontVariant: "tabular-nums" } }));
            var y = n(837020),
                v = n(154003),
                x = n(124964),
                C = n(181054),
                Z = n(384153);
            function S(e) {
                return Z.Z.selectiveClickHandler((t) => {
                    "function" == typeof e && e();
                });
            }
            function M(e) {
                const t = S(e.onRequestClose);
                return a.createElement(o.Z, { style: P.container }, a.createElement(o.Z, { style: P.gradientBar }, a.createElement(C.Z.Animated, null)), a.createElement(o.Z, { style: P.content }, a.createElement(o.Z, { style: P.text }, a.createElement(o.Z, { style: P.participantsRow }, e.activeSpeakers), a.createElement(g.ZP, { color: "gray700", numberOfLines: 1 }, a.createElement(k, e))), a.createElement(v.ZP, { "aria-label": T.close, borderColor: "transparent", color: "text", icon: a.createElement(y.default, null), onPress: t, size: "medium", testID: "close" })));
            }
            function k(e) {
                return e.totalParticipants ? a.createElement(a.Fragment, null, a.createElement(E, { count: e.totalParticipants - 1, labelType: "plusOthers" }), a.createElement(x.Z, null), e.title) : e.title;
            }
            const T = { close: c().af8fa2ae },
                P = m.default.create((e) => ({ container: { borderRadius: "inherit", overflow: "hidden" }, gradientBar: { position: "absolute", height: "50%", width: "100%" }, content: { borderRadius: "inherit", marginTop: 3, backgroundColor: e.colors.navigationBackground, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space4, flexDirection: "row", justifyContent: "center", alignItems: "center" }, participantsRow: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }, text: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space4, flexDirection: "column", flex: 1 } }));
            function z(e) {
                const { isWide: t, wideDockMaxWidth: n } = e,
                    i = t ? d.Z.DesktopVoiceTweetDock : d.Z.MobileVoiceTweetDock,
                    c = t ? [W.root, { maxWidth: n }] : null;
                return a.createElement(
                    i,
                    null,
                    a.createElement(u.Z, { id: "SpaceDock" }, (t, n) => a.createElement(o.Z, (0, r.Z)({ ref: t() }, n({ style: c })), a.createElement(L, e))),
                );
            }
            function L(e) {
                const t = a.useRef(null),
                    n = e.isWide && W.borderRadius;
                const r = a.useCallback(() => {
                    t.current && t.current.focus();
                }, []);
                return a.createElement(
                    s.Z,
                    { enabled: !0, handlers: { [s.Z.shortcuts.audio.dock]: r } },
                    a.createElement(
                        l.Z,
                        {
                            "aria-label": D.dock,
                            onPress: S(e.onDockPress),
                            ref: function (e) {
                                t.current = e;
                            },
                            style: [R.container, n],
                        },
                        a.createElement(o.Z, { style: [R.innerContainer, n] }, a.createElement(M, e)),
                    ),
                );
            }
            (z.formatCountShort = p), (z.ParticipantsCount = E);
            const D = { dock: c().jbc5f47a },
                R = m.default.create((e) => ({ container: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall }, innerContainer: { backgroundColor: e.colors.navigationBackground } })),
                W = m.default.create((e) => ({ root: { alignSelf: "flex-end", marginEnd: e.spaces.space20, marginBottom: e.spaces.space20, width: "100%" }, borderRadius: { borderRadius: e.borderRadii.xLarge } }));
        },
        452505: (e, t, n) => {
            n.d(t, { ZP: () => u });
            var r = n(202784),
                a = n(466999),
                o = n(111677),
                i = n.n(o),
                c = n(392237);
            const l = 864e5;
            function s(e, t) {
                return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getYear() === t.getYear();
            }
            function u(e) {
                const t = Date.now(),
                    n = t + l,
                    r = new Date(t),
                    a = new Date(n),
                    o = new Date(e),
                    i = s(a, o),
                    c = s(r, o),
                    u = m().time(o);
                return c ? { text: m().scheduledStart({ date: f().today, time: u }), node: d(f().today, u) } : i ? { text: m().scheduledStart({ date: f().tomorrow, time: u }), node: d(f().tomorrow, u) } : { text: m().scheduledStart({ date: m().weekdayMonthAndDay(o), time: u }), node: d(m().weekdayMonthAndDay(o), u) };
            }
            function d(e, t) {
                const n = r.createElement(a.Z, { style: h.capitalize });
                return r.createElement(i().I18NFormatMessage, { $i18n: "c2588611", time: t }, r.cloneElement(n, null, i().b4349cbc({ relativeDay: e })));
            }
            const m = () => Object.freeze({ relativeDays: i().c333da63, time: i().d725a289, weekdayMonthAndDay: i().h8054d91, scheduledStart: i().d0e7b11b }),
                f = () => Object.freeze({ today: m().relativeDays(0), tomorrow: m().relativeDays(1) }),
                h = c.default.create(() => ({ capitalize: { textTransform: "capitalize" } }));
        },
        668260: (e, t, n) => {
            n.d(t, { default: () => l });
            var r = n(202784),
                a = n(561348),
                o = n(355769),
                i = n(452505);
            const c = Object.freeze({ Canceled: "Canceled", Ended: "Ended", NotStarted: "NotStarted", PrePublished: "PrePublished", Running: "Running", TimedOut: "TimedOut" });
            function l(e) {
                return r.createElement(a.ZP, e);
            }
            (l.SpaceState = c), (l.StateEnum = a.ZP.StateEnum), (l.AudienceEnum = a.ZP.AudienceEnum), (l.ButtonV2 = a.ZP.Button), (l.getMinHeight = a.ZP.getMinHeight), (l.LiveSpeakingIndicator = o.Z), (l.formatScheduledStartMs = i.ZP);
        },
        962487: (e, t, n) => {
            n.d(t, { Z: () => c });
            n(136728);
            var r = n(202784),
                a = n(503229),
                o = n(837880),
                i = n(184971);
            function c(e) {
                const { audioLevel: t } = e,
                    n = e.barFactors || s,
                    c = n.length,
                    m = e.barWidthRatio || u,
                    b = e.gapWidthRatio || d,
                    w = e.transformBarFactor || a.Z,
                    y = r.useRef(null),
                    v = r.useRef({ width: -1, height: -1, barWidth: -1, maxBarHeight: -1, xStart: -1, xMove: -1, frame: 0, bars: new Array(c).fill([0, 0]), shouldAnimate: !0, offsetHeight: () => y.current?.offsetHeight || 0, offsetWidth: () => y.current?.offsetWidth || 0 }),
                    x = v.current.offsetHeight(),
                    C = v.current.offsetWidth();
                r.useEffect(() => {
                    v.current.bars = new Array(c).fill([0, 0]);
                }, [c]),
                    r.useEffect(() => {
                        (v.current.bars = v.current.bars.map((e, r) => {
                            let a;
                            const [, i] = e;
                            if (0 === t) a = 0;
                            else {
                                const e = n[r],
                                    i = Math.random() > 0.5 ? -1 : 1;
                                let c = 0.8 * (1 - t);
                                t < 0.5 ? (c /= 4) : t > 0.95 && (c *= 4);
                                const l = i * Math.random() * c,
                                    s = e * t + l,
                                    u = (0, o.Z)(s, 0, e);
                                a = w(u);
                            }
                            return [i, i, a];
                        })),
                            (v.current.frame = 0),
                            (v.current.shouldAnimate = p(v));
                    }),
                    r.useEffect(() => {
                        const e = window.devicePixelRatio,
                            t = y.current;
                        if (t) {
                            (v.current.width = v.current.offsetWidth() * e), (v.current.height = v.current.offsetHeight() * e), (t.width = v.current.width), (t.height = v.current.height);
                            const n = v.current.width * b;
                            (v.current.barWidth = v.current.width * m), (v.current.maxBarHeight = v.current.height), (v.current.xStart = v.current.barWidth / 2 + n / 2), (v.current.xMove = v.current.barWidth + n);
                        }
                    }, [m, b, x, C]);
                const Z = 0 !== t;
                return (
                    r.useEffect(() => {
                        const t = y.current;
                        if (!t) return;
                        const n = t.getContext("2d");
                        let r = requestAnimationFrame(function t() {
                            v.current.frame = Math.min(f - 1, v.current.frame + 1);
                            const { barWidth: a, bars: o, height: s, maxBarHeight: u, width: d, xMove: m, xStart: E } = v.current;
                            n.clearRect(0, 0, d, s);
                            for (let t = 0; t < c; t++) {
                                const [r, , c] = o[t],
                                    d = c * u,
                                    f = h[v.current.frame].progress,
                                    p = i.Z.easing.lerp(r, d, f);
                                o[t] = [r, p, c];
                                const g = Math.max(0.5, p - a),
                                    b = E + t * m,
                                    w = (s - g) / 2;
                                n.beginPath(), n.moveTo(b, w), (n.strokeStyle = e.color || l), (n.lineWidth = a), (n.lineCap = "round"), n.lineTo(b, w + g), n.stroke();
                            }
                            (v.current.shouldAnimate = p(v)),
                                v.current.shouldAnimate
                                    ? (r = requestAnimationFrame(t))
                                    : !e.withPersistZeroLevel &&
                                      (function (e) {
                                          const { bars: t } = e.current,
                                              n = t.every((e) => {
                                                  const [t] = e;
                                                  return 0 === g(t, 2);
                                              });
                                          return n;
                                      })(v) &&
                                      n.clearRect(0, 0, d, s);
                        });
                        return function () {
                            cancelAnimationFrame(r);
                        };
                    }, [v.current.shouldAnimate, Z, e.withPersistZeroLevel, e.color, c]),
                    r.createElement("canvas", { ref: y, style: E })
                );
            }
            const l = n(392237).default.theme.colors.purple500,
                s = [0.6, 1, 0.6],
                u = 2 / 12,
                d = 2 / 12,
                m = 0.041666666666666664,
                f = 24,
                h = (function () {
                    const e = i.Z.easing.cubic_bezier(i.Z.curves.expressive),
                        t = [];
                    for (let n = 1; n <= f; n++) {
                        const r = m * n,
                            a = e.solve(r);
                        t.push({ time: r, progress: a });
                    }
                    return t;
                })();
            function p(e) {
                const { bars: t, maxBarHeight: n } = e.current;
                return !t.every((e) => {
                    const [t, r] = e;
                    return 0 === g(t - n * r, 2);
                });
            }
            function g(e, t) {
                const n = Math.pow(10, t);
                return Math.round(e * n) / n;
            }
            const E = { width: "100%", height: "100%" };
        },
        254683: (e, t, n) => {
            n.d(t, { Z: () => b });
            var r = n(202784),
                a = n(325686),
                o = n(392237),
                i = n(962487);
            const c = (e) => ({ width: e, height: e });
            function l({ audioLevel: e }) {
                const t = r.useRef(null),
                    n = r.useRef({ size: void 0 });
                function o({ size: t }) {
                    const n = Math.ceil(t / (1.5 * d));
                    return r.createElement(
                        r.Fragment,
                        null,
                        f(d).map((a, o) => r.createElement(s, { key: h(a, o), optimized: !0, scale: m(e, t, a), size: t, width: n })),
                    );
                }
                return (
                    r.useEffect(() => {
                        n.current.size = t?.current?.getBoundingClientRect().width;
                    }, []),
                    r.createElement(a.Z, { ref: t, style: u.root }, n.current.size ? r.createElement(o, { size: n.current.size }) : null)
                );
            }
            function s({ optimized: e, scale: t, size: n, width: o }) {
                const i = r.useRef(null),
                    c = { borderRadius: `${Math.ceil(o / 2)}px`, maxHeight: `${t}px`, minHeight: `${o}px`, width: `${o}px`, ...p(e, t, n) };
                return (
                    r.useEffect(() => {
                        const e = requestAnimationFrame(function () {
                            const e = i.current,
                                t = e?.style?.maxHeight;
                            e && t && (e.style.height = t);
                        });
                        return function () {
                            cancelAnimationFrame(e);
                        };
                    }, [t]),
                    r.createElement(a.Z, { ref: i, style: [c, u.bar] })
                );
            }
            const u = o.default.create((e) => ({ root: { alignItems: "center", display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", width: "100%" }, bar: { animationDuration: "600ms", animationKeyframes: [{ "0%": { transform: [{ scaleY: "0.8" }] }, "50%": { transform: [{ scaleY: "1" }] }, "100%": { transform: [{ scaleY: "0.8" }] } }], animationTimingFunction: "linear", animationIterationCount: "infinite", backgroundColor: "#794BC4", display: "inline-block", margin: "auto", pointerEvents: "none", position: "relative", transition: "height 200ms steps(6, jump-none)", willChange: "height, transform" } })),
                d = 5,
                m = (e, t, n) =>
                    0.95 *
                    t *
                    Math.abs(
                        e -
                            (function (e = 1, t = 0) {
                                return Math.random() * (e - t) + t;
                            })(0.3),
                    ) *
                    n,
                f = (e) =>
                    Array(e)
                        .fill(0)
                        .map((t, n) => Math.max(Math.sin((Math.PI * n) / (e - 1)), 0.35)),
                h = (e, t) => `AudioBar-${e}-${t}-${Date.now()}`,
                p = function (e, t, n) {
                    let r = {};
                    return e && (r = { result: r, transition: "unset" }), t / (n + 1) < 0.25 && (r = { result: r, animationName: "none" }), r;
                };
            function g(e) {
                const { color: t, muted: n, useDOM: a = !1, withPersistZeroLevel: o } = e,
                    c = n ? 0 : e.audioLevel;
                return a ? r.createElement(l, { audioLevel: c }) : r.createElement(i.Z, { audioLevel: c, color: t, withPersistZeroLevel: o });
            }
            const E = o.default.create((e) => ({ root: { display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" } })),
                b = function ({ size: e, ...t }) {
                    const n = { ...c(e) };
                    return r.createElement(a.Z, { style: [n, E.root] }, r.createElement(g, t));
                };
        },
        451566: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(807896),
                a = n(202784),
                o = n(928316),
                i = n(372612),
                c = n(392237);
            class l extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._updateStyles = (e) => {
                            if (e) {
                                const t = o.findDOMNode(e);
                                t &&
                                    [...t.childNodes].forEach((e) => {
                                        e instanceof HTMLElement && ((e.style.borderColor = "transparent"), (e.style.borderWidth = "1px"));
                                    });
                            }
                        });
                }
                render() {
                    const { colors: e } = c.default.theme;
                    return a.createElement(i.Z, (0, r.Z)({ activeThumbColor: e.primary, activeTrackColor: e.lightPrimary, ref: this._updateStyles }, this.props));
                }
            }
            const s = l;
        },
        818080: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(111677),
                a = n.n(r);
            const o = 1e3,
                i = 3600,
                c = 36e5,
                l = 864e5,
                s = a().d925a4f9,
                u = a().ib15cddb,
                d = a().db9ed19f,
                m = a().e1ebcecb,
                f = a().cc1da1fd,
                h = {
                    formatAsISO8601Duration: (e) => `PT${e.hours}H${e.minutes}M${e.seconds}S`,
                    getTimeUnits: (e, t, n) => {
                        const r = (t || Math.floor)(e / o),
                            a = Math.floor(r / i),
                            c = Math.floor((r % i) / 60),
                            l = { seconds: Math.floor(r % 60), minutes: c, hours: a };
                        return n && (a ? ((l.minutes = 0), (l.seconds = 0)) : c && (l.seconds = 0)), l;
                    },
                    getTimeLeftLabel: (e) => {
                        const t = new Date(e).getTime() - Date.now(),
                            n = Math.floor(t / o),
                            r = Math.floor(n / 60),
                            c = Math.floor(n / i),
                            l = Math.floor(n / 86400);
                        return c >= 24 ? d({ count: l, formattedCount: a().ia24dc8d(l) }) : r >= 60 ? u({ count: c, formattedCount: a().ia24dc8d(c) }) : s({ count: r, formattedCount: a().ia24dc8d(r) });
                    },
                    getTimeLeftLabelTwoUnits: (e) => {
                        const t = new Date(e).getTime() - Date.now(),
                            n = Math.floor(t / l),
                            r = Math.floor(t / c),
                            o = Math.floor(t / 6e4);
                        if (n >= 1) {
                            const e = Math.floor((t - n * l) / c);
                            return m({ days: n, hours: e, formattedDays: a().ia24dc8d(n), formattedHours: a().ia24dc8d(e) });
                        }
                        if (r >= 1) {
                            const e = Math.floor((t - r * c) / 6e4);
                            return f({ hours: r, mins: e, formattedHours: a().ia24dc8d(r), formattedMins: a().ia24dc8d(e) });
                        }
                        return s({ count: o, formattedCount: a().ia24dc8d(o) });
                    },
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555.b47e7fda.js.map
