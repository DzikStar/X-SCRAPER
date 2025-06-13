"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TrustedFriendsRedirect"],
    {
        290402: (e, t, r) => {
            r.d(t, { Z: () => h });
            var s = r(807896),
                n = r(202784),
                a = r(182056),
                o = r(879113),
                c = r(392237),
                i = r(111677),
                d = r.n(i),
                l = r(968478);
            const u = d().aa6e3300,
                f = ({ retryMessage: e, ...t }, r) => {
                    const c = a.Z.isOnline();
                    return n.createElement(o.Z, (0, s.Z)({}, t, { icon: c ? void 0 : n.createElement(l.default, { style: p.icon }), retryMessage: c ? e : u }));
                },
                p = c.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                h = n.forwardRef(f);
        },
        885726: (e, t, r) => {
            r.r(t), r.d(t, { TrustedFriendsRedirect: () => f, default: () => p });
            var s = r(202784),
                n = r(143778),
                a = r(187669),
                o = r(290402),
                c = r(312771),
                i = r(668214),
                d = r(137204);
            const l = (e) => {
                    const t = (0, d.Ln)(e);
                    return t.length ? t[0]?.rest_id : void 0;
                },
                u = (0, i.Z)()
                    .propsFromState(() => ({ trustedFriendsListId: l }))
                    .propsFromActions(() => ({ fetchOrCreateTrustedFriendsList: d.BS })),
                f = (e) => {
                    const { history: t, trustedFriendsListId: r } = e;
                    return (
                        (0, a.q)(() => {
                            e.fetchOrCreateTrustedFriendsList();
                        }),
                        s.useEffect(() => {
                            r && t.replace(`/i/circles/${r}/members`);
                        }, [t, r]),
                        s.createElement(o.Z, { fetchStatus: c.ZP.LOADING, render: n.Z })
                    );
                },
                p = u(f);
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => p });
            var s = r(202784),
                n = r(476984),
                a = r.n(n),
                o = r(143778),
                c = r(750410),
                i = r(682830);
            const d = "failed",
                l = "loaded",
                u = "loading",
                f = "none";
            class p extends s.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === l,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: n, icon: a, loadingMessage: o, onRequestRetry: l, render: p, renderFailure: h, retryMessage: g, retryable: m } = this.props;
                    switch (n) {
                        case d:
                            return m ? s.createElement(c.Z, { icon: a, onRequestRetry: l, retryMessage: g }) : r ? s.createElement(i.m, { failureMessage: r }) : h();
                        case u:
                            return s.createElement(i.J, { "aria-label": e, color: t, loadingMessage: o });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TrustedFriendsRedirect.6a255a6a.js.map
