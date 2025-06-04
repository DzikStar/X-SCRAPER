"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-e019dbda"],
    {
        652904: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                r = a(500002),
                l = a(668214),
                o = a(997174),
                s = a(118823);
            const c = (0, l.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class i extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: l, search: o },
                            locationKey: s,
                        } = e;
                    let c = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (c = !0));
                    const i = r || s;
                    ((i && r !== s) || (!i && a !== l) || n !== o || c) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            i.defaultProps = { children: null };
            const d = (0, r.ZP)(c(i));
        },
        144256: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(807896),
                r = a(202784),
                l = a(149202),
                o = a(725516);
            class s extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleRefresh = () => {
                            const { analytics: e, onRefresh: t } = this.props,
                                a = e.contextualScribeNamespace;
                            t(), a && a.page && e.scribeAction("pull_to_refresh");
                        });
                }
                render() {
                    const { analytics: e, canRefresh: t, onRefresh: a, ...o } = this.props;
                    return r.createElement(l.Z, (0, n.Z)({}, o, { canRefresh: t, onRefresh: this._handleRefresh }));
                }
            }
            const c = (0, o.Z)(s);
        },
        26232: (e, t, a) => {
            a.d(t, { Z: () => E });
            var n = a(202784),
                r = a(555874),
                l = a(111677),
                o = a.n(l),
                s = a(290402),
                c = a(965245),
                i = a(71620),
                d = a(668214);
            const m = (e, t) => t.module.selectFetchStatus(e),
                p = (e, t) => t.module.selectItems(e),
                u = (0, d.Z)()
                    .propsFromState((e) => ({ fetchStatus: m, items: p }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, i.zr)("SLICES_TIMELINE"), fetch: e.fetch, fetchIfNeeded: e.fetchIfNeeded, fetchBottom: e.fetchBottom })),
                h = o().i9028824,
                b = (e) => e,
                f = (e) => (t) => e(t.item);
            class g extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { footer: e, items: t, noItemsRenderer: a, numColumns: l, onScrollEnd: o, renderer: s, withoutHeadroom: i } = this.props;
                            return !t || l < 1 ? null : 1 === l ? n.createElement(c.Z, { cacheKey: "sliceTimeline", footer: e, identityFunction: b, items: t, noItemsRenderer: a, onNearEnd: this._handleNearEnd, onScrollEnd: o, renderer: s, withoutHeadroom: i }) : n.createElement(r.Z, { ListEmptyComponent: a, data: t, keyExtractor: b, numColumns: l, renderItem: f(s) });
                        }),
                        (this._handleNearEnd = () => {
                            const { createLocalApiErrorHandler: e, fetchBottom: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleFetch = () => {
                            const { alwaysFetch: e, createLocalApiErrorHandler: t, fetch: a, fetchIfNeeded: n } = this.props;
                            (e ? a : n)().catch(t());
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                componentDidUpdate(e) {
                    const { module: t } = this.props;
                    e.module !== t && this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, module: t, retryMessage: a } = this.props;
                    return t ? n.createElement(s.Z, { "aria-label": h, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render, retryMessage: a, retryable: !0 }) : null;
                }
            }
            g.defaultProps = { numColumns: 1, alwaysFetch: !1 };
            const E = u(g);
        },
        241304: (e, t, a) => {
            a.d(t, { Z: () => A });
            var n = a(202784),
                r = a(576648),
                l = a(325686),
                o = a(154003),
                s = a(138099),
                c = a(731708),
                i = a(392237),
                d = a(111677),
                m = a.n(d),
                p = a(652255),
                u = a(376180),
                h = a(502940),
                b = a(70962),
                f = a(933340),
                g = a(321264),
                E = a(208340),
                y = a(707305),
                Z = a(748138),
                _ = a(837020),
                v = a(125363),
                w = a(601576),
                C = a(919022);
            const P = m().ia5e7488,
                S = { label: P },
                I = m().j33d8902,
                D = { label: I },
                R = m().a8ab3d08,
                k = m().d740d2d9,
                x = { bandcamp_handle: { icon: n.createElement(p.default, null), label: m().a7cf1e98, url: "https://bandcamp.com/" }, bitcoin_handle: { icon: n.createElement(u.default, null), label: m().d876e67e }, cash_app_handle: { icon: n.createElement(h.default, null), label: m().f85f6760, url: "https://cash.app/" }, ethereum_handle: { icon: n.createElement(b.default, null), label: m().a32a7c06 }, gofundme_handle: { icon: n.createElement(f.default, null), label: m().cc1a3bc4, url: "https://gofundme.com/f/" }, patreon_handle: { icon: n.createElement(g.default, null), label: m().d4d74bb4, url: "https://patreon.com/" }, pay_pal_handle: { icon: n.createElement(E.default, null), label: m().h14fbc52, url: "https://paypal.me/" }, venmo_handle: { icon: n.createElement(y.default, null), label: m().h1198dcc, url: "https://venmo.com/" } };
            function A({ style: e, userId: t }) {
                const a = (0, v.I0)(),
                    [i, d] = n.useState(!1),
                    m = (0, v.v9)((e) => C.ZP.select(e, t));
                if (!m) return null;
                const { tipjar_settings: p } = m;
                if (!p) return null;
                const { is_enabled: u, ...h } = p;
                if (!1 === u || !Object.keys(h).length) return null;
                function b() {
                    d(!1);
                }
                return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(o.ZP, {
                        "aria-label": I,
                        hoverLabel: D,
                        icon: n.createElement(Z.default, null),
                        onPress: function () {
                            d((e) => !e);
                        },
                        style: e,
                    }),
                    i
                        ? n.createElement(
                              s.Z,
                              { onMaskClick: b, style: N.sheet, type: "bottom", withMask: !0 },
                              n.createElement(o.ZP, { "aria-label": P, hoverLabel: S, icon: n.createElement(_.default, null), onPress: b, style: N.close, type: "primaryText" }),
                              n.createElement(l.Z, { style: N.header }, n.createElement(c.ZP, { weight: "bold" }, R), n.createElement(c.ZP, null, `@${m.screen_name}`)),
                              Object.entries(h)
                                  .filter(([e, t]) => t)
                                  .map(([e, t]) => {
                                      const l = x[e];
                                      if (l) {
                                          const o = l.url
                                                  ? void 0
                                                  : function () {
                                                        r.Z.setString(String(t)), a((0, w.fz)({ text: k({ service: l.label }) }));
                                                    },
                                              s = l.url ? `${l.url}${String(t)}` : void 0;
                                          return n.createElement(c.ZP, { color: "text", key: e, link: s, onPress: o, style: N.service, withInteractiveStyling: !1 }, l.icon, l.label);
                                      }
                                  }),
                          )
                        : null,
                );
            }
            const N = i.default.create((e) => ({ close: { end: e.spaces.space16, position: "absolute", top: e.spaces.space16 }, header: { alignItems: "center", justifyContent: "center", marginHorizontal: "auto" }, service: { display: "flex", cursor: "pointer", gap: e.spaces.space8, marginBottom: e.spaces.space16 }, sheet: { padding: e.spaces.space16 } }));
        },
        180401: (e, t, a) => {
            a.d(t, { Z: () => L });
            var n = a(202784),
                r = a(325686),
                l = a(457311),
                o = a(731708),
                s = a(392237),
                c = a(111677),
                i = a.n(c),
                d = a(791632),
                m = a(290402),
                p = a(373981),
                u = a(507651),
                h = a(703738),
                b = a(293115),
                f = a(125363),
                g = a(519896),
                E = a(390387),
                y = a(383675),
                Z = a(312771),
                _ = a(144256),
                v = a(810641),
                w = a(67369),
                C = a(966886),
                P = a(766661),
                S = a(420412),
                I = a(971372),
                D = a(443781);
            i().f2382014, i().g66c8348, i().d7071084;
            const R = i().ee2200f4,
                k = s.default.create((e) => ({ title: { alignItems: "center", flexDirection: "row", paddingTop: e.spaces.space4 }, contentContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.componentDimensions.gutterVertical }, disclaimer: { marginTop: e.spaces.space12 }, disclaimerNarrow: { marginTop: e.spaces.space8, marginHorizontal: e.spaces.space4 }, timestamp: { marginTop: e.spaces.space8 } })),
                x = ({ disclaimer: e, trendId: t, trendPrompt: a, title: l, lastUpdatedAt: s, article: c = {}, isWide: d, birdwatchPivot: m }) => {
                    const { text: p, textEntities: u } = c,
                        { featureSwitches: h } = n.useContext(D.rC),
                        b = (0, w.yu)(),
                        f = () => n.createElement(n.Fragment, null, n.createElement(o.ZP, { dir: "auto", size: "title4", style: k.title, weight: "heavy" }, l), s && g(), p ? n.createElement(I.Z, { description: p, descriptionEntities: u }) : null),
                        g = () => {
                            if (!s) return n.createElement(n.Fragment, null);
                            const e = { lastUpdatedElement: n.createElement(C.Z, { humanReadable: !0, timestamp: s }) };
                            return n.createElement(o.ZP, { color: "gray700", size: "subtext2", style: b ? k.disclaimerNarrow : k.timestamp }, n.createElement(i().I18NFormatMessage, { $i18n: "gd67df1d" }, e.lastUpdatedElement));
                        };
                    return n.createElement(n.Fragment, null, n.createElement(r.Z, { style: k.contentContainer }, f(), n.createElement(o.ZP, { align: "left", color: "gray700", size: "subtext2", style: b ? k.disclaimerNarrow : k.disclaimer }, e || R), h.isTrue("responsive_web_trends_ui_community_notes_enabled") && m ? n.createElement(P.Z, m) : null), n.createElement(S.Z, null));
                },
                A = i().i6212670,
                N = i().c6a07c10,
                H = i().e9f1fbcc,
                B = i().a3b80be6,
                F = i().b0c91a92,
                M = () => n.createElement(l.Z, { header: H, message: B }),
                L = ({ birdwatchPivot: e, disclaimer: t, fetchStatus: a, history: l, id: s, isWide: c, lastUpdatedAt: i, onFetch: w, onTimelinePoll: C, pollingIntervalMs: P, refreshStatus: S, timelineDetails: I, title: D, trendArticle: R, trendPrompt: k }) => {
                    const H = ((B = I?.timelineId), n.useMemo(() => B && (0, y.R)(B, !1), [B]));
                    var B;
                    const L = (0, f.v9)(E.Qb),
                        U = (0, h.z)(),
                        T = () => (I?.timelineLinks || []).map(({ label: e, ...t }) => ({ ...t, key: e, label: n.createElement(o.ZP, { weight: "bold" }, e), isCustom: !1 })),
                        K = () => {
                            const e = { page: "ai_trend" };
                            if (H) return n.createElement(b.nO, { namespace: e }, n.createElement(v.Z, { anchoring: p.Z, module: H, onTimelinePoll: C, pollingIntervalMsOverride: P, prerollDisplayLocation: g.Nw.OTHER, refreshControl: null, renderEmptyState: M, title: D }));
                        },
                        O = () => {
                            const e = T();
                            return n.createElement(r.Z, { style: [z.loggedOutCalloutContainer, U && z.withHorizontalMargin] }, ((e) => n.createElement(u.Z, { "aria-label": N, links: e.map((e) => ({ key: e.key, label: e.label, isActive: e.isActive, to: { ...e.to } })) }))(e), n.createElement(r.Z, { style: z.loggedOutCalloutContent }, n.createElement(o.ZP, { dir: "auto", size: "subtext1", weight: "bold", withHashflags: !1 }, F)));
                        };
                    return n.createElement(m.Z, {
                        "aria-label": A,
                        fetchStatus: a,
                        key: s,
                        onRequestRetry: w,
                        render: () => {
                            const a = (0, d.cu)(l);
                            return (
                                (o = n.createElement(
                                    n.Fragment,
                                    null,
                                    a ? null : n.createElement(x, { article: R, birdwatchPivot: e, disclaimer: t, isWide: c, lastUpdatedAt: i, title: D, trendId: s, trendPrompt: k }),
                                    L
                                        ? (() => {
                                              const e = T(),
                                                  t = K();
                                              return e.length > 1 || (1 === e.length && e[0].isCustom) ? n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-label": N, links: e.map((e) => ({ key: e.key, label: e.label, isActive: e.isActive, to: { ...e.to } })), style: U && z.withHorizontalMargin }), n.createElement(r.Z, { style: z.timelineContainer }, t)) : t;
                                          })()
                                        : null,
                                    L ? null : O(),
                                )),
                                n.createElement(_.Z, { isRefreshing: S === Z.ZP.LOADING, onRefresh: w }, o)
                            );
                            var o;
                        },
                    });
                },
                z = s.default.create((e) => ({ timelineLabel: { flexDirection: "row", alignItems: "flex-end" }, timelineContainer: { minHeight: "90vh" }, labelAnnotation: { marginStart: e.spaces.space4 }, loggedOutCalloutContainer: { position: "relative", marginBottom: e.spaces.space4 }, loggedOutCalloutContent: { position: "absolute", top: 0, bottom: 0, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: e.spaces.space4, backdropFilter: "blur(10px)", zIndex: 999, minHeight: e.spaces.space24 }, withHorizontalMargin: { marginHorizontal: e.spaces.space16 } }));
        },
        720275: (e, t, a) => {
            a.d(t, { Z: () => h });
            var n = a(202784),
                r = a(457311),
                l = a(111677),
                o = a.n(l),
                s = a(912021),
                c = a(680961),
                i = a(371493),
                d = a(810641);
            const m = o().dd225af8,
                p = () => n.createElement(r.Z, { message: m });
            class u extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedModule = (0, s.Z)((e) => (0, i.Jj)(e))),
                        (this._getModule = () => {
                            const { trendId: e } = this.props;
                            return this._getMemoizedModule(e);
                        });
                }
                render() {
                    return n.createElement(d.Z, { module: this._getModule(), renderUnavailable: p, scroller: c.Z, showLoadingFooter: !1, title: "Relevant people", withKeyboardShortcuts: !1 });
                }
            }
            const h = u;
        },
        586534: (e, t, a) => {
            a.d(t, { Z: () => v });
            var n = a(202784),
                r = a(325686),
                l = a(530732),
                o = a(618186),
                s = a(823161),
                c = a(731708),
                i = a(392237),
                d = a(111677),
                m = a.n(d),
                p = a(473026),
                u = a(937450),
                h = a(853485),
                b = a(668214),
                f = a(919022);
            const g = (0, b.Z)()
                    .propsFromState(() => ({ viewerUser: f.ZP.selectViewerUser }))
                    .adjustStateProps(({ viewerUser: e }) => ({ userAvatarURI: e && e.profile_image_url_https, userName: e && e.name }))
                    .withAnalytics(),
                E = m().a609edbe,
                y = m().e349147c;
            class Z extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleClick = (e) => {
                            const { analytics: t, onClick: a } = this.props;
                            a && a(e), t.scribe({ component: "inline_compose_prompt", action: "click" });
                        });
                }
                render() {
                    const { isDisabled: e, link: t, promptLabel: a, userAvatarURI: i, userName: d, withBorder: m, withComposeIcons: b } = this.props;
                    return n.createElement(l.Z, { "aria-label": E, interactiveStyles: null, link: e ? void 0 : t, onClick: e ? void 0 : this._handleClick, style: [_.root, m && _.borderBottom] }, n.createElement(o.Z, { "aria-label": d, size: s.default.defaultSize, uri: i }), n.createElement(r.Z, { style: [_.column, _.bodyColumn] }, n.createElement(r.Z, { style: [_.fakeInput, e && _.disabled] }, n.createElement(c.ZP, { color: "gray700", numberOfLines: 1 }, a)), b ? n.createElement(n.Fragment, null, n.createElement(p.default, { style: _.icon }), n.createElement(u.default, { style: _.icon }), n.createElement(h.default, { style: _.icon })) : null));
                }
            }
            Z.defaultProps = { link: "/compose/post", promptLabel: y, withBorder: !1, withComposeIcons: !0 };
            const _ = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, zIndex: 1 }, borderBottom: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, column: { alignItems: "center", flexBasis: 0, flexDirection: "row", flexShrink: 1, minWidth: 0 }, bodyColumn: { flexGrow: 1, justifyContent: "space-between", marginStart: e.spaces.space12 }, fakeInput: { borderColor: e.colors.gray200, borderStyle: "solid", borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.infinite, flexGrow: 1, flexShrink: 1, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8 }, disabled: { opacity: 0.5 }, icon: { color: e.colors.primary, height: `calc(${e.spaces.space20} + ${e.spaces.space4})`, marginStart: e.spaces.space12, width: `calc(${e.spaces.space20} + ${e.spaces.space4})` } })),
                v = g(Z);
        },
        703738: (e, t, a) => {
            a.d(t, { z: () => o });
            var n = a(323265),
                r = a(655352),
                l = a(952793);
            const o = () => (0, l.hC)("rweb_sourcemap_migration") && (0, r.ZP)() && !n.ZP.isMobileOS();
        },
        702001: (e, t, a) => {
            a.d(t, { c: () => l });
            var n = a(516951),
                r = a(615656);
            const l = { [r.ZP.OtherUserSuspended]: { customAction: n.Z }, [r.ZP.StatusViewForbidden]: { customAction: n.Z } };
        },
        97882: (e, t, a) => {
            a.d(t, { T: () => l, x: () => o });
            var n = a(111677),
                r = a.n(n);
            const l = { AED: r().d857e44d, ALL: r().cb87e3db, ARS: r().a9d5ffd1, AUD: r().a0e8371d, BAM: r().gcc50dc9, BDT: r().a6a43585, BGN: r().a0cc8f2d, BHD: r().i31c32c5, BRL: r().i7dc69e9, BYR: r().c14a6c03, CAD: r().jaa3d537, CHF: r().a824080b, CLP: r().d9c0bedb, CNY: r().bf8c0613, COP: r().i8163625, CZK: r().adb53ba1, DKK: r().iabf697d, DZD: r().a1a0555b, EGP: r().f266f3d9, EUR: r().a9a8652b, GBP: r().dbf40761, GHS: r().b0d993d9, GTQ: r().ac1308e1, HKD: r().a7889ab3, HRK: r().c614f5cd, HUF: r().i55d57e3, IDR: r().e4b6002b, ILS: r().d28e983b, INR: r().e8c9232d, IQD: r().c8994ae1, ISK: r().f821c2a5, JPY: r().j348b9c9, KES: r().i6f93b9b, KRW: r().c6150bd5, KWD: r().i8921e09, KZT: r().ef239279, LBP: r().hecdb149, MAD: r().fdd039b7, MKD: r().f30c2c37, MXN: r().d9ea7bff, MYR: r().ea3df4b7, NGN: r().jaac21bb, NOK: r().hb435ced, NZD: r().ce699d81, PEN: r().bc56d3d7, PHP: r().f8561913, PKR: r().g6485d53, PLN: r().ff561cc1, QAR: r().b42011d3, RON: r().a6660bcd, RSD: r().f9b80449, RUB: r().gdee4d5d, SAR: r().h36f2103, SEK: r().a19ad037, SGD: r().g713f699, THB: r().ff2e39af, TND: r().be34316d, TRY: r().aef81b75, TWD: r().fcce70a5, TZS: r().jc9d352f, UAH: r().be1cb8c5, UGX: r().j9371501, USD: r().j7d4397d, VEF: r().d61441dd, VND: r().e2a99e97, ZAR: r().f7ce19ab, ZMW: r().b2a0213f },
                o = ({ amount: e, currencyCode: t = "USD", formatter: a = 1e6, removeTrailingZeros: n = !1, strictAmount: r = !1 }) => {
                    const o = r ? e : parseInt(e, 10) / a,
                        c = l[t]?.(o);
                    return n ? s(c) : c;
                },
                s = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-e019dbda.f93ee93a.js.map
