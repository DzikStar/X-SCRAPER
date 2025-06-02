"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows~bundle.SuperFollowsSubscribe"],
    {
        478039: (e, t, o) => {
            o.d(t, { Z: () => B });
            var n = o(807896),
                r = o(202784),
                a = o(325686),
                i = o(708852),
                c = o(392237),
                l = o(111677),
                s = o.n(l),
                d = o(776588);
            const u = c.default.create((e) => ({ root: { alignItems: "center", height: 20 } })),
                m = (e) => {
                    const { wordHeightPx: t, wordPercentWidths: o } = e;
                    return r.createElement(d.Z, { color: "text", style: u.root, withBorderRadius: !0, wordHeightPx: t, wordPercentWidths: o });
                };
            var p = o(682474);
            const b = c.default.create((e) => ({ root: { border: "none", backgroundColor: e.colors.gray300, borderRadius: e.borderRadii.infinite, height: c.default.theme.spaces.space40, width: c.default.theme.spaces.space40 } })),
                g = () => r.createElement(p.Z, { ratio: 1, style: b.root }),
                h = [100],
                w = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", gap: e.spaces.space4, height: 20 } })),
                f = (e) => {
                    const { wordHeightPx: t } = e;
                    return r.createElement(a.Z, { style: w.root }, r.createElement(d.Z, { color: "text", maxWidthPx: 28, withBorderRadius: !0, wordHeightPx: t, wordPercentWidths: h }), r.createElement(d.Z, { color: "gray700", maxWidthPx: 64, withBorderRadius: !0, wordHeightPx: t, wordPercentWidths: h }));
                },
                y = c.default.create((e) => ({ root: { flexDirection: "row", marginBottom: e.spaces.space2, overflow: "hidden", padding: e.spaces.space16 }, content: { flexGrow: 1, gap: e.spaces.space4, marginStart: e.spaces.space12 } })),
                E = (e) => {
                    const { wordPercentWidths: t } = e;
                    return r.createElement(a.Z, { style: y.root }, r.createElement(g, null), r.createElement(a.Z, { style: y.content }, r.createElement(f, { wordHeightPx: 3 }), r.createElement(m, { wordHeightPx: 3, wordPercentWidths: t })));
                };
            var C = o(823161),
                Z = o(366635),
                v = o(782299);
            const k = c.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge, boxShadow: e.boxShadows.medium, display: "flex", flexDirection: "row", overflow: "hidden", padding: e.spaces.space16, width: "100%" }, content: { flexGrow: 1, gap: e.spaces.space4, marginStart: e.spaces.space12 }, indicator: { alignSelf: "flex-start" } })),
                x = (e) => {
                    const { imageUrl: t, isBlueVerified: o, isProtected: n, isVerified: i, name: c, screenName: l, wordPercentWidths: s } = e;
                    return r.createElement(a.Z, { style: k.root }, t ? r.createElement(C.default, { focusable: !1, size: "xLarge", uri: t }) : r.createElement(g, null), r.createElement(a.Z, { style: k.content }, c && l ? r.createElement(Z.Z, { isBlueVerified: o, isProtected: n, isVerified: i, name: c, nameSize: "body", screenName: l, screenNameSize: "body" }) : r.createElement(f, { wordHeightPx: 4 }), r.createElement(v.Z, { style: k.indicator, type: "superFollower" }), r.createElement(m, { wordHeightPx: 4, wordPercentWidths: s })));
                },
                S = [12, 8, 6, 12],
                P = [13, 8, 5, 19, 8, 6],
                A = [12, 8, 5, 19, 17, 14],
                R = c.default.create((e) => ({ root: { alignItems: "center", display: "flex", justifyContent: "flex-end", position: "relative", userSelect: "none", width: "100%" }, withBackgroundTweets: { paddingHorizontal: e.spaces.space56 }, backgroundTweets: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge, boxShadow: e.boxShadows.medium, height: 260, justifyContent: "space-between", width: "100%" }, focalTweet: { bottom: 0, justifyContent: "center", position: "absolute", start: 0, end: 0, top: 0 } })),
                I = (e) => {
                    const { style: t, withBackgroundTweets: o, ...i } = e,
                        c = r.createElement(x, (0, n.Z)({}, i, { wordPercentWidths: A }));
                    return r.createElement(a.Z, { style: [R.root, o && R.withBackgroundTweets, t] }, o ? r.createElement(r.Fragment, null, r.createElement(a.Z, { style: R.backgroundTweets }, r.createElement(E, { wordPercentWidths: P }), r.createElement(E, { wordPercentWidths: S })), r.createElement(a.Z, { style: R.focalTweet }, c)) : c);
                };
            var D = o(783373);
            const W = s().b600eb88,
                T = s().fd75ca92,
                B = (e) => {
                    const { style: t, ...o } = e,
                        c = (0, i.D2)();
                    return r.createElement(a.Z, { style: [M.root, c && M.rootWide, t] }, r.createElement(D.Z, { description: T, title: W }), r.createElement(I, (0, n.Z)({}, o, { style: M.badge })));
                },
                M = c.default.create((e) => ({ root: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space32, paddingTop: e.spaces.space48 }, rootWide: { paddingHorizontal: e.spaces.space48 }, description: { marginTop: e.spaces.space8 }, badge: { alignSelf: "center", marginBottom: e.spaces.space16, marginTop: e.spaces.space32, maxWidth: 327 } }));
        },
        439412: (e, t, o) => {
            o.d(t, { Z: () => E });
            var n = o(202784),
                r = o(325686),
                a = o(371344),
                i = o(731708),
                c = o(130304),
                l = o(392237),
                s = o(111677),
                d = o.n(s),
                u = o(823161),
                m = o(909377),
                p = o(520913);
            const b = d().c39b0e24,
                g = d().f0c99eff,
                h = (e) => {
                    const { imageUrl: t, screenName: o, style: a } = e;
                    return n.createElement(r.Z, { style: [w.signature, a] }, n.createElement(i.ZP, { color: "gray700", weight: "bold" }, g({ screenName: o ?? b })), t ? n.createElement(u.default, { size: "medium", uri: t }) : n.createElement(m.Z, { Icon: p.default, size: "medium" }));
                },
                w = l.default.create((e) => ({ signature: { display: "inline-flex", alignItems: "center", flexDirection: "row", gap: e.spaces.space8 } })),
                f = d().a329ce88,
                y = (e, t) => {
                    const { autoFocus: o, imageUrl: l, onChange: s, screenName: d, style: u, value: m, valueMaxLength: p } = e;
                    return n.createElement(r.Z, { style: [C.root, u] }, s ? n.createElement(a.Z, { autoFocus: o, inputStyle: C.descriptionInput, isCompact: !0, leftAligned: !0, maxNumberOfLines: Number.MAX_SAFE_INTEGER, multiline: !0, name: "description", numberOfLines: 1, onChange: s, placeholder: f, ref: t, style: C.description, value: m }) : n.createElement(i.ZP, { color: "gray700", style: C.description }, m), n.createElement(r.Z, { style: C.signatureWrapper }, n.createElement(h, { imageUrl: l, screenName: d, style: [C.signature, !m && C.visibilityHidden] }), s && p && n.createElement(c.Z, { count: m?.length ?? 0, maxCount: p, warningCount: p - 10 })));
                },
                E = n.forwardRef(y),
                C = l.default.create((e) => ({ root: { display: "inline-flex", alignItems: "start", flexDirection: "column" }, description: { borderRadius: 0, borderColor: "transparent", minHeight: 0, width: "100%" }, descriptionInput: { color: e.colors.gray700, minHeight: 0, paddingBottom: 0, paddingStart: 0, paddingEnd: 0, paddingTop: 0 }, signatureWrapper: { alignItems: "center", flexDirection: "row", marginTop: e.spaces.space12, width: "100%" }, signature: { flex: 1 }, visibilityHidden: { visibility: "hidden" } }));
        },
        734189: (e, t, o) => {
            o.d(t, { Z: () => A });
            var n = o(807896),
                r = o(202784),
                a = o(325686),
                i = o(708852),
                c = o(731708),
                l = o(392237),
                s = o(111677),
                d = o.n(s),
                u = o(776588),
                m = o(868634),
                p = o(40610),
                b = o(990804),
                g = o(215337),
                h = o(491831),
                w = o(443781);
            const f = [17, 7, 14, 11, 8, 12, 4, 11],
                y = [0, 0.25, 0.75, 1],
                E = [0, 0.5, 0.75, 1],
                C = r.createElement(d().I18NFormatMessage, { $i18n: "ge990f4f" }, r.createElement(c.ZP, { size: "subtext3" }, d().f324fb6c)),
                Z = r.createElement(d().I18NFormatMessage, { $i18n: "e8e2dcd3" }, r.createElement(c.ZP, { size: "subtext3" }, d().c654a3aa)),
                v = l.default.create((e) => ({ root: { alignItems: "center", display: "flex", justifyContent: "flex-end", position: "relative", userSelect: "none", width: "100%" }, educationCallout: { marginBottom: e.spaces.space8, marginHorizontal: e.spaces.space24, marginTop: e.spaces.space16 }, tweetActionBarStyle: { marginHorizontal: e.spaces.space24 }, fakeBodyCopy: { paddingHorizontal: e.spaces.space28, width: "100%" }, gradient: { height: e.spaces.space56, position: "absolute", top: 0, width: "100%" }, mockTweet: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge, boxShadow: e.boxShadows.medium, marginTop: e.spaces.space16, paddingVertical: e.spaces.space16, width: "100%" }, maxWidth: { maxWidth: "fit-content" } })),
                k = ({ style: e }) => {
                    const t = (e) => `${l.default.theme.colors.cellBackground}${e || ""}`,
                        o = l.default.theme.colors.transparent,
                        { featureSwitches: n } = r.useContext(w.rC),
                        i = n.isTrue("super_follow_tweet_label_redesign_enabled");
                    return r.createElement(a.Z, { style: [v.root, e] }, r.createElement(a.Z, { style: v.mockTweet }, r.createElement(a.Z, { style: v.fakeBodyCopy }, r.createElement(u.Z, { wordPercentWidths: f })), r.createElement(a.Z, { style: v.educationCallout }, i ? r.createElement(m.ZP, { background: "gray0" }, C) : r.createElement(p.Z.Custom, { Icon: h.default, backgroundColor: "plum0", style: v.maxWidth, text: Z, withColoredIcon: !0 })), r.createElement(a.Z, { style: v.tweetActionBarStyle }, r.createElement(b.Z, { bookmarkCount: 0, displayStyle: "block", isLiked: !1, isPresentational: !0, isRetweeted: !1, likeCount: 0, replyCount: 0, retweetCount: 0, tweetLink: "" }))), r.createElement(g.Z, { colors: [t(), t(), t(50), o], locations: y, style: v.gradient }), r.createElement(g.Z, { colors: [t(), t(99), t(50), o], locations: E, style: v.gradient }));
                };
            var x = o(439412);
            const S = d().da48ebf6,
                P = (e, t) => {
                    const { style: o, withVisibilityCallout: l, ...s } = e,
                        d = (0, i.D2)();
                    return r.createElement(a.Z, { style: [R.root, d && R.rootWide, o] }, r.createElement(c.ZP, { "aria-level": 2, role: "heading", size: "title4", weight: "heavy" }, S), r.createElement(x.Z, (0, n.Z)({}, s, { ref: t, style: R.description })), l && r.createElement(k, { style: R.callout }));
                },
                A = r.forwardRef(P),
                R = l.default.create((e) => ({ root: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space32, paddingTop: e.spaces.space48 }, rootWide: { paddingHorizontal: e.spaces.space48 }, description: { marginTop: e.spaces.space8 }, callout: { alignSelf: "center", marginVertical: e.spaces.space16, maxWidth: 327 } }));
        },
        366708: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                r = o(325686),
                a = o(708852),
                i = o(392237),
                c = o(378587);
            const l = ({ children: e, style: t }) => {
                    const o = (0, a.D2)();
                    return n.createElement(r.Z, { style: [s.root, o && s.rootWide, t] }, n.createElement(r.Z, { style: s.blob }), e);
                },
                s = i.default.create((e) => ({ root: { minHeight: 240, paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space32, paddingTop: e.spaces.space48, position: "relative" }, rootWide: { paddingHorizontal: e.spaces.space48 }, blob: { backgroundImage: c.Z.getBackgroundImage(), clipPath: "ellipse(100% 100% at 38% 0%)", position: "absolute", start: 0, end: 0, top: 0, height: "100%", zIndex: -1 } }));
        },
        513120: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                r = o(325686),
                a = o(708852),
                i = o(392237);
            const c = ({ children: e, style: t }, o) => {
                    const i = (0, a.D2)() ? s.paddingWide : s.paddingNarrow;
                    return n.createElement(r.Z, { ref: o, style: [t, i] }, e);
                },
                l = n.forwardRef(c),
                s = i.default.create((e) => ({ paddingWide: { paddingHorizontal: e.spaces.space72 }, paddingNarrow: { paddingHorizontal: e.spaces.space32 } }));
        },
        724345: (e, t, o) => {
            o.d(t, { Z: () => n.Z });
            var n = o(513120);
        },
        357770: (e, t, o) => {
            o.d(t, { Z: () => c, j: () => i.j });
            var n = o(202784),
                r = o(731708),
                a = o(392237),
                i = o(698537);
            const c = (e) => {
                    const { "aria-label": t, headline: o, illustration: a, subtext: c } = e;
                    return n.createElement(n.Fragment, null, a && n.createElement(i.Z, { "aria-label": t, style: l.illustration, type: a }), n.createElement(r.ZP, { "aria-level": 2, role: "heading", size: "title2", style: a && l.headline, weight: "heavy" }, o), c && n.createElement(r.ZP, { color: "gray700", style: l.subtext }, c));
                },
                l = a.default.create((e) => ({ headline: { marginTop: e.spaces.space32 }, illustration: { maxWidth: "100%" }, subtext: { marginTop: e.spaces.space12 } }));
        },
        569778: (e, t, o) => {
            o.d(t, { Z: () => n.Z, j: () => n.j });
            var n = o(357770);
        },
        397377: (e, t, o) => {
            o.d(t, { Z: () => w });
            var n = o(202784),
                r = o(325686),
                a = o(708852),
                i = o(823161),
                c = o(909377),
                l = o(371344),
                s = o(130304),
                d = o(731708),
                u = o(392237),
                m = o(111677),
                p = o.n(m),
                b = o(520913);
            const g = p().a4ed9072,
                h = (e, t) => {
                    const { autoFocus: o, imageUrl: u, onChange: m, style: p, value: h, valueMaxLength: w } = e,
                        y = (0, a.$u)();
                    return n.createElement(r.Z, { style: [f.root, p] }, u ? n.createElement(i.default, { size: y ? "xxxLarge" : "xLarge", uri: u }) : n.createElement(c.Z, { Icon: b.default }), m ? n.createElement(n.Fragment, null, n.createElement(l.Z, { autoFocus: o, inputStyle: [f.creatorIntroInput, !!w && f.creatorIntroInputWithCountdownCircle], isCompact: !0, leftAligned: !0, maxNumberOfLines: Number.MAX_SAFE_INTEGER, multiline: !0, name: "creatorIntro", numberOfLines: 1, onChange: m, placeholder: g, ref: t, style: f.creatorIntro, value: h }), w && n.createElement(r.Z, { style: f.countdownCircle }, n.createElement(s.Z, { count: h?.length ?? 0, maxCount: w, warningCount: w - 10 }))) : n.createElement(d.ZP, { style: [f.creatorIntro, f.creatorIntroReadOnly] }, h));
                },
                w = n.forwardRef(h),
                f = u.default.create((e) => ({ root: { display: "inline-flex", alignItems: "start", flexDirection: "row", gap: e.spaces.space12 }, creatorIntro: { backgroundColor: e.colors.cellBackground, borderBottomStartRadius: e.borderRadii.large, borderBottomEndRadius: e.borderRadii.large, borderTopStartRadius: 0, borderTopEndRadius: e.borderRadii.large, boxShadow: e.boxShadows.small, width: "100%" }, creatorIntroReadOnly: { padding: e.spaces.space24 }, creatorIntroInput: { minHeight: 0, paddingBottom: e.spaces.space24, paddingStart: e.spaces.space24, paddingEnd: e.spaces.space24, paddingTop: e.spaces.space24 }, creatorIntroInputWithCountdownCircle: { paddingBottom: e.spaces.space40 }, countdownCircle: { position: "absolute", bottom: e.spaces.space8, end: e.spaces.space8 } }));
        },
        144861: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(807896),
                r = o(202784),
                a = o(731708),
                i = o(392237),
                c = o(111677),
                l = o.n(c),
                s = o(366708),
                d = o(397377);
            const u = l().d409ce3c,
                m = (e, t) => {
                    const { name: o, style: i, ...c } = e;
                    return r.createElement(s.Z, { style: i }, r.createElement(a.ZP, { "aria-level": 1, role: "heading", size: "title3", weight: "heavy" }, r.createElement(l().I18NFormatMessage, { $i18n: "g7970bc7", name: o ?? "" }, r.createElement("br", null))), r.createElement(a.ZP, { style: b.subheader }, u), r.createElement(d.Z, (0, n.Z)({}, c, { ref: t, style: b.intro })));
                },
                p = r.forwardRef(m),
                b = i.default.create((e) => ({ subheader: { marginTop: e.spaces.space8 }, intro: { marginTop: e.spaces.space36 } }));
        },
        8685: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(478039),
                a = o(734189),
                i = o(144861);
            const c = ({ badgeImageUrl: e, badgeName: t, badgeScreenName: o, descriptionValue: c, imageUrl: l, introValue: s, isBlueVerified: d, isProtected: u, isVerified: m, name: p, screenName: b }) => n.createElement(n.Fragment, null, n.createElement(i.Z, { imageUrl: l, name: p, value: s }), n.createElement(a.Z, { imageUrl: l, screenName: b, value: c, withVisibilityCallout: !0 }), n.createElement(r.Z, { imageUrl: e, isBlueVerified: d, isProtected: u, isVerified: m, name: t, screenName: o, withBackgroundTweets: !0 }));
        },
        783373: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(325686),
                a = o(731708),
                i = o(392237);
            const c = (e) => {
                    const { color: t, description: o, style: i, title: c } = e;
                    return n.createElement(r.Z, { style: i }, n.createElement(a.ZP, { "aria-level": 2, color: t, role: "heading", size: "title4", weight: "heavy" }, c), o && n.createElement(a.ZP, { color: "gray700", style: l.description }, o));
                },
                l = i.default.create((e) => ({ description: { marginTop: e.spaces.space12 } }));
        },
        97882: (e, t, o) => {
            o.d(t, { T: () => a, x: () => i });
            var n = o(111677),
                r = o.n(n);
            const a = { AED: r().d857e44d, ALL: r().cb87e3db, ARS: r().a9d5ffd1, AUD: r().a0e8371d, BAM: r().gcc50dc9, BDT: r().a6a43585, BGN: r().a0cc8f2d, BHD: r().i31c32c5, BRL: r().i7dc69e9, BYR: r().c14a6c03, CAD: r().jaa3d537, CHF: r().a824080b, CLP: r().d9c0bedb, CNY: r().bf8c0613, COP: r().i8163625, CZK: r().adb53ba1, DKK: r().iabf697d, DZD: r().a1a0555b, EGP: r().f266f3d9, EUR: r().a9a8652b, GBP: r().dbf40761, GHS: r().b0d993d9, GTQ: r().ac1308e1, HKD: r().a7889ab3, HRK: r().c614f5cd, HUF: r().i55d57e3, IDR: r().e4b6002b, ILS: r().d28e983b, INR: r().e8c9232d, IQD: r().c8994ae1, ISK: r().f821c2a5, JPY: r().j348b9c9, KES: r().i6f93b9b, KRW: r().c6150bd5, KWD: r().i8921e09, KZT: r().ef239279, LBP: r().hecdb149, MAD: r().fdd039b7, MKD: r().f30c2c37, MXN: r().d9ea7bff, MYR: r().ea3df4b7, NGN: r().jaac21bb, NOK: r().hb435ced, NZD: r().ce699d81, PEN: r().bc56d3d7, PHP: r().f8561913, PKR: r().g6485d53, PLN: r().ff561cc1, QAR: r().b42011d3, RON: r().a6660bcd, RSD: r().f9b80449, RUB: r().gdee4d5d, SAR: r().h36f2103, SEK: r().a19ad037, SGD: r().g713f699, THB: r().ff2e39af, TND: r().be34316d, TRY: r().aef81b75, TWD: r().fcce70a5, TZS: r().jc9d352f, UAH: r().be1cb8c5, UGX: r().j9371501, USD: r().j7d4397d, VEF: r().d61441dd, VND: r().e2a99e97, ZAR: r().f7ce19ab, ZMW: r().b2a0213f },
                i = ({ amount: e, currencyCode: t = "USD", formatter: o = 1e6, removeTrailingZeros: n = !1, strictAmount: r = !1 }) => {
                    const i = r ? e : parseInt(e, 10) / o,
                        l = a[t]?.(i);
                    return n ? c(l) : l;
                },
                c = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        130304: (e, t, o) => {
            o.d(t, { Z: () => g });
            var n = o(202784),
                r = o(466999),
                a = o(325686),
                i = o(111677),
                c = o.n(i),
                l = o(408369),
                s = o(764503),
                d = o(392237);
            const u = c().c2fc878d,
                m = c().db11b27f,
                p = (e) => e,
                b = d.default.create(({ colors: e }) => ({ root: { alignItems: "flex-start", minHeight: 30, minWidth: 30 }, center: { alignItems: "center", justifyContent: "center", margin: "auto" }, progressCircle: { transitionDuration: "0.2s", transitionProperty: "opacity" }, hide: { opacity: 0 }, text: { fontSize: 13, lineHeight: "0.8", minWidth: 16, textAlign: "center" }, gray700: { color: e.gray700 }, red500: { color: e.red500 } })),
                g = (e) => {
                    const { count: t, maxCount: o, formatNumber: i = p, warningCount: c } = e,
                        g = o - t,
                        h = g >= 0 ? m({ count: i(g) }) : u({ count: i(t - o) }),
                        w = t >= c ? n.createElement(r.Z, { "aria-atomic": !0, "aria-live": "polite", style: d.default.visuallyHidden }, h) : null,
                        f = (0, l.Z)(g, o),
                        y = t >= o ? "red500" : t >= c ? "yellow500" : "primary",
                        E = n.createElement(s.Z, { color: y, progress: f, size: t >= c ? 30 : 20, style: [b.progressCircle, g <= -10 && b.hide] }),
                        C = t >= c ? n.createElement(r.Z, { style: [b.text, g > 0 ? b.gray700 : b.red500] }, i(g)) : null;
                    return n.createElement(a.Z, { style: [b.root, b.center], testID: "countdown-circle" }, w, E, n.createElement(a.Z, { style: [d.default.absoluteFill, b.center] }, C));
                };
        },
        776588: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(325686),
                a = o(392237);
            const i = a.default.create((e) => ({ root: { display: "flex", flexDirection: "row", flexWrap: "nowrap", overflow: "hidden", width: "100%" }, borderRadius: { borderRadius: e.borderRadii.infinite }, lineWrap: { flexWrap: "wrap", overflow: "visible" }, word: { backgroundColor: e.colors.gray300, height: e.spaces.space4 }, wordWrapper: { justifyContent: "center" } })),
                c = function ({ color: e, lineHeightPx: t, maxWidthPx: o, style: c, withBorderRadius: l, withLineWrap: s, wordHeightPx: d, wordPercentWidths: u, wordSpacingPx: m }) {
                    const p = n.useMemo(
                        () =>
                            u.map((o, c) => {
                                const s = m || a.default.theme.spaces.space4,
                                    p = c !== u.length - 1 ? s : 0,
                                    b = n.createElement(r.Z, { key: c, style: [i.word, { width: t ? "100%" : `${o}%` }, e && { backgroundColor: a.default.theme.colors[e] }, !t && { marginEnd: p }, l && i.borderRadius, !!d && { height: d }] });
                                return t ? n.createElement(r.Z, { key: c, style: [i.wordWrapper, t && { marginEnd: p }, { height: t, width: `${o}%` }] }, b) : b;
                            }),
                        [e, t, l, d, m, u],
                    );
                    return n.createElement(r.Z, { style: [i.root, s && i.lineWrap, { maxWidth: o || "none" }, c] }, p);
                };
        },
        721083: (e, t, o) => {
            o.d(t, { Z: () => v });
            var n = o(807896),
                r = (o(571372), o(202784)),
                a = o(900664),
                i = o(111677),
                c = o.n(i),
                l = o(432181),
                s = o(761744),
                d = o(323265),
                u = o(811176),
                m = o(233184),
                p = o(522171),
                b = o(40644),
                g = o(439481);
            const h = c().d636ebc6,
                w = c().eb3a8b0c,
                f = c().j472ecfc,
                y = c().a0af935c,
                E = c().dac92b0d,
                C = c().aa650427;
            function Z(e = new Error("TweetActionLike.onError")) {
                m.Z.report(e);
            }
            function v({ actionMenuDescription: e, activeColor: t = "magenta500", color: o, count: i, enableActionMenu: c = !1, enableKeyboardShortcuts: m, iconSize: v, isDisabled: k, isFaded: x, isLiked: S, isPresentational: P, likeActionIconContainerRef: A, likeTransitionAnimation: R, link: I, onAnimationStart: D, onError: W = Z, onLikeActionSelect: T, onMenuCancel: B, onPress: M, style: z, testIDs: H, withCount: L }) {
                const N = L && "number" == typeof i;
                let V = S ? y : h;
                const F = r.useMemo(() => ({ label: S ? w : h }), [S]);
                N && (V = S ? C({ count: i }) : E({ count: i }));
                const K = (function ({ isLiked: e, likeTransitionAnimation: t }) {
                    const [o, n] = r.useState(!1),
                        a = r.useRef(e);
                    return (
                        r.useEffect(() => {
                            ("object" == typeof t || g.ZP.check(t)) && e !== a.current && (n(e), (a.current = e));
                        }, [e, t]),
                        { onAnimationEnd: r.useCallback(() => n(!1), [n]), showAnimation: o, transitionAnimationUrl: t }
                    );
                })({ isLiked: S, likeTransitionAnimation: R });
                const U = r.useCallback(
                    (t) => {
                        const o = [
                            {
                                text: f,
                                onClick() {
                                    t(), T?.();
                                },
                                testID: H?.like,
                                Icon: l.default,
                            },
                        ];
                        return r.createElement(u.Z, {
                            description: e,
                            items: o,
                            onCloseRequested: function () {
                                t(), B?.();
                            },
                        });
                    },
                    [e, T, B, H?.like],
                );
                return r.createElement(
                    b.ZP,
                    (0, n.Z)({}, K, {
                        ActiveIcon: s.default,
                        Icon: l.default,
                        actionIconContainerRef: A,
                        activeColor: t,
                        "aria-label": V,
                        color: o,
                        count: i,
                        enableKeyboardShortcuts: m,
                        hoverLabel: F,
                        iconSize: v,
                        isActive: S,
                        isDisabled: k,
                        isFaded: x,
                        isPresentational: P,
                        keyboardShortcut: p.Z.shortcuts.like,
                        link: I,
                        onAnimationStart: D,
                        onError: W,
                        onPress: function () {
                            d.ZP.isFirefox() || a.Z.vibrate(5), M?.();
                        },
                        renderMenu: c ? U : void 0,
                        style: z,
                        testID: H && (S ? H.unlike : H.like),
                        withCount: N,
                    }),
                );
            }
        },
        15342: (e, t, o) => {
            o.d(t, { d: () => v, Z: () => k });
            var n = o(202784),
                r = o(111677),
                a = o.n(r),
                i = o(720600),
                c = o(155353),
                l = o(522171),
                s = o(40644),
                d = (o(136728), o(885724)),
                u = o(53674),
                m = o(811176);
            const p = a().f2919fb8,
                b = a().fd1e5446,
                g = a().bb5c5864,
                h = a().f65198c2;
            function w(e) {
                const t = (function ({ excludeRetweetAction: e = !1, excludeRetweetWithCommentAction: t = !1, excludeViewQuotesRetweetsAction: o = !1, isRetweeted: r, onMenuCancel: a, onQuoteTweetActionSelect: i, onRetweetActionSelect: l, onUnretweetActionSelect: s, onViewEngagementsActionSelect: m, retweetActionSubText: w, retweetWithCommentLink: f, testIDs: y, viewQuotesRetweetsLink: E }) {
                        const C = y?.retweetConfirm,
                            Z = y?.unretweetConfirm;
                        return n.useMemo(() => {
                            const n = [];
                            return (
                                r ||
                                    e ||
                                    n.push({
                                        text: p,
                                        subText: w,
                                        onClick() {
                                            a?.(), l?.();
                                        },
                                        testID: C,
                                        Icon: c.default,
                                    }),
                                r &&
                                    n.push({
                                        text: b,
                                        onClick() {
                                            a?.(), s?.();
                                        },
                                        testID: Z,
                                        Icon: c.default,
                                    }),
                                t ||
                                    n.push({
                                        text: g,
                                        onClick() {
                                            a?.(), i?.();
                                        },
                                        Icon: d.default,
                                        link: f,
                                    }),
                                o ||
                                    n.push({
                                        text: h,
                                        onClick() {
                                            a?.(), m?.();
                                        },
                                        Icon: u.default,
                                        link: E,
                                    }),
                                n
                            );
                        }, [e, t, o, r, a, i, l, s, m, w, f, C, Z, E]);
                    })(e),
                    { onMenuCancel: o } = e,
                    r = n.useCallback(() => {
                        o?.();
                    }, [o]);
                return n.createElement(m.Z, { description: e.actionMenuDescription, items: t, onCloseRequested: r });
            }
            const f = a().f2919fb8,
                y = a().fd1e5446,
                E = a().b8c465e2,
                C = a().dfad425d,
                Z = a().a386dc55,
                v = { RETWEET: "retweet", UNRETWEET: "unretweet", QUOTE: "quote", VIEW_ENGAGEMENTS: "view_engagements" };
            function k({ actionMenuDescription: e, activeColor: t = "green500", color: o, count: r, enableActionMenu: a = !1, enableKeyboardShortcuts: d, excludeRetweetAction: u, excludeRetweetWithCommentAction: m, excludeViewQuotesRetweetsAction: p, iconSize: b, isDisabled: g, isFaded: h, isPresentational: v, isRetweeted: k, onMenuCancel: x, onPress: S, onQuoteTweetActionSelect: P, onRetweetActionSelect: A, onUnretweetActionSelect: R, onViewEngagementsActionSelect: I, retweetActionSubText: D, retweetWithCommentLink: W, style: T, testIDs: B, viewQuotesRetweetsLink: M, withCount: z }) {
                const H = z && "number" == typeof r;
                let L = k ? E : f;
                H && (L = k ? Z({ count: r }) : C({ count: r }));
                const N = n.useMemo(() => ({ label: k ? y : f }), [k]),
                    V = n.useMemo(() => ({ retweetConfirm: B?.retweetConfirm, unretweetConfirm: B?.unretweetConfirm }), [B?.retweetConfirm, B?.unretweetConfirm]),
                    F = n.useCallback(
                        (t) =>
                            n.createElement(w, {
                                actionMenuDescription: e,
                                excludeRetweetAction: u,
                                excludeRetweetWithCommentAction: m,
                                excludeViewQuotesRetweetsAction: p,
                                isRetweeted: k,
                                onMenuCancel: () => {
                                    t(), x?.();
                                },
                                onQuoteTweetActionSelect: P,
                                onRetweetActionSelect: A,
                                onUnretweetActionSelect: R,
                                onViewEngagementsActionSelect: I,
                                retweetActionSubText: D,
                                retweetWithCommentLink: W,
                                testIDs: V,
                                viewQuotesRetweetsLink: M,
                            }),
                        [e, u, m, p, k, x, P, A, R, I, D, V, W, M],
                    );
                return n.createElement(s.ZP, { ActiveIcon: i.default, Icon: c.default, activeColor: t, "aria-label": L, color: o, count: r, enableKeyboardShortcuts: d, hoverLabel: N, iconSize: b, isActive: k, isDisabled: g, isFaded: h, isPresentational: v, keyboardShortcut: l.Z.shortcuts.retweet, onPress: S, renderMenu: a ? F : void 0, style: T, testID: k ? B?.unretweet : B?.retweet, withCount: H });
            }
        },
        990804: (e, t, o) => {
            o.d(t, { Z: () => le });
            var n = o(202784),
                r = o(325686),
                a = o(111677),
                i = o.n(a),
                c = o(976145),
                l = o(235902),
                s = o(392237);
            function d({ "aria-label": e, "aria-labelledby": t, children: o, displayStyle: a = "inline", id: i, style: c }) {
                const s = l.ZP.useProps().withEdgeToEdgeTweetAnatomy();
                return n.createElement(r.Z, { "aria-label": e, "aria-labelledby": t, id: i, role: "group", style: [u.container, u[`${a}Container`], s && u.noMaxWidth, c] }, o);
            }
            const u = s.default.create((e) => ({ container: { columnGap: e.spacesPx.space4, flexDirection: "row" }, inlineContainer: { justifyContent: "space-between", maxWidth: 600 }, noMaxWidth: { maxWidth: "none" }, blockContainer: { alignItems: "stretch", height: "100%", justifyContent: "space-around", minHeight: "1.875rem", paddingHorizontal: e.spaces.space4 } }));
            var m = o(807896),
                p = o(53674),
                b = o(40644);
            const g = { label: i().f2849136 },
                h = i().f206e970,
                w = { label: i().b05a39b2 },
                f = i().c7073f5b;
            o(571372);
            var y = o(900664),
                E = o(73416),
                C = o(883069),
                Z = o(323265),
                v = o(233184),
                k = o(522171);
            const x = i().dbc0c2f4,
                S = i().hf417cf0,
                P = i().c7a989ce,
                A = i().febd30ed,
                R = i().a8dc9587;
            function I(e = new Error("TweetActionBookmark.onError")) {
                v.Z.report(e);
            }
            var D = o(721083),
                W = o(194661);
            const T = i().hdf7226a,
                B = { label: T },
                M = i().c9940955;
            function z({ activeColor: e, color: t, count: o, enableKeyboardShortcuts: r, iconSize: a, isDisabled: i, isFaded: c, isPresentational: l, link: s, onPress: d, renderWrapper: u, style: m, testID: p, withCount: g }) {
                const h = g && "number" == typeof o,
                    w = h ? M({ count: o }) : T;
                return n.createElement(b.ZP, { Icon: W.default, activeColor: e, "aria-label": w, color: t, count: o, enableKeyboardShortcuts: r, hoverLabel: B, iconSize: a, isDisabled: i, isFaded: c, isPresentational: l, keyboardShortcut: k.Z.shortcuts.reply, link: s, onPress: d, renderWrapper: u, style: m, testID: p, withCount: h });
            }
            const H = n.memo(z);
            var L = o(15342),
                N = o(744610),
                V = o(137937),
                F = o(461756),
                K = o(811176),
                U = o(638236);
            const j = { label: i().dc63da16 },
                _ = i().cee0585c,
                G = V.Z.bezier(0.45, 0, 0, 1);
            const $ = function ({ activeColor: e, color: t, count: o, iconSize: r, isDisabled: a, isFaded: i, isPresentational: c, onPress: l, style: s, tweetLink: d, withCount: u }) {
                    const m = u && void 0 !== o;
                    return n.createElement(b.ZP, { Icon: p.default, activeColor: e, "aria-label": m ? f({ count: o }) : h, color: t, count: o, hoverLabel: m ? w : g, iconSize: r, isDisabled: a, isFaded: i, isPresentational: c, link: !d || a || i ? void 0 : `${d}/analytics`, onPress: l, style: s, withCount: m });
                },
                Q = D.Z,
                O = H,
                q = function ({ actionItems: e, actionMenuDescription: t, activeColor: o, color: r, enableKeyboardShortcuts: a, iconSize: i, isDisabled: c, isFaded: l, isPresentational: s, onMenuCancel: d, onPress: u, shouldAnimatePrompt: m, style: p, withCount: g }) {
                    const h = n.useRef({ wiggle: new N.Z.Value(0), scale: new N.Z.Value(1) }).current,
                        w = n.useCallback(
                            (o) =>
                                n.createElement(K.Z, {
                                    description: t,
                                    items: e,
                                    onCloseRequested: function () {
                                        o(), d?.();
                                    },
                                    shouldCloseOnClick: !0,
                                }),
                            [e, t, d],
                        );
                    n.useEffect(() => {
                        m && !F.Z.reducedMotionEnabled && N.Z.parallel([N.Z.timing(h.wiggle, { toValue: 4, duration: 500, useNativeDriver: !1 }), N.Z.sequence([N.Z.timing(h.scale, y({ toValue: 1.45 })), N.Z.timing(h.scale, y({ toValue: 1 }))])]).start();
                    }, [h.scale, m, h.wiggle]);
                    const f = h.wiggle.interpolate({ inputRange: [0, 1, 2, 3, 4], outputRange: ["0deg", "15deg", "-15deg", "15deg", "0deg"] });
                    function y(e) {
                        return { ...e, useNativeDriver: !1, easing: G, duration: 250 };
                    }
                    const E = n.useRef([{}, { transform: [{ rotate: f }, { scale: h.scale }, { translate3d: "0, 0, 0" }], justifyContent: "inherit", display: "inline-grid" }]);
                    return n.createElement(N.Z.View, { style: E.current }, n.createElement(b.ZP, { Icon: U.Z, activeColor: o, "aria-label": _, color: r, enableKeyboardShortcuts: a, hoverLabel: j, iconSize: i, isDisabled: c, isFaded: l, isPresentational: s, keyboardShortcut: k.Z.shortcuts.share, onPress: u, renderMenu: l ? void 0 : w, style: p, withCount: g }));
                },
                Y = function ({ activeColor: e, color: t, count: o, enableKeyboardShortcuts: r, iconSize: a, isDisabled: i, isFaded: c, isBookmarked: l, isPresentational: s, onError: d = I, onPress: u, style: m, testIDs: p, withCount: g }) {
                    const h = g && "number" == typeof o;
                    let w = l ? P : x;
                    const f = n.useMemo(() => ({ label: l ? S : x }), [l]);
                    return (
                        h && (w = l ? R({ count: o }) : A({ count: o })),
                        n.createElement(b.ZP, {
                            ActiveIcon: E.default,
                            Icon: C.default,
                            activeColor: e,
                            "aria-label": w,
                            color: t,
                            count: o,
                            enableKeyboardShortcuts: r,
                            hoverLabel: f,
                            iconSize: a,
                            isActive: l,
                            isDisabled: i,
                            isFaded: c,
                            isPresentational: s,
                            keyboardShortcut: k.Z.shortcuts.bookmark,
                            onError: d,
                            onPress: function () {
                                Z.ZP.isFirefox() || y.Z.vibrate(5), u?.();
                            },
                            style: m,
                            testID: p && (l ? p.removeBookmark : p.bookmark),
                            withCount: h,
                        })
                    );
                };
            const X = i().a0af935c,
                J = i().b8c465e2,
                ee = i().c7a989ce,
                te = (e) => n.createElement(le.ActionAnalytics, e),
                oe = (e) => n.createElement(le.ActionLike, e),
                ne = (e) => n.createElement(le.ActionReply, e),
                re = (e) => n.createElement(le.ActionRetweet, e),
                ae = (e) => n.createElement(le.ActionShare, e),
                ie = (e) => n.createElement(le.ActionBookmark, e),
                ce = [];
            function le({ actionSize: e = "normal", activeColor: t, bookmarkCount: o, color: a = "gray700", displayStyle: s, enableKeyboardShortcuts: u = !0, isDisabled: m = !1, isBookmarked: p = !1, isFocalTweet: b = !1, isFromProtectedAccount: g, isLiked: h, isRetweeted: w, isPresentational: f, likeCount: y, id: E, renderAnalyticsAction: C = te, renderLikeAction: Z = oe, renderReplyAction: v = ne, renderRetweetAction: k = re, renderShareAction: x = ae, renderBookmarkAction: S = ie, replyCount: P, retweetCount: A, style: R, tweetLink: I, viewCount: D, viewState: W, withAnalytics: T = !1, withCount: B = !1, withBookmark: M = !1 }) {
                const z = n.useRef(null),
                    H = l.ZP.useProps(),
                    L = H.tweetViewCountsEnabled(),
                    N = H.testViewCountShow(),
                    V = L || N,
                    F = T && V,
                    K = T && !F,
                    U = V ? "EnabledWithCount" === W && B : B,
                    j = n.useMemo(() => {
                        if (!B) return;
                        const e = i().b03835c7,
                            t = i().g4a195e7,
                            n = i().e089b42d,
                            r = i().e0a8fe39,
                            a = i().c58b2ab7;
                        return (0, c.Z)([P ? e({ replyCount: P }) : null, A ? t({ retweetCount: A }) : null, w ? J : null, y ? n({ likeCount: y }) : null, h ? X : null, p && M ? ee : null, o ? r({ bookmarkCount: o }) : null, D ? a({ viewCount: D }) : null].filter(Boolean), !0);
                    }, [o, p, h, w, y, P, A, D, B, M]),
                    _ = n.useMemo(() => ({ color: a, iconSize: e, isDisabled: m }), [a, e, m]),
                    G = n.useMemo(() => v({ ..._, activeColor: t, count: P, enableKeyboardShortcuts: u, isPresentational: f, withCount: B }), [_, t, P, u, f, B, v]),
                    $ = n.useMemo(() => k({ ..._, activeColor: t, count: A, enableKeyboardShortcuts: u, isFromProtectedAccount: g, isRetweeted: w, isPresentational: f, withCount: B }), [_, t, A, u, g, w, f, B, k]),
                    Q = n.useMemo(() => Z({ ..._, activeColor: t, count: y, enableKeyboardShortcuts: u, isLiked: h, isPresentational: f, withCount: B }), [_, t, y, u, h, f, B, Z]),
                    O = n.useMemo(() => (F ? C({ ..._, count: D, isPresentational: f, tweetLink: I, withCount: U }) : null), [F, _, D, f, I, U, C]),
                    q = n.useMemo(() => (M ? S({ ..._, activeColor: t, count: o, enableKeyboardShortcuts: u, isPresentational: f, isBookmarked: p, withCount: B }) : null), [M, _, t, o, u, f, p, B, S]),
                    Y = n.useMemo(() => (K ? C({ ..._, isPresentational: f, tweetLink: I }) : null), [K, _, f, I, C]),
                    le = n.useMemo(() => x({ ..._, actionItems: ce, activeColor: t, enableKeyboardShortcuts: u, isPresentational: f, withCount: B && K }), [_, t, u, f, K, B, x]);
                return n.createElement(r.Z, { ref: z }, n.createElement(d, { "aria-label": j, displayStyle: s, id: E, style: R }, G, $, Q, O, q, Y, le));
            }
            (le.ActionAnalytics = $),
                (le.ActionLike = Q),
                (le.ActionReply = O),
                (le.ActionRetweet = function ({ isFromProtectedAccount: e = !1, ...t }) {
                    return n.createElement(L.Z, (0, m.Z)({}, t, { excludeRetweetAction: t.excludeRetweetAction || e, excludeRetweetWithCommentAction: t.excludeRetweetWithCommentAction || e, isDisabled: t.isDisabled || (!t.isRetweeted && e) }));
                }),
                (le.ActionShare = q),
                (le.ActionBookmark = Y);
        },
        183806: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        408369: (e, t, o) => {
            function n(e, t) {
                return Math.min(1, 1 - e / t);
            }
            o.d(t, { Z: () => n });
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                i = o(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const l = c;
        },
        155353: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                i = o(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const l = c;
        },
        900664: (e, t, o) => {
            o.d(t, { Z: () => r });
            var n = (e) => {
                "vibrate" in window.navigator && window.navigator.vibrate(e);
            };
            const r = {
                cancel() {
                    n(0);
                },
                vibrate(e) {
                    void 0 === e && (e = 400), n(e);
                },
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows~bundle.SuperFollowsSubscribe.735c276a.js.map
