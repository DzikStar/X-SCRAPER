"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-cff17ecc"],
    {
        195210: (e, t, a) => {
            a.r(t), a.d(t, { default: () => K, monetizationSettingsQuery: () => G });
            var n = a(56301),
                i = a(202784),
                r = a(325686),
                s = (a(585488), a(107267)),
                o = a(688715),
                l = a(154003),
                c = a(392237),
                d = a(674132),
                p = a.n(d),
                u = a(491831),
                m = a(856151),
                b = a(711223),
                g = a(860747),
                _ = a(199213),
                v = a(253518),
                f = a(92235),
                y = a(534763),
                h = a(698537),
                E = a(443781),
                S = a(652904),
                Z = a(883229),
                C = a(725516),
                I = a(535338),
                w = a(264922),
                k = a(873959),
                P = a(277660),
                A = a.n(P),
                R = a(731708);
            const T = p().c9b82b4c,
                j = p().ibb5e1c8,
                N = p().b255df58,
                z = p().b3f834c8,
                x = p().i14be2c6,
                B = { Approved: T, NotStarted: null, Rejected: j, Submitted: N, Waitlisted: z },
                D = k.Z,
                L = ({ viewer: e }) => {
                    const t = A()(D, e),
                        a = !!t?.is_active_creator ? x : B[t?.user_results?.result?.super_follows_application_status || "NotStarted"];
                    return i.createElement(R.ZP, { color: "gray700", size: "subtext2" }, a);
                },
                M = p().d299431c,
                F = p().d7b51c68,
                H = p().f66d24be,
                O = p().i8132774,
                X = p().j087774e,
                V = p().a1222584,
                W = (0, o.ju)("https://help.x.com/using-twitter/creator-dashboard"),
                U = { context: "MONETIZATION_SETTINGS" },
                G = n.Z,
                Q = () => i.createElement(r.Z, { style: J.monetizationOptions }, i.createElement(f.ZP, { Icon: u.default, decoration: i.createElement(h.Z, { type: h.j.Crown }), header: F, iconColor: "plum500", link: "/settings/superfollows", primaryText: O })),
                $ = () => i.createElement(r.Z, { style: J.monetizationOptions }, i.createElement(f.ZP, { Icon: m.default, decoration: i.createElement(h.Z, { type: h.j.Award }), header: X, link: "/settings/awards", primaryText: V })),
                q = () => {
                    const { featureSwitches: e } = i.useContext(E.rC),
                        t = e.isTrue("creator_monetization_web_tips_onboarding_enabled"),
                        a = e.isTrue("creator_monetization_web_tips_dashboard_enabled"),
                        { viewer: n } = (0, I.p)(G, { awardsEnabled: a }),
                        r = !!n.is_active_creator,
                        s = n.user_results.result,
                        o = s.super_follows_application_status || "NotStarted",
                        l = a && s.award_eligible,
                        c = 0 === s.awards_eligibility?.length,
                        d = e.isTrue("responsive_web_stripe_account_creation_enabled") ? s : s && r;
                    return i.createElement(i.Fragment, null, d ? i.createElement(_.Z, { stripeStatus: s.stripe_account_status, type: "earnings", user: s }) : null, "NotStarted" === o ? i.createElement(Q, null) : i.createElement(v.Z, { description: r ? null : i.createElement(L, { viewer: n }), isActiveCreator: r, user: s }), c && t && !l ? i.createElement($, null) : i.createElement(g.Z, { user: s }));
                },
                Y = () => {
                    const e = i.useMemo(() => ({ type: "CustomRetry", content: () => i.createElement(y.H, { Icon: u.default, description: null, iconColor: "plum500", label: F, link: "/settings/superfollows" }) }), []);
                    return i.createElement(Z.N, { errorConfig: U, fallback: e }, i.createElement(i.Suspense, { fallback: null }, i.createElement(q, null)));
                },
                J = c.default.create((e) => ({ monetizationOptions: { margin: e.spaces.space16 }, infoIconGray: { color: e.colors.gray300 } })),
                K = i.memo(
                    (0, C.Z)(
                        () => {
                            const e = (0, s.useLocation)(),
                                t = () => i.createElement(l.ZP, { "aria-label": H, icon: i.createElement(b.default, null), link: W, type: "primaryText" });
                            return i.createElement(S.Z, null, i.createElement(w.Z, { location: e, rightControl: i.createElement(t, null), screenType: "primaryDetail", title: M }, i.createElement(Y, null)));
                        },
                        { page: "settings", section: "monetization" },
                    ),
                );
        },
        934410: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ee });
            var n = a(807896),
                i = (a(136728), a(202784)),
                r = a(325686),
                s = a(107267),
                o = a(688715),
                l = a(731708),
                c = a(868634),
                d = a(154003),
                p = a(40610),
                u = a(392237),
                m = a(674132),
                b = a.n(m),
                g = a(711223),
                _ = a(130919),
                v = a(281629),
                f = a(443781),
                y = a(652904),
                h = a(883229),
                E = a(952793),
                S = a(725516),
                Z = a(615027),
                C = a(264922),
                I = a(284430),
                w = a(599974),
                k = a(620243),
                P = a(698579);
            const A = b().d299431c,
                R = b().f66d24be,
                T = b().fd74390a,
                j = (0, o.ju)("https://help.x.com/using-twitter/creator-dashboard"),
                N = { context: "MONETIZATION_SETTINGS" },
                z = b().e8dc82e2,
                x = b().c12c5eb6,
                B = b().j53f5eb0,
                D = b().e9c1273a,
                L = b().jd176c82,
                M = b().d6ff74ca,
                F = b().e89cdac0,
                H = b().dd7a54b4,
                O = b().c747df1c,
                X = b().jff3ab68,
                V = b().j2876824,
                W = b().ebd06fb0,
                U = b().f65b960c,
                G = b().i4a1e936,
                Q = b().f5931b6a,
                $ = { appealLink: i.createElement(l.ZP, { link: (0, o.ju)("https://help.x.com/using-twitter/creator-ads-revenue-sharing") }) },
                q = { appealLink: i.createElement(l.ZP, { link: (0, o.ju)("https://help.x.com/using-x/creator-revenue-sharing") }) };
            function Y() {
                const e = (0, s.useLocation)(),
                    t = (0, E.hC)("super_follow_web_application_enabled"),
                    a = (0, E.hC)("responsive_web_ad_revenue_sharing_setup_enabled"),
                    o = (0, E.hC)("subscriptions_upsells_monetization_redesign_enabled"),
                    u = (0, E.hC)("responsive_web_ad_revenue_sharing_url_update_enabled"),
                    { userClaims: m } = (0, f.QZ)(),
                    y = m.isAnyPremiumSubscriber(),
                    h = (0, w.Z)(),
                    { stripe_connect_account: S, verification_info: N, verified_program_application_status: Y, verified_program_eligibility: J, verified_user_profiles: ee } = (0, k.Z)(),
                    te = ee?.super_follows_user_profile?.is_active,
                    ae = ee?.ad_revenue_sharing_user_profile?.is_active,
                    ne = Y?.super_follows_application_status || "NotStarted",
                    ie = Y?.ad_revenue_sharing_application_status || "NotStarted",
                    re = Y?.rejected_super_follow_can_re_apply || !1,
                    se = N?.identity_verification_status,
                    oe = se === _.t.IdentityVerified,
                    le = !1 === ae && (ee?.ad_revenue_sharing_user_profile?.inactive_reasons || []).find((e) => "FlaggedByReview" === e.inactive_reason_type),
                    ce = "NotStarted" === S?.status || "Incomplete" === S?.status,
                    de = ce && ((a && ae) || (t && te)),
                    pe = i.useMemo(() => J?.super_follows_eligibility || [], [J]),
                    ue = "PendingIdv" === ne,
                    me = i.useMemo(() => J?.ad_revenue_sharing_eligibility || [], [J]),
                    be = "PendingIdv" === ie,
                    ge = ae && !oe,
                    _e = (te || "NotStarted" !== ne) && !oe,
                    ve = "Completed" === S?.status,
                    fe = ue || be || ge || _e,
                    ye = fe && se === _.t.CanVerifyIdentity,
                    he = (0, I.isPendingStatus)(e) && fe && se === _.t.PendingResult,
                    Ee = i.useMemo(() => {
                        const e = [];
                        return (te || ("NotStarted" !== ne && "PendingIdv" !== ne && "Rejected" !== ne)) && e.push({ ...(0, P.Xb)({ id: P.XS.subscriptions, isActive: !!te, eligibility: pe, applicationStatus: ne, pendingIdv: !oe, idvStatus: se, revShareUpdateEnabled: u, rejectedCreatorCanReapply: re }) }), ae && !ce && e.push((0, P.Xb)({ id: P.XS.adRev, isActive: !0, eligibility: me, applicationStatus: "Approved", pendingIdv: !oe, idvStatus: se, revShareUpdateEnabled: u, rejectedCreatorCanReapply: re })), e;
                    }, [ae, ce, te, ne, pe, me, se, oe, u, re]),
                    Se = i.useMemo(() => {
                        const e = [];
                        return !te && t && ("NotStarted" === ne || "PendingIdv" === ne || "Rejected" === ne) && e.push((0, P.Xb)({ id: P.XS.subscriptions, isActive: !1, eligibility: pe, applicationStatus: ne, pendingIdv: ue, idvStatus: se, revShareUpdateEnabled: u, rejectedCreatorCanReapply: re })), null == ae && a ? e.push((0, P.Xb)({ id: P.XS.adRev, isActive: !1, eligibility: me, applicationStatus: ie, pendingIdv: be, idvStatus: se, revShareUpdateEnabled: u, rejectedCreatorCanReapply: re })) : ae && ce && e.push((0, P.Xb)({ id: P.XS.adRev, isActive: !1, eligibility: me, applicationStatus: ie, isPayoutSetupIncomplete: ce, pendingIdv: !oe, idvStatus: se, revShareUpdateEnabled: u, rejectedCreatorCanReapply: re })), e;
                    }, [a, se, be, ue, ae, ce, te, t, oe, ne, ie, me, pe, u, re]),
                    Ze = 0 === Ee.length && !t && !a,
                    Ce = i.useCallback((e) => i.createElement(r.Z, { style: K.programHeader }, i.createElement(l.ZP, { size: "headline2", weight: "bold" }, e), oe && i.createElement(c.ZP, { altLabel: T, style: K.idvLabel, type: "bestValue" }, T)), [oe]),
                    Ie = i.useMemo(() => i.createElement(g.default, null), []),
                    we = i.useMemo(() => i.createElement(r.Z, { style: K.rightControl }, i.createElement(d.ZP, { "aria-label": R, icon: Ie, link: j, type: "primaryText" })), [Ie]);
                return (0, P.F9)({ subscriptionsApplicationStatus: ne, revShareApplicationStatus: ie, revShareActive: ae, subscriptionsActive: te, isAnyPremiumSubscriber: y, monetizationUpsellEnabled: o })
                    ? i.createElement(Z.Z, { to: "/i/monetization" })
                    : i.createElement(
                          C.Z,
                          { location: e, rightControl: we, screenType: "primaryDetail", title: A },
                          i.createElement(
                              r.Z,
                              { style: K.root },
                              he && i.createElement(p.Z.Success, { headline: W, style: K.pendingIdvCallout, testID: "submittedIDVCallout", text: U, withIcon: !0 }),
                              !!Ee.length &&
                                  i.createElement(
                                      r.Z,
                                      { testID: "active-programs" },
                                      Ce(z),
                                      Ee.map((e) => i.createElement(v.Z, (0, n.Z)({ key: e.id, styleOverride: K.pivot }, e))),
                                  ),
                              !!Se.length &&
                                  i.createElement(
                                      r.Z,
                                      { style: Ee.length ? K.sectionHeader : null, testID: "available-programs" },
                                      Ce(x),
                                      i.createElement(l.ZP, { color: "gray700", style: K.programInstruction }, u ? D : B),
                                      Se.map((e) => i.createElement(v.Z, (0, n.Z)({ key: e.id, styleOverride: K.pivot }, e))),
                                  ),
                              Ze && !Se.length && ce && i.createElement(r.Z, { testID: "notPayoutCountry" }, i.createElement(l.ZP, { align: "left", size: "headline2", weight: "bold" }, L), i.createElement(l.ZP, { align: "left", color: "gray700", style: K.programInstruction }, M)),
                              i.createElement(v.Z, P.Fx),
                              le && i.createElement(l.ZP, { align: "left", color: "gray700", style: K.programInstruction, testID: "appealMessage" }, u ? i.createElement(b().I18NFormatMessage, { $i18n: "a4fc317d" }, i.cloneElement(q.appealLink, null, b().c8798a95)) : i.createElement(b().I18NFormatMessage, { $i18n: "a8e78be7" }, i.cloneElement($.appealLink, null, b().d809ac49))),
                              (ve || de) && i.createElement(r.Z, { style: K.setupCallout, testID: "stripeSection" }, !ve && de && i.createElement(i.Fragment, null, i.createElement(l.ZP, { size: "headline2", weight: "bold" }, H), i.createElement(l.ZP, { color: "gray700", style: K.programInstruction }, G)), i.createElement(d.ZP, { link: ve ? "https://connect.stripe.com/app/express" : P.j0, style: K.programInstruction, testID: "payoutActionButton", type: "primaryOutlined" }, ve ? F : O)),
                              ye && i.createElement(r.Z, { style: K.setupCallout, testID: "creatorIdvSection" }, i.createElement(l.ZP, { size: "headline2", weight: "bold" }, X), i.createElement(l.ZP, { color: "gray700", style: K.programInstruction }, Q), i.createElement(d.ZP, { onPress: h, style: K.programInstruction, testID: "idvActionButton", type: "primaryOutlined" }, V)),
                          ),
                      );
            }
            function J() {
                const e = i.useMemo(() => ({ type: "CustomRetry", content: () => i.createElement(v.Z, P.Fx) }), []);
                return i.createElement(h.N, { errorConfig: N, fallback: e }, i.createElement(i.Suspense, { fallback: null }, i.createElement(Y, null)));
            }
            const K = u.default.create((e) => ({ root: { margin: e.spaces.space16 }, rightControl: { flexDirection: "row", alignItems: "center" }, idvLabel: { alignSelf: "middle" }, sectionHeader: { marginTop: e.spaces.space32 }, programInstruction: { marginTop: e.spaces.space8 }, pivot: { marginVertical: e.spaces.space4 }, setupCallout: { marginVertical: e.spaces.space16 }, pendingIdvCallout: { marginBottom: e.spaces.space16 }, programHeader: { flexDirection: "row", justifyContent: "space-between" } })),
                ee = i.memo(
                    (0, S.Z)(
                        function () {
                            return i.createElement(y.Z, null, i.createElement(J, null));
                        },
                        { page: "settings", section: "monetization" },
                    ),
                );
        },
        698579: (e, t, a) => {
            a.d(t, { F9: () => N, Fx: () => I, XS: () => p, Xb: () => j, j0: () => E });
            var n = a(688715),
                i = a(674132),
                r = a.n(i),
                s = a(234558),
                o = a(491831),
                l = a(521058),
                c = a(711223),
                d = a(720816);
            const p = Object.freeze({ adRev: "ad_revenue_sharing", subscriptions: "creator_subs", preRollAds: "pre_roll_video_ads" }),
                u = { Rejected: r().ibb5e1c8, Submitted: r().b255df58, Waitlisted: r().b3f834c8, Approved: r().bbe09d38, PendingIdv: r().efbc5066 },
                m = r().hc7631da,
                b = r().h72d71a2,
                g = r().e12b0b16,
                _ = r().a1e57106,
                v = r().b5334780,
                f = r().i51b4e22,
                y = r().h5bd7160,
                h = { CanVerifyIdentity: r().e32040c4, RequestLocked: r().d8f5cce4, PendingResult: r().j8769b42, IdentityNonVerifiable: y, UnavailableMissingBlueSubscription: y },
                E = { pathname: d.NW.stripeSetup, state: { cameFromEarningsDashboard: !0 } },
                S = { Icon: s.default, iconBGColor: "green600", heading: "Video Ads", description: "You are on track for payouts", id: p.preRollAds, pill: { label: "NEW", color: "gray1000" }, link: "/settings/ad_rev_share_dashboard", scribeComponent: "pre-roll-ads-dashboard" },
                Z = { Icon: o.default, iconBGColor: "blue600", heading: r().d7b51c68, description: "", id: p.subscriptions, link: "/settings/monetization/subscriptions/dashboard", scribeComponent: "creator-subscription-dashboard" },
                C = (e) => ({ Icon: l.default, iconBGColor: "orange600", heading: e ? r().be955554 : r().b03a3d62, description: r().cbbe29c2, id: p.adRev, link: "/settings/ad_rev_share_dashboard", scribeComponent: "ad-revenue-sharing-dashboard" }),
                I = { Icon: c.default, iconBGColor: "purple600", heading: r().g97a2d6c, description: r().f30774ea, id: "learn_more", link: (0, n.ju)("https://help.x.com/using-x/creator-dashboard"), scribeComponent: "learn-more" };
            function w(e, t) {
                return "ad_revenue_sharing" === e ? C(t) : "creator_subs" === e ? Z : S;
            }
            function k(e) {
                return e === p.adRev ? "/settings/ad_rev_share_eligibility" : e === p.subscriptions ? "/settings/superfollows/application/eligibility" : e === p.preRollAds ? "/" : void 0;
            }
            function P(e) {
                return e === p.adRev ? "/settings/ad_rev_share_setup" : e === p.subscriptions ? "/settings/superfollows" : e === p.preRollAds ? "/" : void 0;
            }
            function A(e, t) {
                return e === p.adRev ? (t ? r().bce47f48 : r().h7a68080) : e === p.subscriptions ? r().aea0b11a : e === p.preRollAds ? "Earn income from pre-roll ads served on videos you upload to X." : "";
            }
            function R(e) {
                return e === p.adRev ? "creator-ad-revenue-sharing-setup" : e === p.subscriptions ? "creator-subscription-setup" : "creator-pre-roll-ads-setup";
            }
            function T(e, t) {
                return { label: t || (e ? b : g), color: t ? "orange50" : e ? "green500" : "magenta500" };
            }
            function j({ applicationStatus: e, eligibility: t, id: a, idvStatus: n, isActive: i, isPayoutSetupIncomplete: s = !1, pendingIdv: o = !1, rejectedCreatorCanReapply: l, revShareUpdateEnabled: c = !1 }) {
                const d = { ...w(a, c) },
                    b = 0 === t.length || (1 === t.length && "id_verified" === t[0]);
                if (i && !o) return d;
                const g = n ? h[n] : "";
                if (a === p.subscriptions) {
                    const n = "NotStarted" === e || ("Rejected" === e && l),
                        i = "Rejected" === e && !l;
                    let s;
                    (d.link = i ? "/settings/superfollows/application/rejected" : n ? (b ? P(a) : k(a)) : void 0),
                        o ? (s = _) : i ? (s = f) : n || (s = v),
                        (d.description = (function (e, t, a, n, i, s) {
                            return e ? i : "Rejected" === t && s ? r().aea0b11a : u[t] || A(a, n);
                        })(o, e, a, c, g, l)),
                        (d.disabled = t.includes("generic_violation") || t.includes("do_not_charge")),
                        (d.pill = T(b, s)),
                        (d.scribeComponent = R(a));
                }
                return a === p.adRev && ((d.link = o || s ? void 0 : b ? P(a) : k(a)), (d.description = o ? g : s ? m : A(a, c)), (d.disabled = t.includes("generic_violation") || t.includes("do_not_charge") || t.includes("verified_type")), (d.pill = T(b, s || o ? _ : void 0)), (d.scribeComponent = R(a))), a === p.preRollAds && ((d.link = s ? E : b ? P(a) : k(a)), (d.description = s ? m : A(a, c)), (d.disabled = t.includes("generic_violation") || t.includes("do_not_charge") || t.includes("verified_type")), (d.pill = T(b, s ? _ : void 0)), (d.scribeComponent = R(a))), d;
            }
            const N = (e) => "NotStarted" === e.subscriptionsApplicationStatus && "NotStarted" === e.revShareApplicationStatus && !e.revShareActive && !e.subscriptionsActive && !e.revShareActive && !e.subscriptionsActive && !e.isAnyPremiumSubscriber && e.monetizationUpsellEnabled;
        },
        51011: (e, t, a) => {
            a.r(t), a.d(t, { default: () => C, monetizationIDVScreenQuery: () => S });
            a(136728);
            var n = a(799076),
                i = a(202784),
                r = a(325686),
                s = (a(585488), a(107267)),
                o = a(708852),
                l = a(731708),
                c = a(154003),
                d = a(392237),
                p = a(674132),
                u = a.n(p),
                m = a(323265),
                b = a(130919),
                g = a(980407),
                _ = a(535338),
                v = a(599974);
            const f = u().b0e986ec,
                y = u().eefd091e,
                h = u().cd616a5a,
                E = u().cce8c40a,
                S = n.Z,
                Z = (e) => {
                    const t = (0, s.useHistory)(),
                        a = (0, o.D2)(),
                        n = (0, v.Z)(),
                        { viewer: d } = (0, _.p)(S, {}),
                        p = "/settings/monetization",
                        u = d.user_results.result,
                        Z = u.verification_info?.identity_verification_status;
                    Z === b.t.CanVerifyIdentity || t.push(p);
                    const C = a ? I.paddingWide : I.paddingNarrow,
                        w = i.useMemo(() => [I.root, C], [C]),
                        k = m.ZP.isTwitterApp(),
                        P = i.useCallback(() => t.goBack({ backLocation: p }), [t]);
                    return i.createElement(g.Z, { backButtonType: "close", backLocation: "/settings/monetization", documentTitle: f, hideBackButton: k, onBackClick: P }, i.createElement(r.Z, { style: w }, i.createElement(l.ZP, { "aria-level": 2, role: "heading", size: "title4", style: I.title, weight: "heavy" }, y), i.createElement(l.ZP, { style: I.subtitle }, h)), i.createElement(r.Z, { style: [I.bottomBarWrapper, C] }, i.createElement(c.ZP, { onPress: n, style: I.bottomBar, type: "primaryFilled" }, E)));
                },
                C = i.memo(Z),
                I = d.default.create((e) => ({ root: { paddingBottom: e.spaces.space20, flexGrow: 1 }, paddingWide: { paddingHorizontal: e.spaces.space72 }, paddingNarrow: { paddingHorizontal: e.spaces.space32 }, bottomBar: { gap: e.spaces.space24, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 }, bottomBarWrapper: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small, boxShadow: e.boxShadows.small }, title: { marginTop: e.spaces.space16 }, subtitle: { marginTop: e.spaces.space16 } }));
        },
        599974: (e, t, a) => {
            a.d(t, { Z: () => s });
            a(543673), a(240753), a(128399), a(136728);
            var n = a(202784),
                i = a(107267),
                r = a(323265);
            const s = () => {
                const e = (0, i.useHistory)();
                return n.useCallback(() => {
                    const t = { redirectPath: "/settings/monetization", flow: "creator" };
                    if (r.ZP.isWebView()) {
                        const a = new URLSearchParams(t);
                        e.push(`/settings/account/id_verification/start?${a.toString()}`);
                    } else e.push({ pathname: "/settings/account/id_verification/start", state: t });
                }, [e]);
            };
        },
        967023: (e, t, a) => {
            a.r(t), a.d(t, { default: () => f });
            var n = a(202784),
                i = a(943401),
                r = a(779610),
                s = a(674132),
                o = a.n(s),
                l = a(652904),
                c = a(293115),
                d = a(264922);
            const p = o().cbd449a0,
                u = o().ab125232,
                m = o().a5f32aa2,
                b = o().daef29b8,
                g = o().i0dd9b9e,
                _ = o().aaafffda,
                v = { page: "settings", section: "mute_and_block" };
            function f(e) {
                const { location: t } = e;
                return n.createElement(c.nO, { namespace: v }, n.createElement(l.Z, null, n.createElement(d.Z, { location: t, screenType: "secondaryDetail", title: p }, n.createElement(i.Z, { description: u }), n.createElement(r.Z, { label: m, link: "/settings/blocked/all" }), n.createElement(r.Z, { label: b, link: "/settings/muted/all" }), n.createElement(r.Z, { label: g, link: "/settings/muted_keywords" }), n.createElement(r.Z, { label: _, link: "/settings/notifications/advanced_filters" }))));
            }
        },
        572667: (e, t, a) => {
            a.r(t), a.d(t, { NewsScreen: () => Z, default: () => C });
            var n = a(202784),
                i = a(107267),
                r = a(943401),
                s = a(420412),
                o = a(674132),
                l = a.n(o),
                c = a(376278),
                d = a(847988),
                p = a(534763),
                u = a(443781),
                m = a(264922),
                b = a(71620),
                g = a(668214);
            const _ = (0, g.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("TWITTER_BLUE_SETTINGS") }))
                    .withAnalytics({ page: "settings", section: "subscriptions", component: "news" }),
                v = l().cb165528,
                f = l().e0221c42,
                y = l().b7fa0cfe,
                h = l().adcaa214,
                E = l().b62d6e4c,
                S = l().acf63cd2;
            function Z(e) {
                const { analytics: t } = e,
                    a = n.useContext(u.rC),
                    { userClaims: o } = a,
                    l = (0, i.useLocation)(),
                    b = (0, i.useHistory)();
                n.useEffect(() => {
                    t.scribe({ action: "impression" });
                }, [t]);
                const g = n.useCallback(() => {
                    b.goBack({ backLocation: "/settings/premium" });
                }, [b]);
                return n.createElement(
                    m.Z,
                    {
                        location: l,
                        onBackClick: () => {
                            t.scribe({ action: "navigate" }), g();
                        },
                        testID: "newsDetail",
                        title: v,
                    },
                    n.createElement(r.Z, { description: f }),
                    o.isTrueAndEnabled("subscriptions_feature_1007") &&
                        n.createElement(p.H, {
                            Icon: c.default,
                            description: h,
                            key: y,
                            label: y,
                            link: "/i/articles",
                            onPress: () => {
                                var e;
                                (e = "top_articles"), t.scribe({ element: e, action: "click" });
                            },
                            testID: "topArticlesSection",
                        }),
                    o.isTrueAndEnabled("subscriptions_feature_1005") && n.createElement(p.H, { Icon: d.default, description: S, key: E, label: E, link: "", testID: "readerSection" }),
                    n.createElement(s.Z, null),
                );
            }
            const C = _(Z);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-cff17ecc.c7a649ea.js.map
