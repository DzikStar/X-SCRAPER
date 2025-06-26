"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-56ae26c1"],
    {
        56851: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(202784),
                r = n(420740),
                l = n(108362),
                o = n(731708),
                s = n(154003),
                i = n(392237),
                c = n(111677),
                d = n.n(c),
                m = n(349035);
            const p = "error-detail",
                u = d().e49537c2,
                h = d().a9ae1e78;
            class f extends a.PureComponent {
                render() {
                    return a.createElement(r.Z, { testID: p }, a.createElement(m.Z, null), a.createElement(l.Z, { style: g.root }, a.createElement(o.ZP, { align: "center", color: "gray700", style: g.retryText }, u), a.createElement(s.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, h)));
                }
            }
            const g = i.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(202784),
                r = n(500002),
                l = n(668214),
                o = n(997174),
                s = n(118823);
            const i = (0, l.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class c extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: a },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: l, search: o },
                            locationKey: s,
                        } = e;
                    let i = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (i = !0));
                    const c = r || s;
                    ((c && r !== s) || (!c && n !== l) || a !== o || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(i(c));
        },
        144256: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(807896),
                r = n(202784),
                l = n(149202),
                o = n(725516);
            class s extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleRefresh = () => {
                            const { analytics: e, onRefresh: t } = this.props,
                                n = e.contextualScribeNamespace;
                            t(), n && n.page && e.scribeAction("pull_to_refresh");
                        });
                }
                render() {
                    const { analytics: e, canRefresh: t, onRefresh: n, ...o } = this.props;
                    return r.createElement(l.Z, (0, a.Z)({}, o, { canRefresh: t, onRefresh: this._handleRefresh }));
                }
            }
            const i = (0, o.Z)(s);
        },
        26232: (e, t, n) => {
            n.d(t, { Z: () => E });
            var a = n(202784),
                r = n(555874),
                l = n(111677),
                o = n.n(l),
                s = n(290402),
                i = n(965245),
                c = n(71620),
                d = n(668214);
            const m = (e, t) => t.module.selectFetchStatus(e),
                p = (e, t) => t.module.selectItems(e),
                u = (0, d.Z)()
                    .propsFromState((e) => ({ fetchStatus: m, items: p }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, c.zr)("SLICES_TIMELINE"), fetch: e.fetch, fetchIfNeeded: e.fetchIfNeeded, fetchBottom: e.fetchBottom })),
                h = o().i9028824,
                f = (e) => e,
                g = (e) => (t) => e(t.item);
            class b extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { footer: e, items: t, noItemsRenderer: n, numColumns: l, onScrollEnd: o, renderer: s, withoutHeadroom: c } = this.props;
                            return !t || l < 1 ? null : 1 === l ? a.createElement(i.Z, { cacheKey: "sliceTimeline", footer: e, identityFunction: f, items: t, noItemsRenderer: n, onNearEnd: this._handleNearEnd, onScrollEnd: o, renderer: s, withoutHeadroom: c }) : a.createElement(r.Z, { ListEmptyComponent: n, data: t, keyExtractor: f, numColumns: l, renderItem: g(s) });
                        }),
                        (this._handleNearEnd = () => {
                            const { createLocalApiErrorHandler: e, fetchBottom: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleFetch = () => {
                            const { alwaysFetch: e, createLocalApiErrorHandler: t, fetch: n, fetchIfNeeded: a } = this.props;
                            (e ? n : a)().catch(t());
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
                    const { fetchStatus: e, module: t, retryMessage: n } = this.props;
                    return t ? a.createElement(s.Z, { "aria-label": h, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render, retryMessage: n, retryable: !0 }) : null;
                }
            }
            b.defaultProps = { numColumns: 1, alwaysFetch: !1 };
            const E = u(b);
        },
        241304: (e, t, n) => {
            n.d(t, { Z: () => R });
            var a = n(202784),
                r = n(576648),
                l = n(325686),
                o = n(154003),
                s = n(138099),
                i = n(731708),
                c = n(392237),
                d = n(111677),
                m = n.n(d),
                p = n(652255),
                u = n(376180),
                h = n(502940),
                f = n(70962),
                g = n(933340),
                b = n(321264),
                E = n(208340),
                y = n(707305),
                Z = n(748138),
                _ = n(837020),
                w = n(125363),
                v = n(601576),
                C = n(919022);
            const I = m().ia5e7488,
                k = { label: I },
                x = m().j33d8902,
                P = { label: x },
                S = m().a8ab3d08,
                z = m().d740d2d9,
                F = { bandcamp_handle: { icon: a.createElement(p.default, null), label: m().a7cf1e98, url: "https://bandcamp.com/" }, bitcoin_handle: { icon: a.createElement(u.default, null), label: m().d876e67e }, cash_app_handle: { icon: a.createElement(h.default, null), label: m().f85f6760, url: "https://cash.app/" }, ethereum_handle: { icon: a.createElement(f.default, null), label: m().a32a7c06 }, gofundme_handle: { icon: a.createElement(g.default, null), label: m().cc1a3bc4, url: "https://gofundme.com/f/" }, patreon_handle: { icon: a.createElement(b.default, null), label: m().d4d74bb4, url: "https://patreon.com/" }, pay_pal_handle: { icon: a.createElement(E.default, null), label: m().h14fbc52, url: "https://paypal.me/" }, venmo_handle: { icon: a.createElement(y.default, null), label: m().h1198dcc, url: "https://venmo.com/" } };
            function R({ style: e, userId: t }) {
                const n = (0, w.I0)(),
                    [c, d] = a.useState(!1),
                    m = (0, w.v9)((e) => C.ZP.select(e, t));
                if (!m) return null;
                const { tipjar_settings: p } = m;
                if (!p) return null;
                const { is_enabled: u, ...h } = p;
                if (!1 === u || !Object.keys(h).length) return null;
                function f() {
                    d(!1);
                }
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(o.ZP, {
                        "aria-label": x,
                        hoverLabel: P,
                        icon: a.createElement(Z.default, null),
                        onPress: function () {
                            d((e) => !e);
                        },
                        style: e,
                    }),
                    c
                        ? a.createElement(
                              s.Z,
                              { onMaskClick: f, style: H.sheet, type: "bottom", withMask: !0 },
                              a.createElement(o.ZP, { "aria-label": I, hoverLabel: k, icon: a.createElement(_.default, null), onPress: f, style: H.close, type: "primaryText" }),
                              a.createElement(l.Z, { style: H.header }, a.createElement(i.ZP, { weight: "bold" }, S), a.createElement(i.ZP, null, `@${m.screen_name}`)),
                              Object.entries(h)
                                  .filter(([e, t]) => t)
                                  .map(([e, t]) => {
                                      const l = F[e];
                                      if (l) {
                                          const o = l.url
                                                  ? void 0
                                                  : function () {
                                                        r.Z.setString(String(t)), n((0, v.fz)({ text: z({ service: l.label }) }));
                                                    },
                                              s = l.url ? `${l.url}${String(t)}` : void 0;
                                          return a.createElement(i.ZP, { color: "text", key: e, link: s, onPress: o, style: H.service, withInteractiveStyling: !1 }, l.icon, l.label);
                                      }
                                  }),
                          )
                        : null,
                );
            }
            const H = c.default.create((e) => ({ close: { end: e.spaces.space16, position: "absolute", top: e.spaces.space16 }, header: { alignItems: "center", justifyContent: "center", marginHorizontal: "auto" }, service: { display: "flex", cursor: "pointer", gap: e.spaces.space8, marginBottom: e.spaces.space16 }, sheet: { padding: e.spaces.space16 } }));
        },
        180401: (e, t, n) => {
            n.d(t, { Z: () => B });
            var a = n(202784),
                r = n(325686),
                l = n(457311),
                o = n(731708),
                s = n(392237),
                i = n(111677),
                c = n.n(i),
                d = n(791632),
                m = n(290402),
                p = n(373981),
                u = n(507651),
                h = n(703738),
                f = n(293115),
                g = n(125363),
                b = n(519896),
                E = n(390387),
                y = n(383675),
                Z = n(312771),
                _ = n(144256),
                w = n(810641),
                v = n(67369),
                C = n(966886),
                I = n(766661),
                k = n(420412),
                x = n(971372),
                P = n(443781);
            c().f2382014, c().g66c8348, c().d7071084;
            const S = c().ee2200f4,
                z = s.default.create((e) => ({ title: { alignItems: "center", flexDirection: "row", paddingTop: e.spaces.space4 }, contentContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.componentDimensions.gutterVertical }, disclaimer: { marginTop: e.spaces.space12 }, disclaimerNarrow: { marginTop: e.spaces.space8, marginHorizontal: e.spaces.space4 }, timestamp: { marginTop: e.spaces.space8 } })),
                F = ({ disclaimer: e, trendId: t, trendPrompt: n, title: l, lastUpdatedAt: s, article: i = {}, isWide: d, birdwatchPivot: m }) => {
                    const { text: p, textEntities: u } = i,
                        { featureSwitches: h } = a.useContext(P.rC),
                        f = (0, v.yu)(),
                        g = () => a.createElement(a.Fragment, null, a.createElement(o.ZP, { dir: "auto", size: "title4", style: z.title, weight: "heavy" }, l), s && b(), p ? a.createElement(x.Z, { description: p, descriptionEntities: u }) : null),
                        b = () => {
                            if (!s) return a.createElement(a.Fragment, null);
                            const e = { lastUpdatedElement: a.createElement(C.Z, { humanReadable: !0, timestamp: s }) };
                            return a.createElement(o.ZP, { color: "gray700", size: "subtext2", style: f ? z.disclaimerNarrow : z.timestamp }, a.createElement(c().I18NFormatMessage, { $i18n: "gd67df1d" }, e.lastUpdatedElement));
                        };
                    return a.createElement(a.Fragment, null, a.createElement(r.Z, { style: z.contentContainer }, g(), a.createElement(o.ZP, { align: "left", color: "gray700", size: "subtext2", style: f ? z.disclaimerNarrow : z.disclaimer }, e || S), h.isTrue("responsive_web_trends_ui_community_notes_enabled") && m ? a.createElement(I.Z, m) : null), a.createElement(k.Z, null));
                },
                R = c().i6212670,
                H = c().c6a07c10,
                N = c().e9f1fbcc,
                A = c().a3b80be6,
                D = c().b0c91a92,
                M = () => a.createElement(l.Z, { header: N, message: A }),
                B = ({ birdwatchPivot: e, disclaimer: t, fetchStatus: n, history: l, id: s, isWide: i, lastUpdatedAt: c, onFetch: v, onTimelinePoll: C, pollingIntervalMs: I, refreshStatus: k, timelineDetails: x, title: P, trendArticle: S, trendPrompt: z }) => {
                    const N = ((A = x?.timelineId), a.useMemo(() => A && (0, y.R)(A, !1), [A]));
                    var A;
                    const B = (0, g.v9)(E.Qb),
                        U = (0, h.z)(),
                        T = () => (x?.timelineLinks || []).map(({ label: e, ...t }) => ({ ...t, key: e, label: a.createElement(o.ZP, { weight: "bold" }, e), isCustom: !1 })),
                        O = () => {
                            const e = { page: "ai_trend" };
                            if (N) return a.createElement(f.nO, { namespace: e }, a.createElement(w.Z, { anchoring: p.Z, module: N, onTimelinePoll: C, pollingIntervalMsOverride: I, prerollDisplayLocation: b.Nw.OTHER, refreshControl: null, renderEmptyState: M, title: P }));
                        },
                        j = () => {
                            const e = T();
                            return a.createElement(r.Z, { style: [L.loggedOutCalloutContainer, U && L.withHorizontalMargin] }, ((e) => a.createElement(u.Z, { "aria-label": H, links: e.map((e) => ({ key: e.key, label: e.label, isActive: e.isActive, to: { ...e.to } })) }))(e), a.createElement(r.Z, { style: L.loggedOutCalloutContent }, a.createElement(o.ZP, { dir: "auto", size: "subtext1", weight: "bold", withHashflags: !1 }, D)));
                        };
                    return a.createElement(m.Z, {
                        "aria-label": R,
                        fetchStatus: n,
                        key: s,
                        onRequestRetry: v,
                        render: () => {
                            const n = (0, d.cu)(l);
                            return (
                                (o = a.createElement(
                                    a.Fragment,
                                    null,
                                    n ? null : a.createElement(F, { article: S, birdwatchPivot: e, disclaimer: t, isWide: i, lastUpdatedAt: c, title: P, trendId: s, trendPrompt: z }),
                                    B
                                        ? (() => {
                                              const e = T(),
                                                  t = O();
                                              return e.length > 1 || (1 === e.length && e[0].isCustom) ? a.createElement(a.Fragment, null, a.createElement(u.Z, { "aria-label": H, links: e.map((e) => ({ key: e.key, label: e.label, isActive: e.isActive, to: { ...e.to } })), style: U && L.withHorizontalMargin }), a.createElement(r.Z, { style: L.timelineContainer }, t)) : t;
                                          })()
                                        : null,
                                    B ? null : j(),
                                )),
                                a.createElement(_.Z, { isRefreshing: k === Z.ZP.LOADING, onRefresh: v }, o)
                            );
                            var o;
                        },
                    });
                },
                L = s.default.create((e) => ({ timelineLabel: { flexDirection: "row", alignItems: "flex-end" }, timelineContainer: { minHeight: "90vh" }, labelAnnotation: { marginStart: e.spaces.space4 }, loggedOutCalloutContainer: { position: "relative", marginBottom: e.spaces.space4 }, loggedOutCalloutContent: { position: "absolute", top: 0, bottom: 0, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: e.spaces.space4, backdropFilter: "blur(10px)", zIndex: 999, minHeight: e.spaces.space24 }, withHorizontalMargin: { marginHorizontal: e.spaces.space16 } }));
        },
        720275: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a = n(202784),
                r = n(457311),
                l = n(111677),
                o = n.n(l),
                s = n(912021),
                i = n(680961),
                c = n(371493),
                d = n(810641);
            const m = o().dd225af8,
                p = () => a.createElement(r.Z, { message: m });
            class u extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedModule = (0, s.Z)((e) => (0, c.Jj)(e))),
                        (this._getModule = () => {
                            const { trendId: e } = this.props;
                            return this._getMemoizedModule(e);
                        });
                }
                render() {
                    return a.createElement(d.Z, { module: this._getModule(), renderUnavailable: p, scroller: i.Z, showLoadingFooter: !1, title: "Relevant people", withKeyboardShortcuts: !1 });
                }
            }
            const h = u;
        },
        586534: (e, t, n) => {
            n.d(t, { Z: () => w });
            var a = n(202784),
                r = n(325686),
                l = n(530732),
                o = n(618186),
                s = n(823161),
                i = n(731708),
                c = n(392237),
                d = n(111677),
                m = n.n(d),
                p = n(473026),
                u = n(937450),
                h = n(853485),
                f = n(668214),
                g = n(919022);
            const b = (0, f.Z)()
                    .propsFromState(() => ({ viewerUser: g.ZP.selectViewerUser }))
                    .adjustStateProps(({ viewerUser: e }) => ({ userAvatarURI: e && e.profile_image_url_https, userName: e && e.name }))
                    .withAnalytics(),
                E = m().a609edbe,
                y = m().e349147c;
            class Z extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleClick = (e) => {
                            const { analytics: t, onClick: n } = this.props;
                            n && n(e), t.scribe({ component: "inline_compose_prompt", action: "click" });
                        });
                }
                render() {
                    const { isDisabled: e, link: t, promptLabel: n, userAvatarURI: c, userName: d, withBorder: m, withComposeIcons: f } = this.props;
                    return a.createElement(l.Z, { "aria-label": E, interactiveStyles: null, link: e ? void 0 : t, onClick: e ? void 0 : this._handleClick, style: [_.root, m && _.borderBottom] }, a.createElement(o.Z, { "aria-label": d, size: s.default.defaultSize, uri: c }), a.createElement(r.Z, { style: [_.column, _.bodyColumn] }, a.createElement(r.Z, { style: [_.fakeInput, e && _.disabled] }, a.createElement(i.ZP, { color: "gray700", numberOfLines: 1 }, n)), f ? a.createElement(a.Fragment, null, a.createElement(p.default, { style: _.icon }), a.createElement(u.default, { style: _.icon }), a.createElement(h.default, { style: _.icon })) : null));
                }
            }
            Z.defaultProps = { link: "/compose/post", promptLabel: y, withBorder: !1, withComposeIcons: !0 };
            const _ = c.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, zIndex: 1 }, borderBottom: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, column: { alignItems: "center", flexBasis: 0, flexDirection: "row", flexShrink: 1, minWidth: 0 }, bodyColumn: { flexGrow: 1, justifyContent: "space-between", marginStart: e.spaces.space12 }, fakeInput: { borderColor: e.colors.gray200, borderStyle: "solid", borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.infinite, flexGrow: 1, flexShrink: 1, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8 }, disabled: { opacity: 0.5 }, icon: { color: e.colors.primary, height: `calc(${e.spaces.space20} + ${e.spaces.space4})`, marginStart: e.spaces.space12, width: `calc(${e.spaces.space20} + ${e.spaces.space4})` } })),
                w = b(Z);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-56ae26c1.f2c8588a.js.map
