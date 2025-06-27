"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-8ed0fac5"],
    {
        548797: (e, t, r) => {
            r.d(t, { Ld: () => d, gS: () => u, pB: () => c, yv: () => s });
            var n = r(111677),
                a = r.n(n),
                i = r(337394);
            const o = a().b47d123d,
                c = (e) => {
                    const t = e?.prices?.find((e) => e?.charge_interval === i.rv.Year),
                        r = e?.prices?.find((e) => e?.charge_interval === i.rv.Month),
                        n = r ? 12 * r?.amount_local_micro : 0,
                        a = t ? Math.floor(((t.amount_local_micro - n) / n) * -100) : null;
                    return o({ percentage: a });
                },
                s = ({ activeSubscription: e, tier: t }) => {
                    const r = e?.product?.rest_id;
                    if (!r) return "invalid";
                    if (i.v5.premium[r] === t) return "active";
                    switch (i.v5.premium[r]) {
                        case "PremiumBasic":
                            if ("BlueVerified" === t || "BlueVerifiedPlus" === t) return "upgrade";
                            break;
                        case "BlueVerified":
                            if ("PremiumBasic" === t) return "downgrade";
                            if ("BlueVerifiedPlus" === t) return "upgrade";
                            break;
                        case "BlueVerifiedPlus":
                            if ("BlueVerified" === t || "PremiumBasic" === t) return "downgrade";
                            break;
                        default:
                            return "invalid";
                    }
                    return "invalid";
                },
                u = (e, t, r) => {
                    const { status: n } = r,
                        a = Date.now(),
                        i = e?.promotions?.filter((e) => {
                            const r = parseInt(e.ends_at_msec, 10),
                                i = parseInt(e.started_from_msec, 10);
                            if (e.promotion_type === t && r > a) {
                                if ("active" === n) return i < a;
                                if ("pending" === n) return i > a;
                            }
                        });
                    return i?.[0];
                },
                d = (e) => "Twitter" === e.payment_source || "Ads" === e.payment_source;
        },
        685731: (e, t, r) => {
            r.d(t, { Gi: () => E, Mk: () => T, ZV: () => p, aU: () => m, d3: () => g, fS: () => b, pt: () => v });
            r(202784);
            var n = r(111677),
                a = r.n(n),
                i = r(336629),
                o = r(862695),
                c = r(97882),
                s = r(337394),
                u = r(548797);
            const d = a().c6614cc0,
                l = a().f8d3b50a,
                f = a().i2c32253,
                _ = a().c41e1023;
            function m(e, t = !0, r) {
                let n = "number" == typeof e?.amount_local_micro ? e.amount_local_micro : 0;
                if (
                    (t &&
                        (n += (function (e) {
                            return "number" == typeof e?.tax_amount_local_micro ? e.tax_amount_local_micro : 0;
                        })(e)),
                    r)
                ) {
                    n -= n * (r / 100);
                }
                return n;
            }
            function p(e) {
                return "number" == typeof e?.tax_amount_local_micro ? l : d;
            }
            const v = (e, t, r) => (Array.isArray(e) ? e.filter((e) => e.charge_interval === r && e.metadata.purchasable).find((e) => (t ? !0 === e.metadata?.seated : !1 === e.metadata?.seated)) : void 0);
            function E(e, t) {
                if (e && t) return t?.find((t) => t?.charge_interval === e);
            }
            function g(e, t = !1, r, n = !1, a = !0) {
                const d = (0, u.gS)(r, "Discount", { status: n ? "pending" : "active" }),
                    l = (0, c.x)({ amount: m(e, t), currencyCode: e?.currency_code?.toUpperCase(), removeTrailingZeros: !0 });
                return d && e.charge_interval ? (0, o.V)({ selectedInterval: e.charge_interval, duration: d.promotion_metadata?.duration_in_interval, discountedFormattedPrice: (0, i.T)({ price: e, percentOff: d.promotion_metadata?.percent_off, includeTax: t, annualPriceMonthly: !1 }), formattedPrice: l, includeDiscountedPrice: !0, includeThenLabel: a }) : e.charge_interval === s.rv.Year ? _({ price: l }) : e.charge_interval === s.rv.Month ? f({ price: l }) : "";
            }
            const T = (e) => {
                    const t = e.subscription_promotions?.find((e) => !!e.metadata.free_trial_days);
                    return t;
                },
                b = (e, t, r) => {
                    if (!t || r) return null;
                    const n = e.subscription_promotions?.find((e) => !(!e.metadata.duration_in_interval || !e.metadata.percent_off || !e.ends_at_msec || e.metadata.free_trial_days));
                    return n;
                };
        },
        359870: (e, t, r) => {
            r.d(t, { Z: () => c, b: () => o });
            var n = r(111677);
            const a = r.n(n)().g33c0564,
                i = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,64}$/,
                o = 385;
            function c(e) {
                return e.length > o ? a : i.test(e) ? void 0 : a;
            }
        },
        794057: (e, t, r) => {
            r.d(t, { C0: () => o, DC: () => n, _e: () => i, iN: () => u, kd: () => c, pc: () => a });
            const n = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                a = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                i = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                o = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                c = { content_state: { blocks: [], entity_map: [] } },
                s = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                u = Object.freeze({ DRAFT: s.DRAFT, PUBLISHED: s.PUBLISHED });
        },
        488645: (e, t, r) => {
            r.d(t, { q: () => i });
            var n = r(225258),
                a = r(917799);
            const i =
                    (e, t, r, i, c) =>
                    async (s, u, { api: d, userPersistence: l }) => {
                        const f = await o(l, r, i, c);
                        return f ? (0, a.Vg)(s, { params: { basePixel: e, eventPixel: t, twclid: f }, request: ({ basePixel: e, eventPixel: t, twclid: r } = {}, a) => d.withEndpoint(n.Z).postConversion(e, t, r, a) })("POST_CONVERSION") : Promise.resolve(null);
                    },
                o = async (e, t, r, n) => {
                    let a = t;
                    if (n && a) await e.set(r, { twclid: a });
                    else {
                        const t = await e.get(r, 1728e5);
                        t && "string" == typeof t.twclid && ((a = t.twclid), await e.delete(r));
                    }
                    return a;
                };
        },
        689212: (e, t, r) => {
            r.d(t, { am: () => l, XI: () => f, rF: () => m });
            var n = r(499627),
                a = r(312771),
                i = r(540819);
            const o = Object.freeze({ CONFIG_LOADED: "rweb/verifiedOrgConfig/LOADED", CONFIG_REQUEST: "rweb/verifiedOrgConfig/REQUEST", SET_CONFIG: "rweb/verifiedOrgConfig/SET" }),
                c = "verifiedOrgConfig",
                s = "rweb.verifiedOrgConfig",
                u = { currentTab: i.p.ACCOUNTS },
                d = Object.freeze({ fetchStatus: a.ZP.NONE, config: u });
            const l = (e) => e[c].fetchStatus,
                f = (e) => e[c].config.currentTab || i.p.ACCOUNTS,
                _ = (e) => ({ payload: e, type: o.CONFIG_LOADED }),
                m =
                    (e) =>
                    (t, r, { userPersistence: n }) => (t({ payload: e, type: o.SET_CONFIG }), n.set(s, e));
            n.Z.register(
                {
                    [c]: function (e = d, t) {
                        switch (t.type) {
                            case o.CONFIG_REQUEST:
                                return { ...e, fetchStatus: a.ZP.LOADING };
                            case o.CONFIG_LOADED:
                                return { ...e, fetchStatus: a.ZP.LOADED, config: { ...t.payload } };
                            case o.SET_CONFIG:
                                return { ...e, config: { ...t.payload } };
                            default:
                                return e;
                        }
                    },
                },
                () =>
                    (e, t, { userPersistence: r }) => (
                        e({ type: o.CONFIG_REQUEST }),
                        r
                            .get(s)
                            .then((t) => e(_(t || u)))
                            .catch(() => {
                                e(_(u));
                            })
                    ),
            );
        },
        336629: (e, t, r) => {
            r.d(t, { T: () => i });
            var n = r(97882),
                a = r(685731);
            const i = ({ annualPriceMonthly: e, includeTax: t, monthlyPriceAnnual: r, percentOff: i, price: o }) => {
                const c = (0, a.aU)(o, t, i),
                    s = e ? c / 12 : r ? 12 * c : c;
                return (0, n.x)({ amount: s, currencyCode: o?.currency_code.toUpperCase(), removeTrailingZeros: !0 });
            };
        },
        862695: (e, t, r) => {
            r.d(t, { V: () => g, f: () => E });
            var n = r(202784),
                a = r(325686),
                i = r(731708),
                o = r(392237),
                c = r(111677),
                s = r.n(c),
                u = r(336629);
            const d = s().i57aeafb,
                l = s().ae3e3723,
                f = s().ade4c757,
                _ = s().f7798e11,
                m = s().e0b39888,
                p = s().b67c37de,
                v = s().a8363765,
                E = ({ activeDiscountInfo: e, discountInfo: t, formattedPrice: r, includeTax: n, isFreeTrial: a, isTierSwitching: i, price: o, selectedInterval: c, shouldRemoveExtraStep: s, withAnnualPriceMonthly: d }) => (a ? ("Month" === c ? f({ price: r }) : _({ price: r })) : t || e ? g({ formattedPrice: r, selectedInterval: c, includeDiscountedPrice: "Year" === c && d, discountedFormattedPrice: (0, u.T)({ price: o, includeTax: n, percentOff: i ? e?.promotion_metadata?.percent_off : t?.metadata.percent_off, annualPriceMonthly: !1 }), duration: i ? e?.promotion_metadata?.duration_in_interval : t?.metadata.duration_in_interval, includeThenLabel: !1 }) : d && "Year" === c && s ? v({ price: r }) : "Month" === c ? m : p),
                g = ({ discountedFormattedPrice: e, duration: t, formattedPrice: r, includeDiscountedPrice: o, includeThenLabel: c, selectedInterval: u }) => {
                    let m;
                    return (m = "Month" === u ? (o ? n.createElement(s().I18NFormatMessage, { $i18n: "a629c16f", discountedPrice: e ?? "", duration: t ?? "" }, n.createElement(i.ZP, { style: { textDecorationLine: "line-through" } }, s().df3ed1c8({ standardPrice: r }))) : d({ duration: t, standardPrice: r })) : o ? n.createElement(s().I18NFormatMessage, { $i18n: "c142e70f", discountedPrice: e ?? "", duration: t ?? "" }, n.createElement(i.ZP, { style: { textDecorationLine: "line-through" } }, s().g261b098({ standardPrice: r }))) : l({ duration: t, standardPrice: r })), c && (m = n.createElement(a.Z, null, n.createElement(i.ZP, { style: T.marginBottom }, m), n.createElement(i.ZP, null, "Year" === u ? _({ price: r }) : f({ price: r })))), m;
                },
                T = o.default.create((e) => ({ marginBottom: { marginBottom: e.spaces.space8 } }));
        },
        955010: (e, t, r) => {
            r.d(t, { B: () => l });
            var n = r(265433),
                a = r(202784),
                i = (r(585488), r(351743)),
                o = r.n(i),
                c = r(468811),
                s = r.n(c),
                u = r(71620);
            const d = n.Z;
            function l(e, t, r) {
                const [n] = o()(d),
                    i = (0, u.po)();
                return a.useCallback(
                    (a, o) => {
                        n({
                            variables: { module_id: o, enabled_for_display: a },
                            optimisticResponse: { user_update_module_visibility: { user_results: { id: s().v4(), result: { __typename: "User", id: e, editable_profilemodules: { modules_for_display: a ? [{ module_id: o }] : [] } } } } },
                            onError: (e) => {
                                i(e);
                            },
                            onCompleted: () => {
                                t && r && (t(!1), r());
                            },
                        });
                    },
                    [i, r, t, e, n],
                );
            }
        },
        499833: (e, t, r) => {
            r.r(t), r.d(t, { default: () => S });
            var n = r(807896),
                a = (r(136728), r(719681)),
                i = r(934562),
                o = r(202784),
                c = r(614983),
                s = r.n(c),
                u = (r(585488), r(351743)),
                d = r.n(u),
                l = r(111677),
                f = r.n(l),
                _ = r(545457),
                m = r(252021),
                p = r(736063),
                v = r(535338),
                E = r(762522),
                g = r(454104),
                T = r(406098),
                b = r(358981);
            const h = i.Z,
                y = a.Z,
                I = f().g2c0144a,
                O = f().b12424fc,
                P = f().ca8df1e2,
                C = (e) => {
                    const { history: t } = e,
                        r = (0, v.p)(y, {}),
                        { basePath: a, isVerifiedOrg: i } = (0, g.Z)(),
                        c = r?.viewer?.user_results?.result?.rest_id || "",
                        s = r?.viewer?.user_results?.result?.recruiting_organization_results?.result?.__id;
                    return c && s ? (!i && (r?.viewer?.user_results?.result?.recruiting_organization_results?.result?.job_count?.total_count || 0) >= 3 && t.push(a), o.createElement(w, (0, n.Z)({}, e, { basePath: a, isVerifiedOrg: i, orgQueryId: s, viewerUserId: c }))) : null;
                },
                w = (e) => {
                    const { basePath: t, history: r, isVerifiedOrg: n, orgQueryId: a, viewerUserId: i } = e,
                        [c, u] = d()(h),
                        l = o.useCallback(
                            (e) => {
                                "number" == typeof e?.salary_min && e.salary_min < 0 && (e.salary_min = null),
                                    "number" == typeof e?.salary_max && e.salary_max < 0 && (e.salary_max = null),
                                    c({
                                        variables: { userId: i, ...e },
                                        updater: (e, t) => {
                                            const r = e.get(a);
                                            s()(r, "orgRecord must be specified"), r.invalidateRecord();
                                        },
                                        onCompleted: () => {
                                            r.push(t);
                                        },
                                        onError: () => {
                                            r.push(`${t}/new`, { verifiedOrgAdminError: E.F.createJob });
                                        },
                                    });
                            },
                            [c, i, a, r, t],
                        ),
                        f = o.useCallback(() => {
                            r.push(t);
                        }, [t, r]);
                    return o.createElement(m.Z, { TabBar: n ? b.Z : void 0, history: r, isFullWidth: !0, primaryContent: o.createElement(T.Z, { description: P, formTitle: O, isMutationInFlight: u, onCancel: f, onSubmit: l }), sidebarContent: null, title: n ? I : null, withTweetButton: !1 });
                },
                D = { context: "AddJobList" },
                A = (e) => ((0, _.ph)(), o.createElement(p.H, { errorConfig: D }, o.createElement(C, e))),
                S = o.memo(A);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-8ed0fac5.dd6aec4a.js.map
