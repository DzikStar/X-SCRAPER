"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-c04190a6"],
    {
        611520: (e, t, a) => {
            a.d(t, { U2: () => P, oT: () => C });
            var i = a(202784),
                n = a(325686),
                r = a(107267),
                s = a(782947),
                c = a(154003),
                o = a(386802),
                l = a(731708),
                d = a(40610),
                p = a(392237),
                m = a(674132),
                u = a.n(m),
                g = a(980407),
                b = a(481326),
                f = a(731822);
            const v = u().cbe23239,
                h = u().jd8b2e66,
                E = u().fc1f43d0,
                y = u().g8881c78,
                Z = u().g59f8506,
                _ = [
                    { value: "direct", description: "", label: u().a310e476, secondaryDescription: u().fde6cf98, reverseLabels: !0 },
                    { value: "invoice", description: "", label: u().fdfbfcb0, secondaryDescription: v({ affiliatesCount: b.hN }), reverseLabels: !0 },
                ],
                C = ({ onSetupInvoicing: e, onSubscribe: t }) => {
                    const [a, r] = i.useState("direct");
                    return i.createElement(
                        i.Fragment,
                        null,
                        i.createElement(
                            n.Z,
                            { style: w.modeSelector },
                            i.createElement(s.Z, {
                                horizontal: !0,
                                name: "",
                                onChange: (e, t) => {
                                    r(t);
                                },
                                options: _,
                                value: a,
                            }),
                        ),
                        i.createElement(c.ZP, { onPress: "direct" === a ? t : e, size: "xLarge", style: w.bodyButton, type: "primaryFilled" }, "direct" === a ? h : E),
                    );
                },
                P = (e) => {
                    const { isModal: t } = i.useContext(o.Z),
                        a = (0, r.useHistory)(),
                        { checkoutErrorResponse: s, interval: c, onClose: p, onSetupInvoicing: m, onSubscribe: u, tier: b } = e;
                    return i.createElement(g.Z, { backButtonType: "close", history: a, onBackClick: p }, i.createElement(n.Z, { style: [w.container, t ? void 0 : w.paddingMobile] }, i.createElement(l.ZP, { size: "title2", weight: "heavy" }, y), i.createElement(l.ZP, { align: "center", color: "gray700", style: w.subtext }, i.createElement(f.Z, { interval: c, tier: b })), i.createElement(C, { onSetupInvoicing: m, onSubscribe: u }), i.createElement(l.ZP, { color: "gray700", style: w.note }, Z), s ? s?.errors?.map((e, t) => (e.error_message ? i.createElement(n.Z, { key: t, style: w.error }, i.createElement(d.Z.Danger, { text: e.error_message })) : null)) : null));
                },
                w = p.default.create((e) => ({ container: { display: "flex", flexDirection: "column", flexGrow: 1, alignItems: "center", paddingTop: e.spaces.space48, paddingBottom: e.spaces.space72, paddingHorizontal: e.spaces.space72 }, paddingMobile: { paddingHorizontal: e.spaces.space28 }, subtext: { marginTop: e.spaces.space20, marginBottom: e.spaces.space32 }, modeSelector: { paddingEnd: e.spaces.space20 }, bodyButton: { width: "100%", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, marginTop: e.spaces.space32 }, note: { marginTop: e.spaces.space32 }, twitterIcon: { color: e.colors.brandColor, height: "2em" }, error: { marginTop: e.spaces.space24 } }));
        },
        756716: (e, t, a) => {
            a.d(t, { Z: () => p });
            var i = a(202784),
                n = a(40610),
                r = a(674132),
                s = a.n(r),
                c = a(85034),
                o = a(375839);
            const l = s().ec6e7d9a,
                d = ({ activeSku: e }) => {
                    const [t] = (0, c.Z)(e);
                    return "Pending" === t ? i.createElement(n.Z.Danger, { text: l }) : null;
                },
                p = () => {
                    const { sku: e } = (0, o.Z)();
                    return e ? i.createElement(d, { activeSku: e }) : null;
                };
        },
        731822: (e, t, a) => {
            a.d(t, { Z: () => f, f: () => b });
            var i = a(202784),
                n = a(731708),
                r = a(688715),
                s = a(674132),
                c = a.n(s),
                o = a(97882),
                l = a(685731),
                d = a(87690);
            const p = c().aa0d60aa,
                m = c().f0ad5cc8,
                u = c().b47d123d,
                g = i.createElement(n.ZP, { color: "link", link: (0, r.ju)("https://help.x.com/using-twitter/verified-organizations#verifiedorgs-pricing") }),
                b = (e, t, a = {}) => {
                    const { affiliateCount: i = 1, removeTrailingZeros: n = !0, withDiscount: r = !1 } = a,
                        { web_subscription_product_details_by_rest_id: s } = (0, d.ZP)(e),
                        { prices: c } = s || {},
                        b = (0, l.pt)(c, !1, t),
                        f = b?.external_price_id,
                        v = (0, l.aU)(b),
                        h = b?.currency_code.toUpperCase(),
                        E = (0, l.pt)(c, !1, "Year"),
                        y = (0, l.pt)(c, !0, t),
                        Z = (0, l.aU)(y, !0) * i,
                        _ = v + Z;
                    let C,
                        P,
                        w = null;
                    E?.amount_local_micro && ((w = { ...E, amount_local_micro: E.amount_local_micro / 12, tax_amount_local_micro: (E.tax_amount_local_micro || 0) / 12 }), (C = (0, o.x)({ amount: (0, l.aU)(w), removeTrailingZeros: n, currencyCode: E.currency_code.toUpperCase() })));
                    let T = null;
                    if ("Year" === t) {
                        const e = (0, l.pt)(c, !1, "Month"),
                            t = 12 * (e?.amount_local_micro || 0),
                            a = b?.amount_local_micro ? Math.floor(((b?.amount_local_micro - t) / t) * -100) : null;
                        T = u({ percentage: a });
                    }
                    if (r) {
                        const e = b ? (0, l.fS)(b, r, !1) : void 0,
                            t = y ? (0, l.fS)(y, r, !1) : void 0,
                            a = e?.metadata?.percent_off || 0,
                            s = (0, l.aU)(b, !0, a),
                            c = (0, l.aU)(y, !0, t?.metadata?.percent_off || 0) * i,
                            d = s + c,
                            p = _ - d,
                            m = (0, o.x)({ amount: s, currencyCode: h, removeTrailingZeros: n }),
                            u = (0, o.x)({ amount: c, currencyCode: h, removeTrailingZeros: n }),
                            g = (0, l.aU)(w, !0, a),
                            f = (0, o.x)({ amount: g, currencyCode: h, removeTrailingZeros: n }),
                            v = p > 0 ? (0, o.x)({ amount: d, currencyCode: h, removeTrailingZeros: n }) : void 0,
                            E = p > 0 ? (0, o.x)({ amount: p, currencyCode: h, removeTrailingZeros: n }) : void 0;
                        P = e ? { percentOff: a, endsAtMsec: e.ends_at_msec || "", programId: e.program_id || "", discountedCost: m, discountedAffiliateCost: u, discountedTotalCost: v, totalDiscount: E, annualBaseMonthly: f } : void 0;
                    }
                    const k = b && (0, o.x)({ amount: v, currencyCode: h, removeTrailingZeros: n }),
                        x = y && (0, o.x)({ amount: Z, removeTrailingZeros: n, currencyCode: y.currency_code.toUpperCase() }),
                        S = (0, o.x)({ amount: _, removeTrailingZeros: n, currencyCode: h }),
                        I = "Month" === t ? p : m;
                    return { basePriceCurrency: h, link: g, baseCost: k, affiliateCost: x, monthlyTaxLabel: (0, l.ZV)(b), affiliateTaxLabel: (0, l.ZV)(y), baseInterval: I, affiliateInterval: I, percentageSavedLabel: T, basePriceId: f, annualBaseMonthly: C, promotionInfo: P, totalCost: S };
                },
                f = ({ interval: e, tier: t, withDiscount: a = !1 }) => {
                    const { promotionInfo: r, ...s } = b(t, e, { withDiscount: a }),
                        { discountedCost: o } = r || {};
                    return "FullAccess" === t || "FullAccessGov" === t ? (o ? i.createElement(i.Fragment, null, i.createElement(n.ZP, { size: "subtext1" }, i.createElement(c().I18NFormatMessage, { $i18n: "j4f386b7" }, o, s.baseCost)), i.createElement(n.ZP, { size: "subtext3", style: { marginTop: 8 } }, i.createElement(c().I18NFormatMessage, { $i18n: "ce9e7f1b" }, s.affiliateCost, i.cloneElement(s.link, null, c().b9e4bf55)))) : i.createElement(c().I18NFormatMessage, { $i18n: "dc107867" }, s.baseCost, s.baseInterval, s.monthlyTaxLabel, s.affiliateCost, s.affiliateInterval, s.affiliateTaxLabel, i.cloneElement(s.link, null, c().hc4703a9))) : i.createElement(c().I18NFormatMessage, { $i18n: "j02b65f7" }, s.baseCost, s.baseInterval, s.monthlyTaxLabel, i.cloneElement(s.link, null, c().fa0ffaeb));
                };
        },
        486544: (e, t, a) => {
            a.r(t), a.d(t, { default: () => T });
            var i = a(202784),
                n = a(576648),
                r = a(325686),
                s = a(138099),
                c = a(731708),
                o = a(154003),
                l = a(392237),
                d = a(674132),
                p = a.n(d),
                m = a(720526),
                u = a(187669),
                g = a(625661),
                b = a(782642),
                f = a(725516);
            const v = p().a690746e,
                h = p().he2dc9b0,
                E = p().e5e6479e,
                y = p().ib244b2e,
                Z = p().a08da0fa,
                _ = p().ica8392a,
                C = p().ed37e36e,
                P = ({ history: e }) => {
                    const t = (0, f.z)(),
                        a = (0, b.p)();
                    (0, u.q)(() => {
                        t.scribe({ page: "verified-organizations", section: "support", action: "impression" });
                    });
                    const l = i.useCallback(() => {
                            t.scribe({ page: "verified-organizations", section: "support", element: "copy_email_address", action: "click" }), n.Z.setString("verified-premium-support@x.com"), a({ text: "Copied to clipboard" });
                        }, [t, a]),
                        d = i.useCallback(() => {
                            t.scribe({ page: "verified-organizations", section: "support", element: "close", action: "click" }), e.goBack();
                        }, [t, e]);
                    return i.createElement(s.Z, { enableMaskForDismiss: !0, onMaskClick: d, type: "full", withMask: !0 }, i.createElement(g.ZP, { backButtonType: "close", fixed: !1, history: e, onBackClick: d }), i.createElement(r.Z, { style: w.container }, i.createElement(c.ZP, { size: "title2", style: w.title, weight: "heavy" }, v), i.createElement(c.ZP, { style: w.spacer, weight: "bold" }, h), i.createElement(c.ZP, { color: "gray700", style: w.spacer }, E), i.createElement(o.ZP, { icon: i.createElement(m.default, null), onPress: l, style: w.spacer, type: "primaryOutlined" }, y), i.createElement(c.ZP, { style: w.whatHappens, weight: "bold" }, Z), i.createElement(c.ZP, { color: "gray700" }, _), i.createElement(c.ZP, { color: "gray700", style: w.note }, C)));
                },
                w = l.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space36 }, title: { paddingBottom: e.spaces.space20 }, note: { marginVertical: e.spaces.space20 }, spacer: { marginVertical: e.spaces.space8 }, whatHappens: { marginTop: e.spaces.space8 } })),
                T = i.memo(P);
        },
        803473: (e, t, a) => {
            a.r(t), a.d(t, { RegisteringScreen: () => T, default: () => x });
            var i = a(202784),
                n = a(325686),
                r = a(107267),
                s = a(992942),
                c = a(731708),
                o = a(167630),
                l = a(529356),
                d = a(392237),
                p = a(674132),
                m = a.n(p),
                u = a(798156),
                g = a(443781),
                b = a(725516),
                f = a(615027),
                v = a(668214),
                h = a(215929);
            const E = (0, v.Z)()
                    .propsFromActions(() => ({ fetchUserClaims: h.rS }))
                    .withAnalytics({ page: "verified", section: "registering" }),
                y = m().d7eebb60,
                Z = m().f45d02e8,
                _ = m().a1c566c0,
                C = m().a452ab68,
                P = { width: 194, height: 146 },
                w = ({ style: e }) => i.createElement(s.Z, { "aria-label": "", source: u, style: e }),
                T = ({ fetchUserClaims: e }) => {
                    const [t, a] = i.useState("loading"),
                        { userClaims: s } = i.useContext(g.rC),
                        d = (0, b.z)(),
                        p = (0, r.useHistory)(),
                        m = p.location?.state,
                        u = m?.tierSwitchTargetProduct,
                        v = m?.isCrossgrade;
                    i.useEffect(() => {
                        d.scribe({ page: "verified-organizations", section: "registering", action: "impression" });
                    }, [d]),
                        i.useEffect(() => {
                            let t = 0;
                            const i = setInterval(() => {
                                (u ? s.hasSubscription(u) : s.isPaidVerifiedOrg())
                                    ? (d.scribe({ page: "verified-organizations", section: "registering", action: "success" }),
                                      u
                                          ? setTimeout(
                                                () => {
                                                    window.location.href = "/i/verified";
                                                },
                                                v ? 5e3 : 0,
                                            )
                                          : a("loaded"),
                                      clearInterval(i))
                                    : t >= 10
                                      ? (d.scribe({ page: "verified-organizations", section: "registering", action: "failure" }), a("failed"), clearInterval(i))
                                      : ((t += 1), e({}));
                            }, 1e3);
                            return () => clearInterval(i);
                        }, [e, s, d, u, v]);
                    const h = i.useMemo(() => ("loading" === t ? i.createElement(n.Z, { style: { width: "100%" } }, i.createElement(c.ZP, null, C), i.createElement(o.Z, { style: k.activityIndicator })) : "loaded" === t ? i.createElement(f.Z, { to: "/i/verified" }) : s.hasSubscription("verified_org_free") ? _ : Z), [t, s]);
                    return i.createElement(l.Z, { graphic: w, graphicDisplayMode: "illustration", graphicStyle: P, headline: y, onAction: () => {}, subtext: h });
                },
                k = d.default.create((e) => ({ margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                x = E(T);
        },
        936304: (e, t, a) => {
            a.r(t), a.d(t, { JobPromotionSettings: () => U, default: () => V });
            var i = a(516057),
                n = a(561543),
                r = a(202784),
                s = (a(585488), a(712696)),
                c = a.n(s),
                o = a(351743),
                l = a.n(o),
                d = a(731708),
                p = a(674132),
                m = a.n(p),
                u = a(652904),
                g = a(736063),
                b = a(293115),
                f = a(948927),
                v = a(678759),
                h = a(325686),
                E = a(67369),
                y = a(943401),
                Z = a(392237);
            const _ = Z.default.create((e) => ({ title: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, titleText: { paddingVertical: e.spaces.space2 } })),
                C = function ({ children: e, description: t, title: a }) {
                    const i = (0, E.Zz)();
                    return r.createElement(r.Fragment, null, r.createElement(h.Z, { style: _.title }, r.createElement(d.ZP, { "aria-level": 2, numberOfLines: 1, role: "heading", size: i ? "headline2" : "headline1", style: _.titleText, weight: "bold" }, a)), r.createElement(y.Z, { description: t }), e);
                };
            var P = a(101890),
                w = a(928088);
            const T = m().dd59f146,
                k = m().e7e36818,
                x = m().d4e220b4,
                S = (e) => e.accounts.map((e) => ({ label: z(e), value: e.id })),
                I = m().c28566e0,
                z = (e) => `${e.name ?? I ?? I} (id: ${e.id})`,
                M = Z.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, noAdAccounts: { paddingTop: e.spaces.space12 } })),
                B = ({ onChange: e }) => {
                    const t = (0, v.pD)(),
                        a = (0, f.od)(),
                        [i, n] = r.useState(t.jobPromotionAdAccount),
                        s = r.useMemo(() => S(a), [a]),
                        c = r.useCallback(
                            (t, a) => {
                                n(a), e(t, a);
                            },
                            [e, n],
                        );
                    return s.length > 0 ? r.createElement(h.Z, null, r.createElement(P.Z, { description: k, label: T, name: x, onChange: c, options: s, value: i })) : r.createElement(w.Z, null, r.createElement(h.Z, { style: M.header }, r.createElement(d.ZP, { style: M.label, weight: "bold" }, T), r.createElement(d.ZP, { color: "gray700", size: "subtext2" }, k), r.createElement(d.ZP, { style: M.noAdAccounts }, r.createElement(m().I18NFormatMessage, { $i18n: "bd5a78a1" }, r.createElement(d.ZP, { link: { pathname: "/i/verified-advertising" } }, m().c80160d3)))));
                },
                F = n.Z,
                A = i.Z,
                D = m().ib5e6f90,
                L = { page: "verified-organizations", section: "settings-job-promotion-account" };
            function U(e) {
                const [t] = l()(A),
                    a = r.useCallback(
                        (e, a) => {
                            t({ variables: { jobPromotionAdAccount: `${parseInt(a, 36)}` } });
                        },
                        [t],
                    );
                return r.createElement(b.nO, { namespace: L }, r.createElement(u.Z, null, r.createElement(C, { description: r.createElement(m().I18NFormatMessage, { $i18n: "ebebbb93" }, r.createElement(d.ZP, { link: { pathname: "/i/verified/jobs" } }, m().id720215)), title: D }, r.createElement(B, { onChange: a }))));
            }
            const $ = (e) => {
                    const { viewer: t } = c()(F, {}),
                        a = t.user_results.result;
                    return r.createElement(v.Qs, { user: a }, r.createElement(f.Em, { user: a }, r.createElement(U, e)));
                },
                N = { context: "JobPromotionSettings" },
                V = (e) => r.createElement(g.H, { errorConfig: N }, r.createElement($, e));
        },
        112964: (e, t, a) => {
            a.r(t), a.d(t, { SettingsScreen: () => q, default: () => K });
            var i = a(202784),
                n = a(325686),
                r = a(107267),
                s = a(731708),
                c = a(779610),
                o = a(292627),
                l = a(138099),
                d = a(167630),
                p = a(392237),
                m = a(674132),
                u = a.n(m),
                g = a(211971),
                b = a(443781),
                f = a(952793),
                v = a(177210),
                h = a(693510),
                E = a(782826),
                y = a(725516),
                Z = a(125363),
                _ = a(390387),
                C = a(264922),
                P = a(854219),
                w = a(481326),
                T = a(550496),
                k = a(492253),
                x = a(630887),
                S = a(199232),
                I = a(725405);
            const z = () => {
                    const e = (0, r.useLocation)(),
                        t = (0, I.Z)(),
                        { origin: a } = E.ZP.get(),
                        n = (0, v.Z)({ returnUrl: `${a}/i/verified`, originProduct: "VerifiedOrganizations" }),
                        [s, c] = i.useState(!1);
                    return (
                        i.useEffect(() => {
                            "redirect_billing" !== e?.query?.action || s || (t.scribe({ page: "verified-organizations", section: "settings", component: "billing", action: "redirect" }), c(!0), n?.());
                        }, [e, n, s, t]),
                        { isRedirecting: s }
                    );
                },
                M = u().ce102a20,
                B = u().ddfd6718,
                F = u().i90ea7d2,
                A = u().a62359e6,
                D = u().e31456f8,
                L = u().ge221b7c,
                U = u().i4dccc18,
                $ = u().ec3cd6e4,
                N = u().dac61c3c,
                V = u().b6b5fd66,
                O = u().g5925628,
                j = u().hb9c4a1c,
                H = u().c674f5b4,
                G = u().i8237e66,
                Y = u().f5b352ec,
                R = u().c67b260c,
                W = u().hebd348a,
                q = () => {
                    const e = (0, r.useLocation)(),
                        t = (0, y.z)(),
                        { userClaims: a } = i.useContext(b.rC);
                    i.useEffect(() => {
                        t.scribe({ page: "verified-organizations", section: "settings", action: "impression" });
                    }, [t]);
                    const { isRedirecting: p } = z(),
                        m = (0, Z.v9)(_.Lz),
                        u = a.isFreeVerifiedOrg(),
                        I = a.isPaidVerifiedOrg(),
                        q = a.isNonGovPaidVerifiedOrg(),
                        K = (0, f.hC)("responsive_web_verified_organizations_paid_to_invoice_enabled"),
                        Q = (0, f.hC)("blue_business_tier_switching_enabled"),
                        X = (0, x.zK)(),
                        { affiliateLimit: ee } = (0, T.n5)(),
                        { origin: te } = E.ZP.get(),
                        ae = (0, v.Z)({ returnUrl: `${te}/i/verified`, originProduct: "VerifiedOrganizations" }),
                        ie = K && I && ee === w.dN,
                        ne = i.useCallback(() => {
                            t.scribe({ page: "verified-organizations", section: "settings", component: "switch-to-invoice", action: "click" });
                        }, [t]),
                        [, re, se] = (0, k.Z)(),
                        ce = re + se,
                        { hasVerifiedOrgFeature: oe } = (0, h.ZP)(),
                        le = oe("BusinessPreapprovalAdminPortalAccess"),
                        de = (0, f.hC)("responsive_web_verified_organizations_intercom_enabled") && !le,
                        pe = i.useMemo(() => ({ pathname: "/i/verified-invoice", state: { minAffiliateLimit: ce, invoicedUser: { billed_to_email_address: "", billed_to_name: "" }, successUrl: "/i/verified", backUrl: "/i/verified/settings", invoiceAction: w.hA.switchFromDirect } }), [ce]),
                        me = i.useCallback(() => {
                            t.scribe({ page: "verified-organizations", section: "settings", component: "cancel", action: "click" });
                        }, [t]),
                        ue = i.useCallback(() => {
                            t.scribe({ page: "verified-organizations", section: "settings", component: "job-promotion", action: "click" });
                        }, [t]),
                        ge = i.useCallback(() => {
                            t.scribe({ page: "verified-organizations", section: "settings", component: "support-email", action: "click" });
                        }, [t]),
                        be = i.createElement(n.Z, { style: J.alertContainer, testID: "paymentAlertBanner" }, i.createElement(n.Z, { style: J.iconContainer }, i.createElement(g.default, { style: J.alertIcon })), i.createElement(n.Z, { style: J.bannerTextContainer }, i.createElement(s.ZP, { style: J.bannerTitleText, weight: "bold" }, B), i.createElement(s.ZP, { style: J.bannerMessageText }, F))),
                        fe = (0, f.hC)("subscriptions_management_failed_payment_menu_alert_enabled"),
                        ve = (0, S.Z)(["VerifiedOrganization"]).hasVerifiedOrgPaymentFailure,
                        he = i.useMemo(() => {
                            const e = de ? void 0 : w.A9;
                            return i.createElement(c.Z, { description: j, label: O, link: e, onPress: ge });
                        }, [de, ge]);
                    return i.createElement(n.Z, { style: J.screen }, p ? i.createElement(o.Z.Modal, null, i.createElement(l.Z, { style: J.stripeRedirectSheet, type: "center", withMask: !0 }, i.createElement(s.ZP, { size: "headline1" }, M), i.createElement(d.Z, null))) : null, i.createElement(C.Z, { location: e, screenType: "root", title: A }, q && Q && !le ? i.createElement(c.Z, { description: L, label: D, link: { pathname: "/i/verified-orgs-tier-switch", state: { referring_page: "vo-settings" } } }) : null, i.createElement(n.Z, null, ie ? i.createElement(c.Z, { description: G, label: H, link: pe, onPress: ne }) : null, i.createElement(c.Z, { description: V, label: N, link: "/settings/account" }), u || m ? null : i.createElement(c.Z, { decoration: fe && ve ? be : null, description: $, label: U, onPress: ae, role: "button" }), !le && i.createElement(c.Z, { label: Y, link: "/i/verified/cancel", onPress: me }), X && !le ? i.createElement(c.Z, { description: W, label: R, link: "/i/verified/settings/job-promotion", onPress: ue }) : null, !le && (de ? i.createElement(P.Z, null, he) : he))));
                },
                J = p.default.create((e) => ({ screen: { minHeight: "100vh" }, stripeRedirectSheet: { padding: e.spaces.space24, gap: e.spaces.space16 }, alertContainer: { flexDirection: "row", alignItems: "center", backgroundColor: e.colors.red0, borderRadius: e.borderRadii.medium, borderColor: e.colors.orange100, borderWidth: "1px", padding: e.spaces.space12, marginTop: e.spaces.space16 }, iconContainer: { marginEnd: e.spaces.space12 }, alertIcon: { color: e.colors.red500 }, bannerTextContainer: { flex: 1 }, bannerTitleText: { color: e.colors.white, fontWeight: "bold", marginBottom: e.spaces.space4, fontSize: e.fontSizes.subtext1 }, bannerMessageText: { color: e.colors.white, fontSize: e.fontSizes.subtext2, opacity: 0.9 } })),
                K = q;
        },
        548384: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(202784),
                n = a(731708),
                r = a(688715),
                s = a(674132),
                c = a.n(s);
            const o = { link: i.createElement(n.ZP, { color: "text", link: (0, r.ju)("https://legal.x.com/purchaser-terms"), withUnderline: !0 }) },
                l = ({ tier: e }) => i.createElement(n.ZP, { color: "gray700", size: "subtext3" }, "Basic" === e ? i.createElement(i.Fragment, null, i.createElement(c().I18NFormatMessage, { $i18n: "gc723de9" }, i.cloneElement(o.link, null, c().f2ae1d63)), i.createElement("br", null), i.createElement("br", null)) : i.createElement(c().I18NFormatMessage, { $i18n: "ha873011" }, i.cloneElement(o.link, null, c().ie8759c5)));
        },
        322481: (e, t, a) => {
            a.d(t, { Z: () => _ });
            a(136728);
            var i = a(202784),
                n = a(325686),
                r = a(107267),
                s = a(40610),
                c = a(392237),
                o = a(674132),
                l = a.n(o),
                d = a(443781),
                p = a(952793),
                m = a(693510),
                u = a(782826),
                g = a(725405),
                b = a(218257),
                f = a(858434),
                v = a(148309),
                h = a(548384);
            const E = l().e4a6e006,
                y = l().fafe5b9f,
                Z = l().i61a221c,
                _ = ({ buttonLabel: e, cancelUrl: t, isTierSwitch: a, priceElements: c, selectedInterval: o, selectedTier: l, showDisclaimer: _ = !0, successUrl: P, withDiscount: w = !1 }) => {
                    const T = (0, r.useHistory)(),
                        k = (0, g.Z)(),
                        x = (0, p.hC)("responsive_web_verified_organizations_invoice_enabled"),
                        S = (0, p.hC)("blue_business_display_annual_price_monthly"),
                        I = (0, p.hC)("responsive_web_vo_basic_application_enabled"),
                        z = (0, p.hC)("responsive_web_verified_organizations_free_upgrade_promo_enabled"),
                        [M, B] = i.useState(!1),
                        { hasVerifiedOrgFeature: F } = (0, m.ZP)(),
                        { userClaims: A } = i.useContext(d.rC),
                        D = F(m.ny.BusinessAdminPortalAccess),
                        L = F(m.ny.upfrontPaymentAccess),
                        U = A.isFreeVerifiedOrg(),
                        $ = A.isPaidVerifiedOrg() || U,
                        [{ verified_organization_payment_info: N }] = (0, v.Z)("signup_screen"),
                        [V] = (0, f.Z)(N?.__id),
                        O = i.useMemo(() => N?.target_organization_tier, [N]),
                        j = (0, u.G3)(T.location),
                        H = i.useCallback(
                            () => (
                                B(!1),
                                k.scribe({ page: "verified-organizations", section: "welcome", component: "subscribe", element: `${l}-${o}`, action: "click", data: { referring_page: j, referer: j } }),
                                new Promise((e, t) => {
                                    if (U && z) return e();
                                    if ("Basic" === l)
                                        "PaidGoldBasic" === O
                                            ? e()
                                            : I
                                              ? T.push("/i/verified-application", { tier: l, interval: o, overwritingUpfrontApplication: !!O, referring_page: j })
                                              : V({ organizationName: "", applicantName: "", organizationEmailAddress: "", organizationWebsite: "", organizationType: "BusinessBasic" })
                                                    .then(() => {
                                                        e();
                                                    })
                                                    .catch((e) => (B(!0), t(e)));
                                    else {
                                        const t = "PaidGoldBasic" === O;
                                        t || x || !(L || (D && !$)) ? T.push("/i/verified-application", { tier: l, interval: o, overwritingUpfrontApplication: t, referring_page: j }) : e();
                                    }
                                })
                            ),
                            [k, l, o, j, U, z, O, I, T, V, x, L, D, $],
                        );
                    return i.createElement(n.Z, { style: C.buttonContainer }, M ? i.createElement(s.Z.Danger, { style: C.error, text: E }) : null, a ? null : i.createElement(b.Z, { buttonLabel: e || (S ? Z : y({ price: c.baseCost, interval: c.baseInterval })), cancelUrl: t, onClick: H, selectedTier: l, shouldShowErrorCallout: !0, successUrl: P, tierInterval: o, withDiscount: w }), _ && i.createElement(h.Z, { tier: l }));
                },
                C = c.default.create((e) => ({ buttonContainer: { position: "sticky", fontFamily: e.fontFamilies.normal }, error: { marginBottom: e.spaces.space8 } }));
        },
        95891: (e, t, a) => {
            a.r(t), a.d(t, { default: () => we });
            a(543673), a(240753), a(128399);
            var i = a(202784),
                n = a(325686),
                r = a(107267),
                s = a(386802),
                c = a(782947),
                o = a(731708),
                l = a(40610),
                d = a(392237),
                p = a(674132),
                m = a.n(p),
                u = a(323265),
                g = a(980407),
                b = a(443781),
                f = a(952793),
                v = a(693510),
                h = a(782826),
                E = a(725516),
                y = a(125363),
                Z = a(488645),
                _ = a(87690),
                C = a(731822),
                P = a(2430);
            const w = (0, a(668214).Z)().propsFromState(() => ({ tierFromLocation: (0, P.KT)("tier") }));
            var T = a(725405);
            const k = m().e0b39888,
                x = m().b67c37de,
                S = m().a8363765,
                I = m().i2c32253,
                z = m().c41e1023,
                M = ({ basicPriceElementsAnnual: e, basicPriceElementsMonth: t, fullAccessPriceElementsAnnual: a, fullAccessPriceElementsMonth: s, selectedInterval: o, selectedTier: l, setSelectedInterval: d }) => {
                    const p = (0, T.Z)(),
                        m = (0, r.useHistory)(),
                        u = (0, f.hC)("blue_business_display_annual_price_monthly"),
                        g =
                            "Basic" === l
                                ? [
                                      { value: "Year", description: u ? S({ price: e.baseCost }) : x, pillText: e.percentageSavedLabel || void 0, pillType: "subscriptionSaving", label: u && e.annualBaseMonthly ? I({ price: e.annualBaseMonthly }) : z({ price: e.baseCost }), dedicatedPillRow: !0 },
                                      { value: "Month", description: k, label: I({ price: t.baseCost }) },
                                  ]
                                : [
                                      { value: "Year", description: u ? S({ price: a.baseCost }) : x, pillText: a.percentageSavedLabel || void 0, pillType: "subscriptionSaving", label: u && a.annualBaseMonthly ? I({ price: a.annualBaseMonthly }) : z({ price: a.baseCost }), dedicatedPillRow: !0 },
                                      { value: "Month", description: k, label: I({ price: s.baseCost }) },
                                  ];
                    return i.createElement(
                        n.Z,
                        null,
                        i.createElement(c.Z, {
                            horizontal: !0,
                            name: "Interval",
                            onChange: (e, t) => {
                                p.scribe({ page: "verified-organizations", section: "welcome", component: "select-interval", element: t, action: "click", data: { referring_page: (0, h.G3)(m.location) } }), d(t);
                            },
                            options: g,
                            value: o,
                        }),
                    );
                };
            var B = a(322481),
                F = a(688715),
                A = a(67369),
                D = a(468670),
                L = a(913973);
            const U = (e) => ({ title: m().da11a2d7({ creditAmount: e }) }),
                $ = (e) => ({ title: m().bf6b72ac, description: m().f1c3b32c, features: [{ title: m().c0d13570 }, e.adCreditEnabled ? U(e.adCreditAmount) : null, { title: m().hb973da4 }, { title: m().j7f75bec }, { title: m().g444c82e }].filter(Boolean) }),
                N = (e) => ({ title: m().j4a7d9a6, description: m().a6c45ede, features: [{ title: m().b3caf146 }, e.adCreditEnabled ? U(e.adCreditAmount) : null, { title: m().e9aa43dc }, { title: m().i1266238 }, { title: m().e8d0fd04 }, { title: m().f25a2004 }, { title: m().e8a4ea7a }].filter(Boolean) }),
                V = { FullAccessGov: { Year: { standardCredit: "", bonusCredit: "" }, Month: { standardCredit: "", bonusCredit: "" } }, FullAccess: { Year: { standardCredit: "$10,000 USD", bonusCredit: "$12,000 USD" }, Month: { standardCredit: "$1,000 USD", bonusCredit: "$1,000 USD" } }, Basic: { Year: { standardCredit: "$2,000 USD", bonusCredit: "$2,500 USD" }, Month: { standardCredit: "$200 USD", bonusCredit: "$200 USD" } } },
                O = m().i859a9d4,
                j = m().d842dd7b,
                H = i.createElement(o.ZP, { weight: "bold", withUnderline: !0 }),
                G = { FullAccessGov: (e, t) => "", FullAccess: (e, t) => i.createElement(m().I18NFormatMessage, { $i18n: "d4918c71" }, e, i.cloneElement(H, null, m().f5b98d62({ interval: t }))), Basic: (e, t) => i.createElement(m().I18NFormatMessage, { $i18n: "a87b1795" }, e, i.cloneElement(H, null, m().ed7b9984({ interval: t }))) },
                Y = i.createElement(o.ZP, { link: (0, F.ju)("https://help.x.com/using-x/verified-organizations/ads-terms") }, O),
                R = m().fcfb696e,
                W = d.default.create((e) => ({ tierDetails: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.xLarge }, padding16: { padding: e.spaces.space16 }, tierDescription: { marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, tierTitle: { marginBottom: e.spaces.space8 }, tierFeature: { flexDirection: "row", marginBottom: e.spaces.space8 }, iconLocked: { color: e.colors.gray700 }, tierFeatureTitle: { marginStart: e.spaces.space8 } })),
                q = ({ selectedInterval: e, selectedPriceElements: t, selectedTier: a }) => {
                    const r = (0, f.hC)("recruiting_promoted_jobs_enabled"),
                        s = (0, f.hC)("responsive_web_verified_organizations_insights_enabled"),
                        c = (0, f.hC)("responsive_web_vo_annual_credit_increase_enabled"),
                        l = (0, f.hC)("blue_business_simplify_signup_ui"),
                        d = (0, A.Mv)(),
                        p = V[a][e],
                        m = c ? p.bonusCredit : p.standardCredit,
                        u = ((g = { jobPromotionEnabled: r, insightsEnabled: s, adCreditEnabled: l, adCreditAmount: m }), { FullAccess: $(g), Basic: N(g) })[a];
                    var g;
                    const b = j({ credit: m }),
                        v = G[a](m, t.baseInterval);
                    return i.createElement(
                        n.Z,
                        { style: { flexGrow: 1 } },
                        i.createElement(
                            n.Z,
                            { style: [W.tierDetails, W.padding16] },
                            i.createElement(o.ZP, { size: d ? "title4" : "title2", weight: "bold" }, b),
                            i.createElement(o.ZP, { style: W.tierDescription, weight: "medium" }, u.description),
                            u.features.map((e, t) => i.createElement(n.Z, { key: t, style: W.tierFeature }, e.locked ? i.createElement(D.default, { style: W.iconLocked }) : i.createElement(L.default, null), i.createElement(o.ZP, { style: W.tierFeatureTitle, weight: "medium" }, e.title))),
                            l ? i.createElement(o.ZP, { color: "gray700" }, R, " ", Y) : i.createElement(o.ZP, { testID: "extraOffering" }, v, " ", Y),
                        ),
                    );
                };
            var J = a(807896),
                K = (a(136728), a(529356)),
                Q = a(154003),
                X = a(167630),
                ee = a(293115),
                te = a(215929),
                ae = a(481326),
                ie = a(96545),
                ne = a(990738),
                re = a(85034),
                se = a(375839),
                ce = a(548384);
            const oe = m().j99e2f4d,
                le = m().ieafe1c6,
                de = m().bb21a170,
                pe = m().ab0decc0,
                me = m().b0dcc4dc,
                ue = m().f3aef4ca,
                ge = m().h802e65e,
                be = m().c5269eb0,
                fe = ({ activeInterval: e, activeSku: t, activeTier: a, activeTierName: s, targetInterval: c, targetTier: d }) => {
                    const p = (0, r.useHistory)(),
                        u = (0, T.Z)(),
                        [g, b] = i.useState(!1),
                        [f, v] = i.useState(!1),
                        [h, E] = i.useState(!1),
                        [y] = (0, ie.Z)(),
                        Z = (0, C.f)(d, c),
                        _ = (0, C.f)(a, e),
                        [P, w] = (0, ne.Z)(t),
                        [k, x] = (0, re.Z)(t),
                        S = P?.find((e) => e.price_id === Z.basePriceId),
                        I = !!S,
                        z = S?.product_sku,
                        M = c !== e && z === t,
                        B = Z.basePriceId === _.basePriceId,
                        F = i.useCallback(() => {
                            v(!1);
                            const e = Z.basePriceId;
                            u.scribe({ action: "click", element: e }),
                                e &&
                                    (b(!1),
                                    E(!0),
                                    y({ targetPriceId: e })
                                        .then(() => {
                                            u.scribe({ action: "success", element: e }), E(!1);
                                            const t = { tierSwitchTargetProduct: Object.keys(te.OY).find((e) => te.OY[e].includes(z)), isCrossgrade: M };
                                            p.push("/i/verified-registering", t);
                                        })
                                        .catch(() => {
                                            u.scribe({ action: "failure", element: e }), v(!0), E(!1);
                                        }));
                        }, [y, p, u, M, Z.basePriceId, z]),
                        A = () => {
                            b(!1);
                        },
                        D = i.useMemo(() => {
                            const e = pe,
                                t = oe({ price: _.baseCost, interval: _.baseInterval }),
                                a = oe({ price: Z.baseCost, interval: Z.baseInterval }),
                                r = se.S[d],
                                c = i.createElement(n.Z, { style: he.tierSwitchConfirmBody }, t ? i.createElement(n.Z, { testID: "current-plan" }, i.createElement(m().I18NFormatMessage, { $i18n: "fb6fa495", activeTierName: s, activePriceLabel: t }, i.createElement(o.ZP, { weight: "bold" }, m().c578c4ca))) : null, a ? i.createElement(n.Z, { style: he.targetPriceLabel, testID: "new-plan" }, i.createElement(m().I18NFormatMessage, { $i18n: "fcbe756d", targetTierName: r, targetPriceLabel: a }, i.createElement(o.ZP, { weight: "bold" }, m().i5d19147))) : null);
                            return i.createElement(K.Z, { actionLabel: e, enableMaskForDismiss: !0, footer: i.createElement(ce.Z, { tier: d }), graphicDisplayMode: "none", headline: le, onAction: F, onClose: A, subtext: c });
                        }, [F, Z, s, d, _]),
                        L = i.createElement(m().I18NFormatMessage, { $i18n: "c9384b33" }, i.createElement(o.ZP, { link: ae.Ld }, m().b025ff5f));
                    return "Pending" === k
                        ? i.createElement(l.Z.Danger, { style: he.errorCallout, text: me })
                        : x
                          ? i.createElement(l.Z.Danger, { style: he.errorCallout, text: x })
                          : w
                            ? i.createElement(l.Z.Danger, { style: he.errorCallout, text: w })
                            : i.createElement(
                                  i.Fragment,
                                  null,
                                  g ? D : null,
                                  I ? null : B ? i.createElement(l.Z.Primary, { style: he.unsupportedCallout, text: be }) : i.createElement(l.Z.Primary, { style: he.unsupportedCallout, text: L }),
                                  f ? i.createElement(l.Z.Danger, { style: he.errorCallout, text: ge }) : null,
                                  i.createElement(
                                      Q.ZP,
                                      {
                                          disabled: !I || h,
                                          onPress: () => {
                                              b(!0);
                                          },
                                          style: he.button,
                                          testID: "tier-switch-button",
                                          type: "primaryFilled",
                                      },
                                      h ? i.createElement(X.Z, null) : de,
                                  ),
                              );
                },
                ve = (e) => {
                    const { interval: t, localizedTierName: a, sku: n, tier: r } = (0, se.Z)();
                    return t && n ? i.createElement(ee.nO, { namespace: { page: "verified-organizations", section: "tier-switch", component: "tier-switch-button" } }, i.createElement(fe, (0, J.Z)({}, e, { activeInterval: t, activeSku: n, activeTier: r, activeTierName: a }))) : i.createElement(l.Z.Danger, { style: he.errorCallout, text: ue });
                },
                he = d.default.create((e) => ({ unsupportedCallout: { marginTop: e.spaces.space8 }, errorCallout: { marginTop: e.spaces.space16 }, button: { marginTop: e.spaces.space16 }, tierSwitchConfirmBody: { marginTop: e.spaces.space8 }, targetPriceLabel: { marginTop: e.spaces.space16 } })),
                Ee = m().f5a1c6ac,
                ye = m().g2c0144a,
                Ze = m().j4a7d9a6,
                _e = m().bf6b72ac,
                Ce = (e) => [Pe.container, e ? Pe.paddingMobile : Pe.paddingDesktop],
                Pe = d.default.create((e) => ({ gradient: { position: "absolute", height: 28, backgroundImage: `linear-gradient(${e.colors.transparent} 0%, ${e.colors.navigationBackground} 100%)`, width: "100%", top: -28, start: 0 }, tierSwitcher: { marginBottom: e.spaces.space8, alignItems: "center" }, tierSwitcherMobile: { marginBottom: e.spaces.space8, alignItems: "center" }, container: { display: "flex", flexDirection: "column", flexGrow: 1, paddingBottom: e.spaces.space16 }, paddingDesktop: { paddingHorizontal: e.spaces.space32 }, paddingMobile: { paddingHorizontal: e.spaces.space16, paddingBottom: 340 }, feature: { flexGrow: 1, flexShrink: 0, minWidth: "140px", marginVertical: e.spaces.space8, display: "flex", gap: 8 }, priceLabel: { marginTop: e.spaces.space16 }, stickyFooter: { position: "fixed", bottom: 0, start: 0 }, footer: { backgroundColor: e.colors.cellBackground, padding: e.spaces.space16 }, footerDesktop: { paddingHorizontal: e.spaces.space32, paddingTop: 0 } })),
                we = w(({ isTierSwitch: e, tierFromLocation: t }) => {
                    const a = (0, r.useHistory)(),
                        d = (0, E.z)(),
                        p = (0, y.I0)(),
                        { isModal: P } = i.useContext(s.Z),
                        { userClaims: w } = (0, b.QZ)(),
                        T = (0, f.hC)("blue_business_tier_switching_enabled"),
                        k = (0, f.hC)("subscriptions_sign_up_enabled"),
                        x = (t && _.V5[t]) || "FullAccess",
                        [S, I] = i.useState(x),
                        [z, F] = i.useState("Year"),
                        { hasVerifiedOrgFeature: A } = (0, v.ZP)(),
                        D = A("BusinessPreapprovalAdminPortalAccess");
                    i.useEffect(() => {
                        if (T) {
                            const t = w.isNonGovPaidVerifiedOrg();
                            e && !t && a.replace("/home"), e && t && D && a.replace("/i/verified/home"), !e && t && a.replace("/i/verified-orgs-tier-switch");
                        }
                    }, [e, a, w, T, D]);
                    const L = (t) => {
                            if (T && e && t) return { pillText: "Active", pillType: "subscriptionSaving" };
                        },
                        U = [
                            { value: "Basic", label: Ze, ...L(w.hasSubscription("verified_org_basic")) },
                            { value: "FullAccess", label: _e, ...L(w.hasSubscription("verified_org_full_access")) },
                        ],
                        $ = (0, C.f)("FullAccess", "Month"),
                        N = (0, C.f)("FullAccess", "Year"),
                        V = (0, C.f)("Basic", "Month"),
                        O = (0, C.f)("Basic", "Year"),
                        { promotionInfo: j, ...H } = "FullAccess" === S ? ("Year" === z ? N : $) : "Year" === z ? O : V,
                        G = !P;
                    i.useEffect(() => {
                        const t = (0, h.G3)(a.location);
                        d.scribe({ page: "verified-organizations", section: "welcome", component: e ? "tier-switch" : "sign-up", action: "impression", data: { referer: t, referring_page: t } });
                    }, [d, a, e]);
                    const Y = i.useMemo(() => i.createElement(B.Z, { isTierSwitch: e, priceElements: { ...H, promotionInfo: j }, selectedInterval: z, selectedTier: S }), [e, H, z, S, j]),
                        R = i.useMemo(() => i.createElement(ve, { targetInterval: z, targetTier: S }), [z, S]),
                        W = i.useMemo(() => i.createElement(M, { basicPriceElementsAnnual: O, basicPriceElementsMonth: V, fullAccessPriceElementsAnnual: N, fullAccessPriceElementsMonth: $, selectedInterval: z, selectedTier: S, setSelectedInterval: F }), [O, V, N, $, z, S]),
                        J = u.ZP.isTwitterApp(),
                        K = new URLSearchParams(window.location.search).get("twclid");
                    p((0, Z.q)("ogf5s", "ogf85", K, "rweb.voLandingPage", !0));
                    const Q = "FullAccess" === S ? i.createElement(m().I18NFormatMessage, { $i18n: "f5b357b5" }, H.baseCost, H.baseInterval, H.monthlyTaxLabel, H.affiliateCost, H.affiliateInterval, H.affiliateTaxLabel, i.cloneElement(H.link, null, m().ef7ae9cd)) : i.createElement(i.Fragment, null, i.createElement(m().I18NFormatMessage, { $i18n: "i83d2543" }, H.baseCost, H.baseInterval, H.monthlyTaxLabel, i.cloneElement(H.link, null, m().d3c6b8c9)), i.createElement("br", null), i.createElement("br", null)),
                        X = i.createElement(
                            i.Fragment,
                            null,
                            i.createElement(
                                n.Z,
                                { style: P ? Pe.tierSwitcher : Pe.tierSwitcherMobile },
                                i.createElement(c.Z, {
                                    horizontal: !0,
                                    name: "",
                                    onChange: (e, t) => {
                                        d.scribe({ page: "verified-organizations", section: "welcome", component: "select-tier", element: t, action: "click", data: { referring_page: (0, h.G3)(a.location) } }), I(t);
                                    },
                                    options: U,
                                    switchStyle: !0,
                                    value: S,
                                }),
                            ),
                            i.createElement(q, { selectedInterval: z, selectedPriceElements: { ...H, promotionInfo: j }, selectedTier: S }),
                        );
                    return i.createElement(g.Z, { backButtonType: "close", centerTitle: !0, hideBackButton: J, history: a, title: J ? void 0 : ye }, i.createElement(n.Z, null, i.createElement(n.Z, { style: Ce(G) }, X), i.createElement(n.Z, { style: [G ? Pe.stickyFooter : Pe.footerDesktop, Pe.footer] }, G ? i.createElement(n.Z, { style: Pe.gradient }) : null, k ? i.createElement(n.Z, null, W, i.createElement(o.ZP, { color: "gray700", size: "subtext3", style: Pe.priceLabel }, Q), e ? R : Y) : i.createElement(l.Z.Danger, { headline: Ee }))));
                });
        },
        330430: (e, t, a) => {
            a.r(t), a.d(t, { default: () => y });
            a(136728);
            var i = a(202784),
                n = a(325686),
                r = a(107267),
                s = a(386802),
                c = a(688715),
                o = a(731708),
                l = a(782947),
                d = a(154003),
                p = a(392237),
                m = a(674132),
                u = a.n(m),
                g = a(323265),
                b = a(980407),
                f = a(655352),
                v = a(782826),
                h = a(725516);
            const E = p.default.create((e) => ({ container: { display: "flex", flexDirection: "column", flexGrow: 1, alignItems: "center", paddingTop: e.spaces.space48, paddingBottom: e.spaces.space72, paddingHorizontal: e.spaces.space72 }, twitterIcon: { color: e.colors.brandColor, height: "2em" }, paddingMobile: { paddingHorizontal: e.spaces.space28 }, mainSubtext: { marginTop: e.spaces.space20 }, intervalSelector: { marginTop: e.spaces.space32 }, signupButton: { paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, marginTop: e.spaces.space32, width: "100%" }, learnMoreSection: { marginTop: e.spaces.space32, textAlign: "center" } })),
                y = () => {
                    const e = (0, r.useHistory)(),
                        { isModal: t } = i.useContext(s.Z),
                        a = (0, h.z)(),
                        p = (0, v.G3)(e.location);
                    i.useEffect(() => {
                        a.scribe({ page: "verified-choose", action: "impression" });
                    }, [a]);
                    const [m, y] = i.useState("blue"),
                        Z = (0, c.ju)("https://help.x.com/using-twitter/verified-organizations"),
                        _ = (0, c.ju)("https://help.x.com/using-twitter/twitter-blue"),
                        C = u().d47c0c7c,
                        P = u().hbd31720,
                        w = u().c75a9386,
                        T = u().f75d1806,
                        k = u().g2c0144a,
                        x = u().b916b258,
                        S = u().ab0decc0,
                        I = [
                            { value: "blue", description: u().f75d1806, label: u().ic6012ea, secondaryDescription: u().d8e618ce, reverseLabels: !0 },
                            { value: "vo", description: u().g2c0144a, label: u().dcbccede, secondaryDescription: u().f44ce884, reverseLabels: !0 },
                        ];
                    const z = g.ZP.isTwitterApp(),
                        M = !(0, f.ZP)();
                    return i.createElement(
                        b.Z,
                        { backButtonType: "close", hideBackButton: z, history: e },
                        i.createElement(
                            n.Z,
                            { style: [E.container, t ? void 0 : E.paddingMobile] },
                            i.createElement(o.ZP, { size: "title2", weight: "heavy" }, C),
                            i.createElement(o.ZP, { style: E.mainSubtext }, P),
                            i.createElement(
                                n.Z,
                                { style: E.intervalSelector },
                                i.createElement(l.Z, {
                                    horizontal: !M,
                                    name: "",
                                    onChange: (e, t) => {
                                        y(t);
                                    },
                                    options: I,
                                    value: m,
                                }),
                            ),
                            i.createElement(
                                d.ZP,
                                {
                                    onClick: function () {
                                        a.scribe({ page: "verified-choose", section: "sign-up-selection", component: m, element: "sign-up-selection-button", action: "click" }), "blue" === m ? e.push("/i/premium_sign_up", { referring_page: p }) : e.push("/i/verified-orgs-signup", { referring_page: p });
                                    },
                                    size: "xLarge",
                                    style: E.signupButton,
                                    type: "primaryFilled",
                                },
                                S,
                            ),
                            i.createElement(o.ZP, { style: E.learnMoreSection }, w, " ", i.createElement(o.ZP, { link: _ }, T), " ", x, " ", i.createElement(o.ZP, { link: Z }, k)),
                        ),
                    );
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-c04190a6.b8a9c52a.js.map
