"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-877d4cc6"],
    {
        110202: (e, t, a) => {
            a.r(t), a.d(t, { LocationInformation: () => C, default: () => z });
            var r = a(202784),
                n = a(943401),
                i = a(954110),
                c = a(779610),
                s = a(111677),
                l = a.n(s),
                o = a(443781),
                u = a(652904),
                m = a(944681),
                p = a(293115),
                d = a(725405),
                g = a(264922),
                b = a(71620),
                f = a(668214),
                y = a(205253),
                E = a(919022);
            const _ = (0, f.Z)()
                    .propsFromState(() => ({ settings: y.kQ, viewerUser: E.ZP.selectViewerUser }))
                    .adjustStateProps(({ settings: e, ...t }) => ({ ...t, allowLocationHistoryUseEnabled: e.allowLocationHistoryUse }))
                    .propsFromActions(() => ({ updateSettings: y.VP, createLocalApiErrorHandler: (0, b.zr)("LOCATION_INFORMATION_SCREEN") })),
                Z = l().jabb9c9a,
                h = l().dd533318,
                P = l().dc20d918,
                S = l().af7d89e6,
                v = l().d9138166,
                x = l().fcb6a5b8,
                k = l().j018f2a2,
                w = { page: "settings", section: "location_information" };
            function C({ allowLocationHistoryUseEnabled: e, createLocalApiErrorHandler: t, location: a, updateSettings: s, viewerUser: l }) {
                const b = (0, d.Z)(),
                    { featureSwitches: f } = r.useContext(o.rC),
                    y = !!l?.birthdate && (0, m.k)(l.birthdate.year, l.birthdate.month, l.birthdate.day),
                    E = !l || (f.isTrue("settings_for_you_recommendation_enabled") && y);
                return r.createElement(
                    p.nO,
                    { namespace: w },
                    r.createElement(
                        u.Z,
                        null,
                        r.createElement(
                            g.Z,
                            { location: a, screenType: "secondaryDetail", title: Z },
                            r.createElement(n.Z, { description: h }),
                            E
                                ? null
                                : r.createElement(i.Z, {
                                      checked: e,
                                      helpText: S,
                                      label: P,
                                      name: "allowLocationHistoryUse",
                                      onChange: function (e, a) {
                                          b.scribe({ ...w, element: e, action: a ? "enable" : "disable" }), s({ [e]: a }).catch(t());
                                      },
                                  }),
                            r.createElement(c.Z, { label: v, link: "/settings/your_twitter_data/locations" }),
                            r.createElement(c.Z, { label: x, link: "/settings/location" }),
                            r.createElement(c.Z, { label: k, link: "/settings/explore" }),
                        ),
                    ),
                );
            }
            const z = _(C);
        },
        487443: (e, t, a) => {
            a.r(t), a.d(t, { ManageAffiliateBadges: () => J, ManagesAffiliatesQueryRequest: () => q, default: () => Y });
            var r = a(143543),
                n = a(202784),
                i = a(325686),
                c = (a(585488), a(107267)),
                s = a(844685),
                l = a(750410),
                o = a(167630),
                u = a(392237),
                m = a(111677),
                p = a.n(m),
                d = a(652904),
                g = a(736063),
                b = a(301410),
                f = a(725516),
                y = a(312771),
                E = a(264922),
                _ = a(154003),
                Z = a(673510),
                h = a(661810),
                P = a(678773),
                S = a(516951);
            const v = p().ab8089ea,
                x = n.createElement(_.ZP, { icon: n.createElement(P.default, { "aria-label": v }), testID: "reorder", type: "primaryText" }),
                k = ({ affiliate: e, disabled: t, sortIndex: a }) => {
                    const { name: r, screen_name: c } = e.affiliated_account_results.result?.core || {},
                        s = e.affiliated_account_results.result?.avatar?.image_url || "";
                    return c && s && r && n.createElement(n.Fragment, null, n.createElement(Z.ZP, { "aria-checked": !0, avatarShape: "square", avatarSize: "xxLarge", avatarUri: s, decoration: void 0 !== a ? x : void 0, displayMode: "UserCompact", isDisabled: t, name: r, onCellClick: S.Z, screenName: c, userId: "", withInteractiveStyling: !0, withLink: !1 }), 0 === a && n.createElement(i.Z, { style: w.gutter }, n.createElement(h.Z, { spacing: "space2" })));
                },
                w = u.default.create((e) => ({ gutter: { marginHorizontal: e.spaces.space16 } })),
                C = n.memo(k);
            var z = a(716042),
                I = a(731708),
                T = a(782642),
                H = a(445250),
                D = (a(571372), a(658236)),
                B = a(351743),
                L = a.n(B);
            const V = D.Z,
                A = p().e2eac0c4,
                O = p().ef4602ec,
                F = (0, z.W8)(C),
                R = (0, z.JN)(({ isUpdatingAffiliates: e, items: t }) =>
                    n.createElement(
                        i.Z,
                        null,
                        n.createElement(I.ZP, { style: N.gutter, weight: "medium" }, A),
                        t.map((t, a) => n.createElement(F, { affiliate: t, disabled: e, index: a, key: a, sortIndex: a })),
                    ),
                ),
                j = ({ affiliations: e }) => {
                    const [t, a] = n.useState(e),
                        r = (0, f.z)(),
                        i = (0, T.p)(),
                        [c, s] = (() => {
                            const [e, t] = L()(V);
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
                                const s = (0, H.Z)(t, n, e);
                                a(s),
                                    c(s.map((e) => e.affiliated_account_results.rest_id)).catch(() => {
                                        a(t), i({ text: O });
                                    });
                            },
                            [t, r, c, i],
                        );
                    return n.createElement(R, { isUpdatingAffiliates: s, items: t, onSortEnd: l });
                },
                N = u.default.create((e) => ({ gutter: { marginHorizontal: e.spaces.space16 } })),
                M = n.memo(j),
                U = p().ce70c590,
                G = p().a49e1b2a,
                W = p().e2daf93c,
                Q = { context: "MANAGE_AFFILIATE_SETTING" },
                q = r.Z,
                $ = (0, b.z)(q, { errorConfig: { context: "MANAGE_AFFILIATES_SETTING_CONTEXT" } });
            function J() {
                const e = (0, f.z)(),
                    t = (0, c.useLocation)(),
                    a = (0, c.useHistory)(),
                    r = n.useCallback(() => {
                        a.goBack({ backLocation: "/settings/premium" });
                    }, [a]),
                    u = n.useCallback(() => {
                        e.scribe({ component: "back", action: "navigate" }), r();
                    }, [e, r]),
                    m = n.useCallback(({ data: e, fetchStatus: t, retry: a }) => {
                        if (t === y.ZP.LOADED) {
                            const { affiliations: t } = e?.managed_affiliations || {};
                            return n.createElement(i.Z, { style: X.container }, n.createElement(s.Z, { subtext: W, text: G }), 1 === t.length ? n.createElement(C, { affiliate: t[0] }) : n.createElement(M, { affiliations: t }));
                        }
                        return t === y.ZP.FAILED ? n.createElement(l.Z, { onRequestRetry: a }) : n.createElement(o.Z, null);
                    }, []);
                return n.createElement(d.Z, null, n.createElement(g.H, { errorConfig: Q }, n.createElement(E.Z, { location: t, onBackClick: u, title: U }, n.createElement($, { fetchPolicy: "network-only", render: m, variables: {} }))));
            }
            const X = u.default.create((e) => ({ container: { gap: 8 } })),
                Y = n.memo((0, f.Z)(J, { page: "settings", section: "affiliations" }));
        },
        254789: (e, t, a) => {
            a.d(t, { Z: () => X });
            var r = a(202784),
                n = a(325686),
                i = a(688715),
                c = a(731708),
                s = a(392237),
                l = a(111677),
                o = a.n(l),
                u = a(503089),
                m = a(849353),
                p = a(311687),
                d = a(443781),
                g = a(736063),
                b = a(337394),
                f = a(321330),
                y = a(548797),
                E = a(643242),
                _ = a(85034),
                Z = a(17412),
                h = a(952793),
                P = a(685731),
                S = a(137070),
                v = a(293084);
            const x = o().a991d9a3,
                k = o().edbb700f,
                w = o().e3f9d219,
                C = o().ba2e82a1,
                z = o().e9884540,
                I = o().bfb879aa,
                T = ({ fromPrice: e, subscription: t }) => {
                    const a = (0, h.hC)("subscriptions_management_billing_label_enabled"),
                        i = (0, S.Z)()[t?.product?.rest_id ? b.v5.premium[t?.product?.rest_id] : null].hashed,
                        s = (0, y.gS)(t, "Discount", { status: "active" }),
                        l = (0, y.gS)(t, "Discount", { status: "pending" }),
                        o = (0, v.Z)(i).web_subscription_product_details,
                        u = (0, h.hC)("subscriptions_management_use_active_price"),
                        m = e ?? (0, P.Gi)(t.charge_interval, u ? t.prices : o?.prices),
                        p = C(new Date(parseInt(t.next_billing_at?.time_in_millis, 10))),
                        d = m ? (0, P.d3)(m, !1, t) : "",
                        g = m ? (0, P.d3)(m, !1, t, !0, !1) : "",
                        f = r.useMemo(() => {
                            let e;
                            if (t.next_billing_at?.time_in_millis) return "Expire" === t.state ? (e = w({ date: p })) : l || (e = x({ date: p })), r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, e);
                        }, [l, t, p]);
                    return r.createElement(n.Z, null, s ? r.createElement(n.Z, { style: D.activeDiscountContainer, testID: "active_discount_info" }, r.createElement(n.Z, { style: D.discountTitleRow }, r.createElement(Z.default, { style: D.activeDiscountIcon }), r.createElement(c.ZP, { color: "green900", size: "subtext2", weight: "medium" }, z)), r.createElement(c.ZP, { color: "green900", size: "subtext1", style: D.priceLabel, testID: "stripe-price-info" }, d)) : r.createElement(c.ZP, { color: "gray1100", size: "subtext1", style: D.priceLabel, testID: "stripe-price-info" }, d), l ? r.createElement(n.Z, { style: D.pendingDiscountContainer, testID: "pending_discount_info" }, r.createElement(n.Z, { style: D.discountTitleRow }, r.createElement(Z.default, { style: D.pendingDiscountIcon }), r.createElement(c.ZP, { color: "gray900", size: "subtext2", weight: "medium" }, I)), r.createElement(c.ZP, { color: "gray900", size: "subtext1", style: D.priceLabel, testID: "stripe-price-info" }, g), t.next_billing_at?.time_in_millis ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, k({ date: p })) : null) : null, a ? f : null);
                },
                H = (e) => r.createElement(g.H, { errorConfig: { context: "manage-subscription-price-info" } }, r.createElement(T, e)),
                D = s.default.create((e) => ({ priceLabel: { marginBottom: e.spaces.space8 }, activeDiscountContainer: { backgroundColor: e.colors.green100, borderRadius: e.borderRadii.medium, padding: e.spaces.space8, gap: e.spaces.space8, marginVertical: e.spaces.space8 }, pendingDiscountContainer: { borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, backgroundColor: e.colors.gray100, borderStyle: "dashed", borderRadius: e.borderRadii.medium, padding: e.spaces.space8, gap: e.spaces.space8, marginTop: e.spaces.space8 }, activeDiscountIcon: { color: e.colors.green900 }, pendingDiscountIcon: { color: e.colors.gray900 }, discountTitleRow: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center", marginBottom: e.spaces.space4 } })),
                B = o().e122fb3f,
                L = o().be103b84,
                V = o().ace43720,
                A = o().ba2e82a1,
                O = o().c8f18aa4,
                F = o().a341d1f7,
                R = o().e4aaf0f8,
                j = o().e5170220,
                N = o().j6d6b66e,
                M = o().fae1751f,
                U = o().fecebd4c,
                G = o().h201c4c2,
                W = o().i8385a2c,
                Q = o().h80834de,
                q = o().baf97716,
                $ = o().ae864b69,
                J = ({ subscription: e, viewer: t }) => {
                    const { label: a } = (0, f.Z)(),
                        { featureSwitches: s, userClaims: l } = (0, d.QZ)(),
                        { fromPrice: o, status: g, targetProductSku: Z } = (0, _.Z)(e?.product?.rest_id || "", !0),
                        h = "SwitchScheduled" === g,
                        P = Z ? b.St[b.v5.premium[Z]] : null,
                        S = (0, y.gS)(e, "FreeTrial", { status: "active" }),
                        v = e?.payment_source === E.H.Twitter,
                        x = e?.payment_source === E.H.Ads,
                        k = e?.payment_source === E.H.Gift,
                        w = !!e?.payment_source && e?.payment_source !== E.H.Stripe && l.isAnyPremiumSubscriber(),
                        C = e?.payment_source === E.H.TPay || e?.payment_source === E.H.Twitter,
                        z = s.getStringValue("subscriptions_gifting_help_url") || (0, i.ju)("https://help.x.com/forms/paid-features/general"),
                        I = r.useMemo(() => {
                            if (e?.payment_source && e?.payment_source !== E.H.Stripe) return e?.payment_source === E.H.AppleAppStore ? G : e?.payment_source === E.H.GooglePlay ? W : Q;
                        }, [e]),
                        T = r.useCallback(() => (v ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, R, " ", r.createElement(c.ZP, { link: "https://help.x.com/forms/paid-features/general" }, U)) : x ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, j) : k ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, N, " ", r.createElement(c.ZP, { link: z }, U)) : r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, M({ mobilePlatform: I }))), [z, x, v, k, I]);
                    return r.createElement(n.Z, { style: Y.container }, r.createElement(n.Z, { style: Y.card }, r.createElement(n.Z, { style: Y.header }, r.createElement(c.ZP, { size: "headline2", weight: "medium" }, a), r.createElement(n.Z, { bold: !0, style: Y.label }, "Expire" === e?.state && e.payment_source !== E.H.Gift ? r.createElement(u.default, { style: Y.expiringIcon }) : r.createElement(m.default, { style: Y.activeIcon }), r.createElement(c.ZP, { align: "center", selectable: !1, size: "body", weight: "medium" }, "Expire" === e?.state && e.payment_source !== E.H.Gift ? V : L))), "Stripe" === e?.payment_source ? r.createElement(H, { fromPrice: h ? o : null, subscription: e }) : null, h ? r.createElement(n.Z, { style: Y.callout }, r.createElement(p.default, { style: Y.iconClock }), r.createElement(c.ZP, { size: "subtext1" }, $({ tierName: P, date: A(new Date(parseInt(e?.next_billing_at?.time_in_millis, 10))) }))) : null, "Expire" === e?.state ? r.createElement(c.ZP, { color: "gray700", size: "subtext2", style: Y.expiringSubscriptionLabel }, q) : null, w || C ? T() : null, S ? r.createElement(c.ZP, { color: "gray700", size: "subtext2", style: Y.freeTrialLabel }, B({ endDate: A(new Date(parseInt(S?.ends_at_msec, 10))) })) : null, l.isVerifiedOrgAffiliate() ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, F({ organization: t?.highlightedLabel?.description })) : l.isVerifiedOrg() || l.isLegacyVerifiedOrg() ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, O) : null));
                },
                X = (e) => r.createElement(g.H, { errorConfig: { context: "stripe-active-subscription-info" } }, r.createElement(J, e)),
                Y = s.default.create((e) => ({ container: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterHorizontal }, card: { borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray50, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterHorizontal }, label: { flexDirection: "row", minHeight: e.spaces.space32, alignItems: "center", flexShrink: 1 }, activeIcon: { marginEnd: e.spaces.space4, color: e.colors.primary }, expiringIcon: { marginEnd: e.spaces.space4 }, header: { justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space4 }, callout: { flexDirection: "row", padding: e.spaces.space8, backgroundColor: e.colors.blue50, borderRadius: e.borderRadii.small, gap: e.spaces.space8, alignItems: "center", marginTop: e.spaces.space8 }, freeTrialLabel: { marginTop: e.spaces.space8 }, expiringSubscriptionLabel: { marginTop: e.spaces.space8 }, iconClock: { color: e.colors.text, minWidth: 16 } }));
        },
        386255: (e, t, a) => {
            a.r(t), a.d(t, { ManageSubscriptionScreen: () => R, default: () => j });
            var r = a(807896),
                n = a(202784),
                i = a(325686),
                c = a(107267),
                s = a(530732),
                l = a(928088),
                o = a(731708),
                u = a(392237),
                m = a(111677),
                p = a.n(m),
                d = a(191796),
                g = a(443781),
                b = a(652904),
                f = a(736063),
                y = a(952793),
                E = a(177210),
                _ = a(670094),
                Z = a(147595),
                h = a(811574),
                P = a(548797),
                S = a(643242),
                v = a(275158),
                x = a(264922),
                k = a(254789),
                w = a(71620),
                C = a(668214),
                z = a(818581),
                I = a(919022);
            const T = (0, C.Z)()
                    .propsFromState(() => ({ viewerUser: I.ZP.selectViewerUser, userPreferences: z.kQ }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, w.zr)("AFFILIATES_SCREEN"), fetchUserPreferencesIfNeeded: z.xQ }))
                    .withAnalytics({ page: "subscriptions", section: "management" }),
                H = p().ib35705e,
                D = p().de9f111a,
                B = p().d5839f9e,
                L = p().a840c22c,
                V = p().aaa798fc,
                A = p().e31456f8,
                O = p().a7c4ecea,
                F = p().h15cc518;
            function R(e) {
                const { analytics: t, createLocalApiErrorHandler: a, fetchUserPreferencesIfNeeded: u, viewerUser: m } = e,
                    p = (0, y.hC)("subscriptions_management_query_active_price"),
                    f = (0, h.Z)({ fetchPrices: p }),
                    w = (0, Z.R)(f),
                    C = (0, c.useLocation)(),
                    { userClaims: z } = n.useContext(g.rC),
                    I = w?.payment_source,
                    T = (0, E.Z)({ returnUrl: v.d9, originProduct: "TwitterBlue" });
                n.useEffect(() => {
                    u().catch(a({ ...(0, _.d)(), showToast: !0 }));
                }),
                    n.useEffect(() => {
                        t.scribe({ action: "impression" });
                    }, [t]);
                const R = z.isAnyPremiumSubscriber(),
                    j = (0, P.gS)(w, "FreeTrial", { status: "active" }),
                    M = n.useCallback(() => {
                        t.scribe({ component: "expiring-sub-manage-subscription", action: "click" }), T?.();
                    }, [t, T]);
                return n.createElement(
                    b.Z,
                    null,
                    n.createElement(
                        x.Z,
                        { location: C, title: H },
                        R ? n.createElement(k.Z, { subscription: w, viewer: m }) : null,
                        n.createElement(
                            i.Z,
                            null,
                            (() => {
                                const e = !!I && I === S.H.Stripe && R,
                                    t = "Expire" === w?.state,
                                    a = ["premium-basic", "premium-basic-test", "premium-basic-sandbox", "rogue-one-prod-2", "rogue-one-test-2-1", "rogue-one-sandbox-2"],
                                    c = ({ description: e, isExternal: t, label: a, ...c }) => n.createElement(s.Z, (0, r.Z)({}, c, { disabled: !T, style: N.manageSubscriptionInteraction }), n.createElement(l.Z, null, n.createElement(i.Z, { style: N.manageSubscriptionSection }, n.createElement(i.Z, { style: N.manageSubscriptionSectionBody }, n.createElement(o.ZP, { color: "blue500", weight: "medium" }, a), n.createElement(o.ZP, { color: "gray700", size: "subtext2" }, e)), t ? n.createElement(d.default, { style: N.goToSubscriptionPortalIcon }) : null)));
                                if (e) {
                                    const e = a.find((e) => e === w?.product?.rest_id) ? { title: V, desc: O } : { title: A, desc: F };
                                    return n.createElement(n.Fragment, null, j || t ? null : n.createElement(c, { description: e.desc, label: e.title, link: { pathname: "/i/premium_tier_switch", state: { product: "BlueVerifiedPlus" } }, role: "button", testID: "tier-switch-link" }), t ? null : n.createElement(c, { description: B, label: z.isVerifiedOrg() || z.isVerifiedOrgAffiliate() ? L : D, link: "/settings/subscription/manage" }), t ? n.createElement(c, { description: B, isExternal: !0, label: D, onClick: M }) : null);
                                }
                                return null;
                            })(),
                        ),
                    ),
                );
            }
            const j = T((e) => n.createElement(f.H, { errorConfig: { context: "manage_subscription_screen" } }, n.createElement(R, e))),
                N = u.default.create((e) => ({ manageSubscriptionSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, manageSubscriptionSectionBody: { flexShrink: 1 }, offPlatformSubscriptionSection: { flexDirection: "column", justifyContent: "space-between" }, goToSubscriptionPortalIcon: { color: e.colors.gray700, flexShrink: 0 }, manageSubscriptionInteraction: { cursor: "pointer" }, blueVerifiedCalloutWrapper: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, newLabelWrapper: { flexDirection: "row" }, newLabel: { backgroundColor: e.colors.blue50, color: e.colors.primary900, marginEnd: 10, borderRadius: e.borderRadii.xLarge, padding: 10 }, iconThumbnail: { marginEnd: e.spaces.space8 }, verifiedOrganizationsSubscriptionDescription: { marginTop: e.spaces.space8 }, upgradeDowngradeComingSoonLabel: { marginTop: e.spaces.space16, marginStart: e.spaces.space16, marginBottom: e.spaces.space12 } }));
        },
        185874: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ge });
            var r = a(202784),
                n = a(443781),
                i = a(952793),
                c = a(177210),
                s = a(337394),
                l = a(147595),
                o = a(811574),
                u = a(548797),
                m = a(685731),
                p = a(293115),
                d = a(275158),
                g = a(137070),
                b = a(293084),
                f = a(325686),
                y = a(107267),
                E = a(731708),
                _ = a(154003),
                Z = a(392237),
                h = a(111677),
                P = a.n(h),
                S = a(980407),
                v = a(725405);
            const x = [
                    { label: P().iccac88e, subscriptions: { BlueVerified: !0 } },
                    { label: P().d7a124d8, subscriptions: { BlueVerifiedPlus: !0 } },
                    { label: P().d2d22c36, subscriptions: { BlueVerifiedPlus: !0 } },
                    { label: P().j249b1d4, subscriptions: { PremiumBasic: !0, BlueVerifiedPlus: !0, BlueVerified: !0 } },
                    { label: P().c4a37384, subscriptions: { PremiumBasic: !0 } },
                    { label: P().fb656858, subscriptions: { PremiumBasic: !0 } },
                    { label: P().faaec212, subscriptions: { BlueVerifiedPlus: !0, BlueVerified: !0 } },
                    { label: P().fb3c7168, subscriptions: { PremiumBasic: !0, BlueVerifiedPlus: !0, BlueVerified: !0 } },
                    { label: P().b346bc12, subscriptions: { BlueVerifiedPlus: !0, BlueVerified: !0 } },
                ],
                k = P().af66a072,
                w = P().a092f1ba,
                C = P().g96c7f48,
                z = ({ activeProductCategory: e, activeSubscription: t, churnPreventionOfferAvailable: a, goToStripePortal: n, pendingDiscount: i, setCurrentFlowStep: c }) => {
                    const s = (0, y.useHistory)(),
                        l = (0, v.Z)(),
                        o = !!(0, u.gS)(t, "FreeTrial", { status: "active" }),
                        m = r.useCallback(() => {
                            l.scribe({ action: "click", element: "change_tier" });
                        }, [l]),
                        p = r.useCallback(() => {
                            i ? c("PendingOfferStep") : a ? c("OfferStep") : (l.scribe({ action: "click", element: "continue_to_cancel" }), n && n());
                        }, [l, n, a, c, i]);
                    return r.createElement(
                        S.Z,
                        { backButtonType: "back", hideBackButton: !1, history: s, onBackClick: () => c("OptionsStep") },
                        r.createElement(
                            f.Z,
                            { style: I.root },
                            r.createElement(
                                f.Z,
                                { style: I.content },
                                r.createElement(E.ZP, { align: "left", size: "title1", weight: "heavy" }, k),
                                r.createElement(
                                    f.Z,
                                    { role: "list", style: I.list },
                                    x.filter(({ subscriptions: t }) => t.hasOwnProperty(e)).map(({ label: e }) => r.createElement(E.ZP, { key: e, role: "listitem", style: I.listItem }, e)),
                                ),
                                o ? null : r.createElement(_.ZP, { link: "/i/premium_tier_switch", onPress: m, size: "xLarge", style: I.button, type: "primaryOutlined" }, C),
                                r.createElement(_.ZP, { disabled: !n, onPress: p, size: "xLarge", style: I.button, type: "destructiveFilled" }, w),
                            ),
                        ),
                    );
                },
                I = Z.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto" }, button: { marginVertical: e.spaces.space8 }, list: { marginVertical: e.spaces.space20 }, listItem: { display: "list-item", listStyle: "disc", listStylePosition: "inside", marginVertical: e.spaces.space8 } }));
            var T = a(40610),
                H = a(167630),
                D = a(913973),
                B = a(125498),
                L = a(199087),
                V = a(336629);
            const A = P().je8143e1,
                O = P().j5847735,
                F = P().a092f1ba,
                R = P().j88ba18e,
                j = P().da3431f9,
                N = P().i6fbfc72,
                M = P().f1bc6309,
                U = P().ef4602ec,
                G = P().fdb7b52a,
                W = ({ activeProductCategory: e, activeSubscription: t, activeTierPrice: a, goToStripePortal: n, offer: c, setCurrentFlowStep: l }) => {
                    const o = (0, y.useHistory)(),
                        u = (0, v.Z)(),
                        [m, p] = (0, L.Z)(),
                        [d, g] = r.useState(!1),
                        b = (0, i.hC)("subscriptions_marketing_page_include_tax_enabled");
                    r.useEffect(() => {
                        u.scribe({ component: "churn_prevent_offer", action: "impression" });
                    }, [u]);
                    const Z = r.useCallback(() => {
                            u.scribe({ action: "click", component: "churn_prevent_offer", element: "continue_to_cancel" }), n && n();
                        }, [u, n]),
                        h = s.St[e],
                        x = r.useMemo(() => {
                            const e = { percentage: c.metadata.percent_off, productName: h, duration: c.metadata.duration_in_interval };
                            return "Month" === a?.charge_interval ? A(e) : O(e);
                        }, [a, c, h]),
                        k = r.useCallback(() => {
                            g(!1),
                                u.scribe({ component: "churn_prevent_offer", element: "redeem_button", action: "click" }),
                                m({ offerProgramId: c.program_id, productId: t?.product?.rest_id ?? "", redeemOfferType: "CancellationRetention" })
                                    .then((e) => {
                                        "WebPaymentsRedeemOfferResultSuccess" === e.redeem_offer?.__typename ? (u.scribe({ component: "churn_prevent_offer", action: "success" }), l("OfferSuccessStep")) : (g(!0), u.scribe({ component: "churn_prevent_offer", action: "error" }));
                                    })
                                    .catch(() => {
                                        g(!0), u.scribe({ component: "churn_prevent_offer", action: "failure" });
                                    });
                        }, [m, l, t, c, u]);
                    return r.createElement(
                        S.Z,
                        { backButtonType: "back", hideBackButton: !1, history: o, onBackClick: () => l("CancelStep") },
                        r.createElement(
                            f.Z,
                            { style: Q.root },
                            r.createElement(
                                f.Z,
                                { style: Q.content },
                                r.createElement(E.ZP, { align: "left", size: "title1", weight: "heavy" }, x),
                                r.createElement(E.ZP, { style: Q.description }, j({ productName: h })),
                                r.createElement(
                                    f.Z,
                                    { style: Q.list },
                                    r.createElement(
                                        f.Z,
                                        { style: Q.listItem },
                                        r.createElement(D.default, null),
                                        r.createElement(
                                            E.ZP,
                                            null,
                                            ((e, t, a) => {
                                                const n = (0, V.T)({ price: e, annualPriceMonthly: !1, includeTax: a }),
                                                    i = (0, V.T)({ price: e, annualPriceMonthly: !1, includeTax: a, percentOff: t.metadata.percent_off }),
                                                    c = { strike: r.createElement(E.ZP, { style: { textDecorationLine: "line-through" }, testID: "strikethrough-price" }), green: r.createElement(E.ZP, { color: "green500", testID: "discount-price", weight: "medium" }) },
                                                    s = { duration: t.metadata.duration_in_interval ?? 0, standardPrice: n, discountedPrice: i };
                                                return "Year" === e.charge_interval ? r.createElement(P().I18NFormatMessage, { $i18n: "e9dc8a25", duration: s.duration }, r.cloneElement(c.strike, null, P().af283938({ standardPrice: s.standardPrice })), r.cloneElement(c.green, null, P().c284b365({ discountedPrice: s.discountedPrice }))) : r.createElement(P().I18NFormatMessage, { $i18n: "f8a9cbb7", duration: s.duration }, r.cloneElement(c.strike, null, P().e2673372({ standardPrice: s.standardPrice })), r.cloneElement(c.green, null, P().jd2dc103({ discountedPrice: s.discountedPrice })));
                                            })(a, c, b),
                                        ),
                                    ),
                                    r.createElement(f.Z, { style: Q.listItem }, r.createElement(D.default, null), r.createElement(E.ZP, null, N)),
                                    r.createElement(f.Z, { style: Q.listItem }, r.createElement(D.default, null), r.createElement(E.ZP, null, M({ productName: h }))),
                                    r.createElement(E.ZP, { style: Q.disclaimer }, G),
                                ),
                                d ? r.createElement(T.Z.Danger, { text: U }) : null,
                                r.createElement(_.ZP, { disabled: p, icon: p ? void 0 : r.createElement(B.default, null), onPress: k, size: "xLarge", style: Q.button, type: "primaryOutlined" }, p ? r.createElement(H.Z, null) : R),
                                r.createElement(_.ZP, { disabled: !n, onPress: Z, size: "xLarge", style: Q.button, type: "destructiveFilled" }, F),
                            ),
                        ),
                    );
                },
                Q = Z.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto" }, button: { marginVertical: e.spaces.space8 }, list: { gap: e.spaces.space12, marginBottom: e.spaces.space20 }, listItem: { flexDirection: "row", gap: e.spaces.space4 }, description: { marginVertical: e.spaces.space16 }, disclaimer: { marginTop: e.spaces.space16 } }));
            a(136728);
            const q = P().c6150942,
                $ = P().fdb7b52a,
                J = P().a905eac6,
                X = (e) => {
                    const t = (0, y.useHistory)();
                    return r.createElement(S.Z, { backButtonType: "close", hideBackButton: !1, history: t, onBackClick: () => t.push("/i/premium") }, r.createElement(f.Z, { style: Y.root }, r.createElement(f.Z, { style: Y.content }, r.createElement(E.ZP, { align: "left", size: "title1", weight: "heavy" }, q), r.createElement(E.ZP, { align: "left" }, $), r.createElement(_.ZP, { link: "/i/premium", size: "xLarge", style: Y.button, type: "primaryFilled" }, J))));
                },
                Y = Z.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto", gap: e.spaces.space16 }, button: { marginVertical: e.spaces.space8 } }));
            var K = a(525754);
            const ee = Object.freeze({ paymentMethod: "paymentMethod", billingInformation: "billingInformation", cancel: "cancel" }),
                te = P().j6083a1c,
                ae = P().c1df579e,
                re = [
                    { label: P().b4fa4630, value: ee.paymentMethod, containerStyle: { paddingHorizontal: 0 } },
                    { label: P().ef0dfa5a, value: ee.billingInformation, containerStyle: { paddingHorizontal: 0 } },
                    { label: P().f5b352ec, value: ee.cancel, containerStyle: { paddingHorizontal: 0 } },
                ],
                ne = ({ goToStripePortal: e, setCurrentFlowStep: t }) => {
                    const a = (0, y.useHistory)(),
                        [n, i] = r.useState(),
                        c = (0, v.Z)(),
                        s = r.useCallback((e, t) => {
                            i(t);
                        }, []),
                        l = r.useCallback(() => {
                            switch (n) {
                                case ee.paymentMethod:
                                    return c.scribe({ action: "next", element: "change_payment_method" }), void (e && e());
                                case ee.billingInformation:
                                    return c.scribe({ action: "next", element: "change_billing_information" }), void (e && e());
                                case ee.cancel:
                                    return c.scribe({ action: "next", element: "cancel_subscription" }), void t("CancelStep");
                                default:
                                    return;
                            }
                        }, [c, e, t, n]);
                    return r.createElement(S.Z, { backButtonType: "close", hideBackButton: !1, history: a, onBackClick: () => a.goBackThroughModals() }, r.createElement(f.Z, { style: ie.root }, r.createElement(f.Z, { style: ie.content }, r.createElement(E.ZP, { size: "title2", weight: "heavy" }, te), r.createElement(f.Z, { style: ie.radio }, r.createElement(K.Z, { name: "editOption", onChange: s, options: re, value: n })), r.createElement(_.ZP, { disabled: !n || !e, onPress: l, size: "xLarge", style: ie.button, type: "primaryFilled" }, ae))));
                },
                ie = Z.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, radio: { marginBottom: e.spaces.space24 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto" }, button: { marginVertical: e.spaces.space8 }, subscriptionDetails: { marginVertical: e.spaces.space16 }, marginBottom: { marginBottom: e.spaces.space8 }, currentPlanContent: { backgroundColor: e.colors.gray50, padding: e.spaces.space8, borderRadius: e.borderRadii.medium, width: "100%" } }));
            var ce = a(125363),
                se = a(919022),
                le = a(254789);
            const oe = P().j317d958,
                ue = P().a46e42d2,
                me = P().a092f1ba,
                pe = ({ activeSubscription: e, goToStripePortal: t, pendingDiscount: a }) => {
                    const n = (0, y.useHistory)(),
                        i = (0, v.Z)(),
                        c = (0, ce.v9)(se.ZP.selectViewerUser),
                        s = r.useCallback(() => {
                            i.scribe({ action: "click", component: "pending_offer_callout", element: "continue_to_cancel" }), t && t();
                        }, [i, t]);
                    return r.createElement(S.Z, { backButtonType: "close", hideBackButton: !1, history: n }, r.createElement(f.Z, { style: de.root }, r.createElement(f.Z, { style: de.content }, r.createElement(E.ZP, { align: "left", size: "title1", weight: "heavy" }, oe), r.createElement(le.Z, { subscription: e, viewer: c }), r.createElement(_.ZP, { link: "/i/premium", size: "xLarge", style: de.button, type: "primaryOutlined" }, ue), r.createElement(_.ZP, { disabled: !t, onPress: s, size: "xLarge", style: de.button, type: "destructiveFilled" }, me))));
                },
                de = Z.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto", gap: e.spaces.space16 }, button: { marginVertical: e.spaces.space8 } }));
            function ge(e) {
                const { featureSwitches: t } = (0, n.QZ)(),
                    a = (0, g.Z)(),
                    f = (0, i.hC)("subscriptions_management_query_active_price"),
                    y = (0, o.Z)({ fetchPrices: f }),
                    E = (0, l.R)(y),
                    _ = E?.product?.rest_id ? s.v5.premium[E?.product?.rest_id] : null,
                    Z = (0, u.gS)(E, "Discount", { status: "pending" }),
                    h = a[_].hashed,
                    P = (0, b.Z)(h, { moment: "CancelSubscription" }).web_subscription_product_details,
                    S = (0, i.hC)("subscriptions_management_use_active_price"),
                    v = P ? (0, m.Gi)(E?.charge_interval, E?.prices) : null,
                    x = P ? (0, m.Gi)(E?.charge_interval, P.prices) : null,
                    k = S ? v : x,
                    w = x ? (0, m.fS)(x, !0, !1) : null,
                    C = !!w && t.isTrue("subscriptions_offers_churn_prevention_enabled"),
                    [I, T] = r.useState("OptionsStep"),
                    H = (0, c.Z)({ returnUrl: d.d9, originProduct: "TwitterBlue" });
                if (!_ || !E) return null;
                return r.createElement(
                    p.nO,
                    { namespace: { page: "subscriptions_manage" } },
                    (() => {
                        switch (I) {
                            case "OptionsStep":
                                return r.createElement(ne, { goToStripePortal: H, setCurrentFlowStep: T });
                            case "CancelStep":
                                return r.createElement(z, { activeProductCategory: _, activeSubscription: E, activeTierPrice: k, churnPreventionOfferAvailable: C, goToStripePortal: H, pendingDiscount: Z, setCurrentFlowStep: T });
                            case "PendingOfferStep":
                                return r.createElement(pe, { activeSubscription: E, goToStripePortal: H, pendingDiscount: Z });
                            case "OfferStep":
                                return w && k ? r.createElement(W, { activeProductCategory: _, activeSubscription: E, activeTierPrice: k, goToStripePortal: H, offer: w, setCurrentFlowStep: T }) : null;
                            case "OfferSuccessStep":
                                return r.createElement(X, null);
                            default:
                                return null;
                        }
                    })(),
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-877d4cc6.f9d70c8a.js.map
