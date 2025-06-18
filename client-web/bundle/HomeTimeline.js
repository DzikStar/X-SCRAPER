"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.HomeTimeline", "icons/IconBarChartHorizontalStroke-js", "icons/IconFireStroke-js", "icons/IconGifPillStroke-js"],
    {
        789831: (e, t, r) => {
            r.d(t, { Z: () => d });
            var a = r(807896),
                o = r(202784),
                n = r(325686),
                s = r(392237),
                l = r(655352);
            const i = s.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                d = ({ children: e, component: t, fab: r, shouldRenderFab: s = !0, style: d, withoutBottomPadding: c, ...u }) => {
                    const m = t || n.Z,
                        p = s && !(0, l.ZP)();
                    return o.createElement(m, (0, a.Z)({}, u, { style: [p && !c && i.root, d] }), e, p ? r : null);
                };
        },
        507651: (e, t, r) => {
            r.d(t, { Z: () => d });
            var a = r(807896),
                o = r(202784),
                n = r(107267),
                s = r(403556),
                l = r(791632);
            const i = (e) => {
                    const t = (0, n.useHistory)(),
                        { isCompact: r, ...i } = e;
                    return o.createElement(s.Z, (0, a.Z)({}, i, { isCompact: r || (0, l.HD)(t) }));
                },
                d = o.memo(i);
        },
        920603: (e, t, r) => {
            r.d(t, { Z: () => I });
            var a = r(202784),
                o = r(325686),
                n = r(73664),
                s = r(952793),
                l = r(293115),
                i = r(725405);
            const d = (e) => {
                    let t = "/i/premium_sign_up";
                    switch (e.product_category) {
                        case "PremiumBasic":
                        case "BlueVerified":
                        case "BlueVerifiedPlus":
                            t = "/i/premium_sign_up";
                            break;
                        case "QuickFreeTrial": {
                            let r = "";
                            if ("NoAds" === e.quick_free_trial_product_type) r = "/no-ads";
                            t = `/i/quick-free-trial${r}`;
                            break;
                        }
                    }
                    return t;
                },
                c = (e) => {
                    let t = "premium";
                    switch (e) {
                        case "PremiumBasic":
                            t = "premium_basic";
                            break;
                        case "BlueVerified":
                            t = "premium";
                            break;
                        case "BlueVerifiedPlus":
                            t = "premium_plus";
                    }
                    return t;
                },
                u = (e) => {
                    let t = "Year";
                    switch (e) {
                        case "Year":
                            t = "Year";
                            break;
                        case "Month":
                            t = "Month";
                    }
                    return t;
                },
                m = (e, t) => ({ pathname: d(t), state: { referring_page: e.referrer, tier: c(t.product_category), plan: u(t.charge_interval) } });
            var p = r(807896),
                h = r(154003),
                b = r(731708),
                g = r(392237),
                f = r(498514);
            const y = ({ renderProperties: e, wrapperStyles: t }) => {
                    const r = (0, f.U)(e.icon_type),
                        o = e.icon_color ? { color: g.default.theme.colors[e.icon_color] } : null;
                    return a.createElement(r, { style: [t, o, "CircleFill" === e.icon_type ? C.smallIcon : null] });
                },
                C = g.default.create((e) => ({ smallIcon: { height: ".6em" } })),
                D = ({ buttonProps: e, destinationLink: t, onDestinationClick: r, renderProperties: { action_label: n, icon: s } }) => a.createElement(h.ZP, { link: t, onClick: r, type: e?.type }, a.createElement(o.Z, { style: w.buttonInner }, s ? a.createElement(y, { renderProperties: s, wrapperStyles: w.iconWrapper }) : null, a.createElement(b.ZP, null, n))),
                w = g.default.create((e) => ({ buttonInner: { flexDirection: "row", alignItems: "center" }, iconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } }));
            var M = r(992942),
                S = r(439592);
            const k = ({ destinationLink: e, onDestinationClick: t, renderProperties: { cta: r, image_url: n, primary_label: s, primary_label_icon: l, secondary_label: i } }) => {
                    const d = n ? "whiteOnColor" : void 0;
                    return a.createElement(o.Z, { style: E.cardOuter }, n ? a.createElement(M.Z, { aspectMode: S.Z.COVER, source: { uri: n }, style: E.image }) : null, a.createElement(o.Z, { style: E.cardInner }, a.createElement(o.Z, { style: E.primaryLabelContainer }, l ? a.createElement(y, { renderProperties: l, wrapperStyles: E.primaryLabelIconWrapper }) : null, a.createElement(b.ZP, { color: d, size: "headline1", weight: "heavy" }, s)), i ? a.createElement(b.ZP, { color: d }, i) : null, a.createElement(D, { buttonProps: { type: "brandFilled" }, destinationLink: e, onDestinationClick: t, renderProperties: r })));
                },
                E = g.default.create((e) => ({ cardOuter: { borderRadius: e.borderRadii.large, borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, backgroundColor: e.colors.cellBackground }, cardInner: { gap: e.spaces.space12, alignItems: "flex-start", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 }, image: { position: "absolute", width: "100%", height: "100%", borderRadius: e.borderRadii.large }, primaryLabelContainer: { flexDirection: "row", alignItems: "center" }, primaryLabelIconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } })),
                v = ({ destinationLink: e, onDestinationClick: t, renderProperties: r }) => {
                    const n = a.useMemo(() => {
                        const o = { destinationLink: e, onDestinationClick: t };
                        switch (r.__typename) {
                            case "UpsellButtonRenderProperties":
                                return a.createElement(D, (0, p.Z)({}, o, { renderProperties: r }));
                            case "UpsellCardRenderProperties":
                                return a.createElement(k, (0, p.Z)({}, o, { renderProperties: r }));
                            default:
                                return null;
                        }
                    }, [r, e, t]);
                    return a.createElement(o.Z, { testID: `super-upsell-${r.__typename ?? "default"}` }, n);
                },
                _ = ({ attributionParams: e, trackClick: t, trackImpression: r, upsellContent: o }) => {
                    const l = (0, i.Z)(),
                        d = a.useRef(),
                        c = (0, n.R)(d, { threshold: 1 }),
                        u = (0, s.hC)("subscriptions_upsells_track_interactions_enabled");
                    a.useEffect(() => {
                        c && (u ? r() : l.scribeAction("impression"));
                    }, [c, l, r, u]);
                    const p = m(e, o.destination),
                        h = a.useCallback(() => {
                            u ? t() : l.scribeAction("click");
                        }, [l, t, u]);
                    return a.createElement("div", { ref: d }, a.createElement(v, { destinationLink: p, onDestinationClick: h, renderProperties: o.render_properties }));
                },
                T = (e) => a.createElement(l.nO, { data: { referer: e.attributionParams.referrer }, namespace: { component: "unified-upsell", element: e.upsellContent.key } }, a.createElement(_, e));
            var Z = r(722517);
            const P = ({ attributionParams: e, surfaceKey: t, trackClick: r, trackDismiss: o, trackImpression: n, upsellContent: s }) => a.useMemo(() => a.createElement(T, { attributionParams: e, trackClick: r, trackDismiss: o, trackImpression: n, upsellContent: s }), [e, r, o, n, s]),
                R = ({ surfaceKey: e, wrapperStyles: t }) => {
                    const { attributionParams: r, trackClick: n, trackDismiss: s, trackImpression: l, upsellContent: i } = (0, Z.Z)(e);
                    return a.useMemo(() => (i && r ? a.createElement(o.Z, { style: t }, a.createElement(P, { attributionParams: r, surfaceKey: e, trackClick: n, trackDismiss: s, trackImpression: l, upsellContent: i })) : null), [r, i, e, n, s, l, t]);
                },
                I = a.memo(R);
        },
        387524: (e, t, r) => {
            r.d(t, { Z: () => b });
            var a = r(807896),
                o = r(202784),
                n = r(325686),
                s = r(292627),
                l = r(537392),
                i = r(392237),
                d = r(365023),
                c = r(392027),
                u = r(774654),
                m = r(725516),
                p = r(443781);
            const h = i.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${i.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                b = (e) => {
                    const { "aria-label": t, label: r, onPress: b, scribeComponent: g, ...f } = e,
                        { loggedInUserId: y } = o.useContext(p.rC),
                        C = (0, m.z)(),
                        D = o.useCallback(
                            (e) => {
                                C.scribe({ component: g, action: "click" }), b && b(e);
                            },
                            [C, b, g],
                        ),
                        w = u.ZM.useCollapsibleNavBars(),
                        M = [...u.Ah({ elementPosition: "bottom" }), w && h.fabStaysAboveSafeArea];
                    return y
                        ? o.createElement(
                              s.Z.FloatingAction,
                              null,
                              o.createElement(l.ZP, null, ({ windowWidth: e }) => {
                                  const s = e > i.default.theme.breakpoints.large,
                                      l = e > i.default.theme.breakpoints.medium,
                                      u = e < i.default.theme.breakpoints.micro,
                                      m = [h.root, l && h.rootMedium, s && h.rootLarge],
                                      p = [h.fab, s && h.fabLarge, u && h.fabMicro, M];
                                  return o.createElement(
                                      n.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: m },
                                      o.createElement(d.Z, { id: "FloatingActionButtonBase" }, (e, l) => o.createElement(n.Z, (0, a.Z)({ ref: e() }, l({ style: p })), o.createElement(c.Z, (0, a.Z)({}, f, { "aria-label": t, label: s ? r : void 0, onPress: D, style: u && h.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, r) => {
            r.d(t, { Z: () => i });
            r(136728);
            var a = r(202784),
                o = r(387524),
                n = r(635510);
            const s = "/compose/post";
            class l extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: r } = this.props,
                                a = { pathname: s, state: (t && t()) || {} };
                            r.push(a);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: r, scribeComponent: l } = this.props;
                    return a.createElement(o.Z, { "aria-label": e, href: s, icon: t, label: r, onPress: this._handlePress, scribeComponent: l, testID: n.Z.tweet });
                }
            }
            const i = l;
        },
        32677: (e, t, r) => {
            r.d(t, { Z: () => u });
            var a = r(202784),
                o = r(111677),
                n = r.n(o),
                s = r(186444),
                l = r(355883);
            const i = n().j0179e90,
                d = n().ee69d769({ verb: "" }),
                c = a.createElement(s.default, null),
                u = ({ getLocationState: e, history: t }) => a.createElement(l.Z, { "aria-label": i, getLocationState: e, history: t, icon: c, label: d, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, r) => {
            r.d(t, { Z: () => a });
            const a = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        652904: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(202784),
                o = r(500002),
                n = r(668214),
                s = r(997174),
                l = r(118823);
            const i = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class d extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: r, search: a },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: n, search: s },
                            locationKey: l,
                        } = e;
                    let i = !1;
                    t.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && t.pathname === r && ((this._isInBackground = !1), (i = !0));
                    const d = o || l;
                    ((d && o !== l) || (!d && r !== n) || a !== s || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: r, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), r(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, o.ZP)(i(d));
        },
        438965: (e, t, r) => {
            r.d(t, { FE: () => n, Hx: () => i, Oj: () => o, P3: () => d, QO: () => l, j: () => s });
            var a = r(942893);
            const o = { component: "tweet" },
                n = { component: "thread" },
                s = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                l =
                    (e = !1) =>
                    (t) => {
                        const { conversationPosition: r, conversationTreeMetadata: a } = t;
                        return !(e || (r && !r.isEnd && (!a || !1 !== a.descendantConnector || 0 !== a.indents.filter((e) => "line" === e.displayType).length)));
                    },
                i = (e) => a.Z.getTweetURTEntryItem(e),
                d = (e, t, r) => {
                    const a = ["descendant", "ancestor"].includes(r?.position) && !["profile", "me"].includes(e.page) ? ("descendant" === r?.position ? "conversation_descendants" : "conversation_ancestors") : e.section;
                    return { ...e, section: a, component: t?.component || e.component, action: t?.action || e.action, element: t?.element || e.element };
                };
        },
        383675: (e, t, r) => {
            r.d(t, { R: () => i, Z: () => l });
            var a = r(503768),
                o = r(644829),
                n = r(750085),
                s = r(218951);
            const l = ({ endpointParams: e, endpointUrl: t, isUserRefreshable: r, timelineId: a }) => (0, s.Z)({ timelineId: a, isUserRefreshable: r, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchGeneric, getEndpointParams: ({ count: r, cursor: a }) => ({ ...e, cursor: "string" == typeof a ? a : void 0, count: r, endpointUrl: t }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                i = (e, t) => (0, s.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(a.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: t, cursor: r }) => ({ cursor: "string" == typeof r ? r : void 0, count: t, timelineId: e }) }, formatResponse: n.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
        506653: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a = r(483557),
                o = r(750085),
                n = r(218951);
            const s = ({ listId: e, useRanked: t = !1 }) => (0, n.Z)({ timelineId: l({ listId: e, useRanked: t }), network: { getEndpoint: (e) => e.withEndpoint(a.ZP).fetchTweetsGraphQL, getEndpointParams: ({ count: r, cursor: a }) => ({ listId: e, count: r, cursor: "string" == typeof a ? a : void 0, useRanked: t }) }, formatResponse: o.Z, context: "FETCH_LIST_TIMELINE_GRAPHQL", perfKey: "listTweetsGraphQL" });
            function l({ listId: e, useRanked: t = !1 }) {
                return `listTweets-GraphQL-${e}-${t ? "ranked" : "latest"}`;
            }
        },
        237983: (e, t, r) => {
            r.r(t), r.d(t, { HomeTimeline: () => Mt, default: () => kt });
            var a = r(202784),
                o = r(325686),
                n = r(420412),
                s = r(108362),
                l = r(537392),
                i = r(708852),
                d = r(392237),
                c = r(111677),
                u = r.n(c),
                m = r(323265),
                p = r(718e3),
                h = r(205705),
                b = r(789831),
                g = r(143670),
                f = r(731708),
                y = r(157130),
                C = r(661810),
                D = r(154003),
                w = r(293723),
                M = r(263272),
                S = r(164174),
                k = r(487552),
                E = r(125363),
                v = r(306878);
            const _ = () => {
                    const e = (0, E.v9)(v.wB),
                        t = (0, E.I0)();
                    return [
                        e,
                        a.useCallback(
                            (e) => {
                                t((0, v.iT)(e)), t((0, v.KC)(e));
                            },
                            [t],
                        ),
                    ];
                },
                T = u().g53d5df6,
                Z = u().j59f0b94,
                P = ({ setTransitionState: e, transitionState: t }) => {
                    const [r] = _(),
                        [n, s] = a.useState(r),
                        l = a.useCallback(
                            (e, n) => {
                                const l = e === T;
                                return a.createElement(g.Z, {
                                    actionText: a.createElement(o.Z, { style: R.focusedModePopoverMenuItem }, a.createElement(f.ZP, null, e), r === l ? a.createElement(w.default, { style: R.focusedModeGreenCheck }) : a.createElement(M.default, null)),
                                    onClick: () => {
                                        r !== l && "Idle" === t && s(!r), n();
                                    },
                                });
                            },
                            [r, t],
                        );
                    return a.createElement(
                        y.Z,
                        {
                            animationDuration: "normal",
                            onAnimateComplete: () => {
                                r !== n && e(n ? "RotatingToHideSidebar" : "SlidingToHideSearchBar");
                            },
                            preferredHorizontalOrientation: "start",
                            preferredVerticalOrientation: "down",
                            renderContent: (e) => a.createElement(a.Fragment, null, l(Z, e), a.createElement(C.Z, { style: R.divider }), l(T, e)),
                            withMask: !0,
                        },
                        a.createElement(D.ZP, { icon: a.createElement(S.default, null), style: R.focusedModeButton }, a.createElement(f.ZP, { style: R.focusedModeButtonText }, n ? T : Z), a.createElement(k.default, null)),
                    );
                },
                R = d.default.create((e) => ({ focusedModeButton: { paddingEnd: e.spaces.space12 }, focusedModeButtonText: { marginStart: e.spaces.space4, marginEnd: e.spaces.space8 }, focusedModePopoverMenuItem: { display: "flex", flexDirection: "row", justifyContent: "space-between", padding: e.spaces.space4 }, focusedModeGreenCheck: { color: e.colors.green500 }, divider: { marginHorizontal: e.spaces.space20 } }));
            var I = r(788994),
                x = r(727828),
                B = r(252021),
                A = r(920603),
                z = r(443781),
                H = r(32677),
                L = (r(136728), r(899667)),
                N = r(507651),
                W = r(952793),
                F = r(655352),
                O = r(872788),
                G = r(71620),
                U = r(668214),
                $ = r(709318),
                j = r(390387);
            const V = (0, U.Z)()
                .propsFromState(() => ({ pinnedTimelines: $.GE, selectedTimeline: $.br, isSubscriber: j.pG, sort: $.sI }))
                .propsFromActions(() => ({ createLocalApiErrorHandlerFetchPins: (0, G.zr)("HOME_TIMELINE_FETCH_PINS"), fetchPinnedTimelinesIfNeeded: $.Mq, updateSettings: $.VP }))
                .withAnalytics();
            var J = r(138099),
                q = r(449479);
            const K = u().a2118086,
                Q = [
                    { label: u().edf7bc2e, value: O.UO.RELEVANCE },
                    { label: u().d16c1ab6, value: O.UO.RECENCY },
                    { label: u().d3619250, value: O.UO.LIKES },
                ];
            function Y({ onChange: e, onDismiss: t, value: r }) {
                return a.createElement(
                    J.Z,
                    { onMaskClick: t, style: X.sheet, type: "bottom", withMask: !0 },
                    a.createElement(f.ZP, { align: "center", size: "headline1", weight: "bold" }, K),
                    a.createElement(q.Z, {
                        name: "sort",
                        onChange: function (r, a) {
                            e(a), t();
                        },
                        options: Q,
                        value: r,
                    }),
                );
            }
            const X = d.default.create((e) => ({ sheet: { padding: e.spaces.space16 } })),
                ee = u().d1e0a75f({ noun: "" }),
                te = u().dafd69e9({ noun: "" }),
                re = u().d80a1c37({ noun: "" }),
                ae = a.createElement(k.default, null),
                oe = a.createElement(L.default, null);
            const ne = d.default.create((e) => ({ tabsContainer: { display: "flex", flexDirection: "row" }, tabs: { flexBasis: 1, flexGrow: 1, paddingEnd: e.spaces.space4 }, rightControlContainer: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, justifyContent: "center", paddingHorizontal: e.spaces.space8 }, focusedModeRightControlContainer: { paddingHorizontal: 0 } })),
                se = V(function ({ analytics: e, createLocalApiErrorHandlerFetchPins: t, fetchPinnedTimelinesIfNeeded: r, isSubscriber: n, onRefresh: s, pinnedTimelines: l, rightControl: i, selectedTimeline: d, sort: c, updateSettings: u }) {
                    const [, m] = a.useTransition(),
                        [p, h] = a.useState(!1),
                        b = a.useRef(0);
                    function g(e) {
                        m(function () {
                            u({ sort: e });
                        });
                    }
                    function f() {
                        h(!1);
                    }
                    function y(t) {
                        const r = t.id === d.id && t.type === d.type,
                            o = t.type === O.Jz.COMMUNITY && r,
                            n = t.name,
                            l = p ? oe : ae;
                        return {
                            isActive: () => r,
                            label: o ? a.createElement(a.Fragment, null, n, " ", l) : n,
                            key: `${t.type}${t.id ? `-${t.id}` : ""}`,
                            onClick: () => {
                                if (r) o ? h(!0) : s();
                                else {
                                    const r = Date.now() - b.current,
                                        { name: a, ...o } = t;
                                    m(function () {
                                        u({ selectedTimeline: o });
                                    });
                                    const n = d.type === O.Jz.GENERIC ? d.scribe : O.yu[d.type],
                                        s = t.type === O.Jz.GENERIC ? t.scribe : O.yu[t.type];
                                    e.scribe({ section: n, element: s, action: "switch", data: { duration_ms: r } });
                                }
                            },
                            retainScrollPosition: !1,
                            to: "/home",
                        };
                    }
                    a.useEffect(() => {
                        b.current = Date.now();
                    }, [d]),
                        a.useEffect(() => {
                            r().catch(t());
                        }, [t, r]);
                    const C = [y({ name: ee, type: O.Jz.HOME }), y({ name: te, type: O.Jz.HOME_LATEST })];
                    n && C.push(y({ name: re, type: O.Jz.CREATOR_SUBSCRIPTIONS })), l.forEach((e) => C.push(y(e)));
                    const D = (0, W.hC)("rweb_sourcemap_migration"),
                        w = (0, W.hC)("rweb_sourcemap_migration_focused_mode") && D;
                    if (C.length < 2) return null;
                    const M = (0, F.ZP)();
                    return i ? a.createElement(o.Z, { style: ne.tabsContainer }, a.createElement(N.Z, { alignFirstItem: M, links: C, style: ne.tabs }), a.createElement(o.Z, { style: [ne.rightControlContainer, w && ne.focusedModeRightControlContainer] }, i), p && a.createElement(Y, { onChange: g, onDismiss: f, value: c })) : a.createElement(a.Fragment, null, a.createElement(N.Z, { alignFirstItem: M, links: C }), p && a.createElement(Y, { onChange: g, onDismiss: f, value: c }));
                });
            var le = r(652904),
                ie = r(614983),
                de = r.n(ie),
                ce = r(933083),
                ue = r(962741),
                me = r(87063),
                pe = r(500002),
                he = r(519896),
                be = r(810641),
                ge = r(438965),
                fe = r(335632);
            const ye = (0, U.Z)().propsFromState(() => ({ selectedTimeline: $.br, sort: $.sI, viewerUserId: j._h }));
            var Ce = r(807896),
                De = r(457311),
                we = r(725516);
            const Me = { header: u().a1ab9c80, message: u().b32c4fb0 },
                Se = { buttonLink: "/i/connect_people", buttonText: u().bf17deda, header: u().defba9a4, message: u().c3fbf1da },
                ke = { header: u().a2515900, message: u().je23cdb2 };
            function Ee({ timelineType: e }) {
                const t = (0, we.z)(),
                    r = a.useCallback(() => {
                        t.scribe({ action: "click", component: "empty_message", element: "primary_cta" });
                    }, [t]),
                    o = a.useCallback(() => {
                        t.scribe({ action: "impression", component: "empty_message" });
                    }, [t]),
                    n = a.useMemo(() => (e === O.Jz.COMMUNITY ? Me : e === O.Jz.LIST ? ke : Se), [e]);
                return a.createElement(De.Z, (0, Ce.Z)({ onButtonPress: r, onImpression: o }, n));
            }
            var ve = r(791632);
            var _e = r(985366),
                Te = r(383675),
                Ze = r(255117),
                Pe = r(506653),
                Re = r(290297);
            const Ie = u().f089620c,
                xe = (0, pe.ZP)(
                    ye(({ history: e, location: t, selectedTimeline: r, sort: o, recordTTFT: n = ce.jN, timelineRef: s, viewerUserId: l }) => {
                        const { featureSwitches: i } = a.useContext(z.rC),
                            d = a.useRef(!0);
                        de()(l, "viewerUserId must be defined");
                        const c = r.type === O.Jz.HOME && i.isTrue("rweb_home_nav_single_direction_scroll_enabled"),
                            u = a.useCallback(
                                ({ entries: e, fetchStatus: t }) => {
                                    if ((t === me.Z.FAILED && (d.current = !1), d.current && e.length)) {
                                        const t = e.some(({ type: e }) => e === ue.ZP.Tweet);
                                        (d.current = !1), t && (performance?.mark?.("home-entries-rendered"), n());
                                    }
                                },
                                [n],
                            ),
                            p = a.useMemo(
                                () =>
                                    (function ({ history: e, location: t, selectedTimeline: r, sort: a, viewerUserId: o }) {
                                        const n = (0, ve.HD)(e) ? e.location.query.id : void 0,
                                            s = (0, ve.HD)(e) ? e.location.query.mode : void 0,
                                            l = s || r.type,
                                            i = n || r.id,
                                            d = s ? s === O.Jz.HOME_LATEST : r.type === O.Jz.HOME_LATEST;
                                        return l === O.Jz.COMMUNITY && i ? (0, _e.Qx)(String(i), { displayLocation: "Home", rankingMode: a }) : l === O.Jz.CREATOR_SUBSCRIPTIONS ? (0, Re.Z)({ userId: o }) : l === O.Jz.GENERIC && i ? (0, Te.R)(String(i)) : l === O.Jz.LIST && i ? (0, Pe.Z)({ listId: String(i) }) : (0, Ze.ZP)({ useLatest: d, userId: o });
                                    })({ history: e, location: t, selectedTimeline: r, sort: o, viewerUserId: l }),
                                [e, t, r, o, l],
                            ),
                            h = a.useCallback(() => a.createElement(Ee, { timelineType: r.type }), [r]),
                            b = a.useMemo(() => (0, fe.G)({ hideReplyContextMode: i.isTrue("rweb_tweets_reply_context_hidden") ? ge.j.TIMELINE : void 0, isCompact: m.ZP.isMobileOS() && i.isTrue("rweb_home_compact_timeline_enabled"), withUserPresence: i.isTrue("responsive_web_audio_space_ring_home_timeline") }), [i]);
                        return a.createElement(be.Z, { entryConfiguration: b, isSingleDirection: c, module: p, onEntriesRendered: u, prerollDisplayLocation: he.Nw.TIMELINE_HOME, renderEmptyState: h, timelineRef: s, title: Ie, withNewTweetsPill: !0 });
                    }),
                );
            var Be = r(791983),
                Ae = r(523561),
                ze = r(597496),
                He = r(155727),
                Le = r(618186),
                Ne = r(872405),
                We = r(823161),
                Fe = r(473026),
                Oe = r(937450),
                Ge = r(853485),
                Ue = r(450646),
                $e = r(674306),
                je = r(665468),
                Ve = r(292484),
                Je = r(919022);
            const qe = (0, U.Z)()
                    .propsFromState(() => ({ viewerUser: Je.ZP.selectViewerUser }))
                    .adjustStateProps(({ viewerUser: e }) => ({ userAvatarURI: e && e.profile_image_url_https, userName: e && e.name })),
                Ke = u().ee69d769({ verb: "" }),
                Qe = u().e349147c,
                Ye = a.createElement(Fe.default, null),
                Xe = a.createElement(Oe.default, null),
                et = a.createElement(Ge.default, null),
                tt = a.createElement(Ue.default, null),
                rt = a.createElement($e.default, null),
                at = a.createElement(je.default, null),
                ot = d.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space8 }, avatarColumn: { paddingTop: 48 - We.default.getSizeSimple(We.default.defaultSize) + "px" }, avatar: { width: "100%" }, body: { flexDirection: "column", flexGrow: 1 }, fakeInput: { paddingTop: e.spaces.space16, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space2 }, toolbar: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space2, marginTop: e.spaces.space20 }, toolbarSection: { alignItems: "center", flexDirection: "row" }, toolbarSectionWithIconContainer: { alignItems: "center", flexDirection: "row", marginStart: e.spacesPx.space2 }, toolBarButton: { marginHorizontal: 0 }, firstToolBarButton: { marginHorizontal: 0, marginStart: `-${e.spaces.space8}` }, tweetButton: { marginStart: e.spaces.space12 } })),
                nt = qe(({ userAvatarURI: e }) => {
                    const t = a.useMemo(() => a.createElement(He.Z.Consumer, null, ({ avatarSize: t }) => a.createElement(Le.Z, { size: t, style: ot.avatar, uri: e })), [e]),
                        r = !(0, Ve.vS)();
                    return a.createElement(Ne.Z, { avatarCell: t, avatarCellStyle: ot.avatarColumn, cellStyle: ot.body, style: ot.root }, a.createElement(f.ZP, { color: "gray700", numberOfLines: 1, size: "headline1", style: ot.fakeInput }, Qe), a.createElement(o.Z, { style: ot.toolbar }, a.createElement(o.Z, { style: ot.toolbarSectionWithIconContainer }, a.createElement(D.ZP, { disabled: !0, icon: Ye, size: "medium", style: ot.firstToolBarButton, type: "brandText" }), a.createElement(D.ZP, { disabled: !0, icon: Xe, size: "medium", style: ot.toolBarButton, type: "brandText" }), r ? a.createElement(D.ZP, { disabled: !0, icon: et, size: "medium", style: ot.toolBarButton, type: "brandText" }) : null, a.createElement(D.ZP, { disabled: !0, icon: tt, size: "medium", style: ot.toolBarButton, type: "brandText" }), r ? a.createElement(D.ZP, { disabled: !0, icon: rt, size: "medium", style: ot.toolBarButton, type: "brandText" }) : null, a.createElement(D.ZP, { disabled: !0, icon: at, size: "medium", style: ot.toolBarButton, type: "brandText" })), a.createElement(o.Z, { style: ot.toolbarSection }, a.createElement(D.ZP, { disabled: !0, style: ot.tweetButton, type: "primaryFilled" }, Ke))));
                }),
                st = (0, Ae.Z)({
                    loader: () =>
                        (ze.H1.preload() || Promise.resolve()).then(() =>
                            Promise.all([
                                r.e("icons.8"),
                                r.e("icons.15"),
                                r.e("icons.7"),
                                r.e("icons.3"),
                                r.e("icons.24"),
                                r.e("icons.12"),
                                r.e("icons.22"),
                                r.e("icons.2"),
                                r.e("icons.18"),
                                r.e("icons.9"),
                                r.e("icons.6"),
                                r.e("icons.1"),
                                r.e("modules.common-e907d115"),
                                r.e("modules.common-e019dbda"),
                                r.e("icons.14"),
                                r.e("icons.5"),
                                r.e("modules.audio-6107ac1a"),
                                r.e("modules.audio-b953418a"),
                                r.e("modules.audio-7c51e6a7"),
                                r.e("modules.audio-04db59e9"),
                                r.e("modules.audio-76583d6c"),
                                r.e("modules.audio-b7a8a5fb"),
                                r.e("modules.audio-51f6e793"),
                                r.e("modules.audio-e019dbda"),
                                r.e("modules.audio-262c94d4"),
                                r.e("modules.audio-c6fe4ea4"),
                                r.e("icons.21"),
                                r.e("icons.16"),
                                r.e("icons.28"),
                                r.e("icons.17"),
                                r.e("icons.27"),
                                r.e("icons.19"),
                                r.e("icons.0"),
                                r.e("icons.4"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"),
                                r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"),
                                r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"),
                                r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"),
                                r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"),
                                r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                                r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                                r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                                r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                                r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                                r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                                r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                                r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                                r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                                r.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                                r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                                r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                                r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                                r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                                r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                                r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                                r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                                r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                                r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                                r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                                r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                                r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                                r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                                r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                                r.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                                r.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                                r.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                                r.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~bundle"),
                                r.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-a25e0877"),
                                r.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-0a1983f3"),
                                r.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-49ce3a1b"),
                                r.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-a9a3eb61"),
                                r.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-7b8626db"),
                                r.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-76dc24ae"),
                                r.e("shared~bundle.Compose~bundle.ConversationWithRelay~bundle.Conversation~bundle.RichTextCompose"),
                                r.e("shared~bundle.TwitterArticles~bundle.Compose~bundle.RichTextCompose-bc6ccf4c"),
                                r.e("shared~bundle.TwitterArticles~bundle.Compose~bundle.RichTextCompose-e96e9bea"),
                                r.e("shared~bundle.Compose~bundle.RichTextCompose-bc6ccf4c"),
                                r.e("shared~bundle.Compose~bundle.RichTextCompose-a2dee9c7"),
                                r.e("shared~bundle.Compose~bundle.RichTextCompose-42018f38"),
                                r.e("shared~bundle.Compose~bundle.RichTextCompose-07b0deba"),
                                r.e("shared~bundle.Compose~bundle.RichTextCompose-0fb8c86a"),
                                r.e("shared~bundle.Compose~bundle.RichTextCompose-e6266db0"),
                                r.e("bundle.RichTextCompose"),
                            ]).then(r.bind(r, 728455)),
                        ),
                    renderPlaceholder: () => a.createElement(nt, null),
                });
            var lt = r(880647),
                it = r(485785);
            const dt = () =>
                    ct()
                        ? r
                              .e("ondemand.framerateTracking")
                              .then(r.bind(r, 172004))
                              .then(({ default: e }) => e)
                        : Promise.resolve(void 0),
                ct = () => window.performance && "function" == typeof window.performance.now;
            var ut = r(293115),
                mt = r(521514);
            const pt = 200,
                ht = 100,
                bt = (e) => {
                    const [t, r] = _(),
                        [o, n] = a.useState("Idle"),
                        [s, l] = a.useState(t),
                        i = gt(e),
                        [d, c] = a.useState(null),
                        [u, m] = a.useState(null);
                    return (
                        a.useLayoutEffect(() => {
                            "Idle" !== o && t !== s && (t ? (c(i.Primary_MountingFocusedLayout), n("SlidingToShowSearchBar")) : (m(i.Sidebar_MountingDefaultLayout), c(i.Primary_MountingDefaultLayout), n("RotatingToShowSidebar")), l(t));
                        }, [t, s, o, i.Sidebar_MountingDefaultLayout, i.Primary_MountingDefaultLayout, i.Primary_MountingFocusedLayout]),
                        a.useLayoutEffect(() => {
                            switch (o) {
                                case "RotatingToHideSidebar":
                                    m(i.Sidebar_RotatingToHideSidebar), c(i.Primary_RotatingToHideSidebar), setTimeout(() => r(!0), pt);
                                    break;
                                case "SlidingToShowSearchBar":
                                    c(i.Primary_SlidingToShowSearchBar), setTimeout(() => n("Idle"), ht);
                                    break;
                                case "SlidingToHideSearchBar":
                                    c(i.Primary_SlidingToHideSearchBar), setTimeout(() => r(!1), ht);
                                    break;
                                case "RotatingToShowSidebar":
                                    m(i.Sidebar_RotatingToShowSidebar), c(i.Primary_RotatingToShowSidebar), setTimeout(() => n("Idle"), pt);
                                    break;
                                default:
                                    c(null), m(null);
                            }
                        }, [r, o, i.Sidebar_RotatingToHideSidebar, i.Primary_RotatingToHideSidebar, i.Sidebar_RotatingToShowSidebar, i.Primary_RotatingToShowSidebar, i.Primary_SlidingToShowSearchBar, i.Primary_SlidingToHideSearchBar]),
                        [o, n, d, u]
                    );
                },
                gt = (e) => {
                    const t = mt.Z.columnWidthsRedesign.secondary.normal,
                        r = e ? mt.Z.sideNavWidthsRedesign.expanded : mt.Z.sideNavWidthsRedesign.collapsed.normal;
                    return a.useMemo(
                        () =>
                            d.default.create((e) => {
                                const a = (t - r) / 2,
                                    o = (t + r) / 2,
                                    n = e.componentDimensions.appBarHeightPx + e.spacesPx.space16;
                                return { Sidebar_RotatingToHideSidebar: { transformOrigin: "center 50vh", transition: "scale 200ms ease-out, translate 200ms ease-in", scale: 0.8, translate: -o }, Primary_RotatingToHideSidebar: { transition: "translate 200ms ease-in", translate: a, backgroundColor: e.colors.cellBackground }, Primary_MountingFocusedLayout: { translate: `0 -${n}px` }, Primary_SlidingToShowSearchBar: { translate: 0, transition: "translate 100ms ease-in-out" }, Primary_SlidingToHideSearchBar: { translate: `0 -${n}px`, transition: "translate 100ms ease-in-out" }, Primary_MountingDefaultLayout: { translate: a }, Sidebar_MountingDefaultLayout: { translate: -o, scale: 0.8 }, Primary_RotatingToShowSidebar: { translate: 0, transition: "translate 200ms ease-out", backgroundColor: e.colors.cellBackground }, Sidebar_RotatingToShowSidebar: { translate: 0, scale: 1, transition: "scale 200ms ease-in, translate 200ms ease-out" } };
                            }),
                        [t, r],
                    );
                };
            var ft = r(936572);
            const yt = (0, U.Z)()
                    .propsFromState(() => ({ selectedTimeline: $.br, isSideNavExpandedByUser: ft.op }))
                    .withAnalytics({ page: "home" }),
                Ct = u().ha8209bc,
                Dt = a.createElement(Be.c, null),
                wt = a.createElement(p.Z, null);
            function Mt({ analytics: e, history: t, isSideNavExpandedByUser: r, location: d, selectedTimeline: c }) {
                const { featureSwitches: u, isRestrictedSession: p, userClaims: g } = (0, z.QZ)(),
                    f = a.useRef(performance?.mark?.("home-page-init-start")),
                    y = a.useRef(null),
                    C = a.useRef(!1),
                    D = a.useRef(1 / 0),
                    w = a.useRef(null),
                    M = c.type === O.FO.COMMUNITY;
                a.useEffect(
                    () => (
                        (C.current = !0),
                        f.current && performance?.measure?.("home-page-init", "home-page-init-start"),
                        () => {
                            C.current = !1;
                        }
                    ),
                    [],
                ),
                    a.useEffect(() => {
                        function e() {
                            D.current = Date.now();
                        }
                        function t() {
                            const e = Date.now() - D.current;
                            u.isTrue("rweb_home_nav_single_direction_scroll_enabled") || (e > 1e3 * u.getNumberValue("rweb_home_refetch_on_refocus_min_delay_seconds", 30) && w.current?.fetchTop({ onlyIfStale: !0 }));
                        }
                        return (
                            window.addEventListener("blur", e),
                            window.addEventListener("focus", t),
                            () => {
                                window.removeEventListener("blur", e), window.removeEventListener("focus", t);
                            }
                        );
                    }, [u]),
                    a.useEffect(() => {
                        if (u.isTrue("responsive_web_framerate_tracking_home_enabled")) {
                            const e = `home${m.ZP.isDesktopOS() ? "" : "_mobile"}`;
                            dt().then((t) => {
                                C.current && t && (y.current = t({ reportNamespace: e }));
                            });
                        }
                        return () => {
                            y.current?.stop();
                        };
                    }, [u]);
                const S = a.useCallback(() => {
                        w.current?.refreshOrGoTop();
                    }, [w]),
                    k = a.useCallback(
                        (e) => {
                            w.current = e;
                        },
                        [w],
                    ),
                    E = a.useMemo(() => a.createElement(a.Fragment, null, !(0, F.ZP)() || p || M ? null : a.createElement(a.Fragment, null, a.createElement(st, { history: t, location: d }), a.createElement(n.Z, { isSlim: !0 })), a.createElement(b.Z, { component: s.Z, fab: a.createElement(H.Z, { history: t }) }, a.createElement(xe, { timelineRef: k }))), [t, M, p, d, k]),
                    v = { page: "home", section: c.type === O.Jz.GENERIC ? c.scribe : O.yu[c.type] },
                    T = !(0, F.ZP)(),
                    Z = T ? a.createElement(h.Z, { style: St.icon }) : void 0,
                    R = T ? null : Ct,
                    L = u.isTrue("rweb_sourcemap_migration"),
                    N = u.isTrue("rweb_sourcemap_migration_focused_mode"),
                    W = g.isAnyPremiumSubscriber(),
                    [G, U] = (0, l.Zx)(({ windowWidth: e }) => [lt.Z.isOneColumnViewportCenteredSquishedLayoutRedesign(e, !!r), lt.Z.isTwoColumnOrWiderLayoutRedesign(e, !!r)]),
                    $ = L && N && W && U,
                    [j] = _(),
                    V = (0, i.$u)(),
                    [J, q, K, Q] = bt(!!r),
                    Y = a.useMemo(() => a.createElement(se, { onRefresh: S, rightControl: $ && a.createElement(P, { setTransitionState: q, transitionState: J }) }), [q, $, J, S]),
                    X = a.useMemo(() => {
                        if (T && !g.isAnyPremiumSubscriber()) {
                            if (u.isTrue("subscriptions_upsells_home_nav_migration_enabled")) return a.createElement(A.Z, { surfaceKey: "HomeNav" });
                            if ("" !== u.getStringValue("subscriptions_upsells_premium_home_nav")) return a.createElement(o.Z, { style: St.upsellContainer }, a.createElement(x.Z, { variant: "HomeNav" }));
                        }
                        return null;
                    }, [T, g, u]),
                    ee = a.useMemo(() => a.createElement(o.Z, { style: [St.searchContainer, it.W.contentOneColumnRedesign, G && St.squished, K] }, a.createElement(ze.Rj, { shouldHandleSearchShortcut: !0 })), [G, K]);
                return a.createElement(ut.nO, { namespace: v }, a.createElement(le.Z, { locationKey: v.page }, $ && j && ee, a.createElement(B.Z, { centeredLogo: Z, disjointHeader: Dt, documentTitle: Ct, history: t, onTabRefresh: S, primaryContent: E, primaryContentStyles: $ && K, rightControl: X, secondaryBar: Y, sidebarContent: $ && j ? null : a.createElement(o.Z, { style: $ && Q }, wt), title: R, withAppBar: !V }), $ && j && !G && a.createElement(o.Z, { style: St.floatingFooter }, a.createElement(I.Z, { align: "right", itemLayout: "vertical", withOverflow: !0 }))));
            }
            const St = d.default.create((e) => ({ icon: { flexGrow: 1, height: "1.75rem", color: e.colors.brandColor }, upsellContainer: { maxWidth: "100%" }, searchContainer: { alignItems: "center", backfaceVisibility: "hidden", backgroundColor: e.colors.cellBackground, flexDirection: "row", height: e.componentDimensions.appBarHeight, minHeight: e.spaces.space32, top: 0, zIndex: e.componentZIndices.appBarZIndex, paddingHorizontal: e.spaces.space16, marginTop: e.spaces.space16 }, floatingFooter: { position: "fixed", bottom: e.spaces.space20, end: 0 }, squished: { maxWidth: "100%" } })),
                kt = yt(Mt);
        },
        498514: (e, t, r) => {
            r.d(t, { U: () => T });
            r(202784);
            var a = r(521058),
                o = r(847988),
                n = r(616894),
                s = r(376021),
                l = r(625823),
                i = r(839),
                d = r(266151),
                c = r(468670),
                u = r(913973),
                m = r(1753),
                p = r(748138),
                h = r(53674),
                b = r(164174),
                g = r(926981),
                f = r(642317),
                y = r(28862),
                C = r(376278),
                D = r(511323),
                w = r(254944),
                M = r(465072),
                S = r(189700),
                k = r(520489),
                E = r(297938),
                v = r(136483),
                _ = r(457566);
            const T = (e) => {
                switch (e) {
                    case "Fire":
                        return a.default;
                    case "BookStrokeOn":
                        return o.default;
                    case "No":
                        return n.default;
                    case "WriteStroke":
                        return s.default;
                    case "AccountNft":
                        return l.default;
                    case "CameraVideoStroke":
                        return i.default;
                    case "Feather":
                        return d.default;
                    case "LockStroke":
                        return c.default;
                    case "Checkmark":
                        return u.default;
                    case "NotesStroke":
                        return m.default;
                    case "Grok":
                        return _.x1;
                    case "MoneyStroke":
                        return p.default;
                    case "BarChart":
                        return h.default;
                    case "DeckStroke":
                        return b.default;
                    case "Film":
                        return g.default;
                    case "RocketStroke":
                        return f.default;
                    case "BookmarkCollectionsStroke":
                        return y.default;
                    case "FireStroke":
                        return C.default;
                    case "PersonStroke":
                        return D.default;
                    case "PaintbrushStroke":
                        return w.default;
                    case "ModeratorStroke":
                        return M.default;
                    case "Document":
                        return S.default;
                    case "RadarStroke":
                        return k.default;
                    case "SearchPersonStroke":
                        return E.default;
                    case "CircleFill":
                        return v.default;
                    default:
                        return () => null;
                }
            };
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a = r(202784),
                o = r(325686),
                n = r(392237);
            function s({ spacing: e, style: t }) {
                return a.createElement(o.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? n.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = n.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        392027: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(202784),
                o = r(154003),
                n = r(392237);
            class s extends a.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: r, disabled: n, href: s, icon: i, label: d, onPress: c, renderMenu: u, style: m, testID: p } = this.props,
                        h = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, r);
                    return a.createElement(o.ZP, { "aria-label": e, backgroundColor: t, color: h, disabled: n, icon: i, link: s, onPress: c, renderMenu: u, size: "xLarge", style: [l.root, !d && l.iconOnly, m], testID: p }, d);
                }
            }
            s.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const l = n.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                i = s;
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(202784),
                o = r(325686),
                n = r(235902),
                s = r(885015),
                l = r(392237);
            function i({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: i } = n.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: l.default.theme.colors[e] ?? l.default.theme.colors.borderColor };
                return r ? a.createElement(s.Z, { style: !t && d.root, withGutter: !0 }, a.createElement(o.Z, { style: d.gapColumn }, a.createElement(o.Z, { style: [d.gap, c] })), a.createElement(o.Z, { style: d.gapText }, r), a.createElement(o.Z, { style: d.gapColumn }, a.createElement(o.Z, { style: [d.gap, c] }))) : a.createElement(o.Z, { style: [!t && d.root, i() && d.rootRedesign, d.gap, c] });
            }
            const d = l.default.create((e) => ({ borderColor: { backgroundColor: l.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: l.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => d });
            var a = r(807896),
                o = r(202784),
                n = r(325686),
                s = r(392237);
            class l extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...s } = this.props,
                        l = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, i.column, r && i.withGutterColumn] }));
                    return o.createElement(n.Z, (0, a.Z)({ style: [t, i.root, r && i.withGutter] }, s), l);
                }
            }
            l.defaultProps = { withGutter: !1 };
            const i = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = l;
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => y });
            var a = r(202784),
                o = r(325686),
                n = r(913973),
                s = r(731708),
                l = r(950822),
                i = r(466792),
                d = r(58881),
                c = r(530732),
                u = r(352924),
                m = r(392237);
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, u.F)()),
                        (this.descriptionId = (0, u.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: r } = this.props;
                            r && !t && r(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: r, disabled: u, helpText: p, label: b, name: g, testID: f } = this.props,
                        y = d.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = d.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        D = r ? y : C;
                    return a.createElement(i.Z, { disabled: u }, (i) => a.createElement(o.Z, { role: "label", style: [h.root, !u && h.interactive], testID: f }, a.createElement(o.Z, { style: h.topContainer }, a.createElement(s.ZP, { id: this.labelId }, b), a.createElement(o.Z, { style: h.radioContainer }, a.createElement(c.Z, { interactiveStyles: D, interactivityState: i, style: h.radioBackground }, a.createElement(o.Z, { style: [h.circle, r && h.circleActive, u && h.circleDisabled, r && u && h.circleCheckedAndDisabled] }, r ? a.createElement(n.default, { style: h.checkMark }) : null)), (0, l.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: u, name: g, onChange: this._handleChange, ref: this._setRef, style: [h.nativeControl], type: "radio" }))), p ? a.createElement(s.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: h.helpText }, p) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            p.defaultProps = { disabled: !1, checked: !1 };
            const h = m.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...m.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                b = p,
                g = "radioGroup";
            let f = 1;
            class y extends a.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: r } = this.props;
                            r(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (r) => {
                            (this._radioRefs[e] = r), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${f}_LABEL`),
                        (f += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: r, label: n, name: l, options: i, value: d } = this.props;
                    return a.createElement(
                        o.Z,
                        { "aria-label": e, "aria-labelledby": n && !e ? this._labelId : void 0, role: "radiogroup", style: r && C.disabled, testID: `${g}${l}` },
                        n ? a.createElement(o.Z, { id: this._labelId, role: "label", style: C.header }, a.createElement(s.ZP, { style: C.label, weight: "bold" }, n), t ? a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        i.map((e, t) => a.createElement(b, { "aria-posinset": t + 1, "aria-setsize": i.length, checked: e.value === d, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: l, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === d), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const C = m.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        403556: (e, t, r) => {
            r.d(t, { Z: () => E });
            var a = r(807896),
                o = r(202784),
                n = r(194504),
                s = r(235902),
                l = r(392237),
                i = r(325686),
                d = r(111677),
                c = r.n(d),
                u = r(912021),
                m = r(516951),
                p = r(731708),
                h = r(310088),
                b = r(175993),
                g = r(58881),
                f = r(530732);
            const y = c().d2414d31,
                C = () => c().ce4e85ae,
                D = c().fb9f6f39;
            class w extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: r, query: a, state: o } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: r, query: a, method: "push", state: { ...o, lockScroll: t } };
                        })),
                        (this._unlisten = m.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, r, a) => {
                            const o = l.default.theme.colors.text,
                                n = l.default.theme.colors.gray700;
                            return r || a ? (e || t ? o : n) : e ? o : n;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": t, badgeCount: r, badgePip: a, children: n, color: s, isActive: d, isCompact: c, isPillLink: u, isRoundedRect: m, isWebRedesign: b, retainScrollPosition: w, style: S, to: k } = this.props,
                        { location: E } = this.state,
                        v = k ? this._getMemoizedLink(k, w) : void 0,
                        _ = d ? d(k) : E?.pathname === v?.pathname,
                        T = g.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? M.pillHoverStyle.backgroundColor : void 0 }),
                        Z = b ? "medium" : _ ? "bold" : "medium";
                    return o.createElement(f.Z, { "aria-label": t, "aria-selected": _, focusable: !!_, interactiveStyles: T, link: v, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [M.pillStyle] : [M.link]), ...(u && _ ? [M.pillActiveStyle] : []), c ? (u ? M.compactPill : M.compactLink) : null, m ? M.roundedRect : null, S], withoutInteractiveStyles: b }, ({ isFocused: t, isHovered: d }) => o.createElement(i.Z, { style: u && M.flexGrow }, o.createElement(p.ZP, { size: b ? "headline2" : void 0, style: [M.text, { color: this._getTextColor(_, d, b, u) }, c && M.compactText, b && t && M.focusedText, u && M.pillTextStyle, u && _ && M.pillActiveTextStyle, u && d && M.pillHoverTextStyle], weight: Z }, e && o.createElement(e, { style: M.icon }), n, b || u ? null : o.createElement(i.Z, { style: _ && [M.border, { backgroundColor: l.default.theme.colors[s] }] })), r ? o.createElement(h.Z, { count: r, standalone: !0, style: [M.badge, r >= 10 && M.multiDigitBadge, r >= 20 && M.truncatedCountBadge], truncatedCountFormatter: D, unreadCountLabel: y, withBorder: !1 }) : a ? o.createElement(h.Z, { pip: !0, standalone: !0, style: M.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (w.contextType = b.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const M = l.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    pillStyle: { backgroundColor: e.colors.transparent, borderColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    pillTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillHoverStyle: { backgroundColor: e.colors.gray100, borderColor: e.colors.gray50 },
                    pillHoverTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillActiveStyle: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50 },
                    pillActiveTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                S = w,
                k = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                E = ({ alignFirstItem: e, "aria-label": t, isCompact: r, isPillLink: l, isRoundedRect: i, links: d, style: c, visibleItemIndex: u }) => {
                    const m = d
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: p } = s.ZP.useProps(),
                        h = p() && !l,
                        b = o.useMemo(
                            () =>
                                d.filter(Boolean).map(({ label: t, viewType: n, ...s }, d) => {
                                    const c = h ? [k.linkRedesign, 0 === d && k.firstLinkRedesign, e && 0 === d && k.withNoPaddingStart] : void 0;
                                    return o.createElement(S, (0, a.Z)({ viewType: n }, s, { isCompact: r, isPillLink: l, isRoundedRect: i, isWebRedesign: h, style: c }), t);
                                }),
                            [e, r, l, i, h, d],
                        );
                    return o.createElement(n.Z, { "aria-label": t, buttonsContainerStyle: l && k.gap, childrenStyle: !h && k.flexGrow, key: m, style: [l ? null : k.segmentedControl, h && k.leftAligned, c], visibleItemIndex: u }, b);
                };
        },
        853485: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var a = r(202784),
                o = r(890601),
                n = r(783427),
                s = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        376278: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var a = r(202784),
                o = r(890601),
                n = r(783427),
                s = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M11 1.28v.09c0 1.79 0 3.53-.829 5.18-.42-.78-1.061-1.36-1.707-1.94l-.268-.24c-.501 1-1.151 1.98-1.807 2.97C4.959 9.5 3.5 11.7 3.5 14.25c0 2.52.949 4.55 2.538 5.94 1.437 1.26 3.334 1.94 5.378 2.04.122.01.539.02.584.02 4.615 0 8.5-3.37 8.5-8C20.5 8.29 15.797 4 11 1.28zm2.534 18.08c-.521.56-1.144.87-1.681.89-.111 0-.221-.01-.331-.01-.454-.05-.684-.23-.82-.41-.192-.24-.313-.64-.313-1.14 0-.75.362-1.26 1.214-2.02.166-.14.35-.3.548-.46.47-.4 1.017-.86 1.56-1.41l.031.07c.35.83.647 1.78.647 2.54 0 .65-.317 1.38-.855 1.95zm2.572-.42c.18-.48.283-1 .283-1.53 0-1.17-.429-2.43-.804-3.32-.194-.46-.388-.85-.533-1.13-.073-.14-1.02-1.78-1.02-1.78l-.901 1.23c-.678.92-1.425 1.55-2.18 2.19-.224.19-.449.38-.673.58-.94.83-1.889 1.85-1.889 3.51 0 .22.014.44.047.67C6.673 18.38 5.5 16.6 5.5 14.25c0-2.01 1.133-3.61 2.246-5.18.284-.4.568-.8.831-1.21.419.89.419 2.18.173 3.08l.117-.11c1.971-1.7 3.514-3.03 3.969-6.06.632.47 1.415 1.12 2.195 1.93 1.79 1.84 3.469 4.42 3.469 7.55 0 1.92-.921 3.61-2.394 4.69z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        937450: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var a = r(202784),
                o = r(890601),
                n = r(783427),
                s = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.HomeTimeline.47c2cfda.js.map
