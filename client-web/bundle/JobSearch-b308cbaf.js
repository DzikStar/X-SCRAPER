"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.JobSearch-b308cbaf"],
    {
        229333: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                r = a(466999),
                o = a(325686),
                s = a(392237),
                l = a(111677);
            const c = a.n(l)().e5b0063d;
            let i = 0;
            class d extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${i}`), (i += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        a = c({ title: t });
                    return n.createElement(o.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: s.default.visuallyHidden }, t), n.createElement(o.Z, { "aria-label": a }, e));
                }
            }
            const u = d;
        },
        949626: (e, t, a) => {
            a.d(t, { Z: () => r });
            a(202784);
            var n = a(950822);
            const r = (e) => (0, n.Z)("div", e);
        },
        414939: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(202784),
                r = a(325686),
                o = a(392237);
            class s extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(r.Z, { style: l.root });
                }
            }
            const l = o.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                c = s;
        },
        903233: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(202784),
                r = a(325686),
                o = a(708852),
                s = a(392237);
            const l = s.default.create((e) => ({ root: { display: "flex", flexDirection: "row", height: "calc(100vh - 236px)", marginHorizontal: e.spaces.space16, borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.small, borderStyle: "solid" }, leftRoot: { display: "flex", overflow: "auto" }, rightRoot: { display: "flex", flexBasis: "auto", flexGrow: 1, flexShrink: 1, borderStartWidth: e.borderWidths.small, borderStartColor: e.colors.borderColor, borderStartStyle: "solid", overflow: "auto" }, mobileRoot: { display: "flex", height: "100%" }, mobileLeftRoot: { display: "flex", width: "100%", borderWidth: "0px", borderColor: e.colors.borderColor, borderStyle: "solid", borderBottomStartRadius: e.borderRadii.small }, mobileRightRoot: { position: "absolute", width: "100%", start: "0px", top: "0px", display: "none" }, mobileRightRootActive: { display: "block", backgroundColor: e.colors.cellBackground }, mobileOverlayPosition: { position: "absolute", top: 0, bottom: 0, start: 0, end: 0 }, overlayPosition: { position: "absolute", top: 0, bottom: 0, start: e.spaces.space16, end: e.spaces.space16 }, overlay: { backgroundColor: e.colors.navigationBackground } })),
                c = ({ isFullWidth: e = !1, isRightRootActive: t = !1, leftContent: a, mobileRootStyles: c, overlay: i, rightContent: d, rootStyles: u }) => {
                    const m = (0, o.Ji)(),
                        p = n.useMemo(() => ({ ...l.overlay, opacity: s.default.isDarkerMode() ? 0.8 : 0.9 }), []);
                    return n.createElement(n.Fragment, null, m ? n.createElement(r.Z, { style: { ...l.root, ...u } }, a, e ? null : n.createElement(r.Z, { style: l.rightRoot }, d), i && n.createElement(n.Fragment, null, n.createElement(r.Z, { style: [l.overlayPosition, p] }), n.createElement(r.Z, { style: l.overlayPosition }, i))) : n.createElement(r.Z, { style: { ...l.mobileRoot, ...c } }, n.createElement(r.Z, { style: l.mobileLeftRoot }, a), n.createElement(r.Z, { style: { ...l.mobileRightRoot, ...(t ? l.mobileRightRootActive : {}) } }, d), i && n.createElement(n.Fragment, null, n.createElement(r.Z, { style: [l.mobileOverlayPosition, p] }), n.createElement(r.Z, { style: l.overlayPosition }, i))));
                };
        },
        247411: (e, t, a) => {
            a.d(t, { Z: () => F });
            var n = a(202784),
                r = a(325686),
                o = a(392237),
                s = a(323265),
                l = a(443781),
                c = a(545457),
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
                y = a(111677),
                E = a.n(y),
                C = a(698891),
                Z = a(956272),
                w = a(487606),
                _ = a(106186),
                v = a(720930),
                x = a(763881),
                S = a(134760),
                A = a(906433),
                I = a(439332);
            const k = E().d13d697c,
                U = [
                    { pathname: "/jobs", label: E().b72c924c, icon: Z.default, featureSwitch: "recruiting_global_jobs_search_enabled", isActive: (e) => /(\/)?jobs(\/\d+)?(\/)?$/.test(e) },
                    { pathname: "/jobs/recommended", label: E().f4da95a0, icon: w.default, featureSwitch: "recruiting_job_recommendations_enabled", isActive: (e) => /(\/)?jobs\/recommended(\/\d+)?(\/)?$/.test(e) },
                    { pathname: "/jobs/saved", label: E().eedd808c, icon: _.default, featureSwitch: "recruiting_job_recommendations_enabled", isActive: (e) => /(\/)?jobs\/saved(\/\d+)?(\/)?$/.test(e) },
                    { pathname: "/i/hiring", label: E().e0ba641a, icon: v.default, isActive: (e) => /(\/)?i\/hiring(\/\d+)?(\/)?$/.test(e), shouldHide: (e) => e.isVerifiedOrg(), decoration: n.createElement(g.ZP, { background: "blue500" }, n.createElement(b.ZP, { size: "subtext2" }, k)) },
                ],
                D = () => {
                    const { featureSwitches: e, userClaims: t } = (0, l.QZ)(),
                        a = (0, m.useLocation)().pathname;
                    return n.createElement(
                        r.Z,
                        { style: B.links },
                        U.map((o) => ((!o.featureSwitch || e.isTrue(o.featureSwitch)) && !o.shouldHide?.(t) ? n.createElement(n.Fragment, { key: o.pathname }, n.createElement(r.Z, null, o.isActive(a) ? n.createElement(r.Z, { style: B.currentLink }, n.createElement(b.ZP, { weight: "bold" }, o.label)) : n.createElement(h.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "buttonBlack", link: o.pathname }, o.label, o.decoration && n.createElement(r.Z, { style: B.decoration }, o.decoration)))) : null)),
                    );
                },
                L = () => {
                    const { featureSwitches: e, userClaims: t } = (0, l.QZ)(),
                        a = e.isTrue("recruiting_global_jobs_search_enabled");
                    return n.createElement(
                        n.Fragment,
                        null,
                        a ? n.createElement(r.Z, { style: B.mobileSearchContainer }, n.createElement(T, { styleType: "selection" })) : null,
                        U.map((a) => ((!a.featureSwitch || e.isTrue(a.featureSwitch)) && !a.shouldHide?.(t) ? n.createElement(A.Z, { decoration: a.decoration, icon: a.icon, key: a.pathname, label: a.label, link: a.pathname }) : null)),
                        e.isTrue("recruiting_job_recommendations_enabled") && n.createElement(A.Z, { icon: C.default, label: E().bb081ea2, link: "/jobs/get-recommendations" }),
                    );
                },
                T = ({ styleType: e }) => {
                    const t = (0, m.useHistory)(),
                        [a, r] = n.useState("");
                    return n.createElement(f.Z, {
                        Icon: Z.default,
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
                B = o.default.create((e) => ({ root: { width: "100%" }, container: { width: "100%", padding: e.spaces.space16, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, header: { gap: e.spaces.space16, display: "flex", flexDirection: "row", alignItems: "center" }, links: { gap: e.spaces.space4, display: "flex", flexDirection: "row", alignItems: "center" }, currentLink: { flexDirection: "row", alignItems: "center", paddingHorizontal: e.spaces.space16, height: e.spaces.space20, color: e.colors.text, borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.gray0, borderColor: e.colors.gray0, minWidth: e.spaces.space36, minHeight: e.spaces.space36 }, mobileSearchContainer: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingVertical: e.spaces.space4, width: "100%" }, searchContainer: { flex: 1, maxWidth: "300px", minWidth: "200px" }, decoration: { paddingStart: e.spaces.space8 } })),
                M = ({ isLoggedIn: e }) => {
                    const t = (0, p.Ji)(),
                        { featureSwitches: a } = (0, l.QZ)(),
                        o = a.isTrue("recruiting_global_jobs_search_enabled"),
                        s = a.isTrue("recruiting_job_recommendations_enabled");
                    return n.createElement(r.Z, { style: B.root }, n.createElement(u, null, n.createElement(r.Z, { style: B.container }, t ? null : n.createElement(S.Z, { disableMenuToggleWhenOpen: !0, renderCustomMenuItems: L }), n.createElement(r.Z, { style: B.header }, n.createElement(I.Z, null), t && n.createElement(D, null)), n.createElement(r.Z, { style: B.links }, t && o && n.createElement(r.Z, { style: B.searchContainer }, n.createElement(T, { styleType: "pill" })), e && t ? n.createElement(n.Fragment, null, s && n.createElement(h.ZP, { icon: n.createElement(C.default, null), link: "/jobs/get-recommendations", testID: "recommendation-settings-btn", type: "primaryText" }), n.createElement(x.Z, { isExpanded: !1 })) : n.createElement(r.Z, null)))));
                },
                R = () => null,
                P = o.default.create((e) => ({ root: { height: "100vh", width: "100%", flex: 1 }, webViewSpacer: { paddingBottom: "24px" } })),
                F = ({ children: e }) => {
                    (0, c.ph)(), (0, c.G1)();
                    const { loggedInUserId: t } = n.useContext(l.rC),
                        a = !s.ZP.isWebView();
                    return n.createElement(r.Z, { style: P.root }, n.createElement(i.Z.Configure, { TabBar: R, headerless: !0, rightControl: null, sideNav: null, withAppBar: !1, withBottomTabBar: !1 }), n.createElement(u, null, a ? n.createElement(M, { isLoggedIn: Boolean(t) }) : n.createElement("div", { style: P.webViewSpacer }), e));
                };
        },
        856438: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(202784),
                r = a(868634),
                o = a(731708),
                s = a(392237),
                l = a(111677),
                c = a.n(l),
                i = a(262009);
            const d = c().a71d7584,
                u = s.default.create((e) => ({ label: { alignSelf: "auto" }, featuredLabel: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, featuredIcon: { height: e.spaces.space12 } })),
                m = () => n.createElement(r.ZP, { style: u.label, type: "priority" }, n.createElement(o.ZP, { style: u.featuredLabel }, n.createElement(i.default, { style: u.featuredIcon }), d));
        },
        150123: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(202784),
                r = a(691533),
                o = a(402058);
            const s = (e) => n.createElement(r.Z, { hideOnError: !0 }, n.createElement(o.Z, e));
        },
        965245: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(807896),
                r = a(202784),
                o = a(229333),
                s = a(414939),
                l = a(334346);
            const c = ({ accessibilityTitle: e, footer: t = r.createElement(s.Z, null), ...a }) => {
                const c = r.createElement(l.C, (0, n.Z)({}, a, { footer: t }));
                return e ? r.createElement(o.Z, { title: e }, c) : c;
            };
        },
        998693: (e, t, a) => {
            a.d(t, { Z: () => _ });
            var n = a(36879),
                r = a(202784),
                o = a(10622),
                s = a.n(o),
                l = (a(585488), a(437429)),
                c = a.n(l),
                i = a(386802),
                d = a(855488),
                u = a(392237),
                m = a(111677),
                p = a.n(m),
                h = a(665468),
                g = a(666536),
                b = a(125568),
                f = a(874088),
                y = a(339110),
                E = a(524110);
            const C = p().jaaa8984,
                Z = n.Z,
                w = u.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, wrapper: { flex: 1 } })),
                _ = ({ onChange: e, onEnter: t, onSelect: a, value: n }) => {
                    const { isModal: o } = r.useContext(i.Z),
                        l = r.useRef(null),
                        u = c()(),
                        [m, p] = r.useState(!1),
                        [_, v] = r.useState([]),
                        [x, S] = r.useState(!1),
                        A = (0, b.t)(),
                        I = r.useMemo(
                            () =>
                                (0, g.Z)((e) => {
                                    A() &&
                                        (e.length >= 2
                                            ? (p(!0),
                                              S(!0),
                                              ((e) => {
                                                  s()(u, Z, { query: e })
                                                      .toPromise()
                                                      .then((e) => {
                                                          v(e?.location_type_ahead || []), S(!1);
                                                      });
                                              })(e))
                                            : p(!1));
                                }, 250),
                            [u, A],
                        ),
                        k = r.useCallback(
                            (t) => {
                                e({ value: t.target.value }), I(t.target.value);
                            },
                            [I, e],
                        ),
                        U = r.useCallback(
                            (e, t) => {
                                l?.current?.focus(), a({ id: e.id, name: e.name }), p(!1);
                            },
                            [a],
                        ),
                        D = r.useCallback(
                            (e) => {
                                const t = _?.map((e) => ({ id: e.location_id, name: e.display_name, type: "job_location", data: {} }));
                                return r.createElement(r.Fragment, null, m ? r.createElement(E.Z, { isLoading: x, items: t, onItemClick: U, ref: e.ref, source: y._4.JobLocation, style: e.style }) : null);
                            },
                            [U, _, x, m],
                        ),
                        L = r.useCallback(
                            (e) => {
                                const { onFocus: a } = e;
                                return r.createElement(d.Z, { Icon: h.default, autoComplete: "off", label: C, name: "location-selector-input", onChange: k, onFocus: a, onKeyPress: t, ref: l, style: w.inputStyle, testID: "location-selector-input", value: n });
                            },
                            [k, t, n],
                        );
                    return r.createElement(f.default, { isInModal: o, renderCustomDropdown: D, renderCustomInput: L, rounded: !0, source: y._4.JobLocation, testID: "location-selector", userLimit: 20 });
                };
        },
        46705: (e, t, a) => {
            a.d(t, { X: () => n, g: () => r });
            const n = (e) => ({ id: e, distanceToViewportTop: 0 }),
                r = (e) => ({ id: e, distanceToViewportBottom: 0 });
        },
        334346: (e, t, a) => {
            a.d(t, { C: () => c, Z: () => l });
            var n = a(807896),
                r = a(202784),
                o = a(524084),
                s = a(768572);
            const l = "stable_sort_index",
                c = r.forwardRef((e, t) => {
                    const a = e.cacheKey;
                    return r.createElement(s.ZP, { identifier: a }, r.createElement(o.Z, (0, n.Z)({ ref: t }, e)));
                });
        },
        252021: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(202784),
                r = a(107267),
                o = a(115553);
            const s = (e) => {
                (0, r.useHistory)();
                return n.createElement(o.A, e);
            };
        },
        763881: (e, t, a) => {
            a.d(t, { Z: () => be });
            a(136728);
            var n = a(202784),
                r = a(400752),
                o = a(111677),
                s = a.n(o),
                l = a(325686),
                c = a(58881),
                i = a(392237),
                d = a(157130),
                u = a(530732),
                m = a(443781),
                p = a(884161),
                h = a(521514),
                g = a(614983),
                b = a.n(g),
                f = a(618186),
                y = a(366635),
                E = a(310088),
                C = a(149170),
                Z = a(952793),
                w = a(125363),
                _ = a(919022);
            const v = s().d86bbf0f,
                x = s().h6beb5fb;
            function S(e) {
                const { isExpanded: t } = e,
                    a = (0, Z.hC)("rweb_sourcemap_migration"),
                    r = (0, w.v9)(_.ZP.selectViewerUser);
                b()(r, "user must be defined");
                const { highlightedLabel: o, is_blue_verified: s, name: c, profile_image_url_https: i, protected: d, screen_name: u, verified: m, verified_type: p } = r;
                return n.createElement(n.Fragment, null, n.createElement(l.Z, null, n.createElement(f.Z, { "aria-label": c, screenName: u, size: "xLarge", style: a && I.userAvatarRedesign, uri: i }), t ? null : A(e)), t ? n.createElement(n.Fragment, null, n.createElement(y.Z, { affiliateBadgeInfo: o, badgeContext: "account", isBlueVerified: s, isProtected: d, isVerified: m, name: c, screenName: u, style: I.userName, verifiedType: p, withStackedLayout: !0 }), n.createElement(l.Z, { style: I.iconContainer }, n.createElement(C.default, { style: I.icon }), t ? A(e) : null)) : null);
            }
            function A({ hasMultiAccountBadges: e, isExpanded: t }) {
                return e ? n.createElement(E.Z, { pip: !0, style: t && I.pip, truncatedCountFormatter: x, unreadCountLabel: v }) : null;
            }
            const I = i.default.create((e) => ({ icon: { color: e.colors.text }, iconContainer: { alignItems: "flex-end", flexGrow: 1 }, pip: { position: "absolute", end: `calc(-1 * ${e.spaces.space4})`, top: `calc(-1 * ${e.spaces.space4})` }, userName: { flexGrow: 1, marginHorizontal: e.spaces.space12 }, userAvatarRedesign: { width: e.spaces.space36, height: e.spaces.space36 } })),
                k = s().b8e1d524,
                U = s().gef27c4c;
            class D extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderEmptyState = () => {
                            const { renderEmptyState: e } = this.props;
                            return e ? n.createElement(l.Z, { style: L.emptyStateWrapper }, e()) : null;
                        }),
                        (this._handleAccountSwitcherClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ action: "click" });
                        });
                }
                render() {
                    const { "aria-label": e, currentUser: t, delegateUser: a, hasMultiAccountBadges: r, hoverLabel: o, interactiveViewTestId: s, isExpanded: l, renderEmptyState: m, renderMenuSheet: h, style: g } = this.props,
                        b = this.context.featureSwitches.isTrue("rweb_sourcemap_migration"),
                        f = [L.anchorContainer, b && L.anchorContainerRedesign, g];
                    return t || m ? n.createElement(d.Z, { contentStyle: L.menuContainer, enableEnterKeyToggle: !0, renderContent: h, withArrow: !0, withFixedPosition: !0 }, n.createElement(u.Z, { "aria-label": e || U, hoverLabel: l ? void 0 : { label: o || k }, interactiveStyles: c.Z.generate({ backgroundColor: "transparent", color: i.default.theme.colors.text }), onClick: this._handleAccountSwitcherClick, role: "button", style: f, testID: s }, a ? n.createElement(p.p, { forceUserId: a.userId }, n.createElement(S, { hasMultiAccountBadges: r, isExpanded: l })) : t ? n.createElement(S, { hasMultiAccountBadges: r, isExpanded: l }) : this._renderEmptyState())) : null;
                }
            }
            D.contextType = m.rC;
            const L = i.default.create((e) => ({ anchorContainer: { alignItems: "center", borderRadius: e.borderRadii.infinite, display: "flex", flexDirection: "row", padding: e.spaces.space12 }, anchorContainerRedesign: { padding: 8 }, icon: { color: e.colors.text }, iconContainer: { alignItems: "flex-end", flexGrow: 1 }, pip: { position: "absolute", end: `calc(-1 * ${e.spaces.space4})`, top: `calc(-1 * ${e.spaces.space4})` }, userName: { flexGrow: 1, marginHorizontal: e.spaces.space12 }, menuContainer: { width: h.Z.cardWidth.normal }, emptyStateWrapper: { height: e.spaces.space40, minWidth: e.spaces.space40, width: "100%" } }));
            var T = a(380155),
                B = a(755296),
                M = a(725516),
                R = a(193850),
                P = a(823161),
                F = a(879113),
                H = a(266704),
                W = a(550475),
                j = a(516951),
                N = a(615656);
            const V = ({ children: e }) => {
                const t = n.useRef(null);
                return (
                    n.useLayoutEffect(() => {
                        const e = t.current;
                        if (!e) return;
                        const a = e.getElementsByTagName("svg")[0],
                            { height: n, width: r, x: o, y: s } = a.getBBox(),
                            l = [o, s, r, n].join(" ");
                        a.setAttribute("viewBox", l);
                    }),
                    n.createElement("div", { ref: t }, e)
                );
            };
            var z = a(725405);
            const O = s().h6beb5fb,
                G = s().d86bbf0f,
                $ = s().b7dc3885,
                K = i.default.create((e) => ({ avatarListWithOverflowContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12, alignItems: "center", marginTop: e.spaces.space16, position: "absolute", end: e.spaces.space16, height: e.spaces.space64 }, notificationBadge: { paddingHorizontal: e.spaces.space4 }, IconMoreCircle: { width: e.spaces.space40, height: e.spaces.space40 }, IconMoreCircleContainer: { color: "inherit" } })),
                J = ({ accountSwitch: e, accountUsers: t, activeUser: a, createLocalApiErrorHandlerAccountsFetch: r, fetchAccounts: o, fetchStatus: s, handleClose: c, manageAccountsMenuItem: i, shouldDisplayFetchRenderer: d }) => {
                    const m = t.filter((e) => e.user_id !== a?.id_str),
                        p = m.slice(2).reduce((e, t) => e + (t.badgeCount ?? 0), 0),
                        h = (0, z.Z)(),
                        g = n.useCallback(() => {
                            h.scribe({ element: i.scribeElement, action: "click" }), c();
                        }, [h, c, i]),
                        b = n.useMemo(() => n.createElement(u.Z, { link: i.link, onClick: g, style: K.IconMoreCircleContainer, testID: i.testID, withoutInteractiveStyles: !0 }, n.createElement(V, null, n.createElement(W.default, { style: K.IconMoreCircle })), p > 0 && n.createElement(E.Z, { count: p, style: p > 9 && K.notificationBadge, truncatedCountFormatter: O, unreadCountLabel: G })), [g, i.link, i.testID, p]),
                        f = n.useCallback(
                            ({ hasBadge: t, isProtected: a, userId: n }) =>
                                () => {
                                    e({ hasBadge: t, isProtected: a, userId: n }), c?.();
                                },
                            [e, c],
                        ),
                        y = n.useMemo(
                            () => () =>
                                m.slice(0, 2).map((e) => {
                                    const t = e.badgeCount;
                                    return n.createElement(u.Z, { key: e.user_id, onClick: f({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }) }, n.createElement(P.default, { "aria-label": $({ screenName: e.screen_name }), decoration: t ? n.createElement(E.Z, { count: t, style: t > 9 && K.notificationBadge, truncatedCountFormatter: O, unreadCountLabel: G }) : void 0, key: e.user_id, screenName: e.screen_name, size: "xLarge", uri: e.avatar_image_url, userId: e.user_id, withLink: !1 }));
                                }),
                            [f, m],
                        ),
                        C = n.useCallback(() => {
                            o().catch(r({ [N.ZP.AppInReadOnlyMode]: { customAction: j.Z } }));
                        }, [r, o]),
                        Z = n.useMemo(() => n.createElement(n.Fragment, null, d ? n.createElement(F.Z, { fetchStatus: s, onRequestRetry: C, render: y }) : y()), [s, C, y, d]);
                    return n.createElement(l.Z, null, n.createElement(H.Z, { isAllowedToViewOptions: { avatar: !0, badges: !0, description: !0, followButton: !1, followersYouKnow: !1, followIndicator: !0, fullName: !0, label: !0, stats: !0, subscriptionsCount: !0 }, isLoggedIn: !0, isUserBlueVerified: a.is_blue_verified, isUserStatsWithLink: !0, isUserVerified: a.verified, userAvatarUri: a.profile_image_url_https, userFollowersCount: a.followers_count, userFriendsCount: a.friends_count, userName: a.name, userScreenName: a.screen_name }), n.createElement(l.Z, { style: K.avatarListWithOverflowContainer }, Z, b));
                };
            var q = a(71620),
                Q = a(668214),
                Y = a(454319),
                X = a(956817),
                ee = a(390387),
                te = a(312771);
            const ae = (0, Q.Z)()
                .propsFromState(() => ({ delegateAccountCount: ee.BP, delegateUser: ee.sy, fetchStatus: Y.UD, loggedInUser: _.ZP.selectLoggedInUser, multiAccountUsers: Y.pc, hasMultiAccountBadges: Y.pA }))
                .propsFromActions(() => ({ clearDelegateUser: ee.YJ, createLocalApiErrorHandlerAccountSwitch: (0, q.zr)("ACCOUNT_SWITCHER_ACCOUNT_SWITCH"), createLocalApiErrorHandlerMultiListFetch: (0, q.zr)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"), fetchMultiAccountList: Y.qc, switchAccount: X.y }))
                .adjustStateProps(({ delegateAccountCount: e, delegateUser: t, fetchStatus: a, hasMultiAccountBadges: n, loggedInUser: r, multiAccountUsers: o }) => ({ delegateAccountCount: e, delegateUser: t, fetchStatus: a === te.ZP.NONE ? te.ZP.LOADING : a, hasMultiAccountBadges: !!r && n, loggedInUser: r, multiAccountUsers: o }))
                .withAnalytics({ page: "nav", section: "account_switcher" });
            var ne = a(143670),
                re = a(731708),
                oe = a(229412);
            class se extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAdditionalMenuItems = () => (this.props.additionalMenuItems || []).map((e) => n.createElement(ne.Z, { Icon: e.Icon, actionText: e.actionText, badge: e.badge, isSelected: e.isSelected, key: e.link, link: e.link, onClick: this._handleMenuItemClick(e.scribeElement, e.onClick), selectable: !0, testID: e.testID }))),
                        (this._renderTitle = () => {
                            const { title: e } = this.props;
                            return e ? n.createElement(re.ZP, { size: "headline1", style: le.title, weight: "bold" }, e) : null;
                        }),
                        (this._renderUserAccounts = () => {
                            const { accountSwitch: e, accountUsers: t, activeUser: a, clearDelegateUser: r, delegateAccountCount: o, delegateUser: s, handleClose: l, withBadges: c = !1 } = this.props,
                                i = { accountSwitch: e, accountUsers: t, activeUser: a, clearDelegateUser: r, delegateAccountCount: o, delegateUser: s, isDelegateEnabled: this._isDelegateEnabled, onUserSwitch: l, onDelegateSwitch: l, withBadges: c };
                            return n.createElement(oe.a, i);
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandlerAccountsFetch: e, fetchAccounts: t } = this.props;
                            t().catch(e({ [N.ZP.AppInReadOnlyMode]: { customAction: j.Z } }));
                        }),
                        (this._handleMenuItemClick = (e, t) => () => {
                            const { analytics: a, handleClose: n } = this.props;
                            e && a.scribe({ element: e, action: "click" }), t?.(), n();
                        });
                }
                render() {
                    const { fetchStatus: e, shouldDisplayFetchRenderer: t } = this.props;
                    return (this._isDelegateEnabled = !0), n.createElement(l.Z, { style: le.menuContainer }, this._renderTitle(), t ? n.createElement(F.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._renderUserAccounts }) : this._renderUserAccounts(), this._renderAdditionalMenuItems());
                }
            }
            se.contextType = m.rC;
            const le = i.default.create((e) => ({ menuContainer: { paddingVertical: e.spaces.space12 }, title: { paddingBottom: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                ce = (0, M.Z)(se);
            var ie = a(22132);
            const de = s().j0a8da6e,
                ue = s().c6f2bf00,
                me = s().a58e0e51,
                pe = s().j62f43a6,
                he = s().d4c52015,
                ge = { actionText: ue, link: "/account/switch", scribeElement: "manage_accounts", testID: ie.Z.manageAccounts },
                be = ae(({ clearDelegateUser: e, createLocalApiErrorHandlerAccountSwitch: t, createLocalApiErrorHandlerMultiListFetch: a, delegateAccountCount: o, delegateUser: s, fetchMultiAccountList: l, fetchStatus: c, hasMultiAccountBadges: i, isExpanded: d, loggedInUser: u, multiAccountUsers: m, style: p, switchAccount: h, withUpdatedAccountSwitcher: g }) => {
                    const b = (0, M.z)();
                    (0, R.ip)();
                    const [f, y] = (0, r.KO)(R.lA),
                        E = n.useCallback(() => {
                            const e = m.length > 1,
                                t = [];
                            return m.length >= 5 || s || t.push({ actionText: de, link: "/i/flow/login", scribeElement: "add_existing_account", testID: ie.Z.addAccount }), e && t.push(ge), (o || f > 0) && t.push({ actionText: pe, link: o || f > 0 ? "/i/delegate/delegations" : "/settings/delegate", scribeElement: "manage_accounts", testID: ie.Z.manageAccounts, badge: { count: f, label: he } }), u && t.push({ actionText: me({ screenName: u.screen_name }), link: "/logout", scribeElement: "log_out", testID: ie.Z.logout }), t;
                        }, [o, s, u, m.length, f]),
                        C = n.useCallback(
                            ({ hasBadge: e, isProtected: a, userId: n }) => {
                                b.scribe({ component: a ? "switch_to_protected_account" : "switch_account", element: e ? "account_badged" : "account", action: "click" }), h({ user_id: n }).catch(t(T.y));
                            },
                            [b, t, h],
                        ),
                        Z = n.useCallback(() => {
                            const { hasMultiAccountCookie: e } = (0, B.s)();
                            return e;
                        }, []),
                        w = n.useCallback((t) => (y(), u ? (g ? n.createElement(J, { accountSwitch: C, accountUsers: m, activeUser: u, createLocalApiErrorHandlerAccountsFetch: a, fetchAccounts: l, fetchStatus: c, handleClose: t, manageAccountsMenuItem: ge, shouldDisplayFetchRenderer: Z() }) : n.createElement(ce, { accountSwitch: C, accountUsers: m, activeUser: u, additionalMenuItems: E(), clearDelegateUser: e, createLocalApiErrorHandlerAccountsFetch: a, delegateAccountCount: o, delegateUser: s, fetchAccounts: l, fetchStatus: c, handleClose: t, shouldDisplayFetchRenderer: Z(), withBadges: !0 })) : null), [e, a, o, s, l, c, E, Z, y, u, C, m, g]);
                    return n.createElement(D, { analytics: b, currentUser: u, delegateUser: s, hasMultiAccountBadges: i, interactiveViewTestId: ie.Z.accountSwitcher, isExpanded: d, renderMenuSheet: w, style: p });
                });
        },
        906433: (e, t, a) => {
            a.d(t, { Z: () => g });
            a(136728);
            var n = a(202784),
                r = a(325686),
                o = a(952428),
                s = a(731708),
                l = a(310088),
                c = a(392237),
                i = a(111677),
                d = a.n(i),
                u = a(206962);
            const m = () => d().d9ef2842,
                p = d().d86bbf0f,
                h = d().h6beb5fb,
                g = ({ badgeCount: e, decoration: t, icon: a, iconColor: c, label: i, link: d, onClick: g, pip: f, rightControl: y, testID: E }) =>
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
                                              return c && e.push({ color: c }), e;
                                          })(),
                                          testID: u.Z.icon,
                                      })
                                    : null,
                                n.createElement(s.ZP, { numberOfLines: 1, size: "headline1", style: b.itemLabel, weight: "bold" }, i),
                                e || f ? n.createElement(r.Z, { style: b.itemAccessory }, n.createElement(l.Z, { count: e, pip: f, standalone: !0, truncatedCountFormatter: h, unreadCountLabel: f ? m : p })) : null,
                                t ? n.createElement(r.Z, { style: b.leftMargin }, t) : null,
                            ),
                        ),
                        y,
                    ),
                b = c.default.create((e) => ({ dashMenuItem: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.text, flexShrink: 0, marginEnd: e.spaces.space12 }, iconWithDashRedesign: { alignSelf: "center", marginEnd: e.spaces.space24, height: e.spaces.space24, width: e.spaces.space24 }, item: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, flexDirection: "row", flexGrow: 1, alignItems: "center" }, itemAccessory: { flexShrink: 1, marginStart: e.spaces.space20, minWidth: e.spaces.space24, alignItems: "center" }, itemLabel: { flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space16 }, link: { flexGrow: 1, maxWidth: "100%" } }));
        },
        206962: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { iconPlus: "iconPlus", iconMore: "iconMore", logout: "logout", switcher: "switcher", settings: "settings", help: "help", icon: "icon", settingsAndSupport: "settingsAndSupport" };
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                r = a(500002),
                o = a(668214),
                s = a(997174),
                l = a(118823);
            const c = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class i extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: o, search: s },
                            locationKey: l,
                        } = e;
                    let c = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (c = !0));
                    const i = r || l;
                    ((i && r !== l) || (!i && a !== o) || n !== s || c) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            i.defaultProps = { children: null };
            const d = (0, r.ZP)(c(i));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.JobSearch-b308cbaf.baecdf5a.js.map
