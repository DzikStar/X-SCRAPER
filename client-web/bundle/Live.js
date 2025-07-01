"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Live"],
    {
        879596: (e, t, r) => {
            r.d(t, { D: () => a });
            var s = r(111677);
            const a = { defaultToast: { text: r.n(s)().ca96fe6e }, showToast: !0 };
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => f });
            var s = r(202784),
                a = r(476984),
                n = r.n(a),
                o = r(143778),
                l = r(750410),
                u = r(682830);
            const c = "failed",
                i = "loaded",
                d = "loading",
                p = "none";
            class f extends s.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === i,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !n()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: a, icon: n, loadingMessage: o, onRequestRetry: i, render: f, renderFailure: h, retryMessage: b, retryable: g } = this.props;
                    switch (a) {
                        case c:
                            return g ? s.createElement(l.Z, { icon: n, onRequestRetry: i, retryMessage: b }) : r ? s.createElement(u.m, { failureMessage: r }) : h();
                        case d:
                            return s.createElement(u.J, { "aria-label": e, color: t, loadingMessage: o });
                        case p:
                            return null;
                        default:
                            return f();
                    }
                }
            }
            f.defaultProps = { renderFailure: o.Z, retryable: !0 };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Live.aa377efa.js.map
