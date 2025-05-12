"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows~bundle.SuperFollowsSubscribe"],
    {
        478039: (e, t, n) => {
            n.d(t, { Z: () => z });
            var o = n(807896),
                a = n(202784),
                r = n(325686),
                i = n(708852),
                c = n(392237),
                s = n(674132),
                l = n.n(s),
                d = n(776588);
            const u = c.default.create((e) => ({ root: { alignItems: "center", height: 20 } })),
                m = (e) => {
                    const { wordHeightPx: t, wordPercentWidths: n } = e;
                    return a.createElement(d.Z, { color: "text", style: u.root, withBorderRadius: !0, wordHeightPx: t, wordPercentWidths: n });
                };
            var p = n(682474);
            const g = c.default.create((e) => ({ root: { border: "none", backgroundColor: e.colors.gray300, borderRadius: e.borderRadii.infinite, height: c.default.theme.spaces.space40, width: c.default.theme.spaces.space40 } })),
                b = () => a.createElement(p.Z, { ratio: 1, style: g.root }),
                w = [100],
                h = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", gap: e.spaces.space4, height: 20 } })),
                f = (e) => {
                    const { wordHeightPx: t } = e;
                    return a.createElement(r.Z, { style: h.root }, a.createElement(d.Z, { color: "text", maxWidthPx: 28, withBorderRadius: !0, wordHeightPx: t, wordPercentWidths: w }), a.createElement(d.Z, { color: "gray700", maxWidthPx: 64, withBorderRadius: !0, wordHeightPx: t, wordPercentWidths: w }));
                },
                y = c.default.create((e) => ({ root: { flexDirection: "row", marginBottom: e.spaces.space2, overflow: "hidden", padding: e.spaces.space16 }, content: { flexGrow: 1, gap: e.spaces.space4, marginStart: e.spaces.space12 } })),
                E = (e) => {
                    const { wordPercentWidths: t } = e;
                    return a.createElement(r.Z, { style: y.root }, a.createElement(b, null), a.createElement(r.Z, { style: y.content }, a.createElement(f, { wordHeightPx: 3 }), a.createElement(m, { wordHeightPx: 3, wordPercentWidths: t })));
                };
            var C = n(823161),
                Z = n(366635),
                k = n(782299);
            const v = c.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge, boxShadow: e.boxShadows.medium, display: "flex", flexDirection: "row", overflow: "hidden", padding: e.spaces.space16, width: "100%" }, content: { flexGrow: 1, gap: e.spaces.space4, marginStart: e.spaces.space12 }, indicator: { alignSelf: "flex-start" } })),
                x = (e) => {
                    const { imageUrl: t, isBlueVerified: n, isProtected: o, isVerified: i, name: c, screenName: s, wordPercentWidths: l } = e;
                    return a.createElement(r.Z, { style: v.root }, t ? a.createElement(C.default, { focusable: !1, size: "xLarge", uri: t }) : a.createElement(b, null), a.createElement(r.Z, { style: v.content }, c && s ? a.createElement(Z.Z, { isBlueVerified: n, isProtected: o, isVerified: i, name: c, nameSize: "body", screenName: s, screenNameSize: "body" }) : a.createElement(f, { wordHeightPx: 4 }), a.createElement(k.Z, { style: v.indicator, type: "superFollower" }), a.createElement(m, { wordHeightPx: 4, wordPercentWidths: l })));
                },
                S = [12, 8, 6, 12],
                P = [13, 8, 5, 19, 8, 6],
                A = [12, 8, 5, 19, 17, 14],
                I = c.default.create((e) => ({ root: { alignItems: "center", display: "flex", justifyContent: "flex-end", position: "relative", userSelect: "none", width: "100%" }, withBackgroundTweets: { paddingHorizontal: e.spaces.space56 }, backgroundTweets: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge, boxShadow: e.boxShadows.medium, height: 260, justifyContent: "space-between", width: "100%" }, focalTweet: { bottom: 0, justifyContent: "center", position: "absolute", start: 0, end: 0, top: 0 } })),
                R = (e) => {
                    const { style: t, withBackgroundTweets: n, ...i } = e,
                        c = a.createElement(x, (0, o.Z)({}, i, { wordPercentWidths: A }));
                    return a.createElement(r.Z, { style: [I.root, n && I.withBackgroundTweets, t] }, n ? a.createElement(a.Fragment, null, a.createElement(r.Z, { style: I.backgroundTweets }, a.createElement(E, { wordPercentWidths: P }), a.createElement(E, { wordPercentWidths: S })), a.createElement(r.Z, { style: I.focalTweet }, c)) : c);
                };
            var T = n(783373);
            const W = l().b600eb88,
                D = l().fd75ca92,
                z = (e) => {
                    const { style: t, ...n } = e,
                        c = (0, i.D2)();
                    return a.createElement(r.Z, { style: [M.root, c && M.rootWide, t] }, a.createElement(T.Z, { description: D, title: W }), a.createElement(R, (0, o.Z)({}, n, { style: M.badge })));
                },
                M = c.default.create((e) => ({ root: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space32, paddingTop: e.spaces.space48 }, rootWide: { paddingHorizontal: e.spaces.space48 }, description: { marginTop: e.spaces.space8 }, badge: { alignSelf: "center", marginBottom: e.spaces.space16, marginTop: e.spaces.space32, maxWidth: 327 } }));
        },
        439412: (e, t, n) => {
            n.d(t, { Z: () => E });
            var o = n(202784),
                a = n(325686),
                r = n(371344),
                i = n(731708),
                c = n(130304),
                s = n(392237),
                l = n(674132),
                d = n.n(l),
                u = n(823161),
                m = n(909377),
                p = n(520913);
            const g = d().c39b0e24,
                b = d().f0c99eff,
                w = (e) => {
                    const { imageUrl: t, screenName: n, style: r } = e;
                    return o.createElement(a.Z, { style: [h.signature, r] }, o.createElement(i.ZP, { color: "gray700", weight: "bold" }, b({ screenName: n ?? g })), t ? o.createElement(u.default, { size: "medium", uri: t }) : o.createElement(m.Z, { Icon: p.default, size: "medium" }));
                },
                h = s.default.create((e) => ({ signature: { display: "inline-flex", alignItems: "center", flexDirection: "row", gap: e.spaces.space8 } })),
                f = d().a329ce88,
                y = (e, t) => {
                    const { autoFocus: n, imageUrl: s, onChange: l, screenName: d, style: u, value: m, valueMaxLength: p } = e;
                    return o.createElement(a.Z, { style: [C.root, u] }, l ? o.createElement(r.Z, { autoFocus: n, inputStyle: C.descriptionInput, isCompact: !0, leftAligned: !0, maxNumberOfLines: Number.MAX_SAFE_INTEGER, multiline: !0, name: "description", numberOfLines: 1, onChange: l, placeholder: f, ref: t, style: C.description, value: m }) : o.createElement(i.ZP, { color: "gray700", style: C.description }, m), o.createElement(a.Z, { style: C.signatureWrapper }, o.createElement(w, { imageUrl: s, screenName: d, style: [C.signature, !m && C.visibilityHidden] }), l && p && o.createElement(c.Z, { count: m?.length ?? 0, maxCount: p, warningCount: p - 10 })));
                },
                E = o.forwardRef(y),
                C = s.default.create((e) => ({ root: { display: "inline-flex", alignItems: "start", flexDirection: "column" }, description: { borderRadius: 0, borderColor: "transparent", minHeight: 0, width: "100%" }, descriptionInput: { color: e.colors.gray700, minHeight: 0, paddingBottom: 0, paddingStart: 0, paddingEnd: 0, paddingTop: 0 }, signatureWrapper: { alignItems: "center", flexDirection: "row", marginTop: e.spaces.space12, width: "100%" }, signature: { flex: 1 }, visibilityHidden: { visibility: "hidden" } }));
        },
        734189: (e, t, n) => {
            n.d(t, { Z: () => A });
            var o = n(807896),
                a = n(202784),
                r = n(325686),
                i = n(708852),
                c = n(731708),
                s = n(392237),
                l = n(674132),
                d = n.n(l),
                u = n(776588),
                m = n(868634),
                p = n(40610),
                g = n(990804),
                b = n(215337),
                w = n(491831),
                h = n(443781);
            const f = [17, 7, 14, 11, 8, 12, 4, 11],
                y = [0, 0.25, 0.75, 1],
                E = [0, 0.5, 0.75, 1],
                C = a.createElement(d().I18NFormatMessage, { $i18n: "ge990f4f" }, a.createElement(c.ZP, { size: "subtext3" }, d().f324fb6c)),
                Z = a.createElement(d().I18NFormatMessage, { $i18n: "e8e2dcd3" }, a.createElement(c.ZP, { size: "subtext3" }, d().c654a3aa)),
                k = s.default.create((e) => ({ root: { alignItems: "center", display: "flex", justifyContent: "flex-end", position: "relative", userSelect: "none", width: "100%" }, educationCallout: { marginBottom: e.spaces.space8, marginHorizontal: e.spaces.space24, marginTop: e.spaces.space16 }, tweetActionBarStyle: { marginHorizontal: e.spaces.space24 }, fakeBodyCopy: { paddingHorizontal: e.spaces.space28, width: "100%" }, gradient: { height: e.spaces.space56, position: "absolute", top: 0, width: "100%" }, mockTweet: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge, boxShadow: e.boxShadows.medium, marginTop: e.spaces.space16, paddingVertical: e.spaces.space16, width: "100%" }, maxWidth: { maxWidth: "fit-content" } })),
                v = ({ style: e }) => {
                    const t = (e) => `${s.default.theme.colors.cellBackground}${e || ""}`,
                        n = s.default.theme.colors.transparent,
                        { featureSwitches: o } = a.useContext(h.rC),
                        i = o.isTrue("super_follow_tweet_label_redesign_enabled");
                    return a.createElement(r.Z, { style: [k.root, e] }, a.createElement(r.Z, { style: k.mockTweet }, a.createElement(r.Z, { style: k.fakeBodyCopy }, a.createElement(u.Z, { wordPercentWidths: f })), a.createElement(r.Z, { style: k.educationCallout }, i ? a.createElement(m.ZP, { background: "gray0" }, C) : a.createElement(p.Z.Custom, { Icon: w.default, backgroundColor: "plum0", style: k.maxWidth, text: Z, withColoredIcon: !0 })), a.createElement(r.Z, { style: k.tweetActionBarStyle }, a.createElement(g.Z, { bookmarkCount: 0, displayStyle: "block", isLiked: !1, isPresentational: !0, isRetweeted: !1, likeCount: 0, replyCount: 0, retweetCount: 0, tweetLink: "" }))), a.createElement(b.Z, { colors: [t(), t(), t(50), n], locations: y, style: k.gradient }), a.createElement(b.Z, { colors: [t(), t(99), t(50), n], locations: E, style: k.gradient }));
                };
            var x = n(439412);
            const S = d().da48ebf6,
                P = (e, t) => {
                    const { style: n, withVisibilityCallout: s, ...l } = e,
                        d = (0, i.D2)();
                    return a.createElement(r.Z, { style: [I.root, d && I.rootWide, n] }, a.createElement(c.ZP, { "aria-level": 2, role: "heading", size: "title4", weight: "heavy" }, S), a.createElement(x.Z, (0, o.Z)({}, l, { ref: t, style: I.description })), s && a.createElement(v, { style: I.callout }));
                },
                A = a.forwardRef(P),
                I = s.default.create((e) => ({ root: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space32, paddingTop: e.spaces.space48 }, rootWide: { paddingHorizontal: e.spaces.space48 }, description: { marginTop: e.spaces.space8 }, callout: { alignSelf: "center", marginVertical: e.spaces.space16, maxWidth: 327 } }));
        },
        366708: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(202784),
                a = n(325686),
                r = n(708852),
                i = n(392237),
                c = n(378587);
            const s = ({ children: e, style: t }) => {
                    const n = (0, r.D2)();
                    return o.createElement(a.Z, { style: [l.root, n && l.rootWide, t] }, o.createElement(a.Z, { style: l.blob }), e);
                },
                l = i.default.create((e) => ({ root: { minHeight: 240, paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space32, paddingTop: e.spaces.space48, position: "relative" }, rootWide: { paddingHorizontal: e.spaces.space48 }, blob: { backgroundImage: c.Z.getBackgroundImage(), clipPath: "ellipse(100% 100% at 38% 0%)", position: "absolute", start: 0, end: 0, top: 0, height: "100%", zIndex: -1 } }));
        },
        513120: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(202784),
                a = n(325686),
                r = n(708852),
                i = n(392237);
            const c = ({ children: e, style: t }, n) => {
                    const i = (0, r.D2)() ? l.paddingWide : l.paddingNarrow;
                    return o.createElement(a.Z, { ref: n, style: [t, i] }, e);
                },
                s = o.forwardRef(c),
                l = i.default.create((e) => ({ paddingWide: { paddingHorizontal: e.spaces.space72 }, paddingNarrow: { paddingHorizontal: e.spaces.space32 } }));
        },
        724345: (e, t, n) => {
            n.d(t, { Z: () => o.Z });
            var o = n(513120);
        },
        357770: (e, t, n) => {
            n.d(t, { Z: () => c, j: () => i.j });
            var o = n(202784),
                a = n(731708),
                r = n(392237),
                i = n(698537);
            const c = (e) => {
                    const { "aria-label": t, headline: n, illustration: r, subtext: c } = e;
                    return o.createElement(o.Fragment, null, r && o.createElement(i.Z, { "aria-label": t, style: s.illustration, type: r }), o.createElement(a.ZP, { "aria-level": 2, role: "heading", size: "title2", style: r && s.headline, weight: "heavy" }, n), c && o.createElement(a.ZP, { color: "gray700", style: s.subtext }, c));
                },
                s = r.default.create((e) => ({ headline: { marginTop: e.spaces.space32 }, illustration: { maxWidth: "100%" }, subtext: { marginTop: e.spaces.space12 } }));
        },
        569778: (e, t, n) => {
            n.d(t, { Z: () => o.Z, j: () => o.j });
            var o = n(357770);
        },
        397377: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(202784),
                a = n(325686),
                r = n(708852),
                i = n(823161),
                c = n(909377),
                s = n(371344),
                l = n(130304),
                d = n(731708),
                u = n(392237),
                m = n(674132),
                p = n.n(m),
                g = n(520913);
            const b = p().a4ed9072,
                w = (e, t) => {
                    const { autoFocus: n, imageUrl: u, onChange: m, style: p, value: w, valueMaxLength: h } = e,
                        y = (0, r.$u)();
                    return o.createElement(a.Z, { style: [f.root, p] }, u ? o.createElement(i.default, { size: y ? "xxxLarge" : "xLarge", uri: u }) : o.createElement(c.Z, { Icon: g.default }), m ? o.createElement(o.Fragment, null, o.createElement(s.Z, { autoFocus: n, inputStyle: [f.creatorIntroInput, !!h && f.creatorIntroInputWithCountdownCircle], isCompact: !0, leftAligned: !0, maxNumberOfLines: Number.MAX_SAFE_INTEGER, multiline: !0, name: "creatorIntro", numberOfLines: 1, onChange: m, placeholder: b, ref: t, style: f.creatorIntro, value: w }), h && o.createElement(a.Z, { style: f.countdownCircle }, o.createElement(l.Z, { count: w?.length ?? 0, maxCount: h, warningCount: h - 10 }))) : o.createElement(d.ZP, { style: [f.creatorIntro, f.creatorIntroReadOnly] }, w));
                },
                h = o.forwardRef(w),
                f = u.default.create((e) => ({ root: { display: "inline-flex", alignItems: "start", flexDirection: "row", gap: e.spaces.space12 }, creatorIntro: { backgroundColor: e.colors.cellBackground, borderBottomStartRadius: e.borderRadii.large, borderBottomEndRadius: e.borderRadii.large, borderTopStartRadius: 0, borderTopEndRadius: e.borderRadii.large, boxShadow: e.boxShadows.small, width: "100%" }, creatorIntroReadOnly: { padding: e.spaces.space24 }, creatorIntroInput: { minHeight: 0, paddingBottom: e.spaces.space24, paddingStart: e.spaces.space24, paddingEnd: e.spaces.space24, paddingTop: e.spaces.space24 }, creatorIntroInputWithCountdownCircle: { paddingBottom: e.spaces.space40 }, countdownCircle: { position: "absolute", bottom: e.spaces.space8, end: e.spaces.space8 } }));
        },
        144861: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(807896),
                a = n(202784),
                r = n(731708),
                i = n(392237),
                c = n(674132),
                s = n.n(c),
                l = n(366708),
                d = n(397377);
            const u = s().d409ce3c,
                m = (e, t) => {
                    const { name: n, style: i, ...c } = e;
                    return a.createElement(l.Z, { style: i }, a.createElement(r.ZP, { "aria-level": 1, role: "heading", size: "title3", weight: "heavy" }, a.createElement(s().I18NFormatMessage, { $i18n: "g7970bc7", name: n ?? "" }, a.createElement("br", null))), a.createElement(r.ZP, { style: g.subheader }, u), a.createElement(d.Z, (0, o.Z)({}, c, { ref: t, style: g.intro })));
                },
                p = a.forwardRef(m),
                g = i.default.create((e) => ({ subheader: { marginTop: e.spaces.space8 }, intro: { marginTop: e.spaces.space36 } }));
        },
        8685: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                a = n(478039),
                r = n(734189),
                i = n(144861);
            const c = ({ badgeImageUrl: e, badgeName: t, badgeScreenName: n, descriptionValue: c, imageUrl: s, introValue: l, isBlueVerified: d, isProtected: u, isVerified: m, name: p, screenName: g }) => o.createElement(o.Fragment, null, o.createElement(i.Z, { imageUrl: s, name: p, value: l }), o.createElement(r.Z, { imageUrl: s, screenName: g, value: c, withVisibilityCallout: !0 }), o.createElement(a.Z, { imageUrl: e, isBlueVerified: d, isProtected: u, isVerified: m, name: t, screenName: n, withBackgroundTweets: !0 }));
        },
        783373: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                a = n(325686),
                r = n(731708),
                i = n(392237);
            const c = (e) => {
                    const { color: t, description: n, style: i, title: c } = e;
                    return o.createElement(a.Z, { style: i }, o.createElement(r.ZP, { "aria-level": 2, color: t, role: "heading", size: "title4", weight: "heavy" }, c), n && o.createElement(r.ZP, { color: "gray700", style: s.description }, n));
                },
                s = i.default.create((e) => ({ description: { marginTop: e.spaces.space12 } }));
        },
        130304: (e, t, n) => {
            n.d(t, { Z: () => b });
            var o = n(202784),
                a = n(466999),
                r = n(325686),
                i = n(674132),
                c = n.n(i),
                s = n(408369),
                l = n(764503),
                d = n(392237);
            const u = c().c2fc878d,
                m = c().db11b27f,
                p = (e) => e,
                g = d.default.create(({ colors: e }) => ({ root: { alignItems: "flex-start", minHeight: 30, minWidth: 30 }, center: { alignItems: "center", justifyContent: "center", margin: "auto" }, progressCircle: { transitionDuration: "0.2s", transitionProperty: "opacity" }, hide: { opacity: 0 }, text: { fontSize: 13, lineHeight: "0.8", minWidth: 16, textAlign: "center" }, gray700: { color: e.gray700 }, red500: { color: e.red500 } })),
                b = (e) => {
                    const { count: t, maxCount: n, formatNumber: i = p, warningCount: c } = e,
                        b = n - t,
                        w = b >= 0 ? m({ count: i(b) }) : u({ count: i(t - n) }),
                        h = t >= c ? o.createElement(a.Z, { "aria-atomic": !0, "aria-live": "polite", style: d.default.visuallyHidden }, w) : null,
                        f = (0, s.Z)(b, n),
                        y = t >= n ? "red500" : t >= c ? "yellow500" : "primary",
                        E = o.createElement(l.Z, { color: y, progress: f, size: t >= c ? 30 : 20, style: [g.progressCircle, b <= -10 && g.hide] }),
                        C = t >= c ? o.createElement(a.Z, { style: [g.text, b > 0 ? g.gray700 : g.red500] }, i(b)) : null;
                    return o.createElement(r.Z, { style: [g.root, g.center], testID: "countdown-circle" }, h, E, o.createElement(r.Z, { style: [d.default.absoluteFill, g.center] }, C));
                };
        },
        721083: (e, t, n) => {
            n.d(t, { Z: () => k });
            var o = n(807896),
                a = (n(571372), n(202784)),
                r = n(900664),
                i = n(674132),
                c = n.n(i),
                s = n(432181),
                l = n(761744),
                d = n(323265),
                u = n(811176),
                m = n(233184),
                p = n(522171),
                g = n(40644),
                b = n(551611);
            const w = c().d636ebc6,
                h = c().eb3a8b0c,
                f = c().j472ecfc,
                y = c().a0af935c,
                E = c().dac92b0d,
                C = c().aa650427;
            function Z(e = new Error("TweetActionLike.onError")) {
                m.Z.report(e);
            }
            function k({ actionMenuDescription: e, activeColor: t = "magenta500", color: n, count: i, enableActionMenu: c = !1, enableKeyboardShortcuts: m, iconSize: k, isDisabled: v, isFaded: x, isLiked: S, isPresentational: P, likeActionIconContainerRef: A, likeTransitionAnimation: I, link: R, onAnimationStart: T, onError: W = Z, onLikeActionSelect: D, onMenuCancel: z, onPress: M, style: B, testIDs: L, withCount: F }) {
                const H = F && "number" == typeof i;
                let N = S ? y : w;
                const V = a.useMemo(() => ({ label: S ? h : w }), [S]);
                H && (N = S ? C({ count: i }) : E({ count: i }));
                const _ = (function ({ isLiked: e, likeTransitionAnimation: t }) {
                    const [n, o] = a.useState(!1),
                        r = a.useRef(e);
                    return (
                        a.useEffect(() => {
                            ("object" == typeof t || b.ZP.check(t)) && e !== r.current && (o(e), (r.current = e));
                        }, [e, t]),
                        { onAnimationEnd: a.useCallback(() => o(!1), [o]), showAnimation: n, transitionAnimationUrl: t }
                    );
                })({ isLiked: S, likeTransitionAnimation: I });
                const K = a.useCallback(
                    (t) => {
                        const n = [
                            {
                                text: f,
                                onClick() {
                                    t(), D?.();
                                },
                                testID: L?.like,
                                Icon: s.default,
                            },
                        ];
                        return a.createElement(u.Z, {
                            description: e,
                            items: n,
                            onCloseRequested: function () {
                                t(), z?.();
                            },
                        });
                    },
                    [e, D, z, L?.like],
                );
                return a.createElement(
                    g.ZP,
                    (0, o.Z)({}, _, {
                        ActiveIcon: l.default,
                        Icon: s.default,
                        actionIconContainerRef: A,
                        activeColor: t,
                        "aria-label": N,
                        color: n,
                        count: i,
                        enableKeyboardShortcuts: m,
                        hoverLabel: V,
                        iconSize: k,
                        isActive: S,
                        isDisabled: v,
                        isFaded: x,
                        isPresentational: P,
                        keyboardShortcut: p.Z.shortcuts.like,
                        link: R,
                        onAnimationStart: T,
                        onError: W,
                        onPress: function () {
                            d.ZP.isFirefox() || r.Z.vibrate(5), M?.();
                        },
                        renderMenu: c ? K : void 0,
                        style: B,
                        testID: L && (S ? L.unlike : L.like),
                        withCount: H,
                    }),
                );
            }
        },
        15342: (e, t, n) => {
            n.d(t, { d: () => k, Z: () => v });
            var o = n(202784),
                a = n(674132),
                r = n.n(a),
                i = n(720600),
                c = n(155353),
                s = n(522171),
                l = n(40644),
                d = (n(136728), n(885724)),
                u = n(53674),
                m = n(811176);
            const p = r().f2919fb8,
                g = r().fd1e5446,
                b = r().bb5c5864,
                w = r().f65198c2;
            function h(e) {
                const t = (function ({ excludeRetweetAction: e = !1, excludeRetweetWithCommentAction: t = !1, excludeViewQuotesRetweetsAction: n = !1, isRetweeted: a, onMenuCancel: r, onQuoteTweetActionSelect: i, onRetweetActionSelect: s, onUnretweetActionSelect: l, onViewEngagementsActionSelect: m, retweetActionSubText: h, retweetWithCommentLink: f, testIDs: y, viewQuotesRetweetsLink: E }) {
                        const C = y?.retweetConfirm,
                            Z = y?.unretweetConfirm;
                        return o.useMemo(() => {
                            const o = [];
                            return (
                                a ||
                                    e ||
                                    o.push({
                                        text: p,
                                        subText: h,
                                        onClick() {
                                            r?.(), s?.();
                                        },
                                        testID: C,
                                        Icon: c.default,
                                    }),
                                a &&
                                    o.push({
                                        text: g,
                                        onClick() {
                                            r?.(), l?.();
                                        },
                                        testID: Z,
                                        Icon: c.default,
                                    }),
                                t ||
                                    o.push({
                                        text: b,
                                        onClick() {
                                            r?.(), i?.();
                                        },
                                        Icon: d.default,
                                        link: f,
                                    }),
                                n ||
                                    o.push({
                                        text: w,
                                        onClick() {
                                            r?.(), m?.();
                                        },
                                        Icon: u.default,
                                        link: E,
                                    }),
                                o
                            );
                        }, [e, t, n, a, r, i, s, l, m, h, f, C, Z, E]);
                    })(e),
                    { onMenuCancel: n } = e,
                    a = o.useCallback(() => {
                        n?.();
                    }, [n]);
                return o.createElement(m.Z, { description: e.actionMenuDescription, items: t, onCloseRequested: a });
            }
            const f = r().f2919fb8,
                y = r().fd1e5446,
                E = r().b8c465e2,
                C = r().dfad425d,
                Z = r().a386dc55,
                k = { RETWEET: "retweet", UNRETWEET: "unretweet", QUOTE: "quote", VIEW_ENGAGEMENTS: "view_engagements" };
            function v({ actionMenuDescription: e, activeColor: t = "green500", color: n, count: a, enableActionMenu: r = !1, enableKeyboardShortcuts: d, excludeRetweetAction: u, excludeRetweetWithCommentAction: m, excludeViewQuotesRetweetsAction: p, iconSize: g, isDisabled: b, isFaded: w, isPresentational: k, isRetweeted: v, onMenuCancel: x, onPress: S, onQuoteTweetActionSelect: P, onRetweetActionSelect: A, onUnretweetActionSelect: I, onViewEngagementsActionSelect: R, retweetActionSubText: T, retweetWithCommentLink: W, style: D, testIDs: z, viewQuotesRetweetsLink: M, withCount: B }) {
                const L = B && "number" == typeof a;
                let F = v ? E : f;
                L && (F = v ? Z({ count: a }) : C({ count: a }));
                const H = o.useMemo(() => ({ label: v ? y : f }), [v]),
                    N = o.useMemo(() => ({ retweetConfirm: z?.retweetConfirm, unretweetConfirm: z?.unretweetConfirm }), [z?.retweetConfirm, z?.unretweetConfirm]),
                    V = o.useCallback(
                        (t) =>
                            o.createElement(h, {
                                actionMenuDescription: e,
                                excludeRetweetAction: u,
                                excludeRetweetWithCommentAction: m,
                                excludeViewQuotesRetweetsAction: p,
                                isRetweeted: v,
                                onMenuCancel: () => {
                                    t(), x?.();
                                },
                                onQuoteTweetActionSelect: P,
                                onRetweetActionSelect: A,
                                onUnretweetActionSelect: I,
                                onViewEngagementsActionSelect: R,
                                retweetActionSubText: T,
                                retweetWithCommentLink: W,
                                testIDs: N,
                                viewQuotesRetweetsLink: M,
                            }),
                        [e, u, m, p, v, x, P, A, I, R, T, N, W, M],
                    );
                return o.createElement(l.ZP, { ActiveIcon: i.default, Icon: c.default, activeColor: t, "aria-label": F, color: n, count: a, enableKeyboardShortcuts: d, hoverLabel: H, iconSize: g, isActive: v, isDisabled: b, isFaded: w, isPresentational: k, keyboardShortcut: s.Z.shortcuts.retweet, onPress: S, renderMenu: r ? V : void 0, style: D, testID: v ? z?.unretweet : z?.retweet, withCount: L });
            }
        },
        990804: (e, t, n) => {
            n.d(t, { Z: () => se });
            var o = n(202784),
                a = n(325686),
                r = n(674132),
                i = n.n(r),
                c = n(976145),
                s = n(235902),
                l = n(392237);
            function d({ "aria-label": e, "aria-labelledby": t, children: n, displayStyle: r = "inline", id: i, style: c }) {
                const l = s.ZP.useProps().withEdgeToEdgeTweetAnatomy();
                return o.createElement(a.Z, { "aria-label": e, "aria-labelledby": t, id: i, role: "group", style: [u.container, u[`${r}Container`], l && u.noMaxWidth, c] }, n);
            }
            const u = l.default.create((e) => ({ container: { columnGap: e.spacesPx.space4, flexDirection: "row" }, inlineContainer: { justifyContent: "space-between", maxWidth: 600 }, noMaxWidth: { maxWidth: "none" }, blockContainer: { alignItems: "stretch", height: "100%", justifyContent: "space-around", minHeight: "1.875rem", paddingHorizontal: e.spaces.space4 } }));
            var m = n(807896),
                p = n(53674),
                g = n(40644);
            const b = { label: i().f2849136 },
                w = i().f206e970,
                h = { label: i().b05a39b2 },
                f = i().c7073f5b;
            n(571372);
            var y = n(900664),
                E = n(73416),
                C = n(883069),
                Z = n(323265),
                k = n(233184),
                v = n(522171);
            const x = i().dbc0c2f4,
                S = i().hf417cf0,
                P = i().c7a989ce,
                A = i().febd30ed,
                I = i().a8dc9587;
            function R(e = new Error("TweetActionBookmark.onError")) {
                k.Z.report(e);
            }
            var T = n(721083),
                W = n(194661);
            const D = i().hdf7226a,
                z = { label: D },
                M = i().c9940955;
            function B({ activeColor: e, color: t, count: n, enableKeyboardShortcuts: a, iconSize: r, isDisabled: i, isFaded: c, isPresentational: s, link: l, onPress: d, renderWrapper: u, style: m, testID: p, withCount: b }) {
                const w = b && "number" == typeof n,
                    h = w ? M({ count: n }) : D;
                return o.createElement(g.ZP, { Icon: W.default, activeColor: e, "aria-label": h, color: t, count: n, enableKeyboardShortcuts: a, hoverLabel: z, iconSize: r, isDisabled: i, isFaded: c, isPresentational: s, keyboardShortcut: v.Z.shortcuts.reply, link: l, onPress: d, renderWrapper: u, style: m, testID: p, withCount: w });
            }
            const L = o.memo(B);
            var F = n(15342),
                H = n(744610),
                N = n(137937),
                V = n(461756),
                _ = n(811176),
                K = n(638236);
            const U = { label: i().dc63da16 },
                j = i().cee0585c,
                Q = N.Z.bezier(0.45, 0, 0, 1);
            const O = function ({ activeColor: e, color: t, count: n, iconSize: a, isDisabled: r, isFaded: i, isPresentational: c, onPress: s, style: l, tweetLink: d, withCount: u }) {
                    const m = u && void 0 !== n;
                    return o.createElement(g.ZP, { Icon: p.default, activeColor: e, "aria-label": m ? f({ count: n }) : w, color: t, count: n, hoverLabel: m ? h : b, iconSize: a, isDisabled: r, isFaded: i, isPresentational: c, link: !d || r || i ? void 0 : `${d}/analytics`, onPress: s, style: l, withCount: m });
                },
                $ = T.Z,
                G = L,
                q = function ({ actionItems: e, actionMenuDescription: t, activeColor: n, color: a, enableKeyboardShortcuts: r, iconSize: i, isDisabled: c, isFaded: s, isPresentational: l, onMenuCancel: d, onPress: u, shouldAnimatePrompt: m, style: p, withCount: b }) {
                    const w = o.useRef({ wiggle: new H.Z.Value(0), scale: new H.Z.Value(1) }).current,
                        h = o.useCallback(
                            (n) =>
                                o.createElement(_.Z, {
                                    description: t,
                                    items: e,
                                    onCloseRequested: function () {
                                        n(), d?.();
                                    },
                                    shouldCloseOnClick: !0,
                                }),
                            [e, t, d],
                        );
                    o.useEffect(() => {
                        m && !V.Z.reducedMotionEnabled && H.Z.parallel([H.Z.timing(w.wiggle, { toValue: 4, duration: 500, useNativeDriver: !1 }), H.Z.sequence([H.Z.timing(w.scale, y({ toValue: 1.45 })), H.Z.timing(w.scale, y({ toValue: 1 }))])]).start();
                    }, [w.scale, m, w.wiggle]);
                    const f = w.wiggle.interpolate({ inputRange: [0, 1, 2, 3, 4], outputRange: ["0deg", "15deg", "-15deg", "15deg", "0deg"] });
                    function y(e) {
                        return { ...e, useNativeDriver: !1, easing: Q, duration: 250 };
                    }
                    const E = o.useRef([{}, { transform: [{ rotate: f }, { scale: w.scale }, { translate3d: "0, 0, 0" }], justifyContent: "inherit", display: "inline-grid" }]);
                    return o.createElement(H.Z.View, { style: E.current }, o.createElement(g.ZP, { Icon: K.Z, activeColor: n, "aria-label": j, color: a, enableKeyboardShortcuts: r, hoverLabel: U, iconSize: i, isDisabled: c, isFaded: s, isPresentational: l, keyboardShortcut: v.Z.shortcuts.share, onPress: u, renderMenu: s ? void 0 : h, style: p, withCount: b }));
                },
                X = function ({ activeColor: e, color: t, count: n, enableKeyboardShortcuts: a, iconSize: r, isDisabled: i, isFaded: c, isBookmarked: s, isPresentational: l, onError: d = R, onPress: u, style: m, testIDs: p, withCount: b }) {
                    const w = b && "number" == typeof n;
                    let h = s ? P : x;
                    const f = o.useMemo(() => ({ label: s ? S : x }), [s]);
                    return (
                        w && (h = s ? I({ count: n }) : A({ count: n })),
                        o.createElement(g.ZP, {
                            ActiveIcon: E.default,
                            Icon: C.default,
                            activeColor: e,
                            "aria-label": h,
                            color: t,
                            count: n,
                            enableKeyboardShortcuts: a,
                            hoverLabel: f,
                            iconSize: r,
                            isActive: s,
                            isDisabled: i,
                            isFaded: c,
                            isPresentational: l,
                            keyboardShortcut: v.Z.shortcuts.bookmark,
                            onError: d,
                            onPress: function () {
                                Z.ZP.isFirefox() || y.Z.vibrate(5), u?.();
                            },
                            style: m,
                            testID: p && (s ? p.removeBookmark : p.bookmark),
                            withCount: w,
                        })
                    );
                };
            const J = i().a0af935c,
                Y = i().b8c465e2,
                ee = i().c7a989ce,
                te = (e) => o.createElement(se.ActionAnalytics, e),
                ne = (e) => o.createElement(se.ActionLike, e),
                oe = (e) => o.createElement(se.ActionReply, e),
                ae = (e) => o.createElement(se.ActionRetweet, e),
                re = (e) => o.createElement(se.ActionShare, e),
                ie = (e) => o.createElement(se.ActionBookmark, e),
                ce = [];
            function se({ actionSize: e = "normal", activeColor: t, bookmarkCount: n, color: r = "gray700", displayStyle: l, enableKeyboardShortcuts: u = !0, isDisabled: m = !1, isBookmarked: p = !1, isFocalTweet: g = !1, isFromProtectedAccount: b, isLiked: w, isRetweeted: h, isPresentational: f, likeCount: y, id: E, renderAnalyticsAction: C = te, renderLikeAction: Z = ne, renderReplyAction: k = oe, renderRetweetAction: v = ae, renderShareAction: x = re, renderBookmarkAction: S = ie, replyCount: P, retweetCount: A, style: I, tweetLink: R, viewCount: T, viewState: W, withAnalytics: D = !1, withCount: z = !1, withBookmark: M = !1 }) {
                const B = o.useRef(null),
                    L = s.ZP.useProps(),
                    F = L.tweetViewCountsEnabled(),
                    H = L.testViewCountShow(),
                    N = F || H,
                    V = D && N,
                    _ = D && !V,
                    K = N ? "EnabledWithCount" === W && z : z,
                    U = o.useMemo(() => {
                        if (!z) return;
                        const e = i().b03835c7,
                            t = i().g4a195e7,
                            o = i().e089b42d,
                            a = i().e0a8fe39,
                            r = i().c58b2ab7;
                        return (0, c.Z)([P ? e({ replyCount: P }) : null, A ? t({ retweetCount: A }) : null, h ? Y : null, y ? o({ likeCount: y }) : null, w ? J : null, p && M ? ee : null, n ? a({ bookmarkCount: n }) : null, T ? r({ viewCount: T }) : null].filter(Boolean), !0);
                    }, [n, p, w, h, y, P, A, T, z, M]),
                    j = o.useMemo(() => ({ color: r, iconSize: e, isDisabled: m }), [r, e, m]),
                    Q = o.useMemo(() => k({ ...j, activeColor: t, count: P, enableKeyboardShortcuts: u, isPresentational: f, withCount: z }), [j, t, P, u, f, z, k]),
                    O = o.useMemo(() => v({ ...j, activeColor: t, count: A, enableKeyboardShortcuts: u, isFromProtectedAccount: b, isRetweeted: h, isPresentational: f, withCount: z }), [j, t, A, u, b, h, f, z, v]),
                    $ = o.useMemo(() => Z({ ...j, activeColor: t, count: y, enableKeyboardShortcuts: u, isLiked: w, isPresentational: f, withCount: z }), [j, t, y, u, w, f, z, Z]),
                    G = o.useMemo(() => (V ? C({ ...j, count: T, isPresentational: f, tweetLink: R, withCount: K }) : null), [V, j, T, f, R, K, C]),
                    q = o.useMemo(() => (M ? S({ ...j, activeColor: t, count: n, enableKeyboardShortcuts: u, isPresentational: f, isBookmarked: p, withCount: z }) : null), [M, j, t, n, u, f, p, z, S]),
                    X = o.useMemo(() => (_ ? C({ ...j, isPresentational: f, tweetLink: R }) : null), [_, j, f, R, C]),
                    se = o.useMemo(() => x({ ...j, actionItems: ce, activeColor: t, enableKeyboardShortcuts: u, isPresentational: f, withCount: z && _ }), [j, t, u, f, _, z, x]);
                return o.createElement(a.Z, { ref: B }, o.createElement(d, { "aria-label": U, displayStyle: l, id: E, style: I }, Q, O, $, G, q, X, se));
            }
            (se.ActionAnalytics = O),
                (se.ActionLike = $),
                (se.ActionReply = G),
                (se.ActionRetweet = function ({ isFromProtectedAccount: e = !1, ...t }) {
                    return o.createElement(F.Z, (0, m.Z)({}, t, { excludeRetweetAction: t.excludeRetweetAction || e, excludeRetweetWithCommentAction: t.excludeRetweetWithCommentAction || e, isDisabled: t.isDisabled || (!t.isRetweeted && e) }));
                }),
                (se.ActionShare = q),
                (se.ActionBookmark = X);
        },
        408369: (e, t, n) => {
            function o(e, t) {
                return Math.min(1, 1 - e / t);
            }
            n.d(t, { Z: () => o });
        },
        900664: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = (e) => {
                "vibrate" in window.navigator && window.navigator.vibrate(e);
            };
            const a = {
                cancel() {
                    o(0);
                },
                vibrate(e) {
                    void 0 === e && (e = 400), o(e);
                },
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows~bundle.SuperFollowsSubscribe.25bfc8fa.js.map
