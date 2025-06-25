"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows~bundle.SuperFollowsSubscribe"],
    {
        478039: (e, t, n) => {
            n.d(t, { Z: () => W });
            var o = n(807896),
                r = n(202784),
                a = n(325686),
                i = n(708852),
                c = n(392237),
                l = n(111677),
                s = n.n(l),
                d = n(776588);
            const u = c.default.create((e) => ({ root: { alignItems: "center", height: 20 } })),
                m = (e) => {
                    const { wordHeightPx: t, wordPercentWidths: n } = e;
                    return r.createElement(d.Z, { color: "text", style: u.root, withBorderRadius: !0, wordHeightPx: t, wordPercentWidths: n });
                };
            var p = n(682474);
            const h = c.default.create((e) => ({ root: { border: "none", backgroundColor: e.colors.gray300, borderRadius: e.borderRadii.infinite, height: c.default.theme.spaces.space40, width: c.default.theme.spaces.space40 } })),
                g = () => r.createElement(p.Z, { ratio: 1, style: h.root }),
                b = [100],
                f = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", gap: e.spaces.space4, height: 20 } })),
                w = (e) => {
                    const { wordHeightPx: t } = e;
                    return r.createElement(a.Z, { style: f.root }, r.createElement(d.Z, { color: "text", maxWidthPx: 28, withBorderRadius: !0, wordHeightPx: t, wordPercentWidths: b }), r.createElement(d.Z, { color: "gray700", maxWidthPx: 64, withBorderRadius: !0, wordHeightPx: t, wordPercentWidths: b }));
                },
                y = c.default.create((e) => ({ root: { flexDirection: "row", marginBottom: e.spaces.space2, overflow: "hidden", padding: e.spaces.space16 }, content: { flexGrow: 1, gap: e.spaces.space4, marginStart: e.spaces.space12 } })),
                E = (e) => {
                    const { wordPercentWidths: t } = e;
                    return r.createElement(a.Z, { style: y.root }, r.createElement(g, null), r.createElement(a.Z, { style: y.content }, r.createElement(w, { wordHeightPx: 3 }), r.createElement(m, { wordHeightPx: 3, wordPercentWidths: t })));
                };
            var C = n(823161),
                Z = n(366635),
                v = n(782299);
            const x = c.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge, boxShadow: e.boxShadows.medium, display: "flex", flexDirection: "row", overflow: "hidden", padding: e.spaces.space16, width: "100%" }, content: { flexGrow: 1, gap: e.spaces.space4, marginStart: e.spaces.space12 }, indicator: { alignSelf: "flex-start" } })),
                k = (e) => {
                    const { imageUrl: t, isBlueVerified: n, isProtected: o, isVerified: i, name: c, screenName: l, wordPercentWidths: s } = e;
                    return r.createElement(a.Z, { style: x.root }, t ? r.createElement(C.default, { focusable: !1, size: "xLarge", uri: t }) : r.createElement(g, null), r.createElement(a.Z, { style: x.content }, c && l ? r.createElement(Z.Z, { isBlueVerified: n, isProtected: o, isVerified: i, name: c, nameSize: "body", screenName: l, screenNameSize: "body" }) : r.createElement(w, { wordHeightPx: 4 }), r.createElement(v.Z, { style: x.indicator, type: "superFollower" }), r.createElement(m, { wordHeightPx: 4, wordPercentWidths: s })));
                },
                S = [12, 8, 6, 12],
                P = [13, 8, 5, 19, 8, 6],
                A = [12, 8, 5, 19, 17, 14],
                R = c.default.create((e) => ({ root: { alignItems: "center", display: "flex", justifyContent: "flex-end", position: "relative", userSelect: "none", width: "100%" }, withBackgroundTweets: { paddingHorizontal: e.spaces.space56 }, backgroundTweets: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge, boxShadow: e.boxShadows.medium, height: 260, justifyContent: "space-between", width: "100%" }, focalTweet: { bottom: 0, justifyContent: "center", position: "absolute", start: 0, end: 0, top: 0 } })),
                D = (e) => {
                    const { style: t, withBackgroundTweets: n, ...i } = e,
                        c = r.createElement(k, (0, o.Z)({}, i, { wordPercentWidths: A }));
                    return r.createElement(a.Z, { style: [R.root, n && R.withBackgroundTweets, t] }, n ? r.createElement(r.Fragment, null, r.createElement(a.Z, { style: R.backgroundTweets }, r.createElement(E, { wordPercentWidths: P }), r.createElement(E, { wordPercentWidths: S })), r.createElement(a.Z, { style: R.focalTweet }, c)) : c);
                };
            var I = n(783373);
            const T = s().b600eb88,
                B = s().fd75ca92,
                W = (e) => {
                    const { style: t, ...n } = e,
                        c = (0, i.D2)();
                    return r.createElement(a.Z, { style: [M.root, c && M.rootWide, t] }, r.createElement(I.Z, { description: B, title: T }), r.createElement(D, (0, o.Z)({}, n, { style: M.badge })));
                },
                M = c.default.create((e) => ({ root: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space32, paddingTop: e.spaces.space48 }, rootWide: { paddingHorizontal: e.spaces.space48 }, description: { marginTop: e.spaces.space8 }, badge: { alignSelf: "center", marginBottom: e.spaces.space16, marginTop: e.spaces.space32, maxWidth: 327 } }));
        },
        439412: (e, t, n) => {
            n.d(t, { Z: () => E });
            var o = n(202784),
                r = n(325686),
                a = n(371344),
                i = n(731708),
                c = n(130304),
                l = n(392237),
                s = n(111677),
                d = n.n(s),
                u = n(823161),
                m = n(909377),
                p = n(520913);
            const h = d().c39b0e24,
                g = d().f0c99eff,
                b = (e) => {
                    const { imageUrl: t, screenName: n, style: a } = e;
                    return o.createElement(r.Z, { style: [f.signature, a] }, o.createElement(i.ZP, { color: "gray700", weight: "bold" }, g({ screenName: n ?? h })), t ? o.createElement(u.default, { size: "medium", uri: t }) : o.createElement(m.Z, { Icon: p.default, size: "medium" }));
                },
                f = l.default.create((e) => ({ signature: { display: "inline-flex", alignItems: "center", flexDirection: "row", gap: e.spaces.space8 } })),
                w = d().a329ce88,
                y = (e, t) => {
                    const { autoFocus: n, imageUrl: l, onChange: s, screenName: d, style: u, value: m, valueMaxLength: p } = e;
                    return o.createElement(r.Z, { style: [C.root, u] }, s ? o.createElement(a.Z, { autoFocus: n, inputStyle: C.descriptionInput, isCompact: !0, leftAligned: !0, maxNumberOfLines: Number.MAX_SAFE_INTEGER, multiline: !0, name: "description", numberOfLines: 1, onChange: s, placeholder: w, ref: t, style: C.description, value: m }) : o.createElement(i.ZP, { color: "gray700", style: C.description }, m), o.createElement(r.Z, { style: C.signatureWrapper }, o.createElement(b, { imageUrl: l, screenName: d, style: [C.signature, !m && C.visibilityHidden] }), s && p && o.createElement(c.Z, { count: m?.length ?? 0, maxCount: p, warningCount: p - 10 })));
                },
                E = o.forwardRef(y),
                C = l.default.create((e) => ({ root: { display: "inline-flex", alignItems: "start", flexDirection: "column" }, description: { borderRadius: 0, borderColor: "transparent", minHeight: 0, width: "100%" }, descriptionInput: { color: e.colors.gray700, minHeight: 0, paddingBottom: 0, paddingStart: 0, paddingEnd: 0, paddingTop: 0 }, signatureWrapper: { alignItems: "center", flexDirection: "row", marginTop: e.spaces.space12, width: "100%" }, signature: { flex: 1 }, visibilityHidden: { visibility: "hidden" } }));
        },
        734189: (e, t, n) => {
            n.d(t, { Z: () => A });
            var o = n(807896),
                r = n(202784),
                a = n(325686),
                i = n(708852),
                c = n(731708),
                l = n(392237),
                s = n(111677),
                d = n.n(s),
                u = n(776588),
                m = n(868634),
                p = n(40610),
                h = n(990804),
                g = n(215337),
                b = n(491831),
                f = n(443781);
            const w = [17, 7, 14, 11, 8, 12, 4, 11],
                y = [0, 0.25, 0.75, 1],
                E = [0, 0.5, 0.75, 1],
                C = r.createElement(d().I18NFormatMessage, { $i18n: "ge990f4f" }, r.createElement(c.ZP, { size: "subtext3" }, d().f324fb6c)),
                Z = r.createElement(d().I18NFormatMessage, { $i18n: "e8e2dcd3" }, r.createElement(c.ZP, { size: "subtext3" }, d().c654a3aa)),
                v = l.default.create((e) => ({ root: { alignItems: "center", display: "flex", justifyContent: "flex-end", position: "relative", userSelect: "none", width: "100%" }, educationCallout: { marginBottom: e.spaces.space8, marginHorizontal: e.spaces.space24, marginTop: e.spaces.space16 }, tweetActionBarStyle: { marginHorizontal: e.spaces.space24 }, fakeBodyCopy: { paddingHorizontal: e.spaces.space28, width: "100%" }, gradient: { height: e.spaces.space56, position: "absolute", top: 0, width: "100%" }, mockTweet: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge, boxShadow: e.boxShadows.medium, marginTop: e.spaces.space16, paddingVertical: e.spaces.space16, width: "100%" }, maxWidth: { maxWidth: "fit-content" } })),
                x = ({ style: e }) => {
                    const t = (e) => `${l.default.theme.colors.cellBackground}${e || ""}`,
                        n = l.default.theme.colors.transparent,
                        { featureSwitches: o } = r.useContext(f.rC),
                        i = o.isTrue("super_follow_tweet_label_redesign_enabled");
                    return r.createElement(a.Z, { style: [v.root, e] }, r.createElement(a.Z, { style: v.mockTweet }, r.createElement(a.Z, { style: v.fakeBodyCopy }, r.createElement(u.Z, { wordPercentWidths: w })), r.createElement(a.Z, { style: v.educationCallout }, i ? r.createElement(m.ZP, { background: "gray0" }, C) : r.createElement(p.Z.Custom, { Icon: b.default, backgroundColor: "plum0", style: v.maxWidth, text: Z, withColoredIcon: !0 })), r.createElement(a.Z, { style: v.tweetActionBarStyle }, r.createElement(h.Z, { bookmarkCount: 0, displayStyle: "block", isLiked: !1, isPresentational: !0, isRetweeted: !1, likeCount: 0, replyCount: 0, retweetCount: 0, tweetLink: "" }))), r.createElement(g.Z, { colors: [t(), t(), t(50), n], locations: y, style: v.gradient }), r.createElement(g.Z, { colors: [t(), t(99), t(50), n], locations: E, style: v.gradient }));
                };
            var k = n(439412);
            const S = d().da48ebf6,
                P = (e, t) => {
                    const { style: n, withVisibilityCallout: l, ...s } = e,
                        d = (0, i.D2)();
                    return r.createElement(a.Z, { style: [R.root, d && R.rootWide, n] }, r.createElement(c.ZP, { "aria-level": 2, role: "heading", size: "title4", weight: "heavy" }, S), r.createElement(k.Z, (0, o.Z)({}, s, { ref: t, style: R.description })), l && r.createElement(x, { style: R.callout }));
                },
                A = r.forwardRef(P),
                R = l.default.create((e) => ({ root: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space32, paddingTop: e.spaces.space48 }, rootWide: { paddingHorizontal: e.spaces.space48 }, description: { marginTop: e.spaces.space8 }, callout: { alignSelf: "center", marginVertical: e.spaces.space16, maxWidth: 327 } }));
        },
        366708: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(325686),
                a = n(708852),
                i = n(392237),
                c = n(378587);
            const l = ({ children: e, style: t }) => {
                    const n = (0, a.D2)();
                    return o.createElement(r.Z, { style: [s.root, n && s.rootWide, t] }, o.createElement(r.Z, { style: s.blob }), e);
                },
                s = i.default.create((e) => ({ root: { minHeight: 240, paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space32, paddingTop: e.spaces.space48, position: "relative" }, rootWide: { paddingHorizontal: e.spaces.space48 }, blob: { backgroundImage: c.Z.getBackgroundImage(), clipPath: "ellipse(100% 100% at 38% 0%)", position: "absolute", start: 0, end: 0, top: 0, height: "100%", zIndex: -1 } }));
        },
        513120: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(325686),
                a = n(708852),
                i = n(392237);
            const c = ({ children: e, style: t }, n) => {
                    const i = (0, a.D2)() ? s.paddingWide : s.paddingNarrow;
                    return o.createElement(r.Z, { ref: n, style: [t, i] }, e);
                },
                l = o.forwardRef(c),
                s = i.default.create((e) => ({ paddingWide: { paddingHorizontal: e.spaces.space72 }, paddingNarrow: { paddingHorizontal: e.spaces.space32 } }));
        },
        724345: (e, t, n) => {
            n.d(t, { Z: () => o.Z });
            var o = n(513120);
        },
        357770: (e, t, n) => {
            n.d(t, { Z: () => c, j: () => i.j });
            var o = n(202784),
                r = n(731708),
                a = n(392237),
                i = n(698537);
            const c = (e) => {
                    const { "aria-label": t, headline: n, illustration: a, subtext: c } = e;
                    return o.createElement(o.Fragment, null, a && o.createElement(i.Z, { "aria-label": t, style: l.illustration, type: a }), o.createElement(r.ZP, { "aria-level": 2, role: "heading", size: "title2", style: a && l.headline, weight: "heavy" }, n), c && o.createElement(r.ZP, { color: "gray700", style: l.subtext }, c));
                },
                l = a.default.create((e) => ({ headline: { marginTop: e.spaces.space32 }, illustration: { maxWidth: "100%" }, subtext: { marginTop: e.spaces.space12 } }));
        },
        569778: (e, t, n) => {
            n.d(t, { Z: () => o.Z, j: () => o.j });
            var o = n(357770);
        },
        397377: (e, t, n) => {
            n.d(t, { Z: () => f });
            var o = n(202784),
                r = n(325686),
                a = n(708852),
                i = n(823161),
                c = n(909377),
                l = n(371344),
                s = n(130304),
                d = n(731708),
                u = n(392237),
                m = n(111677),
                p = n.n(m),
                h = n(520913);
            const g = p().a4ed9072,
                b = (e, t) => {
                    const { autoFocus: n, imageUrl: u, onChange: m, style: p, value: b, valueMaxLength: f } = e,
                        y = (0, a.$u)();
                    return o.createElement(r.Z, { style: [w.root, p] }, u ? o.createElement(i.default, { size: y ? "xxxLarge" : "xLarge", uri: u }) : o.createElement(c.Z, { Icon: h.default }), m ? o.createElement(o.Fragment, null, o.createElement(l.Z, { autoFocus: n, inputStyle: [w.creatorIntroInput, !!f && w.creatorIntroInputWithCountdownCircle], isCompact: !0, leftAligned: !0, maxNumberOfLines: Number.MAX_SAFE_INTEGER, multiline: !0, name: "creatorIntro", numberOfLines: 1, onChange: m, placeholder: g, ref: t, style: w.creatorIntro, value: b }), f && o.createElement(r.Z, { style: w.countdownCircle }, o.createElement(s.Z, { count: b?.length ?? 0, maxCount: f, warningCount: f - 10 }))) : o.createElement(d.ZP, { style: [w.creatorIntro, w.creatorIntroReadOnly] }, b));
                },
                f = o.forwardRef(b),
                w = u.default.create((e) => ({ root: { display: "inline-flex", alignItems: "start", flexDirection: "row", gap: e.spaces.space12 }, creatorIntro: { backgroundColor: e.colors.cellBackground, borderBottomStartRadius: e.borderRadii.large, borderBottomEndRadius: e.borderRadii.large, borderTopStartRadius: 0, borderTopEndRadius: e.borderRadii.large, boxShadow: e.boxShadows.small, width: "100%" }, creatorIntroReadOnly: { padding: e.spaces.space24 }, creatorIntroInput: { minHeight: 0, paddingBottom: e.spaces.space24, paddingStart: e.spaces.space24, paddingEnd: e.spaces.space24, paddingTop: e.spaces.space24 }, creatorIntroInputWithCountdownCircle: { paddingBottom: e.spaces.space40 }, countdownCircle: { position: "absolute", bottom: e.spaces.space8, end: e.spaces.space8 } }));
        },
        144861: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(807896),
                r = n(202784),
                a = n(731708),
                i = n(392237),
                c = n(111677),
                l = n.n(c),
                s = n(366708),
                d = n(397377);
            const u = l().d409ce3c,
                m = (e, t) => {
                    const { name: n, style: i, ...c } = e;
                    return r.createElement(s.Z, { style: i }, r.createElement(a.ZP, { "aria-level": 1, role: "heading", size: "title3", weight: "heavy" }, r.createElement(l().I18NFormatMessage, { $i18n: "g7970bc7", name: n ?? "" }, r.createElement("br", null))), r.createElement(a.ZP, { style: h.subheader }, u), r.createElement(d.Z, (0, o.Z)({}, c, { ref: t, style: h.intro })));
                },
                p = r.forwardRef(m),
                h = i.default.create((e) => ({ subheader: { marginTop: e.spaces.space8 }, intro: { marginTop: e.spaces.space36 } }));
        },
        8685: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(478039),
                a = n(734189),
                i = n(144861);
            const c = ({ badgeImageUrl: e, badgeName: t, badgeScreenName: n, descriptionValue: c, imageUrl: l, introValue: s, isBlueVerified: d, isProtected: u, isVerified: m, name: p, screenName: h }) => o.createElement(o.Fragment, null, o.createElement(i.Z, { imageUrl: l, name: p, value: s }), o.createElement(a.Z, { imageUrl: l, screenName: h, value: c, withVisibilityCallout: !0 }), o.createElement(r.Z, { imageUrl: e, isBlueVerified: d, isProtected: u, isVerified: m, name: t, screenName: n, withBackgroundTweets: !0 }));
        },
        783373: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(325686),
                a = n(731708),
                i = n(392237);
            const c = (e) => {
                    const { color: t, description: n, style: i, title: c } = e;
                    return o.createElement(r.Z, { style: i }, o.createElement(a.ZP, { "aria-level": 2, color: t, role: "heading", size: "title4", weight: "heavy" }, c), n && o.createElement(a.ZP, { color: "gray700", style: l.description }, n));
                },
                l = i.default.create((e) => ({ description: { marginTop: e.spaces.space12 } }));
        },
        97882: (e, t, n) => {
            n.d(t, { T: () => a, x: () => i });
            var o = n(111677),
                r = n.n(o);
            const a = { AED: r().d857e44d, ALL: r().cb87e3db, ARS: r().a9d5ffd1, AUD: r().a0e8371d, BAM: r().gcc50dc9, BDT: r().a6a43585, BGN: r().a0cc8f2d, BHD: r().i31c32c5, BRL: r().i7dc69e9, BYR: r().c14a6c03, CAD: r().jaa3d537, CHF: r().a824080b, CLP: r().d9c0bedb, CNY: r().bf8c0613, COP: r().i8163625, CZK: r().adb53ba1, DKK: r().iabf697d, DZD: r().a1a0555b, EGP: r().f266f3d9, EUR: r().a9a8652b, GBP: r().dbf40761, GHS: r().b0d993d9, GTQ: r().ac1308e1, HKD: r().a7889ab3, HRK: r().c614f5cd, HUF: r().i55d57e3, IDR: r().e4b6002b, ILS: r().d28e983b, INR: r().e8c9232d, IQD: r().c8994ae1, ISK: r().f821c2a5, JPY: r().j348b9c9, KES: r().i6f93b9b, KRW: r().c6150bd5, KWD: r().i8921e09, KZT: r().ef239279, LBP: r().hecdb149, MAD: r().fdd039b7, MKD: r().f30c2c37, MXN: r().d9ea7bff, MYR: r().ea3df4b7, NGN: r().jaac21bb, NOK: r().hb435ced, NZD: r().ce699d81, PEN: r().bc56d3d7, PHP: r().f8561913, PKR: r().g6485d53, PLN: r().ff561cc1, QAR: r().b42011d3, RON: r().a6660bcd, RSD: r().f9b80449, RUB: r().gdee4d5d, SAR: r().h36f2103, SEK: r().a19ad037, SGD: r().g713f699, THB: r().ff2e39af, TND: r().be34316d, TRY: r().aef81b75, TWD: r().fcce70a5, TZS: r().jc9d352f, UAH: r().be1cb8c5, UGX: r().j9371501, USD: r().j7d4397d, VEF: r().d61441dd, VND: r().e2a99e97, ZAR: r().f7ce19ab, ZMW: r().b2a0213f },
                i = ({ amount: e, currencyCode: t = "USD", formatter: n = 1e6, removeTrailingZeros: o = !1, strictAmount: r = !1 }) => {
                    const i = r ? e : parseInt(e, 10) / n,
                        l = a[t]?.(i);
                    return o ? c(l) : l;
                },
                c = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        130304: (e, t, n) => {
            n.d(t, { Z: () => g });
            var o = n(202784),
                r = n(466999),
                a = n(325686),
                i = n(111677),
                c = n.n(i),
                l = n(408369),
                s = n(764503),
                d = n(392237);
            const u = c().c2fc878d,
                m = c().db11b27f,
                p = (e) => e,
                h = d.default.create(({ colors: e }) => ({ root: { alignItems: "flex-start", minHeight: 30, minWidth: 30 }, center: { alignItems: "center", justifyContent: "center", margin: "auto" }, progressCircle: { transitionDuration: "0.2s", transitionProperty: "opacity" }, hide: { opacity: 0 }, text: { fontSize: 13, lineHeight: "0.8", minWidth: 16, textAlign: "center" }, gray700: { color: e.gray700 }, red500: { color: e.red500 } })),
                g = (e) => {
                    const { count: t, maxCount: n, formatNumber: i = p, warningCount: c } = e,
                        g = n - t,
                        b = g >= 0 ? m({ count: i(g) }) : u({ count: i(t - n) }),
                        f = t >= c ? o.createElement(r.Z, { "aria-atomic": !0, "aria-live": "polite", style: d.default.visuallyHidden }, b) : null,
                        w = (0, l.Z)(g, n),
                        y = t >= n ? "red500" : t >= c ? "yellow500" : "primary",
                        E = o.createElement(s.Z, { color: y, progress: w, size: t >= c ? 30 : 20, style: [h.progressCircle, g <= -10 && h.hide] }),
                        C = t >= c ? o.createElement(r.Z, { style: [h.text, g > 0 ? h.gray700 : h.red500] }, i(g)) : null;
                    return o.createElement(a.Z, { style: [h.root, h.center], testID: "countdown-circle" }, f, E, o.createElement(a.Z, { style: [d.default.absoluteFill, h.center] }, C));
                };
        },
        941978: (e, t, n) => {
            n.d(t, { C: () => o });
            class o {
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
            new o();
        },
        491915: (e, t, n) => {
            n.d(t, { ZP: () => b });
            n(571372);
            var o = n(202784),
                r = n(325686),
                a = n(392237),
                i = n(111677),
                c = n.n(i),
                l = n(643442),
                s = n(466445),
                d = n(731708),
                u = n(154003),
                m = n(173739);
            const p = c().jcf3e7a2;
            function h({ animation: e, autoplay: t }) {
                const [n, a] = o.useState(t),
                    [i, c] = o.useState(0);
                return (
                    o.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && c(Math.round(e.currentTime));
                        });
                    }, [e]),
                    o.createElement(
                        r.Z,
                        { style: g.container },
                        o.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? o.createElement(l.default, null) : o.createElement(s.default, null),
                            onClick: function () {
                                n ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        o.createElement(d.ZP, { style: g.frames }, `${i}/${e.totalFrames}`),
                        o.createElement(
                            r.Z,
                            { style: g.slider },
                            o.createElement(m.Z, {
                                "aria-label": p,
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
            const g = a.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function b(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: i, onError: c, withControls: l } = e,
                    s = o.useRef(void 0),
                    d = o.useRef({ animationLoaded: !1 }),
                    u = o.useRef(null),
                    [m, p] = o.useState(!1);
                return (
                    o.useEffect(() => {
                        function o(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: r } = d.current;
                        r ||
                            ((d.current.animationLoaded = !0),
                            f.load().then((r) => {
                                if (r && u.current) {
                                    const a = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        l = r.loadAnimation(a);
                                    (s.current = l),
                                        (l.onError = (e) => {
                                            const t = new w(e);
                                            "function" == typeof c && c(t), o(l, t);
                                        }),
                                        l.addEventListener("DOMLoaded", () => {
                                            p(!0), t && (l.play(), i && i());
                                        }),
                                        l.addEventListener("complete", () => {
                                            o(l);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, a, i, c, l]),
                    o.useEffect(
                        () =>
                            function () {
                                s.current && s.current.destroy();
                            },
                        [s],
                    ),
                    o.createElement(r.Z, null, o.createElement(r.Z, { style: [e.animationContainerStyle, y.centerAnimation] }, o.createElement("div", { ref: u, style: e.animationStyle }), l && s.current && m && o.createElement(h, { animation: s.current, autoplay: t })))
                );
            }
            b.Prepare = function () {
                return (
                    o.useEffect(() => {
                        f.load();
                    }, []),
                    null
                );
            };
            const f = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class w extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, w), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const y = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        776588: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(325686),
                a = n(392237);
            const i = a.default.create((e) => ({ root: { display: "flex", flexDirection: "row", flexWrap: "nowrap", overflow: "hidden", width: "100%" }, borderRadius: { borderRadius: e.borderRadii.infinite }, lineWrap: { flexWrap: "wrap", overflow: "visible" }, word: { backgroundColor: e.colors.gray300, height: e.spaces.space4 }, wordWrapper: { justifyContent: "center" } })),
                c = function ({ color: e, lineHeightPx: t, maxWidthPx: n, style: c, withBorderRadius: l, withLineWrap: s, wordHeightPx: d, wordPercentWidths: u, wordSpacingPx: m }) {
                    const p = o.useMemo(
                        () =>
                            u.map((n, c) => {
                                const s = m || a.default.theme.spaces.space4,
                                    p = c !== u.length - 1 ? s : 0,
                                    h = o.createElement(r.Z, { key: c, style: [i.word, { width: t ? "100%" : `${n}%` }, e && { backgroundColor: a.default.theme.colors[e] }, !t && { marginEnd: p }, l && i.borderRadius, !!d && { height: d }] });
                                return t ? o.createElement(r.Z, { key: c, style: [i.wordWrapper, t && { marginEnd: p }, { height: t, width: `${n}%` }] }, h) : h;
                            }),
                        [e, t, l, d, m, u],
                    );
                    return o.createElement(r.Z, { style: [i.root, s && i.lineWrap, { maxWidth: n || "none" }, c] }, p);
                };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var o = n(202784),
                r = n(325686),
                a = n(827515),
                i = n(461756),
                c = n(731708),
                l = n(392237);
            const s = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const o = (0, a.Z)(e) ? (e > (n.count || 0) ? s : d) : s;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: o };
                    });
                },
                m = {};
            [s, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === s ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === s ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                h = l.default.create({ root: { overflow: "hidden" } }),
                g = (e) => {
                    const { children: t, containerStyle: n, count: l, ...d } = e,
                        [g, b] = o.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: s }),
                        f = o.useRef(!1);
                    return (
                        o.useEffect(
                            () => (
                                (f.current = !0),
                                function () {
                                    f.current = !1;
                                }
                            ),
                            [],
                        ),
                        o.useEffect(() => {
                            if (f.current)
                                if (i.Z.reducedMotionEnabled) b((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== g.pendingText) {
                                    t === g.text || ((0, a.Z)(e.count) && g.count === e.count) ? b((e) => ({ ...e, pendingCount: null, pendingText: null })) : (b((n) => ({ ...n, pendingCount: e.count, pendingText: t })), g.animating || u(e.count, t, b));
                                }
                        }, [t]),
                        o.useEffect(() => {
                            f.current &&
                                !1 === g.animating &&
                                (g.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && b((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : g.pendingText && u(g.pendingCount, g.pendingText, b));
                        }, [g.animating, g.oldText]),
                        o.useMemo(() => {
                            const e = m[g.transitionDirection],
                                t = g.oldText && !i.Z.reducedMotionEnabled,
                                a = !g.animating && g.oldText && !i.Z.reducedMotionEnabled,
                                l = { ...p, ...(g.animating ? e.post : e.active) },
                                s = { ...(a ? e.pre : e.active) };
                            return o.createElement(
                                r.Z,
                                { style: [h.root, n] },
                                t ? o.createElement("span", { style: l }, o.createElement(c.ZP, d, g.oldText)) : null,
                                o.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, b),
                                        style: s,
                                    },
                                    o.createElement(c.ZP, d, g.text),
                                ),
                            );
                        }, [n, d, g, f, b])
                    );
                };
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => C });
            var o = n(202784),
                r = n(325686),
                a = n(461756),
                i = n(731708),
                c = n(58881),
                l = n(530732),
                s = n(224162),
                d = n(491915),
                u = n(392237),
                m = n(551611),
                p = n(111677),
                h = n.n(p),
                g = n(891198),
                b = n(537392),
                f = n(280278);
            const w = h().e8d93005,
                y = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                E = ({ color: e, count: t }) => {
                    const n = (0, g.wl)(t, !0);
                    return o.createElement(b.ZP, null, ({ containerWidth: r }) => {
                        return o.createElement(f.ZP, { color: e, count: t, size: "subtext2", style: [y.count, ((a = r), a < u.default.theme.breakpoints.small && y.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || n.length >= 5 ? w(t) : n) : void 0);
                        var a;
                    });
                };
            class C extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: a, decoration: c } = this.props;
                            return o.createElement(s.ZP.Consumer, null, ({ direction: l }) => o.createElement(i.ZP, { color: e ? n : a, dir: l, style: [x.inner, e && "blue500" === n && x.blue500] }, o.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), c, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: r, iconSize: a, isActive: i, isDisabled: s, showBackgroundWhenActive: d } = this.props,
                                m = c.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                p = d && i && !e?.isHovered;
                            return o.createElement(l.Z, { hoverLabel: r, interactiveStyles: m, interactivityState: e, style: [u.default.absoluteFill, v[p ? "haloBackground" : n], !s && x.iconBackground, "small" === a && x.iconSmallBoundingBox, p && x.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: r, isFaded: i, onAnimationEnd: c, onAnimationStart: l, onError: s, showAnimation: p, transitionAnimationUrl: h } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && p) return o.createElement(d.ZP, { animation: h || m.Bf, animationContainerStyle: Z[t], animationStyle: S, onAnimationEnd: c, onAnimationStart: l, onError: s });
                            {
                                const a = n && e ? e : this.props.Icon;
                                return o.createElement(a, { style: [Z[t], !r && i && x.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? o.createElement(E, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: i, isDisabled: c, isPresentational: s, keyboardShortcut: m, link: p, preventFocusShift: h, renderMenu: g, renderWrapper: b = o.Fragment, style: f, testID: w } = this.props,
                        y = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return o.createElement(
                        r.Z,
                        { style: [x.root, f] },
                        o.createElement(
                            b,
                            null,
                            s
                                ? this._renderContent(i)
                                : o.createElement(l.Z, { "aria-haspopup": g ? "menu" : void 0, "aria-label": e, disabled: c, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: m, link: p, onClick: this._handlePress, preventFocusShift: h, renderMenu: g, style: [x.triggerAreaRoot, x.outlineNone], testID: w }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: o } = e,
                                          r = i || n || o || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        y ? o.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            C.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const Z = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                v = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                x = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                k = "224.5%",
                S = { width: k, height: k };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => r, ZP: () => i });
            var o = n(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends o.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const i = new a();
        },
        721083: (e, t, n) => {
            n.d(t, { Z: () => v });
            var o = n(807896),
                r = (n(571372), n(202784)),
                a = n(900664),
                i = n(111677),
                c = n.n(i),
                l = n(432181),
                s = n(761744),
                d = n(323265),
                u = n(811176),
                m = n(233184),
                p = n(522171),
                h = n(40644),
                g = n(551611);
            const b = c().d636ebc6,
                f = c().eb3a8b0c,
                w = c().j472ecfc,
                y = c().a0af935c,
                E = c().dac92b0d,
                C = c().aa650427;
            function Z(e = new Error("TweetActionLike.onError")) {
                m.Z.report(e);
            }
            function v({ actionMenuDescription: e, activeColor: t = "magenta500", color: n, count: i, enableActionMenu: c = !1, enableKeyboardShortcuts: m, iconSize: v, isDisabled: x, isFaded: k, isLiked: S, isPresentational: P, likeActionIconContainerRef: A, likeTransitionAnimation: R, link: D, onAnimationStart: I, onError: T = Z, onLikeActionSelect: B, onMenuCancel: W, onPress: M, style: L, testIDs: z, withCount: H }) {
                const F = H && "number" == typeof i;
                let N = S ? y : b;
                const _ = r.useMemo(() => ({ label: S ? f : b }), [S]);
                F && (N = S ? C({ count: i }) : E({ count: i }));
                const V = (function ({ isLiked: e, likeTransitionAnimation: t }) {
                    const [n, o] = r.useState(!1),
                        a = r.useRef(e);
                    return (
                        r.useEffect(() => {
                            ("object" == typeof t || g.ZP.check(t)) && e !== a.current && (o(e), (a.current = e));
                        }, [e, t]),
                        { onAnimationEnd: r.useCallback(() => o(!1), [o]), showAnimation: n, transitionAnimationUrl: t }
                    );
                })({ isLiked: S, likeTransitionAnimation: R });
                const K = r.useCallback(
                    (t) => {
                        const n = [
                            {
                                text: w,
                                onClick() {
                                    t(), B?.();
                                },
                                testID: z?.like,
                                Icon: l.default,
                            },
                        ];
                        return r.createElement(u.Z, {
                            description: e,
                            items: n,
                            onCloseRequested: function () {
                                t(), W?.();
                            },
                        });
                    },
                    [e, B, W, z?.like],
                );
                return r.createElement(
                    h.ZP,
                    (0, o.Z)({}, V, {
                        ActiveIcon: s.default,
                        Icon: l.default,
                        actionIconContainerRef: A,
                        activeColor: t,
                        "aria-label": N,
                        color: n,
                        count: i,
                        enableKeyboardShortcuts: m,
                        hoverLabel: _,
                        iconSize: v,
                        isActive: S,
                        isDisabled: x,
                        isFaded: k,
                        isPresentational: P,
                        keyboardShortcut: p.Z.shortcuts.like,
                        link: D,
                        onAnimationStart: I,
                        onError: T,
                        onPress: function () {
                            d.ZP.isFirefox() || a.Z.vibrate(5), M?.();
                        },
                        renderMenu: c ? K : void 0,
                        style: L,
                        testID: z && (S ? z.unlike : z.like),
                        withCount: F,
                    }),
                );
            }
        },
        15342: (e, t, n) => {
            n.d(t, { d: () => v, Z: () => x });
            var o = n(202784),
                r = n(111677),
                a = n.n(r),
                i = n(720600),
                c = n(155353),
                l = n(522171),
                s = n(40644),
                d = (n(136728), n(885724)),
                u = n(53674),
                m = n(811176);
            const p = a().f2919fb8,
                h = a().fd1e5446,
                g = a().bb5c5864,
                b = a().f65198c2;
            function f(e) {
                const t = (function ({ excludeRetweetAction: e = !1, excludeRetweetWithCommentAction: t = !1, excludeViewQuotesRetweetsAction: n = !1, isRetweeted: r, onMenuCancel: a, onQuoteTweetActionSelect: i, onRetweetActionSelect: l, onUnretweetActionSelect: s, onViewEngagementsActionSelect: m, retweetActionSubText: f, retweetWithCommentLink: w, testIDs: y, viewQuotesRetweetsLink: E }) {
                        const C = y?.retweetConfirm,
                            Z = y?.unretweetConfirm;
                        return o.useMemo(() => {
                            const o = [];
                            return (
                                r ||
                                    e ||
                                    o.push({
                                        text: p,
                                        subText: f,
                                        onClick() {
                                            a?.(), l?.();
                                        },
                                        testID: C,
                                        Icon: c.default,
                                    }),
                                r &&
                                    o.push({
                                        text: h,
                                        onClick() {
                                            a?.(), s?.();
                                        },
                                        testID: Z,
                                        Icon: c.default,
                                    }),
                                t ||
                                    o.push({
                                        text: g,
                                        onClick() {
                                            a?.(), i?.();
                                        },
                                        Icon: d.default,
                                        link: w,
                                    }),
                                n ||
                                    o.push({
                                        text: b,
                                        onClick() {
                                            a?.(), m?.();
                                        },
                                        Icon: u.default,
                                        link: E,
                                    }),
                                o
                            );
                        }, [e, t, n, r, a, i, l, s, m, f, w, C, Z, E]);
                    })(e),
                    { onMenuCancel: n } = e,
                    r = o.useCallback(() => {
                        n?.();
                    }, [n]);
                return o.createElement(m.Z, { description: e.actionMenuDescription, items: t, onCloseRequested: r });
            }
            const w = a().f2919fb8,
                y = a().fd1e5446,
                E = a().b8c465e2,
                C = a().dfad425d,
                Z = a().a386dc55,
                v = { RETWEET: "retweet", UNRETWEET: "unretweet", QUOTE: "quote", VIEW_ENGAGEMENTS: "view_engagements" };
            function x({ actionMenuDescription: e, activeColor: t = "green500", color: n, count: r, enableActionMenu: a = !1, enableKeyboardShortcuts: d, excludeRetweetAction: u, excludeRetweetWithCommentAction: m, excludeViewQuotesRetweetsAction: p, iconSize: h, isDisabled: g, isFaded: b, isPresentational: v, isRetweeted: x, onMenuCancel: k, onPress: S, onQuoteTweetActionSelect: P, onRetweetActionSelect: A, onUnretweetActionSelect: R, onViewEngagementsActionSelect: D, retweetActionSubText: I, retweetWithCommentLink: T, style: B, testIDs: W, viewQuotesRetweetsLink: M, withCount: L }) {
                const z = L && "number" == typeof r;
                let H = x ? E : w;
                z && (H = x ? Z({ count: r }) : C({ count: r }));
                const F = o.useMemo(() => ({ label: x ? y : w }), [x]),
                    N = o.useMemo(() => ({ retweetConfirm: W?.retweetConfirm, unretweetConfirm: W?.unretweetConfirm }), [W?.retweetConfirm, W?.unretweetConfirm]),
                    _ = o.useCallback(
                        (t) =>
                            o.createElement(f, {
                                actionMenuDescription: e,
                                excludeRetweetAction: u,
                                excludeRetweetWithCommentAction: m,
                                excludeViewQuotesRetweetsAction: p,
                                isRetweeted: x,
                                onMenuCancel: () => {
                                    t(), k?.();
                                },
                                onQuoteTweetActionSelect: P,
                                onRetweetActionSelect: A,
                                onUnretweetActionSelect: R,
                                onViewEngagementsActionSelect: D,
                                retweetActionSubText: I,
                                retweetWithCommentLink: T,
                                testIDs: N,
                                viewQuotesRetweetsLink: M,
                            }),
                        [e, u, m, p, x, k, P, A, R, D, I, N, T, M],
                    );
                return o.createElement(s.ZP, { ActiveIcon: i.default, Icon: c.default, activeColor: t, "aria-label": H, color: n, count: r, enableKeyboardShortcuts: d, hoverLabel: F, iconSize: h, isActive: x, isDisabled: g, isFaded: b, isPresentational: v, keyboardShortcut: l.Z.shortcuts.retweet, onPress: S, renderMenu: a ? _ : void 0, style: B, testID: x ? W?.unretweet : W?.retweet, withCount: z });
            }
        },
        990804: (e, t, n) => {
            n.d(t, { Z: () => le });
            var o = n(202784),
                r = n(325686),
                a = n(111677),
                i = n.n(a),
                c = n(976145),
                l = n(235902),
                s = n(392237);
            function d({ "aria-label": e, "aria-labelledby": t, children: n, displayStyle: a = "inline", id: i, style: c }) {
                const s = l.ZP.useProps().withEdgeToEdgeTweetAnatomy();
                return o.createElement(r.Z, { "aria-label": e, "aria-labelledby": t, id: i, role: "group", style: [u.container, u[`${a}Container`], s && u.noMaxWidth, c] }, n);
            }
            const u = s.default.create((e) => ({ container: { columnGap: e.spacesPx.space4, flexDirection: "row" }, inlineContainer: { justifyContent: "space-between", maxWidth: 600 }, noMaxWidth: { maxWidth: "none" }, blockContainer: { alignItems: "stretch", height: "100%", justifyContent: "space-around", minHeight: "1.875rem", paddingHorizontal: e.spaces.space4 } }));
            var m = n(807896),
                p = n(53674),
                h = n(40644);
            const g = { label: i().f2849136 },
                b = i().f206e970,
                f = { label: i().b05a39b2 },
                w = i().c7073f5b;
            n(571372);
            var y = n(900664),
                E = n(73416),
                C = n(883069),
                Z = n(323265),
                v = n(233184),
                x = n(522171);
            const k = i().dbc0c2f4,
                S = i().hf417cf0,
                P = i().c7a989ce,
                A = i().febd30ed,
                R = i().a8dc9587;
            function D(e = new Error("TweetActionBookmark.onError")) {
                v.Z.report(e);
            }
            var I = n(721083),
                T = n(194661);
            const B = i().hdf7226a,
                W = { label: B },
                M = i().c9940955;
            function L({ activeColor: e, color: t, count: n, enableKeyboardShortcuts: r, iconSize: a, isDisabled: i, isFaded: c, isPresentational: l, link: s, onPress: d, renderWrapper: u, style: m, testID: p, withCount: g }) {
                const b = g && "number" == typeof n,
                    f = b ? M({ count: n }) : B;
                return o.createElement(h.ZP, { Icon: T.default, activeColor: e, "aria-label": f, color: t, count: n, enableKeyboardShortcuts: r, hoverLabel: W, iconSize: a, isDisabled: i, isFaded: c, isPresentational: l, keyboardShortcut: x.Z.shortcuts.reply, link: s, onPress: d, renderWrapper: u, style: m, testID: p, withCount: b });
            }
            const z = o.memo(L);
            var H = n(15342),
                F = n(744610),
                N = n(137937),
                _ = n(461756),
                V = n(811176),
                K = n(638236);
            const j = { label: i().dc63da16 },
                U = i().cee0585c,
                $ = N.Z.bezier(0.45, 0, 0, 1);
            const G = function ({ activeColor: e, color: t, count: n, iconSize: r, isDisabled: a, isFaded: i, isPresentational: c, onPress: l, style: s, tweetLink: d, withCount: u }) {
                    const m = u && void 0 !== n;
                    return o.createElement(h.ZP, { Icon: p.default, activeColor: e, "aria-label": m ? w({ count: n }) : b, color: t, count: n, hoverLabel: m ? f : g, iconSize: r, isDisabled: a, isFaded: i, isPresentational: c, link: !d || a || i ? void 0 : `${d}/analytics`, onPress: l, style: s, withCount: m });
                },
                Q = I.Z,
                O = z,
                q = function ({ actionItems: e, actionMenuDescription: t, activeColor: n, color: r, enableKeyboardShortcuts: a, iconSize: i, isDisabled: c, isFaded: l, isPresentational: s, onMenuCancel: d, onPress: u, shouldAnimatePrompt: m, style: p, withCount: g }) {
                    const b = o.useRef({ wiggle: new F.Z.Value(0), scale: new F.Z.Value(1) }).current,
                        f = o.useCallback(
                            (n) =>
                                o.createElement(V.Z, {
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
                        m && !_.Z.reducedMotionEnabled && F.Z.parallel([F.Z.timing(b.wiggle, { toValue: 4, duration: 500, useNativeDriver: !1 }), F.Z.sequence([F.Z.timing(b.scale, y({ toValue: 1.45 })), F.Z.timing(b.scale, y({ toValue: 1 }))])]).start();
                    }, [b.scale, m, b.wiggle]);
                    const w = b.wiggle.interpolate({ inputRange: [0, 1, 2, 3, 4], outputRange: ["0deg", "15deg", "-15deg", "15deg", "0deg"] });
                    function y(e) {
                        return { ...e, useNativeDriver: !1, easing: $, duration: 250 };
                    }
                    const E = o.useRef([{}, { transform: [{ rotate: w }, { scale: b.scale }, { translate3d: "0, 0, 0" }], justifyContent: "inherit", display: "inline-grid" }]);
                    return o.createElement(F.Z.View, { style: E.current }, o.createElement(h.ZP, { Icon: K.Z, activeColor: n, "aria-label": U, color: r, enableKeyboardShortcuts: a, hoverLabel: j, iconSize: i, isDisabled: c, isFaded: l, isPresentational: s, keyboardShortcut: x.Z.shortcuts.share, onPress: u, renderMenu: l ? void 0 : f, style: p, withCount: g }));
                },
                Y = function ({ activeColor: e, color: t, count: n, enableKeyboardShortcuts: r, iconSize: a, isDisabled: i, isFaded: c, isBookmarked: l, isPresentational: s, onError: d = D, onPress: u, style: m, testIDs: p, withCount: g }) {
                    const b = g && "number" == typeof n;
                    let f = l ? P : k;
                    const w = o.useMemo(() => ({ label: l ? S : k }), [l]);
                    return (
                        b && (f = l ? R({ count: n }) : A({ count: n })),
                        o.createElement(h.ZP, {
                            ActiveIcon: E.default,
                            Icon: C.default,
                            activeColor: e,
                            "aria-label": f,
                            color: t,
                            count: n,
                            enableKeyboardShortcuts: r,
                            hoverLabel: w,
                            iconSize: a,
                            isActive: l,
                            isDisabled: i,
                            isFaded: c,
                            isPresentational: s,
                            keyboardShortcut: x.Z.shortcuts.bookmark,
                            onError: d,
                            onPress: function () {
                                Z.ZP.isFirefox() || y.Z.vibrate(5), u?.();
                            },
                            style: m,
                            testID: p && (l ? p.removeBookmark : p.bookmark),
                            withCount: b,
                        })
                    );
                };
            const X = i().a0af935c,
                J = i().b8c465e2,
                ee = i().c7a989ce,
                te = (e) => o.createElement(le.ActionAnalytics, e),
                ne = (e) => o.createElement(le.ActionLike, e),
                oe = (e) => o.createElement(le.ActionReply, e),
                re = (e) => o.createElement(le.ActionRetweet, e),
                ae = (e) => o.createElement(le.ActionShare, e),
                ie = (e) => o.createElement(le.ActionBookmark, e),
                ce = [];
            function le({ actionSize: e = "normal", activeColor: t, bookmarkCount: n, color: a = "gray700", displayStyle: s, enableKeyboardShortcuts: u = !0, isDisabled: m = !1, isBookmarked: p = !1, isFocalTweet: h = !1, isFromProtectedAccount: g, isLiked: b, isRetweeted: f, isPresentational: w, likeCount: y, id: E, renderAnalyticsAction: C = te, renderLikeAction: Z = ne, renderReplyAction: v = oe, renderRetweetAction: x = re, renderShareAction: k = ae, renderBookmarkAction: S = ie, replyCount: P, retweetCount: A, style: R, tweetLink: D, viewCount: I, viewState: T, withAnalytics: B = !1, withCount: W = !1, withBookmark: M = !1 }) {
                const L = o.useRef(null),
                    z = l.ZP.useProps(),
                    H = z.tweetViewCountsEnabled(),
                    F = z.testViewCountShow(),
                    N = H || F,
                    _ = B && N,
                    V = B && !_,
                    K = N ? "EnabledWithCount" === T && W : W,
                    j = o.useMemo(() => {
                        if (!W) return;
                        const e = i().b03835c7,
                            t = i().g4a195e7,
                            o = i().e089b42d,
                            r = i().e0a8fe39,
                            a = i().c58b2ab7;
                        return (0, c.Z)([P ? e({ replyCount: P }) : null, A ? t({ retweetCount: A }) : null, f ? J : null, y ? o({ likeCount: y }) : null, b ? X : null, p && M ? ee : null, n ? r({ bookmarkCount: n }) : null, I ? a({ viewCount: I }) : null].filter(Boolean), !0);
                    }, [n, p, b, f, y, P, A, I, W, M]),
                    U = o.useMemo(() => ({ color: a, iconSize: e, isDisabled: m }), [a, e, m]),
                    $ = o.useMemo(() => v({ ...U, activeColor: t, count: P, enableKeyboardShortcuts: u, isPresentational: w, withCount: W }), [U, t, P, u, w, W, v]),
                    G = o.useMemo(() => x({ ...U, activeColor: t, count: A, enableKeyboardShortcuts: u, isFromProtectedAccount: g, isRetweeted: f, isPresentational: w, withCount: W }), [U, t, A, u, g, f, w, W, x]),
                    Q = o.useMemo(() => Z({ ...U, activeColor: t, count: y, enableKeyboardShortcuts: u, isLiked: b, isPresentational: w, withCount: W }), [U, t, y, u, b, w, W, Z]),
                    O = o.useMemo(() => (_ ? C({ ...U, count: I, isPresentational: w, tweetLink: D, withCount: K }) : null), [_, U, I, w, D, K, C]),
                    q = o.useMemo(() => (M ? S({ ...U, activeColor: t, count: n, enableKeyboardShortcuts: u, isPresentational: w, isBookmarked: p, withCount: W }) : null), [M, U, t, n, u, w, p, W, S]),
                    Y = o.useMemo(() => (V ? C({ ...U, isPresentational: w, tweetLink: D }) : null), [V, U, w, D, C]),
                    le = o.useMemo(() => k({ ...U, actionItems: ce, activeColor: t, enableKeyboardShortcuts: u, isPresentational: w, withCount: W && V }), [U, t, u, w, V, W, k]);
                return o.createElement(r.Z, { ref: L }, o.createElement(d, { "aria-label": j, displayStyle: s, id: E, style: R }, $, G, Q, O, q, Y, le));
            }
            (le.ActionAnalytics = G),
                (le.ActionLike = Q),
                (le.ActionReply = O),
                (le.ActionRetweet = function ({ isFromProtectedAccount: e = !1, ...t }) {
                    return o.createElement(H.Z, (0, m.Z)({}, t, { excludeRetweetAction: t.excludeRetweetAction || e, excludeRetweetWithCommentAction: t.excludeRetweetWithCommentAction || e, isDisabled: t.isDisabled || (!t.isRetweeted && e) }));
                }),
                (le.ActionShare = q),
                (le.ActionBookmark = Y);
        },
        183806: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        408369: (e, t, n) => {
            function o(e, t) {
                return Math.min(1, 1 - e / t);
            }
            n.d(t, { Z: () => o });
        },
        748138: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const l = c;
        },
        155353: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const l = c;
        },
        900664: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = (e) => {
                "vibrate" in window.navigator && window.navigator.vibrate(e);
            };
            const r = {
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows~bundle.SuperFollowsSubscribe.eeb0092a.js.map
