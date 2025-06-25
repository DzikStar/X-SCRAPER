"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-56ae26c1"],
    {
        56851: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(202784),
                a = r(420740),
                o = r(108362),
                l = r(731708),
                s = r(154003),
                i = r(392237),
                c = r(111677),
                d = r.n(c),
                m = r(349035);
            const p = "error-detail",
                u = d().e49537c2,
                h = d().a9ae1e78;
            class g extends n.PureComponent {
                render() {
                    return n.createElement(a.Z, { testID: p }, n.createElement(m.Z, null), n.createElement(o.Z, { style: f.root }, n.createElement(l.ZP, { align: "center", color: "gray700", style: f.retryText }, u), n.createElement(s.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, h)));
                }
            }
            const f = i.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        144256: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = r(807896),
                a = r(202784),
                o = r(149202),
                l = r(725516);
            class s extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleRefresh = () => {
                            const { analytics: e, onRefresh: t } = this.props,
                                r = e.contextualScribeNamespace;
                            t(), r && r.page && e.scribeAction("pull_to_refresh");
                        });
                }
                render() {
                    const { analytics: e, canRefresh: t, onRefresh: r, ...l } = this.props;
                    return a.createElement(o.Z, (0, n.Z)({}, l, { canRefresh: t, onRefresh: this._handleRefresh }));
                }
            }
            const i = (0, l.Z)(s);
        },
        26232: (e, t, r) => {
            r.d(t, { Z: () => E });
            var n = r(202784),
                a = r(555874),
                o = r(111677),
                l = r.n(o),
                s = r(290402),
                i = r(965245),
                c = r(71620),
                d = r(668214);
            const m = (e, t) => t.module.selectFetchStatus(e),
                p = (e, t) => t.module.selectItems(e),
                u = (0, d.Z)()
                    .propsFromState((e) => ({ fetchStatus: m, items: p }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, c.zr)("SLICES_TIMELINE"), fetch: e.fetch, fetchIfNeeded: e.fetchIfNeeded, fetchBottom: e.fetchBottom })),
                h = l().i9028824,
                g = (e) => e,
                f = (e) => (t) => e(t.item);
            class b extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { footer: e, items: t, noItemsRenderer: r, numColumns: o, onScrollEnd: l, renderer: s, withoutHeadroom: c } = this.props;
                            return !t || o < 1 ? null : 1 === o ? n.createElement(i.Z, { cacheKey: "sliceTimeline", footer: e, identityFunction: g, items: t, noItemsRenderer: r, onNearEnd: this._handleNearEnd, onScrollEnd: l, renderer: s, withoutHeadroom: c }) : n.createElement(a.Z, { ListEmptyComponent: r, data: t, keyExtractor: g, numColumns: o, renderItem: f(s) });
                        }),
                        (this._handleNearEnd = () => {
                            const { createLocalApiErrorHandler: e, fetchBottom: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleFetch = () => {
                            const { alwaysFetch: e, createLocalApiErrorHandler: t, fetch: r, fetchIfNeeded: n } = this.props;
                            (e ? r : n)().catch(t());
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
                    const { fetchStatus: e, module: t, retryMessage: r } = this.props;
                    return t ? n.createElement(s.Z, { "aria-label": h, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render, retryMessage: r, retryable: !0 }) : null;
                }
            }
            b.defaultProps = { numColumns: 1, alwaysFetch: !1 };
            const E = u(b);
        },
        180401: (e, t, r) => {
            r.d(t, { Z: () => D });
            var n = r(202784),
                a = r(325686),
                o = r(457311),
                l = r(731708),
                s = r(392237),
                i = r(111677),
                c = r.n(i),
                d = r(791632),
                m = r(290402),
                p = r(373981),
                u = r(507651),
                h = r(703738),
                g = r(293115),
                f = r(125363),
                b = r(519896),
                E = r(390387),
                y = r(383675),
                Z = r(312771),
                w = r(144256),
                C = r(810641),
                _ = r(67369),
                v = r(966886),
                I = r(766661),
                k = r(420412),
                x = r(971372),
                S = r(443781);
            c().f2382014, c().g66c8348, c().d7071084;
            const z = c().ee2200f4,
                P = s.default.create((e) => ({ title: { alignItems: "center", flexDirection: "row", paddingTop: e.spaces.space4 }, contentContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.componentDimensions.gutterVertical }, disclaimer: { marginTop: e.spaces.space12 }, disclaimerNarrow: { marginTop: e.spaces.space8, marginHorizontal: e.spaces.space4 }, timestamp: { marginTop: e.spaces.space8 } })),
                R = ({ disclaimer: e, trendId: t, trendPrompt: r, title: o, lastUpdatedAt: s, article: i = {}, isWide: d, birdwatchPivot: m }) => {
                    const { text: p, textEntities: u } = i,
                        { featureSwitches: h } = n.useContext(S.rC),
                        g = (0, _.yu)(),
                        f = () => n.createElement(n.Fragment, null, n.createElement(l.ZP, { dir: "auto", size: "title4", style: P.title, weight: "heavy" }, o), s && b(), p ? n.createElement(x.Z, { description: p, descriptionEntities: u }) : null),
                        b = () => {
                            if (!s) return n.createElement(n.Fragment, null);
                            const e = { lastUpdatedElement: n.createElement(v.Z, { humanReadable: !0, timestamp: s }) };
                            return n.createElement(l.ZP, { color: "gray700", size: "subtext2", style: g ? P.disclaimerNarrow : P.timestamp }, n.createElement(c().I18NFormatMessage, { $i18n: "gd67df1d" }, e.lastUpdatedElement));
                        };
                    return n.createElement(n.Fragment, null, n.createElement(a.Z, { style: P.contentContainer }, f(), n.createElement(l.ZP, { align: "left", color: "gray700", size: "subtext2", style: g ? P.disclaimerNarrow : P.disclaimer }, e || z), h.isTrue("responsive_web_trends_ui_community_notes_enabled") && m ? n.createElement(I.Z, m) : null), n.createElement(k.Z, null));
                },
                F = c().i6212670,
                H = c().c6a07c10,
                A = c().e9f1fbcc,
                M = c().a3b80be6,
                N = c().b0c91a92,
                B = () => n.createElement(o.Z, { header: A, message: M }),
                D = ({ birdwatchPivot: e, disclaimer: t, fetchStatus: r, history: o, id: s, isWide: i, lastUpdatedAt: c, onFetch: _, onTimelinePoll: v, pollingIntervalMs: I, refreshStatus: k, timelineDetails: x, title: S, trendArticle: z, trendPrompt: P }) => {
                    const A = ((M = x?.timelineId), n.useMemo(() => M && (0, y.R)(M, !1), [M]));
                    var M;
                    const D = (0, f.v9)(E.Qb),
                        T = (0, h.z)(),
                        U = () => (x?.timelineLinks || []).map(({ label: e, ...t }) => ({ ...t, key: e, label: n.createElement(l.ZP, { weight: "bold" }, e), isCustom: !1 })),
                        O = () => {
                            const e = { page: "ai_trend" };
                            if (A) return n.createElement(g.nO, { namespace: e }, n.createElement(C.Z, { anchoring: p.Z, module: A, onTimelinePoll: v, pollingIntervalMsOverride: I, prerollDisplayLocation: b.Nw.OTHER, refreshControl: null, renderEmptyState: B, title: S }));
                        },
                        W = () => {
                            const e = U();
                            return n.createElement(a.Z, { style: [L.loggedOutCalloutContainer, T && L.withHorizontalMargin] }, ((e) => n.createElement(u.Z, { "aria-label": H, links: e.map((e) => ({ key: e.key, label: e.label, isActive: e.isActive, to: { ...e.to } })) }))(e), n.createElement(a.Z, { style: L.loggedOutCalloutContent }, n.createElement(l.ZP, { dir: "auto", size: "subtext1", weight: "bold", withHashflags: !1 }, N)));
                        };
                    return n.createElement(m.Z, {
                        "aria-label": F,
                        fetchStatus: r,
                        key: s,
                        onRequestRetry: _,
                        render: () => {
                            const r = (0, d.cu)(o);
                            return (
                                (l = n.createElement(
                                    n.Fragment,
                                    null,
                                    r ? null : n.createElement(R, { article: z, birdwatchPivot: e, disclaimer: t, isWide: i, lastUpdatedAt: c, title: S, trendId: s, trendPrompt: P }),
                                    D
                                        ? (() => {
                                              const e = U(),
                                                  t = O();
                                              return e.length > 1 || (1 === e.length && e[0].isCustom) ? n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-label": H, links: e.map((e) => ({ key: e.key, label: e.label, isActive: e.isActive, to: { ...e.to } })), style: T && L.withHorizontalMargin }), n.createElement(a.Z, { style: L.timelineContainer }, t)) : t;
                                          })()
                                        : null,
                                    D ? null : W(),
                                )),
                                n.createElement(w.Z, { isRefreshing: k === Z.ZP.LOADING, onRefresh: _ }, l)
                            );
                            var l;
                        },
                    });
                },
                L = s.default.create((e) => ({ timelineLabel: { flexDirection: "row", alignItems: "flex-end" }, timelineContainer: { minHeight: "90vh" }, labelAnnotation: { marginStart: e.spaces.space4 }, loggedOutCalloutContainer: { position: "relative", marginBottom: e.spaces.space4 }, loggedOutCalloutContent: { position: "absolute", top: 0, bottom: 0, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: e.spaces.space4, backdropFilter: "blur(10px)", zIndex: 999, minHeight: e.spaces.space24 }, withHorizontalMargin: { marginHorizontal: e.spaces.space16 } }));
        },
        720275: (e, t, r) => {
            r.d(t, { Z: () => h });
            var n = r(202784),
                a = r(457311),
                o = r(111677),
                l = r.n(o),
                s = r(912021),
                i = r(680961),
                c = r(371493),
                d = r(810641);
            const m = l().dd225af8,
                p = () => n.createElement(a.Z, { message: m });
            class u extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedModule = (0, s.Z)((e) => (0, c.Jj)(e))),
                        (this._getModule = () => {
                            const { trendId: e } = this.props;
                            return this._getMemoizedModule(e);
                        });
                }
                render() {
                    return n.createElement(d.Z, { module: this._getModule(), renderUnavailable: p, scroller: i.Z, showLoadingFooter: !1, title: "Relevant people", withKeyboardShortcuts: !1 });
                }
            }
            const h = u;
        },
        586534: (e, t, r) => {
            r.d(t, { Z: () => C });
            var n = r(202784),
                a = r(325686),
                o = r(530732),
                l = r(618186),
                s = r(823161),
                i = r(731708),
                c = r(392237),
                d = r(111677),
                m = r.n(d),
                p = r(473026),
                u = r(937450),
                h = r(853485),
                g = r(668214),
                f = r(919022);
            const b = (0, g.Z)()
                    .propsFromState(() => ({ viewerUser: f.ZP.selectViewerUser }))
                    .adjustStateProps(({ viewerUser: e }) => ({ userAvatarURI: e && e.profile_image_url_https, userName: e && e.name }))
                    .withAnalytics(),
                E = m().a609edbe,
                y = m().e349147c;
            class Z extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleClick = (e) => {
                            const { analytics: t, onClick: r } = this.props;
                            r && r(e), t.scribe({ component: "inline_compose_prompt", action: "click" });
                        });
                }
                render() {
                    const { isDisabled: e, link: t, promptLabel: r, userAvatarURI: c, userName: d, withBorder: m, withComposeIcons: g } = this.props;
                    return n.createElement(o.Z, { "aria-label": E, interactiveStyles: null, link: e ? void 0 : t, onClick: e ? void 0 : this._handleClick, style: [w.root, m && w.borderBottom] }, n.createElement(l.Z, { "aria-label": d, size: s.default.defaultSize, uri: c }), n.createElement(a.Z, { style: [w.column, w.bodyColumn] }, n.createElement(a.Z, { style: [w.fakeInput, e && w.disabled] }, n.createElement(i.ZP, { color: "gray700", numberOfLines: 1 }, r)), g ? n.createElement(n.Fragment, null, n.createElement(p.default, { style: w.icon }), n.createElement(u.default, { style: w.icon }), n.createElement(h.default, { style: w.icon })) : null));
                }
            }
            Z.defaultProps = { link: "/compose/post", promptLabel: y, withBorder: !1, withComposeIcons: !0 };
            const w = c.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, zIndex: 1 }, borderBottom: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, column: { alignItems: "center", flexBasis: 0, flexDirection: "row", flexShrink: 1, minWidth: 0 }, bodyColumn: { flexGrow: 1, justifyContent: "space-between", marginStart: e.spaces.space12 }, fakeInput: { borderColor: e.colors.gray200, borderStyle: "solid", borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.infinite, flexGrow: 1, flexShrink: 1, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8 }, disabled: { opacity: 0.5 }, icon: { color: e.colors.primary, height: `calc(${e.spaces.space20} + ${e.spaces.space4})`, marginStart: e.spaces.space12, width: `calc(${e.spaces.space20} + ${e.spaces.space4})` } })),
                C = b(Z);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-56ae26c1.b2b66c9a.js.map
