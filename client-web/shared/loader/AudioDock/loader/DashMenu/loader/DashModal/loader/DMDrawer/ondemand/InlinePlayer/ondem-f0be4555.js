"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"],
    {
        114519: (e, t, n) => {
            n.d(t, { L: () => c });
            var r = n(202784),
                a = n(325686),
                i = n(530732),
                o = n(157635),
                l = n(186061);
            function c(e) {
                const { contentStyle: t, interactiveViewProps: n } = (0, l.yL)(e);
                return r.createElement(i.Z, n, r.createElement(a.Z, { style: t }, r.createElement(o.Z, null)));
            }
        },
        157635: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                a = n(325686);
            function i() {
                return r.createElement(a.Z, { style: o.loading });
            }
            const o = n(392237).default.create((e) => ({ loading: { height: "100%" } }));
        },
        648347: (e, t, n) => {
            n.d(t, { ku: () => r, tz: () => a });
            n(202784);
            Object.freeze({ Canceled: "Canceled", Ended: "Ended", NotStarted: "NotStarted", PrePublished: "PrePublished", Running: "Running", TimedOut: "TimedOut" });
            const r = Object.freeze({ scheduled: "scheduled", ended: "ended", live: "live", canceled: "canceled", unavailable: "unavailable", replay: "replay" }),
                a = Object.freeze({ general: 0, employeesOnly: 1, superFollowersOnly: 2 });
        },
        186061: (e, t, n) => {
            n.d(t, { Q5: () => h, TZ: () => g, dF: () => p, yL: () => f });
            n(136728);
            var r = n(202784),
                a = n(111677),
                i = n.n(a),
                o = n(976145),
                l = n(295559),
                c = n(483677),
                s = n(977220),
                u = n(452505),
                d = n(392237),
                m = n(648347);
            function f(e) {
                const t = g(e),
                    [n, a] = r.useState(w.largeWidthBreakpoint),
                    i = n < w.largeWidthBreakpoint,
                    o = n < w.dmWidthBreakpoint,
                    l = r.useRef(!0);
                r.useEffect(
                    () => () => {
                        l.current = !1;
                    },
                    [],
                );
                const c = { onClick: void 0, link: void 0 };
                (e.onClick || e.link) &&
                    e.state !== m.ku.unavailable &&
                    (e.onClick
                        ? (c.onClick = e.onClick)
                        : (c.link = (function (e) {
                              let t;
                              "object" == typeof e.link ? (t = { ...e.link, anchorless: !0 }) : "string" == typeof e.link && (t = { pathname: e.link, anchorless: !0 });
                              return t;
                          })(e)));
                const s = p(e),
                    u = h(o);
                return {
                    interactiveViewProps: {
                        "aria-label": y(e),
                        disabled: e.disabled,
                        onLayout: function ({ nativeEvent: e }) {
                            if (!l.current) return;
                            const { width: t } = e.layout;
                            a(t);
                        },
                        style: [E.container, t, c.onClick ? {} : { cursor: "default" }],
                        ...c,
                    },
                    contentStyle: [E.content, { backgroundColor: s, minHeight: u }],
                    isNarrow: i,
                    isSmall: o,
                    borderStyles: t,
                };
            }
            function h(e) {
                return (e ? 220 : 205) * d.default.theme.scaleMultiplier;
            }
            function p(e) {
                const { community: t, palette: n, state: r } = e,
                    { alpha: a, blue: i, green: o, red: u } = t ? (0, l.FP)(t.color) : (0, l.xO)((0, s.ai)().secondary);
                let d,
                    f,
                    h = (0, l.py)({ red: u, green: o, blue: i }),
                    p = a;
                if (n && !t) {
                    const e = c.Z.get(n);
                    e && ((h = e.hsv), (p = 1), (d = 0.5), (f = 0.6));
                }
                return [m.ku.canceled, m.ku.ended, m.ku.unavailable].includes(r) && ((d = 0.1), (f = 0.25)), d && f && ((h.saturation = d), (h.value = f)), (0, l.rb)({ ...(0, l.WE)(h), alpha: p });
            }
            function g(e) {
                const { withSquareBottomBorderRadius: t, withStraightBorders: n } = e;
                let r = b.borderRadius;
                return n ? (r = null) : t && (r = b[t]), r;
            }
            function y(e) {
                const { hasReminderSet: t, participants: n, scheduledStart: r, state: a, title: i } = e,
                    l = e.host?.display_name;
                if (a && a === m.ku.unavailable) return v.detailsNotAvailable;
                if (a && a === m.ku.ended) return i && l ? v.endedA11yWithHostAndTitle({ title: i, host: l }) : v.endedA11y;
                if (a && a === m.ku.canceled) return i && l ? v.canceledA11yWithHostAndTitle({ title: i, host: l }) : v.canceledA11y;
                if (a && a === m.ku.scheduled && r) {
                    const { text: n } = (0, u.ZP)(r),
                        a = t ? v.reminderSet : v.setReminder;
                    return l && i ? (e.isHost ? v.scheduledStartNowAccessibilityLabel({ title: i, scheduledStart: n }) : v.scheduledAccessibilityLabel({ title: i, host: l, action: a, scheduledStart: n })) : v.scheduledAccessibilityLabelWithoutHostAndTitle({ action: a, scheduledStart: n });
                }
                if (a && a === m.ku.replay) return i ? v.playRecordingAccessibilityLabel({ title: i }) : v.playRecording;
                const c = [v.joinASpace],
                    s = Array.isArray(n) && n.length;
                return i && c.push(i), l && c.push(v.hostedBy({ host: l })), s && c.push(v.withOthers({ count: s })), (0, o.Z)(c, !0);
            }
            const E = d.default.create((e) => ({ container: { overflow: "hidden" }, content: { padding: e.spaces.space12 } })),
                b = d.default.create((e) => {
                    const t = e.borderRadii.large,
                        n = e.borderRadii.none;
                    return { borderRadius: { borderRadius: t }, both: { borderRadius: t, borderBottomEndRadius: n, borderBottomStartRadius: n }, left: { borderRadius: t, borderBottomStartRadius: n }, right: { borderRadius: t, borderBottomEndRadius: n } };
                }),
                w = { largeWidthBreakpoint: 343, dmWidthBreakpoint: 270 },
                v = { detailsNotAvailable: i().bd08d1b2, reminderSet: i().c6000450, setReminder: i().db44ff5c, canceledA11yWithHostAndTitle: i().j8b01b27, canceledA11y: i().fda9f48c, endedA11yWithHostAndTitle: i().jf7853f7, endedA11y: i().i1a29920, joinASpace: i().db467ffe, hostedBy: i().i8dc3993, withOthers: i().eb0b05b9, scheduledAccessibilityLabel: i().d19b9f77, scheduledStartNowAccessibilityLabel: i().e679d5d7, scheduledAccessibilityLabelWithoutHostAndTitle: i().ea4258b7, playRecording: i().g519ec2a, playRecordingAccessibilityLabel: i().dcbcaa23 };
        },
        819844: (e, t, n) => {
            n.d(t, { Z: () => P });
            var r = n(807896),
                a = n(202784),
                i = n(555874),
                o = n(325686),
                l = n(392237),
                c = n(731708),
                s = n(124964),
                u = n(794215),
                d = n(366635);
            function m(e) {
                const { isBlueVerified: t = !1, isVerified: n = !1, speaker: r, speakerAvatarSize: i = "small", speakerNameSize: l = "subtext2", speakerScreenNameSize: c = "subtext2", timestamp: s, verifiedType: u, withSpeakerAvatar: m = !0, withSpeakerScreenName: f = !0, withTimestamp: g = !1 } = e,
                    y = Date.now() - s;
                return a.createElement(o.Z, { style: p.root }, a.createElement(d.Z, { avatarSize: i, isBlueVerified: t, isVerified: n, name: r.name, nameSize: l, profileImageUrl: m ? r.profile_image_url_https : "", screenName: r.screen_name, screenNameSize: c, style: p.userName, verifiedType: u, withScreenName: f }), g ? a.createElement(h, { size: l, timeMs: y }) : null);
            }
            function f(e, t) {
                return e && t && e.id_str && t.id_str ? e.id_str === t.id_str : !!(e && t && e.screen_name && t.screen_name) && e.screen_name === t.screen_name;
            }
            function h({ size: e = "small", timeMs: t }) {
                return a.createElement(a.Fragment, null, a.createElement(s.Z, { size: e }), a.createElement(u.Z, { color: "gray700", humanReadable: !0, size: e, timeMs: t }));
            }
            const p = l.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 1, marginTop: "0.25em" }, userName: { marginBottom: e.spaces.space4, paddingEnd: e.spaces.space4 } }));
            function g(e) {
                const { caption: t, captionTextSize: n, withSpeaker: i = !0, ...l } = e,
                    { speaker: s } = t;
                return a.createElement(o.Z, { style: [y.root, !i && y.missingSpeakerSpacer] }, i ? a.createElement(m, (0, r.Z)({}, l, { speaker: s, timestamp: t.timestamp })) : null, a.createElement(c.ZP, { lang: t.lang, size: n, style: y.captionText }, t.text));
            }
            const y = l.default.create((e) => ({ root: { paddingBottom: "0.25em", flex: 1 }, missingSpeakerSpacer: { paddingTop: "0.1em" }, captionText: { lineHeight: "1.5em", paddingVertical: "0.1em", fontWeight: e.highContrastEnabled ? e.fontWeights.heavy : e.fontWeights.regular } })),
                E = (e) => ({ width: e, height: e });
            function b(e) {
                const { size: t } = e,
                    n = Math.floor(t / 4.5);
                return a.createElement(o.Z, { style: [S.root, v(t)] }, a.createElement(w, { width: n }));
            }
            function w({ width: e }) {
                return a.createElement(
                    a.Fragment,
                    null,
                    Array(3)
                        .fill(0)
                        .map((t, n) => a.createElement(o.Z, { key: n, style: [S.dot, C(n, e)] })),
                );
            }
            function v(e) {
                return { ...E(e) };
            }
            function C(e, t) {
                return { animationDelay: 0.5 * e + "s", borderRadius: "100%", ...E(t) };
            }
            const S = l.default.create((e) => ({ root: { alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "center" }, dot: { position: "relative", backgroundColor: e.colors.purple500, display: "inline-block", margin: "auto", pointerEvents: "none", willChange: "transform", animationKeyframes: [{ "0%": { backgroundColor: e.colors.purple500 }, "50%": { backgroundColor: e.colors.purple200 }, "100%": { backgroundColor: e.colors.purple200 } }], animationDirection: "alternate", animationDuration: "1s", animationIterationCount: "infinite", animationTimingFunction: "linear" } })),
                Z = 28,
                x = 28;
            function k(e) {
                const { captions: t, footerHeight: n = Z, headerHeight: l = x, scrollContainerStyle: c, unintelligible: s = !1, withFrequentSpeakerAnnouncement: u = !1, verifiedLookup: d = {}, ...m } = e,
                    h = a.useRef(null),
                    p = a.useRef(null),
                    y = a.useRef({ containerHeight: void 0, hasUserScrolledUp: !1 });
                function E() {
                    y.current?.hasUserScrolledUp || p.current?.scrollToEnd({ animated: !0 });
                }
                return (
                    a.useEffect(() => {
                        y.current.containerHeight = h?.current?.getBoundingClientRect().height;
                    }, []),
                    a.useEffect(() => {
                        let e = null;
                        return (
                            (function t() {
                                E(), (e = setTimeout(t, 1500));
                            })(),
                            function () {
                                clearTimeout(e);
                            }
                        );
                    }, []),
                    a.createElement(
                        o.Z,
                        { ref: h, style: T.root },
                        a.createElement(i.Z, {
                            ListFooterComponent: a.createElement(L, { footerHeight: n, unintelligible: s }),
                            ListHeaderComponent: a.createElement(M, { headerHeight: l }),
                            contentContainerStyle: { marginBottom: 0 },
                            data: t,
                            keyExtractor: (e) => e.sequenceId,
                            maintainVisibleContentPosition: { minIndexForVisible: 0 },
                            onEndReached: function () {
                                E();
                            },
                            onScroll: function ({ nativeEvent: { contentOffset: e, contentSize: t, layoutMeasurement: r } }) {
                                const a = 2 * (y.current.containerHeight || 0) + n,
                                    i = t.height - r.height - e.y - a > 0;
                                y.current.hasUserScrolledUp = i;
                            },
                            ref: p,
                            renderItem: function ({ index: e, item: n }) {
                                let i = !0;
                                u || (i = !f(n.speaker, t[e - 1]?.speaker));
                                const o = n.speaker.screen_name,
                                    { isBlueVerified: l, isVerified: c, verifiedType: s } = d[o] || {};
                                return a.createElement(g, (0, r.Z)({}, m, { caption: n, isBlueVerified: l, isVerified: c, key: n.sequenceId, verifiedType: s, withSpeaker: i }));
                            },
                            role: "listbox",
                            scrollEventThrottle: 100,
                            style: [T.captionsContainer, c],
                        }),
                    )
                );
            }
            function M(e) {
                const { headerHeight: t } = e;
                return a.createElement(o.Z, { style: { height: t } });
            }
            function L(e) {
                const { footerHeight: t, unintelligible: n } = e;
                return a.createElement(a.Fragment, null, n ? a.createElement(b, { size: 20 }) : null, a.createElement(o.Z, { style: { height: t } }));
            }
            const T = l.default.create((e) => ({ root: { height: "100%", width: "100%", flex: 1 }, captionsContainer: { maxHeight: "100%", height: "100%", scrollbarWidth: "none" } }));
            (k.Caption = g), (k.areSpeakersIdentical = f);
            const P = k;
        },
        287826: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(807896),
                a = (n(571372), n(202784)),
                i = n(233184),
                o = n(509715),
                l = n(103165);
            const c = function (e) {
                const { audioSpaceId: t, clipMetadata: n, ...c } = e,
                    s = (function (e) {
                        if (!e) return;
                        let t;
                        try {
                            t = JSON.parse(e);
                        } catch (e) {
                            i.Z.report(new Error("[SpaceCard] could not parse clip metadata"));
                        }
                        return t;
                    })(n);
                return t && s ? a.createElement(o.Z, (0, r.Z)({ audioSpaceId: t, clipMetadata: s }, c)) : t ? a.createElement(l.Z, (0, r.Z)({ audioSpaceId: t }, c)) : null;
            };
        },
        868871: (e, t, n) => {
            n.d(t, { Z: () => ge });
            var r = n(202784),
                a = n(325686),
                i = n(530732),
                o = n(186061),
                l = n(392237),
                c = n(807896),
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
            var y = n(744610),
                E = n(731708);
            function b(e) {
                const t = r.useRef(new y.Z.Value(0)).current,
                    n = r.useRef([0, 1]).current,
                    a = { opacity: { inputRange: n, outputRange: ["60%", "100%"] } },
                    i = { entry: y.Z.spring(t, { toValue: n[1], useNativeDriver: !1 }) };
                return (
                    r.useEffect(() => {
                        t.setValue(n[0]), i.entry.start();
                    }, [e.caption]),
                    r.createElement(y.Z.View, { style: [w.container, { transform: [{ translate3d: "0, 0, 0" }], opacity: t.interpolate(a.opacity) }] }, r.createElement(E.ZP, { color: "whiteOnColor", numberOfLines: e.numberOfLines, size: e.size, weight: e.weight }, e.caption))
                );
            }
            const w = l.default.create((e) => ({ container: { width: "100%", height: "100%", minHeight: "100%" } }));
            function v(e) {
                return e.split(C);
            }
            const C = /\s/,
                S = { size: "title2", weight: "heavy", numberOfLines: 3 };
            function Z(e) {
                let t = L;
                return (
                    e.speed && (t = Math.min(Math.max(e.speed, T), P)),
                    r.createElement(
                        y.Z.View,
                        { style: M.container },
                        r.createElement(
                            E.ZP,
                            { color: "whiteOnColor", key: e.caption, numberOfLines: e.numberOfLines, size: e.size, weight: e.weight },
                            v(e.caption).map((e, n, a) => r.createElement(x, { delay: t, excludeWhitespace: n === a.length - 1, index: n, key: n, word: e })),
                        ),
                    )
                );
            }
            function x(e) {
                const t = r.useRef(new y.Z.Value(0)).current,
                    n = r.useRef([0, 1]).current,
                    a = { opacity: { inputRange: n, outputRange: ["50%", "100%"] } },
                    i = y.Z.sequence([y.Z.delay(e.delay * e.index), y.Z.spring(t, { toValue: n[1], useNativeDriver: !1 })]);
                return (
                    r.useEffect(() => {
                        i.start();
                    }, []),
                    r.createElement(r.Fragment, null, r.createElement(y.Z.Text, { style: [M.word, { transform: [{ translate3d: "0, 0, 0" }], opacity: t.interpolate(a.opacity) }] }, e.word), e.excludeWhitespace ? null : r.createElement(k, null))
                );
            }
            function k() {
                return r.createElement(r.Fragment, null, " ", r.createElement("wbr", null));
            }
            const M = l.default.create((e) => ({ container: { width: "100%", height: "100%", minHeight: "100%" }, word: { whiteSpace: "pre" } })),
                L = 170,
                T = L - 50,
                P = L + 50;
            var A = n(718480),
                R = (n(136728), n(928316));
            function I(e) {
                return new Promise((t) => {
                    (function () {
                        if (I.MEASUREMENT_ELEMENT) return Promise.resolve(I.MEASUREMENT_ELEMENT);
                        return new Promise((e) => {
                            const t = document.createElement("div");
                            (t.style.position = "fixed"),
                                (t.style.pointerEvents = "none"),
                                (t.style.opacity = "0"),
                                R.render(r.createElement(E.ZP, S), t, () => {
                                    document.body.appendChild(t);
                                    const n = t.querySelector("div");
                                    n && (I.MEASUREMENT_ELEMENT = n), e(n);
                                });
                        });
                    })().then((n) => {
                        if (!n) return t([e.text]);
                        (n.innerText = e.text), (n.style.width = `${e.width}px`), (n.style.height = `${e.height}px`);
                        const r = () => {
                            const e = n.scrollWidth > n.offsetWidth,
                                t = n.scrollHeight > n.offsetHeight + z;
                            return e || t;
                        };
                        let a;
                        if (r()) {
                            const t = v(e.text),
                                i = [];
                            n.innerText = "";
                            let o = [];
                            for (const e of t) (n.innerText = `${n.innerText} ${e}`.trim()), r() && (o.length && i.push(o), (n.innerText = e), (o = [])), o.push(e);
                            o.length && i.push(o), (a = i.map((e) => e.join(" ")));
                        } else a = [e.text];
                        return t(a);
                    });
                });
            }
            I.MEASUREMENT_ELEMENT = void 0;
            const z = 1;
            function B(e, t, n, a) {
                const [i, o] = r.useState([]);
                return (
                    r.useEffect(() => {
                        n &&
                            a &&
                            I({ text: e, width: n, height: a }).then((e) => {
                                o(
                                    (function (e, t) {
                                        const n = e.map((e) => (0, A.Z)(e).weightedLength),
                                            r = n.reduce((e, t) => e + t, 0);
                                        return e.map((e, a) => {
                                            const i = n[a];
                                            return { text: e, duration: t * (i === r ? 1 : i / r) };
                                        });
                                    })(e, t),
                                );
                            });
                    }, [n, a, e, t]),
                    i
                );
            }
            function D(e) {
                let t;
                return e.duration && e.text.length && (t = e.duration / v(e.text).length), { ...e, fadeInWordSpeed: t };
            }
            function W() {
                const e = p().useSlice((e) => e.caption);
                return null === e ? r.createElement(H, null) : void 0 === e ? r.createElement(a.Z, { style: N.captionContainer }) : r.createElement(O, { caption: e });
            }
            function O(e) {
                const t = p(),
                    n = t.useSlice((e) => !e.isPlaying),
                    i = t.useSlice((e) => e.fadeInWords ?? !0),
                    { durationMs: o, text: l } = e.caption,
                    [s, u] = r.useState({ height: 0, width: 0 });
                const d = (function (e) {
                    const { durationMs: t, height: n, isPaused: a, text: i, width: o } = e,
                        l = B(i, t, o, n),
                        [c, s] = r.useState(void 0);
                    return (
                        r.useEffect(() => {
                            const e = () => {
                                s({ frame: D(l[0]), index: 0 });
                            };
                            if (c || !l.length) {
                                if (c && !a) {
                                    const { frame: t, index: n } = c,
                                        r = l[n];
                                    if (!r || r.text !== t.text || r.duration !== t.duration) return void e();
                                    if (t.duration) {
                                        const e = setTimeout(function () {
                                            let e = c.index + 1;
                                            c.index === l.length - 1 && (e = 0);
                                            const t = D(l[e]);
                                            s({ index: e, frame: t });
                                        }, t.duration);
                                        return () => clearTimeout(e);
                                    }
                                }
                            } else e();
                        }, [c, l, a]),
                        c?.frame || { text: "", duration: 0, fadeInWordSpeed: void 0 }
                    );
                })({ text: l, durationMs: o, width: s.width, height: s.height, isPaused: n });
                return r.createElement(
                    a.Z,
                    {
                        onLayout: function ({ nativeEvent: e }) {
                            const { height: t, width: n } = e.layout;
                            u({ height: t, width: n });
                        },
                        style: N.captionContainer,
                    },
                    i ? r.createElement(Z, (0, c.Z)({ caption: d.text, speed: d.fadeInWordSpeed }, S)) : r.createElement(b, (0, c.Z)({ caption: d.text }, S)),
                );
            }
            function H() {
                const e = p().useSlice((e) => e.speaker);
                return r.createElement(a.Z, { style: N.captionContainer }, r.createElement(a.Z, { style: N.unavailableContainer }, r.createElement(s.default, { borderColor: "white", borderWidth: "medium", size: "jumbo", uri: e.avatar_url }), r.createElement(F, { space: "space8" }), r.createElement(a.Z, { style: N.unavailableNameContainer }, r.createElement(u.Z, { color: "white", isBlueVerified: e.is_blue_verified, isVerified: e.is_verified, name: e.display_name, nameSize: "subtext1", style: N.unavailableUserName, weight: "bold" }), r.createElement(d.Z, { color: "white", screenName: e.twitter_screen_name || "", size: "subtext1", style: N.unavailableScreenName }))));
            }
            function F(e) {
                return r.createElement(a.Z, { style: { marginVertical: l.default.theme.spaces[e.space] } });
            }
            const N = l.default.create((e) => ({ captionContainer: { marginTop: e.spaces.space12, marginBottom: e.spaces.space20, height: e.lineHeightsPx[S.size] * S.numberOfLines }, spacer: { margin: e.spaces.space8 }, unavailableContainer: { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, unavailableNameContainer: { justifyContent: "center" }, unavailableScreenName: { opacity: 0.7, textAlign: "center" }, unavailableUserName: { textAlign: "center" } }));
            var _ = n(111677),
                V = n.n(_),
                j = n(498844),
                U = n(83515),
                $ = n(926628),
                q = n(149170),
                G = n(811176),
                J = n(154003);
            function K() {
                return r.createElement(a.Z, { style: X.header }, r.createElement(K.ActiveSpeakerOrCaptionsIcon, null), r.createElement(a.Z, { style: X.headerControls }, r.createElement(K.MuteToggleButton, null), r.createElement(K.MoreMenu, null)));
            }
            (K.ActiveSpeakerOrCaptionsIcon = function () {
                return p().useSlice((e) => null === e.caption) ? r.createElement(j.default, { style: X.captionsIcon }) : r.createElement(K.ActiveSpeaker, null);
            }),
                (K.ActiveSpeaker = function () {
                    const e = p().useSlice((e) => e.speaker);
                    return r.createElement(u.Z, { color: "white", isBlueVerified: e.is_blue_verified, isVerified: e.is_verified, profileImageUrl: e.avatar_url, screenName: e.twitter_screen_name, screenNameSize: "subtext2", weight: "bold" });
                }),
                (K.MuteToggleButton = function () {
                    const e = p(),
                        t = e.useSlice((e) => e.isMuted),
                        n = e.getState().onMuteToggle;
                    return r.createElement(J.ZP, { "aria-label": t ? Y.unmute : Y.mute, backgroundColor: "transparent", borderColor: "transparent", color: "whiteOnColor", icon: t ? r.createElement(U.default, null) : r.createElement($.default, null), onClick: n, size: "small" });
                }),
                (K.MoreMenu = function () {
                    const e = p().useSlice((e) => e.menuItems),
                        [t, n] = r.useState(!1);
                    if (!e || e.length < 1) return null;
                    const a = t ? r.createElement(G.Z, { isFixed: !0, items: e, onCloseRequested: () => n(!1), shouldCloseOnClick: !0 }) : null;
                    return r.createElement(r.Fragment, null, r.createElement(J.ZP, { "aria-label": Y.more, backgroundColor: "transparent", borderColor: "transparent", color: "whiteOnColor", hoverLabel: { label: Y.more }, icon: r.createElement(q.default, null), onPress: () => n(!0), size: "small" }), a);
                });
            const Y = { unmute: V().b8b6344a, mute: V().ec8ab8b4, more: V().gaeb997e },
                X = l.default.create((e) => ({ header: { width: "100%", alignItems: "center", justifyContent: "space-between", flexFlow: "row nowrap" }, headerControls: { alignItems: "center", flexFlow: "row nowrap" }, captionsIcon: { color: e.colors.whiteOnColor } }));
            var Q = n(483054),
                ee = n(295559),
                te = n(776342);
            function ne(e) {
                const t = (0, ee.rb)((0, Q._j)({ coefficient: 0.2, color: (0, ee.xO)(e.backgroundColor) }));
                return r.createElement(a.Z, { style: [ae.previewContainer, { backgroundColor: t }] }, r.createElement(E.ZP, { color: "whiteOnColor", numberOfLines: 2, size: "body", weight: "bold" }, e.title), r.createElement(re, e));
            }
            function re(e) {
                const t = e.state === te.default.StateEnum.ended,
                    n = e.state === te.default.StateEnum.live,
                    a = e.state === te.default.StateEnum.replay;
                if (!t && !n && !a) return null;
                let i,
                    o = "onMediaLightFilled";
                return n ? (e.isJoined ? ((i = ie.joined), (o = "onMediaOutlined")) : (i = ie.join)) : t ? (i = ie.view) : a && (e.replayIsPlaying ? ((i = ie.pause), (o = "onMediaOutlined")) : (i = ie.play)), r.createElement(J.ZP, { onPress: e.onButtonClick, style: ae.previewButton, type: o }, i);
            }
            ne.WithContext = function ({ backgroundColor: e }) {
                const t = p(),
                    n = t.useSlice((e) => e.title),
                    a = t.useSlice((e) => e.state),
                    i = t.useSlice((e) => e.isJoined),
                    o = t.useSlice((e) => e.replayIsPlaying),
                    l = t.getState().onButtonClick;
                return r.createElement(ne, { backgroundColor: e, isJoined: i, onButtonClick: l, replayIsPlaying: o, state: a, title: n });
            };
            const ae = l.default.create((e) => ({ previewContainer: { alignItems: "center", flexFlow: "row nowrap", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, borderRadius: e.borderRadii.xLarge, boxShadow: "0px 2px 13px 0px #0000001A", borderColor: e.colors.transparent, justifyContent: "space-between" }, previewButton: { marginStart: e.spaces.space8 } })),
                ie = { join: V().f8b21226, joined: V().b3d828ee, play: V().f17dfdb6, pause: V().fb236728, view: V().b05a39b2 };
            var oe = n(794215),
                le = n(166502),
                ce = n(962487);
            function se(e) {
                let t = [];
                if (e.withFeatheredWaveform) t = me(new Array(e.barCount).fill(e.audioLevel), e.audioLevel);
                else {
                    const n = Math.max(0.8 * Math.random(), 0.35),
                        r = Math.max(Math.floor(n * e.barCount), 3);
                    (0, le.Z)(
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
                return r.createElement(ce.Z, (0, c.Z)({ audioLevel: e.audioLevel, color: l.default.theme.colors.whiteOnColor, transformBarFactor: fe, withPersistZeroLevel: !0 }, n));
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
                              e.forEach((n, i) => {
                                  if (i < r) {
                                      const n = t / r;
                                      e[i] = (i + 1) * n;
                                  } else if (i > a) {
                                      const n = t / a;
                                      e[i] = t - (i - a) * n;
                                  } else e[i] = t;
                              }),
                              e
                          );
                      })(e, n)
                    : (function (e, t) {
                          const n = Math.floor(e.length / 2),
                              r = t / n;
                          return (
                              e.forEach((a, i) => {
                                  i < n ? (e[i] = i * r) : i > n ? (e[i] = t - (i - n) * r) : i === n && (e[i] = t);
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
                return r.createElement(oe.Z, { color: "whiteOnColor", timeMs: e });
            };
            const pe = l.default.create((e) => ({ durationContainer: { alignSelf: "center", marginStart: e.spaces.space4 }, waveformGroupContainer: { width: "100%", flexFlow: "row nowrap", height: e.spaces.space36, marginBottom: e.spaces.space28 }, waveformContainer: { flexShrink: 1, flexGrow: 1 } }));
            function ge(e) {
                return r.createElement(g, e, r.createElement(ye, null));
            }
            const ye = r.memo(function () {
                    const e = p(),
                        [t, n] = r.useState(be.largeWidthBreakpoint),
                        l = t < be.largeWidthBreakpoint,
                        c = t < be.mediumWidthBreakpoint,
                        s = t < be.dmWidthBreakpoint,
                        u = e.useSlice((e) => e.onClick);
                    let d = e.useSlice((e) => e.barCount);
                    d || (d = s ? we.small : c ? we.narrow : l ? we.medium : we.large);
                    const m = e.getState(),
                        f = (0, o.dF)(m),
                        h = (0, o.TZ)(m),
                        g = [Ee.container, h],
                        y = [Ee.content, { backgroundColor: f }];
                    return r.createElement(
                        i.Z,
                        {
                            onClick: u,
                            onLayout: function ({ nativeEvent: e }) {
                                const { width: t } = e.layout;
                                n(t);
                            },
                            style: g,
                        },
                        r.createElement(a.Z, { style: y }, r.createElement(K, null), r.createElement(W, null), r.createElement(he, { barCount: d }), r.createElement(ne.WithContext, { backgroundColor: f })),
                    );
                }),
                Ee = l.default.create((e) => ({ container: { overflow: "hidden" }, content: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } })),
                be = { largeWidthBreakpoint: 480, mediumWidthBreakpoint: 343, dmWidthBreakpoint: 270 },
                we = { small: 80, narrow: 100, medium: 140, large: 170 };
        },
        752905: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(202784),
                a = n(325686),
                i = n(516951),
                o = n(392237),
                l = n(868871);
            const c = { text: "", durationMs: 0 },
                s = {};
            function u() {
                return r.createElement(a.Z, { role: "presentation", style: d.placeholderContainer }, r.createElement(l.Z, { audioLevel: 0, caption: c, isMuted: !0, isPlaying: !0, onMuteToggle: i.Z, speaker: s, state: "ended", timeMs: 0, title: "" }));
            }
            const d = o.default.create((e) => ({ placeholderContainer: { opacity: 0.2, pointerEvents: "none" } }));
        },
        279046: (e, t, n) => {
            n.d(t, { Z: () => P });
            var r = n(807896),
                a = n(202784),
                i = n(325686),
                o = n(111677),
                l = n.n(o),
                c = n(530732),
                s = n(522171),
                u = n(365023),
                d = n(292627),
                m = n(392237),
                f = n(891198);
            const h = { truncate0: l().g08cbabb };
            function p(e) {
                if (e < 1e3) return String(e);
                return 2 === Math.floor(Math.log10(e)) % 3 ? h.truncate0(e) : f.ZP.getTruncatedCount(e, !0);
            }
            var g = n(731708);
            function y(e) {
                const { count: t, labelType: n } = e,
                    r = a.useMemo(() => y.generateText({ count: t, labelType: n }), [t, n]);
                return a.createElement(g.ZP, { numberOfLines: 1, style: b.tabularNums }, r);
            }
            y.generateText = function (e) {
                const t = p(Math.max(0, e.count));
                switch (e.labelType) {
                    case "otherListeners":
                        return E.otherListeners({ count: t });
                    case "plusCount":
                        return E.plusCount({ count: t });
                    case "plusOthers":
                        return E.plusOthers({ count: t });
                    case "tunedIn":
                        return E.tunedIn({ count: t });
                    default:
                        return E.others({ count: t });
                }
            };
            const E = { others: l().gfe2830f, otherListeners: l().dbeae6cf, plusCount: l().d2543d97, plusOthers: l().dc718e53, tunedIn: l().d6f2056f },
                b = m.default.create((e) => ({ tabularNums: { fontVariant: "tabular-nums" } }));
            var w = n(837020),
                v = n(154003),
                C = n(124964),
                S = n(181054),
                Z = n(384153);
            function x(e) {
                return Z.Z.selectiveClickHandler((t) => {
                    "function" == typeof e && e();
                });
            }
            function k(e) {
                const t = x(e.onRequestClose);
                return a.createElement(i.Z, { style: T.container }, a.createElement(i.Z, { style: T.gradientBar }, a.createElement(S.Z.Animated, null)), a.createElement(i.Z, { style: T.content }, a.createElement(i.Z, { style: T.text }, a.createElement(i.Z, { style: T.participantsRow }, e.activeSpeakers), a.createElement(g.ZP, { color: "gray700", numberOfLines: 1 }, a.createElement(M, e))), a.createElement(v.ZP, { "aria-label": L.close, borderColor: "transparent", color: "text", icon: a.createElement(w.default, null), onPress: t, size: "medium", testID: "close" })));
            }
            function M(e) {
                return e.totalParticipants ? a.createElement(a.Fragment, null, a.createElement(y, { count: e.totalParticipants - 1, labelType: "plusOthers" }), a.createElement(C.Z, null), e.title) : e.title;
            }
            const L = { close: l().af8fa2ae },
                T = m.default.create((e) => ({ container: { borderRadius: "inherit", overflow: "hidden" }, gradientBar: { position: "absolute", height: "50%", width: "100%" }, content: { borderRadius: "inherit", marginTop: 3, backgroundColor: e.colors.navigationBackground, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space4, flexDirection: "row", justifyContent: "center", alignItems: "center" }, participantsRow: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }, text: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space4, flexDirection: "column", flex: 1 } }));
            function P(e) {
                const { isWide: t, wideDockMaxWidth: n } = e,
                    o = t ? d.Z.DesktopVoiceTweetDock : d.Z.MobileVoiceTweetDock,
                    l = t ? [z.root, { maxWidth: n }] : null;
                return a.createElement(
                    o,
                    null,
                    a.createElement(u.Z, { id: "SpaceDock" }, (t, n) => a.createElement(i.Z, (0, r.Z)({ ref: t() }, n({ style: l })), a.createElement(A, e))),
                );
            }
            function A(e) {
                const t = a.useRef(null),
                    n = e.isWide && z.borderRadius;
                const r = a.useCallback(() => {
                    t.current && t.current.focus();
                }, []);
                return a.createElement(
                    s.Z,
                    { enabled: !0, handlers: { [s.Z.shortcuts.audio.dock]: r } },
                    a.createElement(
                        c.Z,
                        {
                            "aria-label": R.dock,
                            onPress: x(e.onDockPress),
                            ref: function (e) {
                                t.current = e;
                            },
                            style: [I.container, n],
                        },
                        a.createElement(i.Z, { style: [I.innerContainer, n] }, a.createElement(k, e)),
                    ),
                );
            }
            (P.formatCountShort = p), (P.ParticipantsCount = y);
            const R = { dock: l().jbc5f47a },
                I = m.default.create((e) => ({ container: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall }, innerContainer: { backgroundColor: e.colors.navigationBackground } })),
                z = m.default.create((e) => ({ root: { alignSelf: "flex-end", marginEnd: e.spaces.space20, marginBottom: e.spaces.space20, width: "100%" }, borderRadius: { borderRadius: e.borderRadii.xLarge } }));
        },
        181054: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(807896),
                a = n(202784),
                i = n(325686),
                o = n(215337),
                l = n(392237),
                c = n(977220);
            const s = (e) => `${e}%`,
                u = l.default.create((e) => ({ container: { height: "100%", overflow: "hidden" }, animate: { height: "100%", width: s(500), transform: [{ translateX: "0%" }], animationDuration: "10000ms", animationIterationCount: "infinite", animationDirection: "alternate", animationTimingFunction: "linear", animationKeyframes: { "0%": { transform: [{ translateX: "0%" }] }, "100%": { transform: [{ translateX: s(-80) }] } } } }));
            function d() {
                const e = (0, c.ai)();
                return a.createElement("defs", null, a.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: m, x1: "-9.62%", x2: "109.62%", y1: "82.19%", y2: "17.81%" }, a.createElement("stop", { stopColor: e.primary }), a.createElement("stop", { offset: "1.05", stopColor: e.secondary })));
            }
            const m = "space-gradient";
            d.fill = `url(#${m})`;
            const f = {
                    Default: function ({ children: e, style: t, type: n = "audiospace" }) {
                        return a.createElement(
                            o.Z,
                            (0, r.Z)(
                                {},
                                (function (e) {
                                    const t = (0, c.ai)(e);
                                    return { ...(0, c.Cs)(), colors: [t.primary, t.secondary], locations: [-0.1505, 1.0496] };
                                })(n),
                                { style: t },
                            ),
                            e,
                        );
                    },
                    Animated: function (e) {
                        return a.createElement(
                            i.Z,
                            { style: [u.container, e.style] },
                            a.createElement(
                                o.Z,
                                (0, r.Z)(
                                    {},
                                    (function () {
                                        const e = (0, c.ai)();
                                        return { ...(0, c.Cs)(), colors: [e.primary, e.secondary, e.primary, e.secondary, e.primary], locations: [0.16, 0.24, 0.54, 0.62, 0.88] };
                                    })(),
                                    { style: u.animate },
                                ),
                                e.children,
                            ),
                        );
                    },
                    SVGLinearGradient: d,
                    getColors: c.ai,
                    getDarkModeColors: c.K,
                },
                h = Object.freeze(f);
        },
        977220: (e, t, n) => {
            n.d(t, { Cs: () => u, K: () => l, ai: () => c });
            var r = n(465233),
                a = n(483054),
                i = n(295559),
                o = n(392237);
            function l(e = "audiospace") {
                return o.default.theme.highContrastEnabled ? m(d.HighContrast[e]) : m(d.Default[e]);
            }
            function c(e = "audiospace") {
                return o.default.theme.highContrastEnabled ? d.HighContrast[e] : d.Default[e];
            }
            const s = { angle: 61.63, angleUnit: "deg" };
            function u() {
                return (0, r.Z)(s);
            }
            const d = { Default: { audiospace: { primary: "#2D42FF", secondary: "#9C63FA" }, livevideo: { primary: "#F91880", secondary: "#F91880" } }, HighContrast: { audiospace: { primary: "#2C3CEF", secondary: "#8439FF" }, livevideo: { primary: "#890A46", secondary: "#890A46" } } };
            function m(e) {
                return { primary: f(e.primary), secondary: f(e.secondary) };
            }
            function f(e) {
                const t = i.xO(e),
                    n = a.$n({ color: t, coefficient: 0.5 });
                return i.vq(i.rb(n)).slice(0, -2);
            }
        },
        452505: (e, t, n) => {
            n.d(t, { ZP: () => u });
            var r = n(202784),
                a = n(466999),
                i = n(111677),
                o = n.n(i),
                l = n(392237);
            const c = 864e5;
            function s(e, t) {
                return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getYear() === t.getYear();
            }
            function u(e) {
                const t = Date.now(),
                    n = t + c,
                    r = new Date(t),
                    a = new Date(n),
                    i = new Date(e),
                    o = s(a, i),
                    l = s(r, i),
                    u = m().time(i);
                return l ? { text: m().scheduledStart({ date: f().today, time: u }), node: d(f().today, u) } : o ? { text: m().scheduledStart({ date: f().tomorrow, time: u }), node: d(f().tomorrow, u) } : { text: m().scheduledStart({ date: m().weekdayMonthAndDay(i), time: u }), node: d(m().weekdayMonthAndDay(i), u) };
            }
            function d(e, t) {
                const n = r.createElement(a.Z, { style: h.capitalize });
                return r.createElement(o().I18NFormatMessage, { $i18n: "c2588611", time: t }, r.cloneElement(n, null, o().b4349cbc({ relativeDay: e })));
            }
            const m = () => Object.freeze({ relativeDays: o().c333da63, time: o().d725a289, weekdayMonthAndDay: o().h8054d91, scheduledStart: o().d0e7b11b }),
                f = () => Object.freeze({ today: m().relativeDays(0), tomorrow: m().relativeDays(1) }),
                h = l.default.create(() => ({ capitalize: { textTransform: "capitalize" } }));
        },
        776342: (e, t, n) => {
            n.d(t, { default: () => le });
            var r = n(202784),
                a = n(807896),
                i = n(325686),
                o = n(530732),
                l = n(392237),
                c = n(111677),
                s = n.n(c),
                u = n(731708),
                d = n(642153),
                m = n(470397),
                f = n(279046),
                h = n(452505),
                p = n(794215),
                g = n(648347);
            function y(e) {
                return e.state === g.ku.live ? r.createElement(E, e) : e.state === g.ku.scheduled ? r.createElement(b, e) : e.state === g.ku.ended ? r.createElement(w, e) : e.state === g.ku.canceled ? r.createElement(v, e) : e.state === g.ku.replay ? r.createElement(C, e) : null;
            }
            function E(e) {
                const { participants: t, relatedParticipant: n, total: a } = e;
                if (!a || !t) return null;
                const o = t.map((e) => e.avatar_url).filter(Boolean),
                    l = f.Z.formatCountShort(a);
                let c = M.countInThisSpace({ count: l });
                return n?.participant?.display_name && (c = n.isSpeaker ? M.speakerPlusCountListening({ count: l, speaker: n.participant.display_name }) : M.participantPlusCountListening({ count: l, participant: n.participant.display_name })), r.createElement(i.Z, { style: x.liveContainer }, r.createElement(d.Z, { borderColor: "transparent", style: x.facePile, userAvatarSize: "medium", userAvatarUrls: o, withIncreasedSpacing: !0 }), r.createElement(S, null, c));
            }
            function b(e) {
                const { scheduledStart: t, totalInterested: n } = e;
                if (!t) return null;
                const { node: a } = (0, h.ZP)(t);
                let i = null;
                return n && (i = M.countInterested({ count: f.Z.formatCountShort(n) })), r.createElement(S, null, r.createElement(m.Z, { color: "white" }, a, n && r.createElement(u.ZP, null, i)));
            }
            function w(e) {
                return r.createElement(S, null, r.createElement(m.Z, { color: "white" }, r.createElement(u.ZP, null, M.ended), e.tunedIn && r.createElement(Z, e)));
            }
            function v(e) {
                return r.createElement(S, null, M.canceled);
            }
            function C(e) {
                return e.replayDuration && e.replayStartTime ? r.createElement(S, null, r.createElement(m.Z, { color: "white" }, e.tunedIn && r.createElement(Z, e), r.createElement(u.ZP, null, k(new Date(e.replayStartTime))), r.createElement(p.Z, { timeMs: e.replayDuration }))) : null;
            }
            function S({ children: e }) {
                return r.createElement(u.ZP, { color: "white", numberOfLines: 2, size: "subtext1" }, e);
            }
            function Z(e) {
                return e.tunedIn ? M.tunedIn({ count: f.Z.formatCountShort(e.tunedIn) }) : null;
            }
            const x = l.default.create((e) => ({ liveContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, facePile: { marginEnd: e.spaces.space8 } })),
                k = s().ccaa970f,
                M = { ended: s().fbc2003c, canceled: s().h5051dd8, countInThisSpace: s().bb5f91a3, participantPlusCountListening: s().c83eea99, speakerPlusCountListening: s().cdff6cd3, countInterested: s().df006f4f, countJoined: s().c889af33, tunedIn: s().d6f2056f };
            var L = n(868634),
                T = n(823161),
                P = n(366635);
            function A(e) {
                const { community: t, host: n } = e;
                if (!n && !t) return null;
                let a, o, l, c, s, u, d, m;
                return t ? ((o = t.image_url), (a = t.name), (l = void 0), (c = void 0), (u = "square"), (s = !1), (d = void 0), (m = void 0)) : n && ((a = n.display_name), (o = n.avatar_url), (l = n.is_blue_verified), (c = n.is_verified), (d = n.verified_type), (s = !0), (m = n.highlightedLabel)), r.createElement(i.Z, { style: z.hostInfoContainer }, r.createElement(i.Z, { style: z.hostNameContainer }, r.createElement(T.default, { "aria-hidden": !0, borderColor: "white", borderWidth: "small", focusable: !1, hasAdaptiveImage: s, shape: u, size: "medium", style: z.userAvatar, uri: o }), r.createElement(P.Z, { affiliateBadgeInfo: m, color: "white", isBlueVerified: l, isVerified: c, name: a, nameSize: "subtext1", verifiedType: d, weight: "normal", withStackedLayout: !0 })), r.createElement(R, e));
            }
            function R(e) {
                return r.createElement(r.Fragment, null, r.createElement(I, null, e.community ? B.community : B.host), e.audience === g.tz.superFollowersOnly && r.createElement(I, null, B.superFollowersOnly));
            }
            function I(e) {
                return r.createElement(L.ZP, { background: "translucentWhite", style: z.hostInfoLabel }, e.children);
            }
            const z = l.default.create((e) => ({ hostInfoContainer: { flexDirection: "row" }, hostInfoLabel: { marginStart: e.spaces.space8 }, userAvatar: { flexShrink: 0, marginEnd: e.spaces.space4 }, hostNameContainer: { flexDirection: "row", flexWrap: "nowrap", flexShrink: 1, alignItems: "center" } })),
                B = { host: s().f89a5d60, superFollowersOnly: s().ce2cfb36, community: s().df06241c };
            var D = n(157635),
                W = n(404971),
                O = n(293723),
                H = n(405303),
                F = n(466445),
                N = n(643442),
                _ = n(154003),
                V = n(254683);
            function j(e) {
                const [t, n] = r.useState(1);
                return (
                    r.useEffect(() => {
                        const e = setInterval(() => {
                            n(Math.max(Math.random(), 0.1));
                        }, 100);
                        return () => {
                            clearInterval(e);
                        };
                    }, []),
                    r.createElement(i.Z, { style: e.withoutMargin ? void 0 : U.liveSpeakingIndicator }, r.createElement(V.Z, { audioLevel: t, color: e.color || l.default.theme.colors.buttonWhite, size: l.default.theme.spacesPx.space16 }))
                );
            }
            const U = l.default.create((e) => ({ liveSpeakingIndicator: { marginEnd: e.spaces.space12 } }));
            const $ = l.default.create((e) => ({ button: { marginTop: e.spaces.space16 } })),
                q = { listenLive: s().b03e162a, joined: s().b3d828ee, pause: s().fb236728, play: s().f17dfdb6, playRecording: s().g519ec2a, reminderSet: s().c6000450, setReminder: s().db44ff5c, startNow: s().f7b6346a };
            var G = n(718480);
            function J(e) {
                const { isNarrow: t, isSmall: n, title: a } = e;
                if (!a) return null;
                const i = t || n,
                    { isLong: o, isMedium: l } = (function (e) {
                        const { weightedLength: t } = (0, G.Z)(e);
                        return { isLong: K(t, 45, 70), isMedium: K(t, 25, 44) };
                    })(a);
                let c = i ? "title4" : "title3",
                    s = 2;
                return o ? ((c = i ? "headline2" : "headline1"), (s = 3)) : l && (i ? ((c = "headline1"), (s = 3)) : ((c = "title4"), (s = 2))), r.createElement(u.ZP, { color: "white", numberOfLines: s, size: c, style: Y.title, weight: "heavy" }, a);
            }
            function K(e, t, n) {
                return e >= t && e <= n;
            }
            const Y = l.default.create((e) => ({ title: { marginVertical: e.spaces.space12 } }));
            function X() {
                return r.createElement(r.Fragment, null, r.createElement(i.Z, { style: Q.unavailableHeading }, r.createElement(u.ZP, { align: "left", color: "white", numberOfLines: 1 }, ee.spaces)), r.createElement(u.ZP, { align: "left", color: "white", weight: "bold" }, ee.detailsNotAvailable));
            }
            const Q = l.default.create((e) => ({ unavailableHeading: { marginBottom: e.spaces.space16 } })),
                ee = { spaces: s().cc1f75ac, detailsNotAvailable: s().bd08d1b2 };
            var te = n(186061);
            function ne(e) {
                const { borderStyles: t, contentStyle: n, interactiveViewProps: l, isNarrow: c, isSmall: s } = (0, te.yL)(e),
                    { host: u, participants: d, state: m } = e;
                return r.createElement(o.Z, l, r.createElement(i.Z, { style: n, testID: "wrapperView" }, m === g.ku.unavailable ? r.createElement(X, null) : u && d && m ? r.createElement(re, (0, a.Z)({}, e, { borderStyles: t, isNarrow: c, isSmall: s })) : r.createElement(D.Z, null)));
            }
            function re(e) {
                return r.createElement(r.Fragment, null, r.createElement(A, e), r.createElement(J, e), r.createElement(y, e), r.createElement(ae, e));
            }
            function ae(e) {
                if (e.withoutButton) return null;
                const t = e.button || r.createElement(ne.Button, e);
                return r.createElement(i.Z, { style: ie.buttonContainer }, t);
            }
            ne.getMinHeight = te.Q5;
            const ie = l.default.create((e) => ({ buttonContainer: { justifyContent: "flex-end", flexGrow: 1 } }));
            (ne.Button = function (e) {
                const t = e.state === g.ku.canceled,
                    n = e.state === g.ku.ended,
                    a = e.state === g.ku.live,
                    i = e.state === g.ku.scheduled,
                    o = e.state === g.ku.replay;
                if (t || n) return null;
                let c = q.listenLive,
                    s = "onMediaWhiteFilled",
                    u = r.createElement(j, { color: l.default.theme.colors[_.qh.onMediaWhiteFilled.color] });
                if (a && e.isJoined) (c = q.joined), (s = "onMediaOutlined"), (u = r.createElement(j, { color: l.default.theme.colors.white }));
                else if (i) e.isHost ? ((c = q.startNow), (u = r.createElement(W.default, null))) : e.hasReminderSet ? ((c = q.reminderSet), (u = r.createElement(O.default, null)), (s = "onMediaOutlined")) : ((c = q.setReminder), (u = r.createElement(H.default, null)));
                else if (o) {
                    const t = r.createElement(F.default, null);
                    e.isJoined ? ((u = void 0), (s = "onMediaOutlined"), e.replayIsPlaying ? ((c = q.pause), (u = r.createElement(N.default, null))) : ((c = q.play), (u = t))) : ((c = q.playRecording), (u = t));
                }
                let { onButtonClick: d } = e;
                var m;
                return (
                    d &&
                        ((m = d),
                        (d = (e) => {
                            e.stopPropagation(), e.preventDefault(), "function" == typeof m && m();
                        })),
                    r.createElement(_.ZP, { icon: u, link: e.link, onPress: d, style: $.button, type: s }, c)
                );
            }),
                (ne.StateEnum = g.ku),
                (ne.AudienceEnum = g.tz);
            const oe = Object.freeze({ Canceled: "Canceled", Ended: "Ended", NotStarted: "NotStarted", PrePublished: "PrePublished", Running: "Running", TimedOut: "TimedOut" });
            function le(e) {
                return r.createElement(ne, e);
            }
            (le.SpaceState = oe), (le.StateEnum = ne.StateEnum), (le.AudienceEnum = ne.AudienceEnum), (le.ButtonV2 = ne.Button), (le.getMinHeight = ne.getMinHeight), (le.LiveSpeakingIndicator = j), (le.formatScheduledStartMs = h.ZP);
        },
        962487: (e, t, n) => {
            n.d(t, { Z: () => l });
            n(136728);
            var r = n(202784),
                a = n(503229),
                i = n(837880),
                o = n(184971);
            function l(e) {
                const { audioLevel: t } = e,
                    n = e.barFactors || s,
                    l = n.length,
                    m = e.barWidthRatio || u,
                    E = e.gapWidthRatio || d,
                    b = e.transformBarFactor || a.Z,
                    w = r.useRef(null),
                    v = r.useRef({ width: -1, height: -1, barWidth: -1, maxBarHeight: -1, xStart: -1, xMove: -1, frame: 0, bars: new Array(l).fill([0, 0]), shouldAnimate: !0, offsetHeight: () => w.current?.offsetHeight || 0, offsetWidth: () => w.current?.offsetWidth || 0 }),
                    C = v.current.offsetHeight(),
                    S = v.current.offsetWidth();
                r.useEffect(() => {
                    v.current.bars = new Array(l).fill([0, 0]);
                }, [l]),
                    r.useEffect(() => {
                        (v.current.bars = v.current.bars.map((e, r) => {
                            let a;
                            const [, o] = e;
                            if (0 === t) a = 0;
                            else {
                                const e = n[r],
                                    o = Math.random() > 0.5 ? -1 : 1;
                                let l = 0.8 * (1 - t);
                                t < 0.5 ? (l /= 4) : t > 0.95 && (l *= 4);
                                const c = o * Math.random() * l,
                                    s = e * t + c,
                                    u = (0, i.Z)(s, 0, e);
                                a = b(u);
                            }
                            return [o, o, a];
                        })),
                            (v.current.frame = 0),
                            (v.current.shouldAnimate = p(v));
                    }),
                    r.useEffect(() => {
                        const e = window.devicePixelRatio,
                            t = w.current;
                        if (t) {
                            (v.current.width = v.current.offsetWidth() * e), (v.current.height = v.current.offsetHeight() * e), (t.width = v.current.width), (t.height = v.current.height);
                            const n = v.current.width * E;
                            (v.current.barWidth = v.current.width * m), (v.current.maxBarHeight = v.current.height), (v.current.xStart = v.current.barWidth / 2 + n / 2), (v.current.xMove = v.current.barWidth + n);
                        }
                    }, [m, E, C, S]);
                const Z = 0 !== t;
                return (
                    r.useEffect(() => {
                        const t = w.current;
                        if (!t) return;
                        const n = t.getContext("2d");
                        let r = requestAnimationFrame(function t() {
                            v.current.frame = Math.min(f - 1, v.current.frame + 1);
                            const { barWidth: a, bars: i, height: s, maxBarHeight: u, width: d, xMove: m, xStart: y } = v.current;
                            n.clearRect(0, 0, d, s);
                            for (let t = 0; t < l; t++) {
                                const [r, , l] = i[t],
                                    d = l * u,
                                    f = h[v.current.frame].progress,
                                    p = o.Z.easing.lerp(r, d, f);
                                i[t] = [r, p, l];
                                const g = Math.max(0.5, p - a),
                                    E = y + t * m,
                                    b = (s - g) / 2;
                                n.beginPath(), n.moveTo(E, b), (n.strokeStyle = e.color || c), (n.lineWidth = a), (n.lineCap = "round"), n.lineTo(E, b + g), n.stroke();
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
                    }, [v.current.shouldAnimate, Z, e.withPersistZeroLevel, e.color, l]),
                    r.createElement("canvas", { ref: w, style: y })
                );
            }
            const c = n(392237).default.theme.colors.purple500,
                s = [0.6, 1, 0.6],
                u = 2 / 12,
                d = 2 / 12,
                m = 0.041666666666666664,
                f = 24,
                h = (function () {
                    const e = o.Z.easing.cubic_bezier(o.Z.curves.expressive),
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
            const y = { width: "100%", height: "100%" };
        },
        254683: (e, t, n) => {
            n.d(t, { Z: () => E });
            var r = n(202784),
                a = n(325686),
                i = n(392237),
                o = n(962487);
            const l = (e) => ({ width: e, height: e });
            function c({ audioLevel: e }) {
                const t = r.useRef(null),
                    n = r.useRef({ size: void 0 });
                function i({ size: t }) {
                    const n = Math.ceil(t / (1.5 * d));
                    return r.createElement(
                        r.Fragment,
                        null,
                        f(d).map((a, i) => r.createElement(s, { key: h(a, i), optimized: !0, scale: m(e, t, a), size: t, width: n })),
                    );
                }
                return (
                    r.useEffect(() => {
                        n.current.size = t?.current?.getBoundingClientRect().width;
                    }, []),
                    r.createElement(a.Z, { ref: t, style: u.root }, n.current.size ? r.createElement(i, { size: n.current.size }) : null)
                );
            }
            function s({ optimized: e, scale: t, size: n, width: i }) {
                const o = r.useRef(null),
                    l = { borderRadius: `${Math.ceil(i / 2)}px`, maxHeight: `${t}px`, minHeight: `${i}px`, width: `${i}px`, ...p(e, t, n) };
                return (
                    r.useEffect(() => {
                        const e = requestAnimationFrame(function () {
                            const e = o.current,
                                t = e?.style?.maxHeight;
                            e && t && (e.style.height = t);
                        });
                        return function () {
                            cancelAnimationFrame(e);
                        };
                    }, [t]),
                    r.createElement(a.Z, { ref: o, style: [l, u.bar] })
                );
            }
            const u = i.default.create((e) => ({ root: { alignItems: "center", display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", width: "100%" }, bar: { animationDuration: "600ms", animationKeyframes: [{ "0%": { transform: [{ scaleY: "0.8" }] }, "50%": { transform: [{ scaleY: "1" }] }, "100%": { transform: [{ scaleY: "0.8" }] } }], animationTimingFunction: "linear", animationIterationCount: "infinite", backgroundColor: "#794BC4", display: "inline-block", margin: "auto", pointerEvents: "none", position: "relative", transition: "height 200ms steps(6, jump-none)", willChange: "height, transform" } })),
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
                const { color: t, muted: n, useDOM: a = !1, withPersistZeroLevel: i } = e,
                    l = n ? 0 : e.audioLevel;
                return a ? r.createElement(c, { audioLevel: l }) : r.createElement(o.Z, { audioLevel: l, color: t, withPersistZeroLevel: i });
            }
            const y = i.default.create((e) => ({ root: { display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" } })),
                E = function ({ size: e, ...t }) {
                    const n = { ...l(e) };
                    return r.createElement(a.Z, { style: [n, y.root] }, r.createElement(g, t));
                };
        },
        451566: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(807896),
                a = n(202784),
                i = n(928316),
                o = n(372612),
                l = n(392237);
            class c extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._updateStyles = (e) => {
                            if (e) {
                                const t = i.findDOMNode(e);
                                t &&
                                    [...t.childNodes].forEach((e) => {
                                        e instanceof HTMLElement && ((e.style.borderColor = "transparent"), (e.style.borderWidth = "1px"));
                                    });
                            }
                        });
                }
                render() {
                    const { colors: e } = l.default.theme;
                    return a.createElement(o.Z, (0, r.Z)({ activeThumbColor: e.primary, activeTrackColor: e.lightPrimary, ref: this._updateStyles }, this.props));
                }
            }
            const s = c;
        },
        818080: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(111677),
                a = n.n(r);
            const i = 1e3,
                o = 3600,
                l = 36e5,
                c = 864e5,
                s = a().d925a4f9,
                u = a().ib15cddb,
                d = a().db9ed19f,
                m = a().e1ebcecb,
                f = a().cc1da1fd,
                h = {
                    formatAsISO8601Duration: (e) => `PT${e.hours}H${e.minutes}M${e.seconds}S`,
                    getTimeUnits: (e, t, n) => {
                        const r = (t || Math.floor)(e / i),
                            a = Math.floor(r / o),
                            l = Math.floor((r % o) / 60),
                            c = { seconds: Math.floor(r % 60), minutes: l, hours: a };
                        return n && (a ? ((c.minutes = 0), (c.seconds = 0)) : l && (c.seconds = 0)), c;
                    },
                    getTimeLeftLabel: (e) => {
                        const t = new Date(e).getTime() - Date.now(),
                            n = Math.floor(t / i),
                            r = Math.floor(n / 60),
                            l = Math.floor(n / o),
                            c = Math.floor(n / 86400);
                        return l >= 24 ? d({ count: c, formattedCount: a().ia24dc8d(c) }) : r >= 60 ? u({ count: l, formattedCount: a().ia24dc8d(l) }) : s({ count: r, formattedCount: a().ia24dc8d(r) });
                    },
                    getTimeLeftLabelTwoUnits: (e) => {
                        const t = new Date(e).getTime() - Date.now(),
                            n = Math.floor(t / c),
                            r = Math.floor(t / l),
                            i = Math.floor(t / 6e4);
                        if (n >= 1) {
                            const e = Math.floor((t - n * c) / l);
                            return m({ days: n, hours: e, formattedDays: a().ia24dc8d(n), formattedHours: a().ia24dc8d(e) });
                        }
                        if (r >= 1) {
                            const e = Math.floor((t - r * l) / 6e4);
                            return f({ hours: r, mins: e, formattedHours: a().ia24dc8d(r), formattedMins: a().ia24dc8d(e) });
                        }
                        return s({ count: i, formattedCount: a().ia24dc8d(i) });
                    },
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555.0c10a58a.js.map
