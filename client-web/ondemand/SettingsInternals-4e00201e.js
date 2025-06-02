"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-4e00201e"],
    {
        202886: (e, a, t) => {
            t.r(a), t.d(a, { ApplicationDetailPage: () => W, default: () => X });
            var n = t(202784),
                o = t(856642),
                r = t(325686),
                d = t(688715),
                l = t(457311),
                s = t(731708),
                i = t(779610),
                c = t(992942),
                u = t(242454),
                m = t(844685),
                h = t(952428),
                p = t(88307),
                D = t(392237),
                b = t(111677),
                f = t.n(b),
                M = t(912021),
                g = t(290402),
                A = t(811105),
                y = t(652904),
                _ = t(264922),
                E = t(396634),
                S = t(71620),
                k = t(668214),
                P = t(948985);
            const w = (e, a) => a.match.params.appId,
                Z = (e, a) => P.$q.selectAppsById(e, w(0, a)),
                I = (0, k.Z)()
                    .propsFromState(() => ({ appId: w, fetchStatus: P.UD, details: Z }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, S.zr)("APPLICATION_DETAIL"), fetchApplication: P.zw, revokeApplication: P.$q.revokeApplication, revokeOauth2Token: P.$q.revokeOauth2Token }))
                    .withAnalytics({ page: "settings", section: "application_detail" }),
                v = f().g8d1b99b,
                C = f().eafcc76a,
                T = f().j3998a16,
                x = f().a6845663,
                L = f().b2347f7c,
                N = f().e1fda16e,
                F = f().b8f3ed46,
                R = f().gb8d09ba,
                B = f().g6dc09a0,
                z = f().a6e6e898,
                O = f().cde3b9ae,
                H = f().g0d7813a,
                U = f().c9b35b9e,
                j = f().e0191264,
                $ = f().b73e1e8a,
                V = (0, d.ju)("https://support.x.com/articles/20170805"),
                q = (0, d.ju)("https://support.x.com/forms/platform"),
                G = "oauth2";
            class W extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getSortedCanViewScopes = (0, M.Z)((e) => e.filter((e) => "can_view" === e.category).sort((e, a) => e.rank - a.rank))),
                        (this._getSortedCanDoScopes = (0, M.Z)((e) => e.filter((e) => "can_do" === e.category).sort((e, a) => e.rank - a.rank))),
                        (this._handleRevokeApp = (e, a) => {
                            this._revokeApplication(e, a), this._scribeAction("revoke_access");
                        }),
                        (this._handleRetry = () => {
                            this._fetchApp();
                        }),
                        (this._fetchApp = () => {
                            const { appId: e, createLocalApiErrorHandler: a, fetchApplication: t } = this.props;
                            t(e).catch(a({ showToast: !0 }));
                        }),
                        (this._render = () => {
                            const { details: e } = this.props,
                                a = e[0];
                            if (!a) return n.createElement(l.Z, { header: N, message: F });
                            const t = { app_id: a.app_id, app_name: a.name },
                                d = n.createElement(r.Z, { style: K.itemContainer }, n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, this._renderApprovalDate(a.approved)));
                            return n.createElement(
                                r.Z,
                                null,
                                n.createElement(i.Z, { description: a.organization, label: a.name, thumbnail: n.createElement(c.Z, { "aria-label": "", source: a.img_url, style: K.avatar }) }),
                                a.organization_url ? n.createElement(u.Z, { color: "primary", label: a.organization_url, link: a.organization_url }) : null,
                                n.createElement(r.Z, { style: K.itemContainer }, n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, a.description)),
                                d,
                                n.createElement(m.Z, { text: B }),
                                e.map((e) => n.createElement(r.Z, { key: e.token }, this._renderPermissions(e), e.ios ? null : n.createElement(E.Z, { onRevoke: this._handleRevokeApp, reportApplicationHref: `${q}?${(0, o.stringify)(t)}`, revoked: !!e.revoked, token: e.token, tokenType: e.token_type || "oauth1" }))),
                                a.ios ? n.createElement(h.Z, { link: V, style: [K.itemContainer, K.center] }, n.createElement(s.ZP, { color: "link" }, $)) : null,
                            );
                        });
                }
                UNSAFE_componentWillMount() {
                    this._fetchApp();
                }
                _renderPermissions(e) {
                    if (null != e.scopes && e.token_type === G) {
                        const a = Array.from(e.scopes);
                        return n.createElement(r.Z, { style: K.permissionContainer }, this._renderCanViewScopesList(a), this._renderCanDoScopes(a));
                    }
                    return n.createElement(n.Fragment, null, this._renderReadWritePermissions(e), this._renderAdsPermission(e), this._renderEmailPermission(e));
                }
                _renderCanViewScopesList(e) {
                    const a = this._getSortedCanViewScopes(e);
                    return a.length ? n.createElement(A.Z, { scopes: a, size: "subtext2", title: C }) : null;
                }
                _renderCanDoScopes(e) {
                    const a = this._getSortedCanDoScopes(e);
                    return a.length ? n.createElement(A.Z, { scopes: a, size: "subtext2", title: T }) : null;
                }
                _renderReadWritePermissions(e) {
                    let a = null;
                    return e.can_read_dms ? (a = H) : e.can_write ? (a = O) : e.can_read && (a = z), a ? n.createElement(p.Z, { label: a }) : null;
                }
                _renderEmailPermission(e) {
                    return e.email_access ? n.createElement(p.Z, { label: R }) : null;
                }
                _renderAdsPermission(e) {
                    let a = null;
                    return e.has_ads_read_write_access ? (a = j) : e.has_ads_read_access && (a = U), a ? n.createElement(p.Z, { label: a }) : null;
                }
                _renderApprovalDate(e) {
                    const a = new Date(Number(e)),
                        t = x({ date: v(a) });
                    return n.createElement("time", { dateTime: a.toISOString() }, t);
                }
                _revokeApplication(e, a) {
                    const { createLocalApiErrorHandler: t, revokeApplication: n, revokeOauth2Token: o } = this.props;
                    a === G ? o(e).catch(t({ showToast: !0 })) : n(e).catch(t({ showToast: !0 }));
                }
                _scribeAction(e) {
                    const { analytics: a } = this.props;
                    a.scribe({ component: "oauth_app", action: "click", element: e });
                }
                render() {
                    const { details: e, fetchStatus: a, location: t } = this.props,
                        o = e[0],
                        r = o ? o.name : "";
                    return n.createElement(y.Z, null, n.createElement(_.Z, { location: t, title: r }, n.createElement(g.Z, { "aria-label": L, fetchStatus: a, onRequestRetry: this._handleRetry, render: this._render })));
                }
            }
            const X = I(W),
                K = D.default.create((e) => ({ avatar: { borderRadius: e.borderRadii.small, height: "100%", width: "100%" }, center: { justifyContent: "center" }, permissionContainer: { paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal }, itemContainer: { alignItems: "center", flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, width: "100%", borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } }));
        },
        137203: (e, a, t) => {
            t.r(a), t.d(a, { default: () => u });
            var n = t(688715),
                o = t(111677),
                r = t.n(o),
                d = t(248225),
                l = t(531014);
            const s = r().d23b0404,
                i = r().e0a7e9bc,
                c = (0, n.ju)("https://help.x.com/using-twitter/blocking-and-unblocking-accounts"),
                u = (0, l.v)({ scribeNamespace: { page: "blocked", section: "all_blocked_accounts" }, blockType: d.kH.All, emptyStateTitle: i, emptyStateMessage: s, supportUrl: c });
        },
        531014: (e, a, t) => {
            t.d(a, { v: () => j });
            var n = t(807896),
                o = t(202784),
                r = t(731708),
                d = t(688715),
                l = t(457311),
                s = t(420412),
                i = t(111677),
                c = t.n(i),
                u = t(912021),
                m = t(652904),
                h = t(810641),
                p = t(293115),
                D = t(248225),
                b = t(170069),
                f = t(668214);
            const M = (0, f.Z)().propsFromActions(() => ({ cleanupBlockList: D.ZH }));
            var g = t(269011),
                A = t(335632),
                y = t(962741),
                _ = t(154003),
                E = t(712816),
                S = t(879596),
                k = t(942893),
                P = t(71620),
                w = t(601576),
                Z = t(919022);
            const I = (e, a) => Z.ZP.select(e, a.userId),
                v = (0, f.Z)()
                    .propsFromState(() => ({ user: I }))
                    .propsFromActions(() => ({ addToast: w.fz, block: Z.ZP.block, createLocalApiErrorHandler: (0, P.zr)("UNBLOCK_BUTTON"), unblock: Z.ZP.unblock }))
                    .withAnalytics(),
                C = c().if594962,
                T = c().a6450e84,
                x = c().i2b9632e,
                L = c().a9fd20be;
            class N extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleUnblockToggle = () => {
                            const { addToast: e, block: a, createLocalApiErrorHandler: t, unblock: n, user: o, userId: r } = this.props;
                            o?.blocking
                                ? n(r).then((a) => {
                                      e({ text: x }), this._scribeAction("unblock");
                                  }, t(S.D))
                                : a(r).then((a) => {
                                      e({ text: L }), this._scribeAction("block");
                                  }, t(E.d));
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (e) {
                        const a = e.blocking ? C : T;
                        return o.createElement(_.ZP, { "aria-label": a, onPress: this._handleUnblockToggle, size: "medium", type: e.blocking ? "destructiveFilled" : "destructiveOutlined" }, a);
                    }
                    return null;
                }
                _scribeAction(e) {
                    const { analytics: a, user: t } = this.props,
                        n = t ? [k.Z.getUserItem(t)] : [];
                    a.scribe({ action: e, data: { items: n } });
                }
            }
            const F = v(N),
                R = { ...(0, A.G)({}), [y.ZP.User]: (0, g.Z)({ decoration: ({ userId: e }) => o.createElement(F, { userId: e }) }) },
                B = c().a5f32aa2,
                z = c().ef731b14,
                O = c().i859a9d4,
                H = o.createElement(c().I18NFormatMessage, { $i18n: "ab3bf5a7" }, o.createElement(r.ZP, { link: (0, d.ju)("https://support.x.com/articles/117063") }, c().e554ba83));
            class U extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getLegacyModule = () => {
                            const { blockType: e } = this.props;
                            return this._getMemoizedModule(e);
                        }),
                        (this._getMemoizedModule = (0, u.Z)((e) => (0, D.Gm)(e))),
                        (this._getEmptyStateRenderer = () => {
                            const { emptyStateMessage: e, emptyStateTitle: a, supportUrl: t } = this.props;
                            return this._getMemoizedEmptyStateRenderer(t, a, e);
                        }),
                        (this._getMemoizedEmptyStateRenderer = (0, u.Z)((e, a, t) => () => {
                            const n = o.createElement("div", null, t, " ", e && o.createElement(r.ZP, { link: e }, O));
                            return o.createElement(l.Z, { header: a, message: n });
                        }));
                }
                componentWillUnmount() {
                    const { cleanupBlockList: e } = this.props;
                    e(this._getLegacyModule());
                }
                render() {
                    return o.createElement(m.Z, null, o.createElement("div", null, o.createElement(b.Z, null, H), o.createElement(s.Z, null)), o.createElement(h.Z, { entryConfiguration: R, loadingAccessibilityLabel: z, module: this._getLegacyModule(), renderEmptyState: this._getEmptyStateRenderer(), title: B }));
                }
            }
            const j = ({ blockType: e, emptyStateMessage: a, emptyStateTitle: t, scribeNamespace: r, supportUrl: d }) => M((l) => o.createElement(p.nO, { namespace: r }, o.createElement(U, (0, n.Z)({}, l, { blockType: e, emptyStateMessage: a, emptyStateTitle: t, supportUrl: d }))));
        },
        831927: (e, a, t) => {
            t.r(a), t.d(a, { default: () => u });
            var n = t(688715),
                o = t(111677),
                r = t.n(o),
                d = t(248225),
                l = t(531014);
            const s = r().g51a96de,
                i = r().e0a7e9bc,
                c = (0, n.ju)("https://help.x.com/articles/20172663"),
                u = (0, l.v)({ scribeNamespace: { page: "blocked", section: "imported_blocked_accounts" }, blockType: d.kH.Imported, emptyStateTitle: i, emptyStateMessage: s, supportUrl: c });
        },
        689044: (e, a, t) => {
            t.r(a), t.d(a, { BlockedAccountsScreen: () => y, default: () => _ });
            var n = t(202784),
                o = t(107267),
                r = t(111677),
                d = t.n(r),
                l = t(507651),
                s = t(443781),
                i = t(652904),
                c = t(293115),
                u = t(717988),
                m = t(264922);
            const h = d().a5f32aa2,
                p = d().f8321d82,
                D = d().eb233866,
                b = "/settings/blocked/all",
                f = "/settings/blocked/imported",
                M = { page: "settings", section: "blocked_accounts" },
                g = (0, u.p)(
                    () =>
                        Promise.all([
                            t.e("icons.0"),
                            t.e("icons.5"),
                            t.e("icons.12"),
                            t.e("icons.20"),
                            t.e("icons.2"),
                            t.e("icons.21"),
                            t.e("icons.28"),
                            t.e("icons.10"),
                            t.e("icons.17"),
                            t.e("icons.9"),
                            t.e("icons.23"),
                            t.e("modules.common-e907d115"),
                            t.e("modules.common-e019dbda"),
                            t.e("icons.22"),
                            t.e("icons.24"),
                            t.e("icons.14"),
                            t.e("icons.13"),
                            t.e("modules.audio-6107ac1a"),
                            t.e("modules.audio-b953418a"),
                            t.e("modules.audio-7c51e6a7"),
                            t.e("modules.audio-04db59e9"),
                            t.e("modules.audio-76583d6c"),
                            t.e("modules.audio-b7a8a5fb"),
                            t.e("modules.audio-51f6e793"),
                            t.e("modules.audio-e019dbda"),
                            t.e("modules.audio-262c94d4"),
                            t.e("modules.audio-c6fe4ea4"),
                            t.e("icons.6"),
                            t.e("icons.3"),
                            t.e("icons.8"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            t.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            t.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                            t.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            t.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                            t.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                            t.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                            t.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                            t.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
                            t.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                            t.e("shared~loader.DashMenu~loader.DashModal~ondemand.CommandCenter~bundle.Account~ondemand.SettingsInternals~onde"),
                            t.e("shared~ondemand.SensitiveMediaSettings~ondemand.SettingsRevamp~ondemand.SettingsInternals~bundle.SettingsTran"),
                            t.e("shared~ondemand.SettingsInternals~bundle.Ocf"),
                            t.e("ondemand.SettingsInternals-6107ac1a"),
                            t.e("ondemand.SettingsInternals-e6266db0"),
                            t.e("ondemand.SettingsInternals-948b2c60"),
                            t.e("ondemand.SettingsInternals-4e00201e"),
                            t.e("ondemand.SettingsInternals-71f5c63d"),
                            t.e("ondemand.SettingsInternals-cff17ecc"),
                            t.e("ondemand.SettingsInternals-394f886d"),
                        ]).then(t.bind(t, 137203)),
                    { shouldMigrateToX: !1 },
                ),
                A = (0, u.p)(
                    () =>
                        Promise.all([
                            t.e("icons.0"),
                            t.e("icons.5"),
                            t.e("icons.12"),
                            t.e("icons.20"),
                            t.e("icons.2"),
                            t.e("icons.21"),
                            t.e("icons.28"),
                            t.e("icons.10"),
                            t.e("icons.17"),
                            t.e("icons.9"),
                            t.e("icons.23"),
                            t.e("modules.common-e907d115"),
                            t.e("modules.common-e019dbda"),
                            t.e("icons.22"),
                            t.e("icons.24"),
                            t.e("icons.14"),
                            t.e("icons.13"),
                            t.e("modules.audio-6107ac1a"),
                            t.e("modules.audio-b953418a"),
                            t.e("modules.audio-7c51e6a7"),
                            t.e("modules.audio-04db59e9"),
                            t.e("modules.audio-76583d6c"),
                            t.e("modules.audio-b7a8a5fb"),
                            t.e("modules.audio-51f6e793"),
                            t.e("modules.audio-e019dbda"),
                            t.e("modules.audio-262c94d4"),
                            t.e("modules.audio-c6fe4ea4"),
                            t.e("icons.6"),
                            t.e("icons.3"),
                            t.e("icons.8"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            t.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            t.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                            t.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            t.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                            t.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                            t.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                            t.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                            t.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
                            t.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                            t.e("shared~loader.DashMenu~loader.DashModal~ondemand.CommandCenter~bundle.Account~ondemand.SettingsInternals~onde"),
                            t.e("shared~ondemand.SensitiveMediaSettings~ondemand.SettingsRevamp~ondemand.SettingsInternals~bundle.SettingsTran"),
                            t.e("shared~ondemand.SettingsInternals~bundle.Ocf"),
                            t.e("ondemand.SettingsInternals-6107ac1a"),
                            t.e("ondemand.SettingsInternals-e6266db0"),
                            t.e("ondemand.SettingsInternals-948b2c60"),
                            t.e("ondemand.SettingsInternals-4e00201e"),
                            t.e("ondemand.SettingsInternals-71f5c63d"),
                            t.e("ondemand.SettingsInternals-cff17ecc"),
                            t.e("ondemand.SettingsInternals-394f886d"),
                        ]).then(t.bind(t, 831927)),
                    { shouldMigrateToX: !1 },
                );
            class y extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderTabs = () => {
                            const e = [
                                { to: b, key: p, label: p, retainScrollPosition: !1 },
                                { to: f, key: D, label: D, retainScrollPosition: !1 },
                            ];
                            return n.createElement(l.Z, { "aria-label": h, links: e });
                        });
                }
                render() {
                    return n.createElement(c.nO, { namespace: M }, n.createElement(i.Z, null, n.createElement(m.Z, { location: this.props.location, secondaryBar: this._renderTabs(), title: h, withBottomBorder: !0, withMarginBottom: !1 }, n.createElement(o.Switch, null, n.createElement(o.Route, { component: g, exact: !0, path: b }), n.createElement(o.Route, { component: A, exact: !0, path: f })))));
                }
            }
            y.contextType = s.rC;
            const _ = y;
        },
        720217: (e, a, t) => {
            t.r(a), t.d(a, { ConnectedAccounts: () => x, default: () => L });
            t(136728);
            var n = t(202784),
                o = t(99107),
                r = t(325686),
                d = t(943401),
                l = t(731708),
                s = t(779610),
                i = t(242454),
                c = t(420412),
                u = t(392237),
                m = t(879113),
                h = t(111677),
                p = t.n(h),
                D = t(833458),
                b = t(956056),
                f = t(261214),
                M = t(652904),
                g = t(264922),
                A = t(71620),
                y = t(668214),
                _ = t(257166),
                E = t(38562),
                S = t(673110),
                k = t(601576);
            const P = (0, y.Z)()
                    .propsFromState(() => ({ userEmail: _.selectFirstEmail, fetchStatus: E.UD, ssoConnections: E.An }))
                    .propsFromActions(() => ({ addToast: k.fz, createLocalApiErrorHandler: (0, A.zr)("SETTINGS_CONNECTED_APPS_SCREEN_CONTEXT"), deleteSSOConnection: E.O5, fetchDevicesIfNeeded: _.fetchDevicesIfNeeded, fetchSettingsIfNeeded: E.Sb, fetchSettings: E.wv, verifyPassword: S.Gv }))
                    .withAnalytics({ page: "settings", section: "connected_accounts", component: "delete_sso_connection" }),
                w = p().h1abfbce,
                Z = p().f8e46b90,
                I = p().d84ed6b2,
                v = p().i51130d4,
                C = p().e28901f2,
                T = p().cf8560be;
            class x extends n.Component {
                constructor(e, a) {
                    super(e, a),
                        (this._render = () => {
                            const { location: e } = this.props;
                            return n.createElement(M.Z, null, n.createElement(g.Z, { location: e, screenType: "secondaryDetail", title: w }, n.createElement(n.Fragment, null, n.createElement(d.Z, { description: Z }), this._renderSSOProviderPivots())));
                        }),
                        (this._renderSSOProviderPivots = () => {
                            const { ssoConnections: e, userEmail: a } = this.props,
                                t = n.createElement(l.ZP, { color: "green500", size: "subtext2" }, n.createElement(D.default, null), " ", T);
                            if (e && e.r.ok.length) {
                                const {
                                    r: { ok: o },
                                } = e;
                                return o.map(({ ssoProvider: e }, d) => {
                                    const l = o.length - 1,
                                        { ssoProviderLabel: u, ssoProviderThumbnail: m } = this._getSSOProviderProps(e) || {};
                                    return n.createElement(r.Z, { key: d }, n.createElement(s.Z, { description: t, label: u, renderRightContent: a ? this._renderUserEmail(a) : void 0, thumbnail: m, thumbnailSize: "large" }), n.createElement(i.Z, { color: "red500", label: I, onPress: this._handleOnPress({ ssoProvider: e }) }), d < l ? n.createElement(c.Z, null) : null);
                                });
                            }
                        }),
                        (this._renderUserEmail = (e) => () => n.createElement(l.ZP, null, e)),
                        (this._getSSOProviderProps = (e) => {
                            const a = e.toLowerCase(),
                                t = u.default.isDarkMode() ? u.default.theme.colors.white : void 0;
                            switch (a) {
                                case o.Bm.Google:
                                    return { ssoProviderThumbnail: n.createElement(b.default, null), ssoProviderLabel: v };
                                case o.Bm.Apple:
                                    return { ssoProviderThumbnail: n.createElement(f.default, { style: { color: t } }), ssoProviderLabel: C };
                                default:
                                    return;
                            }
                        }),
                        (this._combinedFetches = () => {
                            const { fetchDevicesIfNeeded: e, fetchSettingsIfNeeded: a } = this.props,
                                t = [e(), a()];
                            return Promise.all(t);
                        }),
                        (this._handleOnPress =
                            ({ ssoProvider: e }) =>
                            () => {
                                const { history: a } = this.props,
                                    t = e.toLowerCase();
                                a.push({ pathname: "/i/flow/sso_disconnect", state: { input: { requested_variant: JSON.stringify({ id_token: "test_id_token", provider: t, state: "test_state" }) } } });
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
                    const { createLocalApiErrorHandler: a, fetchSettings: t } = this.props;
                    return this._previousPath !== location.pathname && this._initialPath === location.pathname && t().catch(a()), (this._previousPath = location.pathname), e !== this.props;
                }
                render() {
                    const { fetchStatus: e } = this.props;
                    return n.createElement(m.Z, { fetchStatus: e, onRequestRetry: this._handleFetchRetry, render: this._render });
                }
            }
            const L = P(x);
        },
        208791: (e, a, t) => {
            t.r(a), t.d(a, { SettingsContactsScreen: () => T, default: () => x });
            var n = t(202784),
                o = t(688715),
                r = t(943401),
                d = t(844685),
                l = t(954110),
                s = t(420412),
                i = t(779610),
                c = t(111677),
                u = t.n(c),
                m = t(652904),
                h = t(264922),
                p = t(71620),
                D = t(668214),
                b = t(38562);
            const f = (0, D.Z)()
                    .propsFromState(() => ({ settings: b.l4 }))
                    .adjustStateProps(({ settings: e }) => ({ discoverableByEmail: e.discoverable_by_email, discoverableByMobilePhone: e.discoverable_by_mobile_phone }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, p.zr)("SETTINGS_CONTACTS_SCREEN"), updateSettings: b.VP }))
                    .withAnalytics({ page: "settings", section: "contacts" }),
                M = u().fd4d9068,
                g = u().ab987f3c,
                A = u().b033248c,
                y = u().c69b4798,
                _ = u().eca117e6,
                E = u().acd36386,
                S = u().gd8511ca,
                k = u().eca935ec,
                P = (0, o.ju)("https://help.x.com/safety-and-security/email-and-phone-discoverability-settings"),
                w = u().ac77c66c,
                Z = u().bbcafbda,
                I = u().jadf483e,
                v = (0, o.ju)("https://help.x.com/using-twitter/upload-your-contacts-to-search-for-friends"),
                C = u().i859a9d4;
            function T(e) {
                const { createLocalApiErrorHandler: a, discoverableByEmail: t, discoverableByMobilePhone: o, location: c, updateSettings: u } = e,
                    p = n.useCallback(
                        (e, t) => {
                            u({ [e]: t }).catch(a({ showToast: !0 }));
                        },
                        [a, u],
                    );
                return n.createElement(m.Z, null, n.createElement(h.Z, { location: c, title: M }, n.createElement(r.Z, { description: g }), n.createElement(d.Z, { text: A }), n.createElement(r.Z, { description: y }), n.createElement(l.Z, { checked: t, helpText: E, label: _, learnMoreLink: P, name: "discoverable_by_email", onChange: p }), n.createElement(l.Z, { checked: o, helpText: k, label: S, learnMoreLink: P, name: "discoverable_by_mobile_phone", onChange: p }), n.createElement(s.Z, null), n.createElement(d.Z, { text: w }), n.createElement(r.Z, { description: I, learnMoreLabel: C, learnMoreLink: v }), n.createElement(i.Z, { label: Z, link: "/settings/contacts_dashboard" })));
            }
            const x = f(T);
        },
        221930: (e, a, t) => {
            t.r(a), t.d(a, { SettingsContactsDashboardScreen: () => B, default: () => O });
            var n = t(202784),
                o = t(325686),
                r = t(731708),
                d = t(688715),
                l = t(909377),
                s = t(420412),
                i = t(392237),
                c = t(111677),
                u = t.n(c),
                m = t(25001),
                h = t(143778),
                p = t(817480),
                D = t(947135),
                b = t(290402),
                f = t(965245),
                M = t(443781),
                g = t(652904),
                A = t(293115),
                y = t(312771),
                _ = t(170069),
                E = t(609848),
                S = t(264922),
                k = t(267966),
                P = t(71620),
                w = t(668214),
                Z = t(38562),
                I = t(116635);
            const v = (0, w.Z)()
                    .propsFromState(() => ({ contacts: I.Af, fetchStatus: I.UD }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, P.zr)("SETTINGS_CONTACTS_DASHBOARD_SCREEN"), deleteContacts: Z._f, fetchContactsIfNeeded: I.d0, fetchContactsNext: I.iv })),
                C = { page: "settings", section: "contacts_dashboard" },
                T = u().bbcafbda,
                x = n.createElement(u().I18NFormatMessage, { $i18n: "g66a254b" }, n.createElement(r.ZP, { link: (0, d.ju)("https://help.x.com/using-twitter/upload-your-contacts-to-search-for-friends") }, u().d439b1c1)),
                L = u().b864be7a,
                N = { headline: u().g5fa1090, text: u().h3e420fc, confirmButtonLabel: u().e68b09b4 },
                F = u().ca24589e,
                R = (e) => e.id_str;
            class B extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { verificationRequired: !1 }),
                        (this._renderTimeline = () => {
                            const { contacts: e, fetchStatus: a } = this.props;
                            return n.createElement(f.Z, { assumedItemHeight: 70, cacheKey: "CONTACTS_DASHBOARD", footer: this._renderFooter(a), identityFunction: R, items: e, onNearEnd: this._handleFetchMoreContacts, renderer: this._renderContact });
                        }),
                        (this._renderContact = (e) => {
                            const { id_str: a, import_source: t, vcard: d } = e,
                                s = this._getContactProp(d.get("fn")) || F,
                                i = this._getContactProperties(d.get("tel")),
                                c = [...this._getContactProperties(d.get("email")), ...i];
                            return n.createElement(o.Z, { key: a, style: [[k.Z.infoText, k.Z.bottomBorder], z.contactContainer] }, n.createElement(l.Z, { Icon: m.default, color: "neutral", style: z.personIcon }), n.createElement(o.Z, null, n.createElement(r.ZP, null, s), c ? c.map((e) => n.createElement(r.ZP, { color: "gray700", key: e, size: "subtext2" }, e)) : null, t ? n.createElement(r.ZP, { color: "gray700", size: "subtext2" }, `Imported from ${t}`) : null));
                        }),
                        (this._renderFooter = (e) => (e === y.ZP.LOADING ? n.createElement(o.Z, { style: z.loadingContainer }, n.createElement(b.Z, { fetchStatus: e, render: h.Z })) : null)),
                        (this._handleRemoveContacts = () => {
                            const { createLocalApiErrorHandler: e, deleteContacts: a } = this.props;
                            a().catch(e({ showToast: !0 }));
                        }),
                        (this._handleFetchMoreContacts = () => {
                            const { createLocalApiErrorHandler: e, fetchContactsNext: a } = this.props;
                            a().catch(e());
                        }),
                        (this._getContactProp = (e) => (this._getContactProperties(e)[0] || "").trim()),
                        (this._getContactProperties = (e) => (e ? (Array.isArray(e) ? (0, p.Z)(e.map((e) => this._getContactProperties(e))) : [e.valueOf()]) : []));
                }
                render() {
                    const { contacts: e, fetchContactsIfNeeded: a, fetchStatus: t, location: o } = this.props;
                    return n.createElement(A.nO, { namespace: C }, n.createElement(g.Z, null, n.createElement(S.Z, { location: o, title: T }, n.createElement(D.Z, { confirmationSheetConfirmButtonLabel: N.confirmButtonLabel, confirmationSheetConfirmButtonType: "destructiveFilled", confirmationSheetHeadline: N.headline, confirmationSheetText: N.text, label: L, onConfirmationSheetConfirm: this._handleRemoveContacts }), n.createElement(_.Z, null, x), n.createElement(s.Z, null), n.createElement(E.Z, { fetch: a, fetchStatus: e.length > 0 ? y.ZP.LOADED : t, render: () => this._renderTimeline() }))));
                }
            }
            B.contextType = M.rC;
            const z = i.default.create((e) => ({ contactContainer: { flexDirection: "row", flexWrap: "wrap" }, personIcon: { marginEnd: e.spaces.space12 }, loadingContainer: { paddingVertical: e.spaces.space16, justifyContent: "center" } })),
                O = v(B);
        },
        412483: (e, a, t) => {
            t.r(a), t.d(a, { ContentPreferencesPage: () => I, default: () => v });
            var n = t(202784),
                o = t(844685),
                r = t(779610),
                d = t(420412),
                l = t(943401),
                s = t(111677),
                i = t.n(s),
                c = t(443781),
                u = t(652904),
                m = t(264922),
                h = t(754393),
                p = t(668214),
                D = t(205253);
            const b = (0, p.Z)()
                    .propsFromState(() => ({ personalizationSettings: D.kQ }))
                    .withAnalytics({ page: "settings", section: "timeline" }),
                f = "exploreHeader",
                M = i().aeddb28a,
                g = i().fcf3e54c,
                A = i().hfb77cf6,
                y = i().d495680e,
                _ = i().f350f0c0,
                E = i().fd3369a2,
                S = i().h1ef00dc,
                k = i().e8f57e08,
                P = i().e8f57e08,
                w = i().hfc86556,
                Z = i().a5f32aa2;
            class I extends n.Component {
                constructor(...e) {
                    super(...e), (this._trendsLabel = this.context.featureSwitches.isTrue("responsive_web_trends_setting_new_endpoints") ? i().j018f2a2 : i().c5f4befa);
                }
                _renderPersonalizationDescription() {
                    const { personalizationSettings: e } = this.props;
                    return (0, h.s)(e);
                }
                render() {
                    const { location: e } = this.props,
                        a = this.context.featureSwitches.isTrue("responsive_web_trends_setting_new_endpoints") ? "/settings/explore" : "/settings/trends";
                    return n.createElement(u.Z, null, n.createElement(m.Z, { location: e, screenType: "primaryDetail", title: M }, n.createElement(o.Z, { testID: f, text: g }), n.createElement(r.Z, { label: S, link: "/settings/search" }), n.createElement(r.Z, { label: this._trendsLabel, link: a }), n.createElement(d.Z, null), n.createElement(o.Z, { text: y }), n.createElement(r.Z, { label: _, link: "/i/flow/language_selector" }), n.createElement(l.Z, { description: E }), n.createElement(d.Z, null), n.createElement(o.Z, { text: A }), n.createElement(r.Z, { label: w, link: "/settings/mute" }), n.createElement(r.Z, { label: Z, link: "/settings/blocked/all" }), n.createElement(d.Z, null), n.createElement(o.Z, { text: k }), n.createElement(r.Z, { description: this._renderPersonalizationDescription(), label: P, link: "/settings/account/personalization" })));
                }
            }
            I.contextType = c.rC;
            const v = b(I);
        },
        536909: (e, a, t) => {
            t.r(a), t.d(a, { default: () => b });
            var n = t(202784),
                o = t(325686),
                r = t(844685),
                d = t(731708),
                l = t(111677),
                s = t.n(l),
                i = t(652904),
                c = t(293115),
                u = t(264922),
                m = t(267966);
            const h = s().g0ec0bec,
                p = s().g89f4614,
                D = { page: "settings", section: "deactivate_success" },
                b = ({ location: e }) => n.createElement(c.nO, { namespace: D }, n.createElement(i.Z, null, n.createElement(u.Z, { location: e, screenType: "primaryDetail", title: h }, n.createElement(r.Z, { text: p }), n.createElement(o.Z, { style: m.Z.viewItem }, n.createElement(d.ZP, { color: "gray700", size: "subtext2" }, n.createElement(s().I18NFormatMessage, { $i18n: "if2bb997" }))))));
        },
        658679: (e, a, t) => {
            t.r(a), t.d(a, { DeactivateScreen: () => L, default: () => N });
            var n = t(202784),
                o = t(614983),
                r = t.n(o),
                d = t(325686),
                l = t(688715),
                s = t(731708),
                i = t(844685),
                c = t(420412),
                u = t(242454),
                m = t(111677),
                h = t.n(m),
                p = t(443781),
                D = t(652904),
                b = t(240089),
                f = t(472039),
                M = t(267966),
                g = t(71620),
                A = t(668214),
                y = t(558477);
            const _ = (0, A.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("DEACTIVATE"), deactivate: y.Z }))
                    .withAnalytics({ page: "settings", section: "deactivate" }),
                E = h().j035733c,
                S = h().j4a29d52,
                k = h().ea989810,
                P = h().f6e73faa,
                w = h().c3743328,
                Z = h().a20cd24e,
                I = h().fe36fe10,
                v = h().e93b0ae0,
                C = "/settings/your_twitter_data/account",
                T = (0, l.ju)("https://help.x.com/safety-and-security/remove-twitter-profile-from-google-search"),
                x = ({ children: e, withBottomBorder: a = !0 }) => n.createElement(d.Z, { style: [M.Z.viewItem, a && M.Z.bottomBorder] }, n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, e));
            class L extends n.Component {
                constructor(e, a) {
                    super(e, a),
                        (this._handleDeactivateRequest = () => {
                            window.scrollTo(0, 0), this.setState({ showPasswordDialog: !0 });
                        }),
                        (this._handlePasswordSubmit = (e) => {
                            const { createLocalApiErrorHandler: a, deactivate: t } = this.props;
                            t(e, "30_days").catch((e) => (this.setState({ showPasswordDialog: !1 }), a({ showToast: !0 })(e)));
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
                        { showPasswordDialog: t } = this.state;
                    return r()(!!a, "viewerUserId must be defined"), n.createElement(D.Z, null, n.createElement(f.Z, { location: e, onPasswordSubmit: this._handlePasswordSubmit, promptForPassword: t, reenterPasswordLabel: v, saveChangesHeaderLabel: I, submitLabel: P, submitType: "destructiveFilled", title: k }, n.createElement(d.Z, null, n.createElement(b.ZP, { key: a, userId: a, withLink: !1 }), n.createElement(i.Z, { text: w }), n.createElement(x, { withBottomBorder: !1 }, E), n.createElement(i.Z, { text: Z }), n.createElement(x, null, S), n.createElement(x, null, n.createElement(h().I18NFormatMessage, { $i18n: "g124fce9" }, n.createElement(s.ZP, { link: T }, h().fc025d1d))), n.createElement(x, null, n.createElement(h().I18NFormatMessage, { $i18n: "d9ef8fbb" }, n.createElement(s.ZP, { link: C }, h().bb5e039c))), n.createElement(x, null, n.createElement(h().I18NFormatMessage, { $i18n: "b7a3adc1" }, n.createElement(s.ZP, { link: C }, h().j37efff6))), n.createElement(x, { withBottomBorder: !1 }, n.createElement(h().I18NFormatMessage, { $i18n: "f3613d0b" }, n.createElement(s.ZP, { link: "/settings/download_your_data" }, h().ce5bfe12))), n.createElement(c.Z, null), n.createElement(u.Z, { color: "red500", label: P, onPress: this._handleDeactivateRequest }))));
                }
            }
            L.contextType = p.rC;
            const N = _(L);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-4e00201e.b882bf1a.js.map
