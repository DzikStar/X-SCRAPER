"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-964cff98"],
    {
        336629: (e, t, n) => {
            n.d(t, { T: () => i });
            var a = n(97882),
                r = n(685731);
            const i = ({ annualPriceMonthly: e, includeTax: t, monthlyPriceAnnual: n, percentOff: i, price: l }) => {
                const o = (0, r.aU)(l, t, i),
                    s = e ? o / 12 : n ? 12 * o : o;
                return (0, a.x)({ amount: s, currencyCode: l?.currency_code.toUpperCase(), removeTrailingZeros: !0 });
            };
        },
        862695: (e, t, n) => {
            n.d(t, { V: () => h, f: () => E });
            var a = n(202784),
                r = n(325686),
                i = n(731708),
                l = n(392237),
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
                E = ({ activeDiscountInfo: e, discountInfo: t, formattedPrice: n, includeTax: a, isFreeTrial: r, isTierSwitching: i, price: l, selectedInterval: o, shouldRemoveExtraStep: s, withAnnualPriceMonthly: d }) => (r ? ("Month" === o ? m({ price: n }) : p({ price: n })) : t || e ? h({ formattedPrice: n, selectedInterval: o, includeDiscountedPrice: "Year" === o && d, discountedFormattedPrice: (0, c.T)({ price: l, includeTax: a, percentOff: i ? e?.promotion_metadata?.percent_off : t?.metadata.percent_off, annualPriceMonthly: !1 }), duration: i ? e?.promotion_metadata?.duration_in_interval : t?.metadata.duration_in_interval, includeThenLabel: !1 }) : d && "Year" === o && s ? f({ price: n }) : "Month" === o ? g : b),
                h = ({ discountedFormattedPrice: e, duration: t, formattedPrice: n, includeDiscountedPrice: l, includeThenLabel: o, selectedInterval: c }) => {
                    let g;
                    return (g = "Month" === c ? (l ? a.createElement(s().I18NFormatMessage, { $i18n: "a629c16f", discountedPrice: e ?? "", duration: t ?? "" }, a.createElement(i.ZP, { style: { textDecorationLine: "line-through" } }, s().df3ed1c8({ standardPrice: n }))) : d({ duration: t, standardPrice: n })) : l ? a.createElement(s().I18NFormatMessage, { $i18n: "c142e70f", discountedPrice: e ?? "", duration: t ?? "" }, a.createElement(i.ZP, { style: { textDecorationLine: "line-through" } }, s().g261b098({ standardPrice: n }))) : u({ duration: t, standardPrice: n })), o && (g = a.createElement(r.Z, null, a.createElement(i.ZP, { style: y.marginBottom }, g), a.createElement(i.ZP, null, "Year" === c ? p({ price: n }) : m({ price: n })))), g;
                },
                y = l.default.create((e) => ({ marginBottom: { marginBottom: e.spaces.space8 } }));
        },
        955010: (e, t, n) => {
            n.d(t, { B: () => u });
            var a = n(265433),
                r = n(202784),
                i = (n(585488), n(351743)),
                l = n.n(i),
                o = n(468811),
                s = n.n(o),
                c = n(71620);
            const d = a.Z;
            function u(e, t, n) {
                const [a] = l()(d),
                    i = (0, c.po)();
                return r.useCallback(
                    (r, l) => {
                        a({
                            variables: { module_id: l, enabled_for_display: r },
                            optimisticResponse: { user_update_module_visibility: { user_results: { id: s().v4(), result: { __typename: "User", id: e, editable_profilemodules: { modules_for_display: r ? [{ module_id: l }] : [] } } } } },
                            onError: (e) => {
                                i(e);
                            },
                            onCompleted: () => {
                                t && n && (t(!1), n());
                            },
                        });
                    },
                    [i, n, t, e, a],
                );
            }
        },
        264922: (e, t, n) => {
            n.d(t, { Z: () => v });
            var a = n(202784),
                r = n(108362),
                i = n(420412),
                l = n(154003),
                o = n(392237),
                s = n(111677),
                c = n.n(s),
                d = n(290402),
                u = n(496364),
                m = n(71620),
                p = n(668214),
                g = n(38562),
                b = n(919022);
            const f = (0, p.Z)()
                    .propsFromState(() => ({ fetchStatus: g.UD, viewerUser: b.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ fetchSettingsIfNeeded: g.Sb, createLocalApiErrorHandler: (0, m.zr)("SETTINGS_LOADER") })),
                E = "settingsDetailSave",
                h = c().i2209530;
            class y extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderWithFetchSettings = () => {
                            const { fetchStatus: e } = this.props;
                            return a.createElement(d.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render });
                        }),
                        (this._render = () => {
                            const { children: e, onSubmit: t, submitDisabled: n, submitLabel: o, submitType: s, withMarginBottom: c } = this.props;
                            return a.createElement(r.Z, { style: [Z.contentRoot, c && Z.withMarginBottom] }, e, t ? a.createElement(a.Fragment, null, a.createElement(i.Z, null), a.createElement(r.Z, { style: Z.buttonContainer }, a.createElement(l.ZP, { disabled: n, onPress: t, style: Z.button, testID: E, type: s }, o))) : null);
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchSettingsIfNeeded: t } = this.props;
                            t().catch(e());
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                getBackLocation() {
                    const { location: e, viewerUser: t } = this.props,
                        n = t ? "/settings" : "/settings/account/personalization";
                    return e && e.pathname === n ? "/" : n;
                }
                render() {
                    const { onBackClick: e, rightControl: t, screenType: n, secondaryBar: r, title: i, viewerUser: l, withBottomBorder: o } = this.props,
                        s = this.getBackLocation(),
                        c = l ? `@${l.screen_name}` : void 0;
                    return a.createElement(u.Z, { backLocation: s, onBackClick: e, rightControl: t, screenType: n, secondaryBar: r, showSubtitleOnWideDetail: !1, subtitle: c, title: i, withBottomBorder: o }, l ? this._renderWithFetchSettings() : this._render());
                }
            }
            y.defaultProps = { submitLabel: h, submitType: "brandFilled", withMarginBottom: !0 };
            const Z = o.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start" }, buttonContainer: { backgroundColor: e.colors.cellBackground, flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingVertical: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.spaces.space12 }, withMarginBottom: { marginBottom: `calc(${e.spaces.space64} + ${o.default.iPhoneOffsetBottom})` } })),
                v = f(y);
        },
        499833: (e, t, n) => {
            n.r(t), n.d(t, { default: () => S });
            var a = n(807896),
                r = (n(136728), n(719681)),
                i = n(934562),
                l = n(202784),
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
            const v = i.Z,
                I = r.Z,
                C = m().g2c0144a,
                _ = m().b12424fc,
                k = m().ca8df1e2,
                w = (e) => {
                    const { history: t } = e,
                        n = (0, f.p)(I, {}),
                        { basePath: r, isVerifiedOrg: i } = (0, h.Z)(),
                        o = n?.viewer?.user_results?.result?.rest_id || "",
                        s = n?.viewer?.user_results?.result?.recruiting_organization_results?.result?.__id;
                    return o && s ? (!i && (n?.viewer?.user_results?.result?.recruiting_organization_results?.result?.job_count?.total_count || 0) >= 3 && t.push(r), l.createElement(T, (0, a.Z)({}, e, { basePath: r, isVerifiedOrg: i, orgQueryId: s, viewerUserId: o }))) : null;
                },
                T = (e) => {
                    const { basePath: t, history: n, isVerifiedOrg: a, orgQueryId: r, viewerUserId: i } = e,
                        [o, c] = d()(v),
                        u = l.useCallback(
                            (e) => {
                                "number" == typeof e?.salary_min && e.salary_min < 0 && (e.salary_min = null),
                                    "number" == typeof e?.salary_max && e.salary_max < 0 && (e.salary_max = null),
                                    o({
                                        variables: { userId: i, ...e },
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
                            [o, i, r, n, t],
                        ),
                        m = l.useCallback(() => {
                            n.push(t);
                        }, [t, n]);
                    return l.createElement(g.Z, { TabBar: a ? Z.Z : void 0, history: n, isFullWidth: !0, primaryContent: l.createElement(y.Z, { description: k, formTitle: _, isMutationInFlight: c, onCancel: m, onSubmit: u }), sidebarContent: null, title: a ? C : null, withTweetButton: !1 });
                },
                P = { context: "AddJobList" },
                x = (e) => ((0, p.ph)(), l.createElement(b.H, { errorConfig: P }, l.createElement(w, e))),
                S = l.memo(x);
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
                i = n(325686),
                l = n(10622),
                o = n.n(l),
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
                B = E().fe66e4a8,
                z = E().b3ca0108,
                N = a.createElement(m.ZP, { link: P.accountSelect });
            function $(e) {
                const t = a.createElement(i.Z, { style: U.section }, a.createElement(m.ZP, { size: "headline2", style: U.howToHeadline, weight: "bold" }, x), a.createElement(m.ZP, null, S), a.createElement(m.ZP, null, a.createElement("ol", { style: U.list }, a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "a5f1d09f" }, a.cloneElement(N, null, E().g3754d57))), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "e3a90717" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "b743c7b7" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "d5128627" }))))),
                    n = a.createElement(i.Z, { style: U.section }, a.createElement(m.ZP, { size: "headline2", style: U.howToHeadline, weight: "bold" }, M), a.createElement(m.ZP, null, a.createElement("ul", { style: U.list }, a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "a5f1d09f" }, a.cloneElement(N, null, E().g3754d57))), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "ecd5d325" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "b743c7b7" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "d523367f" }))))),
                    r = a.createElement(i.Z, { style: U.section }, a.createElement(m.ZP, { size: "headline2", style: U.howToHeadline, weight: "bold" }, A), a.createElement(m.ZP, null, a.createElement("ul", { style: U.list }, a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "c10a3649" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "fab86f55" }, a.cloneElement(N, null, E().i615ad63))), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "b743c7b7" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "h9fe1a6d" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "d523367f" }))))),
                    l = a.createElement(i.Z, { style: U.section }, a.createElement(m.ZP, { size: "headline2", style: U.howToHeadline, weight: "bold" }, F), a.createElement(m.ZP, null, a.createElement("ul", { style: U.list }, a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "a4087047" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "ca18299b" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "b83bc371" }, a.cloneElement(N, null, E().a3ba48b9))), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "b743c7b7" })), a.createElement("li", null, a.createElement(E().I18NFormatMessage, { $i18n: "d523367f" }))))),
                    o = a.createElement(i.Z, { style: U.adsHowToCard }, a.createElement(w.Z, { description: D, linkLabel: B, onClick: () => window.open(P.home, "_blank"), secondaryDescription: z }));
                return a.createElement(i.Z, { style: U.howToSection }, o, t, n, r, l);
            }
            const U = b.default.create((e) => ({ howToSection: { marginBottom: e.spaces.space16 }, section: { marginTop: e.spaces.space40 }, howToHeadline: { marginBottom: e.spaces.space8 }, adsHowToCard: { width: "50%", marginTop: e.spaces.space20 }, list: { marginBottom: 0 } })),
                L = a.memo($);
            var O = n(336678);
            const H = { FullAccessGov: { Year: "", Month: "" }, FullAccess: { Year: "$10k", Month: "$1k" }, Basic: { Year: "$2k", Month: "$200" } },
                V = E().g2c0144a,
                j = E().a4cf866e,
                R = E().c5af3e12,
                G = E().e18d6fd6,
                W = E().if435d1a,
                J = a.createElement(m.ZP, { link: P.home }),
                Y = (e) => {
                    const { history: t, location: n } = e,
                        r = (0, p.Zz)(),
                        l = u()(),
                        s = c()(O.Z, {}),
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
                            o()(l, O.Z, {})
                                .toPromise()
                                .then((e) => {
                                    w(y(e));
                                })
                                .catch(() => {
                                    t.replace(n.pathname, { verifiedOrgAdminError: I.F.adsPromoActivation });
                                });
                        }, [l, y, t, n]),
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
                            i.Z,
                            { style: [Q.header, r ? Q.marginBottom64 : null] },
                            a.createElement(_.Z, null),
                            a.createElement(m.ZP, { size: "title2", weight: "bold" }, j),
                            a.createElement(m.ZP, { style: Q.pageDescription, testID: "pageDescription" }, x),
                            a.createElement(m.ZP, { size: "subtext3", style: Q.pageSubtext, testID: "pageSubtext" }, "*", R),
                            a.createElement(
                                i.Z,
                                { style: Q.section },
                                a.createElement(m.ZP, { size: "headline2", style: Q.creditsSubtitle, testID: "creditsSubtitle", weight: "bold" }, G),
                                a.createElement(m.ZP, { testID: "creditsDescription" }, a.createElement(E().I18NFormatMessage, { $i18n: "i3781135" }, a.cloneElement(J, null, E().af6704d7))),
                                a.createElement(I.Z, null),
                                T && a.createElement(g.Z.Primary, { headline: W, style: Q.noCouponsLabel, withIcon: !1 }),
                                a.createElement(
                                    i.Z,
                                    { style: Q.couponsContainer },
                                    k.map((e, t) => a.createElement(v.Z, { item: e, key: t, onSuccessfulActivation: Z })),
                                ),
                            ),
                            a.createElement(L, null),
                        ),
                        a.createElement(i.Z, { style: [Q.stickySection, r ? Q.bottomMobile : Q.bottomDesktop] }, a.createElement(m.ZP, null, a.createElement(E().I18NFormatMessage, { $i18n: "ff1cc953" }, a.createElement(m.ZP, { link: { pathname: "mailto:verified-premium-support@x.com", external: !0 } }, E().b293c6b4)))),
                    );
                },
                Q = b.default.create((e) => ({ header: { flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", paddingHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 }, marginBottom64: { marginBottom: e.spaces.space64 }, pageDescription: { marginTop: e.spaces.space16 }, pageSubtext: { marginTop: e.spaces.space24 }, section: { width: "100%", marginTop: e.spaces.space40 }, creditsSubtitle: { marginBottom: e.spaces.space8 }, couponsContainer: { width: "100%", flexDirection: "row", gap: e.spaces.space24, marginTop: e.spaces.space16, paddingStart: e.spaces.space2, flexWrap: "wrap" }, stickySection: { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", position: "sticky", start: 0, bottom: 0, end: 0, width: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space16, borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small }, bottomDesktop: { bottom: 0 }, bottomMobile: { bottom: h.h$ }, noCouponsLabel: { marginTop: e.spaces.space16 } })),
                q = (e) => a.createElement(Z.B, null, a.createElement(y.Z, { TabBar: k.Z, history: e.history, isFullWidth: !0, primaryContent: a.createElement(Y, e), sidebarContent: null, title: V, withTweetButton: !1 }));
            var K = n(807896),
                X = n(95186),
                ee = (n(585488), n(736063)),
                te = n(693510),
                ne = n(897571),
                ae = n(948927),
                re = n(630887),
                ie = (n(278945), n(530732)),
                le = n(154003),
                oe = n(868634),
                se = n(593385),
                ce = n(656474);
            const de = E().c9fad534,
                ue = E().a211b11e,
                me = () => a.createElement(g.Z.Primary, { headline: de, text: ue, withIcon: !0 }),
                pe = ({ promotions: e, showPromotionModal: t }) => {
                    const n = a.useMemo(() => e.toSorted(be), [e]);
                    return a.createElement(
                        i.Z,
                        null,
                        n.map((e) => a.createElement(Ee, { key: e.__id, promotion: e, showPromotionModal: t })),
                    );
                },
                ge = { Scheduled: 1, Redeemable: 2, Active: 3, Expired: 4 },
                be = (e, t) => {
                    const n = ge[e.isCouponDone ? "Expired" : e.status],
                        a = ge[t.isCouponDone ? "Expired" : t.status],
                        r = e.validUntil ?? e.expires,
                        i = r ? r.getTime() : 0,
                        l = t.validUntil ?? t.expires,
                        o = l ? l.getTime() : 0,
                        s = "Expired" === e.status ? -1 : 1;
                    return n - a || s * (i - o);
                },
                fe = E().gd7d051c,
                Ee = ({ promotion: e, showPromotionModal: t }) => {
                    const n = Ze(e),
                        r = Te(e),
                        l = Pe(e),
                        o = "Redeemable" === e.status,
                        s = a.useCallback(() => t(e), [e, t]);
                    return a.createElement(ie.Z, { role: "adscredititem", style: Ue.adsCreditItem }, a.createElement(i.Z, { style: Ue.adsCreditItemContent }, a.createElement(i.Z, { style: Ue.labeledAction }, a.createElement(m.ZP, { size: "body", weight: "bold" }, n), l), r ? a.createElement(m.ZP, { color: "gray700", size: "subtext1", style: Ue.subText, weight: "normal" }, r) : null), o ? a.createElement(le.ZP, { onClick: s }, fe) : null);
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
                        i = e.forAdsAccountId;
                    if (e.isCouponDone) return ve({ accountId: i });
                    switch (e.status) {
                        case "Expired":
                            return t && r ? (i ? Ie({ when: (0, ce.B)(r), accountId: i }) : Ce({ when: (0, ce.B)(r) })) : null;
                        case "Redeemable":
                        case "Active":
                            return t && r ? (i ? _e({ when: (0, ce.B)(r), accountId: i }) : ke({ when: (0, ce.B)(r) })) : null;
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
                            return a.createElement(Be, null);
                        case "Redeemable":
                            return a.createElement(ze, null);
                        case "Scheduled":
                            return a.createElement(Ne, null);
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
                Be = () => a.createElement(oe.ZP, { background: "green500" }, Se),
                ze = () => a.createElement(oe.ZP, { background: "blue500" }, Ae),
                Ne = () => a.createElement(oe.ZP, { background: "orange500" }, Me),
                $e = () => a.createElement(oe.ZP, { background: "gray700" }, Fe),
                Ue = b.default.create((e) => ({ adsCreditItem: { cursor: "pointer", flexDirection: "row", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, width: "100%" }, adsCreditItemContent: { flexShrink: 1, flexGrow: 1 }, labeledAction: { flexDirection: "row", gap: e.spaces.space8 }, subText: { marginTop: e.spaces.space4 } })),
                Le = ({ user: e }) => {
                    const [t, n] = a.useState(),
                        r = a.useCallback(() => n(void 0), [n]),
                        l = (0, ce.C)(e);
                    return a.createElement(i.Z, null, l.length > 0 ? a.createElement(pe, { promotions: l, showPromotionModal: n }) : a.createElement(me, null), t ? a.createElement(se.Z, { coupon: t, onDismiss: r }) : null);
                };
            var Oe = n(24410),
                He = n(277660),
                Ve = n.n(He);
            const je = Oe.Z,
                Re = E().e016ad32,
                Ge = E().d7ab194e,
                We = ({ user: e }) =>
                    ((e) => {
                        const { web_tier_switch_progress: t } = e,
                            n = t?.status;
                        return "Pending" === n;
                    })(e)
                        ? a.createElement(i.Z, { style: Je.callouts }, a.createElement(g.Z.Attention, { headline: Re, text: Ge, withIcon: !0 }))
                        : null,
                Je = b.default.create((e) => ({ callouts: {} })),
                Ye = ({ user: e }) => a.createElement(We, { user: Ve()(je, e) }),
                Qe = ({ children: e }) => a.createElement(i.Z, { style: Ke.group }, e),
                qe = ({ children: e, intro: t, title: n }) => a.createElement(i.Z, { style: Ke.section }, n ? a.createElement(m.ZP, { size: "headline1", style: Ke.title, weight: "bold" }, n) : null, t ? a.createElement(m.ZP, { style: Ke.intro }, t) : null, e),
                Ke = b.default.create((e) => ({ group: { gap: e.spaces.space32 }, section: {}, title: { marginBottom: e.spaces.space8 }, intro: {} }));
            n(571372);
            var Xe = n(716980),
                et = n(13720),
                tt = n(108837),
                nt = n(143670),
                at = n(293723),
                rt = n(263272),
                it = n(913973),
                lt = n(390587),
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
                    return a.createElement(st.Z, { actionType: "primaryFilled", graphicDisplayMode: "none", headline: At, onAction: t, onClose: t, role: "dialog", subtext: Mt({ adAccountId: n }), withPassthroughEvents: !0 }, a.createElement(ct.Z, null, a.createElement(le.ZP, { size: "medium", type: "primaryFilled" }, Ft)));
                },
                Bt = Xe.Z,
                zt = (e) => {
                    const t = Ve()(Bt, e);
                    return t?.recruiting_organization_results?.result;
                },
                Nt = b.default.theme.colors.green600,
                $t = b.default.theme.colors.gray600,
                Ut = ({ advertiserAccounts: e, org: t }) => {
                    const [n, r] = a.useState(),
                        i = (0, re.zK)(),
                        l = [a.useMemo(() => jt(e, r), [e, r]), a.useMemo(() => (i ? Xt(e, t, r) : null), [e, t, i, r])].filter(Boolean);
                    return a.createElement(a.Fragment, null, a.createElement(et.Z, { allowMultipleToggles: !1 }, l), n);
                },
                Lt = (e) => ({ isComplete: !0, task: e }),
                Ot = (e) => ({ isComplete: !1, task: e }),
                Ht = (e, t, n) => {
                    const r = ((e) => e.every((e) => e.isComplete))(n);
                    return a.createElement(tt.Z, { icon: r ? at.default : rt.default, iconColor: r ? Nt : $t, iconSide: "BeforeTitle", key: e, title: t }, ((e) => e.map((e) => e.task))(n));
                },
                Vt = E().g25d851e,
                jt = (e, t) => {
                    const n = e.accounts,
                        a = 0 === n.length ? [Qt()] : n.map((e) => Wt(e, t));
                    return Ht("makeAccountsTask", Vt, a);
                },
                Rt = E().de7fef84,
                Gt = { EligibleHasPaymentMethod: E().ff1321b6, EligibleNeedsPaymentMethod: E().c1205320, IneligibleLastPaymentFailed: E().c0343c0a, IneligibleLockedOut: E().j56e34a4, IneligibleMmsDsoNotSetUp: Rt, IneligiblePreAdvertiserMissingCountryCode: E().gef920f2, IneligiblePreAdvertiserUnsupportedCountry: Rt, IneligibleReviewFailure: Rt, IneligibleUnauthorized: E().b68dd4d8, IneligibleUnsupportedServiceLevel: Rt },
                Wt = (e, t) => {
                    const n = e.eligibility ?? "%other",
                        r = () => {
                            t();
                        },
                        i = () => {
                            t(a.createElement(dt, { account: e, onDismiss: r }));
                        };
                    switch (n) {
                        case "EligibleHasPaymentMethod":
                            return Lt(a.createElement(nt.Z, { Icon: it.default, actionSubText: Gt[n], actionText: qt(e), key: e.id, style: rn.subTaskMenuItem }));
                        case "IneligibleLastPaymentFailed":
                        case "EligibleNeedsPaymentMethod":
                        case "IneligibleLockedOut":
                        case "IneligibleMmsDsoNotSetUp":
                        case "IneligiblePreAdvertiserUnsupportedCountry":
                        case "IneligibleReviewFailure":
                        case "IneligibleUnsupportedServiceLevel":
                        case "IneligiblePreAdvertiserMissingCountryCode":
                        case "IneligibleUnauthorized":
                            return Ot(a.createElement(nt.Z, { Icon: lt.default, actionSubText: Gt[n], actionText: qt(e), key: e.id, onClick: i, style: rn.subTaskMenuItem }));
                        default:
                            throw new Error(`unexpected AdvertiserAccountEligibility: '${n}'`);
                    }
                },
                Jt = E().d637962c,
                Yt = E().dd087ae0,
                Qt = () => Ot(a.createElement(nt.Z, { Icon: lt.default, actionSubText: Yt, actionText: Jt, key: "makeNoAdAccountsSetupTask", link: { pathname: "https://ads.x.com/", external: !0 }, style: rn.subTaskMenuItem })),
                qt = (e) => {
                    if (e && null != e.name) return e && `${e.name} (id: ${e.id})`;
                },
                Kt = E().c67b260c,
                Xt = (e, t, n) => {
                    const a = ((e) => e?.job_count ?? 0)(t),
                        r = [tn(e, n), an(a)];
                    return Ht("makeJobPromotionTask", Kt, r);
                },
                en = { EligibleJobPromotionAvailable: E().i3d7dd02, IneligibleAdsAccountMissing: E().cc8f8516, IneligibleUnauthorized: E().b4f117b8, IneligibleAdsAccountNeedsAttention: E().b7347cf4 },
                tn = (e, t) => {
                    const { jobPromotionAccount: n, jobPromotionEligibility: r } = e,
                        i = () => {
                            t();
                        },
                        l = () => {
                            t(a.createElement(dt, { account: n, onDismiss: i }));
                        };
                    switch (r) {
                        case "EligibleJobPromotionAvailable":
                            return Lt(a.createElement(nt.Z, { Icon: it.default, actionSubText: qt(n), actionText: en[r], key: r, style: rn.subTaskMenuItem }));
                        case "IneligibleAdsAccountMissing":
                        case "IneligibleUnauthorized":
                        case "IneligibleAdsAccountNeedsAttention":
                            return Ot(a.createElement(nt.Z, { Icon: lt.default, actionSubText: qt(n), actionText: en[r], key: r, onClick: l, style: rn.subTaskMenuItem }));
                        default:
                            throw new Error(`unexpected JobPromotionEligibility: '${r}'`);
                    }
                },
                nn = E().h7d03a2a,
                an = (e) => (e > 0 ? Lt(a.createElement(nt.Z, { Icon: it.default, actionText: a.createElement(E().I18NFormatMessage, { $i18n: "b17ac597" }, a.createElement(ot.default, null)), key: "makePostJobsSetupTask", link: "/i/verified/jobs", style: rn.subTaskMenuItem })) : Ot(a.createElement(nt.Z, { Icon: lt.default, actionSubText: a.createElement(E().I18NFormatMessage, { $i18n: "ga44a2f9" }, a.createElement(ot.default, null)), actionText: nn, key: "makePostJobsSetupTask", link: "/i/verified/jobs", style: rn.subTaskMenuItem }))),
                rn = b.default.create((e) => ({ subTaskMenuItem: { marginStart: e.spaces.space16 } })),
                ln = ({ user: e }) => a.createElement(Ut, { advertiserAccounts: ae.kb(e), org: zt(e) });
            var on = n(481326);
            const sn = b.default.create((e) => ({ stickySection: { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", position: "sticky", start: 0, bottom: 0, end: 0, width: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space16, borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small }, bottomDesktop: { bottom: 0 }, bottomMobile: { bottom: h.h$ }, link: { color: e.colors.link } })),
                cn = () => {
                    const e = (0, p.Zz)(),
                        t = (0, r.hC)("responsive_web_verified_organizations_intercom_enabled") ? a.createElement(ct.Z, { style: sn.link }) : a.createElement(m.ZP, { link: on.A9 });
                    return a.createElement(i.Z, { style: [sn.stickySection, e ? sn.bottomMobile : sn.bottomDesktop] }, a.createElement(m.ZP, null, a.createElement(E().I18NFormatMessage, { $i18n: "ff1cc953" }, a.cloneElement(t, null, E().b293c6b4))));
                },
                dn = X.Z,
                un = (e) => {
                    const { user: t } = (() => {
                        const { sku: e } = (0, C.Z)(),
                            t = e ?? "",
                            { viewer: n } = c()(dn, { current_product_sku: t });
                        return { user: n.user_results.result };
                    })();
                    return a.createElement(te._3, { user: t }, a.createElement(ae.Em, { user: t }, a.createElement(y.Z, { TabBar: k.Z, history: e.history, isFullWidth: !0, primaryContent: a.createElement(bn, (0, K.Z)({ user: t }, e)), rightControl: a.createElement(ne.Z, null), sidebarContent: null, title: mn, withTweetButton: !1 })));
                },
                mn = E().g2c0144a,
                pn = E().a4cf866e,
                gn = E().ca3c633a,
                bn = ({ user: e }) => {
                    const t = (0, p.Zz)(),
                        n = (0, re.zK)();
                    return a.createElement(a.Fragment, null, a.createElement(i.Z, { style: [fn.screen, t ? fn.mobileBottom64 : null] }, a.createElement(Ye, { user: e }), a.createElement(i.Z, { style: fn.content }, a.createElement(m.ZP, { size: "title2", weight: "bold" }, pn), a.createElement(i.Z, null, a.createElement(m.ZP, null, n ? a.createElement(E().I18NFormatMessage, { $i18n: "ba6442ef" }, a.createElement(m.ZP, { link: { pathname: "https://ads.x.com/" } }, E().ha843c96)) : a.createElement(E().I18NFormatMessage, { $i18n: "e52e0c73" }, a.createElement(m.ZP, { link: { pathname: "https://ads.x.com/" } }, E().dd0f3b08)))), a.createElement(ln, { user: e }), a.createElement(Qe, null, a.createElement(qe, { title: gn }, a.createElement(Le, { user: e }))))), a.createElement(cn, null));
                },
                fn = b.default.create((e) => ({ screen: { flexDirection: "column", paddingHorizontal: e.spaces.space16, gap: e.spaces.space16, marginVertical: e.spaces.space16 }, mobileBottom64: { marginBottom: e.spaces.space64 }, content: { gap: e.spaces.space16 } })),
                En = { context: "AdvertisingScreen" },
                hn = (e) => a.createElement(ee.H, { errorConfig: En }, a.createElement(un, e)),
                yn = (e) => ((0, r.hC)("verified_vo_refreshed_advertising_screen_enabled") ? a.createElement(hn, e) : a.createElement(q, e));
        },
        978789: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(202784),
                r = n(325686),
                i = n(952428),
                l = n(731708),
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
                        g = a.useMemo(() => a.createElement(i.Z, { onClick: m, style: p.selectAllCell }, a.createElement(l.ZP, null, "Select all"), a.createElement(o.Z, { checked: u, onClick: m })), [m, u]),
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
                                  const { name: r, screen_name: i } = e.result?.core || {},
                                      l = e.result?.legacy?.id_str,
                                      { image_url: c } = e.result?.avatar || {},
                                      d = !!n.find((e) => e.result.legacy?.id_str === l),
                                      u = () => b(e, !d);
                                  return r && c && i && l ? a.createElement(s.ZP, { avatarUri: c, decoration: a.createElement(o.Z, { checked: d, onClick: u }), displayMode: "UserCompact", key: `affiliate-filter-${t}`, name: r, onAvatarClick: u, onCellClick: u, onScreenNameClick: u, screenName: i, userId: l, withLink: !1 }) : null;
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
                i = n(325686),
                l = (n(585488), n(731708)),
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
                B = n(107267),
                z = n(157130),
                N = n(529356),
                $ = n(952428),
                U = n(837020),
                L = n(700797),
                O = n(412876),
                H = n(553660),
                V = n(797553),
                j = n(143670),
                R = n(487552);
            const G = p().j3115ce8,
                W = p().d8bb1d84;
            const J = d.default.create((e) => ({ badgePicker: { marginEnd: 10, textAlign: "end" }, dropdownIcon: { marginStart: e.spaces.space4 } })),
                Y = function (e) {
                    const { affiliateType: t, disabled: n, onChange: a } = e,
                        [i, l] = r.useState(!1);
                    function o() {
                        l(!1);
                    }
                    function c(e) {
                        a(e), o();
                    }
                    const d = { User: G, Business: W, GovernmentIndividual: G, GovernmentOrganization: W },
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
                                    l(!0);
                                },
                                style: J.badgePicker,
                                testID: "badgePickerButton",
                                type: "primaryOutlined",
                            },
                            d[t],
                            r.createElement(R.default, { style: J.dropdownIcon }),
                        ),
                        i && r.createElement(V.default, { onDismiss: o }, r.createElement(j.Z, { actionText: G, onClick: () => c(u), testID: `${u}_MenuItem` }), r.createElement(j.Z, { actionText: W, onClick: () => c(m), testID: `${m}_MenuItem` })),
                    );
                };
            var Q = n(762522);
            const q = M.Z,
                K = A.Z,
                X = S.Z,
                ee = p().d30ea6f3,
                te = p().c2dfbb86,
                ne = p().ba047f76,
                ae = p().cfd2f35e,
                re = r.createElement(U.default, { testID: "closeIcon" }),
                ie = { label: p().j26dee0e, preferredHorizontalOrientation: "start" },
                le = p().e30cbdf0,
                oe = ({ adminId: e, currentUserId: t, disabled: n = !1, item: a, refetch: o, refetchStatus: c }) => {
                    const d = (0, Z.z)(),
                        u = (0, B.useHistory)(),
                        [m, p] = r.useState(!1),
                        [g, b] = r.useState(!1),
                        f = T()(q, a),
                        E = f.result,
                        h = E.is_verified_organization || !1,
                        [y, v] = D()(K);
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
                                const a = (0, L.oR)(t, "AffiliatesScreenAffiliatesQuery_business_team_affiliates");
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
                        return r.createElement(i.Z, { style: ce.VOSubscriberPopover }, r.createElement(l.ZP, null, le));
                    }
                    return (
                        "Business" === E.verification?.verified_type ? (w = "Business") : "Government" === E.verification?.verified_type && ("Circle" === E.profile_image_shape ? (w = "GovernmentIndividual") : "Square" === E.profile_image_shape && (w = "GovernmentOrganization")),
                        r.createElement(
                            r.Fragment,
                            null,
                            m ? r.createElement(N.Z, { actionLabel: te, actionType: "primaryFilled", enableMaskForDismiss: !0, graphicDisplayMode: "none", headline: ee({ name: E.core?.screen_name }), onAction: k, onClose: _, onSecondaryAction: _, secondaryActionLabel: ae, secondaryActionType: "primaryOutlined", subtext: ne }) : null,
                            r.createElement(
                                i.Z,
                                { role: "listitem" },
                                r.createElement(
                                    $.Z,
                                    { style: ce.root },
                                    r.createElement(i.Z, { style: ce.user }, r.createElement(O.Z, { size: "xLarge", user: E }), r.createElement(H.Z, { style: ce.userName, user: E, withLink: !0, withStackedLayout: !0 })),
                                    r.createElement(
                                        i.Z,
                                        { style: ce.rightControls },
                                        (function () {
                                            const e = r.createElement(Y, { affiliateType: w, disabled: g || h || n, onChange: P, verifiedType: E.verification?.verified_type || void 0 });
                                            return h ? r.createElement(i.Z, { testID: "voSubscriberPopover" }, r.createElement(z.Z, { enableHover: !0, renderContent: x }, e)) : e;
                                        })(),
                                        r.createElement(s.ZP, { disabled: v || n, hoverLabel: ie, icon: re, onClick: C, testID: "removeButton", type: "destructiveOutlined" }),
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
                const { disabled: t = !1, refetch: n, refetchStatus: a, slice: l, userIds: o } = e,
                    s = (0, Z.z)();
                r.useEffect(() => {
                    s.scribe({ component: "accounts", action: "impression" });
                }, [s]);
                const c = r.useCallback((e) => (o ? r.createElement(se, { adminId: o.adminId, currentUserId: o.currentUserId, disabled: t, item: e, refetch: n, refetchStatus: a }) : null), [o, n, a, t]),
                    d = T()(me, l).items_results;
                return d ? r.createElement(i.Z, { style: fe.wrapper }, d.length ? r.createElement(x.Z, { assumedItemHeight: 64, cacheKey: "accountList", footer: null, identityFunction: pe, items: d, renderer: c, withoutHeadroom: !0 }) : r.createElement(P.Z, (0, _.Z)({}, t ? null : ue, { header: de }))) : null;
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
                Be = p().b02156b8,
                ze = p().gd67d29b,
                Ne = p().daf646e6,
                $e = p().i3895c32,
                Ue = p().i5f8b628,
                Le = p().e9e663ac,
                { origin: Oe } = y.ZP.get(),
                He = `${Oe}/i/verified`,
                Ve = { link: r.createElement(l.ZP, { link: (0, o.ju)("https://legal.x.com/purchaser-terms.html"), withInteractiveStyling: !1 }) };
            function je({ currentTab: e, isDelegateStore: t, location: n, updateCurrentTab: a, verifiedConfigFetchStatus: o }) {
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
                    { data: F, refetch: D, refetchStatus: B } = (0, C.A)(Pe, { count: M }),
                    z = r.useCallback(() => {
                        d.scribe({ element: "add-accounts", action: "click" });
                    }, [d]),
                    N = F.viewer.user_results.result,
                    $ = r.useMemo(() => ({ adminId: N.legacy?.id_str || "", currentUserId: N.__id || "" }), [N]);
                if ("User" !== N.__typename) return null;
                const U = N.business_team_affiliates;
                if (!U) return null;
                const L = N.verified_organization_invitations;
                if (!L) return null;
                if (o !== I.ZP.LOADED) return null;
                const O = L.items.length,
                    H = U.items_results.length,
                    V = (t) => !O || e === t,
                    j = r.createElement(p().I18NFormatMessage, { $i18n: "j0a20bf1" }, r.cloneElement(Ve.link, null, p().c3ddd22c)),
                    R = r.createElement(p().I18NFormatMessage, { $i18n: "j1b50481" }, r.cloneElement(Ve.link, null, p().c9729d8a)),
                    G = m.isGovVerifiedOrg() ? R : j,
                    W = [{ key: v.p.ACCOUNTS, label: H ? De({ count: H }) : Fe, isActive: () => V(v.p.ACCOUNTS), to: n.pathname, onClick: () => A(v.p.ACCOUNTS) }];
                return O ? W.push({ key: v.p.INVITATIONS, label: O ? ze({ count: O }) : Be, isActive: () => V(v.p.INVITATIONS), to: n.pathname, onClick: () => A(v.p.INVITATIONS) }) : e === v.p.INVITATIONS && A(v.p.ACCOUNTS), r.createElement(r.Fragment, null, r.createElement(i.Z, { style: Re.header }, r.createElement(Ie.Z, null), r.createElement(l.ZP, { size: "title2", weight: "bold" }, Se), r.createElement(i.Z, { style: Re.buttonContainer }, r.createElement(he.Z, { affiliatesCount: H, invitesCount: O }), !_ || t || x ? null : r.createElement(ye.Z, { buttonLabel: Me, buttonType: "brandOutlined", cancelUrl: He, scribeElement: "vo-upgrade", shouldShowToast: !0, successUrl: He, tierInterval: "Month" }), r.createElement(s.ZP, { disabled: S, link: S ? void 0 : "/i/verified/invite", onClick: z, size: "medium", type: "brandFilled" }, Ae)), r.createElement(c.Z.Primary, { headline: Ne, style: Re.calloutSpace, text: G }), k ? r.createElement(c.Z.Danger, { headline: $e, style: Re.calloutSpace, text: Ue }) : null, w ? r.createElement(c.Z.Danger, { headline: Le, style: Re.calloutSpace, text: "To avoid your account losing verification, update your payment details. You will not be able to access features until payment is made." }) : null, r.createElement(Q.Z, null)), r.createElement(b.Z, { links: W, style: Re.tabs }), e === v.p.ACCOUNTS && U ? r.createElement(be, { disabled: S, refetch: D, refetchStatus: B, slice: U, userIds: $ }) : null, e === v.p.INVITATIONS && L ? r.createElement(ve.Z, { disabled: S, slice: L, userIds: $ }) : null);
            }
            const Re = d.default.create((e) => ({ errorCallout: { margin: 16 }, buttonContainer: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center", justifyContent: "center" }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", paddingHorizontal: 16, marginTop: e.spaces.space16 }, tabs: { marginTop: e.spaces.space4 }, calloutSpace: { marginTop: e.spaces.space16 }, loadingIndicator: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space4 } })),
                Ge = { context: "AffiliateList" };
            const We = r.memo(
                Te(function (e) {
                    return r.createElement(E.H, { errorConfig: Ge, suspenseFallback: r.createElement(u.J, null) }, r.createElement(g.Z, { TabBar: Ce.Z, history: e.history, isFullWidth: !0, primaryContent: r.createElement(je, e), rightControl: r.createElement(Ee.Z, null), sidebarContent: null, title: xe, withTweetButton: !1 }));
                }),
            );
        },
        545744: (e, t, n) => {
            n.r(t), n.d(t, { default: () => g });
            var a = n(202784),
                r = n(325686),
                i = n(107267),
                l = n(386802),
                o = n(731708),
                s = n(154003),
                c = n(392237),
                d = n(111677),
                u = n.n(d),
                m = n(980407);
            const p = c.default.create((e) => ({ container: { display: "flex", flexDirection: "column", flexGrow: 1, alignItems: "left", paddingTop: e.spaces.space48, paddingBottom: e.spaces.space48, paddingHorizontal: e.spaces.space72 }, twitterIcon: { color: e.colors.brandColor, height: "2em" }, paddingMobile: { paddingHorizontal: e.spaces.space28 }, mainSubtext: { marginTop: e.spaces.space20 }, okButton: { paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, marginTop: e.spaces.space32, width: "100%" } })),
                g = () => {
                    const e = (0, i.useHistory)(),
                        { isModal: t } = a.useContext(l.Z),
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
            n.r(t), n.d(t, { ApplicationScreen: () => V, default: () => j });
            var a = n(202784),
                r = (n(571372), n(325686)),
                i = n(107267),
                l = n(731708),
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
                B = [
                    { label: g().j0e2cfa8, value: "Business", disabled: !1 },
                    { label: g().d2042392, value: "Government", disabled: !1 },
                ],
                z = { link: a.createElement(l.ZP, { link: (0, o.ju)("https://help.x.com/using-twitter/verified-organizations") }), handle: a.createElement(l.ZP, { weight: "bold" }) },
                N = (0, o.ju)("https://legal.x.com/purchaser-terms"),
                $ = { link: a.createElement(l.ZP, { link: N }) },
                U = ({ loggedInUser: e }) => {
                    const t = (0, i.useHistory)(),
                        { isModal: n } = a.useContext(s.Z),
                        o = (0, h.hC)("responsive_web_verified_organizations_invoice_enabled"),
                        m = (0, y.G3)(t.location),
                        p = (0, v.Z)();
                    (0, b.q)(() => {
                        p.scribe({ action: "impression", page: "verified-organizations", section: "application", component: "sign-up" });
                    });
                    const E = (0, i.useLocation)().state,
                        k = E?.tier,
                        w = E?.interval || "Month",
                        T = "Basic" === k,
                        [N, U] = a.useState(!1),
                        [L, H] = a.useState(""),
                        [V, j] = a.useState(""),
                        [R, G] = a.useState(""),
                        [W, J] = a.useState(""),
                        [Y, Q] = a.useState(""),
                        [q, K] = a.useState(T ? "BusinessBasic" : "Business"),
                        [X, ee] = a.useState(),
                        [te, ne] = a.useState(!1),
                        ae = e?.screen_name ? `@${e.screen_name}` : "",
                        [re, ie] = (0, _.HF)(),
                        le = a.useCallback(() => {
                            U(!0), ee(void 0);
                            const e = T ? "BusinessBasic" === q : "Business" === q || "Government" === q,
                                t = (0, Z.Z)(R);
                            return new Promise((n, a) => {
                                if (!L || !V || t || !Y || !q || !e) return J(t), a(new Error("Invalid application form entries"));
                                re({ organizationName: L, applicantName: V, organizationEmailAddress: R, organizationWebsite: Y, organizationType: q })
                                    .then(() => {
                                        if (!o) return n();
                                        const e = `?interval=${encodeURIComponent(w)}&referring_page=${m.length > 0 ? m : "vo_application_page"}`;
                                        window.location.href = "/i/verified-welcome" + e;
                                    })
                                    .catch(() => (ee(C.F.createApplication), a(new Error("Error creating application"))));
                            });
                        }, [T, q, R, L, V, Y, re, o, w, m]);
                    return a.createElement(f.Z, { backButtonType: "back", history: t }, a.createElement(r.Z, { style: [O.container, n ? void 0 : O.paddingMobile] }, a.createElement(l.ZP, { size: "title2", weight: "heavy" }, P), a.createElement(l.ZP, { color: "gray700", style: O.mainSubtext }, a.createElement(g().I18NFormatMessage, { $i18n: "g42a8521" }, a.cloneElement(z.handle, null, g().f14d7866({ screenName: ae })), a.cloneElement(z.link, null, g().e63bf39d))), a.createElement(c.Z, { invalid: N && !L, label: x, name: "typedOrgName", onChange: (e) => H(e.currentTarget.value), style: O.applicationInput, testID: "orgNameField", value: L }), a.createElement(c.Z, { invalid: N && !Y, label: M, name: "typedOrgWebsite", onChange: (e) => Q(e.currentTarget.value), style: O.applicationInput, testID: "websiteField", value: Y }), T ? null : a.createElement(d.ZP, { hasError: N && !q, label: F, onChange: K, options: B, style: O.orgTypeSelector, testID: "orgTypeField", value: q, withEmptyOption: !0 }), a.createElement(c.Z, { invalid: N && !V, label: S, name: "typedFullName", onChange: (e) => j(e.currentTarget.value), style: O.applicationInput, testID: "fullNameField", value: V }), a.createElement(c.Z, { errorText: W, invalid: N && (!R || !!W), label: A, name: "typedOrgEmailAddress", onChange: (e) => G(e.currentTarget.value), style: O.applicationInput, testID: "emailField", value: R }), a.createElement(r.Z, { style: O.footer }, a.createElement(C.Z, { error: X }), a.createElement(r.Z, { style: O.row }, a.createElement(u.Z, { checked: te, onChange: ne }), a.createElement(l.ZP, { color: "gray700" }, a.createElement(g().I18NFormatMessage, { $i18n: "aacfbecd" }, a.cloneElement($.link, null, g().f09630ff)))), a.createElement(I.Z, { buttonLabel: D, disabled: ie || !te, onClick: le, shouldShowErrorCallout: !0, tierInterval: w }))));
                },
                L = { context: "WelcomeScreen" };
            const O = m.default.create((e) => ({ container: { display: "flex", flexDirection: "column", flexGrow: 1, paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20, paddingHorizontal: e.spaces.space72 }, paddingMobile: { paddingHorizontal: e.spaces.space28 }, footer: { marginVertical: e.spaces.space16, gap: e.spaces.space16, marginHorizontal: "auto", maxWidth: "460px" }, twitterIcon: { color: e.colors.brandColor, height: "2em" }, mainSubtext: { marginTop: e.spaces.space16, marginBottom: e.spaces.space8 }, applicationInput: { paddingHorizontal: 0, paddingVertical: 5 }, orgTypeSelector: { marginTop: 5 }, row: { flexDirection: "row", gap: e.spaces.space16 }, orgHeading: { marginTop: e.spaces.space8, marginBottom: e.spaces.space12 }, adminHeading: { marginTop: e.spaces.space16, marginBottom: e.spaces.space12 } })),
                H = T(function (e) {
                    return a.createElement(E.H, { errorConfig: L }, a.createElement(U, e));
                }),
                V = (e) => a.createElement(H, e),
                j = V;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-964cff98.908aa96a.js.map
