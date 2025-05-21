"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-cff17ecc"],
    {
        487443: (e, t, a) => {
            a.r(t), a.d(t, { ManageAffiliateBadges: () => $, ManagesAffiliatesQueryRequest: () => Q, default: () => J });
            var n = a(143543),
                r = a(202784),
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
                C = r.createElement(E.ZP, { icon: r.createElement(Z.default, { "aria-label": P }), testID: "reorder", type: "primaryText" }),
                k = ({ affiliate: e, disabled: t, sortIndex: a }) => {
                    const { name: n, screen_name: s } = e.affiliated_account_results.result?.legacy || {},
                        c = e.affiliated_account_results.result?.avatar?.image_url || "";
                    return s && c && n && r.createElement(r.Fragment, null, r.createElement(h.ZP, { "aria-checked": !0, avatarShape: "square", avatarSize: "xxLarge", avatarUri: c, decoration: void 0 !== a ? C : void 0, displayMode: "UserCompact", isDisabled: t, name: n, onCellClick: S.Z, screenName: s, userId: "", withInteractiveStyling: !0, withLink: !1 }), 0 === a && r.createElement(i.Z, { style: w.gutter }, r.createElement(v.Z, { spacing: "space2" })));
                },
                w = u.default.create((e) => ({ gutter: { marginHorizontal: e.spaces.space16 } })),
                I = r.memo(k);
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
                    r.createElement(
                        i.Z,
                        null,
                        r.createElement(T.ZP, { style: F.gutter, weight: "medium" }, L),
                        t.map((t, a) => r.createElement(j, { affiliate: t, disabled: e, index: a, key: a, sortIndex: a })),
                    ),
                ),
                O = ({ affiliations: e }) => {
                    const [t, a] = r.useState(e),
                        n = (0, f.z)(),
                        i = (0, z.p)(),
                        [s, c] = (() => {
                            const [e, t] = R()(H);
                            return [
                                r.useCallback(
                                    (t) =>
                                        new Promise((a, n) => {
                                            e({
                                                variables: { affiliations: t.map((e) => ({ team: "NotAssigned", affiliated_account: e })) },
                                                onCompleted: ({ managed_affiliations_update: e }, t) => {
                                                    e?.message && n(new Error(e.message)), a(!0);
                                                },
                                                onError: n,
                                            });
                                        }),
                                    [e],
                                ),
                                t,
                            ];
                        })(),
                        l = r.useCallback(
                            ({ newIndex: e, oldIndex: r }) => {
                                n.scribe({ action: "reorder" });
                                const c = (0, B.Z)(t, r, e);
                                a(c),
                                    s(c.map((e) => e.affiliated_account_results.rest_id)).catch(() => {
                                        a(t), i({ text: V });
                                    });
                            },
                            [t, n, s, i],
                        );
                    return r.createElement(N, { isUpdatingAffiliates: c, items: t, onSortEnd: l });
                },
                F = u.default.create((e) => ({ gutter: { marginHorizontal: e.spaces.space16 } })),
                M = r.memo(O),
                G = d().ce70c590,
                U = d().a49e1b2a,
                W = d().e2daf93c,
                X = { context: "MANAGE_AFFILIATE_SETTING" },
                Q = n.Z,
                q = (0, g.z)(Q, { errorConfig: { context: "MANAGE_AFFILIATES_SETTING_CONTEXT" } });
            function $() {
                const e = (0, f.z)(),
                    t = (0, s.useLocation)(),
                    a = (0, s.useHistory)(),
                    n = r.useCallback(() => {
                        a.goBack({ backLocation: "/settings/premium" });
                    }, [a]),
                    u = r.useCallback(() => {
                        e.scribe({ component: "back", action: "navigate" }), n();
                    }, [e, n]),
                    p = r.useCallback(({ data: e, fetchStatus: t, retry: a }) => {
                        if (t === _.ZP.LOADED) {
                            const { affiliations: t } = e?.managed_affiliations || {};
                            return r.createElement(i.Z, { style: Y.container }, r.createElement(c.Z, { subtext: W, text: U }), 1 === t.length ? r.createElement(I, { affiliate: t[0] }) : r.createElement(M, { affiliations: t }));
                        }
                        return t === _.ZP.FAILED ? r.createElement(l.Z, { onRequestRetry: a }) : r.createElement(o.Z, null);
                    }, []);
                return r.createElement(m.Z, null, r.createElement(b.H, { errorConfig: X }, r.createElement(y.Z, { location: t, onBackClick: u, title: G }, r.createElement(q, { fetchPolicy: "network-only", render: p, variables: {} }))));
            }
            const Y = u.default.create((e) => ({ container: { gap: 8 } })),
                J = r.memo((0, f.Z)($, { page: "settings", section: "affiliations" }));
        },
        254789: (e, t, a) => {
            a.d(t, { Z: () => Y });
            var n = a(202784),
                r = a(325686),
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
                z = ({ subscription: e }) => {
                    const t = (0, v.hC)("subscriptions_management_billing_label_enabled"),
                        a = (0, S.Z)()[e?.product?.rest_id ? g.v5.premium[e?.product?.rest_id] : null].hashed,
                        i = (0, _.gS)(e, "Discount", { status: "active" }),
                        c = (0, _.gS)(e, "Discount", { status: "pending" }),
                        l = (0, P.Z)(a).web_subscription_product_details,
                        o = (0, v.hC)("subscriptions_management_use_active_price"),
                        u = (0, Z.Gi)(e.charge_interval, o ? e.prices : l?.prices),
                        p = I(new Date(parseInt(e.next_billing_at?.time_in_millis, 10))),
                        d = u ? (0, Z.d3)(u, !1, e) : "",
                        m = u ? (0, Z.d3)(u, !1, e, !0, !1) : "",
                        b = n.useMemo(() => {
                            let t;
                            if (e.next_billing_at?.time_in_millis) return "Expire" === e.state ? (t = w({ date: p })) : c || (t = C({ date: p })), n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t);
                        }, [c, e, p]);
                    return n.createElement(r.Z, null, i ? n.createElement(r.Z, { style: D.activeDiscountContainer, testID: "active_discount_info" }, n.createElement(r.Z, { style: D.discountTitleRow }, n.createElement(h.default, { style: D.activeDiscountIcon }), n.createElement(s.ZP, { color: "green900", size: "subtext2", weight: "medium" }, x)), n.createElement(s.ZP, { color: "green900", size: "subtext1", style: D.priceLabel, testID: "stripe-price-info" }, d)) : n.createElement(s.ZP, { color: "gray1100", size: "subtext1", style: D.priceLabel, testID: "stripe-price-info" }, d), c ? n.createElement(r.Z, { style: D.pendingDiscountContainer, testID: "pending_discount_info" }, n.createElement(r.Z, { style: D.discountTitleRow }, n.createElement(h.default, { style: D.pendingDiscountIcon }), n.createElement(s.ZP, { color: "gray900", size: "subtext2", weight: "medium" }, T)), n.createElement(s.ZP, { color: "gray900", size: "subtext1", style: D.priceLabel, testID: "stripe-price-info" }, m), e.next_billing_at?.time_in_millis ? n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, k({ date: p })) : null) : null, t ? b : null);
                },
                B = (e) => n.createElement(b.H, { errorConfig: { context: "manage-subscription-price-info" } }, n.createElement(z, e)),
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
                        [o, , b] = (0, E.Z)(e?.product?.rest_id || "", !0),
                        h = "SwitchScheduled" === o,
                        v = b ? g.St[g.v5.premium[b]] : null,
                        Z = (0, _.gS)(e, "FreeTrial", { status: "active" }),
                        S = e?.payment_source === y.H.Twitter,
                        P = e?.payment_source === y.H.Ads,
                        C = e?.payment_source === y.H.Gift,
                        k = !!e?.payment_source && e?.payment_source !== y.H.Stripe && l.isAnyPremiumSubscriber(),
                        w = e?.payment_source === y.H.TPay || e?.payment_source === y.H.Twitter,
                        I = c.getStringValue("subscriptions_gifting_help_url") || (0, i.ju)("https://help.x.com/forms/paid-features/general"),
                        x = n.useMemo(() => {
                            if (e?.payment_source && e?.payment_source !== y.H.Stripe) return e?.payment_source === y.H.AppleAppStore ? U : e?.payment_source === y.H.GooglePlay ? W : X;
                        }, [e]),
                        T = n.useCallback(() => (S ? n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, N, " ", n.createElement(s.ZP, { link: "https://help.x.com/forms/paid-features/general" }, G)) : P ? n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, O) : C ? n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, F, " ", n.createElement(s.ZP, { link: I }, G)) : n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, M({ mobilePlatform: x }))), [I, P, S, C, x]);
                    return n.createElement(r.Z, { style: J.container }, n.createElement(r.Z, { style: J.card }, n.createElement(r.Z, { style: J.header }, n.createElement(s.ZP, { size: "headline2", weight: "medium" }, a), n.createElement(r.Z, { bold: !0, style: J.label }, "Expire" === e?.state && e.payment_source !== y.H.Gift ? n.createElement(u.default, { style: J.expiringIcon }) : n.createElement(p.default, { style: J.activeIcon }), n.createElement(s.ZP, { align: "center", selectable: !1, size: "body", weight: "medium" }, "Expire" === e?.state && e.payment_source !== y.H.Gift ? H : R))), "Stripe" === e?.payment_source ? n.createElement(B, { subscription: e }) : null, h ? n.createElement(r.Z, { style: J.callout }, n.createElement(d.default, { style: J.iconClock }), n.createElement(s.ZP, { size: "subtext1" }, q({ tierName: v, date: L(new Date(parseInt(e?.next_billing_at?.time_in_millis, 10))) }))) : null, "Expire" === e?.state ? n.createElement(s.ZP, { color: "gray700", size: "subtext2", style: J.expiringSubscriptionLabel }, Q) : null, k || w ? T() : null, Z ? n.createElement(s.ZP, { color: "gray700", size: "subtext2", style: J.freeTrialLabel }, A({ endDate: L(new Date(parseInt(Z?.ends_at_msec, 10))) })) : null, l.isVerifiedOrgAffiliate() ? n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, j({ organization: t?.highlightedLabel?.description })) : l.isVerifiedOrg() || l.isLegacyVerifiedOrg() ? n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, V) : null));
                },
                Y = (e) => n.createElement(b.H, { errorConfig: { context: "stripe-active-subscription-info" } }, n.createElement($, e)),
                J = c.default.create((e) => ({ container: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterHorizontal }, card: { borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray50, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterHorizontal }, label: { flexDirection: "row", minHeight: e.spaces.space32, alignItems: "center", flexShrink: 1 }, activeIcon: { marginEnd: e.spaces.space4, color: e.colors.primary }, expiringIcon: { marginEnd: e.spaces.space4 }, header: { justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space4 }, callout: { flexDirection: "row", padding: e.spaces.space8, backgroundColor: e.colors.blue50, borderRadius: e.borderRadii.small, gap: e.spaces.space8, alignItems: "center", marginTop: e.spaces.space8 }, freeTrialLabel: { marginTop: e.spaces.space8 }, expiringSubscriptionLabel: { marginTop: e.spaces.space8 }, iconClock: { color: e.colors.text, minWidth: 16 } }));
        },
        386255: (e, t, a) => {
            a.r(t), a.d(t, { ManageSubscriptionScreen: () => N, default: () => O });
            var n = a(807896),
                r = a(202784),
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
                    { userClaims: x } = r.useContext(b.rC),
                    T = w?.payment_source,
                    z = (0, y.Z)({ returnUrl: P.d9, originProduct: "TwitterBlue" });
                r.useEffect(() => {
                    u().catch(a({ ...(0, E.d)(), showToast: !0 }));
                }),
                    r.useEffect(() => {
                        t.scribe({ action: "impression" });
                    }, [t]);
                const N = x.isAnyPremiumSubscriber(),
                    O = (0, Z.gS)(w, "FreeTrial", { status: "active" }),
                    M = r.useCallback(() => {
                        t.scribe({ component: "expiring-sub-manage-subscription", action: "click" }), z?.();
                    }, [t, z]);
                return r.createElement(
                    g.Z,
                    null,
                    r.createElement(
                        C.Z,
                        { location: I, title: B },
                        N ? r.createElement(k.Z, { subscription: w, viewer: p }) : null,
                        r.createElement(
                            i.Z,
                            null,
                            (() => {
                                const e = !!T && T === S.H.Stripe && N,
                                    t = "Expire" === w?.state,
                                    a = ["premium-basic", "premium-basic-test", "premium-basic-sandbox", "rogue-one-prod-2", "rogue-one-test-2-1", "rogue-one-sandbox-2"],
                                    s = ({ description: e, isExternal: t, label: a, ...s }) => r.createElement(c.Z, (0, n.Z)({}, s, { disabled: !z, style: F.manageSubscriptionInteraction }), r.createElement(l.Z, null, r.createElement(i.Z, { style: F.manageSubscriptionSection }, r.createElement(i.Z, { style: F.manageSubscriptionSectionBody }, r.createElement(o.ZP, { color: "blue500", weight: "medium" }, a), r.createElement(o.ZP, { color: "gray700", size: "subtext2" }, e)), t ? r.createElement(m.default, { style: F.goToSubscriptionPortalIcon }) : null)));
                                if (e) {
                                    const e = a.find((e) => e === w?.product?.rest_id) ? { title: H, desc: V } : { title: L, desc: j };
                                    return r.createElement(r.Fragment, null, O || t ? null : r.createElement(s, { description: e.desc, label: e.title, link: { pathname: "/i/premium_tier_switch", state: { product: "BlueVerifiedPlus" } }, role: "button", testID: "tier-switch-link" }), t ? null : r.createElement(s, { description: A, label: x.isVerifiedOrg() || x.isVerifiedOrgAffiliate() ? R : D, link: "/settings/subscription/manage" }), t ? r.createElement(s, { description: A, isExternal: !0, label: D, onClick: M }) : null);
                                }
                                return null;
                            })(),
                        ),
                    ),
                );
            }
            const O = z((e) => r.createElement(f.H, { errorConfig: { context: "manage_subscription_screen" } }, r.createElement(N, e))),
                F = u.default.create((e) => ({ manageSubscriptionSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, manageSubscriptionSectionBody: { flexShrink: 1 }, offPlatformSubscriptionSection: { flexDirection: "column", justifyContent: "space-between" }, goToSubscriptionPortalIcon: { color: e.colors.gray700, flexShrink: 0 }, manageSubscriptionInteraction: { cursor: "pointer" }, blueVerifiedCalloutWrapper: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, newLabelWrapper: { flexDirection: "row" }, newLabel: { backgroundColor: e.colors.blue50, color: e.colors.primary900, marginEnd: 10, borderRadius: e.borderRadii.xLarge, padding: 10 }, iconThumbnail: { marginEnd: e.spaces.space8 }, verifiedOrganizationsSubscriptionDescription: { marginTop: e.spaces.space8 }, upgradeDowngradeComingSoonLabel: { marginTop: e.spaces.space16, marginStart: e.spaces.space16, marginBottom: e.spaces.space12 } }));
        },
        185874: (e, t, a) => {
            a.r(t), a.d(t, { default: () => be });
            var n = a(202784),
                r = a(443781),
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
                x = ({ activeProductCategory: e, activeSubscription: t, churnPreventionOfferAvailable: a, goToStripePortal: r, pendingDiscount: i, setCurrentFlowStep: s }) => {
                    const c = (0, _.useHistory)(),
                        l = (0, P.Z)(),
                        o = !!(0, u.gS)(t, "FreeTrial", { status: "active" }),
                        p = n.useCallback(() => {
                            l.scribe({ action: "click", element: "change_tier" });
                        }, [l]),
                        d = n.useCallback(() => {
                            i ? s("PendingOfferStep") : a ? s("OfferStep") : (l.scribe({ action: "click", element: "continue_to_cancel" }), r && r());
                        }, [l, r, a, s, i]);
                    return n.createElement(
                        S.Z,
                        { backButtonType: "back", hideBackButton: !1, history: c, onBackClick: () => s("OptionsStep") },
                        n.createElement(
                            f.Z,
                            { style: T.root },
                            n.createElement(
                                f.Z,
                                { style: T.content },
                                n.createElement(y.ZP, { align: "left", size: "title1", weight: "heavy" }, k),
                                n.createElement(
                                    f.Z,
                                    { role: "list", style: T.list },
                                    C.filter(({ subscriptions: t }) => t.hasOwnProperty(e)).map(({ label: e }) => n.createElement(y.ZP, { key: e, role: "listitem", style: T.listItem }, e)),
                                ),
                                o ? null : n.createElement(E.ZP, { link: "/i/premium_tier_switch", onPress: p, size: "xLarge", style: T.button, type: "primaryOutlined" }, I),
                                n.createElement(E.ZP, { disabled: !r, onPress: d, size: "xLarge", style: T.button, type: "destructiveFilled" }, w),
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
                W = ({ activeProductCategory: e, activeSubscription: t, activeTierPrice: a, goToStripePortal: r, offer: s, setCurrentFlowStep: l }) => {
                    const o = (0, _.useHistory)(),
                        u = (0, P.Z)(),
                        [p, d] = (0, R.Z)(),
                        [m, b] = n.useState(!1),
                        g = (0, i.hC)("subscriptions_marketing_page_include_tax_enabled");
                    n.useEffect(() => {
                        u.scribe({ component: "churn_prevent_offer", action: "impression" });
                    }, [u]);
                    const h = n.useCallback(() => {
                            u.scribe({ action: "click", component: "churn_prevent_offer", element: "continue_to_cancel" }), r && r();
                        }, [u, r]),
                        v = c.St[e],
                        C = n.useMemo(() => {
                            const e = { percentage: s.metadata.percent_off, productName: v, duration: s.metadata.duration_in_interval };
                            return "Month" === a?.charge_interval ? L(e) : V(e);
                        }, [a, s, v]),
                        k = n.useCallback(() => {
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
                    return n.createElement(
                        S.Z,
                        { backButtonType: "back", hideBackButton: !1, history: o, onBackClick: () => l("CancelStep") },
                        n.createElement(
                            f.Z,
                            { style: X.root },
                            n.createElement(
                                f.Z,
                                { style: X.content },
                                n.createElement(y.ZP, { align: "left", size: "title1", weight: "heavy" }, C),
                                n.createElement(y.ZP, { style: X.description }, O({ productName: v })),
                                n.createElement(
                                    f.Z,
                                    { style: X.list },
                                    n.createElement(
                                        f.Z,
                                        { style: X.listItem },
                                        n.createElement(D.default, null),
                                        n.createElement(
                                            y.ZP,
                                            null,
                                            ((e, t, a) => {
                                                const r = (0, H.T)({ price: e, annualPriceMonthly: !1, includeTax: a }),
                                                    i = (0, H.T)({ price: e, annualPriceMonthly: !1, includeTax: a, percentOff: t.metadata.percent_off }),
                                                    s = { strike: n.createElement(y.ZP, { style: { textDecorationLine: "line-through" }, testID: "strikethrough-price" }), green: n.createElement(y.ZP, { color: "green500", testID: "discount-price", weight: "medium" }) },
                                                    c = { duration: t.metadata.duration_in_interval ?? 0, standardPrice: r, discountedPrice: i };
                                                return "Year" === e.charge_interval ? n.createElement(Z().I18NFormatMessage, { $i18n: "e9dc8a25", duration: c.duration }, n.cloneElement(s.strike, null, Z().af283938({ standardPrice: c.standardPrice })), n.cloneElement(s.green, null, Z().c284b365({ discountedPrice: c.discountedPrice }))) : n.createElement(Z().I18NFormatMessage, { $i18n: "f8a9cbb7", duration: c.duration }, n.cloneElement(s.strike, null, Z().e2673372({ standardPrice: c.standardPrice })), n.cloneElement(s.green, null, Z().jd2dc103({ discountedPrice: c.discountedPrice })));
                                            })(a, s, g),
                                        ),
                                    ),
                                    n.createElement(f.Z, { style: X.listItem }, n.createElement(D.default, null), n.createElement(y.ZP, null, F)),
                                    n.createElement(f.Z, { style: X.listItem }, n.createElement(D.default, null), n.createElement(y.ZP, null, M({ productName: v }))),
                                    n.createElement(y.ZP, { style: X.disclaimer }, U),
                                ),
                                m ? n.createElement(z.Z.Danger, { text: G }) : null,
                                n.createElement(E.ZP, { disabled: d, icon: d ? void 0 : n.createElement(A.default, null), onPress: k, size: "xLarge", style: X.button, type: "primaryOutlined" }, d ? n.createElement(B.Z, null) : N),
                                n.createElement(E.ZP, { disabled: !r, onPress: h, size: "xLarge", style: X.button, type: "destructiveFilled" }, j),
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
                    return n.createElement(S.Z, { backButtonType: "close", hideBackButton: !1, history: t, onBackClick: () => t.push("/i/premium") }, n.createElement(f.Z, { style: J.root }, n.createElement(f.Z, { style: J.content }, n.createElement(y.ZP, { align: "left", size: "title1", weight: "heavy" }, Q), n.createElement(y.ZP, { align: "left" }, q), n.createElement(E.ZP, { link: "/i/premium", size: "xLarge", style: J.button, type: "primaryFilled" }, $))));
                },
                J = h.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto", gap: e.spaces.space16 }, button: { marginVertical: e.spaces.space8 } }));
            var K = a(525754);
            const ee = Object.freeze({ paymentMethod: "paymentMethod", billingInformation: "billingInformation", cancel: "cancel" }),
                te = Z().j6083a1c,
                ae = Z().c1df579e,
                ne = [
                    { label: Z().b4fa4630, value: ee.paymentMethod, containerStyle: { paddingHorizontal: 0 } },
                    { label: Z().ef0dfa5a, value: ee.billingInformation, containerStyle: { paddingHorizontal: 0 } },
                    { label: Z().f5b352ec, value: ee.cancel, containerStyle: { paddingHorizontal: 0 } },
                ],
                re = ({ goToStripePortal: e, setCurrentFlowStep: t }) => {
                    const a = (0, _.useHistory)(),
                        [r, i] = n.useState(),
                        s = (0, P.Z)(),
                        c = n.useCallback((e, t) => {
                            i(t);
                        }, []),
                        l = n.useCallback(() => {
                            switch (r) {
                                case ee.paymentMethod:
                                    return s.scribe({ action: "next", element: "change_payment_method" }), void (e && e());
                                case ee.billingInformation:
                                    return s.scribe({ action: "next", element: "change_billing_information" }), void (e && e());
                                case ee.cancel:
                                    return s.scribe({ action: "next", element: "cancel_subscription" }), void t("CancelStep");
                                default:
                                    return;
                            }
                        }, [s, e, t, r]);
                    return n.createElement(S.Z, { backButtonType: "close", hideBackButton: !1, history: a, onBackClick: () => a.goBackThroughModals() }, n.createElement(f.Z, { style: ie.root }, n.createElement(f.Z, { style: ie.content }, n.createElement(y.ZP, { size: "title2", weight: "heavy" }, te), n.createElement(f.Z, { style: ie.radio }, n.createElement(K.Z, { name: "editOption", onChange: c, options: ne, value: r })), n.createElement(E.ZP, { disabled: !r || !e, onPress: l, size: "xLarge", style: ie.button, type: "primaryFilled" }, ae))));
                },
                ie = h.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, radio: { marginBottom: e.spaces.space24 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto" }, button: { marginVertical: e.spaces.space8 }, subscriptionDetails: { marginVertical: e.spaces.space16 }, marginBottom: { marginBottom: e.spaces.space8 }, currentPlanContent: { backgroundColor: e.colors.gray50, padding: e.spaces.space8, borderRadius: e.borderRadii.medium, width: "100%" } }));
            var se = a(125363),
                ce = a(919022),
                le = a(254789);
            const oe = Z().j317d958,
                ue = Z().a46e42d2,
                pe = Z().a092f1ba,
                de = ({ activeSubscription: e, goToStripePortal: t, pendingDiscount: a }) => {
                    const r = (0, _.useHistory)(),
                        i = (0, P.Z)(),
                        s = (0, se.v9)(ce.ZP.selectViewerUser),
                        c = n.useCallback(() => {
                            i.scribe({ action: "click", component: "pending_offer_callout", element: "continue_to_cancel" }), t && t();
                        }, [i, t]);
                    return n.createElement(S.Z, { backButtonType: "close", hideBackButton: !1, history: r }, n.createElement(f.Z, { style: me.root }, n.createElement(f.Z, { style: me.content }, n.createElement(y.ZP, { align: "left", size: "title1", weight: "heavy" }, oe), n.createElement(le.Z, { subscription: e, viewer: s }), n.createElement(E.ZP, { link: "/i/premium", size: "xLarge", style: me.button, type: "primaryOutlined" }, ue), n.createElement(E.ZP, { disabled: !t, onPress: c, size: "xLarge", style: me.button, type: "destructiveFilled" }, pe))));
                },
                me = h.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto", gap: e.spaces.space16 }, button: { marginVertical: e.spaces.space8 } }));
            function be(e) {
                const { featureSwitches: t } = (0, r.QZ)(),
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
                    [T, z] = n.useState("OptionsStep"),
                    B = (0, s.Z)({ returnUrl: m.d9, originProduct: "TwitterBlue" });
                if (!E || !y) return null;
                return n.createElement(
                    d.nO,
                    { namespace: { page: "subscriptions_manage" } },
                    (() => {
                        switch (T) {
                            case "OptionsStep":
                                return n.createElement(re, { goToStripePortal: B, setCurrentFlowStep: z });
                            case "CancelStep":
                                return n.createElement(x, { activeProductCategory: E, activeSubscription: y, activeTierPrice: k, churnPreventionOfferAvailable: I, goToStripePortal: B, pendingDiscount: h, setCurrentFlowStep: z });
                            case "PendingOfferStep":
                                return n.createElement(de, { activeSubscription: y, goToStripePortal: B, pendingDiscount: h });
                            case "OfferStep":
                                return w && k ? n.createElement(W, { activeProductCategory: E, activeSubscription: y, activeTierPrice: k, goToStripePortal: B, offer: w, setCurrentFlowStep: z }) : null;
                            case "OfferSuccessStep":
                                return n.createElement(Y, null);
                            default:
                                return null;
                        }
                    })(),
                );
            }
        },
        195210: (e, t, a) => {
            a.r(t), a.d(t, { default: () => K, monetizationSettingsQuery: () => X });
            var n = a(56301),
                r = a(202784),
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
                g = a(860747),
                f = a(199213),
                _ = a(253518),
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
                    return r.createElement(T.ZP, { color: "gray700", size: "subtext2" }, a);
                },
                j = p().d299431c,
                N = p().d7b51c68,
                O = p().f66d24be,
                F = p().i8132774,
                M = p().j087774e,
                G = p().a1222584,
                U = (0, c.ju)("https://help.x.com/using-twitter/creator-dashboard"),
                W = { context: "MONETIZATION_SETTINGS" },
                X = n.Z,
                Q = () => r.createElement(i.Z, { style: J.monetizationOptions }, r.createElement(y.ZP, { Icon: d.default, decoration: r.createElement(h.Z, { type: h.j.Crown }), header: N, iconColor: "plum500", link: "/settings/superfollows", primaryText: F })),
                q = () => r.createElement(i.Z, { style: J.monetizationOptions }, r.createElement(y.ZP, { Icon: m.default, decoration: r.createElement(h.Z, { type: h.j.Award }), header: M, link: "/settings/awards", primaryText: G })),
                $ = () => {
                    const { featureSwitches: e } = r.useContext(v.rC),
                        t = e.isTrue("creator_monetization_web_tips_onboarding_enabled"),
                        a = e.isTrue("creator_monetization_web_tips_dashboard_enabled"),
                        { viewer: n } = (0, C.p)(X, { awardsEnabled: a }),
                        i = !!n.is_active_creator,
                        s = n.user_results.result,
                        c = s.super_follows_application_status || "NotStarted",
                        l = a && s.award_eligible,
                        o = 0 === s.awards_eligibility?.length,
                        u = e.isTrue("responsive_web_stripe_account_creation_enabled") ? s : s && i;
                    return r.createElement(r.Fragment, null, u ? r.createElement(f.Z, { stripeStatus: s.stripe_account_status, type: "earnings", user: s }) : null, "NotStarted" === c ? r.createElement(Q, null) : r.createElement(_.Z, { description: i ? null : r.createElement(V, { viewer: n }), isActiveCreator: i, user: s }), o && t && !l ? r.createElement(q, null) : r.createElement(g.Z, { user: s }));
                },
                Y = () => {
                    const e = r.useMemo(() => ({ type: "CustomRetry", content: () => r.createElement(E.H, { Icon: d.default, description: null, iconColor: "plum500", label: N, link: "/settings/superfollows" }) }), []);
                    return r.createElement(S.N, { errorConfig: W, fallback: e }, r.createElement(r.Suspense, { fallback: null }, r.createElement($, null)));
                },
                J = o.default.create((e) => ({ monetizationOptions: { margin: e.spaces.space16 }, infoIconGray: { color: e.colors.gray300 } })),
                K = r.memo(
                    (0, P.Z)(
                        () => {
                            const e = (0, s.useLocation)(),
                                t = () => r.createElement(l.ZP, { "aria-label": O, icon: r.createElement(b.default, null), link: U, type: "primaryText" });
                            return r.createElement(Z.Z, null, r.createElement(k.Z, { location: e, rightControl: r.createElement(t, null), screenType: "primaryDetail", title: j }, r.createElement(Y, null)));
                        },
                        { page: "settings", section: "monetization" },
                    ),
                );
        },
        934410: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ee });
            var n = a(807896),
                r = (a(136728), a(202784)),
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
                q = { appealLink: r.createElement(l.ZP, { link: (0, c.ju)("https://help.x.com/using-twitter/creator-ads-revenue-sharing") }) },
                $ = { appealLink: r.createElement(l.ZP, { link: (0, c.ju)("https://help.x.com/using-x/creator-revenue-sharing") }) };
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
                    ne = Y?.super_follows_application_status || "NotStarted",
                    re = Y?.ad_revenue_sharing_application_status || "NotStarted",
                    ie = Y?.rejected_super_follow_can_re_apply || !1,
                    se = D?.identity_verification_status,
                    ce = se === f.t.IdentityVerified,
                    le = !1 === ae && (ee?.ad_revenue_sharing_user_profile?.inactive_reasons || []).find((e) => "FlaggedByReview" === e.inactive_reason_type),
                    oe = "NotStarted" === Z?.status || "Incomplete" === Z?.status,
                    ue = oe && ((a && ae) || (t && te)),
                    pe = r.useMemo(() => J?.super_follows_eligibility || [], [J]),
                    de = "PendingIdv" === ne,
                    me = r.useMemo(() => J?.ad_revenue_sharing_eligibility || [], [J]),
                    be = "PendingIdv" === re,
                    ge = ae && !ce,
                    fe = (te || "NotStarted" !== ne) && !ce,
                    _e = "Completed" === Z?.status,
                    ye = de || be || ge || fe,
                    Ee = ye && se === f.t.CanVerifyIdentity,
                    he = (0, C.isPendingStatus)(e) && ye && se === f.t.PendingResult,
                    ve = r.useMemo(() => {
                        const e = [];
                        return (te || ("NotStarted" !== ne && "PendingIdv" !== ne && "Rejected" !== ne)) && e.push({ ...(0, I.Xb)({ id: I.XS.subscriptions, isActive: !!te, eligibility: pe, applicationStatus: ne, pendingIdv: !ce, idvStatus: se, revShareUpdateEnabled: d, rejectedCreatorCanReapply: ie }) }), ae && !oe && e.push((0, I.Xb)({ id: I.XS.adRev, isActive: !0, eligibility: me, applicationStatus: "Approved", pendingIdv: !ce, idvStatus: se, revShareUpdateEnabled: d, rejectedCreatorCanReapply: ie })), e;
                    }, [ae, oe, te, ne, pe, me, se, ce, d, ie]),
                    Ze = r.useMemo(() => {
                        const e = [];
                        return !te && t && ("NotStarted" === ne || "PendingIdv" === ne || "Rejected" === ne) && e.push((0, I.Xb)({ id: I.XS.subscriptions, isActive: !1, eligibility: pe, applicationStatus: ne, pendingIdv: de, idvStatus: se, revShareUpdateEnabled: d, rejectedCreatorCanReapply: ie })), null == ae && a ? e.push((0, I.Xb)({ id: I.XS.adRev, isActive: !1, eligibility: me, applicationStatus: re, pendingIdv: be, idvStatus: se, revShareUpdateEnabled: d, rejectedCreatorCanReapply: ie })) : ae && oe && e.push((0, I.Xb)({ id: I.XS.adRev, isActive: !1, eligibility: me, applicationStatus: re, isPayoutSetupIncomplete: oe, pendingIdv: !ce, idvStatus: se, revShareUpdateEnabled: d, rejectedCreatorCanReapply: ie })), e;
                    }, [a, se, be, de, ae, oe, te, t, ce, ne, re, me, pe, d, ie]),
                    Se = 0 === ve.length && !t && !a,
                    Pe = r.useCallback((e) => r.createElement(i.Z, { style: K.programHeader }, r.createElement(l.ZP, { size: "headline2", weight: "bold" }, e), ce && r.createElement(o.ZP, { altLabel: z, style: K.idvLabel, type: "bestValue" }, z)), [ce]),
                    Ce = r.useMemo(() => r.createElement(g.default, null), []),
                    ke = r.useMemo(() => r.createElement(i.Z, { style: K.rightControl }, r.createElement(u.ZP, { "aria-label": T, icon: Ce, link: B, type: "primaryText" })), [Ce]);
                return (0, I.F9)({ subscriptionsApplicationStatus: ne, revShareApplicationStatus: re, revShareActive: ae, subscriptionsActive: te, isAnyPremiumSubscriber: E, monetizationUpsellEnabled: c })
                    ? r.createElement(S.Z, { to: "/i/monetization" })
                    : r.createElement(
                          P.Z,
                          { location: e, rightControl: ke, screenType: "primaryDetail", title: x },
                          r.createElement(
                              i.Z,
                              { style: K.root },
                              he && r.createElement(p.Z.Success, { headline: U, style: K.pendingIdvCallout, testID: "submittedIDVCallout", text: W, withIcon: !0 }),
                              !!ve.length &&
                                  r.createElement(
                                      i.Z,
                                      { testID: "active-programs" },
                                      Pe(A),
                                      ve.map((e) => r.createElement(_.Z, (0, n.Z)({ key: e.id, styleOverride: K.pivot }, e))),
                                  ),
                              !!Ze.length &&
                                  r.createElement(
                                      i.Z,
                                      { style: ve.length ? K.sectionHeader : null, testID: "available-programs" },
                                      Pe(R),
                                      r.createElement(l.ZP, { color: "gray700", style: K.programInstruction }, d ? L : H),
                                      Ze.map((e) => r.createElement(_.Z, (0, n.Z)({ key: e.id, styleOverride: K.pivot }, e))),
                                  ),
                              Se && !Ze.length && oe && r.createElement(i.Z, { testID: "notPayoutCountry" }, r.createElement(l.ZP, { align: "left", size: "headline2", weight: "bold" }, V), r.createElement(l.ZP, { align: "left", color: "gray700", style: K.programInstruction }, j)),
                              r.createElement(_.Z, I.Fx),
                              le && r.createElement(l.ZP, { align: "left", color: "gray700", style: K.programInstruction, testID: "appealMessage" }, d ? r.createElement(b().I18NFormatMessage, { $i18n: "a4fc317d" }, r.cloneElement($.appealLink, null, b().c8798a95)) : r.createElement(b().I18NFormatMessage, { $i18n: "a8e78be7" }, r.cloneElement(q.appealLink, null, b().d809ac49))),
                              (_e || ue) && r.createElement(i.Z, { style: K.setupCallout, testID: "stripeSection" }, !_e && ue && r.createElement(r.Fragment, null, r.createElement(l.ZP, { size: "headline2", weight: "bold" }, O), r.createElement(l.ZP, { color: "gray700", style: K.programInstruction }, X)), r.createElement(u.ZP, { link: _e ? "https://connect.stripe.com/app/express" : I.j0, style: K.programInstruction, testID: "payoutActionButton", type: "primaryOutlined" }, _e ? N : F)),
                              Ee && r.createElement(i.Z, { style: K.setupCallout, testID: "creatorIdvSection" }, r.createElement(l.ZP, { size: "headline2", weight: "bold" }, M), r.createElement(l.ZP, { color: "gray700", style: K.programInstruction }, Q), r.createElement(u.ZP, { onPress: h, style: K.programInstruction, testID: "idvActionButton", type: "primaryOutlined" }, G)),
                          ),
                      );
            }
            function J() {
                const e = r.useMemo(() => ({ type: "CustomRetry", content: () => r.createElement(_.Z, I.Fx) }), []);
                return r.createElement(h.N, { errorConfig: D, fallback: e }, r.createElement(r.Suspense, { fallback: null }, r.createElement(Y, null)));
            }
            const K = d.default.create((e) => ({ root: { margin: e.spaces.space16 }, rightControl: { flexDirection: "row", alignItems: "center" }, idvLabel: { alignSelf: "middle" }, sectionHeader: { marginTop: e.spaces.space32 }, programInstruction: { marginTop: e.spaces.space8 }, pivot: { marginVertical: e.spaces.space4 }, setupCallout: { marginVertical: e.spaces.space16 }, pendingIdvCallout: { marginBottom: e.spaces.space16 }, programHeader: { flexDirection: "row", justifyContent: "space-between" } })),
                ee = r.memo(
                    (0, Z.Z)(
                        function () {
                            return r.createElement(E.Z, null, r.createElement(J, null));
                        },
                        { page: "settings", section: "monetization" },
                    ),
                );
        },
        698579: (e, t, a) => {
            a.d(t, { F9: () => D, Fx: () => C, XS: () => p, Xb: () => B, j0: () => v });
            var n = a(688715),
                r = a(332920),
                i = a.n(r),
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
                C = { Icon: o.default, iconBGColor: "purple600", heading: i().g97a2d6c, description: i().f30774ea, id: "learn_more", link: (0, n.ju)("https://help.x.com/using-x/creator-dashboard"), scribeComponent: "learn-more" };
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
            function B({ applicationStatus: e, eligibility: t, id: a, idvStatus: n, isActive: r, isPayoutSetupIncomplete: s = !1, pendingIdv: c = !1, rejectedCreatorCanReapply: l, revShareUpdateEnabled: o = !1 }) {
                const u = { ...k(a, o) },
                    b = 0 === t.length || (1 === t.length && "id_verified" === t[0]);
                if (r && !c) return u;
                const g = n ? h[n] : "";
                if (a === p.subscriptions) {
                    const n = "NotStarted" === e || ("Rejected" === e && l),
                        r = "Rejected" === e && !l;
                    let s;
                    (u.link = r ? "/settings/superfollows/application/rejected" : n ? (b ? I(a) : w(a)) : void 0),
                        c ? (s = f) : r ? (s = y) : n || (s = _),
                        (u.description = (function (e, t, a, n, r, s) {
                            return e ? r : "Rejected" === t && s ? i().aea0b11a : d[t] || x(a, n);
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
            var n = a(799076),
                r = a(202784),
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
                Z = n.Z,
                S = (e) => {
                    const t = (0, s.useHistory)(),
                        a = (0, c.D2)(),
                        n = (0, _.Z)(),
                        { viewer: u } = (0, f.p)(Z, {}),
                        p = "/settings/monetization",
                        d = u.user_results.result,
                        S = d.verification_info?.identity_verification_status;
                    S === b.t.CanVerifyIdentity || t.push(p);
                    const P = a ? C.paddingWide : C.paddingNarrow,
                        k = r.useMemo(() => [C.root, P], [P]),
                        w = m.ZP.isTwitterApp(),
                        I = r.useCallback(() => t.goBack({ backLocation: p }), [t]);
                    return r.createElement(g.Z, { backButtonType: "close", backLocation: "/settings/monetization", documentTitle: y, hideBackButton: w, onBackClick: I }, r.createElement(i.Z, { style: k }, r.createElement(l.ZP, { "aria-level": 2, role: "heading", size: "title4", style: C.title, weight: "heavy" }, E), r.createElement(l.ZP, { style: C.subtitle }, h)), r.createElement(i.Z, { style: [C.bottomBarWrapper, P] }, r.createElement(o.ZP, { onPress: n, style: C.bottomBar, type: "primaryFilled" }, v)));
                },
                P = r.memo(S),
                C = u.default.create((e) => ({ root: { paddingBottom: e.spaces.space20, flexGrow: 1 }, paddingWide: { paddingHorizontal: e.spaces.space72 }, paddingNarrow: { paddingHorizontal: e.spaces.space32 }, bottomBar: { gap: e.spaces.space24, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 }, bottomBarWrapper: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small, boxShadow: e.boxShadows.small }, title: { marginTop: e.spaces.space16 }, subtitle: { marginTop: e.spaces.space16 } }));
        },
        599974: (e, t, a) => {
            a.d(t, { Z: () => s });
            a(543673), a(240753), a(128399), a(136728);
            var n = a(202784),
                r = a(107267),
                i = a(323265);
            const s = () => {
                const e = (0, r.useHistory)();
                return n.useCallback(() => {
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
            var n = a(202784),
                r = a(943401),
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
                return n.createElement(o.nO, { namespace: _ }, n.createElement(l.Z, null, n.createElement(u.Z, { location: t, screenType: "secondaryDetail", title: p }, n.createElement(r.Z, { description: d }), n.createElement(i.Z, { label: m, link: "/settings/blocked/all" }), n.createElement(i.Z, { label: b, link: "/settings/muted/all" }), n.createElement(i.Z, { label: g, link: "/settings/muted_keywords" }), n.createElement(i.Z, { label: f, link: "/settings/notifications/advanced_filters" }))));
            }
        },
        572667: (e, t, a) => {
            a.r(t), a.d(t, { NewsScreen: () => S, default: () => P });
            var n = a(202784),
                r = a(107267),
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
                    a = n.useContext(d.rC),
                    { userClaims: c } = a,
                    l = (0, r.useLocation)(),
                    b = (0, r.useHistory)();
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
                        title: _,
                    },
                    n.createElement(i.Z, { description: y }),
                    c.isTrueAndEnabled("subscriptions_feature_1007") &&
                        n.createElement(p.H, {
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
                    c.isTrueAndEnabled("subscriptions_feature_1005") && n.createElement(p.H, { Icon: u.default, description: Z, key: v, label: v, link: "", testID: "readerSection" }),
                    n.createElement(s.Z, null),
                );
            }
            const P = f(S);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-cff17ecc.53e6682a.js.map
