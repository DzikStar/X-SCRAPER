"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsMonetization-e019dbda"],
    {
        856522: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(807896),
                n = r(9410),
                s = r(202784),
                l = (r(585488), r(277660)),
                c = r.n(l),
                o = r(23134);
            function i({ user: e, ...t }) {
                const r = c()(n.Z, e),
                    l = s.useMemo(() => (r ? { id_str: r.rest_id, screen_name: r.core?.screen_name || "", name: r.core?.name || "", follow_request_sent: r.legacy?.follow_request_sent || !1, protected: r.privacy?.protected || !1, following: r.relationship_perspectives?.following || !1, followed_by: r.relationship_perspectives?.followed_by || !1, super_following: r.super_following || void 0, super_follow_eligible: r.super_follow_eligible || void 0, super_followed_by: r.super_followed_by || void 0, blocking: r.relationship_perspectives?.blocking || void 0, highlightedLabel: r.affiliates_highlighted_label?.label ? { userLabelType: r.affiliates_highlighted_label.label.user_label_type || void 0 } : void 0 } : void 0), [r]);
                return s.createElement(o.C, (0, a.Z)({}, t, { isRelay: !0, user: l, userId: r?.rest_id ?? "" }));
            }
        },
        879596: (e, t, r) => {
            r.d(t, { D: () => n });
            var a = r(111677);
            const n = { defaultToast: { text: r.n(a)().ca96fe6e }, showToast: !0 };
        },
        566220: (e, t, r) => {
            r.d(t, { R: () => l });
            var a = r(202784);
            const n = () => new Date(),
                s = a.createContext(n),
                l = () => a.useContext(s);
        },
        317897: (e, t, r) => {
            r.r(t), r.d(t, { default: () => na });
            var a = r(807896),
                n = r(202784),
                s = r(107267),
                l = r(725516),
                c = r(300497),
                o = r(615027),
                i = r(111677),
                u = r.n(i),
                p = r(507651),
                m = r(652904),
                d = r(264922),
                _ = r(518180),
                E = r(717626),
                b = r(325686),
                h = (r(585488), r(844685)),
                g = r(731708),
                f = r(154003),
                Z = r(392237),
                w = r(309043),
                y = r(831984),
                v = r(875586),
                S = r(468869),
                x = r(603e3),
                T = r(199213),
                k = r(736063),
                R = r(535338);
            const O = u().bc43a32e,
                N = u().i4c3b046,
                P = u().ca516a66,
                C = E.Z,
                I = ({ slice: e }) => {
                    const { recentItems: t } = (0, S.h9)(e);
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(h.Z, { text: O }),
                        t.length > 0
                            ? n.createElement(
                                  b.Z,
                                  { role: "list" },
                                  t.map((e) => n.createElement(y.Z, { item: e, key: e.transaction_id })),
                              )
                            : n.createElement(g.ZP, { color: "gray700", style: V.emptyState }, N),
                        n.createElement(f.ZP, { link: _.OB.transactions.root, style: V.button }, P),
                    );
                },
                A = () => {
                    const e = (0, R.p)(C, { recent_awards_limit: 3 }).viewer.user_results.result,
                        { awards_granted_slice: t } = e;
                    return n.createElement(n.Fragment, null, n.createElement(v.Z, { revenueType: x.AU.awards_revenue, showEarnedRevenueSinceLastPayout: !0, user: e }), n.createElement(w.Z, { user: e }), n.createElement(T.Z, { revenueType: x.AU.awards_revenue, showHelperText: !0, showProgress: !0, stripeStatus: e.stripe_account_status, user: e }), t && n.createElement(I, { slice: t }));
                },
                L = { context: "MONETIZATION_AWARDS_REVENUE" },
                V = Z.default.create((e) => ({ button: { marginTop: e.spaces.space16, marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space16 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } })),
                D = (0, l.Z)(() => n.createElement(k.H, { errorConfig: L }, n.createElement(A, null)), { component: "awards_revenue" });
            var U = r(470206),
                B = (r(136728), r(688715)),
                $ = r(420412),
                H = r(190286),
                F = r(782642),
                z = r(977126),
                M = r(428606),
                W = r(97141),
                j = r(614983),
                G = r.n(j),
                J = r(277660),
                q = r.n(J),
                Y = r(351743),
                K = r.n(Y);
            const Q = W.Z,
                X = M.Z,
                ee = (e) => {
                    const t = q()(Q, e),
                        [r, a] = K()(X);
                    return [
                        n.useCallback(
                            () =>
                                new Promise((e, a) => {
                                    r({
                                        variables: {},
                                        onCompleted: (t, r) => e(),
                                        onError: a,
                                        updater: (e, r) => {
                                            const a = t.__id;
                                            G()(a, "userId must be specified");
                                            const n = e.get(a);
                                            G()(n, "userRecord must be specified"), n.invalidateRecord();
                                        },
                                    });
                                }),
                            [r, t.__id],
                        ),
                        a,
                    ];
                },
                te = u().f3ce76c0,
                re = u().i8982e7e,
                ae = u().fbbfe8aa,
                ne = u().e4f29140,
                se = u().f66d24be,
                le = u().g5925628,
                ce = u().e58e85d2,
                oe = u().be8e87b4,
                ie = u().cfd2f35e,
                ue = u().bee26fa8,
                pe = u().f0145c9a,
                me = u().ef4602ec,
                de = { helpCenter: (0, B.ju)("https://help.x.com/using-twitter/coins"), contactUs: (0, B.ju)("https://help.x.com/forms/paid-features/general") },
                _e = Z.default.create((e) => ({ other: { gap: e.spaces.space24, marginTop: e.spaces.space12 }, buttons: { flexDirection: "row", flexWrap: "wrap", gap: e.spaces.space8 }, button: { flexBasis: `${e.breakpoints.micro}px`, flexGrow: 1, flexShrink: 1 } })),
                Ee = (0, l.Z)(
                    ({ backLocation: e, user: t }) => {
                        const r = (0, s.useHistory)(),
                            a = (0, F.p)(),
                            [l, c] = ee(t),
                            [o, i] = n.useState(!1),
                            u = n.useCallback(() => {
                                i(!0);
                            }, []),
                            p = n.useCallback(() => {
                                l()
                                    .then(() => {
                                        i(!1), a({ text: pe }), r.push(e);
                                    })
                                    .catch(() => {
                                        a({ text: me });
                                    });
                            }, [a, l, r, e]),
                            m = n.useCallback(() => {
                                i(!1);
                            }, []);
                        return n.createElement(n.Fragment, null, n.createElement(z.Z, { childrenStyle: _e.other, headline: te, illustration: z.j.LifeSaver }, n.createElement(g.ZP, { color: "gray700" }, re), n.createElement(b.Z, { style: _e.buttons }, n.createElement(f.ZP, { link: de.helpCenter, style: _e.button, type: "primaryOutlined" }, se), n.createElement(f.ZP, { link: de.contactUs, style: _e.button, type: "primaryOutlined" }, le))), n.createElement($.Z, null), n.createElement(z.Z, { childrenStyle: _e.other, headline: ae, illustration: z.j.Cone }, n.createElement(g.ZP, { color: "gray700" }, ne), n.createElement(b.Z, { style: _e.buttons }, n.createElement(f.ZP, { disabled: c, onPress: u, style: _e.button, type: "destructiveOutlined" }, ce), o && n.createElement(H.Z, { cancelButtonLabel: ie, confirmButtonLabel: ue, confirmButtonType: "destructiveFilled", headline: oe, onCancel: m, onConfirm: p, text: ne }))));
                    },
                    { component: "awards_management_summary" },
                ),
                be = U.Z,
                he = () => {
                    const e = (0, R.p)(be, {}).viewer.user_results.result;
                    return "User" === e.__typename && e.award_eligible ? n.createElement(Ee, { backLocation: _.Jz, user: e }) : null;
                },
                ge = { context: "MONETIZATION_AWARDS_SETTINGS" },
                fe = (0, l.Z)(() => n.createElement(k.H, { errorConfig: ge }, n.createElement(he, null)), { component: "awards_settings" }),
                Ze = u().j087774e,
                we = _.OB.dashboard.revenue,
                ye = _.OB.dashboard.manage,
                ve = u().ja73ebac,
                Se = u().h16eeb42,
                xe = (0, l.Z)(
                    () => {
                        const e = (0, s.useLocation)(),
                            t = [
                                { key: "revenue", label: ve, to: { pathname: we }, isActive: () => e.pathname === we },
                                { key: "manage", label: Se, to: { pathname: ye }, isActive: () => e.pathname === ye },
                            ];
                        return n.createElement(m.Z, null, n.createElement(d.Z, { location: e, screenType: "secondaryDetail", title: Ze }, n.createElement(p.Z, { links: t }), n.createElement(s.Switch, null, n.createElement(s.Route, { exact: !0, path: we }, n.createElement(D, null)), n.createElement(s.Route, { exact: !0, path: ye }, n.createElement(fe, null)), n.createElement(s.Route, null, n.createElement(o.Z, { to: we })))));
                    },
                    { component: "awards_dashboard" },
                );
            var Te = r(967670),
                ke = r(315984),
                Re = r(127218);
            const Oe = u().a22f6808,
                Ne = Te.Z,
                Pe = () => {
                    const e = (0, s.useLocation)(),
                        { data: t, fetchNext: r } = (0, Re.C)(Ne, { limit: 25 }),
                        a = t.viewer.user_results.result;
                    if ("User" !== a.__typename) return null;
                    const l = a.awards_granted_slice;
                    return l ? n.createElement(m.Z, null, n.createElement(d.Z, { location: e, screenType: "secondaryDetail", title: Oe }, n.createElement(v.Z, { revenueType: x.AU.awards_revenue, showEarnedRevenueSinceLastPayout: !0, user: a }), n.createElement(ke.Z, { fetchNext: r, slice: l }))) : null;
                },
                Ce = { context: "MONETIZATION_AWARDS_TRANSACTIONS" },
                Ie = (0, l.Z)(() => n.createElement(k.H, { errorConfig: Ce }, n.createElement(Pe, null)), { component: "awards_transactions" });
            var Ae = r(676812),
                Le = r(860747),
                Ve = r(253518),
                De = r(443781);
            const Ue = u().ff9ed474,
                Be = u().d59dbf8a,
                $e = u().c76972f0,
                He = Ae.Z,
                Fe = () => {
                    const e = (0, s.useLocation)(),
                        { featureSwitches: t } = n.useContext(De.rC),
                        r = t.isTrue("creator_monetization_web_tips_dashboard_enabled"),
                        { viewer: a } = (0, R.p)(He, { awardsEnabled: r }),
                        l = !!a.is_active_creator,
                        c = a.user_results.result;
                    return n.createElement(m.Z, null, n.createElement(d.Z, { location: e, screenType: "secondaryDetail", title: Ue }, n.createElement(v.Z, { revenueType: x.AU.total_revenue, showEarnedRevenueSinceLastPayout: !0, user: c }), n.createElement(T.Z, { showHelperText: !0, stripeStatus: c.stripe_account_status, type: "payoutHistory", user: c }), n.createElement(h.Z, { subtext: $e, text: Be }), n.createElement(Ve.Z, { isActiveCreator: l, user: c }), n.createElement(Le.Z, { user: c })));
                },
                ze = { context: "MONETIZATION_EARNINGS" },
                Me = (0, l.Z)(() => n.createElement(k.H, { errorConfig: ze }, n.createElement(Fe, null)), { component: "earnings" });
            var We = r(668214),
                je = r(390387);
            const Ge = (0, We.Z)().propsFromState(() => ({ isActiveCreator: je.WM }))((e) => (!!e.isActiveCreator ? e.children : null));
            var Je = r(175270),
                qe = r(933317);
            const Ye = u().ee0510c2,
                Ke = u().g652fc4c,
                Qe = Je.Z,
                Xe = () => {
                    const e = (0, s.useLocation)(),
                        { data: t, fetchNext: r } = (0, Re.C)(Qe, { limit: 25 }),
                        a = t.viewer.user_results.result;
                    if ("User" !== a.__typename) return null;
                    const l = a.creator_payouts_slice;
                    return l ? n.createElement(m.Z, null, n.createElement(d.Z, { location: e, screenType: "secondaryDetail", title: Ye }, n.createElement(v.Z, { revenueType: x.AU.total_revenue, user: a }), n.createElement(qe.Z, { emptyStateDescription: Ke, fetchNext: r, slice: l }))) : null;
                },
                et = { context: "MONETIZATION_PAYOUT_HISTORY" },
                tt = (0, l.Z)(() => n.createElement(k.H, { errorConfig: et }, n.createElement(Xe, null)), { component: "payout_history" });
            var rt = r(181089),
                at = r(656166),
                nt = r(822441),
                st = r(952793);
            const lt = u().d978f43e,
                ct = u().d113fc10,
                ot = u().h7a41c02,
                it = u().eedf2eaa,
                ut = u().d93308d8,
                pt = rt.Z,
                mt = ({ emptyStateDescription: e, heading: t, slice: r, type: a }) => {
                    const { recentItems: s } = (0, S._5)(r),
                        l = ((e) => n.useCallback((t) => n.createElement(nt.Z, { item: t, key: t.__id, type: e }), [e]))(a);
                    return n.createElement(n.Fragment, null, n.createElement(h.Z, { text: t }), s.length > 0 ? n.createElement(b.Z, { role: "list" }, s.map(l)) : n.createElement(g.ZP, { color: "gray700", style: bt.emptyState }, e));
                },
                dt = () => {
                    const e = (0, R.p)(pt, { new_subscribers_limit: 3, renewals_limit: 3 }).viewer.user_results.result,
                        { superfollows_new_subscribers_slice: t, superfollows_renewals_slice: r } = e,
                        a = (0, st.hC)("creator_monetization_web_tips_dashboard_enabled") && e.award_eligible;
                    return n.createElement(n.Fragment, null, n.createElement(v.Z, { showEarnedRevenueSinceLastPayout: !0, user: e }), n.createElement(T.Z, { showHelperText: !0, showProgress: !0, stripeStatus: e.stripe_account_status, type: a ? void 0 : "payoutHistory", user: e }), t && n.createElement(n.Fragment, null, n.createElement(mt, { emptyStateDescription: ct, heading: lt, slice: t, type: at.x.InitialSale }), n.createElement(f.ZP, { link: _.Vt.transactions.newSubscriptions, style: bt.button }, ut)), r && n.createElement(n.Fragment, null, n.createElement(mt, { emptyStateDescription: it, heading: ot, slice: r, type: at.x.Renewal }), n.createElement(f.ZP, { link: _.Vt.transactions.renewals, style: bt.button }, ut)));
                },
                _t = { context: "MONETIZATION_SUPER_FOLLOWS_REVENUE" },
                Et = (0, l.Z)(() => n.createElement(k.H, { errorConfig: _t }, n.createElement(dt, null)), { component: "super_follows_revenue" }),
                bt = Z.default.create((e) => ({ button: { marginTop: e.spaces.space16, marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space16 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } }));
            var ht = r(747208),
                gt = r(893903);
            const ft = ht.Z,
                Zt = () => {
                    const { subscriptions_price_offerings: e, super_follows_price_offerings: t, viewer: r } = (0, R.p)(ft, {}),
                        a = r.user_results.result;
                    return "User" !== a.__typename ? null : n.createElement(gt.Z, { backLocation: _.Jz, perksConfirmLocation: _.Vt.perks.confirm, perksDescriptionLocation: _.Vt.perks.description, perksIntroLocation: _.Vt.perks.intro, perksPricingLocation: _.Vt.perks.pricing, priceOfferings: t, subscriptionsPriceOfferings: e, user: a, viewer: r });
                },
                wt = { context: "MONETIZATION_SUPER_FOLLOWS_SETTINGS" },
                yt = (0, l.Z)(() => n.createElement(k.H, { errorConfig: wt }, n.createElement(Zt, null)), { component: "super_follows_settings" }),
                vt = u().d7b51c68,
                St = u().ja73ebac,
                xt = u().h16eeb42,
                Tt = _.Vt.dashboard.revenue,
                kt = _.Vt.dashboard.manage,
                Rt = (0, l.Z)(
                    () => {
                        const e = (0, s.useLocation)(),
                            t = [
                                { key: "revenue", label: St, to: { pathname: Tt }, isActive: () => e.pathname === Tt },
                                { key: "manage", label: xt, to: { pathname: kt }, isActive: () => e.pathname === kt },
                            ];
                        return n.createElement(m.Z, null, n.createElement(d.Z, { location: e, screenType: "secondaryDetail", title: vt }, n.createElement(p.Z, { links: t }), n.createElement(s.Switch, null, n.createElement(s.Route, { exact: !0, path: Tt }, n.createElement(Et, null)), n.createElement(s.Route, { path: kt }, n.createElement(yt, null)), n.createElement(s.Route, null, n.createElement(o.Z, { to: Tt })))));
                    },
                    { component: "super_follows_dashboard" },
                );
            var Ot = r(19533),
                Nt = r(320848),
                Pt = r(62151),
                Ct = r(949985),
                It = r(50998),
                At = r(642097),
                Lt = r(43512),
                Vt = r(220693),
                Dt = r(102614),
                Ut = r(371758),
                Bt = r(399384),
                $t = r(466818),
                Ht = r(513120),
                Ft = r(357770),
                zt = r(541659),
                Mt = r(973316),
                Wt = r(467874),
                jt = r(870242),
                Gt = r(376755);
            const Jt = jt.Z,
                qt = Wt.Z,
                Yt = (e, { price: t }) => {
                    const r = q()(Jt, e),
                        a = (0, Gt.Ex)(r),
                        s = t || a || "",
                        [l, c] = K()(qt);
                    return [
                        n.useCallback(
                            () =>
                                new Promise((t, r) => {
                                    l({
                                        variables: { new_price: s },
                                        onCompleted: (e, r) => t(),
                                        onError: r,
                                        updater: (t) => {
                                            const r = t.get(e.__id);
                                            r && r.setLinkedRecord(t.create(`client:${e.__id}:super_follow_pending_price_change`, "SuperFollowPendingPriceChange").setValue(s, "new_price"), "super_follow_pending_price_change");
                                        },
                                    });
                                }),
                            [s, l, e],
                        ),
                        c,
                    ];
                };
            var Kt = r(274257),
                Qt = r(176544);
            const Xt = u().hadd463a,
                er = u().fce14f56,
                tr = u().b0c58272,
                rr = n.createElement(u().I18NFormatMessage, { $i18n: "ede65a59" }, n.createElement(g.ZP, { link: Qt._t }, u().edc014fb)),
                ar = u().d5737f0e,
                nr = Bt.Z,
                sr = Ut.Z,
                lr = Dt.Z,
                cr = Z.default.create((e) => ({ interstitial: { marginTop: e.spaces.space32 }, prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 }, bottomBar: { gap: e.spaces.space24, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 }, input: { borderRadius: e.borderRadii.small, marginBottom: e.spaces.space20, paddingStart: 0, paddingEnd: 0 }, subtext: { marginTop: e.spaces.space8 }, selector: { marginTop: e.spaces.space12 } })),
                or = (0, l.Z)(
                    ({ backLocation: e, subscriptionsPriceOfferings: t, user: r, viewer: a }) => {
                        const s = q()(nr, r),
                            l = q()(sr, a),
                            c = q()(lr, t).offers.map((e) => ({ label: e.price, value: e.key })),
                            o = (0, Gt.Ex)(s),
                            i = (0, Kt.qO)(l),
                            u = i && i !== o,
                            p = (0, Kt.NP)(l, "selected_price"),
                            [m, d] = Yt(s, { price: i || "" }),
                            _ = n.useMemo(() => n.createElement(Ht.Z, { style: cr.bottomBar }, n.createElement(Mt.Z, { disabled: !u || d, label: "Save", onPress: m, path: e, size: "xLarge", type: "primaryFilled" })), [u, d, m, e]);
                        return n.createElement(
                            zt.Z,
                            { bottomBar: _, withInfoButton: !0 },
                            n.createElement(Ht.Z, { style: cr.interstitial }, n.createElement(Ft.Z, { headline: Xt })),
                            n.createElement(
                                Ht.Z,
                                { style: cr.prices },
                                n.createElement(g.ZP, { "aria-level": 4, role: "heading", size: "title4", weight: "heavy" }, er),
                                n.createElement(g.ZP, { color: "gray700", style: cr.subtext }, tr),
                                n.createElement(g.ZP, { color: "gray700", style: cr.subtext }, rr),
                                n.createElement($t.ZP, {
                                    autofocus: !0,
                                    label: ar,
                                    onChange: (e) => {
                                        p(e);
                                    },
                                    options: c,
                                    style: cr.selector,
                                    value: i || o || "",
                                    withEmptyOption: !0,
                                }),
                            ),
                        );
                    },
                    { component: "management_perks_intro" },
                );
            var ir = r(945338);
            const ur = Ct.Z,
                pr = Pt.Z,
                mr = Nt.Z,
                dr = ({ subscriptionsPriceOfferings: e, user: t, viewer: r }) => {
                    const a = q()(ur, t),
                        l = q()(pr, r),
                        c = q()(mr, e),
                        o = (0, Gt.IU)(a),
                        i = (0, Gt.IH)(a),
                        u = (0, Gt.Ex)(a),
                        { discardChanges: p, shouldBlockNavigation: m } = (0, ir.Z)({ rootPath: _.Vt.dashboard.manage, user: a, viewer: l });
                    return (0, Kt.zG)(l, { creator_intro: o, description: i, selected_price: u }), n.createElement(n.Fragment, null, n.createElement(It.Z, { onNavigation: p, shouldBlockNavigation: m }), n.createElement(s.Switch, null, n.createElement(s.Route, { exact: !0, path: _.Vt.perks.intro }, n.createElement(Vt.Z, { backLocation: _.Vt.dashboard.manage, user: a, viewer: l })), n.createElement(s.Route, { exact: !0, path: _.Vt.perks.description }, n.createElement(Lt.Z, { backLocation: _.Vt.dashboard.manage, user: a, viewer: l })), n.createElement(s.Route, { exact: !0, path: _.Vt.perks.confirm }, n.createElement(At.Z, { user: a, viewer: l })), n.createElement(s.Route, { exact: !0, path: _.Vt.perks.pricing }, n.createElement(or, { backLocation: _.Vt.dashboard.manage, subscriptionsPriceOfferings: c, user: a, viewer: l }))));
                },
                _r = Ot.Z,
                Er = (0, l.Z)(
                    () => {
                        const e = (0, R.p)(_r, {}),
                            t = e.viewer.user_results.result,
                            r = e.viewer,
                            a = e?.subscriptions_price_offerings;
                        return "User" !== t.__typename || null == a ? null : n.createElement(dr, { subscriptionsPriceOfferings: a, user: t, viewer: r });
                    },
                    { component: "super_follows_perks" },
                );
            var br = r(246489),
                hr = r(322121),
                gr = r(470199),
                fr = r(371445),
                Zr = r(856522),
                wr = r(97882),
                yr = r(114084);
            const vr = u().h810143c,
                Sr = u().ga57b610,
                xr = u().h3b68828,
                Tr = u().d7b51c68,
                kr = u().cc2aa67a,
                Rr = u().b313bb24,
                Or = u().e5188502,
                Nr = u().ba2e82a1,
                Pr = { [gr.x.PlayStore]: u().i8385a2c, [gr.x.AppStore]: u().h201c4c2, [gr.x.Stripe]: u().g33f3050, [gr.x.Web]: u().g33f3050 },
                Cr = br.Z,
                Ir = ({ transactionType: e }) => {
                    const t = (0, s.useLocation)(),
                        { transactionId: r } = (0, s.useParams)(),
                        a = (0, R.p)(Cr, { rest_id: r ?? "0", subscription_event_type: e }).superfollows_subscription_by_rest_id,
                        l = a.consumer_results.result,
                        c = "User" === l.__typename,
                        o = a.payment_platform,
                        i = Nr(new Date(a.created_at_msec)),
                        u = a.price_in_hundred,
                        p = u ? (0, wr.x)({ amount: u, formatter: 100 }) : n.createElement(hr.default, { testID: "icon-minus" }),
                        _ = n.useMemo(() => n.createElement(Zr.Z, { user: l }), [l]);
                    return n.createElement(m.Z, null, n.createElement(d.Z, { location: t, screenType: "secondaryDetail", title: vr }, c ? n.createElement(yr.Z, { avatarSize: "jumbo", decoration: _, user: l, withUsernameCenterAligned: !0 }) : null, n.createElement(b.Z, { style: Lr.root }, n.createElement(fr.Z, { header: Sr, text: i }), n.createElement(fr.Z, { header: xr, text: Tr }), o && n.createElement(fr.Z, { header: kr, text: Pr[o] }), n.createElement(fr.Z, { header: Rr, text: p }), n.createElement(g.ZP, { color: "gray700", size: "subtext2", style: Lr.disclaimer }, Or))));
                },
                Ar = { context: "MONETIZATION_SUPER_FOLLOWS_TRANSACTION_DETAILS" },
                Lr = Z.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16 }, userProfile: { alignItems: "center" }, userAvatar: { height: "76px", width: "76px", marginBottom: e.spaces.space12 }, disclaimer: { marginTop: e.spaces.space4 } })),
                Vr = (0, l.Z)((e) => n.createElement(k.H, { errorConfig: Ar }, n.createElement(Ir, e)), { component: "super_follows_transaction_details" });
            var Dr = r(240312),
                Ur = r(839681);
            const Br = u().ed3efef0,
                $r = Dr.Z,
                Hr = () => {
                    const { data: e, fetchNext: t } = (0, Re.C)($r, { limit: 25 }),
                        r = e.viewer.user_results.result;
                    if ("User" !== r.__typename) return null;
                    const a = r.superfollows_new_subscribers_slice;
                    return a ? n.createElement(n.Fragment, null, n.createElement(v.Z, { showEarnedRevenueSinceLastPayout: !0, user: r }), n.createElement(Ur.Z, { emptyStateDescription: Br, fetchNext: t, slice: a, type: at.x.InitialSale })) : null;
                },
                Fr = { context: "MONETIZATION_SUPER_FOLLOWS_NEW_SUBSCRIPTIONS" },
                zr = (0, l.Z)(() => n.createElement(k.H, { errorConfig: Fr }, n.createElement(Hr, null)), { component: "super_follows_new_subscriptions" });
            var Mr = r(862828);
            const Wr = u().b5f9ec14,
                jr = Mr.Z,
                Gr = () => {
                    const { data: e, fetchNext: t } = (0, Re.C)(jr, { limit: 25 }),
                        r = e.viewer.user_results.result;
                    if ("User" !== r.__typename) return null;
                    const a = r.superfollows_renewals_slice;
                    return a ? n.createElement(n.Fragment, null, n.createElement(v.Z, { showEarnedRevenueSinceLastPayout: !0, user: r }), n.createElement(Ur.Z, { emptyStateDescription: Wr, fetchNext: t, slice: a, type: at.x.Renewal })) : null;
                },
                Jr = { context: "MONETIZATION_SUPER_FOLLOWS_NEW_SUBSCRIPTIONS" },
                qr = (0, l.Z)(() => n.createElement(k.H, { errorConfig: Jr }, n.createElement(Gr, null)), { component: "super_follows_renewals" }),
                Yr = u().bf364d62,
                Kr = u().d978f43e,
                Qr = u().h7a41c02,
                Xr = _.Vt.transactions.newSubscriptions,
                ea = _.Vt.transactions.renewals,
                ta = (0, l.Z)(
                    () => {
                        const e = (0, s.useLocation)(),
                            t = n.useMemo(
                                () => [
                                    { key: "newSubscriptions", label: Kr, to: { pathname: Xr }, isActive: () => e.pathname === Xr },
                                    { key: "renewals", label: Qr, to: { pathname: ea }, isActive: () => e.pathname === ea },
                                ],
                                [e.pathname],
                            );
                        return n.createElement(m.Z, null, n.createElement(d.Z, { location: e, screenType: "secondaryDetail", title: Yr }, n.createElement(p.Z, { links: t }), n.createElement(s.Switch, null, n.createElement(s.Route, { exact: !0, path: Xr }, n.createElement(zr, null)), n.createElement(s.Route, { exact: !0, path: ea }, n.createElement(qr, null)), n.createElement(s.Route, null, n.createElement(o.Z, { to: Xr })))));
                    },
                    { component: "super_follows_transactions" },
                ),
                ra = (e) => n.createElement(c.Z, (0, a.Z)({}, e, { component: xe, featureSwitchName: "creator_monetization_web_tips_dashboard_enabled" })),
                aa = (e) => n.createElement(c.Z, (0, a.Z)({}, e, { component: Ie, featureSwitchName: "creator_monetization_web_tips_dashboard_enabled" })),
                na = n.memo((0, l.Z)(() => n.createElement(s.Switch, null, n.createElement(s.Route, { exact: !0, path: _.vl }, n.createElement(Ge, null, n.createElement(Me, null))), n.createElement(s.Route, { exact: !0, path: _.BJ }, n.createElement(Ge, null, n.createElement(tt, null))), n.createElement(s.Route, { path: _.Vt.dashboard.root }, n.createElement(Ge, null, n.createElement(Rt, null))), n.createElement(s.Route, { component: ra, path: _.OB.dashboard.root }), n.createElement(s.Route, { component: aa, path: _.OB.transactions.root }), n.createElement(s.Route, { path: _.Vt.perks.root }, n.createElement(Er, null)), n.createElement(s.Route, { exact: !0, path: _.Vt.transactions.newSubscriptionDetails }, n.createElement(Vr, { transactionType: "InitialSale" })), n.createElement(s.Route, { exact: !0, path: _.Vt.transactions.renewalDetails }, n.createElement(Vr, { transactionType: "Renewal" })), n.createElement(s.Route, { path: _.Vt.transactions.root }, n.createElement(ta, null)), n.createElement(s.Route, null, n.createElement(o.Z, { to: _.vl }))), { page: "settings", section: "monetization_earnings" }));
        },
        518180: (e, t, r) => {
            r.d(t, { BJ: () => l, Jz: () => n, OB: () => o, Vt: () => c, vl: () => s });
            var a = r(189244);
            const n = "/settings/monetization",
                s = `${n}/earnings`,
                l = `${n}/payout_history`,
                c = { dashboard: { root: `${n}/subscriptions/dashboard`, revenue: `${n}/subscriptions/dashboard/revenue`, manage: `${n}/subscriptions/dashboard/manage` }, perks: { root: `${n}/subscriptions/perks`, intro: `${n}/subscriptions/perks/intro`, description: `${n}/subscriptions/perks/description`, pricing: `${n}/subscriptions/perks/pricing`, confirm: `${n}/subscriptions/perks/confirm` }, transactions: { root: `${n}/subscriptions/transactions`, newSubscriptions: `${n}/subscriptions/transactions/new_subscriptions`, newSubscriptionDetails: `${n}/subscriptions/transactions/new_subscriptions/${a.Hr}`, renewals: `${n}/subscriptions/transactions/renewals`, renewalDetails: `${n}/subscriptions/transactions/renewals/${a.Hr}` } },
                o = { dashboard: { root: `${n}/awards/dashboard`, revenue: `${n}/awards/dashboard/revenue`, manage: `${n}/awards/dashboard/manage` }, transactions: { root: `${n}/awards/transactions` } };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsMonetization-e019dbda.b8953fea.js.map
