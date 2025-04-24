"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-cff17ecc"],
    {
        487443: (e, t, a) => {
            a.r(t), a.d(t, { ManageAffiliateBadges: () => q, ManagesAffiliatesQueryRequest: () => Q, default: () => J });
            var n = a(143543),
                r = a(202784),
                i = a(325686),
                s = (a(585488), a(107267)),
                c = a(844685),
                l = a(750410),
                o = a(167630),
                u = a(392237),
                d = a(674132),
                p = a.n(d),
                m = a(652904),
                b = a(736063),
                g = a(301410),
                f = a(725516),
                y = a(312771),
                _ = a(264922),
                E = a(154003),
                h = a(673510),
                v = a(661810),
                Z = a(678773),
                S = a(516951);
            const P = p().ab8089ea,
                C = r.createElement(E.ZP, { icon: r.createElement(Z.default, { "aria-label": P }), testID: "reorder", type: "primaryText" }),
                w = ({ affiliate: e, disabled: t, sortIndex: a }) => {
                    const { name: n, profile_image_url_https: s, screen_name: c } = e.affiliated_account_results.result?.legacy || {};
                    return c && s && n && r.createElement(r.Fragment, null, r.createElement(h.ZP, { "aria-checked": !0, avatarShape: "square", avatarSize: "xxLarge", avatarUri: s, decoration: void 0 !== a ? C : void 0, displayMode: "UserCompact", isDisabled: t, name: n, onCellClick: S.Z, screenName: c, userId: "", withInteractiveStyling: !0, withLink: !1 }), 0 === a && r.createElement(i.Z, { style: k.gutter }, r.createElement(v.Z, { spacing: "space2" })));
                },
                k = u.default.create((e) => ({ gutter: { marginHorizontal: e.spaces.space16 } })),
                I = r.memo(w);
            var x = a(716042),
                z = a(731708),
                T = a(782642),
                B = a(445250),
                D = (a(571372), a(658236)),
                A = a(351743),
                R = a.n(A);
            const H = D.Z,
                V = p().e2eac0c4,
                j = p().ef4602ec,
                L = (0, x.W8)(I),
                N = (0, x.JN)(({ isUpdatingAffiliates: e, items: t }) =>
                    r.createElement(
                        i.Z,
                        null,
                        r.createElement(z.ZP, { style: F.gutter, weight: "medium" }, V),
                        t.map((t, a) => r.createElement(L, { affiliate: t, disabled: e, index: a, key: a, sortIndex: a })),
                    ),
                ),
                O = ({ affiliations: e }) => {
                    const [t, a] = r.useState(e),
                        n = (0, f.z)(),
                        i = (0, T.p)(),
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
                                        a(t), i({ text: j });
                                    });
                            },
                            [t, n, s, i],
                        );
                    return r.createElement(N, { isUpdatingAffiliates: c, items: t, onSortEnd: l });
                },
                F = u.default.create((e) => ({ gutter: { marginHorizontal: e.spaces.space16 } })),
                M = r.memo(O),
                G = p().ce70c590,
                U = p().a49e1b2a,
                W = p().e2daf93c,
                X = { context: "MANAGE_AFFILIATE_SETTING" },
                Q = n.Z,
                $ = (0, g.z)(Q, { errorConfig: { context: "MANAGE_AFFILIATES_SETTING_CONTEXT" } });
            function q() {
                const e = (0, f.z)(),
                    t = (0, s.useLocation)(),
                    a = (0, s.useHistory)(),
                    n = r.useCallback(() => {
                        a.goBack({ backLocation: "/settings/premium" });
                    }, [a]),
                    u = r.useCallback(() => {
                        e.scribe({ component: "back", action: "navigate" }), n();
                    }, [e, n]),
                    d = r.useCallback(({ data: e, fetchStatus: t, retry: a }) => {
                        if (t === y.ZP.LOADED) {
                            const { affiliations: t } = e?.managed_affiliations || {};
                            return r.createElement(i.Z, { style: Y.container }, r.createElement(c.Z, { subtext: W, text: U }), 1 === t.length ? r.createElement(I, { affiliate: t[0] }) : r.createElement(M, { affiliations: t }));
                        }
                        return t === y.ZP.FAILED ? r.createElement(l.Z, { onRequestRetry: a }) : r.createElement(o.Z, null);
                    }, []);
                return r.createElement(m.Z, null, r.createElement(b.H, { errorConfig: X }, r.createElement(_.Z, { location: t, onBackClick: u, title: G }, r.createElement($, { fetchPolicy: "network-only", render: d, variables: {} }))));
            }
            const Y = u.default.create((e) => ({ container: { gap: 8 } })),
                J = r.memo((0, f.Z)(q, { page: "settings", section: "affiliations" }));
        },
        254789: (e, t, a) => {
            a.d(t, { Z: () => Q });
            var n = a(202784),
                r = a(325686),
                i = a(688715),
                s = a(731708),
                c = a(392237),
                l = a(674132),
                o = a.n(l),
                u = a(503089),
                d = a(849353),
                p = a(311687),
                m = a(443781),
                b = a(736063),
                g = a(337394),
                f = a(321330),
                y = a(548797),
                _ = a(643242),
                E = a(85034),
                h = a(17412),
                v = a(685731),
                Z = a(137070),
                S = a(293084);
            const P = o().edbb700f,
                C = o().ba2e82a1,
                w = o().e9884540,
                k = o().bfb879aa,
                I = ({ subscription: e }) => {
                    const t = (0, Z.Z)()[e?.product?.rest_id ? g.v5.premium[e?.product?.rest_id] : null].hashed,
                        a = (0, y.gS)(e, "Discount", { status: "active" }),
                        i = (0, y.gS)(e, "Discount", { status: "pending" }),
                        c = (0, S.Z)(t).web_subscription_product_details,
                        l = c ? (0, v.Gi)(e?.charge_interval, c) : null,
                        o = l ? (0, v.d3)(l, !1, e) : "",
                        u = l ? (0, v.d3)(l, !1, e, !0, !1) : "";
                    return n.createElement(r.Z, null, a ? n.createElement(r.Z, { style: z.activeDiscountContainer, testID: "active_discount_info" }, n.createElement(r.Z, { style: z.discountTitleRow }, n.createElement(h.default, { style: z.activeDiscountIcon }), n.createElement(s.ZP, { color: "green900", size: "subtext2", weight: "medium" }, w)), n.createElement(s.ZP, { color: "green900", size: "subtext1", style: z.priceLabel, testID: "stripe-price-info" }, o)) : n.createElement(s.ZP, { color: "gray1100", size: "subtext1", style: z.priceLabel, testID: "stripe-price-info" }, o), i ? n.createElement(r.Z, { style: z.pendingDiscountContainer, testID: "pending_discount_info" }, n.createElement(r.Z, { style: z.discountTitleRow }, n.createElement(h.default, { style: z.pendingDiscountIcon }), n.createElement(s.ZP, { color: "gray900", size: "subtext2", weight: "medium" }, k)), n.createElement(s.ZP, { color: "gray900", size: "subtext1", style: z.priceLabel, testID: "stripe-price-info" }, u), e.next_billing_at?.time_in_millis ? n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, P({ date: C(new Date(parseInt(e.next_billing_at?.time_in_millis, 10))) })) : null) : null);
                },
                x = (e) => n.createElement(b.H, { errorConfig: { context: "manage-subscription-price-info" } }, n.createElement(I, e)),
                z = c.default.create((e) => ({ priceLabel: { marginBottom: e.spaces.space8 }, activeDiscountContainer: { backgroundColor: e.colors.green100, borderRadius: e.borderRadii.medium, padding: e.spaces.space8, gap: e.spaces.space8, marginTop: e.spaces.space8 }, pendingDiscountContainer: { borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, backgroundColor: e.colors.gray100, borderStyle: "dashed", borderRadius: e.borderRadii.medium, padding: e.spaces.space8, gap: e.spaces.space8, marginTop: e.spaces.space8 }, activeDiscountIcon: { color: e.colors.green900 }, pendingDiscountIcon: { color: e.colors.gray900 }, discountTitleRow: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center", marginBottom: e.spaces.space4 } })),
                T = o().e122fb3f,
                B = o().be103b84,
                D = o().ace43720,
                A = o().ba2e82a1,
                R = o().c8f18aa4,
                H = o().a341d1f7,
                V = o().e4aaf0f8,
                j = o().e5170220,
                L = o().j6d6b66e,
                N = o().fae1751f,
                O = o().fecebd4c,
                F = o().h201c4c2,
                M = o().i8385a2c,
                G = o().h80834de,
                U = o().baf97716,
                W = o().ae864b69,
                X = ({ subscription: e, viewer: t }) => {
                    const { label: a } = (0, f.Z)(),
                        { featureSwitches: c, userClaims: l } = (0, m.QZ)(),
                        [o, , b] = (0, E.Z)(e?.product?.rest_id || "", !0),
                        h = "SwitchScheduled" === o,
                        v = b ? g.St[g.v5.premium[b]] : null,
                        Z = (0, y.gS)(e, "FreeTrial", { status: "active" }),
                        S = e?.payment_source === _.H.Twitter,
                        P = e?.payment_source === _.H.Ads,
                        C = e?.payment_source === _.H.Gift,
                        w = !!e?.payment_source && e?.payment_source !== _.H.Stripe && l.isAnyPremiumSubscriber(),
                        k = e?.payment_source === _.H.TPay || e?.payment_source === _.H.Twitter,
                        I = c.getStringValue("subscriptions_gifting_help_url") || (0, i.ju)("https://help.x.com/forms/paid-features/general"),
                        z = n.useMemo(() => {
                            if (e?.payment_source && e?.payment_source !== _.H.Stripe) return e?.payment_source === _.H.AppleAppStore ? F : e?.payment_source === _.H.GooglePlay ? M : G;
                        }, [e]),
                        X = n.useCallback(() => (S ? n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, V, " ", n.createElement(s.ZP, { link: "https://help.x.com/forms/paid-features/general" }, O)) : P ? n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, j) : C ? n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, L, " ", n.createElement(s.ZP, { link: I }, O)) : n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, N({ mobilePlatform: z }))), [I, P, S, C, z]);
                    return n.createElement(r.Z, { style: $.container }, n.createElement(r.Z, { style: $.card }, n.createElement(r.Z, { style: $.header }, n.createElement(s.ZP, { size: "headline2", weight: "medium" }, a), n.createElement(r.Z, { bold: !0, style: $.label }, "Expire" === e?.state && e.payment_source !== _.H.Gift ? n.createElement(u.default, { style: $.expiringIcon }) : n.createElement(d.default, { style: $.activeIcon }), n.createElement(s.ZP, { align: "center", selectable: !1, size: "body", weight: "medium" }, "Expire" === e?.state && e.payment_source !== _.H.Gift ? D : B))), "Stripe" === e?.payment_source ? n.createElement(x, { subscription: e }) : null, h ? n.createElement(r.Z, { style: $.callout }, n.createElement(p.default, null), n.createElement(s.ZP, null, W({ tierName: v, date: A(new Date(parseInt(e?.next_billing_at?.time_in_millis, 10))) }))) : null, "Expire" === e?.state ? n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, U) : null, w || k ? X() : null, Z ? n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, T({ endDate: A(new Date(parseInt(Z?.ends_at_msec, 10))) })) : null, l.isVerifiedOrgAffiliate() ? n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, H({ organization: t?.highlightedLabel?.description })) : l.isVerifiedOrg() || l.isLegacyVerifiedOrg() ? n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, R) : null));
                },
                Q = (e) => n.createElement(b.H, { errorConfig: { context: "stripe-active-subscription-info" } }, n.createElement(X, e)),
                $ = c.default.create((e) => ({ container: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterHorizontal }, card: { borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray50, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterHorizontal }, label: { flexDirection: "row", minHeight: e.spaces.space32, alignItems: "center", flexShrink: 1 }, activeIcon: { marginEnd: e.spaces.space4, color: e.colors.primary }, expiringIcon: { marginEnd: e.spaces.space4 }, header: { justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space4 }, callout: { flexDirection: "row", padding: e.spaces.space8, backgroundColor: e.colors.blue50, borderRadius: e.borderRadii.small, gap: e.spaces.space8, alignItems: "center" } }));
        },
        386255: (e, t, a) => {
            a.r(t), a.d(t, { ManageSubscriptionScreen: () => L, default: () => N });
            var n = a(807896),
                r = a(202784),
                i = a(325686),
                s = a(107267),
                c = a(530732),
                l = a(928088),
                o = a(731708),
                u = a(392237),
                d = a(674132),
                p = a.n(d),
                m = a(191796),
                b = a(443781),
                g = a(652904),
                f = a(736063),
                y = a(177210),
                _ = a(670094),
                E = a(147595),
                h = a(811574),
                v = a(548797),
                Z = a(643242),
                S = a(275158),
                P = a(264922),
                C = a(254789),
                w = a(71620),
                k = a(668214),
                I = a(818581),
                x = a(919022);
            const z = (0, k.Z)()
                    .propsFromState(() => ({ viewerUser: x.ZP.selectViewerUser, userPreferences: I.kQ }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, w.zr)("AFFILIATES_SCREEN"), fetchUserPreferencesIfNeeded: I.xQ }))
                    .withAnalytics({ page: "subscriptions", section: "management" }),
                T = p().ib35705e,
                B = p().de9f111a,
                D = p().d5839f9e,
                A = p().a840c22c,
                R = p().aaa798fc,
                H = p().e31456f8,
                V = p().a7c4ecea,
                j = p().h15cc518;
            function L(e) {
                const { analytics: t, createLocalApiErrorHandler: a, fetchUserPreferencesIfNeeded: u, viewerUser: d } = e,
                    p = (0, h.Z)(),
                    f = (0, E.R)(p),
                    w = (0, s.useLocation)(),
                    { userClaims: k } = r.useContext(b.rC),
                    I = f?.payment_source,
                    x = (0, y.Z)({ returnUrl: S.d9, originProduct: "TwitterBlue" });
                r.useEffect(() => {
                    u().catch(a({ ...(0, _.d)(), showToast: !0 }));
                }),
                    r.useEffect(() => {
                        t.scribe({ action: "impression" });
                    }, [t]);
                const z = k.isAnyPremiumSubscriber(),
                    L = (0, v.gS)(f, "FreeTrial", { status: "active" }),
                    N = r.useCallback(() => {
                        t.scribe({ component: "expiring-sub-manage-subscription", action: "click" }), x?.();
                    }, [t, x]);
                return r.createElement(
                    g.Z,
                    null,
                    r.createElement(
                        P.Z,
                        { location: w, title: T },
                        z ? r.createElement(C.Z, { subscription: f, viewer: d }) : null,
                        r.createElement(
                            i.Z,
                            null,
                            (() => {
                                const e = !!I && I === Z.H.Stripe && z,
                                    t = "Expire" === f?.state,
                                    a = ["premium-basic", "premium-basic-test", "premium-basic-sandbox", "rogue-one-prod-2", "rogue-one-test-2-1", "rogue-one-sandbox-2"],
                                    s = ({ description: e, isExternal: t, label: a, ...s }) => r.createElement(c.Z, (0, n.Z)({}, s, { disabled: !x, style: O.manageSubscriptionInteraction }), r.createElement(l.Z, null, r.createElement(i.Z, { style: O.manageSubscriptionSection }, r.createElement(i.Z, { style: O.manageSubscriptionSectionBody }, r.createElement(o.ZP, { color: "blue500", weight: "medium" }, a), r.createElement(o.ZP, { color: "gray700", size: "subtext2" }, e)), t ? r.createElement(m.default, { style: O.goToSubscriptionPortalIcon }) : null)));
                                if (e) {
                                    const e = a.find((e) => e === f?.product?.rest_id) ? { title: R, desc: V } : { title: H, desc: j };
                                    return r.createElement(r.Fragment, null, L || t ? null : r.createElement(s, { description: e.desc, label: e.title, link: { pathname: "/i/premium_tier_switch", state: { product: "BlueVerifiedPlus" } }, role: "button", testID: "tier-switch-link" }), t ? null : r.createElement(s, { description: D, label: k.isVerifiedOrg() || k.isVerifiedOrgAffiliate() ? A : B, link: "/settings/subscription/manage" }), t ? r.createElement(s, { description: D, isExternal: !0, label: B, onClick: N }) : null);
                                }
                                return null;
                            })(),
                        ),
                    ),
                );
            }
            const N = z((e) => r.createElement(f.H, { errorConfig: { context: "manage_subscription_screen" } }, r.createElement(L, e))),
                O = u.default.create((e) => ({ manageSubscriptionSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, manageSubscriptionSectionBody: { flexShrink: 1 }, offPlatformSubscriptionSection: { flexDirection: "column", justifyContent: "space-between" }, goToSubscriptionPortalIcon: { color: e.colors.gray700, flexShrink: 0 }, manageSubscriptionInteraction: { cursor: "pointer" }, blueVerifiedCalloutWrapper: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, newLabelWrapper: { flexDirection: "row" }, newLabel: { backgroundColor: e.colors.blue50, color: e.colors.primary900, marginEnd: 10, borderRadius: e.borderRadii.xLarge, padding: 10 }, iconThumbnail: { marginEnd: e.spaces.space8 }, verifiedOrganizationsSubscriptionDescription: { marginTop: e.spaces.space8 }, upgradeDowngradeComingSoonLabel: { marginTop: e.spaces.space16, marginStart: e.spaces.space16, marginBottom: e.spaces.space12 } }));
        },
        185874: (e, t, a) => {
            a.r(t), a.d(t, { default: () => be });
            var n = a(202784),
                r = a(443781),
                i = a(177210),
                s = a(337394),
                c = a(147595),
                l = a(811574),
                o = a(548797),
                u = a(685731),
                d = a(293115),
                p = a(275158),
                m = a(137070),
                b = a(293084),
                g = a(325686),
                f = a(107267),
                y = a(731708),
                _ = a(154003),
                E = a(392237),
                h = a(674132),
                v = a.n(h),
                Z = a(980407),
                S = a(725405);
            const P = [
                    { label: v().iccac88e, subscriptions: { BlueVerified: !0 } },
                    { label: v().d7a124d8, subscriptions: { BlueVerifiedPlus: !0 } },
                    { label: v().d2d22c36, subscriptions: { BlueVerifiedPlus: !0 } },
                    { label: v().j249b1d4, subscriptions: { PremiumBasic: !0, BlueVerifiedPlus: !0, BlueVerified: !0 } },
                    { label: v().c4a37384, subscriptions: { PremiumBasic: !0 } },
                    { label: v().fb656858, subscriptions: { PremiumBasic: !0 } },
                    { label: v().faaec212, subscriptions: { BlueVerifiedPlus: !0, BlueVerified: !0 } },
                    { label: v().fb3c7168, subscriptions: { PremiumBasic: !0, BlueVerifiedPlus: !0, BlueVerified: !0 } },
                    { label: v().b346bc12, subscriptions: { BlueVerifiedPlus: !0, BlueVerified: !0 } },
                ],
                C = v().af66a072,
                w = v().a092f1ba,
                k = v().g96c7f48,
                I = ({ activeProductCategory: e, activeSubscription: t, churnPreventionOfferAvailable: a, goToStripePortal: r, pendingDiscount: i, setCurrentFlowStep: s }) => {
                    const c = (0, f.useHistory)(),
                        l = (0, S.Z)(),
                        u = !!(0, o.gS)(t, "FreeTrial", { status: "active" }),
                        d = n.useCallback(() => {
                            l.scribe({ action: "click", element: "change_tier" });
                        }, [l]),
                        p = n.useCallback(() => {
                            i ? s("PendingOfferStep") : a ? s("OfferStep") : (l.scribe({ action: "click", element: "continue_to_cancel" }), r && r());
                        }, [l, r, a, s, i]);
                    return n.createElement(
                        Z.Z,
                        { backButtonType: "back", hideBackButton: !1, history: c, onBackClick: () => s("OptionsStep") },
                        n.createElement(
                            g.Z,
                            { style: x.root },
                            n.createElement(
                                g.Z,
                                { style: x.content },
                                n.createElement(y.ZP, { align: "left", size: "title1", weight: "heavy" }, C),
                                n.createElement(
                                    g.Z,
                                    { role: "list", style: x.list },
                                    P.filter(({ subscriptions: t }) => t.hasOwnProperty(e)).map(({ label: e }) => n.createElement(y.ZP, { key: e, role: "listitem", style: x.listItem }, e)),
                                ),
                                u ? null : n.createElement(_.ZP, { link: "/i/premium_tier_switch", onPress: d, size: "xLarge", style: x.button, type: "primaryOutlined" }, k),
                                n.createElement(_.ZP, { disabled: !r, onPress: p, size: "xLarge", style: x.button, type: "destructiveFilled" }, w),
                            ),
                        ),
                    );
                },
                x = E.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto" }, button: { marginVertical: e.spaces.space8 }, list: { marginVertical: e.spaces.space20 }, listItem: { display: "list-item", listStyle: "disc", listStylePosition: "inside", marginVertical: e.spaces.space8 } }));
            var z = a(40610),
                T = a(167630),
                B = a(913973),
                D = a(125498),
                A = a(952793),
                R = a(199087),
                H = a(336629);
            const V = v().je8143e1,
                j = v().j5847735,
                L = v().a092f1ba,
                N = v().j88ba18e,
                O = v().da3431f9,
                F = v().i6fbfc72,
                M = v().f1bc6309,
                G = v().ef4602ec,
                U = v().fdb7b52a,
                W = ({ activeProductCategory: e, activeSubscription: t, activeTierPrice: a, goToStripePortal: r, offer: i, setCurrentFlowStep: c }) => {
                    const l = (0, f.useHistory)(),
                        o = (0, S.Z)(),
                        [u, d] = (0, R.Z)(),
                        [p, m] = n.useState(!1),
                        b = (0, A.hC)("subscriptions_marketing_page_include_tax_enabled");
                    n.useEffect(() => {
                        o.scribe({ component: "churn_prevent_offer", action: "impression" });
                    }, [o]);
                    const E = n.useCallback(() => {
                            o.scribe({ action: "click", component: "churn_prevent_offer", element: "continue_to_cancel" }), r && r();
                        }, [o, r]),
                        h = s.St[e],
                        P = n.useMemo(() => {
                            const e = { percentage: i.metadata.percent_off, productName: h, duration: i.metadata.duration_in_interval };
                            return "Month" === a?.charge_interval ? V(e) : j(e);
                        }, [a, i, h]),
                        C = n.useCallback(() => {
                            m(!1),
                                o.scribe({ component: "churn_prevent_offer", element: "redeem_button", action: "click" }),
                                u({ offerProgramId: i.program_id, productId: t?.product?.rest_id ?? "", redeemOfferType: "CancellationRetention" })
                                    .then((e) => {
                                        "WebPaymentsRedeemOfferResultSuccess" === e.redeem_offer?.__typename ? (o.scribe({ component: "churn_prevent_offer", action: "success" }), c("OfferSuccessStep")) : (m(!0), o.scribe({ component: "churn_prevent_offer", action: "error" }));
                                    })
                                    .catch(() => {
                                        m(!0), o.scribe({ component: "churn_prevent_offer", action: "failure" });
                                    });
                        }, [u, c, t, i, o]);
                    return n.createElement(
                        Z.Z,
                        { backButtonType: "back", hideBackButton: !1, history: l, onBackClick: () => c("CancelStep") },
                        n.createElement(
                            g.Z,
                            { style: X.root },
                            n.createElement(
                                g.Z,
                                { style: X.content },
                                n.createElement(y.ZP, { align: "left", size: "title1", weight: "heavy" }, P),
                                n.createElement(y.ZP, { style: X.description }, O({ productName: h })),
                                n.createElement(
                                    g.Z,
                                    { style: X.list },
                                    n.createElement(
                                        g.Z,
                                        { style: X.listItem },
                                        n.createElement(B.default, null),
                                        n.createElement(
                                            y.ZP,
                                            null,
                                            ((e, t, a) => {
                                                const r = (0, H.T)({ price: e, annualPriceMonthly: !1, includeTax: a }),
                                                    i = (0, H.T)({ price: e, annualPriceMonthly: !1, includeTax: a, percentOff: t.metadata.percent_off }),
                                                    s = { strike: n.createElement(y.ZP, { style: { textDecorationLine: "line-through" }, testID: "strikethrough-price" }), green: n.createElement(y.ZP, { color: "green500", testID: "discount-price", weight: "medium" }) },
                                                    c = { duration: t.metadata.duration_in_interval ?? 0, standardPrice: r, discountedPrice: i };
                                                return "Year" === e.charge_interval ? n.createElement(v().I18NFormatMessage, { $i18n: "e9dc8a25", duration: c.duration }, n.cloneElement(s.strike, null, v().af283938({ standardPrice: c.standardPrice })), n.cloneElement(s.green, null, v().c284b365({ discountedPrice: c.discountedPrice }))) : n.createElement(v().I18NFormatMessage, { $i18n: "f8a9cbb7", duration: c.duration }, n.cloneElement(s.strike, null, v().e2673372({ standardPrice: c.standardPrice })), n.cloneElement(s.green, null, v().jd2dc103({ discountedPrice: c.discountedPrice })));
                                            })(a, i, b),
                                        ),
                                    ),
                                    n.createElement(g.Z, { style: X.listItem }, n.createElement(B.default, null), n.createElement(y.ZP, null, F)),
                                    n.createElement(g.Z, { style: X.listItem }, n.createElement(B.default, null), n.createElement(y.ZP, null, M({ productName: h }))),
                                    n.createElement(y.ZP, { style: X.disclaimer }, U),
                                ),
                                p ? n.createElement(z.Z.Danger, { text: G }) : null,
                                n.createElement(_.ZP, { disabled: d, icon: d ? void 0 : n.createElement(D.default, null), onPress: C, size: "xLarge", style: X.button, type: "primaryOutlined" }, d ? n.createElement(T.Z, null) : N),
                                n.createElement(_.ZP, { disabled: !r, onPress: E, size: "xLarge", style: X.button, type: "destructiveFilled" }, L),
                            ),
                        ),
                    );
                },
                X = E.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto" }, button: { marginVertical: e.spaces.space8 }, list: { gap: e.spaces.space12, marginBottom: e.spaces.space20 }, listItem: { flexDirection: "row", gap: e.spaces.space4 }, description: { marginVertical: e.spaces.space16 }, disclaimer: { marginTop: e.spaces.space16 } }));
            a(136728);
            const Q = v().c6150942,
                $ = v().fdb7b52a,
                q = v().a905eac6,
                Y = (e) => {
                    const t = (0, f.useHistory)();
                    return n.createElement(Z.Z, { backButtonType: "close", hideBackButton: !1, history: t, onBackClick: () => t.push("/i/premium") }, n.createElement(g.Z, { style: J.root }, n.createElement(g.Z, { style: J.content }, n.createElement(y.ZP, { align: "left", size: "title1", weight: "heavy" }, Q), n.createElement(y.ZP, { align: "left" }, $), n.createElement(_.ZP, { link: "/i/premium", size: "xLarge", style: J.button, type: "primaryFilled" }, q))));
                },
                J = E.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto", gap: e.spaces.space16 }, button: { marginVertical: e.spaces.space8 } }));
            var K = a(525754);
            const ee = Object.freeze({ paymentMethod: "paymentMethod", billingInformation: "billingInformation", cancel: "cancel" }),
                te = v().j6083a1c,
                ae = v().c1df579e,
                ne = [
                    { label: v().b4fa4630, value: ee.paymentMethod, containerStyle: { paddingHorizontal: 0 } },
                    { label: v().ef0dfa5a, value: ee.billingInformation, containerStyle: { paddingHorizontal: 0 } },
                    { label: v().f5b352ec, value: ee.cancel, containerStyle: { paddingHorizontal: 0 } },
                ],
                re = ({ goToStripePortal: e, setCurrentFlowStep: t }) => {
                    const a = (0, f.useHistory)(),
                        [r, i] = n.useState(),
                        s = (0, S.Z)(),
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
                    return n.createElement(Z.Z, { backButtonType: "close", hideBackButton: !1, history: a, onBackClick: () => a.goBackThroughModals() }, n.createElement(g.Z, { style: ie.root }, n.createElement(g.Z, { style: ie.content }, n.createElement(y.ZP, { size: "title2", weight: "heavy" }, te), n.createElement(g.Z, { style: ie.radio }, n.createElement(K.Z, { name: "editOption", onChange: c, options: ne, value: r })), n.createElement(_.ZP, { disabled: !r || !e, onPress: l, size: "xLarge", style: ie.button, type: "primaryFilled" }, ae))));
                },
                ie = E.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, radio: { marginBottom: e.spaces.space24 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto" }, button: { marginVertical: e.spaces.space8 }, subscriptionDetails: { marginVertical: e.spaces.space16 }, marginBottom: { marginBottom: e.spaces.space8 }, currentPlanContent: { backgroundColor: e.colors.gray50, padding: e.spaces.space8, borderRadius: e.borderRadii.medium, width: "100%" } }));
            var se = a(125363),
                ce = a(919022),
                le = a(254789);
            const oe = v().j317d958,
                ue = v().a46e42d2,
                de = v().a092f1ba,
                pe = ({ activeSubscription: e, goToStripePortal: t, pendingDiscount: a }) => {
                    const r = (0, f.useHistory)(),
                        i = (0, S.Z)(),
                        s = (0, se.v9)(ce.ZP.selectViewerUser),
                        c = n.useCallback(() => {
                            i.scribe({ action: "click", component: "pending_offer_callout", element: "continue_to_cancel" }), t && t();
                        }, [i, t]);
                    return n.createElement(Z.Z, { backButtonType: "close", hideBackButton: !1, history: r }, n.createElement(g.Z, { style: me.root }, n.createElement(g.Z, { style: me.content }, n.createElement(y.ZP, { align: "left", size: "title1", weight: "heavy" }, oe), n.createElement(le.Z, { subscription: e, viewer: s }), n.createElement(_.ZP, { link: "/i/premium", size: "xLarge", style: me.button, type: "primaryOutlined" }, ue), n.createElement(_.ZP, { disabled: !t, onPress: c, size: "xLarge", style: me.button, type: "destructiveFilled" }, de))));
                },
                me = E.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto", gap: e.spaces.space16 }, button: { marginVertical: e.spaces.space8 } }));
            function be(e) {
                const { featureSwitches: t } = (0, r.QZ)(),
                    a = (0, m.Z)(),
                    g = (0, l.Z)(),
                    f = (0, c.R)(g),
                    y = f?.product?.rest_id ? s.v5.premium[f?.product?.rest_id] : null,
                    _ = (0, o.gS)(f, "Discount", { status: "pending" }),
                    E = a[y].hashed,
                    h = (0, b.Z)(E, { moment: "CancelSubscription" }).web_subscription_product_details,
                    v = h ? (0, u.Gi)(f?.charge_interval, h) : null,
                    Z = v ? (0, u.fS)(v, !0, !1) : null,
                    S = !!Z && t.isTrue("subscriptions_offers_churn_prevention_enabled"),
                    [P, C] = n.useState("OptionsStep"),
                    w = (0, i.Z)({ returnUrl: p.d9, originProduct: "TwitterBlue" });
                if (!y || !f) return null;
                return n.createElement(
                    d.nO,
                    { namespace: { page: "subscriptions_manage" } },
                    (() => {
                        switch (P) {
                            case "OptionsStep":
                                return n.createElement(re, { goToStripePortal: w, setCurrentFlowStep: C });
                            case "CancelStep":
                                return n.createElement(I, { activeProductCategory: y, activeSubscription: f, activeTierPrice: v, churnPreventionOfferAvailable: S, goToStripePortal: w, pendingDiscount: _, setCurrentFlowStep: C });
                            case "PendingOfferStep":
                                return n.createElement(pe, { activeSubscription: f, goToStripePortal: w, pendingDiscount: _ });
                            case "OfferStep":
                                return Z && v ? n.createElement(W, { activeProductCategory: y, activeSubscription: f, activeTierPrice: v, goToStripePortal: w, offer: Z, setCurrentFlowStep: C }) : null;
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
                u = a(674132),
                d = a.n(u),
                p = a(491831),
                m = a(856151),
                b = a(711223),
                g = a(462770),
                f = a(199213),
                y = a(469149),
                _ = a(92235),
                E = a(534763),
                h = a(698537),
                v = a(443781),
                Z = a(652904),
                S = a(883229),
                P = a(725516),
                C = a(535338),
                w = a(264922),
                k = a(873959),
                I = a(277660),
                x = a.n(I),
                z = a(731708);
            const T = d().c9b82b4c,
                B = d().ibb5e1c8,
                D = d().b255df58,
                A = d().b3f834c8,
                R = d().i14be2c6,
                H = { Approved: T, NotStarted: null, Rejected: B, Submitted: D, Waitlisted: A },
                V = k.Z,
                j = ({ viewer: e }) => {
                    const t = x()(V, e),
                        a = !!t?.is_active_creator ? R : H[t?.user_results?.result?.super_follows_application_status || "NotStarted"];
                    return r.createElement(z.ZP, { color: "gray700", size: "subtext2" }, a);
                },
                L = d().d299431c,
                N = d().d7b51c68,
                O = d().f66d24be,
                F = d().i8132774,
                M = d().j087774e,
                G = d().a1222584,
                U = (0, c.ju)("https://help.x.com/using-twitter/creator-dashboard"),
                W = { context: "MONETIZATION_SETTINGS" },
                X = n.Z,
                Q = () => r.createElement(i.Z, { style: J.monetizationOptions }, r.createElement(_.ZP, { Icon: p.default, decoration: r.createElement(h.Z, { type: h.j.Crown }), header: N, iconColor: "plum500", link: "/settings/superfollows", primaryText: F })),
                $ = () => r.createElement(i.Z, { style: J.monetizationOptions }, r.createElement(_.ZP, { Icon: m.default, decoration: r.createElement(h.Z, { type: h.j.Award }), header: M, link: "/settings/awards", primaryText: G })),
                q = () => {
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
                    return r.createElement(r.Fragment, null, u ? r.createElement(f.Z, { stripeStatus: s.stripe_account_status, type: "earnings", user: s }) : null, "NotStarted" === c ? r.createElement(Q, null) : r.createElement(y.Z, { description: i ? null : r.createElement(j, { viewer: n }), isActiveCreator: i, user: s }), o && t && !l ? r.createElement($, null) : r.createElement(g.Z, { user: s }));
                },
                Y = () => {
                    const e = r.useMemo(() => ({ type: "CustomRetry", content: () => r.createElement(E.H, { Icon: p.default, description: null, iconColor: "plum500", label: N, link: "/settings/superfollows" }) }), []);
                    return r.createElement(S.N, { errorConfig: W, fallback: e }, r.createElement(r.Suspense, { fallback: null }, r.createElement(q, null)));
                },
                J = o.default.create((e) => ({ monetizationOptions: { margin: e.spaces.space16 }, infoIconGray: { color: e.colors.gray300 } })),
                K = r.memo(
                    (0, P.Z)(
                        () => {
                            const e = (0, s.useLocation)(),
                                t = () => r.createElement(l.ZP, { "aria-label": O, icon: r.createElement(b.default, null), link: U, type: "primaryText" });
                            return r.createElement(Z.Z, null, r.createElement(w.Z, { location: e, rightControl: r.createElement(t, null), screenType: "primaryDetail", title: L }, r.createElement(Y, null)));
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
                d = a(40610),
                p = a(392237),
                m = a(674132),
                b = a.n(m),
                g = a(711223),
                f = a(130919),
                y = a(281629),
                _ = a(443781),
                E = a(652904),
                h = a(883229),
                v = a(952793),
                Z = a(725516),
                S = a(615027),
                P = a(264922),
                C = a(940289),
                w = a(599974),
                k = a(620243),
                I = a(698579);
            const x = b().d299431c,
                z = b().f66d24be,
                T = b().fd74390a,
                B = (0, c.ju)("https://help.x.com/using-twitter/creator-dashboard"),
                D = { context: "MONETIZATION_SETTINGS" },
                A = b().e8dc82e2,
                R = b().c12c5eb6,
                H = b().j53f5eb0,
                V = b().e9c1273a,
                j = b().jd176c82,
                L = b().d6ff74ca,
                N = b().e89cdac0,
                O = b().dd7a54b4,
                F = b().c747df1c,
                M = b().jff3ab68,
                G = b().j2876824,
                U = b().ebd06fb0,
                W = b().f65b960c,
                X = b().i4a1e936,
                Q = b().f5931b6a,
                $ = { appealLink: r.createElement(l.ZP, { link: (0, c.ju)("https://help.x.com/using-twitter/creator-ads-revenue-sharing") }) },
                q = { appealLink: r.createElement(l.ZP, { link: (0, c.ju)("https://help.x.com/using-x/creator-revenue-sharing") }) };
            function Y() {
                const e = (0, s.useLocation)(),
                    t = (0, v.hC)("super_follow_web_application_enabled"),
                    a = (0, v.hC)("responsive_web_ad_revenue_sharing_setup_enabled"),
                    c = (0, v.hC)("subscriptions_upsells_monetization_redesign_enabled"),
                    p = (0, v.hC)("responsive_web_ad_revenue_sharing_url_update_enabled"),
                    { userClaims: m } = (0, _.QZ)(),
                    E = m.isAnyPremiumSubscriber(),
                    h = (0, w.Z)(),
                    { stripe_connect_account: Z, verification_info: D, verified_program_application_status: Y, verified_program_eligibility: J, verified_user_profiles: ee } = (0, k.Z)(),
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
                    de = r.useMemo(() => J?.super_follows_eligibility || [], [J]),
                    pe = "PendingIdv" === ne,
                    me = r.useMemo(() => J?.ad_revenue_sharing_eligibility || [], [J]),
                    be = "PendingIdv" === re,
                    ge = ae && !ce,
                    fe = (te || "NotStarted" !== ne) && !ce,
                    ye = "Completed" === Z?.status,
                    _e = pe || be || ge || fe,
                    Ee = _e && se === f.t.CanVerifyIdentity,
                    he = (0, C.isPendingStatus)(e) && _e && se === f.t.PendingResult,
                    ve = r.useMemo(() => {
                        const e = [];
                        return (te || ("NotStarted" !== ne && "PendingIdv" !== ne && "Rejected" !== ne)) && e.push({ ...(0, I.Xb)({ id: I.XS.subscriptions, isActive: !!te, eligibility: de, applicationStatus: ne, pendingIdv: !ce, idvStatus: se, revShareUpdateEnabled: p, rejectedCreatorCanReapply: ie }) }), ae && !oe && e.push((0, I.Xb)({ id: I.XS.adRev, isActive: !0, eligibility: me, applicationStatus: "Approved", pendingIdv: !ce, idvStatus: se, revShareUpdateEnabled: p, rejectedCreatorCanReapply: ie })), e;
                    }, [ae, oe, te, ne, de, me, se, ce, p, ie]),
                    Ze = r.useMemo(() => {
                        const e = [];
                        return !te && t && ("NotStarted" === ne || "PendingIdv" === ne || "Rejected" === ne) && e.push((0, I.Xb)({ id: I.XS.subscriptions, isActive: !1, eligibility: de, applicationStatus: ne, pendingIdv: pe, idvStatus: se, revShareUpdateEnabled: p, rejectedCreatorCanReapply: ie })), null == ae && a ? e.push((0, I.Xb)({ id: I.XS.adRev, isActive: !1, eligibility: me, applicationStatus: re, pendingIdv: be, idvStatus: se, revShareUpdateEnabled: p, rejectedCreatorCanReapply: ie })) : ae && oe && e.push((0, I.Xb)({ id: I.XS.adRev, isActive: !1, eligibility: me, applicationStatus: re, isPayoutSetupIncomplete: oe, pendingIdv: !ce, idvStatus: se, revShareUpdateEnabled: p, rejectedCreatorCanReapply: ie })), e;
                    }, [a, se, be, pe, ae, oe, te, t, ce, ne, re, me, de, p, ie]),
                    Se = 0 === ve.length && !t && !a,
                    Pe = r.useCallback((e) => r.createElement(i.Z, { style: K.programHeader }, r.createElement(l.ZP, { size: "headline2", weight: "bold" }, e), ce && r.createElement(o.ZP, { altLabel: T, style: K.idvLabel, type: "bestValue" }, T)), [ce]),
                    Ce = r.useMemo(() => r.createElement(g.default, null), []),
                    we = r.useMemo(() => r.createElement(i.Z, { style: K.rightControl }, r.createElement(u.ZP, { "aria-label": z, icon: Ce, link: B, type: "primaryText" })), [Ce]);
                return (0, I.F9)({ subscriptionsApplicationStatus: ne, revShareApplicationStatus: re, revShareActive: ae, subscriptionsActive: te, isAnyPremiumSubscriber: E, monetizationUpsellEnabled: c })
                    ? r.createElement(S.Z, { to: "/i/monetization" })
                    : r.createElement(
                          P.Z,
                          { location: e, rightControl: we, screenType: "primaryDetail", title: x },
                          r.createElement(
                              i.Z,
                              { style: K.root },
                              he && r.createElement(d.Z.Success, { headline: U, style: K.pendingIdvCallout, testID: "submittedIDVCallout", text: W, withIcon: !0 }),
                              !!ve.length &&
                                  r.createElement(
                                      i.Z,
                                      { testID: "active-programs" },
                                      Pe(A),
                                      ve.map((e) => r.createElement(y.Z, (0, n.Z)({ key: e.id, styleOverride: K.pivot }, e))),
                                  ),
                              !!Ze.length &&
                                  r.createElement(
                                      i.Z,
                                      { style: ve.length ? K.sectionHeader : null, testID: "available-programs" },
                                      Pe(R),
                                      r.createElement(l.ZP, { color: "gray700", style: K.programInstruction }, p ? V : H),
                                      Ze.map((e) => r.createElement(y.Z, (0, n.Z)({ key: e.id, styleOverride: K.pivot }, e))),
                                  ),
                              Se && !Ze.length && oe && r.createElement(i.Z, { testID: "notPayoutCountry" }, r.createElement(l.ZP, { align: "left", size: "headline2", weight: "bold" }, j), r.createElement(l.ZP, { align: "left", color: "gray700", style: K.programInstruction }, L)),
                              r.createElement(y.Z, I.Fx),
                              le && r.createElement(l.ZP, { align: "left", color: "gray700", style: K.programInstruction, testID: "appealMessage" }, p ? r.createElement(b().I18NFormatMessage, { $i18n: "a4fc317d" }, r.cloneElement(q.appealLink, null, b().c8798a95)) : r.createElement(b().I18NFormatMessage, { $i18n: "a8e78be7" }, r.cloneElement($.appealLink, null, b().d809ac49))),
                              (ye || ue) && r.createElement(i.Z, { style: K.setupCallout, testID: "stripeSection" }, !ye && ue && r.createElement(r.Fragment, null, r.createElement(l.ZP, { size: "headline2", weight: "bold" }, O), r.createElement(l.ZP, { color: "gray700", style: K.programInstruction }, X)), r.createElement(u.ZP, { link: ye ? "https://connect.stripe.com/app/express" : I.j0, style: K.programInstruction, testID: "payoutActionButton", type: "primaryOutlined" }, ye ? N : F)),
                              Ee && r.createElement(i.Z, { style: K.setupCallout, testID: "creatorIdvSection" }, r.createElement(l.ZP, { size: "headline2", weight: "bold" }, M), r.createElement(l.ZP, { color: "gray700", style: K.programInstruction }, Q), r.createElement(u.ZP, { onPress: h, style: K.programInstruction, testID: "idvActionButton", type: "primaryOutlined" }, G)),
                          ),
                      );
            }
            function J() {
                const e = r.useMemo(() => ({ type: "CustomRetry", content: () => r.createElement(y.Z, I.Fx) }), []);
                return r.createElement(h.N, { errorConfig: D, fallback: e }, r.createElement(r.Suspense, { fallback: null }, r.createElement(Y, null)));
            }
            const K = p.default.create((e) => ({ root: { margin: e.spaces.space16 }, rightControl: { flexDirection: "row", alignItems: "center" }, idvLabel: { alignSelf: "middle" }, sectionHeader: { marginTop: e.spaces.space32 }, programInstruction: { marginTop: e.spaces.space8 }, pivot: { marginVertical: e.spaces.space4 }, setupCallout: { marginVertical: e.spaces.space16 }, pendingIdvCallout: { marginBottom: e.spaces.space16 }, programHeader: { flexDirection: "row", justifyContent: "space-between" } })),
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
            a.d(t, { F9: () => D, Fx: () => C, XS: () => d, Xb: () => B, j0: () => v });
            var n = a(688715),
                r = a(674132),
                i = a.n(r),
                s = a(234558),
                c = a(491831),
                l = a(521058),
                o = a(711223),
                u = a(720816);
            const d = Object.freeze({ adRev: "ad_revenue_sharing", subscriptions: "creator_subs", preRollAds: "pre_roll_video_ads" }),
                p = { Rejected: i().ibb5e1c8, Submitted: i().b255df58, Waitlisted: i().b3f834c8, Approved: i().bbe09d38, PendingIdv: i().efbc5066 },
                m = i().hc7631da,
                b = i().h72d71a2,
                g = i().e12b0b16,
                f = i().a1e57106,
                y = i().b5334780,
                _ = i().i51b4e22,
                E = i().h5bd7160,
                h = { CanVerifyIdentity: i().e32040c4, RequestLocked: i().d8f5cce4, PendingResult: i().j8769b42, IdentityNonVerifiable: E, UnavailableMissingBlueSubscription: E },
                v = { pathname: u.NW.stripeSetup, state: { cameFromEarningsDashboard: !0 } },
                Z = { Icon: s.default, iconBGColor: "green600", heading: "Video Ads", description: "You are on track for payouts", id: d.preRollAds, pill: { label: "NEW", color: "gray1000" }, link: "/settings/ad_rev_share_dashboard", scribeComponent: "pre-roll-ads-dashboard" },
                S = { Icon: c.default, iconBGColor: "blue600", heading: i().d7b51c68, description: "", id: d.subscriptions, link: "/settings/monetization/subscriptions/dashboard", scribeComponent: "creator-subscription-dashboard" },
                P = (e) => ({ Icon: l.default, iconBGColor: "orange600", heading: e ? i().be955554 : i().b03a3d62, description: i().cbbe29c2, id: d.adRev, link: "/settings/ad_rev_share_dashboard", scribeComponent: "ad-revenue-sharing-dashboard" }),
                C = { Icon: o.default, iconBGColor: "purple600", heading: i().g97a2d6c, description: i().f30774ea, id: "learn_more", link: (0, n.ju)("https://help.x.com/using-x/creator-dashboard"), scribeComponent: "learn-more" };
            function w(e, t) {
                return "ad_revenue_sharing" === e ? P(t) : "creator_subs" === e ? S : Z;
            }
            function k(e) {
                return e === d.adRev ? "/settings/ad_rev_share_eligibility" : e === d.subscriptions ? "/settings/superfollows/application/eligibility" : e === d.preRollAds ? "/" : void 0;
            }
            function I(e) {
                return e === d.adRev ? "/settings/ad_rev_share_setup" : e === d.subscriptions ? "/settings/superfollows" : e === d.preRollAds ? "/" : void 0;
            }
            function x(e, t) {
                return e === d.adRev ? (t ? i().bce47f48 : i().h7a68080) : e === d.subscriptions ? i().aea0b11a : e === d.preRollAds ? "Earn income from pre-roll ads served on videos you upload to X." : "";
            }
            function z(e) {
                return e === d.adRev ? "creator-ad-revenue-sharing-setup" : e === d.subscriptions ? "creator-subscription-setup" : "creator-pre-roll-ads-setup";
            }
            function T(e, t) {
                return { label: t || (e ? b : g), color: t ? "orange50" : e ? "green500" : "magenta500" };
            }
            function B({ applicationStatus: e, eligibility: t, id: a, idvStatus: n, isActive: r, isPayoutSetupIncomplete: s = !1, pendingIdv: c = !1, rejectedCreatorCanReapply: l, revShareUpdateEnabled: o = !1 }) {
                const u = { ...w(a, o) },
                    b = 0 === t.length || (1 === t.length && "id_verified" === t[0]);
                if (r && !c) return u;
                const g = n ? h[n] : "";
                if (a === d.subscriptions) {
                    const n = "NotStarted" === e || ("Rejected" === e && l),
                        r = "Rejected" === e && !l;
                    let s;
                    (u.link = r ? "/settings/superfollows/application/rejected" : n ? (b ? I(a) : k(a)) : void 0),
                        c ? (s = f) : r ? (s = _) : n || (s = y),
                        (u.description = (function (e, t, a, n, r, s) {
                            return e ? r : "Rejected" === t && s ? i().aea0b11a : p[t] || x(a, n);
                        })(c, e, a, o, g, l)),
                        (u.disabled = t.includes("generic_violation") || t.includes("do_not_charge")),
                        (u.pill = T(b, s)),
                        (u.scribeComponent = z(a));
                }
                return a === d.adRev && ((u.link = c || s ? void 0 : b ? I(a) : k(a)), (u.description = c ? g : s ? m : x(a, o)), (u.disabled = t.includes("generic_violation") || t.includes("do_not_charge") || t.includes("verified_type")), (u.pill = T(b, s || c ? f : void 0)), (u.scribeComponent = z(a))), a === d.preRollAds && ((u.link = s ? v : b ? I(a) : k(a)), (u.description = s ? m : x(a, o)), (u.disabled = t.includes("generic_violation") || t.includes("do_not_charge") || t.includes("verified_type")), (u.pill = T(b, s ? f : void 0)), (u.scribeComponent = z(a))), u;
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
                d = a(674132),
                p = a.n(d),
                m = a(323265),
                b = a(130919),
                g = a(980407),
                f = a(535338),
                y = a(599974);
            const _ = p().b0e986ec,
                E = p().eefd091e,
                h = p().cd616a5a,
                v = p().cce8c40a,
                Z = n.Z,
                S = (e) => {
                    const t = (0, s.useHistory)(),
                        a = (0, c.D2)(),
                        n = (0, y.Z)(),
                        { viewer: u } = (0, f.p)(Z, {}),
                        d = "/settings/monetization",
                        p = u.user_results.result,
                        S = p.verification_info?.identity_verification_status;
                    S === b.t.CanVerifyIdentity || t.push(d);
                    const P = a ? C.paddingWide : C.paddingNarrow,
                        w = r.useMemo(() => [C.root, P], [P]),
                        k = m.ZP.isTwitterApp(),
                        I = r.useCallback(() => t.goBack({ backLocation: d }), [t]);
                    return r.createElement(g.Z, { backButtonType: "close", backLocation: "/settings/monetization", documentTitle: _, hideBackButton: k, onBackClick: I }, r.createElement(i.Z, { style: w }, r.createElement(l.ZP, { "aria-level": 2, role: "heading", size: "title4", style: C.title, weight: "heavy" }, E), r.createElement(l.ZP, { style: C.subtitle }, h)), r.createElement(i.Z, { style: [C.bottomBarWrapper, P] }, r.createElement(o.ZP, { onPress: n, style: C.bottomBar, type: "primaryFilled" }, v)));
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
            a.r(t), a.d(t, { default: () => _ });
            var n = a(202784),
                r = a(943401),
                i = a(779610),
                s = a(674132),
                c = a.n(s),
                l = a(652904),
                o = a(293115),
                u = a(264922);
            const d = c().cbd449a0,
                p = c().ab125232,
                m = c().a5f32aa2,
                b = c().daef29b8,
                g = c().i0dd9b9e,
                f = c().aaafffda,
                y = { page: "settings", section: "mute_and_block" };
            function _(e) {
                const { location: t } = e;
                return n.createElement(o.nO, { namespace: y }, n.createElement(l.Z, null, n.createElement(u.Z, { location: t, screenType: "secondaryDetail", title: d }, n.createElement(r.Z, { description: p }), n.createElement(i.Z, { label: m, link: "/settings/blocked/all" }), n.createElement(i.Z, { label: b, link: "/settings/muted/all" }), n.createElement(i.Z, { label: g, link: "/settings/muted_keywords" }), n.createElement(i.Z, { label: f, link: "/settings/notifications/advanced_filters" }))));
            }
        },
        572667: (e, t, a) => {
            a.r(t), a.d(t, { NewsScreen: () => S, default: () => P });
            var n = a(202784),
                r = a(107267),
                i = a(943401),
                s = a(420412),
                c = a(674132),
                l = a.n(c),
                o = a(376278),
                u = a(847988),
                d = a(534763),
                p = a(443781),
                m = a(264922),
                b = a(71620),
                g = a(668214);
            const f = (0, g.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("TWITTER_BLUE_SETTINGS") }))
                    .withAnalytics({ page: "settings", section: "subscriptions", component: "news" }),
                y = l().cb165528,
                _ = l().e0221c42,
                E = l().b7fa0cfe,
                h = l().adcaa214,
                v = l().b62d6e4c,
                Z = l().acf63cd2;
            function S(e) {
                const { analytics: t } = e,
                    a = n.useContext(p.rC),
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
                        title: y,
                    },
                    n.createElement(i.Z, { description: _ }),
                    c.isTrueAndEnabled("subscriptions_feature_1007") &&
                        n.createElement(d.H, {
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
                    c.isTrueAndEnabled("subscriptions_feature_1005") && n.createElement(d.H, { Icon: u.default, description: Z, key: v, label: v, link: "", testID: "readerSection" }),
                    n.createElement(s.Z, null),
                );
            }
            const P = f(S);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-cff17ecc.55c2f45a.js.map
