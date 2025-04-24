"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsMonetization-8ed0fac5"],
    {
        566220: (e, t, r) => {
            r.d(t, { R: () => c });
            var a = r(202784);
            const n = () => new Date(),
                s = a.createContext(n),
                c = () => a.useContext(s);
        },
        317897: (e, t, r) => {
            r.r(t), r.d(t, { default: () => na });
            var a = r(807896),
                n = r(202784),
                s = r(107267),
                c = r(725516),
                l = r(300497),
                o = r(615027),
                i = r(674132),
                u = r.n(i),
                m = r(507651),
                p = r(652904),
                E = r(264922),
                d = r(518180),
                _ = r(717626),
                b = r(325686),
                h = (r(585488), r(844685)),
                Z = r(731708),
                g = r(154003),
                w = r(392237),
                f = r(309043),
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
                C = _.Z,
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
                            : n.createElement(Z.ZP, { color: "gray700", style: V.emptyState }, N),
                        n.createElement(g.ZP, { link: d.OB.transactions.root, style: V.button }, P),
                    );
                },
                A = () => {
                    const e = (0, R.p)(C, { recent_awards_limit: 3 }).viewer.user_results.result,
                        { awards_granted_slice: t } = e;
                    return n.createElement(n.Fragment, null, n.createElement(v.Z, { revenueType: x.AU.awards_revenue, showEarnedRevenueSinceLastPayout: !0, user: e }), n.createElement(f.Z, { user: e }), n.createElement(T.Z, { revenueType: x.AU.awards_revenue, showHelperText: !0, showProgress: !0, stripeStatus: e.stripe_account_status, user: e }), t && n.createElement(I, { slice: t }));
                },
                L = { context: "MONETIZATION_AWARDS_REVENUE" },
                V = w.default.create((e) => ({ button: { marginTop: e.spaces.space16, marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space16 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } })),
                U = (0, c.Z)(() => n.createElement(k.H, { errorConfig: L }, n.createElement(A, null)), { component: "awards_revenue" });
            var B = r(470206),
                D = (r(136728), r(688715)),
                $ = r(420412),
                H = r(190286),
                F = r(782642),
                z = r(977126),
                M = r(428606),
                W = r(97141),
                j = r(614983),
                G = r.n(j),
                J = r(277660),
                Y = r.n(J),
                q = r(351743),
                K = r.n(q);
            const Q = W.Z,
                X = M.Z,
                ee = (e) => {
                    const t = Y()(Q, e),
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
                ce = u().g5925628,
                le = u().e58e85d2,
                oe = u().be8e87b4,
                ie = u().cfd2f35e,
                ue = u().bee26fa8,
                me = u().f0145c9a,
                pe = u().ef4602ec,
                Ee = { helpCenter: (0, D.ju)("https://help.x.com/using-twitter/coins"), contactUs: (0, D.ju)("https://help.x.com/forms/paid-features/general") },
                de = w.default.create((e) => ({ other: { gap: e.spaces.space24, marginTop: e.spaces.space12 }, buttons: { flexDirection: "row", flexWrap: "wrap", gap: e.spaces.space8 }, button: { flexBasis: `${e.breakpoints.micro}px`, flexGrow: 1, flexShrink: 1 } })),
                _e = (0, c.Z)(
                    ({ backLocation: e, user: t }) => {
                        const r = (0, s.useHistory)(),
                            a = (0, F.p)(),
                            [c, l] = ee(t),
                            [o, i] = n.useState(!1),
                            u = n.useCallback(() => {
                                i(!0);
                            }, []),
                            m = n.useCallback(() => {
                                c()
                                    .then(() => {
                                        i(!1), a({ text: me }), r.push(e);
                                    })
                                    .catch(() => {
                                        a({ text: pe });
                                    });
                            }, [a, c, r, e]),
                            p = n.useCallback(() => {
                                i(!1);
                            }, []);
                        return n.createElement(n.Fragment, null, n.createElement(z.Z, { childrenStyle: de.other, headline: te, illustration: z.j.LifeSaver }, n.createElement(Z.ZP, { color: "gray700" }, re), n.createElement(b.Z, { style: de.buttons }, n.createElement(g.ZP, { link: Ee.helpCenter, style: de.button, type: "primaryOutlined" }, se), n.createElement(g.ZP, { link: Ee.contactUs, style: de.button, type: "primaryOutlined" }, ce))), n.createElement($.Z, null), n.createElement(z.Z, { childrenStyle: de.other, headline: ae, illustration: z.j.Cone }, n.createElement(Z.ZP, { color: "gray700" }, ne), n.createElement(b.Z, { style: de.buttons }, n.createElement(g.ZP, { disabled: l, onPress: u, style: de.button, type: "destructiveOutlined" }, le), o && n.createElement(H.Z, { cancelButtonLabel: ie, confirmButtonLabel: ue, confirmButtonType: "destructiveFilled", headline: oe, onCancel: p, onConfirm: m, text: ne }))));
                    },
                    { component: "awards_management_summary" },
                ),
                be = B.Z,
                he = () => {
                    const e = (0, R.p)(be, {}).viewer.user_results.result;
                    return "User" === e.__typename && e.award_eligible ? n.createElement(_e, { backLocation: d.Jz, user: e }) : null;
                },
                Ze = { context: "MONETIZATION_AWARDS_SETTINGS" },
                ge = (0, c.Z)(() => n.createElement(k.H, { errorConfig: Ze }, n.createElement(he, null)), { component: "awards_settings" }),
                we = u().j087774e,
                fe = d.OB.dashboard.revenue,
                ye = d.OB.dashboard.manage,
                ve = u().ja73ebac,
                Se = u().h16eeb42,
                xe = (0, c.Z)(
                    () => {
                        const e = (0, s.useLocation)(),
                            t = [
                                { key: "revenue", label: ve, to: { pathname: fe }, isActive: () => e.pathname === fe },
                                { key: "manage", label: Se, to: { pathname: ye }, isActive: () => e.pathname === ye },
                            ];
                        return n.createElement(p.Z, null, n.createElement(E.Z, { location: e, screenType: "secondaryDetail", title: we }, n.createElement(m.Z, { links: t }), n.createElement(s.Switch, null, n.createElement(s.Route, { exact: !0, path: fe }, n.createElement(U, null)), n.createElement(s.Route, { exact: !0, path: ye }, n.createElement(ge, null)), n.createElement(s.Route, null, n.createElement(o.Z, { to: fe })))));
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
                    const c = a.awards_granted_slice;
                    return c ? n.createElement(p.Z, null, n.createElement(E.Z, { location: e, screenType: "secondaryDetail", title: Oe }, n.createElement(v.Z, { revenueType: x.AU.awards_revenue, showEarnedRevenueSinceLastPayout: !0, user: a }), n.createElement(ke.Z, { fetchNext: r, slice: c }))) : null;
                },
                Ce = { context: "MONETIZATION_AWARDS_TRANSACTIONS" },
                Ie = (0, c.Z)(() => n.createElement(k.H, { errorConfig: Ce }, n.createElement(Pe, null)), { component: "awards_transactions" });
            var Ae = r(676812),
                Le = r(860747),
                Ve = r(253518),
                Ue = r(443781);
            const Be = u().ff9ed474,
                De = u().d59dbf8a,
                $e = u().c76972f0,
                He = Ae.Z,
                Fe = () => {
                    const e = (0, s.useLocation)(),
                        { featureSwitches: t } = n.useContext(Ue.rC),
                        r = t.isTrue("creator_monetization_web_tips_dashboard_enabled"),
                        { viewer: a } = (0, R.p)(He, { awardsEnabled: r }),
                        c = !!a.is_active_creator,
                        l = a.user_results.result;
                    return n.createElement(p.Z, null, n.createElement(E.Z, { location: e, screenType: "secondaryDetail", title: Be }, n.createElement(v.Z, { revenueType: x.AU.total_revenue, showEarnedRevenueSinceLastPayout: !0, user: l }), n.createElement(T.Z, { showHelperText: !0, stripeStatus: l.stripe_account_status, type: "payoutHistory", user: l }), n.createElement(h.Z, { subtext: $e, text: De }), n.createElement(Ve.Z, { isActiveCreator: c, user: l }), n.createElement(Le.Z, { user: l })));
                },
                ze = { context: "MONETIZATION_EARNINGS" },
                Me = (0, c.Z)(() => n.createElement(k.H, { errorConfig: ze }, n.createElement(Fe, null)), { component: "earnings" });
            var We = r(668214),
                je = r(390387);
            const Ge = (0, We.Z)().propsFromState(() => ({ isActiveCreator: je.WM }))((e) => (!!e.isActiveCreator ? e.children : null));
            var Je = r(175270),
                Ye = r(933317);
            const qe = u().ee0510c2,
                Ke = u().g652fc4c,
                Qe = Je.Z,
                Xe = () => {
                    const e = (0, s.useLocation)(),
                        { data: t, fetchNext: r } = (0, Re.C)(Qe, { limit: 25 }),
                        a = t.viewer.user_results.result;
                    if ("User" !== a.__typename) return null;
                    const c = a.creator_payouts_slice;
                    return c ? n.createElement(p.Z, null, n.createElement(E.Z, { location: e, screenType: "secondaryDetail", title: qe }, n.createElement(v.Z, { revenueType: x.AU.total_revenue, user: a }), n.createElement(Ye.Z, { emptyStateDescription: Ke, fetchNext: r, slice: c }))) : null;
                },
                et = { context: "MONETIZATION_PAYOUT_HISTORY" },
                tt = (0, c.Z)(() => n.createElement(k.H, { errorConfig: et }, n.createElement(Xe, null)), { component: "payout_history" });
            var rt = r(181089),
                at = r(656166),
                nt = r(822441),
                st = r(952793);
            const ct = u().d978f43e,
                lt = u().d113fc10,
                ot = u().h7a41c02,
                it = u().eedf2eaa,
                ut = u().d93308d8,
                mt = rt.Z,
                pt = ({ emptyStateDescription: e, heading: t, slice: r, type: a }) => {
                    const { recentItems: s } = (0, S._5)(r),
                        c = ((e) => n.useCallback((t) => n.createElement(nt.Z, { item: t, key: t.__id, type: e }), [e]))(a);
                    return n.createElement(n.Fragment, null, n.createElement(h.Z, { text: t }), s.length > 0 ? n.createElement(b.Z, { role: "list" }, s.map(c)) : n.createElement(Z.ZP, { color: "gray700", style: bt.emptyState }, e));
                },
                Et = () => {
                    const e = (0, R.p)(mt, { new_subscribers_limit: 3, renewals_limit: 3 }).viewer.user_results.result,
                        { superfollows_new_subscribers_slice: t, superfollows_renewals_slice: r } = e,
                        a = (0, st.hC)("creator_monetization_web_tips_dashboard_enabled") && e.award_eligible;
                    return n.createElement(n.Fragment, null, n.createElement(v.Z, { showEarnedRevenueSinceLastPayout: !0, user: e }), n.createElement(T.Z, { showHelperText: !0, showProgress: !0, stripeStatus: e.stripe_account_status, type: a ? void 0 : "payoutHistory", user: e }), t && n.createElement(n.Fragment, null, n.createElement(pt, { emptyStateDescription: lt, heading: ct, slice: t, type: at.x.InitialSale }), n.createElement(g.ZP, { link: d.Vt.transactions.newSubscriptions, style: bt.button }, ut)), r && n.createElement(n.Fragment, null, n.createElement(pt, { emptyStateDescription: it, heading: ot, slice: r, type: at.x.Renewal }), n.createElement(g.ZP, { link: d.Vt.transactions.renewals, style: bt.button }, ut)));
                },
                dt = { context: "MONETIZATION_SUPER_FOLLOWS_REVENUE" },
                _t = (0, c.Z)(() => n.createElement(k.H, { errorConfig: dt }, n.createElement(Et, null)), { component: "super_follows_revenue" }),
                bt = w.default.create((e) => ({ button: { marginTop: e.spaces.space16, marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space16 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } }));
            var ht = r(747208),
                Zt = r(893903);
            const gt = ht.Z,
                wt = () => {
                    const { subscriptions_price_offerings: e, super_follows_price_offerings: t, viewer: r } = (0, R.p)(gt, {}),
                        a = r.user_results.result;
                    return "User" !== a.__typename ? null : n.createElement(Zt.Z, { backLocation: d.Jz, perksConfirmLocation: d.Vt.perks.confirm, perksDescriptionLocation: d.Vt.perks.description, perksIntroLocation: d.Vt.perks.intro, perksPricingLocation: d.Vt.perks.pricing, priceOfferings: t, subscriptionsPriceOfferings: e, user: a, viewer: r });
                },
                ft = { context: "MONETIZATION_SUPER_FOLLOWS_SETTINGS" },
                yt = (0, c.Z)(() => n.createElement(k.H, { errorConfig: ft }, n.createElement(wt, null)), { component: "super_follows_settings" }),
                vt = u().d7b51c68,
                St = u().ja73ebac,
                xt = u().h16eeb42,
                Tt = d.Vt.dashboard.revenue,
                kt = d.Vt.dashboard.manage,
                Rt = (0, c.Z)(
                    () => {
                        const e = (0, s.useLocation)(),
                            t = [
                                { key: "revenue", label: St, to: { pathname: Tt }, isActive: () => e.pathname === Tt },
                                { key: "manage", label: xt, to: { pathname: kt }, isActive: () => e.pathname === kt },
                            ];
                        return n.createElement(p.Z, null, n.createElement(E.Z, { location: e, screenType: "secondaryDetail", title: vt }, n.createElement(m.Z, { links: t }), n.createElement(s.Switch, null, n.createElement(s.Route, { exact: !0, path: Tt }, n.createElement(_t, null)), n.createElement(s.Route, { path: kt }, n.createElement(yt, null)), n.createElement(s.Route, null, n.createElement(o.Z, { to: Tt })))));
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
                Ut = r(102614),
                Bt = r(371758),
                Dt = r(399384),
                $t = r(466818),
                Ht = r(513120),
                Ft = r(357770),
                zt = r(541659),
                Mt = r(973316),
                Wt = r(467874),
                jt = r(870242),
                Gt = r(376755);
            const Jt = jt.Z,
                Yt = Wt.Z,
                qt = (e, { price: t }) => {
                    const r = Y()(Jt, e),
                        a = (0, Gt.Ex)(r),
                        s = t || a || "",
                        [c, l] = K()(Yt);
                    return [
                        n.useCallback(
                            () =>
                                new Promise((t, r) => {
                                    c({
                                        variables: { new_price: s },
                                        onCompleted: (e, r) => t(),
                                        onError: r,
                                        updater: (t) => {
                                            const r = t.get(e.__id);
                                            r && r.setLinkedRecord(t.create(`client:${e.__id}:super_follow_pending_price_change`, "SuperFollowPendingPriceChange").setValue(s, "new_price"), "super_follow_pending_price_change");
                                        },
                                    });
                                }),
                            [s, c, e],
                        ),
                        l,
                    ];
                };
            var Kt = r(274257),
                Qt = r(176544);
            const Xt = u().hadd463a,
                er = u().fce14f56,
                tr = u().b0c58272,
                rr = n.createElement(u().I18NFormatMessage, { $i18n: "ede65a59" }, n.createElement(Z.ZP, { link: Qt._t }, u().edc014fb)),
                ar = u().d5737f0e,
                nr = Dt.Z,
                sr = Bt.Z,
                cr = Ut.Z,
                lr = w.default.create((e) => ({ interstitial: { marginTop: e.spaces.space32 }, prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 }, bottomBar: { gap: e.spaces.space24, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 }, input: { borderRadius: e.borderRadii.small, marginBottom: e.spaces.space20, paddingStart: 0, paddingEnd: 0 }, subtext: { marginTop: e.spaces.space8 }, selector: { marginTop: e.spaces.space12 } })),
                or = (0, c.Z)(
                    ({ backLocation: e, subscriptionsPriceOfferings: t, user: r, viewer: a }) => {
                        const s = Y()(nr, r),
                            c = Y()(sr, a),
                            l = Y()(cr, t).offers.map((e) => ({ label: e.price, value: e.key })),
                            o = (0, Gt.Ex)(s),
                            i = (0, Kt.qO)(c),
                            u = i && i !== o,
                            m = (0, Kt.NP)(c, "selected_price"),
                            [p, E] = qt(s, { price: i || "" }),
                            d = n.useMemo(() => n.createElement(Ht.Z, { style: lr.bottomBar }, n.createElement(Mt.Z, { disabled: !u || E, label: "Save", onPress: p, path: e, size: "xLarge", type: "primaryFilled" })), [u, E, p, e]);
                        return n.createElement(
                            zt.Z,
                            { bottomBar: d, withInfoButton: !0 },
                            n.createElement(Ht.Z, { style: lr.interstitial }, n.createElement(Ft.Z, { headline: Xt })),
                            n.createElement(
                                Ht.Z,
                                { style: lr.prices },
                                n.createElement(Z.ZP, { "aria-level": 4, role: "heading", size: "title4", weight: "heavy" }, er),
                                n.createElement(Z.ZP, { color: "gray700", style: lr.subtext }, tr),
                                n.createElement(Z.ZP, { color: "gray700", style: lr.subtext }, rr),
                                n.createElement($t.ZP, {
                                    autofocus: !0,
                                    label: ar,
                                    onChange: (e) => {
                                        m(e);
                                    },
                                    options: l,
                                    style: lr.selector,
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
                mr = Pt.Z,
                pr = Nt.Z,
                Er = ({ subscriptionsPriceOfferings: e, user: t, viewer: r }) => {
                    const a = Y()(ur, t),
                        c = Y()(mr, r),
                        l = Y()(pr, e),
                        o = (0, Gt.IU)(a),
                        i = (0, Gt.IH)(a),
                        u = (0, Gt.Ex)(a),
                        { discardChanges: m, shouldBlockNavigation: p } = (0, ir.Z)({ rootPath: d.Vt.dashboard.manage, user: a, viewer: c });
                    return (0, Kt.zG)(c, { creator_intro: o, description: i, selected_price: u }), n.createElement(n.Fragment, null, n.createElement(It.Z, { onNavigation: m, shouldBlockNavigation: p }), n.createElement(s.Switch, null, n.createElement(s.Route, { exact: !0, path: d.Vt.perks.intro }, n.createElement(Vt.Z, { backLocation: d.Vt.dashboard.manage, user: a, viewer: c })), n.createElement(s.Route, { exact: !0, path: d.Vt.perks.description }, n.createElement(Lt.Z, { backLocation: d.Vt.dashboard.manage, user: a, viewer: c })), n.createElement(s.Route, { exact: !0, path: d.Vt.perks.confirm }, n.createElement(At.Z, { user: a, viewer: c })), n.createElement(s.Route, { exact: !0, path: d.Vt.perks.pricing }, n.createElement(or, { backLocation: d.Vt.dashboard.manage, subscriptionsPriceOfferings: l, user: a, viewer: c }))));
                },
                dr = Ot.Z,
                _r = (0, c.Z)(
                    () => {
                        const e = (0, R.p)(dr, {}),
                            t = e.viewer.user_results.result,
                            r = e.viewer,
                            a = e?.subscriptions_price_offerings;
                        return "User" !== t.__typename || null == a ? null : n.createElement(Er, { subscriptionsPriceOfferings: a, user: t, viewer: r });
                    },
                    { component: "super_follows_perks" },
                );
            var br = r(246489),
                hr = r(322121),
                Zr = r(470199),
                gr = r(371445),
                wr = r(856522),
                fr = r(97882),
                yr = r(114084);
            const vr = u().h810143c,
                Sr = u().ga57b610,
                xr = u().h3b68828,
                Tr = u().d7b51c68,
                kr = u().cc2aa67a,
                Rr = u().b313bb24,
                Or = u().e5188502,
                Nr = u().ba2e82a1,
                Pr = { [Zr.x.PlayStore]: u().i8385a2c, [Zr.x.AppStore]: u().h201c4c2, [Zr.x.Stripe]: u().g33f3050, [Zr.x.Web]: u().g33f3050 },
                Cr = br.Z,
                Ir = ({ transactionType: e }) => {
                    const t = (0, s.useLocation)(),
                        { transactionId: r } = (0, s.useParams)(),
                        a = (0, R.p)(Cr, { rest_id: r ?? "0", subscription_event_type: e }).superfollows_subscription_by_rest_id,
                        c = a.consumer_results.result,
                        l = "User" === c.__typename,
                        o = a.payment_platform,
                        i = Nr(new Date(a.created_at_msec)),
                        u = a.price_in_hundred,
                        m = u ? (0, fr.x)({ amount: u, formatter: 100 }) : n.createElement(hr.default, { testID: "icon-minus" }),
                        d = n.useMemo(() => n.createElement(wr.Z, { user: c }), [c]);
                    return n.createElement(p.Z, null, n.createElement(E.Z, { location: t, screenType: "secondaryDetail", title: vr }, l ? n.createElement(yr.Z, { avatarSize: "jumbo", decoration: d, user: c, withUsernameCenterAligned: !0 }) : null, n.createElement(b.Z, { style: Lr.root }, n.createElement(gr.Z, { header: Sr, text: i }), n.createElement(gr.Z, { header: xr, text: Tr }), o && n.createElement(gr.Z, { header: kr, text: Pr[o] }), n.createElement(gr.Z, { header: Rr, text: m }), n.createElement(Z.ZP, { color: "gray700", size: "subtext2", style: Lr.disclaimer }, Or))));
                },
                Ar = { context: "MONETIZATION_SUPER_FOLLOWS_TRANSACTION_DETAILS" },
                Lr = w.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16 }, userProfile: { alignItems: "center" }, userAvatar: { height: "76px", width: "76px", marginBottom: e.spaces.space12 }, disclaimer: { marginTop: e.spaces.space4 } })),
                Vr = (0, c.Z)((e) => n.createElement(k.H, { errorConfig: Ar }, n.createElement(Ir, e)), { component: "super_follows_transaction_details" });
            var Ur = r(240312),
                Br = r(839681);
            const Dr = u().ed3efef0,
                $r = Ur.Z,
                Hr = () => {
                    const { data: e, fetchNext: t } = (0, Re.C)($r, { limit: 25 }),
                        r = e.viewer.user_results.result;
                    if ("User" !== r.__typename) return null;
                    const a = r.superfollows_new_subscribers_slice;
                    return a ? n.createElement(n.Fragment, null, n.createElement(v.Z, { showEarnedRevenueSinceLastPayout: !0, user: r }), n.createElement(Br.Z, { emptyStateDescription: Dr, fetchNext: t, slice: a, type: at.x.InitialSale })) : null;
                },
                Fr = { context: "MONETIZATION_SUPER_FOLLOWS_NEW_SUBSCRIPTIONS" },
                zr = (0, c.Z)(() => n.createElement(k.H, { errorConfig: Fr }, n.createElement(Hr, null)), { component: "super_follows_new_subscriptions" });
            var Mr = r(862828);
            const Wr = u().b5f9ec14,
                jr = Mr.Z,
                Gr = () => {
                    const { data: e, fetchNext: t } = (0, Re.C)(jr, { limit: 25 }),
                        r = e.viewer.user_results.result;
                    if ("User" !== r.__typename) return null;
                    const a = r.superfollows_renewals_slice;
                    return a ? n.createElement(n.Fragment, null, n.createElement(v.Z, { showEarnedRevenueSinceLastPayout: !0, user: r }), n.createElement(Br.Z, { emptyStateDescription: Wr, fetchNext: t, slice: a, type: at.x.Renewal })) : null;
                },
                Jr = { context: "MONETIZATION_SUPER_FOLLOWS_NEW_SUBSCRIPTIONS" },
                Yr = (0, c.Z)(() => n.createElement(k.H, { errorConfig: Jr }, n.createElement(Gr, null)), { component: "super_follows_renewals" }),
                qr = u().bf364d62,
                Kr = u().d978f43e,
                Qr = u().h7a41c02,
                Xr = d.Vt.transactions.newSubscriptions,
                ea = d.Vt.transactions.renewals,
                ta = (0, c.Z)(
                    () => {
                        const e = (0, s.useLocation)(),
                            t = n.useMemo(
                                () => [
                                    { key: "newSubscriptions", label: Kr, to: { pathname: Xr }, isActive: () => e.pathname === Xr },
                                    { key: "renewals", label: Qr, to: { pathname: ea }, isActive: () => e.pathname === ea },
                                ],
                                [e.pathname],
                            );
                        return n.createElement(p.Z, null, n.createElement(E.Z, { location: e, screenType: "secondaryDetail", title: qr }, n.createElement(m.Z, { links: t }), n.createElement(s.Switch, null, n.createElement(s.Route, { exact: !0, path: Xr }, n.createElement(zr, null)), n.createElement(s.Route, { exact: !0, path: ea }, n.createElement(Yr, null)), n.createElement(s.Route, null, n.createElement(o.Z, { to: Xr })))));
                    },
                    { component: "super_follows_transactions" },
                ),
                ra = (e) => n.createElement(l.Z, (0, a.Z)({}, e, { component: xe, featureSwitchName: "creator_monetization_web_tips_dashboard_enabled" })),
                aa = (e) => n.createElement(l.Z, (0, a.Z)({}, e, { component: Ie, featureSwitchName: "creator_monetization_web_tips_dashboard_enabled" })),
                na = n.memo((0, c.Z)(() => n.createElement(s.Switch, null, n.createElement(s.Route, { exact: !0, path: d.vl }, n.createElement(Ge, null, n.createElement(Me, null))), n.createElement(s.Route, { exact: !0, path: d.BJ }, n.createElement(Ge, null, n.createElement(tt, null))), n.createElement(s.Route, { path: d.Vt.dashboard.root }, n.createElement(Ge, null, n.createElement(Rt, null))), n.createElement(s.Route, { component: ra, path: d.OB.dashboard.root }), n.createElement(s.Route, { component: aa, path: d.OB.transactions.root }), n.createElement(s.Route, { path: d.Vt.perks.root }, n.createElement(_r, null)), n.createElement(s.Route, { exact: !0, path: d.Vt.transactions.newSubscriptionDetails }, n.createElement(Vr, { transactionType: "InitialSale" })), n.createElement(s.Route, { exact: !0, path: d.Vt.transactions.renewalDetails }, n.createElement(Vr, { transactionType: "Renewal" })), n.createElement(s.Route, { path: d.Vt.transactions.root }, n.createElement(ta, null)), n.createElement(s.Route, null, n.createElement(o.Z, { to: d.vl }))), { page: "settings", section: "monetization_earnings" }));
        },
        518180: (e, t, r) => {
            r.d(t, { BJ: () => c, Jz: () => n, OB: () => o, Vt: () => l, vl: () => s });
            var a = r(189244);
            const n = "/settings/monetization",
                s = `${n}/earnings`,
                c = `${n}/payout_history`,
                l = { dashboard: { root: `${n}/subscriptions/dashboard`, revenue: `${n}/subscriptions/dashboard/revenue`, manage: `${n}/subscriptions/dashboard/manage` }, perks: { root: `${n}/subscriptions/perks`, intro: `${n}/subscriptions/perks/intro`, description: `${n}/subscriptions/perks/description`, pricing: `${n}/subscriptions/perks/pricing`, confirm: `${n}/subscriptions/perks/confirm` }, transactions: { root: `${n}/subscriptions/transactions`, newSubscriptions: `${n}/subscriptions/transactions/new_subscriptions`, newSubscriptionDetails: `${n}/subscriptions/transactions/new_subscriptions/${a.Hr}`, renewals: `${n}/subscriptions/transactions/renewals`, renewalDetails: `${n}/subscriptions/transactions/renewals/${a.Hr}` } },
                o = { dashboard: { root: `${n}/awards/dashboard`, revenue: `${n}/awards/dashboard/revenue`, manage: `${n}/awards/dashboard/manage` }, transactions: { root: `${n}/awards/transactions` } };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsMonetization-8ed0fac5.a37d535a.js.map
