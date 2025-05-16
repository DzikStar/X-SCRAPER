"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserRedirect"],
    {
        290402: (e, t, r) => {
            r.d(t, { Z: () => m });
            var s = r(807896),
                a = r(202784),
                n = r(182056),
                o = r(879113),
                c = r(392237),
                i = r(332920),
                d = r.n(i),
                l = r(968478);
            const h = d().aa6e3300,
                u = ({ retryMessage: e, ...t }, r) => {
                    const c = n.Z.isOnline();
                    return a.createElement(o.Z, (0, s.Z)({}, t, { icon: c ? void 0 : a.createElement(l.default, { style: p.icon }), retryMessage: c ? e : h }));
                },
                p = c.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = a.forwardRef(u);
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
            r.r(t), r.d(t, { UserRedirectScreen: () => b, default: () => N });
            var s = r(202784),
                a = r(332920),
                n = r.n(a),
                o = r(143778),
                c = r(290402),
                i = r(325686),
                d = r(108362),
                l = r(392237),
                h = r(652904),
                u = r(725516),
                p = r(449067);
            const m = l.default.create((e) => ({ flexGrow: { flexGrow: 1 } })),
                f = s.memo((0, u.Z)(({ children: e, containerStyle: t, title: r }) => s.createElement(h.Z, null, s.createElement(i.Z, { style: m.flexGrow }, s.createElement(p.Z.Configure, { backLocation: "/", title: r }), s.createElement(d.Z, { style: [m.flexGrow, t] }, e)))));
            var v = r(615656),
                y = r(51525);
            const Z = { [v.ZP.AddressBookLookupNotFound]: { customAction: y.vv }, [v.ZP.GenericUserNotFound]: { customAction: y.vv }, [v.ZP.OtherUserSuspended]: { customAction: y.vv }, showToast: !0 };
            var _ = r(71620),
                g = r(668214),
                S = r(919022);
            const I = (e, t) => t.match?.params.userId,
                w = (e, t) => S.ZP.select(e, I(0, t)),
                E = (e, t) => S.ZP.selectFetchStatus(e, I(0, t)),
                R = (0, g.Z)()
                    .propsFromState(() => ({ fetchStatus: E, user: w, userId: I }))
                    .adjustStateProps(({ fetchStatus: e, user: t, userId: r }) => ({ fetchStatus: e, screenName: t?.screen_name, userId: r }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("USER_REDIRECT_SCREEN"), fetchUserIfNeeded: S.ZP.fetchOneIfNeeded }))
                    .withAnalytics({ page: "user_redirect" }),
                U = n().fa98627a;
            class b extends s.Component {
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
                    return s.createElement(f, { title: U }, s.createElement(c.Z, { fetchStatus: e, onRequestRetry: this._handleRetry, render: o.Z }));
                }
                _redirectToProfileScreen(e, t) {
                    this.props.history.replace(`/${e}`, { userId: t });
                }
                _redirectToUserIntent(e) {
                    this.props.history.replace(`/intent/user?screen_name=${e}`);
                }
            }
            const N = R(b);
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => p });
            var s = r(202784),
                a = r(476984),
                n = r.n(a),
                o = r(143778),
                c = r(750410),
                i = r(682830);
            const d = "failed",
                l = "loaded",
                h = "loading",
                u = "none";
            class p extends s.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === l,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !n()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: a, icon: n, loadingMessage: o, onRequestRetry: l, render: p, renderFailure: m, retryMessage: f, retryable: v } = this.props;
                    switch (a) {
                        case d:
                            return v ? s.createElement(c.Z, { icon: n, onRequestRetry: l, retryMessage: f }) : r ? s.createElement(i.m, { failureMessage: r }) : m();
                        case h:
                            return s.createElement(i.J, { "aria-label": e, color: t, loadingMessage: o });
                        case u:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: o.Z, retryable: !0 };
        },
        748138: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var s = r(202784),
                a = r(890601),
                n = r(783427),
                o = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: s.createElement("g", null, s.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const i = c;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserRedirect.72e86a5a.js.map
