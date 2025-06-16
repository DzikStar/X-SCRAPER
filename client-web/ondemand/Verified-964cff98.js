"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-964cff98"],
    {
        336629: (e, t, n) => {
            n.d(t, { T: () => l });
            var a = n(97882),
                r = n(685731);
            const l = ({ annualPriceMonthly: e, includeTax: t, monthlyPriceAnnual: n, percentOff: l, price: i }) => {
                const o = (0, r.aU)(i, t, l),
                    s = e ? o / 12 : n ? 12 * o : o;
                return (0, a.x)({ amount: s, currencyCode: i?.currency_code.toUpperCase(), removeTrailingZeros: !0 });
            };
        },
        862695: (e, t, n) => {
            n.d(t, { V: () => h, f: () => E });
            var a = n(202784),
                r = n(325686),
                l = n(731708),
                i = n(392237),
                o = n(111677),
                s = n.n(o),
                c = n(336629);
            const d = s().i57aeafb,
                u = s().ae3e3723,
                m = s().ade4c757,
                p = s().f7798e11,
                g = s().e0b39888,
                b = s().b67c37de,
                f = s().a8363765,
                E = ({ activeDiscountInfo: e, discountInfo: t, formattedPrice: n, includeTax: a, isFreeTrial: r, isTierSwitching: l, price: i, selectedInterval: o, shouldRemoveExtraStep: s, withAnnualPriceMonthly: d }) => (r ? ("Month" === o ? m({ price: n }) : p({ price: n })) : t || e ? h({ formattedPrice: n, selectedInterval: o, includeDiscountedPrice: "Year" === o && d, discountedFormattedPrice: (0, c.T)({ price: i, includeTax: a, percentOff: l ? e?.promotion_metadata?.percent_off : t?.metadata.percent_off, annualPriceMonthly: !1 }), duration: l ? e?.promotion_metadata?.duration_in_interval : t?.metadata.duration_in_interval, includeThenLabel: !1 }) : d && "Year" === o && s ? f({ price: n }) : "Month" === o ? g : b),
                h = ({ discountedFormattedPrice: e, duration: t, formattedPrice: n, includeDiscountedPrice: i, includeThenLabel: o, selectedInterval: c }) => {
                    let g;
                    return (g = "Month" === c ? (i ? a.createElement(s().I18NFormatMessage, { $i18n: "a629c16f", discountedPrice: e ?? "", duration: t ?? "" }, a.createElement(l.ZP, { style: { textDecorationLine: "line-through" } }, s().df3ed1c8({ standardPrice: n }))) : d({ duration: t, standardPrice: n })) : i ? a.createElement(s().I18NFormatMessage, { $i18n: "c142e70f", discountedPrice: e ?? "", duration: t ?? "" }, a.createElement(l.ZP, { style: { textDecorationLine: "line-through" } }, s().g261b098({ standardPrice: n }))) : u({ duration: t, standardPrice: n })), o && (g = a.createElement(r.Z, null, a.createElement(l.ZP, { style: y.marginBottom }, g), a.createElement(l.ZP, null, "Year" === c ? p({ price: n }) : m({ price: n })))), g;
                },
                y = i.default.create((e) => ({ marginBottom: { marginBottom: e.spaces.space8 } }));
        },
        955010: (e, t, n) => {
            n.d(t, { B: () => u });
            var a = n(265433),
                r = n(202784),
                l = (n(585488), n(351743)),
                i = n.n(l),
                o = n(468811),
                s = n.n(o),
                c = n(71620);
            const d = a.Z;
            function u(e, t, n) {
                const [a] = i()(d),
                    l = (0, c.po)();
                return r.useCallback(
                    (r, i) => {
                        a({
                            variables: { module_id: i, enabled_for_display: r },
                            optimisticResponse: { user_update_module_visibility: { user_results: { id: s().v4(), result: { __typename: "User", id: e, editable_profilemodules: { modules_for_display: r ? [{ module_id: i }] : [] } } } } },
                            onError: (e) => {
                                l(e);
                            },
                            onCompleted: () => {
                                t && n && (t(!1), n());
                            },
                        });
                    },
                    [l, n, t, e, a],
                );
            }
        },
        499833: (e, t, n) => {
            n.r(t), n.d(t, { default: () => S });
            var a = n(807896),
                r = (n(136728), n(719681)),
                l = n(934562),
                i = n(202784),
                o = n(614983),
                s = n.n(o),
                c = (n(585488), n(351743)),
                d = n.n(c),
                u = n(111677),
                m = n.n(u),
                p = n(545457),
                g = n(252021),
                b = n(736063),
                f = n(535338),
                E = n(762522),
                h = n(454104),
                y = n(406098),
                Z = n(358981);
            const v = l.Z,
                I = r.Z,
                C = m().g2c0144a,
                _ = m().b12424fc,
                k = m().ca8df1e2,
                w = (e) => {
                    const { history: t } = e,
                        n = (0, f.p)(I, {}),
                        { basePath: r, isVerifiedOrg: l } = (0, h.Z)(),
                        o = n?.viewer?.user_results?.result?.rest_id || "",
                        s = n?.viewer?.user_results?.result?.recruiting_organization_results?.result?.__id;
                    return o && s ? (!l && (n?.viewer?.user_results?.result?.recruiting_organization_results?.result?.job_count?.total_count || 0) >= 3 && t.push(r), i.createElement(T, (0, a.Z)({}, e, { basePath: r, isVerifiedOrg: l, orgQueryId: s, viewerUserId: o }))) : null;
                },
                T = (e) => {
                    const { basePath: t, history: n, isVerifiedOrg: a, orgQueryId: r, viewerUserId: l } = e,
                        [o, c] = d()(v),
                        u = i.useCallback(
                            (e) => {
                                "number" == typeof e?.salary_min && e.salary_min < 0 && (e.salary_min = null),
                                    "number" == typeof e?.salary_max && e.salary_max < 0 && (e.salary_max = null),
                                    o({
                                        variables: { userId: l, ...e },
                                        updater: (e, t) => {
                                            const n = e.get(r);
                                            s()(n, "orgRecord must be specified"), n.invalidateRecord();
                                        },
                                        onCompleted: () => {
                                            n.push(t);
                                        },
                                        onError: () => {
                                            n.push(`${t}/new`, { verifiedOrgAdminError: E.F.createJob });
                                        },
                                    });
                            },
                            [o, l, r, n, t],
                        ),
                        m = i.useCallback(() => {
                            n.push(t);
                        }, [t, n]);
                    return i.createElement(g.Z, { TabBar: a ? Z.Z : void 0, history: n, isFullWidth: !0, primaryContent: i.createElement(y.Z, { description: k, formTitle: _, isMutationInFlight: c, onCancel: m, onSubmit: u }), sidebarContent: null, title: a ? C : null, withTweetButton: !1 });
                },
                P = { context: "AddJobList" },
                x = (e) => ((0, p.ph)(), i.createElement(b.H, { errorConfig: P }, i.createElement(w, e))),
                S = i.memo(x);
        },
        336678: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(150943);
            n(585488);
            const r = a.Z;
        },
        371976: (e, t, n) => {
            n.r(t), n.d(t, { default: () => yn });
            var a = n(202784),
                r = n(952793),
                l = n(325686),
                i = n(10622),
                o = n.n(i),
                s = n(712696),
                c = n.n(s),
                d = n(437429),
                u = n.n(d),
                m = n(731708),
                p = n(67369),
                g = n(40610),
                b = n(392237),
                f = n(111677),
                E = n.n(f),
                h = n(857378),
                y = n(252021),
                Z = n(943914),
                v = n(431053),
                I = n(762522),
                C = n(375839),
                _ = n(756716),
                k = n(358981),
                w = n(507151),
                T = n(688715);
            const P = { home: (0, T.ju)("https://ads.x.com"), accountSelect: (0, T.ju)("https://ads.x.com/account_select") },
                x = E().gd03b494,
                S = E().h1f36d3e,
                A = E().a6519ffc,
                M = E().ibc9654a,
                F = E().d3710c76,
                D = E().d60a8f14,
                z = E().fe66e4a8,
                N = E().b3ca0108,
                B = a.createElement(m.ZP, { link: P.accountSelect });
            function $(e) {
                const t = a.createElement(l.Z, { style: U.section }, a.createElement(m.ZP, { size: "headline2", style: U.howToHeadline, weight: "bold" }, x), a.createElement(m.ZP, null, S), a.createElement(m.ZP, null, a.createElement("ol", { style: U.list }, a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "a5f1d09f" }, a.cloneElement(B, null, E().g3754d57))), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "e3a90717" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "b743c7b7" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "d5128627" }))))),
                    n = a.createElement(l.Z, { style: U.section }, a.createElement(m.ZP, { size: "headline2", style: U.howToHeadline, weight: "bold" }, M), a.createElement(m.ZP, null, a.createElement("ul", { style: U.list }, a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "a5f1d09f" }, a.cloneElement(B, null, E().g3754d57))), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "ecd5d325" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "b743c7b7" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "d523367f" }))))),
                    r = a.createElement(l.Z, { style: U.section }, a.createElement(m.ZP, { size: "headline2", style: U.howToHeadline, weight: "bold" }, A), a.createElement(m.ZP, null, a.createElement("ul", { style: U.list }, a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "c10a3649" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "fab86f55" }, a.cloneElement(B, null, E().i615ad63))), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "b743c7b7" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "h9fe1a6d" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "d523367f" }))))),
                    i = a.createElement(l.Z, { style: U.section }, a.createElement(m.ZP, { size: "headline2", style: U.howToHeadline, weight: "bold" }, F), a.createElement(m.ZP, null, a.createElement("ul", { style: U.list }, a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "a4087047" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "ca18299b" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "b83bc371" }, a.cloneElement(B, null, E().a3ba48b9))), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "b743c7b7" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "d523367f" }))))),
                    o = a.createElement(l.Z, { style: U.adsHowToCard }, a.createElement(w.Z, { description: D, linkLabel: z, onClick: () => window.open(P.home, "_blank"), secondaryDescription: N }));
                return a.createElement(l.Z, { style: U.howToSection }, o, t, n, r, i);
            }
            const U = b.default.create((e) => ({ howToSection: { marginBottom: e.spaces.space16 }, section: { marginTop: e.spaces.space40 }, howToHeadline: { marginBottom: e.spaces.space8 }, adsHowToCard: { width: "50%", marginTop: e.spaces.space20 }, list: { marginBottom: 0 } })),
                O = a.memo($);
            var L = n(336678);
            const H = { FullAccessGov: { Year: "", Month: "" }, FullAccess: { Year: "$10k", Month: "$1k" }, Basic: { Year: "$2k", Month: "$200" } },
                j = E().g2c0144a,
                V = E().a4cf866e,
                G = E().c5af3e12,
                R = E().e18d6fd6,
                W = E().if435d1a,
                J = a.createElement(m.ZP, { link: P.home }),
                Y = (e) => {
                    const { history: t, location: n } = e,
                        r = (0, p.Zz)(),
                        i = u()(),
                        s = c()(L.Z, {}),
                        { interval: d, tier: b } = (0, C.Z)();
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
                            o()(i, L.Z, {})
                                .toPromise()
                                .then((e) => {
                                    w(y(e));
                                })
                                .catch(() => {
                                    t.replace(n.pathname, { verifiedOrgAdminError: I.F.adsPromoActivation });
                                });
                        }, [i, y, t, n]),
                        [k, w] = a.useState(y(s)),
                        T = a.useMemo(() => {
                            const e = f(s),
                                t = e.filter(({ status: e }) => "Expired" === e).length;
                            return e.length === t;
                        }, [s, f]),
                        P = H[b][d],
                        x = a.useMemo(() => ("Year" === d ? a.createElement(E().I18NFormatMessage, { $i18n: "feb950f3", xtc_coupon_value: P }) : a.createElement(E().I18NFormatMessage, { $i18n: "h9629ab7", xtc_coupon_value: P })), [d, P]);
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(
                            l.Z,
                            { style: [Q.header, r ? Q.marginBottom64 : null] },
                            a.createElement(_.Z, null),
                            a.createElement(m.ZP, { size: "title2", weight: "bold" }, V),
                            a.createElement(m.ZP, { style: Q.pageDescription, testID: "pageDescription" }, x),
                            a.createElement(m.ZP, { size: "subtext3", style: Q.pageSubtext, testID: "pageSubtext" }, "*", G),
                            a.createElement(
                                l.Z,
                                { style: Q.section },
                                a.createElement(m.ZP, { size: "headline2", style: Q.creditsSubtitle, testID: "creditsSubtitle", weight: "bold" }, R),
                                a.createElement(m.ZP, { testID: "creditsDescription" }, a.createElement(E().I18NFormatMessage, { $i18n: "i3781135" }, a.cloneElement(J, null, E().af6704d7))),
                                a.createElement(I.Z, null),
                                T && a.createElement(g.Z.Primary, { headline: W, style: Q.noCouponsLabel, withIcon: !1 }),
                                a.createElement(
                                    l.Z,
                                    { style: Q.couponsContainer },
                                    k.map((e, t) => a.createElement(v.Z, { item: e, key: t, onSuccessfulActivation: Z })),
                                ),
                            ),
                            a.createElement(O, null),
                        ),
                        a.createElement(l.Z, { style: [Q.stickySection, r ? Q.bottomMobile : Q.bottomDesktop] }, a.createElement(m.ZP, null, a.createElement(E().I18NFormatMessage, { $i18n: "ff1cc953" }, a.createElement(m.ZP, { link: { pathname: "mailto:verified-premium-support@x.com", external: !0 } }, E().b293c6b4)))),
                    );
                },
                Q = b.default.create((e) => ({ header: { flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", paddingHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 }, marginBottom64: { marginBottom: e.spaces.space64 }, pageDescription: { marginTop: e.spaces.space16 }, pageSubtext: { marginTop: e.spaces.space24 }, section: { width: "100%", marginTop: e.spaces.space40 }, creditsSubtitle: { marginBottom: e.spaces.space8 }, couponsContainer: { width: "100%", flexDirection: "row", gap: e.spaces.space24, marginTop: e.spaces.space16, paddingStart: e.spaces.space2, flexWrap: "wrap" }, stickySection: { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", position: "sticky", start: 0, bottom: 0, end: 0, width: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space16, borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small }, bottomDesktop: { bottom: 0 }, bottomMobile: { bottom: h.h$ }, noCouponsLabel: { marginTop: e.spaces.space16 } })),
                K = (e) => a.createElement(Z.B, null, a.createElement(y.Z, { TabBar: k.Z, history: e.history, isFullWidth: !0, primaryContent: a.createElement(Y, e), sidebarContent: null, title: j, withTweetButton: !1 }));
            var q = n(807896),
                X = n(95186),
                ee = (n(585488), n(736063)),
                te = n(693510),
                ne = n(897571),
                ae = n(948927),
                re = n(630887),
                le = (n(278945), n(530732)),
                ie = n(154003),
                oe = n(868634),
                se = n(593385),
                ce = n(656474);
            const de = E().c9fad534,
                ue = E().a211b11e,
                me = () => a.createElement(g.Z.Primary, { headline: de, text: ue, withIcon: !0 }),
                pe = ({ promotions: e, showPromotionModal: t }) => {
                    const n = a.useMemo(() => e.toSorted(be), [e]);
                    return a.createElement(
                        l.Z,
                        null,
                        n.map((e) => a.createElement(Ee, { key: e.__id, promotion: e, showPromotionModal: t })),
                    );
                },
                ge = { Scheduled: 1, Redeemable: 2, Active: 3, Expired: 4 },
                be = (e, t) => {
                    const n = ge[e.isCouponDone ? "Expired" : e.status],
                        a = ge[t.isCouponDone ? "Expired" : t.status],
                        r = e.validUntil ?? e.expires,
                        l = r ? r.getTime() : 0,
                        i = t.validUntil ?? t.expires,
                        o = i ? i.getTime() : 0,
                        s = "Expired" === e.status ? -1 : 1;
                    return n - a || s * (l - o);
                },
                fe = E().gd7d051c,
                Ee = ({ promotion: e, showPromotionModal: t }) => {
                    const n = Ze(e),
                        r = Te(e),
                        i = Pe(e),
                        o = "Redeemable" === e.status,
                        s = a.useCallback(() => t(e), [e, t]);
                    return a.createElement(le.Z, { role: "adscredititem", style: Ue.adsCreditItem }, a.createElement(l.Z, { style: Ue.adsCreditItemContent }, a.createElement(l.Z, { style: Ue.labeledAction }, a.createElement(m.ZP, { size: "body", weight: "bold" }, n), i), r ? a.createElement(m.ZP, { color: "gray700", size: "subtext1", style: Ue.subText, weight: "normal" }, r) : null), o ? a.createElement(ie.ZP, { onClick: s }, fe) : null);
                },
                he = E().f2011db1,
                ye = E().ae37e25c,
                Ze = (e) => {
                    const t = e.status;
                    return "Scheduled" !== t && "Redeemable" !== t && e.forAdsAccountId && e.formattedUsedAmount ? he({ usedAmount: e.formattedUsedAmount, couponAmount: e.formattedCouponAmount }) : (e.formattedCouponAmount ?? ye);
                },
                ve = E().i1407e15,
                Ie = E().id4359bf,
                Ce = E().f89af915,
                _e = E().c1b5e1ed,
                ke = E().e8d8a2a9,
                we = E().i3884c1f,
                Te = (e) => {
                    const { expires: t, starts: n, validUntil: a } = e,
                        r = a ?? t,
                        l = e.forAdsAccountId;
                    if (e.isCouponDone) return ve({ accountId: l });
                    switch (e.status) {
                        case "Expired":
                            return t && r ? (l ? Ie({ when: (0, ce.B)(r), accountId: l }) : Ce({ when: (0, ce.B)(r) })) : null;
                        case "Redeemable":
                        case "Active":
                            return t && r ? (l ? _e({ when: (0, ce.B)(r), accountId: l }) : ke({ when: (0, ce.B)(r) })) : null;
                        case "Scheduled":
                            return n ? we({ when: (0, ce.B)(n) }) : null;
                        default:
                            return null;
                    }
                },
                Pe = (e) => {
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
                xe = E().eb4e810a,
                Se = E().be103b84,
                Ae = E().e9e9ca58,
                Me = E().b070acf4,
                Fe = E().b772cd66,
                De = () => a.createElement(oe.ZP, { background: "gray700" }, xe),
                ze = () => a.createElement(oe.ZP, { background: "green500" }, Se),
                Ne = () => a.createElement(oe.ZP, { background: "blue500" }, Ae),
                Be = () => a.createElement(oe.ZP, { background: "orange500" }, Me),
                $e = () => a.createElement(oe.ZP, { background: "gray700" }, Fe),
                Ue = b.default.create((e) => ({ adsCreditItem: { cursor: "pointer", flexDirection: "row", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, width: "100%" }, adsCreditItemContent: { flexShrink: 1, flexGrow: 1 }, labeledAction: { flexDirection: "row", gap: e.spaces.space8 }, subText: { marginTop: e.spaces.space4 } })),
                Oe = ({ user: e }) => {
                    const [t, n] = a.useState(),
                        r = a.useCallback(() => n(void 0), [n]),
                        i = (0, ce.C)(e);
                    return a.createElement(l.Z, null, i.length > 0 ? a.createElement(pe, { promotions: i, showPromotionModal: n }) : a.createElement(me, null), t ? a.createElement(se.Z, { coupon: t, onDismiss: r }) : null);
                };
            var Le = n(24410),
                He = n(277660),
                je = n.n(He);
            const Ve = Le.Z,
                Ge = E().e016ad32,
                Re = E().d7ab194e,
                We = ({ user: e }) =>
                    ((e) => {
                        const { web_tier_switch_progress: t } = e,
                            n = t?.status;
                        return "Pending" === n;
                    })(e)
                        ? a.createElement(l.Z, { style: Je.callouts }, a.createElement(g.Z.Attention, { headline: Ge, text: Re, withIcon: !0 }))
                        : null,
                Je = b.default.create((e) => ({ callouts: {} })),
                Ye = ({ user: e }) => a.createElement(We, { user: je()(Ve, e) }),
                Qe = ({ children: e }) => a.createElement(l.Z, { style: qe.group }, e),
                Ke = ({ children: e, intro: t, title: n }) => a.createElement(l.Z, { style: qe.section }, n ? a.createElement(m.ZP, { size: "headline1", style: qe.title, weight: "bold" }, n) : null, t ? a.createElement(m.ZP, { style: qe.intro }, t) : null, e),
                qe = b.default.create((e) => ({ group: { gap: e.spaces.space32 }, section: {}, title: { marginBottom: e.spaces.space8 }, intro: {} }));
            n(571372);
            var Xe = n(716980),
                et = n(13720),
                tt = n(108837),
                nt = n(143670),
                at = n(293723),
                rt = n(263272),
                lt = n(913973),
                it = n(390587),
                ot = n(17412),
                st = n(529356),
                ct = n(854219);
            const dt = ({ account: e, onDismiss: t }) => (e ? a.createElement(bt, { account: e, onDismiss: t }) : a.createElement(gt, { onDismiss: t })),
                ut = E().cd5aeec6,
                mt = E().ged51d2e,
                pt = E().gcfa25e6,
                gt = ({ onDismiss: e }) => a.createElement(st.Z, { actionLabel: ut, actionLink: { pathname: "https://ads.x.com/", external: !0 }, actionType: "primaryFilled", graphicDisplayMode: "none", headline: mt, onAction: e, onClose: e, role: "dialog", subtext: pt }),
                bt = (e) => {
                    const t = e.account.eligibility ?? "%other";
                    switch (t) {
                        case "EligibleHasPaymentMethod":
                            return null;
                        case "IneligibleLastPaymentFailed":
                        case "EligibleNeedsPaymentMethod":
                            return a.createElement(St, e);
                        case "IneligibleLockedOut":
                        case "IneligibleMmsDsoNotSetUp":
                        case "IneligiblePreAdvertiserUnsupportedCountry":
                        case "IneligibleReviewFailure":
                        case "IneligibleUnsupportedServiceLevel":
                            return a.createElement(Dt, e);
                        case "IneligiblePreAdvertiserMissingCountryCode":
                            return a.createElement(yt, e);
                        case "IneligibleUnauthorized":
                            return a.createElement(Ct, e);
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
                vt = E().g8c563c0,
                It = E().f6f29b17,
                Ct = ({ account: e, onDismiss: t }) => {
                    const n = e.id;
                    return a.createElement(st.Z, { actionLabel: Zt, actionType: "primaryFilled", graphicDisplayMode: "none", headline: vt, onAction: t, onClose: t, role: "dialog", subtext: It({ adAccountId: n }) });
                },
                _t = E().a15bb840,
                kt = E().j4e981d9,
                wt = E().f11264ac,
                Tt = E().af142910,
                Pt = E().a9635acf,
                xt = E().d1cca474,
                St = ({ account: e, onDismiss: t }) => {
                    const n = e.id,
                        r = "IneligibleLastPaymentFailed" === e.eligibility;
                    return a.createElement(st.Z, { actionLabel: r ? xt : wt, actionLink: { pathname: `https://ads.x.com/billing/${n}/payment_methods/`, external: !0 }, actionType: "primaryFilled", graphicDisplayMode: "none", headline: r ? Tt : _t, onAction: t, onClose: t, role: "dialog", subtext: r ? Pt({ adAccountId: n }) : kt({ adAccountId: n }) });
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
                    const [n, r] = a.useState(),
                        l = (0, re.zK)(),
                        i = [a.useMemo(() => Vt(e, r), [e, r]), a.useMemo(() => (l ? Xt(e, t, r) : null), [e, t, l, r])].filter(Boolean);
                    return a.createElement(a.Fragment, null, a.createElement(et.Z, { allowMultipleToggles: !1 }, i), n);
                },
                Ot = (e) => ({ isComplete: !0, task: e }),
                Lt = (e) => ({ isComplete: !1, task: e }),
                Ht = (e, t, n) => {
                    const r = ((e) => e.every((e) => e.isComplete))(n);
                    return a.createElement(tt.Z, { icon: r ? at.default : rt.default, iconColor: r ? Bt : $t, iconSide: "BeforeTitle", key: e, title: t }, ((e) => e.map((e) => e.task))(n));
                },
                jt = E().g25d851e,
                Vt = (e, t) => {
                    const n = e.accounts,
                        a = 0 === n.length ? [Qt()] : n.map((e) => Wt(e, t));
                    return Ht("makeAccountsTask", jt, a);
                },
                Gt = E().de7fef84,
                Rt = { EligibleHasPaymentMethod: E().ff1321b6, EligibleNeedsPaymentMethod: E().c1205320, IneligibleLastPaymentFailed: E().c0343c0a, IneligibleLockedOut: E().j56e34a4, IneligibleMmsDsoNotSetUp: Gt, IneligiblePreAdvertiserMissingCountryCode: E().gef920f2, IneligiblePreAdvertiserUnsupportedCountry: Gt, IneligibleReviewFailure: Gt, IneligibleUnauthorized: E().b68dd4d8, IneligibleUnsupportedServiceLevel: Gt },
                Wt = (e, t) => {
                    const n = e.eligibility ?? "%other",
                        r = () => {
                            t();
                        },
                        l = () => {
                            t(a.createElement(dt, { account: e, onDismiss: r }));
                        };
                    switch (n) {
                        case "EligibleHasPaymentMethod":
                            return Ot(a.createElement(nt.Z, { Icon: lt.default, actionSubText: Rt[n], actionText: Kt(e), key: e.id, style: rn.subTaskMenuItem }));
                        case "IneligibleLastPaymentFailed":
                        case "EligibleNeedsPaymentMethod":
                        case "IneligibleLockedOut":
                        case "IneligibleMmsDsoNotSetUp":
                        case "IneligiblePreAdvertiserUnsupportedCountry":
                        case "IneligibleReviewFailure":
                        case "IneligibleUnsupportedServiceLevel":
                        case "IneligiblePreAdvertiserMissingCountryCode":
                        case "IneligibleUnauthorized":
                            return Lt(a.createElement(nt.Z, { Icon: it.default, actionSubText: Rt[n], actionText: Kt(e), key: e.id, onClick: l, style: rn.subTaskMenuItem }));
                        default:
                            throw new Error(`unexpected AdvertiserAccountEligibility: '${n}'`);
                    }
                },
                Jt = E().d637962c,
                Yt = E().dd087ae0,
                Qt = () => Lt(a.createElement(nt.Z, { Icon: it.default, actionSubText: Yt, actionText: Jt, key: "makeNoAdAccountsSetupTask", link: { pathname: "https://ads.x.com/", external: !0 }, style: rn.subTaskMenuItem })),
                Kt = (e) => {
                    if (e && null != e.name) return e && `${e.name} (id: ${e.id})`;
                },
                qt = E().c67b260c,
                Xt = (e, t, n) => {
                    const a = ((e) => e?.job_count ?? 0)(t),
                        r = [tn(e, n), an(a)];
                    return Ht("makeJobPromotionTask", qt, r);
                },
                en = { EligibleJobPromotionAvailable: E().i3d7dd02, IneligibleAdsAccountMissing: E().cc8f8516, IneligibleUnauthorized: E().b4f117b8, IneligibleAdsAccountNeedsAttention: E().b7347cf4 },
                tn = (e, t) => {
                    const { jobPromotionAccount: n, jobPromotionEligibility: r } = e,
                        l = () => {
                            t();
                        },
                        i = () => {
                            t(a.createElement(dt, { account: n, onDismiss: l }));
                        };
                    switch (r) {
                        case "EligibleJobPromotionAvailable":
                            return Ot(a.createElement(nt.Z, { Icon: lt.default, actionSubText: Kt(n), actionText: en[r], key: r, style: rn.subTaskMenuItem }));
                        case "IneligibleAdsAccountMissing":
                        case "IneligibleUnauthorized":
                        case "IneligibleAdsAccountNeedsAttention":
                            return Lt(a.createElement(nt.Z, { Icon: it.default, actionSubText: Kt(n), actionText: en[r], key: r, onClick: i, style: rn.subTaskMenuItem }));
                        default:
                            throw new Error(`unexpected JobPromotionEligibility: '${r}'`);
                    }
                },
                nn = E().h7d03a2a,
                an = (e) => (e > 0 ? Ot(a.createElement(nt.Z, { Icon: lt.default, actionText: a.createElement(E().I18NFormatMessage, { $i18n: "b17ac597" }, a.createElement(ot.default, null)), key: "makePostJobsSetupTask", link: "/i/verified/jobs", style: rn.subTaskMenuItem })) : Lt(a.createElement(nt.Z, { Icon: it.default, actionSubText: a.createElement(E().I18NFormatMessage, { $i18n: "ga44a2f9" }, a.createElement(ot.default, null)), actionText: nn, key: "makePostJobsSetupTask", link: "/i/verified/jobs", style: rn.subTaskMenuItem }))),
                rn = b.default.create((e) => ({ subTaskMenuItem: { marginStart: e.spaces.space16 } })),
                ln = ({ user: e }) => a.createElement(Ut, { advertiserAccounts: ae.kb(e), org: Nt(e) });
            var on = n(481326);
            const sn = b.default.create((e) => ({ stickySection: { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", position: "sticky", start: 0, bottom: 0, end: 0, width: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space16, borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small }, bottomDesktop: { bottom: 0 }, bottomMobile: { bottom: h.h$ }, link: { color: e.colors.link } })),
                cn = () => {
                    const e = (0, p.Zz)(),
                        t = (0, r.hC)("responsive_web_verified_organizations_intercom_enabled") ? a.createElement(ct.Z, { style: sn.link }) : a.createElement(m.ZP, { link: on.A9 });
                    return a.createElement(l.Z, { style: [sn.stickySection, e ? sn.bottomMobile : sn.bottomDesktop] }, a.createElement(m.ZP, null, a.createElement(E().I18NFormatMessage, { $i18n: "ff1cc953" }, a.cloneElement(t, null, E().b293c6b4))));
                },
                dn = X.Z,
                un = (e) => {
                    const { user: t } = (() => {
                        const { sku: e } = (0, C.Z)(),
                            t = e ?? "",
                            { viewer: n } = c()(dn, { current_product_sku: t });
                        return { user: n.user_results.result };
                    })();
                    return a.createElement(te._3, { user: t }, a.createElement(ae.Em, { user: t }, a.createElement(y.Z, { TabBar: k.Z, history: e.history, isFullWidth: !0, primaryContent: a.createElement(bn, (0, q.Z)({ user: t }, e)), rightControl: a.createElement(ne.Z, null), sidebarContent: null, title: mn, withTweetButton: !1 })));
                },
                mn = E().g2c0144a,
                pn = E().a4cf866e,
                gn = E().ca3c633a,
                bn = ({ user: e }) => {
                    const t = (0, p.Zz)(),
                        n = (0, re.zK)();
                    return a.createElement(a.Fragment, null, a.createElement(l.Z, { style: [fn.screen, t ? fn.mobileBottom64 : null] }, a.createElement(Ye, { user: e }), a.createElement(l.Z, { style: fn.content }, a.createElement(m.ZP, { size: "title2", weight: "bold" }, pn), a.createElement(l.Z, null, a.createElement(m.ZP, null, n ? a.createElement(E().I18NFormatMessage, { $i18n: "ba6442ef" }, a.createElement(m.ZP, { link: { pathname: "https://ads.x.com/" } }, E().ha843c96)) : a.createElement(E().I18NFormatMessage, { $i18n: "e52e0c73" }, a.createElement(m.ZP, { link: { pathname: "https://ads.x.com/" } }, E().dd0f3b08)))), a.createElement(ln, { user: e }), a.createElement(Qe, null, a.createElement(Ke, { title: gn }, a.createElement(Oe, { user: e }))))), a.createElement(cn, null));
                },
                fn = b.default.create((e) => ({ screen: { flexDirection: "column", paddingHorizontal: e.spaces.space16, gap: e.spaces.space16, marginVertical: e.spaces.space16 }, mobileBottom64: { marginBottom: e.spaces.space64 }, content: { gap: e.spaces.space16 } })),
                En = { context: "AdvertisingScreen" },
                hn = (e) => a.createElement(ee.H, { errorConfig: En }, a.createElement(un, e)),
                yn = (e) => ((0, r.hC)("verified_vo_refreshed_advertising_screen_enabled") ? a.createElement(hn, e) : a.createElement(K, e));
        },
        978789: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(202784),
                r = n(325686),
                l = n(952428),
                i = n(731708),
                o = n(96083),
                s = n(673510),
                c = n(392237),
                d = n(736063);
            const u = ({ affiliates: e, onSelectedChange: t, selectedAffiliates: n, withSelectAll: c }) => {
                    const d = e && e.length > 0,
                        u = e.length === n.length,
                        m = a.useCallback(() => {
                            t(u ? [] : [...e]);
                        }, [e, t, u]),
                        g = a.useMemo(() => a.createElement(l.Z, { onClick: m, style: p.selectAllCell }, a.createElement(i.ZP, null, "Select all"), a.createElement(o.Z, { checked: u, onClick: m })), [m, u]),
                        b = a.useCallback(
                            (e, a) => {
                                const r = a ? [...n, e] : n.filter((t) => t.result?.legacy?.id_str !== e.result?.legacy?.id_str);
                                t(r);
                            },
                            [t, n],
                        );
                    return d
                        ? a.createElement(
                              r.Z,
                              null,
                              c ? g : null,
                              e?.map((e, t) => {
                                  const { name: r, screen_name: l } = e.result?.core || {},
                                      i = e.result?.legacy?.id_str,
                                      { image_url: c } = e.result?.avatar || {},
                                      d = !!n.find((e) => e.result.legacy?.id_str === i),
                                      u = () => b(e, !d);
                                  return r && c && l && i ? a.createElement(s.ZP, { avatarUri: c, decoration: a.createElement(o.Z, { checked: d, onClick: u }), displayMode: "UserCompact", key: `affiliate-filter-${t}`, name: r, onAvatarClick: u, onCellClick: u, onScreenNameClick: u, screenName: l, userId: i, withLink: !1 }) : null;
                              }),
                          )
                        : null;
                },
                m = (e) => a.createElement(d.H, { errorConfig: { context: "VerifiedOrgAffiliateSelector" } }, a.createElement(u, e)),
                p = c.default.create((e) => ({ selectAllCell: { flexDirection: "row", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, justifyContent: "space-between", minHeight: e.spaces.space64, alignItems: "center" } }));
        },
        64451: (e, t, n) => {
            n.r(t), n.d(t, { default: () => We });
            n(136728);
            var a = n(849333),
                r = n(202784),
                l = n(325686),
                i = (n(585488), n(731708)),
                o = n(688715),
                s = n(154003),
                c = n(40610),
                d = n(392237),
                u = n(682830),
                m = n(111677),
                p = n.n(m),
                g = n(252021),
                b = n(507651),
                f = n(443781),
                E = n(736063),
                h = n(693510),
                y = n(782826),
                Z = n(725516),
                v = n(540819),
                I = n(312771),
                C = n(482924),
                _ = n(807896),
                k = n(355763),
                w = n(277660),
                T = n.n(w),
                P = n(457311),
                x = n(965245),
                S = n(495842),
                A = n(686207),
                M = n(775709),
                F = n(351743),
                D = n.n(F),
                z = n(107267),
                N = n(157130),
                B = n(529356),
                $ = n(952428),
                U = n(837020),
                O = n(700797),
                L = n(412876),
                H = n(553660),
                j = n(797553),
                V = n(143670),
                G = n(487552);
            const R = p().j3115ce8,
                W = p().d8bb1d84;
            const J = d.default.create((e) => ({ badgePicker: { marginEnd: 10, textAlign: "end" }, dropdownIcon: { marginStart: e.spaces.space4 } })),
                Y = function (e) {
                    const { affiliateType: t, disabled: n, onChange: a } = e,
                        [l, i] = r.useState(!1);
                    function o() {
                        i(!1);
                    }
                    function c(e) {
                        a(e), o();
                    }
                    const d = { User: R, Business: W, GovernmentIndividual: R, GovernmentOrganization: W },
                        u = "Government" === e.verifiedType ? "GovernmentIndividual" : "User",
                        m = "Government" === e.verifiedType ? "GovernmentOrganization" : "Business";
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
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
                            r.createElement(G.default, { style: J.dropdownIcon }),
                        ),
                        l && r.createElement(j.default, { onDismiss: o }, r.createElement(V.Z, { actionText: R, onClick: () => c(u), testID: `${u}_MenuItem` }), r.createElement(V.Z, { actionText: W, onClick: () => c(m), testID: `${m}_MenuItem` })),
                    );
                };
            var Q = n(762522);
            const K = M.Z,
                q = A.Z,
                X = S.Z,
                ee = p().d30ea6f3,
                te = p().c2dfbb86,
                ne = p().ba047f76,
                ae = p().cfd2f35e,
                re = r.createElement(U.default, { testID: "closeIcon" }),
                le = { label: p().j26dee0e, preferredHorizontalOrientation: "start" },
                ie = p().e30cbdf0,
                oe = ({ adminId: e, currentUserId: t, disabled: n = !1, item: a, refetch: o, refetchStatus: c }) => {
                    const d = (0, Z.z)(),
                        u = (0, z.useHistory)(),
                        [m, p] = r.useState(!1),
                        [g, b] = r.useState(!1),
                        f = T()(K, a),
                        E = f.result,
                        h = E.is_verified_organization || !1,
                        [y, v] = D()(q);
                    r.useEffect(() => {
                        b(!1);
                    }, [E]);
                    const [I] = D()(X),
                        C = r.useCallback(() => {
                            p(!0);
                        }, []),
                        _ = r.useCallback(() => {
                            p(!1);
                        }, []),
                        k = r.useCallback(() => {
                            if ("User" === E.__typename && E.legacy && E.legacy.id_str) {
                                const n = E.legacy.id_str;
                                p(!1);
                                const a = (0, O.oR)(t, "AffiliatesScreenAffiliatesQuery_business_team_affiliates");
                                y({
                                    variables: { affiliate_id: n, profile_id: e, sliceID: a, affiliation_id: f.result.__id },
                                    onCompleted: () => {
                                        d.scribe({ component: "accounts", element: "remove-affiliate-confirmation", action: "click", data: { verified_organizations_details: { affiliate_id: n, organization_id: e } } });
                                    },
                                    onError: () => {
                                        u.push("/i/verified", { verifiedOrgAdminError: Q.F.deleteAffiliate });
                                    },
                                });
                            }
                        }, [y, e, E, t, f, u, d]);
                    if ("User" !== E.__typename) return null;
                    let w = "User";
                    function P(t) {
                        if ("User" === E.__typename && E.legacy && E.legacy.id_str) {
                            const n = E.legacy.id_str;
                            t !== w &&
                                (b(!0),
                                I({
                                    variables: { affiliate_id: n, organization_id: e, affiliate_type: t },
                                    onCompleted: () => {
                                        d.scribe({ component: "accounts", element: "badge-picker", action: "change", data: { verified_organizations_details: { affiliate_id: n, organization_id: e, affiliate_type: t } } }), o();
                                    },
                                    onError: () => {
                                        b(!1), u.push("/i/verified", { verifiedOrgAdminError: Q.F.assignBadge });
                                    },
                                }));
                        }
                    }
                    function x() {
                        return r.createElement(l.Z, { style: ce.VOSubscriberPopover }, r.createElement(i.ZP, null, ie));
                    }
                    return (
                        "Business" === E.verification?.verified_type ? (w = "Business") : "Government" === E.verification?.verified_type && ("Circle" === E.profile_image_shape ? (w = "GovernmentIndividual") : "Square" === E.profile_image_shape && (w = "GovernmentOrganization")),
                        r.createElement(
                            r.Fragment,
                            null,
                            m ? r.createElement(B.Z, { actionLabel: te, actionType: "primaryFilled", enableMaskForDismiss: !0, graphicDisplayMode: "none", headline: ee({ name: E.core?.screen_name }), onAction: k, onClose: _, onSecondaryAction: _, secondaryActionLabel: ae, secondaryActionType: "primaryOutlined", subtext: ne }) : null,
                            r.createElement(
                                l.Z,
                                { role: "listitem" },
                                r.createElement(
                                    $.Z,
                                    { style: ce.root },
                                    r.createElement(l.Z, { style: ce.user }, r.createElement(L.Z, { size: "xLarge", user: E }), r.createElement(H.Z, { style: ce.userName, user: E, withLink: !0, withStackedLayout: !0 })),
                                    r.createElement(
                                        l.Z,
                                        { style: ce.rightControls },
                                        (function () {
                                            const e = r.createElement(Y, { affiliateType: w, disabled: g || h || n, onChange: P, verifiedType: E.verification?.verified_type || void 0 });
                                            return h ? r.createElement(l.Z, { testID: "voSubscriberPopover" }, r.createElement(N.Z, { enableHover: !0, renderContent: x }, e)) : e;
                                        })(),
                                        r.createElement(s.ZP, { disabled: v || n, hoverLabel: le, icon: re, onClick: C, testID: "removeButton", type: "destructiveOutlined" }),
                                    ),
                                ),
                            ),
                        )
                    );
                },
                se = r.memo(oe),
                ce = d.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, user: { alignItems: "center", flexDirection: "row", flexShrink: 1 }, verifiedIcon: { color: e.colors.badgeColor }, userName: { marginHorizontal: e.spaces.space8 }, rightControls: { flexDirection: "row" }, badgePicker: { marginEnd: 10, width: 192, textAlign: "end" }, VOSubscriberPopover: { paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space16 } })),
                de = p().cdcd1d2c,
                ue = { buttonLink: "/i/verified/invite", buttonText: p().d1a35ec6, buttonType: "primaryFilled", secondaryButtonType: "primaryOutlined" },
                me = k.Z;
            function pe(e) {
                return e.id;
            }
            function ge(e) {
                const { disabled: t = !1, refetch: n, refetchStatus: a, slice: i, userIds: o } = e,
                    s = (0, Z.z)();
                r.useEffect(() => {
                    s.scribe({ component: "accounts", action: "impression" });
                }, [s]);
                const c = r.useCallback((e) => (o ? r.createElement(se, { adminId: o.adminId, currentUserId: o.currentUserId, disabled: t, item: e, refetch: n, refetchStatus: a }) : null), [o, n, a, t]),
                    d = T()(me, i).items_results;
                return d ? r.createElement(l.Z, { style: fe.wrapper }, d.length ? r.createElement(x.Z, { assumedItemHeight: 64, cacheKey: "accountList", footer: null, identityFunction: pe, items: d, renderer: c, withoutHeadroom: !0 }) : r.createElement(P.Z, (0, _.Z)({}, t ? null : ue, { header: de }))) : null;
            }
            const be = r.memo(ge),
                fe = d.default.create((e) => ({ wrapper: { paddingBottom: e.spaces.space64 } }));
            var Ee = n(897571),
                he = n(315758),
                ye = n(218257),
                Ze = n(550496),
                ve = n(507364),
                Ie = n(756716),
                Ce = n(358981),
                _e = n(668214),
                ke = n(390387),
                we = n(689212);
            const Te = (0, _e.Z)()
                    .propsFromState(() => ({ currentTab: we.XI, verifiedConfigFetchStatus: we.am, isDelegateStore: ke.Lz }))
                    .propsFromActions(() => ({ updateCurrentTab: we.rF }))
                    .withAnalytics({ page: "verified-organizations", section: "affiliates" }),
                Pe = a.Z,
                xe = p().g2c0144a,
                Se = p().c0d13570,
                Ae = p().d1a35ec6,
                Me = p().b437adda,
                Fe = p().b8e1d524,
                De = p().f1f6c88b,
                ze = p().b02156b8,
                Ne = p().gd67d29b,
                Be = p().daf646e6,
                $e = p().i3895c32,
                Ue = p().i5f8b628,
                Oe = p().e9e663ac,
                { origin: Le } = y.ZP.get(),
                He = `${Le}/i/verified`,
                je = { link: r.createElement(i.ZP, { link: (0, o.ju)("https://legal.x.com/purchaser-terms.html"), withInteractiveStyling: !1 }) };
            function Ve({ currentTab: e, isDelegateStore: t, location: n, updateCurrentTab: a, verifiedConfigFetchStatus: o }) {
                const d = (0, Z.z)(),
                    { featureSwitches: u, userClaims: m } = (0, f.QZ)(),
                    { hasVerifiedOrgFeature: g, isInGracePeriod: E, isOrgReviewInProgress: y } = (0, h.ZP)(),
                    _ = m.isFreeVerifiedOrg(),
                    k = y(),
                    w = E(),
                    T = g("businessAdminPortalReadOnly"),
                    P = g("BusinessPreapprovalAdminPortalAccess"),
                    x = u.isTrue("responsive_web_verified_organizations_free_upgrade_promo_enabled"),
                    S = w || k || T || P;
                r.useEffect(() => {
                    d.scribe({ action: "impression" });
                }, [d]),
                    window.history.replaceState({}, document.title);
                const A = r.useCallback(
                        (e) => {
                            a({ currentTab: e });
                        },
                        [a],
                    ),
                    { affiliateLimit: M } = (0, Ze.kC)(),
                    { data: F, refetch: D, refetchStatus: z } = (0, C.A)(Pe, { count: M }),
                    N = r.useCallback(() => {
                        d.scribe({ element: "add-accounts", action: "click" });
                    }, [d]),
                    B = F.viewer.user_results.result,
                    $ = r.useMemo(() => ({ adminId: B.legacy?.id_str || "", currentUserId: B.__id || "" }), [B]);
                if ("User" !== B.__typename) return null;
                const U = B.business_team_affiliates;
                if (!U) return null;
                const O = B.verified_organization_invitations;
                if (!O) return null;
                if (o !== I.ZP.LOADED) return null;
                const L = O.items.length,
                    H = U.items_results.length,
                    j = (t) => !L || e === t,
                    V = r.createElement(p().I18NFormatMessage, { $i18n: "j0a20bf1" }, r.cloneElement(je.link, null, p().c3ddd22c)),
                    G = r.createElement(p().I18NFormatMessage, { $i18n: "j1b50481" }, r.cloneElement(je.link, null, p().c9729d8a)),
                    R = m.isGovVerifiedOrg() ? G : V,
                    W = [{ key: v.p.ACCOUNTS, label: H ? De({ count: H }) : Fe, isActive: () => j(v.p.ACCOUNTS), to: n.pathname, onClick: () => A(v.p.ACCOUNTS) }];
                return L ? W.push({ key: v.p.INVITATIONS, label: L ? Ne({ count: L }) : ze, isActive: () => j(v.p.INVITATIONS), to: n.pathname, onClick: () => A(v.p.INVITATIONS) }) : e === v.p.INVITATIONS && A(v.p.ACCOUNTS), r.createElement(r.Fragment, null, r.createElement(l.Z, { style: Ge.header }, r.createElement(Ie.Z, null), r.createElement(i.ZP, { size: "title2", weight: "bold" }, Se), r.createElement(l.Z, { style: Ge.buttonContainer }, r.createElement(he.Z, { affiliatesCount: H, invitesCount: L }), !_ || t || x ? null : r.createElement(ye.Z, { buttonLabel: Me, buttonType: "brandOutlined", cancelUrl: He, scribeElement: "vo-upgrade", shouldShowToast: !0, successUrl: He, tierInterval: "Month" }), r.createElement(s.ZP, { disabled: S, link: S ? void 0 : "/i/verified/invite", onClick: N, size: "medium", type: "brandFilled" }, Ae)), r.createElement(c.Z.Primary, { headline: Be, style: Ge.calloutSpace, text: R }), k ? r.createElement(c.Z.Danger, { headline: $e, style: Ge.calloutSpace, text: Ue }) : null, w ? r.createElement(c.Z.Danger, { headline: Oe, style: Ge.calloutSpace, text: "To avoid your account losing verification, update your payment details. You will not be able to access features until payment is made." }) : null, r.createElement(Q.Z, null)), r.createElement(b.Z, { links: W, style: Ge.tabs }), e === v.p.ACCOUNTS && U ? r.createElement(be, { disabled: S, refetch: D, refetchStatus: z, slice: U, userIds: $ }) : null, e === v.p.INVITATIONS && O ? r.createElement(ve.Z, { disabled: S, slice: O, userIds: $ }) : null);
            }
            const Ge = d.default.create((e) => ({ errorCallout: { margin: 16 }, buttonContainer: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center", justifyContent: "center" }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", paddingHorizontal: 16, marginTop: e.spaces.space16 }, tabs: { marginTop: e.spaces.space4 }, calloutSpace: { marginTop: e.spaces.space16 }, loadingIndicator: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space4 } })),
                Re = { context: "AffiliateList" };
            const We = r.memo(
                Te(function (e) {
                    return r.createElement(E.H, { errorConfig: Re, suspenseFallback: r.createElement(u.J, null) }, r.createElement(g.Z, { TabBar: Ce.Z, history: e.history, isFullWidth: !0, primaryContent: r.createElement(Ve, e), rightControl: r.createElement(Ee.Z, null), sidebarContent: null, title: xe, withTweetButton: !1 }));
                }),
            );
        },
        545744: (e, t, n) => {
            n.r(t), n.d(t, { default: () => g });
            var a = n(202784),
                r = n(325686),
                l = n(107267),
                i = n(386802),
                o = n(731708),
                s = n(154003),
                c = n(392237),
                d = n(111677),
                u = n.n(d),
                m = n(980407);
            const p = c.default.create((e) => ({ container: { display: "flex", flexDirection: "column", flexGrow: 1, alignItems: "left", paddingTop: e.spaces.space48, paddingBottom: e.spaces.space48, paddingHorizontal: e.spaces.space72 }, twitterIcon: { color: e.colors.brandColor, height: "2em" }, paddingMobile: { paddingHorizontal: e.spaces.space28 }, mainSubtext: { marginTop: e.spaces.space20 }, okButton: { paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, marginTop: e.spaces.space32, width: "100%" } })),
                g = () => {
                    const e = (0, l.useHistory)(),
                        { isModal: t } = a.useContext(i.Z),
                        n = u().eb043b72,
                        c = u().a9ac4602,
                        d = u().a219e218;
                    return a.createElement(
                        m.Z,
                        { backButtonType: "close", history: e },
                        a.createElement(
                            r.Z,
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
                r = (n(571372), n(325686)),
                l = n(107267),
                i = n(731708),
                o = n(688715),
                s = n(386802),
                c = n(855488),
                d = n(466818),
                u = n(96083),
                m = n(392237),
                p = n(111677),
                g = n.n(p),
                b = n(187669),
                f = n(980407),
                E = n(736063),
                h = n(952793),
                y = n(782826),
                Z = n(359870),
                v = n(725405),
                I = n(218257),
                C = n(762522),
                _ = n(550496),
                k = n(668214),
                w = n(919022);
            const T = (0, k.Z)().propsFromState(() => ({ loggedInUser: w.ZP.selectLoggedInUser })),
                P = g().ee86d380,
                x = g().dece6c60,
                S = g().b9c9ccca,
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
                    const t = (0, l.useHistory)(),
                        { isModal: n } = a.useContext(s.Z),
                        o = (0, h.hC)("responsive_web_verified_organizations_invoice_enabled"),
                        m = (0, y.G3)(t.location),
                        p = (0, v.Z)();
                    (0, b.q)(() => {
                        p.scribe({ action: "impression", page: "verified-organizations", section: "application", component: "sign-up" });
                    });
                    const E = (0, l.useLocation)().state,
                        k = E?.tier,
                        w = E?.interval || "Month",
                        T = "Basic" === k,
                        [B, U] = a.useState(!1),
                        [O, H] = a.useState(""),
                        [j, V] = a.useState(""),
                        [G, R] = a.useState(""),
                        [W, J] = a.useState(""),
                        [Y, Q] = a.useState(""),
                        [K, q] = a.useState(T ? "BusinessBasic" : "Business"),
                        [X, ee] = a.useState(),
                        [te, ne] = a.useState(!1),
                        ae = e?.screen_name ? `@${e.screen_name}` : "",
                        [re, le] = (0, _.HF)(),
                        ie = a.useCallback(() => {
                            U(!0), ee(void 0);
                            const e = T ? "BusinessBasic" === K : "Business" === K || "Government" === K,
                                t = (0, Z.Z)(G);
                            return new Promise((n, a) => {
                                if (!O || !j || t || !Y || !K || !e) return J(t), a(new Error("Invalid application form entries"));
                                re({ organizationName: O, applicantName: j, organizationEmailAddress: G, organizationWebsite: Y, organizationType: K })
                                    .then(() => {
                                        if (!o) return n();
                                        const e = `?interval=${encodeURIComponent(w)}&referring_page=${m.length > 0 ? m : "vo_application_page"}`;
                                        window.location.href = "/i/verified-welcome" + e;
                                    })
                                    .catch(() => (ee(C.F.createApplication), a(new Error("Error creating application"))));
                            });
                        }, [T, K, G, O, j, Y, re, o, w, m]);
                    return a.createElement(f.Z, { backButtonType: "back", history: t }, a.createElement(r.Z, { style: [L.container, n ? void 0 : L.paddingMobile] }, a.createElement(i.ZP, { size: "title2", weight: "heavy" }, P), a.createElement(i.ZP, { color: "gray700", style: L.mainSubtext }, a.createElement(g().I18NFormatMessage, { $i18n: "g42a8521" }, a.cloneElement(N.handle, null, g().f14d7866({ screenName: ae })), a.cloneElement(N.link, null, g().e63bf39d))), a.createElement(c.Z, { invalid: B && !O, label: x, name: "typedOrgName", onChange: (e) => H(e.currentTarget.value), style: L.applicationInput, testID: "orgNameField", value: O }), a.createElement(c.Z, { invalid: B && !Y, label: M, name: "typedOrgWebsite", onChange: (e) => Q(e.currentTarget.value), style: L.applicationInput, testID: "websiteField", value: Y }), T ? null : a.createElement(d.ZP, { hasError: B && !K, label: F, onChange: q, options: z, style: L.orgTypeSelector, testID: "orgTypeField", value: K, withEmptyOption: !0 }), a.createElement(c.Z, { invalid: B && !j, label: S, name: "typedFullName", onChange: (e) => V(e.currentTarget.value), style: L.applicationInput, testID: "fullNameField", value: j }), a.createElement(c.Z, { errorText: W, invalid: B && (!G || !!W), label: A, name: "typedOrgEmailAddress", onChange: (e) => R(e.currentTarget.value), style: L.applicationInput, testID: "emailField", value: G }), a.createElement(r.Z, { style: L.footer }, a.createElement(C.Z, { error: X }), a.createElement(r.Z, { style: L.row }, a.createElement(u.Z, { checked: te, onChange: ne }), a.createElement(i.ZP, { color: "gray700" }, a.createElement(g().I18NFormatMessage, { $i18n: "aacfbecd" }, a.cloneElement($.link, null, g().f09630ff)))), a.createElement(I.Z, { buttonLabel: D, disabled: le || !te, onClick: ie, shouldShowErrorCallout: !0, tierInterval: w }))));
                },
                O = { context: "WelcomeScreen" };
            const L = m.default.create((e) => ({ container: { display: "flex", flexDirection: "column", flexGrow: 1, paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20, paddingHorizontal: e.spaces.space72 }, paddingMobile: { paddingHorizontal: e.spaces.space28 }, footer: { marginVertical: e.spaces.space16, gap: e.spaces.space16, marginHorizontal: "auto", maxWidth: "460px" }, twitterIcon: { color: e.colors.brandColor, height: "2em" }, mainSubtext: { marginTop: e.spaces.space16, marginBottom: e.spaces.space8 }, applicationInput: { paddingHorizontal: 0, paddingVertical: 5 }, orgTypeSelector: { marginTop: 5 }, row: { flexDirection: "row", gap: e.spaces.space16 }, orgHeading: { marginTop: e.spaces.space8, marginBottom: e.spaces.space12 }, adminHeading: { marginTop: e.spaces.space16, marginBottom: e.spaces.space12 } })),
                H = T(function (e) {
                    return a.createElement(E.H, { errorConfig: O }, a.createElement(U, e));
                }),
                j = (e) => a.createElement(H, e),
                V = j;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-964cff98.4f2f687a.js.map
