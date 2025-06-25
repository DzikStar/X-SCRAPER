"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ProfileRedirect"],
    {
        290402: (e, r, t) => {
            t.d(r, { Z: () => g });
            var s = t(807896),
                a = t(202784),
                n = t(182056),
                o = t(879113),
                c = t(392237),
                l = t(111677),
                i = t.n(l),
                u = t(968478);
            const d = i().aa6e3300,
                f = ({ retryMessage: e, ...r }, t) => {
                    const c = n.Z.isOnline();
                    return a.createElement(o.Z, (0, s.Z)({}, r, { icon: c ? void 0 : a.createElement(u.default, { style: p.icon }), retryMessage: c ? e : d }));
                },
                p = c.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                g = a.forwardRef(f);
        },
        2689: (e, r, t) => {
            t.r(r), t.d(r, { ProfileRedirect: () => d, default: () => f });
            var s = t(202784),
                a = t(143778),
                n = t(290402),
                o = t(312771),
                c = t(668214),
                l = t(919022);
            const i = (e) => {
                    const r = l.ZP.selectLoggedInUser(e);
                    return r ? r.screen_name : void 0;
                },
                u = (0, c.Z)().propsFromState(() => ({ screenName: i })),
                d = (e) => {
                    const { history: r, screenName: t } = e;
                    return (
                        s.useEffect(() => {
                            r.replace(`/${t || ""}`);
                        }, [r, t]),
                        s.createElement(n.Z, { fetchStatus: o.ZP.LOADING, render: a.Z })
                    );
                },
                f = u(d);
        },
        879113: (e, r, t) => {
            t.d(r, { Z: () => p });
            var s = t(202784),
                a = t(476984),
                n = t.n(a),
                o = t(143778),
                c = t(750410),
                l = t(682830);
            const i = "failed",
                u = "loaded",
                d = "loading",
                f = "none";
            class p extends s.Component {
                shouldComponentUpdate(e) {
                    const r = e.fetchStatus === u,
                        t = this.props.fetchStatus !== e.fetchStatus;
                    return !(!r && !t) || !n()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: r, failureMessage: t, fetchStatus: a, icon: n, loadingMessage: o, onRequestRetry: u, render: p, renderFailure: g, retryMessage: h, retryable: m } = this.props;
                    switch (a) {
                        case i:
                            return m ? s.createElement(c.Z, { icon: n, onRequestRetry: u, retryMessage: h }) : t ? s.createElement(l.m, { failureMessage: t }) : g();
                        case d:
                            return s.createElement(l.J, { "aria-label": e, color: r, loadingMessage: o });
                        case f:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: o.Z, retryable: !0 };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ProfileRedirect.cc2ddd4a.js.map
