(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-2ace1ef0"],
    {
        437194: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, { ThankYouScreen: () => B, default: () => V });
            a(136728);
            var r = a(202784),
                n = a(325686),
                o = a(107267),
                i = a(67369),
                c = a(731708),
                l = a(392237),
                s = a(111677),
                u = a.n(s),
                d = a(913973),
                m = a(293723),
                p = a(980407),
                g = a(736063),
                b = a(952793),
                f = a(782826),
                h = a(725516),
                _ = a(125363),
                v = a(488645),
                y = a(241989),
                E = a(794271);
            const k = u().b633d19e,
                C = u().f713d3e2,
                Z = [u().e11d5e1a, u().d83617cc, u().afb30564, u().gdd3fa68, u().e6389996],
                w = u().a889b460,
                x = u().d1c886dc,
                I = u().b13e9454,
                P = u().c4930cb6,
                A = u().f9fbeabc,
                S = u().b4c80f5c,
                D = u().f0915094,
                z = u().f259d3f3,
                F = u().a1d3f1f2,
                M = u().i859a9d4,
                B = (e) => {
                    const t = (0, o.useHistory)(),
                        a = (0, h.z)(),
                        l = (0, _.I0)(),
                        s = (0, f.G3)(t.location),
                        u = (0, i.yu)(),
                        g = (0, b.hC)("responsive_web_verified_organizations_idv_enabled"),
                        { completedByDate: B, enabled: T, status: V } = (0, y.Z)(),
                        H = g && T && "CanVerifyIdentity" === V,
                        O = H ? x : k;
                    r.useEffect(() => {
                        l((0, v.q)("ogf5s", "oglxp", null, "rweb.voLandingPage", !1)), a && a.scribe({ page: "verified-organizations", section: "thank-you", action: "impression", data: { referer: s } });
                    }, [l, a, s]);
                    const N = r.useMemo(
                            () =>
                                r.createElement(
                                    r.Fragment,
                                    null,
                                    r.createElement(c.ZP, null, I),
                                    r.createElement(c.ZP, { style: $.margin, weight: "bold" }, P),
                                    [A, S, D].map((e, t) => r.createElement(n.Z, { key: `idv-req-${t}`, style: $.requirementRow }, r.createElement(d.default, null), r.createElement(c.ZP, null, e))),
                                    r.createElement(c.ZP, { style: $.margin }, z({ date: B })),
                                    r.createElement(n.Z, { style: [u ? $.mobileFooter : null, $.footer] }, r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, F, " ", r.createElement(c.ZP, { link: "https://help.x.com/rules-and-policies/verification-policy" }, M)), r.createElement(E.Z, { redirectPath: "/i/verified" })),
                                ),
                            [u, B],
                        ),
                        R = r.useMemo(
                            () =>
                                r.createElement(
                                    r.Fragment,
                                    null,
                                    r.createElement(c.ZP, { color: "text", size: "headline2", weight: "bold" }, C),
                                    r.createElement(
                                        c.ZP,
                                        { color: "gray700" },
                                        r.createElement(
                                            "ul",
                                            null,
                                            Z.map((e, t) => r.createElement("li", { key: t }, r.createElement(c.ZP, { color: "gray700", size: "subtext1" }, e))),
                                        ),
                                    ),
                                ),
                            [],
                        );
                    return r.createElement(
                        p.Z,
                        {
                            onBackClick: function () {
                                a.scribe({ page: "verified-organizations", section: "thank-you", element: "close", action: "click" }), t.push("/");
                            },
                        },
                        r.createElement(n.Z, { style: $.container }, r.createElement(n.Z, { style: $.successLabelRow }, r.createElement(m.default, null), r.createElement(c.ZP, { color: "green500" }, w)), r.createElement(c.ZP, { size: "headline1", weight: "heavy" }, O), H ? N : R),
                    );
                },
                T = (e) => r.createElement(g.H, { errorConfig: { context: "vo_thank_you_screen" } }, r.createElement(B, e)),
                V = r.memo(T),
                $ = l.default.create((e) => ({ container: { marginHorizontal: e.spaces.space40, marginBottom: e.spaces.space40, gap: e.spaces.space12 }, successLabelRow: { color: e.colors.green500, flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, requirementRow: { flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, mobileFooter: { position: "fixed", backgroundColor: e.colors.cellBackground, bottom: 0, start: 0, width: "100%", padding: e.spaces.space40, flexDirection: "column" }, desktopFooter: {}, footer: { gap: e.spaces.space12 }, margin: { marginTop: e.spaces.space12 } }));
        },
        781201: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, { WelcomeScreen: () => O, default: () => G });
            var r = a(807896),
                n = (a(136728), a(202784)),
                o = a(325686),
                i = a(107267),
                c = a(688715),
                l = a(992942),
                s = a(40610),
                u = a(731708),
                d = a(529356),
                m = a(392237),
                p = a(111677),
                g = a.n(p),
                b = a(262009),
                f = a(798156),
                h = a(198433),
                _ = a(443781),
                v = a(736063),
                y = a(952793),
                E = a(782826),
                k = a(725516),
                C = a(481326),
                Z = a(148309),
                w = a(830269),
                x = a(611520),
                I = a(731822);
            const P = g().jf351704,
                A = g().ia5a6a40,
                S = g().d40d1cc0,
                D = g().c4a5f614,
                z = g().fa2a280a,
                F = g().i7b2f08e,
                M = g().g4e18b84,
                B = g().hd7d278c,
                T = g().cdace6d2,
                V = g().h3629783,
                $ = g().a558a254,
                H = { width: 194, height: 146 },
                O = (e) => {
                    const t = (0, i.useHistory)(),
                        { userClaims: a } = n.useContext(_.rC),
                        [m, p] = n.useState(),
                        v = (0, E.G3)(t.location),
                        O = (0, k.z)(),
                        R = "Year" === t.location.query.interval ? "Year" : "Month",
                        L = t.location?.state,
                        G = L?.invoiceAction,
                        U = L?.interval || R,
                        [{ verified_organization_payment_info: q }, W] = (0, Z.Z)("welcome_screen"),
                        j = "Upfront" === q?.payment_purpose,
                        Y = "PaidGoldBasic" === q?.target_organization_tier ? "Basic" : "FullAccess",
                        Q = a.isFreeVerifiedOrg(),
                        X = (0, y.hC)("responsive_web_verified_organizations_invoice_enabled"),
                        J = (0, y.hC)("responsive_web_verified_organizations_invoice_update_enabled"),
                        K = (0, y.hC)("responsive_web_verified_organizations_free_to_invoice_enabled") && Q,
                        ee = (0, y.hC)("responsive_web_verified_organizations_free_upgrade_promo_enabled") && Q && !K,
                        te = (0, y.hC)("responsive_web_verified_organizations_free_invoice_promo_enabled") && K,
                        ae = J && G === C.hA.updateSeats,
                        re = Q || ae,
                        [ne, , oe] = (0, w.Z)(),
                        ie = (0, c.ju)("https://x.com/i/verified-welcome"),
                        ce = `${(0, c.ju)("https://x.com/i/verified-thank-you")}?referring_page=${v.length > 0 ? v : "vo_welcome_page"}`,
                        { basePriceId: le, promotionInfo: se } = (0, I.f)(Y, U, { withDiscount: te }),
                        ue = se?.endsAtMsec ? V(new Date(parseInt(se.endsAtMsec, 10))) : null;
                    n.useEffect(() => {
                        Q ? p("upgrade") : re ? p(G ?? "") : a.isPaidVerifiedOrg() ? p("pay") : j && p("pay-upfront");
                    }, [O, p, a, j, Q, re, G]);
                    const de = n.useCallback(
                        (e, t) => {
                            O.scribe({ page: "verified-organizations", section: "welcome", component: m, action: e, element: t });
                        },
                        [m, O],
                    );
                    n.useEffect(() => {
                        m && de("impression");
                    }, [m, de]);
                    const me = n.useCallback(() => {
                            de("click", "go-back"), t.goBack();
                        }, [de, t]),
                        pe = n.useCallback(() => {
                            de("click", "go-home"), t.push("/i/verified");
                        }, [de, t]),
                        ge = n.useCallback(() => {
                            de("click", "close"), t.push("/");
                        }, [de, t]),
                        be = n.useCallback(() => {
                            de("click", "add-payment-details"),
                                ne({ finalProductSku: W, cancelUrl: ie, successUrl: ce, externalPriceId: le })
                                    .then(() => {
                                        de("success", "add-payment-details");
                                    })
                                    .catch(() => {
                                        de("error", "add-payment-details");
                                    });
                        }, [de, ne, W, le, ie, ce]),
                        fe = n.useCallback(() => {
                            de("click", "setup-invoice");
                            const e = { ...L };
                            e && K && (e.invoicedUser = { billed_to_email_address: "", billed_to_name: "" }), t.push("/i/verified-invoice", e);
                        }, [de, L, K, t]),
                        he = n.useCallback(() => {
                            de("click", "upgrade-now"), t.push("/i/verified-orgs-free-upgrade");
                        }, [de, t]),
                        _e = n.useCallback(({ style: e }) => n.createElement(l.Z, { "aria-label": "", source: re ? h : f, style: e }), [re]),
                        ve = n.useMemo(() => {
                            if (ee) return { headline: M, onAction: he, actionLabel: T, onClose: me, secondaryActionLabel: B, subtext: "" };
                            if (te) {
                                const e = n.createElement(g().I18NFormatMessage, { $i18n: "a75ca455" }, ue);
                                return { headline: $, onAction: () => {}, actionLabel: void 0, onClose: me, secondaryActionLabel: B, subtext: n.createElement(n.Fragment, null, n.createElement(o.Z, { style: N.margin }, n.createElement(s.Z.Custom, { Icon: b.default, backgroundColor: "green0", style: { color: "white" }, text: e, withColoredIcon: !0 })), n.createElement(o.Z, null, n.createElement(I.Z, { interval: "Year", tier: Y, withDiscount: !0 })), oe ? oe.subscriptioncheckoutsession_create?.errors?.map((e, t) => (e.error_message ? n.createElement(o.Z, { key: t, style: N.error }, n.createElement(s.Z.Danger, { text: e.error_message })) : null)) : null) };
                            }
                            return { headline: re ? M : F, onAction: K ? () => {} : ae ? fe : be, actionLabel: K ? void 0 : ae ? z : D, onClose: re ? pe : me, secondaryActionLabel: re ? B : void 0, subtext: n.createElement(n.Fragment, null, n.createElement(o.Z, { style: N.margin }, n.createElement(u.ZP, null, ae ? P : Q ? S : A)), n.createElement(o.Z, null, n.createElement(I.Z, { interval: U, tier: Y })), oe ? oe.subscriptioncheckoutsession_create?.errors?.map((e, t) => (e.error_message ? n.createElement(o.Z, { key: t, style: N.error }, n.createElement(s.Z.Danger, { text: e.error_message })) : null)) : null) };
                        }, [ee, te, re, K, ae, fe, be, pe, me, Q, U, Y, oe, he, ue]);
                    return !re && X ? n.createElement(x.U2, { checkoutErrorResponse: oe?.subscriptioncheckoutsession_create, interval: U, onClose: ge, onSetupInvoicing: fe, onSubscribe: be, tier: Y }) : n.createElement(d.Z, (0, r.Z)({ actionType: "primaryFilled", enableMaskForDismiss: !0, graphic: ee || te ? void 0 : _e, graphicDisplayMode: ee || te ? "none" : "illustration", graphicStyle: H, onSecondaryAction: pe }, ve), K ? n.createElement(x.oT, { onSetupInvoicing: fe, onSubscribe: be }) : null);
                },
                N = m.default.create((e) => ({ margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 } })),
                R = { context: "WelcomeScreen" };
            function L(e) {
                return n.createElement(v.H, { errorConfig: R }, n.createElement(O, e));
            }
            const G = n.memo(L);
        },
        593385: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => T });
            var r = a(202784),
                n = a(325686),
                o = a(107267),
                i = a(731708),
                c = a(40610),
                l = a(154003),
                s = a(167630),
                u = a(392237),
                d = a(111677),
                m = a.n(d),
                p = a(757700),
                g = a(762522),
                b = a(508574),
                f = a(466818),
                h = a(855488),
                _ = a(666536),
                v = a(948927);
            const y = (e) => (e ? (/^[0-9A-Z]+$/i.test(e) ? { valid: !0, valueMissing: !1 } : { valid: !1, valueMissing: !1 }) : { valid: !0, valueMissing: !0 }),
                E = m().c28566e0,
                k = m().f520ee22,
                C = m().df96ca56,
                Z = "%other",
                w = (e) =>
                    e.accounts
                        .filter(x)
                        .map((e) => ({ label: I(e), value: e.id }))
                        .concat([{ label: C, value: Z }]),
                x = ({ eligibility: e, name: t }) => null != t && "EligibleHasPaymentMethod" === e,
                I = ({ id: e, name: t }) => `${t ?? "Ad Account"} (id: ${e})`,
                P = m().b5566402,
                A = ({ defaultValue: e, disabled: t, label: a, name: n, onValidityStateChange: o }) => {
                    const [c, l] = r.useState(y(e)),
                        s = r.useCallback(
                            (e) => {
                                const t = y(e);
                                l(t), o(e, t);
                            },
                            [l, o],
                        ),
                        u = r.useMemo(() => (0, _.Z)(s, 500), [s]),
                        d = r.useCallback(
                            (e) => {
                                const { value: t } = e.target;
                                u(t);
                            },
                            [u],
                        );
                    return r.createElement(h.Z, { defaultValue: e, editable: !t, errorText: P, helperText: r.createElement(m().I18NFormatMessage, { $i18n: "e507417b" }, r.createElement(i.ZP, { link: { pathname: "https://ads.x.com/account_select", external: !0 } }, m().eb160d07)), invalid: !c.valid, label: k, name: n, onChange: d, style: S.removeHorizontalGutterPadding });
                },
                S = u.default.create((e) => ({ removeHorizontalGutterPadding: { paddingHorizontal: 0 } })),
                D = ({ defaultValue: e, disabled: t, onValidityStateChange: a }) => {
                    const o = (0, v.od)(),
                        i = r.useMemo(() => w(o), [o]),
                        c = e ?? "",
                        l = "" !== c && -1 === i.findIndex((e) => e.value === c),
                        [s, u] = r.useState(l ? Z : c),
                        [d, m] = r.useState(l ? c : ""),
                        [p, g] = r.useState("" !== d),
                        b = r.useCallback(
                            (e, t) => {
                                u(e), e === Z ? (g(!0), a(d, y(d))) : (g(!1), a(e, y(e)));
                            },
                            [a, d, u, g],
                        ),
                        h = r.useCallback(
                            (e, t) => {
                                m(e), a(e, t);
                            },
                            [a, m],
                        );
                    return r.createElement(r.Fragment, null, r.createElement(n.Z, null, r.createElement(f.ZP, { disabled: t, label: E, onChange: b, options: i, value: s, withEmptyOption: !0 })), p ? r.createElement(A, { defaultValue: d, disabled: t, label: k, name: "otherAccountId", onValidityStateChange: h }) : null);
                },
                z = m().ace946c4,
                F = m().ia5e7488,
                M = m().b0b02e37,
                B = u.default.create((e) => ({ container: { padding: e.spacesPx.space32, maxWidth: "500px" }, actionContainer: { marginTop: e.spacesPx.space32 }, actionButton: { marginTop: e.spacesPx.space16 }, description: { marginTop: e.spacesPx.space8, marginBottom: e.spacesPx.space4 }, inputContainer: { marginTop: e.spacesPx.space16 }, successCallout: { marginTop: 10 } })),
                T = ({ coupon: e, onDismiss: t }) => {
                    const a = (0, o.useHistory)(),
                        [d, f] = r.useState(""),
                        [h, _] = r.useState(!0),
                        [v, y] = (0, b.ZP)(),
                        [E, k] = r.useState(!1),
                        [C, Z] = r.useState(),
                        w = r.useCallback(
                            (e, t) => {
                                _(!t.valid || t.valueMissing), f(e);
                            },
                            [f, _],
                        ),
                        x = r.useCallback(() => {
                            const { __id: t, programId: a, scheduledId: r } = e;
                            v({ __id: t, scheduledId: r, programId: a, forAdsAccountId: d })
                                .then(() => {
                                    k(!0);
                                })
                                .catch((e) => {
                                    Z((e instanceof b.iX && e.highestPriorityError) || "adsPromoActivation"), k(!1);
                                });
                        }, [d, v, e, Z, k]);
                    return r.createElement(p.ZP, { clickMaskToClose: !0, history: a, modalSize: "fitChildren", onMaskClick: t, topOfScreen: !0, withBackground: !0 }, r.createElement(n.Z, { style: B.container }, r.createElement(i.ZP, { size: "title3", weight: "heavy" }, r.createElement(m().I18NFormatMessage, { $i18n: "d15a83b7" })), r.createElement(i.ZP, { color: "gray700", style: B.description }, r.createElement(m().I18NFormatMessage, { $i18n: "j5318247", couponAmount: e.formattedCouponAmount ?? "" })), C ? r.createElement(g.Z, { error: C }) : null, E ? r.createElement(c.Z.Success, { style: { marginTop: 10 }, text: M({ accountId: d }), withIcon: !0 }) : null, r.createElement(n.Z, { style: B.inputContainer }, r.createElement(D, { disabled: y || E, onValidityStateChange: w })), r.createElement(n.Z, { style: B.actionContainer }, r.createElement(l.ZP, { disabled: E || y || h, icon: y ? r.createElement(s.Z, { color: u.default.theme.colors.gray700, size: "small" }) : void 0, onClick: x, size: "large", type: "primaryFilled" }, z), r.createElement(l.ZP, { onClick: t, size: "large", style: B.actionButton, type: "primaryOutlined" }, F))));
                };
        },
        431053: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => G });
            var r = a(670654),
                n = a(573690),
                o = a(202784),
                i = a(325686),
                c = a(10622),
                l = a.n(c),
                s = (a(585488), a(277660)),
                u = a.n(s),
                d = a(437429),
                m = a.n(d),
                p = a(107267),
                g = a(731708),
                b = a(67369),
                f = a(855488),
                h = a(154003),
                _ = a(868634),
                v = a(392237),
                y = a(111677),
                E = a.n(y),
                k = a(666536),
                C = a(516951),
                Z = a(97882),
                w = a(762522),
                x = a(550496);
            const I = o.createElement(g.ZP, { weight: "bold" }),
                P = E().h3629783,
                A = E().be103b84,
                S = E().e9e9ca58,
                D = E().eb4e810a,
                z = E().f8464692,
                F = E().cf2ba3a2,
                M = E().gd7d051c,
                B = E().f391c800,
                T = E().ja116d2c,
                V = E().hf037537,
                $ = n.Z,
                H = r.Z,
                O = { incorrectAccount: { voError: w.F.adsAccountIncorrect, priority: 1 }, invalidFunding: { voError: w.F.adsAccountInvalidFunding, priority: 2 }, reviewNeeded: { voError: w.F.adsAccountReviewNeeded, priority: 2 }, missingVOSubscription: { voError: w.F.missingVOSubscription, priority: 1 } },
                N = { ads_account_exist: O.incorrectAccount, required_ads_approval_status: O.reviewNeeded, ads_credit_card: O.invalidFunding, promotion_owner_is_verified_org: O.missingVOSubscription, promotion_target_affiliated_to_owner: O.incorrectAccount, required_product: O.missingVOSubscription, supported_funding_instrument: O.invalidFunding };
            function R({ item: e, onSuccessfulActivation: t }) {
                const { __id: a, expires_at_msec: r, program_id: n, promotion: c, scheduled_id: s, starts_at_msec: d, status: v } = u()(H, e),
                    y = c?.valid_until_msec ? new Date(parseInt(c.valid_until_msec, 10)) : void 0,
                    O = y ? P(y) : void 0,
                    R = r ? P(new Date(parseInt(r, 10))) : void 0,
                    G = P(new Date(parseInt(d, 10))),
                    [U, q] = o.useState(""),
                    [W, j] = o.useState(!0),
                    [Y, Q] = o.useState(),
                    [X, J] = o.useState(!1),
                    [K, ee] = (0, x.DR)(),
                    te = (0, p.useHistory)(),
                    ae = (0, p.useLocation)(),
                    re = (0, b.yu)(),
                    ne = m()(),
                    { coupon_amount_in_local: oe, enrolled_for_ads_account_id: ie, used_amount_in_local: ce, valid_until_msec: le } = c,
                    se = oe?.amount ?? 0,
                    ue = se - (ce?.amount ?? 0),
                    de = (0, Z.x)({ amount: parseInt(se, 10), currencyCode: oe?.currency_code.toUpperCase(), formatter: 1 }),
                    me = o.useMemo(() => (0, Z.x)({ amount: ue < 0 ? 0 : parseInt(ue, 10), currencyCode: oe?.currency_code.toUpperCase(), formatter: 1 }), [ue, oe?.currency_code]),
                    pe = o.useCallback(() => {
                        if (!le) return 0;
                        const e = new Date(),
                            t = new Date(parseInt(le, 10)).getTime() - e.getTime();
                        return Math.floor(t / 864e5);
                    }, [le]),
                    ge = o.useMemo(() => {
                        switch (v) {
                            case "Active":
                                return (({ days: e, remainingAmount: t }) => o.createElement(E().I18NFormatMessage, { $i18n: "g46e6cc5" }, o.cloneElement(I, null, E().d0b58c01({ days: e })), o.cloneElement(I, null, E().e49cb8a7({ remainingAmount: t }))))({ remainingAmount: me, days: pe() });
                            case "Redeemable":
                                if (R) return (({ expiresAt: e }) => o.createElement(E().I18NFormatMessage, { $i18n: "be64138f", expiresAt: e }))({ expiresAt: R });
                                break;
                            case "Scheduled":
                                return V({ startDate: G });
                            default:
                                return "";
                        }
                    }, [v, pe, me, R, G]),
                    be = o.useCallback((e) => {
                        j(!e), Q(e);
                    }, []),
                    fe = o.useMemo(
                        () =>
                            (0, k.Z)((e) => {
                                be(), n && (e ? (/^[0-9A-Z]+$/i.test(e) ? X && J(!1) : be(T)) : be(B));
                            }, 500),
                        [be, n, X],
                    ),
                    he = o.useCallback(() => {
                        if (!W || !n || !U) return;
                        const e = `${parseInt(U, 36)}`;
                        J(!0),
                            l()(ne, $, { for_ads_account_id: e, program_id: n })
                                .toPromise()
                                .then((r) => {
                                    const o = r?.viewer.user_results.result.promotion_eligibility;
                                    if (0 === o?.length)
                                        K({ forAdsAccountId: e, scheduleId: s, programId: n, __id: a })
                                            .then(t)
                                            .catch(() => {
                                                te.replace(ae.pathname, { verifiedOrgAdminError: w.F.adsPromoActivation });
                                            });
                                    else {
                                        const [e] = o?.map((e) => N[e])?.sort((e, t) => e?.priority - t?.priority) ?? [];
                                        e && te.replace(ae.pathname, { verifiedOrgAdminError: e.voError });
                                    }
                                })
                                .catch(() => {
                                    j(!1), J(!0), be(T);
                                });
                    }, [W, n, U, ne, K, s, a, t, te, ae.pathname, be]),
                    _e = o.useCallback(
                        (e) => {
                            const { value: t } = e.target;
                            q(t), fe(t);
                        },
                        [fe],
                    ),
                    ve = o.useCallback(() => {
                        const e = ie ? parseInt(ie, 10).toString(36) : "";
                        if (("Active" === v || "Expired" === v) && e) return o.createElement(f.Z, { editable: !1, label: F, name: `adsAccountIdReadOnly-${e}`, onChange: C.Z, style: L.adsAccountIdInput, testID: "adsAccountIdFieldReadOnly", value: e });
                        if ("Redeemable" === v) {
                            const t = "Expired" === v && !e;
                            return o.createElement(o.Fragment, null, o.createElement(f.Z, { editable: !t, errorText: Y, inputMode: "text", invalid: !W, label: F, name: "adsAccountId", onChange: _e, pattern: "/^[0-9A-Z]+$/i", style: L.adsAccountIdInput, testID: "adsAccountIdField", value: U }), o.createElement(h.ZP, { disabled: X || ee || t, onClick: he, size: "small", style: L.rowItem, testID: "activateButton", type: "brandFilled" }, M));
                        }
                    }, [ie, v, U, _e, Y, W, ee, X, he]),
                    ye = o.useMemo(() => (O ? `${D}: ${O}` : R ? `${D}: ${R}` : D), [O, R]),
                    {
                        backgroundColor: Ee,
                        label: ke,
                        textColor: Ce,
                    } = o.useMemo(() => {
                        switch (v) {
                            case "Active":
                                return { backgroundColor: "green50", textColor: "green700", label: A };
                            case "Redeemable":
                                return { backgroundColor: "blue50", textColor: "blue700", label: S };
                            case "Expired":
                                return { backgroundColor: "gray50", textColor: "text", label: ye };
                            case "Scheduled":
                                return { backgroundColor: "gray50", textColor: "text", label: z };
                            default:
                                return {};
                        }
                    }, [v, ye]);
                return o.createElement(i.Z, { style: [L.container, re ? L.smallScreen : L.desktop], testID: "card-info-container" }, o.createElement(i.Z, { style: L.row }, o.createElement(g.ZP, { color: "text", role: "label", size: "headline1", style: L.rowItem, testID: "couponAmount", weight: "bold" }, de), o.createElement(_.ZP, { background: Ee, style: L.rowItem }, o.createElement(g.ZP, { color: Ce, weight: "bold" }, ke))), o.createElement(g.ZP, { role: "label", style: L.secondaryDescription, testID: "couponDescription" }, ge), o.createElement(i.Z, { style: L.row }, ve()));
            }
            const L = v.default.create((e) => ({ container: { padding: e.spaces.space16, boxShadow: e.boxShadows.medium, borderRadius: e.borderRadii.large, flexDirection: "column", backgroundColor: e.colors.buttonWhite }, desktop: { flexGrow: 0, flexShrink: 0, flexBasis: "45%" }, smallScreen: { flexBasis: "100%" }, row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }, rowItem: { marginTop: e.spaces.space8 }, secondaryDescription: { marginTop: e.spaces.space8 }, adsAccountIdInput: { paddingStart: 0, paddingVertical: 0, marginTop: e.spaces.space8, flexGrow: 1, flexBasis: "47%" } })),
                G = o.memo(R);
        },
        315758: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => b });
            var r = a(202784),
                n = a(868634),
                o = a(392237),
                i = a(111677),
                c = a.n(i),
                l = a(443781),
                s = a(952793),
                u = a(481326),
                d = a(550496);
            const m = c().e970bdbd;
            function p(e) {
                const { affiliatesCount: t, invitesCount: a } = e,
                    o = (0, s.D2)("blue_business_vo_free_affiliate_limit").getNumberValue(),
                    { userClaims: i } = (0, l.QZ)(),
                    { affiliateLimit: c } = (0, d.n5)(),
                    p = c || (i.isFreeVerifiedOrg() ? o : null),
                    b = p && p !== u.dN ? p - (a + t) : null;
                return null !== b ? r.createElement(n.ZP, { background: "maskColor", bold: !0, style: g.label }, m({ count: b })) : null;
            }
            const g = o.default.create((e) => ({ label: { alignSelf: "center" } })),
                b = r.memo(p);
        },
        218257: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => S });
            var r = a(202784),
                n = a(325686),
                o = a(437429),
                i = a.n(o),
                c = a(107267),
                l = a(154003),
                s = a(167630),
                u = a(40610),
                d = a(392237),
                m = a(111677),
                p = a.n(m),
                g = a(443781),
                b = a(736063),
                f = a(782642),
                h = a(782826),
                _ = a(725516),
                v = a(87690),
                y = a(148309),
                E = a(830269);
            const k = "VOCheckoutButton",
                C = p().ef4602ec,
                { origin: Z } = h.ZP.get(),
                w = `${Z}/i/verified-orgs-signup`,
                x = `${Z}/i/verified-thank-you`;
            function I({ buttonLabel: e = p().db8c4158, scribeElement: t = "vo-stripe-checkout-button", cancelUrl: a, successUrl: o, tierInterval: d, onClick: m, shouldShowToast: Z, shouldShowErrorCallout: I, disabled: S = !1, buttonType: D = "primaryFilled", testId: z = k, selectedTier: F, withDiscount: M = !1 }) {
                const { featureSwitches: B, userClaims: T } = (0, g.QZ)(),
                    V = (0, f.p)(),
                    $ = i()(),
                    H = (0, _.z)(),
                    [O, N] = r.useState(!1),
                    [R, , L] = (0, E.Z)(),
                    G = (0, c.useHistory)(),
                    U = (0, h.G3)(G.location),
                    q = B.isTrue("responsive_web_verified_organizations_free_upgrade_promo_enabled"),
                    W = r.useCallback(() => {
                        H.scribe({ element: t, action: "error" }), N(!1), Z && V({ text: C, withClearButton: !0, withAutoDismiss: !0 });
                    }, [H, V, N, t, Z]),
                    j = r.useCallback(async () => {
                        try {
                            const { data: e, finalProductSku: r } = await (0, y.q)({ userClaims: T, featureSwitches: B, environment: $, selectedTier: F }),
                                n = e?.verified_organization_payment_info?.target_organization_tier;
                            let i = "FullAccess";
                            if (("PaidGoldBasic" === n ? (i = "Basic") : "PaidGray" === n ? (i = "FullAccessGov") : T.isFreeVerifiedOrg() && F && q && (i = F), !r || !i)) return W();
                            const { externalPriceId: c, promotionData: l } = await (0, v.xz)({ userClaims: T, featureSwitches: B, environment: $, voProduct: i, tierInterval: d, withDiscount: M }),
                                s = `${x}?referring_page=${U}`;
                            R({ externalPriceId: c, finalProductSku: r, cancelUrl: a || w, successUrl: o || s, promotionData: l })
                                .then(() => {
                                    H.scribe({ element: t, action: "success" });
                                })
                                .catch(W);
                        } catch {
                            return W();
                        }
                    }, [T, B, $, F, q, d, M, U, o, R, a, W, H, t]),
                    Y = r.useCallback(() => {
                        H.scribe({ element: t, action: "click" }),
                            N(!0),
                            m
                                ? m()
                                      .then(() => {
                                          j();
                                      })
                                      .catch(() => {
                                          N(!1);
                                      })
                                : j();
                    }, [j, m, H, t]);
                return (
                    r.useEffect(() => {
                        N(!1);
                    }, [G.location.pathname]),
                    r.createElement(b.H, { errorConfig: P }, r.createElement(l.ZP, { disabled: O || S, onClick: Y, style: A.button, testID: z, type: D }, O ? r.createElement(s.Z, { style: A.loadingIndicator }) : e), I && L ? L.subscriptioncheckoutsession_create?.errors?.map((e, t) => (e.error_message ? r.createElement(n.Z, { key: t }, r.createElement(u.Z.Danger, { text: e.error_message })) : null)) : null)
                );
            }
            const P = { context: "StripeCheckoutButton" },
                A = d.default.create((e) => ({ button: { marginVertical: e.spaces.space16 }, loadingIndicator: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space4 } })),
                S = r.memo(I);
        },
        82497: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => m });
            var r = a(202784),
                n = a(325686),
                o = a(107267),
                i = a(370006),
                c = a(392237),
                l = a(323265),
                s = a(545457),
                u = a(449067),
                d = a(234622);
            a(130582);
            const m = ({ children: e }) => {
                    (0, s.ph)();
                    const t = (0, o.useHistory)(),
                        a = l.ZP.isWebView();
                    return r.createElement(
                        d.i,
                        null,
                        r.createElement(
                            n.Z,
                            { style: p.root },
                            r.createElement(n.Z, { style: p.shadow }),
                            r.createElement(u.Z.Configure, { TabBar: () => null, headerless: !0, rightControl: null, sideNav: null, withAppBar: !1, withBottomTabBar: !1 }),
                            !a &&
                                r.createElement(i.Z, {
                                    backButtonType: "close",
                                    onClick: () => {
                                        t.goBack();
                                    },
                                    style: p.backButton,
                                }),
                            r.createElement(n.Z, { style: p.container }, e),
                        ),
                    );
                },
                p = c.default.create((e) => {
                    const t = "light" === e.paletteName ? "radial-gradient(56.1514% 56.1514% at 49.972% 38.959%, rgb(52 147 239 / 30%) 0%, rgb(255, 255, 255) 100%)" : "dark" === e.paletteName ? "radial-gradient(56.1514% 56.1514% at 49.972% 38.959%, rgba(52, 147, 239, 0.3) 0%, rgb(21 32 44) 100%)" : "radial-gradient(56.15141888052253% 56.15141888052254% at 49.97201160183933% 38.95898881943194%,#273649 0%,rgba(0,0,0,1) 100%)";
                    return { root: { height: "100vh", width: "100%", backgroundColor: e.colors.cellBackground, overflow: "auto" }, shadow: { position: "absolute", top: -300 * e.scaleMultiplier, minHeight: 650 * e.scaleMultiplier, width: "100%", backgroundImage: t }, container: { alignItems: "center", flex: 1, width: "100%", maxWidth: "1000px", marginHorizontal: "auto", paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space40 }, backButton: { position: "absolute", marginStart: "none", top: e.spaces.space16, start: e.spaces.space16, zIndex: 1 } };
                });
        },
        28057: (e, t, a) => {
            var r = a(482609),
                n = a(274380);
            (t = r(!1)).i(n), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        130582: (e, t, a) => {
            var r = a(46062),
                n = a(28057);
            "string" == typeof (n = n.__esModule ? n.default : n) && (n = [[e.id, n, ""]]);
            var o = { insert: "head", singleton: !1 };
            r(n, o);
            e.exports = n.locals || {};
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-2ace1ef0.aabed6ca.js.map
