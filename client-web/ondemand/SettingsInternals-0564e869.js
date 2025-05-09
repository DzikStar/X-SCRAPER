"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-0564e869"],
    {
        466441: (e, a, d) => {
            d.r(a), d.d(a, { NotFoundScreen: () => y, default: () => w });
            d(571372);
            var n = d(202784),
                r = d(386802),
                o = d(108362),
                t = d(392237),
                l = d(674132),
                i = d.n(l),
                c = d(187669),
                s = d(449067),
                u = d(38293),
                b = d(231035),
                p = d(652904),
                h = d(952793),
                m = d(163889),
                D = d(725516);
            const S = i().ba929da8,
                A = i().d203e242;
            function y(e) {
                const { splat: a } = e.match.params,
                    { isModal: d } = n.useContext(r.Z),
                    t = (0, h.hC)("responsive_web_report_page_not_found");
                return (
                    (0, c.q)(() => {
                        t && a && (0, m.ZP)(new Error(`Page not found: ${a}`));
                    }),
                    n.createElement(p.Z, null, n.createElement(s.Z.Configure, { backLocation: "/", documentTitle: S, title: A }), n.createElement(o.Z, { style: d && f.modal }, n.createElement(b.Z, null)), n.createElement(u.Z, { title: S, withMeta: !1 }))
                );
            }
            const f = t.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                w = (0, D.Z)(y, { page: "not_found" });
        },
        202886: (e, a, d) => {
            d.r(a), d.d(a, { ApplicationDetailPage: () => W, default: () => X });
            var n = d(202784),
                r = d(856642),
                o = d(325686),
                t = d(688715),
                l = d(457311),
                i = d(731708),
                c = d(779610),
                s = d(992942),
                u = d(242454),
                b = d(844685),
                p = d(952428),
                h = d(88307),
                m = d(392237),
                D = d(674132),
                S = d.n(D),
                A = d(912021),
                y = d(290402),
                f = d(811105),
                w = d(652904),
                M = d(264922),
                g = d(396634),
                v = d(71620),
                _ = d(668214),
                E = d(948985);
            const k = (e, a) => a.match.params.appId,
                P = (e, a) => E.$q.selectAppsById(e, k(0, a)),
                Z = (0, _.Z)()
                    .propsFromState(() => ({ appId: k, fetchStatus: E.UD, details: P }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, v.zr)("APPLICATION_DETAIL"), fetchApplication: E.zw, revokeApplication: E.$q.revokeApplication, revokeOauth2Token: E.$q.revokeOauth2Token }))
                    .withAnalytics({ page: "settings", section: "application_detail" }),
                I = S().g8d1b99b,
                B = S().eafcc76a,
                C = S().j3998a16,
                T = S().a6845663,
                x = S().b2347f7c,
                L = S().e1fda16e,
                R = S().b8f3ed46,
                N = S().gb8d09ba,
                F = S().g6dc09a0,
                z = S().a6e6e898,
                H = S().cde3b9ae,
                O = S().g0d7813a,
                U = S().c9b35b9e,
                j = S().e0191264,
                $ = S().b73e1e8a,
                V = (0, t.ju)("https://support.x.com/articles/20170805"),
                q = (0, t.ju)("https://support.x.com/forms/platform"),
                G = "oauth2";
            class W extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getSortedCanViewScopes = (0, A.Z)((e) => e.filter((e) => "can_view" === e.category).sort((e, a) => e.rank - a.rank))),
                        (this._getSortedCanDoScopes = (0, A.Z)((e) => e.filter((e) => "can_do" === e.category).sort((e, a) => e.rank - a.rank))),
                        (this._handleRevokeApp = (e, a) => {
                            this._revokeApplication(e, a), this._scribeAction("revoke_access");
                        }),
                        (this._handleRetry = () => {
                            this._fetchApp();
                        }),
                        (this._fetchApp = () => {
                            const { appId: e, createLocalApiErrorHandler: a, fetchApplication: d } = this.props;
                            d(e).catch(a({ showToast: !0 }));
                        }),
                        (this._render = () => {
                            const { details: e } = this.props,
                                a = e[0];
                            if (!a) return n.createElement(l.Z, { header: L, message: R });
                            const d = { app_id: a.app_id, app_name: a.name },
                                t = n.createElement(o.Z, { style: K.itemContainer }, n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, this._renderApprovalDate(a.approved)));
                            return n.createElement(
                                o.Z,
                                null,
                                n.createElement(c.Z, { description: a.organization, label: a.name, thumbnail: n.createElement(s.Z, { "aria-label": "", source: a.img_url, style: K.avatar }) }),
                                a.organization_url ? n.createElement(u.Z, { color: "primary", label: a.organization_url, link: a.organization_url }) : null,
                                n.createElement(o.Z, { style: K.itemContainer }, n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, a.description)),
                                t,
                                n.createElement(b.Z, { text: F }),
                                e.map((e) => n.createElement(o.Z, { key: e.token }, this._renderPermissions(e), e.ios ? null : n.createElement(g.Z, { onRevoke: this._handleRevokeApp, reportApplicationHref: `${q}?${(0, r.stringify)(d)}`, revoked: !!e.revoked, token: e.token, tokenType: e.token_type || "oauth1" }))),
                                a.ios ? n.createElement(p.Z, { link: V, style: [K.itemContainer, K.center] }, n.createElement(i.ZP, { color: "link" }, $)) : null,
                            );
                        });
                }
                UNSAFE_componentWillMount() {
                    this._fetchApp();
                }
                _renderPermissions(e) {
                    if (null != e.scopes && e.token_type === G) {
                        const a = Array.from(e.scopes);
                        return n.createElement(o.Z, { style: K.permissionContainer }, this._renderCanViewScopesList(a), this._renderCanDoScopes(a));
                    }
                    return n.createElement(n.Fragment, null, this._renderReadWritePermissions(e), this._renderAdsPermission(e), this._renderEmailPermission(e));
                }
                _renderCanViewScopesList(e) {
                    const a = this._getSortedCanViewScopes(e);
                    return a.length ? n.createElement(f.Z, { scopes: a, size: "subtext2", title: B }) : null;
                }
                _renderCanDoScopes(e) {
                    const a = this._getSortedCanDoScopes(e);
                    return a.length ? n.createElement(f.Z, { scopes: a, size: "subtext2", title: C }) : null;
                }
                _renderReadWritePermissions(e) {
                    let a = null;
                    return e.can_read_dms ? (a = O) : e.can_write ? (a = H) : e.can_read && (a = z), a ? n.createElement(h.Z, { label: a }) : null;
                }
                _renderEmailPermission(e) {
                    return e.email_access ? n.createElement(h.Z, { label: N }) : null;
                }
                _renderAdsPermission(e) {
                    let a = null;
                    return e.has_ads_read_write_access ? (a = j) : e.has_ads_read_access && (a = U), a ? n.createElement(h.Z, { label: a }) : null;
                }
                _renderApprovalDate(e) {
                    const a = new Date(Number(e)),
                        d = T({ date: I(a) });
                    return n.createElement("time", { dateTime: a.toISOString() }, d);
                }
                _revokeApplication(e, a) {
                    const { createLocalApiErrorHandler: d, revokeApplication: n, revokeOauth2Token: r } = this.props;
                    a === G ? r(e).catch(d({ showToast: !0 })) : n(e).catch(d({ showToast: !0 }));
                }
                _scribeAction(e) {
                    const { analytics: a } = this.props;
                    a.scribe({ component: "oauth_app", action: "click", element: e });
                }
                render() {
                    const { details: e, fetchStatus: a, location: d } = this.props,
                        r = e[0],
                        o = r ? r.name : "";
                    return n.createElement(w.Z, null, n.createElement(M.Z, { location: d, title: o }, n.createElement(y.Z, { "aria-label": x, fetchStatus: a, onRequestRetry: this._handleRetry, render: this._render })));
                }
            }
            const X = Z(W),
                K = m.default.create((e) => ({ avatar: { borderRadius: e.borderRadii.small, height: "100%", width: "100%" }, center: { justifyContent: "center" }, permissionContainer: { paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal }, itemContainer: { alignItems: "center", flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, width: "100%", borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } }));
        },
        137203: (e, a, d) => {
            d.r(a), d.d(a, { default: () => u });
            var n = d(688715),
                r = d(674132),
                o = d.n(r),
                t = d(248225),
                l = d(531014);
            const i = o().d23b0404,
                c = o().e0a7e9bc,
                s = (0, n.ju)("https://help.x.com/using-twitter/blocking-and-unblocking-accounts"),
                u = (0, l.v)({ scribeNamespace: { page: "blocked", section: "all_blocked_accounts" }, blockType: t.kH.All, emptyStateTitle: c, emptyStateMessage: i, supportUrl: s });
        },
        531014: (e, a, d) => {
            d.d(a, { v: () => j });
            var n = d(807896),
                r = d(202784),
                o = d(731708),
                t = d(688715),
                l = d(457311),
                i = d(420412),
                c = d(674132),
                s = d.n(c),
                u = d(912021),
                b = d(652904),
                p = d(810641),
                h = d(293115),
                m = d(248225),
                D = d(170069),
                S = d(668214);
            const A = (0, S.Z)().propsFromActions(() => ({ cleanupBlockList: m.ZH }));
            var y = d(269011),
                f = d(335632),
                w = d(962741),
                M = d(154003),
                g = d(712816),
                v = d(879596),
                _ = d(942893),
                E = d(71620),
                k = d(601576),
                P = d(919022);
            const Z = (e, a) => P.ZP.select(e, a.userId),
                I = (0, S.Z)()
                    .propsFromState(() => ({ user: Z }))
                    .propsFromActions(() => ({ addToast: k.fz, block: P.ZP.block, createLocalApiErrorHandler: (0, E.zr)("UNBLOCK_BUTTON"), unblock: P.ZP.unblock }))
                    .withAnalytics(),
                B = s().if594962,
                C = s().a6450e84,
                T = s().i2b9632e,
                x = s().a9fd20be;
            class L extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleUnblockToggle = () => {
                            const { addToast: e, block: a, createLocalApiErrorHandler: d, unblock: n, user: r, userId: o } = this.props;
                            r?.blocking
                                ? n(o).then((a) => {
                                      e({ text: T }), this._scribeAction("unblock");
                                  }, d(v.D))
                                : a(o).then((a) => {
                                      e({ text: x }), this._scribeAction("block");
                                  }, d(g.d));
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (e) {
                        const a = e.blocking ? B : C;
                        return r.createElement(M.ZP, { "aria-label": a, onPress: this._handleUnblockToggle, size: "medium", type: e.blocking ? "destructiveFilled" : "destructiveOutlined" }, a);
                    }
                    return null;
                }
                _scribeAction(e) {
                    const { analytics: a, user: d } = this.props,
                        n = d ? [_.Z.getUserItem(d)] : [];
                    a.scribe({ action: e, data: { items: n } });
                }
            }
            const R = I(L),
                N = { ...(0, f.G)({}), [w.ZP.User]: (0, y.Z)({ decoration: ({ userId: e }) => r.createElement(R, { userId: e }) }) },
                F = s().a5f32aa2,
                z = s().ef731b14,
                H = s().i859a9d4,
                O = r.createElement(s().I18NFormatMessage, { $i18n: "ab3bf5a7" }, r.createElement(o.ZP, { link: (0, t.ju)("https://support.x.com/articles/117063") }, s().e554ba83));
            class U extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getLegacyModule = () => {
                            const { blockType: e } = this.props;
                            return this._getMemoizedModule(e);
                        }),
                        (this._getMemoizedModule = (0, u.Z)((e) => (0, m.Gm)(e))),
                        (this._getEmptyStateRenderer = () => {
                            const { emptyStateMessage: e, emptyStateTitle: a, supportUrl: d } = this.props;
                            return this._getMemoizedEmptyStateRenderer(d, a, e);
                        }),
                        (this._getMemoizedEmptyStateRenderer = (0, u.Z)((e, a, d) => () => {
                            const n = r.createElement("div", null, d, " ", e && r.createElement(o.ZP, { link: e }, H));
                            return r.createElement(l.Z, { header: a, message: n });
                        }));
                }
                componentWillUnmount() {
                    const { cleanupBlockList: e } = this.props;
                    e(this._getLegacyModule());
                }
                render() {
                    return r.createElement(b.Z, null, r.createElement("div", null, r.createElement(D.Z, null, O), r.createElement(i.Z, null)), r.createElement(p.Z, { entryConfiguration: N, loadingAccessibilityLabel: z, module: this._getLegacyModule(), renderEmptyState: this._getEmptyStateRenderer(), title: F }));
                }
            }
            const j = ({ blockType: e, emptyStateMessage: a, emptyStateTitle: d, scribeNamespace: o, supportUrl: t }) => A((l) => r.createElement(h.nO, { namespace: o }, r.createElement(U, (0, n.Z)({}, l, { blockType: e, emptyStateMessage: a, emptyStateTitle: d, supportUrl: t }))));
        },
        831927: (e, a, d) => {
            d.r(a), d.d(a, { default: () => u });
            var n = d(688715),
                r = d(674132),
                o = d.n(r),
                t = d(248225),
                l = d(531014);
            const i = o().g51a96de,
                c = o().e0a7e9bc,
                s = (0, n.ju)("https://help.x.com/articles/20172663"),
                u = (0, l.v)({ scribeNamespace: { page: "blocked", section: "imported_blocked_accounts" }, blockType: t.kH.Imported, emptyStateTitle: c, emptyStateMessage: i, supportUrl: s });
        },
        689044: (e, a, d) => {
            d.r(a), d.d(a, { BlockedAccountsScreen: () => w, default: () => M });
            var n = d(202784),
                r = d(107267),
                o = d(674132),
                t = d.n(o),
                l = d(507651),
                i = d(443781),
                c = d(652904),
                s = d(293115),
                u = d(717988),
                b = d(264922);
            const p = t().a5f32aa2,
                h = t().f8321d82,
                m = t().eb233866,
                D = "/settings/blocked/all",
                S = "/settings/blocked/imported",
                A = { page: "settings", section: "blocked_accounts" },
                y = (0, u.p)(
                    () =>
                        Promise.all([
                            d.e("icons.23"),
                            d.e("icons.16"),
                            d.e("icons.2"),
                            d.e("icons.10"),
                            d.e("icons.19"),
                            d.e("icons.24"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.13"),
                            d.e("icons.27"),
                            d.e("icons.22"),
                            d.e("icons.17"),
                            d.e("icons.7"),
                            d.e("modules.audio-6107ac1a"),
                            d.e("modules.audio-b953418a"),
                            d.e("modules.audio-7c51e6a7"),
                            d.e("modules.audio-04db59e9"),
                            d.e("modules.audio-76583d6c"),
                            d.e("modules.audio-b7a8a5fb"),
                            d.e("modules.audio-51f6e793"),
                            d.e("modules.audio-e019dbda"),
                            d.e("modules.audio-262c94d4"),
                            d.e("modules.audio-c6fe4ea4"),
                            d.e("icons.8"),
                            d.e("icons.26"),
                            d.e("icons.21"),
                            d.e("icons.11"),
                            d.e("icons.1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2d1eb5e2"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                            d.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                            d.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            d.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                            d.e("shared~loader.DashMenu~loader.DashModal~ondemand.CommandCenter~bundle.Account~ondemand.SettingsInternals~onde"),
                            d.e("shared~ondemand.SettingsInternals~bundle.SettingsRevamp~bundle.SettingsTransparency"),
                            d.e("shared~ondemand.SettingsInternals~ondemand.SettingsRevamp"),
                            d.e("ondemand.SettingsInternals-6107ac1a"),
                            d.e("ondemand.SettingsInternals-5b7ef534"),
                            d.e("ondemand.SettingsInternals-9f4db315"),
                            d.e("ondemand.SettingsInternals-8ed0fac5"),
                            d.e("ondemand.SettingsInternals-0564e869"),
                            d.e("ondemand.SettingsInternals-71f5c63d"),
                            d.e("ondemand.SettingsInternals-cff17ecc"),
                            d.e("ondemand.SettingsInternals-394f886d"),
                        ]).then(d.bind(d, 137203)),
                    { shouldMigrateToX: !1 },
                ),
                f = (0, u.p)(
                    () =>
                        Promise.all([
                            d.e("icons.23"),
                            d.e("icons.16"),
                            d.e("icons.2"),
                            d.e("icons.10"),
                            d.e("icons.19"),
                            d.e("icons.24"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.13"),
                            d.e("icons.27"),
                            d.e("icons.22"),
                            d.e("icons.17"),
                            d.e("icons.7"),
                            d.e("modules.audio-6107ac1a"),
                            d.e("modules.audio-b953418a"),
                            d.e("modules.audio-7c51e6a7"),
                            d.e("modules.audio-04db59e9"),
                            d.e("modules.audio-76583d6c"),
                            d.e("modules.audio-b7a8a5fb"),
                            d.e("modules.audio-51f6e793"),
                            d.e("modules.audio-e019dbda"),
                            d.e("modules.audio-262c94d4"),
                            d.e("modules.audio-c6fe4ea4"),
                            d.e("icons.8"),
                            d.e("icons.26"),
                            d.e("icons.21"),
                            d.e("icons.11"),
                            d.e("icons.1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2d1eb5e2"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                            d.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                            d.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            d.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                            d.e("shared~loader.DashMenu~loader.DashModal~ondemand.CommandCenter~bundle.Account~ondemand.SettingsInternals~onde"),
                            d.e("shared~ondemand.SettingsInternals~bundle.SettingsRevamp~bundle.SettingsTransparency"),
                            d.e("shared~ondemand.SettingsInternals~ondemand.SettingsRevamp"),
                            d.e("ondemand.SettingsInternals-6107ac1a"),
                            d.e("ondemand.SettingsInternals-5b7ef534"),
                            d.e("ondemand.SettingsInternals-9f4db315"),
                            d.e("ondemand.SettingsInternals-8ed0fac5"),
                            d.e("ondemand.SettingsInternals-0564e869"),
                            d.e("ondemand.SettingsInternals-71f5c63d"),
                            d.e("ondemand.SettingsInternals-cff17ecc"),
                            d.e("ondemand.SettingsInternals-394f886d"),
                        ]).then(d.bind(d, 831927)),
                    { shouldMigrateToX: !1 },
                );
            class w extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderTabs = () => {
                            const e = [
                                { to: D, key: h, label: h, retainScrollPosition: !1 },
                                { to: S, key: m, label: m, retainScrollPosition: !1 },
                            ];
                            return n.createElement(l.Z, { "aria-label": p, links: e });
                        });
                }
                render() {
                    return n.createElement(s.nO, { namespace: A }, n.createElement(c.Z, null, n.createElement(b.Z, { location: this.props.location, secondaryBar: this._renderTabs(), title: p, withBottomBorder: !0, withMarginBottom: !1 }, n.createElement(r.Switch, null, n.createElement(r.Route, { component: y, exact: !0, path: D }), n.createElement(r.Route, { component: f, exact: !0, path: S })))));
                }
            }
            w.contextType = i.rC;
            const M = w;
        },
        720217: (e, a, d) => {
            d.r(a), d.d(a, { ConnectedAccounts: () => T, default: () => x });
            d(136728);
            var n = d(202784),
                r = d(99107),
                o = d(325686),
                t = d(943401),
                l = d(731708),
                i = d(779610),
                c = d(242454),
                s = d(420412),
                u = d(392237),
                b = d(879113),
                p = d(674132),
                h = d.n(p),
                m = d(833458),
                D = d(956056),
                S = d(261214),
                A = d(652904),
                y = d(264922),
                f = d(71620),
                w = d(668214),
                M = d(257166),
                g = d(38562),
                v = d(673110),
                _ = d(601576);
            const E = (0, w.Z)()
                    .propsFromState(() => ({ userEmail: M.selectFirstEmail, fetchStatus: g.UD, ssoConnections: g.An }))
                    .propsFromActions(() => ({ addToast: _.fz, createLocalApiErrorHandler: (0, f.zr)("SETTINGS_CONNECTED_APPS_SCREEN_CONTEXT"), deleteSSOConnection: g.O5, fetchDevicesIfNeeded: M.fetchDevicesIfNeeded, fetchSettingsIfNeeded: g.Sb, fetchSettings: g.wv, verifyPassword: v.Gv }))
                    .withAnalytics({ page: "settings", section: "connected_accounts", component: "delete_sso_connection" }),
                k = h().h1abfbce,
                P = h().f8e46b90,
                Z = h().d84ed6b2,
                I = h().i51130d4,
                B = h().e28901f2,
                C = h().cf8560be;
            class T extends n.Component {
                constructor(e, a) {
                    super(e, a),
                        (this._render = () => {
                            const { location: e } = this.props;
                            return n.createElement(A.Z, null, n.createElement(y.Z, { location: e, screenType: "secondaryDetail", title: k }, n.createElement(n.Fragment, null, n.createElement(t.Z, { description: P }), this._renderSSOProviderPivots())));
                        }),
                        (this._renderSSOProviderPivots = () => {
                            const { ssoConnections: e, userEmail: a } = this.props,
                                d = n.createElement(l.ZP, { color: "green500", size: "subtext2" }, n.createElement(m.default, null), " ", C);
                            if (e && e.r.ok.length) {
                                const {
                                    r: { ok: r },
                                } = e;
                                return r.map(({ ssoProvider: e }, t) => {
                                    const l = r.length - 1,
                                        { ssoProviderLabel: u, ssoProviderThumbnail: b } = this._getSSOProviderProps(e) || {};
                                    return n.createElement(o.Z, { key: t }, n.createElement(i.Z, { description: d, label: u, renderRightContent: a ? this._renderUserEmail(a) : void 0, thumbnail: b, thumbnailSize: "large" }), n.createElement(c.Z, { color: "red500", label: Z, onPress: this._handleOnPress({ ssoProvider: e }) }), t < l ? n.createElement(s.Z, null) : null);
                                });
                            }
                        }),
                        (this._renderUserEmail = (e) => () => n.createElement(l.ZP, null, e)),
                        (this._getSSOProviderProps = (e) => {
                            const a = e.toLowerCase(),
                                d = u.default.isDarkMode() ? u.default.theme.colors.white : void 0;
                            switch (a) {
                                case r.Bm.Google:
                                    return { ssoProviderThumbnail: n.createElement(D.default, null), ssoProviderLabel: I };
                                case r.Bm.Apple:
                                    return { ssoProviderThumbnail: n.createElement(S.default, { style: { color: d } }), ssoProviderLabel: B };
                                default:
                                    return;
                            }
                        }),
                        (this._combinedFetches = () => {
                            const { fetchDevicesIfNeeded: e, fetchSettingsIfNeeded: a } = this.props,
                                d = [e(), a()];
                            return Promise.all(d);
                        }),
                        (this._handleOnPress =
                            ({ ssoProvider: e }) =>
                            () => {
                                const { history: a } = this.props,
                                    d = e.toLowerCase();
                                a.push({ pathname: "/i/flow/sso_disconnect", state: { input: { requested_variant: JSON.stringify({ id_token: "test_id_token", provider: d, state: "test_state" }) } } });
                            }),
                        (this._handleFetchRetry = () => {
                            this._combinedFetches();
                        }),
                        (this._initialPath = this._previousPath = window.location.pathname);
                }
                componentDidMount() {
                    this._combinedFetches();
                }
                shouldComponentUpdate(e) {
                    const { createLocalApiErrorHandler: a, fetchSettings: d } = this.props;
                    return this._previousPath !== location.pathname && this._initialPath === location.pathname && d().catch(a()), (this._previousPath = location.pathname), e !== this.props;
                }
                render() {
                    const { fetchStatus: e } = this.props;
                    return n.createElement(b.Z, { fetchStatus: e, onRequestRetry: this._handleFetchRetry, render: this._render });
                }
            }
            const x = E(T);
        },
        208791: (e, a, d) => {
            d.r(a), d.d(a, { SettingsContactsScreen: () => C, default: () => T });
            var n = d(202784),
                r = d(688715),
                o = d(943401),
                t = d(844685),
                l = d(954110),
                i = d(420412),
                c = d(779610),
                s = d(674132),
                u = d.n(s),
                b = d(652904),
                p = d(264922),
                h = d(71620),
                m = d(668214),
                D = d(38562);
            const S = (0, m.Z)()
                    .propsFromState(() => ({ settings: D.l4 }))
                    .adjustStateProps(({ settings: e }) => ({ discoverableByEmail: e.discoverable_by_email, discoverableByMobilePhone: e.discoverable_by_mobile_phone }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("SETTINGS_CONTACTS_SCREEN"), updateSettings: D.VP }))
                    .withAnalytics({ page: "settings", section: "contacts" }),
                A = u().fd4d9068,
                y = u().ab987f3c,
                f = u().b033248c,
                w = u().c69b4798,
                M = u().eca117e6,
                g = u().acd36386,
                v = u().gd8511ca,
                _ = u().eca935ec,
                E = (0, r.ju)("https://help.x.com/safety-and-security/email-and-phone-discoverability-settings"),
                k = u().ac77c66c,
                P = u().bbcafbda,
                Z = u().jadf483e,
                I = (0, r.ju)("https://help.x.com/using-twitter/upload-your-contacts-to-search-for-friends"),
                B = u().i859a9d4;
            function C(e) {
                const { createLocalApiErrorHandler: a, discoverableByEmail: d, discoverableByMobilePhone: r, location: s, updateSettings: u } = e,
                    h = n.useCallback(
                        (e, d) => {
                            u({ [e]: d }).catch(a({ showToast: !0 }));
                        },
                        [a, u],
                    );
                return n.createElement(b.Z, null, n.createElement(p.Z, { location: s, title: A }, n.createElement(o.Z, { description: y }), n.createElement(t.Z, { text: f }), n.createElement(o.Z, { description: w }), n.createElement(l.Z, { checked: d, helpText: g, label: M, learnMoreLink: E, name: "discoverable_by_email", onChange: h }), n.createElement(l.Z, { checked: r, helpText: _, label: v, learnMoreLink: E, name: "discoverable_by_mobile_phone", onChange: h }), n.createElement(i.Z, null), n.createElement(t.Z, { text: k }), n.createElement(o.Z, { description: Z, learnMoreLabel: B, learnMoreLink: I }), n.createElement(c.Z, { label: P, link: "/settings/contacts_dashboard" })));
            }
            const T = S(C);
        },
        221930: (e, a, d) => {
            d.r(a), d.d(a, { SettingsContactsDashboardScreen: () => F, default: () => H });
            var n = d(202784),
                r = d(325686),
                o = d(731708),
                t = d(688715),
                l = d(909377),
                i = d(420412),
                c = d(392237),
                s = d(674132),
                u = d.n(s),
                b = d(25001),
                p = d(143778),
                h = d(817480),
                m = d(947135),
                D = d(290402),
                S = d(965245),
                A = d(443781),
                y = d(652904),
                f = d(293115),
                w = d(312771),
                M = d(170069),
                g = d(609848),
                v = d(264922),
                _ = d(267966),
                E = d(71620),
                k = d(668214),
                P = d(38562),
                Z = d(116635);
            const I = (0, k.Z)()
                    .propsFromState(() => ({ contacts: Z.Af, fetchStatus: Z.UD }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, E.zr)("SETTINGS_CONTACTS_DASHBOARD_SCREEN"), deleteContacts: P._f, fetchContactsIfNeeded: Z.d0, fetchContactsNext: Z.iv })),
                B = { page: "settings", section: "contacts_dashboard" },
                C = u().bbcafbda,
                T = n.createElement(u().I18NFormatMessage, { $i18n: "g66a254b" }, n.createElement(o.ZP, { link: (0, t.ju)("https://help.x.com/using-twitter/upload-your-contacts-to-search-for-friends") }, u().d439b1c1)),
                x = u().b864be7a,
                L = { headline: u().g5fa1090, text: u().h3e420fc, confirmButtonLabel: u().e68b09b4 },
                R = u().ca24589e,
                N = (e) => e.id_str;
            class F extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { verificationRequired: !1 }),
                        (this._renderTimeline = () => {
                            const { contacts: e, fetchStatus: a } = this.props;
                            return n.createElement(S.Z, { assumedItemHeight: 70, cacheKey: "CONTACTS_DASHBOARD", footer: this._renderFooter(a), identityFunction: N, items: e, onNearEnd: this._handleFetchMoreContacts, renderer: this._renderContact });
                        }),
                        (this._renderContact = (e) => {
                            const { id_str: a, import_source: d, vcard: t } = e,
                                i = this._getContactProp(t.get("fn")) || R,
                                c = this._getContactProperties(t.get("tel")),
                                s = [...this._getContactProperties(t.get("email")), ...c];
                            return n.createElement(r.Z, { key: a, style: [[_.Z.infoText, _.Z.bottomBorder], z.contactContainer] }, n.createElement(l.Z, { Icon: b.default, color: "neutral", style: z.personIcon }), n.createElement(r.Z, null, n.createElement(o.ZP, null, i), s ? s.map((e) => n.createElement(o.ZP, { color: "gray700", key: e, size: "subtext2" }, e)) : null, d ? n.createElement(o.ZP, { color: "gray700", size: "subtext2" }, `Imported from ${d}`) : null));
                        }),
                        (this._renderFooter = (e) => (e === w.ZP.LOADING ? n.createElement(r.Z, { style: z.loadingContainer }, n.createElement(D.Z, { fetchStatus: e, render: p.Z })) : null)),
                        (this._handleRemoveContacts = () => {
                            const { createLocalApiErrorHandler: e, deleteContacts: a } = this.props;
                            a().catch(e({ showToast: !0 }));
                        }),
                        (this._handleFetchMoreContacts = () => {
                            const { createLocalApiErrorHandler: e, fetchContactsNext: a } = this.props;
                            a().catch(e());
                        }),
                        (this._getContactProp = (e) => (this._getContactProperties(e)[0] || "").trim()),
                        (this._getContactProperties = (e) => (e ? (Array.isArray(e) ? (0, h.Z)(e.map((e) => this._getContactProperties(e))) : [e.valueOf()]) : []));
                }
                render() {
                    const { contacts: e, fetchContactsIfNeeded: a, fetchStatus: d, location: r } = this.props;
                    return n.createElement(f.nO, { namespace: B }, n.createElement(y.Z, null, n.createElement(v.Z, { location: r, title: C }, n.createElement(m.Z, { confirmationSheetConfirmButtonLabel: L.confirmButtonLabel, confirmationSheetConfirmButtonType: "destructiveFilled", confirmationSheetHeadline: L.headline, confirmationSheetText: L.text, label: x, onConfirmationSheetConfirm: this._handleRemoveContacts }), n.createElement(M.Z, null, T), n.createElement(i.Z, null), n.createElement(g.Z, { fetch: a, fetchStatus: e.length > 0 ? w.ZP.LOADED : d, render: () => this._renderTimeline() }))));
                }
            }
            F.contextType = A.rC;
            const z = c.default.create((e) => ({ contactContainer: { flexDirection: "row", flexWrap: "wrap" }, personIcon: { marginEnd: e.spaces.space12 }, loadingContainer: { paddingVertical: e.spaces.space16, justifyContent: "center" } })),
                H = I(F);
        },
        412483: (e, a, d) => {
            d.r(a), d.d(a, { ContentPreferencesPage: () => Z, default: () => I });
            var n = d(202784),
                r = d(844685),
                o = d(779610),
                t = d(420412),
                l = d(943401),
                i = d(674132),
                c = d.n(i),
                s = d(443781),
                u = d(652904),
                b = d(264922),
                p = d(754393),
                h = d(668214),
                m = d(205253);
            const D = (0, h.Z)()
                    .propsFromState(() => ({ personalizationSettings: m.kQ }))
                    .withAnalytics({ page: "settings", section: "timeline" }),
                S = "exploreHeader",
                A = c().aeddb28a,
                y = c().fcf3e54c,
                f = c().hfb77cf6,
                w = c().d495680e,
                M = c().f350f0c0,
                g = c().fd3369a2,
                v = c().h1ef00dc,
                _ = c().e8f57e08,
                E = c().e8f57e08,
                k = c().hfc86556,
                P = c().a5f32aa2;
            class Z extends n.Component {
                constructor(...e) {
                    super(...e), (this._trendsLabel = this.context.featureSwitches.isTrue("responsive_web_trends_setting_new_endpoints") ? c().j018f2a2 : c().c5f4befa);
                }
                _renderPersonalizationDescription() {
                    const { personalizationSettings: e } = this.props;
                    return (0, p.s)(e);
                }
                render() {
                    const { location: e } = this.props,
                        a = this.context.featureSwitches.isTrue("responsive_web_trends_setting_new_endpoints") ? "/settings/explore" : "/settings/trends";
                    return n.createElement(u.Z, null, n.createElement(b.Z, { location: e, screenType: "primaryDetail", title: A }, n.createElement(r.Z, { testID: S, text: y }), n.createElement(o.Z, { label: v, link: "/settings/search" }), n.createElement(o.Z, { label: this._trendsLabel, link: a }), n.createElement(t.Z, null), n.createElement(r.Z, { text: w }), n.createElement(o.Z, { label: M, link: "/i/flow/language_selector" }), n.createElement(l.Z, { description: g }), n.createElement(t.Z, null), n.createElement(r.Z, { text: f }), n.createElement(o.Z, { label: k, link: "/settings/mute" }), n.createElement(o.Z, { label: P, link: "/settings/blocked/all" }), n.createElement(t.Z, null), n.createElement(r.Z, { text: _ }), n.createElement(o.Z, { description: this._renderPersonalizationDescription(), label: E, link: "/settings/account/personalization" })));
                }
            }
            Z.contextType = s.rC;
            const I = D(Z);
        },
        536909: (e, a, d) => {
            d.r(a), d.d(a, { default: () => D });
            var n = d(202784),
                r = d(325686),
                o = d(844685),
                t = d(731708),
                l = d(674132),
                i = d.n(l),
                c = d(652904),
                s = d(293115),
                u = d(264922),
                b = d(267966);
            const p = i().g0ec0bec,
                h = i().g89f4614,
                m = { page: "settings", section: "deactivate_success" },
                D = ({ location: e }) => n.createElement(s.nO, { namespace: m }, n.createElement(c.Z, null, n.createElement(u.Z, { location: e, screenType: "primaryDetail", title: p }, n.createElement(o.Z, { text: h }), n.createElement(r.Z, { style: b.Z.viewItem }, n.createElement(t.ZP, { color: "gray700", size: "subtext2" }, n.createElement(i().I18NFormatMessage, { $i18n: "if2bb997" }))))));
        },
        658679: (e, a, d) => {
            d.r(a), d.d(a, { DeactivateScreen: () => x, default: () => L });
            var n = d(202784),
                r = d(614983),
                o = d.n(r),
                t = d(325686),
                l = d(688715),
                i = d(731708),
                c = d(844685),
                s = d(420412),
                u = d(242454),
                b = d(674132),
                p = d.n(b),
                h = d(443781),
                m = d(652904),
                D = d(240089),
                S = d(472039),
                A = d(267966),
                y = d(71620),
                f = d(668214),
                w = d(558477);
            const M = (0, f.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("DEACTIVATE"), deactivate: w.Z }))
                    .withAnalytics({ page: "settings", section: "deactivate" }),
                g = p().j035733c,
                v = p().j4a29d52,
                _ = p().ea989810,
                E = p().f6e73faa,
                k = p().c3743328,
                P = p().a20cd24e,
                Z = p().fe36fe10,
                I = p().e93b0ae0,
                B = "/settings/your_twitter_data/account",
                C = (0, l.ju)("https://help.x.com/safety-and-security/remove-twitter-profile-from-google-search"),
                T = ({ children: e, withBottomBorder: a = !0 }) => n.createElement(t.Z, { style: [A.Z.viewItem, a && A.Z.bottomBorder] }, n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, e));
            class x extends n.Component {
                constructor(e, a) {
                    super(e, a),
                        (this._handleDeactivateRequest = () => {
                            window.scrollTo(0, 0), this.setState({ showPasswordDialog: !0 });
                        }),
                        (this._handlePasswordSubmit = (e) => {
                            const { createLocalApiErrorHandler: a, deactivate: d } = this.props;
                            d(e, "30_days").catch((e) => (this.setState({ showPasswordDialog: !1 }), a({ showToast: !0 })(e)));
                        }),
                        (this.state = { showPasswordDialog: !1 });
                }
                _scribeAction(e) {
                    const { analytics: a } = this.props;
                    a.scribe({ component: "deactivate", element: e, action: "click" });
                }
                render() {
                    const { location: e } = this.props,
                        { viewerUserId: a } = this.context,
                        { showPasswordDialog: d } = this.state;
                    return o()(!!a, "viewerUserId must be defined"), n.createElement(m.Z, null, n.createElement(S.Z, { location: e, onPasswordSubmit: this._handlePasswordSubmit, promptForPassword: d, reenterPasswordLabel: I, saveChangesHeaderLabel: Z, submitLabel: E, submitType: "destructiveFilled", title: _ }, n.createElement(t.Z, null, n.createElement(D.ZP, { key: a, userId: a, withLink: !1 }), n.createElement(c.Z, { text: k }), n.createElement(T, { withBottomBorder: !1 }, g), n.createElement(c.Z, { text: P }), n.createElement(T, null, v), n.createElement(T, null, n.createElement(p().I18NFormatMessage, { $i18n: "g124fce9" }, n.createElement(i.ZP, { link: C }, p().fc025d1d))), n.createElement(T, null, n.createElement(p().I18NFormatMessage, { $i18n: "d9ef8fbb" }, n.createElement(i.ZP, { link: B }, p().bb5e039c))), n.createElement(T, null, n.createElement(p().I18NFormatMessage, { $i18n: "b7a3adc1" }, n.createElement(i.ZP, { link: B }, p().j37efff6))), n.createElement(T, { withBottomBorder: !1 }, n.createElement(p().I18NFormatMessage, { $i18n: "f3613d0b" }, n.createElement(i.ZP, { link: "/settings/download_your_data" }, p().ce5bfe12))), n.createElement(s.Z, null), n.createElement(u.Z, { color: "red500", label: E, onPress: this._handleDeactivateRequest }))));
                }
            }
            x.contextType = h.rC;
            const L = M(x);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-0564e869.7c01f1ba.js.map
