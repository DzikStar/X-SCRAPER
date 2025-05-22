"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.CommandCenter"],
    {
        395337: (e, n, t) => {
            t.d(n, { Z: () => r });
            var i,
                l,
                a,
                s,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (a = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [i, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [a], storageKey: null }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            o.hash = "42f499bfb2697230967b662ad70f78f8";
            const r = o;
        },
        314644: (e, n, t) => {
            t.r(n), t.d(n, { default: () => vn });
            var i = t(807896),
                l = t(202784),
                a = t(400752),
                s = t(565058),
                o = t(325686),
                r = t(708852),
                d = t(371344),
                c = t(466792),
                u = t(731708),
                m = t(392237),
                f = t(178519);
            function p(...e) {
                return l.useCallback(
                    (n) => {
                        for (const t of e) null != t && ("function" == typeof t ? t(n) : (t.current = n));
                    },
                    [...e],
                );
            }
            var b = t(725405),
                _ = (t(136728), t(840590)),
                v = t(874627),
                g = t(536387),
                k = t(811322),
                h = t(987809),
                w = t(332920),
                y = t.n(w),
                I = t(698891),
                D = t(459679),
                T = t(420182),
                C = t(390387),
                M = t(76920),
                E = t(688715),
                S = t(348256),
                R = t(956272),
                x = t(684869),
                Z = t(717160),
                L = t(707570),
                F = t(1753),
                K = t(625271),
                A = t(883069),
                N = t(279849),
                $ = t(197318),
                z = t(689582),
                U = t(256260),
                q = t(511323),
                H = t(80361),
                j = t(856151),
                V = t(53674),
                O = t(520913),
                P = t(297896),
                Q = t(175564),
                W = t(748138),
                B = t(68290),
                G = t(593875),
                X = t(839),
                Y = t(720930),
                J = t(42134),
                ee = t(484633),
                ne = t(457566),
                te = t(655352),
                ie = t(466036),
                le = t(919022),
                ae = t(477403);
            const se = y().a15648a4,
                oe = y().i3145aa0,
                re = y().cdf89b84,
                de = y().i83d4f14,
                ce = y().b0041756,
                ue = y().ae1bbb26,
                me = y().d299431c,
                fe = y().fa98627a,
                pe = y().fd442790,
                be = y().e0cb0c72,
                _e = y().j087774e,
                ve = y().e2eef3c2,
                ge = y().b55d8a78,
                ke = y().h02a6fe6,
                he = y().f75d1806,
                we = y().j34ad558,
                ye = y().a5a30af0,
                Ie = y().b007440a,
                De = y().c818c60c,
                Te = y().ha8209bc,
                Ce = y().a2f81050,
                Me = y().h5860a68,
                Ee = y().eb75875e,
                Se = y().fcf3e54c,
                Re = y().ded416b0,
                xe = y().j0e2cfa8,
                Ze = (0, s.cn)((e) => {
                    const n = e(T.qc).getState(),
                        t = le.ZP.selectViewerUser(n)?.screen_name,
                        { acceptedIds: i, ids: l } = ie.sC(n),
                        a = l.length - i.length,
                        s = e(T.f0),
                        o = e(T.TD),
                        r = { icon: S.default, label: Te, link: "/home", id: "home" },
                        d = { icon: R.default, label: Se, link: "/explore", id: "explore" },
                        c = s.isTrue("subscriptions_inapp_grok_upsell_enabled") || o.isTrueAndEnabled("subscriptions_inapp_grok") ? { icon: ne.x1, label: Me, link: "/i/grok", id: "grok" } : void 0,
                        u = { icon: x.default, label: Ee, link: "/notifications", id: "notifications" },
                        m = { icon: Z.default, label: Ce, link: "/messages", id: "messages" },
                        f = s.isTrue("voice_rooms_discovery_page_enabled") ? { icon: L.default, label: Re, link: "/i/spaces", id: "spaces" } : void 0,
                        p = { icon: F.default, label: ye, link: "/compose/articles", id: "article_composer" },
                        b = { icon: K.default, label: se, link: "/i/communitynotes", id: "birdwatch" },
                        _ = { icon: A.default, label: oe, link: "/i/bookmarks", id: "bookmarks_overflow_item" },
                        v = { icon: N.default, label: re, link: "/i/branded_likes_preview", id: "branded_likes_preview_overflow_item" },
                        g = ($.default, t ? { icon: z.default, label: ce, link: `/${t}/lists`, id: "lists_overflow_item" } : void 0),
                        k = { badgeCount: a, icon: U.default, label: de, link: "/follower_requests", id: "follower_requests_overflow_item" },
                        h = t ? { icon: q.default, label: fe, link: `/${t}`, id: "profile_overflow_item" } : void 0,
                        w = { icon: H.default, label: "Money", link: "/i/xpayments", id: "payments_overflow_item" },
                        y = { icon: j.default, label: _e, link: "/i/coins", id: "twitter_coins" },
                        D = { icon: O.default, label: he, link: "/i/premium", id: "premium_hub" },
                        M = { label: ue, link: "/logout", icon: P.default, id: "logout_overflow_item" },
                        Ze = { icon: Q.default, label: be, link: (0, E.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), id: "twitter_ads_item" },
                        Le = s.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Fe = { icon: W.default, label: me, link: Le ? "/i/monetization" : "/settings/monetization", id: "monetization" },
                        Ke = { icon: I.default, label: pe, link: "/settings", id: "settings_overflow_item" },
                        Ae = { label: s.isTrue("subscriptions_upsells_vo_nav_decoration_enabled") ? xe : ve, id: "verified_organization_signup_item", link: "/i/verified-orgs-signup", icon: B.default },
                        Ne = { label: ve, id: "verified_organization_dashboard_item", link: "/i/verified", icon: B.default },
                        $e = { label: ge, id: "create_space_item", link: "/i/spaces/start", icon: L.default },
                        ze = t ? { label: ke, id: "communities_item", link: `/${t}/communities`, icon: G.default } : void 0,
                        Ue = (0, ae.eY)(n),
                        qe = s.isTrue("spaces_conference_enabled") || !!Ue,
                        He = { label: "Conferences", id: "conferences_item", link: "/i/conferences", icon: X.default },
                        je = { label: Ie, id: "jobs_item", link: "/jobs", icon: Y.default },
                        Ve = o.isAnyPremiumSubscriber(),
                        Oe = Ve,
                        Pe = s.isTrue("payments_enabled"),
                        Qe = s.isTrue("subscriptions_sign_up_enabled") && !Ve,
                        We = o.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, te.ZP)(),
                        Be = s.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        Ge = o.isVerifiedOrg(),
                        Xe = s.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        Ye = (0, C.Lz)(n),
                        Je = s.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Ye,
                        en = i.length,
                        nn = !Ve && s.isTrue("rweb_analytics_nav_item_enabled"),
                        tn = s.isTrue("recruiting_global_jobs_search_enabled"),
                        ln = e(J.cI),
                        an = e(J.K$),
                        sn = s.isTrue("voice_rooms_web_space_creation") && ln !== ee.Q.host && an?.type !== ee.W.space,
                        on = s.isTrue("c9s_enabled"),
                        rn = s.isTrue("branded_like_preview_enabled");
                    return [
                        r,
                        d,
                        c,
                        u,
                        m,
                        f,
                        h,
                        Oe ? D : void 0,
                        Pe ? w : void 0,
                        Qe
                            ? (() => {
                                  const e = s.isTrue("subscriptions_premium_experiment_nav_text");
                                  return { icon: O.default, label: e ? we : he, link: "/i/premium_sign_up", id: "verified_overflow_item" };
                              })()
                            : void 0,
                        g,
                        _,
                        We ? p : void 0,
                        Be ? (Ge ? Ne : Ae) : void 0,
                        Xe ? y : void 0,
                        Je ? b : void 0,
                        a || en ? k : void 0,
                        nn ? { icon: V.default, label: De, link: "/i/account_analytics", id: "analytics" } : void 0,
                        Fe,
                        Ze,
                        tn ? je : void 0,
                        qe ? He : void 0,
                        sn ? $e : void 0,
                        Ke,
                        M,
                        on ? ze : void 0,
                        void 0,
                        rn ? v : void 0,
                    ].filter(Boolean);
                }),
                Le = (0, s.cn)(""),
                Fe = (0, s.cn)((e) => [...e(Ae), ...e(Ne), ...e(je), ...e(Pe)]),
                Ke = (0, s.cn)((e) =>
                    e(Le)
                        .split(/ +/g)
                        .filter(Boolean)
                        .map((e) => $e(e.toLowerCase())),
                ),
                Ae = (0, s.cn)((e) => {
                    const n = e(Ze),
                        t = e(Ke);
                    return (0, D.Z)(n, ({ icon: e, id: n, label: i, link: l }) => (t.every((e) => $e(i.toLowerCase()).includes(e)) ? { id: `nav-${n}`, label: i, path: l, Icon: e } : void 0));
                }),
                Ne = (0, s.cn)((e) => {
                    const n = e(ze),
                        t = e(Ke);
                    return (0, D.Z)(n, (e) => {
                        const n = (0, D.Z)(e.items, (e) => {
                            if (t.every((n) => e.terms.some((e) => e.includes(n)))) return { id: `settings-${e.id}-${e.title}`, label: e.title, path: e.path, Icon: I.default };
                        });
                        return t.every((n) => e.terms.some((e) => e.includes(n))) ? { id: `settings-${e.id}-${e.title}`, label: e.title, path: e.path, subItems: n, Icon: I.default } : n.length ? { id: `settings-${e.id}-${e.title}`, label: e.title, subItems: n, Icon: I.default } : null;
                    });
                });
            function $e(e) {
                return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            }
            const ze = (0, s.cn)((e) => {
                    const n = e(Ue);
                    return (0, D.Z)(n, (e) => {
                        if (e.isSearchable)
                            return {
                                terms: [e.title, ...e.synonyms].map((e) => $e(e.toLowerCase())),
                                id: `settings-${e.id}`,
                                title: e.title,
                                path: e.path,
                                items: (0, D.Z)(e.items, (e) => {
                                    if (e.isSearchable) return { id: `settings-${e.id}`, title: e.title, path: e.path, terms: [e.title, ...e.synonyms].map((e) => $e(e.toLowerCase())) };
                                }),
                            };
                    });
                }),
                Ue = (0, s.cn)((e) => {
                    const n = e(T.qc).getState(),
                        t = (0, C.Lz)(n),
                        i = (0, C.vd)(n),
                        l = e(T.f0),
                        a = e(T.TD);
                    return (0, M.VA)({ isDelegate: t, delegateRole: i, featureSwitches: l, userClaims: a });
                });
            const qe = (0, g.K9)((e) =>
                    Promise.all([t.e("modules.audio-6107ac1a"), t.e("modules.audio-b953418a"), t.e("modules.audio-7c51e6a7"), t.e("modules.audio-04db59e9"), t.e("modules.audio-76583d6c"), t.e("modules.audio-b7a8a5fb"), t.e("modules.audio-51f6e793"), t.e("modules.audio-e019dbda"), t.e("modules.audio-262c94d4"), t.e("modules.audio-c6fe4ea4"), t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"), t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"), t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"), t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"), t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"), t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"), t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"), t.e("ondemand.devItems")])
                        .then(t.bind(t, 825630))
                        .then(({ devItemsAtom: e }) => e),
                ),
                He = (0, s.cn)((e) => (e(qe), e(e(qe.resolved) ?? (0, s.cn)(() => [])))),
                je =
                    ((Ve = () => He),
                    (0, s.cn)((e) => {
                        const n = e(Ve()),
                            t = e(Ke);
                        return n.filter((e) => t.every((n) => $e(e.label.toLowerCase()).includes(n)));
                    }));
            var Ve;
            const Oe = y().fa9adac1,
                Pe = (0, s.cn)((e) => {
                    const n = e(Le).trim();
                    return [{ id: "default-search", label: Oe({ query: n }), Icon: f.default, path: `/search?q=${encodeURIComponent(n)}&src=typed_query` }];
                });
            const Qe = (0, s.cn)((e) => e(en)[e(e(We))]),
                We = (0, s.cn)((e) => (e(en), (0, s.cn)(0))),
                Be = (0, s.cn)(null, (e, n) => {
                    const t = e(en).length;
                    n(e(We), (e) => Math.min(e + 1, t - 1));
                }),
                Ge = (0, s.cn)(null, (e, n) => {
                    e(en).length;
                    n(e(We), (e) => Math.max(e - 1, 0));
                }),
                Xe = (0, h.xu)((e) => (0, s.cn)((n) => n(Qe)?.id === e)),
                Ye = (0, s.cn)((e) => e(en).reduce((e, n, t) => (e.set(n.id, t), e), new Map())),
                Je = (0, h.xu)((e) =>
                    (0, s.cn)(null, (n, t) => {
                        const i = n(Ye).get(e),
                            l = n(en);
                        void 0 !== i && i >= 0 && i < l.length && t(n(We), i);
                    }),
                ),
                en = (0, s.cn)((e) => e(Fe).flatMap((e) => (e.subItems ? (e.path ? [e, ...e.subItems] : e.subItems) : e)));
            var nn = t(187669);
            const tn = (0, s.cn)(null, (e, n, t, i) => {
                t.scribe(
                    (function (e) {
                        return { component: "command-center", element: e, action: "submit" };
                    })(i),
                );
            });
            var ln = t(815604);
            const an = (0, k.X)((e) =>
                    (0, s.cn)(null, (n, t, i) => {
                        const l = (0, ln.k)(i);
                        if (l === (ln.m ? "m+k" : "c+k") || "Escape" === l) t(v._K);
                        else if ("ArrowDown" === l || "c+n" === l) t(Be), i.preventDefault();
                        else if ("ArrowUp" === l || "c+p" === l) t(Ge), i.preventDefault();
                        else if ("Enter" === l) {
                            const l = n(Qe);
                            t(sn, e, l), i.preventDefault();
                        }
                    }),
                ),
                sn = (0, s.cn)(null, (e, n, t, i) => {
                    const l = i?.path;
                    i && l && (n(v._K), n(Le, ""), n(tn, t, i.id), "function" == typeof l ? l() : _.default.push(l));
                });
            function on({ resultId: e }) {
                const n = (0, a.Dv)(Le),
                    t = (0, a.b9)(rn),
                    i = (0, b.Z)(),
                    s = (0, a.b9)(an(i)),
                    o = (0, a.Dv)(Qe)?.id;
                return l.createElement(d.Z, { Icon: f.default, appTextSize: "title4", ariaActiveDescendant: void 0 !== o ? bn(e, o) : "", ariaAutocomplete: "list", ariaControls: e, ariaExpanded: !0, ariaRole: "combobox", autoFocus: !0, onChange: t, onKeyDown: s, placeholder: "Search", style: _n.input, styleType: "selection", value: n });
            }
            const rn = (0, s.cn)(null, (e, n, t) => {
                    n(Le, t.target.value);
                }),
                dn = "Results";
            function cn({ id: e }) {
                const n = (0, a.Dv)(Fe);
                return l.createElement(
                    o.Z,
                    { "aria-label": dn, id: e, role: "listbox", style: _n.results },
                    n.map((n) => l.createElement(un, { item: n, key: n.id, resultId: e })),
                );
            }
            const un = l.memo(function ({ item: e, resultId: n }) {
                    const t = (0, a.Dv)(Xe(e.id)),
                        s = (0, a.b9)(Je(e.id)),
                        r = fn(t),
                        {
                            handlers: { ref: d, ...m },
                        } = (0, c.x)({
                            onHoverIn: () => {
                                s();
                            },
                        }),
                        f = p(d, r),
                        _ = (0, b.Z)(),
                        v = (0, a.b9)(sn),
                        g = l.useCallback(() => {
                            v(_, e);
                        }, [_, v, e]);
                    return l.createElement(
                        l.Fragment,
                        null,
                        l.createElement(o.Z, (0, i.Z)({ "aria-selected": t, id: bn(n, e.id), onClick: g, ref: f, style: e.path ? (t ? _n.selectedResultItem : _n.resultItem) : _n.resultItemHeader }, m), l.createElement(u.ZP, (0, i.Z)({ size: "title4" }, e.path ? {} : { withUnderline: !0, weight: "bold" }), l.createElement(e.Icon, { style: _n.icon }), e.label)),
                        e.subItems?.map((e) => l.createElement(mn, { key: e.id, resultId: n, subItem: e })),
                    );
                }),
                mn = l.memo(function ({ resultId: e, subItem: n }) {
                    const t = (0, a.Dv)(Xe(n.id)),
                        s = (0, a.b9)(Je(n.id)),
                        r = fn(t),
                        {
                            handlers: { ref: d, ...m },
                        } = (0, c.x)({
                            onHoverIn: () => {
                                s();
                            },
                        }),
                        f = p(d, r),
                        _ = (0, b.Z)(),
                        v = (0, a.b9)(sn),
                        g = l.useCallback(() => {
                            v(_, n);
                        }, [_, v, n]);
                    return l.createElement(o.Z, (0, i.Z)({ "aria-selected": t, id: bn(e, n.id), onClick: g, ref: f, style: t ? _n.selectedResultItem : _n.resultItem }, m), l.createElement(u.ZP, { size: "title4" }, l.createElement(n.Icon, { style: _n.hiddenIcon }), n.label));
                });
            function fn(e) {
                const n = l.useRef(null);
                return (
                    l.useEffect(() => {
                        const t = n.current;
                        t &&
                            e &&
                            ((function (e) {
                                const n = pn(e);
                                if (!n) return !0;
                                const t = e.getBoundingClientRect(),
                                    i = n.getBoundingClientRect();
                                return t.top >= i.top && t.bottom <= i.bottom;
                            })(t) ||
                                t.scrollIntoView({ block: "nearest" }));
                    }, [e]),
                    n
                );
            }
            function pn(e) {
                const n = e.parentElement;
                if (n && n instanceof HTMLElement) return n.scrollHeight > n.clientHeight ? n : pn(n);
            }
            function bn(e, n) {
                return `${e}-${n}`;
            }
            const _n = m.default.create((e) => {
                    const n = { backdropFilter: "blur(24px)", width: 600 * e.scaleMultiplier, backgroundColor: e.colors.activeFaintGray, boxShadow: e.boxShadows.medium, maxWidth: "100%", position: "fixed", top: "25%", left: "50%", transform: "translateX(-50%)", borderRadius: e.borderRadii.large, contain: "paint" },
                        t = { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space2, cursor: "pointer" },
                        i = { minWidth: e.spaces.space32, marginEnd: e.spaces.space12 };
                    return { commandCenter: n, commandCenterMobile: { ...n, top: e.spaces.space8 }, mainRow: { flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, input: {}, resultItem: t, icon: i, hiddenIcon: { ...i, opacity: 0 }, selectedResultItem: { ...t, backgroundColor: e.colors.primary }, resultItemHeader: { ...t, cursor: "auto", paddingTop: e.spaces.space8 }, results: { maxHeight: "50vh", overflowY: "auto" } };
                }),
                vn = function () {
                    !(function () {
                        const e = (0, g.xO)();
                        l.useEffect(() => {
                            function n() {
                                e.set(v._K);
                            }
                            function t(e) {
                                "Escape" === (0, ln.k)(e) && n();
                            }
                            return (
                                window.addEventListener("click", n, !0),
                                window.addEventListener("keydown", t, !0),
                                () => {
                                    window.removeEventListener("click", n, !0), window.removeEventListener("keydown", t, !0);
                                }
                            );
                        }, [e]);
                    })(),
                        (function () {
                            const e = (0, b.Z)();
                            (0, nn.q)(() => {
                                e.scribe({ component: "command-center", action: "open" });
                            });
                        })();
                    const e = (0, r.tj)(),
                        n = l.useId();
                    return l.createElement(o.Z, { style: e ? _n.commandCenter : _n.commandCenterMobile }, l.createElement(o.Z, { style: _n.mainRow }, l.createElement(on, { resultId: n })), l.createElement(cn, { id: n }));
                };
        },
        16222: (e, n, t) => {
            function i(e, n) {
                try {
                    return e();
                } catch (e) {
                    return n(e);
                }
            }
            t.d(n, { o: () => i });
        },
        477403: (e, n, t) => {
            t.d(n, { eY: () => m, si: () => v, vC: () => u });
            t(543673), t(240753), t(128399);
            var i = t(395337),
                l = t(202784),
                a = (t(585488), t(516951)),
                s = t(952793),
                o = t(16222),
                r = t(125363),
                d = t(919022),
                c = t(535338);
            function u(e) {
                return (0, r.v9)(m);
            }
            function m(e) {
                return (function (e) {
                    if (!e) return;
                    const n = (0, o.o)(() => new URL(e), a.Z);
                    if (!n || !f.includes(n.host)) return;
                    const t = n.pathname.slice(1).toLowerCase();
                    return p[t];
                })(d.ZP.selectViewerUser(e)?.highlightedLabel?.url?.url);
            }
            const f = ["twitter.com", "x.com"],
                p = { xai: "1661523610111193088" },
                b = Object.values(p),
                _ = i.Z;
            function v() {
                const e = (0, c.p)(_, {}),
                    n = (0, s.hC)("spaces_conference_enabled");
                return l.useMemo(() => {
                    const t = e.affiliations?.affiliated_account_ids_results,
                        i = (
                            t?.flatMap(({ rest_id: e, result: n }) => {
                                if ("User" !== n?.__typename) return [];
                                return [{ name: n.core.name, id: e }];
                            }) ?? []
                        ).filter(({ id: e }) => b.includes(e));
                    return n && !i.some(({ id: e }) => "783214" === e) ? [{ id: "783214", name: "X" }, ...i] : i;
                }, [e.affiliations?.affiliated_account_ids_results, n]);
            }
        },
        662678: (e, n, t) => {
            t.d(n, { G: () => l, Z: () => i });
            t(136728);
            const i = function (e, n) {
                return l(e, n);
            };
            function l(e, n) {
                return e.reduce(
                    (t, i, l) => {
                        const a = n ? n(i, l, e) : !!i;
                        return a && t[0].push(i), !a && t[1].push(i), t;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.CommandCenter.0ab012da.js.map
