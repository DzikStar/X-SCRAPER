"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PaymentShared"],
    {
        292546: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(543673), n(240753), n(128399), n(136728);
            var s = n(202784),
                r = n(107267);
            const o = () => {
                const e = (0, r.useLocation)(),
                    t = (0, r.useHistory)(),
                    [n, o] = s.useState(new URLSearchParams(e.search));
                s.useEffect(() => {
                    o(new URLSearchParams(e.search));
                }, [e.search]);
                const a = s.useCallback(
                    (s, r) => {
                        const o = new URLSearchParams(n);
                        o.set(s, r), t.push(`${e.pathname}?${o.toString()}`);
                    },
                    [t, e.pathname, n],
                );
                return [s.useMemo(() => new URLSearchParams(e.search), [e.search]), a];
            };
        },
        762371: (e, t, n) => {
            n.r(t), n.d(t, { default: () => h });
            var s = n(807896),
                r = n(202784),
                o = n(682830),
                a = n(514639),
                i = n(445664),
                c = n(189914),
                u = n(441484),
                m = n(615027),
                l = n(107267),
                p = n(292546);
            const f = ({ isActive: e }) => {
                    const [t] = (0, p.Z)(),
                        n = "notification" === t.get("from"),
                        s = (0, l.useParams)().transactionId;
                    return n && s && !e ? { pathname: a.Cz, state: { inviteTransactionId: s } } : void 0;
                },
                d = ({ Component: e, options: t, ...n }) => {
                    const { permissionsAllOf: s, permissionsAnyOf: o, requireRedirect: c = !0 } = t,
                        { location: l } = n,
                        p = l.state?.cameFromOCF ? "PaymentsFromOcf" : "Payments",
                        { id: d, isActive: h, paymentsRedirectPath: v, permissions: w } = (0, i.Z)({ fetchKey: p });
                    r.useEffect(() => {
                        d && u.Z.updateUserId(d);
                    }, [d]);
                    const S = f({ isActive: h }),
                        y = l.pathname;
                    if (S) return r.createElement(m.Z, { to: S });
                    if (!h && c && y !== v) return r.createElement(m.Z, { to: v });
                    const E = !s || s.every((e) => w?.includes(e)),
                        P = !o || o.some((e) => w?.includes(e));
                    return !w || (E && P) ? r.createElement(e, n) : r.createElement(m.Z, { to: a.Xj });
                };
            function h({ Component: e, options: t, ...n }) {
                const { allowLockedSession: a, permissionsAllOf: i, permissionsAnyOf: u } = t,
                    [m] = (0, c.Z)({ allowLockedSession: !!a });
                return m ? (i || u ? r.createElement(d, (0, s.Z)({ Component: e, options: t }, n)) : r.createElement(e, n)) : r.createElement(o.J, null);
            }
        },
        353391: (e, t, n) => {
            var s = n(437429),
                r = n(202784),
                o = r.useEffect,
                a = r.useRef;
            e.exports = function (e, t) {
                var n = s(),
                    r = a(null),
                    i = Array.from(e).sort().join("");
                return (
                    o(
                        function () {
                            var s = n.getStore(),
                                o = s.lookupInvalidationState(e),
                                a = s.subscribeToInvalidationState(o, t);
                            return (
                                (r.current = a),
                                function () {
                                    return a.dispose();
                                }
                            );
                        },
                        [i, t, n],
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PaymentShared.bf840d2a.js.map
