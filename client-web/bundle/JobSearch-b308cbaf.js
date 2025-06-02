"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.JobSearch-b308cbaf"],
    {
        903233: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(202784),
                r = a(325686),
                o = a(708852),
                c = a(392237);
            const s = c.default.create((e) => ({ root: { display: "flex", flexDirection: "row", height: "calc(100vh - 236px)", marginHorizontal: e.spaces.space16, borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.small, borderStyle: "solid" }, leftRoot: { display: "flex", overflow: "auto" }, rightRoot: { display: "flex", flexBasis: "auto", flexGrow: 1, flexShrink: 1, borderStartWidth: e.borderWidths.small, borderStartColor: e.colors.borderColor, borderStartStyle: "solid", overflow: "auto" }, mobileRoot: { display: "flex", height: "100%" }, mobileLeftRoot: { display: "flex", width: "100%", borderWidth: "0px", borderColor: e.colors.borderColor, borderStyle: "solid", borderBottomStartRadius: e.borderRadii.small }, mobileRightRoot: { position: "absolute", width: "100%", start: "0px", top: "0px", display: "none" }, mobileRightRootActive: { display: "block", backgroundColor: e.colors.cellBackground }, mobileOverlayPosition: { position: "absolute", top: 0, bottom: 0, start: 0, end: 0 }, overlayPosition: { position: "absolute", top: 0, bottom: 0, start: e.spaces.space16, end: e.spaces.space16 }, overlay: { backgroundColor: e.colors.navigationBackground } })),
                l = ({ isFullWidth: e = !1, isRightRootActive: t = !1, leftContent: a, mobileRootStyles: l, overlay: i, rightContent: d, rootStyles: u }) => {
                    const m = (0, o.Ji)(),
                        p = n.useMemo(() => ({ ...s.overlay, opacity: c.default.isDarkerMode() ? 0.8 : 0.9 }), []);
                    return n.createElement(n.Fragment, null, m ? n.createElement(r.Z, { style: { ...s.root, ...u } }, a, e ? null : n.createElement(r.Z, { style: s.rightRoot }, d), i && n.createElement(n.Fragment, null, n.createElement(r.Z, { style: [s.overlayPosition, p] }), n.createElement(r.Z, { style: s.overlayPosition }, i))) : n.createElement(r.Z, { style: { ...s.mobileRoot, ...l } }, n.createElement(r.Z, { style: s.mobileLeftRoot }, a), n.createElement(r.Z, { style: { ...s.mobileRightRoot, ...(t ? s.mobileRightRootActive : {}) } }, d), i && n.createElement(n.Fragment, null, n.createElement(r.Z, { style: [s.mobileOverlayPosition, p] }), n.createElement(r.Z, { style: s.overlayPosition }, i))));
                };
        },
        247411: (e, t, a) => {
            a.d(t, { Z: () => P });
            var n = a(202784),
                r = a(325686),
                o = a(392237),
                c = a(323265),
                s = a(443781),
                l = a(545457),
                i = a(449067);
            const d = o.default.create((e) => ({ container: { flex: 1, width: "100%", maxWidth: "1280px", marginHorizontal: "auto" } })),
                u = ({ children: e }) => n.createElement(r.Z, { style: d.container }, e);
            a(136728);
            var m = a(107267),
                p = a(708852),
                h = a(154003),
                g = a(868634),
                b = a(731708),
                f = a(371344),
                C = a(111677),
                E = a.n(C),
                y = a(698891),
                w = a(956272),
                _ = a(487606),
                v = a(106186),
                A = a(720930),
                Z = a(763881),
                k = a(134760),
                S = a(906433),
                I = a(439332);
            const x = E().d13d697c,
                U = [
                    { pathname: "/jobs", label: E().b72c924c, icon: w.default, featureSwitch: "recruiting_global_jobs_search_enabled", isActive: (e) => /(\/)?jobs(\/\d+)?(\/)?$/.test(e) },
                    { pathname: "/jobs/recommended", label: E().f4da95a0, icon: _.default, featureSwitch: "recruiting_job_recommendations_enabled", isActive: (e) => /(\/)?jobs\/recommended(\/\d+)?(\/)?$/.test(e) },
                    { pathname: "/jobs/saved", label: E().eedd808c, icon: v.default, featureSwitch: "recruiting_job_recommendations_enabled", isActive: (e) => /(\/)?jobs\/saved(\/\d+)?(\/)?$/.test(e) },
                    { pathname: "/i/hiring", label: E().e0ba641a, icon: A.default, isActive: (e) => /(\/)?i\/hiring(\/\d+)?(\/)?$/.test(e), shouldHide: (e) => e.isVerifiedOrg(), decoration: n.createElement(g.ZP, { background: "blue500" }, n.createElement(b.ZP, { size: "subtext2" }, x)) },
                ],
                D = () => {
                    const { featureSwitches: e, userClaims: t } = (0, s.QZ)(),
                        a = (0, m.useLocation)().pathname;
                    return n.createElement(
                        r.Z,
                        { style: L.links },
                        U.map((o) => ((!o.featureSwitch || e.isTrue(o.featureSwitch)) && !o.shouldHide?.(t) ? n.createElement(n.Fragment, { key: o.pathname }, n.createElement(r.Z, null, o.isActive(a) ? n.createElement(r.Z, { style: L.currentLink }, n.createElement(b.ZP, { weight: "bold" }, o.label)) : n.createElement(h.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "buttonBlack", link: o.pathname }, o.label, o.decoration && n.createElement(r.Z, { style: L.decoration }, o.decoration)))) : null)),
                    );
                },
                B = () => {
                    const { featureSwitches: e, userClaims: t } = (0, s.QZ)(),
                        a = e.isTrue("recruiting_global_jobs_search_enabled");
                    return n.createElement(
                        n.Fragment,
                        null,
                        a ? n.createElement(r.Z, { style: L.mobileSearchContainer }, n.createElement(M, { styleType: "selection" })) : null,
                        U.map((a) => ((!a.featureSwitch || e.isTrue(a.featureSwitch)) && !a.shouldHide?.(t) ? n.createElement(S.Z, { decoration: a.decoration, icon: a.icon, key: a.pathname, label: a.label, link: a.pathname }) : null)),
                        e.isTrue("recruiting_job_recommendations_enabled") && n.createElement(S.Z, { icon: y.default, label: E().bb081ea2, link: "/jobs/get-recommendations" }),
                    );
                },
                M = ({ styleType: e }) => {
                    const t = (0, m.useHistory)(),
                        [a, r] = n.useState("");
                    return n.createElement(f.Z, {
                        Icon: w.default,
                        autoComplete: "off",
                        leftAligned: !0,
                        onChange: (e) => r(e.target.value),
                        onClear: () => r(""),
                        onSubmitEditing: () => {
                            const e = a;
                            r(""), t.push(`/jobs?q=${e}`);
                        },
                        placeholder: E().f9e6381a,
                        styleType: e,
                        testID: "search-jobs-nav-input",
                        value: a,
                        withClearButton: !0,
                    });
                },
                L = o.default.create((e) => ({ root: { width: "100%" }, container: { width: "100%", padding: e.spaces.space16, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, header: { gap: e.spaces.space16, display: "flex", flexDirection: "row", alignItems: "center" }, links: { gap: e.spaces.space4, display: "flex", flexDirection: "row", alignItems: "center" }, currentLink: { flexDirection: "row", alignItems: "center", paddingHorizontal: e.spaces.space16, height: e.spaces.space20, color: e.colors.text, borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.gray0, borderColor: e.colors.gray0, minWidth: e.spaces.space36, minHeight: e.spaces.space36 }, mobileSearchContainer: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingVertical: e.spaces.space4, width: "100%" }, searchContainer: { flex: 1, maxWidth: "300px", minWidth: "200px" }, decoration: { paddingStart: e.spaces.space8 } })),
                T = ({ isLoggedIn: e }) => {
                    const t = (0, p.Ji)(),
                        { featureSwitches: a } = (0, s.QZ)(),
                        o = a.isTrue("recruiting_global_jobs_search_enabled"),
                        c = a.isTrue("recruiting_job_recommendations_enabled");
                    return n.createElement(r.Z, { style: L.root }, n.createElement(u, null, n.createElement(r.Z, { style: L.container }, t ? null : n.createElement(k.Z, { disableMenuToggleWhenOpen: !0, renderCustomMenuItems: B }), n.createElement(r.Z, { style: L.header }, n.createElement(I.Z, null), t && n.createElement(D, null)), n.createElement(r.Z, { style: L.links }, t && o && n.createElement(r.Z, { style: L.searchContainer }, n.createElement(M, { styleType: "pill" })), e && t ? n.createElement(n.Fragment, null, c && n.createElement(h.ZP, { icon: n.createElement(y.default, null), link: "/jobs/get-recommendations", testID: "recommendation-settings-btn", type: "primaryText" }), n.createElement(Z.Z, { isExpanded: !1 })) : n.createElement(r.Z, null)))));
                },
                R = () => null,
                F = o.default.create((e) => ({ root: { height: "100vh", width: "100%", flex: 1 }, webViewSpacer: { paddingBottom: "24px" } })),
                P = ({ children: e }) => {
                    (0, l.ph)(), (0, l.G1)();
                    const { loggedInUserId: t } = n.useContext(s.rC),
                        a = !c.ZP.isWebView();
                    return n.createElement(r.Z, { style: F.root }, n.createElement(i.Z.Configure, { TabBar: R, headerless: !0, rightControl: null, sideNav: null, withAppBar: !1, withBottomTabBar: !1 }), n.createElement(u, null, a ? n.createElement(T, { isLoggedIn: Boolean(t) }) : n.createElement("div", { style: F.webViewSpacer }), e));
                };
        },
        998693: (e, t, a) => {
            a.d(t, { Z: () => v });
            var n = a(36879),
                r = a(202784),
                o = a(10622),
                c = a.n(o),
                s = (a(585488), a(437429)),
                l = a.n(s),
                i = a(386802),
                d = a(855488),
                u = a(392237),
                m = a(111677),
                p = a.n(m),
                h = a(665468),
                g = a(666536),
                b = a(125568),
                f = a(874088),
                C = a(339110),
                E = a(524110);
            const y = p().jaaa8984,
                w = n.Z,
                _ = u.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, wrapper: { flex: 1 } })),
                v = ({ onChange: e, onEnter: t, onSelect: a, value: n }) => {
                    const { isModal: o } = r.useContext(i.Z),
                        s = r.useRef(null),
                        u = l()(),
                        [m, p] = r.useState(!1),
                        [v, A] = r.useState([]),
                        [Z, k] = r.useState(!1),
                        S = (0, b.t)(),
                        I = r.useMemo(
                            () =>
                                (0, g.Z)((e) => {
                                    S() &&
                                        (e.length >= 2
                                            ? (p(!0),
                                              k(!0),
                                              ((e) => {
                                                  c()(u, w, { query: e })
                                                      .toPromise()
                                                      .then((e) => {
                                                          A(e?.location_type_ahead || []), k(!1);
                                                      });
                                              })(e))
                                            : p(!1));
                                }, 250),
                            [u, S],
                        ),
                        x = r.useCallback(
                            (t) => {
                                e({ value: t.target.value }), I(t.target.value);
                            },
                            [I, e],
                        ),
                        U = r.useCallback(
                            (e, t) => {
                                s?.current?.focus(), a({ id: e.id, name: e.name }), p(!1);
                            },
                            [a],
                        ),
                        D = r.useCallback(
                            (e) => {
                                const t = v?.map((e) => ({ id: e.location_id, name: e.display_name, type: "job_location", data: {} }));
                                return r.createElement(r.Fragment, null, m ? r.createElement(E.Z, { isLoading: Z, items: t, onItemClick: U, ref: e.ref, source: C._4.JobLocation, style: e.style }) : null);
                            },
                            [U, v, Z, m],
                        ),
                        B = r.useCallback(
                            (e) => {
                                const { onFocus: a } = e;
                                return r.createElement(d.Z, { Icon: h.default, autoComplete: "off", label: y, name: "location-selector-input", onChange: x, onFocus: a, onKeyPress: t, ref: s, style: _.inputStyle, testID: "location-selector-input", value: n });
                            },
                            [x, t, n],
                        );
                    return r.createElement(f.default, { isInModal: o, renderCustomDropdown: D, renderCustomInput: B, rounded: !0, source: C._4.JobLocation, testID: "location-selector", userLimit: 20 });
                };
        },
        46705: (e, t, a) => {
            a.d(t, { X: () => n, g: () => r });
            const n = (e) => ({ id: e, distanceToViewportTop: 0 }),
                r = (e) => ({ id: e, distanceToViewportBottom: 0 });
        },
        229412: (e, t, a) => {
            a.d(t, { a: () => j });
            a(136728);
            var n = a(202784),
                r = a(325686),
                o = a(530732),
                c = a(310088),
                s = a(731708),
                l = a(673510),
                i = a(661810),
                d = a(392237),
                u = a(111677),
                m = a.n(u),
                p = a(297896),
                h = a(293723),
                g = a(58399),
                b = a(913973),
                f = a(516951),
                C = a(725516),
                E = a(125363),
                y = a(806960);
            const w = m().h6beb5fb,
                _ = m().d86bbf0f,
                v = d.default.create((e) => ({ notificationBadge: { paddingHorizontal: e.spaces.space4 } })),
                A = ({ notificationCount: e = 0 }) => (e > 0 ? n.createElement(c.Z, { count: e, style: e > 9 && v.notificationBadge, truncatedCountFormatter: w, unreadCountLabel: _ }) : null);
            var Z = a(110512),
                k = a(642153),
                S = a(899667),
                I = a(487552),
                x = a(390387);
            const U = m().c61eea74,
                D = m().b7dc3885,
                B = m().d86bbf0f,
                M = m().h6beb5fb,
                L = ({ accountUsers: e, activeUser: t, handleMultiAccountSwitch: a, isUpdatedManageAccounts: o, renderUserDecoration: d, userTestId: u, withBadges: m }) => {
                    const p = (0, E.v9)(x.BP),
                        h = !0,
                        [g, b] = n.useState(!1),
                        f = n.useMemo(() => e.filter((e) => e.user_id !== t?.id_str), [e, t]),
                        C = n.useMemo(() => f.reduce((e, t) => e + (t.badgeCount || 0), 0), [f]),
                        y = n.useCallback(() => {
                            b(!g);
                        }, [g]),
                        w = n.useMemo(() => (p && p > 0 ? n.createElement(r.Z, { onClick: y, style: T.personalAccountsLabel }, n.createElement(s.ZP, { color: "gray700", weight: "bold" }, U), g ? n.createElement(S.default, { style: T.IconChevronUp }) : n.createElement(I.default, { style: T.IconChevronDown })) : null), [h, p, y, g]),
                        _ = n.useMemo(
                            () =>
                                f.map((e) => {
                                    const t = e.badgeCount ?? 0;
                                    return n.createElement(n.Fragment, { key: e.user_id }, n.createElement(l.ZP, { affiliateBadgeInfo: e.highlighted_label, "aria-label": D({ screenName: e.screen_name }), avatarDecoration: o && n.createElement(A, { notificationCount: t }), avatarUri: e.avatar_image_url, badgeContext: "account", decoration: d({ badgeCount: t, withBadges: m, isActiveUser: !1 }), displayMode: "UserCompact", isBlueVerified: e.is_blue_verified, isProtected: e.is_protected, isVerified: e.is_verified, name: e.name, onCellClick: a({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }), screenName: e.screen_name, testID: u, userId: e.user_id, verifiedType: e.verified_type, withLink: !1 }), o && n.createElement(i.Z, { style: T.accountDivider }));
                                }),
                            [a, f, d, u, m, o],
                        ),
                        v = n.useMemo(() => n.createElement(r.Z, { style: T.facePileContainer }, n.createElement(k.Z, { userAvatarSize: "large", userAvatarUrls: f.map((e) => e.avatar_image_url) }), C > 0 ? n.createElement(c.Z, { count: C, standalone: !0, truncatedCountFormatter: M, unreadCountLabel: B }) : null), [f, C]);
                    return f.length > 0 ? n.createElement(n.Fragment, null, !o && w, o || g || void 0 === p || 0 === p ? _ : v) : null;
                },
                T = d.default.create((e) => ({ personalAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                R = n.memo(L);
            var F = a(22132);
            const P = m().c61eea74,
                H = m().d86bbf0f,
                W = m().h6beb5fb;
            function j(e) {
                const { accountSwitch: t, accountUsers: a, activeUser: d, clearDelegateUser: u, delegateAccountCount: m, delegateUser: w, isDelegateEnabled: _, isUpdatedManageAccounts: v, onDelegateSwitch: k, onUserSwitch: S, userTestId: I, withBadges: x = !1 } = e,
                    U = !!w,
                    D = a.some((e) => e.user_id === d.id_str) || (m && m > 0) || U,
                    B = n.useCallback(() => {
                        u && u();
                    }, [u]),
                    M = n.useCallback(
                        ({ hasBadge: e, isProtected: a, userId: n }) =>
                            () => {
                                t({ hasBadge: e, isProtected: a, userId: n }), S?.();
                            },
                        [t, S],
                    ),
                    L = (0, E.v9)(y.pm),
                    T = (0, E.v9)(y.QA),
                    j = (0, C.z)(),
                    N = n.useCallback(
                        ({ isActiveUser: e, isLoggedInUser: t }) => {
                            const a = [];
                            return (
                                t &&
                                    a.push(
                                        n.createElement(
                                            o.Z,
                                            {
                                                link: "/logout",
                                                onClick: () => {
                                                    j.scribe({ action: "click", element: "log_out" });
                                                },
                                                testID: F.Z.logout,
                                                withoutInteractiveStyles: !0,
                                            },
                                            n.createElement(p.default, { style: z.IconExiting }),
                                        ),
                                    ),
                                a.push(e ? n.createElement(h.default, { style: z.updatedIconCheckmarkCircleFill }) : n.createElement(g.default, { style: z.IconChevronRight })),
                                n.createElement(
                                    r.Z,
                                    { style: z.decorationsContainer },
                                    a.map((e, t) => n.createElement(n.Fragment, { key: t }, e)),
                                )
                            );
                        },
                        [j],
                    ),
                    V = n.useCallback(({ badgeCount: e, isActiveUser: t, withBadges: a }) => (t ? (_ ? n.createElement(h.default, { style: [z.IconCheckmarkCircleFill, z.userDecoration] }) : n.createElement(b.default, { style: [z.iconCheckMark, z.userDecoration] })) : e && a ? n.createElement(c.Z, { count: e, standalone: !0, style: z.userDecoration, truncatedCountFormatter: W, unreadCountLabel: H }) : void 0), [_]),
                    O = n.useMemo(() => (v ? N : V), [v, V, N]),
                    G = n.useMemo(() => n.createElement(Z.ZP, { activeUserId: d.id_str, delegateUser: w, isUpdatedManageAccounts: v, key: 0, onDelegateSwitch: k ?? f.Z, renderUserDecoration: O }), [d.id_str, w, v, k, O]),
                    $ = n.useMemo(() => n.createElement(R, { accountUsers: a, activeUser: d, handleMultiAccountSwitch: M, isUpdatedManageAccounts: !!v, key: 1, renderUserDecoration: O, userTestId: I, withBadges: x }), [a, d, M, v, O, I, x]),
                    J = [];
                return !v && _ && J.push(G), J.push($), v && _ && J.push(G), n.createElement(n.Fragment, null, v && _ && n.createElement(r.Z, { style: z.personalAccountsLabel }, n.createElement(s.ZP, { color: "gray700", weight: "bold" }, P)), D ? n.createElement(n.Fragment, null, n.createElement(l.ZP, { affiliateBadgeInfo: d.highlightedLabel, avatarDecoration: v && n.createElement(A, { notificationCount: L + T }), avatarUri: d.profile_image_url_https, badgeContext: "account", decoration: O({ withBadges: x, isActiveUser: !w, isLoggedInUser: !0 }), displayMode: "UserCompact", isBlueVerified: d.is_blue_verified, isProtected: d.protected, isVerified: d.verified, name: d.name, onCellClick: U ? B : void 0, screenName: d.screen_name, testID: I, userId: d.id_str, verifiedType: d.verified_type, withLink: !1 }), v && n.createElement(i.Z, { style: z.accountDivider })) : null, J, !v && (D || m || a.length) ? n.createElement(i.Z, { spacing: "space12" }) : null);
            }
            const z = d.default.create((e) => ({ iconCheckMark: { color: e.colors.primary, flexShrink: 0 }, IconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, marginEnd: e.spaces.space8 }, updatedIconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconExiting: { color: e.colors.red500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconChevronRight: { color: "inherit", flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, decorationsContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, userDecoration: { marginStart: e.spaces.space12 }, personalAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 } }));
        },
        763881: (e, t, a) => {
            a.d(t, { Z: () => be });
            a(136728);
            var n = a(202784),
                r = a(400752),
                o = a(111677),
                c = a.n(o),
                s = a(325686),
                l = a(58881),
                i = a(392237),
                d = a(157130),
                u = a(530732),
                m = a(443781),
                p = a(884161),
                h = a(521514),
                g = a(614983),
                b = a.n(g),
                f = a(618186),
                C = a(366635),
                E = a(310088),
                y = a(149170),
                w = a(952793),
                _ = a(125363),
                v = a(919022);
            const A = c().d86bbf0f,
                Z = c().h6beb5fb;
            function k(e) {
                const { isExpanded: t } = e,
                    a = (0, w.hC)("rweb_sourcemap_migration"),
                    r = (0, _.v9)(v.ZP.selectViewerUser);
                b()(r, "user must be defined");
                const { highlightedLabel: o, is_blue_verified: c, name: l, profile_image_url_https: i, protected: d, screen_name: u, verified: m, verified_type: p } = r;
                return n.createElement(n.Fragment, null, n.createElement(s.Z, null, n.createElement(f.Z, { "aria-label": l, screenName: u, size: "xLarge", style: a && I.userAvatarRedesign, uri: i }), t ? null : S(e)), t ? n.createElement(n.Fragment, null, n.createElement(C.Z, { affiliateBadgeInfo: o, badgeContext: "account", isBlueVerified: c, isProtected: d, isVerified: m, name: l, screenName: u, style: I.userName, verifiedType: p, withStackedLayout: !0 }), n.createElement(s.Z, { style: I.iconContainer }, n.createElement(y.default, { style: I.icon }), t ? S(e) : null)) : null);
            }
            function S({ hasMultiAccountBadges: e, isExpanded: t }) {
                return e ? n.createElement(E.Z, { pip: !0, style: t && I.pip, truncatedCountFormatter: Z, unreadCountLabel: A }) : null;
            }
            const I = i.default.create((e) => ({ icon: { color: e.colors.text }, iconContainer: { alignItems: "flex-end", flexGrow: 1 }, pip: { position: "absolute", end: `calc(-1 * ${e.spaces.space4})`, top: `calc(-1 * ${e.spaces.space4})` }, userName: { flexGrow: 1, marginHorizontal: e.spaces.space12 }, userAvatarRedesign: { width: e.spaces.space36, height: e.spaces.space36 } })),
                x = c().b8e1d524,
                U = c().gef27c4c;
            class D extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderEmptyState = () => {
                            const { renderEmptyState: e } = this.props;
                            return e ? n.createElement(s.Z, { style: B.emptyStateWrapper }, e()) : null;
                        }),
                        (this._handleAccountSwitcherClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ action: "click" });
                        });
                }
                render() {
                    const { "aria-label": e, currentUser: t, delegateUser: a, hasMultiAccountBadges: r, hoverLabel: o, interactiveViewTestId: c, isExpanded: s, renderEmptyState: m, renderMenuSheet: h, style: g } = this.props,
                        b = this.context.featureSwitches.isTrue("rweb_sourcemap_migration"),
                        f = [B.anchorContainer, b && B.anchorContainerRedesign, g];
                    return t || m ? n.createElement(d.Z, { contentStyle: B.menuContainer, enableEnterKeyToggle: !0, renderContent: h, withArrow: !0, withFixedPosition: !0 }, n.createElement(u.Z, { "aria-label": e || U, hoverLabel: s ? void 0 : { label: o || x }, interactiveStyles: l.Z.generate({ backgroundColor: "transparent", color: i.default.theme.colors.text }), onClick: this._handleAccountSwitcherClick, role: "button", style: f, testID: c }, a ? n.createElement(p.p, { forceUserId: a.userId }, n.createElement(k, { hasMultiAccountBadges: r, isExpanded: s })) : t ? n.createElement(k, { hasMultiAccountBadges: r, isExpanded: s }) : this._renderEmptyState())) : null;
                }
            }
            D.contextType = m.rC;
            const B = i.default.create((e) => ({ anchorContainer: { alignItems: "center", borderRadius: e.borderRadii.infinite, display: "flex", flexDirection: "row", padding: e.spaces.space12 }, anchorContainerRedesign: { padding: 8 }, icon: { color: e.colors.text }, iconContainer: { alignItems: "flex-end", flexGrow: 1 }, pip: { position: "absolute", end: `calc(-1 * ${e.spaces.space4})`, top: `calc(-1 * ${e.spaces.space4})` }, userName: { flexGrow: 1, marginHorizontal: e.spaces.space12 }, menuContainer: { width: h.Z.cardWidth.normal }, emptyStateWrapper: { height: e.spaces.space40, minWidth: e.spaces.space40, width: "100%" } }));
            var M = a(380155),
                L = a(755296),
                T = a(725516),
                R = a(193850),
                F = a(823161),
                P = a(879113),
                H = a(266704),
                W = a(550475),
                j = a(516951),
                z = a(615656);
            const N = ({ children: e }) => {
                const t = n.useRef(null);
                return (
                    n.useLayoutEffect(() => {
                        const e = t.current;
                        if (!e) return;
                        const a = e.getElementsByTagName("svg")[0],
                            { height: n, width: r, x: o, y: c } = a.getBBox(),
                            s = [o, c, r, n].join(" ");
                        a.setAttribute("viewBox", s);
                    }),
                    n.createElement("div", { ref: t }, e)
                );
            };
            var V = a(725405);
            const O = c().h6beb5fb,
                G = c().d86bbf0f,
                $ = c().b7dc3885,
                J = i.default.create((e) => ({ avatarListWithOverflowContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12, alignItems: "center", marginTop: e.spaces.space16, position: "absolute", end: e.spaces.space16, height: e.spaces.space64 }, notificationBadge: { paddingHorizontal: e.spaces.space4 }, IconMoreCircle: { width: e.spaces.space40, height: e.spaces.space40 }, IconMoreCircleContainer: { color: "inherit" } })),
                q = ({ accountSwitch: e, accountUsers: t, activeUser: a, createLocalApiErrorHandlerAccountsFetch: r, fetchAccounts: o, fetchStatus: c, handleClose: l, manageAccountsMenuItem: i, shouldDisplayFetchRenderer: d }) => {
                    const m = t.filter((e) => e.user_id !== a?.id_str),
                        p = m.slice(2).reduce((e, t) => e + (t.badgeCount ?? 0), 0),
                        h = (0, V.Z)(),
                        g = n.useCallback(() => {
                            h.scribe({ element: i.scribeElement, action: "click" }), l();
                        }, [h, l, i]),
                        b = n.useMemo(() => n.createElement(u.Z, { link: i.link, onClick: g, style: J.IconMoreCircleContainer, testID: i.testID, withoutInteractiveStyles: !0 }, n.createElement(N, null, n.createElement(W.default, { style: J.IconMoreCircle })), p > 0 && n.createElement(E.Z, { count: p, style: p > 9 && J.notificationBadge, truncatedCountFormatter: O, unreadCountLabel: G })), [g, i.link, i.testID, p]),
                        f = n.useCallback(
                            ({ hasBadge: t, isProtected: a, userId: n }) =>
                                () => {
                                    e({ hasBadge: t, isProtected: a, userId: n }), l?.();
                                },
                            [e, l],
                        ),
                        C = n.useMemo(
                            () => () =>
                                m.slice(0, 2).map((e) => {
                                    const t = e.badgeCount;
                                    return n.createElement(u.Z, { key: e.user_id, onClick: f({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }) }, n.createElement(F.default, { "aria-label": $({ screenName: e.screen_name }), decoration: t ? n.createElement(E.Z, { count: t, style: t > 9 && J.notificationBadge, truncatedCountFormatter: O, unreadCountLabel: G }) : void 0, key: e.user_id, screenName: e.screen_name, size: "xLarge", uri: e.avatar_image_url, userId: e.user_id, withLink: !1 }));
                                }),
                            [f, m],
                        ),
                        y = n.useCallback(() => {
                            o().catch(r({ [z.ZP.AppInReadOnlyMode]: { customAction: j.Z } }));
                        }, [r, o]),
                        w = n.useMemo(() => n.createElement(n.Fragment, null, d ? n.createElement(P.Z, { fetchStatus: c, onRequestRetry: y, render: C }) : C()), [c, y, C, d]);
                    return n.createElement(s.Z, null, n.createElement(H.Z, { isAllowedToViewOptions: { avatar: !0, badges: !0, description: !0, followButton: !1, followersYouKnow: !1, followIndicator: !0, fullName: !0, label: !0, stats: !0, subscriptionsCount: !0 }, isLoggedIn: !0, isUserBlueVerified: a.is_blue_verified, isUserStatsWithLink: !0, isUserVerified: a.verified, userAvatarUri: a.profile_image_url_https, userFollowersCount: a.followers_count, userFriendsCount: a.friends_count, userName: a.name, userScreenName: a.screen_name }), n.createElement(s.Z, { style: J.avatarListWithOverflowContainer }, w, b));
                };
            var K = a(71620),
                Q = a(668214),
                Y = a(454319),
                X = a(956817),
                ee = a(390387),
                te = a(312771);
            const ae = (0, Q.Z)()
                .propsFromState(() => ({ delegateAccountCount: ee.BP, delegateUser: ee.sy, fetchStatus: Y.UD, loggedInUser: v.ZP.selectLoggedInUser, multiAccountUsers: Y.pc, hasMultiAccountBadges: Y.pA }))
                .propsFromActions(() => ({ clearDelegateUser: ee.YJ, createLocalApiErrorHandlerAccountSwitch: (0, K.zr)("ACCOUNT_SWITCHER_ACCOUNT_SWITCH"), createLocalApiErrorHandlerMultiListFetch: (0, K.zr)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"), fetchMultiAccountList: Y.qc, switchAccount: X.y }))
                .adjustStateProps(({ delegateAccountCount: e, delegateUser: t, fetchStatus: a, hasMultiAccountBadges: n, loggedInUser: r, multiAccountUsers: o }) => ({ delegateAccountCount: e, delegateUser: t, fetchStatus: a === te.ZP.NONE ? te.ZP.LOADING : a, hasMultiAccountBadges: !!r && n, loggedInUser: r, multiAccountUsers: o }))
                .withAnalytics({ page: "nav", section: "account_switcher" });
            var ne = a(143670),
                re = a(731708),
                oe = a(229412);
            class ce extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAdditionalMenuItems = () => (this.props.additionalMenuItems || []).map((e) => n.createElement(ne.Z, { Icon: e.Icon, actionText: e.actionText, badge: e.badge, isSelected: e.isSelected, key: e.link, link: e.link, onClick: this._handleMenuItemClick(e.scribeElement, e.onClick), selectable: !0, testID: e.testID }))),
                        (this._renderTitle = () => {
                            const { title: e } = this.props;
                            return e ? n.createElement(re.ZP, { size: "headline1", style: se.title, weight: "bold" }, e) : null;
                        }),
                        (this._renderUserAccounts = () => {
                            const { accountSwitch: e, accountUsers: t, activeUser: a, clearDelegateUser: r, delegateAccountCount: o, delegateUser: c, handleClose: s, withBadges: l = !1 } = this.props,
                                i = { accountSwitch: e, accountUsers: t, activeUser: a, clearDelegateUser: r, delegateAccountCount: o, delegateUser: c, isDelegateEnabled: this._isDelegateEnabled, onUserSwitch: s, onDelegateSwitch: s, withBadges: l };
                            return n.createElement(oe.a, i);
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandlerAccountsFetch: e, fetchAccounts: t } = this.props;
                            t().catch(e({ [z.ZP.AppInReadOnlyMode]: { customAction: j.Z } }));
                        }),
                        (this._handleMenuItemClick = (e, t) => () => {
                            const { analytics: a, handleClose: n } = this.props;
                            e && a.scribe({ element: e, action: "click" }), t?.(), n();
                        });
                }
                render() {
                    const { fetchStatus: e, shouldDisplayFetchRenderer: t } = this.props;
                    return (this._isDelegateEnabled = !0), n.createElement(s.Z, { style: se.menuContainer }, this._renderTitle(), t ? n.createElement(P.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._renderUserAccounts }) : this._renderUserAccounts(), this._renderAdditionalMenuItems());
                }
            }
            ce.contextType = m.rC;
            const se = i.default.create((e) => ({ menuContainer: { paddingVertical: e.spaces.space12 }, title: { paddingBottom: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                le = (0, T.Z)(ce);
            var ie = a(22132);
            const de = c().j0a8da6e,
                ue = c().c6f2bf00,
                me = c().a58e0e51,
                pe = c().j62f43a6,
                he = c().d4c52015,
                ge = { actionText: ue, link: "/account/switch", scribeElement: "manage_accounts", testID: ie.Z.manageAccounts },
                be = ae(({ clearDelegateUser: e, createLocalApiErrorHandlerAccountSwitch: t, createLocalApiErrorHandlerMultiListFetch: a, delegateAccountCount: o, delegateUser: c, fetchMultiAccountList: s, fetchStatus: l, hasMultiAccountBadges: i, isExpanded: d, loggedInUser: u, multiAccountUsers: m, style: p, switchAccount: h, withUpdatedAccountSwitcher: g }) => {
                    const b = (0, T.z)();
                    (0, R.ip)();
                    const [f, C] = (0, r.KO)(R.lA),
                        E = n.useCallback(() => {
                            const e = m.length > 1,
                                t = [];
                            return m.length >= 5 || c || t.push({ actionText: de, link: "/i/flow/login", scribeElement: "add_existing_account", testID: ie.Z.addAccount }), e && t.push(ge), (o || f > 0) && t.push({ actionText: pe, link: o || f > 0 ? "/i/delegate/delegations" : "/settings/delegate", scribeElement: "manage_accounts", testID: ie.Z.manageAccounts, badge: { count: f, label: he } }), u && t.push({ actionText: me({ screenName: u.screen_name }), link: "/logout", scribeElement: "log_out", testID: ie.Z.logout }), t;
                        }, [o, c, u, m.length, f]),
                        y = n.useCallback(
                            ({ hasBadge: e, isProtected: a, userId: n }) => {
                                b.scribe({ component: a ? "switch_to_protected_account" : "switch_account", element: e ? "account_badged" : "account", action: "click" }), h({ user_id: n }).catch(t(M.y));
                            },
                            [b, t, h],
                        ),
                        w = n.useCallback(() => {
                            const { hasMultiAccountCookie: e } = (0, L.s)();
                            return e;
                        }, []),
                        _ = n.useCallback((t) => (C(), u ? (g ? n.createElement(q, { accountSwitch: y, accountUsers: m, activeUser: u, createLocalApiErrorHandlerAccountsFetch: a, fetchAccounts: s, fetchStatus: l, handleClose: t, manageAccountsMenuItem: ge, shouldDisplayFetchRenderer: w() }) : n.createElement(le, { accountSwitch: y, accountUsers: m, activeUser: u, additionalMenuItems: E(), clearDelegateUser: e, createLocalApiErrorHandlerAccountsFetch: a, delegateAccountCount: o, delegateUser: c, fetchAccounts: s, fetchStatus: l, handleClose: t, shouldDisplayFetchRenderer: w(), withBadges: !0 })) : null), [e, a, o, c, s, l, E, w, C, u, y, m, g]);
                    return n.createElement(D, { analytics: b, currentUser: u, delegateUser: c, hasMultiAccountBadges: i, interactiveViewTestId: ie.Z.accountSwitcher, isExpanded: d, renderMenuSheet: _, style: p });
                });
        },
        22132: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { accountSwitcher: "SideNav_AccountSwitcher_Button", addAccount: "AccountSwitcher_AddAccount_Button", logout: "AccountSwitcher_Logout_Button", manageAccounts: "AccountSwitcher_ManageAccounts_Button" };
        },
        906433: (e, t, a) => {
            a.d(t, { Z: () => g });
            a(136728);
            var n = a(202784),
                r = a(325686),
                o = a(952428),
                c = a(731708),
                s = a(310088),
                l = a(392237),
                i = a(111677),
                d = a.n(i),
                u = a(206962);
            const m = () => d().d9ef2842,
                p = d().d86bbf0f,
                h = d().h6beb5fb,
                g = ({ badgeCount: e, decoration: t, icon: a, iconColor: l, label: i, link: d, onClick: g, pip: f, rightControl: C, testID: E }) =>
                    n.createElement(
                        r.Z,
                        { style: b.dashMenuItem },
                        n.createElement(
                            o.Z,
                            { link: d, onClick: g, style: b.link, testID: E },
                            n.createElement(
                                r.Z,
                                { style: b.item },
                                a
                                    ? n.createElement(a, {
                                          style: (() => {
                                              const e = [b.icon, b.iconWithDashRedesign];
                                              return l && e.push({ color: l }), e;
                                          })(),
                                          testID: u.Z.icon,
                                      })
                                    : null,
                                n.createElement(c.ZP, { numberOfLines: 1, size: "headline1", style: b.itemLabel, weight: "bold" }, i),
                                e || f ? n.createElement(r.Z, { style: b.itemAccessory }, n.createElement(s.Z, { count: e, pip: f, standalone: !0, truncatedCountFormatter: h, unreadCountLabel: f ? m : p })) : null,
                                t ? n.createElement(r.Z, { style: b.leftMargin }, t) : null,
                            ),
                        ),
                        C,
                    ),
                b = l.default.create((e) => ({ dashMenuItem: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.text, flexShrink: 0, marginEnd: e.spaces.space12 }, iconWithDashRedesign: { alignSelf: "center", marginEnd: e.spaces.space24, height: e.spaces.space24, width: e.spaces.space24 }, item: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, flexDirection: "row", flexGrow: 1, alignItems: "center" }, itemAccessory: { flexShrink: 1, marginStart: e.spaces.space20, minWidth: e.spaces.space24, alignItems: "center" }, itemLabel: { flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space16 }, link: { flexGrow: 1, maxWidth: "100%" } }));
        },
        206962: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { iconPlus: "iconPlus", iconMore: "iconMore", logout: "logout", switcher: "switcher", settings: "settings", help: "help", icon: "icon", settingsAndSupport: "settingsAndSupport" };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.JobSearch-b308cbaf.045f06aa.js.map
