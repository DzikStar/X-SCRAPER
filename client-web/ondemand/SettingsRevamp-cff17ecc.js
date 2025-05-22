"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-cff17ecc"],
    {
        487443: (e, t, a) => {
            a.r(t), a.d(t, { ManageAffiliateBadges: () => $, ManagesAffiliatesQueryRequest: () => Q, default: () => J });
            var r = a(143543),
                n = a(202784),
                i = a(325686),
                s = (a(585488), a(107267)),
                c = a(844685),
                l = a(750410),
                o = a(167630),
                u = a(392237),
                p = a(332920),
                d = a.n(p),
                m = a(652904),
                b = a(736063),
                g = a(301410),
                f = a(725516),
                _ = a(312771),
                y = a(264922),
                E = a(154003),
                h = a(673510),
                v = a(661810),
                Z = a(678773),
                S = a(516951);
            const P = d().ab8089ea,
                C = n.createElement(E.ZP, { icon: n.createElement(Z.default, { "aria-label": P }), testID: "reorder", type: "primaryText" }),
                k = ({ affiliate: e, disabled: t, sortIndex: a }) => {
                    const { name: r, screen_name: s } = e.affiliated_account_results.result?.core || {},
                        c = e.affiliated_account_results.result?.avatar?.image_url || "";
                    return s && c && r && n.createElement(n.Fragment, null, n.createElement(h.ZP, { "aria-checked": !0, avatarShape: "square", avatarSize: "xxLarge", avatarUri: c, decoration: void 0 !== a ? C : void 0, displayMode: "UserCompact", isDisabled: t, name: r, onCellClick: S.Z, screenName: s, userId: "", withInteractiveStyling: !0, withLink: !1 }), 0 === a && n.createElement(i.Z, { style: w.gutter }, n.createElement(v.Z, { spacing: "space2" })));
                },
                w = u.default.create((e) => ({ gutter: { marginHorizontal: e.spaces.space16 } })),
                I = n.memo(k);
            var x = a(716042),
                T = a(731708),
                z = a(782642),
                B = a(445250),
                D = (a(571372), a(658236)),
                A = a(351743),
                R = a.n(A);
            const H = D.Z,
                L = d().e2eac0c4,
                V = d().ef4602ec,
                j = (0, x.W8)(I),
                N = (0, x.JN)(({ isUpdatingAffiliates: e, items: t }) =>
                    n.createElement(
                        i.Z,
                        null,
                        n.createElement(T.ZP, { style: F.gutter, weight: "medium" }, L),
                        t.map((t, a) => n.createElement(j, { affiliate: t, disabled: e, index: a, key: a, sortIndex: a })),
                    ),
                ),
                O = ({ affiliations: e }) => {
                    const [t, a] = n.useState(e),
                        r = (0, f.z)(),
                        i = (0, z.p)(),
                        [s, c] = (() => {
                            const [e, t] = R()(H);
                            return [
                                n.useCallback(
                                    (t) =>
                                        new Promise((a, r) => {
                                            e({
                                                variables: { affiliations: t.map((e) => ({ team: "NotAssigned", affiliated_account: e })) },
                                                onCompleted: ({ managed_affiliations_update: e }, t) => {
                                                    e?.message && r(new Error(e.message)), a(!0);
                                                },
                                                onError: r,
                                            });
                                        }),
                                    [e],
                                ),
                                t,
                            ];
                        })(),
                        l = n.useCallback(
                            ({ newIndex: e, oldIndex: n }) => {
                                r.scribe({ action: "reorder" });
                                const c = (0, B.Z)(t, n, e);
                                a(c),
                                    s(c.map((e) => e.affiliated_account_results.rest_id)).catch(() => {
                                        a(t), i({ text: V });
                                    });
                            },
                            [t, r, s, i],
                        );
                    return n.createElement(N, { isUpdatingAffiliates: c, items: t, onSortEnd: l });
                },
                F = u.default.create((e) => ({ gutter: { marginHorizontal: e.spaces.space16 } })),
                M = n.memo(O),
                G = d().ce70c590,
                U = d().a49e1b2a,
                W = d().e2daf93c,
                X = { context: "MANAGE_AFFILIATE_SETTING" },
                Q = r.Z,
                q = (0, g.z)(Q, { errorConfig: { context: "MANAGE_AFFILIATES_SETTING_CONTEXT" } });
            function $() {
                const e = (0, f.z)(),
                    t = (0, s.useLocation)(),
                    a = (0, s.useHistory)(),
                    r = n.useCallback(() => {
                        a.goBack({ backLocation: "/settings/premium" });
                    }, [a]),
                    u = n.useCallback(() => {
                        e.scribe({ component: "back", action: "navigate" }), r();
                    }, [e, r]),
                    p = n.useCallback(({ data: e, fetchStatus: t, retry: a }) => {
                        if (t === _.ZP.LOADED) {
                            const { affiliations: t } = e?.managed_affiliations || {};
                            return n.createElement(i.Z, { style: Y.container }, n.createElement(c.Z, { subtext: W, text: U }), 1 === t.length ? n.createElement(I, { affiliate: t[0] }) : n.createElement(M, { affiliations: t }));
                        }
                        return t === _.ZP.FAILED ? n.createElement(l.Z, { onRequestRetry: a }) : n.createElement(o.Z, null);
                    }, []);
                return n.createElement(m.Z, null, n.createElement(b.H, { errorConfig: X }, n.createElement(y.Z, { location: t, onBackClick: u, title: G }, n.createElement(q, { fetchPolicy: "network-only", render: p, variables: {} }))));
            }
            const Y = u.default.create((e) => ({ container: { gap: 8 } })),
                J = n.memo((0, f.Z)($, { page: "settings", section: "affiliations" }));
        },
        254789: (e, t, a) => {
            a.d(t, { Z: () => Y });
            var r = a(202784),
                n = a(325686),
                i = a(688715),
                s = a(731708),
                c = a(392237),
                l = a(332920),
                o = a.n(l),
                u = a(503089),
                p = a(849353),
                d = a(311687),
                m = a(443781),
                b = a(736063),
                g = a(337394),
                f = a(321330),
                _ = a(548797),
                y = a(643242),
                E = a(85034),
                h = a(17412),
                v = a(952793),
                Z = a(685731),
                S = a(137070),
                P = a(293084);
            const C = o().a991d9a3,
                k = o().edbb700f,
                w = o().e3f9d219,
                I = o().ba2e82a1,
                x = o().e9884540,
                T = o().bfb879aa,
                z = ({ fromPrice: e, subscription: t }) => {
                    const a = (0, v.hC)("subscriptions_management_billing_label_enabled"),
                        i = (0, S.Z)()[t?.product?.rest_id ? g.v5.premium[t?.product?.rest_id] : null].hashed,
                        c = (0, _.gS)(t, "Discount", { status: "active" }),
                        l = (0, _.gS)(t, "Discount", { status: "pending" }),
                        o = (0, P.Z)(i).web_subscription_product_details,
                        u = (0, v.hC)("subscriptions_management_use_active_price"),
                        p = e ?? (0, Z.Gi)(t.charge_interval, u ? t.prices : o?.prices),
                        d = I(new Date(parseInt(t.next_billing_at?.time_in_millis, 10))),
                        m = p ? (0, Z.d3)(p, !1, t) : "",
                        b = p ? (0, Z.d3)(p, !1, t, !0, !1) : "",
                        f = r.useMemo(() => {
                            let e;
                            if (t.next_billing_at?.time_in_millis) return "Expire" === t.state ? (e = w({ date: d })) : l || (e = C({ date: d })), r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, e);
                        }, [l, t, d]);
                    return r.createElement(n.Z, null, c ? r.createElement(n.Z, { style: D.activeDiscountContainer, testID: "active_discount_info" }, r.createElement(n.Z, { style: D.discountTitleRow }, r.createElement(h.default, { style: D.activeDiscountIcon }), r.createElement(s.ZP, { color: "green900", size: "subtext2", weight: "medium" }, x)), r.createElement(s.ZP, { color: "green900", size: "subtext1", style: D.priceLabel, testID: "stripe-price-info" }, m)) : r.createElement(s.ZP, { color: "gray1100", size: "subtext1", style: D.priceLabel, testID: "stripe-price-info" }, m), l ? r.createElement(n.Z, { style: D.pendingDiscountContainer, testID: "pending_discount_info" }, r.createElement(n.Z, { style: D.discountTitleRow }, r.createElement(h.default, { style: D.pendingDiscountIcon }), r.createElement(s.ZP, { color: "gray900", size: "subtext2", weight: "medium" }, T)), r.createElement(s.ZP, { color: "gray900", size: "subtext1", style: D.priceLabel, testID: "stripe-price-info" }, b), t.next_billing_at?.time_in_millis ? r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, k({ date: d })) : null) : null, a ? f : null);
                },
                B = (e) => r.createElement(b.H, { errorConfig: { context: "manage-subscription-price-info" } }, r.createElement(z, e)),
                D = c.default.create((e) => ({ priceLabel: { marginBottom: e.spaces.space8 }, activeDiscountContainer: { backgroundColor: e.colors.green100, borderRadius: e.borderRadii.medium, padding: e.spaces.space8, gap: e.spaces.space8, marginVertical: e.spaces.space8 }, pendingDiscountContainer: { borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, backgroundColor: e.colors.gray100, borderStyle: "dashed", borderRadius: e.borderRadii.medium, padding: e.spaces.space8, gap: e.spaces.space8, marginTop: e.spaces.space8 }, activeDiscountIcon: { color: e.colors.green900 }, pendingDiscountIcon: { color: e.colors.gray900 }, discountTitleRow: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center", marginBottom: e.spaces.space4 } })),
                A = o().e122fb3f,
                R = o().be103b84,
                H = o().ace43720,
                L = o().ba2e82a1,
                V = o().c8f18aa4,
                j = o().a341d1f7,
                N = o().e4aaf0f8,
                O = o().e5170220,
                F = o().j6d6b66e,
                M = o().fae1751f,
                G = o().fecebd4c,
                U = o().h201c4c2,
                W = o().i8385a2c,
                X = o().h80834de,
                Q = o().baf97716,
                q = o().ae864b69,
                $ = ({ subscription: e, viewer: t }) => {
                    const { label: a } = (0, f.Z)(),
                        { featureSwitches: c, userClaims: l } = (0, m.QZ)(),
                        { fromPrice: o, status: b, targetProductSku: h } = (0, E.Z)(e?.product?.rest_id || "", !0),
                        v = "SwitchScheduled" === b,
                        Z = h ? g.St[g.v5.premium[h]] : null,
                        S = (0, _.gS)(e, "FreeTrial", { status: "active" }),
                        P = e?.payment_source === y.H.Twitter,
                        C = e?.payment_source === y.H.Ads,
                        k = e?.payment_source === y.H.Gift,
                        w = !!e?.payment_source && e?.payment_source !== y.H.Stripe && l.isAnyPremiumSubscriber(),
                        I = e?.payment_source === y.H.TPay || e?.payment_source === y.H.Twitter,
                        x = c.getStringValue("subscriptions_gifting_help_url") || (0, i.ju)("https://help.x.com/forms/paid-features/general"),
                        T = r.useMemo(() => {
                            if (e?.payment_source && e?.payment_source !== y.H.Stripe) return e?.payment_source === y.H.AppleAppStore ? U : e?.payment_source === y.H.GooglePlay ? W : X;
                        }, [e]),
                        z = r.useCallback(() => (P ? r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, N, " ", r.createElement(s.ZP, { link: "https://help.x.com/forms/paid-features/general" }, G)) : C ? r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, O) : k ? r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, F, " ", r.createElement(s.ZP, { link: x }, G)) : r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, M({ mobilePlatform: T }))), [x, C, P, k, T]);
                    return r.createElement(n.Z, { style: J.container }, r.createElement(n.Z, { style: J.card }, r.createElement(n.Z, { style: J.header }, r.createElement(s.ZP, { size: "headline2", weight: "medium" }, a), r.createElement(n.Z, { bold: !0, style: J.label }, "Expire" === e?.state && e.payment_source !== y.H.Gift ? r.createElement(u.default, { style: J.expiringIcon }) : r.createElement(p.default, { style: J.activeIcon }), r.createElement(s.ZP, { align: "center", selectable: !1, size: "body", weight: "medium" }, "Expire" === e?.state && e.payment_source !== y.H.Gift ? H : R))), "Stripe" === e?.payment_source ? r.createElement(B, { fromPrice: v ? o : null, subscription: e }) : null, v ? r.createElement(n.Z, { style: J.callout }, r.createElement(d.default, { style: J.iconClock }), r.createElement(s.ZP, { size: "subtext1" }, q({ tierName: Z, date: L(new Date(parseInt(e?.next_billing_at?.time_in_millis, 10))) }))) : null, "Expire" === e?.state ? r.createElement(s.ZP, { color: "gray700", size: "subtext2", style: J.expiringSubscriptionLabel }, Q) : null, w || I ? z() : null, S ? r.createElement(s.ZP, { color: "gray700", size: "subtext2", style: J.freeTrialLabel }, A({ endDate: L(new Date(parseInt(S?.ends_at_msec, 10))) })) : null, l.isVerifiedOrgAffiliate() ? r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, j({ organization: t?.highlightedLabel?.description })) : l.isVerifiedOrg() || l.isLegacyVerifiedOrg() ? r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, V) : null));
                },
                Y = (e) => r.createElement(b.H, { errorConfig: { context: "stripe-active-subscription-info" } }, r.createElement($, e)),
                J = c.default.create((e) => ({ container: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterHorizontal }, card: { borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray50, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterHorizontal }, label: { flexDirection: "row", minHeight: e.spaces.space32, alignItems: "center", flexShrink: 1 }, activeIcon: { marginEnd: e.spaces.space4, color: e.colors.primary }, expiringIcon: { marginEnd: e.spaces.space4 }, header: { justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space4 }, callout: { flexDirection: "row", padding: e.spaces.space8, backgroundColor: e.colors.blue50, borderRadius: e.borderRadii.small, gap: e.spaces.space8, alignItems: "center", marginTop: e.spaces.space8 }, freeTrialLabel: { marginTop: e.spaces.space8 }, expiringSubscriptionLabel: { marginTop: e.spaces.space8 }, iconClock: { color: e.colors.text, minWidth: 16 } }));
        },
        386255: (e, t, a) => {
            a.r(t), a.d(t, { ManageSubscriptionScreen: () => N, default: () => O });
            var r = a(807896),
                n = a(202784),
                i = a(325686),
                s = a(107267),
                c = a(530732),
                l = a(928088),
                o = a(731708),
                u = a(392237),
                p = a(332920),
                d = a.n(p),
                m = a(191796),
                b = a(443781),
                g = a(652904),
                f = a(736063),
                _ = a(952793),
                y = a(177210),
                E = a(670094),
                h = a(147595),
                v = a(811574),
                Z = a(548797),
                S = a(643242),
                P = a(275158),
                C = a(264922),
                k = a(254789),
                w = a(71620),
                I = a(668214),
                x = a(818581),
                T = a(919022);
            const z = (0, I.Z)()
                    .propsFromState(() => ({ viewerUser: T.ZP.selectViewerUser, userPreferences: x.kQ }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, w.zr)("AFFILIATES_SCREEN"), fetchUserPreferencesIfNeeded: x.xQ }))
                    .withAnalytics({ page: "subscriptions", section: "management" }),
                B = d().ib35705e,
                D = d().de9f111a,
                A = d().d5839f9e,
                R = d().a840c22c,
                H = d().aaa798fc,
                L = d().e31456f8,
                V = d().a7c4ecea,
                j = d().h15cc518;
            function N(e) {
                const { analytics: t, createLocalApiErrorHandler: a, fetchUserPreferencesIfNeeded: u, viewerUser: p } = e,
                    d = (0, _.hC)("subscriptions_management_query_active_price"),
                    f = (0, v.Z)({ fetchPrices: d }),
                    w = (0, h.R)(f),
                    I = (0, s.useLocation)(),
                    { userClaims: x } = n.useContext(b.rC),
                    T = w?.payment_source,
                    z = (0, y.Z)({ returnUrl: P.d9, originProduct: "TwitterBlue" });
                n.useEffect(() => {
                    u().catch(a({ ...(0, E.d)(), showToast: !0 }));
                }),
                    n.useEffect(() => {
                        t.scribe({ action: "impression" });
                    }, [t]);
                const N = x.isAnyPremiumSubscriber(),
                    O = (0, Z.gS)(w, "FreeTrial", { status: "active" }),
                    M = n.useCallback(() => {
                        t.scribe({ component: "expiring-sub-manage-subscription", action: "click" }), z?.();
                    }, [t, z]);
                return n.createElement(
                    g.Z,
                    null,
                    n.createElement(
                        C.Z,
                        { location: I, title: B },
                        N ? n.createElement(k.Z, { subscription: w, viewer: p }) : null,
                        n.createElement(
                            i.Z,
                            null,
                            (() => {
                                const e = !!T && T === S.H.Stripe && N,
                                    t = "Expire" === w?.state,
                                    a = ["premium-basic", "premium-basic-test", "premium-basic-sandbox", "rogue-one-prod-2", "rogue-one-test-2-1", "rogue-one-sandbox-2"],
                                    s = ({ description: e, isExternal: t, label: a, ...s }) => n.createElement(c.Z, (0, r.Z)({}, s, { disabled: !z, style: F.manageSubscriptionInteraction }), n.createElement(l.Z, null, n.createElement(i.Z, { style: F.manageSubscriptionSection }, n.createElement(i.Z, { style: F.manageSubscriptionSectionBody }, n.createElement(o.ZP, { color: "blue500", weight: "medium" }, a), n.createElement(o.ZP, { color: "gray700", size: "subtext2" }, e)), t ? n.createElement(m.default, { style: F.goToSubscriptionPortalIcon }) : null)));
                                if (e) {
                                    const e = a.find((e) => e === w?.product?.rest_id) ? { title: H, desc: V } : { title: L, desc: j };
                                    return n.createElement(n.Fragment, null, O || t ? null : n.createElement(s, { description: e.desc, label: e.title, link: { pathname: "/i/premium_tier_switch", state: { product: "BlueVerifiedPlus" } }, role: "button", testID: "tier-switch-link" }), t ? null : n.createElement(s, { description: A, label: x.isVerifiedOrg() || x.isVerifiedOrgAffiliate() ? R : D, link: "/settings/subscription/manage" }), t ? n.createElement(s, { description: A, isExternal: !0, label: D, onClick: M }) : null);
                                }
                                return null;
                            })(),
                        ),
                    ),
                );
            }
            const O = z((e) => n.createElement(f.H, { errorConfig: { context: "manage_subscription_screen" } }, n.createElement(N, e))),
                F = u.default.create((e) => ({ manageSubscriptionSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, manageSubscriptionSectionBody: { flexShrink: 1 }, offPlatformSubscriptionSection: { flexDirection: "column", justifyContent: "space-between" }, goToSubscriptionPortalIcon: { color: e.colors.gray700, flexShrink: 0 }, manageSubscriptionInteraction: { cursor: "pointer" }, blueVerifiedCalloutWrapper: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, newLabelWrapper: { flexDirection: "row" }, newLabel: { backgroundColor: e.colors.blue50, color: e.colors.primary900, marginEnd: 10, borderRadius: e.borderRadii.xLarge, padding: 10 }, iconThumbnail: { marginEnd: e.spaces.space8 }, verifiedOrganizationsSubscriptionDescription: { marginTop: e.spaces.space8 }, upgradeDowngradeComingSoonLabel: { marginTop: e.spaces.space16, marginStart: e.spaces.space16, marginBottom: e.spaces.space12 } }));
        },
        185874: (e, t, a) => {
            a.r(t), a.d(t, { default: () => be });
            var r = a(202784),
                n = a(443781),
                i = a(952793),
                s = a(177210),
                c = a(337394),
                l = a(147595),
                o = a(811574),
                u = a(548797),
                p = a(685731),
                d = a(293115),
                m = a(275158),
                b = a(137070),
                g = a(293084),
                f = a(325686),
                _ = a(107267),
                y = a(731708),
                E = a(154003),
                h = a(392237),
                v = a(332920),
                Z = a.n(v),
                S = a(980407),
                P = a(725405);
            const C = [
                    { label: Z().iccac88e, subscriptions: { BlueVerified: !0 } },
                    { label: Z().d7a124d8, subscriptions: { BlueVerifiedPlus: !0 } },
                    { label: Z().d2d22c36, subscriptions: { BlueVerifiedPlus: !0 } },
                    { label: Z().j249b1d4, subscriptions: { PremiumBasic: !0, BlueVerifiedPlus: !0, BlueVerified: !0 } },
                    { label: Z().c4a37384, subscriptions: { PremiumBasic: !0 } },
                    { label: Z().fb656858, subscriptions: { PremiumBasic: !0 } },
                    { label: Z().faaec212, subscriptions: { BlueVerifiedPlus: !0, BlueVerified: !0 } },
                    { label: Z().fb3c7168, subscriptions: { PremiumBasic: !0, BlueVerifiedPlus: !0, BlueVerified: !0 } },
                    { label: Z().b346bc12, subscriptions: { BlueVerifiedPlus: !0, BlueVerified: !0 } },
                ],
                k = Z().af66a072,
                w = Z().a092f1ba,
                I = Z().g96c7f48,
                x = ({ activeProductCategory: e, activeSubscription: t, churnPreventionOfferAvailable: a, goToStripePortal: n, pendingDiscount: i, setCurrentFlowStep: s }) => {
                    const c = (0, _.useHistory)(),
                        l = (0, P.Z)(),
                        o = !!(0, u.gS)(t, "FreeTrial", { status: "active" }),
                        p = r.useCallback(() => {
                            l.scribe({ action: "click", element: "change_tier" });
                        }, [l]),
                        d = r.useCallback(() => {
                            i ? s("PendingOfferStep") : a ? s("OfferStep") : (l.scribe({ action: "click", element: "continue_to_cancel" }), n && n());
                        }, [l, n, a, s, i]);
                    return r.createElement(
                        S.Z,
                        { backButtonType: "back", hideBackButton: !1, history: c, onBackClick: () => s("OptionsStep") },
                        r.createElement(
                            f.Z,
                            { style: T.root },
                            r.createElement(
                                f.Z,
                                { style: T.content },
                                r.createElement(y.ZP, { align: "left", size: "title1", weight: "heavy" }, k),
                                r.createElement(
                                    f.Z,
                                    { role: "list", style: T.list },
                                    C.filter(({ subscriptions: t }) => t.hasOwnProperty(e)).map(({ label: e }) => r.createElement(y.ZP, { key: e, role: "listitem", style: T.listItem }, e)),
                                ),
                                o ? null : r.createElement(E.ZP, { link: "/i/premium_tier_switch", onPress: p, size: "xLarge", style: T.button, type: "primaryOutlined" }, I),
                                r.createElement(E.ZP, { disabled: !n, onPress: d, size: "xLarge", style: T.button, type: "destructiveFilled" }, w),
                            ),
                        ),
                    );
                },
                T = h.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto" }, button: { marginVertical: e.spaces.space8 }, list: { marginVertical: e.spaces.space20 }, listItem: { display: "list-item", listStyle: "disc", listStylePosition: "inside", marginVertical: e.spaces.space8 } }));
            var z = a(40610),
                B = a(167630),
                D = a(913973),
                A = a(125498),
                R = a(199087),
                H = a(336629);
            const L = Z().je8143e1,
                V = Z().j5847735,
                j = Z().a092f1ba,
                N = Z().j88ba18e,
                O = Z().da3431f9,
                F = Z().i6fbfc72,
                M = Z().f1bc6309,
                G = Z().ef4602ec,
                U = Z().fdb7b52a,
                W = ({ activeProductCategory: e, activeSubscription: t, activeTierPrice: a, goToStripePortal: n, offer: s, setCurrentFlowStep: l }) => {
                    const o = (0, _.useHistory)(),
                        u = (0, P.Z)(),
                        [p, d] = (0, R.Z)(),
                        [m, b] = r.useState(!1),
                        g = (0, i.hC)("subscriptions_marketing_page_include_tax_enabled");
                    r.useEffect(() => {
                        u.scribe({ component: "churn_prevent_offer", action: "impression" });
                    }, [u]);
                    const h = r.useCallback(() => {
                            u.scribe({ action: "click", component: "churn_prevent_offer", element: "continue_to_cancel" }), n && n();
                        }, [u, n]),
                        v = c.St[e],
                        C = r.useMemo(() => {
                            const e = { percentage: s.metadata.percent_off, productName: v, duration: s.metadata.duration_in_interval };
                            return "Month" === a?.charge_interval ? L(e) : V(e);
                        }, [a, s, v]),
                        k = r.useCallback(() => {
                            b(!1),
                                u.scribe({ component: "churn_prevent_offer", element: "redeem_button", action: "click" }),
                                p({ offerProgramId: s.program_id, productId: t?.product?.rest_id ?? "", redeemOfferType: "CancellationRetention" })
                                    .then((e) => {
                                        "WebPaymentsRedeemOfferResultSuccess" === e.redeem_offer?.__typename ? (u.scribe({ component: "churn_prevent_offer", action: "success" }), l("OfferSuccessStep")) : (b(!0), u.scribe({ component: "churn_prevent_offer", action: "error" }));
                                    })
                                    .catch(() => {
                                        b(!0), u.scribe({ component: "churn_prevent_offer", action: "failure" });
                                    });
                        }, [p, l, t, s, u]);
                    return r.createElement(
                        S.Z,
                        { backButtonType: "back", hideBackButton: !1, history: o, onBackClick: () => l("CancelStep") },
                        r.createElement(
                            f.Z,
                            { style: X.root },
                            r.createElement(
                                f.Z,
                                { style: X.content },
                                r.createElement(y.ZP, { align: "left", size: "title1", weight: "heavy" }, C),
                                r.createElement(y.ZP, { style: X.description }, O({ productName: v })),
                                r.createElement(
                                    f.Z,
                                    { style: X.list },
                                    r.createElement(
                                        f.Z,
                                        { style: X.listItem },
                                        r.createElement(D.default, null),
                                        r.createElement(
                                            y.ZP,
                                            null,
                                            ((e, t, a) => {
                                                const n = (0, H.T)({ price: e, annualPriceMonthly: !1, includeTax: a }),
                                                    i = (0, H.T)({ price: e, annualPriceMonthly: !1, includeTax: a, percentOff: t.metadata.percent_off }),
                                                    s = { strike: r.createElement(y.ZP, { style: { textDecorationLine: "line-through" }, testID: "strikethrough-price" }), green: r.createElement(y.ZP, { color: "green500", testID: "discount-price", weight: "medium" }) },
                                                    c = { duration: t.metadata.duration_in_interval ?? 0, standardPrice: n, discountedPrice: i };
                                                return "Year" === e.charge_interval ? r.createElement(Z().I18NFormatMessage, { $i18n: "e9dc8a25", duration: c.duration }, r.cloneElement(s.strike, null, Z().af283938({ standardPrice: c.standardPrice })), r.cloneElement(s.green, null, Z().c284b365({ discountedPrice: c.discountedPrice }))) : r.createElement(Z().I18NFormatMessage, { $i18n: "f8a9cbb7", duration: c.duration }, r.cloneElement(s.strike, null, Z().e2673372({ standardPrice: c.standardPrice })), r.cloneElement(s.green, null, Z().jd2dc103({ discountedPrice: c.discountedPrice })));
                                            })(a, s, g),
                                        ),
                                    ),
                                    r.createElement(f.Z, { style: X.listItem }, r.createElement(D.default, null), r.createElement(y.ZP, null, F)),
                                    r.createElement(f.Z, { style: X.listItem }, r.createElement(D.default, null), r.createElement(y.ZP, null, M({ productName: v }))),
                                    r.createElement(y.ZP, { style: X.disclaimer }, U),
                                ),
                                m ? r.createElement(z.Z.Danger, { text: G }) : null,
                                r.createElement(E.ZP, { disabled: d, icon: d ? void 0 : r.createElement(A.default, null), onPress: k, size: "xLarge", style: X.button, type: "primaryOutlined" }, d ? r.createElement(B.Z, null) : N),
                                r.createElement(E.ZP, { disabled: !n, onPress: h, size: "xLarge", style: X.button, type: "destructiveFilled" }, j),
                            ),
                        ),
                    );
                },
                X = h.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto" }, button: { marginVertical: e.spaces.space8 }, list: { gap: e.spaces.space12, marginBottom: e.spaces.space20 }, listItem: { flexDirection: "row", gap: e.spaces.space4 }, description: { marginVertical: e.spaces.space16 }, disclaimer: { marginTop: e.spaces.space16 } }));
            a(136728);
            const Q = Z().c6150942,
                q = Z().fdb7b52a,
                $ = Z().a905eac6,
                Y = (e) => {
                    const t = (0, _.useHistory)();
                    return r.createElement(S.Z, { backButtonType: "close", hideBackButton: !1, history: t, onBackClick: () => t.push("/i/premium") }, r.createElement(f.Z, { style: J.root }, r.createElement(f.Z, { style: J.content }, r.createElement(y.ZP, { align: "left", size: "title1", weight: "heavy" }, Q), r.createElement(y.ZP, { align: "left" }, q), r.createElement(E.ZP, { link: "/i/premium", size: "xLarge", style: J.button, type: "primaryFilled" }, $))));
                },
                J = h.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto", gap: e.spaces.space16 }, button: { marginVertical: e.spaces.space8 } }));
            var K = a(525754);
            const ee = Object.freeze({ paymentMethod: "paymentMethod", billingInformation: "billingInformation", cancel: "cancel" }),
                te = Z().j6083a1c,
                ae = Z().c1df579e,
                re = [
                    { label: Z().b4fa4630, value: ee.paymentMethod, containerStyle: { paddingHorizontal: 0 } },
                    { label: Z().ef0dfa5a, value: ee.billingInformation, containerStyle: { paddingHorizontal: 0 } },
                    { label: Z().f5b352ec, value: ee.cancel, containerStyle: { paddingHorizontal: 0 } },
                ],
                ne = ({ goToStripePortal: e, setCurrentFlowStep: t }) => {
                    const a = (0, _.useHistory)(),
                        [n, i] = r.useState(),
                        s = (0, P.Z)(),
                        c = r.useCallback((e, t) => {
                            i(t);
                        }, []),
                        l = r.useCallback(() => {
                            switch (n) {
                                case ee.paymentMethod:
                                    return s.scribe({ action: "next", element: "change_payment_method" }), void (e && e());
                                case ee.billingInformation:
                                    return s.scribe({ action: "next", element: "change_billing_information" }), void (e && e());
                                case ee.cancel:
                                    return s.scribe({ action: "next", element: "cancel_subscription" }), void t("CancelStep");
                                default:
                                    return;
                            }
                        }, [s, e, t, n]);
                    return r.createElement(S.Z, { backButtonType: "close", hideBackButton: !1, history: a, onBackClick: () => a.goBackThroughModals() }, r.createElement(f.Z, { style: ie.root }, r.createElement(f.Z, { style: ie.content }, r.createElement(y.ZP, { size: "title2", weight: "heavy" }, te), r.createElement(f.Z, { style: ie.radio }, r.createElement(K.Z, { name: "editOption", onChange: c, options: re, value: n })), r.createElement(E.ZP, { disabled: !n || !e, onPress: l, size: "xLarge", style: ie.button, type: "primaryFilled" }, ae))));
                },
                ie = h.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, radio: { marginBottom: e.spaces.space24 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto" }, button: { marginVertical: e.spaces.space8 }, subscriptionDetails: { marginVertical: e.spaces.space16 }, marginBottom: { marginBottom: e.spaces.space8 }, currentPlanContent: { backgroundColor: e.colors.gray50, padding: e.spaces.space8, borderRadius: e.borderRadii.medium, width: "100%" } }));
            var se = a(125363),
                ce = a(919022),
                le = a(254789);
            const oe = Z().j317d958,
                ue = Z().a46e42d2,
                pe = Z().a092f1ba,
                de = ({ activeSubscription: e, goToStripePortal: t, pendingDiscount: a }) => {
                    const n = (0, _.useHistory)(),
                        i = (0, P.Z)(),
                        s = (0, se.v9)(ce.ZP.selectViewerUser),
                        c = r.useCallback(() => {
                            i.scribe({ action: "click", component: "pending_offer_callout", element: "continue_to_cancel" }), t && t();
                        }, [i, t]);
                    return r.createElement(S.Z, { backButtonType: "close", hideBackButton: !1, history: n }, r.createElement(f.Z, { style: me.root }, r.createElement(f.Z, { style: me.content }, r.createElement(y.ZP, { align: "left", size: "title1", weight: "heavy" }, oe), r.createElement(le.Z, { subscription: e, viewer: s }), r.createElement(E.ZP, { link: "/i/premium", size: "xLarge", style: me.button, type: "primaryOutlined" }, ue), r.createElement(E.ZP, { disabled: !t, onPress: c, size: "xLarge", style: me.button, type: "destructiveFilled" }, pe))));
                },
                me = h.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto", gap: e.spaces.space16 }, button: { marginVertical: e.spaces.space8 } }));
            function be(e) {
                const { featureSwitches: t } = (0, n.QZ)(),
                    a = (0, b.Z)(),
                    f = (0, i.hC)("subscriptions_management_query_active_price"),
                    _ = (0, o.Z)({ fetchPrices: f }),
                    y = (0, l.R)(_),
                    E = y?.product?.rest_id ? c.v5.premium[y?.product?.rest_id] : null,
                    h = (0, u.gS)(y, "Discount", { status: "pending" }),
                    v = a[E].hashed,
                    Z = (0, g.Z)(v, { moment: "CancelSubscription" }).web_subscription_product_details,
                    S = (0, i.hC)("subscriptions_management_use_active_price"),
                    P = Z ? (0, p.Gi)(y?.charge_interval, y?.prices) : null,
                    C = Z ? (0, p.Gi)(y?.charge_interval, Z.prices) : null,
                    k = S ? P : C,
                    w = C ? (0, p.fS)(C, !0, !1) : null,
                    I = !!w && t.isTrue("subscriptions_offers_churn_prevention_enabled"),
                    [T, z] = r.useState("OptionsStep"),
                    B = (0, s.Z)({ returnUrl: m.d9, originProduct: "TwitterBlue" });
                if (!E || !y) return null;
                return r.createElement(
                    d.nO,
                    { namespace: { page: "subscriptions_manage" } },
                    (() => {
                        switch (T) {
                            case "OptionsStep":
                                return r.createElement(ne, { goToStripePortal: B, setCurrentFlowStep: z });
                            case "CancelStep":
                                return r.createElement(x, { activeProductCategory: E, activeSubscription: y, activeTierPrice: k, churnPreventionOfferAvailable: I, goToStripePortal: B, pendingDiscount: h, setCurrentFlowStep: z });
                            case "PendingOfferStep":
                                return r.createElement(de, { activeSubscription: y, goToStripePortal: B, pendingDiscount: h });
                            case "OfferStep":
                                return w && k ? r.createElement(W, { activeProductCategory: E, activeSubscription: y, activeTierPrice: k, goToStripePortal: B, offer: w, setCurrentFlowStep: z }) : null;
                            case "OfferSuccessStep":
                                return r.createElement(Y, null);
                            default:
                                return null;
                        }
                    })(),
                );
            }
        },
        195210: (e, t, a) => {
            a.r(t), a.d(t, { default: () => K, monetizationSettingsQuery: () => X });
            var r = a(56301),
                n = a(202784),
                i = a(325686),
                s = (a(585488), a(107267)),
                c = a(688715),
                l = a(154003),
                o = a(392237),
                u = a(332920),
                p = a.n(u),
                d = a(491831),
                m = a(856151),
                b = a(711223),
                g = a(462770),
                f = a(199213),
                _ = a(469149),
                y = a(92235),
                E = a(534763),
                h = a(698537),
                v = a(443781),
                Z = a(652904),
                S = a(883229),
                P = a(725516),
                C = a(535338),
                k = a(264922),
                w = a(873959),
                I = a(277660),
                x = a.n(I),
                T = a(731708);
            const z = p().c9b82b4c,
                B = p().ibb5e1c8,
                D = p().b255df58,
                A = p().b3f834c8,
                R = p().i14be2c6,
                H = { Approved: z, NotStarted: null, Rejected: B, Submitted: D, Waitlisted: A },
                L = w.Z,
                V = ({ viewer: e }) => {
                    const t = x()(L, e),
                        a = !!t?.is_active_creator ? R : H[t?.user_results?.result?.super_follows_application_status || "NotStarted"];
                    return n.createElement(T.ZP, { color: "gray700", size: "subtext2" }, a);
                },
                j = p().d299431c,
                N = p().d7b51c68,
                O = p().f66d24be,
                F = p().i8132774,
                M = p().j087774e,
                G = p().a1222584,
                U = (0, c.ju)("https://help.x.com/using-twitter/creator-dashboard"),
                W = { context: "MONETIZATION_SETTINGS" },
                X = r.Z,
                Q = () => n.createElement(i.Z, { style: J.monetizationOptions }, n.createElement(y.ZP, { Icon: d.default, decoration: n.createElement(h.Z, { type: h.j.Crown }), header: N, iconColor: "plum500", link: "/settings/superfollows", primaryText: F })),
                q = () => n.createElement(i.Z, { style: J.monetizationOptions }, n.createElement(y.ZP, { Icon: m.default, decoration: n.createElement(h.Z, { type: h.j.Award }), header: M, link: "/settings/awards", primaryText: G })),
                $ = () => {
                    const { featureSwitches: e } = n.useContext(v.rC),
                        t = e.isTrue("creator_monetization_web_tips_onboarding_enabled"),
                        a = e.isTrue("creator_monetization_web_tips_dashboard_enabled"),
                        { viewer: r } = (0, C.p)(X, { awardsEnabled: a }),
                        i = !!r.is_active_creator,
                        s = r.user_results.result,
                        c = s.super_follows_application_status || "NotStarted",
                        l = a && s.award_eligible,
                        o = 0 === s.awards_eligibility?.length,
                        u = e.isTrue("responsive_web_stripe_account_creation_enabled") ? s : s && i;
                    return n.createElement(n.Fragment, null, u ? n.createElement(f.Z, { stripeStatus: s.stripe_account_status, type: "earnings", user: s }) : null, "NotStarted" === c ? n.createElement(Q, null) : n.createElement(_.Z, { description: i ? null : n.createElement(V, { viewer: r }), isActiveCreator: i, user: s }), o && t && !l ? n.createElement(q, null) : n.createElement(g.Z, { user: s }));
                },
                Y = () => {
                    const e = n.useMemo(() => ({ type: "CustomRetry", content: () => n.createElement(E.H, { Icon: d.default, description: null, iconColor: "plum500", label: N, link: "/settings/superfollows" }) }), []);
                    return n.createElement(S.N, { errorConfig: W, fallback: e }, n.createElement(n.Suspense, { fallback: null }, n.createElement($, null)));
                },
                J = o.default.create((e) => ({ monetizationOptions: { margin: e.spaces.space16 }, infoIconGray: { color: e.colors.gray300 } })),
                K = n.memo(
                    (0, P.Z)(
                        () => {
                            const e = (0, s.useLocation)(),
                                t = () => n.createElement(l.ZP, { "aria-label": O, icon: n.createElement(b.default, null), link: U, type: "primaryText" });
                            return n.createElement(Z.Z, null, n.createElement(k.Z, { location: e, rightControl: n.createElement(t, null), screenType: "primaryDetail", title: j }, n.createElement(Y, null)));
                        },
                        { page: "settings", section: "monetization" },
                    ),
                );
        },
        934410: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ee });
            var r = a(807896),
                n = (a(136728), a(202784)),
                i = a(325686),
                s = a(107267),
                c = a(688715),
                l = a(731708),
                o = a(868634),
                u = a(154003),
                p = a(40610),
                d = a(392237),
                m = a(332920),
                b = a.n(m),
                g = a(711223),
                f = a(130919),
                _ = a(281629),
                y = a(443781),
                E = a(652904),
                h = a(883229),
                v = a(952793),
                Z = a(725516),
                S = a(615027),
                P = a(264922),
                C = a(940289),
                k = a(599974),
                w = a(620243),
                I = a(698579);
            const x = b().d299431c,
                T = b().f66d24be,
                z = b().fd74390a,
                B = (0, c.ju)("https://help.x.com/using-twitter/creator-dashboard"),
                D = { context: "MONETIZATION_SETTINGS" },
                A = b().e8dc82e2,
                R = b().c12c5eb6,
                H = b().j53f5eb0,
                L = b().e9c1273a,
                V = b().jd176c82,
                j = b().d6ff74ca,
                N = b().e89cdac0,
                O = b().dd7a54b4,
                F = b().c747df1c,
                M = b().jff3ab68,
                G = b().j2876824,
                U = b().ebd06fb0,
                W = b().f65b960c,
                X = b().i4a1e936,
                Q = b().f5931b6a,
                q = { appealLink: n.createElement(l.ZP, { link: (0, c.ju)("https://help.x.com/using-twitter/creator-ads-revenue-sharing") }) },
                $ = { appealLink: n.createElement(l.ZP, { link: (0, c.ju)("https://help.x.com/using-x/creator-revenue-sharing") }) };
            function Y() {
                const e = (0, s.useLocation)(),
                    t = (0, v.hC)("super_follow_web_application_enabled"),
                    a = (0, v.hC)("responsive_web_ad_revenue_sharing_setup_enabled"),
                    c = (0, v.hC)("subscriptions_upsells_monetization_redesign_enabled"),
                    d = (0, v.hC)("responsive_web_ad_revenue_sharing_url_update_enabled"),
                    { userClaims: m } = (0, y.QZ)(),
                    E = m.isAnyPremiumSubscriber(),
                    h = (0, k.Z)(),
                    { stripe_connect_account: Z, verification_info: D, verified_program_application_status: Y, verified_program_eligibility: J, verified_user_profiles: ee } = (0, w.Z)(),
                    te = ee?.super_follows_user_profile?.is_active,
                    ae = ee?.ad_revenue_sharing_user_profile?.is_active,
                    re = Y?.super_follows_application_status || "NotStarted",
                    ne = Y?.ad_revenue_sharing_application_status || "NotStarted",
                    ie = Y?.rejected_super_follow_can_re_apply || !1,
                    se = D?.identity_verification_status,
                    ce = se === f.t.IdentityVerified,
                    le = !1 === ae && (ee?.ad_revenue_sharing_user_profile?.inactive_reasons || []).find((e) => "FlaggedByReview" === e.inactive_reason_type),
                    oe = "NotStarted" === Z?.status || "Incomplete" === Z?.status,
                    ue = oe && ((a && ae) || (t && te)),
                    pe = n.useMemo(() => J?.super_follows_eligibility || [], [J]),
                    de = "PendingIdv" === re,
                    me = n.useMemo(() => J?.ad_revenue_sharing_eligibility || [], [J]),
                    be = "PendingIdv" === ne,
                    ge = ae && !ce,
                    fe = (te || "NotStarted" !== re) && !ce,
                    _e = "Completed" === Z?.status,
                    ye = de || be || ge || fe,
                    Ee = ye && se === f.t.CanVerifyIdentity,
                    he = (0, C.isPendingStatus)(e) && ye && se === f.t.PendingResult,
                    ve = n.useMemo(() => {
                        const e = [];
                        return (te || ("NotStarted" !== re && "PendingIdv" !== re && "Rejected" !== re)) && e.push({ ...(0, I.Xb)({ id: I.XS.subscriptions, isActive: !!te, eligibility: pe, applicationStatus: re, pendingIdv: !ce, idvStatus: se, revShareUpdateEnabled: d, rejectedCreatorCanReapply: ie }) }), ae && !oe && e.push((0, I.Xb)({ id: I.XS.adRev, isActive: !0, eligibility: me, applicationStatus: "Approved", pendingIdv: !ce, idvStatus: se, revShareUpdateEnabled: d, rejectedCreatorCanReapply: ie })), e;
                    }, [ae, oe, te, re, pe, me, se, ce, d, ie]),
                    Ze = n.useMemo(() => {
                        const e = [];
                        return !te && t && ("NotStarted" === re || "PendingIdv" === re || "Rejected" === re) && e.push((0, I.Xb)({ id: I.XS.subscriptions, isActive: !1, eligibility: pe, applicationStatus: re, pendingIdv: de, idvStatus: se, revShareUpdateEnabled: d, rejectedCreatorCanReapply: ie })), null == ae && a ? e.push((0, I.Xb)({ id: I.XS.adRev, isActive: !1, eligibility: me, applicationStatus: ne, pendingIdv: be, idvStatus: se, revShareUpdateEnabled: d, rejectedCreatorCanReapply: ie })) : ae && oe && e.push((0, I.Xb)({ id: I.XS.adRev, isActive: !1, eligibility: me, applicationStatus: ne, isPayoutSetupIncomplete: oe, pendingIdv: !ce, idvStatus: se, revShareUpdateEnabled: d, rejectedCreatorCanReapply: ie })), e;
                    }, [a, se, be, de, ae, oe, te, t, ce, re, ne, me, pe, d, ie]),
                    Se = 0 === ve.length && !t && !a,
                    Pe = n.useCallback((e) => n.createElement(i.Z, { style: K.programHeader }, n.createElement(l.ZP, { size: "headline2", weight: "bold" }, e), ce && n.createElement(o.ZP, { altLabel: z, style: K.idvLabel, type: "bestValue" }, z)), [ce]),
                    Ce = n.useMemo(() => n.createElement(g.default, null), []),
                    ke = n.useMemo(() => n.createElement(i.Z, { style: K.rightControl }, n.createElement(u.ZP, { "aria-label": T, icon: Ce, link: B, type: "primaryText" })), [Ce]);
                return (0, I.F9)({ subscriptionsApplicationStatus: re, revShareApplicationStatus: ne, revShareActive: ae, subscriptionsActive: te, isAnyPremiumSubscriber: E, monetizationUpsellEnabled: c })
                    ? n.createElement(S.Z, { to: "/i/monetization" })
                    : n.createElement(
                          P.Z,
                          { location: e, rightControl: ke, screenType: "primaryDetail", title: x },
                          n.createElement(
                              i.Z,
                              { style: K.root },
                              he && n.createElement(p.Z.Success, { headline: U, style: K.pendingIdvCallout, testID: "submittedIDVCallout", text: W, withIcon: !0 }),
                              !!ve.length &&
                                  n.createElement(
                                      i.Z,
                                      { testID: "active-programs" },
                                      Pe(A),
                                      ve.map((e) => n.createElement(_.Z, (0, r.Z)({ key: e.id, styleOverride: K.pivot }, e))),
                                  ),
                              !!Ze.length &&
                                  n.createElement(
                                      i.Z,
                                      { style: ve.length ? K.sectionHeader : null, testID: "available-programs" },
                                      Pe(R),
                                      n.createElement(l.ZP, { color: "gray700", style: K.programInstruction }, d ? L : H),
                                      Ze.map((e) => n.createElement(_.Z, (0, r.Z)({ key: e.id, styleOverride: K.pivot }, e))),
                                  ),
                              Se && !Ze.length && oe && n.createElement(i.Z, { testID: "notPayoutCountry" }, n.createElement(l.ZP, { align: "left", size: "headline2", weight: "bold" }, V), n.createElement(l.ZP, { align: "left", color: "gray700", style: K.programInstruction }, j)),
                              n.createElement(_.Z, I.Fx),
                              le && n.createElement(l.ZP, { align: "left", color: "gray700", style: K.programInstruction, testID: "appealMessage" }, d ? n.createElement(b().I18NFormatMessage, { $i18n: "a4fc317d" }, n.cloneElement($.appealLink, null, b().c8798a95)) : n.createElement(b().I18NFormatMessage, { $i18n: "a8e78be7" }, n.cloneElement(q.appealLink, null, b().d809ac49))),
                              (_e || ue) && n.createElement(i.Z, { style: K.setupCallout, testID: "stripeSection" }, !_e && ue && n.createElement(n.Fragment, null, n.createElement(l.ZP, { size: "headline2", weight: "bold" }, O), n.createElement(l.ZP, { color: "gray700", style: K.programInstruction }, X)), n.createElement(u.ZP, { link: _e ? "https://connect.stripe.com/app/express" : I.j0, style: K.programInstruction, testID: "payoutActionButton", type: "primaryOutlined" }, _e ? N : F)),
                              Ee && n.createElement(i.Z, { style: K.setupCallout, testID: "creatorIdvSection" }, n.createElement(l.ZP, { size: "headline2", weight: "bold" }, M), n.createElement(l.ZP, { color: "gray700", style: K.programInstruction }, Q), n.createElement(u.ZP, { onPress: h, style: K.programInstruction, testID: "idvActionButton", type: "primaryOutlined" }, G)),
                          ),
                      );
            }
            function J() {
                const e = n.useMemo(() => ({ type: "CustomRetry", content: () => n.createElement(_.Z, I.Fx) }), []);
                return n.createElement(h.N, { errorConfig: D, fallback: e }, n.createElement(n.Suspense, { fallback: null }, n.createElement(Y, null)));
            }
            const K = d.default.create((e) => ({ root: { margin: e.spaces.space16 }, rightControl: { flexDirection: "row", alignItems: "center" }, idvLabel: { alignSelf: "middle" }, sectionHeader: { marginTop: e.spaces.space32 }, programInstruction: { marginTop: e.spaces.space8 }, pivot: { marginVertical: e.spaces.space4 }, setupCallout: { marginVertical: e.spaces.space16 }, pendingIdvCallout: { marginBottom: e.spaces.space16 }, programHeader: { flexDirection: "row", justifyContent: "space-between" } })),
                ee = n.memo(
                    (0, Z.Z)(
                        function () {
                            return n.createElement(E.Z, null, n.createElement(J, null));
                        },
                        { page: "settings", section: "monetization" },
                    ),
                );
        },
        698579: (e, t, a) => {
            a.d(t, { F9: () => D, Fx: () => C, XS: () => p, Xb: () => B, j0: () => v });
            var r = a(688715),
                n = a(332920),
                i = a.n(n),
                s = a(234558),
                c = a(491831),
                l = a(521058),
                o = a(711223),
                u = a(720816);
            const p = Object.freeze({ adRev: "ad_revenue_sharing", subscriptions: "creator_subs", preRollAds: "pre_roll_video_ads" }),
                d = { Rejected: i().ibb5e1c8, Submitted: i().b255df58, Waitlisted: i().b3f834c8, Approved: i().bbe09d38, PendingIdv: i().efbc5066 },
                m = i().hc7631da,
                b = i().h72d71a2,
                g = i().e12b0b16,
                f = i().a1e57106,
                _ = i().b5334780,
                y = i().i51b4e22,
                E = i().h5bd7160,
                h = { CanVerifyIdentity: i().e32040c4, RequestLocked: i().d8f5cce4, PendingResult: i().j8769b42, IdentityNonVerifiable: E, UnavailableMissingBlueSubscription: E },
                v = { pathname: u.NW.stripeSetup, state: { cameFromEarningsDashboard: !0 } },
                Z = { Icon: s.default, iconBGColor: "green600", heading: "Video Ads", description: "You are on track for payouts", id: p.preRollAds, pill: { label: "NEW", color: "gray1000" }, link: "/settings/ad_rev_share_dashboard", scribeComponent: "pre-roll-ads-dashboard" },
                S = { Icon: c.default, iconBGColor: "blue600", heading: i().d7b51c68, description: "", id: p.subscriptions, link: "/settings/monetization/subscriptions/dashboard", scribeComponent: "creator-subscription-dashboard" },
                P = (e) => ({ Icon: l.default, iconBGColor: "orange600", heading: e ? i().be955554 : i().b03a3d62, description: i().cbbe29c2, id: p.adRev, link: "/settings/ad_rev_share_dashboard", scribeComponent: "ad-revenue-sharing-dashboard" }),
                C = { Icon: o.default, iconBGColor: "purple600", heading: i().g97a2d6c, description: i().f30774ea, id: "learn_more", link: (0, r.ju)("https://help.x.com/using-x/creator-dashboard"), scribeComponent: "learn-more" };
            function k(e, t) {
                return "ad_revenue_sharing" === e ? P(t) : "creator_subs" === e ? S : Z;
            }
            function w(e) {
                return e === p.adRev ? "/settings/ad_rev_share_eligibility" : e === p.subscriptions ? "/settings/superfollows/application/eligibility" : e === p.preRollAds ? "/" : void 0;
            }
            function I(e) {
                return e === p.adRev ? "/settings/ad_rev_share_setup" : e === p.subscriptions ? "/settings/superfollows" : e === p.preRollAds ? "/" : void 0;
            }
            function x(e, t) {
                return e === p.adRev ? (t ? i().bce47f48 : i().h7a68080) : e === p.subscriptions ? i().aea0b11a : e === p.preRollAds ? "Earn income from pre-roll ads served on videos you upload to X." : "";
            }
            function T(e) {
                return e === p.adRev ? "creator-ad-revenue-sharing-setup" : e === p.subscriptions ? "creator-subscription-setup" : "creator-pre-roll-ads-setup";
            }
            function z(e, t) {
                return { label: t || (e ? b : g), color: t ? "orange50" : e ? "green500" : "magenta500" };
            }
            function B({ applicationStatus: e, eligibility: t, id: a, idvStatus: r, isActive: n, isPayoutSetupIncomplete: s = !1, pendingIdv: c = !1, rejectedCreatorCanReapply: l, revShareUpdateEnabled: o = !1 }) {
                const u = { ...k(a, o) },
                    b = 0 === t.length || (1 === t.length && "id_verified" === t[0]);
                if (n && !c) return u;
                const g = r ? h[r] : "";
                if (a === p.subscriptions) {
                    const r = "NotStarted" === e || ("Rejected" === e && l),
                        n = "Rejected" === e && !l;
                    let s;
                    (u.link = n ? "/settings/superfollows/application/rejected" : r ? (b ? I(a) : w(a)) : void 0),
                        c ? (s = f) : n ? (s = y) : r || (s = _),
                        (u.description = (function (e, t, a, r, n, s) {
                            return e ? n : "Rejected" === t && s ? i().aea0b11a : d[t] || x(a, r);
                        })(c, e, a, o, g, l)),
                        (u.disabled = t.includes("generic_violation") || t.includes("do_not_charge")),
                        (u.pill = z(b, s)),
                        (u.scribeComponent = T(a));
                }
                return a === p.adRev && ((u.link = c || s ? void 0 : b ? I(a) : w(a)), (u.description = c ? g : s ? m : x(a, o)), (u.disabled = t.includes("generic_violation") || t.includes("do_not_charge") || t.includes("verified_type")), (u.pill = z(b, s || c ? f : void 0)), (u.scribeComponent = T(a))), a === p.preRollAds && ((u.link = s ? v : b ? I(a) : w(a)), (u.description = s ? m : x(a, o)), (u.disabled = t.includes("generic_violation") || t.includes("do_not_charge") || t.includes("verified_type")), (u.pill = z(b, s ? f : void 0)), (u.scribeComponent = T(a))), u;
            }
            const D = (e) => "NotStarted" === e.subscriptionsApplicationStatus && "NotStarted" === e.revShareApplicationStatus && !e.revShareActive && !e.subscriptionsActive && !e.revShareActive && !e.subscriptionsActive && !e.isAnyPremiumSubscriber && e.monetizationUpsellEnabled;
        },
        51011: (e, t, a) => {
            a.r(t), a.d(t, { default: () => P, monetizationIDVScreenQuery: () => Z });
            a(136728);
            var r = a(799076),
                n = a(202784),
                i = a(325686),
                s = (a(585488), a(107267)),
                c = a(708852),
                l = a(731708),
                o = a(154003),
                u = a(392237),
                p = a(332920),
                d = a.n(p),
                m = a(323265),
                b = a(130919),
                g = a(980407),
                f = a(535338),
                _ = a(599974);
            const y = d().b0e986ec,
                E = d().eefd091e,
                h = d().cd616a5a,
                v = d().cce8c40a,
                Z = r.Z,
                S = (e) => {
                    const t = (0, s.useHistory)(),
                        a = (0, c.D2)(),
                        r = (0, _.Z)(),
                        { viewer: u } = (0, f.p)(Z, {}),
                        p = "/settings/monetization",
                        d = u.user_results.result,
                        S = d.verification_info?.identity_verification_status;
                    S === b.t.CanVerifyIdentity || t.push(p);
                    const P = a ? C.paddingWide : C.paddingNarrow,
                        k = n.useMemo(() => [C.root, P], [P]),
                        w = m.ZP.isTwitterApp(),
                        I = n.useCallback(() => t.goBack({ backLocation: p }), [t]);
                    return n.createElement(g.Z, { backButtonType: "close", backLocation: "/settings/monetization", documentTitle: y, hideBackButton: w, onBackClick: I }, n.createElement(i.Z, { style: k }, n.createElement(l.ZP, { "aria-level": 2, role: "heading", size: "title4", style: C.title, weight: "heavy" }, E), n.createElement(l.ZP, { style: C.subtitle }, h)), n.createElement(i.Z, { style: [C.bottomBarWrapper, P] }, n.createElement(o.ZP, { onPress: r, style: C.bottomBar, type: "primaryFilled" }, v)));
                },
                P = n.memo(S),
                C = u.default.create((e) => ({ root: { paddingBottom: e.spaces.space20, flexGrow: 1 }, paddingWide: { paddingHorizontal: e.spaces.space72 }, paddingNarrow: { paddingHorizontal: e.spaces.space32 }, bottomBar: { gap: e.spaces.space24, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 }, bottomBarWrapper: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small, boxShadow: e.boxShadows.small }, title: { marginTop: e.spaces.space16 }, subtitle: { marginTop: e.spaces.space16 } }));
        },
        599974: (e, t, a) => {
            a.d(t, { Z: () => s });
            a(543673), a(240753), a(128399), a(136728);
            var r = a(202784),
                n = a(107267),
                i = a(323265);
            const s = () => {
                const e = (0, n.useHistory)();
                return r.useCallback(() => {
                    const t = { redirectPath: "/settings/monetization", flow: "creator" };
                    if (i.ZP.isWebView()) {
                        const a = new URLSearchParams(t);
                        e.push(`/settings/account/id_verification/start?${a.toString()}`);
                    } else e.push({ pathname: "/settings/account/id_verification/start", state: t });
                }, [e]);
            };
        },
        967023: (e, t, a) => {
            a.r(t), a.d(t, { default: () => y });
            var r = a(202784),
                n = a(943401),
                i = a(779610),
                s = a(332920),
                c = a.n(s),
                l = a(652904),
                o = a(293115),
                u = a(264922);
            const p = c().cbd449a0,
                d = c().ab125232,
                m = c().a5f32aa2,
                b = c().daef29b8,
                g = c().i0dd9b9e,
                f = c().aaafffda,
                _ = { page: "settings", section: "mute_and_block" };
            function y(e) {
                const { location: t } = e;
                return r.createElement(o.nO, { namespace: _ }, r.createElement(l.Z, null, r.createElement(u.Z, { location: t, screenType: "secondaryDetail", title: p }, r.createElement(n.Z, { description: d }), r.createElement(i.Z, { label: m, link: "/settings/blocked/all" }), r.createElement(i.Z, { label: b, link: "/settings/muted/all" }), r.createElement(i.Z, { label: g, link: "/settings/muted_keywords" }), r.createElement(i.Z, { label: f, link: "/settings/notifications/advanced_filters" }))));
            }
        },
        572667: (e, t, a) => {
            a.r(t), a.d(t, { NewsScreen: () => S, default: () => P });
            var r = a(202784),
                n = a(107267),
                i = a(943401),
                s = a(420412),
                c = a(332920),
                l = a.n(c),
                o = a(376278),
                u = a(847988),
                p = a(534763),
                d = a(443781),
                m = a(264922),
                b = a(71620),
                g = a(668214);
            const f = (0, g.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("TWITTER_BLUE_SETTINGS") }))
                    .withAnalytics({ page: "settings", section: "subscriptions", component: "news" }),
                _ = l().cb165528,
                y = l().e0221c42,
                E = l().b7fa0cfe,
                h = l().adcaa214,
                v = l().b62d6e4c,
                Z = l().acf63cd2;
            function S(e) {
                const { analytics: t } = e,
                    a = r.useContext(d.rC),
                    { userClaims: c } = a,
                    l = (0, n.useLocation)(),
                    b = (0, n.useHistory)();
                r.useEffect(() => {
                    t.scribe({ action: "impression" });
                }, [t]);
                const g = r.useCallback(() => {
                    b.goBack({ backLocation: "/settings/premium" });
                }, [b]);
                return r.createElement(
                    m.Z,
                    {
                        location: l,
                        onBackClick: () => {
                            t.scribe({ action: "navigate" }), g();
                        },
                        testID: "newsDetail",
                        title: _,
                    },
                    r.createElement(i.Z, { description: y }),
                    c.isTrueAndEnabled("subscriptions_feature_1007") &&
                        r.createElement(p.H, {
                            Icon: o.default,
                            description: h,
                            key: E,
                            label: E,
                            link: "/i/articles",
                            onPress: () => {
                                var e;
                                (e = "top_articles"), t.scribe({ element: e, action: "click" });
                            },
                            testID: "topArticlesSection",
                        }),
                    c.isTrueAndEnabled("subscriptions_feature_1005") && r.createElement(p.H, { Icon: u.default, description: Z, key: v, label: v, link: "", testID: "readerSection" }),
                    r.createElement(s.Z, null),
                );
            }
            const P = f(S);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-cff17ecc.393db4da.js.map
