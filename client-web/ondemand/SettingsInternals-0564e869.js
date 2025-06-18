"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-0564e869"],
    {
        466441: (e, a, t) => {
            t.r(a), t.d(a, { NotFoundScreen: () => g, default: () => _ });
            t(571372);
            var o = t(202784),
                r = t(386802),
                n = t(108362),
                d = t(392237),
                l = t(111677),
                s = t.n(l),
                i = t(187669),
                c = t(449067),
                u = t(38293),
                m = t(56851),
                h = t(652904),
                p = t(952793),
                D = t(163889),
                b = t(725516);
            const f = s().ba929da8,
                M = s().d203e242;
            function g(e) {
                const { splat: a } = e.match.params,
                    { isModal: t } = o.useContext(r.Z),
                    d = (0, p.hC)("responsive_web_report_page_not_found");
                return (
                    (0, i.q)(() => {
                        d && a && (0, D.ZP)(new Error(`Page not found: ${a}`));
                    }),
                    o.createElement(h.Z, null, o.createElement(c.Z.Configure, { backLocation: "/", documentTitle: f, title: M }), o.createElement(n.Z, { style: t && k.modal }, o.createElement(m.Z, null)), o.createElement(u.Z, { title: f, withMeta: !1 }))
                );
            }
            const k = d.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                _ = (0, b.Z)(g, { page: "not_found" });
        },
        202886: (e, a, t) => {
            t.r(a), t.d(a, { ApplicationDetailPage: () => W, default: () => X });
            var o = t(202784),
                r = t(856642),
                n = t(325686),
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
                k = t(811105),
                _ = t(652904),
                E = t(264922),
                A = t(396634),
                y = t(71620),
                S = t(668214),
                w = t(948985);
            const Z = (e, a) => a.match.params.appId,
                P = (e, a) => w.$q.selectAppsById(e, Z(0, a)),
                v = (0, S.Z)()
                    .propsFromState(() => ({ appId: Z, fetchStatus: w.UD, details: P }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("APPLICATION_DETAIL"), fetchApplication: w.zw, revokeApplication: w.$q.revokeApplication, revokeOauth2Token: w.$q.revokeOauth2Token }))
                    .withAnalytics({ page: "settings", section: "application_detail" }),
                I = f().g8d1b99b,
                C = f().eafcc76a,
                T = f().j3998a16,
                x = f().a6845663,
                L = f().b2347f7c,
                N = f().e1fda16e,
                F = f().b8f3ed46,
                z = f().gb8d09ba,
                B = f().g6dc09a0,
                R = f().a6e6e898,
                H = f().cde3b9ae,
                O = f().g0d7813a,
                U = f().c9b35b9e,
                j = f().e0191264,
                G = f().b73e1e8a,
                $ = (0, d.ju)("https://support.x.com/articles/20170805"),
                V = (0, d.ju)("https://support.x.com/forms/platform"),
                q = "oauth2";
            class W extends o.Component {
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
                            if (!a) return o.createElement(l.Z, { header: N, message: F });
                            const t = { app_id: a.app_id, app_name: a.name },
                                d = o.createElement(n.Z, { style: K.itemContainer }, o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, this._renderApprovalDate(a.approved)));
                            return o.createElement(
                                n.Z,
                                null,
                                o.createElement(i.Z, { description: a.organization, label: a.name, thumbnail: o.createElement(c.Z, { "aria-label": "", source: a.img_url, style: K.avatar }) }),
                                a.organization_url ? o.createElement(u.Z, { color: "primary", label: a.organization_url, link: a.organization_url }) : null,
                                o.createElement(n.Z, { style: K.itemContainer }, o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, a.description)),
                                d,
                                o.createElement(m.Z, { text: B }),
                                e.map((e) => o.createElement(n.Z, { key: e.token }, this._renderPermissions(e), e.ios ? null : o.createElement(A.Z, { onRevoke: this._handleRevokeApp, reportApplicationHref: `${V}?${(0, r.stringify)(t)}`, revoked: !!e.revoked, token: e.token, tokenType: e.token_type || "oauth1" }))),
                                a.ios ? o.createElement(h.Z, { link: $, style: [K.itemContainer, K.center] }, o.createElement(s.ZP, { color: "link" }, G)) : null,
                            );
                        });
                }
                UNSAFE_componentWillMount() {
                    this._fetchApp();
                }
                _renderPermissions(e) {
                    if (null != e.scopes && e.token_type === q) {
                        const a = Array.from(e.scopes);
                        return o.createElement(n.Z, { style: K.permissionContainer }, this._renderCanViewScopesList(a), this._renderCanDoScopes(a));
                    }
                    return o.createElement(o.Fragment, null, this._renderReadWritePermissions(e), this._renderAdsPermission(e), this._renderEmailPermission(e));
                }
                _renderCanViewScopesList(e) {
                    const a = this._getSortedCanViewScopes(e);
                    return a.length ? o.createElement(k.Z, { scopes: a, size: "subtext2", title: C }) : null;
                }
                _renderCanDoScopes(e) {
                    const a = this._getSortedCanDoScopes(e);
                    return a.length ? o.createElement(k.Z, { scopes: a, size: "subtext2", title: T }) : null;
                }
                _renderReadWritePermissions(e) {
                    let a = null;
                    return e.can_read_dms ? (a = O) : e.can_write ? (a = H) : e.can_read && (a = R), a ? o.createElement(p.Z, { label: a }) : null;
                }
                _renderEmailPermission(e) {
                    return e.email_access ? o.createElement(p.Z, { label: z }) : null;
                }
                _renderAdsPermission(e) {
                    let a = null;
                    return e.has_ads_read_write_access ? (a = j) : e.has_ads_read_access && (a = U), a ? o.createElement(p.Z, { label: a }) : null;
                }
                _renderApprovalDate(e) {
                    const a = new Date(Number(e)),
                        t = x({ date: I(a) });
                    return o.createElement("time", { dateTime: a.toISOString() }, t);
                }
                _revokeApplication(e, a) {
                    const { createLocalApiErrorHandler: t, revokeApplication: o, revokeOauth2Token: r } = this.props;
                    a === q ? r(e).catch(t({ showToast: !0 })) : o(e).catch(t({ showToast: !0 }));
                }
                _scribeAction(e) {
                    const { analytics: a } = this.props;
                    a.scribe({ component: "oauth_app", action: "click", element: e });
                }
                render() {
                    const { details: e, fetchStatus: a, location: t } = this.props,
                        r = e[0],
                        n = r ? r.name : "";
                    return o.createElement(_.Z, null, o.createElement(E.Z, { location: t, title: n }, o.createElement(g.Z, { "aria-label": L, fetchStatus: a, onRequestRetry: this._handleRetry, render: this._render })));
                }
            }
            const X = v(W),
                K = D.default.create((e) => ({ avatar: { borderRadius: e.borderRadii.small, height: "100%", width: "100%" }, center: { justifyContent: "center" }, permissionContainer: { paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal }, itemContainer: { alignItems: "center", flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, width: "100%", borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } }));
        },
        137203: (e, a, t) => {
            t.r(a), t.d(a, { default: () => u });
            var o = t(688715),
                r = t(111677),
                n = t.n(r),
                d = t(248225),
                l = t(531014);
            const s = n().d23b0404,
                i = n().e0a7e9bc,
                c = (0, o.ju)("https://help.x.com/using-twitter/blocking-and-unblocking-accounts"),
                u = (0, l.v)({ scribeNamespace: { page: "blocked", section: "all_blocked_accounts" }, blockType: d.kH.All, emptyStateTitle: i, emptyStateMessage: s, supportUrl: c });
        },
        531014: (e, a, t) => {
            t.d(a, { v: () => j });
            var o = t(807896),
                r = t(202784),
                n = t(731708),
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
                k = t(335632),
                _ = t(962741),
                E = t(154003),
                A = t(712816),
                y = t(879596),
                S = t(942893),
                w = t(71620),
                Z = t(601576),
                P = t(919022);
            const v = (e, a) => P.ZP.select(e, a.userId),
                I = (0, f.Z)()
                    .propsFromState(() => ({ user: v }))
                    .propsFromActions(() => ({ addToast: Z.fz, block: P.ZP.block, createLocalApiErrorHandler: (0, w.zr)("UNBLOCK_BUTTON"), unblock: P.ZP.unblock }))
                    .withAnalytics(),
                C = c().if594962,
                T = c().a6450e84,
                x = c().i2b9632e,
                L = c().a9fd20be;
            class N extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleUnblockToggle = () => {
                            const { addToast: e, block: a, createLocalApiErrorHandler: t, unblock: o, user: r, userId: n } = this.props;
                            r?.blocking
                                ? o(n).then((a) => {
                                      e({ text: x }), this._scribeAction("unblock");
                                  }, t(y.D))
                                : a(n).then((a) => {
                                      e({ text: L }), this._scribeAction("block");
                                  }, t(A.d));
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (e) {
                        const a = e.blocking ? C : T;
                        return r.createElement(E.ZP, { "aria-label": a, onPress: this._handleUnblockToggle, size: "medium", type: e.blocking ? "destructiveFilled" : "destructiveOutlined" }, a);
                    }
                    return null;
                }
                _scribeAction(e) {
                    const { analytics: a, user: t } = this.props,
                        o = t ? [S.Z.getUserItem(t)] : [];
                    a.scribe({ action: e, data: { items: o } });
                }
            }
            const F = I(N),
                z = { ...(0, k.G)({}), [_.ZP.User]: (0, g.Z)({ decoration: ({ userId: e }) => r.createElement(F, { userId: e }) }) },
                B = c().a5f32aa2,
                R = c().ef731b14,
                H = c().i859a9d4,
                O = r.createElement(c().I18NFormatMessage, { $i18n: "ab3bf5a7" }, r.createElement(n.ZP, { link: (0, d.ju)("https://support.x.com/articles/117063") }, c().e554ba83));
            class U extends r.Component {
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
                            const o = r.createElement("div", null, t, " ", e && r.createElement(n.ZP, { link: e }, H));
                            return r.createElement(l.Z, { header: a, message: o });
                        }));
                }
                componentWillUnmount() {
                    const { cleanupBlockList: e } = this.props;
                    e(this._getLegacyModule());
                }
                render() {
                    return r.createElement(m.Z, null, r.createElement("div", null, r.createElement(b.Z, null, O), r.createElement(s.Z, null)), r.createElement(h.Z, { entryConfiguration: z, loadingAccessibilityLabel: R, module: this._getLegacyModule(), renderEmptyState: this._getEmptyStateRenderer(), title: B }));
                }
            }
            const j = ({ blockType: e, emptyStateMessage: a, emptyStateTitle: t, scribeNamespace: n, supportUrl: d }) => M((l) => r.createElement(p.nO, { namespace: n }, r.createElement(U, (0, o.Z)({}, l, { blockType: e, emptyStateMessage: a, emptyStateTitle: t, supportUrl: d }))));
        },
        831927: (e, a, t) => {
            t.r(a), t.d(a, { default: () => u });
            var o = t(688715),
                r = t(111677),
                n = t.n(r),
                d = t(248225),
                l = t(531014);
            const s = n().g51a96de,
                i = n().e0a7e9bc,
                c = (0, o.ju)("https://help.x.com/articles/20172663"),
                u = (0, l.v)({ scribeNamespace: { page: "blocked", section: "imported_blocked_accounts" }, blockType: d.kH.Imported, emptyStateTitle: i, emptyStateMessage: s, supportUrl: c });
        },
        689044: (e, a, t) => {
            t.r(a), t.d(a, { BlockedAccountsScreen: () => _, default: () => E });
            var o = t(202784),
                r = t(107267),
                n = t(111677),
                d = t.n(n),
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
                            t.e("icons.21"),
                            t.e("icons.16"),
                            t.e("icons.10"),
                            t.e("icons.1"),
                            t.e("icons.19"),
                            t.e("icons.0"),
                            t.e("icons.23"),
                            t.e("icons.8"),
                            t.e("icons.2"),
                            t.e("icons.3"),
                            t.e("icons.15"),
                            t.e("icons.4"),
                            t.e("modules.common-e907d115"),
                            t.e("modules.common-e019dbda"),
                            t.e("icons.9"),
                            t.e("icons.7"),
                            t.e("icons.28"),
                            t.e("icons.26"),
                            t.e("icons.24"),
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
                            t.e("icons.18"),
                            t.e("icons.13"),
                            t.e("icons.29"),
                            t.e("icons.27"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                            t.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            t.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            t.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                            t.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                            t.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                            t.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                            t.e("shared~loader.DashMenu~loader.DashModal~ondemand.CommandCenter~bundle.Account~ondemand.SettingsInternals~onde"),
                            t.e("ondemand.SettingsInternals-bc6ccf4c"),
                            t.e("ondemand.SettingsInternals-e96e9bea"),
                            t.e("ondemand.SettingsInternals-5b7ef534"),
                            t.e("ondemand.SettingsInternals-9f4db315"),
                            t.e("ondemand.SettingsInternals-e6266db0"),
                            t.e("ondemand.SettingsInternals-948b2c60"),
                            t.e("ondemand.SettingsInternals-0564e869"),
                            t.e("ondemand.SettingsInternals-71f5c63d"),
                            t.e("ondemand.SettingsInternals-cff17ecc"),
                            t.e("ondemand.SettingsInternals-394f886d"),
                        ]).then(t.bind(t, 137203)),
                    { shouldMigrateToX: !1 },
                ),
                k = (0, u.p)(
                    () =>
                        Promise.all([
                            t.e("icons.21"),
                            t.e("icons.16"),
                            t.e("icons.10"),
                            t.e("icons.1"),
                            t.e("icons.19"),
                            t.e("icons.0"),
                            t.e("icons.23"),
                            t.e("icons.8"),
                            t.e("icons.2"),
                            t.e("icons.3"),
                            t.e("icons.15"),
                            t.e("icons.4"),
                            t.e("modules.common-e907d115"),
                            t.e("modules.common-e019dbda"),
                            t.e("icons.9"),
                            t.e("icons.7"),
                            t.e("icons.28"),
                            t.e("icons.26"),
                            t.e("icons.24"),
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
                            t.e("icons.18"),
                            t.e("icons.13"),
                            t.e("icons.29"),
                            t.e("icons.27"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                            t.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            t.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            t.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                            t.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                            t.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                            t.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                            t.e("shared~loader.DashMenu~loader.DashModal~ondemand.CommandCenter~bundle.Account~ondemand.SettingsInternals~onde"),
                            t.e("ondemand.SettingsInternals-bc6ccf4c"),
                            t.e("ondemand.SettingsInternals-e96e9bea"),
                            t.e("ondemand.SettingsInternals-5b7ef534"),
                            t.e("ondemand.SettingsInternals-9f4db315"),
                            t.e("ondemand.SettingsInternals-e6266db0"),
                            t.e("ondemand.SettingsInternals-948b2c60"),
                            t.e("ondemand.SettingsInternals-0564e869"),
                            t.e("ondemand.SettingsInternals-71f5c63d"),
                            t.e("ondemand.SettingsInternals-cff17ecc"),
                            t.e("ondemand.SettingsInternals-394f886d"),
                        ]).then(t.bind(t, 831927)),
                    { shouldMigrateToX: !1 },
                );
            class _ extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderTabs = () => {
                            const e = [
                                { to: b, key: p, label: p, retainScrollPosition: !1 },
                                { to: f, key: D, label: D, retainScrollPosition: !1 },
                            ];
                            return o.createElement(l.Z, { "aria-label": h, links: e });
                        });
                }
                render() {
                    return o.createElement(c.nO, { namespace: M }, o.createElement(i.Z, null, o.createElement(m.Z, { location: this.props.location, secondaryBar: this._renderTabs(), title: h, withBottomBorder: !0, withMarginBottom: !1 }, o.createElement(r.Switch, null, o.createElement(r.Route, { component: g, exact: !0, path: b }), o.createElement(r.Route, { component: k, exact: !0, path: f })))));
                }
            }
            _.contextType = s.rC;
            const E = _;
        },
        720217: (e, a, t) => {
            t.r(a), t.d(a, { ConnectedAccounts: () => x, default: () => L });
            t(136728);
            var o = t(202784),
                r = t(99107),
                n = t(325686),
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
                k = t(71620),
                _ = t(668214),
                E = t(257166),
                A = t(38562),
                y = t(673110),
                S = t(601576);
            const w = (0, _.Z)()
                    .propsFromState(() => ({ userEmail: E.selectFirstEmail, fetchStatus: A.UD, ssoConnections: A.An }))
                    .propsFromActions(() => ({ addToast: S.fz, createLocalApiErrorHandler: (0, k.zr)("SETTINGS_CONNECTED_APPS_SCREEN_CONTEXT"), deleteSSOConnection: A.O5, fetchDevicesIfNeeded: E.fetchDevicesIfNeeded, fetchSettingsIfNeeded: A.Sb, fetchSettings: A.wv, verifyPassword: y.Gv }))
                    .withAnalytics({ page: "settings", section: "connected_accounts", component: "delete_sso_connection" }),
                Z = p().h1abfbce,
                P = p().f8e46b90,
                v = p().d84ed6b2,
                I = p().i51130d4,
                C = p().e28901f2,
                T = p().cf8560be;
            class x extends o.Component {
                constructor(e, a) {
                    super(e, a),
                        (this._render = () => {
                            const { location: e } = this.props;
                            return o.createElement(M.Z, null, o.createElement(g.Z, { location: e, screenType: "secondaryDetail", title: Z }, o.createElement(o.Fragment, null, o.createElement(d.Z, { description: P }), this._renderSSOProviderPivots())));
                        }),
                        (this._renderSSOProviderPivots = () => {
                            const { ssoConnections: e, userEmail: a } = this.props,
                                t = o.createElement(l.ZP, { color: "green500", size: "subtext2" }, o.createElement(D.default, null), " ", T);
                            if (e && e.r.ok.length) {
                                const {
                                    r: { ok: r },
                                } = e;
                                return r.map(({ ssoProvider: e }, d) => {
                                    const l = r.length - 1,
                                        { ssoProviderLabel: u, ssoProviderThumbnail: m } = this._getSSOProviderProps(e) || {};
                                    return o.createElement(n.Z, { key: d }, o.createElement(s.Z, { description: t, label: u, renderRightContent: a ? this._renderUserEmail(a) : void 0, thumbnail: m, thumbnailSize: "large" }), o.createElement(i.Z, { color: "red500", label: v, onPress: this._handleOnPress({ ssoProvider: e }) }), d < l ? o.createElement(c.Z, null) : null);
                                });
                            }
                        }),
                        (this._renderUserEmail = (e) => () => o.createElement(l.ZP, null, e)),
                        (this._getSSOProviderProps = (e) => {
                            const a = e.toLowerCase(),
                                t = u.default.isDarkMode() ? u.default.theme.colors.white : void 0;
                            switch (a) {
                                case r.Bm.Google:
                                    return { ssoProviderThumbnail: o.createElement(b.default, null), ssoProviderLabel: I };
                                case r.Bm.Apple:
                                    return { ssoProviderThumbnail: o.createElement(f.default, { style: { color: t } }), ssoProviderLabel: C };
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
                    return o.createElement(m.Z, { fetchStatus: e, onRequestRetry: this._handleFetchRetry, render: this._render });
                }
            }
            const L = w(x);
        },
        208791: (e, a, t) => {
            t.r(a), t.d(a, { SettingsContactsScreen: () => T, default: () => x });
            var o = t(202784),
                r = t(688715),
                n = t(943401),
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
                k = u().b033248c,
                _ = u().c69b4798,
                E = u().eca117e6,
                A = u().acd36386,
                y = u().gd8511ca,
                S = u().eca935ec,
                w = (0, r.ju)("https://help.x.com/safety-and-security/email-and-phone-discoverability-settings"),
                Z = u().ac77c66c,
                P = u().bbcafbda,
                v = u().jadf483e,
                I = (0, r.ju)("https://help.x.com/using-twitter/upload-your-contacts-to-search-for-friends"),
                C = u().i859a9d4;
            function T(e) {
                const { createLocalApiErrorHandler: a, discoverableByEmail: t, discoverableByMobilePhone: r, location: c, updateSettings: u } = e,
                    p = o.useCallback(
                        (e, t) => {
                            u({ [e]: t }).catch(a({ showToast: !0 }));
                        },
                        [a, u],
                    );
                return o.createElement(m.Z, null, o.createElement(h.Z, { location: c, title: M }, o.createElement(n.Z, { description: g }), o.createElement(d.Z, { text: k }), o.createElement(n.Z, { description: _ }), o.createElement(l.Z, { checked: t, helpText: A, label: E, learnMoreLink: w, name: "discoverable_by_email", onChange: p }), o.createElement(l.Z, { checked: r, helpText: S, label: y, learnMoreLink: w, name: "discoverable_by_mobile_phone", onChange: p }), o.createElement(s.Z, null), o.createElement(d.Z, { text: Z }), o.createElement(n.Z, { description: v, learnMoreLabel: C, learnMoreLink: I }), o.createElement(i.Z, { label: P, link: "/settings/contacts_dashboard" })));
            }
            const x = f(T);
        },
        221930: (e, a, t) => {
            t.r(a), t.d(a, { SettingsContactsDashboardScreen: () => B, default: () => H });
            var o = t(202784),
                r = t(325686),
                n = t(731708),
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
                k = t(293115),
                _ = t(312771),
                E = t(170069),
                A = t(609848),
                y = t(264922),
                S = t(267966),
                w = t(71620),
                Z = t(668214),
                P = t(38562),
                v = t(116635);
            const I = (0, Z.Z)()
                    .propsFromState(() => ({ contacts: v.Af, fetchStatus: v.UD }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, w.zr)("SETTINGS_CONTACTS_DASHBOARD_SCREEN"), deleteContacts: P._f, fetchContactsIfNeeded: v.d0, fetchContactsNext: v.iv })),
                C = { page: "settings", section: "contacts_dashboard" },
                T = u().bbcafbda,
                x = o.createElement(u().I18NFormatMessage, { $i18n: "g66a254b" }, o.createElement(n.ZP, { link: (0, d.ju)("https://help.x.com/using-twitter/upload-your-contacts-to-search-for-friends") }, u().d439b1c1)),
                L = u().b864be7a,
                N = { headline: u().g5fa1090, text: u().h3e420fc, confirmButtonLabel: u().e68b09b4 },
                F = u().ca24589e,
                z = (e) => e.id_str;
            class B extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { verificationRequired: !1 }),
                        (this._renderTimeline = () => {
                            const { contacts: e, fetchStatus: a } = this.props;
                            return o.createElement(f.Z, { assumedItemHeight: 70, cacheKey: "CONTACTS_DASHBOARD", footer: this._renderFooter(a), identityFunction: z, items: e, onNearEnd: this._handleFetchMoreContacts, renderer: this._renderContact });
                        }),
                        (this._renderContact = (e) => {
                            const { id_str: a, import_source: t, vcard: d } = e,
                                s = this._getContactProp(d.get("fn")) || F,
                                i = this._getContactProperties(d.get("tel")),
                                c = [...this._getContactProperties(d.get("email")), ...i];
                            return o.createElement(r.Z, { key: a, style: [[S.Z.infoText, S.Z.bottomBorder], R.contactContainer] }, o.createElement(l.Z, { Icon: m.default, color: "neutral", style: R.personIcon }), o.createElement(r.Z, null, o.createElement(n.ZP, null, s), c ? c.map((e) => o.createElement(n.ZP, { color: "gray700", key: e, size: "subtext2" }, e)) : null, t ? o.createElement(n.ZP, { color: "gray700", size: "subtext2" }, `Imported from ${t}`) : null));
                        }),
                        (this._renderFooter = (e) => (e === _.ZP.LOADING ? o.createElement(r.Z, { style: R.loadingContainer }, o.createElement(b.Z, { fetchStatus: e, render: h.Z })) : null)),
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
                    const { contacts: e, fetchContactsIfNeeded: a, fetchStatus: t, location: r } = this.props;
                    return o.createElement(k.nO, { namespace: C }, o.createElement(g.Z, null, o.createElement(y.Z, { location: r, title: T }, o.createElement(D.Z, { confirmationSheetConfirmButtonLabel: N.confirmButtonLabel, confirmationSheetConfirmButtonType: "destructiveFilled", confirmationSheetHeadline: N.headline, confirmationSheetText: N.text, label: L, onConfirmationSheetConfirm: this._handleRemoveContacts }), o.createElement(E.Z, null, x), o.createElement(s.Z, null), o.createElement(A.Z, { fetch: a, fetchStatus: e.length > 0 ? _.ZP.LOADED : t, render: () => this._renderTimeline() }))));
                }
            }
            B.contextType = M.rC;
            const R = i.default.create((e) => ({ contactContainer: { flexDirection: "row", flexWrap: "wrap" }, personIcon: { marginEnd: e.spaces.space12 }, loadingContainer: { paddingVertical: e.spaces.space16, justifyContent: "center" } })),
                H = I(B);
        },
        412483: (e, a, t) => {
            t.r(a), t.d(a, { ContentPreferencesPage: () => v, default: () => I });
            var o = t(202784),
                r = t(844685),
                n = t(779610),
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
                k = i().hfb77cf6,
                _ = i().d495680e,
                E = i().f350f0c0,
                A = i().fd3369a2,
                y = i().h1ef00dc,
                S = i().e8f57e08,
                w = i().e8f57e08,
                Z = i().hfc86556,
                P = i().a5f32aa2;
            class v extends o.Component {
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
                    return o.createElement(u.Z, null, o.createElement(m.Z, { location: e, screenType: "primaryDetail", title: M }, o.createElement(r.Z, { testID: f, text: g }), o.createElement(n.Z, { label: y, link: "/settings/search" }), o.createElement(n.Z, { label: this._trendsLabel, link: a }), o.createElement(d.Z, null), o.createElement(r.Z, { text: _ }), o.createElement(n.Z, { label: E, link: "/i/flow/language_selector" }), o.createElement(l.Z, { description: A }), o.createElement(d.Z, null), o.createElement(r.Z, { text: k }), o.createElement(n.Z, { label: Z, link: "/settings/mute" }), o.createElement(n.Z, { label: P, link: "/settings/blocked/all" }), o.createElement(d.Z, null), o.createElement(r.Z, { text: S }), o.createElement(n.Z, { description: this._renderPersonalizationDescription(), label: w, link: "/settings/account/personalization" })));
                }
            }
            v.contextType = c.rC;
            const I = b(v);
        },
        536909: (e, a, t) => {
            t.r(a), t.d(a, { default: () => b });
            var o = t(202784),
                r = t(325686),
                n = t(844685),
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
                b = ({ location: e }) => o.createElement(c.nO, { namespace: D }, o.createElement(i.Z, null, o.createElement(u.Z, { location: e, screenType: "primaryDetail", title: h }, o.createElement(n.Z, { text: p }), o.createElement(r.Z, { style: m.Z.viewItem }, o.createElement(d.ZP, { color: "gray700", size: "subtext2" }, o.createElement(s().I18NFormatMessage, { $i18n: "if2bb997" }))))));
        },
        658679: (e, a, t) => {
            t.r(a), t.d(a, { DeactivateScreen: () => L, default: () => N });
            var o = t(202784),
                r = t(614983),
                n = t.n(r),
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
                k = t(668214),
                _ = t(558477);
            const E = (0, k.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("DEACTIVATE"), deactivate: _.Z }))
                    .withAnalytics({ page: "settings", section: "deactivate" }),
                A = h().j035733c,
                y = h().j4a29d52,
                S = h().ea989810,
                w = h().f6e73faa,
                Z = h().c3743328,
                P = h().a20cd24e,
                v = h().fe36fe10,
                I = h().e93b0ae0,
                C = "/settings/your_twitter_data/account",
                T = (0, l.ju)("https://help.x.com/safety-and-security/remove-twitter-profile-from-google-search"),
                x = ({ children: e, withBottomBorder: a = !0 }) => o.createElement(d.Z, { style: [M.Z.viewItem, a && M.Z.bottomBorder] }, o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, e));
            class L extends o.Component {
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
                    return n()(!!a, "viewerUserId must be defined"), o.createElement(D.Z, null, o.createElement(f.Z, { location: e, onPasswordSubmit: this._handlePasswordSubmit, promptForPassword: t, reenterPasswordLabel: I, saveChangesHeaderLabel: v, submitLabel: w, submitType: "destructiveFilled", title: S }, o.createElement(d.Z, null, o.createElement(b.ZP, { key: a, userId: a, withLink: !1 }), o.createElement(i.Z, { text: Z }), o.createElement(x, { withBottomBorder: !1 }, A), o.createElement(i.Z, { text: P }), o.createElement(x, null, y), o.createElement(x, null, o.createElement(h().I18NFormatMessage, { $i18n: "g124fce9" }, o.createElement(s.ZP, { link: T }, h().fc025d1d))), o.createElement(x, null, o.createElement(h().I18NFormatMessage, { $i18n: "d9ef8fbb" }, o.createElement(s.ZP, { link: C }, h().bb5e039c))), o.createElement(x, null, o.createElement(h().I18NFormatMessage, { $i18n: "b7a3adc1" }, o.createElement(s.ZP, { link: C }, h().j37efff6))), o.createElement(x, { withBottomBorder: !1 }, o.createElement(h().I18NFormatMessage, { $i18n: "f3613d0b" }, o.createElement(s.ZP, { link: "/settings/download_your_data" }, h().ce5bfe12))), o.createElement(c.Z, null), o.createElement(u.Z, { color: "red500", label: w, onPress: this._handleDeactivateRequest }))));
                }
            }
            L.contextType = p.rC;
            const N = E(L);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-0564e869.7ee4f74a.js.map
