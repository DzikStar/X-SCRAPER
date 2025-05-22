"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-b08cea6e"],
    {
        550496: (e, r, t) => {
            t.d(r, { DR: () => E, ZH: () => g, HF: () => b.Z, QG: () => i.Z, ao: () => v, kC: () => P.Z, n5: () => C });
            var i = t(432883),
                o = (t(571372), t(303626)),
                n = t(796634),
                s = t(202784),
                a = (t(585488), t(277660)),
                c = t.n(a),
                _ = t(351743),
                d = t.n(_),
                u = t(236012),
                l = t(700797);
            const p = n.Z,
                m = o.Z,
                v = ({ currentUserIds: e, itemRef: r }) => {
                    const t = c()(p, r),
                        i = t.invitee_id_results.result,
                        [o, n] = d()(m);
                    return [
                        s.useCallback(
                            () =>
                                new Promise((r, n) => {
                                    if (i && "User" !== i.__typename) return n(new Error("done"));
                                    const s = (0, l.oR)(e.__id, "AffiliatesScreenAffiliatesQuery_verified_organization_invitations", { invitation_type: u.x.Affiliate });
                                    o({ variables: { organization_id: e.restId, invitee_id: i.rest_id, invitation_id: t.__id, sliceID: s }, onCompleted: (e, t) => r(), onError: n });
                                }),
                            [o, e, t, i],
                        ),
                        n,
                    ];
                };
            var f = t(443781);
            const g = () => {
                const { userClaims: e } = s.useContext(f.rC);
                return e.isGovVerifiedOrg() ? { government_affiliate_invitation_detail: { teams: null } } : { affiliate_invitation_detail: { teams: null } };
            };
            var b = t(858434),
                w = t(384946),
                h = t(712696),
                y = t.n(h);
            const Z = w.Z,
                C = () => {
                    const { verified_organization_config: e } = y()(Z, {}),
                        r = e?.affiliate_limit;
                    return { affiliateLimit: r, cacheKey: e?.__id };
                };
            t(199232);
            var P = t(497110);
            const k = t(391435).Z,
                E = () => {
                    const [e, r] = d()(k);
                    return [
                        s.useCallback(
                            ({ __id: r, forAdsAccountId: t, programId: i, scheduleId: o }) =>
                                new Promise((n, s) => {
                                    e({
                                        variables: { for_ads_account_id: t, scheduled_id: o, program_id: i },
                                        onCompleted: (e, r) => n(e),
                                        updater: (e) => {
                                            if (r) {
                                                const i = e.get(r);
                                                if (i) {
                                                    const e = i.getLinkedRecord("promotion");
                                                    i.setValue("Active", "status"), e && e.setValue(t, "enrolled_for_ads_account_id");
                                                }
                                            }
                                        },
                                        onError: s,
                                    });
                                }),
                            [e],
                        ),
                        r,
                    ];
                };
        },
        176562: (e, r, t) => {
            t.d(r, { Z: () => c });
            var i = t(201222),
                o = t(202784),
                n = (t(585488), t(351743)),
                s = t.n(n);
            const a = i.Z,
                c = () => {
                    const [e, r] = s()(a);
                    return [
                        o.useCallback(
                            ({ offer_id: r, offer_type: t, purpose: i }) =>
                                new Promise((o, n) => {
                                    e({ variables: { offer_id: r, offer_type: t, purpose: i }, onCompleted: (e, r) => o(e), onError: n });
                                }),
                            [e],
                        ),
                        r,
                    ];
                };
        },
        492253: (e, r, t) => {
            t.d(r, { Z: () => c });
            var i = t(818187),
                o = (t(585488), t(712696)),
                n = t.n(o),
                s = t(497110);
            const a = i.Z,
                c = (e) => {
                    const { affiliateLimit: r } = (0, s.Z)(),
                        t = n()(a, { count: r }, { fetchPolicy: e }),
                        i = t.viewer?.user_results?.result,
                        o = i?.verified_organization_invitations || null,
                        c = i?.business_team_affiliates || null;
                    return [t, o?.items.length || 0, c?.items_results.length || 0];
                };
        },
        858434: (e, r, t) => {
            t.d(r, { Z: () => c });
            var i = t(533399),
                o = t(202784),
                n = (t(585488), t(351743)),
                s = t.n(n);
            const a = i.Z,
                c = (e) => {
                    const [r, t] = s()(a);
                    return [
                        o.useCallback(
                            ({ applicantName: t, organizationEmailAddress: i, organizationName: o, organizationType: n, organizationWebsite: s }) =>
                                new Promise((a, c) => {
                                    r({
                                        variables: { applicant_name: t, organization_email_address: i, organization_name: o, organization_type: n, organization_website: s },
                                        onCompleted: (e, r) => a(e),
                                        onError: c,
                                        updater: (r) => {
                                            if (e) {
                                                const t = r.get(e);
                                                t && (t.setValue(null, "target_organization_tier"), t.invalidateRecord());
                                            }
                                        },
                                    });
                                }),
                            [r, e],
                        ),
                        t,
                    ];
                };
        },
        432883: (e, r, t) => {
            t.d(r, { F: () => m, Z: () => v });
            t(571372);
            var i = t(354001),
                o = t(452032),
                n = t(202784),
                s = (t(585488), t(277660)),
                a = t.n(s),
                c = t(351743),
                _ = t.n(c),
                d = t(550496),
                u = t(236012),
                l = t(700797);
            const p = o.Z,
                m = i.Z,
                v = ({ currentUserIds: e, itemRef: r }) => {
                    const t = (0, d.ZH)(),
                        i = a()(p, r).invitee_id_results.result,
                        [o, s] = _()(m);
                    return [
                        n.useCallback(
                            () =>
                                new Promise((r, n) => {
                                    if (i && "User" !== i.__typename) return n(new Error("done"));
                                    const s = (0, l.oR)(e.__id, "InvitationListQuery_verified_organization_invitations", { invitation_type: u.x.Affiliate });
                                    o({ variables: { organization_id: e.restId, invitee_id: i.rest_id, sliceID: s, invitation_detail: t }, onCompleted: (e, t) => r(), onError: n });
                                }),
                            [o, e, i, t],
                        ),
                        s,
                    ];
                };
        },
        817010: (e, r, t) => {
            t.d(r, { Z: () => o });
            var i = t(202784);
            const o = () => {
                const [e, r] = i.useState(!1);
                return (
                    i.useEffect(() => {
                        const t = setInterval(() => {
                            void 0 !== window.Intercom && r(!0);
                        }, 250);
                        return e && clearInterval(t), () => clearInterval(t);
                    }, [e]),
                    e
                );
            };
        },
        87690: (e, r, t) => {
            t.d(r, { V5: () => d, ZP: () => m, xz: () => p });
            t(136728);
            var i = t(8710),
                o = t(10622),
                n = t.n(o),
                s = (t(585488), t(712696)),
                a = t.n(s),
                c = t(952793),
                _ = t(685731);
            const d = Object.freeze({ FullAccess: "FullAccess", FullAccessGov: "FullAccessGov", Basic: "Basic" }),
                u = { FullAccess: { staging: "prod_Nbz7kwMFZ2FMr8", prod: "prod_NFUuzMG4B8QWwR" }, Basic: { staging: "prod_P68HlBVycbFEWg", prod: "prod_P67yo9jgLohMHV" }, FullAccessGov: { staging: "prod_NbzNYmcbcCvpf8", prod: "prod_NX6XvPozj4Veck" } },
                l = i.Z,
                p = ({ environment: e, featureSwitches: r, tierInterval: t, userClaims: i, voProduct: o, withDiscount: s }) => {
                    const a = r.isTrue("subscriptions_stripe_testing"),
                        c = u[o],
                        d = a ? c.staging : c.prod;
                    return n()(e, l, { rest_id: d })
                        .toPromise()
                        .then((e) => {
                            const r = [],
                                { web_subscription_product_details_by_rest_id: i } = e || {},
                                { prices: o } = i || {},
                                n = (0, _.pt)(o, !1, t),
                                a = n ? (0, _.fS)(n, s, !1)?.program_id : null;
                            return a && r.push({ program_id: a }), { externalPriceId: n?.external_price_id || "", promotionData: r };
                        })
                        .catch(() => ({}));
                },
                m = (e) => {
                    const r = (0, c.hC)("subscriptions_stripe_testing"),
                        t = u[e],
                        i = r ? t.staging : t.prod;
                    return a()(l, { rest_id: i });
                };
        },
        148309: (e, r, t) => {
            t.d(r, { Z: () => m, q: () => p });
            var i = t(822133),
                o = t(202784),
                n = t(99107),
                s = t(10622),
                a = t.n(s),
                c = (t(585488), t(712696)),
                _ = t.n(c),
                d = t(443781);
            const u = i.Z,
                l = (e, { featureSwitches: r, selectedTier: t, userClaims: i }) => {
                    const { verified_organization_payment_info: o } = e,
                        s = r.isTrue("subscriptions_stripe_testing"),
                        a = r.isTrue("responsive_web_verified_organizations_free_upgrade_promo_enabled"),
                        c = i.isGovVerifiedOrg(),
                        _ = i.isFreeVerifiedOrg(),
                        d = () => (s ? n.MR : n.l9),
                        u = () => (s ? n.fG : n.FO),
                        l = () => (s ? n.r1 : n.MH),
                        p = o?.target_product_sku;
                    let m;
                    return (m = p ? (p === n.MH ? l() : p === n.l9 ? d() : p === n.FO ? u() : p) : c ? l() : a && _ && "Basic" === t ? u() : d()), m;
                },
                p = ({ environment: e, featureSwitches: r, selectedTier: t, userClaims: i }) =>
                    a()(e, u, {})
                        .toPromise()
                        .then((e) => (e ? { data: e, finalProductSku: l(e, { userClaims: i, featureSwitches: r, selectedTier: t }) } : {}))
                        .catch(() => ({})),
                m = (e) => {
                    const { featureSwitches: r, userClaims: t } = o.useContext(d.rC),
                        i = _()(u, {}, { fetchKey: e ?? void 0 });
                    return [i, l(i, { userClaims: t, featureSwitches: r })];
                };
        },
        112432: (e, r, t) => {
            t.d(r, { Z: () => c });
            var i = t(145178),
                o = t(202784),
                n = (t(585488), t(351743)),
                s = t.n(n);
            const a = i.Z,
                c = () => {
                    const [e, r] = s()(a);
                    return [
                        o.useCallback(
                            ({ user_activity_type: r }) =>
                                new Promise((t, i) => {
                                    e({ variables: { user_activity_type: r }, onCompleted: (e, r) => t(e), onError: i });
                                }),
                            [e],
                        ),
                        r,
                    ];
                };
        },
        656474: (e, r, t) => {
            t.d(r, { B: () => f, C: () => u });
            var i = t(326360),
                o = t(202784),
                n = (t(585488), t(277660)),
                s = t.n(n),
                a = t(332920),
                c = t.n(a),
                _ = t(97882);
            const d = i.Z,
                u = (e) => {
                    const { promotions: r } = s()(d, e);
                    return o.useMemo(() => (r || []).map((e) => ({ __id: e.__id, scheduledId: e.scheduled_id, programId: e.program_id, status: e.status, expires: p(e?.expires_at_msec), starts: p(e?.starts_at_msec), forAdsAccountId: l(e.promotion?.enrolled_for_ads_account_id), validUntil: p(e.promotion?.valid_until_msec), formattedCouponAmount: m(e.promotion?.coupon_amount_in_local), formattedUsedAmount: m(e.promotion?.used_amount_in_local), isCouponDone: v(e.promotion?.coupon_amount_in_local, e.promotion?.used_amount_in_local) })), [r]);
                },
                l = (e) => (e ? parseInt(e, 10).toString(36) : void 0),
                p = (e) => (e ? new Date(parseInt(e, 10)) : void 0),
                m = (e) => (e ? (0, _.x)({ amount: Math.max(0, e.amount), currencyCode: e.currency_code.toUpperCase(), formatter: 1, removeTrailingZeros: !0 }) : void 0),
                v = (e, r) => !(!e || !r) && r.amount >= e.amount,
                f = c().h3629783;
        },
        830269: (e, r, t) => {
            t.d(r, { Z: () => l });
            var i = t(940260),
                o = t(202784),
                n = (t(585488), t(351743)),
                s = t.n(n),
                a = t(332920),
                c = t.n(a),
                _ = t(481326);
            const d = c().id67d953,
                u = i.Z,
                l = () => {
                    const [e, r] = s()(u),
                        [t, i] = o.useState();
                    return [
                        o.useCallback(
                            ({ cancelUrl: r, externalPriceId: t, finalProductSku: o, promotionData: n, successUrl: s }) =>
                                new Promise((a, c) => {
                                    i(null),
                                        e({
                                            variables: { product_sku: o, cancel_url: r, success_url: s, external_price_id: t, promotion_data: n },
                                            onCompleted: (e, r) => {
                                                const t = e.subscriptioncheckoutsession_create;
                                                if (t)
                                                    if (t.errors) {
                                                        if (t.errors) return i(e), c(e);
                                                    } else window.location.href = e.subscriptioncheckoutsession_create?.session_url;
                                                return a(e);
                                            },
                                            onError: (e) => (i({ subscriptioncheckoutsession_create: { errors: [{ error_message: d({ supportEmail: _.M2 }), shared_error_code: "Undefined" }] } }), c(e)),
                                        });
                                }),
                            [e],
                        ),
                        r,
                        t,
                    ];
                };
        },
        96545: (e, r, t) => {
            t.d(r, { Z: () => d });
            var i = t(506889),
                o = t(50982),
                n = t(202784),
                s = (t(585488), t(351743)),
                a = t.n(s);
            const c = o.Z,
                _ = i.Z,
                d = () => {
                    const [e] = a()(c),
                        [r] = a()(_);
                    return [
                        n.useCallback(
                            ({ targetPriceId: t }) =>
                                new Promise((i, o) => {
                                    e({
                                        variables: { target_price_id: t },
                                        onCompleted: (e) => {
                                            const n = e.initiate_verified_organization_tier_switch;
                                            if ("InitiateVerifiedOrganizationTierSwitchError" === n?.__typename) return o(n);
                                            r({
                                                variables: { price_id: t },
                                                onCompleted: (e) => {
                                                    const r = e.switch_tier;
                                                    return "WebPaymentsTierSwitchResultError" === r?.__typename ? o(e) : i(e);
                                                },
                                                onError: (e) => o(e),
                                            });
                                        },
                                        onError: (e) => o(e),
                                    });
                                }),
                            [e, r],
                        ),
                    ];
                };
        },
        990738: (e, r, t) => {
            t.d(r, { Z: () => a });
            var i = t(775674),
                o = (t(585488), t(712696)),
                n = t.n(o);
            const s = i.Z,
                a = (e) => {
                    const r = n()(s, { origin_product_sku: e }).viewer.user_results.result.web_tier_switch_plans;
                    return ["WebPaymentsGetTierSwitchPlansSuccess" === r?.__typename ? r.plans : null, "WebPaymentsGetTierSwitchPlansError" === r?.__typename ? r.message : null];
                };
        },
        85034: (e, r, t) => {
            t.d(r, { Z: () => a });
            var i = t(283846),
                o = (t(585488), t(712696)),
                n = t.n(o);
            const s = i.Z,
                a = (e, r = !1) => {
                    const t = n()(s, { current_product_sku: e, find_target_product_sku: r }).viewer.user_results.result.web_tier_switch_progress,
                        i = "WebPaymentsTierSwitchProgress" === t?.__typename ? t.status : "NotStarted",
                        o = "WebPaymentsTierSwitchProgress" === t?.__typename ? t.target_product_sku : null,
                        a = "WebPaymentsTierSwitchProgress" === t?.__typename ? t.from_price_detail : null;
                    return { status: i, error: "WebPaymentsGetTierSwitchProgressError" === t?.__typename ? t.message : void 0, targetProductSku: o, fromPrice: a };
                };
        },
        505057: (e, r, t) => {
            t.d(r, { Z: () => l });
            var i = t(685065),
                o = t(202784),
                n = t(614983),
                s = t.n(n),
                a = (t(585488), t(351743)),
                c = t.n(a),
                _ = t(184605),
                d = t(71620);
            const u = i.Z,
                l = (e, r) => {
                    const t = (0, d.po)(),
                        [i, n] = c()(u);
                    return [
                        o.useCallback(
                            (o) => {
                                const n = (e) => {
                                    s()(r, "orgQueryId must be specified");
                                    const t = e.get(r);
                                    s()(t, "orgRecord must be specified");
                                    const i = e.get(`client:${r}:core`);
                                    s()(i, "core must be specified"), (0, _.Z)(o.status) && i.setValue(o.status, "status"), (0, _.Z)(o.integrationStatus) && i.setValue(o.integrationStatus, "integration_status"), o.integrationServiceId && i.setValue(o.integrationServiceId, "integration_service_id"), t.setLinkedRecord(i, "core");
                                };
                                return new Promise((r, s) => {
                                    e || r(!1),
                                        i({
                                            variables: { userId: e, ...o },
                                            optimisticUpdater: n,
                                            updater: n,
                                            onCompleted: (e) => {
                                                const t = e.update_organization?.success;
                                                r(t);
                                            },
                                            onError: (e) => {
                                                t(e), s(e);
                                            },
                                        });
                                });
                            },
                            [r, e, i, t],
                        ),
                        n,
                    ];
                };
        },
        508574: (e, r, t) => {
            t.d(r, { ZP: () => l, iX: () => _ });
            t(571372);
            var i = t(352585),
                o = t(202784),
                n = (t(585488), t(351743)),
                s = t.n(n),
                a = t(762522);
            const c = i.Z;
            class _ extends Error {
                constructor(e, ...r) {
                    super(...r), Error.captureStackTrace && Error.captureStackTrace(this, _), (this.name = "EligibilityError"), (this.validationErrors = e);
                }
                get highestPriorityError() {
                    const [e] = this.validationErrors?.map((e) => u[e])?.sort((e, r) => e?.priority - r?.priority) ?? [];
                    return e && e.voError;
                }
            }
            const d = { incorrectAccount: { voError: a.F.adsAccountIncorrect, priority: 1 }, invalidFunding: { voError: a.F.adsAccountInvalidFunding, priority: 2 }, reviewNeeded: { voError: a.F.adsAccountReviewNeeded, priority: 2 }, missingVOSubscription: { voError: a.F.missingVOSubscription, priority: 1 } },
                u = { ads_account_exist: d.incorrectAccount, required_ads_approval_status: d.reviewNeeded, ads_credit_card: d.invalidFunding, promotion_owner_is_verified_org: d.missingVOSubscription, promotion_target_affiliated_to_owner: d.incorrectAccount, required_product: d.missingVOSubscription, supported_funding_instrument: d.invalidFunding },
                l = () => {
                    const [e, r] = s()(c);
                    return [
                        o.useCallback(
                            ({ __id: r, forAdsAccountId: t, programId: i, scheduledId: o }) =>
                                new Promise((n, s) => {
                                    const a = `${parseInt(t, 36)}`;
                                    e({
                                        variables: { for_ads_account_id: a, scheduled_id: o, program_id: i },
                                        onCompleted: (e, r) => {
                                            const { validate_and_activate_scheduled_promotion: t } = e;
                                            t.is_eligible ? n() : s(new _(t?.eligibility_errors ?? []));
                                        },
                                        updater: (e, t) => {
                                            if (r && (t?.validate_and_activate_scheduled_promotion?.is_eligible ?? !1)) {
                                                const t = e.get(r);
                                                if (t) {
                                                    t.setValue("Active", "status");
                                                    const e = t.getLinkedRecord("promotion");
                                                    e && e.setValue(a, "enrolled_for_ads_account_id");
                                                }
                                            }
                                        },
                                        onError: s,
                                    });
                                }),
                            [e],
                        ),
                        r,
                    ];
                };
        },
        497110: (e, r, t) => {
            t.d(r, { Z: () => o });
            var i = t(952793);
            const o = () => ({ affiliateLimit: (0, i.D2)("responsive_web_verified_organizations_affiliate_fetch_limit").getNumberValue(1e3) });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-b08cea6e.e05f44ca.js.map
