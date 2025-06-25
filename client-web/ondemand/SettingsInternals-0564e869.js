"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-0564e869"],
    {
        466441: (e, a, o) => {
            o.r(a), o.d(a, { NotFoundScreen: () => g, default: () => E });
            o(571372);
            var t = o(202784),
                n = o(386802),
                r = o(108362),
                d = o(392237),
                l = o(111677),
                s = o.n(l),
                i = o(187669),
                c = o(449067),
                u = o(38293),
                m = o(56851),
                h = o(652904),
                p = o(952793),
                D = o(163889),
                b = o(725516);
            const f = s().ba929da8,
                M = s().d203e242;
            function g(e) {
                const { splat: a } = e.match.params,
                    { isModal: o } = t.useContext(n.Z),
                    d = (0, p.hC)("responsive_web_report_page_not_found");
                return (
                    (0, i.q)(() => {
                        d && a && (0, D.ZP)(new Error(`Page not found: ${a}`));
                    }),
                    t.createElement(h.Z, null, t.createElement(c.Z.Configure, { backLocation: "/", documentTitle: f, title: M }), t.createElement(r.Z, { style: o && _.modal }, t.createElement(m.Z, null)), t.createElement(u.Z, { title: f, withMeta: !1 }))
                );
            }
            const _ = d.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                E = (0, b.Z)(g, { page: "not_found" });
        },
        202886: (e, a, o) => {
            o.r(a), o.d(a, { ApplicationDetailPage: () => W, default: () => X });
            var t = o(202784),
                n = o(856642),
                r = o(325686),
                d = o(688715),
                l = o(457311),
                s = o(731708),
                i = o(779610),
                c = o(992942),
                u = o(242454),
                m = o(844685),
                h = o(952428),
                p = o(88307),
                D = o(392237),
                b = o(111677),
                f = o.n(b),
                M = o(912021),
                g = o(290402),
                _ = o(811105),
                E = o(652904),
                k = o(264922),
                y = o(396634),
                A = o(71620),
                S = o(668214),
                P = o(948985);
            const w = (e, a) => a.match.params.appId,
                Z = (e, a) => P.$q.selectAppsById(e, w(0, a)),
                I = (0, S.Z)()
                    .propsFromState(() => ({ appId: w, fetchStatus: P.UD, details: Z }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, A.zr)("APPLICATION_DETAIL"), fetchApplication: P.zw, revokeApplication: P.$q.revokeApplication, revokeOauth2Token: P.$q.revokeOauth2Token }))
                    .withAnalytics({ page: "settings", section: "application_detail" }),
                v = f().g8d1b99b,
                C = f().eafcc76a,
                T = f().j3998a16,
                x = f().a6845663,
                L = f().b2347f7c,
                N = f().e1fda16e,
                F = f().b8f3ed46,
                R = f().gb8d09ba,
                z = f().g6dc09a0,
                B = f().a6e6e898,
                H = f().cde3b9ae,
                O = f().g0d7813a,
                U = f().c9b35b9e,
                j = f().e0191264,
                $ = f().b73e1e8a,
                V = (0, d.ju)("https://support.x.com/articles/20170805"),
                q = (0, d.ju)("https://support.x.com/forms/platform"),
                G = "oauth2";
            class W extends t.Component {
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
                            const { appId: e, createLocalApiErrorHandler: a, fetchApplication: o } = this.props;
                            o(e).catch(a({ showToast: !0 }));
                        }),
                        (this._render = () => {
                            const { details: e } = this.props,
                                a = e[0];
                            if (!a) return t.createElement(l.Z, { header: N, message: F });
                            const o = { app_id: a.app_id, app_name: a.name },
                                d = t.createElement(r.Z, { style: K.itemContainer }, t.createElement(s.ZP, { color: "gray700", size: "subtext2" }, this._renderApprovalDate(a.approved)));
                            return t.createElement(
                                r.Z,
                                null,
                                t.createElement(i.Z, { description: a.organization, label: a.name, thumbnail: t.createElement(c.Z, { "aria-label": "", source: a.img_url, style: K.avatar }) }),
                                a.organization_url ? t.createElement(u.Z, { color: "primary", label: a.organization_url, link: a.organization_url }) : null,
                                t.createElement(r.Z, { style: K.itemContainer }, t.createElement(s.ZP, { color: "gray700", size: "subtext2" }, a.description)),
                                d,
                                t.createElement(m.Z, { text: z }),
                                e.map((e) => t.createElement(r.Z, { key: e.token }, this._renderPermissions(e), e.ios ? null : t.createElement(y.Z, { onRevoke: this._handleRevokeApp, reportApplicationHref: `${q}?${(0, n.stringify)(o)}`, revoked: !!e.revoked, token: e.token, tokenType: e.token_type || "oauth1" }))),
                                a.ios ? t.createElement(h.Z, { link: V, style: [K.itemContainer, K.center] }, t.createElement(s.ZP, { color: "link" }, $)) : null,
                            );
                        });
                }
                UNSAFE_componentWillMount() {
                    this._fetchApp();
                }
                _renderPermissions(e) {
                    if (null != e.scopes && e.token_type === G) {
                        const a = Array.from(e.scopes);
                        return t.createElement(r.Z, { style: K.permissionContainer }, this._renderCanViewScopesList(a), this._renderCanDoScopes(a));
                    }
                    return t.createElement(t.Fragment, null, this._renderReadWritePermissions(e), this._renderAdsPermission(e), this._renderEmailPermission(e));
                }
                _renderCanViewScopesList(e) {
                    const a = this._getSortedCanViewScopes(e);
                    return a.length ? t.createElement(_.Z, { scopes: a, size: "subtext2", title: C }) : null;
                }
                _renderCanDoScopes(e) {
                    const a = this._getSortedCanDoScopes(e);
                    return a.length ? t.createElement(_.Z, { scopes: a, size: "subtext2", title: T }) : null;
                }
                _renderReadWritePermissions(e) {
                    let a = null;
                    return e.can_read_dms ? (a = O) : e.can_write ? (a = H) : e.can_read && (a = B), a ? t.createElement(p.Z, { label: a }) : null;
                }
                _renderEmailPermission(e) {
                    return e.email_access ? t.createElement(p.Z, { label: R }) : null;
                }
                _renderAdsPermission(e) {
                    let a = null;
                    return e.has_ads_read_write_access ? (a = j) : e.has_ads_read_access && (a = U), a ? t.createElement(p.Z, { label: a }) : null;
                }
                _renderApprovalDate(e) {
                    const a = new Date(Number(e)),
                        o = x({ date: v(a) });
                    return t.createElement("time", { dateTime: a.toISOString() }, o);
                }
                _revokeApplication(e, a) {
                    const { createLocalApiErrorHandler: o, revokeApplication: t, revokeOauth2Token: n } = this.props;
                    a === G ? n(e).catch(o({ showToast: !0 })) : t(e).catch(o({ showToast: !0 }));
                }
                _scribeAction(e) {
                    const { analytics: a } = this.props;
                    a.scribe({ component: "oauth_app", action: "click", element: e });
                }
                render() {
                    const { details: e, fetchStatus: a, location: o } = this.props,
                        n = e[0],
                        r = n ? n.name : "";
                    return t.createElement(E.Z, null, t.createElement(k.Z, { location: o, title: r }, t.createElement(g.Z, { "aria-label": L, fetchStatus: a, onRequestRetry: this._handleRetry, render: this._render })));
                }
            }
            const X = I(W),
                K = D.default.create((e) => ({ avatar: { borderRadius: e.borderRadii.small, height: "100%", width: "100%" }, center: { justifyContent: "center" }, permissionContainer: { paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal }, itemContainer: { alignItems: "center", flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, width: "100%", borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } }));
        },
        137203: (e, a, o) => {
            o.r(a), o.d(a, { default: () => u });
            var t = o(688715),
                n = o(111677),
                r = o.n(n),
                d = o(248225),
                l = o(531014);
            const s = r().d23b0404,
                i = r().e0a7e9bc,
                c = (0, t.ju)("https://help.x.com/using-twitter/blocking-and-unblocking-accounts"),
                u = (0, l.v)({ scribeNamespace: { page: "blocked", section: "all_blocked_accounts" }, blockType: d.kH.All, emptyStateTitle: i, emptyStateMessage: s, supportUrl: c });
        },
        531014: (e, a, o) => {
            o.d(a, { v: () => j });
            var t = o(807896),
                n = o(202784),
                r = o(731708),
                d = o(688715),
                l = o(457311),
                s = o(420412),
                i = o(111677),
                c = o.n(i),
                u = o(912021),
                m = o(652904),
                h = o(810641),
                p = o(293115),
                D = o(248225),
                b = o(170069),
                f = o(668214);
            const M = (0, f.Z)().propsFromActions(() => ({ cleanupBlockList: D.ZH }));
            var g = o(269011),
                _ = o(335632),
                E = o(962741),
                k = o(154003),
                y = o(712816),
                A = o(879596),
                S = o(942893),
                P = o(71620),
                w = o(601576),
                Z = o(919022);
            const I = (e, a) => Z.ZP.select(e, a.userId),
                v = (0, f.Z)()
                    .propsFromState(() => ({ user: I }))
                    .propsFromActions(() => ({ addToast: w.fz, block: Z.ZP.block, createLocalApiErrorHandler: (0, P.zr)("UNBLOCK_BUTTON"), unblock: Z.ZP.unblock }))
                    .withAnalytics(),
                C = c().if594962,
                T = c().a6450e84,
                x = c().i2b9632e,
                L = c().a9fd20be;
            class N extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleUnblockToggle = () => {
                            const { addToast: e, block: a, createLocalApiErrorHandler: o, unblock: t, user: n, userId: r } = this.props;
                            n?.blocking
                                ? t(r).then((a) => {
                                      e({ text: x }), this._scribeAction("unblock");
                                  }, o(A.D))
                                : a(r).then((a) => {
                                      e({ text: L }), this._scribeAction("block");
                                  }, o(y.d));
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (e) {
                        const a = e.blocking ? C : T;
                        return n.createElement(k.ZP, { "aria-label": a, onPress: this._handleUnblockToggle, size: "medium", type: e.blocking ? "destructiveFilled" : "destructiveOutlined" }, a);
                    }
                    return null;
                }
                _scribeAction(e) {
                    const { analytics: a, user: o } = this.props,
                        t = o ? [S.Z.getUserItem(o)] : [];
                    a.scribe({ action: e, data: { items: t } });
                }
            }
            const F = v(N),
                R = { ...(0, _.G)({}), [E.ZP.User]: (0, g.Z)({ decoration: ({ userId: e }) => n.createElement(F, { userId: e }) }) },
                z = c().a5f32aa2,
                B = c().ef731b14,
                H = c().i859a9d4,
                O = n.createElement(c().I18NFormatMessage, { $i18n: "ab3bf5a7" }, n.createElement(r.ZP, { link: (0, d.ju)("https://support.x.com/articles/117063") }, c().e554ba83));
            class U extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getLegacyModule = () => {
                            const { blockType: e } = this.props;
                            return this._getMemoizedModule(e);
                        }),
                        (this._getMemoizedModule = (0, u.Z)((e) => (0, D.Gm)(e))),
                        (this._getEmptyStateRenderer = () => {
                            const { emptyStateMessage: e, emptyStateTitle: a, supportUrl: o } = this.props;
                            return this._getMemoizedEmptyStateRenderer(o, a, e);
                        }),
                        (this._getMemoizedEmptyStateRenderer = (0, u.Z)((e, a, o) => () => {
                            const t = n.createElement("div", null, o, " ", e && n.createElement(r.ZP, { link: e }, H));
                            return n.createElement(l.Z, { header: a, message: t });
                        }));
                }
                componentWillUnmount() {
                    const { cleanupBlockList: e } = this.props;
                    e(this._getLegacyModule());
                }
                render() {
                    return n.createElement(m.Z, null, n.createElement("div", null, n.createElement(b.Z, null, O), n.createElement(s.Z, null)), n.createElement(h.Z, { entryConfiguration: R, loadingAccessibilityLabel: B, module: this._getLegacyModule(), renderEmptyState: this._getEmptyStateRenderer(), title: z }));
                }
            }
            const j = ({ blockType: e, emptyStateMessage: a, emptyStateTitle: o, scribeNamespace: r, supportUrl: d }) => M((l) => n.createElement(p.nO, { namespace: r }, n.createElement(U, (0, t.Z)({}, l, { blockType: e, emptyStateMessage: a, emptyStateTitle: o, supportUrl: d }))));
        },
        831927: (e, a, o) => {
            o.r(a), o.d(a, { default: () => u });
            var t = o(688715),
                n = o(111677),
                r = o.n(n),
                d = o(248225),
                l = o(531014);
            const s = r().g51a96de,
                i = r().e0a7e9bc,
                c = (0, t.ju)("https://help.x.com/articles/20172663"),
                u = (0, l.v)({ scribeNamespace: { page: "blocked", section: "imported_blocked_accounts" }, blockType: d.kH.Imported, emptyStateTitle: i, emptyStateMessage: s, supportUrl: c });
        },
        689044: (e, a, o) => {
            o.r(a), o.d(a, { BlockedAccountsScreen: () => E, default: () => k });
            var t = o(202784),
                n = o(107267),
                r = o(111677),
                d = o.n(r),
                l = o(507651),
                s = o(443781),
                i = o(652904),
                c = o(293115),
                u = o(717988),
                m = o(264922);
            const h = d().a5f32aa2,
                p = d().f8321d82,
                D = d().eb233866,
                b = "/settings/blocked/all",
                f = "/settings/blocked/imported",
                M = { page: "settings", section: "blocked_accounts" },
                g = (0, u.p)(
                    () =>
                        Promise.all([
                            o.e("icons.21"),
                            o.e("icons.16"),
                            o.e("icons.10"),
                            o.e("icons.19"),
                            o.e("icons.1"),
                            o.e("icons.0"),
                            o.e("icons.8"),
                            o.e("icons.2"),
                            o.e("icons.23"),
                            o.e("icons.3"),
                            o.e("icons.4"),
                            o.e("icons.15"),
                            o.e("modules.common-e907d115"),
                            o.e("modules.common-e019dbda"),
                            o.e("icons.9"),
                            o.e("icons.7"),
                            o.e("icons.28"),
                            o.e("modules.audio-6107ac1a"),
                            o.e("modules.audio-b953418a"),
                            o.e("modules.audio-7c51e6a7"),
                            o.e("modules.audio-04db59e9"),
                            o.e("modules.audio-76583d6c"),
                            o.e("modules.audio-b7a8a5fb"),
                            o.e("modules.audio-51f6e793"),
                            o.e("modules.audio-e019dbda"),
                            o.e("modules.audio-262c94d4"),
                            o.e("modules.audio-c6fe4ea4"),
                            o.e("icons.26"),
                            o.e("icons.24"),
                            o.e("icons.29"),
                            o.e("icons.18"),
                            o.e("icons.13"),
                            o.e("icons.27"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.SideNav~loader.SideNavRedesign~loader.Typeahe"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-167f1698"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-8c4bd381"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"),
                            o.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
                            o.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                            o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                            o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                            o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                            o.e("shared~loader.DashMenu~loader.DashModal~ondemand.CommandCenter~bundle.Account~ondemand.SettingsInternals~onde"),
                            o.e("ondemand.SettingsInternals-bc6ccf4c"),
                            o.e("ondemand.SettingsInternals-e96e9bea"),
                            o.e("ondemand.SettingsInternals-5b7ef534"),
                            o.e("ondemand.SettingsInternals-9f4db315"),
                            o.e("ondemand.SettingsInternals-e6266db0"),
                            o.e("ondemand.SettingsInternals-948b2c60"),
                            o.e("ondemand.SettingsInternals-0564e869"),
                            o.e("ondemand.SettingsInternals-71f5c63d"),
                            o.e("ondemand.SettingsInternals-cff17ecc"),
                            o.e("ondemand.SettingsInternals-394f886d"),
                        ]).then(o.bind(o, 137203)),
                    { shouldMigrateToX: !1 },
                ),
                _ = (0, u.p)(
                    () =>
                        Promise.all([
                            o.e("icons.21"),
                            o.e("icons.16"),
                            o.e("icons.10"),
                            o.e("icons.19"),
                            o.e("icons.1"),
                            o.e("icons.0"),
                            o.e("icons.8"),
                            o.e("icons.2"),
                            o.e("icons.23"),
                            o.e("icons.3"),
                            o.e("icons.4"),
                            o.e("icons.15"),
                            o.e("modules.common-e907d115"),
                            o.e("modules.common-e019dbda"),
                            o.e("icons.9"),
                            o.e("icons.7"),
                            o.e("icons.28"),
                            o.e("modules.audio-6107ac1a"),
                            o.e("modules.audio-b953418a"),
                            o.e("modules.audio-7c51e6a7"),
                            o.e("modules.audio-04db59e9"),
                            o.e("modules.audio-76583d6c"),
                            o.e("modules.audio-b7a8a5fb"),
                            o.e("modules.audio-51f6e793"),
                            o.e("modules.audio-e019dbda"),
                            o.e("modules.audio-262c94d4"),
                            o.e("modules.audio-c6fe4ea4"),
                            o.e("icons.26"),
                            o.e("icons.24"),
                            o.e("icons.29"),
                            o.e("icons.18"),
                            o.e("icons.13"),
                            o.e("icons.27"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.SideNav~loader.SideNavRedesign~loader.Typeahe"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-167f1698"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-8c4bd381"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"),
                            o.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
                            o.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                            o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                            o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                            o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                            o.e("shared~loader.DashMenu~loader.DashModal~ondemand.CommandCenter~bundle.Account~ondemand.SettingsInternals~onde"),
                            o.e("ondemand.SettingsInternals-bc6ccf4c"),
                            o.e("ondemand.SettingsInternals-e96e9bea"),
                            o.e("ondemand.SettingsInternals-5b7ef534"),
                            o.e("ondemand.SettingsInternals-9f4db315"),
                            o.e("ondemand.SettingsInternals-e6266db0"),
                            o.e("ondemand.SettingsInternals-948b2c60"),
                            o.e("ondemand.SettingsInternals-0564e869"),
                            o.e("ondemand.SettingsInternals-71f5c63d"),
                            o.e("ondemand.SettingsInternals-cff17ecc"),
                            o.e("ondemand.SettingsInternals-394f886d"),
                        ]).then(o.bind(o, 831927)),
                    { shouldMigrateToX: !1 },
                );
            class E extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderTabs = () => {
                            const e = [
                                { to: b, key: p, label: p, retainScrollPosition: !1 },
                                { to: f, key: D, label: D, retainScrollPosition: !1 },
                            ];
                            return t.createElement(l.Z, { "aria-label": h, links: e });
                        });
                }
                render() {
                    return t.createElement(c.nO, { namespace: M }, t.createElement(i.Z, null, t.createElement(m.Z, { location: this.props.location, secondaryBar: this._renderTabs(), title: h, withBottomBorder: !0, withMarginBottom: !1 }, t.createElement(n.Switch, null, t.createElement(n.Route, { component: g, exact: !0, path: b }), t.createElement(n.Route, { component: _, exact: !0, path: f })))));
                }
            }
            E.contextType = s.rC;
            const k = E;
        },
        720217: (e, a, o) => {
            o.r(a), o.d(a, { ConnectedAccounts: () => x, default: () => L });
            o(136728);
            var t = o(202784),
                n = o(99107),
                r = o(325686),
                d = o(943401),
                l = o(731708),
                s = o(779610),
                i = o(242454),
                c = o(420412),
                u = o(392237),
                m = o(879113),
                h = o(111677),
                p = o.n(h),
                D = o(833458),
                b = o(956056),
                f = o(261214),
                M = o(652904),
                g = o(264922),
                _ = o(71620),
                E = o(668214),
                k = o(257166),
                y = o(38562),
                A = o(673110),
                S = o(601576);
            const P = (0, E.Z)()
                    .propsFromState(() => ({ userEmail: k.selectFirstEmail, fetchStatus: y.UD, ssoConnections: y.An }))
                    .propsFromActions(() => ({ addToast: S.fz, createLocalApiErrorHandler: (0, _.zr)("SETTINGS_CONNECTED_APPS_SCREEN_CONTEXT"), deleteSSOConnection: y.O5, fetchDevicesIfNeeded: k.fetchDevicesIfNeeded, fetchSettingsIfNeeded: y.Sb, fetchSettings: y.wv, verifyPassword: A.Gv }))
                    .withAnalytics({ page: "settings", section: "connected_accounts", component: "delete_sso_connection" }),
                w = p().h1abfbce,
                Z = p().f8e46b90,
                I = p().d84ed6b2,
                v = p().i51130d4,
                C = p().e28901f2,
                T = p().cf8560be;
            class x extends t.Component {
                constructor(e, a) {
                    super(e, a),
                        (this._render = () => {
                            const { location: e } = this.props;
                            return t.createElement(M.Z, null, t.createElement(g.Z, { location: e, screenType: "secondaryDetail", title: w }, t.createElement(t.Fragment, null, t.createElement(d.Z, { description: Z }), this._renderSSOProviderPivots())));
                        }),
                        (this._renderSSOProviderPivots = () => {
                            const { ssoConnections: e, userEmail: a } = this.props,
                                o = t.createElement(l.ZP, { color: "green500", size: "subtext2" }, t.createElement(D.default, null), " ", T);
                            if (e && e.r.ok.length) {
                                const {
                                    r: { ok: n },
                                } = e;
                                return n.map(({ ssoProvider: e }, d) => {
                                    const l = n.length - 1,
                                        { ssoProviderLabel: u, ssoProviderThumbnail: m } = this._getSSOProviderProps(e) || {};
                                    return t.createElement(r.Z, { key: d }, t.createElement(s.Z, { description: o, label: u, renderRightContent: a ? this._renderUserEmail(a) : void 0, thumbnail: m, thumbnailSize: "large" }), t.createElement(i.Z, { color: "red500", label: I, onPress: this._handleOnPress({ ssoProvider: e }) }), d < l ? t.createElement(c.Z, null) : null);
                                });
                            }
                        }),
                        (this._renderUserEmail = (e) => () => t.createElement(l.ZP, null, e)),
                        (this._getSSOProviderProps = (e) => {
                            const a = e.toLowerCase(),
                                o = u.default.isDarkMode() ? u.default.theme.colors.white : void 0;
                            switch (a) {
                                case n.Bm.Google:
                                    return { ssoProviderThumbnail: t.createElement(b.default, null), ssoProviderLabel: v };
                                case n.Bm.Apple:
                                    return { ssoProviderThumbnail: t.createElement(f.default, { style: { color: o } }), ssoProviderLabel: C };
                                default:
                                    return;
                            }
                        }),
                        (this._combinedFetches = () => {
                            const { fetchDevicesIfNeeded: e, fetchSettingsIfNeeded: a } = this.props,
                                o = [e(), a()];
                            return Promise.all(o);
                        }),
                        (this._handleOnPress =
                            ({ ssoProvider: e }) =>
                            () => {
                                const { history: a } = this.props,
                                    o = e.toLowerCase();
                                a.push({ pathname: "/i/flow/sso_disconnect", state: { input: { requested_variant: JSON.stringify({ id_token: "test_id_token", provider: o, state: "test_state" }) } } });
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
                    const { createLocalApiErrorHandler: a, fetchSettings: o } = this.props;
                    return this._previousPath !== location.pathname && this._initialPath === location.pathname && o().catch(a()), (this._previousPath = location.pathname), e !== this.props;
                }
                render() {
                    const { fetchStatus: e } = this.props;
                    return t.createElement(m.Z, { fetchStatus: e, onRequestRetry: this._handleFetchRetry, render: this._render });
                }
            }
            const L = P(x);
        },
        208791: (e, a, o) => {
            o.r(a), o.d(a, { SettingsContactsScreen: () => T, default: () => x });
            var t = o(202784),
                n = o(688715),
                r = o(943401),
                d = o(844685),
                l = o(954110),
                s = o(420412),
                i = o(779610),
                c = o(111677),
                u = o.n(c),
                m = o(652904),
                h = o(264922),
                p = o(71620),
                D = o(668214),
                b = o(38562);
            const f = (0, D.Z)()
                    .propsFromState(() => ({ settings: b.l4 }))
                    .adjustStateProps(({ settings: e }) => ({ discoverableByEmail: e.discoverable_by_email, discoverableByMobilePhone: e.discoverable_by_mobile_phone }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, p.zr)("SETTINGS_CONTACTS_SCREEN"), updateSettings: b.VP }))
                    .withAnalytics({ page: "settings", section: "contacts" }),
                M = u().fd4d9068,
                g = u().ab987f3c,
                _ = u().b033248c,
                E = u().c69b4798,
                k = u().eca117e6,
                y = u().acd36386,
                A = u().gd8511ca,
                S = u().eca935ec,
                P = (0, n.ju)("https://help.x.com/safety-and-security/email-and-phone-discoverability-settings"),
                w = u().ac77c66c,
                Z = u().bbcafbda,
                I = u().jadf483e,
                v = (0, n.ju)("https://help.x.com/using-twitter/upload-your-contacts-to-search-for-friends"),
                C = u().i859a9d4;
            function T(e) {
                const { createLocalApiErrorHandler: a, discoverableByEmail: o, discoverableByMobilePhone: n, location: c, updateSettings: u } = e,
                    p = t.useCallback(
                        (e, o) => {
                            u({ [e]: o }).catch(a({ showToast: !0 }));
                        },
                        [a, u],
                    );
                return t.createElement(m.Z, null, t.createElement(h.Z, { location: c, title: M }, t.createElement(r.Z, { description: g }), t.createElement(d.Z, { text: _ }), t.createElement(r.Z, { description: E }), t.createElement(l.Z, { checked: o, helpText: y, label: k, learnMoreLink: P, name: "discoverable_by_email", onChange: p }), t.createElement(l.Z, { checked: n, helpText: S, label: A, learnMoreLink: P, name: "discoverable_by_mobile_phone", onChange: p }), t.createElement(s.Z, null), t.createElement(d.Z, { text: w }), t.createElement(r.Z, { description: I, learnMoreLabel: C, learnMoreLink: v }), t.createElement(i.Z, { label: Z, link: "/settings/contacts_dashboard" })));
            }
            const x = f(T);
        },
        221930: (e, a, o) => {
            o.r(a), o.d(a, { SettingsContactsDashboardScreen: () => z, default: () => H });
            var t = o(202784),
                n = o(325686),
                r = o(731708),
                d = o(688715),
                l = o(909377),
                s = o(420412),
                i = o(392237),
                c = o(111677),
                u = o.n(c),
                m = o(25001),
                h = o(143778),
                p = o(817480),
                D = o(947135),
                b = o(290402),
                f = o(965245),
                M = o(443781),
                g = o(652904),
                _ = o(293115),
                E = o(312771),
                k = o(170069),
                y = o(609848),
                A = o(264922),
                S = o(267966),
                P = o(71620),
                w = o(668214),
                Z = o(38562),
                I = o(116635);
            const v = (0, w.Z)()
                    .propsFromState(() => ({ contacts: I.Af, fetchStatus: I.UD }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, P.zr)("SETTINGS_CONTACTS_DASHBOARD_SCREEN"), deleteContacts: Z._f, fetchContactsIfNeeded: I.d0, fetchContactsNext: I.iv })),
                C = { page: "settings", section: "contacts_dashboard" },
                T = u().bbcafbda,
                x = t.createElement(u().I18NFormatMessage, { $i18n: "g66a254b" }, t.createElement(r.ZP, { link: (0, d.ju)("https://help.x.com/using-twitter/upload-your-contacts-to-search-for-friends") }, u().d439b1c1)),
                L = u().b864be7a,
                N = { headline: u().g5fa1090, text: u().h3e420fc, confirmButtonLabel: u().e68b09b4 },
                F = u().ca24589e,
                R = (e) => e.id_str;
            class z extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { verificationRequired: !1 }),
                        (this._renderTimeline = () => {
                            const { contacts: e, fetchStatus: a } = this.props;
                            return t.createElement(f.Z, { assumedItemHeight: 70, cacheKey: "CONTACTS_DASHBOARD", footer: this._renderFooter(a), identityFunction: R, items: e, onNearEnd: this._handleFetchMoreContacts, renderer: this._renderContact });
                        }),
                        (this._renderContact = (e) => {
                            const { id_str: a, import_source: o, vcard: d } = e,
                                s = this._getContactProp(d.get("fn")) || F,
                                i = this._getContactProperties(d.get("tel")),
                                c = [...this._getContactProperties(d.get("email")), ...i];
                            return t.createElement(n.Z, { key: a, style: [[S.Z.infoText, S.Z.bottomBorder], B.contactContainer] }, t.createElement(l.Z, { Icon: m.default, color: "neutral", style: B.personIcon }), t.createElement(n.Z, null, t.createElement(r.ZP, null, s), c ? c.map((e) => t.createElement(r.ZP, { color: "gray700", key: e, size: "subtext2" }, e)) : null, o ? t.createElement(r.ZP, { color: "gray700", size: "subtext2" }, `Imported from ${o}`) : null));
                        }),
                        (this._renderFooter = (e) => (e === E.ZP.LOADING ? t.createElement(n.Z, { style: B.loadingContainer }, t.createElement(b.Z, { fetchStatus: e, render: h.Z })) : null)),
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
                    const { contacts: e, fetchContactsIfNeeded: a, fetchStatus: o, location: n } = this.props;
                    return t.createElement(_.nO, { namespace: C }, t.createElement(g.Z, null, t.createElement(A.Z, { location: n, title: T }, t.createElement(D.Z, { confirmationSheetConfirmButtonLabel: N.confirmButtonLabel, confirmationSheetConfirmButtonType: "destructiveFilled", confirmationSheetHeadline: N.headline, confirmationSheetText: N.text, label: L, onConfirmationSheetConfirm: this._handleRemoveContacts }), t.createElement(k.Z, null, x), t.createElement(s.Z, null), t.createElement(y.Z, { fetch: a, fetchStatus: e.length > 0 ? E.ZP.LOADED : o, render: () => this._renderTimeline() }))));
                }
            }
            z.contextType = M.rC;
            const B = i.default.create((e) => ({ contactContainer: { flexDirection: "row", flexWrap: "wrap" }, personIcon: { marginEnd: e.spaces.space12 }, loadingContainer: { paddingVertical: e.spaces.space16, justifyContent: "center" } })),
                H = v(z);
        },
        412483: (e, a, o) => {
            o.r(a), o.d(a, { ContentPreferencesPage: () => I, default: () => v });
            var t = o(202784),
                n = o(844685),
                r = o(779610),
                d = o(420412),
                l = o(943401),
                s = o(111677),
                i = o.n(s),
                c = o(443781),
                u = o(652904),
                m = o(264922),
                h = o(754393),
                p = o(668214),
                D = o(205253);
            const b = (0, p.Z)()
                    .propsFromState(() => ({ personalizationSettings: D.kQ }))
                    .withAnalytics({ page: "settings", section: "timeline" }),
                f = "exploreHeader",
                M = i().aeddb28a,
                g = i().fcf3e54c,
                _ = i().hfb77cf6,
                E = i().d495680e,
                k = i().f350f0c0,
                y = i().fd3369a2,
                A = i().h1ef00dc,
                S = i().e8f57e08,
                P = i().e8f57e08,
                w = i().hfc86556,
                Z = i().a5f32aa2;
            class I extends t.Component {
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
                    return t.createElement(u.Z, null, t.createElement(m.Z, { location: e, screenType: "primaryDetail", title: M }, t.createElement(n.Z, { testID: f, text: g }), t.createElement(r.Z, { label: A, link: "/settings/search" }), t.createElement(r.Z, { label: this._trendsLabel, link: a }), t.createElement(d.Z, null), t.createElement(n.Z, { text: E }), t.createElement(r.Z, { label: k, link: "/i/flow/language_selector" }), t.createElement(l.Z, { description: y }), t.createElement(d.Z, null), t.createElement(n.Z, { text: _ }), t.createElement(r.Z, { label: w, link: "/settings/mute" }), t.createElement(r.Z, { label: Z, link: "/settings/blocked/all" }), t.createElement(d.Z, null), t.createElement(n.Z, { text: S }), t.createElement(r.Z, { description: this._renderPersonalizationDescription(), label: P, link: "/settings/account/personalization" })));
                }
            }
            I.contextType = c.rC;
            const v = b(I);
        },
        536909: (e, a, o) => {
            o.r(a), o.d(a, { default: () => b });
            var t = o(202784),
                n = o(325686),
                r = o(844685),
                d = o(731708),
                l = o(111677),
                s = o.n(l),
                i = o(652904),
                c = o(293115),
                u = o(264922),
                m = o(267966);
            const h = s().g0ec0bec,
                p = s().g89f4614,
                D = { page: "settings", section: "deactivate_success" },
                b = ({ location: e }) => t.createElement(c.nO, { namespace: D }, t.createElement(i.Z, null, t.createElement(u.Z, { location: e, screenType: "primaryDetail", title: h }, t.createElement(r.Z, { text: p }), t.createElement(n.Z, { style: m.Z.viewItem }, t.createElement(d.ZP, { color: "gray700", size: "subtext2" }, t.createElement(s().I18NFormatMessage, { $i18n: "if2bb997" }))))));
        },
        658679: (e, a, o) => {
            o.r(a), o.d(a, { DeactivateScreen: () => L, default: () => N });
            var t = o(202784),
                n = o(614983),
                r = o.n(n),
                d = o(325686),
                l = o(688715),
                s = o(731708),
                i = o(844685),
                c = o(420412),
                u = o(242454),
                m = o(111677),
                h = o.n(m),
                p = o(443781),
                D = o(652904),
                b = o(240089),
                f = o(472039),
                M = o(267966),
                g = o(71620),
                _ = o(668214),
                E = o(558477);
            const k = (0, _.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("DEACTIVATE"), deactivate: E.Z }))
                    .withAnalytics({ page: "settings", section: "deactivate" }),
                y = h().j035733c,
                A = h().j4a29d52,
                S = h().ea989810,
                P = h().f6e73faa,
                w = h().c3743328,
                Z = h().a20cd24e,
                I = h().fe36fe10,
                v = h().e93b0ae0,
                C = "/settings/your_twitter_data/account",
                T = (0, l.ju)("https://help.x.com/safety-and-security/remove-twitter-profile-from-google-search"),
                x = ({ children: e, withBottomBorder: a = !0 }) => t.createElement(d.Z, { style: [M.Z.viewItem, a && M.Z.bottomBorder] }, t.createElement(s.ZP, { color: "gray700", size: "subtext2" }, e));
            class L extends t.Component {
                constructor(e, a) {
                    super(e, a),
                        (this._handleDeactivateRequest = () => {
                            window.scrollTo(0, 0), this.setState({ showPasswordDialog: !0 });
                        }),
                        (this._handlePasswordSubmit = (e) => {
                            const { createLocalApiErrorHandler: a, deactivate: o } = this.props;
                            o(e, "30_days").catch((e) => (this.setState({ showPasswordDialog: !1 }), a({ showToast: !0 })(e)));
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
                        { showPasswordDialog: o } = this.state;
                    return r()(!!a, "viewerUserId must be defined"), t.createElement(D.Z, null, t.createElement(f.Z, { location: e, onPasswordSubmit: this._handlePasswordSubmit, promptForPassword: o, reenterPasswordLabel: v, saveChangesHeaderLabel: I, submitLabel: P, submitType: "destructiveFilled", title: S }, t.createElement(d.Z, null, t.createElement(b.ZP, { key: a, userId: a, withLink: !1 }), t.createElement(i.Z, { text: w }), t.createElement(x, { withBottomBorder: !1 }, y), t.createElement(i.Z, { text: Z }), t.createElement(x, null, A), t.createElement(x, null, t.createElement(h().I18NFormatMessage, { $i18n: "g124fce9" }, t.createElement(s.ZP, { link: T }, h().fc025d1d))), t.createElement(x, null, t.createElement(h().I18NFormatMessage, { $i18n: "d9ef8fbb" }, t.createElement(s.ZP, { link: C }, h().bb5e039c))), t.createElement(x, null, t.createElement(h().I18NFormatMessage, { $i18n: "b7a3adc1" }, t.createElement(s.ZP, { link: C }, h().j37efff6))), t.createElement(x, { withBottomBorder: !1 }, t.createElement(h().I18NFormatMessage, { $i18n: "f3613d0b" }, t.createElement(s.ZP, { link: "/settings/download_your_data" }, h().ce5bfe12))), t.createElement(c.Z, null), t.createElement(u.Z, { color: "red500", label: P, onPress: this._handleDeactivateRequest }))));
                }
            }
            L.contextType = p.rC;
            const N = k(L);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-0564e869.f7d7415a.js.map
