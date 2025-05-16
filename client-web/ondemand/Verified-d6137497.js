"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-d6137497"],
    {
        363635: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ge });
            var n = a(202784),
                i = a(712696),
                r = a.n(i),
                o = a(107267),
                l = a(187669),
                s = a(506448),
                c = a(150943),
                d = a(736063),
                u = a(725405),
                f = a(112432),
                m = (a(136728), a(529356)),
                p = a(332920),
                b = a.n(p),
                C = a(952793),
                h = a(992942),
                g = a(198433),
                _ = a(491339);
            const y = b().j7592572,
                v = b().ee778942,
                S = (Object.freeze({ ConfirmationStep: "ConfirmationStep", UnclaimedCreditStep: "UnclaimedCreditStep", ScheduleCallStep: "ScheduleCallStep", CreditOfferStep: "CreditOfferStep", CreditSuccessStep: "CreditSuccessStep", FinalConfirmationStep: "FinalConfirmationStep" }), ({ style: e }) => n.createElement(h.Z, { "aria-label": y, source: _, style: e })),
                E = ({ style: e }) => n.createElement(h.Z, { "aria-label": v, source: g, style: e }),
                F = b().ff0edac0,
                A = b().h2ac0348,
                Z = b().dbf9667e,
                k = n.createElement(n.Fragment, null, n.createElement(b().I18NFormatMessage, { $i18n: "b94bf5f5" }), n.createElement("br", null), n.createElement("br", null), n.createElement(b().I18NFormatMessage, { $i18n: "d4109f93" })),
                I = n.createElement(n.Fragment, null, n.createElement(b().I18NFormatMessage, { $i18n: "c5b26ddf" })),
                O = ({ hasCreditOffer: e, hasRedeemableCredit: t }) => {
                    const a = (0, o.useHistory)(),
                        i = n.useCallback(() => {
                            a.push("/i/verified");
                        }, [a]),
                        r = n.useCallback(() => {
                            const n = { step: t ? "UnclaimedCreditStep" : e ? "CreditOfferStep" : "FinalConfirmationStep" };
                            a.push("/i/verified/cancel", n);
                        }, [a, t, e]),
                        l = (0, C.hC)("verified_vo_cancel_confirmation_step_updated_copy") ? I : k;
                    return n.createElement(m.Z, { actionLabel: A, graphic: S, graphicDisplayMode: "illustration", headline: F, onAction: i, onClose: i, onSecondaryAction: r, secondaryActionLabel: Z, subtext: l });
                };
            var w = a(731708),
                x = a(40610),
                M = a(392237),
                L = a(97882),
                D = a(176562);
            const U = b().fdd57981,
                z = b().i032a231,
                N = b().hd7d278c,
                T = b().ef4602ec,
                $ = b().c02e7e3c,
                H = ({ amountInUsd: e, daysOfCouponInterval: t, daysToWaitForFirstRedeemable: a, numberOfCoupons: i, offerId: r }) => {
                    const l = (0, o.useHistory)(),
                        [s, c] = (0, D.Z)(),
                        [d, u] = n.useState(),
                        f = n.useCallback(() => {
                            l.push("/i/verified");
                        }, [l]),
                        p = n.useCallback(() => {
                            r &&
                                s({ offer_id: r, offer_type: "Coupon", purpose: "CancellationRetention" })
                                    .then((e) => {
                                        const t = e.accept_verified_organization_offer?.__typename;
                                        if ("AcceptVerifiedOrganizationOfferFailure" !== t) {
                                            const e = { step: "CreditSuccessStep" };
                                            l.push("/i/verified/cancel", e);
                                        } else u(e.accept_verified_organization_offer?.message);
                                    })
                                    .catch(() => {
                                        u(T);
                                    });
                        }, [l, s, r]),
                        C = n.useCallback(() => {
                            l.push("/i/verified/cancel", { step: "FinalConfirmationStep" });
                        }, [l]),
                        h = e ? (0, L.x)({ amount: e, currencyCode: "USD", removeTrailingZeros: !0, formatter: 1 }) : null,
                        g = i ? i > 1 : null,
                        _ = i && t ? i * t : null,
                        y = e && i ? (0, L.x)({ amount: e * i, currencyCode: "USD", removeTrailingZeros: !0, formatter: 1 }) : null,
                        v = t && h && _ ? n.createElement(b().I18NFormatMessage, { $i18n: "h06e7c87", creditAmount: h, daysOfCouponInterval: t, totalDays: _ }) : null,
                        E = a && h ? n.createElement(b().I18NFormatMessage, { $i18n: "b602e60f", creditAmount: h, daysToWaitForFirstRedeemable: a }) : null,
                        F = n.createElement(n.Fragment, null, g ? v : E, n.createElement(w.ZP, { weight: "bold" }, n.createElement(b().I18NFormatMessage, { $i18n: "fa5bbb59" })), d ? n.createElement(x.Z.Danger, { style: R.error, text: d }) : null);
                    return n.createElement(m.Z, { actionDisabled: c, actionLabel: c ? $ : z({ totalAmount: y }), graphic: S, graphicDisplayMode: "illustration", headline: U({ totalAmount: y }), onAction: p, onClose: f, onSecondaryAction: C, secondaryActionLabel: N, subtext: F });
                },
                R = M.default.create((e) => ({ error: { marginTop: e.spaces.space16 } })),
                V = b().jf8a0dea,
                j = b().ebbb3154,
                P = () => {
                    const e = n.useCallback(() => {
                        window.location.href = "/i/verified-advertising";
                    }, []);
                    return n.createElement(m.Z, { actionLabel: j, graphic: S, graphicDisplayMode: "illustration", headline: V, onAction: e, onClose: e, subtext: null });
                };
            var W = a(976902),
                q = a(325686),
                B = (a(585488), a(351743)),
                G = a.n(B),
                J = a(167630),
                K = a(443781),
                Q = a(668214),
                X = a(215929);
            const Y = b().j1f68dda,
                ee = b().f5b352ec,
                te = b().h2ac0348,
                ae = { headline: { loading: b().c9c3464c, loaded: b().dd3a293c, failed: b().faa0f956 }, primaryActionLabel: { loading: void 0, loaded: b().b28289ea, failed: b().deaf5b16 }, subtext: { loading: b().a452ab68, loaded: b().b36f74ae, failed: "" } },
                ne = n.createElement(b().I18NFormatMessage, { $i18n: "ceadabdd" }),
                ie = W.Z,
                re = (0, Q.Z)()
                    .propsFromActions(() => ({ fetchUserClaims: X.rS }))
                    .withAnalytics({ page: "verified", section: "settings" })(({ fetchUserClaims: e }) => {
                    const t = (0, o.useHistory)(),
                        a = (0, u.Z)(),
                        [i] = G()(ie),
                        [r, l] = n.useState(!1),
                        [s, c] = n.useState("loaded"),
                        { userClaims: d } = n.useContext(K.rC),
                        f = (0, C.hC)("subscriptions_stripe_testing"),
                        p = n.useCallback(() => {
                            t.push("/i/verified");
                        }, [t]),
                        b = n.useCallback(() => {
                            let n = 0;
                            const i = f ? 20 : 5;
                            c("loading");
                            const r = setInterval(() => {
                                d.isPaidVerifiedOrg() || d.isFreeVerifiedOrg() || (c("loaded"), clearInterval(r), a.scribe({ page: "verified-organizations", section: "cancel", action: "success" }), t.go(0)), n >= i ? (c("failed"), clearInterval(r), a.scribe({ page: "verified-organizations", section: "cancel", action: "failure" })) : ((n += 1), e({}));
                            }, 1e3);
                        }, [a, t, d, f, e]),
                        h = n.useCallback(() => {
                            i({
                                variables: {},
                                onCompleted: () => {
                                    b(), l(!0);
                                },
                            }),
                                a.scribe({ page: "verified-organizations", section: "cancel", action: "click" });
                        }, [a, b, i]),
                        g = n.createElement(m.Z, { actionLabel: ee, actionType: "destructiveFilled", graphic: E, graphicDisplayMode: "illustration", headline: Y, onAction: h, onClose: p, onSecondaryAction: p, secondaryActionLabel: te, subtext: ne }),
                        _ = n.useMemo(() => ("loading" === s ? n.createElement(q.Z, { style: { width: "100%" } }, n.createElement(w.ZP, null, ae.subtext.loading), n.createElement(J.Z, { style: oe.activityIndicator })) : ae.subtext[s]), [s]),
                        y = n.createElement(m.Z, {
                            actionLabel: ae.primaryActionLabel[s],
                            graphicDisplayMode: "none",
                            headline: ae.headline[s],
                            onAction:
                                "failed" === s
                                    ? h
                                    : () => {
                                          t.push("/");
                                      },
                            subtext: _,
                        });
                    return n.createElement(n.Fragment, null, r ? null : g, r ? y : null);
                }),
                oe = M.default.create((e) => ({ activityIndicator: { marginTop: e.spaces.space12 } })),
                le = b().b2297a4a,
                se = b().h3bdbc54,
                ce = b().i135d64e,
                de = n.createElement(n.Fragment, null, n.createElement(b().I18NFormatMessage, { $i18n: "e269f39d" })),
                ue = ({ hasCreditOffer: e }) => {
                    const t = (0, o.useHistory)(),
                        a = n.useCallback(() => {
                            t.push("/i/verified");
                        }, [t]),
                        i = n.useCallback(() => {
                            window.open("https://cal.com/x-adrian/x-support", "_blank")?.focus();
                        }, []),
                        r = n.useCallback(() => {
                            const a = { step: e ? "CreditOfferStep" : "FinalConfirmationStep" };
                            t.push("/i/verified/cancel", a);
                        }, [t, e]);
                    return n.createElement(m.Z, { actionLabel: se, graphic: S, graphicDisplayMode: "illustration", headline: le, onAction: i, onClose: a, onSecondaryAction: r, secondaryActionLabel: ce, subtext: de });
                },
                fe = b().g275882d,
                me = b().ib085ed6,
                pe = b().i135d64e,
                be = n.createElement(n.Fragment, null, n.createElement(b().I18NFormatMessage, { $i18n: "e9565acf" })),
                Ce = ({ hasCreditOffer: e, redeemableCredit: t }) => {
                    const a = (0, o.useHistory)(),
                        i = n.useCallback(() => {
                            a.push("/i/verified");
                        }, [a]),
                        r = n.useCallback(() => {
                            a.push("/i/verified-advertising");
                        }, [a]),
                        l = n.useCallback(() => {
                            const t = { step: e ? "CreditOfferStep" : "FinalConfirmationStep" };
                            a.push("/i/verified/cancel", t);
                        }, [a, e]);
                    return n.createElement(m.Z, { actionLabel: me, graphic: S, graphicDisplayMode: "illustration", headline: fe({ creditAmount: (0, L.x)({ amount: parseInt(t?.promotion.coupon_amount_in_local?.amount, 10), currencyCode: t?.promotion.coupon_amount_in_local?.currency_code.toUpperCase(), formatter: 1, removeTrailingZeros: !0 }) }), onAction: r, onClose: i, onSecondaryAction: l, secondaryActionLabel: pe, subtext: be });
                },
                he = (e) => {
                    const t = (0, o.useHistory)(),
                        a = (0, u.Z)(),
                        i = r()(c.Z, {}),
                        d = r()(s.Z, {}, { fetchPolicy: "network-only" }),
                        [m] = (0, f.Z)();
                    (0, l.q)(() => {
                        m({ user_activity_type: "CancellationInitiated" });
                    });
                    const p = (i?.viewer.user_results.result.list_scheduled_promotions?.length ? i.viewer.user_results.result.list_scheduled_promotions : []).find((e) => "Redeemable" === e.status),
                        b = d?.viewer?.user_results.result.list_verified_organization_offers?.offers.length ? d.viewer?.user_results.result.list_verified_organization_offers?.offers[0] : null,
                        C = t.location.state,
                        h = C?.step;
                    n.useEffect(() => {
                        a.scribe({ page: "verified-organizations", section: "cancel-flow", component: h, action: "impression" });
                    });
                    return n.useCallback(() => {
                        switch (h) {
                            case void 0:
                            case "ConfirmationStep":
                                return n.createElement(O, { hasCreditOffer: !!b, hasRedeemableCredit: !!p });
                            case "UnclaimedCreditStep":
                                return n.createElement(Ce, { hasCreditOffer: !!b, redeemableCredit: p });
                            case "ScheduleCallStep":
                                return n.createElement(ue, { hasCreditOffer: !!b });
                            case "CreditOfferStep":
                                return n.createElement(H, { amountInUsd: b?.metadata.amount_in_usd, daysOfCouponInterval: b?.metadata.days_of_coupon_interval, daysToWaitForFirstRedeemable: b?.metadata.days_to_wait_for_first_redeemable, numberOfCoupons: b?.metadata.number_of_coupons, offerId: b?.offer_id });
                            case "CreditSuccessStep":
                                return n.createElement(P, null);
                            case "FinalConfirmationStep":
                                return n.createElement(re, null);
                            default:
                                return null;
                        }
                    }, [h, p, b])();
                },
                ge = (e) => n.createElement(d.H, { errorConfig: { context: "VerifiedOrgCancelFlow" } }, n.createElement(he, e));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-d6137497.11938aea.js.map
