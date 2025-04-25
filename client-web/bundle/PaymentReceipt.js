"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PaymentReceipt"],
    {
        793346: (e, t, n) => {
            n.r(t), n.d(t, { default: () => F });
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
                C = n(48646),
                w = n(749286),
                x = n(43429),
                I = n(467734),
                N = n(554853),
                k = n(464978),
                z = n(743080),
                A = n(727384);
            const P = { page: "money", section: "transaction-details" },
                S = "X account",
                D = (e) => {
                    const t = (0, g.v9)(Z.ZP.selectViewerUser),
                        n = (0, l.useParams)().transactionId,
                        p = (0, z.jh)(),
                        { get_transaction_by_id: E } = (0, k.Z)(n || ""),
                        D = (0, N.b)({ txId: n || "" }),
                        { amount_local_micro: U, created_at: W, currency: F, description: X, details: q, id: L, product_code: R, reason_code: V, transaction_status: j, transaction_type: G } = E ?? {},
                        J = q?.receiver_results?.result,
                        H = q?.sender_results?.result,
                        K = q?.payment_method,
                        M = q?.merchant_details,
                        Q = q?.reference_transaction_id,
                        Y = (0, I.Z)({ senderId: H?.rest_id }),
                        $ = R === d.x.Interest || "User" !== J?.__typename || "User" !== H?.__typename ? null : Y ? J : H,
                        B = (0, A.Q1)({ status: j, transactionType: G, isViewerSender: Y, createdAt: W, productCode: R, description: X, reasonCode: V }),
                        ee = (0, A.zK)({ transactionType: G, productCode: R, merchantDetails: M, amountType: B.amountType }),
                        te = (0, A.zx)({ referenceTransactionId: Q, transactionType: G }),
                        ne = G === y.x.Deposit || G === y.x.Withdraw ? (0, A.Ou)(K) : null,
                        ae = r.useCallback((e, t) => r.createElement(c.Z, { style: O.description, testID: t }, e && e.type === x.dX.x ? r.createElement(r.Fragment, null, r.createElement(s.default, (0, a.Z)({ size: "small" }, e.avatar)), r.createElement(i.Z, (0, a.Z)({ screenNameSize: "body", weight: "normal" }, e.accountName))) : ee ? r.createElement(r.Fragment, null, r.createElement(f.G7, { size: "small", type: ee.type, uri: ee.logo }), r.createElement(T.Z, { name: ee.name, website: ee.website })) : e ? r.createElement(r.Fragment, null, r.createElement(f.qn, { size: "small", type: e.type, uri: e?.avatar?.uri }), r.createElement(o.ZP, null, e?.accountName?.name)) : r.createElement(o.ZP, null, "This account is unavailable", " ")), [ee]),
                        re = t ? { accountName: { name: t.name, screenName: t.screen_name }, avatar: { uri: t.profile_image_url_https }, accountType: S, type: x.dX.x } : null,
                        ce = $ && $.legacy ? { accountName: { name: $.legacy.name ?? "", screenName: $.legacy.screen_name ?? "" }, avatar: { uri: $.legacy.profile_image_url_https ?? "" }, accountType: S, type: x.dX.x } : null,
                        le = B.amountType === x.NU.debit ? re : (ce ?? ne),
                        se = B.amountType === x.NU.debit ? (ce ?? ne) : re,
                        ie = (0, A._T)({ status: j });
                    return r.createElement(_.nO, { namespace: P }, r.createElement(u.Z.Modal, null, r.createElement(c.Z, { style: O.scrollContainer }, r.createElement(m.Z, { style: p.root, withWideContainer: !0 }, r.createElement(c.Z, { style: O.content }, $ ? r.createElement(w.Z, { avatarWithLink: !0, user: $, usernameWithLink: !0, withCenterAlign: !0 }) : ee ? r.createElement(c.Z, { style: O.alignCenter }, r.createElement(f.G7, { size: "xJumbo", type: ee.type, uri: ee.logo }), r.createElement(T.Z, { name: ee.name })) : ne ? r.createElement(c.Z, { style: O.alignCenter }, r.createElement(f.qn, { size: "xJumbo", type: ne.type, uri: ne.avatar?.uri }), r.createElement(v.Z, { account: ne })) : null, U ? r.createElement(h.Z, { amount: U, currency: F, hasCompleted: ie, shouldCenterAlign: !0, type: B.amountType }) : null, r.createElement(C.Z, { note: B.description || "", shouldCenterAlign: !0, size: "headline2" }), r.createElement(b.Z, { description: B.status, title: "Status" }), r.createElement(b.Z, { description: ae(le, "from"), title: "From" }), r.createElement(b.Z, { description: ae(se, "to"), title: "To" }), r.createElement(b.Z, { description: `${B.createdAt}`, title: "Transaction date" }), te ? r.createElement(b.Z, { description: r.createElement(o.ZP, { color: "text", link: te }, Q), title: "Original transaction" }) : null, r.createElement(b.Z, { description: B.type, title: "Transaction type" }), r.createElement(b.Z, { description: L, title: "Transaction ID" }), r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: O.supportNote }, "If you need support for this transaction, please complete a support request", " ", r.createElement(o.ZP, { color: "text", link: D }, "here"), "."))))));
                },
                U = { context: "TRANSACTION_DETAIL" },
                W = (e) => r.createElement(E.H, { errorConfig: U }, r.createElement(D, e)),
                F = r.memo(W),
                O = p.default.create((e) => ({ scrollContainer: { height: "100vh", overflowY: "auto" }, content: { gap: e.spaces.space8 }, alignCenter: { alignItems: "center", gap: e.spaces.space8 }, supportNote: { paddingVertical: e.spaces.space8 }, userAvatar: { width: "25%", minWidth: e.spaces.space16, height: "auto" }, description: { flexDirection: "row", alignItems: "center", gap: e.spaces.space8 } }));
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PaymentReceipt.4daf9c2a.js.map
