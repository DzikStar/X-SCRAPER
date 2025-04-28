"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-32bb1570"],
    {
        633525: (e, t, a) => {
            a.r(t), a.d(t, { GrokSettingsScreen: () => F, default: () => O });
            var r = a(181196),
                n = a(202784),
                i = a(325686),
                c = (a(585488), a(712696)),
                l = a.n(c),
                s = a(107267),
                o = a(674132),
                u = a.n(o),
                m = a(947135),
                p = a(290402),
                d = a(443781),
                g = a(652904),
                f = a(883229),
                b = a(943914),
                E = a(310116),
                y = a(867621),
                Z = a(987317),
                _ = a(466441),
                h = a(264922),
                P = a(71620),
                S = a(668214),
                C = a(122743),
                v = a(215929);
            const w = (0, S.Z)()
                    .propsFromState(() => ({ userClaimsFetchStatus: v.uD }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, P.zr)("APPLICATIONS"), clearConversations: C.H }))
                    .withAnalytics({ page: "settings", section: "subscriptions" }),
                k = u().i9028824,
                x = u().i22beaa4,
                I = u().e110a46c,
                T = u().ebc4fda0,
                z = u().c90fe716,
                H = u().d96cf7ce,
                D = r.Z,
                B = { type: "Retry" },
                L = { context: "GrokSettings" };
            function A({ clearConversations: e, createLocalApiErrorHandler: t }) {
                const { user_preferences: a } = l()(D, {}),
                    r = (0, s.useLocation)(),
                    c = (0, s.useRouteMatch)(),
                    o = (0, s.useHistory)(),
                    { featureSwitches: u } = n.useContext(d.rC),
                    p = u.isTrue("responsive_web_grok_delete_conversations_enabled");
                if (!a) return n.createElement(_.default, { history: o, location: r, match: c });
                return n.createElement(
                    g.Z,
                    null,
                    n.createElement(
                        h.Z,
                        { location: r, screenType: "secondaryDetail", title: x },
                        n.createElement(i.Z, { testID: "xaiDataSharingSettings" }, n.createElement(E.Z, { userPreferences: a }), n.createElement(Z.Z, { userPreferences: a }), n.createElement(y.Z, { userPreferences: a })),
                        p &&
                            n.createElement(m.Z, {
                                align: "left",
                                confirmationSheetConfirmButtonLabel: H,
                                confirmationSheetConfirmButtonType: "primary",
                                confirmationSheetHeadline: z,
                                confirmationSheetText: T,
                                label: I,
                                onConfirmationSheetConfirm: () => {
                                    e().catch(() => t({ showToast: !0 }));
                                },
                            }),
                    ),
                );
            }
            const V = (e, t) => n.createElement(A, { clearConversations: e, createLocalApiErrorHandler: t });
            function F({ clearConversations: e, createLocalApiErrorHandler: t, userClaimsFetchStatus: a }) {
                return n.createElement(f.N, { errorConfig: L, fallback: B }, n.createElement(b.B, { fallback: null }, n.createElement(p.Z, { "aria-label": k, fetchStatus: a, render: () => V(e, t) })));
            }
            const O = w(F);
        },
        68820: (e, t, a) => {
            a.r(t), a.d(t, { Languages: () => L, default: () => A });
            var r = a(202784),
                n = a(779610),
                i = a(844685),
                c = a(943401),
                l = a(420412),
                s = a(674132),
                o = a.n(s),
                u = a(443781),
                m = a(652904),
                p = a(293115),
                d = a(264922),
                g = a(71620),
                f = a(668214),
                b = a(661461),
                E = a(576025),
                y = a(390387);
            const Z = (e) => {
                    const t = (0, y.VT)(e);
                    return t && (0, b.ug)(e, t);
                },
                _ = (0, f.Z)()
                    .propsFromState(() => ({ languageName: Z, languageCode: y.VT }))
                    .propsFromActions(() => ({ fetchCountryNamesIfNeeded: E.Po, fetchAvailableLanguagesIfNeeded: b.yt, createLocalApiErrorHandler: (0, g.zr)("LANGUAGES_SCREEN") })),
                h = o().d495680e,
                P = o().jc3fa0e2,
                S = o().a4b69cbc,
                C = o().c856bd00,
                v = o().a4b69cbc,
                w = o().cab61d58,
                k = o().dd93fafa,
                x = o().bca1de4a,
                I = o().c3aa76c4,
                T = o().g099069c,
                z = o().c3aa76c4,
                H = o().cf9ce876,
                D = o().d4372cf4,
                B = { page: "settings", section: "languages" };
            function L(e) {
                const { featureSwitches: t } = r.useContext(u.rC),
                    { createLocalApiErrorHandler: a, fetchAvailableLanguagesIfNeeded: s, fetchCountryNamesIfNeeded: o, languageCode: g, languageName: f, location: b } = e,
                    E = t.isTrue("onboarding_project_uls_enabled"),
                    y = r.useMemo(() => (E ? r.createElement(n.Z, { description: D, label: H, link: "/i/flow/uls_content_and_app_language_selector" }) : r.createElement(r.Fragment, null, r.createElement(i.Z, { text: S }), r.createElement(c.Z, { description: C }), r.createElement(n.Z, { description: f, label: v, link: "/settings/language" }), r.createElement(l.Z, null), r.createElement(i.Z, { text: w }), r.createElement(c.Z, { description: k }), r.createElement(n.Z, { label: x, link: "/i/flow/language_selector" }), r.createElement(l.Z, null), r.createElement(i.Z, { text: I }), r.createElement(c.Z, { description: T }), r.createElement(n.Z, { label: z, link: "/settings/your_twitter_data/language" }))), [E, f]);
                return (
                    r.useEffect(() => {
                        g && o(g).catch(a()), s().catch(a());
                    }, [g, o, s, a]),
                    r.createElement(p.nO, { namespace: B }, r.createElement(m.Z, null, r.createElement(d.Z, { location: b, screenType: "secondaryDetail", title: h }, r.createElement(c.Z, { description: P }), y)))
                );
            }
            const A = _(L);
        },
        110202: (e, t, a) => {
            a.r(t), a.d(t, { LocationInformation: () => x, default: () => I });
            var r = a(202784),
                n = a(943401),
                i = a(954110),
                c = a(779610),
                l = a(674132),
                s = a.n(l),
                o = a(443781),
                u = a(652904),
                m = a(944681),
                p = a(293115),
                d = a(725405),
                g = a(264922),
                f = a(71620),
                b = a(668214),
                E = a(205253),
                y = a(919022);
            const Z = (0, b.Z)()
                    .propsFromState(() => ({ settings: E.kQ, viewerUser: y.ZP.selectViewerUser }))
                    .adjustStateProps(({ settings: e, ...t }) => ({ ...t, allowLocationHistoryUseEnabled: e.allowLocationHistoryUse }))
                    .propsFromActions(() => ({ updateSettings: E.VP, createLocalApiErrorHandler: (0, f.zr)("LOCATION_INFORMATION_SCREEN") })),
                _ = s().jabb9c9a,
                h = s().dd533318,
                P = s().dc20d918,
                S = s().af7d89e6,
                C = s().d9138166,
                v = s().fcb6a5b8,
                w = s().j018f2a2,
                k = { page: "settings", section: "location_information" };
            function x({ allowLocationHistoryUseEnabled: e, createLocalApiErrorHandler: t, location: a, updateSettings: l, viewerUser: s }) {
                const f = (0, d.Z)(),
                    { featureSwitches: b } = r.useContext(o.rC),
                    E = !!s?.birthdate && (0, m.k)(s.birthdate.year, s.birthdate.month, s.birthdate.day),
                    y = !s || (b.isTrue("settings_for_you_recommendation_enabled") && E);
                return r.createElement(
                    p.nO,
                    { namespace: k },
                    r.createElement(
                        u.Z,
                        null,
                        r.createElement(
                            g.Z,
                            { location: a, screenType: "secondaryDetail", title: _ },
                            r.createElement(n.Z, { description: h }),
                            y
                                ? null
                                : r.createElement(i.Z, {
                                      checked: e,
                                      helpText: S,
                                      label: P,
                                      name: "allowLocationHistoryUse",
                                      onChange: function (e, a) {
                                          f.scribe({ ...k, element: e, action: a ? "enable" : "disable" }), l({ [e]: a }).catch(t());
                                      },
                                  }),
                            r.createElement(c.Z, { label: C, link: "/settings/your_twitter_data/locations" }),
                            r.createElement(c.Z, { label: v, link: "/settings/location" }),
                            r.createElement(c.Z, { label: w, link: "/settings/explore" }),
                        ),
                    ),
                );
            }
            const I = Z(x);
        },
        487443: (e, t, a) => {
            a.r(t), a.d(t, { ManageAffiliateBadges: () => J, ManagesAffiliatesQueryRequest: () => q, default: () => Y });
            var r = a(143543),
                n = a(202784),
                i = a(325686),
                c = (a(585488), a(107267)),
                l = a(844685),
                s = a(750410),
                o = a(167630),
                u = a(392237),
                m = a(674132),
                p = a.n(m),
                d = a(652904),
                g = a(736063),
                f = a(301410),
                b = a(725516),
                E = a(312771),
                y = a(264922),
                Z = a(154003),
                _ = a(673510),
                h = a(661810),
                P = a(678773),
                S = a(516951);
            const C = p().ab8089ea,
                v = n.createElement(Z.ZP, { icon: n.createElement(P.default, { "aria-label": C }), testID: "reorder", type: "primaryText" }),
                w = ({ affiliate: e, disabled: t, sortIndex: a }) => {
                    const { name: r, profile_image_url_https: c, screen_name: l } = e.affiliated_account_results.result?.legacy || {};
                    return l && c && r && n.createElement(n.Fragment, null, n.createElement(_.ZP, { "aria-checked": !0, avatarShape: "square", avatarSize: "xxLarge", avatarUri: c, decoration: void 0 !== a ? v : void 0, displayMode: "UserCompact", isDisabled: t, name: r, onCellClick: S.Z, screenName: l, userId: "", withInteractiveStyling: !0, withLink: !1 }), 0 === a && n.createElement(i.Z, { style: k.gutter }, n.createElement(h.Z, { spacing: "space2" })));
                },
                k = u.default.create((e) => ({ gutter: { marginHorizontal: e.spaces.space16 } })),
                x = n.memo(w);
            var I = a(716042),
                T = a(731708),
                z = a(782642),
                H = a(445250),
                D = (a(571372), a(658236)),
                B = a(351743),
                L = a.n(B);
            const A = D.Z,
                V = p().e2eac0c4,
                F = p().ef4602ec,
                O = (0, I.W8)(x),
                N = (0, I.JN)(({ isUpdatingAffiliates: e, items: t }) =>
                    n.createElement(
                        i.Z,
                        null,
                        n.createElement(T.ZP, { style: j.gutter, weight: "medium" }, V),
                        t.map((t, a) => n.createElement(O, { affiliate: t, disabled: e, index: a, key: a, sortIndex: a })),
                    ),
                ),
                R = ({ affiliations: e }) => {
                    const [t, a] = n.useState(e),
                        r = (0, b.z)(),
                        i = (0, z.p)(),
                        [c, l] = (() => {
                            const [e, t] = L()(A);
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
                        s = n.useCallback(
                            ({ newIndex: e, oldIndex: n }) => {
                                r.scribe({ action: "reorder" });
                                const l = (0, H.Z)(t, n, e);
                                a(l),
                                    c(l.map((e) => e.affiliated_account_results.rest_id)).catch(() => {
                                        a(t), i({ text: F });
                                    });
                            },
                            [t, r, c, i],
                        );
                    return n.createElement(N, { isUpdatingAffiliates: l, items: t, onSortEnd: s });
                },
                j = u.default.create((e) => ({ gutter: { marginHorizontal: e.spaces.space16 } })),
                M = n.memo(R),
                U = p().ce70c590,
                G = p().a49e1b2a,
                Q = p().e2daf93c,
                W = { context: "MANAGE_AFFILIATE_SETTING" },
                q = r.Z,
                $ = (0, f.z)(q, { errorConfig: { context: "MANAGE_AFFILIATES_SETTING_CONTEXT" } });
            function J() {
                const e = (0, b.z)(),
                    t = (0, c.useLocation)(),
                    a = (0, c.useHistory)(),
                    r = n.useCallback(() => {
                        a.goBack({ backLocation: "/settings/premium" });
                    }, [a]),
                    u = n.useCallback(() => {
                        e.scribe({ component: "back", action: "navigate" }), r();
                    }, [e, r]),
                    m = n.useCallback(({ data: e, fetchStatus: t, retry: a }) => {
                        if (t === E.ZP.LOADED) {
                            const { affiliations: t } = e?.managed_affiliations || {};
                            return n.createElement(i.Z, { style: X.container }, n.createElement(l.Z, { subtext: Q, text: G }), 1 === t.length ? n.createElement(x, { affiliate: t[0] }) : n.createElement(M, { affiliations: t }));
                        }
                        return t === E.ZP.FAILED ? n.createElement(s.Z, { onRequestRetry: a }) : n.createElement(o.Z, null);
                    }, []);
                return n.createElement(d.Z, null, n.createElement(g.H, { errorConfig: W }, n.createElement(y.Z, { location: t, onBackClick: u, title: U }, n.createElement($, { fetchPolicy: "network-only", render: m, variables: {} }))));
            }
            const X = u.default.create((e) => ({ container: { gap: 8 } })),
                Y = n.memo((0, b.Z)(J, { page: "settings", section: "affiliations" }));
        },
        254789: (e, t, a) => {
            a.d(t, { Z: () => q });
            var r = a(202784),
                n = a(325686),
                i = a(688715),
                c = a(731708),
                l = a(392237),
                s = a(674132),
                o = a.n(s),
                u = a(503089),
                m = a(849353),
                p = a(311687),
                d = a(443781),
                g = a(736063),
                f = a(337394),
                b = a(321330),
                E = a(548797),
                y = a(643242),
                Z = a(85034),
                _ = a(17412),
                h = a(685731),
                P = a(137070),
                S = a(293084);
            const C = o().edbb700f,
                v = o().ba2e82a1,
                w = o().e9884540,
                k = o().bfb879aa,
                x = ({ subscription: e }) => {
                    const t = (0, P.Z)()[e?.product?.rest_id ? f.v5.premium[e?.product?.rest_id] : null].hashed,
                        a = (0, E.gS)(e, "Discount", { status: "active" }),
                        i = (0, E.gS)(e, "Discount", { status: "pending" }),
                        l = (0, S.Z)(t).web_subscription_product_details,
                        s = l ? (0, h.Gi)(e?.charge_interval, l) : null,
                        o = s ? (0, h.d3)(s, !1, e) : "",
                        u = s ? (0, h.d3)(s, !1, e, !0, !1) : "";
                    return r.createElement(n.Z, null, a ? r.createElement(n.Z, { style: T.activeDiscountContainer, testID: "active_discount_info" }, r.createElement(n.Z, { style: T.discountTitleRow }, r.createElement(_.default, { style: T.activeDiscountIcon }), r.createElement(c.ZP, { color: "green900", size: "subtext2", weight: "medium" }, w)), r.createElement(c.ZP, { color: "green900", size: "subtext1", style: T.priceLabel, testID: "stripe-price-info" }, o)) : r.createElement(c.ZP, { color: "gray1100", size: "subtext1", style: T.priceLabel, testID: "stripe-price-info" }, o), i ? r.createElement(n.Z, { style: T.pendingDiscountContainer, testID: "pending_discount_info" }, r.createElement(n.Z, { style: T.discountTitleRow }, r.createElement(_.default, { style: T.pendingDiscountIcon }), r.createElement(c.ZP, { color: "gray900", size: "subtext2", weight: "medium" }, k)), r.createElement(c.ZP, { color: "gray900", size: "subtext1", style: T.priceLabel, testID: "stripe-price-info" }, u), e.next_billing_at?.time_in_millis ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, C({ date: v(new Date(parseInt(e.next_billing_at?.time_in_millis, 10))) })) : null) : null);
                },
                I = (e) => r.createElement(g.H, { errorConfig: { context: "manage-subscription-price-info" } }, r.createElement(x, e)),
                T = l.default.create((e) => ({ priceLabel: { marginBottom: e.spaces.space8 }, activeDiscountContainer: { backgroundColor: e.colors.green100, borderRadius: e.borderRadii.medium, padding: e.spaces.space8, gap: e.spaces.space8, marginTop: e.spaces.space8 }, pendingDiscountContainer: { borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, backgroundColor: e.colors.gray100, borderStyle: "dashed", borderRadius: e.borderRadii.medium, padding: e.spaces.space8, gap: e.spaces.space8, marginTop: e.spaces.space8 }, activeDiscountIcon: { color: e.colors.green900 }, pendingDiscountIcon: { color: e.colors.gray900 }, discountTitleRow: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center", marginBottom: e.spaces.space4 } })),
                z = o().e122fb3f,
                H = o().be103b84,
                D = o().ace43720,
                B = o().ba2e82a1,
                L = o().c8f18aa4,
                A = o().a341d1f7,
                V = o().e4aaf0f8,
                F = o().e5170220,
                O = o().j6d6b66e,
                N = o().fae1751f,
                R = o().fecebd4c,
                j = o().h201c4c2,
                M = o().i8385a2c,
                U = o().h80834de,
                G = o().baf97716,
                Q = o().ae864b69,
                W = ({ subscription: e, viewer: t }) => {
                    const { label: a } = (0, b.Z)(),
                        { featureSwitches: l, userClaims: s } = (0, d.QZ)(),
                        [o, , g] = (0, Z.Z)(e?.product?.rest_id || "", !0),
                        _ = "SwitchScheduled" === o,
                        h = g ? f.St[f.v5.premium[g]] : null,
                        P = (0, E.gS)(e, "FreeTrial", { status: "active" }),
                        S = e?.payment_source === y.H.Twitter,
                        C = e?.payment_source === y.H.Ads,
                        v = e?.payment_source === y.H.Gift,
                        w = !!e?.payment_source && e?.payment_source !== y.H.Stripe && s.isAnyPremiumSubscriber(),
                        k = e?.payment_source === y.H.TPay || e?.payment_source === y.H.Twitter,
                        x = l.getStringValue("subscriptions_gifting_help_url") || (0, i.ju)("https://help.x.com/forms/paid-features/general"),
                        T = r.useMemo(() => {
                            if (e?.payment_source && e?.payment_source !== y.H.Stripe) return e?.payment_source === y.H.AppleAppStore ? j : e?.payment_source === y.H.GooglePlay ? M : U;
                        }, [e]),
                        W = r.useCallback(() => (S ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, V, " ", r.createElement(c.ZP, { link: "https://help.x.com/forms/paid-features/general" }, R)) : C ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, F) : v ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, O, " ", r.createElement(c.ZP, { link: x }, R)) : r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, N({ mobilePlatform: T }))), [x, C, S, v, T]);
                    return r.createElement(n.Z, { style: $.container }, r.createElement(n.Z, { style: $.card }, r.createElement(n.Z, { style: $.header }, r.createElement(c.ZP, { size: "headline2", weight: "medium" }, a), r.createElement(n.Z, { bold: !0, style: $.label }, "Expire" === e?.state && e.payment_source !== y.H.Gift ? r.createElement(u.default, { style: $.expiringIcon }) : r.createElement(m.default, { style: $.activeIcon }), r.createElement(c.ZP, { align: "center", selectable: !1, size: "body", weight: "medium" }, "Expire" === e?.state && e.payment_source !== y.H.Gift ? D : H))), "Stripe" === e?.payment_source ? r.createElement(I, { subscription: e }) : null, _ ? r.createElement(n.Z, { style: $.callout }, r.createElement(p.default, null), r.createElement(c.ZP, null, Q({ tierName: h, date: B(new Date(parseInt(e?.next_billing_at?.time_in_millis, 10))) }))) : null, "Expire" === e?.state ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, G) : null, w || k ? W() : null, P ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, z({ endDate: B(new Date(parseInt(P?.ends_at_msec, 10))) })) : null, s.isVerifiedOrgAffiliate() ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, A({ organization: t?.highlightedLabel?.description })) : s.isVerifiedOrg() || s.isLegacyVerifiedOrg() ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, L) : null));
                },
                q = (e) => r.createElement(g.H, { errorConfig: { context: "stripe-active-subscription-info" } }, r.createElement(W, e)),
                $ = l.default.create((e) => ({ container: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterHorizontal }, card: { borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray50, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterHorizontal }, label: { flexDirection: "row", minHeight: e.spaces.space32, alignItems: "center", flexShrink: 1 }, activeIcon: { marginEnd: e.spaces.space4, color: e.colors.primary }, expiringIcon: { marginEnd: e.spaces.space4 }, header: { justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space4 }, callout: { flexDirection: "row", padding: e.spaces.space8, backgroundColor: e.colors.blue50, borderRadius: e.borderRadii.small, gap: e.spaces.space8, alignItems: "center" } }));
        },
        386255: (e, t, a) => {
            a.r(t), a.d(t, { ManageSubscriptionScreen: () => O, default: () => N });
            var r = a(807896),
                n = a(202784),
                i = a(325686),
                c = a(107267),
                l = a(530732),
                s = a(928088),
                o = a(731708),
                u = a(392237),
                m = a(674132),
                p = a.n(m),
                d = a(191796),
                g = a(443781),
                f = a(652904),
                b = a(736063),
                E = a(177210),
                y = a(670094),
                Z = a(147595),
                _ = a(811574),
                h = a(548797),
                P = a(643242),
                S = a(275158),
                C = a(264922),
                v = a(254789),
                w = a(71620),
                k = a(668214),
                x = a(818581),
                I = a(919022);
            const T = (0, k.Z)()
                    .propsFromState(() => ({ viewerUser: I.ZP.selectViewerUser, userPreferences: x.kQ }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, w.zr)("AFFILIATES_SCREEN"), fetchUserPreferencesIfNeeded: x.xQ }))
                    .withAnalytics({ page: "subscriptions", section: "management" }),
                z = p().ib35705e,
                H = p().de9f111a,
                D = p().d5839f9e,
                B = p().a840c22c,
                L = p().aaa798fc,
                A = p().e31456f8,
                V = p().a7c4ecea,
                F = p().h15cc518;
            function O(e) {
                const { analytics: t, createLocalApiErrorHandler: a, fetchUserPreferencesIfNeeded: u, viewerUser: m } = e,
                    p = (0, _.Z)(),
                    b = (0, Z.R)(p),
                    w = (0, c.useLocation)(),
                    { userClaims: k } = n.useContext(g.rC),
                    x = b?.payment_source,
                    I = (0, E.Z)({ returnUrl: S.d9, originProduct: "TwitterBlue" });
                n.useEffect(() => {
                    u().catch(a({ ...(0, y.d)(), showToast: !0 }));
                }),
                    n.useEffect(() => {
                        t.scribe({ action: "impression" });
                    }, [t]);
                const T = k.isAnyPremiumSubscriber(),
                    O = (0, h.gS)(b, "FreeTrial", { status: "active" }),
                    N = n.useCallback(() => {
                        t.scribe({ component: "expiring-sub-manage-subscription", action: "click" }), I?.();
                    }, [t, I]);
                return n.createElement(
                    f.Z,
                    null,
                    n.createElement(
                        C.Z,
                        { location: w, title: z },
                        T ? n.createElement(v.Z, { subscription: b, viewer: m }) : null,
                        n.createElement(
                            i.Z,
                            null,
                            (() => {
                                const e = !!x && x === P.H.Stripe && T,
                                    t = "Expire" === b?.state,
                                    a = ["premium-basic", "premium-basic-test", "premium-basic-sandbox", "rogue-one-prod-2", "rogue-one-test-2-1", "rogue-one-sandbox-2"],
                                    c = ({ description: e, isExternal: t, label: a, ...c }) => n.createElement(l.Z, (0, r.Z)({}, c, { disabled: !I, style: R.manageSubscriptionInteraction }), n.createElement(s.Z, null, n.createElement(i.Z, { style: R.manageSubscriptionSection }, n.createElement(i.Z, { style: R.manageSubscriptionSectionBody }, n.createElement(o.ZP, { color: "blue500", weight: "medium" }, a), n.createElement(o.ZP, { color: "gray700", size: "subtext2" }, e)), t ? n.createElement(d.default, { style: R.goToSubscriptionPortalIcon }) : null)));
                                if (e) {
                                    const e = a.find((e) => e === b?.product?.rest_id) ? { title: L, desc: V } : { title: A, desc: F };
                                    return n.createElement(n.Fragment, null, O || t ? null : n.createElement(c, { description: e.desc, label: e.title, link: { pathname: "/i/premium_tier_switch", state: { product: "BlueVerifiedPlus" } }, role: "button", testID: "tier-switch-link" }), t ? null : n.createElement(c, { description: D, label: k.isVerifiedOrg() || k.isVerifiedOrgAffiliate() ? B : H, link: "/settings/subscription/manage" }), t ? n.createElement(c, { description: D, isExternal: !0, label: H, onClick: N }) : null);
                                }
                                return null;
                            })(),
                        ),
                    ),
                );
            }
            const N = T((e) => n.createElement(b.H, { errorConfig: { context: "manage_subscription_screen" } }, n.createElement(O, e))),
                R = u.default.create((e) => ({ manageSubscriptionSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, manageSubscriptionSectionBody: { flexShrink: 1 }, offPlatformSubscriptionSection: { flexDirection: "column", justifyContent: "space-between" }, goToSubscriptionPortalIcon: { color: e.colors.gray700, flexShrink: 0 }, manageSubscriptionInteraction: { cursor: "pointer" }, blueVerifiedCalloutWrapper: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, newLabelWrapper: { flexDirection: "row" }, newLabel: { backgroundColor: e.colors.blue50, color: e.colors.primary900, marginEnd: 10, borderRadius: e.borderRadii.xLarge, padding: 10 }, iconThumbnail: { marginEnd: e.spaces.space8 }, verifiedOrganizationsSubscriptionDescription: { marginTop: e.spaces.space8 }, upgradeDowngradeComingSoonLabel: { marginTop: e.spaces.space16, marginStart: e.spaces.space16, marginBottom: e.spaces.space12 } }));
        },
        185874: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ge });
            var r = a(202784),
                n = a(443781),
                i = a(177210),
                c = a(337394),
                l = a(147595),
                s = a(811574),
                o = a(548797),
                u = a(685731),
                m = a(293115),
                p = a(275158),
                d = a(137070),
                g = a(293084),
                f = a(325686),
                b = a(107267),
                E = a(731708),
                y = a(154003),
                Z = a(392237),
                _ = a(674132),
                h = a.n(_),
                P = a(980407),
                S = a(725405);
            const C = [
                    { label: h().iccac88e, subscriptions: { BlueVerified: !0 } },
                    { label: h().d7a124d8, subscriptions: { BlueVerifiedPlus: !0 } },
                    { label: h().d2d22c36, subscriptions: { BlueVerifiedPlus: !0 } },
                    { label: h().j249b1d4, subscriptions: { PremiumBasic: !0, BlueVerifiedPlus: !0, BlueVerified: !0 } },
                    { label: h().c4a37384, subscriptions: { PremiumBasic: !0 } },
                    { label: h().fb656858, subscriptions: { PremiumBasic: !0 } },
                    { label: h().faaec212, subscriptions: { BlueVerifiedPlus: !0, BlueVerified: !0 } },
                    { label: h().fb3c7168, subscriptions: { PremiumBasic: !0, BlueVerifiedPlus: !0, BlueVerified: !0 } },
                    { label: h().b346bc12, subscriptions: { BlueVerifiedPlus: !0, BlueVerified: !0 } },
                ],
                v = h().af66a072,
                w = h().a092f1ba,
                k = h().g96c7f48,
                x = ({ activeProductCategory: e, activeSubscription: t, churnPreventionOfferAvailable: a, goToStripePortal: n, pendingDiscount: i, setCurrentFlowStep: c }) => {
                    const l = (0, b.useHistory)(),
                        s = (0, S.Z)(),
                        u = !!(0, o.gS)(t, "FreeTrial", { status: "active" }),
                        m = r.useCallback(() => {
                            s.scribe({ action: "click", element: "change_tier" });
                        }, [s]),
                        p = r.useCallback(() => {
                            i ? c("PendingOfferStep") : a ? c("OfferStep") : (s.scribe({ action: "click", element: "continue_to_cancel" }), n && n());
                        }, [s, n, a, c, i]);
                    return r.createElement(
                        P.Z,
                        { backButtonType: "back", hideBackButton: !1, history: l, onBackClick: () => c("OptionsStep") },
                        r.createElement(
                            f.Z,
                            { style: I.root },
                            r.createElement(
                                f.Z,
                                { style: I.content },
                                r.createElement(E.ZP, { align: "left", size: "title1", weight: "heavy" }, v),
                                r.createElement(
                                    f.Z,
                                    { role: "list", style: I.list },
                                    C.filter(({ subscriptions: t }) => t.hasOwnProperty(e)).map(({ label: e }) => r.createElement(E.ZP, { key: e, role: "listitem", style: I.listItem }, e)),
                                ),
                                u ? null : r.createElement(y.ZP, { link: "/i/premium_tier_switch", onPress: m, size: "xLarge", style: I.button, type: "primaryOutlined" }, k),
                                r.createElement(y.ZP, { disabled: !n, onPress: p, size: "xLarge", style: I.button, type: "destructiveFilled" }, w),
                            ),
                        ),
                    );
                },
                I = Z.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto" }, button: { marginVertical: e.spaces.space8 }, list: { marginVertical: e.spaces.space20 }, listItem: { display: "list-item", listStyle: "disc", listStylePosition: "inside", marginVertical: e.spaces.space8 } }));
            var T = a(40610),
                z = a(167630),
                H = a(913973),
                D = a(125498),
                B = a(952793),
                L = a(199087),
                A = a(336629);
            const V = h().je8143e1,
                F = h().j5847735,
                O = h().a092f1ba,
                N = h().j88ba18e,
                R = h().da3431f9,
                j = h().i6fbfc72,
                M = h().f1bc6309,
                U = h().ef4602ec,
                G = h().fdb7b52a,
                Q = ({ activeProductCategory: e, activeSubscription: t, activeTierPrice: a, goToStripePortal: n, offer: i, setCurrentFlowStep: l }) => {
                    const s = (0, b.useHistory)(),
                        o = (0, S.Z)(),
                        [u, m] = (0, L.Z)(),
                        [p, d] = r.useState(!1),
                        g = (0, B.hC)("subscriptions_marketing_page_include_tax_enabled");
                    r.useEffect(() => {
                        o.scribe({ component: "churn_prevent_offer", action: "impression" });
                    }, [o]);
                    const Z = r.useCallback(() => {
                            o.scribe({ action: "click", component: "churn_prevent_offer", element: "continue_to_cancel" }), n && n();
                        }, [o, n]),
                        _ = c.St[e],
                        C = r.useMemo(() => {
                            const e = { percentage: i.metadata.percent_off, productName: _, duration: i.metadata.duration_in_interval };
                            return "Month" === a?.charge_interval ? V(e) : F(e);
                        }, [a, i, _]),
                        v = r.useCallback(() => {
                            d(!1),
                                o.scribe({ component: "churn_prevent_offer", element: "redeem_button", action: "click" }),
                                u({ offerProgramId: i.program_id, productId: t?.product?.rest_id ?? "", redeemOfferType: "CancellationRetention" })
                                    .then((e) => {
                                        "WebPaymentsRedeemOfferResultSuccess" === e.redeem_offer?.__typename ? (o.scribe({ component: "churn_prevent_offer", action: "success" }), l("OfferSuccessStep")) : (d(!0), o.scribe({ component: "churn_prevent_offer", action: "error" }));
                                    })
                                    .catch(() => {
                                        d(!0), o.scribe({ component: "churn_prevent_offer", action: "failure" });
                                    });
                        }, [u, l, t, i, o]);
                    return r.createElement(
                        P.Z,
                        { backButtonType: "back", hideBackButton: !1, history: s, onBackClick: () => l("CancelStep") },
                        r.createElement(
                            f.Z,
                            { style: W.root },
                            r.createElement(
                                f.Z,
                                { style: W.content },
                                r.createElement(E.ZP, { align: "left", size: "title1", weight: "heavy" }, C),
                                r.createElement(E.ZP, { style: W.description }, R({ productName: _ })),
                                r.createElement(
                                    f.Z,
                                    { style: W.list },
                                    r.createElement(
                                        f.Z,
                                        { style: W.listItem },
                                        r.createElement(H.default, null),
                                        r.createElement(
                                            E.ZP,
                                            null,
                                            ((e, t, a) => {
                                                const n = (0, A.T)({ price: e, annualPriceMonthly: !1, includeTax: a }),
                                                    i = (0, A.T)({ price: e, annualPriceMonthly: !1, includeTax: a, percentOff: t.metadata.percent_off }),
                                                    c = { strike: r.createElement(E.ZP, { style: { textDecorationLine: "line-through" }, testID: "strikethrough-price" }), green: r.createElement(E.ZP, { color: "green500", testID: "discount-price", weight: "medium" }) },
                                                    l = { duration: t.metadata.duration_in_interval ?? 0, standardPrice: n, discountedPrice: i };
                                                return "Year" === e.charge_interval ? r.createElement(h().I18NFormatMessage, { $i18n: "e9dc8a25", duration: l.duration }, r.cloneElement(c.strike, null, h().af283938({ standardPrice: l.standardPrice })), r.cloneElement(c.green, null, h().c284b365({ discountedPrice: l.discountedPrice }))) : r.createElement(h().I18NFormatMessage, { $i18n: "f8a9cbb7", duration: l.duration }, r.cloneElement(c.strike, null, h().e2673372({ standardPrice: l.standardPrice })), r.cloneElement(c.green, null, h().jd2dc103({ discountedPrice: l.discountedPrice })));
                                            })(a, i, g),
                                        ),
                                    ),
                                    r.createElement(f.Z, { style: W.listItem }, r.createElement(H.default, null), r.createElement(E.ZP, null, j)),
                                    r.createElement(f.Z, { style: W.listItem }, r.createElement(H.default, null), r.createElement(E.ZP, null, M({ productName: _ }))),
                                    r.createElement(E.ZP, { style: W.disclaimer }, G),
                                ),
                                p ? r.createElement(T.Z.Danger, { text: U }) : null,
                                r.createElement(y.ZP, { disabled: m, icon: m ? void 0 : r.createElement(D.default, null), onPress: v, size: "xLarge", style: W.button, type: "primaryOutlined" }, m ? r.createElement(z.Z, null) : N),
                                r.createElement(y.ZP, { disabled: !n, onPress: Z, size: "xLarge", style: W.button, type: "destructiveFilled" }, O),
                            ),
                        ),
                    );
                },
                W = Z.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto" }, button: { marginVertical: e.spaces.space8 }, list: { gap: e.spaces.space12, marginBottom: e.spaces.space20 }, listItem: { flexDirection: "row", gap: e.spaces.space4 }, description: { marginVertical: e.spaces.space16 }, disclaimer: { marginTop: e.spaces.space16 } }));
            a(136728);
            const q = h().c6150942,
                $ = h().fdb7b52a,
                J = h().a905eac6,
                X = (e) => {
                    const t = (0, b.useHistory)();
                    return r.createElement(P.Z, { backButtonType: "close", hideBackButton: !1, history: t, onBackClick: () => t.push("/i/premium") }, r.createElement(f.Z, { style: Y.root }, r.createElement(f.Z, { style: Y.content }, r.createElement(E.ZP, { align: "left", size: "title1", weight: "heavy" }, q), r.createElement(E.ZP, { align: "left" }, $), r.createElement(y.ZP, { link: "/i/premium", size: "xLarge", style: Y.button, type: "primaryFilled" }, J))));
                },
                Y = Z.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto", gap: e.spaces.space16 }, button: { marginVertical: e.spaces.space8 } }));
            var K = a(525754);
            const ee = Object.freeze({ paymentMethod: "paymentMethod", billingInformation: "billingInformation", cancel: "cancel" }),
                te = h().j6083a1c,
                ae = h().c1df579e,
                re = [
                    { label: h().b4fa4630, value: ee.paymentMethod, containerStyle: { paddingHorizontal: 0 } },
                    { label: h().ef0dfa5a, value: ee.billingInformation, containerStyle: { paddingHorizontal: 0 } },
                    { label: h().f5b352ec, value: ee.cancel, containerStyle: { paddingHorizontal: 0 } },
                ],
                ne = ({ goToStripePortal: e, setCurrentFlowStep: t }) => {
                    const a = (0, b.useHistory)(),
                        [n, i] = r.useState(),
                        c = (0, S.Z)(),
                        l = r.useCallback((e, t) => {
                            i(t);
                        }, []),
                        s = r.useCallback(() => {
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
                    return r.createElement(P.Z, { backButtonType: "close", hideBackButton: !1, history: a, onBackClick: () => a.goBackThroughModals() }, r.createElement(f.Z, { style: ie.root }, r.createElement(f.Z, { style: ie.content }, r.createElement(E.ZP, { size: "title2", weight: "heavy" }, te), r.createElement(f.Z, { style: ie.radio }, r.createElement(K.Z, { name: "editOption", onChange: l, options: re, value: n })), r.createElement(y.ZP, { disabled: !n || !e, onPress: s, size: "xLarge", style: ie.button, type: "primaryFilled" }, ae))));
                },
                ie = Z.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, radio: { marginBottom: e.spaces.space24 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto" }, button: { marginVertical: e.spaces.space8 }, subscriptionDetails: { marginVertical: e.spaces.space16 }, marginBottom: { marginBottom: e.spaces.space8 }, currentPlanContent: { backgroundColor: e.colors.gray50, padding: e.spaces.space8, borderRadius: e.borderRadii.medium, width: "100%" } }));
            var ce = a(125363),
                le = a(919022),
                se = a(254789);
            const oe = h().j317d958,
                ue = h().a46e42d2,
                me = h().a092f1ba,
                pe = ({ activeSubscription: e, goToStripePortal: t, pendingDiscount: a }) => {
                    const n = (0, b.useHistory)(),
                        i = (0, S.Z)(),
                        c = (0, ce.v9)(le.ZP.selectViewerUser),
                        l = r.useCallback(() => {
                            i.scribe({ action: "click", component: "pending_offer_callout", element: "continue_to_cancel" }), t && t();
                        }, [i, t]);
                    return r.createElement(P.Z, { backButtonType: "close", hideBackButton: !1, history: n }, r.createElement(f.Z, { style: de.root }, r.createElement(f.Z, { style: de.content }, r.createElement(E.ZP, { align: "left", size: "title1", weight: "heavy" }, oe), r.createElement(se.Z, { subscription: e, viewer: c }), r.createElement(y.ZP, { link: "/i/premium", size: "xLarge", style: de.button, type: "primaryOutlined" }, ue), r.createElement(y.ZP, { disabled: !t, onPress: l, size: "xLarge", style: de.button, type: "destructiveFilled" }, me))));
                },
                de = Z.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto", gap: e.spaces.space16 }, button: { marginVertical: e.spaces.space8 } }));
            function ge(e) {
                const { featureSwitches: t } = (0, n.QZ)(),
                    a = (0, d.Z)(),
                    f = (0, s.Z)(),
                    b = (0, l.R)(f),
                    E = b?.product?.rest_id ? c.v5.premium[b?.product?.rest_id] : null,
                    y = (0, o.gS)(b, "Discount", { status: "pending" }),
                    Z = a[E].hashed,
                    _ = (0, g.Z)(Z, { moment: "CancelSubscription" }).web_subscription_product_details,
                    h = _ ? (0, u.Gi)(b?.charge_interval, _) : null,
                    P = h ? (0, u.fS)(h, !0, !1) : null,
                    S = !!P && t.isTrue("subscriptions_offers_churn_prevention_enabled"),
                    [C, v] = r.useState("OptionsStep"),
                    w = (0, i.Z)({ returnUrl: p.d9, originProduct: "TwitterBlue" });
                if (!E || !b) return null;
                return r.createElement(
                    m.nO,
                    { namespace: { page: "subscriptions_manage" } },
                    (() => {
                        switch (C) {
                            case "OptionsStep":
                                return r.createElement(ne, { goToStripePortal: w, setCurrentFlowStep: v });
                            case "CancelStep":
                                return r.createElement(x, { activeProductCategory: E, activeSubscription: b, activeTierPrice: h, churnPreventionOfferAvailable: S, goToStripePortal: w, pendingDiscount: y, setCurrentFlowStep: v });
                            case "PendingOfferStep":
                                return r.createElement(pe, { activeSubscription: b, goToStripePortal: w, pendingDiscount: y });
                            case "OfferStep":
                                return P && h ? r.createElement(Q, { activeProductCategory: E, activeSubscription: b, activeTierPrice: h, goToStripePortal: w, offer: P, setCurrentFlowStep: v }) : null;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-32bb1570.6c82ca1a.js.map
