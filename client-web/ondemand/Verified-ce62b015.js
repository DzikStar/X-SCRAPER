"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-ce62b015"],
    {
        336678: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(150943);
            n(585488);
            const l = a.Z;
        },
        371976: (e, t, n) => {
            n.r(t), n.d(t, { default: () => yn });
            var a = n(202784),
                l = n(952793),
                r = n(325686),
                i = n(10622),
                o = n.n(i),
                s = n(712696),
                c = n.n(s),
                d = n(437429),
                m = n.n(d),
                u = n(731708),
                p = n(67369),
                g = n(40610),
                b = n(392237),
                f = n(111677),
                E = n.n(f),
                h = n(857378),
                y = n(252021),
                Z = n(943914),
                I = n(431053),
                v = n(762522),
                k = n(375839),
                C = n(756716),
                w = n(358981),
                T = n(507151),
                _ = n(688715);
            const x = { home: (0, _.ju)("https://ads.x.com"), accountSelect: (0, _.ju)("https://ads.x.com/account_select") },
                S = E().gd03b494,
                P = E().h1f36d3e,
                A = E().a6519ffc,
                M = E().ibc9654a,
                F = E().d3710c76,
                D = E().d60a8f14,
                z = E().fe66e4a8,
                N = E().b3ca0108,
                B = a.createElement(u.ZP, { link: x.accountSelect });
            function $(e) {
                const t = a.createElement(r.Z, { style: U.section }, a.createElement(u.ZP, { size: "headline2", style: U.howToHeadline, weight: "bold" }, S), a.createElement(u.ZP, null, P), a.createElement(u.ZP, null, a.createElement("ol", { style: U.list }, a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "a5f1d09f" }, a.cloneElement(B, null, E().g3754d57))), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "e3a90717" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "b743c7b7" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "d5128627" }))))),
                    n = a.createElement(r.Z, { style: U.section }, a.createElement(u.ZP, { size: "headline2", style: U.howToHeadline, weight: "bold" }, M), a.createElement(u.ZP, null, a.createElement("ul", { style: U.list }, a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "a5f1d09f" }, a.cloneElement(B, null, E().g3754d57))), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "ecd5d325" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "b743c7b7" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "d523367f" }))))),
                    l = a.createElement(r.Z, { style: U.section }, a.createElement(u.ZP, { size: "headline2", style: U.howToHeadline, weight: "bold" }, A), a.createElement(u.ZP, null, a.createElement("ul", { style: U.list }, a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "c10a3649" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "fab86f55" }, a.cloneElement(B, null, E().i615ad63))), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "b743c7b7" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "h9fe1a6d" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "d523367f" }))))),
                    i = a.createElement(r.Z, { style: U.section }, a.createElement(u.ZP, { size: "headline2", style: U.howToHeadline, weight: "bold" }, F), a.createElement(u.ZP, null, a.createElement("ul", { style: U.list }, a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "a4087047" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "ca18299b" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "b83bc371" }, a.cloneElement(B, null, E().a3ba48b9))), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "b743c7b7" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "d523367f" }))))),
                    o = a.createElement(r.Z, { style: U.adsHowToCard }, a.createElement(T.Z, { description: D, linkLabel: z, onClick: () => window.open(x.home, "_blank"), secondaryDescription: N }));
                return a.createElement(r.Z, { style: U.howToSection }, o, t, n, l, i);
            }
            const U = b.default.create((e) => ({ howToSection: { marginBottom: e.spaces.space16 }, section: { marginTop: e.spaces.space40 }, howToHeadline: { marginBottom: e.spaces.space8 }, adsHowToCard: { width: "50%", marginTop: e.spaces.space20 }, list: { marginBottom: 0 } })),
                H = a.memo($);
            var O = n(336678);
            const L = { FullAccessGov: { Year: "", Month: "" }, FullAccess: { Year: "$10k", Month: "$1k" }, Basic: { Year: "$2k", Month: "$200" } },
                j = E().g2c0144a,
                V = E().a4cf866e,
                G = E().c5af3e12,
                W = E().e18d6fd6,
                R = E().if435d1a,
                J = a.createElement(u.ZP, { link: x.home }),
                Y = (e) => {
                    const { history: t, location: n } = e,
                        l = (0, p.Zz)(),
                        i = m()(),
                        s = c()(O.Z, {}),
                        { interval: d, tier: b } = (0, k.Z)();
                    window.history.replaceState({ verifiedOrgAdminError: null }, document.title);
                    const f = a.useCallback((e) => (e?.viewer.user_results.result.list_scheduled_promotions?.length ? e.viewer.user_results.result.list_scheduled_promotions : []), []),
                        h = (e) => {
                            switch (e) {
                                case "Redeemable":
                                    return 1;
                                case "Active":
                                    return 2;
                                case "Expired":
                                    return 3;
                                default:
                                    return 4;
                            }
                        },
                        y = a.useCallback((e) => [...f(e)].sort((e, t) => h(e.status) - h(t.status)), [f]),
                        Z = a.useCallback(() => {
                            o()(i, O.Z, {})
                                .toPromise()
                                .then((e) => {
                                    T(y(e));
                                })
                                .catch(() => {
                                    t.replace(n.pathname, { verifiedOrgAdminError: v.F.adsPromoActivation });
                                });
                        }, [i, y, t, n]),
                        [w, T] = a.useState(y(s)),
                        _ = a.useMemo(() => {
                            const e = f(s),
                                t = e.filter(({ status: e }) => "Expired" === e).length;
                            return e.length === t;
                        }, [s, f]),
                        x = L[b][d],
                        S = a.useMemo(() => ("Year" === d ? a.createElement(E().I18NFormatMessage, { $i18n: "feb950f3", xtc_coupon_value: x }) : a.createElement(E().I18NFormatMessage, { $i18n: "h9629ab7", xtc_coupon_value: x })), [d, x]);
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(
                            r.Z,
                            { style: [K.header, l ? K.marginBottom64 : null] },
                            a.createElement(C.Z, null),
                            a.createElement(u.ZP, { size: "title2", weight: "bold" }, V),
                            a.createElement(u.ZP, { style: K.pageDescription, testID: "pageDescription" }, S),
                            a.createElement(u.ZP, { size: "subtext3", style: K.pageSubtext, testID: "pageSubtext" }, "*", G),
                            a.createElement(
                                r.Z,
                                { style: K.section },
                                a.createElement(u.ZP, { size: "headline2", style: K.creditsSubtitle, testID: "creditsSubtitle", weight: "bold" }, W),
                                a.createElement(u.ZP, { testID: "creditsDescription" }, a.createElement(E().I18NFormatMessage, { $i18n: "i3781135" }, a.cloneElement(J, null, E().af6704d7))),
                                a.createElement(v.Z, null),
                                _ && a.createElement(g.Z.Primary, { headline: R, style: K.noCouponsLabel, withIcon: !1 }),
                                a.createElement(
                                    r.Z,
                                    { style: K.couponsContainer },
                                    w.map((e, t) => a.createElement(I.Z, { item: e, key: t, onSuccessfulActivation: Z })),
                                ),
                            ),
                            a.createElement(H, null),
                        ),
                        a.createElement(r.Z, { style: [K.stickySection, l ? K.bottomMobile : K.bottomDesktop] }, a.createElement(u.ZP, null, a.createElement(E().I18NFormatMessage, { $i18n: "ff1cc953" }, a.createElement(u.ZP, { link: { pathname: "mailto:verified-premium-support@x.com", external: !0 } }, E().b293c6b4)))),
                    );
                },
                K = b.default.create((e) => ({ header: { flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", paddingHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 }, marginBottom64: { marginBottom: e.spaces.space64 }, pageDescription: { marginTop: e.spaces.space16 }, pageSubtext: { marginTop: e.spaces.space24 }, section: { width: "100%", marginTop: e.spaces.space40 }, creditsSubtitle: { marginBottom: e.spaces.space8 }, couponsContainer: { width: "100%", flexDirection: "row", gap: e.spaces.space24, marginTop: e.spaces.space16, paddingStart: e.spaces.space2, flexWrap: "wrap" }, stickySection: { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", position: "sticky", start: 0, bottom: 0, end: 0, width: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space16, borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small }, bottomDesktop: { bottom: 0 }, bottomMobile: { bottom: h.h$ }, noCouponsLabel: { marginTop: e.spaces.space16 } })),
                q = (e) => a.createElement(Z.B, null, a.createElement(y.Z, { TabBar: w.Z, history: e.history, isFullWidth: !0, primaryContent: a.createElement(Y, e), sidebarContent: null, title: j, withTweetButton: !1 }));
            var Q = n(807896),
                X = n(95186),
                ee = (n(585488), n(736063)),
                te = n(693510),
                ne = n(897571),
                ae = n(948927),
                le = n(630887),
                re = (n(278945), n(530732)),
                ie = n(154003),
                oe = n(868634),
                se = n(593385),
                ce = n(656474);
            const de = E().c9fad534,
                me = E().a211b11e,
                ue = () => a.createElement(g.Z.Primary, { headline: de, text: me, withIcon: !0 }),
                pe = ({ promotions: e, showPromotionModal: t }) => {
                    const n = a.useMemo(() => e.toSorted(be), [e]);
                    return a.createElement(
                        r.Z,
                        null,
                        n.map((e) => a.createElement(Ee, { key: e.__id, promotion: e, showPromotionModal: t })),
                    );
                },
                ge = { Scheduled: 1, Redeemable: 2, Active: 3, Expired: 4 },
                be = (e, t) => {
                    const n = ge[e.isCouponDone ? "Expired" : e.status],
                        a = ge[t.isCouponDone ? "Expired" : t.status],
                        l = e.validUntil ?? e.expires,
                        r = l ? l.getTime() : 0,
                        i = t.validUntil ?? t.expires,
                        o = i ? i.getTime() : 0,
                        s = "Expired" === e.status ? -1 : 1;
                    return n - a || s * (r - o);
                },
                fe = E().gd7d051c,
                Ee = ({ promotion: e, showPromotionModal: t }) => {
                    const n = Ze(e),
                        l = _e(e),
                        i = xe(e),
                        o = "Redeemable" === e.status,
                        s = a.useCallback(() => t(e), [e, t]);
                    return a.createElement(re.Z, { role: "adscredititem", style: Ue.adsCreditItem }, a.createElement(r.Z, { style: Ue.adsCreditItemContent }, a.createElement(r.Z, { style: Ue.labeledAction }, a.createElement(u.ZP, { size: "body", weight: "bold" }, n), i), l ? a.createElement(u.ZP, { color: "gray700", size: "subtext1", style: Ue.subText, weight: "normal" }, l) : null), o ? a.createElement(ie.ZP, { onClick: s }, fe) : null);
                },
                he = E().f2011db1,
                ye = E().ae37e25c,
                Ze = (e) => {
                    const t = e.status;
                    return "Scheduled" !== t && "Redeemable" !== t && e.forAdsAccountId && e.formattedUsedAmount ? he({ usedAmount: e.formattedUsedAmount, couponAmount: e.formattedCouponAmount }) : (e.formattedCouponAmount ?? ye);
                },
                Ie = E().i1407e15,
                ve = E().id4359bf,
                ke = E().f89af915,
                Ce = E().c1b5e1ed,
                we = E().e8d8a2a9,
                Te = E().i3884c1f,
                _e = (e) => {
                    const { expires: t, starts: n, validUntil: a } = e,
                        l = a ?? t,
                        r = e.forAdsAccountId;
                    if (e.isCouponDone) return Ie({ accountId: r });
                    switch (e.status) {
                        case "Expired":
                            return t && l ? (r ? ve({ when: (0, ce.B)(l), accountId: r }) : ke({ when: (0, ce.B)(l) })) : null;
                        case "Redeemable":
                        case "Active":
                            return t && l ? (r ? Ce({ when: (0, ce.B)(l), accountId: r }) : we({ when: (0, ce.B)(l) })) : null;
                        case "Scheduled":
                            return n ? Te({ when: (0, ce.B)(n) }) : null;
                        default:
                            return null;
                    }
                },
                xe = (e) => {
                    if (e.isCouponDone) return a.createElement($e, null);
                    switch (e.status) {
                        case "Expired":
                            return a.createElement(De, null);
                        case "Active":
                            return a.createElement(ze, null);
                        case "Redeemable":
                            return a.createElement(Ne, null);
                        case "Scheduled":
                            return a.createElement(Be, null);
                        default:
                            return null;
                    }
                },
                Se = E().eb4e810a,
                Pe = E().be103b84,
                Ae = E().e9e9ca58,
                Me = E().b070acf4,
                Fe = E().b772cd66,
                De = () => a.createElement(oe.ZP, { background: "gray700" }, Se),
                ze = () => a.createElement(oe.ZP, { background: "green500" }, Pe),
                Ne = () => a.createElement(oe.ZP, { background: "blue500" }, Ae),
                Be = () => a.createElement(oe.ZP, { background: "orange500" }, Me),
                $e = () => a.createElement(oe.ZP, { background: "gray700" }, Fe),
                Ue = b.default.create((e) => ({ adsCreditItem: { cursor: "pointer", flexDirection: "row", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, width: "100%" }, adsCreditItemContent: { flexShrink: 1, flexGrow: 1 }, labeledAction: { flexDirection: "row", gap: e.spaces.space8 }, subText: { marginTop: e.spaces.space4 } })),
                He = ({ user: e }) => {
                    const [t, n] = a.useState(),
                        l = a.useCallback(() => n(void 0), [n]),
                        i = (0, ce.C)(e);
                    return a.createElement(r.Z, null, i.length > 0 ? a.createElement(pe, { promotions: i, showPromotionModal: n }) : a.createElement(ue, null), t ? a.createElement(se.Z, { coupon: t, onDismiss: l }) : null);
                };
            var Oe = n(24410),
                Le = n(277660),
                je = n.n(Le);
            const Ve = Oe.Z,
                Ge = E().e016ad32,
                We = E().d7ab194e,
                Re = ({ user: e }) =>
                    ((e) => {
                        const { web_tier_switch_progress: t } = e,
                            n = t?.status;
                        return "Pending" === n;
                    })(e)
                        ? a.createElement(r.Z, { style: Je.callouts }, a.createElement(g.Z.Attention, { headline: Ge, text: We, withIcon: !0 }))
                        : null,
                Je = b.default.create((e) => ({ callouts: {} })),
                Ye = ({ user: e }) => a.createElement(Re, { user: je()(Ve, e) }),
                Ke = ({ children: e }) => a.createElement(r.Z, { style: Qe.group }, e),
                qe = ({ children: e, intro: t, title: n }) => a.createElement(r.Z, { style: Qe.section }, n ? a.createElement(u.ZP, { size: "headline1", style: Qe.title, weight: "bold" }, n) : null, t ? a.createElement(u.ZP, { style: Qe.intro }, t) : null, e),
                Qe = b.default.create((e) => ({ group: { gap: e.spaces.space32 }, section: {}, title: { marginBottom: e.spaces.space8 }, intro: {} }));
            n(571372);
            var Xe = n(716980),
                et = n(13720),
                tt = n(108837),
                nt = n(143670),
                at = n(293723),
                lt = n(263272),
                rt = n(913973),
                it = n(390587),
                ot = n(17412),
                st = n(529356),
                ct = n(854219);
            const dt = ({ account: e, onDismiss: t }) => (e ? a.createElement(bt, { account: e, onDismiss: t }) : a.createElement(gt, { onDismiss: t })),
                mt = E().cd5aeec6,
                ut = E().ged51d2e,
                pt = E().gcfa25e6,
                gt = ({ onDismiss: e }) => a.createElement(st.Z, { actionLabel: mt, actionLink: { pathname: "https://ads.x.com/", external: !0 }, actionType: "primaryFilled", graphicDisplayMode: "none", headline: ut, onAction: e, onClose: e, role: "dialog", subtext: pt }),
                bt = (e) => {
                    const t = e.account.eligibility ?? "%other";
                    switch (t) {
                        case "EligibleHasPaymentMethod":
                            return null;
                        case "IneligibleLastPaymentFailed":
                        case "EligibleNeedsPaymentMethod":
                            return a.createElement(Pt, e);
                        case "IneligibleLockedOut":
                        case "IneligibleMmsDsoNotSetUp":
                        case "IneligiblePreAdvertiserUnsupportedCountry":
                        case "IneligibleReviewFailure":
                        case "IneligibleUnsupportedServiceLevel":
                            return a.createElement(Dt, e);
                        case "IneligiblePreAdvertiserMissingCountryCode":
                            return a.createElement(yt, e);
                        case "IneligibleUnauthorized":
                            return a.createElement(kt, e);
                        default:
                            throw new Error(`unexpected AdvertiserAccountEligibility: '${t}'`);
                    }
                },
                ft = E().g76fb922,
                Et = E().db0a69e7,
                ht = E().c7bad5cc,
                yt = ({ account: e, onDismiss: t }) => {
                    const n = e.id;
                    return a.createElement(st.Z, { actionLabel: ht, actionLink: { pathname: `https://ads.x.com/onboarding/${n}/welcome`, external: !0 }, actionType: "primaryFilled", graphicDisplayMode: "none", headline: ft, onAction: t, onClose: t, role: "dialog", subtext: Et({ adAccountId: n }) });
                },
                Zt = E().ia5e7488,
                It = E().g8c563c0,
                vt = E().f6f29b17,
                kt = ({ account: e, onDismiss: t }) => {
                    const n = e.id;
                    return a.createElement(st.Z, { actionLabel: Zt, actionType: "primaryFilled", graphicDisplayMode: "none", headline: It, onAction: t, onClose: t, role: "dialog", subtext: vt({ adAccountId: n }) });
                },
                Ct = E().a15bb840,
                wt = E().j4e981d9,
                Tt = E().f11264ac,
                _t = E().af142910,
                xt = E().a9635acf,
                St = E().d1cca474,
                Pt = ({ account: e, onDismiss: t }) => {
                    const n = e.id,
                        l = "IneligibleLastPaymentFailed" === e.eligibility;
                    return a.createElement(st.Z, { actionLabel: l ? St : Tt, actionLink: { pathname: `https://ads.x.com/billing/${n}/payment_methods/`, external: !0 }, actionType: "primaryFilled", graphicDisplayMode: "none", headline: l ? _t : Ct, onAction: t, onClose: t, role: "dialog", subtext: l ? xt({ adAccountId: n }) : wt({ adAccountId: n }) });
                },
                At = E().fe8b969a,
                Mt = E().i8aa0b91,
                Ft = E().d82c2074,
                Dt = ({ account: e, onDismiss: t }) => {
                    const n = e.id;
                    return a.createElement(st.Z, { actionType: "primaryFilled", graphicDisplayMode: "none", headline: At, onAction: t, onClose: t, role: "dialog", subtext: Mt({ adAccountId: n }), withPassthroughEvents: !0 }, a.createElement(ct.Z, null, a.createElement(ie.ZP, { size: "medium", type: "primaryFilled" }, Ft)));
                },
                zt = Xe.Z,
                Nt = (e) => {
                    const t = je()(zt, e);
                    return t?.recruiting_organization_results?.result;
                },
                Bt = b.default.theme.colors.green600,
                $t = b.default.theme.colors.gray600,
                Ut = ({ advertiserAccounts: e, org: t }) => {
                    const [n, l] = a.useState(),
                        r = (0, le.zK)(),
                        i = [a.useMemo(() => Vt(e, l), [e, l]), a.useMemo(() => (r ? Xt(e, t, l) : null), [e, t, r, l])].filter(Boolean);
                    return a.createElement(a.Fragment, null, a.createElement(et.Z, { allowMultipleToggles: !1 }, i), n);
                },
                Ht = (e) => ({ isComplete: !0, task: e }),
                Ot = (e) => ({ isComplete: !1, task: e }),
                Lt = (e, t, n) => {
                    const l = ((e) => e.every((e) => e.isComplete))(n);
                    return a.createElement(tt.Z, { icon: l ? at.default : lt.default, iconColor: l ? Bt : $t, iconSide: "BeforeTitle", key: e, title: t }, ((e) => e.map((e) => e.task))(n));
                },
                jt = E().g25d851e,
                Vt = (e, t) => {
                    const n = e.accounts,
                        a = 0 === n.length ? [Kt()] : n.map((e) => Rt(e, t));
                    return Lt("makeAccountsTask", jt, a);
                },
                Gt = E().de7fef84,
                Wt = { EligibleHasPaymentMethod: E().ff1321b6, EligibleNeedsPaymentMethod: E().c1205320, IneligibleLastPaymentFailed: E().c0343c0a, IneligibleLockedOut: E().j56e34a4, IneligibleMmsDsoNotSetUp: Gt, IneligiblePreAdvertiserMissingCountryCode: E().gef920f2, IneligiblePreAdvertiserUnsupportedCountry: Gt, IneligibleReviewFailure: Gt, IneligibleUnauthorized: E().b68dd4d8, IneligibleUnsupportedServiceLevel: Gt },
                Rt = (e, t) => {
                    const n = e.eligibility ?? "%other",
                        l = () => {
                            t();
                        },
                        r = () => {
                            t(a.createElement(dt, { account: e, onDismiss: l }));
                        };
                    switch (n) {
                        case "EligibleHasPaymentMethod":
                            return Ht(a.createElement(nt.Z, { Icon: rt.default, actionSubText: Wt[n], actionText: qt(e), key: e.id, style: ln.subTaskMenuItem }));
                        case "IneligibleLastPaymentFailed":
                        case "EligibleNeedsPaymentMethod":
                        case "IneligibleLockedOut":
                        case "IneligibleMmsDsoNotSetUp":
                        case "IneligiblePreAdvertiserUnsupportedCountry":
                        case "IneligibleReviewFailure":
                        case "IneligibleUnsupportedServiceLevel":
                        case "IneligiblePreAdvertiserMissingCountryCode":
                        case "IneligibleUnauthorized":
                            return Ot(a.createElement(nt.Z, { Icon: it.default, actionSubText: Wt[n], actionText: qt(e), key: e.id, onClick: r, style: ln.subTaskMenuItem }));
                        default:
                            throw new Error(`unexpected AdvertiserAccountEligibility: '${n}'`);
                    }
                },
                Jt = E().d637962c,
                Yt = E().dd087ae0,
                Kt = () => Ot(a.createElement(nt.Z, { Icon: it.default, actionSubText: Yt, actionText: Jt, key: "makeNoAdAccountsSetupTask", link: { pathname: "https://ads.x.com/", external: !0 }, style: ln.subTaskMenuItem })),
                qt = (e) => {
                    if (e && null != e.name) return e && `${e.name} (id: ${e.id})`;
                },
                Qt = E().c67b260c,
                Xt = (e, t, n) => {
                    const a = ((e) => e?.job_count ?? 0)(t),
                        l = [tn(e, n), an(a)];
                    return Lt("makeJobPromotionTask", Qt, l);
                },
                en = { EligibleJobPromotionAvailable: E().i3d7dd02, IneligibleAdsAccountMissing: E().cc8f8516, IneligibleUnauthorized: E().b4f117b8, IneligibleAdsAccountNeedsAttention: E().b7347cf4 },
                tn = (e, t) => {
                    const { jobPromotionAccount: n, jobPromotionEligibility: l } = e,
                        r = () => {
                            t();
                        },
                        i = () => {
                            t(a.createElement(dt, { account: n, onDismiss: r }));
                        };
                    switch (l) {
                        case "EligibleJobPromotionAvailable":
                            return Ht(a.createElement(nt.Z, { Icon: rt.default, actionSubText: qt(n), actionText: en[l], key: l, style: ln.subTaskMenuItem }));
                        case "IneligibleAdsAccountMissing":
                        case "IneligibleUnauthorized":
                        case "IneligibleAdsAccountNeedsAttention":
                            return Ot(a.createElement(nt.Z, { Icon: it.default, actionSubText: qt(n), actionText: en[l], key: l, onClick: i, style: ln.subTaskMenuItem }));
                        default:
                            throw new Error(`unexpected JobPromotionEligibility: '${l}'`);
                    }
                },
                nn = E().h7d03a2a,
                an = (e) => (e > 0 ? Ht(a.createElement(nt.Z, { Icon: rt.default, actionText: a.createElement(E().I18NFormatMessage, { $i18n: "b17ac597" }, a.createElement(ot.default, null)), key: "makePostJobsSetupTask", link: "/i/verified/jobs", style: ln.subTaskMenuItem })) : Ot(a.createElement(nt.Z, { Icon: it.default, actionSubText: a.createElement(E().I18NFormatMessage, { $i18n: "ga44a2f9" }, a.createElement(ot.default, null)), actionText: nn, key: "makePostJobsSetupTask", link: "/i/verified/jobs", style: ln.subTaskMenuItem }))),
                ln = b.default.create((e) => ({ subTaskMenuItem: { marginStart: e.spaces.space16 } })),
                rn = ({ user: e }) => a.createElement(Ut, { advertiserAccounts: ae.kb(e), org: Nt(e) });
            var on = n(481326);
            const sn = b.default.create((e) => ({ stickySection: { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", position: "sticky", start: 0, bottom: 0, end: 0, width: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space16, borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small }, bottomDesktop: { bottom: 0 }, bottomMobile: { bottom: h.h$ }, link: { color: e.colors.link } })),
                cn = () => {
                    const e = (0, p.Zz)(),
                        t = (0, l.hC)("responsive_web_verified_organizations_intercom_enabled") ? a.createElement(ct.Z, { style: sn.link }) : a.createElement(u.ZP, { link: on.A9 });
                    return a.createElement(r.Z, { style: [sn.stickySection, e ? sn.bottomMobile : sn.bottomDesktop] }, a.createElement(u.ZP, null, a.createElement(E().I18NFormatMessage, { $i18n: "ff1cc953" }, a.cloneElement(t, null, E().b293c6b4))));
                },
                dn = X.Z,
                mn = (e) => {
                    const { user: t } = (() => {
                        const { sku: e } = (0, k.Z)(),
                            t = e ?? "",
                            { viewer: n } = c()(dn, { current_product_sku: t });
                        return { user: n.user_results.result };
                    })();
                    return a.createElement(te._3, { user: t }, a.createElement(ae.Em, { user: t }, a.createElement(y.Z, { TabBar: w.Z, history: e.history, isFullWidth: !0, primaryContent: a.createElement(bn, (0, Q.Z)({ user: t }, e)), rightControl: a.createElement(ne.Z, null), sidebarContent: null, title: un, withTweetButton: !1 })));
                },
                un = E().g2c0144a,
                pn = E().a4cf866e,
                gn = E().ca3c633a,
                bn = ({ user: e }) => {
                    const t = (0, p.Zz)(),
                        n = (0, le.zK)();
                    return a.createElement(a.Fragment, null, a.createElement(r.Z, { style: [fn.screen, t ? fn.mobileBottom64 : null] }, a.createElement(Ye, { user: e }), a.createElement(r.Z, { style: fn.content }, a.createElement(u.ZP, { size: "title2", weight: "bold" }, pn), a.createElement(r.Z, null, a.createElement(u.ZP, null, n ? a.createElement(E().I18NFormatMessage, { $i18n: "ba6442ef" }, a.createElement(u.ZP, { link: { pathname: "https://ads.x.com/" } }, E().ha843c96)) : a.createElement(E().I18NFormatMessage, { $i18n: "e52e0c73" }, a.createElement(u.ZP, { link: { pathname: "https://ads.x.com/" } }, E().dd0f3b08)))), a.createElement(rn, { user: e }), a.createElement(Ke, null, a.createElement(qe, { title: gn }, a.createElement(He, { user: e }))))), a.createElement(cn, null));
                },
                fn = b.default.create((e) => ({ screen: { flexDirection: "column", paddingHorizontal: e.spaces.space16, gap: e.spaces.space16, marginVertical: e.spaces.space16 }, mobileBottom64: { marginBottom: e.spaces.space64 }, content: { gap: e.spaces.space16 } })),
                En = { context: "AdvertisingScreen" },
                hn = (e) => a.createElement(ee.H, { errorConfig: En }, a.createElement(mn, e)),
                yn = (e) => ((0, l.hC)("verified_vo_refreshed_advertising_screen_enabled") ? a.createElement(hn, e) : a.createElement(q, e));
        },
        978789: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(202784),
                l = n(325686),
                r = n(952428),
                i = n(731708),
                o = n(96083),
                s = n(673510),
                c = n(392237),
                d = n(736063);
            const m = ({ affiliates: e, onSelectedChange: t, selectedAffiliates: n, withSelectAll: c }) => {
                    const d = e && e.length > 0,
                        m = e.length === n.length,
                        u = a.useCallback(() => {
                            t(m ? [] : [...e]);
                        }, [e, t, m]),
                        g = a.useMemo(() => a.createElement(r.Z, { onClick: u, style: p.selectAllCell }, a.createElement(i.ZP, null, "Select all"), a.createElement(o.Z, { checked: m, onClick: u })), [u, m]),
                        b = a.useCallback(
                            (e, a) => {
                                const l = a ? [...n, e] : n.filter((t) => t.result?.legacy?.id_str !== e.result?.legacy?.id_str);
                                t(l);
                            },
                            [t, n],
                        );
                    return d
                        ? a.createElement(
                              l.Z,
                              null,
                              c ? g : null,
                              e?.map((e, t) => {
                                  const { name: l, screen_name: r } = e.result?.core || {},
                                      i = e.result?.legacy?.id_str,
                                      { image_url: c } = e.result?.avatar || {},
                                      d = !!n.find((e) => e.result.legacy?.id_str === i),
                                      m = () => b(e, !d);
                                  return l && c && r && i ? a.createElement(s.ZP, { avatarUri: c, decoration: a.createElement(o.Z, { checked: d, onClick: m }), displayMode: "UserCompact", key: `affiliate-filter-${t}`, name: l, onAvatarClick: m, onCellClick: m, onScreenNameClick: m, screenName: r, userId: i, withLink: !1 }) : null;
                              }),
                          )
                        : null;
                },
                u = (e) => a.createElement(d.H, { errorConfig: { context: "VerifiedOrgAffiliateSelector" } }, a.createElement(m, e)),
                p = c.default.create((e) => ({ selectAllCell: { flexDirection: "row", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, justifyContent: "space-between", minHeight: e.spaces.space64, alignItems: "center" } }));
        },
        64451: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Re });
            n(136728);
            var a = n(849333),
                l = n(202784),
                r = n(325686),
                i = (n(585488), n(731708)),
                o = n(688715),
                s = n(154003),
                c = n(40610),
                d = n(392237),
                m = n(682830),
                u = n(111677),
                p = n.n(u),
                g = n(252021),
                b = n(507651),
                f = n(443781),
                E = n(736063),
                h = n(693510),
                y = n(782826),
                Z = n(725516),
                I = n(540819),
                v = n(312771),
                k = n(482924),
                C = n(807896),
                w = n(355763),
                T = n(277660),
                _ = n.n(T),
                x = n(457311),
                S = n(965245),
                P = n(495842),
                A = n(686207),
                M = n(775709),
                F = n(351743),
                D = n.n(F),
                z = n(107267),
                N = n(157130),
                B = n(529356),
                $ = n(952428),
                U = n(837020),
                H = n(700797),
                O = n(412876),
                L = n(553660),
                j = n(797553),
                V = n(143670),
                G = n(487552);
            const W = p().j3115ce8,
                R = p().d8bb1d84;
            const J = d.default.create((e) => ({ badgePicker: { marginEnd: 10, textAlign: "end" }, dropdownIcon: { marginStart: e.spaces.space4 } })),
                Y = function (e) {
                    const { affiliateType: t, disabled: n, onChange: a } = e,
                        [r, i] = l.useState(!1);
                    function o() {
                        i(!1);
                    }
                    function c(e) {
                        a(e), o();
                    }
                    const d = { User: W, Business: R, GovernmentIndividual: W, GovernmentOrganization: R },
                        m = "Government" === e.verifiedType ? "GovernmentIndividual" : "User",
                        u = "Government" === e.verifiedType ? "GovernmentOrganization" : "Business";
                    return l.createElement(
                        l.Fragment,
                        null,
                        l.createElement(
                            s.ZP,
                            {
                                disabled: n,
                                onPress: function () {
                                    i(!0);
                                },
                                style: J.badgePicker,
                                testID: "badgePickerButton",
                                type: "primaryOutlined",
                            },
                            d[t],
                            l.createElement(G.default, { style: J.dropdownIcon }),
                        ),
                        r && l.createElement(j.default, { onDismiss: o }, l.createElement(V.Z, { actionText: W, onClick: () => c(m), testID: `${m}_MenuItem` }), l.createElement(V.Z, { actionText: R, onClick: () => c(u), testID: `${u}_MenuItem` })),
                    );
                };
            var K = n(762522);
            const q = M.Z,
                Q = A.Z,
                X = P.Z,
                ee = p().d30ea6f3,
                te = p().c2dfbb86,
                ne = p().ba047f76,
                ae = p().cfd2f35e,
                le = l.createElement(U.default, { testID: "closeIcon" }),
                re = { label: p().j26dee0e, preferredHorizontalOrientation: "start" },
                ie = p().e30cbdf0,
                oe = ({ adminId: e, currentUserId: t, disabled: n = !1, item: a, refetch: o, refetchStatus: c }) => {
                    const d = (0, Z.z)(),
                        m = (0, z.useHistory)(),
                        [u, p] = l.useState(!1),
                        [g, b] = l.useState(!1),
                        f = _()(q, a),
                        E = f.result,
                        h = E.is_verified_organization || !1,
                        [y, I] = D()(Q);
                    l.useEffect(() => {
                        b(!1);
                    }, [E]);
                    const [v] = D()(X),
                        k = l.useCallback(() => {
                            p(!0);
                        }, []),
                        C = l.useCallback(() => {
                            p(!1);
                        }, []),
                        w = l.useCallback(() => {
                            if ("User" === E.__typename && E.legacy && E.legacy.id_str) {
                                const n = E.legacy.id_str;
                                p(!1);
                                const a = (0, H.oR)(t, "AffiliatesScreenAffiliatesQuery_business_team_affiliates");
                                y({
                                    variables: { affiliate_id: n, profile_id: e, sliceID: a, affiliation_id: f.result.__id },
                                    onCompleted: () => {
                                        d.scribe({ component: "accounts", element: "remove-affiliate-confirmation", action: "click", data: { verified_organizations_details: { affiliate_id: n, organization_id: e } } });
                                    },
                                    onError: () => {
                                        m.push("/i/verified", { verifiedOrgAdminError: K.F.deleteAffiliate });
                                    },
                                });
                            }
                        }, [y, e, E, t, f, m, d]);
                    if ("User" !== E.__typename) return null;
                    let T = "User";
                    function x(t) {
                        if ("User" === E.__typename && E.legacy && E.legacy.id_str) {
                            const n = E.legacy.id_str;
                            t !== T &&
                                (b(!0),
                                v({
                                    variables: { affiliate_id: n, organization_id: e, affiliate_type: t },
                                    onCompleted: () => {
                                        d.scribe({ component: "accounts", element: "badge-picker", action: "change", data: { verified_organizations_details: { affiliate_id: n, organization_id: e, affiliate_type: t } } }), o();
                                    },
                                    onError: () => {
                                        b(!1), m.push("/i/verified", { verifiedOrgAdminError: K.F.assignBadge });
                                    },
                                }));
                        }
                    }
                    function S() {
                        return l.createElement(r.Z, { style: ce.VOSubscriberPopover }, l.createElement(i.ZP, null, ie));
                    }
                    return (
                        "Business" === E.verification?.verified_type ? (T = "Business") : "Government" === E.verification?.verified_type && ("Circle" === E.profile_image_shape ? (T = "GovernmentIndividual") : "Square" === E.profile_image_shape && (T = "GovernmentOrganization")),
                        l.createElement(
                            l.Fragment,
                            null,
                            u ? l.createElement(B.Z, { actionLabel: te, actionType: "primaryFilled", enableMaskForDismiss: !0, graphicDisplayMode: "none", headline: ee({ name: E.core?.screen_name }), onAction: w, onClose: C, onSecondaryAction: C, secondaryActionLabel: ae, secondaryActionType: "primaryOutlined", subtext: ne }) : null,
                            l.createElement(
                                r.Z,
                                { role: "listitem" },
                                l.createElement(
                                    $.Z,
                                    { style: ce.root },
                                    l.createElement(r.Z, { style: ce.user }, l.createElement(O.Z, { size: "xLarge", user: E }), l.createElement(L.Z, { style: ce.userName, user: E, withLink: !0, withStackedLayout: !0 })),
                                    l.createElement(
                                        r.Z,
                                        { style: ce.rightControls },
                                        (function () {
                                            const e = l.createElement(Y, { affiliateType: T, disabled: g || h || n, onChange: x, verifiedType: E.verification?.verified_type || void 0 });
                                            return h ? l.createElement(r.Z, { testID: "voSubscriberPopover" }, l.createElement(N.Z, { enableHover: !0, renderContent: S }, e)) : e;
                                        })(),
                                        l.createElement(s.ZP, { disabled: I || n, hoverLabel: re, icon: le, onClick: k, testID: "removeButton", type: "destructiveOutlined" }),
                                    ),
                                ),
                            ),
                        )
                    );
                },
                se = l.memo(oe),
                ce = d.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, user: { alignItems: "center", flexDirection: "row", flexShrink: 1 }, verifiedIcon: { color: e.colors.badgeColor }, userName: { marginHorizontal: e.spaces.space8 }, rightControls: { flexDirection: "row" }, badgePicker: { marginEnd: 10, width: 192, textAlign: "end" }, VOSubscriberPopover: { paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space16 } })),
                de = p().cdcd1d2c,
                me = { buttonLink: "/i/verified/invite", buttonText: p().d1a35ec6, buttonType: "primaryFilled", secondaryButtonType: "primaryOutlined" },
                ue = w.Z;
            function pe(e) {
                return e.id;
            }
            function ge(e) {
                const { disabled: t = !1, refetch: n, refetchStatus: a, slice: i, userIds: o } = e,
                    s = (0, Z.z)();
                l.useEffect(() => {
                    s.scribe({ component: "accounts", action: "impression" });
                }, [s]);
                const c = l.useCallback((e) => (o ? l.createElement(se, { adminId: o.adminId, currentUserId: o.currentUserId, disabled: t, item: e, refetch: n, refetchStatus: a }) : null), [o, n, a, t]),
                    d = _()(ue, i).items_results;
                return d ? l.createElement(r.Z, { style: fe.wrapper }, d.length ? l.createElement(S.Z, { assumedItemHeight: 64, cacheKey: "accountList", footer: null, identityFunction: pe, items: d, renderer: c, withoutHeadroom: !0 }) : l.createElement(x.Z, (0, C.Z)({}, t ? null : me, { header: de }))) : null;
            }
            const be = l.memo(ge),
                fe = d.default.create((e) => ({ wrapper: { paddingBottom: e.spaces.space64 } }));
            var Ee = n(897571),
                he = n(315758),
                ye = n(218257),
                Ze = n(550496),
                Ie = n(507364),
                ve = n(756716),
                ke = n(358981),
                Ce = n(668214),
                we = n(390387),
                Te = n(689212);
            const _e = (0, Ce.Z)()
                    .propsFromState(() => ({ currentTab: Te.XI, verifiedConfigFetchStatus: Te.am, isDelegateStore: we.Lz }))
                    .propsFromActions(() => ({ updateCurrentTab: Te.rF }))
                    .withAnalytics({ page: "verified-organizations", section: "affiliates" }),
                xe = a.Z,
                Se = p().g2c0144a,
                Pe = p().c0d13570,
                Ae = p().d1a35ec6,
                Me = p().b437adda,
                Fe = p().b8e1d524,
                De = p().f1f6c88b,
                ze = p().b02156b8,
                Ne = p().gd67d29b,
                Be = p().daf646e6,
                $e = p().i3895c32,
                Ue = p().i5f8b628,
                He = p().e9e663ac,
                { origin: Oe } = y.ZP.get(),
                Le = `${Oe}/i/verified`,
                je = { link: l.createElement(i.ZP, { link: (0, o.ju)("https://legal.x.com/purchaser-terms.html"), withInteractiveStyling: !1 }) };
            function Ve({ currentTab: e, isDelegateStore: t, location: n, updateCurrentTab: a, verifiedConfigFetchStatus: o }) {
                const d = (0, Z.z)(),
                    { featureSwitches: m, userClaims: u } = (0, f.QZ)(),
                    { hasVerifiedOrgFeature: g, isInGracePeriod: E, isOrgReviewInProgress: y } = (0, h.ZP)(),
                    C = u.isFreeVerifiedOrg(),
                    w = y(),
                    T = E(),
                    _ = g("businessAdminPortalReadOnly"),
                    x = g("BusinessPreapprovalAdminPortalAccess"),
                    S = m.isTrue("responsive_web_verified_organizations_free_upgrade_promo_enabled"),
                    P = T || w || _ || x;
                l.useEffect(() => {
                    d.scribe({ action: "impression" });
                }, [d]),
                    window.history.replaceState({}, document.title);
                const A = l.useCallback(
                        (e) => {
                            a({ currentTab: e });
                        },
                        [a],
                    ),
                    { affiliateLimit: M } = (0, Ze.kC)(),
                    { data: F, refetch: D, refetchStatus: z } = (0, k.A)(xe, { count: M }),
                    N = l.useCallback(() => {
                        d.scribe({ element: "add-accounts", action: "click" });
                    }, [d]),
                    B = F.viewer.user_results.result,
                    $ = l.useMemo(() => ({ adminId: B.legacy?.id_str || "", currentUserId: B.__id || "" }), [B]);
                if ("User" !== B.__typename) return null;
                const U = B.business_team_affiliates;
                if (!U) return null;
                const H = B.verified_organization_invitations;
                if (!H) return null;
                if (o !== v.ZP.LOADED) return null;
                const O = H.items.length,
                    L = U.items_results.length,
                    j = (t) => !O || e === t,
                    V = l.createElement(p().I18NFormatMessage, { $i18n: "j0a20bf1" }, l.cloneElement(je.link, null, p().c3ddd22c)),
                    G = l.createElement(p().I18NFormatMessage, { $i18n: "j1b50481" }, l.cloneElement(je.link, null, p().c9729d8a)),
                    W = u.isGovVerifiedOrg() ? G : V,
                    R = [{ key: I.p.ACCOUNTS, label: L ? De({ count: L }) : Fe, isActive: () => j(I.p.ACCOUNTS), to: n.pathname, onClick: () => A(I.p.ACCOUNTS) }];
                return O ? R.push({ key: I.p.INVITATIONS, label: O ? Ne({ count: O }) : ze, isActive: () => j(I.p.INVITATIONS), to: n.pathname, onClick: () => A(I.p.INVITATIONS) }) : e === I.p.INVITATIONS && A(I.p.ACCOUNTS), l.createElement(l.Fragment, null, l.createElement(r.Z, { style: Ge.header }, l.createElement(ve.Z, null), l.createElement(i.ZP, { size: "title2", weight: "bold" }, Pe), l.createElement(r.Z, { style: Ge.buttonContainer }, l.createElement(he.Z, { affiliatesCount: L, invitesCount: O }), !C || t || S ? null : l.createElement(ye.Z, { buttonLabel: Me, buttonType: "brandOutlined", cancelUrl: Le, scribeElement: "vo-upgrade", shouldShowToast: !0, successUrl: Le, tierInterval: "Month" }), l.createElement(s.ZP, { disabled: P, link: P ? void 0 : "/i/verified/invite", onClick: N, size: "medium", type: "brandFilled" }, Ae)), l.createElement(c.Z.Primary, { headline: Be, style: Ge.calloutSpace, text: W }), w ? l.createElement(c.Z.Danger, { headline: $e, style: Ge.calloutSpace, text: Ue }) : null, T ? l.createElement(c.Z.Danger, { headline: He, style: Ge.calloutSpace, text: "To avoid your account losing verification, update your payment details. You will not be able to access features until payment is made." }) : null, l.createElement(K.Z, null)), l.createElement(b.Z, { links: R, style: Ge.tabs }), e === I.p.ACCOUNTS && U ? l.createElement(be, { disabled: P, refetch: D, refetchStatus: z, slice: U, userIds: $ }) : null, e === I.p.INVITATIONS && H ? l.createElement(Ie.Z, { disabled: P, slice: H, userIds: $ }) : null);
            }
            const Ge = d.default.create((e) => ({ errorCallout: { margin: 16 }, buttonContainer: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center", justifyContent: "center" }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", paddingHorizontal: 16, marginTop: e.spaces.space16 }, tabs: { marginTop: e.spaces.space4 }, calloutSpace: { marginTop: e.spaces.space16 }, loadingIndicator: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space4 } })),
                We = { context: "AffiliateList" };
            const Re = l.memo(
                _e(function (e) {
                    return l.createElement(E.H, { errorConfig: We, suspenseFallback: l.createElement(m.J, null) }, l.createElement(g.Z, { TabBar: ke.Z, history: e.history, isFullWidth: !0, primaryContent: l.createElement(Ve, e), rightControl: l.createElement(Ee.Z, null), sidebarContent: null, title: Se, withTweetButton: !1 }));
                }),
            );
        },
        545744: (e, t, n) => {
            n.r(t), n.d(t, { default: () => g });
            var a = n(202784),
                l = n(325686),
                r = n(107267),
                i = n(386802),
                o = n(731708),
                s = n(154003),
                c = n(392237),
                d = n(111677),
                m = n.n(d),
                u = n(980407);
            const p = c.default.create((e) => ({ container: { display: "flex", flexDirection: "column", flexGrow: 1, alignItems: "left", paddingTop: e.spaces.space48, paddingBottom: e.spaces.space48, paddingHorizontal: e.spaces.space72 }, twitterIcon: { color: e.colors.brandColor, height: "2em" }, paddingMobile: { paddingHorizontal: e.spaces.space28 }, mainSubtext: { marginTop: e.spaces.space20 }, okButton: { paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, marginTop: e.spaces.space32, width: "100%" } })),
                g = () => {
                    const e = (0, r.useHistory)(),
                        { isModal: t } = a.useContext(i.Z),
                        n = m().eb043b72,
                        c = m().a9ac4602,
                        d = m().a219e218;
                    return a.createElement(
                        u.Z,
                        { backButtonType: "close", history: e },
                        a.createElement(
                            l.Z,
                            { style: [p.container, t ? void 0 : p.paddingMobile] },
                            a.createElement(o.ZP, { align: "left", size: "title2", weight: "heavy" }, n),
                            a.createElement(o.ZP, { style: p.mainSubtext }, c),
                            a.createElement(
                                s.ZP,
                                {
                                    onClick: function () {
                                        e.goBack();
                                    },
                                    size: "xLarge",
                                    style: p.okButton,
                                    type: "primaryFilled",
                                },
                                d,
                            ),
                        ),
                    );
                };
        },
        844906: (e, t, n) => {
            n.r(t), n.d(t, { ApplicationScreen: () => j, default: () => V });
            var a = n(202784),
                l = (n(571372), n(325686)),
                r = n(107267),
                i = n(731708),
                o = n(688715),
                s = n(386802),
                c = n(855488),
                d = n(466818),
                m = n(96083),
                u = n(392237),
                p = n(111677),
                g = n.n(p),
                b = n(187669),
                f = n(980407),
                E = n(736063),
                h = n(952793),
                y = n(782826),
                Z = n(359870),
                I = n(725405),
                v = n(218257),
                k = n(762522),
                C = n(550496),
                w = n(668214),
                T = n(919022);
            const _ = (0, w.Z)().propsFromState(() => ({ loggedInUser: T.ZP.selectLoggedInUser })),
                x = g().ee86d380,
                S = g().dece6c60,
                P = g().b9c9ccca,
                A = g().c7e818de,
                M = g().i60d7542,
                F = g().b92f9dee,
                D = g().a91bb144,
                z = [
                    { label: g().j0e2cfa8, value: "Business", disabled: !1 },
                    { label: g().d2042392, value: "Government", disabled: !1 },
                ],
                N = { link: a.createElement(i.ZP, { link: (0, o.ju)("https://help.x.com/using-twitter/verified-organizations") }), handle: a.createElement(i.ZP, { weight: "bold" }) },
                B = (0, o.ju)("https://legal.x.com/purchaser-terms"),
                $ = { link: a.createElement(i.ZP, { link: B }) },
                U = ({ loggedInUser: e }) => {
                    const t = (0, r.useHistory)(),
                        { isModal: n } = a.useContext(s.Z),
                        o = (0, h.hC)("responsive_web_verified_organizations_invoice_enabled"),
                        u = (0, y.G3)(t.location),
                        p = (0, I.Z)();
                    (0, b.q)(() => {
                        p.scribe({ action: "impression", page: "verified-organizations", section: "application", component: "sign-up" });
                    });
                    const E = (0, r.useLocation)().state,
                        w = E?.tier,
                        T = E?.interval || "Month",
                        _ = "Basic" === w,
                        [B, U] = a.useState(!1),
                        [H, L] = a.useState(""),
                        [j, V] = a.useState(""),
                        [G, W] = a.useState(""),
                        [R, J] = a.useState(""),
                        [Y, K] = a.useState(""),
                        [q, Q] = a.useState(_ ? "BusinessBasic" : "Business"),
                        [X, ee] = a.useState(),
                        [te, ne] = a.useState(!1),
                        ae = e?.screen_name ? `@${e.screen_name}` : "",
                        [le, re] = (0, C.HF)(),
                        ie = a.useCallback(() => {
                            U(!0), ee(void 0);
                            const e = _ ? "BusinessBasic" === q : "Business" === q || "Government" === q,
                                t = (0, Z.Z)(G);
                            return new Promise((n, a) => {
                                if (!H || !j || t || !Y || !q || !e) return J(t), a(new Error("Invalid application form entries"));
                                le({ organizationName: H, applicantName: j, organizationEmailAddress: G, organizationWebsite: Y, organizationType: q })
                                    .then(() => {
                                        if (!o) return n();
                                        const e = `?interval=${encodeURIComponent(T)}&referring_page=${u.length > 0 ? u : "vo_application_page"}`;
                                        window.location.href = "/i/verified-welcome" + e;
                                    })
                                    .catch(() => (ee(k.F.createApplication), a(new Error("Error creating application"))));
                            });
                        }, [_, q, G, H, j, Y, le, o, T, u]);
                    return a.createElement(f.Z, { backButtonType: "back", history: t }, a.createElement(l.Z, { style: [O.container, n ? void 0 : O.paddingMobile] }, a.createElement(i.ZP, { size: "title2", weight: "heavy" }, x), a.createElement(i.ZP, { color: "gray700", style: O.mainSubtext }, a.createElement(g().I18NFormatMessage, { $i18n: "g42a8521" }, a.cloneElement(N.handle, null, g().f14d7866({ screenName: ae })), a.cloneElement(N.link, null, g().e63bf39d))), a.createElement(c.Z, { invalid: B && !H, label: S, name: "typedOrgName", onChange: (e) => L(e.currentTarget.value), style: O.applicationInput, testID: "orgNameField", value: H }), a.createElement(c.Z, { invalid: B && !Y, label: M, name: "typedOrgWebsite", onChange: (e) => K(e.currentTarget.value), style: O.applicationInput, testID: "websiteField", value: Y }), _ ? null : a.createElement(d.ZP, { hasError: B && !q, label: F, onChange: Q, options: z, style: O.orgTypeSelector, testID: "orgTypeField", value: q, withEmptyOption: !0 }), a.createElement(c.Z, { invalid: B && !j, label: P, name: "typedFullName", onChange: (e) => V(e.currentTarget.value), style: O.applicationInput, testID: "fullNameField", value: j }), a.createElement(c.Z, { errorText: R, invalid: B && (!G || !!R), label: A, name: "typedOrgEmailAddress", onChange: (e) => W(e.currentTarget.value), style: O.applicationInput, testID: "emailField", value: G }), a.createElement(l.Z, { style: O.footer }, a.createElement(k.Z, { error: X }), a.createElement(l.Z, { style: O.row }, a.createElement(m.Z, { checked: te, onChange: ne }), a.createElement(i.ZP, { color: "gray700" }, a.createElement(g().I18NFormatMessage, { $i18n: "aacfbecd" }, a.cloneElement($.link, null, g().f09630ff)))), a.createElement(v.Z, { buttonLabel: D, disabled: re || !te, onClick: ie, shouldShowErrorCallout: !0, tierInterval: T }))));
                },
                H = { context: "WelcomeScreen" };
            const O = u.default.create((e) => ({ container: { display: "flex", flexDirection: "column", flexGrow: 1, paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20, paddingHorizontal: e.spaces.space72 }, paddingMobile: { paddingHorizontal: e.spaces.space28 }, footer: { marginVertical: e.spaces.space16, gap: e.spaces.space16, marginHorizontal: "auto", maxWidth: "460px" }, twitterIcon: { color: e.colors.brandColor, height: "2em" }, mainSubtext: { marginTop: e.spaces.space16, marginBottom: e.spaces.space8 }, applicationInput: { paddingHorizontal: 0, paddingVertical: 5 }, orgTypeSelector: { marginTop: 5 }, row: { flexDirection: "row", gap: e.spaces.space16 }, orgHeading: { marginTop: e.spaces.space8, marginBottom: e.spaces.space12 }, adminHeading: { marginTop: e.spaces.space16, marginBottom: e.spaces.space12 } })),
                L = _(function (e) {
                    return a.createElement(E.H, { errorConfig: H }, a.createElement(U, e));
                }),
                j = (e) => a.createElement(L, e),
                V = j;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-ce62b015.6d39851a.js.map
