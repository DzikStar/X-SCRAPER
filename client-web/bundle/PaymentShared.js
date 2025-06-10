"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PaymentShared"],
    {
        292546: (e, t, n) => {
            n.d(t, { Z: () => a });
            n(543673), n(240753), n(128399), n(136728);
            var s = n(202784),
                r = n(107267);
            const a = () => {
                const e = (0, r.useLocation)(),
                    t = (0, r.useHistory)(),
                    [n, a] = s.useState(new URLSearchParams(e.search));
                s.useEffect(() => {
                    a(new URLSearchParams(e.search));
                }, [e.search]);
                const o = s.useCallback(
                    (s, r) => {
                        const a = new URLSearchParams(n);
                        a.set(s, r), t.push(`${e.pathname}?${a.toString()}`);
                    },
                    [t, e.pathname, n],
                );
                return [s.useMemo(() => new URLSearchParams(e.search), [e.search]), o];
            };
        },
        762371: (e, t, n) => {
            n.r(t), n.d(t, { default: () => h });
            var s = n(807896),
                r = n(202784),
                a = n(682830),
                o = n(514639),
                c = n(445664),
                i = n(189914),
                u = n(441484),
                m = n(615027),
                l = n(107267),
                f = n(292546);
            const p = ({ isActive: e }) => {
                    const [t] = (0, f.Z)(),
                        n = "notification" === t.get("from"),
                        s = (0, l.useParams)().transactionId;
                    return n && s && !e ? { pathname: o.Cz, state: { inviteTransactionId: s } } : void 0;
                },
                d = ({ Component: e, options: t, ...n }) => {
                    const { permissionsAllOf: s, permissionsAnyOf: a, requireRedirect: i = !0 } = t,
                        { location: l } = n,
                        f = l.state?.cameFromOCF ? "PaymentsFromOcf" : "Payments",
                        { id: d, isActive: h, paymentsRedirectPath: v, permissions: w } = (0, c.Z)({ fetchKey: f });
                    r.useEffect(() => {
                        d && u.Z.updateUserId(d);
                    }, [d]);
                    const S = p({ isActive: h }),
                        E = l.pathname;
                    if (S) return r.createElement(m.Z, { to: S });
                    if (!h && i && E !== v) return r.createElement(m.Z, { to: v });
                    const y = !s || s.every((e) => w?.includes(e)),
                        Z = !a || a.some((e) => w?.includes(e));
                    return !w || (y && Z) ? r.createElement(e, n) : r.createElement(m.Z, { to: o.Xj });
                };
            function h({ Component: e, options: t, ...n }) {
                const { allowLockedSession: o, permissionsAllOf: c, permissionsAnyOf: u } = t,
                    [m] = (0, i.Z)({ allowLockedSession: !!o });
                return m ? (c || u ? r.createElement(d, (0, s.Z)({ Component: e, options: t }, n)) : r.createElement(e, n)) : r.createElement(a.J, null);
            }
        },
        195319: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var s = n(202784),
                r = n(514639),
                a = n(615027);
            function o() {
                return s.createElement(a.Z, { to: r.Js });
            }
        },
        353391: (e, t, n) => {
            var s = n(437429),
                r = n(202784),
                a = r.useEffect,
                o = r.useRef;
            e.exports = function (e, t) {
                var n = s(),
                    r = o(null),
                    c = Array.from(e).sort().join("");
                return (
                    a(
                        function () {
                            var s = n.getStore(),
                                a = s.lookupInvalidationState(e),
                                o = s.subscribeToInvalidationState(a, t);
                            return (
                                (r.current = o),
                                function () {
                                    return o.dispose();
                                }
                            );
                        },
                        [c, t, n],
                    ),
                    {
                        dispose: function () {
                            null != r.current && r.current.dispose();
                        },
                    }
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PaymentShared.3e970ffa.js.map
