"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsSuperFollows-7810f3b3"],
    {
        599974: (e, t, r) => {
            r.d(t, { Z: () => c });
            r(543673), r(240753), r(128399), r(136728);
            var l = r(202784),
                a = r(107267),
                s = r(323265);
            const c = () => {
                const e = (0, a.useHistory)();
                return l.useCallback(() => {
                    const t = { redirectPath: "/settings/monetization", flow: "creator" };
                    if (s.ZP.isWebView()) {
                        const r = new URLSearchParams(t);
                        e.push(`/settings/account/id_verification/start?${r.toString()}`);
                    } else e.push({ pathname: "/settings/account/id_verification/start", state: t });
                }, [e]);
            };
        },
        185439: (e, t, r) => {
            r.r(t), r.d(t, { default: () => H, superFollowsSettingsQuery: () => W });
            var l = r(185145),
                a = r(202784),
                s = (r(585488), r(107267)),
                c = r(750410),
                n = r(980407),
                i = r(883229),
                o = r(943914),
                u = r(725516),
                m = r(482924);
            r(614983);
            const p = a.createContext(),
                d = ({ children: e, ...t }) => a.createElement(p.Provider, { children: e, value: t });
            var g = r(928650),
                f = r(331380),
                b = r(423738),
                E = r(865559),
                Z = r(277660),
                w = r.n(Z),
                y = r(615027),
                _ = r(823508),
                h = r(628073),
                v = r(226445),
                k = r(540769),
                P = r(899382),
                C = r(699042),
                R = r(720816),
                x = r(599974),
                U = r(976235),
                I = r(87414),
                N = r(376755);
            const S = I.Z,
                F = U.Z,
                O = (e, t) => {
                    const r = w()(S, e),
                        l = !!w()(F, t).is_active_creator,
                        a = r.super_follows_application_status || "NotStarted",
                        s = r.stripe_account_status || "NotStarted",
                        c = r.verified_program_application_status?.rejected_super_follow_can_re_apply || !1,
                        n = (0, N.IU)(r),
                        i = (0, N.IH)(r),
                        o = (0, N.Ex)(r),
                        u = !!n && !!i && !!o;
                    return l ? R.D1.root : "Submitted" === a ? R.wU.submitted : "Waitlisted" === a ? R.wU.waitlisted : "Rejected" === a ? (c ? R.wU.root : R.wU.rejected) : "PendingIdv" === a ? R.LI : "Approved" === a ? (u && "Pending" === s ? R.NW.stripePending : u && "Completed" === s ? R.NW.stripeCompleted : R.NW.root) : R.wU.root;
                },
                T = E.Z,
                B = b.Z,
                D = f.Z,
                j = g.Z,
                V = ({ priceOfferings: e, subscriptionsPriceOfferings: t, user: r, viewer: l }) => {
                    const c = (0, x.Z)(),
                        n = w()(T, e),
                        i = w()(B, t),
                        o = w()(D, r),
                        u = w()(j, l),
                        m = O(o, u),
                        p = a.useCallback(() => (m === R.LI ? c() : a.createElement(y.Z, { to: m })), [m, c]);
                    return a.createElement(s.Switch, null, a.createElement(s.Route, { path: R.wU.root }, a.createElement(_.Z, { subscriptionsPriceOfferings: i, user: o, viewer: u })), a.createElement(s.Route, { path: R.NW.root }, a.createElement(v.Z, { priceOfferings: n, subscriptionsPriceOfferings: i, user: o, viewer: u })), a.createElement(s.Route, { path: R.D1.root }, a.createElement(h.Z, { priceOfferings: n, subscriptionsPriceOfferings: i, user: o, viewer: u })), a.createElement(s.Route, { exact: !0, path: R.o5 }, a.createElement(P.Z, null)), a.createElement(s.Route, { exact: !0, path: R.$w }, a.createElement(k.Z, null)), a.createElement(s.Route, { exact: !0, path: R.Km }, a.createElement(C.Z, null)), a.createElement(s.Route, { exact: !0, path: R.Jz }, p()));
                },
                W = l.Z,
                $ = () => {
                    const { data: e, ...t } = (0, m.A)(W, {}),
                        r = e?.super_follows_price_offerings,
                        l = e?.viewer?.user_results?.result,
                        s = e?.viewer,
                        c = e?.subscriptions_price_offerings;
                    return null == r || "User" !== l?.__typename || null == s || null == c ? null : a.createElement(d, t, a.createElement(V, { priceOfferings: r, subscriptionsPriceOfferings: c, user: l, viewer: s }));
                },
                z = { context: "SuperFollowsSettings" },
                H = a.memo(
                    (0, u.Z)(
                        () => {
                            const e = (0, s.useHistory)(),
                                t = a.useMemo(() => ({ type: "CustomRetry", content: (t) => a.createElement(n.Z, { backButtonType: "close", history: e }, a.createElement(c.Z, { onRequestRetry: t })) }), [e]);
                            return a.createElement(i.N, { errorConfig: z, fallback: t }, a.createElement(o.B, null, a.createElement($, null)));
                        },
                        { page: "settings", section: "superfollows" },
                    ),
                );
        },
        260094: (e, t, r) => {
            r.d(t, { Z: () => i });
            var l = r(202784),
                a = r(731708),
                s = r(674132),
                c = r.n(s),
                n = r(176544);
            const i = () => l.createElement(a.ZP, { color: "gray700" }, l.createElement(c().I18NFormatMessage, { $i18n: "a9c053c7" }, l.createElement(a.ZP, { color: "text", link: n.JD, weight: "bold" }, c().fde27650)));
        },
        978807: (e, t, r) => {
            r.d(t, { Z: () => m });
            var l = r(202784),
                a = r(325686),
                s = r(731708),
                c = r(392237),
                n = r(674132),
                i = r.n(n),
                o = r(698537);
            const u = [
                    { illustration: o.j.Gem, title: i().d8671da2, description: i().d126a504 },
                    { illustration: o.j.Bonus, title: i().d08d0bb2, description: i().ef29d2c2 },
                ],
                m = (e) => {
                    const { style: t } = e;
                    return l.createElement(
                        a.Z,
                        { role: "list", style: [p.list, t] },
                        u.map((e) => l.createElement(a.Z, { key: e.title, role: "listitem", style: p.listItem }, l.createElement(o.Z, { type: e.illustration }), l.createElement(a.Z, { style: p.listItemContent }, l.createElement(s.ZP, { style: p.listItemTitle, weight: "heavy" }, e.title), l.createElement(s.ZP, { color: "gray700" }, e.description)))),
                    );
                },
                p = c.default.create((e) => ({ list: { gap: e.spaces.space40 }, listItem: { flexDirection: "row", gap: e.spaces.space24 }, listItemContent: { flex: 1 }, listItemTitle: { marginBottom: e.spaces.space4 } }));
        },
        799163: (e, t, r) => {
            r.d(t, { Z: () => u });
            var l = r(202784),
                a = r(325686),
                s = r(731708),
                c = r(420412),
                n = r(392237),
                i = r(293723),
                o = r(263272);
            const u = ({ items: e }) =>
                    l.createElement(
                        a.Z,
                        { style: m.root },
                        e.map((e, t, r) => l.createElement(l.Fragment, { key: t }, l.createElement(a.Z, { key: e.label, style: m.item }, l.createElement(s.ZP, { style: m.label, weight: "bold" }, e.label), e.checked ? l.createElement(i.default, { style: m.iconChecked }) : l.createElement(o.default, { style: m.iconUnchecked })), r.length !== t + 1 && l.createElement(c.Z, null))),
                    ),
                m = n.default.create((e) => ({ root: { marginVertical: e.spaces.space16, backgroundColor: e.colors.gray0, padding: e.spaces.space12, borderRadius: e.borderRadii.medium, gap: e.spaces.space8 }, gap: { gap: e.spaces.space24 }, item: { flexDirection: "row" }, label: { flex: 1 }, iconChecked: { color: e.colors.green500 }, iconUnchecked: { color: e.colors.gray200 } }));
        },
        228477: (e, t, r) => {
            r.d(t, { Z: () => y });
            var l = r(202784),
                a = r(325686),
                s = r(891198),
                c = r(731708),
                n = r(420412),
                i = r(392237),
                o = r(674132),
                u = r.n(o),
                m = r(293723),
                p = r(263272),
                d = r(443781);
            const g = u().f09be7f8,
                f = u().c5f89b06,
                b = u().ff9f4475,
                E = u().b747ce3a,
                Z = u().c27f57ac,
                w = u().h63d2973,
                y = ({ failedRequirements: e }) => {
                    const { featureSwitches: t } = (0, d.QZ)(),
                        r = t.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        i = t.getNumberValue("creator_subscriptions_eligibility_verified_followers", 2e3),
                        o = t.getNumberValue("creator_subscriptions_eligibility_impressions", 5e6),
                        u = s.ZP.getTruncatedCount(i),
                        y = s.ZP.getTruncatedCount(o),
                        h = b({ minFollowersCount: u }),
                        v = [
                            { label: r ? f : g, checked: !e.includes("blue_subscription") },
                            { label: h, checked: !e.includes("followers") },
                            { label: w({ count: y }), checked: !e.includes("impressions") },
                            { label: E, checked: !e.includes("tweets") },
                            { label: Z, checked: !e.includes("age") },
                        ];
                    return l.createElement(
                        a.Z,
                        { style: _.root },
                        v.map((e, t, r) => l.createElement(l.Fragment, { key: t }, l.createElement(a.Z, { key: e.label, style: _.item }, l.createElement(c.ZP, { style: _.label, weight: "bold" }, e.label), e.checked ? l.createElement(m.default, { style: _.iconChecked }) : l.createElement(p.default, { style: _.iconUnchecked })), r.length !== t + 1 && l.createElement(n.Z, null))),
                    );
                },
                _ = i.default.create((e) => ({ root: { backgroundColor: e.colors.gray0, padding: e.spaces.space12, borderRadius: e.borderRadii.medium, gap: e.spaces.space8 }, gap: { gap: e.spaces.space24 }, item: { flexDirection: "row" }, label: { flex: 1, marginEnd: e.spaces.space8 }, iconChecked: { color: e.colors.green500 }, iconUnchecked: { color: e.colors.gray200 } }));
        },
        409771: (e, t, r) => {
            r.d(t, { Z: () => i });
            var l = r(202784),
                a = r(731708),
                s = r(674132),
                c = r.n(s),
                n = r(176544);
            const i = () => l.createElement(a.ZP, { color: "gray700" }, l.createElement(c().I18NFormatMessage, { $i18n: "fdf28443" }, l.createElement(a.ZP, { color: "text", link: n.JD, weight: "bold" }, c().b8a69fa0)));
        },
        592353: (e, t, r) => {
            r.d(t, { Z: () => w });
            var l = r(871267),
                a = r(202784),
                s = (r(585488), r(277660)),
                c = r.n(s),
                n = r(420412),
                i = r(392237),
                o = r(674132),
                u = r.n(o),
                m = r(733078),
                p = r(724345),
                d = r(569778),
                g = r(720816),
                f = r(209434);
            const b = u().d5aa8de0,
                E = u().j0bbda92,
                Z = l.Z,
                w = ({ user: e }) => {
                    const t = c()(Z, e),
                        r = t?.legacy?.profile_image_url_https ?? void 0,
                        l = t?.legacy?.protected ?? !1,
                        s = t?.legacy?.verified ?? !1,
                        i = t?.is_blue_verified,
                        o = t?.legacy?.name ?? void 0,
                        u = t?.legacy?.screen_name ?? void 0;
                    return a.createElement(a.Fragment, null, a.createElement(p.Z, { style: y.interstitial }, a.createElement(d.Z, { headline: b, subtext: E })), a.createElement(n.Z, null), a.createElement(p.Z, { style: y.previewCallout }, a.createElement(f.Z, { path: g.Km })), a.createElement(m.Z, { imageUrl: r, isBlueVerified: i || !1, isProtected: l, isVerified: s, name: o, screenName: u, style: y.preview, withBackgroundTweets: !0 }));
                },
                y = i.default.create((e) => ({ interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 }, previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 }, preview: { margin: e.spaces.space16 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsSuperFollows-7810f3b3.d32f3e2a.js.map
