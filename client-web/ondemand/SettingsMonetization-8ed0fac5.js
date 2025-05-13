"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsMonetization-8ed0fac5"],
    {
        566220: (e, t, a) => {
            a.d(t, { R: () => l });
            var r = a(202784);
            const n = () => new Date(),
                s = r.createContext(n),
                l = () => r.useContext(s);
        },
        317897: (e, t, a) => {
            a.r(t), a.d(t, { default: () => nr });
            var r = a(807896),
                n = a(202784),
                s = a(107267),
                l = a(725516),
                c = a(300497),
                o = a(615027),
                i = a(674132),
                u = a.n(i),
                m = a(507651),
                p = a(652904),
                E = a(264922),
                _ = a(518180),
                d = a(717626),
                Z = a(325686),
                h = (a(585488), a(844685)),
                b = a(731708),
                f = a(154003),
                g = a(392237),
                w = a(309043),
                y = a(831984),
                v = a(875586),
                x = a(468869),
                S = a(188356),
                T = a(199213),
                k = a(736063),
                R = a(535338);
            const O = u().bc43a32e,
                N = u().i4c3b046,
                P = u().ca516a66,
                C = d.Z,
                I = ({ slice: e }) => {
                    const { recentItems: t } = (0, x.h9)(e);
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(h.Z, { text: O }),
                        t.length > 0
                            ? n.createElement(
                                  Z.Z,
                                  { role: "list" },
                                  t.map((e) => n.createElement(y.Z, { item: e, key: e.transaction_id })),
                              )
                            : n.createElement(b.ZP, { color: "gray700", style: V.emptyState }, N),
                        n.createElement(f.ZP, { link: _.OB.transactions.root, style: V.button }, P),
                    );
                },
                A = () => {
                    const e = (0, R.p)(C, { recent_awards_limit: 3 }).viewer.user_results.result,
                        { awards_granted_slice: t } = e;
                    return n.createElement(n.Fragment, null, n.createElement(v.Z, { revenueType: S.AU.awards_revenue, showEarnedRevenueSinceLastPayout: !0, user: e }), n.createElement(w.Z, { user: e }), n.createElement(T.Z, { revenueType: S.AU.awards_revenue, showHelperText: !0, showProgress: !0, stripeStatus: e.stripe_account_status, user: e }), t && n.createElement(I, { slice: t }));
                },
                L = { context: "MONETIZATION_AWARDS_REVENUE" },
                V = g.default.create((e) => ({ button: { marginTop: e.spaces.space16, marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space16 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } })),
                U = (0, l.Z)(() => n.createElement(k.H, { errorConfig: L }, n.createElement(A, null)), { component: "awards_revenue" });
            var B = a(470206),
                D = (a(136728), a(688715)),
                H = a(420412),
                F = a(190286),
                z = a(782642),
                M = a(977126),
                W = a(428606),
                j = a(97141),
                G = a(614983),
                J = a.n(G),
                $ = a(277660),
                Y = a.n($),
                q = a(351743),
                K = a.n(q);
            const Q = j.Z,
                X = W.Z,
                ee = (e) => {
                    const t = Y()(Q, e),
                        [a, r] = K()(X);
                    return [
                        n.useCallback(
                            () =>
                                new Promise((e, r) => {
                                    a({
                                        variables: {},
                                        onCompleted: (t, a) => e(),
                                        onError: r,
                                        updater: (e, a) => {
                                            const r = t.__id;
                                            J()(r, "userId must be specified");
                                            const n = e.get(r);
                                            J()(n, "userRecord must be specified"), n.invalidateRecord();
                                        },
                                    });
                                }),
                            [a, t.__id],
                        ),
                        r,
                    ];
                },
                te = u().f3ce76c0,
                ae = u().i8982e7e,
                re = u().fbbfe8aa,
                ne = u().e4f29140,
                se = u().f66d24be,
                le = u().g5925628,
                ce = u().e58e85d2,
                oe = u().be8e87b4,
                ie = u().cfd2f35e,
                ue = u().bee26fa8,
                me = u().f0145c9a,
                pe = u().ef4602ec,
                Ee = { helpCenter: (0, D.ju)("https://help.x.com/using-twitter/coins"), contactUs: (0, D.ju)("https://help.x.com/forms/paid-features/general") },
                _e = g.default.create((e) => ({ other: { gap: e.spaces.space24, marginTop: e.spaces.space12 }, buttons: { flexDirection: "row", flexWrap: "wrap", gap: e.spaces.space8 }, button: { flexBasis: `${e.breakpoints.micro}px`, flexGrow: 1, flexShrink: 1 } })),
                de = (0, l.Z)(
                    ({ backLocation: e, user: t }) => {
                        const a = (0, s.useHistory)(),
                            r = (0, z.p)(),
                            [l, c] = ee(t),
                            [o, i] = n.useState(!1),
                            u = n.useCallback(() => {
                                i(!0);
                            }, []),
                            m = n.useCallback(() => {
                                l()
                                    .then(() => {
                                        i(!1), r({ text: me }), a.push(e);
                                    })
                                    .catch(() => {
                                        r({ text: pe });
                                    });
                            }, [r, l, a, e]),
                            p = n.useCallback(() => {
                                i(!1);
                            }, []);
                        return n.createElement(n.Fragment, null, n.createElement(M.Z, { childrenStyle: _e.other, headline: te, illustration: M.j.LifeSaver }, n.createElement(b.ZP, { color: "gray700" }, ae), n.createElement(Z.Z, { style: _e.buttons }, n.createElement(f.ZP, { link: Ee.helpCenter, style: _e.button, type: "primaryOutlined" }, se), n.createElement(f.ZP, { link: Ee.contactUs, style: _e.button, type: "primaryOutlined" }, le))), n.createElement(H.Z, null), n.createElement(M.Z, { childrenStyle: _e.other, headline: re, illustration: M.j.Cone }, n.createElement(b.ZP, { color: "gray700" }, ne), n.createElement(Z.Z, { style: _e.buttons }, n.createElement(f.ZP, { disabled: c, onPress: u, style: _e.button, type: "destructiveOutlined" }, ce), o && n.createElement(F.Z, { cancelButtonLabel: ie, confirmButtonLabel: ue, confirmButtonType: "destructiveFilled", headline: oe, onCancel: p, onConfirm: m, text: ne }))));
                    },
                    { component: "awards_management_summary" },
                ),
                Ze = B.Z,
                he = () => {
                    const e = (0, R.p)(Ze, {}).viewer.user_results.result;
                    return "User" === e.__typename && e.award_eligible ? n.createElement(de, { backLocation: _.Jz, user: e }) : null;
                },
                be = { context: "MONETIZATION_AWARDS_SETTINGS" },
                fe = (0, l.Z)(() => n.createElement(k.H, { errorConfig: be }, n.createElement(he, null)), { component: "awards_settings" }),
                ge = u().j087774e,
                we = _.OB.dashboard.revenue,
                ye = _.OB.dashboard.manage,
                ve = u().ja73ebac,
                xe = u().h16eeb42,
                Se = (0, l.Z)(
                    () => {
                        const e = (0, s.useLocation)(),
                            t = [
                                { key: "revenue", label: ve, to: { pathname: we }, isActive: () => e.pathname === we },
                                { key: "manage", label: xe, to: { pathname: ye }, isActive: () => e.pathname === ye },
                            ];
                        return n.createElement(p.Z, null, n.createElement(E.Z, { location: e, screenType: "secondaryDetail", title: ge }, n.createElement(m.Z, { links: t }), n.createElement(s.Switch, null, n.createElement(s.Route, { exact: !0, path: we }, n.createElement(U, null)), n.createElement(s.Route, { exact: !0, path: ye }, n.createElement(fe, null)), n.createElement(s.Route, null, n.createElement(o.Z, { to: we })))));
                    },
                    { component: "awards_dashboard" },
                );
            var Te = a(967670),
                ke = a(315984),
                Re = a(127218);
            const Oe = u().a22f6808,
                Ne = Te.Z,
                Pe = () => {
                    const e = (0, s.useLocation)(),
                        { data: t, fetchNext: a } = (0, Re.C)(Ne, { limit: 25 }),
                        r = t.viewer.user_results.result;
                    if ("User" !== r.__typename) return null;
                    const l = r.awards_granted_slice;
                    return l ? n.createElement(p.Z, null, n.createElement(E.Z, { location: e, screenType: "secondaryDetail", title: Oe }, n.createElement(v.Z, { revenueType: S.AU.awards_revenue, showEarnedRevenueSinceLastPayout: !0, user: r }), n.createElement(ke.Z, { fetchNext: a, slice: l }))) : null;
                },
                Ce = { context: "MONETIZATION_AWARDS_TRANSACTIONS" },
                Ie = (0, l.Z)(() => n.createElement(k.H, { errorConfig: Ce }, n.createElement(Pe, null)), { component: "awards_transactions" });
            var Ae = a(676812),
                Le = a(462770),
                Ve = a(469149),
                Ue = a(443781);
            const Be = u().ff9ed474,
                De = u().d59dbf8a,
                He = u().c76972f0,
                Fe = Ae.Z,
                ze = () => {
                    const e = (0, s.useLocation)(),
                        { featureSwitches: t } = n.useContext(Ue.rC),
                        a = t.isTrue("creator_monetization_web_tips_dashboard_enabled"),
                        { viewer: r } = (0, R.p)(Fe, { awardsEnabled: a }),
                        l = !!r.is_active_creator,
                        c = r.user_results.result;
                    return n.createElement(p.Z, null, n.createElement(E.Z, { location: e, screenType: "secondaryDetail", title: Be }, n.createElement(v.Z, { revenueType: S.AU.total_revenue, showEarnedRevenueSinceLastPayout: !0, user: c }), n.createElement(T.Z, { showHelperText: !0, stripeStatus: c.stripe_account_status, type: "payoutHistory", user: c }), n.createElement(h.Z, { subtext: He, text: De }), n.createElement(Ve.Z, { isActiveCreator: l, user: c }), n.createElement(Le.Z, { user: c })));
                },
                Me = { context: "MONETIZATION_EARNINGS" },
                We = (0, l.Z)(() => n.createElement(k.H, { errorConfig: Me }, n.createElement(ze, null)), { component: "earnings" });
            var je = a(668214),
                Ge = a(390387);
            const Je = (0, je.Z)().propsFromState(() => ({ isActiveCreator: Ge.WM }))((e) => (!!e.isActiveCreator ? e.children : null));
            var $e = a(175270),
                Ye = a(933317);
            const qe = u().ee0510c2,
                Ke = u().g652fc4c,
                Qe = $e.Z,
                Xe = () => {
                    const e = (0, s.useLocation)(),
                        { data: t, fetchNext: a } = (0, Re.C)(Qe, { limit: 25 }),
                        r = t.viewer.user_results.result;
                    if ("User" !== r.__typename) return null;
                    const l = r.creator_payouts_slice;
                    return l ? n.createElement(p.Z, null, n.createElement(E.Z, { location: e, screenType: "secondaryDetail", title: qe }, n.createElement(v.Z, { revenueType: S.AU.total_revenue, user: r }), n.createElement(Ye.Z, { emptyStateDescription: Ke, fetchNext: a, slice: l }))) : null;
                },
                et = { context: "MONETIZATION_PAYOUT_HISTORY" },
                tt = (0, l.Z)(() => n.createElement(k.H, { errorConfig: et }, n.createElement(Xe, null)), { component: "payout_history" });
            var at = a(181089),
                rt = a(656166),
                nt = a(822441),
                st = a(952793);
            const lt = u().d978f43e,
                ct = u().d113fc10,
                ot = u().h7a41c02,
                it = u().eedf2eaa,
                ut = u().d93308d8,
                mt = at.Z,
                pt = ({ emptyStateDescription: e, heading: t, slice: a, type: r }) => {
                    const { recentItems: s } = (0, x._5)(a),
                        l = ((e) => n.useCallback((t) => n.createElement(nt.Z, { item: t, key: t.__id, type: e }), [e]))(r);
                    return n.createElement(n.Fragment, null, n.createElement(h.Z, { text: t }), s.length > 0 ? n.createElement(Z.Z, { role: "list" }, s.map(l)) : n.createElement(b.ZP, { color: "gray700", style: Zt.emptyState }, e));
                },
                Et = () => {
                    const e = (0, R.p)(mt, { new_subscribers_limit: 3, renewals_limit: 3 }).viewer.user_results.result,
                        { superfollows_new_subscribers_slice: t, superfollows_renewals_slice: a } = e,
                        r = (0, st.hC)("creator_monetization_web_tips_dashboard_enabled") && e.award_eligible;
                    return n.createElement(n.Fragment, null, n.createElement(v.Z, { showEarnedRevenueSinceLastPayout: !0, user: e }), n.createElement(T.Z, { showHelperText: !0, showProgress: !0, stripeStatus: e.stripe_account_status, type: r ? void 0 : "payoutHistory", user: e }), t && n.createElement(n.Fragment, null, n.createElement(pt, { emptyStateDescription: ct, heading: lt, slice: t, type: rt.x.InitialSale }), n.createElement(f.ZP, { link: _.Vt.transactions.newSubscriptions, style: Zt.button }, ut)), a && n.createElement(n.Fragment, null, n.createElement(pt, { emptyStateDescription: it, heading: ot, slice: a, type: rt.x.Renewal }), n.createElement(f.ZP, { link: _.Vt.transactions.renewals, style: Zt.button }, ut)));
                },
                _t = { context: "MONETIZATION_SUPER_FOLLOWS_REVENUE" },
                dt = (0, l.Z)(() => n.createElement(k.H, { errorConfig: _t }, n.createElement(Et, null)), { component: "super_follows_revenue" }),
                Zt = g.default.create((e) => ({ button: { marginTop: e.spaces.space16, marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space16 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } }));
            var ht = a(747208),
                bt = a(893903);
            const ft = ht.Z,
                gt = () => {
                    const { subscriptions_price_offerings: e, super_follows_price_offerings: t, viewer: a } = (0, R.p)(ft, {}),
                        r = a.user_results.result;
                    return "User" !== r.__typename ? null : n.createElement(bt.Z, { backLocation: _.Jz, perksConfirmLocation: _.Vt.perks.confirm, perksDescriptionLocation: _.Vt.perks.description, perksIntroLocation: _.Vt.perks.intro, perksPricingLocation: _.Vt.perks.pricing, priceOfferings: t, subscriptionsPriceOfferings: e, user: r, viewer: a });
                },
                wt = { context: "MONETIZATION_SUPER_FOLLOWS_SETTINGS" },
                yt = (0, l.Z)(() => n.createElement(k.H, { errorConfig: wt }, n.createElement(gt, null)), { component: "super_follows_settings" }),
                vt = u().d7b51c68,
                xt = u().ja73ebac,
                St = u().h16eeb42,
                Tt = _.Vt.dashboard.revenue,
                kt = _.Vt.dashboard.manage,
                Rt = (0, l.Z)(
                    () => {
                        const e = (0, s.useLocation)(),
                            t = [
                                { key: "revenue", label: xt, to: { pathname: Tt }, isActive: () => e.pathname === Tt },
                                { key: "manage", label: St, to: { pathname: kt }, isActive: () => e.pathname === kt },
                            ];
                        return n.createElement(p.Z, null, n.createElement(E.Z, { location: e, screenType: "secondaryDetail", title: vt }, n.createElement(m.Z, { links: t }), n.createElement(s.Switch, null, n.createElement(s.Route, { exact: !0, path: Tt }, n.createElement(dt, null)), n.createElement(s.Route, { path: kt }, n.createElement(yt, null)), n.createElement(s.Route, null, n.createElement(o.Z, { to: Tt })))));
                    },
                    { component: "super_follows_dashboard" },
                );
            var Ot = a(19533),
                Nt = a(320848),
                Pt = a(62151),
                Ct = a(949985),
                It = a(50998),
                At = a(642097),
                Lt = a(43512),
                Vt = a(220693),
                Ut = a(102614),
                Bt = a(371758),
                Dt = a(399384),
                Ht = a(466818),
                Ft = a(513120),
                zt = a(357770),
                Mt = a(541659),
                Wt = a(973316),
                jt = a(467874),
                Gt = a(870242),
                Jt = a(376755);
            const $t = Gt.Z,
                Yt = jt.Z,
                qt = (e, { price: t }) => {
                    const a = Y()($t, e),
                        r = (0, Jt.Ex)(a),
                        s = t || r || "",
                        [l, c] = K()(Yt);
                    return [
                        n.useCallback(
                            () =>
                                new Promise((t, a) => {
                                    l({
                                        variables: { new_price: s },
                                        onCompleted: (e, a) => t(),
                                        onError: a,
                                        updater: (t) => {
                                            const a = t.get(e.__id);
                                            a && a.setLinkedRecord(t.create(`client:${e.__id}:super_follow_pending_price_change`, "SuperFollowPendingPriceChange").setValue(s, "new_price"), "super_follow_pending_price_change");
                                        },
                                    });
                                }),
                            [s, l, e],
                        ),
                        c,
                    ];
                };
            var Kt = a(274257),
                Qt = a(176544);
            const Xt = u().hadd463a,
                ea = u().fce14f56,
                ta = u().b0c58272,
                aa = n.createElement(u().I18NFormatMessage, { $i18n: "ede65a59" }, n.createElement(b.ZP, { link: Qt._t }, u().edc014fb)),
                ra = u().d5737f0e,
                na = Dt.Z,
                sa = Bt.Z,
                la = Ut.Z,
                ca = g.default.create((e) => ({ interstitial: { marginTop: e.spaces.space32 }, prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 }, bottomBar: { gap: e.spaces.space24, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 }, input: { borderRadius: e.borderRadii.small, marginBottom: e.spaces.space20, paddingStart: 0, paddingEnd: 0 }, subtext: { marginTop: e.spaces.space8 }, selector: { marginTop: e.spaces.space12 } })),
                oa = (0, l.Z)(
                    ({ backLocation: e, subscriptionsPriceOfferings: t, user: a, viewer: r }) => {
                        const s = Y()(na, a),
                            l = Y()(sa, r),
                            c = Y()(la, t).offers.map((e) => ({ label: e.price, value: e.key })),
                            o = (0, Jt.Ex)(s),
                            i = (0, Kt.qO)(l),
                            u = i && i !== o,
                            m = (0, Kt.NP)(l, "selected_price"),
                            [p, E] = qt(s, { price: i || "" }),
                            _ = n.useMemo(() => n.createElement(Ft.Z, { style: ca.bottomBar }, n.createElement(Wt.Z, { disabled: !u || E, label: "Save", onPress: p, path: e, size: "xLarge", type: "primaryFilled" })), [u, E, p, e]);
                        return n.createElement(
                            Mt.Z,
                            { bottomBar: _, withInfoButton: !0 },
                            n.createElement(Ft.Z, { style: ca.interstitial }, n.createElement(zt.Z, { headline: Xt })),
                            n.createElement(
                                Ft.Z,
                                { style: ca.prices },
                                n.createElement(b.ZP, { "aria-level": 4, role: "heading", size: "title4", weight: "heavy" }, ea),
                                n.createElement(b.ZP, { color: "gray700", style: ca.subtext }, ta),
                                n.createElement(b.ZP, { color: "gray700", style: ca.subtext }, aa),
                                n.createElement(Ht.ZP, {
                                    autofocus: !0,
                                    label: ra,
                                    onChange: (e) => {
                                        m(e);
                                    },
                                    options: c,
                                    style: ca.selector,
                                    value: i || o || "",
                                    withEmptyOption: !0,
                                }),
                            ),
                        );
                    },
                    { component: "management_perks_intro" },
                );
            var ia = a(945338);
            const ua = Ct.Z,
                ma = Pt.Z,
                pa = Nt.Z,
                Ea = ({ subscriptionsPriceOfferings: e, user: t, viewer: a }) => {
                    const r = Y()(ua, t),
                        l = Y()(ma, a),
                        c = Y()(pa, e),
                        o = (0, Jt.IU)(r),
                        i = (0, Jt.IH)(r),
                        u = (0, Jt.Ex)(r),
                        { discardChanges: m, shouldBlockNavigation: p } = (0, ia.Z)({ rootPath: _.Vt.dashboard.manage, user: r, viewer: l });
                    return (0, Kt.zG)(l, { creator_intro: o, description: i, selected_price: u }), n.createElement(n.Fragment, null, n.createElement(It.Z, { onNavigation: m, shouldBlockNavigation: p }), n.createElement(s.Switch, null, n.createElement(s.Route, { exact: !0, path: _.Vt.perks.intro }, n.createElement(Vt.Z, { backLocation: _.Vt.dashboard.manage, user: r, viewer: l })), n.createElement(s.Route, { exact: !0, path: _.Vt.perks.description }, n.createElement(Lt.Z, { backLocation: _.Vt.dashboard.manage, user: r, viewer: l })), n.createElement(s.Route, { exact: !0, path: _.Vt.perks.confirm }, n.createElement(At.Z, { user: r, viewer: l })), n.createElement(s.Route, { exact: !0, path: _.Vt.perks.pricing }, n.createElement(oa, { backLocation: _.Vt.dashboard.manage, subscriptionsPriceOfferings: c, user: r, viewer: l }))));
                },
                _a = Ot.Z,
                da = (0, l.Z)(
                    () => {
                        const e = (0, R.p)(_a, {}),
                            t = e.viewer.user_results.result,
                            a = e.viewer,
                            r = e?.subscriptions_price_offerings;
                        return "User" !== t.__typename || null == r ? null : n.createElement(Ea, { subscriptionsPriceOfferings: r, user: t, viewer: a });
                    },
                    { component: "super_follows_perks" },
                );
            var Za = a(246489),
                ha = a(322121),
                ba = a(470199),
                fa = a(371445),
                ga = a(856522),
                wa = a(97882),
                ya = a(114084);
            const va = u().h810143c,
                xa = u().ga57b610,
                Sa = u().h3b68828,
                Ta = u().d7b51c68,
                ka = u().cc2aa67a,
                Ra = u().b313bb24,
                Oa = u().e5188502,
                Na = u().ba2e82a1,
                Pa = { [ba.x.PlayStore]: u().i8385a2c, [ba.x.AppStore]: u().h201c4c2, [ba.x.Stripe]: u().g33f3050, [ba.x.Web]: u().g33f3050 },
                Ca = Za.Z,
                Ia = ({ transactionType: e }) => {
                    const t = (0, s.useLocation)(),
                        { transactionId: a } = (0, s.useParams)(),
                        r = (0, R.p)(Ca, { rest_id: a ?? "0", subscription_event_type: e }).superfollows_subscription_by_rest_id,
                        l = r.consumer_results.result,
                        c = "User" === l.__typename,
                        o = r.payment_platform,
                        i = Na(new Date(r.created_at_msec)),
                        u = r.price_in_hundred,
                        m = u ? (0, wa.x)({ amount: u, formatter: 100 }) : n.createElement(ha.default, { testID: "icon-minus" }),
                        _ = n.useMemo(() => n.createElement(ga.Z, { user: l }), [l]);
                    return n.createElement(p.Z, null, n.createElement(E.Z, { location: t, screenType: "secondaryDetail", title: va }, c ? n.createElement(ya.Z, { avatarSize: "jumbo", decoration: _, user: l, withUsernameCenterAligned: !0 }) : null, n.createElement(Z.Z, { style: La.root }, n.createElement(fa.Z, { header: xa, text: i }), n.createElement(fa.Z, { header: Sa, text: Ta }), o && n.createElement(fa.Z, { header: ka, text: Pa[o] }), n.createElement(fa.Z, { header: Ra, text: m }), n.createElement(b.ZP, { color: "gray700", size: "subtext2", style: La.disclaimer }, Oa))));
                },
                Aa = { context: "MONETIZATION_SUPER_FOLLOWS_TRANSACTION_DETAILS" },
                La = g.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16 }, userProfile: { alignItems: "center" }, userAvatar: { height: "76px", width: "76px", marginBottom: e.spaces.space12 }, disclaimer: { marginTop: e.spaces.space4 } })),
                Va = (0, l.Z)((e) => n.createElement(k.H, { errorConfig: Aa }, n.createElement(Ia, e)), { component: "super_follows_transaction_details" });
            var Ua = a(240312),
                Ba = a(839681);
            const Da = u().ed3efef0,
                Ha = Ua.Z,
                Fa = () => {
                    const { data: e, fetchNext: t } = (0, Re.C)(Ha, { limit: 25 }),
                        a = e.viewer.user_results.result;
                    if ("User" !== a.__typename) return null;
                    const r = a.superfollows_new_subscribers_slice;
                    return r ? n.createElement(n.Fragment, null, n.createElement(v.Z, { showEarnedRevenueSinceLastPayout: !0, user: a }), n.createElement(Ba.Z, { emptyStateDescription: Da, fetchNext: t, slice: r, type: rt.x.InitialSale })) : null;
                },
                za = { context: "MONETIZATION_SUPER_FOLLOWS_NEW_SUBSCRIPTIONS" },
                Ma = (0, l.Z)(() => n.createElement(k.H, { errorConfig: za }, n.createElement(Fa, null)), { component: "super_follows_new_subscriptions" });
            var Wa = a(862828);
            const ja = u().b5f9ec14,
                Ga = Wa.Z,
                Ja = () => {
                    const { data: e, fetchNext: t } = (0, Re.C)(Ga, { limit: 25 }),
                        a = e.viewer.user_results.result;
                    if ("User" !== a.__typename) return null;
                    const r = a.superfollows_renewals_slice;
                    return r ? n.createElement(n.Fragment, null, n.createElement(v.Z, { showEarnedRevenueSinceLastPayout: !0, user: a }), n.createElement(Ba.Z, { emptyStateDescription: ja, fetchNext: t, slice: r, type: rt.x.Renewal })) : null;
                },
                $a = { context: "MONETIZATION_SUPER_FOLLOWS_NEW_SUBSCRIPTIONS" },
                Ya = (0, l.Z)(() => n.createElement(k.H, { errorConfig: $a }, n.createElement(Ja, null)), { component: "super_follows_renewals" }),
                qa = u().bf364d62,
                Ka = u().d978f43e,
                Qa = u().h7a41c02,
                Xa = _.Vt.transactions.newSubscriptions,
                er = _.Vt.transactions.renewals,
                tr = (0, l.Z)(
                    () => {
                        const e = (0, s.useLocation)(),
                            t = n.useMemo(
                                () => [
                                    { key: "newSubscriptions", label: Ka, to: { pathname: Xa }, isActive: () => e.pathname === Xa },
                                    { key: "renewals", label: Qa, to: { pathname: er }, isActive: () => e.pathname === er },
                                ],
                                [e.pathname],
                            );
                        return n.createElement(p.Z, null, n.createElement(E.Z, { location: e, screenType: "secondaryDetail", title: qa }, n.createElement(m.Z, { links: t }), n.createElement(s.Switch, null, n.createElement(s.Route, { exact: !0, path: Xa }, n.createElement(Ma, null)), n.createElement(s.Route, { exact: !0, path: er }, n.createElement(Ya, null)), n.createElement(s.Route, null, n.createElement(o.Z, { to: Xa })))));
                    },
                    { component: "super_follows_transactions" },
                ),
                ar = (e) => n.createElement(c.Z, (0, r.Z)({}, e, { component: Se, featureSwitchName: "creator_monetization_web_tips_dashboard_enabled" })),
                rr = (e) => n.createElement(c.Z, (0, r.Z)({}, e, { component: Ie, featureSwitchName: "creator_monetization_web_tips_dashboard_enabled" })),
                nr = n.memo((0, l.Z)(() => n.createElement(s.Switch, null, n.createElement(s.Route, { exact: !0, path: _.vl }, n.createElement(Je, null, n.createElement(We, null))), n.createElement(s.Route, { exact: !0, path: _.BJ }, n.createElement(Je, null, n.createElement(tt, null))), n.createElement(s.Route, { path: _.Vt.dashboard.root }, n.createElement(Je, null, n.createElement(Rt, null))), n.createElement(s.Route, { component: ar, path: _.OB.dashboard.root }), n.createElement(s.Route, { component: rr, path: _.OB.transactions.root }), n.createElement(s.Route, { path: _.Vt.perks.root }, n.createElement(da, null)), n.createElement(s.Route, { exact: !0, path: _.Vt.transactions.newSubscriptionDetails }, n.createElement(Va, { transactionType: "InitialSale" })), n.createElement(s.Route, { exact: !0, path: _.Vt.transactions.renewalDetails }, n.createElement(Va, { transactionType: "Renewal" })), n.createElement(s.Route, { path: _.Vt.transactions.root }, n.createElement(tr, null)), n.createElement(s.Route, null, n.createElement(o.Z, { to: _.vl }))), { page: "settings", section: "monetization_earnings" }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsMonetization-8ed0fac5.638ef58a.js.map
