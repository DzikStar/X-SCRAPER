"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.CommandCenter", "icons/IconCameraVideoStroke-js", "icons/IconDraw-js", "icons/IconExiting-js"],
    {
        395337: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i,
                l,
                a,
                r,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (a = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [i, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [a], storageKey: null }, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            o.hash = "42f499bfb2697230967b662ad70f78f8";
            const s = o;
        },
        314644: (e, t, n) => {
            n.r(t), n.d(t, { default: () => vt });
            var i = n(807896),
                l = n(202784),
                a = n(400752),
                r = n(565058),
                o = n(325686),
                s = n(708852),
                d = n(371344),
                c = n(466792),
                u = n(731708),
                m = n(392237),
                f = n(178519);
            function p(...e) {
                return l.useCallback(
                    (t) => {
                        for (const n of e) null != n && ("function" == typeof n ? n(t) : (n.current = t));
                    },
                    [...e],
                );
            }
            var b = n(725405),
                v = (n(136728), n(840590)),
                _ = n(874627),
                g = n(536387),
                h = n(811322),
                k = n(987809),
                w = n(111677),
                y = n.n(w),
                I = n(698891),
                D = n(459679),
                E = n(420182),
                Z = n(390387),
                C = n(76920),
                M = n(688715),
                T = n(348256),
                x = n(956272),
                S = n(684869),
                R = n(717160),
                L = n(707570),
                z = n(1753),
                F = n(625271),
                K = n(883069),
                A = n(279849),
                N = n(197318),
                $ = n(689582),
                H = n(256260),
                V = n(511323),
                U = n(80361),
                j = n(856151),
                q = n(53674),
                B = n(520913),
                O = n(297896),
                P = n(175564),
                Q = n(748138),
                W = n(68290),
                G = n(593875),
                X = n(839),
                Y = n(720930),
                J = n(42134),
                ee = n(484633),
                te = n(457566),
                ne = n(655352),
                ie = n(466036),
                le = n(919022),
                ae = n(477403);
            const re = y().a15648a4,
                oe = y().i3145aa0,
                se = y().cdf89b84,
                de = y().i83d4f14,
                ce = y().b0041756,
                ue = y().ae1bbb26,
                me = y().d299431c,
                fe = y().fa98627a,
                pe = y().fd442790,
                be = y().e0cb0c72,
                ve = y().j087774e,
                _e = y().e2eef3c2,
                ge = y().b55d8a78,
                he = y().h02a6fe6,
                ke = y().f75d1806,
                we = y().j34ad558,
                ye = y().a5a30af0,
                Ie = y().b007440a,
                De = y().c818c60c,
                Ee = y().ha8209bc,
                Ze = y().a2f81050,
                Ce = y().h5860a68,
                Me = y().eb75875e,
                Te = y().fcf3e54c,
                xe = y().ded416b0,
                Se = y().j0e2cfa8,
                Re = (0, r.cn)((e) => {
                    const t = e(E.qc).getState(),
                        n = le.ZP.selectViewerUser(t)?.screen_name,
                        { acceptedIds: i, ids: l } = ie.sC(t),
                        a = l.length - i.length,
                        r = e(E.f0),
                        o = e(E.TD),
                        s = { icon: T.default, label: Ee, link: "/home", id: "home" },
                        d = { icon: x.default, label: Te, link: "/explore", id: "explore" },
                        c = r.isTrue("subscriptions_inapp_grok_upsell_enabled") || o.isTrueAndEnabled("subscriptions_inapp_grok") ? { icon: te.x1, label: Ce, link: "/i/grok", id: "grok" } : void 0,
                        u = { icon: S.default, label: Me, link: "/notifications", id: "notifications" },
                        m = { icon: R.default, label: Ze, link: "/messages", id: "messages" },
                        f = r.isTrue("voice_rooms_discovery_page_enabled") ? { icon: L.default, label: xe, link: "/i/spaces", id: "spaces" } : void 0,
                        p = { icon: z.default, label: ye, link: "/compose/articles", id: "article_composer" },
                        b = { icon: F.default, label: re, link: "/i/communitynotes", id: "birdwatch" },
                        v = { icon: K.default, label: oe, link: "/i/bookmarks", id: "bookmarks_overflow_item" },
                        _ = { icon: A.default, label: se, link: "/i/branded_likes_preview", id: "branded_likes_preview_overflow_item" },
                        g = (N.default, n ? { icon: $.default, label: ce, link: `/${n}/lists`, id: "lists_overflow_item" } : void 0),
                        h = { badgeCount: a, icon: H.default, label: de, link: "/follower_requests", id: "follower_requests_overflow_item" },
                        k = n ? { icon: V.default, label: fe, link: `/${n}`, id: "profile_overflow_item" } : void 0,
                        w = { icon: U.default, label: "Money", link: "/i/xpayments", id: "payments_overflow_item" },
                        y = { icon: j.default, label: ve, link: "/i/coins", id: "twitter_coins" },
                        D = { icon: B.default, label: ke, link: "/i/premium", id: "premium_hub" },
                        C = { label: ue, link: "/logout", icon: O.default, id: "logout_overflow_item" },
                        Re = { icon: P.default, label: be, link: (0, M.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), id: "twitter_ads_item" },
                        Le = r.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        ze = { icon: Q.default, label: me, link: Le ? "/i/monetization" : "/settings/monetization", id: "monetization" },
                        Fe = { icon: I.default, label: pe, link: "/settings", id: "settings_overflow_item" },
                        Ke = { label: r.isTrue("subscriptions_upsells_vo_nav_decoration_enabled") ? Se : _e, id: "verified_organization_signup_item", link: "/i/verified-orgs-signup", icon: W.default },
                        Ae = { label: _e, id: "verified_organization_dashboard_item", link: "/i/verified", icon: W.default },
                        Ne = { label: ge, id: "create_space_item", link: "/i/spaces/start", icon: L.default },
                        $e = n ? { label: he, id: "communities_item", link: `/${n}/communities`, icon: G.default } : void 0,
                        He = (0, ae.eY)(t),
                        Ve = r.isTrue("spaces_conference_enabled") || !!He,
                        Ue = { label: "Conferences", id: "conferences_item", link: "/i/conferences", icon: X.default },
                        je = { label: Ie, id: "jobs_item", link: "/jobs", icon: Y.default },
                        qe = o.isAnyPremiumSubscriber(),
                        Be = qe,
                        Oe = r.isTrue("payments_enabled"),
                        Pe = r.isTrue("subscriptions_sign_up_enabled") && !qe,
                        Qe = o.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, ne.ZP)(),
                        We = r.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        Ge = o.isVerifiedOrg(),
                        Xe = r.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        Ye = (0, Z.Lz)(t),
                        Je = r.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Ye,
                        et = i.length,
                        tt = !qe && r.isTrue("rweb_analytics_nav_item_enabled"),
                        nt = r.isTrue("recruiting_global_jobs_search_enabled"),
                        it = e(J.cI),
                        lt = e(J.K$),
                        at = r.isTrue("voice_rooms_web_space_creation") && it !== ee.Q.host && lt?.type !== ee.W.space,
                        rt = r.isTrue("c9s_enabled"),
                        ot = r.isTrue("branded_like_preview_enabled");
                    return [
                        s,
                        d,
                        c,
                        u,
                        m,
                        f,
                        k,
                        Be ? D : void 0,
                        Oe ? w : void 0,
                        Pe
                            ? (() => {
                                  const e = r.isTrue("subscriptions_premium_experiment_nav_text");
                                  return { icon: B.default, label: e ? we : ke, link: "/i/premium_sign_up", id: "verified_overflow_item" };
                              })()
                            : void 0,
                        g,
                        v,
                        Qe ? p : void 0,
                        We ? (Ge ? Ae : Ke) : void 0,
                        Xe ? y : void 0,
                        Je ? b : void 0,
                        a || et ? h : void 0,
                        tt ? { icon: q.default, label: De, link: "/i/account_analytics", id: "analytics" } : void 0,
                        ze,
                        Re,
                        nt ? je : void 0,
                        Ve ? Ue : void 0,
                        at ? Ne : void 0,
                        Fe,
                        C,
                        rt ? $e : void 0,
                        void 0,
                        ot ? _ : void 0,
                    ].filter(Boolean);
                }),
                Le = (0, r.cn)(""),
                ze = (0, r.cn)((e) => [...e(Ke), ...e(Ae), ...e(je), ...e(Oe)]),
                Fe = (0, r.cn)((e) =>
                    e(Le)
                        .split(/ +/g)
                        .filter(Boolean)
                        .map((e) => Ne(e.toLowerCase())),
                ),
                Ke = (0, r.cn)((e) => {
                    const t = e(Re),
                        n = e(Fe);
                    return (0, D.Z)(t, ({ icon: e, id: t, label: i, link: l }) => (n.every((e) => Ne(i.toLowerCase()).includes(e)) ? { id: `nav-${t}`, label: i, path: l, Icon: e } : void 0));
                }),
                Ae = (0, r.cn)((e) => {
                    const t = e($e),
                        n = e(Fe);
                    return (0, D.Z)(t, (e) => {
                        const t = (0, D.Z)(e.items, (e) => {
                            if (n.every((t) => e.terms.some((e) => e.includes(t)))) return { id: `settings-${e.id}-${e.title}`, label: e.title, path: e.path, Icon: I.default };
                        });
                        return n.every((t) => e.terms.some((e) => e.includes(t))) ? { id: `settings-${e.id}-${e.title}`, label: e.title, path: e.path, subItems: t, Icon: I.default } : t.length ? { id: `settings-${e.id}-${e.title}`, label: e.title, subItems: t, Icon: I.default } : null;
                    });
                });
            function Ne(e) {
                return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            }
            const $e = (0, r.cn)((e) => {
                    const t = e(He);
                    return (0, D.Z)(t, (e) => {
                        if (e.isSearchable)
                            return {
                                terms: [e.title, ...e.synonyms].map((e) => Ne(e.toLowerCase())),
                                id: `settings-${e.id}`,
                                title: e.title,
                                path: e.path,
                                items: (0, D.Z)(e.items, (e) => {
                                    if (e.isSearchable) return { id: `settings-${e.id}`, title: e.title, path: e.path, terms: [e.title, ...e.synonyms].map((e) => Ne(e.toLowerCase())) };
                                }),
                            };
                    });
                }),
                He = (0, r.cn)((e) => {
                    const t = e(E.qc).getState(),
                        n = (0, Z.Lz)(t),
                        i = (0, Z.vd)(t),
                        l = e(E.f0),
                        a = e(E.TD);
                    return (0, C.VA)({ isDelegate: n, delegateRole: i, featureSwitches: l, userClaims: a });
                });
            const Ve = (0, g.K9)((e) =>
                    Promise.all([n.e("modules.audio-6107ac1a"), n.e("modules.audio-b953418a"), n.e("modules.audio-7c51e6a7"), n.e("modules.audio-04db59e9"), n.e("modules.audio-76583d6c"), n.e("modules.audio-b7a8a5fb"), n.e("modules.audio-51f6e793"), n.e("modules.audio-e019dbda"), n.e("modules.audio-262c94d4"), n.e("modules.audio-c6fe4ea4"), n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"), n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"), n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"), n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"), n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"), n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"), n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"), n.e("ondemand.devItems")])
                        .then(n.bind(n, 825630))
                        .then(({ devItemsAtom: e }) => e),
                ),
                Ue = (0, r.cn)((e) => (e(Ve), e(e(Ve.resolved) ?? (0, r.cn)(() => [])))),
                je =
                    ((qe = () => Ue),
                    (0, r.cn)((e) => {
                        const t = e(qe()),
                            n = e(Fe);
                        return t.filter((e) => n.every((t) => Ne(e.label.toLowerCase()).includes(t)));
                    }));
            var qe;
            const Be = y().fa9adac1,
                Oe = (0, r.cn)((e) => {
                    const t = e(Le).trim();
                    return [{ id: "default-search", label: Be({ query: t }), Icon: f.default, path: `/search?q=${encodeURIComponent(t)}&src=typed_query` }];
                });
            const Pe = (0, r.cn)((e) => e(et)[e(e(Qe))]),
                Qe = (0, r.cn)((e) => (e(et), (0, r.cn)(0))),
                We = (0, r.cn)(null, (e, t) => {
                    const n = e(et).length;
                    t(e(Qe), (e) => Math.min(e + 1, n - 1));
                }),
                Ge = (0, r.cn)(null, (e, t) => {
                    e(et).length;
                    t(e(Qe), (e) => Math.max(e - 1, 0));
                }),
                Xe = (0, k.xu)((e) => (0, r.cn)((t) => t(Pe)?.id === e)),
                Ye = (0, r.cn)((e) => e(et).reduce((e, t, n) => (e.set(t.id, n), e), new Map())),
                Je = (0, k.xu)((e) =>
                    (0, r.cn)(null, (t, n) => {
                        const i = t(Ye).get(e),
                            l = t(et);
                        void 0 !== i && i >= 0 && i < l.length && n(t(Qe), i);
                    }),
                ),
                et = (0, r.cn)((e) => e(ze).flatMap((e) => (e.subItems ? (e.path ? [e, ...e.subItems] : e.subItems) : e)));
            var tt = n(187669);
            const nt = (0, r.cn)(null, (e, t, n, i) => {
                n.scribe(
                    (function (e) {
                        return { component: "command-center", element: e, action: "submit" };
                    })(i),
                );
            });
            var it = n(815604);
            const lt = (0, h.X)((e) =>
                    (0, r.cn)(null, (t, n, i) => {
                        const l = (0, it.k)(i);
                        if (l === (it.m ? "m+k" : "c+k") || "Escape" === l) n(_._K);
                        else if ("ArrowDown" === l || "c+n" === l) n(We), i.preventDefault();
                        else if ("ArrowUp" === l || "c+p" === l) n(Ge), i.preventDefault();
                        else if ("Enter" === l) {
                            const l = t(Pe);
                            n(at, e, l), i.preventDefault();
                        }
                    }),
                ),
                at = (0, r.cn)(null, (e, t, n, i) => {
                    const l = i?.path;
                    i && l && (t(_._K), t(Le, ""), t(nt, n, i.id), "function" == typeof l ? l() : v.default.push(l));
                });
            function rt({ resultId: e }) {
                const t = (0, a.Dv)(Le),
                    n = (0, a.b9)(ot),
                    i = (0, b.Z)(),
                    r = (0, a.b9)(lt(i)),
                    o = (0, a.Dv)(Pe)?.id;
                return l.createElement(d.Z, { Icon: f.default, appTextSize: "title4", ariaActiveDescendant: void 0 !== o ? pt(e, o) : "", ariaAutocomplete: "list", ariaControls: e, ariaExpanded: !0, ariaRole: "combobox", autoFocus: !0, onChange: n, onKeyDown: r, placeholder: "Search", style: bt.input, styleType: "selection", value: t });
            }
            const ot = (0, r.cn)(null, (e, t, n) => {
                    t(Le, n.target.value);
                }),
                st = "Results";
            function dt({ id: e }) {
                const t = (0, a.Dv)(ze);
                return l.createElement(
                    o.Z,
                    { "aria-label": st, id: e, role: "listbox", style: bt.results },
                    t.map((t) => l.createElement(ct, { item: t, key: t.id, resultId: e })),
                );
            }
            const ct = l.memo(function ({ item: e, resultId: t }) {
                    const n = (0, a.Dv)(Xe(e.id)),
                        r = (0, a.b9)(Je(e.id)),
                        s = mt(n),
                        {
                            handlers: { ref: d, ...m },
                        } = (0, c.x)({
                            onHoverIn: () => {
                                r();
                            },
                        }),
                        f = p(d, s),
                        v = (0, b.Z)(),
                        _ = (0, a.b9)(at),
                        g = l.useCallback(() => {
                            _(v, e);
                        }, [v, _, e]);
                    return l.createElement(
                        l.Fragment,
                        null,
                        l.createElement(o.Z, (0, i.Z)({ "aria-selected": n, id: pt(t, e.id), onClick: g, ref: f, style: e.path ? (n ? bt.selectedResultItem : bt.resultItem) : bt.resultItemHeader }, m), l.createElement(u.ZP, (0, i.Z)({ size: "title4" }, e.path ? {} : { withUnderline: !0, weight: "bold" }), l.createElement(e.Icon, { style: bt.icon }), e.label)),
                        e.subItems?.map((e) => l.createElement(ut, { key: e.id, resultId: t, subItem: e })),
                    );
                }),
                ut = l.memo(function ({ resultId: e, subItem: t }) {
                    const n = (0, a.Dv)(Xe(t.id)),
                        r = (0, a.b9)(Je(t.id)),
                        s = mt(n),
                        {
                            handlers: { ref: d, ...m },
                        } = (0, c.x)({
                            onHoverIn: () => {
                                r();
                            },
                        }),
                        f = p(d, s),
                        v = (0, b.Z)(),
                        _ = (0, a.b9)(at),
                        g = l.useCallback(() => {
                            _(v, t);
                        }, [v, _, t]);
                    return l.createElement(o.Z, (0, i.Z)({ "aria-selected": n, id: pt(e, t.id), onClick: g, ref: f, style: n ? bt.selectedResultItem : bt.resultItem }, m), l.createElement(u.ZP, { size: "title4" }, l.createElement(t.Icon, { style: bt.hiddenIcon }), t.label));
                });
            function mt(e) {
                const t = l.useRef(null);
                return (
                    l.useEffect(() => {
                        const n = t.current;
                        n &&
                            e &&
                            ((function (e) {
                                const t = ft(e);
                                if (!t) return !0;
                                const n = e.getBoundingClientRect(),
                                    i = t.getBoundingClientRect();
                                return n.top >= i.top && n.bottom <= i.bottom;
                            })(n) ||
                                n.scrollIntoView({ block: "nearest" }));
                    }, [e]),
                    t
                );
            }
            function ft(e) {
                const t = e.parentElement;
                if (t && t instanceof HTMLElement) return t.scrollHeight > t.clientHeight ? t : ft(t);
            }
            function pt(e, t) {
                return `${e}-${t}`;
            }
            const bt = m.default.create((e) => {
                    const t = { backdropFilter: "blur(24px)", width: 600 * e.scaleMultiplier, backgroundColor: e.colors.activeFaintGray, boxShadow: e.boxShadows.medium, maxWidth: "100%", position: "fixed", top: "25%", left: "50%", transform: "translateX(-50%)", borderRadius: e.borderRadii.large, contain: "paint" },
                        n = { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space2, cursor: "pointer" },
                        i = { minWidth: e.spaces.space32, marginEnd: e.spaces.space12 };
                    return { commandCenter: t, commandCenterMobile: { ...t, top: e.spaces.space8 }, mainRow: { flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, input: {}, resultItem: n, icon: i, hiddenIcon: { ...i, opacity: 0 }, selectedResultItem: { ...n, backgroundColor: e.colors.primary }, resultItemHeader: { ...n, cursor: "auto", paddingTop: e.spaces.space8 }, results: { maxHeight: "50vh", overflowY: "auto" } };
                }),
                vt = function () {
                    !(function () {
                        const e = (0, g.xO)();
                        l.useEffect(() => {
                            function t() {
                                e.set(_._K);
                            }
                            function n(e) {
                                "Escape" === (0, it.k)(e) && t();
                            }
                            return (
                                window.addEventListener("click", t, !0),
                                window.addEventListener("keydown", n, !0),
                                () => {
                                    window.removeEventListener("click", t, !0), window.removeEventListener("keydown", n, !0);
                                }
                            );
                        }, [e]);
                    })(),
                        (function () {
                            const e = (0, b.Z)();
                            (0, tt.q)(() => {
                                e.scribe({ component: "command-center", action: "open" });
                            });
                        })();
                    const e = (0, s.tj)(),
                        t = l.useId();
                    return l.createElement(o.Z, { style: e ? bt.commandCenter : bt.commandCenterMobile }, l.createElement(o.Z, { style: bt.mainRow }, l.createElement(rt, { resultId: t })), l.createElement(dt, { id: t }));
                };
        },
        16222: (e, t, n) => {
            function i(e, t) {
                try {
                    return e();
                } catch (e) {
                    return t(e);
                }
            }
            n.d(t, { o: () => i });
        },
        477403: (e, t, n) => {
            n.d(t, { eY: () => m, si: () => _, vC: () => u });
            n(543673), n(240753), n(128399);
            var i = n(395337),
                l = n(202784),
                a = (n(585488), n(516951)),
                r = n(952793),
                o = n(16222),
                s = n(125363),
                d = n(919022),
                c = n(535338);
            function u(e) {
                return (0, s.v9)(m);
            }
            function m(e) {
                return (function (e) {
                    if (!e) return;
                    const t = (0, o.o)(() => new URL(e), a.Z);
                    if (!t || !f.includes(t.host)) return;
                    const n = t.pathname.slice(1).toLowerCase();
                    return p[n];
                })(d.ZP.selectViewerUser(e)?.highlightedLabel?.url?.url);
            }
            const f = ["twitter.com", "x.com"],
                p = { xai: "1661523610111193088" },
                b = Object.values(p),
                v = i.Z;
            function _() {
                const e = (0, c.p)(v, {}),
                    t = (0, r.hC)("spaces_conference_enabled");
                return l.useMemo(() => {
                    const n = e.affiliations?.affiliated_account_ids_results,
                        i = (
                            n?.flatMap(({ rest_id: e, result: t }) => {
                                if ("User" !== t?.__typename) return [];
                                return [{ name: t.core.name, id: e }];
                            }) ?? []
                        ).filter(({ id: e }) => b.includes(e));
                    return t && !i.some(({ id: e }) => "783214" === e) ? [{ id: "783214", name: "X" }, ...i] : i;
                }, [e.affiliations?.affiliated_account_ids_results, t]);
            }
        },
        839: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                l = n(890601),
                a = n(783427),
                r = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        197318: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                l = n(890601),
                a = n(783427),
                r = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M8.7 2.4c.7-.6 1.5-1 2.3-1.4.5-.2 1.1-.3 1.7-.3.4 0 .8.1 1.1.3s.7.4.9.7c.2.3.3.6.4 1 .1.4.1.7 0 1.1-.1.5-.2 1-.4 1.4-.4.8-.8 1.5-1.3 2.2-1.8 2.8-3.9 5.1-5.7 7.7-.4.6-.9 1.3-1.3 1.9-.2.3-.4.6-.6 1.1-.3.6.2.8.8.5 2.3-1.1 10.3-11.2 12.8-9 .3.3 1.7 1.5-1.3 5.8-.4.6-.7 1.1-1.1 1.6-.5.7-1.1 1.5-1.6 2.3-.4.6-.7 1.2-1 1.9-.1.2-.2.6 0 .8.4.4 1.9-.7 3.7-2.4l3.2-3.2c.5-.5 1.2.1.7.7-1.6 1.9-5.5 6.4-7.5 6.3-.4 0-.7-.1-1-.3s-.5-.5-.6-.8c-.1-.2-.2-.7.1-1.5.3-.8.6-1.6 1.1-2.3.5-.8 1-1.7 1.5-2.4.3-.5.7-1.1 1-1.6.3-.5.8-1.4 1.2-2 .2-.3.6-.9.2-1.2-.2-.2-.5-.2-1.3.6 0 0-6.6 6.7-9 8.4-1.3.9-2.8 1.2-3.6.4-1-.9-1.6-2.5 1.5-6.4 3.1-3.8 6.5-8.7 6.8-9.6.1-.2.1-.4.1-.5.1-.5-.5-.9-1-.7-.3.2-.8.5-1.6 1.2-2.3 2-4.3 4.3-6.1 6.8-.1.2-.3.3-.5.4s-.4.2-.6.2c-.4.1-.8-.1-1.2-.3-.3-.2-.5-.6-.6-1v-.6c.1-.2.1-.4.3-.5 2.7-2.9 5-5.2 7.5-7.3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        297896: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                l = n(890601),
                a = n(783427),
                r = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5V16h2v3.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V8H4V4.5zm6.95 3.04L15.42 12l-4.47 4.46-1.41-1.42L11.58 13H2v-2h9.58L9.54 8.96l1.41-1.42z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        452693: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                l = n(890601),
                a = n(783427),
                r = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        662678: (e, t, n) => {
            n.d(t, { G: () => l, Z: () => i });
            n(136728);
            const i = function (e, t) {
                return l(e, t);
            };
            function l(e, t) {
                return e.reduce(
                    (n, i, l) => {
                        const a = t ? t(i, l, e) : !!i;
                        return a && n[0].push(i), !a && n[1].push(i), n;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.CommandCenter.cf5d70ba.js.map
