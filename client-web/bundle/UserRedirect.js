"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserRedirect"],
    {
        290402: (e, t, r) => {
            r.d(t, { Z: () => f });
            var s = r(807896),
                a = r(202784),
                n = r(182056),
                o = r(879113),
                c = r(392237),
                i = r(674132),
                d = r.n(i),
                l = r(968478);
            const p = d().aa6e3300,
                u = ({ retryMessage: e, ...t }, r) => {
                    const c = n.Z.isOnline();
                    return a.createElement(o.Z, (0, s.Z)({}, t, { icon: c ? void 0 : a.createElement(l.default, { style: h.icon }), retryMessage: c ? e : p }));
                },
                h = c.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                f = a.forwardRef(u);
        },
        652904: (e, t, r) => {
            r.d(t, { Z: () => l });
            var s = r(202784),
                a = r(500002),
                n = r(668214),
                o = r(997174),
                c = r(118823);
            const i = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: c.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class d extends s.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: r, search: s },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: n, search: o },
                            locationKey: c,
                        } = e;
                    let i = !1;
                    t.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && t.pathname === r && ((this._isInBackground = !1), (i = !0));
                    const d = a || c;
                    ((d && a !== c) || (!d && r !== n) || s !== o || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: r, updateTweetDetailNav: s } = e;
                    t.scribePageImpression(), r(t.contextualScribeNamespace, t.contextualScribeData), s(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const l = (0, a.ZP)(i(d));
        },
        604989: (e, t, r) => {
            r.r(t), r.d(t, { UserRedirectScreen: () => N, default: () => P });
            var s = r(202784),
                a = r(674132),
                n = r.n(a),
                o = r(143778),
                c = r(290402),
                i = r(325686),
                d = r(108362),
                l = r(392237),
                p = r(652904),
                u = r(725516),
                h = r(449067);
            const f = l.default.create((e) => ({ flexGrow: { flexGrow: 1 } })),
                m = s.memo((0, u.Z)(({ children: e, containerStyle: t, title: r }) => s.createElement(p.Z, null, s.createElement(i.Z, { style: f.flexGrow }, s.createElement(h.Z.Configure, { backLocation: "/", title: r }), s.createElement(d.Z, { style: [f.flexGrow, t] }, e)))));
            var _ = r(615656),
                y = r(51525);
            const Z = { [_.ZP.AddressBookLookupNotFound]: { customAction: y.vv }, [_.ZP.GenericUserNotFound]: { customAction: y.vv }, [_.ZP.OtherUserSuspended]: { customAction: y.vv }, showToast: !0 };
            var S = r(71620),
                I = r(668214),
                g = r(919022);
            const E = (e, t) => t.match?.params.userId,
                R = (e, t) => g.ZP.select(e, E(0, t)),
                U = (e, t) => g.ZP.selectFetchStatus(e, E(0, t)),
                v = (0, I.Z)()
                    .propsFromState(() => ({ fetchStatus: U, user: R, userId: E }))
                    .adjustStateProps(({ fetchStatus: e, user: t, userId: r }) => ({ fetchStatus: e, screenName: t?.screen_name, userId: r }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, S.zr)("USER_REDIRECT_SCREEN"), fetchUserIfNeeded: g.ZP.fetchOneIfNeeded }))
                    .withAnalytics({ page: "user_redirect" }),
                w = n().fa98627a;
            class N extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this.fetchAndRedirectIfNeeded = (e = !0) => {
                            const {
                                location: { query: t },
                                screenName: r,
                                userId: s,
                            } = this.props;
                            r && t && t.user_id ? this._redirectToUserIntent(r) : r ? this._redirectToProfileScreen(r, s) : e && this._handleLoadUser();
                        }),
                        (this._handleRetry = () => {
                            this._handleLoadUser();
                        }),
                        (this._handleLoadUser = () => {
                            const { createLocalApiErrorHandler: e, fetchUserIfNeeded: t, userId: r } = this.props;
                            t(r).catch(e(Z));
                        });
                }
                componentDidMount() {
                    this.fetchAndRedirectIfNeeded();
                }
                componentDidUpdate(e) {
                    this.fetchAndRedirectIfNeeded(e.userId !== this.props.userId);
                }
                render() {
                    const { fetchStatus: e } = this.props;
                    return s.createElement(m, { title: w }, s.createElement(c.Z, { fetchStatus: e, onRequestRetry: this._handleRetry, render: o.Z }));
                }
                _redirectToProfileScreen(e, t) {
                    this.props.history.replace(`/${e}`, { userId: t });
                }
                _redirectToUserIntent(e) {
                    this.props.history.replace(`/intent/user?screen_name=${e}`);
                }
            }
            const P = v(N);
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => h });
            var s = r(202784),
                a = r(476984),
                n = r.n(a),
                o = r(143778),
                c = r(750410),
                i = r(682830);
            const d = "failed",
                l = "loaded",
                p = "loading",
                u = "none";
            class h extends s.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === l,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !n()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: a, icon: n, loadingMessage: o, onRequestRetry: l, render: h, renderFailure: f, retryMessage: m, retryable: _ } = this.props;
                    switch (a) {
                        case d:
                            return _ ? s.createElement(c.Z, { icon: n, onRequestRetry: l, retryMessage: m }) : r ? s.createElement(i.m, { failureMessage: r }) : f();
                        case p:
                            return s.createElement(i.J, { "aria-label": e, color: t, loadingMessage: o });
                        case u:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: o.Z, retryable: !0 };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserRedirect.befd61da.js.map
