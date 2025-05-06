"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.CommandCenter"],
    {
        395337: (e, n, i) => {
            i.d(n, { Z: () => o });
            var t,
                l,
                a,
                s,
                r = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ kind: "RequiredField", field: (a = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [t, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [a], storageKey: null }, { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: null }] },
                    params: { id: "lre2gA0kvs0gf4XRNei6Qw", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            r.hash = "10c9183ce406af8e8ffa48a4cfd593b4";
            const o = r;
        },
        314644: (e, n, i) => {
            i.r(n), i.d(n, { default: () => gn });
            var t = i(807896),
                l = i(202784),
                a = i(400752),
                s = i(565058),
                r = i(325686),
                o = i(708852),
                d = i(371344),
                c = i(466792),
                u = i(731708),
                m = i(392237),
                f = i(178519);
            function p(...e) {
                return l.useCallback(
                    (n) => {
                        for (const i of e) null != i && ("function" == typeof i ? i(n) : (i.current = n));
                    },
                    [...e],
                );
            }
            var b = i(725405),
                _ = (i(136728), i(840590)),
                g = i(874627),
                v = i(536387),
                k = i(811322),
                h = i(987809),
                y = i(674132),
                w = i.n(y),
                I = i(698891),
                D = i(459679),
                T = i(420182),
                C = i(390387),
                M = i(76920),
                E = i(688715),
                R = i(348256),
                S = i(956272),
                x = i(684869),
                Z = i(717160),
                L = i(707570),
                F = i(1753),
                K = i(625271),
                A = i(883069),
                N = i(279849),
                $ = i(197318),
                z = i(689582),
                U = i(256260),
                q = i(511323),
                H = i(80361),
                j = i(856151),
                P = i(53674),
                O = i(520913),
                Q = i(297896),
                V = i(175564),
                W = i(748138),
                B = i(68290),
                X = i(593875),
                Y = i(839),
                G = i(720930),
                J = i(42134),
                ee = i(484633),
                ne = i(457566),
                ie = i(655352),
                te = i(466036),
                le = i(919022),
                ae = i(477403);
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
                ge = w().e2eef3c2,
                ve = w().b55d8a78,
                ke = w().h02a6fe6,
                he = w().f75d1806,
                ye = w().j34ad558,
                we = w().a5a30af0,
                Ie = w().b007440a,
                De = w().c818c60c,
                Te = w().ha8209bc,
                Ce = w().a2f81050,
                Me = w().h5860a68,
                Ee = w().eb75875e,
                Re = w().fcf3e54c,
                Se = w().ded416b0,
                xe = w().j0e2cfa8,
                Ze = (0, s.cn)((e) => {
                    const n = e(T.qc).getState(),
                        i = le.ZP.selectViewerUser(n)?.screen_name,
                        { acceptedIds: t, ids: l } = te.sC(n),
                        a = l.length - t.length,
                        s = e(T.f0),
                        r = e(T.TD),
                        o = { icon: R.default, label: Te, link: "/home", id: "home" },
                        d = { icon: S.default, label: Re, link: "/explore", id: "explore" },
                        c = s.isTrue("subscriptions_inapp_grok_upsell_enabled") || r.isTrueAndEnabled("subscriptions_inapp_grok") ? { icon: ne.x1, label: Me, link: "/i/grok", id: "grok" } : void 0,
                        u = { icon: x.default, label: Ee, link: "/notifications", id: "notifications" },
                        m = { icon: Z.default, label: Ce, link: "/messages", id: "messages" },
                        f = s.isTrue("voice_rooms_discovery_page_enabled") ? { icon: L.default, label: Se, link: "/i/spaces", id: "spaces" } : void 0,
                        p = { icon: F.default, label: we, link: "/compose/articles", id: "article_composer" },
                        b = { icon: K.default, label: se, link: "/i/communitynotes", id: "birdwatch" },
                        _ = { icon: A.default, label: re, link: "/i/bookmarks", id: "bookmarks_overflow_item" },
                        g = { icon: N.default, label: oe, link: "/i/branded_likes_preview", id: "branded_likes_preview_overflow_item" },
                        v = ($.default, i ? { icon: z.default, label: ce, link: `/${i}/lists`, id: "lists_overflow_item" } : void 0),
                        k = { badgeCount: a, icon: U.default, label: de, link: "/follower_requests", id: "follower_requests_overflow_item" },
                        h = i ? { icon: q.default, label: fe, link: `/${i}`, id: "profile_overflow_item" } : void 0,
                        y = { icon: H.default, label: "Money", link: "/i/xpayments", id: "payments_overflow_item" },
                        w = { icon: j.default, label: _e, link: "/i/coins", id: "twitter_coins" },
                        D = { icon: O.default, label: he, link: "/i/premium", id: "premium_hub" },
                        M = { label: ue, link: "/logout", icon: Q.default, id: "logout_overflow_item" },
                        Ze = { icon: V.default, label: be, link: (0, E.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), id: "twitter_ads_item" },
                        Le = s.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Fe = { icon: W.default, label: me, link: Le ? "/i/monetization" : "/settings/monetization", id: "monetization" },
                        Ke = { icon: I.default, label: pe, link: "/settings", id: "settings_overflow_item" },
                        Ae = { label: s.isTrue("subscriptions_upsells_vo_nav_decoration_enabled") ? xe : ge, id: "verified_organization_signup_item", link: "/i/verified-orgs-signup", icon: B.default },
                        Ne = { label: ge, id: "verified_organization_dashboard_item", link: "/i/verified", icon: B.default },
                        $e = { label: ve, id: "create_space_item", link: "/i/spaces/start", icon: L.default },
                        ze = i ? { label: ke, id: "communities_item", link: `/${i}/communities`, icon: X.default } : void 0,
                        Ue = (0, ae.eY)(n),
                        qe = s.isTrue("spaces_conference_enabled") || !!Ue,
                        He = { label: "Conferences", id: "conferences_item", link: "/i/conferences", icon: Y.default },
                        je = { label: Ie, id: "jobs_item", link: "/jobs", icon: G.default },
                        Pe = r.isAnyPremiumSubscriber(),
                        Oe = Pe,
                        Qe = s.isTrue("payments_enabled"),
                        Ve = s.isTrue("subscriptions_sign_up_enabled") && !Pe,
                        We = r.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, ie.ZP)(),
                        Be = s.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        Xe = r.isVerifiedOrg(),
                        Ye = s.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        Ge = (0, C.Lz)(n),
                        Je = s.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Ge,
                        en = t.length,
                        nn = !Pe && s.isTrue("rweb_analytics_nav_item_enabled"),
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
                        h,
                        Oe ? D : void 0,
                        Qe ? y : void 0,
                        Ve
                            ? (() => {
                                  const e = s.isTrue("subscriptions_premium_experiment_nav_text");
                                  return { icon: O.default, label: e ? ye : he, link: "/i/premium_sign_up", id: "verified_overflow_item" };
                              })()
                            : void 0,
                        v,
                        _,
                        We ? p : void 0,
                        Be ? (Xe ? Ne : Ae) : void 0,
                        Ye ? w : void 0,
                        Je ? b : void 0,
                        a || en ? k : void 0,
                        nn ? { icon: P.default, label: De, link: "/i/account_analytics", id: "analytics" } : void 0,
                        Fe,
                        Ze,
                        tn ? je : void 0,
                        qe ? He : void 0,
                        sn ? $e : void 0,
                        Ke,
                        M,
                        rn ? ze : void 0,
                        void 0,
                        on ? g : void 0,
                    ].filter(Boolean);
                }),
                Le = (0, s.cn)(""),
                Fe = (0, s.cn)((e) => [...e(Ae), ...e(Ne), ...e(je), ...e(Qe)]),
                Ke = (0, s.cn)((e) =>
                    e(Le)
                        .split(/ +/g)
                        .filter(Boolean)
                        .map((e) => $e(e.toLowerCase())),
                ),
                Ae = (0, s.cn)((e) => {
                    const n = e(Ze),
                        i = e(Ke);
                    return (0, D.Z)(n, ({ icon: e, id: n, label: t, link: l }) => (i.every((e) => $e(t.toLowerCase()).includes(e)) ? { id: `nav-${n}`, label: t, path: l, Icon: e } : void 0));
                }),
                Ne = (0, s.cn)((e) => {
                    const n = e(ze),
                        i = e(Ke);
                    return (0, D.Z)(n, (e) => {
                        const n = (0, D.Z)(e.items, (e) => {
                            if (i.every((n) => e.terms.some((e) => e.includes(n)))) return { id: `settings-${e.id}-${e.title}`, label: e.title, path: e.path, Icon: I.default };
                        });
                        return i.every((n) => e.terms.some((e) => e.includes(n))) ? { id: `settings-${e.id}-${e.title}`, label: e.title, path: e.path, subItems: n, Icon: I.default } : n.length ? { id: `settings-${e.id}-${e.title}`, label: e.title, subItems: n, Icon: I.default } : null;
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
                        i = (0, C.Lz)(n),
                        t = (0, C.vd)(n),
                        l = e(T.f0),
                        a = e(T.TD);
                    return (0, M.VA)({ isDelegate: i, delegateRole: t, featureSwitches: l, userClaims: a });
                });
            const qe = (0, v.K9)((e) =>
                    Promise.all([i.e("modules.audio-6107ac1a"), i.e("modules.audio-b953418a"), i.e("modules.audio-7c51e6a7"), i.e("modules.audio-04db59e9"), i.e("modules.audio-76583d6c"), i.e("modules.audio-b7a8a5fb"), i.e("modules.audio-51f6e793"), i.e("modules.audio-e019dbda"), i.e("modules.audio-262c94d4"), i.e("modules.audio-c6fe4ea4"), i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"), i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"), i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"), i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"), i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"), i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"), i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"), i.e("ondemand.devItems")])
                        .then(i.bind(i, 825630))
                        .then(({ devItemsAtom: e }) => e),
                ),
                He = (0, s.cn)((e) => (e(qe), e(e(qe.resolved) ?? (0, s.cn)(() => [])))),
                je =
                    ((Pe = () => He),
                    (0, s.cn)((e) => {
                        const n = e(Pe()),
                            i = e(Ke);
                        return n.filter((e) => i.every((n) => $e(e.label.toLowerCase()).includes(n)));
                    }));
            var Pe;
            const Oe = w().fa9adac1,
                Qe = (0, s.cn)((e) => {
                    const n = e(Le).trim();
                    return [{ id: "default-search", label: Oe({ query: n }), Icon: f.default, path: `/search?q=${encodeURIComponent(n)}&src=typed_query` }];
                });
            const Ve = (0, s.cn)((e) => e(en)[e(e(We))]),
                We = (0, s.cn)((e) => (e(en), (0, s.cn)(0))),
                Be = (0, s.cn)(null, (e, n) => {
                    const i = e(en).length;
                    n(e(We), (e) => Math.min(e + 1, i - 1));
                }),
                Xe = (0, s.cn)(null, (e, n) => {
                    e(en).length;
                    n(e(We), (e) => Math.max(e - 1, 0));
                }),
                Ye = (0, h.xu)((e) => (0, s.cn)((n) => n(Ve)?.id === e)),
                Ge = (0, s.cn)((e) => e(en).reduce((e, n, i) => (e.set(n.id, i), e), new Map())),
                Je = (0, h.xu)((e) =>
                    (0, s.cn)(null, (n, i) => {
                        const t = n(Ge).get(e),
                            l = n(en);
                        void 0 !== t && t >= 0 && t < l.length && i(n(We), t);
                    }),
                ),
                en = (0, s.cn)((e) => e(Fe).flatMap((e) => (e.subItems ? (e.path ? [e, ...e.subItems] : e.subItems) : e)));
            var nn = i(187669);
            const tn = (0, s.cn)(null, (e, n, i, t) => {
                i.scribe(
                    (function (e) {
                        return { component: "command-center", element: e, action: "submit" };
                    })(t),
                );
            });
            var ln = i(815604);
            const an = (0, k.X)((e) =>
                    (0, s.cn)(null, (n, i, t) => {
                        const l = (0, ln.k)(t);
                        if (l === (ln.m ? "m+k" : "c+k") || "Escape" === l) i(g._K);
                        else if ("ArrowDown" === l || "c+n" === l) i(Be), t.preventDefault();
                        else if ("ArrowUp" === l || "c+p" === l) i(Xe), t.preventDefault();
                        else if ("Enter" === l) {
                            const l = n(Ve);
                            i(sn, e, l), t.preventDefault();
                        }
                    }),
                ),
                sn = (0, s.cn)(null, (e, n, i, t) => {
                    const l = t?.path;
                    t && l && (n(g._K), n(Le, ""), n(tn, i, t.id), "function" == typeof l ? l() : _.default.push(l));
                });
            function rn({ resultId: e }) {
                const n = (0, a.Dv)(Le),
                    i = (0, a.b9)(on),
                    t = (0, b.Z)(),
                    s = (0, a.b9)(an(t)),
                    r = (0, a.Dv)(Ve)?.id;
                return l.createElement(d.Z, { Icon: f.default, appTextSize: "title4", ariaActiveDescendant: void 0 !== r ? bn(e, r) : "", ariaAutocomplete: "list", ariaControls: e, ariaExpanded: !0, ariaRole: "combobox", autoFocus: !0, onChange: i, onKeyDown: s, placeholder: "Search", style: _n.input, styleType: "selection", value: n });
            }
            const on = (0, s.cn)(null, (e, n, i) => {
                    n(Le, i.target.value);
                }),
                dn = "Results";
            function cn({ id: e }) {
                const n = (0, a.Dv)(Fe);
                return l.createElement(
                    r.Z,
                    { "aria-label": dn, id: e, role: "listbox", style: _n.results },
                    n.map((n) => l.createElement(un, { item: n, key: n.id, resultId: e })),
                );
            }
            const un = l.memo(function ({ item: e, resultId: n }) {
                    const i = (0, a.Dv)(Ye(e.id)),
                        s = (0, a.b9)(Je(e.id)),
                        o = fn(i),
                        {
                            handlers: { ref: d, ...m },
                        } = (0, c.x)({
                            onHoverIn: () => {
                                s();
                            },
                        }),
                        f = p(d, o),
                        _ = (0, b.Z)(),
                        g = (0, a.b9)(sn),
                        v = l.useCallback(() => {
                            g(_, e);
                        }, [_, g, e]);
                    return l.createElement(
                        l.Fragment,
                        null,
                        l.createElement(r.Z, (0, t.Z)({ "aria-selected": i, id: bn(n, e.id), onClick: v, ref: f, style: e.path ? (i ? _n.selectedResultItem : _n.resultItem) : _n.resultItemHeader }, m), l.createElement(u.ZP, (0, t.Z)({ size: "title4" }, e.path ? {} : { withUnderline: !0, weight: "bold" }), l.createElement(e.Icon, { style: _n.icon }), e.label)),
                        e.subItems?.map((e) => l.createElement(mn, { key: e.id, resultId: n, subItem: e })),
                    );
                }),
                mn = l.memo(function ({ resultId: e, subItem: n }) {
                    const i = (0, a.Dv)(Ye(n.id)),
                        s = (0, a.b9)(Je(n.id)),
                        o = fn(i),
                        {
                            handlers: { ref: d, ...m },
                        } = (0, c.x)({
                            onHoverIn: () => {
                                s();
                            },
                        }),
                        f = p(d, o),
                        _ = (0, b.Z)(),
                        g = (0, a.b9)(sn),
                        v = l.useCallback(() => {
                            g(_, n);
                        }, [_, g, n]);
                    return l.createElement(r.Z, (0, t.Z)({ "aria-selected": i, id: bn(e, n.id), onClick: v, ref: f, style: i ? _n.selectedResultItem : _n.resultItem }, m), l.createElement(u.ZP, { size: "title4" }, l.createElement(n.Icon, { style: _n.hiddenIcon }), n.label));
                });
            function fn(e) {
                const n = l.useRef(null);
                return (
                    l.useEffect(() => {
                        const i = n.current;
                        i &&
                            e &&
                            ((function (e) {
                                const n = pn(e);
                                if (!n) return !0;
                                const i = e.getBoundingClientRect(),
                                    t = n.getBoundingClientRect();
                                return i.top >= t.top && i.bottom <= t.bottom;
                            })(i) ||
                                i.scrollIntoView({ block: "nearest" }));
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
                        i = { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space2, cursor: "pointer" },
                        t = { minWidth: e.spaces.space32, marginEnd: e.spaces.space12 };
                    return { commandCenter: n, commandCenterMobile: { ...n, top: e.spaces.space8 }, mainRow: { flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, input: {}, resultItem: i, icon: t, hiddenIcon: { ...t, opacity: 0 }, selectedResultItem: { ...i, backgroundColor: e.colors.primary }, resultItemHeader: { ...i, cursor: "auto", paddingTop: e.spaces.space8 }, results: { maxHeight: "50vh", overflowY: "auto" } };
                }),
                gn = function () {
                    !(function () {
                        const e = (0, v.xO)();
                        l.useEffect(() => {
                            function n() {
                                e.set(g._K);
                            }
                            function i(e) {
                                "Escape" === (0, ln.k)(e) && n();
                            }
                            return (
                                window.addEventListener("click", n, !0),
                                window.addEventListener("keydown", i, !0),
                                () => {
                                    window.removeEventListener("click", n, !0), window.removeEventListener("keydown", i, !0);
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
        16222: (e, n, i) => {
            function t(e, n) {
                try {
                    return e();
                } catch (e) {
                    return n(e);
                }
            }
            i.d(n, { o: () => t });
        },
        477403: (e, n, i) => {
            i.d(n, { eY: () => m, si: () => g, vC: () => u });
            i(543673), i(240753), i(128399);
            var t = i(395337),
                l = i(202784),
                a = (i(585488), i(516951)),
                s = i(952793),
                r = i(16222),
                o = i(125363),
                d = i(919022),
                c = i(535338);
            function u(e) {
                return (0, o.v9)(m);
            }
            function m(e) {
                return (function (e) {
                    if (!e) return;
                    const n = (0, r.o)(() => new URL(e), a.Z);
                    if (!n || !f.includes(n.host)) return;
                    const i = n.pathname.slice(1).toLowerCase();
                    return p[i];
                })(d.ZP.selectViewerUser(e)?.highlightedLabel?.url?.url);
            }
            const f = ["twitter.com", "x.com"],
                p = { xai: "1661523610111193088" },
                b = Object.values(p),
                _ = t.Z;
            function g() {
                const e = (0, c.p)(_, {}),
                    n = (0, s.hC)("spaces_conference_enabled");
                return l.useMemo(() => {
                    const i = e.affiliations?.affiliated_account_ids_results,
                        t = (
                            i?.flatMap(({ rest_id: e, result: n }) => {
                                if ("User" !== n?.__typename) return [];
                                return [{ name: n.legacy.name, id: e }];
                            }) ?? []
                        ).filter(({ id: e }) => b.includes(e));
                    return n && !t.some(({ id: e }) => "783214" === e) ? [{ id: "783214", name: "X" }, ...t] : t;
                }, [e.affiliations?.affiliated_account_ids_results, n]);
            }
        },
        662678: (e, n, i) => {
            i.d(n, { G: () => l, Z: () => t });
            i(136728);
            const t = function (e, n) {
                return l(e, n);
            };
            function l(e, n) {
                return e.reduce(
                    (i, t, l) => {
                        const a = n ? n(t, l, e) : !!t;
                        return a && i[0].push(t), !a && i[1].push(t), i;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.CommandCenter.3f68092a.js.map
