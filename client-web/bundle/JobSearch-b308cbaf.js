"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.JobSearch-b308cbaf"],
    {
        903233: (e, t, o) => {
            o.d(t, { Z: () => s });
            var a = o(202784),
                r = o(325686),
                n = o(708852),
                l = o(392237);
            const i = l.default.create((e) => ({ root: { display: "flex", flexDirection: "row", height: "calc(100vh - 236px)", marginHorizontal: e.spaces.space16, borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.small, borderStyle: "solid" }, leftRoot: { display: "flex", overflow: "auto" }, rightRoot: { display: "flex", flexBasis: "auto", flexGrow: 1, flexShrink: 1, borderStartWidth: e.borderWidths.small, borderStartColor: e.colors.borderColor, borderStartStyle: "solid", overflow: "auto" }, mobileRoot: { display: "flex", height: "100%" }, mobileLeftRoot: { display: "flex", width: "100%", borderWidth: "0px", borderColor: e.colors.borderColor, borderStyle: "solid", borderBottomStartRadius: e.borderRadii.small }, mobileRightRoot: { position: "absolute", width: "100%", start: "0px", top: "0px", display: "none" }, mobileRightRootActive: { display: "block", backgroundColor: e.colors.cellBackground }, mobileOverlayPosition: { position: "absolute", top: 0, bottom: 0, start: 0, end: 0 }, overlayPosition: { position: "absolute", top: 0, bottom: 0, start: e.spaces.space16, end: e.spaces.space16 }, overlay: { backgroundColor: e.colors.navigationBackground } })),
                s = ({ isFullWidth: e = !1, isRightRootActive: t = !1, leftContent: o, mobileRootStyles: s, overlay: c, rightContent: d, rootStyles: m }) => {
                    const u = (0, n.Ji)(),
                        p = a.useMemo(() => ({ ...i.overlay, opacity: l.default.isDarkerMode() ? 0.8 : 0.9 }), []);
                    return a.createElement(a.Fragment, null, u ? a.createElement(r.Z, { style: { ...i.root, ...m } }, o, e ? null : a.createElement(r.Z, { style: i.rightRoot }, d), c && a.createElement(a.Fragment, null, a.createElement(r.Z, { style: [i.overlayPosition, p] }), a.createElement(r.Z, { style: i.overlayPosition }, c))) : a.createElement(r.Z, { style: { ...i.mobileRoot, ...s } }, a.createElement(r.Z, { style: i.mobileLeftRoot }, o), a.createElement(r.Z, { style: { ...i.mobileRightRoot, ...(t ? i.mobileRightRootActive : {}) } }, d), c && a.createElement(a.Fragment, null, a.createElement(r.Z, { style: [i.mobileOverlayPosition, p] }), a.createElement(r.Z, { style: i.overlayPosition }, c))));
                };
        },
        247411: (e, t, o) => {
            o.d(t, { Z: () => M });
            var a = o(202784),
                r = o(325686),
                n = o(392237),
                l = o(323265),
                i = o(443781),
                s = o(545457),
                c = o(449067);
            const d = n.default.create((e) => ({ container: { flex: 1, width: "100%", maxWidth: "1280px", marginHorizontal: "auto" } })),
                m = ({ children: e }) => a.createElement(r.Z, { style: d.container }, e);
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
                _ = o(134760),
                k = o(906433),
                I = o(439332);
            const R = E().d13d697c,
                P = [
                    { pathname: "/jobs", label: E().b72c924c, icon: w.default, featureSwitch: "recruiting_global_jobs_search_enabled", isActive: (e) => /(\/)?jobs(\/\d+)?(\/)?$/.test(e) },
                    { pathname: "/jobs/recommended", label: E().f4da95a0, icon: C.default, featureSwitch: "recruiting_job_recommendations_enabled", isActive: (e) => /(\/)?jobs\/recommended(\/\d+)?(\/)?$/.test(e) },
                    { pathname: "/jobs/saved", label: E().eedd808c, icon: x.default, featureSwitch: "recruiting_job_recommendations_enabled", isActive: (e) => /(\/)?jobs\/saved(\/\d+)?(\/)?$/.test(e) },
                    { pathname: "/i/hiring", label: E().e0ba641a, icon: v.default, isActive: (e) => /(\/)?i\/hiring(\/\d+)?(\/)?$/.test(e), shouldHide: (e) => e.isVerifiedOrg(), decoration: a.createElement(h.ZP, { background: "blue500" }, a.createElement(g.ZP, { size: "subtext2" }, R)) },
                ],
                D = () => {
                    const { featureSwitches: e, userClaims: t } = (0, i.QZ)(),
                        o = (0, u.useLocation)().pathname;
                    return a.createElement(
                        r.Z,
                        { style: W.links },
                        P.map((n) => ((!n.featureSwitch || e.isTrue(n.featureSwitch)) && !n.shouldHide?.(t) ? a.createElement(a.Fragment, { key: n.pathname }, a.createElement(r.Z, null, n.isActive(o) ? a.createElement(r.Z, { style: W.currentLink }, a.createElement(g.ZP, { weight: "bold" }, n.label)) : a.createElement(b.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "buttonBlack", link: n.pathname }, n.label, n.decoration && a.createElement(r.Z, { style: W.decoration }, n.decoration)))) : null)),
                    );
                },
                T = () => {
                    const { featureSwitches: e, userClaims: t } = (0, i.QZ)(),
                        o = e.isTrue("recruiting_global_jobs_search_enabled");
                    return a.createElement(
                        a.Fragment,
                        null,
                        o ? a.createElement(r.Z, { style: W.mobileSearchContainer }, a.createElement(j, { styleType: "selection" })) : null,
                        P.map((o) => ((!o.featureSwitch || e.isTrue(o.featureSwitch)) && !o.shouldHide?.(t) ? a.createElement(k.Z, { decoration: o.decoration, icon: o.icon, key: o.pathname, label: o.label, link: o.pathname }) : null)),
                        e.isTrue("recruiting_job_recommendations_enabled") && a.createElement(k.Z, { icon: Z.default, label: E().bb081ea2, link: "/jobs/get-recommendations" }),
                    );
                },
                j = ({ styleType: e }) => {
                    const t = (0, u.useHistory)(),
                        [o, r] = a.useState("");
                    return a.createElement(f.Z, {
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
                W = n.default.create((e) => ({ root: { width: "100%" }, container: { width: "100%", padding: e.spaces.space16, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, header: { gap: e.spaces.space16, display: "flex", flexDirection: "row", alignItems: "center" }, links: { gap: e.spaces.space4, display: "flex", flexDirection: "row", alignItems: "center" }, currentLink: { flexDirection: "row", alignItems: "center", paddingHorizontal: e.spaces.space16, height: e.spaces.space20, color: e.colors.text, borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.gray0, borderColor: e.colors.gray0, minWidth: e.spaces.space36, minHeight: e.spaces.space36 }, mobileSearchContainer: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingVertical: e.spaces.space4, width: "100%" }, searchContainer: { flex: 1, maxWidth: "300px", minWidth: "200px" }, decoration: { paddingStart: e.spaces.space8 } })),
                B = ({ isLoggedIn: e }) => {
                    const t = (0, p.Ji)(),
                        { featureSwitches: o } = (0, i.QZ)(),
                        n = o.isTrue("recruiting_global_jobs_search_enabled"),
                        l = o.isTrue("recruiting_job_recommendations_enabled");
                    return a.createElement(r.Z, { style: W.root }, a.createElement(m, null, a.createElement(r.Z, { style: W.container }, t ? null : a.createElement(_.Z, { disableMenuToggleWhenOpen: !0, renderCustomMenuItems: T }), a.createElement(r.Z, { style: W.header }, a.createElement(I.Z, null), t && a.createElement(D, null)), a.createElement(r.Z, { style: W.links }, t && n && a.createElement(r.Z, { style: W.searchContainer }, a.createElement(j, { styleType: "pill" })), e && t ? a.createElement(a.Fragment, null, l && a.createElement(b.ZP, { icon: a.createElement(Z.default, null), link: "/jobs/get-recommendations", testID: "recommendation-settings-btn", type: "primaryText" }), a.createElement(S.Z, { isExpanded: !1 })) : a.createElement(r.Z, null)))));
                },
                L = () => null,
                A = n.default.create((e) => ({ root: { height: "100vh", width: "100%", flex: 1 }, webViewSpacer: { paddingBottom: "24px" } })),
                M = ({ children: e }) => {
                    (0, s.ph)(), (0, s.G1)();
                    const { loggedInUserId: t } = a.useContext(i.rC),
                        o = !l.ZP.isWebView();
                    return a.createElement(r.Z, { style: A.root }, a.createElement(c.Z.Configure, { TabBar: L, headerless: !0, rightControl: null, sideNav: null, withAppBar: !1, withBottomTabBar: !1 }), a.createElement(m, null, o ? a.createElement(B, { isLoggedIn: Boolean(t) }) : a.createElement("div", { style: A.webViewSpacer }), e));
                };
        },
        856438: (e, t, o) => {
            o.d(t, { Z: () => u });
            var a = o(202784),
                r = o(868634),
                n = o(731708),
                l = o(392237),
                i = o(111677),
                s = o.n(i),
                c = o(262009);
            const d = s().a71d7584,
                m = l.default.create((e) => ({ label: { alignSelf: "auto" }, featuredLabel: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, featuredIcon: { height: e.spaces.space12 } })),
                u = () => a.createElement(r.ZP, { style: m.label, type: "priority" }, a.createElement(n.ZP, { style: m.featuredLabel }, a.createElement(c.default, { style: m.featuredIcon }), d));
        },
        150123: (e, t, o) => {
            o.d(t, { Z: () => l });
            var a = o(202784),
                r = o(691533),
                n = o(402058);
            const l = (e) => a.createElement(r.Z, { hideOnError: !0 }, a.createElement(n.Z, e));
        },
        998693: (e, t, o) => {
            o.d(t, { Z: () => x });
            var a = o(36879),
                r = o(202784),
                n = o(10622),
                l = o.n(n),
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
                w = a.Z,
                C = m.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, wrapper: { flex: 1 } })),
                x = ({ onChange: e, onEnter: t, onSelect: o, value: a }) => {
                    const { isModal: n } = r.useContext(c.Z),
                        i = r.useRef(null),
                        m = s()(),
                        [u, p] = r.useState(!1),
                        [x, v] = r.useState([]),
                        [S, _] = r.useState(!1),
                        k = (0, g.t)(),
                        I = r.useMemo(
                            () =>
                                (0, h.Z)((e) => {
                                    k() &&
                                        (e.length >= 2
                                            ? (p(!0),
                                              _(!0),
                                              ((e) => {
                                                  l()(m, w, { query: e })
                                                      .toPromise()
                                                      .then((e) => {
                                                          v(e?.location_type_ahead || []), _(!1);
                                                      });
                                              })(e))
                                            : p(!1));
                                }, 250),
                            [m, k],
                        ),
                        R = r.useCallback(
                            (t) => {
                                e({ value: t.target.value }), I(t.target.value);
                            },
                            [I, e],
                        ),
                        P = r.useCallback(
                            (e, t) => {
                                i?.current?.focus(), o({ id: e.id, name: e.name }), p(!1);
                            },
                            [o],
                        ),
                        D = r.useCallback(
                            (e) => {
                                const t = x?.map((e) => ({ id: e.location_id, name: e.display_name, type: "job_location", data: {} }));
                                return r.createElement(r.Fragment, null, u ? r.createElement(E.Z, { isLoading: S, items: t, onItemClick: P, ref: e.ref, source: y._4.JobLocation, style: e.style }) : null);
                            },
                            [P, x, S, u],
                        ),
                        T = r.useCallback(
                            (e) => {
                                const { onFocus: o } = e;
                                return r.createElement(d.Z, { Icon: b.default, autoComplete: "off", label: Z, name: "location-selector-input", onChange: R, onFocus: o, onKeyPress: t, ref: i, style: C.inputStyle, testID: "location-selector-input", value: a });
                            },
                            [R, t, a],
                        );
                    return r.createElement(f.default, { isInModal: n, renderCustomDropdown: D, renderCustomInput: T, rounded: !0, source: y._4.JobLocation, testID: "location-selector", userLimit: 20 });
                };
        },
        46705: (e, t, o) => {
            o.d(t, { X: () => a, g: () => r });
            const a = (e) => ({ id: e, distanceToViewportTop: 0 }),
                r = (e) => ({ id: e, distanceToViewportBottom: 0 });
        },
        334346: (e, t, o) => {
            o.d(t, { C: () => s, Z: () => i });
            var a = o(807896),
                r = o(202784),
                n = o(524084),
                l = o(768572);
            const i = "stable_sort_index",
                s = r.forwardRef((e, t) => {
                    const o = e.cacheKey;
                    return r.createElement(l.ZP, { identifier: o }, r.createElement(n.Z, (0, a.Z)({ ref: t }, e)));
                });
        },
        252021: (e, t, o) => {
            o.d(t, { Z: () => l });
            var a = o(202784),
                r = o(107267),
                n = o(115553);
            const l = (e) => {
                (0, r.useHistory)();
                return a.createElement(n.A, e);
            };
        },
        906433: (e, t, o) => {
            o.d(t, { Z: () => h });
            o(136728);
            var a = o(202784),
                r = o(325686),
                n = o(952428),
                l = o(731708),
                i = o(310088),
                s = o(392237),
                c = o(111677),
                d = o.n(c),
                m = o(206962);
            const u = () => d().d9ef2842,
                p = d().d86bbf0f,
                b = d().h6beb5fb,
                h = ({ badgeCount: e, decoration: t, icon: o, iconColor: s, label: c, link: d, onClick: h, pip: f, rightControl: y, testID: E }) =>
                    a.createElement(
                        r.Z,
                        { style: g.dashMenuItem },
                        a.createElement(
                            n.Z,
                            { link: d, onClick: h, style: g.link, testID: E },
                            a.createElement(
                                r.Z,
                                { style: g.item },
                                o
                                    ? a.createElement(o, {
                                          style: (() => {
                                              const e = [g.icon, g.iconWithDashRedesign];
                                              return s && e.push({ color: s }), e;
                                          })(),
                                          testID: m.Z.icon,
                                      })
                                    : null,
                                a.createElement(l.ZP, { numberOfLines: 1, size: "headline1", style: g.itemLabel, weight: "bold" }, c),
                                e || f ? a.createElement(r.Z, { style: g.itemAccessory }, a.createElement(i.Z, { count: e, pip: f, standalone: !0, truncatedCountFormatter: b, unreadCountLabel: f ? u : p })) : null,
                                t ? a.createElement(r.Z, { style: g.leftMargin }, t) : null,
                            ),
                        ),
                        y,
                    ),
                g = s.default.create((e) => ({ dashMenuItem: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.text, flexShrink: 0, marginEnd: e.spaces.space12 }, iconWithDashRedesign: { alignSelf: "center", marginEnd: e.spaces.space24, height: e.spaces.space24, width: e.spaces.space24 }, item: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, flexDirection: "row", flexGrow: 1, alignItems: "center" }, itemAccessory: { flexShrink: 1, marginStart: e.spaces.space20, minWidth: e.spaces.space24, alignItems: "center" }, itemLabel: { flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space16 }, link: { flexGrow: 1, maxWidth: "100%" } }));
        },
        206962: (e, t, o) => {
            o.d(t, { Z: () => a });
            const a = { iconPlus: "iconPlus", iconMore: "iconMore", logout: "logout", switcher: "switcher", settings: "settings", help: "help", icon: "icon", settingsAndSupport: "settingsAndSupport" };
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var a = o(202784),
                r = o(500002),
                n = o(668214),
                l = o(997174),
                i = o(118823);
            const s = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class c extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: a },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: n, search: l },
                            locationKey: i,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const c = r || i;
                    ((c && r !== i) || (!c && o !== n) || a !== l || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(s(c));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.JobSearch-b308cbaf.d476473a.js.map
