"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.JobSearch-a2dee9c7"],
    {
        594695: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n,
                o,
                l,
                r,
                i,
                s,
                c = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "consented" }), (o = { defaultValue: null, kind: "LocalArgument", name: "matchingCriteria" }), (l = { defaultValue: null, kind: "LocalArgument", name: "recommendationsEnabled" }), (r = { defaultValue: null, kind: "LocalArgument", name: "remoteWorkAllowed" }), (i = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePutMatchingProfileMutation",
                        selections: (s = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "consented", variableName: "consented" },
                                    { kind: "Variable", name: "matching_criteria", variableName: "matchingCriteria" },
                                    { kind: "Variable", name: "recommendations_enabled", variableName: "recommendationsEnabled" },
                                    { kind: "Variable", name: "remote_work_allowed", variableName: "remoteWorkAllowed" },
                                    { kind: "Literal", name: "s", value: "84b0" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "PutMatchingProfileResult",
                                kind: "LinkedField",
                                name: "put_matching_profile",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, n, l, r, o], kind: "Operation", name: "usePutMatchingProfileMutation", selections: s },
                    params: { id: "2jaLJJQhearTWZhqu89gBQ", metadata: {}, name: "usePutMatchingProfileMutation", operationKind: "mutation", text: null },
                };
            c.hash = "b23a8c052c25cec3489865df8f18d46d";
            const d = c;
        },
        488248: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n,
                o,
                l = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "userId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useRefreshJobRecommendationsMutation",
                        selections: (o = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Literal", name: "s", value: "84b0" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "RefreshJobRecommendationsResult",
                                kind: "LinkedField",
                                name: "refresh_job_recommendations",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "recommendation_count", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useRefreshJobRecommendationsMutation", selections: o },
                    params: { id: "NjDhjn_53KnOmYAcoyxqew", metadata: {}, name: "useRefreshJobRecommendationsMutation", operationKind: "mutation", text: null },
                };
            l.hash = "492b79a53d8f9fbe4f7ba82e23dbab65";
            const r = l;
        },
        903233: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(202784),
                o = a(325686),
                l = a(708852),
                r = a(392237);
            const i = r.default.create((e) => ({ root: { display: "flex", flexDirection: "row", height: "calc(100vh - 236px)", marginHorizontal: e.spaces.space16, borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.small, borderStyle: "solid" }, leftRoot: { display: "flex", overflow: "auto" }, rightRoot: { display: "flex", flexBasis: "auto", flexGrow: 1, flexShrink: 1, borderStartWidth: e.borderWidths.small, borderStartColor: e.colors.borderColor, borderStartStyle: "solid", overflow: "auto" }, mobileRoot: { display: "flex", height: "100%" }, mobileLeftRoot: { display: "flex", width: "100%", borderWidth: "0px", borderColor: e.colors.borderColor, borderStyle: "solid", borderBottomStartRadius: e.borderRadii.small }, mobileRightRoot: { position: "absolute", width: "100%", start: "0px", top: "0px", display: "none" }, mobileRightRootActive: { display: "block", backgroundColor: e.colors.cellBackground }, mobileOverlayPosition: { position: "absolute", top: 0, bottom: 0, start: 0, end: 0 }, overlayPosition: { position: "absolute", top: 0, bottom: 0, start: e.spaces.space16, end: e.spaces.space16 }, overlay: { backgroundColor: e.colors.navigationBackground } })),
                s = ({ isFullWidth: e = !1, isRightRootActive: t = !1, leftContent: a, mobileRootStyles: s, overlay: c, rightContent: d, rootStyles: u }) => {
                    const m = (0, l.Ji)(),
                        b = n.useMemo(() => ({ ...i.overlay, opacity: r.default.isDarkerMode() ? 0.8 : 0.9 }), []);
                    return n.createElement(n.Fragment, null, m ? n.createElement(o.Z, { style: { ...i.root, ...u } }, a, e ? null : n.createElement(o.Z, { style: i.rightRoot }, d), c && n.createElement(n.Fragment, null, n.createElement(o.Z, { style: [i.overlayPosition, b] }), n.createElement(o.Z, { style: i.overlayPosition }, c))) : n.createElement(o.Z, { style: { ...i.mobileRoot, ...s } }, n.createElement(o.Z, { style: i.mobileLeftRoot }, a), n.createElement(o.Z, { style: { ...i.mobileRightRoot, ...(t ? i.mobileRightRootActive : {}) } }, d), c && n.createElement(n.Fragment, null, n.createElement(o.Z, { style: [i.mobileOverlayPosition, b] }), n.createElement(o.Z, { style: i.overlayPosition }, c))));
                };
        },
        247411: (e, t, a) => {
            a.d(t, { Z: () => V });
            var n = a(202784),
                o = a(325686),
                l = a(392237),
                r = a(323265),
                i = a(443781),
                s = a(545457),
                c = a(449067);
            const d = l.default.create((e) => ({ container: { flex: 1, width: "100%", maxWidth: "1280px", marginHorizontal: "auto" } })),
                u = ({ children: e }) => n.createElement(o.Z, { style: d.container }, e);
            a(136728);
            var m = a(107267),
                b = a(708852),
                p = a(154003),
                h = a(868634),
                g = a(731708),
                f = a(371344),
                y = a(111677),
                k = a.n(y),
                E = a(698891),
                w = a(956272),
                Z = a(487606),
                C = a(106186),
                v = a(720930),
                _ = a(763881),
                x = a(134760),
                S = a(906433),
                R = a(439332);
            const I = k().d13d697c,
                L = [
                    { pathname: "/jobs", label: k().b72c924c, icon: w.default, featureSwitch: "recruiting_global_jobs_search_enabled", isActive: (e) => /(\/)?jobs(\/\d+)?(\/)?$/.test(e) },
                    { pathname: "/jobs/recommended", label: k().f4da95a0, icon: Z.default, featureSwitch: "recruiting_job_recommendations_enabled", isActive: (e) => /(\/)?jobs\/recommended(\/\d+)?(\/)?$/.test(e) },
                    { pathname: "/jobs/saved", label: k().eedd808c, icon: C.default, featureSwitch: "recruiting_job_recommendations_enabled", isActive: (e) => /(\/)?jobs\/saved(\/\d+)?(\/)?$/.test(e) },
                    { pathname: "/i/hiring", label: k().e0ba641a, icon: v.default, isActive: (e) => /(\/)?i\/hiring(\/\d+)?(\/)?$/.test(e), shouldHide: (e) => e.isVerifiedOrg(), decoration: n.createElement(h.ZP, { background: "blue500" }, n.createElement(g.ZP, { size: "subtext2" }, I)) },
                ],
                M = () => {
                    const { featureSwitches: e, userClaims: t } = (0, i.QZ)(),
                        a = (0, m.useLocation)().pathname;
                    return n.createElement(
                        o.Z,
                        { style: A.links },
                        L.map((l) => ((!l.featureSwitch || e.isTrue(l.featureSwitch)) && !l.shouldHide?.(t) ? n.createElement(n.Fragment, { key: l.pathname }, n.createElement(o.Z, null, l.isActive(a) ? n.createElement(o.Z, { style: A.currentLink }, n.createElement(g.ZP, { weight: "bold" }, l.label)) : n.createElement(p.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "buttonBlack", link: l.pathname }, l.label, l.decoration && n.createElement(o.Z, { style: A.decoration }, l.decoration)))) : null)),
                    );
                },
                P = () => {
                    const { featureSwitches: e, userClaims: t } = (0, i.QZ)(),
                        a = e.isTrue("recruiting_global_jobs_search_enabled");
                    return n.createElement(
                        n.Fragment,
                        null,
                        a ? n.createElement(o.Z, { style: A.mobileSearchContainer }, n.createElement(j, { styleType: "selection" })) : null,
                        L.map((a) => ((!a.featureSwitch || e.isTrue(a.featureSwitch)) && !a.shouldHide?.(t) ? n.createElement(S.Z, { decoration: a.decoration, icon: a.icon, key: a.pathname, label: a.label, link: a.pathname }) : null)),
                        e.isTrue("recruiting_job_recommendations_enabled") && n.createElement(S.Z, { icon: E.default, label: k().bb081ea2, link: "/jobs/get-recommendations" }),
                    );
                },
                j = ({ styleType: e }) => {
                    const t = (0, m.useHistory)(),
                        [a, o] = n.useState("");
                    return n.createElement(f.Z, {
                        Icon: w.default,
                        autoComplete: "off",
                        leftAligned: !0,
                        onChange: (e) => o(e.target.value),
                        onClear: () => o(""),
                        onSubmitEditing: () => {
                            const e = a;
                            o(""), t.push(`/jobs?q=${e}`);
                        },
                        placeholder: k().f9e6381a,
                        styleType: e,
                        testID: "search-jobs-nav-input",
                        value: a,
                        withClearButton: !0,
                    });
                },
                A = l.default.create((e) => ({ root: { width: "100%" }, container: { width: "100%", padding: e.spaces.space16, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, header: { gap: e.spaces.space16, display: "flex", flexDirection: "row", alignItems: "center" }, links: { gap: e.spaces.space4, display: "flex", flexDirection: "row", alignItems: "center" }, currentLink: { flexDirection: "row", alignItems: "center", paddingHorizontal: e.spaces.space16, height: e.spaces.space20, color: e.colors.text, borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.gray0, borderColor: e.colors.gray0, minWidth: e.spaces.space36, minHeight: e.spaces.space36 }, mobileSearchContainer: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingVertical: e.spaces.space4, width: "100%" }, searchContainer: { flex: 1, maxWidth: "300px", minWidth: "200px" }, decoration: { paddingStart: e.spaces.space8 } })),
                D = ({ isLoggedIn: e }) => {
                    const t = (0, b.Ji)(),
                        { featureSwitches: a } = (0, i.QZ)(),
                        l = a.isTrue("recruiting_global_jobs_search_enabled"),
                        r = a.isTrue("recruiting_job_recommendations_enabled");
                    return n.createElement(o.Z, { style: A.root }, n.createElement(u, null, n.createElement(o.Z, { style: A.container }, t ? null : n.createElement(x.Z, { disableMenuToggleWhenOpen: !0, renderCustomMenuItems: P }), n.createElement(o.Z, { style: A.header }, n.createElement(R.Z, null), t && n.createElement(M, null)), n.createElement(o.Z, { style: A.links }, t && l && n.createElement(o.Z, { style: A.searchContainer }, n.createElement(j, { styleType: "pill" })), e && t ? n.createElement(n.Fragment, null, r && n.createElement(p.ZP, { icon: n.createElement(E.default, null), link: "/jobs/get-recommendations", testID: "recommendation-settings-btn", type: "primaryText" }), n.createElement(_.Z, { isExpanded: !1 })) : n.createElement(o.Z, null)))));
                },
                T = () => null,
                W = l.default.create((e) => ({ root: { height: "100vh", width: "100%", flex: 1 }, webViewSpacer: { paddingBottom: "24px" } })),
                V = ({ children: e }) => {
                    (0, s.ph)(), (0, s.G1)();
                    const { loggedInUserId: t } = n.useContext(i.rC),
                        a = !r.ZP.isWebView();
                    return n.createElement(o.Z, { style: W.root }, n.createElement(c.Z.Configure, { TabBar: T, headerless: !0, rightControl: null, sideNav: null, withAppBar: !1, withBottomTabBar: !1 }), n.createElement(u, null, a ? n.createElement(D, { isLoggedIn: Boolean(t) }) : n.createElement("div", { style: W.webViewSpacer }), e));
                };
        },
        998693: (e, t, a) => {
            a.d(t, { Z: () => C });
            var n = a(36879),
                o = a(202784),
                l = a(10622),
                r = a.n(l),
                i = (a(585488), a(437429)),
                s = a.n(i),
                c = a(386802),
                d = a(855488),
                u = a(392237),
                m = a(111677),
                b = a.n(m),
                p = a(665468),
                h = a(666536),
                g = a(125568),
                f = a(874088),
                y = a(339110),
                k = a(524110);
            const E = b().jaaa8984,
                w = n.Z,
                Z = u.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, wrapper: { flex: 1 } })),
                C = ({ onChange: e, onEnter: t, onSelect: a, value: n }) => {
                    const { isModal: l } = o.useContext(c.Z),
                        i = o.useRef(null),
                        u = s()(),
                        [m, b] = o.useState(!1),
                        [C, v] = o.useState([]),
                        [_, x] = o.useState(!1),
                        S = (0, g.t)(),
                        R = o.useMemo(
                            () =>
                                (0, h.Z)((e) => {
                                    S() &&
                                        (e.length >= 2
                                            ? (b(!0),
                                              x(!0),
                                              ((e) => {
                                                  r()(u, w, { query: e })
                                                      .toPromise()
                                                      .then((e) => {
                                                          v(e?.location_type_ahead || []), x(!1);
                                                      });
                                              })(e))
                                            : b(!1));
                                }, 250),
                            [u, S],
                        ),
                        I = o.useCallback(
                            (t) => {
                                e({ value: t.target.value }), R(t.target.value);
                            },
                            [R, e],
                        ),
                        L = o.useCallback(
                            (e, t) => {
                                i?.current?.focus(), a({ id: e.id, name: e.name }), b(!1);
                            },
                            [a],
                        ),
                        M = o.useCallback(
                            (e) => {
                                const t = C?.map((e) => ({ id: e.location_id, name: e.display_name, type: "job_location", data: {} }));
                                return o.createElement(o.Fragment, null, m ? o.createElement(k.Z, { isLoading: _, items: t, onItemClick: L, ref: e.ref, source: y._4.JobLocation, style: e.style }) : null);
                            },
                            [L, C, _, m],
                        ),
                        P = o.useCallback(
                            (e) => {
                                const { onFocus: a } = e;
                                return o.createElement(d.Z, { Icon: p.default, autoComplete: "off", label: E, name: "location-selector-input", onChange: I, onFocus: a, onKeyPress: t, ref: i, style: Z.inputStyle, testID: "location-selector-input", value: n });
                            },
                            [I, t, n],
                        );
                    return o.createElement(f.default, { isInModal: l, renderCustomDropdown: M, renderCustomInput: P, rounded: !0, source: y._4.JobLocation, testID: "location-selector", userLimit: 20 });
                };
        },
        46705: (e, t, a) => {
            a.d(t, { X: () => n, g: () => o });
            const n = (e) => ({ id: e, distanceToViewportTop: 0 }),
                o = (e) => ({ id: e, distanceToViewportBottom: 0 });
        },
        906433: (e, t, a) => {
            a.d(t, { Z: () => h });
            a(136728);
            var n = a(202784),
                o = a(325686),
                l = a(952428),
                r = a(731708),
                i = a(310088),
                s = a(392237),
                c = a(111677),
                d = a.n(c),
                u = a(206962);
            const m = () => d().d9ef2842,
                b = d().d86bbf0f,
                p = d().h6beb5fb,
                h = ({ badgeCount: e, decoration: t, icon: a, iconColor: s, label: c, link: d, onClick: h, pip: f, rightControl: y, testID: k }) =>
                    n.createElement(
                        o.Z,
                        { style: g.dashMenuItem },
                        n.createElement(
                            l.Z,
                            { link: d, onClick: h, style: g.link, testID: k },
                            n.createElement(
                                o.Z,
                                { style: g.item },
                                a
                                    ? n.createElement(a, {
                                          style: (() => {
                                              const e = [g.icon, g.iconWithDashRedesign];
                                              return s && e.push({ color: s }), e;
                                          })(),
                                          testID: u.Z.icon,
                                      })
                                    : null,
                                n.createElement(r.ZP, { numberOfLines: 1, size: "headline1", style: g.itemLabel, weight: "bold" }, c),
                                e || f ? n.createElement(o.Z, { style: g.itemAccessory }, n.createElement(i.Z, { count: e, pip: f, standalone: !0, truncatedCountFormatter: p, unreadCountLabel: f ? m : b })) : null,
                                t ? n.createElement(o.Z, { style: g.leftMargin }, t) : null,
                            ),
                        ),
                        y,
                    ),
                g = s.default.create((e) => ({ dashMenuItem: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.text, flexShrink: 0, marginEnd: e.spaces.space12 }, iconWithDashRedesign: { alignSelf: "center", marginEnd: e.spaces.space24, height: e.spaces.space24, width: e.spaces.space24 }, item: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, flexDirection: "row", flexGrow: 1, alignItems: "center" }, itemAccessory: { flexShrink: 1, marginStart: e.spaces.space20, minWidth: e.spaces.space24, alignItems: "center" }, itemLabel: { flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space16 }, link: { flexGrow: 1, maxWidth: "100%" } }));
        },
        206962: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { iconPlus: "iconPlus", iconMore: "iconMore", logout: "logout", switcher: "switcher", settings: "settings", help: "help", icon: "icon", settingsAndSupport: "settingsAndSupport" };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.JobSearch-a2dee9c7.21f95b0a.js.map
