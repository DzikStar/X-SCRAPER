"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Live"],
    {
        879596: (e, t, r) => {
            r.d(t, { D: () => s });
            var a = r(111677);
            const s = { defaultToast: { text: r.n(a)().ca96fe6e }, showToast: !0 };
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                s = r(476984),
                n = r.n(s),
                l = r(143778),
                o = r(750410),
                i = r(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class p extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !n()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: s, icon: n, loadingMessage: l, onRequestRetry: d, render: p, renderFailure: f, retryMessage: g, retryable: v } = this.props;
                    switch (s) {
                        case c:
                            return v ? a.createElement(o.Z, { icon: n, onRequestRetry: d, retryMessage: g }) : r ? a.createElement(i.m, { failureMessage: r }) : f();
                        case u:
                            return a.createElement(i.J, { "aria-label": e, color: t, loadingMessage: l });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: l.Z, retryable: !0 };
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var a = r(202784),
                s = r(890601),
                n = r(783427),
                l = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const i = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Live.00dffdfa.js.map
