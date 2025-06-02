"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.CommandCenter", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSound-js", "icons/IconSparkle-js"],
    {
        395337: (e, t, i) => {
            i.d(t, { Z: () => s });
            var n,
                l,
                a,
                r,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (a = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [n, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [a], storageKey: null }, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            o.hash = "42f499bfb2697230967b662ad70f78f8";
            const s = o;
        },
        314644: (e, t, i) => {
            i.r(t), i.d(t, { default: () => vt });
            var n = i(807896),
                l = i(202784),
                a = i(400752),
                r = i(565058),
                o = i(325686),
                s = i(708852),
                d = i(371344),
                c = i(466792),
                u = i(731708),
                m = i(392237),
                f = i(178519);
            function p(...e) {
                return l.useCallback(
                    (t) => {
                        for (const i of e) null != i && ("function" == typeof i ? i(t) : (i.current = t));
                    },
                    [...e],
                );
            }
            var b = i(725405),
                v = (i(136728), i(840590)),
                h = i(874627),
                g = i(536387),
                _ = i(811322),
                w = i(987809),
                k = i(111677),
                y = i.n(k),
                Z = i(698891),
                I = i(459679),
                D = i(420182),
                E = i(390387),
                M = i(76920),
                C = i(688715),
                T = i(348256),
                x = i(956272),
                S = i(684869),
                L = i(717160),
                z = i(707570),
                R = i(1753),
                F = i(625271),
                K = i(883069),
                A = i(279849),
                H = i(197318),
                N = i(689582),
                $ = i(256260),
                j = i(511323),
                U = i(80361),
                V = i(856151),
                q = i(53674),
                B = i(520913),
                O = i(297896),
                P = i(175564),
                Q = i(748138),
                W = i(68290),
                G = i(593875),
                X = i(839),
                Y = i(720930),
                J = i(42134),
                ee = i(484633),
                te = i(457566),
                ie = i(655352),
                ne = i(466036),
                le = i(919022),
                ae = i(477403);
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
                he = y().e2eef3c2,
                ge = y().b55d8a78,
                _e = y().h02a6fe6,
                we = y().f75d1806,
                ke = y().j34ad558,
                ye = y().a5a30af0,
                Ze = y().b007440a,
                Ie = y().c818c60c,
                De = y().ha8209bc,
                Ee = y().a2f81050,
                Me = y().h5860a68,
                Ce = y().eb75875e,
                Te = y().fcf3e54c,
                xe = y().ded416b0,
                Se = y().j0e2cfa8,
                Le = (0, r.cn)((e) => {
                    const t = e(D.qc).getState(),
                        i = le.ZP.selectViewerUser(t)?.screen_name,
                        { acceptedIds: n, ids: l } = ne.sC(t),
                        a = l.length - n.length,
                        r = e(D.f0),
                        o = e(D.TD),
                        s = { icon: T.default, label: De, link: "/home", id: "home" },
                        d = { icon: x.default, label: Te, link: "/explore", id: "explore" },
                        c = r.isTrue("subscriptions_inapp_grok_upsell_enabled") || o.isTrueAndEnabled("subscriptions_inapp_grok") ? { icon: te.x1, label: Me, link: "/i/grok", id: "grok" } : void 0,
                        u = { icon: S.default, label: Ce, link: "/notifications", id: "notifications" },
                        m = { icon: L.default, label: Ee, link: "/messages", id: "messages" },
                        f = r.isTrue("voice_rooms_discovery_page_enabled") ? { icon: z.default, label: xe, link: "/i/spaces", id: "spaces" } : void 0,
                        p = { icon: R.default, label: ye, link: "/compose/articles", id: "article_composer" },
                        b = { icon: F.default, label: re, link: "/i/communitynotes", id: "birdwatch" },
                        v = { icon: K.default, label: oe, link: "/i/bookmarks", id: "bookmarks_overflow_item" },
                        h = { icon: A.default, label: se, link: "/i/branded_likes_preview", id: "branded_likes_preview_overflow_item" },
                        g = (H.default, i ? { icon: N.default, label: ce, link: `/${i}/lists`, id: "lists_overflow_item" } : void 0),
                        _ = { badgeCount: a, icon: $.default, label: de, link: "/follower_requests", id: "follower_requests_overflow_item" },
                        w = i ? { icon: j.default, label: fe, link: `/${i}`, id: "profile_overflow_item" } : void 0,
                        k = { icon: U.default, label: "Money", link: "/i/xpayments", id: "payments_overflow_item" },
                        y = { icon: V.default, label: ve, link: "/i/coins", id: "twitter_coins" },
                        I = { icon: B.default, label: we, link: "/i/premium", id: "premium_hub" },
                        M = { label: ue, link: "/logout", icon: O.default, id: "logout_overflow_item" },
                        Le = { icon: P.default, label: be, link: (0, C.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), id: "twitter_ads_item" },
                        ze = r.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Re = { icon: Q.default, label: me, link: ze ? "/i/monetization" : "/settings/monetization", id: "monetization" },
                        Fe = { icon: Z.default, label: pe, link: "/settings", id: "settings_overflow_item" },
                        Ke = { label: r.isTrue("subscriptions_upsells_vo_nav_decoration_enabled") ? Se : he, id: "verified_organization_signup_item", link: "/i/verified-orgs-signup", icon: W.default },
                        Ae = { label: he, id: "verified_organization_dashboard_item", link: "/i/verified", icon: W.default },
                        He = { label: ge, id: "create_space_item", link: "/i/spaces/start", icon: z.default },
                        Ne = i ? { label: _e, id: "communities_item", link: `/${i}/communities`, icon: G.default } : void 0,
                        $e = (0, ae.eY)(t),
                        je = r.isTrue("spaces_conference_enabled") || !!$e,
                        Ue = { label: "Conferences", id: "conferences_item", link: "/i/conferences", icon: X.default },
                        Ve = { label: Ze, id: "jobs_item", link: "/jobs", icon: Y.default },
                        qe = o.isAnyPremiumSubscriber(),
                        Be = qe,
                        Oe = r.isTrue("payments_enabled"),
                        Pe = r.isTrue("subscriptions_sign_up_enabled") && !qe,
                        Qe = o.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, ie.ZP)(),
                        We = r.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        Ge = o.isVerifiedOrg(),
                        Xe = r.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        Ye = (0, E.Lz)(t),
                        Je = r.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Ye,
                        et = n.length,
                        tt = !qe && r.isTrue("rweb_analytics_nav_item_enabled"),
                        it = r.isTrue("recruiting_global_jobs_search_enabled"),
                        nt = e(J.cI),
                        lt = e(J.K$),
                        at = r.isTrue("voice_rooms_web_space_creation") && nt !== ee.Q.host && lt?.type !== ee.W.space,
                        rt = r.isTrue("c9s_enabled"),
                        ot = r.isTrue("branded_like_preview_enabled");
                    return [
                        s,
                        d,
                        c,
                        u,
                        m,
                        f,
                        w,
                        Be ? I : void 0,
                        Oe ? k : void 0,
                        Pe
                            ? (() => {
                                  const e = r.isTrue("subscriptions_premium_experiment_nav_text");
                                  return { icon: B.default, label: e ? ke : we, link: "/i/premium_sign_up", id: "verified_overflow_item" };
                              })()
                            : void 0,
                        g,
                        v,
                        Qe ? p : void 0,
                        We ? (Ge ? Ae : Ke) : void 0,
                        Xe ? y : void 0,
                        Je ? b : void 0,
                        a || et ? _ : void 0,
                        tt ? { icon: q.default, label: Ie, link: "/i/account_analytics", id: "analytics" } : void 0,
                        Re,
                        Le,
                        it ? Ve : void 0,
                        je ? Ue : void 0,
                        at ? He : void 0,
                        Fe,
                        M,
                        rt ? Ne : void 0,
                        void 0,
                        ot ? h : void 0,
                    ].filter(Boolean);
                }),
                ze = (0, r.cn)(""),
                Re = (0, r.cn)((e) => [...e(Ke), ...e(Ae), ...e(Ve), ...e(Oe)]),
                Fe = (0, r.cn)((e) =>
                    e(ze)
                        .split(/ +/g)
                        .filter(Boolean)
                        .map((e) => He(e.toLowerCase())),
                ),
                Ke = (0, r.cn)((e) => {
                    const t = e(Le),
                        i = e(Fe);
                    return (0, I.Z)(t, ({ icon: e, id: t, label: n, link: l }) => (i.every((e) => He(n.toLowerCase()).includes(e)) ? { id: `nav-${t}`, label: n, path: l, Icon: e } : void 0));
                }),
                Ae = (0, r.cn)((e) => {
                    const t = e(Ne),
                        i = e(Fe);
                    return (0, I.Z)(t, (e) => {
                        const t = (0, I.Z)(e.items, (e) => {
                            if (i.every((t) => e.terms.some((e) => e.includes(t)))) return { id: `settings-${e.id}-${e.title}`, label: e.title, path: e.path, Icon: Z.default };
                        });
                        return i.every((t) => e.terms.some((e) => e.includes(t))) ? { id: `settings-${e.id}-${e.title}`, label: e.title, path: e.path, subItems: t, Icon: Z.default } : t.length ? { id: `settings-${e.id}-${e.title}`, label: e.title, subItems: t, Icon: Z.default } : null;
                    });
                });
            function He(e) {
                return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            }
            const Ne = (0, r.cn)((e) => {
                    const t = e($e);
                    return (0, I.Z)(t, (e) => {
                        if (e.isSearchable)
                            return {
                                terms: [e.title, ...e.synonyms].map((e) => He(e.toLowerCase())),
                                id: `settings-${e.id}`,
                                title: e.title,
                                path: e.path,
                                items: (0, I.Z)(e.items, (e) => {
                                    if (e.isSearchable) return { id: `settings-${e.id}`, title: e.title, path: e.path, terms: [e.title, ...e.synonyms].map((e) => He(e.toLowerCase())) };
                                }),
                            };
                    });
                }),
                $e = (0, r.cn)((e) => {
                    const t = e(D.qc).getState(),
                        i = (0, E.Lz)(t),
                        n = (0, E.vd)(t),
                        l = e(D.f0),
                        a = e(D.TD);
                    return (0, M.VA)({ isDelegate: i, delegateRole: n, featureSwitches: l, userClaims: a });
                });
            const je = (0, g.K9)((e) =>
                    Promise.all([i.e("modules.audio-6107ac1a"), i.e("modules.audio-b953418a"), i.e("modules.audio-7c51e6a7"), i.e("modules.audio-04db59e9"), i.e("modules.audio-76583d6c"), i.e("modules.audio-b7a8a5fb"), i.e("modules.audio-51f6e793"), i.e("modules.audio-e019dbda"), i.e("modules.audio-262c94d4"), i.e("modules.audio-c6fe4ea4"), i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"), i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"), i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"), i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"), i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"), i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"), i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"), i.e("ondemand.devItems")])
                        .then(i.bind(i, 825630))
                        .then(({ devItemsAtom: e }) => e),
                ),
                Ue = (0, r.cn)((e) => (e(je), e(e(je.resolved) ?? (0, r.cn)(() => [])))),
                Ve =
                    ((qe = () => Ue),
                    (0, r.cn)((e) => {
                        const t = e(qe()),
                            i = e(Fe);
                        return t.filter((e) => i.every((t) => He(e.label.toLowerCase()).includes(t)));
                    }));
            var qe;
            const Be = y().fa9adac1,
                Oe = (0, r.cn)((e) => {
                    const t = e(ze).trim();
                    return [{ id: "default-search", label: Be({ query: t }), Icon: f.default, path: `/search?q=${encodeURIComponent(t)}&src=typed_query` }];
                });
            const Pe = (0, r.cn)((e) => e(et)[e(e(Qe))]),
                Qe = (0, r.cn)((e) => (e(et), (0, r.cn)(0))),
                We = (0, r.cn)(null, (e, t) => {
                    const i = e(et).length;
                    t(e(Qe), (e) => Math.min(e + 1, i - 1));
                }),
                Ge = (0, r.cn)(null, (e, t) => {
                    e(et).length;
                    t(e(Qe), (e) => Math.max(e - 1, 0));
                }),
                Xe = (0, w.xu)((e) => (0, r.cn)((t) => t(Pe)?.id === e)),
                Ye = (0, r.cn)((e) => e(et).reduce((e, t, i) => (e.set(t.id, i), e), new Map())),
                Je = (0, w.xu)((e) =>
                    (0, r.cn)(null, (t, i) => {
                        const n = t(Ye).get(e),
                            l = t(et);
                        void 0 !== n && n >= 0 && n < l.length && i(t(Qe), n);
                    }),
                ),
                et = (0, r.cn)((e) => e(Re).flatMap((e) => (e.subItems ? (e.path ? [e, ...e.subItems] : e.subItems) : e)));
            var tt = i(187669);
            const it = (0, r.cn)(null, (e, t, i, n) => {
                i.scribe(
                    (function (e) {
                        return { component: "command-center", element: e, action: "submit" };
                    })(n),
                );
            });
            var nt = i(815604);
            const lt = (0, _.X)((e) =>
                    (0, r.cn)(null, (t, i, n) => {
                        const l = (0, nt.k)(n);
                        if (l === (nt.m ? "m+k" : "c+k") || "Escape" === l) i(h._K);
                        else if ("ArrowDown" === l || "c+n" === l) i(We), n.preventDefault();
                        else if ("ArrowUp" === l || "c+p" === l) i(Ge), n.preventDefault();
                        else if ("Enter" === l) {
                            const l = t(Pe);
                            i(at, e, l), n.preventDefault();
                        }
                    }),
                ),
                at = (0, r.cn)(null, (e, t, i, n) => {
                    const l = n?.path;
                    n && l && (t(h._K), t(ze, ""), t(it, i, n.id), "function" == typeof l ? l() : v.default.push(l));
                });
            function rt({ resultId: e }) {
                const t = (0, a.Dv)(ze),
                    i = (0, a.b9)(ot),
                    n = (0, b.Z)(),
                    r = (0, a.b9)(lt(n)),
                    o = (0, a.Dv)(Pe)?.id;
                return l.createElement(d.Z, { Icon: f.default, appTextSize: "title4", ariaActiveDescendant: void 0 !== o ? pt(e, o) : "", ariaAutocomplete: "list", ariaControls: e, ariaExpanded: !0, ariaRole: "combobox", autoFocus: !0, onChange: i, onKeyDown: r, placeholder: "Search", style: bt.input, styleType: "selection", value: t });
            }
            const ot = (0, r.cn)(null, (e, t, i) => {
                    t(ze, i.target.value);
                }),
                st = "Results";
            function dt({ id: e }) {
                const t = (0, a.Dv)(Re);
                return l.createElement(
                    o.Z,
                    { "aria-label": st, id: e, role: "listbox", style: bt.results },
                    t.map((t) => l.createElement(ct, { item: t, key: t.id, resultId: e })),
                );
            }
            const ct = l.memo(function ({ item: e, resultId: t }) {
                    const i = (0, a.Dv)(Xe(e.id)),
                        r = (0, a.b9)(Je(e.id)),
                        s = mt(i),
                        {
                            handlers: { ref: d, ...m },
                        } = (0, c.x)({
                            onHoverIn: () => {
                                r();
                            },
                        }),
                        f = p(d, s),
                        v = (0, b.Z)(),
                        h = (0, a.b9)(at),
                        g = l.useCallback(() => {
                            h(v, e);
                        }, [v, h, e]);
                    return l.createElement(
                        l.Fragment,
                        null,
                        l.createElement(o.Z, (0, n.Z)({ "aria-selected": i, id: pt(t, e.id), onClick: g, ref: f, style: e.path ? (i ? bt.selectedResultItem : bt.resultItem) : bt.resultItemHeader }, m), l.createElement(u.ZP, (0, n.Z)({ size: "title4" }, e.path ? {} : { withUnderline: !0, weight: "bold" }), l.createElement(e.Icon, { style: bt.icon }), e.label)),
                        e.subItems?.map((e) => l.createElement(ut, { key: e.id, resultId: t, subItem: e })),
                    );
                }),
                ut = l.memo(function ({ resultId: e, subItem: t }) {
                    const i = (0, a.Dv)(Xe(t.id)),
                        r = (0, a.b9)(Je(t.id)),
                        s = mt(i),
                        {
                            handlers: { ref: d, ...m },
                        } = (0, c.x)({
                            onHoverIn: () => {
                                r();
                            },
                        }),
                        f = p(d, s),
                        v = (0, b.Z)(),
                        h = (0, a.b9)(at),
                        g = l.useCallback(() => {
                            h(v, t);
                        }, [v, h, t]);
                    return l.createElement(o.Z, (0, n.Z)({ "aria-selected": i, id: pt(e, t.id), onClick: g, ref: f, style: i ? bt.selectedResultItem : bt.resultItem }, m), l.createElement(u.ZP, { size: "title4" }, l.createElement(t.Icon, { style: bt.hiddenIcon }), t.label));
                });
            function mt(e) {
                const t = l.useRef(null);
                return (
                    l.useEffect(() => {
                        const i = t.current;
                        i &&
                            e &&
                            ((function (e) {
                                const t = ft(e);
                                if (!t) return !0;
                                const i = e.getBoundingClientRect(),
                                    n = t.getBoundingClientRect();
                                return i.top >= n.top && i.bottom <= n.bottom;
                            })(i) ||
                                i.scrollIntoView({ block: "nearest" }));
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
                        i = { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space2, cursor: "pointer" },
                        n = { minWidth: e.spaces.space32, marginEnd: e.spaces.space12 };
                    return { commandCenter: t, commandCenterMobile: { ...t, top: e.spaces.space8 }, mainRow: { flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, input: {}, resultItem: i, icon: n, hiddenIcon: { ...n, opacity: 0 }, selectedResultItem: { ...i, backgroundColor: e.colors.primary }, resultItemHeader: { ...i, cursor: "auto", paddingTop: e.spaces.space8 }, results: { maxHeight: "50vh", overflowY: "auto" } };
                }),
                vt = function () {
                    !(function () {
                        const e = (0, g.xO)();
                        l.useEffect(() => {
                            function t() {
                                e.set(h._K);
                            }
                            function i(e) {
                                "Escape" === (0, nt.k)(e) && t();
                            }
                            return (
                                window.addEventListener("click", t, !0),
                                window.addEventListener("keydown", i, !0),
                                () => {
                                    window.removeEventListener("click", t, !0), window.removeEventListener("keydown", i, !0);
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
        16222: (e, t, i) => {
            function n(e, t) {
                try {
                    return e();
                } catch (e) {
                    return t(e);
                }
            }
            i.d(t, { o: () => n });
        },
        477403: (e, t, i) => {
            i.d(t, { eY: () => m, si: () => h, vC: () => u });
            i(543673), i(240753), i(128399);
            var n = i(395337),
                l = i(202784),
                a = (i(585488), i(516951)),
                r = i(952793),
                o = i(16222),
                s = i(125363),
                d = i(919022),
                c = i(535338);
            function u(e) {
                return (0, s.v9)(m);
            }
            function m(e) {
                return (function (e) {
                    if (!e) return;
                    const t = (0, o.o)(() => new URL(e), a.Z);
                    if (!t || !f.includes(t.host)) return;
                    const i = t.pathname.slice(1).toLowerCase();
                    return p[i];
                })(d.ZP.selectViewerUser(e)?.highlightedLabel?.url?.url);
            }
            const f = ["twitter.com", "x.com"],
                p = { xai: "1661523610111193088" },
                b = Object.values(p),
                v = n.Z;
            function h() {
                const e = (0, c.p)(v, {}),
                    t = (0, r.hC)("spaces_conference_enabled");
                return l.useMemo(() => {
                    const i = e.affiliations?.affiliated_account_ids_results,
                        n = (
                            i?.flatMap(({ rest_id: e, result: t }) => {
                                if ("User" !== t?.__typename) return [];
                                return [{ name: t.core.name, id: e }];
                            }) ?? []
                        ).filter(({ id: e }) => b.includes(e));
                    return t && !n.some(({ id: e }) => "783214" === e) ? [{ id: "783214", name: "X" }, ...n] : n;
                }, [e.affiliations?.affiliated_account_ids_results, t]);
            }
        },
        58399: (e, t, i) => {
            i.r(t), i.d(t, { default: () => d });
            var n = i(202784),
                l = i(890601),
                a = i(783427),
                r = i(717683),
                o = i(347101);
            const s = (e = {}) => {
                const t = n.useContext(r.Z),
                    { direction: i } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style, t && o.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: i });
            };
            s.metadata = { width: 24, height: 24 };
            const d = s;
        },
        246492: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                l = i(890601),
                a = i(783427),
                r = i(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        264171: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                l = i(890601),
                a = i(783427),
                r = i(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        98440: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                l = i(890601),
                a = i(783427),
                r = i(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        926628: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                l = i(890601),
                a = i(783427),
                r = i(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        262009: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                l = i(890601),
                a = i(783427),
                r = i(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        452693: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                l = i(890601),
                a = i(783427),
                r = i(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        662678: (e, t, i) => {
            i.d(t, { G: () => l, Z: () => n });
            i(136728);
            const n = function (e, t) {
                return l(e, t);
            };
            function l(e, t) {
                return e.reduce(
                    (i, n, l) => {
                        const a = t ? t(n, l, e) : !!n;
                        return a && i[0].push(n), !a && i[1].push(n), i;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.CommandCenter.c401525a.js.map
