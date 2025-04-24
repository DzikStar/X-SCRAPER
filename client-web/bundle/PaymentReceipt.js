"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PaymentReceipt"],
    {
        793346: (e, t, n) => {
            n.r(t), n.d(t, { default: () => O });
            var a = n(807896),
                r = n(202784),
                c = n(325686),
                l = n(107267),
                s = n(823161),
                i = n(366635),
                o = n(731708),
                u = n(292627),
                m = n(108362),
                p = n(392237),
                d = n(880428),
                y = n(357818),
                E = n(736063),
                _ = n(293115),
                g = n(125363),
                Z = n(919022),
                h = n(634455),
                f = n(477922),
                T = n(615954),
                v = n(86320),
                b = n(655750),
                w = n(48646),
                C = n(473149),
                x = n(749286),
                I = n(43429),
                N = n(467734),
                k = n(137882),
                z = n(464978),
                A = n(743080),
                P = n(727384);
            const S = { page: "money", section: "transaction-details" },
                D = "X account",
                U = (e) => {
                    const t = (0, g.v9)(Z.ZP.selectViewerUser),
                        n = (0, l.useParams)().transactionId,
                        p = (0, A.jh)(),
                        { get_transaction_by_id: E } = (0, z.Z)(n || ""),
                        U = (0, k.b)({ txId: n || "" }),
                        { amount_local_micro: W, created_at: F, currency: O, description: X, details: q, id: L, product_code: R, reason_code: j, transaction_status: G, transaction_type: J } = E ?? {},
                        H = q?.receiver_results?.result,
                        K = q?.sender_results?.result,
                        M = q?.payment_method,
                        Q = q?.merchant_details,
                        Y = q?.reference_transaction_id,
                        $ = (0, N.Z)({ senderId: K?.rest_id }),
                        B = R === d.x.Interest || "User" !== H?.__typename || "User" !== K?.__typename ? null : $ ? H : K,
                        ee = (0, P.Q1)({ status: G, transactionType: J, isViewerSender: $, createdAt: F, productCode: R, description: X }),
                        te = (0, P.zK)({ transactionType: J, productCode: R, merchantDetails: Q, amountType: ee.amountType }),
                        ne = (0, P.zx)({ referenceTransactionId: Y, transactionType: J }),
                        ae = J === y.x.Deposit || J === y.x.Withdraw ? (0, P.Ou)(M) : null,
                        re = r.useCallback((e, t) => r.createElement(c.Z, { style: V.description, testID: t }, e && e.type === I.dX.x ? r.createElement(r.Fragment, null, r.createElement(s.default, (0, a.Z)({ size: "small" }, e.avatar)), r.createElement(i.Z, (0, a.Z)({ screenNameSize: "body", weight: "normal" }, e.accountName))) : te ? r.createElement(r.Fragment, null, r.createElement(f.G7, { size: "small", type: te.type, uri: te.logo }), r.createElement(T.Z, { name: te.name, website: te.website })) : e ? r.createElement(r.Fragment, null, r.createElement(f.qn, { size: "small", type: e.type, uri: e?.avatar?.uri }), r.createElement(o.ZP, null, e?.accountName?.name)) : r.createElement(o.ZP, null, "This account is unavailable", " ")), [te]),
                        ce = t ? { accountName: { name: t.name, screenName: t.screen_name }, avatar: { uri: t.profile_image_url_https }, accountType: D, type: I.dX.x } : null,
                        le = B && B.legacy ? { accountName: { name: B.legacy.name ?? "", screenName: B.legacy.screen_name ?? "" }, avatar: { uri: B.legacy.profile_image_url_https ?? "" }, accountType: D, type: I.dX.x } : null,
                        se = ee.amountType === I.NU.debit ? ce : (le ?? ae),
                        ie = ee.amountType === I.NU.debit ? (le ?? ae) : ce,
                        oe = (0, P._T)({ status: G });
                    return r.createElement(_.nO, { namespace: S }, r.createElement(u.Z.Modal, null, r.createElement(c.Z, { style: V.scrollContainer }, r.createElement(m.Z, { style: p.root, withWideContainer: !0 }, r.createElement(c.Z, { style: V.content }, B ? r.createElement(x.Z, { avatarWithLink: !0, user: B, usernameWithLink: !0, withCenterAlign: !0 }) : te ? r.createElement(c.Z, { style: V.alignCenter }, r.createElement(f.G7, { size: "xJumbo", type: te.type, uri: te.logo }), r.createElement(T.Z, { name: te.name })) : ae ? r.createElement(c.Z, { style: V.alignCenter }, r.createElement(f.qn, { size: "xJumbo", type: ae.type, uri: ae.avatar?.uri }), r.createElement(v.Z, { account: ae })) : null, W ? r.createElement(h.Z, { amount: W, currency: O, hasCompleted: oe, shouldCenterAlign: !0, type: ee.amountType }) : null, r.createElement(w.Z, { note: ee.description || "", shouldCenterAlign: !0, size: "headline2" }), r.createElement(b.Z, { description: ee.status, title: "Status" }), r.createElement(C.Z, { isViewerSender: $, reasonCode: j, status: G }), r.createElement(b.Z, { description: re(se, "from"), title: "From" }), r.createElement(b.Z, { description: re(ie, "to"), title: "To" }), r.createElement(b.Z, { description: `${ee.createdAt}`, title: "Transaction date" }), ne ? r.createElement(b.Z, { description: r.createElement(o.ZP, { color: "text", link: ne }, Y), title: "Original transaction" }) : null, r.createElement(b.Z, { description: ee.type, title: "Transaction type" }), r.createElement(b.Z, { description: L, title: "Transaction ID" }), r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: V.supportNote }, "If you need support for this transaction, please complete a support request", " ", r.createElement(o.ZP, { color: "text", link: U }, "here"), "."))))));
                },
                W = { context: "TRANSACTION_DETAIL" },
                F = (e) => r.createElement(E.H, { errorConfig: W }, r.createElement(U, e)),
                O = r.memo(F),
                V = p.default.create((e) => ({ scrollContainer: { height: "100vh", overflowY: "auto" }, content: { gap: e.spaces.space8 }, alignCenter: { alignItems: "center", gap: e.spaces.space8 }, supportNote: { paddingVertical: e.spaces.space8 }, userAvatar: { width: "25%", minWidth: e.spaces.space16, height: "auto" }, description: { flexDirection: "row", alignItems: "center", gap: e.spaces.space8 } }));
        },
        353391: (e, t, n) => {
            var a = n(437429),
                r = n(202784),
                c = r.useEffect,
                l = r.useRef;
            e.exports = function (e, t) {
                var n = a(),
                    r = l(null),
                    s = Array.from(e).sort().join("");
                return (
                    c(
                        function () {
                            var a = n.getStore(),
                                c = a.lookupInvalidationState(e),
                                l = a.subscribeToInvalidationState(c, t);
                            return (
                                (r.current = l),
                                function () {
                                    return l.dispose();
                                }
                            );
                        },
                        [s, t, n],
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PaymentReceipt.a6ffe79a.js.map
