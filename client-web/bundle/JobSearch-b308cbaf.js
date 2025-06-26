"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.JobSearch-b308cbaf"],
    {
        949626: (e, t, o) => {
            o.d(t, { Z: () => r });
            o(202784);
            var l = o(950822);
            const r = (e) => (0, l.Z)("div", e);
        },
        903233: (e, t, o) => {
            o.d(t, { Z: () => s });
            var l = o(202784),
                r = o(325686),
                a = o(708852),
                n = o(392237);
            const i = n.default.create((e) => ({ root: { display: "flex", flexDirection: "row", height: "calc(100vh - 236px)", marginHorizontal: e.spaces.space16, borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.small, borderStyle: "solid" }, leftRoot: { display: "flex", overflow: "auto" }, rightRoot: { display: "flex", flexBasis: "auto", flexGrow: 1, flexShrink: 1, borderStartWidth: e.borderWidths.small, borderStartColor: e.colors.borderColor, borderStartStyle: "solid", overflow: "auto" }, mobileRoot: { display: "flex", height: "100%" }, mobileLeftRoot: { display: "flex", width: "100%", borderWidth: "0px", borderColor: e.colors.borderColor, borderStyle: "solid", borderBottomStartRadius: e.borderRadii.small }, mobileRightRoot: { position: "absolute", width: "100%", start: "0px", top: "0px", display: "none" }, mobileRightRootActive: { display: "block", backgroundColor: e.colors.cellBackground }, mobileOverlayPosition: { position: "absolute", top: 0, bottom: 0, start: 0, end: 0 }, overlayPosition: { position: "absolute", top: 0, bottom: 0, start: e.spaces.space16, end: e.spaces.space16 }, overlay: { backgroundColor: e.colors.navigationBackground } })),
                s = ({ isFullWidth: e = !1, isRightRootActive: t = !1, leftContent: o, mobileRootStyles: s, overlay: c, rightContent: d, rootStyles: m }) => {
                    const u = (0, a.Ji)(),
                        p = l.useMemo(() => ({ ...i.overlay, opacity: n.default.isDarkerMode() ? 0.8 : 0.9 }), []);
                    return l.createElement(l.Fragment, null, u ? l.createElement(r.Z, { style: { ...i.root, ...m } }, o, e ? null : l.createElement(r.Z, { style: i.rightRoot }, d), c && l.createElement(l.Fragment, null, l.createElement(r.Z, { style: [i.overlayPosition, p] }), l.createElement(r.Z, { style: i.overlayPosition }, c))) : l.createElement(r.Z, { style: { ...i.mobileRoot, ...s } }, l.createElement(r.Z, { style: i.mobileLeftRoot }, o), l.createElement(r.Z, { style: { ...i.mobileRightRoot, ...(t ? i.mobileRightRootActive : {}) } }, d), c && l.createElement(l.Fragment, null, l.createElement(r.Z, { style: [i.mobileOverlayPosition, p] }), l.createElement(r.Z, { style: i.overlayPosition }, c))));
                };
        },
        247411: (e, t, o) => {
            o.d(t, { Z: () => M });
            var l = o(202784),
                r = o(325686),
                a = o(392237),
                n = o(323265),
                i = o(443781),
                s = o(545457),
                c = o(449067);
            const d = a.default.create((e) => ({ container: { flex: 1, width: "100%", maxWidth: "1280px", marginHorizontal: "auto" } })),
                m = ({ children: e }) => l.createElement(r.Z, { style: d.container }, e);
            o(136728);
            var u = o(107267),
                p = o(708852),
                b = o(154003),
                h = o(868634),
                g = o(731708),
                f = o(371344),
                y = o(111677),
                E = o.n(y),
                Z = o(698891),
                w = o(956272),
                C = o(487606),
                x = o(106186),
                v = o(720930),
                S = o(763881),
                k = o(134760),
                _ = o(906433),
                R = o(439332);
            const I = E().d13d697c,
                j = [
                    { pathname: "/jobs", label: E().b72c924c, icon: w.default, featureSwitch: "recruiting_global_jobs_search_enabled", isActive: (e) => /(\/)?jobs(\/\d+)?(\/)?$/.test(e) },
                    { pathname: "/jobs/recommended", label: E().f4da95a0, icon: C.default, featureSwitch: "recruiting_job_recommendations_enabled", isActive: (e) => /(\/)?jobs\/recommended(\/\d+)?(\/)?$/.test(e) },
                    { pathname: "/jobs/saved", label: E().eedd808c, icon: x.default, featureSwitch: "recruiting_job_recommendations_enabled", isActive: (e) => /(\/)?jobs\/saved(\/\d+)?(\/)?$/.test(e) },
                    { pathname: "/i/hiring", label: E().e0ba641a, icon: v.default, isActive: (e) => /(\/)?i\/hiring(\/\d+)?(\/)?$/.test(e), shouldHide: (e) => e.isVerifiedOrg(), decoration: l.createElement(h.ZP, { background: "blue500" }, l.createElement(g.ZP, { size: "subtext2" }, I)) },
                ],
                T = () => {
                    const { featureSwitches: e, userClaims: t } = (0, i.QZ)(),
                        o = (0, u.useLocation)().pathname;
                    return l.createElement(
                        r.Z,
                        { style: P.links },
                        j.map((a) => ((!a.featureSwitch || e.isTrue(a.featureSwitch)) && !a.shouldHide?.(t) ? l.createElement(l.Fragment, { key: a.pathname }, l.createElement(r.Z, null, a.isActive(o) ? l.createElement(r.Z, { style: P.currentLink }, l.createElement(g.ZP, { weight: "bold" }, a.label)) : l.createElement(b.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "buttonBlack", link: a.pathname }, a.label, a.decoration && l.createElement(r.Z, { style: P.decoration }, a.decoration)))) : null)),
                    );
                },
                W = () => {
                    const { featureSwitches: e, userClaims: t } = (0, i.QZ)(),
                        o = e.isTrue("recruiting_global_jobs_search_enabled");
                    return l.createElement(
                        l.Fragment,
                        null,
                        o ? l.createElement(r.Z, { style: P.mobileSearchContainer }, l.createElement(D, { styleType: "selection" })) : null,
                        j.map((o) => ((!o.featureSwitch || e.isTrue(o.featureSwitch)) && !o.shouldHide?.(t) ? l.createElement(_.Z, { decoration: o.decoration, icon: o.icon, key: o.pathname, label: o.label, link: o.pathname }) : null)),
                        e.isTrue("recruiting_job_recommendations_enabled") && l.createElement(_.Z, { icon: Z.default, label: E().bb081ea2, link: "/jobs/get-recommendations" }),
                    );
                },
                D = ({ styleType: e }) => {
                    const t = (0, u.useHistory)(),
                        [o, r] = l.useState("");
                    return l.createElement(f.Z, {
                        Icon: w.default,
                        autoComplete: "off",
                        leftAligned: !0,
                        onChange: (e) => r(e.target.value),
                        onClear: () => r(""),
                        onSubmitEditing: () => {
                            const e = o;
                            r(""), t.push(`/jobs?q=${e}`);
                        },
                        placeholder: E().f9e6381a,
                        styleType: e,
                        testID: "search-jobs-nav-input",
                        value: o,
                        withClearButton: !0,
                    });
                },
                P = a.default.create((e) => ({ root: { width: "100%" }, container: { width: "100%", padding: e.spaces.space16, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, header: { gap: e.spaces.space16, display: "flex", flexDirection: "row", alignItems: "center" }, links: { gap: e.spaces.space4, display: "flex", flexDirection: "row", alignItems: "center" }, currentLink: { flexDirection: "row", alignItems: "center", paddingHorizontal: e.spaces.space16, height: e.spaces.space20, color: e.colors.text, borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.gray0, borderColor: e.colors.gray0, minWidth: e.spaces.space36, minHeight: e.spaces.space36 }, mobileSearchContainer: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingVertical: e.spaces.space4, width: "100%" }, searchContainer: { flex: 1, maxWidth: "300px", minWidth: "200px" }, decoration: { paddingStart: e.spaces.space8 } })),
                B = ({ isLoggedIn: e }) => {
                    const t = (0, p.Ji)(),
                        { featureSwitches: o } = (0, i.QZ)(),
                        a = o.isTrue("recruiting_global_jobs_search_enabled"),
                        n = o.isTrue("recruiting_job_recommendations_enabled");
                    return l.createElement(r.Z, { style: P.root }, l.createElement(m, null, l.createElement(r.Z, { style: P.container }, t ? null : l.createElement(k.Z, { disableMenuToggleWhenOpen: !0, renderCustomMenuItems: W }), l.createElement(r.Z, { style: P.header }, l.createElement(R.Z, null), t && l.createElement(T, null)), l.createElement(r.Z, { style: P.links }, t && a && l.createElement(r.Z, { style: P.searchContainer }, l.createElement(D, { styleType: "pill" })), e && t ? l.createElement(l.Fragment, null, n && l.createElement(b.ZP, { icon: l.createElement(Z.default, null), link: "/jobs/get-recommendations", testID: "recommendation-settings-btn", type: "primaryText" }), l.createElement(S.Z, { isExpanded: !1 })) : l.createElement(r.Z, null)))));
                },
                L = () => null,
                A = a.default.create((e) => ({ root: { height: "100vh", width: "100%", flex: 1 }, webViewSpacer: { paddingBottom: "24px" } })),
                M = ({ children: e }) => {
                    (0, s.ph)(), (0, s.G1)();
                    const { loggedInUserId: t } = l.useContext(i.rC),
                        o = !n.ZP.isWebView();
                    return l.createElement(r.Z, { style: A.root }, l.createElement(c.Z.Configure, { TabBar: L, headerless: !0, rightControl: null, sideNav: null, withAppBar: !1, withBottomTabBar: !1 }), l.createElement(m, null, o ? l.createElement(B, { isLoggedIn: Boolean(t) }) : l.createElement("div", { style: A.webViewSpacer }), e));
                };
        },
        998693: (e, t, o) => {
            o.d(t, { Z: () => x });
            var l = o(36879),
                r = o(202784),
                a = o(10622),
                n = o.n(a),
                i = (o(585488), o(437429)),
                s = o.n(i),
                c = o(386802),
                d = o(855488),
                m = o(392237),
                u = o(111677),
                p = o.n(u),
                b = o(665468),
                h = o(666536),
                g = o(125568),
                f = o(874088),
                y = o(339110),
                E = o(524110);
            const Z = p().jaaa8984,
                w = l.Z,
                C = m.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, wrapper: { flex: 1 } })),
                x = ({ onChange: e, onEnter: t, onSelect: o, value: l }) => {
                    const { isModal: a } = r.useContext(c.Z),
                        i = r.useRef(null),
                        m = s()(),
                        [u, p] = r.useState(!1),
                        [x, v] = r.useState([]),
                        [S, k] = r.useState(!1),
                        _ = (0, g.t)(),
                        R = r.useMemo(
                            () =>
                                (0, h.Z)((e) => {
                                    _() &&
                                        (e.length >= 2
                                            ? (p(!0),
                                              k(!0),
                                              ((e) => {
                                                  n()(m, w, { query: e })
                                                      .toPromise()
                                                      .then((e) => {
                                                          v(e?.location_type_ahead || []), k(!1);
                                                      });
                                              })(e))
                                            : p(!1));
                                }, 250),
                            [m, _],
                        ),
                        I = r.useCallback(
                            (t) => {
                                e({ value: t.target.value }), R(t.target.value);
                            },
                            [R, e],
                        ),
                        j = r.useCallback(
                            (e, t) => {
                                i?.current?.focus(), o({ id: e.id, name: e.name }), p(!1);
                            },
                            [o],
                        ),
                        T = r.useCallback(
                            (e) => {
                                const t = x?.map((e) => ({ id: e.location_id, name: e.display_name, type: "job_location", data: {} }));
                                return r.createElement(r.Fragment, null, u ? r.createElement(E.Z, { isLoading: S, items: t, onItemClick: j, ref: e.ref, source: y._4.JobLocation, style: e.style }) : null);
                            },
                            [j, x, S, u],
                        ),
                        W = r.useCallback(
                            (e) => {
                                const { onFocus: o } = e;
                                return r.createElement(d.Z, { Icon: b.default, autoComplete: "off", label: Z, name: "location-selector-input", onChange: I, onFocus: o, onKeyPress: t, ref: i, style: C.inputStyle, testID: "location-selector-input", value: l });
                            },
                            [I, t, l],
                        );
                    return r.createElement(f.default, { isInModal: a, renderCustomDropdown: T, renderCustomInput: W, rounded: !0, source: y._4.JobLocation, testID: "location-selector", userLimit: 20 });
                };
        },
        46705: (e, t, o) => {
            o.d(t, { X: () => l, g: () => r });
            const l = (e) => ({ id: e, distanceToViewportTop: 0 }),
                r = (e) => ({ id: e, distanceToViewportBottom: 0 });
        },
        906433: (e, t, o) => {
            o.d(t, { Z: () => h });
            o(136728);
            var l = o(202784),
                r = o(325686),
                a = o(952428),
                n = o(731708),
                i = o(310088),
                s = o(392237),
                c = o(111677),
                d = o.n(c),
                m = o(206962);
            const u = () => d().d9ef2842,
                p = d().d86bbf0f,
                b = d().h6beb5fb,
                h = ({ badgeCount: e, decoration: t, icon: o, iconColor: s, label: c, link: d, onClick: h, pip: f, rightControl: y, testID: E }) =>
                    l.createElement(
                        r.Z,
                        { style: g.dashMenuItem },
                        l.createElement(
                            a.Z,
                            { link: d, onClick: h, style: g.link, testID: E },
                            l.createElement(
                                r.Z,
                                { style: g.item },
                                o
                                    ? l.createElement(o, {
                                          style: (() => {
                                              const e = [g.icon, g.iconWithDashRedesign];
                                              return s && e.push({ color: s }), e;
                                          })(),
                                          testID: m.Z.icon,
                                      })
                                    : null,
                                l.createElement(n.ZP, { numberOfLines: 1, size: "headline1", style: g.itemLabel, weight: "bold" }, c),
                                e || f ? l.createElement(r.Z, { style: g.itemAccessory }, l.createElement(i.Z, { count: e, pip: f, standalone: !0, truncatedCountFormatter: b, unreadCountLabel: f ? u : p })) : null,
                                t ? l.createElement(r.Z, { style: g.leftMargin }, t) : null,
                            ),
                        ),
                        y,
                    ),
                g = s.default.create((e) => ({ dashMenuItem: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.text, flexShrink: 0, marginEnd: e.spaces.space12 }, iconWithDashRedesign: { alignSelf: "center", marginEnd: e.spaces.space24, height: e.spaces.space24, width: e.spaces.space24 }, item: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, flexDirection: "row", flexGrow: 1, alignItems: "center" }, itemAccessory: { flexShrink: 1, marginStart: e.spaces.space20, minWidth: e.spaces.space24, alignItems: "center" }, itemLabel: { flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space16 }, link: { flexGrow: 1, maxWidth: "100%" } }));
        },
        206962: (e, t, o) => {
            o.d(t, { Z: () => l });
            const l = { iconPlus: "iconPlus", iconMore: "iconMore", logout: "logout", switcher: "switcher", settings: "settings", help: "help", icon: "icon", settingsAndSupport: "settingsAndSupport" };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.JobSearch-b308cbaf.a3d28e7a.js.map
