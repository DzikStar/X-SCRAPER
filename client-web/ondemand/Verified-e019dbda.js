"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-e019dbda"],
    {
        949626: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(202784);
            var r = n(950822);
            const o = (e) => (0, r.Z)("div", e);
        },
        290402: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(807896),
                o = n(202784),
                a = n(182056),
                i = n(879113),
                l = n(392237),
                c = n(111677),
                s = n.n(c),
                d = n(968478);
            const f = s().aa6e3300,
                u = ({ retryMessage: e, ...t }, n) => {
                    const l = a.Z.isOnline();
                    return o.createElement(i.Z, (0, r.Z)({}, t, { icon: l ? void 0 : o.createElement(d.default, { style: m.icon }), retryMessage: l ? e : f }));
                },
                m = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = o.forwardRef(u);
        },
        664052: (e, t, n) => {
            n.d(t, { Z: () => E });
            var r = n(202784),
                o = n(301503),
                a = n(325686),
                i = n(925873),
                l = n(989272),
                c = n(891198),
                s = n(731708),
                d = n(977952),
                f = n(297256),
                u = n(524496),
                m = n(392237),
                p = n(111677),
                g = n.n(p),
                h = n(187669),
                b = n(874111);
            const _ = g().c2333081,
                S = (e) => {
                    const t = ((e) => {
                            try {
                                return e ? JSON.parse(e) : void 0;
                            } catch {
                                return;
                            }
                        })(e),
                        n = i.Z.initEditorState(t);
                    return i.Z.convertEmojiToEntities(n);
                },
                $ = m.default.create((e) => ({ message: { flexDirection: "row" }, textCountLabel: { flexDirection: "row", alignSelf: "center" }, container: { paddingHorizontal: e.spaces.space20, paddingTop: e.spaces.space28, paddingBottom: e.spaces.space20 }, readOnlyContainer: { padding: e.spaces.space16, maxHeight: "500px", overflowX: "auto", backgroundColor: e.colors.gray0, color: e.colors.gray300 }, richTextWrapper: { borderWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderRadius: e.borderRadii.small, padding: e.spaces.space1, marginBottom: e.spaces.space16 } })),
                E = ({ allowExtendedPasteStyles: e, characterLimit: t, editable: n = !0, editorClass: m, editorStyles: p, initialState: g = "", limitedRichText: E = !1, numberOfLines: y = 10, onChange: v, textSizesOverride: T }) => {
                    const [w, D] = r.useState(S(g));
                    (0, h.q)(() => {
                        p && m && (0, l.fH)(p, m);
                    });
                    const O = r.useMemo(() => w?.getCurrentContent(), [w]),
                        z = r.useCallback(
                            (e) => {
                                const t = i.Z.convertEmojiToEntities(e);
                                D(t), v(t);
                            },
                            [v],
                        ),
                        C = (0, b.c6)(w);
                    let I = C;
                    C > 1 && (I = c.ZP.getFormattedCount(C));
                    const P = r.useMemo(() => {
                            const e = !!t && C > t;
                            return r.createElement(a.Z, null, r.createElement(s.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: $.textCountLabel }, _({ count: I })));
                        }, [C, I, t]),
                        k = r.useMemo(() => ({ allowExtendedPasteStyles: e, editorState: w, element: d.Z, stripPastedStyles: !0 }), [e, w]);
                    return r.createElement(a.Z, null, n ? r.createElement(a.Z, { style: $.richTextWrapper }, r.createElement(f.b, { inputStyle: $.container, isInputFullWidth: !0, limitedRichText: E, numberOfLines: y, onChange: z, richTextInputContext: k, textSizesOverride: T, toolbarRightControl: P })) : r.createElement(r.Fragment, null, O && O.hasText() ? r.createElement(a.Z, { style: $.richTextWrapper }, r.createElement(a.Z, { style: $.readOnlyContainer }, r.createElement(u.Z, { contentState: (0, o.convertToRaw)(O) }))) : null));
                };
        },
        282559: (e, t, n) => {
            n.d(t, { v: () => c });
            n(571372);
            var r = n(96768),
                o = n(202784),
                a = (n(585488), n(351743)),
                i = n.n(a);
            const l = r.Z,
                c = ({ originProduct: e, returnUrl: t }) => {
                    const [n, r] = i()(l);
                    return [
                        o.useCallback(
                            () =>
                                new Promise((r, o) => {
                                    n({
                                        variables: { return_url: t, origin_product: e },
                                        onCompleted: ({ customerportalsession_create: e }, t) => {
                                            const n = e?.customer_portal_session_url ?? void 0;
                                            n ? r(n) : o(new Error("Missing portal URL"));
                                        },
                                        onError: o,
                                    });
                                }),
                            [n, t, e],
                        ),
                        r,
                    ];
                };
        },
        177210: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                o = n(111677),
                a = n.n(o),
                i = n(782826),
                l = n(282559),
                c = n(782642);
            const s = a().ef4602ec;
            function d(e) {
                const t = (0, c.p)(),
                    [n, o] = (0, l.v)(e),
                    a = r.useCallback(() => {
                        n()
                            .then((e) => {
                                i.ZP.navigateTo(e);
                            })
                            .catch(() => {
                                t({ text: s });
                            });
                    }, [n, t]);
                return o ? void 0 : a;
            }
        },
        478414: (e, t, n) => {
            n.d(t, { Hx: () => c, K: () => a, bb: () => l, gv: () => i, kg: () => s, yW: () => d });
            var r = n(779802),
                o = n(392237);
            const a = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext1" },
                i = { h1FontSize: "title4", h2FontSize: "headline1", paragraphFontSize: "headline2" },
                l = ({ h1FontSize: e, h2FontSize: t, paragraphFontSize: n }) => [
                    { blockType: r.P7.header1, label: r.et, component: (0, r.LI)({ size: e, children: r.et, extendedWidth: !0 }) },
                    { blockType: r.P7.header2, label: r.PW, component: (0, r.LI)({ size: t, weight: "bold", children: r.PW }) },
                    { blockType: r.P7.paragraph, label: r.$u, component: (0, r.LI)({ size: n, children: r.$u }) },
                ],
                c = "extended-profile",
                s = "extended-profile-mobile-webview",
                d = (e, { h1FontSize: t, h2FontSize: n, paragraphFontSize: r }) =>
                    `\n    .${e} .longform-header-one {\n        font-family: ${o.default.theme.fontFamilies.chirpExtended};\n        font-size: ${o.default.theme.fontSizes[t]};\n        line-height: ${o.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-one-narrow {\n        font-family: ${o.default.theme.fontFamilies.chirpExtended};\n        font-size: ${o.default.theme.fontSizes[t]};\n        line-height: ${o.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two {\n        font-size: ${o.default.theme.fontSizes[n]};\n        font-weight: ${o.default.theme.fontWeights.bold};\n        line-height: ${o.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two-narrow {\n        font-size: calc(${o.default.theme.fontSizes[n]} + 1px);\n        font-weight: ${o.default.theme.fontWeights.bold};\n        line-height: ${o.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled, \n    .${e} .longform-blockquote {\n        font-size: ${o.default.theme.fontSizes[r]};\n        line-height: ${o.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled-narrow, \n    .${e} .longform-blockquote-narrow {\n        font-size: ${o.default.theme.fontSizes[r]};\n        line-height: ${o.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item, \n    .${e} .longform-ordered-list-item {\n        display: block;\n        font-size: ${o.default.theme.fontSizes[r]};\n        line-height: ${o.default.theme.lineHeights.headline1};\n        margin-bottom: ${o.default.theme.spaces.space2};\n        margin-left: calc(${o.default.theme.spaces.space20} + ${o.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item-narrow, \n    .${e} .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${o.default.theme.fontSizes[r]};\n        line-height: ${o.default.theme.lineHeights.headline1};\n        margin-bottom: ${o.default.theme.spaces.space2};\n        margin-left: ${o.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .${e} .longform-blockquote, \n    .${e} .longform-blockquote-narrow {\n        margin-bottom: 0;\n        margin-left: 0;\n        margin-top: calc(-${o.default.theme.spaces.space2});\n        padding-left: calc(${o.default.theme.spaces.space20} + 2px);\n        position: relative;\n    }\n\n    .${e} .longform-blockquote:before, \n    .${e} .longform-blockquote-narrow:before {\n        background: ${o.default.theme.colors.gray900};\n        border-radius: ${o.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .${e} .longform-header-one .public-DraftStyleDefault-block,\n    .${e} .longform-header-two .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .${e} .public-DraftStyleDefault-ul, \n    .${e} .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .${e} .longform-unordered-list-item:before, \n    .${e} .longform-ordered-list-item:before,\n    .${e} .longform-unordered-list-item-narrow:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${o.default.theme.spaces.space20} + ${o.default.theme.spaces.space2}));\n    }\n\n    .${e} .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes[r]}\n    }\n\n    .${e} .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes[r]}\n    }\n\n    .${e} .longform-ordered-list-item:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .${e} .longform-ordered-list-item::marker, \n    .${e} .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        548797: (e, t, n) => {
            n.d(t, { Ld: () => d, gS: () => s, pB: () => l, yv: () => c });
            var r = n(111677),
                o = n.n(r),
                a = n(337394);
            const i = o().b47d123d,
                l = (e) => {
                    const t = e?.prices?.find((e) => e?.charge_interval === a.rv.Year),
                        n = e?.prices?.find((e) => e?.charge_interval === a.rv.Month),
                        r = n ? 12 * n?.amount_local_micro : 0,
                        o = t ? Math.floor(((t.amount_local_micro - r) / r) * -100) : null;
                    return i({ percentage: o });
                },
                c = ({ activeSubscription: e, tier: t }) => {
                    const n = e?.product?.rest_id;
                    if (!n) return "invalid";
                    if (a.v5.premium[n] === t) return "active";
                    switch (a.v5.premium[n]) {
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
                s = (e, t, n) => {
                    const { status: r } = n,
                        o = Date.now(),
                        a = e?.promotions?.filter((e) => {
                            const n = parseInt(e.ends_at_msec, 10),
                                a = parseInt(e.started_from_msec, 10);
                            if (e.promotion_type === t && n > o) {
                                if ("active" === r) return a < o;
                                if ("pending" === r) return a > o;
                            }
                        });
                    return a?.[0];
                },
                d = (e) => "Twitter" === e.payment_source || "Ads" === e.payment_source;
        },
        685731: (e, t, n) => {
            n.d(t, { Gi: () => b, Mk: () => S, ZV: () => g, aU: () => p, d3: () => _, fS: () => $, pt: () => h });
            n(202784);
            var r = n(111677),
                o = n.n(r),
                a = n(336629),
                i = n(862695),
                l = n(97882),
                c = n(337394),
                s = n(548797);
            const d = o().c6614cc0,
                f = o().f8d3b50a,
                u = o().i2c32253,
                m = o().c41e1023;
            function p(e, t = !0, n) {
                let r = "number" == typeof e?.amount_local_micro ? e.amount_local_micro : 0;
                if (
                    (t &&
                        (r += (function (e) {
                            return "number" == typeof e?.tax_amount_local_micro ? e.tax_amount_local_micro : 0;
                        })(e)),
                    n)
                ) {
                    r -= r * (n / 100);
                }
                return r;
            }
            function g(e) {
                return "number" == typeof e?.tax_amount_local_micro ? f : d;
            }
            const h = (e, t, n) => (Array.isArray(e) ? e.filter((e) => e.charge_interval === n && e.metadata.purchasable).find((e) => (t ? !0 === e.metadata?.seated : !1 === e.metadata?.seated)) : void 0);
            function b(e, t) {
                if (e && t) return t?.find((t) => t?.charge_interval === e);
            }
            function _(e, t = !1, n, r = !1, o = !0) {
                const d = (0, s.gS)(n, "Discount", { status: r ? "pending" : "active" }),
                    f = (0, l.x)({ amount: p(e, t), currencyCode: e?.currency_code?.toUpperCase(), removeTrailingZeros: !0 });
                return d && e.charge_interval ? (0, i.V)({ selectedInterval: e.charge_interval, duration: d.promotion_metadata?.duration_in_interval, discountedFormattedPrice: (0, a.T)({ price: e, percentOff: d.promotion_metadata?.percent_off, includeTax: t, annualPriceMonthly: !1 }), formattedPrice: f, includeDiscountedPrice: !0, includeThenLabel: o }) : e.charge_interval === c.rv.Year ? m({ price: f }) : e.charge_interval === c.rv.Month ? u({ price: f }) : "";
            }
            const S = (e) => {
                    const t = e.subscription_promotions?.find((e) => !!e.metadata.free_trial_days);
                    return t;
                },
                $ = (e, t, n) => {
                    if (!t || n) return null;
                    const r = e.subscription_promotions?.find((e) => !(!e.metadata.duration_in_interval || !e.metadata.percent_off || !e.ends_at_msec || e.metadata.free_trial_days));
                    return r;
                };
        },
        359870: (e, t, n) => {
            n.d(t, { Z: () => l, b: () => i });
            var r = n(111677);
            const o = n.n(r)().g33c0564,
                a = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,64}$/,
                i = 385;
            function l(e) {
                return e.length > i ? o : a.test(e) ? void 0 : o;
            }
        },
        794057: (e, t, n) => {
            n.d(t, { C0: () => i, DC: () => r, _e: () => a, iN: () => s, kd: () => l, pc: () => o });
            const r = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                o = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                a = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                i = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                l = { content_state: { blocks: [], entity_map: [] } },
                c = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                s = Object.freeze({ DRAFT: c.DRAFT, PUBLISHED: c.PUBLISHED });
        },
        488645: (e, t, n) => {
            n.d(t, { q: () => a });
            var r = n(225258),
                o = n(917799);
            const a =
                    (e, t, n, a, l) =>
                    async (c, s, { api: d, userPersistence: f }) => {
                        const u = await i(f, n, a, l);
                        return u ? (0, o.Vg)(c, { params: { basePixel: e, eventPixel: t, twclid: u }, request: ({ basePixel: e, eventPixel: t, twclid: n } = {}, o) => d.withEndpoint(r.Z).postConversion(e, t, n, o) })("POST_CONVERSION") : Promise.resolve(null);
                    },
                i = async (e, t, n, r) => {
                    let o = t;
                    if (r && o) await e.set(n, { twclid: o });
                    else {
                        const t = await e.get(n, 1728e5);
                        t && "string" == typeof t.twclid && ((o = t.twclid), await e.delete(n));
                    }
                    return o;
                };
        },
        689212: (e, t, n) => {
            n.d(t, { am: () => f, XI: () => u, rF: () => p });
            var r = n(499627),
                o = n(312771),
                a = n(540819);
            const i = Object.freeze({ CONFIG_LOADED: "rweb/verifiedOrgConfig/LOADED", CONFIG_REQUEST: "rweb/verifiedOrgConfig/REQUEST", SET_CONFIG: "rweb/verifiedOrgConfig/SET" }),
                l = "verifiedOrgConfig",
                c = "rweb.verifiedOrgConfig",
                s = { currentTab: a.p.ACCOUNTS },
                d = Object.freeze({ fetchStatus: o.ZP.NONE, config: s });
            const f = (e) => e[l].fetchStatus,
                u = (e) => e[l].config.currentTab || a.p.ACCOUNTS,
                m = (e) => ({ payload: e, type: i.CONFIG_LOADED }),
                p =
                    (e) =>
                    (t, n, { userPersistence: r }) => (t({ payload: e, type: i.SET_CONFIG }), r.set(c, e));
            r.Z.register(
                {
                    [l]: function (e = d, t) {
                        switch (t.type) {
                            case i.CONFIG_REQUEST:
                                return { ...e, fetchStatus: o.ZP.LOADING };
                            case i.CONFIG_LOADED:
                                return { ...e, fetchStatus: o.ZP.LOADED, config: { ...t.payload } };
                            case i.SET_CONFIG:
                                return { ...e, config: { ...t.payload } };
                            default:
                                return e;
                        }
                    },
                },
                () =>
                    (e, t, { userPersistence: n }) => (
                        e({ type: i.CONFIG_REQUEST }),
                        n
                            .get(c)
                            .then((t) => e(m(t || s)))
                            .catch(() => {
                                e(m(s));
                            })
                    ),
            );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-e019dbda.45e59b8a.js.map
