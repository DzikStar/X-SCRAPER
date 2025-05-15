"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.CommandCenter"],
    {
        395337: (e, n, t) => {
            t.d(n, { Z: () => o });
            var i,
                l,
                a,
                s,
                r = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ kind: "RequiredField", field: (a = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [i, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [a], storageKey: null }, { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: null }] },
                    params: { id: "lre2gA0kvs0gf4XRNei6Qw", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            r.hash = "10c9183ce406af8e8ffa48a4cfd593b4";
            const o = r;
        },
        314644: (e, n, t) => {
            t.r(n), t.d(n, { default: () => vn });
            var i = t(807896),
                l = t(202784),
                a = t(400752),
                s = t(565058),
                r = t(325686),
                o = t(708852),
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
                h = t(811322),
                k = t(987809),
                y = t(674132),
                w = t.n(y),
                I = t(698891),
                D = t(459679),
                M = t(420182),
                T = t(390387),
                C = t(76920),
                E = t(688715),
                R = t(348256),
                Z = t(956272),
                S = t(684869),
                x = t(717160),
                L = t(707570),
                z = t(1753),
                F = t(625271),
                K = t(883069),
                A = t(279849),
                N = t(197318),
                $ = t(689582),
                H = t(256260),
                U = t(511323),
                q = t(80361),
                j = t(856151),
                V = t(53674),
                P = t(520913),
                O = t(297896),
                Q = t(175564),
                B = t(748138),
                W = t(68290),
                X = t(593875),
                Y = t(839),
                G = t(720930),
                J = t(42134),
                ee = t(484633),
                ne = t(457566),
                te = t(655352),
                ie = t(466036),
                le = t(919022),
                ae = t(477403);
            const se = w().a15648a4,
                re = w().i3145aa0,
                oe = w().cdf89b84,
                de = w().i83d4f14,
                ce = w().b0041756,
                ue = w().ae1bbb26,
                me = w().d299431c,
                fe = w().fa98627a,
                pe = w().fd442790,
                be = w().e0cb0c72,
                _e = w().j087774e,
                ve = w().e2eef3c2,
                ge = w().b55d8a78,
                he = w().h02a6fe6,
                ke = w().f75d1806,
                ye = w().j34ad558,
                we = w().a5a30af0,
                Ie = w().b007440a,
                De = w().c818c60c,
                Me = w().ha8209bc,
                Te = w().a2f81050,
                Ce = w().h5860a68,
                Ee = w().eb75875e,
                Re = w().fcf3e54c,
                Ze = w().ded416b0,
                Se = w().j0e2cfa8,
                xe = (0, s.cn)((e) => {
                    const n = e(M.qc).getState(),
                        t = le.ZP.selectViewerUser(n)?.screen_name,
                        { acceptedIds: i, ids: l } = ie.sC(n),
                        a = l.length - i.length,
                        s = e(M.f0),
                        r = e(M.TD),
                        o = { icon: R.default, label: Me, link: "/home", id: "home" },
                        d = { icon: Z.default, label: Re, link: "/explore", id: "explore" },
                        c = s.isTrue("subscriptions_inapp_grok_upsell_enabled") || r.isTrueAndEnabled("subscriptions_inapp_grok") ? { icon: ne.x1, label: Ce, link: "/i/grok", id: "grok" } : void 0,
                        u = { icon: S.default, label: Ee, link: "/notifications", id: "notifications" },
                        m = { icon: x.default, label: Te, link: "/messages", id: "messages" },
                        f = s.isTrue("voice_rooms_discovery_page_enabled") ? { icon: L.default, label: Ze, link: "/i/spaces", id: "spaces" } : void 0,
                        p = { icon: z.default, label: we, link: "/compose/articles", id: "article_composer" },
                        b = { icon: F.default, label: se, link: "/i/communitynotes", id: "birdwatch" },
                        _ = { icon: K.default, label: re, link: "/i/bookmarks", id: "bookmarks_overflow_item" },
                        v = { icon: A.default, label: oe, link: "/i/branded_likes_preview", id: "branded_likes_preview_overflow_item" },
                        g = (N.default, t ? { icon: $.default, label: ce, link: `/${t}/lists`, id: "lists_overflow_item" } : void 0),
                        h = { badgeCount: a, icon: H.default, label: de, link: "/follower_requests", id: "follower_requests_overflow_item" },
                        k = t ? { icon: U.default, label: fe, link: `/${t}`, id: "profile_overflow_item" } : void 0,
                        y = { icon: q.default, label: "Money", link: "/i/xpayments", id: "payments_overflow_item" },
                        w = { icon: j.default, label: _e, link: "/i/coins", id: "twitter_coins" },
                        D = { icon: P.default, label: ke, link: "/i/premium", id: "premium_hub" },
                        C = { label: ue, link: "/logout", icon: O.default, id: "logout_overflow_item" },
                        xe = { icon: Q.default, label: be, link: (0, E.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), id: "twitter_ads_item" },
                        Le = s.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        ze = { icon: B.default, label: me, link: Le ? "/i/monetization" : "/settings/monetization", id: "monetization" },
                        Fe = { icon: I.default, label: pe, link: "/settings", id: "settings_overflow_item" },
                        Ke = { label: s.isTrue("subscriptions_upsells_vo_nav_decoration_enabled") ? Se : ve, id: "verified_organization_signup_item", link: "/i/verified-orgs-signup", icon: W.default },
                        Ae = { label: ve, id: "verified_organization_dashboard_item", link: "/i/verified", icon: W.default },
                        Ne = { label: ge, id: "create_space_item", link: "/i/spaces/start", icon: L.default },
                        $e = t ? { label: he, id: "communities_item", link: `/${t}/communities`, icon: X.default } : void 0,
                        He = (0, ae.eY)(n),
                        Ue = s.isTrue("spaces_conference_enabled") || !!He,
                        qe = { label: "Conferences", id: "conferences_item", link: "/i/conferences", icon: Y.default },
                        je = { label: Ie, id: "jobs_item", link: "/jobs", icon: G.default },
                        Ve = r.isAnyPremiumSubscriber(),
                        Pe = Ve,
                        Oe = s.isTrue("payments_enabled"),
                        Qe = s.isTrue("subscriptions_sign_up_enabled") && !Ve,
                        Be = r.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, te.ZP)(),
                        We = s.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        Xe = r.isVerifiedOrg(),
                        Ye = s.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        Ge = (0, T.Lz)(n),
                        Je = s.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Ge,
                        en = i.length,
                        nn = !Ve && s.isTrue("rweb_analytics_nav_item_enabled"),
                        tn = s.isTrue("recruiting_global_jobs_search_enabled"),
                        ln = e(J.cI),
                        an = e(J.K$),
                        sn = s.isTrue("voice_rooms_web_space_creation") && ln !== ee.Q.host && an?.type !== ee.W.space,
                        rn = s.isTrue("c9s_enabled"),
                        on = s.isTrue("branded_like_preview_enabled");
                    return [
                        o,
                        d,
                        c,
                        u,
                        m,
                        f,
                        k,
                        Pe ? D : void 0,
                        Oe ? y : void 0,
                        Qe
                            ? (() => {
                                  const e = s.isTrue("subscriptions_premium_experiment_nav_text");
                                  return { icon: P.default, label: e ? ye : ke, link: "/i/premium_sign_up", id: "verified_overflow_item" };
                              })()
                            : void 0,
                        g,
                        _,
                        Be ? p : void 0,
                        We ? (Xe ? Ae : Ke) : void 0,
                        Ye ? w : void 0,
                        Je ? b : void 0,
                        a || en ? h : void 0,
                        nn ? { icon: V.default, label: De, link: "/i/account_analytics", id: "analytics" } : void 0,
                        ze,
                        xe,
                        tn ? je : void 0,
                        Ue ? qe : void 0,
                        sn ? Ne : void 0,
                        Fe,
                        C,
                        rn ? $e : void 0,
                        void 0,
                        on ? v : void 0,
                    ].filter(Boolean);
                }),
                Le = (0, s.cn)(""),
                ze = (0, s.cn)((e) => [...e(Ke), ...e(Ae), ...e(je), ...e(Oe)]),
                Fe = (0, s.cn)((e) =>
                    e(Le)
                        .split(/ +/g)
                        .filter(Boolean)
                        .map((e) => Ne(e.toLowerCase())),
                ),
                Ke = (0, s.cn)((e) => {
                    const n = e(xe),
                        t = e(Fe);
                    return (0, D.Z)(n, ({ icon: e, id: n, label: i, link: l }) => (t.every((e) => Ne(i.toLowerCase()).includes(e)) ? { id: `nav-${n}`, label: i, path: l, Icon: e } : void 0));
                }),
                Ae = (0, s.cn)((e) => {
                    const n = e($e),
                        t = e(Fe);
                    return (0, D.Z)(n, (e) => {
                        const n = (0, D.Z)(e.items, (e) => {
                            if (t.every((n) => e.terms.some((e) => e.includes(n)))) return { id: `settings-${e.id}-${e.title}`, label: e.title, path: e.path, Icon: I.default };
                        });
                        return t.every((n) => e.terms.some((e) => e.includes(n))) ? { id: `settings-${e.id}-${e.title}`, label: e.title, path: e.path, subItems: n, Icon: I.default } : n.length ? { id: `settings-${e.id}-${e.title}`, label: e.title, subItems: n, Icon: I.default } : null;
                    });
                });
            function Ne(e) {
                return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            }
            const $e = (0, s.cn)((e) => {
                    const n = e(He);
                    return (0, D.Z)(n, (e) => {
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
                He = (0, s.cn)((e) => {
                    const n = e(M.qc).getState(),
                        t = (0, T.Lz)(n),
                        i = (0, T.vd)(n),
                        l = e(M.f0),
                        a = e(M.TD);
                    return (0, C.VA)({ isDelegate: t, delegateRole: i, featureSwitches: l, userClaims: a });
                });
            const Ue = (0, g.K9)((e) =>
                    Promise.all([t.e("modules.audio-6107ac1a"), t.e("modules.audio-b953418a"), t.e("modules.audio-7c51e6a7"), t.e("modules.audio-04db59e9"), t.e("modules.audio-76583d6c"), t.e("modules.audio-b7a8a5fb"), t.e("modules.audio-51f6e793"), t.e("modules.audio-e019dbda"), t.e("modules.audio-262c94d4"), t.e("modules.audio-c6fe4ea4"), t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"), t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"), t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"), t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"), t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"), t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"), t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"), t.e("ondemand.devItems")])
                        .then(t.bind(t, 825630))
                        .then(({ devItemsAtom: e }) => e),
                ),
                qe = (0, s.cn)((e) => (e(Ue), e(e(Ue.resolved) ?? (0, s.cn)(() => [])))),
                je =
                    ((Ve = () => qe),
                    (0, s.cn)((e) => {
                        const n = e(Ve()),
                            t = e(Fe);
                        return n.filter((e) => t.every((n) => Ne(e.label.toLowerCase()).includes(n)));
                    }));
            var Ve;
            const Pe = w().fa9adac1,
                Oe = (0, s.cn)((e) => {
                    const n = e(Le).trim();
                    return [{ id: "default-search", label: Pe({ query: n }), Icon: f.default, path: `/search?q=${encodeURIComponent(n)}&src=typed_query` }];
                });
            const Qe = (0, s.cn)((e) => e(en)[e(e(Be))]),
                Be = (0, s.cn)((e) => (e(en), (0, s.cn)(0))),
                We = (0, s.cn)(null, (e, n) => {
                    const t = e(en).length;
                    n(e(Be), (e) => Math.min(e + 1, t - 1));
                }),
                Xe = (0, s.cn)(null, (e, n) => {
                    e(en).length;
                    n(e(Be), (e) => Math.max(e - 1, 0));
                }),
                Ye = (0, k.xu)((e) => (0, s.cn)((n) => n(Qe)?.id === e)),
                Ge = (0, s.cn)((e) => e(en).reduce((e, n, t) => (e.set(n.id, t), e), new Map())),
                Je = (0, k.xu)((e) =>
                    (0, s.cn)(null, (n, t) => {
                        const i = n(Ge).get(e),
                            l = n(en);
                        void 0 !== i && i >= 0 && i < l.length && t(n(Be), i);
                    }),
                ),
                en = (0, s.cn)((e) => e(ze).flatMap((e) => (e.subItems ? (e.path ? [e, ...e.subItems] : e.subItems) : e)));
            var nn = t(187669);
            const tn = (0, s.cn)(null, (e, n, t, i) => {
                t.scribe(
                    (function (e) {
                        return { component: "command-center", element: e, action: "submit" };
                    })(i),
                );
            });
            var ln = t(815604);
            const an = (0, h.X)((e) =>
                    (0, s.cn)(null, (n, t, i) => {
                        const l = (0, ln.k)(i);
                        if (l === (ln.m ? "m+k" : "c+k") || "Escape" === l) t(v._K);
                        else if ("ArrowDown" === l || "c+n" === l) t(We), i.preventDefault();
                        else if ("ArrowUp" === l || "c+p" === l) t(Xe), i.preventDefault();
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
            function rn({ resultId: e }) {
                const n = (0, a.Dv)(Le),
                    t = (0, a.b9)(on),
                    i = (0, b.Z)(),
                    s = (0, a.b9)(an(i)),
                    r = (0, a.Dv)(Qe)?.id;
                return l.createElement(d.Z, { Icon: f.default, appTextSize: "title4", ariaActiveDescendant: void 0 !== r ? bn(e, r) : "", ariaAutocomplete: "list", ariaControls: e, ariaExpanded: !0, ariaRole: "combobox", autoFocus: !0, onChange: t, onKeyDown: s, placeholder: "Search", style: _n.input, styleType: "selection", value: n });
            }
            const on = (0, s.cn)(null, (e, n, t) => {
                    n(Le, t.target.value);
                }),
                dn = "Results";
            function cn({ id: e }) {
                const n = (0, a.Dv)(ze);
                return l.createElement(
                    r.Z,
                    { "aria-label": dn, id: e, role: "listbox", style: _n.results },
                    n.map((n) => l.createElement(un, { item: n, key: n.id, resultId: e })),
                );
            }
            const un = l.memo(function ({ item: e, resultId: n }) {
                    const t = (0, a.Dv)(Ye(e.id)),
                        s = (0, a.b9)(Je(e.id)),
                        o = fn(t),
                        {
                            handlers: { ref: d, ...m },
                        } = (0, c.x)({
                            onHoverIn: () => {
                                s();
                            },
                        }),
                        f = p(d, o),
                        _ = (0, b.Z)(),
                        v = (0, a.b9)(sn),
                        g = l.useCallback(() => {
                            v(_, e);
                        }, [_, v, e]);
                    return l.createElement(
                        l.Fragment,
                        null,
                        l.createElement(r.Z, (0, i.Z)({ "aria-selected": t, id: bn(n, e.id), onClick: g, ref: f, style: e.path ? (t ? _n.selectedResultItem : _n.resultItem) : _n.resultItemHeader }, m), l.createElement(u.ZP, (0, i.Z)({ size: "title4" }, e.path ? {} : { withUnderline: !0, weight: "bold" }), l.createElement(e.Icon, { style: _n.icon }), e.label)),
                        e.subItems?.map((e) => l.createElement(mn, { key: e.id, resultId: n, subItem: e })),
                    );
                }),
                mn = l.memo(function ({ resultId: e, subItem: n }) {
                    const t = (0, a.Dv)(Ye(n.id)),
                        s = (0, a.b9)(Je(n.id)),
                        o = fn(t),
                        {
                            handlers: { ref: d, ...m },
                        } = (0, c.x)({
                            onHoverIn: () => {
                                s();
                            },
                        }),
                        f = p(d, o),
                        _ = (0, b.Z)(),
                        v = (0, a.b9)(sn),
                        g = l.useCallback(() => {
                            v(_, n);
                        }, [_, v, n]);
                    return l.createElement(r.Z, (0, i.Z)({ "aria-selected": t, id: bn(e, n.id), onClick: g, ref: f, style: t ? _n.selectedResultItem : _n.resultItem }, m), l.createElement(u.ZP, { size: "title4" }, l.createElement(n.Icon, { style: _n.hiddenIcon }), n.label));
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
                    const e = (0, o.tj)(),
                        n = l.useId();
                    return l.createElement(r.Z, { style: e ? _n.commandCenter : _n.commandCenterMobile }, l.createElement(r.Z, { style: _n.mainRow }, l.createElement(rn, { resultId: n })), l.createElement(cn, { id: n }));
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
                r = t(16222),
                o = t(125363),
                d = t(919022),
                c = t(535338);
            function u(e) {
                return (0, o.v9)(m);
            }
            function m(e) {
                return (function (e) {
                    if (!e) return;
                    const n = (0, r.o)(() => new URL(e), a.Z);
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
                                return [{ name: n.legacy.name, id: e }];
                            }) ?? []
                        ).filter(({ id: e }) => b.includes(e));
                    return n && !i.some(({ id: e }) => "783214" === e) ? [{ id: "783214", name: "X" }, ...i] : i;
                }, [e.affiliations?.affiliated_account_ids_results, n]);
            }
        },
        279849: (e, n, t) => {
            t.r(n), t.d(n, { default: () => o });
            var i = t(202784),
                l = t(890601),
                a = t(783427),
                s = t(347101);
            const r = (e = {}) => {
                const { direction: n } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M18.037 13.084c-.918 1.685-2.719 3.479-5.694 5.212l-.342.204-.343-.204c-2.976-1.733-4.777-3.527-5.696-5.212-.924-1.699-.958-3.303-.349-4.533.603-1.216 1.799-1.978 3.127-2.046 1.122-.061 2.289.381 3.261 1.366.971-.985 2.138-1.427 3.259-1.366 1.328.068 2.524.829 3.127 2.046.609 1.23.575 2.834-.349 4.533zM19.42 3.16l1.42 1.42-1.77 1.76-1.41-1.41 1.76-1.77zM13 .5h-2V3h2V.5zM.5 13H3v-2H.5v2zm2.66 6.42l1.42 1.42 1.76-1.77-1.41-1.41-1.77 1.76zM21 11v2h2.5v-2H21zM11 23.5h2V21h-2v2.5zm6.66-4.43l1.76 1.77 1.42-1.42-1.77-1.76-1.41 1.41zM6.34 4.93L4.58 3.16 3.16 4.58l1.77 1.76 1.41-1.41z" })) }, { writingDirection: n });
            };
            r.metadata = { width: 24, height: 24 };
            const o = r;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.CommandCenter.b01c37ca.js.map
