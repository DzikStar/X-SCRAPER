"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.SideNav~loader.SideNavRedesign~bundle.MultiAccount~bundle.JobSearch", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        229412: (e, t, a) => {
            a.d(t, { a: () => T });
            a(136728);
            var r = a(202784),
                n = a(325686),
                c = a(530732),
                i = a(310088),
                o = a(731708),
                s = a(673510),
                l = a(661810),
                d = a(392237),
                u = a(111677),
                h = a.n(u),
                g = a(297896),
                m = a(293723),
                p = a(58399),
                v = a(913973),
                f = a(516951),
                b = a(725516),
                C = a(125363),
                w = a(806960);
            const y = h().h6beb5fb,
                E = h().d86bbf0f,
                _ = d.default.create((e) => ({ notificationBadge: { paddingHorizontal: e.spaces.space4 } })),
                Z = ({ notificationCount: e = 0 }) => (e > 0 ? r.createElement(i.Z, { count: e, style: e > 9 && _.notificationBadge, truncatedCountFormatter: y, unreadCountLabel: E }) : null);
            var k = a(110512),
                I = a(642153),
                M = a(899667),
                U = a(487552),
                A = a(390387);
            const S = h().c61eea74,
                D = h().b7dc3885,
                B = h().d86bbf0f,
                x = h().h6beb5fb,
                L = ({ accountUsers: e, activeUser: t, handleMultiAccountSwitch: a, isUpdatedManageAccounts: c, renderUserDecoration: d, userTestId: u, withBadges: h }) => {
                    const g = (0, C.v9)(A.BP),
                        m = !0,
                        [p, v] = r.useState(!1),
                        f = r.useMemo(() => e.filter((e) => e.user_id !== t?.id_str), [e, t]),
                        b = r.useMemo(() => f.reduce((e, t) => e + (t.badgeCount || 0), 0), [f]),
                        w = r.useCallback(() => {
                            v(!p);
                        }, [p]),
                        y = r.useMemo(() => (g && g > 0 ? r.createElement(n.Z, { onClick: w, style: F.personalAccountsLabel }, r.createElement(o.ZP, { color: "gray700", weight: "bold" }, S), p ? r.createElement(M.default, { style: F.IconChevronUp }) : r.createElement(U.default, { style: F.IconChevronDown })) : null), [m, g, w, p]),
                        E = r.useMemo(
                            () =>
                                f.map((e) => {
                                    const t = e.badgeCount ?? 0;
                                    return r.createElement(r.Fragment, { key: e.user_id }, r.createElement(s.ZP, { affiliateBadgeInfo: e.highlighted_label, "aria-label": D({ screenName: e.screen_name }), avatarDecoration: c && r.createElement(Z, { notificationCount: t }), avatarUri: e.avatar_image_url, badgeContext: "account", decoration: d({ badgeCount: t, withBadges: h, isActiveUser: !1 }), displayMode: "UserCompact", isBlueVerified: e.is_blue_verified, isProtected: e.is_protected, isVerified: e.is_verified, name: e.name, onCellClick: a({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }), screenName: e.screen_name, testID: u, userId: e.user_id, verifiedType: e.verified_type, withLink: !1 }), c && r.createElement(l.Z, { style: F.accountDivider }));
                                }),
                            [a, f, d, u, h, c],
                        ),
                        _ = r.useMemo(() => r.createElement(n.Z, { style: F.facePileContainer }, r.createElement(I.Z, { userAvatarSize: "large", userAvatarUrls: f.map((e) => e.avatar_image_url) }), b > 0 ? r.createElement(i.Z, { count: b, standalone: !0, truncatedCountFormatter: x, unreadCountLabel: B }) : null), [f, b]);
                    return f.length > 0 ? r.createElement(r.Fragment, null, !c && y, c || p || void 0 === g || 0 === g ? E : _) : null;
                },
                F = d.default.create((e) => ({ personalAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                z = r.memo(L);
            var P = a(22132);
            const R = h().c61eea74,
                j = h().d86bbf0f,
                N = h().h6beb5fb;
            function T(e) {
                const { accountSwitch: t, accountUsers: a, activeUser: d, clearDelegateUser: u, delegateAccountCount: h, delegateUser: y, isDelegateEnabled: E, isUpdatedManageAccounts: _, onDelegateSwitch: I, onUserSwitch: M, userTestId: U, withBadges: A = !1 } = e,
                    S = !!y,
                    D = a.some((e) => e.user_id === d.id_str) || (h && h > 0) || S,
                    B = r.useCallback(() => {
                        u && u();
                    }, [u]),
                    x = r.useCallback(
                        ({ hasBadge: e, isProtected: a, userId: r }) =>
                            () => {
                                t({ hasBadge: e, isProtected: a, userId: r }), M?.();
                            },
                        [t, M],
                    ),
                    L = (0, C.v9)(w.pm),
                    F = (0, C.v9)(w.QA),
                    T = (0, b.z)(),
                    H = r.useCallback(
                        ({ isActiveUser: e, isLoggedInUser: t }) => {
                            const a = [];
                            return (
                                t &&
                                    a.push(
                                        r.createElement(
                                            c.Z,
                                            {
                                                link: "/logout",
                                                onClick: () => {
                                                    T.scribe({ action: "click", element: "log_out" });
                                                },
                                                testID: P.Z.logout,
                                                withoutInteractiveStyles: !0,
                                            },
                                            r.createElement(g.default, { style: V.IconExiting }),
                                        ),
                                    ),
                                a.push(e ? r.createElement(m.default, { style: V.updatedIconCheckmarkCircleFill }) : r.createElement(p.default, { style: V.IconChevronRight })),
                                r.createElement(
                                    n.Z,
                                    { style: V.decorationsContainer },
                                    a.map((e, t) => r.createElement(r.Fragment, { key: t }, e)),
                                )
                            );
                        },
                        [T],
                    ),
                    q = r.useCallback(({ badgeCount: e, isActiveUser: t, withBadges: a }) => (t ? (E ? r.createElement(m.default, { style: [V.IconCheckmarkCircleFill, V.userDecoration] }) : r.createElement(v.default, { style: [V.iconCheckMark, V.userDecoration] })) : e && a ? r.createElement(i.Z, { count: e, standalone: !0, style: V.userDecoration, truncatedCountFormatter: N, unreadCountLabel: j }) : void 0), [E]),
                    J = r.useMemo(() => (_ ? H : q), [_, q, H]),
                    Q = r.useMemo(() => r.createElement(k.ZP, { activeUserId: d.id_str, delegateUser: y, isUpdatedManageAccounts: _, key: 0, onDelegateSwitch: I ?? f.Z, renderUserDecoration: J }), [d.id_str, y, _, I, J]),
                    G = r.useMemo(() => r.createElement(z, { accountUsers: a, activeUser: d, handleMultiAccountSwitch: x, isUpdatedManageAccounts: !!_, key: 1, renderUserDecoration: J, userTestId: U, withBadges: A }), [a, d, x, _, J, U, A]),
                    K = [];
                return !_ && E && K.push(Q), K.push(G), _ && E && K.push(Q), r.createElement(r.Fragment, null, _ && E && r.createElement(n.Z, { style: V.personalAccountsLabel }, r.createElement(o.ZP, { color: "gray700", weight: "bold" }, R)), D ? r.createElement(r.Fragment, null, r.createElement(s.ZP, { affiliateBadgeInfo: d.highlightedLabel, avatarDecoration: _ && r.createElement(Z, { notificationCount: L + F }), avatarUri: d.profile_image_url_https, badgeContext: "account", decoration: J({ withBadges: A, isActiveUser: !y, isLoggedInUser: !0 }), displayMode: "UserCompact", isBlueVerified: d.is_blue_verified, isProtected: d.protected, isVerified: d.verified, name: d.name, onCellClick: S ? B : void 0, screenName: d.screen_name, testID: U, userId: d.id_str, verifiedType: d.verified_type, withLink: !1 }), _ && r.createElement(l.Z, { style: V.accountDivider })) : null, K, !_ && (D || h || a.length) ? r.createElement(l.Z, { spacing: "space12" }) : null);
            }
            const V = d.default.create((e) => ({ iconCheckMark: { color: e.colors.primary, flexShrink: 0 }, IconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, marginEnd: e.spaces.space8 }, updatedIconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconExiting: { color: e.colors.red500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconChevronRight: { color: "inherit", flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, decorationsContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, userDecoration: { marginStart: e.spaces.space12 }, personalAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 } }));
        },
        22132: (e, t, a) => {
            a.d(t, { Z: () => r });
            const r = { accountSwitcher: "SideNav_AccountSwitcher_Button", addAccount: "AccountSwitcher_AddAccount_Button", logout: "AccountSwitcher_Logout_Button", manageAccounts: "AccountSwitcher_ManageAccounts_Button" };
        },
        879113: (e, t, a) => {
            a.d(t, { Z: () => g });
            var r = a(202784),
                n = a(476984),
                c = a.n(n),
                i = a(143778),
                o = a(750410),
                s = a(682830);
            const l = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class g extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        a = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !a) || !c()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: a, fetchStatus: n, icon: c, loadingMessage: i, onRequestRetry: d, render: g, renderFailure: m, retryMessage: p, retryable: v } = this.props;
                    switch (n) {
                        case l:
                            return v ? r.createElement(o.Z, { icon: c, onRequestRetry: d, retryMessage: p }) : a ? r.createElement(s.m, { failureMessage: a }) : m();
                        case u:
                            return r.createElement(s.J, { "aria-label": e, color: t, loadingMessage: i });
                        case h:
                            return null;
                        default:
                            return g();
                    }
                }
            }
            g.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        58399: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var r = a(202784),
                n = a(890601),
                c = a(783427),
                i = a(717683),
                o = a(347101);
            const s = (e = {}) => {
                const t = r.useContext(i.Z),
                    { direction: a } = (0, c.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style, t && o.Z.iconRTL], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        246492: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                n = a(890601),
                c = a(783427),
                i = a(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, c.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        264171: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                n = a(890601),
                c = a(783427),
                i = a(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, c.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        98440: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                n = a(890601),
                c = a(783427),
                i = a(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, c.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        262009: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                n = a(890601),
                c = a(783427),
                i = a(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, c.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        465233: (e, t, a) => {
            a.d(t, { Z: () => n });
            var r = a(716406);
            function n(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(n) : (0, r.Z)(e, (e) => n(e));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.SideNav~loader.SideNavRedesign~bundle.MultiAccount~bundle.JobSearch.08d00e4a.js.map
