"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-9f4db315"],
    {
        664052: (e, t, r) => {
            r.d(t, { Z: () => y });
            var n = r(202784),
                i = r(301503),
                o = r(325686),
                a = r(925873),
                l = r(989272),
                c = r(891198),
                s = r(731708),
                d = r(977952),
                u = r(297256),
                p = r(524496),
                m = r(392237),
                f = r(332920),
                h = r.n(f),
                _ = r(187669),
                C = r(874111);
            const T = h().c2333081,
                E = (e) => {
                    const t = ((e) => {
                            try {
                                return e ? JSON.parse(e) : void 0;
                            } catch {
                                return;
                            }
                        })(e),
                        r = a.Z.initEditorState(t);
                    return a.Z.convertEmojiToEntities(r);
                },
                g = m.default.create((e) => ({ message: { flexDirection: "row" }, textCountLabel: { flexDirection: "row", alignSelf: "center" }, container: { paddingHorizontal: e.spaces.space20, paddingTop: e.spaces.space28, paddingBottom: e.spaces.space20 }, readOnlyContainer: { padding: e.spaces.space16, maxHeight: "500px", overflowX: "auto", backgroundColor: e.colors.gray0, color: e.colors.gray300 }, richTextWrapper: { borderWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderRadius: e.borderRadii.small, padding: e.spaces.space1, marginBottom: e.spaces.space16 } })),
                y = ({ allowExtendedPasteStyles: e, characterLimit: t, editable: r = !0, editorClass: m, editorStyles: f, initialState: h = "", limitedRichText: y = !1, numberOfLines: w = 10, onChange: b, textSizesOverride: v }) => {
                    const [O, S] = n.useState(E(h));
                    (0, _.q)(() => {
                        f && m && (0, l.fH)(f, m);
                    });
                    const I = n.useMemo(() => O?.getCurrentContent(), [O]),
                        D = n.useCallback(
                            (e) => {
                                const t = a.Z.convertEmojiToEntities(e);
                                S(t), b(t);
                            },
                            [b],
                        ),
                        x = (0, C.c6)(O);
                    let B = x;
                    x > 1 && (B = c.ZP.getFormattedCount(x));
                    const P = n.useMemo(() => {
                            const e = !!t && x > t;
                            return n.createElement(o.Z, null, n.createElement(s.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: g.textCountLabel }, T({ count: B })));
                        }, [x, B, t]),
                        L = n.useMemo(() => ({ allowExtendedPasteStyles: e, editorState: O, element: d.Z, stripPastedStyles: !0 }), [e, O]);
                    return n.createElement(o.Z, null, r ? n.createElement(o.Z, { style: g.richTextWrapper }, n.createElement(u.b, { inputStyle: g.container, isInputFullWidth: !0, limitedRichText: y, numberOfLines: w, onChange: D, richTextInputContext: L, textSizesOverride: v, toolbarRightControl: P })) : n.createElement(n.Fragment, null, I && I.hasText() ? n.createElement(o.Z, { style: g.richTextWrapper }, n.createElement(o.Z, { style: g.readOnlyContainer }, n.createElement(p.Z, { contentState: (0, i.convertToRaw)(I) }))) : null));
                };
        },
        253493: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(202784),
                i = r(107267),
                o = r(791632),
                a = r(325686),
                l = r(537392),
                c = r(10656),
                s = r(655352),
                d = r(555079),
                u = r(500002),
                p = r(625661),
                m = r(449067),
                f = r(655543),
                h = r(715601),
                _ = r(392237);
            const C = _.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ..._.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class T extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? n.createElement(a.Z, { style: C.fill }, n.createElement(h.Z, { style: C.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return n.createElement(l.ZP, null, ({ containerWidth: e }) => (c.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: r, screenType: i, showSubtitleOnRoot: o, showSubtitleOnWideDetail: a, withBottomBorder: l, withDetailOpen: c, ...d } = this.props;
                    return n.createElement(n.Fragment, null, (0, s.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : n.createElement(m.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return n.createElement(n.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: r, appBarStyle: i, backLocation: o, documentTitle: l, headerless: c, history: s, leftControl: u, middleControl: f, onBackClick: h, rightControl: _, screenType: T, searchBoxOptions: E, secondaryBar: g, showSubtitleOnRoot: y, showSubtitleOnWideDetail: w, subtitle: b, title: v, titleIconCell: O, titleIconCellSize: S, withDetailOpen: I, withSearchBox: D, withTweetButton: x, withWideContainer: B } = this.props,
                        P = "root" === T,
                        L = "secondaryRoot" === T,
                        Z = "primaryDetail" === T,
                        A = (Z && w) || (P && y),
                        R = P || (Z && e),
                        F = P ? d.ey : Z ? d.vX : void 0,
                        N = n.createElement(a.Z, { style: C.appBarContainer }, n.createElement(p.ZP, { backLocation: o, fixed: !1, hideBackButton: R, history: s, leftControl: u, middleControl: f, onBackClick: h, rightControl: _, secondaryBar: g, style: i, subtitle: A ? b : void 0, title: v, titleDomId: F, titleIconCell: O, titleIconCellSize: S, withWideContainer: B })),
                        k = P || (L && I) ? null : n.createElement(m.Z.Configure, { SideNavButton: t, TabBar: r, backLocation: o, documentTitle: l, headerless: c, middleControl: f, onBackClick: h, rightControl: _, searchBoxOptions: E, subtitle: b, title: v, withSearchBox: D, withTweetButton: x });
                    return n.createElement(n.Fragment, null, k, N);
                }
            }
            (T.contextType = f.Z), (T.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const E = (0, u.ZP)(T),
                g = (e) => {
                    const t = (0, i.useHistory)();
                    return (0, o.HD)(t) ? e.children || null : n.createElement(E, e);
                };
        },
        548797: (e, t, r) => {
            r.d(t, { Ld: () => d, gS: () => s, pB: () => l, yv: () => c });
            var n = r(332920),
                i = r.n(n),
                o = r(337394);
            const a = i().b47d123d,
                l = (e) => {
                    const t = e?.prices?.find((e) => e?.charge_interval === o.rv.Year),
                        r = e?.prices?.find((e) => e?.charge_interval === o.rv.Month),
                        n = r ? 12 * r?.amount_local_micro : 0,
                        i = t ? Math.floor(((t.amount_local_micro - n) / n) * -100) : null;
                    return a({ percentage: i });
                },
                c = ({ activeSubscription: e, tier: t }) => {
                    const r = e?.product?.rest_id;
                    if (!r) return "invalid";
                    if (o.v5.premium[r] === t) return "active";
                    switch (o.v5.premium[r]) {
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
                s = (e, t, r) => {
                    const { status: n } = r,
                        i = Date.now(),
                        o = e?.promotions?.filter((e) => {
                            const r = parseInt(e.ends_at_msec, 10),
                                o = parseInt(e.started_from_msec, 10);
                            if (e.promotion_type === t && r > i) {
                                if ("active" === n) return o < i;
                                if ("pending" === n) return o > i;
                            }
                        });
                    return o?.[0];
                },
                d = (e) => "Twitter" === e.payment_source || "Ads" === e.payment_source;
        },
        685731: (e, t, r) => {
            r.d(t, { Gi: () => C, Mk: () => E, ZV: () => h, aU: () => f, d3: () => T, fS: () => g, pt: () => _ });
            r(202784);
            var n = r(332920),
                i = r.n(n),
                o = r(336629),
                a = r(862695),
                l = r(97882),
                c = r(337394),
                s = r(548797);
            const d = i().c6614cc0,
                u = i().f8d3b50a,
                p = i().i2c32253,
                m = i().c41e1023;
            function f(e, t = !0, r) {
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
            function h(e) {
                return "number" == typeof e?.tax_amount_local_micro ? u : d;
            }
            const _ = (e, t, r) => (Array.isArray(e) ? e.filter((e) => e.charge_interval === r && e.metadata.purchasable).find((e) => (t ? !0 === e.metadata?.seated : !1 === e.metadata?.seated)) : void 0);
            function C(e, t) {
                if (e && t) return t?.find((t) => t?.charge_interval === e);
            }
            function T(e, t = !1, r, n = !1, i = !0) {
                const d = (0, s.gS)(r, "Discount", { status: n ? "pending" : "active" }),
                    u = (0, l.x)({ amount: f(e, t), currencyCode: e?.currency_code?.toUpperCase(), removeTrailingZeros: !0 });
                return d && e.charge_interval ? (0, a.V)({ selectedInterval: e.charge_interval, duration: d.promotion_metadata?.duration_in_interval, discountedFormattedPrice: (0, o.T)({ price: e, percentOff: d.promotion_metadata?.percent_off, includeTax: t, annualPriceMonthly: !1 }), formattedPrice: u, includeDiscountedPrice: !0, includeThenLabel: i }) : e.charge_interval === c.rv.Year ? m({ price: u }) : e.charge_interval === c.rv.Month ? p({ price: u }) : "";
            }
            const E = (e) => {
                    const t = e.subscription_promotions?.find((e) => !!e.metadata.free_trial_days);
                    return t;
                },
                g = (e, t, r) => {
                    if (!t || r) return null;
                    const n = e.subscription_promotions?.find((e) => !(!e.metadata.duration_in_interval || !e.metadata.percent_off || !e.ends_at_msec || e.metadata.free_trial_days));
                    return n;
                };
        },
        359870: (e, t, r) => {
            r.d(t, { Z: () => l, b: () => a });
            var n = r(332920);
            const i = r.n(n)().g33c0564,
                o = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,64}$/,
                a = 385;
            function l(e) {
                return e.length > a ? i : o.test(e) ? void 0 : i;
            }
        },
        794057: (e, t, r) => {
            r.d(t, { C0: () => a, DC: () => n, _e: () => o, iN: () => s, kd: () => l, pc: () => i });
            const n = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                i = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                o = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                a = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                l = { content_state: { blocks: [], entity_map: [] } },
                c = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                s = Object.freeze({ DRAFT: c.DRAFT, PUBLISHED: c.PUBLISHED });
        },
        116868: (e, t, r) => {
            r.d(t, { q: () => a });
            const n = window?.location?.host ? `https://${window?.location?.host}` : "https://www.x.com",
                i = ({ apiClient: e, featureSwitches: t }) => ({
                    postConversion(t, r, i, o = {}) {
                        const a = { conversions: [{ basePixel: t, eventPixel: r, twclid: i }] };
                        return e.postUnversioned("/i/capi", a, { ...o, "content-type": "application/json" }, n).then((e) => e.data);
                    },
                });
            var o = r(917799);
            const a =
                    (e, t, r, n, a) =>
                    async (c, s, { api: d, userPersistence: u }) => {
                        const p = await l(u, r, n, a);
                        return p ? (0, o.Vg)(c, { params: { basePixel: e, eventPixel: t, twclid: p }, request: ({ basePixel: e, eventPixel: t, twclid: r } = {}, n) => d.withEndpoint(i).postConversion(e, t, r, n) })("POST_CONVERSION") : Promise.resolve(null);
                    },
                l = async (e, t, r, n) => {
                    let i = t;
                    if (n && i) await e.set(r, { twclid: i });
                    else {
                        const t = await e.get(r, 1728e5);
                        t && "string" == typeof t.twclid && ((i = t.twclid), await e.delete(r));
                    }
                    return i;
                };
        },
        689212: (e, t, r) => {
            r.d(t, { am: () => u, XI: () => p, rF: () => f });
            var n = r(499627),
                i = r(312771),
                o = r(540819);
            const a = Object.freeze({ CONFIG_LOADED: "rweb/verifiedOrgConfig/LOADED", CONFIG_REQUEST: "rweb/verifiedOrgConfig/REQUEST", SET_CONFIG: "rweb/verifiedOrgConfig/SET" }),
                l = "verifiedOrgConfig",
                c = "rweb.verifiedOrgConfig",
                s = { currentTab: o.p.ACCOUNTS },
                d = Object.freeze({ fetchStatus: i.ZP.NONE, config: s });
            const u = (e) => e[l].fetchStatus,
                p = (e) => e[l].config.currentTab || o.p.ACCOUNTS,
                m = (e) => ({ payload: e, type: a.CONFIG_LOADED }),
                f =
                    (e) =>
                    (t, r, { userPersistence: n }) => (t({ payload: e, type: a.SET_CONFIG }), n.set(c, e));
            n.Z.register(
                {
                    [l]: function (e = d, t) {
                        switch (t.type) {
                            case a.CONFIG_REQUEST:
                                return { ...e, fetchStatus: i.ZP.LOADING };
                            case a.CONFIG_LOADED:
                                return { ...e, fetchStatus: i.ZP.LOADED, config: { ...t.payload } };
                            case a.SET_CONFIG:
                                return { ...e, config: { ...t.payload } };
                            default:
                                return e;
                        }
                    },
                },
                () =>
                    (e, t, { userPersistence: r }) => (
                        e({ type: a.CONFIG_REQUEST }),
                        r
                            .get(c)
                            .then((t) => e(m(t || s)))
                            .catch(() => {
                                e(m(s));
                            })
                    ),
            );
        },
        798156: (e, t, r) => {
            e.exports = r.p + "illustration-paper-plane.771a84da.png";
        },
        198433: (e, t, r) => {
            e.exports = r.p + "illustration-traffic-light.1da0d6da.png";
        },
        491339: (e, t, r) => {
            e.exports = r.p + "illustration-uturn.e2dcd6aa.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-9f4db315.2a763b0a.js.map
