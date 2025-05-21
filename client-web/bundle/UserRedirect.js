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
            const u = d().aa6e3300,
                h = ({ retryMessage: e, ...t }, r) => {
                    const c = n.Z.isOnline();
                    return a.createElement(o.Z, (0, s.Z)({}, t, { icon: c ? void 0 : a.createElement(l.default, { style: p.icon }), retryMessage: c ? e : u }));
                },
                p = c.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = a.forwardRef(h);
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
                u = r(652904),
                h = r(725516),
                p = r(449067);
            const m = l.default.create((e) => ({ flexGrow: { flexGrow: 1 } })),
                f = s.memo((0, h.Z)(({ children: e, containerStyle: t, title: r }) => s.createElement(u.Z, null, s.createElement(i.Z, { style: m.flexGrow }, s.createElement(p.Z.Configure, { backLocation: "/", title: r }), s.createElement(d.Z, { style: [m.flexGrow, t] }, e)))));
            var y = r(615656),
                Z = r(51525);
            const _ = { [y.ZP.AddressBookLookupNotFound]: { customAction: Z.vv }, [y.ZP.GenericUserNotFound]: { customAction: Z.vv }, [y.ZP.OtherUserSuspended]: { customAction: Z.vv }, showToast: !0 };
            var g = r(71620),
                S = r(668214),
                v = r(919022);
            const I = (e, t) => t.match?.params.userId,
                w = (e, t) => v.ZP.select(e, I(0, t)),
                E = (e, t) => v.ZP.selectFetchStatus(e, I(0, t)),
                R = (0, S.Z)()
                    .propsFromState(() => ({ fetchStatus: E, user: w, userId: I }))
                    .adjustStateProps(({ fetchStatus: e, user: t, userId: r }) => ({ fetchStatus: e, screenName: t?.screen_name, userId: r }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("USER_REDIRECT_SCREEN"), fetchUserIfNeeded: v.ZP.fetchOneIfNeeded }))
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
                            t(r).catch(e(_));
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
                u = "loading",
                h = "none";
            class p extends s.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === l,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !n()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: a, icon: n, loadingMessage: o, onRequestRetry: l, render: p, renderFailure: m, retryMessage: f, retryable: y } = this.props;
                    switch (a) {
                        case d:
                            return y ? s.createElement(c.Z, { icon: n, onRequestRetry: l, retryMessage: f }) : r ? s.createElement(i.m, { failureMessage: r }) : m();
                        case u:
                            return s.createElement(i.J, { "aria-label": e, color: t, loadingMessage: o });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: o.Z, retryable: !0 };
        },
        41065: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var s = r(202784),
                a = r(890601),
                n = r(783427),
                o = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: s.createElement("g", null, s.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const i = c;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserRedirect.39f6012a.js.map
