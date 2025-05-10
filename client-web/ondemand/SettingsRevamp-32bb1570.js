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
                s = a.n(c),
                l = a(107267),
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
                _ = a(987317),
                Z = a(466441),
                h = a(264922),
                P = a(71620),
                S = a(668214),
                v = a(122743),
                C = a(215929);
            const w = (0, S.Z)()
                    .propsFromState(() => ({ userClaimsFetchStatus: C.uD }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, P.zr)("APPLICATIONS"), clearConversations: v.H }))
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
                const { user_preferences: a } = s()(D, {}),
                    r = (0, l.useLocation)(),
                    c = (0, l.useRouteMatch)(),
                    o = (0, l.useHistory)(),
                    { featureSwitches: u } = n.useContext(d.rC),
                    p = u.isTrue("responsive_web_grok_delete_conversations_enabled");
                if (!a) return n.createElement(Z.default, { history: o, location: r, match: c });
                return n.createElement(
                    g.Z,
                    null,
                    n.createElement(
                        h.Z,
                        { location: r, screenType: "secondaryDetail", title: x },
                        n.createElement(i.Z, { testID: "xaiDataSharingSettings" }, n.createElement(E.Z, { userPreferences: a }), n.createElement(_.Z, { userPreferences: a }), n.createElement(y.Z, { userPreferences: a })),
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
                s = a(420412),
                l = a(674132),
                o = a.n(l),
                u = a(443781),
                m = a(652904),
                p = a(293115),
                d = a(264922),
                g = a(71620),
                f = a(668214),
                b = a(661461),
                E = a(576025),
                y = a(390387);
            const _ = (e) => {
                    const t = (0, y.VT)(e);
                    return t && (0, b.ug)(e, t);
                },
                Z = (0, f.Z)()
                    .propsFromState(() => ({ languageName: _, languageCode: y.VT }))
                    .propsFromActions(() => ({ fetchCountryNamesIfNeeded: E.Po, fetchAvailableLanguagesIfNeeded: b.yt, createLocalApiErrorHandler: (0, g.zr)("LANGUAGES_SCREEN") })),
                h = o().d495680e,
                P = o().jc3fa0e2,
                S = o().a4b69cbc,
                v = o().c856bd00,
                C = o().a4b69cbc,
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
                    { createLocalApiErrorHandler: a, fetchAvailableLanguagesIfNeeded: l, fetchCountryNamesIfNeeded: o, languageCode: g, languageName: f, location: b } = e,
                    E = t.isTrue("onboarding_project_uls_enabled"),
                    y = r.useMemo(() => (E ? r.createElement(n.Z, { description: D, label: H, link: "/i/flow/uls_content_and_app_language_selector" }) : r.createElement(r.Fragment, null, r.createElement(i.Z, { text: S }), r.createElement(c.Z, { description: v }), r.createElement(n.Z, { description: f, label: C, link: "/settings/language" }), r.createElement(s.Z, null), r.createElement(i.Z, { text: w }), r.createElement(c.Z, { description: k }), r.createElement(n.Z, { label: x, link: "/i/flow/language_selector" }), r.createElement(s.Z, null), r.createElement(i.Z, { text: I }), r.createElement(c.Z, { description: T }), r.createElement(n.Z, { label: z, link: "/settings/your_twitter_data/language" }))), [E, f]);
                return (
                    r.useEffect(() => {
                        g && o(g).catch(a()), l().catch(a());
                    }, [g, o, l, a]),
                    r.createElement(p.nO, { namespace: B }, r.createElement(m.Z, null, r.createElement(d.Z, { location: b, screenType: "secondaryDetail", title: h }, r.createElement(c.Z, { description: P }), y)))
                );
            }
            const A = Z(L);
        },
        110202: (e, t, a) => {
            a.r(t), a.d(t, { LocationInformation: () => x, default: () => I });
            var r = a(202784),
                n = a(943401),
                i = a(954110),
                c = a(779610),
                s = a(674132),
                l = a.n(s),
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
            const _ = (0, b.Z)()
                    .propsFromState(() => ({ settings: E.kQ, viewerUser: y.ZP.selectViewerUser }))
                    .adjustStateProps(({ settings: e, ...t }) => ({ ...t, allowLocationHistoryUseEnabled: e.allowLocationHistoryUse }))
                    .propsFromActions(() => ({ updateSettings: E.VP, createLocalApiErrorHandler: (0, f.zr)("LOCATION_INFORMATION_SCREEN") })),
                Z = l().jabb9c9a,
                h = l().dd533318,
                P = l().dc20d918,
                S = l().af7d89e6,
                v = l().d9138166,
                C = l().fcb6a5b8,
                w = l().j018f2a2,
                k = { page: "settings", section: "location_information" };
            function x({ allowLocationHistoryUseEnabled: e, createLocalApiErrorHandler: t, location: a, updateSettings: s, viewerUser: l }) {
                const f = (0, d.Z)(),
                    { featureSwitches: b } = r.useContext(o.rC),
                    E = !!l?.birthdate && (0, m.k)(l.birthdate.year, l.birthdate.month, l.birthdate.day),
                    y = !l || (b.isTrue("settings_for_you_recommendation_enabled") && E);
                return r.createElement(
                    p.nO,
                    { namespace: k },
                    r.createElement(
                        u.Z,
                        null,
                        r.createElement(
                            g.Z,
                            { location: a, screenType: "secondaryDetail", title: Z },
                            r.createElement(n.Z, { description: h }),
                            y
                                ? null
                                : r.createElement(i.Z, {
                                      checked: e,
                                      helpText: S,
                                      label: P,
                                      name: "allowLocationHistoryUse",
                                      onChange: function (e, a) {
                                          f.scribe({ ...k, element: e, action: a ? "enable" : "disable" }), s({ [e]: a }).catch(t());
                                      },
                                  }),
                            r.createElement(c.Z, { label: v, link: "/settings/your_twitter_data/locations" }),
                            r.createElement(c.Z, { label: C, link: "/settings/location" }),
                            r.createElement(c.Z, { label: w, link: "/settings/explore" }),
                        ),
                    ),
                );
            }
            const I = _(x);
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
                m = a(674132),
                p = a.n(m),
                d = a(652904),
                g = a(736063),
                f = a(301410),
                b = a(725516),
                E = a(312771),
                y = a(264922),
                _ = a(154003),
                Z = a(673510),
                h = a(661810),
                P = a(678773),
                S = a(516951);
            const v = p().ab8089ea,
                C = n.createElement(_.ZP, { icon: n.createElement(P.default, { "aria-label": v }), testID: "reorder", type: "primaryText" }),
                w = ({ affiliate: e, disabled: t, sortIndex: a }) => {
                    const { name: r, profile_image_url_https: c, screen_name: s } = e.affiliated_account_results.result?.legacy || {};
                    return s && c && r && n.createElement(n.Fragment, null, n.createElement(Z.ZP, { "aria-checked": !0, avatarShape: "square", avatarSize: "xxLarge", avatarUri: c, decoration: void 0 !== a ? C : void 0, displayMode: "UserCompact", isDisabled: t, name: r, onCellClick: S.Z, screenName: s, userId: "", withInteractiveStyling: !0, withLink: !1 }), 0 === a && n.createElement(i.Z, { style: k.gutter }, n.createElement(h.Z, { spacing: "space2" })));
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
                        [c, s] = (() => {
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
                        l = n.useCallback(
                            ({ newIndex: e, oldIndex: n }) => {
                                r.scribe({ action: "reorder" });
                                const s = (0, H.Z)(t, n, e);
                                a(s),
                                    c(s.map((e) => e.affiliated_account_results.rest_id)).catch(() => {
                                        a(t), i({ text: F });
                                    });
                            },
                            [t, r, c, i],
                        );
                    return n.createElement(N, { isUpdatingAffiliates: s, items: t, onSortEnd: l });
                },
                j = u.default.create((e) => ({ gutter: { marginHorizontal: e.spaces.space16 } })),
                M = n.memo(R),
                G = p().ce70c590,
                U = p().a49e1b2a,
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
                            return n.createElement(i.Z, { style: X.container }, n.createElement(s.Z, { subtext: Q, text: U }), 1 === t.length ? n.createElement(x, { affiliate: t[0] }) : n.createElement(M, { affiliations: t }));
                        }
                        return t === E.ZP.FAILED ? n.createElement(l.Z, { onRequestRetry: a }) : n.createElement(o.Z, null);
                    }, []);
                return n.createElement(d.Z, null, n.createElement(g.H, { errorConfig: W }, n.createElement(y.Z, { location: t, onBackClick: u, title: G }, n.createElement($, { fetchPolicy: "network-only", render: m, variables: {} }))));
            }
            const X = u.default.create((e) => ({ container: { gap: 8 } })),
                Y = n.memo((0, b.Z)(J, { page: "settings", section: "affiliations" }));
        },
        254789: (e, t, a) => {
            a.d(t, { Z: () => $ });
            var r = a(202784),
                n = a(325686),
                i = a(688715),
                c = a(731708),
                s = a(392237),
                l = a(674132),
                o = a.n(l),
                u = a(503089),
                m = a(849353),
                p = a(311687),
                d = a(443781),
                g = a(736063),
                f = a(337394),
                b = a(321330),
                E = a(548797),
                y = a(643242),
                _ = a(85034),
                Z = a(17412),
                h = a(952793),
                P = a(685731),
                S = a(137070),
                v = a(293084);
            const C = o().edbb700f,
                w = o().ba2e82a1,
                k = o().e9884540,
                x = o().bfb879aa,
                I = ({ subscription: e }) => {
                    const t = (0, S.Z)()[e?.product?.rest_id ? f.v5.premium[e?.product?.rest_id] : null].hashed,
                        a = (0, E.gS)(e, "Discount", { status: "active" }),
                        i = (0, E.gS)(e, "Discount", { status: "pending" }),
                        s = (0, v.Z)(t).web_subscription_product_details,
                        l = (0, h.hC)("subscriptions_management_use_active_price"),
                        o = (0, P.Gi)(e.charge_interval, l ? e.prices : s?.prices),
                        u = o ? (0, P.d3)(o, !1, e) : "",
                        m = o ? (0, P.d3)(o, !1, e, !0, !1) : "";
                    return r.createElement(n.Z, null, a ? r.createElement(n.Z, { style: z.activeDiscountContainer, testID: "active_discount_info" }, r.createElement(n.Z, { style: z.discountTitleRow }, r.createElement(Z.default, { style: z.activeDiscountIcon }), r.createElement(c.ZP, { color: "green900", size: "subtext2", weight: "medium" }, k)), r.createElement(c.ZP, { color: "green900", size: "subtext1", style: z.priceLabel, testID: "stripe-price-info" }, u)) : r.createElement(c.ZP, { color: "gray1100", size: "subtext1", style: z.priceLabel, testID: "stripe-price-info" }, u), i ? r.createElement(n.Z, { style: z.pendingDiscountContainer, testID: "pending_discount_info" }, r.createElement(n.Z, { style: z.discountTitleRow }, r.createElement(Z.default, { style: z.pendingDiscountIcon }), r.createElement(c.ZP, { color: "gray900", size: "subtext2", weight: "medium" }, x)), r.createElement(c.ZP, { color: "gray900", size: "subtext1", style: z.priceLabel, testID: "stripe-price-info" }, m), e.next_billing_at?.time_in_millis ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, C({ date: w(new Date(parseInt(e.next_billing_at?.time_in_millis, 10))) })) : null) : null);
                },
                T = (e) => r.createElement(g.H, { errorConfig: { context: "manage-subscription-price-info" } }, r.createElement(I, e)),
                z = s.default.create((e) => ({ priceLabel: { marginBottom: e.spaces.space8 }, activeDiscountContainer: { backgroundColor: e.colors.green100, borderRadius: e.borderRadii.medium, padding: e.spaces.space8, gap: e.spaces.space8, marginTop: e.spaces.space8 }, pendingDiscountContainer: { borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, backgroundColor: e.colors.gray100, borderStyle: "dashed", borderRadius: e.borderRadii.medium, padding: e.spaces.space8, gap: e.spaces.space8, marginTop: e.spaces.space8 }, activeDiscountIcon: { color: e.colors.green900 }, pendingDiscountIcon: { color: e.colors.gray900 }, discountTitleRow: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center", marginBottom: e.spaces.space4 } })),
                H = o().e122fb3f,
                D = o().be103b84,
                B = o().ace43720,
                L = o().ba2e82a1,
                A = o().c8f18aa4,
                V = o().a341d1f7,
                F = o().e4aaf0f8,
                O = o().e5170220,
                N = o().j6d6b66e,
                R = o().fae1751f,
                j = o().fecebd4c,
                M = o().h201c4c2,
                G = o().i8385a2c,
                U = o().h80834de,
                Q = o().baf97716,
                W = o().ae864b69,
                q = ({ subscription: e, viewer: t }) => {
                    const { label: a } = (0, b.Z)(),
                        { featureSwitches: s, userClaims: l } = (0, d.QZ)(),
                        [o, , g] = (0, _.Z)(e?.product?.rest_id || "", !0),
                        Z = "SwitchScheduled" === o,
                        h = g ? f.St[f.v5.premium[g]] : null,
                        P = (0, E.gS)(e, "FreeTrial", { status: "active" }),
                        S = e?.payment_source === y.H.Twitter,
                        v = e?.payment_source === y.H.Ads,
                        C = e?.payment_source === y.H.Gift,
                        w = !!e?.payment_source && e?.payment_source !== y.H.Stripe && l.isAnyPremiumSubscriber(),
                        k = e?.payment_source === y.H.TPay || e?.payment_source === y.H.Twitter,
                        x = s.getStringValue("subscriptions_gifting_help_url") || (0, i.ju)("https://help.x.com/forms/paid-features/general"),
                        I = r.useMemo(() => {
                            if (e?.payment_source && e?.payment_source !== y.H.Stripe) return e?.payment_source === y.H.AppleAppStore ? M : e?.payment_source === y.H.GooglePlay ? G : U;
                        }, [e]),
                        z = r.useCallback(() => (S ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, F, " ", r.createElement(c.ZP, { link: "https://help.x.com/forms/paid-features/general" }, j)) : v ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, O) : C ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, N, " ", r.createElement(c.ZP, { link: x }, j)) : r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, R({ mobilePlatform: I }))), [x, v, S, C, I]);
                    return r.createElement(n.Z, { style: J.container }, r.createElement(n.Z, { style: J.card }, r.createElement(n.Z, { style: J.header }, r.createElement(c.ZP, { size: "headline2", weight: "medium" }, a), r.createElement(n.Z, { bold: !0, style: J.label }, "Expire" === e?.state && e.payment_source !== y.H.Gift ? r.createElement(u.default, { style: J.expiringIcon }) : r.createElement(m.default, { style: J.activeIcon }), r.createElement(c.ZP, { align: "center", selectable: !1, size: "body", weight: "medium" }, "Expire" === e?.state && e.payment_source !== y.H.Gift ? B : D))), "Stripe" === e?.payment_source ? r.createElement(T, { subscription: e }) : null, Z ? r.createElement(n.Z, { style: J.callout }, r.createElement(p.default, null), r.createElement(c.ZP, null, W({ tierName: h, date: L(new Date(parseInt(e?.next_billing_at?.time_in_millis, 10))) }))) : null, "Expire" === e?.state ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, Q) : null, w || k ? z() : null, P ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, H({ endDate: L(new Date(parseInt(P?.ends_at_msec, 10))) })) : null, l.isVerifiedOrgAffiliate() ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, V({ organization: t?.highlightedLabel?.description })) : l.isVerifiedOrg() || l.isLegacyVerifiedOrg() ? r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, A) : null));
                },
                $ = (e) => r.createElement(g.H, { errorConfig: { context: "stripe-active-subscription-info" } }, r.createElement(q, e)),
                J = s.default.create((e) => ({ container: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterHorizontal }, card: { borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray50, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterHorizontal }, label: { flexDirection: "row", minHeight: e.spaces.space32, alignItems: "center", flexShrink: 1 }, activeIcon: { marginEnd: e.spaces.space4, color: e.colors.primary }, expiringIcon: { marginEnd: e.spaces.space4 }, header: { justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space4 }, callout: { flexDirection: "row", padding: e.spaces.space8, backgroundColor: e.colors.blue50, borderRadius: e.borderRadii.small, gap: e.spaces.space8, alignItems: "center" } }));
        },
        386255: (e, t, a) => {
            a.r(t), a.d(t, { ManageSubscriptionScreen: () => N, default: () => R });
            var r = a(807896),
                n = a(202784),
                i = a(325686),
                c = a(107267),
                s = a(530732),
                l = a(928088),
                o = a(731708),
                u = a(392237),
                m = a(674132),
                p = a.n(m),
                d = a(191796),
                g = a(443781),
                f = a(652904),
                b = a(736063),
                E = a(952793),
                y = a(177210),
                _ = a(670094),
                Z = a(147595),
                h = a(811574),
                P = a(548797),
                S = a(643242),
                v = a(275158),
                C = a(264922),
                w = a(254789),
                k = a(71620),
                x = a(668214),
                I = a(818581),
                T = a(919022);
            const z = (0, x.Z)()
                    .propsFromState(() => ({ viewerUser: T.ZP.selectViewerUser, userPreferences: I.kQ }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, k.zr)("AFFILIATES_SCREEN"), fetchUserPreferencesIfNeeded: I.xQ }))
                    .withAnalytics({ page: "subscriptions", section: "management" }),
                H = p().ib35705e,
                D = p().de9f111a,
                B = p().d5839f9e,
                L = p().a840c22c,
                A = p().aaa798fc,
                V = p().e31456f8,
                F = p().a7c4ecea,
                O = p().h15cc518;
            function N(e) {
                const { analytics: t, createLocalApiErrorHandler: a, fetchUserPreferencesIfNeeded: u, viewerUser: m } = e,
                    p = (0, E.hC)("subscriptions_management_query_active_price"),
                    b = (0, h.Z)({ fetchPrices: p }),
                    k = (0, Z.R)(b),
                    x = (0, c.useLocation)(),
                    { userClaims: I } = n.useContext(g.rC),
                    T = k?.payment_source,
                    z = (0, y.Z)({ returnUrl: v.d9, originProduct: "TwitterBlue" });
                n.useEffect(() => {
                    u().catch(a({ ...(0, _.d)(), showToast: !0 }));
                }),
                    n.useEffect(() => {
                        t.scribe({ action: "impression" });
                    }, [t]);
                const N = I.isAnyPremiumSubscriber(),
                    R = (0, P.gS)(k, "FreeTrial", { status: "active" }),
                    M = n.useCallback(() => {
                        t.scribe({ component: "expiring-sub-manage-subscription", action: "click" }), z?.();
                    }, [t, z]);
                return n.createElement(
                    f.Z,
                    null,
                    n.createElement(
                        C.Z,
                        { location: x, title: H },
                        N ? n.createElement(w.Z, { subscription: k, viewer: m }) : null,
                        n.createElement(
                            i.Z,
                            null,
                            (() => {
                                const e = !!T && T === S.H.Stripe && N,
                                    t = "Expire" === k?.state,
                                    a = ["premium-basic", "premium-basic-test", "premium-basic-sandbox", "rogue-one-prod-2", "rogue-one-test-2-1", "rogue-one-sandbox-2"],
                                    c = ({ description: e, isExternal: t, label: a, ...c }) => n.createElement(s.Z, (0, r.Z)({}, c, { disabled: !z, style: j.manageSubscriptionInteraction }), n.createElement(l.Z, null, n.createElement(i.Z, { style: j.manageSubscriptionSection }, n.createElement(i.Z, { style: j.manageSubscriptionSectionBody }, n.createElement(o.ZP, { color: "blue500", weight: "medium" }, a), n.createElement(o.ZP, { color: "gray700", size: "subtext2" }, e)), t ? n.createElement(d.default, { style: j.goToSubscriptionPortalIcon }) : null)));
                                if (e) {
                                    const e = a.find((e) => e === k?.product?.rest_id) ? { title: A, desc: F } : { title: V, desc: O };
                                    return n.createElement(n.Fragment, null, R || t ? null : n.createElement(c, { description: e.desc, label: e.title, link: { pathname: "/i/premium_tier_switch", state: { product: "BlueVerifiedPlus" } }, role: "button", testID: "tier-switch-link" }), t ? null : n.createElement(c, { description: B, label: I.isVerifiedOrg() || I.isVerifiedOrgAffiliate() ? L : D, link: "/settings/subscription/manage" }), t ? n.createElement(c, { description: B, isExternal: !0, label: D, onClick: M }) : null);
                                }
                                return null;
                            })(),
                        ),
                    ),
                );
            }
            const R = z((e) => n.createElement(b.H, { errorConfig: { context: "manage_subscription_screen" } }, n.createElement(N, e))),
                j = u.default.create((e) => ({ manageSubscriptionSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, manageSubscriptionSectionBody: { flexShrink: 1 }, offPlatformSubscriptionSection: { flexDirection: "column", justifyContent: "space-between" }, goToSubscriptionPortalIcon: { color: e.colors.gray700, flexShrink: 0 }, manageSubscriptionInteraction: { cursor: "pointer" }, blueVerifiedCalloutWrapper: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, newLabelWrapper: { flexDirection: "row" }, newLabel: { backgroundColor: e.colors.blue50, color: e.colors.primary900, marginEnd: 10, borderRadius: e.borderRadii.xLarge, padding: 10 }, iconThumbnail: { marginEnd: e.spaces.space8 }, verifiedOrganizationsSubscriptionDescription: { marginTop: e.spaces.space8 }, upgradeDowngradeComingSoonLabel: { marginTop: e.spaces.space16, marginStart: e.spaces.space16, marginBottom: e.spaces.space12 } }));
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
                f = a(293084),
                b = a(325686),
                E = a(107267),
                y = a(731708),
                _ = a(154003),
                Z = a(392237),
                h = a(674132),
                P = a.n(h),
                S = a(980407),
                v = a(725405);
            const C = [
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
                w = P().af66a072,
                k = P().a092f1ba,
                x = P().g96c7f48,
                I = ({ activeProductCategory: e, activeSubscription: t, churnPreventionOfferAvailable: a, goToStripePortal: n, pendingDiscount: i, setCurrentFlowStep: c }) => {
                    const s = (0, E.useHistory)(),
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
                            b.Z,
                            { style: T.root },
                            r.createElement(
                                b.Z,
                                { style: T.content },
                                r.createElement(y.ZP, { align: "left", size: "title1", weight: "heavy" }, w),
                                r.createElement(
                                    b.Z,
                                    { role: "list", style: T.list },
                                    C.filter(({ subscriptions: t }) => t.hasOwnProperty(e)).map(({ label: e }) => r.createElement(y.ZP, { key: e, role: "listitem", style: T.listItem }, e)),
                                ),
                                o ? null : r.createElement(_.ZP, { link: "/i/premium_tier_switch", onPress: m, size: "xLarge", style: T.button, type: "primaryOutlined" }, x),
                                r.createElement(_.ZP, { disabled: !n, onPress: p, size: "xLarge", style: T.button, type: "destructiveFilled" }, k),
                            ),
                        ),
                    );
                },
                T = Z.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto" }, button: { marginVertical: e.spaces.space8 }, list: { marginVertical: e.spaces.space20 }, listItem: { display: "list-item", listStyle: "disc", listStylePosition: "inside", marginVertical: e.spaces.space8 } }));
            var z = a(40610),
                H = a(167630),
                D = a(913973),
                B = a(125498),
                L = a(199087),
                A = a(336629);
            const V = P().je8143e1,
                F = P().j5847735,
                O = P().a092f1ba,
                N = P().j88ba18e,
                R = P().da3431f9,
                j = P().i6fbfc72,
                M = P().f1bc6309,
                G = P().ef4602ec,
                U = P().fdb7b52a,
                Q = ({ activeProductCategory: e, activeSubscription: t, activeTierPrice: a, goToStripePortal: n, offer: c, setCurrentFlowStep: l }) => {
                    const o = (0, E.useHistory)(),
                        u = (0, v.Z)(),
                        [m, p] = (0, L.Z)(),
                        [d, g] = r.useState(!1),
                        f = (0, i.hC)("subscriptions_marketing_page_include_tax_enabled");
                    r.useEffect(() => {
                        u.scribe({ component: "churn_prevent_offer", action: "impression" });
                    }, [u]);
                    const Z = r.useCallback(() => {
                            u.scribe({ action: "click", component: "churn_prevent_offer", element: "continue_to_cancel" }), n && n();
                        }, [u, n]),
                        h = s.St[e],
                        C = r.useMemo(() => {
                            const e = { percentage: c.metadata.percent_off, productName: h, duration: c.metadata.duration_in_interval };
                            return "Month" === a?.charge_interval ? V(e) : F(e);
                        }, [a, c, h]),
                        w = r.useCallback(() => {
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
                            b.Z,
                            { style: W.root },
                            r.createElement(
                                b.Z,
                                { style: W.content },
                                r.createElement(y.ZP, { align: "left", size: "title1", weight: "heavy" }, C),
                                r.createElement(y.ZP, { style: W.description }, R({ productName: h })),
                                r.createElement(
                                    b.Z,
                                    { style: W.list },
                                    r.createElement(
                                        b.Z,
                                        { style: W.listItem },
                                        r.createElement(D.default, null),
                                        r.createElement(
                                            y.ZP,
                                            null,
                                            ((e, t, a) => {
                                                const n = (0, A.T)({ price: e, annualPriceMonthly: !1, includeTax: a }),
                                                    i = (0, A.T)({ price: e, annualPriceMonthly: !1, includeTax: a, percentOff: t.metadata.percent_off }),
                                                    c = { strike: r.createElement(y.ZP, { style: { textDecorationLine: "line-through" }, testID: "strikethrough-price" }), green: r.createElement(y.ZP, { color: "green500", testID: "discount-price", weight: "medium" }) },
                                                    s = { duration: t.metadata.duration_in_interval ?? 0, standardPrice: n, discountedPrice: i };
                                                return "Year" === e.charge_interval ? r.createElement(P().I18NFormatMessage, { $i18n: "e9dc8a25", duration: s.duration }, r.cloneElement(c.strike, null, P().af283938({ standardPrice: s.standardPrice })), r.cloneElement(c.green, null, P().c284b365({ discountedPrice: s.discountedPrice }))) : r.createElement(P().I18NFormatMessage, { $i18n: "f8a9cbb7", duration: s.duration }, r.cloneElement(c.strike, null, P().e2673372({ standardPrice: s.standardPrice })), r.cloneElement(c.green, null, P().jd2dc103({ discountedPrice: s.discountedPrice })));
                                            })(a, c, f),
                                        ),
                                    ),
                                    r.createElement(b.Z, { style: W.listItem }, r.createElement(D.default, null), r.createElement(y.ZP, null, j)),
                                    r.createElement(b.Z, { style: W.listItem }, r.createElement(D.default, null), r.createElement(y.ZP, null, M({ productName: h }))),
                                    r.createElement(y.ZP, { style: W.disclaimer }, U),
                                ),
                                d ? r.createElement(z.Z.Danger, { text: G }) : null,
                                r.createElement(_.ZP, { disabled: p, icon: p ? void 0 : r.createElement(B.default, null), onPress: w, size: "xLarge", style: W.button, type: "primaryOutlined" }, p ? r.createElement(H.Z, null) : N),
                                r.createElement(_.ZP, { disabled: !n, onPress: Z, size: "xLarge", style: W.button, type: "destructiveFilled" }, O),
                            ),
                        ),
                    );
                },
                W = Z.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto" }, button: { marginVertical: e.spaces.space8 }, list: { gap: e.spaces.space12, marginBottom: e.spaces.space20 }, listItem: { flexDirection: "row", gap: e.spaces.space4 }, description: { marginVertical: e.spaces.space16 }, disclaimer: { marginTop: e.spaces.space16 } }));
            a(136728);
            const q = P().c6150942,
                $ = P().fdb7b52a,
                J = P().a905eac6,
                X = (e) => {
                    const t = (0, E.useHistory)();
                    return r.createElement(S.Z, { backButtonType: "close", hideBackButton: !1, history: t, onBackClick: () => t.push("/i/premium") }, r.createElement(b.Z, { style: Y.root }, r.createElement(b.Z, { style: Y.content }, r.createElement(y.ZP, { align: "left", size: "title1", weight: "heavy" }, q), r.createElement(y.ZP, { align: "left" }, $), r.createElement(_.ZP, { link: "/i/premium", size: "xLarge", style: Y.button, type: "primaryFilled" }, J))));
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
                    const a = (0, E.useHistory)(),
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
                    return r.createElement(S.Z, { backButtonType: "close", hideBackButton: !1, history: a, onBackClick: () => a.goBackThroughModals() }, r.createElement(b.Z, { style: ie.root }, r.createElement(b.Z, { style: ie.content }, r.createElement(y.ZP, { size: "title2", weight: "heavy" }, te), r.createElement(b.Z, { style: ie.radio }, r.createElement(K.Z, { name: "editOption", onChange: s, options: re, value: n })), r.createElement(_.ZP, { disabled: !n || !e, onPress: l, size: "xLarge", style: ie.button, type: "primaryFilled" }, ae))));
                },
                ie = Z.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, radio: { marginBottom: e.spaces.space24 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto" }, button: { marginVertical: e.spaces.space8 }, subscriptionDetails: { marginVertical: e.spaces.space16 }, marginBottom: { marginBottom: e.spaces.space8 }, currentPlanContent: { backgroundColor: e.colors.gray50, padding: e.spaces.space8, borderRadius: e.borderRadii.medium, width: "100%" } }));
            var ce = a(125363),
                se = a(919022),
                le = a(254789);
            const oe = P().j317d958,
                ue = P().a46e42d2,
                me = P().a092f1ba,
                pe = ({ activeSubscription: e, goToStripePortal: t, pendingDiscount: a }) => {
                    const n = (0, E.useHistory)(),
                        i = (0, v.Z)(),
                        c = (0, ce.v9)(se.ZP.selectViewerUser),
                        s = r.useCallback(() => {
                            i.scribe({ action: "click", component: "pending_offer_callout", element: "continue_to_cancel" }), t && t();
                        }, [i, t]);
                    return r.createElement(S.Z, { backButtonType: "close", hideBackButton: !1, history: n }, r.createElement(b.Z, { style: de.root }, r.createElement(b.Z, { style: de.content }, r.createElement(y.ZP, { align: "left", size: "title1", weight: "heavy" }, oe), r.createElement(le.Z, { subscription: e, viewer: c }), r.createElement(_.ZP, { link: "/i/premium", size: "xLarge", style: de.button, type: "primaryOutlined" }, ue), r.createElement(_.ZP, { disabled: !t, onPress: s, size: "xLarge", style: de.button, type: "destructiveFilled" }, me))));
                },
                de = Z.default.create((e) => ({ root: { flexGrow: 1, paddingHorizontal: e.spaces.space40 }, content: { justifyContent: "center", marginHorizontal: e.spaces.space40, marginVertical: "auto", gap: e.spaces.space16 }, button: { marginVertical: e.spaces.space8 } }));
            function ge(e) {
                const { featureSwitches: t } = (0, n.QZ)(),
                    a = (0, g.Z)(),
                    b = (0, i.hC)("subscriptions_management_query_active_price"),
                    E = (0, o.Z)({ fetchPrices: b }),
                    y = (0, l.R)(E),
                    _ = y?.product?.rest_id ? s.v5.premium[y?.product?.rest_id] : null,
                    Z = (0, u.gS)(y, "Discount", { status: "pending" }),
                    h = a[_].hashed,
                    P = (0, f.Z)(h, { moment: "CancelSubscription" }).web_subscription_product_details,
                    S = (0, i.hC)("subscriptions_management_use_active_price"),
                    v = P ? (0, m.Gi)(y?.charge_interval, y?.prices) : null,
                    C = P ? (0, m.Gi)(y?.charge_interval, P.prices) : null,
                    w = S ? v : C,
                    k = C ? (0, m.fS)(C, !0, !1) : null,
                    x = !!k && t.isTrue("subscriptions_offers_churn_prevention_enabled"),
                    [T, z] = r.useState("OptionsStep"),
                    H = (0, c.Z)({ returnUrl: d.d9, originProduct: "TwitterBlue" });
                if (!_ || !y) return null;
                return r.createElement(
                    p.nO,
                    { namespace: { page: "subscriptions_manage" } },
                    (() => {
                        switch (T) {
                            case "OptionsStep":
                                return r.createElement(ne, { goToStripePortal: H, setCurrentFlowStep: z });
                            case "CancelStep":
                                return r.createElement(I, { activeProductCategory: _, activeSubscription: y, activeTierPrice: w, churnPreventionOfferAvailable: x, goToStripePortal: H, pendingDiscount: Z, setCurrentFlowStep: z });
                            case "PendingOfferStep":
                                return r.createElement(pe, { activeSubscription: y, goToStripePortal: H, pendingDiscount: Z });
                            case "OfferStep":
                                return k && w ? r.createElement(Q, { activeProductCategory: _, activeSubscription: y, activeTierPrice: w, goToStripePortal: H, offer: k, setCurrentFlowStep: z }) : null;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-32bb1570.a9298b0a.js.map
