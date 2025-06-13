"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsSuperFollows-580483cf"],
    {
        823508: (e, t, a) => {
            a.d(t, { Z: () => gt });
            var r = a(415729),
                n = a(382098),
                i = a(43279),
                s = a(202784),
                l = (a(585488), a(277660)),
                c = a.n(l),
                o = a(107267),
                p = a(443781),
                m = a(615027),
                u = a(614983),
                d = a.n(u),
                g = a(53647),
                b = a.n(g),
                f = a(437429),
                Z = a.n(f),
                E = a(187669),
                h = a(674057);
            const _ = "super_follows_application_draft",
                y = (e, t) => (0, h.g)(e, t).getLinkedRecord(_);
            function w(e, t) {
                const a = Z()();
                (0, E.q)(() => {
                    d()(e, "viewerRef must be defined"),
                        b()(a, (a) => {
                            ((e, t, { content_category: a = [], content_category_other: r = null, content_creation_platform: n = [], content_creation_platform_other: i = null, purpose: s = null, selected_price: l, creator_intro: c, creator_description: o } = {}) => {
                                const p = (0, h.E)(t),
                                    m = (0, h.g)(e, t);
                                if (y(e, t)) return;
                                const u = e.create(`${p}:${_}`, "SuperFollowsApplicationDraft");
                                u.setValue(a, "content_category"), u.setValue(r, "content_category_other"), u.setValue(n, "content_creation_platform"), u.setValue(i, "content_creation_platform_other"), u.setValue(s, "purpose"), u.setValue(l, "selected_price"), u.setValue(c, "creator_intro"), u.setValue(o, "creator_description"), m.setLinkedRecord(u, _);
                            })(a, e, t);
                        });
                });
            }
            function v(e, t) {
                const a = Z()();
                return s.useCallback(
                    (r) => {
                        d()(e, "viewerRef must be defined"),
                            b()(a, (a) => {
                                ((e, t, a, r) => {
                                    const n = y(e, t);
                                    d()(n, "applicationDraft must be defined"), n.setValue(r, a);
                                })(a, e, t, r);
                            });
                    },
                    [a, t, e],
                );
            }
            var C = a(720816),
                x = a(392237),
                k = a(111677),
                P = a.n(k),
                B = a(724345),
                T = a(569778),
                R = a(725516),
                z = a(541659);
            const O = P().i84c5de8,
                N = P().b8922f7e,
                L = x.default.create((e) => ({ interstitial: { marginVertical: e.spaces.space32 } })),
                S = (0, R.Z)(() => s.createElement(z.Z, { leftControlShouldClose: !0, withInfoButton: !0 }, s.createElement(B.Z, { style: L.interstitial }, s.createElement(T.Z, { headline: O, illustration: T.j.TrafficBarricadeAlt, subtext: N }))), { component: "application_disabled" });
            var I = a(953134),
                F = a(727828),
                D = a(260094),
                W = a(228477),
                V = a(973316);
            const j = P().ad588be6,
                U = P().f6443bd2,
                H = P().a3a20a10,
                M = P().b8d29e4a,
                J = P().d92c1d0a,
                $ = I.Z,
                G = x.default.create((e) => ({ checks: { marginVertical: e.spaces.space32 }, bottomBar: { gap: e.spaces.space24, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } })),
                q = (0, R.Z)(
                    ({ user: e }) => {
                        const { featureSwitches: t } = s.useContext(p.rC),
                            a = t.isTrue("super_follow_web_debug_enabled"),
                            r = c()($, e).super_following_eligibility || [],
                            n = 0 === r.length || (1 === r.length && "id_verified" === r[0]) || a,
                            i = n ? j : H,
                            l = n ? U : M,
                            o = !r.includes("blue_subscription"),
                            m = !(r.includes("followers") || r.includes("tweets") || r.includes("age") || r.includes("impressions")),
                            u = C.wU.pricing,
                            d = s.createElement(B.Z, { style: G.bottomBar }, n && s.createElement(D.Z, null), o || a ? s.createElement(V.Z, { disabled: !m && !a, label: J, path: u, size: "xLarge", type: "primaryFilled" }) : s.createElement(F.Z, { variant: "CreatorSubsEligibility" }));
                        return s.createElement(z.Z, { bottomBar: d, withInfoButton: !0 }, s.createElement(B.Z, null, s.createElement(T.Z, { headline: i, illustration: void 0, subtext: l })), s.createElement(B.Z, { style: G.checks }, s.createElement(W.Z, { failedRequirements: r })));
                    },
                    { component: "application_eligibility" },
                );
            var A = a(807896),
                Q = a(325686),
                X = a(708852),
                K = a(731708),
                Y = a(73664),
                ee = a(698537),
                te = a(978807);
            const ae = P().d7b51c68,
                re = P().ef606fca,
                ne = P().e533715e,
                ie = x.default.create((e) => ({ subtitle: { marginTop: e.spaces.space16 }, image: { marginTop: e.spaces.space32 }, sectionPerks: { paddingBottom: e.spaces.space16 }, sectionButton: { paddingVertical: e.spaces.space16 }, perksList: { marginTop: e.spaces.space36 }, transitionOpacity: { transition: "opacity 0.2s 0s ease-in-out" }, opacityNone: { opacity: 0 }, header: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space32, paddingTop: e.spaces.space16 }, headerWide: { paddingHorizontal: e.spaces.space72 } })),
                se = (0, R.Z)(
                    (e) => {
                        const t = (0, X.D2)(),
                            a = s.useRef(),
                            r = (0, Y.R)(a, { threshold: 0.5 }),
                            n = { label: ne, path: C.wU.eligibility, type: "primaryFilled" },
                            i = s.createElement(V.Z, (0, A.Z)({}, n, { size: "xLarge" })),
                            l = s.createElement(V.Z, (0, A.Z)({}, n, { size: "small", style: [ie.transitionOpacity, r ? ie.opacityNone : void 0] })),
                            c = s.createElement(Q.Z, { style: [ie.header, t && ie.headerWide] }, s.createElement(K.ZP, { "aria-level": 1, role: "heading", size: "title1", weight: "heavy" }, ae), s.createElement(K.ZP, { style: ie.subtitle, weight: "medium" }, re));
                        return s.createElement(z.Z, { leftControlShouldClose: !0, rightControl: l }, c, s.createElement(B.Z, null, s.createElement(ee.Z, { type: ee.j.CoinsHand })), s.createElement(B.Z, { style: ie.sectionPerks }, s.createElement(te.Z, { style: ie.perksList })), s.createElement(B.Z, { ref: a, style: ie.sectionButton }, i));
                    },
                    { component: "application_marketing" },
                );
            var le = a(565739),
                ce = a(180772),
                oe = a(466818),
                pe = a(855488),
                me = a(952793),
                ue = a(176544);
            const de = P().if12af7c,
                ge = P().c1df579e,
                be = P().cc4c1a14,
                fe = s.createElement(P().I18NFormatMessage, { $i18n: "geee69df" }, s.createElement(K.ZP, { link: ue._t }, P().e1453e45)),
                Ze = P().d5737f0e,
                Ee = P().j325331a,
                he = P().e18e8da8,
                _e = P().a4ed9072,
                ye = P().gf32cca2,
                we = P().j8ba99b4,
                ve = P().a329ce88,
                Ce = ce.Z,
                xe = x.default.create((e) => ({ interstitial: { marginTop: e.spaces.space32 }, prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 }, bottomBar: { gap: e.spaces.space24, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 }, input: { borderRadius: e.borderRadii.small, marginBottom: e.spaces.space20, paddingStart: 0, paddingEnd: 0 }, subtext: { marginTop: e.spaces.space8 }, selector: { marginTop: e.spaces.space12 } })),
                ke = (0, R.Z)(
                    ({ subscriptionsPriceOfferings: e, viewer: t }) => {
                        const a = (0, me.hC)("super_follow_onboarding_application_perks_enabled"),
                            r = c()(le.Z, e).offers.map((e) => ({ label: e.price, value: e.key })),
                            n = c()(Ce, t),
                            i = n.super_follows_application_draft?.selected_price ?? "",
                            l = n.super_follows_application_draft?.creator_intro,
                            o = n.super_follows_application_draft?.creator_description,
                            p = l?.length,
                            m = o?.length,
                            u = a ? i && m && p : i,
                            d = v(n, "selected_price"),
                            g = v(n, "creator_intro"),
                            b = v(n, "creator_description"),
                            f = s.useMemo(() => s.createElement(B.Z, { style: xe.bottomBar }, s.createElement(V.Z, { disabled: !u, label: ge, path: C.wU.submit, size: "xLarge", type: "primaryFilled" })), [u]);
                        return s.createElement(
                            z.Z,
                            { bottomBar: f, withInfoButton: !0 },
                            s.createElement(B.Z, { style: xe.interstitial }, s.createElement(T.Z, { headline: de })),
                            s.createElement(
                                B.Z,
                                { style: xe.prices },
                                s.createElement(K.ZP, { "aria-level": 4, role: "heading", size: "title4", weight: "heavy" }, be),
                                s.createElement(K.ZP, { color: "gray700", style: xe.subtext }, fe),
                                s.createElement(oe.ZP, {
                                    autofocus: !0,
                                    label: Ze,
                                    onChange: (e) => {
                                        d(e);
                                    },
                                    options: r,
                                    style: xe.selector,
                                    value: i || "",
                                    withEmptyOption: !0,
                                }),
                            ),
                            a ? s.createElement(B.Z, null, s.createElement(K.ZP, { "aria-level": 4, role: "heading", size: "title4", weight: "heavy" }, Ee), s.createElement(K.ZP, { color: "gray700", style: xe.subtext }, he), s.createElement(pe.Z, { label: _e, maxLength: 140, multiline: !0, name: "hi", numberOfLines: 2, onChange: (e) => g(e.currentTarget.value), style: xe.input, value: l ?? "" }), s.createElement(K.ZP, { "aria-level": 4, role: "heading", size: "title4", weight: "heavy" }, ye), s.createElement(K.ZP, { color: "gray700", style: xe.subtext }, we), s.createElement(pe.Z, { label: ve, maxLength: 140, multiline: !0, name: "hi", onChange: (e) => b(e.currentTarget.value), style: xe.input, value: o ?? "" })) : null,
                        );
                    },
                    { component: "application_pricing" },
                ),
                Pe = P().aa7e35ee,
                Be = P().c984cc62,
                Te = x.default.create((e) => ({ interstitial: { marginVertical: e.spaces.space32 } })),
                Re = (0, R.Z)(() => s.createElement(z.Z, { leftControlShouldClose: !0, withInfoButton: !0 }, s.createElement(B.Z, { style: Te.interstitial }, s.createElement(T.Z, { headline: Pe, illustration: T.j.UTurn, subtext: Be }))), { component: "application_rejected" });
            var ze = a(299097),
                Oe = a(88254),
                Ne = a(551944),
                Le = a(351743),
                Se = a.n(Le),
                Ie = a(96083),
                Fe = a(782642);
            const De = P().gd115e64,
                We = P().a9f08d5c,
                Ve = P().a91bb144,
                je = P().c3f8d650,
                Ue = P().j89dd344,
                He = P().d19cc490,
                Me = P().c737c1b2,
                Je = P().f98e5fd4,
                $e = P().c41b01be,
                Ge = P().e2aad0fe,
                qe = P().d1b983ef,
                Ae = P().ef4602ec,
                Qe = 140,
                Xe = Ne.Z,
                Ke = Oe.Z,
                Ye = ze.Z,
                et = x.default.create((e) => ({ interstitial: { marginBottom: e.spaces.space24, flexGrow: 1 }, accountChildren: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space12, marginTop: e.spaces.space24 }, screenName: { flexDirection: "row", gap: e.spaces.space8 }, iconChecked: { color: e.colors.green500 }, plannedUsageChildren: { marginTop: e.spaces.space28 }, plannedUsageInput: { paddingHorizontal: 0, paddingVertical: 0 }, otherChildren: { marginTop: e.spaces.space12 }, bottomBar: { gap: e.spaces.space24, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 }, input: { borderRadius: e.borderRadii.small, marginBottom: e.spaces.space20, paddingStart: 0, paddingEnd: 0 }, subtext: { marginTop: e.spaces.space8 }, checkmark: { alignItems: "center", flexDirection: "row", gap: e.spaces.space8 } })),
                tt = (0, R.Z)(
                    ({ user: e, viewer: t }) => {
                        const a = (0, Fe.p)(),
                            [r, n] = s.useState(!1),
                            [i, l] = s.useState(!1),
                            [o, p] = s.useState(!1),
                            m = c()(Xe, e),
                            u = c()(Ke, t),
                            g = u.super_follows_application_draft,
                            b = g?.creator_intro,
                            f = g?.creator_description,
                            Z = g?.content_example,
                            E = g?.pitch,
                            h = g?.selected_price,
                            _ = !(!h || r || i || !o),
                            y = v(u, "content_example"),
                            w = v(u, "pitch"),
                            [x, k] = Se()(Ye),
                            P = s.useCallback(
                                () =>
                                    new Promise((e, t) => {
                                        x({
                                            variables: { selected_price: h, creator_intro: b, creator_description: f, purpose: "", pitch: E, content_example: Z },
                                            onCompleted: (t, a) => e(),
                                            onError: (e) => (a({ text: Ae }), t(e)),
                                            updater: (e, t) => {
                                                const a = m.__id;
                                                d()(a, "userId must be specified");
                                                const r = e.get(a);
                                                d()(r, "userRecord must be specified"), r.invalidateRecord();
                                            },
                                        });
                                    }),
                                [a, Z, f, b, E, h, x, m.__id],
                            ),
                            R = s.useMemo(() => s.createElement(B.Z, { style: et.bottomBar }, s.createElement(D.Z, null), s.createElement(V.Z, { disabled: !_ || k, label: Ve, onPress: P, path: C.wU.submitted, size: "xLarge", type: "primaryFilled" })), [P, _, k]);
                        return s.createElement(
                            z.Z,
                            { bottomBar: R, withInfoButton: !0 },
                            s.createElement(B.Z, { style: et.interstitial }, s.createElement(T.Z, { headline: De, subtext: We })),
                            s.createElement(
                                B.Z,
                                null,
                                s.createElement(K.ZP, { "aria-level": 4, role: "heading", size: "title4", weight: "heavy" }, je),
                                s.createElement(K.ZP, { color: "gray700", style: et.subtext }, Ue),
                                s.createElement(pe.Z, {
                                    errorText: qe({ count: Qe }),
                                    invalid: i,
                                    label: He,
                                    maxLength: 560,
                                    multiline: !0,
                                    name: "contentExample",
                                    numberOfLines: 3,
                                    onChange: (e) => {
                                        const t = e.currentTarget.value;
                                        y(t), t.length < Qe ? l(!0) : l(!1);
                                    },
                                    style: et.input,
                                    value: Z ?? "",
                                }),
                                s.createElement(K.ZP, { "aria-level": 4, role: "heading", size: "title4", weight: "heavy" }, Me),
                                s.createElement(K.ZP, { color: "gray700", style: et.subtext }, Je),
                                s.createElement(pe.Z, {
                                    errorText: qe({ count: Qe }),
                                    invalid: r,
                                    label: $e,
                                    maxLength: 560,
                                    min: "140",
                                    multiline: !0,
                                    name: "pitch",
                                    numberOfLines: 3,
                                    onChange: (e) => {
                                        const t = e.currentTarget.value;
                                        w(t), t.length < Qe ? n(!0) : n(!1);
                                    },
                                    style: et.input,
                                    value: E ?? "",
                                }),
                                s.createElement(Q.Z, { style: et.checkmark }, s.createElement(Ie.Z, { checked: o, onChange: (e) => p(e) }), s.createElement(K.ZP, { size: "headline2" }, Ge)),
                            ),
                        );
                    },
                    { component: "application_submit" },
                ),
                at = P().d3d6c52c,
                rt = P().cb27c0ba,
                nt = P().b772cd66,
                it = x.default.create((e) => ({ interstitial: { marginVertical: e.spaces.space32 }, button: { marginTop: e.spaces.space32 } })),
                st = (0, R.Z)(() => s.createElement(z.Z, { leftControlShouldClose: !0, withInfoButton: !0 }, s.createElement(B.Z, { style: it.interstitial }, s.createElement(T.Z, { headline: at, illustration: T.j.PaperAirplane, subtext: rt }), s.createElement(V.Z, { label: nt, path: "/settings/monetization", size: "xLarge", style: it.button, type: "primaryFilled" }))), { component: "application_submitted" }),
                lt = P().j274e6aa,
                ct = P().j006be54,
                ot = x.default.create((e) => ({ interstitial: { marginVertical: e.spaces.space32 } })),
                pt = (0, R.Z)(() => s.createElement(z.Z, { leftControlShouldClose: !0, withInfoButton: !0 }, s.createElement(B.Z, { style: ot.interstitial }, s.createElement(T.Z, { headline: lt, illustration: T.j.Bench, subtext: ct }))), { component: "application_waitlisted" }),
                mt = i.Z,
                ut = n.Z,
                dt = r.Z,
                gt = ({ subscriptionsPriceOfferings: e, user: t, viewer: a }) => {
                    const { featureSwitches: r } = s.useContext(p.rC),
                        n = c()(mt, t),
                        i = c()(dt, a),
                        l = c()(ut, e);
                    if ((w(i), !r.isTrue("super_follow_web_application_enabled"))) return s.createElement(S, null);
                    const u = r.isTrue("responsive_web_ad_revenue_sharing_enabled") && "/settings/superfollows/application/eligibility" !== window.location.pathname;
                    return null == i.super_follows_application_draft && u ? s.createElement(m.Z, { to: C.Jz }) : s.createElement(o.Switch, null, s.createElement(o.Route, { exact: !0, path: C.wU.eligibility }, s.createElement(q, { user: n })), s.createElement(o.Route, { exact: !0, path: C.wU.pricing }, s.createElement(ke, { subscriptionsPriceOfferings: l, viewer: i })), s.createElement(o.Route, { exact: !0, path: C.wU.submit }, s.createElement(tt, { user: n, viewer: i })), s.createElement(o.Route, { exact: !0, path: C.wU.submitted }, s.createElement(st, null)), s.createElement(o.Route, { exact: !0, path: C.wU.waitlisted }, s.createElement(pt, null)), s.createElement(o.Route, { exact: !0, path: C.wU.rejected }, s.createElement(Re, null)), s.createElement(o.Route, { path: C.wU.root }, s.createElement(se, null)));
                };
        },
        628073: (e, t, a) => {
            a.d(t, { Z: () => k });
            a(571372);
            var r = a(468408),
                n = a(357061),
                i = a(455575),
                s = a(541844),
                l = a(202784),
                c = (a(585488), a(277660)),
                o = a.n(c),
                p = a(107267),
                m = a(443781),
                u = a(615027),
                d = a(50998),
                g = a(945338),
                b = a(376755),
                f = a(274257),
                Z = a(720816),
                E = a(642097),
                h = a(43512),
                _ = a(220693),
                y = a(893903);
            const w = s.Z,
                v = i.Z,
                C = n.Z,
                x = r.Z,
                k = ({ priceOfferings: e, subscriptionsPriceOfferings: t, user: a, viewer: r }) => {
                    const { featureSwitches: n } = (0, m.QZ)(),
                        i = o()(w, e),
                        s = o()(C, a),
                        c = o()(x, r),
                        k = o()(v, t),
                        P = (0, b.IU)(s),
                        B = (0, b.IH)(s),
                        T = (0, b.Ex)(s),
                        { discardChanges: R, shouldBlockNavigation: z } = (0, g.Z)({ rootPath: Z.D1.root, user: s, viewer: c });
                    if (((0, f.zG)(c, { creator_intro: P, description: B, selected_price: T }), !n.isTrue("super_follow_web_edit_perks_enabled"))) throw new Error("Subscriptions management is not enabled");
                    return null == c.super_follows_onboarding_draft ? l.createElement(u.Z, { to: Z.Jz }) : l.createElement(l.Fragment, null, l.createElement(d.Z, { onNavigation: R, shouldBlockNavigation: z }), l.createElement(p.Switch, null, l.createElement(p.Route, { exact: !0, path: Z.D1.perksIntro }, l.createElement(_.Z, { backLocation: Z.D1.root, user: s, viewer: c })), l.createElement(p.Route, { exact: !0, path: Z.D1.perksDescription }, l.createElement(h.Z, { backLocation: Z.D1.root, user: s, viewer: c })), l.createElement(p.Route, { exact: !0, path: Z.D1.perksConfirm }, l.createElement(E.Z, { user: s, viewer: c })), l.createElement(p.Route, { path: Z.D1.root }, l.createElement(y.Z, { backLocation: Z.LI, perksConfirmLocation: Z.D1.perksConfirm, perksDescriptionLocation: Z.D1.perksDescription, perksIntroLocation: Z.D1.perksIntro, perksPricingLocation: Z.D1.perksPricing, priceOfferings: i, subscriptionsPriceOfferings: k, user: s, viewer: c, withAppBar: !0 }))));
                };
        },
        226445: (e, t, a) => {
            a.d(t, { Z: () => Ht });
            a(571372);
            var r = a(951862),
                n = a(686437),
                i = a(548770),
                s = a(808331),
                l = a(202784),
                c = (a(585488), a(277660)),
                o = a.n(c),
                p = a(107267),
                m = a(443781),
                u = a(615027),
                d = a(50998),
                g = a(945338),
                b = a(376755),
                f = a(274257),
                Z = a(720816),
                E = a(848282),
                h = a(825167),
                _ = a(392237),
                y = a(111677),
                w = a.n(y),
                v = a(724345),
                C = a(569778),
                x = a(725516),
                k = a(799163),
                P = a(541659),
                B = a(973316),
                T = a(409771);
            const R = w().d5cb1114,
                z = w().j2f622ec,
                O = w().e2cd7000,
                N = w().b3629b92,
                L = w().f4619a62,
                S = w().c5625f84,
                I = w().c7289544,
                F = w().aaf68c58,
                D = h.Z,
                W = E.Z,
                V = _.default.create((e) => ({ interstitial: { marginTop: e.spaces.space32 }, checks: { marginVertical: e.spaces.space32 }, bottomBar: { gap: e.spaces.space24, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } })),
                j = (0, x.Z)(
                    ({ percentageComplete: e, user: t, viewer: a }) => {
                        const r = o()(D, t),
                            n = o()(W, a),
                            i = r.stripe_account_status,
                            s = (0, f.JG)(n),
                            c = (0, f.fJ)(n),
                            p = (0, f.qO)(n),
                            m = [
                                { label: S, checked: !!s && !!c },
                                { label: I, checked: !!p },
                                { label: F, checked: "Completed" === i },
                            ],
                            u = m.some(({ checked: e }) => e),
                            d = l.createElement(v.Z, { style: V.bottomBar }, l.createElement(T.Z, null), l.createElement(B.Z, { label: L, path: Z.NW.perksIntro, size: "xLarge", type: "primaryFilled" }));
                        let g, b;
                        return u ? ((g = O), (b = N)) : ((g = R), (b = z)), l.createElement(P.Z, { bottomBar: d, leftControlShouldClose: !0, percentageComplete: e, withInfoButton: !0 }, l.createElement(v.Z, { style: V.interstitial }, l.createElement(C.Z, { headline: g, subtext: b })), l.createElement(v.Z, { style: V.checks }, l.createElement(k.Z, { items: m })));
                    },
                    { component: "onboarding_get_started" },
                );
            var U = a(807896),
                H = a(904503),
                M = a(73664),
                J = a(592353);
            const $ = w().af5b098e,
                G = w().ad4a92a2,
                q = w().c1df579e,
                A = H.Z,
                Q = _.default.create((e) => ({ bigButtons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 }, transitionOpacity: { transition: "opacity 0.2s 0s ease-in-out" }, opacityNone: { opacity: 0 } })),
                X = (0, x.Z)(
                    ({ percentageComplete: e, user: t }) => {
                        const a = l.useRef(),
                            r = (0, M.R)(a, { threshold: 0.5 }),
                            n = { label: q, path: Z.NW.perksConfirm, type: "primaryFilled" },
                            i = l.createElement(B.Z, (0, U.Z)({}, n, { size: "xLarge" })),
                            s = l.createElement(B.Z, (0, U.Z)({}, n, { size: "small", style: [Q.transitionOpacity, r ? Q.opacityNone : void 0] })),
                            c = o()(A, t);
                        return l.createElement(P.Z, { percentageComplete: e, rightControl: s, subtitle: G, title: $ }, l.createElement(J.Z, { user: c }), l.createElement(v.Z, { ref: a, style: Q.bigButtons }, i));
                    },
                    { component: "onboarding_perks_badges" },
                );
            var K = a(702427),
                Y = a(402422),
                ee = a(859538);
            const te = w().af5b098e,
                ae = w().e18b7a72,
                re = w().c1df579e,
                ne = Y.Z,
                ie = K.Z,
                se = _.default.create((e) => ({ bigButtons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 }, transitionOpacity: { transition: "opacity 0.2s 0s ease-in-out" }, opacityNone: { opacity: 0 } })),
                le = (0, x.Z)(
                    ({ percentageComplete: e, user: t, viewer: a }) => {
                        const r = l.useRef(),
                            n = (0, M.R)(r, { threshold: 0.5 }),
                            i = o()(ne, t),
                            s = o()(ie, a),
                            c = { label: re, path: Z.NW.pricing, type: "primaryFilled" },
                            p = l.createElement(B.Z, (0, U.Z)({}, c, { size: "xLarge" })),
                            m = l.createElement(B.Z, (0, U.Z)({}, c, { size: "small", style: [se.transitionOpacity, n ? se.opacityNone : void 0] }));
                        return l.createElement(P.Z, { percentageComplete: e, rightControl: m, subtitle: ae, title: te }, l.createElement(ee.Z, { user: i, viewer: s }), l.createElement(v.Z, { ref: r, style: se.bigButtons }, p));
                    },
                    { component: "onboarding_perks_confirm" },
                );
            var ce = a(953519),
                oe = a(964650),
                pe = a(325686),
                me = a(154003),
                ue = a(325319);
            const de = w().af5b098e,
                ge = w().e36287c6,
                be = w().be76dc34,
                fe = w().c1df579e,
                Ze = oe.Z,
                Ee = ce.Z,
                he = _.default.create((e) => ({ bigButtons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 }, transitionOpacity: { transition: "opacity 0.2s 0s ease-in-out" }, opacityNone: { opacity: 0 } })),
                _e = (0, x.Z)(
                    ({ percentageComplete: e, user: t, viewer: a }) => {
                        const r = l.useRef(),
                            n = l.useRef(),
                            i = (0, M.R)(n, { threshold: 0.5 }),
                            s = o()(Ee, a),
                            c = o()(Ze, t),
                            p = (0, f.fJ)(s),
                            m = p.length > 0 && p.length <= 140,
                            u = l.useCallback(() => {
                                r?.current?.focus();
                            }, []),
                            d = { disabled: !m, label: fe, path: Z.NW.perksBadges, type: "primaryFilled" },
                            g = l.createElement(B.Z, (0, U.Z)({}, d, { size: "xLarge" })),
                            b = l.createElement(B.Z, (0, U.Z)({}, d, { size: "small" })),
                            E = { children: be, onClick: u, type: "primaryFilled" },
                            h = l.createElement(me.ZP, (0, U.Z)({}, E, { size: "xLarge" })),
                            _ = l.createElement(me.ZP, (0, U.Z)({}, E, { size: "small" })),
                            y = m ? g : h,
                            w = l.createElement(pe.Z, { style: [he.transitionOpacity, i ? he.opacityNone : void 0] }, m ? b : _);
                        return l.createElement(P.Z, { percentageComplete: e, rightControl: w, subtitle: ge, title: de }, l.createElement(ue.Z, { descriptionMaxLength: 140, ref: r, user: c, viewer: s }), l.createElement(v.Z, { ref: n, style: he.bigButtons }, y));
                    },
                    { component: "onboarding_perks_description" },
                );
            var ye = a(456203),
                we = a(382417),
                ve = a(315121);
            const Ce = w().af5b098e,
                xe = w().c0348964,
                ke = w().ef5406e4,
                Pe = w().c1df579e,
                Be = we.Z,
                Te = ye.Z,
                Re = _.default.create((e) => ({ bigButtons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 }, transitionOpacity: { transition: "opacity 0.2s 0s ease-in-out" }, opacityNone: { opacity: 0 } })),
                ze = (0, x.Z)(
                    ({ percentageComplete: e, user: t, viewer: a }) => {
                        const r = l.useRef(),
                            n = l.useRef(),
                            i = (0, M.R)(n, { threshold: 0.5 }),
                            s = o()(Be, t),
                            c = o()(Te, a),
                            p = (0, f.JG)(c),
                            m = p.length > 0 && p.length <= 140,
                            u = l.useCallback(() => {
                                r?.current?.focus();
                            }, []),
                            d = { disabled: !m, label: Pe, path: Z.NW.perksDescription, type: "primaryFilled" },
                            g = l.createElement(B.Z, (0, U.Z)({}, d, { size: "xLarge" })),
                            b = l.createElement(B.Z, (0, U.Z)({}, d, { size: "small" })),
                            E = { children: ke, onClick: u, type: "primaryFilled" },
                            h = l.createElement(me.ZP, (0, U.Z)({}, E, { size: "xLarge" })),
                            _ = l.createElement(me.ZP, (0, U.Z)({}, E, { size: "small" })),
                            y = m ? g : h,
                            w = l.createElement(pe.Z, { style: [Re.transitionOpacity, i ? Re.opacityNone : void 0] }, m ? b : _);
                        return l.createElement(P.Z, { percentageComplete: e, rightControl: w, subtitle: xe, title: Ce }, l.createElement(ve.Z, { introMaxLength: 140, ref: r, user: s, viewer: c }), l.createElement(v.Z, { ref: n, style: Re.bigButtons }, y));
                    },
                    { component: "onboarding_perks_intro" },
                );
            var Oe = a(136201),
                Ne = a(288730),
                Le = a(160093),
                Se = a(555252),
                Ie = a(351743),
                Fe = a.n(Ie),
                De = a(731708),
                We = a(952793);
            const Ve = w().ea8a3d2e,
                je = w().f77bb179,
                Ue = w().g2a6f160,
                He = w().g9677c6e,
                Me = w().abd845fe,
                Je = Se.Z,
                $e = Le.Z,
                Ge = Ne.Z,
                qe = Oe.Z,
                Ae = _.default.create((e) => ({ interstitial: { marginTop: e.spaces.space32 }, buttons: { marginTop: e.spaces.space32, gap: e.spaces.space16 } })),
                Qe = (0, x.Z)(
                    ({ percentageComplete: e, priceOfferings: t, subscriptionsPriceOfferings: a, viewer: r }) => {
                        const n = o()(Je, t),
                            i = o()($e, a),
                            s = o()(Ge, r),
                            c = (0, f.JG)(s),
                            p = (0, f.fJ)(s),
                            m = (0, f.qO)(s) ?? n[0],
                            u = (0, f.Eo)(m, n, i),
                            [d, g] = Fe()(qe),
                            b = l.useCallback(
                                () =>
                                    new Promise((e, t) => {
                                        d({ variables: { creator_intro: c, benefits_data: [{ benefit_type: "ExclusiveContent", title: "", description: p }], selected_price: m }, onCompleted: (t, a) => e(), onError: t });
                                    }),
                                [c, p, m, d],
                            ),
                            E = (0, We.hC)("super_follow_onboarding_granular_pricing_enabled"),
                            h = l.useMemo(() => ({ bold: l.createElement(De.ZP, { weight: "heavy" }) }), []),
                            _ = l.useMemo(() => l.createElement(w().I18NFormatMessage, { $i18n: "f43d68d7" }, l.cloneElement(h.bold, null, w().g767d1c9)), [h]);
                        return l.createElement(P.Z, { percentageComplete: e, title: Ve, withInfoButton: !0 }, l.createElement(v.Z, { style: Ae.interstitial }, l.createElement(C.Z, { headline: je({ price: u }), illustration: C.j.CoinsThumbs, subtext: E ? _ : Ue })), l.createElement(v.Z, { style: Ae.buttons }, l.createElement(B.Z, { disabled: g, label: He, onPress: b, path: "/settings/superfollows", size: "large", type: "primaryFilled" }), l.createElement(B.Z, { disabled: g, label: Me, path: Z.NW.pricing, size: "large", type: "primaryOutlined" })));
                    },
                    { component: "onboarding_pricing_confirm" },
                );
            var Xe = a(260718),
                Ke = a(578571),
                Ye = a(471439),
                et = a(466818),
                tt = a(97272),
                at = a(176544);
            const rt = w().ea8a3d2e,
                nt = w().df057690,
                it = w().d5737f0e,
                st = w().g5923869,
                lt = { offer1: [w().f025ab3a, w().c962df0e], offer2: [w().ib075804, w().fc04f3a6], offer3: [w().c246656e, w().h0c5405c] },
                ct = w().f2d2153d,
                ot = w().c1df579e,
                pt = Ye.Z,
                mt = Ke.Z,
                ut = Xe.Z,
                dt = _.default.create((e) => ({ helpTextItem: { display: "list-item", listStyleType: "disc", listStylePosition: "inside" }, interstitial: { marginTop: e.spaces.space32 }, prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 } })),
                gt = (0, x.Z)(
                    ({ percentageComplete: e, priceOfferings: t, subscriptionsPriceOfferings: a, viewer: r }) => {
                        const { featureSwitches: n } = l.useContext(m.rC),
                            i = n.isTrue("super_follow_onboarding_granular_pricing_enabled"),
                            s = o()(pt, t),
                            c = o()(mt, a),
                            { priceOfferings: p, subscriptionsPriceOfferings: u } = (0, f.xX)(s, c),
                            d = o()(ut, r),
                            g = (0, f.qO)(d),
                            b = (0, f.NP)(d, "selected_price"),
                            E = l.createElement(w().I18NFormatMessage, { $i18n: "geee69df" }, l.createElement(De.ZP, { link: at._t }, w().e1453e45)),
                            h = Object.keys(p).map((e) => ({
                                label: st({ price: p[e] }),
                                value: e,
                                helpText: l.createElement(
                                    pe.Z,
                                    { role: "list" },
                                    lt[e].map((e) => l.createElement(De.ZP, { key: e, role: "listitem", style: dt.helpTextItem }, e)),
                                ),
                            })),
                            _ = u.offers.map((e) => ({ label: e.price, value: e.key })),
                            y = l.createElement(B.Z, { disabled: !g, label: ot, path: Z.NW.pricingConfirm, size: "small", type: "primaryFilled" }),
                            x = nt;
                        return l.createElement(
                            P.Z,
                            { percentageComplete: e, rightControl: y, title: rt, withInfoButton: !0 },
                            l.createElement(v.Z, { style: dt.interstitial }, l.createElement(C.Z, { headline: x, subtext: E })),
                            l.createElement(
                                v.Z,
                                { style: dt.prices },
                                i
                                    ? l.createElement(et.ZP, {
                                          autofocus: !0,
                                          helperText: ct({ price: "$3.00" }),
                                          label: it,
                                          onChange: (e) => {
                                              b(e);
                                          },
                                          options: _,
                                          value: g || void 0,
                                          withEmptyOption: !0,
                                      })
                                    : l.createElement(tt.Z, {
                                          "aria-label": x,
                                          name: "selectedPrice",
                                          onChange: (e, t) => {
                                              b(t);
                                          },
                                          options: h,
                                          value: g,
                                      }),
                            ),
                        );
                    },
                    { component: "onboarding_pricing" },
                ),
                bt = w().f1cb36b8,
                ft = w().e20f6662,
                Zt = w().b772cd66,
                Et = _.default.create((e) => ({ interstitial: { marginTop: e.spaces.space32 }, buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 } })),
                ht = (0, x.Z)(
                    ({ percentageComplete: e }) => {
                        const t = l.useRef(),
                            a = l.useCallback(() => {
                                t.current?.goBack();
                            }, []),
                            r = l.createElement(w().I18NFormatMessage, { $i18n: "h406634b" });
                        return l.createElement(P.Z, { leftControlShouldClose: !0, percentageComplete: void 0, screenRef: t, title: bt, withInfoButton: !0 }, l.createElement(v.Z, { style: Et.interstitial }, l.createElement(C.Z, { headline: ft, illustration: C.j.ThumbsUp, subtext: r })), l.createElement(v.Z, { style: Et.buttons }, l.createElement(me.ZP, { onPress: a, size: "large", type: "primaryFilled" }, Zt)));
                    },
                    { component: "onboarding_stripe_completed" },
                ),
                _t = w().f1cb36b8,
                yt = w().g88e146c,
                wt = w().dfe973a6,
                vt = w().b772cd66,
                Ct = _.default.create((e) => ({ interstitial: { marginTop: e.spaces.space32 }, buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 } })),
                xt = (0, x.Z)(
                    ({ percentageComplete: e }) => {
                        const t = l.useRef(),
                            a = l.useCallback(() => {
                                t.current?.goBack();
                            }, []);
                        return l.createElement(P.Z, { leftControlShouldClose: !0, percentageComplete: void 0, screenRef: t, title: _t, withInfoButton: !0 }, l.createElement(v.Z, { style: Ct.interstitial }, l.createElement(C.Z, { headline: yt, illustration: C.j.Bench, subtext: wt })), l.createElement(v.Z, { style: Ct.buttons }, l.createElement(me.ZP, { onPress: a, size: "large", type: "primaryFilled" }, vt)));
                    },
                    { component: "onboarding_stripe_pending" },
                );
            var kt = a(167630),
                Pt = a(782826);
            const Bt = a(985413).Z,
                Tt = () => {
                    const [e, t] = Fe()(Bt);
                    return [
                        l.useCallback(
                            () =>
                                new Promise((t, a) => {
                                    const { href: r, origin: n } = Pt.ZP.get();
                                    e({
                                        variables: { refresh_url: r, return_url: `${n}/settings/monetization` },
                                        onCompleted: ({ stripe_connect_account_create: e }, r) => {
                                            e ? t(e) : a(new Error("Missing onboarding URL"));
                                        },
                                        onError: a,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                };
            const Rt = a(935711).Z,
                zt = () => {
                    const [e, t] = Fe()(Rt);
                    return [
                        l.useCallback(
                            () =>
                                new Promise((t, a) => {
                                    const { href: r } = Pt.ZP.get();
                                    e({
                                        variables: { refresh_url: r, return_url: r },
                                        onCompleted: ({ stripe_account_create_onboarding_url: e }, r) => {
                                            e ? t(e) : a(new Error("Missing onboarding URL"));
                                        },
                                        onError: a,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                Ot = w().f1cb36b8,
                Nt = w().ja884230,
                Lt = w().a3f6a966,
                St = w().cb031e44,
                It = _.default.create((e) => ({ interstitial: { marginTop: e.spaces.space32 }, buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 }, subtext: { marginTop: e.spaces.space8 } })),
                Ft = (0, x.Z)(
                    ({ percentageComplete: e }) => {
                        const { featureSwitches: t } = l.useContext(m.rC),
                            [a, r] = l.useState(!1),
                            [n, i] = l.useState(!1),
                            [s, c] = zt(),
                            [o, p] = Tt(),
                            u = t.isTrue("responsive_web_stripe_account_creation_enabled"),
                            d = t.isTrue("responsive_web_ad_revenue_sharing_enabled"),
                            g = u ? o : s,
                            b = u || d ? p : c,
                            f = l.useCallback(() => {
                                g()
                                    .then((e) => {
                                        Pt.ZP.navigateTo(e);
                                    })
                                    .catch(() => {
                                        r(!1), i(!1);
                                    });
                            }, [g]),
                            Z = l.useCallback(() => {
                                r(!0), f();
                            }, [f]),
                            E = a || n || b;
                        return l.createElement(P.Z, { percentageComplete: void 0, title: Ot }, l.createElement(v.Z, { style: It.interstitial }, l.createElement(C.Z, { headline: Nt, illustration: C.j.CoinsStairs }), l.createElement(De.ZP, { style: It.subtext }, St)), l.createElement(v.Z, { style: It.buttons }, l.createElement(me.ZP, { disabled: E, onPress: Z, size: "large", type: "primaryFilled" }, a ? l.createElement(kt.Z, null) : Lt)));
                    },
                    { component: "onboarding_stripe_setup" },
                ),
                Dt = s.Z,
                Wt = i.Z,
                Vt = n.Z,
                jt = r.Z,
                Ut = (e) => e / 8,
                Ht = ({ priceOfferings: e, subscriptionsPriceOfferings: t, user: a, viewer: r }) => {
                    const { featureSwitches: n } = (0, m.QZ)(),
                        i = (0, p.useHistory)(),
                        s = i.location.state?.cameFromEarningsDashboard,
                        c = o()(Dt, e),
                        E = o()(Wt, t),
                        h = o()(Vt, a),
                        _ = o()(jt, r),
                        { priceOfferings: y, subscriptionsPriceOfferings: w } = (0, f.xX)(c, E),
                        v = (0, b.IU)(h),
                        C = (0, b.IH)(h),
                        x = (0, b.Ex)(h),
                        k = x && y[x] ? w?.offers[0].key : x,
                        { discardChanges: P, shouldBlockNavigation: B } = (0, g.Z)({ rootPath: Z.LI, user: h, viewer: _ });
                    if (((0, f.zG)(_, { creator_intro: v, description: C, selected_price: k }), !n.isTrue("super_follow_web_onboarding_enabled"))) throw new Error("Super Follows onboarding is not enabled");
                    return null == _.super_follows_onboarding_draft && !s ? l.createElement(u.Z, { to: Z.Jz }) : l.createElement(l.Fragment, null, l.createElement(d.Z, { onNavigation: P, shouldBlockNavigation: B }), l.createElement(p.Switch, null, l.createElement(p.Route, { exact: !0, path: Z.NW.perksIntro }, l.createElement(ze, { percentageComplete: Ut(1), user: h, viewer: _ })), l.createElement(p.Route, { exact: !0, path: Z.NW.perksDescription }, l.createElement(_e, { percentageComplete: Ut(2), user: h, viewer: _ })), l.createElement(p.Route, { exact: !0, path: Z.NW.perksBadges }, l.createElement(X, { percentageComplete: Ut(3), user: h })), l.createElement(p.Route, { exact: !0, path: Z.NW.perksConfirm }, l.createElement(le, { percentageComplete: Ut(4), user: h, viewer: _ })), l.createElement(p.Route, { exact: !0, path: Z.NW.pricing }, l.createElement(gt, { percentageComplete: Ut(5), priceOfferings: c, subscriptionsPriceOfferings: E, viewer: _ })), l.createElement(p.Route, { exact: !0, path: Z.NW.pricingConfirm }, l.createElement(Qe, { percentageComplete: Ut(6), priceOfferings: c, subscriptionsPriceOfferings: E, viewer: _ })), l.createElement(p.Route, { exact: !0, path: Z.NW.stripeSetup }, l.createElement(Ft, { percentageComplete: Ut(7) })), l.createElement(p.Route, { exact: !0, path: Z.NW.stripePending }, l.createElement(xt, { percentageComplete: Ut(8) })), l.createElement(p.Route, { exact: !0, path: Z.NW.stripeCompleted }, l.createElement(ht, { percentageComplete: Ut(8) })), l.createElement(p.Route, { path: Z.NW.root }, l.createElement(j, { percentageComplete: Ut(0), user: h, viewer: _ }))));
                };
        },
        540769: (e, t, a) => {
            a.d(t, { Z: () => _ });
            var r = a(202784),
                n = a(420412),
                i = a(392237),
                s = a(111677),
                l = a.n(s),
                c = a(439412),
                o = a(724345),
                p = a(569778),
                m = a(725516),
                u = a(541659);
            const d = l().ebfb897c,
                g = l().dc4feb1a,
                b = l().h9b9d486,
                f = l().ic130fd6,
                Z = l().dd913e24,
                E = l().b737ee66,
                h = i.default.create((e) => ({ interstitial: { marginTop: e.spaces.space32 }, exampleDescriptions: { gap: e.spaces.space32, marginVertical: e.spaces.space36 } })),
                _ = (0, m.Z)(
                    () => {
                        const e = b,
                            t = E;
                        return r.createElement(u.Z, { title: d }, r.createElement(o.Z, { style: h.interstitial }, r.createElement(p.Z, { headline: g, subtext: e })), r.createElement(o.Z, { style: h.exampleDescriptions }, r.createElement(n.Z, null), r.createElement(c.Z, { value: f }), r.createElement(n.Z, null), r.createElement(c.Z, { value: Z }), r.createElement(n.Z, null), r.createElement(c.Z, { value: t })));
                    },
                    { component: "perks_description_examples" },
                );
        },
        899382: (e, t, a) => {
            a.d(t, { Z: () => h });
            var r = a(202784),
                n = a(392237),
                i = a(111677),
                s = a.n(i),
                l = a(724345),
                c = a(569778),
                o = a(397377),
                p = a(725516),
                m = a(541659);
            const u = s().ebfb897c,
                d = s().dc4feb1a,
                g = s().a0bb2076,
                b = s().fe076612,
                f = s().g7f66daa,
                Z = s().hbe4f99e,
                E = n.default.create((e) => ({ interstitial: { marginTop: e.spaces.space32 }, exampleIntros: { gap: e.spaces.space24, marginVertical: e.spaces.space36 } })),
                h = (0, p.Z)(
                    () => {
                        const e = b,
                            t = f;
                        return r.createElement(m.Z, { title: u }, r.createElement(l.Z, { style: E.interstitial }, r.createElement(c.Z, { headline: d, subtext: g })), r.createElement(l.Z, { style: E.exampleIntros }, r.createElement(o.Z, { value: e }), r.createElement(o.Z, { value: t }), r.createElement(o.Z, { value: Z })));
                    },
                    { component: "perks_intro_examples" },
                );
        },
        699042: (e, t, a) => {
            a.d(t, { Z: () => E });
            var r = a(202784),
                n = a(776588),
                i = a(392237),
                s = a(111677),
                l = a.n(s),
                c = a(813254),
                o = a(366708),
                p = a(724345),
                m = a(569778),
                u = a(725516),
                d = a(541659);
            const g = l().hf6f2914,
                b = l().fb278c82,
                f = l().j6cab6ec,
                Z = i.default.create((e) => ({ interstitial: { marginTop: e.spaces.space32 }, preview: { marginBottom: e.spaces.space16, marginHorizontal: e.spaces.space16, marginTop: e.spaces.space40 }, subheader: { marginTop: e.spaces.space8 } })),
                E = (0, u.Z)(
                    () => {
                        const e = f;
                        return r.createElement(d.Z, { title: g }, r.createElement(p.Z, { style: Z.interstitial }, r.createElement(m.Z, { headline: b, subtext: e })), r.createElement(c.Z, { style: Z.preview }, r.createElement(o.Z, null, r.createElement(n.Z, { color: "text", lineHeightPx: 30, wordHeightPx: 7, wordPercentWidths: [18, 17], wordSpacingPx: 15 }), r.createElement(n.Z, { color: "text", lineHeightPx: 30, wordHeightPx: 7, wordPercentWidths: [17, 20], wordSpacingPx: 15 }), r.createElement(n.Z, { color: "text", lineHeightPx: 20, style: Z.subheader, withBorderRadius: !0, withLineWrap: !0, wordHeightPx: 5, wordPercentWidths: [16, 10, 17, 15, 5, 10, 5, 12, 15, 7, 9, 12] }))));
                    },
                    { component: "perks_preview" },
                );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsSuperFollows-580483cf.a19317ca.js.map
